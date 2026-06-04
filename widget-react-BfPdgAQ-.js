import "react";
import "react-dom";
import "react/jsx-runtime";
import "react-dom/client";
import { S as e, _ as t, d as n, f as r, g as i, h as a, m as o, p as s, v as c, w as l, y as u } from "./widget-react-DE7AVrCo.js";
import { i as d, n as f, o as p, t as m } from "./widget-react-BxvW64LH.js";
import * as h from "react";
import { Children as g, createContext as _, isValidElement as v, useCallback as y, useContext as ee, useEffect as b, useId as x, useInsertionEffect as te, useMemo as S, useRef as C, useState as ne } from "react";
import { Fragment as re, jsx as w, jsxs as ie } from "react/jsx-runtime";
import * as T from "react-dom";
import { createPortal as ae } from "react-dom";
//#region node_modules/tslib/tslib.es6.mjs
var oe = function(e, t) {
	return oe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, oe(e, t);
};
function se(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	oe(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var E = function() {
	return E = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, E.apply(this, arguments);
};
function ce(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function le(e, t, n, r) {
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
function ue(e, t) {
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
function D(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/ts-invariant/lib/invariant.js
var de = "Invariant Violation", fe = Object.setPrototypeOf, pe = fe === void 0 ? function(e, t) {
	return e.__proto__ = t, e;
} : fe, me = function(e) {
	se(t, e);
	function t(n) {
		n === void 0 && (n = de);
		var r = e.call(this, typeof n == "number" ? de + ": " + n + " (see https://github.com/apollographql/invariant-packages)" : n) || this;
		return r.framesToPop = 1, r.name = de, pe(r, t.prototype), r;
	}
	return t;
}(Error);
function O(e, t) {
	if (!e) throw new me(t);
}
var he = [
	"debug",
	"log",
	"warn",
	"error",
	"silent"
], ge = he.indexOf("log");
function _e(e) {
	return function() {
		if (he.indexOf(e) >= ge) return (console[e] || console.log).apply(console, arguments);
	};
}
(function(e) {
	e.debug = _e("debug"), e.log = _e("log"), e.warn = _e("warn"), e.error = _e("error");
})(O || (O = {}));
//#endregion
//#region node_modules/@apollo/client/version.js
var ve = "3.14.1";
//#endregion
//#region node_modules/@apollo/client/utilities/globals/maybe.js
function k(e) {
	try {
		return e();
	} catch {}
}
//#endregion
//#region node_modules/@apollo/client/utilities/globals/global.js
var ye = k(function() {
	return globalThis;
}) || k(function() {
	return window;
}) || k(function() {
	return self;
}) || k(function() {
	return global;
}) || k(function() {
	return k.constructor("return this")();
}), be = /* @__PURE__ */ new Map();
function xe(e) {
	var t = be.get(e) || 1;
	return be.set(e, t + 1), `${e}:${t}:${Math.random().toString(36).slice(2)}`;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/stringifyForDisplay.js
function Se(e, t) {
	t === void 0 && (t = 0);
	var n = xe("stringifyForDisplay");
	return JSON.stringify(e, function(e, t) {
		return t === void 0 ? n : t;
	}, t).split(JSON.stringify(n)).join("<undefined>");
}
//#endregion
//#region node_modules/@apollo/client/utilities/globals/invariantWrappers.js
function Ce(e) {
	return function(t) {
		var n = [...arguments].slice(1);
		if (typeof t == "number") {
			var r = t;
			t = De(r), t || (t = Oe(r, n), n = []);
		}
		e.apply(void 0, [t].concat(n));
	};
}
var A = Object.assign(function(e, t) {
	var n = [...arguments].slice(2);
	e || O(e, De(t, n) || Oe(t, n));
}, {
	debug: Ce(O.debug),
	log: Ce(O.log),
	warn: Ce(O.warn),
	error: Ce(O.error)
});
function we(e) {
	var t = [...arguments].slice(1);
	return new me(De(e, t) || Oe(e, t));
}
var Te = Symbol.for("ApolloErrorMessageHandler_" + ve);
function Ee(e) {
	if (typeof e == "string") return e;
	try {
		return Se(e, 2).slice(0, 1e3);
	} catch {
		return "<non-serializable>";
	}
}
function De(e, t) {
	if (t === void 0 && (t = []), e) return ye[Te] && ye[Te](e, t.map(Ee));
}
function Oe(e, t) {
	if (t === void 0 && (t = []), e) return `An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({
		version: ve,
		message: e,
		args: t.map(Ee)
	}))}`;
}
//#endregion
//#region node_modules/rehackt/index.js
var ke = /* @__PURE__ */ u(((t, n) => {
	n.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, n.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, n.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(n.exports, e("react"));
}));
//#endregion
//#region node_modules/graphql/jsutils/devAssert.mjs
function Ae(e, t) {
	if (!e) throw Error(t);
}
//#endregion
//#region node_modules/graphql/jsutils/isObjectLike.mjs
function je(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/graphql/jsutils/invariant.mjs
function Me(e, t) {
	if (!e) throw Error(t ?? "Unexpected invariant triggered.");
}
//#endregion
//#region node_modules/graphql/language/location.mjs
var Ne = /\r\n|[\n\r]/g;
function Pe(e, t) {
	let n = 0, r = 1;
	for (let i of e.body.matchAll(Ne)) {
		if (typeof i.index == "number" || Me(!1), i.index >= t) break;
		n = i.index + i[0].length, r += 1;
	}
	return {
		line: r,
		column: t + 1 - n
	};
}
//#endregion
//#region node_modules/graphql/language/printLocation.mjs
function Fe(e) {
	return Ie(e.source, Pe(e.source, e.start));
}
function Ie(e, t) {
	let n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? n : 0, c = t.column + s, l = `${e.name}:${o}:${c}\n`, u = r.split(/\r\n|[\n\r]/g), d = u[i];
	if (d.length > 120) {
		let e = Math.floor(c / 80), t = c % 80, n = [];
		for (let e = 0; e < d.length; e += 80) n.push(d.slice(e, e + 80));
		return l + Le([
			[`${o} |`, n[0]],
			...n.slice(1, e + 1).map((e) => ["|", e]),
			["|", "^".padStart(t)],
			["|", n[e + 1]]
		]);
	}
	return l + Le([
		[`${o - 1} |`, u[i - 1]],
		[`${o} |`, d],
		["|", "^".padStart(c)],
		[`${o + 1} |`, u[i + 1]]
	]);
}
function Le(e) {
	let t = e.filter(([e, t]) => t !== void 0), n = Math.max(...t.map(([e]) => e.length));
	return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n");
}
//#endregion
//#region node_modules/graphql/error/GraphQLError.mjs
function Re(e) {
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
var ze = class e extends Error {
	constructor(t, ...n) {
		let { nodes: r, source: i, positions: a, path: o, originalError: s, extensions: c } = Re(n);
		super(t), this.name = "GraphQLError", this.path = o ?? void 0, this.originalError = s ?? void 0, this.nodes = Be(Array.isArray(r) ? r : r ? [r] : void 0);
		let l = Be(this.nodes?.map((e) => e.loc).filter((e) => e != null));
		this.source = i ?? l?.[0]?.source, this.positions = a ?? l?.map((e) => e.start), this.locations = a && i ? a.map((e) => Pe(i, e)) : l?.map((e) => Pe(e.source, e.start));
		let u = je(s?.extensions) ? s?.extensions : void 0;
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
		if (this.nodes) for (let t of this.nodes) t.loc && (e += "\n\n" + Fe(t.loc));
		else if (this.source && this.locations) for (let t of this.locations) e += "\n\n" + Ie(this.source, t);
		return e;
	}
	toJSON() {
		let e = { message: this.message };
		return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
	}
};
function Be(e) {
	return e === void 0 || e.length === 0 ? void 0 : e;
}
//#endregion
//#region node_modules/graphql/error/syntaxError.mjs
function j(e, t, n) {
	return new ze(`Syntax Error: ${n}`, {
		source: e,
		positions: [t]
	});
}
//#endregion
//#region node_modules/graphql/language/ast.mjs
var Ve = class {
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
}, He = class {
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
}, Ue = {
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
}, We = new Set(Object.keys(Ue));
function Ge(e) {
	let t = e?.kind;
	return typeof t == "string" && We.has(t);
}
var Ke;
(function(e) {
	e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Ke || (Ke = {}));
//#endregion
//#region node_modules/graphql/language/directiveLocation.mjs
var qe;
(function(e) {
	e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", e.DIRECTIVE_DEFINITION = "DIRECTIVE_DEFINITION";
})(qe || (qe = {}));
//#endregion
//#region node_modules/graphql/language/kinds.mjs
var M;
(function(e) {
	e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.DIRECTIVE_EXTENSION = "DirectiveExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", e.TYPE_COORDINATE = "TypeCoordinate", e.MEMBER_COORDINATE = "MemberCoordinate", e.ARGUMENT_COORDINATE = "ArgumentCoordinate", e.DIRECTIVE_COORDINATE = "DirectiveCoordinate", e.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
})(M || (M = {}));
//#endregion
//#region node_modules/graphql/language/characterClasses.mjs
function Je(e) {
	return e === 9 || e === 32;
}
function Ye(e) {
	return e >= 48 && e <= 57;
}
function Xe(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ze(e) {
	return Xe(e) || e === 95;
}
function Qe(e) {
	return Xe(e) || Ye(e) || e === 95;
}
//#endregion
//#region node_modules/graphql/language/blockString.mjs
function $e(e) {
	let t = 2 ** 53 - 1, n = null, r = -1;
	for (let i = 0; i < e.length; ++i) {
		let a = e[i], o = et(a);
		o !== a.length && (n = n ?? i, r = i, i !== 0 && o < t && (t = o));
	}
	return e.map((e, n) => n === 0 ? e : e.slice(t)).slice(n ?? 0, r + 1);
}
function et(e) {
	let t = 0;
	for (; t < e.length && Je(e.charCodeAt(t));) ++t;
	return t;
}
function tt(e, t) {
	let n = e.replace(/"""/g, "\\\"\"\""), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((e) => e.length === 0 || Je(e.charCodeAt(0))), o = n.endsWith("\\\"\"\""), s = e.endsWith("\"") && !o, c = e.endsWith("\\"), l = s || c, u = !(t != null && t.minimize) && (!i || e.length > 70 || l || a || o), d = "", f = i && Je(e.charCodeAt(0));
	return (u && !f || a) && (d += "\n"), d += n, (u || l) && (d += "\n"), "\"\"\"" + d + "\"\"\"";
}
//#endregion
//#region node_modules/graphql/language/tokenKind.mjs
var N;
(function(e) {
	e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.DOT = ".", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(N || (N = {}));
//#endregion
//#region node_modules/graphql/language/lexer.mjs
var nt = class {
	constructor(e) {
		let t = new He(N.SOF, 0, 0, 0, 0);
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
		if (e.kind !== N.EOF) do
			if (e.next) e = e.next;
			else {
				let t = ct(this, e.end);
				e.next = t, t.prev = e, e = t;
			}
		while (e.kind === N.COMMENT);
		return e;
	}
};
function rt(e) {
	return e === N.BANG || e === N.DOLLAR || e === N.AMP || e === N.PAREN_L || e === N.PAREN_R || e === N.DOT || e === N.SPREAD || e === N.COLON || e === N.EQUALS || e === N.AT || e === N.BRACKET_L || e === N.BRACKET_R || e === N.BRACE_L || e === N.PIPE || e === N.BRACE_R;
}
function it(e) {
	return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function at(e, t) {
	return ot(e.charCodeAt(t)) && st(e.charCodeAt(t + 1));
}
function ot(e) {
	return e >= 55296 && e <= 56319;
}
function st(e) {
	return e >= 56320 && e <= 57343;
}
function P(e, t) {
	let n = e.source.body.codePointAt(t);
	if (n === void 0) return N.EOF;
	if (n >= 32 && n <= 126) {
		let e = String.fromCodePoint(n);
		return e === "\"" ? "'\"'" : `"${e}"`;
	}
	return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function F(e, t, n, r, i) {
	let a = e.line;
	return new He(t, n, r, a, 1 + n - e.lineStart, i);
}
function ct(e, t) {
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
			case 35: return lt(e, i);
			case 33: return F(e, N.BANG, i, i + 1);
			case 36: return F(e, N.DOLLAR, i, i + 1);
			case 38: return F(e, N.AMP, i, i + 1);
			case 40: return F(e, N.PAREN_L, i, i + 1);
			case 41: return F(e, N.PAREN_R, i, i + 1);
			case 46:
				if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return F(e, N.SPREAD, i, i + 3);
				break;
			case 58: return F(e, N.COLON, i, i + 1);
			case 61: return F(e, N.EQUALS, i, i + 1);
			case 64: return F(e, N.AT, i, i + 1);
			case 91: return F(e, N.BRACKET_L, i, i + 1);
			case 93: return F(e, N.BRACKET_R, i, i + 1);
			case 123: return F(e, N.BRACE_L, i, i + 1);
			case 124: return F(e, N.PIPE, i, i + 1);
			case 125: return F(e, N.BRACE_R, i, i + 1);
			case 34: return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? vt(e, i) : ft(e, i);
		}
		if (Ye(t) || t === 45) return ut(e, i, t);
		if (Ze(t)) return yt(e, i);
		throw j(e.source, i, t === 39 ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : it(t) || at(n, i) ? `Unexpected character: ${P(e, i)}.` : `Invalid character: ${P(e, i)}.`);
	}
	return F(e, N.EOF, r, r);
}
function lt(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r;) {
		let e = n.charCodeAt(i);
		if (e === 10 || e === 13) break;
		if (it(e)) ++i;
		else if (at(n, i)) i += 2;
		else break;
	}
	return F(e, N.COMMENT, t, i, n.slice(t + 1, i));
}
function ut(e, t, n) {
	let r = e.source.body, i = t, a = n, o = !1;
	if (a === 45 && (a = r.charCodeAt(++i)), a === 48) {
		if (a = r.charCodeAt(++i), Ye(a)) throw j(e.source, i, `Invalid number, unexpected digit after 0: ${P(e, i)}.`);
	} else i = dt(e, i, a), a = r.charCodeAt(i);
	if (a === 46 && (o = !0, a = r.charCodeAt(++i), i = dt(e, i, a), a = r.charCodeAt(i)), (a === 69 || a === 101) && (o = !0, a = r.charCodeAt(++i), (a === 43 || a === 45) && (a = r.charCodeAt(++i)), i = dt(e, i, a), a = r.charCodeAt(i)), a === 46 || Ze(a)) throw j(e.source, i, `Invalid number, expected digit but got: ${P(e, i)}.`);
	return F(e, o ? N.FLOAT : N.INT, t, i, r.slice(t, i));
}
function dt(e, t, n) {
	if (!Ye(n)) throw j(e.source, t, `Invalid number, expected digit but got: ${P(e, t)}.`);
	let r = e.source.body, i = t + 1;
	for (; Ye(r.charCodeAt(i));) ++i;
	return i;
}
function ft(e, t) {
	let n = e.source.body, r = n.length, i = t + 1, a = i, o = "";
	for (; i < r;) {
		let r = n.charCodeAt(i);
		if (r === 34) return o += n.slice(a, i), F(e, N.STRING, t, i + 1, o);
		if (r === 92) {
			o += n.slice(a, i);
			let t = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? pt(e, i) : mt(e, i) : _t(e, i);
			o += t.value, i += t.size, a = i;
			continue;
		}
		if (r === 10 || r === 13) break;
		if (it(r)) ++i;
		else if (at(n, i)) i += 2;
		else throw j(e.source, i, `Invalid character within String: ${P(e, i)}.`);
	}
	throw j(e.source, i, "Unterminated string.");
}
function pt(e, t) {
	let n = e.source.body, r = 0, i = 3;
	for (; i < 12;) {
		let e = n.charCodeAt(t + i++);
		if (e === 125) {
			if (i < 5 || !it(r)) break;
			return {
				value: String.fromCodePoint(r),
				size: i
			};
		}
		if (r = r << 4 | gt(e), r < 0) break;
	}
	throw j(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
}
function mt(e, t) {
	let n = e.source.body, r = ht(n, t + 2);
	if (it(r)) return {
		value: String.fromCodePoint(r),
		size: 6
	};
	if (ot(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
		let e = ht(n, t + 8);
		if (st(e)) return {
			value: String.fromCodePoint(r, e),
			size: 12
		};
	}
	throw j(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function ht(e, t) {
	return gt(e.charCodeAt(t)) << 12 | gt(e.charCodeAt(t + 1)) << 8 | gt(e.charCodeAt(t + 2)) << 4 | gt(e.charCodeAt(t + 3));
}
function gt(e) {
	return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function _t(e, t) {
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
	throw j(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function vt(e, t) {
	let n = e.source.body, r = n.length, i = e.lineStart, a = t + 3, o = a, s = "", c = [];
	for (; a < r;) {
		let r = n.charCodeAt(a);
		if (r === 34 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34) {
			s += n.slice(o, a), c.push(s);
			let r = F(e, N.BLOCK_STRING, t, a + 3, $e(c).join("\n"));
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
		if (it(r)) ++a;
		else if (at(n, a)) a += 2;
		else throw j(e.source, a, `Invalid character within String: ${P(e, a)}.`);
	}
	throw j(e.source, a, "Unterminated string.");
}
function yt(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r && Qe(n.charCodeAt(i));) ++i;
	return F(e, N.NAME, t, i, n.slice(t, i));
}
//#endregion
//#region node_modules/graphql/jsutils/inspect.mjs
var bt = 10, xt = 2;
function St(e) {
	return Ct(e, []);
}
function Ct(e, t) {
	switch (typeof e) {
		case "string": return JSON.stringify(e);
		case "function": return e.name ? `[function ${e.name}]` : "[function]";
		case "object": return wt(e, t);
		default: return String(e);
	}
}
function wt(e, t) {
	if (e === null) return "null";
	if (t.includes(e)) return "[Circular]";
	let n = [...t, e];
	if (Tt(e)) {
		let t = e.toJSON();
		if (t !== e) return typeof t == "string" ? t : Ct(t, n);
	} else if (Array.isArray(e)) return Dt(e, n);
	return Et(e, n);
}
function Tt(e) {
	return typeof e.toJSON == "function";
}
function Et(e, t) {
	let n = Object.entries(e);
	return n.length === 0 ? "{}" : t.length > xt ? "[" + Ot(e) + "]" : "{ " + n.map(([e, n]) => e + ": " + Ct(n, t)).join(", ") + " }";
}
function Dt(e, t) {
	if (e.length === 0) return "[]";
	if (t.length > xt) return "[Array]";
	let n = Math.min(bt, e.length), r = e.length - n, i = [];
	for (let r = 0; r < n; ++r) i.push(Ct(e[r], t));
	return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function Ot(e) {
	let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
	if (t === "Object" && typeof e.constructor == "function") {
		let t = e.constructor.name;
		if (typeof t == "string" && t !== "") return t;
	}
	return t;
}
var kt = globalThis.process ? function(e, t) {
	return e instanceof t;
} : function(e, t) {
	if (e instanceof t) return !0;
	if (typeof e == "object" && e) {
		let n = t.prototype[Symbol.toStringTag];
		if (n === (Symbol.toStringTag in e ? e[Symbol.toStringTag] : e.constructor?.name)) {
			let t = St(e);
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
}, At = class {
	constructor(e, t = "GraphQL request", n = {
		line: 1,
		column: 1
	}) {
		typeof e == "string" || Ae(!1, `Body must be a string. Received: ${St(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || Ae(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Ae(!1, "column in locationOffset is 1-indexed and must be positive.");
	}
	get [Symbol.toStringTag]() {
		return "Source";
	}
};
function jt(e) {
	return kt(e, At);
}
//#endregion
//#region node_modules/graphql/language/parser.mjs
function Mt(e, t) {
	let n = new Nt(e, t), r = n.parseDocument();
	return Object.defineProperty(r, "tokenCount", {
		enumerable: !1,
		value: n.tokenCount
	}), r;
}
var Nt = class {
	constructor(e, t = {}) {
		let { lexer: n, ...r } = t;
		if (n) this._lexer = n;
		else {
			let t = jt(e) ? e : new At(e);
			this._lexer = new nt(t);
		}
		this._options = r, this._tokenCounter = 0;
	}
	get tokenCount() {
		return this._tokenCounter;
	}
	parseName() {
		let e = this.expectToken(N.NAME);
		return this.node(e, {
			kind: M.NAME,
			value: e.value
		});
	}
	parseDocument() {
		return this.node(this._lexer.token, {
			kind: M.DOCUMENT,
			definitions: this.many(N.SOF, this.parseDefinition, N.EOF)
		});
	}
	parseDefinition() {
		if (this.peek(N.BRACE_L)) return this.parseOperationDefinition();
		let e = this.peekDescription(), t = e ? this._lexer.lookahead() : this._lexer.token;
		if (e && t.kind === N.BRACE_L) throw j(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are not supported on shorthand queries.");
		if (t.kind === N.NAME) {
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
			if (e) throw j(this._lexer.source, this._lexer.token.start, "Unexpected description, only GraphQL definitions support descriptions.");
			switch (t.value) {
				case "extend": return this.parseTypeSystemExtension();
			}
		}
		throw this.unexpected(t);
	}
	parseOperationDefinition() {
		let e = this._lexer.token;
		if (this.peek(N.BRACE_L)) return this.node(e, {
			kind: M.OPERATION_DEFINITION,
			operation: Ke.QUERY,
			description: void 0,
			name: void 0,
			variableDefinitions: [],
			directives: [],
			selectionSet: this.parseSelectionSet()
		});
		let t = this.parseDescription(), n = this.parseOperationType(), r;
		return this.peek(N.NAME) && (r = this.parseName()), this.node(e, {
			kind: M.OPERATION_DEFINITION,
			operation: n,
			description: t,
			name: r,
			variableDefinitions: this.parseVariableDefinitions(),
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		});
	}
	parseOperationType() {
		let e = this.expectToken(N.NAME);
		switch (e.value) {
			case "query": return Ke.QUERY;
			case "mutation": return Ke.MUTATION;
			case "subscription": return Ke.SUBSCRIPTION;
		}
		throw this.unexpected(e);
	}
	parseVariableDefinitions() {
		return this.optionalMany(N.PAREN_L, this.parseVariableDefinition, N.PAREN_R);
	}
	parseVariableDefinition() {
		return this.node(this._lexer.token, {
			kind: M.VARIABLE_DEFINITION,
			description: this.parseDescription(),
			variable: this.parseVariable(),
			type: (this.expectToken(N.COLON), this.parseTypeReference()),
			defaultValue: this.expectOptionalToken(N.EQUALS) ? this.parseConstValueLiteral() : void 0,
			directives: this.parseConstDirectives()
		});
	}
	parseVariable() {
		let e = this._lexer.token;
		return this.expectToken(N.DOLLAR), this.node(e, {
			kind: M.VARIABLE,
			name: this.parseName()
		});
	}
	parseSelectionSet() {
		return this.node(this._lexer.token, {
			kind: M.SELECTION_SET,
			selections: this.many(N.BRACE_L, this.parseSelection, N.BRACE_R)
		});
	}
	parseSelection() {
		return this.peek(N.SPREAD) ? this.parseFragment() : this.parseField();
	}
	parseField() {
		let e = this._lexer.token, t = this.parseName(), n, r;
		return this.expectOptionalToken(N.COLON) ? (n = t, r = this.parseName()) : r = t, this.node(e, {
			kind: M.FIELD,
			alias: n,
			name: r,
			arguments: this.parseArguments(!1),
			directives: this.parseDirectives(!1),
			selectionSet: this.peek(N.BRACE_L) ? this.parseSelectionSet() : void 0
		});
	}
	parseArguments(e) {
		let t = e ? this.parseConstArgument : this.parseArgument;
		return this.optionalMany(N.PAREN_L, t, N.PAREN_R);
	}
	parseArgument(e = !1) {
		let t = this._lexer.token, n = this.parseName();
		return this.expectToken(N.COLON), this.node(t, {
			kind: M.ARGUMENT,
			name: n,
			value: this.parseValueLiteral(e)
		});
	}
	parseConstArgument() {
		return this.parseArgument(!0);
	}
	parseFragment() {
		let e = this._lexer.token;
		this.expectToken(N.SPREAD);
		let t = this.expectOptionalKeyword("on");
		return !t && this.peek(N.NAME) ? this.node(e, {
			kind: M.FRAGMENT_SPREAD,
			name: this.parseFragmentName(),
			directives: this.parseDirectives(!1)
		}) : this.node(e, {
			kind: M.INLINE_FRAGMENT,
			typeCondition: t ? this.parseNamedType() : void 0,
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		});
	}
	parseFragmentDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, {
			kind: M.FRAGMENT_DEFINITION,
			description: t,
			name: this.parseFragmentName(),
			variableDefinitions: this.parseVariableDefinitions(),
			typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		}) : this.node(e, {
			kind: M.FRAGMENT_DEFINITION,
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
			case N.BRACKET_L: return this.parseList(e);
			case N.BRACE_L: return this.parseObject(e);
			case N.INT: return this.advanceLexer(), this.node(t, {
				kind: M.INT,
				value: t.value
			});
			case N.FLOAT: return this.advanceLexer(), this.node(t, {
				kind: M.FLOAT,
				value: t.value
			});
			case N.STRING:
			case N.BLOCK_STRING: return this.parseStringLiteral();
			case N.NAME: switch (this.advanceLexer(), t.value) {
				case "true": return this.node(t, {
					kind: M.BOOLEAN,
					value: !0
				});
				case "false": return this.node(t, {
					kind: M.BOOLEAN,
					value: !1
				});
				case "null": return this.node(t, { kind: M.NULL });
				default: return this.node(t, {
					kind: M.ENUM,
					value: t.value
				});
			}
			case N.DOLLAR:
				if (e) if (this.expectToken(N.DOLLAR), this._lexer.token.kind === N.NAME) {
					let e = this._lexer.token.value;
					throw j(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`);
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
			kind: M.STRING,
			value: e.value,
			block: e.kind === N.BLOCK_STRING
		});
	}
	parseList(e) {
		return this.node(this._lexer.token, {
			kind: M.LIST,
			values: this.any(N.BRACKET_L, () => this.parseValueLiteral(e), N.BRACKET_R)
		});
	}
	parseObject(e) {
		return this.node(this._lexer.token, {
			kind: M.OBJECT,
			fields: this.any(N.BRACE_L, () => this.parseObjectField(e), N.BRACE_R)
		});
	}
	parseObjectField(e) {
		let t = this._lexer.token, n = this.parseName();
		return this.expectToken(N.COLON), this.node(t, {
			kind: M.OBJECT_FIELD,
			name: n,
			value: this.parseValueLiteral(e)
		});
	}
	parseDirectives(e) {
		let t = [];
		for (; this.peek(N.AT);) t.push(this.parseDirective(e));
		return t;
	}
	parseConstDirectives() {
		return this.parseDirectives(!0);
	}
	parseDirective(e) {
		let t = this._lexer.token;
		return this.expectToken(N.AT), this.node(t, {
			kind: M.DIRECTIVE,
			name: this.parseName(),
			arguments: this.parseArguments(e)
		});
	}
	parseTypeReference() {
		let e = this._lexer.token, t;
		if (this.expectOptionalToken(N.BRACKET_L)) {
			let n = this.parseTypeReference();
			this.expectToken(N.BRACKET_R), t = this.node(e, {
				kind: M.LIST_TYPE,
				type: n
			});
		} else t = this.parseNamedType();
		return this.expectOptionalToken(N.BANG) ? this.node(e, {
			kind: M.NON_NULL_TYPE,
			type: t
		}) : t;
	}
	parseNamedType() {
		return this.node(this._lexer.token, {
			kind: M.NAMED_TYPE,
			name: this.parseName()
		});
	}
	peekDescription() {
		return this.peek(N.STRING) || this.peek(N.BLOCK_STRING);
	}
	parseDescription() {
		if (this.peekDescription()) return this.parseStringLiteral();
	}
	parseSchemaDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("schema");
		let n = this.parseConstDirectives(), r = this.many(N.BRACE_L, this.parseOperationTypeDefinition, N.BRACE_R);
		return this.node(e, {
			kind: M.SCHEMA_DEFINITION,
			description: t,
			directives: n,
			operationTypes: r
		});
	}
	parseOperationTypeDefinition() {
		let e = this._lexer.token, t = this.parseOperationType();
		this.expectToken(N.COLON);
		let n = this.parseNamedType();
		return this.node(e, {
			kind: M.OPERATION_TYPE_DEFINITION,
			operation: t,
			type: n
		});
	}
	parseScalarTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("scalar");
		let n = this.parseName(), r = this.parseConstDirectives();
		return this.node(e, {
			kind: M.SCALAR_TYPE_DEFINITION,
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
			kind: M.OBJECT_TYPE_DEFINITION,
			description: t,
			name: n,
			interfaces: r,
			directives: i,
			fields: a
		});
	}
	parseImplementsInterfaces() {
		return this.expectOptionalKeyword("implements") ? this.delimitedMany(N.AMP, this.parseNamedType) : [];
	}
	parseFieldsDefinition() {
		return this.optionalMany(N.BRACE_L, this.parseFieldDefinition, N.BRACE_R);
	}
	parseFieldDefinition() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseName(), r = this.parseArgumentDefs();
		this.expectToken(N.COLON);
		let i = this.parseTypeReference(), a = this.parseConstDirectives();
		return this.node(e, {
			kind: M.FIELD_DEFINITION,
			description: t,
			name: n,
			arguments: r,
			type: i,
			directives: a
		});
	}
	parseArgumentDefs() {
		return this.optionalMany(N.PAREN_L, this.parseInputValueDef, N.PAREN_R);
	}
	parseInputValueDef() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseName();
		this.expectToken(N.COLON);
		let r = this.parseTypeReference(), i;
		this.expectOptionalToken(N.EQUALS) && (i = this.parseConstValueLiteral());
		let a = this.parseConstDirectives();
		return this.node(e, {
			kind: M.INPUT_VALUE_DEFINITION,
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
			kind: M.INTERFACE_TYPE_DEFINITION,
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
			kind: M.UNION_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			types: i
		});
	}
	parseUnionMemberTypes() {
		return this.expectOptionalToken(N.EQUALS) ? this.delimitedMany(N.PIPE, this.parseNamedType) : [];
	}
	parseEnumTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("enum");
		let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
		return this.node(e, {
			kind: M.ENUM_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			values: i
		});
	}
	parseEnumValuesDefinition() {
		return this.optionalMany(N.BRACE_L, this.parseEnumValueDefinition, N.BRACE_R);
	}
	parseEnumValueDefinition() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseEnumValueName(), r = this.parseConstDirectives();
		return this.node(e, {
			kind: M.ENUM_VALUE_DEFINITION,
			description: t,
			name: n,
			directives: r
		});
	}
	parseEnumValueName() {
		if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw j(this._lexer.source, this._lexer.token.start, `${Pt(this._lexer.token)} is reserved and cannot be used for an enum value.`);
		return this.parseName();
	}
	parseInputObjectTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("input");
		let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
		return this.node(e, {
			kind: M.INPUT_OBJECT_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			fields: i
		});
	}
	parseInputFieldsDefinition() {
		return this.optionalMany(N.BRACE_L, this.parseInputValueDef, N.BRACE_R);
	}
	parseTypeSystemExtension() {
		let e = this._lexer.lookahead();
		if (e.kind === N.NAME) switch (e.value) {
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
		let t = this.parseConstDirectives(), n = this.optionalMany(N.BRACE_L, this.parseOperationTypeDefinition, N.BRACE_R);
		if (t.length === 0 && n.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: M.SCHEMA_EXTENSION,
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
			kind: M.SCALAR_TYPE_EXTENSION,
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
			kind: M.OBJECT_TYPE_EXTENSION,
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
			kind: M.INTERFACE_TYPE_EXTENSION,
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
			kind: M.UNION_TYPE_EXTENSION,
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
			kind: M.ENUM_TYPE_EXTENSION,
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
			kind: M.INPUT_OBJECT_TYPE_EXTENSION,
			name: t,
			directives: n,
			fields: r
		});
	}
	parseDirectiveDefinitionExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("directive"), this.expectToken(N.AT);
		let t = this.parseName(), n = this.parseConstDirectives();
		if (n.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: M.DIRECTIVE_EXTENSION,
			name: t,
			directives: n
		});
	}
	parseDirectiveDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("directive"), this.expectToken(N.AT);
		let n = this.parseName(), r = this.parseArgumentDefs(), i = this._options.experimentalDirectivesOnDirectiveDefinitions ? this.parseConstDirectives() : [], a = this.expectOptionalKeyword("repeatable");
		this.expectKeyword("on");
		let o = this.parseDirectiveLocations();
		return this.node(e, {
			kind: M.DIRECTIVE_DEFINITION,
			description: t,
			name: n,
			arguments: r,
			directives: i,
			repeatable: a,
			locations: o
		});
	}
	parseDirectiveLocations() {
		return this.delimitedMany(N.PIPE, this.parseDirectiveLocation);
	}
	parseDirectiveLocation() {
		let e = this._lexer.token, t = this.parseName();
		if (Object.prototype.hasOwnProperty.call(qe, t.value)) return t;
		throw this.unexpected(e);
	}
	parseSchemaCoordinate() {
		let e = this._lexer.token, t = this.expectOptionalToken(N.AT), n = this.parseName(), r;
		!t && this.expectOptionalToken(N.DOT) && (r = this.parseName());
		let i;
		return (t || r) && this.expectOptionalToken(N.PAREN_L) && (i = this.parseName(), this.expectToken(N.COLON), this.expectToken(N.PAREN_R)), t ? i ? this.node(e, {
			kind: M.DIRECTIVE_ARGUMENT_COORDINATE,
			name: n,
			argumentName: i
		}) : this.node(e, {
			kind: M.DIRECTIVE_COORDINATE,
			name: n
		}) : r ? i ? this.node(e, {
			kind: M.ARGUMENT_COORDINATE,
			name: n,
			fieldName: r,
			argumentName: i
		}) : this.node(e, {
			kind: M.MEMBER_COORDINATE,
			name: n,
			memberName: r
		}) : this.node(e, {
			kind: M.TYPE_COORDINATE,
			name: n
		});
	}
	node(e, t) {
		return this._options.noLocation !== !0 && (t.loc = new Ve(e, this._lexer.lastToken, this._lexer.source)), t;
	}
	peek(e) {
		return this._lexer.token.kind === e;
	}
	expectToken(e) {
		let t = this._lexer.token;
		if (t.kind === e) return this.advanceLexer(), t;
		throw j(this._lexer.source, t.start, `Expected ${Ft(e)}, found ${Pt(t)}.`);
	}
	expectOptionalToken(e) {
		return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
	}
	expectKeyword(e) {
		let t = this._lexer.token;
		if (t.kind === N.NAME && t.value === e) this.advanceLexer();
		else throw j(this._lexer.source, t.start, `Expected "${e}", found ${Pt(t)}.`);
	}
	expectOptionalKeyword(e) {
		let t = this._lexer.token;
		return t.kind === N.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
	}
	unexpected(e) {
		let t = e ?? this._lexer.token;
		return j(this._lexer.source, t.start, `Unexpected ${Pt(t)}.`);
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
		if (t.kind !== N.EOF && (++this._tokenCounter, e !== void 0 && this._tokenCounter > e)) throw j(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`);
	}
};
function Pt(e) {
	let t = e.value;
	return Ft(e.kind) + (t == null ? "" : ` "${t}"`);
}
function Ft(e) {
	return rt(e) ? `"${e}"` : e;
}
//#endregion
//#region node_modules/graphql/language/visitor.mjs
var It = Object.freeze({});
function Lt(e, t, n = Ue) {
	let r = /* @__PURE__ */ new Map();
	for (let e of Object.values(M)) r.set(e, Rt(t, e));
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
			if (Ge(l) || Ae(!1, `Invalid AST Node: ${St(l)}.`), h = (e ? r.get(l.kind)?.leave : r.get(l.kind)?.enter)?.call(t, l, u, d, f, p), h === It) break;
			if (h === !1) {
				if (!e) {
					f.pop();
					continue;
				}
			} else if (h !== void 0 && (c.push([u, h]), !e)) if (Ge(h)) l = h;
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
function Rt(e, t) {
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
//#region node_modules/@apollo/client/utilities/graphql/directives.js
function zt(e, t) {
	var n = e.directives;
	return !n || !n.length ? !0 : Ut(n).every(function(e) {
		var n = e.directive, r = e.ifArgument, i = !1;
		return r.value.kind === "Variable" ? (i = t && t[r.value.name.value], A(i !== void 0, 105, n.name.value)) : i = r.value.value, n.name.value === "skip" ? !i : i;
	});
}
function Bt(e, t, n) {
	var r = new Set(e), i = r.size;
	return Lt(t, { Directive: function(e) {
		if (r.delete(e.name.value) && (!n || !r.size)) return It;
	} }), n ? !r.size : r.size < i;
}
function Vt(e) {
	return e && Bt(["client", "export"], e, !0);
}
function Ht(e) {
	var t = e.name.value;
	return t === "skip" || t === "include";
}
function Ut(e) {
	var t = [];
	return e && e.length && e.forEach(function(e) {
		if (Ht(e)) {
			var n = e.arguments, r = e.name.value;
			A(n && n.length === 1, 106, r);
			var i = n[0];
			A(i.name && i.name.value === "if", 107, r);
			var a = i.value;
			A(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 108, r), t.push({
				directive: e,
				ifArgument: i
			});
		}
	}), t;
}
function Wt(e) {
	var t = e.directives?.find(function(e) {
		return e.name.value === "unmask";
	});
	if (!t) return "mask";
	var n = t.arguments?.find(function(e) {
		return e.name.value === "mode";
	});
	return globalThis.__DEV__ !== !1 && n && (n.value.kind === M.VARIABLE ? globalThis.__DEV__ !== !1 && A.warn(109) : n.value.kind === M.STRING ? n.value.value !== "migrate" && globalThis.__DEV__ !== !1 && A.warn(111, n.value.value) : globalThis.__DEV__ !== !1 && A.warn(110)), n && "value" in n.value && n.value.value === "migrate" ? "migrate" : "unmask";
}
//#endregion
//#region node_modules/@wry/trie/lib/index.js
var Gt = () => Object.create(null), { forEach: Kt, slice: qt } = Array.prototype, { hasOwnProperty: Jt } = Object.prototype, Yt = class e {
	constructor(e = !0, t = Gt) {
		this.weakness = e, this.makeData = t;
	}
	lookup() {
		return this.lookupArray(arguments);
	}
	lookupArray(e) {
		let t = this;
		return Kt.call(e, (e) => t = t.getChildTrie(e)), Jt.call(t, "data") ? t.data : t.data = this.makeData(qt.call(e));
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
			i && (t = i.removeArray(qt.call(e, 1)), !i.data && !i.weak && !(i.strong && i.strong.size) && r.delete(n));
		} else t = this.data, delete this.data;
		return t;
	}
	getChildTrie(t) {
		let n = this.mapFor(t, !0), r = n.get(t);
		return r || n.set(t, r = new e(this.weakness, this.makeData)), r;
	}
	mapFor(e, t) {
		return this.weakness && Xt(e) ? this.weak || (t ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (t ? this.strong = /* @__PURE__ */ new Map() : void 0);
	}
};
function Xt(e) {
	switch (typeof e) {
		case "object": if (e === null) break;
		case "function": return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/canUse.js
var Zt = k(function() {
	return navigator.product;
}) == "ReactNative", Qt = typeof WeakMap == "function" && !(Zt && !global.HermesInternal), $t = typeof WeakSet == "function", en = typeof Symbol == "function" && typeof Symbol.for == "function", tn = en && Symbol.asyncIterator, nn = typeof k(function() {
	return window.document.createElement;
}) == "function", rn = k(function() {
	return navigator.userAgent.indexOf("jsdom") >= 0;
}) || !1, an = (nn || Zt) && !rn;
//#endregion
//#region node_modules/@apollo/client/utilities/common/objects.js
function on(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/fragments.js
function sn(e, t) {
	var n = t, r = [];
	return e.definitions.forEach(function(e) {
		if (e.kind === "OperationDefinition") throw we(112, e.operation, e.name ? ` named '${e.name.value}'` : "");
		e.kind === "FragmentDefinition" && r.push(e);
	}), n === void 0 && (A(r.length === 1, 113, r.length), n = r[0].name.value), E(E({}, e), { definitions: D([{
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
function cn(e) {
	e === void 0 && (e = []);
	var t = {};
	return e.forEach(function(e) {
		t[e.name.value] = e;
	}), t;
}
function ln(e, t) {
	switch (e.kind) {
		case "InlineFragment": return e;
		case "FragmentSpread":
			var n = e.name.value;
			if (typeof t == "function") return t(n);
			var r = t && t[n];
			return A(r, 114, n), r || null;
		default: return null;
	}
}
function un(e) {
	var t = !0;
	return Lt(e, { FragmentSpread: function(e) {
		if (t = !!e.directives && e.directives.some(function(e) {
			return e.name.value === "unmask";
		}), !t) return It;
	} }), t;
}
//#endregion
//#region node_modules/@wry/caches/lib/strong.js
function dn() {}
var fn = class {
	constructor(e = Infinity, t = dn) {
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
function pn() {}
var mn = pn, hn = typeof WeakRef < "u" ? WeakRef : function(e) {
	return { deref: () => e };
}, gn = typeof WeakMap < "u" ? WeakMap : Map, _n = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
	return {
		register: pn,
		unregister: pn
	};
}, vn = 10024, yn = class {
	constructor(e = Infinity, t = mn) {
		this.max = e, this.dispose = t, this.map = new gn(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
			let e = this.unfinalizedNodes.values();
			for (let t = 0; t < vn; t++) {
				let t = e.next().value;
				if (!t) break;
				this.unfinalizedNodes.delete(t);
				let n = t.key;
				delete t.key, t.keyRef = new hn(n), this.registry.register(n, t, t);
			}
			this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
		}, this.registry = new _n(this.deleteNode.bind(this));
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
}, bn = /* @__PURE__ */ new WeakSet();
function xn(e) {
	e.size <= (e.max || -1) || bn.has(e) || (bn.add(e), setTimeout(function() {
		e.clean(), bn.delete(e);
	}, 100));
}
var Sn = function(e, t) {
	var n = new yn(e, t);
	return n.set = function(e, t) {
		var n = yn.prototype.set.call(this, e, t);
		return xn(this), n;
	}, n;
}, Cn = function(e, t) {
	var n = new fn(e, t);
	return n.set = function(e, t) {
		var n = fn.prototype.set.call(this, e, t);
		return xn(this), n;
	}, n;
}, wn = E({}, ye[Symbol.for("apollo.cacheSize")]), I = {};
function Tn(e, t) {
	I[e] = t;
}
var En = globalThis.__DEV__ === !1 ? void 0 : An, Dn = globalThis.__DEV__ === !1 ? void 0 : Mn, On = globalThis.__DEV__ === !1 ? void 0 : jn;
function kn() {
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
		return [t, wn[t] || n];
	}));
}
function An() {
	var e;
	if (globalThis.__DEV__ === !1) throw Error("only supported in development mode");
	return {
		limits: kn(),
		sizes: E({
			print: I.print?.call(I),
			parser: I.parser?.call(I),
			canonicalStringify: I.canonicalStringify?.call(I),
			links: Ln(this.link),
			queryManager: {
				getDocumentInfo: this.queryManager.transformCache.size,
				documentTransforms: Fn(this.queryManager.documentTransform)
			}
		}, (e = this.cache).getMemoryInternals?.call(e))
	};
}
function jn() {
	return { cache: { fragmentQueryDocuments: L(this.getFragmentDoc) } };
}
function Mn() {
	var e = this.config.fragments;
	return E(E({}, jn.apply(this)), {
		addTypenameDocumentTransform: Fn(this.addTypenameTransform),
		inMemoryCache: {
			executeSelectionSet: L(this.storeReader.executeSelectionSet),
			executeSubSelectedArray: L(this.storeReader.executeSubSelectedArray),
			maybeBroadcastWatch: L(this.maybeBroadcastWatch)
		},
		fragmentRegistry: {
			findFragmentSpreads: L(e?.findFragmentSpreads),
			lookup: L(e?.lookup),
			transform: L(e?.transform)
		}
	});
}
function Nn(e) {
	return !!e && "dirtyKey" in e;
}
function L(e) {
	return Nn(e) ? e.size : void 0;
}
function Pn(e) {
	return e != null;
}
function Fn(e) {
	return In(e).map(function(e) {
		return { cache: e };
	});
}
function In(e) {
	return e ? D(D([L(e?.performWork)], In(e?.left), !0), In(e?.right), !0).filter(Pn) : [];
}
function Ln(e) {
	return e ? D(D([(e?.getMemoryInternals)?.call(e)], Ln(e?.left), !0), Ln(e?.right), !0).filter(Pn) : [];
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/canonicalStringify.js
var Rn = Object.assign(function(e) {
	return JSON.stringify(e, Bn);
}, { reset: function() {
	zn = new Cn(wn.canonicalStringify || 1e3);
} });
globalThis.__DEV__ !== !1 && Tn("canonicalStringify", function() {
	return zn.size;
});
var zn;
Rn.reset();
function Bn(e, t) {
	if (t && typeof t == "object") {
		var n = Object.getPrototypeOf(t);
		if (n === Object.prototype || n === null) {
			var r = Object.keys(t);
			if (r.every(Vn)) return t;
			var i = JSON.stringify(r), a = zn.get(i);
			if (!a) {
				r.sort();
				var o = JSON.stringify(r);
				a = zn.get(o) || r, zn.set(i, a), zn.set(o, a);
			}
			var s = Object.create(n);
			return a.forEach(function(e) {
				s[e] = t[e];
			}), s;
		}
	}
	return t;
}
function Vn(e, t, n) {
	return t === 0 || n[t - 1] <= e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/storeUtils.js
function Hn(e) {
	return { __ref: String(e) };
}
function Un(e) {
	return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function Wn(e) {
	return on(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function Gn(e) {
	return e.kind === "StringValue";
}
function Kn(e) {
	return e.kind === "BooleanValue";
}
function qn(e) {
	return e.kind === "IntValue";
}
function Jn(e) {
	return e.kind === "FloatValue";
}
function Yn(e) {
	return e.kind === "Variable";
}
function Xn(e) {
	return e.kind === "ObjectValue";
}
function Zn(e) {
	return e.kind === "ListValue";
}
function Qn(e) {
	return e.kind === "EnumValue";
}
function $n(e) {
	return e.kind === "NullValue";
}
function er(e, t, n, r) {
	if (qn(n) || Jn(n)) e[t.value] = Number(n.value);
	else if (Kn(n) || Gn(n)) e[t.value] = n.value;
	else if (Xn(n)) {
		var i = {};
		n.fields.map(function(e) {
			return er(i, e.name, e.value, r);
		}), e[t.value] = i;
	} else if (Yn(n)) {
		var a = (r || {})[n.name.value];
		e[t.value] = a;
	} else if (Zn(n)) e[t.value] = n.values.map(function(e) {
		var n = {};
		return er(n, t, e, r), n[t.value];
	});
	else if (Qn(n)) e[t.value] = n.value;
	else if ($n(n)) e[t.value] = null;
	else throw we(123, t.value, n.kind);
}
function tr(e, t) {
	var n = null;
	e.directives && (n = {}, e.directives.forEach(function(e) {
		n[e.name.value] = {}, e.arguments && e.arguments.forEach(function(r) {
			var i = r.name, a = r.value;
			return er(n[e.name.value], i, a, t);
		});
	}));
	var r = null;
	return e.arguments && e.arguments.length && (r = {}, e.arguments.forEach(function(e) {
		var n = e.name, i = e.value;
		return er(r, n, i, t);
	})), ir(e.name.value, r, n);
}
var nr = [
	"connection",
	"include",
	"skip",
	"client",
	"rest",
	"export",
	"nonreactive"
], rr = Rn, ir = Object.assign(function(e, t, n) {
	if (t && n && n.connection && n.connection.key) if (n.connection.filter && n.connection.filter.length > 0) {
		var r = n.connection.filter ? n.connection.filter : [];
		r.sort();
		var i = {};
		return r.forEach(function(e) {
			i[e] = t[e];
		}), `${n.connection.key}(${rr(i)})`;
	} else return n.connection.key;
	var a = e;
	if (t) {
		var o = rr(t);
		a += `(${o})`;
	}
	return n && Object.keys(n).forEach(function(e) {
		nr.indexOf(e) === -1 && (n[e] && Object.keys(n[e]).length ? a += `@${e}(${rr(n[e])})` : a += `@${e}`);
	}), a;
}, { setStringify: function(e) {
	var t = rr;
	return rr = e, t;
} });
function ar(e, t) {
	if (e.arguments && e.arguments.length) {
		var n = {};
		return e.arguments.forEach(function(e) {
			var r = e.name, i = e.value;
			return er(n, r, i, t);
		}), n;
	}
	return null;
}
function or(e) {
	return e.alias ? e.alias.value : e.name.value;
}
function sr(e, t, n) {
	for (var r, i = 0, a = t.selections; i < a.length; i++) {
		var o = a[i];
		if (cr(o)) {
			if (o.name.value === "__typename") return e[or(o)];
		} else r ? r.push(o) : r = [o];
	}
	if (typeof e.__typename == "string") return e.__typename;
	if (r) for (var s = 0, c = r; s < c.length; s++) {
		var o = c[s], l = sr(e, ln(o, n).selectionSet, n);
		if (typeof l == "string") return l;
	}
}
function cr(e) {
	return e.kind === "Field";
}
function lr(e) {
	return e.kind === "InlineFragment";
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/getFromAST.js
function ur(e) {
	A(e && e.kind === "Document", 115);
	var t = e.definitions.filter(function(e) {
		return e.kind !== "FragmentDefinition";
	}).map(function(e) {
		if (e.kind !== "OperationDefinition") throw we(116, e.kind);
		return e;
	});
	return A(t.length <= 1, 117, t.length), e;
}
function dr(e) {
	return ur(e), e.definitions.filter(function(e) {
		return e.kind === "OperationDefinition";
	})[0];
}
function fr(e) {
	return e.definitions.filter(function(e) {
		return e.kind === "OperationDefinition" && !!e.name;
	}).map(function(e) {
		return e.name.value;
	})[0] || null;
}
function pr(e) {
	return e.definitions.filter(function(e) {
		return e.kind === "FragmentDefinition";
	});
}
function mr(e) {
	var t = dr(e);
	return A(t && t.operation === "query", 118), t;
}
function hr(e) {
	A(e.kind === "Document", 119), A(e.definitions.length <= 1, 120);
	var t = e.definitions[0];
	return A(t.kind === "FragmentDefinition", 121), t;
}
function gr(e) {
	ur(e);
	for (var t, n = 0, r = e.definitions; n < r.length; n++) {
		var i = r[n];
		if (i.kind === "OperationDefinition") {
			var a = i.operation;
			if (a === "query" || a === "mutation" || a === "subscription") return i;
		}
		i.kind === "FragmentDefinition" && !t && (t = i);
	}
	if (t) return t;
	throw we(122);
}
function _r(e) {
	var t = Object.create(null), n = e && e.variableDefinitions;
	return n && n.length && n.forEach(function(e) {
		e.defaultValue && er(t, e.variable.name, e.defaultValue);
	}), t;
}
//#endregion
//#region node_modules/@wry/context/lib/slot.js
var R = null, vr = {}, yr = 1, br = () => class {
	constructor() {
		this.id = [
			"slot",
			yr++,
			Date.now(),
			Math.random().toString(36).slice(2)
		].join(":");
	}
	hasValue() {
		for (let e = R; e; e = e.parent) if (this.id in e.slots) {
			let t = e.slots[this.id];
			if (t === vr) break;
			return e !== R && (R.slots[this.id] = t), !0;
		}
		return R && (R.slots[this.id] = vr), !1;
	}
	getValue() {
		if (this.hasValue()) return R.slots[this.id];
	}
	withValue(e, t, n, r) {
		let i = {
			__proto__: null,
			[this.id]: e
		}, a = R;
		R = {
			parent: a,
			slots: i
		};
		try {
			return t.apply(r, n);
		} finally {
			R = a;
		}
	}
	static bind(e) {
		let t = R;
		return function() {
			let n = R;
			try {
				return R = t, e.apply(this, arguments);
			} finally {
				R = n;
			}
		};
	}
	static noContext(e, t, n) {
		if (R) {
			let r = R;
			try {
				return R = null, e.apply(n, t);
			} finally {
				R = r;
			}
		} else return e.apply(n, t);
	}
};
function xr(e) {
	try {
		return e();
	} catch {}
}
var Sr = "@wry/context:Slot", Cr = xr(() => globalThis) || xr(() => global) || Object.create(null), wr = Cr[Sr] || Array[Sr] || (function(e) {
	try {
		Object.defineProperty(Cr, Sr, {
			value: e,
			enumerable: !1,
			writable: !1,
			configurable: !0
		});
	} finally {
		return e;
	}
})(br()), { bind: Tr, noContext: Er } = wr, Dr = new wr(), { hasOwnProperty: Or } = Object.prototype, kr = Array.from || function(e) {
	let t = [];
	return e.forEach((e) => t.push(e)), t;
};
function Ar(e) {
	let { unsubscribe: t } = e;
	typeof t == "function" && (e.unsubscribe = void 0, t());
}
//#endregion
//#region node_modules/optimism/lib/entry.js
var jr = [], Mr = 100;
function Nr(e, t) {
	if (!e) throw Error(t || "assertion failure");
}
function Pr(e, t) {
	let n = e.length;
	return n > 0 && n === t.length && e[n - 1] === t[n - 1];
}
function Fr(e) {
	switch (e.length) {
		case 0: throw Error("unknown value");
		case 1: return e[0];
		case 2: throw e[1];
	}
}
function Ir(e) {
	return e.slice(0);
}
var Lr = class e {
	constructor(t) {
		this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count;
	}
	peek() {
		if (this.value.length === 1 && !z(this)) return Rr(this), this.value[0];
	}
	recompute(e) {
		return Nr(!this.recomputing, "already recomputing"), Rr(this), z(this) ? zr(this, e) : Fr(this.value);
	}
	setDirty() {
		this.dirty || (this.dirty = !0, Hr(this), Ar(this));
	}
	dispose() {
		this.setDirty(), Jr(this), Wr(this, (e, t) => {
			e.setDirty(), Yr(e, this);
		});
	}
	forget() {
		this.dispose();
	}
	dependOn(e) {
		e.add(this), this.deps || (this.deps = jr.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
	}
	forgetDeps() {
		this.deps && (kr(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), jr.push(this.deps), this.deps = null);
	}
};
Lr.count = 0;
function Rr(e) {
	let t = Dr.getValue();
	if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), z(e) ? Gr(t, e) : Kr(t, e), t;
}
function zr(e, t) {
	return Jr(e), Dr.withValue(e, Br, [e, t]), Xr(e, t) && Vr(e), Fr(e.value);
}
function Br(e, t) {
	e.recomputing = !0;
	let { normalizeResult: n } = e, r;
	n && e.value.length === 1 && (r = Ir(e.value)), e.value.length = 0;
	try {
		if (e.value[0] = e.fn.apply(null, t), n && r && !Pr(r, e.value)) try {
			e.value[0] = n(e.value[0], r[0]);
		} catch {}
	} catch (t) {
		e.value[1] = t;
	}
	e.recomputing = !1;
}
function z(e) {
	return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function Vr(e) {
	e.dirty = !1, !z(e) && Ur(e);
}
function Hr(e) {
	Wr(e, Gr);
}
function Ur(e) {
	Wr(e, Kr);
}
function Wr(e, t) {
	let n = e.parents.size;
	if (n) {
		let r = kr(e.parents);
		for (let i = 0; i < n; ++i) t(r[i], e);
	}
}
function Gr(e, t) {
	Nr(e.childValues.has(t)), Nr(z(t));
	let n = !z(e);
	if (!e.dirtyChildren) e.dirtyChildren = jr.pop() || /* @__PURE__ */ new Set();
	else if (e.dirtyChildren.has(t)) return;
	e.dirtyChildren.add(t), n && Hr(e);
}
function Kr(e, t) {
	Nr(e.childValues.has(t)), Nr(!z(t));
	let n = e.childValues.get(t);
	n.length === 0 ? e.childValues.set(t, Ir(t.value)) : Pr(n, t.value) || e.setDirty(), qr(e, t), !z(e) && Ur(e);
}
function qr(e, t) {
	let n = e.dirtyChildren;
	n && (n.delete(t), n.size === 0 && (jr.length < Mr && jr.push(n), e.dirtyChildren = null));
}
function Jr(e) {
	e.childValues.size > 0 && e.childValues.forEach((t, n) => {
		Yr(e, n);
	}), e.forgetDeps(), Nr(e.dirtyChildren === null);
}
function Yr(e, t) {
	t.parents.delete(e), e.childValues.delete(t), qr(e, t);
}
function Xr(e, t) {
	if (typeof e.subscribe == "function") try {
		Ar(e), e.unsubscribe = e.subscribe.apply(null, t);
	} catch {
		return e.setDirty(), !1;
	}
	return !0;
}
//#endregion
//#region node_modules/optimism/lib/dep.js
var Zr = {
	setDirty: !0,
	dispose: !0,
	forget: !0
};
function Qr(e) {
	let t = /* @__PURE__ */ new Map(), n = e && e.subscribe;
	function r(e) {
		let r = Dr.getValue();
		if (r) {
			let i = t.get(e);
			i || t.set(e, i = /* @__PURE__ */ new Set()), r.dependOn(i), typeof n == "function" && (Ar(i), i.unsubscribe = n(e));
		}
	}
	return r.dirty = function(e, n) {
		let r = t.get(e);
		if (r) {
			let i = n && Or.call(Zr, n) ? n : "setDirty";
			kr(r).forEach((e) => e[i]()), t.delete(e), Ar(r);
		}
	}, r;
}
//#endregion
//#region node_modules/optimism/lib/index.js
var $r;
function ei(...e) {
	return ($r || ($r = new Yt(typeof WeakMap == "function"))).lookupArray(e);
}
var ti = /* @__PURE__ */ new Set();
function ni(e, { max: t = 2 ** 16, keyArgs: n, makeCacheKey: r = ei, normalizeResult: i, subscribe: a, cache: o = fn } = Object.create(null)) {
	let s = typeof o == "function" ? new o(t, (e) => e.dispose()) : o, c = function() {
		let t = r.apply(null, n ? n.apply(null, arguments) : arguments);
		if (t === void 0) return e.apply(null, arguments);
		let o = s.get(t);
		o || (s.set(t, o = new Lr(e)), o.normalizeResult = i, o.subscribe = a, o.forget = () => s.delete(t));
		let c = o.recompute(Array.prototype.slice.call(arguments));
		return s.set(t, o), ti.add(s), Dr.hasValue() || (ti.forEach((e) => e.clean()), ti.clear()), c;
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
//#region node_modules/@apollo/client/utilities/common/arrays.js
var ri = Array.isArray;
function ii(e) {
	return Array.isArray(e) && e.length > 0;
}
//#endregion
//#region node_modules/zen-observable-ts/module.js
function ai(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = oi(e)) || t && e && typeof e.length == "number") {
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
function oi(e, t) {
	if (e) {
		if (typeof e == "string") return si(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return si(e, t);
	}
}
function si(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function ci(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function li(e, t, n) {
	return t && ci(e.prototype, t), n && ci(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var ui = function() {
	return typeof Symbol == "function";
}, di = function(e) {
	return ui() && !!Symbol[e];
}, fi = function(e) {
	return di(e) ? Symbol[e] : "@@" + e;
};
ui() && !di("observable") && (Symbol.observable = Symbol("observable"));
var pi = fi("iterator"), mi = fi("observable"), hi = fi("species");
function gi(e, t) {
	var n = e[t];
	if (n != null) {
		if (typeof n != "function") throw TypeError(n + " is not a function");
		return n;
	}
}
function _i(e) {
	var t = e.constructor;
	return t !== void 0 && (t = t[hi], t === null && (t = void 0)), t === void 0 ? Oi : t;
}
function vi(e) {
	return e instanceof Oi;
}
function yi(e) {
	yi.log ? yi.log(e) : setTimeout(function() {
		throw e;
	});
}
function bi(e) {
	Promise.resolve().then(function() {
		try {
			e();
		} catch (e) {
			yi(e);
		}
	});
}
function xi(e) {
	var t = e._cleanup;
	if (t !== void 0 && (e._cleanup = void 0, t)) try {
		if (typeof t == "function") t();
		else {
			var n = gi(t, "unsubscribe");
			n && n.call(t);
		}
	} catch (e) {
		yi(e);
	}
}
function Si(e) {
	e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Ci(e) {
	var t = e._queue;
	if (t) {
		e._queue = void 0, e._state = "ready";
		for (var n = 0; n < t.length && (wi(e, t[n].type, t[n].value), e._state !== "closed"); ++n);
	}
}
function wi(e, t, n) {
	e._state = "running";
	var r = e._observer;
	try {
		var i = gi(r, t);
		switch (t) {
			case "next":
				i && i.call(r, n);
				break;
			case "error":
				if (Si(e), i) i.call(r, n);
				else throw n;
				break;
			case "complete":
				Si(e), i && i.call(r);
				break;
		}
	} catch (e) {
		yi(e);
	}
	e._state === "closed" ? xi(e) : e._state === "running" && (e._state = "ready");
}
function Ti(e, t, n) {
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
			}], bi(function() {
				return Ci(e);
			});
			return;
		}
		wi(e, t, n);
	}
}
var Ei = /* @__PURE__ */ function() {
	function e(e, t) {
		this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
		var n = new Di(this);
		try {
			this._cleanup = t.call(void 0, n);
		} catch (e) {
			n.error(e);
		}
		this._state === "initializing" && (this._state = "ready");
	}
	var t = e.prototype;
	return t.unsubscribe = function() {
		this._state !== "closed" && (Si(this), xi(this));
	}, li(e, [{
		key: "closed",
		get: function() {
			return this._state === "closed";
		}
	}]), e;
}(), Di = /* @__PURE__ */ function() {
	function e(e) {
		this._subscription = e;
	}
	var t = e.prototype;
	return t.next = function(e) {
		Ti(this._subscription, "next", e);
	}, t.error = function(e) {
		Ti(this._subscription, "error", e);
	}, t.complete = function() {
		Ti(this._subscription, "complete");
	}, li(e, [{
		key: "closed",
		get: function() {
			return this._subscription._state === "closed";
		}
	}]), e;
}(), Oi = /* @__PURE__ */ function() {
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
		}), new Ei(e, this._subscriber);
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
		return new (_i(this))(function(n) {
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
		return new (_i(this))(function(n) {
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
		var n = _i(this), r = arguments.length > 1, i = !1, a = arguments[1];
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
		var e = this, t = [...arguments], n = _i(this);
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
		var n = _i(this);
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
	}, t[mi] = function() {
		return this;
	}, e.from = function(t) {
		var n = typeof this == "function" ? this : e;
		if (t == null) throw TypeError(t + " is not an object");
		var r = gi(t, mi);
		if (r) {
			var i = r.call(t);
			if (Object(i) !== i) throw TypeError(i + " is not an object");
			return vi(i) && i.constructor === n ? i : new n(function(e) {
				return i.subscribe(e);
			});
		}
		if (di("iterator") && (r = gi(t, pi), r)) return new n(function(e) {
			bi(function() {
				if (!e.closed) {
					for (var n = ai(r.call(t)), i; !(i = n()).done;) {
						var a = i.value;
						if (e.next(a), e.closed) return;
					}
					e.complete();
				}
			});
		});
		if (Array.isArray(t)) return new n(function(e) {
			bi(function() {
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
			bi(function() {
				if (!e.closed) {
					for (var n = 0; n < t.length; ++n) if (e.next(t[n]), e.closed) return;
					e.complete();
				}
			});
		});
	}, li(e, null, [{
		key: hi,
		get: function() {
			return this;
		}
	}]), e;
}();
ui() && Object.defineProperty(Oi, Symbol("extensions"), {
	value: {
		symbol: mi,
		hostReportError: yi
	},
	configurable: !0
});
//#endregion
//#region node_modules/@apollo/client/utilities/promises/preventUnhandledRejection.js
function ki(e) {
	return e.catch(function() {}), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/cloneDeep.js
var Ai = Object.prototype.toString;
function ji(e) {
	return Mi(e);
}
function Mi(e, t) {
	switch (Ai.call(e)) {
		case "[object Array]":
			if (t = t || /* @__PURE__ */ new Map(), t.has(e)) return t.get(e);
			var n = e.slice(0);
			return t.set(e, n), n.forEach(function(e, r) {
				n[r] = Mi(e, t);
			}), n;
		case "[object Object]":
			if (t = t || /* @__PURE__ */ new Map(), t.has(e)) return t.get(e);
			var r = Object.create(Object.getPrototypeOf(e));
			return t.set(e, r), Object.keys(e).forEach(function(n) {
				r[n] = Mi(e[n], t);
			}), r;
		default: return e;
	}
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
function Ni(e) {
	var t = new Set([e]);
	return t.forEach(function(e) {
		on(e) && Pi(e) === e && Object.getOwnPropertyNames(e).forEach(function(n) {
			on(e[n]) && t.add(e[n]);
		});
	}), e;
}
function Pi(e) {
	if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e)) try {
		Object.freeze(e);
	} catch (e) {
		if (e instanceof TypeError) return null;
		throw e;
	}
	return e;
}
function Fi(e) {
	return globalThis.__DEV__ !== !1 && Ni(e), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/observables/iteration.js
function Ii(e, t, n) {
	var r = [];
	e.forEach(function(e) {
		return e[t] && r.push(e);
	}), r.forEach(function(e) {
		return e[t](n);
	});
}
//#endregion
//#region node_modules/@apollo/client/utilities/observables/subclassing.js
function Li(e) {
	function t(t) {
		Object.defineProperty(e, t, { value: Oi });
	}
	return en && Symbol.species && t(Symbol.species), t("@@species"), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/compact.js
function Ri() {
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
function zi(e, t) {
	return Ri(e, t, t.variables && { variables: Ri(E(E({}, e && e.variables), t.variables)) });
}
//#endregion
//#region node_modules/@apollo/client/utilities/deprecation/index.js
var Bi = Symbol.for("apollo.deprecations"), Vi = Symbol.for("apollo.deprecations.slot"), Hi = ye, Ui = Hi[Vi] ?? (Hi[Vi] = new wr());
function Wi(e) {
	return Hi[Bi] || (Ui.getValue() || []).includes(e);
}
function B(e) {
	var t = [...arguments].slice(1);
	return Ui.withValue.apply(Ui, D([Array.isArray(e) ? e : [e]], t, !1));
}
function Gi(e, t, n, r) {
	r === void 0 && (r = "Please remove this option."), V(t, function() {
		t in e && globalThis.__DEV__ !== !1 && A.warn(103, n, t, r);
	});
}
function V(e, t) {
	Wi(e) || t();
}
//#endregion
//#region node_modules/@apollo/client/react/context/ApolloContext.js
var H = /* @__PURE__ */ l(ke(), 1), Ki = en ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function qi() {
	A("createContext" in H, 69);
	var e = H.createContext[Ki];
	return e || (Object.defineProperty(H.createContext, Ki, {
		value: e = H.createContext({}),
		enumerable: !1,
		writable: !1,
		configurable: !0
	}), e.displayName = "ApolloContext"), e;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useApolloClient.js
function Ji(e) {
	var t = H.useContext(qi()), n = e || t.client;
	return A(!!n, 78), n;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useSyncExternalStore.js
var Yi = !1, Xi = H.useSyncExternalStore || (function(e, t, n) {
	var r = t();
	globalThis.__DEV__ !== !1 && !Yi && r !== t() && (Yi = !0, globalThis.__DEV__ !== !1 && A.error(91));
	var i = H.useState({ inst: {
		value: r,
		getSnapshot: t
	} }), a = i[0].inst, o = i[1];
	return an ? H.useLayoutEffect(function() {
		Object.assign(a, {
			value: r,
			getSnapshot: t
		}), Zi(a) && o({ inst: a });
	}, [
		e,
		r,
		t
	]) : Object.assign(a, {
		value: r,
		getSnapshot: t
	}), H.useEffect(function() {
		return Zi(a) && o({ inst: a }), e(function() {
			Zi(a) && o({ inst: a });
		});
	}, [e]), r;
});
function Zi(e) {
	var t = e.value, n = e.getSnapshot;
	try {
		return t !== n();
	} catch {
		return !0;
	}
}
//#endregion
//#region node_modules/@wry/equality/lib/index.js
var { toString: Qi, hasOwnProperty: $i } = Object.prototype, ea = Function.prototype.toString, ta = /* @__PURE__ */ new Map();
function U(e, t) {
	try {
		return na(e, t);
	} finally {
		ta.clear();
	}
}
function na(e, t) {
	if (e === t) return !0;
	let n = Qi.call(e);
	if (n !== Qi.call(t)) return !1;
	switch (n) {
		case "[object Array]": if (e.length !== t.length) return !1;
		case "[object Object]": {
			if (sa(e, t)) return !0;
			let n = ra(e), r = ra(t), i = n.length;
			if (i !== r.length) return !1;
			for (let e = 0; e < i; ++e) if (!$i.call(t, n[e])) return !1;
			for (let r = 0; r < i; ++r) {
				let i = n[r];
				if (!na(e[i], t[i])) return !1;
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
			if (sa(e, t)) return !0;
			let r = e.entries(), i = n === "[object Map]";
			for (;;) {
				let e = r.next();
				if (e.done) break;
				let [n, a] = e.value;
				if (!t.has(n) || i && !na(a, t.get(n))) return !1;
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
			let n = ea.call(e);
			return n === ea.call(t) ? !oa(n, aa) : !1;
		}
	}
	return !1;
}
function ra(e) {
	return Object.keys(e).filter(ia, e);
}
function ia(e) {
	return this[e] !== void 0;
}
var aa = "{ [native code] }";
function oa(e, t) {
	let n = e.length - t.length;
	return n >= 0 && e.indexOf(t, n) === n;
}
function sa(e, t) {
	let n = ta.get(e);
	if (n) {
		if (n.has(t)) return !0;
	} else ta.set(e, n = /* @__PURE__ */ new Set());
	return n.add(t), !1;
}
//#endregion
//#region node_modules/@apollo/client/errors/index.js
var ca = Symbol();
function la(e) {
	return e.extensions ? Array.isArray(e.extensions[ca]) : !1;
}
function ua(e) {
	return e.hasOwnProperty("graphQLErrors");
}
var da = function(e) {
	var t = D(D(D([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
	return e.networkError && t.push(e.networkError), t.map(function(e) {
		return on(e) && e.message || "Error message not found.";
	}).join("\n");
}, fa = function(e) {
	se(t, e);
	function t(n) {
		var r = n.graphQLErrors, i = n.protocolErrors, a = n.clientErrors, o = n.networkError, s = n.errorMessage, c = n.extraInfo, l = e.call(this, s) || this;
		return l.name = "ApolloError", l.graphQLErrors = r || [], l.protocolErrors = i || [], l.clientErrors = a || [], l.networkError = o || null, l.message = s || da(l), l.extraInfo = c, l.cause = D(D(D([o], r || [], !0), i || [], !0), a || [], !0).find(function(e) {
			return !!e;
		}) || null, l.__proto__ = t.prototype, l;
	}
	return t;
}(Error);
//#endregion
//#region node_modules/@apollo/client/core/equalByQuery.js
function pa(e, t, n, r) {
	var i = t.data, a = ce(t, ["data"]), o = n.data;
	return U(a, ce(n, ["data"])) && ma(gr(e).selectionSet, i, o, {
		fragmentMap: cn(pr(e)),
		variables: r
	});
}
function ma(e, t, n, r) {
	if (t === n) return !0;
	var i = /* @__PURE__ */ new Set();
	return e.selections.every(function(e) {
		if (i.has(e) || (i.add(e), !zt(e, r.variables)) || ha(e)) return !0;
		if (cr(e)) {
			var a = or(e), o = t && t[a], s = n && n[a], c = e.selectionSet;
			if (!c) return U(o, s);
			var l = Array.isArray(o), u = Array.isArray(s);
			if (l !== u) return !1;
			if (l && u) {
				var d = o.length;
				if (s.length !== d) return !1;
				for (var f = 0; f < d; ++f) if (!ma(c, o[f], s[f], r)) return !1;
				return !0;
			}
			return ma(c, o, s, r);
		} else {
			var p = ln(e, r.fragmentMap);
			if (p) return ha(p) ? !0 : ma(p.selectionSet, t, n, r);
		}
	});
}
function ha(e) {
	return !!e.directives && e.directives.some(ga);
}
function ga(e) {
	return e.name.value === "nonreactive";
}
//#endregion
//#region node_modules/@apollo/client/core/networkStatus.js
var W;
(function(e) {
	e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(W || (W = {}));
function _a(e) {
	return e ? e < 7 : !1;
}
//#endregion
//#region node_modules/@apollo/client/core/ObservableQuery.js
var va = Object.assign, ya = Object.hasOwnProperty, ba = function(e) {
	se(t, e);
	function t(n) {
		var r = n.queryManager, i = n.queryInfo, a = n.options, o = this, s = t.inactiveOnCreation.getValue();
		o = e.call(this, function(e) {
			o._getOrCreateQuery();
			try {
				var t = e._subscription._observer;
				t && !t.error && (t.error = xa);
			} catch {}
			var n = !o.observers.size;
			o.observers.add(e);
			var r = o.last;
			return r && r.error ? e.error && e.error(r.error) : r && r.result && e.next && e.next(o.maskResult(r.result)), n && o.reobserve().catch(function() {}), function() {
				o.observers.delete(e) && !o.observers.size && o.tearDownQuery();
			};
		}) || this, o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.dirty = !1, o._getOrCreateQuery = function() {
			return s && (r.queries.set(o.queryId, i), s = !1), o.queryManager.getOrCreateQuery(o.queryId);
		}, o.queryInfo = i, o.queryManager = r, o.waitForOwnResult = Ca(a.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o), o.maskResult = o.maskResult.bind(o);
		var c = r.defaultOptions.watchQuery, l = (c === void 0 ? {} : c).fetchPolicy, u = l === void 0 ? "cache-first" : l, d = a.fetchPolicy, f = d === void 0 ? u : d, p = a.initialFetchPolicy, m = p === void 0 ? f === "standby" ? u : f : p;
		o.options = E(E({}, a), {
			initialFetchPolicy: m,
			fetchPolicy: f
		}), o.queryId = i.queryId || r.generateQueryId();
		var h = dr(o.query);
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
		return globalThis.__DEV__ !== !1 && V("observableQuery.result", function() {
			globalThis.__DEV__ !== !1 && A.warn(23);
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
		var n = B("getLastResult", function() {
			return t.getLastResult(!0);
		}), r = this.queryInfo.networkStatus || n && n.networkStatus || W.ready, i = E(E({}, n), {
			loading: _a(r),
			networkStatus: r
		}), a = this.options.fetchPolicy, o = a === void 0 ? "cache-first" : a;
		if (!(Ca(o) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)) if (this.waitForOwnResult) this.queryInfo.updateWatch();
		else {
			var s = this.queryInfo.getDiff();
			(s.complete || this.options.returnPartialData) && (i.data = s.result), U(i.data, {}) && (i.data = void 0), s.complete ? (delete i.partial, s.complete && i.networkStatus === W.loading && (o === "cache-first" || o === "cache-only") && (i.networkStatus = W.ready, i.loading = !1)) : i.partial = !0, i.networkStatus === W.ready && (i.error || i.errors) && (i.networkStatus = W.error), globalThis.__DEV__ !== !1 && !s.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && Sa(s.missing);
		}
		return e && this.updateLastResult(i), i;
	}, t.prototype.getCurrentResult = function(e) {
		return e === void 0 && (e = !0), this.maskResult(this.getCurrentFullResult(e));
	}, t.prototype.isDifferentFromLastResult = function(e, t) {
		if (!this.last) return !0;
		var n = this.queryManager.getDocumentInfo(this.query), r = this.queryManager.dataMasking, i = r ? n.nonReactiveQuery : this.query;
		return (r || n.hasNonreactiveDirective ? !pa(i, this.last.result, e, this.variables) : !U(this.last.result, e)) || t && !U(this.last.variables, t);
	}, t.prototype.getLast = function(e, t) {
		var n = this.last;
		if (n && n[e] && (!t || U(n.variables, this.variables))) return n[e];
	}, t.prototype.getLastResult = function(e) {
		return globalThis.__DEV__ !== !1 && V("getLastResult", function() {
			globalThis.__DEV__ !== !1 && A.warn(24);
		}), this.getLast("result", e);
	}, t.prototype.getLastError = function(e) {
		return globalThis.__DEV__ !== !1 && V("getLastError", function() {
			globalThis.__DEV__ !== !1 && A.warn(25);
		}), this.getLast("error", e);
	}, t.prototype.resetLastResults = function() {
		globalThis.__DEV__ !== !1 && V("resetLastResults", function() {
			globalThis.__DEV__ !== !1 && A.warn(26);
		}), delete this.last, this.isTornDown = !1;
	}, t.prototype.resetQueryStoreErrors = function() {
		globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && A.warn(27), this.queryManager.resetErrors(this.queryId);
	}, t.prototype.refetch = function(e) {
		var t = { pollInterval: 0 };
		if (this.options.fetchPolicy === "no-cache" ? t.fetchPolicy = "no-cache" : t.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && e && ya.call(e, "variables")) {
			var n = mr(this.query), r = n.variableDefinitions;
			(!r || !r.some(function(e) {
				return e.variable.name.value === "variables";
			})) && globalThis.__DEV__ !== !1 && A.warn(28, e, n.name?.value || n);
		}
		return e && !U(this.options.variables, e) && (t.variables = this.options.variables = E(E({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(t, W.refetch);
	}, t.prototype.fetchMore = function(e) {
		var t = this, n = E(E({}, e.query ? e : E(E(E(E({}, this.options), { query: this.options.query }), e), { variables: E(E({}, this.options.variables), e.variables) })), { fetchPolicy: "no-cache" });
		n.query = this.transformDocument(n.query);
		var r = this.queryManager.generateQueryId();
		this.lastQuery = e.query ? this.transformDocument(this.options.query) : n.query;
		var i = this.queryInfo, a = i.networkStatus;
		i.networkStatus = W.fetchMore, n.notifyOnNetworkStatusChange && this.observe();
		var o = /* @__PURE__ */ new Set(), s = e?.updateQuery, c = this.options.fetchPolicy !== "no-cache";
		return c || A(s, 29), this.queryManager.fetchQuery(r, n, W.fetchMore).then(function(l) {
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
				t.reportResult(E(E({}, u), {
					networkStatus: a,
					loading: _a(a),
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
					return r(e, E({ subscriptionData: n }, t));
				});
			},
			error: function(t) {
				if (e.onError) {
					e.onError(t);
					return;
				}
				globalThis.__DEV__ !== !1 && A.error(30, t);
			}
		});
		return this.subscriptions.add(n), function() {
			t.subscriptions.delete(n) && n.unsubscribe();
		};
	}, t.prototype.setOptions = function(e) {
		return globalThis.__DEV__ !== !1 && (Gi(e, "canonizeResults", "setOptions"), V("setOptions", function() {
			globalThis.__DEV__ !== !1 && A.warn(31);
		})), this.reobserve(e);
	}, t.prototype.silentSetOptions = function(e) {
		var t = Ri(this.options, e || {});
		va(this.options, t);
	}, t.prototype.setVariables = function(e) {
		var t = this;
		return U(this.variables, e) ? this.observers.size ? B("observableQuery.result", function() {
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
				A(r, 32);
				var i = n || (this.pollingInfo = {});
				i.interval = r;
				var a = function() {
					var t;
					e.pollingInfo && (!_a(e.queryInfo.networkStatus) && !(t = e.options).skipPollAttempt?.call(t) ? e.reobserve({ fetchPolicy: e.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only" }, W.poll).then(o, o) : o());
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
		var r = B("getLastError", function() {
			return n.getLastError();
		});
		return r && this.last && !U(t, this.last.variables) && (r = void 0), this.last = E({
			result: this.queryManager.assumeImmutableResults ? e : ji(e),
			variables: t
		}, r ? { error: r } : null);
	}, t.prototype.reobserveAsConcast = function(e, t) {
		var n = this;
		this.isTornDown = !1;
		var r = t === W.refetch || t === W.fetchMore || t === W.poll, i = this.options.variables, a = this.options.fetchPolicy, o = Ri(this.options, e || {}), s = r ? o : va(this.options, o), c = this.transformDocument(s.query);
		this.lastQuery = c, r || (this.updatePolling(), e && e.variables && !U(e.variables, i) && s.fetchPolicy !== "standby" && (s.fetchPolicy === a || typeof s.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", s), t === void 0 && (t = W.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Ca(s.fetchPolicy));
		var l = function() {
			n.concast === f && (n.waitForOwnResult = !1);
		}, u = s.variables && E({}, s.variables), d = this.fetch(s, t, c), f = d.concast, p = d.fromLink, m = {
			next: function(e) {
				U(n.variables, u) && (l(), n.reportResult(e, u));
			},
			error: function(e) {
				U(n.variables, u) && (ua(e) || (e = new fa({ networkError: e })), l(), n.reportError(e, u));
			}
		};
		return !r && (p || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = f, this.observer = m), f.addObserver(m), f;
	}, t.prototype.reobserve = function(e, t) {
		return ki(this.reobserveAsConcast(e, t).promise.then(this.maskResult));
	}, t.prototype.resubscribeAfterError = function() {
		for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		var r = this.last;
		B("resetLastResults", function() {
			return e.resetLastResults();
		});
		var i = this.subscribe.apply(this, t);
		return this.last = r, i;
	}, t.prototype.observe = function() {
		this.reportResult(this.getCurrentFullResult(!1), this.variables);
	}, t.prototype.reportResult = function(e, t) {
		var n = this, r = B("getLastError", function() {
			return n.getLastError();
		}), i = this.isDifferentFromLastResult(e, t);
		(r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), (r || i) && Ii(this.observers, "next", this.maskResult(e));
	}, t.prototype.reportError = function(e, t) {
		var n = this, r = E(E({}, B("getLastResult", function() {
			return n.getLastResult();
		})), {
			error: e,
			errors: e.graphQLErrors,
			networkStatus: W.error,
			loading: !1
		});
		this.updateLastResult(r, t), Ii(this.observers, "error", this.last.error = e);
	}, t.prototype.hasObservers = function() {
		return this.observers.size > 0;
	}, t.prototype.tearDownQuery = function() {
		this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(e) {
			return e.unsubscribe();
		}), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
	}, t.prototype.transformDocument = function(e) {
		return this.queryManager.transform(e);
	}, t.prototype.maskResult = function(e) {
		return e && "data" in e ? E(E({}, e), { data: this.queryManager.maskOperation({
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
		this.cancelNotifyTimeout(), this.dirty && (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !_a(this.queryInfo.networkStatus)) && (this.queryInfo.getDiff().fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst()), this.dirty = !1;
	}, t.prototype.reobserveCacheFirst = function() {
		var e = this.options, t = e.fetchPolicy, n = e.nextFetchPolicy;
		return t === "cache-and-network" || t === "network-only" ? this.reobserve({
			fetchPolicy: "cache-first",
			nextFetchPolicy: function(e, r) {
				return this.nextFetchPolicy = n, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(e, r) : t;
			}
		}) : this.reobserve();
	}, t.inactiveOnCreation = new wr(), t;
}(Oi);
Li(ba);
function xa(e) {
	globalThis.__DEV__ !== !1 && A.error(33, e.message, e.stack);
}
function Sa(e) {
	globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && A.debug(34, e);
}
function Ca(e) {
	return e === "network-only" || e === "no-cache" || e === "standby";
}
//#endregion
//#region node_modules/graphql-tag/lib/index.js
var wa = /* @__PURE__ */ new Map(), Ta = /* @__PURE__ */ new Map(), Ea = !0, Da = !1;
function Oa(e) {
	return e.replace(/[\s,]+/g, " ").trim();
}
function ka(e) {
	return Oa(e.source.body.substring(e.start, e.end));
}
function Aa(e) {
	var t = /* @__PURE__ */ new Set(), n = [];
	return e.definitions.forEach(function(e) {
		if (e.kind === "FragmentDefinition") {
			var r = e.name.value, i = ka(e.loc), a = Ta.get(r);
			a && !a.has(i) ? Ea && console.warn("Warning: fragment with name " + r + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : a || Ta.set(r, a = /* @__PURE__ */ new Set()), a.add(i), t.has(i) || (t.add(i), n.push(e));
		} else n.push(e);
	}), E(E({}, e), { definitions: n });
}
function ja(e) {
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
function Ma(e) {
	var t = Oa(e);
	if (!wa.has(t)) {
		var n = Mt(e, {
			experimentalFragmentVariables: Da,
			allowLegacyFragmentVariables: Da
		});
		if (!n || n.kind !== "Document") throw Error("Not a valid GraphQL document.");
		wa.set(t, ja(Aa(n)));
	}
	return wa.get(t);
}
function G(e) {
	var t = [...arguments].slice(1);
	typeof e == "string" && (e = [e]);
	var n = e[0];
	return t.forEach(function(t, r) {
		t && t.kind === "Document" ? n += t.loc.source.body : n += t, n += e[r + 1];
	}), Ma(n);
}
function Na() {
	wa.clear(), Ta.clear();
}
function Pa() {
	Ea = !1;
}
function Fa() {
	Da = !0;
}
function Ia() {
	Da = !1;
}
var La = {
	gql: G,
	resetCaches: Na,
	disableFragmentWarnings: Pa,
	enableExperimentalFragmentVariables: Fa,
	disableExperimentalFragmentVariables: Ia
};
(function(e) {
	e.gql = La.gql, e.resetCaches = La.resetCaches, e.disableFragmentWarnings = La.disableFragmentWarnings, e.enableExperimentalFragmentVariables = La.enableExperimentalFragmentVariables, e.disableExperimentalFragmentVariables = La.disableExperimentalFragmentVariables;
})(G || (G = {})), G.default = G;
//#endregion
//#region node_modules/@apollo/client/react/parser/index.js
var K;
(function(e) {
	e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription";
})(K || (K = {}));
var q;
function Ra(e) {
	var t;
	switch (e) {
		case K.Query:
			t = "Query";
			break;
		case K.Mutation:
			t = "Mutation";
			break;
		case K.Subscription:
			t = "Subscription";
			break;
	}
	return t;
}
function za(e) {
	V("parser", function() {
		globalThis.__DEV__ !== !1 && A.warn(93);
	}), q || (q = new Sn(wn.parser || 1e3));
	var t = q.get(e);
	if (t) return t;
	var n, r, i;
	A(!!e && !!e.kind, 94, e);
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
	A(!a.length || o.length || s.length || c.length, 95), A(o.length + s.length + c.length <= 1, 96, e, o.length, c.length, s.length), r = o.length ? K.Query : K.Mutation, !o.length && !s.length && (r = K.Subscription);
	var f = o.length ? o : s.length ? s : c;
	A(f.length === 1, 97, e, f.length);
	var p = f[0];
	n = p.variableDefinitions || [], i = p.name && p.name.kind === "Name" ? p.name.value : "data";
	var m = {
		name: i,
		type: r,
		variables: n
	};
	return q.set(e, m), m;
}
za.resetCache = function() {
	q = void 0;
}, globalThis.__DEV__ !== !1 && Tn("parser", function() {
	return q ? q.size : 0;
});
function Ba(e, t) {
	var n = B("parser", za, [e]), r = Ra(t), i = Ra(n.type);
	A(n.type === t, 98, r, r, i);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js
var Va = nn ? H.useLayoutEffect : H.useEffect;
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/useWarnRemovedOption.js
function J(e, t, n, r) {
	"use no memo";
	r === void 0 && (r = "Please remove this option.");
	var i = H.useRef(!1);
	globalThis.__DEV__ !== !1 && t in e && !i.current && (Gi(e, t, n, r), i.current = !0);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/wrapHook.js
var Ha = Symbol.for("apollo.hook.wrappers");
function Ua(e, t, n) {
	var r = n.queryManager, i = r && r[Ha], a = i && i[e];
	return a ? a(t) : t;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useQuery.js
var Wa = Object.prototype.hasOwnProperty;
function Ga() {}
var Ka = Symbol();
function qa(e, t) {
	return t === void 0 && (t = Object.create(null)), Ua("useQuery", Ja, Ji(t && t.client))(e, t);
}
function Ja(e, t) {
	globalThis.__DEV__ !== !1 && (J(t, "canonizeResults", "useQuery"), J(t, "partialRefetch", "useQuery"), J(t, "defaultOptions", "useQuery", "Pass the options directly to the hook instead."), J(t, "onCompleted", "useQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), J(t, "onError", "useQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));
	var n = Xa(e, t), r = n.result, i = n.obsQueryFields;
	return H.useMemo(function() {
		return E(E({}, r), i);
	}, [r, i]);
}
function Ya(e, t, n, r, i) {
	function a(a) {
		return Ba(t, K.Query), {
			client: e,
			query: t,
			observable: r && r.getSSRObservable(i()) || ba.inactiveOnCreation.withValue(!r, function() {
				return B(["canonizeResults", "partialRefetch"], function() {
					return e.watchQuery(to(void 0, e, n, i()));
				});
			}),
			resultData: { previousData: a?.resultData.current?.data }
		};
	}
	var o = H.useState(a), s = o[0], c = o[1];
	function l(e) {
		var t;
		Object.assign(s.observable, (t = {}, t[Ka] = e, t));
		var n = s.resultData;
		c(E(E({}, s), {
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
function Xa(e, t) {
	var n = Ji(t.client), r = H.useContext(qi()).renderPromises, i = !!r, a = n.disableNetworkFetches, o = t.ssr !== !1 && !t.skip, s = t.partialRefetch, c = eo(n, e, t, i), l = Ya(n, e, t, r, c), u = l[0], d = u.observable, f = u.resultData, p = l[1], m = c(d);
	$a(f, d, n, t, m);
	var h = H.useMemo(function() {
		return fo(d);
	}, [d]);
	return Qa(d, r, o), {
		result: Za(f, d, n, t, m, a, s, i, {
			onCompleted: t.onCompleted || Ga,
			onError: t.onError || Ga
		}),
		obsQueryFields: h,
		observable: d,
		resultData: f,
		client: n,
		onQueryExecuted: p
	};
}
function Za(e, t, n, r, i, a, o, s, c) {
	var l = H.useRef(c);
	H.useEffect(function() {
		l.current = c;
	});
	var u = (s || a) && r.ssr === !1 && !r.skip ? lo : r.skip || i.fetchPolicy === "standby" ? uo : void 0, d = e.previousData, f = H.useMemo(function() {
		return u && so(u, d, t, n);
	}, [
		n,
		t,
		u,
		d
	]);
	return Xi(H.useCallback(function(r) {
		if (s) return function() {};
		var i = function() {
			var i = e.current, a = t.getCurrentResult();
			i && i.loading === a.loading && i.networkStatus === a.networkStatus && U(i.data, a.data) || no(a, e, t, n, o, r, l.current);
		}, a = function(s) {
			if (c.current.unsubscribe(), c.current = t.resubscribeAfterError(i, a), !Wa.call(s, "graphQLErrors")) throw s;
			var u = e.current;
			(!u || u && u.loading || !U(s, u.error)) && no({
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
		return f || io(e, t, l.current, o, n);
	}, function() {
		return f || io(e, t, l.current, o, n);
	});
}
function Qa(e, t, n) {
	t && n && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e));
}
function $a(e, t, n, r, i) {
	t[Ka] && !U(t[Ka], i) && (t.reobserve(to(t, n, r, i)), e.previousData = e.current?.data || e.previousData, e.current = void 0), t[Ka] = i;
}
function eo(e, t, n, r) {
	n === void 0 && (n = {});
	var i = n.skip;
	n.ssr, n.onCompleted, n.onError;
	var a = n.defaultOptions, o = ce(n, [
		"skip",
		"ssr",
		"onCompleted",
		"onError",
		"defaultOptions"
	]);
	return function(n) {
		var s = Object.assign(o, { query: t });
		return r && (s.fetchPolicy === "network-only" || s.fetchPolicy === "cache-and-network") && (s.fetchPolicy = "cache-first"), s.variables || (s.variables = {}), i ? (s.initialFetchPolicy = s.initialFetchPolicy || s.fetchPolicy || ao(a, e.defaultOptions), s.fetchPolicy = "standby") : s.fetchPolicy || (s.fetchPolicy = n?.options.initialFetchPolicy || ao(a, e.defaultOptions)), s;
	};
}
function to(e, t, n, r) {
	var i = [], a = t.defaultOptions.watchQuery;
	return a && i.push(a), n.defaultOptions && i.push(n.defaultOptions), i.push(Ri(e && e.options, r)), i.reduce(zi);
}
function no(e, t, n, r, i, a, o) {
	var s = t.current;
	s && s.data && (t.previousData = s.data), !e.error && ii(e.errors) && (e.error = new fa({ graphQLErrors: e.errors })), t.current = so(co(e, n, i), t.previousData, n, r), a(), ro(e, s?.networkStatus, o);
}
function ro(e, t, n) {
	if (!e.loading) {
		var r = oo(e);
		Promise.resolve().then(function() {
			r ? n.onError(r) : e.data && t !== e.networkStatus && e.networkStatus === W.ready && n.onCompleted(e.data);
		}).catch(function(e) {
			globalThis.__DEV__ !== !1 && A.warn(e);
		});
	}
}
function io(e, t, n, r, i) {
	return e.current || no(t.getCurrentResult(), e, t, i, r, function() {}, n), e.current;
}
function ao(e, t) {
	return e?.fetchPolicy || t?.watchQuery?.fetchPolicy || "cache-first";
}
function oo(e) {
	return ii(e.errors) ? new fa({ graphQLErrors: e.errors }) : e.error;
}
function so(e, t, n, r) {
	var i = e.data;
	e.partial;
	var a = ce(e, ["data", "partial"]);
	return E(E({ data: i }, a), {
		client: r,
		observable: n,
		variables: n.variables,
		called: e !== lo && e !== uo,
		previousData: t
	});
}
function co(e, t, n) {
	return e.partial && n && !e.loading && (!e.data || Object.keys(e.data).length === 0) && t.options.fetchPolicy !== "cache-only" ? (t.refetch(), E(E({}, e), {
		loading: !0,
		networkStatus: W.refetch
	})) : e;
}
var lo = Fi({
	loading: !0,
	data: void 0,
	error: void 0,
	networkStatus: W.loading
}), uo = Fi({
	loading: !1,
	data: void 0,
	error: void 0,
	networkStatus: W.ready
});
function fo(e) {
	return {
		refetch: e.refetch.bind(e),
		reobserve: function() {
			var t = [...arguments];
			return globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && A.warn(83), e.reobserve.apply(e, t);
		},
		fetchMore: e.fetchMore.bind(e),
		updateQuery: e.updateQuery.bind(e),
		startPolling: e.startPolling.bind(e),
		stopPolling: e.stopPolling.bind(e),
		subscribeToMore: e.subscribeToMore.bind(e)
	};
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useMutation.js
function po(e, t) {
	globalThis.__DEV__ !== !1 && J(t || {}, "ignoreResults", "useMutation", "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");
	var n = Ji(t?.client);
	Ba(e, K.Mutation);
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
	Va(function() {
		Object.assign(o.current, {
			client: n,
			options: t,
			mutation: e
		});
	});
	var s = H.useCallback(function(e) {
		e === void 0 && (e = {});
		var t = o.current, n = t.options, r = t.mutation, i = E(E({}, n), { mutation: r }), s = e.client || o.current.client;
		!o.current.result.loading && !i.ignoreResults && o.current.isMounted && a(o.current.result = {
			loading: !0,
			error: void 0,
			data: void 0,
			called: !0,
			client: s
		});
		var c = ++o.current.mutationId, l = zi(i, e);
		return s.mutate(l).then(function(t) {
			var n = t.data, r = t.errors, i = r && r.length > 0 ? new fa({ graphQLErrors: r }) : void 0, u = e.onError || o.current.options?.onError;
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
	}, []), [s, E({ reset: c }, i)];
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function mo(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function ho(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = mo(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : mo(e[t], null);
			}
		};
	};
}
function go(...e) {
	return h.useCallback(ho(...e), e);
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var _o = class extends h.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (o(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = o(e) && e.offsetWidth || 0, r = o(e) && e.offsetHeight || 0, i = getComputedStyle(t), a = this.props.sizeRef.current;
			a.height = parseFloat(i.height), a.width = parseFloat(i.width), a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left, a.bottom = r - a.height - a.top;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function vo({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
	let o = x(), c = C(null), l = C({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}), { nonce: u } = ee(s), d = go(c, e.props?.ref ?? e?.ref);
	return te(() => {
		let { width: e, height: s, top: d, left: f, right: p, bottom: m } = l.current;
		if (t || a === !1 || !c.current || !e || !s) return;
		let h = n === "left" ? `left: ${f}` : `right: ${p}`, g = r === "bottom" ? `bottom: ${m}` : `top: ${d}`;
		c.current.dataset.motionPopId = o;
		let _ = document.createElement("style");
		u && (_.nonce = u);
		let v = i ?? document.head;
		return v.appendChild(_), _.sheet && _.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `), () => {
			c.current?.removeAttribute("data-motion-pop-id"), v.contains(_) && v.removeChild(_);
		};
	}, [t]), w(_o, {
		isPresent: t,
		childRef: c,
		sizeRef: l,
		pop: a,
		children: a === !1 ? e : h.cloneElement(e, { ref: d })
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var yo = ({ children: e, initial: n, isPresent: r, onExitComplete: i, custom: o, presenceAffectsLayout: s, mode: c, anchorX: l, anchorY: u, root: d }) => {
	let f = t(bo), p = x(), m = !0, g = S(() => (m = !1, {
		id: p,
		initial: n,
		isPresent: r,
		custom: o,
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
	return s && m && (g = { ...g }), S(() => {
		f.forEach((e, t) => f.set(t, !1));
	}, [r]), h.useEffect(() => {
		!r && !f.size && i && i();
	}, [r]), e = w(vo, {
		pop: c === "popLayout",
		isPresent: r,
		anchorX: l,
		anchorY: u,
		root: d,
		children: e
	}), w(a.Provider, {
		value: g,
		children: e
	});
};
function bo() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var xo = (e) => e.key || "";
function So(e) {
	let t = [];
	return g.forEach(e, (e) => {
		v(e) && t.push(e);
	}), t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var Co = ({ children: e, custom: n, initial: a = !0, onExitComplete: o, presenceAffectsLayout: s = !0, mode: l = "sync", propagate: u = !1, anchorX: d = "left", anchorY: f = "top", root: p }) => {
	let [m, h] = r(u), g = S(() => So(e), [e]), _ = u && !m ? [] : g.map(xo), v = C(!0), y = C(g), b = t(() => /* @__PURE__ */ new Map()), x = C(/* @__PURE__ */ new Set()), [te, ie] = ne(g), [T, ae] = ne(g);
	i(() => {
		v.current = !1, y.current = g;
		for (let e = 0; e < T.length; e++) {
			let t = xo(T[e]);
			_.includes(t) ? (b.delete(t), x.current.delete(t)) : b.get(t) !== !0 && b.set(t, !1);
		}
	}, [
		T,
		_.length,
		_.join("-")
	]);
	let oe = [];
	if (g !== te) {
		let e = [...g];
		for (let t = 0; t < T.length; t++) {
			let n = T[t], r = xo(n);
			_.includes(r) || (e.splice(t, 0, n), oe.push(n));
		}
		return l === "wait" && oe.length && (e = oe), ae(So(e)), ie(g), null;
	}
	let { forceRender: se } = ee(c);
	return w(re, { children: T.map((e) => {
		let t = xo(e), r = u && !m ? !1 : g === T || _.includes(t);
		return w(yo, {
			isPresent: r,
			initial: !v.current || a ? void 0 : !1,
			custom: n,
			presenceAffectsLayout: s,
			mode: l,
			root: p,
			onExitComplete: r ? void 0 : () => {
				if (x.current.has(t)) return;
				if (b.has(t)) x.current.add(t), b.set(t, !0);
				else return;
				let e = !0;
				b.forEach((t) => {
					t || (e = !1);
				}), e && (se?.(), ae(y.current), u && h?.(), o && o());
			},
			anchorX: d,
			anchorY: f,
			children: e
		}, t);
	}) });
}, wo = "https://cdn.wexio.io";
function To(e) {
	return /^https?:\/\//.test(e) ? e : wo + (e.startsWith("/") ? e : `/${e}`);
}
//#endregion
//#region lib/use-widget-env.tsx
function Eo() {
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
var Do = _(null);
function Oo({ env: e, children: t }) {
	return /* @__PURE__ */ w(Do.Provider, {
		value: e,
		children: t
	});
}
function ko() {
	return ee(Do) ?? Eo();
}
//#endregion
//#region lib/api.ts
var Ao = "http://localhost:3001", jo = "https://local.api.wexio.io:3443";
function Mo() {
	let e = process.env.NEXT_PUBLIC_WEXIO_API_URL;
	if (e) return e;
	if (typeof window < "u") {
		let { protocol: e, hostname: t } = window.location;
		if (e === "https:" && /^local\.[a-z-]+\.wexio\.io$/i.test(t)) return jo;
		if (e === "https:" && /\.wexio\.io$/i.test(t)) {
			let e = t.replace(/^(app|templates)\./i, "api.").replace(/\.(app|templates)\./i, ".api.");
			return e === t ? "https://api.wexio.io" : `https://${e}`;
		}
	}
	return Ao;
}
var No = /* @__PURE__ */ new Map();
function Po(e, t) {
	if (!e) return Promise.resolve(null);
	let n = `${e}|${t ?? ""}`, r = No.get(n);
	if (r) return r;
	let i = (async () => {
		try {
			let n = new URL(`${Mo()}/api/web/config/${encodeURIComponent(e)}`);
			t && n.searchParams.set("locale", t);
			let r = await fetch(n.toString(), {
				method: "GET",
				headers: { "x-web-public-key": e },
				credentials: "omit"
			});
			return r.ok ? zo(await r.json()) : null;
		} catch {
			return null;
		}
	})();
	return No.set(n, i.then((e) => (e === null && No.delete(n), e))), No.get(n) ?? i;
}
var Fo = [
	"NAME",
	"EMAIL",
	"PHONE",
	"CUSTOM_TEXT"
], Io = ["HINT", "SYSTEM"];
function Lo(e) {
	if (e === null || !e) return null;
	let t = Array.isArray(e.commands) ? e.commands.filter((e) => typeof e == "string" && e.length > 0).slice(0, 20) : [], n = Array.isArray(e.messages) ? e.messages.filter((e) => !!e && typeof e.text == "string" && e.text.length > 0 && typeof e.kind == "string" && Io.includes(e.kind)).map((e) => ({
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
		showReactionCounts: e.showReactionCounts ?? !1
	};
}
function Ro(e) {
	if (!e) return null;
	let t = (Array.isArray(e.fields) ? e.fields : []).filter((e) => e && Fo.includes(e.kind)).map((e) => ({
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
function zo(e) {
	return {
		status: e.status,
		defaultTab: e.defaultTab?.toLowerCase() ?? "home",
		localeStrategy: e.localeStrategy ?? "AUTO",
		defaultLocale: e.defaultLocale ?? "en",
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
		prechatForm: Ro(e.prechatForm),
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
		messenger: Lo(e.messenger)
	};
}
var Bo = /* @__PURE__ */ new Map();
function Vo(e) {
	if (!e) return Promise.resolve(null);
	let t = Bo.get(e);
	if (t) return t;
	let n = (async () => {
		try {
			let t = new URL(`${Mo()}/api/web/config/${encodeURIComponent(e)}`);
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
	return Bo.set(e, n.then((t) => (t === null && Bo.delete(e), t))), Bo.get(e) ?? n;
}
//#endregion
//#region dummy/authors.ts
var Ho = {
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
function Uo(e) {
	return e.map((e) => Ho[e]);
}
//#endregion
//#region lib/theme-font.ts
var Wo = {
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
function Go(e) {
	if (!e || typeof document > "u") return;
	let t = e.split(",")[0]?.trim().replace(/^['"]|['"]$/g, "");
	if (!t) return;
	let n = Wo[t.toLowerCase()];
	if (!n) return;
	let r = `wexio-font-${t.toLowerCase().replace(/\s+/g, "-")}`;
	if (document.getElementById(r)) return;
	let i = document.createElement("link");
	i.id = r, i.rel = "stylesheet", i.href = `https://fonts.googleapis.com/css2?family=${n}&display=swap`, document.head.appendChild(i);
}
//#endregion
//#region lib/widget-config.ts
var Ko = {
	status: "active",
	defaultTab: "home",
	localeStrategy: "AUTO",
	defaultLocale: "en",
	security: {
		requireAuth: !0,
		google: {
			enabled: !0,
			clientId: "771481034494-41m4aop4gbn7k58ahgqgvr3kiv8vmrd3.apps.googleusercontent.com"
		},
		passkey: { enabled: !0 }
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
		enabled: !0,
		fields: [{
			kind: "NAME",
			key: "visitor_name",
			label: "",
			required: !0
		}, {
			kind: "EMAIL",
			key: "visitor_email",
			label: "",
			required: !0
		}]
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
		aiAssistantAvatar: To("/logo-dark.png"),
		commands: [
			"/start",
			"/help",
			"/contact"
		],
		messages: [],
		showRelatedNews: !0,
		showRelatedHelpArticles: !0,
		showReactionCounts: !1
	}
}, qo = [
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
function Jo() {
	let e = ko(), t = p(), [n, r] = ne({
		mode: "demo",
		config: Ko,
		isDummy: !0,
		isLoading: !0
	}), [i, a] = ne(null);
	b(() => {
		let n = new URL(window.location.href), i = n.searchParams.get("pk") ?? void 0, o = process.env.NEXT_PUBLIC_WEXIO_DEMO_PK || void 0, s = n.searchParams.get("mode"), c = e.publicKeyOverride ?? i ?? o, l = e.modeOverride ?? (c ? "production" : s === "preview" ? "preview" : "demo"), u = !1;
		if ((async () => {
			if (e.configBase) {
				let t = c ? await Vo(c) : null;
				if (u) return;
				let n = e.configBase.security, i = t?.security, a = {
					requireAuth: n?.requireAuth ?? i?.requireAuth ?? !1,
					google: {
						enabled: n?.google?.enabled ?? i?.google?.enabled ?? !1,
						clientId: i?.google?.clientId ?? null
					},
					passkey: { enabled: n?.passkey?.enabled ?? i?.passkey?.enabled ?? !1 }
				}, { security: o, ...s } = e.configBase;
				r({
					mode: l,
					config: {
						...s,
						security: a,
						branding: t?.branding ?? null,
						status: t?.status ?? "active"
					},
					isDummy: e.forceDummyData === !0,
					isLoading: !1
				});
				return;
			}
			if (e.forceDummyData !== void 0) {
				r({
					mode: l,
					config: Ko,
					isDummy: e.forceDummyData,
					isLoading: !1
				});
				return;
			}
			if (c) {
				let e = await Po(c, t);
				if (u) return;
				if (e) {
					r({
						mode: l,
						config: e,
						isDummy: !1,
						isLoading: !1
					});
					return;
				}
			}
			r({
				mode: l,
				config: Ko,
				isDummy: !0,
				isLoading: !1
			});
		})(), l !== "preview") return () => {
			u = !0;
		};
		let d = (e) => {
			if (!e.data || typeof e.data != "object" || e.data.type !== "wexio:preview-config:v1") return;
			let t = e.data.config;
			t && a((e) => Yo(e ?? {}, t));
		};
		return window.addEventListener("message", d), () => {
			u = !0, window.removeEventListener("message", d);
		};
	}, [
		e.publicKeyOverride,
		e.modeOverride,
		e.forceDummyData,
		e.configBase,
		t
	]);
	let o = n.isDummy || e.forceDummyData === !0, s = S(() => {
		let t = n.config;
		return i && (t = Yo(t, i)), e.configOverride && (t = Yo(t, e.configOverride)), o && t.operatorAvatars.length === 0 && (t = {
			...t,
			operatorAvatars: Ko.operatorAvatars
		}), t;
	}, [
		n.config,
		i,
		e.configOverride,
		o
	]), c = e.styleRoot;
	b(() => {
		s.theme && (ns(s.theme, c ?? document), Go(s.theme.fontFamily));
	}, [s.theme, c]);
	let l = e.onLocaleStrategy;
	return b(() => {
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
		isLoading: n.isLoading
	};
}
function Yo(e, t) {
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
		theme: t.theme === void 0 ? e.theme : t.theme
	};
}
var Xo = {
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
}, Zo = {
	sm: "--wx-radius-sm",
	md: "--wx-radius",
	lg: "--wx-radius-lg",
	xl: "--wx-radius-xl"
};
function Qo(e) {
	return e ? Object.entries(e).filter(([, e]) => typeof e == "string" && e.length > 0).map(([e, t]) => `${Xo[e]}: ${t};`).join(" ") : "";
}
function $o(e) {
	return e ? Object.entries(e).filter(([, e]) => typeof e == "number" && Number.isFinite(e)).map(([e, t]) => `${Zo[e]}: ${t}px;`).join(" ") : "";
}
var es = /* @__PURE__ */ new WeakMap();
function ts(e) {
	let t = [$o(e.radii), typeof e.fontFamily == "string" && e.fontFamily.trim().length > 0 ? `--wx-font: ${e.fontFamily};` : ""].filter(Boolean).join(" "), n = [Qo(e.light), t].filter(Boolean).join(" "), r = [Qo(e.dark), t].filter(Boolean).join(" "), i = [];
	return n && i.push(`:root, :host { ${n} }`), r && i.push(`[data-theme="dark"] { ${r} }`), i.join(" ");
}
function ns(e, t) {
	let n = ts(e);
	if (!(t instanceof Document)) {
		let e = t;
		if (typeof CSSStyleSheet < "u" && "replaceSync" in CSSStyleSheet.prototype) {
			let t = es.get(e);
			t || (t = new CSSStyleSheet(), es.set(e, t), e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]), t.replaceSync(n);
			return;
		}
		let r = e.querySelector("#wexio-theme-vars");
		r || (r = document.createElement("style"), r.id = "wexio-theme-vars", e.appendChild(r)), r.textContent = n;
		return;
	}
	let r = t.getElementById("wexio-theme-vars");
	r || (r = document.createElement("style"), r.id = "wexio-theme-vars", t.head.appendChild(r)), r.textContent = n;
}
var rs = m("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), is = m("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), as = m("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), os = m("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), ss = m("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function cs(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function ls(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = cs(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : cs(e[t], null);
			}
		};
	};
}
function Y(...e) {
	return h.useCallback(ls(...e), e);
}
//#endregion
//#region components/ui/card.tsx
var us = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: f("rounded-wx-lg bg-wx-bg-elevated text-wx-fg", e),
	...t
}));
us.displayName = "Card";
var ds = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: f("rounded-wx bg-wx-bg-elevated-2 text-wx-fg", e),
	...t
}));
ds.displayName = "CardNested";
var fs = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: f("flex flex-col gap-1 px-5 pt-5", e),
	...t
}));
fs.displayName = "CardHeader";
var ps = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("p", {
	ref: n,
	className: f("text-base font-semibold text-wx-fg", e),
	...t
}));
ps.displayName = "CardTitle";
var ms = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("p", {
	ref: n,
	className: f("text-sm text-wx-fg-muted", e),
	...t
}));
ms.displayName = "CardSubtitle";
var hs = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: f("px-5 py-4", e),
	...t
}));
hs.displayName = "CardBody";
var gs = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: f("flex items-center justify-between px-5 py-3 border-t border-wx-border", e),
	...t
}));
gs.displayName = "CardFooter";
//#endregion
//#region node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function _s(e) {
	let t = /* @__PURE__ */ vs(e), n = h.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = h.Children.toArray(r), o = a.find(bs);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? h.Children.count(e) > 1 ? h.Children.only(null) : h.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ w(t, {
				...i,
				ref: n,
				children: h.isValidElement(e) ? h.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ w(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function vs(e) {
	let t = h.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (h.isValidElement(n)) {
			let e = Ss(n), i = xs(r, n.props);
			return n.type !== h.Fragment && (i.ref = t ? ls(t, e) : e), h.cloneElement(n, i);
		}
		return h.Children.count(n) > 1 ? h.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var ys = Symbol("radix.slottable");
function bs(e) {
	return h.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ys;
}
function xs(e, t) {
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
function Ss(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var Cs = [
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
	let n = /* @__PURE__ */ _s(`Primitive.${t}`), r = h.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ w(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function ws(e, t) {
	e && T.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Ts = globalThis?.document ? h.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
function Es(e, t) {
	return h.useReducer((e, n) => t[e][n] ?? e, e);
}
var Ds = (e) => {
	let { present: t, children: n } = e, r = Os(t), i = typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n), a = Y(r.ref, As(i));
	return typeof n == "function" || r.isPresent ? h.cloneElement(i, { ref: a }) : null;
};
Ds.displayName = "Presence";
function Os(e) {
	let [t, n] = h.useState(), r = h.useRef(null), i = h.useRef(e), a = h.useRef("none"), [o, s] = Es(e ? "mounted" : "unmounted", {
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
	return h.useEffect(() => {
		let e = ks(r.current);
		a.current = o === "mounted" ? e : "none";
	}, [o]), Ts(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = ks(t);
			e ? s("MOUNT") : o === "none" || t?.display === "none" ? s("UNMOUNT") : s(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, s]), Ts(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = ks(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (s("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = ks(r.current));
			};
			return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		} else s("ANIMATION_END");
	}, [t, s]), {
		isPresent: ["mounted", "unmountSuspended"].includes(o),
		ref: h.useCallback((e) => {
			r.current = e ? getComputedStyle(e) : null, n(e);
		}, [])
	};
}
function ks(e) {
	return e?.animationName || "none";
}
function As(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
function js(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = h.createContext(r), a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = h.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ w(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = h.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => h.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return h.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, Ms(i, ...t)];
}
function Ms(...e) {
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
			return h.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function X(e) {
	let t = h.useRef(e);
	return h.useEffect(() => {
		t.current = e;
	}), h.useMemo(() => (...e) => t.current?.(...e), []);
}
//#endregion
//#region node_modules/@radix-ui/react-direction/dist/index.mjs
var Ns = h.createContext(void 0);
function Ps(e) {
	let t = h.useContext(Ns);
	return e || t || "ltr";
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
function Fs(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
typeof window < "u" && window.document && window.document.createElement;
function Z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region node_modules/@radix-ui/react-scroll-area/dist/index.mjs
function Is(e, t) {
	return h.useReducer((e, n) => t[e][n] ?? e, e);
}
var Ls = "ScrollArea", [Rs, zs] = js(Ls), [Bs, Q] = Rs(Ls), Vs = h.forwardRef((e, t) => {
	let { __scopeScrollArea: n, type: r = "hover", dir: i, scrollHideDelay: a = 600, ...o } = e, [s, c] = h.useState(null), [l, u] = h.useState(null), [d, f] = h.useState(null), [p, m] = h.useState(null), [g, _] = h.useState(null), [v, y] = h.useState(0), [ee, b] = h.useState(0), [x, te] = h.useState(!1), [S, C] = h.useState(!1), ne = Y(t, (e) => c(e)), re = Ps(i);
	return /* @__PURE__ */ w(Bs, {
		scope: n,
		type: r,
		dir: re,
		scrollHideDelay: a,
		scrollArea: s,
		viewport: l,
		onViewportChange: u,
		content: d,
		onContentChange: f,
		scrollbarX: p,
		onScrollbarXChange: m,
		scrollbarXEnabled: x,
		onScrollbarXEnabledChange: te,
		scrollbarY: g,
		onScrollbarYChange: _,
		scrollbarYEnabled: S,
		onScrollbarYEnabledChange: C,
		onCornerWidthChange: y,
		onCornerHeightChange: b,
		children: /* @__PURE__ */ w(Cs.div, {
			dir: re,
			...o,
			ref: ne,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": v + "px",
				"--radix-scroll-area-corner-height": ee + "px",
				...e.style
			}
		})
	});
});
Vs.displayName = Ls;
var Hs = "ScrollAreaViewport", Us = h.forwardRef((e, t) => {
	let { __scopeScrollArea: n, children: r, nonce: i, ...a } = e, o = Q(Hs, n), s = Y(t, h.useRef(null), o.onViewportChange);
	return /* @__PURE__ */ ie(re, { children: [/* @__PURE__ */ w("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
		nonce: i
	}), /* @__PURE__ */ w(Cs.div, {
		"data-radix-scroll-area-viewport": "",
		...a,
		ref: s,
		style: {
			overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
			...e.style
		},
		children: /* @__PURE__ */ w("div", {
			ref: o.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children: r
		})
	})] });
});
Us.displayName = Hs;
var $ = "ScrollAreaScrollbar", Ws = h.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Q($, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: o } = i, s = e.orientation === "horizontal";
	return h.useEffect(() => (s ? a(!0) : o(!0), () => {
		s ? a(!1) : o(!1);
	}), [
		s,
		a,
		o
	]), i.type === "hover" ? /* @__PURE__ */ w(Gs, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "scroll" ? /* @__PURE__ */ w(Ks, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "auto" ? /* @__PURE__ */ w(qs, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "always" ? /* @__PURE__ */ w(Js, {
		...r,
		ref: t
	}) : null;
});
Ws.displayName = $;
var Gs = h.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Q($, e.__scopeScrollArea), [a, o] = h.useState(!1);
	return h.useEffect(() => {
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
	}, [i.scrollArea, i.scrollHideDelay]), /* @__PURE__ */ w(Ds, {
		present: n || a,
		children: /* @__PURE__ */ w(qs, {
			"data-state": a ? "visible" : "hidden",
			...r,
			ref: t
		})
	});
}), Ks = h.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Q($, e.__scopeScrollArea), a = e.orientation === "horizontal", o = mc(() => c("SCROLL_END"), 100), [s, c] = Is("hidden", {
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
	return h.useEffect(() => {
		if (s === "idle") {
			let e = window.setTimeout(() => c("HIDE"), i.scrollHideDelay);
			return () => window.clearTimeout(e);
		}
	}, [
		s,
		i.scrollHideDelay,
		c
	]), h.useEffect(() => {
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
	]), /* @__PURE__ */ w(Ds, {
		present: n || s !== "hidden",
		children: /* @__PURE__ */ w(Js, {
			"data-state": s === "hidden" ? "hidden" : "visible",
			...r,
			ref: t,
			onPointerEnter: Z(e.onPointerEnter, () => c("POINTER_ENTER")),
			onPointerLeave: Z(e.onPointerLeave, () => c("POINTER_LEAVE"))
		})
	});
}), qs = h.forwardRef((e, t) => {
	let n = Q($, e.__scopeScrollArea), { forceMount: r, ...i } = e, [a, o] = h.useState(!1), s = e.orientation === "horizontal", c = mc(() => {
		if (n.viewport) {
			let e = n.viewport.offsetWidth < n.viewport.scrollWidth, t = n.viewport.offsetHeight < n.viewport.scrollHeight;
			o(s ? e : t);
		}
	}, 10);
	return hc(n.viewport, c), hc(n.content, c), /* @__PURE__ */ w(Ds, {
		present: r || a,
		children: /* @__PURE__ */ w(Js, {
			"data-state": a ? "visible" : "hidden",
			...i,
			ref: t
		})
	});
}), Js = h.forwardRef((e, t) => {
	let { orientation: n = "vertical", ...r } = e, i = Q($, e.__scopeScrollArea), a = h.useRef(null), o = h.useRef(0), [s, c] = h.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), l = sc(s.viewport, s.content), u = {
		...r,
		sizes: s,
		onSizesChange: c,
		hasThumb: l > 0 && l < 1,
		onThumbChange: (e) => a.current = e,
		onThumbPointerUp: () => o.current = 0,
		onThumbPointerDown: (e) => o.current = e
	};
	function d(e, t) {
		return lc(e, o.current, s, t);
	}
	return n === "horizontal" ? /* @__PURE__ */ w(Ys, {
		...u,
		ref: t,
		onThumbPositionChange: () => {
			if (i.viewport && a.current) {
				let e = i.viewport.scrollLeft, t = uc(e, s, i.dir);
				a.current.style.transform = `translate3d(${t}px, 0, 0)`;
			}
		},
		onWheelScroll: (e) => {
			i.viewport && (i.viewport.scrollLeft = e);
		},
		onDragScroll: (e) => {
			i.viewport && (i.viewport.scrollLeft = d(e, i.dir));
		}
	}) : n === "vertical" ? /* @__PURE__ */ w(Xs, {
		...u,
		ref: t,
		onThumbPositionChange: () => {
			if (i.viewport && a.current) {
				let e = i.viewport.scrollTop, t = uc(e, s);
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
}), Ys = h.forwardRef((e, t) => {
	let { sizes: n, onSizesChange: r, ...i } = e, a = Q($, e.__scopeScrollArea), [o, s] = h.useState(), c = h.useRef(null), l = Y(t, c, a.onScrollbarXChange);
	return h.useEffect(() => {
		c.current && s(getComputedStyle(c.current));
	}, [c]), /* @__PURE__ */ w($s, {
		"data-orientation": "horizontal",
		...i,
		ref: l,
		sizes: n,
		style: {
			bottom: 0,
			left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": cc(n) + "px",
			...e.style
		},
		onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
		onDragScroll: (t) => e.onDragScroll(t.x),
		onWheelScroll: (t, n) => {
			if (a.viewport) {
				let r = a.viewport.scrollLeft + t.deltaX;
				e.onWheelScroll(r), fc(r, n) && t.preventDefault();
			}
		},
		onResize: () => {
			c.current && a.viewport && o && r({
				content: a.viewport.scrollWidth,
				viewport: a.viewport.offsetWidth,
				scrollbar: {
					size: c.current.clientWidth,
					paddingStart: oc(o.paddingLeft),
					paddingEnd: oc(o.paddingRight)
				}
			});
		}
	});
}), Xs = h.forwardRef((e, t) => {
	let { sizes: n, onSizesChange: r, ...i } = e, a = Q($, e.__scopeScrollArea), [o, s] = h.useState(), c = h.useRef(null), l = Y(t, c, a.onScrollbarYChange);
	return h.useEffect(() => {
		c.current && s(getComputedStyle(c.current));
	}, [c]), /* @__PURE__ */ w($s, {
		"data-orientation": "vertical",
		...i,
		ref: l,
		sizes: n,
		style: {
			top: 0,
			right: a.dir === "ltr" ? 0 : void 0,
			left: a.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": cc(n) + "px",
			...e.style
		},
		onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
		onDragScroll: (t) => e.onDragScroll(t.y),
		onWheelScroll: (t, n) => {
			if (a.viewport) {
				let r = a.viewport.scrollTop + t.deltaY;
				e.onWheelScroll(r), fc(r, n) && t.preventDefault();
			}
		},
		onResize: () => {
			c.current && a.viewport && o && r({
				content: a.viewport.scrollHeight,
				viewport: a.viewport.offsetHeight,
				scrollbar: {
					size: c.current.clientHeight,
					paddingStart: oc(o.paddingTop),
					paddingEnd: oc(o.paddingBottom)
				}
			});
		}
	});
}), [Zs, Qs] = Rs($), $s = h.forwardRef((e, t) => {
	let { __scopeScrollArea: n, sizes: r, hasThumb: i, onThumbChange: a, onThumbPointerUp: o, onThumbPointerDown: s, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...f } = e, p = Q($, n), [m, g] = h.useState(null), _ = Y(t, (e) => g(e)), v = h.useRef(null), y = h.useRef(""), ee = p.viewport, b = r.content - r.viewport, x = X(u), te = X(c), S = mc(d, 10);
	function C(e) {
		v.current && l({
			x: e.clientX - v.current.left,
			y: e.clientY - v.current.top
		});
	}
	return h.useEffect(() => {
		let e = (e) => {
			let t = e.target;
			m?.contains(t) && x(e, b);
		};
		return document.addEventListener("wheel", e, { passive: !1 }), () => document.removeEventListener("wheel", e, { passive: !1 });
	}, [
		ee,
		m,
		b,
		x
	]), h.useEffect(te, [r, te]), hc(m, S), hc(p.content, S), /* @__PURE__ */ w(Zs, {
		scope: n,
		scrollbar: m,
		hasThumb: i,
		onThumbChange: X(a),
		onThumbPointerUp: X(o),
		onThumbPositionChange: te,
		onThumbPointerDown: X(s),
		children: /* @__PURE__ */ w(Cs.div, {
			...f,
			ref: _,
			style: {
				position: "absolute",
				...f.style
			},
			onPointerDown: Z(e.onPointerDown, (e) => {
				e.button === 0 && (e.target.setPointerCapture(e.pointerId), v.current = m.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e));
			}),
			onPointerMove: Z(e.onPointerMove, C),
			onPointerUp: Z(e.onPointerUp, (e) => {
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = y.current, p.viewport && (p.viewport.style.scrollBehavior = ""), v.current = null;
			})
		})
	});
}), ec = "ScrollAreaThumb", tc = h.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Qs(ec, e.__scopeScrollArea);
	return /* @__PURE__ */ w(Ds, {
		present: n || i.hasThumb,
		children: /* @__PURE__ */ w(nc, {
			ref: t,
			...r
		})
	});
}), nc = h.forwardRef((e, t) => {
	let { __scopeScrollArea: n, style: r, ...i } = e, a = Q(ec, n), o = Qs(ec, n), { onThumbPositionChange: s } = o, c = Y(t, (e) => o.onThumbChange(e)), l = h.useRef(void 0), u = mc(() => {
		l.current && (l.current(), l.current = void 0);
	}, 100);
	return h.useEffect(() => {
		let e = a.viewport;
		if (e) {
			let t = () => {
				u(), l.current || (l.current = pc(e, s), s());
			};
			return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
		}
	}, [
		a.viewport,
		u,
		s
	]), /* @__PURE__ */ w(Cs.div, {
		"data-state": o.hasThumb ? "visible" : "hidden",
		...i,
		ref: c,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...r
		},
		onPointerDownCapture: Z(e.onPointerDownCapture, (e) => {
			let t = e.target.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top;
			o.onThumbPointerDown({
				x: n,
				y: r
			});
		}),
		onPointerUp: Z(e.onPointerUp, o.onThumbPointerUp)
	});
});
tc.displayName = ec;
var rc = "ScrollAreaCorner", ic = h.forwardRef((e, t) => {
	let n = Q(rc, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
	return n.type !== "scroll" && r ? /* @__PURE__ */ w(ac, {
		...e,
		ref: t
	}) : null;
});
ic.displayName = rc;
var ac = h.forwardRef((e, t) => {
	let { __scopeScrollArea: n, ...r } = e, i = Q(rc, n), [a, o] = h.useState(0), [s, c] = h.useState(0), l = !!(a && s);
	return hc(i.scrollbarX, () => {
		let e = i.scrollbarX?.offsetHeight || 0;
		i.onCornerHeightChange(e), c(e);
	}), hc(i.scrollbarY, () => {
		let e = i.scrollbarY?.offsetWidth || 0;
		i.onCornerWidthChange(e), o(e);
	}), l ? /* @__PURE__ */ w(Cs.div, {
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
function oc(e) {
	return e ? parseInt(e, 10) : 0;
}
function sc(e, t) {
	let n = e / t;
	return isNaN(n) ? 0 : n;
}
function cc(e) {
	let t = sc(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
	return Math.max(r, 18);
}
function lc(e, t, n, r = "ltr") {
	let i = cc(n), a = i / 2, o = t || a, s = i - o, c = n.scrollbar.paddingStart + o, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
	return dc([c, l], d)(e);
}
function uc(e, t, n = "ltr") {
	let r = cc(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, o = t.content - t.viewport, s = a - r, c = Fs(e, n === "ltr" ? [0, o] : [o * -1, 0]);
	return dc([0, o], [0, s])(c);
}
function dc(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function fc(e, t) {
	return e > 0 && e < t;
}
var pc = (e, t = () => {}) => {
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
function mc(e, t) {
	let n = X(e), r = h.useRef(0);
	return h.useEffect(() => () => window.clearTimeout(r.current), []), h.useCallback(() => {
		window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
	}, [n, t]);
}
function hc(e, t) {
	let n = X(t);
	Ts(() => {
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
var gc = Vs, _c = Us, vc = ic;
//#endregion
//#region components/ui/scroll-area.tsx
function yc({ className: e, viewportRef: t, children: n, onScroll: r, ...i }) {
	return /* @__PURE__ */ ie(gc, {
		"data-slot": "scroll-area",
		className: f("relative min-h-0 min-w-0 overflow-hidden", e),
		...i,
		children: [
			/* @__PURE__ */ w(_c, {
				ref: t,
				"data-slot": "scroll-area-viewport",
				onScroll: r,
				className: f("h-full w-full rounded-[inherit]", "[&>div]:!block [&>div]:!w-full [&>div]:!max-w-full", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary/40"),
				children: n
			}),
			/* @__PURE__ */ w(bc, {}),
			/* @__PURE__ */ w(vc, {})
		]
	});
}
function bc({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ w(Ws, {
		"data-slot": "scroll-area-scrollbar",
		orientation: t,
		className: f("flex touch-none select-none transition-opacity duration-150", "opacity-0 data-[state=visible]:opacity-100", "hover:opacity-100", t === "vertical" && "h-full w-1.5 border-l border-l-transparent p-px", t === "horizontal" && "h-1.5 flex-col border-t border-t-transparent p-px", e),
		...n,
		children: /* @__PURE__ */ w(tc, {
			"data-slot": "scroll-area-thumb",
			className: f("relative flex-1 rounded-full", "bg-wx-fg-muted/40 hover:bg-wx-fg-muted/60 transition-colors")
		})
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message/media-lightbox.tsx
function xc({ items: e, initialIndex: t, open: r, onClose: i }) {
	let a = d("lightbox"), [o, s] = ne(t), c = ko(), l = c.embedded ?? !1, u = !l || (c.lightboxViewport ?? !1);
	b(() => {
		r && s(t);
	}, [r, t]);
	let p = e.length, m = e[o], h = y(() => {
		s((e) => (e + 1) % p);
	}, [p]), g = y(() => {
		s((e) => (e - 1 + p) % p);
	}, [p]);
	b(() => {
		if (!r) return;
		let e = (e) => {
			e.key === "Escape" ? i() : e.key === "ArrowRight" ? h() : e.key === "ArrowLeft" && g();
		};
		document.addEventListener("keydown", e);
		let t = document.body.style.overflow;
		return u && (document.body.style.overflow = "hidden"), () => {
			document.removeEventListener("keydown", e), u && (document.body.style.overflow = t);
		};
	}, [
		r,
		i,
		h,
		g,
		u
	]);
	let _ = l ? c.themeRoot ?? null : typeof document < "u" ? document.body : null;
	return _ ? ae(/* @__PURE__ */ w(Co, { children: r && m && /* @__PURE__ */ ie(n.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .15 },
		onClick: i,
		className: f(u ? "fixed" : "absolute", "inset-0 z-[2147483647] flex items-center justify-center", "bg-black/85 backdrop-blur-sm"),
		role: "dialog",
		"aria-modal": "true",
		"aria-label": m.alt || a("mediaPreview"),
		children: [
			/* @__PURE__ */ w("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), i();
				},
				"aria-label": a("close"),
				className: f("absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ w(ss, { size: 18 })
			}),
			p > 1 && /* @__PURE__ */ ie(re, { children: [/* @__PURE__ */ w("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), g();
				},
				"aria-label": a("previous"),
				className: f("absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ w(as, { size: 20 })
			}), /* @__PURE__ */ w("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), h();
				},
				"aria-label": a("next"),
				className: f("absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ w(os, { size: 20 })
			})] }),
			/* @__PURE__ */ w(n.div, {
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
				className: f("pointer-events-none flex items-center justify-center", u ? "max-h-[90vh] max-w-[90vw]" : "absolute inset-0 p-6"),
				children: m.mimetype.startsWith("video/") ? /* @__PURE__ */ w("video", {
					src: m.url,
					controls: !0,
					autoPlay: !0,
					onClick: (e) => e.stopPropagation(),
					className: f("pointer-events-auto rounded-wx-lg", u ? "max-h-[90vh] max-w-[90vw]" : "max-h-full max-w-full")
				}) : m.mimetype === "application/pdf" ? /* @__PURE__ */ w("iframe", {
					src: m.url,
					title: m.alt || "PDF preview",
					onClick: (e) => e.stopPropagation(),
					className: f("pointer-events-auto rounded-wx-lg border-0 bg-white", u ? "h-[90vh] w-[90vw]" : "h-full w-full")
				}) : /* @__PURE__ */ w(n.img, {
					src: m.url,
					alt: m.alt,
					onClick: (e) => e.stopPropagation(),
					draggable: !1,
					drag: p > 1 ? "x" : !1,
					dragConstraints: {
						left: 0,
						right: 0
					},
					dragElastic: .18,
					dragMomentum: !1,
					onDragEnd: (e, t) => {
						t.offset.x <= -60 ? h() : t.offset.x >= 60 && g();
					},
					className: f("pointer-events-auto rounded-wx-lg object-contain", p > 1 && "cursor-grab active:cursor-grabbing", u ? "max-h-[90vh] max-w-[90vw]" : "max-h-full max-w-full")
				})
			}, `${o}-${m.url}`),
			p > 1 && /* @__PURE__ */ ie("div", {
				className: "absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white",
				children: [
					o + 1,
					" / ",
					p
				]
			})
		]
	}, "media-lightbox") }), _) : null;
}
//#endregion
export { Gi as $, tt as $t, eo as A, Rn as At, Sa as B, sn as Bt, Uo as C, Wn as Ct, To as D, Hn as Dt, ko as E, Un as Et, Xa as F, wn as Ft, ca as G, $t as Gt, _a as H, on as Ht, J as I, Sn as It, U as J, Vt as Jt, la as K, Yt as Kt, Va as L, yn as Lt, to as M, En as Mt, so as N, Dn as Nt, Co as O, or as Ot, qa as P, Tn as Pt, V as Q, Lt as Qt, G as R, cn as Rt, qo as S, sr as St, Oo as T, lr as Tt, pa as U, tn as Ut, W as V, un as Vt, fa as W, Qt as Wt, qi as X, zt as Xt, Ji as Y, Bt as Yt, B as Z, It as Zt, ss as _, dr as _t, Ps as a, xe as an, ji as at, rs as b, ar as bt, Ts as c, E as cn, ii as ct, us as d, ue as dn, wr as dt, M as en, zi as et, hs as f, ce as fn, ur as ft, Y as g, gr as gt, ls as h, pr as ht, Fs as i, Se as in, Fi as it, ao as j, On as jt, po as k, tr as kt, Cs as l, le as ln, ni as lt, ps as m, hr as mt, yc as n, A as nn, Li as nt, X as o, k as on, Oi as ot, ms as p, D as pn, _r as pt, ua as q, Wt as qt, Z as r, we as rn, Ii as rt, js as s, ve as sn, ri as st, xc as t, ke as tn, Ri as tt, ws as u, se as un, Qr as ut, os as v, fr as vt, Mo as w, cr as wt, Jo as x, ir as xt, is as y, mr as yt, ba as z, ln as zt };

//# sourceMappingURL=widget-react-BfPdgAQ-.js.map