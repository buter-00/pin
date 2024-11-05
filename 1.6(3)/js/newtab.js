var newtab = function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    return n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 21)
}([function(t, e, n) {
    "use strict";

    function o(t, e, n, o, r, i, a, s) {
        var l = typeof(t = t || {}).default;
        "object" !== l && "function" !== l || (t = t.default);
        var c, u = "function" == typeof t ? t.options : t;
        if (e && (u.render = e, u.staticRenderFns = n, u._compiled = !0), o && (u.functional = !0), i && (u._scopeId = i), a ? (c = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
            }, u._ssrRegister = c) : r && (c = s ? function() {
                r.call(this, this.$root.$options.shadowRoot)
            } : r), c)
            if (u.functional) {
                u._injectStyles = c;
                var d = u.render;
                u.render = function(t, e) {
                    return c.call(e), d(t, e)
                }
            } else {
                var p = u.beforeCreate;
                u.beforeCreate = p ? [].concat(p, c) : [c]
            } return {
            exports: t,
            options: u
        }
    }
    n.d(e, "a", function() {
        return o
    })
}, function(t, e, n) {
    "use strict";

    function o(t, e) {
        for (var n = [], o = {}, r = 0; r < e.length; r++) {
            var i = e[r],
                a = i[0],
                s = {
                    id: t + ":" + r,
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            o[a] ? o[a].parts.push(s) : n.push(o[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }
    n.r(e), n.d(e, "default", function() {
        return h
    });
    var r = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var i = {},
        a = r && (document.head || document.getElementsByTagName("head")[0]),
        s = null,
        l = 0,
        c = !1,
        u = function() {},
        d = null,
        p = "data-vue-ssr-id",
        f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function h(t, e, n, r) {
        c = n, d = r || {};
        var a = o(t, e);
        return m(a),
            function(e) {
                for (var n = [], r = 0; r < a.length; r++) {
                    var s = a[r];
                    (l = i[s.id]).refs--, n.push(l)
                }
                e ? m(a = o(t, e)) : a = [];
                for (r = 0; r < n.length; r++) {
                    var l;
                    if (0 === (l = n[r]).refs) {
                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                        delete i[l.id]
                    }
                }
            }
    }

    function m(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e],
                o = i[n.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++) o.parts[r](n.parts[r]);
                for (; r < n.parts.length; r++) o.parts.push(_(n.parts[r]));
                o.parts.length > n.parts.length && (o.parts.length = n.parts.length)
            } else {
                var a = [];
                for (r = 0; r < n.parts.length; r++) a.push(_(n.parts[r]));
                i[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }

    function v() {
        var t = document.createElement("style");
        return t.type = "text/css", a.appendChild(t), t
    }

    function _(t) {
        var e, n, o = document.querySelector("style[" + p + '~="' + t.id + '"]');
        if (o) {
            if (c) return u;
            o.parentNode.removeChild(o)
        }
        if (f) {
            var r = l++;
            o = s || (s = v()), e = y.bind(null, o, r, !1), n = y.bind(null, o, r, !0)
        } else o = v(), e = function(t, e) {
            var n = e.css,
                o = e.media,
                r = e.sourceMap;
            o && t.setAttribute("media", o);
            d.ssrId && t.setAttribute(p, e.id);
            r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            if (t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }.bind(null, o), n = function() {
            o.parentNode.removeChild(o)
        };
        return e(t),
            function(o) {
                if (o) {
                    if (o.css === t.css && o.media === t.media && o.sourceMap === t.sourceMap) return;
                    e(t = o)
                } else n()
            }
    }
    var g, b = (g = [], function(t, e) {
        return g[t] = e, g.filter(Boolean).join("\n")
    });

    function y(t, e, n, o) {
        var r = n ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = b(e, r);
        else {
            var i = document.createTextNode(r),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var n = function(t, e) {
                    var n = t[1] || "",
                        o = t[3];
                    if (!o) return n;
                    if (e && "function" == typeof btoa) {
                        var r = (a = o, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            i = o.sources.map(function(t) {
                                return "/*# sourceURL=" + o.sourceRoot + t + " */"
                            });
                        return [n].concat(i).concat([r]).join("\n")
                    }
                    var a;
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var o = {}, r = 0; r < this.length; r++) {
                var i = this[r][0];
                "number" == typeof i && (o[i] = !0)
            }
            for (r = 0; r < t.length; r++) {
                var a = t[r];
                "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, function(t, e, n) {
    "use strict";
    (function(t, n) {
        /*!
         * Vue.js v2.5.16
         * (c) 2014-2018 Evan You
         * Released under the MIT License.
         */
        var o = Object.freeze({});

        function r(t) {
            return void 0 === t || null === t
        }

        function i(t) {
            return void 0 !== t && null !== t
        }

        function a(t) {
            return !0 === t
        }

        function s(t) {
            return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t
        }

        function l(t) {
            return null !== t && "object" == typeof t
        }
        var c = Object.prototype.toString;

        function u(t) {
            return "[object Object]" === c.call(t)
        }

        function d(t) {
            return "[object RegExp]" === c.call(t)
        }

        function p(t) {
            var e = parseFloat(String(t));
            return e >= 0 && Math.floor(e) === e && isFinite(t)
        }

        function f(t) {
            return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t)
        }

        function h(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e
        }

        function m(t, e) {
            for (var n = Object.create(null), o = t.split(","), r = 0; r < o.length; r++) n[o[r]] = !0;
            return e ? function(t) {
                return n[t.toLowerCase()]
            } : function(t) {
                return n[t]
            }
        }
        m("slot,component", !0);
        var v = m("key,ref,slot,slot-scope,is");

        function _(t, e) {
            if (t.length) {
                var n = t.indexOf(e);
                if (n > -1) return t.splice(n, 1)
            }
        }
        var g = Object.prototype.hasOwnProperty;

        function b(t, e) {
            return g.call(t, e)
        }

        function y(t) {
            var e = Object.create(null);
            return function(n) {
                return e[n] || (e[n] = t(n))
            }
        }
        var w = /-(\w)/g,
            k = y(function(t) {
                return t.replace(w, function(t, e) {
                    return e ? e.toUpperCase() : ""
                })
            }),
            x = y(function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }),
            C = /\B([A-Z])/g,
            $ = y(function(t) {
                return t.replace(C, "-$1").toLowerCase()
            });
        var S = Function.prototype.bind ? function(t, e) {
            return t.bind(e)
        } : function(t, e) {
            function n(n) {
                var o = arguments.length;
                return o ? o > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
            }
            return n._length = t.length, n
        };

        function T(t, e) {
            e = e || 0;
            for (var n = t.length - e, o = new Array(n); n--;) o[n] = t[n + e];
            return o
        }

        function E(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function O(t) {
            for (var e = {}, n = 0; n < t.length; n++) t[n] && E(e, t[n]);
            return e
        }

        function A(t, e, n) {}
        var L = function(t, e, n) {
                return !1
            },
            B = function(t) {
                return t
            };

        function P(t, e) {
            if (t === e) return !0;
            var n = l(t),
                o = l(e);
            if (!n || !o) return !n && !o && String(t) === String(e);
            try {
                var r = Array.isArray(t),
                    i = Array.isArray(e);
                if (r && i) return t.length === e.length && t.every(function(t, n) {
                    return P(t, e[n])
                });
                if (r || i) return !1;
                var a = Object.keys(t),
                    s = Object.keys(e);
                return a.length === s.length && a.every(function(n) {
                    return P(t[n], e[n])
                })
            } catch (t) {
                return !1
            }
        }

        function j(t, e) {
            for (var n = 0; n < t.length; n++)
                if (P(t[n], e)) return n;
            return -1
        }

        function N(t) {
            var e = !1;
            return function() {
                e || (e = !0, t.apply(this, arguments))
            }
        }
        var D = "data-server-rendered",
            I = ["component", "directive", "filter"],
            M = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
            F = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: L,
                isReservedAttr: L,
                isUnknownElement: L,
                getTagNamespace: A,
                parsePlatformTagName: B,
                mustUseProp: L,
                _lifecycleHooks: M
            };

        function U(t, e, n, o) {
            Object.defineProperty(t, e, {
                value: n,
                enumerable: !!o,
                writable: !0,
                configurable: !0
            })
        }
        var R = /[^\w.$]/;
        var z, V = "__proto__" in {},
            W = "undefined" != typeof window,
            H = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            X = H && WXEnvironment.platform.toLowerCase(),
            q = W && window.navigator.userAgent.toLowerCase(),
            Y = q && /msie|trident/.test(q),
            J = q && q.indexOf("msie 9.0") > 0,
            G = q && q.indexOf("edge/") > 0,
            K = (q && q.indexOf("android"), q && /iphone|ipad|ipod|ios/.test(q) || "ios" === X),
            Z = (q && /chrome\/\d+/.test(q), {}.watch),
            Q = !1;
        if (W) try {
            var tt = {};
            Object.defineProperty(tt, "passive", {
                get: function() {
                    Q = !0
                }
            }), window.addEventListener("test-passive", null, tt)
        } catch (t) {}
        var et = function() {
                return void 0 === z && (z = !W && !H && void 0 !== t && "server" === t.process.env.VUE_ENV), z
            },
            nt = W && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

        function ot(t) {
            return "function" == typeof t && /native code/.test(t.toString())
        }
        var rt, it = "undefined" != typeof Symbol && ot(Symbol) && "undefined" != typeof Reflect && ot(Reflect.ownKeys);
        rt = "undefined" != typeof Set && ot(Set) ? Set : function() {
            function t() {
                this.set = Object.create(null)
            }
            return t.prototype.has = function(t) {
                return !0 === this.set[t]
            }, t.prototype.add = function(t) {
                this.set[t] = !0
            }, t.prototype.clear = function() {
                this.set = Object.create(null)
            }, t
        }();
        var at = A,
            st = 0,
            lt = function() {
                this.id = st++, this.subs = []
            };
        lt.prototype.addSub = function(t) {
            this.subs.push(t)
        }, lt.prototype.removeSub = function(t) {
            _(this.subs, t)
        }, lt.prototype.depend = function() {
            lt.target && lt.target.addDep(this)
        }, lt.prototype.notify = function() {
            for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update()
        }, lt.target = null;
        var ct = [];

        function ut(t) {
            lt.target && ct.push(lt.target), lt.target = t
        }

        function dt() {
            lt.target = ct.pop()
        }
        var pt = function(t, e, n, o, r, i, a, s) {
                this.tag = t, this.data = e, this.children = n, this.text = o, this.elm = r, this.ns = void 0, this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            },
            ft = {
                child: {
                    configurable: !0
                }
            };
        ft.child.get = function() {
            return this.componentInstance
        }, Object.defineProperties(pt.prototype, ft);
        var ht = function(t) {
            void 0 === t && (t = "");
            var e = new pt;
            return e.text = t, e.isComment = !0, e
        };

        function mt(t) {
            return new pt(void 0, void 0, void 0, String(t))
        }

        function vt(t) {
            var e = new pt(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
            return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.isCloned = !0, e
        }
        var _t = Array.prototype,
            gt = Object.create(_t);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
            var e = _t[t];
            U(gt, t, function() {
                for (var n = [], o = arguments.length; o--;) n[o] = arguments[o];
                var r, i = e.apply(this, n),
                    a = this.__ob__;
                switch (t) {
                    case "push":
                    case "unshift":
                        r = n;
                        break;
                    case "splice":
                        r = n.slice(2)
                }
                return r && a.observeArray(r), a.dep.notify(), i
            })
        });
        var bt = Object.getOwnPropertyNames(gt),
            yt = !0;

        function wt(t) {
            yt = t
        }
        var kt = function(t) {
            (this.value = t, this.dep = new lt, this.vmCount = 0, U(t, "__ob__", this), Array.isArray(t)) ? ((V ? xt : Ct)(t, gt, bt), this.observeArray(t)) : this.walk(t)
        };

        function xt(t, e, n) {
            t.__proto__ = e
        }

        function Ct(t, e, n) {
            for (var o = 0, r = n.length; o < r; o++) {
                var i = n[o];
                U(t, i, e[i])
            }
        }

        function $t(t, e) {
            var n;
            if (l(t) && !(t instanceof pt)) return b(t, "__ob__") && t.__ob__ instanceof kt ? n = t.__ob__ : yt && !et() && (Array.isArray(t) || u(t)) && Object.isExtensible(t) && !t._isVue && (n = new kt(t)), e && n && n.vmCount++, n
        }

        function St(t, e, n, o, r) {
            var i = new lt,
                a = Object.getOwnPropertyDescriptor(t, e);
            if (!a || !1 !== a.configurable) {
                var s = a && a.get;
                s || 2 !== arguments.length || (n = t[e]);
                var l = a && a.set,
                    c = !r && $t(n);
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var e = s ? s.call(t) : n;
                        return lt.target && (i.depend(), c && (c.dep.depend(), Array.isArray(e) && function t(e) {
                            for (var n = void 0, o = 0, r = e.length; o < r; o++)(n = e[o]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && t(n)
                        }(e))), e
                    },
                    set: function(e) {
                        var o = s ? s.call(t) : n;
                        e === o || e != e && o != o || (l ? l.call(t, e) : n = e, c = !r && $t(e), i.notify())
                    }
                })
            }
        }

        function Tt(t, e, n) {
            if (Array.isArray(t) && p(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;
            if (e in t && !(e in Object.prototype)) return t[e] = n, n;
            var o = t.__ob__;
            return t._isVue || o && o.vmCount ? n : o ? (St(o.value, e, n), o.dep.notify(), n) : (t[e] = n, n)
        }

        function Et(t, e) {
            if (Array.isArray(t) && p(e)) t.splice(e, 1);
            else {
                var n = t.__ob__;
                t._isVue || n && n.vmCount || b(t, e) && (delete t[e], n && n.dep.notify())
            }
        }
        kt.prototype.walk = function(t) {
            for (var e = Object.keys(t), n = 0; n < e.length; n++) St(t, e[n])
        }, kt.prototype.observeArray = function(t) {
            for (var e = 0, n = t.length; e < n; e++) $t(t[e])
        };
        var Ot = F.optionMergeStrategies;

        function At(t, e) {
            if (!e) return t;
            for (var n, o, r, i = Object.keys(e), a = 0; a < i.length; a++) o = t[n = i[a]], r = e[n], b(t, n) ? u(o) && u(r) && At(o, r) : Tt(t, n, r);
            return t
        }

        function Lt(t, e, n) {
            return n ? function() {
                var o = "function" == typeof e ? e.call(n, n) : e,
                    r = "function" == typeof t ? t.call(n, n) : t;
                return o ? At(o, r) : r
            } : e ? t ? function() {
                return At("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t)
            } : e : t
        }

        function Bt(t, e) {
            return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t
        }

        function Pt(t, e, n, o) {
            var r = Object.create(t || null);
            return e ? E(r, e) : r
        }
        Ot.data = function(t, e, n) {
            return n ? Lt(t, e, n) : e && "function" != typeof e ? t : Lt(t, e)
        }, M.forEach(function(t) {
            Ot[t] = Bt
        }), I.forEach(function(t) {
            Ot[t + "s"] = Pt
        }), Ot.watch = function(t, e, n, o) {
            if (t === Z && (t = void 0), e === Z && (e = void 0), !e) return Object.create(t || null);
            if (!t) return e;
            var r = {};
            for (var i in E(r, t), e) {
                var a = r[i],
                    s = e[i];
                a && !Array.isArray(a) && (a = [a]), r[i] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
            }
            return r
        }, Ot.props = Ot.methods = Ot.inject = Ot.computed = function(t, e, n, o) {
            if (!t) return e;
            var r = Object.create(null);
            return E(r, t), e && E(r, e), r
        }, Ot.provide = Lt;
        var jt = function(t, e) {
            return void 0 === e ? t : e
        };

        function Nt(t, e, n) {
            "function" == typeof e && (e = e.options),
                function(t, e) {
                    var n = t.props;
                    if (n) {
                        var o, r, i = {};
                        if (Array.isArray(n))
                            for (o = n.length; o--;) "string" == typeof(r = n[o]) && (i[k(r)] = {
                                type: null
                            });
                        else if (u(n))
                            for (var a in n) r = n[a], i[k(a)] = u(r) ? r : {
                                type: r
                            };
                        t.props = i
                    }
                }(e),
                function(t, e) {
                    var n = t.inject;
                    if (n) {
                        var o = t.inject = {};
                        if (Array.isArray(n))
                            for (var r = 0; r < n.length; r++) o[n[r]] = {
                                from: n[r]
                            };
                        else if (u(n))
                            for (var i in n) {
                                var a = n[i];
                                o[i] = u(a) ? E({
                                    from: i
                                }, a) : {
                                    from: a
                                }
                            }
                    }
                }(e),
                function(t) {
                    var e = t.directives;
                    if (e)
                        for (var n in e) {
                            var o = e[n];
                            "function" == typeof o && (e[n] = {
                                bind: o,
                                update: o
                            })
                        }
                }(e);
            var o = e.extends;
            if (o && (t = Nt(t, o, n)), e.mixins)
                for (var r = 0, i = e.mixins.length; r < i; r++) t = Nt(t, e.mixins[r], n);
            var a, s = {};
            for (a in t) l(a);
            for (a in e) b(t, a) || l(a);

            function l(o) {
                var r = Ot[o] || jt;
                s[o] = r(t[o], e[o], n, o)
            }
            return s
        }

        function Dt(t, e, n, o) {
            if ("string" == typeof n) {
                var r = t[e];
                if (b(r, n)) return r[n];
                var i = k(n);
                if (b(r, i)) return r[i];
                var a = x(i);
                return b(r, a) ? r[a] : r[n] || r[i] || r[a]
            }
        }

        function It(t, e, n, o) {
            var r = e[t],
                i = !b(n, t),
                a = n[t],
                s = Ut(Boolean, r.type);
            if (s > -1)
                if (i && !b(r, "default")) a = !1;
                else if ("" === a || a === $(t)) {
                var l = Ut(String, r.type);
                (l < 0 || s < l) && (a = !0)
            }
            if (void 0 === a) {
                a = function(t, e, n) {
                    if (!b(e, "default")) return;
                    var o = e.default;
                    0;
                    if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
                    return "function" == typeof o && "Function" !== Mt(e.type) ? o.call(t) : o
                }(o, r, t);
                var c = yt;
                wt(!0), $t(a), wt(c)
            }
            return a
        }

        function Mt(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);
            return e ? e[1] : ""
        }

        function Ft(t, e) {
            return Mt(t) === Mt(e)
        }

        function Ut(t, e) {
            if (!Array.isArray(e)) return Ft(e, t) ? 0 : -1;
            for (var n = 0, o = e.length; n < o; n++)
                if (Ft(e[n], t)) return n;
            return -1
        }

        function Rt(t, e, n) {
            if (e)
                for (var o = e; o = o.$parent;) {
                    var r = o.$options.errorCaptured;
                    if (r)
                        for (var i = 0; i < r.length; i++) try {
                            if (!1 === r[i].call(o, t, e, n)) return
                        } catch (t) {
                            zt(t, o, "errorCaptured hook")
                        }
                }
            zt(t, e, n)
        }

        function zt(t, e, n) {
            if (F.errorHandler) try {
                return F.errorHandler.call(null, t, e, n)
            } catch (t) {
                Vt(t, null, "config.errorHandler")
            }
            Vt(t, e, n)
        }

        function Vt(t, e, n) {
            if (!W && !H || "undefined" == typeof console) throw t;
            console.error(t)
        }
        var Wt, Ht, Xt = [],
            qt = !1;

        function Yt() {
            qt = !1;
            var t = Xt.slice(0);
            Xt.length = 0;
            for (var e = 0; e < t.length; e++) t[e]()
        }
        var Jt = !1;
        if (void 0 !== n && ot(n)) Ht = function() {
            n(Yt)
        };
        else if ("undefined" == typeof MessageChannel || !ot(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) Ht = function() {
            setTimeout(Yt, 0)
        };
        else {
            var Gt = new MessageChannel,
                Kt = Gt.port2;
            Gt.port1.onmessage = Yt, Ht = function() {
                Kt.postMessage(1)
            }
        }
        if ("undefined" != typeof Promise && ot(Promise)) {
            var Zt = Promise.resolve();
            Wt = function() {
                Zt.then(Yt), K && setTimeout(A)
            }
        } else Wt = Ht;

        function Qt(t, e) {
            var n;
            if (Xt.push(function() {
                    if (t) try {
                        t.call(e)
                    } catch (t) {
                        Rt(t, e, "nextTick")
                    } else n && n(e)
                }), qt || (qt = !0, Jt ? Ht() : Wt()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
                n = t
            })
        }
        var te = new rt;

        function ee(t) {
            ! function t(e, n) {
                var o, r;
                var i = Array.isArray(e);
                if (!i && !l(e) || Object.isFrozen(e) || e instanceof pt) return;
                if (e.__ob__) {
                    var a = e.__ob__.dep.id;
                    if (n.has(a)) return;
                    n.add(a)
                }
                if (i)
                    for (o = e.length; o--;) t(e[o], n);
                else
                    for (r = Object.keys(e), o = r.length; o--;) t(e[r[o]], n)
            }(t, te), te.clear()
        }
        var ne, oe = y(function(t) {
            var e = "&" === t.charAt(0),
                n = "~" === (t = e ? t.slice(1) : t).charAt(0),
                o = "!" === (t = n ? t.slice(1) : t).charAt(0);
            return {
                name: t = o ? t.slice(1) : t,
                once: n,
                capture: o,
                passive: e
            }
        });

        function re(t) {
            function e() {
                var t = arguments,
                    n = e.fns;
                if (!Array.isArray(n)) return n.apply(null, arguments);
                for (var o = n.slice(), r = 0; r < o.length; r++) o[r].apply(null, t)
            }
            return e.fns = t, e
        }

        function ie(t, e, n, o, i) {
            var a, s, l, c;
            for (a in t) s = t[a], l = e[a], c = oe(a), r(s) || (r(l) ? (r(s.fns) && (s = t[a] = re(s)), n(c.name, s, c.once, c.capture, c.passive, c.params)) : s !== l && (l.fns = s, t[a] = l));
            for (a in e) r(t[a]) && o((c = oe(a)).name, e[a], c.capture)
        }

        function ae(t, e, n) {
            var o;
            t instanceof pt && (t = t.data.hook || (t.data.hook = {}));
            var s = t[e];

            function l() {
                n.apply(this, arguments), _(o.fns, l)
            }
            r(s) ? o = re([l]) : i(s.fns) && a(s.merged) ? (o = s).fns.push(l) : o = re([s, l]), o.merged = !0, t[e] = o
        }

        function se(t, e, n, o, r) {
            if (i(e)) {
                if (b(e, n)) return t[n] = e[n], r || delete e[n], !0;
                if (b(e, o)) return t[n] = e[o], r || delete e[o], !0
            }
            return !1
        }

        function le(t) {
            return s(t) ? [mt(t)] : Array.isArray(t) ? function t(e, n) {
                var o = [];
                var l, c, u, d;
                for (l = 0; l < e.length; l++) r(c = e[l]) || "boolean" == typeof c || (u = o.length - 1, d = o[u], Array.isArray(c) ? c.length > 0 && (ce((c = t(c, (n || "") + "_" + l))[0]) && ce(d) && (o[u] = mt(d.text + c[0].text), c.shift()), o.push.apply(o, c)) : s(c) ? ce(d) ? o[u] = mt(d.text + c) : "" !== c && o.push(mt(c)) : ce(c) && ce(d) ? o[u] = mt(d.text + c.text) : (a(e._isVList) && i(c.tag) && r(c.key) && i(n) && (c.key = "__vlist" + n + "_" + l + "__"), o.push(c)));
                return o
            }(t) : void 0
        }

        function ce(t) {
            return i(t) && i(t.text) && !1 === t.isComment
        }

        function ue(t, e) {
            return (t.__esModule || it && "Module" === t[Symbol.toStringTag]) && (t = t.default), l(t) ? e.extend(t) : t
        }

        function de(t) {
            return t.isComment && t.asyncFactory
        }

        function pe(t) {
            if (Array.isArray(t))
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (i(n) && (i(n.componentOptions) || de(n))) return n
                }
        }

        function fe(t, e, n) {
            n ? ne.$once(t, e) : ne.$on(t, e)
        }

        function he(t, e) {
            ne.$off(t, e)
        }

        function me(t, e, n) {
            ne = t, ie(e, n || {}, fe, he), ne = void 0
        }

        function ve(t, e) {
            var n = {};
            if (!t) return n;
            for (var o = 0, r = t.length; o < r; o++) {
                var i = t[o],
                    a = i.data;
                if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== e && i.fnContext !== e || !a || null == a.slot)(n.default || (n.default = [])).push(i);
                else {
                    var s = a.slot,
                        l = n[s] || (n[s] = []);
                    "template" === i.tag ? l.push.apply(l, i.children || []) : l.push(i)
                }
            }
            for (var c in n) n[c].every(_e) && delete n[c];
            return n
        }

        function _e(t) {
            return t.isComment && !t.asyncFactory || " " === t.text
        }

        function ge(t, e) {
            e = e || {};
            for (var n = 0; n < t.length; n++) Array.isArray(t[n]) ? ge(t[n], e) : e[t[n].key] = t[n].fn;
            return e
        }
        var be = null;

        function ye(t) {
            for (; t && (t = t.$parent);)
                if (t._inactive) return !0;
            return !1
        }

        function we(t, e) {
            if (e) {
                if (t._directInactive = !1, ye(t)) return
            } else if (t._directInactive) return;
            if (t._inactive || null === t._inactive) {
                t._inactive = !1;
                for (var n = 0; n < t.$children.length; n++) we(t.$children[n]);
                ke(t, "activated")
            }
        }

        function ke(t, e) {
            ut();
            var n = t.$options[e];
            if (n)
                for (var o = 0, r = n.length; o < r; o++) try {
                    n[o].call(t)
                } catch (n) {
                    Rt(n, t, e + " hook")
                }
            t._hasHookEvent && t.$emit("hook:" + e), dt()
        }
        var xe = [],
            Ce = [],
            $e = {},
            Se = !1,
            Te = !1,
            Ee = 0;

        function Oe() {
            var t, e;
            for (Te = !0, xe.sort(function(t, e) {
                    return t.id - e.id
                }), Ee = 0; Ee < xe.length; Ee++) e = (t = xe[Ee]).id, $e[e] = null, t.run();
            var n = Ce.slice(),
                o = xe.slice();
            Ee = xe.length = Ce.length = 0, $e = {}, Se = Te = !1,
                function(t) {
                    for (var e = 0; e < t.length; e++) t[e]._inactive = !0, we(t[e], !0)
                }(n),
                function(t) {
                    var e = t.length;
                    for (; e--;) {
                        var n = t[e],
                            o = n.vm;
                        o._watcher === n && o._isMounted && ke(o, "updated")
                    }
                }(o), nt && F.devtools && nt.emit("flush")
        }
        var Ae = 0,
            Le = function(t, e, n, o, r) {
                this.vm = t, r && (t._watcher = this), t._watchers.push(this), o ? (this.deep = !!o.deep, this.user = !!o.user, this.lazy = !!o.lazy, this.sync = !!o.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Ae, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new rt, this.newDepIds = new rt, this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = function(t) {
                    if (!R.test(t)) {
                        var e = t.split(".");
                        return function(t) {
                            for (var n = 0; n < e.length; n++) {
                                if (!t) return;
                                t = t[e[n]]
                            }
                            return t
                        }
                    }
                }(e), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get()
            };
        Le.prototype.get = function() {
            var t;
            ut(this);
            var e = this.vm;
            try {
                t = this.getter.call(e, e)
            } catch (t) {
                if (!this.user) throw t;
                Rt(t, e, 'getter for watcher "' + this.expression + '"')
            } finally {
                this.deep && ee(t), dt(), this.cleanupDeps()
            }
            return t
        }, Le.prototype.addDep = function(t) {
            var e = t.id;
            this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
        }, Le.prototype.cleanupDeps = function() {
            for (var t = this.deps.length; t--;) {
                var e = this.deps[t];
                this.newDepIds.has(e.id) || e.removeSub(this)
            }
            var n = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
        }, Le.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
                var e = t.id;
                if (null == $e[e]) {
                    if ($e[e] = !0, Te) {
                        for (var n = xe.length - 1; n > Ee && xe[n].id > t.id;) n--;
                        xe.splice(n + 1, 0, t)
                    } else xe.push(t);
                    Se || (Se = !0, Qt(Oe))
                }
            }(this)
        }, Le.prototype.run = function() {
            if (this.active) {
                var t = this.get();
                if (t !== this.value || l(t) || this.deep) {
                    var e = this.value;
                    if (this.value = t, this.user) try {
                        this.cb.call(this.vm, t, e)
                    } catch (t) {
                        Rt(t, this.vm, 'callback for watcher "' + this.expression + '"')
                    } else this.cb.call(this.vm, t, e)
                }
            }
        }, Le.prototype.evaluate = function() {
            this.value = this.get(), this.dirty = !1
        }, Le.prototype.depend = function() {
            for (var t = this.deps.length; t--;) this.deps[t].depend()
        }, Le.prototype.teardown = function() {
            if (this.active) {
                this.vm._isBeingDestroyed || _(this.vm._watchers, this);
                for (var t = this.deps.length; t--;) this.deps[t].removeSub(this);
                this.active = !1
            }
        };
        var Be = {
            enumerable: !0,
            configurable: !0,
            get: A,
            set: A
        };

        function Pe(t, e, n) {
            Be.get = function() {
                return this[e][n]
            }, Be.set = function(t) {
                this[e][n] = t
            }, Object.defineProperty(t, n, Be)
        }

        function je(t) {
            t._watchers = [];
            var e = t.$options;
            e.props && function(t, e) {
                var n = t.$options.propsData || {},
                    o = t._props = {},
                    r = t.$options._propKeys = [];
                t.$parent && wt(!1);
                var i = function(i) {
                    r.push(i);
                    var a = It(i, e, n, t);
                    St(o, i, a), i in t || Pe(t, "_props", i)
                };
                for (var a in e) i(a);
                wt(!0)
            }(t, e.props), e.methods && function(t, e) {
                t.$options.props;
                for (var n in e) t[n] = null == e[n] ? A : S(e[n], t)
            }(t, e.methods), e.data ? function(t) {
                var e = t.$options.data;
                u(e = t._data = "function" == typeof e ? function(t, e) {
                    ut();
                    try {
                        return t.call(e, e)
                    } catch (t) {
                        return Rt(t, e, "data()"), {}
                    } finally {
                        dt()
                    }
                }(e, t) : e || {}) || (e = {});
                var n = Object.keys(e),
                    o = t.$options.props,
                    r = (t.$options.methods, n.length);
                for (; r--;) {
                    var i = n[r];
                    0, o && b(o, i) || (void 0, 36 !== (a = (i + "").charCodeAt(0)) && 95 !== a && Pe(t, "_data", i))
                }
                var a;
                $t(e, !0)
            }(t) : $t(t._data = {}, !0), e.computed && function(t, e) {
                var n = t._computedWatchers = Object.create(null),
                    o = et();
                for (var r in e) {
                    var i = e[r],
                        a = "function" == typeof i ? i : i.get;
                    0, o || (n[r] = new Le(t, a || A, A, Ne)), r in t || De(t, r, i)
                }
            }(t, e.computed), e.watch && e.watch !== Z && function(t, e) {
                for (var n in e) {
                    var o = e[n];
                    if (Array.isArray(o))
                        for (var r = 0; r < o.length; r++) Me(t, n, o[r]);
                    else Me(t, n, o)
                }
            }(t, e.watch)
        }
        var Ne = {
            lazy: !0
        };

        function De(t, e, n) {
            var o = !et();
            "function" == typeof n ? (Be.get = o ? Ie(e) : n, Be.set = A) : (Be.get = n.get ? o && !1 !== n.cache ? Ie(e) : n.get : A, Be.set = n.set ? n.set : A), Object.defineProperty(t, e, Be)
        }

        function Ie(t) {
            return function() {
                var e = this._computedWatchers && this._computedWatchers[t];
                if (e) return e.dirty && e.evaluate(), lt.target && e.depend(), e.value
            }
        }

        function Me(t, e, n, o) {
            return u(n) && (o = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, o)
        }

        function Fe(t, e) {
            if (t) {
                for (var n = Object.create(null), o = it ? Reflect.ownKeys(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }) : Object.keys(t), r = 0; r < o.length; r++) {
                    for (var i = o[r], a = t[i].from, s = e; s;) {
                        if (s._provided && b(s._provided, a)) {
                            n[i] = s._provided[a];
                            break
                        }
                        s = s.$parent
                    }
                    if (!s)
                        if ("default" in t[i]) {
                            var l = t[i].default;
                            n[i] = "function" == typeof l ? l.call(e) : l
                        } else 0
                }
                return n
            }
        }

        function Ue(t, e) {
            var n, o, r, a, s;
            if (Array.isArray(t) || "string" == typeof t)
                for (n = new Array(t.length), o = 0, r = t.length; o < r; o++) n[o] = e(t[o], o);
            else if ("number" == typeof t)
                for (n = new Array(t), o = 0; o < t; o++) n[o] = e(o + 1, o);
            else if (l(t))
                for (a = Object.keys(t), n = new Array(a.length), o = 0, r = a.length; o < r; o++) s = a[o], n[o] = e(t[s], s, o);
            return i(n) && (n._isVList = !0), n
        }

        function Re(t, e, n, o) {
            var r, i = this.$scopedSlots[t];
            if (i) n = n || {}, o && (n = E(E({}, o), n)), r = i(n) || e;
            else {
                var a = this.$slots[t];
                a && (a._rendered = !0), r = a || e
            }
            var s = n && n.slot;
            return s ? this.$createElement("template", {
                slot: s
            }, r) : r
        }

        function ze(t) {
            return Dt(this.$options, "filters", t) || B
        }

        function Ve(t, e) {
            return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
        }

        function We(t, e, n, o, r) {
            var i = F.keyCodes[e] || n;
            return r && o && !F.keyCodes[e] ? Ve(r, o) : i ? Ve(i, t) : o ? $(o) !== e : void 0
        }

        function He(t, e, n, o, r) {
            if (n)
                if (l(n)) {
                    var i;
                    Array.isArray(n) && (n = O(n));
                    var a = function(a) {
                        if ("class" === a || "style" === a || v(a)) i = t;
                        else {
                            var s = t.attrs && t.attrs.type;
                            i = o || F.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                        }
                        a in i || (i[a] = n[a], r && ((t.on || (t.on = {}))["update:" + a] = function(t) {
                            n[a] = t
                        }))
                    };
                    for (var s in n) a(s)
                } else;
            return t
        }

        function Xe(t, e) {
            var n = this._staticTrees || (this._staticTrees = []),
                o = n[t];
            return o && !e ? o : (Ye(o = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1), o)
        }

        function qe(t, e, n) {
            return Ye(t, "__once__" + e + (n ? "_" + n : ""), !0), t
        }

        function Ye(t, e, n) {
            if (Array.isArray(t))
                for (var o = 0; o < t.length; o++) t[o] && "string" != typeof t[o] && Je(t[o], e + "_" + o, n);
            else Je(t, e, n)
        }

        function Je(t, e, n) {
            t.isStatic = !0, t.key = e, t.isOnce = n
        }

        function Ge(t, e) {
            if (e)
                if (u(e)) {
                    var n = t.on = t.on ? E({}, t.on) : {};
                    for (var o in e) {
                        var r = n[o],
                            i = e[o];
                        n[o] = r ? [].concat(r, i) : i
                    }
                } else;
            return t
        }

        function Ke(t) {
            t._o = qe, t._n = h, t._s = f, t._l = Ue, t._t = Re, t._q = P, t._i = j, t._m = Xe, t._f = ze, t._k = We, t._b = He, t._v = mt, t._e = ht, t._u = ge, t._g = Ge
        }

        function Ze(t, e, n, r, i) {
            var s, l = i.options;
            b(r, "_uid") ? (s = Object.create(r))._original = r : (s = r, r = r._original);
            var c = a(l._compiled),
                u = !c;
            this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || o, this.injections = Fe(l.inject, r), this.slots = function() {
                return ve(n, r)
            }, c && (this.$options = l, this.$slots = this.slots(), this.$scopedSlots = t.scopedSlots || o), l._scopeId ? this._c = function(t, e, n, o) {
                var i = sn(s, t, e, n, o, u);
                return i && !Array.isArray(i) && (i.fnScopeId = l._scopeId, i.fnContext = r), i
            } : this._c = function(t, e, n, o) {
                return sn(s, t, e, n, o, u)
            }
        }

        function Qe(t, e, n, o) {
            var r = vt(t);
            return r.fnContext = n, r.fnOptions = o, e.slot && ((r.data || (r.data = {})).slot = e.slot), r
        }

        function tn(t, e) {
            for (var n in e) t[k(n)] = e[n]
        }
        Ke(Ze.prototype);
        var en = {
                init: function(t, e, n, o) {
                    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                        var r = t;
                        en.prepatch(r, r)
                    } else {
                        (t.componentInstance = function(t, e, n, o) {
                            var r = {
                                    _isComponent: !0,
                                    parent: e,
                                    _parentVnode: t,
                                    _parentElm: n || null,
                                    _refElm: o || null
                                },
                                a = t.data.inlineTemplate;
                            i(a) && (r.render = a.render, r.staticRenderFns = a.staticRenderFns);
                            return new t.componentOptions.Ctor(r)
                        }(t, be, n, o)).$mount(e ? t.elm : void 0, e)
                    }
                },
                prepatch: function(t, e) {
                    var n = e.componentOptions;
                    ! function(t, e, n, r, i) {
                        var a = !!(i || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== o);
                        if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = i, t.$attrs = r.data.attrs || o, t.$listeners = n || o, e && t.$options.props) {
                            wt(!1);
                            for (var s = t._props, l = t.$options._propKeys || [], c = 0; c < l.length; c++) {
                                var u = l[c],
                                    d = t.$options.props;
                                s[u] = It(u, d, e, t)
                            }
                            wt(!0), t.$options.propsData = e
                        }
                        n = n || o;
                        var p = t.$options._parentListeners;
                        t.$options._parentListeners = n, me(t, n, p), a && (t.$slots = ve(i, r.context), t.$forceUpdate())
                    }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children)
                },
                insert: function(t) {
                    var e, n = t.context,
                        o = t.componentInstance;
                    o._isMounted || (o._isMounted = !0, ke(o, "mounted")), t.data.keepAlive && (n._isMounted ? ((e = o)._inactive = !1, Ce.push(e)) : we(o, !0))
                },
                destroy: function(t) {
                    var e = t.componentInstance;
                    e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                        if (!(n && (e._directInactive = !0, ye(e)) || e._inactive)) {
                            e._inactive = !0;
                            for (var o = 0; o < e.$children.length; o++) t(e.$children[o]);
                            ke(e, "deactivated")
                        }
                    }(e, !0) : e.$destroy())
                }
            },
            nn = Object.keys(en);

        function on(t, e, n, s, c) {
            if (!r(t)) {
                var u = n.$options._base;
                if (l(t) && (t = u.extend(t)), "function" == typeof t) {
                    var d;
                    if (r(t.cid) && void 0 === (t = function(t, e, n) {
                            if (a(t.error) && i(t.errorComp)) return t.errorComp;
                            if (i(t.resolved)) return t.resolved;
                            if (a(t.loading) && i(t.loadingComp)) return t.loadingComp;
                            if (!i(t.contexts)) {
                                var o = t.contexts = [n],
                                    s = !0,
                                    c = function() {
                                        for (var t = 0, e = o.length; t < e; t++) o[t].$forceUpdate()
                                    },
                                    u = N(function(n) {
                                        t.resolved = ue(n, e), s || c()
                                    }),
                                    d = N(function(e) {
                                        i(t.errorComp) && (t.error = !0, c())
                                    }),
                                    p = t(u, d);
                                return l(p) && ("function" == typeof p.then ? r(t.resolved) && p.then(u, d) : i(p.component) && "function" == typeof p.component.then && (p.component.then(u, d), i(p.error) && (t.errorComp = ue(p.error, e)), i(p.loading) && (t.loadingComp = ue(p.loading, e), 0 === p.delay ? t.loading = !0 : setTimeout(function() {
                                    r(t.resolved) && r(t.error) && (t.loading = !0, c())
                                }, p.delay || 200)), i(p.timeout) && setTimeout(function() {
                                    r(t.resolved) && d(null)
                                }, p.timeout))), s = !1, t.loading ? t.loadingComp : t.resolved
                            }
                            t.contexts.push(n)
                        }(d = t, u, n))) return function(t, e, n, o, r) {
                        var i = ht();
                        return i.asyncFactory = t, i.asyncMeta = {
                            data: e,
                            context: n,
                            children: o,
                            tag: r
                        }, i
                    }(d, e, n, s, c);
                    e = e || {}, cn(t), i(e.model) && function(t, e) {
                        var n = t.model && t.model.prop || "value",
                            o = t.model && t.model.event || "input";
                        (e.props || (e.props = {}))[n] = e.model.value;
                        var r = e.on || (e.on = {});
                        i(r[o]) ? r[o] = [e.model.callback].concat(r[o]) : r[o] = e.model.callback
                    }(t.options, e);
                    var p = function(t, e, n) {
                        var o = e.options.props;
                        if (!r(o)) {
                            var a = {},
                                s = t.attrs,
                                l = t.props;
                            if (i(s) || i(l))
                                for (var c in o) {
                                    var u = $(c);
                                    se(a, l, c, u, !0) || se(a, s, c, u, !1)
                                }
                            return a
                        }
                    }(e, t);
                    if (a(t.options.functional)) return function(t, e, n, r, a) {
                        var s = t.options,
                            l = {},
                            c = s.props;
                        if (i(c))
                            for (var u in c) l[u] = It(u, c, e || o);
                        else i(n.attrs) && tn(l, n.attrs), i(n.props) && tn(l, n.props);
                        var d = new Ze(n, l, a, r, t),
                            p = s.render.call(null, d._c, d);
                        if (p instanceof pt) return Qe(p, n, d.parent, s);
                        if (Array.isArray(p)) {
                            for (var f = le(p) || [], h = new Array(f.length), m = 0; m < f.length; m++) h[m] = Qe(f[m], n, d.parent, s);
                            return h
                        }
                    }(t, p, e, n, s);
                    var f = e.on;
                    if (e.on = e.nativeOn, a(t.options.abstract)) {
                        var h = e.slot;
                        e = {}, h && (e.slot = h)
                    }! function(t) {
                        for (var e = t.hook || (t.hook = {}), n = 0; n < nn.length; n++) {
                            var o = nn[n];
                            e[o] = en[o]
                        }
                    }(e);
                    var m = t.options.name || c;
                    return new pt("vue-component-" + t.cid + (m ? "-" + m : ""), e, void 0, void 0, void 0, n, {
                        Ctor: t,
                        propsData: p,
                        listeners: f,
                        tag: c,
                        children: s
                    }, d)
                }
            }
        }
        var rn = 1,
            an = 2;

        function sn(t, e, n, o, c, u) {
            return (Array.isArray(n) || s(n)) && (c = o, o = n, n = void 0), a(u) && (c = an),
                function(t, e, n, o, s) {
                    if (i(n) && i(n.__ob__)) return ht();
                    i(n) && i(n.is) && (e = n.is);
                    if (!e) return ht();
                    0;
                    Array.isArray(o) && "function" == typeof o[0] && ((n = n || {}).scopedSlots = {
                        default: o[0]
                    }, o.length = 0);
                    s === an ? o = le(o) : s === rn && (o = function(t) {
                        for (var e = 0; e < t.length; e++)
                            if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                        return t
                    }(o));
                    var c, u;
                    if ("string" == typeof e) {
                        var d;
                        u = t.$vnode && t.$vnode.ns || F.getTagNamespace(e), c = F.isReservedTag(e) ? new pt(F.parsePlatformTagName(e), n, o, void 0, void 0, t) : i(d = Dt(t.$options, "components", e)) ? on(d, n, t, o, e) : new pt(e, n, o, void 0, void 0, t)
                    } else c = on(e, n, t, o);
                    return Array.isArray(c) ? c : i(c) ? (i(u) && function t(e, n, o) {
                        e.ns = n;
                        "foreignObject" === e.tag && (n = void 0, o = !0);
                        if (i(e.children))
                            for (var s = 0, l = e.children.length; s < l; s++) {
                                var c = e.children[s];
                                i(c.tag) && (r(c.ns) || a(o) && "svg" !== c.tag) && t(c, n, o)
                            }
                    }(c, u), i(n) && function(t) {
                        l(t.style) && ee(t.style);
                        l(t.class) && ee(t.class)
                    }(n), c) : ht()
                }(t, e, n, o, c)
        }
        var ln = 0;

        function cn(t) {
            var e = t.options;
            if (t.super) {
                var n = cn(t.super);
                if (n !== t.superOptions) {
                    t.superOptions = n;
                    var o = function(t) {
                        var e, n = t.options,
                            o = t.extendOptions,
                            r = t.sealedOptions;
                        for (var i in n) n[i] !== r[i] && (e || (e = {}), e[i] = un(n[i], o[i], r[i]));
                        return e
                    }(t);
                    o && E(t.extendOptions, o), (e = t.options = Nt(n, t.extendOptions)).name && (e.components[e.name] = t)
                }
            }
            return e
        }

        function un(t, e, n) {
            if (Array.isArray(t)) {
                var o = [];
                n = Array.isArray(n) ? n : [n], e = Array.isArray(e) ? e : [e];
                for (var r = 0; r < t.length; r++)(e.indexOf(t[r]) >= 0 || n.indexOf(t[r]) < 0) && o.push(t[r]);
                return o
            }
            return t
        }

        function dn(t) {
            this._init(t)
        }

        function pn(t) {
            t.cid = 0;
            var e = 1;
            t.extend = function(t) {
                t = t || {};
                var n = this,
                    o = n.cid,
                    r = t._Ctor || (t._Ctor = {});
                if (r[o]) return r[o];
                var i = t.name || n.options.name;
                var a = function(t) {
                    this._init(t)
                };
                return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = e++, a.options = Nt(n.options, t), a.super = n, a.options.props && function(t) {
                    var e = t.options.props;
                    for (var n in e) Pe(t.prototype, "_props", n)
                }(a), a.options.computed && function(t) {
                    var e = t.options.computed;
                    for (var n in e) De(t.prototype, n, e[n])
                }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, I.forEach(function(t) {
                    a[t] = n[t]
                }), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = t, a.sealedOptions = E({}, a.options), r[o] = a, a
            }
        }

        function fn(t) {
            return t && (t.Ctor.options.name || t.tag)
        }

        function hn(t, e) {
            return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!d(t) && t.test(e)
        }

        function mn(t, e) {
            var n = t.cache,
                o = t.keys,
                r = t._vnode;
            for (var i in n) {
                var a = n[i];
                if (a) {
                    var s = fn(a.componentOptions);
                    s && !e(s) && vn(n, i, o, r)
                }
            }
        }

        function vn(t, e, n, o) {
            var r = t[e];
            !r || o && r.tag === o.tag || r.componentInstance.$destroy(), t[e] = null, _(n, e)
        }! function(t) {
            t.prototype._init = function(t) {
                var e = this;
                e._uid = ln++, e._isVue = !0, t && t._isComponent ? function(t, e) {
                        var n = t.$options = Object.create(t.constructor.options),
                            o = e._parentVnode;
                        n.parent = e.parent, n._parentVnode = o, n._parentElm = e._parentElm, n._refElm = e._refElm;
                        var r = o.componentOptions;
                        n.propsData = r.propsData, n._parentListeners = r.listeners, n._renderChildren = r.children, n._componentTag = r.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns)
                    }(e, t) : e.$options = Nt(cn(e.constructor), t || {}, e), e._renderProxy = e, e._self = e,
                    function(t) {
                        var e = t.$options,
                            n = e.parent;
                        if (n && !e.abstract) {
                            for (; n.$options.abstract && n.$parent;) n = n.$parent;
                            n.$children.push(t)
                        }
                        t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
                    }(e),
                    function(t) {
                        t._events = Object.create(null), t._hasHookEvent = !1;
                        var e = t.$options._parentListeners;
                        e && me(t, e)
                    }(e),
                    function(t) {
                        t._vnode = null, t._staticTrees = null;
                        var e = t.$options,
                            n = t.$vnode = e._parentVnode,
                            r = n && n.context;
                        t.$slots = ve(e._renderChildren, r), t.$scopedSlots = o, t._c = function(e, n, o, r) {
                            return sn(t, e, n, o, r, !1)
                        }, t.$createElement = function(e, n, o, r) {
                            return sn(t, e, n, o, r, !0)
                        };
                        var i = n && n.data;
                        St(t, "$attrs", i && i.attrs || o, null, !0), St(t, "$listeners", e._parentListeners || o, null, !0)
                    }(e), ke(e, "beforeCreate"),
                    function(t) {
                        var e = Fe(t.$options.inject, t);
                        e && (wt(!1), Object.keys(e).forEach(function(n) {
                            St(t, n, e[n])
                        }), wt(!0))
                    }(e), je(e),
                    function(t) {
                        var e = t.$options.provide;
                        e && (t._provided = "function" == typeof e ? e.call(t) : e)
                    }(e), ke(e, "created"), e.$options.el && e.$mount(e.$options.el)
            }
        }(dn),
        function(t) {
            var e = {
                    get: function() {
                        return this._data
                    }
                },
                n = {
                    get: function() {
                        return this._props
                    }
                };
            Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = Tt, t.prototype.$delete = Et, t.prototype.$watch = function(t, e, n) {
                if (u(e)) return Me(this, t, e, n);
                (n = n || {}).user = !0;
                var o = new Le(this, t, e, n);
                return n.immediate && e.call(this, o.value),
                    function() {
                        o.teardown()
                    }
            }
        }(dn),
        function(t) {
            var e = /^hook:/;
            t.prototype.$on = function(t, n) {
                if (Array.isArray(t))
                    for (var o = 0, r = t.length; o < r; o++) this.$on(t[o], n);
                else(this._events[t] || (this._events[t] = [])).push(n), e.test(t) && (this._hasHookEvent = !0);
                return this
            }, t.prototype.$once = function(t, e) {
                var n = this;

                function o() {
                    n.$off(t, o), e.apply(n, arguments)
                }
                return o.fn = e, n.$on(t, o), n
            }, t.prototype.$off = function(t, e) {
                var n = this;
                if (!arguments.length) return n._events = Object.create(null), n;
                if (Array.isArray(t)) {
                    for (var o = 0, r = t.length; o < r; o++) this.$off(t[o], e);
                    return n
                }
                var i = n._events[t];
                if (!i) return n;
                if (!e) return n._events[t] = null, n;
                if (e)
                    for (var a, s = i.length; s--;)
                        if ((a = i[s]) === e || a.fn === e) {
                            i.splice(s, 1);
                            break
                        } return n
            }, t.prototype.$emit = function(t) {
                var e = this._events[t];
                if (e) {
                    e = e.length > 1 ? T(e) : e;
                    for (var n = T(arguments, 1), o = 0, r = e.length; o < r; o++) try {
                        e[o].apply(this, n)
                    } catch (e) {
                        Rt(e, this, 'event handler for "' + t + '"')
                    }
                }
                return this
            }
        }(dn),
        function(t) {
            t.prototype._update = function(t, e) {
                var n = this;
                n._isMounted && ke(n, "beforeUpdate");
                var o = n.$el,
                    r = n._vnode,
                    i = be;
                be = n, n._vnode = t, r ? n.$el = n.__patch__(r, t) : (n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), n.$options._parentElm = n.$options._refElm = null), be = i, o && (o.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }, t.prototype.$forceUpdate = function() {
                this._watcher && this._watcher.update()
            }, t.prototype.$destroy = function() {
                var t = this;
                if (!t._isBeingDestroyed) {
                    ke(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                    var e = t.$parent;
                    !e || e._isBeingDestroyed || t.$options.abstract || _(e.$children, t), t._watcher && t._watcher.teardown();
                    for (var n = t._watchers.length; n--;) t._watchers[n].teardown();
                    t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), ke(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null)
                }
            }
        }(dn),
        function(t) {
            Ke(t.prototype), t.prototype.$nextTick = function(t) {
                return Qt(t, this)
            }, t.prototype._render = function() {
                var t, e = this,
                    n = e.$options,
                    r = n.render,
                    i = n._parentVnode;
                i && (e.$scopedSlots = i.data.scopedSlots || o), e.$vnode = i;
                try {
                    t = r.call(e._renderProxy, e.$createElement)
                } catch (n) {
                    Rt(n, e, "render"), t = e._vnode
                }
                return t instanceof pt || (t = ht()), t.parent = i, t
            }
        }(dn);
        var _n = [String, RegExp, Array],
            gn = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: _n,
                        exclude: _n,
                        max: [String, Number]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = []
                    },
                    destroyed: function() {
                        for (var t in this.cache) vn(this.cache, t, this.keys)
                    },
                    mounted: function() {
                        var t = this;
                        this.$watch("include", function(e) {
                            mn(t, function(t) {
                                return hn(e, t)
                            })
                        }), this.$watch("exclude", function(e) {
                            mn(t, function(t) {
                                return !hn(e, t)
                            })
                        })
                    },
                    render: function() {
                        var t = this.$slots.default,
                            e = pe(t),
                            n = e && e.componentOptions;
                        if (n) {
                            var o = fn(n),
                                r = this.include,
                                i = this.exclude;
                            if (r && (!o || !hn(r, o)) || i && o && hn(i, o)) return e;
                            var a = this.cache,
                                s = this.keys,
                                l = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                            a[l] ? (e.componentInstance = a[l].componentInstance, _(s, l), s.push(l)) : (a[l] = e, s.push(l), this.max && s.length > parseInt(this.max) && vn(a, s[0], s, this._vnode)), e.data.keepAlive = !0
                        }
                        return e || t && t[0]
                    }
                }
            };
        ! function(t) {
            var e = {
                get: function() {
                    return F
                }
            };
            Object.defineProperty(t, "config", e), t.util = {
                    warn: at,
                    extend: E,
                    mergeOptions: Nt,
                    defineReactive: St
                }, t.set = Tt, t.delete = Et, t.nextTick = Qt, t.options = Object.create(null), I.forEach(function(e) {
                    t.options[e + "s"] = Object.create(null)
                }), t.options._base = t, E(t.options.components, gn),
                function(t) {
                    t.use = function(t) {
                        var e = this._installedPlugins || (this._installedPlugins = []);
                        if (e.indexOf(t) > -1) return this;
                        var n = T(arguments, 1);
                        return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), e.push(t), this
                    }
                }(t),
                function(t) {
                    t.mixin = function(t) {
                        return this.options = Nt(this.options, t), this
                    }
                }(t), pn(t),
                function(t) {
                    I.forEach(function(e) {
                        t[e] = function(t, n) {
                            return n ? ("component" === e && u(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = {
                                bind: n,
                                update: n
                            }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t]
                        }
                    })
                }(t)
        }(dn), Object.defineProperty(dn.prototype, "$isServer", {
            get: et
        }), Object.defineProperty(dn.prototype, "$ssrContext", {
            get: function() {
                return this.$vnode && this.$vnode.ssrContext
            }
        }), Object.defineProperty(dn, "FunctionalRenderContext", {
            value: Ze
        }), dn.version = "2.5.16";
        var bn = m("style,class"),
            yn = m("input,textarea,option,select,progress"),
            wn = m("contenteditable,draggable,spellcheck"),
            kn = m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            xn = "http://www.w3.org/1999/xlink",
            Cn = function(t) {
                return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
            },
            $n = function(t) {
                return Cn(t) ? t.slice(6, t.length) : ""
            },
            Sn = function(t) {
                return null == t || !1 === t
            };

        function Tn(t) {
            for (var e = t.data, n = t, o = t; i(o.componentInstance);)(o = o.componentInstance._vnode) && o.data && (e = En(o.data, e));
            for (; i(n = n.parent);) n && n.data && (e = En(e, n.data));
            return function(t, e) {
                if (i(t) || i(e)) return On(t, An(e));
                return ""
            }(e.staticClass, e.class)
        }

        function En(t, e) {
            return {
                staticClass: On(t.staticClass, e.staticClass),
                class: i(t.class) ? [t.class, e.class] : e.class
            }
        }

        function On(t, e) {
            return t ? e ? t + " " + e : t : e || ""
        }

        function An(t) {
            return Array.isArray(t) ? function(t) {
                for (var e, n = "", o = 0, r = t.length; o < r; o++) i(e = An(t[o])) && "" !== e && (n && (n += " "), n += e);
                return n
            }(t) : l(t) ? function(t) {
                var e = "";
                for (var n in t) t[n] && (e && (e += " "), e += n);
                return e
            }(t) : "string" == typeof t ? t : ""
        }
        var Ln = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            },
            Bn = m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            Pn = m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            jn = function(t) {
                return Bn(t) || Pn(t)
            };
        var Nn = Object.create(null);
        var Dn = m("text,number,password,search,email,tel,url");
        var In = Object.freeze({
                createElement: function(t, e) {
                    var n = document.createElement(t);
                    return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
                },
                createElementNS: function(t, e) {
                    return document.createElementNS(Ln[t], e)
                },
                createTextNode: function(t) {
                    return document.createTextNode(t)
                },
                createComment: function(t) {
                    return document.createComment(t)
                },
                insertBefore: function(t, e, n) {
                    t.insertBefore(e, n)
                },
                removeChild: function(t, e) {
                    t.removeChild(e)
                },
                appendChild: function(t, e) {
                    t.appendChild(e)
                },
                parentNode: function(t) {
                    return t.parentNode
                },
                nextSibling: function(t) {
                    return t.nextSibling
                },
                tagName: function(t) {
                    return t.tagName
                },
                setTextContent: function(t, e) {
                    t.textContent = e
                },
                setStyleScope: function(t, e) {
                    t.setAttribute(e, "")
                }
            }),
            Mn = {
                create: function(t, e) {
                    Fn(e)
                },
                update: function(t, e) {
                    t.data.ref !== e.data.ref && (Fn(t, !0), Fn(e))
                },
                destroy: function(t) {
                    Fn(t, !0)
                }
            };

        function Fn(t, e) {
            var n = t.data.ref;
            if (i(n)) {
                var o = t.context,
                    r = t.componentInstance || t.elm,
                    a = o.$refs;
                e ? Array.isArray(a[n]) ? _(a[n], r) : a[n] === r && (a[n] = void 0) : t.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(r) < 0 && a[n].push(r) : a[n] = [r] : a[n] = r
            }
        }
        var Un = new pt("", {}, []),
            Rn = ["create", "activate", "update", "remove", "destroy"];

        function zn(t, e) {
            return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && i(t.data) === i(e.data) && function(t, e) {
                if ("input" !== t.tag) return !0;
                var n, o = i(n = t.data) && i(n = n.attrs) && n.type,
                    r = i(n = e.data) && i(n = n.attrs) && n.type;
                return o === r || Dn(o) && Dn(r)
            }(t, e) || a(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && r(e.asyncFactory.error))
        }

        function Vn(t, e, n) {
            var o, r, a = {};
            for (o = e; o <= n; ++o) i(r = t[o].key) && (a[r] = o);
            return a
        }
        var Wn = {
            create: Hn,
            update: Hn,
            destroy: function(t) {
                Hn(t, Un)
            }
        };

        function Hn(t, e) {
            (t.data.directives || e.data.directives) && function(t, e) {
                var n, o, r, i = t === Un,
                    a = e === Un,
                    s = qn(t.data.directives, t.context),
                    l = qn(e.data.directives, e.context),
                    c = [],
                    u = [];
                for (n in l) o = s[n], r = l[n], o ? (r.oldValue = o.value, Jn(r, "update", e, t), r.def && r.def.componentUpdated && u.push(r)) : (Jn(r, "bind", e, t), r.def && r.def.inserted && c.push(r));
                if (c.length) {
                    var d = function() {
                        for (var n = 0; n < c.length; n++) Jn(c[n], "inserted", e, t)
                    };
                    i ? ae(e, "insert", d) : d()
                }
                u.length && ae(e, "postpatch", function() {
                    for (var n = 0; n < u.length; n++) Jn(u[n], "componentUpdated", e, t)
                });
                if (!i)
                    for (n in s) l[n] || Jn(s[n], "unbind", t, t, a)
            }(t, e)
        }
        var Xn = Object.create(null);

        function qn(t, e) {
            var n, o, r = Object.create(null);
            if (!t) return r;
            for (n = 0; n < t.length; n++)(o = t[n]).modifiers || (o.modifiers = Xn), r[Yn(o)] = o, o.def = Dt(e.$options, "directives", o.name);
            return r
        }

        function Yn(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
        }

        function Jn(t, e, n, o, r) {
            var i = t.def && t.def[e];
            if (i) try {
                i(n.elm, t, n, o, r)
            } catch (o) {
                Rt(o, n.context, "directive " + t.name + " " + e + " hook")
            }
        }
        var Gn = [Mn, Wn];

        function Kn(t, e) {
            var n = e.componentOptions;
            if (!(i(n) && !1 === n.Ctor.options.inheritAttrs || r(t.data.attrs) && r(e.data.attrs))) {
                var o, a, s = e.elm,
                    l = t.data.attrs || {},
                    c = e.data.attrs || {};
                for (o in i(c.__ob__) && (c = e.data.attrs = E({}, c)), c) a = c[o], l[o] !== a && Zn(s, o, a);
                for (o in (Y || G) && c.value !== l.value && Zn(s, "value", c.value), l) r(c[o]) && (Cn(o) ? s.removeAttributeNS(xn, $n(o)) : wn(o) || s.removeAttribute(o))
            }
        }

        function Zn(t, e, n) {
            t.tagName.indexOf("-") > -1 ? Qn(t, e, n) : kn(e) ? Sn(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n)) : wn(e) ? t.setAttribute(e, Sn(n) || "false" === n ? "false" : "true") : Cn(e) ? Sn(n) ? t.removeAttributeNS(xn, $n(e)) : t.setAttributeNS(xn, e, n) : Qn(t, e, n)
        }

        function Qn(t, e, n) {
            if (Sn(n)) t.removeAttribute(e);
            else {
                if (Y && !J && "TEXTAREA" === t.tagName && "placeholder" === e && !t.__ieph) {
                    var o = function(e) {
                        e.stopImmediatePropagation(), t.removeEventListener("input", o)
                    };
                    t.addEventListener("input", o), t.__ieph = !0
                }
                t.setAttribute(e, n)
            }
        }
        var to = {
            create: Kn,
            update: Kn
        };

        function eo(t, e) {
            var n = e.elm,
                o = e.data,
                a = t.data;
            if (!(r(o.staticClass) && r(o.class) && (r(a) || r(a.staticClass) && r(a.class)))) {
                var s = Tn(e),
                    l = n._transitionClasses;
                i(l) && (s = On(s, An(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s)
            }
        }
        var no, oo = {
                create: eo,
                update: eo
            },
            ro = "__r",
            io = "__c";

        function ao(t, e, n, o, r) {
            var i;
            e = (i = e)._withTask || (i._withTask = function() {
                Jt = !0;
                var t = i.apply(null, arguments);
                return Jt = !1, t
            }), n && (e = function(t, e, n) {
                var o = no;
                return function r() {
                    null !== t.apply(null, arguments) && so(e, r, n, o)
                }
            }(e, t, o)), no.addEventListener(t, e, Q ? {
                capture: o,
                passive: r
            } : o)
        }

        function so(t, e, n, o) {
            (o || no).removeEventListener(t, e._withTask || e, n)
        }

        function lo(t, e) {
            if (!r(t.data.on) || !r(e.data.on)) {
                var n = e.data.on || {},
                    o = t.data.on || {};
                no = e.elm,
                    function(t) {
                        if (i(t[ro])) {
                            var e = Y ? "change" : "input";
                            t[e] = [].concat(t[ro], t[e] || []), delete t[ro]
                        }
                        i(t[io]) && (t.change = [].concat(t[io], t.change || []), delete t[io])
                    }(n), ie(n, o, ao, so, e.context), no = void 0
            }
        }
        var co = {
            create: lo,
            update: lo
        };

        function uo(t, e) {
            if (!r(t.data.domProps) || !r(e.data.domProps)) {
                var n, o, a = e.elm,
                    s = t.data.domProps || {},
                    l = e.data.domProps || {};
                for (n in i(l.__ob__) && (l = e.data.domProps = E({}, l)), s) r(l[n]) && (a[n] = "");
                for (n in l) {
                    if (o = l[n], "textContent" === n || "innerHTML" === n) {
                        if (e.children && (e.children.length = 0), o === s[n]) continue;
                        1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                    }
                    if ("value" === n) {
                        a._value = o;
                        var c = r(o) ? "" : String(o);
                        po(a, c) && (a.value = c)
                    } else a[n] = o
                }
            }
        }

        function po(t, e) {
            return !t.composing && ("OPTION" === t.tagName || function(t, e) {
                var n = !0;
                try {
                    n = document.activeElement !== t
                } catch (t) {}
                return n && t.value !== e
            }(t, e) || function(t, e) {
                var n = t.value,
                    o = t._vModifiers;
                if (i(o)) {
                    if (o.lazy) return !1;
                    if (o.number) return h(n) !== h(e);
                    if (o.trim) return n.trim() !== e.trim()
                }
                return n !== e
            }(t, e))
        }
        var fo = {
                create: uo,
                update: uo
            },
            ho = y(function(t) {
                var e = {},
                    n = /:(.+)/;
                return t.split(/;(?![^(]*\))/g).forEach(function(t) {
                    if (t) {
                        var o = t.split(n);
                        o.length > 1 && (e[o[0].trim()] = o[1].trim())
                    }
                }), e
            });

        function mo(t) {
            var e = vo(t.style);
            return t.staticStyle ? E(t.staticStyle, e) : e
        }

        function vo(t) {
            return Array.isArray(t) ? O(t) : "string" == typeof t ? ho(t) : t
        }
        var _o, go = /^--/,
            bo = /\s*!important$/,
            yo = function(t, e, n) {
                if (go.test(e)) t.style.setProperty(e, n);
                else if (bo.test(n)) t.style.setProperty(e, n.replace(bo, ""), "important");
                else {
                    var o = ko(e);
                    if (Array.isArray(n))
                        for (var r = 0, i = n.length; r < i; r++) t.style[o] = n[r];
                    else t.style[o] = n
                }
            },
            wo = ["Webkit", "Moz", "ms"],
            ko = y(function(t) {
                if (_o = _o || document.createElement("div").style, "filter" !== (t = k(t)) && t in _o) return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < wo.length; n++) {
                    var o = wo[n] + e;
                    if (o in _o) return o
                }
            });

        function xo(t, e) {
            var n = e.data,
                o = t.data;
            if (!(r(n.staticStyle) && r(n.style) && r(o.staticStyle) && r(o.style))) {
                var a, s, l = e.elm,
                    c = o.staticStyle,
                    u = o.normalizedStyle || o.style || {},
                    d = c || u,
                    p = vo(e.data.style) || {};
                e.data.normalizedStyle = i(p.__ob__) ? E({}, p) : p;
                var f = function(t, e) {
                    var n, o = {};
                    if (e)
                        for (var r = t; r.componentInstance;)(r = r.componentInstance._vnode) && r.data && (n = mo(r.data)) && E(o, n);
                    (n = mo(t.data)) && E(o, n);
                    for (var i = t; i = i.parent;) i.data && (n = mo(i.data)) && E(o, n);
                    return o
                }(e, !0);
                for (s in d) r(f[s]) && yo(l, s, "");
                for (s in f)(a = f[s]) !== d[s] && yo(l, s, null == a ? "" : a)
            }
        }
        var Co = {
            create: xo,
            update: xo
        };

        function $o(t, e) {
            if (e && (e = e.trim()))
                if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                    return t.classList.add(e)
                }) : t.classList.add(e);
                else {
                    var n = " " + (t.getAttribute("class") || "") + " ";
                    n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
                }
        }

        function So(t, e) {
            if (e && (e = e.trim()))
                if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                    return t.classList.remove(e)
                }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
                else {
                    for (var n = " " + (t.getAttribute("class") || "") + " ", o = " " + e + " "; n.indexOf(o) >= 0;) n = n.replace(o, " ");
                    (n = n.trim()) ? t.setAttribute("class", n): t.removeAttribute("class")
                }
        }

        function To(t) {
            if (t) {
                if ("object" == typeof t) {
                    var e = {};
                    return !1 !== t.css && E(e, Eo(t.name || "v")), E(e, t), e
                }
                return "string" == typeof t ? Eo(t) : void 0
            }
        }
        var Eo = y(function(t) {
                return {
                    enterClass: t + "-enter",
                    enterToClass: t + "-enter-to",
                    enterActiveClass: t + "-enter-active",
                    leaveClass: t + "-leave",
                    leaveToClass: t + "-leave-to",
                    leaveActiveClass: t + "-leave-active"
                }
            }),
            Oo = W && !J,
            Ao = "transition",
            Lo = "animation",
            Bo = "transition",
            Po = "transitionend",
            jo = "animation",
            No = "animationend";
        Oo && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Bo = "WebkitTransition", Po = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (jo = "WebkitAnimation", No = "webkitAnimationEnd"));
        var Do = W ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
            return t()
        };

        function Io(t) {
            Do(function() {
                Do(t)
            })
        }

        function Mo(t, e) {
            var n = t._transitionClasses || (t._transitionClasses = []);
            n.indexOf(e) < 0 && (n.push(e), $o(t, e))
        }

        function Fo(t, e) {
            t._transitionClasses && _(t._transitionClasses, e), So(t, e)
        }

        function Uo(t, e, n) {
            var o = zo(t, e),
                r = o.type,
                i = o.timeout,
                a = o.propCount;
            if (!r) return n();
            var s = r === Ao ? Po : No,
                l = 0,
                c = function() {
                    t.removeEventListener(s, u), n()
                },
                u = function(e) {
                    e.target === t && ++l >= a && c()
                };
            setTimeout(function() {
                l < a && c()
            }, i + 1), t.addEventListener(s, u)
        }
        var Ro = /\b(transform|all)(,|$)/;

        function zo(t, e) {
            var n, o = window.getComputedStyle(t),
                r = o[Bo + "Delay"].split(", "),
                i = o[Bo + "Duration"].split(", "),
                a = Vo(r, i),
                s = o[jo + "Delay"].split(", "),
                l = o[jo + "Duration"].split(", "),
                c = Vo(s, l),
                u = 0,
                d = 0;
            return e === Ao ? a > 0 && (n = Ao, u = a, d = i.length) : e === Lo ? c > 0 && (n = Lo, u = c, d = l.length) : d = (n = (u = Math.max(a, c)) > 0 ? a > c ? Ao : Lo : null) ? n === Ao ? i.length : l.length : 0, {
                type: n,
                timeout: u,
                propCount: d,
                hasTransform: n === Ao && Ro.test(o[Bo + "Property"])
            }
        }

        function Vo(t, e) {
            for (; t.length < e.length;) t = t.concat(t);
            return Math.max.apply(null, e.map(function(e, n) {
                return Wo(e) + Wo(t[n])
            }))
        }

        function Wo(t) {
            return 1e3 * Number(t.slice(0, -1))
        }

        function Ho(t, e) {
            var n = t.elm;
            i(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
            var o = To(t.data.transition);
            if (!r(o) && !i(n._enterCb) && 1 === n.nodeType) {
                for (var a = o.css, s = o.type, c = o.enterClass, u = o.enterToClass, d = o.enterActiveClass, p = o.appearClass, f = o.appearToClass, m = o.appearActiveClass, v = o.beforeEnter, _ = o.enter, g = o.afterEnter, b = o.enterCancelled, y = o.beforeAppear, w = o.appear, k = o.afterAppear, x = o.appearCancelled, C = o.duration, $ = be, S = be.$vnode; S && S.parent;) $ = (S = S.parent).context;
                var T = !$._isMounted || !t.isRootInsert;
                if (!T || w || "" === w) {
                    var E = T && p ? p : c,
                        O = T && m ? m : d,
                        A = T && f ? f : u,
                        L = T && y || v,
                        B = T && "function" == typeof w ? w : _,
                        P = T && k || g,
                        j = T && x || b,
                        D = h(l(C) ? C.enter : C);
                    0;
                    var I = !1 !== a && !J,
                        M = Yo(B),
                        F = n._enterCb = N(function() {
                            I && (Fo(n, A), Fo(n, O)), F.cancelled ? (I && Fo(n, E), j && j(n)) : P && P(n), n._enterCb = null
                        });
                    t.data.show || ae(t, "insert", function() {
                        var e = n.parentNode,
                            o = e && e._pending && e._pending[t.key];
                        o && o.tag === t.tag && o.elm._leaveCb && o.elm._leaveCb(), B && B(n, F)
                    }), L && L(n), I && (Mo(n, E), Mo(n, O), Io(function() {
                        Fo(n, E), F.cancelled || (Mo(n, A), M || (qo(D) ? setTimeout(F, D) : Uo(n, s, F)))
                    })), t.data.show && (e && e(), B && B(n, F)), I || M || F()
                }
            }
        }

        function Xo(t, e) {
            var n = t.elm;
            i(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
            var o = To(t.data.transition);
            if (r(o) || 1 !== n.nodeType) return e();
            if (!i(n._leaveCb)) {
                var a = o.css,
                    s = o.type,
                    c = o.leaveClass,
                    u = o.leaveToClass,
                    d = o.leaveActiveClass,
                    p = o.beforeLeave,
                    f = o.leave,
                    m = o.afterLeave,
                    v = o.leaveCancelled,
                    _ = o.delayLeave,
                    g = o.duration,
                    b = !1 !== a && !J,
                    y = Yo(f),
                    w = h(l(g) ? g.leave : g);
                0;
                var k = n._leaveCb = N(function() {
                    n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), b && (Fo(n, u), Fo(n, d)), k.cancelled ? (b && Fo(n, c), v && v(n)) : (e(), m && m(n)), n._leaveCb = null
                });
                _ ? _(x) : x()
            }

            function x() {
                k.cancelled || (t.data.show || ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), p && p(n), b && (Mo(n, c), Mo(n, d), Io(function() {
                    Fo(n, c), k.cancelled || (Mo(n, u), y || (qo(w) ? setTimeout(k, w) : Uo(n, s, k)))
                })), f && f(n, k), b || y || k())
            }
        }

        function qo(t) {
            return "number" == typeof t && !isNaN(t)
        }

        function Yo(t) {
            if (r(t)) return !1;
            var e = t.fns;
            return i(e) ? Yo(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
        }

        function Jo(t, e) {
            !0 !== e.data.show && Ho(e)
        }
        var Go = function(t) {
            var e, n, o = {},
                l = t.modules,
                c = t.nodeOps;
            for (e = 0; e < Rn.length; ++e)
                for (o[Rn[e]] = [], n = 0; n < l.length; ++n) i(l[n][Rn[e]]) && o[Rn[e]].push(l[n][Rn[e]]);

            function u(t) {
                var e = c.parentNode(t);
                i(e) && c.removeChild(e, t)
            }

            function d(t, e, n, r, s, l, u) {
                if (i(t.elm) && i(l) && (t = l[u] = vt(t)), t.isRootInsert = !s, ! function(t, e, n, r) {
                        var s = t.data;
                        if (i(s)) {
                            var l = i(t.componentInstance) && s.keepAlive;
                            if (i(s = s.hook) && i(s = s.init) && s(t, !1, n, r), i(t.componentInstance)) return p(t, e), a(l) && function(t, e, n, r) {
                                for (var a, s = t; s.componentInstance;)
                                    if (s = s.componentInstance._vnode, i(a = s.data) && i(a = a.transition)) {
                                        for (a = 0; a < o.activate.length; ++a) o.activate[a](Un, s);
                                        e.push(s);
                                        break
                                    } f(n, t.elm, r)
                            }(t, e, n, r), !0
                        }
                    }(t, e, n, r)) {
                    var d = t.data,
                        m = t.children,
                        v = t.tag;
                    i(v) ? (t.elm = t.ns ? c.createElementNS(t.ns, v) : c.createElement(v, t), g(t), h(t, m, e), i(d) && _(t, e), f(n, t.elm, r)) : a(t.isComment) ? (t.elm = c.createComment(t.text), f(n, t.elm, r)) : (t.elm = c.createTextNode(t.text), f(n, t.elm, r))
                }
            }

            function p(t, e) {
                i(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, v(t) ? (_(t, e), g(t)) : (Fn(t), e.push(t))
            }

            function f(t, e, n) {
                i(t) && (i(n) ? n.parentNode === t && c.insertBefore(t, e, n) : c.appendChild(t, e))
            }

            function h(t, e, n) {
                if (Array.isArray(e))
                    for (var o = 0; o < e.length; ++o) d(e[o], n, t.elm, null, !0, e, o);
                else s(t.text) && c.appendChild(t.elm, c.createTextNode(String(t.text)))
            }

            function v(t) {
                for (; t.componentInstance;) t = t.componentInstance._vnode;
                return i(t.tag)
            }

            function _(t, n) {
                for (var r = 0; r < o.create.length; ++r) o.create[r](Un, t);
                i(e = t.data.hook) && (i(e.create) && e.create(Un, t), i(e.insert) && n.push(t))
            }

            function g(t) {
                var e;
                if (i(e = t.fnScopeId)) c.setStyleScope(t.elm, e);
                else
                    for (var n = t; n;) i(e = n.context) && i(e = e.$options._scopeId) && c.setStyleScope(t.elm, e), n = n.parent;
                i(e = be) && e !== t.context && e !== t.fnContext && i(e = e.$options._scopeId) && c.setStyleScope(t.elm, e)
            }

            function b(t, e, n, o, r, i) {
                for (; o <= r; ++o) d(n[o], i, t, e, !1, n, o)
            }

            function y(t) {
                var e, n, r = t.data;
                if (i(r))
                    for (i(e = r.hook) && i(e = e.destroy) && e(t), e = 0; e < o.destroy.length; ++e) o.destroy[e](t);
                if (i(e = t.children))
                    for (n = 0; n < t.children.length; ++n) y(t.children[n])
            }

            function w(t, e, n, o) {
                for (; n <= o; ++n) {
                    var r = e[n];
                    i(r) && (i(r.tag) ? (k(r), y(r)) : u(r.elm))
                }
            }

            function k(t, e) {
                if (i(e) || i(t.data)) {
                    var n, r = o.remove.length + 1;
                    for (i(e) ? e.listeners += r : e = function(t, e) {
                            function n() {
                                0 == --n.listeners && u(t)
                            }
                            return n.listeners = e, n
                        }(t.elm, r), i(n = t.componentInstance) && i(n = n._vnode) && i(n.data) && k(n, e), n = 0; n < o.remove.length; ++n) o.remove[n](t, e);
                    i(n = t.data.hook) && i(n = n.remove) ? n(t, e) : e()
                } else u(t.elm)
            }

            function x(t, e, n, o) {
                for (var r = n; r < o; r++) {
                    var a = e[r];
                    if (i(a) && zn(t, a)) return r
                }
            }

            function C(t, e, n, s) {
                if (t !== e) {
                    var l = e.elm = t.elm;
                    if (a(t.isAsyncPlaceholder)) i(e.asyncFactory.resolved) ? T(t.elm, e, n) : e.isAsyncPlaceholder = !0;
                    else if (a(e.isStatic) && a(t.isStatic) && e.key === t.key && (a(e.isCloned) || a(e.isOnce))) e.componentInstance = t.componentInstance;
                    else {
                        var u, p = e.data;
                        i(p) && i(u = p.hook) && i(u = u.prepatch) && u(t, e);
                        var f = t.children,
                            h = e.children;
                        if (i(p) && v(e)) {
                            for (u = 0; u < o.update.length; ++u) o.update[u](t, e);
                            i(u = p.hook) && i(u = u.update) && u(t, e)
                        }
                        r(e.text) ? i(f) && i(h) ? f !== h && function(t, e, n, o, a) {
                            for (var s, l, u, p = 0, f = 0, h = e.length - 1, m = e[0], v = e[h], _ = n.length - 1, g = n[0], y = n[_], k = !a; p <= h && f <= _;) r(m) ? m = e[++p] : r(v) ? v = e[--h] : zn(m, g) ? (C(m, g, o), m = e[++p], g = n[++f]) : zn(v, y) ? (C(v, y, o), v = e[--h], y = n[--_]) : zn(m, y) ? (C(m, y, o), k && c.insertBefore(t, m.elm, c.nextSibling(v.elm)), m = e[++p], y = n[--_]) : zn(v, g) ? (C(v, g, o), k && c.insertBefore(t, v.elm, m.elm), v = e[--h], g = n[++f]) : (r(s) && (s = Vn(e, p, h)), r(l = i(g.key) ? s[g.key] : x(g, e, p, h)) ? d(g, o, t, m.elm, !1, n, f) : zn(u = e[l], g) ? (C(u, g, o), e[l] = void 0, k && c.insertBefore(t, u.elm, m.elm)) : d(g, o, t, m.elm, !1, n, f), g = n[++f]);
                            p > h ? b(t, r(n[_ + 1]) ? null : n[_ + 1].elm, n, f, _, o) : f > _ && w(0, e, p, h)
                        }(l, f, h, n, s) : i(h) ? (i(t.text) && c.setTextContent(l, ""), b(l, null, h, 0, h.length - 1, n)) : i(f) ? w(0, f, 0, f.length - 1) : i(t.text) && c.setTextContent(l, "") : t.text !== e.text && c.setTextContent(l, e.text), i(p) && i(u = p.hook) && i(u = u.postpatch) && u(t, e)
                    }
                }
            }

            function $(t, e, n) {
                if (a(n) && i(t.parent)) t.parent.data.pendingInsert = e;
                else
                    for (var o = 0; o < e.length; ++o) e[o].data.hook.insert(e[o])
            }
            var S = m("attrs,class,staticClass,staticStyle,key");

            function T(t, e, n, o) {
                var r, s = e.tag,
                    l = e.data,
                    c = e.children;
                if (o = o || l && l.pre, e.elm = t, a(e.isComment) && i(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
                if (i(l) && (i(r = l.hook) && i(r = r.init) && r(e, !0), i(r = e.componentInstance))) return p(e, n), !0;
                if (i(s)) {
                    if (i(c))
                        if (t.hasChildNodes())
                            if (i(r = l) && i(r = r.domProps) && i(r = r.innerHTML)) {
                                if (r !== t.innerHTML) return !1
                            } else {
                                for (var u = !0, d = t.firstChild, f = 0; f < c.length; f++) {
                                    if (!d || !T(d, c[f], n, o)) {
                                        u = !1;
                                        break
                                    }
                                    d = d.nextSibling
                                }
                                if (!u || d) return !1
                            }
                    else h(e, c, n);
                    if (i(l)) {
                        var m = !1;
                        for (var v in l)
                            if (!S(v)) {
                                m = !0, _(e, n);
                                break
                            }! m && l.class && ee(l.class)
                    }
                } else t.data !== e.text && (t.data = e.text);
                return !0
            }
            return function(t, e, n, s, l, u) {
                if (!r(e)) {
                    var p, f = !1,
                        h = [];
                    if (r(t)) f = !0, d(e, h, l, u);
                    else {
                        var m = i(t.nodeType);
                        if (!m && zn(t, e)) C(t, e, h, s);
                        else {
                            if (m) {
                                if (1 === t.nodeType && t.hasAttribute(D) && (t.removeAttribute(D), n = !0), a(n) && T(t, e, h)) return $(e, h, !0), t;
                                p = t, t = new pt(c.tagName(p).toLowerCase(), {}, [], void 0, p)
                            }
                            var _ = t.elm,
                                g = c.parentNode(_);
                            if (d(e, h, _._leaveCb ? null : g, c.nextSibling(_)), i(e.parent))
                                for (var b = e.parent, k = v(e); b;) {
                                    for (var x = 0; x < o.destroy.length; ++x) o.destroy[x](b);
                                    if (b.elm = e.elm, k) {
                                        for (var S = 0; S < o.create.length; ++S) o.create[S](Un, b);
                                        var E = b.data.hook.insert;
                                        if (E.merged)
                                            for (var O = 1; O < E.fns.length; O++) E.fns[O]()
                                    } else Fn(b);
                                    b = b.parent
                                }
                            i(g) ? w(0, [t], 0, 0) : i(t.tag) && y(t)
                        }
                    }
                    return $(e, h, f), e.elm
                }
                i(t) && y(t)
            }
        }({
            nodeOps: In,
            modules: [to, oo, co, fo, Co, W ? {
                create: Jo,
                activate: Jo,
                remove: function(t, e) {
                    !0 !== t.data.show ? Xo(t, e) : e()
                }
            } : {}].concat(Gn)
        });
        J && document.addEventListener("selectionchange", function() {
            var t = document.activeElement;
            t && t.vmodel && rr(t, "input")
        });
        var Ko = {
            inserted: function(t, e, n, o) {
                "select" === n.tag ? (o.elm && !o.elm._vOptions ? ae(n, "postpatch", function() {
                    Ko.componentUpdated(t, e, n)
                }) : Zo(t, e, n.context), t._vOptions = [].map.call(t.options, er)) : ("textarea" === n.tag || Dn(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", nr), t.addEventListener("compositionend", or), t.addEventListener("change", or), J && (t.vmodel = !0)))
            },
            componentUpdated: function(t, e, n) {
                if ("select" === n.tag) {
                    Zo(t, e, n.context);
                    var o = t._vOptions,
                        r = t._vOptions = [].map.call(t.options, er);
                    if (r.some(function(t, e) {
                            return !P(t, o[e])
                        }))(t.multiple ? e.value.some(function(t) {
                        return tr(t, r)
                    }) : e.value !== e.oldValue && tr(e.value, r)) && rr(t, "change")
                }
            }
        };

        function Zo(t, e, n) {
            Qo(t, e, n), (Y || G) && setTimeout(function() {
                Qo(t, e, n)
            }, 0)
        }

        function Qo(t, e, n) {
            var o = e.value,
                r = t.multiple;
            if (!r || Array.isArray(o)) {
                for (var i, a, s = 0, l = t.options.length; s < l; s++)
                    if (a = t.options[s], r) i = j(o, er(a)) > -1, a.selected !== i && (a.selected = i);
                    else if (P(er(a), o)) return void(t.selectedIndex !== s && (t.selectedIndex = s));
                r || (t.selectedIndex = -1)
            }
        }

        function tr(t, e) {
            return e.every(function(e) {
                return !P(e, t)
            })
        }

        function er(t) {
            return "_value" in t ? t._value : t.value
        }

        function nr(t) {
            t.target.composing = !0
        }

        function or(t) {
            t.target.composing && (t.target.composing = !1, rr(t.target, "input"))
        }

        function rr(t, e) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(e, !0, !0), t.dispatchEvent(n)
        }

        function ir(t) {
            return !t.componentInstance || t.data && t.data.transition ? t : ir(t.componentInstance._vnode)
        }
        var ar = {
                model: Ko,
                show: {
                    bind: function(t, e, n) {
                        var o = e.value,
                            r = (n = ir(n)).data && n.data.transition,
                            i = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                        o && r ? (n.data.show = !0, Ho(n, function() {
                            t.style.display = i
                        })) : t.style.display = o ? i : "none"
                    },
                    update: function(t, e, n) {
                        var o = e.value;
                        !o != !e.oldValue && ((n = ir(n)).data && n.data.transition ? (n.data.show = !0, o ? Ho(n, function() {
                            t.style.display = t.__vOriginalDisplay
                        }) : Xo(n, function() {
                            t.style.display = "none"
                        })) : t.style.display = o ? t.__vOriginalDisplay : "none")
                    },
                    unbind: function(t, e, n, o, r) {
                        r || (t.style.display = t.__vOriginalDisplay)
                    }
                }
            },
            sr = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            };

        function lr(t) {
            var e = t && t.componentOptions;
            return e && e.Ctor.options.abstract ? lr(pe(e.children)) : t
        }

        function cr(t) {
            var e = {},
                n = t.$options;
            for (var o in n.propsData) e[o] = t[o];
            var r = n._parentListeners;
            for (var i in r) e[k(i)] = r[i];
            return e
        }

        function ur(t, e) {
            if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
                props: e.componentOptions.propsData
            })
        }
        var dr = {
                name: "transition",
                props: sr,
                abstract: !0,
                render: function(t) {
                    var e = this,
                        n = this.$slots.default;
                    if (n && (n = n.filter(function(t) {
                            return t.tag || de(t)
                        })).length) {
                        0;
                        var o = this.mode;
                        0;
                        var r = n[0];
                        if (function(t) {
                                for (; t = t.parent;)
                                    if (t.data.transition) return !0
                            }(this.$vnode)) return r;
                        var i = lr(r);
                        if (!i) return r;
                        if (this._leaving) return ur(t, r);
                        var a = "__transition-" + this._uid + "-";
                        i.key = null == i.key ? i.isComment ? a + "comment" : a + i.tag : s(i.key) ? 0 === String(i.key).indexOf(a) ? i.key : a + i.key : i.key;
                        var l = (i.data || (i.data = {})).transition = cr(this),
                            c = this._vnode,
                            u = lr(c);
                        if (i.data.directives && i.data.directives.some(function(t) {
                                return "show" === t.name
                            }) && (i.data.show = !0), u && u.data && ! function(t, e) {
                                return e.key === t.key && e.tag === t.tag
                            }(i, u) && !de(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
                            var d = u.data.transition = E({}, l);
                            if ("out-in" === o) return this._leaving = !0, ae(d, "afterLeave", function() {
                                e._leaving = !1, e.$forceUpdate()
                            }), ur(t, r);
                            if ("in-out" === o) {
                                if (de(i)) return c;
                                var p, f = function() {
                                    p()
                                };
                                ae(l, "afterEnter", f), ae(l, "enterCancelled", f), ae(d, "delayLeave", function(t) {
                                    p = t
                                })
                            }
                        }
                        return r
                    }
                }
            },
            pr = E({
                tag: String,
                moveClass: String
            }, sr);

        function fr(t) {
            t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
        }

        function hr(t) {
            t.data.newPos = t.elm.getBoundingClientRect()
        }

        function mr(t) {
            var e = t.data.pos,
                n = t.data.newPos,
                o = e.left - n.left,
                r = e.top - n.top;
            if (o || r) {
                t.data.moved = !0;
                var i = t.elm.style;
                i.transform = i.WebkitTransform = "translate(" + o + "px," + r + "px)", i.transitionDuration = "0s"
            }
        }
        delete pr.mode;
        var vr = {
            Transition: dr,
            TransitionGroup: {
                props: pr,
                render: function(t) {
                    for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), o = this.prevChildren = this.children, r = this.$slots.default || [], i = this.children = [], a = cr(this), s = 0; s < r.length; s++) {
                        var l = r[s];
                        if (l.tag)
                            if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) i.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = a;
                            else;
                    }
                    if (o) {
                        for (var c = [], u = [], d = 0; d < o.length; d++) {
                            var p = o[d];
                            p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? c.push(p) : u.push(p)
                        }
                        this.kept = t(e, null, c), this.removed = u
                    }
                    return t(e, null, i)
                },
                beforeUpdate: function() {
                    this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
                },
                updated: function() {
                    var t = this.prevChildren,
                        e = this.moveClass || (this.name || "v") + "-move";
                    t.length && this.hasMove(t[0].elm, e) && (t.forEach(fr), t.forEach(hr), t.forEach(mr), this._reflow = document.body.offsetHeight, t.forEach(function(t) {
                        if (t.data.moved) {
                            var n = t.elm,
                                o = n.style;
                            Mo(n, e), o.transform = o.WebkitTransform = o.transitionDuration = "", n.addEventListener(Po, n._moveCb = function t(o) {
                                o && !/transform$/.test(o.propertyName) || (n.removeEventListener(Po, t), n._moveCb = null, Fo(n, e))
                            })
                        }
                    }))
                },
                methods: {
                    hasMove: function(t, e) {
                        if (!Oo) return !1;
                        if (this._hasMove) return this._hasMove;
                        var n = t.cloneNode();
                        t._transitionClasses && t._transitionClasses.forEach(function(t) {
                            So(n, t)
                        }), $o(n, e), n.style.display = "none", this.$el.appendChild(n);
                        var o = zo(n);
                        return this.$el.removeChild(n), this._hasMove = o.hasTransform
                    }
                }
            }
        };
        dn.config.mustUseProp = function(t, e, n) {
            return "value" === n && yn(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
        }, dn.config.isReservedTag = jn, dn.config.isReservedAttr = bn, dn.config.getTagNamespace = function(t) {
            return Pn(t) ? "svg" : "math" === t ? "math" : void 0
        }, dn.config.isUnknownElement = function(t) {
            if (!W) return !0;
            if (jn(t)) return !1;
            if (t = t.toLowerCase(), null != Nn[t]) return Nn[t];
            var e = document.createElement(t);
            return t.indexOf("-") > -1 ? Nn[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Nn[t] = /HTMLUnknownElement/.test(e.toString())
        }, E(dn.options.directives, ar), E(dn.options.components, vr), dn.prototype.__patch__ = W ? Go : A, dn.prototype.$mount = function(t, e) {
            return function(t, e, n) {
                return t.$el = e, t.$options.render || (t.$options.render = ht), ke(t, "beforeMount"), new Le(t, function() {
                    t._update(t._render(), n)
                }, A, null, !0), n = !1, null == t.$vnode && (t._isMounted = !0, ke(t, "mounted")), t
            }(this, t = t && W ? function(t) {
                if ("string" == typeof t) {
                    var e = document.querySelector(t);
                    return e || document.createElement("div")
                }
                return t
            }(t) : void 0, e)
        }, W && setTimeout(function() {
            F.devtools && nt && nt.emit("init", dn)
        }, 0), e.a = dn
    }).call(this, n(5), n(16).setImmediate)
}, function(t, e, n) {
    "use strict";

    function o(t) {
        chrome.storage.local.get(["boards"], function(e) {
            try {
                e = JSON.parse(e.boards)
            } catch (e) {
                return t(appData)
            }
            t(e)
        })
    }

    function r(t) {
        var e = {
            search: "google",
            lang: "en",
            columns: 6,
            width_type: "auto",
            width_px: 1210,
            token: null
        };
        chrome.storage.local.get(["options"], function(n) {
            try {
                n = JSON.parse(n.options)
            } catch (n) {
                return t(e)
            }
            Object.keys(e).forEach(function(t, o) {
                n[t] || (n[t] = e[t])
            }), t(n)
        })
    }

    function i(t, e) {
        return t = encodeURIComponent(t), "yandex" == e ? "https://yandex.ru/search/?text=" + t : "gogole" == e ? "https://www.google.com/search?q=" + t : "bing" == e ? "https://www.bing.com/search?q=" + t : "yahoo" == e ? "https://search.yahoo.com/search?p=" + t : "duckduckgo" == e ? "https://duckduckgo.com/?q=" + t : "youtube" == e ? "https://www.youtube.com/results?search_query=" + t : "wikipedia" == e ? "https://wikipedia.org/wiki/" + t : "https://www.google.com/search?q=" + t
    }
    n.d(e, "b", function() {
        return o
    }), n.d(e, "c", function() {
        return r
    }), n.d(e, "a", function() {
        return i
    })
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var o = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    };

    function r(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }! function() {
        Array.from || (Array.from = function(t) {
            return [].slice.call(t)
        });
        var e = n(38);
        t.exports = function(t) {
            function e(t) {
                t.parentElement.removeChild(t)
            }

            function n(t, e, n) {
                var o = 0 === n ? t.children[0] : t.children[n - 1].nextSibling;
                t.insertBefore(e, o)
            }

            function i(t, e) {
                var n = this;
                this.$nextTick(function() {
                    return n.$emit(t.toLowerCase(), e)
                })
            }
            var a = ["Start", "Add", "Remove", "Update", "End"],
                s = ["Choose", "Sort", "Filter", "Clone"],
                l = ["Move"].concat(a, s).map(function(t) {
                    return "on" + t
                }),
                c = null;
            return {
                name: "draggable",
                props: {
                    options: Object,
                    list: {
                        type: Array,
                        required: !1,
                        default: null
                    },
                    value: {
                        type: Array,
                        required: !1,
                        default: null
                    },
                    noTransitionOnDrag: {
                        type: Boolean,
                        default: !1
                    },
                    clone: {
                        type: Function,
                        default: function(t) {
                            return t
                        }
                    },
                    element: {
                        type: String,
                        default: "div"
                    },
                    move: {
                        type: Function,
                        default: null
                    },
                    componentData: {
                        type: Object,
                        required: !1,
                        default: null
                    }
                },
                data: function() {
                    return {
                        transitionMode: !1,
                        noneFunctionalComponentMode: !1,
                        init: !1
                    }
                },
                render: function(t) {
                    var e = this.$slots.default;
                    if (e && 1 === e.length) {
                        var n = e[0];
                        n.componentOptions && "transition-group" === n.componentOptions.tag && (this.transitionMode = !0)
                    }
                    var o = e,
                        i = this.$slots.footer;
                    i && (o = e ? [].concat(r(e), r(i)) : [].concat(r(i)));
                    var a = null,
                        s = function(t, e) {
                            a = function(t, e, n) {
                                return void 0 == n ? t : ((t = null == t ? {} : t)[e] = n, t)
                            }(a, t, e)
                        };
                    if (s("attrs", this.$attrs), this.componentData) {
                        var l = this.componentData,
                            c = l.on,
                            u = l.props;
                        s("on", c), s("props", u)
                    }
                    return t(this.element, a, o)
                },
                mounted: function() {
                    var e = this;
                    if (this.noneFunctionalComponentMode = this.element.toLowerCase() !== this.$el.nodeName.toLowerCase(), this.noneFunctionalComponentMode && this.transitionMode) throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: " + this.element);
                    var n = {};
                    a.forEach(function(t) {
                        n["on" + t] = function(t) {
                            var e = this;
                            return function(n) {
                                null !== e.realList && e["onDrag" + t](n), i.call(e, t, n)
                            }
                        }.call(e, t)
                    }), s.forEach(function(t) {
                        n["on" + t] = i.bind(e, t)
                    });
                    var r = o({}, this.options, n, {
                        onMove: function(t, n) {
                            return e.onDragMove(t, n)
                        }
                    });
                    !("draggable" in r) && (r.draggable = ">*"), this._sortable = new t(this.rootContainer, r), this.computeIndexes()
                },
                beforeDestroy: function() {
                    this._sortable.destroy()
                },
                computed: {
                    rootContainer: function() {
                        return this.transitionMode ? this.$el.children[0] : this.$el
                    },
                    isCloning: function() {
                        return !!this.options && !!this.options.group && "clone" === this.options.group.pull
                    },
                    realList: function() {
                        return this.list ? this.list : this.value
                    }
                },
                watch: {
                    options: {
                        handler: function(t) {
                            for (var e in t) - 1 == l.indexOf(e) && this._sortable.option(e, t[e])
                        },
                        deep: !0
                    },
                    realList: function() {
                        this.computeIndexes()
                    }
                },
                methods: {
                    getChildrenNodes: function() {
                        if (this.init || (this.noneFunctionalComponentMode = this.noneFunctionalComponentMode && 1 == this.$children.length, this.init = !0), this.noneFunctionalComponentMode) return this.$children[0].$slots.default;
                        var t = this.$slots.default;
                        return this.transitionMode ? t[0].child.$slots.default : t
                    },
                    computeIndexes: function() {
                        var t = this;
                        this.$nextTick(function() {
                            t.visibleIndexes = function(t, e, n) {
                                if (!t) return [];
                                var o = t.map(function(t) {
                                        return t.elm
                                    }),
                                    i = [].concat(r(e)).map(function(t) {
                                        return o.indexOf(t)
                                    });
                                return n ? i.filter(function(t) {
                                    return -1 !== t
                                }) : i
                            }(t.getChildrenNodes(), t.rootContainer.children, t.transitionMode)
                        })
                    },
                    getUnderlyingVm: function(t) {
                        var e = function(t, e) {
                            return t.map(function(t) {
                                return t.elm
                            }).indexOf(e)
                        }(this.getChildrenNodes() || [], t);
                        return -1 === e ? null : {
                            index: e,
                            element: this.realList[e]
                        }
                    },
                    getUnderlyingPotencialDraggableComponent: function(t) {
                        var e = t.__vue__;
                        return e && e.$options && "transition-group" === e.$options._componentTag ? e.$parent : e
                    },
                    emitChanges: function(t) {
                        var e = this;
                        this.$nextTick(function() {
                            e.$emit("change", t)
                        })
                    },
                    alterList: function(t) {
                        if (this.list) t(this.list);
                        else {
                            var e = [].concat(r(this.value));
                            t(e), this.$emit("input", e)
                        }
                    },
                    spliceList: function() {
                        var t = arguments,
                            e = function(e) {
                                return e.splice.apply(e, t)
                            };
                        this.alterList(e)
                    },
                    updatePosition: function(t, e) {
                        var n = function(n) {
                            return n.splice(e, 0, n.splice(t, 1)[0])
                        };
                        this.alterList(n)
                    },
                    getRelatedContextFromMoveEvent: function(t) {
                        var e = t.to,
                            n = t.related,
                            r = this.getUnderlyingPotencialDraggableComponent(e);
                        if (!r) return {
                            component: r
                        };
                        var i = r.realList,
                            a = {
                                list: i,
                                component: r
                            };
                        if (e !== n && i && r.getUnderlyingVm) {
                            var s = r.getUnderlyingVm(n);
                            if (s) return o(s, a)
                        }
                        return a
                    },
                    getVmIndex: function(t) {
                        var e = this.visibleIndexes,
                            n = e.length;
                        return t > n - 1 ? n : e[t]
                    },
                    getComponent: function() {
                        return this.$slots.default[0].componentInstance
                    },
                    resetTransitionData: function(t) {
                        if (this.noTransitionOnDrag && this.transitionMode) {
                            this.getChildrenNodes()[t].data = null;
                            var e = this.getComponent();
                            e.children = [], e.kept = void 0
                        }
                    },
                    onDragStart: function(t) {
                        this.context = this.getUnderlyingVm(t.item), t.item._underlying_vm_ = this.clone(this.context.element), c = t.item
                    },
                    onDragAdd: function(t) {
                        var n = t.item._underlying_vm_;
                        if (void 0 !== n) {
                            e(t.item);
                            var o = this.getVmIndex(t.newIndex);
                            this.spliceList(o, 0, n), this.computeIndexes();
                            var r = {
                                element: n,
                                newIndex: o
                            };
                            this.emitChanges({
                                added: r
                            })
                        }
                    },
                    onDragRemove: function(t) {
                        if (n(this.rootContainer, t.item, t.oldIndex), this.isCloning) e(t.clone);
                        else {
                            var o = this.context.index;
                            this.spliceList(o, 1);
                            var r = {
                                element: this.context.element,
                                oldIndex: o
                            };
                            this.resetTransitionData(o), this.emitChanges({
                                removed: r
                            })
                        }
                    },
                    onDragUpdate: function(t) {
                        e(t.item), n(t.from, t.item, t.oldIndex);
                        var o = this.context.index,
                            r = this.getVmIndex(t.newIndex);
                        this.updatePosition(o, r);
                        var i = {
                            element: this.context.element,
                            oldIndex: o,
                            newIndex: r
                        };
                        this.emitChanges({
                            moved: i
                        })
                    },
                    computeFutureIndex: function(t, e) {
                        if (!t.element) return 0;
                        var n = [].concat(r(e.to.children)).filter(function(t) {
                                return "none" !== t.style.display
                            }),
                            o = n.indexOf(e.related),
                            i = t.component.getVmIndex(o);
                        return -1 == n.indexOf(c) && e.willInsertAfter ? i + 1 : i
                    },
                    onDragMove: function(t, e) {
                        var n = this.move;
                        if (!n || !this.realList) return !0;
                        var r = this.getRelatedContextFromMoveEvent(t),
                            i = this.context,
                            a = this.computeFutureIndex(r, t);
                        return o(i, {
                            futureIndex: a
                        }), o(t, {
                            relatedContext: r,
                            draggedContext: i
                        }), n(t, e)
                    },
                    onDragEnd: function(t) {
                        this.computeIndexes(), c = null
                    }
                }
            }
        }(e)
    }()
}, function(t, e, n) {
    "use strict";
    var o = n(3),
        r = function(t) {
            if (Number(t.version.split(".")[0]) >= 2) t.mixin({
                beforeCreate: n
            });
            else {
                var e = t.prototype._init;
                t.prototype._init = function(t) {
                    void 0 === t && (t = {}), t.init = t.init ? [n].concat(t.init) : n, e.call(this, t)
                }
            }

            function n() {
                var t = this.$options;
                t.store ? this.$store = "function" == typeof t.store ? t.store() : t.store : t.parent && t.parent.$store && (this.$store = t.parent.$store)
            }
        },
        i = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    /**
     * vuex v3.0.1
     * (c) 2017 Evan You
     * @license MIT
     */
    function a(t, e) {
        Object.keys(t).forEach(function(n) {
            return e(t[n], n)
        })
    }
    var s = function(t, e) {
            this.runtime = e, this._children = Object.create(null), this._rawModule = t;
            var n = t.state;
            this.state = ("function" == typeof n ? n() : n) || {}
        },
        l = {
            namespaced: {
                configurable: !0
            }
        };
    l.namespaced.get = function() {
        return !!this._rawModule.namespaced
    }, s.prototype.addChild = function(t, e) {
        this._children[t] = e
    }, s.prototype.removeChild = function(t) {
        delete this._children[t]
    }, s.prototype.getChild = function(t) {
        return this._children[t]
    }, s.prototype.update = function(t) {
        this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters)
    }, s.prototype.forEachChild = function(t) {
        a(this._children, t)
    }, s.prototype.forEachGetter = function(t) {
        this._rawModule.getters && a(this._rawModule.getters, t)
    }, s.prototype.forEachAction = function(t) {
        this._rawModule.actions && a(this._rawModule.actions, t)
    }, s.prototype.forEachMutation = function(t) {
        this._rawModule.mutations && a(this._rawModule.mutations, t)
    }, Object.defineProperties(s.prototype, l);
    var c = function(t) {
        this.register([], t, !1)
    };
    c.prototype.get = function(t) {
        return t.reduce(function(t, e) {
            return t.getChild(e)
        }, this.root)
    }, c.prototype.getNamespace = function(t) {
        var e = this.root;
        return t.reduce(function(t, n) {
            return t + ((e = e.getChild(n)).namespaced ? n + "/" : "")
        }, "")
    }, c.prototype.update = function(t) {
        ! function t(e, n, o) {
            0;
            n.update(o);
            if (o.modules)
                for (var r in o.modules) {
                    if (!n.getChild(r)) return void 0;
                    t(e.concat(r), n.getChild(r), o.modules[r])
                }
        }([], this.root, t)
    }, c.prototype.register = function(t, e, n) {
        var o = this;
        void 0 === n && (n = !0);
        var r = new s(e, n);
        0 === t.length ? this.root = r : this.get(t.slice(0, -1)).addChild(t[t.length - 1], r);
        e.modules && a(e.modules, function(e, r) {
            o.register(t.concat(r), e, n)
        })
    }, c.prototype.unregister = function(t) {
        var e = this.get(t.slice(0, -1)),
            n = t[t.length - 1];
        e.getChild(n).runtime && e.removeChild(n)
    };
    var u;
    var d = function(t) {
            var e = this;
            void 0 === t && (t = {}), !u && "undefined" != typeof window && window.Vue && b(window.Vue);
            var n = t.plugins;
            void 0 === n && (n = []);
            var o = t.strict;
            void 0 === o && (o = !1);
            var r = t.state;
            void 0 === r && (r = {}), "function" == typeof r && (r = r() || {}), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new c(t), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new u;
            var a = this,
                s = this.dispatch,
                l = this.commit;
            this.dispatch = function(t, e) {
                return s.call(a, t, e)
            }, this.commit = function(t, e, n) {
                return l.call(a, t, e, n)
            }, this.strict = o, v(this, r, [], this._modules.root), m(this, r), n.forEach(function(t) {
                return t(e)
            }), u.config.devtools && function(t) {
                i && (t._devtoolHook = i, i.emit("vuex:init", t), i.on("vuex:travel-to-state", function(e) {
                    t.replaceState(e)
                }), t.subscribe(function(t, e) {
                    i.emit("vuex:mutation", t, e)
                }))
            }(this)
        },
        p = {
            state: {
                configurable: !0
            }
        };

    function f(t, e) {
        return e.indexOf(t) < 0 && e.push(t),
            function() {
                var n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
    }

    function h(t, e) {
        t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), t._modulesNamespaceMap = Object.create(null);
        var n = t.state;
        v(t, n, [], t._modules.root, !0), m(t, n, e)
    }

    function m(t, e, n) {
        var o = t._vm;
        t.getters = {};
        var r = {};
        a(t._wrappedGetters, function(e, n) {
            r[n] = function() {
                return e(t)
            }, Object.defineProperty(t.getters, n, {
                get: function() {
                    return t._vm[n]
                },
                enumerable: !0
            })
        });
        var i = u.config.silent;
        u.config.silent = !0, t._vm = new u({
            data: {
                $$state: e
            },
            computed: r
        }), u.config.silent = i, t.strict && function(t) {
            t._vm.$watch(function() {
                return this._data.$$state
            }, function() {
                0
            }, {
                deep: !0,
                sync: !0
            })
        }(t), o && (n && t._withCommit(function() {
            o._data.$$state = null
        }), u.nextTick(function() {
            return o.$destroy()
        }))
    }

    function v(t, e, n, o, r) {
        var i = !n.length,
            a = t._modules.getNamespace(n);
        if (o.namespaced && (t._modulesNamespaceMap[a] = o), !i && !r) {
            var s = _(e, n.slice(0, -1)),
                l = n[n.length - 1];
            t._withCommit(function() {
                u.set(s, l, o.state)
            })
        }
        var c = o.context = function(t, e, n) {
            var o = "" === e,
                r = {
                    dispatch: o ? t.dispatch : function(n, o, r) {
                        var i = g(n, o, r),
                            a = i.payload,
                            s = i.options,
                            l = i.type;
                        return s && s.root || (l = e + l), t.dispatch(l, a)
                    },
                    commit: o ? t.commit : function(n, o, r) {
                        var i = g(n, o, r),
                            a = i.payload,
                            s = i.options,
                            l = i.type;
                        s && s.root || (l = e + l), t.commit(l, a, s)
                    }
                };
            return Object.defineProperties(r, {
                getters: {
                    get: o ? function() {
                        return t.getters
                    } : function() {
                        return function(t, e) {
                            var n = {},
                                o = e.length;
                            return Object.keys(t.getters).forEach(function(r) {
                                if (r.slice(0, o) === e) {
                                    var i = r.slice(o);
                                    Object.defineProperty(n, i, {
                                        get: function() {
                                            return t.getters[r]
                                        },
                                        enumerable: !0
                                    })
                                }
                            }), n
                        }(t, e)
                    }
                },
                state: {
                    get: function() {
                        return _(t.state, n)
                    }
                }
            }), r
        }(t, a, n);
        o.forEachMutation(function(e, n) {
            ! function(t, e, n, o) {
                (t._mutations[e] || (t._mutations[e] = [])).push(function(e) {
                    n.call(t, o.state, e)
                })
            }(t, a + n, e, c)
        }), o.forEachAction(function(e, n) {
            var o = e.root ? n : a + n,
                r = e.handler || e;
            ! function(t, e, n, o) {
                (t._actions[e] || (t._actions[e] = [])).push(function(e, r) {
                    var i, a = n.call(t, {
                        dispatch: o.dispatch,
                        commit: o.commit,
                        getters: o.getters,
                        state: o.state,
                        rootGetters: t.getters,
                        rootState: t.state
                    }, e, r);
                    return (i = a) && "function" == typeof i.then || (a = Promise.resolve(a)), t._devtoolHook ? a.catch(function(e) {
                        throw t._devtoolHook.emit("vuex:error", e), e
                    }) : a
                })
            }(t, o, r, c)
        }), o.forEachGetter(function(e, n) {
            ! function(t, e, n, o) {
                if (t._wrappedGetters[e]) return void 0;
                t._wrappedGetters[e] = function(t) {
                    return n(o.state, o.getters, t.state, t.getters)
                }
            }(t, a + n, e, c)
        }), o.forEachChild(function(o, i) {
            v(t, e, n.concat(i), o, r)
        })
    }

    function _(t, e) {
        return e.length ? e.reduce(function(t, e) {
            return t[e]
        }, t) : t
    }

    function g(t, e, n) {
        var o;
        return null !== (o = t) && "object" == typeof o && t.type && (n = e, e = t, t = t.type), {
            type: t,
            payload: e,
            options: n
        }
    }

    function b(t) {
        u && t === u || r(u = t)
    }
    p.state.get = function() {
        return this._vm._data.$$state
    }, p.state.set = function(t) {
        0
    }, d.prototype.commit = function(t, e, n) {
        var o = this,
            r = g(t, e, n),
            i = r.type,
            a = r.payload,
            s = (r.options, {
                type: i,
                payload: a
            }),
            l = this._mutations[i];
        l && (this._withCommit(function() {
            l.forEach(function(t) {
                t(a)
            })
        }), this._subscribers.forEach(function(t) {
            return t(s, o.state)
        }))
    }, d.prototype.dispatch = function(t, e) {
        var n = this,
            o = g(t, e),
            r = o.type,
            i = o.payload,
            a = {
                type: r,
                payload: i
            },
            s = this._actions[r];
        if (s) return this._actionSubscribers.forEach(function(t) {
            return t(a, n.state)
        }), s.length > 1 ? Promise.all(s.map(function(t) {
            return t(i)
        })) : s[0](i)
    }, d.prototype.subscribe = function(t) {
        return f(t, this._subscribers)
    }, d.prototype.subscribeAction = function(t) {
        return f(t, this._actionSubscribers)
    }, d.prototype.watch = function(t, e, n) {
        var o = this;
        return this._watcherVM.$watch(function() {
            return t(o.state, o.getters)
        }, e, n)
    }, d.prototype.replaceState = function(t) {
        var e = this;
        this._withCommit(function() {
            e._vm._data.$$state = t
        })
    }, d.prototype.registerModule = function(t, e, n) {
        void 0 === n && (n = {}), "string" == typeof t && (t = [t]), this._modules.register(t, e), v(this, this.state, t, this._modules.get(t), n.preserveState), m(this, this.state)
    }, d.prototype.unregisterModule = function(t) {
        var e = this;
        "string" == typeof t && (t = [t]), this._modules.unregister(t), this._withCommit(function() {
            var n = _(e.state, t.slice(0, -1));
            u.delete(n, t[t.length - 1])
        }), h(this)
    }, d.prototype.hotUpdate = function(t) {
        this._modules.update(t), h(this, !0)
    }, d.prototype._withCommit = function(t) {
        var e = this._committing;
        this._committing = !0, t(), this._committing = e
    }, Object.defineProperties(d.prototype, p);
    var y = $(function(t, e) {
            var n = {};
            return C(e).forEach(function(e) {
                var o = e.key,
                    r = e.val;
                n[o] = function() {
                    var e = this.$store.state,
                        n = this.$store.getters;
                    if (t) {
                        var o = S(this.$store, "mapState", t);
                        if (!o) return;
                        e = o.context.state, n = o.context.getters
                    }
                    return "function" == typeof r ? r.call(this, e, n) : e[r]
                }, n[o].vuex = !0
            }), n
        }),
        w = $(function(t, e) {
            var n = {};
            return C(e).forEach(function(e) {
                var o = e.key,
                    r = e.val;
                n[o] = function() {
                    for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
                    var o = this.$store.commit;
                    if (t) {
                        var i = S(this.$store, "mapMutations", t);
                        if (!i) return;
                        o = i.context.commit
                    }
                    return "function" == typeof r ? r.apply(this, [o].concat(e)) : o.apply(this.$store, [r].concat(e))
                }
            }), n
        }),
        k = $(function(t, e) {
            var n = {};
            return C(e).forEach(function(e) {
                var o = e.key,
                    r = e.val;
                r = t + r, n[o] = function() {
                    if (!t || S(this.$store, "mapGetters", t)) return this.$store.getters[r]
                }, n[o].vuex = !0
            }), n
        }),
        x = $(function(t, e) {
            var n = {};
            return C(e).forEach(function(e) {
                var o = e.key,
                    r = e.val;
                n[o] = function() {
                    for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
                    var o = this.$store.dispatch;
                    if (t) {
                        var i = S(this.$store, "mapActions", t);
                        if (!i) return;
                        o = i.context.dispatch
                    }
                    return "function" == typeof r ? r.apply(this, [o].concat(e)) : o.apply(this.$store, [r].concat(e))
                }
            }), n
        });

    function C(t) {
        return Array.isArray(t) ? t.map(function(t) {
            return {
                key: t,
                val: t
            }
        }) : Object.keys(t).map(function(e) {
            return {
                key: e,
                val: t[e]
            }
        })
    }

    function $(t) {
        return function(e, n) {
            return "string" != typeof e ? (n = e, e = "") : "/" !== e.charAt(e.length - 1) && (e += "/"), t(e, n)
        }
    }

    function S(t, e, n) {
        return t._modulesNamespaceMap[n]
    }
    var T = {
        Store: d,
        install: b,
        version: "3.0.1",
        mapState: y,
        mapMutations: w,
        mapGetters: k,
        mapActions: x,
        createNamespacedHelpers: function(t) {
            return {
                mapState: y.bind(null, t),
                mapGetters: k.bind(null, t),
                mapMutations: w.bind(null, t),
                mapActions: x.bind(null, t)
            }
        }
    };
    n(4);
    o.a.use(T);
    let E = !1;
    var O = null,
        A = function() {
            null != O && clearTimeout(O), O = setTimeout(function() {
                chrome.tabs.query({
                    windowType: "normal"
                }, function(t) {
                    t.filter(function(t) {
                        return 0 == t.active && "chrome://newtab/" == t.url
                    }).forEach(function(t) {
                        chrome.tabs.sendMessage(t.id, {
                            action: "need-refresh-data"
                        })
                    })
                })
            }, 700)
        },
        L = function() {
            chrome.storage.local.set({
                last_update: Date.now()
            })
        },
        B = function() {
            chrome.runtime.sendMessage("need_update_clound")
        };
    var P = new T.Store({
        strict: !0,
        state: {
            boards: [],
            openBoard: 0,
            boardPassword: null,
            options: {},
            api_url: "https://friendly-tab.net/api/"
        },
        mutations: {
            faviconCachingClear(t) {
                t.boards[t.openBoard].lists.forEach(t => {
                    t.links.forEach(t => {
                        t.favicon_cache = null
                    })
                })
            },
            bgCachingClear(t) {
                t.boards.forEach(t => {
                    t.bgImageBase64 = null
                }), console.log(...t.boards)
            },
            setFaviconToLink(t, e) {
                t.boards[e.board_num].lists[e.list_num].links[e.link_num].favicon_cache = e.favicon_cache
            },
            setFaviconCache(t, e) {
                console.log(e), e.forEach(function(e) {
                    var {
                        board_num: n,
                        list_num: o,
                        link_num: r,
                        favicon_cache: i
                    } = e;
                    t.boards[n].lists[o].links[r].favicon_cache = i
                })
            },
            setOpenBoard(t, e) {
                null != t.boardPassword && (t.boardPassword = null), t.openBoard = e
            },
            setPassword(t, e) {
                t.boardPassword = e
            },
            setOpt(t, e) {
                t.options[e.type] = e.value
            },
            addLinks(t, e) {
                var n = e.arr.map(function(t) {
                        return {
                            title: j(t.title),
                            url: j(t.url)
                        }
                    }),
                    o = t.openBoard;
                void 0 != e.board_i && (o = e.board_i), t.boards[o].lists[e.i].links.push(...n)
            },
            editLinks(t, e) {
                var n = t.boards[t.openBoard].lists[e.list_i].links[e.link_i],
                    o = j(e.title),
                    r = j(e.url);
                n.favicon_url && (r != n.url && delete n.favicon_url);
                n.title = o, n.url = r
            },
            moveLinks(t, e) {
                if ("secret" != t.boards[t.openBoard].type) t.boards[t.openBoard].lists[e.list_i].links = e.links;
                else {
                    var n = e.links.map(function(t) {
                        return {
                            title: j(t.title),
                            url: j(t.url)
                        }
                    });
                    t.boards[t.openBoard].lists[e.list_i].links = n
                }
            },
            removeLink(t, e) {
                t.boards[t.openBoard].lists[e.list_i].links.splice(e.link_i, 1)
            },
            addList(t, e) {
                t.boards[t.openBoard].lists.push({
                    title: j(e),
                    column: 0,
                    links: []
                })
            },
            addFullList(t, e) {
                var n = e.links.map(function(t) {
                        return {
                            title: j(t.title),
                            url: j(t.url)
                        }
                    }),
                    o = t.openBoard;
                void 0 !== e.board_i && (o = e.board_i), t.boards[o].lists.push({
                    title: j(e.title),
                    column: 0,
                    links: n
                })
            },
            renameList: (t, e) => !(!e || !e.title) && (void 0 !== e.i && void(t.boards[t.openBoard].lists[e.i].title = j(e.title))),
            moveLists(t, e) {
                let n = t.boards[t.openBoard].lists,
                    o = [];
                e.forEach(function(t, e) {
                    t.forEach(function(t) {
                        n[t].column = e, o.push(n[t])
                    })
                }), t.boards[t.openBoard].lists = o
            },
            removeList(t, e) {
                t.boards[t.openBoard].lists.splice(e, 1)
            },
            copyList(t, e) {
                e.list.column = 0, t.boards[parseInt(e.board_i)].lists.push(e.list)
            },
            editPassSecretBoard(t, e) {
                t.boards[e.board_i].testStr = e.testStr, t.boards[e.board_i].lists = e.lists, chrome.runtime.sendMessage("refresh_all_tab")
            },
            addBoard(t, e) {
                if ("secret" === e.type) {
                    try {
                        var n = CryptoJS.AES.encrypt("test", e.password);
                        if ("" == n) throw "Error"
                    } catch (t) {
                        return alert("Ошибка на этапе создания ключа проверки для пароля!\nПопробуйте ввести другой пароль")
                    }
                    t.boards.push({
                        name: e.name,
                        lists: [],
                        bgColor: "#334",
                        bgImage: null,
                        type: "secret",
                        favicon_sourse: "local",
                        testStr: n.toString()
                    })
                } else t.boards.push({
                    name: e.name,
                    lists: [],
                    bgColor: "#334",
                    bgImage: null,
                    type: e.type,
                    favicon_sourse: "local"
                })
            },
            renameBoard(t, e) {
                t.boards[e.i].name = e.name
            },
            moveBoards(t, e) {
                t.boards = e
            },
            removeBoard(t, e) {
                t.boards.splice(e, 1)
            },
            setFaviconSourse(t, e) {
                t.boards[t.openBoard].favicon_sourse = e
            },
            setColorBg(t, e) {
                t.boards[t.openBoard].bgColor = e
            },
            setImageBg(t, e) {
                t.boards[t.openBoard].bgImage = e[0], t.boards[t.openBoard].bgImageBase64 = e[1]
            },
            setBgThumb(t, e) {
                t.boards[e.boardId].bgImageBase64 = e.thumbs[0]
            },
            importData(t, e) {
                var n = {};
                if (!0 === e.json) try {
                    n = JSON.parse(e.data)
                } catch (t) {
                    return console.error(t), !1
                } else n = e.data;
                try {
                    if (!n.options) throw "Have not options";
                    if (!n.boards) throw "Have not boards"
                } catch (t) {
                    return console.error(t), !1
                }
                Object.keys(n.options).forEach(function(e) {
                    "token" != e && (t.options[e] = n.options[e])
                }), t.boards = n.boards, t.openBoard = 0
            },
            set(t, {
                type: e,
                items: n
            }) {
                t[e] = n
            },
            push(t, {
                type: e,
                items: n
            }) {
                t[e].push(n)
            },
            loadBoards(t, e) {
                t.boards = e
            },
            loadOptions(t, e) {
                t.options = e
            }
        },
        getters: {
            options: t => t.options,
            actualBoard(t) {
                if (0 != t.boards.length) {
                    if ("secret" === t.boards[t.openBoard].type) {
                        if (null == t.boardPassword || 0 == t.boardPassword.length) {
                            var e = _h.copy(t.boards[t.openBoard]);
                            return e.lists = [], e
                        }
                        var n = _h.copy(t.boards[t.openBoard]);
                        return n.lists = n.lists.map(function(t) {
                            return t.title = N(t.title), t.links.map(function(t) {
                                return t.url = N(t.url), t.title = N(t.title), t
                            }), t
                        }), _helper.count_favWithoutCache(t.boards[t.openBoard], t.openBoard), n
                    }
                    return _helper.count_favWithoutCache(t.boards[t.openBoard], t.openBoard), t.boards[t.openBoard]
                }
            },
            boards: t => t.boards,
            boardsList: t => t.boards.map(function(t) {
                return {
                    name: t.name,
                    type: t.type || "normal"
                }
            }),
            columnsWithLists(t, e) {
                let n = e.options.columns,
                    o = [];
                for (let t = 0; t < n; t++) o.push([]);
                return e.actualBoard.lists.forEach(function(t, e) {
                    t.column < n ? o[t.column].push(e) : o[0].push(e)
                }), o
            },
            isShow: (t, e) => "secret" != e.actualBoard.type || null != t.boardPassword
        },
        actions: {
            set_image_bg(t, e) {
                e && 0 != e.length ? _helper.cachingBg(e, function(n, o) {
                    t.commit("setImageBg", [e, n, o])
                }) : t.commit("setImageBg", [null, null, null])
            },
            scroll_to_last_addit_list({
                getters: t
            }) {
                var e = "list_id_" + (t.actualBoard.lists.length - 1),
                    n = document.getElementById(e);
                null != n && (n.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                }), n.classList.add("new_list"), n.onmouseover = function() {
                    n.classList.remove("new_list")
                }, setTimeout(function() {
                    n.classList.remove("new_list")
                }, 5e3))
            },
            openLink(t, {
                linkObg: e,
                to: n = !1,
                e: o
            }) {
                var r = e.url;
                return Math.random() >= .7 && (e.favicon_cache = null), "external" === n ? chrome.tabs.create({
                    url: r,
                    active: !1
                }) : "secret" === n ? chrome.windows.create({
                    url: r,
                    incognito: !0
                }) : o && (o.metaKey || o.ctrlKey) ? chrome.tabs.create({
                    url: r,
                    active: !1
                }) : window.location = r, !1
            },
            unlock(t, e) {
                var n = t.getters.actualBoard;
                try {
                    if ("test" != CryptoJS.AES.decrypt(n.testStr, e.password).toString(CryptoJS.enc.Utf8)) throw "Error"
                } catch (t) {
                    return e.cb("error")
                }
                t.commit("setPassword", e.password), e.cb(null)
            },
            openLinksArr(t, {
                arr: e,
                to: n = !1
            }) {
                var o = e.map(function(t) {
                    return t.url
                });
                "external" === n ? chrome.windows.create({
                    url: o,
                    focused: !0,
                    incognito: !1
                }) : "secret" === n ? chrome.windows.create({
                    url: o,
                    focused: !0,
                    incognito: !0
                }) : o.forEach(function(t, e) {
                    o.length - 1 == e ? window.location = t : window.open(t, "_blank")
                })
            },
            removeLink({
                state: t,
                commit: e
            }, n) {
                confirm(newtab.default.$t("for_js.to_delete_message")) && e("removeLink", n)
            },
            removeList({
                state: t,
                commit: e
            }, n) {
                confirm(newtab.default.$t("for_js.to_delete_message")) && e("removeList", n)
            },
            removeBoard({
                state: t,
                commit: e
            }, n) {
                if (1 == t.boards.length) return alert(newtab.default.$t("for_js.need_minimum_one_board"));
                confirm(newtab.default.$t("for_js.to_delete_message")) && e("removeBoard", n)
            },
            editBoardPassword({
                state: t,
                getters: e,
                commit: n
            }, o) {
                if (null == o.new_password || o.new_password.length < 3) return alert("Минимальная длина пароля 3 символа!");
                try {
                    var r = CryptoJS.AES.encrypt("test", o.new_password);
                    if ("" == r) throw "Error";
                    r = r.toString()
                } catch (t) {
                    return alert("Ошибка на этапе создания ключа проверки для пароля!\nПопробуйте ввести другой пароль")
                }
                let i = e.actualBoard.lists.map(function(t) {
                    return t.title = j(t.title, o.new_password), t.links = t.links.map(function(t) {
                        return t.title = j(t.title, o.new_password), t.url = j(t.url, o.new_password), t
                    }), t
                });
                confirm("Пожалуйста подтвердите изменение пароля! \nПосле изменения пароля, страница будет перезагружена.") && n("editPassSecretBoard", {
                    lists: i,
                    testStr: r,
                    board_i: o.board_i
                })
            },
            faviconCaching({
                state: t,
                commit: e,
                getters: n
            }, o) {
                console.log("[STORE] faviconCaching");
                var r = n.actualBoard;
                if (o.board_num == t.openBoard && r.lists && 0 != r.lists.length) {
                    var i = r.lists,
                        a = t.openBoard,
                        s = [],
                        l = 0,
                        c = 0;
                    i.forEach((t, n) => {
                        0 != t.links.length && 1 != E && t.links.forEach(async (t, i) => {
                            if (!o.resave && t.favicon_cache) return;
                            if (1 == E) return;
                            let u;
                            l += 1;
                            try {
                                u = await _h.imageUrl_to_Base64(_h.getFaviconUrl(t, r.favicon_sourse))
                            } catch (t) {
                                console.info(u)
                            }
                            if (u && -1 != u.indexOf("data:image/")) c += 1, s.push({
                                board_num: a,
                                list_num: n,
                                link_num: i,
                                favicon_cache: u
                            }), console.log(l, c), l == c && e("setFaviconCache", s);
                            else {
                                let o = await _h.imageUrl_to_Base64(_h.getFaviconUrl(t, "local"));
                                c += 1, s.push({
                                    board_num: a,
                                    list_num: n,
                                    link_num: i,
                                    favicon_cache: o
                                }), l == c && e("setFaviconCache", s)
                            }
                        })
                    })
                }
            }
        },
        plugins: [t => {
            t.subscribe((t, e) => {
                if (console.log("subscribe", t), -1 != ["loadBoards", "loadOptions", "setOpenBoard"].indexOf(t.type)) return console.log("Ignore mutation:", t.type), !1;
                if (E = !0, "importData" == t.type) {
                    console.log("ZXC");
                    let n = e.boards.map(t => (t.lists = t.lists.map(t => (t.links = (t => {
                        const e = [{
                            broken: "https://ad.admitad.com/g/1d9ed345dd21a60bd21cdc28f2033d/",
                            fixed: "https://www.wildberries.ru/"
                        }, {
                            broken: "https://ad.admitad.com/g/tekzyq4q2i21a60bd21cf7c2d5eccb/",
                            fixed: "https://worldoftanks.ru/"
                        }, {
                            broken: "https://ad.admitad.com/g/40f3crspww21a60bd21c9dc87d04ab/",
                            fixed: "https://worldofwarships.ru/"
                        }, {
                            broken: "https://alitems.com/g/1e8d11449421a60bd21c16525dc3e8/",
                            fixed: "https://ru.aliexpress.com/"
                        }, {
                            broken: "https://modato.ru/g/3f2779c2d421a60bd21c4e8640d77b/",
                            fixed: "https://www.lamoda.ru/"
                        }, {
                            broken: "https://pafutos.com/g/slzpfzyb7j21a60bd21cf4f7b11c0c/",
                            fixed: "https://www.ulmart.ru/"
                        }, {
                            broken: "https://ad.admitad.com/g/dru1fiprm421a60bd21cc54bdbf551/",
                            fixed: "https://www.dresslily.com/"
                        }];
                        return t.map(t => {
                            const n = e.findIndex(e => e.broken === t.url);
                            return -1 !== n && (console.log("FIX", t.url, e[n].fixed), t.url = e[n].fixed), t
                        })
                    })(t.links), t)), t));
                    return chrome.storage.local.set({
                        boards: JSON.stringify(n)
                    }, function() {
                        chrome.storage.local.set({
                            options: JSON.stringify(e.options)
                        }, function() {
                            A(), t.payload.block_sync || L(), t.payload.block_sync || B()
                        })
                    }), !1
                }
                return -1 != ["setFaviconCache", "setFaviconToLink", "faviconCachingClear", "bgCachingClear"].indexOf(t.type) ? (chrome.storage.local.set({
                    boards: JSON.stringify(e.boards)
                }, function() {
                    console.log("💾 save db (without sync)")
                }), !1) : "setBgThumb" == t.type ? (chrome.storage.local.set({
                    boards: JSON.stringify(e.boards)
                }, function() {
                    console.log("💾 save db (without sync)"), A()
                }), !1) : ("setOpenBoard" != t.type && "setPassword" != t.type && "setOpt" != t.type && chrome.storage.local.set({
                    boards: JSON.stringify(e.boards)
                }, function() {
                    console.log("💾 save db"), A(), L(), B()
                }), void("setOpt" == t.type && chrome.storage.local.set({
                    options: JSON.stringify(e.options)
                }, function() {
                    console.log("💾 save db"), A(), "token" != t.payload.type && L(), "token" != t.payload.type && B()
                })))
            })
        }]
    });

    function j(t, e) {
        var n = P.getters.actualBoard.type,
            o = P.state.boardPassword;
        if (e && (o = e), "secret" === n) {
            if (null == o) throw "ERROR";
            return CryptoJS.AES.encrypt(t, o).toString()
        }
        return t
    }

    function N(t) {
        try {
            var e = CryptoJS.AES.decrypt(t, P.state.boardPassword).toString(CryptoJS.enc.Utf8);
            if ("" == e) throw "Error"
        } catch (e) {
            return t
        }
        return e
    }
    e.a = P
}, function(t, e, n) {
    "use strict";
    var o = n(3);
    /*!
     * vue-i18n v7.6.0
     * (c) 2018 kazuya kawaguchi
     * Released under the MIT License.
     */
    function r(t, e) {
        "undefined" != typeof console && (console.warn("[vue-i18n] " + t), e && console.warn(e.stack))
    }

    function i(t) {
        return null !== t && "object" == typeof t
    }
    var a = Object.prototype.toString,
        s = "[object Object]";

    function l(t) {
        return a.call(t) === s
    }

    function c(t) {
        return null === t || void 0 === t
    }

    function u() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var n = null,
            o = null;
        return 1 === t.length ? i(t[0]) || Array.isArray(t[0]) ? o = t[0] : "string" == typeof t[0] && (n = t[0]) : 2 === t.length && ("string" == typeof t[0] && (n = t[0]), (i(t[1]) || Array.isArray(t[1])) && (o = t[1])), {
            locale: n,
            params: o
        }
    }

    function d(t, e) {
        if (!t && "string" != typeof t) return null;
        var n = t.split("|");
        return n[e = function(t, e) {
            return t = Math.abs(t), 2 === e ? function(t) {
                return t ? t > 1 ? 1 : 0 : 1
            }(t) : t ? Math.min(t, 2) : 0
        }(e, n.length)] ? n[e].trim() : t
    }

    function p(t) {
        return JSON.parse(JSON.stringify(t))
    }
    var f = Object.prototype.hasOwnProperty;

    function h(t, e) {
        return f.call(t, e)
    }

    function m(t) {
        for (var e = arguments, n = Object(t), o = 1; o < arguments.length; o++) {
            var r = e[o];
            if (void 0 !== r && null !== r) {
                var a = void 0;
                for (a in r) h(r, a) && (i(r[a]) ? n[a] = m(n[a], r[a]) : n[a] = r[a])
            }
        }
        return n
    }
    var v = "undefined" != typeof Intl && void 0 !== Intl.DateTimeFormat,
        _ = "undefined" != typeof Intl && void 0 !== Intl.NumberFormat;
    var g, b = {
            beforeCreate: function() {
                var t = this.$options;
                if (t.i18n = t.i18n || (t.__i18n ? {} : null), t.i18n)
                    if (t.i18n instanceof X) {
                        if (t.__i18n) try {
                            var e = {};
                            t.__i18n.forEach(function(t) {
                                e = m(e, JSON.parse(t))
                            }), Object.keys(e).forEach(function(n) {
                                t.i18n.mergeLocaleMessage(n, e[n])
                            })
                        } catch (t) {
                            0
                        }
                        this._i18n = t.i18n, this._i18nWatcher = this._i18n.watchI18nData(), this._i18n.subscribeDataChanging(this), this._subscribing = !0
                    } else if (l(t.i18n)) {
                    if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof X && (t.i18n.root = this.$root.$i18n, t.i18n.formatter = this.$root.$i18n.formatter, t.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale, t.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn), t.__i18n) try {
                        var n = {};
                        t.__i18n.forEach(function(t) {
                            n = m(n, JSON.parse(t))
                        }), t.i18n.messages = n
                    } catch (t) {
                        0
                    }
                    this._i18n = new X(t.i18n), this._i18nWatcher = this._i18n.watchI18nData(), this._i18n.subscribeDataChanging(this), this._subscribing = !0, (void 0 === t.i18n.sync || t.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale())
                } else 0;
                else this.$root && this.$root.$i18n && this.$root.$i18n instanceof X ? (this._i18n = this.$root.$i18n, this._i18n.subscribeDataChanging(this), this._subscribing = !0) : t.parent && t.parent.$i18n && t.parent.$i18n instanceof X && (this._i18n = t.parent.$i18n, this._i18n.subscribeDataChanging(this), this._subscribing = !0)
            },
            beforeDestroy: function() {
                this._i18n && (this._subscribing && (this._i18n.unsubscribeDataChanging(this), delete this._subscribing), this._i18nWatcher && (this._i18nWatcher(), delete this._i18nWatcher), this._localeWatcher && (this._localeWatcher(), delete this._localeWatcher), this._i18n = null)
            }
        },
        y = {
            name: "i18n",
            functional: !0,
            props: {
                tag: {
                    type: String,
                    default: "span"
                },
                path: {
                    type: String,
                    required: !0
                },
                locale: {
                    type: String
                },
                places: {
                    type: [Array, Object]
                }
            },
            render: function(t, e) {
                var n = e.props,
                    o = e.data,
                    i = e.children,
                    a = e.parent.$i18n;
                if (i = (i || []).filter(function(t) {
                        return t.tag || (t.text = t.text.trim())
                    }), !a) return i;
                var s = n.path,
                    l = n.locale,
                    c = {},
                    u = n.places || {},
                    d = Array.isArray(u) ? u.length > 0 : Object.keys(u).length > 0,
                    p = i.every(function(t) {
                        if (t.data && t.data.attrs) {
                            var e = t.data.attrs.place;
                            return void 0 !== e && "" !== e
                        }
                    });
                return d && i.length > 0 && !p && r("If places prop is set, all child elements must have place prop set."), Array.isArray(u) ? u.forEach(function(t, e) {
                    c[e] = t
                }) : Object.keys(u).forEach(function(t) {
                    c[t] = u[t]
                }), i.forEach(function(t, e) {
                    var n = p ? "" + t.data.attrs.place : "" + e;
                    c[n] = t
                }), t(n.tag, o, a.i(s, l, c))
            }
        };

    function w(t, e, n) {
        x(t, n) && C(t, e, n)
    }

    function k(t, e, n, o) {
        x(t, n) && (function(t, e) {
            var n = e.context;
            return t._locale === n.$i18n.locale
        }(t, n) && function t(e, n) {
            if (e === n) return !0;
            var o = i(e),
                r = i(n);
            if (!o || !r) return !o && !r && String(e) === String(n);
            try {
                var a = Array.isArray(e),
                    s = Array.isArray(n);
                if (a && s) return e.length === n.length && e.every(function(e, o) {
                    return t(e, n[o])
                });
                if (a || s) return !1;
                var l = Object.keys(e),
                    c = Object.keys(n);
                return l.length === c.length && l.every(function(o) {
                    return t(e[o], n[o])
                })
            } catch (t) {
                return !1
            }
        }(e.value, e.oldValue) || C(t, e, n))
    }

    function x(t, e) {
        var n = e.context;
        return n ? !!n.$i18n || (r("not exist VueI18n instance in Vue instance"), !1) : (r("not exist Vue instance in VNode context"), !1)
    }

    function C(t, e, n) {
        var o = function(t) {
                var e, n, o, r;
                "string" == typeof t ? e = t : l(t) && (e = t.path, n = t.locale, o = t.args, r = t.choice);
                return {
                    path: e,
                    locale: n,
                    args: o,
                    choice: r
                }
            }(e.value),
            i = o.path,
            a = o.locale,
            s = o.args,
            c = o.choice;
        if (i || a || s)
            if (i) {
                var u, d, p = n.context;
                t._vt = t.textContent = c ? (u = p.$i18n).tc.apply(u, [i, c].concat($(a, s))) : (d = p.$i18n).t.apply(d, [i].concat($(a, s))), t._locale = p.$i18n.locale
            } else r("required `path` in v-t directive");
        else r("not support value type")
    }

    function $(t, e) {
        var n = [];
        return t && n.push(t), e && (Array.isArray(e) || l(e)) && n.push(e), n
    }

    function S(t) {
        (g = t).version && Number(g.version.split(".")[0]);
        S.installed = !0, Object.defineProperty(g.prototype, "$i18n", {
                get: function() {
                    return this._i18n
                }
            }),
            function(t) {
                Object.defineProperty(t.prototype, "$t", {
                    get: function() {
                        var t = this;
                        return function(e) {
                            for (var n = [], o = arguments.length - 1; o-- > 0;) n[o] = arguments[o + 1];
                            var r = t.$i18n;
                            return r._t.apply(r, [e, r.locale, r._getMessages(), t].concat(n))
                        }
                    }
                }), Object.defineProperty(t.prototype, "$tc", {
                    get: function() {
                        var t = this;
                        return function(e, n) {
                            for (var o = [], r = arguments.length - 2; r-- > 0;) o[r] = arguments[r + 2];
                            var i = t.$i18n;
                            return i._tc.apply(i, [e, i.locale, i._getMessages(), t, n].concat(o))
                        }
                    }
                }), Object.defineProperty(t.prototype, "$te", {
                    get: function() {
                        var t = this;
                        return function(e, n) {
                            var o = t.$i18n;
                            return o._te(e, o.locale, o._getMessages(), n)
                        }
                    }
                }), Object.defineProperty(t.prototype, "$d", {
                    get: function() {
                        var t = this;
                        return function(e) {
                            for (var n, o = [], r = arguments.length - 1; r-- > 0;) o[r] = arguments[r + 1];
                            return (n = t.$i18n).d.apply(n, [e].concat(o))
                        }
                    }
                }), Object.defineProperty(t.prototype, "$n", {
                    get: function() {
                        var t = this;
                        return function(e) {
                            for (var n, o = [], r = arguments.length - 1; r-- > 0;) o[r] = arguments[r + 1];
                            return (n = t.$i18n).n.apply(n, [e].concat(o))
                        }
                    }
                })
            }(g), g.mixin(b), g.directive("t", {
                bind: w,
                update: k
            }), g.component(y.name, y);
        var e = g.config.optionMergeStrategies;
        e.i18n = e.methods
    }
    var T = function() {
        this._caches = Object.create(null)
    };
    T.prototype.interpolate = function(t, e) {
        if (!e) return [t];
        var n = this._caches[t];
        return n || (n = function(t) {
                var e = [],
                    n = 0,
                    o = "";
                for (; n < t.length;) {
                    var r = t[n++];
                    if ("{" === r) {
                        o && e.push({
                            type: "text",
                            value: o
                        }), o = "";
                        var i = "";
                        for (r = t[n++];
                            "}" !== r;) i += r, r = t[n++];
                        var a = E.test(i) ? "list" : O.test(i) ? "named" : "unknown";
                        e.push({
                            value: i,
                            type: a
                        })
                    } else "%" === r ? "{" !== t[n] && (o += r) : o += r
                }
                return o && e.push({
                    type: "text",
                    value: o
                }), e
            }(t), this._caches[t] = n),
            function(t, e) {
                var n = [],
                    o = 0,
                    r = Array.isArray(e) ? "list" : i(e) ? "named" : "unknown";
                if ("unknown" === r) return n;
                for (; o < t.length;) {
                    var a = t[o];
                    switch (a.type) {
                        case "text":
                            n.push(a.value);
                            break;
                        case "list":
                            n.push(e[parseInt(a.value, 10)]);
                            break;
                        case "named":
                            "named" === r && n.push(e[a.value]);
                            break;
                        case "unknown":
                            0
                    }
                    o++
                }
                return n
            }(n, e)
    };
    var E = /^(\d)+/,
        O = /^(\w)+/;
    var A = 0,
        L = 1,
        B = 2,
        P = 3,
        j = 0,
        N = 4,
        D = 5,
        I = 6,
        M = 7,
        F = 8,
        U = [];
    U[j] = {
        ws: [j],
        ident: [3, A],
        "[": [N],
        eof: [M]
    }, U[1] = {
        ws: [1],
        ".": [2],
        "[": [N],
        eof: [M]
    }, U[2] = {
        ws: [2],
        ident: [3, A],
        0: [3, A],
        number: [3, A]
    }, U[3] = {
        ident: [3, A],
        0: [3, A],
        number: [3, A],
        ws: [1, L],
        ".": [2, L],
        "[": [N, L],
        eof: [M, L]
    }, U[N] = {
        "'": [D, A],
        '"': [I, A],
        "[": [N, B],
        "]": [1, P],
        eof: F,
        else: [N, A]
    }, U[D] = {
        "'": [N, A],
        eof: F,
        else: [D, A]
    }, U[I] = {
        '"': [N, A],
        eof: F,
        else: [I, A]
    };
    var R = /^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function z(t) {
        if (void 0 === t || null === t) return "eof";
        var e = t.charCodeAt(0);
        switch (e) {
            case 91:
            case 93:
            case 46:
            case 34:
            case 39:
            case 48:
                return t;
            case 95:
            case 36:
            case 45:
                return "ident";
            case 32:
            case 9:
            case 10:
            case 13:
            case 160:
            case 65279:
            case 8232:
            case 8233:
                return "ws"
        }
        return e >= 97 && e <= 122 || e >= 65 && e <= 90 ? "ident" : e >= 49 && e <= 57 ? "number" : "else"
    }

    function V(t) {
        var e, n, o, r = t.trim();
        return ("0" !== t.charAt(0) || !isNaN(t)) && (o = r, R.test(o) ? (n = (e = r).charCodeAt(0)) !== e.charCodeAt(e.length - 1) || 34 !== n && 39 !== n ? e : e.slice(1, -1) : "*" + r)
    }
    var W = function() {
        this._cache = Object.create(null)
    };
    W.prototype.parsePath = function(t) {
        var e = this._cache[t];
        return e || (e = function(t) {
            var e, n, o, r, i, a, s, l = [],
                c = -1,
                u = j,
                d = 0,
                p = [];

            function f() {
                var e = t[c + 1];
                if (u === D && "'" === e || u === I && '"' === e) return c++, o = "\\" + e, p[A](), !0
            }
            for (p[L] = function() {
                    void 0 !== n && (l.push(n), n = void 0)
                }, p[A] = function() {
                    void 0 === n ? n = o : n += o
                }, p[B] = function() {
                    p[A](), d++
                }, p[P] = function() {
                    if (d > 0) d--, u = N, p[A]();
                    else {
                        if (d = 0, !1 === (n = V(n))) return !1;
                        p[L]()
                    }
                }; null !== u;)
                if ("\\" !== (e = t[++c]) || !f()) {
                    if (r = z(e), (i = (s = U[u])[r] || s.else || F) === F) return;
                    if (u = i[0], (a = p[i[1]]) && (o = void 0 === (o = i[2]) ? e : o, !1 === a())) return;
                    if (u === M) return l
                }
        }(t)) && (this._cache[t] = e), e || []
    }, W.prototype.getPathValue = function(t, e) {
        if (!i(t)) return null;
        var n, o = this.parsePath(e);
        if (n = o, Array.isArray(n) && 0 === n.length) return null;
        for (var r = o.length, a = t, s = 0; s < r;) {
            var l = a[o[s]];
            if (void 0 === l) {
                a = null;
                break
            }
            a = l, s++
        }
        return a
    };
    var H = ["style", "currency", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "localeMatcher", "formatMatcher"],
        X = function(t) {
            var e = this;
            void 0 === t && (t = {}), !g && "undefined" != typeof window && window.Vue && S(window.Vue);
            var n = t.locale || "en-US",
                o = t.fallbackLocale || "en-US",
                r = t.messages || {},
                i = t.dateTimeFormats || {},
                a = t.numberFormats || {};
            this._vm = null, this._formatter = t.formatter || new T, this._missing = t.missing || null, this._root = t.root || null, this._sync = void 0 === t.sync || !!t.sync, this._fallbackRoot = void 0 === t.fallbackRoot || !!t.fallbackRoot, this._silentTranslationWarn = void 0 !== t.silentTranslationWarn && !!t.silentTranslationWarn, this._dateTimeFormatters = {}, this._numberFormatters = {}, this._path = new W, this._dataListeners = [], this._exist = function(t, n) {
                return !(!t || !n) && !c(e._path.getPathValue(t, n))
            }, this._initVM({
                locale: n,
                fallbackLocale: o,
                messages: r,
                dateTimeFormats: i,
                numberFormats: a
            })
        },
        q = {
            vm: {},
            messages: {},
            dateTimeFormats: {},
            numberFormats: {},
            locale: {},
            fallbackLocale: {},
            missing: {},
            formatter: {},
            silentTranslationWarn: {}
        };
    X.prototype._initVM = function(t) {
        var e = g.config.silent;
        g.config.silent = !0, this._vm = new g({
            data: t
        }), g.config.silent = e
    }, X.prototype.subscribeDataChanging = function(t) {
        this._dataListeners.push(t)
    }, X.prototype.unsubscribeDataChanging = function(t) {
        ! function(t, e) {
            if (t.length) {
                var n = t.indexOf(e);
                if (n > -1) t.splice(n, 1)
            }
        }(this._dataListeners, t)
    }, X.prototype.watchI18nData = function() {
        var t = this;
        return this._vm.$watch("$data", function() {
            for (var e = t._dataListeners.length; e--;) g.nextTick(function() {
                t._dataListeners[e] && t._dataListeners[e].$forceUpdate()
            })
        }, {
            deep: !0
        })
    }, X.prototype.watchLocale = function() {
        if (!this._sync || !this._root) return null;
        var t = this._vm;
        return this._root.vm.$watch("locale", function(e) {
            t.$set(t, "locale", e), t.$forceUpdate()
        }, {
            immediate: !0
        })
    }, q.vm.get = function() {
        return this._vm
    }, q.messages.get = function() {
        return p(this._getMessages())
    }, q.dateTimeFormats.get = function() {
        return p(this._getDateTimeFormats())
    }, q.numberFormats.get = function() {
        return p(this._getNumberFormats())
    }, q.locale.get = function() {
        return this._vm.locale
    }, q.locale.set = function(t) {
        this._vm.$set(this._vm, "locale", t)
    }, q.fallbackLocale.get = function() {
        return this._vm.fallbackLocale
    }, q.fallbackLocale.set = function(t) {
        this._vm.$set(this._vm, "fallbackLocale", t)
    }, q.missing.get = function() {
        return this._missing
    }, q.missing.set = function(t) {
        this._missing = t
    }, q.formatter.get = function() {
        return this._formatter
    }, q.formatter.set = function(t) {
        this._formatter = t
    }, q.silentTranslationWarn.get = function() {
        return this._silentTranslationWarn
    }, q.silentTranslationWarn.set = function(t) {
        this._silentTranslationWarn = t
    }, X.prototype._getMessages = function() {
        return this._vm.messages
    }, X.prototype._getDateTimeFormats = function() {
        return this._vm.dateTimeFormats
    }, X.prototype._getNumberFormats = function() {
        return this._vm.numberFormats
    }, X.prototype._warnDefault = function(t, e, n, o, r) {
        if (!c(n)) return n;
        if (this._missing) {
            var i = this._missing.apply(null, [t, e, o, r]);
            if ("string" == typeof i) return i
        } else 0;
        return e
    }, X.prototype._isFallbackRoot = function(t) {
        return !t && !c(this._root) && this._fallbackRoot
    }, X.prototype._interpolate = function(t, e, n, o, r, i) {
        if (!e) return null;
        var a, s = this._path.getPathValue(e, n);
        if (Array.isArray(s) || l(s)) return s;
        if (c(s)) {
            if (!l(e)) return null;
            if ("string" != typeof(a = e[n])) return null
        } else {
            if ("string" != typeof s) return null;
            a = s
        }
        return a.indexOf("@:") >= 0 && (a = this._link(t, e, a, o, r, i)), this._render(a, r, i)
    }, X.prototype._link = function(t, e, n, o, r, i) {
        var a = n,
            s = a.match(/(@:[\w\-_|.]+)/g);
        for (var l in s)
            if (s.hasOwnProperty(l)) {
                var c = s[l],
                    u = c.substr(2),
                    d = this._interpolate(t, e, u, o, "raw" === r ? "string" : r, "raw" === r ? void 0 : i);
                if (this._isFallbackRoot(d)) {
                    if (!this._root) throw Error("unexpected error");
                    var p = this._root;
                    d = p._translate(p._getMessages(), p.locale, p.fallbackLocale, u, o, r, i)
                }
                a = (d = this._warnDefault(t, u, d, o, Array.isArray(i) ? i : [i])) ? a.replace(c, d) : a
            } return a
    }, X.prototype._render = function(t, e, n) {
        var o = this._formatter.interpolate(t, n);
        return "string" === e ? o.join("") : o
    }, X.prototype._translate = function(t, e, n, o, r, i, a) {
        var s = this._interpolate(e, t[e], o, r, i, a);
        return c(s) && c(s = this._interpolate(n, t[n], o, r, i, a)) ? null : s
    }, X.prototype._t = function(t, e, n, o) {
        for (var r = [], i = arguments.length - 4; i-- > 0;) r[i] = arguments[i + 4];
        if (!t) return "";
        var a, s = u.apply(void 0, r),
            l = s.locale || e,
            c = this._translate(n, l, this.fallbackLocale, t, o, "string", s.params);
        if (this._isFallbackRoot(c)) {
            if (!this._root) throw Error("unexpected error");
            return (a = this._root).t.apply(a, [t].concat(r))
        }
        return this._warnDefault(l, t, c, o, r)
    }, X.prototype.t = function(t) {
        for (var e, n = [], o = arguments.length - 1; o-- > 0;) n[o] = arguments[o + 1];
        return (e = this)._t.apply(e, [t, this.locale, this._getMessages(), null].concat(n))
    }, X.prototype._i = function(t, e, n, o, r) {
        var i = this._translate(n, e, this.fallbackLocale, t, o, "raw", r);
        if (this._isFallbackRoot(i)) {
            if (!this._root) throw Error("unexpected error");
            return this._root.i(t, e, r)
        }
        return this._warnDefault(e, t, i, o, [r])
    }, X.prototype.i = function(t, e, n) {
        return t ? ("string" != typeof e && (e = this.locale), this._i(t, e, this._getMessages(), null, n)) : ""
    }, X.prototype._tc = function(t, e, n, o, r) {
        for (var i, a = [], s = arguments.length - 5; s-- > 0;) a[s] = arguments[s + 5];
        return t ? (void 0 === r && (r = 1), d((i = this)._t.apply(i, [t, e, n, o].concat(a)), r)) : ""
    }, X.prototype.tc = function(t, e) {
        for (var n, o = [], r = arguments.length - 2; r-- > 0;) o[r] = arguments[r + 2];
        return (n = this)._tc.apply(n, [t, this.locale, this._getMessages(), null, e].concat(o))
    }, X.prototype._te = function(t, e, n) {
        for (var o = [], r = arguments.length - 3; r-- > 0;) o[r] = arguments[r + 3];
        var i = u.apply(void 0, o).locale || e;
        return this._exist(n[i], t)
    }, X.prototype.te = function(t, e) {
        return this._te(t, this.locale, this._getMessages(), e)
    }, X.prototype.getLocaleMessage = function(t) {
        return p(this._vm.messages[t] || {})
    }, X.prototype.setLocaleMessage = function(t, e) {
        this._vm.messages[t] = e
    }, X.prototype.mergeLocaleMessage = function(t, e) {
        this._vm.$set(this._vm.messages, t, g.util.extend(this._vm.messages[t] || {}, e))
    }, X.prototype.getDateTimeFormat = function(t) {
        return p(this._vm.dateTimeFormats[t] || {})
    }, X.prototype.setDateTimeFormat = function(t, e) {
        this._vm.dateTimeFormats[t] = e
    }, X.prototype.mergeDateTimeFormat = function(t, e) {
        this._vm.$set(this._vm.dateTimeFormats, t, g.util.extend(this._vm.dateTimeFormats[t] || {}, e))
    }, X.prototype._localizeDateTime = function(t, e, n, o, r) {
        var i = e,
            a = o[i];
        if ((c(a) || c(a[r])) && (a = o[i = n]), c(a) || c(a[r])) return null;
        var s = a[r],
            l = i + "__" + r,
            u = this._dateTimeFormatters[l];
        return u || (u = this._dateTimeFormatters[l] = new Intl.DateTimeFormat(i, s)), u.format(t)
    }, X.prototype._d = function(t, e, n) {
        if (!n) return new Intl.DateTimeFormat(e).format(t);
        var o = this._localizeDateTime(t, e, this.fallbackLocale, this._getDateTimeFormats(), n);
        if (this._isFallbackRoot(o)) {
            if (!this._root) throw Error("unexpected error");
            return this._root.d(t, n, e)
        }
        return o || ""
    }, X.prototype.d = function(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
        var o = this.locale,
            r = null;
        return 1 === e.length ? "string" == typeof e[0] ? r = e[0] : i(e[0]) && (e[0].locale && (o = e[0].locale), e[0].key && (r = e[0].key)) : 2 === e.length && ("string" == typeof e[0] && (r = e[0]), "string" == typeof e[1] && (o = e[1])), this._d(t, o, r)
    }, X.prototype.getNumberFormat = function(t) {
        return p(this._vm.numberFormats[t] || {})
    }, X.prototype.setNumberFormat = function(t, e) {
        this._vm.numberFormats[t] = e
    }, X.prototype.mergeNumberFormat = function(t, e) {
        this._vm.$set(this._vm.numberFormats, t, g.util.extend(this._vm.numberFormats[t] || {}, e))
    }, X.prototype._localizeNumber = function(t, e, n, o, r, i) {
        var a = e,
            s = o[a];
        if ((c(s) || c(s[r])) && (s = o[a = n]), c(s) || c(s[r])) return null;
        var l, u = s[r];
        if (i) l = new Intl.NumberFormat(a, Object.assign({}, u, i));
        else {
            var d = a + "__" + r;
            (l = this._numberFormatters[d]) || (l = this._numberFormatters[d] = new Intl.NumberFormat(a, u))
        }
        return l.format(t)
    }, X.prototype._n = function(t, e, n, o) {
        if (!n) return (o ? new Intl.NumberFormat(e, o) : new Intl.NumberFormat(e)).format(t);
        var r = this._localizeNumber(t, e, this.fallbackLocale, this._getNumberFormats(), n, o);
        if (this._isFallbackRoot(r)) {
            if (!this._root) throw Error("unexpected error");
            return this._root.n(t, Object.assign({}, {
                key: n,
                locale: e
            }, o))
        }
        return r || ""
    }, X.prototype.n = function(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
        var o = this.locale,
            r = null,
            a = null;
        return 1 === e.length ? "string" == typeof e[0] ? r = e[0] : i(e[0]) && (e[0].locale && (o = e[0].locale), e[0].key && (r = e[0].key), a = Object.keys(e[0]).reduce(function(t, n) {
            var o;
            return H.includes(n) ? Object.assign({}, t, ((o = {})[n] = e[0][n], o)) : t
        }, null)) : 2 === e.length && ("string" == typeof e[0] && (r = e[0]), "string" == typeof e[1] && (o = e[1])), this._n(t, o, r, a)
    }, Object.defineProperties(X.prototype, q), X.availabilities = {
        dateTimeFormat: v,
        numberFormat: _
    }, X.install = S, X.version = "7.6.0";
    var Y = X,
        J = n(11),
        G = n(10);
    o.a.use(Y);
    const K = new Y({
        locale: "ru",
        fallbackLocale: "ru",
        messages: {
            en: G,
            ru: J
        }
    });
    Object.defineProperty(o.a.prototype, "$locale", {
        get: function() {
            return K.locale
        },
        set: function(t) {
            K.locale = t
        }
    });
    e.a = K
}, function(t, e, n) {
    "use strict";
    n(3);
    var o = function() {
        var t = this.$createElement,
            e = this._self._c || t;
        return e("div", {
            staticClass: "app-hr"
        }, [e("span", [this._t("default")], 2)])
    };
    o._withStripped = !0;
    var r = n(0),
        i = !1;
    var a = function(t) {
            i || n(13)
        },
        s = Object(r.a)(null, o, [], !1, a, null, null);
    s.options.__file = "frontend\\components\\UI\\hr.vue";
    const l = {
        hr: s.exports
    };
    e.a = l
}, function(t) {
    t.exports = {
        search: {
            search_in: "Search In:",
            result_in_links: "Search Result For Your Links",
            result_btn_1: "Open All In One Window",
            result_btn_2: "Open All In A New Window",
            result_btn_3: "Open All In Incognito Mode"
        },
        context_menu: {
            new_tab: "Open In A New Window",
            secret_tab: "Open In A Incognito Mode",
            edit_link: "Edit A Link",
            remove_link: "Delete A Link"
        },
        sidebar: {
            title: {
                main: "Menu",
                bg: "Background Change",
                boards: "Collection Settings",
                settings: "App Settings",
                sync: "Synchronization"
            },
            main: {
                openTabs: "Open Pages",
                saveTabs: "Save",
                saveTabsAndClose: "Save And Close",
                btnSetting: "App Settings",
                btnBg: "Background Change",
                btnBoard: "Collection Settings",
                btnSync: "Synchronization"
            },
            page_bg: {
                colors: "Colours:",
                photo_url: "Link To The Image"
            },
            page_boards: {
                create_new_board: "Create a new collection",
                password_protect: "Password Protect",
                password_placeholder: "Password",
                password_help: "Write the password on the physical medium, because in case you forget it, it will be impossible to restore the content!",
                btnAddBoard: "Add A Collection",
                collection_management: "Collection Control",
                help_collection_management: "Move, rename, delete.<br> <b>Changes are saved automatically!</b>"
            },
            page_options: {
                search_label: "Search Engine",
                lang_label: "Change A Language",
                help_local: "Want to help translate this project?",
                title_workspace: "Workspace Settings",
                label_columns: "Number Of Buttons",
                label_workspace_type: "Workspace",
                stretchable: "Stretchable",
                fixed: "Fixed",
                label_width_str: "Workspace Width (px)",
                label_width_fix: "Minimal Workspace Width (px)"
            },
            page_sync: {
                alert_login: "All changes are automatically saved in the cloud and synced across your devices",
                btn_check_update: "Check Updates",
                btn_logout: "Log Out",
                label_email: "Email",
                label_password: "Password",
                btn_login: "Log In",
                btn_create_account: "Registration",
                errors: {
                    not_data: "Fill in all form fields",
                    validation_error: "Check the correctness of the entered Email",
                    create_error: "User with this Email already registered",
                    user_not_found: "User not found",
                    bad_credentials: "Email or password are not correct"
                },
                alert_file: "Save all your links and settings to a file. From which, if necessary, you can restore them or move them to another computer",
                btn_export: "Save to file",
                btn_import: "Restore From File"
            }
        },
        list_menu: {
            open_all: "Open All",
            open_all_external: "Open All In A New Window",
            open_all_secret: "Open All In Incognito Mode",
            rename: "Rename",
            copy_list: "Copy List",
            swap_list: "Move",
            add_link: "Add Link In A List",
            remove_list: "Delete A List"
        },
        forms: {
            add_link: {
                title_1: "Select the check box of the links <br>that you want to save",
                subtitle_1: "You can also change the names of the bookmarks right here",
                select_all: "Select All",
                invert_select: "Invert",
                save_selected: "Save Selected",
                label_url: "Add A Link To This Page",
                label_title: "Bookmark Name",
                btn_next_step: "Continue",
                btn_save_link: "Save A Link",
                btn_current_windows: "Choose From Open"
            },
            edit_link: {
                label_url: "Link",
                label_title: "Bookmark Name"
            },
            add_list: {
                title: "Creating A New List",
                subtitle: 'Enter a list name and click "create" button',
                label_list_name: "List Name",
                btn_add_list: "Create A List"
            },
            copy_list: {
                title: "Copy the list along with the links",
                subtitle: "Enter a new name for the list and select the collection in which you want to copy it",
                label_title: "List Name",
                label_board: "Collection"
            },
            swap_list: {
                title: "Select a collection in which you want to move a list"
            }
        },
        board_have_not_lists: {
            p: "This collection have not lists!",
            btn: "Create List"
        },
        secret_board: {
            title: "Collection Is Password Protected",
            placeholder: "Enter A Passowrd",
            btn_unlock: "Unlock"
        },
        popup: {
            block1_title: "Save This Tab",
            block1_btn: "Save",
            block2_title: "Save session",
            block2_page_count: "Open Tabs",
            block2_btn1: "Save",
            block2_btn2: "Save And Close",
            block3_placeholder1: "Search List",
            block3_placeholder2: "Search Collection",
            block3_save_btn: "Save"
        },
        other: {
            OR: "Or",
            save: "Save",
            cancel: "Cancel",
            loading: "Loading..",
            success: "Success"
        },
        for_js: {
            to_delete_message: "Please, confirm the deletion!\nBe careful - the action can not be cancelled!",
            need_minimum_one_board: "To work with the extension, you must add at least 1 collection!"
        }
    }
}, function(t) {
    t.exports = {
        search: {
            search_in: "Искать на:",
            result_in_links: "Результаты поиска по ссылкам:",
            result_btn_1: "Открыть все в этом окне",
            result_btn_2: "Открыть все в новом окне",
            result_btn_3: "Открыть все в режиме инкогнито"
        },
        context_menu: {
            new_tab: "Открыть в новом окне",
            secret_tab: "Открыть в режиме инкогнито",
            edit_link: "Редактировать ссылку",
            remove_link: "Удалить ссылку"
        },
        list_menu: {
            open_all: "Открыть все",
            open_all_external: "Открыть все в новом окне",
            open_all_secret: "Открыть все режиме инкогнито",
            rename: "Переименовать",
            copy_list: "Копировать список",
            swap_list: "Переместить",
            add_link: "Добавить ссылку в список",
            remove_list: "Удалить список"
        },
        sidebar: {
            title: {
                main: "Меню",
                bg: "Смена фона",
                boards: "Управление коллекциями",
                settings: "Настройки приложения",
                sync: "Синхронизация",
                bg1: "Цвета",
                bg2: "Каталог Фотографий",
                bg3: "Картинка по ссылке",
                editThisBoard: "Редактировать коллекцию"
            },
            main: {
                openTabs: "Открытые страницы",
                saveTabs: "Сохранить",
                saveTabsAndClose: "Сохранить и закрыть",
                btnSetting: "Настройки приложения",
                btnThisBoard: "Редактировать коллекцию",
                btnBg: "Смена фона",
                btnBoard: "Управление коллекциями",
                btnSync: "Синхронизация"
            },
            page_bg: {
                colors: "Цвета:",
                photo_url: "Ссылка на картинку:"
            },
            page_boards: {
                create_new_board: "Создать новую коллекцию",
                create_new_board_placeholder: "Название коллекции",
                password_protect: "Защищать паролем",
                password_placeholder: "Пароль",
                password_help: "Запишите пароль на физическом носитителе, т.к. в случае если вы его забудете, востановить содержимое коллекции будет невозможно!",
                btnAddBoard: "Добавить коллекцию",
                collection_management: "Управление коллекциями",
                help_collection_management: "Перетаскивайте, переименовывайте, удаляйте.<br><b>Изменения сохраняются автоматически!</b>"
            },
            page_options: {
                search_label: "Поисковая система:",
                lang_label: "Изменить язык:",
                help_local: "Хотите помочь перевести этот проект?",
                title_workspace: "Настройки рабочего пространства",
                label_columns: "Кол-во колонок",
                label_workspace_type: "Рабочая область",
                stretchable: "Растягиваемая",
                fixed: "Фиксированная",
                label_width_str: "Ширина рабочей области (px)",
                label_width_fix: "Минимальная ширина рабочей области (px)"
            },
            page_sync: {
                alert_login: "Все изменения автоматически сохраняются в облаке и синхронизируются между вашими устройствами",
                btn_check_update: "Проверить обновления",
                btn_logout: "Выйти",
                label_email: "Email",
                label_password: "Пароль",
                btn_login: "Авторизация",
                btn_create_account: "Регистрация",
                errors: {
                    not_data: "Заполните все поля формы",
                    validation_error: "Проверьте коректность введенного Email",
                    create_error: "Пользователь с таким Email уже зарегистрирован",
                    user_not_found: "Пользователь не найден",
                    bad_credentials: "Email или пароль введены не правильно"
                },
                alert_file: "Сохраните все свои ссылки и настройки в файл. Из которого при необходимости вы сможете их восстановить или перенести на другой компьютер",
                btn_export: "Сохранить в файл",
                btn_import: "Восстановить из файла",
                time_after_update: "прошло с последнего обновления",
                auth_title: "Облачная синхронизация",
                forgot_password: "Забыли пароль?",
                help_1: "При <b>авторизации</b> через уже существующий аккаунт - все текущие данные приложения будут <b>заменены данными из облака</b>",
                help_2: "При <b>регистрации</b> нового аккаунта, все текущие данные из приложения будут <b>перенесены в облако</b>"
            },
            bg2: {
                placeholder: "Поиск фотографий",
                images_sourse: "Источник фотографий",
                btn_load_more: "Загрузить еще"
            },
            edit_the_boards: {
                board_name_label: "Название коллекции",
                favicon_sourse_label: "Источник Favicon:",
                favicon_sourse_value_1: "Локальный",
                favicon_sourse_value_2: "Интернет",
                change_password_title: "Изменить пароль",
                change_password_label: "Введите новый пароль:",
                change_password_btn: "Изменить пароль"
            }
        },
        forms: {
            add_link: {
                title_1: "Отметьте галочкой ссылки <br>которые хотите сохратить",
                subtitle_1: "Еще вы можете прямо здесь изменить названия закладок",
                select_all: "выбрать все",
                invert_select: "инвертировать",
                save_selected: "Сохранить выбранные",
                label_url: "Введите ссылку на страницу",
                label_title: "Название закладки",
                btn_next_step: "Продолжить",
                btn_save_link: "Сохранить ссылку",
                btn_current_windows: "Выбрать из открытых"
            },
            edit_link: {
                label_url: "Ссылка",
                label_title: "Название закладки"
            },
            add_list: {
                title: "Создание нового списка",
                subtitle: 'Введите название списка и нажмите кнопу "создать"',
                label_list_name: "Название списка",
                btn_add_list: "Создать список"
            },
            copy_list: {
                title: "Копирование списка вместе с ссылками",
                subtitle: "Укажите новое название списка и выберите коллекцию в которую хотите скопировать его",
                label_title: "Название списка",
                label_board: "Коллекция"
            },
            swap_list: {
                title: "Выберите коллекцию в которую хотите переместить список"
            },
            bg_image_from_link: {
                label: "Ссылка на изображение"
            }
        },
        board_have_not_lists: {
            p: "В этой коллекции еще нет списков!",
            btn: "Создать список"
        },
        secret_board: {
            title: "Коллекция защищена паролем",
            placeholder: "Введите пароль",
            btn_unlock: "Разблокировать"
        },
        popup: {
            block1_title: "Сохранить эту страницу",
            block1_btn: "Сохранить",
            block2_title: "Сохранение сессии",
            block2_page_count: "Открытые страницы",
            block2_btn1: "Сохранить",
            block2_btn2: "Сохранить и закрыть",
            block3_placeholder1: "Поиск списков",
            block3_placeholder2: "Поиск коллекций",
            block3_save_btn: "Сохранить"
        },
        other: {
            OR: "ИЛИ",
            save: "Сохранить",
            cancel: "Отмена",
            loading: "Загрузка..",
            success: "Готово"
        },
        for_js: {
            to_delete_message: "Пожалуйста, подтвердите удаление!\nБудьте осторожны - действие невозможно отменить!",
            need_minimum_one_board: "Для работы расширения необходимо оставить хотябы 1 коллекцию!"
        }
    }
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.app-hr {\n\tborder-top: 1px solid #e4e4e4;\n\tposition: relative;\n\ttext-align: center;\n\tmargin: 30px 0;\n\theight: 1px;\n}\n.app-hr span {\n\tposition: relative;\n\ttop: -10px;\n\tbackground: #ffffff;\n\tpadding: 0 10px;\n\tfont-weight: bold;\n}\n", ""])
}, function(t, e, n) {
    var o = n(12);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("92fdd780", o, !1, {})
}, function(t, e) {
    var n, o, r = t.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            n = i
        }
        try {
            o = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            o = a
        }
    }();
    var l, c = [],
        u = !1,
        d = -1;

    function p() {
        u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && f())
    }

    function f() {
        if (!u) {
            var t = s(p);
            u = !0;
            for (var e = c.length; e;) {
                for (l = c, c = []; ++d < e;) l && l[d].run();
                d = -1, e = c.length
            }
            l = null, u = !1,
                function(t) {
                    if (o === clearTimeout) return clearTimeout(t);
                    if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(t);
                    try {
                        o(t)
                    } catch (e) {
                        try {
                            return o.call(null, t)
                        } catch (e) {
                            return o.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function h(t, e) {
        this.fun = t, this.array = e
    }

    function m() {}
    r.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new h(t, e)), 1 !== c.length || u || s(f)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = m, r.addListener = m, r.once = m, r.off = m, r.removeListener = m, r.removeAllListeners = m, r.emit = m, r.prependListener = m, r.prependOnceListener = m, r.listeners = function(t) {
        return []
    }, r.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, r.cwd = function() {
        return "/"
    }, r.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, r.umask = function() {
        return 0
    }
}, function(t, e, n) {
    (function(t, e) {
        ! function(t, n) {
            "use strict";
            if (!t.setImmediate) {
                var o, r, i, a, s, l = 1,
                    c = {},
                    u = !1,
                    d = t.document,
                    p = Object.getPrototypeOf && Object.getPrototypeOf(t);
                p = p && p.setTimeout ? p : t, "[object process]" === {}.toString.call(t.process) ? o = function(t) {
                    e.nextTick(function() {
                        h(t)
                    })
                } : ! function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            n = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                    }
                }() ? t.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(t) {
                    h(t.data)
                }, o = function(t) {
                    i.port2.postMessage(t)
                }) : d && "onreadystatechange" in d.createElement("script") ? (r = d.documentElement, o = function(t) {
                    var e = d.createElement("script");
                    e.onreadystatechange = function() {
                        h(t), e.onreadystatechange = null, r.removeChild(e), e = null
                    }, r.appendChild(e)
                }) : o = function(t) {
                    setTimeout(h, 0, t)
                } : (a = "setImmediate$" + Math.random() + "$", s = function(e) {
                    e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && h(+e.data.slice(a.length))
                }, t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s), o = function(e) {
                    t.postMessage(a + e, "*")
                }), p.setImmediate = function(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                    var r = {
                        callback: t,
                        args: e
                    };
                    return c[l] = r, o(l), l++
                }, p.clearImmediate = f
            }

            function f(t) {
                delete c[t]
            }

            function h(t) {
                if (u) setTimeout(h, 0, t);
                else {
                    var e = c[t];
                    if (e) {
                        u = !0;
                        try {
                            ! function(t) {
                                var e = t.callback,
                                    o = t.args;
                                switch (o.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(o[0]);
                                        break;
                                    case 2:
                                        e(o[0], o[1]);
                                        break;
                                    case 3:
                                        e(o[0], o[1], o[2]);
                                        break;
                                    default:
                                        e.apply(n, o)
                                }
                            }(e)
                        } finally {
                            f(t), u = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(this, n(5), n(14))
}, function(t, e, n) {
    (function(t) {
        var o = Function.prototype.apply;

        function r(t, e) {
            this._id = t, this._clearFn = e
        }
        e.setTimeout = function() {
            return new r(o.call(setTimeout, window, arguments), clearTimeout)
        }, e.setInterval = function() {
            return new r(o.call(setInterval, window, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }, e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }, n(15), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(this, n(5))
}, , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(3),
        r = n(4);
    const i = t => {
        const e = new URL(chrome.runtime.getURL("/_favicon/"));
        return e.searchParams.set("pageUrl", t), e.searchParams.set("size", "32"), e.toString()
    };
    var a = {
            props: {
                childCount: Number
            },
            data: () => ({
                ctxTop: 0,
                ctxLeft: 0,
                rigthPos: !1,
                bottomPos: !1,
                windowWidth: 0,
                fixedTop: 0,
                fixedLeft: 0,
                show: !1
            }),
            methods: {
                setPositionFromEvent(t) {
                    var e = window.scrollY,
                        n = window.scrollX,
                        o = this.windowWidth = window.innerWidth,
                        r = this.windowHeight = window.innerHeight,
                        i = t.pageX || t.clientX,
                        a = t.pageY || t.clientY;
                    t.pageX || t.pageY ? (this.ctxLeft = t.pageX - n, this.ctxTop = t.pageY - e, this.fixedLeft = t.pageX, this.fixedTop = t.pageY) : (t.clientX || t.clientY) && (this.ctxLeft = t.clientX - n, this.ctxTop = t.clientY - e, this.fixedLeft = t.clientX, this.fixedTop = t.clientY), this.rigthPos = o <= i + 300, r + e <= a + (29 * this.childCount || 0) ? this.bottomPos = !0 : this.bottomPos = !1
                },
                resetPosition() {
                    var t = window.scrollY,
                        e = window.scrollX;
                    this.ctxLeft = this.fixedLeft - e, this.ctxTop = this.fixedTop - t
                },
                open(t) {
                    this.setPositionFromEvent(t), this.show = !0, this.checkClickEvents_start()
                },
                checkClickEvents_start() {
                    window.addEventListener("click", this.clickEventListener, !1), window.addEventListener("contextmenu", this.clickEventListener, !1), window.addEventListener("scroll", this.resetPosition, !1)
                },
                checkClickEvents_stop() {
                    window.removeEventListener("click", this.clickEventListener, !1), window.removeEventListener("contextmenu", this.clickEventListener, !1), window.removeEventListener("scroll", this.resetPosition, !1)
                },
                clickEventListener: function(t) {
                    this.show && this.$el.contains(t.target);
                    "contextmenu" == t.type ? 0 == this.$el.parentElement.contains(t.target) && (this.show = !1, this.$emit("ctx-close"), this.checkClickEvents_stop()) : (this.show = !1, this.$emit("ctx-close"), this.checkClickEvents_stop())
                }
            },
            computed: {
                style() {
                    var t = {
                        top: (this.ctxTop || 0) + "px"
                    };
                    return 1 == this.rigthPos ? t.right = this.windowWidth - this.ctxLeft + "px" : t.left = (this.ctxLeft || 0) + "px", 1 == this.bottomPos && (t.top = (this.ctxTop || 0) - (29 * this.childCount || 0) + "px"), t
                }
            }
        },
        s = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return this.show ? e("ul", {
                style: this.style,
                attrs: {
                    id: "context-menu"
                }
            }, [this._t("default")], 2) : this._e()
        };
    s._withStripped = !0;
    var l = n(0),
        c = !1;
    var u = function(t) {
            c || n(54)
        },
        d = Object(l.a)(a, s, [], !1, u, null, null);
    d.options.__file = "frontend\\components\\Context.vue";
    var p = d.exports,
        f = {
            components: {
                "context-menu": p
            },
            computed: {
                boards() {
                    return this.$store.state.boards
                },
                actualBoard() {
                    return this.$store.getters.actualBoard
                },
                searchSite() {
                    return this.$store.state.options.search
                }
            },
            data: () => ({
                active: !1,
                searchStr: "",
                searchTips: [],
                tipsSelect: null,
                links_result: [],
                searchHelp: !1
            }),
            watch: {
                searchStr() {
                    if (this.searchStr.length < 2) return [];
                    var t = this,
                        e = [];
                    this.boards.forEach(function(n) {
                        if ("secret" === n.type) return !0;
                        n.lists.forEach(function(n) {
                            n.links.forEach(function(n) {
                                var o = t.searchStr.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),
                                    r = new RegExp(o, "i"); - 1 == n.title.search(r) && -1 == n.url.search(r) || e.push({
                                    title: n.title,
                                    url: n.url,
                                    url_text: n.url
                                })
                            })
                        })
                    }), this.links_result = e
                }
            },
            methods: {
                getFaviconUrl: i,
                _blur() {
                    this.searchStr.length < 2 && this.closeSearch()
                },
                openSearch() {
                    this.active = !0, this.$nextTick(function() {
                        document.getElementById("search-input").focus()
                    })
                },
                closeSearch() {
                    this.active = !1, this.searchStr = "", this.searchHelp = !1, document.getElementById("search-input").blur()
                },
                search(t) {
                    t = t ? t.replace(/<\/?[^>]+(>|$)/g, "") : this.searchStr, window.location = Object(r.a)(t, this.searchSite)
                },
                searchBtn(t) {
                    window.location = Object(r.a)(this.searchStr, t)
                },
                getTips() {
                    if (this.tipsSelect = null, this.searchStr.length < 2) return !1;
                    var t = this,
                        e = `https://www.google.com/complete/search?client=psy-ab&hl=ru-BY&gs_rn=64&gs_ri=psy-ab&cp=5&gs_id=1d&q=${encodeURIComponent(this.searchStr)}&xhr=t`;
                    this.$http.get(e).then(e => {
                        if (200 == e.status && e.body) {
                            var n = e.body[1];
                            n.forEach(function(t) {
                                t[0] = t[0].replace(/&amp;/g, "&"), t[0] = t[0].replace(/&#39;/g, "'")
                            }), t.searchTips = n
                        }
                    }, t => {
                        console.error(t)
                    })
                },
                tipsMove(t) {
                    null == this.tipsSelect && (this.tipsSelect = -1), this.tipsSelect += t, this.tipsSelect < 0 && (this.tipsSelect = this.searchTips.length - 1), this.tipsSelect > this.searchTips.length - 1 && (this.tipsSelect = 0);
                    var e = this.searchTips[this.tipsSelect][0].replace(/<\/?[^>]+(>|$)/g, "");
                    this.searchStr = e
                }
            }
        },
        h = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "app-search",
                class: {
                    active: t.active
                }
            }, [n("div", {
                staticClass: "app-search-input"
            }, [t.active ? t._e() : n("button", {
                staticClass: "btn btn-default",
                on: {
                    click: function(e) {
                        t.openSearch()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-search"
            })]), t._v(" "), t.active ? n("input", {
                staticClass: "form-control",
                attrs: {
                    id: "search-input",
                    type: "text"
                },
                domProps: {
                    value: t.searchStr
                },
                on: {
                    focus: function(e) {
                        t.active = !0
                    },
                    blur: function(e) {
                        t._blur()
                    },
                    keyup: [function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "esc", 27, e.key, "Escape")) return null;
                        t.closeSearch()
                    }, function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.search()
                    }, function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"])) return null;
                        t.tipsMove(-1)
                    }, function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"])) return null;
                        t.tipsMove(1)
                    }],
                    input: function(e) {
                        t.searchStr = e.target.value, t.getTips()
                    }
                }
            }) : t._e(), t._v(" "), t.active ? n("div", {
                staticClass: "app-search-input-btns"
            }, [n("span", {
                on: {
                    click: function(e) {
                        t.closeSearch()
                    }
                }
            }, [n("i", {
                staticClass: "far fa-times-circle"
            })])]) : t._e()]), t._v(" "), t.active && t.searchStr.length >= 2 ? n("div", {
                staticClass: "app-search-body",
                class: {
                    "w-100": 0 == t.links_result.length
                }
            }, [n("div", {
                staticClass: "row row-5"
            }, [n("div", {
                staticClass: "search-tips",
                class: {
                    "col-xs-4": t.links_result.length > 0, "col-xs-12": 0 == t.links_result.length
                }
            }, [t._l(t.searchTips, function(e, o) {
                return n("div", {
                    key: o,
                    staticClass: "search-tip",
                    class: {
                        active: t.tipsSelect == o
                    },
                    domProps: {
                        innerHTML: t._s(e[0])
                    },
                    on: {
                        click: function(n) {
                            t.search(e[0])
                        }
                    }
                })
            }), t._v(" "), n("div", {
                staticClass: "search-help-btns"
            }, [t.searchHelp ? t._e() : n("div", {
                staticClass: "search-help-btns-placeholder",
                on: {
                    mouseover: function(e) {
                        t.searchHelp = !0
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-ellipsis-h"
            })]), t._v(" "), t.searchHelp ? n("div", {
                staticClass: "search-help-block row row-3"
            }, [n("div", {
                staticClass: "col-xs-12"
            }, [n("p", [t._v(t._s(t.$t("search.search_in")))])]), t._v(" "), n("div", {
                staticClass: "col-xs-3"
            }, [n("div", {
                staticClass: "sh-btn",
                on: {
                    click: function(e) {
                        t.searchBtn("google")
                    }
                }
            }, [n("i", {
                staticClass: "fab fa-google"
            }), n("br"), t._v("\n\t\t\t\t\t\t\t\tGoogle\n\t\t\t\t\t\t\t")])]), t._v(" "), n("div", {
                staticClass: "col-xs-3"
            }, [n("div", {
                staticClass: "sh-btn",
                on: {
                    click: function(e) {
                        t.searchBtn("yahoo")
                    }
                }
            }, [n("i", {
                staticClass: "fab fa-yahoo"
            }), n("br"), t._v("\n\t\t\t\t\t\t\t\tYahoo\n\t\t\t\t\t\t\t")])]), t._v(" "), n("div", {
                staticClass: "col-xs-3"
            }, [n("div", {
                staticClass: "sh-btn",
                on: {
                    click: function(e) {
                        t.searchBtn("youtube")
                    }
                }
            }, [n("i", {
                staticClass: "fab fa-youtube"
            }), n("br"), t._v("\n\t\t\t\t\t\t\t\tYouTube\n\t\t\t\t\t\t\t")])]), t._v(" "), n("div", {
                staticClass: "col-xs-3",
                on: {
                    click: function(e) {
                        t.searchBtn("wikipedia")
                    }
                }
            }, [t._m(0)])]) : t._e()])], 2), t._v(" "), t.links_result.length > 0 ? n("div", {
                staticClass: "col-xs-8"
            }, [n("div", {
                staticClass: "search-in-links clearfix"
            }, [n("h5", {
                staticClass: "fl-l"
            }, [t._v(t._s(t.$t("search.result_in_links")) + " (" + t._s(t.links_result.length) + ")")]), t._v(" "), n("div", {
                staticClass: "btn-group fl-r"
            }, [n("button", {
                staticClass: "btn btn-xs btn-default",
                attrs: {
                    title: t.$t("search.result_btn_1")
                },
                on: {
                    click: function(e) {
                        t.$store.dispatch("openLinksArr", {
                            arr: t.links_result
                        })
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-expand-arrows-alt"
            })]), t._v(" "), n("button", {
                staticClass: "btn btn-xs btn-default",
                attrs: {
                    title: t.$t("search.result_btn_2")
                },
                on: {
                    click: function(e) {
                        t.$store.dispatch("openLinksArr", {
                            arr: t.links_result,
                            to: "external"
                        })
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-external-link-square-alt"
            })]), t._v(" "), n("button", {
                staticClass: "btn btn-xs btn-default",
                attrs: {
                    title: t.$t("search.result_btn_3")
                },
                on: {
                    click: function(e) {
                        t.$store.dispatch("openLinksArr", {
                            arr: t.links_result,
                            to: "secret"
                        })
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-user-secret"
            })])])]), t._v(" "), n("div", {
                staticClass: "row row-5"
            }, t._l(t.links_result, function(e, o) {
                return n("div", {
                    key: o,
                    staticClass: "col-xs-4"
                }, [n("div", {
                    staticClass: "link-s",
                    attrs: {
                        title: e.title
                    },
                    on: {
                        click: function(n) {
                            t.$store.dispatch("openLink", {
                                linkObg: e,
                                e: n
                            })
                        },
                        contextmenu: function(n) {
                            n.preventDefault(), t.$refs.ctxMenu.obj = e, t.$refs.ctxMenu.open(n)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: t.getFaviconUrl(e.url)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "link-s-title",
                    domProps: {
                        innerHTML: t._s(e.title)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "link-s-url",
                    domProps: {
                        innerHTML: t._s(e.url_text)
                    }
                })])])
            }))]) : t._e(), t._v(" "), n("context-menu", {
                ref: "ctxMenu",
                attrs: {
                    "child-count": "2"
                }
            }, [n("li", {
                on: {
                    click: function(e) {
                        t.$store.dispatch("openLink", {
                            linkObg: t.$refs.ctxMenu.obj,
                            to: "external"
                        })
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-external-link-alt"
            }), t._v(" " + t._s(t.$t("context_menu.new_tab")))]), t._v(" "), n("li", {
                on: {
                    click: function(e) {
                        t.$store.dispatch("openLink", {
                            linkObg: t.$refs.ctxMenu.obj,
                            to: "secret"
                        })
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-user-secret"
            }), t._v(" " + t._s(t.$t("context_menu.secret_tab")))])])], 1)]) : t._e()])
        };
    h._withStripped = !0;
    var m = !1;
    var v = function(t) {
            m || n(56)
        },
        _ = Object(l.a)(f, h, [function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "sh-btn"
            }, [e("i", {
                staticClass: "fab fa-wikipedia-w"
            }), e("br"), this._v("\n\t\t\t\t\t\t\t\tWikiPedia\n\t\t\t\t\t\t\t")])
        }], !1, v, null, null);
    _.options.__file = "frontend\\components\\Search.vue";
    var g = _.exports,
        b = {
            data: () => ({
                showPassword: !1,
                newPassword: ""
            }),
            computed: {
                actualBoard() {
                    return this.$store.getters.actualBoard
                },
                actualBoardNum() {
                    return this.$store.state.openBoard
                },
                favicon_sourse: {
                    get() {
                        return this.$store.getters.actualBoard.favicon_sourse
                    },
                    set(t) {
                        this.$store.commit("faviconCachingClear"), this.$store.commit("setFaviconSourse", t)
                    }
                },
                the_board_name: {
                    get() {
                        return this.actualBoard.name
                    },
                    set(t) {
                        var e = this.actualBoardNum;
                        this.$store.commit("renameBoard", {
                            name: t,
                            i: e
                        })
                    }
                }
            },
            methods: {
                setNewPassword() {
                    "secret" == this.actualBoard.type && this.$store.dispatch("editBoardPassword", {
                        new_password: this.newPassword,
                        board_i: this.actualBoardNum
                    })
                }
            }
        },
        y = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "app-menu-page"
            }, [n("a", {
                staticClass: "app-menu-btn",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), t.$parent.goTo("bg")
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-image"
            }), t._v(" " + t._s(t.$t("sidebar.main.btnBg")) + "\n\t")]), t._v(" "), n("hr"), t._v(" "), n("label", [t._v(t._s(t.$t("sidebar.edit_the_boards.board_name_label")))]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.the_board_name,
                    expression: "the_board_name"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.the_board_name
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.the_board_name = e.target.value)
                    }
                }
            })]), t._v(" "), n("b", [t._v(t._s(t.$t("sidebar.edit_the_boards.favicon_sourse_label")))]), t._v(" "), n("div", {
                staticClass: "btn-group",
                staticStyle: {
                    width: "100%",
                    "margin-top": "5px"
                }
            }, [n("button", {
                staticClass: "btn btn-default",
                class: {
                    "btn-primary": "internet" != t.favicon_sourse
                },
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(e) {
                        t.favicon_sourse = "local"
                    }
                }
            }, [t._v(t._s(t.$t("sidebar.edit_the_boards.favicon_sourse_value_1")))]), t._v(" "), n("button", {
                staticClass: "btn btn-default",
                class: {
                    "btn-primary": "internet" == t.favicon_sourse
                },
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(e) {
                        t.favicon_sourse = "internet"
                    }
                }
            }, [t._v(t._s(t.$t("sidebar.edit_the_boards.favicon_sourse_value_2")))])]), t._v(" "), n("hr"), t._v(" "), "secret" == t.actualBoard.type ? n("div", {
                staticClass: "panel panel-info"
            }, [n("div", {
                staticClass: "panel-heading"
            }, [n("h3", {
                staticClass: "panel-title  text-center"
            }, [t._v("\n\t\t\t\t" + t._s(t.$t("sidebar.edit_the_boards.change_password_title")) + "\n\t\t\t")])]), t._v(" "), n("div", {
                staticClass: "panel-body"
            }, [n("label", [t._v(t._s(t.$t("sidebar.edit_the_boards.change_password_label")))]), t._v(" "), n("div", {
                staticClass: "password-input"
            }, [n("span", {
                on: {
                    click: function(e) {
                        t.showPassword = !t.showPassword
                    }
                }
            }, [n("i", {
                staticClass: "fa",
                class: t.showPassword ? "fa-eye-slash" : "fa-eye"
            })]), t._v(" "), "checkbox" == (t.showPassword ? "text" : "password") ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.newPassword,
                    expression: "newPassword"
                }],
                staticClass: "form-control mb-10",
                attrs: {
                    autocomplete: "off",
                    placeholder: t.$t("sidebar.page_boards.password_placeholder"),
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.newPassword) ? t._i(t.newPassword, null) > -1 : t.newPassword
                },
                on: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.setNewPassword()
                    },
                    change: function(e) {
                        var n = t.newPassword,
                            o = e.target,
                            r = !!o.checked;
                        if (Array.isArray(n)) {
                            var i = t._i(n, null);
                            o.checked ? i < 0 && (t.newPassword = n.concat([null])) : i > -1 && (t.newPassword = n.slice(0, i).concat(n.slice(i + 1)))
                        } else t.newPassword = r
                    }
                }
            }) : "radio" == (t.showPassword ? "text" : "password") ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.newPassword,
                    expression: "newPassword"
                }],
                staticClass: "form-control mb-10",
                attrs: {
                    autocomplete: "off",
                    placeholder: t.$t("sidebar.page_boards.password_placeholder"),
                    type: "radio"
                },
                domProps: {
                    checked: t._q(t.newPassword, null)
                },
                on: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.setNewPassword()
                    },
                    change: function(e) {
                        t.newPassword = null
                    }
                }
            }) : n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.newPassword,
                    expression: "newPassword"
                }],
                staticClass: "form-control mb-10",
                attrs: {
                    autocomplete: "off",
                    placeholder: t.$t("sidebar.page_boards.password_placeholder"),
                    type: t.showPassword ? "text" : "password"
                },
                domProps: {
                    value: t.newPassword
                },
                on: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.setNewPassword()
                    },
                    input: function(e) {
                        e.target.composing || (t.newPassword = e.target.value)
                    }
                }
            }), t._v(" "), n("p", {
                staticClass: "menu-help-text"
            }, [t._v("\n\t\t\t\t\t" + t._s(t.$t("sidebar.page_boards.password_help")) + "\n\t\t\t\t")])]), t._v(" "), n("button", {
                staticClass: "btn btn-primary",
                on: {
                    click: function(e) {
                        t.setNewPassword()
                    }
                }
            }, [t._v(t._s(t.$t("sidebar.edit_the_boards.change_password_btn")))])])]) : t._e()])
        };
    y._withStripped = !0;
    var w = !1;
    var k = function(t) {
            w || n(50)
        },
        x = Object(l.a)(b, y, [], !1, k, null, null);
    x.options.__file = "frontend\\components\\menu-pages\\edit-the-boards.vue";
    var C = x.exports,
        $ = {
            props: ["lists"],
            data: () => ({
                showModal: !1,
                showModal_2: !1
            }),
            watch: {
                "$store.state.openBoard": {
                    handler() {
                        this.showModal && this.close()
                    }
                }
            },
            created() {},
            methods: {
                open() {
                    this.showModal = !0;
                    var t = this;
                    this.$watch(function() {
                        setTimeout(() => {
                            t.showModal_2 = !0
                        }, 10)
                    })
                },
                close() {
                    this.showModal = !1, this.showModal_2 = !1, this.$emit("close")
                }
            }
        },
        S = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return t.showModal ? n("div", {
                attrs: {
                    id: "app-modal"
                }
            }, [n("div", {
                staticClass: "modal-wrap"
            }, [n("div", {
                staticClass: "modal-bg",
                on: {
                    click: function(e) {
                        t.close()
                    }
                }
            }), t._v(" "), n("transition", {
                attrs: {
                    name: "bounce"
                }
            }, [1 == t.showModal_2 ? n("div", {
                staticClass: "app-modal"
            }, [n("span", {
                staticClass: "app-modal-close",
                on: {
                    click: function(e) {
                        t.close()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-times"
            })]), t._v(" "), n("div", {
                staticClass: "app-modal-body"
            }, [t._t("default")], 2)]) : t._e()])], 1)]) : t._e()
        };
    S._withStripped = !0;
    var T = !1;
    var E = function(t) {
            T || n(46)
        },
        O = Object(l.a)($, S, [], !1, E, null, null);
    O.options.__file = "frontend\\components\\Modal.vue";
    var A = O.exports,
        L = {
            components: {
                "app-modal": A
            },
            data: () => ({
                imageUrl: null
            }),
            computed: {
                actualBoard() {
                    return this.$store.getters.actualBoard
                }
            },
            methods: {
                setBackground() {
                    this.$store.dispatch("set_image_bg", null), this.$store.commit("setColorBg", null), this.$store.dispatch("set_image_bg", this.imageUrl), this.$refs.modalEditLink.close()
                }
            }
        },
        B = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "app-menu-page"
            }, [n("div", {
                staticClass: "bg-change-btn",
                staticStyle: {
                    "background-image": "url('/imgs/change_bg_btn_1.jpg')"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), t.$parent.goTo("bg-1")
                    }
                }
            }, [n("div", {
                staticClass: "bg-change-btn-text"
            }, [t._v(t._s(t.$t("sidebar.title.bg1")))])]), t._v(" "), n("div", {
                staticClass: "bg-change-btn",
                staticStyle: {
                    "background-image": "url('/imgs/change_bg_btn_2.jpg')"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), t.$parent.goTo("bg-2")
                    }
                }
            }, [n("div", {
                staticClass: "bg-change-btn-text"
            }, [t._v(t._s(t.$t("sidebar.title.bg2")))])]), t._v(" "), n("div", {
                staticClass: "bg-change-btn",
                staticStyle: {
                    "background-image": "url('/imgs/change_bg_btn_3.jpg')"
                },
                on: {
                    click: function(e) {
                        t.$refs.modalEditLink.open()
                    }
                }
            }, [n("div", {
                staticClass: "bg-change-btn-text"
            }, [t._v(t._s(t.$t("sidebar.title.bg3")))])]), t._v(" "), n("app-modal", {
                ref: "modalEditLink"
            }, [n("div", {
                staticClass: "form-group"
            }, [n("label", {
                attrs: {
                    for: ""
                }
            }, [t._v(t._s(t.$t("forms.bg_image_from_link.label")))]), t._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.imageUrl,
                    expression: "imageUrl"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    placeholder: "https://site.com/image.jpg"
                },
                domProps: {
                    value: t.imageUrl
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.imageUrl = e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("button", {
                staticClass: "btn btn-success",
                on: {
                    click: function(e) {
                        t.setBackground()
                    }
                }
            }, [t._v("\n\t\t\t\t" + t._s(t.$t("other.save")) + "\n\t\t\t")])])])], 1)
        };
    B._withStripped = !0;
    var P = !1;
    var j = function(t) {
            P || n(48)
        },
        N = Object(l.a)(L, B, [], !1, j, null, null);
    N.options.__file = "frontend\\components\\menu-pages\\menu-bg.vue";
    var D = N.exports,
        I = {
            data: () => ({
                colors: ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d", "#f1f1f1", "#ccc", "#999", "#333", "#111"]
            }),
            computed: {
                actualBoard() {
                    return this.$store.getters.actualBoard
                },
                bgColor: {
                    get() {
                        return this.$store.getters.actualBoard.bgColor
                    },
                    set(t) {
                        this.$store.commit("setColorBg", t), this.$store.dispatch("set_image_bg", null)
                    }
                }
            }
        },
        M = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "app-menu-page"
            }, [n("div", {
                staticClass: "row row-3"
            }, t._l(t.colors, function(e, o) {
                return n("div", {
                    key: o,
                    staticClass: "_col"
                }, [n("div", {
                    staticClass: "color-btn",
                    class: {
                        active: t.bgColor == e
                    },
                    style: {
                        "background-color": e
                    },
                    on: {
                        click: function(n) {
                            t.bgColor = e
                        }
                    }
                }, [t.bgColor == e ? n("i", {
                    staticClass: "fa fa-check"
                }) : t._e()])])
            }))])
        };
    M._withStripped = !0;
    var F = !1;
    var U = function(t) {
            F || n(44)
        },
        R = Object(l.a)(I, M, [], !1, U, null, null);
    R.options.__file = "frontend\\components\\menu-pages\\menu-bg-1.vue";
    var z = R.exports,
        V = {
            data: () => ({
                showLoading: !0,
                showLoadMore: !1,
                pageNum: 1,
                lastAction: "base",
                searchInput: null,
                uns: null,
                images: []
            }),
            mounted() {
                this.uns = new unsplash.default({
                    applicationId: "dac936e11b96f91d79ff29bb1dd4ff3ab1f40edd9d933a6272a2145a10ebaec0"
                }), this.getImages("set")
            },
            computed: {
                actualBoard() {
                    return this.$store.getters.actualBoard
                }
            },
            methods: {
                setBackground(t) {
                    this.$store.dispatch("set_image_bg", null), this.$store.commit("setColorBg", t.color), this.$store.dispatch("set_image_bg", t.full_image)
                },
                getImages(t) {
                    console.log("unsplash -> getCollectionPhotos", `Page: ${this.pageNum}`);
                    this.lastAction = "base", this.showLoading = !0, this.showLoadMore = !1, this.uns.collections.getCollectionPhotos(317099, this.pageNum, 26, "latest").then(unsplash.toJson).then(e => {
                        var n = this.mapResult(e);
                        "set" == t ? this.images = n : "push" == t && this.images.push(...n), this.showLoading = !1, 26 == n.length && (this.showLoadMore = !0)
                    })
                },
                searchImages(t) {
                    console.log("unsplash -> searchPhotos", `Page: ${this.pageNum}`), this.lastAction = "search", this.showLoading = !0, this.showLoadMore = !1, this.uns.search.photos(this.searchInput, this.pageNum, 26).then(unsplash.toJson).then(e => {
                        var n = this.mapResult(e.results);
                        "set" == t ? this.images = n : "push" == t && this.images.push(...n), this.showLoading = !1, 26 == n.length && (this.showLoadMore = !0)
                    })
                },
                mapResult: t => t.map(t => ({
                    color: t.color,
                    thumb: t.urls.thumb,
                    full_image: t.urls.raw + "&w=1920&dpi=2",
                    author: {
                        name: t.user.name,
                        link: t.user.links.html
                    }
                })),
                startSearch() {
                    this.searchInput && (this.pageNum = 1, this.images = [], this.searchImages("set"))
                },
                loadMore() {
                    this.pageNum += 1, "base" == this.lastAction ? this.getImages("push") : "search" == this.lastAction && this.searchImages("push")
                }
            }
        },
        W = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "app-menu-page"
            }, [n("div", {
                staticClass: "form-group"
            }, [n("div", {
                staticClass: "input-group"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.searchInput,
                    expression: "searchInput"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    placeholder: t.$t("sidebar.bg2.placeholder")
                },
                domProps: {
                    value: t.searchInput
                },
                on: {
                    keydown: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.startSearch()
                    },
                    input: function(e) {
                        e.target.composing || (t.searchInput = e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "input-group-btn"
            }, [n("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.startSearch()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-search"
            })])])]), t._v(" "), n("small", {
                staticClass: "form-text text-muted",
                attrs: {
                    id: "helpId"
                }
            }, [t._v("\n\t\t\t" + t._s(t.$t("sidebar.bg2.images_sourse")) + " - "), n("a", {
                attrs: {
                    href: "https://unsplash.com/",
                    target: "_blank"
                }
            }, [t._v("Unsplash")])])]), t._v(" "), n("div", {
                staticClass: "row row-5"
            }, [t._l(t.images, function(e, o) {
                return n("div", {
                    key: o,
                    staticClass: "col-xs-6"
                }, [n("div", {
                    staticClass: "unsplash-thumb"
                }, [n("div", {
                    staticClass: "unsplash-thumb-bg",
                    style: {
                        "background-image": "url(" + e.thumb + ")"
                    },
                    on: {
                        click: function(n) {
                            t.setBackground(e)
                        }
                    }
                }), t._v(" "), n("a", {
                    attrs: {
                        href: e.author.link,
                        target: "_blank"
                    }
                }, [t._v(t._s(e.author.name))])])])
            }), t._v(" "), n("div", {
                staticClass: "clearfix"
            }), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 == t.showLoading,
                    expression: "showLoading == true"
                }],
                staticClass: "text-center loading-spinner"
            }, [n("i", {
                staticClass: "fa fa-spinner fa-2x fa-pulse"
            })]), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 == t.showLoadMore,
                    expression: "showLoadMore == true"
                }],
                staticClass: "col-xs-12"
            }, [n("button", {
                staticClass: "btn btn-default",
                staticStyle: {
                    width: "100%"
                },
                on: {
                    click: function(e) {
                        t.loadMore()
                    }
                }
            }, [t._v(t._s(t.$t("sidebar.bg2.btn_load_more")))])])], 2)])
        };
    W._withStripped = !0;
    var H = !1;
    var X = function(t) {
            H || n(42)
        },
        q = Object(l.a)(V, W, [], !1, X, null, null);
    q.options.__file = "frontend\\components\\menu-pages\\menu-bg-2.vue";
    var Y = q.exports,
        J = n(6),
        G = n.n(J),
        K = {
            computed: {
                boards: {
                    get() {
                        return this.$store.state.boards
                    },
                    set(t) {
                        this.$store.commit("moveBoards", t)
                    }
                }
            },
            components: {
                draggable: G.a
            },
            data: () => ({
                newBoardName: "",
                boardPassword: "",
                secretBoard: !1,
                showPassword: !1
            }),
            methods: {
                addBoard() {
                    return this.newBoardName.length < 1 ? alert("Введите название коллекции!") : this.secretBoard && this.boardPassword.length < 3 ? alert("Минимальная длина пароля 3 символа!") : (this.$store.commit("addBoard", {
                        name: this.newBoardName,
                        type: this.secretBoard ? "secret" : "normal",
                        password: this.boardPassword
                    }), this.newBoardName = "", this.secretBoard = !1, this.showPassword = !1, void(this.boardPassword = ""))
                },
                removeBoard(t) {
                    this.$store.dispatch("removeBoard", t)
                },
                renameBoard(t, e) {
                    this.$store.commit("renameBoard", {
                        name: t,
                        i: e
                    })
                }
            }
        },
        Z = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "app-menu-page"
            }, [n("h4", {
                staticClass: "menu-title"
            }, [t._v(t._s(t.$t("sidebar.page_boards.create_new_board")))]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.newBoardName,
                    expression: "newBoardName"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    placeholder: t.$t("sidebar.page_boards.create_new_board_placeholder")
                },
                domProps: {
                    value: t.newBoardName
                },
                on: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.addBoard()
                    },
                    input: function(e) {
                        e.target.composing || (t.newBoardName = e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("label", [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.secretBoard,
                    expression: "secretBoard"
                }],
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.secretBoard) ? t._i(t.secretBoard, null) > -1 : t.secretBoard
                },
                on: {
                    change: function(e) {
                        var n = t.secretBoard,
                            o = e.target,
                            r = !!o.checked;
                        if (Array.isArray(n)) {
                            var i = t._i(n, null);
                            o.checked ? i < 0 && (t.secretBoard = n.concat([null])) : i > -1 && (t.secretBoard = n.slice(0, i).concat(n.slice(i + 1)))
                        } else t.secretBoard = r
                    }
                }
            }), t._v(" " + t._s(t.$t("sidebar.page_boards.password_protect")) + "\n\t\t")]), t._v(" "), t.secretBoard ? n("div", {
                staticClass: "password-input"
            }, [n("span", {
                on: {
                    click: function(e) {
                        t.showPassword = !t.showPassword
                    }
                }
            }, [n("i", {
                staticClass: "fa",
                class: t.showPassword ? "fa-eye-slash" : "fa-eye"
            })]), t._v(" "), "checkbox" == (t.showPassword ? "text" : "password") ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.boardPassword,
                    expression: "boardPassword"
                }],
                staticClass: "form-control mb-10",
                attrs: {
                    autocomplete: "off",
                    placeholder: t.$t("sidebar.page_boards.password_placeholder"),
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.boardPassword) ? t._i(t.boardPassword, null) > -1 : t.boardPassword
                },
                on: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.addBoard()
                    },
                    change: function(e) {
                        var n = t.boardPassword,
                            o = e.target,
                            r = !!o.checked;
                        if (Array.isArray(n)) {
                            var i = t._i(n, null);
                            o.checked ? i < 0 && (t.boardPassword = n.concat([null])) : i > -1 && (t.boardPassword = n.slice(0, i).concat(n.slice(i + 1)))
                        } else t.boardPassword = r
                    }
                }
            }) : "radio" == (t.showPassword ? "text" : "password") ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.boardPassword,
                    expression: "boardPassword"
                }],
                staticClass: "form-control mb-10",
                attrs: {
                    autocomplete: "off",
                    placeholder: t.$t("sidebar.page_boards.password_placeholder"),
                    type: "radio"
                },
                domProps: {
                    checked: t._q(t.boardPassword, null)
                },
                on: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.addBoard()
                    },
                    change: function(e) {
                        t.boardPassword = null
                    }
                }
            }) : n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.boardPassword,
                    expression: "boardPassword"
                }],
                staticClass: "form-control mb-10",
                attrs: {
                    autocomplete: "off",
                    placeholder: t.$t("sidebar.page_boards.password_placeholder"),
                    type: t.showPassword ? "text" : "password"
                },
                domProps: {
                    value: t.boardPassword
                },
                on: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.addBoard()
                    },
                    input: function(e) {
                        e.target.composing || (t.boardPassword = e.target.value)
                    }
                }
            }), t._v(" "), n("p", {
                staticClass: "menu-help-text"
            }, [t._v("\n\t\t\t\t" + t._s(t.$t("sidebar.page_boards.password_help")) + "\n\t\t\t")])]) : t._e()]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("button", {
                staticClass: "btn btn-success",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.addBoard()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-plus"
            }), t._v(" " + t._s(t.$t("sidebar.page_boards.btnAddBoard")))])]), t._v(" "), n("hr"), t._v(" "), n("h4", {
                staticClass: "menu-title"
            }, [t._v(t._s(t.$t("sidebar.page_boards.collection_management")))]), t._v(" "), n("p", {
                staticClass: "menu-help-text",
                domProps: {
                    innerHTML: t._s(t.$t("sidebar.page_boards.help_collection_management"))
                }
            }), t._v(" "), n("draggable", {
                staticClass: "dropArea mb-15",
                attrs: {
                    options: {
                        group: "boards",
                        scroll: !0,
                        handle: ".handle"
                    }
                },
                on: {
                    start: function(e) {
                        t.drag = !0
                    },
                    end: function(e) {
                        t.drag = !1
                    }
                },
                model: {
                    value: t.boards,
                    callback: function(e) {
                        t.boards = e
                    },
                    expression: "boards"
                }
            }, t._l(t.boards, function(e, o) {
                return n("div", {
                    key: o,
                    staticClass: "clearfix collections-edit input-group input-group-sm mb-5"
                }, [n("span", {
                    staticClass: "input-group-addon handle"
                }, [n("i", {
                    staticClass: "fa fa-arrows-alt"
                })]), t._v(" "), n("input", {
                    staticClass: "form-control",
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: e.name
                    },
                    on: {
                        input: function(e) {
                            t.renameBoard(e.target.value, o)
                        }
                    }
                }), t._v(" "), t.boards.length > 1 ? n("span", {
                    staticClass: "input-group-btn"
                }, [n("button", {
                    staticClass: "btn btn-danger",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            t.removeBoard(o)
                        }
                    }
                }, [n("i", {
                    staticClass: "fa fa-trash"
                })])]) : t._e()])
            }))], 1)
        };
    Z._withStripped = !0;
    var Q = !1;
    var tt = function(t) {
            Q || n(40)
        },
        et = Object(l.a)(K, Z, [], !1, tt, null, null);
    et.options.__file = "frontend\\components\\menu-pages\\menu-boards.vue";
    var nt = et.exports,
        ot = {
            computed: {
                favicon_sourse: {
                    get() {
                        return this.$store.state.options.favicon_sourse
                    },
                    set(t) {
                        this.$store.commit("setOpt", {
                            type: "favicon_sourse",
                            value: t
                        })
                    }
                },
                search: {
                    get() {
                        return this.$store.state.options.search
                    },
                    set(t) {
                        this.$store.commit("setOpt", {
                            type: "search",
                            value: t
                        })
                    }
                },
                lang: {
                    get() {
                        return this.$store.state.options.lang
                    },
                    set(t) {
                        this.$locale = t, this.$store.commit("setOpt", {
                            type: "lang",
                            value: t
                        })
                    }
                },
                columns: {
                    get() {
                        return this.$store.state.options.columns
                    },
                    set(t) {
                        this.$store.commit("setOpt", {
                            type: "columns",
                            value: t
                        })
                    }
                },
                width_type: {
                    get() {
                        return this.$store.state.options.width_type
                    },
                    set(t) {
                        this.$store.commit("setOpt", {
                            type: "width_type",
                            value: t
                        })
                    }
                },
                width_px: {
                    get() {
                        return this.$store.state.options.width_px
                    },
                    set(t) {
                        this.$store.commit("setOpt", {
                            type: "width_px",
                            value: t
                        })
                    }
                }
            }
        },
        rt = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "app-menu-page"
            }, [n("div", {
                staticClass: "form-group"
            }, [n("label", [n("b", [t._v(t._s(t.$t("sidebar.page_options.search_label")))])]), t._v(" "), n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.search,
                    expression: "search"
                }],
                staticClass: "form-control",
                on: {
                    change: function(e) {
                        var n = Array.prototype.filter.call(e.target.options, function(t) {
                            return t.selected
                        }).map(function(t) {
                            return "_value" in t ? t._value : t.value
                        });
                        t.search = e.target.multiple ? n : n[0]
                    }
                }
            }, [n("option", {
                attrs: {
                    value: "google"
                }
            }, [t._v("Google")]), t._v(" "), n("option", {
                attrs: {
                    value: "yandex"
                }
            }, [t._v("Yandex")]), t._v(" "), n("option", {
                attrs: {
                    value: "bing"
                }
            }, [t._v("Bing")]), t._v(" "), n("option", {
                attrs: {
                    value: "yahoo"
                }
            }, [t._v("Yahoo")]), t._v(" "), n("option", {
                attrs: {
                    value: "duckduckgo"
                }
            }, [t._v("DuckDuckGo")])])]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("label", [n("b", [t._v(t._s(t.$t("sidebar.page_options.lang_label")))])]), t._v(" "), n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.lang,
                    expression: "lang"
                }],
                staticClass: "form-control",
                on: {
                    change: function(e) {
                        var n = Array.prototype.filter.call(e.target.options, function(t) {
                            return t.selected
                        }).map(function(t) {
                            return "_value" in t ? t._value : t.value
                        });
                        t.lang = e.target.multiple ? n : n[0]
                    }
                }
            }, [n("option", {
                attrs: {
                    value: "ru"
                }
            }, [t._v("Русский")]), t._v(" "), n("option", {
                attrs: {
                    value: "en"
                }
            }, [t._v("English")])])]), t._v(" "), n("hr"), t._v(" "), n("h4", {
                staticClass: "menu-title"
            }, [t._v(t._s(t.$t("sidebar.page_options.title_workspace")))]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("label", [n("b", [t._v(t._s(t.$t("sidebar.page_options.label_columns")))])]), t._v(" "), n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.columns,
                    expression: "columns"
                }],
                staticClass: "form-control",
                on: {
                    change: function(e) {
                        var n = Array.prototype.filter.call(e.target.options, function(t) {
                            return t.selected
                        }).map(function(t) {
                            return "_value" in t ? t._value : t.value
                        });
                        t.columns = e.target.multiple ? n : n[0]
                    }
                }
            }, [n("option", {
                attrs: {
                    value: "4"
                }
            }, [t._v("4")]), t._v(" "), n("option", {
                attrs: {
                    value: "5"
                }
            }, [t._v("5")]), t._v(" "), n("option", {
                attrs: {
                    value: "6"
                }
            }, [t._v("6")]), t._v(" "), n("option", {
                attrs: {
                    value: "8"
                }
            }, [t._v("8")]), t._v(" "), n("option", {
                attrs: {
                    value: "10"
                }
            }, [t._v("10")])])]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("label", [n("b", [t._v(t._s(t.$t("sidebar.page_options.label_workspace_type")))])]), t._v(" "), n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.width_type,
                    expression: "width_type"
                }],
                staticClass: "form-control",
                on: {
                    change: function(e) {
                        var n = Array.prototype.filter.call(e.target.options, function(t) {
                            return t.selected
                        }).map(function(t) {
                            return "_value" in t ? t._value : t.value
                        });
                        t.width_type = e.target.multiple ? n : n[0]
                    }
                }
            }, [n("option", {
                attrs: {
                    value: "auto"
                }
            }, [t._v(t._s(t.$t("sidebar.page_options.stretchable")))]), t._v(" "), n("option", {
                attrs: {
                    value: "fixed"
                }
            }, [t._v(t._s(t.$t("sidebar.page_options.fixed")))])])]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("label", ["fixed" == t.width_type ? n("b", [t._v(t._s(t.$t("sidebar.page_options.label_width_str")))]) : n("b", [t._v(t._s(t.$t("sidebar.page_options.label_width_fix")))])]), t._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.width_px,
                    expression: "width_px"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "number"
                },
                domProps: {
                    value: t.width_px
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.width_px = e.target.value)
                    }
                }
            })])])
        };
    rt._withStripped = !0;
    var it = Object(l.a)(ot, rt, [], !1, null, null, null);
    it.options.__file = "frontend\\components\\menu-pages\\menu-settings.vue";
    var at, st = it.exports,
        lt = {
            data: () => ({
                email: "",
                password: null,
                show_loading: !1,
                error_messages: !1,
                last_sync_time: null
            }),
            created() {
                var t = this,
                    e = function() {
                        var e = (Date.now() / 1e3 | 0) - localStorage.last_sync,
                            n = Math.floor(e / 3600),
                            o = Math.floor(e % 3600 / 60),
                            r = Math.floor(e % 3600 % 60),
                            i = n > 0 ? n + " h. " : "",
                            a = o > 0 ? o + " min. " : "",
                            s = r > 0 ? r + " sec. " : "";
                        t.last_sync_time = `<b>${i} ${a} ${0==a?s:""}</b><br>${t.$t("sidebar.page_sync.time_after_update")}`
                    };
                e(), at = setInterval(e, 5e3)
            },
            destroyed() {
                clearInterval(at)
            },
            methods: {
                showError(t) {
                    this.error_messages = t;
                    var e = this;
                    setTimeout(function() {
                        e.error_messages = !1
                    }, 2500)
                },
                logOut() {
                    this.$store.commit("setOpt", {
                        type: "token",
                        value: null
                    })
                },
                sendLogIn() {
                    if (!this.email || !this.password) return this.showError("not_data");
                    this.show_loading = !0;
                    var t = this,
                        e = this.$store.state.api_url + "users-login",
                        n = {
                            email: this.email,
                            password: this.password
                        };
                    this.$http.post(e, n).then(function(e) {
                        console.log(e.body), t.show_loading = !1, e.body.token && t.$store.commit("setOpt", {
                            type: "token",
                            value: e.body.token
                        }), e.body.app_data && t.$store.commit("importData", {
                            data: e.body.app_data,
                            json: !1,
                            block_sync: !0
                        })
                    }, function(e) {
                        t.show_loading = !1, t.showError(e.body.error)
                    })
                },
                createAccount() {
                    if (!this.email || !this.password) return this.showError("not_data");
                    this.show_loading = !0;
                    var t = this,
                        e = this.$store.state.api_url + "users-create",
                        n = {
                            email: this.email,
                            password: this.password,
                            app_data: {
                                boards: _helper.clearOtherBoardsData(this.$store.state.boards),
                                options: this.$store.state.options
                            }
                        };
                    this.$http.post(e, n).then(function(e) {
                        t.show_loading = !1, console.log(e.body), e.body.token && t.$store.commit("setOpt", {
                            type: "token",
                            value: e.body.token
                        }), e.body.app_data && t.$store.commit("importData", {
                            data: e.body.app_data,
                            json: !1
                        })
                    }, function(e) {
                        t.show_loading = !1, t.showError(e.body.error)
                    })
                },
                checkUpdate() {
                    var t = this;
                    this.show_loading = !0, chrome.runtime.sendMessage("check_update"), chrome.runtime.onMessage.addListener(function e(n) {
                        "check_update_ready" == n && (chrome.runtime.onMessage.removeListener(e), t.show_loading = !1)
                    })
                },
                openFileDialog() {
                    document.getElementById("importFile").click()
                },
                exportData() {
                    var t = {
                        options: this.$store.state.options,
                        boards: _helper.clearOtherBoardsData(this.$store.state.boards)
                    };
                    t.options.token && delete t.options.token;
                    try {
                        t = JSON.stringify(t)
                    } catch (t) {
                        return console.error(t), !1
                    }
                    ct(t, "export.json", "text/json")
                },
                changeImportFile(t) {
                    var e = t.target.files[0],
                        n = this;
                    if (e) {
                        if (-1 == e.name.indexOf("json")) throw "Only json files";
                        var o = new FileReader;
                        o.onload = function(t) {
                            n.$store.commit("importData", {
                                data: t.target.result,
                                json: !0
                            })
                        }, o.readAsText(e)
                    } else alert("Failed to load file")
                }
            }
        },
        ct = function(t, e, n) {
            if (t) {
                e || (e = "console.json"), "object" == typeof t && (t = JSON.stringify(t, void 0, 4)), n = n || "text/plain";
                var o = new Blob([t], {
                        type: n
                    }),
                    r = document.createEvent("MouseEvents"),
                    i = document.createElement("a");
                i.download = e, i.href = window.URL.createObjectURL(o), i.dataset.downloadurl = ["text/json", i.download, i.href].join(":"), r.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), i.dispatchEvent(r)
            }
        },
        ut = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "app-menu-page"
            }, [n("div", {
                staticClass: "alert alert-info text-center"
            }, [n("p", [t._v(t._s(t.$t("sidebar.page_sync.alert_file")))]), t._v(" "), n("p", [n("button", {
                staticClass: "btn btn-info",
                on: {
                    click: function(e) {
                        t.exportData()
                    }
                }
            }, [t._v(t._s(t.$t("sidebar.page_sync.btn_export")))])]), t._v(" "), n("p", [n("button", {
                staticClass: "btn btn-info",
                on: {
                    click: function(e) {
                        t.openFileDialog()
                    }
                }
            }, [t._v(t._s(t.$t("sidebar.page_sync.btn_import")))]), t._v(" "), n("input", {
                staticStyle: {
                    display: "none"
                },
                attrs: {
                    id: "importFile",
                    type: "file",
                    accept: ".json"
                },
                on: {
                    change: t.changeImportFile
                }
            })])])])
        };
    ut._withStripped = !0;
    var dt = !1;
    var pt = function(t) {
            dt || n(37)
        },
        ft = Object(l.a)(lt, ut, [], !1, pt, null, null);
    ft.options.__file = "frontend\\components\\menu-pages\\menu-sync.vue";
    var ht = {
            components: {
                "menu-edit-the-boards": C,
                "menu-bg": D,
                "menu-bg-1": z,
                "menu-bg-2": Y,
                "menu-settings": st,
                "menu-boards": nt,
                "menu-sync": ft.exports
            },
            data: () => ({
                show: !1,
                tabsCounter: 0,
                page: "main",
                prevPage: [],
                boardsCopy: []
            }),
            computed: {
                pageNames() {
                    return {
                        main: this.$t("sidebar.title.main"),
                        bg: this.$t("sidebar.title.bg"),
                        "bg-1": this.$t("sidebar.title.bg1"),
                        "bg-2": this.$t("sidebar.title.bg2"),
                        edit_the_boards: this.$t("sidebar.title.editThisBoard"),
                        boards: this.$t("sidebar.title.boards"),
                        settings: this.$t("sidebar.title.settings"),
                        sync: this.$t("sidebar.title.sync")
                    }
                }
            },
            watch: {
                show() {
                    var t = this,
                        e = [];
                    chrome.tabs.query({
                        windowType: "normal"
                    }, function(n) {
                        n.forEach(function(t) {
                            if ("chrome://newtab/" != t.url) {
                                e.push("1")
                            }
                        }), t.tabsCounter = e.length
                    })
                }
            },
            methods: {
                goTo(t) {
                    this.prevPage.push(this.page), this.page = t
                },
                goBack() {
                    var t = this.prevPage.pop();
                    this.page = t
                },
                saveAllOpenTabs(t) {
                    var e = this,
                        n = [],
                        o = [],
                        r = new Date,
                        i = [r.getDate(), r.getMonth() + 1, r.getFullYear()],
                        a = [r.getHours(), r.getMinutes()];
                    for (var s in i) i[s] < 10 && (i[s] = "0" + i[s]);
                    for (var s in a) a[s] < 10 && (a[s] = "0" + a[s]);
                    chrome.tabs.query({
                        windowType: "normal"
                    }, function(r) {
                        if (r.forEach(function(t) {
                                if ("chrome://newtab/" != t.url) {
                                    o.push(t.id);
                                    var e = {
                                        url: t.url,
                                        title: t.title
                                    };
                                    n.push(e)
                                }
                            }), 0 == n.length) return !1;
                        e.$store.commit("addFullList", {
                            title: i.join("-") + " " + a.join(":"),
                            links: n
                        }), e.$nextTick(function() {
                            e.$store.dispatch("scroll_to_last_addit_list")
                        }), e.show = !1, !0 === t && chrome.tabs.remove(o)
                    })
                }
            }
        },
        mt = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return t.show ? n("div", {
                staticClass: "app-menu"
            }, [n("div", {
                staticClass: "app-menu-header clearfix"
            }, [n("h5", {
                staticClass: "text-center"
            }, [t._v(t._s(t.pageNames[t.page]))]), t._v(" "), "main" != t.page ? n("button", {
                staticClass: "btn btn-default fl-l",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.goBack()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-angle-left"
            })]) : t._e(), t._v(" "), n("button", {
                staticClass: "btn btn-default fl-r",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.show = !t.show
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-times"
            })])]), t._v(" "), n("div", {
                staticClass: "app-menu-body"
            }, ["main" == t.page ? n("div", {
                staticClass: "app-menu-page"
            }, [n("div", {
                staticClass: "panel panel-info text-center"
            }, [n("div", {
                staticClass: "panel-heading"
            }, [n("h3", {
                staticClass: "panel-title"
            }, [t._v(t._s(t.$t("popup.block2_title")))])]), t._v(" "), n("div", {
                staticClass: "panel-body"
            }, [n("p", [t._v(t._s(t.$t("popup.block2_page_count")) + " "), n("span", {
                staticClass: "label label-success"
            }, [t._v(t._s(t.tabsCounter))])]), t._v(" "), n("button", {
                staticClass: "btn btn-info",
                staticStyle: {
                    width: "100%",
                    "margin-bottom": "5px"
                },
                on: {
                    click: function(e) {
                        t.saveAllOpenTabs()
                    }
                }
            }, [t._v(t._s(t.$t("popup.block2_btn1")))]), t._v(" "), n("button", {
                staticClass: "btn btn-info",
                staticStyle: {
                    width: "100%"
                },
                on: {
                    click: function(e) {
                        t.saveAllOpenTabs(!0)
                    }
                }
            }, [t._v(t._s(t.$t("popup.block2_btn2")))])])]), t._v(" "), n("a", {
                staticClass: "app-menu-btn",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), t.goTo("edit_the_boards")
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-edit"
            }), t._v(" " + t._s(t.$t("sidebar.main.btnThisBoard")) + " \n\t\t\t")]), t._v(" "), n("a", {
                staticClass: "app-menu-btn",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), t.goTo("bg")
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-image"
            }), t._v(" " + t._s(t.$t("sidebar.main.btnBg")) + "\n\t\t\t")]), t._v(" "), n("hr"), t._v(" "), n("a", {
                staticClass: "app-menu-btn",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), t.goTo("settings")
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-cog"
            }), t._v(" " + t._s(t.$t("sidebar.main.btnSetting")) + "\n\t\t\t")]), t._v(" "), n("a", {
                staticClass: "app-menu-btn",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), t.goTo("boards")
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-th"
            }), t._v(" " + t._s(t.$t("sidebar.main.btnBoard")) + "\n\t\t\t")]), t._v(" "), n("a", {
                staticClass: "app-menu-btn",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), t.goTo("sync")
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-sync-alt"
            }), t._v(" " + t._s(t.$t("sidebar.main.btnSync")) + "\n\t\t\t")])]) : t._e(), t._v(" "), "edit_the_boards" == t.page ? n("menu-edit-the-boards") : t._e(), t._v(" "), "settings" == t.page ? n("menu-settings") : t._e(), t._v(" "), "bg" == t.page ? n("menu-bg") : t._e(), t._v(" "), "bg-1" == t.page ? n("menu-bg-1") : t._e(), t._v(" "), "bg-2" == t.page ? n("menu-bg-2") : t._e(), t._v(" "), "boards" == t.page ? n("menu-boards") : t._e(), t._v(" "), "sync" == t.page ? n("menu-sync") : t._e()], 1)]) : t._e()
        };
    mt._withStripped = !0;
    var vt = !1;
    var _t = function(t) {
            vt || n(52)
        },
        gt = Object(l.a)(ht, mt, [], !1, _t, null, null);
    gt.options.__file = "frontend\\components\\Sidebar.vue";
    var bt = gt.exports,
        yt = {
            data: () => ({
                listTitle: ""
            }),
            created() {
                this.$nextTick(function() {
                    document.getElementById("list_title").focus()
                })
            },
            methods: {
                cancel() {
                    this.$emit("cancel")
                },
                success() {
                    this.$emit("success", this.listTitle)
                }
            }
        },
        wt = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("h4", {
                staticClass: "text-center",
                domProps: {
                    innerHTML: t._s(t.$t("forms.add_list.title"))
                }
            }), t._v(" "), n("p", {
                staticClass: "text-center mb-15",
                domProps: {
                    innerHTML: t._s(t.$t("forms.add_list.subtitle"))
                }
            }), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("label", {
                attrs: {
                    for: ""
                }
            }, [t._v(t._s(t.$t("forms.add_list.label_list_name")))]), t._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.listTitle,
                    expression: "listTitle"
                }],
                staticClass: "form-control",
                attrs: {
                    id: "list_title",
                    type: "text"
                },
                domProps: {
                    value: t.listTitle
                },
                on: {
                    keydown: [function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "esc", 27, e.key, "Escape")) return null;
                        t.cancel()
                    }, function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.success()
                    }],
                    input: function(e) {
                        e.target.composing || (t.listTitle = e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "form-group mb-0"
            }, [n("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.cancel()
                    }
                }
            }, [t._v(t._s(t.$t("other.cancel")))]), t._v(" "), n("button", {
                staticClass: "btn btn-success fl-r",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.success()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-save"
            }), t._v(" " + t._s(t.$t("forms.add_list.btn_add_list")))])])])
        };
    wt._withStripped = !0;
    var kt = Object(l.a)(yt, wt, [], !1, null, null, null);
    kt.options.__file = "frontend\\components\\forms\\add-list.vue";
    var xt = {
            components: {
                "app-search": g,
                "app-sidebar": bt,
                "app-modal": A,
                "form-add-list": kt.exports
            },
            computed: {},
            data: () => ({}),
            methods: {
                addNewList(t) {
                    this.$store.commit("addList", t), this.$nextTick(function() {
                        this.$store.dispatch("scroll_to_last_addit_list")
                    })
                }
            }
        },
        Ct = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "header"
                }
            }, [n("div", {
                staticClass: "container-fluid"
            }, [n("div", {
                staticClass: "row"
            }, [n("div", {
                staticClass: "col-xs-6"
            }, [n("app-search")], 1), t._v(" "), n("div", {
                staticClass: "col-xs-6 text-right"
            }, [t.$store.getters.isShow ? n("button", {
                staticClass: "btn btn-default",
                on: {
                    click: function(e) {
                        t.$refs.modalAddList.open()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-plus"
            })]) : t._e(), t._v(" "), t.$store.getters.isShow ? n("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.$refs.sidebar.show = !0
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-bars"
            })]) : t._e()])])]), t._v(" "), t.$store.getters.isShow ? n("app-sidebar", {
                ref: "sidebar"
            }) : t._e(), t._v(" "), n("app-modal", {
                ref: "modalAddList",
                on: {
                    close: t.closeModal
                }
            }, [n("form-add-list", {
                on: {
                    success: function(e) {
                        t.addNewList(e), t.$refs.modalAddList.close()
                    },
                    cancel: function(e) {
                        t.$refs.modalAddList.close()
                    }
                }
            })], 1)], 1)
        };
    Ct._withStripped = !0;
    var $t = !1;
    var St = function(t) {
            $t || n(58)
        },
        Tt = Object(l.a)(xt, Ct, [], !1, St, null, null);
    Tt.options.__file = "frontend\\components\\Header.vue";
    var Et = Tt.exports,
        Ot = {
            props: ["listNum", "colNum"],
            computed: {
                list() {
                    return this.$store.getters.actualBoard.lists[this.listNum]
                },
                boardType() {
                    return this.$store.getters.actualBoard.type
                }
            },
            data: () => ({
                titleEdit: !1,
                showMenu: !1
            }),
            mounted: function() {
                this.$nextTick(function() {})
            },
            methods: {
                _modal_addLink() {
                    this.showMenu = !1, this.$parent.$parent.tempData.list_num = this.listNum, this.$parent.$parent.$refs.modalAddLink.open()
                },
                _modal_copyLink() {
                    this.showMenu = !1, this.$parent.$parent.tempData.list_num = this.listNum, this.$parent.$parent.$refs.modalCopyList.open()
                },
                _modal_swapLink() {
                    this.showMenu = !1, this.$parent.$parent.tempData.list_num = this.listNum, this.$parent.$parent.$refs.modalSwapList.open()
                },
                renameList() {
                    this.titleEdit = !0, this.$nextTick(function() {
                        var t = document.getElementById("edit_list_title");
                        t.focus(), t.select()
                    })
                }
            }
        },
        At = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [t.showMenu ? n("div", {
                staticClass: "black-bg",
                on: {
                    click: function(e) {
                        t.showMenu = !1
                    }
                }
            }) : t._e(), t._v(" "), n("div", {
                staticClass: "links-container",
                class: {
                    "z-99": t.showMenu
                }
            }, [t.showMenu ? n("div", {
                staticClass: "links-container-menu",
                class: {
                    "links-container-menu-last-col": t.colNum >= 5
                }
            }, [n("div", {
                staticClass: "btn-group"
            }, [n("button", {
                staticClass: "btn btn-sm btn-default",
                attrs: {
                    type: "button",
                    title: "Открыть все в этом окне"
                },
                on: {
                    click: function(e) {
                        t.$store.dispatch("openLinksArr", {
                            arr: t.list.links
                        })
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-expand-arrows-alt"
            }), t._v(" " + t._s(t.$t("list_menu.open_all")) + "\n\t\t\t\t")]), t._v(" "), n("button", {
                staticClass: "btn btn-sm btn-default",
                staticStyle: {
                    "margin-left": "-5px"
                },
                attrs: {
                    type: "button",
                    title: t.$t("list_menu.open_all_external")
                },
                on: {
                    click: function(e) {
                        t.$store.dispatch("openLinksArr", {
                            arr: t.list.links,
                            to: "external"
                        })
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-external-link-square-alt"
            })]), t._v(" "), n("button", {
                staticClass: "btn btn-sm btn-default",
                staticStyle: {
                    "margin-left": "-5px"
                },
                attrs: {
                    type: "button",
                    title: t.$t("list_menu.open_all_secret")
                },
                on: {
                    click: function(e) {
                        t.$store.dispatch("openLinksArr", {
                            arr: t.list.links,
                            to: "secret"
                        })
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-user-secret"
            })])]), n("br"), t._v(" "), n("button", {
                staticClass: "btn btn-sm btn-default",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.showMenu = !1, t.renameList()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-edit"
            }), t._v(" " + t._s(t.$t("list_menu.rename")) + "\n\t\t\t")]), n("br"), t._v(" "), "secret" != t.boardType ? [n("button", {
                staticClass: "btn btn-sm btn-default",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t._modal_copyLink()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-copy"
            }), t._v(" " + t._s(t.$t("list_menu.copy_list")) + "\n\t\t\t\t")]), n("br"), t._v(" "), n("button", {
                staticClass: "btn btn-sm btn-default",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t._modal_swapLink()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-arrow-right"
            }), t._v(" " + t._s(t.$t("list_menu.swap_list")) + "\n\t\t\t\t")]), n("br")] : t._e(), t._v(" "), n("button", {
                staticClass: "btn btn-sm btn-success",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t._modal_addLink()
                    }
                }
            }, [n("i", {
                staticClass: "fas fa-fw fa-plus"
            }), t._v(" " + t._s(t.$t("list_menu.add_link")) + "\n\t\t\t")]), n("br"), t._v(" "), n("button", {
                staticClass: "btn btn-sm btn-danger",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.$store.dispatch("removeList", t.listNum)
                    }
                }
            }, [n("i", {
                staticClass: "fas fa-fw fa-trash"
            }), t._v(" " + t._s(t.$t("list_menu.remove_list")) + "\n\t\t\t")])], 2) : t._e(), t._v(" "), n("div", {
                staticClass: "links-container-header"
            }, [n("div", {
                staticClass: "links-container-title",
                on: {
                    dblclick: function(e) {
                        t.renameList()
                    }
                }
            }, [t.titleEdit ? n("input", {
                attrs: {
                    id: "edit_list_title",
                    type: "text"
                },
                domProps: {
                    value: t.list.title
                },
                on: {
                    blur: function(e) {
                        t.titleEdit = !1
                    },
                    keyup: [function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "esc", 27, e.key, "Escape")) return null;
                        t.titleEdit = !1
                    }, function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.titleEdit = !1, t.$store.commit("renameList", {
                            i: t.listNum,
                            title: e.target.value
                        })
                    }]
                }
            }) : [t._v(t._s(t.list.title))]], 2), t._v(" "), n("div", {
                staticClass: "title-btns"
            }, [n("span", {
                staticClass: "btn",
                on: {
                    click: function(e) {
                        t.showMenu = !t.showMenu
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-ellipsis-v"
            })])])]), t._v(" "), n("div", {
                staticClass: "links-container-body"
            }, [t._t("default")], 2)])])
        };
    At._withStripped = !0;
    var Lt = !1;
    var Bt = function(t) {
            Lt || n(33)
        },
        Pt = Object(l.a)(Ot, At, [], !1, Bt, null, null);
    Pt.options.__file = "frontend\\components\\List.vue";
    var jt = Pt.exports,
        Nt = {
            props: ["listNum"],
            components: {
                draggable: G.a
            },
            data() {
                return {
                    retinaIcon: !0,
                    b_num_dev: this.$store.state.openBoard
                }
            },
            created() {},
            computed: {
                favicon_sourse: {
                    get() {
                        return this.$store.getters.actualBoard.favicon_sourse || "local"
                    }
                },
                links: {
                    get() {
                        return this.$store.getters.actualBoard.lists[this.listNum].links
                    },
                    set(t) {
                        this.$store.commit("moveLinks", {
                            list_i: this.listNum,
                            links: t
                        })
                    }
                }
            },
            methods: {
                imgError(t, e) {
                    if (t.favicon_url) return e.srcElement.src = "chrome://favicon/";
                    e.srcElement.src = i(t.url)
                },
                sendGoodLoad(t) {
                    if (t.favicon_cache) return;
                    let e = _helper.favicon_cached_data[this.b_num_dev];
                    e.done = e.done + 1, e.need < e.done || (console.log("sendGoodLoad", e.need, e.done), e.need == e.done && this.$store.dispatch("faviconCaching", {
                        board_num: this.b_num_dev
                    }))
                },
                getFaviconUrl(t) {
                    return t.favicon_cache ? t.favicon_cache : _helper.getFaviconUrl(t, this.favicon_sourse)
                },
                setFavicon(t, e) {
                    if (console.log("SET FAVICON"), null == t.favicon_cache) {
                        let n = getFaviconUrl(t, this.favicon_sourse),
                            o = new Image;
                        o.onload = (async () => {
                            try {
                                let t = await _helper.imageObj_to_Base64(o),
                                    n = this.$store.state.openBoard,
                                    r = this.listNum;
                                this.$store.commit("setFaviconToLink", {
                                    favicon_cache: t,
                                    board_num: n,
                                    list_num: r,
                                    link_num: e
                                }), console.log("++++++", n, r, e)
                            } catch (t) {
                                console.error(t)
                            }
                        }), o.onerror = (() => {
                            console.log("=-=-=-=-=-==-", n)
                        }), o.src = n
                    }
                    return t.favicon_cache ? `background-image: url(${t.favicon_cache})` : `background-image: url(${getFaviconUrl(t,this.favicon_sourse)})`
                },
                loadFavicon22(t) {
                    var e = document.createElement("a");
                    e.href = t.url;
                    e.hostname, e.origin;
                    return i(t.url)
                },
                loadFavicon(t) {
                    var e = document.createElement("a");
                    t.favicon_url ? e.href = t.favicon_url : e.href = t.url;
                    e.hostname;
                    return e.origin + "/favicon.ico"
                },
                loadFavicon2(t) {
                    return t.favicon_url ? this.loadFavicon(t) : "internet" == this.favicon_sourse ? this.loadFavicon(t) : i(t.url)
                },
                loadFaviconRetina(t) {
                    if (!t.favicon_url && "internet" != this.favicon_sourse) return t.url(t.url)
                },
                moveLinks() {},
                openCtxMenu(t, e) {
                    this.$parent.$parent.$parent.tempData.list_num = this.listNum, this.$parent.$parent.$parent.tempData.link_num = t, this.$parent.$parent.$parent.$refs.ctxMenu.open(e)
                }
            }
        },
        Dt = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("draggable", {
                staticClass: "dropArea",
                class: {
                    "no-items": 0 == t.links.length
                },
                attrs: {
                    options: {
                        group: "links",
                        scroll: !0
                    }
                },
                on: {
                    start: function(e) {
                        t.drag = !0
                    },
                    end: function(e) {
                        t.drag = !1, t.moveLinks()
                    }
                },
                model: {
                    value: t.links,
                    callback: function(e) {
                        t.links = e
                    },
                    expression: "links"
                }
            }, t._l(t.links, function(e, o) {
                return n("div", {
                    key: o,
                    staticClass: "link",
                    attrs: {
                        title: e.title
                    },
                    on: {
                        click: function(n) {
                            t.$store.dispatch("openLink", {
                                linkObg: e,
                                e: n
                            })
                        },
                        contextmenu: function(e) {
                            e.preventDefault(), t.openCtxMenu(o, e)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: t.getFaviconUrl(e)
                    },
                    on: {
                        load: function(n) {
                            t.sendGoodLoad(e)
                        },
                        error: function(n) {
                            t.imgError(e, n)
                        }
                    }
                }), t._v("\n\t\t\t" + t._s(e.title) + "\n\t\t")])
            })), t._v(" "), 0 == t.links.length ? n("div", {
                staticClass: "add-first-link text-center"
            }, [t._v("\n\t\tЭтот список еще пуст :("), n("br"), t._v(" "), n("b", [n("span", {
                staticClass: "_a",
                on: {
                    click: function(e) {
                        t.$parent._modal_addLink()
                    }
                }
            }, [t._v("Добавить ссылку")])])]) : t._e()], 1)
        };
    Dt._withStripped = !0;
    var It = !1;
    var Mt = function(t) {
            It || n(31)
        },
        Ft = Object(l.a)(Nt, Dt, [], !1, Mt, null, null);
    Ft.options.__file = "frontend\\components\\Links.vue";
    var Ut = Ft.exports,
        Rt = {
            props: ["actualBoard", "boards", "activeBoard"],
            components: {
                "app-board": he
            },
            computed: {},
            data: () => ({
                lock: !0,
                boardPassword: null,
                error: !1
            }),
            watch: {
                "$store.state.openBoard": {
                    handler() {
                        this.lock || (this.lock = !0), null != this.boardPassword && (this.boardPassword = null)
                    }
                }
            },
            methods: {
                checkPass() {
                    var t = this;
                    this.$store.dispatch("unlock", {
                        password: this.boardPassword,
                        cb: function(e) {
                            if (e) {
                                t.error = !0, setTimeout(function() {
                                    t.error = !1
                                }, 1e3);
                                var n = document.getElementById("input_password");
                                n.focus(), n.select()
                            } else t.lock = !1
                        }
                    })
                }
            }
        },
        zt = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return 1 == t.lock ? n("div", {
                staticClass: "row"
            }, [n("div", {
                staticClass: "col-xs-4 col-xs-offset-4"
            }, [n("div", {
                staticClass: "panel panel-default"
            }, [n("div", {
                staticClass: "panel-body text-center"
            }, [t._m(0), t._v(" "), n("h3", [t._v(t._s(t.$t("secret_board.title")))]), t._v(" "), n("div", {
                staticClass: "form-group",
                class: {
                    "has-error": 1 == t.error
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.boardPassword,
                    expression: "boardPassword"
                }],
                staticClass: "form-control text-center",
                attrs: {
                    id: "input_password",
                    type: "password",
                    autocomplete: "off",
                    placeholder: t.$t("secret_board.placeholder")
                },
                domProps: {
                    value: t.boardPassword
                },
                on: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.checkPass()
                    },
                    input: function(e) {
                        e.target.composing || (t.boardPassword = e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("button", {
                staticClass: "btn btn-lg btn-primary",
                on: {
                    click: function(e) {
                        t.checkPass()
                    }
                }
            }, [t._v(t._s(t.$t("secret_board.btn_unlock")))])])])])])]) : t._e()
        };
    zt._withStripped = !0;
    var Vt = Object(l.a)(Rt, zt, [function() {
        var t = this.$createElement,
            e = this._self._c || t;
        return e("h1", [e("i", {
            staticClass: "fa fa-lock fa-lg"
        })])
    }], !1, null, null, null);
    Vt.options.__file = "frontend\\components\\SecretBoard.vue";
    var Wt = Vt.exports,
        Ht = {
            props: ["swapList"],
            computed: {
                boardsList() {
                    return this.$store.getters.boardsList
                },
                newList() {
                    return this.$store.getters.actualBoard.lists[this.swapList]
                }
            },
            data() {
                return {
                    newBoardNum: this.$store.state.openBoard
                }
            },
            created() {
                this.$nextTick(function() {
                    document.getElementById("swap_board").focus()
                })
            },
            methods: {
                cancel() {
                    this.$emit("cancel")
                },
                success() {
                    this.$store.commit("copyList", {
                        board_i: this.newBoardNum,
                        list: this.newList
                    }), this.$store.commit("removeList", this.swapList), this.$emit("success")
                }
            }
        },
        Xt = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("div", {
                staticClass: "form-group"
            }, [n("h4", {
                staticClass: "text-center mb-30",
                domProps: {
                    innerHTML: t._s(t.$t("forms.swap_list.title"))
                }
            }), t._v(" "), n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.newBoardNum,
                    expression: "newBoardNum"
                }],
                staticClass: "form-control",
                attrs: {
                    id: "swap_board"
                },
                on: {
                    keydown: [function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "esc", 27, e.key, "Escape")) return null;
                        t.cancel()
                    }, function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.success()
                    }],
                    change: function(e) {
                        var n = Array.prototype.filter.call(e.target.options, function(t) {
                            return t.selected
                        }).map(function(t) {
                            return "_value" in t ? t._value : t.value
                        });
                        t.newBoardNum = e.target.multiple ? n : n[0]
                    }
                }
            }, t._l(t.boardsList, function(e, o) {
                return "normal" === e.type ? n("option", {
                    key: o,
                    domProps: {
                        value: o
                    }
                }, [t._v(t._s(e.name))]) : t._e()
            }))]), t._v(" "), n("div", {
                staticClass: "form-group mb-0"
            }, [n("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.cancel()
                    }
                }
            }, [t._v(t._s(t.$t("other.cancel")))]), t._v(" "), n("button", {
                staticClass: "btn btn-success fl-r",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.success()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-save"
            }), t._v(" " + t._s(t.$t("other.save")))])])])
        };
    Xt._withStripped = !0;
    var qt = Object(l.a)(Ht, Xt, [], !1, null, null, null);
    qt.options.__file = "frontend\\components\\forms\\swap-list.vue";
    var Yt = qt.exports,
        Jt = {
            props: ["copyList"],
            computed: {
                boardsList() {
                    return this.$store.getters.boardsList
                }
            },
            data() {
                return {
                    newList: JSON.parse(JSON.stringify(this.$store.getters.actualBoard.lists[this.copyList])),
                    newBoardNum: "0"
                }
            },
            created() {
                this.newBoardNum = this.$store.state.openBoard.toString(), this.$nextTick(function() {
                    var t = document.getElementById("input_1");
                    t.focus(), t.select()
                })
            },
            methods: {
                cancel() {
                    this.$emit("cancel")
                },
                success() {
                    this.$store.commit("copyList", {
                        board_i: this.newBoardNum,
                        list: this.newList
                    }), this.$emit("success")
                }
            }
        },
        Gt = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("div", {
                staticClass: "form-group"
            }, [n("h4", {
                staticClass: "text-center",
                domProps: {
                    innerHTML: t._s(t.$t("forms.copy_list.title"))
                }
            }), t._v(" "), n("p", {
                staticClass: "text-center mb-30",
                domProps: {
                    innerHTML: t._s(t.$t("forms.copy_list.subtitle"))
                }
            }), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("label", [t._v(t._s(t.$t("forms.copy_list.label_title")))]), t._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.newList.title,
                    expression: "newList.title"
                }],
                staticClass: "form-control",
                attrs: {
                    id: "input_1",
                    type: "text"
                },
                domProps: {
                    value: t.newList.title
                },
                on: {
                    keydown: [function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "esc", 27, e.key, "Escape")) return null;
                        t.cancel()
                    }, function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.success()
                    }],
                    input: function(e) {
                        e.target.composing || t.$set(t.newList, "title", e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("label", [t._v(t._s(t.$t("forms.copy_list.label_board")))]), t._v(" "), n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.newBoardNum,
                    expression: "newBoardNum"
                }],
                staticClass: "form-control",
                on: {
                    keydown: [function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "esc", 27, e.key, "Escape")) return null;
                        t.cancel()
                    }, function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.success()
                    }],
                    change: function(e) {
                        var n = Array.prototype.filter.call(e.target.options, function(t) {
                            return t.selected
                        }).map(function(t) {
                            return "_value" in t ? t._value : t.value
                        });
                        t.newBoardNum = e.target.multiple ? n : n[0]
                    }
                }
            }, t._l(t.boardsList, function(e, o) {
                return "normal" === e.type ? n("option", {
                    key: o,
                    domProps: {
                        value: o.toString()
                    }
                }, [t._v(t._s(e.name))]) : t._e()
            }))])]), t._v(" "), n("div", {
                staticClass: "form-group mb-0"
            }, [n("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.cancel()
                    }
                }
            }, [t._v(t._s(t.$t("other.cancel")))]), t._v(" "), n("button", {
                staticClass: "btn btn-success fl-r",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.success()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-save"
            }), t._v(" " + t._s(t.$t("other.save")))])])])
        };
    Gt._withStripped = !0;
    var Kt = Object(l.a)(Jt, Gt, [], !1, null, null, null);
    Kt.options.__file = "frontend\\components\\forms\\copy-list.vue";
    var Zt = Kt.exports,
        Qt = {
            data: () => ({
                link: {
                    url: null,
                    title: null
                },
                activeTabs: [],
                showSecondStep: !1,
                showLoading: !1,
                addLinkFromTabs: !1
            }),
            methods: {
                getFaviconUrl: i,
                cancel() {
                    this.$emit("cancel")
                },
                success() {
                    this.$emit("success", [this.link])
                },
                nextStep() {
                    this.showLoading = !0;
                    var t = this.link.url; - 1 != t.indexOf(" ") && (t = t.replace(/ /g, "")), this.$http.get(t).then(t => {
                        let e = t.body.match(/<title>(.*?)<\/title>/);
                        e = e && e[1] ? e[1] : "Untitled", this.link.title = e, this.showSecondStep = !0
                    }, t => {
                        console.error(t)
                    })
                },
                tabsInCurrentWindow() {
                    var t = this;
                    this.addLinkFromTabs = !0, chrome.tabs.query({
                        windowType: "normal"
                    }, function(e) {
                        console.log(e), e.forEach(function(e) {
                            if ("chrome://newtab/" != e.url) {
                                var n = {
                                    url: e.url,
                                    title: e.title,
                                    select: !1
                                };
                                t.activeTabs.push(n)
                            }
                        })
                    })
                },
                selectAllTabs() {
                    this.activeTabs.forEach(function(t, e) {
                        t.select = !0
                    })
                },
                invertSelect() {
                    this.activeTabs.forEach(function(t, e) {
                        t.select = !t.select
                    })
                },
                saveFromActiveTabs() {
                    var t = this.activeTabs.filter(function(t) {
                        return t.select
                    });
                    this.$emit("success", t)
                }
            }
        },
        te = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [t.addLinkFromTabs ? n("div", {
                staticClass: "add-active-tabs"
            }, [n("h4", {
                staticClass: "text-center",
                domProps: {
                    innerHTML: t._s(t.$t("forms.add_link.title_1"))
                }
            }), t._v(" "), n("p", {
                staticClass: "text-center",
                domProps: {
                    innerHTML: t._s(t.$t("forms.add_link.subtitle_1"))
                }
            }), t._v(" "), n("div", {
                staticStyle: {
                    "margin-top": "30px"
                }
            }, t._l(t.activeTabs, function(e, o) {
                return n("div", {
                    key: o,
                    staticClass: "input-group select-in-active-tabs"
                }, [n("span", {
                    staticClass: "input-group-addon",
                    on: {
                        click: function(t) {
                            e.select = !e.select
                        }
                    }
                }, [e.select ? n("i", {
                    staticClass: "far fa-check-square"
                }) : n("i", {
                    staticClass: "far fa-square"
                })]), t._v(" "), n("img", {
                    attrs: {
                        src: t.getFaviconUrl(e.url)
                    }
                }), t._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.title,
                        expression: "_tab.title"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: e.title
                    },
                    on: {
                        input: function(n) {
                            n.target.composing || t.$set(e, "title", n.target.value)
                        }
                    }
                })])
            })), t._v(" "), n("p", {}, [n("span", {
                staticClass: "select-all",
                on: {
                    click: function(e) {
                        t.selectAllTabs()
                    }
                }
            }, [t._v(t._s(t.$t("forms.add_link.select_all")))]), t._v(" "), n("span", {
                staticClass: "select-all",
                on: {
                    click: function(e) {
                        t.invertSelect()
                    }
                }
            }, [t._v(t._s(t.$t("forms.add_link.invert_select")))])]), t._v(" "), n("div", {
                staticClass: "form-group mb-0",
                staticStyle: {
                    "margin-top": "30px"
                }
            }, [n("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.cancel()
                    }
                }
            }, [t._v(t._s(t.$t("other.cancel")))]), t._v(" "), n("button", {
                staticClass: "btn btn-success fl-r",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.saveFromActiveTabs()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-save"
            }), t._v(" " + t._s(t.$t("forms.add_link.save_selected")))])])]) : t._e(), t._v(" "), t.showSecondStep || t.addLinkFromTabs ? t._e() : n("div", {
                staticClass: "step-1"
            }, [n("div", {
                staticClass: "form-group"
            }, [n("label", {
                attrs: {
                    for: ""
                }
            }, [t._v(t._s(t.$t("forms.add_link.label_url")))]), t._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.link.url,
                    expression: "link.url"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.link.url
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.link, "url", e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "form-group mb-0"
            }, [n("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.cancel()
                    }
                }
            }, [t._v(t._s(t.$t("other.cancel")))]), t._v(" "), t.showLoading ? n("div", {
                staticClass: "fl-r",
                staticStyle: {
                    "line-height": "34px"
                }
            }, [n("i", {
                staticClass: "fa fa-pulse fa-lg fa-spinner"
            }), t._v(" " + t._s(t.$t("other.laoding")) + "\n\t\t\t")]) : n("button", {
                staticClass: "btn btn-primary fl-r",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.nextStep()
                    }
                }
            }, [t._v(t._s(t.$t("forms.add_link.btn_next_step")) + " "), n("i", {
                staticClass: "fa fa-angle-double-right"
            })])]), t._v(" "), n("app-hr", [t._v(t._s(t.$t("other.OR")))]), t._v(" "), n("p", {
                staticClass: "text-center"
            }, [n("button", {
                staticClass: "btn btn-lg btn-info",
                on: {
                    click: function(e) {
                        t.tabsInCurrentWindow()
                    }
                }
            }, [t._v(t._s(t.$t("forms.add_link.btn_current_windows")))])])], 1), t._v(" "), t.showSecondStep ? n("div", {
                staticClass: "step-2"
            }, [n("div", {
                staticClass: "form-group",
                staticStyle: {
                    position: "relative"
                }
            }, [n("label", {
                attrs: {
                    for: ""
                }
            }, [t._v(t._s(t.$t("forms.add_link.label_title")))]), t._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.link.title,
                    expression: "link.title"
                }],
                staticClass: "form-control",
                staticStyle: {
                    "padding-left": "30px"
                },
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.link.title
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.link, "title", e.target.value)
                    }
                }
            }), t._v(" "), n("img", {
                staticClass: "favicon-prev",
                attrs: {
                    src: t.getFaviconUrl(t.link.url)
                }
            })]), t._v(" "), n("div", {
                staticClass: "form-group mb-0"
            }, [n("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.cancel()
                    }
                }
            }, [t._v(t._s(t.$t("other.laoding")))]), t._v(" "), n("button", {
                staticClass: "btn btn-success fl-r",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.success()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-save"
            }), t._v(" " + t._s(t.$t("forms.add_link.btn_save_link")))])])]) : t._e()])
        };
    te._withStripped = !0;
    var ee = !1;
    var ne = function(t) {
            ee || n(29)
        },
        oe = Object(l.a)(Qt, te, [], !1, ne, null, null);
    oe.options.__file = "frontend\\components\\forms\\add-link.vue";
    var re = oe.exports,
        ie = {
            props: ["listNum", "linkNum"],
            data() {
                return {
                    newValues: JSON.parse(JSON.stringify(this.$store.getters.actualBoard.lists[this.listNum].links[this.linkNum]))
                }
            },
            methods: {
                cancel() {
                    this.$emit("cancel")
                },
                success() {
                    this.$store.commit("editLinks", {
                        title: this.newValues.title,
                        url: this.newValues.url,
                        list_i: this.listNum,
                        link_i: this.linkNum
                    }), this.$emit("success")
                }
            }
        },
        ae = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("div", {
                staticClass: "form-group"
            }, [n("label", [t._v(t._s(t.$t("forms.edit_link.label_url")))]), t._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.newValues.url,
                    expression: "newValues.url"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.newValues.url
                },
                on: {
                    keydown: [function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "esc", 27, e.key, "Escape")) return null;
                        t.cancel()
                    }, function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.success()
                    }],
                    input: function(e) {
                        e.target.composing || t.$set(t.newValues, "url", e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "form-group"
            }, [n("label", [t._v(t._s(t.$t("forms.edit_link.label_title")))]), t._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.newValues.title,
                    expression: "newValues.title"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.newValues.title
                },
                on: {
                    keydown: [function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "esc", 27, e.key, "Escape")) return null;
                        t.cancel()
                    }, function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.success()
                    }],
                    input: function(e) {
                        e.target.composing || t.$set(t.newValues, "title", e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "form-group mb-0"
            }, [n("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.cancel()
                    }
                }
            }, [t._v(t._s(t.$t("other.cancel")))]), t._v(" "), n("button", {
                staticClass: "btn btn-success fl-r",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        t.success()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-save"
            }), t._v(" " + t._s(t.$t("other.save")))])])])
        };
    ae._withStripped = !0;
    var se = Object(l.a)(ie, ae, [], !1, null, null, null);
    se.options.__file = "frontend\\components\\forms\\edit-link.vue";
    var le = se.exports,
        ce = {
            components: {
                draggable: G.a,
                "app-list": jt,
                "app-links": Ut,
                "app-secret-board": Wt,
                "app-modal": A,
                "form-swap-board": Yt,
                "form-copy-list": Zt,
                "form-add-link": re,
                "form-edit-link": le,
                "context-menu": p
            },
            created() {},
            computed: {
                boardOriginal() {
                    return this.$store.state.boards[this.$store.state.openBoard]
                },
                actualBoard() {
                    return this.$store.getters.actualBoard
                },
                columns: {
                    get() {
                        return this.$store.getters.columnsWithLists
                    },
                    set(t) {
                        console.log(t)
                    }
                },
                options() {
                    return this.$store.getters.options
                },
                columnCount() {
                    return parseInt(this.options.columns)
                },
                boardPageStyles() {
                    var t = {};
                    return "fixed" == this.options.width_type ? t.width = this.options.width_px + "px" : t["min-width"] = this.options.width_px + "px", t
                },
                boardCols() {
                    var t = 100;
                    return {
                        width: (t /= this.options.columns) + "%"
                    }
                }
            },
            data: () => ({
                tempData: {
                    list_num: null,
                    link_num: null
                }
            }),
            methods: {
                movingLists() {
                    this.$store.commit("moveLists", this.columns)
                }
            }
        },
        ue = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                style: t.boardPageStyles,
                attrs: {
                    id: "app-board"
                }
            }, ["secret" == t.actualBoard.type ? n("app-secret-board", {
                ref: "secretBoardData",
                attrs: {
                    "actual-board": t.actualBoard
                },
                on: {
                    unlock: function(e) {
                        t.itShowLists = !0
                    }
                }
            }) : t._e(), t._v(" "), t.$store.getters.isShow ? n("div", {
                staticClass: "row row-5"
            }, [0 == t.actualBoard.lists.length ? n("div", {
                staticClass: "col-xs-4 col-xs-offset-4"
            }, [n("div", {
                staticClass: "alert alert-warning text-center",
                staticStyle: {
                    "font-size": "1.15em",
                    padding: "35px 0"
                }
            }, [n("p", [t._v(t._s(t.$t("board_have_not_lists.p")))]), t._v(" "), n("p", [n("button", {
                staticClass: "btn btn-lg btn-warning",
                on: {
                    click: function(e) {
                        t.$parent.$refs.app_header.$refs.modalAddList.open()
                    }
                }
            }, [t._v("\n\t\t\t\t\t" + t._s(t.$t("board_have_not_lists.btn")) + "\n\t\t\t\t\t")])])])]) : t._e(), t._v(" "), t._l(t.columnCount, function(e, o) {
                return n("div", {
                    key: o,
                    staticClass: "_board_cols",
                    style: t.boardCols,
                    attrs: {
                        id: "_board_col_" + o
                    }
                }, [n("draggable", {
                    staticClass: "columns-dropzone",
                    attrs: {
                        options: {
                            group: "columns",
                            scroll: !0,
                            handle: ".links-container"
                        }
                    },
                    on: {
                        start: function(e) {
                            t.drag = !0
                        },
                        end: function(e) {
                            t.drag = !1, t.movingLists()
                        }
                    },
                    model: {
                        value: t.columns[e - 1],
                        callback: function(n) {
                            t.$set(t.columns, e - 1, n)
                        },
                        expression: "columns[column_num-1]"
                    }
                }, t._l(t.columns[e - 1], function(o) {
                    return n("app-list", {
                        key: t._f("0")(o + "_" + 100 * Math.random()),
                        tag: "div",
                        attrs: {
                            "list-num": o,
                            "col-num": e,
                            id: "list_id_" + o
                        }
                    }, [n("app-links", {
                        attrs: {
                            "list-num": o
                        }
                    })], 1)
                }))], 1)
            })], 2) : t._e(), t._v(" "), n("context-menu", {
                ref: "ctxMenu",
                attrs: {
                    "child-count": "4"
                }
            }, [n("li", {
                on: {
                    click: function(e) {
                        t.$store.dispatch("openLink", {
                            linkObg: t.actualBoard.lists[t.tempData.list_num].links[t.tempData.link_num],
                            to: "external"
                        })
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-external-link-alt"
            }), t._v(" " + t._s(t.$t("context_menu.new_tab")))]), t._v(" "), n("li", {
                on: {
                    click: function(e) {
                        t.$store.dispatch("openLink", {
                            linkObg: t.actualBoard.lists[t.tempData.list_num].links[t.tempData.link_num],
                            to: "secret"
                        })
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-user-secret"
            }), t._v(" " + t._s(t.$t("context_menu.secret_tab")))]), t._v(" "), n("li", {
                on: {
                    click: function(e) {
                        t.$refs.modalEditLink.open()
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-edit"
            }), t._v(" " + t._s(t.$t("context_menu.edit_link")))]), t._v(" "), n("li", {
                on: {
                    click: function(e) {
                        t.$store.dispatch("removeLink", {
                            list_i: t.tempData.list_num,
                            link_i: t.tempData.link_num
                        })
                    }
                }
            }, [n("i", {
                staticClass: "fa fa-fw fa-trash"
            }), t._v(" " + t._s(t.$t("context_menu.remove_link")))])]), t._v(" "), n("app-modal", {
                ref: "modalCopyList",
                on: {
                    close: t.closeModal
                }
            }, [n("form-copy-list", {
                attrs: {
                    "copy-list": t.tempData.list_num
                },
                on: {
                    success: function(e) {
                        t.$refs.modalCopyList.close()
                    },
                    cancel: function(e) {
                        t.$refs.modalCopyList.close()
                    }
                }
            })], 1), t._v(" "), n("app-modal", {
                ref: "modalSwapList",
                on: {
                    close: t.closeModal
                }
            }, [n("form-swap-board", {
                attrs: {
                    "swap-list": t.tempData.list_num
                },
                on: {
                    success: function(e) {
                        t.$refs.modalSwapList.close()
                    },
                    cancel: function(e) {
                        t.$refs.modalSwapList.close()
                    }
                }
            })], 1), t._v(" "), n("app-modal", {
                ref: "modalAddLink",
                on: {
                    close: t.closeModal
                }
            }, [n("form-add-link", {
                on: {
                    success: function(e) {
                        t.$store.commit("addLinks", {
                            i: t.tempData.list_num,
                            arr: e
                        }), t.$refs.modalAddLink.close()
                    },
                    cancel: function(e) {
                        t.$refs.modalAddLink.close()
                    }
                }
            })], 1), t._v(" "), n("app-modal", {
                ref: "modalEditLink",
                on: {
                    close: t.closeModal
                }
            }, [n("form-edit-link", {
                attrs: {
                    "list-num": t.tempData.list_num,
                    "link-num": t.tempData.link_num
                },
                on: {
                    success: function(e) {
                        t.$refs.modalEditLink.close()
                    },
                    cancel: function(e) {
                        t.$refs.modalEditLink.close()
                    }
                }
            })], 1)], 1)
        };
    ue._withStripped = !0;
    var de = !1;
    var pe = function(t) {
            de || n(35)
        },
        fe = Object(l.a)(ce, ue, [], !1, pe, null, null);
    fe.options.__file = "frontend\\components\\Board.vue";
    var he = fe.exports,
        me = {
            computed: {
                openBoard() {
                    return this.$store.state.openBoard
                },
                boardsList() {
                    return this.$store.getters.boardsList
                }
            },
            data: () => ({
                showTolltip: !1,
                hiddenTooltipTimer: null,
                swipe_Xoffset: 0,
                swipe_lastTime: (new Date).getTime()
            }),
            created() {
                window.addEventListener("keydown", t => {
                    if ("BODY" != t.target.nodeName && "HTML" != t.target.nodeName) return !1;
                    let e = t.keyCode;
                    37 == e ? (this.openBoard > 0 ? this.setPage(this.openBoard - 1) : this.setPage(this.boardsList.length - 1), this.funcShowTooltip()) : 39 == e && (this.openBoard < this.boardsList.length - 1 ? this.setPage(this.openBoard + 1) : this.setPage(0), this.funcShowTooltip())
                }), this.$nextTick(function() {
                    /Macintosh/.test(navigator.userAgent) && window.addEventListener("mousewheel", t => {
                        let e = (new Date).getTime();
                        if (this.swipe_lastTime + 500 >= e) return;
                        let n = t.deltaX;
                        console.log(n), n > 0 && n > 50 ? (this.openBoard < this.boardsList.length - 1 ? this.setPage(this.openBoard + 1) : this.setPage(0), this.funcShowTooltip(), this.swipe_lastTime = e) : n < 0 && n < -50 && (this.openBoard > 0 ? this.setPage(this.openBoard - 1) : this.setPage(this.boardsList.length - 1), this.funcShowTooltip(), this.swipe_lastTime = e)
                    })
                })
            },
            methods: {
                setPage(t) {
                    this.$store.commit("setOpenBoard", t)
                },
                funcShowTooltip() {
                    this.showTolltip = !0, this.hiddenTooltipTimer && clearTimeout(this.hiddenTooltipTimer), this.hiddenTooltipTimer = setTimeout(() => {
                        this.showTolltip = !1
                    }, 700)
                }
            }
        },
        ve = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return t.boardsList.length > 1 ? n("div", {
                attrs: {
                    id: "app-board-navigation"
                }
            }, [n("ul", t._l(t.boardsList, function(e, o) {
                return n("li", {
                    key: o,
                    class: {
                        active: o == t.openBoard
                    },
                    attrs: {
                        title: e.name
                    },
                    on: {
                        click: function(e) {
                            t.setPage(o)
                        }
                    }
                }, [n("span", ["secret" === e.type ? n("i", {
                    staticClass: "fa fa-lock",
                    staticStyle: {
                        "margin-right": "5px"
                    }
                }) : t._e(), t._v(" " + t._s(e.name) + "\n\t\t\t\t")])])
            })), t._v(" "), n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showTolltip,
                    expression: "showTolltip"
                }],
                staticClass: "board-navigation-tooltip"
            }, [t.boardsList[t.openBoard].type && "secret" === t.boardsList[t.openBoard].type ? n("i", {
                staticClass: "fa fa-lock",
                staticStyle: {
                    "margin-right": "5px"
                }
            }) : t._e(), t._v("\n\t\t\t" + t._s(t.boardsList[t.openBoard].name) + "\n\t\t")])])], 1) : t._e()
        };
    ve._withStripped = !0;
    var _e = !1;
    var ge = function(t) {
            _e || n(27)
        },
        be = Object(l.a)(me, ve, [], !1, ge, null, null);
    be.options.__file = "frontend\\components\\BoardsNavigation.vue";
    var ye = {
            components: {
                "app-header": Et,
                "app-board-navigation": be.exports,
                "app-board": he
            },
            computed: {
                actualBoard() {
                    return this.$store.getters.actualBoard
                },
                openBoard() {
                    return this.$store.state.openBoard
                },
                bgStyle: () => ({})
            },
            data: () => ({}),
            created() {
                var t = this;
                Object(r.c)(function(e) {
                    t.$store.commit("loadOptions", e), t.$locale = e.lang
                }), Object(r.b)(function(e) {
                    t.$store.commit("loadBoards", e)
                }), null == localStorage.app_opening_counts && localStorage.setItem("app_opening_counts", 0), "NaN" == localStorage.app_opening_counts && localStorage.setItem("app_opening_counts", 0), localStorage.app_opening_counts = parseInt(localStorage.app_opening_counts) + 1
            },
            watch: {
                actualBoard: {
                    handler() {
                        this.$nextTick(function() {
                            this.setBg()
                        })
                    },
                    deep: !0
                }
            },
            methods: {
                setBg() {
                    var t = this,
                        e = JSON.parse(JSON.stringify(this.openBoard)),
                        n = document.body,
                        o = this.actualBoard.bgColor,
                        r = this.actualBoard.bgImage,
                        i = this.actualBoard.bgImageBase64;
                    this.actualBoard.bgImageBase64_middle;
                    if (r) {
                        let s = document.getElementById("base64_bg");
                        i ? (s.style["background-image"] = `url(${i})`, s.style.opacity = 1) : (s.style["background-image"] = null, s.style.opacity = 0), n.style["background-image"] = `url(${r})`, n.style["background-color"] = o || "#2c3e50";
                        var a = new Image;
                        a.onload = function() {
                            if (e != t.openBoard) return;
                            console.log("bgBase64_2");
                            let n = function() {
                                s.style.opacity -= .1, s.style.opacity > 0 && setTimeout(n, 5)
                            };
                            i ? n() : _helper.cachingBg(r, function(n, o) {
                                t.$store.commit("setBgThumb", {
                                    boardId: e,
                                    thumbs: [n, o]
                                })
                            })
                        }, a.src = r
                    } else n.style["background-image"] = null, n.style["background-color"] = o || "#2c3e50"
                }
            }
        },
        we = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return this.actualBoard ? e("div", {
                attrs: {
                    id: "app_main"
                }
            }, [e("app-header", {
                key: this.openBoard,
                ref: "app_header"
            }), this._v(" "), e("app-board"), this._v(" "), e("app-board-navigation"), this._v(" "), e("div", {
                attrs: {
                    id: "base64_bg"
                }
            })], 1) : this._e()
        };
    we._withStripped = !0;
    var ke = !1;
    var xe = function(t) {
            ke || n(60)
        },
        Ce = Object(l.a)(ye, we, [], !1, xe, null, null);
    Ce.options.__file = "frontend\\App.vue";
    var $e = Ce.exports,
        Se = 2;
    /*!
     * vue-resource v1.5.0
     * https://github.com/pagekit/vue-resource
     * Released under the MIT License.
     */
    function Te(t) {
        this.state = Se, this.value = void 0, this.deferred = [];
        var e = this;
        try {
            t(function(t) {
                e.resolve(t)
            }, function(t) {
                e.reject(t)
            })
        } catch (t) {
            e.reject(t)
        }
    }
    Te.reject = function(t) {
        return new Te(function(e, n) {
            n(t)
        })
    }, Te.resolve = function(t) {
        return new Te(function(e, n) {
            e(t)
        })
    }, Te.all = function(t) {
        return new Te(function(e, n) {
            var o = 0,
                r = [];

            function i(n) {
                return function(i) {
                    r[n] = i, (o += 1) === t.length && e(r)
                }
            }
            0 === t.length && e(r);
            for (var a = 0; a < t.length; a += 1) Te.resolve(t[a]).then(i(a), n)
        })
    }, Te.race = function(t) {
        return new Te(function(e, n) {
            for (var o = 0; o < t.length; o += 1) Te.resolve(t[o]).then(e, n)
        })
    };
    var Ee = Te.prototype;

    function Oe(t, e) {
        t instanceof Promise ? this.promise = t : this.promise = new Promise(t.bind(e)), this.context = e
    }
    Ee.resolve = function(t) {
        var e = this;
        if (e.state === Se) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var n = !1;
            try {
                var o = t && t.then;
                if (null !== t && "object" == typeof t && "function" == typeof o) return void o.call(t, function(t) {
                    n || e.resolve(t), n = !0
                }, function(t) {
                    n || e.reject(t), n = !0
                })
            } catch (t) {
                return void(n || e.reject(t))
            }
            e.state = 0, e.value = t, e.notify()
        }
    }, Ee.reject = function(t) {
        if (this.state === Se) {
            if (t === this) throw new TypeError("Promise settled with itself.");
            this.state = 1, this.value = t, this.notify()
        }
    }, Ee.notify = function() {
        var t, e = this;
        Le(function() {
            if (e.state !== Se)
                for (; e.deferred.length;) {
                    var t = e.deferred.shift(),
                        n = t[0],
                        o = t[1],
                        r = t[2],
                        i = t[3];
                    try {
                        0 === e.state ? r("function" == typeof n ? n.call(void 0, e.value) : e.value) : 1 === e.state && ("function" == typeof o ? r(o.call(void 0, e.value)) : i(e.value))
                    } catch (t) {
                        i(t)
                    }
                }
        }, t)
    }, Ee.then = function(t, e) {
        var n = this;
        return new Te(function(o, r) {
            n.deferred.push([t, e, o, r]), n.notify()
        })
    }, Ee.catch = function(t) {
        return this.then(void 0, t)
    }, "undefined" == typeof Promise && (window.Promise = Te), Oe.all = function(t, e) {
        return new Oe(Promise.all(t), e)
    }, Oe.resolve = function(t, e) {
        return new Oe(Promise.resolve(t), e)
    }, Oe.reject = function(t, e) {
        return new Oe(Promise.reject(t), e)
    }, Oe.race = function(t, e) {
        return new Oe(Promise.race(t), e)
    };
    var Ae = Oe.prototype;
    Ae.bind = function(t) {
        return this.context = t, this
    }, Ae.then = function(t, e) {
        return t && t.bind && this.context && (t = t.bind(this.context)), e && e.bind && this.context && (e = e.bind(this.context)), new Oe(this.promise.then(t, e), this.context)
    }, Ae.catch = function(t) {
        return t && t.bind && this.context && (t = t.bind(this.context)), new Oe(this.promise.catch(t), this.context)
    }, Ae.finally = function(t) {
        return this.then(function(e) {
            return t.call(this), e
        }, function(e) {
            return t.call(this), Promise.reject(e)
        })
    };
    var Le, Be = {}.hasOwnProperty,
        Pe = [].slice,
        je = !1,
        Ne = "undefined" != typeof window;

    function De(t) {
        return t ? t.replace(/^\s*|\s*$/g, "") : ""
    }

    function Ie(t) {
        return t ? t.toLowerCase() : ""
    }
    var Me = Array.isArray;

    function Fe(t) {
        return "string" == typeof t
    }

    function Ue(t) {
        return "function" == typeof t
    }

    function Re(t) {
        return null !== t && "object" == typeof t
    }

    function ze(t) {
        return Re(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function Ve(t, e, n) {
        var o = Oe.resolve(t);
        return arguments.length < 2 ? o : o.then(e, n)
    }

    function We(t, e, n) {
        return Ue(n = n || {}) && (n = n.call(e)), qe(t.bind({
            $vm: e,
            $options: n
        }), t, {
            $options: n
        })
    }

    function He(t, e) {
        var n, o;
        if (Me(t))
            for (n = 0; n < t.length; n++) e.call(t[n], t[n], n);
        else if (Re(t))
            for (o in t) Be.call(t, o) && e.call(t[o], t[o], o);
        return t
    }
    var Xe = Object.assign || function(t) {
        return Pe.call(arguments, 1).forEach(function(e) {
            Ye(t, e)
        }), t
    };

    function qe(t) {
        return Pe.call(arguments, 1).forEach(function(e) {
            Ye(t, e, !0)
        }), t
    }

    function Ye(t, e, n) {
        for (var o in e) n && (ze(e[o]) || Me(e[o])) ? (ze(e[o]) && !ze(t[o]) && (t[o] = {}), Me(e[o]) && !Me(t[o]) && (t[o] = []), Ye(t[o], e[o], n)) : void 0 !== e[o] && (t[o] = e[o])
    }

    function Je(t, e, n) {
        var o = function(t) {
                var e = ["+", "#", ".", "/", ";", "?", "&"],
                    n = [];
                return {
                    vars: n,
                    expand: function(o) {
                        return t.replace(/\{([^{}]+)\}|([^{}]+)/g, function(t, r, i) {
                            if (r) {
                                var a = null,
                                    s = [];
                                if (-1 !== e.indexOf(r.charAt(0)) && (a = r.charAt(0), r = r.substr(1)), r.split(/,/g).forEach(function(t) {
                                        var e = /([^:*]*)(?::(\d+)|(\*))?/.exec(t);
                                        s.push.apply(s, function(t, e, n, o) {
                                            var r = t[n],
                                                i = [];
                                            if (Ge(r) && "" !== r)
                                                if ("string" == typeof r || "number" == typeof r || "boolean" == typeof r) r = r.toString(), o && "*" !== o && (r = r.substring(0, parseInt(o, 10))), i.push(Ze(e, r, Ke(e) ? n : null));
                                                else if ("*" === o) Array.isArray(r) ? r.filter(Ge).forEach(function(t) {
                                                i.push(Ze(e, t, Ke(e) ? n : null))
                                            }) : Object.keys(r).forEach(function(t) {
                                                Ge(r[t]) && i.push(Ze(e, r[t], t))
                                            });
                                            else {
                                                var a = [];
                                                Array.isArray(r) ? r.filter(Ge).forEach(function(t) {
                                                    a.push(Ze(e, t))
                                                }) : Object.keys(r).forEach(function(t) {
                                                    Ge(r[t]) && (a.push(encodeURIComponent(t)), a.push(Ze(e, r[t].toString())))
                                                }), Ke(e) ? i.push(encodeURIComponent(n) + "=" + a.join(",")) : 0 !== a.length && i.push(a.join(","))
                                            } else ";" === e ? i.push(encodeURIComponent(n)) : "" !== r || "&" !== e && "?" !== e ? "" === r && i.push("") : i.push(encodeURIComponent(n) + "=");
                                            return i
                                        }(o, a, e[1], e[2] || e[3])), n.push(e[1])
                                    }), a && "+" !== a) {
                                    var l = ",";
                                    return "?" === a ? l = "&" : "#" !== a && (l = a), (0 !== s.length ? a : "") + s.join(l)
                                }
                                return s.join(",")
                            }
                            return Qe(i)
                        })
                    }
                }
            }(t),
            r = o.expand(e);
        return n && n.push.apply(n, o.vars), r
    }

    function Ge(t) {
        return void 0 !== t && null !== t
    }

    function Ke(t) {
        return ";" === t || "&" === t || "?" === t
    }

    function Ze(t, e, n) {
        return e = "+" === t || "#" === t ? Qe(e) : encodeURIComponent(e), n ? encodeURIComponent(n) + "=" + e : e
    }

    function Qe(t) {
        return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t) {
            return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t)), t
        }).join("")
    }

    function tn(t, e) {
        var n, o = this || {},
            r = t;
        return Fe(t) && (r = {
            url: t,
            params: e
        }), r = qe({}, tn.options, o.$options, r), tn.transforms.forEach(function(t) {
            Fe(t) && (t = tn.transform[t]), Ue(t) && (n = function(t, e, n) {
                return function(o) {
                    return t.call(n, o, e)
                }
            }(t, n, o.$vm))
        }), n(r)
    }

    function en(t) {
        return new Oe(function(e) {
            var n = new XDomainRequest,
                o = function(o) {
                    var r = o.type,
                        i = 0;
                    "load" === r ? i = 200 : "error" === r && (i = 500), e(t.respondWith(n.responseText, {
                        status: i
                    }))
                };
            t.abort = function() {
                return n.abort()
            }, n.open(t.method, t.getUrl()), t.timeout && (n.timeout = t.timeout), n.onload = o, n.onabort = o, n.onerror = o, n.ontimeout = o, n.onprogress = function() {}, n.send(t.getBody())
        })
    }
    tn.options = {
        url: "",
        root: null,
        params: {}
    }, tn.transform = {
        template: function(t) {
            var e = [],
                n = Je(t.url, t.params, e);
            return e.forEach(function(e) {
                delete t.params[e]
            }), n
        },
        query: function(t, e) {
            var n = Object.keys(tn.options.params),
                o = {},
                r = e(t);
            return He(t.params, function(t, e) {
                -1 === n.indexOf(e) && (o[e] = t)
            }), (o = tn.params(o)) && (r += (-1 == r.indexOf("?") ? "?" : "&") + o), r
        },
        root: function(t, e) {
            var n, o, r = e(t);
            return Fe(t.root) && !/^(https?:)?\//.test(r) && (n = t.root, o = "/", r = (n && void 0 === o ? n.replace(/\s+$/, "") : n && o ? n.replace(new RegExp("[" + o + "]+$"), "") : n) + "/" + r), r
        }
    }, tn.transforms = ["template", "query", "root"], tn.params = function(t) {
        var e = [],
            n = encodeURIComponent;
        return e.add = function(t, e) {
                Ue(e) && (e = e()), null === e && (e = ""), this.push(n(t) + "=" + n(e))
            },
            function t(e, n, o) {
                var r, i = Me(n),
                    a = ze(n);
                He(n, function(n, s) {
                    r = Re(n) || Me(n), o && (s = o + "[" + (a || r ? s : "") + "]"), !o && i ? e.add(n.name, n.value) : r ? t(e, n, s) : e.add(s, n)
                })
            }(e, t), e.join("&").replace(/%20/g, "+")
    }, tn.parse = function(t) {
        var e = document.createElement("a");
        return document.documentMode && (e.href = t, t = e.href), e.href = t, {
            href: e.href,
            protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
            port: e.port,
            host: e.host,
            hostname: e.hostname,
            pathname: "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname,
            search: e.search ? e.search.replace(/^\?/, "") : "",
            hash: e.hash ? e.hash.replace(/^#/, "") : ""
        }
    };
    var nn = Ne && "withCredentials" in new XMLHttpRequest;

    function on(t) {
        return new Oe(function(e) {
            var n, o, r = t.jsonp || "callback",
                i = t.jsonpCallback || "_jsonp" + Math.random().toString(36).substr(2),
                a = null;
            n = function(n) {
                var r = n.type,
                    s = 0;
                "load" === r && null !== a ? s = 200 : "error" === r && (s = 500), s && window[i] && (delete window[i], document.body.removeChild(o)), e(t.respondWith(a, {
                    status: s
                }))
            }, window[i] = function(t) {
                a = JSON.stringify(t)
            }, t.abort = function() {
                n({
                    type: "abort"
                })
            }, t.params[r] = i, t.timeout && setTimeout(t.abort, t.timeout), (o = document.createElement("script")).src = t.getUrl(), o.type = "text/javascript", o.async = !0, o.onload = n, o.onerror = n, document.body.appendChild(o)
        })
    }

    function rn(t) {
        return new Oe(function(e) {
            var n = new XMLHttpRequest,
                o = function(o) {
                    var r = t.respondWith("response" in n ? n.response : n.responseText, {
                        status: 1223 === n.status ? 204 : n.status,
                        statusText: 1223 === n.status ? "No Content" : De(n.statusText)
                    });
                    He(De(n.getAllResponseHeaders()).split("\n"), function(t) {
                        r.headers.append(t.slice(0, t.indexOf(":")), t.slice(t.indexOf(":") + 1))
                    }), e(r)
                };
            t.abort = function() {
                return n.abort()
            }, n.open(t.method, t.getUrl(), !0), t.timeout && (n.timeout = t.timeout), t.responseType && "responseType" in n && (n.responseType = t.responseType), (t.withCredentials || t.credentials) && (n.withCredentials = !0), t.crossOrigin || t.headers.set("X-Requested-With", "XMLHttpRequest"), Ue(t.progress) && "GET" === t.method && n.addEventListener("progress", t.progress), Ue(t.downloadProgress) && n.addEventListener("progress", t.downloadProgress), Ue(t.progress) && /^(POST|PUT)$/i.test(t.method) && n.upload.addEventListener("progress", t.progress), Ue(t.uploadProgress) && n.upload && n.upload.addEventListener("progress", t.uploadProgress), t.headers.forEach(function(t, e) {
                n.setRequestHeader(e, t)
            }), n.onload = o, n.onabort = o, n.onerror = o, n.ontimeout = o, n.send(t.getBody())
        })
    }

    function an(t) {
        var e = n(25);
        return new Oe(function(n) {
            var o, r = t.getUrl(),
                i = t.getBody(),
                a = t.method,
                s = {};
            t.headers.forEach(function(t, e) {
                s[e] = t
            }), e(r, {
                body: i,
                method: a,
                headers: s
            }).then(o = function(e) {
                var o = t.respondWith(e.body, {
                    status: e.statusCode,
                    statusText: De(e.statusMessage)
                });
                He(e.headers, function(t, e) {
                    o.headers.set(e, t)
                }), n(o)
            }, function(t) {
                return o(t.response)
            })
        })
    }

    function sn(t) {
        return (t.client || (Ne ? rn : an))(t)
    }
    var ln = function(t) {
        var e = this;
        this.map = {}, He(t, function(t, n) {
            return e.append(n, t)
        })
    };

    function cn(t, e) {
        return Object.keys(t).reduce(function(t, n) {
            return Ie(e) === Ie(n) ? n : t
        }, null)
    }
    ln.prototype.has = function(t) {
        return null !== cn(this.map, t)
    }, ln.prototype.get = function(t) {
        var e = this.map[cn(this.map, t)];
        return e ? e.join() : null
    }, ln.prototype.getAll = function(t) {
        return this.map[cn(this.map, t)] || []
    }, ln.prototype.set = function(t, e) {
        this.map[function(t) {
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return De(t)
        }(cn(this.map, t) || t)] = [De(e)]
    }, ln.prototype.append = function(t, e) {
        var n = this.map[cn(this.map, t)];
        n ? n.push(De(e)) : this.set(t, e)
    }, ln.prototype.delete = function(t) {
        delete this.map[cn(this.map, t)]
    }, ln.prototype.deleteAll = function() {
        this.map = {}
    }, ln.prototype.forEach = function(t, e) {
        var n = this;
        He(this.map, function(o, r) {
            He(o, function(o) {
                return t.call(e, o, r, n)
            })
        })
    };
    var un = function(t, e) {
        var n = e.url,
            o = e.headers,
            r = e.status,
            i = e.statusText;
        this.url = n, this.ok = r >= 200 && r < 300, this.status = r || 0, this.statusText = i || "", this.headers = new ln(o), this.body = t, Fe(t) ? this.bodyText = t : "undefined" != typeof Blob && t instanceof Blob && (this.bodyBlob = t, function(t) {
            return 0 === t.type.indexOf("text") || -1 !== t.type.indexOf("json")
        }(t) && (this.bodyText = function(t) {
            return new Oe(function(e) {
                var n = new FileReader;
                n.readAsText(t), n.onload = function() {
                    e(n.result)
                }
            })
        }(t)))
    };
    un.prototype.blob = function() {
        return Ve(this.bodyBlob)
    }, un.prototype.text = function() {
        return Ve(this.bodyText)
    }, un.prototype.json = function() {
        return Ve(this.text(), function(t) {
            return JSON.parse(t)
        })
    }, Object.defineProperty(un.prototype, "data", {
        get: function() {
            return this.body
        },
        set: function(t) {
            this.body = t
        }
    });
    var dn = function(t) {
        var e;
        this.body = null, this.params = {}, Xe(this, t, {
            method: (e = t.method || "GET", e ? e.toUpperCase() : "")
        }), this.headers instanceof ln || (this.headers = new ln(this.headers))
    };
    dn.prototype.getUrl = function() {
        return tn(this)
    }, dn.prototype.getBody = function() {
        return this.body
    }, dn.prototype.respondWith = function(t, e) {
        return new un(t, Xe(e || {}, {
            url: this.getUrl()
        }))
    };
    var pn = {
        "Content-Type": "application/json;charset=utf-8"
    };

    function fn(t) {
        var e = this || {},
            n = function(t) {
                var e = [sn],
                    n = [];

                function o(o) {
                    for (; e.length;) {
                        var r = e.pop();
                        if (Ue(r)) {
                            var i = void 0,
                                a = void 0;
                            if (Re(i = r.call(t, o, function(t) {
                                    return a = t
                                }) || a)) return new Oe(function(e, o) {
                                n.forEach(function(e) {
                                    i = Ve(i, function(n) {
                                        return e.call(t, n) || n
                                    }, o)
                                }), Ve(i, e, o)
                            }, t);
                            Ue(i) && n.unshift(i)
                        } else s = "Invalid interceptor of type " + typeof r + ", must be a function", "undefined" != typeof console && je && console.warn("[VueResource warn]: " + s)
                    }
                    var s
                }
                return Re(t) || (t = null), o.use = function(t) {
                    e.push(t)
                }, o
            }(e.$vm);
        return function(t) {
            Pe.call(arguments, 1).forEach(function(e) {
                for (var n in e) void 0 === t[n] && (t[n] = e[n])
            })
        }(t || {}, e.$options, fn.options), fn.interceptors.forEach(function(t) {
            Fe(t) && (t = fn.interceptor[t]), Ue(t) && n.use(t)
        }), n(new dn(t)).then(function(t) {
            return t.ok ? t : Oe.reject(t)
        }, function(t) {
            var e;
            return t instanceof Error && (e = t, "undefined" != typeof console && console.error(e)), Oe.reject(t)
        })
    }

    function hn(t, e, n, o) {
        var r = this || {},
            i = {};
        return He(n = Xe({}, hn.actions, n), function(n, a) {
            n = qe({
                url: t,
                params: Xe({}, e)
            }, o, n), i[a] = function() {
                return (r.$http || fn)(function(t, e) {
                    var n, o = Xe({}, t),
                        r = {};
                    switch (e.length) {
                        case 2:
                            r = e[0], n = e[1];
                            break;
                        case 1:
                            /^(POST|PUT|PATCH)$/i.test(o.method) ? n = e[0] : r = e[0];
                            break;
                        case 0:
                            break;
                        default:
                            throw "Expected up to 2 arguments [params, body], got " + e.length + " arguments"
                    }
                    return o.body = n, o.params = Xe({}, o.params, r), o
                }(n, arguments))
            }
        }), i
    }

    function mn(t) {
        var e, n, o;
        mn.installed || (n = (e = t).config, o = e.nextTick, Le = o, je = n.debug || !n.silent, t.url = tn, t.http = fn, t.resource = hn, t.Promise = Oe, Object.defineProperties(t.prototype, {
            $url: {
                get: function() {
                    return We(t.url, this, this.$options.url)
                }
            },
            $http: {
                get: function() {
                    return We(t.http, this, this.$options.http)
                }
            },
            $resource: {
                get: function() {
                    return t.resource.bind(this)
                }
            },
            $promise: {
                get: function() {
                    var e = this;
                    return function(n) {
                        return new t.Promise(n, e)
                    }
                }
            }
        }))
    }
    fn.options = {}, fn.headers = {
        put: pn,
        post: pn,
        patch: pn,
        delete: pn,
        common: {
            Accept: "application/json, text/plain, */*"
        },
        custom: {}
    }, fn.interceptor = {
        before: function(t) {
            Ue(t.before) && t.before.call(this, t)
        },
        method: function(t) {
            t.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(t.method) && (t.headers.set("X-HTTP-Method-Override", t.method), t.method = "POST")
        },
        jsonp: function(t) {
            "JSONP" == t.method && (t.client = on)
        },
        json: function(t) {
            var e = t.headers.get("Content-Type") || "";
            return Re(t.body) && 0 === e.indexOf("application/json") && (t.body = JSON.stringify(t.body)),
                function(t) {
                    return t.bodyText ? Ve(t.text(), function(e) {
                        var n, o;
                        if (0 === (t.headers.get("Content-Type") || "").indexOf("application/json") || (o = (n = e).match(/^\s*(\[|\{)/)) && {
                                "[": /]\s*$/,
                                "{": /}\s*$/
                            } [o[1]].test(n)) try {
                            t.body = JSON.parse(e)
                        } catch (e) {
                            t.body = null
                        } else t.body = e;
                        return t
                    }) : t
                }
        },
        form: function(t) {
            var e;
            e = t.body, "undefined" != typeof FormData && e instanceof FormData ? t.headers.delete("Content-Type") : Re(t.body) && t.emulateJSON && (t.body = tn.params(t.body), t.headers.set("Content-Type", "application/x-www-form-urlencoded"))
        },
        header: function(t) {
            He(Xe({}, fn.headers.common, t.crossOrigin ? {} : fn.headers.custom, fn.headers[Ie(t.method)]), function(e, n) {
                t.headers.has(n) || t.headers.set(n, e)
            })
        },
        cors: function(t) {
            if (Ne) {
                var e = tn.parse(location.href),
                    n = tn.parse(t.getUrl());
                n.protocol === e.protocol && n.host === e.host || (t.crossOrigin = !0, t.emulateHTTP = !1, nn || (t.client = en))
            }
        }
    }, fn.interceptors = ["before", "method", "jsonp", "json", "form", "header", "cors"], ["get", "delete", "head", "jsonp"].forEach(function(t) {
        fn[t] = function(e, n) {
            return this(Xe(n || {}, {
                url: e,
                method: t
            }))
        }
    }), ["post", "put", "patch"].forEach(function(t) {
        fn[t] = function(e, n, o) {
            return this(Xe(o || {}, {
                url: e,
                method: t,
                body: n
            }))
        }
    }), hn.actions = {
        get: {
            method: "GET"
        },
        save: {
            method: "POST"
        },
        query: {
            method: "GET"
        },
        update: {
            method: "PUT"
        },
        remove: {
            method: "DELETE"
        },
        delete: {
            method: "DELETE"
        }
    }, "undefined" != typeof window && window.Vue && window.Vue.use(mn);
    var vn = mn,
        _n = n(7),
        gn = n(8),
        bn = n(9);
    o.a.use(vn), o.a.component("app-hr", bn.a.hr);
    var yn = new o.a({
        store: _n.a,
        i18n: gn.a,
        render: t => t($e)
    }).$mount("#app_main");
    e.default = yn;
    chrome.runtime.onMessage.addListener(function(t) {
        "need-refresh-data" == t.action && window.location.reload()
    })
}, , , , function(t, e) {}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n#app-board-navigation ul {\n  position: fixed;\n  left: 50%;\n  bottom: 0;\n  text-align: center;\n  list-style: none;\n  padding: 10px;\n  margin: 0;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  color: #fff;\n}\n#app-board-navigation ul li {\n    display: inline-block;\n    width: 35px;\n    height: 7px;\n    background: rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    margin: 0 3px;\n    cursor: pointer;\n}\n#app-board-navigation ul li span {\n      display: none;\n}\n#app-board-navigation ul li.active {\n      width: 70px;\n      background: rgba(255, 255, 255, 0.6) !important;\n      color: #000;\n}\n#app-board-navigation ul li.boards-setting {\n      display: none;\n}\n#app-board-navigation ul:hover {\n    width: 90%;\n}\n#app-board-navigation ul:hover li {\n      width: auto;\n      height: auto;\n      padding: 4px 11px;\n      background: rgba(0, 0, 0, 0.4);\n      margin-top: 5px;\n}\n#app-board-navigation ul:hover li span {\n        display: inline;\n}\n#app-board-navigation ul:hover .boards-setting {\n      display: inline-block;\n}\n.board-navigation-tooltip {\n  position: fixed;\n  bottom: 50px;\n  left: 50%;\n  width: auto;\n  height: auto;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  border-radius: 6px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  font-size: 16px;\n  line-height: 1em;\n  padding: 7px 20px;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n", ""])
}, function(t, e, n) {
    var o = n(26);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("115c6bb2", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.favicon-prev {\n  width: 16px;\n  top: 32px;\n  left: 10px;\n  position: absolute;\n}\n.select-in-active-tabs {\n  margin-bottom: 5px;\n  position: relative;\n}\n.select-in-active-tabs .input-group-addon {\n    font-size: 16px;\n}\n.select-in-active-tabs img {\n    width: 16px;\n    top: 9px;\n    left: 46px;\n    position: absolute;\n    z-index: 22;\n}\n.select-in-active-tabs input {\n    padding-left: 30px;\n}\n.select-all {\n  color: #F06292;\n  border-bottom: 1px dashed #F48FB1;\n  cursor: pointer;\n  margin-right: 15px;\n}\n", ""])
}, function(t, e, n) {
    var o = n(28);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("6af13453", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.link {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  background: #ffffff;\n  border-radius: 3px;\n  padding: 0 7px 0 29px;\n  cursor: pointer;\n  position: relative;\n  margin-bottom: 5px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.link img, .link .website-icon {\n    position: absolute;\n    top: 7px;\n    left: 7px;\n    width: 16px;\n    height: 16px;\n    background-size: 100%;\n}\n.link.sortable-ghost {\n    background: #fff888;\n}\n.link.sortable-chosen {\n    background: #fff888;\n}\n.link:hover {\n    background: #f1f1f1;\n    box-shadow: 0 1px 2px #B0BEC5;\n}\n.add-first-link {\n  background-color: #eceff1;\n  border-radius: 4px;\n  padding: 9px 3px;\n  margin-bottom: 5px;\n  font-size: 12px;\n  color: #546E7A;\n}\n", ""])
}, function(t, e, n) {
    var o = n(30);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("f836ee90", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.new_list .links-container {\n  animation-name: shake-slow;\n  animation-duration: 1s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n}\n.links-container {\n  position: relative;\n  border-radius: 5px;\n  background: #cfd8dc;\n  margin-bottom: 15px;\n}\n.links-container-menu {\n    position: absolute;\n    top: 0;\n    left: 100%;\n    padding: 0 10px;\n}\n.links-container-menu-last-col {\n      left: auto;\n      right: 100%;\n      text-align: right;\n}\n.links-container-menu .btn {\n      margin-bottom: 5px;\n}\n.links-container-menu .btn-group {\n      white-space: nowrap;\n}\n.links-container-menu .btn-group .btn {\n        float: none;\n        display: inline-block;\n}\n.links-container.sortable-ghost {\n    background: #fff888;\n}\n.links-container-header {\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -webkit-user-select: none;\n}\n.links-container-header:hover .btn {\n      display: block;\n}\n.links-container-header input {\n      width: 100%;\n      height: 22px;\n      line-height: 22px;\n      border: none;\n      padding: 3px;\n      border-radius: 2px;\n      margin: -3px 0;\n      position: relative;\n      z-index: 99;\n}\n.links-container-header .title-btns {\n      position: absolute;\n      top: 6px;\n      right: 10px;\n      display: none;\n}\n.links-container-header .title-btns .btn {\n        background-color: #edeff1;\n        color: #444;\n        padding: 1px 4px;\n        font-size: 12px;\n}\n.links-container-title {\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 1.2em;\n    padding: 8px 10px;\n}\n.links-container-body {\n    padding: 0 10px 5px;\n}\n.links-container-body .no-items {\n      min-height: 25px;\n      margin-top: -25px;\n      top: 25px;\n      position: relative;\n      z-index: 99;\n}\n.links-container:hover .title-btns {\n    display: block;\n}\n", ""])
}, function(t, e, n) {
    var o = n(32);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("5919d212", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n#app-board {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  min-width: 200px;\n}\n.columns-dropzone {\n  min-height: 300px;\n  padding-bottom: 45px;\n}\n._board_cols {\n  float: left;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n", ""])
}, function(t, e, n) {
    var o = n(34);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("5d3ef792", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.select-actual-data .row {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-size: 12px;\n}\n.select-actual-data button {\n  width: 100%;\n  font-size: 16px;\n  margin-bottom: 5px;\n  padding: 8px 12px;\n}\n.select-actual-data button .fa:first-child {\n    font-size: 24px;\n}\n.select-actual-data .fa-arrow-down {\n  font-size: 11px;\n  color: #4CAF50;\n}\n.form-errors {\n  color: #d33;\n  font-size: 12px;\n}\n.clound-block-loading {\n  padding-top: 56px;\n  height: 178px;\n  text-align: center;\n  font-weight: bold;\n}\n.clound-block-last_sync_time {\n  font-size: 12px;\n  margin-top: -5px;\n  line-height: 1.3em;\n}\n.clound-block-info {\n  font-size: 12px;\n  line-height: 1.3em;\n  opacity: .7;\n}\n", ""])
}, function(t, e, n) {
    var o = n(36);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("0ca9da10", o, !1, {})
}, function(t, e, n) {
    var o, r;
    /**!
     * Sortable
     * @author	RubaXa   <trash@rubaxa.org>
     * @license MIT
     */
    /**!
     * Sortable
     * @author	RubaXa   <trash@rubaxa.org>
     * @license MIT
     */
    ! function(i) {
        "use strict";
        void 0 === (r = "function" == typeof(o = i) ? o.call(e, n, e, t) : o) || (t.exports = r)
    }(function() {
        "use strict";
        if ("undefined" == typeof window || !window.document) return function() {
            throw new Error("Sortable.js requires a window with a document")
        };
        var t, e, n, o, r, i, a, s, l, c, u, d, p, f, h, m, v, _, g, b, y, w = {},
            k = /\s+/g,
            x = /left|right|inline/,
            C = "Sortable" + (new Date).getTime(),
            $ = window,
            S = $.document,
            T = $.parseInt,
            E = $.setTimeout,
            O = $.jQuery || $.Zepto,
            A = $.Polymer,
            L = !1,
            B = "draggable" in S.createElement("div"),
            P = !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((y = S.createElement("x")).style.cssText = "pointer-events:auto", "auto" === y.style.pointerEvents),
            j = !1,
            N = Math.abs,
            D = Math.min,
            I = [],
            M = [],
            F = ot(function(t, e, n) {
                if (n && e.scroll) {
                    var o, r, i, a, u, d, p = n[C],
                        f = e.scrollSensitivity,
                        h = e.scrollSpeed,
                        m = t.clientX,
                        v = t.clientY,
                        _ = window.innerWidth,
                        g = window.innerHeight;
                    if (l !== n && (s = e.scroll, l = n, c = e.scrollFn, !0 === s)) {
                        s = n;
                        do {
                            if (s.offsetWidth < s.scrollWidth || s.offsetHeight < s.scrollHeight) break
                        } while (s = s.parentNode)
                    }
                    s && (o = s, r = s.getBoundingClientRect(), i = (N(r.right - m) <= f) - (N(r.left - m) <= f), a = (N(r.bottom - v) <= f) - (N(r.top - v) <= f)), i || a || (a = (g - v <= f) - (v <= f), ((i = (_ - m <= f) - (m <= f)) || a) && (o = $)), w.vx === i && w.vy === a && w.el === o || (w.el = o, w.vx = i, w.vy = a, clearInterval(w.pid), o && (w.pid = setInterval(function() {
                        if (d = a ? a * h : 0, u = i ? i * h : 0, "function" == typeof c) return c.call(p, u, d, t);
                        o === $ ? $.scrollTo($.pageXOffset + u, $.pageYOffset + d) : (o.scrollTop += d, o.scrollLeft += u)
                    }, 24)))
                }
            }, 30),
            U = function(t) {
                function e(t, e) {
                    return void 0 !== t && !0 !== t || (t = n.name), "function" == typeof t ? t : function(n, o) {
                        var r = o.options.group.name;
                        return e ? t : t && (t.join ? t.indexOf(r) > -1 : r == t)
                    }
                }
                var n = {},
                    o = t.group;
                o && "object" == typeof o || (o = {
                    name: o
                }), n.name = o.name, n.checkPull = e(o.pull, !0), n.checkPut = e(o.put), n.revertClone = o.revertClone, t.group = n
            };
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: function() {
                    L = {
                        capture: !1,
                        passive: !1
                    }
                }
            }))
        } catch (t) {}

        function R(t, e) {
            if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(t);
            this.el = t, this.options = e = rt({}, e), t[C] = this;
            var n = {
                group: Math.random(),
                sort: !0,
                disabled: !1,
                store: null,
                handle: null,
                scroll: !0,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                draggable: /[uo]l/i.test(t.nodeName) ? "li" : ">*",
                ghostClass: "sortable-ghost",
                chosenClass: "sortable-chosen",
                dragClass: "sortable-drag",
                ignore: "a, img",
                filter: null,
                preventOnFilter: !0,
                animation: 0,
                setData: function(t, e) {
                    t.setData("Text", e.textContent)
                },
                dropBubble: !1,
                dragoverBubble: !1,
                dataIdAttr: "data-id",
                delay: 0,
                forceFallback: !1,
                fallbackClass: "sortable-fallback",
                fallbackOnBody: !1,
                fallbackTolerance: 0,
                fallbackOffset: {
                    x: 0,
                    y: 0
                },
                supportPointer: !1 !== R.supportPointer
            };
            for (var o in n) !(o in e) && (e[o] = n[o]);
            for (var r in U(e), this) "_" === r.charAt(0) && "function" == typeof this[r] && (this[r] = this[r].bind(this));
            this.nativeDraggable = !e.forceFallback && B, H(t, "mousedown", this._onTapStart), H(t, "touchstart", this._onTapStart), e.supportPointer && H(t, "pointerdown", this._onTapStart), this.nativeDraggable && (H(t, "dragover", this), H(t, "dragenter", this)), M.push(this._onDragOver), e.store && this.sort(e.store.get(this))
        }

        function z(e, n) {
            "clone" !== e.lastPullMode && (n = !0), o && o.state !== n && (Y(o, "display", n ? "none" : ""), n || o.state && (e.options.group.revertClone ? (r.insertBefore(o, i), e._animate(t, o)) : r.insertBefore(o, t)), o.state = n)
        }

        function V(t, e, n) {
            if (t) {
                n = n || S;
                do {
                    if (">*" === e && t.parentNode === n || nt(t, e)) return t
                } while (t = W(t))
            }
            return null
        }

        function W(t) {
            var e = t.host;
            return e && e.nodeType ? e : t.parentNode
        }

        function H(t, e, n) {
            t.addEventListener(e, n, L)
        }

        function X(t, e, n) {
            t.removeEventListener(e, n, L)
        }

        function q(t, e, n) {
            if (t)
                if (t.classList) t.classList[n ? "add" : "remove"](e);
                else {
                    var o = (" " + t.className + " ").replace(k, " ").replace(" " + e + " ", " ");
                    t.className = (o + (n ? " " + e : "")).replace(k, " ")
                }
        }

        function Y(t, e, n) {
            var o = t && t.style;
            if (o) {
                if (void 0 === n) return S.defaultView && S.defaultView.getComputedStyle ? n = S.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
                e in o || (e = "-webkit-" + e), o[e] = n + ("string" == typeof n ? "" : "px")
            }
        }

        function J(t, e, n) {
            if (t) {
                var o = t.getElementsByTagName(e),
                    r = 0,
                    i = o.length;
                if (n)
                    for (; r < i; r++) n(o[r], r);
                return o
            }
            return []
        }

        function G(t, e, n, r, i, a, s, l) {
            t = t || e[C];
            var c = S.createEvent("Event"),
                u = t.options,
                d = "on" + n.charAt(0).toUpperCase() + n.substr(1);
            c.initEvent(n, !0, !0), c.to = i || e, c.from = a || e, c.item = r || e, c.clone = o, c.oldIndex = s, c.newIndex = l, e.dispatchEvent(c), u[d] && u[d].call(t, c)
        }

        function K(t, e, n, o, r, i, a, s) {
            var l, c, u = t[C],
                d = u.options.onMove;
            return (l = S.createEvent("Event")).initEvent("move", !0, !0), l.to = e, l.from = t, l.dragged = n, l.draggedRect = o, l.related = r || e, l.relatedRect = i || e.getBoundingClientRect(), l.willInsertAfter = s, t.dispatchEvent(l), d && (c = d.call(u, l, a)), c
        }

        function Z(t) {
            t.draggable = !1
        }

        function Q() {
            j = !1
        }

        function tt(t) {
            for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--;) o += e.charCodeAt(n);
            return o.toString(36)
        }

        function et(t, e) {
            var n = 0;
            if (!t || !t.parentNode) return -1;
            for (; t && (t = t.previousElementSibling);) "TEMPLATE" === t.nodeName.toUpperCase() || ">*" !== e && !nt(t, e) || n++;
            return n
        }

        function nt(t, e) {
            if (t) {
                var n = (e = e.split(".")).shift().toUpperCase(),
                    o = new RegExp("\\s(" + e.join("|") + ")(?=\\s)", "g");
                return !("" !== n && t.nodeName.toUpperCase() != n || e.length && ((" " + t.className + " ").match(o) || []).length != e.length)
            }
            return !1
        }

        function ot(t, e) {
            var n, o;
            return function() {
                void 0 === n && (n = arguments, o = this, E(function() {
                    1 === n.length ? t.call(o, n[0]) : t.apply(o, n), n = void 0
                }, e))
            }
        }

        function rt(t, e) {
            if (t && e)
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        function it(t) {
            return A && A.dom ? A.dom(t).cloneNode(!0) : O ? O(t).clone(!0)[0] : t.cloneNode(!0)
        }

        function at(t) {
            return E(t, 0)
        }

        function st(t) {
            return clearTimeout(t)
        }
        return R.prototype = {
            constructor: R,
            _onTapStart: function(e) {
                var n, o = this,
                    r = this.el,
                    i = this.options,
                    s = i.preventOnFilter,
                    l = e.type,
                    c = e.touches && e.touches[0],
                    u = (c || e).target,
                    d = e.target.shadowRoot && e.path && e.path[0] || u,
                    p = i.filter;
                if (function(t) {
                        var e = t.getElementsByTagName("input"),
                            n = e.length;
                        for (; n--;) {
                            var o = e[n];
                            o.checked && I.push(o)
                        }
                    }(r), !t && !(/mousedown|pointerdown/.test(l) && 0 !== e.button || i.disabled) && !d.isContentEditable && (u = V(u, i.draggable, r)) && a !== u) {
                    if (n = et(u, i.draggable), "function" == typeof p) {
                        if (p.call(this, e, u, this)) return G(o, d, "filter", u, r, r, n), void(s && e.preventDefault())
                    } else if (p && (p = p.split(",").some(function(t) {
                            if (t = V(d, t.trim(), r)) return G(o, t, "filter", u, r, r, n), !0
                        }))) return void(s && e.preventDefault());
                    i.handle && !V(d, i.handle, r) || this._prepareDragStart(e, c, u, n)
                }
            },
            _prepareDragStart: function(n, o, s, l) {
                var c, u = this,
                    d = u.el,
                    p = u.options,
                    h = d.ownerDocument;
                s && !t && s.parentNode === d && (_ = n, r = d, e = (t = s).parentNode, i = t.nextSibling, a = s, m = p.group, f = l, this._lastX = (o || n).clientX, this._lastY = (o || n).clientY, t.style["will-change"] = "all", c = function() {
                    u._disableDelayedDrag(), t.draggable = u.nativeDraggable, q(t, p.chosenClass, !0), u._triggerDragStart(n, o), G(u, r, "choose", t, r, r, f)
                }, p.ignore.split(",").forEach(function(e) {
                    J(t, e.trim(), Z)
                }), H(h, "mouseup", u._onDrop), H(h, "touchend", u._onDrop), H(h, "touchcancel", u._onDrop), H(h, "selectstart", u), p.supportPointer && H(h, "pointercancel", u._onDrop), p.delay ? (H(h, "mouseup", u._disableDelayedDrag), H(h, "touchend", u._disableDelayedDrag), H(h, "touchcancel", u._disableDelayedDrag), H(h, "mousemove", u._disableDelayedDrag), H(h, "touchmove", u._disableDelayedDrag), p.supportPointer && H(h, "pointermove", u._disableDelayedDrag), u._dragStartTimer = E(c, p.delay)) : c())
            },
            _disableDelayedDrag: function() {
                var t = this.el.ownerDocument;
                clearTimeout(this._dragStartTimer), X(t, "mouseup", this._disableDelayedDrag), X(t, "touchend", this._disableDelayedDrag), X(t, "touchcancel", this._disableDelayedDrag), X(t, "mousemove", this._disableDelayedDrag), X(t, "touchmove", this._disableDelayedDrag), X(t, "pointermove", this._disableDelayedDrag)
            },
            _triggerDragStart: function(e, n) {
                (n = n || ("touch" == e.pointerType ? e : null)) ? (_ = {
                    target: t,
                    clientX: n.clientX,
                    clientY: n.clientY
                }, this._onDragStart(_, "touch")) : this.nativeDraggable ? (H(t, "dragend", this), H(r, "dragstart", this._onDragStart)) : this._onDragStart(_, !0);
                try {
                    S.selection ? at(function() {
                        S.selection.empty()
                    }) : window.getSelection().removeAllRanges()
                } catch (t) {}
            },
            _dragStarted: function() {
                if (r && t) {
                    var e = this.options;
                    q(t, e.ghostClass, !0), q(t, e.dragClass, !1), R.active = this, G(this, r, "start", t, r, r, f)
                } else this._nulling()
            },
            _emulateDragOver: function() {
                if (g) {
                    if (this._lastX === g.clientX && this._lastY === g.clientY) return;
                    this._lastX = g.clientX, this._lastY = g.clientY, P || Y(n, "display", "none");
                    var t = S.elementFromPoint(g.clientX, g.clientY),
                        e = t,
                        o = M.length;
                    if (t && t.shadowRoot && (e = t = t.shadowRoot.elementFromPoint(g.clientX, g.clientY)), e)
                        do {
                            if (e[C]) {
                                for (; o--;) M[o]({
                                    clientX: g.clientX,
                                    clientY: g.clientY,
                                    target: t,
                                    rootEl: e
                                });
                                break
                            }
                            t = e
                        } while (e = e.parentNode);
                    P || Y(n, "display", "")
                }
            },
            _onTouchMove: function(t) {
                if (_) {
                    var e = this.options,
                        o = e.fallbackTolerance,
                        r = e.fallbackOffset,
                        i = t.touches ? t.touches[0] : t,
                        a = i.clientX - _.clientX + r.x,
                        s = i.clientY - _.clientY + r.y,
                        l = t.touches ? "translate3d(" + a + "px," + s + "px,0)" : "translate(" + a + "px," + s + "px)";
                    if (!R.active) {
                        if (o && D(N(i.clientX - this._lastX), N(i.clientY - this._lastY)) < o) return;
                        this._dragStarted()
                    }
                    this._appendGhost(), b = !0, g = i, Y(n, "webkitTransform", l), Y(n, "mozTransform", l), Y(n, "msTransform", l), Y(n, "transform", l), t.preventDefault()
                }
            },
            _appendGhost: function() {
                if (!n) {
                    var e, o = t.getBoundingClientRect(),
                        i = Y(t),
                        a = this.options;
                    q(n = t.cloneNode(!0), a.ghostClass, !1), q(n, a.fallbackClass, !0), q(n, a.dragClass, !0), Y(n, "top", o.top - T(i.marginTop, 10)), Y(n, "left", o.left - T(i.marginLeft, 10)), Y(n, "width", o.width), Y(n, "height", o.height), Y(n, "opacity", "0.8"), Y(n, "position", "fixed"), Y(n, "zIndex", "100000"), Y(n, "pointerEvents", "none"), a.fallbackOnBody && S.body.appendChild(n) || r.appendChild(n), e = n.getBoundingClientRect(), Y(n, "width", 2 * o.width - e.width), Y(n, "height", 2 * o.height - e.height)
                }
            },
            _onDragStart: function(e, n) {
                var i = this,
                    a = e.dataTransfer,
                    s = i.options;
                i._offUpEvents(), m.checkPull(i, i, t, e) && ((o = it(t)).draggable = !1, o.style["will-change"] = "", Y(o, "display", "none"), q(o, i.options.chosenClass, !1), i._cloneId = at(function() {
                    r.insertBefore(o, t), G(i, r, "clone", t)
                })), q(t, s.dragClass, !0), n ? ("touch" === n ? (H(S, "touchmove", i._onTouchMove), H(S, "touchend", i._onDrop), H(S, "touchcancel", i._onDrop), s.supportPointer && (H(S, "pointermove", i._onTouchMove), H(S, "pointerup", i._onDrop))) : (H(S, "mousemove", i._onTouchMove), H(S, "mouseup", i._onDrop)), i._loopId = setInterval(i._emulateDragOver, 50)) : (a && (a.effectAllowed = "move", s.setData && s.setData.call(i, a, t)), H(S, "drop", i), i._dragStartId = at(i._dragStarted))
            },
            _onDragOver: function(a) {
                var s, l, c, f, h = this.el,
                    _ = this.options,
                    g = _.group,
                    y = R.active,
                    w = m === g,
                    k = !1,
                    $ = _.sort;
                if (void 0 !== a.preventDefault && (a.preventDefault(), !_.dragoverBubble && a.stopPropagation()), !t.animated && (b = !0, y && !_.disabled && (w ? $ || (f = !r.contains(t)) : v === this || (y.lastPullMode = m.checkPull(this, y, t, a)) && g.checkPut(this, y, t, a)) && (void 0 === a.rootEl || a.rootEl === this.el))) {
                    if (F(a, _, this.el), j) return;
                    if (s = V(a.target, _.draggable, h), l = t.getBoundingClientRect(), v !== this && (v = this, k = !0), f) return z(y, !0), e = r, void(o || i ? r.insertBefore(t, o || i) : $ || r.appendChild(t));
                    if (0 === h.children.length || h.children[0] === n || h === a.target && function(t, e) {
                            var n = t.lastElementChild.getBoundingClientRect();
                            return e.clientY - (n.top + n.height) > 5 || e.clientX - (n.left + n.width) > 5
                        }(h, a)) {
                        if (0 !== h.children.length && h.children[0] !== n && h === a.target && (s = h.lastElementChild), s) {
                            if (s.animated) return;
                            c = s.getBoundingClientRect()
                        }
                        z(y, w), !1 !== K(r, h, t, l, s, c, a) && (t.contains(h) || (h.appendChild(t), e = h), this._animate(l, t), s && this._animate(c, s))
                    } else if (s && !s.animated && s !== t && void 0 !== s.parentNode[C]) {
                        u !== s && (u = s, d = Y(s), p = Y(s.parentNode));
                        var S = (c = s.getBoundingClientRect()).right - c.left,
                            T = c.bottom - c.top,
                            O = x.test(d.cssFloat + d.display) || "flex" == p.display && 0 === p["flex-direction"].indexOf("row"),
                            A = s.offsetWidth > t.offsetWidth,
                            L = s.offsetHeight > t.offsetHeight,
                            B = (O ? (a.clientX - c.left) / S : (a.clientY - c.top) / T) > .5,
                            P = s.nextElementSibling,
                            N = !1;
                        if (O) {
                            var D = t.offsetTop,
                                I = s.offsetTop;
                            N = D === I ? s.previousElementSibling === t && !A || B && A : s.previousElementSibling === t || t.previousElementSibling === s ? (a.clientY - c.top) / T > .5 : I > D
                        } else k || (N = P !== t && !L || B && L);
                        var M = K(r, h, t, l, s, c, a, N);
                        !1 !== M && (1 !== M && -1 !== M || (N = 1 === M), j = !0, E(Q, 30), z(y, w), t.contains(h) || (N && !P ? h.appendChild(t) : s.parentNode.insertBefore(t, N ? P : s)), e = t.parentNode, this._animate(l, t), this._animate(c, s))
                    }
                }
            },
            _animate: function(t, e) {
                var n = this.options.animation;
                if (n) {
                    var o = e.getBoundingClientRect();
                    1 === t.nodeType && (t = t.getBoundingClientRect()), Y(e, "transition", "none"), Y(e, "transform", "translate3d(" + (t.left - o.left) + "px," + (t.top - o.top) + "px,0)"), e.offsetWidth, Y(e, "transition", "all " + n + "ms"), Y(e, "transform", "translate3d(0,0,0)"), clearTimeout(e.animated), e.animated = E(function() {
                        Y(e, "transition", ""), Y(e, "transform", ""), e.animated = !1
                    }, n)
                }
            },
            _offUpEvents: function() {
                var t = this.el.ownerDocument;
                X(S, "touchmove", this._onTouchMove), X(S, "pointermove", this._onTouchMove), X(t, "mouseup", this._onDrop), X(t, "touchend", this._onDrop), X(t, "pointerup", this._onDrop), X(t, "touchcancel", this._onDrop), X(t, "pointercancel", this._onDrop), X(t, "selectstart", this)
            },
            _onDrop: function(a) {
                var s = this.el,
                    l = this.options;
                clearInterval(this._loopId), clearInterval(w.pid), clearTimeout(this._dragStartTimer), st(this._cloneId), st(this._dragStartId), X(S, "mouseover", this), X(S, "mousemove", this._onTouchMove), this.nativeDraggable && (X(S, "drop", this), X(s, "dragstart", this._onDragStart)), this._offUpEvents(), a && (b && (a.preventDefault(), !l.dropBubble && a.stopPropagation()), n && n.parentNode && n.parentNode.removeChild(n), r !== e && "clone" === R.active.lastPullMode || o && o.parentNode && o.parentNode.removeChild(o), t && (this.nativeDraggable && X(t, "dragend", this), Z(t), t.style["will-change"] = "", q(t, this.options.ghostClass, !1), q(t, this.options.chosenClass, !1), G(this, r, "unchoose", t, e, r, f), r !== e ? (h = et(t, l.draggable)) >= 0 && (G(null, e, "add", t, e, r, f, h), G(this, r, "remove", t, e, r, f, h), G(null, e, "sort", t, e, r, f, h), G(this, r, "sort", t, e, r, f, h)) : t.nextSibling !== i && (h = et(t, l.draggable)) >= 0 && (G(this, r, "update", t, e, r, f, h), G(this, r, "sort", t, e, r, f, h)), R.active && (null != h && -1 !== h || (h = f), G(this, r, "end", t, e, r, f, h), this.save()))), this._nulling()
            },
            _nulling: function() {
                r = t = e = n = i = o = a = s = l = _ = g = b = h = u = d = v = m = R.active = null, I.forEach(function(t) {
                    t.checked = !0
                }), I.length = 0
            },
            handleEvent: function(e) {
                switch (e.type) {
                    case "drop":
                    case "dragend":
                        this._onDrop(e);
                        break;
                    case "dragover":
                    case "dragenter":
                        t && (this._onDragOver(e), function(t) {
                            t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                            t.preventDefault()
                        }(e));
                        break;
                    case "mouseover":
                        this._onDrop(e);
                        break;
                    case "selectstart":
                        e.preventDefault()
                }
            },
            toArray: function() {
                for (var t, e = [], n = this.el.children, o = 0, r = n.length, i = this.options; o < r; o++) V(t = n[o], i.draggable, this.el) && e.push(t.getAttribute(i.dataIdAttr) || tt(t));
                return e
            },
            sort: function(t) {
                var e = {},
                    n = this.el;
                this.toArray().forEach(function(t, o) {
                    var r = n.children[o];
                    V(r, this.options.draggable, n) && (e[t] = r)
                }, this), t.forEach(function(t) {
                    e[t] && (n.removeChild(e[t]), n.appendChild(e[t]))
                })
            },
            save: function() {
                var t = this.options.store;
                t && t.set(this)
            },
            closest: function(t, e) {
                return V(t, e || this.options.draggable, this.el)
            },
            option: function(t, e) {
                var n = this.options;
                if (void 0 === e) return n[t];
                n[t] = e, "group" === t && U(n)
            },
            destroy: function() {
                var t = this.el;
                t[C] = null, X(t, "mousedown", this._onTapStart), X(t, "touchstart", this._onTapStart), X(t, "pointerdown", this._onTapStart), this.nativeDraggable && (X(t, "dragover", this), X(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(t) {
                    t.removeAttribute("draggable")
                }), M.splice(M.indexOf(this._onDragOver), 1), this._onDrop(), this.el = t = null
            }
        }, H(S, "touchmove", function(t) {
            R.active && t.preventDefault()
        }), R.utils = {
            on: H,
            off: X,
            css: Y,
            find: J,
            is: function(t, e) {
                return !!V(t, e, t)
            },
            extend: rt,
            throttle: ot,
            closest: V,
            toggleClass: q,
            clone: it,
            index: et,
            nextTick: at,
            cancelNextTick: st
        }, R.create = function(t, e) {
            return new R(t, e)
        }, R.version = "1.7.0", R
    })
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.password-input {\n  position: relative;\n}\n.password-input span {\n    position: absolute;\n    top: 6px;\n    right: 5px;\n    width: 24px;\n    height: 24px;\n    text-align: center;\n    line-height: 24px;\n    color: #888;\n    cursor: pointer;\n}\n", ""])
}, function(t, e, n) {
    var o = n(39);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("3abd2f90", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.unsplash-thumb {\n  width: 100%;\n  height: 100px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  position: relative;\n  overflow: hidden;\n}\n.unsplash-thumb-bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #cccccc;\n    background-size: cover;\n    background-position: 50%;\n    cursor: pointer;\n    z-index: 77;\n}\n.unsplash-thumb a {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    padding: 3px 5px;\n    background: rgba(0, 0, 0, 0.5);\n    color: #fff;\n    z-index: 99;\n}\n.unsplash-thumb:hover {\n    opacity: .9;\n}\n.unsplash-thumb:hover a {\n      display: block;\n}\n.loading-spinner {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n", ""])
}, function(t, e, n) {
    var o = n(41);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("322dd5b0", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n._col {\n  width: 20%;\n  float: left;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.color-btn {\n  height: 40px;\n  border-radius: 4px;\n  margin-bottom: 6px;\n  text-align: center;\n  padding-top: 10px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.color-btn.active {\n    position: relative;\n}\n.color-btn.active:before {\n      content: ' ';\n      position: absolute;\n      z-index: 1;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      background-color: rgba(0, 0, 0, 0.15);\n}\n.color-btn i.fa {\n    position: relative;\n    z-index: 2;\n    font-size: 18px;\n    color: #fff;\n    opacity: .7;\n}\n.color-btn:hover {\n    opacity: .8;\n}\n", ""])
}, function(t, e, n) {
    var o = n(43);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("30e96b50", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.modal-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 10;\n}\n.modal-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding-bottom: 150px;\n  z-index: 9999999;\n  overflow: auto;\n  overflow-y: scroll;\n}\n.app-modal {\n  position: relative;\n  top: 60px;\n  left: 50%;\n  margin-left: -230px;\n  width: 460px;\n  height: auto;\n  min-height: 100px;\n  background: #ffffff;\n  box-shadow: 1px 1px 5px #000;\n  border-radius: 2px;\n  z-index: 70;\n}\n.app-modal-close {\n    font-size: 20px;\n    position: absolute;\n    top: -26px;\n    right: -26px;\n    width: 26px;\n    height: 26px;\n    line-height: 26px;\n    text-align: center;\n    color: #ddd;\n    border-radius: 2px;\n    cursor: pointer;\n}\n.app-modal-body {\n    padding: 15px;\n}\n", ""])
}, function(t, e, n) {
    var o = n(45);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("7a4640a0", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.bg-change-btn {\n  width: 100%;\n  height: 140px;\n  border-radius: 5px;\n  background-color: #cccccc;\n  text-align: center;\n  margin-bottom: 15px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  background-size: cover;\n}\n.bg-change-btn-text {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    color: #fff;\n    font-size: 15px;\n    font-weight: bold;\n    padding: 3px 0;\n}\n.bg-change-btn:hover {\n    opacity: .9;\n}\n", ""])
}, function(t, e, n) {
    var o = n(47);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("9e475de0", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.password-input {\n  position: relative;\n}\n.password-input span {\n    position: absolute;\n    top: 6px;\n    right: 5px;\n    width: 24px;\n    height: 24px;\n    text-align: center;\n    line-height: 24px;\n    color: #888;\n    cursor: pointer;\n}\n", ""])
}, function(t, e, n) {
    var o = n(49);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("71b5fe30", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.app-menu {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 25%;\n  background: #ffffff;\n  z-index: 4;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\n}\n.app-menu-header {\n    padding: 4px 15px;\n    background: #f5f5f5;\n    border-bottom: 1px solid #ddd;\n    position: relative;\n}\n.app-menu-header h5 {\n      font-weight: 600;\n}\n.app-menu-header button {\n      position: absolute;\n      top: 5px;\n}\n.app-menu-header button.fl-l {\n        left: 15px;\n}\n.app-menu-header button.fl-r {\n        right: 15px;\n}\n.app-menu-body {\n    padding: 15px;\n    max-height: 95%;\n    overflow-y: scroll;\n}\n.app-menu-footer {\n    width: 100%;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    padding: 15px;\n}\n.app-menu-btn {\n  font-size: 14px;\n  display: block;\n  color: #555;\n  font-weight: bold;\n  padding: 6px 8px;\n  margin-bottom: 3px;\n  border-radius: 4px;\n  text-decoration: none !important;\n}\n.app-menu-btn .fa {\n    color: #ababab;\n    margin-right: 4px;\n}\n.app-menu-btn:hover {\n    color: #111;\n    background: #f1f1f1;\n}\n.app-menu-btn:hover .fa {\n      color: #777;\n}\n.menu-title {\n  font-size: 16px;\n}\n.menu-help-text {\n  color: #777;\n}\n", ""])
}, function(t, e, n) {
    var o = n(51);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("f3255004", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n#context-menu {\n  width: auto;\n  display: inline-block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background: #f6f6f6;\n  box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.5);\n  position: fixed;\n  border-radius: 3px;\n  z-index: 99;\n}\n#context-menu li {\n    display: block;\n    width: 100%;\n    min-width: 100px;\n    padding: 5px 12px;\n    border-bottom: 1px solid #ddd;\n    cursor: pointer;\n}\n#context-menu li:last-child {\n      border-bottom: 0;\n}\n#context-menu li:hover {\n      background: #ddd;\n}\n", ""])
}, function(t, e, n) {
    var o = n(53);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("e5529938", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n.app-search {\n  width: 24%;\n  float: left;\n  margin: 0 5px;\n  position: relative;\n}\n.app-search.active {\n    width: 40%;\n}\n.app-search.active input {\n      opacity: 1;\n}\n.app-search input {\n    opacity: .4;\n    border: none;\n    padding-right: 30px;\n}\n.app-search-body {\n    position: absolute;\n    top: 40px;\n    left: 0;\n    z-index: 5;\n    width: 300%;\n    background: #edeff1;\n    padding: 10px;\n    border-radius: 4px;\n    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.35);\n    margin-bottom: 60px;\n}\n.search-tips .search-tip:last-child {\n  margin-bottom: 0;\n}\n.search-tip {\n  font-size: 13px;\n  background: #fff;\n  padding: 5px 10px;\n  margin-bottom: 3px;\n  border-radius: 2px;\n  cursor: pointer;\n}\n.search-tip:hover {\n    background: #dededa;\n}\n.search-tip.active {\n    background: #FFF9C4;\n}\n.link-s {\n  width: 100%;\n  height: 46px;\n  background: #fff;\n  border-radius: 3px;\n  cursor: pointer;\n  position: relative;\n  margin-bottom: 10px;\n  text-align: left;\n}\n.link-s span {\n    background: #FFECB3;\n}\n.link-s-title {\n    padding: 7px 7px 0 29px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    font-weight: bold;\n}\n.link-s-url {\n    font-size: 11px;\n    padding: 2px 7px;\n    color: #909090;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.link-s img {\n    position: absolute;\n    top: 7px;\n    left: 7px;\n    width: 18px;\n    height: 18px;\n}\n.link-s:hover {\n    background: #f1f1f1;\n    box-shadow: 0 1px 2px #B0BEC5;\n}\n.search-help-btns {\n  text-align: center;\n}\n.search-help-btns-placeholder {\n    padding: 1px 0;\n    background: #fff;\n    border-radius: 2px;\n}\n.search-help-block p {\n  font-size: 12px;\n  margin-top: 6px;\n  margin-bottom: 0;\n  font-weight: bold;\n}\n.sh-btn {\n  padding: 5px 0;\n  background: #fff;\n  border-radius: 2px;\n  margin-top: 6px;\n  color: #888;\n  font-size: 11px;\n  cursor: pointer;\n}\n.sh-btn .fab {\n    font-size: 12px;\n    color: #333;\n}\n.sh-btn:hover {\n    background: #f1f1f1;\n    box-shadow: 0 1px 2px #B0BEC5;\n}\n.app-search-input-btns {\n  position: absolute;\n  top: 5px;\n  right: 4px;\n}\n.app-search-input-btns span {\n    display: block;\n    width: 24px;\n    height: 24px;\n    text-align: center;\n    line-height: 24px;\n    margin-left: 2px;\n    float: left;\n    font-size: 17px;\n    color: #fff;\n    cursor: pointer;\n    opacity: .7;\n}\n.app-search-input-btns span:hover {\n      opacity: .9;\n}\n.app-search.active span {\n  color: #000;\n}\n.search-in-links {\n  margin-bottom: 9px;\n}\n.search-in-links h5 {\n    margin: 2px 0 0;\n}\n", ""])
}, function(t, e, n) {
    var o = n(55);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("ead4375c", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\n#header {\n  background: rgba(0, 0, 0, 0.15);\n  padding: 5px 0;\n  margin-bottom: 15px;\n}\n", ""])
}, function(t, e, n) {
    var o = n(57);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("ebd2211c", o, !1, {})
}, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "\nbody {\n  background-position: 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n#app_main {\n  min-height: 100%;\n}\n._a {\n  color: #337ab7;\n  text-decoration: none;\n  cursor: pointer;\n}\n._a:hover {\n    color: #23527c;\n    text-decoration: underline;\n}\n._a:focus {\n    color: #23527c;\n    text-decoration: underline;\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n#base64_bg {\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-position: 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  opacity: 0;\n}\n", ""])
}, function(t, e, n) {
    var o = n(59);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]), o.locals && (t.exports = o.locals);
    (0, n(1).default)("444928e0", o, !1, {})
}]);