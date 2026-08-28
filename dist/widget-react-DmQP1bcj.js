globalThis.process === void 0 && (globalThis.process = {
	env: {},
	nextTick: function(e) {
		setTimeout(e, 0);
	},
	emit: function() {
		return !1;
	}
});
import "react";
import "react-dom";
import "react/jsx-runtime";
import "react-dom/client";
import { $t as e, A as t, At as n, Bt as r, Ct as i, D as a, Dt as o, Et as s, Ft as c, G as l, Gt as u, H as d, Ht as f, It as p, J as m, Jt as h, K as g, Kt as _, Lt as v, Mt as y, N as b, Nt as x, Ot as S, Pt as C, Q as w, Qt as T, R as E, Rt as ee, St as te, Tt as ne, U as re, Ut as ie, Vt as ae, W as oe, Wt as se, X as ce, Xt as le, Y as ue, Yt as de, Z as fe, Zt as pe, _n as me, _t as he, at as ge, bt as _e, cn as ve, ct as ye, dn as be, dt as D, en as xe, fn as O, ft as k, gn as A, gt as Se, hn as j, ht as Ce, in as M, it as we, jt as Te, kt as Ee, ln as De, lt as Oe, mn as N, mt as ke, nn as P, nt as Ae, on as F, ot as je, pn as I, pt as Me, q as Ne, qt as Pe, rn as Fe, rt as L, sn as R, st as Ie, tn as Le, tt as z, un as Re, ut as B, vt as ze, wt as Be, xt as Ve, y as He, yt as Ue, zt as V } from "./widget-react-BFgpQWPW.js";
import { n as We, r as Ge } from "./widget-react-BGCZpMUT.js";
import * as H from "react";
import { jsx as Ke } from "react/jsx-runtime";
//#region node_modules/graphql/language/printString.mjs
function qe(e) {
	return `"${e.replace(Je, Ye)}"`;
}
var Je = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Ye(e) {
	return Xe[e.charCodeAt(0)];
}
var Xe = /* @__PURE__ */ "\\u0000.\\u0001.\\u0002.\\u0003.\\u0004.\\u0005.\\u0006.\\u0007.\\b.\\t.\\n.\\u000B.\\f.\\r.\\u000E.\\u000F.\\u0010.\\u0011.\\u0012.\\u0013.\\u0014.\\u0015.\\u0016.\\u0017.\\u0018.\\u0019.\\u001A.\\u001B.\\u001C.\\u001D.\\u001E.\\u001F...\\\"..........................................................\\\\...................................\\u007F.\\u0080.\\u0081.\\u0082.\\u0083.\\u0084.\\u0085.\\u0086.\\u0087.\\u0088.\\u0089.\\u008A.\\u008B.\\u008C.\\u008D.\\u008E.\\u008F.\\u0090.\\u0091.\\u0092.\\u0093.\\u0094.\\u0095.\\u0096.\\u0097.\\u0098.\\u0099.\\u009A.\\u009B.\\u009C.\\u009D.\\u009E.\\u009F".split(".");
//#endregion
//#region node_modules/graphql/language/printer.mjs
function Ze(e) {
	return P(e, $e);
}
var Qe = 80, $e = {
	Name: { leave: (e) => e.value },
	Variable: { leave: (e) => "$" + e.name },
	Document: { leave: (e) => U(e.definitions, "\n\n") },
	OperationDefinition: { leave(e) {
		let t = tt(e.variableDefinitions) ? G("(\n", U(e.variableDefinitions, "\n"), "\n)") : G("(", U(e.variableDefinitions, ", "), ")"), n = G("", e.description, "\n") + U([
			e.operation,
			U([e.name, t]),
			U(e.directives, " ")
		], " ");
		return (n === "query" ? "" : n + " ") + e.selectionSet;
	} },
	VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: n, directives: r, description: i }) => G("", i, "\n") + e + ": " + t + G(" = ", n) + G(" ", U(r, " ")) },
	SelectionSet: { leave: ({ selections: e }) => W(e) },
	Field: { leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
		let a = G("", e, ": ") + t, o = a + G("(", U(n, ", "), ")");
		return o.length > Qe && (o = a + G("(\n", et(U(n, "\n")), "\n)")), U([
			o,
			U(r, " "),
			i
		], " ");
	} },
	Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
	FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + G(" ", U(t, " ")) },
	InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: n }) => U([
		"...",
		G("on ", e),
		U(t, " "),
		n
	], " ") },
	FragmentDefinition: { leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i, description: a }) => G("", a, "\n") + `fragment ${e}${G("(", U(n, ", "), ")")} on ${t} ${G("", U(r, " "), " ")}` + i },
	IntValue: { leave: ({ value: e }) => e },
	FloatValue: { leave: ({ value: e }) => e },
	StringValue: { leave: ({ value: e, block: t }) => t ? Fe(e) : qe(e) },
	BooleanValue: { leave: ({ value: e }) => e ? "true" : "false" },
	NullValue: { leave: () => "null" },
	EnumValue: { leave: ({ value: e }) => e },
	ListValue: { leave: ({ values: e }) => "[" + U(e, ", ") + "]" },
	ObjectValue: { leave: ({ fields: e }) => "{" + U(e, ", ") + "}" },
	ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
	Directive: { leave: ({ name: e, arguments: t }) => "@" + e + G("(", U(t, ", "), ")") },
	NamedType: { leave: ({ name: e }) => e },
	ListType: { leave: ({ type: e }) => "[" + e + "]" },
	NonNullType: { leave: ({ type: e }) => e + "!" },
	SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: n }) => G("", e, "\n") + U([
		"schema",
		U(t, " "),
		W(n)
	], " ") },
	OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t },
	ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: n }) => G("", e, "\n") + U([
		"scalar",
		t,
		U(n, " ")
	], " ") },
	ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => G("", e, "\n") + U([
		"type",
		t,
		G("implements ", U(n, " & ")),
		U(r, " "),
		W(i)
	], " ") },
	FieldDefinition: { leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => G("", e, "\n") + t + (tt(n) ? G("(\n", et(U(n, "\n")), "\n)") : G("(", U(n, ", "), ")")) + ": " + r + G(" ", U(i, " ")) },
	InputValueDefinition: { leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => G("", e, "\n") + U([
		t + ": " + n,
		G("= ", r),
		U(i, " ")
	], " ") },
	InterfaceTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => G("", e, "\n") + U([
		"interface",
		t,
		G("implements ", U(n, " & ")),
		U(r, " "),
		W(i)
	], " ") },
	UnionTypeDefinition: { leave: ({ description: e, name: t, directives: n, types: r }) => G("", e, "\n") + U([
		"union",
		t,
		U(n, " "),
		G("= ", U(r, " | "))
	], " ") },
	EnumTypeDefinition: { leave: ({ description: e, name: t, directives: n, values: r }) => G("", e, "\n") + U([
		"enum",
		t,
		U(n, " "),
		W(r)
	], " ") },
	EnumValueDefinition: { leave: ({ description: e, name: t, directives: n }) => G("", e, "\n") + U([t, U(n, " ")], " ") },
	InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: n, fields: r }) => G("", e, "\n") + U([
		"input",
		t,
		U(n, " "),
		W(r)
	], " ") },
	DirectiveDefinition: { leave: ({ description: e, name: t, arguments: n, directives: r, repeatable: i, locations: a }) => G("", e, "\n") + "directive @" + t + (tt(n) ? G("(\n", et(U(n, "\n")), "\n)") : G("(", U(n, ", "), ")")) + G(" ", U(r, " ")) + (i ? " repeatable" : "") + " on " + U(a, " | ") },
	SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => U([
		"extend schema",
		U(e, " "),
		W(t)
	], " ") },
	ScalarTypeExtension: { leave: ({ name: e, directives: t }) => U([
		"extend scalar",
		e,
		U(t, " ")
	], " ") },
	ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => U([
		"extend type",
		e,
		G("implements ", U(t, " & ")),
		U(n, " "),
		W(r)
	], " ") },
	InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => U([
		"extend interface",
		e,
		G("implements ", U(t, " & ")),
		U(n, " "),
		W(r)
	], " ") },
	UnionTypeExtension: { leave: ({ name: e, directives: t, types: n }) => U([
		"extend union",
		e,
		U(t, " "),
		G("= ", U(n, " | "))
	], " ") },
	EnumTypeExtension: { leave: ({ name: e, directives: t, values: n }) => U([
		"extend enum",
		e,
		U(t, " "),
		W(n)
	], " ") },
	InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: n }) => U([
		"extend input",
		e,
		U(t, " "),
		W(n)
	], " ") },
	DirectiveExtension: { leave: ({ name: e, directives: t }) => U(["extend directive @" + e, U(t, " ")], " ") },
	TypeCoordinate: { leave: ({ name: e }) => e },
	MemberCoordinate: { leave: ({ name: e, memberName: t }) => U([e, G(".", t)]) },
	ArgumentCoordinate: { leave: ({ name: e, fieldName: t, argumentName: n }) => U([
		e,
		G(".", t),
		G("(", n, ":)")
	]) },
	DirectiveCoordinate: { leave: ({ name: e }) => U(["@", e]) },
	DirectiveArgumentCoordinate: { leave: ({ name: e, argumentName: t }) => U([
		"@",
		e,
		G("(", t, ":)")
	]) }
};
function U(e, t = "") {
	return e?.filter((e) => e).join(t) ?? "";
}
function W(e) {
	return G("{\n", et(U(e, "\n")), "\n}");
}
function G(e, t, n = "") {
	return t != null && t !== "" ? e + t + n : "";
}
function et(e) {
	return G("  ", e.replace(/\n/g, "\n  "));
}
function tt(e) {
	/* c8 ignore next */
	return e?.some((e) => e.includes("\n")) ?? !1;
}
//#endregion
//#region node_modules/graphql/language/predicates.mjs
function nt(e) {
	return e.kind === M.FIELD || e.kind === M.FRAGMENT_SPREAD || e.kind === M.INLINE_FRAGMENT;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/DocumentTransform.js
function rt(e) {
	return e;
}
var it = function() {
	function e(e, t) {
		t === void 0 && (t = Object.create(null)), this.resultCache = de ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = t.cache !== !1, this.resetCache();
	}
	return e.prototype.getCacheKey = function(e) {
		return [e];
	}, e.identity = function() {
		return new e(rt, { cache: !1 });
	}, e.split = function(t, n, r) {
		return r === void 0 && (r = e.identity()), Object.assign(new e(function(e) {
			return (t(e) ? n : r).transformDocument(e);
		}, { cache: !1 }), {
			left: n,
			right: r
		});
	}, e.prototype.resetCache = function() {
		var t = this;
		if (this.cached) {
			var n = new le(h);
			this.performWork = Me(e.prototype.performWork.bind(this), {
				makeCacheKey: function(e) {
					var r = t.getCacheKey(e);
					if (r) return F(Array.isArray(r), 104), n.lookupArray(r);
				},
				max: V["documentTransform.cache"],
				cache: ae
			});
		}
	}, e.prototype.performWork = function(e) {
		return Se(e), this.transform(e);
	}, e.prototype.transformDocument = function(e) {
		if (this.resultCache.has(e)) return e;
		var t = this.performWork(e);
		return this.resultCache.add(t), t;
	}, e.prototype.concat = function(t) {
		var n = this;
		return Object.assign(new e(function(e) {
			return t.transformDocument(n.transformDocument(e));
		}, { cache: !1 }), {
			left: this,
			right: t
		});
	}, e;
}(), at, K = Object.assign(function(e) {
	var t = at.get(e);
	return t || (t = Ze(e), at.set(e, t)), t;
}, { reset: function() {
	at = new r(V.print || 2e3);
} });
K.reset(), globalThis.__DEV__ !== !1 && ee("print", function() {
	return at ? at.size : 0;
});
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/transform.js
var ot = {
	kind: M.FIELD,
	name: {
		kind: M.NAME,
		value: "__typename"
	}
};
function st(e, t) {
	return !e || e.selectionSet.selections.every(function(e) {
		return e.kind === M.FRAGMENT_SPREAD && st(t[e.name.value], t);
	});
}
function ct(e) {
	return st(Ve(e) || ze(e), f(Ue(e))) ? null : e;
}
function lt(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
	return e.forEach(function(e) {
		e && (e.name ? t.set(e.name, e) : e.test && n.set(e.test, e));
	}), function(e) {
		var r = t.get(e.name.value);
		return !r && n.size && n.forEach(function(t, n) {
			n(e) && (r = t);
		}), r;
	};
}
function ut(e) {
	var t = /* @__PURE__ */ new Map();
	return function(n) {
		n === void 0 && (n = e);
		var r = t.get(n);
		return r || t.set(n, r = {
			variables: /* @__PURE__ */ new Set(),
			fragmentSpreads: /* @__PURE__ */ new Set()
		}), r;
	};
}
function dt(e, t) {
	Se(t);
	for (var n = ut(""), r = ut(""), i = function(e) {
		for (var t = 0, i = void 0; t < e.length && (i = e[t]); ++t) if (!D(i)) {
			if (i.kind === M.OPERATION_DEFINITION) return n(i.name && i.name.value);
			if (i.kind === M.FRAGMENT_DEFINITION) return r(i.name.value);
		}
		return globalThis.__DEV__ !== !1 && F.error(124), null;
	}, a = 0, o = t.definitions.length - 1; o >= 0; --o) t.definitions[o].kind === M.OPERATION_DEFINITION && ++a;
	var s = lt(e), c = function(e) {
		return k(e) && e.map(s).some(function(e) {
			return e && e.remove;
		});
	}, l = /* @__PURE__ */ new Map(), u = !1, d = { enter: function(e) {
		if (c(e.directives)) return u = !0, null;
	} }, f = P(t, {
		Field: d,
		InlineFragment: d,
		VariableDefinition: { enter: function() {
			return !1;
		} },
		Variable: { enter: function(e, t, n, r, a) {
			var o = i(a);
			o && o.variables.add(e.name.value);
		} },
		FragmentSpread: { enter: function(e, t, n, r, a) {
			if (c(e.directives)) return u = !0, null;
			var o = i(a);
			o && o.fragmentSpreads.add(e.name.value);
		} },
		FragmentDefinition: {
			enter: function(e, t, n, r) {
				l.set(JSON.stringify(r), e);
			},
			leave: function(e, t, n, i) {
				if (e === l.get(JSON.stringify(i))) return e;
				if (a > 0 && e.selectionSet.selections.every(function(e) {
					return e.kind === M.FIELD && e.name.value === "__typename";
				})) return r(e.name.value).removed = !0, u = !0, null;
			}
		},
		Directive: { leave: function(e) {
			if (s(e)) return u = !0, null;
		} }
	});
	if (!u) return t;
	var p = function(e) {
		return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach(function(t) {
			p(r(t)).transitiveVars.forEach(function(t) {
				e.transitiveVars.add(t);
			});
		})), e;
	}, m = /* @__PURE__ */ new Set();
	f.definitions.forEach(function(e) {
		e.kind === M.OPERATION_DEFINITION ? p(n(e.name && e.name.value)).fragmentSpreads.forEach(function(e) {
			m.add(e);
		}) : e.kind === M.FRAGMENT_DEFINITION && a === 0 && !r(e.name.value).removed && m.add(e.name.value);
	}), m.forEach(function(e) {
		p(r(e)).fragmentSpreads.forEach(function(e) {
			m.add(e);
		});
	});
	var h = function(e) {
		return !!(!m.has(e) || r(e).removed);
	}, g = { enter: function(e) {
		if (h(e.name.value)) return null;
	} };
	return ct(P(f, {
		FragmentSpread: g,
		FragmentDefinition: g,
		OperationDefinition: { leave: function(e) {
			if (e.variableDefinitions) {
				var t = p(n(e.name && e.name.value)).transitiveVars;
				if (t.size < e.variableDefinitions.length) return O(O({}, e), { variableDefinitions: e.variableDefinitions.filter(function(e) {
					return t.has(e.variable.name.value);
				}) });
			}
		} }
	}));
}
var ft = Object.assign(function(e) {
	return P(e, { SelectionSet: { enter: function(e, t, n) {
		if (!(n && n.kind === M.OPERATION_DEFINITION)) {
			var r = e.selections;
			if (r && !r.some(function(e) {
				return S(e) && (e.name.value === "__typename" || e.name.value.lastIndexOf("__", 0) === 0);
			})) {
				var i = n;
				if (!(S(i) && i.directives && i.directives.some(function(e) {
					return e.name.value === "export";
				}))) return O(O({}, e), { selections: me(me([], r, !0), [ot], !1) });
			}
		}
	} } });
}, { added: function(e) {
	return e === ot;
} });
function pt(e) {
	return _e(e).operation === "query" ? e : P(e, { OperationDefinition: { enter: function(e) {
		return O(O({}, e), { operation: "query" });
	} } });
}
function mt(e) {
	return Se(e), dt([{
		test: function(e) {
			return e.name.value === "client";
		},
		remove: !0
	}], e);
}
function ht(e) {
	return Se(e), P(e, { FragmentSpread: function(e) {
		if (!e.directives?.some(function(e) {
			return e.name.value === "unmask";
		})) return O(O({}, e), { directives: me(me([], e.directives || [], !0), [{
			kind: M.DIRECTIVE,
			name: {
				kind: M.NAME,
				value: "nonreactive"
			}
		}], !1) });
	} });
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/mergeDeep.js
var gt = Object.prototype.hasOwnProperty;
function _t() {
	return vt([...arguments]);
}
function vt(e) {
	var t = e[0] || {}, n = e.length;
	if (n > 1) for (var r = new q(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
	return t;
}
var yt = function(e, t, n) {
	return this.merge(e[n], t[n]);
}, q = function() {
	function e(e) {
		e === void 0 && (e = yt), this.reconciler = e, this.isObject = _, this.pastCopies = /* @__PURE__ */ new Set();
	}
	return e.prototype.merge = function(e, t) {
		for (var n = this, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		return _(t) && _(e) ? (Object.keys(t).forEach(function(i) {
			if (gt.call(e, i)) {
				var a = e[i];
				if (t[i] !== a) {
					var o = n.reconciler.apply(n, me([
						e,
						t,
						i
					], r, !1));
					o !== a && (e = n.shallowCopyForMerge(e), e[i] = o);
				}
			} else e = n.shallowCopyForMerge(e), e[i] = t[i];
		}), e) : t;
	}, e.prototype.shallowCopyForMerge = function(e) {
		return _(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : O({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
	}, e;
}();
//#endregion
//#region node_modules/@apollo/client/utilities/observables/asyncMap.js
function bt(e, t, n) {
	return new B(function(r) {
		var i = { then: function(e) {
			return new Promise(function(t) {
				return t(e());
			});
		} };
		function a(e, t) {
			return function(n) {
				if (e) {
					var a = function() {
						return r.closed ? 0 : e(n);
					};
					i = i.then(a, a).then(function(e) {
						return r.next(e);
					}, function(e) {
						return r.error(e);
					});
				} else r[t](n);
			};
		}
		var o = {
			next: a(t, "next"),
			error: a(n, "error"),
			complete: function() {
				i.then(function() {
					return r.complete();
				});
			}
		}, s = e.subscribe(o);
		return function() {
			return s.unsubscribe();
		};
	});
}
//#endregion
//#region node_modules/@apollo/client/utilities/observables/Concast.js
function xt(e) {
	return e && typeof e.then == "function";
}
var J = function(e) {
	N(t, e);
	function t(t) {
		var n = e.call(this, function(e) {
			return n.addObserver(e), function() {
				return n.removeObserver(e);
			};
		}) || this;
		return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(e, t) {
			n.resolve = e, n.reject = t;
		}), n.handlers = {
			next: function(e) {
				n.sub !== null && (n.latest = ["next", e], n.notify("next", e), Ie(n.observers, "next", e));
			},
			error: function(e) {
				var t = n.sub;
				t !== null && (t && setTimeout(function() {
					return t.unsubscribe();
				}), n.sub = null, n.latest = ["error", e], n.reject(e), n.notify("error", e), Ie(n.observers, "error", e));
			},
			complete: function() {
				var e = n, t = e.sub, r = e.sources, i = r === void 0 ? [] : r;
				if (t !== null) {
					var a = i.shift();
					a ? xt(a) ? a.then(function(e) {
						return n.sub = e.subscribe(n.handlers);
					}, n.handlers.error) : n.sub = a.subscribe(n.handlers) : (t && setTimeout(function() {
						return t.unsubscribe();
					}), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Ie(n.observers, "complete"));
				}
			}
		}, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(e) {
			n.reject(e), n.sources = [], n.handlers.error(e);
		}, n.promise.catch(function(e) {}), typeof t == "function" && (t = [new B(t)]), xt(t) ? t.then(function(e) {
			return n.start(e);
		}, n.handlers.error) : n.start(t), n;
	}
	return t.prototype.start = function(e) {
		this.sub === void 0 && (this.sources = Array.from(e), this.handlers.complete());
	}, t.prototype.deliverLastMessage = function(e) {
		if (this.latest) {
			var t = this.latest[0], n = e[t];
			n && n.call(e, this.latest[1]), this.sub === null && t === "next" && e.complete && e.complete();
		}
	}, t.prototype.addObserver = function(e) {
		this.observers.has(e) || (this.deliverLastMessage(e), this.observers.add(e));
	}, t.prototype.removeObserver = function(e) {
		this.observers.delete(e) && this.observers.size < 1 && this.handlers.complete();
	}, t.prototype.notify = function(e, t) {
		var n = this.nextResultListeners;
		n.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), n.forEach(function(n) {
			return n(e, t);
		}));
	}, t.prototype.beforeNext = function(e) {
		var t = !1;
		this.nextResultListeners.add(function(n, r) {
			t || (t = !0, e(n, r));
		});
	}, t;
}(B);
je(J);
//#endregion
//#region node_modules/@apollo/client/utilities/common/incrementalResult.js
function St(e) {
	return "incremental" in e;
}
function Ct(e) {
	return "hasNext" in e && "data" in e;
}
function wt(e) {
	return St(e) || Ct(e);
}
function Tt(e) {
	return _(e) && "payload" in e;
}
function Et(e, t) {
	var n = e, r = new q();
	return St(t) && k(t.incremental) && t.incremental.forEach(function(e) {
		for (var t = e.data, i = e.path, a = i.length - 1; a >= 0; --a) {
			var o = i[a], s = isNaN(+o) ? {} : [];
			s[o] = t, t = s;
		}
		n = r.merge(n, t);
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/errorHandling.js
function Dt(e) {
	return k(Ot(e));
}
function Ot(e) {
	var t = k(e.errors) ? e.errors.slice(0) : [];
	return St(e) && k(e.incremental) && e.incremental.forEach(function(e) {
		e.errors && t.push.apply(t, e.errors);
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/fromError.js
function kt(e) {
	return new B(function(t) {
		t.error(e);
	});
}
//#endregion
//#region node_modules/@apollo/client/link/utils/throwServerError.js
var At = function(e, t, n) {
	var r = Error(n);
	throw r.name = "ServerError", r.response = e, r.statusCode = e.status, r.result = t, r;
};
//#endregion
//#region node_modules/@apollo/client/link/utils/validateOperation.js
function jt(e) {
	for (var t = [
		"query",
		"operationName",
		"variables",
		"extensions",
		"context"
	], n = 0, r = Object.keys(e); n < r.length; n++) {
		var i = r[n];
		if (t.indexOf(i) < 0) throw R(58, i);
	}
	return e;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/createOperation.js
function Mt(e, t) {
	var n = O({}, e);
	return Object.defineProperty(t, "setContext", {
		enumerable: !1,
		value: function(e) {
			n = typeof e == "function" ? O(O({}, n), e(n)) : O(O({}, n), e);
		}
	}), Object.defineProperty(t, "getContext", {
		enumerable: !1,
		value: function() {
			return O({}, n);
		}
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/transformOperation.js
function Nt(e) {
	var t = {
		variables: e.variables || {},
		extensions: e.extensions || {},
		operationName: e.operationName,
		query: e.query
	};
	return t.operationName || (t.operationName = typeof t.query == "string" ? "" : te(t.query) || void 0), t;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/filterOperationVariables.js
function Pt(e, t) {
	var n = O({}, e), r = new Set(Object.keys(e));
	return P(t, { Variable: function(e, t, n) {
		n && n.kind !== "VariableDefinition" && r.delete(e.name.value);
	} }), r.forEach(function(e) {
		delete n[e];
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/link/core/ApolloLink.js
function Ft(e, t) {
	return t ? t(e) : B.of();
}
function It(e) {
	return typeof e == "function" ? new Y(e) : e;
}
function Lt(e) {
	return e.request.length <= 1;
}
var Y = function() {
	function e(e) {
		e && (this.request = e);
	}
	return e.empty = function() {
		return new e(function() {
			return B.of();
		});
	}, e.from = function(t) {
		return t.length === 0 ? e.empty() : t.map(It).reduce(function(e, t) {
			return e.concat(t);
		});
	}, e.split = function(t, n, r) {
		var i = It(n), a = It(r || new e(Ft)), o = Lt(i) && Lt(a) ? new e(function(e) {
			return t(e) ? i.request(e) || B.of() : a.request(e) || B.of();
		}) : new e(function(e, n) {
			return t(e) ? i.request(e, n) || B.of() : a.request(e, n) || B.of();
		});
		return Object.assign(o, {
			left: i,
			right: a
		});
	}, e.execute = function(e, t) {
		return e.request(Mt(t.context, Nt(jt(t)))) || B.of();
	}, e.concat = function(t, n) {
		var r = It(t);
		if (Lt(r)) return globalThis.__DEV__ !== !1 && F.warn(47, r), r;
		var i = It(n), a = Lt(i) ? new e(function(e) {
			return r.request(e, function(e) {
				return i.request(e) || B.of();
			}) || B.of();
		}) : new e(function(e, t) {
			return r.request(e, function(e) {
				return i.request(e, t) || B.of();
			}) || B.of();
		});
		return Object.assign(a, {
			left: r,
			right: i
		});
	}, e.prototype.split = function(t, n, r) {
		return this.concat(e.split(t, n, r || new e(Ft)));
	}, e.prototype.concat = function(t) {
		return e.concat(this, t);
	}, e.prototype.request = function(e, t) {
		throw R(48);
	}, e.prototype.onError = function(e, t) {
		if (globalThis.__DEV__ !== !1 && Ae("onError", function() {
			globalThis.__DEV__ !== !1 && F.warn(49);
		}), t && t.error) return t.error(e), !1;
		throw e;
	}, e.prototype.setOnError = function(e) {
		return globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && F.warn(50), this.onError = e, this;
	}, e;
}(), Rt = Y.from, zt = Y.execute;
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/async.js
function Bt(e) {
	var t, n = e[Symbol.asyncIterator]();
	return t = { next: function() {
		return n.next();
	} }, t[Symbol.asyncIterator] = function() {
		return this;
	}, t;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/nodeStream.js
function Vt(e) {
	var t = null, n = null, r = !1, i = [], a = [];
	function o(e) {
		if (!n) {
			if (a.length) {
				var t = a.shift();
				if (Array.isArray(t) && t[0]) return t[0]({
					value: e,
					done: !1
				});
			}
			i.push(e);
		}
	}
	function s(e) {
		n = e, a.slice().forEach(function(t) {
			t[1](e);
		}), !t || t();
	}
	function c() {
		r = !0, a.slice().forEach(function(e) {
			e[0]({
				value: void 0,
				done: !0
			});
		}), !t || t();
	}
	t = function() {
		t = null, e.removeListener("data", o), e.removeListener("error", s), e.removeListener("end", c), e.removeListener("finish", c), e.removeListener("close", c);
	}, e.on("data", o), e.on("error", s), e.on("end", c), e.on("finish", c), e.on("close", c);
	function l() {
		return new Promise(function(e, t) {
			if (n) return t(n);
			if (i.length) return e({
				value: i.shift(),
				done: !1
			});
			if (r) return e({
				value: void 0,
				done: !0
			});
			a.push([e, t]);
		});
	}
	var u = { next: function() {
		return l();
	} };
	return Pe && (u[Symbol.asyncIterator] = function() {
		return this;
	}), u;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/promise.js
function Ht(e) {
	var t = !1, n = { next: function() {
		return t ? Promise.resolve({
			value: void 0,
			done: !0
		}) : (t = !0, new Promise(function(t, n) {
			e.then(function(e) {
				t({
					value: e,
					done: !1
				});
			}).catch(n);
		}));
	} };
	return Pe && (n[Symbol.asyncIterator] = function() {
		return this;
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/reader.js
function Ut(e) {
	var t = { next: function() {
		return e.read();
	} };
	return Pe && (t[Symbol.asyncIterator] = function() {
		return this;
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/link/http/responseIterator.js
function Wt(e) {
	return !!e.body;
}
function Gt(e) {
	return !!e.getReader;
}
function Kt(e) {
	return !!(Pe && e[Symbol.asyncIterator]);
}
function qt(e) {
	return !!e.stream;
}
function Jt(e) {
	return !!e.arrayBuffer;
}
function Yt(e) {
	return !!e.pipe;
}
function Xt(e) {
	var t = e;
	if (Wt(e) && (t = e.body), Kt(t)) return Bt(t);
	if (Gt(t)) return Ut(t.getReader());
	if (qt(t)) return Ut(t.stream().getReader());
	if (Jt(t)) return Ht(t.arrayBuffer());
	if (Yt(t)) return Vt(t);
	throw Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
//#endregion
//#region node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js
var Zt = Object.prototype.hasOwnProperty;
function Qt(e, t) {
	return I(this, void 0, void 0, function() {
		var n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
		return j(this, function(T) {
			switch (T.label) {
				case 0:
					if (TextDecoder === void 0) throw Error("TextDecoder must be defined in the environment: please import a polyfill.");
					n = new TextDecoder("utf-8"), r = e.headers?.get("content-type"), i = "boundary=", a = r?.includes(i) ? r?.substring(r?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--${a}`, s = "", c = Xt(e), l = !0, T.label = 1;
				case 1: return l ? [4, c.next()] : [3, 3];
				case 2:
					for (u = T.sent(), d = u.value, f = u.done, p = typeof d == "string" ? d : n.decode(d), m = s.length - o.length + 1, l = !f, s += p, h = s.indexOf(o, m); h > -1;) {
						if (g = void 0, C = [s.slice(0, h), s.slice(h + o.length)], g = C[0], s = C[1], _ = g.indexOf("\r\n\r\n"), v = $t(g.slice(0, _)), y = v["content-type"], y && y.toLowerCase().indexOf("application/json") === -1) throw Error("Unsupported patch content type: application/json is required.");
						if (b = g.slice(_), b) {
							if (x = en(e, b), Object.keys(x).length > 1 || "data" in x || "incremental" in x || "errors" in x || "payload" in x) if (Tt(x)) {
								if (S = {}, "payload" in x) {
									if (Object.keys(x).length === 1 && x.payload === null) return [2];
									S = O({}, x.payload);
								}
								"errors" in x && (S = O(O({}, S), { extensions: O(O({}, "extensions" in S ? S.extensions : null), (w = {}, w[ue] = x.errors, w)) })), t(S);
							} else t(x);
							else if (Object.keys(x).length === 1 && "hasNext" in x && !x.hasNext) return [2];
						}
						h = s.indexOf(o);
					}
					return [3, 1];
				case 3: return [2];
			}
		});
	});
}
function $t(e) {
	var t = {};
	return e.split("\n").forEach(function(e) {
		var n = e.indexOf(":");
		if (n > -1) {
			var r = e.slice(0, n).trim().toLowerCase();
			t[r] = e.slice(n + 1).trim();
		}
	}), t;
}
function en(e, t) {
	e.status >= 300 && At(e, function() {
		try {
			return JSON.parse(t);
		} catch {
			return t;
		}
	}(), `Response not successful: Received status code ${e.status}`);
	try {
		return JSON.parse(t);
	} catch (r) {
		var n = r;
		throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
	}
}
function tn(e, t) {
	e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e);
}
function nn(e) {
	return function(t) {
		return t.text().then(function(e) {
			return en(t, e);
		}).then(function(n) {
			return !Array.isArray(n) && !Zt.call(n, "data") && !Zt.call(n, "errors") && At(t, n, `Server response was missing for query '${Array.isArray(e) ? e.map(function(e) {
				return e.operationName;
			}) : e.operationName}'.`), n;
		});
	};
}
//#endregion
//#region node_modules/@apollo/client/link/http/serializeFetchParameter.js
var rn = function(e, t) {
	var n;
	try {
		n = JSON.stringify(e);
	} catch (e) {
		var r = R(54, t, e.message);
		throw r.parseError = e, r;
	}
	return n;
}, an = {
	http: {
		includeQuery: !0,
		includeExtensions: !1,
		preserveHeaderCase: !1
	},
	headers: {
		accept: "*/*",
		"content-type": "application/json"
	},
	options: { method: "POST" }
}, on = function(e, t) {
	return t(e);
};
function sn(e, t) {
	var n = [...arguments].slice(2), r = {}, i = {};
	n.forEach(function(e) {
		r = O(O(O({}, r), e.options), { headers: O(O({}, r.headers), e.headers) }), e.credentials && (r.credentials = e.credentials), i = O(O({}, i), e.http);
	}), r.headers && (r.headers = cn(r.headers, i.preserveHeaderCase));
	var a = e.operationName, o = e.extensions, s = e.variables, c = e.query, l = {
		operationName: a,
		variables: s
	};
	return i.includeExtensions && (l.extensions = o), i.includeQuery && (l.query = t(c, K)), {
		options: r,
		body: l
	};
}
function cn(e, t) {
	if (!t) {
		var n = {};
		return Object.keys(Object(e)).forEach(function(t) {
			n[t.toLowerCase()] = e[t];
		}), n;
	}
	var r = {};
	Object.keys(Object(e)).forEach(function(t) {
		r[t.toLowerCase()] = {
			originalName: t,
			value: e[t]
		};
	});
	var i = {};
	return Object.keys(r).forEach(function(e) {
		i[r[e].originalName] = r[e].value;
	}), i;
}
//#endregion
//#region node_modules/@apollo/client/link/http/checkFetcher.js
var ln = function(e) {
	if (!e && typeof fetch > "u") throw R(51);
}, un = function(e, t) {
	return e.getContext().uri || (typeof t == "function" ? t(e) : t || "/graphql");
};
//#endregion
//#region node_modules/@apollo/client/link/http/rewriteURIForGET.js
function dn(e, t) {
	var n = [], r = function(e, t) {
		n.push(`${e}=${encodeURIComponent(t)}`);
	};
	if ("query" in t && r("query", t.query), t.operationName && r("operationName", t.operationName), t.variables) {
		var i = void 0;
		try {
			i = rn(t.variables, "Variables map");
		} catch (e) {
			return { parseError: e };
		}
		r("variables", i);
	}
	if (t.extensions) {
		var a = void 0;
		try {
			a = rn(t.extensions, "Extensions map");
		} catch (e) {
			return { parseError: e };
		}
		r("extensions", a);
	}
	var o = "", s = e, c = e.indexOf("#");
	c !== -1 && (o = e.substr(c), s = e.substr(0, c));
	var l = s.indexOf("?") === -1 ? "?" : "&";
	return { newURI: s + l + n.join("&") + o };
}
//#endregion
//#region node_modules/@apollo/client/link/http/createHttpLink.js
var fn = Re(function() {
	return fetch;
}), pn = function(t) {
	t === void 0 && (t = {});
	var n = t.uri, r = n === void 0 ? "/graphql" : n, i = t.fetch, a = t.print, o = a === void 0 ? on : a, s = t.includeExtensions, c = t.preserveHeaderCase, l = t.useGETForQueries, u = t.includeUnusedVariables, d = u === void 0 ? !1 : u, f = A(t, [
		"uri",
		"fetch",
		"print",
		"includeExtensions",
		"preserveHeaderCase",
		"useGETForQueries",
		"includeUnusedVariables"
	]);
	globalThis.__DEV__ !== !1 && ln(i || fn);
	var p = {
		http: {
			includeExtensions: s,
			preserveHeaderCase: c
		},
		options: f.fetchOptions,
		credentials: f.credentials,
		headers: f.headers
	};
	return new Y(function(t) {
		var n = un(t, r), a = t.getContext(), s = {};
		if (a.clientAwareness) {
			var c = a.clientAwareness, u = c.name, f = c.version;
			u && (s["apollographql-client-name"] = u), f && (s["apollographql-client-version"] = f);
		}
		var m = O(O({}, s), a.headers), h = {
			http: a.http,
			options: a.fetchOptions,
			credentials: a.credentials,
			headers: m
		};
		if (e(["client"], t.query)) {
			globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && F.warn(52);
			var g = mt(t.query);
			if (!g) return kt(/* @__PURE__ */ Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
			t.query = g;
		}
		var _ = sn(t, o, an, p, h), v = _.options, y = _.body;
		y.variables && !d && (y.variables = Pt(y.variables, t.query));
		var b;
		!v.signal && typeof AbortController < "u" && (b = new AbortController(), v.signal = b.signal);
		var x = function(e) {
			return e.kind === "OperationDefinition" && e.operation === "mutation";
		}, S = function(e) {
			return e.kind === "OperationDefinition" && e.operation === "subscription";
		}(_e(t.query)), C = e(["defer"], t.query);
		if (l && !t.query.definitions.some(x) && (v.method = "GET"), C || S) {
			v.headers = v.headers || {};
			var w = "multipart/mixed;";
			S && C && globalThis.__DEV__ !== !1 && F.warn(53), S ? w += "boundary=graphql;subscriptionSpec=1.0,application/json" : C && (w += "deferSpec=20220824,application/json"), v.headers.accept = w;
		}
		if (v.method === "GET") {
			var T = dn(n, y), E = T.newURI, ee = T.parseError;
			if (ee) return kt(ee);
			n = E;
		} else try {
			v.body = rn(y, "Payload");
		} catch (e) {
			return kt(e);
		}
		return new B(function(e) {
			var r = i || Re(function() {
				return fetch;
			}) || fn, a = e.next.bind(e);
			return r(n, v).then(function(e) {
				t.setContext({ response: e });
				var n = e.headers?.get("content-type");
				return n !== null && /^multipart\/mixed/i.test(n) ? Qt(e, a) : nn(t)(e).then(a);
			}).then(function() {
				b = void 0, e.complete();
			}).catch(function(t) {
				b = void 0, tn(t, e);
			}), function() {
				b && b.abort();
			};
		});
	});
}, mn = function(e) {
	N(t, e);
	function t(t) {
		t === void 0 && (t = {});
		var n = e.call(this, pn(t).request) || this;
		return n.options = t, n;
	}
	return t;
}(Y), hn = h ? WeakMap : Map, gn = de ? WeakSet : Set, _n = new Ce(), vn = !1;
function yn() {
	vn || (vn = !0, globalThis.__DEV__ !== !1 && F.warn(64));
}
//#endregion
//#region node_modules/@apollo/client/masking/maskDefinition.js
function bn(e, t, n) {
	return _n.withValue(!0, function() {
		var r = Sn(e, t, n, !1);
		return Object.isFrozen(e) && ye(r), r;
	});
}
function xn(e, t) {
	if (t.has(e)) return t.get(e);
	var n = Array.isArray(e) ? [] : Object.create(null);
	return t.set(e, n), n;
}
function Sn(e, t, n, r, i) {
	var a = n.knownChanged, o = xn(e, n.mutableTargets);
	if (Array.isArray(e)) {
		for (var s = 0, c = Array.from(e.entries()); s < c.length; s++) {
			var l = c[s], u = l[0], d = l[1];
			if (d === null) {
				o[u] = null;
				continue;
			}
			var f = Sn(d, t, n, r, globalThis.__DEV__ === !1 ? void 0 : `${i || ""}[${u}]`);
			a.has(f) && a.add(o), o[u] = f;
		}
		return a.has(o) ? o : e;
	}
	for (var p = 0, m = t.selections; p < m.length; p++) {
		var h = m[p], g = void 0;
		if (r && a.add(o), h.kind === M.FIELD) {
			var _ = y(h), v = h.selectionSet;
			if (g = o[_] || e[_], g === void 0) continue;
			if (v && g !== null) {
				var f = Sn(e[_], v, n, r, globalThis.__DEV__ === !1 ? void 0 : `${i || ""}.${_}`);
				a.has(f) && (g = f);
			}
			globalThis.__DEV__ === !1 && (o[_] = g), globalThis.__DEV__ !== !1 && (r && _ !== "__typename" && !Object.getOwnPropertyDescriptor(o, _)?.value ? Object.defineProperty(o, _, Cn(_, g, i || "", n.operationName, n.operationType)) : (delete o[_], o[_] = g));
		}
		if (h.kind === M.INLINE_FRAGMENT && (!h.typeCondition || n.cache.fragmentMatches(h, e.__typename)) && (g = Sn(e, h.selectionSet, n, r, i)), h.kind === M.FRAGMENT_SPREAD) {
			var b = h.name.value, x = n.fragmentMap[b] || (n.fragmentMap[b] = n.cache.lookupFragment(b));
			F(x, 59, b);
			var S = pe(h);
			S !== "mask" && (g = Sn(e, x.selectionSet, n, S === "migrate", i));
		}
		a.has(g) && a.add(o);
	}
	return "__typename" in e && !("__typename" in o) && (o.__typename = e.__typename), Object.keys(o).length !== Object.keys(e).length && a.add(o), a.has(o) ? o : e;
}
function Cn(e, t, n, r, i) {
	var a = function() {
		return _n.getValue() ? t : (globalThis.__DEV__ !== !1 && F.warn(60, r ? `${i} '${r}'` : `anonymous ${i}`, `${n}.${e}`.replace(/^\./, "")), a = function() {
			return t;
		}, t);
	};
	return {
		get: function() {
			return a();
		},
		set: function(e) {
			a = function() {
				return e;
			};
		},
		enumerable: !0,
		configurable: !0
	};
}
//#endregion
//#region node_modules/@apollo/client/masking/maskFragment.js
function wn(e, t, n, r) {
	if (!n.fragmentMatches) return globalThis.__DEV__ !== !1 && yn(), e;
	var i = t.definitions.filter(function(e) {
		return e.kind === M.FRAGMENT_DEFINITION;
	});
	r === void 0 && (F(i.length === 1, 61, i.length), r = i[0].name.value);
	var a = i.find(function(e) {
		return e.name.value === r;
	});
	return F(!!a, 62, r), e == null || w(e, {}) ? e : bn(e, a.selectionSet, {
		operationType: "fragment",
		operationName: a.name.value,
		fragmentMap: f(Ue(t)),
		cache: n,
		mutableTargets: new hn(),
		knownChanged: new gn()
	});
}
//#endregion
//#region node_modules/@apollo/client/masking/maskOperation.js
function Tn(e, t, n) {
	if (!n.fragmentMatches) return globalThis.__DEV__ !== !1 && yn(), e;
	var r = Ve(t);
	return F(r, 63), e == null ? e : bn(e, r.selectionSet, {
		operationType: r.operation,
		operationName: r.name?.value,
		fragmentMap: f(Ue(t)),
		cache: n,
		mutableTargets: new hn(),
		knownChanged: new gn()
	});
}
//#endregion
//#region node_modules/@apollo/client/cache/core/cache.js
var En = function() {
	function e() {
		this.assumeImmutableResults = !1, this.getFragmentDoc = Me(se, {
			max: V["cache.fragmentQueryDocuments"] || 1e3,
			cache: ae
		});
	}
	return e.prototype.lookupFragment = function(e) {
		return null;
	}, e.prototype.batch = function(e) {
		var t = this, n = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0, r;
		return this.performTransaction(function() {
			return r = e.update(t);
		}, n), r;
	}, e.prototype.recordOptimisticTransaction = function(e, t) {
		this.performTransaction(e, t);
	}, e.prototype.transformDocument = function(e) {
		return e;
	}, e.prototype.transformForLink = function(e) {
		return e;
	}, e.prototype.identify = function(e) {}, e.prototype.gc = function() {
		return [];
	}, e.prototype.modify = function(e) {
		return !1;
	}, e.prototype.readQuery = function(e, t) {
		var n = this;
		return t === void 0 && (t = !!e.optimistic), globalThis.__DEV__ !== !1 && L(e, "canonizeResults", "cache.readQuery"), z("canonizeResults", function() {
			return n.read(O(O({}, e), {
				rootId: e.id || "ROOT_QUERY",
				optimistic: t
			}));
		});
	}, e.prototype.watchFragment = function(e) {
		var t = this, n = e.fragment, r = e.fragmentName, i = e.from, a = e.optimistic, o = a === void 0 ? !0 : a, s = A(e, [
			"fragment",
			"fragmentName",
			"from",
			"optimistic"
		]), c = this.getFragmentDoc(n, r), l = i === void 0 || typeof i == "string" ? i : this.identify(i), u = !!e[Symbol.for("apollo.dataMasking")];
		if (globalThis.__DEV__ !== !1) {
			var d = r || ze(n).name.value;
			l || globalThis.__DEV__ !== !1 && F.warn(1, d);
		}
		var f = O(O({}, s), {
			returnPartialData: !0,
			id: l,
			query: c,
			optimistic: o
		}), p;
		return new B(function(i) {
			return t.watch(O(O({}, f), {
				immediate: !0,
				callback: function(a) {
					var o = u ? wn(a.result, n, t, r) : a.result;
					if (!(p && Ne(c, { data: p.result }, { data: o }, e.variables))) {
						var s = {
							data: o,
							complete: !!a.complete
						};
						a.missing && (s.missing = vt(a.missing.map(function(e) {
							return e.missing;
						}))), p = O(O({}, a), { result: o }), i.next(s);
					}
				}
			}));
		});
	}, e.prototype.readFragment = function(e, t) {
		var n = this;
		return t === void 0 && (t = !!e.optimistic), globalThis.__DEV__ !== !1 && L(e, "canonizeResults", "cache.readFragment"), z("canonizeResults", function() {
			return n.read(O(O({}, e), {
				query: n.getFragmentDoc(e.fragment, e.fragmentName),
				rootId: e.id,
				optimistic: t
			}));
		});
	}, e.prototype.writeQuery = function(e) {
		var t = e.id, n = e.data, r = A(e, ["id", "data"]);
		return this.write(Object.assign(r, {
			dataId: t || "ROOT_QUERY",
			result: n
		}));
	}, e.prototype.writeFragment = function(e) {
		var t = e.id, n = e.data, r = e.fragment, i = e.fragmentName, a = A(e, [
			"id",
			"data",
			"fragment",
			"fragmentName"
		]);
		return this.write(Object.assign(a, {
			query: this.getFragmentDoc(r, i),
			dataId: t,
			result: n
		}));
	}, e.prototype.updateQuery = function(e, t) {
		return globalThis.__DEV__ !== !1 && L(e, "canonizeResults", "cache.updateQuery"), this.batch({ update: function(n) {
			var r = z("canonizeResults", function() {
				return n.readQuery(e);
			}), i = t(r);
			return i == null ? r : (n.writeQuery(O(O({}, e), { data: i })), i);
		} });
	}, e.prototype.updateFragment = function(e, t) {
		return globalThis.__DEV__ !== !1 && L(e, "canonizeResults", "cache.updateFragment"), this.batch({ update: function(n) {
			var r = z("canonizeResults", function() {
				return n.readFragment(e);
			}), i = t(r);
			return i == null ? r : (n.writeFragment(O(O({}, e), { data: i })), i);
		} });
	}, e;
}();
globalThis.__DEV__ !== !1 && (En.prototype.getMemoryInternals = c);
//#endregion
//#region node_modules/@apollo/client/cache/core/types/common.js
var Dn = function(e) {
	N(t, e);
	function t(n, r, i, a) {
		var o, s = e.call(this, n) || this;
		if (s.message = n, s.path = r, s.query = i, s.variables = a, Array.isArray(s.path)) {
			s.missing = s.message;
			for (var c = s.path.length - 1; c >= 0; --c) s.missing = (o = {}, o[s.path[c]] = s.missing, o);
		} else s.missing = s.path;
		return s.__proto__ = t.prototype, s;
	}
	return t;
}(Error), X = Object.prototype.hasOwnProperty;
function On(e) {
	return e == null;
}
function kn(e, t) {
	var n = e.__typename, r = e.id, i = e._id;
	if (typeof n == "string" && (t && (t.keyObject = On(r) ? On(i) ? void 0 : { _id: i } : { id: r }), On(r) && !On(i) && (r = i), !On(r))) return `${n}:${typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r)}`;
}
var An = {
	dataIdFromObject: kn,
	addTypename: !0,
	resultCaching: !0,
	canonizeResults: !1
};
function jn(e) {
	return ge(An, e);
}
function Mn(e) {
	var t = e.canonizeResults;
	return t === void 0 ? An.canonizeResults : t;
}
function Nn(e, t) {
	return n(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var Pn = /^[_a-z][_0-9a-z]*/i;
function Z(e) {
	var t = e.match(Pn);
	return t ? t[0] : e;
}
function Fn(e, t, n) {
	return _(t) ? D(t) ? t.every(function(t) {
		return Fn(e, t, n);
	}) : e.selections.every(function(e) {
		if (S(e) && xe(e, n)) {
			var r = y(e);
			return X.call(t, r) && (!e.selectionSet || Fn(e.selectionSet, t[r], n));
		}
		return !0;
	}) : !1;
}
function In(e) {
	return _(e) && !n(e) && !D(e);
}
function Ln() {
	return new q();
}
function Rn(e, t) {
	var n = f(Ue(e));
	return {
		fragmentMap: n,
		lookupFragment: function(e) {
			var r = n[e];
			return !r && t && (r = t.lookup(e)), r || null;
		}
	};
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/entityStore.js
var zn = Object.create(null), Bn = function() {
	return zn;
}, Vn = Object.create(null), Hn = function() {
	function e(e, t) {
		var r = this;
		this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
			return ye(n(e) ? r.get(e.__ref, t) : e && e[t]);
		}, this.canRead = function(e) {
			return n(e) ? r.has(e.__ref) : typeof e == "object";
		}, this.toReference = function(e, t) {
			if (typeof e == "string") return Te(e);
			if (n(e)) return e;
			var i = r.policies.identify(e)[0];
			if (i) {
				var a = Te(i);
				return t && r.merge(i, e), a;
			}
		};
	}
	return e.prototype.toObject = function() {
		return O({}, this.data);
	}, e.prototype.has = function(e) {
		return this.lookup(e, !0) !== void 0;
	}, e.prototype.get = function(e, t) {
		if (this.group.depend(e, t), X.call(this.data, e)) {
			var n = this.data[e];
			if (n && X.call(n, t)) return n[t];
		}
		if (t === "__typename" && X.call(this.policies.rootTypenamesById, e)) return this.policies.rootTypenamesById[e];
		if (this instanceof Q) return this.parent.get(e, t);
	}, e.prototype.lookup = function(e, t) {
		if (t && this.group.depend(e, "__exists"), X.call(this.data, e)) return this.data[e];
		if (this instanceof Q) return this.parent.lookup(e, t);
		if (this.policies.rootTypenamesById[e]) return Object.create(null);
	}, e.prototype.merge = function(e, t) {
		var r = this, i;
		n(e) && (e = e.__ref), n(t) && (t = t.__ref);
		var a = typeof e == "string" ? this.lookup(i = e) : e, o = typeof t == "string" ? this.lookup(i = t) : t;
		if (o) {
			F(typeof i == "string", 2);
			var s = new q(qn).merge(a, o);
			if (this.data[i] = s, s !== a && (delete this.refs[i], this.group.caching)) {
				var c = Object.create(null);
				a || (c.__exists = 1), Object.keys(o).forEach(function(e) {
					if (!a || a[e] !== s[e]) {
						c[e] = 1;
						var t = Z(e);
						t !== e && !r.policies.hasKeyArgs(s.__typename, t) && (c[t] = 1), s[e] === void 0 && !(r instanceof Q) && delete s[e];
					}
				}), c.__typename && !(a && a.__typename) && this.policies.rootTypenamesById[i] === s.__typename && delete c.__typename, Object.keys(c).forEach(function(e) {
					return r.group.dirty(i, e);
				});
			}
		}
	}, e.prototype.modify = function(e, t) {
		var r = this, i = this.lookup(e);
		if (i) {
			var a = Object.create(null), o = !1, s = !0, c = {
				DELETE: zn,
				INVALIDATE: Vn,
				isReference: n,
				toReference: this.toReference,
				canRead: this.canRead,
				readField: function(t, n) {
					return r.policies.readField(typeof t == "string" ? {
						fieldName: t,
						from: n || Te(e)
					} : t, { store: r });
				}
			};
			if (Object.keys(i).forEach(function(l) {
				var u = Z(l), d = i[l];
				if (d !== void 0) {
					var f = typeof t == "function" ? t : t[l] || t[u];
					if (f) {
						var p = f === Bn ? zn : f(ye(d), O(O({}, c), {
							fieldName: u,
							storeFieldName: l,
							storage: r.getStorage(e, l)
						}));
						if (p === Vn) r.group.dirty(e, l);
						else if (p === zn && (p = void 0), p !== d && (a[l] = p, o = !0, d = p, globalThis.__DEV__ !== !1)) {
							var m = function(e) {
								if (r.lookup(e.__ref) === void 0) return globalThis.__DEV__ !== !1 && F.warn(3, e), !0;
							};
							if (n(p)) m(p);
							else if (Array.isArray(p)) for (var h = !1, g = void 0, _ = 0, v = p; _ < v.length; _++) {
								var y = v[_];
								if (n(y)) {
									if (h = !0, m(y)) break;
								} else typeof y == "object" && y && r.policies.identify(y)[0] && (g = y);
								if (h && g !== void 0) {
									globalThis.__DEV__ !== !1 && F.warn(4, g);
									break;
								}
							}
						}
					}
					d !== void 0 && (s = !1);
				}
			}), o) return this.merge(e, a), s && (this instanceof Q ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
		}
		return !1;
	}, e.prototype.delete = function(e, t, n) {
		var r, i = this.lookup(e);
		if (i) {
			var a = this.getFieldValue(i, "__typename"), o = t && n ? this.policies.getStoreFieldName({
				typename: a,
				fieldName: t,
				args: n
			}) : t;
			return this.modify(e, o ? (r = {}, r[o] = Bn, r) : Bn);
		}
		return !1;
	}, e.prototype.evict = function(e, t) {
		var n = !1;
		return e.id && (X.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof Q && this !== t && (n = this.parent.evict(e, t) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n;
	}, e.prototype.clear = function() {
		this.replace(null);
	}, e.prototype.extract = function() {
		var e = this, t = this.toObject(), n = [];
		return this.getRootIdSet().forEach(function(t) {
			X.call(e.policies.rootTypenamesById, t) || n.push(t);
		}), n.length && (t.__META = { extraRootIds: n.sort() }), t;
	}, e.prototype.replace = function(e) {
		var t = this;
		if (Object.keys(this.data).forEach(function(n) {
			e && X.call(e, n) || t.delete(n);
		}), e) {
			var n = e.__META, r = A(e, ["__META"]);
			Object.keys(r).forEach(function(e) {
				t.merge(e, r[e]);
			}), n && n.extraRootIds.forEach(this.retain, this);
		}
	}, e.prototype.retain = function(e) {
		return this.rootIds[e] = (this.rootIds[e] || 0) + 1;
	}, e.prototype.release = function(e) {
		if (this.rootIds[e] > 0) {
			var t = --this.rootIds[e];
			return t || delete this.rootIds[e], t;
		}
		return 0;
	}, e.prototype.getRootIdSet = function(e) {
		return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof Q ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
	}, e.prototype.gc = function() {
		var e = this, t = this.getRootIdSet(), n = this.toObject();
		t.forEach(function(r) {
			X.call(n, r) && (Object.keys(e.findChildRefIds(r)).forEach(t.add, t), delete n[r]);
		});
		var r = Object.keys(n);
		if (r.length) {
			for (var i = this; i instanceof Q;) i = i.parent;
			r.forEach(function(e) {
				return i.delete(e);
			});
		}
		return r;
	}, e.prototype.findChildRefIds = function(e) {
		if (!X.call(this.refs, e)) {
			var t = this.refs[e] = Object.create(null), r = this.data[e];
			if (!r) return t;
			var i = new Set([r]);
			i.forEach(function(e) {
				n(e) && (t[e.__ref] = !0), _(e) && Object.keys(e).forEach(function(t) {
					var n = e[t];
					_(n) && i.add(n);
				});
			});
		}
		return this.refs[e];
	}, e.prototype.makeCacheKey = function() {
		return this.group.keyMaker.lookupArray(arguments);
	}, e;
}(), Un = function() {
	function e(e, t) {
		t === void 0 && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching();
	}
	return e.prototype.resetCaching = function() {
		this.d = this.caching ? ke() : null, this.keyMaker = new le(h);
	}, e.prototype.depend = function(e, t) {
		if (this.d) {
			this.d(Wn(e, t));
			var n = Z(t);
			n !== t && this.d(Wn(e, n)), this.parent && this.parent.depend(e, t);
		}
	}, e.prototype.dirty = function(e, t) {
		this.d && this.d.dirty(Wn(e, t), t === "__exists" ? "forget" : "setDirty");
	}, e;
}();
function Wn(e, t) {
	return t + "#" + e;
}
function Gn(e, t) {
	Jn(e) && e.group.depend(t, "__exists");
}
(function(e) {
	e.Root = function(e) {
		N(t, e);
		function t(t) {
			var n = t.policies, r = t.resultCaching, i = r === void 0 ? !0 : r, a = t.seed, o = e.call(this, n, new Un(i)) || this;
			return o.stump = new Kn(o), o.storageTrie = new le(h), a && o.replace(a), o;
		}
		return t.prototype.addLayer = function(e, t) {
			return this.stump.addLayer(e, t);
		}, t.prototype.removeLayer = function() {
			return this;
		}, t.prototype.getStorage = function() {
			return this.storageTrie.lookupArray(arguments);
		}, t;
	}(e);
})(Hn || (Hn = {}));
var Q = function(e) {
	N(t, e);
	function t(t, n, r, i) {
		var a = e.call(this, n.policies, i) || this;
		return a.id = t, a.parent = n, a.replay = r, a.group = i, r(a), a;
	}
	return t.prototype.addLayer = function(e, n) {
		return new t(e, this, n, this.group);
	}, t.prototype.removeLayer = function(e) {
		var t = this, n = this.parent.removeLayer(e);
		return e === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(e) {
			var r = t.data[e], i = n.lookup(e);
			i ? r ? r !== i && Object.keys(r).forEach(function(n) {
				w(r[n], i[n]) || t.group.dirty(e, n);
			}) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach(function(n) {
				t.group.dirty(e, n);
			})) : t.delete(e);
		}), n) : n === this.parent ? this : n.addLayer(this.id, this.replay);
	}, t.prototype.toObject = function() {
		return O(O({}, this.parent.toObject()), this.data);
	}, t.prototype.findChildRefIds = function(t) {
		var n = this.parent.findChildRefIds(t);
		return X.call(this.data, t) ? O(O({}, n), e.prototype.findChildRefIds.call(this, t)) : n;
	}, t.prototype.getStorage = function() {
		for (var e = this.parent; e.parent;) e = e.parent;
		return e.getStorage.apply(e, arguments);
	}, t;
}(Hn), Kn = function(e) {
	N(t, e);
	function t(t) {
		return e.call(this, "EntityStore.Stump", t, function() {}, new Un(t.group.caching, t.group)) || this;
	}
	return t.prototype.removeLayer = function() {
		return this;
	}, t.prototype.merge = function(e, t) {
		return this.parent.merge(e, t);
	}, t;
}(Q);
function qn(e, t, n) {
	var r = e[n], i = t[n];
	return w(r, i) ? r : i;
}
function Jn(e) {
	return !!(e instanceof Hn && e.group.caching);
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/object-canon.js
function Yn(e) {
	return _(e) ? D(e) ? e.slice(0) : O({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Xn = function() {
	function e() {
		this.known = new (de ? WeakSet : Set)(), this.pool = new le(h), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
	}
	return e.prototype.isKnown = function(e) {
		return _(e) && this.known.has(e);
	}, e.prototype.pass = function(e) {
		if (_(e)) {
			var t = Yn(e);
			return this.passes.set(t, e), t;
		}
		return e;
	}, e.prototype.admit = function(e) {
		var t = this;
		if (_(e)) {
			var n = this.passes.get(e);
			if (n) return n;
			switch (Object.getPrototypeOf(e)) {
				case Array.prototype:
					if (this.known.has(e)) return e;
					var r = e.map(this.admit, this), i = this.pool.lookupArray(r);
					return i.array || (this.known.add(i.array = r), globalThis.__DEV__ !== !1 && Object.freeze(r)), i.array;
				case null:
				case Object.prototype:
					if (this.known.has(e)) return e;
					var a = Object.getPrototypeOf(e), o = [a], s = this.sortedKeys(e);
					o.push(s.json);
					var c = o.length;
					s.sorted.forEach(function(n) {
						o.push(t.admit(e[n]));
					});
					var i = this.pool.lookupArray(o);
					if (!i.object) {
						var l = i.object = Object.create(a);
						this.known.add(l), s.sorted.forEach(function(e, t) {
							l[e] = o[c + t];
						}), globalThis.__DEV__ !== !1 && Object.freeze(l);
					}
					return i.object;
			}
		}
		return e;
	}, e.prototype.sortedKeys = function(e) {
		var t = Object.keys(e), n = this.pool.lookupArray(t);
		if (!n.keys) {
			t.sort();
			var r = JSON.stringify(t);
			(n.keys = this.keysByJSON.get(r)) || this.keysByJSON.set(r, n.keys = {
				sorted: t,
				json: r
			});
		}
		return n.keys;
	}, e;
}();
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/readFromStore.js
function Zn(e) {
	return [
		e.selectionSet,
		e.objectOrReference,
		e.context,
		e.context.canonizeResults
	];
}
var Qn = function() {
	function e(e) {
		var t = this;
		this.knownResults = new (h ? WeakMap : Map)(), this.config = ge(e, {
			addTypename: e.addTypename !== !1,
			canonizeResults: Mn(e)
		}), this.canon = e.canon || new Xn(), this.executeSelectionSet = Me(function(e) {
			var n, r = e.context.canonizeResults, i = Zn(e);
			i[3] = !r;
			var a = (n = t.executeSelectionSet).peek.apply(n, i);
			return a ? r ? O(O({}, a), { result: t.canon.admit(a.result) }) : a : (Gn(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e));
		}, {
			max: this.config.resultCacheMaxSize || V["inMemoryCache.executeSelectionSet"] || 5e4,
			keyArgs: Zn,
			makeCacheKey: function(e, t, r, i) {
				if (Jn(r.store)) return r.store.makeCacheKey(e, n(t) ? t.__ref : t, r.varString, i);
			}
		}), this.executeSubSelectedArray = Me(function(e) {
			return Gn(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e);
		}, {
			max: this.config.resultCacheMaxSize || V["inMemoryCache.executeSubSelectedArray"] || 1e4,
			makeCacheKey: function(e) {
				var t = e.field, n = e.array, r = e.context;
				if (Jn(r.store)) return r.store.makeCacheKey(t, n, r.varString);
			}
		});
	}
	return e.prototype.resetCanon = function() {
		this.canon = new Xn();
	}, e.prototype.diffQueryAgainstStore = function(e) {
		var t = e.store, n = e.query, r = e.rootId, a = r === void 0 ? "ROOT_QUERY" : r, o = e.variables, s = e.returnPartialData, c = s === void 0 ? !0 : s, l = e.canonizeResults, u = l === void 0 ? this.config.canonizeResults : l, d = this.config.cache.policies;
		o = O(O({}, he(i(n))), o);
		var f = Te(a), p = this.executeSelectionSet({
			selectionSet: _e(n).selectionSet,
			objectOrReference: f,
			enclosingRef: f,
			context: O({
				store: t,
				query: n,
				policies: d,
				variables: o,
				varString: C(o),
				canonizeResults: u
			}, Rn(n, this.config.fragments))
		}), m;
		if (p.missing && (m = [new Dn($n(p.missing), p.missing, n, o)], !c)) throw m[0];
		return {
			result: p.result,
			complete: !m,
			missing: m
		};
	}, e.prototype.isFresh = function(e, t, n, r) {
		if (Jn(r.store) && this.knownResults.get(e) === n) {
			var i = this.executeSelectionSet.peek(n, t, r, this.canon.isKnown(e));
			if (i && e === i.result) return !0;
		}
		return !1;
	}, e.prototype.execSelectionSetImpl = function(e) {
		var t = this, r = e.selectionSet, i = e.objectOrReference, a = e.enclosingRef, o = e.context;
		if (n(i) && !o.policies.rootTypenamesById[i.__ref] && !o.store.has(i.__ref)) return {
			result: this.canon.empty,
			missing: `Dangling reference to missing ${i.__ref} object`
		};
		var s = o.variables, c = o.policies, l = o.store.getFieldValue(i, "__typename"), u = [], d, f = new q();
		this.config.addTypename && typeof l == "string" && !c.rootIdsByTypename[l] && u.push({ __typename: l });
		function p(e, t) {
			var n;
			return e.missing && (d = f.merge(d, (n = {}, n[t] = e.missing, n))), e.result;
		}
		var m = new Set(r.selections);
		m.forEach(function(e) {
			var r, h;
			if (xe(e, s)) if (S(e)) {
				var g = c.readField({
					fieldName: e.name.value,
					field: e,
					variables: o.variables,
					from: i
				}, o), _ = y(e);
				g === void 0 ? ft.added(e) || (d = f.merge(d, (r = {}, r[_] = `Can't find field '${e.name.value}' on ${n(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)}`, r))) : D(g) ? g.length > 0 && (g = p(t.executeSubSelectedArray({
					field: e,
					array: g,
					enclosingRef: a,
					context: o
				}), _)) : e.selectionSet ? g != null && (g = p(t.executeSelectionSet({
					selectionSet: e.selectionSet,
					objectOrReference: g,
					enclosingRef: n(g) ? g : a,
					context: o
				}), _)) : o.canonizeResults && (g = t.canon.pass(g)), g !== void 0 && u.push((h = {}, h[_] = g, h));
			} else {
				var v = ie(e, o.lookupFragment);
				if (!v && e.kind === M.FRAGMENT_SPREAD) throw R(10, e.name.value);
				v && c.fragmentMatches(v, l) && v.selectionSet.selections.forEach(m.add, m);
			}
		});
		var h = {
			result: vt(u),
			missing: d
		}, g = o.canonizeResults ? this.canon.admit(h) : ye(h);
		return g.result && this.knownResults.set(g.result, r), g;
	}, e.prototype.execSubSelectedArrayImpl = function(e) {
		var t = this, r = e.field, i = e.array, a = e.enclosingRef, o = e.context, s, c = new q();
		function l(e, t) {
			var n;
			return e.missing && (s = c.merge(s, (n = {}, n[t] = e.missing, n))), e.result;
		}
		return r.selectionSet && (i = i.filter(o.store.canRead)), i = i.map(function(e, i) {
			return e === null ? null : D(e) ? l(t.executeSubSelectedArray({
				field: r,
				array: e,
				enclosingRef: a,
				context: o
			}), i) : r.selectionSet ? l(t.executeSelectionSet({
				selectionSet: r.selectionSet,
				objectOrReference: e,
				enclosingRef: n(e) ? e : a,
				context: o
			}), i) : (globalThis.__DEV__ !== !1 && er(o.store, r, e), e);
		}), {
			result: o.canonizeResults ? this.canon.admit(i) : i,
			missing: s
		};
	}, e;
}();
function $n(e) {
	try {
		JSON.stringify(e, function(e, t) {
			if (typeof t == "string") throw t;
			return t;
		});
	} catch (e) {
		return e;
	}
}
function er(e, t, r) {
	if (!t.selectionSet) {
		var i = new Set([r]);
		i.forEach(function(r) {
			_(r) && (F(!n(r), 11, Nn(e, r), t.name.value), Object.values(r).forEach(i.add, i));
		});
	}
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/reactiveVars.js
var tr = new Ce(), nr = /* @__PURE__ */ new WeakMap();
function rr(e) {
	var t = nr.get(e);
	return t || nr.set(e, t = {
		vars: /* @__PURE__ */ new Set(),
		dep: ke()
	}), t;
}
function ir(e) {
	rr(e).vars.forEach(function(t) {
		return t.forgetCache(e);
	});
}
function ar(e) {
	rr(e).vars.forEach(function(t) {
		return t.attachCache(e);
	});
}
function or(e) {
	var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = function(a) {
		if (arguments.length > 0) {
			if (e !== a) {
				e = a, t.forEach(function(e) {
					rr(e).dep.dirty(r), sr(e);
				});
				var o = Array.from(n);
				n.clear(), o.forEach(function(t) {
					return t(e);
				});
			}
		} else {
			var s = tr.getValue();
			s && (i(s), rr(s).dep(r));
		}
		return e;
	};
	r.onNextChange = function(e) {
		return n.add(e), function() {
			n.delete(e);
		};
	};
	var i = r.attachCache = function(e) {
		return t.add(e), rr(e).vars.add(r), r;
	};
	return r.forgetCache = function(e) {
		return t.delete(e);
	}, r;
}
function sr(e) {
	e.broadcastWatches && e.broadcastWatches();
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/key-extractor.js
var cr = Object.create(null);
function lr(e) {
	var t = JSON.stringify(e);
	return cr[t] || (cr[t] = Object.create(null));
}
function ur(e) {
	var t = lr(e);
	return t.keyFieldsFn || (t.keyFieldsFn = function(t, n) {
		var r = function(e, t) {
			return n.readField(t, e);
		}, i = n.keyObject = fr(e, function(e) {
			var i = hr(n.storeObject, e, r);
			return i === void 0 && t !== n.storeObject && X.call(t, e[0]) && (i = hr(t, e, mr)), F(i !== void 0, 5, e.join("."), t), i;
		});
		return `${n.typename}:${JSON.stringify(i)}`;
	});
}
function dr(e) {
	var t = lr(e);
	return t.keyArgsFn || (t.keyArgsFn = function(t, n) {
		var r = n.field, i = n.variables, a = n.fieldName, o = fr(e, function(e) {
			var n = e[0], a = n.charAt(0);
			if (a === "@") {
				if (r && k(r.directives)) {
					var o = n.slice(1), s = r.directives.find(function(e) {
						return e.name.value === o;
					}), c = s && Be(s, i);
					return c && hr(c, e.slice(1));
				}
				return;
			}
			if (a === "$") {
				var l = n.slice(1);
				if (i && X.call(i, l)) {
					var u = e.slice(0);
					return u[0] = l, hr(i, u);
				}
				return;
			}
			if (t) return hr(t, e);
		}), s = JSON.stringify(o);
		return (t || s !== "{}") && (a += ":" + s), a;
	});
}
function fr(e, t) {
	var n = new q();
	return pr(e).reduce(function(e, r) {
		var i, a = t(r);
		if (a !== void 0) {
			for (var o = r.length - 1; o >= 0; --o) a = (i = {}, i[r[o]] = a, i);
			e = n.merge(e, a);
		}
		return e;
	}, Object.create(null));
}
function pr(e) {
	var t = lr(e);
	if (!t.paths) {
		var n = t.paths = [], r = [];
		e.forEach(function(t, i) {
			D(t) ? (pr(t).forEach(function(e) {
				return n.push(r.concat(e));
			}), r.length = 0) : (r.push(t), D(e[i + 1]) || (n.push(r.slice(0)), r.length = 0));
		});
	}
	return t.paths;
}
function mr(e, t) {
	return e[t];
}
function hr(e, t, n) {
	return n = n || mr, gr(t.reduce(function e(t, r) {
		return D(t) ? t.map(function(t) {
			return e(t, r);
		}) : t && n(t, r);
	}, e));
}
function gr(e) {
	return _(e) ? D(e) ? e.map(gr) : fr(Object.keys(e).sort(), function(t) {
		return hr(e, t);
	}) : e;
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/policies.js
function _r(e) {
	return e.args === void 0 ? e.field ? Be(e.field, e.variables) : null : e.args;
}
var vr = function() {}, yr = function(e, t) {
	return t.fieldName;
}, br = function(e, t, n) {
	var r = n.mergeObjects;
	return r(e, t);
}, xr = function(e, t) {
	return t;
}, Sr = function() {
	function e(e) {
		this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = O({ dataIdFromObject: kn }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
	}
	return e.prototype.identify = function(e, t) {
		var n = this, r = t && (t.typename || t.storeObject?.__typename) || e.__typename;
		if (r === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
		var i = t && t.storeObject || e, a = O(O({}, t), {
			typename: r,
			storeObject: i,
			readField: t && t.readField || function() {
				var e = wr(arguments, i);
				return n.readField(e, {
					store: n.cache.data,
					variables: e.variables
				});
			}
		}), o, s = r && this.getTypePolicy(r), c = s && s.keyFn || this.config.dataIdFromObject;
		return _n.withValue(!0, function() {
			for (; c;) {
				var t = c(O(O({}, e), i), a);
				if (D(t)) c = ur(t);
				else {
					o = t;
					break;
				}
			}
		}), o = o ? String(o) : void 0, a.keyObject ? [o, a.keyObject] : [o];
	}, e.prototype.addTypePolicies = function(e) {
		var t = this;
		Object.keys(e).forEach(function(n) {
			var r = e[n], i = r.queryType, a = r.mutationType, o = r.subscriptionType, s = A(r, [
				"queryType",
				"mutationType",
				"subscriptionType"
			]);
			i && t.setRootTypename("Query", n), a && t.setRootTypename("Mutation", n), o && t.setRootTypename("Subscription", n), X.call(t.toBeAdded, n) ? t.toBeAdded[n].push(s) : t.toBeAdded[n] = [s];
		});
	}, e.prototype.updateTypePolicy = function(e, t, n) {
		var r = this.getTypePolicy(e), i = t.keyFields, a = t.fields;
		function o(e, t) {
			e.merge = typeof t == "function" ? t : t === !0 ? br : t === !1 ? xr : e.merge;
		}
		o(r, t.merge), r.keyFn = i === !1 ? vr : D(i) ? ur(i) : typeof i == "function" ? i : r.keyFn, a && Object.keys(a).forEach(function(t) {
			var r = n[t];
			(!r || r?.typename !== e) && (r = n[t] = { typename: e });
			var i = a[t];
			if (typeof i == "function") r.read = i;
			else {
				var s = i.keyArgs, c = i.read, l = i.merge;
				r.keyFn = s === !1 ? yr : D(s) ? dr(s) : typeof s == "function" ? s : r.keyFn, typeof c == "function" && (r.read = c), o(r, l);
			}
			r.read && r.merge && (r.keyFn = r.keyFn || yr);
		});
	}, e.prototype.setRootTypename = function(e, t) {
		t === void 0 && (t = e);
		var n = "ROOT_" + e.toUpperCase(), r = this.rootTypenamesById[n];
		t !== r && (F(!r || r === e, 6, e), r && delete this.rootIdsByTypename[r], this.rootIdsByTypename[t] = n, this.rootTypenamesById[n] = t);
	}, e.prototype.addPossibleTypes = function(e) {
		var t = this;
		this.usingPossibleTypes = !0, Object.keys(e).forEach(function(n) {
			t.getSupertypeSet(n, !0), e[n].forEach(function(e) {
				t.getSupertypeSet(e, !0).add(n);
				var r = e.match(Pn);
				(!r || r[0] !== e) && t.fuzzySubtypes.set(e, new RegExp(e));
			});
		});
	}, e.prototype.getTypePolicy = function(e) {
		var t = this;
		if (!X.call(this.typePolicies, e)) {
			var n = this.typePolicies[e] = Object.create(null);
			n.fields = Object.create(null);
			var r = this.supertypeMap.get(e);
			!r && this.fuzzySubtypes.size && (r = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach(function(n, i) {
				if (n.test(e)) {
					var a = t.supertypeMap.get(i);
					a && a.forEach(function(e) {
						return r.add(e);
					});
				}
			})), r && r.size && r.forEach(function(e) {
				var r = t.getTypePolicy(e), i = r.fields, a = A(r, ["fields"]);
				Object.assign(n, a), Object.assign(n.fields, i);
			});
		}
		var i = this.toBeAdded[e];
		return i && i.length && i.splice(0).forEach(function(n) {
			t.updateTypePolicy(e, n, t.typePolicies[e].fields);
		}), this.typePolicies[e];
	}, e.prototype.getFieldPolicy = function(e, t) {
		if (e) return this.getTypePolicy(e).fields[t];
	}, e.prototype.getSupertypeSet = function(e, t) {
		var n = this.supertypeMap.get(e);
		return !n && t && this.supertypeMap.set(e, n = /* @__PURE__ */ new Set()), n;
	}, e.prototype.fragmentMatches = function(e, t, n, r) {
		var i = this;
		if (!e.typeCondition) return !0;
		if (!t) return !1;
		var a = e.typeCondition.name.value;
		if (t === a) return !0;
		if (this.usingPossibleTypes && this.supertypeMap.has(a)) for (var o = this.getSupertypeSet(t, !0), s = [o], c = function(e) {
			var t = i.getSupertypeSet(e, !1);
			t && t.size && s.indexOf(t) < 0 && s.push(t);
		}, l = !!(n && this.fuzzySubtypes.size), u = !1, d = 0; d < s.length; ++d) {
			var f = s[d];
			if (f.has(a)) return o.has(a) || (u && globalThis.__DEV__ !== !1 && F.warn(7, t, a), o.add(a)), !0;
			f.forEach(c), l && d === s.length - 1 && Fn(e.selectionSet, n, r) && (l = !1, u = !0, this.fuzzySubtypes.forEach(function(e, n) {
				var r = t.match(e);
				r && r[0] === t && c(n);
			}));
		}
		return !1;
	}, e.prototype.hasKeyArgs = function(e, t) {
		var n = this.getFieldPolicy(e, t);
		return !!(n && n.keyFn);
	}, e.prototype.getStoreFieldName = function(e) {
		var t = e.typename, n = e.fieldName, r = this.getFieldPolicy(t, n), i, a = r && r.keyFn;
		if (a && t) for (var o = {
			typename: t,
			fieldName: n,
			field: e.field || null,
			variables: e.variables
		}, s = _r(e); a;) {
			var c = a(s, o);
			if (D(c)) a = dr(c);
			else {
				i = c || n;
				break;
			}
		}
		return i === void 0 && (i = e.field ? x(e.field, e.variables) : ne(n, _r(e))), i === !1 ? n : n === Z(i) ? i : n + ":" + i;
	}, e.prototype.readField = function(e, t) {
		var r = e.from;
		if (r && (e.field || e.fieldName)) {
			if (e.typename === void 0) {
				var i = t.store.getFieldValue(r, "__typename");
				i && (e.typename = i);
			}
			var a = this.getStoreFieldName(e), o = Z(a), s = t.store.getFieldValue(r, a), c = this.getFieldPolicy(e.typename, o), l = c && c.read;
			if (l) {
				var u = Cr(this, r, e, t, t.store.getStorage(n(r) ? r.__ref : r, a));
				return tr.withValue(this.cache, l, [s, u]);
			}
			return s;
		}
	}, e.prototype.getReadFunction = function(e, t) {
		var n = this.getFieldPolicy(e, t);
		return n && n.read;
	}, e.prototype.getMergeFunction = function(e, t, n) {
		var r = this.getFieldPolicy(e, t), i = r && r.merge;
		return !i && n && (r = this.getTypePolicy(n), i = r && r.merge), i;
	}, e.prototype.runMergeFunction = function(e, t, n, r, i) {
		var a = n.field, o = n.typename, s = n.merge;
		return s === br ? Tr(r.store)(e, t) : s === xr ? t : (r.overwrite && (e = void 0), s(e, t, Cr(this, void 0, {
			typename: o,
			fieldName: a.name.value,
			field: a,
			variables: r.variables
		}, r, i || Object.create(null))));
	}, e;
}();
function Cr(e, t, r, i, a) {
	var o = e.getStoreFieldName(r), s = Z(o), c = r.variables || i.variables, l = i.store, u = l.toReference, d = l.canRead;
	return {
		args: _r(r),
		field: r.field || null,
		fieldName: s,
		storeFieldName: o,
		variables: c,
		isReference: n,
		toReference: u,
		storage: a,
		cache: e.cache,
		canRead: d,
		readField: function() {
			return e.readField(wr(arguments, t, c), i);
		},
		mergeObjects: Tr(i.store)
	};
}
function wr(e, t, n) {
	var r = e[0], i = e[1], a = e.length, o;
	return typeof r == "string" ? o = {
		fieldName: r,
		from: a > 1 ? i : t
	} : (o = O({}, r), X.call(o, "from") || (o.from = t)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && F.warn(8, ve(Array.from(e))), o.variables === void 0 && (o.variables = n), o;
}
function Tr(e) {
	return function(t, r) {
		if (D(t) || D(r)) throw R(9);
		if (_(t) && _(r)) {
			var i = e.getFieldValue(t, "__typename"), a = e.getFieldValue(r, "__typename");
			if (i && a && i !== a) return r;
			if (n(t) && In(r)) return e.merge(t.__ref, r), t;
			if (In(t) && n(r)) return e.merge(t, r.__ref), r;
			if (In(t) && In(r)) return O(O({}, t), r);
		}
		return r;
	};
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/writeToStore.js
function Er(e, t, n) {
	var r = `${t}${n}`, i = e.flavors.get(r);
	return i || e.flavors.set(r, i = e.clientOnly === t && e.deferred === n ? e : O(O({}, e), {
		clientOnly: t,
		deferred: n
	})), i;
}
var Dr = function() {
	function e(e, t, n) {
		this.cache = e, this.reader = t, this.fragments = n;
	}
	return e.prototype.writeToStore = function(e, t) {
		var r = this, i = t.query, a = t.result, o = t.dataId, s = t.variables, c = t.overwrite, l = Ve(i), u = Ln();
		s = O(O({}, he(l)), s);
		var d = O(O({
			store: e,
			written: Object.create(null),
			merge: function(e, t) {
				return u.merge(e, t);
			},
			variables: s,
			varString: C(s)
		}, Rn(i, this.fragments)), {
			overwrite: !!c,
			incomingById: /* @__PURE__ */ new Map(),
			clientOnly: !1,
			deferred: !1,
			flavors: /* @__PURE__ */ new Map()
		}), f = this.processSelectionSet({
			result: a || Object.create(null),
			dataId: o,
			selectionSet: l.selectionSet,
			mergeTree: { map: /* @__PURE__ */ new Map() },
			context: d
		});
		if (!n(f)) throw R(12, a);
		return d.incomingById.forEach(function(t, i) {
			var a = t.storeObject, o = t.mergeTree, s = t.fieldNodeSet, c = Te(i);
			if (o && o.map.size) {
				var l = r.applyMerges(o, c, a, d);
				if (n(l)) return;
				a = l;
			}
			if (globalThis.__DEV__ !== !1 && !d.overwrite) {
				var u = Object.create(null);
				s.forEach(function(e) {
					e.selectionSet && (u[e.name.value] = !0);
				});
				var f = function(e) {
					return u[Z(e)] === !0;
				}, p = function(e) {
					var t = o && o.map.get(e);
					return !!(t && t.info && t.info.merge);
				};
				Object.keys(a).forEach(function(e) {
					f(e) && !p(e) && Pr(c, a, e, d.store);
				});
			}
			e.merge(i, a);
		}), e.retain(f.__ref), f;
	}, e.prototype.processSelectionSet = function(e) {
		var t = this, r = e.dataId, i = e.result, a = e.selectionSet, o = e.context, c = e.mergeTree, l = this.cache.policies, u = Object.create(null), d = r && l.rootTypenamesById[r] || s(i, a, o.fragmentMap) || r && o.store.get(r, "__typename");
		typeof d == "string" && (u.__typename = d);
		var f = function() {
			var e = wr(arguments, u, o.variables);
			if (n(e.from)) {
				var t = o.incomingById.get(e.from.__ref);
				if (t) {
					var r = l.readField(O(O({}, e), { from: t.storeObject }), o);
					if (r !== void 0) return r;
				}
			}
			return l.readField(e, o);
		}, p = /* @__PURE__ */ new Set();
		this.flattenFields(a, i, o, d).forEach(function(e, r) {
			var a, o = i[y(r)];
			if (p.add(r), o !== void 0) {
				var s = l.getStoreFieldName({
					typename: d,
					fieldName: r.name.value,
					field: r,
					variables: e.variables
				}), m = kr(c, s), h = t.processFieldValue(o, r, r.selectionSet ? Er(e, !1, !1) : e, m), g = void 0;
				r.selectionSet && (n(h) || In(h)) && (g = f("__typename", h));
				var _ = l.getMergeFunction(d, r.name.value, g);
				_ ? m.info = {
					field: r,
					typename: d,
					merge: _
				} : Mr(c, s), u = e.merge(u, (a = {}, a[s] = h, a));
			} else globalThis.__DEV__ !== !1 && !e.clientOnly && !e.deferred && !ft.added(r) && !l.getReadFunction(d, r.name.value) && globalThis.__DEV__ !== !1 && F.error(13, y(r), i);
		});
		try {
			var m = l.identify(i, {
				typename: d,
				selectionSet: a,
				fragmentMap: o.fragmentMap,
				storeObject: u,
				readField: f
			}), h = m[0], g = m[1];
			r = r || h, g && (u = o.merge(u, g));
		} catch (e) {
			if (!r) throw e;
		}
		if (typeof r == "string") {
			var _ = Te(r), v = o.written[r] || (o.written[r] = []);
			if (v.indexOf(a) >= 0 || (v.push(a), this.reader && this.reader.isFresh(i, _, a, o))) return _;
			var b = o.incomingById.get(r);
			return b ? (b.storeObject = o.merge(b.storeObject, u), b.mergeTree = Ar(b.mergeTree, c), p.forEach(function(e) {
				return b.fieldNodeSet.add(e);
			})) : o.incomingById.set(r, {
				storeObject: u,
				mergeTree: jr(c) ? void 0 : c,
				fieldNodeSet: p
			}), _;
		}
		return u;
	}, e.prototype.processFieldValue = function(e, t, n, r) {
		var i = this;
		return !t.selectionSet || e === null ? globalThis.__DEV__ === !1 ? e : Oe(e) : D(e) ? e.map(function(e, a) {
			var o = i.processFieldValue(e, t, n, kr(r, a));
			return Mr(r, a), o;
		}) : this.processSelectionSet({
			result: e,
			selectionSet: t.selectionSet,
			context: n,
			mergeTree: r
		});
	}, e.prototype.flattenFields = function(e, t, n, r) {
		r === void 0 && (r = s(t, e, n.fragmentMap));
		var i = /* @__PURE__ */ new Map(), a = this.cache.policies, o = new le(!1);
		return (function e(s, c) {
			var l = o.lookup(s, c.clientOnly, c.deferred);
			l.visited || (l.visited = !0, s.selections.forEach(function(o) {
				if (xe(o, n.variables)) {
					var s = c.clientOnly, l = c.deferred;
					if (!(s && l) && k(o.directives) && o.directives.forEach(function(e) {
						var t = e.name.value;
						if (t === "client" && (s = !0), t === "defer") {
							var r = Be(e, n.variables);
							(!r || r.if !== !1) && (l = !0);
						}
					}), S(o)) {
						var u = i.get(o);
						u && (s = s && u.clientOnly, l = l && u.deferred), i.set(o, Er(n, s, l));
					} else {
						var d = ie(o, n.lookupFragment);
						if (!d && o.kind === M.FRAGMENT_SPREAD) throw R(14, o.name.value);
						d && a.fragmentMatches(d, r, t, n.variables) && e(d.selectionSet, Er(n, s, l));
					}
				}
			}));
		})(e, n), i;
	}, e.prototype.applyMerges = function(e, t, r, i, a) {
		var o, s = this;
		if (e.map.size && !n(r)) {
			var c = !D(r) && (n(t) || In(t)) ? t : void 0, l = r;
			c && !a && (a = [n(c) ? c.__ref : c]);
			var u, d = function(e, t) {
				return D(e) ? typeof t == "number" ? e[t] : void 0 : i.store.getFieldValue(e, String(t));
			};
			e.map.forEach(function(e, t) {
				var n = d(c, t), r = d(l, t);
				if (r !== void 0) {
					a && a.push(t);
					var o = s.applyMerges(e, n, r, i, a);
					o !== r && (u = u || /* @__PURE__ */ new Map(), u.set(t, o)), a && F(a.pop() === t);
				}
			}), u && (r = D(l) ? l.slice(0) : O({}, l), u.forEach(function(e, t) {
				r[t] = e;
			}));
		}
		return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, i, a && (o = i.store).getStorage.apply(o, a)) : r;
	}, e;
}(), Or = [];
function kr(e, t) {
	var n = e.map;
	return n.has(t) || n.set(t, Or.pop() || { map: /* @__PURE__ */ new Map() }), n.get(t);
}
function Ar(e, t) {
	if (e === t || !t || jr(t)) return e;
	if (!e || jr(e)) return t;
	var n = e.info && t.info ? O(O({}, e.info), t.info) : e.info || t.info, r = e.map.size && t.map.size, i = {
		info: n,
		map: r ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map
	};
	if (r) {
		var a = new Set(t.map.keys());
		e.map.forEach(function(e, n) {
			i.map.set(n, Ar(e, t.map.get(n))), a.delete(n);
		}), a.forEach(function(n) {
			i.map.set(n, Ar(t.map.get(n), e.map.get(n)));
		});
	}
	return i;
}
function jr(e) {
	return !e || !(e.info || e.map.size);
}
function Mr(e, t) {
	var n = e.map, r = n.get(t);
	r && jr(r) && (Or.push(r), n.delete(t));
}
var Nr = /* @__PURE__ */ new Set();
function Pr(e, t, r, i) {
	var a = function(e) {
		var t = i.getFieldValue(e, r);
		return typeof t == "object" && t;
	}, o = a(e);
	if (o) {
		var s = a(t);
		if (s && !n(o) && !w(o, s) && !Object.keys(o).every(function(e) {
			return i.getFieldValue(s, e) !== void 0;
		})) {
			var c = i.getFieldValue(e, "__typename") || i.getFieldValue(t, "__typename"), l = Z(r), u = `${c}.${l}`;
			if (!Nr.has(u)) {
				Nr.add(u);
				var d = [];
				!D(o) && !D(s) && [o, s].forEach(function(e) {
					var t = i.getFieldValue(e, "__typename");
					typeof t == "string" && !d.includes(t) && d.push(t);
				}), globalThis.__DEV__ !== !1 && F.warn(15, l, c, d.length ? "either ensure all objects of type " + d.join(" and ") + " have an ID or a custom merge function, or " : "", u, O({}, o), O({}, s));
			}
		}
	}
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
var Fr = function(e) {
	N(t, e);
	function t(t) {
		t === void 0 && (t = {});
		var n = e.call(this) || this;
		return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new it(ft), n.assumeImmutableResults = !0, n.makeVar = or, n.txCount = 0, globalThis.__DEV__ !== !1 && (L(t, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`."), L(t, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.")), n.config = jn(t), n.addTypename = !!n.config.addTypename, n.policies = new Sr({
			cache: n,
			dataIdFromObject: n.config.dataIdFromObject,
			possibleTypes: n.config.possibleTypes,
			typePolicies: n.config.typePolicies
		}), n.init(), n;
	}
	return t.prototype.init = function() {
		var e = this.data = new Hn.Root({
			policies: this.policies,
			resultCaching: this.config.resultCaching
		});
		this.optimisticData = e.stump, this.resetResultCache();
	}, t.prototype.resetResultCache = function(e) {
		var t = this, n = this.storeReader, r = this.config.fragments;
		this.addTypenameTransform.resetCache(), r?.resetCaches(), this.storeWriter = new Dr(this, this.storeReader = new Qn({
			cache: this,
			addTypename: this.addTypename,
			resultCacheMaxSize: this.config.resultCacheMaxSize,
			canonizeResults: Mn(this.config),
			canon: e ? void 0 : n && n.canon,
			fragments: r
		}), r), this.maybeBroadcastWatch = Me(function(e, n) {
			return t.broadcastWatch(e, n);
		}, {
			max: this.config.resultCacheMaxSize || V["inMemoryCache.maybeBroadcastWatch"] || 5e3,
			makeCacheKey: function(e) {
				var n = e.optimistic ? t.optimisticData : t.data;
				if (Jn(n)) {
					var r = e.optimistic, i = e.id, a = e.variables;
					return n.makeCacheKey(e.query, e.callback, C({
						optimistic: r,
						id: i,
						variables: a
					}));
				}
			}
		}), new Set([this.data.group, this.optimisticData.group]).forEach(function(e) {
			return e.resetCaching();
		});
	}, t.prototype.restore = function(e) {
		return this.init(), e && this.data.replace(e), this;
	}, t.prototype.extract = function(e) {
		return e === void 0 && (e = !1), (e ? this.optimisticData : this.data).extract();
	}, t.prototype.read = function(e) {
		globalThis.__DEV__ !== !1 && L(e, "canonizeResults", "cache.read");
		var t = e.returnPartialData, n = t === void 0 ? !1 : t;
		try {
			return this.storeReader.diffQueryAgainstStore(O(O({}, e), {
				store: e.optimistic ? this.optimisticData : this.data,
				config: this.config,
				returnPartialData: n
			})).result || null;
		} catch (e) {
			if (e instanceof Dn) return null;
			throw e;
		}
	}, t.prototype.write = function(e) {
		try {
			return ++this.txCount, this.storeWriter.writeToStore(this.data, e);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, t.prototype.modify = function(e) {
		if (X.call(e, "id") && !e.id) return !1;
		var t = e.optimistic ? this.optimisticData : this.data;
		try {
			return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, t.prototype.diff = function(e) {
		return globalThis.__DEV__ !== !1 && L(e, "canonizeResults", "cache.diff"), this.storeReader.diffQueryAgainstStore(O(O({}, e), {
			store: e.optimistic ? this.optimisticData : this.data,
			rootId: e.id || "ROOT_QUERY",
			config: this.config
		}));
	}, t.prototype.watch = function(e) {
		var t = this;
		return this.watches.size || ar(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e), function() {
			t.watches.delete(e) && !t.watches.size && ir(t), t.maybeBroadcastWatch.forget(e);
		};
	}, t.prototype.gc = function(e) {
		globalThis.__DEV__ !== !1 && L(e || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option."), C.reset(), K.reset();
		var t = this.optimisticData.gc();
		return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t;
	}, t.prototype.retain = function(e, t) {
		return (t ? this.optimisticData : this.data).retain(e);
	}, t.prototype.release = function(e, t) {
		return (t ? this.optimisticData : this.data).release(e);
	}, t.prototype.identify = function(e) {
		if (n(e)) return e.__ref;
		try {
			return this.policies.identify(e)[0];
		} catch (e) {
			globalThis.__DEV__ !== !1 && F.warn(e);
		}
	}, t.prototype.evict = function(e) {
		if (!e.id) {
			if (X.call(e, "id")) return !1;
			e = O(O({}, e), { id: "ROOT_QUERY" });
		}
		try {
			return ++this.txCount, this.optimisticData.evict(e, this.data);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, t.prototype.reset = function(e) {
		var t = this;
		return this.init(), C.reset(), e && e.discardWatches ? (this.watches.forEach(function(e) {
			return t.maybeBroadcastWatch.forget(e);
		}), this.watches.clear(), ir(this)) : this.broadcastWatches(), Promise.resolve();
	}, t.prototype.removeOptimistic = function(e) {
		var t = this.optimisticData.removeLayer(e);
		t !== this.optimisticData && (this.optimisticData = t, this.broadcastWatches());
	}, t.prototype.batch = function(e) {
		var t = this, n = e.update, r = e.optimistic, i = r === void 0 ? !0 : r, a = e.removeOptimistic, o = e.onWatchUpdated, s, c = function(e) {
			var r = t, i = r.data, a = r.optimisticData;
			++t.txCount, e && (t.data = t.optimisticData = e);
			try {
				return s = n(t);
			} finally {
				--t.txCount, t.data = i, t.optimisticData = a;
			}
		}, l = /* @__PURE__ */ new Set();
		return o && !this.txCount && this.broadcastWatches(O(O({}, e), { onWatchUpdated: function(e) {
			return l.add(e), !1;
		} })), typeof i == "string" ? this.optimisticData = this.optimisticData.addLayer(i, c) : i === !1 ? c(this.data) : c(), typeof a == "string" && (this.optimisticData = this.optimisticData.removeLayer(a)), o && l.size ? (this.broadcastWatches(O(O({}, e), { onWatchUpdated: function(e, t) {
			var n = o.call(this, e, t);
			return n !== !1 && l.delete(e), n;
		} })), l.size && l.forEach(function(e) {
			return t.maybeBroadcastWatch.dirty(e);
		})) : this.broadcastWatches(e), s;
	}, t.prototype.performTransaction = function(e, t) {
		return this.batch({
			update: e,
			optimistic: t || t !== null
		});
	}, t.prototype.transformDocument = function(e) {
		return this.addTypenameToDocument(this.addFragmentsToDocument(e));
	}, t.prototype.fragmentMatches = function(e, t) {
		return this.policies.fragmentMatches(e, t);
	}, t.prototype.lookupFragment = function(e) {
		return this.config.fragments?.lookup(e) || null;
	}, t.prototype.broadcastWatches = function(e) {
		var t = this;
		this.txCount || this.watches.forEach(function(n) {
			return t.maybeBroadcastWatch(n, e);
		});
	}, t.prototype.addFragmentsToDocument = function(e) {
		var t = this.config.fragments;
		return t ? t.transform(e) : e;
	}, t.prototype.addTypenameToDocument = function(e) {
		return this.addTypename ? this.addTypenameTransform.transformDocument(e) : e;
	}, t.prototype.broadcastWatch = function(e, t) {
		var n = this, r = e.lastDiff, i = z("canonizeResults", function() {
			return n.diff(e);
		});
		t && (e.optimistic && typeof t.optimistic == "string" && (i.fromOptimisticTransaction = !0), t.onWatchUpdated && t.onWatchUpdated.call(this, e, i, r) === !1) || (!r || !w(r.result, i.result)) && e.callback(e.lastDiff = i, r);
	}, t;
}(En);
globalThis.__DEV__ !== !1 && (Fr.prototype.getMemoryInternals = v);
//#endregion
//#region node_modules/@apollo/client/core/QueryInfo.js
var Ir = new (h ? WeakMap : Map)();
function Lr(e, t) {
	var n = e[t];
	typeof n == "function" && (e[t] = function() {
		return Ir.set(e, (Ir.get(e) + 1) % 0x38d7ea4c68000), n.apply(this, arguments);
	});
}
var Rr = function() {
	function e(e, t) {
		t === void 0 && (t = e.generateQueryId()), this.queryId = t, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
		var n = this.cache = e.cache;
		Ir.has(n) || (Ir.set(n, 0), Lr(n, "evict"), Lr(n, "modify"), Lr(n, "reset"));
	}
	return e.prototype.init = function(e) {
		var t = e.networkStatus || l.loading;
		return this.variables && this.networkStatus !== l.loading && !w(this.variables, e.variables) && (t = l.setVariables), w(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
			document: e.document,
			variables: e.variables,
			networkError: null,
			graphQLErrors: this.graphQLErrors || [],
			networkStatus: t
		}), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this;
	}, e.prototype.resetDiff = function() {
		this.lastDiff = void 0;
	}, e.prototype.getDiff = function() {
		var e = this, t = this.getDiffOptions();
		if (this.lastDiff && w(t, this.lastDiff.options)) return this.lastDiff.diff;
		this.updateWatch(this.variables);
		var n = this.observableQuery;
		if (n && n.options.fetchPolicy === "no-cache") return { complete: !1 };
		var r = z("canonizeResults", function() {
			return e.cache.diff(t);
		});
		return this.updateLastDiff(r, t), r;
	}, e.prototype.updateLastDiff = function(e, t) {
		this.lastDiff = e ? {
			diff: e,
			options: t || this.getDiffOptions()
		} : void 0;
	}, e.prototype.getDiffOptions = function(e) {
		return e === void 0 && (e = this.variables), {
			query: this.document,
			variables: e,
			returnPartialData: !0,
			optimistic: !0,
			canonizeResults: this.observableQuery?.options.canonizeResults
		};
	}, e.prototype.setDiff = function(e) {
		var t = this, n, r = this.lastDiff && this.lastDiff.diff;
		e && !e.complete && z("getLastError", function() {
			return t.observableQuery?.getLastError();
		}) || (this.updateLastDiff(e), w(r && r.result, e && e.result) || (n = this.observableQuery) == null || n.scheduleNotify());
	}, e.prototype.setObservableQuery = function(e) {
		e !== this.observableQuery && (this.observableQuery = e, e && (e.queryInfo = this));
	}, e.prototype.stop = function() {
		var e;
		if (!this.stopped) {
			this.stopped = !0, (e = this.observableQuery) == null || e.resetNotifications(), this.cancel();
			var t = this.observableQuery;
			t && t.stopPolling();
		}
	}, e.prototype.cancel = function() {
		var e;
		(e = this.cancelWatch) == null || e.call(this), this.cancelWatch = void 0;
	}, e.prototype.updateWatch = function(e) {
		var t = this;
		e === void 0 && (e = this.variables);
		var n = this.observableQuery;
		if (!(n && n.options.fetchPolicy === "no-cache")) {
			var r = O(O({}, this.getDiffOptions(e)), {
				watcher: this,
				callback: function(e) {
					return t.setDiff(e);
				}
			});
			(!this.lastWatch || !w(r, this.lastWatch)) && (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = r));
		}
	}, e.prototype.resetLastWrite = function() {
		this.lastWrite = void 0;
	}, e.prototype.shouldWrite = function(e, t) {
		var n = this.lastWrite;
		return !(n && n.dmCount === Ir.get(this.cache) && w(t, n.variables) && w(e.data, n.result.data));
	}, e.prototype.markResult = function(e, t, n, r) {
		var i = this, a, o = new q(), s = k(e.errors) ? e.errors.slice(0) : [];
		if ((a = this.observableQuery) == null || a.resetNotifications(), "incremental" in e && k(e.incremental)) e.data = Et(this.getDiff().result, e);
		else if ("hasNext" in e && e.hasNext) {
			var c = this.getDiff();
			e.data = o.merge(c.result, e.data);
		}
		this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({
			result: e.data,
			complete: !0
		}, this.getDiffOptions(n.variables)) : r !== 0 && (zr(e, n.errorPolicy) ? this.cache.performTransaction(function(a) {
			if (i.shouldWrite(e, n.variables)) a.writeQuery({
				query: t,
				data: e.data,
				variables: n.variables,
				overwrite: r === 1
			}), i.lastWrite = {
				result: e,
				variables: n.variables,
				dmCount: Ir.get(i.cache)
			};
			else if (i.lastDiff && i.lastDiff.diff.complete) {
				e.data = i.lastDiff.diff.result;
				return;
			}
			var o = i.getDiffOptions(n.variables), s = z("canonizeResults", function() {
				return a.diff(o);
			});
			!i.stopped && w(i.variables, n.variables) && i.updateWatch(n.variables), i.updateLastDiff(s, o), s.complete && (e.data = s.result);
		}) : this.lastWrite = void 0);
	}, e.prototype.markReady = function() {
		return this.networkError = null, this.networkStatus = l.ready;
	}, e.prototype.markError = function(e) {
		var t;
		return this.networkStatus = l.error, this.lastWrite = void 0, (t = this.observableQuery) == null || t.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
	}, e;
}();
function zr(e, t) {
	t === void 0 && (t = "none");
	var n = t === "ignore" || t === "all", r = !Dt(e);
	return !r && n && e.data && (r = !0), r;
}
//#endregion
//#region node_modules/@apollo/client/core/QueryManager.js
var Br = Object.prototype.hasOwnProperty, Vr = Object.create(null), Hr = function() {
	function t(e) {
		var t = this;
		this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new r(V["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new le(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
		var n = new it(function(e) {
			return t.cache.transformDocument(e);
		}, { cache: !1 });
		this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults, this.dataMasking = e.dataMasking;
		var i = e.documentTransform;
		this.documentTransform = i ? n.concat(i).concat(n) : n, this.defaultContext = e.defaultContext || Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = Object.create(null));
	}
	return t.prototype.stop = function() {
		var e = this;
		this.queries.forEach(function(t, n) {
			e.stopQueryNoBroadcast(n);
		}), this.cancelPendingFetches(R(35));
	}, t.prototype.cancelPendingFetches = function(e) {
		this.fetchCancelFns.forEach(function(t) {
			return t(e);
		}), this.fetchCancelFns.clear();
	}, t.prototype.mutate = function(e) {
		return I(this, arguments, void 0, function(e) {
			var t, n, r, i, a, o = e.mutation, s = e.variables, c = e.optimisticResponse, l = e.updateQueries, u = e.refetchQueries, d = u === void 0 ? [] : u, f = e.awaitRefetchQueries, p = f === void 0 ? !1 : f, h = e.update, g = e.onQueryUpdated, _ = e.fetchPolicy, v = _ === void 0 ? this.defaultOptions.mutate?.fetchPolicy || "network-only" : _, y = e.errorPolicy, b = y === void 0 ? this.defaultOptions.mutate?.errorPolicy || "none" : y, x = e.keepRootFields, S = e.context;
			return j(this, function(e) {
				switch (e.label) {
					case 0: return F(o, 36), F(v === "network-only" || v === "no-cache", 37), t = this.generateMutationId(), o = this.cache.transformForLink(this.transform(o)), n = this.getDocumentInfo(o).hasClientExports, s = this.getVariables(o, s), n ? [4, this.localState.addExportedVariables(o, s, S)] : [3, 2];
					case 1: s = e.sent(), e.label = 2;
					case 2: return r = this.mutationStore && (this.mutationStore[t] = {
						mutation: o,
						variables: s,
						loading: !0,
						error: null
					}), i = c && this.markMutationOptimistic(c, {
						mutationId: t,
						document: o,
						variables: s,
						fetchPolicy: v,
						errorPolicy: b,
						context: S,
						updateQueries: l,
						update: h,
						keepRootFields: x
					}), this.broadcastQueries(), a = this, [2, new Promise(function(e, n) {
						return bt(a.getObservableFromLink(o, O(O({}, S), { optimisticResponse: i ? c : void 0 }), s, {}, !1), function(e) {
							if (Dt(e) && b === "none") throw new m({ graphQLErrors: Ot(e) });
							r && (r.loading = !1, r.error = null);
							var n = O({}, e);
							return typeof d == "function" && (d = d(n)), b === "ignore" && Dt(n) && delete n.errors, a.markMutationResult({
								mutationId: t,
								result: n,
								document: o,
								variables: s,
								fetchPolicy: v,
								errorPolicy: b,
								context: S,
								update: h,
								updateQueries: l,
								awaitRefetchQueries: p,
								refetchQueries: d,
								removeOptimistic: i ? t : void 0,
								onQueryUpdated: g,
								keepRootFields: x
							});
						}).subscribe({
							next: function(n) {
								a.broadcastQueries(), (!("hasNext" in n) || n.hasNext === !1) && e(O(O({}, n), { data: a.maskOperation({
									document: o,
									data: n.data,
									fetchPolicy: v,
									id: t
								}) }));
							},
							error: function(e) {
								r && (r.loading = !1, r.error = e), i && a.cache.removeOptimistic(t), a.broadcastQueries(), n(e instanceof m ? e : new m({ networkError: e }));
							}
						});
					})];
				}
			});
		});
	}, t.prototype.markMutationResult = function(e, t) {
		var n = this;
		t === void 0 && (t = this.cache);
		var r = e.result, i = [], a = e.fetchPolicy === "no-cache";
		if (!a && zr(r, e.errorPolicy)) {
			if (St(r) || i.push({
				result: r.data,
				dataId: "ROOT_MUTATION",
				query: e.document,
				variables: e.variables
			}), St(r) && k(r.incremental)) {
				var o = t.diff({
					id: "ROOT_MUTATION",
					query: this.getDocumentInfo(e.document).asQuery,
					variables: e.variables,
					optimistic: !1,
					returnPartialData: !0
				}), s = void 0;
				o.result && (s = Et(o.result, r)), s !== void 0 && (r.data = s, i.push({
					result: s,
					dataId: "ROOT_MUTATION",
					query: e.document,
					variables: e.variables
				}));
			}
			var c = e.updateQueries;
			c && this.queries.forEach(function(e, a) {
				var o = e.observableQuery, s = o && o.queryName;
				if (!(!s || !Br.call(c, s))) {
					var l = c[s], u = n.queries.get(a), d = u.document, f = u.variables, p = t.diff({
						query: d,
						variables: f,
						returnPartialData: !0,
						optimistic: !1
					}), m = p.result;
					if (p.complete && m) {
						var h = l(m, {
							mutationResult: r,
							queryName: d && te(d) || void 0,
							queryVariables: f
						});
						h && i.push({
							result: h,
							dataId: "ROOT_QUERY",
							query: d,
							variables: f
						});
					}
				}
			});
		}
		if (i.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
			var l = [];
			if (this.refetchQueries({
				updateCache: function(t) {
					a || i.forEach(function(e) {
						return t.write(e);
					});
					var o = e.update, s = !wt(r) || St(r) && !r.hasNext;
					if (o) {
						if (!a) {
							var c = t.diff({
								id: "ROOT_MUTATION",
								query: n.getDocumentInfo(e.document).asQuery,
								variables: e.variables,
								optimistic: !1,
								returnPartialData: !0
							});
							c.complete && (r = O(O({}, r), { data: c.result }), "incremental" in r && delete r.incremental, "hasNext" in r && delete r.hasNext);
						}
						s && o(t, r, {
							context: e.context,
							variables: e.variables
						});
					}
					!a && !e.keepRootFields && s && t.modify({
						id: "ROOT_MUTATION",
						fields: function(e, t) {
							var n = t.fieldName, r = t.DELETE;
							return n === "__typename" ? e : r;
						}
					});
				},
				include: e.refetchQueries,
				optimistic: !1,
				removeOptimistic: e.removeOptimistic,
				onQueryUpdated: e.onQueryUpdated || null
			}).forEach(function(e) {
				return l.push(e);
			}), e.awaitRefetchQueries || e.onQueryUpdated) return Promise.all(l).then(function() {
				return r;
			});
		}
		return Promise.resolve(r);
	}, t.prototype.markMutationOptimistic = function(e, t) {
		var n = this, r = typeof e == "function" ? e(t.variables, { IGNORE: Vr }) : e;
		return r === Vr ? !1 : (this.cache.recordOptimisticTransaction(function(e) {
			try {
				n.markMutationResult(O(O({}, t), { result: { data: r } }), e);
			} catch (e) {
				globalThis.__DEV__ !== !1 && F.error(e);
			}
		}, t.mutationId), !0);
	}, t.prototype.fetchQuery = function(e, t, n) {
		return this.fetchConcastWithInfo(this.getOrCreateQuery(e), t, n).concast.promise;
	}, t.prototype.getQueryStore = function() {
		var e = Object.create(null);
		return this.queries.forEach(function(t, n) {
			e[n] = {
				variables: t.variables,
				networkStatus: t.networkStatus,
				networkError: t.networkError,
				graphQLErrors: t.graphQLErrors
			};
		}), e;
	}, t.prototype.resetErrors = function(e) {
		var t = this.queries.get(e);
		t && (t.networkError = void 0, t.graphQLErrors = []);
	}, t.prototype.transform = function(e) {
		return this.documentTransform.transformDocument(e);
	}, t.prototype.getDocumentInfo = function(t) {
		var n = this.transformCache;
		if (!n.has(t)) {
			var r = {
				hasClientExports: T(t),
				hasForcedResolvers: this.localState.shouldForceResolvers(t),
				hasNonreactiveDirective: e(["nonreactive"], t),
				nonReactiveQuery: ht(t),
				clientQuery: this.localState.clientQuery(t),
				serverQuery: dt([
					{
						name: "client",
						remove: !0
					},
					{ name: "connection" },
					{ name: "nonreactive" },
					{ name: "unmask" }
				], t),
				defaultVars: he(Ve(t)),
				asQuery: O(O({}, t), { definitions: t.definitions.map(function(e) {
					return e.kind === "OperationDefinition" && e.operation !== "query" ? O(O({}, e), { operation: "query" }) : e;
				}) })
			};
			n.set(t, r);
		}
		return n.get(t);
	}, t.prototype.getVariables = function(e, t) {
		return O(O({}, this.getDocumentInfo(e).defaultVars), t);
	}, t.prototype.watchQuery = function(e) {
		var t = this.transform(e.query);
		e = O(O({}, e), { variables: this.getVariables(t, e.variables) }), e.notifyOnNetworkStatusChange === void 0 && (e.notifyOnNetworkStatusChange = !1);
		var n = new Rr(this), r = new re({
			queryManager: this,
			queryInfo: n,
			options: e
		});
		return r.lastQuery = t, re.inactiveOnCreation.getValue() || this.queries.set(r.queryId, n), n.init({
			document: t,
			observableQuery: r,
			variables: r.variables
		}), r;
	}, t.prototype.query = function(e, t) {
		var n = this;
		t === void 0 && (t = this.generateQueryId()), F(e.query, 38), F(e.query.kind === "Document", 39), F(!e.returnPartialData, 40), F(!e.pollInterval, 41);
		var r = this.transform(e.query);
		return this.fetchQuery(t, O(O({}, e), { query: r })).then(function(i) {
			return i && O(O({}, i), { data: n.maskOperation({
				document: r,
				data: i.data,
				fetchPolicy: e.fetchPolicy,
				id: t
			}) });
		}).finally(function() {
			return n.stopQuery(t);
		});
	}, t.prototype.generateQueryId = function() {
		return String(this.queryIdCounter++);
	}, t.prototype.generateRequestId = function() {
		return this.requestIdCounter++;
	}, t.prototype.generateMutationId = function() {
		return String(this.mutationIdCounter++);
	}, t.prototype.stopQueryInStore = function(e) {
		this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
	}, t.prototype.stopQueryInStoreNoBroadcast = function(e) {
		var t = this.queries.get(e);
		t && t.stop();
	}, t.prototype.clearStore = function(e) {
		return e === void 0 && (e = { discardWatches: !0 }), this.cancelPendingFetches(R(42)), this.queries.forEach(function(e) {
			e.observableQuery ? e.networkStatus = l.loading : e.stop();
		}), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e);
	}, t.prototype.getObservableQueries = function(e) {
		var t = this;
		e === void 0 && (e = "active");
		var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
		return Array.isArray(e) && e.forEach(function(e) {
			if (typeof e == "string") r.set(e, e), i.set(e, !1);
			else if (o(e)) {
				var n = K(t.transform(e));
				r.set(n, te(e)), i.set(n, !1);
			} else _(e) && e.query && a.add(e);
		}), this.queries.forEach(function(t, r) {
			var a = t.observableQuery, o = t.document;
			if (a) {
				if (e === "all") {
					n.set(r, a);
					return;
				}
				var s = a.queryName;
				if (a.options.fetchPolicy === "standby" || e === "active" && !a.hasObservers()) return;
				(e === "active" || s && i.has(s) || o && i.has(K(o))) && (n.set(r, a), s && i.set(s, !0), o && i.set(K(o), !0));
			}
		}), a.size && a.forEach(function(e) {
			var r = De("legacyOneTimeQuery"), i = t.getOrCreateQuery(r).init({
				document: e.query,
				variables: e.variables
			}), a = new re({
				queryManager: t,
				queryInfo: i,
				options: O(O({}, e), { fetchPolicy: "network-only" })
			});
			F(a.queryId === r), i.setObservableQuery(a), n.set(r, a);
		}), globalThis.__DEV__ !== !1 && i.size && i.forEach(function(e, t) {
			if (!e) {
				var n = r.get(t);
				n ? globalThis.__DEV__ !== !1 && F.warn(43, n) : globalThis.__DEV__ !== !1 && F.warn(44);
			}
		}), n;
	}, t.prototype.reFetchObservableQueries = function(e) {
		var t = this;
		e === void 0 && (e = !1);
		var n = [];
		return this.getObservableQueries(e ? "all" : "active").forEach(function(r, i) {
			var a = r.options.fetchPolicy;
			z("resetLastResults", function() {
				return r.resetLastResults();
			}), (e || a !== "standby" && a !== "cache-only") && n.push(r.refetch()), (t.queries.get(i) || r.queryInfo).setDiff(null);
		}), this.broadcastQueries(), Promise.all(n);
	}, t.prototype.startGraphQLSubscription = function(e) {
		var t = this, n = e.query, r = e.variables, i = e.fetchPolicy, a = e.errorPolicy, o = a === void 0 ? "none" : a, s = e.context, c = s === void 0 ? {} : s, l = e.extensions, u = l === void 0 ? {} : l;
		n = this.transform(n), r = this.getVariables(n, r);
		var d = function(e) {
			return t.getObservableFromLink(n, c, e, u).map(function(r) {
				i !== "no-cache" && (zr(r, o) && t.cache.write({
					query: n,
					result: r.data,
					dataId: "ROOT_SUBSCRIPTION",
					variables: e
				}), t.broadcastQueries());
				var a = Dt(r), s = ce(r);
				if (a || s) {
					var c = {};
					if (a && (c.graphQLErrors = r.errors), s && (c.protocolErrors = r.extensions[ue]), o === "none" || s) throw new m(c);
				}
				return o === "ignore" && delete r.errors, r;
			});
		};
		if (this.getDocumentInfo(n).hasClientExports) {
			var f = this.localState.addExportedVariables(n, r, c).then(d);
			return new B(function(e) {
				var t = null;
				return f.then(function(n) {
					return t = n.subscribe(e);
				}, e.error), function() {
					return t && t.unsubscribe();
				};
			});
		}
		return d(r);
	}, t.prototype.stopQuery = function(e) {
		this.stopQueryNoBroadcast(e), this.broadcastQueries();
	}, t.prototype.stopQueryNoBroadcast = function(e) {
		this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
	}, t.prototype.removeQuery = function(e) {
		var t;
		this.fetchCancelFns.delete(e), this.queries.has(e) && ((t = this.queries.get(e)) == null || t.stop(), this.queries.delete(e));
	}, t.prototype.broadcastQueries = function() {
		this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
			return e.observableQuery?.notify();
		});
	}, t.prototype.getLocalState = function() {
		return this.localState;
	}, t.prototype.getObservableFromLink = function(e, t, n, r, i) {
		var a = this;
		i === void 0 && (i = t?.queryDeduplication ?? this.queryDeduplication);
		var o, s = this.getDocumentInfo(e), c = s.serverQuery, l = s.clientQuery;
		if (c) {
			var u = this, d = u.inFlightLinkObservables, f = u.link, p = {
				query: c,
				variables: n,
				operationName: te(c) || void 0,
				context: this.prepareContext(O(O({}, t), { forceFetch: !i })),
				extensions: r
			};
			if (t = p.context, i) {
				var m = K(c), h = C(n), g = d.lookup(m, h);
				if (o = g.observable, !o) {
					var _ = new J([zt(f, p)]);
					o = g.observable = _, _.beforeNext(function e(t, n) {
						t === "next" && "hasNext" in n && n.hasNext ? _.beforeNext(e) : d.remove(m, h);
					});
				}
			} else o = new J([zt(f, p)]);
		} else o = new J([B.of({ data: {} })]), t = this.prepareContext(t);
		return l && (o = bt(o, function(e) {
			return a.localState.runResolvers({
				document: l,
				remoteResult: e,
				context: t,
				variables: n
			});
		})), o;
	}, t.prototype.getResultsFromLink = function(e, t, n) {
		var r = e.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(n.query);
		return bt(this.getObservableFromLink(i, n.context, n.variables), function(a) {
			var o = Ot(a), s = o.length > 0, c = n.errorPolicy;
			if (r >= e.lastRequestId) {
				if (s && c === "none") throw e.markError(new m({ graphQLErrors: o }));
				e.markResult(a, i, n, t), e.markReady();
			}
			var u = {
				data: a.data,
				loading: !1,
				networkStatus: l.ready
			};
			return s && c === "none" && (u.data = void 0), s && c !== "ignore" && (u.errors = o, u.networkStatus = l.error), u;
		}, function(t) {
			var n = fe(t) ? t : new m({ networkError: t });
			throw r >= e.lastRequestId && e.markError(n), n;
		});
	}, t.prototype.fetchConcastWithInfo = function(e, t, n, r) {
		var i = this;
		n === void 0 && (n = l.loading), r === void 0 && (r = t.query);
		var a = this.getVariables(r, t.variables), o = this.defaultOptions.watchQuery, s = t.fetchPolicy, c = s === void 0 ? o && o.fetchPolicy || "cache-first" : s, u = t.errorPolicy, d = u === void 0 ? o && o.errorPolicy || "none" : u, f = t.returnPartialData, p = f === void 0 ? !1 : f, m = t.notifyOnNetworkStatusChange, h = m === void 0 ? !1 : m, g = t.context, _ = Object.assign({}, t, {
			query: r,
			variables: a,
			fetchPolicy: c,
			errorPolicy: d,
			returnPartialData: p,
			notifyOnNetworkStatusChange: h,
			context: g === void 0 ? {} : g
		}), v = function(r) {
			_.variables = r;
			var a = i.fetchQueryByPolicy(e, _, n);
			return _.fetchPolicy !== "standby" && a.sources.length > 0 && e.observableQuery && e.observableQuery.applyNextFetchPolicy("after-fetch", t), a;
		}, y = function() {
			return i.fetchCancelFns.delete(e.queryId);
		};
		this.fetchCancelFns.set(e.queryId, function(e) {
			y(), setTimeout(function() {
				return b.cancel(e);
			});
		});
		var b, x;
		if (this.getDocumentInfo(_.query).hasClientExports) b = new J(this.localState.addExportedVariables(_.query, _.variables, _.context).then(v).then(function(e) {
			return e.sources;
		})), x = !0;
		else {
			var S = v(_.variables);
			x = S.fromLink, b = new J(S.sources);
		}
		return b.promise.then(y, y), {
			concast: b,
			fromLink: x
		};
	}, t.prototype.refetchQueries = function(e) {
		var t = this, n = e.updateCache, r = e.include, i = e.optimistic, a = i === void 0 ? !1 : i, o = e.removeOptimistic, s = o === void 0 ? a ? De("refetchQueries") : void 0 : o, c = e.onQueryUpdated, l = /* @__PURE__ */ new Map();
		r && this.getObservableQueries(r).forEach(function(e, n) {
			l.set(n, {
				oq: e,
				lastDiff: (t.queries.get(n) || e.queryInfo).getDiff()
			});
		});
		var u = /* @__PURE__ */ new Map();
		return n && this.cache.batch({
			update: n,
			optimistic: a && s || !1,
			removeOptimistic: s,
			onWatchUpdated: function(e, t, n) {
				var r = e.watcher instanceof Rr && e.watcher.observableQuery;
				if (r) {
					if (c) {
						l.delete(r.queryId);
						var i = c(r, t, n);
						return i === !0 && (i = r.refetch()), i !== !1 && u.set(r, i), i;
					}
					c !== null && l.set(r.queryId, {
						oq: r,
						lastDiff: n,
						diff: t
					});
				}
			}
		}), l.size && l.forEach(function(e, n) {
			var r = e.oq, i = e.lastDiff, a = e.diff, o;
			c && (a || (a = z("canonizeResults", function() {
				return t.cache.diff(r.queryInfo.getDiffOptions());
			})), o = c(r, a, i)), (!c || o === !0) && (o = r.refetch()), o !== !1 && u.set(r, o), n.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(n);
		}), s && this.cache.removeOptimistic(s), u;
	}, t.prototype.maskOperation = function(e) {
		var t = e.document, n = e.data;
		if (globalThis.__DEV__ !== !1) {
			var r = e.fetchPolicy, i = e.id, a = Ve(t)?.operation, o = (a?.[0] ?? "o") + i;
			this.dataMasking && r === "no-cache" && !u(t) && !this.noCacheWarningsByQueryId.has(o) && (this.noCacheWarningsByQueryId.add(o), globalThis.__DEV__ !== !1 && F.warn(45, te(t) ?? `Unnamed ${a ?? "operation"}`));
		}
		return this.dataMasking ? Tn(n, t, this.cache) : n;
	}, t.prototype.maskFragment = function(e) {
		var t = e.data, n = e.fragment, r = e.fragmentName;
		return this.dataMasking ? wn(t, n, this.cache, r) : t;
	}, t.prototype.fetchQueryByPolicy = function(e, t, n) {
		var r = this, i = t.query, a = t.variables, o = t.fetchPolicy, s = t.refetchWritePolicy, c = t.errorPolicy, u = t.returnPartialData, d = t.context, f = t.notifyOnNetworkStatusChange, p = e.networkStatus;
		e.init({
			document: i,
			variables: a,
			networkStatus: n
		});
		var m = function() {
			return e.getDiff();
		}, h = function(t, n) {
			n === void 0 && (n = e.networkStatus || l.loading);
			var o = t.result;
			globalThis.__DEV__ !== !1 && !u && !w(o, {}) && oe(t.missing);
			var s = function(e) {
				return B.of(O({
					data: e,
					loading: g(n),
					networkStatus: n
				}, t.complete ? null : { partial: !0 }));
			};
			return o && r.getDocumentInfo(i).hasForcedResolvers ? r.localState.runResolvers({
				document: i,
				remoteResult: { data: o },
				context: d,
				variables: a,
				onlyRunForcedResolvers: !0
			}).then(function(e) {
				return s(e.data || void 0);
			}) : c === "none" && n === l.refetch && Array.isArray(t.missing) ? s(void 0) : s(o);
		}, _ = o === "no-cache" ? 0 : n === l.refetch && s !== "merge" ? 1 : 2, v = function() {
			return r.getResultsFromLink(e, _, {
				query: i,
				variables: a,
				context: d,
				fetchPolicy: o,
				errorPolicy: c
			});
		}, y = f && typeof p == "number" && p !== n && g(n);
		switch (o) {
			default:
			case "cache-first":
				var b = m();
				return b.complete ? {
					fromLink: !1,
					sources: [h(b, e.markReady())]
				} : u || y ? {
					fromLink: !0,
					sources: [h(b), v()]
				} : {
					fromLink: !0,
					sources: [v()]
				};
			case "cache-and-network":
				var b = m();
				return b.complete || u || y ? {
					fromLink: !0,
					sources: [h(b), v()]
				} : {
					fromLink: !0,
					sources: [v()]
				};
			case "cache-only": return {
				fromLink: !1,
				sources: [h(m(), e.markReady())]
			};
			case "network-only": return y ? {
				fromLink: !0,
				sources: [h(m()), v()]
			} : {
				fromLink: !0,
				sources: [v()]
			};
			case "no-cache": return y ? {
				fromLink: !0,
				sources: [h(e.getDiff()), v()]
			} : {
				fromLink: !0,
				sources: [v()]
			};
			case "standby": return {
				fromLink: !1,
				sources: []
			};
		}
	}, t.prototype.getOrCreateQuery = function(e) {
		return e && !this.queries.has(e) && this.queries.set(e, new Rr(this, e)), this.queries.get(e);
	}, t.prototype.prepareContext = function(e) {
		e === void 0 && (e = {});
		var t = this.localState.prepareContext(e);
		return O(O(O({}, this.defaultContext), t), { clientAwareness: this.clientAwareness });
	}, t;
}(), Ur = function() {
	function t(e) {
		var t = e.cache, n = e.client, r = e.resolvers, i = e.fragmentMatcher;
		this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = t, n && (this.client = n), r && this.addResolvers(r), i && this.setFragmentMatcher(i);
	}
	return t.prototype.addResolvers = function(e) {
		var t = this;
		this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(e) {
			t.resolvers = _t(t.resolvers, e);
		}) : this.resolvers = _t(this.resolvers, e);
	}, t.prototype.setResolvers = function(e) {
		this.resolvers = {}, this.addResolvers(e);
	}, t.prototype.getResolvers = function() {
		return this.resolvers || {};
	}, t.prototype.runResolvers = function(e) {
		return I(this, arguments, void 0, function(e) {
			var t = e.document, n = e.remoteResult, r = e.context, i = e.variables, a = e.onlyRunForcedResolvers, o = a === void 0 ? !1 : a;
			return j(this, function(e) {
				return t ? [2, this.resolveDocument(t, n.data, r, i, this.fragmentMatcher, o).then(function(e) {
					return O(O({}, n), { data: e.result });
				})] : [2, n];
			});
		});
	}, t.prototype.setFragmentMatcher = function(e) {
		this.fragmentMatcher = e;
	}, t.prototype.getFragmentMatcher = function() {
		return this.fragmentMatcher;
	}, t.prototype.clientQuery = function(t) {
		return e(["client"], t) && this.resolvers ? t : null;
	}, t.prototype.serverQuery = function(e) {
		return mt(e);
	}, t.prototype.prepareContext = function(e) {
		var t = this.cache;
		return O(O({}, e), {
			cache: t,
			getCacheKey: function(e) {
				return t.identify(e);
			}
		});
	}, t.prototype.addExportedVariables = function(e) {
		return I(this, arguments, void 0, function(e, t, n) {
			return t === void 0 && (t = {}), n === void 0 && (n = {}), j(this, function(r) {
				return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(n), t).then(function(e) {
					return O(O({}, t), e.exportedVariables);
				})] : [2, O({}, t)];
			});
		});
	}, t.prototype.shouldForceResolvers = function(e) {
		var t = !1;
		return P(e, { Directive: { enter: function(e) {
			if (e.name.value === "client" && e.arguments && (t = e.arguments.some(function(e) {
				return e.name.value === "always" && e.value.kind === "BooleanValue" && e.value.value === !0;
			}), t)) return Le;
		} } }), t;
	}, t.prototype.buildRootValueFromCache = function(e, t) {
		return this.cache.diff({
			query: pt(e),
			variables: t,
			returnPartialData: !0,
			optimistic: !1
		}).result;
	}, t.prototype.resolveDocument = function(e, t) {
		return I(this, arguments, void 0, function(e, t, n, r, i, a) {
			var o, s, c, l, u, d, p, m, h, g, _;
			return n === void 0 && (n = {}), r === void 0 && (r = {}), i === void 0 && (i = function() {
				return !0;
			}), a === void 0 && (a = !1), j(this, function(v) {
				return o = _e(e), s = Ue(e), c = f(s), l = this.collectSelectionsToResolve(o, c), u = o.operation, d = u ? u.charAt(0).toUpperCase() + u.slice(1) : "Query", p = this, m = p.cache, h = p.client, g = {
					fragmentMap: c,
					context: O(O({}, n), {
						cache: m,
						client: h
					}),
					variables: r,
					fragmentMatcher: i,
					defaultOperationType: d,
					exportedVariables: {},
					selectionsToResolve: l,
					onlyRunForcedResolvers: a
				}, _ = !1, [2, this.resolveSelectionSet(o.selectionSet, _, t, g).then(function(e) {
					return {
						result: e,
						exportedVariables: g.exportedVariables
					};
				})];
			});
		});
	}, t.prototype.resolveSelectionSet = function(e, t, n, r) {
		return I(this, void 0, void 0, function() {
			var i, a, o, s, c, l = this;
			return j(this, function(u) {
				return i = r.fragmentMap, a = r.context, o = r.variables, s = [n], c = function(e) {
					return I(l, void 0, void 0, function() {
						var c, l;
						return j(this, function(u) {
							return !t && !r.selectionsToResolve.has(e) || !xe(e, o) ? [2] : S(e) ? [2, this.resolveField(e, t, n, r).then(function(t) {
								var n;
								t !== void 0 && s.push((n = {}, n[y(e)] = t, n));
							})] : (Ee(e) ? c = e : (c = i[e.name.value], F(c, 21, e.name.value)), c && c.typeCondition && (l = c.typeCondition.name.value, r.fragmentMatcher(n, l, a)) ? [2, this.resolveSelectionSet(c.selectionSet, t, n, r).then(function(e) {
								s.push(e);
							})] : [2]);
						});
					});
				}, [2, Promise.all(e.selections.map(c)).then(function() {
					return vt(s);
				})];
			});
		});
	}, t.prototype.resolveField = function(e, t, n, r) {
		return I(this, void 0, void 0, function() {
			var i, a, o, s, c, l, u, d, f, p = this;
			return j(this, function(m) {
				return n ? (i = r.variables, a = e.name.value, o = y(e), s = a !== o, c = n[o] || n[a], l = Promise.resolve(c), (!r.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (u = n.__typename || r.defaultOperationType, d = this.resolvers && this.resolvers[u], d && (f = d[s ? a : o], f && (l = Promise.resolve(tr.withValue(this.cache, f, [
					n,
					Be(e, i),
					r.context,
					{
						field: e,
						fragmentMap: r.fragmentMap
					}
				]))))), [2, l.then(function(n) {
					if (n === void 0 && (n = c), e.directives && e.directives.forEach(function(e) {
						e.name.value === "export" && e.arguments && e.arguments.forEach(function(e) {
							e.name.value === "as" && e.value.kind === "StringValue" && (r.exportedVariables[e.value.value] = n);
						});
					}), !e.selectionSet || n == null) return n;
					var i = e.directives?.some(function(e) {
						return e.name.value === "client";
					}) ?? !1;
					if (Array.isArray(n)) return p.resolveSubSelectedArray(e, t || i, n, r);
					if (e.selectionSet) return p.resolveSelectionSet(e.selectionSet, t || i, n, r);
				})]) : [2, null];
			});
		});
	}, t.prototype.resolveSubSelectedArray = function(e, t, n, r) {
		var i = this;
		return Promise.all(n.map(function(n) {
			if (n === null) return null;
			if (Array.isArray(n)) return i.resolveSubSelectedArray(e, t, n, r);
			if (e.selectionSet) return i.resolveSelectionSet(e.selectionSet, t, n, r);
		}));
	}, t.prototype.collectSelectionsToResolve = function(e, t) {
		var n = function(e) {
			return !Array.isArray(e);
		}, r = this.selectionsToResolveCache;
		function i(e) {
			if (!r.has(e)) {
				var a = /* @__PURE__ */ new Set();
				r.set(e, a), P(e, {
					Directive: function(e, t, r, i, o) {
						e.name.value === "client" && o.forEach(function(e) {
							n(e) && nt(e) && a.add(e);
						});
					},
					FragmentSpread: function(e, r, o, s, c) {
						var l = t[e.name.value];
						F(l, 22, e.name.value);
						var u = i(l);
						u.size > 0 && (c.forEach(function(e) {
							n(e) && nt(e) && a.add(e);
						}), a.add(e), u.forEach(function(e) {
							a.add(e);
						}));
					}
				});
			}
			return r.get(e);
		}
		return i(e);
	}, t;
}(), Wr = !1, Gr = function() {
	function e(e) {
		var t = this;
		if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache) throw R(16);
		var n = e.uri, r = e.credentials, i = e.headers, a = e.cache, o = e.documentTransform, s = e.ssrMode, c = s === void 0 ? !1 : s, l = e.ssrForceFetchDelay, u = l === void 0 ? 0 : l, d = e.connectToDevTools, f = e.queryDeduplication, p = f === void 0 ? !0 : f, m = e.defaultOptions, h = e.defaultContext, g = e.assumeImmutableResults, _ = g === void 0 ? a.assumeImmutableResults : g, v = e.resolvers, y = e.typeDefs, b = e.fragmentMatcher, x = e.clientAwareness, S = e.name, C = e.version, w = e.devtools, T = e.dataMasking;
		globalThis.__DEV__ !== !1 && (L(e, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead."), L(e, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead."), L(e, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead."), L(e, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead."), L(e, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead."), L(e, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead."), L(e, "typeDefs", "ApolloClient"), e.link || globalThis.__DEV__ !== !1 && F.warn(17));
		var E = e.link;
		E || (E = n ? new mn({
			uri: n,
			credentials: r,
			headers: i
		}) : Y.empty()), this.link = E, this.cache = a, this.disableNetworkFetches = c || u > 0, this.queryDeduplication = p, this.defaultOptions = m || Object.create(null), this.typeDefs = y, this.devtoolsConfig = O(O({}, w), { enabled: w?.enabled ?? d }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), u && setTimeout(function() {
			return t.disableNetworkFetches = !1;
		}, u), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = be, this.localState = new Ur({
			cache: a,
			client: this,
			resolvers: v,
			fragmentMatcher: b
		}), this.queryManager = new Hr({
			cache: this.cache,
			link: this.link,
			defaultOptions: this.defaultOptions,
			defaultContext: h,
			documentTransform: o,
			queryDeduplication: p,
			ssrMode: c,
			dataMasking: !!T,
			clientAwareness: {
				name: x?.name ?? S,
				version: x?.version ?? C
			},
			localState: this.localState,
			assumeImmutableResults: _,
			onBroadcast: this.devtoolsConfig.enabled ? function() {
				t.devToolsHookCb && t.devToolsHookCb({
					action: {},
					state: {
						queries: t.queryManager.getQueryStore(),
						mutations: t.queryManager.mutationStore || {}
					},
					dataWithOptimisticResults: t.cache.extract(!0)
				});
			} : void 0
		}), this.devtoolsConfig.enabled && this.connectToDevTools();
	}
	return Object.defineProperty(e.prototype, "prioritizeCacheValues", {
		get: function() {
			return this.disableNetworkFetches;
		},
		set: function(e) {
			this.disableNetworkFetches = e;
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype.connectToDevTools = function() {
		if (!(typeof window > "u")) {
			var e = window, t = Symbol.for("apollo.devtools");
			(e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, !Wr && globalThis.__DEV__ !== !1 && (Wr = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
				if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
					var e = window.navigator, t = e && e.userAgent, n = void 0;
					typeof t == "string" && (t.indexOf("Chrome/") > -1 ? n = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : t.indexOf("Firefox/") > -1 && (n = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), n && globalThis.__DEV__ !== !1 && F.log("Download the Apollo DevTools for a better development experience: %s", n);
				}
			}, 1e4));
		}
	}, Object.defineProperty(e.prototype, "documentTransform", {
		get: function() {
			return this.queryManager.documentTransform;
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype.stop = function() {
		this.queryManager.stop();
	}, e.prototype.watchQuery = function(e) {
		return this.defaultOptions.watchQuery && (e = we(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = O(O({}, e), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (L(e, "canonizeResults", "client.watchQuery"), L(e, "partialRefetch", "client.watchQuery")), this.queryManager.watchQuery(e);
	}, e.prototype.query = function(e) {
		return this.defaultOptions.query && (e = we(this.defaultOptions.query, e)), F(e.fetchPolicy !== "cache-and-network", 18), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = O(O({}, e), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (L(e, "canonizeResults", "client.query"), L(e, "notifyOnNetworkStatusChange", "client.query", "This option does not affect `client.query` and can be safely removed."), e.fetchPolicy === "standby" && globalThis.__DEV__ !== !1 && F.warn(19)), this.queryManager.query(e);
	}, e.prototype.mutate = function(e) {
		return this.defaultOptions.mutate && (e = we(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
	}, e.prototype.subscribe = function(e) {
		var t = this, n = this.queryManager.generateQueryId();
		return this.queryManager.startGraphQLSubscription(e).map(function(r) {
			return O(O({}, r), { data: t.queryManager.maskOperation({
				document: e.query,
				data: r.data,
				fetchPolicy: e.fetchPolicy,
				id: n
			}) });
		});
	}, e.prototype.readQuery = function(e, t) {
		return t === void 0 && (t = !1), this.cache.readQuery(e, t);
	}, e.prototype.watchFragment = function(e) {
		var t;
		return this.cache.watchFragment(O(O({}, e), (t = {}, t[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, t)));
	}, e.prototype.readFragment = function(e, t) {
		return t === void 0 && (t = !1), this.cache.readFragment(e, t);
	}, e.prototype.writeQuery = function(e) {
		var t = this.cache.writeQuery(e);
		return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
	}, e.prototype.writeFragment = function(e) {
		var t = this.cache.writeFragment(e);
		return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
	}, e.prototype.__actionHookForDevTools = function(e) {
		this.devToolsHookCb = e;
	}, e.prototype.__requestRaw = function(e) {
		return zt(this.link, e);
	}, e.prototype.resetStore = function() {
		var e = this;
		return Promise.resolve().then(function() {
			return e.queryManager.clearStore({ discardWatches: !1 });
		}).then(function() {
			return Promise.all(e.resetStoreCallbacks.map(function(e) {
				return e();
			}));
		}).then(function() {
			return e.reFetchObservableQueries();
		});
	}, e.prototype.clearStore = function() {
		var e = this;
		return Promise.resolve().then(function() {
			return e.queryManager.clearStore({ discardWatches: !0 });
		}).then(function() {
			return Promise.all(e.clearStoreCallbacks.map(function(e) {
				return e();
			}));
		});
	}, e.prototype.onResetStore = function(e) {
		var t = this;
		return this.resetStoreCallbacks.push(e), function() {
			t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(t) {
				return t !== e;
			});
		};
	}, e.prototype.onClearStore = function(e) {
		var t = this;
		return this.clearStoreCallbacks.push(e), function() {
			t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(t) {
				return t !== e;
			});
		};
	}, e.prototype.reFetchObservableQueries = function(e) {
		return this.queryManager.reFetchObservableQueries(e);
	}, e.prototype.refetchQueries = function(e) {
		var t = this.queryManager.refetchQueries(e), n = [], r = [];
		t.forEach(function(e, t) {
			n.push(t), r.push(e);
		});
		var i = Promise.all(r);
		return i.queries = n, i.results = r, i.catch(function(e) {
			globalThis.__DEV__ !== !1 && F.debug(20, e);
		}), i;
	}, e.prototype.getObservableQueries = function(e) {
		return e === void 0 && (e = "active"), this.queryManager.getObservableQueries(e);
	}, e.prototype.extract = function(e) {
		return this.cache.extract(e);
	}, e.prototype.restore = function(e) {
		return this.cache.restore(e);
	}, e.prototype.addResolvers = function(e) {
		this.localState.addResolvers(e);
	}, e.prototype.setResolvers = function(e) {
		this.localState.setResolvers(e);
	}, e.prototype.getResolvers = function() {
		return this.localState.getResolvers();
	}, e.prototype.setLocalStateFragmentMatcher = function(e) {
		this.localState.setFragmentMatcher(e);
	}, e.prototype.setLink = function(e) {
		this.link = this.queryManager.link = e;
	}, Object.defineProperty(e.prototype, "defaultContext", {
		get: function() {
			return this.queryManager.defaultContext;
		},
		enumerable: !1,
		configurable: !0
	}), e;
}();
globalThis.__DEV__ !== !1 && (Gr.prototype.getMemoryInternals = p);
//#endregion
//#region node_modules/@apollo/client/link/context/index.js
function Kr(e) {
	return new Y(function(t, n) {
		var r = A(t, []);
		return new B(function(i) {
			var a, o = !1;
			return Promise.resolve(r).then(function(n) {
				return e(n, t.getContext());
			}).then(t.setContext).then(function() {
				o || (a = n(t).subscribe({
					next: i.next.bind(i),
					error: i.error.bind(i),
					complete: i.complete.bind(i)
				}));
			}).catch(i.error.bind(i)), function() {
				o = !0, a && a.unsubscribe();
			};
		});
	});
}
//#endregion
//#region node_modules/@apollo/client/link/error/index.js
function qr(e) {
	return new Y(function(t, n) {
		return new B(function(r) {
			var i, a, o;
			try {
				i = n(t).subscribe({
					next: function(i) {
						if (i.errors ? o = e({
							graphQLErrors: i.errors,
							response: i,
							operation: t,
							forward: n
						}) : ce(i) && (o = e({
							protocolErrors: i.extensions[ue],
							response: i,
							operation: t,
							forward: n
						})), o) {
							a = o.subscribe({
								next: r.next.bind(r),
								error: r.error.bind(r),
								complete: r.complete.bind(r)
							});
							return;
						}
						r.next(i);
					},
					error: function(i) {
						if (o = e({
							operation: t,
							networkError: i,
							graphQLErrors: i && i.result && i.result.errors || void 0,
							forward: n
						}), o) {
							a = o.subscribe({
								next: r.next.bind(r),
								error: r.error.bind(r),
								complete: r.complete.bind(r)
							});
							return;
						}
						r.error(i);
					},
					complete: function() {
						o || r.complete.bind(r)();
					}
				});
			} catch (i) {
				e({
					networkError: i,
					operation: t,
					forward: n
				}), r.error(i);
			}
			return function() {
				i && i.unsubscribe(), a && i.unsubscribe();
			};
		});
	});
}
(function(e) {
	N(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n.link = qr(t), n;
	}
	return t.prototype.request = function(e, t) {
		return this.link.request(e, t);
	}, t;
})(Y);
//#endregion
//#region lib/apollo-client.ts
var Jr = null, Yr = null;
function Xr(e) {
	Jr = e;
}
function Zr() {
	return Jr;
}
var Qr = null;
function $r(e) {
	Qr = e;
}
var ei = null;
function ti(e) {
	ei = e;
}
var ni = new Set([
	"StartAnonymousVisitor",
	"StartIdentifiedVisitor",
	"VisitorPasskeyRegistrationOptions",
	"VerifyVisitorPasskeyRegistration",
	"VisitorPasskeyAuthenticationOptions",
	"VerifyVisitorPasskeyAuthentication"
]);
function ri(e) {
	Yr = e;
}
function ii() {
	return Yr;
}
var ai = null;
function oi() {
	if (ai) return ai;
	let e = new mn({
		uri: `${t()}/graphql`,
		credentials: "omit"
	}), n = Kr((e, { headers: t }) => ({ headers: {
		...t,
		...Yr ? { "x-web-public-key": Yr } : {},
		...Jr ? { authorization: `Bearer ${Jr}` } : {}
	} }));
	return ai = new Gr({
		link: Rt([
			qr(({ operation: e, graphQLErrors: t, networkError: n }) => {
				if (ni.has(e.operationName)) return;
				let r = n && "statusCode" in n ? n.statusCode : void 0;
				if ((t ?? []).some((e) => {
					let t = e.extensions;
					if (t?.code === "webIntegrationMismatch") return !0;
					let n = t?.response?.message;
					return !!(typeof n == "string" && n.includes("webIntegrationMismatch") || Array.isArray(n) && n.some((e) => typeof e == "string" && e.includes("webIntegrationMismatch")));
				})) {
					ei?.();
					return;
				}
				(r === 401 || (t ?? []).some((e) => {
					let t = e.extensions;
					return t?.code === "UNAUTHENTICATED" || t?.response?.statusCode === 401 || e.message === "Unauthorized";
				})) && Qr?.();
			}),
			n,
			e
		]),
		cache: new Fr({ typePolicies: {} }),
		defaultOptions: {
			watchQuery: {
				errorPolicy: "all",
				fetchPolicy: "cache-first"
			},
			query: {
				errorPolicy: "all",
				fetchPolicy: "cache-first"
			},
			mutate: { errorPolicy: "all" }
		}
	}), ai;
}
//#endregion
//#region dummy/help.ts
var si = [
	"demo-cat-getting-started",
	"demo-cat-automation",
	"demo-cat-integrations",
	"demo-cat-billing"
];
function ci(e) {
	return si.map((t) => ({
		id: t,
		articleCount: li.filter((e) => e.categoryId === t).length,
		title: e.raw(`help.categories.${t}.title`),
		description: e.raw(`help.categories.${t}.description`)
	}));
}
var li = [
	{
		id: "demo-article-install",
		slug: "install-the-widget",
		categoryId: "demo-cat-getting-started",
		viewCount: 2310,
		publishedAt: "2026-01-12T10:00:00.000Z",
		authorIds: ["maya"],
		tagSlugs: ["setup", "install"]
	},
	{
		id: "demo-article-flows",
		slug: "build-your-first-flow",
		categoryId: "demo-cat-automation",
		viewCount: 1684,
		publishedAt: "2026-02-04T10:00:00.000Z",
		authorIds: ["leo"],
		tagSlugs: ["automation", "flows"]
	},
	{
		id: "demo-article-slack",
		slug: "connect-slack",
		categoryId: "demo-cat-integrations",
		viewCount: 1102,
		publishedAt: "2026-02-22T10:00:00.000Z",
		authorIds: ["leo", "ira"],
		tagSlugs: ["integrations", "slack"]
	},
	{
		id: "demo-article-billing",
		slug: "manage-billing",
		categoryId: "demo-cat-billing",
		viewCount: 540,
		publishedAt: "2026-03-18T10:00:00.000Z",
		authorIds: ["maya"],
		tagSlugs: ["billing", "plans"]
	},
	{
		id: "demo-article-theme",
		slug: "customise-theme",
		categoryId: "demo-cat-getting-started",
		viewCount: 1340,
		publishedAt: "2026-02-10T10:00:00.000Z",
		authorIds: ["ira"],
		tagSlugs: ["setup", "design"]
	},
	{
		id: "demo-article-handoff",
		slug: "human-handoff",
		categoryId: "demo-cat-automation",
		viewCount: 988,
		publishedAt: "2026-03-01T10:00:00.000Z",
		authorIds: ["leo"],
		tagSlugs: ["automation", "ai"]
	},
	{
		id: "demo-article-crm",
		slug: "connect-crm",
		categoryId: "demo-cat-integrations",
		viewCount: 763,
		publishedAt: "2026-03-25T10:00:00.000Z",
		authorIds: ["ira"],
		tagSlugs: ["integrations", "crm"]
	},
	{
		id: "demo-article-shortcuts",
		slug: "operator-shortcuts",
		categoryId: "demo-cat-getting-started",
		viewCount: 612,
		publishedAt: "2026-04-08T10:00:00.000Z",
		authorIds: ["maya"],
		tagSlugs: ["productivity", "inbox"]
	}
];
function ui(e) {
	return li.map(({ authorIds: t, tagSlugs: n, ...r }) => ({
		...r,
		title: e.raw(`help.articles.${r.id}.title`),
		excerpt: e.raw(`help.articles.${r.id}.excerpt`),
		contentMarkdown: e.raw(`help.articles.${r.id}.body`),
		authors: a(t),
		tags: n.map((t) => ({
			_id: `demo-tag-${t}`,
			slug: t,
			label: e.raw(`help.tags.${t}`)
		}))
	}));
}
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
var di = Symbol.for("react.lazy"), fi = H.use;
function pi(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function mi(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === di && "_payload" in e && pi(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function hi(e) {
	let t = /* @__PURE__ */ _i(e), n = H.forwardRef((e, n) => {
		let { children: r, ...i } = e;
		mi(r) && typeof fi == "function" && (r = fi(r._payload));
		let a = H.Children.toArray(r), o = a.find(yi);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? H.Children.count(e) > 1 ? H.Children.only(null) : H.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ Ke(t, {
				...i,
				ref: n,
				children: H.isValidElement(e) ? H.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ Ke(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
var gi = /* @__PURE__ */ hi("Slot");
/* @__NO_SIDE_EFFECTS__ */
function _i(e) {
	let t = H.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (mi(n) && typeof fi == "function" && (n = fi(n._payload)), H.isValidElement(n)) {
			let e = xi(n), i = bi(r, n.props);
			return n.type !== H.Fragment && (i.ref = t ? He(t, e) : e), H.cloneElement(n, i);
		}
		return H.Children.count(n) > 1 ? H.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var vi = Symbol("radix.slottable");
function yi(e) {
	return H.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === vi;
}
function bi(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function xi(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var Si = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ci = Ge, wi = ((e, t) => (n) => {
	if (t?.variants == null) return Ci(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = Si(t) || Si(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Ci(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
})("inline-flex items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary focus-visible:ring-offset-2 focus-visible:ring-offset-wx-bg disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			solid: "bg-wx-primary text-wx-primary-fg hover:bg-wx-primary-hover",
			tonal: "bg-wx-bg-elevated text-wx-fg hover:bg-wx-bg-elevated-2",
			ghost: "bg-transparent text-wx-fg-muted hover:bg-wx-bg-elevated hover:text-wx-fg",
			outline: "border border-wx-border bg-transparent text-wx-fg hover:bg-wx-bg-elevated"
		},
		size: {
			sm: "h-8 px-3 text-xs rounded-wx-sm whitespace-nowrap",
			md: "h-10 px-4 text-sm rounded-wx whitespace-nowrap",
			lg: "h-12 px-5 text-sm rounded-wx-lg whitespace-nowrap",
			tile: "w-full px-5 py-5 text-base rounded-wx-lg",
			icon: "h-9 w-9 rounded-full whitespace-nowrap"
		}
	},
	defaultVariants: {
		variant: "solid",
		size: "md"
	}
}), Ti = H.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) => /* @__PURE__ */ Ke(r ? gi : "button", {
	ref: a,
	className: We(wi({
		variant: t,
		size: n,
		className: e
	})),
	...i
}));
Ti.displayName = "Button";
//#endregion
//#region lib/graphql/queries/generated/help.generated.tsx
var $ = {}, Ei = /* @__PURE__ */ function(e) {
	return e.Popular = "POPULAR", e.Recent = "RECENT", e;
}({}), Di = d`
    query VisitorHelpFolders($parentId: ID, $locale: String) {
  visitorHelpFolders(parentId: $parentId, locale: $locale) {
    _id
    name
    slug
    description
    parentId
    ancestors
    order
    articleCount
  }
}
    `;
function Oi(e) {
	return E(Di, {
		...$,
		...e
	});
}
d`
    query VisitorHelpTags($locale: String) {
  visitorHelpTags(locale: $locale) {
    _id
    slug
    label
    description
  }
}
    `;
var ki = d`
    query VisitorHelpList($args: VisitorHelpListArgs) {
  visitorHelpList(args: $args) {
    items {
      _id
      title
      slug
      excerpt
      locale
      publishedAt
      order
      reactionCounts
      folder {
        _id
        name
      }
      tags {
        _id
        slug
        label
      }
      authors {
        _id
        name
        photo {
          _id
          url
        }
      }
      coverImageUrl {
        _id
        url
      }
    }
    meta {
      totalCount
      currentPage
      totalPages
      hasNextPage
      hasPreviousPage
    }
  }
}
    `;
function Ai(e) {
	return E(ki, {
		...$,
		...e
	});
}
var ji = d`
    query VisitorHelpArticle($args: VisitorHelpArticleArgs!) {
  visitorHelpArticle(args: $args) {
    _id
    title
    slug
    excerpt
    content
    contentFormat
    locale
    publishedAt
    viewCount
    reactionCounts
    viewerReaction
    folder {
      _id
      name
      ancestors
    }
    ancestors
    authors {
      _id
      name
      photo {
        _id
        url
      }
    }
    tags {
      _id
      slug
      label
    }
    coverImageUrl {
      _id
      url
    }
    canonicalUrl
    translations {
      _id
      locale
      slug
    }
  }
}
    `;
function Mi(e) {
	return E(ji, {
		...$,
		...e
	});
}
var Ni = d`
    query VisitorHelpArticlesByIds($ids: [ID!]!, $locale: String) {
  visitorHelpArticlesByIds(ids: $ids, locale: $locale) {
    _id
    title
    slug
    excerpt
    publishedAt
    coverImageUrl {
      _id
      url
    }
  }
}
    `;
function Pi(e) {
	return E(Ni, {
		...$,
		...e
	});
}
var Fi = d`
    query VisitorHelpRelated($articleId: ID!, $limit: Int, $locale: String) {
  visitorHelpRelated(articleId: $articleId, limit: $limit, locale: $locale) {
    _id
    title
    slug
    excerpt
    coverImageUrl {
      _id
      url
    }
  }
}
    `;
function Ii(e) {
	return E(Fi, {
		...$,
		...e
	});
}
var Li = d`
    mutation RecordVisitorHelpView($articleId: String!) {
  recordVisitorHelpView(articleId: $articleId) {
    ok
  }
}
    `;
function Ri(e) {
	return b(Li, {
		...$,
		...e
	});
}
var zi = d`
    query VisitorHelpListSlim($args: VisitorHelpListArgs) {
  visitorHelpList(args: $args) {
    items {
      _id
      title
      slug
    }
  }
}
    `;
function Bi(e) {
	return E(zi, {
		...$,
		...e
	});
}
var Vi = d`
    query VisitorHelpArticlesByIdsSlim($ids: [ID!]!, $locale: String) {
  visitorHelpArticlesByIds(ids: $ids, locale: $locale) {
    _id
    title
    slug
  }
}
    `;
function Hi(e) {
	return E(Vi, {
		...$,
		...e
	});
}
//#endregion
export { ti as _, Hi as a, Xr as b, Bi as c, hi as d, ui as f, Zr as g, ii as h, Pi as i, Ii as l, oi as m, Ri as n, Oi as o, ci as p, Mi as r, Ai as s, Ei as t, Ti as u, $r as v, ri as y };

//# sourceMappingURL=widget-react-DmQP1bcj.js.map