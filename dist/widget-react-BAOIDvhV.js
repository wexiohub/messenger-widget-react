import "react";
import "react-dom";
import "react/jsx-runtime";
import "react-dom/client";
import { $ as e, $t as t, At as n, B as r, Bt as i, C as a, Ct as o, Dt as s, Et as c, Ft as l, G as u, Gt as d, H as f, Ht as p, It as m, J as h, Jt as g, K as _, Kt as v, Lt as y, Mt as b, Nt as x, Ot as S, P as C, Pt as w, Q as T, Qt as E, R as D, Rt as ee, St as te, Tt as ne, U as re, Ut as ie, V as O, Vt as ae, W as k, Wt as A, Xt as oe, Yt as se, Z as j, Zt as ce, _t as le, an as ue, at as de, bt as fe, cn as M, ct as N, dn as P, dt as pe, en as F, et as me, fn as I, ft as he, gt as ge, h as _e, ht as ve, in as ye, it as be, jt as xe, k as Se, kt as Ce, ln as L, lt as we, mt as Te, nn as R, nt as Ee, on as De, ot as z, pn as Oe, pt as ke, q as Ae, qt as je, rn as B, rt as Me, sn as Ne, st as V, tt as Pe, un as H, ut as Fe, vt as Ie, w as Le, wt as U, xt as Re, yt as ze, z as Be, zt as Ve } from "./widget-react-BfPdgAQ-.js";
import { n as He, r as Ue } from "./widget-react-BxvW64LH.js";
import * as W from "react";
import { jsx as We } from "react/jsx-runtime";
//#region node_modules/graphql/language/printString.mjs
function Ge(e) {
	return `"${e.replace(Ke, qe)}"`;
}
var Ke = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function qe(e) {
	return Je[e.charCodeAt(0)];
}
var Je = /* @__PURE__ */ "\\u0000.\\u0001.\\u0002.\\u0003.\\u0004.\\u0005.\\u0006.\\u0007.\\b.\\t.\\n.\\u000B.\\f.\\r.\\u000E.\\u000F.\\u0010.\\u0011.\\u0012.\\u0013.\\u0014.\\u0015.\\u0016.\\u0017.\\u0018.\\u0019.\\u001A.\\u001B.\\u001C.\\u001D.\\u001E.\\u001F...\\\"..........................................................\\\\...................................\\u007F.\\u0080.\\u0081.\\u0082.\\u0083.\\u0084.\\u0085.\\u0086.\\u0087.\\u0088.\\u0089.\\u008A.\\u008B.\\u008C.\\u008D.\\u008E.\\u008F.\\u0090.\\u0091.\\u0092.\\u0093.\\u0094.\\u0095.\\u0096.\\u0097.\\u0098.\\u0099.\\u009A.\\u009B.\\u009C.\\u009D.\\u009E.\\u009F".split(".");
//#endregion
//#region node_modules/graphql/language/printer.mjs
function Ye(e) {
	return E(e, Ze);
}
var Xe = 80, Ze = {
	Name: { leave: (e) => e.value },
	Variable: { leave: (e) => "$" + e.name },
	Document: { leave: (e) => G(e.definitions, "\n\n") },
	OperationDefinition: { leave(e) {
		let t = $e(e.variableDefinitions) ? q("(\n", G(e.variableDefinitions, "\n"), "\n)") : q("(", G(e.variableDefinitions, ", "), ")"), n = q("", e.description, "\n") + G([
			e.operation,
			G([e.name, t]),
			G(e.directives, " ")
		], " ");
		return (n === "query" ? "" : n + " ") + e.selectionSet;
	} },
	VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: n, directives: r, description: i }) => q("", i, "\n") + e + ": " + t + q(" = ", n) + q(" ", G(r, " ")) },
	SelectionSet: { leave: ({ selections: e }) => K(e) },
	Field: { leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
		let a = q("", e, ": ") + t, o = a + q("(", G(n, ", "), ")");
		return o.length > Xe && (o = a + q("(\n", Qe(G(n, "\n")), "\n)")), G([
			o,
			G(r, " "),
			i
		], " ");
	} },
	Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
	FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + q(" ", G(t, " ")) },
	InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: n }) => G([
		"...",
		q("on ", e),
		G(t, " "),
		n
	], " ") },
	FragmentDefinition: { leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i, description: a }) => q("", a, "\n") + `fragment ${e}${q("(", G(n, ", "), ")")} on ${t} ${q("", G(r, " "), " ")}` + i },
	IntValue: { leave: ({ value: e }) => e },
	FloatValue: { leave: ({ value: e }) => e },
	StringValue: { leave: ({ value: e, block: n }) => n ? t(e) : Ge(e) },
	BooleanValue: { leave: ({ value: e }) => e ? "true" : "false" },
	NullValue: { leave: () => "null" },
	EnumValue: { leave: ({ value: e }) => e },
	ListValue: { leave: ({ values: e }) => "[" + G(e, ", ") + "]" },
	ObjectValue: { leave: ({ fields: e }) => "{" + G(e, ", ") + "}" },
	ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
	Directive: { leave: ({ name: e, arguments: t }) => "@" + e + q("(", G(t, ", "), ")") },
	NamedType: { leave: ({ name: e }) => e },
	ListType: { leave: ({ type: e }) => "[" + e + "]" },
	NonNullType: { leave: ({ type: e }) => e + "!" },
	SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: n }) => q("", e, "\n") + G([
		"schema",
		G(t, " "),
		K(n)
	], " ") },
	OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t },
	ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: n }) => q("", e, "\n") + G([
		"scalar",
		t,
		G(n, " ")
	], " ") },
	ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => q("", e, "\n") + G([
		"type",
		t,
		q("implements ", G(n, " & ")),
		G(r, " "),
		K(i)
	], " ") },
	FieldDefinition: { leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => q("", e, "\n") + t + ($e(n) ? q("(\n", Qe(G(n, "\n")), "\n)") : q("(", G(n, ", "), ")")) + ": " + r + q(" ", G(i, " ")) },
	InputValueDefinition: { leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => q("", e, "\n") + G([
		t + ": " + n,
		q("= ", r),
		G(i, " ")
	], " ") },
	InterfaceTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => q("", e, "\n") + G([
		"interface",
		t,
		q("implements ", G(n, " & ")),
		G(r, " "),
		K(i)
	], " ") },
	UnionTypeDefinition: { leave: ({ description: e, name: t, directives: n, types: r }) => q("", e, "\n") + G([
		"union",
		t,
		G(n, " "),
		q("= ", G(r, " | "))
	], " ") },
	EnumTypeDefinition: { leave: ({ description: e, name: t, directives: n, values: r }) => q("", e, "\n") + G([
		"enum",
		t,
		G(n, " "),
		K(r)
	], " ") },
	EnumValueDefinition: { leave: ({ description: e, name: t, directives: n }) => q("", e, "\n") + G([t, G(n, " ")], " ") },
	InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: n, fields: r }) => q("", e, "\n") + G([
		"input",
		t,
		G(n, " "),
		K(r)
	], " ") },
	DirectiveDefinition: { leave: ({ description: e, name: t, arguments: n, directives: r, repeatable: i, locations: a }) => q("", e, "\n") + "directive @" + t + ($e(n) ? q("(\n", Qe(G(n, "\n")), "\n)") : q("(", G(n, ", "), ")")) + q(" ", G(r, " ")) + (i ? " repeatable" : "") + " on " + G(a, " | ") },
	SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => G([
		"extend schema",
		G(e, " "),
		K(t)
	], " ") },
	ScalarTypeExtension: { leave: ({ name: e, directives: t }) => G([
		"extend scalar",
		e,
		G(t, " ")
	], " ") },
	ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => G([
		"extend type",
		e,
		q("implements ", G(t, " & ")),
		G(n, " "),
		K(r)
	], " ") },
	InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => G([
		"extend interface",
		e,
		q("implements ", G(t, " & ")),
		G(n, " "),
		K(r)
	], " ") },
	UnionTypeExtension: { leave: ({ name: e, directives: t, types: n }) => G([
		"extend union",
		e,
		G(t, " "),
		q("= ", G(n, " | "))
	], " ") },
	EnumTypeExtension: { leave: ({ name: e, directives: t, values: n }) => G([
		"extend enum",
		e,
		G(t, " "),
		K(n)
	], " ") },
	InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: n }) => G([
		"extend input",
		e,
		G(t, " "),
		K(n)
	], " ") },
	DirectiveExtension: { leave: ({ name: e, directives: t }) => G(["extend directive @" + e, G(t, " ")], " ") },
	TypeCoordinate: { leave: ({ name: e }) => e },
	MemberCoordinate: { leave: ({ name: e, memberName: t }) => G([e, q(".", t)]) },
	ArgumentCoordinate: { leave: ({ name: e, fieldName: t, argumentName: n }) => G([
		e,
		q(".", t),
		q("(", n, ":)")
	]) },
	DirectiveCoordinate: { leave: ({ name: e }) => G(["@", e]) },
	DirectiveArgumentCoordinate: { leave: ({ name: e, argumentName: t }) => G([
		"@",
		e,
		q("(", t, ":)")
	]) }
};
function G(e, t = "") {
	return e?.filter((e) => e).join(t) ?? "";
}
function K(e) {
	return q("{\n", Qe(G(e, "\n")), "\n}");
}
function q(e, t, n = "") {
	return t != null && t !== "" ? e + t + n : "";
}
function Qe(e) {
	return q("  ", e.replace(/\n/g, "\n  "));
}
function $e(e) {
	/* c8 ignore next */
	return e?.some((e) => e.includes("\n")) ?? !1;
}
//#endregion
//#region node_modules/graphql/language/predicates.mjs
function et(e) {
	return e.kind === F.FIELD || e.kind === F.FRAGMENT_SPREAD || e.kind === F.INLINE_FRAGMENT;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/DocumentTransform.js
function tt(e) {
	return e;
}
var nt = function() {
	function e(e, t) {
		t === void 0 && (t = Object.create(null)), this.resultCache = d ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = t.cache !== !1, this.resetCache();
	}
	return e.prototype.getCacheKey = function(e) {
		return [e];
	}, e.identity = function() {
		return new e(tt, { cache: !1 });
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
			var n = new v(A);
			this.performWork = we(e.prototype.performWork.bind(this), {
				makeCacheKey: function(e) {
					var r = t.getCacheKey(e);
					if (r) return R(Array.isArray(r), 104), n.lookupArray(r);
				},
				max: l["documentTransform.cache"],
				cache: y
			});
		}
	}, e.prototype.performWork = function(e) {
		return he(e), this.transform(e);
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
}(), rt, J = Object.assign(function(e) {
	var t = rt.get(e);
	return t || (t = Ye(e), rt.set(e, t)), t;
}, { reset: function() {
	rt = new m(l.print || 2e3);
} });
J.reset(), globalThis.__DEV__ !== !1 && w("print", function() {
	return rt ? rt.size : 0;
});
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/transform.js
var it = {
	kind: F.FIELD,
	name: {
		kind: F.NAME,
		value: "__typename"
	}
};
function at(e, t) {
	return !e || e.selectionSet.selections.every(function(e) {
		return e.kind === F.FRAGMENT_SPREAD && at(t[e.name.value], t);
	});
}
function ot(e) {
	return at(le(e) || Te(e), ee(ve(e))) ? null : e;
}
function st(e) {
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
function ct(e) {
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
function lt(e, t) {
	he(t);
	for (var n = ct(""), r = ct(""), i = function(e) {
		for (var t = 0, i = void 0; t < e.length && (i = e[t]); ++t) if (!V(i)) {
			if (i.kind === F.OPERATION_DEFINITION) return n(i.name && i.name.value);
			if (i.kind === F.FRAGMENT_DEFINITION) return r(i.name.value);
		}
		return globalThis.__DEV__ !== !1 && R.error(124), null;
	}, a = 0, o = t.definitions.length - 1; o >= 0; --o) t.definitions[o].kind === F.OPERATION_DEFINITION && ++a;
	var s = st(e), c = function(e) {
		return N(e) && e.map(s).some(function(e) {
			return e && e.remove;
		});
	}, l = /* @__PURE__ */ new Map(), u = !1, d = { enter: function(e) {
		if (c(e.directives)) return u = !0, null;
	} }, f = E(t, {
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
					return e.kind === F.FIELD && e.name.value === "__typename";
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
		e.kind === F.OPERATION_DEFINITION ? p(n(e.name && e.name.value)).fragmentSpreads.forEach(function(e) {
			m.add(e);
		}) : e.kind === F.FRAGMENT_DEFINITION && a === 0 && !r(e.name.value).removed && m.add(e.name.value);
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
	return ot(E(f, {
		FragmentSpread: g,
		FragmentDefinition: g,
		OperationDefinition: { leave: function(e) {
			if (e.variableDefinitions) {
				var t = p(n(e.name && e.name.value)).transitiveVars;
				if (t.size < e.variableDefinitions.length) return M(M({}, e), { variableDefinitions: e.variableDefinitions.filter(function(e) {
					return t.has(e.variable.name.value);
				}) });
			}
		} }
	}));
}
var ut = Object.assign(function(e) {
	return E(e, { SelectionSet: { enter: function(e, t, n) {
		if (!(n && n.kind === F.OPERATION_DEFINITION)) {
			var r = e.selections;
			if (r && !r.some(function(e) {
				return U(e) && (e.name.value === "__typename" || e.name.value.lastIndexOf("__", 0) === 0);
			})) {
				var i = n;
				if (!(U(i) && i.directives && i.directives.some(function(e) {
					return e.name.value === "export";
				}))) return M(M({}, e), { selections: Oe(Oe([], r, !0), [it], !1) });
			}
		}
	} } });
}, { added: function(e) {
	return e === it;
} });
function dt(e) {
	return ge(e).operation === "query" ? e : E(e, { OperationDefinition: { enter: function(e) {
		return M(M({}, e), { operation: "query" });
	} } });
}
function ft(e) {
	return he(e), lt([{
		test: function(e) {
			return e.name.value === "client";
		},
		remove: !0
	}], e);
}
function pt(e) {
	return he(e), E(e, { FragmentSpread: function(e) {
		if (!e.directives?.some(function(e) {
			return e.name.value === "unmask";
		})) return M(M({}, e), { directives: Oe(Oe([], e.directives || [], !0), [{
			kind: F.DIRECTIVE,
			name: {
				kind: F.NAME,
				value: "nonreactive"
			}
		}], !1) });
	} });
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/mergeDeep.js
var mt = Object.prototype.hasOwnProperty;
function ht() {
	return gt([...arguments]);
}
function gt(e) {
	var t = e[0] || {}, n = e.length;
	if (n > 1) for (var r = new Y(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
	return t;
}
var _t = function(e, t, n) {
	return this.merge(e[n], t[n]);
}, Y = function() {
	function e(e) {
		e === void 0 && (e = _t), this.reconciler = e, this.isObject = p, this.pastCopies = /* @__PURE__ */ new Set();
	}
	return e.prototype.merge = function(e, t) {
		for (var n = this, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		return p(t) && p(e) ? (Object.keys(t).forEach(function(i) {
			if (mt.call(e, i)) {
				var a = e[i];
				if (t[i] !== a) {
					var o = n.reconciler.apply(n, Oe([
						e,
						t,
						i
					], r, !1));
					o !== a && (e = n.shallowCopyForMerge(e), e[i] = o);
				}
			} else e = n.shallowCopyForMerge(e), e[i] = t[i];
		}), e) : t;
	}, e.prototype.shallowCopyForMerge = function(e) {
		return p(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : M({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
	}, e;
}();
//#endregion
//#region node_modules/@apollo/client/utilities/observables/asyncMap.js
function vt(e, t, n) {
	return new z(function(r) {
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
function yt(e) {
	return e && typeof e.then == "function";
}
var bt = function(e) {
	H(t, e);
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
				n.sub !== null && (n.latest = ["next", e], n.notify("next", e), Me(n.observers, "next", e));
			},
			error: function(e) {
				var t = n.sub;
				t !== null && (t && setTimeout(function() {
					return t.unsubscribe();
				}), n.sub = null, n.latest = ["error", e], n.reject(e), n.notify("error", e), Me(n.observers, "error", e));
			},
			complete: function() {
				var e = n, t = e.sub, r = e.sources, i = r === void 0 ? [] : r;
				if (t !== null) {
					var a = i.shift();
					a ? yt(a) ? a.then(function(e) {
						return n.sub = e.subscribe(n.handlers);
					}, n.handlers.error) : n.sub = a.subscribe(n.handlers) : (t && setTimeout(function() {
						return t.unsubscribe();
					}), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Me(n.observers, "complete"));
				}
			}
		}, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(e) {
			n.reject(e), n.sources = [], n.handlers.error(e);
		}, n.promise.catch(function(e) {}), typeof t == "function" && (t = [new z(t)]), yt(t) ? t.then(function(e) {
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
}(z);
Ee(bt);
//#endregion
//#region node_modules/@apollo/client/utilities/common/incrementalResult.js
function xt(e) {
	return "incremental" in e;
}
function St(e) {
	return "hasNext" in e && "data" in e;
}
function Ct(e) {
	return xt(e) || St(e);
}
function wt(e) {
	return p(e) && "payload" in e;
}
function Tt(e, t) {
	var n = e, r = new Y();
	return xt(t) && N(t.incremental) && t.incremental.forEach(function(e) {
		for (var t = e.data, i = e.path, a = i.length - 1; a >= 0; --a) {
			var o = i[a], s = isNaN(+o) ? {} : [];
			s[o] = t, t = s;
		}
		n = r.merge(n, t);
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/errorHandling.js
function Et(e) {
	return N(Dt(e));
}
function Dt(e) {
	var t = N(e.errors) ? e.errors.slice(0) : [];
	return xt(e) && N(e.incremental) && e.incremental.forEach(function(e) {
		e.errors && t.push.apply(t, e.errors);
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/fromError.js
function Ot(e) {
	return new z(function(t) {
		t.error(e);
	});
}
//#endregion
//#region node_modules/@apollo/client/link/utils/throwServerError.js
var kt = function(e, t, n) {
	var r = Error(n);
	throw r.name = "ServerError", r.response = e, r.statusCode = e.status, r.result = t, r;
};
//#endregion
//#region node_modules/@apollo/client/link/utils/validateOperation.js
function At(e) {
	for (var t = [
		"query",
		"operationName",
		"variables",
		"extensions",
		"context"
	], n = 0, r = Object.keys(e); n < r.length; n++) {
		var i = r[n];
		if (t.indexOf(i) < 0) throw B(58, i);
	}
	return e;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/createOperation.js
function jt(e, t) {
	var n = M({}, e);
	return Object.defineProperty(t, "setContext", {
		enumerable: !1,
		value: function(e) {
			n = typeof e == "function" ? M(M({}, n), e(n)) : M(M({}, n), e);
		}
	}), Object.defineProperty(t, "getContext", {
		enumerable: !1,
		value: function() {
			return M({}, n);
		}
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/transformOperation.js
function Mt(e) {
	var t = {
		variables: e.variables || {},
		extensions: e.extensions || {},
		operationName: e.operationName,
		query: e.query
	};
	return t.operationName || (t.operationName = typeof t.query == "string" ? "" : Ie(t.query) || void 0), t;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/filterOperationVariables.js
function Nt(e, t) {
	var n = M({}, e), r = new Set(Object.keys(e));
	return E(t, { Variable: function(e, t, n) {
		n && n.kind !== "VariableDefinition" && r.delete(e.name.value);
	} }), r.forEach(function(e) {
		delete n[e];
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/link/core/ApolloLink.js
function Pt(e, t) {
	return t ? t(e) : z.of();
}
function Ft(e) {
	return typeof e == "function" ? new X(e) : e;
}
function It(e) {
	return e.request.length <= 1;
}
var X = function() {
	function e(e) {
		e && (this.request = e);
	}
	return e.empty = function() {
		return new e(function() {
			return z.of();
		});
	}, e.from = function(t) {
		return t.length === 0 ? e.empty() : t.map(Ft).reduce(function(e, t) {
			return e.concat(t);
		});
	}, e.split = function(t, n, r) {
		var i = Ft(n), a = Ft(r || new e(Pt)), o = It(i) && It(a) ? new e(function(e) {
			return t(e) ? i.request(e) || z.of() : a.request(e) || z.of();
		}) : new e(function(e, n) {
			return t(e) ? i.request(e, n) || z.of() : a.request(e, n) || z.of();
		});
		return Object.assign(o, {
			left: i,
			right: a
		});
	}, e.execute = function(e, t) {
		return e.request(jt(t.context, Mt(At(t)))) || z.of();
	}, e.concat = function(t, n) {
		var r = Ft(t);
		if (It(r)) return globalThis.__DEV__ !== !1 && R.warn(47, r), r;
		var i = Ft(n), a = It(i) ? new e(function(e) {
			return r.request(e, function(e) {
				return i.request(e) || z.of();
			}) || z.of();
		}) : new e(function(e, t) {
			return r.request(e, function(e) {
				return i.request(e, t) || z.of();
			}) || z.of();
		});
		return Object.assign(a, {
			left: r,
			right: i
		});
	}, e.prototype.split = function(t, n, r) {
		return this.concat(e.split(t, n, r || new e(Pt)));
	}, e.prototype.concat = function(t) {
		return e.concat(this, t);
	}, e.prototype.request = function(e, t) {
		throw B(48);
	}, e.prototype.onError = function(e, t) {
		if (globalThis.__DEV__ !== !1 && T("onError", function() {
			globalThis.__DEV__ !== !1 && R.warn(49);
		}), t && t.error) return t.error(e), !1;
		throw e;
	}, e.prototype.setOnError = function(e) {
		return globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && R.warn(50), this.onError = e, this;
	}, e;
}(), Lt = X.from, Rt = X.execute;
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/async.js
function zt(e) {
	var t, n = e[Symbol.asyncIterator]();
	return t = { next: function() {
		return n.next();
	} }, t[Symbol.asyncIterator] = function() {
		return this;
	}, t;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/nodeStream.js
function Bt(e) {
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
	return ie && (u[Symbol.asyncIterator] = function() {
		return this;
	}), u;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/promise.js
function Vt(e) {
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
	return ie && (n[Symbol.asyncIterator] = function() {
		return this;
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/reader.js
function Ht(e) {
	var t = { next: function() {
		return e.read();
	} };
	return ie && (t[Symbol.asyncIterator] = function() {
		return this;
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/link/http/responseIterator.js
function Ut(e) {
	return !!e.body;
}
function Wt(e) {
	return !!e.getReader;
}
function Gt(e) {
	return !!(ie && e[Symbol.asyncIterator]);
}
function Kt(e) {
	return !!e.stream;
}
function qt(e) {
	return !!e.arrayBuffer;
}
function Jt(e) {
	return !!e.pipe;
}
function Yt(e) {
	var t = e;
	if (Ut(e) && (t = e.body), Gt(t)) return zt(t);
	if (Wt(t)) return Ht(t.getReader());
	if (Kt(t)) return Ht(t.stream().getReader());
	if (qt(t)) return Vt(t.arrayBuffer());
	if (Jt(t)) return Bt(t);
	throw Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
//#endregion
//#region node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js
var Xt = Object.prototype.hasOwnProperty;
function Zt(e, t) {
	return L(this, void 0, void 0, function() {
		var n, r, i, a, o, s, c, l, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T;
		return P(this, function(E) {
			switch (E.label) {
				case 0:
					if (TextDecoder === void 0) throw Error("TextDecoder must be defined in the environment: please import a polyfill.");
					n = new TextDecoder("utf-8"), r = e.headers?.get("content-type"), i = "boundary=", a = r?.includes(i) ? r?.substring(r?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--${a}`, s = "", c = Yt(e), l = !0, E.label = 1;
				case 1: return l ? [4, c.next()] : [3, 3];
				case 2:
					for (d = E.sent(), f = d.value, p = d.done, m = typeof f == "string" ? f : n.decode(f), h = s.length - o.length + 1, l = !p, s += m, g = s.indexOf(o, h); g > -1;) {
						if (_ = void 0, w = [s.slice(0, g), s.slice(g + o.length)], _ = w[0], s = w[1], v = _.indexOf("\r\n\r\n"), y = Qt(_.slice(0, v)), b = y["content-type"], b && b.toLowerCase().indexOf("application/json") === -1) throw Error("Unsupported patch content type: application/json is required.");
						if (x = _.slice(v), x) {
							if (S = $t(e, x), Object.keys(S).length > 1 || "data" in S || "incremental" in S || "errors" in S || "payload" in S) if (wt(S)) {
								if (C = {}, "payload" in S) {
									if (Object.keys(S).length === 1 && S.payload === null) return [2];
									C = M({}, S.payload);
								}
								"errors" in S && (C = M(M({}, C), { extensions: M(M({}, "extensions" in C ? C.extensions : null), (T = {}, T[u] = S.errors, T)) })), t(C);
							} else t(S);
							else if (Object.keys(S).length === 1 && "hasNext" in S && !S.hasNext) return [2];
						}
						g = s.indexOf(o);
					}
					return [3, 1];
				case 3: return [2];
			}
		});
	});
}
function Qt(e) {
	var t = {};
	return e.split("\n").forEach(function(e) {
		var n = e.indexOf(":");
		if (n > -1) {
			var r = e.slice(0, n).trim().toLowerCase();
			t[r] = e.slice(n + 1).trim();
		}
	}), t;
}
function $t(e, t) {
	e.status >= 300 && kt(e, function() {
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
function en(e, t) {
	e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e);
}
function tn(e) {
	return function(t) {
		return t.text().then(function(e) {
			return $t(t, e);
		}).then(function(n) {
			return !Array.isArray(n) && !Xt.call(n, "data") && !Xt.call(n, "errors") && kt(t, n, `Server response was missing for query '${Array.isArray(e) ? e.map(function(e) {
				return e.operationName;
			}) : e.operationName}'.`), n;
		});
	};
}
//#endregion
//#region node_modules/@apollo/client/link/http/serializeFetchParameter.js
var nn = function(e, t) {
	var n;
	try {
		n = JSON.stringify(e);
	} catch (e) {
		var r = B(54, t, e.message);
		throw r.parseError = e, r;
	}
	return n;
}, rn = {
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
}, an = function(e, t) {
	return t(e);
};
function on(e, t) {
	var n = [...arguments].slice(2), r = {}, i = {};
	n.forEach(function(e) {
		r = M(M(M({}, r), e.options), { headers: M(M({}, r.headers), e.headers) }), e.credentials && (r.credentials = e.credentials), i = M(M({}, i), e.http);
	}), r.headers && (r.headers = sn(r.headers, i.preserveHeaderCase));
	var a = e.operationName, o = e.extensions, s = e.variables, c = e.query, l = {
		operationName: a,
		variables: s
	};
	return i.includeExtensions && (l.extensions = o), i.includeQuery && (l.query = t(c, J)), {
		options: r,
		body: l
	};
}
function sn(e, t) {
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
var cn = function(e) {
	if (!e && typeof fetch > "u") throw B(51);
}, ln = function(e, t) {
	return e.getContext().uri || (typeof t == "function" ? t(e) : t || "/graphql");
};
//#endregion
//#region node_modules/@apollo/client/link/http/rewriteURIForGET.js
function un(e, t) {
	var n = [], r = function(e, t) {
		n.push(`${e}=${encodeURIComponent(t)}`);
	};
	if ("query" in t && r("query", t.query), t.operationName && r("operationName", t.operationName), t.variables) {
		var i = void 0;
		try {
			i = nn(t.variables, "Variables map");
		} catch (e) {
			return { parseError: e };
		}
		r("variables", i);
	}
	if (t.extensions) {
		var a = void 0;
		try {
			a = nn(t.extensions, "Extensions map");
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
var dn = De(function() {
	return fetch;
}), fn = function(e) {
	e === void 0 && (e = {});
	var t = e.uri, n = t === void 0 ? "/graphql" : t, r = e.fetch, i = e.print, a = i === void 0 ? an : i, o = e.includeExtensions, s = e.preserveHeaderCase, c = e.useGETForQueries, l = e.includeUnusedVariables, u = l === void 0 ? !1 : l, d = I(e, [
		"uri",
		"fetch",
		"print",
		"includeExtensions",
		"preserveHeaderCase",
		"useGETForQueries",
		"includeUnusedVariables"
	]);
	globalThis.__DEV__ !== !1 && cn(r || dn);
	var f = {
		http: {
			includeExtensions: o,
			preserveHeaderCase: s
		},
		options: d.fetchOptions,
		credentials: d.credentials,
		headers: d.headers
	};
	return new X(function(e) {
		var t = ln(e, n), i = e.getContext(), o = {};
		if (i.clientAwareness) {
			var s = i.clientAwareness, l = s.name, d = s.version;
			l && (o["apollographql-client-name"] = l), d && (o["apollographql-client-version"] = d);
		}
		var p = M(M({}, o), i.headers), m = {
			http: i.http,
			options: i.fetchOptions,
			credentials: i.credentials,
			headers: p
		};
		if (se(["client"], e.query)) {
			globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && R.warn(52);
			var h = ft(e.query);
			if (!h) return Ot(/* @__PURE__ */ Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
			e.query = h;
		}
		var g = on(e, a, rn, f, m), _ = g.options, v = g.body;
		v.variables && !u && (v.variables = Nt(v.variables, e.query));
		var y;
		!_.signal && typeof AbortController < "u" && (y = new AbortController(), _.signal = y.signal);
		var b = function(e) {
			return e.kind === "OperationDefinition" && e.operation === "mutation";
		}, x = function(e) {
			return e.kind === "OperationDefinition" && e.operation === "subscription";
		}(ge(e.query)), S = se(["defer"], e.query);
		if (c && !e.query.definitions.some(b) && (_.method = "GET"), S || x) {
			_.headers = _.headers || {};
			var C = "multipart/mixed;";
			x && S && globalThis.__DEV__ !== !1 && R.warn(53), x ? C += "boundary=graphql;subscriptionSpec=1.0,application/json" : S && (C += "deferSpec=20220824,application/json"), _.headers.accept = C;
		}
		if (_.method === "GET") {
			var w = un(t, v), T = w.newURI, E = w.parseError;
			if (E) return Ot(E);
			t = T;
		} else try {
			_.body = nn(v, "Payload");
		} catch (e) {
			return Ot(e);
		}
		return new z(function(n) {
			var i = r || De(function() {
				return fetch;
			}) || dn, a = n.next.bind(n);
			return i(t, _).then(function(t) {
				e.setContext({ response: t });
				var n = t.headers?.get("content-type");
				return n !== null && /^multipart\/mixed/i.test(n) ? Zt(t, a) : tn(e)(t).then(a);
			}).then(function() {
				y = void 0, n.complete();
			}).catch(function(e) {
				y = void 0, en(e, n);
			}), function() {
				y && y.abort();
			};
		});
	});
}, pn = function(e) {
	H(t, e);
	function t(t) {
		t === void 0 && (t = {});
		var n = e.call(this, fn(t).request) || this;
		return n.options = t, n;
	}
	return t;
}(X), mn = A ? WeakMap : Map, hn = d ? WeakSet : Set, gn = new pe(), _n = !1;
function vn() {
	_n || (_n = !0, globalThis.__DEV__ !== !1 && R.warn(64));
}
//#endregion
//#region node_modules/@apollo/client/masking/maskDefinition.js
function yn(e, t, n) {
	return gn.withValue(!0, function() {
		var r = xn(e, t, n, !1);
		return Object.isFrozen(e) && be(r), r;
	});
}
function bn(e, t) {
	if (t.has(e)) return t.get(e);
	var n = Array.isArray(e) ? [] : Object.create(null);
	return t.set(e, n), n;
}
function xn(e, t, n, r, i) {
	var a = n.knownChanged, o = bn(e, n.mutableTargets);
	if (Array.isArray(e)) {
		for (var s = 0, c = Array.from(e.entries()); s < c.length; s++) {
			var l = c[s], u = l[0], d = l[1];
			if (d === null) {
				o[u] = null;
				continue;
			}
			var f = xn(d, t, n, r, globalThis.__DEV__ === !1 ? void 0 : `${i || ""}[${u}]`);
			a.has(f) && a.add(o), o[u] = f;
		}
		return a.has(o) ? o : e;
	}
	for (var p = 0, m = t.selections; p < m.length; p++) {
		var h = m[p], g = void 0;
		if (r && a.add(o), h.kind === F.FIELD) {
			var _ = S(h), v = h.selectionSet;
			if (g = o[_] || e[_], g === void 0) continue;
			if (v && g !== null) {
				var f = xn(e[_], v, n, r, globalThis.__DEV__ === !1 ? void 0 : `${i || ""}.${_}`);
				a.has(f) && (g = f);
			}
			globalThis.__DEV__ === !1 && (o[_] = g), globalThis.__DEV__ !== !1 && (r && _ !== "__typename" && !Object.getOwnPropertyDescriptor(o, _)?.value ? Object.defineProperty(o, _, Sn(_, g, i || "", n.operationName, n.operationType)) : (delete o[_], o[_] = g));
		}
		if (h.kind === F.INLINE_FRAGMENT && (!h.typeCondition || n.cache.fragmentMatches(h, e.__typename)) && (g = xn(e, h.selectionSet, n, r, i)), h.kind === F.FRAGMENT_SPREAD) {
			var y = h.name.value, b = n.fragmentMap[y] || (n.fragmentMap[y] = n.cache.lookupFragment(y));
			R(b, 59, y);
			var x = je(h);
			x !== "mask" && (g = xn(e, b.selectionSet, n, x === "migrate", i));
		}
		a.has(g) && a.add(o);
	}
	return "__typename" in e && !("__typename" in o) && (o.__typename = e.__typename), Object.keys(o).length !== Object.keys(e).length && a.add(o), a.has(o) ? o : e;
}
function Sn(e, t, n, r, i) {
	var a = function() {
		return gn.getValue() ? t : (globalThis.__DEV__ !== !1 && R.warn(60, r ? `${i} '${r}'` : `anonymous ${i}`, `${n}.${e}`.replace(/^\./, "")), a = function() {
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
function Cn(e, t, n, r) {
	if (!n.fragmentMatches) return globalThis.__DEV__ !== !1 && vn(), e;
	var i = t.definitions.filter(function(e) {
		return e.kind === F.FRAGMENT_DEFINITION;
	});
	r === void 0 && (R(i.length === 1, 61, i.length), r = i[0].name.value);
	var a = i.find(function(e) {
		return e.name.value === r;
	});
	return R(!!a, 62, r), e == null || h(e, {}) ? e : yn(e, a.selectionSet, {
		operationType: "fragment",
		operationName: a.name.value,
		fragmentMap: ee(ve(t)),
		cache: n,
		mutableTargets: new mn(),
		knownChanged: new hn()
	});
}
//#endregion
//#region node_modules/@apollo/client/masking/maskOperation.js
function wn(e, t, n) {
	if (!n.fragmentMatches) return globalThis.__DEV__ !== !1 && vn(), e;
	var r = le(t);
	return R(r, 63), e == null ? e : yn(e, r.selectionSet, {
		operationType: r.operation,
		operationName: r.name?.value,
		fragmentMap: ee(ve(t)),
		cache: n,
		mutableTargets: new mn(),
		knownChanged: new hn()
	});
}
//#endregion
//#region node_modules/@apollo/client/cache/core/cache.js
var Tn = function() {
	function t() {
		this.assumeImmutableResults = !1, this.getFragmentDoc = we(i, {
			max: l["cache.fragmentQueryDocuments"] || 1e3,
			cache: y
		});
	}
	return t.prototype.lookupFragment = function(e) {
		return null;
	}, t.prototype.batch = function(e) {
		var t = this, n = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0, r;
		return this.performTransaction(function() {
			return r = e.update(t);
		}, n), r;
	}, t.prototype.recordOptimisticTransaction = function(e, t) {
		this.performTransaction(e, t);
	}, t.prototype.transformDocument = function(e) {
		return e;
	}, t.prototype.transformForLink = function(e) {
		return e;
	}, t.prototype.identify = function(e) {}, t.prototype.gc = function() {
		return [];
	}, t.prototype.modify = function(e) {
		return !1;
	}, t.prototype.readQuery = function(t, n) {
		var r = this;
		return n === void 0 && (n = !!t.optimistic), globalThis.__DEV__ !== !1 && e(t, "canonizeResults", "cache.readQuery"), j("canonizeResults", function() {
			return r.read(M(M({}, t), {
				rootId: t.id || "ROOT_QUERY",
				optimistic: n
			}));
		});
	}, t.prototype.watchFragment = function(e) {
		var t = this, n = e.fragment, r = e.fragmentName, i = e.from, a = e.optimistic, o = a === void 0 ? !0 : a, s = I(e, [
			"fragment",
			"fragmentName",
			"from",
			"optimistic"
		]), c = this.getFragmentDoc(n, r), l = i === void 0 || typeof i == "string" ? i : this.identify(i), u = !!e[Symbol.for("apollo.dataMasking")];
		if (globalThis.__DEV__ !== !1) {
			var d = r || Te(n).name.value;
			l || globalThis.__DEV__ !== !1 && R.warn(1, d);
		}
		var f = M(M({}, s), {
			returnPartialData: !0,
			id: l,
			query: c,
			optimistic: o
		}), p;
		return new z(function(i) {
			return t.watch(M(M({}, f), {
				immediate: !0,
				callback: function(a) {
					var o = u ? Cn(a.result, n, t, r) : a.result;
					if (!(p && re(c, { data: p.result }, { data: o }, e.variables))) {
						var s = {
							data: o,
							complete: !!a.complete
						};
						a.missing && (s.missing = gt(a.missing.map(function(e) {
							return e.missing;
						}))), p = M(M({}, a), { result: o }), i.next(s);
					}
				}
			}));
		});
	}, t.prototype.readFragment = function(t, n) {
		var r = this;
		return n === void 0 && (n = !!t.optimistic), globalThis.__DEV__ !== !1 && e(t, "canonizeResults", "cache.readFragment"), j("canonizeResults", function() {
			return r.read(M(M({}, t), {
				query: r.getFragmentDoc(t.fragment, t.fragmentName),
				rootId: t.id,
				optimistic: n
			}));
		});
	}, t.prototype.writeQuery = function(e) {
		var t = e.id, n = e.data, r = I(e, ["id", "data"]);
		return this.write(Object.assign(r, {
			dataId: t || "ROOT_QUERY",
			result: n
		}));
	}, t.prototype.writeFragment = function(e) {
		var t = e.id, n = e.data, r = e.fragment, i = e.fragmentName, a = I(e, [
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
	}, t.prototype.updateQuery = function(t, n) {
		return globalThis.__DEV__ !== !1 && e(t, "canonizeResults", "cache.updateQuery"), this.batch({ update: function(e) {
			var r = j("canonizeResults", function() {
				return e.readQuery(t);
			}), i = n(r);
			return i == null ? r : (e.writeQuery(M(M({}, t), { data: i })), i);
		} });
	}, t.prototype.updateFragment = function(t, n) {
		return globalThis.__DEV__ !== !1 && e(t, "canonizeResults", "cache.updateFragment"), this.batch({ update: function(e) {
			var r = j("canonizeResults", function() {
				return e.readFragment(t);
			}), i = n(r);
			return i == null ? r : (e.writeFragment(M(M({}, t), { data: i })), i);
		} });
	}, t;
}();
globalThis.__DEV__ !== !1 && (Tn.prototype.getMemoryInternals = xe);
//#endregion
//#region node_modules/@apollo/client/cache/core/types/common.js
var En = function(e) {
	H(t, e);
	function t(n, r, i, a) {
		var o, s = e.call(this, n) || this;
		if (s.message = n, s.path = r, s.query = i, s.variables = a, Array.isArray(s.path)) {
			s.missing = s.message;
			for (var c = s.path.length - 1; c >= 0; --c) s.missing = (o = {}, o[s.path[c]] = s.missing, o);
		} else s.missing = s.path;
		return s.__proto__ = t.prototype, s;
	}
	return t;
}(Error), Z = Object.prototype.hasOwnProperty;
function Dn(e) {
	return e == null;
}
function On(e, t) {
	var n = e.__typename, r = e.id, i = e._id;
	if (typeof n == "string" && (t && (t.keyObject = Dn(r) ? Dn(i) ? void 0 : { _id: i } : { id: r }), Dn(r) && !Dn(i) && (r = i), !Dn(r))) return `${n}:${typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r)}`;
}
var kn = {
	dataIdFromObject: On,
	addTypename: !0,
	resultCaching: !0,
	canonizeResults: !1
};
function An(e) {
	return Pe(kn, e);
}
function jn(e) {
	var t = e.canonizeResults;
	return t === void 0 ? kn.canonizeResults : t;
}
function Mn(e, t) {
	return c(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var Nn = /^[_a-z][_0-9a-z]*/i;
function Q(e) {
	var t = e.match(Nn);
	return t ? t[0] : e;
}
function Pn(e, t, n) {
	return p(t) ? V(t) ? t.every(function(t) {
		return Pn(e, t, n);
	}) : e.selections.every(function(e) {
		if (U(e) && oe(e, n)) {
			var r = S(e);
			return Z.call(t, r) && (!e.selectionSet || Pn(e.selectionSet, t[r], n));
		}
		return !0;
	}) : !1;
}
function Fn(e) {
	return p(e) && !c(e) && !V(e);
}
function In() {
	return new Y();
}
function Ln(e, t) {
	var n = ee(ve(e));
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
var Rn = Object.create(null), zn = function() {
	return Rn;
}, Bn = Object.create(null), Vn = function() {
	function e(e, t) {
		var n = this;
		this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
			return be(c(e) ? n.get(e.__ref, t) : e && e[t]);
		}, this.canRead = function(e) {
			return c(e) ? n.has(e.__ref) : typeof e == "object";
		}, this.toReference = function(e, t) {
			if (typeof e == "string") return s(e);
			if (c(e)) return e;
			var r = n.policies.identify(e)[0];
			if (r) {
				var i = s(r);
				return t && n.merge(r, e), i;
			}
		};
	}
	return e.prototype.toObject = function() {
		return M({}, this.data);
	}, e.prototype.has = function(e) {
		return this.lookup(e, !0) !== void 0;
	}, e.prototype.get = function(e, t) {
		if (this.group.depend(e, t), Z.call(this.data, e)) {
			var n = this.data[e];
			if (n && Z.call(n, t)) return n[t];
		}
		if (t === "__typename" && Z.call(this.policies.rootTypenamesById, e)) return this.policies.rootTypenamesById[e];
		if (this instanceof $) return this.parent.get(e, t);
	}, e.prototype.lookup = function(e, t) {
		if (t && this.group.depend(e, "__exists"), Z.call(this.data, e)) return this.data[e];
		if (this instanceof $) return this.parent.lookup(e, t);
		if (this.policies.rootTypenamesById[e]) return Object.create(null);
	}, e.prototype.merge = function(e, t) {
		var n = this, r;
		c(e) && (e = e.__ref), c(t) && (t = t.__ref);
		var i = typeof e == "string" ? this.lookup(r = e) : e, a = typeof t == "string" ? this.lookup(r = t) : t;
		if (a) {
			R(typeof r == "string", 2);
			var o = new Y(Kn).merge(i, a);
			if (this.data[r] = o, o !== i && (delete this.refs[r], this.group.caching)) {
				var s = Object.create(null);
				i || (s.__exists = 1), Object.keys(a).forEach(function(e) {
					if (!i || i[e] !== o[e]) {
						s[e] = 1;
						var t = Q(e);
						t !== e && !n.policies.hasKeyArgs(o.__typename, t) && (s[t] = 1), o[e] === void 0 && !(n instanceof $) && delete o[e];
					}
				}), s.__typename && !(i && i.__typename) && this.policies.rootTypenamesById[r] === o.__typename && delete s.__typename, Object.keys(s).forEach(function(e) {
					return n.group.dirty(r, e);
				});
			}
		}
	}, e.prototype.modify = function(e, t) {
		var n = this, r = this.lookup(e);
		if (r) {
			var i = Object.create(null), a = !1, o = !0, l = {
				DELETE: Rn,
				INVALIDATE: Bn,
				isReference: c,
				toReference: this.toReference,
				canRead: this.canRead,
				readField: function(t, r) {
					return n.policies.readField(typeof t == "string" ? {
						fieldName: t,
						from: r || s(e)
					} : t, { store: n });
				}
			};
			if (Object.keys(r).forEach(function(s) {
				var u = Q(s), d = r[s];
				if (d !== void 0) {
					var f = typeof t == "function" ? t : t[s] || t[u];
					if (f) {
						var p = f === zn ? Rn : f(be(d), M(M({}, l), {
							fieldName: u,
							storeFieldName: s,
							storage: n.getStorage(e, s)
						}));
						if (p === Bn) n.group.dirty(e, s);
						else if (p === Rn && (p = void 0), p !== d && (i[s] = p, a = !0, d = p, globalThis.__DEV__ !== !1)) {
							var m = function(e) {
								if (n.lookup(e.__ref) === void 0) return globalThis.__DEV__ !== !1 && R.warn(3, e), !0;
							};
							if (c(p)) m(p);
							else if (Array.isArray(p)) for (var h = !1, g = void 0, _ = 0, v = p; _ < v.length; _++) {
								var y = v[_];
								if (c(y)) {
									if (h = !0, m(y)) break;
								} else typeof y == "object" && y && n.policies.identify(y)[0] && (g = y);
								if (h && g !== void 0) {
									globalThis.__DEV__ !== !1 && R.warn(4, g);
									break;
								}
							}
						}
					}
					d !== void 0 && (o = !1);
				}
			}), a) return this.merge(e, i), o && (this instanceof $ ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
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
			return this.modify(e, o ? (r = {}, r[o] = zn, r) : zn);
		}
		return !1;
	}, e.prototype.evict = function(e, t) {
		var n = !1;
		return e.id && (Z.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof $ && this !== t && (n = this.parent.evict(e, t) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n;
	}, e.prototype.clear = function() {
		this.replace(null);
	}, e.prototype.extract = function() {
		var e = this, t = this.toObject(), n = [];
		return this.getRootIdSet().forEach(function(t) {
			Z.call(e.policies.rootTypenamesById, t) || n.push(t);
		}), n.length && (t.__META = { extraRootIds: n.sort() }), t;
	}, e.prototype.replace = function(e) {
		var t = this;
		if (Object.keys(this.data).forEach(function(n) {
			e && Z.call(e, n) || t.delete(n);
		}), e) {
			var n = e.__META, r = I(e, ["__META"]);
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
		return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof $ ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
	}, e.prototype.gc = function() {
		var e = this, t = this.getRootIdSet(), n = this.toObject();
		t.forEach(function(r) {
			Z.call(n, r) && (Object.keys(e.findChildRefIds(r)).forEach(t.add, t), delete n[r]);
		});
		var r = Object.keys(n);
		if (r.length) {
			for (var i = this; i instanceof $;) i = i.parent;
			r.forEach(function(e) {
				return i.delete(e);
			});
		}
		return r;
	}, e.prototype.findChildRefIds = function(e) {
		if (!Z.call(this.refs, e)) {
			var t = this.refs[e] = Object.create(null), n = this.data[e];
			if (!n) return t;
			var r = new Set([n]);
			r.forEach(function(e) {
				c(e) && (t[e.__ref] = !0), p(e) && Object.keys(e).forEach(function(t) {
					var n = e[t];
					p(n) && r.add(n);
				});
			});
		}
		return this.refs[e];
	}, e.prototype.makeCacheKey = function() {
		return this.group.keyMaker.lookupArray(arguments);
	}, e;
}(), Hn = function() {
	function e(e, t) {
		t === void 0 && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching();
	}
	return e.prototype.resetCaching = function() {
		this.d = this.caching ? Fe() : null, this.keyMaker = new v(A);
	}, e.prototype.depend = function(e, t) {
		if (this.d) {
			this.d(Un(e, t));
			var n = Q(t);
			n !== t && this.d(Un(e, n)), this.parent && this.parent.depend(e, t);
		}
	}, e.prototype.dirty = function(e, t) {
		this.d && this.d.dirty(Un(e, t), t === "__exists" ? "forget" : "setDirty");
	}, e;
}();
function Un(e, t) {
	return t + "#" + e;
}
function Wn(e, t) {
	qn(e) && e.group.depend(t, "__exists");
}
(function(e) {
	e.Root = function(e) {
		H(t, e);
		function t(t) {
			var n = t.policies, r = t.resultCaching, i = r === void 0 ? !0 : r, a = t.seed, o = e.call(this, n, new Hn(i)) || this;
			return o.stump = new Gn(o), o.storageTrie = new v(A), a && o.replace(a), o;
		}
		return t.prototype.addLayer = function(e, t) {
			return this.stump.addLayer(e, t);
		}, t.prototype.removeLayer = function() {
			return this;
		}, t.prototype.getStorage = function() {
			return this.storageTrie.lookupArray(arguments);
		}, t;
	}(e);
})(Vn || (Vn = {}));
var $ = function(e) {
	H(t, e);
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
				h(r[n], i[n]) || t.group.dirty(e, n);
			}) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach(function(n) {
				t.group.dirty(e, n);
			})) : t.delete(e);
		}), n) : n === this.parent ? this : n.addLayer(this.id, this.replay);
	}, t.prototype.toObject = function() {
		return M(M({}, this.parent.toObject()), this.data);
	}, t.prototype.findChildRefIds = function(t) {
		var n = this.parent.findChildRefIds(t);
		return Z.call(this.data, t) ? M(M({}, n), e.prototype.findChildRefIds.call(this, t)) : n;
	}, t.prototype.getStorage = function() {
		for (var e = this.parent; e.parent;) e = e.parent;
		return e.getStorage.apply(e, arguments);
	}, t;
}(Vn), Gn = function(e) {
	H(t, e);
	function t(t) {
		return e.call(this, "EntityStore.Stump", t, function() {}, new Hn(t.group.caching, t.group)) || this;
	}
	return t.prototype.removeLayer = function() {
		return this;
	}, t.prototype.merge = function(e, t) {
		return this.parent.merge(e, t);
	}, t;
}($);
function Kn(e, t, n) {
	var r = e[n], i = t[n];
	return h(r, i) ? r : i;
}
function qn(e) {
	return !!(e instanceof Vn && e.group.caching);
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/object-canon.js
function Jn(e) {
	return p(e) ? V(e) ? e.slice(0) : M({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Yn = function() {
	function e() {
		this.known = new (d ? WeakSet : Set)(), this.pool = new v(A), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
	}
	return e.prototype.isKnown = function(e) {
		return p(e) && this.known.has(e);
	}, e.prototype.pass = function(e) {
		if (p(e)) {
			var t = Jn(e);
			return this.passes.set(t, e), t;
		}
		return e;
	}, e.prototype.admit = function(e) {
		var t = this;
		if (p(e)) {
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
function Xn(e) {
	return [
		e.selectionSet,
		e.objectOrReference,
		e.context,
		e.context.canonizeResults
	];
}
var Zn = function() {
	function e(e) {
		var t = this;
		this.knownResults = new (A ? WeakMap : Map)(), this.config = Pe(e, {
			addTypename: e.addTypename !== !1,
			canonizeResults: jn(e)
		}), this.canon = e.canon || new Yn(), this.executeSelectionSet = we(function(e) {
			var n, r = e.context.canonizeResults, i = Xn(e);
			i[3] = !r;
			var a = (n = t.executeSelectionSet).peek.apply(n, i);
			return a ? r ? M(M({}, a), { result: t.canon.admit(a.result) }) : a : (Wn(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e));
		}, {
			max: this.config.resultCacheMaxSize || l["inMemoryCache.executeSelectionSet"] || 5e4,
			keyArgs: Xn,
			makeCacheKey: function(e, t, n, r) {
				if (qn(n.store)) return n.store.makeCacheKey(e, c(t) ? t.__ref : t, n.varString, r);
			}
		}), this.executeSubSelectedArray = we(function(e) {
			return Wn(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e);
		}, {
			max: this.config.resultCacheMaxSize || l["inMemoryCache.executeSubSelectedArray"] || 1e4,
			makeCacheKey: function(e) {
				var t = e.field, n = e.array, r = e.context;
				if (qn(r.store)) return r.store.makeCacheKey(t, n, r.varString);
			}
		});
	}
	return e.prototype.resetCanon = function() {
		this.canon = new Yn();
	}, e.prototype.diffQueryAgainstStore = function(e) {
		var t = e.store, r = e.query, i = e.rootId, a = i === void 0 ? "ROOT_QUERY" : i, o = e.variables, c = e.returnPartialData, l = c === void 0 ? !0 : c, u = e.canonizeResults, d = u === void 0 ? this.config.canonizeResults : u, f = this.config.cache.policies;
		o = M(M({}, ke(ze(r))), o);
		var p = s(a), m = this.executeSelectionSet({
			selectionSet: ge(r).selectionSet,
			objectOrReference: p,
			enclosingRef: p,
			context: M({
				store: t,
				query: r,
				policies: f,
				variables: o,
				varString: n(o),
				canonizeResults: d
			}, Ln(r, this.config.fragments))
		}), h;
		if (m.missing && (h = [new En(Qn(m.missing), m.missing, r, o)], !l)) throw h[0];
		return {
			result: m.result,
			complete: !h,
			missing: h
		};
	}, e.prototype.isFresh = function(e, t, n, r) {
		if (qn(r.store) && this.knownResults.get(e) === n) {
			var i = this.executeSelectionSet.peek(n, t, r, this.canon.isKnown(e));
			if (i && e === i.result) return !0;
		}
		return !1;
	}, e.prototype.execSelectionSetImpl = function(e) {
		var t = this, n = e.selectionSet, r = e.objectOrReference, i = e.enclosingRef, a = e.context;
		if (c(r) && !a.policies.rootTypenamesById[r.__ref] && !a.store.has(r.__ref)) return {
			result: this.canon.empty,
			missing: `Dangling reference to missing ${r.__ref} object`
		};
		var o = a.variables, s = a.policies, l = a.store.getFieldValue(r, "__typename"), u = [], d, f = new Y();
		this.config.addTypename && typeof l == "string" && !s.rootIdsByTypename[l] && u.push({ __typename: l });
		function p(e, t) {
			var n;
			return e.missing && (d = f.merge(d, (n = {}, n[t] = e.missing, n))), e.result;
		}
		var m = new Set(n.selections);
		m.forEach(function(e) {
			var n, h;
			if (oe(e, o)) if (U(e)) {
				var g = s.readField({
					fieldName: e.name.value,
					field: e,
					variables: a.variables,
					from: r
				}, a), _ = S(e);
				g === void 0 ? ut.added(e) || (d = f.merge(d, (n = {}, n[_] = `Can't find field '${e.name.value}' on ${c(r) ? r.__ref + " object" : "object " + JSON.stringify(r, null, 2)}`, n))) : V(g) ? g.length > 0 && (g = p(t.executeSubSelectedArray({
					field: e,
					array: g,
					enclosingRef: i,
					context: a
				}), _)) : e.selectionSet ? g != null && (g = p(t.executeSelectionSet({
					selectionSet: e.selectionSet,
					objectOrReference: g,
					enclosingRef: c(g) ? g : i,
					context: a
				}), _)) : a.canonizeResults && (g = t.canon.pass(g)), g !== void 0 && u.push((h = {}, h[_] = g, h));
			} else {
				var v = Ve(e, a.lookupFragment);
				if (!v && e.kind === F.FRAGMENT_SPREAD) throw B(10, e.name.value);
				v && s.fragmentMatches(v, l) && v.selectionSet.selections.forEach(m.add, m);
			}
		});
		var h = {
			result: gt(u),
			missing: d
		}, g = a.canonizeResults ? this.canon.admit(h) : be(h);
		return g.result && this.knownResults.set(g.result, n), g;
	}, e.prototype.execSubSelectedArrayImpl = function(e) {
		var t = this, n = e.field, r = e.array, i = e.enclosingRef, a = e.context, o, s = new Y();
		function l(e, t) {
			var n;
			return e.missing && (o = s.merge(o, (n = {}, n[t] = e.missing, n))), e.result;
		}
		return n.selectionSet && (r = r.filter(a.store.canRead)), r = r.map(function(e, r) {
			return e === null ? null : V(e) ? l(t.executeSubSelectedArray({
				field: n,
				array: e,
				enclosingRef: i,
				context: a
			}), r) : n.selectionSet ? l(t.executeSelectionSet({
				selectionSet: n.selectionSet,
				objectOrReference: e,
				enclosingRef: c(e) ? e : i,
				context: a
			}), r) : (globalThis.__DEV__ !== !1 && $n(a.store, n, e), e);
		}), {
			result: a.canonizeResults ? this.canon.admit(r) : r,
			missing: o
		};
	}, e;
}();
function Qn(e) {
	try {
		JSON.stringify(e, function(e, t) {
			if (typeof t == "string") throw t;
			return t;
		});
	} catch (e) {
		return e;
	}
}
function $n(e, t, n) {
	if (!t.selectionSet) {
		var r = new Set([n]);
		r.forEach(function(n) {
			p(n) && (R(!c(n), 11, Mn(e, n), t.name.value), Object.values(n).forEach(r.add, r));
		});
	}
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/reactiveVars.js
var er = new pe(), tr = /* @__PURE__ */ new WeakMap();
function nr(e) {
	var t = tr.get(e);
	return t || tr.set(e, t = {
		vars: /* @__PURE__ */ new Set(),
		dep: Fe()
	}), t;
}
function rr(e) {
	nr(e).vars.forEach(function(t) {
		return t.forgetCache(e);
	});
}
function ir(e) {
	nr(e).vars.forEach(function(t) {
		return t.attachCache(e);
	});
}
function ar(e) {
	var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = function(a) {
		if (arguments.length > 0) {
			if (e !== a) {
				e = a, t.forEach(function(e) {
					nr(e).dep.dirty(r), or(e);
				});
				var o = Array.from(n);
				n.clear(), o.forEach(function(t) {
					return t(e);
				});
			}
		} else {
			var s = er.getValue();
			s && (i(s), nr(s).dep(r));
		}
		return e;
	};
	r.onNextChange = function(e) {
		return n.add(e), function() {
			n.delete(e);
		};
	};
	var i = r.attachCache = function(e) {
		return t.add(e), nr(e).vars.add(r), r;
	};
	return r.forgetCache = function(e) {
		return t.delete(e);
	}, r;
}
function or(e) {
	e.broadcastWatches && e.broadcastWatches();
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/key-extractor.js
var sr = Object.create(null);
function cr(e) {
	var t = JSON.stringify(e);
	return sr[t] || (sr[t] = Object.create(null));
}
function lr(e) {
	var t = cr(e);
	return t.keyFieldsFn || (t.keyFieldsFn = function(t, n) {
		var r = function(e, t) {
			return n.readField(t, e);
		}, i = n.keyObject = dr(e, function(e) {
			var i = mr(n.storeObject, e, r);
			return i === void 0 && t !== n.storeObject && Z.call(t, e[0]) && (i = mr(t, e, pr)), R(i !== void 0, 5, e.join("."), t), i;
		});
		return `${n.typename}:${JSON.stringify(i)}`;
	});
}
function ur(e) {
	var t = cr(e);
	return t.keyArgsFn || (t.keyArgsFn = function(t, n) {
		var r = n.field, i = n.variables, a = n.fieldName, o = dr(e, function(e) {
			var n = e[0], a = n.charAt(0);
			if (a === "@") {
				if (r && N(r.directives)) {
					var o = n.slice(1), s = r.directives.find(function(e) {
						return e.name.value === o;
					}), c = s && fe(s, i);
					return c && mr(c, e.slice(1));
				}
				return;
			}
			if (a === "$") {
				var l = n.slice(1);
				if (i && Z.call(i, l)) {
					var u = e.slice(0);
					return u[0] = l, mr(i, u);
				}
				return;
			}
			if (t) return mr(t, e);
		}), s = JSON.stringify(o);
		return (t || s !== "{}") && (a += ":" + s), a;
	});
}
function dr(e, t) {
	var n = new Y();
	return fr(e).reduce(function(e, r) {
		var i, a = t(r);
		if (a !== void 0) {
			for (var o = r.length - 1; o >= 0; --o) a = (i = {}, i[r[o]] = a, i);
			e = n.merge(e, a);
		}
		return e;
	}, Object.create(null));
}
function fr(e) {
	var t = cr(e);
	if (!t.paths) {
		var n = t.paths = [], r = [];
		e.forEach(function(t, i) {
			V(t) ? (fr(t).forEach(function(e) {
				return n.push(r.concat(e));
			}), r.length = 0) : (r.push(t), V(e[i + 1]) || (n.push(r.slice(0)), r.length = 0));
		});
	}
	return t.paths;
}
function pr(e, t) {
	return e[t];
}
function mr(e, t, n) {
	return n = n || pr, hr(t.reduce(function e(t, r) {
		return V(t) ? t.map(function(t) {
			return e(t, r);
		}) : t && n(t, r);
	}, e));
}
function hr(e) {
	return p(e) ? V(e) ? e.map(hr) : dr(Object.keys(e).sort(), function(t) {
		return mr(e, t);
	}) : e;
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/policies.js
function gr(e) {
	return e.args === void 0 ? e.field ? fe(e.field, e.variables) : null : e.args;
}
var _r = function() {}, vr = function(e, t) {
	return t.fieldName;
}, yr = function(e, t, n) {
	var r = n.mergeObjects;
	return r(e, t);
}, br = function(e, t) {
	return t;
}, xr = function() {
	function e(e) {
		this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = M({ dataIdFromObject: On }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
	}
	return e.prototype.identify = function(e, t) {
		var n = this, r = t && (t.typename || t.storeObject?.__typename) || e.__typename;
		if (r === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
		var i = t && t.storeObject || e, a = M(M({}, t), {
			typename: r,
			storeObject: i,
			readField: t && t.readField || function() {
				var e = Cr(arguments, i);
				return n.readField(e, {
					store: n.cache.data,
					variables: e.variables
				});
			}
		}), o, s = r && this.getTypePolicy(r), c = s && s.keyFn || this.config.dataIdFromObject;
		return gn.withValue(!0, function() {
			for (; c;) {
				var t = c(M(M({}, e), i), a);
				if (V(t)) c = lr(t);
				else {
					o = t;
					break;
				}
			}
		}), o = o ? String(o) : void 0, a.keyObject ? [o, a.keyObject] : [o];
	}, e.prototype.addTypePolicies = function(e) {
		var t = this;
		Object.keys(e).forEach(function(n) {
			var r = e[n], i = r.queryType, a = r.mutationType, o = r.subscriptionType, s = I(r, [
				"queryType",
				"mutationType",
				"subscriptionType"
			]);
			i && t.setRootTypename("Query", n), a && t.setRootTypename("Mutation", n), o && t.setRootTypename("Subscription", n), Z.call(t.toBeAdded, n) ? t.toBeAdded[n].push(s) : t.toBeAdded[n] = [s];
		});
	}, e.prototype.updateTypePolicy = function(e, t, n) {
		var r = this.getTypePolicy(e), i = t.keyFields, a = t.fields;
		function o(e, t) {
			e.merge = typeof t == "function" ? t : t === !0 ? yr : t === !1 ? br : e.merge;
		}
		o(r, t.merge), r.keyFn = i === !1 ? _r : V(i) ? lr(i) : typeof i == "function" ? i : r.keyFn, a && Object.keys(a).forEach(function(t) {
			var r = n[t];
			(!r || r?.typename !== e) && (r = n[t] = { typename: e });
			var i = a[t];
			if (typeof i == "function") r.read = i;
			else {
				var s = i.keyArgs, c = i.read, l = i.merge;
				r.keyFn = s === !1 ? vr : V(s) ? ur(s) : typeof s == "function" ? s : r.keyFn, typeof c == "function" && (r.read = c), o(r, l);
			}
			r.read && r.merge && (r.keyFn = r.keyFn || vr);
		});
	}, e.prototype.setRootTypename = function(e, t) {
		t === void 0 && (t = e);
		var n = "ROOT_" + e.toUpperCase(), r = this.rootTypenamesById[n];
		t !== r && (R(!r || r === e, 6, e), r && delete this.rootIdsByTypename[r], this.rootIdsByTypename[t] = n, this.rootTypenamesById[n] = t);
	}, e.prototype.addPossibleTypes = function(e) {
		var t = this;
		this.usingPossibleTypes = !0, Object.keys(e).forEach(function(n) {
			t.getSupertypeSet(n, !0), e[n].forEach(function(e) {
				t.getSupertypeSet(e, !0).add(n);
				var r = e.match(Nn);
				(!r || r[0] !== e) && t.fuzzySubtypes.set(e, new RegExp(e));
			});
		});
	}, e.prototype.getTypePolicy = function(e) {
		var t = this;
		if (!Z.call(this.typePolicies, e)) {
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
				var r = t.getTypePolicy(e), i = r.fields, a = I(r, ["fields"]);
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
			if (f.has(a)) return o.has(a) || (u && globalThis.__DEV__ !== !1 && R.warn(7, t, a), o.add(a)), !0;
			f.forEach(c), l && d === s.length - 1 && Pn(e.selectionSet, n, r) && (l = !1, u = !0, this.fuzzySubtypes.forEach(function(e, n) {
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
		}, s = gr(e); a;) {
			var c = a(s, o);
			if (V(c)) a = ur(c);
			else {
				i = c || n;
				break;
			}
		}
		return i === void 0 && (i = e.field ? Ce(e.field, e.variables) : Re(n, gr(e))), i === !1 ? n : n === Q(i) ? i : n + ":" + i;
	}, e.prototype.readField = function(e, t) {
		var n = e.from;
		if (n && (e.field || e.fieldName)) {
			if (e.typename === void 0) {
				var r = t.store.getFieldValue(n, "__typename");
				r && (e.typename = r);
			}
			var i = this.getStoreFieldName(e), a = Q(i), o = t.store.getFieldValue(n, i), s = this.getFieldPolicy(e.typename, a), l = s && s.read;
			if (l) {
				var u = Sr(this, n, e, t, t.store.getStorage(c(n) ? n.__ref : n, i));
				return er.withValue(this.cache, l, [o, u]);
			}
			return o;
		}
	}, e.prototype.getReadFunction = function(e, t) {
		var n = this.getFieldPolicy(e, t);
		return n && n.read;
	}, e.prototype.getMergeFunction = function(e, t, n) {
		var r = this.getFieldPolicy(e, t), i = r && r.merge;
		return !i && n && (r = this.getTypePolicy(n), i = r && r.merge), i;
	}, e.prototype.runMergeFunction = function(e, t, n, r, i) {
		var a = n.field, o = n.typename, s = n.merge;
		return s === yr ? wr(r.store)(e, t) : s === br ? t : (r.overwrite && (e = void 0), s(e, t, Sr(this, void 0, {
			typename: o,
			fieldName: a.name.value,
			field: a,
			variables: r.variables
		}, r, i || Object.create(null))));
	}, e;
}();
function Sr(e, t, n, r, i) {
	var a = e.getStoreFieldName(n), o = Q(a), s = n.variables || r.variables, l = r.store, u = l.toReference, d = l.canRead;
	return {
		args: gr(n),
		field: n.field || null,
		fieldName: o,
		storeFieldName: a,
		variables: s,
		isReference: c,
		toReference: u,
		storage: i,
		cache: e.cache,
		canRead: d,
		readField: function() {
			return e.readField(Cr(arguments, t, s), r);
		},
		mergeObjects: wr(r.store)
	};
}
function Cr(e, t, n) {
	var r = e[0], i = e[1], a = e.length, o;
	return typeof r == "string" ? o = {
		fieldName: r,
		from: a > 1 ? i : t
	} : (o = M({}, r), Z.call(o, "from") || (o.from = t)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && R.warn(8, ye(Array.from(e))), o.variables === void 0 && (o.variables = n), o;
}
function wr(e) {
	return function(t, n) {
		if (V(t) || V(n)) throw B(9);
		if (p(t) && p(n)) {
			var r = e.getFieldValue(t, "__typename"), i = e.getFieldValue(n, "__typename");
			if (r && i && r !== i) return n;
			if (c(t) && Fn(n)) return e.merge(t.__ref, n), t;
			if (Fn(t) && c(n)) return e.merge(t, n.__ref), n;
			if (Fn(t) && Fn(n)) return M(M({}, t), n);
		}
		return n;
	};
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/writeToStore.js
function Tr(e, t, n) {
	var r = `${t}${n}`, i = e.flavors.get(r);
	return i || e.flavors.set(r, i = e.clientOnly === t && e.deferred === n ? e : M(M({}, e), {
		clientOnly: t,
		deferred: n
	})), i;
}
var Er = function() {
	function e(e, t, n) {
		this.cache = e, this.reader = t, this.fragments = n;
	}
	return e.prototype.writeToStore = function(e, t) {
		var r = this, i = t.query, a = t.result, o = t.dataId, l = t.variables, u = t.overwrite, d = le(i), f = In();
		l = M(M({}, ke(d)), l);
		var p = M(M({
			store: e,
			written: Object.create(null),
			merge: function(e, t) {
				return f.merge(e, t);
			},
			variables: l,
			varString: n(l)
		}, Ln(i, this.fragments)), {
			overwrite: !!u,
			incomingById: /* @__PURE__ */ new Map(),
			clientOnly: !1,
			deferred: !1,
			flavors: /* @__PURE__ */ new Map()
		}), m = this.processSelectionSet({
			result: a || Object.create(null),
			dataId: o,
			selectionSet: d.selectionSet,
			mergeTree: { map: /* @__PURE__ */ new Map() },
			context: p
		});
		if (!c(m)) throw B(12, a);
		return p.incomingById.forEach(function(t, n) {
			var i = t.storeObject, a = t.mergeTree, o = t.fieldNodeSet, l = s(n);
			if (a && a.map.size) {
				var u = r.applyMerges(a, l, i, p);
				if (c(u)) return;
				i = u;
			}
			if (globalThis.__DEV__ !== !1 && !p.overwrite) {
				var d = Object.create(null);
				o.forEach(function(e) {
					e.selectionSet && (d[e.name.value] = !0);
				});
				var f = function(e) {
					return d[Q(e)] === !0;
				}, m = function(e) {
					var t = a && a.map.get(e);
					return !!(t && t.info && t.info.merge);
				};
				Object.keys(i).forEach(function(e) {
					f(e) && !m(e) && Nr(l, i, e, p.store);
				});
			}
			e.merge(n, i);
		}), e.retain(m.__ref), m;
	}, e.prototype.processSelectionSet = function(e) {
		var t = this, n = e.dataId, r = e.result, i = e.selectionSet, a = e.context, o = e.mergeTree, l = this.cache.policies, u = Object.create(null), d = n && l.rootTypenamesById[n] || te(r, i, a.fragmentMap) || n && a.store.get(n, "__typename");
		typeof d == "string" && (u.__typename = d);
		var f = function() {
			var e = Cr(arguments, u, a.variables);
			if (c(e.from)) {
				var t = a.incomingById.get(e.from.__ref);
				if (t) {
					var n = l.readField(M(M({}, e), { from: t.storeObject }), a);
					if (n !== void 0) return n;
				}
			}
			return l.readField(e, a);
		}, p = /* @__PURE__ */ new Set();
		this.flattenFields(i, r, a, d).forEach(function(e, n) {
			var i, a = r[S(n)];
			if (p.add(n), a !== void 0) {
				var s = l.getStoreFieldName({
					typename: d,
					fieldName: n.name.value,
					field: n,
					variables: e.variables
				}), m = Or(o, s), h = t.processFieldValue(a, n, n.selectionSet ? Tr(e, !1, !1) : e, m), g = void 0;
				n.selectionSet && (c(h) || Fn(h)) && (g = f("__typename", h));
				var _ = l.getMergeFunction(d, n.name.value, g);
				_ ? m.info = {
					field: n,
					typename: d,
					merge: _
				} : jr(o, s), u = e.merge(u, (i = {}, i[s] = h, i));
			} else globalThis.__DEV__ !== !1 && !e.clientOnly && !e.deferred && !ut.added(n) && !l.getReadFunction(d, n.name.value) && globalThis.__DEV__ !== !1 && R.error(13, S(n), r);
		});
		try {
			var m = l.identify(r, {
				typename: d,
				selectionSet: i,
				fragmentMap: a.fragmentMap,
				storeObject: u,
				readField: f
			}), h = m[0], g = m[1];
			n = n || h, g && (u = a.merge(u, g));
		} catch (e) {
			if (!n) throw e;
		}
		if (typeof n == "string") {
			var _ = s(n), v = a.written[n] || (a.written[n] = []);
			if (v.indexOf(i) >= 0 || (v.push(i), this.reader && this.reader.isFresh(r, _, i, a))) return _;
			var y = a.incomingById.get(n);
			return y ? (y.storeObject = a.merge(y.storeObject, u), y.mergeTree = kr(y.mergeTree, o), p.forEach(function(e) {
				return y.fieldNodeSet.add(e);
			})) : a.incomingById.set(n, {
				storeObject: u,
				mergeTree: Ar(o) ? void 0 : o,
				fieldNodeSet: p
			}), _;
		}
		return u;
	}, e.prototype.processFieldValue = function(e, t, n, r) {
		var i = this;
		return !t.selectionSet || e === null ? globalThis.__DEV__ === !1 ? e : de(e) : V(e) ? e.map(function(e, a) {
			var o = i.processFieldValue(e, t, n, Or(r, a));
			return jr(r, a), o;
		}) : this.processSelectionSet({
			result: e,
			selectionSet: t.selectionSet,
			context: n,
			mergeTree: r
		});
	}, e.prototype.flattenFields = function(e, t, n, r) {
		r === void 0 && (r = te(t, e, n.fragmentMap));
		var i = /* @__PURE__ */ new Map(), a = this.cache.policies, o = new v(!1);
		return (function e(s, c) {
			var l = o.lookup(s, c.clientOnly, c.deferred);
			l.visited || (l.visited = !0, s.selections.forEach(function(o) {
				if (oe(o, n.variables)) {
					var s = c.clientOnly, l = c.deferred;
					if (!(s && l) && N(o.directives) && o.directives.forEach(function(e) {
						var t = e.name.value;
						if (t === "client" && (s = !0), t === "defer") {
							var r = fe(e, n.variables);
							(!r || r.if !== !1) && (l = !0);
						}
					}), U(o)) {
						var u = i.get(o);
						u && (s = s && u.clientOnly, l = l && u.deferred), i.set(o, Tr(n, s, l));
					} else {
						var d = Ve(o, n.lookupFragment);
						if (!d && o.kind === F.FRAGMENT_SPREAD) throw B(14, o.name.value);
						d && a.fragmentMatches(d, r, t, n.variables) && e(d.selectionSet, Tr(n, s, l));
					}
				}
			}));
		})(e, n), i;
	}, e.prototype.applyMerges = function(e, t, n, r, i) {
		var a, o = this;
		if (e.map.size && !c(n)) {
			var s = !V(n) && (c(t) || Fn(t)) ? t : void 0, l = n;
			s && !i && (i = [c(s) ? s.__ref : s]);
			var u, d = function(e, t) {
				return V(e) ? typeof t == "number" ? e[t] : void 0 : r.store.getFieldValue(e, String(t));
			};
			e.map.forEach(function(e, t) {
				var n = d(s, t), a = d(l, t);
				if (a !== void 0) {
					i && i.push(t);
					var c = o.applyMerges(e, n, a, r, i);
					c !== a && (u = u || /* @__PURE__ */ new Map(), u.set(t, c)), i && R(i.pop() === t);
				}
			}), u && (n = V(l) ? l.slice(0) : M({}, l), u.forEach(function(e, t) {
				n[t] = e;
			}));
		}
		return e.info ? this.cache.policies.runMergeFunction(t, n, e.info, r, i && (a = r.store).getStorage.apply(a, i)) : n;
	}, e;
}(), Dr = [];
function Or(e, t) {
	var n = e.map;
	return n.has(t) || n.set(t, Dr.pop() || { map: /* @__PURE__ */ new Map() }), n.get(t);
}
function kr(e, t) {
	if (e === t || !t || Ar(t)) return e;
	if (!e || Ar(e)) return t;
	var n = e.info && t.info ? M(M({}, e.info), t.info) : e.info || t.info, r = e.map.size && t.map.size, i = {
		info: n,
		map: r ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map
	};
	if (r) {
		var a = new Set(t.map.keys());
		e.map.forEach(function(e, n) {
			i.map.set(n, kr(e, t.map.get(n))), a.delete(n);
		}), a.forEach(function(n) {
			i.map.set(n, kr(t.map.get(n), e.map.get(n)));
		});
	}
	return i;
}
function Ar(e) {
	return !e || !(e.info || e.map.size);
}
function jr(e, t) {
	var n = e.map, r = n.get(t);
	r && Ar(r) && (Dr.push(r), n.delete(t));
}
var Mr = /* @__PURE__ */ new Set();
function Nr(e, t, n, r) {
	var i = function(e) {
		var t = r.getFieldValue(e, n);
		return typeof t == "object" && t;
	}, a = i(e);
	if (a) {
		var o = i(t);
		if (o && !c(a) && !h(a, o) && !Object.keys(a).every(function(e) {
			return r.getFieldValue(o, e) !== void 0;
		})) {
			var s = r.getFieldValue(e, "__typename") || r.getFieldValue(t, "__typename"), l = Q(n), u = `${s}.${l}`;
			if (!Mr.has(u)) {
				Mr.add(u);
				var d = [];
				!V(a) && !V(o) && [a, o].forEach(function(e) {
					var t = r.getFieldValue(e, "__typename");
					typeof t == "string" && !d.includes(t) && d.push(t);
				}), globalThis.__DEV__ !== !1 && R.warn(15, l, s, d.length ? "either ensure all objects of type " + d.join(" and ") + " have an ID or a custom merge function, or " : "", u, M({}, a), M({}, o));
			}
		}
	}
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
var Pr = function(t) {
	H(r, t);
	function r(n) {
		n === void 0 && (n = {});
		var r = t.call(this) || this;
		return r.watches = /* @__PURE__ */ new Set(), r.addTypenameTransform = new nt(ut), r.assumeImmutableResults = !0, r.makeVar = ar, r.txCount = 0, globalThis.__DEV__ !== !1 && (e(n, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`."), e(n, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.")), r.config = An(n), r.addTypename = !!r.config.addTypename, r.policies = new xr({
			cache: r,
			dataIdFromObject: r.config.dataIdFromObject,
			possibleTypes: r.config.possibleTypes,
			typePolicies: r.config.typePolicies
		}), r.init(), r;
	}
	return r.prototype.init = function() {
		var e = this.data = new Vn.Root({
			policies: this.policies,
			resultCaching: this.config.resultCaching
		});
		this.optimisticData = e.stump, this.resetResultCache();
	}, r.prototype.resetResultCache = function(e) {
		var t = this, r = this.storeReader, i = this.config.fragments;
		this.addTypenameTransform.resetCache(), i?.resetCaches(), this.storeWriter = new Er(this, this.storeReader = new Zn({
			cache: this,
			addTypename: this.addTypename,
			resultCacheMaxSize: this.config.resultCacheMaxSize,
			canonizeResults: jn(this.config),
			canon: e ? void 0 : r && r.canon,
			fragments: i
		}), i), this.maybeBroadcastWatch = we(function(e, n) {
			return t.broadcastWatch(e, n);
		}, {
			max: this.config.resultCacheMaxSize || l["inMemoryCache.maybeBroadcastWatch"] || 5e3,
			makeCacheKey: function(e) {
				var r = e.optimistic ? t.optimisticData : t.data;
				if (qn(r)) {
					var i = e.optimistic, a = e.id, o = e.variables;
					return r.makeCacheKey(e.query, e.callback, n({
						optimistic: i,
						id: a,
						variables: o
					}));
				}
			}
		}), new Set([this.data.group, this.optimisticData.group]).forEach(function(e) {
			return e.resetCaching();
		});
	}, r.prototype.restore = function(e) {
		return this.init(), e && this.data.replace(e), this;
	}, r.prototype.extract = function(e) {
		return e === void 0 && (e = !1), (e ? this.optimisticData : this.data).extract();
	}, r.prototype.read = function(t) {
		globalThis.__DEV__ !== !1 && e(t, "canonizeResults", "cache.read");
		var n = t.returnPartialData, r = n === void 0 ? !1 : n;
		try {
			return this.storeReader.diffQueryAgainstStore(M(M({}, t), {
				store: t.optimistic ? this.optimisticData : this.data,
				config: this.config,
				returnPartialData: r
			})).result || null;
		} catch (e) {
			if (e instanceof En) return null;
			throw e;
		}
	}, r.prototype.write = function(e) {
		try {
			return ++this.txCount, this.storeWriter.writeToStore(this.data, e);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, r.prototype.modify = function(e) {
		if (Z.call(e, "id") && !e.id) return !1;
		var t = e.optimistic ? this.optimisticData : this.data;
		try {
			return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, r.prototype.diff = function(t) {
		return globalThis.__DEV__ !== !1 && e(t, "canonizeResults", "cache.diff"), this.storeReader.diffQueryAgainstStore(M(M({}, t), {
			store: t.optimistic ? this.optimisticData : this.data,
			rootId: t.id || "ROOT_QUERY",
			config: this.config
		}));
	}, r.prototype.watch = function(e) {
		var t = this;
		return this.watches.size || ir(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e), function() {
			t.watches.delete(e) && !t.watches.size && rr(t), t.maybeBroadcastWatch.forget(e);
		};
	}, r.prototype.gc = function(t) {
		globalThis.__DEV__ !== !1 && e(t || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option."), n.reset(), J.reset();
		var r = this.optimisticData.gc();
		return t && !this.txCount && (t.resetResultCache ? this.resetResultCache(t.resetResultIdentities) : t.resetResultIdentities && this.storeReader.resetCanon()), r;
	}, r.prototype.retain = function(e, t) {
		return (t ? this.optimisticData : this.data).retain(e);
	}, r.prototype.release = function(e, t) {
		return (t ? this.optimisticData : this.data).release(e);
	}, r.prototype.identify = function(e) {
		if (c(e)) return e.__ref;
		try {
			return this.policies.identify(e)[0];
		} catch (e) {
			globalThis.__DEV__ !== !1 && R.warn(e);
		}
	}, r.prototype.evict = function(e) {
		if (!e.id) {
			if (Z.call(e, "id")) return !1;
			e = M(M({}, e), { id: "ROOT_QUERY" });
		}
		try {
			return ++this.txCount, this.optimisticData.evict(e, this.data);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, r.prototype.reset = function(e) {
		var t = this;
		return this.init(), n.reset(), e && e.discardWatches ? (this.watches.forEach(function(e) {
			return t.maybeBroadcastWatch.forget(e);
		}), this.watches.clear(), rr(this)) : this.broadcastWatches(), Promise.resolve();
	}, r.prototype.removeOptimistic = function(e) {
		var t = this.optimisticData.removeLayer(e);
		t !== this.optimisticData && (this.optimisticData = t, this.broadcastWatches());
	}, r.prototype.batch = function(e) {
		var t = this, n = e.update, r = e.optimistic, i = r === void 0 ? !0 : r, a = e.removeOptimistic, o = e.onWatchUpdated, s, c = function(e) {
			var r = t, i = r.data, a = r.optimisticData;
			++t.txCount, e && (t.data = t.optimisticData = e);
			try {
				return s = n(t);
			} finally {
				--t.txCount, t.data = i, t.optimisticData = a;
			}
		}, l = /* @__PURE__ */ new Set();
		return o && !this.txCount && this.broadcastWatches(M(M({}, e), { onWatchUpdated: function(e) {
			return l.add(e), !1;
		} })), typeof i == "string" ? this.optimisticData = this.optimisticData.addLayer(i, c) : i === !1 ? c(this.data) : c(), typeof a == "string" && (this.optimisticData = this.optimisticData.removeLayer(a)), o && l.size ? (this.broadcastWatches(M(M({}, e), { onWatchUpdated: function(e, t) {
			var n = o.call(this, e, t);
			return n !== !1 && l.delete(e), n;
		} })), l.size && l.forEach(function(e) {
			return t.maybeBroadcastWatch.dirty(e);
		})) : this.broadcastWatches(e), s;
	}, r.prototype.performTransaction = function(e, t) {
		return this.batch({
			update: e,
			optimistic: t || t !== null
		});
	}, r.prototype.transformDocument = function(e) {
		return this.addTypenameToDocument(this.addFragmentsToDocument(e));
	}, r.prototype.fragmentMatches = function(e, t) {
		return this.policies.fragmentMatches(e, t);
	}, r.prototype.lookupFragment = function(e) {
		return this.config.fragments?.lookup(e) || null;
	}, r.prototype.broadcastWatches = function(e) {
		var t = this;
		this.txCount || this.watches.forEach(function(n) {
			return t.maybeBroadcastWatch(n, e);
		});
	}, r.prototype.addFragmentsToDocument = function(e) {
		var t = this.config.fragments;
		return t ? t.transform(e) : e;
	}, r.prototype.addTypenameToDocument = function(e) {
		return this.addTypename ? this.addTypenameTransform.transformDocument(e) : e;
	}, r.prototype.broadcastWatch = function(e, t) {
		var n = this, r = e.lastDiff, i = j("canonizeResults", function() {
			return n.diff(e);
		});
		t && (e.optimistic && typeof t.optimistic == "string" && (i.fromOptimisticTransaction = !0), t.onWatchUpdated && t.onWatchUpdated.call(this, e, i, r) === !1) || (!r || !h(r.result, i.result)) && e.callback(e.lastDiff = i, r);
	}, r;
}(Tn);
globalThis.__DEV__ !== !1 && (Pr.prototype.getMemoryInternals = x);
//#endregion
//#region node_modules/@apollo/client/core/QueryInfo.js
var Fr = new (A ? WeakMap : Map)();
function Ir(e, t) {
	var n = e[t];
	typeof n == "function" && (e[t] = function() {
		return Fr.set(e, (Fr.get(e) + 1) % 0x38d7ea4c68000), n.apply(this, arguments);
	});
}
var Lr = function() {
	function e(e, t) {
		t === void 0 && (t = e.generateQueryId()), this.queryId = t, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
		var n = this.cache = e.cache;
		Fr.has(n) || (Fr.set(n, 0), Ir(n, "evict"), Ir(n, "modify"), Ir(n, "reset"));
	}
	return e.prototype.init = function(e) {
		var t = e.networkStatus || O.loading;
		return this.variables && this.networkStatus !== O.loading && !h(this.variables, e.variables) && (t = O.setVariables), h(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
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
		if (this.lastDiff && h(t, this.lastDiff.options)) return this.lastDiff.diff;
		this.updateWatch(this.variables);
		var n = this.observableQuery;
		if (n && n.options.fetchPolicy === "no-cache") return { complete: !1 };
		var r = j("canonizeResults", function() {
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
		e && !e.complete && j("getLastError", function() {
			return t.observableQuery?.getLastError();
		}) || (this.updateLastDiff(e), h(r && r.result, e && e.result) || (n = this.observableQuery) == null || n.scheduleNotify());
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
			var r = M(M({}, this.getDiffOptions(e)), {
				watcher: this,
				callback: function(e) {
					return t.setDiff(e);
				}
			});
			(!this.lastWatch || !h(r, this.lastWatch)) && (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = r));
		}
	}, e.prototype.resetLastWrite = function() {
		this.lastWrite = void 0;
	}, e.prototype.shouldWrite = function(e, t) {
		var n = this.lastWrite;
		return !(n && n.dmCount === Fr.get(this.cache) && h(t, n.variables) && h(e.data, n.result.data));
	}, e.prototype.markResult = function(e, t, n, r) {
		var i = this, a, o = new Y(), s = N(e.errors) ? e.errors.slice(0) : [];
		if ((a = this.observableQuery) == null || a.resetNotifications(), "incremental" in e && N(e.incremental)) e.data = Tt(this.getDiff().result, e);
		else if ("hasNext" in e && e.hasNext) {
			var c = this.getDiff();
			e.data = o.merge(c.result, e.data);
		}
		this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({
			result: e.data,
			complete: !0
		}, this.getDiffOptions(n.variables)) : r !== 0 && (Rr(e, n.errorPolicy) ? this.cache.performTransaction(function(a) {
			if (i.shouldWrite(e, n.variables)) a.writeQuery({
				query: t,
				data: e.data,
				variables: n.variables,
				overwrite: r === 1
			}), i.lastWrite = {
				result: e,
				variables: n.variables,
				dmCount: Fr.get(i.cache)
			};
			else if (i.lastDiff && i.lastDiff.diff.complete) {
				e.data = i.lastDiff.diff.result;
				return;
			}
			var o = i.getDiffOptions(n.variables), s = j("canonizeResults", function() {
				return a.diff(o);
			});
			!i.stopped && h(i.variables, n.variables) && i.updateWatch(n.variables), i.updateLastDiff(s, o), s.complete && (e.data = s.result);
		}) : this.lastWrite = void 0);
	}, e.prototype.markReady = function() {
		return this.networkError = null, this.networkStatus = O.ready;
	}, e.prototype.markError = function(e) {
		var t;
		return this.networkStatus = O.error, this.lastWrite = void 0, (t = this.observableQuery) == null || t.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
	}, e;
}();
function Rr(e, t) {
	t === void 0 && (t = "none");
	var n = t === "ignore" || t === "all", r = !Et(e);
	return !r && n && e.data && (r = !0), r;
}
//#endregion
//#region node_modules/@apollo/client/core/QueryManager.js
var zr = Object.prototype.hasOwnProperty, Br = Object.create(null), Vr = function() {
	function e(e) {
		var t = this;
		this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new m(l["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new v(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
		var n = new nt(function(e) {
			return t.cache.transformDocument(e);
		}, { cache: !1 });
		this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults, this.dataMasking = e.dataMasking;
		var r = e.documentTransform;
		this.documentTransform = r ? n.concat(r).concat(n) : n, this.defaultContext = e.defaultContext || Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = Object.create(null));
	}
	return e.prototype.stop = function() {
		var e = this;
		this.queries.forEach(function(t, n) {
			e.stopQueryNoBroadcast(n);
		}), this.cancelPendingFetches(B(35));
	}, e.prototype.cancelPendingFetches = function(e) {
		this.fetchCancelFns.forEach(function(t) {
			return t(e);
		}), this.fetchCancelFns.clear();
	}, e.prototype.mutate = function(e) {
		return L(this, arguments, void 0, function(e) {
			var t, n, r, i, a, o = e.mutation, s = e.variables, c = e.optimisticResponse, l = e.updateQueries, u = e.refetchQueries, d = u === void 0 ? [] : u, f = e.awaitRefetchQueries, p = f === void 0 ? !1 : f, m = e.update, h = e.onQueryUpdated, g = e.fetchPolicy, _ = g === void 0 ? this.defaultOptions.mutate?.fetchPolicy || "network-only" : g, v = e.errorPolicy, y = v === void 0 ? this.defaultOptions.mutate?.errorPolicy || "none" : v, b = e.keepRootFields, x = e.context;
			return P(this, function(e) {
				switch (e.label) {
					case 0: return R(o, 36), R(_ === "network-only" || _ === "no-cache", 37), t = this.generateMutationId(), o = this.cache.transformForLink(this.transform(o)), n = this.getDocumentInfo(o).hasClientExports, s = this.getVariables(o, s), n ? [4, this.localState.addExportedVariables(o, s, x)] : [3, 2];
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
						fetchPolicy: _,
						errorPolicy: y,
						context: x,
						updateQueries: l,
						update: m,
						keepRootFields: b
					}), this.broadcastQueries(), a = this, [2, new Promise(function(e, n) {
						return vt(a.getObservableFromLink(o, M(M({}, x), { optimisticResponse: i ? c : void 0 }), s, {}, !1), function(e) {
							if (Et(e) && y === "none") throw new k({ graphQLErrors: Dt(e) });
							r && (r.loading = !1, r.error = null);
							var n = M({}, e);
							return typeof d == "function" && (d = d(n)), y === "ignore" && Et(n) && delete n.errors, a.markMutationResult({
								mutationId: t,
								result: n,
								document: o,
								variables: s,
								fetchPolicy: _,
								errorPolicy: y,
								context: x,
								update: m,
								updateQueries: l,
								awaitRefetchQueries: p,
								refetchQueries: d,
								removeOptimistic: i ? t : void 0,
								onQueryUpdated: h,
								keepRootFields: b
							});
						}).subscribe({
							next: function(n) {
								a.broadcastQueries(), (!("hasNext" in n) || n.hasNext === !1) && e(M(M({}, n), { data: a.maskOperation({
									document: o,
									data: n.data,
									fetchPolicy: _,
									id: t
								}) }));
							},
							error: function(e) {
								r && (r.loading = !1, r.error = e), i && a.cache.removeOptimistic(t), a.broadcastQueries(), n(e instanceof k ? e : new k({ networkError: e }));
							}
						});
					})];
				}
			});
		});
	}, e.prototype.markMutationResult = function(e, t) {
		var n = this;
		t === void 0 && (t = this.cache);
		var r = e.result, i = [], a = e.fetchPolicy === "no-cache";
		if (!a && Rr(r, e.errorPolicy)) {
			if (xt(r) || i.push({
				result: r.data,
				dataId: "ROOT_MUTATION",
				query: e.document,
				variables: e.variables
			}), xt(r) && N(r.incremental)) {
				var o = t.diff({
					id: "ROOT_MUTATION",
					query: this.getDocumentInfo(e.document).asQuery,
					variables: e.variables,
					optimistic: !1,
					returnPartialData: !0
				}), s = void 0;
				o.result && (s = Tt(o.result, r)), s !== void 0 && (r.data = s, i.push({
					result: s,
					dataId: "ROOT_MUTATION",
					query: e.document,
					variables: e.variables
				}));
			}
			var c = e.updateQueries;
			c && this.queries.forEach(function(e, a) {
				var o = e.observableQuery, s = o && o.queryName;
				if (!(!s || !zr.call(c, s))) {
					var l = c[s], u = n.queries.get(a), d = u.document, f = u.variables, p = t.diff({
						query: d,
						variables: f,
						returnPartialData: !0,
						optimistic: !1
					}), m = p.result;
					if (p.complete && m) {
						var h = l(m, {
							mutationResult: r,
							queryName: d && Ie(d) || void 0,
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
					var o = e.update, s = !Ct(r) || xt(r) && !r.hasNext;
					if (o) {
						if (!a) {
							var c = t.diff({
								id: "ROOT_MUTATION",
								query: n.getDocumentInfo(e.document).asQuery,
								variables: e.variables,
								optimistic: !1,
								returnPartialData: !0
							});
							c.complete && (r = M(M({}, r), { data: c.result }), "incremental" in r && delete r.incremental, "hasNext" in r && delete r.hasNext);
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
	}, e.prototype.markMutationOptimistic = function(e, t) {
		var n = this, r = typeof e == "function" ? e(t.variables, { IGNORE: Br }) : e;
		return r === Br ? !1 : (this.cache.recordOptimisticTransaction(function(e) {
			try {
				n.markMutationResult(M(M({}, t), { result: { data: r } }), e);
			} catch (e) {
				globalThis.__DEV__ !== !1 && R.error(e);
			}
		}, t.mutationId), !0);
	}, e.prototype.fetchQuery = function(e, t, n) {
		return this.fetchConcastWithInfo(this.getOrCreateQuery(e), t, n).concast.promise;
	}, e.prototype.getQueryStore = function() {
		var e = Object.create(null);
		return this.queries.forEach(function(t, n) {
			e[n] = {
				variables: t.variables,
				networkStatus: t.networkStatus,
				networkError: t.networkError,
				graphQLErrors: t.graphQLErrors
			};
		}), e;
	}, e.prototype.resetErrors = function(e) {
		var t = this.queries.get(e);
		t && (t.networkError = void 0, t.graphQLErrors = []);
	}, e.prototype.transform = function(e) {
		return this.documentTransform.transformDocument(e);
	}, e.prototype.getDocumentInfo = function(e) {
		var t = this.transformCache;
		if (!t.has(e)) {
			var n = {
				hasClientExports: g(e),
				hasForcedResolvers: this.localState.shouldForceResolvers(e),
				hasNonreactiveDirective: se(["nonreactive"], e),
				nonReactiveQuery: pt(e),
				clientQuery: this.localState.clientQuery(e),
				serverQuery: lt([
					{
						name: "client",
						remove: !0
					},
					{ name: "connection" },
					{ name: "nonreactive" },
					{ name: "unmask" }
				], e),
				defaultVars: ke(le(e)),
				asQuery: M(M({}, e), { definitions: e.definitions.map(function(e) {
					return e.kind === "OperationDefinition" && e.operation !== "query" ? M(M({}, e), { operation: "query" }) : e;
				}) })
			};
			t.set(e, n);
		}
		return t.get(e);
	}, e.prototype.getVariables = function(e, t) {
		return M(M({}, this.getDocumentInfo(e).defaultVars), t);
	}, e.prototype.watchQuery = function(e) {
		var t = this.transform(e.query);
		e = M(M({}, e), { variables: this.getVariables(t, e.variables) }), e.notifyOnNetworkStatusChange === void 0 && (e.notifyOnNetworkStatusChange = !1);
		var n = new Lr(this), r = new Be({
			queryManager: this,
			queryInfo: n,
			options: e
		});
		return r.lastQuery = t, Be.inactiveOnCreation.getValue() || this.queries.set(r.queryId, n), n.init({
			document: t,
			observableQuery: r,
			variables: r.variables
		}), r;
	}, e.prototype.query = function(e, t) {
		var n = this;
		t === void 0 && (t = this.generateQueryId()), R(e.query, 38), R(e.query.kind === "Document", 39), R(!e.returnPartialData, 40), R(!e.pollInterval, 41);
		var r = this.transform(e.query);
		return this.fetchQuery(t, M(M({}, e), { query: r })).then(function(i) {
			return i && M(M({}, i), { data: n.maskOperation({
				document: r,
				data: i.data,
				fetchPolicy: e.fetchPolicy,
				id: t
			}) });
		}).finally(function() {
			return n.stopQuery(t);
		});
	}, e.prototype.generateQueryId = function() {
		return String(this.queryIdCounter++);
	}, e.prototype.generateRequestId = function() {
		return this.requestIdCounter++;
	}, e.prototype.generateMutationId = function() {
		return String(this.mutationIdCounter++);
	}, e.prototype.stopQueryInStore = function(e) {
		this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
	}, e.prototype.stopQueryInStoreNoBroadcast = function(e) {
		var t = this.queries.get(e);
		t && t.stop();
	}, e.prototype.clearStore = function(e) {
		return e === void 0 && (e = { discardWatches: !0 }), this.cancelPendingFetches(B(42)), this.queries.forEach(function(e) {
			e.observableQuery ? e.networkStatus = O.loading : e.stop();
		}), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e);
	}, e.prototype.getObservableQueries = function(e) {
		var t = this;
		e === void 0 && (e = "active");
		var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
		return Array.isArray(e) && e.forEach(function(e) {
			if (typeof e == "string") r.set(e, e), i.set(e, !1);
			else if (o(e)) {
				var n = J(t.transform(e));
				r.set(n, Ie(e)), i.set(n, !1);
			} else p(e) && e.query && a.add(e);
		}), this.queries.forEach(function(t, r) {
			var a = t.observableQuery, o = t.document;
			if (a) {
				if (e === "all") {
					n.set(r, a);
					return;
				}
				var s = a.queryName;
				if (a.options.fetchPolicy === "standby" || e === "active" && !a.hasObservers()) return;
				(e === "active" || s && i.has(s) || o && i.has(J(o))) && (n.set(r, a), s && i.set(s, !0), o && i.set(J(o), !0));
			}
		}), a.size && a.forEach(function(e) {
			var r = ue("legacyOneTimeQuery"), i = t.getOrCreateQuery(r).init({
				document: e.query,
				variables: e.variables
			}), a = new Be({
				queryManager: t,
				queryInfo: i,
				options: M(M({}, e), { fetchPolicy: "network-only" })
			});
			R(a.queryId === r), i.setObservableQuery(a), n.set(r, a);
		}), globalThis.__DEV__ !== !1 && i.size && i.forEach(function(e, t) {
			if (!e) {
				var n = r.get(t);
				n ? globalThis.__DEV__ !== !1 && R.warn(43, n) : globalThis.__DEV__ !== !1 && R.warn(44);
			}
		}), n;
	}, e.prototype.reFetchObservableQueries = function(e) {
		var t = this;
		e === void 0 && (e = !1);
		var n = [];
		return this.getObservableQueries(e ? "all" : "active").forEach(function(r, i) {
			var a = r.options.fetchPolicy;
			j("resetLastResults", function() {
				return r.resetLastResults();
			}), (e || a !== "standby" && a !== "cache-only") && n.push(r.refetch()), (t.queries.get(i) || r.queryInfo).setDiff(null);
		}), this.broadcastQueries(), Promise.all(n);
	}, e.prototype.startGraphQLSubscription = function(e) {
		var t = this, n = e.query, r = e.variables, i = e.fetchPolicy, a = e.errorPolicy, o = a === void 0 ? "none" : a, s = e.context, c = s === void 0 ? {} : s, l = e.extensions, d = l === void 0 ? {} : l;
		n = this.transform(n), r = this.getVariables(n, r);
		var f = function(e) {
			return t.getObservableFromLink(n, c, e, d).map(function(r) {
				i !== "no-cache" && (Rr(r, o) && t.cache.write({
					query: n,
					result: r.data,
					dataId: "ROOT_SUBSCRIPTION",
					variables: e
				}), t.broadcastQueries());
				var a = Et(r), s = _(r);
				if (a || s) {
					var c = {};
					if (a && (c.graphQLErrors = r.errors), s && (c.protocolErrors = r.extensions[u]), o === "none" || s) throw new k(c);
				}
				return o === "ignore" && delete r.errors, r;
			});
		};
		if (this.getDocumentInfo(n).hasClientExports) {
			var p = this.localState.addExportedVariables(n, r, c).then(f);
			return new z(function(e) {
				var t = null;
				return p.then(function(n) {
					return t = n.subscribe(e);
				}, e.error), function() {
					return t && t.unsubscribe();
				};
			});
		}
		return f(r);
	}, e.prototype.stopQuery = function(e) {
		this.stopQueryNoBroadcast(e), this.broadcastQueries();
	}, e.prototype.stopQueryNoBroadcast = function(e) {
		this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
	}, e.prototype.removeQuery = function(e) {
		var t;
		this.fetchCancelFns.delete(e), this.queries.has(e) && ((t = this.queries.get(e)) == null || t.stop(), this.queries.delete(e));
	}, e.prototype.broadcastQueries = function() {
		this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
			return e.observableQuery?.notify();
		});
	}, e.prototype.getLocalState = function() {
		return this.localState;
	}, e.prototype.getObservableFromLink = function(e, t, r, i, a) {
		var o = this;
		a === void 0 && (a = t?.queryDeduplication ?? this.queryDeduplication);
		var s, c = this.getDocumentInfo(e), l = c.serverQuery, u = c.clientQuery;
		if (l) {
			var d = this, f = d.inFlightLinkObservables, p = d.link, m = {
				query: l,
				variables: r,
				operationName: Ie(l) || void 0,
				context: this.prepareContext(M(M({}, t), { forceFetch: !a })),
				extensions: i
			};
			if (t = m.context, a) {
				var h = J(l), g = n(r), _ = f.lookup(h, g);
				if (s = _.observable, !s) {
					var v = new bt([Rt(p, m)]);
					s = _.observable = v, v.beforeNext(function e(t, n) {
						t === "next" && "hasNext" in n && n.hasNext ? v.beforeNext(e) : f.remove(h, g);
					});
				}
			} else s = new bt([Rt(p, m)]);
		} else s = new bt([z.of({ data: {} })]), t = this.prepareContext(t);
		return u && (s = vt(s, function(e) {
			return o.localState.runResolvers({
				document: u,
				remoteResult: e,
				context: t,
				variables: r
			});
		})), s;
	}, e.prototype.getResultsFromLink = function(e, t, n) {
		var r = e.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(n.query);
		return vt(this.getObservableFromLink(i, n.context, n.variables), function(a) {
			var o = Dt(a), s = o.length > 0, c = n.errorPolicy;
			if (r >= e.lastRequestId) {
				if (s && c === "none") throw e.markError(new k({ graphQLErrors: o }));
				e.markResult(a, i, n, t), e.markReady();
			}
			var l = {
				data: a.data,
				loading: !1,
				networkStatus: O.ready
			};
			return s && c === "none" && (l.data = void 0), s && c !== "ignore" && (l.errors = o, l.networkStatus = O.error), l;
		}, function(t) {
			var n = Ae(t) ? t : new k({ networkError: t });
			throw r >= e.lastRequestId && e.markError(n), n;
		});
	}, e.prototype.fetchConcastWithInfo = function(e, t, n, r) {
		var i = this;
		n === void 0 && (n = O.loading), r === void 0 && (r = t.query);
		var a = this.getVariables(r, t.variables), o = this.defaultOptions.watchQuery, s = t.fetchPolicy, c = s === void 0 ? o && o.fetchPolicy || "cache-first" : s, l = t.errorPolicy, u = l === void 0 ? o && o.errorPolicy || "none" : l, d = t.returnPartialData, f = d === void 0 ? !1 : d, p = t.notifyOnNetworkStatusChange, m = p === void 0 ? !1 : p, h = t.context, g = Object.assign({}, t, {
			query: r,
			variables: a,
			fetchPolicy: c,
			errorPolicy: u,
			returnPartialData: f,
			notifyOnNetworkStatusChange: m,
			context: h === void 0 ? {} : h
		}), _ = function(r) {
			g.variables = r;
			var a = i.fetchQueryByPolicy(e, g, n);
			return g.fetchPolicy !== "standby" && a.sources.length > 0 && e.observableQuery && e.observableQuery.applyNextFetchPolicy("after-fetch", t), a;
		}, v = function() {
			return i.fetchCancelFns.delete(e.queryId);
		};
		this.fetchCancelFns.set(e.queryId, function(e) {
			v(), setTimeout(function() {
				return y.cancel(e);
			});
		});
		var y, b;
		if (this.getDocumentInfo(g.query).hasClientExports) y = new bt(this.localState.addExportedVariables(g.query, g.variables, g.context).then(_).then(function(e) {
			return e.sources;
		})), b = !0;
		else {
			var x = _(g.variables);
			b = x.fromLink, y = new bt(x.sources);
		}
		return y.promise.then(v, v), {
			concast: y,
			fromLink: b
		};
	}, e.prototype.refetchQueries = function(e) {
		var t = this, n = e.updateCache, r = e.include, i = e.optimistic, a = i === void 0 ? !1 : i, o = e.removeOptimistic, s = o === void 0 ? a ? ue("refetchQueries") : void 0 : o, c = e.onQueryUpdated, l = /* @__PURE__ */ new Map();
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
				var r = e.watcher instanceof Lr && e.watcher.observableQuery;
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
			c && (a || (a = j("canonizeResults", function() {
				return t.cache.diff(r.queryInfo.getDiffOptions());
			})), o = c(r, a, i)), (!c || o === !0) && (o = r.refetch()), o !== !1 && u.set(r, o), n.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(n);
		}), s && this.cache.removeOptimistic(s), u;
	}, e.prototype.maskOperation = function(e) {
		var t = e.document, n = e.data;
		if (globalThis.__DEV__ !== !1) {
			var r = e.fetchPolicy, i = e.id, a = le(t)?.operation, o = (a?.[0] ?? "o") + i;
			this.dataMasking && r === "no-cache" && !ae(t) && !this.noCacheWarningsByQueryId.has(o) && (this.noCacheWarningsByQueryId.add(o), globalThis.__DEV__ !== !1 && R.warn(45, Ie(t) ?? `Unnamed ${a ?? "operation"}`));
		}
		return this.dataMasking ? wn(n, t, this.cache) : n;
	}, e.prototype.maskFragment = function(e) {
		var t = e.data, n = e.fragment, r = e.fragmentName;
		return this.dataMasking ? Cn(t, n, this.cache, r) : t;
	}, e.prototype.fetchQueryByPolicy = function(e, t, n) {
		var i = this, a = t.query, o = t.variables, s = t.fetchPolicy, c = t.refetchWritePolicy, l = t.errorPolicy, u = t.returnPartialData, d = t.context, p = t.notifyOnNetworkStatusChange, m = e.networkStatus;
		e.init({
			document: a,
			variables: o,
			networkStatus: n
		});
		var g = function() {
			return e.getDiff();
		}, _ = function(t, n) {
			n === void 0 && (n = e.networkStatus || O.loading);
			var s = t.result;
			globalThis.__DEV__ !== !1 && !u && !h(s, {}) && r(t.missing);
			var c = function(e) {
				return z.of(M({
					data: e,
					loading: f(n),
					networkStatus: n
				}, t.complete ? null : { partial: !0 }));
			};
			return s && i.getDocumentInfo(a).hasForcedResolvers ? i.localState.runResolvers({
				document: a,
				remoteResult: { data: s },
				context: d,
				variables: o,
				onlyRunForcedResolvers: !0
			}).then(function(e) {
				return c(e.data || void 0);
			}) : l === "none" && n === O.refetch && Array.isArray(t.missing) ? c(void 0) : c(s);
		}, v = s === "no-cache" ? 0 : n === O.refetch && c !== "merge" ? 1 : 2, y = function() {
			return i.getResultsFromLink(e, v, {
				query: a,
				variables: o,
				context: d,
				fetchPolicy: s,
				errorPolicy: l
			});
		}, b = p && typeof m == "number" && m !== n && f(n);
		switch (s) {
			default:
			case "cache-first":
				var x = g();
				return x.complete ? {
					fromLink: !1,
					sources: [_(x, e.markReady())]
				} : u || b ? {
					fromLink: !0,
					sources: [_(x), y()]
				} : {
					fromLink: !0,
					sources: [y()]
				};
			case "cache-and-network":
				var x = g();
				return x.complete || u || b ? {
					fromLink: !0,
					sources: [_(x), y()]
				} : {
					fromLink: !0,
					sources: [y()]
				};
			case "cache-only": return {
				fromLink: !1,
				sources: [_(g(), e.markReady())]
			};
			case "network-only": return b ? {
				fromLink: !0,
				sources: [_(g()), y()]
			} : {
				fromLink: !0,
				sources: [y()]
			};
			case "no-cache": return b ? {
				fromLink: !0,
				sources: [_(e.getDiff()), y()]
			} : {
				fromLink: !0,
				sources: [y()]
			};
			case "standby": return {
				fromLink: !1,
				sources: []
			};
		}
	}, e.prototype.getOrCreateQuery = function(e) {
		return e && !this.queries.has(e) && this.queries.set(e, new Lr(this, e)), this.queries.get(e);
	}, e.prototype.prepareContext = function(e) {
		e === void 0 && (e = {});
		var t = this.localState.prepareContext(e);
		return M(M(M({}, this.defaultContext), t), { clientAwareness: this.clientAwareness });
	}, e;
}(), Hr = function() {
	function e(e) {
		var t = e.cache, n = e.client, r = e.resolvers, i = e.fragmentMatcher;
		this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = t, n && (this.client = n), r && this.addResolvers(r), i && this.setFragmentMatcher(i);
	}
	return e.prototype.addResolvers = function(e) {
		var t = this;
		this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(e) {
			t.resolvers = ht(t.resolvers, e);
		}) : this.resolvers = ht(this.resolvers, e);
	}, e.prototype.setResolvers = function(e) {
		this.resolvers = {}, this.addResolvers(e);
	}, e.prototype.getResolvers = function() {
		return this.resolvers || {};
	}, e.prototype.runResolvers = function(e) {
		return L(this, arguments, void 0, function(e) {
			var t = e.document, n = e.remoteResult, r = e.context, i = e.variables, a = e.onlyRunForcedResolvers, o = a === void 0 ? !1 : a;
			return P(this, function(e) {
				return t ? [2, this.resolveDocument(t, n.data, r, i, this.fragmentMatcher, o).then(function(e) {
					return M(M({}, n), { data: e.result });
				})] : [2, n];
			});
		});
	}, e.prototype.setFragmentMatcher = function(e) {
		this.fragmentMatcher = e;
	}, e.prototype.getFragmentMatcher = function() {
		return this.fragmentMatcher;
	}, e.prototype.clientQuery = function(e) {
		return se(["client"], e) && this.resolvers ? e : null;
	}, e.prototype.serverQuery = function(e) {
		return ft(e);
	}, e.prototype.prepareContext = function(e) {
		var t = this.cache;
		return M(M({}, e), {
			cache: t,
			getCacheKey: function(e) {
				return t.identify(e);
			}
		});
	}, e.prototype.addExportedVariables = function(e) {
		return L(this, arguments, void 0, function(e, t, n) {
			return t === void 0 && (t = {}), n === void 0 && (n = {}), P(this, function(r) {
				return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(n), t).then(function(e) {
					return M(M({}, t), e.exportedVariables);
				})] : [2, M({}, t)];
			});
		});
	}, e.prototype.shouldForceResolvers = function(e) {
		var t = !1;
		return E(e, { Directive: { enter: function(e) {
			if (e.name.value === "client" && e.arguments && (t = e.arguments.some(function(e) {
				return e.name.value === "always" && e.value.kind === "BooleanValue" && e.value.value === !0;
			}), t)) return ce;
		} } }), t;
	}, e.prototype.buildRootValueFromCache = function(e, t) {
		return this.cache.diff({
			query: dt(e),
			variables: t,
			returnPartialData: !0,
			optimistic: !1
		}).result;
	}, e.prototype.resolveDocument = function(e, t) {
		return L(this, arguments, void 0, function(e, t, n, r, i, a) {
			var o, s, c, l, u, d, f, p, m, h, g;
			return n === void 0 && (n = {}), r === void 0 && (r = {}), i === void 0 && (i = function() {
				return !0;
			}), a === void 0 && (a = !1), P(this, function(_) {
				return o = ge(e), s = ve(e), c = ee(s), l = this.collectSelectionsToResolve(o, c), u = o.operation, d = u ? u.charAt(0).toUpperCase() + u.slice(1) : "Query", f = this, p = f.cache, m = f.client, h = {
					fragmentMap: c,
					context: M(M({}, n), {
						cache: p,
						client: m
					}),
					variables: r,
					fragmentMatcher: i,
					defaultOperationType: d,
					exportedVariables: {},
					selectionsToResolve: l,
					onlyRunForcedResolvers: a
				}, g = !1, [2, this.resolveSelectionSet(o.selectionSet, g, t, h).then(function(e) {
					return {
						result: e,
						exportedVariables: h.exportedVariables
					};
				})];
			});
		});
	}, e.prototype.resolveSelectionSet = function(e, t, n, r) {
		return L(this, void 0, void 0, function() {
			var i, a, o, s, c, l = this;
			return P(this, function(u) {
				return i = r.fragmentMap, a = r.context, o = r.variables, s = [n], c = function(e) {
					return L(l, void 0, void 0, function() {
						var c, l;
						return P(this, function(u) {
							return !t && !r.selectionsToResolve.has(e) || !oe(e, o) ? [2] : U(e) ? [2, this.resolveField(e, t, n, r).then(function(t) {
								var n;
								t !== void 0 && s.push((n = {}, n[S(e)] = t, n));
							})] : (ne(e) ? c = e : (c = i[e.name.value], R(c, 21, e.name.value)), c && c.typeCondition && (l = c.typeCondition.name.value, r.fragmentMatcher(n, l, a)) ? [2, this.resolveSelectionSet(c.selectionSet, t, n, r).then(function(e) {
								s.push(e);
							})] : [2]);
						});
					});
				}, [2, Promise.all(e.selections.map(c)).then(function() {
					return gt(s);
				})];
			});
		});
	}, e.prototype.resolveField = function(e, t, n, r) {
		return L(this, void 0, void 0, function() {
			var i, a, o, s, c, l, u, d, f, p = this;
			return P(this, function(m) {
				return n ? (i = r.variables, a = e.name.value, o = S(e), s = a !== o, c = n[o] || n[a], l = Promise.resolve(c), (!r.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (u = n.__typename || r.defaultOperationType, d = this.resolvers && this.resolvers[u], d && (f = d[s ? a : o], f && (l = Promise.resolve(er.withValue(this.cache, f, [
					n,
					fe(e, i),
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
	}, e.prototype.resolveSubSelectedArray = function(e, t, n, r) {
		var i = this;
		return Promise.all(n.map(function(n) {
			if (n === null) return null;
			if (Array.isArray(n)) return i.resolveSubSelectedArray(e, t, n, r);
			if (e.selectionSet) return i.resolveSelectionSet(e.selectionSet, t, n, r);
		}));
	}, e.prototype.collectSelectionsToResolve = function(e, t) {
		var n = function(e) {
			return !Array.isArray(e);
		}, r = this.selectionsToResolveCache;
		function i(e) {
			if (!r.has(e)) {
				var a = /* @__PURE__ */ new Set();
				r.set(e, a), E(e, {
					Directive: function(e, t, r, i, o) {
						e.name.value === "client" && o.forEach(function(e) {
							n(e) && et(e) && a.add(e);
						});
					},
					FragmentSpread: function(e, r, o, s, c) {
						var l = t[e.name.value];
						R(l, 22, e.name.value);
						var u = i(l);
						u.size > 0 && (c.forEach(function(e) {
							n(e) && et(e) && a.add(e);
						}), a.add(e), u.forEach(function(e) {
							a.add(e);
						}));
					}
				});
			}
			return r.get(e);
		}
		return i(e);
	}, e;
}(), Ur = !1, Wr = function() {
	function t(t) {
		var n = this;
		if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !t.cache) throw B(16);
		var r = t.uri, i = t.credentials, a = t.headers, o = t.cache, s = t.documentTransform, c = t.ssrMode, l = c === void 0 ? !1 : c, u = t.ssrForceFetchDelay, d = u === void 0 ? 0 : u, f = t.connectToDevTools, p = t.queryDeduplication, m = p === void 0 ? !0 : p, h = t.defaultOptions, g = t.defaultContext, _ = t.assumeImmutableResults, v = _ === void 0 ? o.assumeImmutableResults : _, y = t.resolvers, b = t.typeDefs, x = t.fragmentMatcher, S = t.clientAwareness, C = t.name, w = t.version, T = t.devtools, E = t.dataMasking;
		globalThis.__DEV__ !== !1 && (e(t, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead."), e(t, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead."), e(t, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead."), e(t, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead."), e(t, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead."), e(t, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead."), e(t, "typeDefs", "ApolloClient"), t.link || globalThis.__DEV__ !== !1 && R.warn(17));
		var D = t.link;
		D || (D = r ? new pn({
			uri: r,
			credentials: i,
			headers: a
		}) : X.empty()), this.link = D, this.cache = o, this.disableNetworkFetches = l || d > 0, this.queryDeduplication = m, this.defaultOptions = h || Object.create(null), this.typeDefs = b, this.devtoolsConfig = M(M({}, T), { enabled: T?.enabled ?? f }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), d && setTimeout(function() {
			return n.disableNetworkFetches = !1;
		}, d), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = Ne, this.localState = new Hr({
			cache: o,
			client: this,
			resolvers: y,
			fragmentMatcher: x
		}), this.queryManager = new Vr({
			cache: this.cache,
			link: this.link,
			defaultOptions: this.defaultOptions,
			defaultContext: g,
			documentTransform: s,
			queryDeduplication: m,
			ssrMode: l,
			dataMasking: !!E,
			clientAwareness: {
				name: S?.name ?? C,
				version: S?.version ?? w
			},
			localState: this.localState,
			assumeImmutableResults: v,
			onBroadcast: this.devtoolsConfig.enabled ? function() {
				n.devToolsHookCb && n.devToolsHookCb({
					action: {},
					state: {
						queries: n.queryManager.getQueryStore(),
						mutations: n.queryManager.mutationStore || {}
					},
					dataWithOptimisticResults: n.cache.extract(!0)
				});
			} : void 0
		}), this.devtoolsConfig.enabled && this.connectToDevTools();
	}
	return Object.defineProperty(t.prototype, "prioritizeCacheValues", {
		get: function() {
			return this.disableNetworkFetches;
		},
		set: function(e) {
			this.disableNetworkFetches = e;
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype.connectToDevTools = function() {
		if (!(typeof window > "u")) {
			var e = window, t = Symbol.for("apollo.devtools");
			(e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, !Ur && globalThis.__DEV__ !== !1 && (Ur = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
				if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
					var e = window.navigator, t = e && e.userAgent, n = void 0;
					typeof t == "string" && (t.indexOf("Chrome/") > -1 ? n = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : t.indexOf("Firefox/") > -1 && (n = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), n && globalThis.__DEV__ !== !1 && R.log("Download the Apollo DevTools for a better development experience: %s", n);
				}
			}, 1e4));
		}
	}, Object.defineProperty(t.prototype, "documentTransform", {
		get: function() {
			return this.queryManager.documentTransform;
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype.stop = function() {
		this.queryManager.stop();
	}, t.prototype.watchQuery = function(t) {
		return this.defaultOptions.watchQuery && (t = me(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = M(M({}, t), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (e(t, "canonizeResults", "client.watchQuery"), e(t, "partialRefetch", "client.watchQuery")), this.queryManager.watchQuery(t);
	}, t.prototype.query = function(t) {
		return this.defaultOptions.query && (t = me(this.defaultOptions.query, t)), R(t.fetchPolicy !== "cache-and-network", 18), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = M(M({}, t), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (e(t, "canonizeResults", "client.query"), e(t, "notifyOnNetworkStatusChange", "client.query", "This option does not affect `client.query` and can be safely removed."), t.fetchPolicy === "standby" && globalThis.__DEV__ !== !1 && R.warn(19)), this.queryManager.query(t);
	}, t.prototype.mutate = function(e) {
		return this.defaultOptions.mutate && (e = me(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
	}, t.prototype.subscribe = function(e) {
		var t = this, n = this.queryManager.generateQueryId();
		return this.queryManager.startGraphQLSubscription(e).map(function(r) {
			return M(M({}, r), { data: t.queryManager.maskOperation({
				document: e.query,
				data: r.data,
				fetchPolicy: e.fetchPolicy,
				id: n
			}) });
		});
	}, t.prototype.readQuery = function(e, t) {
		return t === void 0 && (t = !1), this.cache.readQuery(e, t);
	}, t.prototype.watchFragment = function(e) {
		var t;
		return this.cache.watchFragment(M(M({}, e), (t = {}, t[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, t)));
	}, t.prototype.readFragment = function(e, t) {
		return t === void 0 && (t = !1), this.cache.readFragment(e, t);
	}, t.prototype.writeQuery = function(e) {
		var t = this.cache.writeQuery(e);
		return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
	}, t.prototype.writeFragment = function(e) {
		var t = this.cache.writeFragment(e);
		return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
	}, t.prototype.__actionHookForDevTools = function(e) {
		this.devToolsHookCb = e;
	}, t.prototype.__requestRaw = function(e) {
		return Rt(this.link, e);
	}, t.prototype.resetStore = function() {
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
	}, t.prototype.clearStore = function() {
		var e = this;
		return Promise.resolve().then(function() {
			return e.queryManager.clearStore({ discardWatches: !0 });
		}).then(function() {
			return Promise.all(e.clearStoreCallbacks.map(function(e) {
				return e();
			}));
		});
	}, t.prototype.onResetStore = function(e) {
		var t = this;
		return this.resetStoreCallbacks.push(e), function() {
			t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(t) {
				return t !== e;
			});
		};
	}, t.prototype.onClearStore = function(e) {
		var t = this;
		return this.clearStoreCallbacks.push(e), function() {
			t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(t) {
				return t !== e;
			});
		};
	}, t.prototype.reFetchObservableQueries = function(e) {
		return this.queryManager.reFetchObservableQueries(e);
	}, t.prototype.refetchQueries = function(e) {
		var t = this.queryManager.refetchQueries(e), n = [], r = [];
		t.forEach(function(e, t) {
			n.push(t), r.push(e);
		});
		var i = Promise.all(r);
		return i.queries = n, i.results = r, i.catch(function(e) {
			globalThis.__DEV__ !== !1 && R.debug(20, e);
		}), i;
	}, t.prototype.getObservableQueries = function(e) {
		return e === void 0 && (e = "active"), this.queryManager.getObservableQueries(e);
	}, t.prototype.extract = function(e) {
		return this.cache.extract(e);
	}, t.prototype.restore = function(e) {
		return this.cache.restore(e);
	}, t.prototype.addResolvers = function(e) {
		this.localState.addResolvers(e);
	}, t.prototype.setResolvers = function(e) {
		this.localState.setResolvers(e);
	}, t.prototype.getResolvers = function() {
		return this.localState.getResolvers();
	}, t.prototype.setLocalStateFragmentMatcher = function(e) {
		this.localState.setFragmentMatcher(e);
	}, t.prototype.setLink = function(e) {
		this.link = this.queryManager.link = e;
	}, Object.defineProperty(t.prototype, "defaultContext", {
		get: function() {
			return this.queryManager.defaultContext;
		},
		enumerable: !1,
		configurable: !0
	}), t;
}();
globalThis.__DEV__ !== !1 && (Wr.prototype.getMemoryInternals = b);
//#endregion
//#region node_modules/@apollo/client/link/context/index.js
function Gr(e) {
	return new X(function(t, n) {
		var r = I(t, []);
		return new z(function(i) {
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
function Kr(e) {
	return new X(function(t, n) {
		return new z(function(r) {
			var i, a, o;
			try {
				i = n(t).subscribe({
					next: function(i) {
						if (i.errors ? o = e({
							graphQLErrors: i.errors,
							response: i,
							operation: t,
							forward: n
						}) : _(i) && (o = e({
							protocolErrors: i.extensions[u],
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
	H(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n.link = Kr(t), n;
	}
	return t.prototype.request = function(e, t) {
		return this.link.request(e, t);
	}, t;
})(X);
//#endregion
//#region lib/apollo-client.ts
var qr = null, Jr = null;
function Yr(e) {
	qr = e;
}
function Xr() {
	return qr;
}
var Zr = null;
function Qr(e) {
	Zr = e;
}
var $r = null;
function ei(e) {
	$r = e;
}
var ti = new Set([
	"StartAnonymousVisitor",
	"StartIdentifiedVisitor",
	"VisitorPasskeyRegistrationOptions",
	"VerifyVisitorPasskeyRegistration",
	"VisitorPasskeyAuthenticationOptions",
	"VerifyVisitorPasskeyAuthentication"
]);
function ni(e) {
	Jr = e;
}
function ri() {
	return Jr;
}
var ii = null;
function ai() {
	if (ii) return ii;
	let e = new pn({
		uri: `${Le()}/graphql`,
		credentials: "omit"
	}), t = Gr((e, { headers: t }) => ({ headers: {
		...t,
		...Jr ? { "x-web-public-key": Jr } : {},
		...qr ? { authorization: `Bearer ${qr}` } : {}
	} }));
	return ii = new Wr({
		link: Lt([
			Kr(({ operation: e, graphQLErrors: t, networkError: n }) => {
				if (ti.has(e.operationName)) return;
				let r = n && "statusCode" in n ? n.statusCode : void 0;
				if ((t ?? []).some((e) => {
					let t = e.extensions;
					if (t?.code === "webIntegrationMismatch") return !0;
					let n = t?.response?.message;
					return !!(typeof n == "string" && n.includes("webIntegrationMismatch") || Array.isArray(n) && n.some((e) => typeof e == "string" && e.includes("webIntegrationMismatch")));
				})) {
					$r?.();
					return;
				}
				(r === 401 || (t ?? []).some((e) => {
					let t = e.extensions;
					return t?.code === "UNAUTHENTICATED" || t?.response?.statusCode === 401 || e.message === "Unauthorized";
				})) && Zr?.();
			}),
			t,
			e
		]),
		cache: new Pr({ typePolicies: {} }),
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
	}), ii;
}
//#endregion
//#region dummy/help.ts
var oi = [
	"demo-cat-getting-started",
	"demo-cat-automation",
	"demo-cat-integrations",
	"demo-cat-billing"
];
function si(e) {
	return oi.map((t) => ({
		id: t,
		articleCount: ci.filter((e) => e.categoryId === t).length,
		title: e.raw(`help.categories.${t}.title`),
		description: e.raw(`help.categories.${t}.description`)
	}));
}
var ci = [
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
function li(e) {
	return ci.map(({ authorIds: t, tagSlugs: n, ...r }) => ({
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
var ui = Symbol.for("react.lazy"), di = W.use;
function fi(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function pi(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === ui && "_payload" in e && fi(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function mi(e) {
	let t = /* @__PURE__ */ gi(e), n = W.forwardRef((e, n) => {
		let { children: r, ...i } = e;
		pi(r) && typeof di == "function" && (r = di(r._payload));
		let a = W.Children.toArray(r), o = a.find(vi);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? W.Children.count(e) > 1 ? W.Children.only(null) : W.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ We(t, {
				...i,
				ref: n,
				children: W.isValidElement(e) ? W.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ We(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
var hi = /* @__PURE__ */ mi("Slot");
/* @__NO_SIDE_EFFECTS__ */
function gi(e) {
	let t = W.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (pi(n) && typeof di == "function" && (n = di(n._payload)), W.isValidElement(n)) {
			let e = bi(n), i = yi(r, n.props);
			return n.type !== W.Fragment && (i.ref = t ? _e(t, e) : e), W.cloneElement(n, i);
		}
		return W.Children.count(n) > 1 ? W.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var _i = Symbol("radix.slottable");
function vi(e) {
	return W.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _i;
}
function yi(e, t) {
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
function bi(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var xi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Si = Ue, Ci = ((e, t) => (n) => {
	if (t?.variants == null) return Si(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = xi(t) || xi(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Si(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}), wi = W.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) => /* @__PURE__ */ We(r ? hi : "button", {
	ref: a,
	className: He(Ci({
		variant: t,
		size: n,
		className: e
	})),
	...i
}));
wi.displayName = "Button";
//#endregion
//#region lib/graphql/queries/generated/help.generated.tsx
var Ti = {}, Ei = D`
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
function Di(e) {
	return C(Ei, {
		...Ti,
		...e
	});
}
D`
    query VisitorHelpTags($locale: String) {
  visitorHelpTags(locale: $locale) {
    _id
    slug
    label
    description
  }
}
    `;
var Oi = D`
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
function ki(e) {
	return C(Oi, {
		...Ti,
		...e
	});
}
var Ai = D`
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
function ji(e) {
	return C(Ai, {
		...Ti,
		...e
	});
}
var Mi = D`
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
function Ni(e) {
	return C(Mi, {
		...Ti,
		...e
	});
}
var Pi = D`
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
function Fi(e) {
	return C(Pi, {
		...Ti,
		...e
	});
}
var Ii = D`
    mutation RecordVisitorHelpView($articleId: String!) {
  recordVisitorHelpView(articleId: $articleId) {
    ok
  }
}
    `;
function Li(e) {
	return Se(Ii, {
		...Ti,
		...e
	});
}
//#endregion
export { Yr as _, ki as a, mi as c, ai as d, ri as f, ni as g, Qr as h, Di as i, li as l, ei as m, ji as n, Fi as o, Xr as p, Ni as r, wi as s, Li as t, si as u };

//# sourceMappingURL=widget-react-BAOIDvhV.js.map