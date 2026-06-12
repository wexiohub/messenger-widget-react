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
import { S as e, _ as t, d as n, f as r, g as i, h as a, m as o, p as s, v as c, w as l, y as u } from "./widget-react-B9XrHKqv.js";
import { i as d, n as f, o as p, t as m } from "./widget-react-CQ0DMi7b.js";
import * as h from "react";
import { Children as g, createContext as _, isValidElement as v, useCallback as y, useContext as ee, useEffect as b, useId as x, useInsertionEffect as te, useLayoutEffect as ne, useMemo as S, useRef as re, useState as C } from "react";
import { Fragment as ie, jsx as w, jsxs as T } from "react/jsx-runtime";
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
var E = function() {
	return E = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, E.apply(this, arguments);
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
function D(e, t, n) {
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
function O(e, t) {
	if (!e) throw new he(t);
}
var ge = [
	"debug",
	"log",
	"warn",
	"error",
	"silent"
], _e = ge.indexOf("log");
function ve(e) {
	return function() {
		if (ge.indexOf(e) >= _e) return (console[e] || console.log).apply(console, arguments);
	};
}
(function(e) {
	e.debug = ve("debug"), e.log = ve("log"), e.warn = ve("warn"), e.error = ve("error");
})(O || (O = {}));
//#endregion
//#region node_modules/@apollo/client/version.js
var ye = "3.14.1";
//#endregion
//#region node_modules/@apollo/client/utilities/globals/maybe.js
function k(e) {
	try {
		return e();
	} catch {}
}
//#endregion
//#region node_modules/@apollo/client/utilities/globals/global.js
var be = k(function() {
	return globalThis;
}) || k(function() {
	return window;
}) || k(function() {
	return self;
}) || k(function() {
	return global;
}) || k(function() {
	return k.constructor("return this")();
}), xe = /* @__PURE__ */ new Map();
function Se(e) {
	var t = xe.get(e) || 1;
	return xe.set(e, t + 1), `${e}:${t}:${Math.random().toString(36).slice(2)}`;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/stringifyForDisplay.js
function Ce(e, t) {
	t === void 0 && (t = 0);
	var n = Se("stringifyForDisplay");
	return JSON.stringify(e, function(e, t) {
		return t === void 0 ? n : t;
	}, t).split(JSON.stringify(n)).join("<undefined>");
}
//#endregion
//#region node_modules/@apollo/client/utilities/globals/invariantWrappers.js
function we(e) {
	return function(t) {
		var n = [...arguments].slice(1);
		if (typeof t == "number") {
			var r = t;
			t = Oe(r), t || (t = ke(r, n), n = []);
		}
		e.apply(void 0, [t].concat(n));
	};
}
var A = Object.assign(function(e, t) {
	var n = [...arguments].slice(2);
	e || O(e, Oe(t, n) || ke(t, n));
}, {
	debug: we(O.debug),
	log: we(O.log),
	warn: we(O.warn),
	error: we(O.error)
});
function Te(e) {
	var t = [...arguments].slice(1);
	return new he(Oe(e, t) || ke(e, t));
}
var Ee = Symbol.for("ApolloErrorMessageHandler_" + ye);
function De(e) {
	if (typeof e == "string") return e;
	try {
		return Ce(e, 2).slice(0, 1e3);
	} catch {
		return "<non-serializable>";
	}
}
function Oe(e, t) {
	if (t === void 0 && (t = []), e) return be[Ee] && be[Ee](e, t.map(De));
}
function ke(e, t) {
	if (t === void 0 && (t = []), e) return `An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({
		version: ye,
		message: e,
		args: t.map(De)
	}))}`;
}
//#endregion
//#region node_modules/rehackt/index.js
var Ae = /* @__PURE__ */ u(((t, n) => {
	n.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, n.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, n.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(n.exports, e("react"));
}));
//#endregion
//#region node_modules/graphql/jsutils/devAssert.mjs
function je(e, t) {
	if (!e) throw Error(t);
}
//#endregion
//#region node_modules/graphql/jsutils/isObjectLike.mjs
function Me(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/graphql/jsutils/invariant.mjs
function Ne(e, t) {
	if (!e) throw Error(t ?? "Unexpected invariant triggered.");
}
//#endregion
//#region node_modules/graphql/language/location.mjs
var Pe = /\r\n|[\n\r]/g;
function Fe(e, t) {
	let n = 0, r = 1;
	for (let i of e.body.matchAll(Pe)) {
		if (typeof i.index == "number" || Ne(!1), i.index >= t) break;
		n = i.index + i[0].length, r += 1;
	}
	return {
		line: r,
		column: t + 1 - n
	};
}
//#endregion
//#region node_modules/graphql/language/printLocation.mjs
function Ie(e) {
	return Le(e.source, Fe(e.source, e.start));
}
function Le(e, t) {
	let n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? n : 0, c = t.column + s, l = `${e.name}:${o}:${c}\n`, u = r.split(/\r\n|[\n\r]/g), d = u[i];
	if (d.length > 120) {
		let e = Math.floor(c / 80), t = c % 80, n = [];
		for (let e = 0; e < d.length; e += 80) n.push(d.slice(e, e + 80));
		return l + Re([
			[`${o} |`, n[0]],
			...n.slice(1, e + 1).map((e) => ["|", e]),
			["|", "^".padStart(t)],
			["|", n[e + 1]]
		]);
	}
	return l + Re([
		[`${o - 1} |`, u[i - 1]],
		[`${o} |`, d],
		["|", "^".padStart(c)],
		[`${o + 1} |`, u[i + 1]]
	]);
}
function Re(e) {
	let t = e.filter(([e, t]) => t !== void 0), n = Math.max(...t.map(([e]) => e.length));
	return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n");
}
//#endregion
//#region node_modules/graphql/error/GraphQLError.mjs
function ze(e) {
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
var Be = class e extends Error {
	constructor(t, ...n) {
		let { nodes: r, source: i, positions: a, path: o, originalError: s, extensions: c } = ze(n);
		super(t), this.name = "GraphQLError", this.path = o ?? void 0, this.originalError = s ?? void 0, this.nodes = Ve(Array.isArray(r) ? r : r ? [r] : void 0);
		let l = Ve(this.nodes?.map((e) => e.loc).filter((e) => e != null));
		this.source = i ?? l?.[0]?.source, this.positions = a ?? l?.map((e) => e.start), this.locations = a && i ? a.map((e) => Fe(i, e)) : l?.map((e) => Fe(e.source, e.start));
		let u = Me(s?.extensions) ? s?.extensions : void 0;
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
		if (this.nodes) for (let t of this.nodes) t.loc && (e += "\n\n" + Ie(t.loc));
		else if (this.source && this.locations) for (let t of this.locations) e += "\n\n" + Le(this.source, t);
		return e;
	}
	toJSON() {
		let e = { message: this.message };
		return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
	}
};
function Ve(e) {
	return e === void 0 || e.length === 0 ? void 0 : e;
}
//#endregion
//#region node_modules/graphql/error/syntaxError.mjs
function j(e, t, n) {
	return new Be(`Syntax Error: ${n}`, {
		source: e,
		positions: [t]
	});
}
//#endregion
//#region node_modules/graphql/language/ast.mjs
var He = class {
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
}, Ue = class {
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
}, We = {
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
}, Ge = new Set(Object.keys(We));
function Ke(e) {
	let t = e?.kind;
	return typeof t == "string" && Ge.has(t);
}
var qe;
(function(e) {
	e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(qe || (qe = {}));
//#endregion
//#region node_modules/graphql/language/directiveLocation.mjs
var Je;
(function(e) {
	e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", e.DIRECTIVE_DEFINITION = "DIRECTIVE_DEFINITION";
})(Je || (Je = {}));
//#endregion
//#region node_modules/graphql/language/kinds.mjs
var M;
(function(e) {
	e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.DIRECTIVE_EXTENSION = "DirectiveExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", e.TYPE_COORDINATE = "TypeCoordinate", e.MEMBER_COORDINATE = "MemberCoordinate", e.ARGUMENT_COORDINATE = "ArgumentCoordinate", e.DIRECTIVE_COORDINATE = "DirectiveCoordinate", e.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
})(M || (M = {}));
//#endregion
//#region node_modules/graphql/language/characterClasses.mjs
function Ye(e) {
	return e === 9 || e === 32;
}
function Xe(e) {
	return e >= 48 && e <= 57;
}
function Ze(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Qe(e) {
	return Ze(e) || e === 95;
}
function $e(e) {
	return Ze(e) || Xe(e) || e === 95;
}
//#endregion
//#region node_modules/graphql/language/blockString.mjs
function et(e) {
	let t = 2 ** 53 - 1, n = null, r = -1;
	for (let i = 0; i < e.length; ++i) {
		let a = e[i], o = tt(a);
		o !== a.length && (n = n ?? i, r = i, i !== 0 && o < t && (t = o));
	}
	return e.map((e, n) => n === 0 ? e : e.slice(t)).slice(n ?? 0, r + 1);
}
function tt(e) {
	let t = 0;
	for (; t < e.length && Ye(e.charCodeAt(t));) ++t;
	return t;
}
function nt(e, t) {
	let n = e.replace(/"""/g, "\\\"\"\""), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((e) => e.length === 0 || Ye(e.charCodeAt(0))), o = n.endsWith("\\\"\"\""), s = e.endsWith("\"") && !o, c = e.endsWith("\\"), l = s || c, u = !(t != null && t.minimize) && (!i || e.length > 70 || l || a || o), d = "", f = i && Ye(e.charCodeAt(0));
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
var rt = class {
	constructor(e) {
		let t = new Ue(N.SOF, 0, 0, 0, 0);
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
				let t = lt(this, e.end);
				e.next = t, t.prev = e, e = t;
			}
		while (e.kind === N.COMMENT);
		return e;
	}
};
function it(e) {
	return e === N.BANG || e === N.DOLLAR || e === N.AMP || e === N.PAREN_L || e === N.PAREN_R || e === N.DOT || e === N.SPREAD || e === N.COLON || e === N.EQUALS || e === N.AT || e === N.BRACKET_L || e === N.BRACKET_R || e === N.BRACE_L || e === N.PIPE || e === N.BRACE_R;
}
function at(e) {
	return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function ot(e, t) {
	return st(e.charCodeAt(t)) && ct(e.charCodeAt(t + 1));
}
function st(e) {
	return e >= 55296 && e <= 56319;
}
function ct(e) {
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
	return new Ue(t, n, r, a, 1 + n - e.lineStart, i);
}
function lt(e, t) {
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
			case 35: return ut(e, i);
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
			case 34: return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? yt(e, i) : pt(e, i);
		}
		if (Xe(t) || t === 45) return dt(e, i, t);
		if (Qe(t)) return bt(e, i);
		throw j(e.source, i, t === 39 ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : at(t) || ot(n, i) ? `Unexpected character: ${P(e, i)}.` : `Invalid character: ${P(e, i)}.`);
	}
	return F(e, N.EOF, r, r);
}
function ut(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r;) {
		let e = n.charCodeAt(i);
		if (e === 10 || e === 13) break;
		if (at(e)) ++i;
		else if (ot(n, i)) i += 2;
		else break;
	}
	return F(e, N.COMMENT, t, i, n.slice(t + 1, i));
}
function dt(e, t, n) {
	let r = e.source.body, i = t, a = n, o = !1;
	if (a === 45 && (a = r.charCodeAt(++i)), a === 48) {
		if (a = r.charCodeAt(++i), Xe(a)) throw j(e.source, i, `Invalid number, unexpected digit after 0: ${P(e, i)}.`);
	} else i = ft(e, i, a), a = r.charCodeAt(i);
	if (a === 46 && (o = !0, a = r.charCodeAt(++i), i = ft(e, i, a), a = r.charCodeAt(i)), (a === 69 || a === 101) && (o = !0, a = r.charCodeAt(++i), (a === 43 || a === 45) && (a = r.charCodeAt(++i)), i = ft(e, i, a), a = r.charCodeAt(i)), a === 46 || Qe(a)) throw j(e.source, i, `Invalid number, expected digit but got: ${P(e, i)}.`);
	return F(e, o ? N.FLOAT : N.INT, t, i, r.slice(t, i));
}
function ft(e, t, n) {
	if (!Xe(n)) throw j(e.source, t, `Invalid number, expected digit but got: ${P(e, t)}.`);
	let r = e.source.body, i = t + 1;
	for (; Xe(r.charCodeAt(i));) ++i;
	return i;
}
function pt(e, t) {
	let n = e.source.body, r = n.length, i = t + 1, a = i, o = "";
	for (; i < r;) {
		let r = n.charCodeAt(i);
		if (r === 34) return o += n.slice(a, i), F(e, N.STRING, t, i + 1, o);
		if (r === 92) {
			o += n.slice(a, i);
			let t = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? mt(e, i) : ht(e, i) : vt(e, i);
			o += t.value, i += t.size, a = i;
			continue;
		}
		if (r === 10 || r === 13) break;
		if (at(r)) ++i;
		else if (ot(n, i)) i += 2;
		else throw j(e.source, i, `Invalid character within String: ${P(e, i)}.`);
	}
	throw j(e.source, i, "Unterminated string.");
}
function mt(e, t) {
	let n = e.source.body, r = 0, i = 3;
	for (; i < 12;) {
		let e = n.charCodeAt(t + i++);
		if (e === 125) {
			if (i < 5 || !at(r)) break;
			return {
				value: String.fromCodePoint(r),
				size: i
			};
		}
		if (r = r << 4 | _t(e), r < 0) break;
	}
	throw j(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
}
function ht(e, t) {
	let n = e.source.body, r = gt(n, t + 2);
	if (at(r)) return {
		value: String.fromCodePoint(r),
		size: 6
	};
	if (st(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
		let e = gt(n, t + 8);
		if (ct(e)) return {
			value: String.fromCodePoint(r, e),
			size: 12
		};
	}
	throw j(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function gt(e, t) {
	return _t(e.charCodeAt(t)) << 12 | _t(e.charCodeAt(t + 1)) << 8 | _t(e.charCodeAt(t + 2)) << 4 | _t(e.charCodeAt(t + 3));
}
function _t(e) {
	return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function vt(e, t) {
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
function yt(e, t) {
	let n = e.source.body, r = n.length, i = e.lineStart, a = t + 3, o = a, s = "", c = [];
	for (; a < r;) {
		let r = n.charCodeAt(a);
		if (r === 34 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34) {
			s += n.slice(o, a), c.push(s);
			let r = F(e, N.BLOCK_STRING, t, a + 3, et(c).join("\n"));
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
		if (at(r)) ++a;
		else if (ot(n, a)) a += 2;
		else throw j(e.source, a, `Invalid character within String: ${P(e, a)}.`);
	}
	throw j(e.source, a, "Unterminated string.");
}
function bt(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r && $e(n.charCodeAt(i));) ++i;
	return F(e, N.NAME, t, i, n.slice(t, i));
}
//#endregion
//#region node_modules/graphql/jsutils/inspect.mjs
var xt = 10, St = 2;
function Ct(e) {
	return wt(e, []);
}
function wt(e, t) {
	switch (typeof e) {
		case "string": return JSON.stringify(e);
		case "function": return e.name ? `[function ${e.name}]` : "[function]";
		case "object": return Tt(e, t);
		default: return String(e);
	}
}
function Tt(e, t) {
	if (e === null) return "null";
	if (t.includes(e)) return "[Circular]";
	let n = [...t, e];
	if (Et(e)) {
		let t = e.toJSON();
		if (t !== e) return typeof t == "string" ? t : wt(t, n);
	} else if (Array.isArray(e)) return Ot(e, n);
	return Dt(e, n);
}
function Et(e) {
	return typeof e.toJSON == "function";
}
function Dt(e, t) {
	let n = Object.entries(e);
	return n.length === 0 ? "{}" : t.length > St ? "[" + kt(e) + "]" : "{ " + n.map(([e, n]) => e + ": " + wt(n, t)).join(", ") + " }";
}
function Ot(e, t) {
	if (e.length === 0) return "[]";
	if (t.length > St) return "[Array]";
	let n = Math.min(xt, e.length), r = e.length - n, i = [];
	for (let r = 0; r < n; ++r) i.push(wt(e[r], t));
	return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function kt(e) {
	let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
	if (t === "Object" && typeof e.constructor == "function") {
		let t = e.constructor.name;
		if (typeof t == "string" && t !== "") return t;
	}
	return t;
}
var At = globalThis.process ? function(e, t) {
	return e instanceof t;
} : function(e, t) {
	if (e instanceof t) return !0;
	if (typeof e == "object" && e) {
		let n = t.prototype[Symbol.toStringTag];
		if (n === (Symbol.toStringTag in e ? e[Symbol.toStringTag] : e.constructor?.name)) {
			let t = Ct(e);
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
}, jt = class {
	constructor(e, t = "GraphQL request", n = {
		line: 1,
		column: 1
	}) {
		typeof e == "string" || je(!1, `Body must be a string. Received: ${Ct(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || je(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || je(!1, "column in locationOffset is 1-indexed and must be positive.");
	}
	get [Symbol.toStringTag]() {
		return "Source";
	}
};
function Mt(e) {
	return At(e, jt);
}
//#endregion
//#region node_modules/graphql/language/parser.mjs
function Nt(e, t) {
	let n = new Pt(e, t), r = n.parseDocument();
	return Object.defineProperty(r, "tokenCount", {
		enumerable: !1,
		value: n.tokenCount
	}), r;
}
var Pt = class {
	constructor(e, t = {}) {
		let { lexer: n, ...r } = t;
		if (n) this._lexer = n;
		else {
			let t = Mt(e) ? e : new jt(e);
			this._lexer = new rt(t);
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
			operation: qe.QUERY,
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
			case "query": return qe.QUERY;
			case "mutation": return qe.MUTATION;
			case "subscription": return qe.SUBSCRIPTION;
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
		if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw j(this._lexer.source, this._lexer.token.start, `${Ft(this._lexer.token)} is reserved and cannot be used for an enum value.`);
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
		if (Object.prototype.hasOwnProperty.call(Je, t.value)) return t;
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
		return this._options.noLocation !== !0 && (t.loc = new He(e, this._lexer.lastToken, this._lexer.source)), t;
	}
	peek(e) {
		return this._lexer.token.kind === e;
	}
	expectToken(e) {
		let t = this._lexer.token;
		if (t.kind === e) return this.advanceLexer(), t;
		throw j(this._lexer.source, t.start, `Expected ${It(e)}, found ${Ft(t)}.`);
	}
	expectOptionalToken(e) {
		return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
	}
	expectKeyword(e) {
		let t = this._lexer.token;
		if (t.kind === N.NAME && t.value === e) this.advanceLexer();
		else throw j(this._lexer.source, t.start, `Expected "${e}", found ${Ft(t)}.`);
	}
	expectOptionalKeyword(e) {
		let t = this._lexer.token;
		return t.kind === N.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
	}
	unexpected(e) {
		let t = e ?? this._lexer.token;
		return j(this._lexer.source, t.start, `Unexpected ${Ft(t)}.`);
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
function Ft(e) {
	let t = e.value;
	return It(e.kind) + (t == null ? "" : ` "${t}"`);
}
function It(e) {
	return it(e) ? `"${e}"` : e;
}
//#endregion
//#region node_modules/graphql/language/visitor.mjs
var Lt = Object.freeze({});
function Rt(e, t, n = We) {
	let r = /* @__PURE__ */ new Map();
	for (let e of Object.values(M)) r.set(e, zt(t, e));
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
			if (Ke(l) || je(!1, `Invalid AST Node: ${Ct(l)}.`), h = (e ? r.get(l.kind)?.leave : r.get(l.kind)?.enter)?.call(t, l, u, d, f, p), h === Lt) break;
			if (h === !1) {
				if (!e) {
					f.pop();
					continue;
				}
			} else if (h !== void 0 && (c.push([u, h]), !e)) if (Ke(h)) l = h;
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
function zt(e, t) {
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
function Bt(e, t) {
	var n = e.directives;
	return !n || !n.length ? !0 : Wt(n).every(function(e) {
		var n = e.directive, r = e.ifArgument, i = !1;
		return r.value.kind === "Variable" ? (i = t && t[r.value.name.value], A(i !== void 0, 105, n.name.value)) : i = r.value.value, n.name.value === "skip" ? !i : i;
	});
}
function Vt(e, t, n) {
	var r = new Set(e), i = r.size;
	return Rt(t, { Directive: function(e) {
		if (r.delete(e.name.value) && (!n || !r.size)) return Lt;
	} }), n ? !r.size : r.size < i;
}
function Ht(e) {
	return e && Vt(["client", "export"], e, !0);
}
function Ut(e) {
	var t = e.name.value;
	return t === "skip" || t === "include";
}
function Wt(e) {
	var t = [];
	return e && e.length && e.forEach(function(e) {
		if (Ut(e)) {
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
function Gt(e) {
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
var Kt = () => Object.create(null), { forEach: qt, slice: Jt } = Array.prototype, { hasOwnProperty: Yt } = Object.prototype, Xt = class e {
	constructor(e = !0, t = Kt) {
		this.weakness = e, this.makeData = t;
	}
	lookup() {
		return this.lookupArray(arguments);
	}
	lookupArray(e) {
		let t = this;
		return qt.call(e, (e) => t = t.getChildTrie(e)), Yt.call(t, "data") ? t.data : t.data = this.makeData(Jt.call(e));
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
			i && (t = i.removeArray(Jt.call(e, 1)), !i.data && !i.weak && !(i.strong && i.strong.size) && r.delete(n));
		} else t = this.data, delete this.data;
		return t;
	}
	getChildTrie(t) {
		let n = this.mapFor(t, !0), r = n.get(t);
		return r || n.set(t, r = new e(this.weakness, this.makeData)), r;
	}
	mapFor(e, t) {
		return this.weakness && Zt(e) ? this.weak || (t ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (t ? this.strong = /* @__PURE__ */ new Map() : void 0);
	}
};
function Zt(e) {
	switch (typeof e) {
		case "object": if (e === null) break;
		case "function": return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/canUse.js
var Qt = k(function() {
	return navigator.product;
}) == "ReactNative", $t = typeof WeakMap == "function" && !(Qt && !global.HermesInternal), en = typeof WeakSet == "function", tn = typeof Symbol == "function" && typeof Symbol.for == "function", nn = tn && Symbol.asyncIterator, rn = typeof k(function() {
	return window.document.createElement;
}) == "function", an = k(function() {
	return navigator.userAgent.indexOf("jsdom") >= 0;
}) || !1, on = (rn || Qt) && !an;
//#endregion
//#region node_modules/@apollo/client/utilities/common/objects.js
function sn(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/fragments.js
function cn(e, t) {
	var n = t, r = [];
	return e.definitions.forEach(function(e) {
		if (e.kind === "OperationDefinition") throw Te(112, e.operation, e.name ? ` named '${e.name.value}'` : "");
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
function ln(e) {
	e === void 0 && (e = []);
	var t = {};
	return e.forEach(function(e) {
		t[e.name.value] = e;
	}), t;
}
function un(e, t) {
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
function dn(e) {
	var t = !0;
	return Rt(e, { FragmentSpread: function(e) {
		if (t = !!e.directives && e.directives.some(function(e) {
			return e.name.value === "unmask";
		}), !t) return Lt;
	} }), t;
}
//#endregion
//#region node_modules/@wry/caches/lib/strong.js
function fn() {}
var pn = class {
	constructor(e = Infinity, t = fn) {
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
function mn() {}
var hn = mn, gn = typeof WeakRef < "u" ? WeakRef : function(e) {
	return { deref: () => e };
}, _n = typeof WeakMap < "u" ? WeakMap : Map, vn = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
	return {
		register: mn,
		unregister: mn
	};
}, yn = 10024, bn = class {
	constructor(e = Infinity, t = hn) {
		this.max = e, this.dispose = t, this.map = new _n(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
			let e = this.unfinalizedNodes.values();
			for (let t = 0; t < yn; t++) {
				let t = e.next().value;
				if (!t) break;
				this.unfinalizedNodes.delete(t);
				let n = t.key;
				delete t.key, t.keyRef = new gn(n), this.registry.register(n, t, t);
			}
			this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
		}, this.registry = new vn(this.deleteNode.bind(this));
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
}, xn = /* @__PURE__ */ new WeakSet();
function Sn(e) {
	e.size <= (e.max || -1) || xn.has(e) || (xn.add(e), setTimeout(function() {
		e.clean(), xn.delete(e);
	}, 100));
}
var Cn = function(e, t) {
	var n = new bn(e, t);
	return n.set = function(e, t) {
		var n = bn.prototype.set.call(this, e, t);
		return Sn(this), n;
	}, n;
}, wn = function(e, t) {
	var n = new pn(e, t);
	return n.set = function(e, t) {
		var n = pn.prototype.set.call(this, e, t);
		return Sn(this), n;
	}, n;
}, Tn = E({}, be[Symbol.for("apollo.cacheSize")]), I = {};
function En(e, t) {
	I[e] = t;
}
var Dn = globalThis.__DEV__ === !1 ? void 0 : jn, On = globalThis.__DEV__ === !1 ? void 0 : Nn, kn = globalThis.__DEV__ === !1 ? void 0 : Mn;
function An() {
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
		return [t, Tn[t] || n];
	}));
}
function jn() {
	var e;
	if (globalThis.__DEV__ === !1) throw Error("only supported in development mode");
	return {
		limits: An(),
		sizes: E({
			print: I.print?.call(I),
			parser: I.parser?.call(I),
			canonicalStringify: I.canonicalStringify?.call(I),
			links: Rn(this.link),
			queryManager: {
				getDocumentInfo: this.queryManager.transformCache.size,
				documentTransforms: In(this.queryManager.documentTransform)
			}
		}, (e = this.cache).getMemoryInternals?.call(e))
	};
}
function Mn() {
	return { cache: { fragmentQueryDocuments: L(this.getFragmentDoc) } };
}
function Nn() {
	var e = this.config.fragments;
	return E(E({}, Mn.apply(this)), {
		addTypenameDocumentTransform: In(this.addTypenameTransform),
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
function Pn(e) {
	return !!e && "dirtyKey" in e;
}
function L(e) {
	return Pn(e) ? e.size : void 0;
}
function Fn(e) {
	return e != null;
}
function In(e) {
	return Ln(e).map(function(e) {
		return { cache: e };
	});
}
function Ln(e) {
	return e ? D(D([L(e?.performWork)], Ln(e?.left), !0), Ln(e?.right), !0).filter(Fn) : [];
}
function Rn(e) {
	return e ? D(D([(e?.getMemoryInternals)?.call(e)], Rn(e?.left), !0), Rn(e?.right), !0).filter(Fn) : [];
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/canonicalStringify.js
var zn = Object.assign(function(e) {
	return JSON.stringify(e, Vn);
}, { reset: function() {
	Bn = new wn(Tn.canonicalStringify || 1e3);
} });
globalThis.__DEV__ !== !1 && En("canonicalStringify", function() {
	return Bn.size;
});
var Bn;
zn.reset();
function Vn(e, t) {
	if (t && typeof t == "object") {
		var n = Object.getPrototypeOf(t);
		if (n === Object.prototype || n === null) {
			var r = Object.keys(t);
			if (r.every(Hn)) return t;
			var i = JSON.stringify(r), a = Bn.get(i);
			if (!a) {
				r.sort();
				var o = JSON.stringify(r);
				a = Bn.get(o) || r, Bn.set(i, a), Bn.set(o, a);
			}
			var s = Object.create(n);
			return a.forEach(function(e) {
				s[e] = t[e];
			}), s;
		}
	}
	return t;
}
function Hn(e, t, n) {
	return t === 0 || n[t - 1] <= e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/storeUtils.js
function Un(e) {
	return { __ref: String(e) };
}
function Wn(e) {
	return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function Gn(e) {
	return sn(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function Kn(e) {
	return e.kind === "StringValue";
}
function qn(e) {
	return e.kind === "BooleanValue";
}
function Jn(e) {
	return e.kind === "IntValue";
}
function Yn(e) {
	return e.kind === "FloatValue";
}
function Xn(e) {
	return e.kind === "Variable";
}
function Zn(e) {
	return e.kind === "ObjectValue";
}
function Qn(e) {
	return e.kind === "ListValue";
}
function $n(e) {
	return e.kind === "EnumValue";
}
function er(e) {
	return e.kind === "NullValue";
}
function tr(e, t, n, r) {
	if (Jn(n) || Yn(n)) e[t.value] = Number(n.value);
	else if (qn(n) || Kn(n)) e[t.value] = n.value;
	else if (Zn(n)) {
		var i = {};
		n.fields.map(function(e) {
			return tr(i, e.name, e.value, r);
		}), e[t.value] = i;
	} else if (Xn(n)) {
		var a = (r || {})[n.name.value];
		e[t.value] = a;
	} else if (Qn(n)) e[t.value] = n.values.map(function(e) {
		var n = {};
		return tr(n, t, e, r), n[t.value];
	});
	else if ($n(n)) e[t.value] = n.value;
	else if (er(n)) e[t.value] = null;
	else throw Te(123, t.value, n.kind);
}
function nr(e, t) {
	var n = null;
	e.directives && (n = {}, e.directives.forEach(function(e) {
		n[e.name.value] = {}, e.arguments && e.arguments.forEach(function(r) {
			var i = r.name, a = r.value;
			return tr(n[e.name.value], i, a, t);
		});
	}));
	var r = null;
	return e.arguments && e.arguments.length && (r = {}, e.arguments.forEach(function(e) {
		var n = e.name, i = e.value;
		return tr(r, n, i, t);
	})), ar(e.name.value, r, n);
}
var rr = [
	"connection",
	"include",
	"skip",
	"client",
	"rest",
	"export",
	"nonreactive"
], ir = zn, ar = Object.assign(function(e, t, n) {
	if (t && n && n.connection && n.connection.key) if (n.connection.filter && n.connection.filter.length > 0) {
		var r = n.connection.filter ? n.connection.filter : [];
		r.sort();
		var i = {};
		return r.forEach(function(e) {
			i[e] = t[e];
		}), `${n.connection.key}(${ir(i)})`;
	} else return n.connection.key;
	var a = e;
	if (t) {
		var o = ir(t);
		a += `(${o})`;
	}
	return n && Object.keys(n).forEach(function(e) {
		rr.indexOf(e) === -1 && (n[e] && Object.keys(n[e]).length ? a += `@${e}(${ir(n[e])})` : a += `@${e}`);
	}), a;
}, { setStringify: function(e) {
	var t = ir;
	return ir = e, t;
} });
function or(e, t) {
	if (e.arguments && e.arguments.length) {
		var n = {};
		return e.arguments.forEach(function(e) {
			var r = e.name, i = e.value;
			return tr(n, r, i, t);
		}), n;
	}
	return null;
}
function sr(e) {
	return e.alias ? e.alias.value : e.name.value;
}
function cr(e, t, n) {
	for (var r, i = 0, a = t.selections; i < a.length; i++) {
		var o = a[i];
		if (lr(o)) {
			if (o.name.value === "__typename") return e[sr(o)];
		} else r ? r.push(o) : r = [o];
	}
	if (typeof e.__typename == "string") return e.__typename;
	if (r) for (var s = 0, c = r; s < c.length; s++) {
		var o = c[s], l = cr(e, un(o, n).selectionSet, n);
		if (typeof l == "string") return l;
	}
}
function lr(e) {
	return e.kind === "Field";
}
function ur(e) {
	return e.kind === "InlineFragment";
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/getFromAST.js
function dr(e) {
	A(e && e.kind === "Document", 115);
	var t = e.definitions.filter(function(e) {
		return e.kind !== "FragmentDefinition";
	}).map(function(e) {
		if (e.kind !== "OperationDefinition") throw Te(116, e.kind);
		return e;
	});
	return A(t.length <= 1, 117, t.length), e;
}
function fr(e) {
	return dr(e), e.definitions.filter(function(e) {
		return e.kind === "OperationDefinition";
	})[0];
}
function pr(e) {
	return e.definitions.filter(function(e) {
		return e.kind === "OperationDefinition" && !!e.name;
	}).map(function(e) {
		return e.name.value;
	})[0] || null;
}
function mr(e) {
	return e.definitions.filter(function(e) {
		return e.kind === "FragmentDefinition";
	});
}
function hr(e) {
	var t = fr(e);
	return A(t && t.operation === "query", 118), t;
}
function gr(e) {
	A(e.kind === "Document", 119), A(e.definitions.length <= 1, 120);
	var t = e.definitions[0];
	return A(t.kind === "FragmentDefinition", 121), t;
}
function _r(e) {
	dr(e);
	for (var t, n = 0, r = e.definitions; n < r.length; n++) {
		var i = r[n];
		if (i.kind === "OperationDefinition") {
			var a = i.operation;
			if (a === "query" || a === "mutation" || a === "subscription") return i;
		}
		i.kind === "FragmentDefinition" && !t && (t = i);
	}
	if (t) return t;
	throw Te(122);
}
function vr(e) {
	var t = Object.create(null), n = e && e.variableDefinitions;
	return n && n.length && n.forEach(function(e) {
		e.defaultValue && tr(t, e.variable.name, e.defaultValue);
	}), t;
}
//#endregion
//#region node_modules/@wry/context/lib/slot.js
var R = null, yr = {}, br = 1, xr = () => class {
	constructor() {
		this.id = [
			"slot",
			br++,
			Date.now(),
			Math.random().toString(36).slice(2)
		].join(":");
	}
	hasValue() {
		for (let e = R; e; e = e.parent) if (this.id in e.slots) {
			let t = e.slots[this.id];
			if (t === yr) break;
			return e !== R && (R.slots[this.id] = t), !0;
		}
		return R && (R.slots[this.id] = yr), !1;
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
function Sr(e) {
	try {
		return e();
	} catch {}
}
var Cr = "@wry/context:Slot", wr = Sr(() => globalThis) || Sr(() => global) || Object.create(null), Tr = wr[Cr] || Array[Cr] || (function(e) {
	try {
		Object.defineProperty(wr, Cr, {
			value: e,
			enumerable: !1,
			writable: !1,
			configurable: !0
		});
	} finally {
		return e;
	}
})(xr()), { bind: Er, noContext: Dr } = Tr, Or = new Tr(), { hasOwnProperty: kr } = Object.prototype, Ar = Array.from || function(e) {
	let t = [];
	return e.forEach((e) => t.push(e)), t;
};
function jr(e) {
	let { unsubscribe: t } = e;
	typeof t == "function" && (e.unsubscribe = void 0, t());
}
//#endregion
//#region node_modules/optimism/lib/entry.js
var Mr = [], Nr = 100;
function Pr(e, t) {
	if (!e) throw Error(t || "assertion failure");
}
function Fr(e, t) {
	let n = e.length;
	return n > 0 && n === t.length && e[n - 1] === t[n - 1];
}
function Ir(e) {
	switch (e.length) {
		case 0: throw Error("unknown value");
		case 1: return e[0];
		case 2: throw e[1];
	}
}
function Lr(e) {
	return e.slice(0);
}
var Rr = class e {
	constructor(t) {
		this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count;
	}
	peek() {
		if (this.value.length === 1 && !z(this)) return zr(this), this.value[0];
	}
	recompute(e) {
		return Pr(!this.recomputing, "already recomputing"), zr(this), z(this) ? Br(this, e) : Ir(this.value);
	}
	setDirty() {
		this.dirty || (this.dirty = !0, Ur(this), jr(this));
	}
	dispose() {
		this.setDirty(), Yr(this), Gr(this, (e, t) => {
			e.setDirty(), Xr(e, this);
		});
	}
	forget() {
		this.dispose();
	}
	dependOn(e) {
		e.add(this), this.deps || (this.deps = Mr.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
	}
	forgetDeps() {
		this.deps && (Ar(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), Mr.push(this.deps), this.deps = null);
	}
};
Rr.count = 0;
function zr(e) {
	let t = Or.getValue();
	if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), z(e) ? Kr(t, e) : qr(t, e), t;
}
function Br(e, t) {
	return Yr(e), Or.withValue(e, Vr, [e, t]), Zr(e, t) && Hr(e), Ir(e.value);
}
function Vr(e, t) {
	e.recomputing = !0;
	let { normalizeResult: n } = e, r;
	n && e.value.length === 1 && (r = Lr(e.value)), e.value.length = 0;
	try {
		if (e.value[0] = e.fn.apply(null, t), n && r && !Fr(r, e.value)) try {
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
function Hr(e) {
	e.dirty = !1, !z(e) && Wr(e);
}
function Ur(e) {
	Gr(e, Kr);
}
function Wr(e) {
	Gr(e, qr);
}
function Gr(e, t) {
	let n = e.parents.size;
	if (n) {
		let r = Ar(e.parents);
		for (let i = 0; i < n; ++i) t(r[i], e);
	}
}
function Kr(e, t) {
	Pr(e.childValues.has(t)), Pr(z(t));
	let n = !z(e);
	if (!e.dirtyChildren) e.dirtyChildren = Mr.pop() || /* @__PURE__ */ new Set();
	else if (e.dirtyChildren.has(t)) return;
	e.dirtyChildren.add(t), n && Ur(e);
}
function qr(e, t) {
	Pr(e.childValues.has(t)), Pr(!z(t));
	let n = e.childValues.get(t);
	n.length === 0 ? e.childValues.set(t, Lr(t.value)) : Fr(n, t.value) || e.setDirty(), Jr(e, t), !z(e) && Wr(e);
}
function Jr(e, t) {
	let n = e.dirtyChildren;
	n && (n.delete(t), n.size === 0 && (Mr.length < Nr && Mr.push(n), e.dirtyChildren = null));
}
function Yr(e) {
	e.childValues.size > 0 && e.childValues.forEach((t, n) => {
		Xr(e, n);
	}), e.forgetDeps(), Pr(e.dirtyChildren === null);
}
function Xr(e, t) {
	t.parents.delete(e), e.childValues.delete(t), Jr(e, t);
}
function Zr(e, t) {
	if (typeof e.subscribe == "function") try {
		jr(e), e.unsubscribe = e.subscribe.apply(null, t);
	} catch {
		return e.setDirty(), !1;
	}
	return !0;
}
//#endregion
//#region node_modules/optimism/lib/dep.js
var Qr = {
	setDirty: !0,
	dispose: !0,
	forget: !0
};
function $r(e) {
	let t = /* @__PURE__ */ new Map(), n = e && e.subscribe;
	function r(e) {
		let r = Or.getValue();
		if (r) {
			let i = t.get(e);
			i || t.set(e, i = /* @__PURE__ */ new Set()), r.dependOn(i), typeof n == "function" && (jr(i), i.unsubscribe = n(e));
		}
	}
	return r.dirty = function(e, n) {
		let r = t.get(e);
		if (r) {
			let i = n && kr.call(Qr, n) ? n : "setDirty";
			Ar(r).forEach((e) => e[i]()), t.delete(e), jr(r);
		}
	}, r;
}
//#endregion
//#region node_modules/optimism/lib/index.js
var ei;
function ti(...e) {
	return (ei || (ei = new Xt(typeof WeakMap == "function"))).lookupArray(e);
}
var ni = /* @__PURE__ */ new Set();
function ri(e, { max: t = 2 ** 16, keyArgs: n, makeCacheKey: r = ti, normalizeResult: i, subscribe: a, cache: o = pn } = Object.create(null)) {
	let s = typeof o == "function" ? new o(t, (e) => e.dispose()) : o, c = function() {
		let t = r.apply(null, n ? n.apply(null, arguments) : arguments);
		if (t === void 0) return e.apply(null, arguments);
		let o = s.get(t);
		o || (s.set(t, o = new Rr(e)), o.normalizeResult = i, o.subscribe = a, o.forget = () => s.delete(t));
		let c = o.recompute(Array.prototype.slice.call(arguments));
		return s.set(t, o), ni.add(s), Or.hasValue() || (ni.forEach((e) => e.clean()), ni.clear()), c;
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
var ii = Array.isArray;
function ai(e) {
	return Array.isArray(e) && e.length > 0;
}
//#endregion
//#region node_modules/zen-observable-ts/module.js
function oi(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = si(e)) || t && e && typeof e.length == "number") {
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
function si(e, t) {
	if (e) {
		if (typeof e == "string") return ci(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ci(e, t);
	}
}
function ci(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function li(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function ui(e, t, n) {
	return t && li(e.prototype, t), n && li(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var di = function() {
	return typeof Symbol == "function";
}, fi = function(e) {
	return di() && !!Symbol[e];
}, pi = function(e) {
	return fi(e) ? Symbol[e] : "@@" + e;
};
di() && !fi("observable") && (Symbol.observable = Symbol("observable"));
var mi = pi("iterator"), hi = pi("observable"), gi = pi("species");
function _i(e, t) {
	var n = e[t];
	if (n != null) {
		if (typeof n != "function") throw TypeError(n + " is not a function");
		return n;
	}
}
function vi(e) {
	var t = e.constructor;
	return t !== void 0 && (t = t[gi], t === null && (t = void 0)), t === void 0 ? Oi : t;
}
function yi(e) {
	return e instanceof Oi;
}
function B(e) {
	B.log ? B.log(e) : setTimeout(function() {
		throw e;
	});
}
function bi(e) {
	Promise.resolve().then(function() {
		try {
			e();
		} catch (e) {
			B(e);
		}
	});
}
function xi(e) {
	var t = e._cleanup;
	if (t !== void 0 && (e._cleanup = void 0, t)) try {
		if (typeof t == "function") t();
		else {
			var n = _i(t, "unsubscribe");
			n && n.call(t);
		}
	} catch (e) {
		B(e);
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
		var i = _i(r, t);
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
		B(e);
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
	}, ui(e, [{
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
	}, ui(e, [{
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
		return new (vi(this))(function(n) {
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
		return new (vi(this))(function(n) {
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
		var n = vi(this), r = arguments.length > 1, i = !1, a = arguments[1];
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
		var e = this, t = [...arguments], n = vi(this);
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
		var n = vi(this);
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
	}, t[hi] = function() {
		return this;
	}, e.from = function(t) {
		var n = typeof this == "function" ? this : e;
		if (t == null) throw TypeError(t + " is not an object");
		var r = _i(t, hi);
		if (r) {
			var i = r.call(t);
			if (Object(i) !== i) throw TypeError(i + " is not an object");
			return yi(i) && i.constructor === n ? i : new n(function(e) {
				return i.subscribe(e);
			});
		}
		if (fi("iterator") && (r = _i(t, mi), r)) return new n(function(e) {
			bi(function() {
				if (!e.closed) {
					for (var n = oi(r.call(t)), i; !(i = n()).done;) {
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
	}, ui(e, null, [{
		key: gi,
		get: function() {
			return this;
		}
	}]), e;
}();
di() && Object.defineProperty(Oi, Symbol("extensions"), {
	value: {
		symbol: hi,
		hostReportError: B
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
		sn(e) && Pi(e) === e && Object.getOwnPropertyNames(e).forEach(function(n) {
			sn(e[n]) && t.add(e[n]);
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
	return tn && Symbol.species && t(Symbol.species), t("@@species"), e;
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
var Bi = Symbol.for("apollo.deprecations"), Vi = Symbol.for("apollo.deprecations.slot"), Hi = be, Ui = Hi[Vi] ?? (Hi[Vi] = new Tr());
function Wi(e) {
	return Hi[Bi] || (Ui.getValue() || []).includes(e);
}
function V(e) {
	var t = [...arguments].slice(1);
	return Ui.withValue.apply(Ui, D([Array.isArray(e) ? e : [e]], t, !1));
}
function Gi(e, t, n, r) {
	r === void 0 && (r = "Please remove this option."), H(t, function() {
		t in e && globalThis.__DEV__ !== !1 && A.warn(103, n, t, r);
	});
}
function H(e, t) {
	Wi(e) || t();
}
//#endregion
//#region node_modules/@apollo/client/react/context/ApolloContext.js
var U = /* @__PURE__ */ l(Ae(), 1), Ki = tn ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function qi() {
	A("createContext" in U, 69);
	var e = U.createContext[Ki];
	return e || (Object.defineProperty(U.createContext, Ki, {
		value: e = U.createContext({}),
		enumerable: !1,
		writable: !1,
		configurable: !0
	}), e.displayName = "ApolloContext"), e;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useApolloClient.js
function Ji(e) {
	var t = U.useContext(qi()), n = e || t.client;
	return A(!!n, 78), n;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useSyncExternalStore.js
var Yi = !1, Xi = U.useSyncExternalStore || (function(e, t, n) {
	var r = t();
	globalThis.__DEV__ !== !1 && !Yi && r !== t() && (Yi = !0, globalThis.__DEV__ !== !1 && A.error(91));
	var i = U.useState({ inst: {
		value: r,
		getSnapshot: t
	} }), a = i[0].inst, o = i[1];
	return on ? U.useLayoutEffect(function() {
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
	}), U.useEffect(function() {
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
function W(e, t) {
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
		return sn(e) && e.message || "Error message not found.";
	}).join("\n");
}, fa = function(e) {
	ce(t, e);
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
	var i = t.data, a = le(t, ["data"]), o = n.data;
	return W(a, le(n, ["data"])) && ma(_r(e).selectionSet, i, o, {
		fragmentMap: ln(mr(e)),
		variables: r
	});
}
function ma(e, t, n, r) {
	if (t === n) return !0;
	var i = /* @__PURE__ */ new Set();
	return e.selections.every(function(e) {
		if (i.has(e) || (i.add(e), !Bt(e, r.variables)) || ha(e)) return !0;
		if (lr(e)) {
			var a = sr(e), o = t && t[a], s = n && n[a], c = e.selectionSet;
			if (!c) return W(o, s);
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
			var p = un(e, r.fragmentMap);
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
var G;
(function(e) {
	e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(G || (G = {}));
function _a(e) {
	return e ? e < 7 : !1;
}
//#endregion
//#region node_modules/@apollo/client/core/ObservableQuery.js
var va = Object.assign, ya = Object.hasOwnProperty, ba = function(e) {
	ce(t, e);
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
		var h = fr(o.query);
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
		return globalThis.__DEV__ !== !1 && H("observableQuery.result", function() {
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
		var n = V("getLastResult", function() {
			return t.getLastResult(!0);
		}), r = this.queryInfo.networkStatus || n && n.networkStatus || G.ready, i = E(E({}, n), {
			loading: _a(r),
			networkStatus: r
		}), a = this.options.fetchPolicy, o = a === void 0 ? "cache-first" : a;
		if (!(Ca(o) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)) if (this.waitForOwnResult) this.queryInfo.updateWatch();
		else {
			var s = this.queryInfo.getDiff();
			(s.complete || this.options.returnPartialData) && (i.data = s.result), W(i.data, {}) && (i.data = void 0), s.complete ? (delete i.partial, s.complete && i.networkStatus === G.loading && (o === "cache-first" || o === "cache-only") && (i.networkStatus = G.ready, i.loading = !1)) : i.partial = !0, i.networkStatus === G.ready && (i.error || i.errors) && (i.networkStatus = G.error), globalThis.__DEV__ !== !1 && !s.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && Sa(s.missing);
		}
		return e && this.updateLastResult(i), i;
	}, t.prototype.getCurrentResult = function(e) {
		return e === void 0 && (e = !0), this.maskResult(this.getCurrentFullResult(e));
	}, t.prototype.isDifferentFromLastResult = function(e, t) {
		if (!this.last) return !0;
		var n = this.queryManager.getDocumentInfo(this.query), r = this.queryManager.dataMasking, i = r ? n.nonReactiveQuery : this.query;
		return (r || n.hasNonreactiveDirective ? !pa(i, this.last.result, e, this.variables) : !W(this.last.result, e)) || t && !W(this.last.variables, t);
	}, t.prototype.getLast = function(e, t) {
		var n = this.last;
		if (n && n[e] && (!t || W(n.variables, this.variables))) return n[e];
	}, t.prototype.getLastResult = function(e) {
		return globalThis.__DEV__ !== !1 && H("getLastResult", function() {
			globalThis.__DEV__ !== !1 && A.warn(24);
		}), this.getLast("result", e);
	}, t.prototype.getLastError = function(e) {
		return globalThis.__DEV__ !== !1 && H("getLastError", function() {
			globalThis.__DEV__ !== !1 && A.warn(25);
		}), this.getLast("error", e);
	}, t.prototype.resetLastResults = function() {
		globalThis.__DEV__ !== !1 && H("resetLastResults", function() {
			globalThis.__DEV__ !== !1 && A.warn(26);
		}), delete this.last, this.isTornDown = !1;
	}, t.prototype.resetQueryStoreErrors = function() {
		globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && A.warn(27), this.queryManager.resetErrors(this.queryId);
	}, t.prototype.refetch = function(e) {
		var t = { pollInterval: 0 };
		if (this.options.fetchPolicy === "no-cache" ? t.fetchPolicy = "no-cache" : t.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && e && ya.call(e, "variables")) {
			var n = hr(this.query), r = n.variableDefinitions;
			(!r || !r.some(function(e) {
				return e.variable.name.value === "variables";
			})) && globalThis.__DEV__ !== !1 && A.warn(28, e, n.name?.value || n);
		}
		return e && !W(this.options.variables, e) && (t.variables = this.options.variables = E(E({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(t, G.refetch);
	}, t.prototype.fetchMore = function(e) {
		var t = this, n = E(E({}, e.query ? e : E(E(E(E({}, this.options), { query: this.options.query }), e), { variables: E(E({}, this.options.variables), e.variables) })), { fetchPolicy: "no-cache" });
		n.query = this.transformDocument(n.query);
		var r = this.queryManager.generateQueryId();
		this.lastQuery = e.query ? this.transformDocument(this.options.query) : n.query;
		var i = this.queryInfo, a = i.networkStatus;
		i.networkStatus = G.fetchMore, n.notifyOnNetworkStatusChange && this.observe();
		var o = /* @__PURE__ */ new Set(), s = e?.updateQuery, c = this.options.fetchPolicy !== "no-cache";
		return c || A(s, 29), this.queryManager.fetchQuery(r, n, G.fetchMore).then(function(l) {
			if (t.queryManager.removeQuery(r), i.networkStatus === G.fetchMore && (i.networkStatus = a), c) t.queryManager.cache.batch({
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
		return globalThis.__DEV__ !== !1 && (Gi(e, "canonizeResults", "setOptions"), H("setOptions", function() {
			globalThis.__DEV__ !== !1 && A.warn(31);
		})), this.reobserve(e);
	}, t.prototype.silentSetOptions = function(e) {
		var t = Ri(this.options, e || {});
		va(this.options, t);
	}, t.prototype.setVariables = function(e) {
		var t = this;
		return W(this.variables, e) ? this.observers.size ? V("observableQuery.result", function() {
			return t.result();
		}) : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
			fetchPolicy: this.options.initialFetchPolicy,
			variables: e
		}, G.setVariables) : Promise.resolve());
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
					e.pollingInfo && (!_a(e.queryInfo.networkStatus) && !(t = e.options).skipPollAttempt?.call(t) ? e.reobserve({ fetchPolicy: e.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only" }, G.poll).then(o, o) : o());
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
		var r = V("getLastError", function() {
			return n.getLastError();
		});
		return r && this.last && !W(t, this.last.variables) && (r = void 0), this.last = E({
			result: this.queryManager.assumeImmutableResults ? e : ji(e),
			variables: t
		}, r ? { error: r } : null);
	}, t.prototype.reobserveAsConcast = function(e, t) {
		var n = this;
		this.isTornDown = !1;
		var r = t === G.refetch || t === G.fetchMore || t === G.poll, i = this.options.variables, a = this.options.fetchPolicy, o = Ri(this.options, e || {}), s = r ? o : va(this.options, o), c = this.transformDocument(s.query);
		this.lastQuery = c, r || (this.updatePolling(), e && e.variables && !W(e.variables, i) && s.fetchPolicy !== "standby" && (s.fetchPolicy === a || typeof s.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", s), t === void 0 && (t = G.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Ca(s.fetchPolicy));
		var l = function() {
			n.concast === f && (n.waitForOwnResult = !1);
		}, u = s.variables && E({}, s.variables), d = this.fetch(s, t, c), f = d.concast, p = d.fromLink, m = {
			next: function(e) {
				W(n.variables, u) && (l(), n.reportResult(e, u));
			},
			error: function(e) {
				W(n.variables, u) && (ua(e) || (e = new fa({ networkError: e })), l(), n.reportError(e, u));
			}
		};
		return !r && (p || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = f, this.observer = m), f.addObserver(m), f;
	}, t.prototype.reobserve = function(e, t) {
		return ki(this.reobserveAsConcast(e, t).promise.then(this.maskResult));
	}, t.prototype.resubscribeAfterError = function() {
		for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		var r = this.last;
		V("resetLastResults", function() {
			return e.resetLastResults();
		});
		var i = this.subscribe.apply(this, t);
		return this.last = r, i;
	}, t.prototype.observe = function() {
		this.reportResult(this.getCurrentFullResult(!1), this.variables);
	}, t.prototype.reportResult = function(e, t) {
		var n = this, r = V("getLastError", function() {
			return n.getLastError();
		}), i = this.isDifferentFromLastResult(e, t);
		(r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), (r || i) && Ii(this.observers, "next", this.maskResult(e));
	}, t.prototype.reportError = function(e, t) {
		var n = this, r = E(E({}, V("getLastResult", function() {
			return n.getLastResult();
		})), {
			error: e,
			errors: e.graphQLErrors,
			networkStatus: G.error,
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
	}, t.inactiveOnCreation = new Tr(), t;
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
		var n = Nt(e, {
			experimentalFragmentVariables: Da,
			allowLegacyFragmentVariables: Da
		});
		if (!n || n.kind !== "Document") throw Error("Not a valid GraphQL document.");
		wa.set(t, ja(Aa(n)));
	}
	return wa.get(t);
}
function Na(e) {
	var t = [...arguments].slice(1);
	typeof e == "string" && (e = [e]);
	var n = e[0];
	return t.forEach(function(t, r) {
		t && t.kind === "Document" ? n += t.loc.source.body : n += t, n += e[r + 1];
	}), Ma(n);
}
function Pa() {
	wa.clear(), Ta.clear();
}
function Fa() {
	Ea = !1;
}
function Ia() {
	Da = !0;
}
function La() {
	Da = !1;
}
var Ra = {
	gql: Na,
	resetCaches: Pa,
	disableFragmentWarnings: Fa,
	enableExperimentalFragmentVariables: Ia,
	disableExperimentalFragmentVariables: La
};
(function(e) {
	e.gql = Ra.gql, e.resetCaches = Ra.resetCaches, e.disableFragmentWarnings = Ra.disableFragmentWarnings, e.enableExperimentalFragmentVariables = Ra.enableExperimentalFragmentVariables, e.disableExperimentalFragmentVariables = Ra.disableExperimentalFragmentVariables;
})(Na || (Na = {})), Na.default = Na;
//#endregion
//#region node_modules/@apollo/client/react/parser/index.js
var K;
(function(e) {
	e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription";
})(K || (K = {}));
var q;
function za(e) {
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
function Ba(e) {
	H("parser", function() {
		globalThis.__DEV__ !== !1 && A.warn(93);
	}), q || (q = new Cn(Tn.parser || 1e3));
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
Ba.resetCache = function() {
	q = void 0;
}, globalThis.__DEV__ !== !1 && En("parser", function() {
	return q ? q.size : 0;
});
function Va(e, t) {
	var n = V("parser", Ba, [e]), r = za(t), i = za(n.type);
	A(n.type === t, 98, r, r, i);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js
var Ha = rn ? U.useLayoutEffect : U.useEffect;
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/useWarnRemovedOption.js
function J(e, t, n, r) {
	"use no memo";
	r === void 0 && (r = "Please remove this option.");
	var i = U.useRef(!1);
	globalThis.__DEV__ !== !1 && t in e && !i.current && (Gi(e, t, n, r), i.current = !0);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/wrapHook.js
var Ua = Symbol.for("apollo.hook.wrappers");
function Wa(e, t, n) {
	var r = n.queryManager, i = r && r[Ua], a = i && i[e];
	return a ? a(t) : t;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useQuery.js
var Ga = Object.prototype.hasOwnProperty;
function Ka() {}
var qa = Symbol();
function Ja(e, t) {
	return t === void 0 && (t = Object.create(null)), Wa("useQuery", Ya, Ji(t && t.client))(e, t);
}
function Ya(e, t) {
	globalThis.__DEV__ !== !1 && (J(t, "canonizeResults", "useQuery"), J(t, "partialRefetch", "useQuery"), J(t, "defaultOptions", "useQuery", "Pass the options directly to the hook instead."), J(t, "onCompleted", "useQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), J(t, "onError", "useQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));
	var n = Za(e, t), r = n.result, i = n.obsQueryFields;
	return U.useMemo(function() {
		return E(E({}, r), i);
	}, [r, i]);
}
function Xa(e, t, n, r, i) {
	function a(a) {
		return Va(t, K.Query), {
			client: e,
			query: t,
			observable: r && r.getSSRObservable(i()) || ba.inactiveOnCreation.withValue(!r, function() {
				return V(["canonizeResults", "partialRefetch"], function() {
					return e.watchQuery(no(void 0, e, n, i()));
				});
			}),
			resultData: { previousData: a?.resultData.current?.data }
		};
	}
	var o = U.useState(a), s = o[0], c = o[1];
	function l(e) {
		var t;
		Object.assign(s.observable, (t = {}, t[qa] = e, t));
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
function Za(e, t) {
	var n = Ji(t.client), r = U.useContext(qi()).renderPromises, i = !!r, a = n.disableNetworkFetches, o = t.ssr !== !1 && !t.skip, s = t.partialRefetch, c = to(n, e, t, i), l = Xa(n, e, t, r, c), u = l[0], d = u.observable, f = u.resultData, p = l[1], m = c(d);
	eo(f, d, n, t, m);
	var h = U.useMemo(function() {
		return po(d);
	}, [d]);
	return $a(d, r, o), {
		result: Qa(f, d, n, t, m, a, s, i, {
			onCompleted: t.onCompleted || Ka,
			onError: t.onError || Ka
		}),
		obsQueryFields: h,
		observable: d,
		resultData: f,
		client: n,
		onQueryExecuted: p
	};
}
function Qa(e, t, n, r, i, a, o, s, c) {
	var l = U.useRef(c);
	U.useEffect(function() {
		l.current = c;
	});
	var u = (s || a) && r.ssr === !1 && !r.skip ? uo : r.skip || i.fetchPolicy === "standby" ? fo : void 0, d = e.previousData, f = U.useMemo(function() {
		return u && co(u, d, t, n);
	}, [
		n,
		t,
		u,
		d
	]);
	return Xi(U.useCallback(function(r) {
		if (s) return function() {};
		var i = function() {
			var i = e.current, a = t.getCurrentResult();
			i && i.loading === a.loading && i.networkStatus === a.networkStatus && W(i.data, a.data) || ro(a, e, t, n, o, r, l.current);
		}, a = function(s) {
			if (c.current.unsubscribe(), c.current = t.resubscribeAfterError(i, a), !Ga.call(s, "graphQLErrors")) throw s;
			var u = e.current;
			(!u || u && u.loading || !W(s, u.error)) && ro({
				data: u && u.data,
				error: s,
				loading: !1,
				networkStatus: G.error
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
		return f || ao(e, t, l.current, o, n);
	}, function() {
		return f || ao(e, t, l.current, o, n);
	});
}
function $a(e, t, n) {
	t && n && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e));
}
function eo(e, t, n, r, i) {
	t[qa] && !W(t[qa], i) && (t.reobserve(no(t, n, r, i)), e.previousData = e.current?.data || e.previousData, e.current = void 0), t[qa] = i;
}
function to(e, t, n, r) {
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
		return r && (s.fetchPolicy === "network-only" || s.fetchPolicy === "cache-and-network") && (s.fetchPolicy = "cache-first"), s.variables || (s.variables = {}), i ? (s.initialFetchPolicy = s.initialFetchPolicy || s.fetchPolicy || oo(a, e.defaultOptions), s.fetchPolicy = "standby") : s.fetchPolicy || (s.fetchPolicy = n?.options.initialFetchPolicy || oo(a, e.defaultOptions)), s;
	};
}
function no(e, t, n, r) {
	var i = [], a = t.defaultOptions.watchQuery;
	return a && i.push(a), n.defaultOptions && i.push(n.defaultOptions), i.push(Ri(e && e.options, r)), i.reduce(zi);
}
function ro(e, t, n, r, i, a, o) {
	var s = t.current;
	s && s.data && (t.previousData = s.data), !e.error && ai(e.errors) && (e.error = new fa({ graphQLErrors: e.errors })), t.current = co(lo(e, n, i), t.previousData, n, r), a(), io(e, s?.networkStatus, o);
}
function io(e, t, n) {
	if (!e.loading) {
		var r = so(e);
		Promise.resolve().then(function() {
			r ? n.onError(r) : e.data && t !== e.networkStatus && e.networkStatus === G.ready && n.onCompleted(e.data);
		}).catch(function(e) {
			globalThis.__DEV__ !== !1 && A.warn(e);
		});
	}
}
function ao(e, t, n, r, i) {
	return e.current || ro(t.getCurrentResult(), e, t, i, r, function() {}, n), e.current;
}
function oo(e, t) {
	return e?.fetchPolicy || t?.watchQuery?.fetchPolicy || "cache-first";
}
function so(e) {
	return ai(e.errors) ? new fa({ graphQLErrors: e.errors }) : e.error;
}
function co(e, t, n, r) {
	var i = e.data;
	e.partial;
	var a = le(e, ["data", "partial"]);
	return E(E({ data: i }, a), {
		client: r,
		observable: n,
		variables: n.variables,
		called: e !== uo && e !== fo,
		previousData: t
	});
}
function lo(e, t, n) {
	return e.partial && n && !e.loading && (!e.data || Object.keys(e.data).length === 0) && t.options.fetchPolicy !== "cache-only" ? (t.refetch(), E(E({}, e), {
		loading: !0,
		networkStatus: G.refetch
	})) : e;
}
var uo = Fi({
	loading: !0,
	data: void 0,
	error: void 0,
	networkStatus: G.loading
}), fo = Fi({
	loading: !1,
	data: void 0,
	error: void 0,
	networkStatus: G.ready
});
function po(e) {
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
function mo(e, t) {
	globalThis.__DEV__ !== !1 && J(t || {}, "ignoreResults", "useMutation", "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");
	var n = Ji(t?.client);
	Va(e, K.Mutation);
	var r = U.useState({
		called: !1,
		loading: !1,
		client: n
	}), i = r[0], a = r[1], o = U.useRef({
		result: i,
		mutationId: 0,
		isMounted: !0,
		client: n,
		mutation: e,
		options: t
	});
	Ha(function() {
		Object.assign(o.current, {
			client: n,
			options: t,
			mutation: e
		});
	});
	var s = U.useCallback(function(e) {
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
				o.current.isMounted && !W(o.current.result, d) && a(o.current.result = d);
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
				W(o.current.result, n) || a(o.current.result = n);
			}
			var r = e.onError || o.current.options?.onError;
			if (r) return r(t, l), {
				data: void 0,
				errors: t
			};
			throw t;
		});
	}, []), c = U.useCallback(function() {
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
	return U.useEffect(function() {
		var e = o.current;
		return e.isMounted = !0, function() {
			e.isMounted = !1;
		};
	}, []), [s, E({ reset: c }, i)];
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function ho(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function go(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = ho(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : ho(e[t], null);
			}
		};
	};
}
function _o(...e) {
	return h.useCallback(go(...e), e);
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var vo = class extends h.Component {
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
function yo({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
	let o = x(), c = re(null), l = re({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}), { nonce: u } = ee(s), d = _o(c, e.props?.ref ?? e?.ref);
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
	}, [t]), w(vo, {
		isPresent: t,
		childRef: c,
		sizeRef: l,
		pop: a,
		children: a === !1 ? e : h.cloneElement(e, { ref: d })
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var bo = ({ children: e, initial: n, isPresent: r, onExitComplete: i, custom: o, presenceAffectsLayout: s, mode: c, anchorX: l, anchorY: u, root: d }) => {
	let f = t(xo), p = x(), m = !0, g = S(() => (m = !1, {
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
	}, [r]), e = w(yo, {
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
function xo() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var So = (e) => e.key || "";
function Co(e) {
	let t = [];
	return g.forEach(e, (e) => {
		v(e) && t.push(e);
	}), t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var wo = ({ children: e, custom: n, initial: a = !0, onExitComplete: o, presenceAffectsLayout: s = !0, mode: l = "sync", propagate: u = !1, anchorX: d = "left", anchorY: f = "top", root: p }) => {
	let [m, h] = r(u), g = S(() => Co(e), [e]), _ = u && !m ? [] : g.map(So), v = re(!0), y = re(g), b = t(() => /* @__PURE__ */ new Map()), x = re(/* @__PURE__ */ new Set()), [te, ne] = C(g), [T, ae] = C(g);
	i(() => {
		v.current = !1, y.current = g;
		for (let e = 0; e < T.length; e++) {
			let t = So(T[e]);
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
			let n = T[t], r = So(n);
			_.includes(r) || (e.splice(t, 0, n), oe.push(n));
		}
		return l === "wait" && oe.length && (e = oe), ae(Co(e)), ne(g), null;
	}
	let { forceRender: se } = ee(c);
	return w(ie, { children: T.map((e) => {
		let t = So(e), r = u && !m ? !1 : g === T || _.includes(t);
		return w(bo, {
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
}, To = "https://cdn.wexio.io";
function Eo(e) {
	return /^https?:\/\//.test(e) ? e : To + (e.startsWith("/") ? e : `/${e}`);
}
//#endregion
//#region lib/use-widget-env.tsx
function Do() {
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
var Oo = _(null);
function ko({ env: e, children: t }) {
	return /* @__PURE__ */ w(Oo.Provider, {
		value: e,
		children: t
	});
}
function Ao() {
	return ee(Oo) ?? Do();
}
//#endregion
//#region lib/api.ts
var jo = "https://api.wexio.io", Mo = "http://localhost:3001", No = "https://local.api.wexio.io:3443";
function Po() {
	let e = Fo("NEXT_PUBLIC_WEXIO_API_URL");
	if (e) return e;
	if (typeof window < "u") {
		let { protocol: e, hostname: t } = window.location;
		if (e === "https:" && /^local\.[a-z-]+\.wexio\.io$/i.test(t)) return No;
		if (e === "https:" && /\.wexio\.io$/i.test(t)) {
			let e = t.replace(/^(app|templates)\./i, "api.").replace(/\.(app|templates)\./i, ".api.");
			return e === t ? jo : `https://${e}`;
		}
		if (t === "localhost" || t === "127.0.0.1" || t === "[::1]") return Mo;
	}
	return jo;
}
function Fo(e) {
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
function Io() {
	return Fo("NEXT_PUBLIC_WEXIO_DEMO_PK");
}
var Lo = /* @__PURE__ */ new Map();
function Ro(e, t) {
	if (!e) return Promise.resolve(null);
	let n = `${e}|${t ?? ""}`, r = Lo.get(n);
	if (r) return r;
	let i = (async () => {
		try {
			let n = new URL(`${Po()}/api/web/config/${encodeURIComponent(e)}`);
			t && n.searchParams.set("locale", t);
			let r = await fetch(n.toString(), {
				method: "GET",
				headers: { "x-web-public-key": e },
				credentials: "omit"
			});
			return r.ok ? Uo(await r.json()) : null;
		} catch {
			return null;
		}
	})();
	return Lo.set(n, i.then((e) => (e === null && Lo.delete(n), e))), Lo.get(n) ?? i;
}
var zo = [
	"NAME",
	"EMAIL",
	"PHONE",
	"CUSTOM_TEXT"
], Bo = ["HINT", "SYSTEM"];
function Vo(e) {
	if (e === null || !e) return null;
	let t = Array.isArray(e.commands) ? e.commands.filter((e) => typeof e == "string" && e.length > 0).slice(0, 20) : [], n = Array.isArray(e.messages) ? e.messages.filter((e) => !!e && typeof e.text == "string" && e.text.length > 0 && typeof e.kind == "string" && Bo.includes(e.kind)).map((e) => ({
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
function Ho(e) {
	if (!e) return null;
	let t = (Array.isArray(e.fields) ? e.fields : []).filter((e) => e && zo.includes(e.kind)).map((e) => ({
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
function Uo(e) {
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
		prechatForm: Ho(e.prechatForm),
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
		messenger: Vo(e.messenger),
		botProtection: e.botProtection?.turnstile?.enabled && e.botProtection.turnstile.siteKey ? { turnstile: {
			enabled: !0,
			siteKey: e.botProtection.turnstile.siteKey
		} } : null
	};
}
var Wo = /* @__PURE__ */ new Map();
function Go(e) {
	if (!e) return Promise.resolve(null);
	let t = Wo.get(e);
	if (t) return t;
	let n = (async () => {
		try {
			let t = new URL(`${Po()}/api/web/config/${encodeURIComponent(e)}`);
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
	return Wo.set(e, n.then((t) => (t === null && Wo.delete(e), t))), Wo.get(e) ?? n;
}
//#endregion
//#region dummy/authors.ts
var Ko = {
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
function qo(e) {
	return e.map((e) => Ko[e]);
}
//#endregion
//#region lib/theme-font.ts
var Jo = {
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
function Yo(e) {
	if (!e || typeof document > "u") return;
	let t = e.split(",")[0]?.trim().replace(/^['"]|['"]$/g, "");
	if (!t) return;
	let n = Jo[t.toLowerCase()];
	if (!n) return;
	let r = `wexio-font-${t.toLowerCase().replace(/\s+/g, "-")}`;
	if (document.getElementById(r)) return;
	let i = document.createElement("link");
	i.id = r, i.rel = "stylesheet", i.href = `https://fonts.googleapis.com/css2?family=${n}&display=swap`, document.head.appendChild(i);
}
//#endregion
//#region lib/widget-config.ts
var Xo = {
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
		aiAssistantAvatar: Eo("/logo-dark.png"),
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
	botProtection: null
}, Zo = [
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
function Qo() {
	let e = Ao(), t = p(), [n, r] = C({
		mode: "demo",
		config: Xo,
		isDummy: !0,
		isLoading: !0,
		error: null
	}), [i, a] = C(null);
	b(() => {
		let n = new URL(window.location.href), i = n.searchParams.get("pk") ?? void 0, o = n.searchParams.get("mode"), s = e.modeOverride === "demo", c = s ? void 0 : Io() || void 0, l = s ? void 0 : e.publicKeyOverride ?? i ?? c, u = l === "pk_demo" ? void 0 : l, d = e.modeOverride ?? (u ? "production" : o === "preview" ? "preview" : "demo"), f = !1;
		if ((async () => {
			if (e.configBase) {
				let t = u ? await Go(u) : null;
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
					config: Xo,
					isDummy: e.forceDummyData,
					isLoading: !1,
					error: null
				});
				return;
			}
			if (u) {
				let e = await Ro(u, t);
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
					config: Xo,
					isDummy: !0,
					isLoading: !1,
					error: "publicKeyInvalid"
				});
				return;
			}
			r({
				mode: d,
				config: Xo,
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
			t && a((e) => $o(e ?? {}, t));
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
	let o = n.isDummy || e.forceDummyData === !0, s = S(() => {
		let t = n.config;
		return i && (t = $o(t, i)), e.configOverride && (t = $o(t, e.configOverride)), o && t.operatorAvatars.length === 0 && (t = {
			...t,
			operatorAvatars: Xo.operatorAvatars
		}), t;
	}, [
		n.config,
		i,
		e.configOverride,
		o
	]), c = e.styleRoot;
	ne(() => {
		s.theme && os(s.theme, c ?? document);
	}, [s.theme, c]), b(() => {
		s.theme && Yo(s.theme.fontFamily);
	}, [s.theme]);
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
		isLoading: n.isLoading,
		error: n.error
	};
}
function $o(e, t) {
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
var es = {
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
}, ts = {
	sm: "--wx-radius-sm",
	md: "--wx-radius",
	lg: "--wx-radius-lg",
	xl: "--wx-radius-xl"
};
function ns(e) {
	return e ? Object.entries(e).filter(([, e]) => typeof e == "string" && e.length > 0).map(([e, t]) => `${es[e]}: ${t};`).join(" ") : "";
}
function rs(e) {
	return e ? Object.entries(e).filter(([, e]) => typeof e == "number" && Number.isFinite(e)).map(([e, t]) => `${ts[e]}: ${t}px;`).join(" ") : "";
}
var is = /* @__PURE__ */ new WeakMap();
function as(e) {
	let t = [rs(e.radii), typeof e.fontFamily == "string" && e.fontFamily.trim().length > 0 ? `--wx-font: ${e.fontFamily};` : ""].filter(Boolean).join(" "), n = [ns(e.light), t].filter(Boolean).join(" "), r = [ns(e.dark), t].filter(Boolean).join(" "), i = [];
	return n && i.push(`:root, :host { ${n} }`), r && i.push(`[data-theme="dark"] { ${r} }`), i.join(" ");
}
function os(e, t) {
	let n = as(e);
	if (!(t instanceof Document)) {
		let e = t;
		if (typeof CSSStyleSheet < "u" && "replaceSync" in CSSStyleSheet.prototype) {
			let t = is.get(e);
			t || (t = new CSSStyleSheet(), is.set(e, t), e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]), t.replaceSync(n);
			return;
		}
		let r = e.querySelector("#wexio-theme-vars");
		r || (r = document.createElement("style"), r.id = "wexio-theme-vars", e.appendChild(r)), r.textContent = n;
		return;
	}
	let r = t.getElementById("wexio-theme-vars");
	r || (r = document.createElement("style"), r.id = "wexio-theme-vars", t.head.appendChild(r)), r.textContent = n;
}
var ss = m("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), cs = m("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), ls = m("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), us = m("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), ds = m("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function fs(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function ps(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = fs(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : fs(e[t], null);
			}
		};
	};
}
function Y(...e) {
	return h.useCallback(ps(...e), e);
}
//#endregion
//#region components/ui/card.tsx
var ms = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: f("rounded-wx-lg bg-wx-bg-elevated text-wx-fg", e),
	...t
}));
ms.displayName = "Card";
var hs = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: f("rounded-wx bg-wx-bg-elevated-2 text-wx-fg", e),
	...t
}));
hs.displayName = "CardNested";
var gs = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: f("flex flex-col gap-1 px-5 pt-5", e),
	...t
}));
gs.displayName = "CardHeader";
var _s = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("p", {
	ref: n,
	className: f("text-base font-semibold text-wx-fg", e),
	...t
}));
_s.displayName = "CardTitle";
var vs = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("p", {
	ref: n,
	className: f("text-sm text-wx-fg-muted", e),
	...t
}));
vs.displayName = "CardSubtitle";
var ys = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: f("px-5 py-4", e),
	...t
}));
ys.displayName = "CardBody";
var bs = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: f("flex items-center justify-between px-5 py-3 border-t border-wx-border", e),
	...t
}));
bs.displayName = "CardFooter";
//#endregion
//#region node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function xs(e) {
	let t = /* @__PURE__ */ Ss(e), n = h.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = h.Children.toArray(r), o = a.find(ws);
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
function Ss(e) {
	let t = h.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (h.isValidElement(n)) {
			let e = Es(n), i = Ts(r, n.props);
			return n.type !== h.Fragment && (i.ref = t ? ps(t, e) : e), h.cloneElement(n, i);
		}
		return h.Children.count(n) > 1 ? h.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var Cs = Symbol("radix.slottable");
function ws(e) {
	return h.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Cs;
}
function Ts(e, t) {
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
function Es(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var Ds = [
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
	let n = /* @__PURE__ */ xs(`Primitive.${t}`), r = h.forwardRef((e, r) => {
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
function Os(e, t) {
	e && ae.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var ks = globalThis?.document ? h.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
function As(e, t) {
	return h.useReducer((e, n) => t[e][n] ?? e, e);
}
var js = (e) => {
	let { present: t, children: n } = e, r = Ms(t), i = typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n), a = Y(r.ref, Ps(i));
	return typeof n == "function" || r.isPresent ? h.cloneElement(i, { ref: a }) : null;
};
js.displayName = "Presence";
function Ms(e) {
	let [t, n] = h.useState(), r = h.useRef(null), i = h.useRef(e), a = h.useRef("none"), [o, s] = As(e ? "mounted" : "unmounted", {
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
		let e = Ns(r.current);
		a.current = o === "mounted" ? e : "none";
	}, [o]), ks(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = Ns(t);
			e ? s("MOUNT") : o === "none" || t?.display === "none" ? s("UNMOUNT") : s(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, s]), ks(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = Ns(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (s("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = Ns(r.current));
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
function Ns(e) {
	return e?.animationName || "none";
}
function Ps(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
function Fs(e, t = []) {
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
	return i.scopeName = e, [r, Is(i, ...t)];
}
function Is(...e) {
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
var Ls = h.createContext(void 0);
function Rs(e) {
	let t = h.useContext(Ls);
	return e || t || "ltr";
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
function zs(e, [t, n]) {
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
function Bs(e, t) {
	return h.useReducer((e, n) => t[e][n] ?? e, e);
}
var Vs = "ScrollArea", [Hs, Us] = Fs(Vs), [Ws, Q] = Hs(Vs), Gs = h.forwardRef((e, t) => {
	let { __scopeScrollArea: n, type: r = "hover", dir: i, scrollHideDelay: a = 600, ...o } = e, [s, c] = h.useState(null), [l, u] = h.useState(null), [d, f] = h.useState(null), [p, m] = h.useState(null), [g, _] = h.useState(null), [v, y] = h.useState(0), [ee, b] = h.useState(0), [x, te] = h.useState(!1), [ne, S] = h.useState(!1), re = Y(t, (e) => c(e)), C = Rs(i);
	return /* @__PURE__ */ w(Ws, {
		scope: n,
		type: r,
		dir: C,
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
		scrollbarYEnabled: ne,
		onScrollbarYEnabledChange: S,
		onCornerWidthChange: y,
		onCornerHeightChange: b,
		children: /* @__PURE__ */ w(Ds.div, {
			dir: C,
			...o,
			ref: re,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": v + "px",
				"--radix-scroll-area-corner-height": ee + "px",
				...e.style
			}
		})
	});
});
Gs.displayName = Vs;
var Ks = "ScrollAreaViewport", qs = h.forwardRef((e, t) => {
	let { __scopeScrollArea: n, children: r, nonce: i, ...a } = e, o = Q(Ks, n), s = Y(t, h.useRef(null), o.onViewportChange);
	return /* @__PURE__ */ T(ie, { children: [/* @__PURE__ */ w("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
		nonce: i
	}), /* @__PURE__ */ w(Ds.div, {
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
qs.displayName = Ks;
var $ = "ScrollAreaScrollbar", Js = h.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Q($, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: o } = i, s = e.orientation === "horizontal";
	return h.useEffect(() => (s ? a(!0) : o(!0), () => {
		s ? a(!1) : o(!1);
	}), [
		s,
		a,
		o
	]), i.type === "hover" ? /* @__PURE__ */ w(Ys, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "scroll" ? /* @__PURE__ */ w(Xs, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "auto" ? /* @__PURE__ */ w(Zs, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "always" ? /* @__PURE__ */ w(Qs, {
		...r,
		ref: t
	}) : null;
});
Js.displayName = $;
var Ys = h.forwardRef((e, t) => {
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
	}, [i.scrollArea, i.scrollHideDelay]), /* @__PURE__ */ w(js, {
		present: n || a,
		children: /* @__PURE__ */ w(Zs, {
			"data-state": a ? "visible" : "hidden",
			...r,
			ref: t
		})
	});
}), Xs = h.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Q($, e.__scopeScrollArea), a = e.orientation === "horizontal", o = vc(() => c("SCROLL_END"), 100), [s, c] = Bs("hidden", {
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
	]), /* @__PURE__ */ w(js, {
		present: n || s !== "hidden",
		children: /* @__PURE__ */ w(Qs, {
			"data-state": s === "hidden" ? "hidden" : "visible",
			...r,
			ref: t,
			onPointerEnter: Z(e.onPointerEnter, () => c("POINTER_ENTER")),
			onPointerLeave: Z(e.onPointerLeave, () => c("POINTER_LEAVE"))
		})
	});
}), Zs = h.forwardRef((e, t) => {
	let n = Q($, e.__scopeScrollArea), { forceMount: r, ...i } = e, [a, o] = h.useState(!1), s = e.orientation === "horizontal", c = vc(() => {
		if (n.viewport) {
			let e = n.viewport.offsetWidth < n.viewport.scrollWidth, t = n.viewport.offsetHeight < n.viewport.scrollHeight;
			o(s ? e : t);
		}
	}, 10);
	return yc(n.viewport, c), yc(n.content, c), /* @__PURE__ */ w(js, {
		present: r || a,
		children: /* @__PURE__ */ w(Qs, {
			"data-state": a ? "visible" : "hidden",
			...i,
			ref: t
		})
	});
}), Qs = h.forwardRef((e, t) => {
	let { orientation: n = "vertical", ...r } = e, i = Q($, e.__scopeScrollArea), a = h.useRef(null), o = h.useRef(0), [s, c] = h.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), l = dc(s.viewport, s.content), u = {
		...r,
		sizes: s,
		onSizesChange: c,
		hasThumb: l > 0 && l < 1,
		onThumbChange: (e) => a.current = e,
		onThumbPointerUp: () => o.current = 0,
		onThumbPointerDown: (e) => o.current = e
	};
	function d(e, t) {
		return pc(e, o.current, s, t);
	}
	return n === "horizontal" ? /* @__PURE__ */ w($s, {
		...u,
		ref: t,
		onThumbPositionChange: () => {
			if (i.viewport && a.current) {
				let e = i.viewport.scrollLeft, t = mc(e, s, i.dir);
				a.current.style.transform = `translate3d(${t}px, 0, 0)`;
			}
		},
		onWheelScroll: (e) => {
			i.viewport && (i.viewport.scrollLeft = e);
		},
		onDragScroll: (e) => {
			i.viewport && (i.viewport.scrollLeft = d(e, i.dir));
		}
	}) : n === "vertical" ? /* @__PURE__ */ w(ec, {
		...u,
		ref: t,
		onThumbPositionChange: () => {
			if (i.viewport && a.current) {
				let e = i.viewport.scrollTop, t = mc(e, s);
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
}), $s = h.forwardRef((e, t) => {
	let { sizes: n, onSizesChange: r, ...i } = e, a = Q($, e.__scopeScrollArea), [o, s] = h.useState(), c = h.useRef(null), l = Y(t, c, a.onScrollbarXChange);
	return h.useEffect(() => {
		c.current && s(getComputedStyle(c.current));
	}, [c]), /* @__PURE__ */ w(rc, {
		"data-orientation": "horizontal",
		...i,
		ref: l,
		sizes: n,
		style: {
			bottom: 0,
			left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": fc(n) + "px",
			...e.style
		},
		onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
		onDragScroll: (t) => e.onDragScroll(t.x),
		onWheelScroll: (t, n) => {
			if (a.viewport) {
				let r = a.viewport.scrollLeft + t.deltaX;
				e.onWheelScroll(r), gc(r, n) && t.preventDefault();
			}
		},
		onResize: () => {
			c.current && a.viewport && o && r({
				content: a.viewport.scrollWidth,
				viewport: a.viewport.offsetWidth,
				scrollbar: {
					size: c.current.clientWidth,
					paddingStart: uc(o.paddingLeft),
					paddingEnd: uc(o.paddingRight)
				}
			});
		}
	});
}), ec = h.forwardRef((e, t) => {
	let { sizes: n, onSizesChange: r, ...i } = e, a = Q($, e.__scopeScrollArea), [o, s] = h.useState(), c = h.useRef(null), l = Y(t, c, a.onScrollbarYChange);
	return h.useEffect(() => {
		c.current && s(getComputedStyle(c.current));
	}, [c]), /* @__PURE__ */ w(rc, {
		"data-orientation": "vertical",
		...i,
		ref: l,
		sizes: n,
		style: {
			top: 0,
			right: a.dir === "ltr" ? 0 : void 0,
			left: a.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": fc(n) + "px",
			...e.style
		},
		onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
		onDragScroll: (t) => e.onDragScroll(t.y),
		onWheelScroll: (t, n) => {
			if (a.viewport) {
				let r = a.viewport.scrollTop + t.deltaY;
				e.onWheelScroll(r), gc(r, n) && t.preventDefault();
			}
		},
		onResize: () => {
			c.current && a.viewport && o && r({
				content: a.viewport.scrollHeight,
				viewport: a.viewport.offsetHeight,
				scrollbar: {
					size: c.current.clientHeight,
					paddingStart: uc(o.paddingTop),
					paddingEnd: uc(o.paddingBottom)
				}
			});
		}
	});
}), [tc, nc] = Hs($), rc = h.forwardRef((e, t) => {
	let { __scopeScrollArea: n, sizes: r, hasThumb: i, onThumbChange: a, onThumbPointerUp: o, onThumbPointerDown: s, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...f } = e, p = Q($, n), [m, g] = h.useState(null), _ = Y(t, (e) => g(e)), v = h.useRef(null), y = h.useRef(""), ee = p.viewport, b = r.content - r.viewport, x = X(u), te = X(c), ne = vc(d, 10);
	function S(e) {
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
	]), h.useEffect(te, [r, te]), yc(m, ne), yc(p.content, ne), /* @__PURE__ */ w(tc, {
		scope: n,
		scrollbar: m,
		hasThumb: i,
		onThumbChange: X(a),
		onThumbPointerUp: X(o),
		onThumbPositionChange: te,
		onThumbPointerDown: X(s),
		children: /* @__PURE__ */ w(Ds.div, {
			...f,
			ref: _,
			style: {
				position: "absolute",
				...f.style
			},
			onPointerDown: Z(e.onPointerDown, (e) => {
				e.button === 0 && (e.target.setPointerCapture(e.pointerId), v.current = m.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), S(e));
			}),
			onPointerMove: Z(e.onPointerMove, S),
			onPointerUp: Z(e.onPointerUp, (e) => {
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = y.current, p.viewport && (p.viewport.style.scrollBehavior = ""), v.current = null;
			})
		})
	});
}), ic = "ScrollAreaThumb", ac = h.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = nc(ic, e.__scopeScrollArea);
	return /* @__PURE__ */ w(js, {
		present: n || i.hasThumb,
		children: /* @__PURE__ */ w(oc, {
			ref: t,
			...r
		})
	});
}), oc = h.forwardRef((e, t) => {
	let { __scopeScrollArea: n, style: r, ...i } = e, a = Q(ic, n), o = nc(ic, n), { onThumbPositionChange: s } = o, c = Y(t, (e) => o.onThumbChange(e)), l = h.useRef(void 0), u = vc(() => {
		l.current && (l.current(), l.current = void 0);
	}, 100);
	return h.useEffect(() => {
		let e = a.viewport;
		if (e) {
			let t = () => {
				u(), l.current || (l.current = _c(e, s), s());
			};
			return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
		}
	}, [
		a.viewport,
		u,
		s
	]), /* @__PURE__ */ w(Ds.div, {
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
ac.displayName = ic;
var sc = "ScrollAreaCorner", cc = h.forwardRef((e, t) => {
	let n = Q(sc, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
	return n.type !== "scroll" && r ? /* @__PURE__ */ w(lc, {
		...e,
		ref: t
	}) : null;
});
cc.displayName = sc;
var lc = h.forwardRef((e, t) => {
	let { __scopeScrollArea: n, ...r } = e, i = Q(sc, n), [a, o] = h.useState(0), [s, c] = h.useState(0), l = !!(a && s);
	return yc(i.scrollbarX, () => {
		let e = i.scrollbarX?.offsetHeight || 0;
		i.onCornerHeightChange(e), c(e);
	}), yc(i.scrollbarY, () => {
		let e = i.scrollbarY?.offsetWidth || 0;
		i.onCornerWidthChange(e), o(e);
	}), l ? /* @__PURE__ */ w(Ds.div, {
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
function uc(e) {
	return e ? parseInt(e, 10) : 0;
}
function dc(e, t) {
	let n = e / t;
	return isNaN(n) ? 0 : n;
}
function fc(e) {
	let t = dc(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
	return Math.max(r, 18);
}
function pc(e, t, n, r = "ltr") {
	let i = fc(n), a = i / 2, o = t || a, s = i - o, c = n.scrollbar.paddingStart + o, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
	return hc([c, l], d)(e);
}
function mc(e, t, n = "ltr") {
	let r = fc(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, o = t.content - t.viewport, s = a - r, c = zs(e, n === "ltr" ? [0, o] : [o * -1, 0]);
	return hc([0, o], [0, s])(c);
}
function hc(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function gc(e, t) {
	return e > 0 && e < t;
}
var _c = (e, t = () => {}) => {
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
function vc(e, t) {
	let n = X(e), r = h.useRef(0);
	return h.useEffect(() => () => window.clearTimeout(r.current), []), h.useCallback(() => {
		window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
	}, [n, t]);
}
function yc(e, t) {
	let n = X(t);
	ks(() => {
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
var bc = Gs, xc = qs, Sc = cc;
//#endregion
//#region components/ui/scroll-area.tsx
function Cc({ className: e, viewportRef: t, children: n, onScroll: r, ...i }) {
	return /* @__PURE__ */ T(bc, {
		"data-slot": "scroll-area",
		className: f("relative min-h-0 min-w-0 overflow-hidden", e),
		...i,
		children: [
			/* @__PURE__ */ w(xc, {
				ref: t,
				"data-slot": "scroll-area-viewport",
				onScroll: r,
				className: f("h-full w-full rounded-[inherit]", "[&>div]:!block [&>div]:!w-full [&>div]:!max-w-full", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary/40"),
				children: n
			}),
			/* @__PURE__ */ w(wc, {}),
			/* @__PURE__ */ w(Sc, {})
		]
	});
}
function wc({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ w(Js, {
		"data-slot": "scroll-area-scrollbar",
		orientation: t,
		className: f("flex touch-none select-none transition-opacity duration-150", "opacity-0 data-[state=visible]:opacity-100", "hover:opacity-100", t === "vertical" && "h-full w-1.5 border-l border-l-transparent p-px", t === "horizontal" && "h-1.5 flex-col border-t border-t-transparent p-px", e),
		...n,
		children: /* @__PURE__ */ w(ac, {
			"data-slot": "scroll-area-thumb",
			className: f("relative flex-1 rounded-full", "bg-wx-fg-muted/40 hover:bg-wx-fg-muted/60 transition-colors")
		})
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message/media-lightbox.tsx
function Tc({ items: e, initialIndex: t, open: r, onClose: i }) {
	let a = d("lightbox"), [o, s] = C(t), c = Ao(), l = !(c.embedded ?? !1) || (c.lightboxViewport ?? !0);
	b(() => {
		r && s(t);
	}, [r, t]);
	let u = e.length, p = e[o], m = y(() => {
		s((e) => (e + 1) % u);
	}, [u]), h = y(() => {
		s((e) => (e - 1 + u) % u);
	}, [u]);
	b(() => {
		if (!r) return;
		let e = (e) => {
			e.key === "Escape" ? i() : e.key === "ArrowRight" ? m() : e.key === "ArrowLeft" && h();
		};
		document.addEventListener("keydown", e);
		let t = document.body.style.overflow;
		return l && (document.body.style.overflow = "hidden"), () => {
			document.removeEventListener("keydown", e), l && (document.body.style.overflow = t);
		};
	}, [
		r,
		i,
		m,
		h,
		l
	]);
	let g = c.themeRoot ?? (typeof document < "u" ? document.body : null);
	return g ? oe(/* @__PURE__ */ w(wo, { children: r && p && /* @__PURE__ */ T(n.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .15 },
		onClick: i,
		className: f(l ? "fixed" : "absolute", "inset-0 z-2147483647 flex items-center justify-center", "bg-black/85 backdrop-blur-sm"),
		role: "dialog",
		"aria-modal": "true",
		"aria-label": p.alt || a("mediaPreview"),
		children: [
			/* @__PURE__ */ w("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), i();
				},
				"aria-label": a("close"),
				className: f("absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ w(ds, { size: 18 })
			}),
			u > 1 && /* @__PURE__ */ T(ie, { children: [/* @__PURE__ */ w("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), h();
				},
				"aria-label": a("previous"),
				className: f("absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ w(ls, { size: 20 })
			}), /* @__PURE__ */ w("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), m();
				},
				"aria-label": a("next"),
				className: f("absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ w(us, { size: 20 })
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
				className: f("pointer-events-none flex items-center justify-center", l ? "max-h-[90vh] max-w-[90vw]" : "absolute inset-0 p-6"),
				children: p.mimetype.startsWith("video/") ? /* @__PURE__ */ w("video", {
					src: p.url,
					controls: !0,
					autoPlay: !0,
					onClick: (e) => e.stopPropagation(),
					className: f("pointer-events-auto rounded-wx-lg", l ? "max-h-[90vh] max-w-[90vw]" : "max-h-full max-w-full")
				}) : p.mimetype === "application/pdf" ? /* @__PURE__ */ w("iframe", {
					src: p.url,
					title: p.alt || "PDF preview",
					onClick: (e) => e.stopPropagation(),
					className: f("pointer-events-auto rounded-wx-lg border-0 bg-white", l ? "h-[90vh] w-[90vw]" : "h-full w-full")
				}) : /* @__PURE__ */ w(n.img, {
					src: p.url,
					alt: p.alt,
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
						t.offset.x <= -60 ? m() : t.offset.x >= 60 && h();
					},
					className: f("pointer-events-auto rounded-wx-lg object-contain", u > 1 && "cursor-grab active:cursor-grabbing", l ? "max-h-[90vh] max-w-[90vw]" : "max-h-full max-w-full")
				})
			}, `${o}-${p.url}`),
			u > 1 && /* @__PURE__ */ T("div", {
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
//#region lib/content-languages.ts
var Ec = [
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
function Dc(e) {
	let t = Ec.find((t) => t.value === e);
	if (t) return t.label;
	let n = e.split("-")[0].toLowerCase(), r = Ec.find((e) => e.value === n);
	return r ? r.label : n.toUpperCase();
}
//#endregion
export { H as $, Rt as $t, mo as A, nr as At, ba as B, un as Bt, Zo as C, cr as Ct, Ao as D, Wn as Dt, ko as E, ur as Et, Ja as F, En as Ft, fa as G, $t as Gt, G as H, dn as Ht, Za as I, Tn as It, ua as J, Gt as Jt, ca as K, en as Kt, J as L, Cn as Lt, oo as M, kn as Mt, no as N, Dn as Nt, Eo as O, Un as Ot, co as P, On as Pt, V as Q, Lt as Qt, Ha as R, bn as Rt, Qo as S, ar as St, Po as T, lr as Tt, _a as U, sn as Ut, Sa as V, cn as Vt, pa as W, nn as Wt, Ji as X, Vt as Xt, W as Y, Ht as Yt, qi as Z, Bt as Zt, Y as _, _r as _t, zs as a, Ce as an, Fi as at, cs as b, hr as bt, Fs as c, ye as cn, ii as ct, Os as d, ce as dn, $r as dt, nt as en, Gi as et, ms as f, de as fn, Tr as ft, ps as g, mr as gt, _s as h, gr as ht, Z as i, Te as in, Ii as it, to as j, zn as jt, wo as k, sr as kt, ks as l, E as ln, ai as lt, vs as m, D as mn, vr as mt, Tc as n, Ae as nn, Ri as nt, Rs as o, Se as on, ji as ot, ys as p, le as pn, dr as pt, la as q, Xt as qt, Cc as r, A as rn, Li as rt, X as s, k as sn, Oi as st, Dc as t, M as tn, zi as tt, Ds as u, ue as un, ri as ut, ds as v, fr as vt, qo as w, Gn as wt, ss as x, or as xt, us as y, pr as yt, Na as z, ln as zt };

//# sourceMappingURL=widget-react-DfX-FjHu.js.map