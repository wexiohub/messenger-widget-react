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
import { C as e, S as t, _ as n, b as r, d as i, f as a, g as o, h as s, m as c, p as l, v as u, w as d, x as f, y as p } from "./widget-react-B9XrHKqv.js";
import { i as m, n as h, o as g, t as _ } from "./widget-react-krPPnv02.js";
import * as v from "react";
import { Children as y, createContext as b, createElement as x, isValidElement as S, useCallback as C, useContext as w, useEffect as T, useId as E, useInsertionEffect as ee, useLayoutEffect as D, useMemo as te, useRef as ne, useState as re } from "react";
import { Fragment as ie, jsx as O, jsxs as k } from "react/jsx-runtime";
import * as ae from "react-dom";
import { createPortal as oe } from "react-dom";
//#region node_modules/tslib/tslib.es6.mjs
var se = function(e, t) {
	return se = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, se(e, t);
};
function ce(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	se(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var A = function() {
	return A = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, A.apply(this, arguments);
};
function le(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function ue(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n || (n = Promise))(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function de(e, t) {
	var n = {
		label: 0,
		sent: function() {
			if (a[0] & 1) throw a[1];
			return a[1];
		},
		trys: [],
		ops: []
	}, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(e) {
		return function(t) {
			return c([e, t]);
		};
	}
	function c(s) {
		if (r) throw TypeError("Generator is already executing.");
		for (; o && (o = 0, s[0] && (n = 0)), n;) try {
			if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
			switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
				case 0:
				case 1:
					a = s;
					break;
				case 4: return n.label++, {
					value: s[1],
					done: !1
				};
				case 5:
					n.label++, i = s[1], s = [0];
					continue;
				case 7:
					s = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if ((a = n.trys, !(a = a.length > 0 && a[a.length - 1])) && (s[0] === 6 || s[0] === 2)) {
						n = 0;
						continue;
					}
					if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
						n.label = s[1];
						break;
					}
					if (s[0] === 6 && n.label < a[1]) {
						n.label = a[1], a = s;
						break;
					}
					if (a && n.label < a[2]) {
						n.label = a[2], n.ops.push(s);
						break;
					}
					a[2] && n.ops.pop(), n.trys.pop();
					continue;
			}
			s = t.call(e, n);
		} catch (e) {
			s = [6, e], i = 0;
		} finally {
			r = a = 0;
		}
		if (s[0] & 5) throw s[1];
		return {
			value: s[0] ? s[1] : void 0,
			done: !0
		};
	}
}
function j(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/ts-invariant/lib/invariant.js
var fe = "Invariant Violation", pe = Object.setPrototypeOf, me = pe === void 0 ? function(e, t) {
	return e.__proto__ = t, e;
} : pe, he = function(e) {
	ce(t, e);
	function t(n) {
		n === void 0 && (n = fe);
		var r = e.call(this, typeof n == "number" ? fe + ": " + n + " (see https://github.com/apollographql/invariant-packages)" : n) || this;
		return r.framesToPop = 1, r.name = fe, me(r, t.prototype), r;
	}
	return t;
}(Error);
function ge(e, t) {
	if (!e) throw new he(t);
}
var _e = [
	"debug",
	"log",
	"warn",
	"error",
	"silent"
], ve = _e.indexOf("log");
function ye(e) {
	return function() {
		if (_e.indexOf(e) >= ve) return (console[e] || console.log).apply(console, arguments);
	};
}
(function(e) {
	e.debug = ye("debug"), e.log = ye("log"), e.warn = ye("warn"), e.error = ye("error");
})(ge || (ge = {}));
//#endregion
//#region node_modules/@apollo/client/version.js
var be = "3.14.1";
//#endregion
//#region node_modules/@apollo/client/utilities/globals/maybe.js
function xe(e) {
	try {
		return e();
	} catch {}
}
//#endregion
//#region node_modules/@apollo/client/utilities/globals/global.js
var Se = xe(function() {
	return globalThis;
}) || xe(function() {
	return window;
}) || xe(function() {
	return self;
}) || xe(function() {
	return global;
}) || xe(function() {
	return xe.constructor("return this")();
}), Ce = /* @__PURE__ */ new Map();
function we(e) {
	var t = Ce.get(e) || 1;
	return Ce.set(e, t + 1), `${e}:${t}:${Math.random().toString(36).slice(2)}`;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/stringifyForDisplay.js
function Te(e, t) {
	t === void 0 && (t = 0);
	var n = we("stringifyForDisplay");
	return JSON.stringify(e, function(e, t) {
		return t === void 0 ? n : t;
	}, t).split(JSON.stringify(n)).join("<undefined>");
}
//#endregion
//#region node_modules/@apollo/client/utilities/globals/invariantWrappers.js
function Ee(e) {
	return function(t) {
		var n = [...arguments].slice(1);
		if (typeof t == "number") {
			var r = t;
			t = Ae(r), t || (t = je(r, n), n = []);
		}
		e.apply(void 0, [t].concat(n));
	};
}
var M = Object.assign(function(e, t) {
	var n = [...arguments].slice(2);
	e || ge(e, Ae(t, n) || je(t, n));
}, {
	debug: Ee(ge.debug),
	log: Ee(ge.log),
	warn: Ee(ge.warn),
	error: Ee(ge.error)
});
function De(e) {
	var t = [...arguments].slice(1);
	return new he(Ae(e, t) || je(e, t));
}
var Oe = Symbol.for("ApolloErrorMessageHandler_" + be);
function ke(e) {
	if (typeof e == "string") return e;
	try {
		return Te(e, 2).slice(0, 1e3);
	} catch {
		return "<non-serializable>";
	}
}
function Ae(e, t) {
	if (t === void 0 && (t = []), e) return Se[Oe] && Se[Oe](e, t.map(ke));
}
function je(e, t) {
	if (t === void 0 && (t = []), e) return `An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({
		version: be,
		message: e,
		args: t.map(ke)
	}))}`;
}
//#endregion
//#region node_modules/rehackt/index.js
var Me = /* @__PURE__ */ p(((e, n) => {
	n.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, n.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, n.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(n.exports, t("react"));
}));
//#endregion
//#region node_modules/graphql/jsutils/devAssert.mjs
function Ne(e, t) {
	if (!e) throw Error(t);
}
//#endregion
//#region node_modules/graphql/jsutils/isObjectLike.mjs
function Pe(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/graphql/jsutils/invariant.mjs
function Fe(e, t) {
	if (!e) throw Error(t ?? "Unexpected invariant triggered.");
}
//#endregion
//#region node_modules/graphql/language/location.mjs
var Ie = /\r\n|[\n\r]/g;
function Le(e, t) {
	let n = 0, r = 1;
	for (let i of e.body.matchAll(Ie)) {
		if (typeof i.index == "number" || Fe(!1), i.index >= t) break;
		n = i.index + i[0].length, r += 1;
	}
	return {
		line: r,
		column: t + 1 - n
	};
}
//#endregion
//#region node_modules/graphql/language/printLocation.mjs
function Re(e) {
	return ze(e.source, Le(e.source, e.start));
}
function ze(e, t) {
	let n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? n : 0, c = t.column + s, l = `${e.name}:${o}:${c}\n`, u = r.split(/\r\n|[\n\r]/g), d = u[i];
	if (d.length > 120) {
		let e = Math.floor(c / 80), t = c % 80, n = [];
		for (let e = 0; e < d.length; e += 80) n.push(d.slice(e, e + 80));
		return l + Be([
			[`${o} |`, n[0]],
			...n.slice(1, e + 1).map((e) => ["|", e]),
			["|", "^".padStart(t)],
			["|", n[e + 1]]
		]);
	}
	return l + Be([
		[`${o - 1} |`, u[i - 1]],
		[`${o} |`, d],
		["|", "^".padStart(c)],
		[`${o + 1} |`, u[i + 1]]
	]);
}
function Be(e) {
	let t = e.filter(([e, t]) => t !== void 0), n = Math.max(...t.map(([e]) => e.length));
	return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n");
}
//#endregion
//#region node_modules/graphql/error/GraphQLError.mjs
function Ve(e) {
	let t = e[0];
	return t == null || "kind" in t || "length" in t ? {
		nodes: t,
		source: e[1],
		positions: e[2],
		path: e[3],
		originalError: e[4],
		extensions: e[5]
	} : t;
}
var He = class e extends Error {
	constructor(t, ...n) {
		let { nodes: r, source: i, positions: a, path: o, originalError: s, extensions: c } = Ve(n);
		super(t), this.name = "GraphQLError", this.path = o ?? void 0, this.originalError = s ?? void 0, this.nodes = Ue(Array.isArray(r) ? r : r ? [r] : void 0);
		let l = Ue(this.nodes?.map((e) => e.loc).filter((e) => e != null));
		this.source = i ?? l?.[0]?.source, this.positions = a ?? l?.map((e) => e.start), this.locations = a && i ? a.map((e) => Le(i, e)) : l?.map((e) => Le(e.source, e.start));
		let u = Pe(s?.extensions) ? s?.extensions : void 0;
		/* c8 ignore start */
		this.extensions = c ?? u ?? Object.create(null), Object.defineProperties(this, {
			message: {
				writable: !0,
				enumerable: !0
			},
			name: { enumerable: !1 },
			nodes: { enumerable: !1 },
			source: { enumerable: !1 },
			positions: { enumerable: !1 },
			originalError: { enumerable: !1 }
		}), s != null && s.stack ? Object.defineProperty(this, "stack", {
			value: s.stack,
			writable: !0,
			configurable: !0
		}) : Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
			value: Error().stack,
			writable: !0,
			configurable: !0
		});
		/* c8 ignore stop */
	}
	get [Symbol.toStringTag]() {
		return "GraphQLError";
	}
	toString() {
		let e = this.message;
		if (this.nodes) for (let t of this.nodes) t.loc && (e += "\n\n" + Re(t.loc));
		else if (this.source && this.locations) for (let t of this.locations) e += "\n\n" + ze(this.source, t);
		return e;
	}
	toJSON() {
		let e = { message: this.message };
		return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
	}
};
function Ue(e) {
	return e === void 0 || e.length === 0 ? void 0 : e;
}
//#endregion
//#region node_modules/graphql/error/syntaxError.mjs
function We(e, t, n) {
	return new He(`Syntax Error: ${n}`, {
		source: e,
		positions: [t]
	});
}
//#endregion
//#region node_modules/graphql/language/ast.mjs
var Ge = class {
	constructor(e, t, n) {
		this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n;
	}
	get [Symbol.toStringTag]() {
		return "Location";
	}
	toJSON() {
		return {
			start: this.start,
			end: this.end
		};
	}
}, Ke = class {
	constructor(e, t, n, r, i, a) {
		this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = a, this.prev = null, this.next = null;
	}
	get [Symbol.toStringTag]() {
		return "Token";
	}
	toJSON() {
		return {
			kind: this.kind,
			value: this.value,
			line: this.line,
			column: this.column
		};
	}
}, qe = {
	Name: [],
	Document: ["definitions"],
	OperationDefinition: [
		"description",
		"name",
		"variableDefinitions",
		"directives",
		"selectionSet"
	],
	VariableDefinition: [
		"description",
		"variable",
		"type",
		"defaultValue",
		"directives"
	],
	Variable: ["name"],
	SelectionSet: ["selections"],
	Field: [
		"alias",
		"name",
		"arguments",
		"directives",
		"selectionSet"
	],
	Argument: ["name", "value"],
	FragmentSpread: ["name", "directives"],
	InlineFragment: [
		"typeCondition",
		"directives",
		"selectionSet"
	],
	FragmentDefinition: [
		"description",
		"name",
		"variableDefinitions",
		"typeCondition",
		"directives",
		"selectionSet"
	],
	IntValue: [],
	FloatValue: [],
	StringValue: [],
	BooleanValue: [],
	NullValue: [],
	EnumValue: [],
	ListValue: ["values"],
	ObjectValue: ["fields"],
	ObjectField: ["name", "value"],
	Directive: ["name", "arguments"],
	NamedType: ["name"],
	ListType: ["type"],
	NonNullType: ["type"],
	SchemaDefinition: [
		"description",
		"directives",
		"operationTypes"
	],
	OperationTypeDefinition: ["type"],
	ScalarTypeDefinition: [
		"description",
		"name",
		"directives"
	],
	ObjectTypeDefinition: [
		"description",
		"name",
		"interfaces",
		"directives",
		"fields"
	],
	FieldDefinition: [
		"description",
		"name",
		"arguments",
		"type",
		"directives"
	],
	InputValueDefinition: [
		"description",
		"name",
		"type",
		"defaultValue",
		"directives"
	],
	InterfaceTypeDefinition: [
		"description",
		"name",
		"interfaces",
		"directives",
		"fields"
	],
	UnionTypeDefinition: [
		"description",
		"name",
		"directives",
		"types"
	],
	EnumTypeDefinition: [
		"description",
		"name",
		"directives",
		"values"
	],
	EnumValueDefinition: [
		"description",
		"name",
		"directives"
	],
	InputObjectTypeDefinition: [
		"description",
		"name",
		"directives",
		"fields"
	],
	DirectiveDefinition: [
		"description",
		"name",
		"arguments",
		"directives",
		"locations"
	],
	SchemaExtension: ["directives", "operationTypes"],
	DirectiveExtension: ["name", "directives"],
	ScalarTypeExtension: ["name", "directives"],
	ObjectTypeExtension: [
		"name",
		"interfaces",
		"directives",
		"fields"
	],
	InterfaceTypeExtension: [
		"name",
		"interfaces",
		"directives",
		"fields"
	],
	UnionTypeExtension: [
		"name",
		"directives",
		"types"
	],
	EnumTypeExtension: [
		"name",
		"directives",
		"values"
	],
	InputObjectTypeExtension: [
		"name",
		"directives",
		"fields"
	],
	TypeCoordinate: ["name"],
	MemberCoordinate: ["name", "memberName"],
	ArgumentCoordinate: [
		"name",
		"fieldName",
		"argumentName"
	],
	DirectiveCoordinate: ["name"],
	DirectiveArgumentCoordinate: ["name", "argumentName"]
}, Je = new Set(Object.keys(qe));
function Ye(e) {
	let t = e?.kind;
	return typeof t == "string" && Je.has(t);
}
var Xe;
(function(e) {
	e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Xe || (Xe = {}));
//#endregion
//#region node_modules/graphql/language/directiveLocation.mjs
var Ze;
(function(e) {
	e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", e.DIRECTIVE_DEFINITION = "DIRECTIVE_DEFINITION";
})(Ze || (Ze = {}));
//#endregion
//#region node_modules/graphql/language/kinds.mjs
var N;
(function(e) {
	e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.DIRECTIVE_EXTENSION = "DirectiveExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", e.TYPE_COORDINATE = "TypeCoordinate", e.MEMBER_COORDINATE = "MemberCoordinate", e.ARGUMENT_COORDINATE = "ArgumentCoordinate", e.DIRECTIVE_COORDINATE = "DirectiveCoordinate", e.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
})(N || (N = {}));
//#endregion
//#region node_modules/graphql/language/characterClasses.mjs
function Qe(e) {
	return e === 9 || e === 32;
}
function $e(e) {
	return e >= 48 && e <= 57;
}
function et(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function tt(e) {
	return et(e) || e === 95;
}
function nt(e) {
	return et(e) || $e(e) || e === 95;
}
//#endregion
//#region node_modules/graphql/language/blockString.mjs
function rt(e) {
	let t = 2 ** 53 - 1, n = null, r = -1;
	for (let i = 0; i < e.length; ++i) {
		let a = e[i], o = it(a);
		o !== a.length && (n = n ?? i, r = i, i !== 0 && o < t && (t = o));
	}
	return e.map((e, n) => n === 0 ? e : e.slice(t)).slice(n ?? 0, r + 1);
}
function it(e) {
	let t = 0;
	for (; t < e.length && Qe(e.charCodeAt(t));) ++t;
	return t;
}
function at(e, t) {
	let n = e.replace(/"""/g, "\\\"\"\""), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((e) => e.length === 0 || Qe(e.charCodeAt(0))), o = n.endsWith("\\\"\"\""), s = e.endsWith("\"") && !o, c = e.endsWith("\\"), l = s || c, u = !(t != null && t.minimize) && (!i || e.length > 70 || l || a || o), d = "", f = i && Qe(e.charCodeAt(0));
	return (u && !f || a) && (d += "\n"), d += n, (u || l) && (d += "\n"), "\"\"\"" + d + "\"\"\"";
}
//#endregion
//#region node_modules/graphql/language/tokenKind.mjs
var P;
(function(e) {
	e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.DOT = ".", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(P || (P = {}));
//#endregion
//#region node_modules/graphql/language/lexer.mjs
var ot = class {
	constructor(e) {
		let t = new Ke(P.SOF, 0, 0, 0, 0);
		this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0;
	}
	get [Symbol.toStringTag]() {
		return "Lexer";
	}
	advance() {
		return this.lastToken = this.token, this.token = this.lookahead();
	}
	lookahead() {
		let e = this.token;
		if (e.kind !== P.EOF) do
			if (e.next) e = e.next;
			else {
				let t = mt(this, e.end);
				e.next = t, t.prev = e, e = t;
			}
		while (e.kind === P.COMMENT);
		return e;
	}
};
function st(e) {
	return e === P.BANG || e === P.DOLLAR || e === P.AMP || e === P.PAREN_L || e === P.PAREN_R || e === P.DOT || e === P.SPREAD || e === P.COLON || e === P.EQUALS || e === P.AT || e === P.BRACKET_L || e === P.BRACKET_R || e === P.BRACE_L || e === P.PIPE || e === P.BRACE_R;
}
function ct(e) {
	return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function lt(e, t) {
	return ut(e.charCodeAt(t)) && dt(e.charCodeAt(t + 1));
}
function ut(e) {
	return e >= 55296 && e <= 56319;
}
function dt(e) {
	return e >= 56320 && e <= 57343;
}
function ft(e, t) {
	let n = e.source.body.codePointAt(t);
	if (n === void 0) return P.EOF;
	if (n >= 32 && n <= 126) {
		let e = String.fromCodePoint(n);
		return e === "\"" ? "'\"'" : `"${e}"`;
	}
	return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function pt(e, t, n, r, i) {
	let a = e.line;
	return new Ke(t, n, r, a, 1 + n - e.lineStart, i);
}
function mt(e, t) {
	let n = e.source.body, r = n.length, i = t;
	for (; i < r;) {
		let t = n.charCodeAt(i);
		switch (t) {
			case 65279:
			case 9:
			case 32:
			case 44:
				++i;
				continue;
			case 10:
				++i, ++e.line, e.lineStart = i;
				continue;
			case 13:
				n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
				continue;
			case 35: return ht(e, i);
			case 33: return pt(e, P.BANG, i, i + 1);
			case 36: return pt(e, P.DOLLAR, i, i + 1);
			case 38: return pt(e, P.AMP, i, i + 1);
			case 40: return pt(e, P.PAREN_L, i, i + 1);
			case 41: return pt(e, P.PAREN_R, i, i + 1);
			case 46:
				if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return pt(e, P.SPREAD, i, i + 3);
				break;
			case 58: return pt(e, P.COLON, i, i + 1);
			case 61: return pt(e, P.EQUALS, i, i + 1);
			case 64: return pt(e, P.AT, i, i + 1);
			case 91: return pt(e, P.BRACKET_L, i, i + 1);
			case 93: return pt(e, P.BRACKET_R, i, i + 1);
			case 123: return pt(e, P.BRACE_L, i, i + 1);
			case 124: return pt(e, P.PIPE, i, i + 1);
			case 125: return pt(e, P.BRACE_R, i, i + 1);
			case 34: return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? wt(e, i) : vt(e, i);
		}
		if ($e(t) || t === 45) return gt(e, i, t);
		if (tt(t)) return Tt(e, i);
		throw We(e.source, i, t === 39 ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : ct(t) || lt(n, i) ? `Unexpected character: ${ft(e, i)}.` : `Invalid character: ${ft(e, i)}.`);
	}
	return pt(e, P.EOF, r, r);
}
function ht(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r;) {
		let e = n.charCodeAt(i);
		if (e === 10 || e === 13) break;
		if (ct(e)) ++i;
		else if (lt(n, i)) i += 2;
		else break;
	}
	return pt(e, P.COMMENT, t, i, n.slice(t + 1, i));
}
function gt(e, t, n) {
	let r = e.source.body, i = t, a = n, o = !1;
	if (a === 45 && (a = r.charCodeAt(++i)), a === 48) {
		if (a = r.charCodeAt(++i), $e(a)) throw We(e.source, i, `Invalid number, unexpected digit after 0: ${ft(e, i)}.`);
	} else i = _t(e, i, a), a = r.charCodeAt(i);
	if (a === 46 && (o = !0, a = r.charCodeAt(++i), i = _t(e, i, a), a = r.charCodeAt(i)), (a === 69 || a === 101) && (o = !0, a = r.charCodeAt(++i), (a === 43 || a === 45) && (a = r.charCodeAt(++i)), i = _t(e, i, a), a = r.charCodeAt(i)), a === 46 || tt(a)) throw We(e.source, i, `Invalid number, expected digit but got: ${ft(e, i)}.`);
	return pt(e, o ? P.FLOAT : P.INT, t, i, r.slice(t, i));
}
function _t(e, t, n) {
	if (!$e(n)) throw We(e.source, t, `Invalid number, expected digit but got: ${ft(e, t)}.`);
	let r = e.source.body, i = t + 1;
	for (; $e(r.charCodeAt(i));) ++i;
	return i;
}
function vt(e, t) {
	let n = e.source.body, r = n.length, i = t + 1, a = i, o = "";
	for (; i < r;) {
		let r = n.charCodeAt(i);
		if (r === 34) return o += n.slice(a, i), pt(e, P.STRING, t, i + 1, o);
		if (r === 92) {
			o += n.slice(a, i);
			let t = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? yt(e, i) : bt(e, i) : Ct(e, i);
			o += t.value, i += t.size, a = i;
			continue;
		}
		if (r === 10 || r === 13) break;
		if (ct(r)) ++i;
		else if (lt(n, i)) i += 2;
		else throw We(e.source, i, `Invalid character within String: ${ft(e, i)}.`);
	}
	throw We(e.source, i, "Unterminated string.");
}
function yt(e, t) {
	let n = e.source.body, r = 0, i = 3;
	for (; i < 12;) {
		let e = n.charCodeAt(t + i++);
		if (e === 125) {
			if (i < 5 || !ct(r)) break;
			return {
				value: String.fromCodePoint(r),
				size: i
			};
		}
		if (r = r << 4 | St(e), r < 0) break;
	}
	throw We(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
}
function bt(e, t) {
	let n = e.source.body, r = xt(n, t + 2);
	if (ct(r)) return {
		value: String.fromCodePoint(r),
		size: 6
	};
	if (ut(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
		let e = xt(n, t + 8);
		if (dt(e)) return {
			value: String.fromCodePoint(r, e),
			size: 12
		};
	}
	throw We(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function xt(e, t) {
	return St(e.charCodeAt(t)) << 12 | St(e.charCodeAt(t + 1)) << 8 | St(e.charCodeAt(t + 2)) << 4 | St(e.charCodeAt(t + 3));
}
function St(e) {
	return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function Ct(e, t) {
	let n = e.source.body;
	switch (n.charCodeAt(t + 1)) {
		case 34: return {
			value: "\"",
			size: 2
		};
		case 92: return {
			value: "\\",
			size: 2
		};
		case 47: return {
			value: "/",
			size: 2
		};
		case 98: return {
			value: "\b",
			size: 2
		};
		case 102: return {
			value: "\f",
			size: 2
		};
		case 110: return {
			value: "\n",
			size: 2
		};
		case 114: return {
			value: "\r",
			size: 2
		};
		case 116: return {
			value: "	",
			size: 2
		};
	}
	throw We(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function wt(e, t) {
	let n = e.source.body, r = n.length, i = e.lineStart, a = t + 3, o = a, s = "", c = [];
	for (; a < r;) {
		let r = n.charCodeAt(a);
		if (r === 34 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34) {
			s += n.slice(o, a), c.push(s);
			let r = pt(e, P.BLOCK_STRING, t, a + 3, rt(c).join("\n"));
			return e.line += c.length - 1, e.lineStart = i, r;
		}
		if (r === 92 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34 && n.charCodeAt(a + 3) === 34) {
			s += n.slice(o, a), o = a + 1, a += 4;
			continue;
		}
		if (r === 10 || r === 13) {
			s += n.slice(o, a), c.push(s), r === 13 && n.charCodeAt(a + 1) === 10 ? a += 2 : ++a, s = "", o = a, i = a;
			continue;
		}
		if (ct(r)) ++a;
		else if (lt(n, a)) a += 2;
		else throw We(e.source, a, `Invalid character within String: ${ft(e, a)}.`);
	}
	throw We(e.source, a, "Unterminated string.");
}
function Tt(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r && nt(n.charCodeAt(i));) ++i;
	return pt(e, P.NAME, t, i, n.slice(t, i));
}
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/typeof.js
function Et(e) {
	"@babel/helpers - typeof";
	return Et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Et(e);
}
var Dt = r((() => {}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/toPrimitive.js
function Ot(e, t) {
	if (Et(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Et(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var kt = r((() => {
	Dt();
}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/toPropertyKey.js
function At(e) {
	var t = Ot(e, "string");
	return Et(t) == "symbol" ? t : t + "";
}
var jt = r((() => {
	Dt(), kt();
}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/defineProperty.js
function F(e, t, n) {
	return (t = At(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Mt = r((() => {
	jt();
})), Nt = 10, Pt = 2;
function Ft(e) {
	return It(e, []);
}
function It(e, t) {
	switch (typeof e) {
		case "string": return JSON.stringify(e);
		case "function": return e.name ? `[function ${e.name}]` : "[function]";
		case "object": return Lt(e, t);
		default: return String(e);
	}
}
function Lt(e, t) {
	if (e === null) return "null";
	if (t.includes(e)) return "[Circular]";
	let n = [...t, e];
	if (Rt(e)) {
		let t = e.toJSON();
		if (t !== e) return typeof t == "string" ? t : It(t, n);
	} else if (Array.isArray(e)) return Bt(e, n);
	return zt(e, n);
}
function Rt(e) {
	return typeof e.toJSON == "function";
}
function zt(e, t) {
	let n = Object.entries(e);
	return n.length === 0 ? "{}" : t.length > Pt ? "[" + Vt(e) + "]" : "{ " + n.map(([e, n]) => e + ": " + It(n, t)).join(", ") + " }";
}
function Bt(e, t) {
	if (e.length === 0) return "[]";
	if (t.length > Pt) return "[Array]";
	let n = Math.min(Nt, e.length), r = e.length - n, i = [];
	for (let r = 0; r < n; ++r) i.push(It(e[r], t));
	return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function Vt(e) {
	let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
	if (t === "Object" && typeof e.constructor == "function") {
		let t = e.constructor.name;
		if (typeof t == "string" && t !== "") return t;
	}
	return t;
}
var Ht = globalThis.process ? function(e, t) {
	return e instanceof t;
} : function(e, t) {
	if (e instanceof t) return !0;
	if (typeof e == "object" && e) {
		let n = t.prototype[Symbol.toStringTag];
		if (n === (Symbol.toStringTag in e ? e[Symbol.toStringTag] : e.constructor?.name)) {
			let t = Ft(e);
			throw Error(`Cannot use ${n} "${t}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
		}
	}
	return !1;
}, Ut = class {
	constructor(e, t = "GraphQL request", n = {
		line: 1,
		column: 1
	}) {
		typeof e == "string" || Ne(!1, `Body must be a string. Received: ${Ft(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || Ne(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Ne(!1, "column in locationOffset is 1-indexed and must be positive.");
	}
	get [Symbol.toStringTag]() {
		return "Source";
	}
};
function Wt(e) {
	return Ht(e, Ut);
}
//#endregion
//#region node_modules/graphql/language/parser.mjs
function Gt(e, t) {
	let n = new Kt(e, t), r = n.parseDocument();
	return Object.defineProperty(r, "tokenCount", {
		enumerable: !1,
		value: n.tokenCount
	}), r;
}
var Kt = class {
	constructor(e, t = {}) {
		let { lexer: n, ...r } = t;
		if (n) this._lexer = n;
		else {
			let t = Wt(e) ? e : new Ut(e);
			this._lexer = new ot(t);
		}
		this._options = r, this._tokenCounter = 0;
	}
	get tokenCount() {
		return this._tokenCounter;
	}
	parseName() {
		let e = this.expectToken(P.NAME);
		return this.node(e, {
			kind: N.NAME,
			value: e.value
		});
	}
	parseDocument() {
		return this.node(this._lexer.token, {
			kind: N.DOCUMENT,
			definitions: this.many(P.SOF, this.parseDefinition, P.EOF)
		});
	}
	parseDefinition() {
		if (this.peek(P.BRACE_L)) return this.parseOperationDefinition();
		let e = this.peekDescription(), t = e ? this._lexer.lookahead() : this._lexer.token;
		if (e && t.kind === P.BRACE_L) throw We(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are not supported on shorthand queries.");
		if (t.kind === P.NAME) {
			switch (t.value) {
				case "schema": return this.parseSchemaDefinition();
				case "scalar": return this.parseScalarTypeDefinition();
				case "type": return this.parseObjectTypeDefinition();
				case "interface": return this.parseInterfaceTypeDefinition();
				case "union": return this.parseUnionTypeDefinition();
				case "enum": return this.parseEnumTypeDefinition();
				case "input": return this.parseInputObjectTypeDefinition();
				case "directive": return this.parseDirectiveDefinition();
			}
			switch (t.value) {
				case "query":
				case "mutation":
				case "subscription": return this.parseOperationDefinition();
				case "fragment": return this.parseFragmentDefinition();
			}
			if (e) throw We(this._lexer.source, this._lexer.token.start, "Unexpected description, only GraphQL definitions support descriptions.");
			switch (t.value) {
				case "extend": return this.parseTypeSystemExtension();
			}
		}
		throw this.unexpected(t);
	}
	parseOperationDefinition() {
		let e = this._lexer.token;
		if (this.peek(P.BRACE_L)) return this.node(e, {
			kind: N.OPERATION_DEFINITION,
			operation: Xe.QUERY,
			description: void 0,
			name: void 0,
			variableDefinitions: [],
			directives: [],
			selectionSet: this.parseSelectionSet()
		});
		let t = this.parseDescription(), n = this.parseOperationType(), r;
		return this.peek(P.NAME) && (r = this.parseName()), this.node(e, {
			kind: N.OPERATION_DEFINITION,
			operation: n,
			description: t,
			name: r,
			variableDefinitions: this.parseVariableDefinitions(),
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		});
	}
	parseOperationType() {
		let e = this.expectToken(P.NAME);
		switch (e.value) {
			case "query": return Xe.QUERY;
			case "mutation": return Xe.MUTATION;
			case "subscription": return Xe.SUBSCRIPTION;
		}
		throw this.unexpected(e);
	}
	parseVariableDefinitions() {
		return this.optionalMany(P.PAREN_L, this.parseVariableDefinition, P.PAREN_R);
	}
	parseVariableDefinition() {
		return this.node(this._lexer.token, {
			kind: N.VARIABLE_DEFINITION,
			description: this.parseDescription(),
			variable: this.parseVariable(),
			type: (this.expectToken(P.COLON), this.parseTypeReference()),
			defaultValue: this.expectOptionalToken(P.EQUALS) ? this.parseConstValueLiteral() : void 0,
			directives: this.parseConstDirectives()
		});
	}
	parseVariable() {
		let e = this._lexer.token;
		return this.expectToken(P.DOLLAR), this.node(e, {
			kind: N.VARIABLE,
			name: this.parseName()
		});
	}
	parseSelectionSet() {
		return this.node(this._lexer.token, {
			kind: N.SELECTION_SET,
			selections: this.many(P.BRACE_L, this.parseSelection, P.BRACE_R)
		});
	}
	parseSelection() {
		return this.peek(P.SPREAD) ? this.parseFragment() : this.parseField();
	}
	parseField() {
		let e = this._lexer.token, t = this.parseName(), n, r;
		return this.expectOptionalToken(P.COLON) ? (n = t, r = this.parseName()) : r = t, this.node(e, {
			kind: N.FIELD,
			alias: n,
			name: r,
			arguments: this.parseArguments(!1),
			directives: this.parseDirectives(!1),
			selectionSet: this.peek(P.BRACE_L) ? this.parseSelectionSet() : void 0
		});
	}
	parseArguments(e) {
		let t = e ? this.parseConstArgument : this.parseArgument;
		return this.optionalMany(P.PAREN_L, t, P.PAREN_R);
	}
	parseArgument(e = !1) {
		let t = this._lexer.token, n = this.parseName();
		return this.expectToken(P.COLON), this.node(t, {
			kind: N.ARGUMENT,
			name: n,
			value: this.parseValueLiteral(e)
		});
	}
	parseConstArgument() {
		return this.parseArgument(!0);
	}
	parseFragment() {
		let e = this._lexer.token;
		this.expectToken(P.SPREAD);
		let t = this.expectOptionalKeyword("on");
		return !t && this.peek(P.NAME) ? this.node(e, {
			kind: N.FRAGMENT_SPREAD,
			name: this.parseFragmentName(),
			directives: this.parseDirectives(!1)
		}) : this.node(e, {
			kind: N.INLINE_FRAGMENT,
			typeCondition: t ? this.parseNamedType() : void 0,
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		});
	}
	parseFragmentDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, {
			kind: N.FRAGMENT_DEFINITION,
			description: t,
			name: this.parseFragmentName(),
			variableDefinitions: this.parseVariableDefinitions(),
			typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		}) : this.node(e, {
			kind: N.FRAGMENT_DEFINITION,
			description: t,
			name: this.parseFragmentName(),
			typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		});
	}
	parseFragmentName() {
		if (this._lexer.token.value === "on") throw this.unexpected();
		return this.parseName();
	}
	parseValueLiteral(e) {
		let t = this._lexer.token;
		switch (t.kind) {
			case P.BRACKET_L: return this.parseList(e);
			case P.BRACE_L: return this.parseObject(e);
			case P.INT: return this.advanceLexer(), this.node(t, {
				kind: N.INT,
				value: t.value
			});
			case P.FLOAT: return this.advanceLexer(), this.node(t, {
				kind: N.FLOAT,
				value: t.value
			});
			case P.STRING:
			case P.BLOCK_STRING: return this.parseStringLiteral();
			case P.NAME: switch (this.advanceLexer(), t.value) {
				case "true": return this.node(t, {
					kind: N.BOOLEAN,
					value: !0
				});
				case "false": return this.node(t, {
					kind: N.BOOLEAN,
					value: !1
				});
				case "null": return this.node(t, { kind: N.NULL });
				default: return this.node(t, {
					kind: N.ENUM,
					value: t.value
				});
			}
			case P.DOLLAR:
				if (e) if (this.expectToken(P.DOLLAR), this._lexer.token.kind === P.NAME) {
					let e = this._lexer.token.value;
					throw We(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`);
				} else throw this.unexpected(t);
				return this.parseVariable();
			default: throw this.unexpected();
		}
	}
	parseConstValueLiteral() {
		return this.parseValueLiteral(!0);
	}
	parseStringLiteral() {
		let e = this._lexer.token;
		return this.advanceLexer(), this.node(e, {
			kind: N.STRING,
			value: e.value,
			block: e.kind === P.BLOCK_STRING
		});
	}
	parseList(e) {
		return this.node(this._lexer.token, {
			kind: N.LIST,
			values: this.any(P.BRACKET_L, () => this.parseValueLiteral(e), P.BRACKET_R)
		});
	}
	parseObject(e) {
		return this.node(this._lexer.token, {
			kind: N.OBJECT,
			fields: this.any(P.BRACE_L, () => this.parseObjectField(e), P.BRACE_R)
		});
	}
	parseObjectField(e) {
		let t = this._lexer.token, n = this.parseName();
		return this.expectToken(P.COLON), this.node(t, {
			kind: N.OBJECT_FIELD,
			name: n,
			value: this.parseValueLiteral(e)
		});
	}
	parseDirectives(e) {
		let t = [];
		for (; this.peek(P.AT);) t.push(this.parseDirective(e));
		return t;
	}
	parseConstDirectives() {
		return this.parseDirectives(!0);
	}
	parseDirective(e) {
		let t = this._lexer.token;
		return this.expectToken(P.AT), this.node(t, {
			kind: N.DIRECTIVE,
			name: this.parseName(),
			arguments: this.parseArguments(e)
		});
	}
	parseTypeReference() {
		let e = this._lexer.token, t;
		if (this.expectOptionalToken(P.BRACKET_L)) {
			let n = this.parseTypeReference();
			this.expectToken(P.BRACKET_R), t = this.node(e, {
				kind: N.LIST_TYPE,
				type: n
			});
		} else t = this.parseNamedType();
		return this.expectOptionalToken(P.BANG) ? this.node(e, {
			kind: N.NON_NULL_TYPE,
			type: t
		}) : t;
	}
	parseNamedType() {
		return this.node(this._lexer.token, {
			kind: N.NAMED_TYPE,
			name: this.parseName()
		});
	}
	peekDescription() {
		return this.peek(P.STRING) || this.peek(P.BLOCK_STRING);
	}
	parseDescription() {
		if (this.peekDescription()) return this.parseStringLiteral();
	}
	parseSchemaDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("schema");
		let n = this.parseConstDirectives(), r = this.many(P.BRACE_L, this.parseOperationTypeDefinition, P.BRACE_R);
		return this.node(e, {
			kind: N.SCHEMA_DEFINITION,
			description: t,
			directives: n,
			operationTypes: r
		});
	}
	parseOperationTypeDefinition() {
		let e = this._lexer.token, t = this.parseOperationType();
		this.expectToken(P.COLON);
		let n = this.parseNamedType();
		return this.node(e, {
			kind: N.OPERATION_TYPE_DEFINITION,
			operation: t,
			type: n
		});
	}
	parseScalarTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("scalar");
		let n = this.parseName(), r = this.parseConstDirectives();
		return this.node(e, {
			kind: N.SCALAR_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r
		});
	}
	parseObjectTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("type");
		let n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
		return this.node(e, {
			kind: N.OBJECT_TYPE_DEFINITION,
			description: t,
			name: n,
			interfaces: r,
			directives: i,
			fields: a
		});
	}
	parseImplementsInterfaces() {
		return this.expectOptionalKeyword("implements") ? this.delimitedMany(P.AMP, this.parseNamedType) : [];
	}
	parseFieldsDefinition() {
		return this.optionalMany(P.BRACE_L, this.parseFieldDefinition, P.BRACE_R);
	}
	parseFieldDefinition() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseName(), r = this.parseArgumentDefs();
		this.expectToken(P.COLON);
		let i = this.parseTypeReference(), a = this.parseConstDirectives();
		return this.node(e, {
			kind: N.FIELD_DEFINITION,
			description: t,
			name: n,
			arguments: r,
			type: i,
			directives: a
		});
	}
	parseArgumentDefs() {
		return this.optionalMany(P.PAREN_L, this.parseInputValueDef, P.PAREN_R);
	}
	parseInputValueDef() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseName();
		this.expectToken(P.COLON);
		let r = this.parseTypeReference(), i;
		this.expectOptionalToken(P.EQUALS) && (i = this.parseConstValueLiteral());
		let a = this.parseConstDirectives();
		return this.node(e, {
			kind: N.INPUT_VALUE_DEFINITION,
			description: t,
			name: n,
			type: r,
			defaultValue: i,
			directives: a
		});
	}
	parseInterfaceTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("interface");
		let n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
		return this.node(e, {
			kind: N.INTERFACE_TYPE_DEFINITION,
			description: t,
			name: n,
			interfaces: r,
			directives: i,
			fields: a
		});
	}
	parseUnionTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("union");
		let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
		return this.node(e, {
			kind: N.UNION_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			types: i
		});
	}
	parseUnionMemberTypes() {
		return this.expectOptionalToken(P.EQUALS) ? this.delimitedMany(P.PIPE, this.parseNamedType) : [];
	}
	parseEnumTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("enum");
		let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
		return this.node(e, {
			kind: N.ENUM_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			values: i
		});
	}
	parseEnumValuesDefinition() {
		return this.optionalMany(P.BRACE_L, this.parseEnumValueDefinition, P.BRACE_R);
	}
	parseEnumValueDefinition() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseEnumValueName(), r = this.parseConstDirectives();
		return this.node(e, {
			kind: N.ENUM_VALUE_DEFINITION,
			description: t,
			name: n,
			directives: r
		});
	}
	parseEnumValueName() {
		if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw We(this._lexer.source, this._lexer.token.start, `${qt(this._lexer.token)} is reserved and cannot be used for an enum value.`);
		return this.parseName();
	}
	parseInputObjectTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("input");
		let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
		return this.node(e, {
			kind: N.INPUT_OBJECT_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			fields: i
		});
	}
	parseInputFieldsDefinition() {
		return this.optionalMany(P.BRACE_L, this.parseInputValueDef, P.BRACE_R);
	}
	parseTypeSystemExtension() {
		let e = this._lexer.lookahead();
		if (e.kind === P.NAME) switch (e.value) {
			case "schema": return this.parseSchemaExtension();
			case "scalar": return this.parseScalarTypeExtension();
			case "type": return this.parseObjectTypeExtension();
			case "interface": return this.parseInterfaceTypeExtension();
			case "union": return this.parseUnionTypeExtension();
			case "enum": return this.parseEnumTypeExtension();
			case "input": return this.parseInputObjectTypeExtension();
			case "directive":
				if (this._options.experimentalDirectivesOnDirectiveDefinitions) return this.parseDirectiveDefinitionExtension();
				break;
		}
		throw this.unexpected(e);
	}
	parseSchemaExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("schema");
		let t = this.parseConstDirectives(), n = this.optionalMany(P.BRACE_L, this.parseOperationTypeDefinition, P.BRACE_R);
		if (t.length === 0 && n.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: N.SCHEMA_EXTENSION,
			directives: t,
			operationTypes: n
		});
	}
	parseScalarTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("scalar");
		let t = this.parseName(), n = this.parseConstDirectives();
		if (n.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: N.SCALAR_TYPE_EXTENSION,
			name: t,
			directives: n
		});
	}
	parseObjectTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("type");
		let t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), i = this.parseFieldsDefinition();
		if (n.length === 0 && r.length === 0 && i.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: N.OBJECT_TYPE_EXTENSION,
			name: t,
			interfaces: n,
			directives: r,
			fields: i
		});
	}
	parseInterfaceTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("interface");
		let t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), i = this.parseFieldsDefinition();
		if (n.length === 0 && r.length === 0 && i.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: N.INTERFACE_TYPE_EXTENSION,
			name: t,
			interfaces: n,
			directives: r,
			fields: i
		});
	}
	parseUnionTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("union");
		let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseUnionMemberTypes();
		if (n.length === 0 && r.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: N.UNION_TYPE_EXTENSION,
			name: t,
			directives: n,
			types: r
		});
	}
	parseEnumTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("enum");
		let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseEnumValuesDefinition();
		if (n.length === 0 && r.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: N.ENUM_TYPE_EXTENSION,
			name: t,
			directives: n,
			values: r
		});
	}
	parseInputObjectTypeExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("input");
		let t = this.parseName(), n = this.parseConstDirectives(), r = this.parseInputFieldsDefinition();
		if (n.length === 0 && r.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: N.INPUT_OBJECT_TYPE_EXTENSION,
			name: t,
			directives: n,
			fields: r
		});
	}
	parseDirectiveDefinitionExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("directive"), this.expectToken(P.AT);
		let t = this.parseName(), n = this.parseConstDirectives();
		if (n.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: N.DIRECTIVE_EXTENSION,
			name: t,
			directives: n
		});
	}
	parseDirectiveDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("directive"), this.expectToken(P.AT);
		let n = this.parseName(), r = this.parseArgumentDefs(), i = this._options.experimentalDirectivesOnDirectiveDefinitions ? this.parseConstDirectives() : [], a = this.expectOptionalKeyword("repeatable");
		this.expectKeyword("on");
		let o = this.parseDirectiveLocations();
		return this.node(e, {
			kind: N.DIRECTIVE_DEFINITION,
			description: t,
			name: n,
			arguments: r,
			directives: i,
			repeatable: a,
			locations: o
		});
	}
	parseDirectiveLocations() {
		return this.delimitedMany(P.PIPE, this.parseDirectiveLocation);
	}
	parseDirectiveLocation() {
		let e = this._lexer.token, t = this.parseName();
		if (Object.prototype.hasOwnProperty.call(Ze, t.value)) return t;
		throw this.unexpected(e);
	}
	parseSchemaCoordinate() {
		let e = this._lexer.token, t = this.expectOptionalToken(P.AT), n = this.parseName(), r;
		!t && this.expectOptionalToken(P.DOT) && (r = this.parseName());
		let i;
		return (t || r) && this.expectOptionalToken(P.PAREN_L) && (i = this.parseName(), this.expectToken(P.COLON), this.expectToken(P.PAREN_R)), t ? i ? this.node(e, {
			kind: N.DIRECTIVE_ARGUMENT_COORDINATE,
			name: n,
			argumentName: i
		}) : this.node(e, {
			kind: N.DIRECTIVE_COORDINATE,
			name: n
		}) : r ? i ? this.node(e, {
			kind: N.ARGUMENT_COORDINATE,
			name: n,
			fieldName: r,
			argumentName: i
		}) : this.node(e, {
			kind: N.MEMBER_COORDINATE,
			name: n,
			memberName: r
		}) : this.node(e, {
			kind: N.TYPE_COORDINATE,
			name: n
		});
	}
	node(e, t) {
		return this._options.noLocation !== !0 && (t.loc = new Ge(e, this._lexer.lastToken, this._lexer.source)), t;
	}
	peek(e) {
		return this._lexer.token.kind === e;
	}
	expectToken(e) {
		let t = this._lexer.token;
		if (t.kind === e) return this.advanceLexer(), t;
		throw We(this._lexer.source, t.start, `Expected ${Jt(e)}, found ${qt(t)}.`);
	}
	expectOptionalToken(e) {
		return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
	}
	expectKeyword(e) {
		let t = this._lexer.token;
		if (t.kind === P.NAME && t.value === e) this.advanceLexer();
		else throw We(this._lexer.source, t.start, `Expected "${e}", found ${qt(t)}.`);
	}
	expectOptionalKeyword(e) {
		let t = this._lexer.token;
		return t.kind === P.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
	}
	unexpected(e) {
		let t = e ?? this._lexer.token;
		return We(this._lexer.source, t.start, `Unexpected ${qt(t)}.`);
	}
	any(e, t, n) {
		this.expectToken(e);
		let r = [];
		for (; !this.expectOptionalToken(n);) r.push(t.call(this));
		return r;
	}
	optionalMany(e, t, n) {
		if (this.expectOptionalToken(e)) {
			let e = [];
			do
				e.push(t.call(this));
			while (!this.expectOptionalToken(n));
			return e;
		}
		return [];
	}
	many(e, t, n) {
		this.expectToken(e);
		let r = [];
		do
			r.push(t.call(this));
		while (!this.expectOptionalToken(n));
		return r;
	}
	delimitedMany(e, t) {
		this.expectOptionalToken(e);
		let n = [];
		do
			n.push(t.call(this));
		while (this.expectOptionalToken(e));
		return n;
	}
	advanceLexer() {
		let { maxTokens: e } = this._options, t = this._lexer.advance();
		if (t.kind !== P.EOF && (++this._tokenCounter, e !== void 0 && this._tokenCounter > e)) throw We(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`);
	}
};
function qt(e) {
	let t = e.value;
	return Jt(e.kind) + (t == null ? "" : ` "${t}"`);
}
function Jt(e) {
	return st(e) ? `"${e}"` : e;
}
//#endregion
//#region node_modules/graphql/language/printString.mjs
function Yt(e) {
	return `"${e.replace(Xt, Zt)}"`;
}
var Xt = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Zt(e) {
	return Qt[e.charCodeAt(0)];
}
var Qt = /* @__PURE__ */ "\\u0000.\\u0001.\\u0002.\\u0003.\\u0004.\\u0005.\\u0006.\\u0007.\\b.\\t.\\n.\\u000B.\\f.\\r.\\u000E.\\u000F.\\u0010.\\u0011.\\u0012.\\u0013.\\u0014.\\u0015.\\u0016.\\u0017.\\u0018.\\u0019.\\u001A.\\u001B.\\u001C.\\u001D.\\u001E.\\u001F...\\\"..........................................................\\\\...................................\\u007F.\\u0080.\\u0081.\\u0082.\\u0083.\\u0084.\\u0085.\\u0086.\\u0087.\\u0088.\\u0089.\\u008A.\\u008B.\\u008C.\\u008D.\\u008E.\\u008F.\\u0090.\\u0091.\\u0092.\\u0093.\\u0094.\\u0095.\\u0096.\\u0097.\\u0098.\\u0099.\\u009A.\\u009B.\\u009C.\\u009D.\\u009E.\\u009F".split("."), $t = Object.freeze({});
function en(e, t, n = qe) {
	let r = /* @__PURE__ */ new Map();
	for (let e of Object.values(N)) r.set(e, tn(t, e));
	let i, a = Array.isArray(e), o = [e], s = -1, c = [], l = e, u, d, f = [], p = [];
	do {
		s++;
		let e = s === o.length, m = e && c.length !== 0;
		if (e) {
			if (u = p.length === 0 ? void 0 : f[f.length - 1], l = d, d = p.pop(), m) if (a) {
				l = l.slice();
				let e = 0;
				for (let [t, n] of c) {
					let r = t - e;
					n === null ? (l.splice(r, 1), e++) : l[r] = n;
				}
			} else {
				l = { ...l };
				for (let [e, t] of c) l[e] = t;
			}
			s = i.index, o = i.keys, c = i.edits, a = i.inArray, i = i.prev;
		} else if (d) {
			if (u = a ? s : o[s], l = d[u], l == null) continue;
			f.push(u);
		}
		let h;
		if (!Array.isArray(l)) {
			if (Ye(l) || Ne(!1, `Invalid AST Node: ${Ft(l)}.`), h = (e ? r.get(l.kind)?.leave : r.get(l.kind)?.enter)?.call(t, l, u, d, f, p), h === $t) break;
			if (h === !1) {
				if (!e) {
					f.pop();
					continue;
				}
			} else if (h !== void 0 && (c.push([u, h]), !e)) if (Ye(h)) l = h;
			else {
				f.pop();
				continue;
			}
		}
		h === void 0 && m && c.push([u, l]), e ? f.pop() : (i = {
			inArray: a,
			index: s,
			keys: o,
			edits: c,
			prev: i
		}, a = Array.isArray(l), o = a ? l : n[l.kind] ?? [], s = -1, c = [], d && p.push(d), d = l);
	} while (i !== void 0);
	return c.length === 0 ? e : c[c.length - 1][1];
}
function tn(e, t) {
	let n = e[t];
	return typeof n == "object" ? n : typeof n == "function" ? {
		enter: n,
		leave: void 0
	} : {
		enter: e.enter,
		leave: e.leave
	};
}
//#endregion
//#region node_modules/graphql/language/printer.mjs
function nn(e) {
	return en(e, an);
}
var rn = 80, an = {
	Name: { leave: (e) => e.value },
	Variable: { leave: (e) => "$" + e.name },
	Document: { leave: (e) => I(e.definitions, "\n\n") },
	OperationDefinition: { leave(e) {
		let t = cn(e.variableDefinitions) ? L("(\n", I(e.variableDefinitions, "\n"), "\n)") : L("(", I(e.variableDefinitions, ", "), ")"), n = L("", e.description, "\n") + I([
			e.operation,
			I([e.name, t]),
			I(e.directives, " ")
		], " ");
		return (n === "query" ? "" : n + " ") + e.selectionSet;
	} },
	VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: n, directives: r, description: i }) => L("", i, "\n") + e + ": " + t + L(" = ", n) + L(" ", I(r, " ")) },
	SelectionSet: { leave: ({ selections: e }) => on(e) },
	Field: { leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
		let a = L("", e, ": ") + t, o = a + L("(", I(n, ", "), ")");
		return o.length > rn && (o = a + L("(\n", sn(I(n, "\n")), "\n)")), I([
			o,
			I(r, " "),
			i
		], " ");
	} },
	Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
	FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + L(" ", I(t, " ")) },
	InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: n }) => I([
		"...",
		L("on ", e),
		I(t, " "),
		n
	], " ") },
	FragmentDefinition: { leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i, description: a }) => L("", a, "\n") + `fragment ${e}${L("(", I(n, ", "), ")")} on ${t} ${L("", I(r, " "), " ")}` + i },
	IntValue: { leave: ({ value: e }) => e },
	FloatValue: { leave: ({ value: e }) => e },
	StringValue: { leave: ({ value: e, block: t }) => t ? at(e) : Yt(e) },
	BooleanValue: { leave: ({ value: e }) => e ? "true" : "false" },
	NullValue: { leave: () => "null" },
	EnumValue: { leave: ({ value: e }) => e },
	ListValue: { leave: ({ values: e }) => "[" + I(e, ", ") + "]" },
	ObjectValue: { leave: ({ fields: e }) => "{" + I(e, ", ") + "}" },
	ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
	Directive: { leave: ({ name: e, arguments: t }) => "@" + e + L("(", I(t, ", "), ")") },
	NamedType: { leave: ({ name: e }) => e },
	ListType: { leave: ({ type: e }) => "[" + e + "]" },
	NonNullType: { leave: ({ type: e }) => e + "!" },
	SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: n }) => L("", e, "\n") + I([
		"schema",
		I(t, " "),
		on(n)
	], " ") },
	OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t },
	ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: n }) => L("", e, "\n") + I([
		"scalar",
		t,
		I(n, " ")
	], " ") },
	ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => L("", e, "\n") + I([
		"type",
		t,
		L("implements ", I(n, " & ")),
		I(r, " "),
		on(i)
	], " ") },
	FieldDefinition: { leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => L("", e, "\n") + t + (cn(n) ? L("(\n", sn(I(n, "\n")), "\n)") : L("(", I(n, ", "), ")")) + ": " + r + L(" ", I(i, " ")) },
	InputValueDefinition: { leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => L("", e, "\n") + I([
		t + ": " + n,
		L("= ", r),
		I(i, " ")
	], " ") },
	InterfaceTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => L("", e, "\n") + I([
		"interface",
		t,
		L("implements ", I(n, " & ")),
		I(r, " "),
		on(i)
	], " ") },
	UnionTypeDefinition: { leave: ({ description: e, name: t, directives: n, types: r }) => L("", e, "\n") + I([
		"union",
		t,
		I(n, " "),
		L("= ", I(r, " | "))
	], " ") },
	EnumTypeDefinition: { leave: ({ description: e, name: t, directives: n, values: r }) => L("", e, "\n") + I([
		"enum",
		t,
		I(n, " "),
		on(r)
	], " ") },
	EnumValueDefinition: { leave: ({ description: e, name: t, directives: n }) => L("", e, "\n") + I([t, I(n, " ")], " ") },
	InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: n, fields: r }) => L("", e, "\n") + I([
		"input",
		t,
		I(n, " "),
		on(r)
	], " ") },
	DirectiveDefinition: { leave: ({ description: e, name: t, arguments: n, directives: r, repeatable: i, locations: a }) => L("", e, "\n") + "directive @" + t + (cn(n) ? L("(\n", sn(I(n, "\n")), "\n)") : L("(", I(n, ", "), ")")) + L(" ", I(r, " ")) + (i ? " repeatable" : "") + " on " + I(a, " | ") },
	SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => I([
		"extend schema",
		I(e, " "),
		on(t)
	], " ") },
	ScalarTypeExtension: { leave: ({ name: e, directives: t }) => I([
		"extend scalar",
		e,
		I(t, " ")
	], " ") },
	ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => I([
		"extend type",
		e,
		L("implements ", I(t, " & ")),
		I(n, " "),
		on(r)
	], " ") },
	InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => I([
		"extend interface",
		e,
		L("implements ", I(t, " & ")),
		I(n, " "),
		on(r)
	], " ") },
	UnionTypeExtension: { leave: ({ name: e, directives: t, types: n }) => I([
		"extend union",
		e,
		I(t, " "),
		L("= ", I(n, " | "))
	], " ") },
	EnumTypeExtension: { leave: ({ name: e, directives: t, values: n }) => I([
		"extend enum",
		e,
		I(t, " "),
		on(n)
	], " ") },
	InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: n }) => I([
		"extend input",
		e,
		I(t, " "),
		on(n)
	], " ") },
	DirectiveExtension: { leave: ({ name: e, directives: t }) => I(["extend directive @" + e, I(t, " ")], " ") },
	TypeCoordinate: { leave: ({ name: e }) => e },
	MemberCoordinate: { leave: ({ name: e, memberName: t }) => I([e, L(".", t)]) },
	ArgumentCoordinate: { leave: ({ name: e, fieldName: t, argumentName: n }) => I([
		e,
		L(".", t),
		L("(", n, ":)")
	]) },
	DirectiveCoordinate: { leave: ({ name: e }) => I(["@", e]) },
	DirectiveArgumentCoordinate: { leave: ({ name: e, argumentName: t }) => I([
		"@",
		e,
		L("(", t, ":)")
	]) }
};
function I(e, t = "") {
	return e?.filter((e) => e).join(t) ?? "";
}
function on(e) {
	return L("{\n", sn(I(e, "\n")), "\n}");
}
function L(e, t, n = "") {
	return t != null && t !== "" ? e + t + n : "";
}
function sn(e) {
	return L("  ", e.replace(/\n/g, "\n  "));
}
function cn(e) {
	/* c8 ignore next */
	return e?.some((e) => e.includes("\n")) ?? !1;
}
//#endregion
//#region node_modules/graphql/language/predicates.mjs
function ln(e) {
	return e.kind === N.FIELD || e.kind === N.FRAGMENT_SPREAD || e.kind === N.INLINE_FRAGMENT;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/directives.js
function un(e, t) {
	var n = e.directives;
	return !n || !n.length ? !0 : mn(n).every(function(e) {
		var n = e.directive, r = e.ifArgument, i = !1;
		return r.value.kind === "Variable" ? (i = t && t[r.value.name.value], M(i !== void 0, 105, n.name.value)) : i = r.value.value, n.name.value === "skip" ? !i : i;
	});
}
function dn(e, t, n) {
	var r = new Set(e), i = r.size;
	return en(t, { Directive: function(e) {
		if (r.delete(e.name.value) && (!n || !r.size)) return $t;
	} }), n ? !r.size : r.size < i;
}
function fn(e) {
	return e && dn(["client", "export"], e, !0);
}
function pn(e) {
	var t = e.name.value;
	return t === "skip" || t === "include";
}
function mn(e) {
	var t = [];
	return e && e.length && e.forEach(function(e) {
		if (pn(e)) {
			var n = e.arguments, r = e.name.value;
			M(n && n.length === 1, 106, r);
			var i = n[0];
			M(i.name && i.name.value === "if", 107, r);
			var a = i.value;
			M(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 108, r), t.push({
				directive: e,
				ifArgument: i
			});
		}
	}), t;
}
function hn(e) {
	var t = e.directives?.find(function(e) {
		return e.name.value === "unmask";
	});
	if (!t) return "mask";
	var n = t.arguments?.find(function(e) {
		return e.name.value === "mode";
	});
	return globalThis.__DEV__ !== !1 && n && (n.value.kind === N.VARIABLE ? globalThis.__DEV__ !== !1 && M.warn(109) : n.value.kind === N.STRING ? n.value.value !== "migrate" && globalThis.__DEV__ !== !1 && M.warn(111, n.value.value) : globalThis.__DEV__ !== !1 && M.warn(110)), n && "value" in n.value && n.value.value === "migrate" ? "migrate" : "unmask";
}
//#endregion
//#region node_modules/@wry/trie/lib/index.js
var gn = () => Object.create(null), { forEach: _n, slice: vn } = Array.prototype, { hasOwnProperty: yn } = Object.prototype, bn = class e {
	constructor(e = !0, t = gn) {
		this.weakness = e, this.makeData = t;
	}
	lookup() {
		return this.lookupArray(arguments);
	}
	lookupArray(e) {
		let t = this;
		return _n.call(e, (e) => t = t.getChildTrie(e)), yn.call(t, "data") ? t.data : t.data = this.makeData(vn.call(e));
	}
	peek() {
		return this.peekArray(arguments);
	}
	peekArray(e) {
		let t = this;
		for (let n = 0, r = e.length; t && n < r; ++n) {
			let r = t.mapFor(e[n], !1);
			t = r && r.get(e[n]);
		}
		return t && t.data;
	}
	remove() {
		return this.removeArray(arguments);
	}
	removeArray(e) {
		let t;
		if (e.length) {
			let n = e[0], r = this.mapFor(n, !1), i = r && r.get(n);
			i && (t = i.removeArray(vn.call(e, 1)), !i.data && !i.weak && !(i.strong && i.strong.size) && r.delete(n));
		} else t = this.data, delete this.data;
		return t;
	}
	getChildTrie(t) {
		let n = this.mapFor(t, !0), r = n.get(t);
		return r || n.set(t, r = new e(this.weakness, this.makeData)), r;
	}
	mapFor(e, t) {
		return this.weakness && xn(e) ? this.weak || (t ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (t ? this.strong = /* @__PURE__ */ new Map() : void 0);
	}
};
function xn(e) {
	switch (typeof e) {
		case "object": if (e === null) break;
		case "function": return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/canUse.js
var Sn = xe(function() {
	return navigator.product;
}) == "ReactNative", Cn = typeof WeakMap == "function" && !(Sn && !global.HermesInternal), wn = typeof WeakSet == "function", Tn = typeof Symbol == "function" && typeof Symbol.for == "function", En = Tn && Symbol.asyncIterator, Dn = typeof xe(function() {
	return window.document.createElement;
}) == "function", On = xe(function() {
	return navigator.userAgent.indexOf("jsdom") >= 0;
}) || !1, kn = (Dn || Sn) && !On;
//#endregion
//#region node_modules/@apollo/client/utilities/common/objects.js
function R(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/fragments.js
function An(e, t) {
	var n = t, r = [];
	return e.definitions.forEach(function(e) {
		if (e.kind === "OperationDefinition") throw De(112, e.operation, e.name ? ` named '${e.name.value}'` : "");
		e.kind === "FragmentDefinition" && r.push(e);
	}), n === void 0 && (M(r.length === 1, 113, r.length), n = r[0].name.value), A(A({}, e), { definitions: j([{
		kind: "OperationDefinition",
		operation: "query",
		selectionSet: {
			kind: "SelectionSet",
			selections: [{
				kind: "FragmentSpread",
				name: {
					kind: "Name",
					value: n
				}
			}]
		}
	}], e.definitions, !0) });
}
function jn(e) {
	e === void 0 && (e = []);
	var t = {};
	return e.forEach(function(e) {
		t[e.name.value] = e;
	}), t;
}
function Mn(e, t) {
	switch (e.kind) {
		case "InlineFragment": return e;
		case "FragmentSpread":
			var n = e.name.value;
			if (typeof t == "function") return t(n);
			var r = t && t[n];
			return M(r, 114, n), r || null;
		default: return null;
	}
}
function Nn(e) {
	var t = !0;
	return en(e, { FragmentSpread: function(e) {
		if (t = !!e.directives && e.directives.some(function(e) {
			return e.name.value === "unmask";
		}), !t) return $t;
	} }), t;
}
//#endregion
//#region node_modules/@wry/caches/lib/strong.js
function Pn() {}
var Fn = class {
	constructor(e = Infinity, t = Pn) {
		this.max = e, this.dispose = t, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
	}
	has(e) {
		return this.map.has(e);
	}
	get(e) {
		let t = this.getNode(e);
		return t && t.value;
	}
	get size() {
		return this.map.size;
	}
	getNode(e) {
		let t = this.map.get(e);
		if (t && t !== this.newest) {
			let { older: e, newer: n } = t;
			n && (n.older = e), e && (e.newer = n), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = n);
		}
		return t;
	}
	set(e, t) {
		let n = this.getNode(e);
		return n ? n.value = t : (n = {
			key: e,
			value: t,
			newer: null,
			older: this.newest
		}, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(e, n), n.value);
	}
	clean() {
		for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key);
	}
	delete(e) {
		let t = this.map.get(e);
		return t ? (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0) : !1;
	}
};
//#endregion
//#region node_modules/@wry/caches/lib/weak.js
function In() {}
var Ln = In, Rn = typeof WeakRef < "u" ? WeakRef : function(e) {
	return { deref: () => e };
}, zn = typeof WeakMap < "u" ? WeakMap : Map, Bn = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
	return {
		register: In,
		unregister: In
	};
}, Vn = 10024, Hn = class {
	constructor(e = Infinity, t = Ln) {
		this.max = e, this.dispose = t, this.map = new zn(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
			let e = this.unfinalizedNodes.values();
			for (let t = 0; t < Vn; t++) {
				let t = e.next().value;
				if (!t) break;
				this.unfinalizedNodes.delete(t);
				let n = t.key;
				delete t.key, t.keyRef = new Rn(n), this.registry.register(n, t, t);
			}
			this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
		}, this.registry = new Bn(this.deleteNode.bind(this));
	}
	has(e) {
		return this.map.has(e);
	}
	get(e) {
		let t = this.getNode(e);
		return t && t.value;
	}
	getNode(e) {
		let t = this.map.get(e);
		if (t && t !== this.newest) {
			let { older: e, newer: n } = t;
			n && (n.older = e), e && (e.newer = n), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = n);
		}
		return t;
	}
	set(e, t) {
		let n = this.getNode(e);
		return n ? n.value = t : (n = {
			key: e,
			value: t,
			newer: null,
			older: this.newest
		}, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.scheduleFinalization(n), this.map.set(e, n), this.size++, n.value);
	}
	clean() {
		for (; this.oldest && this.size > this.max;) this.deleteNode(this.oldest);
	}
	deleteNode(e) {
		e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.size--;
		let t = e.key || e.keyRef && e.keyRef.deref();
		this.dispose(e.value, t), e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e), t && this.map.delete(t);
	}
	delete(e) {
		let t = this.map.get(e);
		return t ? (this.deleteNode(t), !0) : !1;
	}
	scheduleFinalization(e) {
		this.unfinalizedNodes.add(e), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
	}
}, Un = /* @__PURE__ */ new WeakSet();
function Wn(e) {
	e.size <= (e.max || -1) || Un.has(e) || (Un.add(e), setTimeout(function() {
		e.clean(), Un.delete(e);
	}, 100));
}
var Gn = function(e, t) {
	var n = new Hn(e, t);
	return n.set = function(e, t) {
		var n = Hn.prototype.set.call(this, e, t);
		return Wn(this), n;
	}, n;
}, Kn = function(e, t) {
	var n = new Fn(e, t);
	return n.set = function(e, t) {
		var n = Fn.prototype.set.call(this, e, t);
		return Wn(this), n;
	}, n;
}, qn = A({}, Se[Symbol.for("apollo.cacheSize")]), Jn = {};
function Yn(e, t) {
	Jn[e] = t;
}
var Xn = globalThis.__DEV__ === !1 ? void 0 : er, Zn = globalThis.__DEV__ === !1 ? void 0 : nr, Qn = globalThis.__DEV__ === !1 ? void 0 : tr;
function $n() {
	return Object.fromEntries(Object.entries({
		parser: 1e3,
		canonicalStringify: 1e3,
		print: 2e3,
		"documentTransform.cache": 2e3,
		"queryManager.getDocumentInfo": 2e3,
		"PersistedQueryLink.persistedQueryHashes": 2e3,
		"fragmentRegistry.transform": 2e3,
		"fragmentRegistry.lookup": 1e3,
		"fragmentRegistry.findFragmentSpreads": 4e3,
		"cache.fragmentQueryDocuments": 1e3,
		"removeTypenameFromVariables.getVariableDefinitions": 2e3,
		"inMemoryCache.maybeBroadcastWatch": 5e3,
		"inMemoryCache.executeSelectionSet": 5e4,
		"inMemoryCache.executeSubSelectedArray": 1e4
	}).map(function(e) {
		var t = e[0], n = e[1];
		return [t, qn[t] || n];
	}));
}
function er() {
	var e;
	if (globalThis.__DEV__ === !1) throw Error("only supported in development mode");
	return {
		limits: $n(),
		sizes: A({
			print: Jn.print?.call(Jn),
			parser: Jn.parser?.call(Jn),
			canonicalStringify: Jn.canonicalStringify?.call(Jn),
			links: cr(this.link),
			queryManager: {
				getDocumentInfo: this.queryManager.transformCache.size,
				documentTransforms: or(this.queryManager.documentTransform)
			}
		}, (e = this.cache).getMemoryInternals?.call(e))
	};
}
function tr() {
	return { cache: { fragmentQueryDocuments: ir(this.getFragmentDoc) } };
}
function nr() {
	var e = this.config.fragments;
	return A(A({}, tr.apply(this)), {
		addTypenameDocumentTransform: or(this.addTypenameTransform),
		inMemoryCache: {
			executeSelectionSet: ir(this.storeReader.executeSelectionSet),
			executeSubSelectedArray: ir(this.storeReader.executeSubSelectedArray),
			maybeBroadcastWatch: ir(this.maybeBroadcastWatch)
		},
		fragmentRegistry: {
			findFragmentSpreads: ir(e?.findFragmentSpreads),
			lookup: ir(e?.lookup),
			transform: ir(e?.transform)
		}
	});
}
function rr(e) {
	return !!e && "dirtyKey" in e;
}
function ir(e) {
	return rr(e) ? e.size : void 0;
}
function ar(e) {
	return e != null;
}
function or(e) {
	return sr(e).map(function(e) {
		return { cache: e };
	});
}
function sr(e) {
	return e ? j(j([ir(e?.performWork)], sr(e?.left), !0), sr(e?.right), !0).filter(ar) : [];
}
function cr(e) {
	return e ? j(j([(e?.getMemoryInternals)?.call(e)], cr(e?.left), !0), cr(e?.right), !0).filter(ar) : [];
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/canonicalStringify.js
var lr = Object.assign(function(e) {
	return JSON.stringify(e, dr);
}, { reset: function() {
	ur = new Kn(qn.canonicalStringify || 1e3);
} });
globalThis.__DEV__ !== !1 && Yn("canonicalStringify", function() {
	return ur.size;
});
var ur;
lr.reset();
function dr(e, t) {
	if (t && typeof t == "object") {
		var n = Object.getPrototypeOf(t);
		if (n === Object.prototype || n === null) {
			var r = Object.keys(t);
			if (r.every(fr)) return t;
			var i = JSON.stringify(r), a = ur.get(i);
			if (!a) {
				r.sort();
				var o = JSON.stringify(r);
				a = ur.get(o) || r, ur.set(i, a), ur.set(o, a);
			}
			var s = Object.create(n);
			return a.forEach(function(e) {
				s[e] = t[e];
			}), s;
		}
	}
	return t;
}
function fr(e, t, n) {
	return t === 0 || n[t - 1] <= e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/storeUtils.js
function pr(e) {
	return { __ref: String(e) };
}
function z(e) {
	return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function mr(e) {
	return R(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function hr(e) {
	return e.kind === "StringValue";
}
function gr(e) {
	return e.kind === "BooleanValue";
}
function _r(e) {
	return e.kind === "IntValue";
}
function vr(e) {
	return e.kind === "FloatValue";
}
function yr(e) {
	return e.kind === "Variable";
}
function br(e) {
	return e.kind === "ObjectValue";
}
function xr(e) {
	return e.kind === "ListValue";
}
function Sr(e) {
	return e.kind === "EnumValue";
}
function Cr(e) {
	return e.kind === "NullValue";
}
function wr(e, t, n, r) {
	if (_r(n) || vr(n)) e[t.value] = Number(n.value);
	else if (gr(n) || hr(n)) e[t.value] = n.value;
	else if (br(n)) {
		var i = {};
		n.fields.map(function(e) {
			return wr(i, e.name, e.value, r);
		}), e[t.value] = i;
	} else if (yr(n)) {
		var a = (r || {})[n.name.value];
		e[t.value] = a;
	} else if (xr(n)) e[t.value] = n.values.map(function(e) {
		var n = {};
		return wr(n, t, e, r), n[t.value];
	});
	else if (Sr(n)) e[t.value] = n.value;
	else if (Cr(n)) e[t.value] = null;
	else throw De(123, t.value, n.kind);
}
function Tr(e, t) {
	var n = null;
	e.directives && (n = {}, e.directives.forEach(function(e) {
		n[e.name.value] = {}, e.arguments && e.arguments.forEach(function(r) {
			var i = r.name, a = r.value;
			return wr(n[e.name.value], i, a, t);
		});
	}));
	var r = null;
	return e.arguments && e.arguments.length && (r = {}, e.arguments.forEach(function(e) {
		var n = e.name, i = e.value;
		return wr(r, n, i, t);
	})), Or(e.name.value, r, n);
}
var Er = [
	"connection",
	"include",
	"skip",
	"client",
	"rest",
	"export",
	"nonreactive"
], Dr = lr, Or = Object.assign(function(e, t, n) {
	if (t && n && n.connection && n.connection.key) if (n.connection.filter && n.connection.filter.length > 0) {
		var r = n.connection.filter ? n.connection.filter : [];
		r.sort();
		var i = {};
		return r.forEach(function(e) {
			i[e] = t[e];
		}), `${n.connection.key}(${Dr(i)})`;
	} else return n.connection.key;
	var a = e;
	if (t) {
		var o = Dr(t);
		a += `(${o})`;
	}
	return n && Object.keys(n).forEach(function(e) {
		Er.indexOf(e) === -1 && (n[e] && Object.keys(n[e]).length ? a += `@${e}(${Dr(n[e])})` : a += `@${e}`);
	}), a;
}, { setStringify: function(e) {
	var t = Dr;
	return Dr = e, t;
} });
function kr(e, t) {
	if (e.arguments && e.arguments.length) {
		var n = {};
		return e.arguments.forEach(function(e) {
			var r = e.name, i = e.value;
			return wr(n, r, i, t);
		}), n;
	}
	return null;
}
function Ar(e) {
	return e.alias ? e.alias.value : e.name.value;
}
function jr(e, t, n) {
	for (var r, i = 0, a = t.selections; i < a.length; i++) {
		var o = a[i];
		if (Mr(o)) {
			if (o.name.value === "__typename") return e[Ar(o)];
		} else r ? r.push(o) : r = [o];
	}
	if (typeof e.__typename == "string") return e.__typename;
	if (r) for (var s = 0, c = r; s < c.length; s++) {
		var o = c[s], l = jr(e, Mn(o, n).selectionSet, n);
		if (typeof l == "string") return l;
	}
}
function Mr(e) {
	return e.kind === "Field";
}
function Nr(e) {
	return e.kind === "InlineFragment";
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/getFromAST.js
function Pr(e) {
	M(e && e.kind === "Document", 115);
	var t = e.definitions.filter(function(e) {
		return e.kind !== "FragmentDefinition";
	}).map(function(e) {
		if (e.kind !== "OperationDefinition") throw De(116, e.kind);
		return e;
	});
	return M(t.length <= 1, 117, t.length), e;
}
function Fr(e) {
	return Pr(e), e.definitions.filter(function(e) {
		return e.kind === "OperationDefinition";
	})[0];
}
function Ir(e) {
	return e.definitions.filter(function(e) {
		return e.kind === "OperationDefinition" && !!e.name;
	}).map(function(e) {
		return e.name.value;
	})[0] || null;
}
function Lr(e) {
	return e.definitions.filter(function(e) {
		return e.kind === "FragmentDefinition";
	});
}
function Rr(e) {
	var t = Fr(e);
	return M(t && t.operation === "query", 118), t;
}
function zr(e) {
	M(e.kind === "Document", 119), M(e.definitions.length <= 1, 120);
	var t = e.definitions[0];
	return M(t.kind === "FragmentDefinition", 121), t;
}
function Br(e) {
	Pr(e);
	for (var t, n = 0, r = e.definitions; n < r.length; n++) {
		var i = r[n];
		if (i.kind === "OperationDefinition") {
			var a = i.operation;
			if (a === "query" || a === "mutation" || a === "subscription") return i;
		}
		i.kind === "FragmentDefinition" && !t && (t = i);
	}
	if (t) return t;
	throw De(122);
}
function Vr(e) {
	var t = Object.create(null), n = e && e.variableDefinitions;
	return n && n.length && n.forEach(function(e) {
		e.defaultValue && wr(t, e.variable.name, e.defaultValue);
	}), t;
}
//#endregion
//#region node_modules/@wry/context/lib/slot.js
var Hr = null, Ur = {}, Wr = 1, Gr = () => class {
	constructor() {
		this.id = [
			"slot",
			Wr++,
			Date.now(),
			Math.random().toString(36).slice(2)
		].join(":");
	}
	hasValue() {
		for (let e = Hr; e; e = e.parent) if (this.id in e.slots) {
			let t = e.slots[this.id];
			if (t === Ur) break;
			return e !== Hr && (Hr.slots[this.id] = t), !0;
		}
		return Hr && (Hr.slots[this.id] = Ur), !1;
	}
	getValue() {
		if (this.hasValue()) return Hr.slots[this.id];
	}
	withValue(e, t, n, r) {
		let i = {
			__proto__: null,
			[this.id]: e
		}, a = Hr;
		Hr = {
			parent: a,
			slots: i
		};
		try {
			return t.apply(r, n);
		} finally {
			Hr = a;
		}
	}
	static bind(e) {
		let t = Hr;
		return function() {
			let n = Hr;
			try {
				return Hr = t, e.apply(this, arguments);
			} finally {
				Hr = n;
			}
		};
	}
	static noContext(e, t, n) {
		if (Hr) {
			let r = Hr;
			try {
				return Hr = null, e.apply(n, t);
			} finally {
				Hr = r;
			}
		} else return e.apply(n, t);
	}
};
function Kr(e) {
	try {
		return e();
	} catch {}
}
var qr = "@wry/context:Slot", Jr = Kr(() => globalThis) || Kr(() => global) || Object.create(null), Yr = Jr[qr] || Array[qr] || (function(e) {
	try {
		Object.defineProperty(Jr, qr, {
			value: e,
			enumerable: !1,
			writable: !1,
			configurable: !0
		});
	} finally {
		return e;
	}
})(Gr()), { bind: Xr, noContext: Zr } = Yr, Qr = new Yr(), { hasOwnProperty: $r } = Object.prototype, ei = Array.from || function(e) {
	let t = [];
	return e.forEach((e) => t.push(e)), t;
};
function ti(e) {
	let { unsubscribe: t } = e;
	typeof t == "function" && (e.unsubscribe = void 0, t());
}
//#endregion
//#region node_modules/optimism/lib/entry.js
var ni = [], ri = 100;
function ii(e, t) {
	if (!e) throw Error(t || "assertion failure");
}
function ai(e, t) {
	let n = e.length;
	return n > 0 && n === t.length && e[n - 1] === t[n - 1];
}
function oi(e) {
	switch (e.length) {
		case 0: throw Error("unknown value");
		case 1: return e[0];
		case 2: throw e[1];
	}
}
function si(e) {
	return e.slice(0);
}
var ci = class e {
	constructor(t) {
		this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count;
	}
	peek() {
		if (this.value.length === 1 && !fi(this)) return li(this), this.value[0];
	}
	recompute(e) {
		return ii(!this.recomputing, "already recomputing"), li(this), fi(this) ? ui(this, e) : oi(this.value);
	}
	setDirty() {
		this.dirty || (this.dirty = !0, mi(this), ti(this));
	}
	dispose() {
		this.setDirty(), bi(this), gi(this, (e, t) => {
			e.setDirty(), xi(e, this);
		});
	}
	forget() {
		this.dispose();
	}
	dependOn(e) {
		e.add(this), this.deps || (this.deps = ni.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
	}
	forgetDeps() {
		this.deps && (ei(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), ni.push(this.deps), this.deps = null);
	}
};
ci.count = 0;
function li(e) {
	let t = Qr.getValue();
	if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), fi(e) ? _i(t, e) : vi(t, e), t;
}
function ui(e, t) {
	return bi(e), Qr.withValue(e, di, [e, t]), Si(e, t) && pi(e), oi(e.value);
}
function di(e, t) {
	e.recomputing = !0;
	let { normalizeResult: n } = e, r;
	n && e.value.length === 1 && (r = si(e.value)), e.value.length = 0;
	try {
		if (e.value[0] = e.fn.apply(null, t), n && r && !ai(r, e.value)) try {
			e.value[0] = n(e.value[0], r[0]);
		} catch {}
	} catch (t) {
		e.value[1] = t;
	}
	e.recomputing = !1;
}
function fi(e) {
	return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function pi(e) {
	e.dirty = !1, !fi(e) && hi(e);
}
function mi(e) {
	gi(e, _i);
}
function hi(e) {
	gi(e, vi);
}
function gi(e, t) {
	let n = e.parents.size;
	if (n) {
		let r = ei(e.parents);
		for (let i = 0; i < n; ++i) t(r[i], e);
	}
}
function _i(e, t) {
	ii(e.childValues.has(t)), ii(fi(t));
	let n = !fi(e);
	if (!e.dirtyChildren) e.dirtyChildren = ni.pop() || /* @__PURE__ */ new Set();
	else if (e.dirtyChildren.has(t)) return;
	e.dirtyChildren.add(t), n && mi(e);
}
function vi(e, t) {
	ii(e.childValues.has(t)), ii(!fi(t));
	let n = e.childValues.get(t);
	n.length === 0 ? e.childValues.set(t, si(t.value)) : ai(n, t.value) || e.setDirty(), yi(e, t), !fi(e) && hi(e);
}
function yi(e, t) {
	let n = e.dirtyChildren;
	n && (n.delete(t), n.size === 0 && (ni.length < ri && ni.push(n), e.dirtyChildren = null));
}
function bi(e) {
	e.childValues.size > 0 && e.childValues.forEach((t, n) => {
		xi(e, n);
	}), e.forgetDeps(), ii(e.dirtyChildren === null);
}
function xi(e, t) {
	t.parents.delete(e), e.childValues.delete(t), yi(e, t);
}
function Si(e, t) {
	if (typeof e.subscribe == "function") try {
		ti(e), e.unsubscribe = e.subscribe.apply(null, t);
	} catch {
		return e.setDirty(), !1;
	}
	return !0;
}
//#endregion
//#region node_modules/optimism/lib/dep.js
var Ci = {
	setDirty: !0,
	dispose: !0,
	forget: !0
};
function wi(e) {
	let t = /* @__PURE__ */ new Map(), n = e && e.subscribe;
	function r(e) {
		let r = Qr.getValue();
		if (r) {
			let i = t.get(e);
			i || t.set(e, i = /* @__PURE__ */ new Set()), r.dependOn(i), typeof n == "function" && (ti(i), i.unsubscribe = n(e));
		}
	}
	return r.dirty = function(e, n) {
		let r = t.get(e);
		if (r) {
			let i = n && $r.call(Ci, n) ? n : "setDirty";
			ei(r).forEach((e) => e[i]()), t.delete(e), ti(r);
		}
	}, r;
}
//#endregion
//#region node_modules/optimism/lib/index.js
var Ti;
function Ei(...e) {
	return (Ti || (Ti = new bn(typeof WeakMap == "function"))).lookupArray(e);
}
var Di = /* @__PURE__ */ new Set();
function Oi(e, { max: t = 2 ** 16, keyArgs: n, makeCacheKey: r = Ei, normalizeResult: i, subscribe: a, cache: o = Fn } = Object.create(null)) {
	let s = typeof o == "function" ? new o(t, (e) => e.dispose()) : o, c = function() {
		let t = r.apply(null, n ? n.apply(null, arguments) : arguments);
		if (t === void 0) return e.apply(null, arguments);
		let o = s.get(t);
		o || (s.set(t, o = new ci(e)), o.normalizeResult = i, o.subscribe = a, o.forget = () => s.delete(t));
		let c = o.recompute(Array.prototype.slice.call(arguments));
		return s.set(t, o), Di.add(s), Qr.hasValue() || (Di.forEach((e) => e.clean()), Di.clear()), c;
	};
	Object.defineProperty(c, "size", {
		get: () => s.size,
		configurable: !1,
		enumerable: !1
	}), Object.freeze(c.options = {
		max: t,
		keyArgs: n,
		makeCacheKey: r,
		normalizeResult: i,
		subscribe: a,
		cache: s
	});
	function l(e) {
		let t = e && s.get(e);
		t && t.setDirty();
	}
	c.dirtyKey = l, c.dirty = function() {
		l(r.apply(null, arguments));
	};
	function u(e) {
		let t = e && s.get(e);
		if (t) return t.peek();
	}
	c.peekKey = u, c.peek = function() {
		return u(r.apply(null, arguments));
	};
	function d(e) {
		return e ? s.delete(e) : !1;
	}
	return c.forgetKey = d, c.forget = function() {
		return d(r.apply(null, arguments));
	}, c.makeCacheKey = r, c.getKey = n ? function() {
		return r.apply(null, n.apply(null, arguments));
	} : r, Object.freeze(c);
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/DocumentTransform.js
function ki(e) {
	return e;
}
var Ai = function() {
	function e(e, t) {
		t === void 0 && (t = Object.create(null)), this.resultCache = wn ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = t.cache !== !1, this.resetCache();
	}
	return e.prototype.getCacheKey = function(e) {
		return [e];
	}, e.identity = function() {
		return new e(ki, { cache: !1 });
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
			var n = new bn(Cn);
			this.performWork = Oi(e.prototype.performWork.bind(this), {
				makeCacheKey: function(e) {
					var r = t.getCacheKey(e);
					if (r) return M(Array.isArray(r), 104), n.lookupArray(r);
				},
				max: qn["documentTransform.cache"],
				cache: Hn
			});
		}
	}, e.prototype.performWork = function(e) {
		return Pr(e), this.transform(e);
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
}(), ji, Mi = Object.assign(function(e) {
	var t = ji.get(e);
	return t || (t = nn(e), ji.set(e, t)), t;
}, { reset: function() {
	ji = new Gn(qn.print || 2e3);
} });
Mi.reset(), globalThis.__DEV__ !== !1 && Yn("print", function() {
	return ji ? ji.size : 0;
});
//#endregion
//#region node_modules/@apollo/client/utilities/common/arrays.js
var Ni = Array.isArray;
function Pi(e) {
	return Array.isArray(e) && e.length > 0;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/transform.js
var Fi = {
	kind: N.FIELD,
	name: {
		kind: N.NAME,
		value: "__typename"
	}
};
function Ii(e, t) {
	return !e || e.selectionSet.selections.every(function(e) {
		return e.kind === N.FRAGMENT_SPREAD && Ii(t[e.name.value], t);
	});
}
function Li(e) {
	return Ii(Fr(e) || zr(e), jn(Lr(e))) ? null : e;
}
function Ri(e) {
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
function zi(e) {
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
function Bi(e, t) {
	Pr(t);
	for (var n = zi(""), r = zi(""), i = function(e) {
		for (var t = 0, i = void 0; t < e.length && (i = e[t]); ++t) if (!Ni(i)) {
			if (i.kind === N.OPERATION_DEFINITION) return n(i.name && i.name.value);
			if (i.kind === N.FRAGMENT_DEFINITION) return r(i.name.value);
		}
		return globalThis.__DEV__ !== !1 && M.error(124), null;
	}, a = 0, o = t.definitions.length - 1; o >= 0; --o) t.definitions[o].kind === N.OPERATION_DEFINITION && ++a;
	var s = Ri(e), c = function(e) {
		return Pi(e) && e.map(s).some(function(e) {
			return e && e.remove;
		});
	}, l = /* @__PURE__ */ new Map(), u = !1, d = { enter: function(e) {
		if (c(e.directives)) return u = !0, null;
	} }, f = en(t, {
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
					return e.kind === N.FIELD && e.name.value === "__typename";
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
		e.kind === N.OPERATION_DEFINITION ? p(n(e.name && e.name.value)).fragmentSpreads.forEach(function(e) {
			m.add(e);
		}) : e.kind === N.FRAGMENT_DEFINITION && a === 0 && !r(e.name.value).removed && m.add(e.name.value);
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
	return Li(en(f, {
		FragmentSpread: g,
		FragmentDefinition: g,
		OperationDefinition: { leave: function(e) {
			if (e.variableDefinitions) {
				var t = p(n(e.name && e.name.value)).transitiveVars;
				if (t.size < e.variableDefinitions.length) return A(A({}, e), { variableDefinitions: e.variableDefinitions.filter(function(e) {
					return t.has(e.variable.name.value);
				}) });
			}
		} }
	}));
}
var Vi = Object.assign(function(e) {
	return en(e, { SelectionSet: { enter: function(e, t, n) {
		if (!(n && n.kind === N.OPERATION_DEFINITION)) {
			var r = e.selections;
			if (r && !r.some(function(e) {
				return Mr(e) && (e.name.value === "__typename" || e.name.value.lastIndexOf("__", 0) === 0);
			})) {
				var i = n;
				if (!(Mr(i) && i.directives && i.directives.some(function(e) {
					return e.name.value === "export";
				}))) return A(A({}, e), { selections: j(j([], r, !0), [Fi], !1) });
			}
		}
	} } });
}, { added: function(e) {
	return e === Fi;
} });
function Hi(e) {
	return Br(e).operation === "query" ? e : en(e, { OperationDefinition: { enter: function(e) {
		return A(A({}, e), { operation: "query" });
	} } });
}
function Ui(e) {
	return Pr(e), Bi([{
		test: function(e) {
			return e.name.value === "client";
		},
		remove: !0
	}], e);
}
function Wi(e) {
	return Pr(e), en(e, { FragmentSpread: function(e) {
		if (!e.directives?.some(function(e) {
			return e.name.value === "unmask";
		})) return A(A({}, e), { directives: j(j([], e.directives || [], !0), [{
			kind: N.DIRECTIVE,
			name: {
				kind: N.NAME,
				value: "nonreactive"
			}
		}], !1) });
	} });
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/mergeDeep.js
var Gi = Object.prototype.hasOwnProperty;
function Ki() {
	return qi([...arguments]);
}
function qi(e) {
	var t = e[0] || {}, n = e.length;
	if (n > 1) for (var r = new Yi(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
	return t;
}
var Ji = function(e, t, n) {
	return this.merge(e[n], t[n]);
}, Yi = function() {
	function e(e) {
		e === void 0 && (e = Ji), this.reconciler = e, this.isObject = R, this.pastCopies = /* @__PURE__ */ new Set();
	}
	return e.prototype.merge = function(e, t) {
		for (var n = this, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		return R(t) && R(e) ? (Object.keys(t).forEach(function(i) {
			if (Gi.call(e, i)) {
				var a = e[i];
				if (t[i] !== a) {
					var o = n.reconciler.apply(n, j([
						e,
						t,
						i
					], r, !1));
					o !== a && (e = n.shallowCopyForMerge(e), e[i] = o);
				}
			} else e = n.shallowCopyForMerge(e), e[i] = t[i];
		}), e) : t;
	}, e.prototype.shallowCopyForMerge = function(e) {
		return R(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : A({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
	}, e;
}();
//#endregion
//#region node_modules/zen-observable-ts/module.js
function Xi(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = Zi(e)) || t && e && typeof e.length == "number") {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Zi(e, t) {
	if (e) {
		if (typeof e == "string") return Qi(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qi(e, t);
	}
}
function Qi(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function $i(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function ea(e, t, n) {
	return t && $i(e.prototype, t), n && $i(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var ta = function() {
	return typeof Symbol == "function";
}, na = function(e) {
	return ta() && !!Symbol[e];
}, ra = function(e) {
	return na(e) ? Symbol[e] : "@@" + e;
};
ta() && !na("observable") && (Symbol.observable = Symbol("observable"));
var ia = ra("iterator"), aa = ra("observable"), oa = ra("species");
function sa(e, t) {
	var n = e[t];
	if (n != null) {
		if (typeof n != "function") throw TypeError(n + " is not a function");
		return n;
	}
}
function ca(e) {
	var t = e.constructor;
	return t !== void 0 && (t = t[oa], t === null && (t = void 0)), t === void 0 ? B : t;
}
function la(e) {
	return e instanceof B;
}
function ua(e) {
	ua.log ? ua.log(e) : setTimeout(function() {
		throw e;
	});
}
function da(e) {
	Promise.resolve().then(function() {
		try {
			e();
		} catch (e) {
			ua(e);
		}
	});
}
function fa(e) {
	var t = e._cleanup;
	if (t !== void 0 && (e._cleanup = void 0, t)) try {
		if (typeof t == "function") t();
		else {
			var n = sa(t, "unsubscribe");
			n && n.call(t);
		}
	} catch (e) {
		ua(e);
	}
}
function pa(e) {
	e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function ma(e) {
	var t = e._queue;
	if (t) {
		e._queue = void 0, e._state = "ready";
		for (var n = 0; n < t.length && (ha(e, t[n].type, t[n].value), e._state !== "closed"); ++n);
	}
}
function ha(e, t, n) {
	e._state = "running";
	var r = e._observer;
	try {
		var i = sa(r, t);
		switch (t) {
			case "next":
				i && i.call(r, n);
				break;
			case "error":
				if (pa(e), i) i.call(r, n);
				else throw n;
				break;
			case "complete":
				pa(e), i && i.call(r);
				break;
		}
	} catch (e) {
		ua(e);
	}
	e._state === "closed" ? fa(e) : e._state === "running" && (e._state = "ready");
}
function ga(e, t, n) {
	if (e._state !== "closed") {
		if (e._state === "buffering") {
			e._queue.push({
				type: t,
				value: n
			});
			return;
		}
		if (e._state !== "ready") {
			e._state = "buffering", e._queue = [{
				type: t,
				value: n
			}], da(function() {
				return ma(e);
			});
			return;
		}
		ha(e, t, n);
	}
}
var _a = /* @__PURE__ */ function() {
	function e(e, t) {
		this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
		var n = new va(this);
		try {
			this._cleanup = t.call(void 0, n);
		} catch (e) {
			n.error(e);
		}
		this._state === "initializing" && (this._state = "ready");
	}
	var t = e.prototype;
	return t.unsubscribe = function() {
		this._state !== "closed" && (pa(this), fa(this));
	}, ea(e, [{
		key: "closed",
		get: function() {
			return this._state === "closed";
		}
	}]), e;
}(), va = /* @__PURE__ */ function() {
	function e(e) {
		this._subscription = e;
	}
	var t = e.prototype;
	return t.next = function(e) {
		ga(this._subscription, "next", e);
	}, t.error = function(e) {
		ga(this._subscription, "error", e);
	}, t.complete = function() {
		ga(this._subscription, "complete");
	}, ea(e, [{
		key: "closed",
		get: function() {
			return this._subscription._state === "closed";
		}
	}]), e;
}(), B = /* @__PURE__ */ function() {
	function e(t) {
		if (!(this instanceof e)) throw TypeError("Observable cannot be called as a function");
		if (typeof t != "function") throw TypeError("Observable initializer must be a function");
		this._subscriber = t;
	}
	var t = e.prototype;
	return t.subscribe = function(e) {
		return (typeof e != "object" || !e) && (e = {
			next: e,
			error: arguments[1],
			complete: arguments[2]
		}), new _a(e, this._subscriber);
	}, t.forEach = function(e) {
		var t = this;
		return new Promise(function(n, r) {
			if (typeof e != "function") {
				r(/* @__PURE__ */ TypeError(e + " is not a function"));
				return;
			}
			function i() {
				a.unsubscribe(), n();
			}
			var a = t.subscribe({
				next: function(t) {
					try {
						e(t, i);
					} catch (e) {
						r(e), a.unsubscribe();
					}
				},
				error: r,
				complete: n
			});
		});
	}, t.map = function(e) {
		var t = this;
		if (typeof e != "function") throw TypeError(e + " is not a function");
		return new (ca(this))(function(n) {
			return t.subscribe({
				next: function(t) {
					try {
						t = e(t);
					} catch (e) {
						return n.error(e);
					}
					n.next(t);
				},
				error: function(e) {
					n.error(e);
				},
				complete: function() {
					n.complete();
				}
			});
		});
	}, t.filter = function(e) {
		var t = this;
		if (typeof e != "function") throw TypeError(e + " is not a function");
		return new (ca(this))(function(n) {
			return t.subscribe({
				next: function(t) {
					try {
						if (!e(t)) return;
					} catch (e) {
						return n.error(e);
					}
					n.next(t);
				},
				error: function(e) {
					n.error(e);
				},
				complete: function() {
					n.complete();
				}
			});
		});
	}, t.reduce = function(e) {
		var t = this;
		if (typeof e != "function") throw TypeError(e + " is not a function");
		var n = ca(this), r = arguments.length > 1, i = !1, a = arguments[1];
		return new n(function(n) {
			return t.subscribe({
				next: function(t) {
					var o = !i;
					if (i = !0, !o || r) try {
						a = e(a, t);
					} catch (e) {
						return n.error(e);
					}
					else a = t;
				},
				error: function(e) {
					n.error(e);
				},
				complete: function() {
					if (!i && !r) return n.error(/* @__PURE__ */ TypeError("Cannot reduce an empty sequence"));
					n.next(a), n.complete();
				}
			});
		});
	}, t.concat = function() {
		var e = this, t = [...arguments], n = ca(this);
		return new n(function(r) {
			var i, a = 0;
			function o(e) {
				i = e.subscribe({
					next: function(e) {
						r.next(e);
					},
					error: function(e) {
						r.error(e);
					},
					complete: function() {
						a === t.length ? (i = void 0, r.complete()) : o(n.from(t[a++]));
					}
				});
			}
			return o(e), function() {
				i && (i.unsubscribe(), i = void 0);
			};
		});
	}, t.flatMap = function(e) {
		var t = this;
		if (typeof e != "function") throw TypeError(e + " is not a function");
		var n = ca(this);
		return new n(function(r) {
			var i = [], a = t.subscribe({
				next: function(t) {
					if (e) try {
						t = e(t);
					} catch (e) {
						return r.error(e);
					}
					var a = n.from(t).subscribe({
						next: function(e) {
							r.next(e);
						},
						error: function(e) {
							r.error(e);
						},
						complete: function() {
							var e = i.indexOf(a);
							e >= 0 && i.splice(e, 1), o();
						}
					});
					i.push(a);
				},
				error: function(e) {
					r.error(e);
				},
				complete: function() {
					o();
				}
			});
			function o() {
				a.closed && i.length === 0 && r.complete();
			}
			return function() {
				i.forEach(function(e) {
					return e.unsubscribe();
				}), a.unsubscribe();
			};
		});
	}, t[aa] = function() {
		return this;
	}, e.from = function(t) {
		var n = typeof this == "function" ? this : e;
		if (t == null) throw TypeError(t + " is not an object");
		var r = sa(t, aa);
		if (r) {
			var i = r.call(t);
			if (Object(i) !== i) throw TypeError(i + " is not an object");
			return la(i) && i.constructor === n ? i : new n(function(e) {
				return i.subscribe(e);
			});
		}
		if (na("iterator") && (r = sa(t, ia), r)) return new n(function(e) {
			da(function() {
				if (!e.closed) {
					for (var n = Xi(r.call(t)), i; !(i = n()).done;) {
						var a = i.value;
						if (e.next(a), e.closed) return;
					}
					e.complete();
				}
			});
		});
		if (Array.isArray(t)) return new n(function(e) {
			da(function() {
				if (!e.closed) {
					for (var n = 0; n < t.length; ++n) if (e.next(t[n]), e.closed) return;
					e.complete();
				}
			});
		});
		throw TypeError(t + " is not observable");
	}, e.of = function() {
		var t = [...arguments];
		return new (typeof this == "function" ? this : e)(function(e) {
			da(function() {
				if (!e.closed) {
					for (var n = 0; n < t.length; ++n) if (e.next(t[n]), e.closed) return;
					e.complete();
				}
			});
		});
	}, ea(e, null, [{
		key: oa,
		get: function() {
			return this;
		}
	}]), e;
}();
ta() && Object.defineProperty(B, Symbol("extensions"), {
	value: {
		symbol: aa,
		hostReportError: ua
	},
	configurable: !0
});
//#endregion
//#region node_modules/@apollo/client/utilities/promises/preventUnhandledRejection.js
function ya(e) {
	return e.catch(function() {}), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/cloneDeep.js
var ba = Object.prototype.toString;
function xa(e) {
	return Sa(e);
}
function Sa(e, t) {
	switch (ba.call(e)) {
		case "[object Array]":
			if (t = t || /* @__PURE__ */ new Map(), t.has(e)) return t.get(e);
			var n = e.slice(0);
			return t.set(e, n), n.forEach(function(e, r) {
				n[r] = Sa(e, t);
			}), n;
		case "[object Object]":
			if (t = t || /* @__PURE__ */ new Map(), t.has(e)) return t.get(e);
			var r = Object.create(Object.getPrototypeOf(e));
			return t.set(e, r), Object.keys(e).forEach(function(n) {
				r[n] = Sa(e[n], t);
			}), r;
		default: return e;
	}
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
function Ca(e) {
	var t = new Set([e]);
	return t.forEach(function(e) {
		R(e) && wa(e) === e && Object.getOwnPropertyNames(e).forEach(function(n) {
			R(e[n]) && t.add(e[n]);
		});
	}), e;
}
function wa(e) {
	if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e)) try {
		Object.freeze(e);
	} catch (e) {
		if (e instanceof TypeError) return null;
		throw e;
	}
	return e;
}
function Ta(e) {
	return globalThis.__DEV__ !== !1 && Ca(e), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/observables/iteration.js
function Ea(e, t, n) {
	var r = [];
	e.forEach(function(e) {
		return e[t] && r.push(e);
	}), r.forEach(function(e) {
		return e[t](n);
	});
}
//#endregion
//#region node_modules/@apollo/client/utilities/observables/asyncMap.js
function Da(e, t, n) {
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
//#region node_modules/@apollo/client/utilities/observables/subclassing.js
function Oa(e) {
	function t(t) {
		Object.defineProperty(e, t, { value: B });
	}
	return Tn && Symbol.species && t(Symbol.species), t("@@species"), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/observables/Concast.js
function ka(e) {
	return e && typeof e.then == "function";
}
var Aa = function(e) {
	ce(t, e);
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
				n.sub !== null && (n.latest = ["next", e], n.notify("next", e), Ea(n.observers, "next", e));
			},
			error: function(e) {
				var t = n.sub;
				t !== null && (t && setTimeout(function() {
					return t.unsubscribe();
				}), n.sub = null, n.latest = ["error", e], n.reject(e), n.notify("error", e), Ea(n.observers, "error", e));
			},
			complete: function() {
				var e = n, t = e.sub, r = e.sources, i = r === void 0 ? [] : r;
				if (t !== null) {
					var a = i.shift();
					a ? ka(a) ? a.then(function(e) {
						return n.sub = e.subscribe(n.handlers);
					}, n.handlers.error) : n.sub = a.subscribe(n.handlers) : (t && setTimeout(function() {
						return t.unsubscribe();
					}), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Ea(n.observers, "complete"));
				}
			}
		}, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(e) {
			n.reject(e), n.sources = [], n.handlers.error(e);
		}, n.promise.catch(function(e) {}), typeof t == "function" && (t = [new B(t)]), ka(t) ? t.then(function(e) {
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
Oa(Aa);
//#endregion
//#region node_modules/@apollo/client/utilities/common/incrementalResult.js
function ja(e) {
	return "incremental" in e;
}
function Ma(e) {
	return "hasNext" in e && "data" in e;
}
function Na(e) {
	return ja(e) || Ma(e);
}
function Pa(e) {
	return R(e) && "payload" in e;
}
function Fa(e, t) {
	var n = e, r = new Yi();
	return ja(t) && Pi(t.incremental) && t.incremental.forEach(function(e) {
		for (var t = e.data, i = e.path, a = i.length - 1; a >= 0; --a) {
			var o = i[a], s = isNaN(+o) ? {} : [];
			s[o] = t, t = s;
		}
		n = r.merge(n, t);
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/errorHandling.js
function Ia(e) {
	return Pi(La(e));
}
function La(e) {
	var t = Pi(e.errors) ? e.errors.slice(0) : [];
	return ja(e) && Pi(e.incremental) && e.incremental.forEach(function(e) {
		e.errors && t.push.apply(t, e.errors);
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/compact.js
function Ra() {
	var e = [...arguments], t = Object.create(null);
	return e.forEach(function(e) {
		e && Object.keys(e).forEach(function(n) {
			var r = e[n];
			r !== void 0 && (t[n] = r);
		});
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/mergeOptions.js
function za(e, t) {
	return Ra(e, t, t.variables && { variables: Ra(A(A({}, e && e.variables), t.variables)) });
}
//#endregion
//#region node_modules/@apollo/client/utilities/deprecation/index.js
var Ba = Symbol.for("apollo.deprecations"), Va = Symbol.for("apollo.deprecations.slot"), Ha = Se, Ua = Ha[Va] ?? (Ha[Va] = new Yr());
function Wa(e) {
	return Ha[Ba] || (Ua.getValue() || []).includes(e);
}
function Ga(e) {
	var t = [...arguments].slice(1);
	return Ua.withValue.apply(Ua, j([Array.isArray(e) ? e : [e]], t, !1));
}
function V(e, t, n, r) {
	r === void 0 && (r = "Please remove this option."), Ka(t, function() {
		t in e && globalThis.__DEV__ !== !1 && M.warn(103, n, t, r);
	});
}
function Ka(e, t) {
	Wa(e) || t();
}
//#endregion
//#region node_modules/@apollo/client/react/context/ApolloContext.js
var H = /* @__PURE__ */ d(Me(), 1), qa = Tn ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function Ja() {
	M("createContext" in H, 69);
	var e = H.createContext[qa];
	return e || (Object.defineProperty(H.createContext, qa, {
		value: e = H.createContext({}),
		enumerable: !1,
		writable: !1,
		configurable: !0
	}), e.displayName = "ApolloContext"), e;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useApolloClient.js
function Ya(e) {
	var t = H.useContext(Ja()), n = e || t.client;
	return M(!!n, 78), n;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useSyncExternalStore.js
var Xa = !1, Za = H.useSyncExternalStore || (function(e, t, n) {
	var r = t();
	globalThis.__DEV__ !== !1 && !Xa && r !== t() && (Xa = !0, globalThis.__DEV__ !== !1 && M.error(91));
	var i = H.useState({ inst: {
		value: r,
		getSnapshot: t
	} }), a = i[0].inst, o = i[1];
	return kn ? H.useLayoutEffect(function() {
		Object.assign(a, {
			value: r,
			getSnapshot: t
		}), Qa(a) && o({ inst: a });
	}, [
		e,
		r,
		t
	]) : Object.assign(a, {
		value: r,
		getSnapshot: t
	}), H.useEffect(function() {
		return Qa(a) && o({ inst: a }), e(function() {
			Qa(a) && o({ inst: a });
		});
	}, [e]), r;
});
function Qa(e) {
	var t = e.value, n = e.getSnapshot;
	try {
		return t !== n();
	} catch {
		return !0;
	}
}
//#endregion
//#region node_modules/@wry/equality/lib/index.js
var { toString: $a, hasOwnProperty: eo } = Object.prototype, to = Function.prototype.toString, no = /* @__PURE__ */ new Map();
function U(e, t) {
	try {
		return ro(e, t);
	} finally {
		no.clear();
	}
}
function ro(e, t) {
	if (e === t) return !0;
	let n = $a.call(e);
	if (n !== $a.call(t)) return !1;
	switch (n) {
		case "[object Array]": if (e.length !== t.length) return !1;
		case "[object Object]": {
			if (co(e, t)) return !0;
			let n = io(e), r = io(t), i = n.length;
			if (i !== r.length) return !1;
			for (let e = 0; e < i; ++e) if (!eo.call(t, n[e])) return !1;
			for (let r = 0; r < i; ++r) {
				let i = n[r];
				if (!ro(e[i], t[i])) return !1;
			}
			return !0;
		}
		case "[object Error]": return e.name === t.name && e.message === t.message;
		case "[object Number]": if (e !== e) return t !== t;
		case "[object Boolean]":
		case "[object Date]": return +e == +t;
		case "[object RegExp]":
		case "[object String]": return e == `${t}`;
		case "[object Map]":
		case "[object Set]": {
			if (e.size !== t.size) return !1;
			if (co(e, t)) return !0;
			let r = e.entries(), i = n === "[object Map]";
			for (;;) {
				let e = r.next();
				if (e.done) break;
				let [n, a] = e.value;
				if (!t.has(n) || i && !ro(a, t.get(n))) return !1;
			}
			return !0;
		}
		case "[object Uint16Array]":
		case "[object Uint8Array]":
		case "[object Uint32Array]":
		case "[object Int32Array]":
		case "[object Int8Array]":
		case "[object Int16Array]":
		case "[object ArrayBuffer]": e = new Uint8Array(e), t = new Uint8Array(t);
		case "[object DataView]": {
			let n = e.byteLength;
			if (n === t.byteLength) for (; n-- && e[n] === t[n];);
			return n === -1;
		}
		case "[object AsyncFunction]":
		case "[object GeneratorFunction]":
		case "[object AsyncGeneratorFunction]":
		case "[object Function]": {
			let n = to.call(e);
			return n === to.call(t) ? !so(n, oo) : !1;
		}
	}
	return !1;
}
function io(e) {
	return Object.keys(e).filter(ao, e);
}
function ao(e) {
	return this[e] !== void 0;
}
var oo = "{ [native code] }";
function so(e, t) {
	let n = e.length - t.length;
	return n >= 0 && e.indexOf(t, n) === n;
}
function co(e, t) {
	let n = no.get(e);
	if (n) {
		if (n.has(t)) return !0;
	} else no.set(e, n = /* @__PURE__ */ new Set());
	return n.add(t), !1;
}
//#endregion
//#region node_modules/@apollo/client/errors/index.js
var lo = Symbol();
function uo(e) {
	return e.extensions ? Array.isArray(e.extensions[lo]) : !1;
}
function fo(e) {
	return e.hasOwnProperty("graphQLErrors");
}
var po = function(e) {
	var t = j(j(j([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
	return e.networkError && t.push(e.networkError), t.map(function(e) {
		return R(e) && e.message || "Error message not found.";
	}).join("\n");
}, mo = function(e) {
	ce(t, e);
	function t(n) {
		var r = n.graphQLErrors, i = n.protocolErrors, a = n.clientErrors, o = n.networkError, s = n.errorMessage, c = n.extraInfo, l = e.call(this, s) || this;
		return l.name = "ApolloError", l.graphQLErrors = r || [], l.protocolErrors = i || [], l.clientErrors = a || [], l.networkError = o || null, l.message = s || po(l), l.extraInfo = c, l.cause = j(j(j([o], r || [], !0), i || [], !0), a || [], !0).find(function(e) {
			return !!e;
		}) || null, l.__proto__ = t.prototype, l;
	}
	return t;
}(Error);
//#endregion
//#region node_modules/@apollo/client/link/utils/fromError.js
function ho(e) {
	return new B(function(t) {
		t.error(e);
	});
}
//#endregion
//#region node_modules/@apollo/client/link/utils/throwServerError.js
var go = function(e, t, n) {
	var r = Error(n);
	throw r.name = "ServerError", r.response = e, r.statusCode = e.status, r.result = t, r;
};
//#endregion
//#region node_modules/@apollo/client/link/utils/validateOperation.js
function _o(e) {
	for (var t = [
		"query",
		"operationName",
		"variables",
		"extensions",
		"context"
	], n = 0, r = Object.keys(e); n < r.length; n++) {
		var i = r[n];
		if (t.indexOf(i) < 0) throw De(58, i);
	}
	return e;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/createOperation.js
function vo(e, t) {
	var n = A({}, e);
	return Object.defineProperty(t, "setContext", {
		enumerable: !1,
		value: function(e) {
			n = typeof e == "function" ? A(A({}, n), e(n)) : A(A({}, n), e);
		}
	}), Object.defineProperty(t, "getContext", {
		enumerable: !1,
		value: function() {
			return A({}, n);
		}
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/transformOperation.js
function yo(e) {
	var t = {
		variables: e.variables || {},
		extensions: e.extensions || {},
		operationName: e.operationName,
		query: e.query
	};
	return t.operationName || (t.operationName = typeof t.query == "string" ? "" : Ir(t.query) || void 0), t;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/filterOperationVariables.js
function bo(e, t) {
	var n = A({}, e), r = new Set(Object.keys(e));
	return en(t, { Variable: function(e, t, n) {
		n && n.kind !== "VariableDefinition" && r.delete(e.name.value);
	} }), r.forEach(function(e) {
		delete n[e];
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/link/core/ApolloLink.js
function xo(e, t) {
	return t ? t(e) : B.of();
}
function So(e) {
	return typeof e == "function" ? new wo(e) : e;
}
function Co(e) {
	return e.request.length <= 1;
}
var wo = function() {
	function e(e) {
		e && (this.request = e);
	}
	return e.empty = function() {
		return new e(function() {
			return B.of();
		});
	}, e.from = function(t) {
		return t.length === 0 ? e.empty() : t.map(So).reduce(function(e, t) {
			return e.concat(t);
		});
	}, e.split = function(t, n, r) {
		var i = So(n), a = So(r || new e(xo)), o = Co(i) && Co(a) ? new e(function(e) {
			return t(e) ? i.request(e) || B.of() : a.request(e) || B.of();
		}) : new e(function(e, n) {
			return t(e) ? i.request(e, n) || B.of() : a.request(e, n) || B.of();
		});
		return Object.assign(o, {
			left: i,
			right: a
		});
	}, e.execute = function(e, t) {
		return e.request(vo(t.context, yo(_o(t)))) || B.of();
	}, e.concat = function(t, n) {
		var r = So(t);
		if (Co(r)) return globalThis.__DEV__ !== !1 && M.warn(47, r), r;
		var i = So(n), a = Co(i) ? new e(function(e) {
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
		return this.concat(e.split(t, n, r || new e(xo)));
	}, e.prototype.concat = function(t) {
		return e.concat(this, t);
	}, e.prototype.request = function(e, t) {
		throw De(48);
	}, e.prototype.onError = function(e, t) {
		if (globalThis.__DEV__ !== !1 && Ka("onError", function() {
			globalThis.__DEV__ !== !1 && M.warn(49);
		}), t && t.error) return t.error(e), !1;
		throw e;
	}, e.prototype.setOnError = function(e) {
		return globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && M.warn(50), this.onError = e, this;
	}, e;
}(), To = wo.from, Eo = wo.execute;
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/async.js
function Do(e) {
	var t, n = e[Symbol.asyncIterator]();
	return t = { next: function() {
		return n.next();
	} }, t[Symbol.asyncIterator] = function() {
		return this;
	}, t;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/nodeStream.js
function Oo(e) {
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
	return En && (u[Symbol.asyncIterator] = function() {
		return this;
	}), u;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/promise.js
function ko(e) {
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
	return En && (n[Symbol.asyncIterator] = function() {
		return this;
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/reader.js
function Ao(e) {
	var t = { next: function() {
		return e.read();
	} };
	return En && (t[Symbol.asyncIterator] = function() {
		return this;
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/link/http/responseIterator.js
function jo(e) {
	return !!e.body;
}
function Mo(e) {
	return !!e.getReader;
}
function No(e) {
	return !!(En && e[Symbol.asyncIterator]);
}
function Po(e) {
	return !!e.stream;
}
function Fo(e) {
	return !!e.arrayBuffer;
}
function Io(e) {
	return !!e.pipe;
}
function Lo(e) {
	var t = e;
	if (jo(e) && (t = e.body), No(t)) return Do(t);
	if (Mo(t)) return Ao(t.getReader());
	if (Po(t)) return Ao(t.stream().getReader());
	if (Fo(t)) return ko(t.arrayBuffer());
	if (Io(t)) return Oo(t);
	throw Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
//#endregion
//#region node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js
var Ro = Object.prototype.hasOwnProperty;
function zo(e, t) {
	return ue(this, void 0, void 0, function() {
		var n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
		return de(this, function(T) {
			switch (T.label) {
				case 0:
					if (TextDecoder === void 0) throw Error("TextDecoder must be defined in the environment: please import a polyfill.");
					n = new TextDecoder("utf-8"), r = e.headers?.get("content-type"), i = "boundary=", a = r?.includes(i) ? r?.substring(r?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--${a}`, s = "", c = Lo(e), l = !0, T.label = 1;
				case 1: return l ? [4, c.next()] : [3, 3];
				case 2:
					for (u = T.sent(), d = u.value, f = u.done, p = typeof d == "string" ? d : n.decode(d), m = s.length - o.length + 1, l = !f, s += p, h = s.indexOf(o, m); h > -1;) {
						if (g = void 0, C = [s.slice(0, h), s.slice(h + o.length)], g = C[0], s = C[1], _ = g.indexOf("\r\n\r\n"), v = Bo(g.slice(0, _)), y = v["content-type"], y && y.toLowerCase().indexOf("application/json") === -1) throw Error("Unsupported patch content type: application/json is required.");
						if (b = g.slice(_), b) {
							if (x = Vo(e, b), Object.keys(x).length > 1 || "data" in x || "incremental" in x || "errors" in x || "payload" in x) if (Pa(x)) {
								if (S = {}, "payload" in x) {
									if (Object.keys(x).length === 1 && x.payload === null) return [2];
									S = A({}, x.payload);
								}
								"errors" in x && (S = A(A({}, S), { extensions: A(A({}, "extensions" in S ? S.extensions : null), (w = {}, w[lo] = x.errors, w)) })), t(S);
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
function Bo(e) {
	var t = {};
	return e.split("\n").forEach(function(e) {
		var n = e.indexOf(":");
		if (n > -1) {
			var r = e.slice(0, n).trim().toLowerCase();
			t[r] = e.slice(n + 1).trim();
		}
	}), t;
}
function Vo(e, t) {
	e.status >= 300 && go(e, function() {
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
function Ho(e, t) {
	e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e);
}
function Uo(e) {
	return function(t) {
		return t.text().then(function(e) {
			return Vo(t, e);
		}).then(function(n) {
			return !Array.isArray(n) && !Ro.call(n, "data") && !Ro.call(n, "errors") && go(t, n, `Server response was missing for query '${Array.isArray(e) ? e.map(function(e) {
				return e.operationName;
			}) : e.operationName}'.`), n;
		});
	};
}
//#endregion
//#region node_modules/@apollo/client/link/http/serializeFetchParameter.js
var Wo = function(e, t) {
	var n;
	try {
		n = JSON.stringify(e);
	} catch (e) {
		var r = De(54, t, e.message);
		throw r.parseError = e, r;
	}
	return n;
}, Go = {
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
}, Ko = function(e, t) {
	return t(e);
};
function qo(e, t) {
	var n = [...arguments].slice(2), r = {}, i = {};
	n.forEach(function(e) {
		r = A(A(A({}, r), e.options), { headers: A(A({}, r.headers), e.headers) }), e.credentials && (r.credentials = e.credentials), i = A(A({}, i), e.http);
	}), r.headers && (r.headers = Jo(r.headers, i.preserveHeaderCase));
	var a = e.operationName, o = e.extensions, s = e.variables, c = e.query, l = {
		operationName: a,
		variables: s
	};
	return i.includeExtensions && (l.extensions = o), i.includeQuery && (l.query = t(c, Mi)), {
		options: r,
		body: l
	};
}
function Jo(e, t) {
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
var Yo = function(e) {
	if (!e && typeof fetch > "u") throw De(51);
}, Xo = function(e, t) {
	return e.getContext().uri || (typeof t == "function" ? t(e) : t || "/graphql");
};
//#endregion
//#region node_modules/@apollo/client/link/http/rewriteURIForGET.js
function Zo(e, t) {
	var n = [], r = function(e, t) {
		n.push(`${e}=${encodeURIComponent(t)}`);
	};
	if ("query" in t && r("query", t.query), t.operationName && r("operationName", t.operationName), t.variables) {
		var i = void 0;
		try {
			i = Wo(t.variables, "Variables map");
		} catch (e) {
			return { parseError: e };
		}
		r("variables", i);
	}
	if (t.extensions) {
		var a = void 0;
		try {
			a = Wo(t.extensions, "Extensions map");
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
var Qo = xe(function() {
	return fetch;
}), $o = function(e) {
	e === void 0 && (e = {});
	var t = e.uri, n = t === void 0 ? "/graphql" : t, r = e.fetch, i = e.print, a = i === void 0 ? Ko : i, o = e.includeExtensions, s = e.preserveHeaderCase, c = e.useGETForQueries, l = e.includeUnusedVariables, u = l === void 0 ? !1 : l, d = le(e, [
		"uri",
		"fetch",
		"print",
		"includeExtensions",
		"preserveHeaderCase",
		"useGETForQueries",
		"includeUnusedVariables"
	]);
	globalThis.__DEV__ !== !1 && Yo(r || Qo);
	var f = {
		http: {
			includeExtensions: o,
			preserveHeaderCase: s
		},
		options: d.fetchOptions,
		credentials: d.credentials,
		headers: d.headers
	};
	return new wo(function(e) {
		var t = Xo(e, n), i = e.getContext(), o = {};
		if (i.clientAwareness) {
			var s = i.clientAwareness, l = s.name, d = s.version;
			l && (o["apollographql-client-name"] = l), d && (o["apollographql-client-version"] = d);
		}
		var p = A(A({}, o), i.headers), m = {
			http: i.http,
			options: i.fetchOptions,
			credentials: i.credentials,
			headers: p
		};
		if (dn(["client"], e.query)) {
			globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && M.warn(52);
			var h = Ui(e.query);
			if (!h) return ho(/* @__PURE__ */ Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
			e.query = h;
		}
		var g = qo(e, a, Go, f, m), _ = g.options, v = g.body;
		v.variables && !u && (v.variables = bo(v.variables, e.query));
		var y;
		!_.signal && typeof AbortController < "u" && (y = new AbortController(), _.signal = y.signal);
		var b = function(e) {
			return e.kind === "OperationDefinition" && e.operation === "mutation";
		}, x = function(e) {
			return e.kind === "OperationDefinition" && e.operation === "subscription";
		}(Br(e.query)), S = dn(["defer"], e.query);
		if (c && !e.query.definitions.some(b) && (_.method = "GET"), S || x) {
			_.headers = _.headers || {};
			var C = "multipart/mixed;";
			x && S && globalThis.__DEV__ !== !1 && M.warn(53), x ? C += "boundary=graphql;subscriptionSpec=1.0,application/json" : S && (C += "deferSpec=20220824,application/json"), _.headers.accept = C;
		}
		if (_.method === "GET") {
			var w = Zo(t, v), T = w.newURI, E = w.parseError;
			if (E) return ho(E);
			t = T;
		} else try {
			_.body = Wo(v, "Payload");
		} catch (e) {
			return ho(e);
		}
		return new B(function(n) {
			var i = r || xe(function() {
				return fetch;
			}) || Qo, a = n.next.bind(n);
			return i(t, _).then(function(t) {
				e.setContext({ response: t });
				var n = t.headers?.get("content-type");
				return n !== null && /^multipart\/mixed/i.test(n) ? zo(t, a) : Uo(e)(t).then(a);
			}).then(function() {
				y = void 0, n.complete();
			}).catch(function(e) {
				y = void 0, Ho(e, n);
			}), function() {
				y && y.abort();
			};
		});
	});
}, es = function(e) {
	ce(t, e);
	function t(t) {
		t === void 0 && (t = {});
		var n = e.call(this, $o(t).request) || this;
		return n.options = t, n;
	}
	return t;
}(wo);
//#endregion
//#region node_modules/@apollo/client/core/equalByQuery.js
function ts(e, t, n, r) {
	var i = t.data, a = le(t, ["data"]), o = n.data;
	return U(a, le(n, ["data"])) && ns(Br(e).selectionSet, i, o, {
		fragmentMap: jn(Lr(e)),
		variables: r
	});
}
function ns(e, t, n, r) {
	if (t === n) return !0;
	var i = /* @__PURE__ */ new Set();
	return e.selections.every(function(e) {
		if (i.has(e) || (i.add(e), !un(e, r.variables)) || rs(e)) return !0;
		if (Mr(e)) {
			var a = Ar(e), o = t && t[a], s = n && n[a], c = e.selectionSet;
			if (!c) return U(o, s);
			var l = Array.isArray(o), u = Array.isArray(s);
			if (l !== u) return !1;
			if (l && u) {
				var d = o.length;
				if (s.length !== d) return !1;
				for (var f = 0; f < d; ++f) if (!ns(c, o[f], s[f], r)) return !1;
				return !0;
			}
			return ns(c, o, s, r);
		} else {
			var p = Mn(e, r.fragmentMap);
			if (p) return rs(p) ? !0 : ns(p.selectionSet, t, n, r);
		}
	});
}
function rs(e) {
	return !!e.directives && e.directives.some(is);
}
function is(e) {
	return e.name.value === "nonreactive";
}
//#endregion
//#region node_modules/@apollo/client/masking/utils.js
var as = Cn ? WeakMap : Map, os = wn ? WeakSet : Set, ss = new Yr(), cs = !1;
function ls() {
	cs || (cs = !0, globalThis.__DEV__ !== !1 && M.warn(64));
}
//#endregion
//#region node_modules/@apollo/client/masking/maskDefinition.js
function us(e, t, n) {
	return ss.withValue(!0, function() {
		var r = fs(e, t, n, !1);
		return Object.isFrozen(e) && Ta(r), r;
	});
}
function ds(e, t) {
	if (t.has(e)) return t.get(e);
	var n = Array.isArray(e) ? [] : Object.create(null);
	return t.set(e, n), n;
}
function fs(e, t, n, r, i) {
	var a = n.knownChanged, o = ds(e, n.mutableTargets);
	if (Array.isArray(e)) {
		for (var s = 0, c = Array.from(e.entries()); s < c.length; s++) {
			var l = c[s], u = l[0], d = l[1];
			if (d === null) {
				o[u] = null;
				continue;
			}
			var f = fs(d, t, n, r, globalThis.__DEV__ === !1 ? void 0 : `${i || ""}[${u}]`);
			a.has(f) && a.add(o), o[u] = f;
		}
		return a.has(o) ? o : e;
	}
	for (var p = 0, m = t.selections; p < m.length; p++) {
		var h = m[p], g = void 0;
		if (r && a.add(o), h.kind === N.FIELD) {
			var _ = Ar(h), v = h.selectionSet;
			if (g = o[_] || e[_], g === void 0) continue;
			if (v && g !== null) {
				var f = fs(e[_], v, n, r, globalThis.__DEV__ === !1 ? void 0 : `${i || ""}.${_}`);
				a.has(f) && (g = f);
			}
			globalThis.__DEV__ === !1 && (o[_] = g), globalThis.__DEV__ !== !1 && (r && _ !== "__typename" && !Object.getOwnPropertyDescriptor(o, _)?.value ? Object.defineProperty(o, _, ps(_, g, i || "", n.operationName, n.operationType)) : (delete o[_], o[_] = g));
		}
		if (h.kind === N.INLINE_FRAGMENT && (!h.typeCondition || n.cache.fragmentMatches(h, e.__typename)) && (g = fs(e, h.selectionSet, n, r, i)), h.kind === N.FRAGMENT_SPREAD) {
			var y = h.name.value, b = n.fragmentMap[y] || (n.fragmentMap[y] = n.cache.lookupFragment(y));
			M(b, 59, y);
			var x = hn(h);
			x !== "mask" && (g = fs(e, b.selectionSet, n, x === "migrate", i));
		}
		a.has(g) && a.add(o);
	}
	return "__typename" in e && !("__typename" in o) && (o.__typename = e.__typename), Object.keys(o).length !== Object.keys(e).length && a.add(o), a.has(o) ? o : e;
}
function ps(e, t, n, r, i) {
	var a = function() {
		return ss.getValue() ? t : (globalThis.__DEV__ !== !1 && M.warn(60, r ? `${i} '${r}'` : `anonymous ${i}`, `${n}.${e}`.replace(/^\./, "")), a = function() {
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
function ms(e, t, n, r) {
	if (!n.fragmentMatches) return globalThis.__DEV__ !== !1 && ls(), e;
	var i = t.definitions.filter(function(e) {
		return e.kind === N.FRAGMENT_DEFINITION;
	});
	r === void 0 && (M(i.length === 1, 61, i.length), r = i[0].name.value);
	var a = i.find(function(e) {
		return e.name.value === r;
	});
	return M(!!a, 62, r), e == null || U(e, {}) ? e : us(e, a.selectionSet, {
		operationType: "fragment",
		operationName: a.name.value,
		fragmentMap: jn(Lr(t)),
		cache: n,
		mutableTargets: new as(),
		knownChanged: new os()
	});
}
//#endregion
//#region node_modules/@apollo/client/masking/maskOperation.js
function hs(e, t, n) {
	if (!n.fragmentMatches) return globalThis.__DEV__ !== !1 && ls(), e;
	var r = Fr(t);
	return M(r, 63), e == null ? e : us(e, r.selectionSet, {
		operationType: r.operation,
		operationName: r.name?.value,
		fragmentMap: jn(Lr(t)),
		cache: n,
		mutableTargets: new as(),
		knownChanged: new os()
	});
}
//#endregion
//#region node_modules/@apollo/client/cache/core/cache.js
var gs = function() {
	function e() {
		this.assumeImmutableResults = !1, this.getFragmentDoc = Oi(An, {
			max: qn["cache.fragmentQueryDocuments"] || 1e3,
			cache: Hn
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
		return t === void 0 && (t = !!e.optimistic), globalThis.__DEV__ !== !1 && V(e, "canonizeResults", "cache.readQuery"), Ga("canonizeResults", function() {
			return n.read(A(A({}, e), {
				rootId: e.id || "ROOT_QUERY",
				optimistic: t
			}));
		});
	}, e.prototype.watchFragment = function(e) {
		var t = this, n = e.fragment, r = e.fragmentName, i = e.from, a = e.optimistic, o = a === void 0 ? !0 : a, s = le(e, [
			"fragment",
			"fragmentName",
			"from",
			"optimistic"
		]), c = this.getFragmentDoc(n, r), l = i === void 0 || typeof i == "string" ? i : this.identify(i), u = !!e[Symbol.for("apollo.dataMasking")];
		if (globalThis.__DEV__ !== !1) {
			var d = r || zr(n).name.value;
			l || globalThis.__DEV__ !== !1 && M.warn(1, d);
		}
		var f = A(A({}, s), {
			returnPartialData: !0,
			id: l,
			query: c,
			optimistic: o
		}), p;
		return new B(function(i) {
			return t.watch(A(A({}, f), {
				immediate: !0,
				callback: function(a) {
					var o = u ? ms(a.result, n, t, r) : a.result;
					if (!(p && ts(c, { data: p.result }, { data: o }, e.variables))) {
						var s = {
							data: o,
							complete: !!a.complete
						};
						a.missing && (s.missing = qi(a.missing.map(function(e) {
							return e.missing;
						}))), p = A(A({}, a), { result: o }), i.next(s);
					}
				}
			}));
		});
	}, e.prototype.readFragment = function(e, t) {
		var n = this;
		return t === void 0 && (t = !!e.optimistic), globalThis.__DEV__ !== !1 && V(e, "canonizeResults", "cache.readFragment"), Ga("canonizeResults", function() {
			return n.read(A(A({}, e), {
				query: n.getFragmentDoc(e.fragment, e.fragmentName),
				rootId: e.id,
				optimistic: t
			}));
		});
	}, e.prototype.writeQuery = function(e) {
		var t = e.id, n = e.data, r = le(e, ["id", "data"]);
		return this.write(Object.assign(r, {
			dataId: t || "ROOT_QUERY",
			result: n
		}));
	}, e.prototype.writeFragment = function(e) {
		var t = e.id, n = e.data, r = e.fragment, i = e.fragmentName, a = le(e, [
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
		return globalThis.__DEV__ !== !1 && V(e, "canonizeResults", "cache.updateQuery"), this.batch({ update: function(n) {
			var r = Ga("canonizeResults", function() {
				return n.readQuery(e);
			}), i = t(r);
			return i == null ? r : (n.writeQuery(A(A({}, e), { data: i })), i);
		} });
	}, e.prototype.updateFragment = function(e, t) {
		return globalThis.__DEV__ !== !1 && V(e, "canonizeResults", "cache.updateFragment"), this.batch({ update: function(n) {
			var r = Ga("canonizeResults", function() {
				return n.readFragment(e);
			}), i = t(r);
			return i == null ? r : (n.writeFragment(A(A({}, e), { data: i })), i);
		} });
	}, e;
}();
globalThis.__DEV__ !== !1 && (gs.prototype.getMemoryInternals = Qn);
//#endregion
//#region node_modules/@apollo/client/cache/core/types/common.js
var _s = function(e) {
	ce(t, e);
	function t(n, r, i, a) {
		var o, s = e.call(this, n) || this;
		if (s.message = n, s.path = r, s.query = i, s.variables = a, Array.isArray(s.path)) {
			s.missing = s.message;
			for (var c = s.path.length - 1; c >= 0; --c) s.missing = (o = {}, o[s.path[c]] = s.missing, o);
		} else s.missing = s.path;
		return s.__proto__ = t.prototype, s;
	}
	return t;
}(Error), vs = Object.prototype.hasOwnProperty;
function ys(e) {
	return e == null;
}
function bs(e, t) {
	var n = e.__typename, r = e.id, i = e._id;
	if (typeof n == "string" && (t && (t.keyObject = ys(r) ? ys(i) ? void 0 : { _id: i } : { id: r }), ys(r) && !ys(i) && (r = i), !ys(r))) return `${n}:${typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r)}`;
}
var xs = {
	dataIdFromObject: bs,
	addTypename: !0,
	resultCaching: !0,
	canonizeResults: !1
};
function Ss(e) {
	return Ra(xs, e);
}
function Cs(e) {
	var t = e.canonizeResults;
	return t === void 0 ? xs.canonizeResults : t;
}
function ws(e, t) {
	return z(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var Ts = /^[_a-z][_0-9a-z]*/i;
function Es(e) {
	var t = e.match(Ts);
	return t ? t[0] : e;
}
function Ds(e, t, n) {
	return R(t) ? Ni(t) ? t.every(function(t) {
		return Ds(e, t, n);
	}) : e.selections.every(function(e) {
		if (Mr(e) && un(e, n)) {
			var r = Ar(e);
			return vs.call(t, r) && (!e.selectionSet || Ds(e.selectionSet, t[r], n));
		}
		return !0;
	}) : !1;
}
function Os(e) {
	return R(e) && !z(e) && !Ni(e);
}
function ks() {
	return new Yi();
}
function As(e, t) {
	var n = jn(Lr(e));
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
var js = Object.create(null), Ms = function() {
	return js;
}, Ns = Object.create(null), Ps = function() {
	function e(e, t) {
		var n = this;
		this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
			return Ta(z(e) ? n.get(e.__ref, t) : e && e[t]);
		}, this.canRead = function(e) {
			return z(e) ? n.has(e.__ref) : typeof e == "object";
		}, this.toReference = function(e, t) {
			if (typeof e == "string") return pr(e);
			if (z(e)) return e;
			var r = n.policies.identify(e)[0];
			if (r) {
				var i = pr(r);
				return t && n.merge(r, e), i;
			}
		};
	}
	return e.prototype.toObject = function() {
		return A({}, this.data);
	}, e.prototype.has = function(e) {
		return this.lookup(e, !0) !== void 0;
	}, e.prototype.get = function(e, t) {
		if (this.group.depend(e, t), vs.call(this.data, e)) {
			var n = this.data[e];
			if (n && vs.call(n, t)) return n[t];
		}
		if (t === "__typename" && vs.call(this.policies.rootTypenamesById, e)) return this.policies.rootTypenamesById[e];
		if (this instanceof Rs) return this.parent.get(e, t);
	}, e.prototype.lookup = function(e, t) {
		if (t && this.group.depend(e, "__exists"), vs.call(this.data, e)) return this.data[e];
		if (this instanceof Rs) return this.parent.lookup(e, t);
		if (this.policies.rootTypenamesById[e]) return Object.create(null);
	}, e.prototype.merge = function(e, t) {
		var n = this, r;
		z(e) && (e = e.__ref), z(t) && (t = t.__ref);
		var i = typeof e == "string" ? this.lookup(r = e) : e, a = typeof t == "string" ? this.lookup(r = t) : t;
		if (a) {
			M(typeof r == "string", 2);
			var o = new Yi(Bs).merge(i, a);
			if (this.data[r] = o, o !== i && (delete this.refs[r], this.group.caching)) {
				var s = Object.create(null);
				i || (s.__exists = 1), Object.keys(a).forEach(function(e) {
					if (!i || i[e] !== o[e]) {
						s[e] = 1;
						var t = Es(e);
						t !== e && !n.policies.hasKeyArgs(o.__typename, t) && (s[t] = 1), o[e] === void 0 && !(n instanceof Rs) && delete o[e];
					}
				}), s.__typename && !(i && i.__typename) && this.policies.rootTypenamesById[r] === o.__typename && delete s.__typename, Object.keys(s).forEach(function(e) {
					return n.group.dirty(r, e);
				});
			}
		}
	}, e.prototype.modify = function(e, t) {
		var n = this, r = this.lookup(e);
		if (r) {
			var i = Object.create(null), a = !1, o = !0, s = {
				DELETE: js,
				INVALIDATE: Ns,
				isReference: z,
				toReference: this.toReference,
				canRead: this.canRead,
				readField: function(t, r) {
					return n.policies.readField(typeof t == "string" ? {
						fieldName: t,
						from: r || pr(e)
					} : t, { store: n });
				}
			};
			if (Object.keys(r).forEach(function(c) {
				var l = Es(c), u = r[c];
				if (u !== void 0) {
					var d = typeof t == "function" ? t : t[c] || t[l];
					if (d) {
						var f = d === Ms ? js : d(Ta(u), A(A({}, s), {
							fieldName: l,
							storeFieldName: c,
							storage: n.getStorage(e, c)
						}));
						if (f === Ns) n.group.dirty(e, c);
						else if (f === js && (f = void 0), f !== u && (i[c] = f, a = !0, u = f, globalThis.__DEV__ !== !1)) {
							var p = function(e) {
								if (n.lookup(e.__ref) === void 0) return globalThis.__DEV__ !== !1 && M.warn(3, e), !0;
							};
							if (z(f)) p(f);
							else if (Array.isArray(f)) for (var m = !1, h = void 0, g = 0, _ = f; g < _.length; g++) {
								var v = _[g];
								if (z(v)) {
									if (m = !0, p(v)) break;
								} else typeof v == "object" && v && n.policies.identify(v)[0] && (h = v);
								if (m && h !== void 0) {
									globalThis.__DEV__ !== !1 && M.warn(4, h);
									break;
								}
							}
						}
					}
					u !== void 0 && (o = !1);
				}
			}), a) return this.merge(e, i), o && (this instanceof Rs ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
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
			return this.modify(e, o ? (r = {}, r[o] = Ms, r) : Ms);
		}
		return !1;
	}, e.prototype.evict = function(e, t) {
		var n = !1;
		return e.id && (vs.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof Rs && this !== t && (n = this.parent.evict(e, t) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n;
	}, e.prototype.clear = function() {
		this.replace(null);
	}, e.prototype.extract = function() {
		var e = this, t = this.toObject(), n = [];
		return this.getRootIdSet().forEach(function(t) {
			vs.call(e.policies.rootTypenamesById, t) || n.push(t);
		}), n.length && (t.__META = { extraRootIds: n.sort() }), t;
	}, e.prototype.replace = function(e) {
		var t = this;
		if (Object.keys(this.data).forEach(function(n) {
			e && vs.call(e, n) || t.delete(n);
		}), e) {
			var n = e.__META, r = le(e, ["__META"]);
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
		return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof Rs ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
	}, e.prototype.gc = function() {
		var e = this, t = this.getRootIdSet(), n = this.toObject();
		t.forEach(function(r) {
			vs.call(n, r) && (Object.keys(e.findChildRefIds(r)).forEach(t.add, t), delete n[r]);
		});
		var r = Object.keys(n);
		if (r.length) {
			for (var i = this; i instanceof Rs;) i = i.parent;
			r.forEach(function(e) {
				return i.delete(e);
			});
		}
		return r;
	}, e.prototype.findChildRefIds = function(e) {
		if (!vs.call(this.refs, e)) {
			var t = this.refs[e] = Object.create(null), n = this.data[e];
			if (!n) return t;
			var r = new Set([n]);
			r.forEach(function(e) {
				z(e) && (t[e.__ref] = !0), R(e) && Object.keys(e).forEach(function(t) {
					var n = e[t];
					R(n) && r.add(n);
				});
			});
		}
		return this.refs[e];
	}, e.prototype.makeCacheKey = function() {
		return this.group.keyMaker.lookupArray(arguments);
	}, e;
}(), Fs = function() {
	function e(e, t) {
		t === void 0 && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching();
	}
	return e.prototype.resetCaching = function() {
		this.d = this.caching ? wi() : null, this.keyMaker = new bn(Cn);
	}, e.prototype.depend = function(e, t) {
		if (this.d) {
			this.d(Is(e, t));
			var n = Es(t);
			n !== t && this.d(Is(e, n)), this.parent && this.parent.depend(e, t);
		}
	}, e.prototype.dirty = function(e, t) {
		this.d && this.d.dirty(Is(e, t), t === "__exists" ? "forget" : "setDirty");
	}, e;
}();
function Is(e, t) {
	return t + "#" + e;
}
function Ls(e, t) {
	Vs(e) && e.group.depend(t, "__exists");
}
(function(e) {
	e.Root = function(e) {
		ce(t, e);
		function t(t) {
			var n = t.policies, r = t.resultCaching, i = r === void 0 ? !0 : r, a = t.seed, o = e.call(this, n, new Fs(i)) || this;
			return o.stump = new zs(o), o.storageTrie = new bn(Cn), a && o.replace(a), o;
		}
		return t.prototype.addLayer = function(e, t) {
			return this.stump.addLayer(e, t);
		}, t.prototype.removeLayer = function() {
			return this;
		}, t.prototype.getStorage = function() {
			return this.storageTrie.lookupArray(arguments);
		}, t;
	}(e);
})(Ps || (Ps = {}));
var Rs = function(e) {
	ce(t, e);
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
				U(r[n], i[n]) || t.group.dirty(e, n);
			}) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach(function(n) {
				t.group.dirty(e, n);
			})) : t.delete(e);
		}), n) : n === this.parent ? this : n.addLayer(this.id, this.replay);
	}, t.prototype.toObject = function() {
		return A(A({}, this.parent.toObject()), this.data);
	}, t.prototype.findChildRefIds = function(t) {
		var n = this.parent.findChildRefIds(t);
		return vs.call(this.data, t) ? A(A({}, n), e.prototype.findChildRefIds.call(this, t)) : n;
	}, t.prototype.getStorage = function() {
		for (var e = this.parent; e.parent;) e = e.parent;
		return e.getStorage.apply(e, arguments);
	}, t;
}(Ps), zs = function(e) {
	ce(t, e);
	function t(t) {
		return e.call(this, "EntityStore.Stump", t, function() {}, new Fs(t.group.caching, t.group)) || this;
	}
	return t.prototype.removeLayer = function() {
		return this;
	}, t.prototype.merge = function(e, t) {
		return this.parent.merge(e, t);
	}, t;
}(Rs);
function Bs(e, t, n) {
	var r = e[n], i = t[n];
	return U(r, i) ? r : i;
}
function Vs(e) {
	return !!(e instanceof Ps && e.group.caching);
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/object-canon.js
function Hs(e) {
	return R(e) ? Ni(e) ? e.slice(0) : A({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Us = function() {
	function e() {
		this.known = new (wn ? WeakSet : Set)(), this.pool = new bn(Cn), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
	}
	return e.prototype.isKnown = function(e) {
		return R(e) && this.known.has(e);
	}, e.prototype.pass = function(e) {
		if (R(e)) {
			var t = Hs(e);
			return this.passes.set(t, e), t;
		}
		return e;
	}, e.prototype.admit = function(e) {
		var t = this;
		if (R(e)) {
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
function Ws(e) {
	return [
		e.selectionSet,
		e.objectOrReference,
		e.context,
		e.context.canonizeResults
	];
}
var Gs = function() {
	function e(e) {
		var t = this;
		this.knownResults = new (Cn ? WeakMap : Map)(), this.config = Ra(e, {
			addTypename: e.addTypename !== !1,
			canonizeResults: Cs(e)
		}), this.canon = e.canon || new Us(), this.executeSelectionSet = Oi(function(e) {
			var n, r = e.context.canonizeResults, i = Ws(e);
			i[3] = !r;
			var a = (n = t.executeSelectionSet).peek.apply(n, i);
			return a ? r ? A(A({}, a), { result: t.canon.admit(a.result) }) : a : (Ls(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e));
		}, {
			max: this.config.resultCacheMaxSize || qn["inMemoryCache.executeSelectionSet"] || 5e4,
			keyArgs: Ws,
			makeCacheKey: function(e, t, n, r) {
				if (Vs(n.store)) return n.store.makeCacheKey(e, z(t) ? t.__ref : t, n.varString, r);
			}
		}), this.executeSubSelectedArray = Oi(function(e) {
			return Ls(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e);
		}, {
			max: this.config.resultCacheMaxSize || qn["inMemoryCache.executeSubSelectedArray"] || 1e4,
			makeCacheKey: function(e) {
				var t = e.field, n = e.array, r = e.context;
				if (Vs(r.store)) return r.store.makeCacheKey(t, n, r.varString);
			}
		});
	}
	return e.prototype.resetCanon = function() {
		this.canon = new Us();
	}, e.prototype.diffQueryAgainstStore = function(e) {
		var t = e.store, n = e.query, r = e.rootId, i = r === void 0 ? "ROOT_QUERY" : r, a = e.variables, o = e.returnPartialData, s = o === void 0 ? !0 : o, c = e.canonizeResults, l = c === void 0 ? this.config.canonizeResults : c, u = this.config.cache.policies;
		a = A(A({}, Vr(Rr(n))), a);
		var d = pr(i), f = this.executeSelectionSet({
			selectionSet: Br(n).selectionSet,
			objectOrReference: d,
			enclosingRef: d,
			context: A({
				store: t,
				query: n,
				policies: u,
				variables: a,
				varString: lr(a),
				canonizeResults: l
			}, As(n, this.config.fragments))
		}), p;
		if (f.missing && (p = [new _s(Ks(f.missing), f.missing, n, a)], !s)) throw p[0];
		return {
			result: f.result,
			complete: !p,
			missing: p
		};
	}, e.prototype.isFresh = function(e, t, n, r) {
		if (Vs(r.store) && this.knownResults.get(e) === n) {
			var i = this.executeSelectionSet.peek(n, t, r, this.canon.isKnown(e));
			if (i && e === i.result) return !0;
		}
		return !1;
	}, e.prototype.execSelectionSetImpl = function(e) {
		var t = this, n = e.selectionSet, r = e.objectOrReference, i = e.enclosingRef, a = e.context;
		if (z(r) && !a.policies.rootTypenamesById[r.__ref] && !a.store.has(r.__ref)) return {
			result: this.canon.empty,
			missing: `Dangling reference to missing ${r.__ref} object`
		};
		var o = a.variables, s = a.policies, c = a.store.getFieldValue(r, "__typename"), l = [], u, d = new Yi();
		this.config.addTypename && typeof c == "string" && !s.rootIdsByTypename[c] && l.push({ __typename: c });
		function f(e, t) {
			var n;
			return e.missing && (u = d.merge(u, (n = {}, n[t] = e.missing, n))), e.result;
		}
		var p = new Set(n.selections);
		p.forEach(function(e) {
			var n, m;
			if (un(e, o)) if (Mr(e)) {
				var h = s.readField({
					fieldName: e.name.value,
					field: e,
					variables: a.variables,
					from: r
				}, a), g = Ar(e);
				h === void 0 ? Vi.added(e) || (u = d.merge(u, (n = {}, n[g] = `Can't find field '${e.name.value}' on ${z(r) ? r.__ref + " object" : "object " + JSON.stringify(r, null, 2)}`, n))) : Ni(h) ? h.length > 0 && (h = f(t.executeSubSelectedArray({
					field: e,
					array: h,
					enclosingRef: i,
					context: a
				}), g)) : e.selectionSet ? h != null && (h = f(t.executeSelectionSet({
					selectionSet: e.selectionSet,
					objectOrReference: h,
					enclosingRef: z(h) ? h : i,
					context: a
				}), g)) : a.canonizeResults && (h = t.canon.pass(h)), h !== void 0 && l.push((m = {}, m[g] = h, m));
			} else {
				var _ = Mn(e, a.lookupFragment);
				if (!_ && e.kind === N.FRAGMENT_SPREAD) throw De(10, e.name.value);
				_ && s.fragmentMatches(_, c) && _.selectionSet.selections.forEach(p.add, p);
			}
		});
		var m = {
			result: qi(l),
			missing: u
		}, h = a.canonizeResults ? this.canon.admit(m) : Ta(m);
		return h.result && this.knownResults.set(h.result, n), h;
	}, e.prototype.execSubSelectedArrayImpl = function(e) {
		var t = this, n = e.field, r = e.array, i = e.enclosingRef, a = e.context, o, s = new Yi();
		function c(e, t) {
			var n;
			return e.missing && (o = s.merge(o, (n = {}, n[t] = e.missing, n))), e.result;
		}
		return n.selectionSet && (r = r.filter(a.store.canRead)), r = r.map(function(e, r) {
			return e === null ? null : Ni(e) ? c(t.executeSubSelectedArray({
				field: n,
				array: e,
				enclosingRef: i,
				context: a
			}), r) : n.selectionSet ? c(t.executeSelectionSet({
				selectionSet: n.selectionSet,
				objectOrReference: e,
				enclosingRef: z(e) ? e : i,
				context: a
			}), r) : (globalThis.__DEV__ !== !1 && qs(a.store, n, e), e);
		}), {
			result: a.canonizeResults ? this.canon.admit(r) : r,
			missing: o
		};
	}, e;
}();
function Ks(e) {
	try {
		JSON.stringify(e, function(e, t) {
			if (typeof t == "string") throw t;
			return t;
		});
	} catch (e) {
		return e;
	}
}
function qs(e, t, n) {
	if (!t.selectionSet) {
		var r = new Set([n]);
		r.forEach(function(n) {
			R(n) && (M(!z(n), 11, ws(e, n), t.name.value), Object.values(n).forEach(r.add, r));
		});
	}
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/reactiveVars.js
var Js = new Yr(), Ys = /* @__PURE__ */ new WeakMap();
function Xs(e) {
	var t = Ys.get(e);
	return t || Ys.set(e, t = {
		vars: /* @__PURE__ */ new Set(),
		dep: wi()
	}), t;
}
function Zs(e) {
	Xs(e).vars.forEach(function(t) {
		return t.forgetCache(e);
	});
}
function Qs(e) {
	Xs(e).vars.forEach(function(t) {
		return t.attachCache(e);
	});
}
function $s(e) {
	var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = function(a) {
		if (arguments.length > 0) {
			if (e !== a) {
				e = a, t.forEach(function(e) {
					Xs(e).dep.dirty(r), ec(e);
				});
				var o = Array.from(n);
				n.clear(), o.forEach(function(t) {
					return t(e);
				});
			}
		} else {
			var s = Js.getValue();
			s && (i(s), Xs(s).dep(r));
		}
		return e;
	};
	r.onNextChange = function(e) {
		return n.add(e), function() {
			n.delete(e);
		};
	};
	var i = r.attachCache = function(e) {
		return t.add(e), Xs(e).vars.add(r), r;
	};
	return r.forgetCache = function(e) {
		return t.delete(e);
	}, r;
}
function ec(e) {
	e.broadcastWatches && e.broadcastWatches();
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/key-extractor.js
var tc = Object.create(null);
function nc(e) {
	var t = JSON.stringify(e);
	return tc[t] || (tc[t] = Object.create(null));
}
function rc(e) {
	var t = nc(e);
	return t.keyFieldsFn || (t.keyFieldsFn = function(t, n) {
		var r = function(e, t) {
			return n.readField(t, e);
		}, i = n.keyObject = ac(e, function(e) {
			var i = cc(n.storeObject, e, r);
			return i === void 0 && t !== n.storeObject && vs.call(t, e[0]) && (i = cc(t, e, sc)), M(i !== void 0, 5, e.join("."), t), i;
		});
		return `${n.typename}:${JSON.stringify(i)}`;
	});
}
function ic(e) {
	var t = nc(e);
	return t.keyArgsFn || (t.keyArgsFn = function(t, n) {
		var r = n.field, i = n.variables, a = n.fieldName, o = ac(e, function(e) {
			var n = e[0], a = n.charAt(0);
			if (a === "@") {
				if (r && Pi(r.directives)) {
					var o = n.slice(1), s = r.directives.find(function(e) {
						return e.name.value === o;
					}), c = s && kr(s, i);
					return c && cc(c, e.slice(1));
				}
				return;
			}
			if (a === "$") {
				var l = n.slice(1);
				if (i && vs.call(i, l)) {
					var u = e.slice(0);
					return u[0] = l, cc(i, u);
				}
				return;
			}
			if (t) return cc(t, e);
		}), s = JSON.stringify(o);
		return (t || s !== "{}") && (a += ":" + s), a;
	});
}
function ac(e, t) {
	var n = new Yi();
	return oc(e).reduce(function(e, r) {
		var i, a = t(r);
		if (a !== void 0) {
			for (var o = r.length - 1; o >= 0; --o) a = (i = {}, i[r[o]] = a, i);
			e = n.merge(e, a);
		}
		return e;
	}, Object.create(null));
}
function oc(e) {
	var t = nc(e);
	if (!t.paths) {
		var n = t.paths = [], r = [];
		e.forEach(function(t, i) {
			Ni(t) ? (oc(t).forEach(function(e) {
				return n.push(r.concat(e));
			}), r.length = 0) : (r.push(t), Ni(e[i + 1]) || (n.push(r.slice(0)), r.length = 0));
		});
	}
	return t.paths;
}
function sc(e, t) {
	return e[t];
}
function cc(e, t, n) {
	return n = n || sc, lc(t.reduce(function e(t, r) {
		return Ni(t) ? t.map(function(t) {
			return e(t, r);
		}) : t && n(t, r);
	}, e));
}
function lc(e) {
	return R(e) ? Ni(e) ? e.map(lc) : ac(Object.keys(e).sort(), function(t) {
		return cc(e, t);
	}) : e;
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/policies.js
function uc(e) {
	return e.args === void 0 ? e.field ? kr(e.field, e.variables) : null : e.args;
}
var dc = function() {}, fc = function(e, t) {
	return t.fieldName;
}, pc = function(e, t, n) {
	var r = n.mergeObjects;
	return r(e, t);
}, mc = function(e, t) {
	return t;
}, hc = function() {
	function e(e) {
		this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = A({ dataIdFromObject: bs }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
	}
	return e.prototype.identify = function(e, t) {
		var n = this, r = t && (t.typename || t.storeObject?.__typename) || e.__typename;
		if (r === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
		var i = t && t.storeObject || e, a = A(A({}, t), {
			typename: r,
			storeObject: i,
			readField: t && t.readField || function() {
				var e = _c(arguments, i);
				return n.readField(e, {
					store: n.cache.data,
					variables: e.variables
				});
			}
		}), o, s = r && this.getTypePolicy(r), c = s && s.keyFn || this.config.dataIdFromObject;
		return ss.withValue(!0, function() {
			for (; c;) {
				var t = c(A(A({}, e), i), a);
				if (Ni(t)) c = rc(t);
				else {
					o = t;
					break;
				}
			}
		}), o = o ? String(o) : void 0, a.keyObject ? [o, a.keyObject] : [o];
	}, e.prototype.addTypePolicies = function(e) {
		var t = this;
		Object.keys(e).forEach(function(n) {
			var r = e[n], i = r.queryType, a = r.mutationType, o = r.subscriptionType, s = le(r, [
				"queryType",
				"mutationType",
				"subscriptionType"
			]);
			i && t.setRootTypename("Query", n), a && t.setRootTypename("Mutation", n), o && t.setRootTypename("Subscription", n), vs.call(t.toBeAdded, n) ? t.toBeAdded[n].push(s) : t.toBeAdded[n] = [s];
		});
	}, e.prototype.updateTypePolicy = function(e, t, n) {
		var r = this.getTypePolicy(e), i = t.keyFields, a = t.fields;
		function o(e, t) {
			e.merge = typeof t == "function" ? t : t === !0 ? pc : t === !1 ? mc : e.merge;
		}
		o(r, t.merge), r.keyFn = i === !1 ? dc : Ni(i) ? rc(i) : typeof i == "function" ? i : r.keyFn, a && Object.keys(a).forEach(function(t) {
			var r = n[t];
			(!r || r?.typename !== e) && (r = n[t] = { typename: e });
			var i = a[t];
			if (typeof i == "function") r.read = i;
			else {
				var s = i.keyArgs, c = i.read, l = i.merge;
				r.keyFn = s === !1 ? fc : Ni(s) ? ic(s) : typeof s == "function" ? s : r.keyFn, typeof c == "function" && (r.read = c), o(r, l);
			}
			r.read && r.merge && (r.keyFn = r.keyFn || fc);
		});
	}, e.prototype.setRootTypename = function(e, t) {
		t === void 0 && (t = e);
		var n = "ROOT_" + e.toUpperCase(), r = this.rootTypenamesById[n];
		t !== r && (M(!r || r === e, 6, e), r && delete this.rootIdsByTypename[r], this.rootIdsByTypename[t] = n, this.rootTypenamesById[n] = t);
	}, e.prototype.addPossibleTypes = function(e) {
		var t = this;
		this.usingPossibleTypes = !0, Object.keys(e).forEach(function(n) {
			t.getSupertypeSet(n, !0), e[n].forEach(function(e) {
				t.getSupertypeSet(e, !0).add(n);
				var r = e.match(Ts);
				(!r || r[0] !== e) && t.fuzzySubtypes.set(e, new RegExp(e));
			});
		});
	}, e.prototype.getTypePolicy = function(e) {
		var t = this;
		if (!vs.call(this.typePolicies, e)) {
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
				var r = t.getTypePolicy(e), i = r.fields, a = le(r, ["fields"]);
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
			if (f.has(a)) return o.has(a) || (u && globalThis.__DEV__ !== !1 && M.warn(7, t, a), o.add(a)), !0;
			f.forEach(c), l && d === s.length - 1 && Ds(e.selectionSet, n, r) && (l = !1, u = !0, this.fuzzySubtypes.forEach(function(e, n) {
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
		}, s = uc(e); a;) {
			var c = a(s, o);
			if (Ni(c)) a = ic(c);
			else {
				i = c || n;
				break;
			}
		}
		return i === void 0 && (i = e.field ? Tr(e.field, e.variables) : Or(n, uc(e))), i === !1 ? n : n === Es(i) ? i : n + ":" + i;
	}, e.prototype.readField = function(e, t) {
		var n = e.from;
		if (n && (e.field || e.fieldName)) {
			if (e.typename === void 0) {
				var r = t.store.getFieldValue(n, "__typename");
				r && (e.typename = r);
			}
			var i = this.getStoreFieldName(e), a = Es(i), o = t.store.getFieldValue(n, i), s = this.getFieldPolicy(e.typename, a), c = s && s.read;
			if (c) {
				var l = gc(this, n, e, t, t.store.getStorage(z(n) ? n.__ref : n, i));
				return Js.withValue(this.cache, c, [o, l]);
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
		return s === pc ? vc(r.store)(e, t) : s === mc ? t : (r.overwrite && (e = void 0), s(e, t, gc(this, void 0, {
			typename: o,
			fieldName: a.name.value,
			field: a,
			variables: r.variables
		}, r, i || Object.create(null))));
	}, e;
}();
function gc(e, t, n, r, i) {
	var a = e.getStoreFieldName(n), o = Es(a), s = n.variables || r.variables, c = r.store, l = c.toReference, u = c.canRead;
	return {
		args: uc(n),
		field: n.field || null,
		fieldName: o,
		storeFieldName: a,
		variables: s,
		isReference: z,
		toReference: l,
		storage: i,
		cache: e.cache,
		canRead: u,
		readField: function() {
			return e.readField(_c(arguments, t, s), r);
		},
		mergeObjects: vc(r.store)
	};
}
function _c(e, t, n) {
	var r = e[0], i = e[1], a = e.length, o;
	return typeof r == "string" ? o = {
		fieldName: r,
		from: a > 1 ? i : t
	} : (o = A({}, r), vs.call(o, "from") || (o.from = t)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && M.warn(8, Te(Array.from(e))), o.variables === void 0 && (o.variables = n), o;
}
function vc(e) {
	return function(t, n) {
		if (Ni(t) || Ni(n)) throw De(9);
		if (R(t) && R(n)) {
			var r = e.getFieldValue(t, "__typename"), i = e.getFieldValue(n, "__typename");
			if (r && i && r !== i) return n;
			if (z(t) && Os(n)) return e.merge(t.__ref, n), t;
			if (Os(t) && z(n)) return e.merge(t, n.__ref), n;
			if (Os(t) && Os(n)) return A(A({}, t), n);
		}
		return n;
	};
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/writeToStore.js
function yc(e, t, n) {
	var r = `${t}${n}`, i = e.flavors.get(r);
	return i || e.flavors.set(r, i = e.clientOnly === t && e.deferred === n ? e : A(A({}, e), {
		clientOnly: t,
		deferred: n
	})), i;
}
var bc = function() {
	function e(e, t, n) {
		this.cache = e, this.reader = t, this.fragments = n;
	}
	return e.prototype.writeToStore = function(e, t) {
		var n = this, r = t.query, i = t.result, a = t.dataId, o = t.variables, s = t.overwrite, c = Fr(r), l = ks();
		o = A(A({}, Vr(c)), o);
		var u = A(A({
			store: e,
			written: Object.create(null),
			merge: function(e, t) {
				return l.merge(e, t);
			},
			variables: o,
			varString: lr(o)
		}, As(r, this.fragments)), {
			overwrite: !!s,
			incomingById: /* @__PURE__ */ new Map(),
			clientOnly: !1,
			deferred: !1,
			flavors: /* @__PURE__ */ new Map()
		}), d = this.processSelectionSet({
			result: i || Object.create(null),
			dataId: a,
			selectionSet: c.selectionSet,
			mergeTree: { map: /* @__PURE__ */ new Map() },
			context: u
		});
		if (!z(d)) throw De(12, i);
		return u.incomingById.forEach(function(t, r) {
			var i = t.storeObject, a = t.mergeTree, o = t.fieldNodeSet, s = pr(r);
			if (a && a.map.size) {
				var c = n.applyMerges(a, s, i, u);
				if (z(c)) return;
				i = c;
			}
			if (globalThis.__DEV__ !== !1 && !u.overwrite) {
				var l = Object.create(null);
				o.forEach(function(e) {
					e.selectionSet && (l[e.name.value] = !0);
				});
				var d = function(e) {
					return l[Es(e)] === !0;
				}, f = function(e) {
					var t = a && a.map.get(e);
					return !!(t && t.info && t.info.merge);
				};
				Object.keys(i).forEach(function(e) {
					d(e) && !f(e) && Dc(s, i, e, u.store);
				});
			}
			e.merge(r, i);
		}), e.retain(d.__ref), d;
	}, e.prototype.processSelectionSet = function(e) {
		var t = this, n = e.dataId, r = e.result, i = e.selectionSet, a = e.context, o = e.mergeTree, s = this.cache.policies, c = Object.create(null), l = n && s.rootTypenamesById[n] || jr(r, i, a.fragmentMap) || n && a.store.get(n, "__typename");
		typeof l == "string" && (c.__typename = l);
		var u = function() {
			var e = _c(arguments, c, a.variables);
			if (z(e.from)) {
				var t = a.incomingById.get(e.from.__ref);
				if (t) {
					var n = s.readField(A(A({}, e), { from: t.storeObject }), a);
					if (n !== void 0) return n;
				}
			}
			return s.readField(e, a);
		}, d = /* @__PURE__ */ new Set();
		this.flattenFields(i, r, a, l).forEach(function(e, n) {
			var i, a = r[Ar(n)];
			if (d.add(n), a !== void 0) {
				var f = s.getStoreFieldName({
					typename: l,
					fieldName: n.name.value,
					field: n,
					variables: e.variables
				}), p = Sc(o, f), m = t.processFieldValue(a, n, n.selectionSet ? yc(e, !1, !1) : e, p), h = void 0;
				n.selectionSet && (z(m) || Os(m)) && (h = u("__typename", m));
				var g = s.getMergeFunction(l, n.name.value, h);
				g ? p.info = {
					field: n,
					typename: l,
					merge: g
				} : Tc(o, f), c = e.merge(c, (i = {}, i[f] = m, i));
			} else globalThis.__DEV__ !== !1 && !e.clientOnly && !e.deferred && !Vi.added(n) && !s.getReadFunction(l, n.name.value) && globalThis.__DEV__ !== !1 && M.error(13, Ar(n), r);
		});
		try {
			var f = s.identify(r, {
				typename: l,
				selectionSet: i,
				fragmentMap: a.fragmentMap,
				storeObject: c,
				readField: u
			}), p = f[0], m = f[1];
			n = n || p, m && (c = a.merge(c, m));
		} catch (e) {
			if (!n) throw e;
		}
		if (typeof n == "string") {
			var h = pr(n), g = a.written[n] || (a.written[n] = []);
			if (g.indexOf(i) >= 0 || (g.push(i), this.reader && this.reader.isFresh(r, h, i, a))) return h;
			var _ = a.incomingById.get(n);
			return _ ? (_.storeObject = a.merge(_.storeObject, c), _.mergeTree = Cc(_.mergeTree, o), d.forEach(function(e) {
				return _.fieldNodeSet.add(e);
			})) : a.incomingById.set(n, {
				storeObject: c,
				mergeTree: wc(o) ? void 0 : o,
				fieldNodeSet: d
			}), h;
		}
		return c;
	}, e.prototype.processFieldValue = function(e, t, n, r) {
		var i = this;
		return !t.selectionSet || e === null ? globalThis.__DEV__ === !1 ? e : xa(e) : Ni(e) ? e.map(function(e, a) {
			var o = i.processFieldValue(e, t, n, Sc(r, a));
			return Tc(r, a), o;
		}) : this.processSelectionSet({
			result: e,
			selectionSet: t.selectionSet,
			context: n,
			mergeTree: r
		});
	}, e.prototype.flattenFields = function(e, t, n, r) {
		r === void 0 && (r = jr(t, e, n.fragmentMap));
		var i = /* @__PURE__ */ new Map(), a = this.cache.policies, o = new bn(!1);
		return (function e(s, c) {
			var l = o.lookup(s, c.clientOnly, c.deferred);
			l.visited || (l.visited = !0, s.selections.forEach(function(o) {
				if (un(o, n.variables)) {
					var s = c.clientOnly, l = c.deferred;
					if (!(s && l) && Pi(o.directives) && o.directives.forEach(function(e) {
						var t = e.name.value;
						if (t === "client" && (s = !0), t === "defer") {
							var r = kr(e, n.variables);
							(!r || r.if !== !1) && (l = !0);
						}
					}), Mr(o)) {
						var u = i.get(o);
						u && (s = s && u.clientOnly, l = l && u.deferred), i.set(o, yc(n, s, l));
					} else {
						var d = Mn(o, n.lookupFragment);
						if (!d && o.kind === N.FRAGMENT_SPREAD) throw De(14, o.name.value);
						d && a.fragmentMatches(d, r, t, n.variables) && e(d.selectionSet, yc(n, s, l));
					}
				}
			}));
		})(e, n), i;
	}, e.prototype.applyMerges = function(e, t, n, r, i) {
		var a, o = this;
		if (e.map.size && !z(n)) {
			var s = !Ni(n) && (z(t) || Os(t)) ? t : void 0, c = n;
			s && !i && (i = [z(s) ? s.__ref : s]);
			var l, u = function(e, t) {
				return Ni(e) ? typeof t == "number" ? e[t] : void 0 : r.store.getFieldValue(e, String(t));
			};
			e.map.forEach(function(e, t) {
				var n = u(s, t), a = u(c, t);
				if (a !== void 0) {
					i && i.push(t);
					var d = o.applyMerges(e, n, a, r, i);
					d !== a && (l = l || /* @__PURE__ */ new Map(), l.set(t, d)), i && M(i.pop() === t);
				}
			}), l && (n = Ni(c) ? c.slice(0) : A({}, c), l.forEach(function(e, t) {
				n[t] = e;
			}));
		}
		return e.info ? this.cache.policies.runMergeFunction(t, n, e.info, r, i && (a = r.store).getStorage.apply(a, i)) : n;
	}, e;
}(), xc = [];
function Sc(e, t) {
	var n = e.map;
	return n.has(t) || n.set(t, xc.pop() || { map: /* @__PURE__ */ new Map() }), n.get(t);
}
function Cc(e, t) {
	if (e === t || !t || wc(t)) return e;
	if (!e || wc(e)) return t;
	var n = e.info && t.info ? A(A({}, e.info), t.info) : e.info || t.info, r = e.map.size && t.map.size, i = {
		info: n,
		map: r ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map
	};
	if (r) {
		var a = new Set(t.map.keys());
		e.map.forEach(function(e, n) {
			i.map.set(n, Cc(e, t.map.get(n))), a.delete(n);
		}), a.forEach(function(n) {
			i.map.set(n, Cc(t.map.get(n), e.map.get(n)));
		});
	}
	return i;
}
function wc(e) {
	return !e || !(e.info || e.map.size);
}
function Tc(e, t) {
	var n = e.map, r = n.get(t);
	r && wc(r) && (xc.push(r), n.delete(t));
}
var Ec = /* @__PURE__ */ new Set();
function Dc(e, t, n, r) {
	var i = function(e) {
		var t = r.getFieldValue(e, n);
		return typeof t == "object" && t;
	}, a = i(e);
	if (a) {
		var o = i(t);
		if (o && !z(a) && !U(a, o) && !Object.keys(a).every(function(e) {
			return r.getFieldValue(o, e) !== void 0;
		})) {
			var s = r.getFieldValue(e, "__typename") || r.getFieldValue(t, "__typename"), c = Es(n), l = `${s}.${c}`;
			if (!Ec.has(l)) {
				Ec.add(l);
				var u = [];
				!Ni(a) && !Ni(o) && [a, o].forEach(function(e) {
					var t = r.getFieldValue(e, "__typename");
					typeof t == "string" && !u.includes(t) && u.push(t);
				}), globalThis.__DEV__ !== !1 && M.warn(15, c, s, u.length ? "either ensure all objects of type " + u.join(" and ") + " have an ID or a custom merge function, or " : "", l, A({}, a), A({}, o));
			}
		}
	}
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
var Oc = function(e) {
	ce(t, e);
	function t(t) {
		t === void 0 && (t = {});
		var n = e.call(this) || this;
		return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new Ai(Vi), n.assumeImmutableResults = !0, n.makeVar = $s, n.txCount = 0, globalThis.__DEV__ !== !1 && (V(t, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`."), V(t, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.")), n.config = Ss(t), n.addTypename = !!n.config.addTypename, n.policies = new hc({
			cache: n,
			dataIdFromObject: n.config.dataIdFromObject,
			possibleTypes: n.config.possibleTypes,
			typePolicies: n.config.typePolicies
		}), n.init(), n;
	}
	return t.prototype.init = function() {
		var e = this.data = new Ps.Root({
			policies: this.policies,
			resultCaching: this.config.resultCaching
		});
		this.optimisticData = e.stump, this.resetResultCache();
	}, t.prototype.resetResultCache = function(e) {
		var t = this, n = this.storeReader, r = this.config.fragments;
		this.addTypenameTransform.resetCache(), r?.resetCaches(), this.storeWriter = new bc(this, this.storeReader = new Gs({
			cache: this,
			addTypename: this.addTypename,
			resultCacheMaxSize: this.config.resultCacheMaxSize,
			canonizeResults: Cs(this.config),
			canon: e ? void 0 : n && n.canon,
			fragments: r
		}), r), this.maybeBroadcastWatch = Oi(function(e, n) {
			return t.broadcastWatch(e, n);
		}, {
			max: this.config.resultCacheMaxSize || qn["inMemoryCache.maybeBroadcastWatch"] || 5e3,
			makeCacheKey: function(e) {
				var n = e.optimistic ? t.optimisticData : t.data;
				if (Vs(n)) {
					var r = e.optimistic, i = e.id, a = e.variables;
					return n.makeCacheKey(e.query, e.callback, lr({
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
		globalThis.__DEV__ !== !1 && V(e, "canonizeResults", "cache.read");
		var t = e.returnPartialData, n = t === void 0 ? !1 : t;
		try {
			return this.storeReader.diffQueryAgainstStore(A(A({}, e), {
				store: e.optimistic ? this.optimisticData : this.data,
				config: this.config,
				returnPartialData: n
			})).result || null;
		} catch (e) {
			if (e instanceof _s) return null;
			throw e;
		}
	}, t.prototype.write = function(e) {
		try {
			return ++this.txCount, this.storeWriter.writeToStore(this.data, e);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, t.prototype.modify = function(e) {
		if (vs.call(e, "id") && !e.id) return !1;
		var t = e.optimistic ? this.optimisticData : this.data;
		try {
			return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, t.prototype.diff = function(e) {
		return globalThis.__DEV__ !== !1 && V(e, "canonizeResults", "cache.diff"), this.storeReader.diffQueryAgainstStore(A(A({}, e), {
			store: e.optimistic ? this.optimisticData : this.data,
			rootId: e.id || "ROOT_QUERY",
			config: this.config
		}));
	}, t.prototype.watch = function(e) {
		var t = this;
		return this.watches.size || Qs(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e), function() {
			t.watches.delete(e) && !t.watches.size && Zs(t), t.maybeBroadcastWatch.forget(e);
		};
	}, t.prototype.gc = function(e) {
		globalThis.__DEV__ !== !1 && V(e || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option."), lr.reset(), Mi.reset();
		var t = this.optimisticData.gc();
		return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t;
	}, t.prototype.retain = function(e, t) {
		return (t ? this.optimisticData : this.data).retain(e);
	}, t.prototype.release = function(e, t) {
		return (t ? this.optimisticData : this.data).release(e);
	}, t.prototype.identify = function(e) {
		if (z(e)) return e.__ref;
		try {
			return this.policies.identify(e)[0];
		} catch (e) {
			globalThis.__DEV__ !== !1 && M.warn(e);
		}
	}, t.prototype.evict = function(e) {
		if (!e.id) {
			if (vs.call(e, "id")) return !1;
			e = A(A({}, e), { id: "ROOT_QUERY" });
		}
		try {
			return ++this.txCount, this.optimisticData.evict(e, this.data);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, t.prototype.reset = function(e) {
		var t = this;
		return this.init(), lr.reset(), e && e.discardWatches ? (this.watches.forEach(function(e) {
			return t.maybeBroadcastWatch.forget(e);
		}), this.watches.clear(), Zs(this)) : this.broadcastWatches(), Promise.resolve();
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
		return o && !this.txCount && this.broadcastWatches(A(A({}, e), { onWatchUpdated: function(e) {
			return l.add(e), !1;
		} })), typeof i == "string" ? this.optimisticData = this.optimisticData.addLayer(i, c) : i === !1 ? c(this.data) : c(), typeof a == "string" && (this.optimisticData = this.optimisticData.removeLayer(a)), o && l.size ? (this.broadcastWatches(A(A({}, e), { onWatchUpdated: function(e, t) {
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
		var n = this, r = e.lastDiff, i = Ga("canonizeResults", function() {
			return n.diff(e);
		});
		t && (e.optimistic && typeof t.optimistic == "string" && (i.fromOptimisticTransaction = !0), t.onWatchUpdated && t.onWatchUpdated.call(this, e, i, r) === !1) || (!r || !U(r.result, i.result)) && e.callback(e.lastDiff = i, r);
	}, t;
}(gs);
globalThis.__DEV__ !== !1 && (Oc.prototype.getMemoryInternals = Zn);
//#endregion
//#region node_modules/@apollo/client/core/networkStatus.js
var W;
(function(e) {
	e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(W || (W = {}));
function kc(e) {
	return e ? e < 7 : !1;
}
//#endregion
//#region node_modules/@apollo/client/core/ObservableQuery.js
var Ac = Object.assign, jc = Object.hasOwnProperty, Mc = function(e) {
	ce(t, e);
	function t(n) {
		var r = n.queryManager, i = n.queryInfo, a = n.options, o = this, s = t.inactiveOnCreation.getValue();
		o = e.call(this, function(e) {
			o._getOrCreateQuery();
			try {
				var t = e._subscription._observer;
				t && !t.error && (t.error = Nc);
			} catch {}
			var n = !o.observers.size;
			o.observers.add(e);
			var r = o.last;
			return r && r.error ? e.error && e.error(r.error) : r && r.result && e.next && e.next(o.maskResult(r.result)), n && o.reobserve().catch(function() {}), function() {
				o.observers.delete(e) && !o.observers.size && o.tearDownQuery();
			};
		}) || this, o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.dirty = !1, o._getOrCreateQuery = function() {
			return s && (r.queries.set(o.queryId, i), s = !1), o.queryManager.getOrCreateQuery(o.queryId);
		}, o.queryInfo = i, o.queryManager = r, o.waitForOwnResult = Fc(a.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o), o.maskResult = o.maskResult.bind(o);
		var c = r.defaultOptions.watchQuery, l = (c === void 0 ? {} : c).fetchPolicy, u = l === void 0 ? "cache-first" : l, d = a.fetchPolicy, f = d === void 0 ? u : d, p = a.initialFetchPolicy, m = p === void 0 ? f === "standby" ? u : f : p;
		o.options = A(A({}, a), {
			initialFetchPolicy: m,
			fetchPolicy: f
		}), o.queryId = i.queryId || r.generateQueryId();
		var h = Fr(o.query);
		return o.queryName = h && h.name && h.name.value, o;
	}
	return Object.defineProperty(t.prototype, "query", {
		get: function() {
			return this.lastQuery || this.options.query;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(t.prototype, "variables", {
		get: function() {
			return this.options.variables;
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype.result = function() {
		var e = this;
		return globalThis.__DEV__ !== !1 && Ka("observableQuery.result", function() {
			globalThis.__DEV__ !== !1 && M.warn(23);
		}), new Promise(function(t, n) {
			var r = {
				next: function(n) {
					t(n), e.observers.delete(r), e.observers.size || e.queryManager.removeQuery(e.queryId), setTimeout(function() {
						i.unsubscribe();
					}, 0);
				},
				error: n
			}, i = e.subscribe(r);
		});
	}, t.prototype.resetDiff = function() {
		this.queryInfo.resetDiff();
	}, t.prototype.getCurrentFullResult = function(e) {
		var t = this;
		e === void 0 && (e = !0);
		var n = Ga("getLastResult", function() {
			return t.getLastResult(!0);
		}), r = this.queryInfo.networkStatus || n && n.networkStatus || W.ready, i = A(A({}, n), {
			loading: kc(r),
			networkStatus: r
		}), a = this.options.fetchPolicy, o = a === void 0 ? "cache-first" : a;
		if (!(Fc(o) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)) if (this.waitForOwnResult) this.queryInfo.updateWatch();
		else {
			var s = this.queryInfo.getDiff();
			(s.complete || this.options.returnPartialData) && (i.data = s.result), U(i.data, {}) && (i.data = void 0), s.complete ? (delete i.partial, s.complete && i.networkStatus === W.loading && (o === "cache-first" || o === "cache-only") && (i.networkStatus = W.ready, i.loading = !1)) : i.partial = !0, i.networkStatus === W.ready && (i.error || i.errors) && (i.networkStatus = W.error), globalThis.__DEV__ !== !1 && !s.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && Pc(s.missing);
		}
		return e && this.updateLastResult(i), i;
	}, t.prototype.getCurrentResult = function(e) {
		return e === void 0 && (e = !0), this.maskResult(this.getCurrentFullResult(e));
	}, t.prototype.isDifferentFromLastResult = function(e, t) {
		if (!this.last) return !0;
		var n = this.queryManager.getDocumentInfo(this.query), r = this.queryManager.dataMasking, i = r ? n.nonReactiveQuery : this.query;
		return (r || n.hasNonreactiveDirective ? !ts(i, this.last.result, e, this.variables) : !U(this.last.result, e)) || t && !U(this.last.variables, t);
	}, t.prototype.getLast = function(e, t) {
		var n = this.last;
		if (n && n[e] && (!t || U(n.variables, this.variables))) return n[e];
	}, t.prototype.getLastResult = function(e) {
		return globalThis.__DEV__ !== !1 && Ka("getLastResult", function() {
			globalThis.__DEV__ !== !1 && M.warn(24);
		}), this.getLast("result", e);
	}, t.prototype.getLastError = function(e) {
		return globalThis.__DEV__ !== !1 && Ka("getLastError", function() {
			globalThis.__DEV__ !== !1 && M.warn(25);
		}), this.getLast("error", e);
	}, t.prototype.resetLastResults = function() {
		globalThis.__DEV__ !== !1 && Ka("resetLastResults", function() {
			globalThis.__DEV__ !== !1 && M.warn(26);
		}), delete this.last, this.isTornDown = !1;
	}, t.prototype.resetQueryStoreErrors = function() {
		globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && M.warn(27), this.queryManager.resetErrors(this.queryId);
	}, t.prototype.refetch = function(e) {
		var t = { pollInterval: 0 };
		if (this.options.fetchPolicy === "no-cache" ? t.fetchPolicy = "no-cache" : t.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && e && jc.call(e, "variables")) {
			var n = Rr(this.query), r = n.variableDefinitions;
			(!r || !r.some(function(e) {
				return e.variable.name.value === "variables";
			})) && globalThis.__DEV__ !== !1 && M.warn(28, e, n.name?.value || n);
		}
		return e && !U(this.options.variables, e) && (t.variables = this.options.variables = A(A({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(t, W.refetch);
	}, t.prototype.fetchMore = function(e) {
		var t = this, n = A(A({}, e.query ? e : A(A(A(A({}, this.options), { query: this.options.query }), e), { variables: A(A({}, this.options.variables), e.variables) })), { fetchPolicy: "no-cache" });
		n.query = this.transformDocument(n.query);
		var r = this.queryManager.generateQueryId();
		this.lastQuery = e.query ? this.transformDocument(this.options.query) : n.query;
		var i = this.queryInfo, a = i.networkStatus;
		i.networkStatus = W.fetchMore, n.notifyOnNetworkStatusChange && this.observe();
		var o = /* @__PURE__ */ new Set(), s = e?.updateQuery, c = this.options.fetchPolicy !== "no-cache";
		return c || M(s, 29), this.queryManager.fetchQuery(r, n, W.fetchMore).then(function(l) {
			if (t.queryManager.removeQuery(r), i.networkStatus === W.fetchMore && (i.networkStatus = a), c) t.queryManager.cache.batch({
				update: function(r) {
					var i = e.updateQuery;
					i ? r.updateQuery({
						query: t.query,
						variables: t.variables,
						returnPartialData: !0,
						optimistic: !1
					}, function(e) {
						return i(e, {
							fetchMoreResult: l.data,
							variables: n.variables
						});
					}) : r.writeQuery({
						query: n.query,
						variables: n.variables,
						data: l.data
					});
				},
				onWatchUpdated: function(e) {
					o.add(e.query);
				}
			});
			else {
				var u = t.getLast("result"), d = s(u.data, {
					fetchMoreResult: l.data,
					variables: n.variables
				});
				t.reportResult(A(A({}, u), {
					networkStatus: a,
					loading: kc(a),
					data: d
				}), t.variables);
			}
			return t.maskResult(l);
		}).finally(function() {
			c && !o.has(t.query) && t.reobserveCacheFirst();
		});
	}, t.prototype.subscribeToMore = function(e) {
		var t = this, n = this.queryManager.startGraphQLSubscription({
			query: e.document,
			variables: e.variables,
			context: e.context
		}).subscribe({
			next: function(n) {
				var r = e.updateQuery;
				r && t.updateQuery(function(e, t) {
					return r(e, A({ subscriptionData: n }, t));
				});
			},
			error: function(t) {
				if (e.onError) {
					e.onError(t);
					return;
				}
				globalThis.__DEV__ !== !1 && M.error(30, t);
			}
		});
		return this.subscriptions.add(n), function() {
			t.subscriptions.delete(n) && n.unsubscribe();
		};
	}, t.prototype.setOptions = function(e) {
		return globalThis.__DEV__ !== !1 && (V(e, "canonizeResults", "setOptions"), Ka("setOptions", function() {
			globalThis.__DEV__ !== !1 && M.warn(31);
		})), this.reobserve(e);
	}, t.prototype.silentSetOptions = function(e) {
		var t = Ra(this.options, e || {});
		Ac(this.options, t);
	}, t.prototype.setVariables = function(e) {
		var t = this;
		return U(this.variables, e) ? this.observers.size ? Ga("observableQuery.result", function() {
			return t.result();
		}) : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
			fetchPolicy: this.options.initialFetchPolicy,
			variables: e
		}, W.setVariables) : Promise.resolve());
	}, t.prototype.updateQuery = function(e) {
		var t = this.queryManager, n = t.cache.diff({
			query: this.options.query,
			variables: this.variables,
			returnPartialData: !0,
			optimistic: !1
		}), r = n.result, i = n.complete, a = e(r, {
			variables: this.variables,
			complete: !!i,
			previousData: r
		});
		a && (t.cache.writeQuery({
			query: this.options.query,
			data: a,
			variables: this.variables
		}), t.broadcastQueries());
	}, t.prototype.startPolling = function(e) {
		this.options.pollInterval = e, this.updatePolling();
	}, t.prototype.stopPolling = function() {
		this.options.pollInterval = 0, this.updatePolling();
	}, t.prototype.applyNextFetchPolicy = function(e, t) {
		if (t.nextFetchPolicy) {
			var n = t.fetchPolicy, r = n === void 0 ? "cache-first" : n, i = t.initialFetchPolicy, a = i === void 0 ? r : i;
			r === "standby" || (typeof t.nextFetchPolicy == "function" ? t.fetchPolicy = t.nextFetchPolicy(r, {
				reason: e,
				options: t,
				observable: this,
				initialFetchPolicy: a
			}) : e === "variables-changed" ? t.fetchPolicy = a : t.fetchPolicy = t.nextFetchPolicy);
		}
		return t.fetchPolicy;
	}, t.prototype.fetch = function(e, t, n) {
		var r = this._getOrCreateQuery();
		return r.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(r, e, t, n);
	}, t.prototype.updatePolling = function() {
		var e = this;
		if (!this.queryManager.ssrMode) {
			var t = this, n = t.pollingInfo, r = t.options.pollInterval;
			if (!r || !this.hasObservers()) {
				n && (clearTimeout(n.timeout), delete this.pollingInfo);
				return;
			}
			if (!(n && n.interval === r)) {
				M(r, 32);
				var i = n || (this.pollingInfo = {});
				i.interval = r;
				var a = function() {
					var t;
					e.pollingInfo && (!kc(e.queryInfo.networkStatus) && !(t = e.options).skipPollAttempt?.call(t) ? e.reobserve({ fetchPolicy: e.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only" }, W.poll).then(o, o) : o());
				}, o = function() {
					var t = e.pollingInfo;
					t && (clearTimeout(t.timeout), t.timeout = setTimeout(a, t.interval));
				};
				o();
			}
		}
	}, t.prototype.updateLastResult = function(e, t) {
		var n = this;
		t === void 0 && (t = this.variables);
		var r = Ga("getLastError", function() {
			return n.getLastError();
		});
		return r && this.last && !U(t, this.last.variables) && (r = void 0), this.last = A({
			result: this.queryManager.assumeImmutableResults ? e : xa(e),
			variables: t
		}, r ? { error: r } : null);
	}, t.prototype.reobserveAsConcast = function(e, t) {
		var n = this;
		this.isTornDown = !1;
		var r = t === W.refetch || t === W.fetchMore || t === W.poll, i = this.options.variables, a = this.options.fetchPolicy, o = Ra(this.options, e || {}), s = r ? o : Ac(this.options, o), c = this.transformDocument(s.query);
		this.lastQuery = c, r || (this.updatePolling(), e && e.variables && !U(e.variables, i) && s.fetchPolicy !== "standby" && (s.fetchPolicy === a || typeof s.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", s), t === void 0 && (t = W.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Fc(s.fetchPolicy));
		var l = function() {
			n.concast === f && (n.waitForOwnResult = !1);
		}, u = s.variables && A({}, s.variables), d = this.fetch(s, t, c), f = d.concast, p = d.fromLink, m = {
			next: function(e) {
				U(n.variables, u) && (l(), n.reportResult(e, u));
			},
			error: function(e) {
				U(n.variables, u) && (fo(e) || (e = new mo({ networkError: e })), l(), n.reportError(e, u));
			}
		};
		return !r && (p || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = f, this.observer = m), f.addObserver(m), f;
	}, t.prototype.reobserve = function(e, t) {
		return ya(this.reobserveAsConcast(e, t).promise.then(this.maskResult));
	}, t.prototype.resubscribeAfterError = function() {
		for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		var r = this.last;
		Ga("resetLastResults", function() {
			return e.resetLastResults();
		});
		var i = this.subscribe.apply(this, t);
		return this.last = r, i;
	}, t.prototype.observe = function() {
		this.reportResult(this.getCurrentFullResult(!1), this.variables);
	}, t.prototype.reportResult = function(e, t) {
		var n = this, r = Ga("getLastError", function() {
			return n.getLastError();
		}), i = this.isDifferentFromLastResult(e, t);
		(r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), (r || i) && Ea(this.observers, "next", this.maskResult(e));
	}, t.prototype.reportError = function(e, t) {
		var n = this, r = A(A({}, Ga("getLastResult", function() {
			return n.getLastResult();
		})), {
			error: e,
			errors: e.graphQLErrors,
			networkStatus: W.error,
			loading: !1
		});
		this.updateLastResult(r, t), Ea(this.observers, "error", this.last.error = e);
	}, t.prototype.hasObservers = function() {
		return this.observers.size > 0;
	}, t.prototype.tearDownQuery = function() {
		this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(e) {
			return e.unsubscribe();
		}), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
	}, t.prototype.transformDocument = function(e) {
		return this.queryManager.transform(e);
	}, t.prototype.maskResult = function(e) {
		return e && "data" in e ? A(A({}, e), { data: this.queryManager.maskOperation({
			document: this.query,
			data: e.data,
			fetchPolicy: this.options.fetchPolicy,
			id: this.queryId
		}) }) : e;
	}, t.prototype.resetNotifications = function() {
		this.cancelNotifyTimeout(), this.dirty = !1;
	}, t.prototype.cancelNotifyTimeout = function() {
		this.notifyTimeout && (clearTimeout(this.notifyTimeout), this.notifyTimeout = void 0);
	}, t.prototype.scheduleNotify = function() {
		var e = this;
		this.dirty || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
			return e.notify();
		}, 0)));
	}, t.prototype.notify = function() {
		this.cancelNotifyTimeout(), this.dirty && (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !kc(this.queryInfo.networkStatus)) && (this.queryInfo.getDiff().fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst()), this.dirty = !1;
	}, t.prototype.reobserveCacheFirst = function() {
		var e = this.options, t = e.fetchPolicy, n = e.nextFetchPolicy;
		return t === "cache-and-network" || t === "network-only" ? this.reobserve({
			fetchPolicy: "cache-first",
			nextFetchPolicy: function(e, r) {
				return this.nextFetchPolicy = n, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(e, r) : t;
			}
		}) : this.reobserve();
	}, t.inactiveOnCreation = new Yr(), t;
}(B);
Oa(Mc);
function Nc(e) {
	globalThis.__DEV__ !== !1 && M.error(33, e.message, e.stack);
}
function Pc(e) {
	globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && M.debug(34, e);
}
function Fc(e) {
	return e === "network-only" || e === "no-cache" || e === "standby";
}
//#endregion
//#region node_modules/@apollo/client/core/QueryInfo.js
var Ic = new (Cn ? WeakMap : Map)();
function Lc(e, t) {
	var n = e[t];
	typeof n == "function" && (e[t] = function() {
		return Ic.set(e, (Ic.get(e) + 1) % 0x38d7ea4c68000), n.apply(this, arguments);
	});
}
var Rc = function() {
	function e(e, t) {
		t === void 0 && (t = e.generateQueryId()), this.queryId = t, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
		var n = this.cache = e.cache;
		Ic.has(n) || (Ic.set(n, 0), Lc(n, "evict"), Lc(n, "modify"), Lc(n, "reset"));
	}
	return e.prototype.init = function(e) {
		var t = e.networkStatus || W.loading;
		return this.variables && this.networkStatus !== W.loading && !U(this.variables, e.variables) && (t = W.setVariables), U(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
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
		if (this.lastDiff && U(t, this.lastDiff.options)) return this.lastDiff.diff;
		this.updateWatch(this.variables);
		var n = this.observableQuery;
		if (n && n.options.fetchPolicy === "no-cache") return { complete: !1 };
		var r = Ga("canonizeResults", function() {
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
		e && !e.complete && Ga("getLastError", function() {
			return t.observableQuery?.getLastError();
		}) || (this.updateLastDiff(e), U(r && r.result, e && e.result) || (n = this.observableQuery) == null || n.scheduleNotify());
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
			var r = A(A({}, this.getDiffOptions(e)), {
				watcher: this,
				callback: function(e) {
					return t.setDiff(e);
				}
			});
			(!this.lastWatch || !U(r, this.lastWatch)) && (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = r));
		}
	}, e.prototype.resetLastWrite = function() {
		this.lastWrite = void 0;
	}, e.prototype.shouldWrite = function(e, t) {
		var n = this.lastWrite;
		return !(n && n.dmCount === Ic.get(this.cache) && U(t, n.variables) && U(e.data, n.result.data));
	}, e.prototype.markResult = function(e, t, n, r) {
		var i = this, a, o = new Yi(), s = Pi(e.errors) ? e.errors.slice(0) : [];
		if ((a = this.observableQuery) == null || a.resetNotifications(), "incremental" in e && Pi(e.incremental)) e.data = Fa(this.getDiff().result, e);
		else if ("hasNext" in e && e.hasNext) {
			var c = this.getDiff();
			e.data = o.merge(c.result, e.data);
		}
		this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({
			result: e.data,
			complete: !0
		}, this.getDiffOptions(n.variables)) : r !== 0 && (zc(e, n.errorPolicy) ? this.cache.performTransaction(function(a) {
			if (i.shouldWrite(e, n.variables)) a.writeQuery({
				query: t,
				data: e.data,
				variables: n.variables,
				overwrite: r === 1
			}), i.lastWrite = {
				result: e,
				variables: n.variables,
				dmCount: Ic.get(i.cache)
			};
			else if (i.lastDiff && i.lastDiff.diff.complete) {
				e.data = i.lastDiff.diff.result;
				return;
			}
			var o = i.getDiffOptions(n.variables), s = Ga("canonizeResults", function() {
				return a.diff(o);
			});
			!i.stopped && U(i.variables, n.variables) && i.updateWatch(n.variables), i.updateLastDiff(s, o), s.complete && (e.data = s.result);
		}) : this.lastWrite = void 0);
	}, e.prototype.markReady = function() {
		return this.networkError = null, this.networkStatus = W.ready;
	}, e.prototype.markError = function(e) {
		var t;
		return this.networkStatus = W.error, this.lastWrite = void 0, (t = this.observableQuery) == null || t.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
	}, e;
}();
function zc(e, t) {
	t === void 0 && (t = "none");
	var n = t === "ignore" || t === "all", r = !Ia(e);
	return !r && n && e.data && (r = !0), r;
}
//#endregion
//#region node_modules/@apollo/client/core/QueryManager.js
var Bc = Object.prototype.hasOwnProperty, Vc = Object.create(null), Hc = function() {
	function e(e) {
		var t = this;
		this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new Gn(qn["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new bn(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
		var n = new Ai(function(e) {
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
		}), this.cancelPendingFetches(De(35));
	}, e.prototype.cancelPendingFetches = function(e) {
		this.fetchCancelFns.forEach(function(t) {
			return t(e);
		}), this.fetchCancelFns.clear();
	}, e.prototype.mutate = function(e) {
		return ue(this, arguments, void 0, function(e) {
			var t, n, r, i, a, o = e.mutation, s = e.variables, c = e.optimisticResponse, l = e.updateQueries, u = e.refetchQueries, d = u === void 0 ? [] : u, f = e.awaitRefetchQueries, p = f === void 0 ? !1 : f, m = e.update, h = e.onQueryUpdated, g = e.fetchPolicy, _ = g === void 0 ? this.defaultOptions.mutate?.fetchPolicy || "network-only" : g, v = e.errorPolicy, y = v === void 0 ? this.defaultOptions.mutate?.errorPolicy || "none" : v, b = e.keepRootFields, x = e.context;
			return de(this, function(e) {
				switch (e.label) {
					case 0: return M(o, 36), M(_ === "network-only" || _ === "no-cache", 37), t = this.generateMutationId(), o = this.cache.transformForLink(this.transform(o)), n = this.getDocumentInfo(o).hasClientExports, s = this.getVariables(o, s), n ? [4, this.localState.addExportedVariables(o, s, x)] : [3, 2];
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
						return Da(a.getObservableFromLink(o, A(A({}, x), { optimisticResponse: i ? c : void 0 }), s, {}, !1), function(e) {
							if (Ia(e) && y === "none") throw new mo({ graphQLErrors: La(e) });
							r && (r.loading = !1, r.error = null);
							var n = A({}, e);
							return typeof d == "function" && (d = d(n)), y === "ignore" && Ia(n) && delete n.errors, a.markMutationResult({
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
								a.broadcastQueries(), (!("hasNext" in n) || n.hasNext === !1) && e(A(A({}, n), { data: a.maskOperation({
									document: o,
									data: n.data,
									fetchPolicy: _,
									id: t
								}) }));
							},
							error: function(e) {
								r && (r.loading = !1, r.error = e), i && a.cache.removeOptimistic(t), a.broadcastQueries(), n(e instanceof mo ? e : new mo({ networkError: e }));
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
		if (!a && zc(r, e.errorPolicy)) {
			if (ja(r) || i.push({
				result: r.data,
				dataId: "ROOT_MUTATION",
				query: e.document,
				variables: e.variables
			}), ja(r) && Pi(r.incremental)) {
				var o = t.diff({
					id: "ROOT_MUTATION",
					query: this.getDocumentInfo(e.document).asQuery,
					variables: e.variables,
					optimistic: !1,
					returnPartialData: !0
				}), s = void 0;
				o.result && (s = Fa(o.result, r)), s !== void 0 && (r.data = s, i.push({
					result: s,
					dataId: "ROOT_MUTATION",
					query: e.document,
					variables: e.variables
				}));
			}
			var c = e.updateQueries;
			c && this.queries.forEach(function(e, a) {
				var o = e.observableQuery, s = o && o.queryName;
				if (!(!s || !Bc.call(c, s))) {
					var l = c[s], u = n.queries.get(a), d = u.document, f = u.variables, p = t.diff({
						query: d,
						variables: f,
						returnPartialData: !0,
						optimistic: !1
					}), m = p.result;
					if (p.complete && m) {
						var h = l(m, {
							mutationResult: r,
							queryName: d && Ir(d) || void 0,
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
					var o = e.update, s = !Na(r) || ja(r) && !r.hasNext;
					if (o) {
						if (!a) {
							var c = t.diff({
								id: "ROOT_MUTATION",
								query: n.getDocumentInfo(e.document).asQuery,
								variables: e.variables,
								optimistic: !1,
								returnPartialData: !0
							});
							c.complete && (r = A(A({}, r), { data: c.result }), "incremental" in r && delete r.incremental, "hasNext" in r && delete r.hasNext);
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
		var n = this, r = typeof e == "function" ? e(t.variables, { IGNORE: Vc }) : e;
		return r === Vc ? !1 : (this.cache.recordOptimisticTransaction(function(e) {
			try {
				n.markMutationResult(A(A({}, t), { result: { data: r } }), e);
			} catch (e) {
				globalThis.__DEV__ !== !1 && M.error(e);
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
				hasClientExports: fn(e),
				hasForcedResolvers: this.localState.shouldForceResolvers(e),
				hasNonreactiveDirective: dn(["nonreactive"], e),
				nonReactiveQuery: Wi(e),
				clientQuery: this.localState.clientQuery(e),
				serverQuery: Bi([
					{
						name: "client",
						remove: !0
					},
					{ name: "connection" },
					{ name: "nonreactive" },
					{ name: "unmask" }
				], e),
				defaultVars: Vr(Fr(e)),
				asQuery: A(A({}, e), { definitions: e.definitions.map(function(e) {
					return e.kind === "OperationDefinition" && e.operation !== "query" ? A(A({}, e), { operation: "query" }) : e;
				}) })
			};
			t.set(e, n);
		}
		return t.get(e);
	}, e.prototype.getVariables = function(e, t) {
		return A(A({}, this.getDocumentInfo(e).defaultVars), t);
	}, e.prototype.watchQuery = function(e) {
		var t = this.transform(e.query);
		e = A(A({}, e), { variables: this.getVariables(t, e.variables) }), e.notifyOnNetworkStatusChange === void 0 && (e.notifyOnNetworkStatusChange = !1);
		var n = new Rc(this), r = new Mc({
			queryManager: this,
			queryInfo: n,
			options: e
		});
		return r.lastQuery = t, Mc.inactiveOnCreation.getValue() || this.queries.set(r.queryId, n), n.init({
			document: t,
			observableQuery: r,
			variables: r.variables
		}), r;
	}, e.prototype.query = function(e, t) {
		var n = this;
		t === void 0 && (t = this.generateQueryId()), M(e.query, 38), M(e.query.kind === "Document", 39), M(!e.returnPartialData, 40), M(!e.pollInterval, 41);
		var r = this.transform(e.query);
		return this.fetchQuery(t, A(A({}, e), { query: r })).then(function(i) {
			return i && A(A({}, i), { data: n.maskOperation({
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
		return e === void 0 && (e = { discardWatches: !0 }), this.cancelPendingFetches(De(42)), this.queries.forEach(function(e) {
			e.observableQuery ? e.networkStatus = W.loading : e.stop();
		}), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e);
	}, e.prototype.getObservableQueries = function(e) {
		var t = this;
		e === void 0 && (e = "active");
		var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
		return Array.isArray(e) && e.forEach(function(e) {
			if (typeof e == "string") r.set(e, e), i.set(e, !1);
			else if (mr(e)) {
				var n = Mi(t.transform(e));
				r.set(n, Ir(e)), i.set(n, !1);
			} else R(e) && e.query && a.add(e);
		}), this.queries.forEach(function(t, r) {
			var a = t.observableQuery, o = t.document;
			if (a) {
				if (e === "all") {
					n.set(r, a);
					return;
				}
				var s = a.queryName;
				if (a.options.fetchPolicy === "standby" || e === "active" && !a.hasObservers()) return;
				(e === "active" || s && i.has(s) || o && i.has(Mi(o))) && (n.set(r, a), s && i.set(s, !0), o && i.set(Mi(o), !0));
			}
		}), a.size && a.forEach(function(e) {
			var r = we("legacyOneTimeQuery"), i = t.getOrCreateQuery(r).init({
				document: e.query,
				variables: e.variables
			}), a = new Mc({
				queryManager: t,
				queryInfo: i,
				options: A(A({}, e), { fetchPolicy: "network-only" })
			});
			M(a.queryId === r), i.setObservableQuery(a), n.set(r, a);
		}), globalThis.__DEV__ !== !1 && i.size && i.forEach(function(e, t) {
			if (!e) {
				var n = r.get(t);
				n ? globalThis.__DEV__ !== !1 && M.warn(43, n) : globalThis.__DEV__ !== !1 && M.warn(44);
			}
		}), n;
	}, e.prototype.reFetchObservableQueries = function(e) {
		var t = this;
		e === void 0 && (e = !1);
		var n = [];
		return this.getObservableQueries(e ? "all" : "active").forEach(function(r, i) {
			var a = r.options.fetchPolicy;
			Ga("resetLastResults", function() {
				return r.resetLastResults();
			}), (e || a !== "standby" && a !== "cache-only") && n.push(r.refetch()), (t.queries.get(i) || r.queryInfo).setDiff(null);
		}), this.broadcastQueries(), Promise.all(n);
	}, e.prototype.startGraphQLSubscription = function(e) {
		var t = this, n = e.query, r = e.variables, i = e.fetchPolicy, a = e.errorPolicy, o = a === void 0 ? "none" : a, s = e.context, c = s === void 0 ? {} : s, l = e.extensions, u = l === void 0 ? {} : l;
		n = this.transform(n), r = this.getVariables(n, r);
		var d = function(e) {
			return t.getObservableFromLink(n, c, e, u).map(function(r) {
				i !== "no-cache" && (zc(r, o) && t.cache.write({
					query: n,
					result: r.data,
					dataId: "ROOT_SUBSCRIPTION",
					variables: e
				}), t.broadcastQueries());
				var a = Ia(r), s = uo(r);
				if (a || s) {
					var c = {};
					if (a && (c.graphQLErrors = r.errors), s && (c.protocolErrors = r.extensions[lo]), o === "none" || s) throw new mo(c);
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
				operationName: Ir(c) || void 0,
				context: this.prepareContext(A(A({}, t), { forceFetch: !i })),
				extensions: r
			};
			if (t = p.context, i) {
				var m = Mi(c), h = lr(n), g = d.lookup(m, h);
				if (o = g.observable, !o) {
					var _ = new Aa([Eo(f, p)]);
					o = g.observable = _, _.beforeNext(function e(t, n) {
						t === "next" && "hasNext" in n && n.hasNext ? _.beforeNext(e) : d.remove(m, h);
					});
				}
			} else o = new Aa([Eo(f, p)]);
		} else o = new Aa([B.of({ data: {} })]), t = this.prepareContext(t);
		return l && (o = Da(o, function(e) {
			return a.localState.runResolvers({
				document: l,
				remoteResult: e,
				context: t,
				variables: n
			});
		})), o;
	}, e.prototype.getResultsFromLink = function(e, t, n) {
		var r = e.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(n.query);
		return Da(this.getObservableFromLink(i, n.context, n.variables), function(a) {
			var o = La(a), s = o.length > 0, c = n.errorPolicy;
			if (r >= e.lastRequestId) {
				if (s && c === "none") throw e.markError(new mo({ graphQLErrors: o }));
				e.markResult(a, i, n, t), e.markReady();
			}
			var l = {
				data: a.data,
				loading: !1,
				networkStatus: W.ready
			};
			return s && c === "none" && (l.data = void 0), s && c !== "ignore" && (l.errors = o, l.networkStatus = W.error), l;
		}, function(t) {
			var n = fo(t) ? t : new mo({ networkError: t });
			throw r >= e.lastRequestId && e.markError(n), n;
		});
	}, e.prototype.fetchConcastWithInfo = function(e, t, n, r) {
		var i = this;
		n === void 0 && (n = W.loading), r === void 0 && (r = t.query);
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
		if (this.getDocumentInfo(g.query).hasClientExports) y = new Aa(this.localState.addExportedVariables(g.query, g.variables, g.context).then(_).then(function(e) {
			return e.sources;
		})), b = !0;
		else {
			var x = _(g.variables);
			b = x.fromLink, y = new Aa(x.sources);
		}
		return y.promise.then(v, v), {
			concast: y,
			fromLink: b
		};
	}, e.prototype.refetchQueries = function(e) {
		var t = this, n = e.updateCache, r = e.include, i = e.optimistic, a = i === void 0 ? !1 : i, o = e.removeOptimistic, s = o === void 0 ? a ? we("refetchQueries") : void 0 : o, c = e.onQueryUpdated, l = /* @__PURE__ */ new Map();
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
				var r = e.watcher instanceof Rc && e.watcher.observableQuery;
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
			c && (a || (a = Ga("canonizeResults", function() {
				return t.cache.diff(r.queryInfo.getDiffOptions());
			})), o = c(r, a, i)), (!c || o === !0) && (o = r.refetch()), o !== !1 && u.set(r, o), n.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(n);
		}), s && this.cache.removeOptimistic(s), u;
	}, e.prototype.maskOperation = function(e) {
		var t = e.document, n = e.data;
		if (globalThis.__DEV__ !== !1) {
			var r = e.fetchPolicy, i = e.id, a = Fr(t)?.operation, o = (a?.[0] ?? "o") + i;
			this.dataMasking && r === "no-cache" && !Nn(t) && !this.noCacheWarningsByQueryId.has(o) && (this.noCacheWarningsByQueryId.add(o), globalThis.__DEV__ !== !1 && M.warn(45, Ir(t) ?? `Unnamed ${a ?? "operation"}`));
		}
		return this.dataMasking ? hs(n, t, this.cache) : n;
	}, e.prototype.maskFragment = function(e) {
		var t = e.data, n = e.fragment, r = e.fragmentName;
		return this.dataMasking ? ms(t, n, this.cache, r) : t;
	}, e.prototype.fetchQueryByPolicy = function(e, t, n) {
		var r = this, i = t.query, a = t.variables, o = t.fetchPolicy, s = t.refetchWritePolicy, c = t.errorPolicy, l = t.returnPartialData, u = t.context, d = t.notifyOnNetworkStatusChange, f = e.networkStatus;
		e.init({
			document: i,
			variables: a,
			networkStatus: n
		});
		var p = function() {
			return e.getDiff();
		}, m = function(t, n) {
			n === void 0 && (n = e.networkStatus || W.loading);
			var o = t.result;
			globalThis.__DEV__ !== !1 && !l && !U(o, {}) && Pc(t.missing);
			var s = function(e) {
				return B.of(A({
					data: e,
					loading: kc(n),
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
			}) : c === "none" && n === W.refetch && Array.isArray(t.missing) ? s(void 0) : s(o);
		}, h = o === "no-cache" ? 0 : n === W.refetch && s !== "merge" ? 1 : 2, g = function() {
			return r.getResultsFromLink(e, h, {
				query: i,
				variables: a,
				context: u,
				fetchPolicy: o,
				errorPolicy: c
			});
		}, _ = d && typeof f == "number" && f !== n && kc(n);
		switch (o) {
			default:
			case "cache-first":
				var v = p();
				return v.complete ? {
					fromLink: !1,
					sources: [m(v, e.markReady())]
				} : l || _ ? {
					fromLink: !0,
					sources: [m(v), g()]
				} : {
					fromLink: !0,
					sources: [g()]
				};
			case "cache-and-network":
				var v = p();
				return v.complete || l || _ ? {
					fromLink: !0,
					sources: [m(v), g()]
				} : {
					fromLink: !0,
					sources: [g()]
				};
			case "cache-only": return {
				fromLink: !1,
				sources: [m(p(), e.markReady())]
			};
			case "network-only": return _ ? {
				fromLink: !0,
				sources: [m(p()), g()]
			} : {
				fromLink: !0,
				sources: [g()]
			};
			case "no-cache": return _ ? {
				fromLink: !0,
				sources: [m(e.getDiff()), g()]
			} : {
				fromLink: !0,
				sources: [g()]
			};
			case "standby": return {
				fromLink: !1,
				sources: []
			};
		}
	}, e.prototype.getOrCreateQuery = function(e) {
		return e && !this.queries.has(e) && this.queries.set(e, new Rc(this, e)), this.queries.get(e);
	}, e.prototype.prepareContext = function(e) {
		e === void 0 && (e = {});
		var t = this.localState.prepareContext(e);
		return A(A(A({}, this.defaultContext), t), { clientAwareness: this.clientAwareness });
	}, e;
}(), Uc = function() {
	function e(e) {
		var t = e.cache, n = e.client, r = e.resolvers, i = e.fragmentMatcher;
		this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = t, n && (this.client = n), r && this.addResolvers(r), i && this.setFragmentMatcher(i);
	}
	return e.prototype.addResolvers = function(e) {
		var t = this;
		this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(e) {
			t.resolvers = Ki(t.resolvers, e);
		}) : this.resolvers = Ki(this.resolvers, e);
	}, e.prototype.setResolvers = function(e) {
		this.resolvers = {}, this.addResolvers(e);
	}, e.prototype.getResolvers = function() {
		return this.resolvers || {};
	}, e.prototype.runResolvers = function(e) {
		return ue(this, arguments, void 0, function(e) {
			var t = e.document, n = e.remoteResult, r = e.context, i = e.variables, a = e.onlyRunForcedResolvers, o = a === void 0 ? !1 : a;
			return de(this, function(e) {
				return t ? [2, this.resolveDocument(t, n.data, r, i, this.fragmentMatcher, o).then(function(e) {
					return A(A({}, n), { data: e.result });
				})] : [2, n];
			});
		});
	}, e.prototype.setFragmentMatcher = function(e) {
		this.fragmentMatcher = e;
	}, e.prototype.getFragmentMatcher = function() {
		return this.fragmentMatcher;
	}, e.prototype.clientQuery = function(e) {
		return dn(["client"], e) && this.resolvers ? e : null;
	}, e.prototype.serverQuery = function(e) {
		return Ui(e);
	}, e.prototype.prepareContext = function(e) {
		var t = this.cache;
		return A(A({}, e), {
			cache: t,
			getCacheKey: function(e) {
				return t.identify(e);
			}
		});
	}, e.prototype.addExportedVariables = function(e) {
		return ue(this, arguments, void 0, function(e, t, n) {
			return t === void 0 && (t = {}), n === void 0 && (n = {}), de(this, function(r) {
				return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(n), t).then(function(e) {
					return A(A({}, t), e.exportedVariables);
				})] : [2, A({}, t)];
			});
		});
	}, e.prototype.shouldForceResolvers = function(e) {
		var t = !1;
		return en(e, { Directive: { enter: function(e) {
			if (e.name.value === "client" && e.arguments && (t = e.arguments.some(function(e) {
				return e.name.value === "always" && e.value.kind === "BooleanValue" && e.value.value === !0;
			}), t)) return $t;
		} } }), t;
	}, e.prototype.buildRootValueFromCache = function(e, t) {
		return this.cache.diff({
			query: Hi(e),
			variables: t,
			returnPartialData: !0,
			optimistic: !1
		}).result;
	}, e.prototype.resolveDocument = function(e, t) {
		return ue(this, arguments, void 0, function(e, t, n, r, i, a) {
			var o, s, c, l, u, d, f, p, m, h, g;
			return n === void 0 && (n = {}), r === void 0 && (r = {}), i === void 0 && (i = function() {
				return !0;
			}), a === void 0 && (a = !1), de(this, function(_) {
				return o = Br(e), s = Lr(e), c = jn(s), l = this.collectSelectionsToResolve(o, c), u = o.operation, d = u ? u.charAt(0).toUpperCase() + u.slice(1) : "Query", f = this, p = f.cache, m = f.client, h = {
					fragmentMap: c,
					context: A(A({}, n), {
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
		return ue(this, void 0, void 0, function() {
			var i, a, o, s, c, l = this;
			return de(this, function(u) {
				return i = r.fragmentMap, a = r.context, o = r.variables, s = [n], c = function(e) {
					return ue(l, void 0, void 0, function() {
						var c, l;
						return de(this, function(u) {
							return !t && !r.selectionsToResolve.has(e) || !un(e, o) ? [2] : Mr(e) ? [2, this.resolveField(e, t, n, r).then(function(t) {
								var n;
								t !== void 0 && s.push((n = {}, n[Ar(e)] = t, n));
							})] : (Nr(e) ? c = e : (c = i[e.name.value], M(c, 21, e.name.value)), c && c.typeCondition && (l = c.typeCondition.name.value, r.fragmentMatcher(n, l, a)) ? [2, this.resolveSelectionSet(c.selectionSet, t, n, r).then(function(e) {
								s.push(e);
							})] : [2]);
						});
					});
				}, [2, Promise.all(e.selections.map(c)).then(function() {
					return qi(s);
				})];
			});
		});
	}, e.prototype.resolveField = function(e, t, n, r) {
		return ue(this, void 0, void 0, function() {
			var i, a, o, s, c, l, u, d, f, p = this;
			return de(this, function(m) {
				return n ? (i = r.variables, a = e.name.value, o = Ar(e), s = a !== o, c = n[o] || n[a], l = Promise.resolve(c), (!r.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (u = n.__typename || r.defaultOperationType, d = this.resolvers && this.resolvers[u], d && (f = d[s ? a : o], f && (l = Promise.resolve(Js.withValue(this.cache, f, [
					n,
					kr(e, i),
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
				r.set(e, a), en(e, {
					Directive: function(e, t, r, i, o) {
						e.name.value === "client" && o.forEach(function(e) {
							n(e) && ln(e) && a.add(e);
						});
					},
					FragmentSpread: function(e, r, o, s, c) {
						var l = t[e.name.value];
						M(l, 22, e.name.value);
						var u = i(l);
						u.size > 0 && (c.forEach(function(e) {
							n(e) && ln(e) && a.add(e);
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
}(), Wc = !1, Gc = function() {
	function e(e) {
		var t = this;
		if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache) throw De(16);
		var n = e.uri, r = e.credentials, i = e.headers, a = e.cache, o = e.documentTransform, s = e.ssrMode, c = s === void 0 ? !1 : s, l = e.ssrForceFetchDelay, u = l === void 0 ? 0 : l, d = e.connectToDevTools, f = e.queryDeduplication, p = f === void 0 ? !0 : f, m = e.defaultOptions, h = e.defaultContext, g = e.assumeImmutableResults, _ = g === void 0 ? a.assumeImmutableResults : g, v = e.resolvers, y = e.typeDefs, b = e.fragmentMatcher, x = e.clientAwareness, S = e.name, C = e.version, w = e.devtools, T = e.dataMasking;
		globalThis.__DEV__ !== !1 && (V(e, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead."), V(e, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead."), V(e, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead."), V(e, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead."), V(e, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead."), V(e, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead."), V(e, "typeDefs", "ApolloClient"), e.link || globalThis.__DEV__ !== !1 && M.warn(17));
		var E = e.link;
		E || (E = n ? new es({
			uri: n,
			credentials: r,
			headers: i
		}) : wo.empty()), this.link = E, this.cache = a, this.disableNetworkFetches = c || u > 0, this.queryDeduplication = p, this.defaultOptions = m || Object.create(null), this.typeDefs = y, this.devtoolsConfig = A(A({}, w), { enabled: w?.enabled ?? d }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), u && setTimeout(function() {
			return t.disableNetworkFetches = !1;
		}, u), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = be, this.localState = new Uc({
			cache: a,
			client: this,
			resolvers: v,
			fragmentMatcher: b
		}), this.queryManager = new Hc({
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
			(e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, !Wc && globalThis.__DEV__ !== !1 && (Wc = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
				if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
					var e = window.navigator, t = e && e.userAgent, n = void 0;
					typeof t == "string" && (t.indexOf("Chrome/") > -1 ? n = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : t.indexOf("Firefox/") > -1 && (n = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), n && globalThis.__DEV__ !== !1 && M.log("Download the Apollo DevTools for a better development experience: %s", n);
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
		return this.defaultOptions.watchQuery && (e = za(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = A(A({}, e), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (V(e, "canonizeResults", "client.watchQuery"), V(e, "partialRefetch", "client.watchQuery")), this.queryManager.watchQuery(e);
	}, e.prototype.query = function(e) {
		return this.defaultOptions.query && (e = za(this.defaultOptions.query, e)), M(e.fetchPolicy !== "cache-and-network", 18), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = A(A({}, e), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (V(e, "canonizeResults", "client.query"), V(e, "notifyOnNetworkStatusChange", "client.query", "This option does not affect `client.query` and can be safely removed."), e.fetchPolicy === "standby" && globalThis.__DEV__ !== !1 && M.warn(19)), this.queryManager.query(e);
	}, e.prototype.mutate = function(e) {
		return this.defaultOptions.mutate && (e = za(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
	}, e.prototype.subscribe = function(e) {
		var t = this, n = this.queryManager.generateQueryId();
		return this.queryManager.startGraphQLSubscription(e).map(function(r) {
			return A(A({}, r), { data: t.queryManager.maskOperation({
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
		return this.cache.watchFragment(A(A({}, e), (t = {}, t[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, t)));
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
		return Eo(this.link, e);
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
			globalThis.__DEV__ !== !1 && M.debug(20, e);
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
globalThis.__DEV__ !== !1 && (Gc.prototype.getMemoryInternals = Xn);
//#endregion
//#region node_modules/graphql-tag/lib/index.js
var Kc = /* @__PURE__ */ new Map(), qc = /* @__PURE__ */ new Map(), Jc = !0, Yc = !1;
function Xc(e) {
	return e.replace(/[\s,]+/g, " ").trim();
}
function Zc(e) {
	return Xc(e.source.body.substring(e.start, e.end));
}
function Qc(e) {
	var t = /* @__PURE__ */ new Set(), n = [];
	return e.definitions.forEach(function(e) {
		if (e.kind === "FragmentDefinition") {
			var r = e.name.value, i = Zc(e.loc), a = qc.get(r);
			a && !a.has(i) ? Jc && console.warn("Warning: fragment with name " + r + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : a || qc.set(r, a = /* @__PURE__ */ new Set()), a.add(i), t.has(i) || (t.add(i), n.push(e));
		} else n.push(e);
	}), A(A({}, e), { definitions: n });
}
function $c(e) {
	var t = new Set(e.definitions);
	t.forEach(function(e) {
		e.loc && delete e.loc, Object.keys(e).forEach(function(n) {
			var r = e[n];
			r && typeof r == "object" && t.add(r);
		});
	});
	var n = e.loc;
	return n && (delete n.startToken, delete n.endToken), e;
}
function el(e) {
	var t = Xc(e);
	if (!Kc.has(t)) {
		var n = Gt(e, {
			experimentalFragmentVariables: Yc,
			allowLegacyFragmentVariables: Yc
		});
		if (!n || n.kind !== "Document") throw Error("Not a valid GraphQL document.");
		Kc.set(t, $c(Qc(n)));
	}
	return Kc.get(t);
}
function G(e) {
	var t = [...arguments].slice(1);
	typeof e == "string" && (e = [e]);
	var n = e[0];
	return t.forEach(function(t, r) {
		t && t.kind === "Document" ? n += t.loc.source.body : n += t, n += e[r + 1];
	}), el(n);
}
function tl() {
	Kc.clear(), qc.clear();
}
function nl() {
	Jc = !1;
}
function rl() {
	Yc = !0;
}
function il() {
	Yc = !1;
}
var al = {
	gql: G,
	resetCaches: tl,
	disableFragmentWarnings: nl,
	enableExperimentalFragmentVariables: rl,
	disableExperimentalFragmentVariables: il
};
(function(e) {
	e.gql = al.gql, e.resetCaches = al.resetCaches, e.disableFragmentWarnings = al.disableFragmentWarnings, e.enableExperimentalFragmentVariables = al.enableExperimentalFragmentVariables, e.disableExperimentalFragmentVariables = al.disableExperimentalFragmentVariables;
})(G || (G = {})), G.default = G;
//#endregion
//#region node_modules/@apollo/client/react/parser/index.js
var ol;
(function(e) {
	e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription";
})(ol || (ol = {}));
var sl;
function cl(e) {
	var t;
	switch (e) {
		case ol.Query:
			t = "Query";
			break;
		case ol.Mutation:
			t = "Mutation";
			break;
		case ol.Subscription:
			t = "Subscription";
			break;
	}
	return t;
}
function ll(e) {
	Ka("parser", function() {
		globalThis.__DEV__ !== !1 && M.warn(93);
	}), sl || (sl = new Gn(qn.parser || 1e3));
	var t = sl.get(e);
	if (t) return t;
	var n, r, i;
	M(!!e && !!e.kind, 94, e);
	for (var a = [], o = [], s = [], c = [], l = 0, u = e.definitions; l < u.length; l++) {
		var d = u[l];
		if (d.kind === "FragmentDefinition") {
			a.push(d);
			continue;
		}
		if (d.kind === "OperationDefinition") switch (d.operation) {
			case "query":
				o.push(d);
				break;
			case "mutation":
				s.push(d);
				break;
			case "subscription":
				c.push(d);
				break;
		}
	}
	M(!a.length || o.length || s.length || c.length, 95), M(o.length + s.length + c.length <= 1, 96, e, o.length, c.length, s.length), r = o.length ? ol.Query : ol.Mutation, !o.length && !s.length && (r = ol.Subscription);
	var f = o.length ? o : s.length ? s : c;
	M(f.length === 1, 97, e, f.length);
	var p = f[0];
	n = p.variableDefinitions || [], i = p.name && p.name.kind === "Name" ? p.name.value : "data";
	var m = {
		name: i,
		type: r,
		variables: n
	};
	return sl.set(e, m), m;
}
ll.resetCache = function() {
	sl = void 0;
}, globalThis.__DEV__ !== !1 && Yn("parser", function() {
	return sl ? sl.size : 0;
});
function ul(e, t) {
	var n = Ga("parser", ll, [e]), r = cl(t), i = cl(n.type);
	M(n.type === t, 98, r, r, i);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js
var dl = Dn ? H.useLayoutEffect : H.useEffect, fl;
function pl() {}
function ml() {
	return fl || (fl = H.createContext(null)), H.useCallback(function() {
		var e = console.error;
		try {
			return console.error = pl, H.useContext(fl), !0;
		} catch {
			return !1;
		} finally {
			console.error = e;
		}
	}, []);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/useWarnRemovedOption.js
function hl(e, t, n, r) {
	"use no memo";
	r === void 0 && (r = "Please remove this option.");
	var i = H.useRef(!1);
	globalThis.__DEV__ !== !1 && t in e && !i.current && (V(e, t, n, r), i.current = !0);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/wrapHook.js
var gl = Symbol.for("apollo.hook.wrappers");
function _l(e, t, n) {
	var r = n.queryManager, i = r && r[gl], a = i && i[e];
	return a ? a(t) : t;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useQuery.js
var vl = Object.prototype.hasOwnProperty;
function yl() {}
var bl = Symbol();
function xl(e, t) {
	return t === void 0 && (t = Object.create(null)), _l("useQuery", Sl, Ya(t && t.client))(e, t);
}
function Sl(e, t) {
	globalThis.__DEV__ !== !1 && (hl(t, "canonizeResults", "useQuery"), hl(t, "partialRefetch", "useQuery"), hl(t, "defaultOptions", "useQuery", "Pass the options directly to the hook instead."), hl(t, "onCompleted", "useQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), hl(t, "onError", "useQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));
	var n = wl(e, t), r = n.result, i = n.obsQueryFields;
	return H.useMemo(function() {
		return A(A({}, r), i);
	}, [r, i]);
}
function Cl(e, t, n, r, i) {
	function a(a) {
		return ul(t, ol.Query), {
			client: e,
			query: t,
			observable: r && r.getSSRObservable(i()) || Mc.inactiveOnCreation.withValue(!r, function() {
				return Ga(["canonizeResults", "partialRefetch"], function() {
					return e.watchQuery(kl(void 0, e, n, i()));
				});
			}),
			resultData: { previousData: a?.resultData.current?.data }
		};
	}
	var o = H.useState(a), s = o[0], c = o[1];
	function l(e) {
		var t;
		Object.assign(s.observable, (t = {}, t[bl] = e, t));
		var n = s.resultData;
		c(A(A({}, s), {
			query: e.query,
			resultData: Object.assign(n, {
				previousData: n.current?.data || n.previousData,
				current: void 0
			})
		}));
	}
	if (e !== s.client || t !== s.query) {
		var u = a(s);
		return c(u), [u, l];
	}
	return [s, l];
}
function wl(e, t) {
	var n = Ya(t.client), r = H.useContext(Ja()).renderPromises, i = !!r, a = n.disableNetworkFetches, o = t.ssr !== !1 && !t.skip, s = t.partialRefetch, c = Ol(n, e, t, i), l = Cl(n, e, t, r, c), u = l[0], d = u.observable, f = u.resultData, p = l[1], m = c(d);
	Dl(f, d, n, t, m);
	var h = H.useMemo(function() {
		return zl(d);
	}, [d]);
	return El(d, r, o), {
		result: Tl(f, d, n, t, m, a, s, i, {
			onCompleted: t.onCompleted || yl,
			onError: t.onError || yl
		}),
		obsQueryFields: h,
		observable: d,
		resultData: f,
		client: n,
		onQueryExecuted: p
	};
}
function Tl(e, t, n, r, i, a, o, s, c) {
	var l = H.useRef(c);
	H.useEffect(function() {
		l.current = c;
	});
	var u = (s || a) && r.ssr === !1 && !r.skip ? Ll : r.skip || i.fetchPolicy === "standby" ? Rl : void 0, d = e.previousData, f = H.useMemo(function() {
		return u && Fl(u, d, t, n);
	}, [
		n,
		t,
		u,
		d
	]);
	return Za(H.useCallback(function(r) {
		if (s) return function() {};
		var i = function() {
			var i = e.current, a = t.getCurrentResult();
			i && i.loading === a.loading && i.networkStatus === a.networkStatus && U(i.data, a.data) || Al(a, e, t, n, o, r, l.current);
		}, a = function(s) {
			if (c.current.unsubscribe(), c.current = t.resubscribeAfterError(i, a), !vl.call(s, "graphQLErrors")) throw s;
			var u = e.current;
			(!u || u && u.loading || !U(s, u.error)) && Al({
				data: u && u.data,
				error: s,
				loading: !1,
				networkStatus: W.error
			}, e, t, n, o, r, l.current);
		}, c = { current: t.subscribe(i, a) };
		return function() {
			setTimeout(function() {
				return c.current.unsubscribe();
			});
		};
	}, [
		a,
		s,
		t,
		e,
		o,
		n
	]), function() {
		return f || Ml(e, t, l.current, o, n);
	}, function() {
		return f || Ml(e, t, l.current, o, n);
	});
}
function El(e, t, n) {
	t && n && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e));
}
function Dl(e, t, n, r, i) {
	t[bl] && !U(t[bl], i) && (t.reobserve(kl(t, n, r, i)), e.previousData = e.current?.data || e.previousData, e.current = void 0), t[bl] = i;
}
function Ol(e, t, n, r) {
	n === void 0 && (n = {});
	var i = n.skip;
	n.ssr, n.onCompleted, n.onError;
	var a = n.defaultOptions, o = le(n, [
		"skip",
		"ssr",
		"onCompleted",
		"onError",
		"defaultOptions"
	]);
	return function(n) {
		var s = Object.assign(o, { query: t });
		return r && (s.fetchPolicy === "network-only" || s.fetchPolicy === "cache-and-network") && (s.fetchPolicy = "cache-first"), s.variables || (s.variables = {}), i ? (s.initialFetchPolicy = s.initialFetchPolicy || s.fetchPolicy || Nl(a, e.defaultOptions), s.fetchPolicy = "standby") : s.fetchPolicy || (s.fetchPolicy = n?.options.initialFetchPolicy || Nl(a, e.defaultOptions)), s;
	};
}
function kl(e, t, n, r) {
	var i = [], a = t.defaultOptions.watchQuery;
	return a && i.push(a), n.defaultOptions && i.push(n.defaultOptions), i.push(Ra(e && e.options, r)), i.reduce(za);
}
function Al(e, t, n, r, i, a, o) {
	var s = t.current;
	s && s.data && (t.previousData = s.data), !e.error && Pi(e.errors) && (e.error = new mo({ graphQLErrors: e.errors })), t.current = Fl(Il(e, n, i), t.previousData, n, r), a(), jl(e, s?.networkStatus, o);
}
function jl(e, t, n) {
	if (!e.loading) {
		var r = Pl(e);
		Promise.resolve().then(function() {
			r ? n.onError(r) : e.data && t !== e.networkStatus && e.networkStatus === W.ready && n.onCompleted(e.data);
		}).catch(function(e) {
			globalThis.__DEV__ !== !1 && M.warn(e);
		});
	}
}
function Ml(e, t, n, r, i) {
	return e.current || Al(t.getCurrentResult(), e, t, i, r, function() {}, n), e.current;
}
function Nl(e, t) {
	return e?.fetchPolicy || t?.watchQuery?.fetchPolicy || "cache-first";
}
function Pl(e) {
	return Pi(e.errors) ? new mo({ graphQLErrors: e.errors }) : e.error;
}
function Fl(e, t, n, r) {
	var i = e.data;
	e.partial;
	var a = le(e, ["data", "partial"]);
	return A(A({ data: i }, a), {
		client: r,
		observable: n,
		variables: n.variables,
		called: e !== Ll && e !== Rl,
		previousData: t
	});
}
function Il(e, t, n) {
	return e.partial && n && !e.loading && (!e.data || Object.keys(e.data).length === 0) && t.options.fetchPolicy !== "cache-only" ? (t.refetch(), A(A({}, e), {
		loading: !0,
		networkStatus: W.refetch
	})) : e;
}
var Ll = Ta({
	loading: !0,
	data: void 0,
	error: void 0,
	networkStatus: W.loading
}), Rl = Ta({
	loading: !1,
	data: void 0,
	error: void 0,
	networkStatus: W.ready
});
function zl(e) {
	return {
		refetch: e.refetch.bind(e),
		reobserve: function() {
			var t = [...arguments];
			return globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && M.warn(83), e.reobserve.apply(e, t);
		},
		fetchMore: e.fetchMore.bind(e),
		updateQuery: e.updateQuery.bind(e),
		startPolling: e.startPolling.bind(e),
		stopPolling: e.stopPolling.bind(e),
		subscribeToMore: e.subscribeToMore.bind(e)
	};
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useLazyQuery.js
var Bl = [
	"refetch",
	"reobserve",
	"fetchMore",
	"updateQuery",
	"startPolling",
	"stopPolling",
	"subscribeToMore"
], Vl = [
	"initialFetchPolicy",
	"onCompleted",
	"onError",
	"defaultOptions",
	"partialRefetch",
	"canonizeResults"
], Hl = [
	"query",
	"ssr",
	"client",
	"fetchPolicy",
	"nextFetchPolicy",
	"refetchWritePolicy",
	"errorPolicy",
	"pollInterval",
	"notifyOnNetworkStatusChange",
	"returnPartialData",
	"skipPollAttempt"
];
function Ul(e, t) {
	if (globalThis.__DEV__ !== !1) {
		var n = t || {};
		hl(n, "canonizeResults", "useLazyQuery"), hl(n, "variables", "useLazyQuery", "Pass all `variables` to the returned `execute` function instead."), hl(n, "context", "useLazyQuery", "Pass `context` to the returned `execute` function instead."), hl(n, "onCompleted", "useLazyQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), hl(n, "onError", "useLazyQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."), hl(n, "defaultOptions", "useLazyQuery", "Pass the options directly to the hook instead."), hl(n, "initialFetchPolicy", "useLazyQuery", "Use the `fetchPolicy` option instead."), hl(n, "partialRefetch", "useLazyQuery");
	}
	var r = H.useRef(void 0), i = H.useRef(void 0), a = H.useRef(void 0), o = za(t, r.current || {}), s = o?.query ?? e;
	i.current = t, a.current = s;
	var c = A(A({}, o), { skip: !r.current }), l = wl(s, c), u = l.obsQueryFields, d = l.result, f = l.client, p = l.resultData, m = l.observable, h = l.onQueryExecuted, g = m.options.initialFetchPolicy || Nl(c.defaultOptions, f.defaultOptions), _ = H.useReducer(function(e) {
		return e + 1;
	}, 0)[1], v = H.useMemo(function() {
		for (var e = {}, t = function(t) {
			var n = u[t];
			e[t] = function() {
				return globalThis.__DEV__ !== !1 && t === "reobserve" && globalThis.__DEV__ !== !1 && M.warn(79), r.current || (r.current = Object.create(null), _()), n.apply(this, arguments);
			};
		}, n = 0, i = Bl; n < i.length; n++) {
			var a = i[n];
			t(a);
		}
		return e;
	}, [_, u]), y = !!r.current, b = H.useMemo(function() {
		return A(A(A({}, d), v), { called: y });
	}, [
		d,
		v,
		y
	]), x = ml(), S = H.useRef(/* @__PURE__ */ new Set()), C = H.useCallback(function(e) {
		if (globalThis.__DEV__ !== !1) {
			x() && globalThis.__DEV__ !== !1 && M.warn(80);
			for (var t = 0, n = Vl; t < n.length; t++) {
				var o = n[t];
				S.current.has(o) || (V(e || {}, o, "useLazyQuery.execute"), S.current.add(o));
			}
			for (var c = 0, l = Hl; c < l.length; c++) {
				var u = l[c];
				S.current.has(u) || (V(e || {}, u, "useLazyQuery.execute", "Please pass the option to the `useLazyQuery` hook instead."), S.current.add(u));
			}
		}
		r.current = e ? A(A({}, e), { fetchPolicy: e.fetchPolicy || g }) : { fetchPolicy: g };
		var d = Wl(p, m, f, s, A(A({}, za(i.current, A({ query: a.current }, r.current))), { skip: !1 }), h).then(function(e) {
			return Object.assign(e, v);
		});
		return d.catch(function() {}), d;
	}, [
		x,
		f,
		s,
		v,
		g,
		m,
		p,
		h
	]), w = H.useRef(C);
	return dl(function() {
		w.current = C;
	}), [H.useCallback(function() {
		var e = [...arguments];
		return w.current.apply(w, e);
	}, []), b];
}
function Wl(e, t, n, r, i, a) {
	var o = Ol(n, i.query || r, i, !1)(t), s = t.reobserveAsConcast(kl(t, n, i, o));
	return a(o), new Promise(function(r) {
		var i;
		s.subscribe({
			next: function(e) {
				i = e;
			},
			error: function() {
				r(Fl(t.getCurrentResult(), e.previousData, t, n));
			},
			complete: function() {
				r(Fl(t.maskResult(i), e.previousData, t, n));
			}
		});
	});
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useMutation.js
function Gl(e, t) {
	globalThis.__DEV__ !== !1 && hl(t || {}, "ignoreResults", "useMutation", "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");
	var n = Ya(t?.client);
	ul(e, ol.Mutation);
	var r = H.useState({
		called: !1,
		loading: !1,
		client: n
	}), i = r[0], a = r[1], o = H.useRef({
		result: i,
		mutationId: 0,
		isMounted: !0,
		client: n,
		mutation: e,
		options: t
	});
	dl(function() {
		Object.assign(o.current, {
			client: n,
			options: t,
			mutation: e
		});
	});
	var s = H.useCallback(function(e) {
		e === void 0 && (e = {});
		var t = o.current, n = t.options, r = t.mutation, i = A(A({}, n), { mutation: r }), s = e.client || o.current.client;
		!o.current.result.loading && !i.ignoreResults && o.current.isMounted && a(o.current.result = {
			loading: !0,
			error: void 0,
			data: void 0,
			called: !0,
			client: s
		});
		var c = ++o.current.mutationId, l = za(i, e);
		return s.mutate(l).then(function(t) {
			var n = t.data, r = t.errors, i = r && r.length > 0 ? new mo({ graphQLErrors: r }) : void 0, u = e.onError || o.current.options?.onError;
			if (i && u && u(i, l), c === o.current.mutationId && !l.ignoreResults) {
				var d = {
					called: !0,
					loading: !1,
					data: n,
					error: i,
					client: s
				};
				o.current.isMounted && !U(o.current.result, d) && a(o.current.result = d);
			}
			var f = e.onCompleted || o.current.options?.onCompleted;
			return i || f?.(t.data, l), t;
		}, function(t) {
			if (c === o.current.mutationId && o.current.isMounted) {
				var n = {
					loading: !1,
					error: t,
					data: void 0,
					called: !0,
					client: s
				};
				U(o.current.result, n) || a(o.current.result = n);
			}
			var r = e.onError || o.current.options?.onError;
			if (r) return r(t, l), {
				data: void 0,
				errors: t
			};
			throw t;
		});
	}, []), c = H.useCallback(function() {
		if (o.current.isMounted) {
			var e = {
				called: !1,
				loading: !1,
				client: o.current.client
			};
			Object.assign(o.current, {
				mutationId: 0,
				result: e
			}), a(e);
		}
	}, []);
	return H.useEffect(function() {
		var e = o.current;
		return e.isMounted = !0, function() {
			e.isMounted = !1;
		};
	}, []), [s, A({ reset: c }, i)];
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function Kl(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function ql(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Kl(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Kl(e[t], null);
			}
		};
	};
}
function Jl(...e) {
	return v.useCallback(ql(...e), e);
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var Yl = class extends v.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (c(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = c(e) && e.offsetWidth || 0, r = c(e) && e.offsetHeight || 0, i = getComputedStyle(t), a = this.props.sizeRef.current;
			a.height = parseFloat(i.height), a.width = parseFloat(i.width), a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left, a.bottom = r - a.height - a.top;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function Xl({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
	let o = E(), s = ne(null), c = ne({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}), { nonce: u } = w(l), d = Jl(s, e.props?.ref ?? e?.ref);
	return ee(() => {
		let { width: e, height: l, top: d, left: f, right: p, bottom: m } = c.current;
		if (t || a === !1 || !s.current || !e || !l) return;
		let h = n === "left" ? `left: ${f}` : `right: ${p}`, g = r === "bottom" ? `bottom: ${m}` : `top: ${d}`;
		s.current.dataset.motionPopId = o;
		let _ = document.createElement("style");
		u && (_.nonce = u);
		let v = i ?? document.head;
		return v.appendChild(_), _.sheet && _.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `), () => {
			s.current?.removeAttribute("data-motion-pop-id"), v.contains(_) && v.removeChild(_);
		};
	}, [t]), O(Yl, {
		isPresent: t,
		childRef: s,
		sizeRef: c,
		pop: a,
		children: a === !1 ? e : v.cloneElement(e, { ref: d })
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var Zl = ({ children: e, initial: t, isPresent: r, onExitComplete: i, custom: a, presenceAffectsLayout: o, mode: c, anchorX: l, anchorY: u, root: d }) => {
	let f = n(Ql), p = E(), m = !0, h = te(() => (m = !1, {
		id: p,
		initial: t,
		isPresent: r,
		custom: a,
		onExitComplete: (e) => {
			f.set(e, !0);
			for (let e of f.values()) if (!e) return;
			i && i();
		},
		register: (e) => (f.set(e, !1), () => f.delete(e))
	}), [
		r,
		f,
		i
	]);
	return o && m && (h = { ...h }), te(() => {
		f.forEach((e, t) => f.set(t, !1));
	}, [r]), v.useEffect(() => {
		!r && !f.size && i && i();
	}, [r]), e = O(Xl, {
		pop: c === "popLayout",
		isPresent: r,
		anchorX: l,
		anchorY: u,
		root: d,
		children: e
	}), O(s.Provider, {
		value: h,
		children: e
	});
};
function Ql() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var $l = (e) => e.key || "";
function eu(e) {
	let t = [];
	return y.forEach(e, (e) => {
		S(e) && t.push(e);
	}), t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var tu = ({ children: e, custom: t, initial: r = !0, onExitComplete: i, presenceAffectsLayout: s = !0, mode: c = "sync", propagate: l = !1, anchorX: d = "left", anchorY: f = "top", root: p }) => {
	let [m, h] = a(l), g = te(() => eu(e), [e]), _ = l && !m ? [] : g.map($l), v = ne(!0), y = ne(g), b = n(() => /* @__PURE__ */ new Map()), x = ne(/* @__PURE__ */ new Set()), [S, C] = re(g), [T, E] = re(g);
	o(() => {
		v.current = !1, y.current = g;
		for (let e = 0; e < T.length; e++) {
			let t = $l(T[e]);
			_.includes(t) ? (b.delete(t), x.current.delete(t)) : b.get(t) !== !0 && b.set(t, !1);
		}
	}, [
		T,
		_.length,
		_.join("-")
	]);
	let ee = [];
	if (g !== S) {
		let e = [...g];
		for (let t = 0; t < T.length; t++) {
			let n = T[t], r = $l(n);
			_.includes(r) || (e.splice(t, 0, n), ee.push(n));
		}
		return c === "wait" && ee.length && (e = ee), E(eu(e)), C(g), null;
	}
	let { forceRender: D } = w(u);
	return O(ie, { children: T.map((e) => {
		let n = $l(e), a = l && !m ? !1 : g === T || _.includes(n);
		return O(Zl, {
			isPresent: a,
			initial: !v.current || r ? void 0 : !1,
			custom: t,
			presenceAffectsLayout: s,
			mode: c,
			root: p,
			onExitComplete: a ? void 0 : () => {
				if (x.current.has(n)) return;
				if (b.has(n)) x.current.add(n), b.set(n, !0);
				else return;
				let e = !0;
				b.forEach((t) => {
					t || (e = !1);
				}), e && (D?.(), E(y.current), l && h?.(), i && i());
			},
			anchorX: d,
			anchorY: f,
			children: e
		}, n);
	}) });
}, nu = "https://cdn.wexio.io";
function ru(e) {
	return /^https?:\/\//.test(e) ? e : nu + (e.startsWith("/") ? e : `/${e}`);
}
//#endregion
//#region lib/graphql/queries/generated/messaging.generated.tsx
Mt();
var iu = {}, au = G`
    mutation StartAnonymousVisitor($input: VisitorAnonymousAuthInput!) {
  startAnonymousVisitor(input: $input) {
    token
    expiresIn
    chatId
    peopleId
    visitorId
    kind
    displayName
    shortHandle
  }
}
    `;
function ou(e) {
	return Gl(au, {
		...iu,
		...e
	});
}
var su = G`
    mutation StartIdentifiedVisitor($input: VisitorIdentifiedAuthInput!) {
  startIdentifiedVisitor(input: $input) {
    token
    expiresIn
    chatId
    peopleId
    visitorId
    kind
    displayName
    shortHandle
  }
}
    `;
function cu(e) {
	return Gl(su, {
		...iu,
		...e
	});
}
var lu = G`
    mutation SendVisitorMessage($input: VisitorSendMessageInput!) {
  sendVisitorMessage(input: $input) {
    ok
    messageId
  }
}
    `;
function uu(e) {
	return Gl(lu, {
		...iu,
		...e
	});
}
G`
    mutation MarkVisitorMessageRead($messageId: String!) {
  markVisitorMessageRead(messageId: $messageId) {
    ok
  }
}
    `;
var du = G`
    mutation MarkVisitorChatRead($chatId: String!) {
  markVisitorChatRead(chatId: $chatId) {
    count
  }
}
    `;
function fu(e) {
	return Gl(du, {
		...iu,
		...e
	});
}
var pu = G`
    query VisitorChatUnread($chatId: String!) {
  visitorChatUnread(chatId: $chatId) {
    count
    lastMessage {
      id
      text
      buttons
      createdAt
      sender {
        kind
        name
        avatar
      }
    }
  }
}
    `;
function mu(e) {
	return Ul(pu, {
		...iu,
		...e
	});
}
var hu = G`
    mutation SignalVisitorTyping {
  signalVisitorTyping {
    ok
  }
}
    `;
function gu(e) {
	return Gl(hu, {
		...iu,
		...e
	});
}
var _u = G`
    mutation UploadVisitorMedia($input: VisitorUploadInputType!) {
  uploadVisitorMedia(input: $input) {
    url
    mediaId
    mimetype
    size
  }
}
    `;
function vu(e) {
	return Gl(_u, {
		...iu,
		...e
	});
}
var yu = G`
    mutation RemoveVisitorMedia($mediaId: ID!) {
  removeVisitorMedia(mediaId: $mediaId) {
    ok
  }
}
    `;
function bu(e) {
	return Gl(yu, {
		...iu,
		...e
	});
}
var xu = G`
    mutation SubmitVisitorPrechat($input: VisitorPrechatInput!) {
  submitVisitorPrechat(input: $input) {
    ok
  }
}
    `;
function Su(e) {
	return Gl(xu, {
		...iu,
		...e
	});
}
var Cu = G`
    query VisitorChatHistory($chatId: String!, $before: String, $limit: Int) {
  visitorChatHistory(chatId: $chatId, before: $before, limit: $limit)
}
    `;
function wu(e) {
	return xl(Cu, {
		...iu,
		...e
	});
}
var Tu = G`
    query VisitorChatRecentInbound($chatId: String!) {
  visitorChatRecentInbound(chatId: $chatId) {
    id
    text
    createdAt
    sender {
      kind
      name
      avatar
    }
  }
}
    `;
function Eu(e) {
	return xl(Tu, {
		...iu,
		...e
	});
}
var Du = G`
    query VisitorChatAssignment($chatId: String!) {
  visitorChatAssignment(chatId: $chatId) {
    assignedStatus
    operator {
      name
      avatar
    }
    estimate {
      basis
      etaMinutes
      availableAt
      soft
    }
  }
}
    `;
function Ou(e) {
	return xl(Du, {
		...iu,
		...e
	});
}
var ku = G`
    mutation ResolveVisitorChat($chatId: String!) {
  resolveVisitorChat(chatId: $chatId) {
    ok
  }
}
    `;
function Au(e) {
	return Gl(ku, {
		...iu,
		...e
	});
}
var ju = G`
    mutation TrackVisitorPageView($input: TrackVisitorPageViewInput!) {
  trackVisitorPageView(input: $input) {
    ok
  }
}
    `;
function Mu(e) {
	return Gl(ju, {
		...iu,
		...e
	});
}
var Nu = G`
    mutation TrackVisitorLinkClick($input: TrackVisitorLinkClickInput!) {
  trackVisitorLinkClick(input: $input) {
    ok
  }
}
    `;
function Pu(e) {
	return Gl(Nu, {
		...iu,
		...e
	});
}
//#endregion
//#region node_modules/@apollo/client/link/context/index.js
function Fu(e) {
	return new wo(function(t, n) {
		var r = le(t, []);
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
function Iu(e) {
	return new wo(function(t, n) {
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
						}) : uo(i) && (o = e({
							protocolErrors: i.extensions[lo],
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
	ce(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n.link = Iu(t), n;
	}
	return t.prototype.request = function(e, t) {
		return this.link.request(e, t);
	}, t;
})(wo);
//#endregion
//#region lib/api.ts
var Lu = "https://api.wexio.io", Ru = "http://localhost:3001", zu = "https://local.api.wexio.io:3443";
function Bu() {
	let e = Vu("NEXT_PUBLIC_WEXIO_API_URL");
	if (e) return e;
	if (typeof window < "u") {
		let { protocol: e, hostname: t } = window.location;
		if (e === "https:" && /^local\.[a-z-]+\.wexio\.io$/i.test(t)) return zu;
		if (e === "https:" && /\.wexio\.io$/i.test(t)) {
			let e = t.replace(/^(app|templates)\./i, "api.").replace(/\.(app|templates)\./i, ".api.");
			return e === t ? Lu : `https://${e}`;
		}
		if (t === "localhost" || t === "127.0.0.1" || t === "[::1]") return Ru;
	}
	return Lu;
}
function Vu(e) {
	try {
		if (e === "NEXT_PUBLIC_WEXIO_API_URL") {
			let e = process.env.NEXT_PUBLIC_WEXIO_API_URL;
			return typeof e == "string" ? e : "";
		}
		let t = process.env.NEXT_PUBLIC_WEXIO_DEMO_PK;
		return typeof t == "string" ? t : "";
	} catch {
		return "";
	}
}
function Hu() {
	return Vu("NEXT_PUBLIC_WEXIO_DEMO_PK");
}
var Uu = /* @__PURE__ */ new Map();
function Wu(e, t) {
	if (!e) return Promise.resolve(null);
	let n = `${e}|${t ?? ""}`, r = Uu.get(n);
	if (r) return r;
	let i = (async () => {
		try {
			let n = new URL(`${Bu()}/api/web/config/${encodeURIComponent(e)}`);
			t && n.searchParams.set("locale", t);
			let r = await fetch(n.toString(), {
				method: "GET",
				headers: { "x-web-public-key": e },
				credentials: "omit"
			});
			return r.ok ? Yu(await r.json()) : null;
		} catch {
			return null;
		}
	})();
	return Uu.set(n, i.then((e) => (e === null && Uu.delete(n), e))), Uu.get(n) ?? i;
}
var Gu = [
	"NAME",
	"EMAIL",
	"PHONE",
	"CUSTOM_TEXT"
], Ku = ["HINT", "SYSTEM"];
function qu(e) {
	if (e === null || !e) return null;
	let t = Array.isArray(e.commands) ? e.commands.filter((e) => typeof e == "string" && e.length > 0).slice(0, 20) : [], n = Array.isArray(e.messages) ? e.messages.filter((e) => !!e && typeof e.text == "string" && e.text.length > 0 && typeof e.kind == "string" && Ku.includes(e.kind)).map((e) => ({
		kind: e.kind,
		text: e.text
	})).slice(0, 10) : [];
	return {
		title: e.title ?? null,
		description: e.description ?? null,
		aiAssistantAvatar: e.aiAssistantAvatar ?? null,
		commands: t,
		messages: n,
		showRelatedNews: e.showRelatedNews ?? !0,
		showRelatedHelpArticles: e.showRelatedHelpArticles ?? !0,
		showReactionCounts: e.showReactionCounts ?? !1,
		profile: Array.isArray(e.profile?.fields) && e.profile.fields.length > 0 ? { fields: e.profile.fields.filter((e) => typeof e == "string") } : null
	};
}
function Ju(e) {
	if (!e) return null;
	let t = (Array.isArray(e.fields) ? e.fields : []).filter((e) => e && Gu.includes(e.kind)).map((e) => ({
		kind: e.kind,
		key: String(e.key ?? ""),
		label: String(e.label ?? ""),
		required: !!e.required
	})).filter((e) => e.key.length > 0);
	return {
		enabled: !!e.enabled,
		fields: t
	};
}
function Yu(e) {
	return {
		status: e.status,
		defaultTab: e.defaultTab?.toLowerCase() ?? "home",
		localeStrategy: e.localeStrategy ?? "AUTO",
		defaultLocale: e.defaultLocale ?? "en",
		supportedLocales: Array.isArray(e.supportedLocales) ? e.supportedLocales.filter((e) => typeof e == "string") : [],
		contentLocaleFallback: e.contentLocaleFallback ?? !0,
		security: {
			requireAuth: e.security?.requireAuth ?? !1,
			google: {
				enabled: e.security?.google?.enabled ?? !1,
				clientId: e.security?.google?.clientId ?? null
			},
			passkey: { enabled: e.security?.passkey?.enabled ?? !1 }
		},
		features: {
			home: e.features?.home ?? !0,
			messenger: e.features?.messenger ?? !0,
			help: e.features?.help ?? !0,
			news: e.features?.news ?? !0,
			profile: e.features?.profile ?? !0
		},
		theme: e.theme ?? null,
		themeMode: "auto",
		prechatForm: Ju(e.prechatForm),
		operatorAvatars: Array.isArray(e.operatorAvatars) ? e.operatorAvatars.filter((e) => !!e?.src).map((e) => ({
			src: e.src,
			alt: e.alt ?? ""
		})) : [],
		organizationLogo: e.logo ? {
			light: e.logo.light ?? null,
			dark: e.logo.dark ?? null
		} : null,
		greeting: {
			headline: e.greeting?.headline ?? "",
			subheadline: e.greeting?.subheadline ?? ""
		},
		homeLayout: e.homeLayout ?? null,
		branding: e.branding?.hidden ? { hidden: !0 } : null,
		sounds: e.sounds ? {
			enabled: e.sounds.enabled ?? !0,
			inboundSoundId: e.sounds.inboundSoundId ?? null,
			outboundSoundId: e.sounds.outboundSoundId ?? null,
			volume: typeof e.sounds.volume == "number" ? Math.max(0, Math.min(1, e.sounds.volume)) : .5
		} : null,
		messenger: qu(e.messenger),
		botProtection: e.botProtection?.turnstile?.enabled && e.botProtection.turnstile.siteKey ? { turnstile: {
			enabled: !0,
			siteKey: e.botProtection.turnstile.siteKey
		} } : null,
		tracking: {
			trackWidgetLinks: e.tracking?.trackWidgetLinks ?? !0,
			trackWebsitePages: e.tracking?.trackWebsitePages ?? !0
		}
	};
}
var Xu = /* @__PURE__ */ new Map();
function Zu(e) {
	if (!e) return Promise.resolve(null);
	let t = Xu.get(e);
	if (t) return t;
	let n = (async () => {
		try {
			let t = new URL(`${Bu()}/api/web/config/${encodeURIComponent(e)}`);
			t.searchParams.set("view", "gate");
			let n = await fetch(t.toString(), {
				method: "GET",
				headers: { "x-web-public-key": e },
				credentials: "omit"
			});
			if (!n.ok) return null;
			let r = await n.json();
			return {
				status: r.status ?? "active",
				branding: r.branding?.hidden ? { hidden: !0 } : null,
				security: {
					requireAuth: r.security?.requireAuth ?? !1,
					google: {
						enabled: r.security?.google?.enabled ?? !1,
						clientId: r.security?.google?.clientId ?? null
					},
					passkey: { enabled: r.security?.passkey?.enabled ?? !1 }
				}
			};
		} catch {
			return null;
		}
	})();
	return Xu.set(e, n.then((t) => (t === null && Xu.delete(e), t))), Xu.get(e) ?? n;
}
//#endregion
//#region lib/apollo-client.ts
var Qu = null, $u = null;
function ed(e) {
	Qu = e;
}
function td() {
	return Qu;
}
var nd = null;
function rd(e) {
	nd = e;
}
var id = null;
function ad(e) {
	id = e;
}
var od = new Set([
	"StartAnonymousVisitor",
	"StartIdentifiedVisitor",
	"VisitorPasskeyRegistrationOptions",
	"VerifyVisitorPasskeyRegistration",
	"VisitorPasskeyAuthenticationOptions",
	"VerifyVisitorPasskeyAuthentication"
]);
function sd(e) {
	$u = e;
}
function cd() {
	return $u;
}
var ld = null;
function ud() {
	if (ld) return ld;
	let e = new es({
		uri: `${Bu()}/graphql`,
		credentials: "omit"
	}), t = Fu((e, { headers: t }) => ({ headers: {
		...t,
		...$u ? { "x-web-public-key": $u } : {},
		...Qu ? { authorization: `Bearer ${Qu}` } : {}
	} }));
	return ld = new Gc({
		link: To([
			Iu(({ operation: e, graphQLErrors: t, networkError: n }) => {
				if (od.has(e.operationName)) return;
				let r = n && "statusCode" in n ? n.statusCode : void 0;
				if ((t ?? []).some((e) => {
					let t = e.extensions;
					if (t?.code === "webIntegrationMismatch") return !0;
					let n = t?.response?.message;
					return !!(typeof n == "string" && n.includes("webIntegrationMismatch") || Array.isArray(n) && n.some((e) => typeof e == "string" && e.includes("webIntegrationMismatch")));
				})) {
					id?.();
					return;
				}
				(r === 401 || (t ?? []).some((e) => {
					let t = e.extensions;
					return t?.code === "UNAUTHENTICATED" || t?.response?.statusCode === 401 || e.message === "Unauthorized";
				})) && nd?.();
			}),
			t,
			e
		]),
		cache: new Oc({ typePolicies: {} }),
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
	}), ld;
}
//#endregion
//#region lib/use-widget-env.tsx
function dd() {
	let e = (e) => {
		typeof window > "u" || window.parent?.postMessage(e, "*");
	};
	return {
		kind: "iframe",
		onResize: (t, n) => e({
			type: "wexio:widget:resize:v1",
			width: t,
			height: n
		}),
		onClose: () => e({ type: "wexio:widget:close:v1" })
	};
}
var fd = b(null);
function pd({ env: e, children: t }) {
	return /* @__PURE__ */ O(fd.Provider, {
		value: e,
		children: t
	});
}
function md() {
	return w(fd) ?? dd();
}
//#endregion
//#region dummy/authors.ts
var hd = {
	maya: {
		_id: "demo-author-maya",
		name: "Maya Chen",
		photo: { url: "https://i.pravatar.cc/96?img=47" }
	},
	leo: {
		_id: "demo-author-leo",
		name: "Leo Martins",
		photo: { url: "https://i.pravatar.cc/96?img=13" }
	},
	ira: {
		_id: "demo-author-ira",
		name: "Ira Kovalenko",
		photo: { url: "https://i.pravatar.cc/96?img=32" }
	},
	sam: {
		_id: "demo-author-sam",
		name: "Sam Okafor",
		photo: { url: "https://i.pravatar.cc/96?img=68" }
	}
};
function gd(e) {
	return e.map((e) => hd[e]);
}
//#endregion
//#region lib/theme-font.ts
var _d = {
	inter: "Inter:wght@400;500;600;700",
	poppins: "Poppins:wght@400;500;600;700",
	"dm sans": "DM+Sans:wght@400;500;600;700",
	roboto: "Roboto:wght@400;500;700",
	"ibm plex sans": "IBM+Plex+Sans:wght@400;500;600;700",
	lato: "Lato:wght@400;700",
	montserrat: "Montserrat:wght@400;500;600;700",
	nunito: "Nunito:wght@400;500;600;700",
	raleway: "Raleway:wght@400;500;600;700",
	"work sans": "Work+Sans:wght@400;500;600;700"
};
function vd(e) {
	if (!e || typeof document > "u") return;
	let t = e.split(",")[0]?.trim().replace(/^['"]|['"]$/g, "");
	if (!t) return;
	let n = _d[t.toLowerCase()];
	if (!n) return;
	let r = `wexio-font-${t.toLowerCase().replace(/\s+/g, "-")}`;
	if (document.getElementById(r)) return;
	let i = document.createElement("link");
	i.id = r, i.rel = "stylesheet", i.href = `https://fonts.googleapis.com/css2?family=${n}&display=swap`, document.head.appendChild(i);
}
//#endregion
//#region lib/widget-config.ts
var yd = {
	status: "active",
	defaultTab: "home",
	localeStrategy: "AUTO",
	defaultLocale: "en",
	supportedLocales: [],
	contentLocaleFallback: !0,
	security: {
		requireAuth: !1,
		google: {
			enabled: !1,
			clientId: ""
		},
		passkey: { enabled: !1 }
	},
	features: {
		home: !0,
		messenger: !0,
		help: !0,
		news: !0,
		profile: !0
	},
	theme: null,
	themeMode: "auto",
	operatorAvatars: [
		{
			src: "https://i.pravatar.cc/64?u=op-1",
			alt: "Operator"
		},
		{
			src: "https://i.pravatar.cc/64?u=op-2",
			alt: "Operator"
		},
		{
			src: "https://i.pravatar.cc/64?u=op-3",
			alt: "Operator"
		}
	],
	organizationLogo: null,
	greeting: {
		headline: "Hi there 👋",
		subheadline: "How can we help?"
	},
	homeLayout: null,
	prechatForm: {
		enabled: !1,
		fields: []
	},
	branding: null,
	sounds: {
		enabled: !0,
		inboundSoundId: "wx-nt_3",
		outboundSoundId: "wx-nt_1",
		volume: .5
	},
	messenger: {
		title: null,
		description: null,
		aiAssistantAvatar: ru("/logo-dark.png"),
		commands: [
			"/start",
			"/help",
			"/contact"
		],
		messages: [],
		showRelatedNews: !0,
		showRelatedHelpArticles: !0,
		showReactionCounts: !1,
		profile: null
	},
	botProtection: null,
	tracking: null
}, bd = [
	{ kind: "ask-question" },
	{ kind: "recent-message" },
	{ kind: "featured-article" },
	{
		kind: "pinned-articles",
		articleIds: []
	},
	{
		kind: "quick-actions",
		layout: "inline",
		buttons: [
			{
				label: "WhatsApp",
				icon: {
					kind: "named",
					name: "whatsapp"
				},
				action: "open-url",
				url: "https://wa.me/15555555555"
			},
			{
				label: "Telegram",
				icon: {
					kind: "named",
					name: "telegram"
				},
				action: "open-url",
				url: "https://t.me/wexio"
			},
			{
				label: "Instagram",
				icon: {
					kind: "named",
					name: "instagram"
				},
				action: "open-url",
				url: "https://instagram.com/wexio"
			},
			{
				label: "Email",
				icon: {
					kind: "named",
					name: "email"
				},
				action: "open-url",
				url: "mailto:help@wexio.io"
			}
		]
	}
];
//#endregion
//#region lib/use-widget-config.ts
function xd() {
	let e = md(), t = g(), [n, r] = re({
		mode: "demo",
		config: yd,
		isDummy: !0,
		isLoading: !0,
		error: null
	}), [i, a] = re(null);
	T(() => {
		let n = new URL(window.location.href), i = n.searchParams.get("pk") ?? void 0, o = n.searchParams.get("mode"), s = e.modeOverride === "demo", c = s ? void 0 : Hu() || void 0, l = s ? void 0 : e.publicKeyOverride ?? i ?? c, u = l === "pk_demo" ? void 0 : l, d = e.modeOverride ?? (u ? "production" : o === "preview" ? "preview" : "demo"), f = !1;
		if ((async () => {
			if (e.configBase) {
				let t = u ? await Zu(u) : null;
				if (f) return;
				let n = e.configBase.security, i = t?.security, a = {
					requireAuth: n?.requireAuth ?? i?.requireAuth ?? !1,
					google: {
						enabled: n?.google?.enabled ?? i?.google?.enabled ?? !1,
						clientId: i?.google?.clientId ?? null
					},
					passkey: { enabled: n?.passkey?.enabled ?? i?.passkey?.enabled ?? !1 }
				}, { security: o, ...s } = e.configBase;
				r({
					mode: d,
					config: {
						...s,
						security: a,
						branding: t?.branding ?? null,
						status: t?.status ?? "active"
					},
					isDummy: e.forceDummyData === !0,
					isLoading: !1,
					error: null
				});
				return;
			}
			if (e.forceDummyData !== void 0) {
				r({
					mode: d,
					config: yd,
					isDummy: e.forceDummyData,
					isLoading: !1,
					error: null
				});
				return;
			}
			if (u) {
				let e = await Wu(u, t);
				if (f) return;
				if (e) {
					r({
						mode: d,
						config: e,
						isDummy: !1,
						isLoading: !1,
						error: null
					});
					return;
				}
				r({
					mode: d,
					config: yd,
					isDummy: !0,
					isLoading: !1,
					error: "publicKeyInvalid"
				});
				return;
			}
			r({
				mode: d,
				config: yd,
				isDummy: !0,
				isLoading: !1,
				error: null
			});
		})(), d !== "preview") return () => {
			f = !0;
		};
		let p = (e) => {
			if (!e.data || typeof e.data != "object" || e.data.type !== "wexio:preview-config:v1") return;
			let t = e.data.config;
			t && a((e) => Sd(e ?? {}, t));
		};
		return window.addEventListener("message", p), () => {
			f = !0, window.removeEventListener("message", p);
		};
	}, [
		e.publicKeyOverride,
		e.modeOverride,
		e.forceDummyData,
		e.configBase,
		t
	]);
	let o = n.isDummy || e.forceDummyData === !0, s = te(() => {
		let t = n.config;
		return i && (t = Sd(t, i)), e.configOverride && (t = Sd(t, e.configOverride)), o && t.operatorAvatars.length === 0 && (t = {
			...t,
			operatorAvatars: yd.operatorAvatars
		}), t;
	}, [
		n.config,
		i,
		e.configOverride,
		o
	]), c = e.styleRoot;
	D(() => {
		s.theme && kd(s.theme, c ?? document);
	}, [s.theme, c]), T(() => {
		s.theme && vd(s.theme.fontFamily);
	}, [s.theme]);
	let l = e.onLocaleStrategy;
	return T(() => {
		let e = s.localeStrategy === "DEFAULT" ? s.defaultLocale : s.localeStrategy;
		l?.(e);
	}, [
		l,
		s.localeStrategy,
		s.defaultLocale
	]), {
		mode: n.mode,
		config: s,
		isDummy: o,
		isLoading: n.isLoading,
		error: n.error
	};
}
function Sd(e, t) {
	return {
		...e,
		...t,
		features: {
			...e.features ?? {},
			...t.features ?? {}
		},
		greeting: {
			...e.greeting ?? {},
			...t.greeting ?? {}
		},
		tracking: t.tracking === void 0 ? e.tracking : {
			...e.tracking ?? {},
			...t.tracking ?? {}
		},
		theme: t.theme === void 0 ? e.theme : t.theme
	};
}
var Cd = {
	background: "--wx-bg",
	surface: "--wx-bg-elevated",
	surfaceElevated: "--wx-bg-elevated-2",
	text: "--wx-fg",
	textMuted: "--wx-fg-muted",
	textSubtle: "--wx-fg-subtle",
	border: "--wx-border",
	borderStrong: "--wx-border-strong",
	primary: "--wx-primary",
	primaryHover: "--wx-primary-hover",
	primaryForeground: "--wx-primary-fg",
	launcherBackground: "--wx-launcher-bg",
	launcherForeground: "--wx-launcher-fg",
	success: "--wx-success",
	danger: "--wx-danger"
}, wd = {
	sm: "--wx-radius-sm",
	md: "--wx-radius",
	lg: "--wx-radius-lg",
	xl: "--wx-radius-xl"
};
function Td(e) {
	return e ? Object.entries(e).filter(([, e]) => typeof e == "string" && e.length > 0).map(([e, t]) => `${Cd[e]}: ${t};`).join(" ") : "";
}
function Ed(e) {
	return e ? Object.entries(e).filter(([, e]) => typeof e == "number" && Number.isFinite(e)).map(([e, t]) => `${wd[e]}: ${t}px;`).join(" ") : "";
}
var Dd = /* @__PURE__ */ new WeakMap();
function Od(e) {
	let t = [Ed(e.radii), typeof e.fontFamily == "string" && e.fontFamily.trim().length > 0 ? `--wx-font: ${e.fontFamily};` : ""].filter(Boolean).join(" "), n = [Td(e.light), t].filter(Boolean).join(" "), r = [Td(e.dark), t].filter(Boolean).join(" "), i = [];
	return n && i.push(`:root, :host { ${n} }`), r && i.push(`[data-theme="dark"] { ${r} }`), i.join(" ");
}
function kd(e, t) {
	let n = Od(e);
	if (!(t instanceof Document)) {
		let e = t;
		if (typeof CSSStyleSheet < "u" && "replaceSync" in CSSStyleSheet.prototype) {
			let t = Dd.get(e);
			t || (t = new CSSStyleSheet(), Dd.set(e, t), e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]), t.replaceSync(n);
			return;
		}
		let r = e.querySelector("#wexio-theme-vars");
		r || (r = document.createElement("style"), r.id = "wexio-theme-vars", e.appendChild(r)), r.textContent = n;
		return;
	}
	let r = t.getElementById("wexio-theme-vars");
	r || (r = document.createElement("style"), r.id = "wexio-theme-vars", t.head.appendChild(r)), r.textContent = n;
}
var Ad = _("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), jd = _("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Md = _("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), Nd = _("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Pd = _("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]), Fd = _("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function Id(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function Ld(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Id(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Id(e[t], null);
			}
		};
	};
}
function Rd(...e) {
	return v.useCallback(Ld(...e), e);
}
//#endregion
//#region components/ui/card.tsx
var zd = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("div", {
	ref: n,
	className: h("rounded-wx-lg bg-wx-bg-elevated text-wx-fg", e),
	...t
}));
zd.displayName = "Card";
var Bd = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("div", {
	ref: n,
	className: h("rounded-wx bg-wx-bg-elevated-2 text-wx-fg", e),
	...t
}));
Bd.displayName = "CardNested";
var Vd = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("div", {
	ref: n,
	className: h("flex flex-col gap-1 px-5 pt-5", e),
	...t
}));
Vd.displayName = "CardHeader";
var Hd = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("p", {
	ref: n,
	className: h("text-base font-semibold text-wx-fg", e),
	...t
}));
Hd.displayName = "CardTitle";
var Ud = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("p", {
	ref: n,
	className: h("text-sm text-wx-fg-muted", e),
	...t
}));
Ud.displayName = "CardSubtitle";
var Wd = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("div", {
	ref: n,
	className: h("px-5 py-4", e),
	...t
}));
Wd.displayName = "CardBody";
var Gd = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("div", {
	ref: n,
	className: h("flex items-center justify-between px-5 py-3 border-t border-wx-border", e),
	...t
}));
Gd.displayName = "CardFooter";
//#endregion
//#region node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function Kd(e) {
	let t = /* @__PURE__ */ qd(e), n = v.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = v.Children.toArray(r), o = a.find(Yd);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? v.Children.count(e) > 1 ? v.Children.only(null) : v.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ O(t, {
				...i,
				ref: n,
				children: v.isValidElement(e) ? v.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ O(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function qd(e) {
	let t = v.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (v.isValidElement(n)) {
			let e = Zd(n), i = Xd(r, n.props);
			return n.type !== v.Fragment && (i.ref = t ? Ld(t, e) : e), v.cloneElement(n, i);
		}
		return v.Children.count(n) > 1 ? v.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var Jd = Symbol("radix.slottable");
function Yd(e) {
	return v.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Jd;
}
function Xd(e, t) {
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
function Zd(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var Qd = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = /* @__PURE__ */ Kd(`Primitive.${t}`), r = v.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ O(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function $d(e, t) {
	e && ae.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var ef = globalThis?.document ? v.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
function tf(e, t) {
	return v.useReducer((e, n) => t[e][n] ?? e, e);
}
var nf = (e) => {
	let { present: t, children: n } = e, r = rf(t), i = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), a = Rd(r.ref, of(i));
	return typeof n == "function" || r.isPresent ? v.cloneElement(i, { ref: a }) : null;
};
nf.displayName = "Presence";
function rf(e) {
	let [t, n] = v.useState(), r = v.useRef(null), i = v.useRef(e), a = v.useRef("none"), [o, s] = tf(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return v.useEffect(() => {
		let e = af(r.current);
		a.current = o === "mounted" ? e : "none";
	}, [o]), ef(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = af(t);
			e ? s("MOUNT") : o === "none" || t?.display === "none" ? s("UNMOUNT") : s(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, s]), ef(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = af(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (s("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = af(r.current));
			};
			return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		} else s("ANIMATION_END");
	}, [t, s]), {
		isPresent: ["mounted", "unmountSuspended"].includes(o),
		ref: v.useCallback((e) => {
			r.current = e ? getComputedStyle(e) : null, n(e);
		}, [])
	};
}
function af(e) {
	return e?.animationName || "none";
}
function of(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
function sf(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = v.createContext(r), a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = v.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ O(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = v.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => v.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return v.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, cf(i, ...t)];
}
function cf(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return v.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function lf(e) {
	let t = v.useRef(e);
	return v.useEffect(() => {
		t.current = e;
	}), v.useMemo(() => (...e) => t.current?.(...e), []);
}
//#endregion
//#region node_modules/@radix-ui/react-direction/dist/index.mjs
var uf = v.createContext(void 0);
function df(e) {
	let t = v.useContext(uf);
	return e || t || "ltr";
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
function ff(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
typeof window < "u" && window.document && window.document.createElement;
function pf(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region node_modules/@radix-ui/react-scroll-area/dist/index.mjs
function mf(e, t) {
	return v.useReducer((e, n) => t[e][n] ?? e, e);
}
var hf = "ScrollArea", [gf, _f] = sf(hf), [vf, yf] = gf(hf), bf = v.forwardRef((e, t) => {
	let { __scopeScrollArea: n, type: r = "hover", dir: i, scrollHideDelay: a = 600, ...o } = e, [s, c] = v.useState(null), [l, u] = v.useState(null), [d, f] = v.useState(null), [p, m] = v.useState(null), [h, g] = v.useState(null), [_, y] = v.useState(0), [b, x] = v.useState(0), [S, C] = v.useState(!1), [w, T] = v.useState(!1), E = Rd(t, (e) => c(e)), ee = df(i);
	return /* @__PURE__ */ O(vf, {
		scope: n,
		type: r,
		dir: ee,
		scrollHideDelay: a,
		scrollArea: s,
		viewport: l,
		onViewportChange: u,
		content: d,
		onContentChange: f,
		scrollbarX: p,
		onScrollbarXChange: m,
		scrollbarXEnabled: S,
		onScrollbarXEnabledChange: C,
		scrollbarY: h,
		onScrollbarYChange: g,
		scrollbarYEnabled: w,
		onScrollbarYEnabledChange: T,
		onCornerWidthChange: y,
		onCornerHeightChange: x,
		children: /* @__PURE__ */ O(Qd.div, {
			dir: ee,
			...o,
			ref: E,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": _ + "px",
				"--radix-scroll-area-corner-height": b + "px",
				...e.style
			}
		})
	});
});
bf.displayName = hf;
var xf = "ScrollAreaViewport", Sf = v.forwardRef((e, t) => {
	let { __scopeScrollArea: n, children: r, nonce: i, ...a } = e, o = yf(xf, n), s = Rd(t, v.useRef(null), o.onViewportChange);
	return /* @__PURE__ */ k(ie, { children: [/* @__PURE__ */ O("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
		nonce: i
	}), /* @__PURE__ */ O(Qd.div, {
		"data-radix-scroll-area-viewport": "",
		...a,
		ref: s,
		style: {
			overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
			...e.style
		},
		children: /* @__PURE__ */ O("div", {
			ref: o.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children: r
		})
	})] });
});
Sf.displayName = xf;
var Cf = "ScrollAreaScrollbar", wf = v.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = yf(Cf, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: o } = i, s = e.orientation === "horizontal";
	return v.useEffect(() => (s ? a(!0) : o(!0), () => {
		s ? a(!1) : o(!1);
	}), [
		s,
		a,
		o
	]), i.type === "hover" ? /* @__PURE__ */ O(Tf, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "scroll" ? /* @__PURE__ */ O(Ef, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "auto" ? /* @__PURE__ */ O(Df, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "always" ? /* @__PURE__ */ O(Of, {
		...r,
		ref: t
	}) : null;
});
wf.displayName = Cf;
var Tf = v.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = yf(Cf, e.__scopeScrollArea), [a, o] = v.useState(!1);
	return v.useEffect(() => {
		let e = i.scrollArea, t = 0;
		if (e) {
			let n = () => {
				window.clearTimeout(t), o(!0);
			}, r = () => {
				t = window.setTimeout(() => o(!1), i.scrollHideDelay);
			};
			return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
				window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r);
			};
		}
	}, [i.scrollArea, i.scrollHideDelay]), /* @__PURE__ */ O(nf, {
		present: n || a,
		children: /* @__PURE__ */ O(Df, {
			"data-state": a ? "visible" : "hidden",
			...r,
			ref: t
		})
	});
}), Ef = v.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = yf(Cf, e.__scopeScrollArea), a = e.orientation === "horizontal", o = Jf(() => c("SCROLL_END"), 100), [s, c] = mf("hidden", {
		hidden: { SCROLL: "scrolling" },
		scrolling: {
			SCROLL_END: "idle",
			POINTER_ENTER: "interacting"
		},
		interacting: {
			SCROLL: "interacting",
			POINTER_LEAVE: "idle"
		},
		idle: {
			HIDE: "hidden",
			SCROLL: "scrolling",
			POINTER_ENTER: "interacting"
		}
	});
	return v.useEffect(() => {
		if (s === "idle") {
			let e = window.setTimeout(() => c("HIDE"), i.scrollHideDelay);
			return () => window.clearTimeout(e);
		}
	}, [
		s,
		i.scrollHideDelay,
		c
	]), v.useEffect(() => {
		let e = i.viewport, t = a ? "scrollLeft" : "scrollTop";
		if (e) {
			let n = e[t], r = () => {
				let r = e[t];
				n !== r && (c("SCROLL"), o()), n = r;
			};
			return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r);
		}
	}, [
		i.viewport,
		a,
		c,
		o
	]), /* @__PURE__ */ O(nf, {
		present: n || s !== "hidden",
		children: /* @__PURE__ */ O(Of, {
			"data-state": s === "hidden" ? "hidden" : "visible",
			...r,
			ref: t,
			onPointerEnter: pf(e.onPointerEnter, () => c("POINTER_ENTER")),
			onPointerLeave: pf(e.onPointerLeave, () => c("POINTER_LEAVE"))
		})
	});
}), Df = v.forwardRef((e, t) => {
	let n = yf(Cf, e.__scopeScrollArea), { forceMount: r, ...i } = e, [a, o] = v.useState(!1), s = e.orientation === "horizontal", c = Jf(() => {
		if (n.viewport) {
			let e = n.viewport.offsetWidth < n.viewport.scrollWidth, t = n.viewport.offsetHeight < n.viewport.scrollHeight;
			o(s ? e : t);
		}
	}, 10);
	return Yf(n.viewport, c), Yf(n.content, c), /* @__PURE__ */ O(nf, {
		present: r || a,
		children: /* @__PURE__ */ O(Of, {
			"data-state": a ? "visible" : "hidden",
			...i,
			ref: t
		})
	});
}), Of = v.forwardRef((e, t) => {
	let { orientation: n = "vertical", ...r } = e, i = yf(Cf, e.__scopeScrollArea), a = v.useRef(null), o = v.useRef(0), [s, c] = v.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), l = Vf(s.viewport, s.content), u = {
		...r,
		sizes: s,
		onSizesChange: c,
		hasThumb: l > 0 && l < 1,
		onThumbChange: (e) => a.current = e,
		onThumbPointerUp: () => o.current = 0,
		onThumbPointerDown: (e) => o.current = e
	};
	function d(e, t) {
		return Uf(e, o.current, s, t);
	}
	return n === "horizontal" ? /* @__PURE__ */ O(kf, {
		...u,
		ref: t,
		onThumbPositionChange: () => {
			if (i.viewport && a.current) {
				let e = i.viewport.scrollLeft, t = Wf(e, s, i.dir);
				a.current.style.transform = `translate3d(${t}px, 0, 0)`;
			}
		},
		onWheelScroll: (e) => {
			i.viewport && (i.viewport.scrollLeft = e);
		},
		onDragScroll: (e) => {
			i.viewport && (i.viewport.scrollLeft = d(e, i.dir));
		}
	}) : n === "vertical" ? /* @__PURE__ */ O(Af, {
		...u,
		ref: t,
		onThumbPositionChange: () => {
			if (i.viewport && a.current) {
				let e = i.viewport.scrollTop, t = Wf(e, s);
				a.current.style.transform = `translate3d(0, ${t}px, 0)`;
			}
		},
		onWheelScroll: (e) => {
			i.viewport && (i.viewport.scrollTop = e);
		},
		onDragScroll: (e) => {
			i.viewport && (i.viewport.scrollTop = d(e));
		}
	}) : null;
}), kf = v.forwardRef((e, t) => {
	let { sizes: n, onSizesChange: r, ...i } = e, a = yf(Cf, e.__scopeScrollArea), [o, s] = v.useState(), c = v.useRef(null), l = Rd(t, c, a.onScrollbarXChange);
	return v.useEffect(() => {
		c.current && s(getComputedStyle(c.current));
	}, [c]), /* @__PURE__ */ O(Nf, {
		"data-orientation": "horizontal",
		...i,
		ref: l,
		sizes: n,
		style: {
			bottom: 0,
			left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": Hf(n) + "px",
			...e.style
		},
		onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
		onDragScroll: (t) => e.onDragScroll(t.x),
		onWheelScroll: (t, n) => {
			if (a.viewport) {
				let r = a.viewport.scrollLeft + t.deltaX;
				e.onWheelScroll(r), Kf(r, n) && t.preventDefault();
			}
		},
		onResize: () => {
			c.current && a.viewport && o && r({
				content: a.viewport.scrollWidth,
				viewport: a.viewport.offsetWidth,
				scrollbar: {
					size: c.current.clientWidth,
					paddingStart: Bf(o.paddingLeft),
					paddingEnd: Bf(o.paddingRight)
				}
			});
		}
	});
}), Af = v.forwardRef((e, t) => {
	let { sizes: n, onSizesChange: r, ...i } = e, a = yf(Cf, e.__scopeScrollArea), [o, s] = v.useState(), c = v.useRef(null), l = Rd(t, c, a.onScrollbarYChange);
	return v.useEffect(() => {
		c.current && s(getComputedStyle(c.current));
	}, [c]), /* @__PURE__ */ O(Nf, {
		"data-orientation": "vertical",
		...i,
		ref: l,
		sizes: n,
		style: {
			top: 0,
			right: a.dir === "ltr" ? 0 : void 0,
			left: a.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": Hf(n) + "px",
			...e.style
		},
		onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
		onDragScroll: (t) => e.onDragScroll(t.y),
		onWheelScroll: (t, n) => {
			if (a.viewport) {
				let r = a.viewport.scrollTop + t.deltaY;
				e.onWheelScroll(r), Kf(r, n) && t.preventDefault();
			}
		},
		onResize: () => {
			c.current && a.viewport && o && r({
				content: a.viewport.scrollHeight,
				viewport: a.viewport.offsetHeight,
				scrollbar: {
					size: c.current.clientHeight,
					paddingStart: Bf(o.paddingTop),
					paddingEnd: Bf(o.paddingBottom)
				}
			});
		}
	});
}), [jf, Mf] = gf(Cf), Nf = v.forwardRef((e, t) => {
	let { __scopeScrollArea: n, sizes: r, hasThumb: i, onThumbChange: a, onThumbPointerUp: o, onThumbPointerDown: s, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...f } = e, p = yf(Cf, n), [m, h] = v.useState(null), g = Rd(t, (e) => h(e)), _ = v.useRef(null), y = v.useRef(""), b = p.viewport, x = r.content - r.viewport, S = lf(u), C = lf(c), w = Jf(d, 10);
	function T(e) {
		_.current && l({
			x: e.clientX - _.current.left,
			y: e.clientY - _.current.top
		});
	}
	return v.useEffect(() => {
		let e = (e) => {
			let t = e.target;
			m?.contains(t) && S(e, x);
		};
		return document.addEventListener("wheel", e, { passive: !1 }), () => document.removeEventListener("wheel", e, { passive: !1 });
	}, [
		b,
		m,
		x,
		S
	]), v.useEffect(C, [r, C]), Yf(m, w), Yf(p.content, w), /* @__PURE__ */ O(jf, {
		scope: n,
		scrollbar: m,
		hasThumb: i,
		onThumbChange: lf(a),
		onThumbPointerUp: lf(o),
		onThumbPositionChange: C,
		onThumbPointerDown: lf(s),
		children: /* @__PURE__ */ O(Qd.div, {
			...f,
			ref: g,
			style: {
				position: "absolute",
				...f.style
			},
			onPointerDown: pf(e.onPointerDown, (e) => {
				e.button === 0 && (e.target.setPointerCapture(e.pointerId), _.current = m.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), T(e));
			}),
			onPointerMove: pf(e.onPointerMove, T),
			onPointerUp: pf(e.onPointerUp, (e) => {
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = y.current, p.viewport && (p.viewport.style.scrollBehavior = ""), _.current = null;
			})
		})
	});
}), Pf = "ScrollAreaThumb", Ff = v.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Mf(Pf, e.__scopeScrollArea);
	return /* @__PURE__ */ O(nf, {
		present: n || i.hasThumb,
		children: /* @__PURE__ */ O(If, {
			ref: t,
			...r
		})
	});
}), If = v.forwardRef((e, t) => {
	let { __scopeScrollArea: n, style: r, ...i } = e, a = yf(Pf, n), o = Mf(Pf, n), { onThumbPositionChange: s } = o, c = Rd(t, (e) => o.onThumbChange(e)), l = v.useRef(void 0), u = Jf(() => {
		l.current && (l.current(), l.current = void 0);
	}, 100);
	return v.useEffect(() => {
		let e = a.viewport;
		if (e) {
			let t = () => {
				u(), l.current || (l.current = qf(e, s), s());
			};
			return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
		}
	}, [
		a.viewport,
		u,
		s
	]), /* @__PURE__ */ O(Qd.div, {
		"data-state": o.hasThumb ? "visible" : "hidden",
		...i,
		ref: c,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...r
		},
		onPointerDownCapture: pf(e.onPointerDownCapture, (e) => {
			let t = e.target.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top;
			o.onThumbPointerDown({
				x: n,
				y: r
			});
		}),
		onPointerUp: pf(e.onPointerUp, o.onThumbPointerUp)
	});
});
Ff.displayName = Pf;
var Lf = "ScrollAreaCorner", Rf = v.forwardRef((e, t) => {
	let n = yf(Lf, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
	return n.type !== "scroll" && r ? /* @__PURE__ */ O(zf, {
		...e,
		ref: t
	}) : null;
});
Rf.displayName = Lf;
var zf = v.forwardRef((e, t) => {
	let { __scopeScrollArea: n, ...r } = e, i = yf(Lf, n), [a, o] = v.useState(0), [s, c] = v.useState(0), l = !!(a && s);
	return Yf(i.scrollbarX, () => {
		let e = i.scrollbarX?.offsetHeight || 0;
		i.onCornerHeightChange(e), c(e);
	}), Yf(i.scrollbarY, () => {
		let e = i.scrollbarY?.offsetWidth || 0;
		i.onCornerWidthChange(e), o(e);
	}), l ? /* @__PURE__ */ O(Qd.div, {
		...r,
		ref: t,
		style: {
			width: a,
			height: s,
			position: "absolute",
			right: i.dir === "ltr" ? 0 : void 0,
			left: i.dir === "rtl" ? 0 : void 0,
			bottom: 0,
			...e.style
		}
	}) : null;
});
function Bf(e) {
	return e ? parseInt(e, 10) : 0;
}
function Vf(e, t) {
	let n = e / t;
	return isNaN(n) ? 0 : n;
}
function Hf(e) {
	let t = Vf(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
	return Math.max(r, 18);
}
function Uf(e, t, n, r = "ltr") {
	let i = Hf(n), a = i / 2, o = t || a, s = i - o, c = n.scrollbar.paddingStart + o, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
	return Gf([c, l], d)(e);
}
function Wf(e, t, n = "ltr") {
	let r = Hf(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, o = t.content - t.viewport, s = a - r, c = ff(e, n === "ltr" ? [0, o] : [o * -1, 0]);
	return Gf([0, o], [0, s])(c);
}
function Gf(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function Kf(e, t) {
	return e > 0 && e < t;
}
var qf = (e, t = () => {}) => {
	let n = {
		left: e.scrollLeft,
		top: e.scrollTop
	}, r = 0;
	return (function i() {
		let a = {
			left: e.scrollLeft,
			top: e.scrollTop
		}, o = n.left !== a.left, s = n.top !== a.top;
		(o || s) && t(), n = a, r = window.requestAnimationFrame(i);
	})(), () => window.cancelAnimationFrame(r);
};
function Jf(e, t) {
	let n = lf(e), r = v.useRef(0);
	return v.useEffect(() => () => window.clearTimeout(r.current), []), v.useCallback(() => {
		window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
	}, [n, t]);
}
function Yf(e, t) {
	let n = lf(t);
	ef(() => {
		let t = 0;
		if (e) {
			let r = new ResizeObserver(() => {
				cancelAnimationFrame(t), t = window.requestAnimationFrame(n);
			});
			return r.observe(e), () => {
				window.cancelAnimationFrame(t), r.unobserve(e);
			};
		}
	}, [e, n]);
}
var Xf = bf, Zf = Sf, Qf = Rf;
//#endregion
//#region components/ui/scroll-area.tsx
function $f({ className: e, viewportRef: t, children: n, onScroll: r, ...i }) {
	return /* @__PURE__ */ k(Xf, {
		"data-slot": "scroll-area",
		className: h("relative min-h-0 min-w-0 overflow-hidden", e),
		...i,
		children: [
			/* @__PURE__ */ O(Zf, {
				ref: t,
				"data-slot": "scroll-area-viewport",
				onScroll: r,
				className: h("h-full w-full rounded-[inherit]", "[&>div]:!block [&>div]:!w-full [&>div]:!max-w-full", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary/40"),
				children: n
			}),
			/* @__PURE__ */ O(ep, {}),
			/* @__PURE__ */ O(Qf, {})
		]
	});
}
function ep({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ O(wf, {
		"data-slot": "scroll-area-scrollbar",
		orientation: t,
		className: h("flex touch-none select-none transition-opacity duration-150", "opacity-0 data-[state=visible]:opacity-100", "hover:opacity-100", t === "vertical" && "h-full w-1.5 border-l border-l-transparent p-px", t === "horizontal" && "h-1.5 flex-col border-t border-t-transparent p-px", e),
		...n,
		children: /* @__PURE__ */ O(Ff, {
			"data-slot": "scroll-area-thumb",
			className: h("relative flex-1 rounded-full", "bg-wx-fg-muted/40 hover:bg-wx-fg-muted/60 transition-colors")
		})
	});
}
//#endregion
//#region lib/visitor-tracking.ts
function tp(e, t) {
	try {
		return new URL(e).pathname.replace(/\/$/, "") === new URL(t).pathname.replace(/\/$/, "");
	} catch {
		return e === t;
	}
}
function np(e, t, n) {
	let r = [...e, t];
	return r.length > n ? r.slice(r.length - n) : r;
}
//#endregion
//#region components/widget/tracking/tracking-provider.tsx
var rp = b({
	trackPageView: () => {},
	trackLinkClick: () => {}
});
function ip() {
	return w(rp);
}
function ap({ children: e, tracking: t, enabled: n, token: r }) {
	let i = md(), [a] = Mu(), [o] = Pu(), s = n && (t?.trackWebsitePages ?? !0), c = n && (t?.trackWidgetLinks ?? !0), l = ne([]), u = ne(null), d = ne(null), f = C((e) => {
		td() ? e.kind === "page" ? a({ variables: { input: e.input } }).catch(() => {}) : o({ variables: { input: e.input } }).catch(() => {}) : l.current = np(l.current, e, 50);
	}, [a, o]);
	T(() => {
		if (!r) return;
		let e = l.current;
		l.current = [];
		for (let t of e) t.kind === "page" ? a({ variables: { input: t.input } }).catch(() => {}) : o({ variables: { input: t.input } }).catch(() => {});
	}, [
		r,
		a,
		o
	]), T(() => () => {
		d.current && clearTimeout(d.current);
	}, []);
	let p = C((e, t) => {
		!s || !e || u.current && tp(u.current, e) || (d.current && clearTimeout(d.current), d.current = setTimeout(() => {
			u.current = e, f({
				kind: "page",
				input: {
					url: e,
					title: t?.title,
					referrer: t?.referrer,
					occurredAt: (/* @__PURE__ */ new Date()).toISOString()
				}
			});
		}, 500));
	}, [s, f]), m = C((e) => {
		!c || !e.url || f({
			kind: "link",
			input: {
				url: e.url,
				targetType: e.targetType,
				targetRefId: e.targetRefId,
				title: e.title,
				referrer: typeof document < "u" && document.referrer || void 0,
				occurredAt: (/* @__PURE__ */ new Date()).toISOString()
			}
		});
	}, [c, f]);
	return T(() => {
		if (!s || typeof window > "u") return;
		if (i.kind === "iframe") {
			let e = (e) => {
				let t = e.data;
				!t || typeof t != "object" || t.type !== "wexio:host-navigation:v1" || typeof t.url == "string" && p(t.url, {
					title: typeof t.title == "string" ? t.title : void 0,
					referrer: typeof t.referrer == "string" ? t.referrer : void 0
				});
			};
			return window.addEventListener("message", e), () => window.removeEventListener("message", e);
		}
		let e = () => p(window.location.href, {
			title: document.title,
			referrer: document.referrer
		});
		e();
		let t = window.history.pushState, n = window.history.replaceState;
		return window.history.pushState = function(...n) {
			let r = t.apply(this, n);
			return e(), r;
		}, window.history.replaceState = function(...t) {
			let r = n.apply(this, t);
			return e(), r;
		}, window.addEventListener("popstate", e), window.addEventListener("hashchange", e), () => {
			window.history.pushState = t, window.history.replaceState = n, window.removeEventListener("popstate", e), window.removeEventListener("hashchange", e);
		};
	}, [
		s,
		i.kind,
		p
	]), /* @__PURE__ */ O(rp.Provider, {
		value: {
			trackPageView: p,
			trackLinkClick: m
		},
		children: e
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message/media-lightbox.tsx
function op({ items: e, initialIndex: t, open: n, onClose: r }) {
	let a = m("lightbox"), [o, s] = re(t), c = md(), l = !(c.embedded ?? !1) || (c.lightboxViewport ?? !0);
	T(() => {
		n && s(t);
	}, [n, t]);
	let u = e.length, d = e[o], f = C(() => {
		s((e) => (e + 1) % u);
	}, [u]), p = C(() => {
		s((e) => (e - 1 + u) % u);
	}, [u]);
	T(() => {
		if (!n) return;
		let e = (e) => {
			e.key === "Escape" ? r() : e.key === "ArrowRight" ? f() : e.key === "ArrowLeft" && p();
		};
		document.addEventListener("keydown", e);
		let t = document.body.style.overflow;
		return l && (document.body.style.overflow = "hidden"), () => {
			document.removeEventListener("keydown", e), l && (document.body.style.overflow = t);
		};
	}, [
		n,
		r,
		f,
		p,
		l
	]);
	let g = c.themeRoot ?? (typeof document < "u" ? document.body : null);
	return g ? oe(/* @__PURE__ */ O(tu, { children: n && d && /* @__PURE__ */ k(i.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .15 },
		onClick: r,
		className: h(l ? "fixed" : "absolute", "inset-0 z-2147483647 flex items-center justify-center", "bg-black/85 backdrop-blur-sm"),
		role: "dialog",
		"aria-modal": "true",
		"aria-label": d.alt || a("mediaPreview"),
		children: [
			/* @__PURE__ */ O("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), r();
				},
				"aria-label": a("close"),
				className: h("absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ O(Fd, { size: 18 })
			}),
			u > 1 && /* @__PURE__ */ k(ie, { children: [/* @__PURE__ */ O("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": a("previous"),
				className: h("absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ O(Md, { size: 20 })
			}), /* @__PURE__ */ O("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), f();
				},
				"aria-label": a("next"),
				className: h("absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ O(Nd, { size: 20 })
			})] }),
			/* @__PURE__ */ O(i.div, {
				initial: {
					scale: .96,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .96,
					opacity: 0
				},
				transition: {
					duration: .18,
					ease: "easeOut"
				},
				className: h("pointer-events-none flex items-center justify-center", l ? "max-h-[90vh] max-w-[90vw]" : "absolute inset-0 p-6"),
				children: d.mimetype.startsWith("video/") ? /* @__PURE__ */ O("video", {
					src: d.url,
					controls: !0,
					autoPlay: !0,
					onClick: (e) => e.stopPropagation(),
					className: h("pointer-events-auto rounded-wx-lg", l ? "max-h-[90vh] max-w-[90vw]" : "max-h-full max-w-full")
				}) : d.mimetype === "application/pdf" ? /* @__PURE__ */ O("iframe", {
					src: d.url,
					title: d.alt || "PDF preview",
					onClick: (e) => e.stopPropagation(),
					className: h("pointer-events-auto rounded-wx-lg border-0 bg-white", l ? "h-[90vh] w-[90vw]" : "h-full w-full")
				}) : /* @__PURE__ */ O(i.img, {
					src: d.url,
					alt: d.alt,
					onClick: (e) => e.stopPropagation(),
					draggable: !1,
					drag: u > 1 ? "x" : !1,
					dragConstraints: {
						left: 0,
						right: 0
					},
					dragElastic: .18,
					dragMomentum: !1,
					onDragEnd: (e, t) => {
						t.offset.x <= -60 ? f() : t.offset.x >= 60 && p();
					},
					className: h("pointer-events-auto rounded-wx-lg object-contain", u > 1 && "cursor-grab active:cursor-grabbing", l ? "max-h-[90vh] max-w-[90vw]" : "max-h-full max-w-full")
				})
			}, `${o}-${d.url}`),
			u > 1 && /* @__PURE__ */ k("div", {
				className: "absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white",
				children: [
					o + 1,
					" / ",
					u
				]
			})
		]
	}, "media-lightbox") }), g) : null;
}
//#endregion
//#region node_modules/comma-separated-tokens/index.js
function sp(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var cp = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, lp = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, up = {};
function dp(e, t) {
	return ((t || up).jsx ? lp : cp).test(e);
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var fp = /[ \t\n\f\r]/g;
function pp(e) {
	return typeof e == "object" ? e.type === "text" ? mp(e.value) : !1 : mp(e);
}
function mp(e) {
	return e.replace(fp, "") === "";
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var hp = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
hp.prototype.normal = {}, hp.prototype.property = {}, hp.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function gp(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new hp(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function _p(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var vp = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
vp.prototype.attribute = "", vp.prototype.booleanish = !1, vp.prototype.boolean = !1, vp.prototype.commaOrSpaceSeparated = !1, vp.prototype.commaSeparated = !1, vp.prototype.defined = !1, vp.prototype.mustUseProperty = !1, vp.prototype.number = !1, vp.prototype.overloadedBoolean = !1, vp.prototype.property = "", vp.prototype.spaceSeparated = !1, vp.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var yp = /* @__PURE__ */ f({
	boolean: () => K,
	booleanish: () => xp,
	commaOrSpaceSeparated: () => wp,
	commaSeparated: () => Cp,
	number: () => q,
	overloadedBoolean: () => Sp,
	spaceSeparated: () => J
}), bp = 0, K = Tp(), xp = Tp(), Sp = Tp(), q = Tp(), J = Tp(), Cp = Tp(), wp = Tp();
function Tp() {
	return 2 ** ++bp;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var Ep = Object.keys(yp), Dp = class extends vp {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), Op(this, "space", r), typeof n == "number") for (; ++i < Ep.length;) {
			let e = Ep[i];
			Op(this, Ep[i], (n & yp[e]) === yp[e]);
		}
	}
};
Dp.prototype.defined = !0;
function Op(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function kp(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new Dp(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[_p(r)] = r, n[_p(a.attribute)] = r;
	}
	return new hp(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var Ap = kp({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: xp,
		ariaAutoComplete: null,
		ariaBusy: xp,
		ariaChecked: xp,
		ariaColCount: q,
		ariaColIndex: q,
		ariaColSpan: q,
		ariaControls: J,
		ariaCurrent: null,
		ariaDescribedBy: J,
		ariaDetails: null,
		ariaDisabled: xp,
		ariaDropEffect: J,
		ariaErrorMessage: null,
		ariaExpanded: xp,
		ariaFlowTo: J,
		ariaGrabbed: xp,
		ariaHasPopup: null,
		ariaHidden: xp,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: J,
		ariaLevel: q,
		ariaLive: null,
		ariaModal: xp,
		ariaMultiLine: xp,
		ariaMultiSelectable: xp,
		ariaOrientation: null,
		ariaOwns: J,
		ariaPlaceholder: null,
		ariaPosInSet: q,
		ariaPressed: xp,
		ariaReadOnly: xp,
		ariaRelevant: null,
		ariaRequired: xp,
		ariaRoleDescription: J,
		ariaRowCount: q,
		ariaRowIndex: q,
		ariaRowSpan: q,
		ariaSelected: xp,
		ariaSetSize: q,
		ariaSort: null,
		ariaValueMax: q,
		ariaValueMin: q,
		ariaValueNow: q,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
function jp(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function Mp(e, t) {
	return jp(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var Np = kp({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: Cp,
		acceptCharset: J,
		accessKey: J,
		action: null,
		allow: null,
		allowFullScreen: K,
		allowPaymentRequest: K,
		allowUserMedia: K,
		alt: null,
		as: null,
		async: K,
		autoCapitalize: null,
		autoComplete: J,
		autoFocus: K,
		autoPlay: K,
		blocking: J,
		capture: null,
		charSet: null,
		checked: K,
		cite: null,
		className: J,
		cols: q,
		colSpan: null,
		content: null,
		contentEditable: xp,
		controls: K,
		controlsList: J,
		coords: q | Cp,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: K,
		defer: K,
		dir: null,
		dirName: null,
		disabled: K,
		download: Sp,
		draggable: xp,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: K,
		formTarget: null,
		headers: J,
		height: q,
		hidden: Sp,
		high: q,
		href: null,
		hrefLang: null,
		htmlFor: J,
		httpEquiv: J,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: K,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: K,
		itemId: null,
		itemProp: J,
		itemRef: J,
		itemScope: K,
		itemType: J,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: K,
		low: q,
		manifest: null,
		max: null,
		maxLength: q,
		media: null,
		method: null,
		min: null,
		minLength: q,
		multiple: K,
		muted: K,
		name: null,
		nonce: null,
		noModule: K,
		noValidate: K,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: K,
		optimum: q,
		pattern: null,
		ping: J,
		placeholder: null,
		playsInline: K,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: K,
		referrerPolicy: null,
		rel: J,
		required: K,
		reversed: K,
		rows: q,
		rowSpan: q,
		sandbox: J,
		scope: null,
		scoped: K,
		seamless: K,
		selected: K,
		shadowRootClonable: K,
		shadowRootDelegatesFocus: K,
		shadowRootMode: null,
		shape: null,
		size: q,
		sizes: null,
		slot: null,
		span: q,
		spellCheck: xp,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: q,
		step: null,
		style: null,
		tabIndex: q,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: K,
		useMap: null,
		value: xp,
		width: q,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: J,
		axis: null,
		background: null,
		bgColor: null,
		border: q,
		borderColor: null,
		bottomMargin: q,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: K,
		declare: K,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: q,
		leftMargin: q,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: q,
		marginWidth: q,
		noResize: K,
		noHref: K,
		noShade: K,
		noWrap: K,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: q,
		rules: null,
		scheme: null,
		scrolling: xp,
		standby: null,
		summary: null,
		text: null,
		topMargin: q,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: q,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: K,
		disableRemotePlayback: K,
		prefix: null,
		property: null,
		results: q,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: Mp
}), Pp = kp({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: wp,
		accentHeight: q,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: q,
		amplitude: q,
		arabicForm: null,
		ascent: q,
		attributeName: null,
		attributeType: null,
		azimuth: q,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: q,
		by: null,
		calcMode: null,
		capHeight: q,
		className: J,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: q,
		diffuseConstant: q,
		direction: null,
		display: null,
		dur: null,
		divisor: q,
		dominantBaseline: null,
		download: K,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: q,
		enableBackground: null,
		end: null,
		event: null,
		exponent: q,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: q,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: Cp,
		g2: Cp,
		glyphName: Cp,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: q,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: q,
		horizOriginX: q,
		horizOriginY: q,
		id: null,
		ideographic: q,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: q,
		k: q,
		k1: q,
		k2: q,
		k3: q,
		k4: q,
		kernelMatrix: wp,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: q,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: q,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: q,
		overlineThickness: q,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: q,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: J,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: q,
		pointsAtY: q,
		pointsAtZ: q,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: wp,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: wp,
		rev: wp,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: wp,
		requiredFeatures: wp,
		requiredFonts: wp,
		requiredFormats: wp,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: q,
		specularExponent: q,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: q,
		strikethroughThickness: q,
		string: null,
		stroke: null,
		strokeDashArray: wp,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: q,
		strokeOpacity: q,
		strokeWidth: null,
		style: null,
		surfaceScale: q,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: wp,
		tabIndex: q,
		tableValues: null,
		target: null,
		targetX: q,
		targetY: q,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: wp,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: q,
		underlineThickness: q,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: q,
		values: null,
		vAlphabetic: q,
		vMathematical: q,
		vectorEffect: null,
		vHanging: q,
		vIdeographic: q,
		version: null,
		vertAdvY: q,
		vertOriginX: q,
		vertOriginY: q,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: q,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: jp
}), Fp = kp({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), Ip = kp({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: Mp
}), Lp = kp({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), Rp = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
}, zp = /[A-Z]/g, Bp = /-[a-z]/g, Vp = /^data[-\w.:]+$/i;
function Hp(e, t) {
	let n = _p(t), r = t, i = vp;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && Vp.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(Bp, Wp);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!Bp.test(e)) {
				let n = e.replace(zp, Up);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = Dp;
	}
	return new i(r, t);
}
function Up(e) {
	return "-" + e.toLowerCase();
}
function Wp(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var Gp = gp([
	Ap,
	Np,
	Fp,
	Ip,
	Lp
], "html"), Kp = gp([
	Ap,
	Pp,
	Fp,
	Ip,
	Lp
], "svg");
//#endregion
//#region node_modules/space-separated-tokens/index.js
function qp(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/inline-style-parser/cjs/index.js
var Jp = /* @__PURE__ */ p(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g, u = "\n", d = "/", f = "*", p = "", m = "comment", h = "declaration";
	function g(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t = t || {};
		var l = 1, g = 1;
		function v(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf(u);
			g = ~n ? e.length - n : g + e.length;
		}
		function y() {
			var e = {
				line: l,
				column: g
			};
			return function(t) {
				return t.position = new b(e), C(), t;
			};
		}
		function b(e) {
			this.start = e, this.end = {
				line: l,
				column: g
			}, this.source = t.source;
		}
		b.prototype.content = e;
		function x(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + g + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = g, r.source = e, !t.silent) throw r;
		}
		function S(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return v(r), e = e.slice(r.length), n;
			}
		}
		function C() {
			S(i);
		}
		function w(e) {
			var t;
			for (e = e || []; t = T();) t !== !1 && e.push(t);
			return e;
		}
		function T() {
			var t = y();
			if (!(d != e.charAt(0) || f != e.charAt(1))) {
				for (var n = 2; p != e.charAt(n) && (f != e.charAt(n) || d != e.charAt(n + 1));) ++n;
				if (n += 2, p === e.charAt(n - 1)) return x("End of comment missing");
				var r = e.slice(2, n - 2);
				return g += 2, v(r), e = e.slice(n), g += 2, t({
					type: m,
					comment: r
				});
			}
		}
		function E() {
			var e = y(), t = S(a);
			if (t) {
				if (T(), !S(o)) return x("property missing ':'");
				var r = S(s), i = e({
					type: h,
					property: _(t[0].replace(n, p)),
					value: r ? _(r[0].replace(n, p)) : p
				});
				return S(c), i;
			}
		}
		function ee() {
			var e = [];
			w(e);
			for (var t; t = E();) t !== !1 && (e.push(t), w(e));
			return e;
		}
		return C(), ee();
	}
	function _(e) {
		return e ? e.replace(l, p) : p;
	}
	t.exports = g;
})), Yp = /* @__PURE__ */ p(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(Jp());
	function r(e, t) {
		let r = null;
		if (!e || typeof e != "string") return r;
		let i = (0, n.default)(e), a = typeof t == "function";
		return i.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: n, value: i } = e;
			a ? t(n, i, e) : i && (r = r || {}, r[n] = i);
		}), r;
	}
})), Xp = /* @__PURE__ */ p(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), Zp = /* @__PURE__ */ p(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(Yp()), r = Xp();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), Qp = em("end"), $p = em("start");
function em(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function tm(e) {
	let t = $p(e), n = Qp(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function nm(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? im(e.position) : "start" in e || "end" in e ? im(e) : "line" in e || "column" in e ? rm(e) : "";
}
function rm(e) {
	return am(e && e.line) + ":" + am(e && e.column);
}
function im(e) {
	return rm(e && e.start) + "-" + rm(e && e.end);
}
function am(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region node_modules/vfile-message/lib/index.js
var om = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = nm(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
om.prototype.file = "", om.prototype.name = "", om.prototype.reason = "", om.prototype.message = "", om.prototype.stack = "", om.prototype.column = void 0, om.prototype.line = void 0, om.prototype.ancestors = void 0, om.prototype.cause = void 0, om.prototype.fatal = void 0, om.prototype.place = void 0, om.prototype.ruleId = void 0, om.prototype.source = void 0;
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var sm = /* @__PURE__ */ d(Zp(), 1), cm = {}.hasOwnProperty, lm = /* @__PURE__ */ new Map(), um = /[A-Z]/g, dm = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), fm = new Set(["td", "th"]), pm = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function mm(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = Tm(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = wm(n, t.jsx, t.jsxs);
	}
	let i = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: r,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: n,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: t.passKeys !== !1,
		passNode: t.passNode || !1,
		schema: t.space === "svg" ? Kp : Gp,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = hm(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function hm(e, t, n) {
	if (t.type === "element") return gm(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return _m(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return ym(e, t, n);
	if (t.type === "mdxjsEsm") return vm(e, t);
	if (t.type === "root") return bm(e, t, n);
	if (t.type === "text") return xm(e, t);
}
function gm(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Kp, e.schema = i), e.ancestors.push(t);
	let a = jm(e, t.tagName, !1), o = Em(e, t), s = Om(e, t);
	return dm.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e == "string" ? !pp(e) : !0;
	})), Sm(e, o, a, t), Cm(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function _m(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	Mm(e, t.position);
}
function vm(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	Mm(e, t.position);
}
function ym(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = Kp, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : jm(e, t.name, !0), o = Dm(e, t), s = Om(e, t);
	return Sm(e, o, a, t), Cm(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function bm(e, t, n) {
	let r = {};
	return Cm(r, Om(e, t)), e.create(t, e.Fragment, r, n);
}
function xm(e, t) {
	return t.value;
}
function Sm(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Cm(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function wm(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function Tm(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = $p(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function Em(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && cm.call(t.properties, i)) {
		let a = km(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && fm.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style || (n.style = {});
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function Dm(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else Mm(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else Mm(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function Om(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : lm;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = hm(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function km(e, t, n) {
	let r = Hp(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? sp(n) : qp(n)), r.property === "style") {
			let t = typeof n == "object" ? n : Am(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = Nm(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? Rp[r.property] || r.property : r.attribute, n];
	}
}
function Am(e, t) {
	try {
		return (0, sm.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new om("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = pm + "#cannot-parse-style-attribute", r;
	}
}
function jm(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = dp(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = dp(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return cm.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	Mm(e);
}
function Mm(e, t) {
	let n = new om("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = pm + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Nm(e) {
	let t = {}, n;
	for (n in e) cm.call(e, n) && (t[Pm(n)] = e[n]);
	return t;
}
function Pm(e) {
	let t = e.replace(um, Fm);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Fm(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var Im = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
}, Lm = {};
function Rm(e, t) {
	let n = t || Lm;
	return zm(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function zm(e, t, n) {
	if (Vm(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return Bm(e.children, t, n);
	}
	return Array.isArray(e) ? Bm(e, t, n) : "";
}
function Bm(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = zm(e[i], t, n);
	return r.join("");
}
function Vm(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region node_modules/character-entities/index.js
var Hm = {
	AElig: "Æ",
	AMP: "&",
	Aacute: "Á",
	Abreve: "Ă",
	Acirc: "Â",
	Acy: "А",
	Afr: "𝔄",
	Agrave: "À",
	Alpha: "Α",
	Amacr: "Ā",
	And: "⩓",
	Aogon: "Ą",
	Aopf: "𝔸",
	ApplyFunction: "⁡",
	Aring: "Å",
	Ascr: "𝒜",
	Assign: "≔",
	Atilde: "Ã",
	Auml: "Ä",
	Backslash: "∖",
	Barv: "⫧",
	Barwed: "⌆",
	Bcy: "Б",
	Because: "∵",
	Bernoullis: "ℬ",
	Beta: "Β",
	Bfr: "𝔅",
	Bopf: "𝔹",
	Breve: "˘",
	Bscr: "ℬ",
	Bumpeq: "≎",
	CHcy: "Ч",
	COPY: "©",
	Cacute: "Ć",
	Cap: "⋒",
	CapitalDifferentialD: "ⅅ",
	Cayleys: "ℭ",
	Ccaron: "Č",
	Ccedil: "Ç",
	Ccirc: "Ĉ",
	Cconint: "∰",
	Cdot: "Ċ",
	Cedilla: "¸",
	CenterDot: "·",
	Cfr: "ℭ",
	Chi: "Χ",
	CircleDot: "⊙",
	CircleMinus: "⊖",
	CirclePlus: "⊕",
	CircleTimes: "⊗",
	ClockwiseContourIntegral: "∲",
	CloseCurlyDoubleQuote: "”",
	CloseCurlyQuote: "’",
	Colon: "∷",
	Colone: "⩴",
	Congruent: "≡",
	Conint: "∯",
	ContourIntegral: "∮",
	Copf: "ℂ",
	Coproduct: "∐",
	CounterClockwiseContourIntegral: "∳",
	Cross: "⨯",
	Cscr: "𝒞",
	Cup: "⋓",
	CupCap: "≍",
	DD: "ⅅ",
	DDotrahd: "⤑",
	DJcy: "Ђ",
	DScy: "Ѕ",
	DZcy: "Џ",
	Dagger: "‡",
	Darr: "↡",
	Dashv: "⫤",
	Dcaron: "Ď",
	Dcy: "Д",
	Del: "∇",
	Delta: "Δ",
	Dfr: "𝔇",
	DiacriticalAcute: "´",
	DiacriticalDot: "˙",
	DiacriticalDoubleAcute: "˝",
	DiacriticalGrave: "`",
	DiacriticalTilde: "˜",
	Diamond: "⋄",
	DifferentialD: "ⅆ",
	Dopf: "𝔻",
	Dot: "¨",
	DotDot: "⃜",
	DotEqual: "≐",
	DoubleContourIntegral: "∯",
	DoubleDot: "¨",
	DoubleDownArrow: "⇓",
	DoubleLeftArrow: "⇐",
	DoubleLeftRightArrow: "⇔",
	DoubleLeftTee: "⫤",
	DoubleLongLeftArrow: "⟸",
	DoubleLongLeftRightArrow: "⟺",
	DoubleLongRightArrow: "⟹",
	DoubleRightArrow: "⇒",
	DoubleRightTee: "⊨",
	DoubleUpArrow: "⇑",
	DoubleUpDownArrow: "⇕",
	DoubleVerticalBar: "∥",
	DownArrow: "↓",
	DownArrowBar: "⤓",
	DownArrowUpArrow: "⇵",
	DownBreve: "̑",
	DownLeftRightVector: "⥐",
	DownLeftTeeVector: "⥞",
	DownLeftVector: "↽",
	DownLeftVectorBar: "⥖",
	DownRightTeeVector: "⥟",
	DownRightVector: "⇁",
	DownRightVectorBar: "⥗",
	DownTee: "⊤",
	DownTeeArrow: "↧",
	Downarrow: "⇓",
	Dscr: "𝒟",
	Dstrok: "Đ",
	ENG: "Ŋ",
	ETH: "Ð",
	Eacute: "É",
	Ecaron: "Ě",
	Ecirc: "Ê",
	Ecy: "Э",
	Edot: "Ė",
	Efr: "𝔈",
	Egrave: "È",
	Element: "∈",
	Emacr: "Ē",
	EmptySmallSquare: "◻",
	EmptyVerySmallSquare: "▫",
	Eogon: "Ę",
	Eopf: "𝔼",
	Epsilon: "Ε",
	Equal: "⩵",
	EqualTilde: "≂",
	Equilibrium: "⇌",
	Escr: "ℰ",
	Esim: "⩳",
	Eta: "Η",
	Euml: "Ë",
	Exists: "∃",
	ExponentialE: "ⅇ",
	Fcy: "Ф",
	Ffr: "𝔉",
	FilledSmallSquare: "◼",
	FilledVerySmallSquare: "▪",
	Fopf: "𝔽",
	ForAll: "∀",
	Fouriertrf: "ℱ",
	Fscr: "ℱ",
	GJcy: "Ѓ",
	GT: ">",
	Gamma: "Γ",
	Gammad: "Ϝ",
	Gbreve: "Ğ",
	Gcedil: "Ģ",
	Gcirc: "Ĝ",
	Gcy: "Г",
	Gdot: "Ġ",
	Gfr: "𝔊",
	Gg: "⋙",
	Gopf: "𝔾",
	GreaterEqual: "≥",
	GreaterEqualLess: "⋛",
	GreaterFullEqual: "≧",
	GreaterGreater: "⪢",
	GreaterLess: "≷",
	GreaterSlantEqual: "⩾",
	GreaterTilde: "≳",
	Gscr: "𝒢",
	Gt: "≫",
	HARDcy: "Ъ",
	Hacek: "ˇ",
	Hat: "^",
	Hcirc: "Ĥ",
	Hfr: "ℌ",
	HilbertSpace: "ℋ",
	Hopf: "ℍ",
	HorizontalLine: "─",
	Hscr: "ℋ",
	Hstrok: "Ħ",
	HumpDownHump: "≎",
	HumpEqual: "≏",
	IEcy: "Е",
	IJlig: "Ĳ",
	IOcy: "Ё",
	Iacute: "Í",
	Icirc: "Î",
	Icy: "И",
	Idot: "İ",
	Ifr: "ℑ",
	Igrave: "Ì",
	Im: "ℑ",
	Imacr: "Ī",
	ImaginaryI: "ⅈ",
	Implies: "⇒",
	Int: "∬",
	Integral: "∫",
	Intersection: "⋂",
	InvisibleComma: "⁣",
	InvisibleTimes: "⁢",
	Iogon: "Į",
	Iopf: "𝕀",
	Iota: "Ι",
	Iscr: "ℐ",
	Itilde: "Ĩ",
	Iukcy: "І",
	Iuml: "Ï",
	Jcirc: "Ĵ",
	Jcy: "Й",
	Jfr: "𝔍",
	Jopf: "𝕁",
	Jscr: "𝒥",
	Jsercy: "Ј",
	Jukcy: "Є",
	KHcy: "Х",
	KJcy: "Ќ",
	Kappa: "Κ",
	Kcedil: "Ķ",
	Kcy: "К",
	Kfr: "𝔎",
	Kopf: "𝕂",
	Kscr: "𝒦",
	LJcy: "Љ",
	LT: "<",
	Lacute: "Ĺ",
	Lambda: "Λ",
	Lang: "⟪",
	Laplacetrf: "ℒ",
	Larr: "↞",
	Lcaron: "Ľ",
	Lcedil: "Ļ",
	Lcy: "Л",
	LeftAngleBracket: "⟨",
	LeftArrow: "←",
	LeftArrowBar: "⇤",
	LeftArrowRightArrow: "⇆",
	LeftCeiling: "⌈",
	LeftDoubleBracket: "⟦",
	LeftDownTeeVector: "⥡",
	LeftDownVector: "⇃",
	LeftDownVectorBar: "⥙",
	LeftFloor: "⌊",
	LeftRightArrow: "↔",
	LeftRightVector: "⥎",
	LeftTee: "⊣",
	LeftTeeArrow: "↤",
	LeftTeeVector: "⥚",
	LeftTriangle: "⊲",
	LeftTriangleBar: "⧏",
	LeftTriangleEqual: "⊴",
	LeftUpDownVector: "⥑",
	LeftUpTeeVector: "⥠",
	LeftUpVector: "↿",
	LeftUpVectorBar: "⥘",
	LeftVector: "↼",
	LeftVectorBar: "⥒",
	Leftarrow: "⇐",
	Leftrightarrow: "⇔",
	LessEqualGreater: "⋚",
	LessFullEqual: "≦",
	LessGreater: "≶",
	LessLess: "⪡",
	LessSlantEqual: "⩽",
	LessTilde: "≲",
	Lfr: "𝔏",
	Ll: "⋘",
	Lleftarrow: "⇚",
	Lmidot: "Ŀ",
	LongLeftArrow: "⟵",
	LongLeftRightArrow: "⟷",
	LongRightArrow: "⟶",
	Longleftarrow: "⟸",
	Longleftrightarrow: "⟺",
	Longrightarrow: "⟹",
	Lopf: "𝕃",
	LowerLeftArrow: "↙",
	LowerRightArrow: "↘",
	Lscr: "ℒ",
	Lsh: "↰",
	Lstrok: "Ł",
	Lt: "≪",
	Map: "⤅",
	Mcy: "М",
	MediumSpace: " ",
	Mellintrf: "ℳ",
	Mfr: "𝔐",
	MinusPlus: "∓",
	Mopf: "𝕄",
	Mscr: "ℳ",
	Mu: "Μ",
	NJcy: "Њ",
	Nacute: "Ń",
	Ncaron: "Ň",
	Ncedil: "Ņ",
	Ncy: "Н",
	NegativeMediumSpace: "​",
	NegativeThickSpace: "​",
	NegativeThinSpace: "​",
	NegativeVeryThinSpace: "​",
	NestedGreaterGreater: "≫",
	NestedLessLess: "≪",
	NewLine: "\n",
	Nfr: "𝔑",
	NoBreak: "⁠",
	NonBreakingSpace: "\xA0",
	Nopf: "ℕ",
	Not: "⫬",
	NotCongruent: "≢",
	NotCupCap: "≭",
	NotDoubleVerticalBar: "∦",
	NotElement: "∉",
	NotEqual: "≠",
	NotEqualTilde: "≂̸",
	NotExists: "∄",
	NotGreater: "≯",
	NotGreaterEqual: "≱",
	NotGreaterFullEqual: "≧̸",
	NotGreaterGreater: "≫̸",
	NotGreaterLess: "≹",
	NotGreaterSlantEqual: "⩾̸",
	NotGreaterTilde: "≵",
	NotHumpDownHump: "≎̸",
	NotHumpEqual: "≏̸",
	NotLeftTriangle: "⋪",
	NotLeftTriangleBar: "⧏̸",
	NotLeftTriangleEqual: "⋬",
	NotLess: "≮",
	NotLessEqual: "≰",
	NotLessGreater: "≸",
	NotLessLess: "≪̸",
	NotLessSlantEqual: "⩽̸",
	NotLessTilde: "≴",
	NotNestedGreaterGreater: "⪢̸",
	NotNestedLessLess: "⪡̸",
	NotPrecedes: "⊀",
	NotPrecedesEqual: "⪯̸",
	NotPrecedesSlantEqual: "⋠",
	NotReverseElement: "∌",
	NotRightTriangle: "⋫",
	NotRightTriangleBar: "⧐̸",
	NotRightTriangleEqual: "⋭",
	NotSquareSubset: "⊏̸",
	NotSquareSubsetEqual: "⋢",
	NotSquareSuperset: "⊐̸",
	NotSquareSupersetEqual: "⋣",
	NotSubset: "⊂⃒",
	NotSubsetEqual: "⊈",
	NotSucceeds: "⊁",
	NotSucceedsEqual: "⪰̸",
	NotSucceedsSlantEqual: "⋡",
	NotSucceedsTilde: "≿̸",
	NotSuperset: "⊃⃒",
	NotSupersetEqual: "⊉",
	NotTilde: "≁",
	NotTildeEqual: "≄",
	NotTildeFullEqual: "≇",
	NotTildeTilde: "≉",
	NotVerticalBar: "∤",
	Nscr: "𝒩",
	Ntilde: "Ñ",
	Nu: "Ν",
	OElig: "Œ",
	Oacute: "Ó",
	Ocirc: "Ô",
	Ocy: "О",
	Odblac: "Ő",
	Ofr: "𝔒",
	Ograve: "Ò",
	Omacr: "Ō",
	Omega: "Ω",
	Omicron: "Ο",
	Oopf: "𝕆",
	OpenCurlyDoubleQuote: "“",
	OpenCurlyQuote: "‘",
	Or: "⩔",
	Oscr: "𝒪",
	Oslash: "Ø",
	Otilde: "Õ",
	Otimes: "⨷",
	Ouml: "Ö",
	OverBar: "‾",
	OverBrace: "⏞",
	OverBracket: "⎴",
	OverParenthesis: "⏜",
	PartialD: "∂",
	Pcy: "П",
	Pfr: "𝔓",
	Phi: "Φ",
	Pi: "Π",
	PlusMinus: "±",
	Poincareplane: "ℌ",
	Popf: "ℙ",
	Pr: "⪻",
	Precedes: "≺",
	PrecedesEqual: "⪯",
	PrecedesSlantEqual: "≼",
	PrecedesTilde: "≾",
	Prime: "″",
	Product: "∏",
	Proportion: "∷",
	Proportional: "∝",
	Pscr: "𝒫",
	Psi: "Ψ",
	QUOT: "\"",
	Qfr: "𝔔",
	Qopf: "ℚ",
	Qscr: "𝒬",
	RBarr: "⤐",
	REG: "®",
	Racute: "Ŕ",
	Rang: "⟫",
	Rarr: "↠",
	Rarrtl: "⤖",
	Rcaron: "Ř",
	Rcedil: "Ŗ",
	Rcy: "Р",
	Re: "ℜ",
	ReverseElement: "∋",
	ReverseEquilibrium: "⇋",
	ReverseUpEquilibrium: "⥯",
	Rfr: "ℜ",
	Rho: "Ρ",
	RightAngleBracket: "⟩",
	RightArrow: "→",
	RightArrowBar: "⇥",
	RightArrowLeftArrow: "⇄",
	RightCeiling: "⌉",
	RightDoubleBracket: "⟧",
	RightDownTeeVector: "⥝",
	RightDownVector: "⇂",
	RightDownVectorBar: "⥕",
	RightFloor: "⌋",
	RightTee: "⊢",
	RightTeeArrow: "↦",
	RightTeeVector: "⥛",
	RightTriangle: "⊳",
	RightTriangleBar: "⧐",
	RightTriangleEqual: "⊵",
	RightUpDownVector: "⥏",
	RightUpTeeVector: "⥜",
	RightUpVector: "↾",
	RightUpVectorBar: "⥔",
	RightVector: "⇀",
	RightVectorBar: "⥓",
	Rightarrow: "⇒",
	Ropf: "ℝ",
	RoundImplies: "⥰",
	Rrightarrow: "⇛",
	Rscr: "ℛ",
	Rsh: "↱",
	RuleDelayed: "⧴",
	SHCHcy: "Щ",
	SHcy: "Ш",
	SOFTcy: "Ь",
	Sacute: "Ś",
	Sc: "⪼",
	Scaron: "Š",
	Scedil: "Ş",
	Scirc: "Ŝ",
	Scy: "С",
	Sfr: "𝔖",
	ShortDownArrow: "↓",
	ShortLeftArrow: "←",
	ShortRightArrow: "→",
	ShortUpArrow: "↑",
	Sigma: "Σ",
	SmallCircle: "∘",
	Sopf: "𝕊",
	Sqrt: "√",
	Square: "□",
	SquareIntersection: "⊓",
	SquareSubset: "⊏",
	SquareSubsetEqual: "⊑",
	SquareSuperset: "⊐",
	SquareSupersetEqual: "⊒",
	SquareUnion: "⊔",
	Sscr: "𝒮",
	Star: "⋆",
	Sub: "⋐",
	Subset: "⋐",
	SubsetEqual: "⊆",
	Succeeds: "≻",
	SucceedsEqual: "⪰",
	SucceedsSlantEqual: "≽",
	SucceedsTilde: "≿",
	SuchThat: "∋",
	Sum: "∑",
	Sup: "⋑",
	Superset: "⊃",
	SupersetEqual: "⊇",
	Supset: "⋑",
	THORN: "Þ",
	TRADE: "™",
	TSHcy: "Ћ",
	TScy: "Ц",
	Tab: "	",
	Tau: "Τ",
	Tcaron: "Ť",
	Tcedil: "Ţ",
	Tcy: "Т",
	Tfr: "𝔗",
	Therefore: "∴",
	Theta: "Θ",
	ThickSpace: "  ",
	ThinSpace: " ",
	Tilde: "∼",
	TildeEqual: "≃",
	TildeFullEqual: "≅",
	TildeTilde: "≈",
	Topf: "𝕋",
	TripleDot: "⃛",
	Tscr: "𝒯",
	Tstrok: "Ŧ",
	Uacute: "Ú",
	Uarr: "↟",
	Uarrocir: "⥉",
	Ubrcy: "Ў",
	Ubreve: "Ŭ",
	Ucirc: "Û",
	Ucy: "У",
	Udblac: "Ű",
	Ufr: "𝔘",
	Ugrave: "Ù",
	Umacr: "Ū",
	UnderBar: "_",
	UnderBrace: "⏟",
	UnderBracket: "⎵",
	UnderParenthesis: "⏝",
	Union: "⋃",
	UnionPlus: "⊎",
	Uogon: "Ų",
	Uopf: "𝕌",
	UpArrow: "↑",
	UpArrowBar: "⤒",
	UpArrowDownArrow: "⇅",
	UpDownArrow: "↕",
	UpEquilibrium: "⥮",
	UpTee: "⊥",
	UpTeeArrow: "↥",
	Uparrow: "⇑",
	Updownarrow: "⇕",
	UpperLeftArrow: "↖",
	UpperRightArrow: "↗",
	Upsi: "ϒ",
	Upsilon: "Υ",
	Uring: "Ů",
	Uscr: "𝒰",
	Utilde: "Ũ",
	Uuml: "Ü",
	VDash: "⊫",
	Vbar: "⫫",
	Vcy: "В",
	Vdash: "⊩",
	Vdashl: "⫦",
	Vee: "⋁",
	Verbar: "‖",
	Vert: "‖",
	VerticalBar: "∣",
	VerticalLine: "|",
	VerticalSeparator: "❘",
	VerticalTilde: "≀",
	VeryThinSpace: " ",
	Vfr: "𝔙",
	Vopf: "𝕍",
	Vscr: "𝒱",
	Vvdash: "⊪",
	Wcirc: "Ŵ",
	Wedge: "⋀",
	Wfr: "𝔚",
	Wopf: "𝕎",
	Wscr: "𝒲",
	Xfr: "𝔛",
	Xi: "Ξ",
	Xopf: "𝕏",
	Xscr: "𝒳",
	YAcy: "Я",
	YIcy: "Ї",
	YUcy: "Ю",
	Yacute: "Ý",
	Ycirc: "Ŷ",
	Ycy: "Ы",
	Yfr: "𝔜",
	Yopf: "𝕐",
	Yscr: "𝒴",
	Yuml: "Ÿ",
	ZHcy: "Ж",
	Zacute: "Ź",
	Zcaron: "Ž",
	Zcy: "З",
	Zdot: "Ż",
	ZeroWidthSpace: "​",
	Zeta: "Ζ",
	Zfr: "ℨ",
	Zopf: "ℤ",
	Zscr: "𝒵",
	aacute: "á",
	abreve: "ă",
	ac: "∾",
	acE: "∾̳",
	acd: "∿",
	acirc: "â",
	acute: "´",
	acy: "а",
	aelig: "æ",
	af: "⁡",
	afr: "𝔞",
	agrave: "à",
	alefsym: "ℵ",
	aleph: "ℵ",
	alpha: "α",
	amacr: "ā",
	amalg: "⨿",
	amp: "&",
	and: "∧",
	andand: "⩕",
	andd: "⩜",
	andslope: "⩘",
	andv: "⩚",
	ang: "∠",
	ange: "⦤",
	angle: "∠",
	angmsd: "∡",
	angmsdaa: "⦨",
	angmsdab: "⦩",
	angmsdac: "⦪",
	angmsdad: "⦫",
	angmsdae: "⦬",
	angmsdaf: "⦭",
	angmsdag: "⦮",
	angmsdah: "⦯",
	angrt: "∟",
	angrtvb: "⊾",
	angrtvbd: "⦝",
	angsph: "∢",
	angst: "Å",
	angzarr: "⍼",
	aogon: "ą",
	aopf: "𝕒",
	ap: "≈",
	apE: "⩰",
	apacir: "⩯",
	ape: "≊",
	apid: "≋",
	apos: "'",
	approx: "≈",
	approxeq: "≊",
	aring: "å",
	ascr: "𝒶",
	ast: "*",
	asymp: "≈",
	asympeq: "≍",
	atilde: "ã",
	auml: "ä",
	awconint: "∳",
	awint: "⨑",
	bNot: "⫭",
	backcong: "≌",
	backepsilon: "϶",
	backprime: "‵",
	backsim: "∽",
	backsimeq: "⋍",
	barvee: "⊽",
	barwed: "⌅",
	barwedge: "⌅",
	bbrk: "⎵",
	bbrktbrk: "⎶",
	bcong: "≌",
	bcy: "б",
	bdquo: "„",
	becaus: "∵",
	because: "∵",
	bemptyv: "⦰",
	bepsi: "϶",
	bernou: "ℬ",
	beta: "β",
	beth: "ℶ",
	between: "≬",
	bfr: "𝔟",
	bigcap: "⋂",
	bigcirc: "◯",
	bigcup: "⋃",
	bigodot: "⨀",
	bigoplus: "⨁",
	bigotimes: "⨂",
	bigsqcup: "⨆",
	bigstar: "★",
	bigtriangledown: "▽",
	bigtriangleup: "△",
	biguplus: "⨄",
	bigvee: "⋁",
	bigwedge: "⋀",
	bkarow: "⤍",
	blacklozenge: "⧫",
	blacksquare: "▪",
	blacktriangle: "▴",
	blacktriangledown: "▾",
	blacktriangleleft: "◂",
	blacktriangleright: "▸",
	blank: "␣",
	blk12: "▒",
	blk14: "░",
	blk34: "▓",
	block: "█",
	bne: "=⃥",
	bnequiv: "≡⃥",
	bnot: "⌐",
	bopf: "𝕓",
	bot: "⊥",
	bottom: "⊥",
	bowtie: "⋈",
	boxDL: "╗",
	boxDR: "╔",
	boxDl: "╖",
	boxDr: "╓",
	boxH: "═",
	boxHD: "╦",
	boxHU: "╩",
	boxHd: "╤",
	boxHu: "╧",
	boxUL: "╝",
	boxUR: "╚",
	boxUl: "╜",
	boxUr: "╙",
	boxV: "║",
	boxVH: "╬",
	boxVL: "╣",
	boxVR: "╠",
	boxVh: "╫",
	boxVl: "╢",
	boxVr: "╟",
	boxbox: "⧉",
	boxdL: "╕",
	boxdR: "╒",
	boxdl: "┐",
	boxdr: "┌",
	boxh: "─",
	boxhD: "╥",
	boxhU: "╨",
	boxhd: "┬",
	boxhu: "┴",
	boxminus: "⊟",
	boxplus: "⊞",
	boxtimes: "⊠",
	boxuL: "╛",
	boxuR: "╘",
	boxul: "┘",
	boxur: "└",
	boxv: "│",
	boxvH: "╪",
	boxvL: "╡",
	boxvR: "╞",
	boxvh: "┼",
	boxvl: "┤",
	boxvr: "├",
	bprime: "‵",
	breve: "˘",
	brvbar: "¦",
	bscr: "𝒷",
	bsemi: "⁏",
	bsim: "∽",
	bsime: "⋍",
	bsol: "\\",
	bsolb: "⧅",
	bsolhsub: "⟈",
	bull: "•",
	bullet: "•",
	bump: "≎",
	bumpE: "⪮",
	bumpe: "≏",
	bumpeq: "≏",
	cacute: "ć",
	cap: "∩",
	capand: "⩄",
	capbrcup: "⩉",
	capcap: "⩋",
	capcup: "⩇",
	capdot: "⩀",
	caps: "∩︀",
	caret: "⁁",
	caron: "ˇ",
	ccaps: "⩍",
	ccaron: "č",
	ccedil: "ç",
	ccirc: "ĉ",
	ccups: "⩌",
	ccupssm: "⩐",
	cdot: "ċ",
	cedil: "¸",
	cemptyv: "⦲",
	cent: "¢",
	centerdot: "·",
	cfr: "𝔠",
	chcy: "ч",
	check: "✓",
	checkmark: "✓",
	chi: "χ",
	cir: "○",
	cirE: "⧃",
	circ: "ˆ",
	circeq: "≗",
	circlearrowleft: "↺",
	circlearrowright: "↻",
	circledR: "®",
	circledS: "Ⓢ",
	circledast: "⊛",
	circledcirc: "⊚",
	circleddash: "⊝",
	cire: "≗",
	cirfnint: "⨐",
	cirmid: "⫯",
	cirscir: "⧂",
	clubs: "♣",
	clubsuit: "♣",
	colon: ":",
	colone: "≔",
	coloneq: "≔",
	comma: ",",
	commat: "@",
	comp: "∁",
	compfn: "∘",
	complement: "∁",
	complexes: "ℂ",
	cong: "≅",
	congdot: "⩭",
	conint: "∮",
	copf: "𝕔",
	coprod: "∐",
	copy: "©",
	copysr: "℗",
	crarr: "↵",
	cross: "✗",
	cscr: "𝒸",
	csub: "⫏",
	csube: "⫑",
	csup: "⫐",
	csupe: "⫒",
	ctdot: "⋯",
	cudarrl: "⤸",
	cudarrr: "⤵",
	cuepr: "⋞",
	cuesc: "⋟",
	cularr: "↶",
	cularrp: "⤽",
	cup: "∪",
	cupbrcap: "⩈",
	cupcap: "⩆",
	cupcup: "⩊",
	cupdot: "⊍",
	cupor: "⩅",
	cups: "∪︀",
	curarr: "↷",
	curarrm: "⤼",
	curlyeqprec: "⋞",
	curlyeqsucc: "⋟",
	curlyvee: "⋎",
	curlywedge: "⋏",
	curren: "¤",
	curvearrowleft: "↶",
	curvearrowright: "↷",
	cuvee: "⋎",
	cuwed: "⋏",
	cwconint: "∲",
	cwint: "∱",
	cylcty: "⌭",
	dArr: "⇓",
	dHar: "⥥",
	dagger: "†",
	daleth: "ℸ",
	darr: "↓",
	dash: "‐",
	dashv: "⊣",
	dbkarow: "⤏",
	dblac: "˝",
	dcaron: "ď",
	dcy: "д",
	dd: "ⅆ",
	ddagger: "‡",
	ddarr: "⇊",
	ddotseq: "⩷",
	deg: "°",
	delta: "δ",
	demptyv: "⦱",
	dfisht: "⥿",
	dfr: "𝔡",
	dharl: "⇃",
	dharr: "⇂",
	diam: "⋄",
	diamond: "⋄",
	diamondsuit: "♦",
	diams: "♦",
	die: "¨",
	digamma: "ϝ",
	disin: "⋲",
	div: "÷",
	divide: "÷",
	divideontimes: "⋇",
	divonx: "⋇",
	djcy: "ђ",
	dlcorn: "⌞",
	dlcrop: "⌍",
	dollar: "$",
	dopf: "𝕕",
	dot: "˙",
	doteq: "≐",
	doteqdot: "≑",
	dotminus: "∸",
	dotplus: "∔",
	dotsquare: "⊡",
	doublebarwedge: "⌆",
	downarrow: "↓",
	downdownarrows: "⇊",
	downharpoonleft: "⇃",
	downharpoonright: "⇂",
	drbkarow: "⤐",
	drcorn: "⌟",
	drcrop: "⌌",
	dscr: "𝒹",
	dscy: "ѕ",
	dsol: "⧶",
	dstrok: "đ",
	dtdot: "⋱",
	dtri: "▿",
	dtrif: "▾",
	duarr: "⇵",
	duhar: "⥯",
	dwangle: "⦦",
	dzcy: "џ",
	dzigrarr: "⟿",
	eDDot: "⩷",
	eDot: "≑",
	eacute: "é",
	easter: "⩮",
	ecaron: "ě",
	ecir: "≖",
	ecirc: "ê",
	ecolon: "≕",
	ecy: "э",
	edot: "ė",
	ee: "ⅇ",
	efDot: "≒",
	efr: "𝔢",
	eg: "⪚",
	egrave: "è",
	egs: "⪖",
	egsdot: "⪘",
	el: "⪙",
	elinters: "⏧",
	ell: "ℓ",
	els: "⪕",
	elsdot: "⪗",
	emacr: "ē",
	empty: "∅",
	emptyset: "∅",
	emptyv: "∅",
	emsp13: " ",
	emsp14: " ",
	emsp: " ",
	eng: "ŋ",
	ensp: " ",
	eogon: "ę",
	eopf: "𝕖",
	epar: "⋕",
	eparsl: "⧣",
	eplus: "⩱",
	epsi: "ε",
	epsilon: "ε",
	epsiv: "ϵ",
	eqcirc: "≖",
	eqcolon: "≕",
	eqsim: "≂",
	eqslantgtr: "⪖",
	eqslantless: "⪕",
	equals: "=",
	equest: "≟",
	equiv: "≡",
	equivDD: "⩸",
	eqvparsl: "⧥",
	erDot: "≓",
	erarr: "⥱",
	escr: "ℯ",
	esdot: "≐",
	esim: "≂",
	eta: "η",
	eth: "ð",
	euml: "ë",
	euro: "€",
	excl: "!",
	exist: "∃",
	expectation: "ℰ",
	exponentiale: "ⅇ",
	fallingdotseq: "≒",
	fcy: "ф",
	female: "♀",
	ffilig: "ﬃ",
	fflig: "ﬀ",
	ffllig: "ﬄ",
	ffr: "𝔣",
	filig: "ﬁ",
	fjlig: "fj",
	flat: "♭",
	fllig: "ﬂ",
	fltns: "▱",
	fnof: "ƒ",
	fopf: "𝕗",
	forall: "∀",
	fork: "⋔",
	forkv: "⫙",
	fpartint: "⨍",
	frac12: "½",
	frac13: "⅓",
	frac14: "¼",
	frac15: "⅕",
	frac16: "⅙",
	frac18: "⅛",
	frac23: "⅔",
	frac25: "⅖",
	frac34: "¾",
	frac35: "⅗",
	frac38: "⅜",
	frac45: "⅘",
	frac56: "⅚",
	frac58: "⅝",
	frac78: "⅞",
	frasl: "⁄",
	frown: "⌢",
	fscr: "𝒻",
	gE: "≧",
	gEl: "⪌",
	gacute: "ǵ",
	gamma: "γ",
	gammad: "ϝ",
	gap: "⪆",
	gbreve: "ğ",
	gcirc: "ĝ",
	gcy: "г",
	gdot: "ġ",
	ge: "≥",
	gel: "⋛",
	geq: "≥",
	geqq: "≧",
	geqslant: "⩾",
	ges: "⩾",
	gescc: "⪩",
	gesdot: "⪀",
	gesdoto: "⪂",
	gesdotol: "⪄",
	gesl: "⋛︀",
	gesles: "⪔",
	gfr: "𝔤",
	gg: "≫",
	ggg: "⋙",
	gimel: "ℷ",
	gjcy: "ѓ",
	gl: "≷",
	glE: "⪒",
	gla: "⪥",
	glj: "⪤",
	gnE: "≩",
	gnap: "⪊",
	gnapprox: "⪊",
	gne: "⪈",
	gneq: "⪈",
	gneqq: "≩",
	gnsim: "⋧",
	gopf: "𝕘",
	grave: "`",
	gscr: "ℊ",
	gsim: "≳",
	gsime: "⪎",
	gsiml: "⪐",
	gt: ">",
	gtcc: "⪧",
	gtcir: "⩺",
	gtdot: "⋗",
	gtlPar: "⦕",
	gtquest: "⩼",
	gtrapprox: "⪆",
	gtrarr: "⥸",
	gtrdot: "⋗",
	gtreqless: "⋛",
	gtreqqless: "⪌",
	gtrless: "≷",
	gtrsim: "≳",
	gvertneqq: "≩︀",
	gvnE: "≩︀",
	hArr: "⇔",
	hairsp: " ",
	half: "½",
	hamilt: "ℋ",
	hardcy: "ъ",
	harr: "↔",
	harrcir: "⥈",
	harrw: "↭",
	hbar: "ℏ",
	hcirc: "ĥ",
	hearts: "♥",
	heartsuit: "♥",
	hellip: "…",
	hercon: "⊹",
	hfr: "𝔥",
	hksearow: "⤥",
	hkswarow: "⤦",
	hoarr: "⇿",
	homtht: "∻",
	hookleftarrow: "↩",
	hookrightarrow: "↪",
	hopf: "𝕙",
	horbar: "―",
	hscr: "𝒽",
	hslash: "ℏ",
	hstrok: "ħ",
	hybull: "⁃",
	hyphen: "‐",
	iacute: "í",
	ic: "⁣",
	icirc: "î",
	icy: "и",
	iecy: "е",
	iexcl: "¡",
	iff: "⇔",
	ifr: "𝔦",
	igrave: "ì",
	ii: "ⅈ",
	iiiint: "⨌",
	iiint: "∭",
	iinfin: "⧜",
	iiota: "℩",
	ijlig: "ĳ",
	imacr: "ī",
	image: "ℑ",
	imagline: "ℐ",
	imagpart: "ℑ",
	imath: "ı",
	imof: "⊷",
	imped: "Ƶ",
	in: "∈",
	incare: "℅",
	infin: "∞",
	infintie: "⧝",
	inodot: "ı",
	int: "∫",
	intcal: "⊺",
	integers: "ℤ",
	intercal: "⊺",
	intlarhk: "⨗",
	intprod: "⨼",
	iocy: "ё",
	iogon: "į",
	iopf: "𝕚",
	iota: "ι",
	iprod: "⨼",
	iquest: "¿",
	iscr: "𝒾",
	isin: "∈",
	isinE: "⋹",
	isindot: "⋵",
	isins: "⋴",
	isinsv: "⋳",
	isinv: "∈",
	it: "⁢",
	itilde: "ĩ",
	iukcy: "і",
	iuml: "ï",
	jcirc: "ĵ",
	jcy: "й",
	jfr: "𝔧",
	jmath: "ȷ",
	jopf: "𝕛",
	jscr: "𝒿",
	jsercy: "ј",
	jukcy: "є",
	kappa: "κ",
	kappav: "ϰ",
	kcedil: "ķ",
	kcy: "к",
	kfr: "𝔨",
	kgreen: "ĸ",
	khcy: "х",
	kjcy: "ќ",
	kopf: "𝕜",
	kscr: "𝓀",
	lAarr: "⇚",
	lArr: "⇐",
	lAtail: "⤛",
	lBarr: "⤎",
	lE: "≦",
	lEg: "⪋",
	lHar: "⥢",
	lacute: "ĺ",
	laemptyv: "⦴",
	lagran: "ℒ",
	lambda: "λ",
	lang: "⟨",
	langd: "⦑",
	langle: "⟨",
	lap: "⪅",
	laquo: "«",
	larr: "←",
	larrb: "⇤",
	larrbfs: "⤟",
	larrfs: "⤝",
	larrhk: "↩",
	larrlp: "↫",
	larrpl: "⤹",
	larrsim: "⥳",
	larrtl: "↢",
	lat: "⪫",
	latail: "⤙",
	late: "⪭",
	lates: "⪭︀",
	lbarr: "⤌",
	lbbrk: "❲",
	lbrace: "{",
	lbrack: "[",
	lbrke: "⦋",
	lbrksld: "⦏",
	lbrkslu: "⦍",
	lcaron: "ľ",
	lcedil: "ļ",
	lceil: "⌈",
	lcub: "{",
	lcy: "л",
	ldca: "⤶",
	ldquo: "“",
	ldquor: "„",
	ldrdhar: "⥧",
	ldrushar: "⥋",
	ldsh: "↲",
	le: "≤",
	leftarrow: "←",
	leftarrowtail: "↢",
	leftharpoondown: "↽",
	leftharpoonup: "↼",
	leftleftarrows: "⇇",
	leftrightarrow: "↔",
	leftrightarrows: "⇆",
	leftrightharpoons: "⇋",
	leftrightsquigarrow: "↭",
	leftthreetimes: "⋋",
	leg: "⋚",
	leq: "≤",
	leqq: "≦",
	leqslant: "⩽",
	les: "⩽",
	lescc: "⪨",
	lesdot: "⩿",
	lesdoto: "⪁",
	lesdotor: "⪃",
	lesg: "⋚︀",
	lesges: "⪓",
	lessapprox: "⪅",
	lessdot: "⋖",
	lesseqgtr: "⋚",
	lesseqqgtr: "⪋",
	lessgtr: "≶",
	lesssim: "≲",
	lfisht: "⥼",
	lfloor: "⌊",
	lfr: "𝔩",
	lg: "≶",
	lgE: "⪑",
	lhard: "↽",
	lharu: "↼",
	lharul: "⥪",
	lhblk: "▄",
	ljcy: "љ",
	ll: "≪",
	llarr: "⇇",
	llcorner: "⌞",
	llhard: "⥫",
	lltri: "◺",
	lmidot: "ŀ",
	lmoust: "⎰",
	lmoustache: "⎰",
	lnE: "≨",
	lnap: "⪉",
	lnapprox: "⪉",
	lne: "⪇",
	lneq: "⪇",
	lneqq: "≨",
	lnsim: "⋦",
	loang: "⟬",
	loarr: "⇽",
	lobrk: "⟦",
	longleftarrow: "⟵",
	longleftrightarrow: "⟷",
	longmapsto: "⟼",
	longrightarrow: "⟶",
	looparrowleft: "↫",
	looparrowright: "↬",
	lopar: "⦅",
	lopf: "𝕝",
	loplus: "⨭",
	lotimes: "⨴",
	lowast: "∗",
	lowbar: "_",
	loz: "◊",
	lozenge: "◊",
	lozf: "⧫",
	lpar: "(",
	lparlt: "⦓",
	lrarr: "⇆",
	lrcorner: "⌟",
	lrhar: "⇋",
	lrhard: "⥭",
	lrm: "‎",
	lrtri: "⊿",
	lsaquo: "‹",
	lscr: "𝓁",
	lsh: "↰",
	lsim: "≲",
	lsime: "⪍",
	lsimg: "⪏",
	lsqb: "[",
	lsquo: "‘",
	lsquor: "‚",
	lstrok: "ł",
	lt: "<",
	ltcc: "⪦",
	ltcir: "⩹",
	ltdot: "⋖",
	lthree: "⋋",
	ltimes: "⋉",
	ltlarr: "⥶",
	ltquest: "⩻",
	ltrPar: "⦖",
	ltri: "◃",
	ltrie: "⊴",
	ltrif: "◂",
	lurdshar: "⥊",
	luruhar: "⥦",
	lvertneqq: "≨︀",
	lvnE: "≨︀",
	mDDot: "∺",
	macr: "¯",
	male: "♂",
	malt: "✠",
	maltese: "✠",
	map: "↦",
	mapsto: "↦",
	mapstodown: "↧",
	mapstoleft: "↤",
	mapstoup: "↥",
	marker: "▮",
	mcomma: "⨩",
	mcy: "м",
	mdash: "—",
	measuredangle: "∡",
	mfr: "𝔪",
	mho: "℧",
	micro: "µ",
	mid: "∣",
	midast: "*",
	midcir: "⫰",
	middot: "·",
	minus: "−",
	minusb: "⊟",
	minusd: "∸",
	minusdu: "⨪",
	mlcp: "⫛",
	mldr: "…",
	mnplus: "∓",
	models: "⊧",
	mopf: "𝕞",
	mp: "∓",
	mscr: "𝓂",
	mstpos: "∾",
	mu: "μ",
	multimap: "⊸",
	mumap: "⊸",
	nGg: "⋙̸",
	nGt: "≫⃒",
	nGtv: "≫̸",
	nLeftarrow: "⇍",
	nLeftrightarrow: "⇎",
	nLl: "⋘̸",
	nLt: "≪⃒",
	nLtv: "≪̸",
	nRightarrow: "⇏",
	nVDash: "⊯",
	nVdash: "⊮",
	nabla: "∇",
	nacute: "ń",
	nang: "∠⃒",
	nap: "≉",
	napE: "⩰̸",
	napid: "≋̸",
	napos: "ŉ",
	napprox: "≉",
	natur: "♮",
	natural: "♮",
	naturals: "ℕ",
	nbsp: "\xA0",
	nbump: "≎̸",
	nbumpe: "≏̸",
	ncap: "⩃",
	ncaron: "ň",
	ncedil: "ņ",
	ncong: "≇",
	ncongdot: "⩭̸",
	ncup: "⩂",
	ncy: "н",
	ndash: "–",
	ne: "≠",
	neArr: "⇗",
	nearhk: "⤤",
	nearr: "↗",
	nearrow: "↗",
	nedot: "≐̸",
	nequiv: "≢",
	nesear: "⤨",
	nesim: "≂̸",
	nexist: "∄",
	nexists: "∄",
	nfr: "𝔫",
	ngE: "≧̸",
	nge: "≱",
	ngeq: "≱",
	ngeqq: "≧̸",
	ngeqslant: "⩾̸",
	nges: "⩾̸",
	ngsim: "≵",
	ngt: "≯",
	ngtr: "≯",
	nhArr: "⇎",
	nharr: "↮",
	nhpar: "⫲",
	ni: "∋",
	nis: "⋼",
	nisd: "⋺",
	niv: "∋",
	njcy: "њ",
	nlArr: "⇍",
	nlE: "≦̸",
	nlarr: "↚",
	nldr: "‥",
	nle: "≰",
	nleftarrow: "↚",
	nleftrightarrow: "↮",
	nleq: "≰",
	nleqq: "≦̸",
	nleqslant: "⩽̸",
	nles: "⩽̸",
	nless: "≮",
	nlsim: "≴",
	nlt: "≮",
	nltri: "⋪",
	nltrie: "⋬",
	nmid: "∤",
	nopf: "𝕟",
	not: "¬",
	notin: "∉",
	notinE: "⋹̸",
	notindot: "⋵̸",
	notinva: "∉",
	notinvb: "⋷",
	notinvc: "⋶",
	notni: "∌",
	notniva: "∌",
	notnivb: "⋾",
	notnivc: "⋽",
	npar: "∦",
	nparallel: "∦",
	nparsl: "⫽⃥",
	npart: "∂̸",
	npolint: "⨔",
	npr: "⊀",
	nprcue: "⋠",
	npre: "⪯̸",
	nprec: "⊀",
	npreceq: "⪯̸",
	nrArr: "⇏",
	nrarr: "↛",
	nrarrc: "⤳̸",
	nrarrw: "↝̸",
	nrightarrow: "↛",
	nrtri: "⋫",
	nrtrie: "⋭",
	nsc: "⊁",
	nsccue: "⋡",
	nsce: "⪰̸",
	nscr: "𝓃",
	nshortmid: "∤",
	nshortparallel: "∦",
	nsim: "≁",
	nsime: "≄",
	nsimeq: "≄",
	nsmid: "∤",
	nspar: "∦",
	nsqsube: "⋢",
	nsqsupe: "⋣",
	nsub: "⊄",
	nsubE: "⫅̸",
	nsube: "⊈",
	nsubset: "⊂⃒",
	nsubseteq: "⊈",
	nsubseteqq: "⫅̸",
	nsucc: "⊁",
	nsucceq: "⪰̸",
	nsup: "⊅",
	nsupE: "⫆̸",
	nsupe: "⊉",
	nsupset: "⊃⃒",
	nsupseteq: "⊉",
	nsupseteqq: "⫆̸",
	ntgl: "≹",
	ntilde: "ñ",
	ntlg: "≸",
	ntriangleleft: "⋪",
	ntrianglelefteq: "⋬",
	ntriangleright: "⋫",
	ntrianglerighteq: "⋭",
	nu: "ν",
	num: "#",
	numero: "№",
	numsp: " ",
	nvDash: "⊭",
	nvHarr: "⤄",
	nvap: "≍⃒",
	nvdash: "⊬",
	nvge: "≥⃒",
	nvgt: ">⃒",
	nvinfin: "⧞",
	nvlArr: "⤂",
	nvle: "≤⃒",
	nvlt: "<⃒",
	nvltrie: "⊴⃒",
	nvrArr: "⤃",
	nvrtrie: "⊵⃒",
	nvsim: "∼⃒",
	nwArr: "⇖",
	nwarhk: "⤣",
	nwarr: "↖",
	nwarrow: "↖",
	nwnear: "⤧",
	oS: "Ⓢ",
	oacute: "ó",
	oast: "⊛",
	ocir: "⊚",
	ocirc: "ô",
	ocy: "о",
	odash: "⊝",
	odblac: "ő",
	odiv: "⨸",
	odot: "⊙",
	odsold: "⦼",
	oelig: "œ",
	ofcir: "⦿",
	ofr: "𝔬",
	ogon: "˛",
	ograve: "ò",
	ogt: "⧁",
	ohbar: "⦵",
	ohm: "Ω",
	oint: "∮",
	olarr: "↺",
	olcir: "⦾",
	olcross: "⦻",
	oline: "‾",
	olt: "⧀",
	omacr: "ō",
	omega: "ω",
	omicron: "ο",
	omid: "⦶",
	ominus: "⊖",
	oopf: "𝕠",
	opar: "⦷",
	operp: "⦹",
	oplus: "⊕",
	or: "∨",
	orarr: "↻",
	ord: "⩝",
	order: "ℴ",
	orderof: "ℴ",
	ordf: "ª",
	ordm: "º",
	origof: "⊶",
	oror: "⩖",
	orslope: "⩗",
	orv: "⩛",
	oscr: "ℴ",
	oslash: "ø",
	osol: "⊘",
	otilde: "õ",
	otimes: "⊗",
	otimesas: "⨶",
	ouml: "ö",
	ovbar: "⌽",
	par: "∥",
	para: "¶",
	parallel: "∥",
	parsim: "⫳",
	parsl: "⫽",
	part: "∂",
	pcy: "п",
	percnt: "%",
	period: ".",
	permil: "‰",
	perp: "⊥",
	pertenk: "‱",
	pfr: "𝔭",
	phi: "φ",
	phiv: "ϕ",
	phmmat: "ℳ",
	phone: "☎",
	pi: "π",
	pitchfork: "⋔",
	piv: "ϖ",
	planck: "ℏ",
	planckh: "ℎ",
	plankv: "ℏ",
	plus: "+",
	plusacir: "⨣",
	plusb: "⊞",
	pluscir: "⨢",
	plusdo: "∔",
	plusdu: "⨥",
	pluse: "⩲",
	plusmn: "±",
	plussim: "⨦",
	plustwo: "⨧",
	pm: "±",
	pointint: "⨕",
	popf: "𝕡",
	pound: "£",
	pr: "≺",
	prE: "⪳",
	prap: "⪷",
	prcue: "≼",
	pre: "⪯",
	prec: "≺",
	precapprox: "⪷",
	preccurlyeq: "≼",
	preceq: "⪯",
	precnapprox: "⪹",
	precneqq: "⪵",
	precnsim: "⋨",
	precsim: "≾",
	prime: "′",
	primes: "ℙ",
	prnE: "⪵",
	prnap: "⪹",
	prnsim: "⋨",
	prod: "∏",
	profalar: "⌮",
	profline: "⌒",
	profsurf: "⌓",
	prop: "∝",
	propto: "∝",
	prsim: "≾",
	prurel: "⊰",
	pscr: "𝓅",
	psi: "ψ",
	puncsp: " ",
	qfr: "𝔮",
	qint: "⨌",
	qopf: "𝕢",
	qprime: "⁗",
	qscr: "𝓆",
	quaternions: "ℍ",
	quatint: "⨖",
	quest: "?",
	questeq: "≟",
	quot: "\"",
	rAarr: "⇛",
	rArr: "⇒",
	rAtail: "⤜",
	rBarr: "⤏",
	rHar: "⥤",
	race: "∽̱",
	racute: "ŕ",
	radic: "√",
	raemptyv: "⦳",
	rang: "⟩",
	rangd: "⦒",
	range: "⦥",
	rangle: "⟩",
	raquo: "»",
	rarr: "→",
	rarrap: "⥵",
	rarrb: "⇥",
	rarrbfs: "⤠",
	rarrc: "⤳",
	rarrfs: "⤞",
	rarrhk: "↪",
	rarrlp: "↬",
	rarrpl: "⥅",
	rarrsim: "⥴",
	rarrtl: "↣",
	rarrw: "↝",
	ratail: "⤚",
	ratio: "∶",
	rationals: "ℚ",
	rbarr: "⤍",
	rbbrk: "❳",
	rbrace: "}",
	rbrack: "]",
	rbrke: "⦌",
	rbrksld: "⦎",
	rbrkslu: "⦐",
	rcaron: "ř",
	rcedil: "ŗ",
	rceil: "⌉",
	rcub: "}",
	rcy: "р",
	rdca: "⤷",
	rdldhar: "⥩",
	rdquo: "”",
	rdquor: "”",
	rdsh: "↳",
	real: "ℜ",
	realine: "ℛ",
	realpart: "ℜ",
	reals: "ℝ",
	rect: "▭",
	reg: "®",
	rfisht: "⥽",
	rfloor: "⌋",
	rfr: "𝔯",
	rhard: "⇁",
	rharu: "⇀",
	rharul: "⥬",
	rho: "ρ",
	rhov: "ϱ",
	rightarrow: "→",
	rightarrowtail: "↣",
	rightharpoondown: "⇁",
	rightharpoonup: "⇀",
	rightleftarrows: "⇄",
	rightleftharpoons: "⇌",
	rightrightarrows: "⇉",
	rightsquigarrow: "↝",
	rightthreetimes: "⋌",
	ring: "˚",
	risingdotseq: "≓",
	rlarr: "⇄",
	rlhar: "⇌",
	rlm: "‏",
	rmoust: "⎱",
	rmoustache: "⎱",
	rnmid: "⫮",
	roang: "⟭",
	roarr: "⇾",
	robrk: "⟧",
	ropar: "⦆",
	ropf: "𝕣",
	roplus: "⨮",
	rotimes: "⨵",
	rpar: ")",
	rpargt: "⦔",
	rppolint: "⨒",
	rrarr: "⇉",
	rsaquo: "›",
	rscr: "𝓇",
	rsh: "↱",
	rsqb: "]",
	rsquo: "’",
	rsquor: "’",
	rthree: "⋌",
	rtimes: "⋊",
	rtri: "▹",
	rtrie: "⊵",
	rtrif: "▸",
	rtriltri: "⧎",
	ruluhar: "⥨",
	rx: "℞",
	sacute: "ś",
	sbquo: "‚",
	sc: "≻",
	scE: "⪴",
	scap: "⪸",
	scaron: "š",
	sccue: "≽",
	sce: "⪰",
	scedil: "ş",
	scirc: "ŝ",
	scnE: "⪶",
	scnap: "⪺",
	scnsim: "⋩",
	scpolint: "⨓",
	scsim: "≿",
	scy: "с",
	sdot: "⋅",
	sdotb: "⊡",
	sdote: "⩦",
	seArr: "⇘",
	searhk: "⤥",
	searr: "↘",
	searrow: "↘",
	sect: "§",
	semi: ";",
	seswar: "⤩",
	setminus: "∖",
	setmn: "∖",
	sext: "✶",
	sfr: "𝔰",
	sfrown: "⌢",
	sharp: "♯",
	shchcy: "щ",
	shcy: "ш",
	shortmid: "∣",
	shortparallel: "∥",
	shy: "­",
	sigma: "σ",
	sigmaf: "ς",
	sigmav: "ς",
	sim: "∼",
	simdot: "⩪",
	sime: "≃",
	simeq: "≃",
	simg: "⪞",
	simgE: "⪠",
	siml: "⪝",
	simlE: "⪟",
	simne: "≆",
	simplus: "⨤",
	simrarr: "⥲",
	slarr: "←",
	smallsetminus: "∖",
	smashp: "⨳",
	smeparsl: "⧤",
	smid: "∣",
	smile: "⌣",
	smt: "⪪",
	smte: "⪬",
	smtes: "⪬︀",
	softcy: "ь",
	sol: "/",
	solb: "⧄",
	solbar: "⌿",
	sopf: "𝕤",
	spades: "♠",
	spadesuit: "♠",
	spar: "∥",
	sqcap: "⊓",
	sqcaps: "⊓︀",
	sqcup: "⊔",
	sqcups: "⊔︀",
	sqsub: "⊏",
	sqsube: "⊑",
	sqsubset: "⊏",
	sqsubseteq: "⊑",
	sqsup: "⊐",
	sqsupe: "⊒",
	sqsupset: "⊐",
	sqsupseteq: "⊒",
	squ: "□",
	square: "□",
	squarf: "▪",
	squf: "▪",
	srarr: "→",
	sscr: "𝓈",
	ssetmn: "∖",
	ssmile: "⌣",
	sstarf: "⋆",
	star: "☆",
	starf: "★",
	straightepsilon: "ϵ",
	straightphi: "ϕ",
	strns: "¯",
	sub: "⊂",
	subE: "⫅",
	subdot: "⪽",
	sube: "⊆",
	subedot: "⫃",
	submult: "⫁",
	subnE: "⫋",
	subne: "⊊",
	subplus: "⪿",
	subrarr: "⥹",
	subset: "⊂",
	subseteq: "⊆",
	subseteqq: "⫅",
	subsetneq: "⊊",
	subsetneqq: "⫋",
	subsim: "⫇",
	subsub: "⫕",
	subsup: "⫓",
	succ: "≻",
	succapprox: "⪸",
	succcurlyeq: "≽",
	succeq: "⪰",
	succnapprox: "⪺",
	succneqq: "⪶",
	succnsim: "⋩",
	succsim: "≿",
	sum: "∑",
	sung: "♪",
	sup1: "¹",
	sup2: "²",
	sup3: "³",
	sup: "⊃",
	supE: "⫆",
	supdot: "⪾",
	supdsub: "⫘",
	supe: "⊇",
	supedot: "⫄",
	suphsol: "⟉",
	suphsub: "⫗",
	suplarr: "⥻",
	supmult: "⫂",
	supnE: "⫌",
	supne: "⊋",
	supplus: "⫀",
	supset: "⊃",
	supseteq: "⊇",
	supseteqq: "⫆",
	supsetneq: "⊋",
	supsetneqq: "⫌",
	supsim: "⫈",
	supsub: "⫔",
	supsup: "⫖",
	swArr: "⇙",
	swarhk: "⤦",
	swarr: "↙",
	swarrow: "↙",
	swnwar: "⤪",
	szlig: "ß",
	target: "⌖",
	tau: "τ",
	tbrk: "⎴",
	tcaron: "ť",
	tcedil: "ţ",
	tcy: "т",
	tdot: "⃛",
	telrec: "⌕",
	tfr: "𝔱",
	there4: "∴",
	therefore: "∴",
	theta: "θ",
	thetasym: "ϑ",
	thetav: "ϑ",
	thickapprox: "≈",
	thicksim: "∼",
	thinsp: " ",
	thkap: "≈",
	thksim: "∼",
	thorn: "þ",
	tilde: "˜",
	times: "×",
	timesb: "⊠",
	timesbar: "⨱",
	timesd: "⨰",
	tint: "∭",
	toea: "⤨",
	top: "⊤",
	topbot: "⌶",
	topcir: "⫱",
	topf: "𝕥",
	topfork: "⫚",
	tosa: "⤩",
	tprime: "‴",
	trade: "™",
	triangle: "▵",
	triangledown: "▿",
	triangleleft: "◃",
	trianglelefteq: "⊴",
	triangleq: "≜",
	triangleright: "▹",
	trianglerighteq: "⊵",
	tridot: "◬",
	trie: "≜",
	triminus: "⨺",
	triplus: "⨹",
	trisb: "⧍",
	tritime: "⨻",
	trpezium: "⏢",
	tscr: "𝓉",
	tscy: "ц",
	tshcy: "ћ",
	tstrok: "ŧ",
	twixt: "≬",
	twoheadleftarrow: "↞",
	twoheadrightarrow: "↠",
	uArr: "⇑",
	uHar: "⥣",
	uacute: "ú",
	uarr: "↑",
	ubrcy: "ў",
	ubreve: "ŭ",
	ucirc: "û",
	ucy: "у",
	udarr: "⇅",
	udblac: "ű",
	udhar: "⥮",
	ufisht: "⥾",
	ufr: "𝔲",
	ugrave: "ù",
	uharl: "↿",
	uharr: "↾",
	uhblk: "▀",
	ulcorn: "⌜",
	ulcorner: "⌜",
	ulcrop: "⌏",
	ultri: "◸",
	umacr: "ū",
	uml: "¨",
	uogon: "ų",
	uopf: "𝕦",
	uparrow: "↑",
	updownarrow: "↕",
	upharpoonleft: "↿",
	upharpoonright: "↾",
	uplus: "⊎",
	upsi: "υ",
	upsih: "ϒ",
	upsilon: "υ",
	upuparrows: "⇈",
	urcorn: "⌝",
	urcorner: "⌝",
	urcrop: "⌎",
	uring: "ů",
	urtri: "◹",
	uscr: "𝓊",
	utdot: "⋰",
	utilde: "ũ",
	utri: "▵",
	utrif: "▴",
	uuarr: "⇈",
	uuml: "ü",
	uwangle: "⦧",
	vArr: "⇕",
	vBar: "⫨",
	vBarv: "⫩",
	vDash: "⊨",
	vangrt: "⦜",
	varepsilon: "ϵ",
	varkappa: "ϰ",
	varnothing: "∅",
	varphi: "ϕ",
	varpi: "ϖ",
	varpropto: "∝",
	varr: "↕",
	varrho: "ϱ",
	varsigma: "ς",
	varsubsetneq: "⊊︀",
	varsubsetneqq: "⫋︀",
	varsupsetneq: "⊋︀",
	varsupsetneqq: "⫌︀",
	vartheta: "ϑ",
	vartriangleleft: "⊲",
	vartriangleright: "⊳",
	vcy: "в",
	vdash: "⊢",
	vee: "∨",
	veebar: "⊻",
	veeeq: "≚",
	vellip: "⋮",
	verbar: "|",
	vert: "|",
	vfr: "𝔳",
	vltri: "⊲",
	vnsub: "⊂⃒",
	vnsup: "⊃⃒",
	vopf: "𝕧",
	vprop: "∝",
	vrtri: "⊳",
	vscr: "𝓋",
	vsubnE: "⫋︀",
	vsubne: "⊊︀",
	vsupnE: "⫌︀",
	vsupne: "⊋︀",
	vzigzag: "⦚",
	wcirc: "ŵ",
	wedbar: "⩟",
	wedge: "∧",
	wedgeq: "≙",
	weierp: "℘",
	wfr: "𝔴",
	wopf: "𝕨",
	wp: "℘",
	wr: "≀",
	wreath: "≀",
	wscr: "𝓌",
	xcap: "⋂",
	xcirc: "◯",
	xcup: "⋃",
	xdtri: "▽",
	xfr: "𝔵",
	xhArr: "⟺",
	xharr: "⟷",
	xi: "ξ",
	xlArr: "⟸",
	xlarr: "⟵",
	xmap: "⟼",
	xnis: "⋻",
	xodot: "⨀",
	xopf: "𝕩",
	xoplus: "⨁",
	xotime: "⨂",
	xrArr: "⟹",
	xrarr: "⟶",
	xscr: "𝓍",
	xsqcup: "⨆",
	xuplus: "⨄",
	xutri: "△",
	xvee: "⋁",
	xwedge: "⋀",
	yacute: "ý",
	yacy: "я",
	ycirc: "ŷ",
	ycy: "ы",
	yen: "¥",
	yfr: "𝔶",
	yicy: "ї",
	yopf: "𝕪",
	yscr: "𝓎",
	yucy: "ю",
	yuml: "ÿ",
	zacute: "ź",
	zcaron: "ž",
	zcy: "з",
	zdot: "ż",
	zeetrf: "ℨ",
	zeta: "ζ",
	zfr: "𝔷",
	zhcy: "ж",
	zigrarr: "⇝",
	zopf: "𝕫",
	zscr: "𝓏",
	zwj: "‍",
	zwnj: "‌"
}, Um = {}.hasOwnProperty;
function Wm(e) {
	return Um.call(Hm, e) ? Hm[e] : !1;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function Gm(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function Km(e, t) {
	return e.length > 0 ? (Gm(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var qm = {}.hasOwnProperty;
function Jm(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) Ym(t, e[n]);
	return t;
}
function Ym(e, t) {
	let n;
	for (n in t) {
		let r = (qm.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			qm.call(r, a) || (r[a] = []);
			let e = i[a];
			Xm(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function Xm(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	Gm(e, 0, 0, r);
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function Zm(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function Qm(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var $m = ch(/[A-Za-z]/), eh = ch(/[\dA-Za-z]/), th = ch(/[#-'*+\--9=?A-Z^-~]/);
function nh(e) {
	return e !== null && (e < 32 || e === 127);
}
var rh = ch(/\d/), ih = ch(/[\dA-Fa-f]/), ah = ch(/[!-/:-@[-`{-~]/);
function Y(e) {
	return e !== null && e < -2;
}
function X(e) {
	return e !== null && (e < 0 || e === 32);
}
function Z(e) {
	return e === -2 || e === -1 || e === 32;
}
var oh = ch(/\p{P}|\p{S}/u), sh = ch(/\s/);
function ch(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function lh(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && eh(e.charCodeAt(n + 1)) && eh(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region node_modules/micromark-factory-space/index.js
function Q(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return Z(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return Z(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/content.js
var uh = { tokenize: dh };
function dh(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Q(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return Y(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/document.js
var fh = { tokenize: mh }, ph = { tokenize: hh };
function mh(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return Gm(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(ph, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(ph, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return Y(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			Gm(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function hh(e, t, n) {
	return Q(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function gh(e) {
	if (e === null || X(e) || sh(e)) return 1;
	if (oh(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function _h(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var vh = {
	name: "attention",
	resolveAll: yh,
	tokenize: bh
};
function yh(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			xh(d, -c), xh(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = Km(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = Km(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = Km(l, _h(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = Km(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = Km(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, Gm(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function bh(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = gh(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = gh(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function xh(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var Sh = {
	name: "autolink",
	tokenize: Ch
};
function Ch(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return $m(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || eh(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || eh(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || nh(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : th(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return eh(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || eh(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var wh = {
	partial: !0,
	tokenize: Th
};
function Th(e, t, n) {
	return r;
	function r(t) {
		return Z(t) ? Q(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || Y(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/block-quote.js
var Eh = {
	continuation: { tokenize: Oh },
	exit: kh,
	name: "blockQuote",
	tokenize: Dh
};
function Dh(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open || (e.enter("blockQuote", { _container: !0 }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return Z(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function Oh(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Z(t) ? Q(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Eh, t, n)(r);
	}
}
function kh(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var Ah = {
	name: "characterEscape",
	tokenize: jh
};
function jh(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return ah(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var Mh = {
	name: "characterReference",
	tokenize: Nh
};
function Nh(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = eh, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = ih, u) : (e.enter("characterReferenceValue"), a = 7, o = rh, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === eh && !Wm(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var Ph = {
	partial: !0,
	tokenize: Lh
}, Fh = {
	concrete: !0,
	name: "codeFenced",
	tokenize: Ih
};
function Ih(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), Z(t) ? Q(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || Y(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Ph, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || Y(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : Z(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Q(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || Y(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || Y(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && Z(t) ? Q(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || Y(t) ? e.check(Ph, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || Y(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), Z(t) ? Q(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), Z(t) ? Q(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || Y(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function Lh(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-indented.js
var Rh = {
	name: "codeIndented",
	tokenize: Bh
}, zh = {
	partial: !0,
	tokenize: Vh
};
function Bh(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), Q(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : Y(t) ? e.attempt(zh, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || Y(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function Vh(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : Q(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : Y(e) ? i(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-text.js
var Hh = {
	name: "codeText",
	previous: Wh,
	resolve: Uh,
	tokenize: Gh
};
function Uh(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function Wh(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Gh(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || Y(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var Kh = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && qh(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), qh(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), qh(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			qh(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			qh(this.left, t.reverse());
		}
	}
};
function qh(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function Jh(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new Kh(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, Yh(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return Gm(e, 0, Infinity, u.slice(0)), !l;
}
function Yh(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/content.js
var Xh = {
	resolve: Qh,
	tokenize: $h
}, Zh = {
	partial: !0,
	tokenize: eg
};
function Qh(e) {
	return Jh(e), e;
}
function $h(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : Y(t) ? e.check(Zh, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function eg(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Q(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || Y(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region node_modules/micromark-factory-destination/index.js
function tg(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || nh(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || Y(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || X(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || nh(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function ng(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : Y(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || Y(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c || (c = !Z(t)), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-title/index.js
function rg(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Q(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || Y(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-whitespace/index.js
function ig(e, t) {
	let n;
	return r;
	function r(i) {
		return Y(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Z(i) ? Q(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var ag = {
	name: "definition",
	tokenize: sg
}, og = {
	partial: !0,
	tokenize: cg
};
function sg(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return ng.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = Qm(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return X(t) ? ig(e, l)(t) : l(t);
	}
	function l(t) {
		return tg(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(og, d, d)(t);
	}
	function d(t) {
		return Z(t) ? Q(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || Y(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function cg(e, t, n) {
	return r;
	function r(t) {
		return X(t) ? ig(e, i)(t) : n(t);
	}
	function i(t) {
		return rg(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return Z(t) ? Q(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || Y(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var lg = {
	name: "hardBreakEscape",
	tokenize: ug
};
function ug(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return Y(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/heading-atx.js
var dg = {
	name: "headingAtx",
	resolve: fg,
	tokenize: pg
};
function fg(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, Gm(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function pg(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || X(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || Y(n) ? (e.exit("atxHeading"), t(n)) : Z(n) ? Q(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || X(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region node_modules/micromark-util-html-tag-name/index.js
var mg = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), hg = [
	"pre",
	"script",
	"style",
	"textarea"
], gg = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: yg,
	tokenize: bg
}, _g = {
	partial: !0,
	tokenize: Sg
}, vg = {
	partial: !0,
	tokenize: xg
};
function yg(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function bg(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : oe) : $m(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : $m(a) ? (e.consume(a), i = 4, r.interrupt ? t : oe) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : oe) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : D : m) : n(i);
	}
	function h(t) {
		return $m(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || X(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && hg.includes(l) ? (i = 1, r.interrupt ? t(s) : D(s)) : mg.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : D(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || eh(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : D) : n(i);
	}
	function v(t) {
		return Z(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || $m(t) ? (e.consume(t), b) : Z(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || eh(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : Z(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : Z(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || Y(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || X(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || Z(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), ee) : n(t);
	}
	function ee(t) {
		return t === null || Y(t) ? D(t) : Z(t) ? (e.consume(t), ee) : n(t);
	}
	function D(t) {
		return t === 45 && i === 2 ? (e.consume(t), ie) : t === 60 && i === 1 ? (e.consume(t), O) : t === 62 && i === 4 ? (e.consume(t), se) : t === 63 && i === 3 ? (e.consume(t), oe) : t === 93 && i === 5 ? (e.consume(t), ae) : Y(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(_g, ce, te)(t)) : t === null || Y(t) ? (e.exit("htmlFlowData"), te(t)) : (e.consume(t), D);
	}
	function te(t) {
		return e.check(vg, ne, ce)(t);
	}
	function ne(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), re;
	}
	function re(t) {
		return t === null || Y(t) ? te(t) : (e.enter("htmlFlowData"), D(t));
	}
	function ie(t) {
		return t === 45 ? (e.consume(t), oe) : D(t);
	}
	function O(t) {
		return t === 47 ? (e.consume(t), o = "", k) : D(t);
	}
	function k(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return hg.includes(n) ? (e.consume(t), se) : D(t);
		}
		return $m(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), k) : D(t);
	}
	function ae(t) {
		return t === 93 ? (e.consume(t), oe) : D(t);
	}
	function oe(t) {
		return t === 62 ? (e.consume(t), se) : t === 45 && i === 2 ? (e.consume(t), oe) : D(t);
	}
	function se(t) {
		return t === null || Y(t) ? (e.exit("htmlFlowData"), ce(t)) : (e.consume(t), se);
	}
	function ce(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function xg(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function Sg(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(wh, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var Cg = {
	name: "htmlText",
	tokenize: wg
};
function wg(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : $m(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : $m(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : Y(t) ? (o = d, O(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? ie(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : Y(t) ? (o = h, O(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? ie(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? ie(t) : Y(t) ? (o = v, O(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : Y(t) ? (o = y, O(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? ie(e) : y(e);
	}
	function x(t) {
		return $m(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || eh(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return Y(t) ? (o = C, O(t)) : Z(t) ? (e.consume(t), C) : ie(t);
	}
	function w(t) {
		return t === 45 || eh(t) ? (e.consume(t), w) : t === 47 || t === 62 || X(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), ie) : t === 58 || t === 95 || $m(t) ? (e.consume(t), E) : Y(t) ? (o = T, O(t)) : Z(t) ? (e.consume(t), T) : ie(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || eh(t) ? (e.consume(t), E) : ee(t);
	}
	function ee(t) {
		return t === 61 ? (e.consume(t), D) : Y(t) ? (o = ee, O(t)) : Z(t) ? (e.consume(t), ee) : T(t);
	}
	function D(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, te) : Y(t) ? (o = D, O(t)) : Z(t) ? (e.consume(t), D) : (e.consume(t), ne);
	}
	function te(t) {
		return t === i ? (e.consume(t), i = void 0, re) : t === null ? n(t) : Y(t) ? (o = te, O(t)) : (e.consume(t), te);
	}
	function ne(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || X(t) ? T(t) : (e.consume(t), ne);
	}
	function re(e) {
		return e === 47 || e === 62 || X(e) ? T(e) : n(e);
	}
	function ie(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function O(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), k;
	}
	function k(t) {
		return Z(t) ? Q(e, ae, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : ae(t);
	}
	function ae(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var Tg = {
	name: "labelEnd",
	resolveAll: kg,
	resolveTo: Ag,
	tokenize: jg
}, Eg = { tokenize: Mg }, Dg = { tokenize: Ng }, Og = { tokenize: Pg };
function kg(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && Gm(e, 0, e.length, n), e;
}
function Ag(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = Km(s, e.slice(a + 1, a + r + 3)), s = Km(s, [[
		"enter",
		u,
		t
	]]), s = Km(s, _h(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = Km(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = Km(s, e.slice(o + 1)), s = Km(s, [[
		"exit",
		c,
		t
	]]), Gm(e, a, e.length, s), e;
}
function jg(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(Qm(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(Eg, u, o ? u : d)(t) : t === 91 ? e.attempt(Dg, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Og, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function Mg(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return X(t) ? ig(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : tg(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return X(t) ? ig(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? rg(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return X(t) ? ig(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function Ng(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return ng.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(Qm(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function Pg(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-image.js
var Fg = {
	name: "labelStartImage",
	resolveAll: Tg.resolveAll,
	tokenize: Ig
};
function Ig(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-link.js
var Lg = {
	name: "labelStartLink",
	resolveAll: Tg.resolveAll,
	tokenize: Rg
};
function Rg(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/line-ending.js
var zg = {
	name: "lineEnding",
	tokenize: Bg
};
function Bg(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Q(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var Vg = {
	name: "thematicBreak",
	tokenize: Hg
};
function Hg(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || Y(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), Z(t) ? Q(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/list.js
var Ug = {
	continuation: { tokenize: qg },
	exit: Yg,
	name: "list",
	tokenize: Kg
}, Wg = {
	partial: !0,
	tokenize: Xg
}, Gg = {
	partial: !0,
	tokenize: Jg
};
function Kg(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : rh(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(Vg, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return rh(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(wh, r.interrupt ? n : u, e.attempt(Wg, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return Z(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function qg(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(wh, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Q(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !Z(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Gg, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, Q(e, e.attempt(Ug, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function Jg(e, t, n) {
	let r = this;
	return Q(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function Yg(e) {
	e.exit(this.containerState.type);
}
function Xg(e, t, n) {
	let r = this;
	return Q(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !Z(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var Zg = {
	name: "setextUnderline",
	resolveTo: Qg,
	tokenize: $g
};
function Qg(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function $g(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), Z(t) ? Q(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || Y(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/flow.js
var e_ = { tokenize: t_ };
function t_(e) {
	let t = this, n = e.attempt(wh, r, e.attempt(this.parser.constructs.flowInitial, i, Q(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Xh, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/text.js
var n_ = { resolveAll: o_() }, r_ = a_("string"), i_ = a_("text");
function a_(e) {
	return {
		resolveAll: o_(e === "text" ? s_ : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function o_(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function s_(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region node_modules/micromark/lib/constructs.js
var c_ = /* @__PURE__ */ f({
	attentionMarkers: () => g_,
	contentInitial: () => u_,
	disable: () => __,
	document: () => l_,
	flow: () => f_,
	flowInitial: () => d_,
	insideSpan: () => h_,
	string: () => p_,
	text: () => m_
}), l_ = {
	42: Ug,
	43: Ug,
	45: Ug,
	48: Ug,
	49: Ug,
	50: Ug,
	51: Ug,
	52: Ug,
	53: Ug,
	54: Ug,
	55: Ug,
	56: Ug,
	57: Ug,
	62: Eh
}, u_ = { 91: ag }, d_ = {
	[-2]: Rh,
	[-1]: Rh,
	32: Rh
}, f_ = {
	35: dg,
	42: Vg,
	45: [Zg, Vg],
	60: gg,
	61: Zg,
	95: Vg,
	96: Fh,
	126: Fh
}, p_ = {
	38: Mh,
	92: Ah
}, m_ = {
	[-5]: zg,
	[-4]: zg,
	[-3]: zg,
	33: Fg,
	38: Mh,
	42: vh,
	60: [Sh, Cg],
	91: Lg,
	92: [lg, Ah],
	93: Tg,
	95: vh,
	96: Hh
}, h_ = { null: [vh, n_] }, g_ = { null: [42, 95] }, __ = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function v_(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = Km(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = _h(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return b_(p(e), t);
	}
	function p(e) {
		return y_(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		Y(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && Gm(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function y_(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function b_(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region node_modules/micromark/lib/parse.js
function x_(e) {
	let t = {
		constructs: Jm([c_, ...(e || {}).extensions || []]),
		content: n(uh),
		defined: [],
		document: n(fh),
		flow: n(e_),
		lazy: {},
		string: n(r_),
		text: n(i_)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return v_(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function S_(e) {
	for (; !Jh(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var C_ = /[\0\t\n\r]/g;
function w_() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n && (i.charCodeAt(0) === 65279 && u++, n = void 0); u < i.length;) {
			if (C_.lastIndex = u, c = C_.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r && (s.push(-5), r = void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region node_modules/micromark-util-decode-string/index.js
var T_ = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function E_(e) {
	return e.replace(T_, D_);
}
function D_(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return Zm(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return Wm(n) || e;
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var O_ = {}.hasOwnProperty;
function k_(e, t, n) {
	return t && typeof t == "object" && (n = t, t = void 0), A_(n)(S_(x_(n).document().write(w_()(e, t, !0))));
}
function A_(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(Ce),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(ye),
			blockQuote: a(me),
			characterEscape: T,
			characterReference: T,
			codeFenced: a(he),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(he, o),
			codeText: a(ge, o),
			codeTextData: T,
			data: T,
			codeFlowValue: T,
			definition: a(_e),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(ve),
			hardBreakEscape: a(be),
			hardBreakTrailing: a(be),
			htmlFlow: a(xe, o),
			htmlFlowData: T,
			htmlText: a(xe, o),
			htmlTextData: T,
			image: a(Se),
			label: o,
			link: a(Ce),
			listItem: a(Te),
			listItemValue: f,
			listOrdered: a(we, d),
			listUnordered: a(we),
			paragraph: a(Ee),
			reference: A,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(ye),
			strong: a(M),
			thematicBreak: a(Oe)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: pe,
			autolinkProtocol: fe,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: ue,
			characterReferenceMarkerNumeric: ue,
			characterReferenceValue: de,
			characterReference: j,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: E,
			codeIndented: c(_),
			codeText: c(re),
			codeTextData: E,
			data: E,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: v,
			definitionTitleString: y,
			emphasis: c(),
			hardBreakEscape: c(D),
			hardBreakTrailing: c(D),
			htmlFlow: c(te),
			htmlFlowData: E,
			htmlText: c(ne),
			htmlTextData: E,
			image: c(O),
			label: ae,
			labelText: k,
			lineEnding: ee,
			link: c(ie),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: le,
			resourceDestinationString: oe,
			resourceTitleString: se,
			resource: ce,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	M_(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			O_.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || P_).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: j_(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: j_(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (!(t[1].type === "linePrefix" || t[1].type === "blockQuotePrefix" || t[1].type === "blockQuotePrefixWhitespace" || t[1].type === "blockQuoteMarker" || t[1].type === "listItemIndent")) break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: j_(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || P_).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + nm({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = j_(e.end);
	}
	function u() {
		return Rm(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function v(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Qm(this.sliceSerialize(e)).toLowerCase();
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function x(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth || (t.depth = this.sliceSerialize(e).length);
	}
	function S() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function w() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function T(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = De(), n.position = {
			start: j_(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = j_(e.end);
	}
	function ee(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = j_(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (T.call(this, e), E.call(this, e));
	}
	function D() {
		this.data.atHardBreak = !0;
	}
	function te() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ne() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function re() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ie() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function O() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function k(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = E_(t), n.identifier = Qm(t).toLowerCase();
	}
	function ae() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function oe() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function se() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function ce() {
		this.data.inReference = void 0;
	}
	function A() {
		this.data.referenceType = "collapsed";
	}
	function le(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Qm(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function ue(e) {
		this.data.characterReferenceType = e.type;
	}
	function de(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = Zm(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = Wm(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function j(e) {
		let t = this.stack.pop();
		t.position.end = j_(e.end);
	}
	function fe(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function pe(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function me() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function he() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function ge() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function _e() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function ve() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function ye() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function be() {
		return { type: "break" };
	}
	function xe() {
		return {
			type: "html",
			value: ""
		};
	}
	function Se() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function Ce() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function we(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function Te(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function Ee() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function M() {
		return {
			type: "strong",
			children: []
		};
	}
	function De() {
		return {
			type: "text",
			value: ""
		};
	}
	function Oe() {
		return { type: "thematicBreak" };
	}
}
function j_(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function M_(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? M_(e, r) : N_(e, r);
	}
}
function N_(e, t) {
	let n;
	for (n in t) if (O_.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function P_(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + nm({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + nm({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + nm({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function F_(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return k_(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function I_(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/break.js
function L_(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/code.js
function R_(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/delete.js
function z_(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function B_(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function V_(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = lh(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/heading.js
function H_(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/html.js
function U_(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/revert.js
function W_(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function G_(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return W_(e, t);
	let i = {
		src: lh(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image.js
function K_(e, t) {
	let n = { src: lh(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function q_(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function J_(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return W_(e, t);
	let i = { href: lh(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link.js
function Y_(e, t) {
	let n = { href: lh(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function X_(e, t, n) {
	let r = e.all(t), i = n ? Z_(n) : Q_(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function Z_(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = Q_(n[r]);
	}
	return t;
}
function Q_(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function $_(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function ev(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/root.js
function tv(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function nv(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table.js
function rv(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = $p(t.children[1]), o = Qp(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function iv(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function av(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/trim-lines/index.js
var ov = 9, sv = 32;
function cv(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(lv(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(lv(t.slice(i), i > 0, !1)), a.join("");
}
function lv(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === ov || t === sv;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === ov || t === sv;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function uv(e, t) {
	let n = {
		type: "text",
		value: cv(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function dv(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/index.js
var fv = {
	blockquote: I_,
	break: L_,
	code: R_,
	delete: z_,
	emphasis: B_,
	footnoteReference: V_,
	heading: H_,
	html: U_,
	imageReference: G_,
	image: K_,
	inlineCode: q_,
	linkReference: J_,
	link: Y_,
	listItem: X_,
	list: $_,
	paragraph: ev,
	root: tv,
	strong: nv,
	table: rv,
	tableCell: av,
	tableRow: iv,
	text: uv,
	thematicBreak: dv,
	toml: pv,
	yaml: pv,
	definition: pv,
	footnoteDefinition: pv
};
function pv() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var mv = typeof self == "object" ? self : globalThis, hv = (e, t) => {
	switch (e) {
		case "Function":
		case "SharedWorker":
		case "Worker":
		case "eval":
		case "setInterval":
		case "setTimeout": throw TypeError("unable to deserialize " + e);
	}
	return new mv[e](t);
}, gv = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(hv(e, t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(hv(a, o), i);
	};
	return r;
}, _v = (e) => gv(/* @__PURE__ */ new Map(), e)(0), vv = "", { toString: yv } = {}, { keys: bv } = Object, xv = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = yv.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, vv];
		case "Object": return [2, vv];
		case "Date": return [3, vv];
		case "RegExp": return [4, vv];
		case "Map": return [5, vv];
		case "Set": return [6, vv];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, Sv = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), Cv = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = xv(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of bv(r)) (e || !Sv(xv(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(Sv(xv(n)) || Sv(xv(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !Sv(xv(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, wv = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return Cv(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Tv = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? _v(wv(e, t)) : structuredClone(e) : (e, t) => _v(wv(e, t));
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function Ev(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function Dv(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Ov(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Ev, r = e.options.footnoteBackLabel || Dv, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = lh(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...Tv(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region node_modules/unist-util-is/lib/index.js
var kv = (function(e) {
	if (e == null) return Pv;
	if (typeof e == "function") return Nv(e);
	if (typeof e == "object") return Array.isArray(e) ? Av(e) : jv(e);
	if (typeof e == "string") return Mv(e);
	throw Error("Expected function, string, or object as test");
});
function Av(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = kv(e[n]);
	return Nv(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function jv(e) {
	let t = e;
	return Nv(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function Mv(e) {
	return Nv(t);
	function t(t) {
		return t && t.type === e;
	}
}
function Nv(e) {
	return t;
	function t(t, n, r) {
		return !!(Fv(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function Pv() {
	return !0;
}
function Fv(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function Iv(e) {
	return e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var Lv = [];
function Rv(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = kv(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + Iv(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = Lv, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = zv(n(e, c)), l[0] === !1)) return l;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && l[0] !== "skip") for (d = (r ? t.children.length : -1) + o, f = c.concat(t); d > -1 && d < t.children.length;) {
					let e = t.children[d];
					if (u = s(e, d, f)(), u[0] === !1) return u;
					d = typeof u[1] == "number" ? u[1] : d + o;
				}
			}
			return l;
		}
	}
}
function zv(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? Lv : [e];
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function Bv(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), Rv(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var Vv = {}.hasOwnProperty, Hv = {};
function Uv(e, t) {
	let n = t || Hv, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: Gv,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...fv,
			...n.handlers
		},
		one: o,
		options: n,
		patch: Wv,
		wrap: qv
	};
	return Bv(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (Vv.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = Tv(n);
				return r.children = a.all(e), r;
			}
			return Tv(e);
		}
		return (a.options.unknownHandler || Kv)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = Jv(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = Jv(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function Wv(e, t) {
	e.position && (t.position = tm(e));
}
function Gv(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, Tv(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function Kv(e, t) {
	let n = t.data || {}, r = "value" in t && !(Vv.call(n, "hProperties") || Vv.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function qv(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function Jv(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function Yv(e, t) {
	let n = Uv(e, t), r = n.one(e, void 0), i = Ov(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region node_modules/remark-rehype/lib/index.js
function Xv(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = Yv(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return Yv(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region node_modules/bail/index.js
function Zv(e) {
	if (e) throw e;
}
//#endregion
//#region node_modules/is-plain-obj/index.js
var Qv = /* @__PURE__ */ d((/* @__PURE__ */ p(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
})))(), 1);
function $v(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region node_modules/trough/lib/index.js
function ey() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
			t = o, s ? ty(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function ty(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region node_modules/vfile/lib/minpath.browser.js
var ny = {
	basename: ry,
	dirname: iy,
	extname: ay,
	join: oy,
	sep: "/"
};
function ry(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	ly(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function iy(e) {
	if (ly(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r || (r = !0);
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function ay(e) {
	ly(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function oy(...e) {
	let t = -1, n;
	for (; ++t < e.length;) ly(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : sy(n);
}
function sy(e) {
	ly(e);
	let t = e.codePointAt(0) === 47, n = cy(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function cy(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
				if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
					if (n.length > 2) {
						if (c = n.lastIndexOf("/"), c !== n.length - 1) {
							c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
							continue;
						}
					} else if (n.length > 0) {
						n = "", r = 0, i = o, a = 0;
						continue;
					}
				}
				t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
			} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function ly(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var uy = { cwd: dy };
function dy() {
	return "/";
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function fy(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function py(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!fy(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return my(e);
}
function my(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region node_modules/vfile/lib/index.js
var hy = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], gy = class {
	constructor(e) {
		let t;
		t = e ? fy(e) ? { path: e } : typeof e == "string" || by(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : uy.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < hy.length;) {
			let e = hy[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) hy.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? ny.basename(this.path) : void 0;
	}
	set basename(e) {
		vy(e, "basename"), _y(e, "basename"), this.path = ny.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? ny.dirname(this.path) : void 0;
	}
	set dirname(e) {
		yy(this.basename, "dirname"), this.path = ny.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? ny.extname(this.path) : void 0;
	}
	set extname(e) {
		if (_y(e, "extname"), yy(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = ny.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		fy(e) && (e = py(e)), vy(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? ny.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		vy(e, "stem"), _y(e, "stem"), this.path = ny.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new om(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function _y(e, t) {
	if (e && e.includes(ny.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + ny.sep + "`");
}
function vy(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function yy(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function by(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var xy = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), Sy = {}.hasOwnProperty, Cy = new class e extends xy {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = ey();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, Qv.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (Ey("data", this.frozen), this.namespace[e] = t, this) : Sy.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (Ey("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = ky(e), n = this.parser || this.Parser;
		return wy("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), wy("process", this.parser || this.Parser), Ty("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = ky(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				jy(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), wy("processSync", this.parser || this.Parser), Ty("processSync", this.compiler || this.Compiler), this.process(e, r), Oy("processSync", "process", t), n;
		function r(e, r) {
			t = !0, Zv(e), n = r;
		}
	}
	run(e, t, n) {
		Dy(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = ky(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), Oy("runSync", "run", n), r;
		function i(e, t) {
			Zv(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = ky(t), r = this.compiler || this.Compiler;
		return Ty("stringify", r), Dy(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (Ey("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
		else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
		else throw TypeError("Expected usable value, not `" + e + "`");
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") if (Array.isArray(e)) {
				let [t, ...n] = e;
				s(t, n);
			} else a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, Qv.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) if (Array.isArray(e)) for (; ++t < e.length;) {
				let n = e[t];
				i(n);
			}
			else throw TypeError("Expected a list of plugins, not `" + e + "`");
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				$v(o) && $v(r) && (r = (0, Qv.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function wy(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function Ty(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function Ey(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function Dy(e) {
	if (!$v(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function Oy(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function ky(e) {
	return Ay(e) ? e : new gy(e);
}
function Ay(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function jy(e) {
	return typeof e == "string" || My(e);
}
function My(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var Ny = [], Py = { allowDangerousHtml: !0 }, Fy = /^(https?|ircs?|mailto|xmpp)$/i, Iy = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function Ly(e) {
	let t = Ry(e), n = zy(e);
	return By(t.runSync(t.parse(n), n), e);
}
function Ry(e) {
	let t = e.rehypePlugins || Ny, n = e.remarkPlugins || Ny, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...Py
	} : Py;
	return Cy().use(F_).use(n).use(Xv, r).use(t);
}
function zy(e) {
	let t = e.children || "", n = new gy();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function By(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || Vy;
	for (let e of Iy) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return Bv(e, l), mm(e, {
		Fragment: ie,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: O,
		jsxs: k,
		passKeys: !0,
		passNode: !0
	});
	function l(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in Im) if (Object.hasOwn(Im, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = Im[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function Vy(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Fy.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region node_modules/ccount/index.js
function Hy(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
//#endregion
//#region node_modules/escape-string-regexp/index.js
function Uy(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
//#endregion
//#region node_modules/mdast-util-find-and-replace/lib/index.js
function Wy(e, t, n) {
	let r = kv((n || {}).ignore || []), i = Gy(t), a = -1;
	for (; ++a < i.length;) Rv(e, "text", o);
	function o(e, t) {
		let n = -1, i;
		for (; ++n < t.length;) {
			let e = t[n], a = i ? i.children : void 0;
			if (r(e, a ? a.indexOf(e) : void 0, i)) return;
			i = e;
		}
		if (i) return s(e, t);
	}
	function s(e, t) {
		let n = t[t.length - 1], r = i[a][0], o = i[a][1], s = 0, c = n.children.indexOf(e), l = !1, u = [];
		r.lastIndex = 0;
		let d = r.exec(e.value);
		for (; d;) {
			let n = d.index, i = {
				index: d.index,
				input: d.input,
				stack: [...t, e]
			}, a = o(...d, i);
			if (typeof a == "string" && (a = a.length > 0 ? {
				type: "text",
				value: a
			} : void 0), a === !1 ? r.lastIndex = n + 1 : (s !== n && u.push({
				type: "text",
				value: e.value.slice(s, n)
			}), Array.isArray(a) ? u.push(...a) : a && u.push(a), s = n + d[0].length, l = !0), !r.global) break;
			d = r.exec(e.value);
		}
		return l ? (s < e.value.length && u.push({
			type: "text",
			value: e.value.slice(s)
		}), n.children.splice(c, 1, ...u)) : u = [e], c + u.length;
	}
}
function Gy(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([Ky(e[0]), qy(e[1])]);
	}
	return t;
}
function Ky(e) {
	return typeof e == "string" ? new RegExp(Uy(e), "g") : e;
}
function qy(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
//#endregion
//#region node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var Jy = "phrasing", Yy = [
	"autolink",
	"link",
	"image",
	"label"
];
function Xy() {
	return {
		transforms: [ib],
		enter: {
			literalAutolink: Qy,
			literalAutolinkEmail: $y,
			literalAutolinkHttp: $y,
			literalAutolinkWww: $y
		},
		exit: {
			literalAutolink: rb,
			literalAutolinkEmail: nb,
			literalAutolinkHttp: eb,
			literalAutolinkWww: tb
		}
	};
}
function Zy() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: Jy,
			notInConstruct: Yy
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: Jy,
			notInConstruct: Yy
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: Jy,
			notInConstruct: Yy
		}
	] };
}
function Qy(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function $y(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function eb(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function tb(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function nb(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function rb(e) {
	this.exit(e);
}
function ib(e) {
	Wy(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, ab], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, ob]], { ignore: ["link", "linkReference"] });
}
function ab(e, t, n, r, i) {
	let a = "";
	if (!lb(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !sb(n))) return !1;
	let o = cb(n + r);
	if (!o[0]) return !1;
	let s = {
		type: "link",
		title: null,
		url: a + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [s, {
		type: "text",
		value: o[1]
	}] : s;
}
function ob(e, t, n, r) {
	return !lb(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function sb(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function cb(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = Hy(e, "("), a = Hy(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function lb(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || sh(n) || oh(n)) && (!t || n !== 47);
}
//#endregion
//#region node_modules/mdast-util-gfm-footnote/lib/index.js
yb.peek = vb;
function ub() {
	this.buffer();
}
function db(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function fb() {
	this.buffer();
}
function pb(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function mb(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = Qm(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function hb(e) {
	this.exit(e);
}
function gb(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = Qm(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function _b(e) {
	this.exit(e);
}
function vb() {
	return "[";
}
function yb(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), s(), o(), a += i.move("]"), a;
}
function bb() {
	return {
		enter: {
			gfmFootnoteCallString: ub,
			gfmFootnoteCall: db,
			gfmFootnoteDefinitionLabelString: fb,
			gfmFootnoteDefinition: pb
		},
		exit: {
			gfmFootnoteCallString: mb,
			gfmFootnoteCall: hb,
			gfmFootnoteDefinitionLabelString: gb,
			gfmFootnoteDefinition: _b
		}
	};
}
function xb(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference: yb
		},
		unsafe: [{
			character: "[",
			inConstruct: [
				"label",
				"phrasing",
				"reference"
			]
		}]
	};
	function n(e, n, r, i) {
		let a = r.createTracker(i), o = a.move("[^"), s = r.enter("footnoteDefinition"), c = r.enter("label");
		return o += a.move(r.safe(r.associationId(e), {
			before: o,
			after: "]"
		})), c(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? Cb : Sb))), s(), o;
	}
}
function Sb(e, t, n) {
	return t === 0 ? e : Cb(e, t, n);
}
function Cb(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region node_modules/mdast-util-gfm-strikethrough/lib/index.js
var wb = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
kb.peek = Ab;
function Tb() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: Db },
		exit: { strikethrough: Ob }
	};
}
function Eb() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: wb
		}],
		handlers: { delete: kb }
	};
}
function Db(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function Ob(e) {
	this.exit(e);
}
function kb(e, t, n, r) {
	let i = n.createTracker(r), a = n.enter("strikethrough"), o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), a(), o;
}
function Ab() {
	return "~";
}
//#endregion
//#region node_modules/markdown-table/index.js
function jb(e) {
	return e.length;
}
function Mb(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || jb, a = [], o = [], s = [], c = [], l = 0, u = -1;
	for (; ++u < e.length;) {
		let t = [], r = [], a = -1;
		for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
			let o = Nb(e[u][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (c[a] === void 0 || e > c[a]) && (c[a] = e);
			}
			t.push(o);
		}
		o[u] = t, s[u] = r;
	}
	let d = -1;
	if (typeof r == "object" && "length" in r) for (; ++d < l;) a[d] = Pb(r[d]);
	else {
		let e = Pb(r);
		for (; ++d < l;) a[d] = e;
	}
	d = -1;
	let f = [], p = [];
	for (; ++d < l;) {
		let e = a[d], t = "", r = "";
		e === 99 ? (t = ":", r = ":") : e === 108 ? t = ":" : e === 114 && (r = ":");
		let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length), o = t + "-".repeat(i) + r;
		n.alignDelimiters !== !1 && (i = t.length + i + r.length, i > c[d] && (c[d] = i), p[d] = i), f[d] = o;
	}
	o.splice(1, 0, f), s.splice(1, 0, p), u = -1;
	let m = [];
	for (; ++u < o.length;) {
		let e = o[u], t = s[u];
		d = -1;
		let r = [];
		for (; ++d < l;) {
			let i = e[d] || "", o = "", s = "";
			if (n.alignDelimiters !== !1) {
				let e = c[d] - (t[d] || 0), n = a[d];
				n === 114 ? o = " ".repeat(e) : n === 99 ? e % 2 ? (o = " ".repeat(e / 2 + .5), s = " ".repeat(e / 2 - .5)) : (o = " ".repeat(e / 2), s = o) : s = " ".repeat(e);
			}
			n.delimiterStart !== !1 && !d && r.push("|"), n.padding !== !1 && !(n.alignDelimiters === !1 && i === "") && (n.delimiterStart !== !1 || d) && r.push(" "), n.alignDelimiters !== !1 && r.push(o), r.push(i), n.alignDelimiters !== !1 && r.push(s), n.padding !== !1 && r.push(" "), (n.delimiterEnd !== !1 || d !== l - 1) && r.push("|");
		}
		m.push(n.delimiterEnd === !1 ? r.join("").replace(/ +$/, "") : r.join(""));
	}
	return m.join("\n");
}
function Nb(e) {
	return e == null ? "" : String(e);
}
function Pb(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function Fb(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), Ib);
	return i(), o;
}
function Ib(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function Lb(e, t) {
	return Rb(e, t.inConstruct, !0) && !Rb(e, t.notInConstruct, !1);
}
function Rb(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/break.js
function zb(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) if (n.unsafe[i].character === "\n" && Lb(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return "\\\n";
}
//#endregion
//#region node_modules/longest-streak/index.js
function Bb(e, t) {
	let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
	if (typeof t != "string") throw TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
	return o;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function Vb(e, t) {
	return !!(t.options.fences === !1 && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function Hb(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/code.js
function Ub(e, t, n, r) {
	let i = Hb(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
	if (Vb(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, Wb);
		return e(), t;
	}
	let s = n.createTracker(r), c = i.repeat(Math.max(Bb(a, i) + 1, 3)), l = n.enter("codeFenced"), u = s.move(c);
	if (e.lang) {
		let t = n.enter(`codeFencedLang${o}`);
		u += s.move(n.safe(e.lang, {
			before: u,
			after: " ",
			encode: ["`"],
			...s.current()
		})), t();
	}
	if (e.lang && e.meta) {
		let t = n.enter(`codeFencedMeta${o}`);
		u += s.move(" "), u += s.move(n.safe(e.meta, {
			before: u,
			after: "\n",
			encode: ["`"],
			...s.current()
		})), t();
	}
	return u += s.move("\n"), a && (u += s.move(a + "\n")), u += s.move(c), l(), u;
}
function Wb(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function Gb(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/definition.js
function Kb(e, t, n, r) {
	let i = Gb(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), s = n.enter("label"), c = n.createTracker(r), l = c.move("[");
	return l += c.move(n.safe(n.associationId(e), {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : "\n",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), o(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function qb(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function Jb(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function Yb(e, t, n) {
	let r = gh(e), i = gh(t);
	return r === void 0 ? i === void 0 ? n === "_" ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !0
	} : r === 1 ? i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !1
	} : {
		inside: !1,
		outside: !1
	};
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
Xb.peek = Zb;
function Xb(e, t, n, r) {
	let i = qb(n), a = n.enter("emphasis"), o = n.createTracker(r), s = o.move(i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = Yb(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = Jb(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = Yb(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + Jb(d));
	let p = o.move(i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function Zb(e, t, n) {
	return n.options.emphasis || "*";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function Qb(e, t) {
	let n = !1;
	return Bv(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && Rm(e) && (t.options.setext || n));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/heading.js
function $b(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (Qb(e, n)) {
		let t = n.enter("headingSetext"), r = n.enter("phrasing"), o = n.containerPhrasing(e, {
			...a.current(),
			before: "\n",
			after: "\n"
		});
		return r(), t(), o + "\n" + (i === 1 ? "=" : "-").repeat(o.length - (Math.max(o.lastIndexOf("\r"), o.lastIndexOf("\n")) + 1));
	}
	let o = "#".repeat(i), s = n.enter("headingAtx"), c = n.enter("phrasing");
	a.move(o + " ");
	let l = n.containerPhrasing(e, {
		before: "# ",
		after: "\n",
		...a.current()
	});
	return /^[\t ]/.test(l) && (l = Jb(l.charCodeAt(0)) + l.slice(1)), l = l ? o + " " + l : o, n.options.closeAtx && (l += " " + o), c(), s(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/html.js
ex.peek = tx;
function ex(e) {
	return e.value || "";
}
function tx() {
	return "<";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/image.js
nx.peek = rx;
function nx(e, t, n, r) {
	let i = Gb(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), s = n.enter("label"), c = n.createTracker(r), l = c.move("![");
	return l += c.move(n.safe(e.alt, {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), l += c.move(")"), o(), l;
}
function rx() {
	return "!";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
ix.peek = ax;
function ix(e, t, n, r) {
	let i = e.referenceType, a = n.enter("imageReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("!["), l = n.safe(e.alt, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function ax() {
	return "!";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
ox.peek = sx;
function ox(e, t, n) {
	let r = e.value || "", i = "`", a = -1;
	for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
	for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
		let e = n.unsafe[a], t = n.compilePattern(e), i;
		if (e.atBreak) for (; i = t.exec(r);) {
			let e = i.index;
			r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--, r = r.slice(0, e) + " " + r.slice(i.index + 1);
		}
	}
	return i + r + i;
}
function sx() {
	return "`";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function cx(e, t) {
	let n = Rm(e);
	return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/link.js
lx.peek = ux;
function lx(e, t, n, r) {
	let i = Gb(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r), s, c;
	if (cx(e, n)) {
		let t = n.stack;
		n.stack = [], s = n.enter("autolink");
		let r = o.move("<");
		return r += o.move(n.containerPhrasing(e, {
			before: r,
			after: ">",
			...o.current()
		})), r += o.move(">"), s(), n.stack = t, r;
	}
	s = n.enter("link"), c = n.enter("label");
	let l = o.move("[");
	return l += o.move(n.containerPhrasing(e, {
		before: l,
		after: "](",
		...o.current()
	})), l += o.move("]("), c(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(n.safe(e.url, {
		before: l,
		after: ">",
		...o.current()
	})), l += o.move(">")) : (c = n.enter("destinationRaw"), l += o.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...o.current()
	}))), c(), e.title && (c = n.enter(`title${a}`), l += o.move(" " + i), l += o.move(n.safe(e.title, {
		before: l,
		after: i,
		...o.current()
	})), l += o.move(i), c()), l += o.move(")"), s(), l;
}
function ux(e, t, n) {
	return cx(e, n) ? "<" : "[";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
dx.peek = fx;
function dx(e, t, n, r) {
	let i = e.referenceType, a = n.enter("linkReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("["), l = n.containerPhrasing(e, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function fx() {
	return "[";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function px(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function mx(e) {
	let t = px(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function hx(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function gx(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/list.js
function _x(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? hx(n) : px(n), s = e.ordered ? o === "." ? ")" : "." : mx(n), c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), gx(n) === o && t) {
			let t = -1;
			for (; ++t < e.children.length;) {
				let n = e.children[t];
				if (n && n.type === "listItem" && n.children && n.children[0] && n.children[0].type === "thematicBreak") {
					c = !0;
					break;
				}
			}
		}
	}
	c && (o = s), n.bulletCurrent = o;
	let l = n.containerFlow(e, r);
	return n.bulletLastUsed = o, n.bulletCurrent = a, i(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function vx(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function yx(e, t, n, r) {
	let i = vx(n), a = n.bulletCurrent || px(n);
	t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
	let o = a.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
	let s = n.createTracker(r);
	s.move(a + " ".repeat(o - a.length)), s.shift(o);
	let c = n.enter("listItem"), l = n.indentLines(n.containerFlow(e, s.current()), u);
	return c(), l;
	function u(e, t, n) {
		return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e;
	}
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function bx(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
//#endregion
//#region node_modules/mdast-util-phrasing/lib/index.js
var xx = kv([
	"break",
	"delete",
	"emphasis",
	"footnote",
	"footnoteReference",
	"image",
	"imageReference",
	"inlineCode",
	"inlineMath",
	"link",
	"linkReference",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"strong",
	"text",
	"textDirective"
]);
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/root.js
function Sx(e, t, n, r) {
	return (e.children.some(function(e) {
		return xx(e);
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function Cx(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/strong.js
wx.peek = Tx;
function wx(e, t, n, r) {
	let i = Cx(n), a = n.enter("strong"), o = n.createTracker(r), s = o.move(i + i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = Yb(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = Jb(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = Yb(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + Jb(d));
	let p = o.move(i + i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function Tx(e, t, n) {
	return n.options.strong || "*";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/text.js
function Ex(e, t, n, r) {
	return n.safe(e.value, r);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function Dx(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function Ox(e, t, n) {
	let r = (gx(n) + (n.options.ruleSpaces ? " " : "")).repeat(Dx(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/index.js
var kx = {
	blockquote: Fb,
	break: zb,
	code: Ub,
	definition: Kb,
	emphasis: Xb,
	hardBreak: zb,
	heading: $b,
	html: ex,
	image: nx,
	imageReference: ix,
	inlineCode: ox,
	link: lx,
	linkReference: dx,
	list: _x,
	listItem: yx,
	paragraph: bx,
	root: Sx,
	strong: wx,
	text: Ex,
	thematicBreak: Ox
};
//#endregion
//#region node_modules/mdast-util-gfm-table/lib/index.js
function Ax() {
	return {
		enter: {
			table: jx,
			tableData: Fx,
			tableHeader: Fx,
			tableRow: Nx
		},
		exit: {
			codeText: Ix,
			table: Mx,
			tableData: Px,
			tableHeader: Px,
			tableRow: Px
		}
	};
}
function jx(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function Mx(e) {
	this.exit(e), this.data.inTable = void 0;
}
function Nx(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function Px(e) {
	this.exit(e);
}
function Fx(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function Ix(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, Lx));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function Lx(e, t) {
	return t === "|" ? t : e;
}
function Rx(e) {
	let t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "tableCell"
			},
			{
				character: "\n",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: "|",
				after: "[	 :-]"
			},
			{
				character: "|",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: ":",
				after: "-"
			},
			{
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}
		],
		handlers: {
			inlineCode: f,
			table: o,
			tableCell: c,
			tableRow: s
		}
	};
	function o(e, t, n, r) {
		return l(u(e, n, r), e.align);
	}
	function s(e, t, n, r) {
		let i = l([d(e, n, r)]);
		return i.slice(0, i.indexOf("\n"));
	}
	function c(e, t, n, r) {
		let i = n.enter("tableCell"), o = n.enter("phrasing"), s = n.containerPhrasing(e, {
			...r,
			before: a,
			after: a
		});
		return o(), i(), s;
	}
	function l(e, t) {
		return Mb(e, {
			align: t,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		});
	}
	function u(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("table");
		for (; ++i < r.length;) a[i] = d(r[i], t, n);
		return o(), a;
	}
	function d(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("tableRow");
		for (; ++i < r.length;) a[i] = c(r[i], e, t, n);
		return o(), a;
	}
	function f(e, t, n) {
		let r = kx.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
//#endregion
//#region node_modules/mdast-util-gfm-task-list-item/lib/index.js
function zx() {
	return { exit: {
		taskListCheckValueChecked: Vx,
		taskListCheckValueUnchecked: Vx,
		paragraph: Hx
	} };
}
function Bx() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: Ux }
	};
}
function Vx(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Hx(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && t.type === "listItem" && typeof t.checked == "boolean") {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && n.type === "text") {
			let r = t.children, i = -1, a;
			for (; ++i < r.length;) {
				let e = r[i];
				if (e.type === "paragraph") {
					a = e;
					break;
				}
			}
			a === e && (n.value = n.value.slice(1), n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == "number" && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
function Ux(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
	a && s.move(o);
	let c = kx.listItem(e, t, n, {
		...r,
		...s.current()
	});
	return a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c;
	function l(e) {
		return e + o;
	}
}
//#endregion
//#region node_modules/mdast-util-gfm/lib/index.js
function Wx() {
	return [
		Xy(),
		bb(),
		Tb(),
		Ax(),
		zx()
	];
}
function Gx(e) {
	return { extensions: [
		Zy(),
		xb(e),
		Eb(),
		Rx(e),
		Bx()
	] };
}
//#endregion
//#region node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var Kx = {
	tokenize: oS,
	partial: !0
}, qx = {
	tokenize: sS,
	partial: !0
}, Jx = {
	tokenize: cS,
	partial: !0
}, Yx = {
	tokenize: lS,
	partial: !0
}, Xx = {
	tokenize: uS,
	partial: !0
}, Zx = {
	name: "wwwAutolink",
	tokenize: iS,
	previous: dS
}, Qx = {
	name: "protocolAutolink",
	tokenize: aS,
	previous: fS
}, $x = {
	name: "emailAutolink",
	tokenize: rS,
	previous: pS
}, eS = {};
function tS() {
	return { text: eS };
}
for (var nS = 48; nS < 123;) eS[nS] = $x, nS++, nS === 58 ? nS = 65 : nS === 91 && (nS = 97);
eS[43] = $x, eS[45] = $x, eS[46] = $x, eS[95] = $x, eS[72] = [$x, Qx], eS[104] = [$x, Qx], eS[87] = [$x, Zx], eS[119] = [$x, Zx];
function rS(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !mS(t) || !pS.call(r, r.previous) || hS(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return mS(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(Xx, u, l)(t) : t === 45 || t === 95 || eh(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && $m(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function iS(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !dS.call(r, r.previous) || hS(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Kx, e.attempt(qx, e.attempt(Jx, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function aS(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && fS.call(r, r.previous) && !hS(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if ($m(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
		if (t === 58) {
			let n = i.toLowerCase();
			if (n === "http" || n === "https") return e.consume(t), c;
		}
		return n(t);
	}
	function c(t) {
		return t === 47 ? (e.consume(t), a ? l : (a = !0, c)) : n(t);
	}
	function l(t) {
		return t === null || nh(t) || X(t) || sh(t) || oh(t) ? n(t) : e.attempt(qx, e.attempt(Jx, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function oS(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function sS(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(Yx, c, s)(t) : t === null || X(t) || sh(t) || t !== 45 && oh(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function cS(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(Yx, t, a)(o) : o === null || X(o) || sh(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function lS(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || X(o) || sh(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || X(e) || sh(e) ? t(e) : r(e);
	}
	function a(e) {
		return $m(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : $m(t) ? (e.consume(t), o) : n(t);
	}
}
function uS(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return eh(e) ? n(e) : t(e);
	}
}
function dS(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || X(e);
}
function fS(e) {
	return !$m(e);
}
function pS(e) {
	return !(e === 47 || mS(e));
}
function mS(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || eh(e);
}
function hS(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
//#endregion
//#region node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var gS = {
	tokenize: wS,
	partial: !0
};
function _S() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: xS,
			continuation: { tokenize: SS },
			exit: CS
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: bS
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: vS,
				resolveTo: yS
			}
		}
	};
}
function vS(e, t, n) {
	let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
	for (; i--;) {
		let e = r.events[i][1];
		if (e.type === "labelImage") {
			o = e;
			break;
		}
		if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") break;
	}
	return s;
	function s(i) {
		if (!o || !o._balanced) return n(i);
		let s = Qm(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function yS(e, t) {
	let n = e.length;
	for (; n--;) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, s = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...s), e;
}
function bS(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return s;
	function s(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c;
	}
	function c(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l) : n(t);
	}
	function l(s) {
		if (a > 999 || s === 93 && !o || s === null || s === 91 || X(s)) return n(s);
		if (s === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes(Qm(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return X(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function xS(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (o > 999 || t === 93 && !s || t === null || t === 91 || X(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = Qm(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return X(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
	}
	function f(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), Q(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function SS(e, t, n) {
	return e.check(wh, t, e.attempt(gS, t, n));
}
function CS(e) {
	e.exit("gfmFootnoteDefinition");
}
function wS(e, t, n) {
	let r = this;
	return Q(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function TS(e) {
	let t = (e || {}).singleTilde, n = {
		name: "strikethrough",
		tokenize: i,
		resolveAll: r
	};
	return t ?? (t = !0), {
		text: { 126: n },
		insideSpan: { null: [n] },
		attentionMarkers: { null: [126] }
	};
	function r(e, t) {
		let n = -1;
		for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "strikethroughSequenceTemporary" && e[n][1]._close) {
			let r = n;
			for (; r--;) if (e[r][0] === "exit" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
				e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
				let i = {
					type: "strikethrough",
					start: Object.assign({}, e[r][1].start),
					end: Object.assign({}, e[n][1].end)
				}, a = {
					type: "strikethroughText",
					start: Object.assign({}, e[r][1].end),
					end: Object.assign({}, e[n][1].start)
				}, o = [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						e[r][1],
						t
					],
					[
						"exit",
						e[r][1],
						t
					],
					[
						"enter",
						a,
						t
					]
				], s = t.parser.constructs.insideSpan.null;
				s && Gm(o, o.length, 0, _h(s, e.slice(r + 1, n), t)), Gm(o, o.length, 0, [
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						e[n][1],
						t
					],
					[
						"exit",
						e[n][1],
						t
					],
					[
						"exit",
						i,
						t
					]
				]), Gm(e, r - 1, n - r + 3, o), n = r + o.length - 2;
				break;
			}
		}
		for (n = -1; ++n < e.length;) e[n][1].type === "strikethroughSequenceTemporary" && (e[n][1].type = "data");
		return e;
	}
	function i(e, n, r) {
		let i = this.previous, a = this.events, o = 0;
		return s;
		function s(t) {
			return i === 126 && a[a.length - 1][1].type !== "characterEscape" ? r(t) : (e.enter("strikethroughSequenceTemporary"), c(t));
		}
		function c(a) {
			let s = gh(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = gh(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/edit-map.js
var ES = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		DS(this, e, t, n);
	}
	consume(e) {
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function DS(e, t, n, r) {
	let i = 0;
	if (!(n === 0 && r.length === 0)) {
		for (; i < e.map.length;) {
			if (e.map[i][0] === t) {
				e.map[i][1] += n, e.map[i][2].push(...r);
				return;
			}
			i += 1;
		}
		e.map.push([
			t,
			n,
			r
		]);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/infer.js
function OS(e, t) {
	let n = !1, r = [];
	for (; t < e.length;) {
		let i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					let e = r.length - 1;
					r[e] = r[e] === "left" ? "center" : "right";
				}
			} else if (i[1].type === "tableDelimiterRow") break;
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1;
	}
	return r;
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/syntax.js
function kS() {
	return { flow: { null: {
		name: "table",
		tokenize: AS,
		resolveAll: jS
	} } };
}
function AS(e, t, n) {
	let r = this, i = 0, a = 0, o;
	return s;
	function s(e) {
		let t = r.events.length - 1;
		for (; t > -1;) {
			let e = r.events[t][1].type;
			if (e === "lineEnding" || e === "linePrefix") t--;
			else break;
		}
		let i = t > -1 ? r.events[t][1].type : null, a = i === "tableHead" || i === "tableRow" ? S : c;
		return a === S && r.parser.lazy[r.now().line] ? n(e) : a(e);
	}
	function c(t) {
		return e.enter("tableHead"), e.enter("tableRow"), l(t);
	}
	function l(e) {
		return e === 124 ? u(e) : (o = !0, a += 1, u(e));
	}
	function u(t) {
		return t === null ? n(t) : Y(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : Z(t) ? Q(e, u, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), d(t)));
	}
	function d(t) {
		return t === null || t === 124 || X(t) ? (e.exit("data"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
	}
	function p(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, Z(t) ? Q(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t));
	}
	function m(t) {
		return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : x(t);
	}
	function h(t) {
		return Z(t) ? Q(e, g, "whitespace")(t) : g(t);
	}
	function g(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), _) : t === 45 ? (a += 1, _(t)) : t === null || Y(t) ? b(t) : x(t);
	}
	function _(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), v(t)) : x(t);
	}
	function v(t) {
		return t === 45 ? (e.consume(t), v) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(t));
	}
	function y(t) {
		return Z(t) ? Q(e, b, "whitespace")(t) : b(t);
	}
	function b(n) {
		return n === 124 ? m(n) : n === null || Y(n) ? !o || i !== a ? x(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : x(n);
	}
	function x(e) {
		return n(e);
	}
	function S(t) {
		return e.enter("tableRow"), C(t);
	}
	function C(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), C) : n === null || Y(n) ? (e.exit("tableRow"), t(n)) : Z(n) ? Q(e, C, "whitespace")(n) : (e.enter("data"), w(n));
	}
	function w(t) {
		return t === null || t === 124 || X(t) ? (e.exit("data"), C(t)) : (e.consume(t), t === 92 ? T : w);
	}
	function T(t) {
		return t === 92 || t === 124 ? (e.consume(t), w) : w(t);
	}
}
function jS(e, t) {
	let n = -1, r = !0, i = 0, a = [
		0,
		0,
		0,
		0
	], o = [
		0,
		0,
		0,
		0
	], s = !1, c = 0, l, u, d, f = new ES();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (NS(f, t, c, l, u), u = void 0, c = 0), l = {
			type: "table",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			l,
			t
		]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [
			0,
			0,
			0,
			0
		], o = [
			0,
			n + 1,
			0,
			0
		], s && (s = !1, u = {
			type: "tableBody",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			u,
			t
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = MS(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = MS(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = MS(f, t, o, i, n, d)) : (o[0] = o[1], d = MS(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && NS(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = OS(t.events, n));
	}
	return e;
}
function MS(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, PS(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = PS(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = PS(t.events, n[2]), a = PS(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, a)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), r !== 2) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return i !== void 0 && (a.end = Object.assign({}, PS(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function NS(e, t, n, r, i) {
	let a = [], o = PS(t.events, n);
	i && (i.end = Object.assign({}, o), a.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), a.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, a);
}
function PS(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
//#endregion
//#region node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var FS = {
	name: "tasklistCheck",
	tokenize: LS
};
function IS() {
	return { text: { 91: FS } };
}
function LS(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return X(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t);
	}
	function s(r) {
		return Y(r) ? t(r) : Z(r) ? e.check({ tokenize: RS }, t, n)(r) : n(r);
	}
}
function RS(e, t, n) {
	return Q(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm/index.js
function zS(e) {
	return Jm([
		tS(),
		_S(),
		TS(e),
		kS(),
		IS()
	]);
}
//#endregion
//#region node_modules/remark-gfm/lib/index.js
var BS = {};
function VS(e) {
	let t = this, n = e || BS, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
	i.push(zS(n)), a.push(Wx()), o.push(Gx(n));
}
//#endregion
//#region node_modules/html-dom-parser/lib/client/html-to-dom.js
var HS = /* @__PURE__ */ p(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t;
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})(t || (t = {}));
	function n(e) {
		return e.type === t.Tag || e.type === t.Script || e.type === t.Style;
	}
	t.Root, t.Text, t.Directive, t.Comment, t.Script, t.Style, t.Tag, t.CDATA, t.Doctype;
	var r = class {
		constructor() {
			F(this, "parent", null), F(this, "prev", null), F(this, "next", null), F(this, "startIndex", null), F(this, "endIndex", null);
		}
		get parentNode() {
			return this.parent;
		}
		set parentNode(e) {
			this.parent = e;
		}
		get previousSibling() {
			return this.prev;
		}
		set previousSibling(e) {
			this.prev = e;
		}
		get nextSibling() {
			return this.next;
		}
		set nextSibling(e) {
			this.next = e;
		}
		cloneNode(e = !1) {
			return v(this, e);
		}
	}, i = class extends r {
		constructor(e) {
			super(), F(this, "data", void 0), this.data = e;
		}
		get nodeValue() {
			return this.data;
		}
		set nodeValue(e) {
			this.data = e;
		}
	}, a = class extends i {
		constructor(...e) {
			super(...e), F(this, "type", t.Text);
		}
		get nodeType() {
			return 3;
		}
	}, o = class extends i {
		constructor(...e) {
			super(...e), F(this, "type", t.Comment);
		}
		get nodeType() {
			return 8;
		}
	}, s = class extends i {
		constructor(e, n) {
			super(n), F(this, "type", t.Directive), F(this, "name", void 0), F(this, "x-name", void 0), F(this, "x-publicId", void 0), F(this, "x-systemId", void 0), this.name = e;
		}
		get nodeType() {
			return 1;
		}
	}, c = class extends r {
		constructor(e) {
			super(), F(this, "children", void 0), this.children = e;
		}
		get firstChild() {
			return this.children[0] ?? null;
		}
		get lastChild() {
			return this.children.length > 0 ? this.children[this.children.length - 1] : null;
		}
		get childNodes() {
			return this.children;
		}
		set childNodes(e) {
			this.children = e;
		}
	}, l = class extends c {
		constructor(...e) {
			super(...e), F(this, "type", t.CDATA);
		}
		get nodeType() {
			return 4;
		}
	}, u = class extends c {
		constructor(...e) {
			super(...e), F(this, "type", t.Root);
		}
		get nodeType() {
			return 9;
		}
	}, d = class extends c {
		constructor(e, n, r = [], i = e === "script" ? t.Script : e === "style" ? t.Style : t.Tag) {
			super(r), F(this, "name", void 0), F(this, "attribs", void 0), F(this, "type", void 0), F(this, "namespace", void 0), F(this, "x-attribsNamespace", void 0), F(this, "x-attribsPrefix", void 0), this.name = e, this.attribs = n, this.type = i;
		}
		get nodeType() {
			return 1;
		}
		get tagName() {
			return this.name;
		}
		set tagName(e) {
			this.name = e;
		}
		get attributes() {
			return Object.keys(this.attribs).map((e) => ({
				name: e,
				value: this.attribs[e],
				namespace: this["x-attribsNamespace"]?.[e],
				prefix: this["x-attribsPrefix"]?.[e]
			}));
		}
	};
	function f(e) {
		return n(e);
	}
	function p(e) {
		return e.type === t.CDATA;
	}
	function m(e) {
		return e.type === t.Text;
	}
	function h(e) {
		return e.type === t.Comment;
	}
	function g(e) {
		return e.type === t.Directive;
	}
	function _(e) {
		return e.type === t.Root;
	}
	function v(e, t = !1) {
		let n;
		if (m(e)) n = new a(e.data);
		else if (h(e)) n = new o(e.data);
		else if (f(e)) {
			let r = t ? y(e.children) : [], i = new d(e.name, { ...e.attribs }, r);
			for (let e of r) e.parent = i;
			e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), n = i;
		} else if (p(e)) {
			let r = t ? y(e.children) : [], i = new l(r);
			for (let e of r) e.parent = i;
			n = i;
		} else if (_(e)) {
			let r = t ? y(e.children) : [], i = new u(r);
			for (let e of r) e.parent = i;
			e["x-mode"] && (i["x-mode"] = e["x-mode"]), n = i;
		} else if (g(e)) {
			let t = new s(e.name, e.data);
			e["x-name"] != null && (t["x-name"] = e["x-name"], t["x-publicId"] = e["x-publicId"], t["x-systemId"] = e["x-systemId"]), n = t;
		} else throw Error(`Not implemented yet: ${e.type}`);
		return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
	}
	function y(e) {
		let t = e.map((e) => v(e, !0));
		for (let e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
		return t;
	}
	var b = (/* @__PURE__ */ "animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.linearGradient.radialGradient.textPath".split(".")).reduce(function(e, t) {
		return e[t.toLowerCase()] = t, e;
	}, {}), x = "\r", S = new RegExp(x, "g"), C = `__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_${Date.now().toString()}__`, w = new RegExp(C, "g");
	function T(e) {
		return b[e];
	}
	function E(e) {
		for (var t = {}, n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			t[i.name] = i.value;
		}
		return t;
	}
	function ee(e) {
		return e = e.toLowerCase(), T(e) || e;
	}
	function D(e, t) {
		var n = "<" + t, r = e.toLowerCase().indexOf(n);
		if (r === -1) return !1;
		var i = e[r + n.length];
		return i === ">" || i === " " || i === "	" || i === "\n" || i === "\r" || i === "/";
	}
	function te(e) {
		return e.replace(S, C);
	}
	function ne(e) {
		return e.replace(w, x);
	}
	function re(e, t, n) {
		t === void 0 && (t = null);
		for (var r = [], i, c = 0, l = e.length; c < l; c++) {
			var u = e[c];
			switch (u.nodeType) {
				case 1:
					var f = ee(u.nodeName);
					i = new d(f, E(u.attributes)), i.children = re(f === "template" ? u.content.childNodes : u.childNodes, i);
					break;
				/* v8 ignore start */
				case 3:
					i = new a(ne(u.nodeValue ?? ""));
					break;
				case 8:
					i = new o(u.nodeValue ?? "");
					break;
				/* v8 ignore stop */
				default: continue;
			}
			var p = r[c - 1] ?? null;
			p && (p.next = i), i.parent = t, i.prev = p, i.next = null, r.push(i);
		}
		return n && (i = new s(n.substring(0, n.indexOf(" ")).toLowerCase(), n), i.next = r[0] ?? null, i.parent = t, r.unshift(i), r[1] && (r[1].prev = r[0])), r;
	}
	var ie = "html", O = "head", k = "body", ae = /<([a-zA-Z]+[0-9]?)/;
	function oe(e, t) {
		return t ? t.createHTML(e) : e;
	}
	/* v8 ignore start */
	var se = function(e, t, n) {
		throw Error("This browser does not support `document.implementation.createHTMLDocument`");
	}, ce = function(e, t, n) {
		throw Error("This browser does not support `DOMParser.prototype.parseFromString`");
	}, A = typeof window == "object" && window.DOMParser;
	if (typeof A == "function") {
		var le = new A(), ue = "text/html";
		ce = function(e, t, n) {
			return t && (e = `<${t}>${e}</${t}>`), le.parseFromString(e, ue);
		}, se = ce;
	}
	if (typeof document == "object" && document.implementation) {
		var de = document.implementation.createHTMLDocument();
		se = function(e, t, n) {
			if (t) {
				var r = de.documentElement.querySelector(t);
				return r && (r.innerHTML = oe(e, n)), de;
			}
			return de.documentElement.innerHTML = oe(e, n), de;
		};
	}
	var j = typeof document == "object" && document.createElement("template"), fe;
	j && j.content && (fe = function(e, t) {
		return j.innerHTML = oe(e, t), j.content.childNodes;
	});
	var pe = function() {
		return document.createDocumentFragment().childNodes;
	};
	/* v8 ignore stop */
	function me(e, t) {
		var n, r;
		e = te(e);
		var i = (ae.exec(e)?.[1])?.toLowerCase();
		switch (i) {
			case ie:
				var a = ce(e);
				if (!D(e, O)) {
					var o = a.querySelector(O);
					(n = o?.parentNode) == null || n.removeChild(o);
				}
				if (!D(e, k)) {
					var o = a.querySelector(k);
					(r = o?.parentNode) == null || r.removeChild(o);
				}
				return a.querySelectorAll(ie);
			case O:
			case k:
				var s = se(e, void 0, t).querySelectorAll(i);
				return D(e, k) && D(e, O) ? s[0].parentNode?.childNodes ?? pe() : s;
			/* v8 ignore start */
			default:
				if (fe) return fe(e, t);
				var o = se(e, k, t).querySelector(k);
				return o?.childNodes ?? pe();
		}
	}
	var he = /<(![a-zA-Z\s]+)>/;
	function ge(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		var n = he.exec(e), r = n ? n[1] : void 0;
		return re(me(e, t?.trustedTypePolicy), null, r);
	}
	e.default = ge;
})), US = /* @__PURE__ */ p(((e) => {
	e.SAME = 0, e.CAMELCASE = 1, e.possibleStandardNames = {
		accept: 0,
		acceptCharset: 1,
		"accept-charset": "acceptCharset",
		accessKey: 1,
		action: 0,
		allowFullScreen: 1,
		alt: 0,
		as: 0,
		async: 0,
		autoCapitalize: 1,
		autoComplete: 1,
		autoCorrect: 1,
		autoFocus: 1,
		autoPlay: 1,
		autoSave: 1,
		capture: 0,
		cellPadding: 1,
		cellSpacing: 1,
		challenge: 0,
		charSet: 1,
		checked: 0,
		children: 0,
		cite: 0,
		class: "className",
		classID: 1,
		className: 1,
		cols: 0,
		colSpan: 1,
		content: 0,
		contentEditable: 1,
		contextMenu: 1,
		controls: 0,
		controlsList: 1,
		coords: 0,
		crossOrigin: 1,
		dangerouslySetInnerHTML: 1,
		data: 0,
		dateTime: 1,
		default: 0,
		defaultChecked: 1,
		defaultValue: 1,
		defer: 0,
		dir: 0,
		disabled: 0,
		disablePictureInPicture: 1,
		disableRemotePlayback: 1,
		download: 0,
		draggable: 0,
		encType: 1,
		enterKeyHint: 1,
		for: "htmlFor",
		form: 0,
		formMethod: 1,
		formAction: 1,
		formEncType: 1,
		formNoValidate: 1,
		formTarget: 1,
		frameBorder: 1,
		headers: 0,
		height: 0,
		hidden: 0,
		high: 0,
		href: 0,
		hrefLang: 1,
		htmlFor: 1,
		httpEquiv: 1,
		"http-equiv": "httpEquiv",
		icon: 0,
		id: 0,
		innerHTML: 1,
		inputMode: 1,
		integrity: 0,
		is: 0,
		itemID: 1,
		itemProp: 1,
		itemRef: 1,
		itemScope: 1,
		itemType: 1,
		keyParams: 1,
		keyType: 1,
		kind: 0,
		label: 0,
		lang: 0,
		list: 0,
		loop: 0,
		low: 0,
		manifest: 0,
		marginWidth: 1,
		marginHeight: 1,
		max: 0,
		maxLength: 1,
		media: 0,
		mediaGroup: 1,
		method: 0,
		min: 0,
		minLength: 1,
		multiple: 0,
		muted: 0,
		name: 0,
		noModule: 1,
		nonce: 0,
		noValidate: 1,
		open: 0,
		optimum: 0,
		pattern: 0,
		placeholder: 0,
		playsInline: 1,
		poster: 0,
		preload: 0,
		profile: 0,
		radioGroup: 1,
		readOnly: 1,
		referrerPolicy: 1,
		rel: 0,
		required: 0,
		reversed: 0,
		role: 0,
		rows: 0,
		rowSpan: 1,
		sandbox: 0,
		scope: 0,
		scoped: 0,
		scrolling: 0,
		seamless: 0,
		selected: 0,
		shape: 0,
		size: 0,
		sizes: 0,
		span: 0,
		spellCheck: 1,
		src: 0,
		srcDoc: 1,
		srcLang: 1,
		srcSet: 1,
		start: 0,
		step: 0,
		style: 0,
		summary: 0,
		tabIndex: 1,
		target: 0,
		title: 0,
		type: 0,
		useMap: 1,
		value: 0,
		width: 0,
		wmode: 0,
		wrap: 0,
		about: 0,
		accentHeight: 1,
		"accent-height": "accentHeight",
		accumulate: 0,
		additive: 0,
		alignmentBaseline: 1,
		"alignment-baseline": "alignmentBaseline",
		allowReorder: 1,
		alphabetic: 0,
		amplitude: 0,
		arabicForm: 1,
		"arabic-form": "arabicForm",
		ascent: 0,
		attributeName: 1,
		attributeType: 1,
		autoReverse: 1,
		azimuth: 0,
		baseFrequency: 1,
		baselineShift: 1,
		"baseline-shift": "baselineShift",
		baseProfile: 1,
		bbox: 0,
		begin: 0,
		bias: 0,
		by: 0,
		calcMode: 1,
		capHeight: 1,
		"cap-height": "capHeight",
		clip: 0,
		clipPath: 1,
		"clip-path": "clipPath",
		clipPathUnits: 1,
		clipRule: 1,
		"clip-rule": "clipRule",
		color: 0,
		colorInterpolation: 1,
		"color-interpolation": "colorInterpolation",
		colorInterpolationFilters: 1,
		"color-interpolation-filters": "colorInterpolationFilters",
		colorProfile: 1,
		"color-profile": "colorProfile",
		colorRendering: 1,
		"color-rendering": "colorRendering",
		contentScriptType: 1,
		contentStyleType: 1,
		cursor: 0,
		cx: 0,
		cy: 0,
		d: 0,
		datatype: 0,
		decelerate: 0,
		descent: 0,
		diffuseConstant: 1,
		direction: 0,
		display: 0,
		divisor: 0,
		dominantBaseline: 1,
		"dominant-baseline": "dominantBaseline",
		dur: 0,
		dx: 0,
		dy: 0,
		edgeMode: 1,
		elevation: 0,
		enableBackground: 1,
		"enable-background": "enableBackground",
		end: 0,
		exponent: 0,
		externalResourcesRequired: 1,
		fill: 0,
		fillOpacity: 1,
		"fill-opacity": "fillOpacity",
		fillRule: 1,
		"fill-rule": "fillRule",
		filter: 0,
		filterRes: 1,
		filterUnits: 1,
		floodOpacity: 1,
		"flood-opacity": "floodOpacity",
		floodColor: 1,
		"flood-color": "floodColor",
		focusable: 0,
		fontFamily: 1,
		"font-family": "fontFamily",
		fontSize: 1,
		"font-size": "fontSize",
		fontSizeAdjust: 1,
		"font-size-adjust": "fontSizeAdjust",
		fontStretch: 1,
		"font-stretch": "fontStretch",
		fontStyle: 1,
		"font-style": "fontStyle",
		fontVariant: 1,
		"font-variant": "fontVariant",
		fontWeight: 1,
		"font-weight": "fontWeight",
		format: 0,
		from: 0,
		fx: 0,
		fy: 0,
		g1: 0,
		g2: 0,
		glyphName: 1,
		"glyph-name": "glyphName",
		glyphOrientationHorizontal: 1,
		"glyph-orientation-horizontal": "glyphOrientationHorizontal",
		glyphOrientationVertical: 1,
		"glyph-orientation-vertical": "glyphOrientationVertical",
		glyphRef: 1,
		gradientTransform: 1,
		gradientUnits: 1,
		hanging: 0,
		horizAdvX: 1,
		"horiz-adv-x": "horizAdvX",
		horizOriginX: 1,
		"horiz-origin-x": "horizOriginX",
		ideographic: 0,
		imageRendering: 1,
		"image-rendering": "imageRendering",
		in2: 0,
		in: 0,
		inlist: 0,
		intercept: 0,
		k1: 0,
		k2: 0,
		k3: 0,
		k4: 0,
		k: 0,
		kernelMatrix: 1,
		kernelUnitLength: 1,
		kerning: 0,
		keyPoints: 1,
		keySplines: 1,
		keyTimes: 1,
		lengthAdjust: 1,
		letterSpacing: 1,
		"letter-spacing": "letterSpacing",
		lightingColor: 1,
		"lighting-color": "lightingColor",
		limitingConeAngle: 1,
		local: 0,
		markerEnd: 1,
		"marker-end": "markerEnd",
		markerHeight: 1,
		markerMid: 1,
		"marker-mid": "markerMid",
		markerStart: 1,
		"marker-start": "markerStart",
		markerUnits: 1,
		markerWidth: 1,
		mask: 0,
		maskContentUnits: 1,
		maskUnits: 1,
		mathematical: 0,
		mode: 0,
		numOctaves: 1,
		offset: 0,
		opacity: 0,
		operator: 0,
		order: 0,
		orient: 0,
		orientation: 0,
		origin: 0,
		overflow: 0,
		overlinePosition: 1,
		"overline-position": "overlinePosition",
		overlineThickness: 1,
		"overline-thickness": "overlineThickness",
		paintOrder: 1,
		"paint-order": "paintOrder",
		panose1: 0,
		"panose-1": "panose1",
		pathLength: 1,
		patternContentUnits: 1,
		patternTransform: 1,
		patternUnits: 1,
		pointerEvents: 1,
		"pointer-events": "pointerEvents",
		points: 0,
		pointsAtX: 1,
		pointsAtY: 1,
		pointsAtZ: 1,
		prefix: 0,
		preserveAlpha: 1,
		preserveAspectRatio: 1,
		primitiveUnits: 1,
		property: 0,
		r: 0,
		radius: 0,
		refX: 1,
		refY: 1,
		renderingIntent: 1,
		"rendering-intent": "renderingIntent",
		repeatCount: 1,
		repeatDur: 1,
		requiredExtensions: 1,
		requiredFeatures: 1,
		resource: 0,
		restart: 0,
		result: 0,
		results: 0,
		rotate: 0,
		rx: 0,
		ry: 0,
		scale: 0,
		security: 0,
		seed: 0,
		shapeRendering: 1,
		"shape-rendering": "shapeRendering",
		slope: 0,
		spacing: 0,
		specularConstant: 1,
		specularExponent: 1,
		speed: 0,
		spreadMethod: 1,
		startOffset: 1,
		stdDeviation: 1,
		stemh: 0,
		stemv: 0,
		stitchTiles: 1,
		stopColor: 1,
		"stop-color": "stopColor",
		stopOpacity: 1,
		"stop-opacity": "stopOpacity",
		strikethroughPosition: 1,
		"strikethrough-position": "strikethroughPosition",
		strikethroughThickness: 1,
		"strikethrough-thickness": "strikethroughThickness",
		string: 0,
		stroke: 0,
		strokeDasharray: 1,
		"stroke-dasharray": "strokeDasharray",
		strokeDashoffset: 1,
		"stroke-dashoffset": "strokeDashoffset",
		strokeLinecap: 1,
		"stroke-linecap": "strokeLinecap",
		strokeLinejoin: 1,
		"stroke-linejoin": "strokeLinejoin",
		strokeMiterlimit: 1,
		"stroke-miterlimit": "strokeMiterlimit",
		strokeWidth: 1,
		"stroke-width": "strokeWidth",
		strokeOpacity: 1,
		"stroke-opacity": "strokeOpacity",
		suppressContentEditableWarning: 1,
		suppressHydrationWarning: 1,
		surfaceScale: 1,
		systemLanguage: 1,
		tableValues: 1,
		targetX: 1,
		targetY: 1,
		textAnchor: 1,
		"text-anchor": "textAnchor",
		textDecoration: 1,
		"text-decoration": "textDecoration",
		textLength: 1,
		textRendering: 1,
		"text-rendering": "textRendering",
		to: 0,
		transform: 0,
		typeof: 0,
		u1: 0,
		u2: 0,
		underlinePosition: 1,
		"underline-position": "underlinePosition",
		underlineThickness: 1,
		"underline-thickness": "underlineThickness",
		unicode: 0,
		unicodeBidi: 1,
		"unicode-bidi": "unicodeBidi",
		unicodeRange: 1,
		"unicode-range": "unicodeRange",
		unitsPerEm: 1,
		"units-per-em": "unitsPerEm",
		unselectable: 0,
		vAlphabetic: 1,
		"v-alphabetic": "vAlphabetic",
		values: 0,
		vectorEffect: 1,
		"vector-effect": "vectorEffect",
		version: 0,
		vertAdvY: 1,
		"vert-adv-y": "vertAdvY",
		vertOriginX: 1,
		"vert-origin-x": "vertOriginX",
		vertOriginY: 1,
		"vert-origin-y": "vertOriginY",
		vHanging: 1,
		"v-hanging": "vHanging",
		vIdeographic: 1,
		"v-ideographic": "vIdeographic",
		viewBox: 1,
		viewTarget: 1,
		visibility: 0,
		vMathematical: 1,
		"v-mathematical": "vMathematical",
		vocab: 0,
		widths: 0,
		wordSpacing: 1,
		"word-spacing": "wordSpacing",
		writingMode: 1,
		"writing-mode": "writingMode",
		x1: 0,
		x2: 0,
		x: 0,
		xChannelSelector: 1,
		xHeight: 1,
		"x-height": "xHeight",
		xlinkActuate: 1,
		"xlink:actuate": "xlinkActuate",
		xlinkArcrole: 1,
		"xlink:arcrole": "xlinkArcrole",
		xlinkHref: 1,
		"xlink:href": "xlinkHref",
		xlinkRole: 1,
		"xlink:role": "xlinkRole",
		xlinkShow: 1,
		"xlink:show": "xlinkShow",
		xlinkTitle: 1,
		"xlink:title": "xlinkTitle",
		xlinkType: 1,
		"xlink:type": "xlinkType",
		xmlBase: 1,
		"xml:base": "xmlBase",
		xmlLang: 1,
		"xml:lang": "xmlLang",
		xmlns: 0,
		"xml:space": "xmlSpace",
		xmlnsXlink: 1,
		"xmlns:xlink": "xmlnsXlink",
		xmlSpace: 1,
		y1: 0,
		y2: 0,
		y: 0,
		yChannelSelector: 1,
		z: 0,
		zoomAndPan: 1
	};
})), WS = /* @__PURE__ */ p(((e) => {
	var t = 0, n = 1, r = 2, i = 3, a = 4, o = 5, s = 6;
	function c(e) {
		return u.hasOwnProperty(e) ? u[e] : null;
	}
	function l(e, t, n, o, s, c, l) {
		this.acceptsBooleans = t === r || t === i || t === a, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = l;
	}
	var u = {};
	[
		"children",
		"dangerouslySetInnerHTML",
		"defaultValue",
		"defaultChecked",
		"innerHTML",
		"suppressContentEditableWarning",
		"suppressHydrationWarning",
		"style"
	].forEach((e) => {
		u[e] = new l(e, t, !1, e, null, !1, !1);
	}), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(([e, t]) => {
		u[e] = new l(e, n, !1, t, null, !1, !1);
	}), [
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach((e) => {
		u[e] = new l(e, r, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach((e) => {
		u[e] = new l(e, r, !1, e, null, !1, !1);
	}), [
		"allowFullScreen",
		"async",
		"autoFocus",
		"autoPlay",
		"controls",
		"default",
		"defer",
		"disabled",
		"disablePictureInPicture",
		"disableRemotePlayback",
		"formNoValidate",
		"hidden",
		"loop",
		"noModule",
		"noValidate",
		"open",
		"playsInline",
		"readOnly",
		"required",
		"reversed",
		"scoped",
		"seamless",
		"itemScope"
	].forEach((e) => {
		u[e] = new l(e, i, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach((e) => {
		u[e] = new l(e, i, !0, e, null, !1, !1);
	}), ["capture", "download"].forEach((e) => {
		u[e] = new l(e, a, !1, e, null, !1, !1);
	}), [
		"cols",
		"rows",
		"size",
		"span"
	].forEach((e) => {
		u[e] = new l(e, s, !1, e, null, !1, !1);
	}), ["rowSpan", "start"].forEach((e) => {
		u[e] = new l(e, o, !1, e.toLowerCase(), null, !1, !1);
	});
	var d = /[\-\:]([a-z])/g, f = (e) => e[1].toUpperCase();
	(/* @__PURE__ */ "accent-height.alignment-baseline.arabic-form.baseline-shift.cap-height.clip-path.clip-rule.color-interpolation.color-interpolation-filters.color-profile.color-rendering.dominant-baseline.enable-background.fill-opacity.fill-rule.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.glyph-name.glyph-orientation-horizontal.glyph-orientation-vertical.horiz-adv-x.horiz-origin-x.image-rendering.letter-spacing.lighting-color.marker-end.marker-mid.marker-start.overline-position.overline-thickness.paint-order.panose-1.pointer-events.rendering-intent.shape-rendering.stop-color.stop-opacity.strikethrough-position.strikethrough-thickness.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.text-anchor.text-decoration.text-rendering.underline-position.underline-thickness.unicode-bidi.unicode-range.units-per-em.v-alphabetic.v-hanging.v-ideographic.v-mathematical.vector-effect.vert-adv-y.vert-origin-x.vert-origin-y.word-spacing.writing-mode.xmlns:xlink.x-height".split(".")).forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, null, !1, !1);
	}), [
		"xlink:actuate",
		"xlink:arcrole",
		"xlink:role",
		"xlink:show",
		"xlink:title",
		"xlink:type"
	].forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	}), [
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
	}), ["tabIndex", "crossOrigin"].forEach((e) => {
		u[e] = new l(e, n, !1, e.toLowerCase(), null, !1, !1);
	});
	var p = "xlinkHref";
	u[p] = new l("xlinkHref", n, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), [
		"src",
		"href",
		"action",
		"formAction"
	].forEach((e) => {
		u[e] = new l(e, n, !1, e.toLowerCase(), null, !0, !0);
	});
	var { CAMELCASE: m, SAME: h, possibleStandardNames: g } = US(), _ = RegExp.prototype.test.bind(/* @__PURE__ */ RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), v = Object.keys(g).reduce((e, t) => {
		let n = g[t];
		return n === h ? e[t] = t : n === m ? e[t.toLowerCase()] = t : e[t] = n, e;
	}, {});
	e.BOOLEAN = i, e.BOOLEANISH_STRING = r, e.NUMERIC = o, e.OVERLOADED_BOOLEAN = a, e.POSITIVE_NUMERIC = s, e.RESERVED = t, e.STRING = n, e.getPropertyInfo = c, e.isCustomAttribute = _, e.possibleStandardNames = v;
})), GS = /* @__PURE__ */ p(((e) => {
	var n = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = o, e.setStyleProp = c;
	var r = t("react"), i = n(Zp()), a = new Set([
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-src",
		"font-face-uri",
		"font-face-format",
		"font-face-name",
		"missing-glyph"
	]);
	function o(e, t) {
		return e.includes("-") ? !a.has(e) : !!(t && typeof t.is == "string");
	}
	var s = { reactCompat: !0 };
	function c(e, t) {
		if (typeof e == "string") {
			if (!e.trim()) {
				t.style = {};
				return;
			}
			try {
				t.style = (0, i.default)(e, s);
			} catch {
				t.style = {};
			}
		}
	}
	e.PRESERVE_CUSTOM_ATTRIBUTES = Number(r.version.split(".")[0]) >= 16, e.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
		"tr",
		"tbody",
		"thead",
		"tfoot",
		"colgroup",
		"table",
		"head",
		"html",
		"frameset"
	]), e.canTextBeChildOfNode = (t) => !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(t.name), e.returnFirstArg = (e) => e;
})), KS = /* @__PURE__ */ p(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var t = WS(), n = GS(), r = ["checked", "value"], i = [
		"input",
		"select",
		"textarea"
	], a = {
		reset: !0,
		submit: !0
	};
	function o(e = {}, o) {
		let c = {}, l = !!(e.type && a[e.type]);
		for (let a in e) {
			let u = e[a];
			if ((0, t.isCustomAttribute)(a)) {
				c[a] = u;
				continue;
			}
			let d = a.toLowerCase(), f = s(d);
			if (f) {
				let e = (0, t.getPropertyInfo)(f);
				switch (r.includes(f) && i.includes(o) && !l && (f = s("default" + d)), c[f] = u, e?.type) {
					case t.BOOLEAN:
						c[f] = !0;
						break;
					case t.OVERLOADED_BOOLEAN:
						u === "" && (c[f] = !0);
						break;
				}
				continue;
			}
			n.PRESERVE_CUSTOM_ATTRIBUTES && (c[a] = u);
		}
		return (0, n.setStyleProp)(e.style, c), c;
	}
	function s(e) {
		return t.possibleStandardNames[e];
	}
}));
//#endregion
//#region node_modules/domelementtype/dist/index.js
function qS(e) {
	return e.type === $.Tag || e.type === $.Script || e.type === $.Style;
}
var $, JS = r((() => {
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})($ || ($ = {})), $.Root, $.Text, $.Directive, $.Comment, $.Script, $.Style, $.Tag, $.CDATA, $.Doctype;
}));
//#endregion
//#region node_modules/domhandler/dist/node.js
function YS(e) {
	return qS(e);
}
function XS(e) {
	return e.type === $.CDATA;
}
function ZS(e) {
	return e.type === $.Text;
}
function QS(e) {
	return e.type === $.Comment;
}
function $S(e) {
	return e.type === $.Directive;
}
function eC(e) {
	return e.type === $.Root;
}
function tC(e) {
	return Object.hasOwn(e, "children");
}
function nC(e, t = !1) {
	let n;
	if (ZS(e)) n = new oC(e.data);
	else if (QS(e)) n = new sC(e.data);
	else if (YS(e)) {
		let r = t ? rC(e.children) : [], i = new fC(e.name, { ...e.attribs }, r);
		for (let e of r) e.parent = i;
		e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), n = i;
	} else if (XS(e)) {
		let r = t ? rC(e.children) : [], i = new uC(r);
		for (let e of r) e.parent = i;
		n = i;
	} else if (eC(e)) {
		let r = t ? rC(e.children) : [], i = new dC(r);
		for (let e of r) e.parent = i;
		e["x-mode"] && (i["x-mode"] = e["x-mode"]), n = i;
	} else if ($S(e)) {
		let t = new cC(e.name, e.data);
		e["x-name"] != null && (t["x-name"] = e["x-name"], t["x-publicId"] = e["x-publicId"], t["x-systemId"] = e["x-systemId"]), n = t;
	} else throw Error(`Not implemented yet: ${e.type}`);
	return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
}
function rC(e) {
	let t = e.map((e) => nC(e, !0));
	for (let e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
	return t;
}
var iC, aC, oC, sC, cC, lC, uC, dC, fC, pC = r((() => {
	JS(), Mt(), iC = class {
		constructor() {
			F(this, "parent", null), F(this, "prev", null), F(this, "next", null), F(this, "startIndex", null), F(this, "endIndex", null);
		}
		get parentNode() {
			return this.parent;
		}
		set parentNode(e) {
			this.parent = e;
		}
		get previousSibling() {
			return this.prev;
		}
		set previousSibling(e) {
			this.prev = e;
		}
		get nextSibling() {
			return this.next;
		}
		set nextSibling(e) {
			this.next = e;
		}
		cloneNode(e = !1) {
			return nC(this, e);
		}
	}, aC = class extends iC {
		constructor(e) {
			super(), F(this, "data", void 0), this.data = e;
		}
		get nodeValue() {
			return this.data;
		}
		set nodeValue(e) {
			this.data = e;
		}
	}, oC = class extends aC {
		constructor(...e) {
			super(...e), F(this, "type", $.Text);
		}
		get nodeType() {
			return 3;
		}
	}, sC = class extends aC {
		constructor(...e) {
			super(...e), F(this, "type", $.Comment);
		}
		get nodeType() {
			return 8;
		}
	}, cC = class extends aC {
		constructor(e, t) {
			super(t), F(this, "type", $.Directive), F(this, "name", void 0), F(this, "x-name", void 0), F(this, "x-publicId", void 0), F(this, "x-systemId", void 0), this.name = e;
		}
		get nodeType() {
			return 1;
		}
	}, lC = class extends iC {
		constructor(e) {
			super(), F(this, "children", void 0), this.children = e;
		}
		get firstChild() {
			return this.children[0] ?? null;
		}
		get lastChild() {
			return this.children.length > 0 ? this.children[this.children.length - 1] : null;
		}
		get childNodes() {
			return this.children;
		}
		set childNodes(e) {
			this.children = e;
		}
	}, uC = class extends lC {
		constructor(...e) {
			super(...e), F(this, "type", $.CDATA);
		}
		get nodeType() {
			return 4;
		}
	}, dC = class extends lC {
		constructor(...e) {
			super(...e), F(this, "type", $.Root);
		}
		get nodeType() {
			return 9;
		}
	}, fC = class extends lC {
		constructor(e, t, n = [], r = e === "script" ? $.Script : e === "style" ? $.Style : $.Tag) {
			super(n), F(this, "name", void 0), F(this, "attribs", void 0), F(this, "type", void 0), F(this, "namespace", void 0), F(this, "x-attribsNamespace", void 0), F(this, "x-attribsPrefix", void 0), this.name = e, this.attribs = t, this.type = r;
		}
		get nodeType() {
			return 1;
		}
		get tagName() {
			return this.name;
		}
		set tagName(e) {
			this.name = e;
		}
		get attributes() {
			return Object.keys(this.attribs).map((e) => ({
				name: e,
				value: this.attribs[e],
				namespace: this["x-attribsNamespace"]?.[e],
				prefix: this["x-attribsPrefix"]?.[e]
			}));
		}
	};
})), mC = /* @__PURE__ */ f({
	CDATA: () => uC,
	Comment: () => sC,
	DataNode: () => aC,
	Document: () => dC,
	DomHandler: () => gC,
	Element: () => fC,
	Node: () => iC,
	NodeWithChildren: () => lC,
	ProcessingInstruction: () => cC,
	Text: () => oC,
	cloneNode: () => nC,
	default: () => gC,
	hasChildren: () => tC,
	isCDATA: () => XS,
	isComment: () => QS,
	isDirective: () => $S,
	isDocument: () => eC,
	isTag: () => YS,
	isText: () => ZS
}), hC, gC, _C = r((() => {
	JS(), pC(), Mt(), pC(), hC = {
		withStartIndices: !1,
		withEndIndices: !1,
		xmlMode: !1
	}, gC = class {
		constructor(e, t, n) {
			F(this, "dom", []), F(this, "root", new dC(this.dom)), F(this, "callback", void 0), F(this, "options", void 0), F(this, "elementCB", void 0), F(this, "done", !1), F(this, "tagStack", [this.root]), F(this, "lastNode", null), F(this, "parser", null), typeof t == "function" && (n = t, t = hC), typeof e == "object" && (t = e, e = void 0), this.callback = e ?? null, this.options = t ?? hC, this.elementCB = n ?? null;
		}
		onparserinit(e) {
			this.parser = e;
		}
		onreset() {
			this.dom = [], this.root = new dC(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
		}
		onend() {
			this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
		}
		onerror(e) {
			this.handleCallback(e);
		}
		onclosetag() {
			this.lastNode = null;
			let e = this.tagStack.pop();
			this.options.withEndIndices && this.parser && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e);
		}
		onopentag(e, t) {
			let n = new fC(e, t, void 0, this.options.xmlMode ? $.Tag : void 0);
			this.addNode(n), this.tagStack.push(n);
		}
		ontext(e) {
			let { lastNode: t } = this;
			if (t && t.type === $.Text) t.data += e, this.options.withEndIndices && this.parser && (t.endIndex = this.parser.endIndex);
			else {
				let t = new oC(e);
				this.addNode(t), this.lastNode = t;
			}
		}
		oncomment(e) {
			if (this.lastNode && this.lastNode.type === $.Comment) {
				this.lastNode.data += e;
				return;
			}
			let t = new sC(e);
			this.addNode(t), this.lastNode = t;
		}
		oncommentend() {
			this.lastNode = null;
		}
		oncdatastart() {
			let e = new oC(""), t = new uC([e]);
			this.addNode(t), e.parent = t, this.lastNode = e;
		}
		oncdataend() {
			this.lastNode = null;
		}
		onprocessinginstruction(e, t) {
			let n = new cC(e, t);
			this.addNode(n);
		}
		handleCallback(e) {
			if (typeof this.callback == "function") this.callback(e, this.dom);
			else if (e) throw e;
		}
		addNode(e) {
			let t = this.tagStack[this.tagStack.length - 1], n = t.children[t.children.length - 1];
			this.options.withStartIndices && this.parser && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && this.parser && (e.endIndex = this.parser.endIndex), t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null;
		}
	};
})), vC = /* @__PURE__ */ p(((n) => {
	var r = n && n.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(n, "__esModule", { value: !0 }), n.default = l;
	var i = (_C(), e(mC)), a = t("react"), o = r(KS()), s = GS(), c = {
		cloneElement: a.cloneElement,
		createElement: a.createElement,
		isValidElement: a.isValidElement
	};
	function l(e, t = {}) {
		let n = [], r = typeof t.replace == "function", i = t.transform ?? s.returnFirstArg, { cloneElement: a, createElement: f, isValidElement: p } = t.library ?? c, m = e.length;
		u(e);
		for (let c = 0; c < m; c++) {
			let u = e[c];
			if (r) {
				let e = t.replace?.call(t, u, c);
				if (p(e)) {
					m > 1 && (e = a(e, { key: e.key ?? c })), n.push(i(e, u, c));
					continue;
				}
			}
			if (u.type === "text") {
				let e = !u.data.trim().length;
				if (e && u.parent && !(0, s.canTextBeChildOfNode)(u.parent) || t.trim && e) continue;
				n.push(i(u.data, u, c));
				continue;
			}
			let h = u, g = {};
			d(h) ? ((0, s.setStyleProp)(h.attribs.style, h.attribs), g = h.attribs) : h.attribs && (g = (0, o.default)(h.attribs, h.name));
			let _;
			switch (u.type) {
				case "script":
				case "style":
					u.children[0] && (g.dangerouslySetInnerHTML = { __html: u.children[0].data });
					break;
				case "tag":
					u.name === "textarea" && u.children[0] ? g.defaultValue = u.children[0].data : u.children?.length && (_ = l(u.children, t));
					break;
				default: continue;
			}
			m > 1 && (g.key = c), n.push(i(f(u.name, g, _), u, c));
		}
		return n.length === 1 ? n[0] : n;
	}
	function u(e) {
		for (let t of e) (t.type === "tag" || t.type === "script" || t.type === "style") && (Object.setPrototypeOf(t, i.Element.prototype), u(t.children));
	}
	function d(e) {
		return s.PRESERVE_CUSTOM_ATTRIBUTES && e.type === "tag" && (0, s.isCustomComponent)(e.name, e.attribs);
	}
})), yC = /* @__PURE__ */ d((/* @__PURE__ */ p(((t) => {
	var n = t && t.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(t, "__esModule", { value: !0 }), t.htmlToDOM = t.domToReact = t.attributesToProps = t.Text = t.ProcessingInstruction = t.Element = t.Comment = void 0, t.default = s;
	var r = n(HS());
	t.htmlToDOM = r.default, t.attributesToProps = n(KS()).default;
	var i = n(vC());
	t.domToReact = i.default;
	var a = (_C(), e(mC));
	Object.defineProperty(t, "Comment", {
		enumerable: !0,
		get: function() {
			return a.Comment;
		}
	}), Object.defineProperty(t, "Element", {
		enumerable: !0,
		get: function() {
			return a.Element;
		}
	}), Object.defineProperty(t, "ProcessingInstruction", {
		enumerable: !0,
		get: function() {
			return a.ProcessingInstruction;
		}
	}), Object.defineProperty(t, "Text", {
		enumerable: !0,
		get: function() {
			return a.Text;
		}
	});
	var o = { lowerCaseAttributeNames: !1 };
	function s(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		let n = Object.assign(Object.assign({}, t?.htmlparser2 ?? o), { trustedTypePolicy: t?.trustedTypePolicy });
		return (0, i.default)((0, r.default)(e, n), t);
	}
})))(), 1), bC = yC.default.default || yC.default;
//#endregion
//#region components/widget/article-html/blocks/table-of-contents.tsx
function xC({ entries: e }) {
	let t = m("article"), [n, r] = re(!1), i = (e, t) => {
		e.preventDefault();
		let n = e.currentTarget.getRootNode(), r = n instanceof ShadowRoot || n instanceof Document ? n : document, i = "querySelector" in r ? r.querySelector(`[id="${CSS.escape(t)}"]`) : null;
		if (!i) return;
		let a = i.closest("[data-slot='scroll-area-viewport']");
		if (!a) {
			let e = i.parentElement;
			for (; e;) {
				let t = getComputedStyle(e);
				if (/(auto|scroll|overlay)/.test(t.overflowY)) {
					a = e;
					break;
				}
				e = e.parentElement;
			}
		}
		if (a) {
			let e = i.getBoundingClientRect(), t = a.getBoundingClientRect();
			a.scrollTo({
				top: a.scrollTop + e.top - t.top - 16,
				behavior: "smooth"
			});
		} else i.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ k("nav", {
		"aria-label": t("tableOfContents"),
		className: h("wx-toc mt-0 overflow-hidden rounded-xl border border-wx-border bg-wx-bg", "[&_a]:no-underline [&_a]:text-inherit [&_a:hover]:opacity-100", "[&_ul]:m-0 [&_ul]:list-none [&_ul]:p-0", "[&_li]:m-0"),
		children: [/* @__PURE__ */ k("button", {
			type: "button",
			onClick: () => r((e) => !e),
			"aria-expanded": n,
			className: h("flex w-full items-center justify-between gap-3 px-4 py-3", "text-left text-sm font-medium text-wx-fg", "transition-colors hover:bg-wx-bg-elevated/40"),
			children: [/* @__PURE__ */ O("span", { children: t("tableOfContents") }), /* @__PURE__ */ O(jd, {
				className: h("h-4 w-4 shrink-0 text-wx-fg-subtle transition-transform duration-200", n && "rotate-180"),
				"aria-hidden": "true"
			})]
		}), /* @__PURE__ */ O("div", {
			className: h("grid transition-[grid-template-rows] duration-200 ease-out", n ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
			"aria-hidden": !n,
			children: /* @__PURE__ */ O("div", {
				className: "min-h-0 overflow-hidden",
				children: /* @__PURE__ */ O("div", {
					className: "border-t border-wx-border/70 px-2 py-2",
					children: /* @__PURE__ */ O("div", {
						className: "flex flex-col",
						children: e.map((e) => {
							let t = e.level === 2 ? 16 : e.level === 3 ? 32 : 0;
							return /* @__PURE__ */ O("button", {
								type: "button",
								onClick: (t) => i(t, e.id),
								className: h("flex h-8 items-center truncate rounded-md pr-2 text-left text-sm text-wx-fg", "transition-colors hover:bg-wx-bg-elevated/50"),
								style: { paddingLeft: 12 + t },
								children: /* @__PURE__ */ O("span", {
									className: "truncate",
									children: e.text
								})
							}, e.id);
						})
					})
				})
			})
		})]
	});
}
//#endregion
//#region components/widget/article-html/blocks/accordion-block.tsx
function SC({ summary: e, body: t, defaultOpen: n }) {
	let [r, i] = re(n);
	return /* @__PURE__ */ k("div", {
		className: "my-2 overflow-hidden rounded-lg border border-wx-border",
		children: [/* @__PURE__ */ k("button", {
			type: "button",
			onClick: () => i((e) => !e),
			"aria-expanded": r,
			className: h("flex w-full items-center justify-between gap-3 px-4 py-3", "text-left text-sm font-semibold text-wx-fg", "transition-colors hover:bg-wx-bg-elevated/50", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary/30"),
			children: [/* @__PURE__ */ O("span", {
				className: "min-w-0 flex-1",
				children: e
			}), /* @__PURE__ */ O(jd, {
				className: h("h-4 w-4 shrink-0 text-wx-fg-subtle transition-transform", r && "rotate-180"),
				"aria-hidden": "true"
			})]
		}), r && /* @__PURE__ */ O("div", {
			className: "border-t border-wx-border px-4 py-3 text-sm leading-relaxed text-wx-fg [&>:first-child]:mt-0 [&>:last-child]:mb-0",
			children: t
		})]
	});
}
//#endregion
//#region components/widget/article-html/build-options/accordion.tsx
var CC = (e, t) => {
	let n = e.name === "details", r = e.name === "div" && e.attribs?.["data-type"] === "details";
	if (!n && !r) return;
	let i = r ? (e.children ?? []).flatMap((e) => e instanceof yC.Element && e.name === "div" && !e.attribs?.["data-type"] ? e.children ?? [] : [e]) : e.children ?? [], a = i.find((e) => e instanceof yC.Element && e.name === "summary"), o = i.filter((e) => e !== a && !(e instanceof yC.Element && e.name === "button")), s = o.find((e) => e instanceof yC.Element && e.name === "div" && (e.attribs?.["data-type"] === "detailsContent" || e.attribs?.["data-type"] === "details-content")), c = s ? s.children ?? [] : o, l = a ? (0, yC.domToReact)(a.children, t.options) : null, u = /* @__PURE__ */ O(ie, { children: (0, yC.domToReact)(c, t.options) });
	return /* @__PURE__ */ O(SC, {
		defaultOpen: e.attribs?.open !== void 0 || e.attribs?.["data-open"] === "true",
		summary: l,
		body: u
	});
}, wC = {
	card: "border-wx-border bg-wx-bg-elevated/60",
	callout: "border-wx-primary/30 bg-wx-primary/5",
	note: "border-wx-border bg-wx-bg-elevated/60",
	tip: "border-wx-success/30 bg-wx-success/5",
	warning: "border-wx-warning/30 bg-wx-warning/5",
	danger: "border-wx-danger/30 bg-wx-danger/5"
}, TC = (e, t) => {
	let n = wC[e.name];
	if (n) return /* @__PURE__ */ O("div", {
		className: `my-4 rounded-wx-md border px-4 py-3 ${n}`,
		"data-custom-block": e.name,
		children: (0, yC.domToReact)(e.children ?? [], t.options)
	});
};
//#endregion
//#region lib/article-toc.ts
function EC(e, t) {
	let n = e.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "section", r = n, i = 2;
	for (; t.has(r);) r = `${n}-${i}`, i += 1;
	return t.add(r), r;
}
//#endregion
//#region components/widget/article-html/extract-text.ts
function DC(e) {
	let t = "";
	for (let n of e.children ?? []) n.type === "text" ? t += n.data ?? "" : n instanceof yC.Element && (t += DC(n));
	return t;
}
//#endregion
//#region components/widget/article-html/build-options/heading.ts
var OC = (e, t) => {
	if (e.name !== "h1" && e.name !== "h2" && e.name !== "h3") return;
	let n = Number(e.name.slice(1)), r = DC(e).trim();
	if (!r) return;
	let i = EC(r, t.seenIds);
	return t.entries.push({
		id: i,
		text: r,
		level: n
	}), x(e.name, { id: i }, (0, yC.domToReact)(e.children ?? [], t.options));
}, kC = (e, t) => {
	if (e.name !== "img") return;
	let n = e.attribs ?? {}, r = n["data-align"] ?? "center", i = n.width || n.style?.match(/width:\s*([^;]+)/i)?.[1], a = r === "left" ? "0" : "auto", o = r === "right" ? "0" : "auto", s = n.src ?? "", c = n.alt ?? "", l = {
		...i ? { width: i } : {},
		marginLeft: a,
		marginRight: o,
		display: "block"
	};
	if (t.images && t.onImageClick) {
		let e = t.images.length;
		t.images.push({
			url: s,
			mimetype: "image/jpeg",
			alt: c
		});
		let n = t.onImageClick;
		return /* @__PURE__ */ O("button", {
			type: "button",
			onClick: () => n(e),
			className: "my-3 block w-full cursor-zoom-in border-0 bg-transparent p-0",
			"aria-label": c || "Open image",
			children: /* @__PURE__ */ O("img", {
				src: s,
				alt: c,
				style: l,
				className: "max-w-full"
			})
		});
	}
	return /* @__PURE__ */ O("img", {
		src: s,
		alt: c,
		style: l,
		className: "my-3 max-w-full"
	});
}, AC = (e, t) => {
	if (e.name !== "a") return;
	let n = e.attribs?.href ?? "";
	return /* @__PURE__ */ O("a", {
		href: n,
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: () => t.onLinkClick?.(n),
		className: "text-wx-primary underline underline-offset-2 transition-opacity hover:opacity-70",
		children: (0, yC.domToReact)(e.children ?? [], t.options)
	});
}, jC = (e, t) => {
	if (e.name === "table") return /* @__PURE__ */ O("div", {
		className: h("my-3 overflow-x-auto", "[scrollbar-width:thin] [scrollbar-color:var(--color-wx-fg-subtle)_transparent]", "[&::-webkit-scrollbar]:h-2", "[&::-webkit-scrollbar-track]:bg-transparent", "[&::-webkit-scrollbar-thumb]:rounded-full", "[&::-webkit-scrollbar-thumb]:bg-wx-fg-subtle/40", "[&::-webkit-scrollbar-thumb:hover]:bg-wx-fg-subtle/60"),
		children: /* @__PURE__ */ O("table", { children: (0, yC.domToReact)(e.children ?? [], t.options) })
	});
};
//#endregion
//#region components/widget/article-html/blocks/tabs-block.tsx
function MC({ tabs: e }) {
	let t = m("article"), [n, r] = re(0);
	return e.length === 0 ? null : /* @__PURE__ */ k("div", {
		className: "my-4",
		children: [/* @__PURE__ */ O("div", {
			role: "tablist",
			className: "relative flex items-center gap-1 border-b border-wx-border",
			children: e.map((e, i) => {
				let a = i === n, o = e.label || t("tabFallback", { n: i + 1 });
				return /* @__PURE__ */ k("button", {
					type: "button",
					role: "tab",
					"aria-selected": a,
					tabIndex: a ? 0 : -1,
					onClick: () => r(i),
					className: h("group relative inline-flex items-center justify-center px-3 py-2 text-sm", "transition-colors focus-visible:outline-none", a ? "font-semibold text-wx-fg" : "font-medium text-wx-fg-muted hover:text-wx-fg"),
					children: [o, /* @__PURE__ */ O("span", {
						"aria-hidden": "true",
						className: h("pointer-events-none absolute inset-x-2 bottom-0 h-[2px] origin-left rounded-full bg-wx-primary", "transition-transform duration-200 ease-out", a ? "scale-x-100" : "scale-x-0")
					})]
				}, i);
			})
		}), /* @__PURE__ */ O("div", {
			className: "mt-3 text-sm leading-relaxed text-wx-fg [&>:first-child]:mt-0 [&>:last-child]:mb-0",
			children: e[n]?.body
		})]
	});
}
//#endregion
//#region components/widget/article-html/build-options.ts
var NC = [
	OC,
	(e, t) => {
		if (e.name === "div" && (e.attribs?.["data-type"] === "tabs" || e.attribs?.["data-type"] === "tabs")) return /* @__PURE__ */ O(MC, { tabs: (e.children ?? []).filter((e) => e instanceof yC.Element && e.name === "div" && e.attribs?.["data-type"] === "tab").map((e) => {
			let n = e.children?.find((e) => e instanceof yC.Element && e.name === "div" && "data-tab-label" in (e.attribs ?? {})), r = (e.children ?? []).filter((e) => e !== n);
			return {
				label: n ? DC(n).trim() : "",
				body: /* @__PURE__ */ O(ie, { children: (0, yC.domToReact)(r, t.options) })
			};
		}) });
	},
	CC,
	TC,
	jC,
	kC,
	AC
];
function PC(e, t, n, r, i) {
	let a = {}, o = {
		options: a,
		entries: e,
		seenIds: t,
		images: n,
		onImageClick: r,
		onLinkClick: i
	};
	return a.replace = (e) => {
		if (e instanceof yC.Element) for (let t of NC) {
			let n = t(e, o);
			if (n !== void 0) return n;
		}
	}, a;
}
//#endregion
//#region components/widget/article-html/index.tsx
function FC({ html: e, className: t, onLinkClick: n }) {
	let [r, i] = re(null), { trackLinkClick: a } = ip(), o = C((e) => a({
		url: e,
		targetType: "EXTERNAL"
	}), [a]), s = n ?? o, { parsed: c, entries: l, images: u } = te(() => {
		let t = [], n = /* @__PURE__ */ new Set(), r = [];
		return {
			parsed: bC(e, PC(t, n, r, i, s)),
			entries: t,
			images: r
		};
	}, [e, s]);
	return /* @__PURE__ */ k("div", {
		className: t,
		children: [
			l.length >= 3 && /* @__PURE__ */ O(xC, { entries: l }),
			c,
			u.length > 0 && /* @__PURE__ */ O(op, {
				items: u,
				initialIndex: r ?? 0,
				open: r !== null,
				onClose: () => i(null)
			})
		]
	});
}
function IC(e) {
	return bC(e, PC([], /* @__PURE__ */ new Set()));
}
//#endregion
//#region lib/content-languages.ts
var LC = [
	{
		value: "en",
		label: "English"
	},
	{
		value: "en-US",
		label: "English (US)"
	},
	{
		value: "en-GB",
		label: "English (UK)"
	},
	{
		value: "uk",
		label: "Українська"
	},
	{
		value: "de",
		label: "Deutsch"
	},
	{
		value: "es",
		label: "Español"
	},
	{
		value: "es-MX",
		label: "Español (México)"
	},
	{
		value: "fr",
		label: "Français"
	},
	{
		value: "it",
		label: "Italiano"
	},
	{
		value: "pt",
		label: "Português"
	},
	{
		value: "pt-BR",
		label: "Português (Brasil)"
	},
	{
		value: "nl",
		label: "Nederlands"
	},
	{
		value: "pl",
		label: "Polski"
	},
	{
		value: "tr",
		label: "Türkçe"
	},
	{
		value: "cs",
		label: "Čeština"
	},
	{
		value: "sk",
		label: "Slovenčina"
	},
	{
		value: "ro",
		label: "Română"
	},
	{
		value: "hu",
		label: "Magyar"
	},
	{
		value: "el",
		label: "Ελληνικά"
	},
	{
		value: "sv",
		label: "Svenska"
	},
	{
		value: "da",
		label: "Dansk"
	},
	{
		value: "no",
		label: "Norsk"
	},
	{
		value: "fi",
		label: "Suomi"
	},
	{
		value: "ar",
		label: "العربية"
	},
	{
		value: "he",
		label: "עברית"
	},
	{
		value: "hi",
		label: "हिन्दी"
	},
	{
		value: "th",
		label: "ไทย"
	},
	{
		value: "vi",
		label: "Tiếng Việt"
	},
	{
		value: "id",
		label: "Bahasa Indonesia"
	},
	{
		value: "ja",
		label: "日本語"
	},
	{
		value: "ko",
		label: "한국어"
	},
	{
		value: "zh",
		label: "中文（简体）"
	},
	{
		value: "zh-TW",
		label: "中文（繁體）"
	}
];
function RC(e) {
	let t = LC.find((t) => t.value === e);
	if (t) return t.label;
	let n = e.split("-")[0].toLowerCase(), r = LC.find((e) => e.value === n);
	return r ? r.label : n.toUpperCase();
}
//#endregion
export { wu as $, bd as A, ed as B, Rd as C, jd as D, Nd as E, cd as F, Au as G, Tu as H, td as I, ou as J, uu as K, ad as L, pd as M, md as N, Ad as O, ud as P, Ou as Q, rd as R, Ld as S, Pd as T, fu as U, Bu as V, bu as W, Su as X, cu as Y, vu as Z, $d as _, Ly as a, xl as at, Ud as b, ip as c, Ja as ct, ff as d, A as dt, Eu as et, df as f, le as ft, Qd as g, ef as h, VS as i, Gl as it, gd as j, xd as k, $f as l, Me as lt, sf as m, FC as n, ru as nt, op as o, G as ot, lf as p, j as pt, gu as q, IC as r, tu as rt, ap as s, Ya as st, RC as t, mu as tt, pf as u, M as ut, zd as v, Fd as w, Hd as x, Wd as y, sd as z };

//# sourceMappingURL=widget-react-CVLHwRZh.js.map