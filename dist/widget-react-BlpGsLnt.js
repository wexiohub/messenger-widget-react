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
import { $ as e, $t as t, A as n, At as r, B as i, Bt as a, Ct as o, Dt as s, Et as c, F as l, Ft as u, G as d, Gt as f, H as p, Ht as m, It as h, J as g, Jt as _, K as v, Kt as y, Lt as b, Mt as x, Nt as S, Ot as C, Pt as w, Q as T, Qt as E, Rt as ee, St as te, T as ne, Tt as re, U as ie, Ut as D, V as ae, Vt as oe, W as se, Wt as ce, Xt as le, Y as O, Yt as ue, Zt as de, _t as fe, an as pe, at as me, bt as he, cn as ge, ct as k, dn as A, dt as _e, en as ve, et as j, fn as M, ft as ye, g as be, gt as xe, ht as Se, in as N, it as Ce, jt as we, kt as P, ln as F, lt as I, mn as Te, mt as Ee, nt as De, on as Oe, ot as ke, pn as L, pt as Ae, q as je, qt as Me, rn as R, rt as Ne, sn as Pe, st as z, tn as B, tt as Fe, un as V, ut as Ie, vt as Le, w as Re, wt as ze, xt as Be, yt as Ve, z as H, zt as He } from "./widget-react-DfX-FjHu.js";
import { n as Ue, r as We } from "./widget-react-CQ0DMi7b.js";
import * as U from "react";
import { jsx as Ge } from "react/jsx-runtime";
//#region node_modules/graphql/language/printString.mjs
function Ke(e) {
	return `"${e.replace(qe, Je)}"`;
}
var qe = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Je(e) {
	return Ye[e.charCodeAt(0)];
}
var Ye = /* @__PURE__ */ "\\u0000.\\u0001.\\u0002.\\u0003.\\u0004.\\u0005.\\u0006.\\u0007.\\b.\\t.\\n.\\u000B.\\f.\\r.\\u000E.\\u000F.\\u0010.\\u0011.\\u0012.\\u0013.\\u0014.\\u0015.\\u0016.\\u0017.\\u0018.\\u0019.\\u001A.\\u001B.\\u001C.\\u001D.\\u001E.\\u001F...\\\"..........................................................\\\\...................................\\u007F.\\u0080.\\u0081.\\u0082.\\u0083.\\u0084.\\u0085.\\u0086.\\u0087.\\u0088.\\u0089.\\u008A.\\u008B.\\u008C.\\u008D.\\u008E.\\u008F.\\u0090.\\u0091.\\u0092.\\u0093.\\u0094.\\u0095.\\u0096.\\u0097.\\u0098.\\u0099.\\u009A.\\u009B.\\u009C.\\u009D.\\u009E.\\u009F".split(".");
//#endregion
//#region node_modules/graphql/language/printer.mjs
function Xe(e) {
	return t(e, Qe);
}
var Ze = 80, Qe = {
	Name: { leave: (e) => e.value },
	Variable: { leave: (e) => "$" + e.name },
	Document: { leave: (e) => W(e.definitions, "\n\n") },
	OperationDefinition: { leave(e) {
		let t = et(e.variableDefinitions) ? K("(\n", W(e.variableDefinitions, "\n"), "\n)") : K("(", W(e.variableDefinitions, ", "), ")"), n = K("", e.description, "\n") + W([
			e.operation,
			W([e.name, t]),
			W(e.directives, " ")
		], " ");
		return (n === "query" ? "" : n + " ") + e.selectionSet;
	} },
	VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: n, directives: r, description: i }) => K("", i, "\n") + e + ": " + t + K(" = ", n) + K(" ", W(r, " ")) },
	SelectionSet: { leave: ({ selections: e }) => G(e) },
	Field: { leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
		let a = K("", e, ": ") + t, o = a + K("(", W(n, ", "), ")");
		return o.length > Ze && (o = a + K("(\n", $e(W(n, "\n")), "\n)")), W([
			o,
			W(r, " "),
			i
		], " ");
	} },
	Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
	FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + K(" ", W(t, " ")) },
	InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: n }) => W([
		"...",
		K("on ", e),
		W(t, " "),
		n
	], " ") },
	FragmentDefinition: { leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i, description: a }) => K("", a, "\n") + `fragment ${e}${K("(", W(n, ", "), ")")} on ${t} ${K("", W(r, " "), " ")}` + i },
	IntValue: { leave: ({ value: e }) => e },
	FloatValue: { leave: ({ value: e }) => e },
	StringValue: { leave: ({ value: e, block: t }) => t ? ve(e) : Ke(e) },
	BooleanValue: { leave: ({ value: e }) => e ? "true" : "false" },
	NullValue: { leave: () => "null" },
	EnumValue: { leave: ({ value: e }) => e },
	ListValue: { leave: ({ values: e }) => "[" + W(e, ", ") + "]" },
	ObjectValue: { leave: ({ fields: e }) => "{" + W(e, ", ") + "}" },
	ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
	Directive: { leave: ({ name: e, arguments: t }) => "@" + e + K("(", W(t, ", "), ")") },
	NamedType: { leave: ({ name: e }) => e },
	ListType: { leave: ({ type: e }) => "[" + e + "]" },
	NonNullType: { leave: ({ type: e }) => e + "!" },
	SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: n }) => K("", e, "\n") + W([
		"schema",
		W(t, " "),
		G(n)
	], " ") },
	OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t },
	ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: n }) => K("", e, "\n") + W([
		"scalar",
		t,
		W(n, " ")
	], " ") },
	ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => K("", e, "\n") + W([
		"type",
		t,
		K("implements ", W(n, " & ")),
		W(r, " "),
		G(i)
	], " ") },
	FieldDefinition: { leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => K("", e, "\n") + t + (et(n) ? K("(\n", $e(W(n, "\n")), "\n)") : K("(", W(n, ", "), ")")) + ": " + r + K(" ", W(i, " ")) },
	InputValueDefinition: { leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => K("", e, "\n") + W([
		t + ": " + n,
		K("= ", r),
		W(i, " ")
	], " ") },
	InterfaceTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => K("", e, "\n") + W([
		"interface",
		t,
		K("implements ", W(n, " & ")),
		W(r, " "),
		G(i)
	], " ") },
	UnionTypeDefinition: { leave: ({ description: e, name: t, directives: n, types: r }) => K("", e, "\n") + W([
		"union",
		t,
		W(n, " "),
		K("= ", W(r, " | "))
	], " ") },
	EnumTypeDefinition: { leave: ({ description: e, name: t, directives: n, values: r }) => K("", e, "\n") + W([
		"enum",
		t,
		W(n, " "),
		G(r)
	], " ") },
	EnumValueDefinition: { leave: ({ description: e, name: t, directives: n }) => K("", e, "\n") + W([t, W(n, " ")], " ") },
	InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: n, fields: r }) => K("", e, "\n") + W([
		"input",
		t,
		W(n, " "),
		G(r)
	], " ") },
	DirectiveDefinition: { leave: ({ description: e, name: t, arguments: n, directives: r, repeatable: i, locations: a }) => K("", e, "\n") + "directive @" + t + (et(n) ? K("(\n", $e(W(n, "\n")), "\n)") : K("(", W(n, ", "), ")")) + K(" ", W(r, " ")) + (i ? " repeatable" : "") + " on " + W(a, " | ") },
	SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => W([
		"extend schema",
		W(e, " "),
		G(t)
	], " ") },
	ScalarTypeExtension: { leave: ({ name: e, directives: t }) => W([
		"extend scalar",
		e,
		W(t, " ")
	], " ") },
	ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => W([
		"extend type",
		e,
		K("implements ", W(t, " & ")),
		W(n, " "),
		G(r)
	], " ") },
	InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => W([
		"extend interface",
		e,
		K("implements ", W(t, " & ")),
		W(n, " "),
		G(r)
	], " ") },
	UnionTypeExtension: { leave: ({ name: e, directives: t, types: n }) => W([
		"extend union",
		e,
		W(t, " "),
		K("= ", W(n, " | "))
	], " ") },
	EnumTypeExtension: { leave: ({ name: e, directives: t, values: n }) => W([
		"extend enum",
		e,
		W(t, " "),
		G(n)
	], " ") },
	InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: n }) => W([
		"extend input",
		e,
		W(t, " "),
		G(n)
	], " ") },
	DirectiveExtension: { leave: ({ name: e, directives: t }) => W(["extend directive @" + e, W(t, " ")], " ") },
	TypeCoordinate: { leave: ({ name: e }) => e },
	MemberCoordinate: { leave: ({ name: e, memberName: t }) => W([e, K(".", t)]) },
	ArgumentCoordinate: { leave: ({ name: e, fieldName: t, argumentName: n }) => W([
		e,
		K(".", t),
		K("(", n, ":)")
	]) },
	DirectiveCoordinate: { leave: ({ name: e }) => W(["@", e]) },
	DirectiveArgumentCoordinate: { leave: ({ name: e, argumentName: t }) => W([
		"@",
		e,
		K("(", t, ":)")
	]) }
};
function W(e, t = "") {
	return e?.filter((e) => e).join(t) ?? "";
}
function G(e) {
	return K("{\n", $e(W(e, "\n")), "\n}");
}
function K(e, t, n = "") {
	return t != null && t !== "" ? e + t + n : "";
}
function $e(e) {
	return K("  ", e.replace(/\n/g, "\n  "));
}
function et(e) {
	/* c8 ignore next */
	return e?.some((e) => e.includes("\n")) ?? !1;
}
//#endregion
//#region node_modules/graphql/language/predicates.mjs
function tt(e) {
	return e.kind === B.FIELD || e.kind === B.FRAGMENT_SPREAD || e.kind === B.INLINE_FRAGMENT;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/DocumentTransform.js
function nt(e) {
	return e;
}
var rt = function() {
	function e(e, t) {
		t === void 0 && (t = Object.create(null)), this.resultCache = y ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = t.cache !== !1, this.resetCache();
	}
	return e.prototype.getCacheKey = function(e) {
		return [e];
	}, e.identity = function() {
		return new e(nt, { cache: !1 });
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
			var n = new Me(f);
			this.performWork = Ie(e.prototype.performWork.bind(this), {
				makeCacheKey: function(e) {
					var r = t.getCacheKey(e);
					if (r) return R(Array.isArray(r), 104), n.lookupArray(r);
				},
				max: h["documentTransform.cache"],
				cache: ee
			});
		}
	}, e.prototype.performWork = function(e) {
		return Ae(e), this.transform(e);
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
}(), it, q = Object.assign(function(e) {
	var t = it.get(e);
	return t || (t = Xe(e), it.set(e, t)), t;
}, { reset: function() {
	it = new b(h.print || 2e3);
} });
q.reset(), globalThis.__DEV__ !== !1 && u("print", function() {
	return it ? it.size : 0;
});
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/transform.js
var at = {
	kind: B.FIELD,
	name: {
		kind: B.NAME,
		value: "__typename"
	}
};
function ot(e, t) {
	return !e || e.selectionSet.selections.every(function(e) {
		return e.kind === B.FRAGMENT_SPREAD && ot(t[e.name.value], t);
	});
}
function st(e) {
	return ot(Le(e) || Se(e), He(xe(e))) ? null : e;
}
function ct(e) {
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
function lt(e) {
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
function ut(e, n) {
	Ae(n);
	for (var r = lt(""), i = lt(""), a = function(e) {
		for (var t = 0, n = void 0; t < e.length && (n = e[t]); ++t) if (!k(n)) {
			if (n.kind === B.OPERATION_DEFINITION) return r(n.name && n.name.value);
			if (n.kind === B.FRAGMENT_DEFINITION) return i(n.name.value);
		}
		return globalThis.__DEV__ !== !1 && R.error(124), null;
	}, o = 0, s = n.definitions.length - 1; s >= 0; --s) n.definitions[s].kind === B.OPERATION_DEFINITION && ++o;
	var c = ct(e), l = function(e) {
		return I(e) && e.map(c).some(function(e) {
			return e && e.remove;
		});
	}, u = /* @__PURE__ */ new Map(), d = !1, f = { enter: function(e) {
		if (l(e.directives)) return d = !0, null;
	} }, p = t(n, {
		Field: f,
		InlineFragment: f,
		VariableDefinition: { enter: function() {
			return !1;
		} },
		Variable: { enter: function(e, t, n, r, i) {
			var o = a(i);
			o && o.variables.add(e.name.value);
		} },
		FragmentSpread: { enter: function(e, t, n, r, i) {
			if (l(e.directives)) return d = !0, null;
			var o = a(i);
			o && o.fragmentSpreads.add(e.name.value);
		} },
		FragmentDefinition: {
			enter: function(e, t, n, r) {
				u.set(JSON.stringify(r), e);
			},
			leave: function(e, t, n, r) {
				if (e === u.get(JSON.stringify(r))) return e;
				if (o > 0 && e.selectionSet.selections.every(function(e) {
					return e.kind === B.FIELD && e.name.value === "__typename";
				})) return i(e.name.value).removed = !0, d = !0, null;
			}
		},
		Directive: { leave: function(e) {
			if (c(e)) return d = !0, null;
		} }
	});
	if (!d) return n;
	var m = function(e) {
		return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach(function(t) {
			m(i(t)).transitiveVars.forEach(function(t) {
				e.transitiveVars.add(t);
			});
		})), e;
	}, h = /* @__PURE__ */ new Set();
	p.definitions.forEach(function(e) {
		e.kind === B.OPERATION_DEFINITION ? m(r(e.name && e.name.value)).fragmentSpreads.forEach(function(e) {
			h.add(e);
		}) : e.kind === B.FRAGMENT_DEFINITION && o === 0 && !i(e.name.value).removed && h.add(e.name.value);
	}), h.forEach(function(e) {
		m(i(e)).fragmentSpreads.forEach(function(e) {
			h.add(e);
		});
	});
	var g = function(e) {
		return !!(!h.has(e) || i(e).removed);
	}, _ = { enter: function(e) {
		if (g(e.name.value)) return null;
	} };
	return st(t(p, {
		FragmentSpread: _,
		FragmentDefinition: _,
		OperationDefinition: { leave: function(e) {
			if (e.variableDefinitions) {
				var t = m(r(e.name && e.name.value)).transitiveVars;
				if (t.size < e.variableDefinitions.length) return F(F({}, e), { variableDefinitions: e.variableDefinitions.filter(function(e) {
					return t.has(e.variable.name.value);
				}) });
			}
		} }
	}));
}
var dt = Object.assign(function(e) {
	return t(e, { SelectionSet: { enter: function(e, t, n) {
		if (!(n && n.kind === B.OPERATION_DEFINITION)) {
			var r = e.selections;
			if (r && !r.some(function(e) {
				return re(e) && (e.name.value === "__typename" || e.name.value.lastIndexOf("__", 0) === 0);
			})) {
				var i = n;
				if (!(re(i) && i.directives && i.directives.some(function(e) {
					return e.name.value === "export";
				}))) return F(F({}, e), { selections: Te(Te([], r, !0), [at], !1) });
			}
		}
	} } });
}, { added: function(e) {
	return e === at;
} });
function ft(e) {
	return fe(e).operation === "query" ? e : t(e, { OperationDefinition: { enter: function(e) {
		return F(F({}, e), { operation: "query" });
	} } });
}
function pt(e) {
	return Ae(e), ut([{
		test: function(e) {
			return e.name.value === "client";
		},
		remove: !0
	}], e);
}
function mt(e) {
	return Ae(e), t(e, { FragmentSpread: function(e) {
		if (!e.directives?.some(function(e) {
			return e.name.value === "unmask";
		})) return F(F({}, e), { directives: Te(Te([], e.directives || [], !0), [{
			kind: B.DIRECTIVE,
			name: {
				kind: B.NAME,
				value: "nonreactive"
			}
		}], !1) });
	} });
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/mergeDeep.js
var ht = Object.prototype.hasOwnProperty;
function gt() {
	return _t([...arguments]);
}
function _t(e) {
	var t = e[0] || {}, n = e.length;
	if (n > 1) for (var r = new J(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
	return t;
}
var vt = function(e, t, n) {
	return this.merge(e[n], t[n]);
}, J = function() {
	function e(e) {
		e === void 0 && (e = vt), this.reconciler = e, this.isObject = D, this.pastCopies = /* @__PURE__ */ new Set();
	}
	return e.prototype.merge = function(e, t) {
		for (var n = this, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		return D(t) && D(e) ? (Object.keys(t).forEach(function(i) {
			if (ht.call(e, i)) {
				var a = e[i];
				if (t[i] !== a) {
					var o = n.reconciler.apply(n, Te([
						e,
						t,
						i
					], r, !1));
					o !== a && (e = n.shallowCopyForMerge(e), e[i] = o);
				}
			} else e = n.shallowCopyForMerge(e), e[i] = t[i];
		}), e) : t;
	}, e.prototype.shallowCopyForMerge = function(e) {
		return D(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : F({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
	}, e;
}();
//#endregion
//#region node_modules/@apollo/client/utilities/observables/asyncMap.js
function yt(e, t, n) {
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
function bt(e) {
	return e && typeof e.then == "function";
}
var xt = function(e) {
	A(t, e);
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
				n.sub !== null && (n.latest = ["next", e], n.notify("next", e), Ce(n.observers, "next", e));
			},
			error: function(e) {
				var t = n.sub;
				t !== null && (t && setTimeout(function() {
					return t.unsubscribe();
				}), n.sub = null, n.latest = ["error", e], n.reject(e), n.notify("error", e), Ce(n.observers, "error", e));
			},
			complete: function() {
				var e = n, t = e.sub, r = e.sources, i = r === void 0 ? [] : r;
				if (t !== null) {
					var a = i.shift();
					a ? bt(a) ? a.then(function(e) {
						return n.sub = e.subscribe(n.handlers);
					}, n.handlers.error) : n.sub = a.subscribe(n.handlers) : (t && setTimeout(function() {
						return t.unsubscribe();
					}), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Ce(n.observers, "complete"));
				}
			}
		}, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(e) {
			n.reject(e), n.sources = [], n.handlers.error(e);
		}, n.promise.catch(function(e) {}), typeof t == "function" && (t = [new z(t)]), bt(t) ? t.then(function(e) {
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
Ne(xt);
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
	return D(e) && "payload" in e;
}
function Et(e, t) {
	var n = e, r = new J();
	return St(t) && I(t.incremental) && t.incremental.forEach(function(e) {
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
	return I(Ot(e));
}
function Ot(e) {
	var t = I(e.errors) ? e.errors.slice(0) : [];
	return St(e) && I(e.incremental) && e.incremental.forEach(function(e) {
		e.errors && t.push.apply(t, e.errors);
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/fromError.js
function kt(e) {
	return new z(function(t) {
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
		if (t.indexOf(i) < 0) throw N(58, i);
	}
	return e;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/createOperation.js
function Mt(e, t) {
	var n = F({}, e);
	return Object.defineProperty(t, "setContext", {
		enumerable: !1,
		value: function(e) {
			n = typeof e == "function" ? F(F({}, n), e(n)) : F(F({}, n), e);
		}
	}), Object.defineProperty(t, "getContext", {
		enumerable: !1,
		value: function() {
			return F({}, n);
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
	return t.operationName || (t.operationName = typeof t.query == "string" ? "" : Ve(t.query) || void 0), t;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/filterOperationVariables.js
function Pt(e, n) {
	var r = F({}, e), i = new Set(Object.keys(e));
	return t(n, { Variable: function(e, t, n) {
		n && n.kind !== "VariableDefinition" && i.delete(e.name.value);
	} }), i.forEach(function(e) {
		delete r[e];
	}), r;
}
//#endregion
//#region node_modules/@apollo/client/link/core/ApolloLink.js
function Ft(e, t) {
	return t ? t(e) : z.of();
}
function It(e) {
	return typeof e == "function" ? new Y(e) : e;
}
function Lt(e) {
	return e.request.length <= 1;
}
var Y = function() {
	function t(e) {
		e && (this.request = e);
	}
	return t.empty = function() {
		return new t(function() {
			return z.of();
		});
	}, t.from = function(e) {
		return e.length === 0 ? t.empty() : e.map(It).reduce(function(e, t) {
			return e.concat(t);
		});
	}, t.split = function(e, n, r) {
		var i = It(n), a = It(r || new t(Ft)), o = Lt(i) && Lt(a) ? new t(function(t) {
			return e(t) ? i.request(t) || z.of() : a.request(t) || z.of();
		}) : new t(function(t, n) {
			return e(t) ? i.request(t, n) || z.of() : a.request(t, n) || z.of();
		});
		return Object.assign(o, {
			left: i,
			right: a
		});
	}, t.execute = function(e, t) {
		return e.request(Mt(t.context, Nt(jt(t)))) || z.of();
	}, t.concat = function(e, n) {
		var r = It(e);
		if (Lt(r)) return globalThis.__DEV__ !== !1 && R.warn(47, r), r;
		var i = It(n), a = Lt(i) ? new t(function(e) {
			return r.request(e, function(e) {
				return i.request(e) || z.of();
			}) || z.of();
		}) : new t(function(e, t) {
			return r.request(e, function(e) {
				return i.request(e, t) || z.of();
			}) || z.of();
		});
		return Object.assign(a, {
			left: r,
			right: i
		});
	}, t.prototype.split = function(e, n, r) {
		return this.concat(t.split(e, n, r || new t(Ft)));
	}, t.prototype.concat = function(e) {
		return t.concat(this, e);
	}, t.prototype.request = function(e, t) {
		throw N(48);
	}, t.prototype.onError = function(t, n) {
		if (globalThis.__DEV__ !== !1 && e("onError", function() {
			globalThis.__DEV__ !== !1 && R.warn(49);
		}), n && n.error) return n.error(t), !1;
		throw t;
	}, t.prototype.setOnError = function(e) {
		return globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && R.warn(50), this.onError = e, this;
	}, t;
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
	return ce && (u[Symbol.asyncIterator] = function() {
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
	return ce && (n[Symbol.asyncIterator] = function() {
		return this;
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/reader.js
function Ut(e) {
	var t = { next: function() {
		return e.read();
	} };
	return ce && (t[Symbol.asyncIterator] = function() {
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
	return !!(ce && e[Symbol.asyncIterator]);
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
	return V(this, void 0, void 0, function() {
		var n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, y, b, x, S, C, w, T;
		return M(this, function(E) {
			switch (E.label) {
				case 0:
					if (TextDecoder === void 0) throw Error("TextDecoder must be defined in the environment: please import a polyfill.");
					n = new TextDecoder("utf-8"), r = e.headers?.get("content-type"), i = "boundary=", a = r?.includes(i) ? r?.substring(r?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--${a}`, s = "", c = Xt(e), l = !0, E.label = 1;
				case 1: return l ? [4, c.next()] : [3, 3];
				case 2:
					for (u = E.sent(), d = u.value, f = u.done, p = typeof d == "string" ? d : n.decode(d), m = s.length - o.length + 1, l = !f, s += p, h = s.indexOf(o, m); h > -1;) {
						if (g = void 0, w = [s.slice(0, h), s.slice(h + o.length)], g = w[0], s = w[1], _ = g.indexOf("\r\n\r\n"), y = $t(g.slice(0, _)), b = y["content-type"], b && b.toLowerCase().indexOf("application/json") === -1) throw Error("Unsupported patch content type: application/json is required.");
						if (x = g.slice(_), x) {
							if (S = en(e, x), Object.keys(S).length > 1 || "data" in S || "incremental" in S || "errors" in S || "payload" in S) if (Tt(S)) {
								if (C = {}, "payload" in S) {
									if (Object.keys(S).length === 1 && S.payload === null) return [2];
									C = F({}, S.payload);
								}
								"errors" in S && (C = F(F({}, C), { extensions: F(F({}, "extensions" in C ? C.extensions : null), (T = {}, T[v] = S.errors, T)) })), t(C);
							} else t(S);
							else if (Object.keys(S).length === 1 && "hasNext" in S && !S.hasNext) return [2];
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
		var r = N(54, t, e.message);
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
		r = F(F(F({}, r), e.options), { headers: F(F({}, r.headers), e.headers) }), e.credentials && (r.credentials = e.credentials), i = F(F({}, i), e.http);
	}), r.headers && (r.headers = cn(r.headers, i.preserveHeaderCase));
	var a = e.operationName, o = e.extensions, s = e.variables, c = e.query, l = {
		operationName: a,
		variables: s
	};
	return i.includeExtensions && (l.extensions = o), i.includeQuery && (l.query = t(c, q)), {
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
	if (!e && typeof fetch > "u") throw N(51);
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
var fn = Pe(function() {
	return fetch;
}), pn = function(e) {
	e === void 0 && (e = {});
	var t = e.uri, n = t === void 0 ? "/graphql" : t, r = e.fetch, i = e.print, a = i === void 0 ? on : i, o = e.includeExtensions, s = e.preserveHeaderCase, c = e.useGETForQueries, l = e.includeUnusedVariables, u = l === void 0 ? !1 : l, d = L(e, [
		"uri",
		"fetch",
		"print",
		"includeExtensions",
		"preserveHeaderCase",
		"useGETForQueries",
		"includeUnusedVariables"
	]);
	globalThis.__DEV__ !== !1 && ln(r || fn);
	var f = {
		http: {
			includeExtensions: o,
			preserveHeaderCase: s
		},
		options: d.fetchOptions,
		credentials: d.credentials,
		headers: d.headers
	};
	return new Y(function(e) {
		var t = un(e, n), i = e.getContext(), o = {};
		if (i.clientAwareness) {
			var s = i.clientAwareness, l = s.name, d = s.version;
			l && (o["apollographql-client-name"] = l), d && (o["apollographql-client-version"] = d);
		}
		var p = F(F({}, o), i.headers), m = {
			http: i.http,
			options: i.fetchOptions,
			credentials: i.credentials,
			headers: p
		};
		if (le(["client"], e.query)) {
			globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && R.warn(52);
			var h = pt(e.query);
			if (!h) return kt(/* @__PURE__ */ Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
			e.query = h;
		}
		var g = sn(e, a, an, f, m), _ = g.options, v = g.body;
		v.variables && !u && (v.variables = Pt(v.variables, e.query));
		var y;
		!_.signal && typeof AbortController < "u" && (y = new AbortController(), _.signal = y.signal);
		var b = function(e) {
			return e.kind === "OperationDefinition" && e.operation === "mutation";
		}, x = function(e) {
			return e.kind === "OperationDefinition" && e.operation === "subscription";
		}(fe(e.query)), S = le(["defer"], e.query);
		if (c && !e.query.definitions.some(b) && (_.method = "GET"), S || x) {
			_.headers = _.headers || {};
			var C = "multipart/mixed;";
			x && S && globalThis.__DEV__ !== !1 && R.warn(53), x ? C += "boundary=graphql;subscriptionSpec=1.0,application/json" : S && (C += "deferSpec=20220824,application/json"), _.headers.accept = C;
		}
		if (_.method === "GET") {
			var w = dn(t, v), T = w.newURI, E = w.parseError;
			if (E) return kt(E);
			t = T;
		} else try {
			_.body = rn(v, "Payload");
		} catch (e) {
			return kt(e);
		}
		return new z(function(n) {
			var i = r || Pe(function() {
				return fetch;
			}) || fn, a = n.next.bind(n);
			return i(t, _).then(function(t) {
				e.setContext({ response: t });
				var n = t.headers?.get("content-type");
				return n !== null && /^multipart\/mixed/i.test(n) ? Qt(t, a) : nn(e)(t).then(a);
			}).then(function() {
				y = void 0, n.complete();
			}).catch(function(e) {
				y = void 0, tn(e, n);
			}), function() {
				y && y.abort();
			};
		});
	});
}, mn = function(e) {
	A(t, e);
	function t(t) {
		t === void 0 && (t = {});
		var n = e.call(this, pn(t).request) || this;
		return n.options = t, n;
	}
	return t;
}(Y), hn = f ? WeakMap : Map, gn = y ? WeakSet : Set, _n = new ye(), vn = !1;
function yn() {
	vn || (vn = !0, globalThis.__DEV__ !== !1 && R.warn(64));
}
//#endregion
//#region node_modules/@apollo/client/masking/maskDefinition.js
function bn(e, t, n) {
	return _n.withValue(!0, function() {
		var r = Sn(e, t, n, !1);
		return Object.isFrozen(e) && me(r), r;
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
		if (r && a.add(o), h.kind === B.FIELD) {
			var v = P(h), y = h.selectionSet;
			if (g = o[v] || e[v], g === void 0) continue;
			if (y && g !== null) {
				var f = Sn(e[v], y, n, r, globalThis.__DEV__ === !1 ? void 0 : `${i || ""}.${v}`);
				a.has(f) && (g = f);
			}
			globalThis.__DEV__ === !1 && (o[v] = g), globalThis.__DEV__ !== !1 && (r && v !== "__typename" && !Object.getOwnPropertyDescriptor(o, v)?.value ? Object.defineProperty(o, v, Cn(v, g, i || "", n.operationName, n.operationType)) : (delete o[v], o[v] = g));
		}
		if (h.kind === B.INLINE_FRAGMENT && (!h.typeCondition || n.cache.fragmentMatches(h, e.__typename)) && (g = Sn(e, h.selectionSet, n, r, i)), h.kind === B.FRAGMENT_SPREAD) {
			var b = h.name.value, x = n.fragmentMap[b] || (n.fragmentMap[b] = n.cache.lookupFragment(b));
			R(x, 59, b);
			var S = _(h);
			S !== "mask" && (g = Sn(e, x.selectionSet, n, S === "migrate", i));
		}
		a.has(g) && a.add(o);
	}
	return "__typename" in e && !("__typename" in o) && (o.__typename = e.__typename), Object.keys(o).length !== Object.keys(e).length && a.add(o), a.has(o) ? o : e;
}
function Cn(e, t, n, r, i) {
	var a = function() {
		return _n.getValue() ? t : (globalThis.__DEV__ !== !1 && R.warn(60, r ? `${i} '${r}'` : `anonymous ${i}`, `${n}.${e}`.replace(/^\./, "")), a = function() {
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
		return e.kind === B.FRAGMENT_DEFINITION;
	});
	r === void 0 && (R(i.length === 1, 61, i.length), r = i[0].name.value);
	var a = i.find(function(e) {
		return e.name.value === r;
	});
	return R(!!a, 62, r), e == null || O(e, {}) ? e : bn(e, a.selectionSet, {
		operationType: "fragment",
		operationName: a.name.value,
		fragmentMap: He(xe(t)),
		cache: n,
		mutableTargets: new hn(),
		knownChanged: new gn()
	});
}
//#endregion
//#region node_modules/@apollo/client/masking/maskOperation.js
function Tn(e, t, n) {
	if (!n.fragmentMatches) return globalThis.__DEV__ !== !1 && yn(), e;
	var r = Le(t);
	return R(r, 63), e == null ? e : bn(e, r.selectionSet, {
		operationType: r.operation,
		operationName: r.name?.value,
		fragmentMap: He(xe(t)),
		cache: n,
		mutableTargets: new hn(),
		knownChanged: new gn()
	});
}
//#endregion
//#region node_modules/@apollo/client/cache/core/cache.js
var En = function() {
	function e() {
		this.assumeImmutableResults = !1, this.getFragmentDoc = Ie(oe, {
			max: h["cache.fragmentQueryDocuments"] || 1e3,
			cache: ee
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
		return t === void 0 && (t = !!e.optimistic), globalThis.__DEV__ !== !1 && j(e, "canonizeResults", "cache.readQuery"), T("canonizeResults", function() {
			return n.read(F(F({}, e), {
				rootId: e.id || "ROOT_QUERY",
				optimistic: t
			}));
		});
	}, e.prototype.watchFragment = function(e) {
		var t = this, n = e.fragment, r = e.fragmentName, i = e.from, a = e.optimistic, o = a === void 0 ? !0 : a, s = L(e, [
			"fragment",
			"fragmentName",
			"from",
			"optimistic"
		]), c = this.getFragmentDoc(n, r), l = i === void 0 || typeof i == "string" ? i : this.identify(i), u = !!e[Symbol.for("apollo.dataMasking")];
		if (globalThis.__DEV__ !== !1) {
			var d = r || Se(n).name.value;
			l || globalThis.__DEV__ !== !1 && R.warn(1, d);
		}
		var f = F(F({}, s), {
			returnPartialData: !0,
			id: l,
			query: c,
			optimistic: o
		}), p;
		return new z(function(i) {
			return t.watch(F(F({}, f), {
				immediate: !0,
				callback: function(a) {
					var o = u ? wn(a.result, n, t, r) : a.result;
					if (!(p && se(c, { data: p.result }, { data: o }, e.variables))) {
						var s = {
							data: o,
							complete: !!a.complete
						};
						a.missing && (s.missing = _t(a.missing.map(function(e) {
							return e.missing;
						}))), p = F(F({}, a), { result: o }), i.next(s);
					}
				}
			}));
		});
	}, e.prototype.readFragment = function(e, t) {
		var n = this;
		return t === void 0 && (t = !!e.optimistic), globalThis.__DEV__ !== !1 && j(e, "canonizeResults", "cache.readFragment"), T("canonizeResults", function() {
			return n.read(F(F({}, e), {
				query: n.getFragmentDoc(e.fragment, e.fragmentName),
				rootId: e.id,
				optimistic: t
			}));
		});
	}, e.prototype.writeQuery = function(e) {
		var t = e.id, n = e.data, r = L(e, ["id", "data"]);
		return this.write(Object.assign(r, {
			dataId: t || "ROOT_QUERY",
			result: n
		}));
	}, e.prototype.writeFragment = function(e) {
		var t = e.id, n = e.data, r = e.fragment, i = e.fragmentName, a = L(e, [
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
		return globalThis.__DEV__ !== !1 && j(e, "canonizeResults", "cache.updateQuery"), this.batch({ update: function(n) {
			var r = T("canonizeResults", function() {
				return n.readQuery(e);
			}), i = t(r);
			return i == null ? r : (n.writeQuery(F(F({}, e), { data: i })), i);
		} });
	}, e.prototype.updateFragment = function(e, t) {
		return globalThis.__DEV__ !== !1 && j(e, "canonizeResults", "cache.updateFragment"), this.batch({ update: function(n) {
			var r = T("canonizeResults", function() {
				return n.readFragment(e);
			}), i = t(r);
			return i == null ? r : (n.writeFragment(F(F({}, e), { data: i })), i);
		} });
	}, e;
}();
globalThis.__DEV__ !== !1 && (En.prototype.getMemoryInternals = x);
//#endregion
//#region node_modules/@apollo/client/cache/core/types/common.js
var Dn = function(e) {
	A(t, e);
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
	return De(An, e);
}
function Mn(e) {
	var t = e.canonizeResults;
	return t === void 0 ? An.canonizeResults : t;
}
function Nn(e, t) {
	return s(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var Pn = /^[_a-z][_0-9a-z]*/i;
function Z(e) {
	var t = e.match(Pn);
	return t ? t[0] : e;
}
function Fn(e, t, n) {
	return D(t) ? k(t) ? t.every(function(t) {
		return Fn(e, t, n);
	}) : e.selections.every(function(e) {
		if (re(e) && de(e, n)) {
			var r = P(e);
			return X.call(t, r) && (!e.selectionSet || Fn(e.selectionSet, t[r], n));
		}
		return !0;
	}) : !1;
}
function In(e) {
	return D(e) && !s(e) && !k(e);
}
function Ln() {
	return new J();
}
function Rn(e, t) {
	var n = He(xe(e));
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
		var n = this;
		this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
			return me(s(e) ? n.get(e.__ref, t) : e && e[t]);
		}, this.canRead = function(e) {
			return s(e) ? n.has(e.__ref) : typeof e == "object";
		}, this.toReference = function(e, t) {
			if (typeof e == "string") return C(e);
			if (s(e)) return e;
			var r = n.policies.identify(e)[0];
			if (r) {
				var i = C(r);
				return t && n.merge(r, e), i;
			}
		};
	}
	return e.prototype.toObject = function() {
		return F({}, this.data);
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
		var n = this, r;
		s(e) && (e = e.__ref), s(t) && (t = t.__ref);
		var i = typeof e == "string" ? this.lookup(r = e) : e, a = typeof t == "string" ? this.lookup(r = t) : t;
		if (a) {
			R(typeof r == "string", 2);
			var o = new J(qn).merge(i, a);
			if (this.data[r] = o, o !== i && (delete this.refs[r], this.group.caching)) {
				var c = Object.create(null);
				i || (c.__exists = 1), Object.keys(a).forEach(function(e) {
					if (!i || i[e] !== o[e]) {
						c[e] = 1;
						var t = Z(e);
						t !== e && !n.policies.hasKeyArgs(o.__typename, t) && (c[t] = 1), o[e] === void 0 && !(n instanceof Q) && delete o[e];
					}
				}), c.__typename && !(i && i.__typename) && this.policies.rootTypenamesById[r] === o.__typename && delete c.__typename, Object.keys(c).forEach(function(e) {
					return n.group.dirty(r, e);
				});
			}
		}
	}, e.prototype.modify = function(e, t) {
		var n = this, r = this.lookup(e);
		if (r) {
			var i = Object.create(null), a = !1, o = !0, c = {
				DELETE: zn,
				INVALIDATE: Vn,
				isReference: s,
				toReference: this.toReference,
				canRead: this.canRead,
				readField: function(t, r) {
					return n.policies.readField(typeof t == "string" ? {
						fieldName: t,
						from: r || C(e)
					} : t, { store: n });
				}
			};
			if (Object.keys(r).forEach(function(l) {
				var u = Z(l), d = r[l];
				if (d !== void 0) {
					var f = typeof t == "function" ? t : t[l] || t[u];
					if (f) {
						var p = f === Bn ? zn : f(me(d), F(F({}, c), {
							fieldName: u,
							storeFieldName: l,
							storage: n.getStorage(e, l)
						}));
						if (p === Vn) n.group.dirty(e, l);
						else if (p === zn && (p = void 0), p !== d && (i[l] = p, a = !0, d = p, globalThis.__DEV__ !== !1)) {
							var m = function(e) {
								if (n.lookup(e.__ref) === void 0) return globalThis.__DEV__ !== !1 && R.warn(3, e), !0;
							};
							if (s(p)) m(p);
							else if (Array.isArray(p)) for (var h = !1, g = void 0, _ = 0, v = p; _ < v.length; _++) {
								var y = v[_];
								if (s(y)) {
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
			}), a) return this.merge(e, i), o && (this instanceof Q ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
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
			var n = e.__META, r = L(e, ["__META"]);
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
			var t = this.refs[e] = Object.create(null), n = this.data[e];
			if (!n) return t;
			var r = new Set([n]);
			r.forEach(function(e) {
				s(e) && (t[e.__ref] = !0), D(e) && Object.keys(e).forEach(function(t) {
					var n = e[t];
					D(n) && r.add(n);
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
		this.d = this.caching ? _e() : null, this.keyMaker = new Me(f);
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
		A(t, e);
		function t(t) {
			var n = t.policies, r = t.resultCaching, i = r === void 0 ? !0 : r, a = t.seed, o = e.call(this, n, new Un(i)) || this;
			return o.stump = new Kn(o), o.storageTrie = new Me(f), a && o.replace(a), o;
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
	A(t, e);
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
				O(r[n], i[n]) || t.group.dirty(e, n);
			}) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach(function(n) {
				t.group.dirty(e, n);
			})) : t.delete(e);
		}), n) : n === this.parent ? this : n.addLayer(this.id, this.replay);
	}, t.prototype.toObject = function() {
		return F(F({}, this.parent.toObject()), this.data);
	}, t.prototype.findChildRefIds = function(t) {
		var n = this.parent.findChildRefIds(t);
		return X.call(this.data, t) ? F(F({}, n), e.prototype.findChildRefIds.call(this, t)) : n;
	}, t.prototype.getStorage = function() {
		for (var e = this.parent; e.parent;) e = e.parent;
		return e.getStorage.apply(e, arguments);
	}, t;
}(Hn), Kn = function(e) {
	A(t, e);
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
	return O(r, i) ? r : i;
}
function Jn(e) {
	return !!(e instanceof Hn && e.group.caching);
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/object-canon.js
function Yn(e) {
	return D(e) ? k(e) ? e.slice(0) : F({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Xn = function() {
	function e() {
		this.known = new (y ? WeakSet : Set)(), this.pool = new Me(f), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
	}
	return e.prototype.isKnown = function(e) {
		return D(e) && this.known.has(e);
	}, e.prototype.pass = function(e) {
		if (D(e)) {
			var t = Yn(e);
			return this.passes.set(t, e), t;
		}
		return e;
	}, e.prototype.admit = function(e) {
		var t = this;
		if (D(e)) {
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
		this.knownResults = new (f ? WeakMap : Map)(), this.config = De(e, {
			addTypename: e.addTypename !== !1,
			canonizeResults: Mn(e)
		}), this.canon = e.canon || new Xn(), this.executeSelectionSet = Ie(function(e) {
			var n, r = e.context.canonizeResults, i = Zn(e);
			i[3] = !r;
			var a = (n = t.executeSelectionSet).peek.apply(n, i);
			return a ? r ? F(F({}, a), { result: t.canon.admit(a.result) }) : a : (Gn(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e));
		}, {
			max: this.config.resultCacheMaxSize || h["inMemoryCache.executeSelectionSet"] || 5e4,
			keyArgs: Zn,
			makeCacheKey: function(e, t, n, r) {
				if (Jn(n.store)) return n.store.makeCacheKey(e, s(t) ? t.__ref : t, n.varString, r);
			}
		}), this.executeSubSelectedArray = Ie(function(e) {
			return Gn(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e);
		}, {
			max: this.config.resultCacheMaxSize || h["inMemoryCache.executeSubSelectedArray"] || 1e4,
			makeCacheKey: function(e) {
				var t = e.field, n = e.array, r = e.context;
				if (Jn(r.store)) return r.store.makeCacheKey(t, n, r.varString);
			}
		});
	}
	return e.prototype.resetCanon = function() {
		this.canon = new Xn();
	}, e.prototype.diffQueryAgainstStore = function(e) {
		var t = e.store, n = e.query, r = e.rootId, i = r === void 0 ? "ROOT_QUERY" : r, a = e.variables, o = e.returnPartialData, s = o === void 0 ? !0 : o, c = e.canonizeResults, l = c === void 0 ? this.config.canonizeResults : c, u = this.config.cache.policies;
		a = F(F({}, Ee(he(n))), a);
		var d = C(i), f = this.executeSelectionSet({
			selectionSet: fe(n).selectionSet,
			objectOrReference: d,
			enclosingRef: d,
			context: F({
				store: t,
				query: n,
				policies: u,
				variables: a,
				varString: we(a),
				canonizeResults: l
			}, Rn(n, this.config.fragments))
		}), p;
		if (f.missing && (p = [new Dn($n(f.missing), f.missing, n, a)], !s)) throw p[0];
		return {
			result: f.result,
			complete: !p,
			missing: p
		};
	}, e.prototype.isFresh = function(e, t, n, r) {
		if (Jn(r.store) && this.knownResults.get(e) === n) {
			var i = this.executeSelectionSet.peek(n, t, r, this.canon.isKnown(e));
			if (i && e === i.result) return !0;
		}
		return !1;
	}, e.prototype.execSelectionSetImpl = function(e) {
		var t = this, n = e.selectionSet, r = e.objectOrReference, i = e.enclosingRef, o = e.context;
		if (s(r) && !o.policies.rootTypenamesById[r.__ref] && !o.store.has(r.__ref)) return {
			result: this.canon.empty,
			missing: `Dangling reference to missing ${r.__ref} object`
		};
		var c = o.variables, l = o.policies, u = o.store.getFieldValue(r, "__typename"), d = [], f, p = new J();
		this.config.addTypename && typeof u == "string" && !l.rootIdsByTypename[u] && d.push({ __typename: u });
		function m(e, t) {
			var n;
			return e.missing && (f = p.merge(f, (n = {}, n[t] = e.missing, n))), e.result;
		}
		var h = new Set(n.selections);
		h.forEach(function(e) {
			var n, g;
			if (de(e, c)) if (re(e)) {
				var _ = l.readField({
					fieldName: e.name.value,
					field: e,
					variables: o.variables,
					from: r
				}, o), v = P(e);
				_ === void 0 ? dt.added(e) || (f = p.merge(f, (n = {}, n[v] = `Can't find field '${e.name.value}' on ${s(r) ? r.__ref + " object" : "object " + JSON.stringify(r, null, 2)}`, n))) : k(_) ? _.length > 0 && (_ = m(t.executeSubSelectedArray({
					field: e,
					array: _,
					enclosingRef: i,
					context: o
				}), v)) : e.selectionSet ? _ != null && (_ = m(t.executeSelectionSet({
					selectionSet: e.selectionSet,
					objectOrReference: _,
					enclosingRef: s(_) ? _ : i,
					context: o
				}), v)) : o.canonizeResults && (_ = t.canon.pass(_)), _ !== void 0 && d.push((g = {}, g[v] = _, g));
			} else {
				var y = a(e, o.lookupFragment);
				if (!y && e.kind === B.FRAGMENT_SPREAD) throw N(10, e.name.value);
				y && l.fragmentMatches(y, u) && y.selectionSet.selections.forEach(h.add, h);
			}
		});
		var g = {
			result: _t(d),
			missing: f
		}, _ = o.canonizeResults ? this.canon.admit(g) : me(g);
		return _.result && this.knownResults.set(_.result, n), _;
	}, e.prototype.execSubSelectedArrayImpl = function(e) {
		var t = this, n = e.field, r = e.array, i = e.enclosingRef, a = e.context, o, c = new J();
		function l(e, t) {
			var n;
			return e.missing && (o = c.merge(o, (n = {}, n[t] = e.missing, n))), e.result;
		}
		return n.selectionSet && (r = r.filter(a.store.canRead)), r = r.map(function(e, r) {
			return e === null ? null : k(e) ? l(t.executeSubSelectedArray({
				field: n,
				array: e,
				enclosingRef: i,
				context: a
			}), r) : n.selectionSet ? l(t.executeSelectionSet({
				selectionSet: n.selectionSet,
				objectOrReference: e,
				enclosingRef: s(e) ? e : i,
				context: a
			}), r) : (globalThis.__DEV__ !== !1 && er(a.store, n, e), e);
		}), {
			result: a.canonizeResults ? this.canon.admit(r) : r,
			missing: o
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
function er(e, t, n) {
	if (!t.selectionSet) {
		var r = new Set([n]);
		r.forEach(function(n) {
			D(n) && (R(!s(n), 11, Nn(e, n), t.name.value), Object.values(n).forEach(r.add, r));
		});
	}
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/reactiveVars.js
var tr = new ye(), nr = /* @__PURE__ */ new WeakMap();
function rr(e) {
	var t = nr.get(e);
	return t || nr.set(e, t = {
		vars: /* @__PURE__ */ new Set(),
		dep: _e()
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
			return i === void 0 && t !== n.storeObject && X.call(t, e[0]) && (i = hr(t, e, mr)), R(i !== void 0, 5, e.join("."), t), i;
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
				if (r && I(r.directives)) {
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
	var n = new J();
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
			k(t) ? (pr(t).forEach(function(e) {
				return n.push(r.concat(e));
			}), r.length = 0) : (r.push(t), k(e[i + 1]) || (n.push(r.slice(0)), r.length = 0));
		});
	}
	return t.paths;
}
function mr(e, t) {
	return e[t];
}
function hr(e, t, n) {
	return n = n || mr, gr(t.reduce(function e(t, r) {
		return k(t) ? t.map(function(t) {
			return e(t, r);
		}) : t && n(t, r);
	}, e));
}
function gr(e) {
	return D(e) ? k(e) ? e.map(gr) : fr(Object.keys(e).sort(), function(t) {
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
		this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = F({ dataIdFromObject: kn }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
	}
	return e.prototype.identify = function(e, t) {
		var n = this, r = t && (t.typename || t.storeObject?.__typename) || e.__typename;
		if (r === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
		var i = t && t.storeObject || e, a = F(F({}, t), {
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
				var t = c(F(F({}, e), i), a);
				if (k(t)) c = ur(t);
				else {
					o = t;
					break;
				}
			}
		}), o = o ? String(o) : void 0, a.keyObject ? [o, a.keyObject] : [o];
	}, e.prototype.addTypePolicies = function(e) {
		var t = this;
		Object.keys(e).forEach(function(n) {
			var r = e[n], i = r.queryType, a = r.mutationType, o = r.subscriptionType, s = L(r, [
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
		o(r, t.merge), r.keyFn = i === !1 ? vr : k(i) ? ur(i) : typeof i == "function" ? i : r.keyFn, a && Object.keys(a).forEach(function(t) {
			var r = n[t];
			(!r || r?.typename !== e) && (r = n[t] = { typename: e });
			var i = a[t];
			if (typeof i == "function") r.read = i;
			else {
				var s = i.keyArgs, c = i.read, l = i.merge;
				r.keyFn = s === !1 ? yr : k(s) ? dr(s) : typeof s == "function" ? s : r.keyFn, typeof c == "function" && (r.read = c), o(r, l);
			}
			r.read && r.merge && (r.keyFn = r.keyFn || yr);
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
				var r = t.getTypePolicy(e), i = r.fields, a = L(r, ["fields"]);
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
		var t = e.typename, n = e.fieldName, i = this.getFieldPolicy(t, n), a, o = i && i.keyFn;
		if (o && t) for (var s = {
			typename: t,
			fieldName: n,
			field: e.field || null,
			variables: e.variables
		}, c = _r(e); o;) {
			var l = o(c, s);
			if (k(l)) o = dr(l);
			else {
				a = l || n;
				break;
			}
		}
		return a === void 0 && (a = e.field ? r(e.field, e.variables) : te(n, _r(e))), a === !1 ? n : n === Z(a) ? a : n + ":" + a;
	}, e.prototype.readField = function(e, t) {
		var n = e.from;
		if (n && (e.field || e.fieldName)) {
			if (e.typename === void 0) {
				var r = t.store.getFieldValue(n, "__typename");
				r && (e.typename = r);
			}
			var i = this.getStoreFieldName(e), a = Z(i), o = t.store.getFieldValue(n, i), c = this.getFieldPolicy(e.typename, a), l = c && c.read;
			if (l) {
				var u = Cr(this, n, e, t, t.store.getStorage(s(n) ? n.__ref : n, i));
				return tr.withValue(this.cache, l, [o, u]);
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
		return s === br ? Tr(r.store)(e, t) : s === xr ? t : (r.overwrite && (e = void 0), s(e, t, Cr(this, void 0, {
			typename: o,
			fieldName: a.name.value,
			field: a,
			variables: r.variables
		}, r, i || Object.create(null))));
	}, e;
}();
function Cr(e, t, n, r, i) {
	var a = e.getStoreFieldName(n), o = Z(a), c = n.variables || r.variables, l = r.store, u = l.toReference, d = l.canRead;
	return {
		args: _r(n),
		field: n.field || null,
		fieldName: o,
		storeFieldName: a,
		variables: c,
		isReference: s,
		toReference: u,
		storage: i,
		cache: e.cache,
		canRead: d,
		readField: function() {
			return e.readField(wr(arguments, t, c), r);
		},
		mergeObjects: Tr(r.store)
	};
}
function wr(e, t, n) {
	var r = e[0], i = e[1], a = e.length, o;
	return typeof r == "string" ? o = {
		fieldName: r,
		from: a > 1 ? i : t
	} : (o = F({}, r), X.call(o, "from") || (o.from = t)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && R.warn(8, pe(Array.from(e))), o.variables === void 0 && (o.variables = n), o;
}
function Tr(e) {
	return function(t, n) {
		if (k(t) || k(n)) throw N(9);
		if (D(t) && D(n)) {
			var r = e.getFieldValue(t, "__typename"), i = e.getFieldValue(n, "__typename");
			if (r && i && r !== i) return n;
			if (s(t) && In(n)) return e.merge(t.__ref, n), t;
			if (In(t) && s(n)) return e.merge(t, n.__ref), n;
			if (In(t) && In(n)) return F(F({}, t), n);
		}
		return n;
	};
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/writeToStore.js
function Er(e, t, n) {
	var r = `${t}${n}`, i = e.flavors.get(r);
	return i || e.flavors.set(r, i = e.clientOnly === t && e.deferred === n ? e : F(F({}, e), {
		clientOnly: t,
		deferred: n
	})), i;
}
var Dr = function() {
	function e(e, t, n) {
		this.cache = e, this.reader = t, this.fragments = n;
	}
	return e.prototype.writeToStore = function(e, t) {
		var n = this, r = t.query, i = t.result, a = t.dataId, o = t.variables, c = t.overwrite, l = Le(r), u = Ln();
		o = F(F({}, Ee(l)), o);
		var d = F(F({
			store: e,
			written: Object.create(null),
			merge: function(e, t) {
				return u.merge(e, t);
			},
			variables: o,
			varString: we(o)
		}, Rn(r, this.fragments)), {
			overwrite: !!c,
			incomingById: /* @__PURE__ */ new Map(),
			clientOnly: !1,
			deferred: !1,
			flavors: /* @__PURE__ */ new Map()
		}), f = this.processSelectionSet({
			result: i || Object.create(null),
			dataId: a,
			selectionSet: l.selectionSet,
			mergeTree: { map: /* @__PURE__ */ new Map() },
			context: d
		});
		if (!s(f)) throw N(12, i);
		return d.incomingById.forEach(function(t, r) {
			var i = t.storeObject, a = t.mergeTree, o = t.fieldNodeSet, c = C(r);
			if (a && a.map.size) {
				var l = n.applyMerges(a, c, i, d);
				if (s(l)) return;
				i = l;
			}
			if (globalThis.__DEV__ !== !1 && !d.overwrite) {
				var u = Object.create(null);
				o.forEach(function(e) {
					e.selectionSet && (u[e.name.value] = !0);
				});
				var f = function(e) {
					return u[Z(e)] === !0;
				}, p = function(e) {
					var t = a && a.map.get(e);
					return !!(t && t.info && t.info.merge);
				};
				Object.keys(i).forEach(function(e) {
					f(e) && !p(e) && Pr(c, i, e, d.store);
				});
			}
			e.merge(r, i);
		}), e.retain(f.__ref), f;
	}, e.prototype.processSelectionSet = function(e) {
		var t = this, n = e.dataId, r = e.result, i = e.selectionSet, a = e.context, c = e.mergeTree, l = this.cache.policies, u = Object.create(null), d = n && l.rootTypenamesById[n] || o(r, i, a.fragmentMap) || n && a.store.get(n, "__typename");
		typeof d == "string" && (u.__typename = d);
		var f = function() {
			var e = wr(arguments, u, a.variables);
			if (s(e.from)) {
				var t = a.incomingById.get(e.from.__ref);
				if (t) {
					var n = l.readField(F(F({}, e), { from: t.storeObject }), a);
					if (n !== void 0) return n;
				}
			}
			return l.readField(e, a);
		}, p = /* @__PURE__ */ new Set();
		this.flattenFields(i, r, a, d).forEach(function(e, n) {
			var i, a = r[P(n)];
			if (p.add(n), a !== void 0) {
				var o = l.getStoreFieldName({
					typename: d,
					fieldName: n.name.value,
					field: n,
					variables: e.variables
				}), m = kr(c, o), h = t.processFieldValue(a, n, n.selectionSet ? Er(e, !1, !1) : e, m), g = void 0;
				n.selectionSet && (s(h) || In(h)) && (g = f("__typename", h));
				var _ = l.getMergeFunction(d, n.name.value, g);
				_ ? m.info = {
					field: n,
					typename: d,
					merge: _
				} : Mr(c, o), u = e.merge(u, (i = {}, i[o] = h, i));
			} else globalThis.__DEV__ !== !1 && !e.clientOnly && !e.deferred && !dt.added(n) && !l.getReadFunction(d, n.name.value) && globalThis.__DEV__ !== !1 && R.error(13, P(n), r);
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
			var _ = C(n), v = a.written[n] || (a.written[n] = []);
			if (v.indexOf(i) >= 0 || (v.push(i), this.reader && this.reader.isFresh(r, _, i, a))) return _;
			var y = a.incomingById.get(n);
			return y ? (y.storeObject = a.merge(y.storeObject, u), y.mergeTree = Ar(y.mergeTree, c), p.forEach(function(e) {
				return y.fieldNodeSet.add(e);
			})) : a.incomingById.set(n, {
				storeObject: u,
				mergeTree: jr(c) ? void 0 : c,
				fieldNodeSet: p
			}), _;
		}
		return u;
	}, e.prototype.processFieldValue = function(e, t, n, r) {
		var i = this;
		return !t.selectionSet || e === null ? globalThis.__DEV__ === !1 ? e : ke(e) : k(e) ? e.map(function(e, a) {
			var o = i.processFieldValue(e, t, n, kr(r, a));
			return Mr(r, a), o;
		}) : this.processSelectionSet({
			result: e,
			selectionSet: t.selectionSet,
			context: n,
			mergeTree: r
		});
	}, e.prototype.flattenFields = function(e, t, n, r) {
		r === void 0 && (r = o(t, e, n.fragmentMap));
		var i = /* @__PURE__ */ new Map(), s = this.cache.policies, c = new Me(!1);
		return (function e(o, l) {
			var u = c.lookup(o, l.clientOnly, l.deferred);
			u.visited || (u.visited = !0, o.selections.forEach(function(o) {
				if (de(o, n.variables)) {
					var c = l.clientOnly, u = l.deferred;
					if (!(c && u) && I(o.directives) && o.directives.forEach(function(e) {
						var t = e.name.value;
						if (t === "client" && (c = !0), t === "defer") {
							var r = Be(e, n.variables);
							(!r || r.if !== !1) && (u = !0);
						}
					}), re(o)) {
						var d = i.get(o);
						d && (c = c && d.clientOnly, u = u && d.deferred), i.set(o, Er(n, c, u));
					} else {
						var f = a(o, n.lookupFragment);
						if (!f && o.kind === B.FRAGMENT_SPREAD) throw N(14, o.name.value);
						f && s.fragmentMatches(f, r, t, n.variables) && e(f.selectionSet, Er(n, c, u));
					}
				}
			}));
		})(e, n), i;
	}, e.prototype.applyMerges = function(e, t, n, r, i) {
		var a, o = this;
		if (e.map.size && !s(n)) {
			var c = !k(n) && (s(t) || In(t)) ? t : void 0, l = n;
			c && !i && (i = [s(c) ? c.__ref : c]);
			var u, d = function(e, t) {
				return k(e) ? typeof t == "number" ? e[t] : void 0 : r.store.getFieldValue(e, String(t));
			};
			e.map.forEach(function(e, t) {
				var n = d(c, t), a = d(l, t);
				if (a !== void 0) {
					i && i.push(t);
					var s = o.applyMerges(e, n, a, r, i);
					s !== a && (u = u || /* @__PURE__ */ new Map(), u.set(t, s)), i && R(i.pop() === t);
				}
			}), u && (n = k(l) ? l.slice(0) : F({}, l), u.forEach(function(e, t) {
				n[t] = e;
			}));
		}
		return e.info ? this.cache.policies.runMergeFunction(t, n, e.info, r, i && (a = r.store).getStorage.apply(a, i)) : n;
	}, e;
}(), Or = [];
function kr(e, t) {
	var n = e.map;
	return n.has(t) || n.set(t, Or.pop() || { map: /* @__PURE__ */ new Map() }), n.get(t);
}
function Ar(e, t) {
	if (e === t || !t || jr(t)) return e;
	if (!e || jr(e)) return t;
	var n = e.info && t.info ? F(F({}, e.info), t.info) : e.info || t.info, r = e.map.size && t.map.size, i = {
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
function Pr(e, t, n, r) {
	var i = function(e) {
		var t = r.getFieldValue(e, n);
		return typeof t == "object" && t;
	}, a = i(e);
	if (a) {
		var o = i(t);
		if (o && !s(a) && !O(a, o) && !Object.keys(a).every(function(e) {
			return r.getFieldValue(o, e) !== void 0;
		})) {
			var c = r.getFieldValue(e, "__typename") || r.getFieldValue(t, "__typename"), l = Z(n), u = `${c}.${l}`;
			if (!Nr.has(u)) {
				Nr.add(u);
				var d = [];
				!k(a) && !k(o) && [a, o].forEach(function(e) {
					var t = r.getFieldValue(e, "__typename");
					typeof t == "string" && !d.includes(t) && d.push(t);
				}), globalThis.__DEV__ !== !1 && R.warn(15, l, c, d.length ? "either ensure all objects of type " + d.join(" and ") + " have an ID or a custom merge function, or " : "", u, F({}, a), F({}, o));
			}
		}
	}
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
var Fr = function(e) {
	A(t, e);
	function t(t) {
		t === void 0 && (t = {});
		var n = e.call(this) || this;
		return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new rt(dt), n.assumeImmutableResults = !0, n.makeVar = or, n.txCount = 0, globalThis.__DEV__ !== !1 && (j(t, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`."), j(t, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.")), n.config = jn(t), n.addTypename = !!n.config.addTypename, n.policies = new Sr({
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
		}), r), this.maybeBroadcastWatch = Ie(function(e, n) {
			return t.broadcastWatch(e, n);
		}, {
			max: this.config.resultCacheMaxSize || h["inMemoryCache.maybeBroadcastWatch"] || 5e3,
			makeCacheKey: function(e) {
				var n = e.optimistic ? t.optimisticData : t.data;
				if (Jn(n)) {
					var r = e.optimistic, i = e.id, a = e.variables;
					return n.makeCacheKey(e.query, e.callback, we({
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
		globalThis.__DEV__ !== !1 && j(e, "canonizeResults", "cache.read");
		var t = e.returnPartialData, n = t === void 0 ? !1 : t;
		try {
			return this.storeReader.diffQueryAgainstStore(F(F({}, e), {
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
		return globalThis.__DEV__ !== !1 && j(e, "canonizeResults", "cache.diff"), this.storeReader.diffQueryAgainstStore(F(F({}, e), {
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
		globalThis.__DEV__ !== !1 && j(e || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option."), we.reset(), q.reset();
		var t = this.optimisticData.gc();
		return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t;
	}, t.prototype.retain = function(e, t) {
		return (t ? this.optimisticData : this.data).retain(e);
	}, t.prototype.release = function(e, t) {
		return (t ? this.optimisticData : this.data).release(e);
	}, t.prototype.identify = function(e) {
		if (s(e)) return e.__ref;
		try {
			return this.policies.identify(e)[0];
		} catch (e) {
			globalThis.__DEV__ !== !1 && R.warn(e);
		}
	}, t.prototype.evict = function(e) {
		if (!e.id) {
			if (X.call(e, "id")) return !1;
			e = F(F({}, e), { id: "ROOT_QUERY" });
		}
		try {
			return ++this.txCount, this.optimisticData.evict(e, this.data);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, t.prototype.reset = function(e) {
		var t = this;
		return this.init(), we.reset(), e && e.discardWatches ? (this.watches.forEach(function(e) {
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
		return o && !this.txCount && this.broadcastWatches(F(F({}, e), { onWatchUpdated: function(e) {
			return l.add(e), !1;
		} })), typeof i == "string" ? this.optimisticData = this.optimisticData.addLayer(i, c) : i === !1 ? c(this.data) : c(), typeof a == "string" && (this.optimisticData = this.optimisticData.removeLayer(a)), o && l.size ? (this.broadcastWatches(F(F({}, e), { onWatchUpdated: function(e, t) {
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
		var n = this, r = e.lastDiff, i = T("canonizeResults", function() {
			return n.diff(e);
		});
		t && (e.optimistic && typeof t.optimistic == "string" && (i.fromOptimisticTransaction = !0), t.onWatchUpdated && t.onWatchUpdated.call(this, e, i, r) === !1) || (!r || !O(r.result, i.result)) && e.callback(e.lastDiff = i, r);
	}, t;
}(En);
globalThis.__DEV__ !== !1 && (Fr.prototype.getMemoryInternals = w);
//#endregion
//#region node_modules/@apollo/client/core/QueryInfo.js
var Ir = new (f ? WeakMap : Map)();
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
		var t = e.networkStatus || p.loading;
		return this.variables && this.networkStatus !== p.loading && !O(this.variables, e.variables) && (t = p.setVariables), O(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
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
		if (this.lastDiff && O(t, this.lastDiff.options)) return this.lastDiff.diff;
		this.updateWatch(this.variables);
		var n = this.observableQuery;
		if (n && n.options.fetchPolicy === "no-cache") return { complete: !1 };
		var r = T("canonizeResults", function() {
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
		e && !e.complete && T("getLastError", function() {
			return t.observableQuery?.getLastError();
		}) || (this.updateLastDiff(e), O(r && r.result, e && e.result) || (n = this.observableQuery) == null || n.scheduleNotify());
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
			var r = F(F({}, this.getDiffOptions(e)), {
				watcher: this,
				callback: function(e) {
					return t.setDiff(e);
				}
			});
			(!this.lastWatch || !O(r, this.lastWatch)) && (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = r));
		}
	}, e.prototype.resetLastWrite = function() {
		this.lastWrite = void 0;
	}, e.prototype.shouldWrite = function(e, t) {
		var n = this.lastWrite;
		return !(n && n.dmCount === Ir.get(this.cache) && O(t, n.variables) && O(e.data, n.result.data));
	}, e.prototype.markResult = function(e, t, n, r) {
		var i = this, a, o = new J(), s = I(e.errors) ? e.errors.slice(0) : [];
		if ((a = this.observableQuery) == null || a.resetNotifications(), "incremental" in e && I(e.incremental)) e.data = Et(this.getDiff().result, e);
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
			var o = i.getDiffOptions(n.variables), s = T("canonizeResults", function() {
				return a.diff(o);
			});
			!i.stopped && O(i.variables, n.variables) && i.updateWatch(n.variables), i.updateLastDiff(s, o), s.complete && (e.data = s.result);
		}) : this.lastWrite = void 0);
	}, e.prototype.markReady = function() {
		return this.networkError = null, this.networkStatus = p.ready;
	}, e.prototype.markError = function(e) {
		var t;
		return this.networkStatus = p.error, this.lastWrite = void 0, (t = this.observableQuery) == null || t.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
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
	function e(e) {
		var t = this;
		this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new b(h["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Me(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
		var n = new rt(function(e) {
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
		}), this.cancelPendingFetches(N(35));
	}, e.prototype.cancelPendingFetches = function(e) {
		this.fetchCancelFns.forEach(function(t) {
			return t(e);
		}), this.fetchCancelFns.clear();
	}, e.prototype.mutate = function(e) {
		return V(this, arguments, void 0, function(e) {
			var t, n, r, i, a, o = e.mutation, s = e.variables, c = e.optimisticResponse, l = e.updateQueries, u = e.refetchQueries, f = u === void 0 ? [] : u, p = e.awaitRefetchQueries, m = p === void 0 ? !1 : p, h = e.update, g = e.onQueryUpdated, _ = e.fetchPolicy, v = _ === void 0 ? this.defaultOptions.mutate?.fetchPolicy || "network-only" : _, y = e.errorPolicy, b = y === void 0 ? this.defaultOptions.mutate?.errorPolicy || "none" : y, x = e.keepRootFields, S = e.context;
			return M(this, function(e) {
				switch (e.label) {
					case 0: return R(o, 36), R(v === "network-only" || v === "no-cache", 37), t = this.generateMutationId(), o = this.cache.transformForLink(this.transform(o)), n = this.getDocumentInfo(o).hasClientExports, s = this.getVariables(o, s), n ? [4, this.localState.addExportedVariables(o, s, S)] : [3, 2];
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
						return yt(a.getObservableFromLink(o, F(F({}, S), { optimisticResponse: i ? c : void 0 }), s, {}, !1), function(e) {
							if (Dt(e) && b === "none") throw new d({ graphQLErrors: Ot(e) });
							r && (r.loading = !1, r.error = null);
							var n = F({}, e);
							return typeof f == "function" && (f = f(n)), b === "ignore" && Dt(n) && delete n.errors, a.markMutationResult({
								mutationId: t,
								result: n,
								document: o,
								variables: s,
								fetchPolicy: v,
								errorPolicy: b,
								context: S,
								update: h,
								updateQueries: l,
								awaitRefetchQueries: m,
								refetchQueries: f,
								removeOptimistic: i ? t : void 0,
								onQueryUpdated: g,
								keepRootFields: x
							});
						}).subscribe({
							next: function(n) {
								a.broadcastQueries(), (!("hasNext" in n) || n.hasNext === !1) && e(F(F({}, n), { data: a.maskOperation({
									document: o,
									data: n.data,
									fetchPolicy: v,
									id: t
								}) }));
							},
							error: function(e) {
								r && (r.loading = !1, r.error = e), i && a.cache.removeOptimistic(t), a.broadcastQueries(), n(e instanceof d ? e : new d({ networkError: e }));
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
		if (!a && zr(r, e.errorPolicy)) {
			if (St(r) || i.push({
				result: r.data,
				dataId: "ROOT_MUTATION",
				query: e.document,
				variables: e.variables
			}), St(r) && I(r.incremental)) {
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
							queryName: d && Ve(d) || void 0,
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
							c.complete && (r = F(F({}, r), { data: c.result }), "incremental" in r && delete r.incremental, "hasNext" in r && delete r.hasNext);
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
		var n = this, r = typeof e == "function" ? e(t.variables, { IGNORE: Vr }) : e;
		return r === Vr ? !1 : (this.cache.recordOptimisticTransaction(function(e) {
			try {
				n.markMutationResult(F(F({}, t), { result: { data: r } }), e);
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
				hasClientExports: ue(e),
				hasForcedResolvers: this.localState.shouldForceResolvers(e),
				hasNonreactiveDirective: le(["nonreactive"], e),
				nonReactiveQuery: mt(e),
				clientQuery: this.localState.clientQuery(e),
				serverQuery: ut([
					{
						name: "client",
						remove: !0
					},
					{ name: "connection" },
					{ name: "nonreactive" },
					{ name: "unmask" }
				], e),
				defaultVars: Ee(Le(e)),
				asQuery: F(F({}, e), { definitions: e.definitions.map(function(e) {
					return e.kind === "OperationDefinition" && e.operation !== "query" ? F(F({}, e), { operation: "query" }) : e;
				}) })
			};
			t.set(e, n);
		}
		return t.get(e);
	}, e.prototype.getVariables = function(e, t) {
		return F(F({}, this.getDocumentInfo(e).defaultVars), t);
	}, e.prototype.watchQuery = function(e) {
		var t = this.transform(e.query);
		e = F(F({}, e), { variables: this.getVariables(t, e.variables) }), e.notifyOnNetworkStatusChange === void 0 && (e.notifyOnNetworkStatusChange = !1);
		var n = new Rr(this), r = new i({
			queryManager: this,
			queryInfo: n,
			options: e
		});
		return r.lastQuery = t, i.inactiveOnCreation.getValue() || this.queries.set(r.queryId, n), n.init({
			document: t,
			observableQuery: r,
			variables: r.variables
		}), r;
	}, e.prototype.query = function(e, t) {
		var n = this;
		t === void 0 && (t = this.generateQueryId()), R(e.query, 38), R(e.query.kind === "Document", 39), R(!e.returnPartialData, 40), R(!e.pollInterval, 41);
		var r = this.transform(e.query);
		return this.fetchQuery(t, F(F({}, e), { query: r })).then(function(i) {
			return i && F(F({}, i), { data: n.maskOperation({
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
		return e === void 0 && (e = { discardWatches: !0 }), this.cancelPendingFetches(N(42)), this.queries.forEach(function(e) {
			e.observableQuery ? e.networkStatus = p.loading : e.stop();
		}), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e);
	}, e.prototype.getObservableQueries = function(e) {
		var t = this;
		e === void 0 && (e = "active");
		var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
		return Array.isArray(e) && e.forEach(function(e) {
			if (typeof e == "string") r.set(e, e), a.set(e, !1);
			else if (ze(e)) {
				var n = q(t.transform(e));
				r.set(n, Ve(e)), a.set(n, !1);
			} else D(e) && e.query && o.add(e);
		}), this.queries.forEach(function(t, r) {
			var i = t.observableQuery, o = t.document;
			if (i) {
				if (e === "all") {
					n.set(r, i);
					return;
				}
				var s = i.queryName;
				if (i.options.fetchPolicy === "standby" || e === "active" && !i.hasObservers()) return;
				(e === "active" || s && a.has(s) || o && a.has(q(o))) && (n.set(r, i), s && a.set(s, !0), o && a.set(q(o), !0));
			}
		}), o.size && o.forEach(function(e) {
			var r = Oe("legacyOneTimeQuery"), a = t.getOrCreateQuery(r).init({
				document: e.query,
				variables: e.variables
			}), o = new i({
				queryManager: t,
				queryInfo: a,
				options: F(F({}, e), { fetchPolicy: "network-only" })
			});
			R(o.queryId === r), a.setObservableQuery(o), n.set(r, o);
		}), globalThis.__DEV__ !== !1 && a.size && a.forEach(function(e, t) {
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
			T("resetLastResults", function() {
				return r.resetLastResults();
			}), (e || a !== "standby" && a !== "cache-only") && n.push(r.refetch()), (t.queries.get(i) || r.queryInfo).setDiff(null);
		}), this.broadcastQueries(), Promise.all(n);
	}, e.prototype.startGraphQLSubscription = function(e) {
		var t = this, n = e.query, r = e.variables, i = e.fetchPolicy, a = e.errorPolicy, o = a === void 0 ? "none" : a, s = e.context, c = s === void 0 ? {} : s, l = e.extensions, u = l === void 0 ? {} : l;
		n = this.transform(n), r = this.getVariables(n, r);
		var f = function(e) {
			return t.getObservableFromLink(n, c, e, u).map(function(r) {
				i !== "no-cache" && (zr(r, o) && t.cache.write({
					query: n,
					result: r.data,
					dataId: "ROOT_SUBSCRIPTION",
					variables: e
				}), t.broadcastQueries());
				var a = Dt(r), s = je(r);
				if (a || s) {
					var c = {};
					if (a && (c.graphQLErrors = r.errors), s && (c.protocolErrors = r.extensions[v]), o === "none" || s) throw new d(c);
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
	}, e.prototype.getObservableFromLink = function(e, t, n, r, i) {
		var a = this;
		i === void 0 && (i = t?.queryDeduplication ?? this.queryDeduplication);
		var o, s = this.getDocumentInfo(e), c = s.serverQuery, l = s.clientQuery;
		if (c) {
			var u = this, d = u.inFlightLinkObservables, f = u.link, p = {
				query: c,
				variables: n,
				operationName: Ve(c) || void 0,
				context: this.prepareContext(F(F({}, t), { forceFetch: !i })),
				extensions: r
			};
			if (t = p.context, i) {
				var m = q(c), h = we(n), g = d.lookup(m, h);
				if (o = g.observable, !o) {
					var _ = new xt([zt(f, p)]);
					o = g.observable = _, _.beforeNext(function e(t, n) {
						t === "next" && "hasNext" in n && n.hasNext ? _.beforeNext(e) : d.remove(m, h);
					});
				}
			} else o = new xt([zt(f, p)]);
		} else o = new xt([z.of({ data: {} })]), t = this.prepareContext(t);
		return l && (o = yt(o, function(e) {
			return a.localState.runResolvers({
				document: l,
				remoteResult: e,
				context: t,
				variables: n
			});
		})), o;
	}, e.prototype.getResultsFromLink = function(e, t, n) {
		var r = e.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(n.query);
		return yt(this.getObservableFromLink(i, n.context, n.variables), function(a) {
			var o = Ot(a), s = o.length > 0, c = n.errorPolicy;
			if (r >= e.lastRequestId) {
				if (s && c === "none") throw e.markError(new d({ graphQLErrors: o }));
				e.markResult(a, i, n, t), e.markReady();
			}
			var l = {
				data: a.data,
				loading: !1,
				networkStatus: p.ready
			};
			return s && c === "none" && (l.data = void 0), s && c !== "ignore" && (l.errors = o, l.networkStatus = p.error), l;
		}, function(t) {
			var n = g(t) ? t : new d({ networkError: t });
			throw r >= e.lastRequestId && e.markError(n), n;
		});
	}, e.prototype.fetchConcastWithInfo = function(e, t, n, r) {
		var i = this;
		n === void 0 && (n = p.loading), r === void 0 && (r = t.query);
		var a = this.getVariables(r, t.variables), o = this.defaultOptions.watchQuery, s = t.fetchPolicy, c = s === void 0 ? o && o.fetchPolicy || "cache-first" : s, l = t.errorPolicy, u = l === void 0 ? o && o.errorPolicy || "none" : l, d = t.returnPartialData, f = d === void 0 ? !1 : d, m = t.notifyOnNetworkStatusChange, h = m === void 0 ? !1 : m, g = t.context, _ = Object.assign({}, t, {
			query: r,
			variables: a,
			fetchPolicy: c,
			errorPolicy: u,
			returnPartialData: f,
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
		if (this.getDocumentInfo(_.query).hasClientExports) b = new xt(this.localState.addExportedVariables(_.query, _.variables, _.context).then(v).then(function(e) {
			return e.sources;
		})), x = !0;
		else {
			var S = v(_.variables);
			x = S.fromLink, b = new xt(S.sources);
		}
		return b.promise.then(y, y), {
			concast: b,
			fromLink: x
		};
	}, e.prototype.refetchQueries = function(e) {
		var t = this, n = e.updateCache, r = e.include, i = e.optimistic, a = i === void 0 ? !1 : i, o = e.removeOptimistic, s = o === void 0 ? a ? Oe("refetchQueries") : void 0 : o, c = e.onQueryUpdated, l = /* @__PURE__ */ new Map();
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
			c && (a || (a = T("canonizeResults", function() {
				return t.cache.diff(r.queryInfo.getDiffOptions());
			})), o = c(r, a, i)), (!c || o === !0) && (o = r.refetch()), o !== !1 && u.set(r, o), n.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(n);
		}), s && this.cache.removeOptimistic(s), u;
	}, e.prototype.maskOperation = function(e) {
		var t = e.document, n = e.data;
		if (globalThis.__DEV__ !== !1) {
			var r = e.fetchPolicy, i = e.id, a = Le(t)?.operation, o = (a?.[0] ?? "o") + i;
			this.dataMasking && r === "no-cache" && !m(t) && !this.noCacheWarningsByQueryId.has(o) && (this.noCacheWarningsByQueryId.add(o), globalThis.__DEV__ !== !1 && R.warn(45, Ve(t) ?? `Unnamed ${a ?? "operation"}`));
		}
		return this.dataMasking ? Tn(n, t, this.cache) : n;
	}, e.prototype.maskFragment = function(e) {
		var t = e.data, n = e.fragment, r = e.fragmentName;
		return this.dataMasking ? wn(t, n, this.cache, r) : t;
	}, e.prototype.fetchQueryByPolicy = function(e, t, n) {
		var r = this, i = t.query, a = t.variables, o = t.fetchPolicy, s = t.refetchWritePolicy, c = t.errorPolicy, l = t.returnPartialData, u = t.context, d = t.notifyOnNetworkStatusChange, f = e.networkStatus;
		e.init({
			document: i,
			variables: a,
			networkStatus: n
		});
		var m = function() {
			return e.getDiff();
		}, h = function(t, n) {
			n === void 0 && (n = e.networkStatus || p.loading);
			var o = t.result;
			globalThis.__DEV__ !== !1 && !l && !O(o, {}) && ae(t.missing);
			var s = function(e) {
				return z.of(F({
					data: e,
					loading: ie(n),
					networkStatus: n
				}, t.complete ? null : { partial: !0 }));
			};
			return o && r.getDocumentInfo(i).hasForcedResolvers ? r.localState.runResolvers({
				document: i,
				remoteResult: { data: o },
				context: u,
				variables: a,
				onlyRunForcedResolvers: !0
			}).then(function(e) {
				return s(e.data || void 0);
			}) : c === "none" && n === p.refetch && Array.isArray(t.missing) ? s(void 0) : s(o);
		}, g = o === "no-cache" ? 0 : n === p.refetch && s !== "merge" ? 1 : 2, _ = function() {
			return r.getResultsFromLink(e, g, {
				query: i,
				variables: a,
				context: u,
				fetchPolicy: o,
				errorPolicy: c
			});
		}, v = d && typeof f == "number" && f !== n && ie(n);
		switch (o) {
			default:
			case "cache-first":
				var y = m();
				return y.complete ? {
					fromLink: !1,
					sources: [h(y, e.markReady())]
				} : l || v ? {
					fromLink: !0,
					sources: [h(y), _()]
				} : {
					fromLink: !0,
					sources: [_()]
				};
			case "cache-and-network":
				var y = m();
				return y.complete || l || v ? {
					fromLink: !0,
					sources: [h(y), _()]
				} : {
					fromLink: !0,
					sources: [_()]
				};
			case "cache-only": return {
				fromLink: !1,
				sources: [h(m(), e.markReady())]
			};
			case "network-only": return v ? {
				fromLink: !0,
				sources: [h(m()), _()]
			} : {
				fromLink: !0,
				sources: [_()]
			};
			case "no-cache": return v ? {
				fromLink: !0,
				sources: [h(e.getDiff()), _()]
			} : {
				fromLink: !0,
				sources: [_()]
			};
			case "standby": return {
				fromLink: !1,
				sources: []
			};
		}
	}, e.prototype.getOrCreateQuery = function(e) {
		return e && !this.queries.has(e) && this.queries.set(e, new Rr(this, e)), this.queries.get(e);
	}, e.prototype.prepareContext = function(e) {
		e === void 0 && (e = {});
		var t = this.localState.prepareContext(e);
		return F(F(F({}, this.defaultContext), t), { clientAwareness: this.clientAwareness });
	}, e;
}(), Ur = function() {
	function e(e) {
		var t = e.cache, n = e.client, r = e.resolvers, i = e.fragmentMatcher;
		this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = t, n && (this.client = n), r && this.addResolvers(r), i && this.setFragmentMatcher(i);
	}
	return e.prototype.addResolvers = function(e) {
		var t = this;
		this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(e) {
			t.resolvers = gt(t.resolvers, e);
		}) : this.resolvers = gt(this.resolvers, e);
	}, e.prototype.setResolvers = function(e) {
		this.resolvers = {}, this.addResolvers(e);
	}, e.prototype.getResolvers = function() {
		return this.resolvers || {};
	}, e.prototype.runResolvers = function(e) {
		return V(this, arguments, void 0, function(e) {
			var t = e.document, n = e.remoteResult, r = e.context, i = e.variables, a = e.onlyRunForcedResolvers, o = a === void 0 ? !1 : a;
			return M(this, function(e) {
				return t ? [2, this.resolveDocument(t, n.data, r, i, this.fragmentMatcher, o).then(function(e) {
					return F(F({}, n), { data: e.result });
				})] : [2, n];
			});
		});
	}, e.prototype.setFragmentMatcher = function(e) {
		this.fragmentMatcher = e;
	}, e.prototype.getFragmentMatcher = function() {
		return this.fragmentMatcher;
	}, e.prototype.clientQuery = function(e) {
		return le(["client"], e) && this.resolvers ? e : null;
	}, e.prototype.serverQuery = function(e) {
		return pt(e);
	}, e.prototype.prepareContext = function(e) {
		var t = this.cache;
		return F(F({}, e), {
			cache: t,
			getCacheKey: function(e) {
				return t.identify(e);
			}
		});
	}, e.prototype.addExportedVariables = function(e) {
		return V(this, arguments, void 0, function(e, t, n) {
			return t === void 0 && (t = {}), n === void 0 && (n = {}), M(this, function(r) {
				return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(n), t).then(function(e) {
					return F(F({}, t), e.exportedVariables);
				})] : [2, F({}, t)];
			});
		});
	}, e.prototype.shouldForceResolvers = function(e) {
		var n = !1;
		return t(e, { Directive: { enter: function(e) {
			if (e.name.value === "client" && e.arguments && (n = e.arguments.some(function(e) {
				return e.name.value === "always" && e.value.kind === "BooleanValue" && e.value.value === !0;
			}), n)) return E;
		} } }), n;
	}, e.prototype.buildRootValueFromCache = function(e, t) {
		return this.cache.diff({
			query: ft(e),
			variables: t,
			returnPartialData: !0,
			optimistic: !1
		}).result;
	}, e.prototype.resolveDocument = function(e, t) {
		return V(this, arguments, void 0, function(e, t, n, r, i, a) {
			var o, s, c, l, u, d, f, p, m, h, g;
			return n === void 0 && (n = {}), r === void 0 && (r = {}), i === void 0 && (i = function() {
				return !0;
			}), a === void 0 && (a = !1), M(this, function(_) {
				return o = fe(e), s = xe(e), c = He(s), l = this.collectSelectionsToResolve(o, c), u = o.operation, d = u ? u.charAt(0).toUpperCase() + u.slice(1) : "Query", f = this, p = f.cache, m = f.client, h = {
					fragmentMap: c,
					context: F(F({}, n), {
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
		return V(this, void 0, void 0, function() {
			var i, a, o, s, l, u = this;
			return M(this, function(d) {
				return i = r.fragmentMap, a = r.context, o = r.variables, s = [n], l = function(e) {
					return V(u, void 0, void 0, function() {
						var l, u;
						return M(this, function(d) {
							return !t && !r.selectionsToResolve.has(e) || !de(e, o) ? [2] : re(e) ? [2, this.resolveField(e, t, n, r).then(function(t) {
								var n;
								t !== void 0 && s.push((n = {}, n[P(e)] = t, n));
							})] : (c(e) ? l = e : (l = i[e.name.value], R(l, 21, e.name.value)), l && l.typeCondition && (u = l.typeCondition.name.value, r.fragmentMatcher(n, u, a)) ? [2, this.resolveSelectionSet(l.selectionSet, t, n, r).then(function(e) {
								s.push(e);
							})] : [2]);
						});
					});
				}, [2, Promise.all(e.selections.map(l)).then(function() {
					return _t(s);
				})];
			});
		});
	}, e.prototype.resolveField = function(e, t, n, r) {
		return V(this, void 0, void 0, function() {
			var i, a, o, s, c, l, u, d, f, p = this;
			return M(this, function(m) {
				return n ? (i = r.variables, a = e.name.value, o = P(e), s = a !== o, c = n[o] || n[a], l = Promise.resolve(c), (!r.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (u = n.__typename || r.defaultOperationType, d = this.resolvers && this.resolvers[u], d && (f = d[s ? a : o], f && (l = Promise.resolve(tr.withValue(this.cache, f, [
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
	}, e.prototype.resolveSubSelectedArray = function(e, t, n, r) {
		var i = this;
		return Promise.all(n.map(function(n) {
			if (n === null) return null;
			if (Array.isArray(n)) return i.resolveSubSelectedArray(e, t, n, r);
			if (e.selectionSet) return i.resolveSelectionSet(e.selectionSet, t, n, r);
		}));
	}, e.prototype.collectSelectionsToResolve = function(e, n) {
		var r = function(e) {
			return !Array.isArray(e);
		}, i = this.selectionsToResolveCache;
		function a(e) {
			if (!i.has(e)) {
				var o = /* @__PURE__ */ new Set();
				i.set(e, o), t(e, {
					Directive: function(e, t, n, i, a) {
						e.name.value === "client" && a.forEach(function(e) {
							r(e) && tt(e) && o.add(e);
						});
					},
					FragmentSpread: function(e, t, i, s, c) {
						var l = n[e.name.value];
						R(l, 22, e.name.value);
						var u = a(l);
						u.size > 0 && (c.forEach(function(e) {
							r(e) && tt(e) && o.add(e);
						}), o.add(e), u.forEach(function(e) {
							o.add(e);
						}));
					}
				});
			}
			return i.get(e);
		}
		return a(e);
	}, e;
}(), Wr = !1, Gr = function() {
	function e(e) {
		var t = this;
		if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache) throw N(16);
		var n = e.uri, r = e.credentials, i = e.headers, a = e.cache, o = e.documentTransform, s = e.ssrMode, c = s === void 0 ? !1 : s, l = e.ssrForceFetchDelay, u = l === void 0 ? 0 : l, d = e.connectToDevTools, f = e.queryDeduplication, p = f === void 0 ? !0 : f, m = e.defaultOptions, h = e.defaultContext, g = e.assumeImmutableResults, _ = g === void 0 ? a.assumeImmutableResults : g, v = e.resolvers, y = e.typeDefs, b = e.fragmentMatcher, x = e.clientAwareness, S = e.name, C = e.version, w = e.devtools, T = e.dataMasking;
		globalThis.__DEV__ !== !1 && (j(e, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead."), j(e, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead."), j(e, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead."), j(e, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead."), j(e, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead."), j(e, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead."), j(e, "typeDefs", "ApolloClient"), e.link || globalThis.__DEV__ !== !1 && R.warn(17));
		var E = e.link;
		E || (E = n ? new mn({
			uri: n,
			credentials: r,
			headers: i
		}) : Y.empty()), this.link = E, this.cache = a, this.disableNetworkFetches = c || u > 0, this.queryDeduplication = p, this.defaultOptions = m || Object.create(null), this.typeDefs = y, this.devtoolsConfig = F(F({}, w), { enabled: w?.enabled ?? d }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), u && setTimeout(function() {
			return t.disableNetworkFetches = !1;
		}, u), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = ge, this.localState = new Ur({
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
					typeof t == "string" && (t.indexOf("Chrome/") > -1 ? n = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : t.indexOf("Firefox/") > -1 && (n = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), n && globalThis.__DEV__ !== !1 && R.log("Download the Apollo DevTools for a better development experience: %s", n);
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
		return this.defaultOptions.watchQuery && (e = Fe(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = F(F({}, e), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (j(e, "canonizeResults", "client.watchQuery"), j(e, "partialRefetch", "client.watchQuery")), this.queryManager.watchQuery(e);
	}, e.prototype.query = function(e) {
		return this.defaultOptions.query && (e = Fe(this.defaultOptions.query, e)), R(e.fetchPolicy !== "cache-and-network", 18), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = F(F({}, e), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (j(e, "canonizeResults", "client.query"), j(e, "notifyOnNetworkStatusChange", "client.query", "This option does not affect `client.query` and can be safely removed."), e.fetchPolicy === "standby" && globalThis.__DEV__ !== !1 && R.warn(19)), this.queryManager.query(e);
	}, e.prototype.mutate = function(e) {
		return this.defaultOptions.mutate && (e = Fe(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
	}, e.prototype.subscribe = function(e) {
		var t = this, n = this.queryManager.generateQueryId();
		return this.queryManager.startGraphQLSubscription(e).map(function(r) {
			return F(F({}, r), { data: t.queryManager.maskOperation({
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
		return this.cache.watchFragment(F(F({}, e), (t = {}, t[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, t)));
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
			globalThis.__DEV__ !== !1 && R.debug(20, e);
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
globalThis.__DEV__ !== !1 && (Gr.prototype.getMemoryInternals = S);
//#endregion
//#region node_modules/@apollo/client/link/context/index.js
function Kr(e) {
	return new Y(function(t, n) {
		var r = L(t, []);
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
function qr(e) {
	return new Y(function(t, n) {
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
						}) : je(i) && (o = e({
							protocolErrors: i.extensions[v],
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
	A(t, e);
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
		uri: `${ne()}/graphql`,
		credentials: "omit"
	}), t = Kr((e, { headers: t }) => ({ headers: {
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
			t,
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
		authors: Re(t),
		tags: n.map((t) => ({
			_id: `demo-tag-${t}`,
			slug: t,
			label: e.raw(`help.tags.${t}`)
		}))
	}));
}
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
var di = Symbol.for("react.lazy"), fi = U.use;
function pi(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function mi(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === di && "_payload" in e && pi(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function hi(e) {
	let t = /* @__PURE__ */ _i(e), n = U.forwardRef((e, n) => {
		let { children: r, ...i } = e;
		mi(r) && typeof fi == "function" && (r = fi(r._payload));
		let a = U.Children.toArray(r), o = a.find(yi);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? U.Children.count(e) > 1 ? U.Children.only(null) : U.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ Ge(t, {
				...i,
				ref: n,
				children: U.isValidElement(e) ? U.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ Ge(t, {
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
	let t = U.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (mi(n) && typeof fi == "function" && (n = fi(n._payload)), U.isValidElement(n)) {
			let e = xi(n), i = bi(r, n.props);
			return n.type !== U.Fragment && (i.ref = t ? be(t, e) : e), U.cloneElement(n, i);
		}
		return U.Children.count(n) > 1 ? U.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var vi = Symbol("radix.slottable");
function yi(e) {
	return U.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === vi;
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
var Si = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ci = We, wi = ((e, t) => (n) => {
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
}), Ti = U.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) => /* @__PURE__ */ Ge(r ? gi : "button", {
	ref: a,
	className: Ue(wi({
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
}({}), Di = H`
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
	return l(Di, {
		...$,
		...e
	});
}
H`
    query VisitorHelpTags($locale: String) {
  visitorHelpTags(locale: $locale) {
    _id
    slug
    label
    description
  }
}
    `;
var ki = H`
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
	return l(ki, {
		...$,
		...e
	});
}
var ji = H`
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
	return l(ji, {
		...$,
		...e
	});
}
var Ni = H`
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
	return l(Ni, {
		...$,
		...e
	});
}
var Fi = H`
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
	return l(Fi, {
		...$,
		...e
	});
}
var Li = H`
    mutation RecordVisitorHelpView($articleId: String!) {
  recordVisitorHelpView(articleId: $articleId) {
    ok
  }
}
    `;
function Ri(e) {
	return n(Li, {
		...$,
		...e
	});
}
var zi = H`
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
	return l(zi, {
		...$,
		...e
	});
}
var Vi = H`
    query VisitorHelpArticlesByIdsSlim($ids: [ID!]!, $locale: String) {
  visitorHelpArticlesByIds(ids: $ids, locale: $locale) {
    _id
    title
    slug
  }
}
    `;
function Hi(e) {
	return l(Vi, {
		...$,
		...e
	});
}
//#endregion
export { ti as _, Hi as a, Xr as b, Bi as c, hi as d, ui as f, Zr as g, ii as h, Pi as i, Ii as l, oi as m, Ri as n, Oi as o, ci as p, Mi as r, Ai as s, Ei as t, Ti as u, $r as v, ri as y };

//# sourceMappingURL=widget-react-BlpGsLnt.js.map