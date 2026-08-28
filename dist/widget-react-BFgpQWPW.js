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
import { i as m, n as h, o as g, t as _ } from "./widget-react-BGCZpMUT.js";
import * as v from "react";
import { Children as y, createContext as b, createElement as x, isValidElement as S, useCallback as C, useContext as w, useEffect as T, useId as ee, useInsertionEffect as E, useLayoutEffect as te, useMemo as ne, useRef as re, useState as D } from "react";
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
function M(e, t) {
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
})(M || (M = {}));
//#endregion
//#region node_modules/@apollo/client/version.js
var ye = "3.14.1";
//#endregion
//#region node_modules/@apollo/client/utilities/globals/maybe.js
function N(e) {
	try {
		return e();
	} catch {}
}
//#endregion
//#region node_modules/@apollo/client/utilities/globals/global.js
var be = N(function() {
	return globalThis;
}) || N(function() {
	return window;
}) || N(function() {
	return self;
}) || N(function() {
	return global;
}) || N(function() {
	return N.constructor("return this")();
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
var P = Object.assign(function(e, t) {
	var n = [...arguments].slice(2);
	e || M(e, Oe(t, n) || ke(t, n));
}, {
	debug: we(M.debug),
	log: we(M.log),
	warn: we(M.warn),
	error: we(M.error)
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
var Ae = /* @__PURE__ */ p(((e, n) => {
	n.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, n.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, n.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(n.exports, t("react"));
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
function F(e, t, n) {
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
var I;
(function(e) {
	e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.DIRECTIVE_EXTENSION = "DirectiveExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", e.TYPE_COORDINATE = "TypeCoordinate", e.MEMBER_COORDINATE = "MemberCoordinate", e.ARGUMENT_COORDINATE = "ArgumentCoordinate", e.DIRECTIVE_COORDINATE = "DirectiveCoordinate", e.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
})(I || (I = {}));
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
var L;
(function(e) {
	e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.DOT = ".", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(L || (L = {}));
//#endregion
//#region node_modules/graphql/language/lexer.mjs
var rt = class {
	constructor(e) {
		let t = new Ue(L.SOF, 0, 0, 0, 0);
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
		if (e.kind !== L.EOF) do
			if (e.next) e = e.next;
			else {
				let t = ut(this, e.end);
				e.next = t, t.prev = e, e = t;
			}
		while (e.kind === L.COMMENT);
		return e;
	}
};
function it(e) {
	return e === L.BANG || e === L.DOLLAR || e === L.AMP || e === L.PAREN_L || e === L.PAREN_R || e === L.DOT || e === L.SPREAD || e === L.COLON || e === L.EQUALS || e === L.AT || e === L.BRACKET_L || e === L.BRACKET_R || e === L.BRACE_L || e === L.PIPE || e === L.BRACE_R;
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
function lt(e, t) {
	let n = e.source.body.codePointAt(t);
	if (n === void 0) return L.EOF;
	if (n >= 32 && n <= 126) {
		let e = String.fromCodePoint(n);
		return e === "\"" ? "'\"'" : `"${e}"`;
	}
	return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function R(e, t, n, r, i) {
	let a = e.line;
	return new Ue(t, n, r, a, 1 + n - e.lineStart, i);
}
function ut(e, t) {
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
			case 35: return dt(e, i);
			case 33: return R(e, L.BANG, i, i + 1);
			case 36: return R(e, L.DOLLAR, i, i + 1);
			case 38: return R(e, L.AMP, i, i + 1);
			case 40: return R(e, L.PAREN_L, i, i + 1);
			case 41: return R(e, L.PAREN_R, i, i + 1);
			case 46:
				if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return R(e, L.SPREAD, i, i + 3);
				break;
			case 58: return R(e, L.COLON, i, i + 1);
			case 61: return R(e, L.EQUALS, i, i + 1);
			case 64: return R(e, L.AT, i, i + 1);
			case 91: return R(e, L.BRACKET_L, i, i + 1);
			case 93: return R(e, L.BRACKET_R, i, i + 1);
			case 123: return R(e, L.BRACE_L, i, i + 1);
			case 124: return R(e, L.PIPE, i, i + 1);
			case 125: return R(e, L.BRACE_R, i, i + 1);
			case 34: return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? bt(e, i) : mt(e, i);
		}
		if (Xe(t) || t === 45) return ft(e, i, t);
		if (Qe(t)) return xt(e, i);
		throw F(e.source, i, t === 39 ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : at(t) || ot(n, i) ? `Unexpected character: ${lt(e, i)}.` : `Invalid character: ${lt(e, i)}.`);
	}
	return R(e, L.EOF, r, r);
}
function dt(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r;) {
		let e = n.charCodeAt(i);
		if (e === 10 || e === 13) break;
		if (at(e)) ++i;
		else if (ot(n, i)) i += 2;
		else break;
	}
	return R(e, L.COMMENT, t, i, n.slice(t + 1, i));
}
function ft(e, t, n) {
	let r = e.source.body, i = t, a = n, o = !1;
	if (a === 45 && (a = r.charCodeAt(++i)), a === 48) {
		if (a = r.charCodeAt(++i), Xe(a)) throw F(e.source, i, `Invalid number, unexpected digit after 0: ${lt(e, i)}.`);
	} else i = pt(e, i, a), a = r.charCodeAt(i);
	if (a === 46 && (o = !0, a = r.charCodeAt(++i), i = pt(e, i, a), a = r.charCodeAt(i)), (a === 69 || a === 101) && (o = !0, a = r.charCodeAt(++i), (a === 43 || a === 45) && (a = r.charCodeAt(++i)), i = pt(e, i, a), a = r.charCodeAt(i)), a === 46 || Qe(a)) throw F(e.source, i, `Invalid number, expected digit but got: ${lt(e, i)}.`);
	return R(e, o ? L.FLOAT : L.INT, t, i, r.slice(t, i));
}
function pt(e, t, n) {
	if (!Xe(n)) throw F(e.source, t, `Invalid number, expected digit but got: ${lt(e, t)}.`);
	let r = e.source.body, i = t + 1;
	for (; Xe(r.charCodeAt(i));) ++i;
	return i;
}
function mt(e, t) {
	let n = e.source.body, r = n.length, i = t + 1, a = i, o = "";
	for (; i < r;) {
		let r = n.charCodeAt(i);
		if (r === 34) return o += n.slice(a, i), R(e, L.STRING, t, i + 1, o);
		if (r === 92) {
			o += n.slice(a, i);
			let t = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? ht(e, i) : gt(e, i) : yt(e, i);
			o += t.value, i += t.size, a = i;
			continue;
		}
		if (r === 10 || r === 13) break;
		if (at(r)) ++i;
		else if (ot(n, i)) i += 2;
		else throw F(e.source, i, `Invalid character within String: ${lt(e, i)}.`);
	}
	throw F(e.source, i, "Unterminated string.");
}
function ht(e, t) {
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
		if (r = r << 4 | vt(e), r < 0) break;
	}
	throw F(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
}
function gt(e, t) {
	let n = e.source.body, r = _t(n, t + 2);
	if (at(r)) return {
		value: String.fromCodePoint(r),
		size: 6
	};
	if (st(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
		let e = _t(n, t + 8);
		if (ct(e)) return {
			value: String.fromCodePoint(r, e),
			size: 12
		};
	}
	throw F(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function _t(e, t) {
	return vt(e.charCodeAt(t)) << 12 | vt(e.charCodeAt(t + 1)) << 8 | vt(e.charCodeAt(t + 2)) << 4 | vt(e.charCodeAt(t + 3));
}
function vt(e) {
	return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function yt(e, t) {
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
	throw F(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function bt(e, t) {
	let n = e.source.body, r = n.length, i = e.lineStart, a = t + 3, o = a, s = "", c = [];
	for (; a < r;) {
		let r = n.charCodeAt(a);
		if (r === 34 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34) {
			s += n.slice(o, a), c.push(s);
			let r = R(e, L.BLOCK_STRING, t, a + 3, et(c).join("\n"));
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
		else throw F(e.source, a, `Invalid character within String: ${lt(e, a)}.`);
	}
	throw F(e.source, a, "Unterminated string.");
}
function xt(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r && $e(n.charCodeAt(i));) ++i;
	return R(e, L.NAME, t, i, n.slice(t, i));
}
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/typeof.js
function St(e) {
	"@babel/helpers - typeof";
	return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, St(e);
}
var Ct = r((() => {}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/toPrimitive.js
function wt(e, t) {
	if (St(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (St(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Tt = r((() => {
	Ct();
}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/toPropertyKey.js
function Et(e) {
	var t = wt(e, "string");
	return St(t) == "symbol" ? t : t + "";
}
var Dt = r((() => {
	Ct(), Tt();
}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/defineProperty.js
function z(e, t, n) {
	return (t = Et(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Ot = r((() => {
	Dt();
})), kt = 10, At = 2;
function jt(e) {
	return Mt(e, []);
}
function Mt(e, t) {
	switch (typeof e) {
		case "string": return JSON.stringify(e);
		case "function": return e.name ? `[function ${e.name}]` : "[function]";
		case "object": return Nt(e, t);
		default: return String(e);
	}
}
function Nt(e, t) {
	if (e === null) return "null";
	if (t.includes(e)) return "[Circular]";
	let n = [...t, e];
	if (Pt(e)) {
		let t = e.toJSON();
		if (t !== e) return typeof t == "string" ? t : Mt(t, n);
	} else if (Array.isArray(e)) return It(e, n);
	return Ft(e, n);
}
function Pt(e) {
	return typeof e.toJSON == "function";
}
function Ft(e, t) {
	let n = Object.entries(e);
	return n.length === 0 ? "{}" : t.length > At ? "[" + Lt(e) + "]" : "{ " + n.map(([e, n]) => e + ": " + Mt(n, t)).join(", ") + " }";
}
function It(e, t) {
	if (e.length === 0) return "[]";
	if (t.length > At) return "[Array]";
	let n = Math.min(kt, e.length), r = e.length - n, i = [];
	for (let r = 0; r < n; ++r) i.push(Mt(e[r], t));
	return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function Lt(e) {
	let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
	if (t === "Object" && typeof e.constructor == "function") {
		let t = e.constructor.name;
		if (typeof t == "string" && t !== "") return t;
	}
	return t;
}
var Rt = globalThis.process ? function(e, t) {
	return e instanceof t;
} : function(e, t) {
	if (e instanceof t) return !0;
	if (typeof e == "object" && e) {
		let n = t.prototype[Symbol.toStringTag];
		if (n === (Symbol.toStringTag in e ? e[Symbol.toStringTag] : e.constructor?.name)) {
			let t = jt(e);
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
}, zt = class {
	constructor(e, t = "GraphQL request", n = {
		line: 1,
		column: 1
	}) {
		typeof e == "string" || je(!1, `Body must be a string. Received: ${jt(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || je(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || je(!1, "column in locationOffset is 1-indexed and must be positive.");
	}
	get [Symbol.toStringTag]() {
		return "Source";
	}
};
function Bt(e) {
	return Rt(e, zt);
}
//#endregion
//#region node_modules/graphql/language/parser.mjs
function Vt(e, t) {
	let n = new Ht(e, t), r = n.parseDocument();
	return Object.defineProperty(r, "tokenCount", {
		enumerable: !1,
		value: n.tokenCount
	}), r;
}
var Ht = class {
	constructor(e, t = {}) {
		let { lexer: n, ...r } = t;
		if (n) this._lexer = n;
		else {
			let t = Bt(e) ? e : new zt(e);
			this._lexer = new rt(t);
		}
		this._options = r, this._tokenCounter = 0;
	}
	get tokenCount() {
		return this._tokenCounter;
	}
	parseName() {
		let e = this.expectToken(L.NAME);
		return this.node(e, {
			kind: I.NAME,
			value: e.value
		});
	}
	parseDocument() {
		return this.node(this._lexer.token, {
			kind: I.DOCUMENT,
			definitions: this.many(L.SOF, this.parseDefinition, L.EOF)
		});
	}
	parseDefinition() {
		if (this.peek(L.BRACE_L)) return this.parseOperationDefinition();
		let e = this.peekDescription(), t = e ? this._lexer.lookahead() : this._lexer.token;
		if (e && t.kind === L.BRACE_L) throw F(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are not supported on shorthand queries.");
		if (t.kind === L.NAME) {
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
			if (e) throw F(this._lexer.source, this._lexer.token.start, "Unexpected description, only GraphQL definitions support descriptions.");
			switch (t.value) {
				case "extend": return this.parseTypeSystemExtension();
			}
		}
		throw this.unexpected(t);
	}
	parseOperationDefinition() {
		let e = this._lexer.token;
		if (this.peek(L.BRACE_L)) return this.node(e, {
			kind: I.OPERATION_DEFINITION,
			operation: qe.QUERY,
			description: void 0,
			name: void 0,
			variableDefinitions: [],
			directives: [],
			selectionSet: this.parseSelectionSet()
		});
		let t = this.parseDescription(), n = this.parseOperationType(), r;
		return this.peek(L.NAME) && (r = this.parseName()), this.node(e, {
			kind: I.OPERATION_DEFINITION,
			operation: n,
			description: t,
			name: r,
			variableDefinitions: this.parseVariableDefinitions(),
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		});
	}
	parseOperationType() {
		let e = this.expectToken(L.NAME);
		switch (e.value) {
			case "query": return qe.QUERY;
			case "mutation": return qe.MUTATION;
			case "subscription": return qe.SUBSCRIPTION;
		}
		throw this.unexpected(e);
	}
	parseVariableDefinitions() {
		return this.optionalMany(L.PAREN_L, this.parseVariableDefinition, L.PAREN_R);
	}
	parseVariableDefinition() {
		return this.node(this._lexer.token, {
			kind: I.VARIABLE_DEFINITION,
			description: this.parseDescription(),
			variable: this.parseVariable(),
			type: (this.expectToken(L.COLON), this.parseTypeReference()),
			defaultValue: this.expectOptionalToken(L.EQUALS) ? this.parseConstValueLiteral() : void 0,
			directives: this.parseConstDirectives()
		});
	}
	parseVariable() {
		let e = this._lexer.token;
		return this.expectToken(L.DOLLAR), this.node(e, {
			kind: I.VARIABLE,
			name: this.parseName()
		});
	}
	parseSelectionSet() {
		return this.node(this._lexer.token, {
			kind: I.SELECTION_SET,
			selections: this.many(L.BRACE_L, this.parseSelection, L.BRACE_R)
		});
	}
	parseSelection() {
		return this.peek(L.SPREAD) ? this.parseFragment() : this.parseField();
	}
	parseField() {
		let e = this._lexer.token, t = this.parseName(), n, r;
		return this.expectOptionalToken(L.COLON) ? (n = t, r = this.parseName()) : r = t, this.node(e, {
			kind: I.FIELD,
			alias: n,
			name: r,
			arguments: this.parseArguments(!1),
			directives: this.parseDirectives(!1),
			selectionSet: this.peek(L.BRACE_L) ? this.parseSelectionSet() : void 0
		});
	}
	parseArguments(e) {
		let t = e ? this.parseConstArgument : this.parseArgument;
		return this.optionalMany(L.PAREN_L, t, L.PAREN_R);
	}
	parseArgument(e = !1) {
		let t = this._lexer.token, n = this.parseName();
		return this.expectToken(L.COLON), this.node(t, {
			kind: I.ARGUMENT,
			name: n,
			value: this.parseValueLiteral(e)
		});
	}
	parseConstArgument() {
		return this.parseArgument(!0);
	}
	parseFragment() {
		let e = this._lexer.token;
		this.expectToken(L.SPREAD);
		let t = this.expectOptionalKeyword("on");
		return !t && this.peek(L.NAME) ? this.node(e, {
			kind: I.FRAGMENT_SPREAD,
			name: this.parseFragmentName(),
			directives: this.parseDirectives(!1)
		}) : this.node(e, {
			kind: I.INLINE_FRAGMENT,
			typeCondition: t ? this.parseNamedType() : void 0,
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		});
	}
	parseFragmentDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, {
			kind: I.FRAGMENT_DEFINITION,
			description: t,
			name: this.parseFragmentName(),
			variableDefinitions: this.parseVariableDefinitions(),
			typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
			directives: this.parseDirectives(!1),
			selectionSet: this.parseSelectionSet()
		}) : this.node(e, {
			kind: I.FRAGMENT_DEFINITION,
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
			case L.BRACKET_L: return this.parseList(e);
			case L.BRACE_L: return this.parseObject(e);
			case L.INT: return this.advanceLexer(), this.node(t, {
				kind: I.INT,
				value: t.value
			});
			case L.FLOAT: return this.advanceLexer(), this.node(t, {
				kind: I.FLOAT,
				value: t.value
			});
			case L.STRING:
			case L.BLOCK_STRING: return this.parseStringLiteral();
			case L.NAME: switch (this.advanceLexer(), t.value) {
				case "true": return this.node(t, {
					kind: I.BOOLEAN,
					value: !0
				});
				case "false": return this.node(t, {
					kind: I.BOOLEAN,
					value: !1
				});
				case "null": return this.node(t, { kind: I.NULL });
				default: return this.node(t, {
					kind: I.ENUM,
					value: t.value
				});
			}
			case L.DOLLAR:
				if (e) if (this.expectToken(L.DOLLAR), this._lexer.token.kind === L.NAME) {
					let e = this._lexer.token.value;
					throw F(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`);
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
			kind: I.STRING,
			value: e.value,
			block: e.kind === L.BLOCK_STRING
		});
	}
	parseList(e) {
		return this.node(this._lexer.token, {
			kind: I.LIST,
			values: this.any(L.BRACKET_L, () => this.parseValueLiteral(e), L.BRACKET_R)
		});
	}
	parseObject(e) {
		return this.node(this._lexer.token, {
			kind: I.OBJECT,
			fields: this.any(L.BRACE_L, () => this.parseObjectField(e), L.BRACE_R)
		});
	}
	parseObjectField(e) {
		let t = this._lexer.token, n = this.parseName();
		return this.expectToken(L.COLON), this.node(t, {
			kind: I.OBJECT_FIELD,
			name: n,
			value: this.parseValueLiteral(e)
		});
	}
	parseDirectives(e) {
		let t = [];
		for (; this.peek(L.AT);) t.push(this.parseDirective(e));
		return t;
	}
	parseConstDirectives() {
		return this.parseDirectives(!0);
	}
	parseDirective(e) {
		let t = this._lexer.token;
		return this.expectToken(L.AT), this.node(t, {
			kind: I.DIRECTIVE,
			name: this.parseName(),
			arguments: this.parseArguments(e)
		});
	}
	parseTypeReference() {
		let e = this._lexer.token, t;
		if (this.expectOptionalToken(L.BRACKET_L)) {
			let n = this.parseTypeReference();
			this.expectToken(L.BRACKET_R), t = this.node(e, {
				kind: I.LIST_TYPE,
				type: n
			});
		} else t = this.parseNamedType();
		return this.expectOptionalToken(L.BANG) ? this.node(e, {
			kind: I.NON_NULL_TYPE,
			type: t
		}) : t;
	}
	parseNamedType() {
		return this.node(this._lexer.token, {
			kind: I.NAMED_TYPE,
			name: this.parseName()
		});
	}
	peekDescription() {
		return this.peek(L.STRING) || this.peek(L.BLOCK_STRING);
	}
	parseDescription() {
		if (this.peekDescription()) return this.parseStringLiteral();
	}
	parseSchemaDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("schema");
		let n = this.parseConstDirectives(), r = this.many(L.BRACE_L, this.parseOperationTypeDefinition, L.BRACE_R);
		return this.node(e, {
			kind: I.SCHEMA_DEFINITION,
			description: t,
			directives: n,
			operationTypes: r
		});
	}
	parseOperationTypeDefinition() {
		let e = this._lexer.token, t = this.parseOperationType();
		this.expectToken(L.COLON);
		let n = this.parseNamedType();
		return this.node(e, {
			kind: I.OPERATION_TYPE_DEFINITION,
			operation: t,
			type: n
		});
	}
	parseScalarTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("scalar");
		let n = this.parseName(), r = this.parseConstDirectives();
		return this.node(e, {
			kind: I.SCALAR_TYPE_DEFINITION,
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
			kind: I.OBJECT_TYPE_DEFINITION,
			description: t,
			name: n,
			interfaces: r,
			directives: i,
			fields: a
		});
	}
	parseImplementsInterfaces() {
		return this.expectOptionalKeyword("implements") ? this.delimitedMany(L.AMP, this.parseNamedType) : [];
	}
	parseFieldsDefinition() {
		return this.optionalMany(L.BRACE_L, this.parseFieldDefinition, L.BRACE_R);
	}
	parseFieldDefinition() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseName(), r = this.parseArgumentDefs();
		this.expectToken(L.COLON);
		let i = this.parseTypeReference(), a = this.parseConstDirectives();
		return this.node(e, {
			kind: I.FIELD_DEFINITION,
			description: t,
			name: n,
			arguments: r,
			type: i,
			directives: a
		});
	}
	parseArgumentDefs() {
		return this.optionalMany(L.PAREN_L, this.parseInputValueDef, L.PAREN_R);
	}
	parseInputValueDef() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseName();
		this.expectToken(L.COLON);
		let r = this.parseTypeReference(), i;
		this.expectOptionalToken(L.EQUALS) && (i = this.parseConstValueLiteral());
		let a = this.parseConstDirectives();
		return this.node(e, {
			kind: I.INPUT_VALUE_DEFINITION,
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
			kind: I.INTERFACE_TYPE_DEFINITION,
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
			kind: I.UNION_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			types: i
		});
	}
	parseUnionMemberTypes() {
		return this.expectOptionalToken(L.EQUALS) ? this.delimitedMany(L.PIPE, this.parseNamedType) : [];
	}
	parseEnumTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("enum");
		let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
		return this.node(e, {
			kind: I.ENUM_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			values: i
		});
	}
	parseEnumValuesDefinition() {
		return this.optionalMany(L.BRACE_L, this.parseEnumValueDefinition, L.BRACE_R);
	}
	parseEnumValueDefinition() {
		let e = this._lexer.token, t = this.parseDescription(), n = this.parseEnumValueName(), r = this.parseConstDirectives();
		return this.node(e, {
			kind: I.ENUM_VALUE_DEFINITION,
			description: t,
			name: n,
			directives: r
		});
	}
	parseEnumValueName() {
		if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw F(this._lexer.source, this._lexer.token.start, `${Ut(this._lexer.token)} is reserved and cannot be used for an enum value.`);
		return this.parseName();
	}
	parseInputObjectTypeDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("input");
		let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
		return this.node(e, {
			kind: I.INPUT_OBJECT_TYPE_DEFINITION,
			description: t,
			name: n,
			directives: r,
			fields: i
		});
	}
	parseInputFieldsDefinition() {
		return this.optionalMany(L.BRACE_L, this.parseInputValueDef, L.BRACE_R);
	}
	parseTypeSystemExtension() {
		let e = this._lexer.lookahead();
		if (e.kind === L.NAME) switch (e.value) {
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
		let t = this.parseConstDirectives(), n = this.optionalMany(L.BRACE_L, this.parseOperationTypeDefinition, L.BRACE_R);
		if (t.length === 0 && n.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: I.SCHEMA_EXTENSION,
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
			kind: I.SCALAR_TYPE_EXTENSION,
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
			kind: I.OBJECT_TYPE_EXTENSION,
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
			kind: I.INTERFACE_TYPE_EXTENSION,
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
			kind: I.UNION_TYPE_EXTENSION,
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
			kind: I.ENUM_TYPE_EXTENSION,
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
			kind: I.INPUT_OBJECT_TYPE_EXTENSION,
			name: t,
			directives: n,
			fields: r
		});
	}
	parseDirectiveDefinitionExtension() {
		let e = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("directive"), this.expectToken(L.AT);
		let t = this.parseName(), n = this.parseConstDirectives();
		if (n.length === 0) throw this.unexpected();
		return this.node(e, {
			kind: I.DIRECTIVE_EXTENSION,
			name: t,
			directives: n
		});
	}
	parseDirectiveDefinition() {
		let e = this._lexer.token, t = this.parseDescription();
		this.expectKeyword("directive"), this.expectToken(L.AT);
		let n = this.parseName(), r = this.parseArgumentDefs(), i = this._options.experimentalDirectivesOnDirectiveDefinitions ? this.parseConstDirectives() : [], a = this.expectOptionalKeyword("repeatable");
		this.expectKeyword("on");
		let o = this.parseDirectiveLocations();
		return this.node(e, {
			kind: I.DIRECTIVE_DEFINITION,
			description: t,
			name: n,
			arguments: r,
			directives: i,
			repeatable: a,
			locations: o
		});
	}
	parseDirectiveLocations() {
		return this.delimitedMany(L.PIPE, this.parseDirectiveLocation);
	}
	parseDirectiveLocation() {
		let e = this._lexer.token, t = this.parseName();
		if (Object.prototype.hasOwnProperty.call(Je, t.value)) return t;
		throw this.unexpected(e);
	}
	parseSchemaCoordinate() {
		let e = this._lexer.token, t = this.expectOptionalToken(L.AT), n = this.parseName(), r;
		!t && this.expectOptionalToken(L.DOT) && (r = this.parseName());
		let i;
		return (t || r) && this.expectOptionalToken(L.PAREN_L) && (i = this.parseName(), this.expectToken(L.COLON), this.expectToken(L.PAREN_R)), t ? i ? this.node(e, {
			kind: I.DIRECTIVE_ARGUMENT_COORDINATE,
			name: n,
			argumentName: i
		}) : this.node(e, {
			kind: I.DIRECTIVE_COORDINATE,
			name: n
		}) : r ? i ? this.node(e, {
			kind: I.ARGUMENT_COORDINATE,
			name: n,
			fieldName: r,
			argumentName: i
		}) : this.node(e, {
			kind: I.MEMBER_COORDINATE,
			name: n,
			memberName: r
		}) : this.node(e, {
			kind: I.TYPE_COORDINATE,
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
		throw F(this._lexer.source, t.start, `Expected ${Wt(e)}, found ${Ut(t)}.`);
	}
	expectOptionalToken(e) {
		return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
	}
	expectKeyword(e) {
		let t = this._lexer.token;
		if (t.kind === L.NAME && t.value === e) this.advanceLexer();
		else throw F(this._lexer.source, t.start, `Expected "${e}", found ${Ut(t)}.`);
	}
	expectOptionalKeyword(e) {
		let t = this._lexer.token;
		return t.kind === L.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
	}
	unexpected(e) {
		let t = e ?? this._lexer.token;
		return F(this._lexer.source, t.start, `Unexpected ${Ut(t)}.`);
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
		if (t.kind !== L.EOF && (++this._tokenCounter, e !== void 0 && this._tokenCounter > e)) throw F(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`);
	}
};
function Ut(e) {
	let t = e.value;
	return Wt(e.kind) + (t == null ? "" : ` "${t}"`);
}
function Wt(e) {
	return it(e) ? `"${e}"` : e;
}
//#endregion
//#region node_modules/graphql/language/visitor.mjs
var Gt = Object.freeze({});
function Kt(e, t, n = We) {
	let r = /* @__PURE__ */ new Map();
	for (let e of Object.values(I)) r.set(e, qt(t, e));
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
			if (Ke(l) || je(!1, `Invalid AST Node: ${jt(l)}.`), h = (e ? r.get(l.kind)?.leave : r.get(l.kind)?.enter)?.call(t, l, u, d, f, p), h === Gt) break;
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
function qt(e, t) {
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
function Jt(e, t) {
	var n = e.directives;
	return !n || !n.length ? !0 : Qt(n).every(function(e) {
		var n = e.directive, r = e.ifArgument, i = !1;
		return r.value.kind === "Variable" ? (i = t && t[r.value.name.value], P(i !== void 0, 105, n.name.value)) : i = r.value.value, n.name.value === "skip" ? !i : i;
	});
}
function Yt(e, t, n) {
	var r = new Set(e), i = r.size;
	return Kt(t, { Directive: function(e) {
		if (r.delete(e.name.value) && (!n || !r.size)) return Gt;
	} }), n ? !r.size : r.size < i;
}
function Xt(e) {
	return e && Yt(["client", "export"], e, !0);
}
function Zt(e) {
	var t = e.name.value;
	return t === "skip" || t === "include";
}
function Qt(e) {
	var t = [];
	return e && e.length && e.forEach(function(e) {
		if (Zt(e)) {
			var n = e.arguments, r = e.name.value;
			P(n && n.length === 1, 106, r);
			var i = n[0];
			P(i.name && i.name.value === "if", 107, r);
			var a = i.value;
			P(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 108, r), t.push({
				directive: e,
				ifArgument: i
			});
		}
	}), t;
}
function $t(e) {
	var t = e.directives?.find(function(e) {
		return e.name.value === "unmask";
	});
	if (!t) return "mask";
	var n = t.arguments?.find(function(e) {
		return e.name.value === "mode";
	});
	return globalThis.__DEV__ !== !1 && n && (n.value.kind === I.VARIABLE ? globalThis.__DEV__ !== !1 && P.warn(109) : n.value.kind === I.STRING ? n.value.value !== "migrate" && globalThis.__DEV__ !== !1 && P.warn(111, n.value.value) : globalThis.__DEV__ !== !1 && P.warn(110)), n && "value" in n.value && n.value.value === "migrate" ? "migrate" : "unmask";
}
//#endregion
//#region node_modules/@wry/trie/lib/index.js
var en = () => Object.create(null), { forEach: tn, slice: nn } = Array.prototype, { hasOwnProperty: rn } = Object.prototype, an = class e {
	constructor(e = !0, t = en) {
		this.weakness = e, this.makeData = t;
	}
	lookup() {
		return this.lookupArray(arguments);
	}
	lookupArray(e) {
		let t = this;
		return tn.call(e, (e) => t = t.getChildTrie(e)), rn.call(t, "data") ? t.data : t.data = this.makeData(nn.call(e));
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
			i && (t = i.removeArray(nn.call(e, 1)), !i.data && !i.weak && !(i.strong && i.strong.size) && r.delete(n));
		} else t = this.data, delete this.data;
		return t;
	}
	getChildTrie(t) {
		let n = this.mapFor(t, !0), r = n.get(t);
		return r || n.set(t, r = new e(this.weakness, this.makeData)), r;
	}
	mapFor(e, t) {
		return this.weakness && on(e) ? this.weak || (t ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (t ? this.strong = /* @__PURE__ */ new Map() : void 0);
	}
};
function on(e) {
	switch (typeof e) {
		case "object": if (e === null) break;
		case "function": return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/canUse.js
var sn = N(function() {
	return navigator.product;
}) == "ReactNative", cn = typeof WeakMap == "function" && !(sn && !global.HermesInternal), ln = typeof WeakSet == "function", un = typeof Symbol == "function" && typeof Symbol.for == "function", dn = un && Symbol.asyncIterator, fn = typeof N(function() {
	return window.document.createElement;
}) == "function", pn = N(function() {
	return navigator.userAgent.indexOf("jsdom") >= 0;
}) || !1, mn = (fn || sn) && !pn;
//#endregion
//#region node_modules/@apollo/client/utilities/common/objects.js
function hn(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/fragments.js
function gn(e, t) {
	var n = t, r = [];
	return e.definitions.forEach(function(e) {
		if (e.kind === "OperationDefinition") throw Te(112, e.operation, e.name ? ` named '${e.name.value}'` : "");
		e.kind === "FragmentDefinition" && r.push(e);
	}), n === void 0 && (P(r.length === 1, 113, r.length), n = r[0].name.value), A(A({}, e), { definitions: j([{
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
function _n(e) {
	e === void 0 && (e = []);
	var t = {};
	return e.forEach(function(e) {
		t[e.name.value] = e;
	}), t;
}
function vn(e, t) {
	switch (e.kind) {
		case "InlineFragment": return e;
		case "FragmentSpread":
			var n = e.name.value;
			if (typeof t == "function") return t(n);
			var r = t && t[n];
			return P(r, 114, n), r || null;
		default: return null;
	}
}
function yn(e) {
	var t = !0;
	return Kt(e, { FragmentSpread: function(e) {
		if (t = !!e.directives && e.directives.some(function(e) {
			return e.name.value === "unmask";
		}), !t) return Gt;
	} }), t;
}
//#endregion
//#region node_modules/@wry/caches/lib/strong.js
function bn() {}
var xn = class {
	constructor(e = Infinity, t = bn) {
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
function Sn() {}
var Cn = Sn, wn = typeof WeakRef < "u" ? WeakRef : function(e) {
	return { deref: () => e };
}, Tn = typeof WeakMap < "u" ? WeakMap : Map, En = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
	return {
		register: Sn,
		unregister: Sn
	};
}, Dn = 10024, On = class {
	constructor(e = Infinity, t = Cn) {
		this.max = e, this.dispose = t, this.map = new Tn(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
			let e = this.unfinalizedNodes.values();
			for (let t = 0; t < Dn; t++) {
				let t = e.next().value;
				if (!t) break;
				this.unfinalizedNodes.delete(t);
				let n = t.key;
				delete t.key, t.keyRef = new wn(n), this.registry.register(n, t, t);
			}
			this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
		}, this.registry = new En(this.deleteNode.bind(this));
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
}, kn = /* @__PURE__ */ new WeakSet();
function An(e) {
	e.size <= (e.max || -1) || kn.has(e) || (kn.add(e), setTimeout(function() {
		e.clean(), kn.delete(e);
	}, 100));
}
var jn = function(e, t) {
	var n = new On(e, t);
	return n.set = function(e, t) {
		var n = On.prototype.set.call(this, e, t);
		return An(this), n;
	}, n;
}, Mn = function(e, t) {
	var n = new xn(e, t);
	return n.set = function(e, t) {
		var n = xn.prototype.set.call(this, e, t);
		return An(this), n;
	}, n;
}, Nn = A({}, be[Symbol.for("apollo.cacheSize")]), Pn = {};
function Fn(e, t) {
	Pn[e] = t;
}
var In = globalThis.__DEV__ === !1 ? void 0 : Bn, Ln = globalThis.__DEV__ === !1 ? void 0 : Hn, Rn = globalThis.__DEV__ === !1 ? void 0 : Vn;
function zn() {
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
		return [t, Nn[t] || n];
	}));
}
function Bn() {
	var e;
	if (globalThis.__DEV__ === !1) throw Error("only supported in development mode");
	return {
		limits: zn(),
		sizes: A({
			print: Pn.print?.call(Pn),
			parser: Pn.parser?.call(Pn),
			canonicalStringify: Pn.canonicalStringify?.call(Pn),
			links: qn(this.link),
			queryManager: {
				getDocumentInfo: this.queryManager.transformCache.size,
				documentTransforms: Gn(this.queryManager.documentTransform)
			}
		}, (e = this.cache).getMemoryInternals?.call(e))
	};
}
function Vn() {
	return { cache: { fragmentQueryDocuments: B(this.getFragmentDoc) } };
}
function Hn() {
	var e = this.config.fragments;
	return A(A({}, Vn.apply(this)), {
		addTypenameDocumentTransform: Gn(this.addTypenameTransform),
		inMemoryCache: {
			executeSelectionSet: B(this.storeReader.executeSelectionSet),
			executeSubSelectedArray: B(this.storeReader.executeSubSelectedArray),
			maybeBroadcastWatch: B(this.maybeBroadcastWatch)
		},
		fragmentRegistry: {
			findFragmentSpreads: B(e?.findFragmentSpreads),
			lookup: B(e?.lookup),
			transform: B(e?.transform)
		}
	});
}
function Un(e) {
	return !!e && "dirtyKey" in e;
}
function B(e) {
	return Un(e) ? e.size : void 0;
}
function Wn(e) {
	return e != null;
}
function Gn(e) {
	return Kn(e).map(function(e) {
		return { cache: e };
	});
}
function Kn(e) {
	return e ? j(j([B(e?.performWork)], Kn(e?.left), !0), Kn(e?.right), !0).filter(Wn) : [];
}
function qn(e) {
	return e ? j(j([(e?.getMemoryInternals)?.call(e)], qn(e?.left), !0), qn(e?.right), !0).filter(Wn) : [];
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/canonicalStringify.js
var Jn = Object.assign(function(e) {
	return JSON.stringify(e, Xn);
}, { reset: function() {
	Yn = new Mn(Nn.canonicalStringify || 1e3);
} });
globalThis.__DEV__ !== !1 && Fn("canonicalStringify", function() {
	return Yn.size;
});
var Yn;
Jn.reset();
function Xn(e, t) {
	if (t && typeof t == "object") {
		var n = Object.getPrototypeOf(t);
		if (n === Object.prototype || n === null) {
			var r = Object.keys(t);
			if (r.every(Zn)) return t;
			var i = JSON.stringify(r), a = Yn.get(i);
			if (!a) {
				r.sort();
				var o = JSON.stringify(r);
				a = Yn.get(o) || r, Yn.set(i, a), Yn.set(o, a);
			}
			var s = Object.create(n);
			return a.forEach(function(e) {
				s[e] = t[e];
			}), s;
		}
	}
	return t;
}
function Zn(e, t, n) {
	return t === 0 || n[t - 1] <= e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/storeUtils.js
function Qn(e) {
	return { __ref: String(e) };
}
function $n(e) {
	return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function er(e) {
	return hn(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function tr(e) {
	return e.kind === "StringValue";
}
function nr(e) {
	return e.kind === "BooleanValue";
}
function rr(e) {
	return e.kind === "IntValue";
}
function ir(e) {
	return e.kind === "FloatValue";
}
function ar(e) {
	return e.kind === "Variable";
}
function or(e) {
	return e.kind === "ObjectValue";
}
function sr(e) {
	return e.kind === "ListValue";
}
function cr(e) {
	return e.kind === "EnumValue";
}
function lr(e) {
	return e.kind === "NullValue";
}
function ur(e, t, n, r) {
	if (rr(n) || ir(n)) e[t.value] = Number(n.value);
	else if (nr(n) || tr(n)) e[t.value] = n.value;
	else if (or(n)) {
		var i = {};
		n.fields.map(function(e) {
			return ur(i, e.name, e.value, r);
		}), e[t.value] = i;
	} else if (ar(n)) {
		var a = (r || {})[n.name.value];
		e[t.value] = a;
	} else if (sr(n)) e[t.value] = n.values.map(function(e) {
		var n = {};
		return ur(n, t, e, r), n[t.value];
	});
	else if (cr(n)) e[t.value] = n.value;
	else if (lr(n)) e[t.value] = null;
	else throw Te(123, t.value, n.kind);
}
function dr(e, t) {
	var n = null;
	e.directives && (n = {}, e.directives.forEach(function(e) {
		n[e.name.value] = {}, e.arguments && e.arguments.forEach(function(r) {
			var i = r.name, a = r.value;
			return ur(n[e.name.value], i, a, t);
		});
	}));
	var r = null;
	return e.arguments && e.arguments.length && (r = {}, e.arguments.forEach(function(e) {
		var n = e.name, i = e.value;
		return ur(r, n, i, t);
	})), mr(e.name.value, r, n);
}
var fr = [
	"connection",
	"include",
	"skip",
	"client",
	"rest",
	"export",
	"nonreactive"
], pr = Jn, mr = Object.assign(function(e, t, n) {
	if (t && n && n.connection && n.connection.key) if (n.connection.filter && n.connection.filter.length > 0) {
		var r = n.connection.filter ? n.connection.filter : [];
		r.sort();
		var i = {};
		return r.forEach(function(e) {
			i[e] = t[e];
		}), `${n.connection.key}(${pr(i)})`;
	} else return n.connection.key;
	var a = e;
	if (t) {
		var o = pr(t);
		a += `(${o})`;
	}
	return n && Object.keys(n).forEach(function(e) {
		fr.indexOf(e) === -1 && (n[e] && Object.keys(n[e]).length ? a += `@${e}(${pr(n[e])})` : a += `@${e}`);
	}), a;
}, { setStringify: function(e) {
	var t = pr;
	return pr = e, t;
} });
function hr(e, t) {
	if (e.arguments && e.arguments.length) {
		var n = {};
		return e.arguments.forEach(function(e) {
			var r = e.name, i = e.value;
			return ur(n, r, i, t);
		}), n;
	}
	return null;
}
function gr(e) {
	return e.alias ? e.alias.value : e.name.value;
}
function _r(e, t, n) {
	for (var r, i = 0, a = t.selections; i < a.length; i++) {
		var o = a[i];
		if (vr(o)) {
			if (o.name.value === "__typename") return e[gr(o)];
		} else r ? r.push(o) : r = [o];
	}
	if (typeof e.__typename == "string") return e.__typename;
	if (r) for (var s = 0, c = r; s < c.length; s++) {
		var o = c[s], l = _r(e, vn(o, n).selectionSet, n);
		if (typeof l == "string") return l;
	}
}
function vr(e) {
	return e.kind === "Field";
}
function yr(e) {
	return e.kind === "InlineFragment";
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/getFromAST.js
function br(e) {
	P(e && e.kind === "Document", 115);
	var t = e.definitions.filter(function(e) {
		return e.kind !== "FragmentDefinition";
	}).map(function(e) {
		if (e.kind !== "OperationDefinition") throw Te(116, e.kind);
		return e;
	});
	return P(t.length <= 1, 117, t.length), e;
}
function xr(e) {
	return br(e), e.definitions.filter(function(e) {
		return e.kind === "OperationDefinition";
	})[0];
}
function Sr(e) {
	return e.definitions.filter(function(e) {
		return e.kind === "OperationDefinition" && !!e.name;
	}).map(function(e) {
		return e.name.value;
	})[0] || null;
}
function Cr(e) {
	return e.definitions.filter(function(e) {
		return e.kind === "FragmentDefinition";
	});
}
function wr(e) {
	var t = xr(e);
	return P(t && t.operation === "query", 118), t;
}
function Tr(e) {
	P(e.kind === "Document", 119), P(e.definitions.length <= 1, 120);
	var t = e.definitions[0];
	return P(t.kind === "FragmentDefinition", 121), t;
}
function Er(e) {
	br(e);
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
function Dr(e) {
	var t = Object.create(null), n = e && e.variableDefinitions;
	return n && n.length && n.forEach(function(e) {
		e.defaultValue && ur(t, e.variable.name, e.defaultValue);
	}), t;
}
//#endregion
//#region node_modules/@wry/context/lib/slot.js
var V = null, Or = {}, kr = 1, Ar = () => class {
	constructor() {
		this.id = [
			"slot",
			kr++,
			Date.now(),
			Math.random().toString(36).slice(2)
		].join(":");
	}
	hasValue() {
		for (let e = V; e; e = e.parent) if (this.id in e.slots) {
			let t = e.slots[this.id];
			if (t === Or) break;
			return e !== V && (V.slots[this.id] = t), !0;
		}
		return V && (V.slots[this.id] = Or), !1;
	}
	getValue() {
		if (this.hasValue()) return V.slots[this.id];
	}
	withValue(e, t, n, r) {
		let i = {
			__proto__: null,
			[this.id]: e
		}, a = V;
		V = {
			parent: a,
			slots: i
		};
		try {
			return t.apply(r, n);
		} finally {
			V = a;
		}
	}
	static bind(e) {
		let t = V;
		return function() {
			let n = V;
			try {
				return V = t, e.apply(this, arguments);
			} finally {
				V = n;
			}
		};
	}
	static noContext(e, t, n) {
		if (V) {
			let r = V;
			try {
				return V = null, e.apply(n, t);
			} finally {
				V = r;
			}
		} else return e.apply(n, t);
	}
};
function jr(e) {
	try {
		return e();
	} catch {}
}
var Mr = "@wry/context:Slot", Nr = jr(() => globalThis) || jr(() => global) || Object.create(null), Pr = Nr[Mr] || Array[Mr] || (function(e) {
	try {
		Object.defineProperty(Nr, Mr, {
			value: e,
			enumerable: !1,
			writable: !1,
			configurable: !0
		});
	} finally {
		return e;
	}
})(Ar()), { bind: Fr, noContext: Ir } = Pr, Lr = new Pr(), { hasOwnProperty: Rr } = Object.prototype, zr = Array.from || function(e) {
	let t = [];
	return e.forEach((e) => t.push(e)), t;
};
function Br(e) {
	let { unsubscribe: t } = e;
	typeof t == "function" && (e.unsubscribe = void 0, t());
}
//#endregion
//#region node_modules/optimism/lib/entry.js
var Vr = [], Hr = 100;
function Ur(e, t) {
	if (!e) throw Error(t || "assertion failure");
}
function Wr(e, t) {
	let n = e.length;
	return n > 0 && n === t.length && e[n - 1] === t[n - 1];
}
function Gr(e) {
	switch (e.length) {
		case 0: throw Error("unknown value");
		case 1: return e[0];
		case 2: throw e[1];
	}
}
function Kr(e) {
	return e.slice(0);
}
var qr = class e {
	constructor(t) {
		this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count;
	}
	peek() {
		if (this.value.length === 1 && !H(this)) return Jr(this), this.value[0];
	}
	recompute(e) {
		return Ur(!this.recomputing, "already recomputing"), Jr(this), H(this) ? Yr(this, e) : Gr(this.value);
	}
	setDirty() {
		this.dirty || (this.dirty = !0, Qr(this), Br(this));
	}
	dispose() {
		this.setDirty(), ii(this), ei(this, (e, t) => {
			e.setDirty(), ai(e, this);
		});
	}
	forget() {
		this.dispose();
	}
	dependOn(e) {
		e.add(this), this.deps || (this.deps = Vr.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
	}
	forgetDeps() {
		this.deps && (zr(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), Vr.push(this.deps), this.deps = null);
	}
};
qr.count = 0;
function Jr(e) {
	let t = Lr.getValue();
	if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), H(e) ? ti(t, e) : ni(t, e), t;
}
function Yr(e, t) {
	return ii(e), Lr.withValue(e, Xr, [e, t]), oi(e, t) && Zr(e), Gr(e.value);
}
function Xr(e, t) {
	e.recomputing = !0;
	let { normalizeResult: n } = e, r;
	n && e.value.length === 1 && (r = Kr(e.value)), e.value.length = 0;
	try {
		if (e.value[0] = e.fn.apply(null, t), n && r && !Wr(r, e.value)) try {
			e.value[0] = n(e.value[0], r[0]);
		} catch {}
	} catch (t) {
		e.value[1] = t;
	}
	e.recomputing = !1;
}
function H(e) {
	return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function Zr(e) {
	e.dirty = !1, !H(e) && $r(e);
}
function Qr(e) {
	ei(e, ti);
}
function $r(e) {
	ei(e, ni);
}
function ei(e, t) {
	let n = e.parents.size;
	if (n) {
		let r = zr(e.parents);
		for (let i = 0; i < n; ++i) t(r[i], e);
	}
}
function ti(e, t) {
	Ur(e.childValues.has(t)), Ur(H(t));
	let n = !H(e);
	if (!e.dirtyChildren) e.dirtyChildren = Vr.pop() || /* @__PURE__ */ new Set();
	else if (e.dirtyChildren.has(t)) return;
	e.dirtyChildren.add(t), n && Qr(e);
}
function ni(e, t) {
	Ur(e.childValues.has(t)), Ur(!H(t));
	let n = e.childValues.get(t);
	n.length === 0 ? e.childValues.set(t, Kr(t.value)) : Wr(n, t.value) || e.setDirty(), ri(e, t), !H(e) && $r(e);
}
function ri(e, t) {
	let n = e.dirtyChildren;
	n && (n.delete(t), n.size === 0 && (Vr.length < Hr && Vr.push(n), e.dirtyChildren = null));
}
function ii(e) {
	e.childValues.size > 0 && e.childValues.forEach((t, n) => {
		ai(e, n);
	}), e.forgetDeps(), Ur(e.dirtyChildren === null);
}
function ai(e, t) {
	t.parents.delete(e), e.childValues.delete(t), ri(e, t);
}
function oi(e, t) {
	if (typeof e.subscribe == "function") try {
		Br(e), e.unsubscribe = e.subscribe.apply(null, t);
	} catch {
		return e.setDirty(), !1;
	}
	return !0;
}
//#endregion
//#region node_modules/optimism/lib/dep.js
var si = {
	setDirty: !0,
	dispose: !0,
	forget: !0
};
function ci(e) {
	let t = /* @__PURE__ */ new Map(), n = e && e.subscribe;
	function r(e) {
		let r = Lr.getValue();
		if (r) {
			let i = t.get(e);
			i || t.set(e, i = /* @__PURE__ */ new Set()), r.dependOn(i), typeof n == "function" && (Br(i), i.unsubscribe = n(e));
		}
	}
	return r.dirty = function(e, n) {
		let r = t.get(e);
		if (r) {
			let i = n && Rr.call(si, n) ? n : "setDirty";
			zr(r).forEach((e) => e[i]()), t.delete(e), Br(r);
		}
	}, r;
}
//#endregion
//#region node_modules/optimism/lib/index.js
var li;
function ui(...e) {
	return (li || (li = new an(typeof WeakMap == "function"))).lookupArray(e);
}
var di = /* @__PURE__ */ new Set();
function fi(e, { max: t = 2 ** 16, keyArgs: n, makeCacheKey: r = ui, normalizeResult: i, subscribe: a, cache: o = xn } = Object.create(null)) {
	let s = typeof o == "function" ? new o(t, (e) => e.dispose()) : o, c = function() {
		let t = r.apply(null, n ? n.apply(null, arguments) : arguments);
		if (t === void 0) return e.apply(null, arguments);
		let o = s.get(t);
		o || (s.set(t, o = new qr(e)), o.normalizeResult = i, o.subscribe = a, o.forget = () => s.delete(t));
		let c = o.recompute(Array.prototype.slice.call(arguments));
		return s.set(t, o), di.add(s), Lr.hasValue() || (di.forEach((e) => e.clean()), di.clear()), c;
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
var pi = Array.isArray;
function mi(e) {
	return Array.isArray(e) && e.length > 0;
}
//#endregion
//#region node_modules/zen-observable-ts/module.js
function hi(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = gi(e)) || t && e && typeof e.length == "number") {
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
function gi(e, t) {
	if (e) {
		if (typeof e == "string") return _i(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _i(e, t);
	}
}
function _i(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function vi(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function yi(e, t, n) {
	return t && vi(e.prototype, t), n && vi(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var bi = function() {
	return typeof Symbol == "function";
}, xi = function(e) {
	return bi() && !!Symbol[e];
}, Si = function(e) {
	return xi(e) ? Symbol[e] : "@@" + e;
};
bi() && !xi("observable") && (Symbol.observable = Symbol("observable"));
var Ci = Si("iterator"), wi = Si("observable"), Ti = Si("species");
function Ei(e, t) {
	var n = e[t];
	if (n != null) {
		if (typeof n != "function") throw TypeError(n + " is not a function");
		return n;
	}
}
function Di(e) {
	var t = e.constructor;
	return t !== void 0 && (t = t[Ti], t === null && (t = void 0)), t === void 0 ? Ri : t;
}
function Oi(e) {
	return e instanceof Ri;
}
function ki(e) {
	ki.log ? ki.log(e) : setTimeout(function() {
		throw e;
	});
}
function Ai(e) {
	Promise.resolve().then(function() {
		try {
			e();
		} catch (e) {
			ki(e);
		}
	});
}
function ji(e) {
	var t = e._cleanup;
	if (t !== void 0 && (e._cleanup = void 0, t)) try {
		if (typeof t == "function") t();
		else {
			var n = Ei(t, "unsubscribe");
			n && n.call(t);
		}
	} catch (e) {
		ki(e);
	}
}
function Mi(e) {
	e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Ni(e) {
	var t = e._queue;
	if (t) {
		e._queue = void 0, e._state = "ready";
		for (var n = 0; n < t.length && (Pi(e, t[n].type, t[n].value), e._state !== "closed"); ++n);
	}
}
function Pi(e, t, n) {
	e._state = "running";
	var r = e._observer;
	try {
		var i = Ei(r, t);
		switch (t) {
			case "next":
				i && i.call(r, n);
				break;
			case "error":
				if (Mi(e), i) i.call(r, n);
				else throw n;
				break;
			case "complete":
				Mi(e), i && i.call(r);
				break;
		}
	} catch (e) {
		ki(e);
	}
	e._state === "closed" ? ji(e) : e._state === "running" && (e._state = "ready");
}
function Fi(e, t, n) {
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
			}], Ai(function() {
				return Ni(e);
			});
			return;
		}
		Pi(e, t, n);
	}
}
var Ii = /* @__PURE__ */ function() {
	function e(e, t) {
		this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
		var n = new Li(this);
		try {
			this._cleanup = t.call(void 0, n);
		} catch (e) {
			n.error(e);
		}
		this._state === "initializing" && (this._state = "ready");
	}
	var t = e.prototype;
	return t.unsubscribe = function() {
		this._state !== "closed" && (Mi(this), ji(this));
	}, yi(e, [{
		key: "closed",
		get: function() {
			return this._state === "closed";
		}
	}]), e;
}(), Li = /* @__PURE__ */ function() {
	function e(e) {
		this._subscription = e;
	}
	var t = e.prototype;
	return t.next = function(e) {
		Fi(this._subscription, "next", e);
	}, t.error = function(e) {
		Fi(this._subscription, "error", e);
	}, t.complete = function() {
		Fi(this._subscription, "complete");
	}, yi(e, [{
		key: "closed",
		get: function() {
			return this._subscription._state === "closed";
		}
	}]), e;
}(), Ri = /* @__PURE__ */ function() {
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
		}), new Ii(e, this._subscriber);
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
		return new (Di(this))(function(n) {
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
		return new (Di(this))(function(n) {
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
		var n = Di(this), r = arguments.length > 1, i = !1, a = arguments[1];
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
		var e = this, t = [...arguments], n = Di(this);
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
		var n = Di(this);
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
	}, t[wi] = function() {
		return this;
	}, e.from = function(t) {
		var n = typeof this == "function" ? this : e;
		if (t == null) throw TypeError(t + " is not an object");
		var r = Ei(t, wi);
		if (r) {
			var i = r.call(t);
			if (Object(i) !== i) throw TypeError(i + " is not an object");
			return Oi(i) && i.constructor === n ? i : new n(function(e) {
				return i.subscribe(e);
			});
		}
		if (xi("iterator") && (r = Ei(t, Ci), r)) return new n(function(e) {
			Ai(function() {
				if (!e.closed) {
					for (var n = hi(r.call(t)), i; !(i = n()).done;) {
						var a = i.value;
						if (e.next(a), e.closed) return;
					}
					e.complete();
				}
			});
		});
		if (Array.isArray(t)) return new n(function(e) {
			Ai(function() {
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
			Ai(function() {
				if (!e.closed) {
					for (var n = 0; n < t.length; ++n) if (e.next(t[n]), e.closed) return;
					e.complete();
				}
			});
		});
	}, yi(e, null, [{
		key: Ti,
		get: function() {
			return this;
		}
	}]), e;
}();
bi() && Object.defineProperty(Ri, Symbol("extensions"), {
	value: {
		symbol: wi,
		hostReportError: ki
	},
	configurable: !0
});
//#endregion
//#region node_modules/@apollo/client/utilities/promises/preventUnhandledRejection.js
function zi(e) {
	return e.catch(function() {}), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/cloneDeep.js
var Bi = Object.prototype.toString;
function Vi(e) {
	return Hi(e);
}
function Hi(e, t) {
	switch (Bi.call(e)) {
		case "[object Array]":
			if (t = t || /* @__PURE__ */ new Map(), t.has(e)) return t.get(e);
			var n = e.slice(0);
			return t.set(e, n), n.forEach(function(e, r) {
				n[r] = Hi(e, t);
			}), n;
		case "[object Object]":
			if (t = t || /* @__PURE__ */ new Map(), t.has(e)) return t.get(e);
			var r = Object.create(Object.getPrototypeOf(e));
			return t.set(e, r), Object.keys(e).forEach(function(n) {
				r[n] = Hi(e[n], t);
			}), r;
		default: return e;
	}
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
function Ui(e) {
	var t = new Set([e]);
	return t.forEach(function(e) {
		hn(e) && Wi(e) === e && Object.getOwnPropertyNames(e).forEach(function(n) {
			hn(e[n]) && t.add(e[n]);
		});
	}), e;
}
function Wi(e) {
	if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e)) try {
		Object.freeze(e);
	} catch (e) {
		if (e instanceof TypeError) return null;
		throw e;
	}
	return e;
}
function Gi(e) {
	return globalThis.__DEV__ !== !1 && Ui(e), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/observables/iteration.js
function Ki(e, t, n) {
	var r = [];
	e.forEach(function(e) {
		return e[t] && r.push(e);
	}), r.forEach(function(e) {
		return e[t](n);
	});
}
//#endregion
//#region node_modules/@apollo/client/utilities/observables/subclassing.js
function qi(e) {
	function t(t) {
		Object.defineProperty(e, t, { value: Ri });
	}
	return un && Symbol.species && t(Symbol.species), t("@@species"), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/compact.js
function Ji() {
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
function Yi(e, t) {
	return Ji(e, t, t.variables && { variables: Ji(A(A({}, e && e.variables), t.variables)) });
}
//#endregion
//#region node_modules/@apollo/client/utilities/deprecation/index.js
var Xi = Symbol.for("apollo.deprecations"), Zi = Symbol.for("apollo.deprecations.slot"), Qi = be, $i = Qi[Zi] ?? (Qi[Zi] = new Pr());
function ea(e) {
	return Qi[Xi] || ($i.getValue() || []).includes(e);
}
function U(e) {
	var t = [...arguments].slice(1);
	return $i.withValue.apply($i, j([Array.isArray(e) ? e : [e]], t, !1));
}
function ta(e, t, n, r) {
	r === void 0 && (r = "Please remove this option."), W(t, function() {
		t in e && globalThis.__DEV__ !== !1 && P.warn(103, n, t, r);
	});
}
function W(e, t) {
	ea(e) || t();
}
//#endregion
//#region node_modules/@apollo/client/react/context/ApolloContext.js
var G = /* @__PURE__ */ d(Ae(), 1), na = un ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function ra() {
	P("createContext" in G, 69);
	var e = G.createContext[na];
	return e || (Object.defineProperty(G.createContext, na, {
		value: e = G.createContext({}),
		enumerable: !1,
		writable: !1,
		configurable: !0
	}), e.displayName = "ApolloContext"), e;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useApolloClient.js
function ia(e) {
	var t = G.useContext(ra()), n = e || t.client;
	return P(!!n, 78), n;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useSyncExternalStore.js
var aa = !1, oa = G.useSyncExternalStore || (function(e, t, n) {
	var r = t();
	globalThis.__DEV__ !== !1 && !aa && r !== t() && (aa = !0, globalThis.__DEV__ !== !1 && P.error(91));
	var i = G.useState({ inst: {
		value: r,
		getSnapshot: t
	} }), a = i[0].inst, o = i[1];
	return mn ? G.useLayoutEffect(function() {
		Object.assign(a, {
			value: r,
			getSnapshot: t
		}), sa(a) && o({ inst: a });
	}, [
		e,
		r,
		t
	]) : Object.assign(a, {
		value: r,
		getSnapshot: t
	}), G.useEffect(function() {
		return sa(a) && o({ inst: a }), e(function() {
			sa(a) && o({ inst: a });
		});
	}, [e]), r;
});
function sa(e) {
	var t = e.value, n = e.getSnapshot;
	try {
		return t !== n();
	} catch {
		return !0;
	}
}
//#endregion
//#region node_modules/@wry/equality/lib/index.js
var { toString: ca, hasOwnProperty: la } = Object.prototype, ua = Function.prototype.toString, da = /* @__PURE__ */ new Map();
function K(e, t) {
	try {
		return fa(e, t);
	} finally {
		da.clear();
	}
}
function fa(e, t) {
	if (e === t) return !0;
	let n = ca.call(e);
	if (n !== ca.call(t)) return !1;
	switch (n) {
		case "[object Array]": if (e.length !== t.length) return !1;
		case "[object Object]": {
			if (_a(e, t)) return !0;
			let n = pa(e), r = pa(t), i = n.length;
			if (i !== r.length) return !1;
			for (let e = 0; e < i; ++e) if (!la.call(t, n[e])) return !1;
			for (let r = 0; r < i; ++r) {
				let i = n[r];
				if (!fa(e[i], t[i])) return !1;
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
			if (_a(e, t)) return !0;
			let r = e.entries(), i = n === "[object Map]";
			for (;;) {
				let e = r.next();
				if (e.done) break;
				let [n, a] = e.value;
				if (!t.has(n) || i && !fa(a, t.get(n))) return !1;
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
			let n = ua.call(e);
			return n === ua.call(t) ? !ga(n, ha) : !1;
		}
	}
	return !1;
}
function pa(e) {
	return Object.keys(e).filter(ma, e);
}
function ma(e) {
	return this[e] !== void 0;
}
var ha = "{ [native code] }";
function ga(e, t) {
	let n = e.length - t.length;
	return n >= 0 && e.indexOf(t, n) === n;
}
function _a(e, t) {
	let n = da.get(e);
	if (n) {
		if (n.has(t)) return !0;
	} else da.set(e, n = /* @__PURE__ */ new Set());
	return n.add(t), !1;
}
//#endregion
//#region node_modules/@apollo/client/errors/index.js
var va = Symbol();
function ya(e) {
	return e.extensions ? Array.isArray(e.extensions[va]) : !1;
}
function ba(e) {
	return e.hasOwnProperty("graphQLErrors");
}
var xa = function(e) {
	var t = j(j(j([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
	return e.networkError && t.push(e.networkError), t.map(function(e) {
		return hn(e) && e.message || "Error message not found.";
	}).join("\n");
}, Sa = function(e) {
	ce(t, e);
	function t(n) {
		var r = n.graphQLErrors, i = n.protocolErrors, a = n.clientErrors, o = n.networkError, s = n.errorMessage, c = n.extraInfo, l = e.call(this, s) || this;
		return l.name = "ApolloError", l.graphQLErrors = r || [], l.protocolErrors = i || [], l.clientErrors = a || [], l.networkError = o || null, l.message = s || xa(l), l.extraInfo = c, l.cause = j(j(j([o], r || [], !0), i || [], !0), a || [], !0).find(function(e) {
			return !!e;
		}) || null, l.__proto__ = t.prototype, l;
	}
	return t;
}(Error);
//#endregion
//#region node_modules/@apollo/client/core/equalByQuery.js
function Ca(e, t, n, r) {
	var i = t.data, a = le(t, ["data"]), o = n.data;
	return K(a, le(n, ["data"])) && wa(Er(e).selectionSet, i, o, {
		fragmentMap: _n(Cr(e)),
		variables: r
	});
}
function wa(e, t, n, r) {
	if (t === n) return !0;
	var i = /* @__PURE__ */ new Set();
	return e.selections.every(function(e) {
		if (i.has(e) || (i.add(e), !Jt(e, r.variables)) || Ta(e)) return !0;
		if (vr(e)) {
			var a = gr(e), o = t && t[a], s = n && n[a], c = e.selectionSet;
			if (!c) return K(o, s);
			var l = Array.isArray(o), u = Array.isArray(s);
			if (l !== u) return !1;
			if (l && u) {
				var d = o.length;
				if (s.length !== d) return !1;
				for (var f = 0; f < d; ++f) if (!wa(c, o[f], s[f], r)) return !1;
				return !0;
			}
			return wa(c, o, s, r);
		} else {
			var p = vn(e, r.fragmentMap);
			if (p) return Ta(p) ? !0 : wa(p.selectionSet, t, n, r);
		}
	});
}
function Ta(e) {
	return !!e.directives && e.directives.some(Ea);
}
function Ea(e) {
	return e.name.value === "nonreactive";
}
//#endregion
//#region node_modules/@apollo/client/core/networkStatus.js
var q;
(function(e) {
	e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(q || (q = {}));
function Da(e) {
	return e ? e < 7 : !1;
}
//#endregion
//#region node_modules/@apollo/client/core/ObservableQuery.js
var Oa = Object.assign, ka = Object.hasOwnProperty, Aa = function(e) {
	ce(t, e);
	function t(n) {
		var r = n.queryManager, i = n.queryInfo, a = n.options, o = this, s = t.inactiveOnCreation.getValue();
		o = e.call(this, function(e) {
			o._getOrCreateQuery();
			try {
				var t = e._subscription._observer;
				t && !t.error && (t.error = ja);
			} catch {}
			var n = !o.observers.size;
			o.observers.add(e);
			var r = o.last;
			return r && r.error ? e.error && e.error(r.error) : r && r.result && e.next && e.next(o.maskResult(r.result)), n && o.reobserve().catch(function() {}), function() {
				o.observers.delete(e) && !o.observers.size && o.tearDownQuery();
			};
		}) || this, o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.dirty = !1, o._getOrCreateQuery = function() {
			return s && (r.queries.set(o.queryId, i), s = !1), o.queryManager.getOrCreateQuery(o.queryId);
		}, o.queryInfo = i, o.queryManager = r, o.waitForOwnResult = Na(a.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o), o.maskResult = o.maskResult.bind(o);
		var c = r.defaultOptions.watchQuery, l = (c === void 0 ? {} : c).fetchPolicy, u = l === void 0 ? "cache-first" : l, d = a.fetchPolicy, f = d === void 0 ? u : d, p = a.initialFetchPolicy, m = p === void 0 ? f === "standby" ? u : f : p;
		o.options = A(A({}, a), {
			initialFetchPolicy: m,
			fetchPolicy: f
		}), o.queryId = i.queryId || r.generateQueryId();
		var h = xr(o.query);
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
		return globalThis.__DEV__ !== !1 && W("observableQuery.result", function() {
			globalThis.__DEV__ !== !1 && P.warn(23);
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
		var n = U("getLastResult", function() {
			return t.getLastResult(!0);
		}), r = this.queryInfo.networkStatus || n && n.networkStatus || q.ready, i = A(A({}, n), {
			loading: Da(r),
			networkStatus: r
		}), a = this.options.fetchPolicy, o = a === void 0 ? "cache-first" : a;
		if (!(Na(o) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)) if (this.waitForOwnResult) this.queryInfo.updateWatch();
		else {
			var s = this.queryInfo.getDiff();
			(s.complete || this.options.returnPartialData) && (i.data = s.result), K(i.data, {}) && (i.data = void 0), s.complete ? (delete i.partial, s.complete && i.networkStatus === q.loading && (o === "cache-first" || o === "cache-only") && (i.networkStatus = q.ready, i.loading = !1)) : i.partial = !0, i.networkStatus === q.ready && (i.error || i.errors) && (i.networkStatus = q.error), globalThis.__DEV__ !== !1 && !s.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && Ma(s.missing);
		}
		return e && this.updateLastResult(i), i;
	}, t.prototype.getCurrentResult = function(e) {
		return e === void 0 && (e = !0), this.maskResult(this.getCurrentFullResult(e));
	}, t.prototype.isDifferentFromLastResult = function(e, t) {
		if (!this.last) return !0;
		var n = this.queryManager.getDocumentInfo(this.query), r = this.queryManager.dataMasking, i = r ? n.nonReactiveQuery : this.query;
		return (r || n.hasNonreactiveDirective ? !Ca(i, this.last.result, e, this.variables) : !K(this.last.result, e)) || t && !K(this.last.variables, t);
	}, t.prototype.getLast = function(e, t) {
		var n = this.last;
		if (n && n[e] && (!t || K(n.variables, this.variables))) return n[e];
	}, t.prototype.getLastResult = function(e) {
		return globalThis.__DEV__ !== !1 && W("getLastResult", function() {
			globalThis.__DEV__ !== !1 && P.warn(24);
		}), this.getLast("result", e);
	}, t.prototype.getLastError = function(e) {
		return globalThis.__DEV__ !== !1 && W("getLastError", function() {
			globalThis.__DEV__ !== !1 && P.warn(25);
		}), this.getLast("error", e);
	}, t.prototype.resetLastResults = function() {
		globalThis.__DEV__ !== !1 && W("resetLastResults", function() {
			globalThis.__DEV__ !== !1 && P.warn(26);
		}), delete this.last, this.isTornDown = !1;
	}, t.prototype.resetQueryStoreErrors = function() {
		globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && P.warn(27), this.queryManager.resetErrors(this.queryId);
	}, t.prototype.refetch = function(e) {
		var t = { pollInterval: 0 };
		if (this.options.fetchPolicy === "no-cache" ? t.fetchPolicy = "no-cache" : t.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && e && ka.call(e, "variables")) {
			var n = wr(this.query), r = n.variableDefinitions;
			(!r || !r.some(function(e) {
				return e.variable.name.value === "variables";
			})) && globalThis.__DEV__ !== !1 && P.warn(28, e, n.name?.value || n);
		}
		return e && !K(this.options.variables, e) && (t.variables = this.options.variables = A(A({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(t, q.refetch);
	}, t.prototype.fetchMore = function(e) {
		var t = this, n = A(A({}, e.query ? e : A(A(A(A({}, this.options), { query: this.options.query }), e), { variables: A(A({}, this.options.variables), e.variables) })), { fetchPolicy: "no-cache" });
		n.query = this.transformDocument(n.query);
		var r = this.queryManager.generateQueryId();
		this.lastQuery = e.query ? this.transformDocument(this.options.query) : n.query;
		var i = this.queryInfo, a = i.networkStatus;
		i.networkStatus = q.fetchMore, n.notifyOnNetworkStatusChange && this.observe();
		var o = /* @__PURE__ */ new Set(), s = e?.updateQuery, c = this.options.fetchPolicy !== "no-cache";
		return c || P(s, 29), this.queryManager.fetchQuery(r, n, q.fetchMore).then(function(l) {
			if (t.queryManager.removeQuery(r), i.networkStatus === q.fetchMore && (i.networkStatus = a), c) t.queryManager.cache.batch({
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
					loading: Da(a),
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
				globalThis.__DEV__ !== !1 && P.error(30, t);
			}
		});
		return this.subscriptions.add(n), function() {
			t.subscriptions.delete(n) && n.unsubscribe();
		};
	}, t.prototype.setOptions = function(e) {
		return globalThis.__DEV__ !== !1 && (ta(e, "canonizeResults", "setOptions"), W("setOptions", function() {
			globalThis.__DEV__ !== !1 && P.warn(31);
		})), this.reobserve(e);
	}, t.prototype.silentSetOptions = function(e) {
		var t = Ji(this.options, e || {});
		Oa(this.options, t);
	}, t.prototype.setVariables = function(e) {
		var t = this;
		return K(this.variables, e) ? this.observers.size ? U("observableQuery.result", function() {
			return t.result();
		}) : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
			fetchPolicy: this.options.initialFetchPolicy,
			variables: e
		}, q.setVariables) : Promise.resolve());
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
				P(r, 32);
				var i = n || (this.pollingInfo = {});
				i.interval = r;
				var a = function() {
					var t;
					e.pollingInfo && (!Da(e.queryInfo.networkStatus) && !(t = e.options).skipPollAttempt?.call(t) ? e.reobserve({ fetchPolicy: e.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only" }, q.poll).then(o, o) : o());
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
		var r = U("getLastError", function() {
			return n.getLastError();
		});
		return r && this.last && !K(t, this.last.variables) && (r = void 0), this.last = A({
			result: this.queryManager.assumeImmutableResults ? e : Vi(e),
			variables: t
		}, r ? { error: r } : null);
	}, t.prototype.reobserveAsConcast = function(e, t) {
		var n = this;
		this.isTornDown = !1;
		var r = t === q.refetch || t === q.fetchMore || t === q.poll, i = this.options.variables, a = this.options.fetchPolicy, o = Ji(this.options, e || {}), s = r ? o : Oa(this.options, o), c = this.transformDocument(s.query);
		this.lastQuery = c, r || (this.updatePolling(), e && e.variables && !K(e.variables, i) && s.fetchPolicy !== "standby" && (s.fetchPolicy === a || typeof s.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", s), t === void 0 && (t = q.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Na(s.fetchPolicy));
		var l = function() {
			n.concast === f && (n.waitForOwnResult = !1);
		}, u = s.variables && A({}, s.variables), d = this.fetch(s, t, c), f = d.concast, p = d.fromLink, m = {
			next: function(e) {
				K(n.variables, u) && (l(), n.reportResult(e, u));
			},
			error: function(e) {
				K(n.variables, u) && (ba(e) || (e = new Sa({ networkError: e })), l(), n.reportError(e, u));
			}
		};
		return !r && (p || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = f, this.observer = m), f.addObserver(m), f;
	}, t.prototype.reobserve = function(e, t) {
		return zi(this.reobserveAsConcast(e, t).promise.then(this.maskResult));
	}, t.prototype.resubscribeAfterError = function() {
		for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		var r = this.last;
		U("resetLastResults", function() {
			return e.resetLastResults();
		});
		var i = this.subscribe.apply(this, t);
		return this.last = r, i;
	}, t.prototype.observe = function() {
		this.reportResult(this.getCurrentFullResult(!1), this.variables);
	}, t.prototype.reportResult = function(e, t) {
		var n = this, r = U("getLastError", function() {
			return n.getLastError();
		}), i = this.isDifferentFromLastResult(e, t);
		(r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), (r || i) && Ki(this.observers, "next", this.maskResult(e));
	}, t.prototype.reportError = function(e, t) {
		var n = this, r = A(A({}, U("getLastResult", function() {
			return n.getLastResult();
		})), {
			error: e,
			errors: e.graphQLErrors,
			networkStatus: q.error,
			loading: !1
		});
		this.updateLastResult(r, t), Ki(this.observers, "error", this.last.error = e);
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
		this.cancelNotifyTimeout(), this.dirty && (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !Da(this.queryInfo.networkStatus)) && (this.queryInfo.getDiff().fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst()), this.dirty = !1;
	}, t.prototype.reobserveCacheFirst = function() {
		var e = this.options, t = e.fetchPolicy, n = e.nextFetchPolicy;
		return t === "cache-and-network" || t === "network-only" ? this.reobserve({
			fetchPolicy: "cache-first",
			nextFetchPolicy: function(e, r) {
				return this.nextFetchPolicy = n, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(e, r) : t;
			}
		}) : this.reobserve();
	}, t.inactiveOnCreation = new Pr(), t;
}(Ri);
qi(Aa);
function ja(e) {
	globalThis.__DEV__ !== !1 && P.error(33, e.message, e.stack);
}
function Ma(e) {
	globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && P.debug(34, e);
}
function Na(e) {
	return e === "network-only" || e === "no-cache" || e === "standby";
}
//#endregion
//#region node_modules/graphql-tag/lib/index.js
var Pa = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), Ia = !0, La = !1;
function Ra(e) {
	return e.replace(/[\s,]+/g, " ").trim();
}
function za(e) {
	return Ra(e.source.body.substring(e.start, e.end));
}
function Ba(e) {
	var t = /* @__PURE__ */ new Set(), n = [];
	return e.definitions.forEach(function(e) {
		if (e.kind === "FragmentDefinition") {
			var r = e.name.value, i = za(e.loc), a = Fa.get(r);
			a && !a.has(i) ? Ia && console.warn("Warning: fragment with name " + r + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : a || Fa.set(r, a = /* @__PURE__ */ new Set()), a.add(i), t.has(i) || (t.add(i), n.push(e));
		} else n.push(e);
	}), A(A({}, e), { definitions: n });
}
function Va(e) {
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
function Ha(e) {
	var t = Ra(e);
	if (!Pa.has(t)) {
		var n = Vt(e, {
			experimentalFragmentVariables: La,
			allowLegacyFragmentVariables: La
		});
		if (!n || n.kind !== "Document") throw Error("Not a valid GraphQL document.");
		Pa.set(t, Va(Ba(n)));
	}
	return Pa.get(t);
}
function Ua(e) {
	var t = [...arguments].slice(1);
	typeof e == "string" && (e = [e]);
	var n = e[0];
	return t.forEach(function(t, r) {
		t && t.kind === "Document" ? n += t.loc.source.body : n += t, n += e[r + 1];
	}), Ha(n);
}
function Wa() {
	Pa.clear(), Fa.clear();
}
function Ga() {
	Ia = !1;
}
function Ka() {
	La = !0;
}
function qa() {
	La = !1;
}
var Ja = {
	gql: Ua,
	resetCaches: Wa,
	disableFragmentWarnings: Ga,
	enableExperimentalFragmentVariables: Ka,
	disableExperimentalFragmentVariables: qa
};
(function(e) {
	e.gql = Ja.gql, e.resetCaches = Ja.resetCaches, e.disableFragmentWarnings = Ja.disableFragmentWarnings, e.enableExperimentalFragmentVariables = Ja.enableExperimentalFragmentVariables, e.disableExperimentalFragmentVariables = Ja.disableExperimentalFragmentVariables;
})(Ua || (Ua = {})), Ua.default = Ua;
//#endregion
//#region node_modules/@apollo/client/react/parser/index.js
var J;
(function(e) {
	e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription";
})(J || (J = {}));
var Ya;
function Xa(e) {
	var t;
	switch (e) {
		case J.Query:
			t = "Query";
			break;
		case J.Mutation:
			t = "Mutation";
			break;
		case J.Subscription:
			t = "Subscription";
			break;
	}
	return t;
}
function Za(e) {
	W("parser", function() {
		globalThis.__DEV__ !== !1 && P.warn(93);
	}), Ya || (Ya = new jn(Nn.parser || 1e3));
	var t = Ya.get(e);
	if (t) return t;
	var n, r, i;
	P(!!e && !!e.kind, 94, e);
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
	P(!a.length || o.length || s.length || c.length, 95), P(o.length + s.length + c.length <= 1, 96, e, o.length, c.length, s.length), r = o.length ? J.Query : J.Mutation, !o.length && !s.length && (r = J.Subscription);
	var f = o.length ? o : s.length ? s : c;
	P(f.length === 1, 97, e, f.length);
	var p = f[0];
	n = p.variableDefinitions || [], i = p.name && p.name.kind === "Name" ? p.name.value : "data";
	var m = {
		name: i,
		type: r,
		variables: n
	};
	return Ya.set(e, m), m;
}
Za.resetCache = function() {
	Ya = void 0;
}, globalThis.__DEV__ !== !1 && Fn("parser", function() {
	return Ya ? Ya.size : 0;
});
function Qa(e, t) {
	var n = U("parser", Za, [e]), r = Xa(t), i = Xa(n.type);
	P(n.type === t, 98, r, r, i);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js
var $a = fn ? G.useLayoutEffect : G.useEffect;
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/useWarnRemovedOption.js
function eo(e, t, n, r) {
	"use no memo";
	r === void 0 && (r = "Please remove this option.");
	var i = G.useRef(!1);
	globalThis.__DEV__ !== !1 && t in e && !i.current && (ta(e, t, n, r), i.current = !0);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/wrapHook.js
var to = Symbol.for("apollo.hook.wrappers");
function no(e, t, n) {
	var r = n.queryManager, i = r && r[to], a = i && i[e];
	return a ? a(t) : t;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useQuery.js
var ro = Object.prototype.hasOwnProperty;
function io() {}
var ao = Symbol();
function oo(e, t) {
	return t === void 0 && (t = Object.create(null)), no("useQuery", so, ia(t && t.client))(e, t);
}
function so(e, t) {
	globalThis.__DEV__ !== !1 && (eo(t, "canonizeResults", "useQuery"), eo(t, "partialRefetch", "useQuery"), eo(t, "defaultOptions", "useQuery", "Pass the options directly to the hook instead."), eo(t, "onCompleted", "useQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), eo(t, "onError", "useQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));
	var n = lo(e, t), r = n.result, i = n.obsQueryFields;
	return G.useMemo(function() {
		return A(A({}, r), i);
	}, [r, i]);
}
function co(e, t, n, r, i) {
	function a(a) {
		return Qa(t, J.Query), {
			client: e,
			query: t,
			observable: r && r.getSSRObservable(i()) || Aa.inactiveOnCreation.withValue(!r, function() {
				return U(["canonizeResults", "partialRefetch"], function() {
					return e.watchQuery(ho(void 0, e, n, i()));
				});
			}),
			resultData: { previousData: a?.resultData.current?.data }
		};
	}
	var o = G.useState(a), s = o[0], c = o[1];
	function l(e) {
		var t;
		Object.assign(s.observable, (t = {}, t[ao] = e, t));
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
function lo(e, t) {
	var n = ia(t.client), r = G.useContext(ra()).renderPromises, i = !!r, a = n.disableNetworkFetches, o = t.ssr !== !1 && !t.skip, s = t.partialRefetch, c = mo(n, e, t, i), l = co(n, e, t, r, c), u = l[0], d = u.observable, f = u.resultData, p = l[1], m = c(d);
	po(f, d, n, t, m);
	var h = G.useMemo(function() {
		return To(d);
	}, [d]);
	return fo(d, r, o), {
		result: uo(f, d, n, t, m, a, s, i, {
			onCompleted: t.onCompleted || io,
			onError: t.onError || io
		}),
		obsQueryFields: h,
		observable: d,
		resultData: f,
		client: n,
		onQueryExecuted: p
	};
}
function uo(e, t, n, r, i, a, o, s, c) {
	var l = G.useRef(c);
	G.useEffect(function() {
		l.current = c;
	});
	var u = (s || a) && r.ssr === !1 && !r.skip ? Co : r.skip || i.fetchPolicy === "standby" ? wo : void 0, d = e.previousData, f = G.useMemo(function() {
		return u && xo(u, d, t, n);
	}, [
		n,
		t,
		u,
		d
	]);
	return oa(G.useCallback(function(r) {
		if (s) return function() {};
		var i = function() {
			var i = e.current, a = t.getCurrentResult();
			i && i.loading === a.loading && i.networkStatus === a.networkStatus && K(i.data, a.data) || go(a, e, t, n, o, r, l.current);
		}, a = function(s) {
			if (c.current.unsubscribe(), c.current = t.resubscribeAfterError(i, a), !ro.call(s, "graphQLErrors")) throw s;
			var u = e.current;
			(!u || u && u.loading || !K(s, u.error)) && go({
				data: u && u.data,
				error: s,
				loading: !1,
				networkStatus: q.error
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
		return f || vo(e, t, l.current, o, n);
	}, function() {
		return f || vo(e, t, l.current, o, n);
	});
}
function fo(e, t, n) {
	t && n && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e));
}
function po(e, t, n, r, i) {
	t[ao] && !K(t[ao], i) && (t.reobserve(ho(t, n, r, i)), e.previousData = e.current?.data || e.previousData, e.current = void 0), t[ao] = i;
}
function mo(e, t, n, r) {
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
		return r && (s.fetchPolicy === "network-only" || s.fetchPolicy === "cache-and-network") && (s.fetchPolicy = "cache-first"), s.variables || (s.variables = {}), i ? (s.initialFetchPolicy = s.initialFetchPolicy || s.fetchPolicy || yo(a, e.defaultOptions), s.fetchPolicy = "standby") : s.fetchPolicy || (s.fetchPolicy = n?.options.initialFetchPolicy || yo(a, e.defaultOptions)), s;
	};
}
function ho(e, t, n, r) {
	var i = [], a = t.defaultOptions.watchQuery;
	return a && i.push(a), n.defaultOptions && i.push(n.defaultOptions), i.push(Ji(e && e.options, r)), i.reduce(Yi);
}
function go(e, t, n, r, i, a, o) {
	var s = t.current;
	s && s.data && (t.previousData = s.data), !e.error && mi(e.errors) && (e.error = new Sa({ graphQLErrors: e.errors })), t.current = xo(So(e, n, i), t.previousData, n, r), a(), _o(e, s?.networkStatus, o);
}
function _o(e, t, n) {
	if (!e.loading) {
		var r = bo(e);
		Promise.resolve().then(function() {
			r ? n.onError(r) : e.data && t !== e.networkStatus && e.networkStatus === q.ready && n.onCompleted(e.data);
		}).catch(function(e) {
			globalThis.__DEV__ !== !1 && P.warn(e);
		});
	}
}
function vo(e, t, n, r, i) {
	return e.current || go(t.getCurrentResult(), e, t, i, r, function() {}, n), e.current;
}
function yo(e, t) {
	return e?.fetchPolicy || t?.watchQuery?.fetchPolicy || "cache-first";
}
function bo(e) {
	return mi(e.errors) ? new Sa({ graphQLErrors: e.errors }) : e.error;
}
function xo(e, t, n, r) {
	var i = e.data;
	e.partial;
	var a = le(e, ["data", "partial"]);
	return A(A({ data: i }, a), {
		client: r,
		observable: n,
		variables: n.variables,
		called: e !== Co && e !== wo,
		previousData: t
	});
}
function So(e, t, n) {
	return e.partial && n && !e.loading && (!e.data || Object.keys(e.data).length === 0) && t.options.fetchPolicy !== "cache-only" ? (t.refetch(), A(A({}, e), {
		loading: !0,
		networkStatus: q.refetch
	})) : e;
}
var Co = Gi({
	loading: !0,
	data: void 0,
	error: void 0,
	networkStatus: q.loading
}), wo = Gi({
	loading: !1,
	data: void 0,
	error: void 0,
	networkStatus: q.ready
});
function To(e) {
	return {
		refetch: e.refetch.bind(e),
		reobserve: function() {
			var t = [...arguments];
			return globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && P.warn(83), e.reobserve.apply(e, t);
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
function Eo(e, t) {
	globalThis.__DEV__ !== !1 && eo(t || {}, "ignoreResults", "useMutation", "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");
	var n = ia(t?.client);
	Qa(e, J.Mutation);
	var r = G.useState({
		called: !1,
		loading: !1,
		client: n
	}), i = r[0], a = r[1], o = G.useRef({
		result: i,
		mutationId: 0,
		isMounted: !0,
		client: n,
		mutation: e,
		options: t
	});
	$a(function() {
		Object.assign(o.current, {
			client: n,
			options: t,
			mutation: e
		});
	});
	var s = G.useCallback(function(e) {
		e === void 0 && (e = {});
		var t = o.current, n = t.options, r = t.mutation, i = A(A({}, n), { mutation: r }), s = e.client || o.current.client;
		!o.current.result.loading && !i.ignoreResults && o.current.isMounted && a(o.current.result = {
			loading: !0,
			error: void 0,
			data: void 0,
			called: !0,
			client: s
		});
		var c = ++o.current.mutationId, l = Yi(i, e);
		return s.mutate(l).then(function(t) {
			var n = t.data, r = t.errors, i = r && r.length > 0 ? new Sa({ graphQLErrors: r }) : void 0, u = e.onError || o.current.options?.onError;
			if (i && u && u(i, l), c === o.current.mutationId && !l.ignoreResults) {
				var d = {
					called: !0,
					loading: !1,
					data: n,
					error: i,
					client: s
				};
				o.current.isMounted && !K(o.current.result, d) && a(o.current.result = d);
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
				K(o.current.result, n) || a(o.current.result = n);
			}
			var r = e.onError || o.current.options?.onError;
			if (r) return r(t, l), {
				data: void 0,
				errors: t
			};
			throw t;
		});
	}, []), c = G.useCallback(function() {
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
	return G.useEffect(function() {
		var e = o.current;
		return e.isMounted = !0, function() {
			e.isMounted = !1;
		};
	}, []), [s, A({ reset: c }, i)];
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function Do(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function Oo(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Do(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Do(e[t], null);
			}
		};
	};
}
function ko(...e) {
	return v.useCallback(Oo(...e), e);
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var Ao = class extends v.Component {
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
function jo({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
	let o = ee(), s = re(null), c = re({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}), { nonce: u } = w(l), d = ko(s, e.props?.ref ?? e?.ref);
	return E(() => {
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
	}, [t]), O(Ao, {
		isPresent: t,
		childRef: s,
		sizeRef: c,
		pop: a,
		children: a === !1 ? e : v.cloneElement(e, { ref: d })
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var Mo = ({ children: e, initial: t, isPresent: r, onExitComplete: i, custom: a, presenceAffectsLayout: o, mode: c, anchorX: l, anchorY: u, root: d }) => {
	let f = n(No), p = ee(), m = !0, h = ne(() => (m = !1, {
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
	return o && m && (h = { ...h }), ne(() => {
		f.forEach((e, t) => f.set(t, !1));
	}, [r]), v.useEffect(() => {
		!r && !f.size && i && i();
	}, [r]), e = O(jo, {
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
function No() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var Po = (e) => e.key || "";
function Fo(e) {
	let t = [];
	return y.forEach(e, (e) => {
		S(e) && t.push(e);
	}), t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var Io = ({ children: e, custom: t, initial: r = !0, onExitComplete: i, presenceAffectsLayout: s = !0, mode: c = "sync", propagate: l = !1, anchorX: d = "left", anchorY: f = "top", root: p }) => {
	let [m, h] = a(l), g = ne(() => Fo(e), [e]), _ = l && !m ? [] : g.map(Po), v = re(!0), y = re(g), b = n(() => /* @__PURE__ */ new Map()), x = re(/* @__PURE__ */ new Set()), [S, C] = D(g), [T, ee] = D(g);
	o(() => {
		v.current = !1, y.current = g;
		for (let e = 0; e < T.length; e++) {
			let t = Po(T[e]);
			_.includes(t) ? (b.delete(t), x.current.delete(t)) : b.get(t) !== !0 && b.set(t, !1);
		}
	}, [
		T,
		_.length,
		_.join("-")
	]);
	let E = [];
	if (g !== S) {
		let e = [...g];
		for (let t = 0; t < T.length; t++) {
			let n = T[t], r = Po(n);
			_.includes(r) || (e.splice(t, 0, n), E.push(n));
		}
		return c === "wait" && E.length && (e = E), ee(Fo(e)), C(g), null;
	}
	let { forceRender: te } = w(u);
	return O(ie, { children: T.map((e) => {
		let n = Po(e), a = l && !m ? !1 : g === T || _.includes(n);
		return O(Mo, {
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
				}), e && (te?.(), ee(y.current), l && h?.(), i && i());
			},
			anchorX: d,
			anchorY: f,
			children: e
		}, n);
	}) });
}, Lo = "https://cdn.wexio.io";
function Ro(e) {
	return /^https?:\/\//.test(e) ? e : Lo + (e.startsWith("/") ? e : `/${e}`);
}
//#endregion
//#region lib/api.ts
var zo = "https://api.wexio.io", Bo = "http://localhost:3001", Vo = "https://local.api.wexio.io:3443";
function Ho() {
	let e = Uo("NEXT_PUBLIC_WEXIO_API_URL");
	if (e) return e;
	if (typeof window < "u") {
		let { protocol: e, hostname: t } = window.location;
		if (e === "https:" && /^local\.[a-z-]+\.wexio\.io$/i.test(t)) return Vo;
		if (e === "https:" && /\.wexio\.io$/i.test(t)) {
			let e = t.replace(/^(app|templates)\./i, "api.").replace(/\.(app|templates)\./i, ".api.");
			return e === t ? zo : `https://${e}`;
		}
		if (t === "localhost" || t === "127.0.0.1" || t === "[::1]") return Bo;
	}
	return zo;
}
function Uo(e) {
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
function Wo() {
	return Uo("NEXT_PUBLIC_WEXIO_DEMO_PK");
}
var Go = /* @__PURE__ */ new Map();
function Ko(e, t) {
	if (!e) return Promise.resolve(null);
	let n = `${e}|${t ?? ""}`, r = Go.get(n);
	if (r) return r;
	let i = (async () => {
		try {
			let n = new URL(`${Ho()}/api/web/config/${encodeURIComponent(e)}`);
			t && n.searchParams.set("locale", t);
			let r = await fetch(n.toString(), {
				method: "GET",
				headers: { "x-web-public-key": e },
				credentials: "omit"
			});
			return r.ok ? Zo(await r.json()) : null;
		} catch {
			return null;
		}
	})();
	return Go.set(n, i.then((e) => (e === null && Go.delete(n), e))), Go.get(n) ?? i;
}
var qo = [
	"NAME",
	"EMAIL",
	"PHONE",
	"CUSTOM_TEXT"
], Jo = ["HINT", "SYSTEM"];
function Yo(e) {
	if (e === null || !e) return null;
	let t = Array.isArray(e.commands) ? e.commands.filter((e) => typeof e == "string" && e.length > 0).slice(0, 20) : [], n = Array.isArray(e.messages) ? e.messages.filter((e) => !!e && typeof e.text == "string" && e.text.length > 0 && typeof e.kind == "string" && Jo.includes(e.kind)).map((e) => ({
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
function Xo(e) {
	if (!e) return null;
	let t = (Array.isArray(e.fields) ? e.fields : []).filter((e) => e && qo.includes(e.kind)).map((e) => ({
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
function Zo(e) {
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
		prechatForm: Xo(e.prechatForm),
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
		messenger: Yo(e.messenger),
		botProtection: e.botProtection?.turnstile?.enabled && e.botProtection.turnstile.siteKey ? { turnstile: {
			enabled: !0,
			siteKey: e.botProtection.turnstile.siteKey
		} } : null
	};
}
var Qo = /* @__PURE__ */ new Map();
function $o(e) {
	if (!e) return Promise.resolve(null);
	let t = Qo.get(e);
	if (t) return t;
	let n = (async () => {
		try {
			let t = new URL(`${Ho()}/api/web/config/${encodeURIComponent(e)}`);
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
	return Qo.set(e, n.then((t) => (t === null && Qo.delete(e), t))), Qo.get(e) ?? n;
}
//#endregion
//#region lib/use-widget-env.tsx
function es() {
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
var ts = b(null);
function ns({ env: e, children: t }) {
	return /* @__PURE__ */ O(ts.Provider, {
		value: e,
		children: t
	});
}
function rs() {
	return w(ts) ?? es();
}
//#endregion
//#region dummy/authors.ts
var is = {
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
function as(e) {
	return e.map((e) => is[e]);
}
//#endregion
//#region lib/theme-font.ts
var os = {
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
function ss(e) {
	if (!e || typeof document > "u") return;
	let t = e.split(",")[0]?.trim().replace(/^['"]|['"]$/g, "");
	if (!t) return;
	let n = os[t.toLowerCase()];
	if (!n) return;
	let r = `wexio-font-${t.toLowerCase().replace(/\s+/g, "-")}`;
	if (document.getElementById(r)) return;
	let i = document.createElement("link");
	i.id = r, i.rel = "stylesheet", i.href = `https://fonts.googleapis.com/css2?family=${n}&display=swap`, document.head.appendChild(i);
}
//#endregion
//#region lib/widget-config.ts
var cs = {
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
		aiAssistantAvatar: Ro("/logo-dark.png"),
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
}, ls = [
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
function us() {
	let e = rs(), t = g(), [n, r] = D({
		mode: "demo",
		config: cs,
		isDummy: !0,
		isLoading: !0,
		error: null
	}), [i, a] = D(null);
	T(() => {
		let n = new URL(window.location.href), i = n.searchParams.get("pk") ?? void 0, o = n.searchParams.get("mode"), s = e.modeOverride === "demo", c = s ? void 0 : Wo() || void 0, l = s ? void 0 : e.publicKeyOverride ?? i ?? c, u = l === "pk_demo" ? void 0 : l, d = e.modeOverride ?? (u ? "production" : o === "preview" ? "preview" : "demo"), f = !1;
		if ((async () => {
			if (e.configBase) {
				let t = u ? await $o(u) : null;
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
					config: cs,
					isDummy: e.forceDummyData,
					isLoading: !1,
					error: null
				});
				return;
			}
			if (u) {
				let e = await Ko(u, t);
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
					config: cs,
					isDummy: !0,
					isLoading: !1,
					error: "publicKeyInvalid"
				});
				return;
			}
			r({
				mode: d,
				config: cs,
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
			t && a((e) => ds(e ?? {}, t));
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
	let o = n.isDummy || e.forceDummyData === !0, s = ne(() => {
		let t = n.config;
		return i && (t = ds(t, i)), e.configOverride && (t = ds(t, e.configOverride)), o && t.operatorAvatars.length === 0 && (t = {
			...t,
			operatorAvatars: cs.operatorAvatars
		}), t;
	}, [
		n.config,
		i,
		e.configOverride,
		o
	]), c = e.styleRoot;
	te(() => {
		s.theme && vs(s.theme, c ?? document);
	}, [s.theme, c]), T(() => {
		s.theme && ss(s.theme.fontFamily);
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
function ds(e, t) {
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
var fs = {
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
}, ps = {
	sm: "--wx-radius-sm",
	md: "--wx-radius",
	lg: "--wx-radius-lg",
	xl: "--wx-radius-xl"
};
function ms(e) {
	return e ? Object.entries(e).filter(([, e]) => typeof e == "string" && e.length > 0).map(([e, t]) => `${fs[e]}: ${t};`).join(" ") : "";
}
function hs(e) {
	return e ? Object.entries(e).filter(([, e]) => typeof e == "number" && Number.isFinite(e)).map(([e, t]) => `${ps[e]}: ${t}px;`).join(" ") : "";
}
var gs = /* @__PURE__ */ new WeakMap();
function _s(e) {
	let t = [hs(e.radii), typeof e.fontFamily == "string" && e.fontFamily.trim().length > 0 ? `--wx-font: ${e.fontFamily};` : ""].filter(Boolean).join(" "), n = [ms(e.light), t].filter(Boolean).join(" "), r = [ms(e.dark), t].filter(Boolean).join(" "), i = [];
	return n && i.push(`:root, :host { ${n} }`), r && i.push(`[data-theme="dark"] { ${r} }`), i.join(" ");
}
function vs(e, t) {
	let n = _s(e);
	if (!(t instanceof Document)) {
		let e = t;
		if (typeof CSSStyleSheet < "u" && "replaceSync" in CSSStyleSheet.prototype) {
			let t = gs.get(e);
			t || (t = new CSSStyleSheet(), gs.set(e, t), e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]), t.replaceSync(n);
			return;
		}
		let r = e.querySelector("#wexio-theme-vars");
		r || (r = document.createElement("style"), r.id = "wexio-theme-vars", e.appendChild(r)), r.textContent = n;
		return;
	}
	let r = t.getElementById("wexio-theme-vars");
	r || (r = document.createElement("style"), r.id = "wexio-theme-vars", t.head.appendChild(r)), r.textContent = n;
}
var ys = _("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), bs = _("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), xs = _("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), Ss = _("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Cs = _("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function ws(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function Ts(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = ws(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : ws(e[t], null);
			}
		};
	};
}
function Y(...e) {
	return v.useCallback(Ts(...e), e);
}
//#endregion
//#region components/ui/card.tsx
var Es = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("div", {
	ref: n,
	className: h("rounded-wx-lg bg-wx-bg-elevated text-wx-fg", e),
	...t
}));
Es.displayName = "Card";
var Ds = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("div", {
	ref: n,
	className: h("rounded-wx bg-wx-bg-elevated-2 text-wx-fg", e),
	...t
}));
Ds.displayName = "CardNested";
var Os = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("div", {
	ref: n,
	className: h("flex flex-col gap-1 px-5 pt-5", e),
	...t
}));
Os.displayName = "CardHeader";
var ks = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("p", {
	ref: n,
	className: h("text-base font-semibold text-wx-fg", e),
	...t
}));
ks.displayName = "CardTitle";
var As = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("p", {
	ref: n,
	className: h("text-sm text-wx-fg-muted", e),
	...t
}));
As.displayName = "CardSubtitle";
var js = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("div", {
	ref: n,
	className: h("px-5 py-4", e),
	...t
}));
js.displayName = "CardBody";
var Ms = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O("div", {
	ref: n,
	className: h("flex items-center justify-between px-5 py-3 border-t border-wx-border", e),
	...t
}));
Ms.displayName = "CardFooter";
//#endregion
//#region node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function Ns(e) {
	let t = /* @__PURE__ */ Ps(e), n = v.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = v.Children.toArray(r), o = a.find(Is);
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
function Ps(e) {
	let t = v.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (v.isValidElement(n)) {
			let e = Rs(n), i = Ls(r, n.props);
			return n.type !== v.Fragment && (i.ref = t ? Ts(t, e) : e), v.cloneElement(n, i);
		}
		return v.Children.count(n) > 1 ? v.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var Fs = Symbol("radix.slottable");
function Is(e) {
	return v.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fs;
}
function Ls(e, t) {
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
function Rs(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var zs = [
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
	let n = /* @__PURE__ */ Ns(`Primitive.${t}`), r = v.forwardRef((e, r) => {
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
function Bs(e, t) {
	e && ae.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Vs = globalThis?.document ? v.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
function Hs(e, t) {
	return v.useReducer((e, n) => t[e][n] ?? e, e);
}
var Us = (e) => {
	let { present: t, children: n } = e, r = Ws(t), i = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), a = Y(r.ref, Ks(i));
	return typeof n == "function" || r.isPresent ? v.cloneElement(i, { ref: a }) : null;
};
Us.displayName = "Presence";
function Ws(e) {
	let [t, n] = v.useState(), r = v.useRef(null), i = v.useRef(e), a = v.useRef("none"), [o, s] = Hs(e ? "mounted" : "unmounted", {
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
		let e = Gs(r.current);
		a.current = o === "mounted" ? e : "none";
	}, [o]), Vs(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = Gs(t);
			e ? s("MOUNT") : o === "none" || t?.display === "none" ? s("UNMOUNT") : s(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, s]), Vs(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = Gs(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (s("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = Gs(r.current));
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
function Gs(e) {
	return e?.animationName || "none";
}
function Ks(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
function qs(e, t = []) {
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
	return i.scopeName = e, [r, Js(i, ...t)];
}
function Js(...e) {
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
function Ys(e) {
	let t = v.useRef(e);
	return v.useEffect(() => {
		t.current = e;
	}), v.useMemo(() => (...e) => t.current?.(...e), []);
}
//#endregion
//#region node_modules/@radix-ui/react-direction/dist/index.mjs
var Xs = v.createContext(void 0);
function Zs(e) {
	let t = v.useContext(Xs);
	return e || t || "ltr";
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
function Qs(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
typeof window < "u" && window.document && window.document.createElement;
function $s(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region node_modules/@radix-ui/react-scroll-area/dist/index.mjs
function ec(e, t) {
	return v.useReducer((e, n) => t[e][n] ?? e, e);
}
var tc = "ScrollArea", [nc, rc] = qs(tc), [ic, X] = nc(tc), ac = v.forwardRef((e, t) => {
	let { __scopeScrollArea: n, type: r = "hover", dir: i, scrollHideDelay: a = 600, ...o } = e, [s, c] = v.useState(null), [l, u] = v.useState(null), [d, f] = v.useState(null), [p, m] = v.useState(null), [h, g] = v.useState(null), [_, y] = v.useState(0), [b, x] = v.useState(0), [S, C] = v.useState(!1), [w, T] = v.useState(!1), ee = Y(t, (e) => c(e)), E = Zs(i);
	return /* @__PURE__ */ O(ic, {
		scope: n,
		type: r,
		dir: E,
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
		children: /* @__PURE__ */ O(zs.div, {
			dir: E,
			...o,
			ref: ee,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": _ + "px",
				"--radix-scroll-area-corner-height": b + "px",
				...e.style
			}
		})
	});
});
ac.displayName = tc;
var oc = "ScrollAreaViewport", sc = v.forwardRef((e, t) => {
	let { __scopeScrollArea: n, children: r, nonce: i, ...a } = e, o = X(oc, n), s = Y(t, v.useRef(null), o.onViewportChange);
	return /* @__PURE__ */ k(ie, { children: [/* @__PURE__ */ O("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
		nonce: i
	}), /* @__PURE__ */ O(zs.div, {
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
sc.displayName = oc;
var Z = "ScrollAreaScrollbar", cc = v.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = X(Z, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: o } = i, s = e.orientation === "horizontal";
	return v.useEffect(() => (s ? a(!0) : o(!0), () => {
		s ? a(!1) : o(!1);
	}), [
		s,
		a,
		o
	]), i.type === "hover" ? /* @__PURE__ */ O(lc, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "scroll" ? /* @__PURE__ */ O(uc, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "auto" ? /* @__PURE__ */ O(dc, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "always" ? /* @__PURE__ */ O(fc, {
		...r,
		ref: t
	}) : null;
});
cc.displayName = Z;
var lc = v.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = X(Z, e.__scopeScrollArea), [a, o] = v.useState(!1);
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
	}, [i.scrollArea, i.scrollHideDelay]), /* @__PURE__ */ O(Us, {
		present: n || a,
		children: /* @__PURE__ */ O(dc, {
			"data-state": a ? "visible" : "hidden",
			...r,
			ref: t
		})
	});
}), uc = v.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = X(Z, e.__scopeScrollArea), a = e.orientation === "horizontal", o = Mc(() => c("SCROLL_END"), 100), [s, c] = ec("hidden", {
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
	]), /* @__PURE__ */ O(Us, {
		present: n || s !== "hidden",
		children: /* @__PURE__ */ O(fc, {
			"data-state": s === "hidden" ? "hidden" : "visible",
			...r,
			ref: t,
			onPointerEnter: $s(e.onPointerEnter, () => c("POINTER_ENTER")),
			onPointerLeave: $s(e.onPointerLeave, () => c("POINTER_LEAVE"))
		})
	});
}), dc = v.forwardRef((e, t) => {
	let n = X(Z, e.__scopeScrollArea), { forceMount: r, ...i } = e, [a, o] = v.useState(!1), s = e.orientation === "horizontal", c = Mc(() => {
		if (n.viewport) {
			let e = n.viewport.offsetWidth < n.viewport.scrollWidth, t = n.viewport.offsetHeight < n.viewport.scrollHeight;
			o(s ? e : t);
		}
	}, 10);
	return Nc(n.viewport, c), Nc(n.content, c), /* @__PURE__ */ O(Us, {
		present: r || a,
		children: /* @__PURE__ */ O(fc, {
			"data-state": a ? "visible" : "hidden",
			...i,
			ref: t
		})
	});
}), fc = v.forwardRef((e, t) => {
	let { orientation: n = "vertical", ...r } = e, i = X(Z, e.__scopeScrollArea), a = v.useRef(null), o = v.useRef(0), [s, c] = v.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), l = Tc(s.viewport, s.content), u = {
		...r,
		sizes: s,
		onSizesChange: c,
		hasThumb: l > 0 && l < 1,
		onThumbChange: (e) => a.current = e,
		onThumbPointerUp: () => o.current = 0,
		onThumbPointerDown: (e) => o.current = e
	};
	function d(e, t) {
		return Dc(e, o.current, s, t);
	}
	return n === "horizontal" ? /* @__PURE__ */ O(pc, {
		...u,
		ref: t,
		onThumbPositionChange: () => {
			if (i.viewport && a.current) {
				let e = i.viewport.scrollLeft, t = Oc(e, s, i.dir);
				a.current.style.transform = `translate3d(${t}px, 0, 0)`;
			}
		},
		onWheelScroll: (e) => {
			i.viewport && (i.viewport.scrollLeft = e);
		},
		onDragScroll: (e) => {
			i.viewport && (i.viewport.scrollLeft = d(e, i.dir));
		}
	}) : n === "vertical" ? /* @__PURE__ */ O(mc, {
		...u,
		ref: t,
		onThumbPositionChange: () => {
			if (i.viewport && a.current) {
				let e = i.viewport.scrollTop, t = Oc(e, s);
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
}), pc = v.forwardRef((e, t) => {
	let { sizes: n, onSizesChange: r, ...i } = e, a = X(Z, e.__scopeScrollArea), [o, s] = v.useState(), c = v.useRef(null), l = Y(t, c, a.onScrollbarXChange);
	return v.useEffect(() => {
		c.current && s(getComputedStyle(c.current));
	}, [c]), /* @__PURE__ */ O(_c, {
		"data-orientation": "horizontal",
		...i,
		ref: l,
		sizes: n,
		style: {
			bottom: 0,
			left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": Ec(n) + "px",
			...e.style
		},
		onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
		onDragScroll: (t) => e.onDragScroll(t.x),
		onWheelScroll: (t, n) => {
			if (a.viewport) {
				let r = a.viewport.scrollLeft + t.deltaX;
				e.onWheelScroll(r), Ac(r, n) && t.preventDefault();
			}
		},
		onResize: () => {
			c.current && a.viewport && o && r({
				content: a.viewport.scrollWidth,
				viewport: a.viewport.offsetWidth,
				scrollbar: {
					size: c.current.clientWidth,
					paddingStart: wc(o.paddingLeft),
					paddingEnd: wc(o.paddingRight)
				}
			});
		}
	});
}), mc = v.forwardRef((e, t) => {
	let { sizes: n, onSizesChange: r, ...i } = e, a = X(Z, e.__scopeScrollArea), [o, s] = v.useState(), c = v.useRef(null), l = Y(t, c, a.onScrollbarYChange);
	return v.useEffect(() => {
		c.current && s(getComputedStyle(c.current));
	}, [c]), /* @__PURE__ */ O(_c, {
		"data-orientation": "vertical",
		...i,
		ref: l,
		sizes: n,
		style: {
			top: 0,
			right: a.dir === "ltr" ? 0 : void 0,
			left: a.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": Ec(n) + "px",
			...e.style
		},
		onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
		onDragScroll: (t) => e.onDragScroll(t.y),
		onWheelScroll: (t, n) => {
			if (a.viewport) {
				let r = a.viewport.scrollTop + t.deltaY;
				e.onWheelScroll(r), Ac(r, n) && t.preventDefault();
			}
		},
		onResize: () => {
			c.current && a.viewport && o && r({
				content: a.viewport.scrollHeight,
				viewport: a.viewport.offsetHeight,
				scrollbar: {
					size: c.current.clientHeight,
					paddingStart: wc(o.paddingTop),
					paddingEnd: wc(o.paddingBottom)
				}
			});
		}
	});
}), [hc, gc] = nc(Z), _c = v.forwardRef((e, t) => {
	let { __scopeScrollArea: n, sizes: r, hasThumb: i, onThumbChange: a, onThumbPointerUp: o, onThumbPointerDown: s, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...f } = e, p = X(Z, n), [m, h] = v.useState(null), g = Y(t, (e) => h(e)), _ = v.useRef(null), y = v.useRef(""), b = p.viewport, x = r.content - r.viewport, S = Ys(u), C = Ys(c), w = Mc(d, 10);
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
	]), v.useEffect(C, [r, C]), Nc(m, w), Nc(p.content, w), /* @__PURE__ */ O(hc, {
		scope: n,
		scrollbar: m,
		hasThumb: i,
		onThumbChange: Ys(a),
		onThumbPointerUp: Ys(o),
		onThumbPositionChange: C,
		onThumbPointerDown: Ys(s),
		children: /* @__PURE__ */ O(zs.div, {
			...f,
			ref: g,
			style: {
				position: "absolute",
				...f.style
			},
			onPointerDown: $s(e.onPointerDown, (e) => {
				e.button === 0 && (e.target.setPointerCapture(e.pointerId), _.current = m.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), T(e));
			}),
			onPointerMove: $s(e.onPointerMove, T),
			onPointerUp: $s(e.onPointerUp, (e) => {
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = y.current, p.viewport && (p.viewport.style.scrollBehavior = ""), _.current = null;
			})
		})
	});
}), vc = "ScrollAreaThumb", yc = v.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = gc(vc, e.__scopeScrollArea);
	return /* @__PURE__ */ O(Us, {
		present: n || i.hasThumb,
		children: /* @__PURE__ */ O(bc, {
			ref: t,
			...r
		})
	});
}), bc = v.forwardRef((e, t) => {
	let { __scopeScrollArea: n, style: r, ...i } = e, a = X(vc, n), o = gc(vc, n), { onThumbPositionChange: s } = o, c = Y(t, (e) => o.onThumbChange(e)), l = v.useRef(void 0), u = Mc(() => {
		l.current && (l.current(), l.current = void 0);
	}, 100);
	return v.useEffect(() => {
		let e = a.viewport;
		if (e) {
			let t = () => {
				u(), l.current || (l.current = jc(e, s), s());
			};
			return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
		}
	}, [
		a.viewport,
		u,
		s
	]), /* @__PURE__ */ O(zs.div, {
		"data-state": o.hasThumb ? "visible" : "hidden",
		...i,
		ref: c,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...r
		},
		onPointerDownCapture: $s(e.onPointerDownCapture, (e) => {
			let t = e.target.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top;
			o.onThumbPointerDown({
				x: n,
				y: r
			});
		}),
		onPointerUp: $s(e.onPointerUp, o.onThumbPointerUp)
	});
});
yc.displayName = vc;
var xc = "ScrollAreaCorner", Sc = v.forwardRef((e, t) => {
	let n = X(xc, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
	return n.type !== "scroll" && r ? /* @__PURE__ */ O(Cc, {
		...e,
		ref: t
	}) : null;
});
Sc.displayName = xc;
var Cc = v.forwardRef((e, t) => {
	let { __scopeScrollArea: n, ...r } = e, i = X(xc, n), [a, o] = v.useState(0), [s, c] = v.useState(0), l = !!(a && s);
	return Nc(i.scrollbarX, () => {
		let e = i.scrollbarX?.offsetHeight || 0;
		i.onCornerHeightChange(e), c(e);
	}), Nc(i.scrollbarY, () => {
		let e = i.scrollbarY?.offsetWidth || 0;
		i.onCornerWidthChange(e), o(e);
	}), l ? /* @__PURE__ */ O(zs.div, {
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
function wc(e) {
	return e ? parseInt(e, 10) : 0;
}
function Tc(e, t) {
	let n = e / t;
	return isNaN(n) ? 0 : n;
}
function Ec(e) {
	let t = Tc(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
	return Math.max(r, 18);
}
function Dc(e, t, n, r = "ltr") {
	let i = Ec(n), a = i / 2, o = t || a, s = i - o, c = n.scrollbar.paddingStart + o, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
	return kc([c, l], d)(e);
}
function Oc(e, t, n = "ltr") {
	let r = Ec(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, o = t.content - t.viewport, s = a - r, c = Qs(e, n === "ltr" ? [0, o] : [o * -1, 0]);
	return kc([0, o], [0, s])(c);
}
function kc(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function Ac(e, t) {
	return e > 0 && e < t;
}
var jc = (e, t = () => {}) => {
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
function Mc(e, t) {
	let n = Ys(e), r = v.useRef(0);
	return v.useEffect(() => () => window.clearTimeout(r.current), []), v.useCallback(() => {
		window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
	}, [n, t]);
}
function Nc(e, t) {
	let n = Ys(t);
	Vs(() => {
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
var Pc = ac, Fc = sc, Ic = Sc;
//#endregion
//#region components/ui/scroll-area.tsx
function Lc({ className: e, viewportRef: t, children: n, onScroll: r, ...i }) {
	return /* @__PURE__ */ k(Pc, {
		"data-slot": "scroll-area",
		className: h("relative min-h-0 min-w-0 overflow-hidden", e),
		...i,
		children: [
			/* @__PURE__ */ O(Fc, {
				ref: t,
				"data-slot": "scroll-area-viewport",
				onScroll: r,
				className: h("h-full w-full rounded-[inherit]", "[&>div]:!block [&>div]:!w-full [&>div]:!max-w-full", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary/40"),
				children: n
			}),
			/* @__PURE__ */ O(Rc, {}),
			/* @__PURE__ */ O(Ic, {})
		]
	});
}
function Rc({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ O(cc, {
		"data-slot": "scroll-area-scrollbar",
		orientation: t,
		className: h("flex touch-none select-none transition-opacity duration-150", "opacity-0 data-[state=visible]:opacity-100", "hover:opacity-100", t === "vertical" && "h-full w-1.5 border-l border-l-transparent p-px", t === "horizontal" && "h-1.5 flex-col border-t border-t-transparent p-px", e),
		...n,
		children: /* @__PURE__ */ O(yc, {
			"data-slot": "scroll-area-thumb",
			className: h("relative flex-1 rounded-full", "bg-wx-fg-muted/40 hover:bg-wx-fg-muted/60 transition-colors")
		})
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message/media-lightbox.tsx
Ot();
function zc({ items: e, initialIndex: t, open: n, onClose: r }) {
	let a = m("lightbox"), [o, s] = D(t), c = rs(), l = !(c.embedded ?? !1) || (c.lightboxViewport ?? !0);
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
	return g ? oe(/* @__PURE__ */ O(Io, { children: n && d && /* @__PURE__ */ k(i.div, {
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
				children: /* @__PURE__ */ O(Cs, { size: 18 })
			}),
			u > 1 && /* @__PURE__ */ k(ie, { children: [/* @__PURE__ */ O("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": a("previous"),
				className: h("absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ O(xs, { size: 20 })
			}), /* @__PURE__ */ O("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), f();
				},
				"aria-label": a("next"),
				className: h("absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ O(Ss, { size: 20 })
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
//#region node_modules/html-dom-parser/lib/client/html-to-dom.js
var Bc = /* @__PURE__ */ p(((e) => {
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
			z(this, "parent", null), z(this, "prev", null), z(this, "next", null), z(this, "startIndex", null), z(this, "endIndex", null);
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
			super(), z(this, "data", void 0), this.data = e;
		}
		get nodeValue() {
			return this.data;
		}
		set nodeValue(e) {
			this.data = e;
		}
	}, a = class extends i {
		constructor(...e) {
			super(...e), z(this, "type", t.Text);
		}
		get nodeType() {
			return 3;
		}
	}, o = class extends i {
		constructor(...e) {
			super(...e), z(this, "type", t.Comment);
		}
		get nodeType() {
			return 8;
		}
	}, s = class extends i {
		constructor(e, n) {
			super(n), z(this, "type", t.Directive), z(this, "name", void 0), z(this, "x-name", void 0), z(this, "x-publicId", void 0), z(this, "x-systemId", void 0), this.name = e;
		}
		get nodeType() {
			return 1;
		}
	}, c = class extends r {
		constructor(e) {
			super(), z(this, "children", void 0), this.children = e;
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
			super(...e), z(this, "type", t.CDATA);
		}
		get nodeType() {
			return 4;
		}
	}, u = class extends c {
		constructor(...e) {
			super(...e), z(this, "type", t.Root);
		}
		get nodeType() {
			return 9;
		}
	}, d = class extends c {
		constructor(e, n, r = [], i = e === "script" ? t.Script : e === "style" ? t.Style : t.Tag) {
			super(r), z(this, "name", void 0), z(this, "attribs", void 0), z(this, "type", void 0), z(this, "namespace", void 0), z(this, "x-attribsNamespace", void 0), z(this, "x-attribsPrefix", void 0), this.name = e, this.attribs = n, this.type = i;
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
	function ee(e) {
		for (var t = {}, n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			t[i.name] = i.value;
		}
		return t;
	}
	function E(e) {
		return e = e.toLowerCase(), T(e) || e;
	}
	function te(e, t) {
		var n = "<" + t, r = e.toLowerCase().indexOf(n);
		if (r === -1) return !1;
		var i = e[r + n.length];
		return i === ">" || i === " " || i === "	" || i === "\n" || i === "\r" || i === "/";
	}
	function ne(e) {
		return e.replace(S, C);
	}
	function re(e) {
		return e.replace(w, x);
	}
	function D(e, t, n) {
		t === void 0 && (t = null);
		for (var r = [], i, c = 0, l = e.length; c < l; c++) {
			var u = e[c];
			switch (u.nodeType) {
				case 1:
					var f = E(u.nodeName);
					i = new d(f, ee(u.attributes)), i.children = D(f === "template" ? u.content.childNodes : u.childNodes, i);
					break;
				/* v8 ignore start */
				case 3:
					i = new a(re(u.nodeValue ?? ""));
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
		e = ne(e);
		var i = (ae.exec(e)?.[1])?.toLowerCase();
		switch (i) {
			case ie:
				var a = ce(e);
				if (!te(e, O)) {
					var o = a.querySelector(O);
					(n = o?.parentNode) == null || n.removeChild(o);
				}
				if (!te(e, k)) {
					var o = a.querySelector(k);
					(r = o?.parentNode) == null || r.removeChild(o);
				}
				return a.querySelectorAll(ie);
			case O:
			case k:
				var s = se(e, void 0, t).querySelectorAll(i);
				return te(e, k) && te(e, O) ? s[0].parentNode?.childNodes ?? pe() : s;
			/* v8 ignore start */
			default:
				if (fe) return fe(e, t);
				var o = se(e, k, t).querySelector(k);
				return o?.childNodes ?? pe();
		}
	}
	var he = /<(![a-zA-Z\s]+)>/;
	function M(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		var n = he.exec(e), r = n ? n[1] : void 0;
		return D(me(e, t?.trustedTypePolicy), null, r);
	}
	e.default = M;
})), Vc = /* @__PURE__ */ p(((e) => {
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
})), Hc = /* @__PURE__ */ p(((e) => {
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
	var { CAMELCASE: m, SAME: h, possibleStandardNames: g } = Vc(), _ = RegExp.prototype.test.bind(/* @__PURE__ */ RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), v = Object.keys(g).reduce((e, t) => {
		let n = g[t];
		return n === h ? e[t] = t : n === m ? e[t.toLowerCase()] = t : e[t] = n, e;
	}, {});
	e.BOOLEAN = i, e.BOOLEANISH_STRING = r, e.NUMERIC = o, e.OVERLOADED_BOOLEAN = a, e.POSITIVE_NUMERIC = s, e.RESERVED = t, e.STRING = n, e.getPropertyInfo = c, e.isCustomAttribute = _, e.possibleStandardNames = v;
})), Uc = /* @__PURE__ */ p(((e, t) => {
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
		function ee() {
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
		function E() {
			var e = [];
			w(e);
			for (var t; t = ee();) t !== !1 && (e.push(t), w(e));
			return e;
		}
		return C(), E();
	}
	function _(e) {
		return e ? e.replace(l, p) : p;
	}
	t.exports = g;
})), Wc = /* @__PURE__ */ p(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(Uc());
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
})), Gc = /* @__PURE__ */ p(((e) => {
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
})), Kc = /* @__PURE__ */ p(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(Wc()), r = Gc();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), qc = /* @__PURE__ */ p(((e) => {
	var n = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = o, e.setStyleProp = c;
	var r = t("react"), i = n(Kc()), a = new Set([
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
})), Jc = /* @__PURE__ */ p(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var t = Hc(), n = qc(), r = ["checked", "value"], i = [
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
function Yc(e) {
	return e.type === Q.Tag || e.type === Q.Script || e.type === Q.Style;
}
var Q, Xc = r((() => {
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})(Q || (Q = {})), Q.Root, Q.Text, Q.Directive, Q.Comment, Q.Script, Q.Style, Q.Tag, Q.CDATA, Q.Doctype;
}));
//#endregion
//#region node_modules/domhandler/dist/node.js
function Zc(e) {
	return Yc(e);
}
function Qc(e) {
	return e.type === Q.CDATA;
}
function $c(e) {
	return e.type === Q.Text;
}
function el(e) {
	return e.type === Q.Comment;
}
function tl(e) {
	return e.type === Q.Directive;
}
function nl(e) {
	return e.type === Q.Root;
}
function rl(e) {
	return Object.hasOwn(e, "children");
}
function il(e, t = !1) {
	let n;
	if ($c(e)) n = new cl(e.data);
	else if (el(e)) n = new ll(e.data);
	else if (Zc(e)) {
		let r = t ? al(e.children) : [], i = new ml(e.name, { ...e.attribs }, r);
		for (let e of r) e.parent = i;
		e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), n = i;
	} else if (Qc(e)) {
		let r = t ? al(e.children) : [], i = new fl(r);
		for (let e of r) e.parent = i;
		n = i;
	} else if (nl(e)) {
		let r = t ? al(e.children) : [], i = new pl(r);
		for (let e of r) e.parent = i;
		e["x-mode"] && (i["x-mode"] = e["x-mode"]), n = i;
	} else if (tl(e)) {
		let t = new ul(e.name, e.data);
		e["x-name"] != null && (t["x-name"] = e["x-name"], t["x-publicId"] = e["x-publicId"], t["x-systemId"] = e["x-systemId"]), n = t;
	} else throw Error(`Not implemented yet: ${e.type}`);
	return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
}
function al(e) {
	let t = e.map((e) => il(e, !0));
	for (let e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
	return t;
}
var ol, sl, cl, ll, ul, dl, fl, pl, ml, hl = r((() => {
	Xc(), Ot(), ol = class {
		constructor() {
			z(this, "parent", null), z(this, "prev", null), z(this, "next", null), z(this, "startIndex", null), z(this, "endIndex", null);
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
			return il(this, e);
		}
	}, sl = class extends ol {
		constructor(e) {
			super(), z(this, "data", void 0), this.data = e;
		}
		get nodeValue() {
			return this.data;
		}
		set nodeValue(e) {
			this.data = e;
		}
	}, cl = class extends sl {
		constructor(...e) {
			super(...e), z(this, "type", Q.Text);
		}
		get nodeType() {
			return 3;
		}
	}, ll = class extends sl {
		constructor(...e) {
			super(...e), z(this, "type", Q.Comment);
		}
		get nodeType() {
			return 8;
		}
	}, ul = class extends sl {
		constructor(e, t) {
			super(t), z(this, "type", Q.Directive), z(this, "name", void 0), z(this, "x-name", void 0), z(this, "x-publicId", void 0), z(this, "x-systemId", void 0), this.name = e;
		}
		get nodeType() {
			return 1;
		}
	}, dl = class extends ol {
		constructor(e) {
			super(), z(this, "children", void 0), this.children = e;
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
	}, fl = class extends dl {
		constructor(...e) {
			super(...e), z(this, "type", Q.CDATA);
		}
		get nodeType() {
			return 4;
		}
	}, pl = class extends dl {
		constructor(...e) {
			super(...e), z(this, "type", Q.Root);
		}
		get nodeType() {
			return 9;
		}
	}, ml = class extends dl {
		constructor(e, t, n = [], r = e === "script" ? Q.Script : e === "style" ? Q.Style : Q.Tag) {
			super(n), z(this, "name", void 0), z(this, "attribs", void 0), z(this, "type", void 0), z(this, "namespace", void 0), z(this, "x-attribsNamespace", void 0), z(this, "x-attribsPrefix", void 0), this.name = e, this.attribs = t, this.type = r;
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
})), gl = /* @__PURE__ */ f({
	CDATA: () => fl,
	Comment: () => ll,
	DataNode: () => sl,
	Document: () => pl,
	DomHandler: () => vl,
	Element: () => ml,
	Node: () => ol,
	NodeWithChildren: () => dl,
	ProcessingInstruction: () => ul,
	Text: () => cl,
	cloneNode: () => il,
	default: () => vl,
	hasChildren: () => rl,
	isCDATA: () => Qc,
	isComment: () => el,
	isDirective: () => tl,
	isDocument: () => nl,
	isTag: () => Zc,
	isText: () => $c
}), _l, vl, yl = r((() => {
	Xc(), hl(), Ot(), hl(), _l = {
		withStartIndices: !1,
		withEndIndices: !1,
		xmlMode: !1
	}, vl = class {
		constructor(e, t, n) {
			z(this, "dom", []), z(this, "root", new pl(this.dom)), z(this, "callback", void 0), z(this, "options", void 0), z(this, "elementCB", void 0), z(this, "done", !1), z(this, "tagStack", [this.root]), z(this, "lastNode", null), z(this, "parser", null), typeof t == "function" && (n = t, t = _l), typeof e == "object" && (t = e, e = void 0), this.callback = e ?? null, this.options = t ?? _l, this.elementCB = n ?? null;
		}
		onparserinit(e) {
			this.parser = e;
		}
		onreset() {
			this.dom = [], this.root = new pl(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
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
			let n = new ml(e, t, void 0, this.options.xmlMode ? Q.Tag : void 0);
			this.addNode(n), this.tagStack.push(n);
		}
		ontext(e) {
			let { lastNode: t } = this;
			if (t && t.type === Q.Text) t.data += e, this.options.withEndIndices && this.parser && (t.endIndex = this.parser.endIndex);
			else {
				let t = new cl(e);
				this.addNode(t), this.lastNode = t;
			}
		}
		oncomment(e) {
			if (this.lastNode && this.lastNode.type === Q.Comment) {
				this.lastNode.data += e;
				return;
			}
			let t = new ll(e);
			this.addNode(t), this.lastNode = t;
		}
		oncommentend() {
			this.lastNode = null;
		}
		oncdatastart() {
			let e = new cl(""), t = new fl([e]);
			this.addNode(t), e.parent = t, this.lastNode = e;
		}
		oncdataend() {
			this.lastNode = null;
		}
		onprocessinginstruction(e, t) {
			let n = new ul(e, t);
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
})), bl = /* @__PURE__ */ p(((n) => {
	var r = n && n.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(n, "__esModule", { value: !0 }), n.default = l;
	var i = (yl(), e(gl)), a = t("react"), o = r(Jc()), s = qc(), c = {
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
})), $ = /* @__PURE__ */ d((/* @__PURE__ */ p(((t) => {
	var n = t && t.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(t, "__esModule", { value: !0 }), t.htmlToDOM = t.domToReact = t.attributesToProps = t.Text = t.ProcessingInstruction = t.Element = t.Comment = void 0, t.default = s;
	var r = n(Bc());
	t.htmlToDOM = r.default, t.attributesToProps = n(Jc()).default;
	var i = n(bl());
	t.domToReact = i.default;
	var a = (yl(), e(gl));
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
})))(), 1), xl = $.default.default || $.default;
//#endregion
//#region components/widget/article-html/blocks/table-of-contents.tsx
function Sl({ entries: e }) {
	let t = m("article"), [n, r] = D(!1), i = (e, t) => {
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
			children: [/* @__PURE__ */ O("span", { children: t("tableOfContents") }), /* @__PURE__ */ O(bs, {
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
function Cl({ summary: e, body: t, defaultOpen: n }) {
	let [r, i] = D(n);
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
			}), /* @__PURE__ */ O(bs, {
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
var wl = (e, t) => {
	let n = e.name === "details", r = e.name === "div" && e.attribs?.["data-type"] === "details";
	if (!n && !r) return;
	let i = r ? (e.children ?? []).flatMap((e) => e instanceof $.Element && e.name === "div" && !e.attribs?.["data-type"] ? e.children ?? [] : [e]) : e.children ?? [], a = i.find((e) => e instanceof $.Element && e.name === "summary"), o = i.filter((e) => e !== a && !(e instanceof $.Element && e.name === "button")), s = o.find((e) => e instanceof $.Element && e.name === "div" && (e.attribs?.["data-type"] === "detailsContent" || e.attribs?.["data-type"] === "details-content")), c = s ? s.children ?? [] : o, l = a ? (0, $.domToReact)(a.children, t.options) : null, u = /* @__PURE__ */ O(ie, { children: (0, $.domToReact)(c, t.options) });
	return /* @__PURE__ */ O(Cl, {
		defaultOpen: e.attribs?.open !== void 0 || e.attribs?.["data-open"] === "true",
		summary: l,
		body: u
	});
}, Tl = {
	card: "border-wx-border bg-wx-bg-elevated/60",
	callout: "border-wx-primary/30 bg-wx-primary/5",
	note: "border-wx-border bg-wx-bg-elevated/60",
	tip: "border-wx-success/30 bg-wx-success/5",
	warning: "border-wx-warning/30 bg-wx-warning/5",
	danger: "border-wx-danger/30 bg-wx-danger/5"
}, El = (e, t) => {
	let n = Tl[e.name];
	if (n) return /* @__PURE__ */ O("div", {
		className: `my-4 rounded-wx-md border px-4 py-3 ${n}`,
		"data-custom-block": e.name,
		children: (0, $.domToReact)(e.children ?? [], t.options)
	});
};
//#endregion
//#region lib/article-toc.ts
function Dl(e, t) {
	let n = e.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "section", r = n, i = 2;
	for (; t.has(r);) r = `${n}-${i}`, i += 1;
	return t.add(r), r;
}
//#endregion
//#region components/widget/article-html/extract-text.ts
function Ol(e) {
	let t = "";
	for (let n of e.children ?? []) n.type === "text" ? t += n.data ?? "" : n instanceof $.Element && (t += Ol(n));
	return t;
}
//#endregion
//#region components/widget/article-html/build-options/heading.ts
var kl = (e, t) => {
	if (e.name !== "h1" && e.name !== "h2" && e.name !== "h3") return;
	let n = Number(e.name.slice(1)), r = Ol(e).trim();
	if (!r) return;
	let i = Dl(r, t.seenIds);
	return t.entries.push({
		id: i,
		text: r,
		level: n
	}), x(e.name, { id: i }, (0, $.domToReact)(e.children ?? [], t.options));
}, Al = (e, t) => {
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
}, jl = (e, t) => {
	if (e.name === "a") return /* @__PURE__ */ O("a", {
		href: e.attribs?.href ?? "",
		target: "_blank",
		rel: "noopener noreferrer",
		className: "text-wx-primary underline underline-offset-2 transition-opacity hover:opacity-70",
		children: (0, $.domToReact)(e.children ?? [], t.options)
	});
}, Ml = (e, t) => {
	if (e.name === "table") return /* @__PURE__ */ O("div", {
		className: h("my-3 overflow-x-auto", "[scrollbar-width:thin] [scrollbar-color:var(--color-wx-fg-subtle)_transparent]", "[&::-webkit-scrollbar]:h-2", "[&::-webkit-scrollbar-track]:bg-transparent", "[&::-webkit-scrollbar-thumb]:rounded-full", "[&::-webkit-scrollbar-thumb]:bg-wx-fg-subtle/40", "[&::-webkit-scrollbar-thumb:hover]:bg-wx-fg-subtle/60"),
		children: /* @__PURE__ */ O("table", { children: (0, $.domToReact)(e.children ?? [], t.options) })
	});
};
//#endregion
//#region components/widget/article-html/blocks/tabs-block.tsx
function Nl({ tabs: e }) {
	let t = m("article"), [n, r] = D(0);
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
var Pl = [
	kl,
	(e, t) => {
		if (e.name === "div" && (e.attribs?.["data-type"] === "tabs" || e.attribs?.["data-type"] === "tabs")) return /* @__PURE__ */ O(Nl, { tabs: (e.children ?? []).filter((e) => e instanceof $.Element && e.name === "div" && e.attribs?.["data-type"] === "tab").map((e) => {
			let n = e.children?.find((e) => e instanceof $.Element && e.name === "div" && "data-tab-label" in (e.attribs ?? {})), r = (e.children ?? []).filter((e) => e !== n);
			return {
				label: n ? Ol(n).trim() : "",
				body: /* @__PURE__ */ O(ie, { children: (0, $.domToReact)(r, t.options) })
			};
		}) });
	},
	wl,
	El,
	Ml,
	Al,
	jl
];
function Fl(e, t, n, r) {
	let i = {}, a = {
		options: i,
		entries: e,
		seenIds: t,
		images: n,
		onImageClick: r
	};
	return i.replace = (e) => {
		if (e instanceof $.Element) for (let t of Pl) {
			let n = t(e, a);
			if (n !== void 0) return n;
		}
	}, i;
}
//#endregion
//#region components/widget/article-html/index.tsx
function Il({ html: e, className: t }) {
	let [n, r] = D(null), { parsed: i, entries: a, images: o } = ne(() => {
		let t = [], n = /* @__PURE__ */ new Set(), i = [];
		return {
			parsed: xl(e, Fl(t, n, i, r)),
			entries: t,
			images: i
		};
	}, [e]);
	return /* @__PURE__ */ k("div", {
		className: t,
		children: [
			a.length >= 3 && /* @__PURE__ */ O(Sl, { entries: a }),
			i,
			o.length > 0 && /* @__PURE__ */ O(zc, {
				items: o,
				initialIndex: n ?? 0,
				open: n !== null,
				onClose: () => r(null)
			})
		]
	});
}
function Ll(e) {
	return xl(e, Fl([], /* @__PURE__ */ new Set()));
}
//#endregion
//#region lib/content-languages.ts
var Rl = [
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
function zl(e) {
	let t = Rl.find((t) => t.value === e);
	if (t) return t.label;
	let n = e.split("-")[0].toLowerCase(), r = Rl.find((e) => e.value === n);
	return r ? r.label : n.toUpperCase();
}
//#endregion
export { ia as $, Yt as $t, Ho as A, $n as At, eo as B, jn as Bt, bs as C, wr as Ct, as as D, er as Dt, ls as E, _r as Et, yo as F, Rn as Ft, q as G, yn as Gt, Ua as H, _n as Ht, ho as I, In as It, Sa as J, cn as Jt, Da as K, hn as Kt, xo as L, Ln as Lt, Io as M, gr as Mt, Eo as N, dr as Nt, ns as O, vr as Ot, mo as P, Jn as Pt, K as Q, Xt as Qt, oo as R, Fn as Rt, Ss as S, Sr as St, us as T, mr as Tt, Aa as U, vn as Ut, $a as V, On as Vt, Ma as W, gn as Wt, ya as X, an as Xt, va as Y, ln as Yt, ba as Z, $t as Zt, As as _, j as _n, Dr as _t, zc as a, Ae as an, Ji as at, Y as b, Er as bt, Qs as c, Ce as cn, Gi as ct, qs as d, ye as dn, pi as dt, Jt as en, ra as et, Vs as f, A as fn, mi as ft, js as g, le as gn, br as gt, Es as h, de as hn, Pr as ht, Kc as i, I as in, Yi as it, Ro as j, Qn as jt, rs as k, yr as kt, Zs as l, Se as ln, Vi as lt, Bs as m, ce as mn, ci as mt, Il as n, Kt as nn, W as nt, Lc as o, P as on, qi as ot, zs as p, ue as pn, fi as pt, Ca as q, dn as qt, Ll as r, nt as rn, ta as rt, $s as s, Te as sn, Ki as st, zl as t, Gt as tn, U as tt, Ys as u, N as un, Ri as ut, ks as v, Tr as vt, ys as w, hr as wt, Cs as x, xr as xt, Ts as y, Cr as yt, lo as z, Nn as zt };

//# sourceMappingURL=widget-react-BFgpQWPW.js.map