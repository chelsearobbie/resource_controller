/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString,
        k = i.hasOwnProperty, l = {}, m = "2.2.4", n = function (a, b) {
            return new n.fn.init(a, b)
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return e.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a) {
            return n.each(this, a)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(e.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: g, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        }, isPlainObject: function (a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a) ;
            return void 0 === b || k.call(a, b)
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break
            } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e); else for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        }, guid: 1, proxy: function (a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function () {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0,
            x = 0, y = ga(), z = ga(), A = ga(), B = function (a, b) {
                return a === b && (l = !0), 0
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O),
            V = new RegExp("^" + M + "$"), W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, da = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
                    if (9 === x) {
                        if (!(j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j), d
                    } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                } else {
                    if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {
                    } finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function (b) {
                return b = +b, ha(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = fa.support = {}, f = fa.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function (a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function (a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [w, n, t];
                                    break
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function (a) {
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ha(function (a) {
                    return function (b) {
                        return fa(a, b).length > 0
                    }
                }), contains: ha(function (a) {
                    return a = a.replace(ba, ca), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ha(function (a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Y.test(a.nodeName)
                }, input: function (a) {
                    return X.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: na(function () {
                    return [0]
                }), last: na(function (a, b) {
                    return [b - 1]
                }), eq: na(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: na(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: na(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: na(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: na(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) d.pseudos[b] = la(b);
        for (b in {submit: !0, reset: !0}) d.pseudos[b] = ma(b);

        function pa() {
        }

        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                    if (i[d] = k, k[2] = a(b, c, g)) return !0
                }
            }
        }

        function sa(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
                return a === b
            }, h, !0), l = ra(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                }
                m.push(c)
            }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k),
                    y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                        while (q = a[o++]) if (q(l, g || n, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--, f && t.push(l))
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while (q = b[o++]) q(t, u, g, h);
                    if (f) {
                        if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y, j = v), t
            };
            return c ? ha(f) : f
        }

        return h = fa.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function (a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function (a, b, c) {
        var d = [], e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
            if (e && n(a).is(c)) break;
            d.push(a)
        }
        return d
    }, v = function (a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
    }, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return h.call(b, a) > -1 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(z(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(z(this, a || [], !0))
        }, is: function (a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function (a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || A, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/, E = {children: !0, contents: !0, next: !0, prev: !0};
    n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return u(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return u(a, "parentNode", c)
        }, next: function (a) {
            return F(a, "nextSibling")
        }, prev: function (a) {
            return F(a, "previousSibling")
        }, nextAll: function (a) {
            return u(a, "nextSibling")
        }, prevAll: function (a) {
            return u(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return u(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return u(a, "previousSibling", c)
        }, siblings: function (a) {
            return v((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return v(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function () {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
            }
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
        }, j = {
            add: function () {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    n.each(b, function (b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments), c && !b && i()), this
            }, remove: function () {
                return n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            }, empty: function () {
                return f && (f = []), this
            }, disable: function () {
                return e = g = [], f = c = "", this
            }, disabled: function () {
                return !f
            }, lock: function () {
                return e = g = [], c || (f = c = ""), this
            }, locked: function () {
                return !!e
            }, fireWith: function (a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
            }, fire: function () {
                return j.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return j
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                    return function (d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
            if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }

    n.ready.promise = function (b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) K(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(n(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, L = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function M() {
        this.expando = n.expando + M.uid++
    }

    M.uid = 1, M.prototype = {
        register: function (a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        }, cache: function (a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        }, set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c; else for (d in b) e[d] = b[d];
            return e
        }, get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a); else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    while (c--) delete f[d[c]]
                }
                (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        }, hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M, O = new M, P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
            } catch (e) {
            }
            O.set(a, b, c)
        } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return O.hasData(a) || N.hasData(a)
        }, data: function (a, b, c) {
            return O.access(a, b, c)
        }, removeData: function (a, b) {
            O.remove(a, b)
        }, _data: function (a, b, c) {
            return N.access(a, b, c)
        }, _removeData: function (a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                O.set(this, a)
            }) : K(this, function (b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c
                } else d = n.camelCase(a), this.each(function () {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"], V = function (a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function () {
                return d.cur()
            } : function () {
                return n.css(a, b, "")
            }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    var X = /^(?:checkbox|radio)$/i, Y = /<([\w:-]+)/, Z = /^$|\/(?:java|ecma)script/i, $ = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }

    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f); else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++]) if (d && n.inArray(f, d) > -1) e && e.push(f); else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
            k = 0;
            while (f = g[k++]) Z.test(f.type || "") && c.push(f)
        }
        return l
    }

    !function () {
        var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/, ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {
        }
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha; else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
            n.event.add(this, b, e, d, c)
        })
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(G) || [""], j = b.length;
                while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--) if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d) {
            return ja(this, a, b, c, d)
        }, one: function (a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i, na = /^true\/(.*)/, oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    n.extend({
        htmlPrefilter: function (a) {
            return a.replace(ka, "<$1></$2>")
        }, clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]); else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        }, cleanData: function (a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) if (L(c)) {
                if (b = c[N.expando]) {
                    if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    c[N.expando] = void 0
                }
                c[O.expando] && (c[O.expando] = void 0)
            }
        }
    }), n.fn.extend({
        domManip: ua, detach: function (a) {
            return va(this, a, !0)
        }, remove: function (a) {
            return va(this, a)
        }, text: function (a) {
            return K(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return ua(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return ua(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return ua(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return ua(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return K(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = [];
            return ua(this, arguments, function (b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {HTML: "block", BODY: "block"};

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d, c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }

    var Aa = /^margin/, Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ca = function (b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Da = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    }, Ea = d.documentElement;
    !function () {
        var b, c, e, f, g = d.createElement("div"), h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }

            n.extend(l, {
                pixelPosition: function () {
                    return i(), b
                }, boxSizingReliable: function () {
                    return null == c && i(), c
                }, pixelMarginRight: function () {
                    return null == c && i(), e
                }, reliableMarginLeft: function () {
                    return null == c && i(), f
                }, reliableMarginRight: function () {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            })
        }
    }();

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    var Ha = /^(none|table(?!-c[ea]).+)/, Ia = {position: "absolute", visibility: "hidden", display: "block"},
        Ja = {letterSpacing: "0", fontWeight: "400"}, Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1), c = Ka.length;
        while (c--) if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Pa(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ca(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e, f = d && Ca(a), g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {marginLeft: 0}, function () {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
        return b ? Da(a, {display: "inline-block"}, Fa, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function (a, b) {
            return K(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Qa(this, !0)
        }, hide: function () {
            return Qa(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }

    n.Tween = Ra, Ra.prototype = {
        constructor: Ra, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }, _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;

    function Wa() {
        return a.setTimeout(function () {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], Ua.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}, easing: n.easing._default}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sa || Wa(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++) if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                return W(c.elem, a, T.exec(b), c), c
            }]
        }, tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
        }, prefilters: [Za], prefilter: function (a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = _a(this, n.extend({}, a), f);
                (e || N.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = N.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Sa = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        a.clearInterval(Ta), Ta = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
                a.clearTimeout(e)
            }
        })
    }, function () {
        var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option"));
        a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
    }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function (a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i, db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), l.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }, set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, fb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                    g = 0;
                    while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = n.trim(d), e !== h && c.setAttribute("class", h)
                }
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, fb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                    g = 0;
                    while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                    h = n.trim(d), e !== h && c.setAttribute("class", h)
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        }, hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g, hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function (b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        }, simulate: function (a, b, c) {
            var d = n.extend(new n.Event, c, {type: a, isSimulated: !0});
            n.event.trigger(d, null, b)
        }
    }), n.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var jb = a.location, kb = n.now(), lb = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var mb = /#.*$/, nb = /([?&])_=[^&]*/, ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qb = /^(?:GET|HEAD)$/, rb = /^\/\//, sb = {},
        tb = {}, ub = "*/".concat("*"), vb = d.createElement("a");
    vb.href = jb.href;

    function wb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function xb(a, b, c, d) {
        var e = {}, f = a === tb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function zb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function (b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(),
                r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === v) {
                            if (!h) {
                                h = {};
                                while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === v ? g : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    }, overrideMimeType: function (a) {
                        return v || (m.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (2 > v) for (b in a) s[b] = [s[b], a[b]]; else x.always(a[x.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {success: 1, error: 1, complete: 1}) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function () {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, z)
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y)
                }
            } else z(-1, "No Transport");

            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }

            return x
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function (a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Bb = /%20/g, Cb = /\[\]$/, Db = /\r?\n/g, Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(Db, "\r\n")}
                }) : {name: b.name, value: c.replace(Db, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    };
    var Hb = {0: 200, 1223: 204}, Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {binary: h.response} : {text: h.responseText}, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            }, abort: function () {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (e, f) {
                    b = n("<script>").prop({charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Jb = [], Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a), f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Lb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };

    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ea
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function (d) {
            return K(this, function (a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }, size: function () {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Nb = a.jQuery, Ob = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
    }, b || (a.jQuery = a.$ = n), n
});

!function (r, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((r = "undefined" != typeof globalThis ? globalThis : r || self).uuid = {})
}(this, (function (r) {
    "use strict";
    var e, n = new Uint8Array(16);

    function t() {
        if (!e && !(e = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return e(n)
    }

    var o = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function a(r) {
        return "string" == typeof r && o.test(r)
    }

    for (var i, u, f = [], s = 0; s < 256; ++s) f.push((s + 256).toString(16).substr(1));

    function c(r) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = (f[r[e + 0]] + f[r[e + 1]] + f[r[e + 2]] + f[r[e + 3]] + "-" + f[r[e + 4]] + f[r[e + 5]] + "-" + f[r[e + 6]] + f[r[e + 7]] + "-" + f[r[e + 8]] + f[r[e + 9]] + "-" + f[r[e + 10]] + f[r[e + 11]] + f[r[e + 12]] + f[r[e + 13]] + f[r[e + 14]] + f[r[e + 15]]).toLowerCase();
        if (!a(n)) throw TypeError("Stringified UUID is invalid");
        return n
    }

    var l = 0, d = 0;

    function v(r) {
        if (!a(r)) throw TypeError("Invalid UUID");
        var e, n = new Uint8Array(16);
        return n[0] = (e = parseInt(r.slice(0, 8), 16)) >>> 24, n[1] = e >>> 16 & 255, n[2] = e >>> 8 & 255, n[3] = 255 & e, n[4] = (e = parseInt(r.slice(9, 13), 16)) >>> 8, n[5] = 255 & e, n[6] = (e = parseInt(r.slice(14, 18), 16)) >>> 8, n[7] = 255 & e, n[8] = (e = parseInt(r.slice(19, 23), 16)) >>> 8, n[9] = 255 & e, n[10] = (e = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = e / 4294967296 & 255, n[12] = e >>> 24 & 255, n[13] = e >>> 16 & 255, n[14] = e >>> 8 & 255, n[15] = 255 & e, n
    }

    function p(r, e, n) {
        function t(r, t, o, a) {
            if ("string" == typeof r && (r = function (r) {
                r = unescape(encodeURIComponent(r));
                for (var e = [], n = 0; n < r.length; ++n) e.push(r.charCodeAt(n));
                return e
            }(r)), "string" == typeof t && (t = v(t)), 16 !== t.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            var i = new Uint8Array(16 + r.length);
            if (i.set(t), i.set(r, t.length), (i = n(i))[6] = 15 & i[6] | e, i[8] = 63 & i[8] | 128, o) {
                a = a || 0;
                for (var u = 0; u < 16; ++u) o[a + u] = i[u];
                return o
            }
            return c(i)
        }

        try {
            t.name = r
        } catch (r) {
        }
        return t.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", t.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", t
    }

    function h(r) {
        return 14 + (r + 64 >>> 9 << 4) + 1
    }

    function y(r, e) {
        var n = (65535 & r) + (65535 & e);
        return (r >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
    }

    function g(r, e, n, t, o, a) {
        return y((i = y(y(e, r), y(t, a))) << (u = o) | i >>> 32 - u, n);
        var i, u
    }

    function m(r, e, n, t, o, a, i) {
        return g(e & n | ~e & t, r, e, o, a, i)
    }

    function w(r, e, n, t, o, a, i) {
        return g(e & t | n & ~t, r, e, o, a, i)
    }

    function b(r, e, n, t, o, a, i) {
        return g(e ^ n ^ t, r, e, o, a, i)
    }

    function A(r, e, n, t, o, a, i) {
        return g(n ^ (e | ~t), r, e, o, a, i)
    }

    var U = p("v3", 48, (function (r) {
        if ("string" == typeof r) {
            var e = unescape(encodeURIComponent(r));
            r = new Uint8Array(e.length);
            for (var n = 0; n < e.length; ++n) r[n] = e.charCodeAt(n)
        }
        return function (r) {
            for (var e = [], n = 32 * r.length, t = "0123456789abcdef", o = 0; o < n; o += 8) {
                var a = r[o >> 5] >>> o % 32 & 255, i = parseInt(t.charAt(a >>> 4 & 15) + t.charAt(15 & a), 16);
                e.push(i)
            }
            return e
        }(function (r, e) {
            r[e >> 5] |= 128 << e % 32, r[h(e) - 1] = e;
            for (var n = 1732584193, t = -271733879, o = -1732584194, a = 271733878, i = 0; i < r.length; i += 16) {
                var u = n, f = t, s = o, c = a;
                n = m(n, t, o, a, r[i], 7, -680876936), a = m(a, n, t, o, r[i + 1], 12, -389564586), o = m(o, a, n, t, r[i + 2], 17, 606105819), t = m(t, o, a, n, r[i + 3], 22, -1044525330), n = m(n, t, o, a, r[i + 4], 7, -176418897), a = m(a, n, t, o, r[i + 5], 12, 1200080426), o = m(o, a, n, t, r[i + 6], 17, -1473231341), t = m(t, o, a, n, r[i + 7], 22, -45705983), n = m(n, t, o, a, r[i + 8], 7, 1770035416), a = m(a, n, t, o, r[i + 9], 12, -1958414417), o = m(o, a, n, t, r[i + 10], 17, -42063), t = m(t, o, a, n, r[i + 11], 22, -1990404162), n = m(n, t, o, a, r[i + 12], 7, 1804603682), a = m(a, n, t, o, r[i + 13], 12, -40341101), o = m(o, a, n, t, r[i + 14], 17, -1502002290), n = w(n, t = m(t, o, a, n, r[i + 15], 22, 1236535329), o, a, r[i + 1], 5, -165796510), a = w(a, n, t, o, r[i + 6], 9, -1069501632), o = w(o, a, n, t, r[i + 11], 14, 643717713), t = w(t, o, a, n, r[i], 20, -373897302), n = w(n, t, o, a, r[i + 5], 5, -701558691), a = w(a, n, t, o, r[i + 10], 9, 38016083), o = w(o, a, n, t, r[i + 15], 14, -660478335), t = w(t, o, a, n, r[i + 4], 20, -405537848), n = w(n, t, o, a, r[i + 9], 5, 568446438), a = w(a, n, t, o, r[i + 14], 9, -1019803690), o = w(o, a, n, t, r[i + 3], 14, -187363961), t = w(t, o, a, n, r[i + 8], 20, 1163531501), n = w(n, t, o, a, r[i + 13], 5, -1444681467), a = w(a, n, t, o, r[i + 2], 9, -51403784), o = w(o, a, n, t, r[i + 7], 14, 1735328473), n = b(n, t = w(t, o, a, n, r[i + 12], 20, -1926607734), o, a, r[i + 5], 4, -378558), a = b(a, n, t, o, r[i + 8], 11, -2022574463), o = b(o, a, n, t, r[i + 11], 16, 1839030562), t = b(t, o, a, n, r[i + 14], 23, -35309556), n = b(n, t, o, a, r[i + 1], 4, -1530992060), a = b(a, n, t, o, r[i + 4], 11, 1272893353), o = b(o, a, n, t, r[i + 7], 16, -155497632), t = b(t, o, a, n, r[i + 10], 23, -1094730640), n = b(n, t, o, a, r[i + 13], 4, 681279174), a = b(a, n, t, o, r[i], 11, -358537222), o = b(o, a, n, t, r[i + 3], 16, -722521979), t = b(t, o, a, n, r[i + 6], 23, 76029189), n = b(n, t, o, a, r[i + 9], 4, -640364487), a = b(a, n, t, o, r[i + 12], 11, -421815835), o = b(o, a, n, t, r[i + 15], 16, 530742520), n = A(n, t = b(t, o, a, n, r[i + 2], 23, -995338651), o, a, r[i], 6, -198630844), a = A(a, n, t, o, r[i + 7], 10, 1126891415), o = A(o, a, n, t, r[i + 14], 15, -1416354905), t = A(t, o, a, n, r[i + 5], 21, -57434055), n = A(n, t, o, a, r[i + 12], 6, 1700485571), a = A(a, n, t, o, r[i + 3], 10, -1894986606), o = A(o, a, n, t, r[i + 10], 15, -1051523), t = A(t, o, a, n, r[i + 1], 21, -2054922799), n = A(n, t, o, a, r[i + 8], 6, 1873313359), a = A(a, n, t, o, r[i + 15], 10, -30611744), o = A(o, a, n, t, r[i + 6], 15, -1560198380), t = A(t, o, a, n, r[i + 13], 21, 1309151649), n = A(n, t, o, a, r[i + 4], 6, -145523070), a = A(a, n, t, o, r[i + 11], 10, -1120210379), o = A(o, a, n, t, r[i + 2], 15, 718787259), t = A(t, o, a, n, r[i + 9], 21, -343485551), n = y(n, u), t = y(t, f), o = y(o, s), a = y(a, c)
            }
            return [n, t, o, a]
        }(function (r) {
            if (0 === r.length) return [];
            for (var e = 8 * r.length, n = new Uint32Array(h(e)), t = 0; t < e; t += 8) n[t >> 5] |= (255 & r[t / 8]) << t % 32;
            return n
        }(r), 8 * r.length))
    }));

    function I(r, e, n, t) {
        switch (r) {
            case 0:
                return e & n ^ ~e & t;
            case 1:
                return e ^ n ^ t;
            case 2:
                return e & n ^ e & t ^ n & t;
            case 3:
                return e ^ n ^ t
        }
    }

    function C(r, e) {
        return r << e | r >>> 32 - e
    }

    var R = p("v5", 80, (function (r) {
        var e = [1518500249, 1859775393, 2400959708, 3395469782],
            n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ("string" == typeof r) {
            var t = unescape(encodeURIComponent(r));
            r = [];
            for (var o = 0; o < t.length; ++o) r.push(t.charCodeAt(o))
        } else Array.isArray(r) || (r = Array.prototype.slice.call(r));
        r.push(128);
        for (var a = r.length / 4 + 2, i = Math.ceil(a / 16), u = new Array(i), f = 0; f < i; ++f) {
            for (var s = new Uint32Array(16), c = 0; c < 16; ++c) s[c] = r[64 * f + 4 * c] << 24 | r[64 * f + 4 * c + 1] << 16 | r[64 * f + 4 * c + 2] << 8 | r[64 * f + 4 * c + 3];
            u[f] = s
        }
        u[i - 1][14] = 8 * (r.length - 1) / Math.pow(2, 32), u[i - 1][14] = Math.floor(u[i - 1][14]), u[i - 1][15] = 8 * (r.length - 1) & 4294967295;
        for (var l = 0; l < i; ++l) {
            for (var d = new Uint32Array(80), v = 0; v < 16; ++v) d[v] = u[l][v];
            for (var p = 16; p < 80; ++p) d[p] = C(d[p - 3] ^ d[p - 8] ^ d[p - 14] ^ d[p - 16], 1);
            for (var h = n[0], y = n[1], g = n[2], m = n[3], w = n[4], b = 0; b < 80; ++b) {
                var A = Math.floor(b / 20), U = C(h, 5) + I(A, y, g, m) + w + e[A] + d[b] >>> 0;
                w = m, m = g, g = C(y, 30) >>> 0, y = h, h = U
            }
            n[0] = n[0] + h >>> 0, n[1] = n[1] + y >>> 0, n[2] = n[2] + g >>> 0, n[3] = n[3] + m >>> 0, n[4] = n[4] + w >>> 0
        }
        return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
    }));
    r.NIL = "00000000-0000-0000-0000-000000000000", r.parse = v, r.stringify = c, r.v1 = function (r, e, n) {
        var o = e && n || 0, a = e || new Array(16), f = (r = r || {}).node || i,
            s = void 0 !== r.clockseq ? r.clockseq : u;
        if (null == f || null == s) {
            var v = r.random || (r.rng || t)();
            null == f && (f = i = [1 | v[0], v[1], v[2], v[3], v[4], v[5]]), null == s && (s = u = 16383 & (v[6] << 8 | v[7]))
        }
        var p = void 0 !== r.msecs ? r.msecs : Date.now(), h = void 0 !== r.nsecs ? r.nsecs : d + 1,
            y = p - l + (h - d) / 1e4;
        if (y < 0 && void 0 === r.clockseq && (s = s + 1 & 16383), (y < 0 || p > l) && void 0 === r.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        l = p, d = h, u = s;
        var g = (1e4 * (268435455 & (p += 122192928e5)) + h) % 4294967296;
        a[o++] = g >>> 24 & 255, a[o++] = g >>> 16 & 255, a[o++] = g >>> 8 & 255, a[o++] = 255 & g;
        var m = p / 4294967296 * 1e4 & 268435455;
        a[o++] = m >>> 8 & 255, a[o++] = 255 & m, a[o++] = m >>> 24 & 15 | 16, a[o++] = m >>> 16 & 255, a[o++] = s >>> 8 | 128, a[o++] = 255 & s;
        for (var w = 0; w < 6; ++w) a[o + w] = f[w];
        return e || c(a)
    }, r.v3 = U, r.v4 = function (r, e, n) {
        var o = (r = r || {}).random || (r.rng || t)();
        if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e) {
            n = n || 0;
            for (var a = 0; a < 16; ++a) e[n + a] = o[a];
            return e
        }
        return c(o)
    }, r.v5 = R, r.validate = a, r.version = function (r) {
        if (!a(r)) throw TypeError("Invalid UUID");
        return parseInt(r.substr(14, 1), 16)
    }, Object.defineProperty(r, "__esModule", {value: !0})
}));
!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.clipboard = e() : t.clipboard = e()
}(this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {i: r, l: !1, exports: {}};
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: r})
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 0)
    }([function (t, e, n) {
        "use strict";

        function r(t, e, n) {
            y("listener called"), t.success = !0, e.forEach(function (e, r) {
                n.clipboardData.setData(r, e), r === _ && n.clipboardData.getData(r) != e && (y("setting text/plain failed"), t.success = !1)
            }), n.preventDefault()
        }

        function o(t) {
            var e = new x, n = r.bind(this, e, t);
            document.addEventListener("copy", n);
            try {
                document.execCommand("copy")
            } finally {
                document.removeEventListener("copy", n)
            }
            return e.success
        }

        function i(t, e) {
            c(t);
            var n = o(e);
            return a(), n
        }

        function u(t) {
            var e = document.createElement("div");
            e.setAttribute("style", "-webkit-user-select: text !important"), e.textContent = "temporary element", document.body.appendChild(e);
            var n = i(e, t);
            return document.body.removeChild(e), n
        }

        function s(t) {
            y("copyTextUsingDOM");
            var e = document.createElement("div");
            e.setAttribute("style", "-webkit-user-select: text !important");
            var n = e;
            e.attachShadow && (y("Using shadow DOM."), n = e.attachShadow({mode: "open"}));
            var r = document.createElement("span");
            r.innerText = t, n.appendChild(r), document.body.appendChild(e), c(r);
            var o = document.execCommand("copy");
            return a(), document.body.removeChild(e), o
        }

        function c(t) {
            var e = document.getSelection(), n = document.createRange();
            n.selectNodeContents(t), e.removeAllRanges(), e.addRange(n)
        }

        function a() {
            document.getSelection().removeAllRanges()
        }

        function l(t) {
            var e = new v.DT;
            return e.setData(_, t), e
        }

        function f() {
            return "undefined" == typeof ClipboardEvent && void 0 !== window.clipboardData && void 0 !== window.clipboardData.setData
        }

        function d(t) {
            var e = t.getData(_);
            if (void 0 !== e) return window.clipboardData.setData("Text", e);
            throw"No `text/plain` value was specified."
        }

        function p() {
            return new m(function (t, e) {
                var n = window.clipboardData.getData("Text");
                "" === n ? e(new Error("Empty clipboard or could not read plain text from clipboard")) : t(n)
            })
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var h = n(1), v = n(5), m = "undefined" == typeof Promise ? h.Promise : Promise, y = function (t) {
        }, w = !0, b = function () {
            (console.warn || console.log).call(arguments)
        }, g = b.bind(console, "[clipboard-polyfill]"), _ = "text/plain", T = function () {
            function t() {
            }

            return t.setDebugLog = function (t) {
                y = t
            }, t.suppressWarnings = function () {
                w = !1, v.suppressDTWarnings()
            }, t.write = function (t) {
                return w && !t.getData(_) && g("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."), new m(function (e, n) {
                    if (f()) return void (d(t) ? e() : n(new Error("Copying failed, possibly because the user rejected it.")));
                    if (o(t)) return y("regular execCopy worked"), void e();
                    if (navigator.userAgent.indexOf("Edge") > -1) return y('UA "Edge" => assuming success'), void e();
                    if (i(document.body, t)) return y("copyUsingTempSelection worked"), void e();
                    if (u(t)) return y("copyUsingTempElem worked"), void e();
                    var r = t.getData(_);
                    if (void 0 !== r && s(r)) return y("copyTextUsingDOM worked"), void e();
                    n(new Error("Copy command failed."))
                })
            }, t.writeText = function (t) {
                if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(t);
                var e = new v.DT;
                return e.setData(_, t), this.write(e)
            }, t.read = function () {
                return new m(function (t, e) {
                    if (f()) return void p().then(function (e) {
                        return t(l(e))
                    }, e);
                    e("Read is not supported in your browser.")
                })
            }, t.readText = function () {
                return navigator.clipboard && navigator.clipboard.readText ? navigator.clipboard.readText() : f() ? p() : new m(function (t, e) {
                    e("Read is not supported in your browser.")
                })
            }, t.DT = v.DT, t
        }();
        e.default = T;
        var x = function () {
            function t() {
                this.success = !1
            }

            return t
        }();
        t.exports = T
    }, function (t, e, n) {
        (function (e, r) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */
            !function (e, n) {
                t.exports = n()
            }(0, function () {
                "use strict";

                function t(t) {
                    var e = typeof t;
                    return null !== t && ("object" === e || "function" === e)
                }

                function o(t) {
                    return "function" == typeof t
                }

                function i(t) {
                    G = t
                }

                function u(t) {
                    H = t
                }

                function s() {
                    return void 0 !== B ? function () {
                        B(a)
                    } : c()
                }

                function c() {
                    var t = setTimeout;
                    return function () {
                        return t(a, 1)
                    }
                }

                function a() {
                    for (var t = 0; t < z; t += 2) {
                        (0, Z[t])(Z[t + 1]), Z[t] = void 0, Z[t + 1] = void 0
                    }
                    z = 0
                }

                function l(t, e) {
                    var n = arguments, r = this, o = new this.constructor(d);
                    void 0 === o[tt] && M(o);
                    var i = r._state;
                    return i ? function () {
                        var t = n[i - 1];
                        H(function () {
                            return j(i, o, t, r._result)
                        })
                    }() : D(r, o, t, e), o
                }

                function f(t) {
                    var e = this;
                    if (t && "object" == typeof t && t.constructor === e) return t;
                    var n = new e(d);
                    return g(n, t), n
                }

                function d() {
                }

                function p() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function h() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function v(t) {
                    try {
                        return t.then
                    } catch (t) {
                        return ot.error = t, ot
                    }
                }

                function m(t, e, n, r) {
                    try {
                        t.call(e, n, r)
                    } catch (t) {
                        return t
                    }
                }

                function y(t, e, n) {
                    H(function (t) {
                        var r = !1, o = m(n, e, function (n) {
                            r || (r = !0, e !== n ? g(t, n) : T(t, n))
                        }, function (e) {
                            r || (r = !0, x(t, e))
                        }, "Settle: " + (t._label || " unknown promise"));
                        !r && o && (r = !0, x(t, o))
                    }, t)
                }

                function w(t, e) {
                    e._state === nt ? T(t, e._result) : e._state === rt ? x(t, e._result) : D(e, void 0, function (e) {
                        return g(t, e)
                    }, function (e) {
                        return x(t, e)
                    })
                }

                function b(t, e, n) {
                    e.constructor === t.constructor && n === l && e.constructor.resolve === f ? w(t, e) : n === ot ? (x(t, ot.error), ot.error = null) : void 0 === n ? T(t, e) : o(n) ? y(t, e, n) : T(t, e)
                }

                function g(e, n) {
                    e === n ? x(e, p()) : t(n) ? b(e, n, v(n)) : T(e, n)
                }

                function _(t) {
                    t._onerror && t._onerror(t._result), A(t)
                }

                function T(t, e) {
                    t._state === et && (t._result = e, t._state = nt, 0 !== t._subscribers.length && H(A, t))
                }

                function x(t, e) {
                    t._state === et && (t._state = rt, t._result = e, H(_, t))
                }

                function D(t, e, n, r) {
                    var o = t._subscribers, i = o.length;
                    t._onerror = null, o[i] = e, o[i + nt] = n, o[i + rt] = r, 0 === i && t._state && H(A, t)
                }

                function A(t) {
                    var e = t._subscribers, n = t._state;
                    if (0 !== e.length) {
                        for (var r = void 0, o = void 0, i = t._result, u = 0; u < e.length; u += 3) r = e[u], o = e[u + n], r ? j(n, r, o, i) : o(i);
                        t._subscribers.length = 0
                    }
                }

                function E() {
                    this.error = null
                }

                function C(t, e) {
                    try {
                        return t(e)
                    } catch (t) {
                        return it.error = t, it
                    }
                }

                function j(t, e, n, r) {
                    var i = o(n), u = void 0, s = void 0, c = void 0, a = void 0;
                    if (i) {
                        if (u = C(n, r), u === it ? (a = !0, s = u.error, u.error = null) : c = !0, e === u) return void x(e, h())
                    } else u = r, c = !0;
                    e._state !== et || (i && c ? g(e, u) : a ? x(e, s) : t === nt ? T(e, u) : t === rt && x(e, u))
                }

                function O(t, e) {
                    try {
                        e(function (e) {
                            g(t, e)
                        }, function (e) {
                            x(t, e)
                        })
                    } catch (e) {
                        x(t, e)
                    }
                }

                function S() {
                    return ut++
                }

                function M(t) {
                    t[tt] = ut++, t._state = void 0, t._result = void 0, t._subscribers = []
                }

                function P(t, e) {
                    this._instanceConstructor = t, this.promise = new t(d), this.promise[tt] || M(this.promise), q(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? T(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && T(this.promise, this._result))) : x(this.promise, k())
                }

                function k() {
                    return new Error("Array Methods must be provided an Array")
                }

                function L(t) {
                    return new P(this, t).promise
                }

                function U(t) {
                    var e = this;
                    return new e(q(t) ? function (n, r) {
                        for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
                    } : function (t, e) {
                        return e(new TypeError("You must pass an array to race."))
                    })
                }

                function R(t) {
                    var e = this, n = new e(d);
                    return x(n, t), n
                }

                function W() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function F() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function N(t) {
                    this[tt] = S(), this._result = this._state = void 0, this._subscribers = [], d !== t && ("function" != typeof t && W(), this instanceof N ? O(this, t) : F())
                }

                function Y() {
                    var t = void 0;
                    if (void 0 !== r) t = r; else if ("undefined" != typeof self) t = self; else try {
                        t = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var e = t.Promise;
                    if (e) {
                        var n = null;
                        try {
                            n = Object.prototype.toString.call(e.resolve())
                        } catch (t) {
                        }
                        if ("[object Promise]" === n && !e.cast) return
                    }
                    t.Promise = N
                }

                var K = void 0;
                K = Array.isArray ? Array.isArray : function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
                var q = K, z = 0, B = void 0, G = void 0, H = function (t, e) {
                        Z[z] = t, Z[z + 1] = e, 2 === (z += 2) && (G ? G(a) : $())
                    }, I = "undefined" != typeof window ? window : void 0, J = I || {},
                    Q = J.MutationObserver || J.WebKitMutationObserver,
                    V = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                    X = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    Z = new Array(1e3), $ = void 0;
                $ = V ? function () {
                    return function () {
                        return e.nextTick(a)
                    }
                }() : Q ? function () {
                    var t = 0, e = new Q(a), n = document.createTextNode("");
                    return e.observe(n, {characterData: !0}), function () {
                        n.data = t = ++t % 2
                    }
                }() : X ? function () {
                    var t = new MessageChannel;
                    return t.port1.onmessage = a, function () {
                        return t.port2.postMessage(0)
                    }
                }() : void 0 === I ? function () {
                    try {
                        var t = n(4);
                        return B = t.runOnLoop || t.runOnContext, s()
                    } catch (t) {
                        return c()
                    }
                }() : c();
                var tt = Math.random().toString(36).substring(16), et = void 0, nt = 1, rt = 2, ot = new E, it = new E,
                    ut = 0;
                return P.prototype._enumerate = function (t) {
                    for (var e = 0; this._state === et && e < t.length; e++) this._eachEntry(t[e], e)
                }, P.prototype._eachEntry = function (t, e) {
                    var n = this._instanceConstructor, r = n.resolve;
                    if (r === f) {
                        var o = v(t);
                        if (o === l && t._state !== et) this._settledAt(t._state, e, t._result); else if ("function" != typeof o) this._remaining--, this._result[e] = t; else if (n === N) {
                            var i = new n(d);
                            b(i, t, o), this._willSettleAt(i, e)
                        } else this._willSettleAt(new n(function (e) {
                            return e(t)
                        }), e)
                    } else this._willSettleAt(r(t), e)
                }, P.prototype._settledAt = function (t, e, n) {
                    var r = this.promise;
                    r._state === et && (this._remaining--, t === rt ? x(r, n) : this._result[e] = n), 0 === this._remaining && T(r, this._result)
                }, P.prototype._willSettleAt = function (t, e) {
                    var n = this;
                    D(t, void 0, function (t) {
                        return n._settledAt(nt, e, t)
                    }, function (t) {
                        return n._settledAt(rt, e, t)
                    })
                }, N.all = L, N.race = U, N.resolve = f, N.reject = R, N._setScheduler = i, N._setAsap = u, N._asap = H, N.prototype = {
                    constructor: N,
                    then: l,
                    catch: function (t) {
                        return this.then(null, t)
                    }
                }, N.polyfill = Y, N.Promise = N, N
            })
        }).call(e, n(2), n(3))
    }, function (t, e) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(t) {
            if (l === setTimeout) return setTimeout(t, 0);
            if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
            try {
                return l(t, 0)
            } catch (e) {
                try {
                    return l.call(null, t, 0)
                } catch (e) {
                    return l.call(this, t, 0)
                }
            }
        }

        function i(t) {
            if (f === clearTimeout) return clearTimeout(t);
            if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
            try {
                return f(t)
            } catch (e) {
                try {
                    return f.call(null, t)
                } catch (e) {
                    return f.call(this, t)
                }
            }
        }

        function u() {
            v && p && (v = !1, p.length ? h = p.concat(h) : m = -1, h.length && s())
        }

        function s() {
            if (!v) {
                var t = o(u);
                v = !0;
                for (var e = h.length; e;) {
                    for (p = h, h = []; ++m < e;) p && p[m].run();
                    m = -1, e = h.length
                }
                p = null, v = !1, i(t)
            }
        }

        function c(t, e) {
            this.fun = t, this.array = e
        }

        function a() {
        }

        var l, f, d = t.exports = {};
        !function () {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
                l = n
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                f = r
            }
        }();
        var p, h = [], v = !1, m = -1;
        d.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            h.push(new c(t, e)), 1 !== h.length || v || o(s)
        }, c.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = a, d.addListener = a, d.once = a, d.off = a, d.removeListener = a, d.removeAllListeners = a, d.emit = a, d.prependListener = a, d.prependOnceListener = a, d.listeners = function (t) {
            return []
        }, d.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function () {
            return "/"
        }, d.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function () {
            return 0
        }
    }, function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function (t, e) {
    }, function (t, e, n) {
        "use strict";

        function r() {
            s = !1
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = ["text/plain", "text/html"], i = function () {
            (console.warn || console.log).call(arguments)
        }, u = i.bind(console, "[clipboard-polyfill]"), s = !0;
        e.suppressDTWarnings = r;
        var c = function () {
            function t() {
                this.m = {}
            }

            return t.prototype.setData = function (t, e) {
                s && -1 === o.indexOf(t) && u("Unknown data type: " + t, "Call clipboard.suppressWarnings() to suppress this warning."), this.m[t] = e
            }, t.prototype.getData = function (t) {
                return this.m[t]
            }, t.prototype.forEach = function (t) {
                for (var e in this.m) t(this.m[e], e)
            }, t
        }();
        e.DT = c
    }])
});
!function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports && "object" == typeof module ? module.exports = t(require("jquery")) : t(jQuery)
}(function (qt, Et) {
    "use strict";
    var Dt = {
            beforeShow: t,
            move: t,
            change: t,
            show: t,
            hide: t,
            color: !1,
            flat: !1,
            showInput: !1,
            allowEmpty: !1,
            showButtons: !0,
            clickoutFiresChange: !0,
            showInitial: !1,
            showPalette: !1,
            showPaletteOnly: !1,
            hideAfterPaletteSelect: !1,
            togglePaletteOnly: !1,
            showSelectionPalette: !0,
            localStorageKey: !1,
            appendTo: "body",
            maxSelectionSize: 7,
            cancelText: "cancel",
            chooseText: "choose",
            togglePaletteMoreText: "more",
            togglePaletteLessText: "less",
            clearText: "Clear Color Selection",
            noColorSelectedText: "No Color Selected",
            preferredFormat: !1,
            className: "",
            containerClassName: "",
            replacerClassName: "",
            showAlpha: !1,
            theme: "sp-light",
            palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
            selectionPalette: [],
            disabled: !1,
            offset: null
        }, It = [], zt = !!/msie/i.exec(window.navigator.userAgent), Bt = function () {
            function t(t, e) {
                return !!~("" + t).indexOf(e)
            }

            var e = document.createElement("div").style;
            return e.cssText = "background-color:rgba(0,0,0,.5)", t(e.backgroundColor, "rgba") || t(e.backgroundColor, "hsla")
        }(),
        Lt = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(""),
        Kt = function () {
            var t = "";
            if (zt) for (var e = 1; e <= 6; e++) t += "<div class='sp-" + e + "'></div>";
            return ["<div class='sp-container sp-hidden'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "<div class='sp-palette-button-container sp-cf'>", "<button type='button' class='sp-palette-toggle'></button>", "</div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-clear sp-clear-display'>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", t, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input formulaInputFocus' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<a class='sp-cancel' href='#'></a>", "<button type='button' class='sp-choose'></button>", "</div>", "</div>", "</div>"].join("")
        }();

    function Vt(t, e, r, a) {
        for (var n = [], i = 0; i < t.length; i++) {
            var s = t[i];
            if (s) {
                var o = tinycolor(s), l = o.toHsl().l < .5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
                l += tinycolor.equals(e, s) ? " sp-thumb-active" : "";
                var c = o.toString(a.preferredFormat || "rgb"),
                    f = Bt ? "background-color:" + o.toRgbString() : "filter:" + o.toFilter();
                n.push('<span title="' + c + '" data-color="' + o.toRgbString() + '" class="' + l + '"><span class="sp-thumb-inner" style="' + f + ';" /></span>')
            } else {
                n.push(qt("<div />").append(qt('<span data-color="" style="background-color:transparent;" class="sp-clear-display"></span>').attr("title", a.noColorSelectedText)).html())
            }
        }
        return "<div class='sp-cf " + r + "'>" + n.join("") + "</div>"
    }

    function e(t, e) {
        var r, a, n, i, s, o, l, f = (s = e, o = t, (l = qt.extend({}, Dt, s)).callbacks = {
                move: Wt(l.move, o),
                change: Wt(l.change, o),
                show: Wt(l.show, o),
                hide: Wt(l.hide, o),
                beforeShow: Wt(l.beforeShow, o)
            }, l), u = f.flat, c = f.showSelectionPalette, h = f.localStorageKey, d = f.theme, p = f.callbacks,
            g = (r = Ot, a = 10, function () {
                var t = this, e = arguments;
                n && clearTimeout(i), !n && i || (i = setTimeout(function () {
                    i = null, r.apply(t, e)
                }, a))
            }), b = !1, v = !1, m = 0, y = 0, w = 0, _ = 0, x = 0, k = 0, S = 0, C = 0, P = 0, A = 0, M = 1, R = [],
            H = [], F = {}, T = f.selectionPalette.slice(0), O = f.maxSelectionSize, N = "sp-dragging", j = null,
            q = t.ownerDocument, E = (q.body, qt(t)), D = !1, I = qt(Kt, q).addClass(d),
            z = I.find(".sp-picker-container"), B = I.find(".sp-color"), L = I.find(".sp-dragger"),
            K = I.find(".sp-hue"), V = I.find(".sp-slider"), $ = I.find(".sp-alpha-inner"), W = I.find(".sp-alpha"),
            X = I.find(".sp-alpha-handle"), Y = I.find(".sp-input"), G = I.find(".sp-palette"),
            Q = I.find(".sp-initial"), J = I.find(".sp-cancel"), U = I.find(".sp-clear"), Z = I.find(".sp-choose"),
            tt = I.find(".sp-palette-toggle"), et = E.is("input"), rt = et && "color" === E.attr("type") && Yt(),
            at = et && !u, nt = at ? qt(Lt).addClass(d).addClass(f.className).addClass(f.replacerClassName) : qt([]),
            it = at ? nt : E, st = nt.find(".sp-preview-inner"), ot = f.color || et && E.val(), lt = !1,
            ct = f.preferredFormat, ft = !f.showButtons || f.clickoutFiresChange, ut = !ot, ht = f.allowEmpty && !rt;

        function dt() {
            if (f.showPaletteOnly && (f.showPalette = !0), tt.text(f.showPaletteOnly ? f.togglePaletteMoreText : f.togglePaletteLessText), f.palette) {
                R = f.palette.slice(0), H = qt.isArray(R[0]) ? R : [R], F = {};
                for (var t = 0; t < H.length; t++) for (var e = 0; e < H[t].length; e++) {
                    var r = tinycolor(H[t][e]).toRgbString();
                    F[r] = !0
                }
            }
            I.toggleClass("sp-flat", u), I.toggleClass("sp-input-disabled", !f.showInput), I.toggleClass("sp-alpha-enabled", f.showAlpha), I.toggleClass("sp-clear-enabled", ht), I.toggleClass("sp-buttons-disabled", !f.showButtons), I.toggleClass("sp-palette-buttons-disabled", !f.togglePaletteOnly), I.toggleClass("sp-palette-disabled", !f.showPalette), I.toggleClass("sp-palette-only", f.showPaletteOnly), I.toggleClass("sp-initial-disabled", !f.showInitial), I.addClass(f.className).addClass(f.containerClassName), Ot()
        }

        function pt() {
            if (h && window.localStorage) {
                try {
                    var t = window.localStorage[h].split(",#");
                    1 < t.length && (delete window.localStorage[h], qt.each(t, function (t, e) {
                        gt(e)
                    }))
                } catch (t) {
                }
                try {
                    T = window.localStorage[h].split(";")
                } catch (t) {
                }
            }
        }

        function gt(t) {
            if (c) {
                var e = tinycolor(t).toRgbString();
                if (!F[e] && -1 === qt.inArray(e, T)) for (T.push(e); T.length > O;) T.shift();
                if (h && window.localStorage) try {
                    window.localStorage[h] = T.join(";")
                } catch (t) {
                }
            }
        }

        function bt() {
            var r = Mt(), t = qt.map(H, function (t, e) {
                return Vt(t, r, "sp-palette-row sp-palette-row-" + e, f)
            });
            pt(), T && t.push(Vt(function () {
                var t = [];
                if (f.showPalette) for (var e = 0; e < T.length; e++) {
                    var r = tinycolor(T[e]).toRgbString();
                    F[r] || t.push(T[e])
                }
                return t.reverse().slice(0, f.maxSelectionSize)
            }(), r, "sp-palette-row sp-palette-row-selection", f)), G.html(t.join(""))
        }

        function vt() {
            if (f.showInitial) {
                var t = lt, e = Mt();
                Q.html(Vt([t, e], e, "sp-palette-row-initial", f))
            }
        }

        function mt() {
            (y <= 0 || m <= 0 || _ <= 0) && Ot(), v = !0, I.addClass(N), j = null, E.trigger("dragstart.spectrum", [Mt()])
        }

        function yt() {
            v = !1, I.removeClass(N), E.trigger("dragstop.spectrum", [Mt()])
        }

        function wt() {
            var t = Y.val();
            if (null !== t && "" !== t || !ht) {
                var e = tinycolor(t);
                e.isValid() ? (At(e), Tt(!0)) : Y.addClass("sp-validation-error")
            } else At(null), Tt(!0)
        }

        function _t() {
            b ? Ct() : xt()
        }

        function xt() {
            var t = qt.Event("beforeShow.spectrum");
            b ? Ot() : (E.trigger(t, [Mt()]), !1 === p.beforeShow(Mt()) || t.isDefaultPrevented() || (!function () {
                for (var t = 0; t < It.length; t++) It[t] && It[t].hide()
            }(), b = !0, qt(q).bind("keydown.spectrum", kt), qt(q).bind("click.spectrum", St), qt(window).bind("resize.spectrum", g), nt.addClass("sp-active"), I.removeClass("sp-hidden"), Ot(), Ht(), lt = Mt(), vt(), p.show(lt), E.trigger("show.spectrum", [lt])))
        }

        function kt(t) {
            27 === t.keyCode && Ct()
        }

        function St(t) {
            2 != t.button && (v || (ft ? Tt(!0) : Pt(), Ct()))
        }

        function Ct() {
            b && !u && (b = !1, qt(q).unbind("keydown.spectrum", kt), qt(q).unbind("click.spectrum", St), qt(window).unbind("resize.spectrum", g), nt.removeClass("sp-active"), I.addClass("sp-hidden"), p.hide(Mt()), E.trigger("hide.spectrum", [Mt()]))
        }

        function Pt() {
            At(lt, !0)
        }

        function At(t, e) {
            var r, a;
            tinycolor.equals(t, Mt()) ? Ht() : (!t && ht ? ut = !0 : (ut = !1, a = (r = tinycolor(t)).toHsv(), C = a.h % 360 / 360, P = a.s, A = a.v, M = a.a), Ht(), r && r.isValid() && !e && (ct = f.preferredFormat || r.getFormat()))
        }

        function Mt(t) {
            return t = t || {}, ht && ut ? null : tinycolor.fromRatio({
                h: C,
                s: P,
                v: A,
                a: Math.round(100 * M) / 100
            }, {format: t.format || ct})
        }

        function Rt() {
            Ht(), p.move(Mt()), E.trigger("move.spectrum", [Mt()])
        }

        function Ht() {
            Y.removeClass("sp-validation-error"), Ft();
            var t = tinycolor.fromRatio({h: C, s: 1, v: 1});
            B.css("background-color", t.toHexString());
            var e = ct;
            M < 1 && (0 !== M || "name" !== e) && ("hex" !== e && "hex3" !== e && "hex6" !== e && "name" !== e || (e = "rgb"));
            var r = Mt({format: e}), a = "";
            if (st.removeClass("sp-clear-display"), st.css("background-color", "transparent"), !r && ht) st.addClass("sp-clear-display"); else {
                var n = r.toHexString(), i = r.toRgbString();
                if (Bt || 1 === r.alpha ? st.css("background-color", i) : (st.css("background-color", "transparent"), st.css("filter", r.toFilter())), f.showAlpha) {
                    var s = r.toRgb();
                    s.a = 0;
                    var o = tinycolor(s).toRgbString(), l = "linear-gradient(left, " + o + ", " + n + ")";
                    zt ? $.css("filter", tinycolor(o).toFilter({gradientType: 1}, n)) : ($.css("background", "-webkit-" + l), $.css("background", "-moz-" + l), $.css("background", "-ms-" + l), $.css("background", "linear-gradient(to right, " + o + ", " + n + ")"))
                }
                a = r.toString(e)
            }
            f.showInput && Y.val(a), f.showPalette && bt(), vt()
        }

        function Ft() {
            var t = P, e = A;
            if (ht && ut) X.hide(), V.hide(), L.hide(); else {
                X.show(), V.show(), L.show();
                var r = t * m, a = y - e * y;
                r = Math.max(-w, Math.min(m - w, r - w)), a = Math.max(-w, Math.min(y - w, a - w)), L.css({
                    top: a + "px",
                    left: r + "px"
                });
                var n = M * x;
                X.css({left: n - k / 2 + "px"});
                var i = C * _;
                V.css({top: i - S + "px"})
            }
        }

        function Tt(t) {
            var e = Mt(), r = "";
            e && (r = e.toString(ct), gt(e)), et && E.val(r), t && (p.change(e), E.trigger("change", [e]))
        }

        function Ot() {
            var t, e, r, a, n, i, s, o, l, c;
            b && (m = B.width(), y = B.height(), w = L.height(), K.width(), _ = K.height(), S = V.height(), x = W.width(), k = X.width(), u || (I.css("position", "absolute"), f.offset ? I.offset(f.offset) : I.offset((e = it, r = (t = I).outerWidth(), a = t.outerHeight(), n = e.outerHeight(), i = t[0].ownerDocument, s = i.documentElement, o = s.clientWidth + qt(i).scrollLeft(), l = s.clientHeight + qt(i).scrollTop(), (c = e.offset()).top += n, c.left -= Math.min(c.left, c.left + r > o && r < o ? Math.abs(c.left + r - o) : 0), c.top -= Math.min(c.top, c.top + a > l && a < l ? Math.abs(a + n - 0) : 0), c))), Ft(), f.showPalette && bt(), E.trigger("reflow.spectrum"))
        }

        function Nt() {
            Ct(), D = !0, E.attr("disabled", !0), it.addClass("sp-disabled")
        }

        !function () {
            if (zt && I.find("*:not(input)").attr("unselectable", "on"), dt(), at && E.after(nt).hide(), ht || U.hide(), u) E.after(I).hide(); else {
                var t = "parent" === f.appendTo ? E.parent() : qt(f.appendTo);
                1 !== t.length && (t = qt("body")), t.append(I)
            }

            function e(t) {
                return t.data && t.data.ignore ? (At(qt(t.target).closest(".sp-thumb-el").data("color")), Rt()) : (At(qt(t.target).closest(".sp-thumb-el").data("color")), Rt(), Tt(!0), f.hideAfterPaletteSelect && Ct()), !1
            }

            pt(), it.bind("click.spectrum touchstart.spectrum", function (t) {
                D || _t(), t.stopPropagation(), qt(t.target).is("input") || t.preventDefault()
            }), (E.is(":disabled") || !0 === f.disabled) && Nt(), I.click($t), Y.change(wt), Y.bind("paste", function () {
                setTimeout(wt, 1)
            }), Y.keydown(function (t) {
                13 == t.keyCode && wt()
            }), J.text(f.cancelText), J.bind("click.spectrum", function (t) {
                t.stopPropagation(), t.preventDefault(), Pt(), Ct()
            }), U.attr("title", f.clearText), U.bind("click.spectrum", function (t) {
                t.stopPropagation(), t.preventDefault(), ut = !0, Rt(), u && Tt(!0)
            }), Z.text(f.chooseText), Z.bind("click.spectrum", function (t) {
                t.stopPropagation(), t.preventDefault(), zt && Y.is(":focus") && Y.trigger("change"), Y.hasClass("sp-validation-error") || (Tt(!0), Ct())
            }), tt.text(f.showPaletteOnly ? f.togglePaletteMoreText : f.togglePaletteLessText), tt.bind("click.spectrum", function (t) {
                t.stopPropagation(), t.preventDefault(), f.showPaletteOnly = !f.showPaletteOnly, f.showPaletteOnly || u || I.css("left", "-=" + (z.outerWidth(!0) + 5)), dt()
            }), Xt(W, function (t, e, r) {
                M = t / x, ut = !1, r.shiftKey && (M = Math.round(10 * M) / 10), Rt()
            }, mt, yt), Xt(K, function (t, e) {
                C = parseFloat(e / _), ut = !1, f.showAlpha || (M = 1), Rt()
            }, mt, yt), Xt(B, function (t, e, r) {
                if (r.shiftKey) {
                    if (!j) {
                        var a = P * m, n = y - A * y, i = Math.abs(t - a) > Math.abs(e - n);
                        j = i ? "x" : "y"
                    }
                } else j = null;
                var s = !j || "y" === j;
                (!j || "x" === j) && (P = parseFloat(t / m)), s && (A = parseFloat((y - e) / y)), ut = !1, f.showAlpha || (M = 1), Rt()
            }, mt, yt), ot ? (At(ot), Ht(), ct = f.preferredFormat || tinycolor(ot).format, gt(ot)) : Ht(), u && xt();
            var r = zt ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            G.delegate(".sp-thumb-el", r, e), Q.delegate(".sp-thumb-el:nth-child(1)", r, {ignore: !0}, e)
        }();
        var jt = {
            show: xt, hide: Ct, toggle: _t, reflow: Ot, option: function (t, e) {
                return t === Et ? qt.extend({}, f) : e === Et ? f[t] : (f[t] = e, "preferredFormat" === t && (ct = f.preferredFormat), void dt())
            }, enable: function () {
                D = !1, E.attr("disabled", !1), it.removeClass("sp-disabled")
            }, disable: Nt, offset: function (t) {
                f.offset = t, Ot()
            }, set: function (t) {
                At(t), Tt()
            }, get: Mt, destroy: function () {
                E.show(), it.unbind("click.spectrum touchstart.spectrum"), I.remove(), nt.remove(), It[jt.id] = null
            }, container: I
        };
        return jt.id = It.push(jt) - 1, jt
    }

    function t() {
    }

    function $t(t) {
        t.stopPropagation()
    }

    function Wt(t, e) {
        var r = Array.prototype.slice, a = r.call(arguments, 2);
        return function () {
            return t.apply(e, a.concat(r.call(arguments)))
        }
    }

    function Xt(s, o, e, t) {
        o = o || function () {
        }, e = e || function () {
        }, t = t || function () {
        };
        var l = document, c = !1, f = {}, u = 0, h = 0, d = "ontouchstart" in window, r = {};

        function p(t) {
            t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.returnValue = !1
        }

        function a(t) {
            if (c) {
                if (zt && l.documentMode < 9 && !t.button) return g();
                var e = t.originalEvent && t.originalEvent.touches && t.originalEvent.touches[0],
                    r = e && e.pageX || t.pageX, a = e && e.pageY || t.pageY, n = Math.max(0, Math.min(r - f.left, h)),
                    i = Math.max(0, Math.min(a - f.top, u));
                d && p(t), o.apply(s, [n, i, t])
            }
        }

        function g() {
            c && (qt(l).unbind(r), qt(l.body).removeClass("sp-dragging"), setTimeout(function () {
                t.apply(s, arguments)
            }, 0)), c = !1
        }

        r.selectstart = p, r.dragstart = p, r["touchmove mousemove"] = a, r["touchend mouseup"] = g, qt(s).bind("touchstart mousedown", function (t) {
            (t.which ? 3 == t.which : 2 == t.button) || c || !1 !== e.apply(s, arguments) && (c = !0, u = qt(s).height(), h = qt(s).width(), f = qt(s).offset(), qt(l).bind(r), qt(l.body).addClass("sp-dragging"), a(t), p(t))
        })
    }

    function Yt() {
        return qt.fn.spectrum.inputTypeColorSupport()
    }

    var i = "spectrum.id";
    qt.fn.spectrum = function (r, t) {
        if ("string" == typeof r) {
            var a = this, n = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var t = It[qt(this).data(i)];
                if (t) {
                    var e = t[r];
                    if (!e) throw new Error("Spectrum: no such method: '" + r + "'");
                    "get" == r ? a = t.get() : "container" == r ? a = t.container : "option" == r ? a = t.option.apply(t, n) : "destroy" == r ? (t.destroy(), qt(this).removeData(i)) : e.apply(t, n)
                }
            }), a
        }
        return this.spectrum("destroy").each(function () {
            var t = e(this, qt.extend({}, r, qt(this).data()));
            qt(this).data(i, t.id)
        })
    }, qt.fn.spectrum.load = !0, qt.fn.spectrum.loadOpts = {}, qt.fn.spectrum.draggable = Xt, qt.fn.spectrum.defaults = Dt, qt.fn.spectrum.inputTypeColorSupport = function t() {
        if (void 0 === t._cachedResult) {
            var e = qt("<input type='color'/>")[0];
            t._cachedResult = "color" === e.type && "" !== e.value
        }
        return t._cachedResult
    }, qt.spectrum = {}, qt.spectrum.localization = {}, qt.spectrum.palettes = {}, qt.fn.spectrum.processNativeColorInputs = function () {
        var t = qt("input[type=color]");
        t.length && !Yt() && t.spectrum({preferredFormat: "hex6"})
    }, function () {
        var l = /^[\s,#]+/, c = /\s+$/, a = 0, f = Math, i = f.round, u = f.min, h = f.max, t = f.random,
            d = function (t, e) {
                if (e = e || {}, (t = t || "") instanceof d) return t;
                if (!(this instanceof d)) return new d(t, e);
                var r = function (t) {
                    var e = {r: 0, g: 0, b: 0}, r = 1, a = !1, n = !1;
                    "string" == typeof t && (t = function (t) {
                        t = t.replace(l, "").replace(c, "").toLowerCase();
                        var e, r = !1;
                        if (P[t]) t = P[t], r = !0; else if ("transparent" == t) return {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 0,
                            format: "name"
                        };
                        if (e = E.rgb.exec(t)) return {r: e[1], g: e[2], b: e[3]};
                        if (e = E.rgba.exec(t)) return {r: e[1], g: e[2], b: e[3], a: e[4]};
                        if (e = E.hsl.exec(t)) return {h: e[1], s: e[2], l: e[3]};
                        if (e = E.hsla.exec(t)) return {h: e[1], s: e[2], l: e[3], a: e[4]};
                        if (e = E.hsv.exec(t)) return {h: e[1], s: e[2], v: e[3]};
                        if (e = E.hsva.exec(t)) return {h: e[1], s: e[2], v: e[3], a: e[4]};
                        if (e = E.hex8.exec(t)) return {
                            a: (a = e[1], F(a) / 255),
                            r: F(e[2]),
                            g: F(e[3]),
                            b: F(e[4]),
                            format: r ? "name" : "hex8"
                        };
                        var a;
                        if (e = E.hex6.exec(t)) return {r: F(e[1]), g: F(e[2]), b: F(e[3]), format: r ? "name" : "hex"};
                        if (e = E.hex3.exec(t)) return {
                            r: F(e[1] + "" + e[1]),
                            g: F(e[2] + "" + e[2]),
                            b: F(e[3] + "" + e[3]),
                            format: r ? "name" : "hex"
                        };
                        return !1
                    }(t));
                    "object" == typeof t && (t.hasOwnProperty("r") && t.hasOwnProperty("g") && t.hasOwnProperty("b") ? (i = t.r, s = t.g, o = t.b, e = {
                        r: 255 * R(i, 255),
                        g: 255 * R(s, 255),
                        b: 255 * R(o, 255)
                    }, a = !0, n = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("v") ? (t.s = O(t.s), t.v = O(t.v), e = function (t, e, r) {
                        t = 6 * R(t, 360), e = R(e, 100), r = R(r, 100);
                        var a = f.floor(t), n = t - a, i = r * (1 - e), s = r * (1 - n * e), o = r * (1 - (1 - n) * e),
                            l = a % 6;
                        return {
                            r: 255 * [r, s, i, i, o, r][l],
                            g: 255 * [o, r, r, s, i, i][l],
                            b: 255 * [i, i, o, r, r, s][l]
                        }
                    }(t.h, t.s, t.v), a = !0, n = "hsv") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("l") && (t.s = O(t.s), t.l = O(t.l), e = function (t, e, r) {
                        var a, n, i;

                        function s(t, e, r) {
                            return r < 0 && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                        }

                        if (t = R(t, 360), e = R(e, 100), r = R(r, 100), 0 === e) a = n = i = r; else {
                            var o = r < .5 ? r * (1 + e) : r + e - r * e, l = 2 * r - o;
                            a = s(l, o, t + 1 / 3), n = s(l, o, t), i = s(l, o, t - 1 / 3)
                        }
                        return {r: 255 * a, g: 255 * n, b: 255 * i}
                    }(t.h, t.s, t.l), a = !0, n = "hsl"), t.hasOwnProperty("a") && (r = t.a));
                    var i, s, o;
                    return r = M(r), {
                        ok: a,
                        format: t.format || n,
                        r: u(255, h(e.r, 0)),
                        g: u(255, h(e.g, 0)),
                        b: u(255, h(e.b, 0)),
                        a: r
                    }
                }(t);
                this._originalInput = t, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = i(100 * this._a) / 100, this._format = e.format || r.format, this._gradientType = e.gradientType, this._r < 1 && (this._r = i(this._r)), this._g < 1 && (this._g = i(this._g)), this._b < 1 && (this._b = i(this._b)), this._ok = r.ok, this._tc_id = a++
            };

        function n(t, e, r) {
            t = R(t, 255), e = R(e, 255), r = R(r, 255);
            var a, n, i = h(t, e, r), s = u(t, e, r), o = (i + s) / 2;
            if (i == s) a = n = 0; else {
                var l = i - s;
                switch (n = .5 < o ? l / (2 - i - s) : l / (i + s), i) {
                    case t:
                        a = (e - r) / l + (e < r ? 6 : 0);
                        break;
                    case e:
                        a = (r - t) / l + 2;
                        break;
                    case r:
                        a = (t - e) / l + 4
                }
                a /= 6
            }
            return {h: a, s: n, l: o}
        }

        function s(t, e, r) {
            t = R(t, 255), e = R(e, 255), r = R(r, 255);
            var a, n, i = h(t, e, r), s = u(t, e, r), o = i, l = i - s;
            if (n = 0 === i ? 0 : l / i, i == s) a = 0; else {
                switch (i) {
                    case t:
                        a = (e - r) / l + (e < r ? 6 : 0);
                        break;
                    case e:
                        a = (r - t) / l + 2;
                        break;
                    case r:
                        a = (t - e) / l + 4
                }
                a /= 6
            }
            return {h: a, s: n, v: o}
        }

        function e(t, e, r, a) {
            var n = [T(i(t).toString(16)), T(i(e).toString(16)), T(i(r).toString(16))];
            return a && n[0].charAt(0) == n[0].charAt(1) && n[1].charAt(0) == n[1].charAt(1) && n[2].charAt(0) == n[2].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) : n.join("")
        }

        function o(t, e, r, a) {
            var n;
            return [T((n = a, Math.round(255 * parseFloat(n)).toString(16))), T(i(t).toString(16)), T(i(e).toString(16)), T(i(r).toString(16))].join("")
        }

        function r(t, e) {
            e = 0 === e ? 0 : e || 10;
            var r = d(t).toHsl();
            return r.s -= e / 100, r.s = H(r.s), d(r)
        }

        function p(t, e) {
            e = 0 === e ? 0 : e || 10;
            var r = d(t).toHsl();
            return r.s += e / 100, r.s = H(r.s), d(r)
        }

        function g(t) {
            return d(t).desaturate(100)
        }

        function b(t, e) {
            e = 0 === e ? 0 : e || 10;
            var r = d(t).toHsl();
            return r.l += e / 100, r.l = H(r.l), d(r)
        }

        function v(t, e) {
            e = 0 === e ? 0 : e || 10;
            var r = d(t).toRgb();
            return r.r = h(0, u(255, r.r - i(-e / 100 * 255))), r.g = h(0, u(255, r.g - i(-e / 100 * 255))), r.b = h(0, u(255, r.b - i(-e / 100 * 255))), d(r)
        }

        function m(t, e) {
            e = 0 === e ? 0 : e || 10;
            var r = d(t).toHsl();
            return r.l -= e / 100, r.l = H(r.l), d(r)
        }

        function y(t, e) {
            var r = d(t).toHsl(), a = (i(r.h) + e) % 360;
            return r.h = a < 0 ? 360 + a : a, d(r)
        }

        function w(t) {
            var e = d(t).toHsl();
            return e.h = (e.h + 180) % 360, d(e)
        }

        function _(t) {
            var e = d(t).toHsl(), r = e.h;
            return [d(t), d({h: (r + 120) % 360, s: e.s, l: e.l}), d({h: (r + 240) % 360, s: e.s, l: e.l})]
        }

        function x(t) {
            var e = d(t).toHsl(), r = e.h;
            return [d(t), d({h: (r + 90) % 360, s: e.s, l: e.l}), d({
                h: (r + 180) % 360,
                s: e.s,
                l: e.l
            }), d({h: (r + 270) % 360, s: e.s, l: e.l})]
        }

        function k(t) {
            var e = d(t).toHsl(), r = e.h;
            return [d(t), d({h: (r + 72) % 360, s: e.s, l: e.l}), d({h: (r + 216) % 360, s: e.s, l: e.l})]
        }

        function S(t, e, r) {
            e = e || 6, r = r || 30;
            var a = d(t).toHsl(), n = 360 / r, i = [d(t)];
            for (a.h = (a.h - (n * e >> 1) + 720) % 360; --e;) a.h = (a.h + n) % 360, i.push(d(a));
            return i
        }

        function C(t, e) {
            e = e || 6;
            for (var r = d(t).toHsv(), a = r.h, n = r.s, i = r.v, s = [], o = 1 / e; e--;) s.push(d({
                h: a,
                s: n,
                v: i
            })), i = (i + o) % 1;
            return s
        }

        d.prototype = {
            isDark: function () {
                return this.getBrightness() < 128
            }, isLight: function () {
                return !this.isDark()
            }, isValid: function () {
                return this._ok
            }, getOriginalInput: function () {
                return this._originalInput
            }, getFormat: function () {
                return this._format
            }, getAlpha: function () {
                return this._a
            }, getBrightness: function () {
                var t = this.toRgb();
                return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
            }, setAlpha: function (t) {
                return this._a = M(t), this._roundA = i(100 * this._a) / 100, this
            }, toHsv: function () {
                var t = s(this._r, this._g, this._b);
                return {h: 360 * t.h, s: t.s, v: t.v, a: this._a}
            }, toHsvString: function () {
                var t = s(this._r, this._g, this._b), e = i(360 * t.h), r = i(100 * t.s), a = i(100 * t.v);
                return 1 == this._a ? "hsv(" + e + ", " + r + "%, " + a + "%)" : "hsva(" + e + ", " + r + "%, " + a + "%, " + this._roundA + ")"
            }, toHsl: function () {
                var t = n(this._r, this._g, this._b);
                return {h: 360 * t.h, s: t.s, l: t.l, a: this._a}
            }, toHslString: function () {
                var t = n(this._r, this._g, this._b), e = i(360 * t.h), r = i(100 * t.s), a = i(100 * t.l);
                return 1 == this._a ? "hsl(" + e + ", " + r + "%, " + a + "%)" : "hsla(" + e + ", " + r + "%, " + a + "%, " + this._roundA + ")"
            }, toHex: function (t) {
                return e(this._r, this._g, this._b, t)
            }, toHexString: function (t) {
                return "#" + this.toHex(t)
            }, toHex8: function () {
                return o(this._r, this._g, this._b, this._a)
            }, toHex8String: function () {
                return "#" + this.toHex8()
            }, toRgb: function () {
                return {r: i(this._r), g: i(this._g), b: i(this._b), a: this._a}
            }, toRgbString: function () {
                return 1 == this._a ? "rgb(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ")" : "rgba(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ", " + this._roundA + ")"
            }, toPercentageRgb: function () {
                return {
                    r: i(100 * R(this._r, 255)) + "%",
                    g: i(100 * R(this._g, 255)) + "%",
                    b: i(100 * R(this._b, 255)) + "%",
                    a: this._a
                }
            }, toPercentageRgbString: function () {
                return 1 == this._a ? "rgb(" + i(100 * R(this._r, 255)) + "%, " + i(100 * R(this._g, 255)) + "%, " + i(100 * R(this._b, 255)) + "%)" : "rgba(" + i(100 * R(this._r, 255)) + "%, " + i(100 * R(this._g, 255)) + "%, " + i(100 * R(this._b, 255)) + "%, " + this._roundA + ")"
            }, toName: function () {
                return 0 === this._a ? "transparent" : !(this._a < 1) && (A[e(this._r, this._g, this._b, !0)] || !1)
            }, toFilter: function (t) {
                var e = "#" + o(this._r, this._g, this._b, this._a), r = e,
                    a = this._gradientType ? "GradientType = 1, " : "";
                t && (r = d(t).toHex8String());
                return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + e + ",endColorstr=" + r + ")"
            }, toString: function (t) {
                var e = !!t;
                t = t || this._format;
                var r = !1, a = this._a < 1 && 0 <= this._a;
                return e || !a || "hex" !== t && "hex6" !== t && "hex3" !== t && "name" !== t ? ("rgb" === t && (r = this.toRgbString()), "prgb" === t && (r = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (r = this.toHexString()), "hex3" === t && (r = this.toHexString(!0)), "hex8" === t && (r = this.toHex8String()), "name" === t && (r = this.toName()), "hsl" === t && (r = this.toHslString()), "hsv" === t && (r = this.toHsvString()), r || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
            }, _applyModification: function (t, e) {
                var r = t.apply(null, [this].concat([].slice.call(e)));
                return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this
            }, lighten: function () {
                return this._applyModification(b, arguments)
            }, brighten: function () {
                return this._applyModification(v, arguments)
            }, darken: function () {
                return this._applyModification(m, arguments)
            }, desaturate: function () {
                return this._applyModification(r, arguments)
            }, saturate: function () {
                return this._applyModification(p, arguments)
            }, greyscale: function () {
                return this._applyModification(g, arguments)
            }, spin: function () {
                return this._applyModification(y, arguments)
            }, _applyCombination: function (t, e) {
                return t.apply(null, [this].concat([].slice.call(e)))
            }, analogous: function () {
                return this._applyCombination(S, arguments)
            }, complement: function () {
                return this._applyCombination(w, arguments)
            }, monochromatic: function () {
                return this._applyCombination(C, arguments)
            }, splitcomplement: function () {
                return this._applyCombination(k, arguments)
            }, triad: function () {
                return this._applyCombination(_, arguments)
            }, tetrad: function () {
                return this._applyCombination(x, arguments)
            }
        }, d.fromRatio = function (t, e) {
            if ("object" == typeof t) {
                var r = {};
                for (var a in t) t.hasOwnProperty(a) && (r[a] = "a" === a ? t[a] : O(t[a]));
                t = r
            }
            return d(t, e)
        }, d.equals = function (t, e) {
            return !(!t || !e) && d(t).toRgbString() == d(e).toRgbString()
        }, d.random = function () {
            return d.fromRatio({r: t(), g: t(), b: t()})
        }, d.mix = function (t, e, r) {
            r = 0 === r ? 0 : r || 50;
            var a, n = d(t).toRgb(), i = d(e).toRgb(), s = r / 100, o = 2 * s - 1, l = i.a - n.a,
                c = 1 - (a = ((a = o * l == -1 ? o : (o + l) / (1 + o * l)) + 1) / 2),
                f = {r: i.r * a + n.r * c, g: i.g * a + n.g * c, b: i.b * a + n.b * c, a: i.a * s + n.a * (1 - s)};
            return d(f)
        }, d.readability = function (t, e) {
            var r = d(t), a = d(e), n = r.toRgb(), i = a.toRgb(), s = r.getBrightness(), o = a.getBrightness(),
                l = Math.max(n.r, i.r) - Math.min(n.r, i.r) + Math.max(n.g, i.g) - Math.min(n.g, i.g) + Math.max(n.b, i.b) - Math.min(n.b, i.b);
            return {brightness: Math.abs(s - o), color: l}
        }, d.isReadable = function (t, e) {
            var r = d.readability(t, e);
            return 125 < r.brightness && 500 < r.color
        }, d.mostReadable = function (t, e) {
            for (var r = null, a = 0, n = !1, i = 0; i < e.length; i++) {
                var s = d.readability(t, e[i]), o = 125 < s.brightness && 500 < s.color,
                    l = s.brightness / 125 * 3 + s.color / 500;
                (o && !n || o && n && a < l || !o && !n && a < l) && (n = o, a = l, r = d(e[i]))
            }
            return r
        };
        var P = d.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        }, A = d.hexNames = function (t) {
            var e = {};
            for (var r in t) t.hasOwnProperty(r) && (e[t[r]] = r);
            return e
        }(P);

        function M(t) {
            return t = parseFloat(t), (isNaN(t) || t < 0 || 1 < t) && (t = 1), t
        }

        function R(t, e) {
            var r;
            "string" == typeof (r = t) && -1 != r.indexOf(".") && 1 === parseFloat(r) && (t = "100%");
            var a, n = "string" == typeof (a = t) && -1 != a.indexOf("%");
            return t = u(e, h(0, parseFloat(t))), n && (t = parseInt(t * e, 10) / 100), f.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
        }

        function H(t) {
            return u(1, h(0, t))
        }

        function F(t) {
            return parseInt(t, 16)
        }

        function T(t) {
            return 1 == t.length ? "0" + t : "" + t
        }

        function O(t) {
            return t <= 1 && (t = 100 * t + "%"), t
        }

        var N, j, q,
            E = (j = "[\\s|\\(]+(" + (N = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")\\s*\\)?", q = "[\\s|\\(]+(" + N + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")\\s*\\)?", {
                rgb: new RegExp("rgb" + j),
                rgba: new RegExp("rgba" + q),
                hsl: new RegExp("hsl" + j),
                hsla: new RegExp("hsla" + q),
                hsv: new RegExp("hsv" + j),
                hsva: new RegExp("hsva" + q),
                hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            });
        window.tinycolor = d
    }(), qt(function () {
        qt.fn.spectrum.load && qt.fn.spectrum.processNativeColorInputs()
    })
});
!function () {
    var t;
    t = function (M) {
        M.ui = M.ui || {};
        M.ui.version = "1.12.1";
        var n, i = 0, l = Array.prototype.slice;
        M.cleanData = (n = M.cleanData, function (t) {
            var e, i, s;
            for (s = 0; null != (i = t[s]); s++) try {
                (e = M._data(i, "events")) && e.remove && M(i).triggerHandler("remove")
            } catch (t) {
            }
            n(t)
        }), M.widget = function (t, i, e) {
            var s, n, o, a = {}, l = t.split(".")[0], h = l + "-" + (t = t.split(".")[1]);
            return e || (e = i, i = M.Widget), M.isArray(e) && (e = M.extend.apply(null, [{}].concat(e))), M.expr[":"][h.toLowerCase()] = function (t) {
                return !!M.data(t, h)
            }, M[l] = M[l] || {}, s = M[l][t], n = M[l][t] = function (t, e) {
                if (!this._createWidget) return new n(t, e);
                arguments.length && this._createWidget(t, e)
            }, M.extend(n, s, {
                version: e.version,
                _proto: M.extend({}, e),
                _childConstructors: []
            }), (o = new i).options = M.widget.extend({}, o.options), M.each(e, function (e, o) {
                M.isFunction(o) ? a[e] = function () {
                    function s() {
                        return i.prototype[e].apply(this, arguments)
                    }

                    function n(t) {
                        return i.prototype[e].apply(this, t)
                    }

                    return function () {
                        var t, e = this._super, i = this._superApply;
                        return this._super = s, this._superApply = n, t = o.apply(this, arguments), this._super = e, this._superApply = i, t
                    }
                }() : a[e] = o
            }), n.prototype = M.widget.extend(o, {widgetEventPrefix: s && o.widgetEventPrefix || t}, a, {
                constructor: n,
                namespace: l,
                widgetName: t,
                widgetFullName: h
            }), s ? (M.each(s._childConstructors, function (t, e) {
                var i = e.prototype;
                M.widget(i.namespace + "." + i.widgetName, n, e._proto)
            }), delete s._childConstructors) : i._childConstructors.push(n), M.widget.bridge(t, n), n
        }, M.widget.extend = function (t) {
            for (var e, i, s = l.call(arguments, 1), n = 0, o = s.length; n < o; n++) for (e in s[n]) i = s[n][e], s[n].hasOwnProperty(e) && void 0 !== i && (M.isPlainObject(i) ? t[e] = M.isPlainObject(t[e]) ? M.widget.extend({}, t[e], i) : M.widget.extend({}, i) : t[e] = i);
            return t
        }, M.widget.bridge = function (o, e) {
            var a = e.prototype.widgetFullName || o;
            M.fn[o] = function (i) {
                var t = "string" == typeof i, s = l.call(arguments, 1), n = this;
                return t ? this.length || "instance" !== i ? this.each(function () {
                    var t, e = M.data(this, a);
                    return "instance" === i ? (n = e, !1) : e ? M.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, s)) !== e && void 0 !== t ? (n = t && t.jquery ? n.pushStack(t.get()) : t, !1) : void 0 : M.error("no such method '" + i + "' for " + o + " widget instance") : M.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'")
                }) : n = void 0 : (s.length && (i = M.widget.extend.apply(null, [i].concat(s))), this.each(function () {
                    var t = M.data(this, a);
                    t ? (t.option(i || {}), t._init && t._init()) : M.data(this, a, new e(i, this))
                })), n
            }
        }, M.Widget = function () {
        }, M.Widget._childConstructors = [], M.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {classes: {}, disabled: !1, create: null},
            _createWidget: function (t, e) {
                e = M(e || this.defaultElement || this)[0], this.element = M(e), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = M(), this.hoverable = M(), this.focusable = M(), this.classesElementLookup = {}, e !== this && (M.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (t) {
                        t.target === e && this.destroy()
                    }
                }), this.document = M(e.style ? e.ownerDocument : e.document || e), this.window = M(this.document[0].defaultView || this.document[0].parentWindow)), this.options = M.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function () {
                return {}
            },
            _getCreateEventData: M.noop,
            _create: M.noop,
            _init: M.noop,
            destroy: function () {
                var i = this;
                this._destroy(), M.each(this.classesElementLookup, function (t, e) {
                    i._removeClass(e, t)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: M.noop,
            widget: function () {
                return this.element
            },
            option: function (t, e) {
                var i, s, n, o = t;
                if (0 === arguments.length) return M.widget.extend({}, this.options);
                if ("string" == typeof t) if (o = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (s = o[t] = M.widget.extend({}, this.options[t]), n = 0; n < i.length - 1; n++) s[i[n]] = s[i[n]] || {}, s = s[i[n]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                    s[t] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = e
                }
                return this._setOptions(o), this
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function (t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
            },
            _setOptionClasses: function (t) {
                var e, i, s;
                for (e in t) s = this.classesElementLookup[e], t[e] !== this.options.classes[e] && s && s.length && (i = M(s.get()), this._removeClass(s, e), i.addClass(this._classes({
                    element: i,
                    keys: e,
                    classes: t,
                    add: !0
                })))
            },
            _setOptionDisabled: function (t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function () {
                return this._setOptions({disabled: !1})
            },
            disable: function () {
                return this._setOptions({disabled: !0})
            },
            _classes: function (n) {
                var o = [], a = this;

                function t(t, e) {
                    var i, s;
                    for (s = 0; s < t.length; s++) i = a.classesElementLookup[t[s]] || M(), i = n.add ? M(M.unique(i.get().concat(n.element.get()))) : M(i.not(n.element).get()), a.classesElementLookup[t[s]] = i, o.push(t[s]), e && n.classes[t[s]] && o.push(n.classes[t[s]])
                }

                return n = M.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, n), this._on(n.element, {remove: "_untrackClassesElement"}), n.keys && t(n.keys.match(/\S+/g) || [], !0), n.extra && t(n.extra.match(/\S+/g) || []), o.join(" ")
            },
            _untrackClassesElement: function (i) {
                var s = this;
                M.each(s.classesElementLookup, function (t, e) {
                    -1 !== M.inArray(i.target, e) && (s.classesElementLookup[t] = M(e.not(i.target).get()))
                })
            },
            _removeClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass: function (t, e, i, s) {
                s = "boolean" == typeof s ? s : i;
                var n = "string" == typeof t || null === t,
                    o = {extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s};
                return o.element.toggleClass(this._classes(o), s), this
            },
            _on: function (a, l, t) {
                var h, u = this;
                "boolean" != typeof a && (t = l, l = a, a = !1), t ? (l = h = M(l), this.bindings = this.bindings.add(l)) : (t = l, l = this.element, h = this.widget()), M.each(t, function (t, e) {
                    function i() {
                        if (a || !0 !== u.options.disabled && !M(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? u[e] : e).apply(u, arguments)
                    }

                    "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || M.guid++);
                    var s = t.match(/^([\w:-]*)\s*(.*)$/), n = s[1] + u.eventNamespace, o = s[2];
                    o ? h.on(n, o, i) : l.on(n, i)
                })
            },
            _off: function (t, e) {
                e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e).off(e), this.bindings = M(this.bindings.not(t).get()), this.focusable = M(this.focusable.not(t).get()), this.hoverable = M(this.hoverable.not(t).get())
            },
            _delay: function (t, e) {
                var i = this;
                return setTimeout(function () {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }, e || 0)
            },
            _hoverable: function (t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function (t) {
                        this._addClass(M(t.currentTarget), null, "ui-state-hover")
                    }, mouseleave: function (t) {
                        this._removeClass(M(t.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function (t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function (t) {
                        this._addClass(M(t.currentTarget), null, "ui-state-focus")
                    }, focusout: function (t) {
                        this._removeClass(M(t.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function (t, e, i) {
                var s, n, o = this.options[t];
                if (i = i || {}, (e = M.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], n = e.originalEvent) for (s in n) s in e || (e[s] = n[s]);
                return this.element.trigger(e, i), !(M.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
            }
        }, M.each({show: "fadeIn", hide: "fadeOut"}, function (o, a) {
            M.Widget.prototype["_" + o] = function (e, t, i) {
                var s;
                "string" == typeof t && (t = {effect: t});
                var n = t ? !0 === t || "number" == typeof t ? a : t.effect || a : o;
                "number" == typeof (t = t || {}) && (t = {duration: t}), s = !M.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), s && M.effects && M.effects.effect[n] ? e[o](t) : n !== o && e[n] ? e[n](t.duration, t.easing, i) : e.queue(function (t) {
                    M(this)[o](), i && i.call(e[0]), t()
                })
            }
        });
        M.widget;
        !function () {
            var n, C = Math.max, x = Math.abs, s = /left|center|right/, o = /top|center|bottom/,
                a = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, h = /%$/, u = M.fn.position;

            function k(t, e, i) {
                return [parseFloat(t[0]) * (h.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? i / 100 : 1)]
            }

            function O(t, e) {
                return parseInt(M.css(t, e), 10) || 0
            }

            M.position = {
                scrollbarWidth: function () {
                    if (void 0 !== n) return n;
                    var t, e,
                        i = M("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        s = i.children()[0];
                    return M("body").append(i), t = s.offsetWidth, i.css("overflow", "scroll"), t === (e = s.offsetWidth) && (e = i[0].clientWidth), i.remove(), n = t - e
                }, getScrollInfo: function (t) {
                    var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        s = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                    return {
                        width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? M.position.scrollbarWidth() : 0,
                        height: s ? M.position.scrollbarWidth() : 0
                    }
                }, getWithinInfo: function (t) {
                    var e = M(t || window), i = M.isWindow(e[0]), s = !!e[0] && 9 === e[0].nodeType;
                    return {
                        element: e,
                        isWindow: i,
                        isDocument: s,
                        offset: !i && !s ? M(t).offset() : {left: 0, top: 0},
                        scrollLeft: e.scrollLeft(),
                        scrollTop: e.scrollTop(),
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }
                }
            }, M.fn.position = function (c) {
                if (!c || !c.of) return u.apply(this, arguments);
                c = M.extend({}, c);
                var d, p, m, f, _, t, e, i, g = M(c.of), v = M.position.getWithinInfo(c.within),
                    b = M.position.getScrollInfo(v), y = (c.collision || "flip").split(" "), w = {};
                return t = 9 === (i = (e = g)[0]).nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {top: 0, left: 0}
                } : M.isWindow(i) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {top: e.scrollTop(), left: e.scrollLeft()}
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {top: i.pageY, left: i.pageX}
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                }, g[0].preventDefault && (c.at = "left top"), p = t.width, m = t.height, f = t.offset, _ = M.extend({}, f), M.each(["my", "at"], function () {
                    var t, e, i = (c[this] || "").split(" ");
                    1 === i.length && (i = s.test(i[0]) ? i.concat(["center"]) : o.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = s.test(i[0]) ? i[0] : "center", i[1] = o.test(i[1]) ? i[1] : "center", t = a.exec(i[0]), e = a.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], c[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
                }), 1 === y.length && (y[1] = y[0]), "right" === c.at[0] ? _.left += p : "center" === c.at[0] && (_.left += p / 2), "bottom" === c.at[1] ? _.top += m : "center" === c.at[1] && (_.top += m / 2), d = k(w.at, p, m), _.left += d[0], _.top += d[1], this.each(function () {
                    var i, t, a = M(this), l = a.outerWidth(), h = a.outerHeight(), e = O(this, "marginLeft"),
                        s = O(this, "marginTop"), n = l + e + O(this, "marginRight") + b.width,
                        o = h + s + O(this, "marginBottom") + b.height, u = M.extend({}, _),
                        r = k(w.my, a.outerWidth(), a.outerHeight());
                    "right" === c.my[0] ? u.left -= l : "center" === c.my[0] && (u.left -= l / 2), "bottom" === c.my[1] ? u.top -= h : "center" === c.my[1] && (u.top -= h / 2), u.left += r[0], u.top += r[1], i = {
                        marginLeft: e,
                        marginTop: s
                    }, M.each(["left", "top"], function (t, e) {
                        M.ui.position[y[t]] && M.ui.position[y[t]][e](u, {
                            targetWidth: p,
                            targetHeight: m,
                            elemWidth: l,
                            elemHeight: h,
                            collisionPosition: i,
                            collisionWidth: n,
                            collisionHeight: o,
                            offset: [d[0] + r[0], d[1] + r[1]],
                            my: c.my,
                            at: c.at,
                            within: v,
                            elem: a
                        })
                    }), c.using && (t = function (t) {
                        var e = f.left - u.left, i = e + p - l, s = f.top - u.top, n = s + m - h, o = {
                            target: {element: g, left: f.left, top: f.top, width: p, height: m},
                            element: {element: a, left: u.left, top: u.top, width: l, height: h},
                            horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                            vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle"
                        };
                        p < l && x(e + i) < p && (o.horizontal = "center"), m < h && x(s + n) < m && (o.vertical = "middle"), C(x(e), x(i)) > C(x(s), x(n)) ? o.important = "horizontal" : o.important = "vertical", c.using.call(this, t, o)
                    }), a.offset(M.extend(u, {using: t}))
                })
            }, M.ui.position = {
                fit: {
                    left: function (t, e) {
                        var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, o = s.width,
                            a = t.left - e.collisionPosition.marginLeft, l = n - a, h = a + e.collisionWidth - o - n;
                        e.collisionWidth > o ? 0 < l && h <= 0 ? (i = t.left + l + e.collisionWidth - o - n, t.left += l - i) : t.left = 0 < h && l <= 0 ? n : h < l ? n + o - e.collisionWidth : n : 0 < l ? t.left += l : 0 < h ? t.left -= h : t.left = C(t.left - a, t.left)
                    }, top: function (t, e) {
                        var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, o = e.within.height,
                            a = t.top - e.collisionPosition.marginTop, l = n - a, h = a + e.collisionHeight - o - n;
                        e.collisionHeight > o ? 0 < l && h <= 0 ? (i = t.top + l + e.collisionHeight - o - n, t.top += l - i) : t.top = 0 < h && l <= 0 ? n : h < l ? n + o - e.collisionHeight : n : 0 < l ? t.top += l : 0 < h ? t.top -= h : t.top = C(t.top - a, t.top)
                    }
                }, flip: {
                    left: function (t, e) {
                        var i, s, n = e.within, o = n.offset.left + n.scrollLeft, a = n.width,
                            l = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft,
                            u = h - l, r = h + e.collisionWidth - a - l,
                            c = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            p = -2 * e.offset[0];
                        u < 0 ? ((i = t.left + c + d + p + e.collisionWidth - a - o) < 0 || i < x(u)) && (t.left += c + d + p) : 0 < r && (0 < (s = t.left - e.collisionPosition.marginLeft + c + d + p - l) || x(s) < r) && (t.left += c + d + p)
                    }, top: function (t, e) {
                        var i, s, n = e.within, o = n.offset.top + n.scrollTop, a = n.height,
                            l = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop,
                            u = h - l, r = h + e.collisionHeight - a - l,
                            c = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            p = -2 * e.offset[1];
                        u < 0 ? ((s = t.top + c + d + p + e.collisionHeight - a - o) < 0 || s < x(u)) && (t.top += c + d + p) : 0 < r && (0 < (i = t.top - e.collisionPosition.marginTop + c + d + p - l) || x(i) < r) && (t.top += c + d + p)
                    }
                }, flipfit: {
                    left: function () {
                        M.ui.position.flip.left.apply(this, arguments), M.ui.position.fit.left.apply(this, arguments)
                    }, top: function () {
                        M.ui.position.flip.top.apply(this, arguments), M.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }();
        M.ui.position, M.fn.form = function () {
            return "string" == typeof this[0].form ? this.closest("form") : M(this[0].form)
        }, M.ui.formResetMixin = {
            _formResetHandler: function () {
                var e = M(this);
                setTimeout(function () {
                    var t = e.data("ui-form-reset-instances");
                    M.each(t, function () {
                        this.refresh()
                    })
                })
            }, _bindFormResetHandler: function () {
                if (this.form = this.element.form(), this.form.length) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                }
            }, _unbindFormResetHandler: function () {
                if (this.form.length) {
                    var t = this.form.data("ui-form-reset-instances");
                    t.splice(M.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }, M.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, M.ui.escapeSelector = (e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, function (t) {
            return t.replace(e, "\\$1")
        }), M.fn.labels = function () {
            var t, e, i, s, n;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), (i = this.attr("id")) && (n = (t = this.eq(0).parents().last()).add(t.length ? t.siblings() : this.siblings()), e = "label[for='" + M.ui.escapeSelector(i) + "']", s = s.add(n.find(e).addBack(e))), this.pushStack(s))
        }, M.fn.extend({
            uniqueId: (t = 0, function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }), removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && M(this).removeAttr("id")
                })
            }
        });
        var e, t, o = /ui-corner-([a-z]){2,6}/g;
        M.widget("ui.controlgroup", {
            version: "1.12.1",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input"
                }
            },
            _create: function () {
                this._enhance()
            },
            _enhance: function () {
                this.element.attr("role", "toolbar"), this.refresh()
            },
            _destroy: function () {
                this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
            },
            _initWidgets: function () {
                var a = this, l = [];
                M.each(this.options.items, function (n, t) {
                    var e, o = {};
                    if (t) return "controlgroupLabel" === n ? ((e = a.element.find(t)).each(function () {
                        var t = M(this);
                        t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    }), a._addClass(e, null, "ui-widget ui-widget-content ui-state-default"), void (l = l.concat(e.get()))) : void (M.fn[n] && (o = a["_" + n + "Options"] ? a["_" + n + "Options"]("middle") : {classes: {}}, a.element.find(t).each(function () {
                        var t = M(this), e = t[n]("instance"), i = M.widget.extend({}, o);
                        if ("button" !== n || !t.parent(".ui-spinner").length) {
                            e || (e = t[n]()[n]("instance")), e && (i.classes = a._resolveClassesValues(i.classes, e)), t[n](i);
                            var s = t[n]("widget");
                            M.data(s[0], "ui-controlgroup-data", e || t[n]("instance")), l.push(s[0])
                        }
                    })))
                }), this.childWidgets = M(M.unique(l)), this._addClass(this.childWidgets, "ui-controlgroup-item")
            },
            _callChildMethod: function (e) {
                this.childWidgets.each(function () {
                    var t = M(this).data("ui-controlgroup-data");
                    t && t[e] && t[e]()
                })
            },
            _updateCornerClass: function (t, e) {
                var i = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
            },
            _buildSimpleOptions: function (t, e) {
                var i = "vertical" === this.options.direction, s = {classes: {}};
                return s.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                }[t], s
            },
            _spinnerOptions: function (t) {
                var e = this._buildSimpleOptions(t, "ui-spinner");
                return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
            },
            _buttonOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-button")
            },
            _checkboxradioOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label")
            },
            _selectmenuOptions: function (t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: !!e && "auto",
                    classes: {
                        middle: {"ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": ""},
                        first: {
                            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                        },
                        last: {
                            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                        },
                        only: {
                            "ui-selectmenu-button-open": "ui-corner-top",
                            "ui-selectmenu-button-closed": "ui-corner-all"
                        }
                    }[t]
                }
            },
            _resolveClassesValues: function (i, s) {
                var n = {};
                return M.each(i, function (t) {
                    var e = s.options.classes[t] || "";
                    e = M.trim(e.replace(o, "")), n[t] = (e + " " + i[t]).replace(/\s+/g, " ")
                }), n
            },
            _setOption: function (t, e) {
                "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable")
            },
            refresh: function () {
                var n, o = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), n = this.childWidgets, this.options.onlyVisible && (n = n.filter(":visible")), n.length && (M.each(["first", "last"], function (t, e) {
                    var i = n[e]().data("ui-controlgroup-data");
                    if (i && o["_" + i.widgetName + "Options"]) {
                        var s = o["_" + i.widgetName + "Options"](1 === n.length ? "only" : e);
                        s.classes = o._resolveClassesValues(s.classes, i), i.element[i.widgetName](s)
                    } else o._updateCornerClass(n[e](), e)
                }), this._callChildMethod("refresh"))
            }
        });
        M.widget("ui.checkboxradio", [M.ui.formResetMixin, {
            version: "1.12.1",
            options: {
                disabled: null,
                label: null,
                icon: !0,
                classes: {"ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all"}
            },
            _getCreateOptions: function () {
                var t, e, i = this, s = this._super() || {};
                return this._readType(), e = this.element.labels(), this.label = M(e[e.length - 1]), this.label.length || M.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
                    i.originalLabel += 3 === this.nodeType ? M(this).text() : this.outerHTML
                }), this.originalLabel && (s.label = this.originalLabel), null != (t = this.element[0].disabled) && (s.disabled = t), s
            },
            _create: function () {
                var t = this.element[0].checked;
                this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                    change: "_toggleClasses",
                    focus: function () {
                        this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                    },
                    blur: function () {
                        this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                    }
                })
            },
            _readType: function () {
                var t = this.element[0].nodeName.toLowerCase();
                this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || M.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
            },
            _enhance: function () {
                this._updateIcon(this.element[0].checked)
            },
            widget: function () {
                return this.label
            },
            _getRadioGroup: function () {
                var t = this.element[0].name, e = "input[name='" + M.ui.escapeSelector(t) + "']";
                return t ? (this.form.length ? M(this.form[0].elements).filter(e) : M(e).filter(function () {
                    return 0 === M(this).form().length
                })).not(this.element) : M([])
            },
            _toggleClasses: function () {
                var t = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), "radio" === this.type && this._getRadioGroup().each(function () {
                    var t = M(this).checkboxradio("instance");
                    t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
                })
            },
            _destroy: function () {
                this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
            },
            _setOption: function (t, e) {
                if ("label" !== t || e) {
                    if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e);
                    this.refresh()
                }
            },
            _updateIcon: function (t) {
                var e = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = M("<span>"), this.iconSpace = M("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", e), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
            },
            _updateLabel: function () {
                var t = this.label.contents().not(this.element[0]);
                this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
            },
            refresh: function () {
                var t = this.element[0].checked, e = this.element[0].disabled;
                this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({disabled: e})
            }
        }]);
        var s;
        M.ui.checkboxradio;
        M.widget("ui.button", {
            version: "1.12.1",
            defaultElement: "<button>",
            options: {
                classes: {"ui-button": "ui-corner-all"},
                disabled: null,
                icon: null,
                iconPosition: "beginning",
                label: null,
                showLabel: !0
            },
            _getCreateOptions: function () {
                var t, e = this._super() || {};
                return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
            },
            _create: function () {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                    keyup: function (t) {
                        t.keyCode === M.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                    }
                })
            },
            _enhance: function () {
                this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
            },
            _updateTooltip: function () {
                this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
            },
            _updateIcon: function (t, e) {
                var i = "iconPosition" !== t, s = i ? this.options.iconPosition : e, n = "top" === s || "bottom" === s;
                this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = M("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), i && this._addClass(this.icon, null, e), this._attachIcon(s), n ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = M("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
            },
            _destroy: function () {
                this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
            },
            _attachIconSpace: function (t) {
                this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
            },
            _attachIcon: function (t) {
                this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
            },
            _setOptions: function (t) {
                var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                    i = void 0 === t.icon ? this.options.icon : t.icon;
                e || i || (t.showLabel = !0), this._super(t)
            },
            _setOption: function (t, e) {
                "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), (this.element[0].disabled = e) && this.element.blur())
            },
            refresh: function () {
                var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({disabled: t}), this._updateTooltip()
            }
        }), !1 !== M.uiBackCompat && (M.widget("ui.button", M.ui.button, {
            options: {
                text: !0,
                icons: {primary: null, secondary: null}
            }, _create: function () {
                this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
            }, _setOption: function (t, e) {
                "text" !== t ? ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", e)
            }
        }), M.fn.button = (s = M.fn.button, function () {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? s.apply(this, arguments) : (M.ui.checkboxradio || M.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({icon: !1}) : this.checkboxradio.apply(this, arguments))
        }), M.fn.buttonset = function () {
            return M.ui.controlgroup || M.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {button: arguments[0].items}), this.controlgroup.apply(this, arguments))
        });
        M.ui.button, M.ui.safeActiveElement = function (e) {
            var i;
            try {
                i = e.activeElement
            } catch (t) {
                i = e.body
            }
            return i || (i = e.body), i.nodeName || (i = e.body), i
        }, M.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {submenu: "ui-icon-caret-1-e"},
                items: "> *",
                menus: "ul",
                position: {my: "left top", at: "right top"},
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function (t) {
                        t.preventDefault()
                    }, "click .ui-menu-item": function (t) {
                        var e = M(t.target), i = M(M.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    }, "mouseenter .ui-menu-item": function (t) {
                        if (!this.previousFilter) {
                            var e = M(t.target).closest(".ui-menu-item"), i = M(t.currentTarget);
                            e[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i))
                        }
                    }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i)
                    }, blur: function (t) {
                        this._delay(function () {
                            !M.contains(this.element[0], M.ui.safeActiveElement(this.document[0])) && this.collapseAll(t)
                        })
                    }, keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function (t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function () {
                var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), t.children().each(function () {
                    var t = M(this);
                    t.data("ui-menu-submenu-caret") && t.remove()
                })
            },
            _keydown: function (t) {
                var e, i, s, n, o = !0;
                switch (t.keyCode) {
                    case M.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case M.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case M.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case M.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case M.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case M.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case M.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case M.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case M.ui.keyCode.ENTER:
                    case M.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case M.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        o = !1, i = this.previousFilter || "", n = !1, s = 96 <= t.keyCode && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), s === i ? n = !0 : s = i + s, e = this._filterMenuItems(s), (e = n && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || (s = String.fromCharCode(t.keyCode), e = this._filterMenuItems(s)), e.length ? (this.focus(t, e), this.previousFilter = s, this.filterTimer = this._delay(function () {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                o && t.preventDefault()
            },
            _activate: function (t) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function () {
                var t, e, i, s, n = this, o = this.options.icons.submenu, a = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), e = a.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function () {
                    var t = M(this), e = t.prev(), i = M("<span>").data("ui-menu-submenu-caret", !0);
                    n._addClass(i, "ui-menu-icon", "ui-icon " + o), e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"))
                }), this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"), (t = a.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function () {
                    var t = M(this);
                    n._isDivider(t) && n._addClass(t, "ui-menu-divider", "ui-widget-content")
                }), s = (i = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(i, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"), t.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !M.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {menu: "menuitem", listbox: "option"}[this.options.role]
            },
            _setOption: function (t, e) {
                if ("icons" === t) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
                }
                this._super(t, e)
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            focus: function (t, e) {
                var i, s, n;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                    this._close()
                }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
            },
            _scrollIntoView: function (t) {
                var e, i, s, n, o, a;
                this._hasScroll() && (e = parseFloat(M.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(M.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - e - i, n = this.activeMenu.scrollTop(), o = this.activeMenu.height(), a = t.outerHeight(), s < 0 ? this.activeMenu.scrollTop(n + s) : o < s + a && this.activeMenu.scrollTop(n + s - o + a))
            },
            blur: function (t, e) {
                e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {item: this.active}), this.active = null)
            },
            _startOpening: function (t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function (t) {
                var e = M.extend({of: this.active}, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
            },
            collapseAll: function (e, i) {
                clearTimeout(this.timer), this.timer = this._delay(function () {
                    var t = i ? this.element : M(e && e.target).closest(this.element.find(".ui-menu"));
                    t.length || (t = this.element), this._close(t), this.blur(e), this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = t
                }, this.delay)
            },
            _close: function (t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function (t) {
                return !M(t.target).closest(".ui-menu").length
            },
            _isDivider: function (t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function (t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function (t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay(function () {
                    this.focus(t, e)
                }))
            },
            next: function (t) {
                this._move("next", "first", t)
            },
            previous: function (t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function () {
                return this.active && !this.active.preval(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (t, e, i) {
                var s;
                this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
            },
            nextPage: function (t) {
                var e, i, s;
                this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                    return (e = M(this)).offset().top - i - s < 0
                }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(t)
            },
            previousPage: function (t) {
                var e, i, s;
                this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.preval(".ui-menu-item").each(function () {
                    return 0 < (e = M(this)).offset().top - i + s
                }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first())) : this.next(t)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (t) {
                this.active = this.active || M(t.target).closest(".ui-menu-item");
                var e = {item: this.active};
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e)
            },
            _filterMenuItems: function (t) {
                var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), i = new RegExp("^" + e, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                    return i.test(M.trim(M(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        }), M.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var a = !1;
        M(document).on("mouseup", function () {
            a = !1
        });
        M.widget("ui.mouse", {
            version: "1.12.1",
            options: {cancel: "input, textarea, button, select, option", distance: 1, delay: 0},
            _mouseInit: function () {
                var e = this;
                this.element.on("mousedown." + this.widgetName, function (t) {
                    return e._mouseDown(t)
                }).on("click." + this.widgetName, function (t) {
                    if (!0 === M.data(t.target, e.widgetName + ".preventClickEvent")) return M.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1
                }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (t) {
                if (!a) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var e = this, i = 1 === t.which,
                        s = !("string" != typeof this.options.cancel || !t.target.nodeName) && M(t.target).closest(this.options.cancel).length;
                    return !(i && !s && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        e.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === M.data(t.target, this.widgetName + ".preventClickEvent") && M.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                        return e._mouseMove(t)
                    }, this._mouseUpDelegate = function (t) {
                        return e._mouseUp(t)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0))
                }
            },
            _mouseMove: function (t) {
                if (this._mouseMoved) {
                    if (M.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                    if (!t.which) if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(t)
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function (t) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && M.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, a = !1, t.preventDefault()
            },
            _mouseDistanceMet: function (t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () {
            },
            _mouseDrag: function () {
            },
            _mouseStop: function () {
            },
            _mouseCapture: function () {
                return !0
            }
        }), M.widget("ui.selectmenu", [M.ui.formResetMixin, {
            version: "1.12.1",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                classes: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"},
                disabled: null,
                icons: {button: "ui-icon-triangle-1-s"},
                position: {my: "left top", at: "left bottom", collision: "none"},
                width: !1,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function () {
                var t = this.element.uniqueId().attr("id");
                this.ids = {
                    element: t,
                    button: t + "-button",
                    menu: t + "-menu"
                }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = M()
            },
            _drawButton: function () {
                var t, e = this,
                    i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                    click: function (t) {
                        this.button.focus(), t.preventDefault()
                    }
                }), this.element.hide(), this.button = M("<span>", {
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true",
                    title: this.element.attr("title")
                }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), t = M("<span>").appendTo(this.button), this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(i).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                    e._rendered || e._refreshMenu()
                })
            },
            _drawMenu: function () {
                var s = this;
                this.menu = M("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = M("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    classes: {"ui-menu": "ui-corner-bottom"},
                    role: "listbox",
                    select: function (t, e) {
                        t.preventDefault(), s._setSelection(), s._select(e.item.data("ui-selectmenu-item"), t)
                    },
                    focus: function (t, e) {
                        var i = e.item.data("ui-selectmenu-item");
                        null != s.focusIndex && i.index !== s.focusIndex && (s._trigger("focus", t, {item: i}), s.isOpen || s._select(i, t)), s.focusIndex = i.index, s.button.attr("aria-activedescendant", s.menuItems.eq(i.index).attr("id"))
                    }
                }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                    return !1
                }, this.menuInstance._isDivider = function () {
                    return !1
                }
            },
            refresh: function () {
                this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
            },
            _refreshMenu: function () {
                var t, e = this.element.find("option");
                this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function (t) {
                this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
            },
            _position: function () {
                this.menuWrap.position(M.extend({of: this.button}, this.options.position))
            },
            close: function (t) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
            },
            widget: function () {
                return this.button
            },
            menuWidget: function () {
                return this.menu
            },
            _renderButtonItem: function (t) {
                var e = M("<span>");
                return this._setText(e, t.label), this._addClass(e, "ui-selectmenu-text"), e
            },
            _renderMenu: function (s, t) {
                var n = this, o = "";
                M.each(t, function (t, e) {
                    var i;
                    e.optgroup !== o && (i = M("<li>", {text: e.optgroup}), n._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), i.appendTo(s), o = e.optgroup), n._renderItemData(s, e)
                })
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function (t, e) {
                var i = M("<li>"), s = M("<div>", {title: e.element.attr("title")});
                return e.disabled && this._addClass(i, null, "ui-state-disabled"), this._setText(s, e.label), i.append(s).appendTo(t)
            },
            _setText: function (t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function (t, e) {
                var i, s, n = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s)
            },
            _getSelectedItem: function () {
                return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
            },
            _toggle: function (t) {
                this[this.isOpen ? "close" : "open"](t)
            },
            _setSelection: function () {
                var t;
                this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function (t) {
                    this.isOpen && (M(t.target).closest(".ui-selectmenu-menu, #" + M.ui.escapeSelector(this.ids.button)).length || this.close(t))
                }
            },
            _buttonEvents: {
                mousedown: function () {
                    var t;
                    window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
                }, click: function (t) {
                    this._setSelection(), this._toggle(t)
                }, keydown: function (t) {
                    var e = !0;
                    switch (t.keyCode) {
                        case M.ui.keyCode.TAB:
                        case M.ui.keyCode.ESCAPE:
                            this.close(t), e = !1;
                            break;
                        case M.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(t);
                            break;
                        case M.ui.keyCode.UP:
                            t.altKey ? this._toggle(t) : this._move("prev", t);
                            break;
                        case M.ui.keyCode.DOWN:
                            t.altKey ? this._toggle(t) : this._move("next", t);
                            break;
                        case M.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                            break;
                        case M.ui.keyCode.LEFT:
                            this._move("prev", t);
                            break;
                        case M.ui.keyCode.RIGHT:
                            this._move("next", t);
                            break;
                        case M.ui.keyCode.HOME:
                        case M.ui.keyCode.PAGE_UP:
                            this._move("first", t);
                            break;
                        case M.ui.keyCode.END:
                        case M.ui.keyCode.PAGE_DOWN:
                            this._move("last", t);
                            break;
                        default:
                            this.menu.trigger(t), e = !1
                    }
                    e && t.preventDefault()
                }
            },
            _selectFocusedItem: function (t) {
                var e = this.menuItems.eq(this.focusIndex).parent("li");
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function (t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {item: t}), t.index !== i && this._trigger("change", e, {item: t}), this.close(e)
            },
            _setAria: function (t) {
                var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": e,
                    "aria-activedescendant": e
                }), this.menu.attr("aria-activedescendant", e)
            },
            _setOption: function (t, e) {
                if ("icons" === t) {
                    var i = this.button.find("span.ui-icon");
                    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
                }
                this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
            },
            _appendTo: function () {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? M(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
            },
            _toggleAttr: function () {
                this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function () {
                var t = this.options.width;
                !1 !== t ? (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)) : this.button.css("width", "")
            },
            _resizeMenu: function () {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function () {
                var t = this._super();
                return t.disabled = this.element.prop("disabled"), t
            },
            _parseOptions: function (t) {
                var i = this, s = [];
                t.each(function (t, e) {
                    s.push(i._parseOption(M(e), t))
                }), this.items = s
            },
            _parseOption: function (t, e) {
                var i = t.parent("optgroup");
                return {
                    element: t,
                    index: e,
                    value: t.val(),
                    label: t.text(),
                    optgroup: i.attr("label") || "",
                    disabled: i.prop("disabled") || t.prop("disabled")
                }
            },
            _destroy: function () {
                this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
            }
        }]), M.widget("ui.slider", M.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function () {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
            },
            _refresh: function () {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function () {
                var t, e, i = this.options, s = this.element.find(".ui-slider-handle"), n = [];
                for (e = i.values && i.values.length || 1, s.length > e && (s.slice(e).remove(), s = s.slice(0, e)), t = s.length; t < e; t++) n.push("<span tabindex='0'></span>");
                this.handles = s.add(M(n.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (t) {
                    M(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
                })
            },
            _createRange: function () {
                var t = this.options;
                t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : M.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = M("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== t.range && "max" !== t.range || this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function () {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function () {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function (t) {
                var e, i, s, n, o, a, l, h = this, u = this.options;
                return !u.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), e = {
                    x: t.pageX,
                    y: t.pageY
                }, i = this._normValueFromMouse(e), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                    var e = Math.abs(i - h.values(t));
                    (e < s || s === e && (t === h._lastChangedValue || h.values(t) === u.min)) && (s = e, n = M(this), o = t)
                }), !1 !== this._start(t, o) && (this._mouseSliding = !0, this._handleIndex = o, this._addClass(n, null, "ui-state-active"), n.trigger("focus"), a = n.offset(), l = !M(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - a.left,
                    top: t.pageY - a.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
                }, this._animateOff = !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (t) {
                var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function (t) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (t) {
                var e, i, s, n, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 1 < (s = i / e) && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
            },
            _uiHash: function (t, e, i) {
                var s = {handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value()};
                return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
            },
            _hasMultipleValues: function () {
                return this.options.values && this.options.values.length
            },
            _start: function (t, e) {
                return this._trigger("start", t, this._uiHash(e))
            },
            _slide: function (t, e, i) {
                var s, n = this.value(), o = this.values();
                this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
            },
            _stop: function (t, e) {
                this._trigger("stop", t, this._uiHash(e))
            },
            _change: function (t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
            },
            value: function (t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function (t, e) {
                var i, s, n;
                if (1 < arguments.length) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), void this._change(null, t);
                if (!arguments.length) return this._values();
                if (!M.isArray(t)) return this._hasMultipleValues() ? this._values(t) : this.value();
                for (i = this.options.values, s = t, n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(s[n]), this._change(null, n);
                this._refreshValue()
            },
            _setOption: function (t, e) {
                var i, s = 0;
                switch ("range" === t && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), M.isArray(this.options.values) && (s = this.options.values.length), this._super(t, e), t) {
                    case"orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(e), this.handles.css("horizontal" === e ? "bottom" : "left", "");
                        break;
                    case"value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case"values":
                        for (this._animateOff = !0, this._refreshValue(), i = s - 1; 0 <= i; i--) this._change(null, i);
                        this._animateOff = !1;
                        break;
                    case"step":
                    case"min":
                    case"max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case"range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _setOptionDisabled: function (t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _value: function () {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function (t) {
                var e, i, s;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                    return i
                }
                return []
            },
            _trimAlignValue: function (t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = 0 < this.options.step ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
                return 2 * Math.abs(i) >= e && (s += 0 < i ? e : -e), parseFloat(s.toFixed(5))
            },
            _calculateNewMax: function () {
                var t = this.options.max, e = this._valueMin(), i = this.options.step;
                (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function (t) {
                var e = t.toString(), i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.max
            },
            _refreshRange: function (t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === t && this.range.css({height: "", bottom: ""})
            },
            _refreshValue: function () {
                var e, i, t, s, n, o = this.options.range, a = this.options, l = this,
                    h = !this._animateOff && a.animate, u = {};
                this._hasMultipleValues() ? this.handles.each(function (t) {
                    i = (l.values(t) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", M(this).stop(1, 1)[h ? "animate" : "css"](u, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === t && l.range.stop(1, 1)[h ? "animate" : "css"]({left: i + "%"}, a.animate), 1 === t && l.range[h ? "animate" : "css"]({width: i - e + "%"}, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === t && l.range.stop(1, 1)[h ? "animate" : "css"]({bottom: i + "%"}, a.animate), 1 === t && l.range[h ? "animate" : "css"]({height: i - e + "%"}, {
                        queue: !1,
                        duration: a.animate
                    }))), e = i
                }) : (t = this.value(), s = this._valueMin(), n = this._valueMax(), i = n !== s ? (t - s) / (n - s) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, a.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: i + "%"}, a.animate), "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: 100 - i + "%"}, a.animate), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: i + "%"}, a.animate), "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: 100 - i + "%"}, a.animate))
            },
            _handleEvents: {
                keydown: function (t) {
                    var e, i, s, n = M(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case M.ui.keyCode.HOME:
                        case M.ui.keyCode.END:
                        case M.ui.keyCode.PAGE_UP:
                        case M.ui.keyCode.PAGE_DOWN:
                        case M.ui.keyCode.UP:
                        case M.ui.keyCode.RIGHT:
                        case M.ui.keyCode.DOWN:
                        case M.ui.keyCode.LEFT:
                            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(M(t.target), null, "ui-state-active"), !1 === this._start(t, n))) return
                    }
                    switch (s = this.options.step, e = i = this._hasMultipleValues() ? this.values(n) : this.value(), t.keyCode) {
                        case M.ui.keyCode.HOME:
                            i = this._valueMin();
                            break;
                        case M.ui.keyCode.END:
                            i = this._valueMax();
                            break;
                        case M.ui.keyCode.PAGE_UP:
                            i = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case M.ui.keyCode.PAGE_DOWN:
                            i = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case M.ui.keyCode.UP:
                        case M.ui.keyCode.RIGHT:
                            if (e === this._valueMax()) return;
                            i = this._trimAlignValue(e + s);
                            break;
                        case M.ui.keyCode.DOWN:
                        case M.ui.keyCode.LEFT:
                            if (e === this._valueMin()) return;
                            i = this._trimAlignValue(e - s)
                    }
                    this._slide(t, n, i)
                }, keyup: function (t) {
                    var e = M(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, e), this._change(t, e), this._removeClass(M(t.target), null, "ui-state-active"))
                }
            }
        });

        function h(e) {
            return function () {
                var t = this.element.val();
                e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
            }
        }

        M.widget("ui.spinner", {
            version: "1.12.1",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                classes: {
                    "ui-spinner": "ui-corner-all",
                    "ui-spinner-down": "ui-corner-br",
                    "ui-spinner-up": "ui-corner-tr"
                },
                culture: null,
                icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function () {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function () {
                var s = this._super(), n = this.element;
                return M.each(["min", "max", "step"], function (t, e) {
                    var i = n.attr(e);
                    null != i && i.length && (s[e] = i)
                }), s
            },
            _events: {
                keydown: function (t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                }, keyup: "_stop", focus: function () {
                    this.previous = this.element.val()
                }, blur: function (t) {
                    this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t))
                }, mousewheel: function (t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((0 < e ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                            this.spinning && this._stop(t)
                        }, 100), t.preventDefault()
                    }
                }, "mousedown .ui-spinner-button": function (t) {
                    var e;

                    function i() {
                        this.element[0] === M.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = e, this._delay(function () {
                            this.previous = e
                        }))
                    }

                    e = this.element[0] === M.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, i.call(this)
                    }), !1 !== this._start(t) && this._repeat(null, M(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) {
                    if (M(t.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(t) && void this._repeat(null, M(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                }, "mouseleave .ui-spinner-button": "_stop"
            },
            _enhance: function () {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
            },
            _draw: function () {
                this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({classes: {"ui-button": ""}}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                    icon: this.options.icons.up,
                    showLabel: !1
                }), this.buttons.last().button({
                    icon: this.options.icons.down,
                    showLabel: !1
                }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height())
            },
            _keydown: function (t) {
                var e = this.options, i = M.ui.keyCode;
                switch (t.keyCode) {
                    case i.UP:
                        return this._repeat(null, 1, t), !0;
                    case i.DOWN:
                        return this._repeat(null, -1, t), !0;
                    case i.PAGE_UP:
                        return this._repeat(null, e.page, t), !0;
                    case i.PAGE_DOWN:
                        return this._repeat(null, -e.page, t), !0
                }
                return !1
            },
            _start: function (t) {
                return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0)
            },
            _repeat: function (t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                    this._repeat(40, e, i)
                }, t), this._spin(e * this.options.step, i)
            },
            _spin: function (t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {value: i}) || (this._value(i), this.counter++)
            },
            _increment: function (t) {
                var e = this.options.incremental;
                return e ? M.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function (t) {
                var e = t.toString(), i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function (t) {
                var e, i, s = this.options;
                return i = t - (e = null !== s.min ? s.min : 0), t = e + (i = Math.round(i / s.step) * s.step), t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && t < s.min ? s.min : t
            },
            _stop: function (t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function (t, e) {
                var i, s, n;
                if ("culture" === t || "numberFormat" === t) return i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i));
                "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e)
            },
            _setOptionDisabled: function (t) {
                this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
            },
            _setOptions: h(function (t) {
                this._super(t)
            }),
            _parse: function (t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function (t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function () {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function () {
                var t = this.value();
                return null !== t && t === this._adjustValue(t)
            },
            _value: function (t, e) {
                var i;
                "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
            },
            _destroy: function () {
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: h(function (t) {
                this._stepUp(t)
            }),
            _stepUp: function (t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop())
            },
            stepDown: h(function (t) {
                this._stepDown(t)
            }),
            _stepDown: function (t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
            },
            pageUp: h(function (t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: h(function (t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function (t) {
                if (!arguments.length) return this._parse(this.element.val());
                h(this._value).call(this, t)
            },
            widget: function () {
                return this.uiSpinner
            }
        }), !1 !== M.uiBackCompat && M.widget("ui.spinner", M.ui.spinner, {
            _enhance: function () {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
            }, _uiSpinnerHtml: function () {
                return "<span>"
            }, _buttonHtml: function () {
                return "<a></a><a></a>"
            }
        });
        M.ui.spinner
    }, "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}();
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
    function b(b) {
        var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }

    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks) for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener) for (var c = h.length; c;) this.addEventListener(h[--c], b, !1); else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener) for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (b) {
            var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        }, getPageHeight: function (b) {
            return a(b).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    a.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        }, unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
});
/*
  html2canvas 0.5.0-beta3 <http://html2canvas.hertzen.com>
  Copyright (c) 2016 Niklas von Hertzen

  Released under  License
*/
!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var n;
        "undefined" != typeof window ? n = window : "undefined" != typeof global ? n = global : "undefined" != typeof self && (n = self), n.html2canvas = e()
    }
}(function () {
    var e;
    return function n(e, f, o) {
        function d(t, l) {
            if (!f[t]) {
                if (!e[t]) {
                    var s = "function" == typeof require && require;
                    if (!l && s) return s(t, !0);
                    if (i) return i(t, !0);
                    var u = new Error("Cannot find module '" + t + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var a = f[t] = {exports: {}};
                e[t][0].call(a.exports, function (n) {
                    var f = e[t][1][n];
                    return d(f ? f : n)
                }, a, a.exports, n, e, f, o)
            }
            return f[t].exports
        }

        for (var i = "function" == typeof require && require, t = 0; t < o.length; t++) d(o[t]);
        return d
    }({
        1: [function (n, f, o) {
            (function (n) {
                !function (d) {
                    function i(e) {
                        throw RangeError(I[e])
                    }

                    function t(e, n) {
                        for (var f = e.length; f--;) e[f] = n(e[f]);
                        return e
                    }

                    function l(e, n) {
                        return t(e.split(H), n).join(".")
                    }

                    function s(e) {
                        for (var n, f, o = [], d = 0, i = e.length; i > d;) n = e.charCodeAt(d++), n >= 55296 && 56319 >= n && i > d ? (f = e.charCodeAt(d++), 56320 == (64512 & f) ? o.push(((1023 & n) << 10) + (1023 & f) + 65536) : (o.push(n), d--)) : o.push(n);
                        return o
                    }

                    function u(e) {
                        return t(e, function (e) {
                            var n = "";
                            return e > 65535 && (e -= 65536, n += L(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), n += L(e)
                        }).join("")
                    }

                    function a(e) {
                        return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : k
                    }

                    function p(e, n) {
                        return e + 22 + 75 * (26 > e) - ((0 != n) << 5)
                    }

                    function c(e, n, f) {
                        var o = 0;
                        for (e = f ? K(e / B) : e >> 1, e += K(e / n); e > J * z >> 1; o += k) e = K(e / J);
                        return K(o + (J + 1) * e / (e + A))
                    }

                    function y(e) {
                        var n, f, o, d, t, l, s, p, y, m, r = [], v = e.length, w = 0, b = D, g = C;
                        for (f = e.lastIndexOf(E), 0 > f && (f = 0), o = 0; f > o; ++o) e.charCodeAt(o) >= 128 && i("not-basic"), r.push(e.charCodeAt(o));
                        for (d = f > 0 ? f + 1 : 0; v > d;) {
                            for (t = w, l = 1, s = k; d >= v && i("invalid-input"), p = a(e.charCodeAt(d++)), (p >= k || p > K((j - w) / l)) && i("overflow"), w += p * l, y = g >= s ? q : s >= g + z ? z : s - g, !(y > p); s += k) m = k - y, l > K(j / m) && i("overflow"), l *= m;
                            n = r.length + 1, g = c(w - t, n, 0 == t), K(w / n) > j - b && i("overflow"), b += K(w / n), w %= n, r.splice(w++, 0, b)
                        }
                        return u(r)
                    }

                    function m(e) {
                        var n, f, o, d, t, l, u, a, y, m, r, v, w, b, g, h = [];
                        for (e = s(e), v = e.length, n = D, f = 0, t = C, l = 0; v > l; ++l) r = e[l], 128 > r && h.push(L(r));
                        for (o = d = h.length, d && h.push(E); v > o;) {
                            for (u = j, l = 0; v > l; ++l) r = e[l], r >= n && u > r && (u = r);
                            for (w = o + 1, u - n > K((j - f) / w) && i("overflow"), f += (u - n) * w, n = u, l = 0; v > l; ++l) if (r = e[l], n > r && ++f > j && i("overflow"), r == n) {
                                for (a = f, y = k; m = t >= y ? q : y >= t + z ? z : y - t, !(m > a); y += k) g = a - m, b = k - m, h.push(L(p(m + g % b, 0))), a = K(g / b);
                                h.push(L(p(a, 0))), t = c(f, w, o == d), f = 0, ++o
                            }
                            ++f, ++n
                        }
                        return h.join("")
                    }

                    function r(e) {
                        return l(e, function (e) {
                            return F.test(e) ? y(e.slice(4).toLowerCase()) : e
                        })
                    }

                    function v(e) {
                        return l(e, function (e) {
                            return G.test(e) ? "xn--" + m(e) : e
                        })
                    }

                    var w = "object" == typeof o && o, b = "object" == typeof f && f && f.exports == w && f,
                        g = "object" == typeof n && n;
                    (g.global === g || g.window === g) && (d = g);
                    var h, x, j = 2147483647, k = 36, q = 1, z = 26, A = 38, B = 700, C = 72, D = 128, E = "-",
                        F = /^xn--/, G = /[^ -~]/, H = /\x2E|\u3002|\uFF0E|\uFF61/g, I = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        }, J = k - q, K = Math.floor, L = String.fromCharCode;
                    if (h = {
                        version: "1.2.4",
                        ucs2: {decode: s, encode: u},
                        decode: y,
                        encode: m,
                        toASCII: v,
                        toUnicode: r
                    }, "function" == typeof e && "object" == typeof e.amd && e.amd) e("punycode", function () {
                        return h
                    }); else if (w && !w.nodeType) if (b) b.exports = h; else for (x in h) h.hasOwnProperty(x) && (w[x] = h[x]); else d.punycode = h
                }(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}], 2: [function (e, n) {
            function f(e, n, f) {
                !e.defaultView || n === e.defaultView.pageXOffset && f === e.defaultView.pageYOffset || e.defaultView.scrollTo(n, f)
            }

            function o(e, n) {
                try {
                    n && (n.width = e.width, n.height = e.height, n.getContext("2d").putImageData(e.getContext("2d").getImageData(0, 0, e.width, e.height), 0, 0))
                } catch (f) {
                    t("Unable to copy canvas content from", e, f)
                }
            }

            function d(e, n) {
                for (var f = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), i = e.firstChild; i;) (n === !0 || 1 !== i.nodeType || "SCRIPT" !== i.nodeName) && f.appendChild(d(i, n)), i = i.nextSibling;
                return 1 === e.nodeType && (f._scrollTop = e.scrollTop, f._scrollLeft = e.scrollLeft, "CANVAS" === e.nodeName ? o(e, f) : ("TEXTAREA" === e.nodeName || "SELECT" === e.nodeName) && (f.value = e.value)), f
            }

            function i(e) {
                if (1 === e.nodeType) {
                    e.scrollTop = e._scrollTop, e.scrollLeft = e._scrollLeft;
                    for (var n = e.firstChild; n;) i(n), n = n.nextSibling
                }
            }

            var t = e("./log");
            n.exports = function (e, n, o, t, l, s, u) {
                var a = d(e.documentElement, l.javascriptEnabled), p = n.createElement("iframe");
                return p.className = "html2canvas-container", p.style.visibility = "hidden", p.style.position = "fixed", p.style.left = "-10000px", p.style.top = "0px", p.style.border = "0", p.width = o, p.height = t, p.scrolling = "no", n.body.appendChild(p), new Promise(function (n) {
                    var o = p.contentWindow.document;
                    p.contentWindow.onload = p.onload = function () {
                        var e = setInterval(function () {
                            o.body.childNodes.length > 0 && (i(o.documentElement), clearInterval(e), "view" === l.type && (p.contentWindow.scrollTo(s, u), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || p.contentWindow.scrollY === u && p.contentWindow.scrollX === s || (o.documentElement.style.top = -u + "px", o.documentElement.style.left = -s + "px", o.documentElement.style.position = "absolute")), n(p))
                        }, 50)
                    }, o.open(), o.write("<!DOCTYPE html><html></html>"), f(e, s, u), o.replaceChild(o.adoptNode(a), o.documentElement), o.close()
                })
            }
        }, {"./log": 13}], 3: [function (e, n) {
            function f(e) {
                this.r = 0, this.g = 0, this.b = 0, this.a = null;
                this.fromArray(e) || this.namedColor(e) || this.rgb(e) || this.rgba(e) || this.hex6(e) || this.hex3(e)
            }

            f.prototype.darken = function (e) {
                var n = 1 - e;
                return new f([Math.round(this.r * n), Math.round(this.g * n), Math.round(this.b * n), this.a])
            }, f.prototype.isTransparent = function () {
                return 0 === this.a
            }, f.prototype.isBlack = function () {
                return 0 === this.r && 0 === this.g && 0 === this.b
            }, f.prototype.fromArray = function (e) {
                return Array.isArray(e) && (this.r = Math.min(e[0], 255), this.g = Math.min(e[1], 255), this.b = Math.min(e[2], 255), e.length > 3 && (this.a = e[3])), Array.isArray(e)
            };
            var o = /^#([a-f0-9]{3})$/i;
            f.prototype.hex3 = function (e) {
                var n = null;
                return null !== (n = e.match(o)) && (this.r = parseInt(n[1][0] + n[1][0], 16), this.g = parseInt(n[1][1] + n[1][1], 16), this.b = parseInt(n[1][2] + n[1][2], 16)), null !== n
            };
            var d = /^#([a-f0-9]{6})$/i;
            f.prototype.hex6 = function (e) {
                var n = null;
                return null !== (n = e.match(d)) && (this.r = parseInt(n[1].substring(0, 2), 16), this.g = parseInt(n[1].substring(2, 4), 16), this.b = parseInt(n[1].substring(4, 6), 16)), null !== n
            };
            var i = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
            f.prototype.rgb = function (e) {
                var n = null;
                return null !== (n = e.match(i)) && (this.r = Number(n[1]), this.g = Number(n[2]), this.b = Number(n[3])), null !== n
            };
            var t = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
            f.prototype.rgba = function (e) {
                var n = null;
                return null !== (n = e.match(t)) && (this.r = Number(n[1]), this.g = Number(n[2]), this.b = Number(n[3]), this.a = Number(n[4])), null !== n
            }, f.prototype.toString = function () {
                return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")"
            }, f.prototype.namedColor = function (e) {
                e = e.toLowerCase();
                var n = l[e];
                if (n) this.r = n[0], this.g = n[1], this.b = n[2]; else if ("transparent" === e) return this.r = this.g = this.b = this.a = 0, !0;
                return !!n
            }, f.prototype.isColor = !0;
            var l = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            };
            n.exports = f
        }, {}], 4: [function (n, f) {
            function o(e, n) {
                var f = j++;
                if (n = n || {}, n.logging && (v.options.logging = !0, v.options.start = Date.now()), n.async = "undefined" == typeof n.async ? !0 : n.async, n.allowTaint = "undefined" == typeof n.allowTaint ? !1 : n.allowTaint, n.removeContainer = "undefined" == typeof n.removeContainer ? !0 : n.removeContainer, n.javascriptEnabled = "undefined" == typeof n.javascriptEnabled ? !1 : n.javascriptEnabled, n.imageTimeout = "undefined" == typeof n.imageTimeout ? 1e4 : n.imageTimeout, n.renderer = "function" == typeof n.renderer ? n.renderer : c, n.strict = !!n.strict, "string" == typeof e) {
                    if ("string" != typeof n.proxy) return Promise.reject("Proxy must be used when rendering url");
                    var o = null != n.width ? n.width : window.innerWidth,
                        t = null != n.height ? n.height : window.innerHeight;
                    return g(a(e), n.proxy, document, o, t, n).then(function (e) {
                        return i(e.contentWindow.document.documentElement, e, n, o, t)
                    })
                }
                var l = (void 0 === e ? [document.documentElement] : e.length ? e : [e])[0];
                return l.setAttribute(x + f, f), d(l.ownerDocument, n, l.ownerDocument.defaultView.innerWidth, l.ownerDocument.defaultView.innerHeight, f).then(function (e) {
                    return "function" == typeof n.onrendered && (v("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), n.onrendered(e)), e
                })
            }

            function d(e, n, f, o, d) {
                return b(e, e, f, o, n, e.defaultView.pageXOffset, e.defaultView.pageYOffset).then(function (t) {
                    v("Document cloned");
                    var l = x + d, s = "[" + l + "='" + d + "']";
                    e.querySelector(s).removeAttribute(l);
                    var u = t.contentWindow, a = u.document.querySelector(s),
                        p = Promise.resolve("function" == typeof n.onclone ? n.onclone(u.document) : !0);
                    return p.then(function () {
                        return i(a, t, n, f, o)
                    })
                })
            }

            function i(e, n, f, o, d) {
                var i = n.contentWindow, a = new p(i.document), c = new y(f, a), r = h(e),
                    w = "view" === f.type ? o : s(i.document), b = "view" === f.type ? d : u(i.document),
                    g = new f.renderer(w, b, c, f, document), x = new m(e, g, a, c, f);
                return x.ready.then(function () {
                    v("Finished rendering");
                    var o;
                    return o = "view" === f.type ? l(g.canvas, {
                        width: g.canvas.width,
                        height: g.canvas.height,
                        top: 0,
                        left: 0,
                        x: 0,
                        y: 0
                    }) : e === i.document.body || e === i.document.documentElement || null != f.canvas ? g.canvas : l(g.canvas, {
                        width: null != f.width ? f.width : r.width,
                        height: null != f.height ? f.height : r.height,
                        top: r.top,
                        left: r.left,
                        x: 0,
                        y: 0
                    }), t(n, f), o
                })
            }

            function t(e, n) {
                n.removeContainer && (e.parentNode.removeChild(e), v("Cleaned up container"))
            }

            function l(e, n) {
                var f = document.createElement("canvas"), o = Math.min(e.width - 1, Math.max(0, n.left)),
                    d = Math.min(e.width, Math.max(1, n.left + n.width)),
                    i = Math.min(e.height - 1, Math.max(0, n.top)),
                    t = Math.min(e.height, Math.max(1, n.top + n.height));
                f.width = n.width, f.height = n.height;
                var l = d - o, s = t - i;
                return v("Cropping canvas at:", "left:", n.left, "top:", n.top, "width:", l, "height:", s), v("Resulting crop with width", n.width, "and height", n.height, "with x", o, "and y", i), f.getContext("2d").drawImage(e, o, i, l, s, n.x, n.y, l, s), f
            }

            function s(e) {
                return Math.max(Math.max(e.body.scrollWidth, e.documentElement.scrollWidth), Math.max(e.body.offsetWidth, e.documentElement.offsetWidth), Math.max(e.body.clientWidth, e.documentElement.clientWidth))
            }

            function u(e) {
                return Math.max(Math.max(e.body.scrollHeight, e.documentElement.scrollHeight), Math.max(e.body.offsetHeight, e.documentElement.offsetHeight), Math.max(e.body.clientHeight, e.documentElement.clientHeight))
            }

            function a(e) {
                var n = document.createElement("a");
                return n.href = e, n.href = n.href, n
            }

            var p = n("./support"), c = n("./renderers/canvas"), y = n("./imageloader"), m = n("./nodeparser"),
                r = n("./nodecontainer"), v = n("./log"), w = n("./utils"), b = n("./clone"),
                g = n("./proxy").loadUrlDocument, h = w.getBounds, x = "data-html2canvas-node", j = 0;
            o.CanvasRenderer = c, o.NodeContainer = r, o.log = v, o.utils = w;
            var k = "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext ? function () {
                return Promise.reject("No canvas support")
            } : o;
            f.exports = k, "function" == typeof e && e.amd && e("html2canvas", [], function () {
                return k
            })
        }, {
            "./clone": 2,
            "./imageloader": 11,
            "./log": 13,
            "./nodecontainer": 14,
            "./nodeparser": 15,
            "./proxy": 16,
            "./renderers/canvas": 20,
            "./support": 22,
            "./utils": 26
        }], 5: [function (e, n) {
            function f(e) {
                if (this.src = e, o("DummyImageContainer for", e), !this.promise || !this.image) {
                    o("Initiating DummyImageContainer"), f.prototype.image = new Image;
                    var n = this.image;
                    f.prototype.promise = new Promise(function (e, f) {
                        n.onload = e, n.onerror = f, n.src = d(), n.complete === !0 && e(n)
                    })
                }
            }

            var o = e("./log"), d = e("./utils").smallImage;
            n.exports = f
        }, {"./log": 13, "./utils": 26}], 6: [function (e, n) {
            function f(e, n) {
                var f, d, i = document.createElement("div"), t = document.createElement("img"),
                    l = document.createElement("span"), s = "Hidden Text";
                i.style.visibility = "hidden", i.style.fontFamily = e, i.style.fontSize = n, i.style.margin = 0, i.style.padding = 0, document.body.appendChild(i), t.src = o(), t.width = 1, t.height = 1, t.style.margin = 0, t.style.padding = 0, t.style.verticalAlign = "baseline", l.style.fontFamily = e, l.style.fontSize = n, l.style.margin = 0, l.style.padding = 0, l.appendChild(document.createTextNode(s)), i.appendChild(l), i.appendChild(t), f = t.offsetTop - l.offsetTop + 1, i.removeChild(l), i.appendChild(document.createTextNode(s)), i.style.lineHeight = "normal", t.style.verticalAlign = "super", d = t.offsetTop - i.offsetTop + 1, document.body.removeChild(i), this.baseline = f, this.lineWidth = 1, this.middle = d
            }

            var o = e("./utils").smallImage;
            n.exports = f
        }, {"./utils": 26}], 7: [function (e, n) {
            function f() {
                this.data = {}
            }

            var o = e("./font");
            f.prototype.getMetrics = function (e, n) {
                return void 0 === this.data[e + "-" + n] && (this.data[e + "-" + n] = new o(e, n)), this.data[e + "-" + n]
            }, n.exports = f
        }, {"./font": 6}], 8: [function (e, n) {
            function f(n, f, o) {
                this.image = null, this.src = n;
                var i = this, t = d(n);
                this.promise = (f ? new Promise(function (e) {
                    "about:blank" === n.contentWindow.document.URL || null == n.contentWindow.document.documentElement ? n.contentWindow.onload = n.onload = function () {
                        e(n)
                    } : e(n)
                }) : this.proxyLoad(o.proxy, t, o)).then(function (n) {
                    var f = e("./core");
                    return f(n.contentWindow.document.documentElement, {
                        type: "view",
                        width: n.width,
                        height: n.height,
                        proxy: o.proxy,
                        javascriptEnabled: o.javascriptEnabled,
                        removeContainer: o.removeContainer,
                        allowTaint: o.allowTaint,
                        imageTimeout: o.imageTimeout / 2
                    })
                }).then(function (e) {
                    return i.image = e
                })
            }

            var o = e("./utils"), d = o.getBounds, i = e("./proxy").loadUrlDocument;
            f.prototype.proxyLoad = function (e, n, f) {
                var o = this.src;
                return i(o.src, e, o.ownerDocument, n.width, n.height, f)
            }, n.exports = f
        }, {"./core": 4, "./proxy": 16, "./utils": 26}], 9: [function (e, n) {
            function f(e) {
                this.src = e.value, this.colorStops = [], this.type = null, this.x0 = .5, this.y0 = .5, this.x1 = .5, this.y1 = .5, this.promise = Promise.resolve(!0)
            }

            f.TYPES = {
                LINEAR: 1,
                RADIAL: 2
            }, f.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i, n.exports = f
        }, {}], 10: [function (e, n) {
            function f(e, n) {
                this.src = e, this.image = new Image;
                var f = this;
                this.tainted = null, this.promise = new Promise(function (o, d) {
                    f.image.onload = o, f.image.onerror = d, n && (f.image.crossOrigin = "anonymous"), f.image.src = e, f.image.complete === !0 && o(f.image)
                })
            }

            n.exports = f
        }, {}], 11: [function (e, n) {
            function f(e, n) {
                this.link = null, this.options = e, this.support = n, this.origin = this.getOrigin(window.location.href)
            }

            var o = e("./log"), d = e("./imagecontainer"), i = e("./dummyimagecontainer"),
                t = e("./proxyimagecontainer"), l = e("./framecontainer"), s = e("./svgcontainer"),
                u = e("./svgnodecontainer"), a = e("./lineargradientcontainer"), p = e("./webkitgradientcontainer"),
                c = e("./utils").bind;
            f.prototype.findImages = function (e) {
                var n = [];
                return e.reduce(function (e, n) {
                    switch (n.node.nodeName) {
                        case"IMG":
                            return e.concat([{args: [n.node.src], method: "url"}]);
                        case"svg":
                        case"IFRAME":
                            return e.concat([{args: [n.node], method: n.node.nodeName}])
                    }
                    return e
                }, []).forEach(this.addImage(n, this.loadImage), this), n
            }, f.prototype.findBackgroundImage = function (e, n) {
                return n.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(e, this.loadImage), this), e
            }, f.prototype.addImage = function (e, n) {
                return function (f) {
                    f.args.forEach(function (d) {
                        this.imageExists(e, d) || (e.splice(0, 0, n.call(this, f)), o("Added image #" + e.length, "string" == typeof d ? d.substring(0, 100) : d))
                    }, this)
                }
            }, f.prototype.hasImageBackground = function (e) {
                return "none" !== e.method
            }, f.prototype.loadImage = function (e) {
                if ("url" === e.method) {
                    var n = e.args[0];
                    return !this.isSVG(n) || this.support.svg || this.options.allowTaint ? n.match(/data:image\/.*;base64,/i) ? new d(n.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1) : this.isSameOrigin(n) || this.options.allowTaint === !0 || this.isSVG(n) ? new d(n, !1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new d(n, !0) : this.options.proxy ? new t(n, this.options.proxy) : new i(n) : new s(n)
                }
                return "linear-gradient" === e.method ? new a(e) : "gradient" === e.method ? new p(e) : "svg" === e.method ? new u(e.args[0], this.support.svg) : "IFRAME" === e.method ? new l(e.args[0], this.isSameOrigin(e.args[0].src), this.options) : new i(e)
            }, f.prototype.isSVG = function (e) {
                return "svg" === e.substring(e.length - 3).toLowerCase() || s.prototype.isInline(e)
            }, f.prototype.imageExists = function (e, n) {
                return e.some(function (e) {
                    return e.src === n
                })
            }, f.prototype.isSameOrigin = function (e) {
                return this.getOrigin(e) === this.origin
            }, f.prototype.getOrigin = function (e) {
                var n = this.link || (this.link = document.createElement("a"));
                return n.href = e, n.href = n.href, n.protocol + n.hostname + n.port
            }, f.prototype.getPromise = function (e) {
                return this.timeout(e, this.options.imageTimeout)["catch"](function () {
                    var n = new i(e.src);
                    return n.promise.then(function (n) {
                        e.image = n
                    })
                })
            }, f.prototype.get = function (e) {
                var n = null;
                return this.images.some(function (f) {
                    return (n = f).src === e
                }) ? n : null
            }, f.prototype.fetch = function (e) {
                return this.images = e.reduce(c(this.findBackgroundImage, this), this.findImages(e)), this.images.forEach(function (e, n) {
                    e.promise.then(function () {
                        o("Succesfully loaded image #" + (n + 1), e)
                    }, function (f) {
                        o("Failed loading image #" + (n + 1), e, f)
                    })
                }), this.ready = Promise.all(this.images.map(this.getPromise, this)), o("Finished searching images"), this
            }, f.prototype.timeout = function (e, n) {
                var f, d = Promise.race([e.promise, new Promise(function (d, i) {
                    f = setTimeout(function () {
                        o("Timed out loading image", e), i(e)
                    }, n)
                })]).then(function (e) {
                    return clearTimeout(f), e
                });
                return d["catch"](function () {
                    clearTimeout(f)
                }), d
            }, n.exports = f
        }, {
            "./dummyimagecontainer": 5,
            "./framecontainer": 8,
            "./imagecontainer": 10,
            "./lineargradientcontainer": 12,
            "./log": 13,
            "./proxyimagecontainer": 17,
            "./svgcontainer": 23,
            "./svgnodecontainer": 24,
            "./utils": 26,
            "./webkitgradientcontainer": 27
        }], 12: [function (e, n) {
            function f(e) {
                o.apply(this, arguments), this.type = o.TYPES.LINEAR;
                var n = f.REGEXP_DIRECTION.test(e.args[0]) || !o.REGEXP_COLORSTOP.test(e.args[0]);
                n ? e.args[0].split(/\s+/).reverse().forEach(function (e, n) {
                    switch (e) {
                        case"left":
                            this.x0 = 0, this.x1 = 1;
                            break;
                        case"top":
                            this.y0 = 0, this.y1 = 1;
                            break;
                        case"right":
                            this.x0 = 1, this.x1 = 0;
                            break;
                        case"bottom":
                            this.y0 = 1, this.y1 = 0;
                            break;
                        case"to":
                            var f = this.y0, o = this.x0;
                            this.y0 = this.y1, this.x0 = this.x1, this.x1 = o, this.y1 = f;
                            break;
                        case"center":
                            break;
                        default:
                            var d = .01 * parseFloat(e, 10);
                            if (isNaN(d)) break;
                            0 === n ? (this.y0 = d, this.y1 = 1 - this.y0) : (this.x0 = d, this.x1 = 1 - this.x0)
                    }
                }, this) : (this.y0 = 0, this.y1 = 1), this.colorStops = e.args.slice(n ? 1 : 0).map(function (e) {
                    var n = e.match(o.REGEXP_COLORSTOP), f = +n[2], i = 0 === f ? "%" : n[3];
                    return {color: new d(n[1]), stop: "%" === i ? f / 100 : null}
                }), null === this.colorStops[0].stop && (this.colorStops[0].stop = 0), null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1), this.colorStops.forEach(function (e, n) {
                    null === e.stop && this.colorStops.slice(n).some(function (f, o) {
                        return null !== f.stop ? (e.stop = (f.stop - this.colorStops[n - 1].stop) / (o + 1) + this.colorStops[n - 1].stop, !0) : !1
                    }, this)
                }, this)
            }

            var o = e("./gradientcontainer"), d = e("./color");
            f.prototype = Object.create(o.prototype), f.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i, n.exports = f
        }, {"./color": 3, "./gradientcontainer": 9}], 13: [function (e, n) {
            var f = function () {
                f.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - f.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
            };
            f.options = {logging: !1}, n.exports = f
        }, {}], 14: [function (e, n) {
            function f(e, n) {
                this.node = e, this.parent = n, this.stack = null, this.bounds = null, this.borders = null, this.clip = [], this.backgroundClip = [], this.offsetBounds = null, this.visible = null, this.computedStyles = null, this.colors = {}, this.styles = {}, this.backgroundImages = null, this.transformData = null, this.transformMatrix = null, this.isPseudoElement = !1, this.opacity = null
            }

            function o(e) {
                var n = e.options[e.selectedIndex || 0];
                return n ? n.text || "" : ""
            }

            function d(e) {
                if (e && "matrix" === e[1]) return e[2].split(",").map(function (e) {
                    return parseFloat(e.trim())
                });
                if (e && "matrix3d" === e[1]) {
                    var n = e[2].split(",").map(function (e) {
                        return parseFloat(e.trim())
                    });
                    return [n[0], n[1], n[4], n[5], n[12], n[13]]
                }
            }

            function i(e) {
                return -1 !== e.toString().indexOf("%")
            }

            function t(e) {
                return e.replace("px", "")
            }

            function l(e) {
                return parseFloat(e)
            }

            var s = e("./color"), u = e("./utils"), a = u.getBounds, p = u.parseBackgrounds, c = u.offsetBounds;
            f.prototype.cloneTo = function (e) {
                e.visible = this.visible, e.borders = this.borders, e.bounds = this.bounds, e.clip = this.clip, e.backgroundClip = this.backgroundClip, e.computedStyles = this.computedStyles, e.styles = this.styles, e.backgroundImages = this.backgroundImages, e.opacity = this.opacity
            }, f.prototype.getOpacity = function () {
                return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity
            }, f.prototype.assignStack = function (e) {
                this.stack = e, e.children.push(this)
            }, f.prototype.isElementVisible = function () {
                return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"))
            }, f.prototype.css = function (e) {
                return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)), this.styles[e] || (this.styles[e] = this.computedStyles[e])
            }, f.prototype.prefixedCss = function (e) {
                var n = ["webkit", "moz", "ms", "o"], f = this.css(e);
                return void 0 === f && n.some(function (n) {
                    return f = this.css(n + e.substr(0, 1).toUpperCase() + e.substr(1)), void 0 !== f
                }, this), void 0 === f ? null : f
            }, f.prototype.computedStyle = function (e) {
                return this.node.ownerDocument.defaultView.getComputedStyle(this.node, e)
            }, f.prototype.cssInt = function (e) {
                var n = parseInt(this.css(e), 10);
                return isNaN(n) ? 0 : n
            }, f.prototype.color = function (e) {
                return this.colors[e] || (this.colors[e] = new s(this.css(e)))
            }, f.prototype.cssFloat = function (e) {
                var n = parseFloat(this.css(e));
                return isNaN(n) ? 0 : n
            }, f.prototype.fontWeight = function () {
                var e = this.css("fontWeight");
                switch (parseInt(e, 10)) {
                    case 401:
                        e = "bold";
                        break;
                    case 400:
                        e = "normal"
                }
                return e
            }, f.prototype.parseClip = function () {
                var e = this.css("clip").match(this.CLIP);
                return e ? {
                    top: parseInt(e[1], 10),
                    right: parseInt(e[2], 10),
                    bottom: parseInt(e[3], 10),
                    left: parseInt(e[4], 10)
                } : null
            }, f.prototype.parseBackgroundImages = function () {
                return this.backgroundImages || (this.backgroundImages = p(this.css("backgroundImage")))
            }, f.prototype.cssList = function (e, n) {
                var f = (this.css(e) || "").split(",");
                return f = f[n || 0] || f[0] || "auto", f = f.trim().split(" "), 1 === f.length && (f = [f[0], i(f[0]) ? "auto" : f[0]]), f
            }, f.prototype.parseBackgroundSize = function (e, n, f) {
                var o, d, t = this.cssList("backgroundSize", f);
                if (i(t[0])) o = e.width * parseFloat(t[0]) / 100; else {
                    if (/contain|cover/.test(t[0])) {
                        var l = e.width / e.height, s = n.width / n.height;
                        return s > l ^ "contain" === t[0] ? {width: e.height * s, height: e.height} : {
                            width: e.width,
                            height: e.width / s
                        }
                    }
                    o = parseInt(t[0], 10)
                }
                return d = "auto" === t[0] && "auto" === t[1] ? n.height : "auto" === t[1] ? o / n.width * n.height : i(t[1]) ? e.height * parseFloat(t[1]) / 100 : parseInt(t[1], 10), "auto" === t[0] && (o = d / n.height * n.width), {
                    width: o,
                    height: d
                }
            }, f.prototype.parseBackgroundPosition = function (e, n, f, o) {
                var d, t, l = this.cssList("backgroundPosition", f);
                return d = i(l[0]) ? (e.width - (o || n).width) * (parseFloat(l[0]) / 100) : parseInt(l[0], 10), t = "auto" === l[1] ? d / n.width * n.height : i(l[1]) ? (e.height - (o || n).height) * parseFloat(l[1]) / 100 : parseInt(l[1], 10), "auto" === l[0] && (d = t / n.height * n.width), {
                    left: d,
                    top: t
                }
            }, f.prototype.parseBackgroundRepeat = function (e) {
                return this.cssList("backgroundRepeat", e)[0]
            }, f.prototype.parseTextShadows = function () {
                var e = this.css("textShadow"), n = [];
                if (e && "none" !== e) for (var f = e.match(this.TEXT_SHADOW_PROPERTY), o = 0; f && o < f.length; o++) {
                    var d = f[o].match(this.TEXT_SHADOW_VALUES);
                    n.push({
                        color: new s(d[0]),
                        offsetX: d[1] ? parseFloat(d[1].replace("px", "")) : 0,
                        offsetY: d[2] ? parseFloat(d[2].replace("px", "")) : 0,
                        blur: d[3] ? d[3].replace("px", "") : 0
                    })
                }
                return n
            }, f.prototype.parseTransform = function () {
                if (!this.transformData) if (this.hasTransform()) {
                    var e = this.parseBounds(), n = this.prefixedCss("transformOrigin").split(" ").map(t).map(l);
                    n[0] += e.left, n[1] += e.top, this.transformData = {origin: n, matrix: this.parseTransformMatrix()}
                } else this.transformData = {origin: [0, 0], matrix: [1, 0, 0, 1, 0, 0]};
                return this.transformData
            }, f.prototype.parseTransformMatrix = function () {
                if (!this.transformMatrix) {
                    var e = this.prefixedCss("transform"), n = e ? d(e.match(this.MATRIX_PROPERTY)) : null;
                    this.transformMatrix = n ? n : [1, 0, 0, 1, 0, 0]
                }
                return this.transformMatrix
            }, f.prototype.parseBounds = function () {
                return this.bounds || (this.bounds = this.hasTransform() ? c(this.node) : a(this.node))
            }, f.prototype.hasTransform = function () {
                return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform()
            }, f.prototype.getValue = function () {
                var e = this.node.value || "";
                return "SELECT" === this.node.tagName ? e = o(this.node) : "password" === this.node.type && (e = Array(e.length + 1).join("•")), 0 === e.length ? this.node.placeholder || "" : e
            }, f.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/, f.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g, f.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g, f.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/, n.exports = f
        }, {"./color": 3, "./utils": 26}], 15: [function (e, n) {
            function f(e, n, f, o, d) {
                N("Starting NodeParser"), this.renderer = n, this.options = d, this.range = null, this.support = f, this.renderQueue = [], this.stack = new U(!0, 1, e.ownerDocument, null);
                var i = new P(e, null);
                if (d.background && n.rectangle(0, 0, n.width, n.height, new T(d.background)), e === e.ownerDocument.documentElement) {
                    var t = new P(i.color("backgroundColor").isTransparent() ? e.ownerDocument.body : e.ownerDocument.documentElement, null);
                    n.rectangle(0, 0, n.width, n.height, t.color("backgroundColor"))
                }
                i.visibile = i.isElementVisible(), this.createPseudoHideStyles(e.ownerDocument), this.disableAnimations(e.ownerDocument), this.nodes = I([i].concat(this.getChildren(i)).filter(function (e) {
                    return e.visible = e.isElementVisible()
                }).map(this.getPseudoElements, this)), this.fontMetrics = new S, N("Fetched nodes, total:", this.nodes.length), N("Calculate overflow clips"), this.calculateOverflowClips(), N("Start fetching images"), this.images = o.fetch(this.nodes.filter(A)), this.ready = this.images.ready.then(W(function () {
                    return N("Images loaded, starting parsing"), N("Creating stacking contexts"), this.createStackingContexts(), N("Sorting stacking contexts"), this.sortStackingContexts(this.stack), this.parse(this.stack), N("Render queue created with " + this.renderQueue.length + " items"), new Promise(W(function (e) {
                        d.async ? "function" == typeof d.async ? d.async.call(this, this.renderQueue, e) : this.renderQueue.length > 0 ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, e)) : e() : (this.renderQueue.forEach(this.paint, this), e())
                    }, this))
                }, this))
            }

            function o(e) {
                return e.parent && e.parent.clip.length
            }

            function d(e) {
                return e.replace(/(\-[a-z])/g, function (e) {
                    return e.toUpperCase().replace("-", "")
                })
            }

            function i() {
            }

            function t(e, n, f, o) {
                return e.map(function (d, i) {
                    if (d.width > 0) {
                        var t = n.left, l = n.top, s = n.width, u = n.height - e[2].width;
                        switch (i) {
                            case 0:
                                u = e[0].width, d.args = a({
                                    c1: [t, l],
                                    c2: [t + s, l],
                                    c3: [t + s - e[1].width, l + u],
                                    c4: [t + e[3].width, l + u]
                                }, o[0], o[1], f.topLeftOuter, f.topLeftInner, f.topRightOuter, f.topRightInner);
                                break;
                            case 1:
                                t = n.left + n.width - e[1].width, s = e[1].width, d.args = a({
                                    c1: [t + s, l],
                                    c2: [t + s, l + u + e[2].width],
                                    c3: [t, l + u],
                                    c4: [t, l + e[0].width]
                                }, o[1], o[2], f.topRightOuter, f.topRightInner, f.bottomRightOuter, f.bottomRightInner);
                                break;
                            case 2:
                                l = l + n.height - e[2].width, u = e[2].width, d.args = a({
                                    c1: [t + s, l + u],
                                    c2: [t, l + u],
                                    c3: [t + e[3].width, l],
                                    c4: [t + s - e[3].width, l]
                                }, o[2], o[3], f.bottomRightOuter, f.bottomRightInner, f.bottomLeftOuter, f.bottomLeftInner);
                                break;
                            case 3:
                                s = e[3].width, d.args = a({
                                    c1: [t, l + u + e[2].width],
                                    c2: [t, l],
                                    c3: [t + s, l + e[0].width],
                                    c4: [t + s, l + u]
                                }, o[3], o[0], f.bottomLeftOuter, f.bottomLeftInner, f.topLeftOuter, f.topLeftInner)
                        }
                    }
                    return d
                })
            }

            function l(e, n, f, o) {
                var d = 4 * ((Math.sqrt(2) - 1) / 3), i = f * d, t = o * d, l = e + f, s = n + o;
                return {
                    topLeft: u({x: e, y: s}, {x: e, y: s - t}, {x: l - i, y: n}, {x: l, y: n}),
                    topRight: u({x: e, y: n}, {x: e + i, y: n}, {x: l, y: s - t}, {x: l, y: s}),
                    bottomRight: u({x: l, y: n}, {x: l, y: n + t}, {x: e + i, y: s}, {x: e, y: s}),
                    bottomLeft: u({x: l, y: s}, {x: l - i, y: s}, {x: e, y: n + t}, {x: e, y: n})
                }
            }

            function s(e, n, f) {
                var o = e.left, d = e.top, i = e.width, t = e.height, s = n[0][0] < i / 2 ? n[0][0] : i / 2,
                    u = n[0][1] < t / 2 ? n[0][1] : t / 2, a = n[1][0] < i / 2 ? n[1][0] : i / 2,
                    p = n[1][1] < t / 2 ? n[1][1] : t / 2, c = n[2][0] < i / 2 ? n[2][0] : i / 2,
                    y = n[2][1] < t / 2 ? n[2][1] : t / 2, m = n[3][0] < i / 2 ? n[3][0] : i / 2,
                    r = n[3][1] < t / 2 ? n[3][1] : t / 2, v = i - a, w = t - y, b = i - c, g = t - r;
                return {
                    topLeftOuter: l(o, d, s, u).topLeft.subdivide(.5),
                    topLeftInner: l(o + f[3].width, d + f[0].width, Math.max(0, s - f[3].width), Math.max(0, u - f[0].width)).topLeft.subdivide(.5),
                    topRightOuter: l(o + v, d, a, p).topRight.subdivide(.5),
                    topRightInner: l(o + Math.min(v, i + f[3].width), d + f[0].width, v > i + f[3].width ? 0 : a - f[3].width, p - f[0].width).topRight.subdivide(.5),
                    bottomRightOuter: l(o + b, d + w, c, y).bottomRight.subdivide(.5),
                    bottomRightInner: l(o + Math.min(b, i - f[3].width), d + Math.min(w, t + f[0].width), Math.max(0, c - f[1].width), y - f[2].width).bottomRight.subdivide(.5),
                    bottomLeftOuter: l(o, d + g, m, r).bottomLeft.subdivide(.5),
                    bottomLeftInner: l(o + f[3].width, d + g, Math.max(0, m - f[3].width), r - f[2].width).bottomLeft.subdivide(.5)
                }
            }

            function u(e, n, f, o) {
                var d = function (e, n, f) {
                    return {x: e.x + (n.x - e.x) * f, y: e.y + (n.y - e.y) * f}
                };
                return {
                    start: e, startControl: n, endControl: f, end: o, subdivide: function (i) {
                        var t = d(e, n, i), l = d(n, f, i), s = d(f, o, i), a = d(t, l, i), p = d(l, s, i),
                            c = d(a, p, i);
                        return [u(e, t, a, c), u(c, p, s, o)]
                    }, curveTo: function (e) {
                        e.push(["bezierCurve", n.x, n.y, f.x, f.y, o.x, o.y])
                    }, curveToReversed: function (o) {
                        o.push(["bezierCurve", f.x, f.y, n.x, n.y, e.x, e.y])
                    }
                }
            }

            function a(e, n, f, o, d, i, t) {
                var l = [];
                return n[0] > 0 || n[1] > 0 ? (l.push(["line", o[1].start.x, o[1].start.y]), o[1].curveTo(l)) : l.push(["line", e.c1[0], e.c1[1]]), f[0] > 0 || f[1] > 0 ? (l.push(["line", i[0].start.x, i[0].start.y]), i[0].curveTo(l), l.push(["line", t[0].end.x, t[0].end.y]), t[0].curveToReversed(l)) : (l.push(["line", e.c2[0], e.c2[1]]), l.push(["line", e.c3[0], e.c3[1]])), n[0] > 0 || n[1] > 0 ? (l.push(["line", d[1].end.x, d[1].end.y]), d[1].curveToReversed(l)) : l.push(["line", e.c4[0], e.c4[1]]), l
            }

            function p(e, n, f, o, d, i, t) {
                n[0] > 0 || n[1] > 0 ? (e.push(["line", o[0].start.x, o[0].start.y]), o[0].curveTo(e), o[1].curveTo(e)) : e.push(["line", i, t]), (f[0] > 0 || f[1] > 0) && e.push(["line", d[0].start.x, d[0].start.y])
            }

            function c(e) {
                return e.cssInt("zIndex") < 0
            }

            function y(e) {
                return e.cssInt("zIndex") > 0
            }

            function m(e) {
                return 0 === e.cssInt("zIndex")
            }

            function r(e) {
                return -1 !== ["inline", "inline-block", "inline-table"].indexOf(e.css("display"))
            }

            function v(e) {
                return e instanceof U
            }

            function w(e) {
                return e.node.data.trim().length > 0
            }

            function b(e) {
                return /^(normal|none|0px)$/.test(e.parent.css("letterSpacing"))
            }

            function g(e) {
                return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function (n) {
                    var f = e.css("border" + n + "Radius"), o = f.split(" ");
                    return o.length <= 1 && (o[1] = o[0]), o.map(F)
                })
            }

            function h(e) {
                return e.nodeType === Node.TEXT_NODE || e.nodeType === Node.ELEMENT_NODE
            }

            function x(e) {
                var n = e.css("position"),
                    f = -1 !== ["absolute", "relative", "fixed"].indexOf(n) ? e.css("zIndex") : "auto";
                return "auto" !== f
            }

            function j(e) {
                return "static" !== e.css("position")
            }

            function k(e) {
                return "none" !== e.css("float")
            }

            function q(e) {
                return -1 !== ["inline-block", "inline-table"].indexOf(e.css("display"))
            }

            function z(e) {
                var n = this;
                return function () {
                    return !e.apply(n, arguments)
                }
            }

            function A(e) {
                return e.node.nodeType === Node.ELEMENT_NODE
            }

            function B(e) {
                return e.isPseudoElement === !0
            }

            function C(e) {
                return e.node.nodeType === Node.TEXT_NODE
            }

            function D(e) {
                return function (n, f) {
                    return n.cssInt("zIndex") + e.indexOf(n) / e.length - (f.cssInt("zIndex") + e.indexOf(f) / e.length)
                }
            }

            function E(e) {
                return e.getOpacity() < 1
            }

            function F(e) {
                return parseInt(e, 10)
            }

            function G(e) {
                return e.width
            }

            function H(e) {
                return e.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(e.node.nodeName)
            }

            function I(e) {
                return [].concat.apply([], e)
            }

            function J(e) {
                var n = e.substr(0, 1);
                return n === e.substr(e.length - 1) && n.match(/'|"/) ? e.substr(1, e.length - 2) : e
            }

            function K(e) {
                for (var n, f = [], o = 0, d = !1; e.length;) L(e[o]) === d ? (n = e.splice(0, o), n.length && f.push(O.ucs2.encode(n)), d = !d, o = 0) : o++, o >= e.length && (n = e.splice(0, o), n.length && f.push(O.ucs2.encode(n)));
                return f
            }

            function L(e) {
                return -1 !== [32, 13, 10, 9, 45].indexOf(e)
            }

            function M(e) {
                return /[^\u0000-\u00ff]/.test(e)
            }

            var N = e("./log"), O = e("punycode"), P = e("./nodecontainer"), Q = e("./textcontainer"),
                R = e("./pseudoelementcontainer"), S = e("./fontmetrics"), T = e("./color"), U = e("./stackingcontext"),
                V = e("./utils"), W = V.bind, X = V.getBounds, Y = V.parseBackgrounds, Z = V.offsetBounds;
            f.prototype.calculateOverflowClips = function () {
                this.nodes.forEach(function (e) {
                    if (A(e)) {
                        B(e) && e.appendToDOM(), e.borders = this.parseBorders(e);
                        var n = "hidden" === e.css("overflow") ? [e.borders.clip] : [], f = e.parseClip();
                        f && -1 !== ["absolute", "fixed"].indexOf(e.css("position")) && n.push([["rect", e.bounds.left + f.left, e.bounds.top + f.top, f.right - f.left, f.bottom - f.top]]), e.clip = o(e) ? e.parent.clip.concat(n) : n, e.backgroundClip = "hidden" !== e.css("overflow") ? e.clip.concat([e.borders.clip]) : e.clip, B(e) && e.cleanDOM()
                    } else C(e) && (e.clip = o(e) ? e.parent.clip : []);
                    B(e) || (e.bounds = null)
                }, this)
            }, f.prototype.asyncRenderer = function (e, n, f) {
                f = f || Date.now(), this.paint(e[this.renderIndex++]), e.length === this.renderIndex ? n() : f + 20 > Date.now() ? this.asyncRenderer(e, n, f) : setTimeout(W(function () {
                    this.asyncRenderer(e, n)
                }, this), 0)
            }, f.prototype.createPseudoHideStyles = function (e) {
                this.createStyles(e, "." + R.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + R.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
            }, f.prototype.disableAnimations = function (e) {
                this.createStyles(e, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
            }, f.prototype.createStyles = function (e, n) {
                var f = e.createElement("style");
                f.innerHTML = n, e.body.appendChild(f)
            }, f.prototype.getPseudoElements = function (e) {
                var n = [[e]];
                if (e.node.nodeType === Node.ELEMENT_NODE) {
                    var f = this.getPseudoElement(e, ":before"), o = this.getPseudoElement(e, ":after");
                    f && n.push(f), o && n.push(o)
                }
                return I(n)
            }, f.prototype.getPseudoElement = function (e, n) {
                var f = e.computedStyle(n);
                if (!f || !f.content || "none" === f.content || "-moz-alt-content" === f.content || "none" === f.display) return null;
                for (var o = J(f.content), i = "url" === o.substr(0, 3), t = document.createElement(i ? "img" : "html2canvaspseudoelement"), l = new R(t, e, n), s = f.length - 1; s >= 0; s--) {
                    var u = d(f.item(s));
                    t.style[u] = f[u]
                }
                if (t.className = R.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + R.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, i) return t.src = Y(o)[0].args[0], [l];
                var a = document.createTextNode(o);
                return t.appendChild(a), [l, new Q(a, l)]
            }, f.prototype.getChildren = function (e) {
                return I([].filter.call(e.node.childNodes, h).map(function (n) {
                    var f = [n.nodeType === Node.TEXT_NODE ? new Q(n, e) : new P(n, e)].filter(H);
                    return n.nodeType === Node.ELEMENT_NODE && f.length && "TEXTAREA" !== n.tagName ? f[0].isElementVisible() ? f.concat(this.getChildren(f[0])) : [] : f
                }, this))
            }, f.prototype.newStackingContext = function (e, n) {
                var f = new U(n, e.getOpacity(), e.node, e.parent);
                e.cloneTo(f);
                var o = n ? f.getParentStack(this) : f.parent.stack;
                o.contexts.push(f), e.stack = f
            }, f.prototype.createStackingContexts = function () {
                this.nodes.forEach(function (e) {
                    A(e) && (this.isRootElement(e) || E(e) || x(e) || this.isBodyWithTransparentRoot(e) || e.hasTransform()) ? this.newStackingContext(e, !0) : A(e) && (j(e) && m(e) || q(e) || k(e)) ? this.newStackingContext(e, !1) : e.assignStack(e.parent.stack)
                }, this)
            }, f.prototype.isBodyWithTransparentRoot = function (e) {
                return "BODY" === e.node.nodeName && e.parent.color("backgroundColor").isTransparent()
            }, f.prototype.isRootElement = function (e) {
                return null === e.parent
            }, f.prototype.sortStackingContexts = function (e) {
                e.contexts.sort(D(e.contexts.slice(0))), e.contexts.forEach(this.sortStackingContexts, this)
            }, f.prototype.parseTextBounds = function (e) {
                return function (n, f, o) {
                    if ("none" !== e.parent.css("textDecoration").substr(0, 4) || 0 !== n.trim().length) {
                        if (this.support.rangeBounds && !e.parent.hasTransform()) {
                            var d = o.slice(0, f).join("").length;
                            return this.getRangeBounds(e.node, d, n.length)
                        }
                        if (e.node && "string" == typeof e.node.data) {
                            var i = e.node.splitText(n.length),
                                t = this.getWrapperBounds(e.node, e.parent.hasTransform());
                            return e.node = i, t
                        }
                    } else (!this.support.rangeBounds || e.parent.hasTransform()) && (e.node = e.node.splitText(n.length));
                    return {}
                }
            }, f.prototype.getWrapperBounds = function (e, n) {
                var f = e.ownerDocument.createElement("html2canvaswrapper"), o = e.parentNode, d = e.cloneNode(!0);
                f.appendChild(e.cloneNode(!0)), o.replaceChild(f, e);
                var i = n ? Z(f) : X(f);
                return o.replaceChild(d, f), i
            }, f.prototype.getRangeBounds = function (e, n, f) {
                var o = this.range || (this.range = e.ownerDocument.createRange());
                return o.setStart(e, n), o.setEnd(e, n + f), o.getBoundingClientRect()
            }, f.prototype.parse = function (e) {
                var n = e.contexts.filter(c), f = e.children.filter(A), o = f.filter(z(k)),
                    d = o.filter(z(j)).filter(z(r)), t = f.filter(z(j)).filter(k), l = o.filter(z(j)).filter(r),
                    s = e.contexts.concat(o.filter(j)).filter(m), u = e.children.filter(C).filter(w),
                    a = e.contexts.filter(y);
                n.concat(d).concat(t).concat(l).concat(s).concat(u).concat(a).forEach(function (e) {
                    this.renderQueue.push(e), v(e) && (this.parse(e), this.renderQueue.push(new i))
                }, this)
            }, f.prototype.paint = function (e) {
                try {
                    e instanceof i ? this.renderer.ctx.restore() : C(e) ? (B(e.parent) && e.parent.appendToDOM(), this.paintText(e), B(e.parent) && e.parent.cleanDOM()) : this.paintNode(e)
                } catch (n) {
                    if (N(n), this.options.strict) throw n
                }
            }, f.prototype.paintNode = function (e) {
                v(e) && (this.renderer.setOpacity(e.opacity), this.renderer.ctx.save(), e.hasTransform() && this.renderer.setTransform(e.parseTransform())), "INPUT" === e.node.nodeName && "checkbox" === e.node.type ? this.paintCheckbox(e) : "INPUT" === e.node.nodeName && "radio" === e.node.type ? this.paintRadio(e) : this.paintElement(e)
            }, f.prototype.paintElement = function (e) {
                var n = e.parseBounds();
                this.renderer.clip(e.backgroundClip, function () {
                    this.renderer.renderBackground(e, n, e.borders.borders.map(G))
                }, this), this.renderer.clip(e.clip, function () {
                    this.renderer.renderBorders(e.borders.borders)
                }, this), this.renderer.clip(e.backgroundClip, function () {
                    switch (e.node.nodeName) {
                        case"svg":
                        case"IFRAME":
                            var f = this.images.get(e.node);
                            f ? this.renderer.renderImage(e, n, e.borders, f) : N("Error loading <" + e.node.nodeName + ">", e.node);
                            break;
                        case"IMG":
                            var o = this.images.get(e.node.src);
                            o ? this.renderer.renderImage(e, n, e.borders, o) : N("Error loading <img>", e.node.src);
                            break;
                        case"CANVAS":
                            this.renderer.renderImage(e, n, e.borders, {image: e.node});
                            break;
                        case"SELECT":
                        case"INPUT":
                        case"TEXTAREA":
                            this.paintFormValue(e)
                    }
                }, this)
            }, f.prototype.paintCheckbox = function (e) {
                var n = e.parseBounds(), f = Math.min(n.width, n.height),
                    o = {width: f - 1, height: f - 1, top: n.top, left: n.left}, d = [3, 3], i = [d, d, d, d],
                    l = [1, 1, 1, 1].map(function (e) {
                        return {color: new T("#A5A5A5"), width: e}
                    }), u = s(o, i, l);
                this.renderer.clip(e.backgroundClip, function () {
                    this.renderer.rectangle(o.left + 1, o.top + 1, o.width - 2, o.height - 2, new T("#DEDEDE")), this.renderer.renderBorders(t(l, o, u, i)), e.node.checked && (this.renderer.font(new T("#424242"), "normal", "normal", "bold", f - 3 + "px", "arial"), this.renderer.text("✔", o.left + f / 6, o.top + f - 1))
                }, this)
            }, f.prototype.paintRadio = function (e) {
                var n = e.parseBounds(), f = Math.min(n.width, n.height) - 2;
                this.renderer.clip(e.backgroundClip, function () {
                    this.renderer.circleStroke(n.left + 1, n.top + 1, f, new T("#DEDEDE"), 1, new T("#A5A5A5")), e.node.checked && this.renderer.circle(Math.ceil(n.left + f / 4) + 1, Math.ceil(n.top + f / 4) + 1, Math.floor(f / 2), new T("#424242"))
                }, this)
            }, f.prototype.paintFormValue = function (e) {
                var n = e.getValue();
                if (n.length > 0) {
                    var f = e.node.ownerDocument, o = f.createElement("html2canvaswrapper"),
                        d = ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"];
                    d.forEach(function (n) {
                        try {
                            o.style[n] = e.css(n)
                        } catch (f) {
                            N("html2canvas: Parse: Exception caught in renderFormValue: " + f.message)
                        }
                    });
                    var i = e.parseBounds();
                    o.style.position = "fixed", o.style.left = i.left + "px", o.style.top = i.top + "px", o.textContent = n, f.body.appendChild(o), this.paintText(new Q(o.firstChild, e)), f.body.removeChild(o)
                }
            }, f.prototype.paintText = function (e) {
                e.applyTextTransform();
                var n = O.ucs2.decode(e.node.data),
                    f = this.options.letterRendering && !b(e) || M(e.node.data) ? n.map(function (e) {
                        return O.ucs2.encode([e])
                    }) : K(n), o = e.parent.fontWeight(), d = e.parent.css("fontSize"), i = e.parent.css("fontFamily"),
                    t = e.parent.parseTextShadows();
                this.renderer.font(e.parent.color("color"), e.parent.css("fontStyle"), e.parent.css("fontVariant"), o, d, i), t.length ? this.renderer.fontShadow(t[0].color, t[0].offsetX, t[0].offsetY, t[0].blur) : this.renderer.clearShadow(), this.renderer.clip(e.parent.clip, function () {
                    f.map(this.parseTextBounds(e), this).forEach(function (n, o) {
                        n && (this.renderer.text(f[o], n.left, n.bottom), this.renderTextDecoration(e.parent, n, this.fontMetrics.getMetrics(i, d)))
                    }, this)
                }, this)
            }, f.prototype.renderTextDecoration = function (e, n, f) {
                switch (e.css("textDecoration").split(" ")[0]) {
                    case"underline":
                        this.renderer.rectangle(n.left, Math.round(n.top + f.baseline + f.lineWidth), n.width, 1, e.color("color"));
                        break;
                    case"overline":
                        this.renderer.rectangle(n.left, Math.round(n.top), n.width, 1, e.color("color"));
                        break;
                    case"line-through":
                        this.renderer.rectangle(n.left, Math.ceil(n.top + f.middle + f.lineWidth), n.width, 1, e.color("color"))
                }
            };
            var $ = {inset: [["darken", .6], ["darken", .1], ["darken", .1], ["darken", .6]]};
            f.prototype.parseBorders = function (e) {
                var n = e.parseBounds(), f = g(e), o = ["Top", "Right", "Bottom", "Left"].map(function (n, f) {
                    var o = e.css("border" + n + "Style"), d = e.color("border" + n + "Color");
                    "inset" === o && d.isBlack() && (d = new T([255, 255, 255, d.a]));
                    var i = $[o] ? $[o][f] : null;
                    return {width: e.cssInt("border" + n + "Width"), color: i ? d[i[0]](i[1]) : d, args: null}
                }), d = s(n, f, o);
                return {clip: this.parseBackgroundClip(e, d, o, f, n), borders: t(o, n, d, f)}
            }, f.prototype.parseBackgroundClip = function (e, n, f, o, d) {
                var i = e.css("backgroundClip"), t = [];
                switch (i) {
                    case"content-box":
                    case"padding-box":
                        p(t, o[0], o[1], n.topLeftInner, n.topRightInner, d.left + f[3].width, d.top + f[0].width), p(t, o[1], o[2], n.topRightInner, n.bottomRightInner, d.left + d.width - f[1].width, d.top + f[0].width), p(t, o[2], o[3], n.bottomRightInner, n.bottomLeftInner, d.left + d.width - f[1].width, d.top + d.height - f[2].width), p(t, o[3], o[0], n.bottomLeftInner, n.topLeftInner, d.left + f[3].width, d.top + d.height - f[2].width);
                        break;
                    default:
                        p(t, o[0], o[1], n.topLeftOuter, n.topRightOuter, d.left, d.top), p(t, o[1], o[2], n.topRightOuter, n.bottomRightOuter, d.left + d.width, d.top), p(t, o[2], o[3], n.bottomRightOuter, n.bottomLeftOuter, d.left + d.width, d.top + d.height), p(t, o[3], o[0], n.bottomLeftOuter, n.topLeftOuter, d.left, d.top + d.height)
                }
                return t
            }, n.exports = f
        }, {
            "./color": 3,
            "./fontmetrics": 7,
            "./log": 13,
            "./nodecontainer": 14,
            "./pseudoelementcontainer": 18,
            "./stackingcontext": 21,
            "./textcontainer": 25,
            "./utils": 26,
            punycode: 1
        }], 16: [function (e, n, f) {
            function o(e, n, f) {
                var o = "withCredentials" in new XMLHttpRequest;
                if (!n) return Promise.reject("No proxy configured");
                var d = t(o), s = l(n, e, d);
                return o ? a(s) : i(f, s, d).then(function (e) {
                    return m(e.content)
                })
            }

            function d(e, n, f) {
                var o = "crossOrigin" in new Image, d = t(o), s = l(n, e, d);
                return o ? Promise.resolve(s) : i(f, s, d).then(function (e) {
                    return "data:" + e.type + ";base64," + e.content
                })
            }

            function i(e, n, f) {
                return new Promise(function (o, d) {
                    var i = e.createElement("script"), t = function () {
                        delete window.html2canvas.proxy[f], e.body.removeChild(i)
                    };
                    window.html2canvas.proxy[f] = function (e) {
                        t(), o(e)
                    }, i.src = n, i.onerror = function (e) {
                        t(), d(e)
                    }, e.body.appendChild(i)
                })
            }

            function t(e) {
                return e ? "" : "html2canvas_" + Date.now() + "_" + ++r + "_" + Math.round(1e5 * Math.random())
            }

            function l(e, n, f) {
                return e + "?url=" + encodeURIComponent(n) + (f.length ? "&callback=html2canvas.proxy." + f : "")
            }

            function s(e) {
                return function (n) {
                    var f, o = new DOMParser;
                    try {
                        f = o.parseFromString(n, "text/html")
                    } catch (d) {
                        c("DOMParser not supported, falling back to createHTMLDocument"), f = document.implementation.createHTMLDocument("");
                        try {
                            f.open(), f.write(n), f.close()
                        } catch (i) {
                            c("createHTMLDocument write not supported, falling back to document.body.innerHTML"), f.body.innerHTML = n
                        }
                    }
                    var t = f.querySelector("base");
                    if (!t || !t.href.host) {
                        var l = f.createElement("base");
                        l.href = e, f.head.insertBefore(l, f.head.firstChild)
                    }
                    return f
                }
            }

            function u(e, n, f, d, i, t) {
                return new o(e, n, window.document).then(s(e)).then(function (e) {
                    return y(e, f, d, i, t, 0, 0)
                })
            }

            var a = e("./xhr"), p = e("./utils"), c = e("./log"), y = e("./clone"), m = p.decode64, r = 0;
            f.Proxy = o, f.ProxyURL = d, f.loadUrlDocument = u
        }, {"./clone": 2, "./log": 13, "./utils": 26, "./xhr": 28}], 17: [function (e, n) {
            function f(e, n) {
                var f = document.createElement("a");
                f.href = e, e = f.href, this.src = e, this.image = new Image;
                var d = this;
                this.promise = new Promise(function (f, i) {
                    d.image.crossOrigin = "Anonymous", d.image.onload = f, d.image.onerror = i, new o(e, n, document).then(function (e) {
                        d.image.src = e
                    })["catch"](i)
                })
            }

            var o = e("./proxy").ProxyURL;
            n.exports = f
        }, {"./proxy": 16}], 18: [function (e, n) {
            function f(e, n, f) {
                o.call(this, e, n), this.isPseudoElement = !0, this.before = ":before" === f
            }

            var o = e("./nodecontainer");
            f.prototype.cloneTo = function (e) {
                f.prototype.cloneTo.call(this, e), e.isPseudoElement = !0, e.before = this.before
            }, f.prototype = Object.create(o.prototype), f.prototype.appendToDOM = function () {
                this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), this.parent.node.className += " " + this.getHideClass()
            }, f.prototype.cleanDOM = function () {
                this.node.parentNode.removeChild(this.node), this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
            }, f.prototype.getHideClass = function () {
                return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")]
            }, f.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", f.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", n.exports = f
        }, {"./nodecontainer": 14}], 19: [function (e, n) {
            function f(e, n, f, o, d) {
                this.width = e, this.height = n, this.images = f, this.options = o, this.document = d
            }

            var o = e("./log");
            f.prototype.renderImage = function (e, n, f, o) {
                var d = e.cssInt("paddingLeft"), i = e.cssInt("paddingTop"), t = e.cssInt("paddingRight"),
                    l = e.cssInt("paddingBottom"), s = f.borders, u = n.width - (s[1].width + s[3].width + d + t),
                    a = n.height - (s[0].width + s[2].width + i + l);
                this.drawImage(o, 0, 0, o.image.width || u, o.image.height || a, n.left + d + s[3].width, n.top + i + s[0].width, u, a)
            }, f.prototype.renderBackground = function (e, n, f) {
                n.height > 0 && n.width > 0 && (this.renderBackgroundColor(e, n), this.renderBackgroundImage(e, n, f))
            }, f.prototype.renderBackgroundColor = function (e, n) {
                var f = e.color("backgroundColor");
                f.isTransparent() || this.rectangle(n.left, n.top, n.width, n.height, f)
            }, f.prototype.renderBorders = function (e) {
                e.forEach(this.renderBorder, this)
            }, f.prototype.renderBorder = function (e) {
                e.color.isTransparent() || null === e.args || this.drawShape(e.args, e.color)
            }, f.prototype.renderBackgroundImage = function (e, n, f) {
                var d = e.parseBackgroundImages();
                d.reverse().forEach(function (d, i, t) {
                    switch (d.method) {
                        case"url":
                            var l = this.images.get(d.args[0]);
                            l ? this.renderBackgroundRepeating(e, n, l, t.length - (i + 1), f) : o("Error loading background-image", d.args[0]);
                            break;
                        case"linear-gradient":
                        case"gradient":
                            var s = this.images.get(d.value);
                            s ? this.renderBackgroundGradient(s, n, f) : o("Error loading background-image", d.args[0]);
                            break;
                        case"none":
                            break;
                        default:
                            o("Unknown background-image type", d.args[0])
                    }
                }, this)
            }, f.prototype.renderBackgroundRepeating = function (e, n, f, o, d) {
                var i = e.parseBackgroundSize(n, f.image, o), t = e.parseBackgroundPosition(n, f.image, o, i),
                    l = e.parseBackgroundRepeat(o);
                switch (l) {
                    case"repeat-x":
                    case"repeat no-repeat":
                        this.backgroundRepeatShape(f, t, i, n, n.left + d[3], n.top + t.top + d[0], 99999, i.height, d);
                        break;
                    case"repeat-y":
                    case"no-repeat repeat":
                        this.backgroundRepeatShape(f, t, i, n, n.left + t.left + d[3], n.top + d[0], i.width, 99999, d);
                        break;
                    case"no-repeat":
                        this.backgroundRepeatShape(f, t, i, n, n.left + t.left + d[3], n.top + t.top + d[0], i.width, i.height, d);
                        break;
                    default:
                        this.renderBackgroundRepeat(f, t, i, {top: n.top, left: n.left}, d[3], d[0])
                }
            }, n.exports = f
        }, {"./log": 13}], 20: [function (e, n) {
            function f(e, n) {
                d.apply(this, arguments), this.canvas = this.options.canvas || this.document.createElement("canvas"), this.options.canvas || (this.canvas.width = e, this.canvas.height = n), this.ctx = this.canvas.getContext("2d"), this.taintCtx = this.document.createElement("canvas").getContext("2d"), this.ctx.textBaseline = "bottom", this.variables = {}, t("Initialized CanvasRenderer with size", e, "x", n)
            }

            function o(e) {
                return e.length > 0
            }

            var d = e("../renderer"), i = e("../lineargradientcontainer"), t = e("../log");
            f.prototype = Object.create(d.prototype), f.prototype.setFillStyle = function (e) {
                return this.ctx.fillStyle = "object" == typeof e && e.isColor ? e.toString() : e, this.ctx
            }, f.prototype.rectangle = function (e, n, f, o, d) {
                this.setFillStyle(d).fillRect(e, n, f, o)
            }, f.prototype.circle = function (e, n, f, o) {
                this.setFillStyle(o), this.ctx.beginPath(), this.ctx.arc(e + f / 2, n + f / 2, f / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill()
            }, f.prototype.circleStroke = function (e, n, f, o, d, i) {
                this.circle(e, n, f, o), this.ctx.strokeStyle = i.toString(), this.ctx.stroke()
            }, f.prototype.drawShape = function (e, n) {
                this.shape(e), this.setFillStyle(n).fill()
            }, f.prototype.taints = function (e) {
                if (null === e.tainted) {
                    this.taintCtx.drawImage(e.image, 0, 0);
                    try {
                        this.taintCtx.getImageData(0, 0, 1, 1), e.tainted = !1
                    } catch (n) {
                        this.taintCtx = document.createElement("canvas").getContext("2d"), e.tainted = !0
                    }
                }
                return e.tainted
            }, f.prototype.drawImage = function (e, n, f, o, d, i, t, l, s) {
                (!this.taints(e) || this.options.allowTaint) && this.ctx.drawImage(e.image, n, f, o, d, i, t, l, s)
            }, f.prototype.clip = function (e, n, f) {
                this.ctx.save(), e.filter(o).forEach(function (e) {
                    this.shape(e).clip()
                }, this), n.call(f), this.ctx.restore()
            }, f.prototype.shape = function (e) {
                return this.ctx.beginPath(), e.forEach(function (e, n) {
                    "rect" === e[0] ? this.ctx.rect.apply(this.ctx, e.slice(1)) : this.ctx[0 === n ? "moveTo" : e[0] + "To"].apply(this.ctx, e.slice(1))
                }, this), this.ctx.closePath(), this.ctx
            }, f.prototype.font = function (e, n, f, o, d, i) {
                this.setFillStyle(e).font = [n, f, o, d, i].join(" ").split(",")[0]
            }, f.prototype.fontShadow = function (e, n, f, o) {
                this.setVariable("shadowColor", e.toString()).setVariable("shadowOffsetY", n).setVariable("shadowOffsetX", f).setVariable("shadowBlur", o)
            }, f.prototype.clearShadow = function () {
                this.setVariable("shadowColor", "rgba(0,0,0,0)")
            }, f.prototype.setOpacity = function (e) {
                this.ctx.globalAlpha = e
            }, f.prototype.setTransform = function (e) {
                this.ctx.translate(e.origin[0], e.origin[1]), this.ctx.transform.apply(this.ctx, e.matrix), this.ctx.translate(-e.origin[0], -e.origin[1])
            }, f.prototype.setVariable = function (e, n) {
                return this.variables[e] !== n && (this.variables[e] = this.ctx[e] = n), this
            }, f.prototype.text = function (e, n, f) {
                this.ctx.fillText(e, n, f)
            }, f.prototype.backgroundRepeatShape = function (e, n, f, o, d, i, t, l, s) {
                var u = [["line", Math.round(d), Math.round(i)], ["line", Math.round(d + t), Math.round(i)], ["line", Math.round(d + t), Math.round(l + i)], ["line", Math.round(d), Math.round(l + i)]];
                this.clip([u], function () {
                    this.renderBackgroundRepeat(e, n, f, o, s[3], s[0])
                }, this)
            }, f.prototype.renderBackgroundRepeat = function (e, n, f, o, d, i) {
                var t = Math.round(o.left + n.left + d), l = Math.round(o.top + n.top + i);
                this.setFillStyle(this.ctx.createPattern(this.resizeImage(e, f), "repeat")), this.ctx.translate(t, l), this.ctx.fill(), this.ctx.translate(-t, -l)
            }, f.prototype.renderBackgroundGradient = function (e, n) {
                if (e instanceof i) {
                    var f = this.ctx.createLinearGradient(n.left + n.width * e.x0, n.top + n.height * e.y0, n.left + n.width * e.x1, n.top + n.height * e.y1);
                    e.colorStops.forEach(function (e) {
                        f.addColorStop(e.stop, e.color.toString())
                    }), this.rectangle(n.left, n.top, n.width, n.height, f)
                }
            }, f.prototype.resizeImage = function (e, n) {
                var f = e.image;
                if (f.width === n.width && f.height === n.height) return f;
                var o, d = document.createElement("canvas");
                return d.width = n.width, d.height = n.height, o = d.getContext("2d"), o.drawImage(f, 0, 0, f.width, f.height, 0, 0, n.width, n.height), d
            }, n.exports = f
        }, {"../lineargradientcontainer": 12, "../log": 13, "../renderer": 19}], 21: [function (e, n) {
            function f(e, n, f, d) {
                o.call(this, f, d), this.ownStacking = e, this.contexts = [], this.children = [], this.opacity = (this.parent ? this.parent.stack.opacity : 1) * n
            }

            var o = e("./nodecontainer");
            f.prototype = Object.create(o.prototype), f.prototype.getParentStack = function (e) {
                var n = this.parent ? this.parent.stack : null;
                return n ? n.ownStacking ? n : n.getParentStack(e) : e.stack
            }, n.exports = f
        }, {"./nodecontainer": 14}], 22: [function (e, n) {
            function f(e) {
                this.rangeBounds = this.testRangeBounds(e), this.cors = this.testCORS(), this.svg = this.testSVG()
            }

            f.prototype.testRangeBounds = function (e) {
                var n, f, o, d, i = !1;
                return e.createRange && (n = e.createRange(), n.getBoundingClientRect && (f = e.createElement("boundtest"), f.style.height = "123px", f.style.display = "block", e.body.appendChild(f), n.selectNode(f), o = n.getBoundingClientRect(), d = o.height, 123 === d && (i = !0), e.body.removeChild(f))), i
            }, f.prototype.testCORS = function () {
                return "undefined" != typeof (new Image).crossOrigin
            }, f.prototype.testSVG = function () {
                var e = new Image, n = document.createElement("canvas"), f = n.getContext("2d");
                e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                try {
                    f.drawImage(e, 0, 0), n.toDataURL()
                } catch (o) {
                    return !1
                }
                return !0
            }, n.exports = f
        }, {}], 23: [function (e, n) {
            function f(e) {
                this.src = e, this.image = null;
                var n = this;
                this.promise = this.hasFabric().then(function () {
                    return n.isInline(e) ? Promise.resolve(n.inlineFormatting(e)) : o(e)
                }).then(function (e) {
                    return new Promise(function (f) {
                        window.html2canvas.svg.fabric.loadSVGFromString(e, n.createCanvas.call(n, f))
                    })
                })
            }

            var o = e("./xhr"), d = e("./utils").decode64;
            f.prototype.hasFabric = function () {
                return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))
            }, f.prototype.inlineFormatting = function (e) {
                return /^data:image\/svg\+xml;base64,/.test(e) ? this.decode64(this.removeContentType(e)) : this.removeContentType(e)
            }, f.prototype.removeContentType = function (e) {
                return e.replace(/^data:image\/svg\+xml(;base64)?,/, "")
            }, f.prototype.isInline = function (e) {
                return /^data:image\/svg\+xml/i.test(e)
            }, f.prototype.createCanvas = function (e) {
                var n = this;
                return function (f, o) {
                    var d = new window.html2canvas.svg.fabric.StaticCanvas("c");
                    n.image = d.lowerCanvasEl, d.setWidth(o.width).setHeight(o.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(f, o)).renderAll(), e(d.lowerCanvasEl)
                }
            }, f.prototype.decode64 = function (e) {
                return "function" == typeof window.atob ? window.atob(e) : d(e)
            }, n.exports = f
        }, {"./utils": 26, "./xhr": 28}], 24: [function (e, n) {
            function f(e, n) {
                this.src = e, this.image = null;
                var f = this;
                this.promise = n ? new Promise(function (n, o) {
                    f.image = new Image, f.image.onload = n, f.image.onerror = o, f.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(e), f.image.complete === !0 && n(f.image)
                }) : this.hasFabric().then(function () {
                    return new Promise(function (n) {
                        window.html2canvas.svg.fabric.parseSVGDocument(e, f.createCanvas.call(f, n))
                    })
                })
            }

            var o = e("./svgcontainer");
            f.prototype = Object.create(o.prototype), n.exports = f
        }, {"./svgcontainer": 23}], 25: [function (e, n) {
            function f(e, n) {
                d.call(this, e, n)
            }

            function o(e, n, f) {
                return e.length > 0 ? n + f.toUpperCase() : void 0
            }

            var d = e("./nodecontainer");
            f.prototype = Object.create(d.prototype), f.prototype.applyTextTransform = function () {
                this.node.data = this.transform(this.parent.css("textTransform"))
            }, f.prototype.transform = function (e) {
                var n = this.node.data;
                switch (e) {
                    case"lowercase":
                        return n.toLowerCase();
                    case"capitalize":
                        return n.replace(/(^|\s|:|-|\(|\))([a-z])/g, o);
                    case"uppercase":
                        return n.toUpperCase();
                    default:
                        return n
                }
            }, n.exports = f
        }, {"./nodecontainer": 14}], 26: [function (e, n, f) {
            f.smallImage = function () {
                return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            }, f.bind = function (e, n) {
                return function () {
                    return e.apply(n, arguments)
                }
            }, f.decode64 = function (e) {
                var n, f, o, d, i, t, l, s, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    a = e.length, p = "";
                for (n = 0; a > n; n += 4) f = u.indexOf(e[n]), o = u.indexOf(e[n + 1]), d = u.indexOf(e[n + 2]), i = u.indexOf(e[n + 3]), t = f << 2 | o >> 4, l = (15 & o) << 4 | d >> 2, s = (3 & d) << 6 | i, p += 64 === d ? String.fromCharCode(t) : 64 === i || -1 === i ? String.fromCharCode(t, l) : String.fromCharCode(t, l, s);
                return p
            }, f.getBounds = function (e) {
                if (e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect(), f = null == e.offsetWidth ? n.width : e.offsetWidth;
                    return {
                        top: n.top,
                        bottom: n.bottom || n.top + n.height,
                        right: n.left + f,
                        left: n.left,
                        width: f,
                        height: null == e.offsetHeight ? n.height : e.offsetHeight
                    }
                }
                return {}
            }, f.offsetBounds = function (e) {
                var n = e.offsetParent ? f.offsetBounds(e.offsetParent) : {top: 0, left: 0};
                return {
                    top: e.offsetTop + n.top,
                    bottom: e.offsetTop + e.offsetHeight + n.top,
                    right: e.offsetLeft + n.left + e.offsetWidth,
                    left: e.offsetLeft + n.left,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }, f.parseBackgrounds = function (e) {
                var n, f, o, d, i, t, l, s = " \r\n	", u = [], a = 0, p = 0, c = function () {
                    n && ('"' === f.substr(0, 1) && (f = f.substr(1, f.length - 2)), f && l.push(f), "-" === n.substr(0, 1) && (d = n.indexOf("-", 1) + 1) > 0 && (o = n.substr(0, d), n = n.substr(d)), u.push({
                        prefix: o,
                        method: n.toLowerCase(),
                        value: i,
                        args: l,
                        image: null
                    })), l = [], n = o = f = i = ""
                };
                return l = [], n = o = f = i = "", e.split("").forEach(function (e) {
                    if (!(0 === a && s.indexOf(e) > -1)) {
                        switch (e) {
                            case'"':
                                t ? t === e && (t = null) : t = e;
                                break;
                            case"(":
                                if (t) break;
                                if (0 === a) return a = 1, void (i += e);
                                p++;
                                break;
                            case")":
                                if (t) break;
                                if (1 === a) {
                                    if (0 === p) return a = 0, i += e, void c();
                                    p--
                                }
                                break;
                            case",":
                                if (t) break;
                                if (0 === a) return void c();
                                if (1 === a && 0 === p && !n.match(/^url$/i)) return l.push(f), f = "", void (i += e)
                        }
                        i += e, 0 === a ? n += e : f += e
                    }
                }), c(), u
            }
        }, {}], 27: [function (e, n) {
            function f(e) {
                o.apply(this, arguments), this.type = "linear" === e.args[0] ? o.TYPES.LINEAR : o.TYPES.RADIAL
            }

            var o = e("./gradientcontainer");
            f.prototype = Object.create(o.prototype), n.exports = f
        }, {"./gradientcontainer": 9}], 28: [function (e, n) {
            function f(e) {
                return new Promise(function (n, f) {
                    var o = new XMLHttpRequest;
                    o.open("GET", e), o.onload = function () {
                        200 === o.status ? n(o.responseText) : f(new Error(o.statusText))
                    }, o.onerror = function () {
                        f(new Error("Network Error"))
                    }, o.send()
                })
            }

            n.exports = f
        }, {}]
    }, {}, [4])(4)
});
/*!
    localForage -- Offline Storage, Improved
    Version 1.6.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
!function (a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a(); else if ("function" == typeof define && define.amd) define([], a); else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.localforage = a()
    }
}(function () {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {exports: {}};
                b[g][0].call(k.exports, function (a) {
                    var c = b[g][1][a];
                    return e(c || a)
                }, k, k.exports, a, b, c, d)
            }
            return c[g].exports
        }

        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function (a, b, c) {
            (function (a) {
                "use strict";

                function c() {
                    k = !0;
                    for (var a, b, c = l.length; c;) {
                        for (b = l, l = [], a = -1; ++a < c;) b[a]();
                        c = l.length
                    }
                    k = !1
                }

                function d(a) {
                    1 !== l.push(a) || k || e()
                }

                var e, f = a.MutationObserver || a.WebKitMutationObserver;
                if (f) {
                    var g = 0, h = new f(c), i = a.document.createTextNode("");
                    h.observe(i, {characterData: !0}), e = function () {
                        i.data = g = ++g % 2
                    }
                } else if (a.setImmediate || void 0 === a.MessageChannel) e = "document" in a && "onreadystatechange" in a.document.createElement("script") ? function () {
                    var b = a.document.createElement("script");
                    b.onreadystatechange = function () {
                        c(), b.onreadystatechange = null, b.parentNode.removeChild(b), b = null
                    }, a.document.documentElement.appendChild(b)
                } : function () {
                    setTimeout(c, 0)
                }; else {
                    var j = new a.MessageChannel;
                    j.port1.onmessage = c, e = function () {
                        j.port2.postMessage(0)
                    }
                }
                var k, l = [];
                b.exports = d
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}], 2: [function (a, b, c) {
            "use strict";

            function d() {
            }

            function e(a) {
                if ("function" != typeof a) throw new TypeError("resolver must be a function");
                this.state = s, this.queue = [], this.outcome = void 0, a !== d && i(this, a)
            }

            function f(a, b, c) {
                this.promise = a, "function" == typeof b && (this.onFulfilled = b, this.callFulfilled = this.otherCallFulfilled), "function" == typeof c && (this.onRejected = c, this.callRejected = this.otherCallRejected)
            }

            function g(a, b, c) {
                o(function () {
                    var d;
                    try {
                        d = b(c)
                    } catch (b) {
                        return p.reject(a, b)
                    }
                    d === a ? p.reject(a, new TypeError("Cannot resolve promise with itself")) : p.resolve(a, d)
                })
            }

            function h(a) {
                var b = a && a.then;
                if (a && ("object" == typeof a || "function" == typeof a) && "function" == typeof b) return function () {
                    b.apply(a, arguments)
                }
            }

            function i(a, b) {
                function c(b) {
                    f || (f = !0, p.reject(a, b))
                }

                function d(b) {
                    f || (f = !0, p.resolve(a, b))
                }

                function e() {
                    b(d, c)
                }

                var f = !1, g = j(e);
                "error" === g.status && c(g.value)
            }

            function j(a, b) {
                var c = {};
                try {
                    c.value = a(b), c.status = "success"
                } catch (a) {
                    c.status = "error", c.value = a
                }
                return c
            }

            function k(a) {
                return a instanceof this ? a : p.resolve(new this(d), a)
            }

            function l(a) {
                var b = new this(d);
                return p.reject(b, a)
            }

            function m(a) {
                function b(a, b) {
                    function d(a) {
                        g[b] = a, ++h !== e || f || (f = !0, p.resolve(j, g))
                    }

                    c.resolve(a).then(d, function (a) {
                        f || (f = !0, p.reject(j, a))
                    })
                }

                var c = this;
                if ("[object Array]" !== Object.prototype.toString.call(a)) return this.reject(new TypeError("must be an array"));
                var e = a.length, f = !1;
                if (!e) return this.resolve([]);
                for (var g = new Array(e), h = 0, i = -1, j = new this(d); ++i < e;) b(a[i], i);
                return j
            }

            function n(a) {
                function b(a) {
                    c.resolve(a).then(function (a) {
                        f || (f = !0, p.resolve(h, a))
                    }, function (a) {
                        f || (f = !0, p.reject(h, a))
                    })
                }

                var c = this;
                if ("[object Array]" !== Object.prototype.toString.call(a)) return this.reject(new TypeError("must be an array"));
                var e = a.length, f = !1;
                if (!e) return this.resolve([]);
                for (var g = -1, h = new this(d); ++g < e;) b(a[g]);
                return h
            }

            var o = a(1), p = {}, q = ["REJECTED"], r = ["FULFILLED"], s = ["PENDING"];
            b.exports = e, e.prototype.catch = function (a) {
                return this.then(null, a)
            }, e.prototype.then = function (a, b) {
                if ("function" != typeof a && this.state === r || "function" != typeof b && this.state === q) return this;
                var c = new this.constructor(d);
                if (this.state !== s) {
                    g(c, this.state === r ? a : b, this.outcome)
                } else this.queue.push(new f(c, a, b));
                return c
            }, f.prototype.callFulfilled = function (a) {
                p.resolve(this.promise, a)
            }, f.prototype.otherCallFulfilled = function (a) {
                g(this.promise, this.onFulfilled, a)
            }, f.prototype.callRejected = function (a) {
                p.reject(this.promise, a)
            }, f.prototype.otherCallRejected = function (a) {
                g(this.promise, this.onRejected, a)
            }, p.resolve = function (a, b) {
                var c = j(h, b);
                if ("error" === c.status) return p.reject(a, c.value);
                var d = c.value;
                if (d) i(a, d); else {
                    a.state = r, a.outcome = b;
                    for (var e = -1, f = a.queue.length; ++e < f;) a.queue[e].callFulfilled(b)
                }
                return a
            }, p.reject = function (a, b) {
                a.state = q, a.outcome = b;
                for (var c = -1, d = a.queue.length; ++c < d;) a.queue[c].callRejected(b);
                return a
            }, e.resolve = k, e.reject = l, e.all = m, e.race = n
        }, {1: 1}], 3: [function (a, b, c) {
            (function (b) {
                "use strict";
                "function" != typeof b.Promise && (b.Promise = a(2))
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {2: 2}], 4: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function e() {
                try {
                    if ("undefined" != typeof indexedDB) return indexedDB;
                    if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                    if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                    if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                    if ("undefined" != typeof msIndexedDB) return msIndexedDB
                } catch (a) {
                    return
                }
            }

            function f() {
                try {
                    if (!ua) return !1;
                    var a = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                        b = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                    return (!a || b) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                } catch (a) {
                    return !1
                }
            }

            function g(a, b) {
                a = a || [], b = b || {};
                try {
                    return new Blob(a, b)
                } catch (f) {
                    if ("TypeError" !== f.name) throw f;
                    for (var c = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder, d = new c, e = 0; e < a.length; e += 1) d.append(a[e]);
                    return d.getBlob(b.type)
                }
            }

            function h(a, b) {
                b && a.then(function (a) {
                    b(null, a)
                }, function (a) {
                    b(a)
                })
            }

            function i(a, b, c) {
                "function" == typeof b && a.then(b), "function" == typeof c && a.catch(c)
            }

            function j(a) {
                return "string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a)), a
            }

            function k() {
                if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
            }

            function l(a) {
                for (var b = a.length, c = new ArrayBuffer(b), d = new Uint8Array(c), e = 0; e < b; e++) d[e] = a.charCodeAt(e);
                return c
            }

            function m(a) {
                return new va(function (b) {
                    var c = a.transaction(wa, Ba), d = g([""]);
                    c.objectStore(wa).put(d, "key"), c.onabort = function (a) {
                        a.preventDefault(), a.stopPropagation(), b(!1)
                    }, c.oncomplete = function () {
                        var a = navigator.userAgent.match(/Chrome\/(\d+)/), c = navigator.userAgent.match(/Edge\//);
                        b(c || !a || parseInt(a[1], 10) >= 43)
                    }
                }).catch(function () {
                    return !1
                })
            }

            function n(a) {
                return "boolean" == typeof xa ? va.resolve(xa) : m(a).then(function (a) {
                    return xa = a
                })
            }

            function o(a) {
                var b = ya[a.name], c = {};
                c.promise = new va(function (a, b) {
                    c.resolve = a, c.reject = b
                }), b.deferredOperations.push(c), b.dbReady ? b.dbReady = b.dbReady.then(function () {
                    return c.promise
                }) : b.dbReady = c.promise
            }

            function p(a) {
                var b = ya[a.name], c = b.deferredOperations.pop();
                if (c) return c.resolve(), c.promise
            }

            function q(a, b) {
                var c = ya[a.name], d = c.deferredOperations.pop();
                if (d) return d.reject(b), d.promise
            }

            function r(a, b) {
                return new va(function (c, d) {
                    if (ya[a.name] = ya[a.name] || B(), a.db) {
                        if (!b) return c(a.db);
                        o(a), a.db.close()
                    }
                    var e = [a.name];
                    b && e.push(a.version);
                    var f = ua.open.apply(ua, e);
                    b && (f.onupgradeneeded = function (b) {
                        var c = f.result;
                        try {
                            c.createObjectStore(a.storeName), b.oldVersion <= 1 && c.createObjectStore(wa)
                        } catch (c) {
                            if ("ConstraintError" !== c.name) throw c;
                            console.warn('The database "' + a.name + '" has been upgraded from version ' + b.oldVersion + " to version " + b.newVersion + ', but the storage "' + a.storeName + '" already exists.')
                        }
                    }), f.onerror = function (a) {
                        a.preventDefault(), d(f.error)
                    }, f.onsuccess = function () {
                        c(f.result), p(a)
                    }
                })
            }

            function s(a) {
                return r(a, !1)
            }

            function t(a) {
                return r(a, !0)
            }

            function u(a, b) {
                if (!a.db) return !0;
                var c = !a.db.objectStoreNames.contains(a.storeName), d = a.version < a.db.version,
                    e = a.version > a.db.version;
                if (d && (a.version !== b && console.warn('The database "' + a.name + "\" can't be downgraded from version " + a.db.version + " to version " + a.version + "."), a.version = a.db.version), e || c) {
                    if (c) {
                        var f = a.db.version + 1;
                        f > a.version && (a.version = f)
                    }
                    return !0
                }
                return !1
            }

            function v(a) {
                return new va(function (b, c) {
                    var d = new FileReader;
                    d.onerror = c, d.onloadend = function (c) {
                        var d = btoa(c.target.result || "");
                        b({__local_forage_encoded_blob: !0, data: d, type: a.type})
                    }, d.readAsBinaryString(a)
                })
            }

            function w(a) {
                return g([l(atob(a.data))], {type: a.type})
            }

            function x(a) {
                return a && a.__local_forage_encoded_blob
            }

            function y(a) {
                var b = this, c = b._initReady().then(function () {
                    var a = ya[b._dbInfo.name];
                    if (a && a.dbReady) return a.dbReady
                });
                return i(c, a, a), c
            }

            function z(a) {
                o(a);
                for (var b = ya[a.name], c = b.forages, d = 0; d < c.length; d++) {
                    var e = c[d];
                    e._dbInfo.db && (e._dbInfo.db.close(), e._dbInfo.db = null)
                }
                return a.db = null, s(a).then(function (b) {
                    return a.db = b, u(a) ? t(a) : b
                }).then(function (d) {
                    a.db = b.db = d;
                    for (var e = 0; e < c.length; e++) c[e]._dbInfo.db = d
                }).catch(function (b) {
                    throw q(a, b), b
                })
            }

            function A(a, b, c, d) {
                void 0 === d && (d = 1);
                try {
                    var e = a.db.transaction(a.storeName, b);
                    c(null, e)
                } catch (e) {
                    if (d > 0 && (!a.db || "InvalidStateError" === e.name || "NotFoundError" === e.name)) return va.resolve().then(function () {
                        if (!a.db || "NotFoundError" === e.name && !a.db.objectStoreNames.contains(a.storeName) && a.version <= a.db.version) return a.db && (a.version = a.db.version + 1), t(a)
                    }).then(function () {
                        return z(a).then(function () {
                            A(a, b, c, d - 1)
                        })
                    }).catch(c);
                    c(e)
                }
            }

            function B() {
                return {forages: [], db: null, dbReady: null, deferredOperations: []}
            }

            function C(a) {
                function b() {
                    return va.resolve()
                }

                var c = this, d = {db: null};
                if (a) for (var e in a) d[e] = a[e];
                var f = ya[d.name];
                f || (f = B(), ya[d.name] = f), f.forages.push(c), c._initReady || (c._initReady = c.ready, c.ready = y);
                for (var g = [], h = 0; h < f.forages.length; h++) {
                    var i = f.forages[h];
                    i !== c && g.push(i._initReady().catch(b))
                }
                var j = f.forages.slice(0);
                return va.all(g).then(function () {
                    return d.db = f.db, s(d)
                }).then(function (a) {
                    return d.db = a, u(d, c._defaultConfig.version) ? t(d) : a
                }).then(function (a) {
                    d.db = f.db = a, c._dbInfo = d;
                    for (var b = 0; b < j.length; b++) {
                        var e = j[b];
                        e !== c && (e._dbInfo.db = d.db, e._dbInfo.version = d.version)
                    }
                })
            }

            function D(a, b) {
                var c = this;
                a = j(a);
                var d = new va(function (b, d) {
                    c.ready().then(function () {
                        A(c._dbInfo, Aa, function (e, f) {
                            if (e) return d(e);
                            try {
                                var g = f.objectStore(c._dbInfo.storeName), h = g.get(a);
                                h.onsuccess = function () {
                                    var a = h.result;
                                    void 0 === a && (a = null), x(a) && (a = w(a)), b(a)
                                }, h.onerror = function () {
                                    d(h.error)
                                }
                            } catch (a) {
                                d(a)
                            }
                        })
                    }).catch(d)
                });
                return h(d, b), d
            }

            function E(a, b) {
                var c = this, d = new va(function (b, d) {
                    c.ready().then(function () {
                        A(c._dbInfo, Aa, function (e, f) {
                            if (e) return d(e);
                            try {
                                var g = f.objectStore(c._dbInfo.storeName), h = g.openCursor(), i = 1;
                                h.onsuccess = function () {
                                    var c = h.result;
                                    if (c) {
                                        var d = c.value;
                                        x(d) && (d = w(d));
                                        var e = a(d, c.key, i++);
                                        void 0 !== e ? b(e) : c.continue()
                                    } else b()
                                }, h.onerror = function () {
                                    d(h.error)
                                }
                            } catch (a) {
                                d(a)
                            }
                        })
                    }).catch(d)
                });
                return h(d, b), d
            }

            function F(a, b, c) {
                var d = this;
                a = j(a);
                var e = new va(function (c, e) {
                    var f;
                    d.ready().then(function () {
                        return f = d._dbInfo, "[object Blob]" === za.call(b) ? n(f.db).then(function (a) {
                            return a ? b : v(b)
                        }) : b
                    }).then(function (b) {
                        A(d._dbInfo, Ba, function (f, g) {
                            if (f) return e(f);
                            try {
                                var h = g.objectStore(d._dbInfo.storeName);
                                null === b && (b = void 0);
                                var i = h.put(b, a);
                                g.oncomplete = function () {
                                    void 0 === b && (b = null), c(b)
                                }, g.onabort = g.onerror = function () {
                                    var a = i.error ? i.error : i.transaction.error;
                                    e(a)
                                }
                            } catch (a) {
                                e(a)
                            }
                        })
                    }).catch(e)
                });
                return h(e, c), e
            }

            function G(a, b) {
                var c = this;
                a = j(a);
                var d = new va(function (b, d) {
                    c.ready().then(function () {
                        A(c._dbInfo, Ba, function (e, f) {
                            if (e) return d(e);
                            try {
                                var g = f.objectStore(c._dbInfo.storeName), h = g.delete(a);
                                f.oncomplete = function () {
                                    b()
                                }, f.onerror = function () {
                                    d(h.error)
                                }, f.onabort = function () {
                                    var a = h.error ? h.error : h.transaction.error;
                                    d(a)
                                }
                            } catch (a) {
                                d(a)
                            }
                        })
                    }).catch(d)
                });
                return h(d, b), d
            }

            function H(a) {
                var b = this, c = new va(function (a, c) {
                    b.ready().then(function () {
                        A(b._dbInfo, Ba, function (d, e) {
                            if (d) return c(d);
                            try {
                                var f = e.objectStore(b._dbInfo.storeName), g = f.clear();
                                e.oncomplete = function () {
                                    a()
                                }, e.onabort = e.onerror = function () {
                                    var a = g.error ? g.error : g.transaction.error;
                                    c(a)
                                }
                            } catch (a) {
                                c(a)
                            }
                        })
                    }).catch(c)
                });
                return h(c, a), c
            }

            function I(a) {
                var b = this, c = new va(function (a, c) {
                    b.ready().then(function () {
                        A(b._dbInfo, Aa, function (d, e) {
                            if (d) return c(d);
                            try {
                                var f = e.objectStore(b._dbInfo.storeName), g = f.count();
                                g.onsuccess = function () {
                                    a(g.result)
                                }, g.onerror = function () {
                                    c(g.error)
                                }
                            } catch (a) {
                                c(a)
                            }
                        })
                    }).catch(c)
                });
                return h(c, a), c
            }

            function J(a, b) {
                var c = this, d = new va(function (b, d) {
                    if (a < 0) return void b(null);
                    c.ready().then(function () {
                        A(c._dbInfo, Aa, function (e, f) {
                            if (e) return d(e);
                            try {
                                var g = f.objectStore(c._dbInfo.storeName), h = !1, i = g.openCursor();
                                i.onsuccess = function () {
                                    var c = i.result;
                                    if (!c) return void b(null);
                                    0 === a ? b(c.key) : h ? b(c.key) : (h = !0, c.advance(a))
                                }, i.onerror = function () {
                                    d(i.error)
                                }
                            } catch (a) {
                                d(a)
                            }
                        })
                    }).catch(d)
                });
                return h(d, b), d
            }

            function K(a) {
                var b = this, c = new va(function (a, c) {
                    b.ready().then(function () {
                        A(b._dbInfo, Aa, function (d, e) {
                            if (d) return c(d);
                            try {
                                var f = e.objectStore(b._dbInfo.storeName), g = f.openCursor(), h = [];
                                g.onsuccess = function () {
                                    var b = g.result;
                                    if (!b) return void a(h);
                                    h.push(b.key), b.continue()
                                }, g.onerror = function () {
                                    c(g.error)
                                }
                            } catch (a) {
                                c(a)
                            }
                        })
                    }).catch(c)
                });
                return h(c, a), c
            }

            function L(a, b) {
                b = k.apply(this, arguments);
                var c = this.config();
                a = "function" != typeof a && a || {}, a.name || (a.name = a.name || c.name, a.storeName = a.storeName || c.storeName);
                var d, e = this;
                if (a.name) {
                    var f = a.name === c.name && e._dbInfo.db,
                        g = f ? va.resolve(e._dbInfo.db) : s(a).then(function (b) {
                            var c = ya[a.name], d = c.forages;
                            c.db = b;
                            for (var e = 0; e < d.length; e++) d[e]._dbInfo.db = b;
                            return b
                        });
                    d = a.storeName ? g.then(function (b) {
                        if (b.objectStoreNames.contains(a.storeName)) {
                            var c = b.version + 1;
                            o(a);
                            var d = ya[a.name], e = d.forages;
                            b.close();
                            for (var f = 0; f < e.length; f++) {
                                var g = e[f];
                                g._dbInfo.db = null, g._dbInfo.version = c
                            }
                            return new va(function (b, d) {
                                var e = ua.open(a.name, c);
                                e.onerror = function (a) {
                                    e.result.close(), d(a)
                                }, e.onupgradeneeded = function () {
                                    e.result.deleteObjectStore(a.storeName)
                                }, e.onsuccess = function () {
                                    var a = e.result;
                                    a.close(), b(a)
                                }
                            }).then(function (a) {
                                d.db = a;
                                for (var b = 0; b < e.length; b++) {
                                    var c = e[b];
                                    c._dbInfo.db = a, p(c._dbInfo)
                                }
                            }).catch(function (b) {
                                throw(q(a, b) || va.resolve()).catch(function () {
                                }), b
                            })
                        }
                    }) : g.then(function (b) {
                        o(a);
                        var c = ya[a.name], d = c.forages;
                        b.close();
                        for (var e = 0; e < d.length; e++) {
                            d[e]._dbInfo.db = null
                        }
                        return new va(function (b, c) {
                            var d = ua.deleteDatabase(a.name);
                            d.onerror = d.onblocked = function (a) {
                                var b = d.result;
                                b && b.close(), c(a)
                            }, d.onsuccess = function () {
                                var a = d.result;
                                a && a.close(), b(a)
                            }
                        }).then(function (a) {
                            c.db = a;
                            for (var b = 0; b < d.length; b++) p(d[b]._dbInfo)
                        }).catch(function (b) {
                            throw(q(a, b) || va.resolve()).catch(function () {
                            }), b
                        })
                    })
                } else d = va.reject("Invalid arguments");
                return h(d, b), d
            }

            function M() {
                return "function" == typeof openDatabase
            }

            function N(a) {
                var b, c, d, e, f, g = .75 * a.length, h = a.length, i = 0;
                "=" === a[a.length - 1] && (g--, "=" === a[a.length - 2] && g--);
                var j = new ArrayBuffer(g), k = new Uint8Array(j);
                for (b = 0; b < h; b += 4) c = Da.indexOf(a[b]), d = Da.indexOf(a[b + 1]), e = Da.indexOf(a[b + 2]), f = Da.indexOf(a[b + 3]), k[i++] = c << 2 | d >> 4, k[i++] = (15 & d) << 4 | e >> 2, k[i++] = (3 & e) << 6 | 63 & f;
                return j
            }

            function O(a) {
                var b, c = new Uint8Array(a), d = "";
                for (b = 0; b < c.length; b += 3) d += Da[c[b] >> 2], d += Da[(3 & c[b]) << 4 | c[b + 1] >> 4], d += Da[(15 & c[b + 1]) << 2 | c[b + 2] >> 6], d += Da[63 & c[b + 2]];
                return c.length % 3 == 2 ? d = d.substring(0, d.length - 1) + "=" : c.length % 3 == 1 && (d = d.substring(0, d.length - 2) + "=="), d
            }

            function P(a, b) {
                var c = "";
                if (a && (c = Ua.call(a)), a && ("[object ArrayBuffer]" === c || a.buffer && "[object ArrayBuffer]" === Ua.call(a.buffer))) {
                    var d, e = Ga;
                    a instanceof ArrayBuffer ? (d = a, e += Ia) : (d = a.buffer, "[object Int8Array]" === c ? e += Ka : "[object Uint8Array]" === c ? e += La : "[object Uint8ClampedArray]" === c ? e += Ma : "[object Int16Array]" === c ? e += Na : "[object Uint16Array]" === c ? e += Pa : "[object Int32Array]" === c ? e += Oa : "[object Uint32Array]" === c ? e += Qa : "[object Float32Array]" === c ? e += Ra : "[object Float64Array]" === c ? e += Sa : b(new Error("Failed to get type for BinaryArray"))), b(e + O(d))
                } else if ("[object Blob]" === c) {
                    var f = new FileReader;
                    f.onload = function () {
                        var c = Ea + a.type + "~" + O(this.result);
                        b(Ga + Ja + c)
                    }, f.readAsArrayBuffer(a)
                } else try {
                    b(JSON.stringify(a))
                } catch (c) {
                    console.error("Couldn't convert value into a JSON string: ", a), b(null, c)
                }
            }

            function Q(a) {
                if (a.substring(0, Ha) !== Ga) return JSON.parse(a);
                var b, c = a.substring(Ta), d = a.substring(Ha, Ta);
                if (d === Ja && Fa.test(c)) {
                    var e = c.match(Fa);
                    b = e[1], c = c.substring(e[0].length)
                }
                var f = N(c);
                switch (d) {
                    case Ia:
                        return f;
                    case Ja:
                        return g([f], {type: b});
                    case Ka:
                        return new Int8Array(f);
                    case La:
                        return new Uint8Array(f);
                    case Ma:
                        return new Uint8ClampedArray(f);
                    case Na:
                        return new Int16Array(f);
                    case Pa:
                        return new Uint16Array(f);
                    case Oa:
                        return new Int32Array(f);
                    case Qa:
                        return new Uint32Array(f);
                    case Ra:
                        return new Float32Array(f);
                    case Sa:
                        return new Float64Array(f);
                    default:
                        throw new Error("Unkown type: " + d)
                }
            }

            function R(a, b, c, d) {
                a.executeSql("CREATE TABLE IF NOT EXISTS " + b.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], c, d)
            }

            function S(a) {
                var b = this, c = {db: null};
                if (a) for (var d in a) c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];
                var e = new va(function (a, d) {
                    try {
                        c.db = openDatabase(c.name, String(c.version), c.description, c.size)
                    } catch (a) {
                        return d(a)
                    }
                    c.db.transaction(function (e) {
                        R(e, c, function () {
                            b._dbInfo = c, a()
                        }, function (a, b) {
                            d(b)
                        })
                    }, d)
                });
                return c.serializer = Va, e
            }

            function T(a, b, c, d, e, f) {
                a.executeSql(c, d, e, function (a, g) {
                    g.code === g.SYNTAX_ERR ? a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [name], function (a, h) {
                        h.rows.length ? f(a, g) : R(a, b, function () {
                            a.executeSql(c, d, e, f)
                        }, f)
                    }, f) : f(a, g)
                }, f)
            }

            function U(a, b) {
                var c = this;
                a = j(a);
                var d = new va(function (b, d) {
                    c.ready().then(function () {
                        var e = c._dbInfo;
                        e.db.transaction(function (c) {
                            T(c, e, "SELECT * FROM " + e.storeName + " WHERE key = ? LIMIT 1", [a], function (a, c) {
                                var d = c.rows.length ? c.rows.item(0).value : null;
                                d && (d = e.serializer.deserialize(d)), b(d)
                            }, function (a, b) {
                                d(b)
                            })
                        })
                    }).catch(d)
                });
                return h(d, b), d
            }

            function V(a, b) {
                var c = this, d = new va(function (b, d) {
                    c.ready().then(function () {
                        var e = c._dbInfo;
                        e.db.transaction(function (c) {
                            T(c, e, "SELECT * FROM " + e.storeName, [], function (c, d) {
                                for (var f = d.rows, g = f.length, h = 0; h < g; h++) {
                                    var i = f.item(h), j = i.value;
                                    if (j && (j = e.serializer.deserialize(j)), void 0 !== (j = a(j, i.key, h + 1))) return void b(j)
                                }
                                b()
                            }, function (a, b) {
                                d(b)
                            })
                        })
                    }).catch(d)
                });
                return h(d, b), d
            }

            function W(a, b, c, d) {
                var e = this;
                a = j(a);
                var f = new va(function (f, g) {
                    e.ready().then(function () {
                        void 0 === b && (b = null);
                        var h = b, i = e._dbInfo;
                        i.serializer.serialize(b, function (b, j) {
                            j ? g(j) : i.db.transaction(function (c) {
                                T(c, i, "INSERT OR REPLACE INTO " + i.storeName + " (key, value) VALUES (?, ?)", [a, b], function () {
                                    f(h)
                                }, function (a, b) {
                                    g(b)
                                })
                            }, function (b) {
                                if (b.code === b.QUOTA_ERR) {
                                    if (d > 0) return void f(W.apply(e, [a, h, c, d - 1]));
                                    g(b)
                                }
                            })
                        })
                    }).catch(g)
                });
                return h(f, c), f
            }

            function X(a, b, c) {
                return W.apply(this, [a, b, c, 1])
            }

            function Y(a, b) {
                var c = this;
                a = j(a);
                var d = new va(function (b, d) {
                    c.ready().then(function () {
                        var e = c._dbInfo;
                        e.db.transaction(function (c) {
                            T(c, e, "DELETE FROM " + e.storeName + " WHERE key = ?", [a], function () {
                                b()
                            }, function (a, b) {
                                d(b)
                            })
                        })
                    }).catch(d)
                });
                return h(d, b), d
            }

            function Z(a) {
                var b = this, c = new va(function (a, c) {
                    b.ready().then(function () {
                        var d = b._dbInfo;
                        d.db.transaction(function (b) {
                            T(b, d, "DELETE FROM " + d.storeName, [], function () {
                                a()
                            }, function (a, b) {
                                c(b)
                            })
                        })
                    }).catch(c)
                });
                return h(c, a), c
            }

            function $(a) {
                var b = this, c = new va(function (a, c) {
                    b.ready().then(function () {
                        var d = b._dbInfo;
                        d.db.transaction(function (b) {
                            T(b, d, "SELECT COUNT(key) as c FROM " + d.storeName, [], function (b, c) {
                                var d = c.rows.item(0).c;
                                a(d)
                            }, function (a, b) {
                                c(b)
                            })
                        })
                    }).catch(c)
                });
                return h(c, a), c
            }

            function _(a, b) {
                var c = this, d = new va(function (b, d) {
                    c.ready().then(function () {
                        var e = c._dbInfo;
                        e.db.transaction(function (c) {
                            T(c, e, "SELECT key FROM " + e.storeName + " WHERE id = ? LIMIT 1", [a + 1], function (a, c) {
                                var d = c.rows.length ? c.rows.item(0).key : null;
                                b(d)
                            }, function (a, b) {
                                d(b)
                            })
                        })
                    }).catch(d)
                });
                return h(d, b), d
            }

            function aa(a) {
                var b = this, c = new va(function (a, c) {
                    b.ready().then(function () {
                        var d = b._dbInfo;
                        d.db.transaction(function (b) {
                            T(b, d, "SELECT key FROM " + d.storeName, [], function (b, c) {
                                for (var d = [], e = 0; e < c.rows.length; e++) d.push(c.rows.item(e).key);
                                a(d)
                            }, function (a, b) {
                                c(b)
                            })
                        })
                    }).catch(c)
                });
                return h(c, a), c
            }

            function ba(a) {
                return new va(function (b, c) {
                    a.transaction(function (d) {
                        d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (c, d) {
                            for (var e = [], f = 0; f < d.rows.length; f++) e.push(d.rows.item(f).name);
                            b({db: a, storeNames: e})
                        }, function (a, b) {
                            c(b)
                        })
                    }, function (a) {
                        c(a)
                    })
                })
            }

            function ca(a, b) {
                b = k.apply(this, arguments);
                var c = this.config();
                a = "function" != typeof a && a || {}, a.name || (a.name = a.name || c.name, a.storeName = a.storeName || c.storeName);
                var d, e = this;
                return d = a.name ? new va(function (b) {
                    var d;
                    d = a.name === c.name ? e._dbInfo.db : openDatabase(a.name, "", "", 0), b(a.storeName ? {
                        db: d,
                        storeNames: [a.storeName]
                    } : ba(d))
                }).then(function (a) {
                    return new va(function (b, c) {
                        a.db.transaction(function (d) {
                            function e(a) {
                                return new va(function (b, c) {
                                    d.executeSql("DROP TABLE IF EXISTS " + a, [], function () {
                                        b()
                                    }, function (a, b) {
                                        c(b)
                                    })
                                })
                            }

                            for (var f = [], g = 0, h = a.storeNames.length; g < h; g++) f.push(e(a.storeNames[g]));
                            va.all(f).then(function () {
                                b()
                            }).catch(function (a) {
                                c(a)
                            })
                        }, function (a) {
                            c(a)
                        })
                    })
                }) : va.reject("Invalid arguments"), h(d, b), d
            }

            function da() {
                try {
                    return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
                } catch (a) {
                    return !1
                }
            }

            function ea(a, b) {
                var c = a.name + "/";
                return a.storeName !== b.storeName && (c += a.storeName + "/"), c
            }

            function fa() {
                var a = "_localforage_support_test";
                try {
                    return localStorage.setItem(a, !0), localStorage.removeItem(a), !1
                } catch (a) {
                    return !0
                }
            }

            function ga() {
                return !fa() || localStorage.length > 0
            }

            function ha(a) {
                var b = this, c = {};
                if (a) for (var d in a) c[d] = a[d];
                return c.keyPrefix = ea(a, b._defaultConfig), ga() ? (b._dbInfo = c, c.serializer = Va, va.resolve()) : va.reject()
            }

            function ia(a) {
                var b = this, c = b.ready().then(function () {
                    for (var a = b._dbInfo.keyPrefix, c = localStorage.length - 1; c >= 0; c--) {
                        var d = localStorage.key(c);
                        0 === d.indexOf(a) && localStorage.removeItem(d)
                    }
                });
                return h(c, a), c
            }

            function ja(a, b) {
                var c = this;
                a = j(a);
                var d = c.ready().then(function () {
                    var b = c._dbInfo, d = localStorage.getItem(b.keyPrefix + a);
                    return d && (d = b.serializer.deserialize(d)), d
                });
                return h(d, b), d
            }

            function ka(a, b) {
                var c = this, d = c.ready().then(function () {
                    for (var b = c._dbInfo, d = b.keyPrefix, e = d.length, f = localStorage.length, g = 1, h = 0; h < f; h++) {
                        var i = localStorage.key(h);
                        if (0 === i.indexOf(d)) {
                            var j = localStorage.getItem(i);
                            if (j && (j = b.serializer.deserialize(j)), void 0 !== (j = a(j, i.substring(e), g++))) return j
                        }
                    }
                });
                return h(d, b), d
            }

            function la(a, b) {
                var c = this, d = c.ready().then(function () {
                    var b, d = c._dbInfo;
                    try {
                        b = localStorage.key(a)
                    } catch (a) {
                        b = null
                    }
                    return b && (b = b.substring(d.keyPrefix.length)), b
                });
                return h(d, b), d
            }

            function ma(a) {
                var b = this, c = b.ready().then(function () {
                    for (var a = b._dbInfo, c = localStorage.length, d = [], e = 0; e < c; e++) {
                        var f = localStorage.key(e);
                        0 === f.indexOf(a.keyPrefix) && d.push(f.substring(a.keyPrefix.length))
                    }
                    return d
                });
                return h(c, a), c
            }

            function na(a) {
                var b = this, c = b.keys().then(function (a) {
                    return a.length
                });
                return h(c, a), c
            }

            function oa(a, b) {
                var c = this;
                a = j(a);
                var d = c.ready().then(function () {
                    var b = c._dbInfo;
                    localStorage.removeItem(b.keyPrefix + a)
                });
                return h(d, b), d
            }

            function pa(a, b, c) {
                var d = this;
                a = j(a);
                var e = d.ready().then(function () {
                    void 0 === b && (b = null);
                    var c = b;
                    return new va(function (e, f) {
                        var g = d._dbInfo;
                        g.serializer.serialize(b, function (b, d) {
                            if (d) f(d); else try {
                                localStorage.setItem(g.keyPrefix + a, b), e(c)
                            } catch (a) {
                                "QuotaExceededError" !== a.name && "NS_ERROR_DOM_QUOTA_REACHED" !== a.name || f(a), f(a)
                            }
                        })
                    })
                });
                return h(e, c), e
            }

            function qa(a, b) {
                if (b = k.apply(this, arguments), a = "function" != typeof a && a || {}, !a.name) {
                    var c = this.config();
                    a.name = a.name || c.name, a.storeName = a.storeName || c.storeName
                }
                var d, e = this;
                return d = a.name ? new va(function (b) {
                    b(a.storeName ? ea(a, e._defaultConfig) : a.name + "/")
                }).then(function (a) {
                    for (var b = localStorage.length - 1; b >= 0; b--) {
                        var c = localStorage.key(b);
                        0 === c.indexOf(a) && localStorage.removeItem(c)
                    }
                }) : va.reject("Invalid arguments"), h(d, b), d
            }

            function ra(a, b) {
                a[b] = function () {
                    var c = arguments;
                    return a.ready().then(function () {
                        return a[b].apply(a, c)
                    })
                }
            }

            function sa() {
                for (var a = 1; a < arguments.length; a++) {
                    var b = arguments[a];
                    if (b) for (var c in b) b.hasOwnProperty(c) && ($a(b[c]) ? arguments[0][c] = b[c].slice() : arguments[0][c] = b[c])
                }
                return arguments[0]
            }

            var ta = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                return typeof a
            } : function (a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            }, ua = e();
            "undefined" == typeof Promise && a(3);
            var va = Promise, wa = "local-forage-detect-blob-support", xa = void 0, ya = {},
                za = Object.prototype.toString, Aa = "readonly", Ba = "readwrite", Ca = {
                    _driver: "asyncStorage",
                    _initStorage: C,
                    _support: f(),
                    iterate: E,
                    getItem: D,
                    setItem: F,
                    removeItem: G,
                    clear: H,
                    length: I,
                    key: J,
                    keys: K,
                    dropInstance: L
                }, Da = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ea = "~~local_forage_type~",
                Fa = /^~~local_forage_type~([^~]+)~/, Ga = "__lfsc__:", Ha = Ga.length, Ia = "arbf", Ja = "blob",
                Ka = "si08", La = "ui08", Ma = "uic8", Na = "si16", Oa = "si32", Pa = "ur16", Qa = "ui32", Ra = "fl32",
                Sa = "fl64", Ta = Ha + Ia.length, Ua = Object.prototype.toString,
                Va = {serialize: P, deserialize: Q, stringToBuffer: N, bufferToString: O}, Wa = {
                    _driver: "webSQLStorage",
                    _initStorage: S,
                    _support: M(),
                    iterate: V,
                    getItem: U,
                    setItem: X,
                    removeItem: Y,
                    clear: Z,
                    length: $,
                    key: _,
                    keys: aa,
                    dropInstance: ca
                }, Xa = {
                    _driver: "localStorageWrapper",
                    _initStorage: ha,
                    _support: da(),
                    iterate: ka,
                    getItem: ja,
                    setItem: pa,
                    removeItem: oa,
                    clear: ia,
                    length: na,
                    key: la,
                    keys: ma,
                    dropInstance: qa
                }, Ya = function (a, b) {
                    return a === b || "number" == typeof a && "number" == typeof b && isNaN(a) && isNaN(b)
                }, Za = function (a, b) {
                    for (var c = a.length, d = 0; d < c;) {
                        if (Ya(a[d], b)) return !0;
                        d++
                    }
                    return !1
                }, $a = Array.isArray || function (a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                }, _a = {}, ab = {}, bb = {INDEXEDDB: Ca, WEBSQL: Wa, LOCALSTORAGE: Xa},
                cb = [bb.INDEXEDDB._driver, bb.WEBSQL._driver, bb.LOCALSTORAGE._driver], db = ["dropInstance"],
                eb = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(db),
                fb = {
                    description: "",
                    driver: cb.slice(),
                    name: "localforage",
                    size: 4980736,
                    storeName: "keyvaluepairs",
                    version: 1
                }, gb = function () {
                    function a(b) {
                        d(this, a);
                        for (var c in bb) if (bb.hasOwnProperty(c)) {
                            var e = bb[c], f = e._driver;
                            this[c] = f, _a[f] || this.defineDriver(e)
                        }
                        this._defaultConfig = sa({}, fb), this._config = sa({}, this._defaultConfig, b), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function () {
                        })
                    }

                    return a.prototype.config = function (a) {
                        if ("object" === (void 0 === a ? "undefined" : ta(a))) {
                            if (this._ready) return new Error("Can't call config() after localforage has been used.");
                            for (var b in a) {
                                if ("storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), "version" === b && "number" != typeof a[b]) return new Error("Database version must be a number.");
                                this._config[b] = a[b]
                            }
                            return !("driver" in a && a.driver) || this.setDriver(this._config.driver)
                        }
                        return "string" == typeof a ? this._config[a] : this._config
                    }, a.prototype.defineDriver = function (a, b, c) {
                        var d = new va(function (b, c) {
                            try {
                                var d = a._driver,
                                    e = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                if (!a._driver) return void c(e);
                                for (var f = eb.concat("_initStorage"), g = 0, i = f.length; g < i; g++) {
                                    var j = f[g];
                                    if ((!Za(db, j) || a[j]) && "function" != typeof a[j]) return void c(e)
                                }
                                (function () {
                                    for (var b = function (a) {
                                        return function () {
                                            var b = new Error("Method " + a + " is not implemented by the current driver"),
                                                c = va.reject(b);
                                            return h(c, arguments[arguments.length - 1]), c
                                        }
                                    }, c = 0, d = db.length; c < d; c++) {
                                        var e = db[c];
                                        a[e] || (a[e] = b(e))
                                    }
                                })();
                                var k = function (c) {
                                    _a[d] && console.info("Redefining LocalForage driver: " + d), _a[d] = a, ab[d] = c, b()
                                };
                                "_support" in a ? a._support && "function" == typeof a._support ? a._support().then(k, c) : k(!!a._support) : k(!0)
                            } catch (a) {
                                c(a)
                            }
                        });
                        return i(d, b, c), d
                    }, a.prototype.driver = function () {
                        return this._driver || null
                    }, a.prototype.getDriver = function (a, b, c) {
                        var d = _a[a] ? va.resolve(_a[a]) : va.reject(new Error("Driver not found."));
                        return i(d, b, c), d
                    }, a.prototype.getSerializer = function (a) {
                        var b = va.resolve(Va);
                        return i(b, a), b
                    }, a.prototype.ready = function (a) {
                        var b = this, c = b._driverSet.then(function () {
                            return null === b._ready && (b._ready = b._initDriver()), b._ready
                        });
                        return i(c, a, a), c
                    }, a.prototype.setDriver = function (a, b, c) {
                        function d() {
                            g._config.driver = g.driver()
                        }

                        function e(a) {
                            return g._extend(a), d(), g._ready = g._initStorage(g._config), g._ready
                        }

                        function f(a) {
                            return function () {
                                function b() {
                                    for (; c < a.length;) {
                                        var f = a[c];
                                        return c++, g._dbInfo = null, g._ready = null, g.getDriver(f).then(e).catch(b)
                                    }
                                    d();
                                    var h = new Error("No available storage method found.");
                                    return g._driverSet = va.reject(h), g._driverSet
                                }

                                var c = 0;
                                return b()
                            }
                        }

                        var g = this;
                        $a(a) || (a = [a]);
                        var h = this._getSupportedDrivers(a),
                            j = null !== this._driverSet ? this._driverSet.catch(function () {
                                return va.resolve()
                            }) : va.resolve();
                        return this._driverSet = j.then(function () {
                            var a = h[0];
                            return g._dbInfo = null, g._ready = null, g.getDriver(a).then(function (a) {
                                g._driver = a._driver, d(), g._wrapLibraryMethodsWithReady(), g._initDriver = f(h)
                            })
                        }).catch(function () {
                            d();
                            var a = new Error("No available storage method found.");
                            return g._driverSet = va.reject(a), g._driverSet
                        }), i(this._driverSet, b, c), this._driverSet
                    }, a.prototype.supports = function (a) {
                        return !!ab[a]
                    }, a.prototype._extend = function (a) {
                        sa(this, a)
                    }, a.prototype._getSupportedDrivers = function (a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++) {
                            var e = a[c];
                            this.supports(e) && b.push(e)
                        }
                        return b
                    }, a.prototype._wrapLibraryMethodsWithReady = function () {
                        for (var a = 0, b = eb.length; a < b; a++) ra(this, eb[a])
                    }, a.prototype.createInstance = function (b) {
                        return new a(b)
                    }, a
                }(), hb = new gb;
            b.exports = hb
        }, {3: 3}]
    }, {}, [4])(4)
});
(function () {
    function n(n, t) {
        return n.set(t[0], t[1]), n
    }

    function t(n, t) {
        return n.add(t), n
    }

    function r(n, t, r) {
        switch (r.length) {
            case 0:
                return n.call(t);
            case 1:
                return n.call(t, r[0]);
            case 2:
                return n.call(t, r[0], r[1]);
            case 3:
                return n.call(t, r[0], r[1], r[2])
        }
        return n.apply(t, r)
    }

    function e(n, t, r, e) {
        for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) {
            var o = n[u];
            t(e, o, r(o), n)
        }
        return e
    }

    function u(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e && t(n[r], r, n) !== !1;) ;
        return n
    }

    function i(n, t) {
        for (var r = null == n ? 0 : n.length; r-- && t(n[r], r, n) !== !1;) ;
        return n
    }

    function o(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e;) if (!t(n[r], r, n)) return !1;
        return !0
    }

    function f(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) {
            var o = n[r];
            t(o, r, n) && (i[u++] = o)
        }
        return i
    }

    function a(n, t) {
        var r = null == n ? 0 : n.length;
        return !!r && b(n, t, 0) > -1
    }

    function c(n, t, r) {
        for (var e = -1, u = null == n ? 0 : n.length; ++e < u;) if (r(t, n[e])) return !0;
        return !1
    }

    function l(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;) u[r] = t(n[r], r, n);
        return u
    }

    function s(n, t) {
        for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r];
        return n
    }

    function h(n, t, r, e) {
        var u = -1, i = null == n ? 0 : n.length;
        for (e && i && (r = n[++u]); ++u < i;) r = t(r, n[u], u, n);
        return r
    }

    function p(n, t, r, e) {
        var u = null == n ? 0 : n.length;
        for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);
        return r
    }

    function v(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e;) if (t(n[r], r, n)) return !0;
        return !1
    }

    function _(n) {
        return n.split("")
    }

    function g(n) {
        return n.match(Dt) || []
    }

    function y(n, t, r) {
        var e;
        return r(n, function (n, r, u) {
            if (t(n, r, u)) return e = r, !1
        }), e
    }

    function d(n, t, r, e) {
        for (var u = n.length, i = r + (e ? 1 : -1); e ? i-- : ++i < u;) if (t(n[i], i, n)) return i;
        return -1
    }

    function b(n, t, r) {
        return t === t ? K(n, t, r) : d(n, m, r)
    }

    function w(n, t, r, e) {
        for (var u = r - 1, i = n.length; ++u < i;) if (e(n[u], t)) return u;
        return -1
    }

    function m(n) {
        return n !== n
    }

    function x(n, t) {
        var r = null == n ? 0 : n.length;
        return r ? I(n, t) / r : Ln
    }

    function j(n) {
        return function (t) {
            return null == t ? X : t[n]
        }
    }

    function A(n) {
        return function (t) {
            return null == n ? X : n[t]
        }
    }

    function k(n, t, r, e, u) {
        return u(n, function (n, u, i) {
            r = e ? (e = !1, n) : t(r, n, u, i)
        }), r
    }

    function O(n, t) {
        var r = n.length;
        for (n.sort(t); r--;) n[r] = n[r].value;
        return n
    }

    function I(n, t) {
        for (var r, e = -1, u = n.length; ++e < u;) {
            var i = t(n[e]);
            i !== X && (r = r === X ? i : r + i)
        }
        return r
    }

    function R(n, t) {
        for (var r = -1, e = Array(n); ++r < n;) e[r] = t(r);
        return e
    }

    function z(n, t) {
        return l(t, function (t) {
            return [t, n[t]]
        })
    }

    function E(n) {
        return function (t) {
            return n(t)
        }
    }

    function S(n, t) {
        return l(t, function (t) {
            return n[t]
        })
    }

    function W(n, t) {
        return n.has(t)
    }

    function L(n, t) {
        for (var r = -1, e = n.length; ++r < e && b(t, n[r], 0) > -1;) ;
        return r
    }

    function C(n, t) {
        for (var r = n.length; r-- && b(t, n[r], 0) > -1;) ;
        return r
    }

    function U(n, t) {
        for (var r = n.length, e = 0; r--;) n[r] === t && ++e;
        return e
    }

    function B(n) {
        return "\\" + Yr[n]
    }

    function T(n, t) {
        return null == n ? X : n[t]
    }

    function $(n) {
        return Nr.test(n)
    }

    function D(n) {
        return Pr.test(n)
    }

    function M(n) {
        for (var t, r = []; !(t = n.next()).done;) r.push(t.value);
        return r
    }

    function F(n) {
        var t = -1, r = Array(n.size);
        return n.forEach(function (n, e) {
            r[++t] = [e, n]
        }), r
    }

    function N(n, t) {
        return function (r) {
            return n(t(r))
        }
    }

    function P(n, t) {
        for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
            var o = n[r];
            o !== t && o !== fn || (n[r] = fn, i[u++] = r)
        }
        return i
    }

    function q(n) {
        var t = -1, r = Array(n.size);
        return n.forEach(function (n) {
            r[++t] = n
        }), r
    }

    function Z(n) {
        var t = -1, r = Array(n.size);
        return n.forEach(function (n) {
            r[++t] = [n, n]
        }), r
    }

    function K(n, t, r) {
        for (var e = r - 1, u = n.length; ++e < u;) if (n[e] === t) return e;
        return -1
    }

    function V(n, t, r) {
        for (var e = r + 1; e--;) if (n[e] === t) return e;
        return e
    }

    function G(n) {
        return $(n) ? J(n) : ve(n)
    }

    function H(n) {
        return $(n) ? Y(n) : _(n)
    }

    function J(n) {
        for (var t = Mr.lastIndex = 0; Mr.test(n);) ++t;
        return t
    }

    function Y(n) {
        return n.match(Mr) || []
    }

    function Q(n) {
        return n.match(Fr) || []
    }

    var X, nn = "4.17.4", tn = 200, rn = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
        en = "Expected a function", un = "__lodash_hash_undefined__", on = 500, fn = "__lodash_placeholder__", an = 1,
        cn = 2, ln = 4, sn = 1, hn = 2, pn = 1, vn = 2, _n = 4, gn = 8, yn = 16, dn = 32, bn = 64, wn = 128, mn = 256,
        xn = 512, jn = 30, An = "...", kn = 800, On = 16, In = 1, Rn = 2, zn = 3, En = 1 / 0, Sn = 9007199254740991,
        Wn = 1.7976931348623157e308, Ln = NaN, Cn = 4294967295, Un = Cn - 1, Bn = Cn >>> 1,
        Tn = [["ary", wn], ["bind", pn], ["bindKey", vn], ["curry", gn], ["curryRight", yn], ["flip", xn], ["partial", dn], ["partialRight", bn], ["rearg", mn]],
        $n = "[object Arguments]", Dn = "[object Array]", Mn = "[object AsyncFunction]", Fn = "[object Boolean]",
        Nn = "[object Date]", Pn = "[object DOMException]", qn = "[object Error]", Zn = "[object Function]",
        Kn = "[object GeneratorFunction]", Vn = "[object Map]", Gn = "[object Number]", Hn = "[object Null]",
        Jn = "[object Object]", Yn = "[object Promise]", Qn = "[object Proxy]", Xn = "[object RegExp]",
        nt = "[object Set]", tt = "[object String]", rt = "[object Symbol]", et = "[object Undefined]",
        ut = "[object WeakMap]", it = "[object WeakSet]", ot = "[object ArrayBuffer]", ft = "[object DataView]",
        at = "[object Float32Array]", ct = "[object Float64Array]", lt = "[object Int8Array]",
        st = "[object Int16Array]", ht = "[object Int32Array]", pt = "[object Uint8Array]",
        vt = "[object Uint8ClampedArray]", _t = "[object Uint16Array]", gt = "[object Uint32Array]",
        yt = /\b__p \+= '';/g, dt = /\b(__p \+=) '' \+/g, bt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        wt = /&(?:amp|lt|gt|quot|#39);/g, mt = /[&<>"']/g, xt = RegExp(wt.source), jt = RegExp(mt.source),
        At = /<%-([\s\S]+?)%>/g, kt = /<%([\s\S]+?)%>/g, Ot = /<%=([\s\S]+?)%>/g,
        It = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Rt = /^\w*$/, zt = /^\./,
        Et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        St = /[\\^$.*+?()[\]{}|]/g, Wt = RegExp(St.source), Lt = /^\s+|\s+$/g, Ct = /^\s+/, Ut = /\s+$/,
        Bt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Tt = /\{\n\/\* \[wrapped with (.+)\] \*/, $t = /,? & /,
        Dt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Mt = /\\(\\)?/g, Ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        Nt = /\w*$/, Pt = /^[-+]0x[0-9a-f]+$/i, qt = /^0b[01]+$/i, Zt = /^\[object .+?Constructor\]$/,
        Kt = /^0o[0-7]+$/i, Vt = /^(?:0|[1-9]\d*)$/, Gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ht = /($^)/,
        Jt = /['\n\r\u2028\u2029\\]/g, Yt = "\\ud800-\\udfff", Qt = "\\u0300-\\u036f", Xt = "\\ufe20-\\ufe2f",
        nr = "\\u20d0-\\u20ff", tr = Qt + Xt + nr, rr = "\\u2700-\\u27bf", er = "a-z\\xdf-\\xf6\\xf8-\\xff",
        ur = "\\xac\\xb1\\xd7\\xf7", ir = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", or = "\\u2000-\\u206f",
        fr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        ar = "A-Z\\xc0-\\xd6\\xd8-\\xde", cr = "\\ufe0e\\ufe0f", lr = ur + ir + or + fr, sr = "['’]",
        hr = "[" + Yt + "]", pr = "[" + lr + "]", vr = "[" + tr + "]", _r = "\\d+", gr = "[" + rr + "]",
        yr = "[" + er + "]", dr = "[^" + Yt + lr + _r + rr + er + ar + "]", br = "\\ud83c[\\udffb-\\udfff]",
        wr = "(?:" + vr + "|" + br + ")", mr = "[^" + Yt + "]", xr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        jr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ar = "[" + ar + "]", kr = "\\u200d",
        Or = "(?:" + yr + "|" + dr + ")", Ir = "(?:" + Ar + "|" + dr + ")", Rr = "(?:" + sr + "(?:d|ll|m|re|s|t|ve))?",
        zr = "(?:" + sr + "(?:D|LL|M|RE|S|T|VE))?", Er = wr + "?", Sr = "[" + cr + "]?",
        Wr = "(?:" + kr + "(?:" + [mr, xr, jr].join("|") + ")" + Sr + Er + ")*",
        Lr = "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", Cr = "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",
        Ur = Sr + Er + Wr, Br = "(?:" + [gr, xr, jr].join("|") + ")" + Ur,
        Tr = "(?:" + [mr + vr + "?", vr, xr, jr, hr].join("|") + ")", $r = RegExp(sr, "g"), Dr = RegExp(vr, "g"),
        Mr = RegExp(br + "(?=" + br + ")|" + Tr + Ur, "g"),
        Fr = RegExp([Ar + "?" + yr + "+" + Rr + "(?=" + [pr, Ar, "$"].join("|") + ")", Ir + "+" + zr + "(?=" + [pr, Ar + Or, "$"].join("|") + ")", Ar + "?" + Or + "+" + Rr, Ar + "+" + zr, Cr, Lr, _r, Br].join("|"), "g"),
        Nr = RegExp("[" + kr + Yt + tr + cr + "]"),
        Pr = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        qr = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
        Zr = -1, Kr = {};
    Kr[at] = Kr[ct] = Kr[lt] = Kr[st] = Kr[ht] = Kr[pt] = Kr[vt] = Kr[_t] = Kr[gt] = !0, Kr[$n] = Kr[Dn] = Kr[ot] = Kr[Fn] = Kr[ft] = Kr[Nn] = Kr[qn] = Kr[Zn] = Kr[Vn] = Kr[Gn] = Kr[Jn] = Kr[Xn] = Kr[nt] = Kr[tt] = Kr[ut] = !1;
    var Vr = {};
    Vr[$n] = Vr[Dn] = Vr[ot] = Vr[ft] = Vr[Fn] = Vr[Nn] = Vr[at] = Vr[ct] = Vr[lt] = Vr[st] = Vr[ht] = Vr[Vn] = Vr[Gn] = Vr[Jn] = Vr[Xn] = Vr[nt] = Vr[tt] = Vr[rt] = Vr[pt] = Vr[vt] = Vr[_t] = Vr[gt] = !0, Vr[qn] = Vr[Zn] = Vr[ut] = !1;
    var Gr = {
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss",
            "Ā": "A",
            "Ă": "A",
            "Ą": "A",
            "ā": "a",
            "ă": "a",
            "ą": "a",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "Ď": "D",
            "Đ": "D",
            "ď": "d",
            "đ": "d",
            "Ē": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ę": "E",
            "Ě": "E",
            "ē": "e",
            "ĕ": "e",
            "ė": "e",
            "ę": "e",
            "ě": "e",
            "Ĝ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ģ": "G",
            "ĝ": "g",
            "ğ": "g",
            "ġ": "g",
            "ģ": "g",
            "Ĥ": "H",
            "Ħ": "H",
            "ĥ": "h",
            "ħ": "h",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "Į": "I",
            "İ": "I",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "į": "i",
            "ı": "i",
            "Ĵ": "J",
            "ĵ": "j",
            "Ķ": "K",
            "ķ": "k",
            "ĸ": "k",
            "Ĺ": "L",
            "Ļ": "L",
            "Ľ": "L",
            "Ŀ": "L",
            "Ł": "L",
            "ĺ": "l",
            "ļ": "l",
            "ľ": "l",
            "ŀ": "l",
            "ł": "l",
            "Ń": "N",
            "Ņ": "N",
            "Ň": "N",
            "Ŋ": "N",
            "ń": "n",
            "ņ": "n",
            "ň": "n",
            "ŋ": "n",
            "Ō": "O",
            "Ŏ": "O",
            "Ő": "O",
            "ō": "o",
            "ŏ": "o",
            "ő": "o",
            "Ŕ": "R",
            "Ŗ": "R",
            "Ř": "R",
            "ŕ": "r",
            "ŗ": "r",
            "ř": "r",
            "Ś": "S",
            "Ŝ": "S",
            "Ş": "S",
            "Š": "S",
            "ś": "s",
            "ŝ": "s",
            "ş": "s",
            "š": "s",
            "Ţ": "T",
            "Ť": "T",
            "Ŧ": "T",
            "ţ": "t",
            "ť": "t",
            "ŧ": "t",
            "Ũ": "U",
            "Ū": "U",
            "Ŭ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ų": "U",
            "ũ": "u",
            "ū": "u",
            "ŭ": "u",
            "ů": "u",
            "ű": "u",
            "ų": "u",
            "Ŵ": "W",
            "ŵ": "w",
            "Ŷ": "Y",
            "ŷ": "y",
            "Ÿ": "Y",
            "Ź": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "ź": "z",
            "ż": "z",
            "ž": "z",
            "Ĳ": "IJ",
            "ĳ": "ij",
            "Œ": "Oe",
            "œ": "oe",
            "ŉ": "'n",
            "ſ": "s"
        }, Hr = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"},
        Jr = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'"},
        Yr = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"}, Qr = parseFloat,
        Xr = parseInt, ne = "object" == typeof global && global && global.Object === Object && global,
        te = "object" == typeof self && self && self.Object === Object && self,
        re = ne || te || Function("return this")(),
        ee = "object" == typeof exports && exports && !exports.nodeType && exports,
        ue = ee && "object" == typeof module && module && !module.nodeType && module, ie = ue && ue.exports === ee,
        oe = ie && ne.process, fe = function () {
            try {
                return oe && oe.binding && oe.binding("util")
            } catch (n) {
            }
        }(), ae = fe && fe.isArrayBuffer, ce = fe && fe.isDate, le = fe && fe.isMap, se = fe && fe.isRegExp,
        he = fe && fe.isSet, pe = fe && fe.isTypedArray, ve = j("length"), _e = A(Gr), ge = A(Hr), ye = A(Jr),
        de = function _(A) {
            function K(n) {
                if (la(n) && !mh(n) && !(n instanceof Dt)) {
                    if (n instanceof Y) return n;
                    if (ml.call(n, "__wrapped__")) return io(n)
                }
                return new Y(n)
            }

            function J() {
            }

            function Y(n, t) {
                this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = X
            }

            function Dt(n) {
                this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Cn, this.__views__ = []
            }

            function Yt() {
                var n = new Dt(this.__wrapped__);
                return n.__actions__ = Mu(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Mu(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Mu(this.__views__), n
            }

            function Qt() {
                if (this.__filtered__) {
                    var n = new Dt(this);
                    n.__dir__ = -1, n.__filtered__ = !0
                } else n = this.clone(), n.__dir__ *= -1;
                return n
            }

            function Xt() {
                var n = this.__wrapped__.value(), t = this.__dir__, r = mh(n), e = t < 0, u = r ? n.length : 0,
                    i = zi(0, u, this.__views__), o = i.start, f = i.end, a = f - o, c = e ? f : o - 1,
                    l = this.__iteratees__, s = l.length, h = 0, p = Yl(a, this.__takeCount__);
                if (!r || !e && u == a && p == a) return mu(n, this.__actions__);
                var v = [];
                n:for (; a-- && h < p;) {
                    c += t;
                    for (var _ = -1, g = n[c]; ++_ < s;) {
                        var y = l[_], d = y.iteratee, b = y.type, w = d(g);
                        if (b == Rn) g = w; else if (!w) {
                            if (b == In) continue n;
                            break n
                        }
                    }
                    v[h++] = g
                }
                return v
            }

            function nr(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.clear(); ++t < r;) {
                    var e = n[t];
                    this.set(e[0], e[1])
                }
            }

            function tr() {
                this.__data__ = fs ? fs(null) : {}, this.size = 0
            }

            function rr(n) {
                var t = this.has(n) && delete this.__data__[n];
                return this.size -= t ? 1 : 0, t
            }

            function er(n) {
                var t = this.__data__;
                if (fs) {
                    var r = t[n];
                    return r === un ? X : r
                }
                return ml.call(t, n) ? t[n] : X
            }

            function ur(n) {
                var t = this.__data__;
                return fs ? t[n] !== X : ml.call(t, n)
            }

            function ir(n, t) {
                var r = this.__data__;
                return this.size += this.has(n) ? 0 : 1, r[n] = fs && t === X ? un : t, this
            }

            function or(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.clear(); ++t < r;) {
                    var e = n[t];
                    this.set(e[0], e[1])
                }
            }

            function fr() {
                this.__data__ = [], this.size = 0
            }

            function ar(n) {
                var t = this.__data__, r = Lr(t, n);
                if (r < 0) return !1;
                var e = t.length - 1;
                return r == e ? t.pop() : Ul.call(t, r, 1), --this.size, !0
            }

            function cr(n) {
                var t = this.__data__, r = Lr(t, n);
                return r < 0 ? X : t[r][1]
            }

            function lr(n) {
                return Lr(this.__data__, n) > -1
            }

            function sr(n, t) {
                var r = this.__data__, e = Lr(r, n);
                return e < 0 ? (++this.size, r.push([n, t])) : r[e][1] = t, this
            }

            function hr(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.clear(); ++t < r;) {
                    var e = n[t];
                    this.set(e[0], e[1])
                }
            }

            function pr() {
                this.size = 0, this.__data__ = {hash: new nr, map: new (es || or), string: new nr}
            }

            function vr(n) {
                var t = ki(this, n).delete(n);
                return this.size -= t ? 1 : 0, t
            }

            function _r(n) {
                return ki(this, n).get(n)
            }

            function gr(n) {
                return ki(this, n).has(n)
            }

            function yr(n, t) {
                var r = ki(this, n), e = r.size;
                return r.set(n, t), this.size += r.size == e ? 0 : 1, this
            }

            function dr(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.__data__ = new hr; ++t < r;) this.add(n[t])
            }

            function br(n) {
                return this.__data__.set(n, un), this
            }

            function wr(n) {
                return this.__data__.has(n)
            }

            function mr(n) {
                var t = this.__data__ = new or(n);
                this.size = t.size
            }

            function xr() {
                this.__data__ = new or, this.size = 0
            }

            function jr(n) {
                var t = this.__data__, r = t.delete(n);
                return this.size = t.size, r
            }

            function Ar(n) {
                return this.__data__.get(n)
            }

            function kr(n) {
                return this.__data__.has(n)
            }

            function Or(n, t) {
                var r = this.__data__;
                if (r instanceof or) {
                    var e = r.__data__;
                    if (!es || e.length < tn - 1) return e.push([n, t]), this.size = ++r.size, this;
                    r = this.__data__ = new hr(e)
                }
                return r.set(n, t), this.size = r.size, this
            }

            function Ir(n, t) {
                var r = mh(n), e = !r && wh(n), u = !r && !e && jh(n), i = !r && !e && !u && Rh(n),
                    o = r || e || u || i, f = o ? R(n.length, vl) : [], a = f.length;
                for (var c in n) !t && !ml.call(n, c) || o && ("length" == c || u && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Ti(c, a)) || f.push(c);
                return f
            }

            function Rr(n) {
                var t = n.length;
                return t ? n[ru(0, t - 1)] : X
            }

            function zr(n, t) {
                return to(Mu(n), Fr(t, 0, n.length))
            }

            function Er(n) {
                return to(Mu(n))
            }

            function Sr(n, t, r) {
                (r === X || Jf(n[t], r)) && (r !== X || t in n) || Tr(n, t, r)
            }

            function Wr(n, t, r) {
                var e = n[t];
                ml.call(n, t) && Jf(e, r) && (r !== X || t in n) || Tr(n, t, r)
            }

            function Lr(n, t) {
                for (var r = n.length; r--;) if (Jf(n[r][0], t)) return r;
                return -1
            }

            function Cr(n, t, r, e) {
                return bs(n, function (n, u, i) {
                    t(e, n, r(n), i)
                }), e
            }

            function Ur(n, t) {
                return n && Fu(t, Za(t), n)
            }

            function Br(n, t) {
                return n && Fu(t, Ka(t), n)
            }

            function Tr(n, t, r) {
                "__proto__" == t && Dl ? Dl(n, t, {configurable: !0, enumerable: !0, value: r, writable: !0}) : n[t] = r
            }

            function Mr(n, t) {
                for (var r = -1, e = t.length, u = fl(e), i = null == n; ++r < e;) u[r] = i ? X : Na(n, t[r]);
                return u
            }

            function Fr(n, t, r) {
                return n === n && (r !== X && (n = n <= r ? n : r), t !== X && (n = n >= t ? n : t)), n
            }

            function Nr(n, t, r, e, i, o) {
                var f, a = t & an, c = t & cn, l = t & ln;
                if (r && (f = i ? r(n, e, i, o) : r(n)), f !== X) return f;
                if (!ca(n)) return n;
                var s = mh(n);
                if (s) {
                    if (f = Wi(n), !a) return Mu(n, f)
                } else {
                    var h = Ss(n), p = h == Zn || h == Kn;
                    if (jh(n)) return Ru(n, a);
                    if (h == Jn || h == $n || p && !i) {
                        if (f = c || p ? {} : Li(n), !a) return c ? Pu(n, Br(f, n)) : Nu(n, Ur(f, n))
                    } else {
                        if (!Vr[h]) return i ? n : {};
                        f = Ci(n, h, Nr, a)
                    }
                }
                o || (o = new mr);
                var v = o.get(n);
                if (v) return v;
                o.set(n, f);
                var _ = l ? c ? mi : wi : c ? Ka : Za, g = s ? X : _(n);
                return u(g || n, function (e, u) {
                    g && (u = e, e = n[u]), Wr(f, u, Nr(e, t, r, u, n, o))
                }), f
            }

            function Pr(n) {
                var t = Za(n);
                return function (r) {
                    return Gr(r, n, t)
                }
            }

            function Gr(n, t, r) {
                var e = r.length;
                if (null == n) return !e;
                for (n = hl(n); e--;) {
                    var u = r[e], i = t[u], o = n[u];
                    if (o === X && !(u in n) || !i(o)) return !1
                }
                return !0
            }

            function Hr(n, t, r) {
                if ("function" != typeof n) throw new _l(en);
                return Cs(function () {
                    n.apply(X, r)
                }, t)
            }

            function Jr(n, t, r, e) {
                var u = -1, i = a, o = !0, f = n.length, s = [], h = t.length;
                if (!f) return s;
                r && (t = l(t, E(r))), e ? (i = c, o = !1) : t.length >= tn && (i = W, o = !1, t = new dr(t));
                n:for (; ++u < f;) {
                    var p = n[u], v = null == r ? p : r(p);
                    if (p = e || 0 !== p ? p : 0, o && v === v) {
                        for (var _ = h; _--;) if (t[_] === v) continue n;
                        s.push(p)
                    } else i(t, v, e) || s.push(p)
                }
                return s
            }

            function Yr(n, t) {
                var r = !0;
                return bs(n, function (n, e, u) {
                    return r = !!t(n, e, u)
                }), r
            }

            function ne(n, t, r) {
                for (var e = -1, u = n.length; ++e < u;) {
                    var i = n[e], o = t(i);
                    if (null != o && (f === X ? o === o && !ma(o) : r(o, f))) var f = o, a = i
                }
                return a
            }

            function te(n, t, r, e) {
                var u = n.length;
                for (r = Ia(r), r < 0 && (r = -r > u ? 0 : u + r), e = e === X || e > u ? u : Ia(e), e < 0 && (e += u), e = r > e ? 0 : Ra(e); r < e;) n[r++] = t;
                return n
            }

            function ee(n, t) {
                var r = [];
                return bs(n, function (n, e, u) {
                    t(n, e, u) && r.push(n)
                }), r
            }

            function ue(n, t, r, e, u) {
                var i = -1, o = n.length;
                for (r || (r = Bi), u || (u = []); ++i < o;) {
                    var f = n[i];
                    t > 0 && r(f) ? t > 1 ? ue(f, t - 1, r, e, u) : s(u, f) : e || (u[u.length] = f)
                }
                return u
            }

            function oe(n, t) {
                return n && ms(n, t, Za)
            }

            function fe(n, t) {
                return n && xs(n, t, Za)
            }

            function ve(n, t) {
                return f(t, function (t) {
                    return oa(n[t])
                })
            }

            function de(n, t) {
                t = Ou(t, n);
                for (var r = 0, e = t.length; null != n && r < e;) n = n[ro(t[r++])];
                return r && r == e ? n : X
            }

            function we(n, t, r) {
                var e = t(n);
                return mh(n) ? e : s(e, r(n))
            }

            function me(n) {
                return null == n ? n === X ? et : Hn : $l && $l in hl(n) ? Ri(n) : Hi(n)
            }

            function xe(n, t) {
                return n > t
            }

            function je(n, t) {
                return null != n && ml.call(n, t)
            }

            function Ae(n, t) {
                return null != n && t in hl(n)
            }

            function ke(n, t, r) {
                return n >= Yl(t, r) && n < Jl(t, r)
            }

            function Oe(n, t, r) {
                for (var e = r ? c : a, u = n[0].length, i = n.length, o = i, f = fl(i), s = 1 / 0, h = []; o--;) {
                    var p = n[o];
                    o && t && (p = l(p, E(t))), s = Yl(p.length, s), f[o] = !r && (t || u >= 120 && p.length >= 120) ? new dr(o && p) : X
                }
                p = n[0];
                var v = -1, _ = f[0];
                n:for (; ++v < u && h.length < s;) {
                    var g = p[v], y = t ? t(g) : g;
                    if (g = r || 0 !== g ? g : 0, !(_ ? W(_, y) : e(h, y, r))) {
                        for (o = i; --o;) {
                            var d = f[o];
                            if (!(d ? W(d, y) : e(n[o], y, r))) continue n
                        }
                        _ && _.push(y), h.push(g)
                    }
                }
                return h
            }

            function Ie(n, t, r, e) {
                return oe(n, function (n, u, i) {
                    t(e, r(n), u, i)
                }), e
            }

            function Re(n, t, e) {
                t = Ou(t, n), n = Yi(n, t);
                var u = null == n ? n : n[ro(ko(t))];
                return null == u ? X : r(u, n, e)
            }

            function ze(n) {
                return la(n) && me(n) == $n
            }

            function Ee(n) {
                return la(n) && me(n) == ot
            }

            function Se(n) {
                return la(n) && me(n) == Nn
            }

            function We(n, t, r, e, u) {
                return n === t || (null == n || null == t || !la(n) && !la(t) ? n !== n && t !== t : Le(n, t, r, e, We, u))
            }

            function Le(n, t, r, e, u, i) {
                var o = mh(n), f = mh(t), a = o ? Dn : Ss(n), c = f ? Dn : Ss(t);
                a = a == $n ? Jn : a, c = c == $n ? Jn : c;
                var l = a == Jn, s = c == Jn, h = a == c;
                if (h && jh(n)) {
                    if (!jh(t)) return !1;
                    o = !0, l = !1
                }
                if (h && !l) return i || (i = new mr), o || Rh(n) ? gi(n, t, r, e, u, i) : yi(n, t, a, r, e, u, i);
                if (!(r & sn)) {
                    var p = l && ml.call(n, "__wrapped__"), v = s && ml.call(t, "__wrapped__");
                    if (p || v) {
                        var _ = p ? n.value() : n, g = v ? t.value() : t;
                        return i || (i = new mr), u(_, g, r, e, i)
                    }
                }
                return !!h && (i || (i = new mr), di(n, t, r, e, u, i))
            }

            function Ce(n) {
                return la(n) && Ss(n) == Vn
            }

            function Ue(n, t, r, e) {
                var u = r.length, i = u, o = !e;
                if (null == n) return !i;
                for (n = hl(n); u--;) {
                    var f = r[u];
                    if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return !1
                }
                for (; ++u < i;) {
                    f = r[u];
                    var a = f[0], c = n[a], l = f[1];
                    if (o && f[2]) {
                        if (c === X && !(a in n)) return !1
                    } else {
                        var s = new mr;
                        if (e) var h = e(c, l, a, n, t, s);
                        if (!(h === X ? We(l, c, sn | hn, e, s) : h)) return !1
                    }
                }
                return !0
            }

            function Be(n) {
                if (!ca(n) || Ni(n)) return !1;
                var t = oa(n) ? Il : Zt;
                return t.test(eo(n))
            }

            function Te(n) {
                return la(n) && me(n) == Xn
            }

            function $e(n) {
                return la(n) && Ss(n) == nt
            }

            function De(n) {
                return la(n) && aa(n.length) && !!Kr[me(n)]
            }

            function Me(n) {
                return "function" == typeof n ? n : null == n ? Uc : "object" == typeof n ? mh(n) ? Ke(n[0], n[1]) : Ze(n) : Pc(n)
            }

            function Fe(n) {
                if (!Pi(n)) return Hl(n);
                var t = [];
                for (var r in hl(n)) ml.call(n, r) && "constructor" != r && t.push(r);
                return t
            }

            function Ne(n) {
                if (!ca(n)) return Gi(n);
                var t = Pi(n), r = [];
                for (var e in n) ("constructor" != e || !t && ml.call(n, e)) && r.push(e);
                return r
            }

            function Pe(n, t) {
                return n < t
            }

            function qe(n, t) {
                var r = -1, e = Yf(n) ? fl(n.length) : [];
                return bs(n, function (n, u, i) {
                    e[++r] = t(n, u, i)
                }), e
            }

            function Ze(n) {
                var t = Oi(n);
                return 1 == t.length && t[0][2] ? Zi(t[0][0], t[0][1]) : function (r) {
                    return r === n || Ue(r, n, t)
                }
            }

            function Ke(n, t) {
                return Di(n) && qi(t) ? Zi(ro(n), t) : function (r) {
                    var e = Na(r, n);
                    return e === X && e === t ? qa(r, n) : We(t, e, sn | hn)
                }
            }

            function Ve(n, t, r, e, u) {
                n !== t && ms(t, function (i, o) {
                    if (ca(i)) u || (u = new mr), Ge(n, t, o, r, Ve, e, u); else {
                        var f = e ? e(n[o], i, o + "", n, t, u) : X;
                        f === X && (f = i), Sr(n, o, f)
                    }
                }, Ka)
            }

            function Ge(n, t, r, e, u, i, o) {
                var f = n[r], a = t[r], c = o.get(a);
                if (c) return void Sr(n, r, c);
                var l = i ? i(f, a, r + "", n, t, o) : X, s = l === X;
                if (s) {
                    var h = mh(a), p = !h && jh(a), v = !h && !p && Rh(a);
                    l = a, h || p || v ? mh(f) ? l = f : Qf(f) ? l = Mu(f) : p ? (s = !1, l = Ru(a, !0)) : v ? (s = !1, l = Uu(a, !0)) : l = [] : da(a) || wh(a) ? (l = f, wh(f) ? l = Ea(f) : (!ca(f) || e && oa(f)) && (l = Li(a))) : s = !1
                }
                s && (o.set(a, l), u(l, a, e, i, o), o.delete(a)), Sr(n, r, l)
            }

            function He(n, t) {
                var r = n.length;
                if (r) return t += t < 0 ? r : 0, Ti(t, r) ? n[t] : X
            }

            function Je(n, t, r) {
                var e = -1;
                t = l(t.length ? t : [Uc], E(Ai()));
                var u = qe(n, function (n, r, u) {
                    var i = l(t, function (t) {
                        return t(n)
                    });
                    return {criteria: i, index: ++e, value: n}
                });
                return O(u, function (n, t) {
                    return Tu(n, t, r)
                })
            }

            function Ye(n, t) {
                return Qe(n, t, function (t, r) {
                    return qa(n, r)
                })
            }

            function Qe(n, t, r) {
                for (var e = -1, u = t.length, i = {}; ++e < u;) {
                    var o = t[e], f = de(n, o);
                    r(f, o) && au(i, Ou(o, n), f)
                }
                return i
            }

            function Xe(n) {
                return function (t) {
                    return de(t, n)
                }
            }

            function nu(n, t, r, e) {
                var u = e ? w : b, i = -1, o = t.length, f = n;
                for (n === t && (t = Mu(t)), r && (f = l(n, E(r))); ++i < o;) for (var a = 0, c = t[i], s = r ? r(c) : c; (a = u(f, s, a, e)) > -1;) f !== n && Ul.call(f, a, 1), Ul.call(n, a, 1);
                return n
            }

            function tu(n, t) {
                for (var r = n ? t.length : 0, e = r - 1; r--;) {
                    var u = t[r];
                    if (r == e || u !== i) {
                        var i = u;
                        Ti(u) ? Ul.call(n, u, 1) : du(n, u)
                    }
                }
                return n
            }

            function ru(n, t) {
                return n + ql(ns() * (t - n + 1))
            }

            function eu(n, t, r, e) {
                for (var u = -1, i = Jl(Pl((t - n) / (r || 1)), 0), o = fl(i); i--;) o[e ? i : ++u] = n, n += r;
                return o
            }

            function uu(n, t) {
                var r = "";
                if (!n || t < 1 || t > Sn) return r;
                do t % 2 && (r += n), t = ql(t / 2), t && (n += n); while (t);
                return r
            }

            function iu(n, t) {
                return Us(Ji(n, t, Uc), n + "")
            }

            function ou(n) {
                return Rr(uc(n))
            }

            function fu(n, t) {
                var r = uc(n);
                return to(r, Fr(t, 0, r.length))
            }

            function au(n, t, r, e) {
                if (!ca(n)) return n;
                t = Ou(t, n);
                for (var u = -1, i = t.length, o = i - 1, f = n; null != f && ++u < i;) {
                    var a = ro(t[u]), c = r;
                    if (u != o) {
                        var l = f[a];
                        c = e ? e(l, a, f) : X, c === X && (c = ca(l) ? l : Ti(t[u + 1]) ? [] : {})
                    }
                    Wr(f, a, c), f = f[a]
                }
                return n
            }

            function cu(n) {
                return to(uc(n))
            }

            function lu(n, t, r) {
                var e = -1, u = n.length;
                t < 0 && (t = -t > u ? 0 : u + t), r = r > u ? u : r, r < 0 && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0;
                for (var i = fl(u); ++e < u;) i[e] = n[e + t];
                return i
            }

            function su(n, t) {
                var r;
                return bs(n, function (n, e, u) {
                    return r = t(n, e, u), !r
                }), !!r
            }

            function hu(n, t, r) {
                var e = 0, u = null == n ? e : n.length;
                if ("number" == typeof t && t === t && u <= Bn) {
                    for (; e < u;) {
                        var i = e + u >>> 1, o = n[i];
                        null !== o && !ma(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i
                    }
                    return u
                }
                return pu(n, t, Uc, r)
            }

            function pu(n, t, r, e) {
                t = r(t);
                for (var u = 0, i = null == n ? 0 : n.length, o = t !== t, f = null === t, a = ma(t), c = t === X; u < i;) {
                    var l = ql((u + i) / 2), s = r(n[l]), h = s !== X, p = null === s, v = s === s, _ = ma(s);
                    if (o) var g = e || v; else g = c ? v && (e || h) : f ? v && h && (e || !p) : a ? v && h && !p && (e || !_) : !p && !_ && (e ? s <= t : s < t);
                    g ? u = l + 1 : i = l
                }
                return Yl(i, Un)
            }

            function vu(n, t) {
                for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
                    var o = n[r], f = t ? t(o) : o;
                    if (!r || !Jf(f, a)) {
                        var a = f;
                        i[u++] = 0 === o ? 0 : o
                    }
                }
                return i
            }

            function _u(n) {
                return "number" == typeof n ? n : ma(n) ? Ln : +n
            }

            function gu(n) {
                if ("string" == typeof n) return n;
                if (mh(n)) return l(n, gu) + "";
                if (ma(n)) return ys ? ys.call(n) : "";
                var t = n + "";
                return "0" == t && 1 / n == -En ? "-0" : t
            }

            function yu(n, t, r) {
                var e = -1, u = a, i = n.length, o = !0, f = [], l = f;
                if (r) o = !1, u = c; else if (i >= tn) {
                    var s = t ? null : Is(n);
                    if (s) return q(s);
                    o = !1, u = W, l = new dr
                } else l = t ? [] : f;
                n:for (; ++e < i;) {
                    var h = n[e], p = t ? t(h) : h;
                    if (h = r || 0 !== h ? h : 0, o && p === p) {
                        for (var v = l.length; v--;) if (l[v] === p) continue n;
                        t && l.push(p), f.push(h)
                    } else u(l, p, r) || (l !== f && l.push(p), f.push(h))
                }
                return f
            }

            function du(n, t) {
                return t = Ou(t, n), n = Yi(n, t), null == n || delete n[ro(ko(t))]
            }

            function bu(n, t, r, e) {
                return au(n, t, r(de(n, t)), e)
            }

            function wu(n, t, r, e) {
                for (var u = n.length, i = e ? u : -1; (e ? i-- : ++i < u) && t(n[i], i, n);) ;
                return r ? lu(n, e ? 0 : i, e ? i + 1 : u) : lu(n, e ? i + 1 : 0, e ? u : i)
            }

            function mu(n, t) {
                var r = n;
                return r instanceof Dt && (r = r.value()), h(t, function (n, t) {
                    return t.func.apply(t.thisArg, s([n], t.args))
                }, r)
            }

            function xu(n, t, r) {
                var e = n.length;
                if (e < 2) return e ? yu(n[0]) : [];
                for (var u = -1, i = fl(e); ++u < e;) for (var o = n[u], f = -1; ++f < e;) f != u && (i[u] = Jr(i[u] || o, n[f], t, r));
                return yu(ue(i, 1), t, r)
            }

            function ju(n, t, r) {
                for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;) {
                    var f = e < i ? t[e] : X;
                    r(o, n[e], f)
                }
                return o
            }

            function Au(n) {
                return Qf(n) ? n : []
            }

            function ku(n) {
                return "function" == typeof n ? n : Uc
            }

            function Ou(n, t) {
                return mh(n) ? n : Di(n, t) ? [n] : Bs(Wa(n))
            }

            function Iu(n, t, r) {
                var e = n.length;
                return r = r === X ? e : r, !t && r >= e ? n : lu(n, t, r)
            }

            function Ru(n, t) {
                if (t) return n.slice();
                var r = n.length, e = Sl ? Sl(r) : new n.constructor(r);
                return n.copy(e), e
            }

            function zu(n) {
                var t = new n.constructor(n.byteLength);
                return new El(t).set(new El(n)), t
            }

            function Eu(n, t) {
                var r = t ? zu(n.buffer) : n.buffer;
                return new n.constructor(r, n.byteOffset, n.byteLength)
            }

            function Su(t, r, e) {
                var u = r ? e(F(t), an) : F(t);
                return h(u, n, new t.constructor)
            }

            function Wu(n) {
                var t = new n.constructor(n.source, Nt.exec(n));
                return t.lastIndex = n.lastIndex, t
            }

            function Lu(n, r, e) {
                var u = r ? e(q(n), an) : q(n);
                return h(u, t, new n.constructor)
            }

            function Cu(n) {
                return gs ? hl(gs.call(n)) : {}
            }

            function Uu(n, t) {
                var r = t ? zu(n.buffer) : n.buffer;
                return new n.constructor(r, n.byteOffset, n.length)
            }

            function Bu(n, t) {
                if (n !== t) {
                    var r = n !== X, e = null === n, u = n === n, i = ma(n), o = t !== X, f = null === t, a = t === t,
                        c = ma(t);
                    if (!f && !c && !i && n > t || i && o && a && !f && !c || e && o && a || !r && a || !u) return 1;
                    if (!e && !i && !c && n < t || c && r && u && !e && !i || f && r && u || !o && u || !a) return -1
                }
                return 0
            }

            function Tu(n, t, r) {
                for (var e = -1, u = n.criteria, i = t.criteria, o = u.length, f = r.length; ++e < o;) {
                    var a = Bu(u[e], i[e]);
                    if (a) {
                        if (e >= f) return a;
                        var c = r[e];
                        return a * ("desc" == c ? -1 : 1)
                    }
                }
                return n.index - t.index
            }

            function $u(n, t, r, e) {
                for (var u = -1, i = n.length, o = r.length, f = -1, a = t.length, c = Jl(i - o, 0), l = fl(a + c), s = !e; ++f < a;) l[f] = t[f];
                for (; ++u < o;) (s || u < i) && (l[r[u]] = n[u]);
                for (; c--;) l[f++] = n[u++];
                return l
            }

            function Du(n, t, r, e) {
                for (var u = -1, i = n.length, o = -1, f = r.length, a = -1, c = t.length, l = Jl(i - f, 0), s = fl(l + c), h = !e; ++u < l;) s[u] = n[u];
                for (var p = u; ++a < c;) s[p + a] = t[a];
                for (; ++o < f;) (h || u < i) && (s[p + r[o]] = n[u++]);
                return s
            }

            function Mu(n, t) {
                var r = -1, e = n.length;
                for (t || (t = fl(e)); ++r < e;) t[r] = n[r];
                return t
            }

            function Fu(n, t, r, e) {
                var u = !r;
                r || (r = {});
                for (var i = -1, o = t.length; ++i < o;) {
                    var f = t[i], a = e ? e(r[f], n[f], f, r, n) : X;
                    a === X && (a = n[f]), u ? Tr(r, f, a) : Wr(r, f, a)
                }
                return r
            }

            function Nu(n, t) {
                return Fu(n, zs(n), t)
            }

            function Pu(n, t) {
                return Fu(n, Es(n), t)
            }

            function qu(n, t) {
                return function (r, u) {
                    var i = mh(r) ? e : Cr, o = t ? t() : {};
                    return i(r, n, Ai(u, 2), o)
                }
            }

            function Zu(n) {
                return iu(function (t, r) {
                    var e = -1, u = r.length, i = u > 1 ? r[u - 1] : X, o = u > 2 ? r[2] : X;
                    for (i = n.length > 3 && "function" == typeof i ? (u--, i) : X, o && $i(r[0], r[1], o) && (i = u < 3 ? X : i, u = 1), t = hl(t); ++e < u;) {
                        var f = r[e];
                        f && n(t, f, e, i)
                    }
                    return t
                })
            }

            function Ku(n, t) {
                return function (r, e) {
                    if (null == r) return r;
                    if (!Yf(r)) return n(r, e);
                    for (var u = r.length, i = t ? u : -1, o = hl(r); (t ? i-- : ++i < u) && e(o[i], i, o) !== !1;) ;
                    return r
                }
            }

            function Vu(n) {
                return function (t, r, e) {
                    for (var u = -1, i = hl(t), o = e(t), f = o.length; f--;) {
                        var a = o[n ? f : ++u];
                        if (r(i[a], a, i) === !1) break
                    }
                    return t
                }
            }

            function Gu(n, t, r) {
                function e() {
                    var t = this && this !== re && this instanceof e ? i : n;
                    return t.apply(u ? r : this, arguments)
                }

                var u = t & pn, i = Yu(n);
                return e
            }

            function Hu(n) {
                return function (t) {
                    t = Wa(t);
                    var r = $(t) ? H(t) : X, e = r ? r[0] : t.charAt(0), u = r ? Iu(r, 1).join("") : t.slice(1);
                    return e[n]() + u
                }
            }

            function Ju(n) {
                return function (t) {
                    return h(Ec(lc(t).replace($r, "")), n, "")
                }
            }

            function Yu(n) {
                return function () {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return new n;
                        case 1:
                            return new n(t[0]);
                        case 2:
                            return new n(t[0], t[1]);
                        case 3:
                            return new n(t[0], t[1], t[2]);
                        case 4:
                            return new n(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new n(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                    }
                    var r = ds(n.prototype), e = n.apply(r, t);
                    return ca(e) ? e : r
                }
            }

            function Qu(n, t, e) {
                function u() {
                    for (var o = arguments.length, f = fl(o), a = o, c = ji(u); a--;) f[a] = arguments[a];
                    var l = o < 3 && f[0] !== c && f[o - 1] !== c ? [] : P(f, c);
                    if (o -= l.length, o < e) return ci(n, t, ti, u.placeholder, X, f, l, X, X, e - o);
                    var s = this && this !== re && this instanceof u ? i : n;
                    return r(s, this, f)
                }

                var i = Yu(n);
                return u
            }

            function Xu(n) {
                return function (t, r, e) {
                    var u = hl(t);
                    if (!Yf(t)) {
                        var i = Ai(r, 3);
                        t = Za(t), r = function (n) {
                            return i(u[n], n, u)
                        }
                    }
                    var o = n(t, r, e);
                    return o > -1 ? u[i ? t[o] : o] : X
                }
            }

            function ni(n) {
                return bi(function (t) {
                    var r = t.length, e = r, u = Y.prototype.thru;
                    for (n && t.reverse(); e--;) {
                        var i = t[e];
                        if ("function" != typeof i) throw new _l(en);
                        if (u && !o && "wrapper" == xi(i)) var o = new Y([], !0)
                    }
                    for (e = o ? e : r; ++e < r;) {
                        i = t[e];
                        var f = xi(i), a = "wrapper" == f ? Rs(i) : X;
                        o = a && Fi(a[0]) && a[1] == (wn | gn | dn | mn) && !a[4].length && 1 == a[9] ? o[xi(a[0])].apply(o, a[3]) : 1 == i.length && Fi(i) ? o[f]() : o.thru(i)
                    }
                    return function () {
                        var n = arguments, e = n[0];
                        if (o && 1 == n.length && mh(e)) return o.plant(e).value();
                        for (var u = 0, i = r ? t[u].apply(this, n) : e; ++u < r;) i = t[u].call(this, i);
                        return i
                    }
                })
            }

            function ti(n, t, r, e, u, i, o, f, a, c) {
                function l() {
                    for (var y = arguments.length, d = fl(y), b = y; b--;) d[b] = arguments[b];
                    if (v) var w = ji(l), m = U(d, w);
                    if (e && (d = $u(d, e, u, v)), i && (d = Du(d, i, o, v)), y -= m, v && y < c) {
                        var x = P(d, w);
                        return ci(n, t, ti, l.placeholder, r, d, x, f, a, c - y)
                    }
                    var j = h ? r : this, A = p ? j[n] : n;
                    return y = d.length, f ? d = Qi(d, f) : _ && y > 1 && d.reverse(), s && a < y && (d.length = a), this && this !== re && this instanceof l && (A = g || Yu(A)), A.apply(j, d)
                }

                var s = t & wn, h = t & pn, p = t & vn, v = t & (gn | yn), _ = t & xn, g = p ? X : Yu(n);
                return l
            }

            function ri(n, t) {
                return function (r, e) {
                    return Ie(r, n, t(e), {})
                }
            }

            function ei(n, t) {
                return function (r, e) {
                    var u;
                    if (r === X && e === X) return t;
                    if (r !== X && (u = r), e !== X) {
                        if (u === X) return e;
                        "string" == typeof r || "string" == typeof e ? (r = gu(r), e = gu(e)) : (r = _u(r), e = _u(e)), u = n(r, e)
                    }
                    return u
                }
            }

            function ui(n) {
                return bi(function (t) {
                    return t = l(t, E(Ai())), iu(function (e) {
                        var u = this;
                        return n(t, function (n) {
                            return r(n, u, e)
                        })
                    })
                })
            }

            function ii(n, t) {
                t = t === X ? " " : gu(t);
                var r = t.length;
                if (r < 2) return r ? uu(t, n) : t;
                var e = uu(t, Pl(n / G(t)));
                return $(t) ? Iu(H(e), 0, n).join("") : e.slice(0, n)
            }

            function oi(n, t, e, u) {
                function i() {
                    for (var t = -1, a = arguments.length, c = -1, l = u.length, s = fl(l + a), h = this && this !== re && this instanceof i ? f : n; ++c < l;) s[c] = u[c];
                    for (; a--;) s[c++] = arguments[++t];
                    return r(h, o ? e : this, s)
                }

                var o = t & pn, f = Yu(n);
                return i
            }

            function fi(n) {
                return function (t, r, e) {
                    return e && "number" != typeof e && $i(t, r, e) && (r = e = X), t = Oa(t), r === X ? (r = t, t = 0) : r = Oa(r), e = e === X ? t < r ? 1 : -1 : Oa(e), eu(t, r, e, n)
                }
            }

            function ai(n) {
                return function (t, r) {
                    return "string" == typeof t && "string" == typeof r || (t = za(t), r = za(r)), n(t, r)
                }
            }

            function ci(n, t, r, e, u, i, o, f, a, c) {
                var l = t & gn, s = l ? o : X, h = l ? X : o, p = l ? i : X, v = l ? X : i;
                t |= l ? dn : bn, t &= ~(l ? bn : dn), t & _n || (t &= ~(pn | vn));
                var _ = [n, t, u, p, s, v, h, f, a, c], g = r.apply(X, _);
                return Fi(n) && Ls(g, _), g.placeholder = e, Xi(g, n, t)
            }

            function li(n) {
                var t = sl[n];
                return function (n, r) {
                    if (n = za(n), r = null == r ? 0 : Yl(Ia(r), 292)) {
                        var e = (Wa(n) + "e").split("e"), u = t(e[0] + "e" + (+e[1] + r));
                        return e = (Wa(u) + "e").split("e"), +(e[0] + "e" + (+e[1] - r))
                    }
                    return t(n)
                }
            }

            function si(n) {
                return function (t) {
                    var r = Ss(t);
                    return r == Vn ? F(t) : r == nt ? Z(t) : z(t, n(t))
                }
            }

            function hi(n, t, r, e, u, i, o, f) {
                var a = t & vn;
                if (!a && "function" != typeof n) throw new _l(en);
                var c = e ? e.length : 0;
                if (c || (t &= ~(dn | bn), e = u = X), o = o === X ? o : Jl(Ia(o), 0), f = f === X ? f : Ia(f), c -= u ? u.length : 0, t & bn) {
                    var l = e, s = u;
                    e = u = X
                }
                var h = a ? X : Rs(n), p = [n, t, r, e, u, l, s, i, o, f];
                if (h && Vi(p, h), n = p[0], t = p[1], r = p[2], e = p[3], u = p[4], f = p[9] = p[9] === X ? a ? 0 : n.length : Jl(p[9] - c, 0), !f && t & (gn | yn) && (t &= ~(gn | yn)), t && t != pn) v = t == gn || t == yn ? Qu(n, t, f) : t != dn && t != (pn | dn) || u.length ? ti.apply(X, p) : oi(n, t, r, e); else var v = Gu(n, t, r);
                var _ = h ? js : Ls;
                return Xi(_(v, p), n, t)
            }

            function pi(n, t, r, e) {
                return n === X || Jf(n, dl[r]) && !ml.call(e, r) ? t : n
            }

            function vi(n, t, r, e, u, i) {
                return ca(n) && ca(t) && (i.set(t, n), Ve(n, t, X, vi, i), i.delete(t)), n
            }

            function _i(n) {
                return da(n) ? X : n
            }

            function gi(n, t, r, e, u, i) {
                var o = r & sn, f = n.length, a = t.length;
                if (f != a && !(o && a > f)) return !1;
                var c = i.get(n);
                if (c && i.get(t)) return c == t;
                var l = -1, s = !0, h = r & hn ? new dr : X;
                for (i.set(n, t), i.set(t, n); ++l < f;) {
                    var p = n[l], _ = t[l];
                    if (e) var g = o ? e(_, p, l, t, n, i) : e(p, _, l, n, t, i);
                    if (g !== X) {
                        if (g) continue;
                        s = !1;
                        break
                    }
                    if (h) {
                        if (!v(t, function (n, t) {
                            if (!W(h, t) && (p === n || u(p, n, r, e, i))) return h.push(t)
                        })) {
                            s = !1;
                            break
                        }
                    } else if (p !== _ && !u(p, _, r, e, i)) {
                        s = !1;
                        break
                    }
                }
                return i.delete(n), i.delete(t), s
            }

            function yi(n, t, r, e, u, i, o) {
                switch (r) {
                    case ft:
                        if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) return !1;
                        n = n.buffer, t = t.buffer;
                    case ot:
                        return !(n.byteLength != t.byteLength || !i(new El(n), new El(t)));
                    case Fn:
                    case Nn:
                    case Gn:
                        return Jf(+n, +t);
                    case qn:
                        return n.name == t.name && n.message == t.message;
                    case Xn:
                    case tt:
                        return n == t + "";
                    case Vn:
                        var f = F;
                    case nt:
                        var a = e & sn;
                        if (f || (f = q), n.size != t.size && !a) return !1;
                        var c = o.get(n);
                        if (c) return c == t;
                        e |= hn, o.set(n, t);
                        var l = gi(f(n), f(t), e, u, i, o);
                        return o.delete(n), l;
                    case rt:
                        if (gs) return gs.call(n) == gs.call(t)
                }
                return !1
            }

            function di(n, t, r, e, u, i) {
                var o = r & sn, f = wi(n), a = f.length, c = wi(t), l = c.length;
                if (a != l && !o) return !1;
                for (var s = a; s--;) {
                    var h = f[s];
                    if (!(o ? h in t : ml.call(t, h))) return !1
                }
                var p = i.get(n);
                if (p && i.get(t)) return p == t;
                var v = !0;
                i.set(n, t), i.set(t, n);
                for (var _ = o; ++s < a;) {
                    h = f[s];
                    var g = n[h], y = t[h];
                    if (e) var d = o ? e(y, g, h, t, n, i) : e(g, y, h, n, t, i);
                    if (!(d === X ? g === y || u(g, y, r, e, i) : d)) {
                        v = !1;
                        break
                    }
                    _ || (_ = "constructor" == h)
                }
                if (v && !_) {
                    var b = n.constructor, w = t.constructor;
                    b != w && "constructor" in n && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) && (v = !1);
                }
                return i.delete(n), i.delete(t), v
            }

            function bi(n) {
                return Us(Ji(n, X, go), n + "")
            }

            function wi(n) {
                return we(n, Za, zs)
            }

            function mi(n) {
                return we(n, Ka, Es)
            }

            function xi(n) {
                for (var t = n.name + "", r = cs[t], e = ml.call(cs, t) ? r.length : 0; e--;) {
                    var u = r[e], i = u.func;
                    if (null == i || i == n) return u.name
                }
                return t
            }

            function ji(n) {
                var t = ml.call(K, "placeholder") ? K : n;
                return t.placeholder
            }

            function Ai() {
                var n = K.iteratee || Bc;
                return n = n === Bc ? Me : n, arguments.length ? n(arguments[0], arguments[1]) : n
            }

            function ki(n, t) {
                var r = n.__data__;
                return Mi(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }

            function Oi(n) {
                for (var t = Za(n), r = t.length; r--;) {
                    var e = t[r], u = n[e];
                    t[r] = [e, u, qi(u)]
                }
                return t
            }

            function Ii(n, t) {
                var r = T(n, t);
                return Be(r) ? r : X
            }

            function Ri(n) {
                var t = ml.call(n, $l), r = n[$l];
                try {
                    n[$l] = X;
                    var e = !0
                } catch (n) {
                }
                var u = Al.call(n);
                return e && (t ? n[$l] = r : delete n[$l]), u
            }

            function zi(n, t, r) {
                for (var e = -1, u = r.length; ++e < u;) {
                    var i = r[e], o = i.size;
                    switch (i.type) {
                        case"drop":
                            n += o;
                            break;
                        case"dropRight":
                            t -= o;
                            break;
                        case"take":
                            t = Yl(t, n + o);
                            break;
                        case"takeRight":
                            n = Jl(n, t - o)
                    }
                }
                return {start: n, end: t}
            }

            function Ei(n) {
                var t = n.match(Tt);
                return t ? t[1].split($t) : []
            }

            function Si(n, t, r) {
                t = Ou(t, n);
                for (var e = -1, u = t.length, i = !1; ++e < u;) {
                    var o = ro(t[e]);
                    if (!(i = null != n && r(n, o))) break;
                    n = n[o]
                }
                return i || ++e != u ? i : (u = null == n ? 0 : n.length, !!u && aa(u) && Ti(o, u) && (mh(n) || wh(n)))
            }

            function Wi(n) {
                var t = n.length, r = n.constructor(t);
                return t && "string" == typeof n[0] && ml.call(n, "index") && (r.index = n.index, r.input = n.input), r
            }

            function Li(n) {
                return "function" != typeof n.constructor || Pi(n) ? {} : ds(Wl(n))
            }

            function Ci(n, t, r, e) {
                var u = n.constructor;
                switch (t) {
                    case ot:
                        return zu(n);
                    case Fn:
                    case Nn:
                        return new u(+n);
                    case ft:
                        return Eu(n, e);
                    case at:
                    case ct:
                    case lt:
                    case st:
                    case ht:
                    case pt:
                    case vt:
                    case _t:
                    case gt:
                        return Uu(n, e);
                    case Vn:
                        return Su(n, e, r);
                    case Gn:
                    case tt:
                        return new u(n);
                    case Xn:
                        return Wu(n);
                    case nt:
                        return Lu(n, e, r);
                    case rt:
                        return Cu(n)
                }
            }

            function Ui(n, t) {
                var r = t.length;
                if (!r) return n;
                var e = r - 1;
                return t[e] = (r > 1 ? "& " : "") + t[e], t = t.join(r > 2 ? ", " : " "), n.replace(Bt, "{\n/* [wrapped with " + t + "] */\n")
            }

            function Bi(n) {
                return mh(n) || wh(n) || !!(Bl && n && n[Bl])
            }

            function Ti(n, t) {
                return t = null == t ? Sn : t, !!t && ("number" == typeof n || Vt.test(n)) && n > -1 && n % 1 == 0 && n < t
            }

            function $i(n, t, r) {
                if (!ca(r)) return !1;
                var e = typeof t;
                return !!("number" == e ? Yf(r) && Ti(t, r.length) : "string" == e && t in r) && Jf(r[t], n)
            }

            function Di(n, t) {
                if (mh(n)) return !1;
                var r = typeof n;
                return !("number" != r && "symbol" != r && "boolean" != r && null != n && !ma(n)) || (Rt.test(n) || !It.test(n) || null != t && n in hl(t))
            }

            function Mi(n) {
                var t = typeof n;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== n : null === n
            }

            function Fi(n) {
                var t = xi(n), r = K[t];
                if ("function" != typeof r || !(t in Dt.prototype)) return !1;
                if (n === r) return !0;
                var e = Rs(r);
                return !!e && n === e[0]
            }

            function Ni(n) {
                return !!jl && jl in n
            }

            function Pi(n) {
                var t = n && n.constructor, r = "function" == typeof t && t.prototype || dl;
                return n === r
            }

            function qi(n) {
                return n === n && !ca(n)
            }

            function Zi(n, t) {
                return function (r) {
                    return null != r && (r[n] === t && (t !== X || n in hl(r)))
                }
            }

            function Ki(n) {
                var t = Bf(n, function (n) {
                    return r.size === on && r.clear(), n
                }), r = t.cache;
                return t
            }

            function Vi(n, t) {
                var r = n[1], e = t[1], u = r | e, i = u < (pn | vn | wn),
                    o = e == wn && r == gn || e == wn && r == mn && n[7].length <= t[8] || e == (wn | mn) && t[7].length <= t[8] && r == gn;
                if (!i && !o) return n;
                e & pn && (n[2] = t[2], u |= r & pn ? 0 : _n);
                var f = t[3];
                if (f) {
                    var a = n[3];
                    n[3] = a ? $u(a, f, t[4]) : f, n[4] = a ? P(n[3], fn) : t[4]
                }
                return f = t[5], f && (a = n[5], n[5] = a ? Du(a, f, t[6]) : f, n[6] = a ? P(n[5], fn) : t[6]), f = t[7], f && (n[7] = f), e & wn && (n[8] = null == n[8] ? t[8] : Yl(n[8], t[8])), null == n[9] && (n[9] = t[9]), n[0] = t[0], n[1] = u, n
            }

            function Gi(n) {
                var t = [];
                if (null != n) for (var r in hl(n)) t.push(r);
                return t
            }

            function Hi(n) {
                return Al.call(n)
            }

            function Ji(n, t, e) {
                return t = Jl(t === X ? n.length - 1 : t, 0), function () {
                    for (var u = arguments, i = -1, o = Jl(u.length - t, 0), f = fl(o); ++i < o;) f[i] = u[t + i];
                    i = -1;
                    for (var a = fl(t + 1); ++i < t;) a[i] = u[i];
                    return a[t] = e(f), r(n, this, a)
                }
            }

            function Yi(n, t) {
                return t.length < 2 ? n : de(n, lu(t, 0, -1))
            }

            function Qi(n, t) {
                for (var r = n.length, e = Yl(t.length, r), u = Mu(n); e--;) {
                    var i = t[e];
                    n[e] = Ti(i, r) ? u[i] : X
                }
                return n
            }

            function Xi(n, t, r) {
                var e = t + "";
                return Us(n, Ui(e, uo(Ei(e), r)))
            }

            function no(n) {
                var t = 0, r = 0;
                return function () {
                    var e = Ql(), u = On - (e - r);
                    if (r = e, u > 0) {
                        if (++t >= kn) return arguments[0]
                    } else t = 0;
                    return n.apply(X, arguments)
                }
            }

            function to(n, t) {
                var r = -1, e = n.length, u = e - 1;
                for (t = t === X ? e : t; ++r < t;) {
                    var i = ru(r, u), o = n[i];
                    n[i] = n[r], n[r] = o
                }
                return n.length = t, n
            }

            function ro(n) {
                if ("string" == typeof n || ma(n)) return n;
                var t = n + "";
                return "0" == t && 1 / n == -En ? "-0" : t
            }

            function eo(n) {
                if (null != n) {
                    try {
                        return wl.call(n)
                    } catch (n) {
                    }
                    try {
                        return n + ""
                    } catch (n) {
                    }
                }
                return ""
            }

            function uo(n, t) {
                return u(Tn, function (r) {
                    var e = "_." + r[0];
                    t & r[1] && !a(n, e) && n.push(e)
                }), n.sort()
            }

            function io(n) {
                if (n instanceof Dt) return n.clone();
                var t = new Y(n.__wrapped__, n.__chain__);
                return t.__actions__ = Mu(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t
            }

            function oo(n, t, r) {
                t = (r ? $i(n, t, r) : t === X) ? 1 : Jl(Ia(t), 0);
                var e = null == n ? 0 : n.length;
                if (!e || t < 1) return [];
                for (var u = 0, i = 0, o = fl(Pl(e / t)); u < e;) o[i++] = lu(n, u, u += t);
                return o
            }

            function fo(n) {
                for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) {
                    var i = n[t];
                    i && (u[e++] = i)
                }
                return u
            }

            function ao() {
                var n = arguments.length;
                if (!n) return [];
                for (var t = fl(n - 1), r = arguments[0], e = n; e--;) t[e - 1] = arguments[e];
                return s(mh(r) ? Mu(r) : [r], ue(t, 1))
            }

            function co(n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === X ? 1 : Ia(t), lu(n, t < 0 ? 0 : t, e)) : []
            }

            function lo(n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === X ? 1 : Ia(t), t = e - t, lu(n, 0, t < 0 ? 0 : t)) : []
            }

            function so(n, t) {
                return n && n.length ? wu(n, Ai(t, 3), !0, !0) : []
            }

            function ho(n, t) {
                return n && n.length ? wu(n, Ai(t, 3), !0) : []
            }

            function po(n, t, r, e) {
                var u = null == n ? 0 : n.length;
                return u ? (r && "number" != typeof r && $i(n, t, r) && (r = 0, e = u), te(n, t, r, e)) : []
            }

            function vo(n, t, r) {
                var e = null == n ? 0 : n.length;
                if (!e) return -1;
                var u = null == r ? 0 : Ia(r);
                return u < 0 && (u = Jl(e + u, 0)), d(n, Ai(t, 3), u)
            }

            function _o(n, t, r) {
                var e = null == n ? 0 : n.length;
                if (!e) return -1;
                var u = e - 1;
                return r !== X && (u = Ia(r), u = r < 0 ? Jl(e + u, 0) : Yl(u, e - 1)), d(n, Ai(t, 3), u, !0)
            }

            function go(n) {
                var t = null == n ? 0 : n.length;
                return t ? ue(n, 1) : []
            }

            function yo(n) {
                var t = null == n ? 0 : n.length;
                return t ? ue(n, En) : []
            }

            function bo(n, t) {
                var r = null == n ? 0 : n.length;
                return r ? (t = t === X ? 1 : Ia(t), ue(n, t)) : []
            }

            function wo(n) {
                for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) {
                    var u = n[t];
                    e[u[0]] = u[1]
                }
                return e
            }

            function mo(n) {
                return n && n.length ? n[0] : X
            }

            function xo(n, t, r) {
                var e = null == n ? 0 : n.length;
                if (!e) return -1;
                var u = null == r ? 0 : Ia(r);
                return u < 0 && (u = Jl(e + u, 0)), b(n, t, u)
            }

            function jo(n) {
                var t = null == n ? 0 : n.length;
                return t ? lu(n, 0, -1) : []
            }

            function Ao(n, t) {
                return null == n ? "" : Gl.call(n, t)
            }

            function ko(n) {
                var t = null == n ? 0 : n.length;
                return t ? n[t - 1] : X
            }

            function Oo(n, t, r) {
                var e = null == n ? 0 : n.length;
                if (!e) return -1;
                var u = e;
                return r !== X && (u = Ia(r), u = u < 0 ? Jl(e + u, 0) : Yl(u, e - 1)), t === t ? V(n, t, u) : d(n, m, u, !0)
            }

            function Io(n, t) {
                return n && n.length ? He(n, Ia(t)) : X
            }

            function Ro(n, t) {
                return n && n.length && t && t.length ? nu(n, t) : n
            }

            function zo(n, t, r) {
                return n && n.length && t && t.length ? nu(n, t, Ai(r, 2)) : n
            }

            function Eo(n, t, r) {
                return n && n.length && t && t.length ? nu(n, t, X, r) : n
            }

            function So(n, t) {
                var r = [];
                if (!n || !n.length) return r;
                var e = -1, u = [], i = n.length;
                for (t = Ai(t, 3); ++e < i;) {
                    var o = n[e];
                    t(o, e, n) && (r.push(o), u.push(e))
                }
                return tu(n, u), r
            }

            function Wo(n) {
                return null == n ? n : ts.call(n)
            }

            function Lo(n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (r && "number" != typeof r && $i(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : Ia(t), r = r === X ? e : Ia(r)), lu(n, t, r)) : []
            }

            function Co(n, t) {
                return hu(n, t)
            }

            function Uo(n, t, r) {
                return pu(n, t, Ai(r, 2))
            }

            function Bo(n, t) {
                var r = null == n ? 0 : n.length;
                if (r) {
                    var e = hu(n, t);
                    if (e < r && Jf(n[e], t)) return e
                }
                return -1
            }

            function To(n, t) {
                return hu(n, t, !0)
            }

            function $o(n, t, r) {
                return pu(n, t, Ai(r, 2), !0)
            }

            function Do(n, t) {
                var r = null == n ? 0 : n.length;
                if (r) {
                    var e = hu(n, t, !0) - 1;
                    if (Jf(n[e], t)) return e
                }
                return -1
            }

            function Mo(n) {
                return n && n.length ? vu(n) : []
            }

            function Fo(n, t) {
                return n && n.length ? vu(n, Ai(t, 2)) : []
            }

            function No(n) {
                var t = null == n ? 0 : n.length;
                return t ? lu(n, 1, t) : []
            }

            function Po(n, t, r) {
                return n && n.length ? (t = r || t === X ? 1 : Ia(t), lu(n, 0, t < 0 ? 0 : t)) : []
            }

            function qo(n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === X ? 1 : Ia(t), t = e - t, lu(n, t < 0 ? 0 : t, e)) : []
            }

            function Zo(n, t) {
                return n && n.length ? wu(n, Ai(t, 3), !1, !0) : []
            }

            function Ko(n, t) {
                return n && n.length ? wu(n, Ai(t, 3)) : []
            }

            function Vo(n) {
                return n && n.length ? yu(n) : []
            }

            function Go(n, t) {
                return n && n.length ? yu(n, Ai(t, 2)) : []
            }

            function Ho(n, t) {
                return t = "function" == typeof t ? t : X, n && n.length ? yu(n, X, t) : []
            }

            function Jo(n) {
                if (!n || !n.length) return [];
                var t = 0;
                return n = f(n, function (n) {
                    if (Qf(n)) return t = Jl(n.length, t), !0
                }), R(t, function (t) {
                    return l(n, j(t))
                })
            }

            function Yo(n, t) {
                if (!n || !n.length) return [];
                var e = Jo(n);
                return null == t ? e : l(e, function (n) {
                    return r(t, X, n)
                })
            }

            function Qo(n, t) {
                return ju(n || [], t || [], Wr)
            }

            function Xo(n, t) {
                return ju(n || [], t || [], au)
            }

            function nf(n) {
                var t = K(n);
                return t.__chain__ = !0, t
            }

            function tf(n, t) {
                return t(n), n
            }

            function rf(n, t) {
                return t(n)
            }

            function ef() {
                return nf(this)
            }

            function uf() {
                return new Y(this.value(), this.__chain__)
            }

            function of() {
                this.__values__ === X && (this.__values__ = ka(this.value()));
                var n = this.__index__ >= this.__values__.length, t = n ? X : this.__values__[this.__index__++];
                return {done: n, value: t}
            }

            function ff() {
                return this
            }

            function af(n) {
                for (var t, r = this; r instanceof J;) {
                    var e = io(r);
                    e.__index__ = 0, e.__values__ = X, t ? u.__wrapped__ = e : t = e;
                    var u = e;
                    r = r.__wrapped__
                }
                return u.__wrapped__ = n, t
            }

            function cf() {
                var n = this.__wrapped__;
                if (n instanceof Dt) {
                    var t = n;
                    return this.__actions__.length && (t = new Dt(this)), t = t.reverse(), t.__actions__.push({
                        func: rf,
                        args: [Wo],
                        thisArg: X
                    }), new Y(t, this.__chain__)
                }
                return this.thru(Wo)
            }

            function lf() {
                return mu(this.__wrapped__, this.__actions__)
            }

            function sf(n, t, r) {
                var e = mh(n) ? o : Yr;
                return r && $i(n, t, r) && (t = X), e(n, Ai(t, 3))
            }

            function hf(n, t) {
                var r = mh(n) ? f : ee;
                return r(n, Ai(t, 3))
            }

            function pf(n, t) {
                return ue(bf(n, t), 1)
            }

            function vf(n, t) {
                return ue(bf(n, t), En)
            }

            function _f(n, t, r) {
                return r = r === X ? 1 : Ia(r), ue(bf(n, t), r)
            }

            function gf(n, t) {
                var r = mh(n) ? u : bs;
                return r(n, Ai(t, 3))
            }

            function yf(n, t) {
                var r = mh(n) ? i : ws;
                return r(n, Ai(t, 3))
            }

            function df(n, t, r, e) {
                n = Yf(n) ? n : uc(n), r = r && !e ? Ia(r) : 0;
                var u = n.length;
                return r < 0 && (r = Jl(u + r, 0)), wa(n) ? r <= u && n.indexOf(t, r) > -1 : !!u && b(n, t, r) > -1
            }

            function bf(n, t) {
                var r = mh(n) ? l : qe;
                return r(n, Ai(t, 3))
            }

            function wf(n, t, r, e) {
                return null == n ? [] : (mh(t) || (t = null == t ? [] : [t]), r = e ? X : r, mh(r) || (r = null == r ? [] : [r]), Je(n, t, r))
            }

            function mf(n, t, r) {
                var e = mh(n) ? h : k, u = arguments.length < 3;
                return e(n, Ai(t, 4), r, u, bs)
            }

            function xf(n, t, r) {
                var e = mh(n) ? p : k, u = arguments.length < 3;
                return e(n, Ai(t, 4), r, u, ws)
            }

            function jf(n, t) {
                var r = mh(n) ? f : ee;
                return r(n, Tf(Ai(t, 3)))
            }

            function Af(n) {
                var t = mh(n) ? Rr : ou;
                return t(n)
            }

            function kf(n, t, r) {
                t = (r ? $i(n, t, r) : t === X) ? 1 : Ia(t);
                var e = mh(n) ? zr : fu;
                return e(n, t)
            }

            function Of(n) {
                var t = mh(n) ? Er : cu;
                return t(n)
            }

            function If(n) {
                if (null == n) return 0;
                if (Yf(n)) return wa(n) ? G(n) : n.length;
                var t = Ss(n);
                return t == Vn || t == nt ? n.size : Fe(n).length
            }

            function Rf(n, t, r) {
                var e = mh(n) ? v : su;
                return r && $i(n, t, r) && (t = X), e(n, Ai(t, 3))
            }

            function zf(n, t) {
                if ("function" != typeof t) throw new _l(en);
                return n = Ia(n), function () {
                    if (--n < 1) return t.apply(this, arguments)
                }
            }

            function Ef(n, t, r) {
                return t = r ? X : t, t = n && null == t ? n.length : t, hi(n, wn, X, X, X, X, t)
            }

            function Sf(n, t) {
                var r;
                if ("function" != typeof t) throw new _l(en);
                return n = Ia(n), function () {
                    return --n > 0 && (r = t.apply(this, arguments)), n <= 1 && (t = X), r
                }
            }

            function Wf(n, t, r) {
                t = r ? X : t;
                var e = hi(n, gn, X, X, X, X, X, t);
                return e.placeholder = Wf.placeholder, e
            }

            function Lf(n, t, r) {
                t = r ? X : t;
                var e = hi(n, yn, X, X, X, X, X, t);
                return e.placeholder = Lf.placeholder, e
            }

            function Cf(n, t, r) {
                function e(t) {
                    var r = h, e = p;
                    return h = p = X, d = t, _ = n.apply(e, r)
                }

                function u(n) {
                    return d = n, g = Cs(f, t), b ? e(n) : _
                }

                function i(n) {
                    var r = n - y, e = n - d, u = t - r;
                    return w ? Yl(u, v - e) : u
                }

                function o(n) {
                    var r = n - y, e = n - d;
                    return y === X || r >= t || r < 0 || w && e >= v
                }

                function f() {
                    var n = ch();
                    return o(n) ? a(n) : void (g = Cs(f, i(n)))
                }

                function a(n) {
                    return g = X, m && h ? e(n) : (h = p = X, _)
                }

                function c() {
                    g !== X && Os(g), d = 0, h = y = p = g = X
                }

                function l() {
                    return g === X ? _ : a(ch())
                }

                function s() {
                    var n = ch(), r = o(n);
                    if (h = arguments, p = this, y = n, r) {
                        if (g === X) return u(y);
                        if (w) return g = Cs(f, t), e(y)
                    }
                    return g === X && (g = Cs(f, t)), _
                }

                var h, p, v, _, g, y, d = 0, b = !1, w = !1, m = !0;
                if ("function" != typeof n) throw new _l(en);
                return t = za(t) || 0, ca(r) && (b = !!r.leading, w = "maxWait" in r, v = w ? Jl(za(r.maxWait) || 0, t) : v, m = "trailing" in r ? !!r.trailing : m), s.cancel = c, s.flush = l, s
            }

            function Uf(n) {
                return hi(n, xn)
            }

            function Bf(n, t) {
                if ("function" != typeof n || null != t && "function" != typeof t) throw new _l(en);
                var r = function () {
                    var e = arguments, u = t ? t.apply(this, e) : e[0], i = r.cache;
                    if (i.has(u)) return i.get(u);
                    var o = n.apply(this, e);
                    return r.cache = i.set(u, o) || i, o
                };
                return r.cache = new (Bf.Cache || hr), r
            }

            function Tf(n) {
                if ("function" != typeof n) throw new _l(en);
                return function () {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return !n.call(this);
                        case 1:
                            return !n.call(this, t[0]);
                        case 2:
                            return !n.call(this, t[0], t[1]);
                        case 3:
                            return !n.call(this, t[0], t[1], t[2])
                    }
                    return !n.apply(this, t)
                }
            }

            function $f(n) {
                return Sf(2, n)
            }

            function Df(n, t) {
                if ("function" != typeof n) throw new _l(en);
                return t = t === X ? t : Ia(t), iu(n, t)
            }

            function Mf(n, t) {
                if ("function" != typeof n) throw new _l(en);
                return t = null == t ? 0 : Jl(Ia(t), 0), iu(function (e) {
                    var u = e[t], i = Iu(e, 0, t);
                    return u && s(i, u), r(n, this, i)
                })
            }

            function Ff(n, t, r) {
                var e = !0, u = !0;
                if ("function" != typeof n) throw new _l(en);
                return ca(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), Cf(n, t, {
                    leading: e,
                    maxWait: t,
                    trailing: u
                })
            }

            function Nf(n) {
                return Ef(n, 1)
            }

            function Pf(n, t) {
                return _h(ku(t), n)
            }

            function qf() {
                if (!arguments.length) return [];
                var n = arguments[0];
                return mh(n) ? n : [n]
            }

            function Zf(n) {
                return Nr(n, ln)
            }

            function Kf(n, t) {
                return t = "function" == typeof t ? t : X, Nr(n, ln, t)
            }

            function Vf(n) {
                return Nr(n, an | ln)
            }

            function Gf(n, t) {
                return t = "function" == typeof t ? t : X, Nr(n, an | ln, t)
            }

            function Hf(n, t) {
                return null == t || Gr(n, t, Za(t))
            }

            function Jf(n, t) {
                return n === t || n !== n && t !== t
            }

            function Yf(n) {
                return null != n && aa(n.length) && !oa(n)
            }

            function Qf(n) {
                return la(n) && Yf(n)
            }

            function Xf(n) {
                return n === !0 || n === !1 || la(n) && me(n) == Fn
            }

            function na(n) {
                return la(n) && 1 === n.nodeType && !da(n)
            }

            function ta(n) {
                if (null == n) return !0;
                if (Yf(n) && (mh(n) || "string" == typeof n || "function" == typeof n.splice || jh(n) || Rh(n) || wh(n))) return !n.length;
                var t = Ss(n);
                if (t == Vn || t == nt) return !n.size;
                if (Pi(n)) return !Fe(n).length;
                for (var r in n) if (ml.call(n, r)) return !1;
                return !0
            }

            function ra(n, t) {
                return We(n, t)
            }

            function ea(n, t, r) {
                r = "function" == typeof r ? r : X;
                var e = r ? r(n, t) : X;
                return e === X ? We(n, t, X, r) : !!e
            }

            function ua(n) {
                if (!la(n)) return !1;
                var t = me(n);
                return t == qn || t == Pn || "string" == typeof n.message && "string" == typeof n.name && !da(n)
            }

            function ia(n) {
                return "number" == typeof n && Vl(n)
            }

            function oa(n) {
                if (!ca(n)) return !1;
                var t = me(n);
                return t == Zn || t == Kn || t == Mn || t == Qn
            }

            function fa(n) {
                return "number" == typeof n && n == Ia(n)
            }

            function aa(n) {
                return "number" == typeof n && n > -1 && n % 1 == 0 && n <= Sn
            }

            function ca(n) {
                var t = typeof n;
                return null != n && ("object" == t || "function" == t)
            }

            function la(n) {
                return null != n && "object" == typeof n
            }

            function sa(n, t) {
                return n === t || Ue(n, t, Oi(t))
            }

            function ha(n, t, r) {
                return r = "function" == typeof r ? r : X, Ue(n, t, Oi(t), r)
            }

            function pa(n) {
                return ya(n) && n != +n
            }

            function va(n) {
                if (Ws(n)) throw new cl(rn);
                return Be(n)
            }

            function _a(n) {
                return null === n
            }

            function ga(n) {
                return null == n
            }

            function ya(n) {
                return "number" == typeof n || la(n) && me(n) == Gn
            }

            function da(n) {
                if (!la(n) || me(n) != Jn) return !1;
                var t = Wl(n);
                if (null === t) return !0;
                var r = ml.call(t, "constructor") && t.constructor;
                return "function" == typeof r && r instanceof r && wl.call(r) == kl
            }

            function ba(n) {
                return fa(n) && n >= -Sn && n <= Sn
            }

            function wa(n) {
                return "string" == typeof n || !mh(n) && la(n) && me(n) == tt
            }

            function ma(n) {
                return "symbol" == typeof n || la(n) && me(n) == rt
            }

            function xa(n) {
                return n === X
            }

            function ja(n) {
                return la(n) && Ss(n) == ut
            }

            function Aa(n) {
                return la(n) && me(n) == it
            }

            function ka(n) {
                if (!n) return [];
                if (Yf(n)) return wa(n) ? H(n) : Mu(n);
                if (Tl && n[Tl]) return M(n[Tl]());
                var t = Ss(n), r = t == Vn ? F : t == nt ? q : uc;
                return r(n)
            }

            function Oa(n) {
                if (!n) return 0 === n ? n : 0;
                if (n = za(n), n === En || n === -En) {
                    var t = n < 0 ? -1 : 1;
                    return t * Wn
                }
                return n === n ? n : 0
            }

            function Ia(n) {
                var t = Oa(n), r = t % 1;
                return t === t ? r ? t - r : t : 0
            }

            function Ra(n) {
                return n ? Fr(Ia(n), 0, Cn) : 0
            }

            function za(n) {
                if ("number" == typeof n) return n;
                if (ma(n)) return Ln;
                if (ca(n)) {
                    var t = "function" == typeof n.valueOf ? n.valueOf() : n;
                    n = ca(t) ? t + "" : t
                }
                if ("string" != typeof n) return 0 === n ? n : +n;
                n = n.replace(Lt, "");
                var r = qt.test(n);
                return r || Kt.test(n) ? Xr(n.slice(2), r ? 2 : 8) : Pt.test(n) ? Ln : +n
            }

            function Ea(n) {
                return Fu(n, Ka(n))
            }

            function Sa(n) {
                return n ? Fr(Ia(n), -Sn, Sn) : 0 === n ? n : 0
            }

            function Wa(n) {
                return null == n ? "" : gu(n)
            }

            function La(n, t) {
                var r = ds(n);
                return null == t ? r : Ur(r, t)
            }

            function Ca(n, t) {
                return y(n, Ai(t, 3), oe)
            }

            function Ua(n, t) {
                return y(n, Ai(t, 3), fe)
            }

            function Ba(n, t) {
                return null == n ? n : ms(n, Ai(t, 3), Ka)
            }

            function Ta(n, t) {
                return null == n ? n : xs(n, Ai(t, 3), Ka)
            }

            function $a(n, t) {
                return n && oe(n, Ai(t, 3))
            }

            function Da(n, t) {
                return n && fe(n, Ai(t, 3))
            }

            function Ma(n) {
                return null == n ? [] : ve(n, Za(n))
            }

            function Fa(n) {
                return null == n ? [] : ve(n, Ka(n))
            }

            function Na(n, t, r) {
                var e = null == n ? X : de(n, t);
                return e === X ? r : e
            }

            function Pa(n, t) {
                return null != n && Si(n, t, je)
            }

            function qa(n, t) {
                return null != n && Si(n, t, Ae)
            }

            function Za(n) {
                return Yf(n) ? Ir(n) : Fe(n)
            }

            function Ka(n) {
                return Yf(n) ? Ir(n, !0) : Ne(n)
            }

            function Va(n, t) {
                var r = {};
                return t = Ai(t, 3), oe(n, function (n, e, u) {
                    Tr(r, t(n, e, u), n)
                }), r
            }

            function Ga(n, t) {
                var r = {};
                return t = Ai(t, 3), oe(n, function (n, e, u) {
                    Tr(r, e, t(n, e, u))
                }), r
            }

            function Ha(n, t) {
                return Ja(n, Tf(Ai(t)))
            }

            function Ja(n, t) {
                if (null == n) return {};
                var r = l(mi(n), function (n) {
                    return [n]
                });
                return t = Ai(t), Qe(n, r, function (n, r) {
                    return t(n, r[0])
                })
            }

            function Ya(n, t, r) {
                t = Ou(t, n);
                var e = -1, u = t.length;
                for (u || (u = 1, n = X); ++e < u;) {
                    var i = null == n ? X : n[ro(t[e])];
                    i === X && (e = u, i = r), n = oa(i) ? i.call(n) : i
                }
                return n
            }

            function Qa(n, t, r) {
                return null == n ? n : au(n, t, r)
            }

            function Xa(n, t, r, e) {
                return e = "function" == typeof e ? e : X, null == n ? n : au(n, t, r, e)
            }

            function nc(n, t, r) {
                var e = mh(n), i = e || jh(n) || Rh(n);
                if (t = Ai(t, 4), null == r) {
                    var o = n && n.constructor;
                    r = i ? e ? new o : [] : ca(n) && oa(o) ? ds(Wl(n)) : {}
                }
                return (i ? u : oe)(n, function (n, e, u) {
                    return t(r, n, e, u)
                }), r
            }

            function tc(n, t) {
                return null == n || du(n, t)
            }

            function rc(n, t, r) {
                return null == n ? n : bu(n, t, ku(r))
            }

            function ec(n, t, r, e) {
                return e = "function" == typeof e ? e : X, null == n ? n : bu(n, t, ku(r), e)
            }

            function uc(n) {
                return null == n ? [] : S(n, Za(n))
            }

            function ic(n) {
                return null == n ? [] : S(n, Ka(n))
            }

            function oc(n, t, r) {
                return r === X && (r = t, t = X), r !== X && (r = za(r), r = r === r ? r : 0), t !== X && (t = za(t), t = t === t ? t : 0), Fr(za(n), t, r)
            }

            function fc(n, t, r) {
                return t = Oa(t), r === X ? (r = t, t = 0) : r = Oa(r), n = za(n), ke(n, t, r)
            }

            function ac(n, t, r) {
                if (r && "boolean" != typeof r && $i(n, t, r) && (t = r = X), r === X && ("boolean" == typeof t ? (r = t, t = X) : "boolean" == typeof n && (r = n, n = X)), n === X && t === X ? (n = 0, t = 1) : (n = Oa(n), t === X ? (t = n, n = 0) : t = Oa(t)), n > t) {
                    var e = n;
                    n = t, t = e
                }
                if (r || n % 1 || t % 1) {
                    var u = ns();
                    return Yl(n + u * (t - n + Qr("1e-" + ((u + "").length - 1))), t)
                }
                return ru(n, t)
            }

            function cc(n) {
                return np(Wa(n).toLowerCase())
            }

            function lc(n) {
                return n = Wa(n), n && n.replace(Gt, _e).replace(Dr, "")
            }

            function sc(n, t, r) {
                n = Wa(n), t = gu(t);
                var e = n.length;
                r = r === X ? e : Fr(Ia(r), 0, e);
                var u = r;
                return r -= t.length, r >= 0 && n.slice(r, u) == t
            }

            function hc(n) {
                return n = Wa(n), n && jt.test(n) ? n.replace(mt, ge) : n
            }

            function pc(n) {
                return n = Wa(n), n && Wt.test(n) ? n.replace(St, "\\$&") : n
            }

            function vc(n, t, r) {
                n = Wa(n), t = Ia(t);
                var e = t ? G(n) : 0;
                if (!t || e >= t) return n;
                var u = (t - e) / 2;
                return ii(ql(u), r) + n + ii(Pl(u), r)
            }

            function _c(n, t, r) {
                n = Wa(n), t = Ia(t);
                var e = t ? G(n) : 0;
                return t && e < t ? n + ii(t - e, r) : n
            }

            function gc(n, t, r) {
                n = Wa(n), t = Ia(t);
                var e = t ? G(n) : 0;
                return t && e < t ? ii(t - e, r) + n : n
            }

            function yc(n, t, r) {
                return r || null == t ? t = 0 : t && (t = +t), Xl(Wa(n).replace(Ct, ""), t || 0)
            }

            function dc(n, t, r) {
                return t = (r ? $i(n, t, r) : t === X) ? 1 : Ia(t), uu(Wa(n), t)
            }

            function bc() {
                var n = arguments, t = Wa(n[0]);
                return n.length < 3 ? t : t.replace(n[1], n[2])
            }

            function wc(n, t, r) {
                return r && "number" != typeof r && $i(n, t, r) && (t = r = X), (r = r === X ? Cn : r >>> 0) ? (n = Wa(n), n && ("string" == typeof t || null != t && !Oh(t)) && (t = gu(t), !t && $(n)) ? Iu(H(n), 0, r) : n.split(t, r)) : []
            }

            function mc(n, t, r) {
                return n = Wa(n), r = null == r ? 0 : Fr(Ia(r), 0, n.length), t = gu(t), n.slice(r, r + t.length) == t
            }

            function xc(n, t, r) {
                var e = K.templateSettings;
                r && $i(n, t, r) && (t = X), n = Wa(n), t = Lh({}, t, e, pi);
                var u, i, o = Lh({}, t.imports, e.imports, pi), f = Za(o), a = S(o, f), c = 0, l = t.interpolate || Ht,
                    s = "__p += '",
                    h = pl((t.escape || Ht).source + "|" + l.source + "|" + (l === Ot ? Ft : Ht).source + "|" + (t.evaluate || Ht).source + "|$", "g"),
                    p = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++Zr + "]") + "\n";
                n.replace(h, function (t, r, e, o, f, a) {
                    return e || (e = o), s += n.slice(c, a).replace(Jt, B), r && (u = !0, s += "' +\n__e(" + r + ") +\n'"), f && (i = !0, s += "';\n" + f + ";\n__p += '"), e && (s += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"), c = a + t.length, t
                }), s += "';\n";
                var v = t.variable;
                v || (s = "with (obj) {\n" + s + "\n}\n"), s = (i ? s.replace(yt, "") : s).replace(dt, "$1").replace(bt, "$1;"), s = "function(" + (v || "obj") + ") {\n" + (v ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + s + "return __p\n}";
                var _ = tp(function () {
                    return ll(f, p + "return " + s).apply(X, a)
                });
                if (_.source = s, ua(_)) throw _;
                return _
            }

            function jc(n) {
                return Wa(n).toLowerCase()
            }

            function Ac(n) {
                return Wa(n).toUpperCase()
            }

            function kc(n, t, r) {
                if (n = Wa(n), n && (r || t === X)) return n.replace(Lt, "");
                if (!n || !(t = gu(t))) return n;
                var e = H(n), u = H(t), i = L(e, u), o = C(e, u) + 1;
                return Iu(e, i, o).join("")
            }

            function Oc(n, t, r) {
                if (n = Wa(n), n && (r || t === X)) return n.replace(Ut, "");
                if (!n || !(t = gu(t))) return n;
                var e = H(n), u = C(e, H(t)) + 1;
                return Iu(e, 0, u).join("")
            }

            function Ic(n, t, r) {
                if (n = Wa(n), n && (r || t === X)) return n.replace(Ct, "");
                if (!n || !(t = gu(t))) return n;
                var e = H(n), u = L(e, H(t));
                return Iu(e, u).join("")
            }

            function Rc(n, t) {
                var r = jn, e = An;
                if (ca(t)) {
                    var u = "separator" in t ? t.separator : u;
                    r = "length" in t ? Ia(t.length) : r, e = "omission" in t ? gu(t.omission) : e
                }
                n = Wa(n);
                var i = n.length;
                if ($(n)) {
                    var o = H(n);
                    i = o.length
                }
                if (r >= i) return n;
                var f = r - G(e);
                if (f < 1) return e;
                var a = o ? Iu(o, 0, f).join("") : n.slice(0, f);
                if (u === X) return a + e;
                if (o && (f += a.length - f), Oh(u)) {
                    if (n.slice(f).search(u)) {
                        var c, l = a;
                        for (u.global || (u = pl(u.source, Wa(Nt.exec(u)) + "g")), u.lastIndex = 0; c = u.exec(l);) var s = c.index;
                        a = a.slice(0, s === X ? f : s)
                    }
                } else if (n.indexOf(gu(u), f) != f) {
                    var h = a.lastIndexOf(u);
                    h > -1 && (a = a.slice(0, h))
                }
                return a + e
            }

            function zc(n) {
                return n = Wa(n), n && xt.test(n) ? n.replace(wt, ye) : n
            }

            function Ec(n, t, r) {
                return n = Wa(n), t = r ? X : t, t === X ? D(n) ? Q(n) : g(n) : n.match(t) || []
            }

            function Sc(n) {
                var t = null == n ? 0 : n.length, e = Ai();
                return n = t ? l(n, function (n) {
                    if ("function" != typeof n[1]) throw new _l(en);
                    return [e(n[0]), n[1]]
                }) : [], iu(function (e) {
                    for (var u = -1; ++u < t;) {
                        var i = n[u];
                        if (r(i[0], this, e)) return r(i[1], this, e)
                    }
                })
            }

            function Wc(n) {
                return Pr(Nr(n, an))
            }

            function Lc(n) {
                return function () {
                    return n
                }
            }

            function Cc(n, t) {
                return null == n || n !== n ? t : n
            }

            function Uc(n) {
                return n
            }

            function Bc(n) {
                return Me("function" == typeof n ? n : Nr(n, an))
            }

            function Tc(n) {
                return Ze(Nr(n, an))
            }

            function $c(n, t) {
                return Ke(n, Nr(t, an))
            }

            function Dc(n, t, r) {
                var e = Za(t), i = ve(t, e);
                null != r || ca(t) && (i.length || !e.length) || (r = t, t = n, n = this, i = ve(t, Za(t)));
                var o = !(ca(r) && "chain" in r && !r.chain), f = oa(n);
                return u(i, function (r) {
                    var e = t[r];
                    n[r] = e, f && (n.prototype[r] = function () {
                        var t = this.__chain__;
                        if (o || t) {
                            var r = n(this.__wrapped__), u = r.__actions__ = Mu(this.__actions__);
                            return u.push({func: e, args: arguments, thisArg: n}), r.__chain__ = t, r
                        }
                        return e.apply(n, s([this.value()], arguments))
                    })
                }), n
            }

            function Mc() {
                return re._ === this && (re._ = Ol), this
            }

            function Fc() {
            }

            function Nc(n) {
                return n = Ia(n), iu(function (t) {
                    return He(t, n)
                })
            }

            function Pc(n) {
                return Di(n) ? j(ro(n)) : Xe(n)
            }

            function qc(n) {
                return function (t) {
                    return null == n ? X : de(n, t)
                }
            }

            function Zc() {
                return []
            }

            function Kc() {
                return !1
            }

            function Vc() {
                return {}
            }

            function Gc() {
                return ""
            }

            function Hc() {
                return !0
            }

            function Jc(n, t) {
                if (n = Ia(n), n < 1 || n > Sn) return [];
                var r = Cn, e = Yl(n, Cn);
                t = Ai(t), n -= Cn;
                for (var u = R(e, t); ++r < n;) t(r);
                return u
            }

            function Yc(n) {
                return mh(n) ? l(n, ro) : ma(n) ? [n] : Mu(Bs(Wa(n)))
            }

            function Qc(n) {
                var t = ++xl;
                return Wa(n) + t
            }

            function Xc(n) {
                return n && n.length ? ne(n, Uc, xe) : X
            }

            function nl(n, t) {
                return n && n.length ? ne(n, Ai(t, 2), xe) : X
            }

            function tl(n) {
                return x(n, Uc)
            }

            function rl(n, t) {
                return x(n, Ai(t, 2))
            }

            function el(n) {
                return n && n.length ? ne(n, Uc, Pe) : X
            }

            function ul(n, t) {
                return n && n.length ? ne(n, Ai(t, 2), Pe) : X
            }

            function il(n) {
                return n && n.length ? I(n, Uc) : 0
            }

            function ol(n, t) {
                return n && n.length ? I(n, Ai(t, 2)) : 0
            }

            A = null == A ? re : be.defaults(re.Object(), A, be.pick(re, qr));
            var fl = A.Array, al = A.Date, cl = A.Error, ll = A.Function, sl = A.Math, hl = A.Object, pl = A.RegExp,
                vl = A.String, _l = A.TypeError, gl = fl.prototype, yl = ll.prototype, dl = hl.prototype,
                bl = A["__core-js_shared__"], wl = yl.toString, ml = dl.hasOwnProperty, xl = 0, jl = function () {
                    var n = /[^.]+$/.exec(bl && bl.keys && bl.keys.IE_PROTO || "");
                    return n ? "Symbol(src)_1." + n : ""
                }(), Al = dl.toString, kl = wl.call(hl), Ol = re._,
                Il = pl("^" + wl.call(ml).replace(St, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                Rl = ie ? A.Buffer : X, zl = A.Symbol, El = A.Uint8Array, Sl = Rl ? Rl.allocUnsafe : X,
                Wl = N(hl.getPrototypeOf, hl), Ll = hl.create, Cl = dl.propertyIsEnumerable, Ul = gl.splice,
                Bl = zl ? zl.isConcatSpreadable : X, Tl = zl ? zl.iterator : X, $l = zl ? zl.toStringTag : X,
                Dl = function () {
                    try {
                        var n = Ii(hl, "defineProperty");
                        return n({}, "", {}), n
                    } catch (n) {
                    }
                }(), Ml = A.clearTimeout !== re.clearTimeout && A.clearTimeout,
                Fl = al && al.now !== re.Date.now && al.now, Nl = A.setTimeout !== re.setTimeout && A.setTimeout,
                Pl = sl.ceil, ql = sl.floor, Zl = hl.getOwnPropertySymbols, Kl = Rl ? Rl.isBuffer : X, Vl = A.isFinite,
                Gl = gl.join, Hl = N(hl.keys, hl), Jl = sl.max, Yl = sl.min, Ql = al.now, Xl = A.parseInt,
                ns = sl.random, ts = gl.reverse, rs = Ii(A, "DataView"), es = Ii(A, "Map"), us = Ii(A, "Promise"),
                is = Ii(A, "Set"), os = Ii(A, "WeakMap"), fs = Ii(hl, "create"), as = os && new os, cs = {},
                ls = eo(rs), ss = eo(es), hs = eo(us), ps = eo(is), vs = eo(os), _s = zl ? zl.prototype : X,
                gs = _s ? _s.valueOf : X, ys = _s ? _s.toString : X, ds = function () {
                    function n() {
                    }

                    return function (t) {
                        if (!ca(t)) return {};
                        if (Ll) return Ll(t);
                        n.prototype = t;
                        var r = new n;
                        return n.prototype = X, r
                    }
                }();
            K.templateSettings = {
                escape: At,
                evaluate: kt,
                interpolate: Ot,
                variable: "",
                imports: {_: K}
            }, K.prototype = J.prototype, K.prototype.constructor = K, Y.prototype = ds(J.prototype), Y.prototype.constructor = Y, Dt.prototype = ds(J.prototype), Dt.prototype.constructor = Dt, nr.prototype.clear = tr, nr.prototype.delete = rr, nr.prototype.get = er, nr.prototype.has = ur, nr.prototype.set = ir, or.prototype.clear = fr, or.prototype.delete = ar, or.prototype.get = cr, or.prototype.has = lr, or.prototype.set = sr, hr.prototype.clear = pr, hr.prototype.delete = vr, hr.prototype.get = _r, hr.prototype.has = gr, hr.prototype.set = yr, dr.prototype.add = dr.prototype.push = br, dr.prototype.has = wr, mr.prototype.clear = xr, mr.prototype.delete = jr, mr.prototype.get = Ar, mr.prototype.has = kr, mr.prototype.set = Or;
            var bs = Ku(oe), ws = Ku(fe, !0), ms = Vu(), xs = Vu(!0), js = as ? function (n, t) {
                return as.set(n, t), n
            } : Uc, As = Dl ? function (n, t) {
                return Dl(n, "toString", {configurable: !0, enumerable: !1, value: Lc(t), writable: !0})
            } : Uc, ks = iu, Os = Ml || function (n) {
                return re.clearTimeout(n)
            }, Is = is && 1 / q(new is([, -0]))[1] == En ? function (n) {
                return new is(n)
            } : Fc, Rs = as ? function (n) {
                return as.get(n)
            } : Fc, zs = Zl ? function (n) {
                return null == n ? [] : (n = hl(n), f(Zl(n), function (t) {
                    return Cl.call(n, t)
                }))
            } : Zc, Es = Zl ? function (n) {
                for (var t = []; n;) s(t, zs(n)), n = Wl(n);
                return t
            } : Zc, Ss = me;
            (rs && Ss(new rs(new ArrayBuffer(1))) != ft || es && Ss(new es) != Vn || us && Ss(us.resolve()) != Yn || is && Ss(new is) != nt || os && Ss(new os) != ut) && (Ss = function (n) {
                var t = me(n), r = t == Jn ? n.constructor : X, e = r ? eo(r) : "";
                if (e) switch (e) {
                    case ls:
                        return ft;
                    case ss:
                        return Vn;
                    case hs:
                        return Yn;
                    case ps:
                        return nt;
                    case vs:
                        return ut
                }
                return t
            });
            var Ws = bl ? oa : Kc, Ls = no(js), Cs = Nl || function (n, t) {
                return re.setTimeout(n, t)
            }, Us = no(As), Bs = Ki(function (n) {
                var t = [];
                return zt.test(n) && t.push(""), n.replace(Et, function (n, r, e, u) {
                    t.push(e ? u.replace(Mt, "$1") : r || n)
                }), t
            }), Ts = iu(function (n, t) {
                return Qf(n) ? Jr(n, ue(t, 1, Qf, !0)) : []
            }), $s = iu(function (n, t) {
                var r = ko(t);
                return Qf(r) && (r = X), Qf(n) ? Jr(n, ue(t, 1, Qf, !0), Ai(r, 2)) : []
            }), Ds = iu(function (n, t) {
                var r = ko(t);
                return Qf(r) && (r = X), Qf(n) ? Jr(n, ue(t, 1, Qf, !0), X, r) : []
            }), Ms = iu(function (n) {
                var t = l(n, Au);
                return t.length && t[0] === n[0] ? Oe(t) : []
            }), Fs = iu(function (n) {
                var t = ko(n), r = l(n, Au);
                return t === ko(r) ? t = X : r.pop(), r.length && r[0] === n[0] ? Oe(r, Ai(t, 2)) : []
            }), Ns = iu(function (n) {
                var t = ko(n), r = l(n, Au);
                return t = "function" == typeof t ? t : X, t && r.pop(), r.length && r[0] === n[0] ? Oe(r, X, t) : []
            }), Ps = iu(Ro), qs = bi(function (n, t) {
                var r = null == n ? 0 : n.length, e = Mr(n, t);
                return tu(n, l(t, function (n) {
                    return Ti(n, r) ? +n : n
                }).sort(Bu)), e
            }), Zs = iu(function (n) {
                return yu(ue(n, 1, Qf, !0))
            }), Ks = iu(function (n) {
                var t = ko(n);
                return Qf(t) && (t = X), yu(ue(n, 1, Qf, !0), Ai(t, 2))
            }), Vs = iu(function (n) {
                var t = ko(n);
                return t = "function" == typeof t ? t : X, yu(ue(n, 1, Qf, !0), X, t)
            }), Gs = iu(function (n, t) {
                return Qf(n) ? Jr(n, t) : []
            }), Hs = iu(function (n) {
                return xu(f(n, Qf))
            }), Js = iu(function (n) {
                var t = ko(n);
                return Qf(t) && (t = X), xu(f(n, Qf), Ai(t, 2))
            }), Ys = iu(function (n) {
                var t = ko(n);
                return t = "function" == typeof t ? t : X, xu(f(n, Qf), X, t)
            }), Qs = iu(Jo), Xs = iu(function (n) {
                var t = n.length, r = t > 1 ? n[t - 1] : X;
                return r = "function" == typeof r ? (n.pop(), r) : X, Yo(n, r)
            }), nh = bi(function (n) {
                var t = n.length, r = t ? n[0] : 0, e = this.__wrapped__, u = function (t) {
                    return Mr(t, n)
                };
                return !(t > 1 || this.__actions__.length) && e instanceof Dt && Ti(r) ? (e = e.slice(r, +r + (t ? 1 : 0)), e.__actions__.push({
                    func: rf,
                    args: [u],
                    thisArg: X
                }), new Y(e, this.__chain__).thru(function (n) {
                    return t && !n.length && n.push(X), n
                })) : this.thru(u)
            }), th = qu(function (n, t, r) {
                ml.call(n, r) ? ++n[r] : Tr(n, r, 1)
            }), rh = Xu(vo), eh = Xu(_o), uh = qu(function (n, t, r) {
                ml.call(n, r) ? n[r].push(t) : Tr(n, r, [t])
            }), ih = iu(function (n, t, e) {
                var u = -1, i = "function" == typeof t, o = Yf(n) ? fl(n.length) : [];
                return bs(n, function (n) {
                    o[++u] = i ? r(t, n, e) : Re(n, t, e)
                }), o
            }), oh = qu(function (n, t, r) {
                Tr(n, r, t)
            }), fh = qu(function (n, t, r) {
                n[r ? 0 : 1].push(t)
            }, function () {
                return [[], []]
            }), ah = iu(function (n, t) {
                if (null == n) return [];
                var r = t.length;
                return r > 1 && $i(n, t[0], t[1]) ? t = [] : r > 2 && $i(t[0], t[1], t[2]) && (t = [t[0]]), Je(n, ue(t, 1), [])
            }), ch = Fl || function () {
                return re.Date.now()
            }, lh = iu(function (n, t, r) {
                var e = pn;
                if (r.length) {
                    var u = P(r, ji(lh));
                    e |= dn
                }
                return hi(n, e, t, r, u)
            }), sh = iu(function (n, t, r) {
                var e = pn | vn;
                if (r.length) {
                    var u = P(r, ji(sh));
                    e |= dn
                }
                return hi(t, e, n, r, u)
            }), hh = iu(function (n, t) {
                return Hr(n, 1, t)
            }), ph = iu(function (n, t, r) {
                return Hr(n, za(t) || 0, r)
            });
            Bf.Cache = hr;
            var vh = ks(function (n, t) {
                    t = 1 == t.length && mh(t[0]) ? l(t[0], E(Ai())) : l(ue(t, 1), E(Ai()));
                    var e = t.length;
                    return iu(function (u) {
                        for (var i = -1, o = Yl(u.length, e); ++i < o;) u[i] = t[i].call(this, u[i]);
                        return r(n, this, u)
                    })
                }), _h = iu(function (n, t) {
                    var r = P(t, ji(_h));
                    return hi(n, dn, X, t, r)
                }), gh = iu(function (n, t) {
                    var r = P(t, ji(gh));
                    return hi(n, bn, X, t, r)
                }), yh = bi(function (n, t) {
                    return hi(n, mn, X, X, X, t)
                }), dh = ai(xe), bh = ai(function (n, t) {
                    return n >= t
                }), wh = ze(function () {
                    return arguments
                }()) ? ze : function (n) {
                    return la(n) && ml.call(n, "callee") && !Cl.call(n, "callee")
                }, mh = fl.isArray, xh = ae ? E(ae) : Ee, jh = Kl || Kc, Ah = ce ? E(ce) : Se, kh = le ? E(le) : Ce,
                Oh = se ? E(se) : Te, Ih = he ? E(he) : $e, Rh = pe ? E(pe) : De, zh = ai(Pe), Eh = ai(function (n, t) {
                    return n <= t
                }), Sh = Zu(function (n, t) {
                    if (Pi(t) || Yf(t)) return void Fu(t, Za(t), n);
                    for (var r in t) ml.call(t, r) && Wr(n, r, t[r])
                }), Wh = Zu(function (n, t) {
                    Fu(t, Ka(t), n)
                }), Lh = Zu(function (n, t, r, e) {
                    Fu(t, Ka(t), n, e)
                }), Ch = Zu(function (n, t, r, e) {
                    Fu(t, Za(t), n, e)
                }), Uh = bi(Mr), Bh = iu(function (n) {
                    return n.push(X, pi), r(Lh, X, n)
                }), Th = iu(function (n) {
                    return n.push(X, vi), r(Nh, X, n)
                }), $h = ri(function (n, t, r) {
                    n[t] = r
                }, Lc(Uc)), Dh = ri(function (n, t, r) {
                    ml.call(n, t) ? n[t].push(r) : n[t] = [r]
                }, Ai), Mh = iu(Re), Fh = Zu(function (n, t, r) {
                    Ve(n, t, r)
                }), Nh = Zu(function (n, t, r, e) {
                    Ve(n, t, r, e)
                }), Ph = bi(function (n, t) {
                    var r = {};
                    if (null == n) return r;
                    var e = !1;
                    t = l(t, function (t) {
                        return t = Ou(t, n), e || (e = t.length > 1), t
                    }), Fu(n, mi(n), r), e && (r = Nr(r, an | cn | ln, _i));
                    for (var u = t.length; u--;) du(r, t[u]);
                    return r
                }), qh = bi(function (n, t) {
                    return null == n ? {} : Ye(n, t)
                }), Zh = si(Za), Kh = si(Ka), Vh = Ju(function (n, t, r) {
                    return t = t.toLowerCase(), n + (r ? cc(t) : t)
                }), Gh = Ju(function (n, t, r) {
                    return n + (r ? "-" : "") + t.toLowerCase()
                }), Hh = Ju(function (n, t, r) {
                    return n + (r ? " " : "") + t.toLowerCase()
                }), Jh = Hu("toLowerCase"), Yh = Ju(function (n, t, r) {
                    return n + (r ? "_" : "") + t.toLowerCase()
                }), Qh = Ju(function (n, t, r) {
                    return n + (r ? " " : "") + np(t)
                }), Xh = Ju(function (n, t, r) {
                    return n + (r ? " " : "") + t.toUpperCase()
                }), np = Hu("toUpperCase"), tp = iu(function (n, t) {
                    try {
                        return r(n, X, t)
                    } catch (n) {
                        return ua(n) ? n : new cl(n)
                    }
                }), rp = bi(function (n, t) {
                    return u(t, function (t) {
                        t = ro(t), Tr(n, t, lh(n[t], n))
                    }), n
                }), ep = ni(), up = ni(!0), ip = iu(function (n, t) {
                    return function (r) {
                        return Re(r, n, t)
                    }
                }), op = iu(function (n, t) {
                    return function (r) {
                        return Re(n, r, t)
                    }
                }), fp = ui(l), ap = ui(o), cp = ui(v), lp = fi(), sp = fi(!0), hp = ei(function (n, t) {
                    return n + t
                }, 0), pp = li("ceil"), vp = ei(function (n, t) {
                    return n / t
                }, 1), _p = li("floor"), gp = ei(function (n, t) {
                    return n * t
                }, 1), yp = li("round"), dp = ei(function (n, t) {
                    return n - t
                }, 0);
            return K.after = zf, K.ary = Ef, K.assign = Sh, K.assignIn = Wh, K.assignInWith = Lh, K.assignWith = Ch, K.at = Uh, K.before = Sf, K.bind = lh, K.bindAll = rp, K.bindKey = sh, K.castArray = qf, K.chain = nf, K.chunk = oo, K.compact = fo, K.concat = ao, K.cond = Sc, K.conforms = Wc, K.constant = Lc, K.countBy = th, K.create = La, K.curry = Wf, K.curryRight = Lf, K.debounce = Cf, K.defaults = Bh, K.defaultsDeep = Th, K.defer = hh, K.delay = ph, K.difference = Ts, K.differenceBy = $s, K.differenceWith = Ds, K.drop = co,
                K.dropRight = lo, K.dropRightWhile = so, K.dropWhile = ho, K.fill = po, K.filter = hf, K.flatMap = pf, K.flatMapDeep = vf, K.flatMapDepth = _f, K.flatten = go, K.flattenDeep = yo, K.flattenDepth = bo, K.flip = Uf, K.flow = ep, K.flowRight = up, K.fromPairs = wo, K.functions = Ma, K.functionsIn = Fa, K.groupBy = uh, K.initial = jo, K.intersection = Ms, K.intersectionBy = Fs, K.intersectionWith = Ns, K.invert = $h, K.invertBy = Dh, K.invokeMap = ih, K.iteratee = Bc, K.keyBy = oh, K.keys = Za, K.keysIn = Ka, K.map = bf, K.mapKeys = Va, K.mapValues = Ga, K.matches = Tc, K.matchesProperty = $c, K.memoize = Bf, K.merge = Fh, K.mergeWith = Nh, K.method = ip, K.methodOf = op, K.mixin = Dc, K.negate = Tf, K.nthArg = Nc, K.omit = Ph, K.omitBy = Ha, K.once = $f, K.orderBy = wf, K.over = fp, K.overArgs = vh, K.overEvery = ap, K.overSome = cp, K.partial = _h, K.partialRight = gh, K.partition = fh, K.pick = qh, K.pickBy = Ja, K.property = Pc, K.propertyOf = qc, K.pull = Ps, K.pullAll = Ro, K.pullAllBy = zo, K.pullAllWith = Eo, K.pullAt = qs, K.range = lp, K.rangeRight = sp, K.rearg = yh, K.reject = jf, K.remove = So, K.rest = Df, K.reverse = Wo,K.sampleSize = kf,K.set = Qa,K.setWith = Xa,K.shuffle = Of,K.slice = Lo,K.sortBy = ah,K.sortedUniq = Mo,K.sortedUniqBy = Fo,K.split = wc,K.spread = Mf,K.tail = No,K.take = Po,K.takeRight = qo,K.takeRightWhile = Zo,K.takeWhile = Ko,K.tap = tf,K.throttle = Ff,K.thru = rf,K.toArray = ka,K.toPairs = Zh,K.toPairsIn = Kh,K.toPath = Yc,K.toPlainObject = Ea,K.transform = nc,K.unary = Nf,K.union = Zs,K.unionBy = Ks,K.unionWith = Vs,K.uniq = Vo,K.uniqBy = Go,K.uniqWith = Ho,K.unset = tc,K.unzip = Jo,K.unzipWith = Yo,K.update = rc,K.updateWith = ec,K.values = uc,K.valuesIn = ic,K.without = Gs,K.words = Ec,K.wrap = Pf,K.xor = Hs,K.xorBy = Js,K.xorWith = Ys,K.zip = Qs,K.zipObject = Qo,K.zipObjectDeep = Xo,K.zipWith = Xs,K.entries = Zh,K.entriesIn = Kh,K.extend = Wh,K.extendWith = Lh,Dc(K, K),K.add = hp,K.attempt = tp,K.camelCase = Vh,K.capitalize = cc,K.ceil = pp,K.clamp = oc,K.clone = Zf,K.cloneDeep = Vf,K.cloneDeepWith = Gf,K.cloneWith = Kf,K.conformsTo = Hf,K.deburr = lc,K.defaultTo = Cc,K.divide = vp,K.endsWith = sc,K.eq = Jf,K.escape = hc,K.escapeRegExp = pc,K.every = sf,K.find = rh,K.findIndex = vo,K.findKey = Ca,K.findLast = eh,K.findLastIndex = _o,K.findLastKey = Ua,K.floor = _p,K.forEach = gf,K.forEachRight = yf,K.forIn = Ba,K.forInRight = Ta,K.forOwn = $a,K.forOwnRight = Da,K.get = Na,K.gt = dh,K.gte = bh,K.has = Pa,K.hasIn = qa,K.head = mo,K.identity = Uc,K.includes = df,K.indexOf = xo,K.inRange = fc,K.invoke = Mh,K.isArguments = wh,K.isArray = mh,K.isArrayBuffer = xh,K.isArrayLike = Yf,K.isArrayLikeObject = Qf,K.isBoolean = Xf,K.isBuffer = jh,K.isDate = Ah,K.isElement = na,K.isEmpty = ta,K.isEqual = ra,K.isEqualWith = ea,K.isError = ua,K.isFinite = ia,K.isFunction = oa,K.isInteger = fa,K.isLength = aa,K.isMap = kh,K.isMatch = sa,K.isMatchWith = ha,K.isNaN = pa,K.isNative = va,K.isNil = ga,K.isNull = _a,K.isNumber = ya,K.isObject = ca,K.isObjectLike = la,K.isPlainObject = da,K.isRegExp = Oh,K.isSafeInteger = ba,K.isSet = Ih,K.isString = wa,K.isSymbol = ma,K.isTypedArray = Rh,K.isUndefined = xa,K.isWeakMap = ja,K.isWeakSet = Aa,K.join = Ao,K.kebabCase = Gh,K.last = ko,K.lastIndexOf = Oo,K.lowerCase = Hh,K.lowerFirst = Jh,K.lt = zh,K.lte = Eh,K.max = Xc,K.maxBy = nl,K.mean = tl,K.meanBy = rl,K.min = el,K.minBy = ul,K.stubArray = Zc,K.stubFalse = Kc,K.stubObject = Vc,K.stubString = Gc,K.stubTrue = Hc,K.multiply = gp,K.nth = Io,K.noConflict = Mc,K.noop = Fc,K.now = ch,K.pad = vc,K.padEnd = _c,K.padStart = gc,K.parseInt = yc,K.random = ac,K.reduce = mf,K.reduceRight = xf,K.repeat = dc,K.replace = bc,K.result = Ya,K.round = yp,K.runInContext = _,K.sample = Af,K.size = If,K.snakeCase = Yh,K.some = Rf,K.sortedIndex = Co,K.sortedIndexBy = Uo,K.sortedIndexOf = Bo,K.sortedLastIndex = To,K.sortedLastIndexBy = $o,K.sortedLastIndexOf = Do,K.startCase = Qh,K.startsWith = mc,K.subtract = dp,K.sum = il,K.sumBy = ol,K.template = xc,K.times = Jc,K.toFinite = Oa,K.toInteger = Ia,K.toLength = Ra,K.toLower = jc,K.toNumber = za,K.toSafeInteger = Sa,K.toString = Wa,K.toUpper = Ac,K.trim = kc,K.trimEnd = Oc,K.trimStart = Ic,K.truncate = Rc,K.unescape = zc,K.uniqueId = Qc,K.upperCase = Xh,K.upperFirst = np,K.each = gf,K.eachRight = yf,K.first = mo,Dc(K, function () {
                var n = {};
                return oe(K, function (t, r) {
                    ml.call(K.prototype, r) || (n[r] = t)
                }), n
            }(), {chain: !1}),K.VERSION = nn,u(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (n) {
                K[n].placeholder = K
            }),u(["drop", "take"], function (n, t) {
                Dt.prototype[n] = function (r) {
                    r = r === X ? 1 : Jl(Ia(r), 0);
                    var e = this.__filtered__ && !t ? new Dt(this) : this.clone();
                    return e.__filtered__ ? e.__takeCount__ = Yl(r, e.__takeCount__) : e.__views__.push({
                        size: Yl(r, Cn),
                        type: n + (e.__dir__ < 0 ? "Right" : "")
                    }), e
                }, Dt.prototype[n + "Right"] = function (t) {
                    return this.reverse()[n](t).reverse()
                }
            }),u(["filter", "map", "takeWhile"], function (n, t) {
                var r = t + 1, e = r == In || r == zn;
                Dt.prototype[n] = function (n) {
                    var t = this.clone();
                    return t.__iteratees__.push({iteratee: Ai(n, 3), type: r}), t.__filtered__ = t.__filtered__ || e, t
                }
            }),u(["head", "last"], function (n, t) {
                var r = "take" + (t ? "Right" : "");
                Dt.prototype[n] = function () {
                    return this[r](1).value()[0]
                }
            }),u(["initial", "tail"], function (n, t) {
                var r = "drop" + (t ? "" : "Right");
                Dt.prototype[n] = function () {
                    return this.__filtered__ ? new Dt(this) : this[r](1)
                }
            }),Dt.prototype.compact = function () {
                return this.filter(Uc)
            },Dt.prototype.find = function (n) {
                return this.filter(n).head()
            },Dt.prototype.findLast = function (n) {
                return this.reverse().find(n)
            },Dt.prototype.invokeMap = iu(function (n, t) {
                return "function" == typeof n ? new Dt(this) : this.map(function (r) {
                    return Re(r, n, t)
                })
            }),Dt.prototype.reject = function (n) {
                return this.filter(Tf(Ai(n)))
            },Dt.prototype.slice = function (n, t) {
                n = Ia(n);
                var r = this;
                return r.__filtered__ && (n > 0 || t < 0) ? new Dt(r) : (n < 0 ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== X && (t = Ia(t), r = t < 0 ? r.dropRight(-t) : r.take(t - n)), r)
            },Dt.prototype.takeRightWhile = function (n) {
                return this.reverse().takeWhile(n).reverse()
            },Dt.prototype.toArray = function () {
                return this.take(Cn)
            },oe(Dt.prototype, function (n, t) {
                var r = /^(?:filter|find|map|reject)|While$/.test(t), e = /^(?:head|last)$/.test(t),
                    u = K[e ? "take" + ("last" == t ? "Right" : "") : t], i = e || /^find/.test(t);
                u && (K.prototype[t] = function () {
                    var t = this.__wrapped__, o = e ? [1] : arguments, f = t instanceof Dt, a = o[0], c = f || mh(t),
                        l = function (n) {
                            var t = u.apply(K, s([n], o));
                            return e && h ? t[0] : t
                        };
                    c && r && "function" == typeof a && 1 != a.length && (f = c = !1);
                    var h = this.__chain__, p = !!this.__actions__.length, v = i && !h, _ = f && !p;
                    if (!i && c) {
                        t = _ ? t : new Dt(this);
                        var g = n.apply(t, o);
                        return g.__actions__.push({func: rf, args: [l], thisArg: X}), new Y(g, h)
                    }
                    return v && _ ? n.apply(this, o) : (g = this.thru(l), v ? e ? g.value()[0] : g.value() : g)
                })
            }),u(["pop", "push", "shift", "sort", "splice", "unshift"], function (n) {
                var t = gl[n], r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", e = /^(?:pop|shift)$/.test(n);
                K.prototype[n] = function () {
                    var n = arguments;
                    if (e && !this.__chain__) {
                        var u = this.value();
                        return t.apply(mh(u) ? u : [], n)
                    }
                    return this[r](function (r) {
                        return t.apply(mh(r) ? r : [], n)
                    })
                }
            }),oe(Dt.prototype, function (n, t) {
                var r = K[t];
                if (r) {
                    var e = r.name + "", u = cs[e] || (cs[e] = []);
                    u.push({name: t, func: r})
                }
            }),cs[ti(X, vn).name] = [{
                name: "wrapper",
                func: X
            }],Dt.prototype.clone = Yt,Dt.prototype.reverse = Qt,Dt.prototype.value = Xt,K.prototype.at = nh,K.prototype.chain = ef,K.prototype.commit = uf,K.prototype.next = of,K.prototype.plant = af,K.prototype.reverse = cf,K.prototype.toJSON = K.prototype.valueOf = K.prototype.value = lf,K.prototype.first = K.prototype.head,Tl && (K.prototype[Tl] = ff),K
        }, be = de();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (re._ = be, define(function () {
        return be
    })) : ue ? ((ue.exports = be)._ = be, ee._ = be) : re._ = be
}).call(this);
//# sourceMappingURL=lodash.min.js.map
(function (window, factory) {
    if (typeof exports === "object") {
        module.exports = factory()
    } else if (typeof define === "function" && define.amd) {
        define(factory)
    } else {
        window.jStat = factory()
    }
})(this, function () {
    var jStat = function (Math, undefined) {
        var concat = Array.prototype.concat;
        var slice = Array.prototype.slice;
        var toString = Object.prototype.toString;

        function calcRdx(n, m) {
            var val = n > m ? n : m;
            return Math.pow(10, 17 - ~~(Math.log(val > 0 ? val : -val) * Math.LOG10E))
        }

        var isArray = Array.isArray || function isArray(arg) {
            return toString.call(arg) === "[object Array]"
        };

        function isFunction(arg) {
            return toString.call(arg) === "[object Function]"
        }

        function isNumber(num) {
            return typeof num === "number" ? num - num === 0 : false
        }

        function toVector(arr) {
            return concat.apply([], arr)
        }

        function jStat() {
            return new jStat._init(arguments)
        }

        jStat.fn = jStat.prototype;
        jStat._init = function _init(args) {
            if (isArray(args[0])) {
                if (isArray(args[0][0])) {
                    if (isFunction(args[1])) args[0] = jStat.map(args[0], args[1]);
                    for (var i = 0; i < args[0].length; i++) this[i] = args[0][i];
                    this.length = args[0].length
                } else {
                    this[0] = isFunction(args[1]) ? jStat.map(args[0], args[1]) : args[0];
                    this.length = 1
                }
            } else if (isNumber(args[0])) {
                this[0] = jStat.seq.apply(null, args);
                this.length = 1
            } else if (args[0] instanceof jStat) {
                return jStat(args[0].toArray())
            } else {
                this[0] = [];
                this.length = 1
            }
            return this
        };
        jStat._init.prototype = jStat.prototype;
        jStat._init.constructor = jStat;
        jStat.utils = {
            calcRdx: calcRdx,
            isArray: isArray,
            isFunction: isFunction,
            isNumber: isNumber,
            toVector: toVector
        };
        jStat._random_fn = Math.random;
        jStat.setRandom = function setRandom(fn) {
            if (typeof fn !== "function") throw new TypeError("fn is not a function");
            jStat._random_fn = fn
        };
        jStat.extend = function extend(obj) {
            var i, j;
            if (arguments.length === 1) {
                for (j in obj) jStat[j] = obj[j];
                return this
            }
            for (i = 1; i < arguments.length; i++) {
                for (j in arguments[i]) obj[j] = arguments[i][j]
            }
            return obj
        };
        jStat.rows = function rows(arr) {
            return arr.length || 1
        };
        jStat.cols = function cols(arr) {
            return arr[0].length || 1
        };
        jStat.dimensions = function dimensions(arr) {
            return {rows: jStat.rows(arr), cols: jStat.cols(arr)}
        };
        jStat.row = function row(arr, index) {
            if (isArray(index)) {
                return index.map(function (i) {
                    return jStat.row(arr, i)
                })
            }
            return arr[index]
        };
        jStat.rowa = function rowa(arr, i) {
            return jStat.row(arr, i)
        };
        jStat.col = function col(arr, index) {
            if (isArray(index)) {
                var submat = jStat.arange(arr.length).map(function () {
                    return new Array(index.length)
                });
                index.forEach(function (ind, i) {
                    jStat.arange(arr.length).forEach(function (j) {
                        submat[j][i] = arr[j][ind]
                    })
                });
                return submat
            }
            var column = new Array(arr.length);
            for (var i = 0; i < arr.length; i++) column[i] = [arr[i][index]];
            return column
        };
        jStat.cola = function cola(arr, i) {
            return jStat.col(arr, i).map(function (a) {
                return a[0]
            })
        };
        jStat.diag = function diag(arr) {
            var nrow = jStat.rows(arr);
            var res = new Array(nrow);
            for (var row = 0; row < nrow; row++) res[row] = [arr[row][row]];
            return res
        };
        jStat.antidiag = function antidiag(arr) {
            var nrow = jStat.rows(arr) - 1;
            var res = new Array(nrow);
            for (var i = 0; nrow >= 0; nrow--, i++) res[i] = [arr[i][nrow]];
            return res
        };
        jStat.transpose = function transpose(arr) {
            var obj = [];
            var objArr, rows, cols, j, i;
            if (!isArray(arr[0])) arr = [arr];
            rows = arr.length;
            cols = arr[0].length;
            for (i = 0; i < cols; i++) {
                objArr = new Array(rows);
                for (j = 0; j < rows; j++) objArr[j] = arr[j][i];
                obj.push(objArr)
            }
            return obj.length === 1 ? obj[0] : obj
        };
        jStat.map = function map(arr, func, toAlter) {
            var row, nrow, ncol, res, col;
            if (!isArray(arr[0])) arr = [arr];
            nrow = arr.length;
            ncol = arr[0].length;
            res = toAlter ? arr : new Array(nrow);
            for (row = 0; row < nrow; row++) {
                if (!res[row]) res[row] = new Array(ncol);
                for (col = 0; col < ncol; col++) res[row][col] = func(arr[row][col], row, col)
            }
            return res.length === 1 ? res[0] : res
        };
        jStat.cumreduce = function cumreduce(arr, func, toAlter) {
            var row, nrow, ncol, res, col;
            if (!isArray(arr[0])) arr = [arr];
            nrow = arr.length;
            ncol = arr[0].length;
            res = toAlter ? arr : new Array(nrow);
            for (row = 0; row < nrow; row++) {
                if (!res[row]) res[row] = new Array(ncol);
                if (ncol > 0) res[row][0] = arr[row][0];
                for (col = 1; col < ncol; col++) res[row][col] = func(res[row][col - 1], arr[row][col])
            }
            return res.length === 1 ? res[0] : res
        };
        jStat.alter = function alter(arr, func) {
            return jStat.map(arr, func, true)
        };
        jStat.create = function create(rows, cols, func) {
            var res = new Array(rows);
            var i, j;
            if (isFunction(cols)) {
                func = cols;
                cols = rows
            }
            for (i = 0; i < rows; i++) {
                res[i] = new Array(cols);
                for (j = 0; j < cols; j++) res[i][j] = func(i, j)
            }
            return res
        };

        function retZero() {
            return 0
        }

        jStat.zeros = function zeros(rows, cols) {
            if (!isNumber(cols)) cols = rows;
            return jStat.create(rows, cols, retZero)
        };

        function retOne() {
            return 1
        }

        jStat.ones = function ones(rows, cols) {
            if (!isNumber(cols)) cols = rows;
            return jStat.create(rows, cols, retOne)
        };
        jStat.rand = function rand(rows, cols) {
            if (!isNumber(cols)) cols = rows;
            return jStat.create(rows, cols, jStat._random_fn)
        };

        function retIdent(i, j) {
            return i === j ? 1 : 0
        }

        jStat.identity = function identity(rows, cols) {
            if (!isNumber(cols)) cols = rows;
            return jStat.create(rows, cols, retIdent)
        };
        jStat.symmetric = function symmetric(arr) {
            var size = arr.length;
            var row, col;
            if (arr.length !== arr[0].length) return false;
            for (row = 0; row < size; row++) {
                for (col = 0; col < size; col++) if (arr[col][row] !== arr[row][col]) return false
            }
            return true
        };
        jStat.clear = function clear(arr) {
            return jStat.alter(arr, retZero)
        };
        jStat.seq = function seq(min, max, length, func) {
            if (!isFunction(func)) func = false;
            var arr = [];
            var hival = calcRdx(min, max);
            var step = (max * hival - min * hival) / ((length - 1) * hival);
            var current = min;
            var cnt;
            for (cnt = 0; current <= max && cnt < length; cnt++, current = (min * hival + step * hival * cnt) / hival) {
                arr.push(func ? func(current, cnt) : current)
            }
            return arr
        };
        jStat.arange = function arange(start, end, step) {
            var rl = [];
            var i;
            step = step || 1;
            if (end === undefined) {
                end = start;
                start = 0
            }
            if (start === end || step === 0) {
                return []
            }
            if (start < end && step < 0) {
                return []
            }
            if (start > end && step > 0) {
                return []
            }
            if (step > 0) {
                for (i = start; i < end; i += step) {
                    rl.push(i)
                }
            } else {
                for (i = start; i > end; i += step) {
                    rl.push(i)
                }
            }
            return rl
        };
        jStat.slice = function () {
            function _slice(list, start, end, step) {
                var i;
                var rl = [];
                var length = list.length;
                if (start === undefined && end === undefined && step === undefined) {
                    return jStat.copy(list)
                }
                start = start || 0;
                end = end || list.length;
                start = start >= 0 ? start : length + start;
                end = end >= 0 ? end : length + end;
                step = step || 1;
                if (start === end || step === 0) {
                    return []
                }
                if (start < end && step < 0) {
                    return []
                }
                if (start > end && step > 0) {
                    return []
                }
                if (step > 0) {
                    for (i = start; i < end; i += step) {
                        rl.push(list[i])
                    }
                } else {
                    for (i = start; i > end; i += step) {
                        rl.push(list[i])
                    }
                }
                return rl
            }

            function slice(list, rcSlice) {
                var colSlice, rowSlice;
                rcSlice = rcSlice || {};
                if (isNumber(rcSlice.row)) {
                    if (isNumber(rcSlice.col)) return list[rcSlice.row][rcSlice.col];
                    var row = jStat.rowa(list, rcSlice.row);
                    colSlice = rcSlice.col || {};
                    return _slice(row, colSlice.start, colSlice.end, colSlice.step)
                }
                if (isNumber(rcSlice.col)) {
                    var col = jStat.cola(list, rcSlice.col);
                    rowSlice = rcSlice.row || {};
                    return _slice(col, rowSlice.start, rowSlice.end, rowSlice.step)
                }
                rowSlice = rcSlice.row || {};
                colSlice = rcSlice.col || {};
                var rows = _slice(list, rowSlice.start, rowSlice.end, rowSlice.step);
                return rows.map(function (row) {
                    return _slice(row, colSlice.start, colSlice.end, colSlice.step)
                })
            }

            return slice
        }();
        jStat.sliceAssign = function sliceAssign(A, rcSlice, B) {
            var nl, ml;
            if (isNumber(rcSlice.row)) {
                if (isNumber(rcSlice.col)) return A[rcSlice.row][rcSlice.col] = B;
                rcSlice.col = rcSlice.col || {};
                rcSlice.col.start = rcSlice.col.start || 0;
                rcSlice.col.end = rcSlice.col.end || A[0].length;
                rcSlice.col.step = rcSlice.col.step || 1;
                nl = jStat.arange(rcSlice.col.start, Math.min(A.length, rcSlice.col.end), rcSlice.col.step);
                var m = rcSlice.row;
                nl.forEach(function (n, i) {
                    A[m][n] = B[i]
                });
                return A
            }
            if (isNumber(rcSlice.col)) {
                rcSlice.row = rcSlice.row || {};
                rcSlice.row.start = rcSlice.row.start || 0;
                rcSlice.row.end = rcSlice.row.end || A.length;
                rcSlice.row.step = rcSlice.row.step || 1;
                ml = jStat.arange(rcSlice.row.start, Math.min(A[0].length, rcSlice.row.end), rcSlice.row.step);
                var n = rcSlice.col;
                ml.forEach(function (m, j) {
                    A[m][n] = B[j]
                });
                return A
            }
            if (B[0].length === undefined) {
                B = [B]
            }
            rcSlice.row.start = rcSlice.row.start || 0;
            rcSlice.row.end = rcSlice.row.end || A.length;
            rcSlice.row.step = rcSlice.row.step || 1;
            rcSlice.col.start = rcSlice.col.start || 0;
            rcSlice.col.end = rcSlice.col.end || A[0].length;
            rcSlice.col.step = rcSlice.col.step || 1;
            ml = jStat.arange(rcSlice.row.start, Math.min(A.length, rcSlice.row.end), rcSlice.row.step);
            nl = jStat.arange(rcSlice.col.start, Math.min(A[0].length, rcSlice.col.end), rcSlice.col.step);
            ml.forEach(function (m, i) {
                nl.forEach(function (n, j) {
                    A[m][n] = B[i][j]
                })
            });
            return A
        };
        jStat.diagonal = function diagonal(diagArray) {
            var mat = jStat.zeros(diagArray.length, diagArray.length);
            diagArray.forEach(function (t, i) {
                mat[i][i] = t
            });
            return mat
        };
        jStat.copy = function copy(A) {
            return A.map(function (row) {
                if (isNumber(row)) return row;
                return row.map(function (t) {
                    return t
                })
            })
        };
        var jProto = jStat.prototype;
        jProto.length = 0;
        jProto.push = Array.prototype.push;
        jProto.sort = Array.prototype.sort;
        jProto.splice = Array.prototype.splice;
        jProto.slice = Array.prototype.slice;
        jProto.toArray = function toArray() {
            return this.length > 1 ? slice.call(this) : slice.call(this)[0]
        };
        jProto.map = function map(func, toAlter) {
            return jStat(jStat.map(this, func, toAlter))
        };
        jProto.cumreduce = function cumreduce(func, toAlter) {
            return jStat(jStat.cumreduce(this, func, toAlter))
        };
        jProto.alter = function alter(func) {
            jStat.alter(this, func);
            return this
        };
        (function (funcs) {
            for (var i = 0; i < funcs.length; i++) (function (passfunc) {
                jProto[passfunc] = function (func) {
                    var self = this, results;
                    if (func) {
                        setTimeout(function () {
                            func.call(self, jProto[passfunc].call(self))
                        });
                        return this
                    }
                    results = jStat[passfunc](this);
                    return isArray(results) ? jStat(results) : results
                }
            })(funcs[i])
        })("transpose clear symmetric rows cols dimensions diag antidiag".split(" "));
        (function (funcs) {
            for (var i = 0; i < funcs.length; i++) (function (passfunc) {
                jProto[passfunc] = function (index, func) {
                    var self = this;
                    if (func) {
                        setTimeout(function () {
                            func.call(self, jProto[passfunc].call(self, index))
                        });
                        return this
                    }
                    return jStat(jStat[passfunc](this, index))
                }
            })(funcs[i])
        })("row col".split(" "));
        (function (funcs) {
            for (var i = 0; i < funcs.length; i++) (function (passfunc) {
                jProto[passfunc] = function () {
                    return jStat(jStat[passfunc].apply(null, arguments))
                }
            })(funcs[i])
        })("create zeros ones rand identity".split(" "));
        return jStat
    }(Math);
    (function (jStat, Math) {
        var isFunction = jStat.utils.isFunction;

        function ascNum(a, b) {
            return a - b
        }

        function clip(arg, min, max) {
            return Math.max(min, Math.min(arg, max))
        }

        jStat.sum = function sum(arr) {
            var sum = 0;
            var i = arr.length;
            while (--i >= 0) sum += arr[i];
            return sum
        };
        jStat.sumsqrd = function sumsqrd(arr) {
            var sum = 0;
            var i = arr.length;
            while (--i >= 0) sum += arr[i] * arr[i];
            return sum
        };
        jStat.sumsqerr = function sumsqerr(arr) {
            var mean = jStat.mean(arr);
            var sum = 0;
            var i = arr.length;
            var tmp;
            while (--i >= 0) {
                tmp = arr[i] - mean;
                sum += tmp * tmp
            }
            return sum
        };
        jStat.sumrow = function sumrow(arr) {
            var sum = 0;
            var i = arr.length;
            while (--i >= 0) sum += arr[i];
            return sum
        };
        jStat.product = function product(arr) {
            var prod = 1;
            var i = arr.length;
            while (--i >= 0) prod *= arr[i];
            return prod
        };
        jStat.min = function min(arr) {
            var low = arr[0];
            var i = 0;
            while (++i < arr.length) if (arr[i] < low) low = arr[i];
            return low
        };
        jStat.max = function max(arr) {
            var high = arr[0];
            var i = 0;
            while (++i < arr.length) if (arr[i] > high) high = arr[i];
            return high
        };
        jStat.unique = function unique(arr) {
            var hash = {}, _arr = [];
            for (var i = 0; i < arr.length; i++) {
                if (!hash[arr[i]]) {
                    hash[arr[i]] = true;
                    _arr.push(arr[i])
                }
            }
            return _arr
        };
        jStat.mean = function mean(arr) {
            return jStat.sum(arr) / arr.length
        };
        jStat.meansqerr = function meansqerr(arr) {
            return jStat.sumsqerr(arr) / arr.length
        };
        jStat.geomean = function geomean(arr) {
            return Math.pow(jStat.product(arr), 1 / arr.length)
        };
        jStat.median = function median(arr) {
            var arrlen = arr.length;
            var _arr = arr.slice().sort(ascNum);
            return !(arrlen & 1) ? (_arr[arrlen / 2 - 1] + _arr[arrlen / 2]) / 2 : _arr[arrlen / 2 | 0]
        };
        jStat.cumsum = function cumsum(arr) {
            return jStat.cumreduce(arr, function (a, b) {
                return a + b
            })
        };
        jStat.cumprod = function cumprod(arr) {
            return jStat.cumreduce(arr, function (a, b) {
                return a * b
            })
        };
        jStat.diff = function diff(arr) {
            var diffs = [];
            var arrLen = arr.length;
            var i;
            for (i = 1; i < arrLen; i++) diffs.push(arr[i] - arr[i - 1]);
            return diffs
        };
        jStat.rank = function (arr) {
            var i;
            var distinctNumbers = [];
            var numberCounts = {};
            for (i = 0; i < arr.length; i++) {
                var number = arr[i];
                if (numberCounts[number]) {
                    numberCounts[number]++
                } else {
                    numberCounts[number] = 1;
                    distinctNumbers.push(number)
                }
            }
            var sortedDistinctNumbers = distinctNumbers.sort(ascNum);
            var numberRanks = {};
            var currentRank = 1;
            for (i = 0; i < sortedDistinctNumbers.length; i++) {
                var number = sortedDistinctNumbers[i];
                var count = numberCounts[number];
                var first = currentRank;
                var last = currentRank + count - 1;
                var rank = (first + last) / 2;
                numberRanks[number] = rank;
                currentRank += count
            }
            return arr.map(function (number) {
                return numberRanks[number]
            })
        };
        jStat.mode = function mode(arr) {
            var arrLen = arr.length;
            var _arr = arr.slice().sort(ascNum);
            var count = 1;
            var maxCount = 0;
            var numMaxCount = 0;
            var mode_arr = [];
            var i;
            for (i = 0; i < arrLen; i++) {
                if (_arr[i] === _arr[i + 1]) {
                    count++
                } else {
                    if (count > maxCount) {
                        mode_arr = [_arr[i]];
                        maxCount = count;
                        numMaxCount = 0
                    } else if (count === maxCount) {
                        mode_arr.push(_arr[i]);
                        numMaxCount++
                    }
                    count = 1
                }
            }
            return numMaxCount === 0 ? mode_arr[0] : mode_arr
        };
        jStat.range = function range(arr) {
            return jStat.max(arr) - jStat.min(arr)
        };
        jStat.variance = function variance(arr, flag) {
            return jStat.sumsqerr(arr) / (arr.length - (flag ? 1 : 0))
        };
        jStat.pooledvariance = function pooledvariance(arr) {
            var sumsqerr = arr.reduce(function (a, samples) {
                return a + jStat.sumsqerr(samples)
            }, 0);
            var count = arr.reduce(function (a, samples) {
                return a + samples.length
            }, 0);
            return sumsqerr / (count - arr.length)
        };
        jStat.deviation = function (arr) {
            var mean = jStat.mean(arr);
            var arrlen = arr.length;
            var dev = new Array(arrlen);
            for (var i = 0; i < arrlen; i++) {
                dev[i] = arr[i] - mean
            }
            return dev
        };
        jStat.stdev = function stdev(arr, flag) {
            return Math.sqrt(jStat.variance(arr, flag))
        };
        jStat.pooledstdev = function pooledstdev(arr) {
            return Math.sqrt(jStat.pooledvariance(arr))
        };
        jStat.meandev = function meandev(arr) {
            var mean = jStat.mean(arr);
            var a = [];
            for (var i = arr.length - 1; i >= 0; i--) {
                a.push(Math.abs(arr[i] - mean))
            }
            return jStat.mean(a)
        };
        jStat.meddev = function meddev(arr) {
            var median = jStat.median(arr);
            var a = [];
            for (var i = arr.length - 1; i >= 0; i--) {
                a.push(Math.abs(arr[i] - median))
            }
            return jStat.median(a)
        };
        jStat.coeffvar = function coeffvar(arr) {
            return jStat.stdev(arr) / jStat.mean(arr)
        };
        jStat.quartiles = function quartiles(arr) {
            var arrlen = arr.length;
            var _arr = arr.slice().sort(ascNum);
            return [_arr[Math.round(arrlen / 4) - 1], _arr[Math.round(arrlen / 2) - 1], _arr[Math.round(arrlen * 3 / 4) - 1]]
        };
        jStat.quantiles = function quantiles(arr, quantilesArray, alphap, betap) {
            var sortedArray = arr.slice().sort(ascNum);
            var quantileVals = [quantilesArray.length];
            var n = arr.length;
            var i, p, m, aleph, k, gamma;
            if (typeof alphap === "undefined") alphap = 3 / 8;
            if (typeof betap === "undefined") betap = 3 / 8;
            for (i = 0; i < quantilesArray.length; i++) {
                p = quantilesArray[i];
                m = alphap + p * (1 - alphap - betap);
                aleph = n * p + m;
                k = Math.floor(clip(aleph, 1, n - 1));
                gamma = clip(aleph - k, 0, 1);
                quantileVals[i] = (1 - gamma) * sortedArray[k - 1] + gamma * sortedArray[k]
            }
            return quantileVals
        };
        jStat.percentile = function percentile(arr, k, exclusive) {
            var _arr = arr.slice().sort(ascNum);
            var realIndex = k * (_arr.length + (exclusive ? 1 : -1)) + (exclusive ? 0 : 1);
            var index = parseInt(realIndex);
            var frac = realIndex - index;
            if (index + 1 < _arr.length) {
                return _arr[index - 1] + frac * (_arr[index] - _arr[index - 1])
            } else {
                return _arr[index - 1]
            }
        };
        jStat.percentileOfScore = function percentileOfScore(arr, score, kind) {
            var counter = 0;
            var len = arr.length;
            var strict = false;
            var value, i;
            if (kind === "strict") strict = true;
            for (i = 0; i < len; i++) {
                value = arr[i];
                if (strict && value < score || !strict && value <= score) {
                    counter++
                }
            }
            return counter / len
        };
        jStat.histogram = function histogram(arr, binCnt) {
            binCnt = binCnt || 4;
            var first = jStat.min(arr);
            var binWidth = (jStat.max(arr) - first) / binCnt;
            var len = arr.length;
            var bins = [];
            var i;
            for (i = 0; i < binCnt; i++) bins[i] = 0;
            for (i = 0; i < len; i++) bins[Math.min(Math.floor((arr[i] - first) / binWidth), binCnt - 1)] += 1;
            return bins
        };
        jStat.covariance = function covariance(arr1, arr2) {
            var u = jStat.mean(arr1);
            var v = jStat.mean(arr2);
            var arr1Len = arr1.length;
            var sq_dev = new Array(arr1Len);
            var i;
            for (i = 0; i < arr1Len; i++) sq_dev[i] = (arr1[i] - u) * (arr2[i] - v);
            return jStat.sum(sq_dev) / (arr1Len - 1)
        };
        jStat.corrcoeff = function corrcoeff(arr1, arr2) {
            return jStat.covariance(arr1, arr2) / jStat.stdev(arr1, 1) / jStat.stdev(arr2, 1)
        };
        jStat.spearmancoeff = function (arr1, arr2) {
            arr1 = jStat.rank(arr1);
            arr2 = jStat.rank(arr2);
            return jStat.corrcoeff(arr1, arr2)
        };
        jStat.stanMoment = function stanMoment(arr, n) {
            var mu = jStat.mean(arr);
            var sigma = jStat.stdev(arr);
            var len = arr.length;
            var skewSum = 0;
            for (var i = 0; i < len; i++) skewSum += Math.pow((arr[i] - mu) / sigma, n);
            return skewSum / arr.length
        };
        jStat.skewness = function skewness(arr) {
            return jStat.stanMoment(arr, 3)
        };
        jStat.kurtosis = function kurtosis(arr) {
            return jStat.stanMoment(arr, 4) - 3
        };
        var jProto = jStat.prototype;
        (function (funcs) {
            for (var i = 0; i < funcs.length; i++) (function (passfunc) {
                jProto[passfunc] = function (fullbool, func) {
                    var arr = [];
                    var i = 0;
                    var tmpthis = this;
                    if (isFunction(fullbool)) {
                        func = fullbool;
                        fullbool = false
                    }
                    if (func) {
                        setTimeout(function () {
                            func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool))
                        });
                        return this
                    }
                    if (this.length > 1) {
                        tmpthis = fullbool === true ? this : this.transpose();
                        for (; i < tmpthis.length; i++) arr[i] = jStat[passfunc](tmpthis[i]);
                        return arr
                    }
                    return jStat[passfunc](this[0], fullbool)
                }
            })(funcs[i])
        })("cumsum cumprod".split(" "));
        (function (funcs) {
            for (var i = 0; i < funcs.length; i++) (function (passfunc) {
                jProto[passfunc] = function (fullbool, func) {
                    var arr = [];
                    var i = 0;
                    var tmpthis = this;
                    if (isFunction(fullbool)) {
                        func = fullbool;
                        fullbool = false
                    }
                    if (func) {
                        setTimeout(function () {
                            func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool))
                        });
                        return this
                    }
                    if (this.length > 1) {
                        if (passfunc !== "sumrow") tmpthis = fullbool === true ? this : this.transpose();
                        for (; i < tmpthis.length; i++) arr[i] = jStat[passfunc](tmpthis[i]);
                        return fullbool === true ? jStat[passfunc](jStat.utils.toVector(arr)) : arr
                    }
                    return jStat[passfunc](this[0], fullbool)
                }
            })(funcs[i])
        })(("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr " + "geomean median diff rank mode range variance deviation stdev meandev " + "meddev coeffvar quartiles histogram skewness kurtosis").split(" "));
        (function (funcs) {
            for (var i = 0; i < funcs.length; i++) (function (passfunc) {
                jProto[passfunc] = function () {
                    var arr = [];
                    var i = 0;
                    var tmpthis = this;
                    var args = Array.prototype.slice.call(arguments);
                    var callbackFunction;
                    if (isFunction(args[args.length - 1])) {
                        callbackFunction = args[args.length - 1];
                        var argsToPass = args.slice(0, args.length - 1);
                        setTimeout(function () {
                            callbackFunction.call(tmpthis, jProto[passfunc].apply(tmpthis, argsToPass))
                        });
                        return this
                    } else {
                        callbackFunction = undefined;
                        var curriedFunction = function curriedFunction(vector) {
                            return jStat[passfunc].apply(tmpthis, [vector].concat(args))
                        }
                    }
                    if (this.length > 1) {
                        tmpthis = tmpthis.transpose();
                        for (; i < tmpthis.length; i++) arr[i] = curriedFunction(tmpthis[i]);
                        return arr
                    }
                    return curriedFunction(this[0])
                }
            })(funcs[i])
        })("quantiles percentileOfScore".split(" "))
    })(jStat, Math);
    (function (jStat, Math) {
        jStat.gammaln = function gammaln(x) {
            var j = 0;
            var cof = [76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, .001208650973866179, -5395239384953e-18];
            var ser = 1.000000000190015;
            var xx, y, tmp;
            tmp = (y = xx = x) + 5.5;
            tmp -= (xx + .5) * Math.log(tmp);
            for (; j < 6; j++) ser += cof[j] / ++y;
            return Math.log(2.5066282746310007 * ser / xx) - tmp
        };
        jStat.loggam = function loggam(x) {
            var x0, x2, xp, gl, gl0;
            var k, n;
            var a = [.08333333333333333, -.002777777777777778, .0007936507936507937, -.0005952380952380952, .0008417508417508418, -.001917526917526918, .00641025641025641, -.02955065359477124, .1796443723688307, -1.3924322169059];
            x0 = x;
            n = 0;
            if (x == 1 || x == 2) {
                return 0
            }
            if (x <= 7) {
                n = Math.floor(7 - x);
                x0 = x + n
            }
            x2 = 1 / (x0 * x0);
            xp = 2 * Math.PI;
            gl0 = a[9];
            for (k = 8; k >= 0; k--) {
                gl0 *= x2;
                gl0 += a[k]
            }
            gl = gl0 / x0 + .5 * Math.log(xp) + (x0 - .5) * Math.log(x0) - x0;
            if (x <= 7) {
                for (k = 1; k <= n; k++) {
                    gl -= Math.log(x0 - 1);
                    x0 -= 1
                }
            }
            return gl
        };
        jStat.gammafn = function gammafn(x) {
            var p = [-1.716185138865495, 24.76565080557592, -379.80425647094563, 629.3311553128184, 866.9662027904133, -31451.272968848367, -36144.413418691176, 66456.14382024054];
            var q = [-30.8402300119739, 315.35062697960416, -1015.1563674902192, -3107.771671572311, 22538.11842098015, 4755.846277527881, -134659.9598649693, -115132.2596755535];
            var fact = false;
            var n = 0;
            var xden = 0;
            var xnum = 0;
            var y = x;
            var i, z, yi, res;
            if (x > 171.6243769536076) {
                return Infinity
            }
            if (y <= 0) {
                res = y % 1 + 36e-17;
                if (res) {
                    fact = (!(y & 1) ? 1 : -1) * Math.PI / Math.sin(Math.PI * res);
                    y = 1 - y
                } else {
                    return Infinity
                }
            }
            yi = y;
            if (y < 1) {
                z = y++
            } else {
                z = (y -= n = (y | 0) - 1) - 1
            }
            for (i = 0; i < 8; ++i) {
                xnum = (xnum + p[i]) * z;
                xden = xden * z + q[i]
            }
            res = xnum / xden + 1;
            if (yi < y) {
                res /= yi
            } else if (yi > y) {
                for (i = 0; i < n; ++i) {
                    res *= y;
                    y++
                }
            }
            if (fact) {
                res = fact / res
            }
            return res
        };
        jStat.gammap = function gammap(a, x) {
            return jStat.lowRegGamma(a, x) * jStat.gammafn(a)
        };
        jStat.lowRegGamma = function lowRegGamma(a, x) {
            var aln = jStat.gammaln(a);
            var ap = a;
            var sum = 1 / a;
            var del = sum;
            var b = x + 1 - a;
            var c = 1 / 1e-30;
            var d = 1 / b;
            var h = d;
            var i = 1;
            var ITMAX = -~(Math.log(a >= 1 ? a : 1 / a) * 8.5 + a * .4 + 17);
            var an;
            if (x < 0 || a <= 0) {
                return NaN
            } else if (x < a + 1) {
                for (; i <= ITMAX; i++) {
                    sum += del *= x / ++ap
                }
                return sum * Math.exp(-x + a * Math.log(x) - aln)
            }
            for (; i <= ITMAX; i++) {
                an = -i * (i - a);
                b += 2;
                d = an * d + b;
                c = b + an / c;
                d = 1 / d;
                h *= d * c
            }
            return 1 - h * Math.exp(-x + a * Math.log(x) - aln)
        };
        jStat.factorialln = function factorialln(n) {
            return n < 0 ? NaN : jStat.gammaln(n + 1)
        };
        jStat.factorial = function factorial(n) {
            return n < 0 ? NaN : jStat.gammafn(n + 1)
        };
        jStat.combination = function combination(n, m) {
            return n > 170 || m > 170 ? Math.exp(jStat.combinationln(n, m)) : jStat.factorial(n) / jStat.factorial(m) / jStat.factorial(n - m)
        };
        jStat.combinationln = function combinationln(n, m) {
            return jStat.factorialln(n) - jStat.factorialln(m) - jStat.factorialln(n - m)
        };
        jStat.permutation = function permutation(n, m) {
            return jStat.factorial(n) / jStat.factorial(n - m)
        };
        jStat.betafn = function betafn(x, y) {
            if (x <= 0 || y <= 0) return undefined;
            return x + y > 170 ? Math.exp(jStat.betaln(x, y)) : jStat.gammafn(x) * jStat.gammafn(y) / jStat.gammafn(x + y)
        };
        jStat.betaln = function betaln(x, y) {
            return jStat.gammaln(x) + jStat.gammaln(y) - jStat.gammaln(x + y)
        };
        jStat.betacf = function betacf(x, a, b) {
            var fpmin = 1e-30;
            var m = 1;
            var qab = a + b;
            var qap = a + 1;
            var qam = a - 1;
            var c = 1;
            var d = 1 - qab * x / qap;
            var m2, aa, del, h;
            if (Math.abs(d) < fpmin) d = fpmin;
            d = 1 / d;
            h = d;
            for (; m <= 100; m++) {
                m2 = 2 * m;
                aa = m * (b - m) * x / ((qam + m2) * (a + m2));
                d = 1 + aa * d;
                if (Math.abs(d) < fpmin) d = fpmin;
                c = 1 + aa / c;
                if (Math.abs(c) < fpmin) c = fpmin;
                d = 1 / d;
                h *= d * c;
                aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
                d = 1 + aa * d;
                if (Math.abs(d) < fpmin) d = fpmin;
                c = 1 + aa / c;
                if (Math.abs(c) < fpmin) c = fpmin;
                d = 1 / d;
                del = d * c;
                h *= del;
                if (Math.abs(del - 1) < 3e-7) break
            }
            return h
        };
        jStat.gammapinv = function gammapinv(p, a) {
            var j = 0;
            var a1 = a - 1;
            var EPS = 1e-8;
            var gln = jStat.gammaln(a);
            var x, err, t, u, pp, lna1, afac;
            if (p >= 1) return Math.max(100, a + 100 * Math.sqrt(a));
            if (p <= 0) return 0;
            if (a > 1) {
                lna1 = Math.log(a1);
                afac = Math.exp(a1 * (lna1 - 1) - gln);
                pp = p < .5 ? p : 1 - p;
                t = Math.sqrt(-2 * Math.log(pp));
                x = (2.30753 + t * .27061) / (1 + t * (.99229 + t * .04481)) - t;
                if (p < .5) x = -x;
                x = Math.max(.001, a * Math.pow(1 - 1 / (9 * a) - x / (3 * Math.sqrt(a)), 3))
            } else {
                t = 1 - a * (.253 + a * .12);
                if (p < t) x = Math.pow(p / t, 1 / a); else x = 1 - Math.log(1 - (p - t) / (1 - t))
            }
            for (; j < 12; j++) {
                if (x <= 0) return 0;
                err = jStat.lowRegGamma(a, x) - p;
                if (a > 1) t = afac * Math.exp(-(x - a1) + a1 * (Math.log(x) - lna1)); else t = Math.exp(-x + a1 * Math.log(x) - gln);
                u = err / t;
                x -= t = u / (1 - .5 * Math.min(1, u * ((a - 1) / x - 1)));
                if (x <= 0) x = .5 * (x + t);
                if (Math.abs(t) < EPS * x) break
            }
            return x
        };
        jStat.erf = function erf(x) {
            var cof = [-1.3026537197817094, .6419697923564902, .019476473204185836, -.00956151478680863, -.000946595344482036, .000366839497852761, 42523324806907e-18, -20278578112534e-18, -1624290004647e-18, 130365583558e-17, 1.5626441722e-8, -8.5238095915e-8, 6.529054439e-9, 5.059343495e-9, -9.91364156e-10, -2.27365122e-10, 96467911e-18, 2394038e-18, -6886027e-18, 894487e-18, 313092e-18, -112708e-18, 381e-18, 7106e-18, -1523e-18, -94e-18, 121e-18, -28e-18];
            var j = cof.length - 1;
            var isneg = false;
            var d = 0;
            var dd = 0;
            var t, ty, tmp, res;
            if (x < 0) {
                x = -x;
                isneg = true
            }
            t = 2 / (2 + x);
            ty = 4 * t - 2;
            for (; j > 0; j--) {
                tmp = d;
                d = ty * d - dd + cof[j];
                dd = tmp
            }
            res = t * Math.exp(-x * x + .5 * (cof[0] + ty * d) - dd);
            return isneg ? res - 1 : 1 - res
        };
        jStat.erfc = function erfc(x) {
            return 1 - jStat.erf(x)
        };
        jStat.erfcinv = function erfcinv(p) {
            var j = 0;
            var x, err, t, pp;
            if (p >= 2) return -100;
            if (p <= 0) return 100;
            pp = p < 1 ? p : 2 - p;
            t = Math.sqrt(-2 * Math.log(pp / 2));
            x = -.70711 * ((2.30753 + t * .27061) / (1 + t * (.99229 + t * .04481)) - t);
            for (; j < 2; j++) {
                err = jStat.erfc(x) - pp;
                x += err / (1.1283791670955126 * Math.exp(-x * x) - x * err)
            }
            return p < 1 ? x : -x
        };
        jStat.ibetainv = function ibetainv(p, a, b) {
            var EPS = 1e-8;
            var a1 = a - 1;
            var b1 = b - 1;
            var j = 0;
            var lna, lnb, pp, t, u, err, x, al, h, w, afac;
            if (p <= 0) return 0;
            if (p >= 1) return 1;
            if (a >= 1 && b >= 1) {
                pp = p < .5 ? p : 1 - p;
                t = Math.sqrt(-2 * Math.log(pp));
                x = (2.30753 + t * .27061) / (1 + t * (.99229 + t * .04481)) - t;
                if (p < .5) x = -x;
                al = (x * x - 3) / 6;
                h = 2 / (1 / (2 * a - 1) + 1 / (2 * b - 1));
                w = x * Math.sqrt(al + h) / h - (1 / (2 * b - 1) - 1 / (2 * a - 1)) * (al + 5 / 6 - 2 / (3 * h));
                x = a / (a + b * Math.exp(2 * w))
            } else {
                lna = Math.log(a / (a + b));
                lnb = Math.log(b / (a + b));
                t = Math.exp(a * lna) / a;
                u = Math.exp(b * lnb) / b;
                w = t + u;
                if (p < t / w) x = Math.pow(a * w * p, 1 / a); else x = 1 - Math.pow(b * w * (1 - p), 1 / b)
            }
            afac = -jStat.gammaln(a) - jStat.gammaln(b) + jStat.gammaln(a + b);
            for (; j < 10; j++) {
                if (x === 0 || x === 1) return x;
                err = jStat.ibeta(x, a, b) - p;
                t = Math.exp(a1 * Math.log(x) + b1 * Math.log(1 - x) + afac);
                u = err / t;
                x -= t = u / (1 - .5 * Math.min(1, u * (a1 / x - b1 / (1 - x))));
                if (x <= 0) x = .5 * (x + t);
                if (x >= 1) x = .5 * (x + t + 1);
                if (Math.abs(t) < EPS * x && j > 0) break
            }
            return x
        };
        jStat.ibeta = function ibeta(x, a, b) {
            var bt = x === 0 || x === 1 ? 0 : Math.exp(jStat.gammaln(a + b) - jStat.gammaln(a) - jStat.gammaln(b) + a * Math.log(x) + b * Math.log(1 - x));
            if (x < 0 || x > 1) return false;
            if (x < (a + 1) / (a + b + 2)) return bt * jStat.betacf(x, a, b) / a;
            return 1 - bt * jStat.betacf(1 - x, b, a) / b
        };
        jStat.randn = function randn(n, m) {
            var u, v, x, y, q;
            if (!m) m = n;
            if (n) return jStat.create(n, m, function () {
                return jStat.randn()
            });
            do {
                u = jStat._random_fn();
                v = 1.7156 * (jStat._random_fn() - .5);
                x = u - .449871;
                y = Math.abs(v) + .386595;
                q = x * x + y * (.196 * y - .25472 * x)
            } while (q > .27597 && (q > .27846 || v * v > -4 * Math.log(u) * u * u));
            return v / u
        };
        jStat.randg = function randg(shape, n, m) {
            var oalph = shape;
            var a1, a2, u, v, x, mat;
            if (!m) m = n;
            if (!shape) shape = 1;
            if (n) {
                mat = jStat.zeros(n, m);
                mat.alter(function () {
                    return jStat.randg(shape)
                });
                return mat
            }
            if (shape < 1) shape += 1;
            a1 = shape - 1 / 3;
            a2 = 1 / Math.sqrt(9 * a1);
            do {
                do {
                    x = jStat.randn();
                    v = 1 + a2 * x
                } while (v <= 0);
                v = v * v * v;
                u = jStat._random_fn()
            } while (u > 1 - .331 * Math.pow(x, 4) && Math.log(u) > .5 * x * x + a1 * (1 - v + Math.log(v)));
            if (shape == oalph) return a1 * v;
            do {
                u = jStat._random_fn()
            } while (u === 0);
            return Math.pow(u, 1 / oalph) * a1 * v
        };
        (function (funcs) {
            for (var i = 0; i < funcs.length; i++) (function (passfunc) {
                jStat.fn[passfunc] = function () {
                    return jStat(jStat.map(this, function (value) {
                        return jStat[passfunc](value)
                    }))
                }
            })(funcs[i])
        })("gammaln gammafn factorial factorialln".split(" "));
        (function (funcs) {
            for (var i = 0; i < funcs.length; i++) (function (passfunc) {
                jStat.fn[passfunc] = function () {
                    return jStat(jStat[passfunc].apply(null, arguments))
                }
            })(funcs[i])
        })("randn".split(" "))
    })(jStat, Math);
    (function (jStat, Math) {
        (function (list) {
            for (var i = 0; i < list.length; i++) (function (func) {
                jStat[func] = function (a, b, c) {
                    if (!(this instanceof arguments.callee)) return new arguments.callee(a, b, c);
                    this._a = a;
                    this._b = b;
                    this._c = c;
                    return this
                };
                jStat.fn[func] = function (a, b, c) {
                    var newthis = jStat[func](a, b, c);
                    newthis.data = this;
                    return newthis
                };
                jStat[func].prototype.sample = function (arr) {
                    var a = this._a;
                    var b = this._b;
                    var c = this._c;
                    if (arr) return jStat.alter(arr, function () {
                        return jStat[func].sample(a, b, c)
                    }); else return jStat[func].sample(a, b, c)
                };
                (function (vals) {
                    for (var i = 0; i < vals.length; i++) (function (fnfunc) {
                        jStat[func].prototype[fnfunc] = function (x) {
                            var a = this._a;
                            var b = this._b;
                            var c = this._c;
                            if (!x && x !== 0) x = this.data;
                            if (typeof x !== "number") {
                                return jStat.fn.map.call(x, function (x) {
                                    return jStat[func][fnfunc](x, a, b, c)
                                })
                            }
                            return jStat[func][fnfunc](x, a, b, c)
                        }
                    })(vals[i])
                })("pdf cdf inv".split(" "));
                (function (vals) {
                    for (var i = 0; i < vals.length; i++) (function (fnfunc) {
                        jStat[func].prototype[fnfunc] = function () {
                            return jStat[func][fnfunc](this._a, this._b, this._c)
                        }
                    })(vals[i])
                })("mean median mode variance".split(" "))
            })(list[i])
        })(("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy " + "laplace lognormal noncentralt normal pareto studentt weibull uniform " + "binomial negbin hypgeom poisson triangular tukey arcsine").split(" "));
        jStat.extend(jStat.beta, {
            pdf: function pdf(x, alpha, beta) {
                if (x > 1 || x < 0) return 0;
                if (alpha == 1 && beta == 1) return 1;
                if (alpha < 512 && beta < 512) {
                    return Math.pow(x, alpha - 1) * Math.pow(1 - x, beta - 1) / jStat.betafn(alpha, beta)
                } else {
                    return Math.exp((alpha - 1) * Math.log(x) + (beta - 1) * Math.log(1 - x) - jStat.betaln(alpha, beta))
                }
            }, cdf: function cdf(x, alpha, beta) {
                return x > 1 || x < 0 ? (x > 1) * 1 : jStat.ibeta(x, alpha, beta)
            }, inv: function inv(x, alpha, beta) {
                return jStat.ibetainv(x, alpha, beta)
            }, mean: function mean(alpha, beta) {
                return alpha / (alpha + beta)
            }, median: function median(alpha, beta) {
                return jStat.ibetainv(.5, alpha, beta)
            }, mode: function mode(alpha, beta) {
                return (alpha - 1) / (alpha + beta - 2)
            }, sample: function sample(alpha, beta) {
                var u = jStat.randg(alpha);
                return u / (u + jStat.randg(beta))
            }, variance: function variance(alpha, beta) {
                return alpha * beta / (Math.pow(alpha + beta, 2) * (alpha + beta + 1))
            }
        });
        jStat.extend(jStat.centralF, {
            pdf: function pdf(x, df1, df2) {
                var p, q, f;
                if (x < 0) return 0;
                if (df1 <= 2) {
                    if (x === 0 && df1 < 2) {
                        return Infinity
                    }
                    if (x === 0 && df1 === 2) {
                        return 1
                    }
                    return 1 / jStat.betafn(df1 / 2, df2 / 2) * Math.pow(df1 / df2, df1 / 2) * Math.pow(x, df1 / 2 - 1) * Math.pow(1 + df1 / df2 * x, -(df1 + df2) / 2)
                }
                p = df1 * x / (df2 + x * df1);
                q = df2 / (df2 + x * df1);
                f = df1 * q / 2;
                return f * jStat.binomial.pdf((df1 - 2) / 2, (df1 + df2 - 2) / 2, p)
            }, cdf: function cdf(x, df1, df2) {
                if (x < 0) return 0;
                return jStat.ibeta(df1 * x / (df1 * x + df2), df1 / 2, df2 / 2)
            }, inv: function inv(x, df1, df2) {
                return df2 / (df1 * (1 / jStat.ibetainv(x, df1 / 2, df2 / 2) - 1))
            }, mean: function mean(df1, df2) {
                return df2 > 2 ? df2 / (df2 - 2) : undefined
            }, mode: function mode(df1, df2) {
                return df1 > 2 ? df2 * (df1 - 2) / (df1 * (df2 + 2)) : undefined
            }, sample: function sample(df1, df2) {
                var x1 = jStat.randg(df1 / 2) * 2;
                var x2 = jStat.randg(df2 / 2) * 2;
                return x1 / df1 / (x2 / df2)
            }, variance: function variance(df1, df2) {
                if (df2 <= 4) return undefined;
                return 2 * df2 * df2 * (df1 + df2 - 2) / (df1 * (df2 - 2) * (df2 - 2) * (df2 - 4))
            }
        });
        jStat.extend(jStat.cauchy, {
            pdf: function pdf(x, local, scale) {
                if (scale < 0) {
                    return 0
                }
                return scale / (Math.pow(x - local, 2) + Math.pow(scale, 2)) / Math.PI
            }, cdf: function cdf(x, local, scale) {
                return Math.atan((x - local) / scale) / Math.PI + .5
            }, inv: function (p, local, scale) {
                return local + scale * Math.tan(Math.PI * (p - .5))
            }, median: function median(local) {
                return local
            }, mode: function mode(local) {
                return local
            }, sample: function sample(local, scale) {
                return jStat.randn() * Math.sqrt(1 / (2 * jStat.randg(.5))) * scale + local
            }
        });
        jStat.extend(jStat.chisquare, {
            pdf: function pdf(x, dof) {
                if (x < 0) return 0;
                return x === 0 && dof === 2 ? .5 : Math.exp((dof / 2 - 1) * Math.log(x) - x / 2 - dof / 2 * Math.log(2) - jStat.gammaln(dof / 2))
            }, cdf: function cdf(x, dof) {
                if (x < 0) return 0;
                return jStat.lowRegGamma(dof / 2, x / 2)
            }, inv: function (p, dof) {
                return 2 * jStat.gammapinv(p, .5 * dof)
            }, mean: function (dof) {
                return dof
            }, median: function median(dof) {
                return dof * Math.pow(1 - 2 / (9 * dof), 3)
            }, mode: function mode(dof) {
                return dof - 2 > 0 ? dof - 2 : 0
            }, sample: function sample(dof) {
                return jStat.randg(dof / 2) * 2
            }, variance: function variance(dof) {
                return 2 * dof
            }
        });
        jStat.extend(jStat.exponential, {
            pdf: function pdf(x, rate) {
                return x < 0 ? 0 : rate * Math.exp(-rate * x)
            }, cdf: function cdf(x, rate) {
                return x < 0 ? 0 : 1 - Math.exp(-rate * x)
            }, inv: function (p, rate) {
                return -Math.log(1 - p) / rate
            }, mean: function (rate) {
                return 1 / rate
            }, median: function (rate) {
                return 1 / rate * Math.log(2)
            }, mode: function mode() {
                return 0
            }, sample: function sample(rate) {
                return -1 / rate * Math.log(jStat._random_fn())
            }, variance: function (rate) {
                return Math.pow(rate, -2)
            }
        });
        jStat.extend(jStat.gamma, {
            pdf: function pdf(x, shape, scale) {
                if (x < 0) return 0;
                return x === 0 && shape === 1 ? 1 / scale : Math.exp((shape - 1) * Math.log(x) - x / scale - jStat.gammaln(shape) - shape * Math.log(scale))
            }, cdf: function cdf(x, shape, scale) {
                if (x < 0) return 0;
                return jStat.lowRegGamma(shape, x / scale)
            }, inv: function (p, shape, scale) {
                return jStat.gammapinv(p, shape) * scale
            }, mean: function (shape, scale) {
                return shape * scale
            }, mode: function mode(shape, scale) {
                if (shape > 1) return (shape - 1) * scale;
                return undefined
            }, sample: function sample(shape, scale) {
                return jStat.randg(shape) * scale
            }, variance: function variance(shape, scale) {
                return shape * scale * scale
            }
        });
        jStat.extend(jStat.invgamma, {
            pdf: function pdf(x, shape, scale) {
                if (x <= 0) return 0;
                return Math.exp(-(shape + 1) * Math.log(x) - scale / x - jStat.gammaln(shape) + shape * Math.log(scale))
            }, cdf: function cdf(x, shape, scale) {
                if (x <= 0) return 0;
                return 1 - jStat.lowRegGamma(shape, scale / x)
            }, inv: function (p, shape, scale) {
                return scale / jStat.gammapinv(1 - p, shape)
            }, mean: function (shape, scale) {
                return shape > 1 ? scale / (shape - 1) : undefined
            }, mode: function mode(shape, scale) {
                return scale / (shape + 1)
            }, sample: function sample(shape, scale) {
                return scale / jStat.randg(shape)
            }, variance: function variance(shape, scale) {
                if (shape <= 2) return undefined;
                return scale * scale / ((shape - 1) * (shape - 1) * (shape - 2))
            }
        });
        jStat.extend(jStat.kumaraswamy, {
            pdf: function pdf(x, alpha, beta) {
                if (x === 0 && alpha === 1) return beta; else if (x === 1 && beta === 1) return alpha;
                return Math.exp(Math.log(alpha) + Math.log(beta) + (alpha - 1) * Math.log(x) + (beta - 1) * Math.log(1 - Math.pow(x, alpha)))
            }, cdf: function cdf(x, alpha, beta) {
                if (x < 0) return 0; else if (x > 1) return 1;
                return 1 - Math.pow(1 - Math.pow(x, alpha), beta)
            }, inv: function inv(p, alpha, beta) {
                return Math.pow(1 - Math.pow(1 - p, 1 / beta), 1 / alpha)
            }, mean: function (alpha, beta) {
                return beta * jStat.gammafn(1 + 1 / alpha) * jStat.gammafn(beta) / jStat.gammafn(1 + 1 / alpha + beta)
            }, median: function median(alpha, beta) {
                return Math.pow(1 - Math.pow(2, -1 / beta), 1 / alpha)
            }, mode: function mode(alpha, beta) {
                if (!(alpha >= 1 && beta >= 1 && (alpha !== 1 && beta !== 1))) return undefined;
                return Math.pow((alpha - 1) / (alpha * beta - 1), 1 / alpha)
            }, variance: function variance() {
                throw new Error("variance not yet implemented")
            }
        });
        jStat.extend(jStat.lognormal, {
            pdf: function pdf(x, mu, sigma) {
                if (x <= 0) return 0;
                return Math.exp(-Math.log(x) - .5 * Math.log(2 * Math.PI) - Math.log(sigma) - Math.pow(Math.log(x) - mu, 2) / (2 * sigma * sigma))
            }, cdf: function cdf(x, mu, sigma) {
                if (x < 0) return 0;
                return .5 + .5 * jStat.erf((Math.log(x) - mu) / Math.sqrt(2 * sigma * sigma))
            }, inv: function (p, mu, sigma) {
                return Math.exp(-1.4142135623730951 * sigma * jStat.erfcinv(2 * p) + mu)
            }, mean: function mean(mu, sigma) {
                return Math.exp(mu + sigma * sigma / 2)
            }, median: function median(mu) {
                return Math.exp(mu)
            }, mode: function mode(mu, sigma) {
                return Math.exp(mu - sigma * sigma)
            }, sample: function sample(mu, sigma) {
                return Math.exp(jStat.randn() * sigma + mu)
            }, variance: function variance(mu, sigma) {
                return (Math.exp(sigma * sigma) - 1) * Math.exp(2 * mu + sigma * sigma)
            }
        });
        jStat.extend(jStat.noncentralt, {
            pdf: function pdf(x, dof, ncp) {
                var tol = 1e-14;
                if (Math.abs(ncp) < tol) return jStat.studentt.pdf(x, dof);
                if (Math.abs(x) < tol) {
                    return Math.exp(jStat.gammaln((dof + 1) / 2) - ncp * ncp / 2 - .5 * Math.log(Math.PI * dof) - jStat.gammaln(dof / 2))
                }
                return dof / x * (jStat.noncentralt.cdf(x * Math.sqrt(1 + 2 / dof), dof + 2, ncp) - jStat.noncentralt.cdf(x, dof, ncp))
            }, cdf: function cdf(x, dof, ncp) {
                var tol = 1e-14;
                var min_iterations = 200;
                if (Math.abs(ncp) < tol) return jStat.studentt.cdf(x, dof);
                var flip = false;
                if (x < 0) {
                    flip = true;
                    ncp = -ncp
                }
                var prob = jStat.normal.cdf(-ncp, 0, 1);
                var value = tol + 1;
                var lastvalue = value;
                var y = x * x / (x * x + dof);
                var j = 0;
                var p = Math.exp(-ncp * ncp / 2);
                var q = Math.exp(-ncp * ncp / 2 - .5 * Math.log(2) - jStat.gammaln(3 / 2)) * ncp;
                while (j < min_iterations || lastvalue > tol || value > tol) {
                    lastvalue = value;
                    if (j > 0) {
                        p *= ncp * ncp / (2 * j);
                        q *= ncp * ncp / (2 * (j + 1 / 2))
                    }
                    value = p * jStat.beta.cdf(y, j + .5, dof / 2) + q * jStat.beta.cdf(y, j + 1, dof / 2);
                    prob += .5 * value;
                    j++
                }
                return flip ? 1 - prob : prob
            }
        });
        jStat.extend(jStat.normal, {
            pdf: function pdf(x, mean, std) {
                return Math.exp(-.5 * Math.log(2 * Math.PI) - Math.log(std) - Math.pow(x - mean, 2) / (2 * std * std))
            }, cdf: function cdf(x, mean, std) {
                return .5 * (1 + jStat.erf((x - mean) / Math.sqrt(2 * std * std)))
            }, inv: function (p, mean, std) {
                return -1.4142135623730951 * std * jStat.erfcinv(2 * p) + mean
            }, mean: function (mean) {
                return mean
            }, median: function median(mean) {
                return mean
            }, mode: function (mean) {
                return mean
            }, sample: function sample(mean, std) {
                return jStat.randn() * std + mean
            }, variance: function (mean, std) {
                return std * std
            }
        });
        jStat.extend(jStat.pareto, {
            pdf: function pdf(x, scale, shape) {
                if (x < scale) return 0;
                return shape * Math.pow(scale, shape) / Math.pow(x, shape + 1)
            }, cdf: function cdf(x, scale, shape) {
                if (x < scale) return 0;
                return 1 - Math.pow(scale / x, shape)
            }, inv: function inv(p, scale, shape) {
                return scale / Math.pow(1 - p, 1 / shape)
            }, mean: function mean(scale, shape) {
                if (shape <= 1) return undefined;
                return shape * Math.pow(scale, shape) / (shape - 1)
            }, median: function median(scale, shape) {
                return scale * (shape * Math.SQRT2)
            }, mode: function mode(scale) {
                return scale
            }, variance: function (scale, shape) {
                if (shape <= 2) return undefined;
                return scale * scale * shape / (Math.pow(shape - 1, 2) * (shape - 2))
            }
        });
        jStat.extend(jStat.studentt, {
            pdf: function pdf(x, dof) {
                dof = dof > 1e100 ? 1e100 : dof;
                return 1 / (Math.sqrt(dof) * jStat.betafn(.5, dof / 2)) * Math.pow(1 + x * x / dof, -((dof + 1) / 2))
            }, cdf: function cdf(x, dof) {
                var dof2 = dof / 2;
                return jStat.ibeta((x + Math.sqrt(x * x + dof)) / (2 * Math.sqrt(x * x + dof)), dof2, dof2)
            }, inv: function (p, dof) {
                var x = jStat.ibetainv(2 * Math.min(p, 1 - p), .5 * dof, .5);
                x = Math.sqrt(dof * (1 - x) / x);
                return p > .5 ? x : -x
            }, mean: function mean(dof) {
                return dof > 1 ? 0 : undefined
            }, median: function median() {
                return 0
            }, mode: function mode() {
                return 0
            }, sample: function sample(dof) {
                return jStat.randn() * Math.sqrt(dof / (2 * jStat.randg(dof / 2)))
            }, variance: function variance(dof) {
                return dof > 2 ? dof / (dof - 2) : dof > 1 ? Infinity : undefined
            }
        });
        jStat.extend(jStat.weibull, {
            pdf: function pdf(x, scale, shape) {
                if (x < 0 || scale < 0 || shape < 0) return 0;
                return shape / scale * Math.pow(x / scale, shape - 1) * Math.exp(-Math.pow(x / scale, shape))
            }, cdf: function cdf(x, scale, shape) {
                return x < 0 ? 0 : 1 - Math.exp(-Math.pow(x / scale, shape))
            }, inv: function (p, scale, shape) {
                return scale * Math.pow(-Math.log(1 - p), 1 / shape)
            }, mean: function (scale, shape) {
                return scale * jStat.gammafn(1 + 1 / shape)
            }, median: function median(scale, shape) {
                return scale * Math.pow(Math.log(2), 1 / shape)
            }, mode: function mode(scale, shape) {
                if (shape <= 1) return 0;
                return scale * Math.pow((shape - 1) / shape, 1 / shape)
            }, sample: function sample(scale, shape) {
                return scale * Math.pow(-Math.log(jStat._random_fn()), 1 / shape)
            }, variance: function variance(scale, shape) {
                return scale * scale * jStat.gammafn(1 + 2 / shape) - Math.pow(jStat.weibull.mean(scale, shape), 2)
            }
        });
        jStat.extend(jStat.uniform, {
            pdf: function pdf(x, a, b) {
                return x < a || x > b ? 0 : 1 / (b - a)
            }, cdf: function cdf(x, a, b) {
                if (x < a) return 0; else if (x < b) return (x - a) / (b - a);
                return 1
            }, inv: function (p, a, b) {
                return a + p * (b - a)
            }, mean: function mean(a, b) {
                return .5 * (a + b)
            }, median: function median(a, b) {
                return jStat.mean(a, b)
            }, mode: function mode() {
                throw new Error("mode is not yet implemented")
            }, sample: function sample(a, b) {
                return a / 2 + b / 2 + (b / 2 - a / 2) * (2 * jStat._random_fn() - 1)
            }, variance: function variance(a, b) {
                return Math.pow(b - a, 2) / 12
            }
        });

        function betinc(x, a, b, eps) {
            var a0 = 0;
            var b0 = 1;
            var a1 = 1;
            var b1 = 1;
            var m9 = 0;
            var a2 = 0;
            var c9;
            while (Math.abs((a1 - a2) / a1) > eps) {
                a2 = a1;
                c9 = -(a + m9) * (a + b + m9) * x / (a + 2 * m9) / (a + 2 * m9 + 1);
                a0 = a1 + c9 * a0;
                b0 = b1 + c9 * b0;
                m9 = m9 + 1;
                c9 = m9 * (b - m9) * x / (a + 2 * m9 - 1) / (a + 2 * m9);
                a1 = a0 + c9 * a1;
                b1 = b0 + c9 * b1;
                a0 = a0 / b1;
                b0 = b0 / b1;
                a1 = a1 / b1;
                b1 = 1
            }
            return a1 / a
        }

        jStat.extend(jStat.binomial, {
            pdf: function pdf(k, n, p) {
                return p === 0 || p === 1 ? n * p === k ? 1 : 0 : jStat.combination(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k)
            }, cdf: function cdf(x, n, p) {
                var betacdf;
                var eps = 1e-10;
                if (x < 0) return 0;
                if (x >= n) return 1;
                if (p < 0 || p > 1 || n <= 0) return NaN;
                x = Math.floor(x);
                var z = p;
                var a = x + 1;
                var b = n - x;
                var s = a + b;
                var bt = Math.exp(jStat.gammaln(s) - jStat.gammaln(b) - jStat.gammaln(a) + a * Math.log(z) + b * Math.log(1 - z));
                if (z < (a + 1) / (s + 2)) betacdf = bt * betinc(z, a, b, eps); else betacdf = 1 - bt * betinc(1 - z, b, a, eps);
                return Math.round((1 - betacdf) * (1 / eps)) / (1 / eps)
            }
        });
        jStat.extend(jStat.negbin, {
            pdf: function pdf(k, r, p) {
                if (k !== k >>> 0) return false;
                if (k < 0) return 0;
                return jStat.combination(k + r - 1, r - 1) * Math.pow(1 - p, k) * Math.pow(p, r)
            }, cdf: function cdf(x, r, p) {
                var sum = 0, k = 0;
                if (x < 0) return 0;
                for (; k <= x; k++) {
                    sum += jStat.negbin.pdf(k, r, p)
                }
                return sum
            }
        });
        jStat.extend(jStat.hypgeom, {
            pdf: function pdf(k, N, m, n) {
                if (k !== k | 0) {
                    return false
                } else if (k < 0 || k < m - (N - n)) {
                    return 0
                } else if (k > n || k > m) {
                    return 0
                } else if (m * 2 > N) {
                    if (n * 2 > N) {
                        return jStat.hypgeom.pdf(N - m - n + k, N, N - m, N - n)
                    } else {
                        return jStat.hypgeom.pdf(n - k, N, N - m, n)
                    }
                } else if (n * 2 > N) {
                    return jStat.hypgeom.pdf(m - k, N, m, N - n)
                } else if (m < n) {
                    return jStat.hypgeom.pdf(k, N, n, m)
                } else {
                    var scaledPDF = 1;
                    var samplesDone = 0;
                    for (var i = 0; i < k; i++) {
                        while (scaledPDF > 1 && samplesDone < n) {
                            scaledPDF *= 1 - m / (N - samplesDone);
                            samplesDone++
                        }
                        scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1))
                    }
                    for (; samplesDone < n; samplesDone++) {
                        scaledPDF *= 1 - m / (N - samplesDone)
                    }
                    return Math.min(1, Math.max(0, scaledPDF))
                }
            }, cdf: function cdf(x, N, m, n) {
                if (x < 0 || x < m - (N - n)) {
                    return 0
                } else if (x >= n || x >= m) {
                    return 1
                } else if (m * 2 > N) {
                    if (n * 2 > N) {
                        return jStat.hypgeom.cdf(N - m - n + x, N, N - m, N - n)
                    } else {
                        return 1 - jStat.hypgeom.cdf(n - x - 1, N, N - m, n)
                    }
                } else if (n * 2 > N) {
                    return 1 - jStat.hypgeom.cdf(m - x - 1, N, m, N - n)
                } else if (m < n) {
                    return jStat.hypgeom.cdf(x, N, n, m)
                } else {
                    var scaledCDF = 1;
                    var scaledPDF = 1;
                    var samplesDone = 0;
                    for (var i = 0; i < x; i++) {
                        while (scaledCDF > 1 && samplesDone < n) {
                            var factor = 1 - m / (N - samplesDone);
                            scaledPDF *= factor;
                            scaledCDF *= factor;
                            samplesDone++
                        }
                        scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1));
                        scaledCDF += scaledPDF
                    }
                    for (; samplesDone < n; samplesDone++) {
                        scaledCDF *= 1 - m / (N - samplesDone)
                    }
                    return Math.min(1, Math.max(0, scaledCDF))
                }
            }
        });
        jStat.extend(jStat.poisson, {
            pdf: function pdf(k, l) {
                if (l < 0 || k % 1 !== 0 || k < 0) {
                    return 0
                }
                return Math.pow(l, k) * Math.exp(-l) / jStat.factorial(k)
            }, cdf: function cdf(x, l) {
                var sumarr = [], k = 0;
                if (x < 0) return 0;
                for (; k <= x; k++) {
                    sumarr.push(jStat.poisson.pdf(k, l))
                }
                return jStat.sum(sumarr)
            }, mean: function (l) {
                return l
            }, variance: function (l) {
                return l
            }, sampleSmall: function sampleSmall(l) {
                var p = 1, k = 0, L = Math.exp(-l);
                do {
                    k++;
                    p *= jStat._random_fn()
                } while (p > L);
                return k - 1
            }, sampleLarge: function sampleLarge(l) {
                var lam = l;
                var k;
                var U, V, slam, loglam, a, b, invalpha, vr, us;
                slam = Math.sqrt(lam);
                loglam = Math.log(lam);
                b = .931 + 2.53 * slam;
                a = -.059 + .02483 * b;
                invalpha = 1.1239 + 1.1328 / (b - 3.4);
                vr = .9277 - 3.6224 / (b - 2);
                while (1) {
                    U = Math.random() - .5;
                    V = Math.random();
                    us = .5 - Math.abs(U);
                    k = Math.floor((2 * a / us + b) * U + lam + .43);
                    if (us >= .07 && V <= vr) {
                        return k
                    }
                    if (k < 0 || us < .013 && V > us) {
                        continue
                    }
                    if (Math.log(V) + Math.log(invalpha) - Math.log(a / (us * us) + b) <= -lam + k * loglam - jStat.loggam(k + 1)) {
                        return k
                    }
                }
            }, sample: function sample(l) {
                if (l < 10) return this.sampleSmall(l); else return this.sampleLarge(l)
            }
        });
        jStat.extend(jStat.triangular, {
            pdf: function pdf(x, a, b, c) {
                if (b <= a || c < a || c > b) {
                    return NaN
                } else {
                    if (x < a || x > b) {
                        return 0
                    } else if (x < c) {
                        return 2 * (x - a) / ((b - a) * (c - a))
                    } else if (x === c) {
                        return 2 / (b - a)
                    } else {
                        return 2 * (b - x) / ((b - a) * (b - c))
                    }
                }
            }, cdf: function cdf(x, a, b, c) {
                if (b <= a || c < a || c > b) return NaN;
                if (x <= a) return 0; else if (x >= b) return 1;
                if (x <= c) return Math.pow(x - a, 2) / ((b - a) * (c - a)); else return 1 - Math.pow(b - x, 2) / ((b - a) * (b - c))
            }, inv: function inv(p, a, b, c) {
                if (b <= a || c < a || c > b) {
                    return NaN
                } else {
                    if (p <= (c - a) / (b - a)) {
                        return a + (b - a) * Math.sqrt(p * ((c - a) / (b - a)))
                    } else {
                        return a + (b - a) * (1 - Math.sqrt((1 - p) * (1 - (c - a) / (b - a))))
                    }
                }
            }, mean: function mean(a, b, c) {
                return (a + b + c) / 3
            }, median: function median(a, b, c) {
                if (c <= (a + b) / 2) {
                    return b - Math.sqrt((b - a) * (b - c)) / Math.sqrt(2)
                } else if (c > (a + b) / 2) {
                    return a + Math.sqrt((b - a) * (c - a)) / Math.sqrt(2)
                }
            }, mode: function mode(a, b, c) {
                return c
            }, sample: function sample(a, b, c) {
                var u = jStat._random_fn();
                if (u < (c - a) / (b - a)) return a + Math.sqrt(u * (b - a) * (c - a));
                return b - Math.sqrt((1 - u) * (b - a) * (b - c))
            }, variance: function variance(a, b, c) {
                return (a * a + b * b + c * c - a * b - a * c - b * c) / 18
            }
        });
        jStat.extend(jStat.arcsine, {
            pdf: function pdf(x, a, b) {
                if (b <= a) return NaN;
                return x <= a || x >= b ? 0 : 2 / Math.PI * Math.pow(Math.pow(b - a, 2) - Math.pow(2 * x - a - b, 2), -.5)
            }, cdf: function cdf(x, a, b) {
                if (x < a) return 0; else if (x < b) return 2 / Math.PI * Math.asin(Math.sqrt((x - a) / (b - a)));
                return 1
            }, inv: function (p, a, b) {
                return a + (.5 - .5 * Math.cos(Math.PI * p)) * (b - a)
            }, mean: function mean(a, b) {
                if (b <= a) return NaN;
                return (a + b) / 2
            }, median: function median(a, b) {
                if (b <= a) return NaN;
                return (a + b) / 2
            }, mode: function mode() {
                throw new Error("mode is not yet implemented")
            }, sample: function sample(a, b) {
                return (a + b) / 2 + (b - a) / 2 * Math.sin(2 * Math.PI * jStat.uniform.sample(0, 1))
            }, variance: function variance(a, b) {
                if (b <= a) return NaN;
                return Math.pow(b - a, 2) / 8
            }
        });

        function laplaceSign(x) {
            return x / Math.abs(x)
        }

        jStat.extend(jStat.laplace, {
            pdf: function pdf(x, mu, b) {
                return b <= 0 ? 0 : Math.exp(-Math.abs(x - mu) / b) / (2 * b)
            }, cdf: function cdf(x, mu, b) {
                if (b <= 0) {
                    return 0
                }
                if (x < mu) {
                    return .5 * Math.exp((x - mu) / b)
                } else {
                    return 1 - .5 * Math.exp(-(x - mu) / b)
                }
            }, mean: function (mu) {
                return mu
            }, median: function (mu) {
                return mu
            }, mode: function (mu) {
                return mu
            }, variance: function (mu, b) {
                return 2 * b * b
            }, sample: function sample(mu, b) {
                var u = jStat._random_fn() - .5;
                return mu - b * laplaceSign(u) * Math.log(1 - 2 * Math.abs(u))
            }
        });

        function tukeyWprob(w, rr, cc) {
            var nleg = 12;
            var ihalf = 6;
            var C1 = -30;
            var C2 = -50;
            var C3 = 60;
            var bb = 8;
            var wlar = 3;
            var wincr1 = 2;
            var wincr2 = 3;
            var xleg = [.9815606342467192, .9041172563704749, .7699026741943047, .5873179542866175, .3678314989981802, .1252334085114689];
            var aleg = [.04717533638651183, .10693932599531843, .16007832854334622, .20316742672306592, .2334925365383548, .24914704581340277];
            var qsqz = w * .5;
            if (qsqz >= bb) return 1;
            var pr_w = 2 * jStat.normal.cdf(qsqz, 0, 1, 1, 0) - 1;
            if (pr_w >= Math.exp(C2 / cc)) pr_w = Math.pow(pr_w, cc); else pr_w = 0;
            var wincr;
            if (w > wlar) wincr = wincr1; else wincr = wincr2;
            var blb = qsqz;
            var binc = (bb - qsqz) / wincr;
            var bub = blb + binc;
            var einsum = 0;
            var cc1 = cc - 1;
            for (var wi = 1; wi <= wincr; wi++) {
                var elsum = 0;
                var a = .5 * (bub + blb);
                var b = .5 * (bub - blb);
                for (var jj = 1; jj <= nleg; jj++) {
                    var j, xx;
                    if (ihalf < jj) {
                        j = nleg - jj + 1;
                        xx = xleg[j - 1]
                    } else {
                        j = jj;
                        xx = -xleg[j - 1]
                    }
                    var c = b * xx;
                    var ac = a + c;
                    var qexpo = ac * ac;
                    if (qexpo > C3) break;
                    var pplus = 2 * jStat.normal.cdf(ac, 0, 1, 1, 0);
                    var pminus = 2 * jStat.normal.cdf(ac, w, 1, 1, 0);
                    var rinsum = pplus * .5 - pminus * .5;
                    if (rinsum >= Math.exp(C1 / cc1)) {
                        rinsum = aleg[j - 1] * Math.exp(-(.5 * qexpo)) * Math.pow(rinsum, cc1);
                        elsum += rinsum
                    }
                }
                elsum *= 2 * b * cc / Math.sqrt(2 * Math.PI);
                einsum += elsum;
                blb = bub;
                bub += binc
            }
            pr_w += einsum;
            if (pr_w <= Math.exp(C1 / rr)) return 0;
            pr_w = Math.pow(pr_w, rr);
            if (pr_w >= 1) return 1;
            return pr_w
        }

        function tukeyQinv(p, c, v) {
            var p0 = .322232421088;
            var q0 = .099348462606;
            var p1 = -1;
            var q1 = .588581570495;
            var p2 = -.342242088547;
            var q2 = .531103462366;
            var p3 = -.204231210125;
            var q3 = .10353775285;
            var p4 = -453642210148e-16;
            var q4 = .0038560700634;
            var c1 = .8832;
            var c2 = .2368;
            var c3 = 1.214;
            var c4 = 1.208;
            var c5 = 1.4142;
            var vmax = 120;
            var ps = .5 - .5 * p;
            var yi = Math.sqrt(Math.log(1 / (ps * ps)));
            var t = yi + ((((yi * p4 + p3) * yi + p2) * yi + p1) * yi + p0) / ((((yi * q4 + q3) * yi + q2) * yi + q1) * yi + q0);
            if (v < vmax) t += (t * t * t + t) / v / 4;
            var q = c1 - c2 * t;
            if (v < vmax) q += -c3 / v + c4 * t / v;
            return t * (q * Math.log(c - 1) + c5)
        }

        jStat.extend(jStat.tukey, {
            cdf: function cdf(q, nmeans, df) {
                var rr = 1;
                var cc = nmeans;
                var nlegq = 16;
                var ihalfq = 8;
                var eps1 = -30;
                var eps2 = 1e-14;
                var dhaf = 100;
                var dquar = 800;
                var deigh = 5e3;
                var dlarg = 25e3;
                var ulen1 = 1;
                var ulen2 = .5;
                var ulen3 = .25;
                var ulen4 = .125;
                var xlegq = [.9894009349916499, .9445750230732326, .8656312023878318, .755404408355003, .6178762444026438, .45801677765722737, .2816035507792589, .09501250983763744];
                var alegq = [.027152459411754096, .062253523938647894, .09515851168249279, .12462897125553388, .14959598881657674, .16915651939500254, .18260341504492358, .1894506104550685];
                if (q <= 0) return 0;
                if (df < 2 || rr < 1 || cc < 2) return NaN;
                if (!Number.isFinite(q)) return 1;
                if (df > dlarg) return tukeyWprob(q, rr, cc);
                var f2 = df * .5;
                var f2lf = f2 * Math.log(df) - df * Math.log(2) - jStat.gammaln(f2);
                var f21 = f2 - 1;
                var ff4 = df * .25;
                var ulen;
                if (df <= dhaf) ulen = ulen1; else if (df <= dquar) ulen = ulen2; else if (df <= deigh) ulen = ulen3; else ulen = ulen4;
                f2lf += Math.log(ulen);
                var ans = 0;
                for (var i = 1; i <= 50; i++) {
                    var otsum = 0;
                    var twa1 = (2 * i - 1) * ulen;
                    for (var jj = 1; jj <= nlegq; jj++) {
                        var j, t1;
                        if (ihalfq < jj) {
                            j = jj - ihalfq - 1;
                            t1 = f2lf + f21 * Math.log(twa1 + xlegq[j] * ulen) - (xlegq[j] * ulen + twa1) * ff4
                        } else {
                            j = jj - 1;
                            t1 = f2lf + f21 * Math.log(twa1 - xlegq[j] * ulen) + (xlegq[j] * ulen - twa1) * ff4
                        }
                        var qsqz;
                        if (t1 >= eps1) {
                            if (ihalfq < jj) {
                                qsqz = q * Math.sqrt((xlegq[j] * ulen + twa1) * .5)
                            } else {
                                qsqz = q * Math.sqrt((-(xlegq[j] * ulen) + twa1) * .5)
                            }
                            var wprb = tukeyWprob(qsqz, rr, cc);
                            var rotsum = wprb * alegq[j] * Math.exp(t1);
                            otsum += rotsum
                        }
                    }
                    if (i * ulen >= 1 && otsum <= eps2) break;
                    ans += otsum
                }
                if (otsum > eps2) {
                    throw new Error("tukey.cdf failed to converge")
                }
                if (ans > 1) ans = 1;
                return ans
            }, inv: function (p, nmeans, df) {
                var rr = 1;
                var cc = nmeans;
                var eps = 1e-4;
                var maxiter = 50;
                if (df < 2 || rr < 1 || cc < 2) return NaN;
                if (p < 0 || p > 1) return NaN;
                if (p === 0) return 0;
                if (p === 1) return Infinity;
                var x0 = tukeyQinv(p, cc, df);
                var valx0 = jStat.tukey.cdf(x0, nmeans, df) - p;
                var x1;
                if (valx0 > 0) x1 = Math.max(0, x0 - 1); else x1 = x0 + 1;
                var valx1 = jStat.tukey.cdf(x1, nmeans, df) - p;
                var ans;
                for (var iter = 1; iter < maxiter; iter++) {
                    ans = x1 - valx1 * (x1 - x0) / (valx1 - valx0);
                    valx0 = valx1;
                    x0 = x1;
                    if (ans < 0) {
                        ans = 0;
                        valx1 = -p
                    }
                    valx1 = jStat.tukey.cdf(ans, nmeans, df) - p;
                    x1 = ans;
                    var xabs = Math.abs(x1 - x0);
                    if (xabs < eps) return ans
                }
                throw new Error("tukey.inv failed to converge")
            }
        })
    })(jStat, Math);
    (function (jStat, Math) {
        var push = Array.prototype.push;
        var isArray = jStat.utils.isArray;

        function isUsable(arg) {
            return isArray(arg) || arg instanceof jStat
        }

        jStat.extend({
            add: function add(arr, arg) {
                if (isUsable(arg)) {
                    if (!isUsable(arg[0])) arg = [arg];
                    return jStat.map(arr, function (value, row, col) {
                        return value + arg[row][col]
                    })
                }
                return jStat.map(arr, function (value) {
                    return value + arg
                })
            }, subtract: function subtract(arr, arg) {
                if (isUsable(arg)) {
                    if (!isUsable(arg[0])) arg = [arg];
                    return jStat.map(arr, function (value, row, col) {
                        return value - arg[row][col] || 0
                    })
                }
                return jStat.map(arr, function (value) {
                    return value - arg
                })
            }, divide: function divide(arr, arg) {
                if (isUsable(arg)) {
                    if (!isUsable(arg[0])) arg = [arg];
                    return jStat.multiply(arr, jStat.inv(arg))
                }
                return jStat.map(arr, function (value) {
                    return value / arg
                })
            }, multiply: function multiply(arr, arg) {
                var row, col, nrescols, sum, nrow, ncol, res, rescols;
                if (arr.length === undefined && arg.length === undefined) {
                    return arr * arg
                }
                nrow = arr.length, ncol = arr[0].length, res = jStat.zeros(nrow, nrescols = isUsable(arg) ? arg[0].length : ncol), rescols = 0;
                if (isUsable(arg)) {
                    for (; rescols < nrescols; rescols++) {
                        for (row = 0; row < nrow; row++) {
                            sum = 0;
                            for (col = 0; col < ncol; col++) sum += arr[row][col] * arg[col][rescols];
                            res[row][rescols] = sum
                        }
                    }
                    return nrow === 1 && rescols === 1 ? res[0][0] : res
                }
                return jStat.map(arr, function (value) {
                    return value * arg
                })
            }, outer: function outer(A, B) {
                return jStat.multiply(A.map(function (t) {
                    return [t]
                }), [B])
            }, dot: function dot(arr, arg) {
                if (!isUsable(arr[0])) arr = [arr];
                if (!isUsable(arg[0])) arg = [arg];
                var left = arr[0].length === 1 && arr.length !== 1 ? jStat.transpose(arr) : arr,
                    right = arg[0].length === 1 && arg.length !== 1 ? jStat.transpose(arg) : arg, res = [], row = 0,
                    nrow = left.length, ncol = left[0].length, sum, col;
                for (; row < nrow; row++) {
                    res[row] = [];
                    sum = 0;
                    for (col = 0; col < ncol; col++) sum += left[row][col] * right[row][col];
                    res[row] = sum
                }
                return res.length === 1 ? res[0] : res
            }, pow: function pow(arr, arg) {
                return jStat.map(arr, function (value) {
                    return Math.pow(value, arg)
                })
            }, exp: function exp(arr) {
                return jStat.map(arr, function (value) {
                    return Math.exp(value)
                })
            }, log: function exp(arr) {
                return jStat.map(arr, function (value) {
                    return Math.log(value)
                })
            }, abs: function abs(arr) {
                return jStat.map(arr, function (value) {
                    return Math.abs(value)
                })
            }, norm: function norm(arr, p) {
                var nnorm = 0, i = 0;
                if (isNaN(p)) p = 2;
                if (isUsable(arr[0])) arr = arr[0];
                for (; i < arr.length; i++) {
                    nnorm += Math.pow(Math.abs(arr[i]), p)
                }
                return Math.pow(nnorm, 1 / p)
            }, angle: function angle(arr, arg) {
                return Math.acos(jStat.dot(arr, arg) / (jStat.norm(arr) * jStat.norm(arg)))
            }, aug: function aug(a, b) {
                var newarr = [];
                var i;
                for (i = 0; i < a.length; i++) {
                    newarr.push(a[i].slice())
                }
                for (i = 0; i < newarr.length; i++) {
                    push.apply(newarr[i], b[i])
                }
                return newarr
            }, inv: function inv(a) {
                var rows = a.length;
                var cols = a[0].length;
                var b = jStat.identity(rows, cols);
                var c = jStat.gauss_jordan(a, b);
                var result = [];
                var i = 0;
                var j;
                for (; i < rows; i++) {
                    result[i] = [];
                    for (j = cols; j < c[0].length; j++) result[i][j - cols] = c[i][j]
                }
                return result
            }, det: function det(a) {
                var alen = a.length, alend = alen * 2, vals = new Array(alend), rowshift = alen - 1,
                    colshift = alend - 1, mrow = rowshift - alen + 1, mcol = colshift, i = 0, result = 0, j;
                if (alen === 2) {
                    return a[0][0] * a[1][1] - a[0][1] * a[1][0]
                }
                for (; i < alend; i++) {
                    vals[i] = 1
                }
                for (i = 0; i < alen; i++) {
                    for (j = 0; j < alen; j++) {
                        vals[mrow < 0 ? mrow + alen : mrow] *= a[i][j];
                        vals[mcol < alen ? mcol + alen : mcol] *= a[i][j];
                        mrow++;
                        mcol--
                    }
                    mrow = --rowshift - alen + 1;
                    mcol = --colshift
                }
                for (i = 0; i < alen; i++) {
                    result += vals[i]
                }
                for (; i < alend; i++) {
                    result -= vals[i]
                }
                return result
            }, gauss_elimination: function gauss_elimination(a, b) {
                var i = 0, j = 0, n = a.length, m = a[0].length, factor = 1, sum = 0, x = [], maug, pivot, temp, k;
                a = jStat.aug(a, b);
                maug = a[0].length;
                for (i = 0; i < n; i++) {
                    pivot = a[i][i];
                    j = i;
                    for (k = i + 1; k < m; k++) {
                        if (pivot < Math.abs(a[k][i])) {
                            pivot = a[k][i];
                            j = k
                        }
                    }
                    if (j != i) {
                        for (k = 0; k < maug; k++) {
                            temp = a[i][k];
                            a[i][k] = a[j][k];
                            a[j][k] = temp
                        }
                    }
                    for (j = i + 1; j < n; j++) {
                        factor = a[j][i] / a[i][i];
                        for (k = i; k < maug; k++) {
                            a[j][k] = a[j][k] - factor * a[i][k]
                        }
                    }
                }
                for (i = n - 1; i >= 0; i--) {
                    sum = 0;
                    for (j = i + 1; j <= n - 1; j++) {
                        sum = sum + x[j] * a[i][j]
                    }
                    x[i] = (a[i][maug - 1] - sum) / a[i][i]
                }
                return x
            }, gauss_jordan: function gauss_jordan(a, b) {
                var m = jStat.aug(a, b);
                var h = m.length;
                var w = m[0].length;
                var c = 0;
                var x, y, y2;
                for (y = 0; y < h; y++) {
                    var maxrow = y;
                    for (y2 = y + 1; y2 < h; y2++) {
                        if (Math.abs(m[y2][y]) > Math.abs(m[maxrow][y])) maxrow = y2
                    }
                    var tmp = m[y];
                    m[y] = m[maxrow];
                    m[maxrow] = tmp;
                    for (y2 = y + 1; y2 < h; y2++) {
                        c = m[y2][y] / m[y][y];
                        for (x = y; x < w; x++) {
                            m[y2][x] -= m[y][x] * c
                        }
                    }
                }
                for (y = h - 1; y >= 0; y--) {
                    c = m[y][y];
                    for (y2 = 0; y2 < y; y2++) {
                        for (x = w - 1; x > y - 1; x--) {
                            m[y2][x] -= m[y][x] * m[y2][y] / c
                        }
                    }
                    m[y][y] /= c;
                    for (x = h; x < w; x++) {
                        m[y][x] /= c
                    }
                }
                return m
            }, triaUpSolve: function triaUpSolve(A, b) {
                var size = A[0].length;
                var x = jStat.zeros(1, size)[0];
                var parts;
                var matrix_mode = false;
                if (b[0].length != undefined) {
                    b = b.map(function (i) {
                        return i[0]
                    });
                    matrix_mode = true
                }
                jStat.arange(size - 1, -1, -1).forEach(function (i) {
                    parts = jStat.arange(i + 1, size).map(function (j) {
                        return x[j] * A[i][j]
                    });
                    x[i] = (b[i] - jStat.sum(parts)) / A[i][i]
                });
                if (matrix_mode) return x.map(function (i) {
                    return [i]
                });
                return x
            }, triaLowSolve: function triaLowSolve(A, b) {
                var size = A[0].length;
                var x = jStat.zeros(1, size)[0];
                var parts;
                var matrix_mode = false;
                if (b[0].length != undefined) {
                    b = b.map(function (i) {
                        return i[0]
                    });
                    matrix_mode = true
                }
                jStat.arange(size).forEach(function (i) {
                    parts = jStat.arange(i).map(function (j) {
                        return A[i][j] * x[j]
                    });
                    x[i] = (b[i] - jStat.sum(parts)) / A[i][i]
                });
                if (matrix_mode) return x.map(function (i) {
                    return [i]
                });
                return x
            }, lu: function lu(A) {
                var size = A.length;
                var L = jStat.identity(size);
                var R = jStat.zeros(A.length, A[0].length);
                var parts;
                jStat.arange(size).forEach(function (t) {
                    R[0][t] = A[0][t]
                });
                jStat.arange(1, size).forEach(function (l) {
                    jStat.arange(l).forEach(function (i) {
                        parts = jStat.arange(i).map(function (jj) {
                            return L[l][jj] * R[jj][i]
                        });
                        L[l][i] = (A[l][i] - jStat.sum(parts)) / R[i][i]
                    });
                    jStat.arange(l, size).forEach(function (j) {
                        parts = jStat.arange(l).map(function (jj) {
                            return L[l][jj] * R[jj][j]
                        });
                        R[l][j] = A[parts.length][j] - jStat.sum(parts)
                    })
                });
                return [L, R]
            }, cholesky: function cholesky(A) {
                var size = A.length;
                var T = jStat.zeros(A.length, A[0].length);
                var parts;
                jStat.arange(size).forEach(function (i) {
                    parts = jStat.arange(i).map(function (t) {
                        return Math.pow(T[i][t], 2)
                    });
                    T[i][i] = Math.sqrt(A[i][i] - jStat.sum(parts));
                    jStat.arange(i + 1, size).forEach(function (j) {
                        parts = jStat.arange(i).map(function (t) {
                            return T[i][t] * T[j][t]
                        });
                        T[j][i] = (A[i][j] - jStat.sum(parts)) / T[i][i]
                    })
                });
                return T
            }, gauss_jacobi: function gauss_jacobi(a, b, x, r) {
                var i = 0;
                var j = 0;
                var n = a.length;
                var l = [];
                var u = [];
                var d = [];
                var xv, c, h, xk;
                for (; i < n; i++) {
                    l[i] = [];
                    u[i] = [];
                    d[i] = [];
                    for (j = 0; j < n; j++) {
                        if (i > j) {
                            l[i][j] = a[i][j];
                            u[i][j] = d[i][j] = 0
                        } else if (i < j) {
                            u[i][j] = a[i][j];
                            l[i][j] = d[i][j] = 0
                        } else {
                            d[i][j] = a[i][j];
                            l[i][j] = u[i][j] = 0
                        }
                    }
                }
                h = jStat.multiply(jStat.multiply(jStat.inv(d), jStat.add(l, u)), -1);
                c = jStat.multiply(jStat.inv(d), b);
                xv = x;
                xk = jStat.add(jStat.multiply(h, x), c);
                i = 2;
                while (Math.abs(jStat.norm(jStat.subtract(xk, xv))) > r) {
                    xv = xk;
                    xk = jStat.add(jStat.multiply(h, xv), c);
                    i++
                }
                return xk
            }, gauss_seidel: function gauss_seidel(a, b, x, r) {
                var i = 0;
                var n = a.length;
                var l = [];
                var u = [];
                var d = [];
                var j, xv, c, h, xk;
                for (; i < n; i++) {
                    l[i] = [];
                    u[i] = [];
                    d[i] = [];
                    for (j = 0; j < n; j++) {
                        if (i > j) {
                            l[i][j] = a[i][j];
                            u[i][j] = d[i][j] = 0
                        } else if (i < j) {
                            u[i][j] = a[i][j];
                            l[i][j] = d[i][j] = 0
                        } else {
                            d[i][j] = a[i][j];
                            l[i][j] = u[i][j] = 0
                        }
                    }
                }
                h = jStat.multiply(jStat.multiply(jStat.inv(jStat.add(d, l)), u), -1);
                c = jStat.multiply(jStat.inv(jStat.add(d, l)), b);
                xv = x;
                xk = jStat.add(jStat.multiply(h, x), c);
                i = 2;
                while (Math.abs(jStat.norm(jStat.subtract(xk, xv))) > r) {
                    xv = xk;
                    xk = jStat.add(jStat.multiply(h, xv), c);
                    i = i + 1
                }
                return xk
            }, SOR: function SOR(a, b, x, r, w) {
                var i = 0;
                var n = a.length;
                var l = [];
                var u = [];
                var d = [];
                var j, xv, c, h, xk;
                for (; i < n; i++) {
                    l[i] = [];
                    u[i] = [];
                    d[i] = [];
                    for (j = 0; j < n; j++) {
                        if (i > j) {
                            l[i][j] = a[i][j];
                            u[i][j] = d[i][j] = 0
                        } else if (i < j) {
                            u[i][j] = a[i][j];
                            l[i][j] = d[i][j] = 0
                        } else {
                            d[i][j] = a[i][j];
                            l[i][j] = u[i][j] = 0
                        }
                    }
                }
                h = jStat.multiply(jStat.inv(jStat.add(d, jStat.multiply(l, w))), jStat.subtract(jStat.multiply(d, 1 - w), jStat.multiply(u, w)));
                c = jStat.multiply(jStat.multiply(jStat.inv(jStat.add(d, jStat.multiply(l, w))), b), w);
                xv = x;
                xk = jStat.add(jStat.multiply(h, x), c);
                i = 2;
                while (Math.abs(jStat.norm(jStat.subtract(xk, xv))) > r) {
                    xv = xk;
                    xk = jStat.add(jStat.multiply(h, xv), c);
                    i++
                }
                return xk
            }, householder: function householder(a) {
                var m = a.length;
                var n = a[0].length;
                var i = 0;
                var w = [];
                var p = [];
                var alpha, r, k, j, factor;
                for (; i < m - 1; i++) {
                    alpha = 0;
                    for (j = i + 1; j < n; j++) alpha += a[j][i] * a[j][i];
                    factor = a[i + 1][i] > 0 ? -1 : 1;
                    alpha = factor * Math.sqrt(alpha);
                    r = Math.sqrt((alpha * alpha - a[i + 1][i] * alpha) / 2);
                    w = jStat.zeros(m, 1);
                    w[i + 1][0] = (a[i + 1][i] - alpha) / (2 * r);
                    for (k = i + 2; k < m; k++) w[k][0] = a[k][i] / (2 * r);
                    p = jStat.subtract(jStat.identity(m, n), jStat.multiply(jStat.multiply(w, jStat.transpose(w)), 2));
                    a = jStat.multiply(p, jStat.multiply(a, p))
                }
                return a
            }, QR: function () {
                var sum = jStat.sum;
                var range = jStat.arange;

                function qr2(x) {
                    var n = x.length;
                    var p = x[0].length;
                    var r = jStat.zeros(p, p);
                    x = jStat.copy(x);
                    var i, j, k;
                    for (j = 0; j < p; j++) {
                        r[j][j] = Math.sqrt(sum(range(n).map(function (i) {
                            return x[i][j] * x[i][j]
                        })));
                        for (i = 0; i < n; i++) {
                            x[i][j] = x[i][j] / r[j][j]
                        }
                        for (k = j + 1; k < p; k++) {
                            r[j][k] = sum(range(n).map(function (i) {
                                return x[i][j] * x[i][k]
                            }));
                            for (i = 0; i < n; i++) {
                                x[i][k] = x[i][k] - x[i][j] * r[j][k]
                            }
                        }
                    }
                    return [x, r]
                }

                return qr2
            }(), lstsq: function () {
                function R_I(A) {
                    A = jStat.copy(A);
                    var size = A.length;
                    var I = jStat.identity(size);
                    jStat.arange(size - 1, -1, -1).forEach(function (i) {
                        jStat.sliceAssign(I, {row: i}, jStat.divide(jStat.slice(I, {row: i}), A[i][i]));
                        jStat.sliceAssign(A, {row: i}, jStat.divide(jStat.slice(A, {row: i}), A[i][i]));
                        jStat.arange(i).forEach(function (j) {
                            var c = jStat.multiply(A[j][i], -1);
                            var Aj = jStat.slice(A, {row: j});
                            var cAi = jStat.multiply(jStat.slice(A, {row: i}), c);
                            jStat.sliceAssign(A, {row: j}, jStat.add(Aj, cAi));
                            var Ij = jStat.slice(I, {row: j});
                            var cIi = jStat.multiply(jStat.slice(I, {row: i}), c);
                            jStat.sliceAssign(I, {row: j}, jStat.add(Ij, cIi))
                        })
                    });
                    return I
                }

                function qr_solve(A, b) {
                    var array_mode = false;
                    if (b[0].length === undefined) {
                        b = b.map(function (x) {
                            return [x]
                        });
                        array_mode = true
                    }
                    var QR = jStat.QR(A);
                    var Q = QR[0];
                    var R = QR[1];
                    var attrs = A[0].length;
                    var Q1 = jStat.slice(Q, {col: {end: attrs}});
                    var R1 = jStat.slice(R, {row: {end: attrs}});
                    var RI = R_I(R1);
                    var Q2 = jStat.transpose(Q1);
                    if (Q2[0].length === undefined) {
                        Q2 = [Q2]
                    }
                    var x = jStat.multiply(jStat.multiply(RI, Q2), b);
                    if (x.length === undefined) {
                        x = [[x]]
                    }
                    if (array_mode) return x.map(function (i) {
                        return i[0]
                    });
                    return x
                }

                return qr_solve
            }(), jacobi: function jacobi(a) {
                var condition = 1;
                var n = a.length;
                var e = jStat.identity(n, n);
                var ev = [];
                var b, i, j, p, q, maxim, theta, s;
                while (condition === 1) {
                    maxim = a[0][1];
                    p = 0;
                    q = 1;
                    for (i = 0; i < n; i++) {
                        for (j = 0; j < n; j++) {
                            if (i != j) {
                                if (maxim < Math.abs(a[i][j])) {
                                    maxim = Math.abs(a[i][j]);
                                    p = i;
                                    q = j
                                }
                            }
                        }
                    }
                    if (a[p][p] === a[q][q]) theta = a[p][q] > 0 ? Math.PI / 4 : -Math.PI / 4; else theta = Math.atan(2 * a[p][q] / (a[p][p] - a[q][q])) / 2;
                    s = jStat.identity(n, n);
                    s[p][p] = Math.cos(theta);
                    s[p][q] = -Math.sin(theta);
                    s[q][p] = Math.sin(theta);
                    s[q][q] = Math.cos(theta);
                    e = jStat.multiply(e, s);
                    b = jStat.multiply(jStat.multiply(jStat.inv(s), a), s);
                    a = b;
                    condition = 0;
                    for (i = 1; i < n; i++) {
                        for (j = 1; j < n; j++) {
                            if (i != j && Math.abs(a[i][j]) > .001) {
                                condition = 1
                            }
                        }
                    }
                }
                for (i = 0; i < n; i++) ev.push(a[i][i]);
                return [e, ev]
            }, rungekutta: function rungekutta(f, h, p, t_j, u_j, order) {
                var k1, k2, u_j1, k3, k4;
                if (order === 2) {
                    while (t_j <= p) {
                        k1 = h * f(t_j, u_j);
                        k2 = h * f(t_j + h, u_j + k1);
                        u_j1 = u_j + (k1 + k2) / 2;
                        u_j = u_j1;
                        t_j = t_j + h
                    }
                }
                if (order === 4) {
                    while (t_j <= p) {
                        k1 = h * f(t_j, u_j);
                        k2 = h * f(t_j + h / 2, u_j + k1 / 2);
                        k3 = h * f(t_j + h / 2, u_j + k2 / 2);
                        k4 = h * f(t_j + h, u_j + k3);
                        u_j1 = u_j + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
                        u_j = u_j1;
                        t_j = t_j + h
                    }
                }
                return u_j
            }, romberg: function romberg(f, a, b, order) {
                var i = 0;
                var h = (b - a) / 2;
                var x = [];
                var h1 = [];
                var g = [];
                var m, a1, j, k, I;
                while (i < order / 2) {
                    I = f(a);
                    for (j = a, k = 0; j <= b; j = j + h, k++) x[k] = j;
                    m = x.length;
                    for (j = 1; j < m - 1; j++) {
                        I += (j % 2 !== 0 ? 4 : 2) * f(x[j])
                    }
                    I = h / 3 * (I + f(b));
                    g[i] = I;
                    h /= 2;
                    i++
                }
                a1 = g.length;
                m = 1;
                while (a1 !== 1) {
                    for (j = 0; j < a1 - 1; j++) h1[j] = (Math.pow(4, m) * g[j + 1] - g[j]) / (Math.pow(4, m) - 1);
                    a1 = h1.length;
                    g = h1;
                    h1 = [];
                    m++
                }
                return g
            }, richardson: function richardson(X, f, x, h) {
                function pos(X, x) {
                    var i = 0;
                    var n = X.length;
                    var p;
                    for (; i < n; i++) if (X[i] === x) p = i;
                    return p
                }

                var h_min = Math.abs(x - X[pos(X, x) + 1]);
                var i = 0;
                var g = [];
                var h1 = [];
                var y1, y2, m, a, j;
                while (h >= h_min) {
                    y1 = pos(X, x + h);
                    y2 = pos(X, x);
                    g[i] = (f[y1] - 2 * f[y2] + f[2 * y2 - y1]) / (h * h);
                    h /= 2;
                    i++
                }
                a = g.length;
                m = 1;
                while (a != 1) {
                    for (j = 0; j < a - 1; j++) h1[j] = (Math.pow(4, m) * g[j + 1] - g[j]) / (Math.pow(4, m) - 1);
                    a = h1.length;
                    g = h1;
                    h1 = [];
                    m++
                }
                return g
            }, simpson: function simpson(f, a, b, n) {
                var h = (b - a) / n;
                var I = f(a);
                var x = [];
                var j = a;
                var k = 0;
                var i = 1;
                var m;
                for (; j <= b; j = j + h, k++) x[k] = j;
                m = x.length;
                for (; i < m - 1; i++) {
                    I += (i % 2 !== 0 ? 4 : 2) * f(x[i])
                }
                return h / 3 * (I + f(b))
            }, hermite: function hermite(X, F, dF, value) {
                var n = X.length;
                var p = 0;
                var i = 0;
                var l = [];
                var dl = [];
                var A = [];
                var B = [];
                var j;
                for (; i < n; i++) {
                    l[i] = 1;
                    for (j = 0; j < n; j++) {
                        if (i != j) l[i] *= (value - X[j]) / (X[i] - X[j])
                    }
                    dl[i] = 0;
                    for (j = 0; j < n; j++) {
                        if (i != j) dl[i] += 1 / (X[i] - X[j])
                    }
                    A[i] = (1 - 2 * (value - X[i]) * dl[i]) * (l[i] * l[i]);
                    B[i] = (value - X[i]) * (l[i] * l[i]);
                    p += A[i] * F[i] + B[i] * dF[i]
                }
                return p
            }, lagrange: function lagrange(X, F, value) {
                var p = 0;
                var i = 0;
                var j, l;
                var n = X.length;
                for (; i < n; i++) {
                    l = F[i];
                    for (j = 0; j < n; j++) {
                        if (i != j) l *= (value - X[j]) / (X[i] - X[j])
                    }
                    p += l
                }
                return p
            }, cubic_spline: function cubic_spline(X, F, value) {
                var n = X.length;
                var i = 0, j;
                var A = [];
                var B = [];
                var alpha = [];
                var c = [];
                var h = [];
                var b = [];
                var d = [];
                for (; i < n - 1; i++) h[i] = X[i + 1] - X[i];
                alpha[0] = 0;
                for (i = 1; i < n - 1; i++) {
                    alpha[i] = 3 / h[i] * (F[i + 1] - F[i]) - 3 / h[i - 1] * (F[i] - F[i - 1])
                }
                for (i = 1; i < n - 1; i++) {
                    A[i] = [];
                    B[i] = [];
                    A[i][i - 1] = h[i - 1];
                    A[i][i] = 2 * (h[i - 1] + h[i]);
                    A[i][i + 1] = h[i];
                    B[i][0] = alpha[i]
                }
                c = jStat.multiply(jStat.inv(A), B);
                for (j = 0; j < n - 1; j++) {
                    b[j] = (F[j + 1] - F[j]) / h[j] - h[j] * (c[j + 1][0] + 2 * c[j][0]) / 3;
                    d[j] = (c[j + 1][0] - c[j][0]) / (3 * h[j])
                }
                for (j = 0; j < n; j++) {
                    if (X[j] > value) break
                }
                j -= 1;
                return F[j] + (value - X[j]) * b[j] + jStat.sq(value - X[j]) * c[j] + (value - X[j]) * jStat.sq(value - X[j]) * d[j]
            }, gauss_quadrature: function gauss_quadrature() {
                throw new Error("gauss_quadrature not yet implemented")
            }, PCA: function PCA(X) {
                var m = X.length;
                var n = X[0].length;
                var i = 0;
                var j, temp1;
                var u = [];
                var D = [];
                var result = [];
                var temp2 = [];
                var Y = [];
                var Bt = [];
                var B = [];
                var C = [];
                var V = [];
                var Vt = [];
                for (i = 0; i < m; i++) {
                    u[i] = jStat.sum(X[i]) / n
                }
                for (i = 0; i < n; i++) {
                    B[i] = [];
                    for (j = 0; j < m; j++) {
                        B[i][j] = X[j][i] - u[j]
                    }
                }
                B = jStat.transpose(B);
                for (i = 0; i < m; i++) {
                    C[i] = [];
                    for (j = 0; j < m; j++) {
                        C[i][j] = jStat.dot([B[i]], [B[j]]) / (n - 1)
                    }
                }
                result = jStat.jacobi(C);
                V = result[0];
                D = result[1];
                Vt = jStat.transpose(V);
                for (i = 0; i < D.length; i++) {
                    for (j = i; j < D.length; j++) {
                        if (D[i] < D[j]) {
                            temp1 = D[i];
                            D[i] = D[j];
                            D[j] = temp1;
                            temp2 = Vt[i];
                            Vt[i] = Vt[j];
                            Vt[j] = temp2
                        }
                    }
                }
                Bt = jStat.transpose(B);
                for (i = 0; i < m; i++) {
                    Y[i] = [];
                    for (j = 0; j < Bt.length; j++) {
                        Y[i][j] = jStat.dot([Vt[i]], [Bt[j]])
                    }
                }
                return [X, D, Vt, Y]
            }
        });
        (function (funcs) {
            for (var i = 0; i < funcs.length; i++) (function (passfunc) {
                jStat.fn[passfunc] = function (arg, func) {
                    var tmpthis = this;
                    if (func) {
                        setTimeout(function () {
                            func.call(tmpthis, jStat.fn[passfunc].call(tmpthis, arg))
                        }, 15);
                        return this
                    }
                    if (typeof jStat[passfunc](this, arg) === "number") return jStat[passfunc](this, arg); else return jStat(jStat[passfunc](this, arg))
                }
            })(funcs[i])
        })("add divide multiply subtract dot pow exp log abs norm angle".split(" "))
    })(jStat, Math);
    (function (jStat, Math) {
        var slice = [].slice;
        var isNumber = jStat.utils.isNumber;
        var isArray = jStat.utils.isArray;
        jStat.extend({
            zscore: function zscore() {
                var args = slice.call(arguments);
                if (isNumber(args[1])) {
                    return (args[0] - args[1]) / args[2]
                }
                return (args[0] - jStat.mean(args[1])) / jStat.stdev(args[1], args[2])
            }, ztest: function ztest() {
                var args = slice.call(arguments);
                var z;
                if (isArray(args[1])) {
                    z = jStat.zscore(args[0], args[1], args[3]);
                    return args[2] === 1 ? jStat.normal.cdf(-Math.abs(z), 0, 1) : jStat.normal.cdf(-Math.abs(z), 0, 1) * 2
                } else {
                    if (args.length > 2) {
                        z = jStat.zscore(args[0], args[1], args[2]);
                        return args[3] === 1 ? jStat.normal.cdf(-Math.abs(z), 0, 1) : jStat.normal.cdf(-Math.abs(z), 0, 1) * 2
                    } else {
                        z = args[0];
                        return args[1] === 1 ? jStat.normal.cdf(-Math.abs(z), 0, 1) : jStat.normal.cdf(-Math.abs(z), 0, 1) * 2
                    }
                }
            }
        });
        jStat.extend(jStat.fn, {
            zscore: function zscore(value, flag) {
                return (value - this.mean()) / this.stdev(flag)
            }, ztest: function ztest(value, sides, flag) {
                var zscore = Math.abs(this.zscore(value, flag));
                return sides === 1 ? jStat.normal.cdf(-zscore, 0, 1) : jStat.normal.cdf(-zscore, 0, 1) * 2
            }
        });
        jStat.extend({
            tscore: function tscore() {
                var args = slice.call(arguments);
                return args.length === 4 ? (args[0] - args[1]) / (args[2] / Math.sqrt(args[3])) : (args[0] - jStat.mean(args[1])) / (jStat.stdev(args[1], true) / Math.sqrt(args[1].length))
            }, ttest: function ttest() {
                var args = slice.call(arguments);
                var tscore;
                if (args.length === 5) {
                    tscore = Math.abs(jStat.tscore(args[0], args[1], args[2], args[3]));
                    return args[4] === 1 ? jStat.studentt.cdf(-tscore, args[3] - 1) : jStat.studentt.cdf(-tscore, args[3] - 1) * 2
                }
                if (isNumber(args[1])) {
                    tscore = Math.abs(args[0]);
                    return args[2] == 1 ? jStat.studentt.cdf(-tscore, args[1] - 1) : jStat.studentt.cdf(-tscore, args[1] - 1) * 2
                }
                tscore = Math.abs(jStat.tscore(args[0], args[1]));
                return args[2] == 1 ? jStat.studentt.cdf(-tscore, args[1].length - 1) : jStat.studentt.cdf(-tscore, args[1].length - 1) * 2
            }
        });
        jStat.extend(jStat.fn, {
            tscore: function tscore(value) {
                return (value - this.mean()) / (this.stdev(true) / Math.sqrt(this.cols()))
            }, ttest: function ttest(value, sides) {
                return sides === 1 ? 1 - jStat.studentt.cdf(Math.abs(this.tscore(value)), this.cols() - 1) : jStat.studentt.cdf(-Math.abs(this.tscore(value)), this.cols() - 1) * 2
            }
        });
        jStat.extend({
            anovafscore: function anovafscore() {
                var args = slice.call(arguments), expVar, sample, sampMean, sampSampMean, tmpargs, unexpVar, i, j;
                if (args.length === 1) {
                    tmpargs = new Array(args[0].length);
                    for (i = 0; i < args[0].length; i++) {
                        tmpargs[i] = args[0][i]
                    }
                    args = tmpargs
                }
                sample = new Array;
                for (i = 0; i < args.length; i++) {
                    sample = sample.concat(args[i])
                }
                sampMean = jStat.mean(sample);
                expVar = 0;
                for (i = 0; i < args.length; i++) {
                    expVar = expVar + args[i].length * Math.pow(jStat.mean(args[i]) - sampMean, 2)
                }
                expVar /= args.length - 1;
                unexpVar = 0;
                for (i = 0; i < args.length; i++) {
                    sampSampMean = jStat.mean(args[i]);
                    for (j = 0; j < args[i].length; j++) {
                        unexpVar += Math.pow(args[i][j] - sampSampMean, 2)
                    }
                }
                unexpVar /= sample.length - args.length;
                return expVar / unexpVar
            }, anovaftest: function anovaftest() {
                var args = slice.call(arguments), df1, df2, n, i;
                if (isNumber(args[0])) {
                    return 1 - jStat.centralF.cdf(args[0], args[1], args[2])
                }
                var anovafscore = jStat.anovafscore(args);
                df1 = args.length - 1;
                n = 0;
                for (i = 0; i < args.length; i++) {
                    n = n + args[i].length
                }
                df2 = n - df1 - 1;
                return 1 - jStat.centralF.cdf(anovafscore, df1, df2)
            }, ftest: function ftest(fscore, df1, df2) {
                return 1 - jStat.centralF.cdf(fscore, df1, df2)
            }
        });
        jStat.extend(jStat.fn, {
            anovafscore: function anovafscore() {
                return jStat.anovafscore(this.toArray())
            }, anovaftes: function anovaftes() {
                var n = 0;
                var i;
                for (i = 0; i < this.length; i++) {
                    n = n + this[i].length
                }
                return jStat.ftest(this.anovafscore(), this.length - 1, n - this.length)
            }
        });
        jStat.extend({
            qscore: function qscore() {
                var args = slice.call(arguments);
                var mean1, mean2, n1, n2, sd;
                if (isNumber(args[0])) {
                    mean1 = args[0];
                    mean2 = args[1];
                    n1 = args[2];
                    n2 = args[3];
                    sd = args[4]
                } else {
                    mean1 = jStat.mean(args[0]);
                    mean2 = jStat.mean(args[1]);
                    n1 = args[0].length;
                    n2 = args[1].length;
                    sd = args[2]
                }
                return Math.abs(mean1 - mean2) / (sd * Math.sqrt((1 / n1 + 1 / n2) / 2))
            }, qtest: function qtest() {
                var args = slice.call(arguments);
                var qscore;
                if (args.length === 3) {
                    qscore = args[0];
                    args = args.slice(1)
                } else if (args.length === 7) {
                    qscore = jStat.qscore(args[0], args[1], args[2], args[3], args[4]);
                    args = args.slice(5)
                } else {
                    qscore = jStat.qscore(args[0], args[1], args[2]);
                    args = args.slice(3)
                }
                var n = args[0];
                var k = args[1];
                return 1 - jStat.tukey.cdf(qscore, k, n - k)
            }, tukeyhsd: function tukeyhsd(arrays) {
                var sd = jStat.pooledstdev(arrays);
                var means = arrays.map(function (arr) {
                    return jStat.mean(arr)
                });
                var n = arrays.reduce(function (n, arr) {
                    return n + arr.length
                }, 0);
                var results = [];
                for (var i = 0; i < arrays.length; ++i) {
                    for (var j = i + 1; j < arrays.length; ++j) {
                        var p = jStat.qtest(means[i], means[j], arrays[i].length, arrays[j].length, sd, n, arrays.length);
                        results.push([[i, j], p])
                    }
                }
                return results
            }
        });
        jStat.extend({
            normalci: function normalci() {
                var args = slice.call(arguments), ans = new Array(2), change;
                if (args.length === 4) {
                    change = Math.abs(jStat.normal.inv(args[1] / 2, 0, 1) * args[2] / Math.sqrt(args[3]))
                } else {
                    change = Math.abs(jStat.normal.inv(args[1] / 2, 0, 1) * jStat.stdev(args[2]) / Math.sqrt(args[2].length))
                }
                ans[0] = args[0] - change;
                ans[1] = args[0] + change;
                return ans
            }, tci: function tci() {
                var args = slice.call(arguments), ans = new Array(2), change;
                if (args.length === 4) {
                    change = Math.abs(jStat.studentt.inv(args[1] / 2, args[3] - 1) * args[2] / Math.sqrt(args[3]))
                } else {
                    change = Math.abs(jStat.studentt.inv(args[1] / 2, args[2].length - 1) * jStat.stdev(args[2], true) / Math.sqrt(args[2].length))
                }
                ans[0] = args[0] - change;
                ans[1] = args[0] + change;
                return ans
            }, significant: function significant(pvalue, alpha) {
                return pvalue < alpha
            }
        });
        jStat.extend(jStat.fn, {
            normalci: function normalci(value, alpha) {
                return jStat.normalci(value, alpha, this.toArray())
            }, tci: function tci(value, alpha) {
                return jStat.tci(value, alpha, this.toArray())
            }
        });

        function differenceOfProportions(p1, n1, p2, n2) {
            if (p1 > 1 || p2 > 1 || p1 <= 0 || p2 <= 0) {
                throw new Error("Proportions should be greater than 0 and less than 1")
            }
            var pooled = (p1 * n1 + p2 * n2) / (n1 + n2);
            var se = Math.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n2));
            return (p1 - p2) / se
        }

        jStat.extend(jStat.fn, {
            oneSidedDifferenceOfProportions: function oneSidedDifferenceOfProportions(p1, n1, p2, n2) {
                var z = differenceOfProportions(p1, n1, p2, n2);
                return jStat.ztest(z, 1)
            }, twoSidedDifferenceOfProportions: function twoSidedDifferenceOfProportions(p1, n1, p2, n2) {
                var z = differenceOfProportions(p1, n1, p2, n2);
                return jStat.ztest(z, 2)
            }
        })
    })(jStat, Math);
    jStat.models = function () {
        function sub_regress(exog) {
            var var_count = exog[0].length;
            var modelList = jStat.arange(var_count).map(function (endog_index) {
                var exog_index = jStat.arange(var_count).filter(function (i) {
                    return i !== endog_index
                });
                return ols(jStat.col(exog, endog_index).map(function (x) {
                    return x[0]
                }), jStat.col(exog, exog_index))
            });
            return modelList
        }

        function ols(endog, exog) {
            var nobs = endog.length;
            var df_model = exog[0].length - 1;
            var df_resid = nobs - df_model - 1;
            var coef = jStat.lstsq(exog, endog);
            var predict = jStat.multiply(exog, coef.map(function (x) {
                return [x]
            })).map(function (p) {
                return p[0]
            });
            var resid = jStat.subtract(endog, predict);
            var ybar = jStat.mean(endog);
            var SSE = jStat.sum(predict.map(function (f) {
                return Math.pow(f - ybar, 2)
            }));
            var SSR = jStat.sum(endog.map(function (y, i) {
                return Math.pow(y - predict[i], 2)
            }));
            var SST = SSE + SSR;
            var R2 = SSE / SST;
            return {
                exog: exog,
                endog: endog,
                nobs: nobs,
                df_model: df_model,
                df_resid: df_resid,
                coef: coef,
                predict: predict,
                resid: resid,
                ybar: ybar,
                SST: SST,
                SSE: SSE,
                SSR: SSR,
                R2: R2
            }
        }

        function t_test(model) {
            var subModelList = sub_regress(model.exog);
            var sigmaHat = Math.sqrt(model.SSR / model.df_resid);
            var seBetaHat = subModelList.map(function (mod) {
                var SST = mod.SST;
                var R2 = mod.R2;
                return sigmaHat / Math.sqrt(SST * (1 - R2))
            });
            var tStatistic = model.coef.map(function (coef, i) {
                return (coef - 0) / seBetaHat[i]
            });
            var pValue = tStatistic.map(function (t) {
                var leftppf = jStat.studentt.cdf(t, model.df_resid);
                return (leftppf > .5 ? 1 - leftppf : leftppf) * 2
            });
            var c = jStat.studentt.inv(.975, model.df_resid);
            var interval95 = model.coef.map(function (coef, i) {
                var d = c * seBetaHat[i];
                return [coef - d, coef + d]
            });
            return {se: seBetaHat, t: tStatistic, p: pValue, sigmaHat: sigmaHat, interval95: interval95}
        }

        function F_test(model) {
            var F_statistic = model.R2 / model.df_model / ((1 - model.R2) / model.df_resid);
            var fcdf = function (x, n1, n2) {
                return jStat.beta.cdf(x / (n2 / n1 + x), n1 / 2, n2 / 2)
            };
            var pvalue = 1 - fcdf(F_statistic, model.df_model, model.df_resid);
            return {F_statistic: F_statistic, pvalue: pvalue}
        }

        function ols_wrap(endog, exog) {
            var model = ols(endog, exog);
            var ttest = t_test(model);
            var ftest = F_test(model);
            var adjust_R2 = 1 - (1 - model.R2) * ((model.nobs - 1) / model.df_resid);
            model.t = ttest;
            model.f = ftest;
            model.adjust_R2 = adjust_R2;
            return model
        }

        return {ols: ols_wrap}
    }();
    jStat.extend({
        buildxmatrix: function buildxmatrix() {
            var matrixRows = new Array(arguments.length);
            for (var i = 0; i < arguments.length; i++) {
                var array = [1];
                matrixRows[i] = array.concat(arguments[i])
            }
            return jStat(matrixRows)
        }, builddxmatrix: function builddxmatrix() {
            var matrixRows = new Array(arguments[0].length);
            for (var i = 0; i < arguments[0].length; i++) {
                var array = [1];
                matrixRows[i] = array.concat(arguments[0][i])
            }
            return jStat(matrixRows)
        }, buildjxmatrix: function buildjxmatrix(jMat) {
            var pass = new Array(jMat.length);
            for (var i = 0; i < jMat.length; i++) {
                pass[i] = jMat[i]
            }
            return jStat.builddxmatrix(pass)
        }, buildymatrix: function buildymatrix(array) {
            return jStat(array).transpose()
        }, buildjymatrix: function buildjymatrix(jMat) {
            return jMat.transpose()
        }, matrixmult: function matrixmult(A, B) {
            var i, j, k, result, sum;
            if (A.cols() == B.rows()) {
                if (B.rows() > 1) {
                    result = [];
                    for (i = 0; i < A.rows(); i++) {
                        result[i] = [];
                        for (j = 0; j < B.cols(); j++) {
                            sum = 0;
                            for (k = 0; k < A.cols(); k++) {
                                sum += A.toArray()[i][k] * B.toArray()[k][j]
                            }
                            result[i][j] = sum
                        }
                    }
                    return jStat(result)
                }
                result = [];
                for (i = 0; i < A.rows(); i++) {
                    result[i] = [];
                    for (j = 0; j < B.cols(); j++) {
                        sum = 0;
                        for (k = 0; k < A.cols(); k++) {
                            sum += A.toArray()[i][k] * B.toArray()[j]
                        }
                        result[i][j] = sum
                    }
                }
                return jStat(result)
            }
        }, regress: function regress(jMatX, jMatY) {
            var innerinv = jStat.xtranspxinv(jMatX);
            var xtransp = jMatX.transpose();
            var next = jStat.matrixmult(jStat(innerinv), xtransp);
            return jStat.matrixmult(next, jMatY)
        }, regresst: function regresst(jMatX, jMatY, sides) {
            var beta = jStat.regress(jMatX, jMatY);
            var compile = {};
            compile.anova = {};
            var jMatYBar = jStat.jMatYBar(jMatX, beta);
            compile.yBar = jMatYBar;
            var yAverage = jMatY.mean();
            compile.anova.residuals = jStat.residuals(jMatY, jMatYBar);
            compile.anova.ssr = jStat.ssr(jMatYBar, yAverage);
            compile.anova.msr = compile.anova.ssr / (jMatX[0].length - 1);
            compile.anova.sse = jStat.sse(jMatY, jMatYBar);
            compile.anova.mse = compile.anova.sse / (jMatY.length - (jMatX[0].length - 1) - 1);
            compile.anova.sst = jStat.sst(jMatY, yAverage);
            compile.anova.mst = compile.anova.sst / (jMatY.length - 1);
            compile.anova.r2 = 1 - compile.anova.sse / compile.anova.sst;
            if (compile.anova.r2 < 0) compile.anova.r2 = 0;
            compile.anova.fratio = compile.anova.msr / compile.anova.mse;
            compile.anova.pvalue = jStat.anovaftest(compile.anova.fratio, jMatX[0].length - 1, jMatY.length - (jMatX[0].length - 1) - 1);
            compile.anova.rmse = Math.sqrt(compile.anova.mse);
            compile.anova.r2adj = 1 - compile.anova.mse / compile.anova.mst;
            if (compile.anova.r2adj < 0) compile.anova.r2adj = 0;
            compile.stats = new Array(jMatX[0].length);
            var covar = jStat.xtranspxinv(jMatX);
            var sds, ts, ps;
            for (var i = 0; i < beta.length; i++) {
                sds = Math.sqrt(compile.anova.mse * Math.abs(covar[i][i]));
                ts = Math.abs(beta[i] / sds);
                ps = jStat.ttest(ts, jMatY.length - jMatX[0].length - 1, sides);
                compile.stats[i] = [beta[i], sds, ts, ps]
            }
            compile.regress = beta;
            return compile
        }, xtranspx: function xtranspx(jMatX) {
            return jStat.matrixmult(jMatX.transpose(), jMatX)
        }, xtranspxinv: function xtranspxinv(jMatX) {
            var inner = jStat.matrixmult(jMatX.transpose(), jMatX);
            var innerinv = jStat.inv(inner);
            return innerinv
        }, jMatYBar: function jMatYBar(jMatX, beta) {
            var yBar = jStat.matrixmult(jMatX, beta);
            return new jStat(yBar)
        }, residuals: function residuals(jMatY, jMatYBar) {
            return jStat.matrixsubtract(jMatY, jMatYBar)
        }, ssr: function ssr(jMatYBar, yAverage) {
            var ssr = 0;
            for (var i = 0; i < jMatYBar.length; i++) {
                ssr += Math.pow(jMatYBar[i] - yAverage, 2)
            }
            return ssr
        }, sse: function sse(jMatY, jMatYBar) {
            var sse = 0;
            for (var i = 0; i < jMatY.length; i++) {
                sse += Math.pow(jMatY[i] - jMatYBar[i], 2)
            }
            return sse
        }, sst: function sst(jMatY, yAverage) {
            var sst = 0;
            for (var i = 0; i < jMatY.length; i++) {
                sst += Math.pow(jMatY[i] - yAverage, 2)
            }
            return sst
        }, matrixsubtract: function matrixsubtract(A, B) {
            var ans = new Array(A.length);
            for (var i = 0; i < A.length; i++) {
                ans[i] = new Array(A[i].length);
                for (var j = 0; j < A[i].length; j++) {
                    ans[i][j] = A[i][j] - B[i][j]
                }
            }
            return jStat(ans)
        }
    });
    jStat.jStat = jStat;
    return jStat
});

var CryptoApi = function (t) {
    var e = {};

    function s(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {i: n, l: !1, exports: {}};
        return t[n].call(r.exports, r, r.exports, s), r.l = !0, r.exports
    }

    return s.m = t, s.c = e, s.d = function (t, e, n) {
        s.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, s.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, s.t = function (t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) s.d(n, r, function (e) {
            return t[e]
        }.bind(null, r));
        return n
    }, s.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "", s(s.s = 29)
}([function (t, e, s) {
    "use strict";

    function n(t, e) {
        return t << e | t >>> 32 - e | 0
    }

    function r(t, e) {
        return t >>> e | t << 32 - e | 0
    }

    function a(t, e, s) {
        return 32 === s ? e : 32 < s ? a(e, t, s - 32) : 4294967295 & (t >>> s | e << 32 - s)
    }

    function o(t, e, s) {
        return 32 === s ? t : 32 < s ? o(e, t, s - 32) : 4294967295 & (e >>> s | t << 32 - s)
    }

    s.d(e, "a", function () {
        return n
    }), s.d(e, "b", function () {
        return r
    }), s.d(e, "d", function () {
        return o
    }), s.d(e, "c", function () {
        return a
    })
}, function (t, e, s) {
    "use strict";

    function n(t) {
        for (var e = "", s = 0, n = t.length; s < n; s++) {
            var r = t.charCodeAt(s);
            r < 128 ? e += String.fromCharCode(r) : (r < 2048 ? e += String.fromCharCode(192 | r >> 6) : (r < 55296 || 57344 <= r ? e += String.fromCharCode(224 | r >> 12) : (s++, r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(s)), e += String.fromCharCode(240 | r >> 18), e += String.fromCharCode(128 | r >> 12 & 63)), e += String.fromCharCode(128 | r >> 6 & 63)), e += String.fromCharCode(128 | 63 & r))
        }
        return e
    }

    s.d(e, "a", function () {
        return n
    })
}, function (t, e, s) {
    "use strict";

    function n(t) {
        for (var e = "", s = 0, n = t.length; s < n; s++) e += (t.charCodeAt(s) < 16 ? "0" : "") + t.charCodeAt(s).toString(16);
        return e
    }

    s.d(e, "a", function () {
        return n
    })
}, function (t, e, s) {
    "use strict";
    var n = s(4);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function o(t) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function i(t, e) {
        return (i = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var h = function () {
        function t(e) {
            var s;
            return function (e, s) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), (s = function (t, e) {
                return !e || "object" !== r(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }(this, o(t).call(this, e))).unitOrder = 1, s.blockUnits = [], s
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && i(t, e)
        }(t, n.a), function (t, e, s) {
            e && a(t.prototype, e)
        }(t, [{
            key: "process", value: function () {
                for (; this.state.message.length >= this.blockSizeInBytes;) {
                    this.blockUnits = [];
                    for (var t = 0; t < this.blockSizeInBytes; t += 4) this.blockUnits.push(this.state.message.charCodeAt(t) << 24 | this.state.message.charCodeAt(t + 1) << 16 | this.state.message.charCodeAt(t + 2) << 8 | this.state.message.charCodeAt(t + 3));
                    this.state.message = this.state.message.substr(this.blockSizeInBytes), this.processBlock(this.blockUnits)
                }
            }
        }, {
            key: "processBlock", value: function (t) {
            }
        }, {
            key: "getStateHash", value: function (t) {
                t = t || this.state.hash.length;
                for (var e = "", s = 0; s < t; s++) e += String.fromCharCode(this.state.hash[s] >> 24 & 255) + String.fromCharCode(this.state.hash[s] >> 16 & 255) + String.fromCharCode(this.state.hash[s] >> 8 & 255) + String.fromCharCode(255 & this.state.hash[s]);
                return e
            }
        }, {
            key: "addLengthBits", value: function () {
                this.state.message += "\0\0\0" + String.fromCharCode(this.state.length >> 29 & 255) + String.fromCharCode(this.state.length >> 21 & 255) + String.fromCharCode(this.state.length >> 13 & 255) + String.fromCharCode(this.state.length >> 5 & 255) + String.fromCharCode(this.state.length << 3 & 255)
            }
        }]), t
    }();
    e.a = h
}, function (t, e, s) {
    "use strict";

    function n(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    var r = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.unitSize = 4, this.unitOrder = 0, this.blockSize = 16, this.blockSizeInBytes = this.blockSize * this.unitSize, this.options = e || {}, this.reset()
        }

        return function (t, e, s) {
            e && n(t.prototype, e)
        }(t, [{
            key: "reset", value: function () {
                this.state = {}, this.state.message = "", this.state.length = 0
            }
        }, {
            key: "getState", value: function () {
                return JSON.parse(JSON.stringify(this.state))
            }
        }, {
            key: "setState", value: function (t) {
                this.state = t
            }
        }, {
            key: "update", value: function (t) {
                this.state.message += t, this.state.length += t.length, this.process()
            }
        }, {
            key: "process", value: function () {
            }
        }, {
            key: "finalize", value: function () {
                return ""
            }
        }, {
            key: "getStateHash", value: function (t) {
                return ""
            }
        }, {
            key: "addPaddingPKCS7", value: function (t) {
                this.state.message += new Array(t + 1).join(String.fromCharCode(t))
            }
        }, {
            key: "addPaddingISO7816", value: function (t) {
                this.state.message += "" + new Array(t).join("\0")
            }
        }, {
            key: "addPaddingZero", value: function (t) {
                this.state.message += new Array(t + 1).join("\0")
            }
        }]), t
    }();
    e.a = r
}, function (t, e, s) {
    "use strict";
    var n = s(4);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function o(t) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function i(t, e) {
        return (i = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var h = function () {
        function t(e) {
            var s;
            return function (e, s) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), (s = function (t, e) {
                return !e || "object" !== r(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }(this, o(t).call(this, e))).blockUnits = [], s
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && i(t, e)
        }(t, n.a), function (t, e, s) {
            e && a(t.prototype, e)
        }(t, [{
            key: "process", value: function () {
                for (; this.state.message.length >= this.blockSizeInBytes;) {
                    this.blockUnits = [];
                    for (var t = 0; t < this.blockSizeInBytes; t += 4) this.blockUnits.push(this.state.message.charCodeAt(t) | this.state.message.charCodeAt(t + 1) << 8 | this.state.message.charCodeAt(t + 2) << 16 | this.state.message.charCodeAt(t + 3) << 24);
                    this.state.message = this.state.message.substr(this.blockSizeInBytes), this.processBlock(this.blockUnits)
                }
            }
        }, {
            key: "processBlock", value: function (t) {
            }
        }, {
            key: "getStateHash", value: function (t) {
                t = t || this.state.hash.length;
                for (var e = "", s = 0; s < t; s++) e += String.fromCharCode(255 & this.state.hash[s]) + String.fromCharCode(this.state.hash[s] >> 8 & 255) + String.fromCharCode(this.state.hash[s] >> 16 & 255) + String.fromCharCode(this.state.hash[s] >> 24 & 255);
                return e
            }
        }, {
            key: "addLengthBits", value: function () {
                this.state.message += String.fromCharCode(this.state.length << 3 & 255) + String.fromCharCode(this.state.length >> 5 & 255) + String.fromCharCode(this.state.length >> 13 & 255) + String.fromCharCode(this.state.length >> 21 & 255) + String.fromCharCode(this.state.length >> 29 & 255) + "\0\0\0"
            }
        }]), t
    }();
    e.a = h
}, function (t, e, s) {
    "use strict";
    var n = s(3), r = s(0);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, e) {
        return !e || "object" !== a(e) && "function" != typeof e ? function (t) {
            if (void 0 !== t) return t;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(t) : e
    }

    function h(t, e, s) {
        return (h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, s) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(s) : r.value
            }
        })(t, e, s || t)
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var f = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
        l = function () {
            function t(e) {
                var s;
                return function (e, s) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), (e = e || {}).length = e.length || 512, e.rounds = e.rounds || 160, (s = i(this, c(t).call(this, e))).blockSize = 32, s.blockSizeInBytes = s.blockSize * s.unitSize, s.W = new Array(160), s
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && u(t, e)
            }(t, n.a), function (t, e, s) {
                e && o(t.prototype, e)
            }(t, [{
                key: "reset", value: function () {
                    switch (h(c(t.prototype), "reset", this).call(this), this.options.length) {
                        case 384:
                            this.state.hash = [-876896931, -1056596264, 1654270250, 914150663, -1856437926, 812702999, 355462360, -150054599, 1731405415, -4191439, -1900787065, 1750603025, -619958771, 1694076839, 1203062813, -1090891868];
                            break;
                        case 512:
                            this.state.hash = [1779033703, -205731576, -1150833019, -2067093701, 1013904242, -23791573, -1521486534, 1595750129, 1359893119, -1377402159, -1694144372, 725511199, 528734635, -79577749, 1541459225, 327033209];
                            break;
                        default:
                            for (var e = new t, s = 0; s < 16; s++) e.state.hash[s] = 2779096485 ^ e.state.hash[s];
                            e.update("SHA-512/" + this.options.length);
                            var n = e.finalize();
                            this.state.hash = [];
                            for (var r = 0; r < 64; r += 4) this.state.hash.push(n.charCodeAt(r) << 24 | n.charCodeAt(r + 1) << 16 | n.charCodeAt(r + 2) << 8 | n.charCodeAt(r + 3))
                    }
                }
            }, {
                key: "processBlock", value: function (t) {
                    for (var e, s, n, a, o = this.state.hash[0], i = this.state.hash[1], h = this.state.hash[2], c = this.state.hash[3], u = this.state.hash[4], l = this.state.hash[5], p = this.state.hash[6], y = this.state.hash[7], b = this.state.hash[8], g = this.state.hash[9], C = this.state.hash[10], v = this.state.hash[11], d = this.state.hash[12], O = this.state.hash[13], m = this.state.hash[14], w = this.state.hash[15], j = 0; j < this.options.rounds; j += 2) {
                        if (j < 32) this.W[j] = t[j], this.W[j + 1] = t[j + 1]; else {
                            e = Object(r.c)(this.W[j - 30], this.W[j - 29], 1) ^ Object(r.c)(this.W[j - 30], this.W[j - 29], 8) ^ this.W[j - 30] >>> 7, s = Object(r.d)(this.W[j - 30], this.W[j - 29], 1) ^ Object(r.d)(this.W[j - 30], this.W[j - 29], 8) ^ (this.W[j - 29] >>> 7 | this.W[j - 30] << 25), n = Object(r.c)(this.W[j - 4], this.W[j - 3], 19) ^ Object(r.c)(this.W[j - 4], this.W[j - 3], 61) ^ this.W[j - 4] >>> 6, a = Object(r.d)(this.W[j - 4], this.W[j - 3], 19) ^ Object(r.d)(this.W[j - 4], this.W[j - 3], 61) ^ (this.W[j - 3] >>> 6 | this.W[j - 4] << 26);
                            var S = (65535 & this.W[j - 13]) + (65535 & this.W[j - 31]) + (65535 & s) + (65535 & a) | 0,
                                k = (this.W[j - 13] >>> 16) + (this.W[j - 31] >>> 16) + (s >>> 16) + (a >>> 16) + (S >>> 16) | 0,
                                W = (65535 & this.W[j - 14]) + (65535 & this.W[j - 32]) + (65535 & e) + (65535 & n) + (k >>> 16) | 0,
                                P = (this.W[j - 14] >>> 16) + (this.W[j - 32] >>> 16) + (e >>> 16) + (n >>> 16) + (W >>> 16) | 0;
                            this.W[j] = 4294967295 & (P << 16 | 65535 & W), this.W[j + 1] = 4294967295 & (k << 16 | 65535 & S)
                        }
                        e = Object(r.c)(o, i, 28) ^ Object(r.c)(o, i, 34) ^ Object(r.c)(o, i, 39), s = Object(r.d)(o, i, 28) ^ Object(r.d)(o, i, 34) ^ Object(r.d)(o, i, 39), n = Object(r.c)(b, g, 14) ^ Object(r.c)(b, g, 18) ^ Object(r.c)(b, g, 41);
                        var _ = g & v ^ ~g & O, H = o & h ^ o & u ^ h & u, F = i & c ^ i & l ^ c & l,
                            G = w + (a = Object(r.d)(b, g, 14) ^ Object(r.d)(b, g, 18) ^ Object(r.d)(b, g, 41)) | 0,
                            A = m + n + (G >>> 0 < w >>> 0 ? 1 : 0) | 0;
                        A = (A = A + (b & C ^ ~b & d) + ((G = G + _ | 0) >>> 0 < _ >>> 0 ? 1 : 0) | 0) + f[j] + ((G = G + f[j + 1] | 0) >>> 0 < f[j + 1] >>> 0 ? 1 : 0) | 0, G = G + this.W[j + 1] | 0;
                        var I = s + F | 0;
                        m = d, w = O, d = C, O = v, C = b, v = g, b = p + (A = A + this.W[j] + (G >>> 0 < this.W[j + 1] >>> 0 ? 1 : 0) | 0) + ((g = y + G | 0) >>> 0 < y >>> 0 ? 1 : 0) | 0, p = u, y = l, u = h, l = c, h = o, c = i, o = A + (e + H + (I >>> 0 < s >>> 0 ? 1 : 0) | 0) + ((i = G + I | 0) >>> 0 < G >>> 0 ? 1 : 0) | 0
                    }
                    this.state.hash[1] = this.state.hash[1] + i | 0, this.state.hash[0] = this.state.hash[0] + o + (this.state.hash[1] >>> 0 < i >>> 0 ? 1 : 0) | 0, this.state.hash[3] = this.state.hash[3] + c | 0, this.state.hash[2] = this.state.hash[2] + h + (this.state.hash[3] >>> 0 < c >>> 0 ? 1 : 0) | 0, this.state.hash[5] = this.state.hash[5] + l | 0, this.state.hash[4] = this.state.hash[4] + u + (this.state.hash[5] >>> 0 < l >>> 0 ? 1 : 0) | 0, this.state.hash[7] = this.state.hash[7] + y | 0, this.state.hash[6] = this.state.hash[6] + p + (this.state.hash[7] >>> 0 < y >>> 0 ? 1 : 0) | 0, this.state.hash[9] = this.state.hash[9] + g | 0, this.state.hash[8] = this.state.hash[8] + b + (this.state.hash[9] >>> 0 < g >>> 0 ? 1 : 0) | 0, this.state.hash[11] = this.state.hash[11] + v | 0, this.state.hash[10] = this.state.hash[10] + C + (this.state.hash[11] >>> 0 < v >>> 0 ? 1 : 0) | 0, this.state.hash[13] = this.state.hash[13] + O | 0, this.state.hash[12] = this.state.hash[12] + d + (this.state.hash[13] >>> 0 < O >>> 0 ? 1 : 0) | 0, this.state.hash[15] = this.state.hash[15] + w | 0, this.state.hash[14] = this.state.hash[14] + m + (this.state.hash[15] >>> 0 < w >>> 0 ? 1 : 0) | 0
                }
            }, {
                key: "finalize", value: function () {
                    return this.addPaddingISO7816(this.state.message.length < 112 ? 112 - this.state.message.length | 0 : 240 - this.state.message.length | 0), this.state.message += "\0\0\0\0\0\0\0\0", this.addLengthBits(), this.process(), this.getStateHash(this.options.length / 32 | 0)
                }
            }]), t
        }();
    e.a = l
}, function (t, e, s) {
    "use strict";
    var n = s(3), r = s(0);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, e, s) {
        return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, s) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(s) : r.value
            }
        })(t, e, s || t)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var u = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        f = function () {
            function t(e) {
                var s;
                return function (e, s) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), (e = e || {}).length = e.length || 256, e.rounds = e.rounds || 64, (s = function (t, e) {
                    return !e || "object" !== a(e) && "function" != typeof e ? function (t) {
                        if (void 0 !== t) return t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(t) : e
                }(this, h(t).call(this, e))).W = new Array(64), s
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && c(t, e)
            }(t, n.a), function (t, e, s) {
                e && o(t.prototype, e)
            }(t, [{
                key: "reset", value: function () {
                    switch (i(h(t.prototype), "reset", this).call(this), this.options.length) {
                        case 224:
                            this.state.hash = [-1056596264, 914150663, 812702999, -150054599, -4191439, 1750603025, 1694076839, -1090891868];
                            break;
                        default:
                            this.state.hash = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]
                    }
                }
            }, {
                key: "processBlock", value: function (t) {
                    for (var e = 0 | this.state.hash[0], s = 0 | this.state.hash[1], n = 0 | this.state.hash[2], a = 0 | this.state.hash[3], o = 0 | this.state.hash[4], i = 0 | this.state.hash[5], h = 0 | this.state.hash[6], c = 0 | this.state.hash[7], f = 0; f < this.options.rounds; f++) {
                        this.W[f] = f < 16 ? 0 | t[f] : this.W[f - 16] + (Object(r.b)(this.W[f - 15], 7) ^ Object(r.b)(this.W[f - 15], 18) ^ this.W[f - 15] >>> 3) + this.W[f - 7] + (Object(r.b)(this.W[f - 2], 17) ^ Object(r.b)(this.W[f - 2], 19) ^ this.W[f - 2] >>> 10) | 0;
                        var l = c + (Object(r.b)(o, 6) ^ Object(r.b)(o, 11) ^ Object(r.b)(o, 25)) + (o & i ^ ~o & h) + u[f] + this.W[f] | 0,
                            p = (Object(r.b)(e, 2) ^ Object(r.b)(e, 13) ^ Object(r.b)(e, 22)) + (e & s ^ e & n ^ s & n) | 0;
                        c = h, h = i, i = o, o = a + l | 0, a = n, n = s, s = e, e = l + p | 0
                    }
                    this.state.hash[0] = this.state.hash[0] + e | 0, this.state.hash[1] = this.state.hash[1] + s | 0, this.state.hash[2] = this.state.hash[2] + n | 0, this.state.hash[3] = this.state.hash[3] + a | 0, this.state.hash[4] = this.state.hash[4] + o | 0, this.state.hash[5] = this.state.hash[5] + i | 0, this.state.hash[6] = this.state.hash[6] + h | 0, this.state.hash[7] = this.state.hash[7] + c | 0
                }
            }, {
                key: "finalize", value: function () {
                    return this.addPaddingISO7816(this.state.message.length < 56 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0), this.addLengthBits(), this.process(), this.getStateHash(this.options.length / 32 | 0)
                }
            }]), t
        }();
    e.a = f
}, function (t, e, s) {
    "use strict";
    var n = s(5), r = s(0);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, e, s) {
        return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, s) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(s) : r.value
            }
        })(t, e, s || t)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        f = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        l = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        p = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
        y = function () {
            function t(e) {
                return function (e, s) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), (e = e || {}).length = e.length || 160, function (t, e) {
                    return !e || "object" !== a(e) && "function" != typeof e ? function (t) {
                        if (void 0 !== t) return t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(t) : e
                }(this, h(t).call(this, e))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && c(t, e)
            }(t, n.a), function (t, e, s) {
                e && o(t.prototype, e), s && o(t, s)
            }(t, [{
                key: "reset", value: function () {
                    switch (i(h(t.prototype), "reset", this).call(this), this.options.length) {
                        case 128:
                            this.state.hash = [1732584193, 4023233417, 2562383102, 271733878], this.processBlock = this.processBlock128;
                            break;
                        case 256:
                            this.state.hash = [1732584193, 4023233417, 2562383102, 271733878, 1985229328, 4275878552, 2309737967, 19088743], this.processBlock = this.processBlock256;
                            break;
                        case 320:
                            this.state.hash = [1732584193, 4023233417, 2562383102, 271733878, 3285377520, 1985229328, 4275878552, 2309737967, 19088743, 1009589775], this.processBlock = this.processBlock320;
                            break;
                        default:
                            this.state.hash = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.processBlock = this.processBlock160
                    }
                }
            }, {
                key: "processBlock128", value: function (e) {
                    for (var s = 0 | this.state.hash[0], n = 0 | this.state.hash[1], a = 0 | this.state.hash[2], o = 0 | this.state.hash[3], i = s, h = n, c = a, y = o, b = 0; b < 64; b++) {
                        var g = s + e[u[b]] | 0;
                        g = g + t.T(b, n, a, o) | 0, s = o, o = a, a = n, n = g = Object(r.a)(g, l[b]), g = (g = i + e[f[b]] | 0) + t.T64(b, h, c, y) | 0, i = y, y = c, c = h, h = g = Object(r.a)(g, p[b])
                    }
                    var C = this.state.hash[1] + a + y | 0;
                    this.state.hash[1] = this.state.hash[2] + o + i | 0, this.state.hash[2] = this.state.hash[3] + s + h | 0, this.state.hash[3] = this.state.hash[0] + n + c | 0, this.state.hash[0] = C
                }
            }, {
                key: "processBlock160", value: function (e) {
                    for (var s = 0 | this.state.hash[0], n = 0 | this.state.hash[1], a = 0 | this.state.hash[2], o = 0 | this.state.hash[3], i = 0 | this.state.hash[4], h = s, c = n, y = a, b = o, g = i, C = 0; C < 80; C++) {
                        var v = s + e[u[C]] | 0;
                        v = v + t.T(C, n, a, o) | 0, v = (v = Object(r.a)(v, l[C])) + i | 0, s = i, i = o, o = Object(r.a)(a, 10), a = n, n = v, v = (v = h + e[f[C]] | 0) + t.T80(C, c, y, b) | 0, v = (v = Object(r.a)(v, p[C])) + g | 0, h = g, g = b, b = Object(r.a)(y, 10), y = c, c = v
                    }
                    var d = this.state.hash[1] + a + b | 0;
                    this.state.hash[1] = this.state.hash[2] + o + g | 0, this.state.hash[2] = this.state.hash[3] + i + h | 0, this.state.hash[3] = this.state.hash[4] + s + c | 0, this.state.hash[4] = this.state.hash[0] + n + y | 0, this.state.hash[0] = d
                }
            }, {
                key: "processBlock256", value: function (e) {
                    for (var s = 0 | this.state.hash[0], n = 0 | this.state.hash[1], a = 0 | this.state.hash[2], o = 0 | this.state.hash[3], i = 0 | this.state.hash[4], h = 0 | this.state.hash[5], c = 0 | this.state.hash[6], y = 0 | this.state.hash[7], b = 0; b < 64; b += 1) {
                        var g = s + e[u[b]] | 0;
                        switch (g = g + t.T(b, n, a, o) | 0, s = o, o = a, a = n, n = g = Object(r.a)(g, l[b]), g = (g = i + e[f[b]] | 0) + t.T64(b, h, c, y) | 0, i = y, y = c, c = h, h = g = Object(r.a)(g, p[b]), b) {
                            case 15:
                                g = s, s = i, i = g;
                                break;
                            case 31:
                                g = n, n = h, h = g;
                                break;
                            case 47:
                                g = a, a = c, c = g;
                                break;
                            case 63:
                                g = o, o = y, y = g
                        }
                    }
                    this.state.hash[0] = this.state.hash[0] + s | 0, this.state.hash[1] = this.state.hash[1] + n | 0, this.state.hash[2] = this.state.hash[2] + a | 0, this.state.hash[3] = this.state.hash[3] + o | 0, this.state.hash[4] = this.state.hash[4] + i | 0, this.state.hash[5] = this.state.hash[5] + h | 0, this.state.hash[6] = this.state.hash[6] + c | 0, this.state.hash[7] = this.state.hash[7] + y | 0
                }
            }, {
                key: "processBlock320", value: function (e) {
                    for (var s = 0 | this.state.hash[0], n = 0 | this.state.hash[1], a = 0 | this.state.hash[2], o = 0 | this.state.hash[3], i = 0 | this.state.hash[4], h = 0 | this.state.hash[5], c = 0 | this.state.hash[6], y = 0 | this.state.hash[7], b = 0 | this.state.hash[8], g = 0 | this.state.hash[9], C = 0; C < 80; C += 1) {
                        var v = s + e[u[C]] | 0;
                        switch (v = v + t.T(C, n, a, o) | 0, v = (v = Object(r.a)(v, l[C])) + i | 0, s = i, i = o, o = Object(r.a)(a, 10), a = n, n = v, v = (v = h + e[f[C]] | 0) + t.T80(C, c, y, b) | 0, v = (v = Object(r.a)(v, p[C])) + g | 0, h = g, g = b, b = Object(r.a)(y, 10), y = c, c = v, C) {
                            case 15:
                                v = n, n = c, c = v;
                                break;
                            case 31:
                                v = o, o = b, b = v;
                                break;
                            case 47:
                                v = s, s = h, h = v;
                                break;
                            case 63:
                                v = a, a = y, y = v;
                                break;
                            case 79:
                                v = i, i = g, g = v
                        }
                    }
                    this.state.hash[0] = this.state.hash[0] + s | 0, this.state.hash[1] = this.state.hash[1] + n | 0, this.state.hash[2] = this.state.hash[2] + a | 0, this.state.hash[3] = this.state.hash[3] + o | 0, this.state.hash[4] = this.state.hash[4] + i | 0, this.state.hash[5] = this.state.hash[5] + h | 0, this.state.hash[6] = this.state.hash[6] + c | 0, this.state.hash[7] = this.state.hash[7] + y | 0, this.state.hash[8] = this.state.hash[8] + b | 0, this.state.hash[9] = this.state.hash[9] + g | 0
                }
            }, {
                key: "finalize", value: function () {
                    return this.addPaddingISO7816(this.state.message.length < 56 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0), this.addLengthBits(), this.process(), this.getStateHash()
                }
            }], [{
                key: "F", value: function (t, e, s) {
                    return t ^ e ^ s
                }
            }, {
                key: "G", value: function (t, e, s) {
                    return t & e | ~t & s
                }
            }, {
                key: "H", value: function (t, e, s) {
                    return (t | ~e) ^ s
                }
            }, {
                key: "I", value: function (t, e, s) {
                    return t & s | e & ~s
                }
            }, {
                key: "J", value: function (t, e, s) {
                    return t ^ (e | ~s)
                }
            }, {
                key: "T", value: function (t, e, s, n) {
                    return t < 16 ? this.F(e, s, n) : t < 32 ? this.G(e, s, n) + 1518500249 | 0 : t < 48 ? this.H(e, s, n) + 1859775393 | 0 : t < 64 ? this.I(e, s, n) + 2400959708 | 0 : this.J(e, s, n) + 2840853838 | 0
                }
            }, {
                key: "T64", value: function (t, e, s, n) {
                    return t < 16 ? this.I(e, s, n) + 1352829926 | 0 : t < 32 ? this.H(e, s, n) + 1548603684 | 0 : t < 48 ? this.G(e, s, n) + 1836072691 | 0 : this.F(e, s, n)
                }
            }, {
                key: "T80", value: function (t, e, s, n) {
                    return t < 16 ? this.J(e, s, n) + 1352829926 | 0 : t < 32 ? this.I(e, s, n) + 1548603684 | 0 : t < 48 ? this.H(e, s, n) + 1836072691 | 0 : t < 64 ? this.G(e, s, n) + 2053994217 | 0 : this.F(e, s, n)
                }
            }]), t
        }();
    e.a = y
}, function (t, e, s) {
    "use strict";
    var n = s(3), r = s(0);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, e, s) {
        return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, s) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(s) : r.value
            }
        })(t, e, s || t)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var u = [10097, 32533, 76520, 13586, 34673, 54876, 80959, 9117, 39292, 74945, 37542, 4805, 64894, 74296, 24805, 24037, 20636, 10402, 822, 91665, 8422, 68953, 19645, 9303, 23209, 2560, 15953, 34764, 35080, 33606, 99019, 2529, 9376, 70715, 38311, 31165, 88676, 74397, 4436, 27659, 12807, 99970, 80157, 36147, 64032, 36653, 98951, 16877, 12171, 76833, 66065, 74717, 34072, 76850, 36697, 36170, 65813, 39885, 11199, 29170, 31060, 10805, 45571, 82406, 35303, 42614, 86799, 7439, 23403, 9732, 85269, 77602, 2051, 65692, 68665, 74818, 73053, 85247, 18623, 88579, 63573, 32135, 5325, 47048, 90553, 57548, 28468, 28709, 83491, 25624, 73796, 45753, 3529, 64778, 35808, 34282, 60935, 20344, 35273, 88435, 98520, 17767, 14905, 68607, 22109, 40558, 60970, 93433, 50500, 73998, 11805, 5431, 39808, 27732, 50725, 68248, 29405, 24201, 52775, 67851, 83452, 99634, 6288, 98083, 13746, 70078, 18475, 40610, 68711, 77817, 88685, 40200, 86507, 58401, 36766, 67951, 90364, 76493, 29609, 11062, 99594, 67348, 87517, 64969, 91826, 8928, 93785, 61368, 23478, 34113, 65481, 17674, 17468, 50950, 58047, 76974, 73039, 57186, 40218, 16544, 80124, 35635, 17727, 8015, 45318, 22374, 21115, 78253, 14385, 53763, 74350, 99817, 77402, 77214, 43236, 210, 45521, 64237, 96286, 2655, 69916, 26803, 66252, 29148, 36936, 87203, 76621, 13990, 94400, 56418, 9893, 20505, 14225, 68514, 46427, 56788, 96297, 78822, 54382, 14598, 91499, 14523, 68479, 27686, 46162, 83554, 94750, 89923, 37089, 20048, 80336, 94598, 26940, 36858, 70297, 34135, 53140, 33340, 42050, 82341, 44104, 81949, 85157, 47954, 32979, 26575, 57600, 40881, 22222, 6413, 12550, 73742, 11100, 2040, 12860, 74697, 96644, 89439, 28707, 25815, 63606, 49329, 16505, 34484, 40219, 52563, 43651, 77082, 7207, 31790, 61196, 90446, 26457, 47774, 51924, 33729, 65394, 59593, 42582, 60527, 15474, 45266, 95270, 79953, 59367, 83848, 82396, 10118, 33211, 59466, 94557, 28573, 67897, 54387, 54622, 44431, 91190, 42592, 92927, 45973, 42481, 16213, 97344, 8721, 16868, 48767, 3071, 12059, 25701, 46670, 23523, 78317, 73208, 89837, 68935, 91416, 26252, 29663, 5522, 82562, 4493, 52494, 75246, 33824, 45862, 51025, 61962, 79335, 65337, 12472, 549, 97654, 64051, 88159, 96119, 63896, 54692, 82391, 23287, 29529, 35963, 15307, 26898, 9354, 33351, 35462, 77974, 50024, 90103, 39333, 59808, 8391, 45427, 26842, 83609, 49700, 13021, 24892, 78565, 20106, 46058, 85236, 1390, 92286, 77281, 44077, 93910, 83647, 70617, 42941, 32179, 597, 87379, 25241, 5567, 7007, 86743, 17157, 85394, 11838, 69234, 61406, 20117, 45204, 15956, 6e4, 18743, 92423, 97118, 96338, 19565, 41430, 1758, 75379, 40419, 21585, 66674, 36806, 84962, 85207, 45155, 14938, 19476, 7246, 43667, 94543, 59047, 90033, 20826, 69541, 94864, 31994, 36168, 10851, 34888, 81553, 1540, 35456, 5014, 51176, 98086, 24826, 45240, 28404, 44999, 8896, 39094, 73407, 35441, 31880, 33185, 16232, 41941, 50949, 89435, 48581, 88695, 41994, 37548, 73043, 80951, 406, 96382, 70774, 20151, 23387, 25016, 25298, 94624, 61171, 79752, 49140, 71961, 28296, 69861, 2591, 74852, 20539, 387, 59579, 18633, 32537, 98145, 6571, 31010, 24674, 5455, 61427, 77938, 91936, 74029, 43902, 77557, 32270, 97790, 17119, 52527, 58021, 80814, 51748, 54178, 45611, 80993, 37143, 5335, 12969, 56127, 19255, 36040, 90324, 11664, 49883, 52079, 84827, 59381, 71539, 9973, 33440, 88461, 23356, 48324, 77928, 31249, 64710, 2295, 36870, 32307, 57546, 15020, 9994, 69074, 94138, 87637, 91976, 35584, 4401, 10518, 21615, 1848, 76938, 9188, 20097, 32825, 39527, 4220, 86304, 83389, 87374, 64278, 58044, 90045, 85497, 51981, 50654, 94938, 81997, 91870, 76150, 68476, 64659, 73189, 50207, 47677, 26269, 62290, 64464, 27124, 67018, 41361, 82760, 75768, 76490, 20971, 87749, 90429, 12272, 95375, 5871, 93823, 43178, 54016, 44056, 66281, 31003, 682, 27398, 20714, 53295, 7706, 17813, 8358, 69910, 78542, 42785, 13661, 58873, 4618, 97553, 31223, 8420, 28306, 3264, 81333, 10591, 40510, 7893, 32604, 60475, 94119, 1840, 53840, 86233, 81594, 13628, 51215, 90290, 28466, 68795, 77762, 20791, 91757, 53741, 61613, 62269, 50263, 90212, 55781, 76514, 83483, 47055, 89415, 92694, 397, 58391, 12607, 17646, 48949, 72306, 94541, 37408, 77513, 3820, 86864, 29901, 68414, 82774, 51908, 13980, 72893, 55507, 19502, 37174, 69979, 20288, 55210, 29773, 74287, 75251, 65344, 67415, 21818, 59313, 93278, 81757, 5686, 73156, 7082, 85046, 31853, 38452, 51474, 66499, 68107, 23621, 94049, 91345, 42836, 9191, 8007, 45449, 99559, 68331, 62535, 24170, 69777, 12830, 74819, 78142, 43860, 72834, 33713, 48007, 93584, 72869, 51926, 64721, 58303, 29822, 93174, 93972, 85274, 86893, 11303, 22970, 28834, 34137, 73515, 90400, 71148, 43643, 84133, 89640, 44035, 52166, 73852, 70091, 61222, 60561, 62327, 18423, 56732, 16234, 17395, 96131, 10123, 91622, 85496, 57560, 81604, 18880, 65138, 56806, 87648, 85261, 34313, 65861, 45875, 21069, 85644, 47277, 38001, 2176, 81719, 11711, 71602, 92937, 74219, 64049, 65584, 49698, 37402, 96397, 1304, 77586, 56271, 10086, 47324, 62605, 40030, 37438, 97125, 40348, 87083, 31417, 21815, 39250, 75237, 62047, 15501, 29578, 21826, 41134, 47143, 34072, 64638, 85902, 49139, 6441, 3856, 54552, 73135, 42742, 95719, 9035, 85794, 74296, 8789, 88156, 64691, 19202, 7638, 77929, 3061, 18072, 96207, 44156, 23821, 99538, 4713, 66994, 60528, 83441, 7954, 19814, 59175, 20695, 5533, 52139, 61212, 6455, 83596, 35655, 6958, 92983, 5128, 9719, 77433, 53783, 92301, 50498, 10850, 62746, 99599, 10507, 13499, 6319, 53075, 71839, 6410, 19362, 39820, 98952, 43622, 63147, 64421, 80814, 43800, 9351, 31024, 73167, 59580, 6478, 75569, 78800, 88835, 54486, 23768, 6156, 4111, 8408, 38508, 7341, 23793, 48763, 90822, 97022, 17719, 4207, 95954, 49953, 30692, 70668, 94688, 16127, 56196, 80091, 82067, 63400, 5462, 69200, 65443, 95659, 18288, 27437, 49632, 24041, 8337, 65676, 96299, 90836, 27267, 50264, 13192, 72294, 7477, 44606, 17985, 48911, 97341, 30358, 91307, 6991, 19072, 24210, 36699, 53728, 28825, 35793, 28976, 66252, 68434, 94688, 84473, 13622, 62126, 98408, 12843, 82590, 9815, 93146, 48908, 15877, 54745, 24591, 35700, 4754, 83824, 52692, 54130, 55160, 6913, 45197, 42672, 78601, 11883, 9528, 63011, 98901, 14974, 40344, 10455, 16019, 14210, 33712, 91342, 37821, 88325, 80851, 43667, 70883, 12883, 97343, 65027, 61184, 4285, 1392, 17974, 15077, 90712, 26769, 21778, 30976, 38807, 36961, 31649, 42096, 63281, 2023, 8816, 47449, 19523, 59515, 65122, 59659, 86283, 68258, 69572, 13798, 16435, 91529, 67245, 52670, 35583, 16563, 79246, 86686, 76463, 34222, 26655, 90802, 60584, 47377, 7500, 37992, 45134, 26529, 26760, 83637, 41326, 44344, 53853, 41377, 36066, 94850, 58838, 73859, 49364, 73331, 96240, 43642, 24637, 38736, 74384, 89342, 52623, 7992, 12369, 18601, 3742, 83873, 83080, 12451, 38992, 22815, 7759, 51777, 97377, 27585, 51972, 37867, 16444, 24334, 36151, 99073, 27493, 70939, 85130, 32552, 54846, 54759, 60790, 18157, 57178, 65762, 11161, 78576, 45819, 52979, 65130, 4860, 3991, 10461, 93716, 16894, 66083, 24653, 84609, 58232, 88618, 19161, 38555, 95554, 32886, 59780, 8355, 60860, 29735, 47762, 71299, 23853, 17546, 73704, 92052, 46215, 55121, 29281, 59076, 7936, 27954, 58909, 32643, 52861, 95819, 6831, 911, 98936, 76355, 93779, 80863, 514, 69572, 68777, 39510, 35905, 14060, 40619, 29549, 69616, 33564, 60780, 24122, 66591, 27699, 6494, 14845, 46672, 61958, 77100, 90899, 75754, 61196, 30231, 92962, 61773, 41839, 55382, 17267, 70943, 78038, 70267, 30532, 21704, 10274, 12202, 39685, 23309, 10061, 68829, 55986, 66485, 3788, 97599, 75867, 20717, 74416, 53166, 35208, 33374, 87539, 8823, 48228, 63379, 85783, 47619, 53152, 67433, 35663, 52972, 16818, 60311, 60365, 94653, 35075, 33949, 42614, 29297, 1918, 28316, 98953, 73231, 83799, 42402, 56623, 34442, 34994, 41374, 70071, 14736, 9958, 18065, 32960, 7405, 36409, 83232, 99385, 41600, 11133, 7586, 15917, 6253, 19322, 53845, 57620, 52606, 66497, 68646, 78138, 66559, 19640, 99413, 11220, 94747, 7399, 37408, 48509, 23929, 27482, 45476, 85244, 35159, 31751, 57260, 68980, 5339, 15470, 48355, 88651, 22596, 3152, 19121, 88492, 99382, 14454, 4504, 20094, 98977, 74843, 93413, 22109, 78508, 30934, 47744, 7481, 83828, 73788, 6533, 28597, 20405, 94205, 20380, 22888, 48893, 27499, 98748, 60530, 45128, 74022, 84617, 82037, 10268, 78212, 16993, 35902, 91386, 44372, 15486, 65741, 14014, 87481, 37220, 41849, 84547, 46850, 52326, 34677, 58300, 74910, 64345, 19325, 81549, 46352, 33049, 69248, 93460, 45305, 7521, 61318, 31855, 14413, 70951, 11087, 96294, 14013, 31792, 59747, 67277, 76503, 34513, 39663, 77544, 52701, 8337, 56303, 87315, 16520, 69676, 11654, 99893, 2181, 68161, 57275, 36898, 81304, 48585, 68652, 27376, 92852, 55866, 88448, 3584, 20857, 73156, 70284, 24326, 79375, 95220, 1159, 63267, 10622, 48391, 15633, 84924, 90415, 93614, 33521, 26665, 55823, 47641, 86225, 31704, 92694, 48297, 39904, 2115, 59589, 49067, 66821, 41575, 49767, 4037, 77613, 19019, 88152, 80, 20554, 91409, 96277, 48257, 50816, 97616, 38688, 32486, 45134, 63545, 59404, 72059, 43947, 51680, 43852, 59693, 25163, 1889, 70014, 15021, 41290, 67312, 71857, 15957, 68971, 11403, 65251, 7629, 37239, 33295, 5870, 1119, 92784, 26340, 18477, 65622, 36815, 43625, 18637, 37509, 82444, 99005, 4921, 73701, 14707, 93997, 64397, 11692, 5327, 82162, 20247, 81759, 45197, 25332, 83745, 22567, 4515, 25624, 95096, 67946, 48460, 85558, 15191, 18782, 16930, 33361, 83761, 60873, 43253, 84145, 60833, 25983, 1291, 41349, 20368, 7126, 14387, 6345, 80854, 9279, 43529, 6318, 38384, 74761, 41196, 37480, 51321, 92246, 80088, 77074, 88722, 56736, 66164, 49431, 66919, 31678, 72472, 8, 80890, 18002, 94813, 31900, 54155, 83436, 35352, 54131, 5466, 55306, 93128, 18464, 74457, 90561, 72848, 11834, 79982, 68416, 39528, 72484, 82474, 25593, 48545, 35247, 18619, 13674, 18611, 19241, 81616, 18711, 53342, 44276, 75122, 11724, 74627, 73707, 58319, 15997, 7586, 16120, 82641, 22820, 92904, 13141, 32392, 19763, 61199, 67940, 90767, 4235, 13574, 17200, 69902, 63742, 78464, 22501, 18627, 90872, 40188, 28193, 29593, 88627, 94972, 11598, 62095, 36787, 441, 58997, 34414, 82157, 86887, 55087, 19152, 23, 12302, 80783, 32624, 68691, 63439, 75363, 44989, 16822, 36024, 867, 76378, 41605, 65961, 73488, 67049, 9070, 93399, 45547, 94458, 74284, 5041, 49807, 20288, 34060, 79495, 4146, 52162, 90286, 54158, 34243, 46978, 35482, 59362, 95938, 91704, 30552, 4737, 21031, 75051, 93029, 47665, 64382, 99782, 93478, 94015, 46874, 32444, 48277, 59820, 96163, 64654, 25843, 41145, 42820, 74108, 88222, 88570, 74015, 25704, 91035, 1755, 14750, 48968, 38603, 62880, 87873, 95160, 59221, 22304, 90314, 72877, 17334, 39283, 4149, 11748, 12102, 80580, 41867, 17710, 59621, 6554, 7850, 73950, 79552, 17944, 5600, 60478, 3343, 25852, 58905, 57216, 39618, 49856, 99326, 66067, 42792, 95043, 52680, 46780, 56487, 9971, 59481, 37006, 22186, 54244, 91030, 45547, 70818, 59849, 96169, 61459, 21647, 87417, 17198, 30945, 57589, 31732, 57260, 47670, 7654, 46376, 25366, 94746, 49580, 69170, 37403, 86995, 90307, 94304, 71803, 26825, 5511, 12459, 91314, 8345, 88975, 35841, 85771, 8105, 59987, 87112, 21476, 14713, 71181, 27767, 43584, 85301, 88977, 29490, 69714, 73035, 41207, 74699, 9310, 13025, 14338, 54066, 15243, 47724, 66733, 47431, 43905, 31048, 56699, 80217, 36292, 98525, 24335, 24432, 24896, 43277, 58874, 11466, 16082, 10875, 62004, 90391, 61105, 57411, 6368, 53856, 30743, 8670, 84741, 54127, 57326, 26629, 19087, 24472, 88779, 30540, 27886, 61732, 75454, 60311, 42824, 37301, 42678, 45990, 43242, 17374, 52003, 70707, 70214, 49739, 71484, 92003, 98086, 76668, 73209, 59202, 11973, 2902, 33250, 78626, 51594, 16453, 94614, 39014, 97066, 83012, 9832, 25571, 77628, 66692, 13986, 99837, 582, 81232, 44987, 9504, 96412, 90193, 79568, 44071, 28091, 7362, 97703, 76447, 42537, 98524, 97831, 65704, 9514, 41468, 85149, 49554, 17994, 14924, 39650, 95294, 556, 70481, 6905, 94559, 37559, 49678, 53119, 70312, 5682, 66986, 34099, 74474, 20740, 41615, 70360, 64114, 58660, 90850, 64618, 80620, 51790, 11436, 38072, 50273, 93113, 41794, 86861, 24781, 89683, 55411, 85667, 77535, 99892, 41396, 80504, 90670, 8289, 40902, 5069, 95083, 6783, 28102, 57816, 25807, 24260, 71529, 78920, 72682, 7385, 90726, 57166, 98884, 8583, 6170, 97965, 88302, 98041, 21443, 41808, 68984, 83620, 89747, 98882, 60808, 54444, 74412, 81105, 1176, 28838, 36421, 16489, 18059, 51061, 80940, 44893, 10408, 36222, 80582, 71944, 92638, 40333, 67054, 16067, 19516, 90120, 46759, 71643, 13177, 55292, 21036, 82808, 77501, 97427, 49386, 54480, 23604, 23554, 21785, 41101, 91178, 10174, 29420, 90438, 6312, 88940, 15995, 69321, 47458, 64809, 98189, 81851, 29651, 84215, 60942, 307, 11897, 92674, 40405, 68032, 96717, 54244, 10701, 41393, 92329, 98932, 78284, 46347, 71209, 92061, 39448, 93136, 25722, 8564, 77936, 63574, 31384, 51924, 85561, 29671, 58137, 17820, 22751, 36518, 38101, 77756, 11657, 13897, 95889, 57067, 47648, 13885, 70669, 93406, 39641, 69457, 91339, 22502, 92613, 89719, 11947, 56203, 19324, 20504, 84054, 40455, 99396, 63680, 67667, 60631, 69181, 96845, 38525, 11600, 47468, 3577, 57649, 63266, 24700, 71594, 14004, 23153, 69249, 5747, 43321, 31370, 28977, 23896, 76479, 68562, 62342, 7589, 8899, 5985, 64281, 61826, 18555, 64937, 13173, 33365, 78851, 16499, 87064, 13075, 66847, 70495, 32350, 2985, 86716, 38746, 26313, 77463, 55387, 72681, 72461, 33230, 21529, 53424, 92581, 2262, 78438, 66276, 18396, 73538, 21032, 91050, 13058, 16218, 12470, 56500, 15292, 76139, 59526, 52113, 95362, 67011, 6651, 16136, 1016, 857, 55018, 56374, 35824, 71708, 49712, 97380, 10404, 55452, 34030, 60726, 75211, 10271, 36633, 68424, 58275, 61764, 97586, 54716, 50259, 46345, 87195, 46092, 26787, 60939, 89514, 11788, 68224, 23417, 73959, 76145, 30342, 40277, 11049, 72049, 15472, 50669, 48139, 36732, 46874, 37088, 73465, 9819, 58869, 35220, 12120, 86124, 51247, 44302, 60883, 52109, 21437, 36786, 49226, 77837, 19612, 78430, 11661, 94770, 77603, 65669, 86868, 12665, 30012, 75989, 39141, 77400, 28e3, 64238, 73258, 71794, 31340, 26256, 66453, 37016, 64756, 80457, 8747, 12836, 3469, 50678, 3274, 43423, 66677, 82556, 92901, 51878, 56441, 22998, 29718, 38447, 6453, 25311, 7565, 53771, 3551, 90070, 9483, 94050, 45938, 18135, 36908, 43321, 11073, 51803, 98884, 66209, 6830, 53656, 14663, 56346, 71430, 4909, 19818, 5707, 27369, 86882, 53473, 7541, 53633, 70863, 3748, 12822, 19360, 49088, 59066, 75974, 63335, 20483, 43514, 37481, 58278, 26967, 49325, 43951, 91647, 93783, 64169, 49022, 98588, 9495, 49829, 59068, 38831, 4838, 83605, 92419, 39542, 7772, 71568, 75673, 35185, 89759, 44901, 74291, 24895, 88530, 70774, 35439, 46758, 70472, 70207, 92675, 91623, 61275, 35720, 26556, 95596, 20094, 73750, 85788, 34264, 1703, 46833, 65248, 14141, 53410, 38649, 6343, 57256, 61342, 72709, 75318, 90379, 37562, 27416, 75670, 92176, 72535, 93119, 56077, 6886, 18244, 92344, 31374, 82071, 7429, 81007, 47749, 40744, 56974, 23336, 88821, 53841, 10536, 21445, 82793, 24831, 93241, 14199, 76268, 70883, 68002, 3829, 17443, 72513, 76400, 52225, 92348, 62308, 98481, 29744, 33165, 33141, 61020, 71479, 45027, 76160, 57411, 13780, 13632, 52308, 77762, 88874, 33697, 83210, 51466, 9088, 50395, 26743, 5306, 21706, 70001, 99439, 80767, 68749, 95148, 94897, 78636, 96750, 9024, 94538, 91143, 96693, 61886, 5184, 75763, 47075, 88158, 5313, 53439, 14908, 8830, 60096, 21551, 13651, 62546, 96892, 25240, 47511, 58483, 87342, 78818, 7855, 39269, 566, 21220, 292, 24069, 25072, 29519, 52548, 54091, 21282, 21296, 50958, 17695, 58072, 68990, 60329, 95955, 71586, 63417, 35947, 67807, 57621, 64547, 46850, 37981, 38527, 9037, 64756, 3324, 4986, 83666, 9282, 25844, 79139, 78435, 35428, 43561, 69799, 63314, 12991, 93516, 23394, 94206, 93432, 37836, 94919, 26846, 2555, 74410, 94915, 48199, 5280, 37470, 93622, 4345, 15092, 19510, 18094, 16613, 78234, 50001, 95491, 97976, 38306, 32192, 82639, 54624, 72434, 92606, 23191, 74693, 78521, 104, 18248, 75583, 90326, 50785, 54034, 66251, 35774, 14692, 96345, 44579, 85932, 44053, 75704, 20840, 86583, 83944, 52456, 73766, 77963, 31151, 32364, 91691, 47357, 40338, 23435, 24065, 8458, 95366, 7520, 11294, 23238, 1748, 41690, 67328, 54814, 37777, 10057, 42332, 38423, 2309, 70703, 85736, 46148, 14258, 29236, 12152, 5088, 65825, 2463, 65533, 21199, 60555, 33928, 1817, 7396, 89215, 30722, 22102, 15880, 92261, 17292, 88190, 61781, 48898, 92525, 21283, 88581, 60098, 71926, 819, 59144, 224, 30570, 90194, 18329, 6999, 26857, 19238, 64425, 28108, 16554, 16016, 42, 83229, 10333, 36168, 65617, 94834, 79782, 23924, 49440, 30432, 81077, 31543, 95216, 64865, 13658, 51081, 35337, 74538, 44553, 64672, 90960, 41849, 93865, 44608, 93176, 34851, 5249, 29329, 19715, 94082, 14738, 86667, 43708, 66354, 93692, 25527, 56463, 99380, 38793, 85774, 19056, 13939, 46062, 27647, 66146, 63210, 96296, 33121, 54196, 34108, 75814, 85986, 71171, 15102, 28992, 63165, 98380, 36269, 60014, 7201, 62448, 46385, 42175, 88350, 46182, 49126, 52567, 64350, 16315, 53969, 80395, 81114, 54358, 64578, 47269, 15747, 78498, 90830, 25955, 99236, 43286, 91064, 99969, 95144, 64424, 77377, 49553, 24241, 8150, 89535, 8703, 91041, 77323, 81079, 45127, 93686, 32151, 7075, 83155, 10252, 73100, 88618, 23891, 87418, 45417, 20268, 11314, 50363, 26860, 27799, 49416, 83534, 19187, 8059, 76677, 2110, 12364, 71210, 87052, 50241, 90785, 97889, 81399, 58130, 64439, 5614, 59467, 58309, 87834, 57213, 37510, 33689, 1259, 62486, 56320, 46265, 73452, 17619, 56421, 40725, 23439, 41701, 93223, 41682, 45026, 47505, 27635, 56293, 91700, 4391, 67317, 89604, 73020, 69853, 61517, 51207, 86040, 2596, 1655, 9918, 45161, 222, 54577, 74821, 47335, 8582, 52403, 94255, 26351, 46527, 68224, 90183, 85057, 72310, 34963, 83462, 49465, 46581, 61499, 4844, 94626, 2963, 41482, 83879, 44942, 63915, 94365, 92560, 12363, 30246, 2086, 75036, 88620, 91088, 67691, 67762, 34261, 8769, 91830, 23313, 18256, 28850, 37639, 92748, 57791, 71328, 37110, 66538, 39318, 15626, 44324, 82827, 8782, 65960, 58167, 1305, 83950, 45424, 72453, 19444, 68219, 64733, 94088, 62006, 89985, 36936, 61630, 97966, 76537, 46467, 30942, 7479, 67971, 14558, 22458, 35148, 1929, 17165, 12037, 74558, 16250, 71750, 55546, 29693, 94984, 37782, 41659, 39098, 23982, 29899, 71594, 77979, 54477, 13764, 17315, 72893, 32031, 39608, 75992, 73445, 1317, 50525, 87313, 45191, 30214, 19769, 90043, 93478, 58044, 6949, 31176, 88370, 50274, 83987, 45316, 38551, 79418, 14322, 91065, 7841, 36130, 86602, 10659, 40859, 964, 71577, 85447, 61079, 96910, 72906, 7361, 84338, 34114, 52096, 66715, 51091, 86219, 81115, 49625, 48799, 89485, 24855, 13684, 68433, 70595, 70102, 71712, 88559, 92476, 32903, 68009, 58417, 87962, 11787, 16644, 72964, 29776, 63075, 13270, 84758, 49560, 10317, 28778, 23006, 31036, 84906, 81488, 17340, 74154, 42801, 27917, 89792, 62604, 62234, 13124, 76471, 51667, 37589, 87147, 24743, 48023, 6325, 79794, 35889, 13255, 4925, 99004, 70322, 60832, 76636, 56907, 56534, 72615, 46288, 36788, 93196, 68656, 66492, 35933, 52293, 47953, 95495, 95304, 50009, 83464, 28608, 38074, 74083, 9337, 7965, 65047, 36871, 59015, 21769, 30398, 44855, 1020, 80680, 59328, 8712, 48190, 45332, 27284, 31287, 66011, 9376, 86379, 74508, 33579, 77114, 92955, 23085, 92824, 3054, 25242, 16322, 48498, 9938, 44420, 13484, 52319, 58875, 2012, 88591, 52500, 95795, 41800, 95363, 54142, 17482, 32705, 60564, 12505, 40954, 46174, 64130, 63026, 96712, 79883, 39225, 52653, 69549, 36693, 59822, 22684, 31661, 88298, 15489, 16030, 42480, 15372, 38781, 71995, 77438, 91161, 10192, 7839, 62735, 99218, 25624, 2547, 27445, 69187, 55749, 32322, 15504, 73298, 51108, 48717, 92926, 75705, 89787, 96114, 99902, 37749, 96305, 12829, 70474, 838, 50385, 91711, 80370, 56504, 56857, 80906, 9018, 76569, 61072, 48568, 36491, 22587, 44363, 39592, 61546, 90181, 37348, 41665, 41339, 62106, 44203, 6732, 76111, 79840, 67999, 32231, 76869, 58652, 49983, 1669, 27464, 79553, 52855, 25988, 18087, 38052, 17529, 13607, 657, 76173, 43357, 77334, 24140, 53860, 2906, 89863, 44651, 55715, 26203, 65933, 51087, 98234, 40625, 45545, 63563, 89148, 82581, 4110, 66683, 99001, 9796, 47349, 65003, 66524, 81970, 71262, 14479, 31300, 8681, 58068, 44115, 40064, 77879, 23965, 69019, 73985, 19453, 26225, 97543, 37044, 7494, 85778, 35345, 61115, 92498, 49737, 64599, 7158, 82763, 25072, 38478, 57782, 75291, 62155, 52056, 4786, 11585, 71251, 25572, 79771, 93328, 66927, 54069, 58752, 26624, 50463, 77361, 29991, 96526, 2820, 91659, 12818, 96356, 49499, 1507, 40223, 9171, 83642, 21057, 2677, 9367, 38097, 16100, 19355, 6120, 15378, 56559, 69167, 30235, 6767, 66323, 78294, 14916, 19124, 88044, 16673, 66102, 86018, 29406, 75415, 22038, 27056, 26906, 25867, 14751, 92380, 30434, 44114, 6026, 79553, 55091, 95385, 41212, 37882, 46864, 54717, 97038, 53805, 64150, 70915, 63127, 63695, 41288, 38192, 72437, 75075, 18570, 52065, 8853, 30104, 79937, 66913, 53200, 84570, 78079, 28970, 53859, 37632, 80274, 35240, 32960, 74859, 7359, 55176, 3930, 38984, 35151, 82576, 82805, 94031, 12779, 90879, 24109, 25367, 77861, 9541, 85739, 69023, 64971, 99321, 7521, 95909, 43897, 71724, 92581, 5471, 64337, 98949, 3606, 78236, 78985, 29212, 57369, 34857, 67757, 58019, 58872, 96526, 28749, 56592, 37871, 72905, 70198, 57319, 54116, 47014, 18285, 33692, 72111, 60958, 96848, 17893, 40993, 50445, 14186, 76877, 87867, 50335, 9513, 44346, 26439, 55293, 6449, 44301, 63740, 40158, 72703, 88321, 85062, 57345, 66231, 15409, 3451, 95261, 43561, 15673, 28956, 90303, 62469, 82517, 43035, 36850, 15592, 64098, 59022, 31752, 4370, 50486, 11885, 23085, 41712, 80692, 48492, 16495, 99721, 36912, 28267, 27882, 16269, 64483, 11273, 2680, 1616, 46138, 54606, 14761, 5134, 45144, 63213, 49666, 27441, 86989, 29884, 54334, 6740, 8368, 80051, 81020, 17882, 74973, 74531, 94994, 24927, 64894, 22667, 20466, 82948, 66831, 47427, 76033, 31197, 59817, 20064, 61135, 28556, 29695, 80179, 74058, 18293, 9963, 35278, 13062, 83094, 23373, 90287, 33477, 48865, 30348, 70174, 11468, 25994, 25343, 22317, 1587, 30682, 1, 67814, 59557, 23362, 13746, 82244, 42093, 24671, 79458, 93730, 45488, 60234, 67098, 9899, 25775, 332, 36636, 57594, 19958, 85564, 58977, 12247, 60774, 66371, 69442, 20385, 14486, 91330, 50332, 46023, 75768, 59877, 60081, 92936, 72302, 75064, 85727, 52987, 5750, 19384, 33684, 78859, 80458, 69902, 34870, 88684, 49762, 40801, 86291, 18194, 90366, 82639, 53844, 96326, 65728, 48563, 26027, 52692, 62406, 76294, 41848, 63010, 69841, 29451, 36170, 21529, 16525, 64326, 22086, 24469, 57407, 96033, 37771, 31002, 18311, 93285, 31948, 14331, 58335, 15977, 80336, 81667, 27286, 24361, 61638, 57580, 95270, 46180, 76990, 53031, 94366, 2727, 49944, 19278, 5756, 51875, 53445, 33342, 1965, 7937, 10054, 97712, 87693, 58124, 46064, 39133, 77385, 9605, 65359, 70113, 90563, 86637, 94282, 12025, 31926, 24541, 23854, 58407, 32131, 92845, 20714, 27898, 26917, 50326, 35145, 50859, 72119, 95094, 29441, 42301, 62460, 75252, 94267, 38422, 73047, 24200, 85349, 72049, 91723, 97802, 98496, 12734, 73432, 10371, 57213, 53300, 80847, 46229, 7099, 72961, 13767, 65654, 31102, 82119, 96946, 65919, 81083, 3819, 57888, 57908, 16849, 77111, 41429, 92261, 45263, 1172, 55926, 78835, 27697, 48420, 58865, 41207, 21406, 8582, 10785, 36233, 12237, 7866, 13706, 92551, 11021, 63813, 71512, 65206, 37768, 94325, 14721, 20990, 54235, 71986, 5345, 56239, 52028, 1419, 7215, 55067, 11669, 21738, 66605, 69621, 69827, 8537, 18638, 60982, 28151, 98885, 76431, 25566, 3085, 23639, 30849, 63986, 73287, 26201, 36174, 14106, 54102, 57041, 16141, 64174, 3591, 90024, 73332, 31254, 17288, 59809, 25061, 51612, 47951, 16570, 43330, 79213, 11354, 55585, 19646, 99246, 37564, 32660, 20632, 21124, 60597, 69315, 31312, 57741, 85108, 21615, 24365, 27684, 16124, 33888, 14966, 35303, 69921, 15795, 4020, 67672, 86816, 63027, 84470, 45605, 44887, 26222, 79888, 58982, 22466, 98844, 48353, 60666, 58256, 31140, 93507, 69561, 6256, 88526, 18655, 865, 75247, 264, 65957, 98261, 72706, 36396, 46065, 85700, 32121, 99975, 73627, 78812, 89638, 86602, 96758, 65099, 52777, 46792, 13790, 55240, 52002, 10313, 91933, 71231, 10053, 78416, 54563, 96004, 42215, 30094, 45958, 48437, 49591, 50483, 13422, 69108, 59952, 27896, 40450, 79327, 31962, 46456, 39260, 51479, 61882, 48181, 50691, 64709, 32902, 10676, 12083, 35771, 79656, 56667, 76783, 3937, 99859, 10362, 57411, 40986, 35045, 2838, 29255, 64230, 84418, 34988, 77644, 39892, 77327, 74129, 53444, 35487, 95803, 38640, 20383, 55402, 25793, 14213, 87082, 42837, 95030, 97198, 61608, 97723, 79390, 35290, 34683, 81419, 87133, 70447, 53127, 97146, 28299, 56763, 12868, 1145, 12147, 58158, 92124, 60934, 18414, 97510, 7056, 54488, 20719, 53743, 91037, 44797, 52110, 8512, 18991, 20129, 31441, 51449, 14661, 71126, 23180, 68124, 18807, 70997, 21913, 19594, 70355, 73637, 68266, 60775, 43164, 52643, 96363, 77989, 79332, 39890, 65379, 20405, 52935, 43816, 92740, 95319, 4538, 60660, 28982, 15328, 80475, 34690, 2293, 19646, 46524, 96627, 33159, 42081, 8816, 74931, 20674, 8697, 66169, 46460, 46326, 39923, 60625, 28386, 22919, 19415, 75766, 43668, 31626, 70301, 67053, 3949, 70082, 2303, 48642, 38429, 94053, 38770, 68137, 68441, 52928, 70244, 91954, 17401, 92693, 98342, 21451, 84988, 80487, 33807, 73797, 49494, 41878, 76635, 83227, 76618, 11946, 13451, 87591, 78381, 21407, 90038, 72638, 69692, 51599, 86413, 32019, 64856, 74730, 41531, 11064, 1790, 58817, 86400, 66213, 92599, 70905, 78324, 54326, 43659, 34206, 63132, 38837, 40210, 96346, 16967, 81619, 96503, 14881, 89405, 32205, 49508, 98425, 2451, 35423, 56072, 36810, 30332, 85998, 49358, 92748, 84147, 79835, 94867, 41224, 61794, 35066, 82220, 66684, 20096, 2754, 41731, 37068, 32753, 91059, 13407, 5607, 69384, 53329, 95909, 44968, 11397, 92973, 50014, 92997, 80968, 93761, 57598, 74703, 7768, 37978, 73873, 33475, 9720, 97852, 98449, 48722, 84977, 11271, 11728, 68318, 22312, 78792, 87508, 88466, 72976, 47099, 84126, 38595, 85124, 64405, 90020, 7492, 52413, 95111, 34455, 86311, 68892, 1074, 60274, 28136, 19328, 38161, 57475, 13771, 63562, 84207, 94121, 18901, 52768, 33801, 82087, 86091, 59969, 90398, 56870, 55756, 78841, 98450, 54165, 55106, 50343, 70519, 14567, 36780, 55450, 19606, 83749, 67562, 64765, 38543, 16585, 86841, 73742, 8766, 39252, 75678, 75379, 78760, 37279, 15280, 13558, 95916, 89759, 76686, 76467, 67147, 63110, 94008, 8037, 35263, 53710, 16667, 79008, 11231, 29397, 67136, 18601, 64502, 90228, 89109, 72849, 22711, 65547, 34542, 26686, 81678, 87765, 77654, 23664, 96352, 14106, 32938, 28083, 18633, 80286, 65507, 46197, 52722, 75476, 77816, 47204, 34876, 45963, 79262, 90181, 84041, 3745, 90041, 30780, 27226, 92847, 85572, 15308, 80688, 5761, 82638, 13464, 23683, 81015, 54214, 64175, 43701, 86845, 15569, 50687, 52679, 87696, 8285, 97444, 47599, 94472, 64150, 87753, 68652, 60726, 26213, 17320, 64553, 81285, 98126, 12158, 52095, 64833, 492, 35817, 55571, 91300, 97812, 37507, 4209, 53515, 64342, 21223, 16662, 43265, 68219, 3529, 43636, 68417, 53640, 95326, 93381, 37113, 80751, 76469, 96677, 43054, 22937, 31954, 13266, 34140, 27253, 2734, 99070, 60077, 57988, 93211, 92795, 83795, 57477, 3941, 39007, 14619, 38320, 93449, 31336, 25279, 97030, 26245, 47394, 39475, 90621, 23820, 29344, 94859, 91604, 14033, 41868, 14816, 4075, 66644, 87803, 97815, 99552, 78666, 3942, 8175, 22345, 19983, 76783, 99044, 20851, 84981, 59052, 77178, 72109, 76475, 21619, 73017, 6812, 56633, 50612, 55289, 4671, 84419, 94072, 94446, 80603, 32188, 93415, 23464, 43947, 43728, 74284, 67177, 57105, 31059, 10642, 13803, 69602, 46961, 66567, 19359, 84676, 63918, 40650, 12923, 15974, 79732, 20225, 92525, 71179, 4859, 91208, 60430, 5239, 61458, 24089, 68852, 60171, 29603, 42535, 86365, 93905, 28237, 45317, 60718, 82001, 41679, 20679, 56304, 70043, 87568, 21386, 59049, 78353, 48696, 77379, 55309, 23780, 28391, 5940, 55583, 81256, 59418, 97521, 32846, 70761, 90115, 45325, 5490, 65974, 11186, 15357, 3568, 450, 96644, 58976, 36211, 88240, 92457, 89200, 94696, 11370, 91157, 48487, 59501, 56983, 89795, 42789, 69758, 79701, 29511, 55968, 41472, 89474, 84344, 80517, 7485, 97523, 17264, 82840, 59556, 37119, 30985, 48866, 60605, 95719, 70417, 59083, 95137, 76538, 44155, 67286, 57897, 28262, 4052, 919, 86207, 79932, 44236, 10089, 44373, 65670, 44285, 6903, 20834, 49701, 95735, 21149, 3425, 17594, 31427, 14262, 32252, 68540, 39427, 44026, 47257, 45055, 95091, 8367, 28381, 57375, 41562, 83883, 27715, 10122, 67745, 46497, 28626, 87297, 36568, 39483, 11385, 63292, 92305, 78683, 6146, 81905, 15038, 38338, 51206, 65749, 34119, 71516, 74068, 51094, 6665, 91884, 66762, 11428, 70908, 21506, 480, 94183, 78484, 66507, 75901, 25728, 52539, 86806, 69944, 65036, 27882, 2530, 4918, 74351, 65737, 89178, 8791, 39342, 94963, 22581, 56917, 17541, 83578, 75376, 65202, 30935, 79270, 91986, 99286, 45236, 44720, 81915, 70881, 45886, 43213, 49789, 97081, 16075, 20517, 69980, 25310, 91953, 1759, 67635, 88933, 54558, 18395, 73375, 62251, 58871, 9870, 70538, 48936, 7757, 90374, 56631, 88862, 30487, 38794, 36079, 32712, 11130, 55451, 25137, 38785, 83558, 31960, 69473, 45950, 18225, 9871, 88502, 75179, 11551, 75664, 74321, 67351, 27703, 83717, 18913, 42470, 8816, 37627, 14288, 62831, 44047, 67612, 72738, 26995, 50933, 63758, 50003, 43693, 52661, 55852, 52372, 59042, 37595, 4931, 73622, 68387, 86478, 40997, 5245, 75300, 24902, 59609, 35653, 15970, 37681, 69365, 22236, 86374, 65550, 343, 98377, 35354, 65770, 15365, 41422, 71356, 16630, 40044, 19290, 66449, 53629, 79452, 71674, 30260, 97303, 6487, 62789, 13005, 70152, 22501, 49867, 89294, 59232, 31776, 54919, 99851, 5438, 1096, 72269, 50486, 16719, 6144, 82041, 38332, 64452, 31840, 99287, 59928, 25503, 8407, 46970, 45907, 99238, 74547, 19704, 72035, 26542, 54600, 79172, 58779, 35747, 78956, 11478, 41195, 58135, 63856, 33037, 45753, 60159, 25193, 71838, 7526, 7985, 60714, 88627, 75790, 38454, 96110, 39237, 19792, 34534, 70169, 24805, 63215, 38175, 38784, 38855, 24826, 50917, 25147, 17082, 26997, 32295, 10894, 21805, 65245, 85407, 37926, 69214, 38579, 84721, 23544, 88548, 65626, 75517, 69737, 55626, 52175, 21697, 19453, 16908, 82841, 24060, 40285, 19195, 80281, 89322, 15232, 70043, 60691, 86370, 91949, 19017, 83846, 77869, 14321, 95102, 87073, 71467, 31305, 64677, 80358, 52629, 79419, 22359, 87867, 48296, 50141, 46807, 82184, 95812, 84665, 74511, 59914, 4146, 90417, 58508, 62875, 17630, 21868, 9199, 30322, 33352, 43374, 25473, 4119, 63086, 14147, 14863, 38020, 44757, 98628, 57916, 22199, 11865, 42911, 62651, 78290, 9392, 77294, 63168, 21043, 17409, 13786, 27475, 75979, 89668, 43596, 74316, 84489, 54941, 95992, 45445, 41059, 55142, 15214, 42903, 16799, 88254, 95984, 48575, 77822, 21067, 57238, 35352, 96779, 89564, 23797, 99937, 46379, 27119, 16060, 30302, 95327, 12849, 38111, 97090, 7598, 78473, 63079, 18570, 72803, 70040, 91385, 96436, 96263, 17368, 56188, 85999, 50026, 36050, 73736, 13351, 48321, 28357, 51718, 65636, 72903, 21584, 21060, 39829, 15564, 4716, 14594, 22363, 97639, 65937, 17802, 31535, 42767, 98761, 30987, 57657, 33398, 63053, 25926, 20944, 19306, 81727, 2695, 97479, 79172, 72764, 66446, 78864, 12698, 15812, 97209, 38827, 91016, 91281, 57875, 45228, 49211, 69755, 99224, 43999, 62879, 8879, 80015, 74396, 57146, 64665, 31159, 6980, 79069, 37409, 75037, 69977, 85919, 42826, 6974, 61063, 97640, 13433, 92528, 91311, 8440, 38840, 22362, 93929, 1836, 36590, 75052, 89475, 15437, 65648, 99012, 70236, 12307, 83585, 414, 62851, 48787, 28447, 21702, 57033, 29633, 44760, 34165, 27548, 37516, 24343, 63046, 2081, 20378, 19510, 42226, 97134, 68739, 32982, 56455, 53129, 77693, 25022, 55534, 99375, 30086, 98001, 7432, 67126, 76656, 29347, 28492, 43108, 64736, 32278, 84816, 80440, 30461, 818, 9136, 1952, 48442, 91058, 92590, 10443, 5195, 34009, 32141, 62209, 43740, 54102, 76895, 98172, 31583, 4155, 66492, 58981, 16591, 11331, 6838, 3818, 77063, 12523, 45570, 68970, 70055, 77751, 73743, 71732, 4704, 61384, 57343, 66682, 44500, 89745, 10436, 67202, 36455, 42467, 88801, 91280, 1056, 27534, 81619, 79004, 25824, 66362, 33280, 20706, 31929, 57422, 18730, 96197, 22101, 47592, 2180, 18287, 82310, 60430, 59627, 26471, 7794, 60475, 76713, 45427, 89654, 14370, 81674, 41246, 98416, 8669, 48883, 77154, 9806, 94015, 60347, 20027, 8405, 33150, 27368, 53375, 70171, 59431, 14534, 34018, 85665, 77797, 17944, 49602, 74391, 48830, 55029, 10371, 94261, 16658, 68400, 44148, 28150, 40364, 90913, 73151, 64463, 50058, 78191, 84439, 82478, 62398, 3113, 17578, 12830, 6571, 95934, 9132, 25287, 78731, 80683, 67207, 76597, 42096, 34934, 76609, 52553, 47508, 71561, 8038, 83011, 72577, 95790, 40076, 20292, 32138, 61197, 95476, 23123, 26648, 13611, 48452, 39963, 85857, 4855, 27029, 1542, 72443, 53688, 82635, 56264, 7977, 23090, 93553, 65434, 12124, 91087, 87800, 95675, 99419, 44659, 30382, 55263, 82514, 86800, 16781, 65977, 65946, 13033, 93895, 4056, 75895, 47878, 91309, 51233, 81409, 46773, 69135, 56906, 84493, 34530, 84534, 38312, 54574, 92933, 77341, 20839, 36126, 1143, 35356, 35459, 7959, 98335, 53266, 36146, 78047, 50607, 22486, 63308, 8996, 96056, 39085, 26567, 6779, 62663, 30523, 47881, 41279, 49864, 82248, 78333, 29466, 48151, 41957, 93235, 53308, 22682, 90722, 54478, 7235, 34306, 15827, 20121, 96837, 6283, 80172, 66109, 92592, 48238, 76428, 94546, 45430, 16288, 74839, 740, 25553, 83767, 35900, 5998, 7493, 46755, 11449, 88824, 44906, 33143, 7454, 56652, 34755, 63992, 59674, 65131, 46358, 12799, 96988, 51158, 73176, 1184, 49925, 63519, 11785, 29073, 72850, 47997, 75172, 55187, 15313, 40725, 33225, 56643, 10465, 38583, 86440, 97967, 26401, 17078, 38765, 33454, 19136, 57712, 48446, 98790, 27315, 71074, 10157, 57946, 35582, 49383, 61324, 26572, 84503, 3496, 60449, 17962, 26017, 65651, 40400, 83246, 80056, 75306, 75147, 41863, 25581, 87530, 33193, 43294, 5065, 99644, 62771, 75986, 79005, 44924, 18703, 40889, 4403, 5862, 2571, 82500, 74200, 36170, 46836, 74642, 65471, 26815, 30937, 64946, 10160, 15544, 31962, 54015, 28853, 66533, 14573, 79398, 47391, 73165, 47805, 77589, 16881, 13423, 89452, 76992, 62509, 9796, 57540, 13486, 48855, 25546, 47589, 21012, 47388, 78428, 70196, 84413, 81026, 87597, 22445, 83769, 85937, 38321, 85485, 87359, 9839, 67228, 71179, 94372, 4446, 62801, 50775, 96179, 40646, 44272, 12417, 47199, 39701, 30665, 32775, 66525, 53558, 78882, 31939, 67209, 38906, 34533, 99914, 27719, 216, 99225, 96537, 3843, 90564, 91110, 51838, 30300, 9559, 37795, 94880, 11325, 44979, 89696, 28129, 29931, 89971, 46292, 92710, 11036, 74760, 75307, 12291, 49618, 16293, 92408, 67928, 80823, 32872, 25460, 66819, 35374, 4035, 99087, 61129, 11341, 39118, 10891, 37217, 63638, 75477, 30068, 42334, 57570, 6890, 59353, 89939, 37692, 15232, 20033, 32202, 22348, 2766, 96791, 58448, 92248, 5769, 96684, 67885, 99295, 47271, 38655, 59513, 96960, 31718, 8974, 16122, 20535, 52380, 29769, 70660, 57425, 50891, 75044, 84257, 73315, 38181, 28673, 93140, 26307, 82265, 78382, 19681, 56585, 8975, 76764, 39956, 83450, 84663, 89963, 71584, 57696, 30829, 60527, 64947, 34899, 28805, 28397, 91830, 51842, 99838, 39839, 66971, 67177, 74219, 35637, 35634, 93581, 81746, 29991, 81096, 94279, 2968, 62561, 2479, 82126, 25702, 67953, 88088, 50293, 83423, 86206, 39935, 23253, 43041, 48941, 85787, 8388, 6671, 43574, 84908, 67295, 33623, 55060, 28174, 48415, 2529, 22009, 24524, 5283, 30460, 32399, 80423, 56929, 40852, 69969, 88541, 5979, 91496, 64730, 57198, 83145, 39750, 3568, 54669, 98679, 4297, 51047, 31492, 47734, 31343, 31180, 232, 19707, 24823, 75079, 73943, 17997, 8446, 91252, 39879, 58682, 82972, 18417, 39203, 36681, 42895, 8459, 15618, 17941, 52594, 43277, 16530, 40052, 91100, 87422, 47230, 95699, 49794, 50492, 87439, 86354, 4546, 65333, 11057, 77727, 19748, 38722, 91821, 18107, 42125, 89239, 28847, 54623, 38783, 47803, 31414, 38450, 3697, 89186, 30579, 44188, 26532, 8420, 80723, 48100, 60748, 76330, 45832, 8311, 16051, 4475, 13400, 48527, 46073, 17439, 56498, 94632, 9021, 16871, 83366, 14896, 4219, 38375, 87890, 90217, 42370, 61028, 85101, 76771, 83715, 94737, 69973, 74187, 1958, 59691, 86712, 86570, 60984, 76342, 13648, 85250, 28323, 48379, 45141, 36277, 51845, 29039, 3553, 5128, 59866, 51281, 68124, 17007, 24729, 29710, 41439, 40574, 11774, 86746, 89698, 56020, 37810, 88972, 11361, 95583, 70786, 589, 74473, 87513, 17690, 61427, 72914, 32517, 1804, 97910, 6327, 30246, 33049, 2622, 41026, 80875, 41293, 16752, 84225, 84414, 37137, 68956, 8095, 64981, 28180, 38629, 76962, 23840, 17477, 75268, 48297, 70340, 57888, 13938, 38554, 86836, 2195, 30270, 55484, 53364, 54705, 41380, 56316, 37723, 234, 21424, 26664, 63804, 75139, 36534, 18579, 9833, 98849, 72762, 59767, 52497, 24227, 83152, 71794, 21398, 99456, 89215, 51632, 54799, 27973, 68568, 68465, 98500, 28681, 18369, 24279, 96335, 12874, 82160, 67202, 85199, 27908, 67022, 49810, 77929, 96212, 81153, 77884, 7032, 1671, 53362, 28119, 56786, 30883, 28540, 76029, 3774, 64611, 19736, 25589, 46569, 45206, 48215, 69523, 17423, 91807, 90039, 30393, 58319, 85098, 66519, 57571, 24541, 3562, 14400, 62731, 82534, 61477, 89731, 18421, 29861, 52829, 838, 78040, 43350, 74323, 82892, 84746, 28302, 13264, 7595, 134, 12933, 46831, 24864, 47275, 20527, 9110, 28485, 30326, 99826, 64005, 99308, 65779, 42760, 90066, 3974, 38688, 39968, 32604, 11694, 46262, 73262, 45405, 43923, 67397, 88228, 56405, 17839, 92073, 57622, 93328, 15442, 50186, 7570, 58001, 31e3, 8915, 11467, 14793, 82691, 51238, 12485, 51745, 18192, 5985, 36826, 89434, 38669, 91592, 88799, 65621, 67237, 59541, 19657, 93402, 58705, 73553, 78280, 69125, 95591, 81168, 91927, 25976, 89077, 71690, 19404, 64603, 59752, 74698, 44233, 67602, 38615, 31303, 28650, 53700, 89819, 7783, 4351, 77451, 47350, 21234, 16016, 41532, 76508, 23063, 44993, 43983, 33356, 61715, 96485, 22121, 78004, 6316, 87896, 99289, 93981, 37850, 66128, 92735, 45064, 50924, 24204, 58816, 65290, 34392, 55567, 66416, 72353, 45775, 68590, 85685, 72683, 60090, 37149, 85347, 57414, 72336, 12979, 5720, 92754, 76911, 96883, 74420, 5220, 85815, 23557, 80567, 44365, 70254, 50864, 36619, 51479, 23281, 76428, 18580, 34240, 59289, 49076, 18439, 29522, 42541, 4024, 84446, 92434, 90407, 77241, 19690, 78143, 65919, 13699, 91844, 91241, 38361, 67171, 90551, 5709, 3474, 76025, 97043, 33834, 44638, 54040, 82797, 545, 38159, 16089, 35870, 89158, 55864, 98078, 50563, 36492, 10994, 85909, 9018, 19252, 73887, 67928, 60045, 70782, 11937, 4074, 53814, 46621, 52577, 94853, 45968, 73667, 65062, 73306, 76045, 78649, 91654, 53958, 96537, 95542, 67622, 54579, 17279, 67440, 56441, 20681, 64011, 52226, 96618, 32831, 60664, 67547, 39523, 2043, 59748, 1887, 69229, 94653, 99271, 98164, 62155, 9234, 47367, 13047, 6364, 35064, 10073, 6793, 80248, 29009, 44969, 11129, 17139, 79630, 89772, 26921, 56949, 23465, 30036, 17173, 82459, 96218, 60768, 76417, 24405, 18710, 68887, 82394, 69729, 82503, 40873, 41590, 67255, 30757, 9657, 91881, 34578, 9511, 5417, 58953, 18532, 10721, 22029, 48524, 47778, 881, 83489, 3464, 57462, 97459, 86689, 39755, 39547, 740, 36666, 7993, 31671, 86304, 12970, 73402, 52849, 31652, 79655, 11250, 18463, 57518, 20306, 25301, 1374, 51208, 33298, 87662, 61849, 60923, 68685, 69411, 39266, 80320, 34844, 89416, 81569, 83651, 35795, 40168, 33501, 1042, 58931, 3892, 85188, 74740, 85476, 23790, 33842, 89565, 53359, 25579, 59049, 62394, 72435, 12457, 21904, 18370, 97035, 57905, 9581, 91227, 92754, 37760, 1411, 7440, 87175, 88318, 63242, 85960, 56690, 12618, 30493, 11569, 73723, 7448, 58830, 157, 65814, 21118, 22140, 73793, 57855, 81830, 6795, 13183, 12625, 30635, 56429, 73216, 12342, 36722, 83886, 96828, 82870, 90954, 97614, 2370, 42160, 73370, 11944, 49067, 59452, 80495, 43911, 46712, 17033, 68037, 41963, 3874, 44856, 82985, 57453, 84358, 16120, 4454, 76624, 405, 62369, 55080, 61880, 51270, 87807, 10653, 36894, 70850, 35660, 234, 14705, 93418, 94084, 82856, 25384, 71555, 56754, 78315, 18291, 91656, 98079, 52384, 43306, 65205, 75903, 58701, 99496, 50048, 33557, 87793, 90857, 10143, 46726, 84284, 43635, 41213, 83845, 70986, 91408, 80220, 5728, 68890, 46577, 21152, 43759, 43301, 93661, 97252, 50106, 10099, 13722, 18572, 44024, 351, 18173, 23717, 85114, 85998, 57782, 63951, 53723, 86853, 63851, 79430, 49181, 46386, 69666, 55743, 76162, 71724, 40028, 94786, 34457, 16906, 90040, 30789, 40281, 94697, 96584, 81907, 4055, 53990, 66397, 80579, 42517, 78181, 39251, 9467, 67097, 95523, 66568, 63632, 71048, 15581, 39904, 75774, 77495, 75994, 29911, 65690, 41178, 47712, 70355, 16998, 56025, 5230, 10093, 71495, 34784, 70950, 54680, 57811, 53782, 39145, 36829, 85342, 40406, 35883, 45668, 3459, 29870, 78252, 70088, 70621, 67153, 5737, 40933, 91075, 93335, 86853, 15860, 81167, 91259, 16118, 52401, 83593, 84474, 2423, 75608, 39646, 90871, 70284, 82100, 96032, 5115, 63678, 2225, 88087, 58581, 44364, 57468, 21539, 13042, 64150, 63754, 5210, 87644, 54114, 64013, 63562, 41388, 32397, 74152, 23982, 71982, 71700, 33026, 66477, 47838, 46712, 39848, 35083, 65927, 97868, 11067, 76771, 71799, 43836, 41014, 97025, 93225, 8511, 63096, 26628, 73012, 12543, 76269, 99708, 2629, 49845, 73677, 19193, 14924, 57236, 95564, 15010, 59667, 73773, 78515, 2624, 99744, 13585, 33746, 58771, 94785, 62628, 99585, 11363, 80832, 59979, 9444, 78700, 2596, 85984, 69438, 16913, 96475, 93283, 18625, 77086, 45911, 39746, 64722, 39938, 43930, 54619, 302, 50384, 2738, 75714, 75249, 95439, 80714, 52555, 47266, 96190, 78750, 94973, 83669, 16479, 53163, 48071, 28e3, 45011, 26733, 67132, 83362, 84162, 43028, 8415, 27236, 52651, 89059, 64844, 80910, 1676, 91752, 57815, 26264, 3415, 57532, 29981, 61200, 96036, 62600, 20068, 56530, 38487, 8432, 89514, 26883, 69165, 97237, 22361, 55276, 39902, 95927, 82190, 49269, 27212, 46095, 37106, 64254, 27460, 49572, 51700, 27679, 12574, 33891, 3867, 9925, 6476, 82018, 45094, 59014, 67113, 44192, 75, 23318, 79895, 70550, 81717, 28833, 30271, 15821, 14999, 88174, 62617, 57517, 55256, 50281, 51583, 96879, 5225, 42272, 5339, 20483, 57596, 41011, 75937, 22767, 50120, 95938, 49753, 63882, 99616, 69083, 38721, 73889, 80236, 99531, 23053, 71237, 48861, 59046, 76283, 60538, 19732, 93877, 30345, 64882, 66660, 17026, 70364, 45676, 8039, 96228, 89936, 59141, 95585, 89552, 97247, 59325, 27848, 80058, 15950, 61481, 90906, 40998, 44137, 16144, 66300, 44091, 50018, 81364, 18211, 60294, 76559, 20279, 27414, 10589, 39860, 23e3, 31767, 95618, 56738, 50332, 16936, 70342, 92481, 30702, 76264, 62619, 68678, 62284, 83112, 93032, 55203, 52614, 36950, 41796, 45403, 79262, 2887, 53596, 61308, 20738, 34811, 27099, 90956, 65448, 3080, 75795, 29753, 97699, 80872, 23830, 85882, 74427, 99523, 74904, 28017, 45898, 57232, 48525, 7086, 26805, 74533, 92470, 18840, 76011, 93109, 14344, 55614, 50284, 15865, 19458, 35856, 13464, 53679, 64603, 51571, 56124, 79107, 29596, 89572, 78198, 57121, 73649, 8804, 87977, 87959, 70859, 40909, 77295, 87877, 75158, 62810, 92074, 23244, 59516, 50552, 31602, 41899, 6347, 27821, 68370, 48596, 88577, 30231, 25267, 84622, 31449, 12086, 56461, 22962, 78213, 62483, 93966, 60437, 52239, 58113, 32526, 38708, 81607, 57016, 1695, 90110, 4649, 59990, 23979, 3855, 10297, 46516, 96092, 82305, 30760, 78756, 4967, 82876, 4773, 86651, 16648, 53133, 82439, 78851, 49766, 24553, 15273, 36417, 1901, 33386, 76979, 25920, 33372, 2695, 11982, 40911, 6230, 91696, 43907, 17827, 30332, 89203, 32215, 91806, 23080, 49102, 9174, 11548, 54590, 75803, 66108, 73882, 62324, 26017, 72716, 33887, 1285, 31604, 71039, 24337, 53514, 58964, 89901, 22040, 92751, 12617, 37007, 5523, 61672, 62557, 98540, 26094, 60284, 19621, 96230, 38044, 6545, 9458, 42988, 2913, 86345, 67936, 90174, 40840, 44991, 24256, 34989, 74086, 13652, 68706, 1363, 4294, 88008, 78693, 83068, 94746, 221, 89299, 53186, 5930, 61889, 51341, 45412, 58860, 72568, 11381, 59785, 36887, 10690, 31347, 93326, 96267, 86987, 57565, 86836, 49071, 90331, 41248, 34629, 30240, 27270, 3864, 84308, 3035, 61369, 36902, 51017, 44409, 17120, 23823, 36460, 63359, 8333, 63173, 19134, 6493, 303, 18550, 26191, 19051, 81502, 66343, 6737, 90430, 65478, 58982, 82484, 16483, 47704, 44640, 68322, 44548, 72787, 2335, 28749, 39320, 5436, 98146, 56596, 812, 51445, 35533, 35478, 47573, 38414, 25542, 38032, 13442, 42983, 97207, 77854, 57806, 81616, 52828, 79429, 47389, 96795, 57764, 19605, 24767, 63253, 18809, 65093, 44449, 22952, 76872, 30983, 38948, 9310, 48336, 87651, 27110, 84427, 76209, 56412, 12760, 16747, 14551, 82626, 31224, 98636, 75100, 84882, 79479, 83420, 5347, 6803, 90063, 4617, 40257, 79183, 41766, 71873, 25242, 12275, 336, 40798, 42055, 74066, 69128, 32547, 76508, 32530, 42359, 89207, 49758, 58984, 92732, 15779, 7234, 28884, 28226, 50011, 35883, 99606, 45423, 76224, 75427, 85747, 33879, 97978, 57441, 927, 19164, 74716, 40702, 19715, 70917, 60344, 40236, 9019, 50577, 15598, 53136, 57285, 20536, 7539, 74832, 89184, 41501, 39447, 97422, 97041, 21913, 40581, 76081, 13089, 28776, 54164, 55736, 36263, 71841, 34488, 74988, 55467, 43322, 9214, 36746, 67981, 71877, 81683, 32461, 84091, 19422, 88366, 62054, 85664, 13409, 8003, 88276, 6989, 16607, 33633, 85349, 5784, 25950, 97998, 74110, 16699, 60184, 92818, 79705, 10381, 1474, 18656, 50434, 18232, 92132, 66537, 70141, 42854, 25120, 39581, 28249, 14215, 34810, 19767, 3409, 11807, 6566, 66138, 42997, 41999, 67504, 87117, 28961, 5e3, 29673, 77726, 73225, 54753, 69712, 71576, 92337, 17713, 63185, 87923, 91889, 68351, 17712, 75532, 93849, 48280, 62219, 317, 25290, 29209, 90927, 92929, 92762, 60413, 2018, 31793, 76290, 73373, 80777, 60819, 77375, 57886, 47291, 99670, 32605, 29064, 99476, 80999, 31217, 35, 91300, 14892, 73653, 26593, 25305, 56797, 12837, 39560, 27582, 37253, 38531, 76489, 49946, 69108, 58687, 43092, 73807, 96282, 6648, 67431, 87124, 57694, 21660, 64002, 6, 33600, 30245, 60636, 80164, 9285, 61426, 4658, 54130, 14710, 76553, 1904, 93668, 63110, 98618, 5601, 32199, 74923, 98049, 49717, 55539, 35940, 58545, 43295, 35810, 45451, 38735, 42065, 66769, 69825, 45461, 83881, 67372, 67351, 90612, 79502, 69460, 23108, 74421, 82990, 46821, 40683, 71603, 55267, 48192, 50242, 79738, 96417, 6664, 19929, 23644, 41116, 51056, 219, 45086, 32747, 49492, 15399, 24874, 80825, 95928, 61457, 45813, 59037, 16136, 3953, 83583, 5910, 12654, 53630, 92997, 22168, 93491, 71897, 74579, 24022, 6278, 24049, 71670, 43044, 8474, 38572, 77402, 35800, 7455, 96177, 41653, 74493, 20802, 65843, 73050, 73349, 2638, 65813, 96209, 49196, 45007, 32207, 14097, 66059, 46681, 7534, 71263, 20582, 10171, 51514, 52142, 60961, 57951, 25637, 37860, 21683, 86190, 90434, 94481, 85697, 95344, 2606, 74095, 61133, 7472, 64777, 94050, 41482, 975, 23471, 76052, 82021, 87676, 91345, 20196, 2612, 86299, 44996, 40312, 65712, 46079, 88514, 8610, 3685, 63197, 9073, 53105, 86824, 28112, 99306, 40706, 66840, 83003, 51590, 52755, 32285, 68454, 85058, 13645, 23073, 24724, 52989, 71880, 21952, 44144, 74975, 76715, 7844, 46447, 86643, 75579, 29276, 10864, 83179, 36721, 19300, 35066, 29383, 47478, 56644, 33354, 31414, 17643, 92374, 85085, 88458, 87191, 85248, 34963, 76278, 53230, 13953, 76985, 70959, 36663, 5293, 32658, 56767, 56997, 76736, 6558, 64248, 11907, 29123, 78458, 17678, 63805, 89973, 5076, 39263, 54404, 4355, 64957, 74407, 99838, 18836, 78098, 6490, 74888, 73719, 80675, 86178, 56283, 33591, 96957, 38382, 18772, 74773, 71229, 2603, 52673, 44609, 14843, 58418, 18060, 95459, 626, 30914, 13550, 42195, 44863, 8871, 89182, 64446, 78422, 41140, 15312, 98274, 48168, 95651, 35562, 85386, 56252, 72136, 85088, 68761, 78434, 98143, 61330, 2446, 64409, 49406, 99127, 98626, 55095, 44808, 13594, 87370, 89472, 12833, 98932, 68064, 58193, 20225, 5192, 28425, 23978, 24542, 80845, 55858, 4015, 21454, 37346, 51007, 17202, 10242, 12682, 55933, 96922, 22280, 75597, 50227, 70712, 44236, 20470, 36320, 49339, 60536, 80083, 38880, 93327, 49522, 93585, 9918, 55268, 4671, 57526, 11457, 48424, 54610, 7211, 78610, 9473, 72923, 27347, 30057, 76968, 26177, 59367, 46172, 88951, 40229, 34921, 60405, 88959, 16779, 29547, 92231, 61997, 36002, 21080, 39795, 77221, 10012, 49748, 76900, 15964, 3803, 40260, 92351, 92844, 10288, 57483, 10881, 70408, 75688, 16610, 1638, 93082, 44282, 66849, 75702, 69428, 34047, 84968, 71281, 72328, 73143, 88672, 49802, 50639, 18129, 93659, 58389, 49095, 45971, 34196, 84609, 59222, 19332, 17777, 41004, 47057, 30688, 16039, 20906, 41477, 42915, 60877, 33864, 75195, 62294, 3371, 11672, 1370, 2486, 35553, 17907, 90621, 45136, 9722, 67635, 12114, 63055, 16004, 21625, 24321, 20491, 26881, 66259, 94287, 54751, 36242, 36557, 5842, 30687, 65418, 94608, 24741, 45887, 78800, 86912, 42076, 50287, 9284, 68891, 76368, 83094, 96302, 35997, 30761, 97081, 9501, 68887, 32876, 1705, 34260, 95065, 45528, 88241, 30402, 12318, 52430, 40139, 96986, 84900, 72408, 42027, 31676, 54382, 73370, 26184, 14024, 57444, 57660, 52173, 30274, 93448, 63273, 77681, 74946, 2099, 69091, 19372, 66961, 14595, 58642, 75760, 52253, 53148, 26074, 52293, 65359, 63971, 4833, 86492, 1227, 54505, 19515, 89889, 46933, 13364, 33883, 83389, 36952, 52505, 67513, 40071, 31001, 3105, 87912, 29610, 75108, 37363, 28479, 43546, 89992, 19550, 54863, 82633, 19209, 21548, 35022, 21960, 57961, 11815, 95867, 559, 26428, 69386, 57453, 70147, 73538, 49562, 46806, 64550, 36653, 25718, 68792, 31113, 7607, 48037, 71020, 22666, 65957, 11141, 39227, 7990, 19849, 65972, 74528, 40888, 55386, 95918, 92088, 91125, 53648, 66122, 138, 79933, 71058, 34826, 97725, 69513, 22915, 18246, 52244, 91161, 40861, 40374, 13239, 56162, 4703, 95851, 22824, 41271, 28202, 62852, 84238, 46625, 20031, 8524, 20077, 65817, 21174, 29279, 57712, 22401, 67500, 30980, 74485, 26480, 21343, 30031, 61921, 35744, 57308, 71196, 1865, 49234, 62616, 54021, 29008, 83672, 85839, 96836, 45077, 80900, 66906, 63526, 93824, 71820, 11033, 20183, 85704, 4683, 63512, 39144, 56880, 64424, 95979, 17709, 94849, 31771, 5737, 84286, 16757, 46256, 24478, 73180, 59978, 8254, 78963, 95437, 86351, 33824, 32540, 18357, 2668, 99260, 21284, 81351, 70961, 10255, 6911, 47394, 72408, 23827, 59865, 96395, 30665, 43699, 3593, 29165, 23388, 26628, 92402, 16731, 86740, 29493, 9069, 78653, 90094, 42735, 33682, 95041, 89887, 92369, 57949, 81585, 50593, 14698, 4737, 72551, 57271, 59433, 156, 33966, 58773, 59108, 49578, 18100, 59836, 73221, 21110, 1650, 11058, 47770, 66141, 84576, 58388, 40915, 94507, 32209, 17272, 65674, 95552, 25685, 5345, 36995, 36302, 7971, 67001, 62062, 75939, 36005, 26739, 56484, 46885, 66348, 87666, 78055, 44485, 82955, 85936, 9219, 1847, 92687, 72579, 45457, 78252, 98239, 4e4, 75563, 92408, 17175, 78845, 32638, 26959, 35406, 59553, 57852, 7506, 9, 93172, 77713, 93880, 40981, 27924, 9678, 24538, 52426, 84852, 83781, 23712, 82490, 77890, 22482, 66668, 55850, 25644, 44972, 62275, 78089, 28894, 98685, 32998, 98766, 89119, 34355, 75127, 69797, 71419, 62067, 57990, 96514, 50603, 79807, 26135, 29207, 43632, 32905, 38513, 18924, 88872, 20758, 70232, 60425, 1116, 24077, 21369, 93541, 75329, 78656, 44251, 42014, 98154, 42552, 14575, 30765, 348, 1134, 71581, 68420, 78141, 21105, 63305, 9718, 54851, 65867, 8595, 47390, 39182, 51174, 41478, 64433, 59628, 31945, 87322, 78667, 95282, 5622, 26224, 19972, 97269, 98376, 14779, 51138, 49658, 45345, 4972, 52794, 15737, 496, 48939, 63485, 42780, 16061, 59631, 37171, 13483, 56058, 51093, 62290, 88227, 17400, 88433, 67363, 89507, 26482, 85964, 71336, 67799, 28342, 37747, 61722, 27180, 78755, 18603, 42953, 6606, 23875, 56766, 1932, 36113, 62807, 84012, 21103, 9685, 69662, 76755, 13701, 95168, 13169, 44726, 15284, 16702, 89617, 54397, 52052, 12835, 37741, 86434, 22400, 37947, 95763, 86337, 35189, 22756, 47473, 16618, 42479, 47405, 14055, 64262, 66670, 89692, 54032, 94591, 44149, 29854, 76691, 33263, 62048, 25116, 88598, 16119, 62116, 54517, 31883, 86707, 18895, 81790, 71294, 2684, 15292, 48107, 14341, 91416, 75609, 92564, 39987, 2283, 89970, 95855, 80970, 5432, 89860, 90293, 99851, 94648, 5598, 32171, 28793, 92305, 64244, 8277, 93391, 96717, 34464, 29838, 10664, 28050, 60122, 77934, 10758, 84922, 92220, 45071, 97697, 36368, 17792, 84792, 76594, 67319, 51886, 5665, 45201, 11348, 9254, 7510, 51039, 91683, 84500, 85338, 5555, 19633, 3870, 39576, 41486, 58524, 54508, 20707, 58504, 39642, 22454, 80069, 83455, 31043, 90794, 51934, 3295, 26582, 16300, 74990, 22197, 83310, 69642, 81113, 58558, 84833, 17105, 46659, 25003, 85749, 44829, 4103, 67516, 76458, 52392, 53546, 70291, 98846, 67315, 30686, 18555, 29755, 5923, 22732, 19501, 56181, 85351, 5023, 4808, 56911, 16793, 75336, 49712, 27723, 96974, 34321, 5454, 12862, 71924, 45928, 95697, 68664, 58183, 78104, 42483, 71204, 99628, 40642, 56410, 17350, 13396, 76724, 87509, 9158, 83708, 27298, 92651, 95086, 38851, 63558, 89810, 1580, 32518, 35795, 26514, 56322, 78635, 63731, 91428, 7247, 66460, 38671, 26799, 22549, 47991, 46064, 80467, 40083, 17141, 39152, 99872, 27561, 75389, 74778, 94893, 82935, 99076, 93419, 10474, 84436, 47536, 16719, 60136, 80566, 28404, 74525, 74212, 3704, 65516, 98197, 34210, 64140, 22238, 49939, 99542, 27481, 21992, 78181, 90060, 71365, 66935, 29578, 14961, 8569, 9454, 43308, 66753, 45972, 93572, 16382, 87320, 37183, 25478, 38164, 31997, 69856, 60898, 63968, 62264, 4799, 17591, 89937, 73905, 55890, 88285, 2448, 40398, 54180, 65869, 45155, 43407, 39105, 339, 51619, 20203, 21189, 68245, 76912, 1222, 76411, 82679, 7, 66047, 32043, 42627, 16638, 27019, 15248, 66444, 8249, 18790, 82150, 54084, 84469, 3426, 50226, 99868, 88894, 43769, 66384, 8593, 41414, 2976, 60053, 51866, 87904, 74135, 53842, 59520, 67482, 16995, 32328, 29555, 49067, 2799, 68851, 41049, 97190, 53984, 99755, 46412, 45885, 64e3, 21962, 36438, 71742, 57223, 66599, 86071, 31436, 32667, 98099, 38399, 47377, 5171, 2742, 48803, 17823, 22093, 9866, 691, 5514, 25546, 2114, 5919, 56181, 96052, 67211, 61712, 25995, 3188, 23833, 38549, 44775, 55355, 61548, 55988, 47309, 23749, 30667, 70732, 33299, 16127, 30842, 78961, 41072, 9876, 18903, 30292, 25275, 61881, 15939, 72573, 84502, 92654, 97226, 53434, 77025, 63892, 12421, 33644, 39445, 30933, 84218, 13757, 37719, 84450, 2697, 60309, 22402, 80310, 92771, 45205, 72792, 95776, 85945, 74651, 216, 50842, 47854, 21916, 61588, 75405, 10495, 83083, 60427, 78495, 99809, 47890, 22993, 21508, 9459, 26845, 98130, 1184, 46438, 27698, 40652, 65654, 98517, 1096, 6998, 49133, 57041, 77983, 58708, 42176, 67356, 324, 70063, 10597, 65205, 25622, 34336, 16640, 27896, 26907, 86760, 48244, 89650, 44997, 51609, 28934, 9171, 97859, 97213, 19859, 41037, 64081, 94781, 27683, 41521, 52871, 86935, 26486, 38744, 25943, 60617, 6414, 42292, 46204, 53262, 30201, 38776, 88831, 97253, 67282, 72860, 18452, 60927, 81504, 57713, 30296, 10896, 39900, 67135, 42772, 4631, 55283, 39253, 25264, 1809, 12874, 88035, 88421, 90491, 83290, 6884, 15444, 90113, 20406, 20796, 40239, 34431, 15018, 45600, 17241, 26611, 9551, 89126, 65673, 31708, 91252, 39647, 63011, 24193, 58932, 89326, 33491, 53217, 27976, 70151, 37531, 53576, 23931, 11789, 73073, 52171, 89301, 51718, 15385, 79487, 66436, 35771, 34163, 86540, 42665, 80748, 77622, 14679, 40185, 25030, 42622, 13162, 17048, 24243, 59985, 59807, 60562, 3595, 10135, 29199, 69784, 59796, 38194, 58432, 50943, 40422, 63035, 3208, 81440, 90749, 88046, 32218, 88092, 22224, 2627, 91576, 16781, 43948, 57795, 71073, 27817, 87077, 82717, 24473, 42096, 76920, 88864, 90537, 14715, 42551, 45066, 24316, 37361, 38582, 21871, 14672, 93362, 21727, 57021, 94313, 39562, 64985, 94028, 46094, 43845, 91838, 79574, 7597, 3153, 56783, 18817, 74711, 6883, 91061, 31674, 73729, 99315, 66183, 57647, 74484, 68077, 33224, 397, 56753, 53158, 71872, 68153, 9298, 20961, 49656, 33407, 95683, 14328, 44708, 72952, 27048, 67887, 28741, 46752, 88177, 95894, 40086, 88534, 87112, 68614, 83073, 88794, 96799, 67588, 75049, 84603, 83140, 97347, 87316, 73087, 77135, 71883, 98643, 3808, 8848, 14133, 60447, 1366, 72976, 1868, 51667, 63279, 60040, 88264, 79152, 3474, 61366, 20523, 21584, 93712, 83654, 89761, 90154, 96345, 37539, 32556, 74254, 70603, 97122, 44978, 78028, 8943, 13778, 11080, 34271, 68276, 85372, 48410, 94516, 15427, 75323, 71685, 70774, 50342, 33771, 3678, 42321, 69788, 41758, 55004, 30992, 17402, 63523, 42328, 87171, 24751, 15084, 33884, 83655, 88345, 69602, 52606, 57886, 18034, 3381, 75796, 35901, 77480, 28683, 68324, 66035, 7223, 14926, 16128, 13645, 90370, 31949, 11057, 98849, 29499, 21565, 30786, 83292, 92392, 37104, 36899, 49906, 79368, 43710, 80365, 88735, 75275, 21664, 57965, 19002, 301, 12658, 94385, 1717, 96191, 50404, 80166, 93965, 24688, 27839, 10812, 31715, 92127, 42588, 93307, 80834, 11317, 26583, 25769, 98227, 14884, 58462, 29148, 68662, 26872, 72927, 79021, 51622, 29521, 33355, 45701, 45996, 33782, 93424, 16530, 96086, 17329, 74020, 11501, 46660, 5583, 22277, 77653, 55430, 84644, 448, 86828, 58855, 67451, 95264, 67386, 82424, 52611, 60012, 88620, 72894, 94716, 22262, 99813, 69592, 63464, 33163, 91857, 47904, 22209, 78590, 68615, 52952, 31441, 41313, 18550, 72685, 68825, 4795, 53971, 14592, 39634, 23682, 76630, 2731, 81481, 86542, 23727, 54291, 56045, 61635, 32186, 9355, 73416, 63532, 24340, 18886, 84832, 30654, 48543, 18339, 65024, 91197, 64624, 74648, 9660, 27897, 49771, 11123, 8732, 49393, 12911, 72416, 17834, 18878, 62754, 85072, 23727, 56577, 51257, 83291, 12329, 16203, 91681, 68137, 79959, 43609, 58987, 2026, 42969, 59144, 84349, 75214, 76972, 22633, 64104, 53799, 16851, 99197, 70476, 77113, 46320, 88693, 37711, 96536, 68156, 7119, 2104, 49435, 77706, 18924, 24957, 92406, 87148, 70482, 36491, 42605, 54440, 7893, 31618, 35707, 65130, 30007, 75706, 77266, 37100, 9601, 87681, 42543, 69847, 81848, 32034, 49429, 99434, 62209, 17125, 55227, 61634, 52574, 83649, 28725, 70119, 62467, 80676, 21192, 99584, 21310, 25292, 72781, 17186, 10393, 98390, 19789, 92931, 36234, 62627, 23437, 3885, 58822, 82941, 43806, 8172, 23790, 72295, 36196, 98200, 2889, 87619, 13846, 56197, 27151, 21238, 48794, 81100, 62643, 40001, 39243, 33213, 78416, 194, 91369, 79342, 36404, 52308, 13741, 24442, 88610, 12659, 11574, 70052, 93039, 79367, 41792, 61816, 35435, 47192, 97596, 28330, 41145, 16918, 62865, 9576, 45857, 68737, 90124, 16703, 7071, 48433, 57222, 34435, 800, 72496, 16449, 68187, 28739, 97672, 86818, 50768, 40807, 88681, 64340, 2224, 19703, 59245, 90905, 31239, 84216, 93942, 97371, 16842, 92168, 52692, 16064, 84686, 89444, 27938, 98406, 41365, 4515, 20494, 18813, 16242, 10634, 61566, 18592, 78057, 8720, 33739, 78345, 87693, 30242, 70545, 55521, 23687, 9160, 8655, 38811, 61768, 7228, 5567, 5561, 82071, 85, 50145, 23113, 97761, 88441, 14891, 72188, 85166, 37189, 75671, 81377, 92470, 73645, 93258, 6610, 12185, 43065, 26704, 47922, 56650, 7527, 18006, 56948, 51675, 16658, 66402, 1047, 81624, 77395, 62310, 73262, 66050, 57275, 32936, 87641, 51528, 58183, 21952, 84098, 28913, 28622, 18140, 89796, 41317, 93954, 67690, 64667, 57092, 21315, 4731, 76115, 77291, 11204, 8634, 93034, 27411, 27149, 13843, 9817, 9407, 84492, 28444, 59901, 14592, 89654, 66207, 66232, 80293, 74502, 36925, 55515, 10121, 16768, 4720, 71502, 40500, 21406, 571, 87320, 81683, 42788, 86367, 44686, 22159, 67015, 35892, 49668, 83991, 72088, 30210, 74009, 86370, 97956, 2132, 93512, 54819, 26094, 51409, 21485, 94764, 85806, 13393, 48543, 7042, 76538, 64224, 47909, 9994, 23750, 17351, 52141, 30486, 60380, 86546, 66606, 36913, 58173, 45709, 83679, 82617, 23381, 9603, 61107, 566, 6572, 64745, 10614, 86371, 43244, 97154, 10397, 50975, 68006, 20045, 16942, 25536, 74031, 31807, 70133, 78790, 40341, 68730, 39635, 39013, 66841, 44043, 96215, 21270, 59427, 25034, 40645, 84741, 52083, 54503, 36861, 27659, 95463, 53847, 40921, 70116, 61536, 56756, 8967, 31079, 20097, 76014, 99818, 16606, 19713, 66904, 27106, 24874, 96701, 73287, 76772, 6073, 57343, 51428, 91171, 28299, 17520, 64903, 4177, 36071, 94952, 59008, 28543, 11576, 74547, 13260, 20688, 41261, 2780, 6633, 37536, 8844, 95774, 49323, 30448, 14154, 83379, 71259, 23302, 68402, 43750, 88505, 15575, 44927, 6584, 29867, 21541, 65763, 12154, 86616, 79877, 73259, 68626, 98962, 68548, 86576, 48046, 51755, 64995, 3661, 64585, 81550, 46798, 49319, 50206, 22024, 5175, 12923, 23427, 55915, 91723, 55831, 83784, 81034, 86779, 34622, 84570, 18960, 48798, 42970, 95789, 39465, 82353, 68905, 44234, 18244, 54345, 5592, 89361, 14644, 67924, 66415, 89349, 88530, 72096, 44459, 5258, 48317, 48866, 56886, 90458, 75889, 4514, 37227, 11302, 4667, 2129, 80414, 86289, 15887, 87380, 50749, 83220, 50529, 20619, 11606, 36531, 23409, 78122, 19566, 76564, 33045, 66703, 30017, 35347, 35038, 12952, 13971, 3922, 98702, 11786, 38388, 69556, 76728, 60535, 59961, 23634, 42211, 98387, 34880, 27755, 93182, 99040, 96390, 65989, 38375, 3652, 59657, 57431, 24666, 11061, 64713, 85185, 72849, 58611, 31220, 26657, 77056, 24553, 24993, 5210, 89024, 32054, 46997, 92652, 28363, 98992, 22593, 97710, 47766, 37646, 93573, 95502, 33790, 92973, 27766, 62671, 89698, 10877, 73893, 41004, 96035, 18795, 48080, 59666, 30241, 35233, 87353, 43647, 13404, 41982, 19264, 29229, 61369, 8309, 39383, 42305, 25944, 13577, 51545, 68990, 69801, 37145, 79189, 55897, 57793, 66816, 21930, 56771, 79296, 73793, 21632, 42301, 23696, 72641, 56310, 85576, 3004, 25669, 69221, 32996, 23040, 65782, 23712, 13414, 10758, 15590, 97298, 74246, 51511, 46900, 36795, 38292, 3852, 6384, 84421, 3446, 91670, 45312, 27609, 87034, 6683, 83891, 88991, 16533, 9197, 34427, 60384, 48525, 90978, 46107, 21693, 12956, 21804, 46558, 37682, 81207, 85840, 53238, 35026, 4835, 53264, 41376, 17783, 64756, 39278, 25403, 33042, 20954, 31193, 24247, 45911, 92453, 25370, 86602, 48574, 57865, 26436, 16122, 76614, 17028, 21262, 59718, 77821, 14036, 31033, 90563, 45410, 15158, 90209, 84089, 38053, 60780, 54166, 14255, 33120, 27171, 71798, 91214, 80040, 56699, 12475, 40193, 59415, 4769, 75920, 1036, 2692, 75862, 16612, 73670, 61182, 3305, 90334, 187, 91659, 28063, 75684, 50017, 82643, 9282, 77376, 85469, 8164, 5584, 36623, 82597, 83859, 3435, 98460, 70095, 80257, 4381, 6501, 8924, 35514, 14297, 54373, 71369, 5172, 15955, 82441, 4636, 48215, 6821, 3385, 17663, 40107, 55679, 30366, 42390, 95895, 16083, 58499, 17176, 55993, 51034, 49296, 4010, 78974, 35930, 2019, 96226, 27167, 68245, 53109, 59037, 37843, 79243, 10262, 58797, 61490, 82590, 52411, 54783, 29447, 94551, 30026, 97959, 93939, 73217, 82573, 62154, 78291, 33728, 39102, 11484, 86210, 43794, 73553, 87435, 1110, 77108, 56521, 78610, 8254, 1842, 43068, 70415, 79195, 26136, 49786, 47279, 38471, 20379, 54704, 86614, 91138, 51595, 50818, 80186, 73087, 17262, 94735, 4952, 27935, 4928, 74862, 51392, 62388, 9570, 38485, 30594, 56278, 47395, 72762, 94597, 72279, 16010, 34697, 54475, 67874, 78014, 88381, 4045, 41494, 55178, 46054, 24373, 1824, 55333, 7525, 97908, 61178, 84635, 2199, 35361, 4803, 21907, 79414, 66083, 54782, 58692, 28332, 41851, 28198, 55819, 37313, 67046, 16147, 90478, 71230, 34141, 85002, 44332, 35906, 429, 39744, 773, 22909, 19536, 98986, 90945, 45209, 85439, 92265, 25291, 22775, 60611, 49159, 95701, 36113, 53923, 60824, 84935, 29656, 50007, 86624, 61691, 76150, 32187, 42765, 60660, 13859, 10792, 88210, 29374, 29563, 45188, 28811, 19739, 67649, 73775, 99247, 48414, 91067, 68253, 9452, 90116, 91737, 73979, 62370, 69112, 58791, 20349, 71480, 56852, 36919, 87977, 77609, 68738, 85159, 4918, 70076, 46473, 4122, 57713, 1426, 50987, 77910, 66211, 62546, 77749, 96462, 34304, 77441, 12104, 91805, 10287, 60943, 49632, 83116, 25716, 23113, 22707, 77770, 31176, 6759, 46130, 4739, 55554, 3843, 31653, 70834, 72877, 41561, 36903, 23010, 6663, 2266, 16360, 70118, 91936, 17098, 77278, 4880, 23484, 94970, 41826, 46733, 93484, 68350, 38861, 18134, 32936, 241, 24803, 13876, 93278, 5039, 35873, 44418, 5305, 28510, 36115, 46717, 15238, 78607, 23464, 68635, 55712, 55007, 92411, 65739, 4858, 67537, 37041, 67453, 89801, 45963, 14800, 14225, 65655, 80463, 9716, 77255, 65136, 11230, 76323, 81433, 36445, 86523, 61058, 59560, 19380, 40791, 48073, 29626, 36661, 87907, 57369, 41623, 13705, 3880, 45088, 55444, 41003, 27754, 1450, 75312, 71801, 99600, 60719, 54182, 29245, 63315, 73758, 42973, 32702, 10855, 56363, 14638, 84424, 27178, 78195, 3133, 70865, 48019, 26117, 7151, 52107, 85562, 41347, 50486, 69457, 86961, 95482, 11857, 93587, 45680, 42145, 13029, 10043, 5142, 49213, 54525, 85761, 42707, 70754, 33768, 87671, 85038, 58900, 88438, 20004, 63390, 14815, 38875, 73417, 82875, 89481, 55517, 944, 15773, 61814, 32915, 27868, 5510, 21916, 28426, 89881, 16680, 88850, 11056, 51991, 4230, 39107, 49216, 40065, 4523, 75848, 95349, 56034, 10724, 9885, 88232, 42478, 65702, 95696, 39746, 66032, 88082, 86905, 30007, 75068, 66629, 7358, 26706, 90511, 72843, 67857, 20061, 98581, 69682, 38e3, 14186, 70, 2290, 17269, 30909, 69449, 19997, 13275, 2444, 84985, 51290, 97641, 15092, 69650, 21920, 19617, 7418, 49725, 91090, 20805, 28627, 80665, 67192, 34697, 57667, 99323, 50101, 40587, 35081, 14037, 34414, 19898, 60779, 83267, 87499, 29596, 41852, 15813, 32419, 72232, 8322, 39184, 46525, 13833, 65743, 94595, 37363, 4711, 35386, 96413, 10627, 62625, 56555, 12919, 93218, 25191, 98380, 51923, 66181, 5788, 73491, 1452, 487, 12277, 45415, 11884, 61300, 94528, 9181, 26616, 11455, 31514, 63290, 45035, 42759, 33804, 85721, 80979, 46010, 50975, 72482, 31231, 3086, 58941, 46102, 25773, 89742, 29788, 96741, 88523, 14922, 88262, 76305, 57676, 93259, 2396, 69145, 26074, 30056, 3853, 75317, 56639, 66203, 38923, 48939, 22813, 91864, 10934, 6714, 84099, 25631, 73223, 95630, 97552, 45950, 22197, 42886, 33764, 1263, 41856, 82057, 62349, 94091, 78028, 62651, 18911, 5693, 92561, 97821, 41994, 92343, 76785, 22216, 4203, 5038, 86151, 23596, 24338, 77181, 51761, 97693, 10955, 98159, 37568, 58932, 72128, 27303, 99608, 31688, 57557, 91022, 43036, 93927, 32869, 53653, 55205, 33139, 47271, 31224, 51650, 36422, 86857, 73799, 22068, 43376, 84760, 44898, 65776, 42451, 71480, 38509, 41673, 44141, 75918, 95652, 68981, 83001, 48815, 98086, 67950, 27986, 33175, 43624, 55274, 71051, 61124, 51550, 64967, 31570, 15748, 19159, 38174, 51078, 79811, 39183, 57527, 96550, 85168, 28824, 47466, 56993, 13151, 96664, 29735, 70251, 1079, 4314, 77714, 11507, 1440, 48415, 31984, 99915, 20282, 26524, 18057, 4992, 40521, 98108, 84045, 91961, 79256, 72244, 25788, 5487, 23595, 73302, 14205, 8925, 27625, 64343, 28821, 37992, 67156, 83320, 31106, 10884, 30735, 15067, 51091, 15668, 48777, 50770, 19169, 76504, 41165, 29749, 92812, 8065, 66782, 26841, 1411, 95461, 61134, 18699, 52261, 60469, 81373, 44825, 11448, 73320, 30151, 56991, 31372, 6655, 36472, 86292, 30247, 30931, 21029, 53410, 9859, 37267, 47514, 3492, 49008, 94727, 25234, 40546, 53417, 36492, 25723, 76227, 58456, 15979, 34876, 9574, 34392, 3751, 36933, 83921, 65108, 63135, 67572, 40184, 21098],
        f = new Array(16), l = [16, 8, 16, 24], p = 4, y = 0;

    function b(t, e) {
        var s = e - t + 1, n = 0, r = 1;
        do {
            for (n = 0, r = 1; r < s; r *= 10) n = 10 * n + (p < 0 && (p = 4, y++), u[y] % Math.pow(10, p + 1) / Math.pow(10, p--) | 0)
        } while ((r / s | 0) * s <= n);
        return t + n % s | 0
    }

    !function (t) {
        for (var e = 0; e < 16; e++) {
            f[e] = new Array(256);
            for (var s = 0; s < 256; s++) f[e][s] = s | s << 8 | s << 16 | s << 24 | 0;
            for (var n = 3; 0 <= n; n--) for (var r = 0; r < 255; r++) {
                var a = 255 << (n << 3), o = 0 | f[e][r], i = b(r, 255);
                f[e][r] = f[e][r] & ~a | f[e][i] & a | 0, f[e][i] = f[e][i] & ~a | o & a | 0
            }
        }
    }();
    var g = function () {
        function t(e) {
            var s;
            return function (e, s) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), (e = e || {}).length = e.length || 128, e.rounds = e.rounds || 8, (s = function (t, e) {
                return !e || "object" !== a(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }(this, h(t).call(this, e))).blockSize = 16 - s.state.hash.length, s.blockSizeInBytes = s.blockSize * s.unitSize, s.W = new Array(16), s
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(t, n.a), function (t, e, s) {
            e && o(t.prototype, e)
        }(t, [{
            key: "reset", value: function () {
                i(h(t.prototype), "reset", this).call(this), this.state.hash = new Array(this.options.length / 32 | 0);
                for (var e = 0; e < this.state.hash.length; e++) this.state.hash[e] = 0
            }
        }, {
            key: "processBlock", value: function (t) {
                for (var e = 0; e < this.state.hash.length; e++) this.W[e] = 0 | this.state.hash[e];
                for (var s = this.state.hash.length; s < 16; s++) this.W[s] = 0 | t[s - this.state.hash.length];
                for (var n = 0; n < this.options.rounds << 1; n += 2) for (var a = 0; a < 4; a++) {
                    for (var o = 0; o < 16; o++) {
                        var i = 0 | f[n + (o / 2 | 0) % 2][255 & this.W[o]];
                        this.W[o - 1 >>> 0 & 15] ^= i, this.W[o + 1 & 15] ^= i
                    }
                    for (var h = 0; h < 16; h++) this.W[h] = Object(r.b)(this.W[h], l[a])
                }
                for (var c = 0; c < this.state.hash.length; c++) this.state.hash[c] = this.state.hash[c] ^ this.W[15 - c] | 0
            }
        }, {
            key: "finalize", value: function () {
                return 0 < this.state.message.length && this.addPaddingZero(this.blockSizeInBytes - this.state.message.length | 0), this.addPaddingZero(this.blockSizeInBytes - 8 | 0), this.addLengthBits(), this.process(), this.getStateHash()
            }
        }]), t
    }();
    e.a = g
}, function (t, e, s) {
    "use strict";
    var n = s(5), r = s(0);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, e, s) {
        return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, s) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(s) : r.value
            }
        })(t, e, s || t)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    for (var u = [[7, 12, 17, 22], [5, 9, 14, 20], [4, 11, 16, 23], [6, 10, 15, 21]], f = new Array(64), l = 0; l < 64; l++) f[l] = 4294967296 * Math.abs(Math.sin(l + 1)) | 0;
    var p = function () {
        function t() {
            return function (e, s) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), function (t, e) {
                return !e || "object" !== a(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }(this, h(t).apply(this, arguments))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(t, n.a), function (t, e, s) {
            e && o(t.prototype, e), s && o(t, s)
        }(t, [{
            key: "reset", value: function () {
                i(h(t.prototype), "reset", this).call(this), this.state.hash = [1732584193, -271733879, -1732584194, 271733878]
            }
        }, {
            key: "processBlock", value: function (e) {
                var s = 0 | this.state.hash[0], n = 0 | this.state.hash[1], r = 0 | this.state.hash[2],
                    a = 0 | this.state.hash[3];
                s = t.CC(t.FF, f[0], s, n, r, a, e[0], u[0][0]), a = t.CC(t.FF, f[1], a, s, n, r, e[1], u[0][1]), r = t.CC(t.FF, f[2], r, a, s, n, e[2], u[0][2]), n = t.CC(t.FF, f[3], n, r, a, s, e[3], u[0][3]), s = t.CC(t.FF, f[4], s, n, r, a, e[4], u[0][0]), a = t.CC(t.FF, f[5], a, s, n, r, e[5], u[0][1]), r = t.CC(t.FF, f[6], r, a, s, n, e[6], u[0][2]), n = t.CC(t.FF, f[7], n, r, a, s, e[7], u[0][3]), s = t.CC(t.FF, f[8], s, n, r, a, e[8], u[0][0]), a = t.CC(t.FF, f[9], a, s, n, r, e[9], u[0][1]), r = t.CC(t.FF, f[10], r, a, s, n, e[10], u[0][2]), n = t.CC(t.FF, f[11], n, r, a, s, e[11], u[0][3]), s = t.CC(t.FF, f[12], s, n, r, a, e[12], u[0][0]), a = t.CC(t.FF, f[13], a, s, n, r, e[13], u[0][1]), r = t.CC(t.FF, f[14], r, a, s, n, e[14], u[0][2]), n = t.CC(t.FF, f[15], n, r, a, s, e[15], u[0][3]), s = t.CC(t.GG, f[16], s, n, r, a, e[1], u[1][0]), a = t.CC(t.GG, f[17], a, s, n, r, e[6], u[1][1]), r = t.CC(t.GG, f[18], r, a, s, n, e[11], u[1][2]), n = t.CC(t.GG, f[19], n, r, a, s, e[0], u[1][3]), s = t.CC(t.GG, f[20], s, n, r, a, e[5], u[1][0]), a = t.CC(t.GG, f[21], a, s, n, r, e[10], u[1][1]), r = t.CC(t.GG, f[22], r, a, s, n, e[15], u[1][2]), n = t.CC(t.GG, f[23], n, r, a, s, e[4], u[1][3]), s = t.CC(t.GG, f[24], s, n, r, a, e[9], u[1][0]), a = t.CC(t.GG, f[25], a, s, n, r, e[14], u[1][1]), r = t.CC(t.GG, f[26], r, a, s, n, e[3], u[1][2]), n = t.CC(t.GG, f[27], n, r, a, s, e[8], u[1][3]), s = t.CC(t.GG, f[28], s, n, r, a, e[13], u[1][0]), a = t.CC(t.GG, f[29], a, s, n, r, e[2], u[1][1]), r = t.CC(t.GG, f[30], r, a, s, n, e[7], u[1][2]), n = t.CC(t.GG, f[31], n, r, a, s, e[12], u[1][3]), s = t.CC(t.HH, f[32], s, n, r, a, e[5], u[2][0]), a = t.CC(t.HH, f[33], a, s, n, r, e[8], u[2][1]), r = t.CC(t.HH, f[34], r, a, s, n, e[11], u[2][2]), n = t.CC(t.HH, f[35], n, r, a, s, e[14], u[2][3]), s = t.CC(t.HH, f[36], s, n, r, a, e[1], u[2][0]), a = t.CC(t.HH, f[37], a, s, n, r, e[4], u[2][1]), r = t.CC(t.HH, f[38], r, a, s, n, e[7], u[2][2]), n = t.CC(t.HH, f[39], n, r, a, s, e[10], u[2][3]), s = t.CC(t.HH, f[40], s, n, r, a, e[13], u[2][0]), a = t.CC(t.HH, f[41], a, s, n, r, e[0], u[2][1]), r = t.CC(t.HH, f[42], r, a, s, n, e[3], u[2][2]), n = t.CC(t.HH, f[43], n, r, a, s, e[6], u[2][3]), s = t.CC(t.HH, f[44], s, n, r, a, e[9], u[2][0]), a = t.CC(t.HH, f[45], a, s, n, r, e[12], u[2][1]), r = t.CC(t.HH, f[46], r, a, s, n, e[15], u[2][2]), n = t.CC(t.HH, f[47], n, r, a, s, e[2], u[2][3]), s = t.CC(t.II, f[48], s, n, r, a, e[0], u[3][0]), a = t.CC(t.II, f[49], a, s, n, r, e[7], u[3][1]), r = t.CC(t.II, f[50], r, a, s, n, e[14], u[3][2]), n = t.CC(t.II, f[51], n, r, a, s, e[5], u[3][3]), s = t.CC(t.II, f[52], s, n, r, a, e[12], u[3][0]), a = t.CC(t.II, f[53], a, s, n, r, e[3], u[3][1]), r = t.CC(t.II, f[54], r, a, s, n, e[10], u[3][2]), n = t.CC(t.II, f[55], n, r, a, s, e[1], u[3][3]), s = t.CC(t.II, f[56], s, n, r, a, e[8], u[3][0]), a = t.CC(t.II, f[57], a, s, n, r, e[15], u[3][1]), r = t.CC(t.II, f[58], r, a, s, n, e[6], u[3][2]), n = t.CC(t.II, f[59], n, r, a, s, e[13], u[3][3]), s = t.CC(t.II, f[60], s, n, r, a, e[4], u[3][0]), a = t.CC(t.II, f[61], a, s, n, r, e[11], u[3][1]), r = t.CC(t.II, f[62], r, a, s, n, e[2], u[3][2]), n = t.CC(t.II, f[63], n, r, a, s, e[9], u[3][3]), this.state.hash[0] = this.state.hash[0] + s | 0, this.state.hash[1] = this.state.hash[1] + n | 0, this.state.hash[2] = this.state.hash[2] + r | 0, this.state.hash[3] = this.state.hash[3] + a | 0
            }
        }, {
            key: "finalize", value: function () {
                return this.addPaddingISO7816(this.state.message.length < 56 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0), this.addLengthBits(), this.process(), this.getStateHash()
            }
        }], [{
            key: "FF", value: function (t, e, s) {
                return t & e | ~t & s
            }
        }, {
            key: "GG", value: function (t, e, s) {
                return t & s | e & ~s
            }
        }, {
            key: "HH", value: function (t, e, s) {
                return t ^ e ^ s
            }
        }, {
            key: "II", value: function (t, e, s) {
                return e ^ (t | ~s)
            }
        }, {
            key: "CC", value: function (t, e, s, n, a, o, i, h) {
                return Object(r.a)(s + t(n, a, o) + i + e, h) + n | 0
            }
        }]), t
    }();
    e.a = p
}, function (t, e, s) {
    "use strict";
    var n = s(3), r = s(0);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, e, s) {
        return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, s) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(s) : r.value
            }
        })(t, e, s || t)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var u = [1518500249, 1859775393, 2400959708, 3395469782], f = function () {
        function t(e) {
            var s;
            return function (e, s) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), (s = function (t, e) {
                return !e || "object" !== a(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }(this, h(t).call(this, e))).options.rounds = s.options.rounds || 80, s.W = new Array(80), s
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(t, n.a), function (t, e, s) {
            e && o(t.prototype, e)
        }(t, [{
            key: "reset", value: function () {
                i(h(t.prototype), "reset", this).call(this), this.state.hash = [1732584193, -271733879, -1732584194, 271733878, -1009589776]
            }
        }, {
            key: "processBlock", value: function (t) {
                for (var e = 0 | this.state.hash[0], s = 0 | this.state.hash[1], n = 0 | this.state.hash[2], a = 0 | this.state.hash[3], o = 0 | this.state.hash[4], i = 0; i < this.options.rounds; i++) {
                    this.W[i] = i < 16 ? 0 | t[i] : 0 | Object(r.a)(this.W[i - 3] ^ this.W[i - 8] ^ this.W[i - 14] ^ this.W[i - 16], 1);
                    var h = Object(r.a)(e, 5) + o + this.W[i] + u[i / 20 >> 0] | 0;
                    h = i < 20 ? h + (s & n | ~s & a) | 0 : i < 40 ? h + (s ^ n ^ a) | 0 : i < 60 ? h + (s & n | s & a | n & a) | 0 : h + (s ^ n ^ a) | 0, o = a, a = n, n = 0 | Object(r.a)(s, 30), s = e, e = h
                }
                this.state.hash[0] = this.state.hash[0] + e | 0, this.state.hash[1] = this.state.hash[1] + s | 0, this.state.hash[2] = this.state.hash[2] + n | 0, this.state.hash[3] = this.state.hash[3] + a | 0, this.state.hash[4] = this.state.hash[4] + o | 0
            }
        }, {
            key: "finalize", value: function () {
                return this.addPaddingISO7816(this.state.message.length < 56 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0), this.addLengthBits(), this.process(), this.getStateHash()
            }
        }]), t
    }();
    e.a = f
}, function (t, e, s) {
    "use strict";
    var n = s(0), r = s(3);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, e, s) {
        return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, s) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(s) : r.value
            }
        })(t, e, s || t)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var u = new Array(256),
        f = [104, 208, 235, 43, 72, 157, 106, 228, 227, 163, 86, 129, 125, 241, 133, 158, 44, 142, 120, 202, 23, 169, 97, 213, 93, 11, 140, 60, 119, 81, 34, 66, 63, 84, 65, 128, 204, 134, 179, 24, 46, 87, 6, 98, 244, 54, 209, 107, 27, 101, 117, 16, 218, 73, 38, 249, 203, 102, 231, 186, 174, 80, 82, 171, 5, 240, 13, 115, 59, 4, 32, 254, 221, 245, 180, 95, 10, 181, 192, 160, 113, 165, 45, 96, 114, 147, 57, 8, 131, 33, 92, 135, 177, 224, 0, 195, 18, 145, 138, 2, 28, 230, 69, 194, 196, 253, 191, 68, 161, 76, 51, 197, 132, 35, 124, 176, 37, 21, 53, 105, 255, 148, 77, 112, 162, 175, 205, 214, 108, 183, 248, 9, 243, 103, 164, 234, 236, 182, 212, 210, 20, 30, 225, 36, 56, 198, 219, 75, 122, 58, 222, 94, 223, 149, 252, 170, 215, 206, 7, 15, 61, 88, 154, 152, 156, 242, 167, 17, 126, 139, 67, 3, 226, 220, 229, 178, 78, 199, 109, 233, 39, 64, 216, 55, 146, 143, 1, 29, 83, 62, 89, 193, 79, 50, 22, 250, 116, 251, 99, 159, 52, 26, 42, 90, 141, 201, 207, 246, 144, 40, 136, 155, 49, 14, 189, 74, 232, 150, 166, 12, 200, 121, 188, 190, 239, 110, 70, 151, 91, 237, 25, 217, 172, 153, 168, 41, 100, 31, 173, 85, 19, 187, 247, 111, 185, 71, 47, 238, 184, 123, 137, 48, 211, 127, 118, 130],
        l = [1, 11, 9, 12, 13, 6, 15, 3, 14, 8, 7, 4, 10, 2, 5, 0],
        p = [7, 12, 11, 13, 14, 4, 9, 15, 6, 3, 8, 10, 2, 5, 1, 0], y = new Array(16), b = [1, 1, 4, 1, 8, 5, 2, 9],
        g = [1, 1, 3, 1, 5, 8, 9, 5], C = new Array(512), v = new Array(22), d = new Array(512), O = new Array(22),
        m = new Array(512), w = new Array(22);

    function j(t, e) {
        for (var s = new Array(512), r = new Array(22), a = 0; a < 8; a++) s[a] = [];
        for (var o = 0; o < 256; o++) {
            var i = new Array(10);
            i[1] = t[o], i[2] = i[1] << 1, 256 <= i[2] && (i[2] ^= 285), i[3] = i[2] ^ i[1], i[4] = i[2] << 1, 256 <= i[4] && (i[4] ^= 285), i[5] = i[4] ^ i[1], i[8] = i[4] << 1, 256 <= i[8] && (i[8] ^= 285), i[9] = i[8] ^ i[1], s[0][2 * o] = i[e[0]] << 24 | i[e[1]] << 16 | i[e[2]] << 8 | i[e[3]], s[0][2 * o + 1] = i[e[4]] << 24 | i[e[5]] << 16 | i[e[6]] << 8 | i[e[7]];
            for (var h = 1; h < 8; h++) s[h][2 * o] = Object(n.d)(s[0][2 * o + 1], s[0][2 * o], h << 3), s[h][2 * o + 1] = Object(n.c)(s[0][2 * o + 1], s[0][2 * o], h << 3)
        }
        r[0] = 0, r[1] = 0;
        for (var c = 1; c <= 10; c++) r[2 * c] = 4278190080 & s[0][16 * c - 16] ^ 16711680 & s[1][16 * c - 14] ^ 65280 & s[2][16 * c - 12] ^ 255 & s[3][16 * c - 10], r[2 * c + 1] = 4278190080 & s[4][16 * c - 7] ^ 16711680 & s[5][16 * c - 5] ^ 65280 & s[6][16 * c - 3] ^ 255 & s[7][16 * c - 1];
        return [s, r]
    }

    !function () {
        !function () {
            for (var t = 0; t < 16; t++) y[l[t]] = 0 | t;
            for (var e = 0; e < 256; e++) {
                var s = l[e >> 4], n = y[15 & e], r = p[s ^ n];
                u[e] = l[s ^ r] << 4 | y[n ^ r]
            }
        }();
        var t = j(f, g);
        d = t[0], O = t[1], t = j(u, g), m = t[0], w = t[1], t = j(u, b), C = t[0], v = t[1]
    }();
    var S = function () {
        function t(e) {
            var s;
            switch (function (e, s) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), (e = e || {}).type = e.type || "", e.rounds = e.rounds || 10, (s = function (t, e) {
                return !e || "object" !== a(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }(this, h(t).call(this, e))).options.type) {
                case"0":
                case 0:
                    s.C = d, s.RC = O;
                    break;
                case"t":
                    s.C = m, s.RC = w;
                    break;
                default:
                    s.C = C, s.RC = v
            }
            return s
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(t, r.a), function (t, e, s) {
            e && o(t.prototype, e)
        }(t, [{
            key: "reset", value: function () {
                i(h(t.prototype), "reset", this).call(this), this.state.hash = new Array(16);
                for (var e = 0; e < 16; e++) this.state.hash[e] = 0
            }
        }, {
            key: "processBlock", value: function (t) {
                for (var e = new Array(16), s = [], n = 0; n < 16; n++) s[n] = t[n] ^ (e[n] = this.state.hash[n]) | 0;
                for (var r = [], a = 1; a <= this.options.rounds; a++) {
                    for (var o = 0; o < 8; o++) {
                        r[2 * o] = 0;
                        for (var i = r[2 * o + 1] = 0, h = 56, c = 0; i < 8; i++, c = (h -= 8) < 32 ? 1 : 0) r[2 * o] ^= this.C[i][2 * (e[2 * (o - i & 7) + c] >>> h % 32 & 255)], r[2 * o + 1] ^= this.C[i][2 * (e[2 * (o - i & 7) + c] >>> h % 32 & 255) + 1]
                    }
                    for (var u = 0; u < 16; u++) e[u] = r[u];
                    e[0] ^= this.RC[2 * a], e[1] ^= this.RC[2 * a + 1];
                    for (var f = 0; f < 8; f++) {
                        r[2 * f] = e[2 * f], r[2 * f + 1] = e[2 * f + 1];
                        for (var l = 0, p = 56, y = 0; l < 8; l++, y = (p -= 8) < 32 ? 1 : 0) r[2 * f] ^= this.C[l][2 * (s[2 * (f - l & 7) + y] >>> p % 32 & 255)], r[2 * f + 1] ^= this.C[l][2 * (s[2 * (f - l & 7) + y] >>> p % 32 & 255) + 1]
                    }
                    for (var b = 0; b < 16; b++) s[b] = r[b]
                }
                for (var g = 0; g < 16; g++) this.state.hash[g] ^= s[g] ^ t[g]
            }
        }, {
            key: "finalize", value: function () {
                return this.addPaddingISO7816(this.state.message.length < 32 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0), this.addLengthBits(), this.process(), this.getStateHash()
            }
        }]), t
    }();
    e.a = S
}, function (t, e, s) {
    "use strict";
    var n = s(4);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function o(t) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function i(t, e) {
        return (i = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var h = function () {
        function t(e) {
            var s;
            return function (e, s) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), (s = function (t, e) {
                return !e || "object" !== r(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }(this, o(t).call(this, e))).unitSize = 1, s.blockSizeInBytes = s.blockSize * s.unitSize, s.blockUnits = [], s
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && i(t, e)
        }(t, n.a), function (t, e, s) {
            e && a(t.prototype, e)
        }(t, [{
            key: "process", value: function () {
                for (; this.state.message.length >= this.blockSizeInBytes;) {
                    this.blockUnits = new Array(this.blockSizeInBytes);
                    for (var t = 0; t < this.blockSizeInBytes; t++) this.blockUnits[t] = 0 | this.state.message.charCodeAt(t);
                    this.state.message = this.state.message.substr(this.blockSizeInBytes), this.processBlock(this.blockUnits)
                }
            }
        }, {
            key: "processBlock", value: function (t) {
            }
        }, {
            key: "getStateHash", value: function (t) {
                t = t || this.state.hash.length;
                for (var e = "", s = 0; s < t; s++) e += String.fromCharCode(255 & this.state.hash[s]);
                return e
            }
        }]), t
    }();

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function f(t, e, s) {
        return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, s) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(s) : r.value
            }
        })(t, e, s || t)
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function p(t, e) {
        return (p = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var y = [41, 46, 67, 201, 162, 216, 124, 1, 61, 54, 84, 161, 236, 240, 6, 19, 98, 167, 5, 243, 192, 199, 115, 140, 152, 147, 43, 217, 188, 76, 130, 202, 30, 155, 87, 60, 253, 212, 224, 22, 103, 66, 111, 24, 138, 23, 229, 18, 190, 78, 196, 214, 218, 158, 222, 73, 160, 251, 245, 142, 187, 47, 238, 122, 169, 104, 121, 145, 21, 178, 7, 63, 148, 194, 16, 137, 11, 34, 95, 33, 128, 127, 93, 154, 90, 144, 50, 39, 53, 62, 204, 231, 191, 247, 151, 3, 255, 25, 48, 179, 72, 165, 181, 209, 215, 94, 146, 42, 172, 86, 170, 198, 79, 184, 56, 210, 150, 164, 125, 182, 118, 252, 107, 226, 156, 116, 4, 241, 69, 157, 112, 89, 100, 113, 135, 32, 134, 91, 207, 101, 230, 45, 168, 2, 27, 96, 37, 173, 174, 176, 185, 246, 28, 70, 97, 105, 52, 64, 126, 15, 85, 71, 163, 35, 221, 81, 175, 58, 195, 92, 249, 206, 186, 197, 234, 38, 44, 83, 13, 110, 133, 40, 132, 9, 211, 223, 205, 244, 65, 129, 77, 82, 106, 220, 55, 200, 108, 193, 171, 250, 36, 225, 123, 8, 12, 189, 177, 74, 120, 136, 149, 139, 227, 99, 232, 109, 233, 203, 213, 254, 59, 0, 29, 57, 242, 239, 183, 14, 102, 88, 208, 228, 166, 119, 114, 248, 235, 117, 75, 10, 49, 68, 80, 180, 143, 237, 31, 26, 219, 153, 141, 51, 159, 17, 131, 20],
        b = function () {
            function t(e) {
                var s;
                return function (e, s) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), (s = function (t, e) {
                    return !e || "object" !== c(e) && "function" != typeof e ? function (t) {
                        if (void 0 !== t) return t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(t) : e
                }(this, l(t).call(this, e))).options.rounds = s.options.rounds || 18, s
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && p(t, e)
            }(t, h), function (t, e, s) {
                e && u(t.prototype, e)
            }(t, [{
                key: "reset", value: function () {
                    f(l(t.prototype), "reset", this).call(this), this.state.hash = new Array(48), this.state.checksum = new Array(16)
                }
            }, {
                key: "processBlock", value: function (t) {
                    for (var e = 0; e < 16; e++) this.state.hash[16 + e] = 0 | t[e], this.state.hash[32 + e] = t[e] ^ this.state.hash[e];
                    for (var s = 0, n = 0; n < this.options.rounds; n++) {
                        for (var r = 0; r < 48; r++) s = this.state.hash[r] ^= y[s];
                        s = s + n & 255
                    }
                    s = 255 & this.state.checksum[15];
                    for (var a = 0; a < 16; a++) s = this.state.checksum[a] ^= y[t[a] ^ s]
                }
            }, {
                key: "finalize", value: function () {
                    this.addPaddingPKCS7(16 - (15 & this.state.message.length) | 0), this.process();
                    for (var t = 0; t < 16; t++) this.state.message += String.fromCharCode(this.state.checksum[t]);
                    return this.process(), this.getStateHash(16)
                }
            }]), t
        }();
    e.a = b
}, function (t, e, s) {
    "use strict";
    var n = s(5), r = s(0);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, e, s) {
        return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, s) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(s) : r.value
            }
        })(t, e, s || t)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var u = [0, 1518500249, 1859775393, 2400959708],
        f = [5, 11, 7, 15, 6, 13, 8, 14, 7, 12, 9, 11, 8, 15, 6, 12, 9, 14, 5, 13], l = [10, 17, 25, 30],
        p = [18, 0, 1, 2, 3, 19, 4, 5, 6, 7, 16, 8, 9, 10, 11, 17, 12, 13, 14, 15, 22, 3, 6, 9, 12, 23, 15, 2, 5, 8, 20, 11, 14, 1, 4, 21, 7, 10, 13, 0, 26, 12, 5, 14, 7, 27, 0, 9, 2, 11, 24, 4, 13, 6, 15, 25, 8, 1, 10, 3, 30, 7, 2, 13, 8, 31, 3, 14, 9, 4, 28, 15, 10, 5, 0, 29, 11, 6, 1, 12],
        y = function () {
            function t(e) {
                var s;
                return function (e, s) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), (s = function (t, e) {
                    return !e || "object" !== a(e) && "function" != typeof e ? function (t) {
                        if (void 0 !== t) return t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(t) : e
                }(this, h(t).call(this, e))).options.rounds = s.options.rounds || 80, s.W = new Array(32), s
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && c(t, e)
            }(t, n.a), function (t, e, s) {
                e && o(t.prototype, e)
            }(t, [{
                key: "reset", value: function () {
                    i(h(t.prototype), "reset", this).call(this), this.state.hash = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
                }
            }, {
                key: "processBlock", value: function (t) {
                    for (var e = 0 | this.state.hash[0], s = 0 | this.state.hash[1], n = 0 | this.state.hash[2], a = 0 | this.state.hash[3], o = 0 | this.state.hash[4], i = 0; i < 16; i++) this.W[i] = 0 | t[i];
                    this.W[16] = this.W[0] ^ this.W[1] ^ this.W[2] ^ this.W[3] | 0, this.W[17] = this.W[4] ^ this.W[5] ^ this.W[6] ^ this.W[7] | 0, this.W[18] = this.W[8] ^ this.W[9] ^ this.W[10] ^ this.W[11] | 0, this.W[19] = this.W[12] ^ this.W[13] ^ this.W[14] ^ this.W[15] | 0, this.W[20] = this.W[3] ^ this.W[6] ^ this.W[9] ^ this.W[12] | 0, this.W[21] = this.W[2] ^ this.W[5] ^ this.W[8] ^ this.W[15] | 0, this.W[22] = this.W[1] ^ this.W[4] ^ this.W[11] ^ this.W[14] | 0, this.W[23] = this.W[0] ^ this.W[7] ^ this.W[10] ^ this.W[13] | 0, this.W[24] = this.W[5] ^ this.W[7] ^ this.W[12] ^ this.W[14] | 0, this.W[25] = this.W[0] ^ this.W[2] ^ this.W[9] ^ this.W[11] | 0, this.W[26] = this.W[4] ^ this.W[6] ^ this.W[13] ^ this.W[15] | 0, this.W[27] = this.W[1] ^ this.W[3] ^ this.W[8] ^ this.W[10] | 0, this.W[28] = this.W[2] ^ this.W[7] ^ this.W[8] ^ this.W[13] | 0, this.W[29] = this.W[3] ^ this.W[4] ^ this.W[9] ^ this.W[14] | 0, this.W[30] = this.W[0] ^ this.W[5] ^ this.W[10] ^ this.W[15] | 0, this.W[31] = this.W[1] ^ this.W[6] ^ this.W[11] ^ this.W[12] | 0;
                    for (var h = 0; h < this.options.rounds; h++) {
                        var c = Object(r.a)(e, f[h % 20]) + o + this.W[p[h]] + u[h / 20 >> 0] | 0;
                        c = h < 20 ? c + (s & n | ~s & a) | 0 : h < 40 ? c + (s ^ n ^ a) | 0 : h < 60 ? c + (n ^ (s | ~a)) | 0 : c + (s ^ n ^ a) | 0, o = a, a = n, n = 0 | Object(r.a)(s, l[h / 20 >> 0]), s = e, e = c
                    }
                    this.state.hash[0] = this.state.hash[0] + e | 0, this.state.hash[1] = this.state.hash[1] + s | 0, this.state.hash[2] = this.state.hash[2] + n | 0, this.state.hash[3] = this.state.hash[3] + a | 0, this.state.hash[4] = this.state.hash[4] + o | 0
                }
            }, {
                key: "finalize", value: function () {
                    return this.addPaddingISO7816(this.state.message.length < 56 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0), this.addLengthBits(), this.process(), this.getStateHash()
                }
            }]), t
        }();
    e.a = y
}, function (t, e, s) {
    "use strict";
    s.d(e, "a", function () {
        return r
    });
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function r(t) {
        for (var e = "", s = t.length - t.length % 3 | 0, r = 0, a = 0; a < s; a += 3) r = t.charCodeAt(a) << 16 | t.charCodeAt(a + 1) << 8 | t.charCodeAt(a + 2), e += n.charAt(r >> 18) + n.charAt(r >> 12 & 63) + n.charAt(r >> 6 & 63) + n.charAt(63 & r);
        return t.length - s == 2 ? (r = t.charCodeAt(s) << 16 | t.charCodeAt(1 + s) << 8, e += n.charAt(r >> 18) + n.charAt(r >> 12 & 63) + n.charAt(r >> 6 & 63) + "=") : t.length - s == 1 && (r = t.charCodeAt(s) << 16, e += n.charAt(r >> 18) + n.charAt(r >> 12 & 63) + "=="), e
    }
}, function (t, e, s) {
    "use strict";
    var n = s(5), r = s(0);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, e, s) {
        return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, s) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(s) : r.value
            }
        })(t, e, s || t)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var u = [[3, 7, 11, 19], [3, 5, 9, 13], [3, 9, 11, 15]], f = 1518500249, l = 1859775393, p = function () {
        function t() {
            return function (e, s) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), function (t, e) {
                return !e || "object" !== a(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }(this, h(t).apply(this, arguments))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(t, n.a), function (t, e, s) {
            e && o(t.prototype, e), s && o(t, s)
        }(t, [{
            key: "reset", value: function () {
                i(h(t.prototype), "reset", this).call(this), this.state.hash = [1732584193, -271733879, -1732584194, 271733878]
            }
        }, {
            key: "processBlock", value: function (e) {
                var s = 0 | this.state.hash[0], n = 0 | this.state.hash[1], r = 0 | this.state.hash[2],
                    a = 0 | this.state.hash[3];
                s = t.CC(t.FF, 0, s, n, r, a, e[0], u[0][0]), a = t.CC(t.FF, 0, a, s, n, r, e[1], u[0][1]), r = t.CC(t.FF, 0, r, a, s, n, e[2], u[0][2]), n = t.CC(t.FF, 0, n, r, a, s, e[3], u[0][3]), s = t.CC(t.FF, 0, s, n, r, a, e[4], u[0][0]), a = t.CC(t.FF, 0, a, s, n, r, e[5], u[0][1]), r = t.CC(t.FF, 0, r, a, s, n, e[6], u[0][2]), n = t.CC(t.FF, 0, n, r, a, s, e[7], u[0][3]), s = t.CC(t.FF, 0, s, n, r, a, e[8], u[0][0]), a = t.CC(t.FF, 0, a, s, n, r, e[9], u[0][1]), r = t.CC(t.FF, 0, r, a, s, n, e[10], u[0][2]), n = t.CC(t.FF, 0, n, r, a, s, e[11], u[0][3]), s = t.CC(t.FF, 0, s, n, r, a, e[12], u[0][0]), a = t.CC(t.FF, 0, a, s, n, r, e[13], u[0][1]), r = t.CC(t.FF, 0, r, a, s, n, e[14], u[0][2]), n = t.CC(t.FF, 0, n, r, a, s, e[15], u[0][3]), s = t.CC(t.GG, f, s, n, r, a, e[0], u[1][0]), a = t.CC(t.GG, f, a, s, n, r, e[4], u[1][1]), r = t.CC(t.GG, f, r, a, s, n, e[8], u[1][2]), n = t.CC(t.GG, f, n, r, a, s, e[12], u[1][3]), s = t.CC(t.GG, f, s, n, r, a, e[1], u[1][0]), a = t.CC(t.GG, f, a, s, n, r, e[5], u[1][1]), r = t.CC(t.GG, f, r, a, s, n, e[9], u[1][2]), n = t.CC(t.GG, f, n, r, a, s, e[13], u[1][3]), s = t.CC(t.GG, f, s, n, r, a, e[2], u[1][0]), a = t.CC(t.GG, f, a, s, n, r, e[6], u[1][1]), r = t.CC(t.GG, f, r, a, s, n, e[10], u[1][2]), n = t.CC(t.GG, f, n, r, a, s, e[14], u[1][3]), s = t.CC(t.GG, f, s, n, r, a, e[3], u[1][0]), a = t.CC(t.GG, f, a, s, n, r, e[7], u[1][1]), r = t.CC(t.GG, f, r, a, s, n, e[11], u[1][2]), n = t.CC(t.GG, f, n, r, a, s, e[15], u[1][3]), s = t.CC(t.HH, l, s, n, r, a, e[0], u[2][0]), a = t.CC(t.HH, l, a, s, n, r, e[8], u[2][1]), r = t.CC(t.HH, l, r, a, s, n, e[4], u[2][2]), n = t.CC(t.HH, l, n, r, a, s, e[12], u[2][3]), s = t.CC(t.HH, l, s, n, r, a, e[2], u[2][0]), a = t.CC(t.HH, l, a, s, n, r, e[10], u[2][1]), r = t.CC(t.HH, l, r, a, s, n, e[6], u[2][2]), n = t.CC(t.HH, l, n, r, a, s, e[14], u[2][3]), s = t.CC(t.HH, l, s, n, r, a, e[1], u[2][0]), a = t.CC(t.HH, l, a, s, n, r, e[9], u[2][1]), r = t.CC(t.HH, l, r, a, s, n, e[5], u[2][2]), n = t.CC(t.HH, l, n, r, a, s, e[13], u[2][3]), s = t.CC(t.HH, l, s, n, r, a, e[3], u[2][0]), a = t.CC(t.HH, l, a, s, n, r, e[11], u[2][1]), r = t.CC(t.HH, l, r, a, s, n, e[7], u[2][2]), n = t.CC(t.HH, l, n, r, a, s, e[15], u[2][3]), this.state.hash = [this.state.hash[0] + s | 0, this.state.hash[1] + n | 0, this.state.hash[2] + r | 0, this.state.hash[3] + a | 0]
            }
        }, {
            key: "finalize", value: function () {
                return this.addPaddingISO7816(this.state.message.length < 56 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0), this.addLengthBits(), this.process(), this.getStateHash()
            }
        }], [{
            key: "FF", value: function (t, e, s) {
                return t & e | ~t & s
            }
        }, {
            key: "GG", value: function (t, e, s) {
                return t & e | t & s | e & s
            }
        }, {
            key: "HH", value: function (t, e, s) {
                return t ^ e ^ s
            }
        }, {
            key: "CC", value: function (t, e, s, n, a, o, i, h) {
                return 0 | Object(r.a)(s + t(n, a, o) + i + e, h)
            }
        }]), t
    }();
    e.a = p
}, function (t, e, s) {
    "use strict";
    var n = s(3), r = s(0);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, e, s) {
        return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, s) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t));) ;
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(s) : r.value
            }
        })(t, e, s || t)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var u = [1518500249, 1859775393, 2400959708, 3395469782], f = function () {
        function t(e) {
            var s;
            return function (e, s) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), (s = function (t, e) {
                return !e || "object" !== a(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }(this, h(t).call(this, e))).options.rounds = s.options.rounds || 80, s.W = new Array(80), s
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(t, n.a), function (t, e, s) {
            e && o(t.prototype, e)
        }(t, [{
            key: "reset", value: function () {
                i(h(t.prototype), "reset", this).call(this), this.state.hash = [1732584193, -271733879, -1732584194, 271733878, -1009589776]
            }
        }, {
            key: "processBlock", value: function (t) {
                for (var e = 0 | this.state.hash[0], s = 0 | this.state.hash[1], n = 0 | this.state.hash[2], a = 0 | this.state.hash[3], o = 0 | this.state.hash[4], i = 0; i < this.options.rounds; i++) {
                    this.W[i] = i < 16 ? 0 | t[i] : this.W[i - 3] ^ this.W[i - 8] ^ this.W[i - 14] ^ this.W[i - 16] | 0;
                    var h = Object(r.a)(e, 5) + o + this.W[i] + u[i / 20 >> 0] | 0;
                    h = i < 20 ? h + (s & n | ~s & a) | 0 : i < 40 ? h + (s ^ n ^ a) | 0 : i < 60 ? h + (s & n | s & a | n & a) | 0 : h + (s ^ n ^ a) | 0, o = a, a = n, n = 0 | Object(r.a)(s, 30), s = e, e = h
                }
                this.state.hash[0] = this.state.hash[0] + e | 0, this.state.hash[1] = this.state.hash[1] + s | 0, this.state.hash[2] = this.state.hash[2] + n | 0, this.state.hash[3] = this.state.hash[3] + a | 0, this.state.hash[4] = this.state.hash[4] + o | 0
            }
        }, {
            key: "finalize", value: function () {
                return this.addPaddingISO7816(this.state.message.length < 56 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0), this.addLengthBits(), this.process(), this.getStateHash()
            }
        }]), t
    }();
    e.a = f
}, function (t, e, s) {
    "use strict";

    function n(t) {
        for (var e = "", s = new Uint8Array(t), n = 0; n < s.length; n++) e += String.fromCharCode(s[n]);
        return e
    }

    s.d(e, "a", function () {
        return n
    })
}, , function (t, e, s) {
    "use strict";

    function n(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    var r = function () {
        function t(e, s) {
            !function (e, s) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), e.length > s.blockSizeInBytes && (s.update(e), e = s.finalize(), s.reset());
            for (var n = e.length; n < s.blockSizeInBytes; n++) e += "\0";
            this.oPad = "";
            for (var r = 0; r < e.length; r++) s.update(String.fromCharCode(54 ^ e.charCodeAt(r))), this.oPad += String.fromCharCode(92 ^ e.charCodeAt(r));
            this.hasher = s
        }

        return function (t, e, s) {
            e && n(t.prototype, e)
        }(t, [{
            key: "update", value: function (t) {
                this.hasher.update(t)
            }
        }, {
            key: "finalize", value: function () {
                var t = this.hasher.finalize();
                return this.hasher.reset(), this.hasher.update(this.oPad), this.hasher.update(t), this.hasher.finalize()
            }
        }]), t
    }();
    e.a = r
}, , , , , , , , , function (t, e, s) {
    "use strict";
    s.r(e);
    var n = s(14), r = s(13), a = s(16), o = s(10), i = s(8), h = s(17), c = s(11), u = s(7), f = s(6), l = s(9),
        p = s(12), y = s(1), b = s(18), g = s(2), C = s(15), v = s(20);

    function d(t, e) {
        for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    var O = function () {
        function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.encoder = {}, this.encoder.fromUtf = y.a, this.encoder.fromArrayBuffer = b.a, this.encoder.toHex = g.a, this.encoder.toBase64 = C.a
        }

        return function (t, e, s) {
            e && d(t.prototype, e)
        }(t, [{
            key: "getHasher", value: function (t, e) {
                switch (e = e || {}, t) {
                    case"has160":
                        return new n.a(e);
                    case"md2":
                        return new r.a(e);
                    case"md4":
                        return new a.a(e);
                    case"md5":
                        return new o.a(e);
                    case"ripemd128":
                        return e = Object.assign({}, {length: 128}, e), new i.a(e);
                    case"ripemd":
                    case"ripemd160":
                        return e = Object.assign({}, {length: 160}, e), new i.a(e);
                    case"ripemd256":
                        return e = Object.assign({}, {length: 256}, e), new i.a(e);
                    case"ripemd320":
                        return e = Object.assign({}, {length: 320}, e), new i.a(e);
                    case"sha0":
                        return new h.a(e);
                    case"sha1":
                        return new c.a(e);
                    case"sha224":
                        return e = Object.assign({}, {length: 224}, e), new u.a(e);
                    case"sha256":
                        return e = Object.assign({}, {length: 256}, e), new u.a(e);
                    case"sha384":
                        return e = Object.assign({}, {length: 384}, e), new f.a(e);
                    case"sha512":
                        return e = Object.assign({}, {length: 512}, e), new f.a(e);
                    case"sha512/224":
                        return e = Object.assign({}, {length: 224}, e), new f.a(e);
                    case"sha512/256":
                        return e = Object.assign({}, {length: 256}, e), new f.a(e);
                    case"snefru":
                    case"snefru128":
                    case"snefru128/8":
                        return e = Object.assign({}, {length: 128}, e), new l.a(e);
                    case"snefru256":
                    case"snefru256/8":
                        return e = Object.assign({}, {length: 256}, e), new l.a(e);
                    case"snefru128/2":
                        return e = Object.assign({}, {length: 128, rounds: 2}, e), new l.a(e);
                    case"snefru256/4":
                        return e = Object.assign({}, {length: 256, rounds: 4}, e), new l.a(e);
                    case"whirlpool":
                        return new p.a(e);
                    case"whirlpool-0":
                        return e = Object.assign({}, {type: "0"}, e), new p.a(e);
                    case"whirlpool-t":
                        return e = Object.assign({}, {type: "t"}, e), new p.a(e)
                }
            }
        }, {
            key: "hash", value: function (t, e, s) {
                s = s || {};
                var n = this.getHasher(t, s);
                return n.update(Object(y.a)(e)), Object(g.a)(n.finalize())
            }
        }, {
            key: "getHmac", value: function (t, e) {
                return new v.a(t, e)
            }
        }, {
            key: "hmac", value: function (t, e, s) {
                var n = this.getHmac(Object(y.a)(t), s);
                return n.update(Object(y.a)(e)), Object(g.a)(n.finalize())
            }
        }]), t
    }();
    O = new O, e.default = O
}]).default;
//# sourceMappingURL=crypto-api.min.js.map
/* jQuery分页插件sPage  version:1.2.2  github:https://github.com/jvbei/sPage */
(function (p, t, e, a) {
    "use strict";
    var s = {
        page: 1,
        pageSize: 200,
        total: 0,
        showTotal: false,
        totalTxt: '',
        noData: false,
        showSkip: false,
        showPN: true,
        prevPage: "上一页",
        nextPage: "下一页",
        fastForward: 0,
        selectOption: [],
        backFun: function (t) {
        }
    };
    var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVQ4T5WTsUrEQBCG//FYxC7BlxDfZ9t0O8EivY0YBEGbqwTJbBauUA8tfIqzsBH18BXyDKkSiUQIRza32XJ2/2+/2WUIIytJkmOl1Ilz7m1sf1gj3wFmPgOwFZHNFMQL6ELMfA5gMwWZBHQQY8wtEb2KyPuYyV5AD1kS0fMYJAgAgIwxd0TkROQj6BF3dfM8P6iq6h5AMYSEGvzxtNaLOI5d0zTLsiy/u9osADMrACsANyKynQXowm3bPgG4ttZ+/rcYZOALBxlkWXZY1/XD7s1BBn34BcDlUDvoG/vwGsCVL+xtQWt9FEXRI4ALa+3P7GFK0/QUgCqK4mvfOP8CEjZjEfl6lvkAAAAASUVORK5CYII='

    function i(t, e) {
        this.element = p(t);
        this.settings = p.extend({}, s, e);
        this.pageNum = 1, this.pageList = [], this.pageTatol = 0;
        this.init()
    }

    p.extend(i.prototype, {
        init: function () {
            this.element.empty();
            this.viewHtml()
            this.clickBtn()
        },
        creatHtml: function (t) {
            t == this.settings.page ? this.pageList.push('<button class="active" data-page=' + t + ">" + t + "</button>") : this.pageList.push("<button data-page=" + t + ">" + t + "</button>")
        },
        viewHtml: function () {
            var t = this.settings;
            var e = 0;
            var a = [];
            if (t.total > 0) {
                e = Math.ceil(t.total / t.pageSize)
            } else {
                if (t.noData) {
                    e = 1;
                    t.page = 1;
                    t.total = 0
                } else {
                    return
                }
            }
            this.pageTatol = e;
            this.pageNum = t.page;
            if (t.showTotal) {
                a.push('<div class="spage-total">' + t.totalTxt + "</div>")
            }
            a.push('<div class="spage-number">');
            this.pageList = [];
            if (t.showPN) {
                t.page == 1 ? this.pageList.push('<button class="button-disabled" data-page="prev"><i class="prevBtn"></i></button>') : this.pageList.push('<button data-page="prev"><i class="prevBtn"></i></button>')
            }
            if (e <= 6) {
                for (var s = 1; s < e + 1; s++) {
                    this.creatHtml(s)
                }
            } else {
                if (t.page < 3) {
                    for (var s = 1; s <= 3; s++) {
                        this.creatHtml(s)
                    }
                    this.pageList.push('<button data-page="after" class="spage-after">...</button><button data-page=' + e + ">" + e + "</button>")
                } else if (t.page > e - 3) {
                    this.pageList.push('<button data-page="1">1</button><button data-page="before" class="spage-before">...</button>');
                    for (var s = e - 3; s <= e; s++) {
                        this.creatHtml(s)
                    }
                } else {
                    this.pageList.push('<button data-page="1">1</button>');
                    if (t.page > 3) {
                        this.pageList.push('<button data-page="before" class="spage-before">...</button>')
                    }
                    for (var s = t.page - 1; s <= Number(t.page) + 1; s++) {
                        this.creatHtml(s)
                    }
                    if (t.page <= e - 3) {
                        this.pageList.push('<button data-page="after" class="spage-after">...</button>')
                    }
                    this.pageList.push('<button data-page=' + e + ">" + e + "</button>")
                }
            }
            if (t.showPN) {
                t.page == e ? this.pageList.push('<button class="button-disabled" data-page="next"><i class="nextBtn"></i></button>') : this.pageList.push('<button data-page="next"><i class="nextBtn"></i></button>')
            }


            a.push(this.pageList.join(""));
            a.push("</div>");


            if (t.selectOption.length > 0) {
                var str = '<select class="selectNum" id="selectNum">'
                for (var i = 0; i <= t.selectOption.length - 1; i++) {
                    str += '<option value=' + t.selectOption[i] + ' '
                    if (t.pageSize === t.selectOption[i]) {
                        str += 'selected' + '>' + t.selectOption[i] + '行/页</option>'
                    } else {
                        str += '>' + t.selectOption[i] + '行/页</option>'
                    }
                }
                str += '</select>'
                a.push(str);
            }
            if (t.showSkip) {
                a.push('<div class="spage-skip">跳至&nbsp;<input type="text" class="luckysheet-mousedown-cancel" value="' + t.page + '"/>&nbsp;页&nbsp;&nbsp;</div>')
            }

            this.element.html(a.join(""));


        },
        clickBtn: function () {
            var a = this;
            var s = this.settings;
            var i = this.element;
            var n = this.pageTatol;
            this.element.on('change', 'select', function (e) {
                var value = parseInt(document.getElementById('selectNum').value)
                s.pageSize = value
                s.page = 1
                a.element.empty();
                a.viewHtml()
                s.backFun(s)
            })
            this.element.off("click", "button");
            this.element.on("click", "button", function () {
                var t = p(this).data("page");
                switch (t) {
                    case "prev":
                        s.page = s.page - 1 >= 1 ? s.page - 1 : 1;
                        t = s.page;
                        break;
                    case "next":
                        s.page = Number(s.page) + 1 <= n ? Number(s.page) + 1 : n;
                        t = s.page;
                        break;
                    case "before":
                        s.page = s.page - s.fastForward >= 1 ? s.page - s.fastForward : 1;
                        t = s.page;
                        break;
                    case "after":
                        s.page = Number(s.page) + Number(s.fastForward) <= n ? Number(s.page) + Number(s.fastForward) : n;
                        t = s.page;
                        break;
                    case "go":
                        var e = parseInt(i.find("input").val());
                        if (/^[0-9]*$/.test(e) && e >= 1 && e <= n) {
                            s.page = e;
                            t = e
                        } else {
                            return
                        }
                        break;
                    default:
                        s.page = t
                }
                if (t == a.pageNum) {
                    return
                }
                a.pageNum = s.page;
                a.viewHtml();
                s.backFun(s)
            });
            this.element.off("keyup", "input");
            this.element.on("keyup", "input", function (t) {
                if (t.keyCode == 13) {
                    var e = parseInt(i.find("input").val());
                    if (/^[0-9]*$/.test(e) && e >= 1 && e <= n && e != a.pageNum) {
                        s.page = e;
                        a.pageNum = e;
                        a.viewHtml();
                        s.backFun(s)
                    } else {
                        return
                    }
                }
            });
            if (s.fastForward > 0) {
                i.find(".spage-after").hover(function () {
                    p(this).html("&raquo;")
                }, function () {
                    p(this).html("...")
                });
                i.find(".spage-before").hover(function () {
                    p(this).html("&laquo;")
                }, function () {
                    p(this).html("...")
                })
            }
        }
    });
    p.fn.sPage = function (t) {
        return this.each(function () {
            new i(this, t)
        })
    }
})(jQuery, window, document);