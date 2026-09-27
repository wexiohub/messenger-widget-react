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
import { _ as e, f as t, g as n, h as r, m as i, p as a, t as o } from "./widget-react-DbOJZl9F.js";
import { i as s, n as c, o as l, t as u } from "./widget-react-krPPnv02.js";
import { n as d, t as f } from "./widget-react-wSc9gIfG.js";
import * as p from "react";
import { createContext as m, createElement as h, useCallback as g, useContext as _, useEffect as v, useLayoutEffect as y, useMemo as b, useRef as x, useState as S } from "react";
import { Fragment as C, jsx as w, jsxs as T } from "react/jsx-runtime";
import * as E from "react-dom";
import { createPortal as ee } from "react-dom";
//#region node_modules/tslib/tslib.es6.mjs
var D = function(e, t) {
	return D = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, D(e, t);
};
function te(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	D(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var O = function() {
	return O = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, O.apply(this, arguments);
};
function ne(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function re(e, t, n, r) {
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
function k(e, t) {
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
function A(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/ts-invariant/lib/invariant.js
var ie = "Invariant Violation", ae = Object.setPrototypeOf, oe = ae === void 0 ? function(e, t) {
	return e.__proto__ = t, e;
} : ae, se = function(e) {
	te(t, e);
	function t(n) {
		n === void 0 && (n = ie);
		var r = e.call(this, typeof n == "number" ? ie + ": " + n + " (see https://github.com/apollographql/invariant-packages)" : n) || this;
		return r.framesToPop = 1, r.name = ie, oe(r, t.prototype), r;
	}
	return t;
}(Error);
function ce(e, t) {
	if (!e) throw new se(t);
}
var le = [
	"debug",
	"log",
	"warn",
	"error",
	"silent"
], ue = le.indexOf("log");
function de(e) {
	return function() {
		if (le.indexOf(e) >= ue) return (console[e] || console.log).apply(console, arguments);
	};
}
(function(e) {
	e.debug = de("debug"), e.log = de("log"), e.warn = de("warn"), e.error = de("error");
})(ce || (ce = {}));
//#endregion
//#region node_modules/@apollo/client/version.js
var fe = "3.14.1";
//#endregion
//#region node_modules/@apollo/client/utilities/globals/maybe.js
function pe(e) {
	try {
		return e();
	} catch {}
}
//#endregion
//#region node_modules/@apollo/client/utilities/globals/global.js
var me = pe(function() {
	return globalThis;
}) || pe(function() {
	return window;
}) || pe(function() {
	return self;
}) || pe(function() {
	return global;
}) || pe(function() {
	return pe.constructor("return this")();
}), he = /* @__PURE__ */ new Map();
function ge(e) {
	var t = he.get(e) || 1;
	return he.set(e, t + 1), `${e}:${t}:${Math.random().toString(36).slice(2)}`;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/stringifyForDisplay.js
function _e(e, t) {
	t === void 0 && (t = 0);
	var n = ge("stringifyForDisplay");
	return JSON.stringify(e, function(e, t) {
		return t === void 0 ? n : t;
	}, t).split(JSON.stringify(n)).join("<undefined>");
}
//#endregion
//#region node_modules/@apollo/client/utilities/globals/invariantWrappers.js
function ve(e) {
	return function(t) {
		var n = [...arguments].slice(1);
		if (typeof t == "number") {
			var r = t;
			t = Se(r), t || (t = Ce(r, n), n = []);
		}
		e.apply(void 0, [t].concat(n));
	};
}
var j = Object.assign(function(e, t) {
	var n = [...arguments].slice(2);
	e || ce(e, Se(t, n) || Ce(t, n));
}, {
	debug: ve(ce.debug),
	log: ve(ce.log),
	warn: ve(ce.warn),
	error: ve(ce.error)
});
function ye(e) {
	var t = [...arguments].slice(1);
	return new se(Se(e, t) || Ce(e, t));
}
var be = Symbol.for("ApolloErrorMessageHandler_" + fe);
function xe(e) {
	if (typeof e == "string") return e;
	try {
		return _e(e, 2).slice(0, 1e3);
	} catch {
		return "<non-serializable>";
	}
}
function Se(e, t) {
	if (t === void 0 && (t = []), e) return me[be] && me[be](e, t.map(xe));
}
function Ce(e, t) {
	if (t === void 0 && (t = []), e) return `An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({
		version: fe,
		message: e,
		args: t.map(xe)
	}))}`;
}
//#endregion
//#region node_modules/rehackt/index.js
var we = /* @__PURE__ */ t(((e, t) => {
	t.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, t.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, t.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(t.exports, r("react"));
}));
//#endregion
//#region node_modules/graphql/jsutils/devAssert.mjs
function Te(e, t) {
	if (!e) throw Error(t);
}
//#endregion
//#region node_modules/graphql/jsutils/isObjectLike.mjs
function Ee(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/graphql/jsutils/invariant.mjs
function De(e, t) {
	if (!e) throw Error(t ?? "Unexpected invariant triggered.");
}
//#endregion
//#region node_modules/graphql/language/location.mjs
var Oe = /\r\n|[\n\r]/g;
function ke(e, t) {
	let n = 0, r = 1;
	for (let i of e.body.matchAll(Oe)) {
		if (typeof i.index == "number" || De(!1), i.index >= t) break;
		n = i.index + i[0].length, r += 1;
	}
	return {
		line: r,
		column: t + 1 - n
	};
}
//#endregion
//#region node_modules/graphql/language/printLocation.mjs
function Ae(e) {
	return je(e.source, ke(e.source, e.start));
}
function je(e, t) {
	let n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, o = t.line + a, s = t.line === 1 ? n : 0, c = t.column + s, l = `${e.name}:${o}:${c}\n`, u = r.split(/\r\n|[\n\r]/g), d = u[i];
	if (d.length > 120) {
		let e = Math.floor(c / 80), t = c % 80, n = [];
		for (let e = 0; e < d.length; e += 80) n.push(d.slice(e, e + 80));
		return l + Me([
			[`${o} |`, n[0]],
			...n.slice(1, e + 1).map((e) => ["|", e]),
			["|", "^".padStart(t)],
			["|", n[e + 1]]
		]);
	}
	return l + Me([
		[`${o - 1} |`, u[i - 1]],
		[`${o} |`, d],
		["|", "^".padStart(c)],
		[`${o + 1} |`, u[i + 1]]
	]);
}
function Me(e) {
	let t = e.filter(([e, t]) => t !== void 0), n = Math.max(...t.map(([e]) => e.length));
	return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n");
}
//#endregion
//#region node_modules/graphql/error/GraphQLError.mjs
function Ne(e) {
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
var Pe = class e extends Error {
	constructor(t, ...n) {
		let { nodes: r, source: i, positions: a, path: o, originalError: s, extensions: c } = Ne(n);
		super(t), this.name = "GraphQLError", this.path = o ?? void 0, this.originalError = s ?? void 0, this.nodes = Fe(Array.isArray(r) ? r : r ? [r] : void 0);
		let l = Fe(this.nodes?.map((e) => e.loc).filter((e) => e != null));
		this.source = i ?? l?.[0]?.source, this.positions = a ?? l?.map((e) => e.start), this.locations = a && i ? a.map((e) => ke(i, e)) : l?.map((e) => ke(e.source, e.start));
		let u = Ee(s?.extensions) ? s?.extensions : void 0;
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
		if (this.nodes) for (let t of this.nodes) t.loc && (e += "\n\n" + Ae(t.loc));
		else if (this.source && this.locations) for (let t of this.locations) e += "\n\n" + je(this.source, t);
		return e;
	}
	toJSON() {
		let e = { message: this.message };
		return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
	}
};
function Fe(e) {
	return e === void 0 || e.length === 0 ? void 0 : e;
}
//#endregion
//#region node_modules/graphql/error/syntaxError.mjs
function Ie(e, t, n) {
	return new Pe(`Syntax Error: ${n}`, {
		source: e,
		positions: [t]
	});
}
//#endregion
//#region node_modules/graphql/language/ast.mjs
var Le = class {
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
}, Re = class {
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
}, ze = {
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
}, Be = new Set(Object.keys(ze));
function Ve(e) {
	let t = e?.kind;
	return typeof t == "string" && Be.has(t);
}
var He;
(function(e) {
	e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(He || (He = {}));
//#endregion
//#region node_modules/graphql/language/directiveLocation.mjs
var Ue;
(function(e) {
	e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", e.DIRECTIVE_DEFINITION = "DIRECTIVE_DEFINITION";
})(Ue || (Ue = {}));
//#endregion
//#region node_modules/graphql/language/kinds.mjs
var M;
(function(e) {
	e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.DIRECTIVE_EXTENSION = "DirectiveExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", e.TYPE_COORDINATE = "TypeCoordinate", e.MEMBER_COORDINATE = "MemberCoordinate", e.ARGUMENT_COORDINATE = "ArgumentCoordinate", e.DIRECTIVE_COORDINATE = "DirectiveCoordinate", e.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
})(M || (M = {}));
//#endregion
//#region node_modules/graphql/language/characterClasses.mjs
function We(e) {
	return e === 9 || e === 32;
}
function Ge(e) {
	return e >= 48 && e <= 57;
}
function Ke(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function qe(e) {
	return Ke(e) || e === 95;
}
function Je(e) {
	return Ke(e) || Ge(e) || e === 95;
}
//#endregion
//#region node_modules/graphql/language/blockString.mjs
function Ye(e) {
	let t = 2 ** 53 - 1, n = null, r = -1;
	for (let i = 0; i < e.length; ++i) {
		let a = e[i], o = Xe(a);
		o !== a.length && (n = n ?? i, r = i, i !== 0 && o < t && (t = o));
	}
	return e.map((e, n) => n === 0 ? e : e.slice(t)).slice(n ?? 0, r + 1);
}
function Xe(e) {
	let t = 0;
	for (; t < e.length && We(e.charCodeAt(t));) ++t;
	return t;
}
function Ze(e, t) {
	let n = e.replace(/"""/g, "\\\"\"\""), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((e) => e.length === 0 || We(e.charCodeAt(0))), o = n.endsWith("\\\"\"\""), s = e.endsWith("\"") && !o, c = e.endsWith("\\"), l = s || c, u = !(t != null && t.minimize) && (!i || e.length > 70 || l || a || o), d = "", f = i && We(e.charCodeAt(0));
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
var Qe = class {
	constructor(e) {
		let t = new Re(N.SOF, 0, 0, 0, 0);
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
				let t = ot(this, e.end);
				e.next = t, t.prev = e, e = t;
			}
		while (e.kind === N.COMMENT);
		return e;
	}
};
function $e(e) {
	return e === N.BANG || e === N.DOLLAR || e === N.AMP || e === N.PAREN_L || e === N.PAREN_R || e === N.DOT || e === N.SPREAD || e === N.COLON || e === N.EQUALS || e === N.AT || e === N.BRACKET_L || e === N.BRACKET_R || e === N.BRACE_L || e === N.PIPE || e === N.BRACE_R;
}
function et(e) {
	return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function tt(e, t) {
	return nt(e.charCodeAt(t)) && rt(e.charCodeAt(t + 1));
}
function nt(e) {
	return e >= 55296 && e <= 56319;
}
function rt(e) {
	return e >= 56320 && e <= 57343;
}
function it(e, t) {
	let n = e.source.body.codePointAt(t);
	if (n === void 0) return N.EOF;
	if (n >= 32 && n <= 126) {
		let e = String.fromCodePoint(n);
		return e === "\"" ? "'\"'" : `"${e}"`;
	}
	return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function at(e, t, n, r, i) {
	let a = e.line;
	return new Re(t, n, r, a, 1 + n - e.lineStart, i);
}
function ot(e, t) {
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
			case 35: return st(e, i);
			case 33: return at(e, N.BANG, i, i + 1);
			case 36: return at(e, N.DOLLAR, i, i + 1);
			case 38: return at(e, N.AMP, i, i + 1);
			case 40: return at(e, N.PAREN_L, i, i + 1);
			case 41: return at(e, N.PAREN_R, i, i + 1);
			case 46:
				if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return at(e, N.SPREAD, i, i + 3);
				break;
			case 58: return at(e, N.COLON, i, i + 1);
			case 61: return at(e, N.EQUALS, i, i + 1);
			case 64: return at(e, N.AT, i, i + 1);
			case 91: return at(e, N.BRACKET_L, i, i + 1);
			case 93: return at(e, N.BRACKET_R, i, i + 1);
			case 123: return at(e, N.BRACE_L, i, i + 1);
			case 124: return at(e, N.PIPE, i, i + 1);
			case 125: return at(e, N.BRACE_R, i, i + 1);
			case 34: return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? gt(e, i) : ut(e, i);
		}
		if (Ge(t) || t === 45) return ct(e, i, t);
		if (qe(t)) return _t(e, i);
		throw Ie(e.source, i, t === 39 ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : et(t) || tt(n, i) ? `Unexpected character: ${it(e, i)}.` : `Invalid character: ${it(e, i)}.`);
	}
	return at(e, N.EOF, r, r);
}
function st(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r;) {
		let e = n.charCodeAt(i);
		if (e === 10 || e === 13) break;
		if (et(e)) ++i;
		else if (tt(n, i)) i += 2;
		else break;
	}
	return at(e, N.COMMENT, t, i, n.slice(t + 1, i));
}
function ct(e, t, n) {
	let r = e.source.body, i = t, a = n, o = !1;
	if (a === 45 && (a = r.charCodeAt(++i)), a === 48) {
		if (a = r.charCodeAt(++i), Ge(a)) throw Ie(e.source, i, `Invalid number, unexpected digit after 0: ${it(e, i)}.`);
	} else i = lt(e, i, a), a = r.charCodeAt(i);
	if (a === 46 && (o = !0, a = r.charCodeAt(++i), i = lt(e, i, a), a = r.charCodeAt(i)), (a === 69 || a === 101) && (o = !0, a = r.charCodeAt(++i), (a === 43 || a === 45) && (a = r.charCodeAt(++i)), i = lt(e, i, a), a = r.charCodeAt(i)), a === 46 || qe(a)) throw Ie(e.source, i, `Invalid number, expected digit but got: ${it(e, i)}.`);
	return at(e, o ? N.FLOAT : N.INT, t, i, r.slice(t, i));
}
function lt(e, t, n) {
	if (!Ge(n)) throw Ie(e.source, t, `Invalid number, expected digit but got: ${it(e, t)}.`);
	let r = e.source.body, i = t + 1;
	for (; Ge(r.charCodeAt(i));) ++i;
	return i;
}
function ut(e, t) {
	let n = e.source.body, r = n.length, i = t + 1, a = i, o = "";
	for (; i < r;) {
		let r = n.charCodeAt(i);
		if (r === 34) return o += n.slice(a, i), at(e, N.STRING, t, i + 1, o);
		if (r === 92) {
			o += n.slice(a, i);
			let t = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? dt(e, i) : ft(e, i) : ht(e, i);
			o += t.value, i += t.size, a = i;
			continue;
		}
		if (r === 10 || r === 13) break;
		if (et(r)) ++i;
		else if (tt(n, i)) i += 2;
		else throw Ie(e.source, i, `Invalid character within String: ${it(e, i)}.`);
	}
	throw Ie(e.source, i, "Unterminated string.");
}
function dt(e, t) {
	let n = e.source.body, r = 0, i = 3;
	for (; i < 12;) {
		let e = n.charCodeAt(t + i++);
		if (e === 125) {
			if (i < 5 || !et(r)) break;
			return {
				value: String.fromCodePoint(r),
				size: i
			};
		}
		if (r = r << 4 | mt(e), r < 0) break;
	}
	throw Ie(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
}
function ft(e, t) {
	let n = e.source.body, r = pt(n, t + 2);
	if (et(r)) return {
		value: String.fromCodePoint(r),
		size: 6
	};
	if (nt(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
		let e = pt(n, t + 8);
		if (rt(e)) return {
			value: String.fromCodePoint(r, e),
			size: 12
		};
	}
	throw Ie(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function pt(e, t) {
	return mt(e.charCodeAt(t)) << 12 | mt(e.charCodeAt(t + 1)) << 8 | mt(e.charCodeAt(t + 2)) << 4 | mt(e.charCodeAt(t + 3));
}
function mt(e) {
	return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function ht(e, t) {
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
	throw Ie(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function gt(e, t) {
	let n = e.source.body, r = n.length, i = e.lineStart, a = t + 3, o = a, s = "", c = [];
	for (; a < r;) {
		let r = n.charCodeAt(a);
		if (r === 34 && n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34) {
			s += n.slice(o, a), c.push(s);
			let r = at(e, N.BLOCK_STRING, t, a + 3, Ye(c).join("\n"));
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
		if (et(r)) ++a;
		else if (tt(n, a)) a += 2;
		else throw Ie(e.source, a, `Invalid character within String: ${it(e, a)}.`);
	}
	throw Ie(e.source, a, "Unterminated string.");
}
function _t(e, t) {
	let n = e.source.body, r = n.length, i = t + 1;
	for (; i < r && Je(n.charCodeAt(i));) ++i;
	return at(e, N.NAME, t, i, n.slice(t, i));
}
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/typeof.js
function vt(e) {
	"@babel/helpers - typeof";
	return vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, vt(e);
}
var yt = a((() => {}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/toPrimitive.js
function bt(e, t) {
	if (vt(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (vt(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var xt = a((() => {
	yt();
}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/toPropertyKey.js
function St(e) {
	var t = bt(e, "string");
	return vt(t) == "symbol" ? t : t + "";
}
var Ct = a((() => {
	yt(), xt();
}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/defineProperty.js
function P(e, t, n) {
	return (t = St(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var wt = a((() => {
	Ct();
})), Tt = 10, Et = 2;
function Dt(e) {
	return Ot(e, []);
}
function Ot(e, t) {
	switch (typeof e) {
		case "string": return JSON.stringify(e);
		case "function": return e.name ? `[function ${e.name}]` : "[function]";
		case "object": return kt(e, t);
		default: return String(e);
	}
}
function kt(e, t) {
	if (e === null) return "null";
	if (t.includes(e)) return "[Circular]";
	let n = [...t, e];
	if (At(e)) {
		let t = e.toJSON();
		if (t !== e) return typeof t == "string" ? t : Ot(t, n);
	} else if (Array.isArray(e)) return Mt(e, n);
	return jt(e, n);
}
function At(e) {
	return typeof e.toJSON == "function";
}
function jt(e, t) {
	let n = Object.entries(e);
	return n.length === 0 ? "{}" : t.length > Et ? "[" + Nt(e) + "]" : "{ " + n.map(([e, n]) => e + ": " + Ot(n, t)).join(", ") + " }";
}
function Mt(e, t) {
	if (e.length === 0) return "[]";
	if (t.length > Et) return "[Array]";
	let n = Math.min(Tt, e.length), r = e.length - n, i = [];
	for (let r = 0; r < n; ++r) i.push(Ot(e[r], t));
	return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function Nt(e) {
	let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
	if (t === "Object" && typeof e.constructor == "function") {
		let t = e.constructor.name;
		if (typeof t == "string" && t !== "") return t;
	}
	return t;
}
var Pt = globalThis.process ? function(e, t) {
	return e instanceof t;
} : function(e, t) {
	if (e instanceof t) return !0;
	if (typeof e == "object" && e) {
		let n = t.prototype[Symbol.toStringTag];
		if (n === (Symbol.toStringTag in e ? e[Symbol.toStringTag] : e.constructor?.name)) {
			let t = Dt(e);
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
}, Ft = class {
	constructor(e, t = "GraphQL request", n = {
		line: 1,
		column: 1
	}) {
		typeof e == "string" || Te(!1, `Body must be a string. Received: ${Dt(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || Te(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Te(!1, "column in locationOffset is 1-indexed and must be positive.");
	}
	get [Symbol.toStringTag]() {
		return "Source";
	}
};
function It(e) {
	return Pt(e, Ft);
}
//#endregion
//#region node_modules/graphql/language/parser.mjs
function Lt(e, t) {
	let n = new Rt(e, t), r = n.parseDocument();
	return Object.defineProperty(r, "tokenCount", {
		enumerable: !1,
		value: n.tokenCount
	}), r;
}
var Rt = class {
	constructor(e, t = {}) {
		let { lexer: n, ...r } = t;
		if (n) this._lexer = n;
		else {
			let t = It(e) ? e : new Ft(e);
			this._lexer = new Qe(t);
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
		if (e && t.kind === N.BRACE_L) throw Ie(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are not supported on shorthand queries.");
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
			if (e) throw Ie(this._lexer.source, this._lexer.token.start, "Unexpected description, only GraphQL definitions support descriptions.");
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
			operation: He.QUERY,
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
			case "query": return He.QUERY;
			case "mutation": return He.MUTATION;
			case "subscription": return He.SUBSCRIPTION;
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
					throw Ie(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`);
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
		if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw Ie(this._lexer.source, this._lexer.token.start, `${zt(this._lexer.token)} is reserved and cannot be used for an enum value.`);
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
		if (Object.prototype.hasOwnProperty.call(Ue, t.value)) return t;
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
		return this._options.noLocation !== !0 && (t.loc = new Le(e, this._lexer.lastToken, this._lexer.source)), t;
	}
	peek(e) {
		return this._lexer.token.kind === e;
	}
	expectToken(e) {
		let t = this._lexer.token;
		if (t.kind === e) return this.advanceLexer(), t;
		throw Ie(this._lexer.source, t.start, `Expected ${Bt(e)}, found ${zt(t)}.`);
	}
	expectOptionalToken(e) {
		return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
	}
	expectKeyword(e) {
		let t = this._lexer.token;
		if (t.kind === N.NAME && t.value === e) this.advanceLexer();
		else throw Ie(this._lexer.source, t.start, `Expected "${e}", found ${zt(t)}.`);
	}
	expectOptionalKeyword(e) {
		let t = this._lexer.token;
		return t.kind === N.NAME && t.value === e ? (this.advanceLexer(), !0) : !1;
	}
	unexpected(e) {
		let t = e ?? this._lexer.token;
		return Ie(this._lexer.source, t.start, `Unexpected ${zt(t)}.`);
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
		if (t.kind !== N.EOF && (++this._tokenCounter, e !== void 0 && this._tokenCounter > e)) throw Ie(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`);
	}
};
function zt(e) {
	let t = e.value;
	return Bt(e.kind) + (t == null ? "" : ` "${t}"`);
}
function Bt(e) {
	return $e(e) ? `"${e}"` : e;
}
//#endregion
//#region node_modules/graphql/language/printString.mjs
function Vt(e) {
	return `"${e.replace(Ht, Ut)}"`;
}
var Ht = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Ut(e) {
	return Wt[e.charCodeAt(0)];
}
var Wt = /* @__PURE__ */ "\\u0000.\\u0001.\\u0002.\\u0003.\\u0004.\\u0005.\\u0006.\\u0007.\\b.\\t.\\n.\\u000B.\\f.\\r.\\u000E.\\u000F.\\u0010.\\u0011.\\u0012.\\u0013.\\u0014.\\u0015.\\u0016.\\u0017.\\u0018.\\u0019.\\u001A.\\u001B.\\u001C.\\u001D.\\u001E.\\u001F...\\\"..........................................................\\\\...................................\\u007F.\\u0080.\\u0081.\\u0082.\\u0083.\\u0084.\\u0085.\\u0086.\\u0087.\\u0088.\\u0089.\\u008A.\\u008B.\\u008C.\\u008D.\\u008E.\\u008F.\\u0090.\\u0091.\\u0092.\\u0093.\\u0094.\\u0095.\\u0096.\\u0097.\\u0098.\\u0099.\\u009A.\\u009B.\\u009C.\\u009D.\\u009E.\\u009F".split("."), Gt = Object.freeze({});
function Kt(e, t, n = ze) {
	let r = /* @__PURE__ */ new Map();
	for (let e of Object.values(M)) r.set(e, qt(t, e));
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
			if (Ve(l) || Te(!1, `Invalid AST Node: ${Dt(l)}.`), h = (e ? r.get(l.kind)?.leave : r.get(l.kind)?.enter)?.call(t, l, u, d, f, p), h === Gt) break;
			if (h === !1) {
				if (!e) {
					f.pop();
					continue;
				}
			} else if (h !== void 0 && (c.push([u, h]), !e)) if (Ve(h)) l = h;
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
//#region node_modules/graphql/language/printer.mjs
function Jt(e) {
	return Kt(e, Xt);
}
var Yt = 80, Xt = {
	Name: { leave: (e) => e.value },
	Variable: { leave: (e) => "$" + e.name },
	Document: { leave: (e) => F(e.definitions, "\n\n") },
	OperationDefinition: { leave(e) {
		let t = $t(e.variableDefinitions) ? I("(\n", F(e.variableDefinitions, "\n"), "\n)") : I("(", F(e.variableDefinitions, ", "), ")"), n = I("", e.description, "\n") + F([
			e.operation,
			F([e.name, t]),
			F(e.directives, " ")
		], " ");
		return (n === "query" ? "" : n + " ") + e.selectionSet;
	} },
	VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: n, directives: r, description: i }) => I("", i, "\n") + e + ": " + t + I(" = ", n) + I(" ", F(r, " ")) },
	SelectionSet: { leave: ({ selections: e }) => Zt(e) },
	Field: { leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
		let a = I("", e, ": ") + t, o = a + I("(", F(n, ", "), ")");
		return o.length > Yt && (o = a + I("(\n", Qt(F(n, "\n")), "\n)")), F([
			o,
			F(r, " "),
			i
		], " ");
	} },
	Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
	FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + I(" ", F(t, " ")) },
	InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: n }) => F([
		"...",
		I("on ", e),
		F(t, " "),
		n
	], " ") },
	FragmentDefinition: { leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i, description: a }) => I("", a, "\n") + `fragment ${e}${I("(", F(n, ", "), ")")} on ${t} ${I("", F(r, " "), " ")}` + i },
	IntValue: { leave: ({ value: e }) => e },
	FloatValue: { leave: ({ value: e }) => e },
	StringValue: { leave: ({ value: e, block: t }) => t ? Ze(e) : Vt(e) },
	BooleanValue: { leave: ({ value: e }) => e ? "true" : "false" },
	NullValue: { leave: () => "null" },
	EnumValue: { leave: ({ value: e }) => e },
	ListValue: { leave: ({ values: e }) => "[" + F(e, ", ") + "]" },
	ObjectValue: { leave: ({ fields: e }) => "{" + F(e, ", ") + "}" },
	ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
	Directive: { leave: ({ name: e, arguments: t }) => "@" + e + I("(", F(t, ", "), ")") },
	NamedType: { leave: ({ name: e }) => e },
	ListType: { leave: ({ type: e }) => "[" + e + "]" },
	NonNullType: { leave: ({ type: e }) => e + "!" },
	SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: n }) => I("", e, "\n") + F([
		"schema",
		F(t, " "),
		Zt(n)
	], " ") },
	OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t },
	ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: n }) => I("", e, "\n") + F([
		"scalar",
		t,
		F(n, " ")
	], " ") },
	ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => I("", e, "\n") + F([
		"type",
		t,
		I("implements ", F(n, " & ")),
		F(r, " "),
		Zt(i)
	], " ") },
	FieldDefinition: { leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => I("", e, "\n") + t + ($t(n) ? I("(\n", Qt(F(n, "\n")), "\n)") : I("(", F(n, ", "), ")")) + ": " + r + I(" ", F(i, " ")) },
	InputValueDefinition: { leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => I("", e, "\n") + F([
		t + ": " + n,
		I("= ", r),
		F(i, " ")
	], " ") },
	InterfaceTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => I("", e, "\n") + F([
		"interface",
		t,
		I("implements ", F(n, " & ")),
		F(r, " "),
		Zt(i)
	], " ") },
	UnionTypeDefinition: { leave: ({ description: e, name: t, directives: n, types: r }) => I("", e, "\n") + F([
		"union",
		t,
		F(n, " "),
		I("= ", F(r, " | "))
	], " ") },
	EnumTypeDefinition: { leave: ({ description: e, name: t, directives: n, values: r }) => I("", e, "\n") + F([
		"enum",
		t,
		F(n, " "),
		Zt(r)
	], " ") },
	EnumValueDefinition: { leave: ({ description: e, name: t, directives: n }) => I("", e, "\n") + F([t, F(n, " ")], " ") },
	InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: n, fields: r }) => I("", e, "\n") + F([
		"input",
		t,
		F(n, " "),
		Zt(r)
	], " ") },
	DirectiveDefinition: { leave: ({ description: e, name: t, arguments: n, directives: r, repeatable: i, locations: a }) => I("", e, "\n") + "directive @" + t + ($t(n) ? I("(\n", Qt(F(n, "\n")), "\n)") : I("(", F(n, ", "), ")")) + I(" ", F(r, " ")) + (i ? " repeatable" : "") + " on " + F(a, " | ") },
	SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => F([
		"extend schema",
		F(e, " "),
		Zt(t)
	], " ") },
	ScalarTypeExtension: { leave: ({ name: e, directives: t }) => F([
		"extend scalar",
		e,
		F(t, " ")
	], " ") },
	ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => F([
		"extend type",
		e,
		I("implements ", F(t, " & ")),
		F(n, " "),
		Zt(r)
	], " ") },
	InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => F([
		"extend interface",
		e,
		I("implements ", F(t, " & ")),
		F(n, " "),
		Zt(r)
	], " ") },
	UnionTypeExtension: { leave: ({ name: e, directives: t, types: n }) => F([
		"extend union",
		e,
		F(t, " "),
		I("= ", F(n, " | "))
	], " ") },
	EnumTypeExtension: { leave: ({ name: e, directives: t, values: n }) => F([
		"extend enum",
		e,
		F(t, " "),
		Zt(n)
	], " ") },
	InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: n }) => F([
		"extend input",
		e,
		F(t, " "),
		Zt(n)
	], " ") },
	DirectiveExtension: { leave: ({ name: e, directives: t }) => F(["extend directive @" + e, F(t, " ")], " ") },
	TypeCoordinate: { leave: ({ name: e }) => e },
	MemberCoordinate: { leave: ({ name: e, memberName: t }) => F([e, I(".", t)]) },
	ArgumentCoordinate: { leave: ({ name: e, fieldName: t, argumentName: n }) => F([
		e,
		I(".", t),
		I("(", n, ":)")
	]) },
	DirectiveCoordinate: { leave: ({ name: e }) => F(["@", e]) },
	DirectiveArgumentCoordinate: { leave: ({ name: e, argumentName: t }) => F([
		"@",
		e,
		I("(", t, ":)")
	]) }
};
function F(e, t = "") {
	return e?.filter((e) => e).join(t) ?? "";
}
function Zt(e) {
	return I("{\n", Qt(F(e, "\n")), "\n}");
}
function I(e, t, n = "") {
	return t != null && t !== "" ? e + t + n : "";
}
function Qt(e) {
	return I("  ", e.replace(/\n/g, "\n  "));
}
function $t(e) {
	/* c8 ignore next */
	return e?.some((e) => e.includes("\n")) ?? !1;
}
//#endregion
//#region node_modules/graphql/language/predicates.mjs
function en(e) {
	return e.kind === M.FIELD || e.kind === M.FRAGMENT_SPREAD || e.kind === M.INLINE_FRAGMENT;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/directives.js
function tn(e, t) {
	var n = e.directives;
	return !n || !n.length ? !0 : on(n).every(function(e) {
		var n = e.directive, r = e.ifArgument, i = !1;
		return r.value.kind === "Variable" ? (i = t && t[r.value.name.value], j(i !== void 0, 105, n.name.value)) : i = r.value.value, n.name.value === "skip" ? !i : i;
	});
}
function nn(e, t, n) {
	var r = new Set(e), i = r.size;
	return Kt(t, { Directive: function(e) {
		if (r.delete(e.name.value) && (!n || !r.size)) return Gt;
	} }), n ? !r.size : r.size < i;
}
function rn(e) {
	return e && nn(["client", "export"], e, !0);
}
function an(e) {
	var t = e.name.value;
	return t === "skip" || t === "include";
}
function on(e) {
	var t = [];
	return e && e.length && e.forEach(function(e) {
		if (an(e)) {
			var n = e.arguments, r = e.name.value;
			j(n && n.length === 1, 106, r);
			var i = n[0];
			j(i.name && i.name.value === "if", 107, r);
			var a = i.value;
			j(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 108, r), t.push({
				directive: e,
				ifArgument: i
			});
		}
	}), t;
}
function sn(e) {
	var t = e.directives?.find(function(e) {
		return e.name.value === "unmask";
	});
	if (!t) return "mask";
	var n = t.arguments?.find(function(e) {
		return e.name.value === "mode";
	});
	return globalThis.__DEV__ !== !1 && n && (n.value.kind === M.VARIABLE ? globalThis.__DEV__ !== !1 && j.warn(109) : n.value.kind === M.STRING ? n.value.value !== "migrate" && globalThis.__DEV__ !== !1 && j.warn(111, n.value.value) : globalThis.__DEV__ !== !1 && j.warn(110)), n && "value" in n.value && n.value.value === "migrate" ? "migrate" : "unmask";
}
//#endregion
//#region node_modules/@wry/trie/lib/index.js
var cn = () => Object.create(null), { forEach: ln, slice: un } = Array.prototype, { hasOwnProperty: dn } = Object.prototype, fn = class e {
	constructor(e = !0, t = cn) {
		this.weakness = e, this.makeData = t;
	}
	lookup() {
		return this.lookupArray(arguments);
	}
	lookupArray(e) {
		let t = this;
		return ln.call(e, (e) => t = t.getChildTrie(e)), dn.call(t, "data") ? t.data : t.data = this.makeData(un.call(e));
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
			i && (t = i.removeArray(un.call(e, 1)), !i.data && !i.weak && !(i.strong && i.strong.size) && r.delete(n));
		} else t = this.data, delete this.data;
		return t;
	}
	getChildTrie(t) {
		let n = this.mapFor(t, !0), r = n.get(t);
		return r || n.set(t, r = new e(this.weakness, this.makeData)), r;
	}
	mapFor(e, t) {
		return this.weakness && pn(e) ? this.weak || (t ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (t ? this.strong = /* @__PURE__ */ new Map() : void 0);
	}
};
function pn(e) {
	switch (typeof e) {
		case "object": if (e === null) break;
		case "function": return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/canUse.js
var mn = pe(function() {
	return navigator.product;
}) == "ReactNative", hn = typeof WeakMap == "function" && !(mn && !global.HermesInternal), gn = typeof WeakSet == "function", _n = typeof Symbol == "function" && typeof Symbol.for == "function", vn = _n && Symbol.asyncIterator, yn = typeof pe(function() {
	return window.document.createElement;
}) == "function", bn = pe(function() {
	return navigator.userAgent.indexOf("jsdom") >= 0;
}) || !1, xn = (yn || mn) && !bn;
//#endregion
//#region node_modules/@apollo/client/utilities/common/objects.js
function L(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/fragments.js
function Sn(e, t) {
	var n = t, r = [];
	return e.definitions.forEach(function(e) {
		if (e.kind === "OperationDefinition") throw ye(112, e.operation, e.name ? ` named '${e.name.value}'` : "");
		e.kind === "FragmentDefinition" && r.push(e);
	}), n === void 0 && (j(r.length === 1, 113, r.length), n = r[0].name.value), O(O({}, e), { definitions: A([{
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
function Cn(e) {
	e === void 0 && (e = []);
	var t = {};
	return e.forEach(function(e) {
		t[e.name.value] = e;
	}), t;
}
function wn(e, t) {
	switch (e.kind) {
		case "InlineFragment": return e;
		case "FragmentSpread":
			var n = e.name.value;
			if (typeof t == "function") return t(n);
			var r = t && t[n];
			return j(r, 114, n), r || null;
		default: return null;
	}
}
function Tn(e) {
	var t = !0;
	return Kt(e, { FragmentSpread: function(e) {
		if (t = !!e.directives && e.directives.some(function(e) {
			return e.name.value === "unmask";
		}), !t) return Gt;
	} }), t;
}
//#endregion
//#region node_modules/@wry/caches/lib/strong.js
function En() {}
var Dn = class {
	constructor(e = Infinity, t = En) {
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
function On() {}
var kn = On, An = typeof WeakRef < "u" ? WeakRef : function(e) {
	return { deref: () => e };
}, jn = typeof WeakMap < "u" ? WeakMap : Map, Mn = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
	return {
		register: On,
		unregister: On
	};
}, Nn = 10024, Pn = class {
	constructor(e = Infinity, t = kn) {
		this.max = e, this.dispose = t, this.map = new jn(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
			let e = this.unfinalizedNodes.values();
			for (let t = 0; t < Nn; t++) {
				let t = e.next().value;
				if (!t) break;
				this.unfinalizedNodes.delete(t);
				let n = t.key;
				delete t.key, t.keyRef = new An(n), this.registry.register(n, t, t);
			}
			this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
		}, this.registry = new Mn(this.deleteNode.bind(this));
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
}, Fn = /* @__PURE__ */ new WeakSet();
function In(e) {
	e.size <= (e.max || -1) || Fn.has(e) || (Fn.add(e), setTimeout(function() {
		e.clean(), Fn.delete(e);
	}, 100));
}
var Ln = function(e, t) {
	var n = new Pn(e, t);
	return n.set = function(e, t) {
		var n = Pn.prototype.set.call(this, e, t);
		return In(this), n;
	}, n;
}, Rn = function(e, t) {
	var n = new Dn(e, t);
	return n.set = function(e, t) {
		var n = Dn.prototype.set.call(this, e, t);
		return In(this), n;
	}, n;
}, zn = O({}, me[Symbol.for("apollo.cacheSize")]), Bn = {};
function Vn(e, t) {
	Bn[e] = t;
}
var Hn = globalThis.__DEV__ === !1 ? void 0 : Kn, Un = globalThis.__DEV__ === !1 ? void 0 : Jn, Wn = globalThis.__DEV__ === !1 ? void 0 : qn;
function Gn() {
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
		return [t, zn[t] || n];
	}));
}
function Kn() {
	var e;
	if (globalThis.__DEV__ === !1) throw Error("only supported in development mode");
	return {
		limits: Gn(),
		sizes: O({
			print: Bn.print?.call(Bn),
			parser: Bn.parser?.call(Bn),
			canonicalStringify: Bn.canonicalStringify?.call(Bn),
			links: er(this.link),
			queryManager: {
				getDocumentInfo: this.queryManager.transformCache.size,
				documentTransforms: Qn(this.queryManager.documentTransform)
			}
		}, (e = this.cache).getMemoryInternals?.call(e))
	};
}
function qn() {
	return { cache: { fragmentQueryDocuments: Xn(this.getFragmentDoc) } };
}
function Jn() {
	var e = this.config.fragments;
	return O(O({}, qn.apply(this)), {
		addTypenameDocumentTransform: Qn(this.addTypenameTransform),
		inMemoryCache: {
			executeSelectionSet: Xn(this.storeReader.executeSelectionSet),
			executeSubSelectedArray: Xn(this.storeReader.executeSubSelectedArray),
			maybeBroadcastWatch: Xn(this.maybeBroadcastWatch)
		},
		fragmentRegistry: {
			findFragmentSpreads: Xn(e?.findFragmentSpreads),
			lookup: Xn(e?.lookup),
			transform: Xn(e?.transform)
		}
	});
}
function Yn(e) {
	return !!e && "dirtyKey" in e;
}
function Xn(e) {
	return Yn(e) ? e.size : void 0;
}
function Zn(e) {
	return e != null;
}
function Qn(e) {
	return $n(e).map(function(e) {
		return { cache: e };
	});
}
function $n(e) {
	return e ? A(A([Xn(e?.performWork)], $n(e?.left), !0), $n(e?.right), !0).filter(Zn) : [];
}
function er(e) {
	return e ? A(A([(e?.getMemoryInternals)?.call(e)], er(e?.left), !0), er(e?.right), !0).filter(Zn) : [];
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/canonicalStringify.js
var tr = Object.assign(function(e) {
	return JSON.stringify(e, rr);
}, { reset: function() {
	nr = new Rn(zn.canonicalStringify || 1e3);
} });
globalThis.__DEV__ !== !1 && Vn("canonicalStringify", function() {
	return nr.size;
});
var nr;
tr.reset();
function rr(e, t) {
	if (t && typeof t == "object") {
		var n = Object.getPrototypeOf(t);
		if (n === Object.prototype || n === null) {
			var r = Object.keys(t);
			if (r.every(ir)) return t;
			var i = JSON.stringify(r), a = nr.get(i);
			if (!a) {
				r.sort();
				var o = JSON.stringify(r);
				a = nr.get(o) || r, nr.set(i, a), nr.set(o, a);
			}
			var s = Object.create(n);
			return a.forEach(function(e) {
				s[e] = t[e];
			}), s;
		}
	}
	return t;
}
function ir(e, t, n) {
	return t === 0 || n[t - 1] <= e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/storeUtils.js
function ar(e) {
	return { __ref: String(e) };
}
function R(e) {
	return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function or(e) {
	return L(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function sr(e) {
	return e.kind === "StringValue";
}
function cr(e) {
	return e.kind === "BooleanValue";
}
function lr(e) {
	return e.kind === "IntValue";
}
function ur(e) {
	return e.kind === "FloatValue";
}
function dr(e) {
	return e.kind === "Variable";
}
function fr(e) {
	return e.kind === "ObjectValue";
}
function pr(e) {
	return e.kind === "ListValue";
}
function mr(e) {
	return e.kind === "EnumValue";
}
function hr(e) {
	return e.kind === "NullValue";
}
function gr(e, t, n, r) {
	if (lr(n) || ur(n)) e[t.value] = Number(n.value);
	else if (cr(n) || sr(n)) e[t.value] = n.value;
	else if (fr(n)) {
		var i = {};
		n.fields.map(function(e) {
			return gr(i, e.name, e.value, r);
		}), e[t.value] = i;
	} else if (dr(n)) {
		var a = (r || {})[n.name.value];
		e[t.value] = a;
	} else if (pr(n)) e[t.value] = n.values.map(function(e) {
		var n = {};
		return gr(n, t, e, r), n[t.value];
	});
	else if (mr(n)) e[t.value] = n.value;
	else if (hr(n)) e[t.value] = null;
	else throw ye(123, t.value, n.kind);
}
function _r(e, t) {
	var n = null;
	e.directives && (n = {}, e.directives.forEach(function(e) {
		n[e.name.value] = {}, e.arguments && e.arguments.forEach(function(r) {
			var i = r.name, a = r.value;
			return gr(n[e.name.value], i, a, t);
		});
	}));
	var r = null;
	return e.arguments && e.arguments.length && (r = {}, e.arguments.forEach(function(e) {
		var n = e.name, i = e.value;
		return gr(r, n, i, t);
	})), br(e.name.value, r, n);
}
var vr = [
	"connection",
	"include",
	"skip",
	"client",
	"rest",
	"export",
	"nonreactive"
], yr = tr, br = Object.assign(function(e, t, n) {
	if (t && n && n.connection && n.connection.key) if (n.connection.filter && n.connection.filter.length > 0) {
		var r = n.connection.filter ? n.connection.filter : [];
		r.sort();
		var i = {};
		return r.forEach(function(e) {
			i[e] = t[e];
		}), `${n.connection.key}(${yr(i)})`;
	} else return n.connection.key;
	var a = e;
	if (t) {
		var o = yr(t);
		a += `(${o})`;
	}
	return n && Object.keys(n).forEach(function(e) {
		vr.indexOf(e) === -1 && (n[e] && Object.keys(n[e]).length ? a += `@${e}(${yr(n[e])})` : a += `@${e}`);
	}), a;
}, { setStringify: function(e) {
	var t = yr;
	return yr = e, t;
} });
function xr(e, t) {
	if (e.arguments && e.arguments.length) {
		var n = {};
		return e.arguments.forEach(function(e) {
			var r = e.name, i = e.value;
			return gr(n, r, i, t);
		}), n;
	}
	return null;
}
function Sr(e) {
	return e.alias ? e.alias.value : e.name.value;
}
function Cr(e, t, n) {
	for (var r, i = 0, a = t.selections; i < a.length; i++) {
		var o = a[i];
		if (wr(o)) {
			if (o.name.value === "__typename") return e[Sr(o)];
		} else r ? r.push(o) : r = [o];
	}
	if (typeof e.__typename == "string") return e.__typename;
	if (r) for (var s = 0, c = r; s < c.length; s++) {
		var o = c[s], l = Cr(e, wn(o, n).selectionSet, n);
		if (typeof l == "string") return l;
	}
}
function wr(e) {
	return e.kind === "Field";
}
function Tr(e) {
	return e.kind === "InlineFragment";
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/getFromAST.js
function Er(e) {
	j(e && e.kind === "Document", 115);
	var t = e.definitions.filter(function(e) {
		return e.kind !== "FragmentDefinition";
	}).map(function(e) {
		if (e.kind !== "OperationDefinition") throw ye(116, e.kind);
		return e;
	});
	return j(t.length <= 1, 117, t.length), e;
}
function Dr(e) {
	return Er(e), e.definitions.filter(function(e) {
		return e.kind === "OperationDefinition";
	})[0];
}
function Or(e) {
	return e.definitions.filter(function(e) {
		return e.kind === "OperationDefinition" && !!e.name;
	}).map(function(e) {
		return e.name.value;
	})[0] || null;
}
function kr(e) {
	return e.definitions.filter(function(e) {
		return e.kind === "FragmentDefinition";
	});
}
function Ar(e) {
	var t = Dr(e);
	return j(t && t.operation === "query", 118), t;
}
function jr(e) {
	j(e.kind === "Document", 119), j(e.definitions.length <= 1, 120);
	var t = e.definitions[0];
	return j(t.kind === "FragmentDefinition", 121), t;
}
function Mr(e) {
	Er(e);
	for (var t, n = 0, r = e.definitions; n < r.length; n++) {
		var i = r[n];
		if (i.kind === "OperationDefinition") {
			var a = i.operation;
			if (a === "query" || a === "mutation" || a === "subscription") return i;
		}
		i.kind === "FragmentDefinition" && !t && (t = i);
	}
	if (t) return t;
	throw ye(122);
}
function Nr(e) {
	var t = Object.create(null), n = e && e.variableDefinitions;
	return n && n.length && n.forEach(function(e) {
		e.defaultValue && gr(t, e.variable.name, e.defaultValue);
	}), t;
}
//#endregion
//#region node_modules/@wry/context/lib/slot.js
var Pr = null, Fr = {}, Ir = 1, Lr = () => class {
	constructor() {
		this.id = [
			"slot",
			Ir++,
			Date.now(),
			Math.random().toString(36).slice(2)
		].join(":");
	}
	hasValue() {
		for (let e = Pr; e; e = e.parent) if (this.id in e.slots) {
			let t = e.slots[this.id];
			if (t === Fr) break;
			return e !== Pr && (Pr.slots[this.id] = t), !0;
		}
		return Pr && (Pr.slots[this.id] = Fr), !1;
	}
	getValue() {
		if (this.hasValue()) return Pr.slots[this.id];
	}
	withValue(e, t, n, r) {
		let i = {
			__proto__: null,
			[this.id]: e
		}, a = Pr;
		Pr = {
			parent: a,
			slots: i
		};
		try {
			return t.apply(r, n);
		} finally {
			Pr = a;
		}
	}
	static bind(e) {
		let t = Pr;
		return function() {
			let n = Pr;
			try {
				return Pr = t, e.apply(this, arguments);
			} finally {
				Pr = n;
			}
		};
	}
	static noContext(e, t, n) {
		if (Pr) {
			let r = Pr;
			try {
				return Pr = null, e.apply(n, t);
			} finally {
				Pr = r;
			}
		} else return e.apply(n, t);
	}
};
function Rr(e) {
	try {
		return e();
	} catch {}
}
var zr = "@wry/context:Slot", Br = Rr(() => globalThis) || Rr(() => global) || Object.create(null), Vr = Br[zr] || Array[zr] || (function(e) {
	try {
		Object.defineProperty(Br, zr, {
			value: e,
			enumerable: !1,
			writable: !1,
			configurable: !0
		});
	} finally {
		return e;
	}
})(Lr()), { bind: Hr, noContext: Ur } = Vr, Wr = new Vr(), { hasOwnProperty: Gr } = Object.prototype, Kr = Array.from || function(e) {
	let t = [];
	return e.forEach((e) => t.push(e)), t;
};
function qr(e) {
	let { unsubscribe: t } = e;
	typeof t == "function" && (e.unsubscribe = void 0, t());
}
//#endregion
//#region node_modules/optimism/lib/entry.js
var Jr = [], Yr = 100;
function Xr(e, t) {
	if (!e) throw Error(t || "assertion failure");
}
function Zr(e, t) {
	let n = e.length;
	return n > 0 && n === t.length && e[n - 1] === t[n - 1];
}
function Qr(e) {
	switch (e.length) {
		case 0: throw Error("unknown value");
		case 1: return e[0];
		case 2: throw e[1];
	}
}
function $r(e) {
	return e.slice(0);
}
var ei = class e {
	constructor(t) {
		this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count;
	}
	peek() {
		if (this.value.length === 1 && !ii(this)) return ti(this), this.value[0];
	}
	recompute(e) {
		return Xr(!this.recomputing, "already recomputing"), ti(this), ii(this) ? ni(this, e) : Qr(this.value);
	}
	setDirty() {
		this.dirty || (this.dirty = !0, oi(this), qr(this));
	}
	dispose() {
		this.setDirty(), fi(this), ci(this, (e, t) => {
			e.setDirty(), pi(e, this);
		});
	}
	forget() {
		this.dispose();
	}
	dependOn(e) {
		e.add(this), this.deps || (this.deps = Jr.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
	}
	forgetDeps() {
		this.deps && (Kr(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), Jr.push(this.deps), this.deps = null);
	}
};
ei.count = 0;
function ti(e) {
	let t = Wr.getValue();
	if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), ii(e) ? li(t, e) : ui(t, e), t;
}
function ni(e, t) {
	return fi(e), Wr.withValue(e, ri, [e, t]), mi(e, t) && ai(e), Qr(e.value);
}
function ri(e, t) {
	e.recomputing = !0;
	let { normalizeResult: n } = e, r;
	n && e.value.length === 1 && (r = $r(e.value)), e.value.length = 0;
	try {
		if (e.value[0] = e.fn.apply(null, t), n && r && !Zr(r, e.value)) try {
			e.value[0] = n(e.value[0], r[0]);
		} catch {}
	} catch (t) {
		e.value[1] = t;
	}
	e.recomputing = !1;
}
function ii(e) {
	return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function ai(e) {
	e.dirty = !1, !ii(e) && si(e);
}
function oi(e) {
	ci(e, li);
}
function si(e) {
	ci(e, ui);
}
function ci(e, t) {
	let n = e.parents.size;
	if (n) {
		let r = Kr(e.parents);
		for (let i = 0; i < n; ++i) t(r[i], e);
	}
}
function li(e, t) {
	Xr(e.childValues.has(t)), Xr(ii(t));
	let n = !ii(e);
	if (!e.dirtyChildren) e.dirtyChildren = Jr.pop() || /* @__PURE__ */ new Set();
	else if (e.dirtyChildren.has(t)) return;
	e.dirtyChildren.add(t), n && oi(e);
}
function ui(e, t) {
	Xr(e.childValues.has(t)), Xr(!ii(t));
	let n = e.childValues.get(t);
	n.length === 0 ? e.childValues.set(t, $r(t.value)) : Zr(n, t.value) || e.setDirty(), di(e, t), !ii(e) && si(e);
}
function di(e, t) {
	let n = e.dirtyChildren;
	n && (n.delete(t), n.size === 0 && (Jr.length < Yr && Jr.push(n), e.dirtyChildren = null));
}
function fi(e) {
	e.childValues.size > 0 && e.childValues.forEach((t, n) => {
		pi(e, n);
	}), e.forgetDeps(), Xr(e.dirtyChildren === null);
}
function pi(e, t) {
	t.parents.delete(e), e.childValues.delete(t), di(e, t);
}
function mi(e, t) {
	if (typeof e.subscribe == "function") try {
		qr(e), e.unsubscribe = e.subscribe.apply(null, t);
	} catch {
		return e.setDirty(), !1;
	}
	return !0;
}
//#endregion
//#region node_modules/optimism/lib/dep.js
var hi = {
	setDirty: !0,
	dispose: !0,
	forget: !0
};
function gi(e) {
	let t = /* @__PURE__ */ new Map(), n = e && e.subscribe;
	function r(e) {
		let r = Wr.getValue();
		if (r) {
			let i = t.get(e);
			i || t.set(e, i = /* @__PURE__ */ new Set()), r.dependOn(i), typeof n == "function" && (qr(i), i.unsubscribe = n(e));
		}
	}
	return r.dirty = function(e, n) {
		let r = t.get(e);
		if (r) {
			let i = n && Gr.call(hi, n) ? n : "setDirty";
			Kr(r).forEach((e) => e[i]()), t.delete(e), qr(r);
		}
	}, r;
}
//#endregion
//#region node_modules/optimism/lib/index.js
var _i;
function vi(...e) {
	return (_i || (_i = new fn(typeof WeakMap == "function"))).lookupArray(e);
}
var yi = /* @__PURE__ */ new Set();
function bi(e, { max: t = 2 ** 16, keyArgs: n, makeCacheKey: r = vi, normalizeResult: i, subscribe: a, cache: o = Dn } = Object.create(null)) {
	let s = typeof o == "function" ? new o(t, (e) => e.dispose()) : o, c = function() {
		let t = r.apply(null, n ? n.apply(null, arguments) : arguments);
		if (t === void 0) return e.apply(null, arguments);
		let o = s.get(t);
		o || (s.set(t, o = new ei(e)), o.normalizeResult = i, o.subscribe = a, o.forget = () => s.delete(t));
		let c = o.recompute(Array.prototype.slice.call(arguments));
		return s.set(t, o), yi.add(s), Wr.hasValue() || (yi.forEach((e) => e.clean()), yi.clear()), c;
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
function xi(e) {
	return e;
}
var Si = function() {
	function e(e, t) {
		t === void 0 && (t = Object.create(null)), this.resultCache = gn ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = t.cache !== !1, this.resetCache();
	}
	return e.prototype.getCacheKey = function(e) {
		return [e];
	}, e.identity = function() {
		return new e(xi, { cache: !1 });
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
			var n = new fn(hn);
			this.performWork = bi(e.prototype.performWork.bind(this), {
				makeCacheKey: function(e) {
					var r = t.getCacheKey(e);
					if (r) return j(Array.isArray(r), 104), n.lookupArray(r);
				},
				max: zn["documentTransform.cache"],
				cache: Pn
			});
		}
	}, e.prototype.performWork = function(e) {
		return Er(e), this.transform(e);
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
}(), Ci, wi = Object.assign(function(e) {
	var t = Ci.get(e);
	return t || (t = Jt(e), Ci.set(e, t)), t;
}, { reset: function() {
	Ci = new Ln(zn.print || 2e3);
} });
wi.reset(), globalThis.__DEV__ !== !1 && Vn("print", function() {
	return Ci ? Ci.size : 0;
});
//#endregion
//#region node_modules/@apollo/client/utilities/common/arrays.js
var z = Array.isArray;
function Ti(e) {
	return Array.isArray(e) && e.length > 0;
}
//#endregion
//#region node_modules/@apollo/client/utilities/graphql/transform.js
var Ei = {
	kind: M.FIELD,
	name: {
		kind: M.NAME,
		value: "__typename"
	}
};
function Di(e, t) {
	return !e || e.selectionSet.selections.every(function(e) {
		return e.kind === M.FRAGMENT_SPREAD && Di(t[e.name.value], t);
	});
}
function Oi(e) {
	return Di(Dr(e) || jr(e), Cn(kr(e))) ? null : e;
}
function ki(e) {
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
function Ai(e) {
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
function ji(e, t) {
	Er(t);
	for (var n = Ai(""), r = Ai(""), i = function(e) {
		for (var t = 0, i = void 0; t < e.length && (i = e[t]); ++t) if (!z(i)) {
			if (i.kind === M.OPERATION_DEFINITION) return n(i.name && i.name.value);
			if (i.kind === M.FRAGMENT_DEFINITION) return r(i.name.value);
		}
		return globalThis.__DEV__ !== !1 && j.error(124), null;
	}, a = 0, o = t.definitions.length - 1; o >= 0; --o) t.definitions[o].kind === M.OPERATION_DEFINITION && ++a;
	var s = ki(e), c = function(e) {
		return Ti(e) && e.map(s).some(function(e) {
			return e && e.remove;
		});
	}, l = /* @__PURE__ */ new Map(), u = !1, d = { enter: function(e) {
		if (c(e.directives)) return u = !0, null;
	} }, f = Kt(t, {
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
	return Oi(Kt(f, {
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
var Mi = Object.assign(function(e) {
	return Kt(e, { SelectionSet: { enter: function(e, t, n) {
		if (!(n && n.kind === M.OPERATION_DEFINITION)) {
			var r = e.selections;
			if (r && !r.some(function(e) {
				return wr(e) && (e.name.value === "__typename" || e.name.value.lastIndexOf("__", 0) === 0);
			})) {
				var i = n;
				if (!(wr(i) && i.directives && i.directives.some(function(e) {
					return e.name.value === "export";
				}))) return O(O({}, e), { selections: A(A([], r, !0), [Ei], !1) });
			}
		}
	} } });
}, { added: function(e) {
	return e === Ei;
} });
function Ni(e) {
	return Mr(e).operation === "query" ? e : Kt(e, { OperationDefinition: { enter: function(e) {
		return O(O({}, e), { operation: "query" });
	} } });
}
function Pi(e) {
	return Er(e), ji([{
		test: function(e) {
			return e.name.value === "client";
		},
		remove: !0
	}], e);
}
function Fi(e) {
	return Er(e), Kt(e, { FragmentSpread: function(e) {
		if (!e.directives?.some(function(e) {
			return e.name.value === "unmask";
		})) return O(O({}, e), { directives: A(A([], e.directives || [], !0), [{
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
var Ii = Object.prototype.hasOwnProperty;
function Li() {
	return Ri([...arguments]);
}
function Ri(e) {
	var t = e[0] || {}, n = e.length;
	if (n > 1) for (var r = new Bi(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
	return t;
}
var zi = function(e, t, n) {
	return this.merge(e[n], t[n]);
}, Bi = function() {
	function e(e) {
		e === void 0 && (e = zi), this.reconciler = e, this.isObject = L, this.pastCopies = /* @__PURE__ */ new Set();
	}
	return e.prototype.merge = function(e, t) {
		for (var n = this, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		return L(t) && L(e) ? (Object.keys(t).forEach(function(i) {
			if (Ii.call(e, i)) {
				var a = e[i];
				if (t[i] !== a) {
					var o = n.reconciler.apply(n, A([
						e,
						t,
						i
					], r, !1));
					o !== a && (e = n.shallowCopyForMerge(e), e[i] = o);
				}
			} else e = n.shallowCopyForMerge(e), e[i] = t[i];
		}), e) : t;
	}, e.prototype.shallowCopyForMerge = function(e) {
		return L(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : O({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
	}, e;
}();
//#endregion
//#region node_modules/zen-observable-ts/module.js
function Vi(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = Hi(e)) || t && e && typeof e.length == "number") {
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
function Hi(e, t) {
	if (e) {
		if (typeof e == "string") return Ui(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ui(e, t);
	}
}
function Ui(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Wi(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function Gi(e, t, n) {
	return t && Wi(e.prototype, t), n && Wi(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Ki = function() {
	return typeof Symbol == "function";
}, qi = function(e) {
	return Ki() && !!Symbol[e];
}, Ji = function(e) {
	return qi(e) ? Symbol[e] : "@@" + e;
};
Ki() && !qi("observable") && (Symbol.observable = Symbol("observable"));
var Yi = Ji("iterator"), Xi = Ji("observable"), Zi = Ji("species");
function Qi(e, t) {
	var n = e[t];
	if (n != null) {
		if (typeof n != "function") throw TypeError(n + " is not a function");
		return n;
	}
}
function $i(e) {
	var t = e.constructor;
	return t !== void 0 && (t = t[Zi], t === null && (t = void 0)), t === void 0 ? B : t;
}
function ea(e) {
	return e instanceof B;
}
function ta(e) {
	ta.log ? ta.log(e) : setTimeout(function() {
		throw e;
	});
}
function na(e) {
	Promise.resolve().then(function() {
		try {
			e();
		} catch (e) {
			ta(e);
		}
	});
}
function ra(e) {
	var t = e._cleanup;
	if (t !== void 0 && (e._cleanup = void 0, t)) try {
		if (typeof t == "function") t();
		else {
			var n = Qi(t, "unsubscribe");
			n && n.call(t);
		}
	} catch (e) {
		ta(e);
	}
}
function ia(e) {
	e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function aa(e) {
	var t = e._queue;
	if (t) {
		e._queue = void 0, e._state = "ready";
		for (var n = 0; n < t.length && (oa(e, t[n].type, t[n].value), e._state !== "closed"); ++n);
	}
}
function oa(e, t, n) {
	e._state = "running";
	var r = e._observer;
	try {
		var i = Qi(r, t);
		switch (t) {
			case "next":
				i && i.call(r, n);
				break;
			case "error":
				if (ia(e), i) i.call(r, n);
				else throw n;
				break;
			case "complete":
				ia(e), i && i.call(r);
				break;
		}
	} catch (e) {
		ta(e);
	}
	e._state === "closed" ? ra(e) : e._state === "running" && (e._state = "ready");
}
function sa(e, t, n) {
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
			}], na(function() {
				return aa(e);
			});
			return;
		}
		oa(e, t, n);
	}
}
var ca = /* @__PURE__ */ function() {
	function e(e, t) {
		this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
		var n = new la(this);
		try {
			this._cleanup = t.call(void 0, n);
		} catch (e) {
			n.error(e);
		}
		this._state === "initializing" && (this._state = "ready");
	}
	var t = e.prototype;
	return t.unsubscribe = function() {
		this._state !== "closed" && (ia(this), ra(this));
	}, Gi(e, [{
		key: "closed",
		get: function() {
			return this._state === "closed";
		}
	}]), e;
}(), la = /* @__PURE__ */ function() {
	function e(e) {
		this._subscription = e;
	}
	var t = e.prototype;
	return t.next = function(e) {
		sa(this._subscription, "next", e);
	}, t.error = function(e) {
		sa(this._subscription, "error", e);
	}, t.complete = function() {
		sa(this._subscription, "complete");
	}, Gi(e, [{
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
		}), new ca(e, this._subscriber);
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
		return new ($i(this))(function(n) {
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
		return new ($i(this))(function(n) {
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
		var n = $i(this), r = arguments.length > 1, i = !1, a = arguments[1];
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
		var e = this, t = [...arguments], n = $i(this);
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
		var n = $i(this);
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
	}, t[Xi] = function() {
		return this;
	}, e.from = function(t) {
		var n = typeof this == "function" ? this : e;
		if (t == null) throw TypeError(t + " is not an object");
		var r = Qi(t, Xi);
		if (r) {
			var i = r.call(t);
			if (Object(i) !== i) throw TypeError(i + " is not an object");
			return ea(i) && i.constructor === n ? i : new n(function(e) {
				return i.subscribe(e);
			});
		}
		if (qi("iterator") && (r = Qi(t, Yi), r)) return new n(function(e) {
			na(function() {
				if (!e.closed) {
					for (var n = Vi(r.call(t)), i; !(i = n()).done;) {
						var a = i.value;
						if (e.next(a), e.closed) return;
					}
					e.complete();
				}
			});
		});
		if (Array.isArray(t)) return new n(function(e) {
			na(function() {
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
			na(function() {
				if (!e.closed) {
					for (var n = 0; n < t.length; ++n) if (e.next(t[n]), e.closed) return;
					e.complete();
				}
			});
		});
	}, Gi(e, null, [{
		key: Zi,
		get: function() {
			return this;
		}
	}]), e;
}();
Ki() && Object.defineProperty(B, Symbol("extensions"), {
	value: {
		symbol: Xi,
		hostReportError: ta
	},
	configurable: !0
});
//#endregion
//#region node_modules/@apollo/client/utilities/promises/preventUnhandledRejection.js
function ua(e) {
	return e.catch(function() {}), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/cloneDeep.js
var da = Object.prototype.toString;
function fa(e) {
	return pa(e);
}
function pa(e, t) {
	switch (da.call(e)) {
		case "[object Array]":
			if (t = t || /* @__PURE__ */ new Map(), t.has(e)) return t.get(e);
			var n = e.slice(0);
			return t.set(e, n), n.forEach(function(e, r) {
				n[r] = pa(e, t);
			}), n;
		case "[object Object]":
			if (t = t || /* @__PURE__ */ new Map(), t.has(e)) return t.get(e);
			var r = Object.create(Object.getPrototypeOf(e));
			return t.set(e, r), Object.keys(e).forEach(function(n) {
				r[n] = pa(e[n], t);
			}), r;
		default: return e;
	}
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
function ma(e) {
	var t = new Set([e]);
	return t.forEach(function(e) {
		L(e) && ha(e) === e && Object.getOwnPropertyNames(e).forEach(function(n) {
			L(e[n]) && t.add(e[n]);
		});
	}), e;
}
function ha(e) {
	if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e)) try {
		Object.freeze(e);
	} catch (e) {
		if (e instanceof TypeError) return null;
		throw e;
	}
	return e;
}
function ga(e) {
	return globalThis.__DEV__ !== !1 && ma(e), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/observables/iteration.js
function _a(e, t, n) {
	var r = [];
	e.forEach(function(e) {
		return e[t] && r.push(e);
	}), r.forEach(function(e) {
		return e[t](n);
	});
}
//#endregion
//#region node_modules/@apollo/client/utilities/observables/asyncMap.js
function va(e, t, n) {
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
function ya(e) {
	function t(t) {
		Object.defineProperty(e, t, { value: B });
	}
	return _n && Symbol.species && t(Symbol.species), t("@@species"), e;
}
//#endregion
//#region node_modules/@apollo/client/utilities/observables/Concast.js
function ba(e) {
	return e && typeof e.then == "function";
}
var xa = function(e) {
	te(t, e);
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
				n.sub !== null && (n.latest = ["next", e], n.notify("next", e), _a(n.observers, "next", e));
			},
			error: function(e) {
				var t = n.sub;
				t !== null && (t && setTimeout(function() {
					return t.unsubscribe();
				}), n.sub = null, n.latest = ["error", e], n.reject(e), n.notify("error", e), _a(n.observers, "error", e));
			},
			complete: function() {
				var e = n, t = e.sub, r = e.sources, i = r === void 0 ? [] : r;
				if (t !== null) {
					var a = i.shift();
					a ? ba(a) ? a.then(function(e) {
						return n.sub = e.subscribe(n.handlers);
					}, n.handlers.error) : n.sub = a.subscribe(n.handlers) : (t && setTimeout(function() {
						return t.unsubscribe();
					}), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), _a(n.observers, "complete"));
				}
			}
		}, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(e) {
			n.reject(e), n.sources = [], n.handlers.error(e);
		}, n.promise.catch(function(e) {}), typeof t == "function" && (t = [new B(t)]), ba(t) ? t.then(function(e) {
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
ya(xa);
//#endregion
//#region node_modules/@apollo/client/utilities/common/incrementalResult.js
function Sa(e) {
	return "incremental" in e;
}
function Ca(e) {
	return "hasNext" in e && "data" in e;
}
function wa(e) {
	return Sa(e) || Ca(e);
}
function Ta(e) {
	return L(e) && "payload" in e;
}
function Ea(e, t) {
	var n = e, r = new Bi();
	return Sa(t) && Ti(t.incremental) && t.incremental.forEach(function(e) {
		for (var t = e.data, i = e.path, a = i.length - 1; a >= 0; --a) {
			var o = i[a], s = isNaN(+o) ? {} : [];
			s[o] = t, t = s;
		}
		n = r.merge(n, t);
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/errorHandling.js
function Da(e) {
	return Ti(Oa(e));
}
function Oa(e) {
	var t = Ti(e.errors) ? e.errors.slice(0) : [];
	return Sa(e) && Ti(e.incremental) && e.incremental.forEach(function(e) {
		e.errors && t.push.apply(t, e.errors);
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/utilities/common/compact.js
function ka() {
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
function Aa(e, t) {
	return ka(e, t, t.variables && { variables: ka(O(O({}, e && e.variables), t.variables)) });
}
//#endregion
//#region node_modules/@apollo/client/utilities/deprecation/index.js
var ja = Symbol.for("apollo.deprecations"), Ma = Symbol.for("apollo.deprecations.slot"), Na = me, Pa = Na[Ma] ?? (Na[Ma] = new Vr());
function Fa(e) {
	return Na[ja] || (Pa.getValue() || []).includes(e);
}
function Ia(e) {
	var t = [...arguments].slice(1);
	return Pa.withValue.apply(Pa, A([Array.isArray(e) ? e : [e]], t, !1));
}
function V(e, t, n, r) {
	r === void 0 && (r = "Please remove this option."), La(t, function() {
		t in e && globalThis.__DEV__ !== !1 && j.warn(103, n, t, r);
	});
}
function La(e, t) {
	Fa(e) || t();
}
//#endregion
//#region node_modules/@apollo/client/react/context/ApolloContext.js
var H = /* @__PURE__ */ e(we(), 1), Ra = _n ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function za() {
	j("createContext" in H, 69);
	var e = H.createContext[Ra];
	return e || (Object.defineProperty(H.createContext, Ra, {
		value: e = H.createContext({}),
		enumerable: !1,
		writable: !1,
		configurable: !0
	}), e.displayName = "ApolloContext"), e;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useApolloClient.js
function Ba(e) {
	var t = H.useContext(za()), n = e || t.client;
	return j(!!n, 78), n;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useSyncExternalStore.js
var Va = !1, Ha = H.useSyncExternalStore || (function(e, t, n) {
	var r = t();
	globalThis.__DEV__ !== !1 && !Va && r !== t() && (Va = !0, globalThis.__DEV__ !== !1 && j.error(91));
	var i = H.useState({ inst: {
		value: r,
		getSnapshot: t
	} }), a = i[0].inst, o = i[1];
	return xn ? H.useLayoutEffect(function() {
		Object.assign(a, {
			value: r,
			getSnapshot: t
		}), Ua(a) && o({ inst: a });
	}, [
		e,
		r,
		t
	]) : Object.assign(a, {
		value: r,
		getSnapshot: t
	}), H.useEffect(function() {
		return Ua(a) && o({ inst: a }), e(function() {
			Ua(a) && o({ inst: a });
		});
	}, [e]), r;
});
function Ua(e) {
	var t = e.value, n = e.getSnapshot;
	try {
		return t !== n();
	} catch {
		return !0;
	}
}
//#endregion
//#region node_modules/@wry/equality/lib/index.js
var { toString: Wa, hasOwnProperty: Ga } = Object.prototype, Ka = Function.prototype.toString, qa = /* @__PURE__ */ new Map();
function U(e, t) {
	try {
		return Ja(e, t);
	} finally {
		qa.clear();
	}
}
function Ja(e, t) {
	if (e === t) return !0;
	let n = Wa.call(e);
	if (n !== Wa.call(t)) return !1;
	switch (n) {
		case "[object Array]": if (e.length !== t.length) return !1;
		case "[object Object]": {
			if ($a(e, t)) return !0;
			let n = Ya(e), r = Ya(t), i = n.length;
			if (i !== r.length) return !1;
			for (let e = 0; e < i; ++e) if (!Ga.call(t, n[e])) return !1;
			for (let r = 0; r < i; ++r) {
				let i = n[r];
				if (!Ja(e[i], t[i])) return !1;
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
			if ($a(e, t)) return !0;
			let r = e.entries(), i = n === "[object Map]";
			for (;;) {
				let e = r.next();
				if (e.done) break;
				let [n, a] = e.value;
				if (!t.has(n) || i && !Ja(a, t.get(n))) return !1;
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
			let n = Ka.call(e);
			return n === Ka.call(t) ? !Qa(n, Za) : !1;
		}
	}
	return !1;
}
function Ya(e) {
	return Object.keys(e).filter(Xa, e);
}
function Xa(e) {
	return this[e] !== void 0;
}
var Za = "{ [native code] }";
function Qa(e, t) {
	let n = e.length - t.length;
	return n >= 0 && e.indexOf(t, n) === n;
}
function $a(e, t) {
	let n = qa.get(e);
	if (n) {
		if (n.has(t)) return !0;
	} else qa.set(e, n = /* @__PURE__ */ new Set());
	return n.add(t), !1;
}
//#endregion
//#region node_modules/@apollo/client/errors/index.js
var eo = Symbol();
function to(e) {
	return e.extensions ? Array.isArray(e.extensions[eo]) : !1;
}
function no(e) {
	return e.hasOwnProperty("graphQLErrors");
}
var ro = function(e) {
	var t = A(A(A([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
	return e.networkError && t.push(e.networkError), t.map(function(e) {
		return L(e) && e.message || "Error message not found.";
	}).join("\n");
}, io = function(e) {
	te(t, e);
	function t(n) {
		var r = n.graphQLErrors, i = n.protocolErrors, a = n.clientErrors, o = n.networkError, s = n.errorMessage, c = n.extraInfo, l = e.call(this, s) || this;
		return l.name = "ApolloError", l.graphQLErrors = r || [], l.protocolErrors = i || [], l.clientErrors = a || [], l.networkError = o || null, l.message = s || ro(l), l.extraInfo = c, l.cause = A(A(A([o], r || [], !0), i || [], !0), a || [], !0).find(function(e) {
			return !!e;
		}) || null, l.__proto__ = t.prototype, l;
	}
	return t;
}(Error);
//#endregion
//#region node_modules/@apollo/client/link/utils/fromError.js
function ao(e) {
	return new B(function(t) {
		t.error(e);
	});
}
//#endregion
//#region node_modules/@apollo/client/link/utils/throwServerError.js
var oo = function(e, t, n) {
	var r = Error(n);
	throw r.name = "ServerError", r.response = e, r.statusCode = e.status, r.result = t, r;
};
//#endregion
//#region node_modules/@apollo/client/link/utils/validateOperation.js
function so(e) {
	for (var t = [
		"query",
		"operationName",
		"variables",
		"extensions",
		"context"
	], n = 0, r = Object.keys(e); n < r.length; n++) {
		var i = r[n];
		if (t.indexOf(i) < 0) throw ye(58, i);
	}
	return e;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/createOperation.js
function co(e, t) {
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
function lo(e) {
	var t = {
		variables: e.variables || {},
		extensions: e.extensions || {},
		operationName: e.operationName,
		query: e.query
	};
	return t.operationName || (t.operationName = typeof t.query == "string" ? "" : Or(t.query) || void 0), t;
}
//#endregion
//#region node_modules/@apollo/client/link/utils/filterOperationVariables.js
function uo(e, t) {
	var n = O({}, e), r = new Set(Object.keys(e));
	return Kt(t, { Variable: function(e, t, n) {
		n && n.kind !== "VariableDefinition" && r.delete(e.name.value);
	} }), r.forEach(function(e) {
		delete n[e];
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/link/core/ApolloLink.js
function fo(e, t) {
	return t ? t(e) : B.of();
}
function po(e) {
	return typeof e == "function" ? new ho(e) : e;
}
function mo(e) {
	return e.request.length <= 1;
}
var ho = function() {
	function e(e) {
		e && (this.request = e);
	}
	return e.empty = function() {
		return new e(function() {
			return B.of();
		});
	}, e.from = function(t) {
		return t.length === 0 ? e.empty() : t.map(po).reduce(function(e, t) {
			return e.concat(t);
		});
	}, e.split = function(t, n, r) {
		var i = po(n), a = po(r || new e(fo)), o = mo(i) && mo(a) ? new e(function(e) {
			return t(e) ? i.request(e) || B.of() : a.request(e) || B.of();
		}) : new e(function(e, n) {
			return t(e) ? i.request(e, n) || B.of() : a.request(e, n) || B.of();
		});
		return Object.assign(o, {
			left: i,
			right: a
		});
	}, e.execute = function(e, t) {
		return e.request(co(t.context, lo(so(t)))) || B.of();
	}, e.concat = function(t, n) {
		var r = po(t);
		if (mo(r)) return globalThis.__DEV__ !== !1 && j.warn(47, r), r;
		var i = po(n), a = mo(i) ? new e(function(e) {
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
		return this.concat(e.split(t, n, r || new e(fo)));
	}, e.prototype.concat = function(t) {
		return e.concat(this, t);
	}, e.prototype.request = function(e, t) {
		throw ye(48);
	}, e.prototype.onError = function(e, t) {
		if (globalThis.__DEV__ !== !1 && La("onError", function() {
			globalThis.__DEV__ !== !1 && j.warn(49);
		}), t && t.error) return t.error(e), !1;
		throw e;
	}, e.prototype.setOnError = function(e) {
		return globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && j.warn(50), this.onError = e, this;
	}, e;
}(), go = ho.from, _o = ho.execute;
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/async.js
function vo(e) {
	var t, n = e[Symbol.asyncIterator]();
	return t = { next: function() {
		return n.next();
	} }, t[Symbol.asyncIterator] = function() {
		return this;
	}, t;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/nodeStream.js
function yo(e) {
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
	return vn && (u[Symbol.asyncIterator] = function() {
		return this;
	}), u;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/promise.js
function bo(e) {
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
	return vn && (n[Symbol.asyncIterator] = function() {
		return this;
	}), n;
}
//#endregion
//#region node_modules/@apollo/client/link/http/iterators/reader.js
function xo(e) {
	var t = { next: function() {
		return e.read();
	} };
	return vn && (t[Symbol.asyncIterator] = function() {
		return this;
	}), t;
}
//#endregion
//#region node_modules/@apollo/client/link/http/responseIterator.js
function So(e) {
	return !!e.body;
}
function Co(e) {
	return !!e.getReader;
}
function wo(e) {
	return !!(vn && e[Symbol.asyncIterator]);
}
function To(e) {
	return !!e.stream;
}
function Eo(e) {
	return !!e.arrayBuffer;
}
function Do(e) {
	return !!e.pipe;
}
function Oo(e) {
	var t = e;
	if (So(e) && (t = e.body), wo(t)) return vo(t);
	if (Co(t)) return xo(t.getReader());
	if (To(t)) return xo(t.stream().getReader());
	if (Eo(t)) return bo(t.arrayBuffer());
	if (Do(t)) return yo(t);
	throw Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
//#endregion
//#region node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js
var ko = Object.prototype.hasOwnProperty;
function Ao(e, t) {
	return re(this, void 0, void 0, function() {
		var n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
		return k(this, function(T) {
			switch (T.label) {
				case 0:
					if (TextDecoder === void 0) throw Error("TextDecoder must be defined in the environment: please import a polyfill.");
					n = new TextDecoder("utf-8"), r = e.headers?.get("content-type"), i = "boundary=", a = r?.includes(i) ? r?.substring(r?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--${a}`, s = "", c = Oo(e), l = !0, T.label = 1;
				case 1: return l ? [4, c.next()] : [3, 3];
				case 2:
					for (u = T.sent(), d = u.value, f = u.done, p = typeof d == "string" ? d : n.decode(d), m = s.length - o.length + 1, l = !f, s += p, h = s.indexOf(o, m); h > -1;) {
						if (g = void 0, C = [s.slice(0, h), s.slice(h + o.length)], g = C[0], s = C[1], _ = g.indexOf("\r\n\r\n"), v = jo(g.slice(0, _)), y = v["content-type"], y && y.toLowerCase().indexOf("application/json") === -1) throw Error("Unsupported patch content type: application/json is required.");
						if (b = g.slice(_), b) {
							if (x = Mo(e, b), Object.keys(x).length > 1 || "data" in x || "incremental" in x || "errors" in x || "payload" in x) if (Ta(x)) {
								if (S = {}, "payload" in x) {
									if (Object.keys(x).length === 1 && x.payload === null) return [2];
									S = O({}, x.payload);
								}
								"errors" in x && (S = O(O({}, S), { extensions: O(O({}, "extensions" in S ? S.extensions : null), (w = {}, w[eo] = x.errors, w)) })), t(S);
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
function jo(e) {
	var t = {};
	return e.split("\n").forEach(function(e) {
		var n = e.indexOf(":");
		if (n > -1) {
			var r = e.slice(0, n).trim().toLowerCase();
			t[r] = e.slice(n + 1).trim();
		}
	}), t;
}
function Mo(e, t) {
	e.status >= 300 && oo(e, function() {
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
function No(e, t) {
	e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e);
}
function Po(e) {
	return function(t) {
		return t.text().then(function(e) {
			return Mo(t, e);
		}).then(function(n) {
			return !Array.isArray(n) && !ko.call(n, "data") && !ko.call(n, "errors") && oo(t, n, `Server response was missing for query '${Array.isArray(e) ? e.map(function(e) {
				return e.operationName;
			}) : e.operationName}'.`), n;
		});
	};
}
//#endregion
//#region node_modules/@apollo/client/link/http/serializeFetchParameter.js
var Fo = function(e, t) {
	var n;
	try {
		n = JSON.stringify(e);
	} catch (e) {
		var r = ye(54, t, e.message);
		throw r.parseError = e, r;
	}
	return n;
}, Io = {
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
}, Lo = function(e, t) {
	return t(e);
};
function Ro(e, t) {
	var n = [...arguments].slice(2), r = {}, i = {};
	n.forEach(function(e) {
		r = O(O(O({}, r), e.options), { headers: O(O({}, r.headers), e.headers) }), e.credentials && (r.credentials = e.credentials), i = O(O({}, i), e.http);
	}), r.headers && (r.headers = zo(r.headers, i.preserveHeaderCase));
	var a = e.operationName, o = e.extensions, s = e.variables, c = e.query, l = {
		operationName: a,
		variables: s
	};
	return i.includeExtensions && (l.extensions = o), i.includeQuery && (l.query = t(c, wi)), {
		options: r,
		body: l
	};
}
function zo(e, t) {
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
var Bo = function(e) {
	if (!e && typeof fetch > "u") throw ye(51);
}, Vo = function(e, t) {
	return e.getContext().uri || (typeof t == "function" ? t(e) : t || "/graphql");
};
//#endregion
//#region node_modules/@apollo/client/link/http/rewriteURIForGET.js
function Ho(e, t) {
	var n = [], r = function(e, t) {
		n.push(`${e}=${encodeURIComponent(t)}`);
	};
	if ("query" in t && r("query", t.query), t.operationName && r("operationName", t.operationName), t.variables) {
		var i = void 0;
		try {
			i = Fo(t.variables, "Variables map");
		} catch (e) {
			return { parseError: e };
		}
		r("variables", i);
	}
	if (t.extensions) {
		var a = void 0;
		try {
			a = Fo(t.extensions, "Extensions map");
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
var Uo = pe(function() {
	return fetch;
}), Wo = function(e) {
	e === void 0 && (e = {});
	var t = e.uri, n = t === void 0 ? "/graphql" : t, r = e.fetch, i = e.print, a = i === void 0 ? Lo : i, o = e.includeExtensions, s = e.preserveHeaderCase, c = e.useGETForQueries, l = e.includeUnusedVariables, u = l === void 0 ? !1 : l, d = ne(e, [
		"uri",
		"fetch",
		"print",
		"includeExtensions",
		"preserveHeaderCase",
		"useGETForQueries",
		"includeUnusedVariables"
	]);
	globalThis.__DEV__ !== !1 && Bo(r || Uo);
	var f = {
		http: {
			includeExtensions: o,
			preserveHeaderCase: s
		},
		options: d.fetchOptions,
		credentials: d.credentials,
		headers: d.headers
	};
	return new ho(function(e) {
		var t = Vo(e, n), i = e.getContext(), o = {};
		if (i.clientAwareness) {
			var s = i.clientAwareness, l = s.name, d = s.version;
			l && (o["apollographql-client-name"] = l), d && (o["apollographql-client-version"] = d);
		}
		var p = O(O({}, o), i.headers), m = {
			http: i.http,
			options: i.fetchOptions,
			credentials: i.credentials,
			headers: p
		};
		if (nn(["client"], e.query)) {
			globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && j.warn(52);
			var h = Pi(e.query);
			if (!h) return ao(/* @__PURE__ */ Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
			e.query = h;
		}
		var g = Ro(e, a, Io, f, m), _ = g.options, v = g.body;
		v.variables && !u && (v.variables = uo(v.variables, e.query));
		var y;
		!_.signal && typeof AbortController < "u" && (y = new AbortController(), _.signal = y.signal);
		var b = function(e) {
			return e.kind === "OperationDefinition" && e.operation === "mutation";
		}, x = function(e) {
			return e.kind === "OperationDefinition" && e.operation === "subscription";
		}(Mr(e.query)), S = nn(["defer"], e.query);
		if (c && !e.query.definitions.some(b) && (_.method = "GET"), S || x) {
			_.headers = _.headers || {};
			var C = "multipart/mixed;";
			x && S && globalThis.__DEV__ !== !1 && j.warn(53), x ? C += "boundary=graphql;subscriptionSpec=1.0,application/json" : S && (C += "deferSpec=20220824,application/json"), _.headers.accept = C;
		}
		if (_.method === "GET") {
			var w = Ho(t, v), T = w.newURI, E = w.parseError;
			if (E) return ao(E);
			t = T;
		} else try {
			_.body = Fo(v, "Payload");
		} catch (e) {
			return ao(e);
		}
		return new B(function(n) {
			var i = r || pe(function() {
				return fetch;
			}) || Uo, a = n.next.bind(n);
			return i(t, _).then(function(t) {
				e.setContext({ response: t });
				var n = t.headers?.get("content-type");
				return n !== null && /^multipart\/mixed/i.test(n) ? Ao(t, a) : Po(e)(t).then(a);
			}).then(function() {
				y = void 0, n.complete();
			}).catch(function(e) {
				y = void 0, No(e, n);
			}), function() {
				y && y.abort();
			};
		});
	});
}, Go = function(e) {
	te(t, e);
	function t(t) {
		t === void 0 && (t = {});
		var n = e.call(this, Wo(t).request) || this;
		return n.options = t, n;
	}
	return t;
}(ho);
//#endregion
//#region node_modules/@apollo/client/core/equalByQuery.js
function Ko(e, t, n, r) {
	var i = t.data, a = ne(t, ["data"]), o = n.data;
	return U(a, ne(n, ["data"])) && qo(Mr(e).selectionSet, i, o, {
		fragmentMap: Cn(kr(e)),
		variables: r
	});
}
function qo(e, t, n, r) {
	if (t === n) return !0;
	var i = /* @__PURE__ */ new Set();
	return e.selections.every(function(e) {
		if (i.has(e) || (i.add(e), !tn(e, r.variables)) || Jo(e)) return !0;
		if (wr(e)) {
			var a = Sr(e), o = t && t[a], s = n && n[a], c = e.selectionSet;
			if (!c) return U(o, s);
			var l = Array.isArray(o), u = Array.isArray(s);
			if (l !== u) return !1;
			if (l && u) {
				var d = o.length;
				if (s.length !== d) return !1;
				for (var f = 0; f < d; ++f) if (!qo(c, o[f], s[f], r)) return !1;
				return !0;
			}
			return qo(c, o, s, r);
		} else {
			var p = wn(e, r.fragmentMap);
			if (p) return Jo(p) ? !0 : qo(p.selectionSet, t, n, r);
		}
	});
}
function Jo(e) {
	return !!e.directives && e.directives.some(Yo);
}
function Yo(e) {
	return e.name.value === "nonreactive";
}
//#endregion
//#region node_modules/@apollo/client/masking/utils.js
var Xo = hn ? WeakMap : Map, Zo = gn ? WeakSet : Set, Qo = new Vr(), $o = !1;
function es() {
	$o || ($o = !0, globalThis.__DEV__ !== !1 && j.warn(64));
}
//#endregion
//#region node_modules/@apollo/client/masking/maskDefinition.js
function ts(e, t, n) {
	return Qo.withValue(!0, function() {
		var r = rs(e, t, n, !1);
		return Object.isFrozen(e) && ga(r), r;
	});
}
function ns(e, t) {
	if (t.has(e)) return t.get(e);
	var n = Array.isArray(e) ? [] : Object.create(null);
	return t.set(e, n), n;
}
function rs(e, t, n, r, i) {
	var a = n.knownChanged, o = ns(e, n.mutableTargets);
	if (Array.isArray(e)) {
		for (var s = 0, c = Array.from(e.entries()); s < c.length; s++) {
			var l = c[s], u = l[0], d = l[1];
			if (d === null) {
				o[u] = null;
				continue;
			}
			var f = rs(d, t, n, r, globalThis.__DEV__ === !1 ? void 0 : `${i || ""}[${u}]`);
			a.has(f) && a.add(o), o[u] = f;
		}
		return a.has(o) ? o : e;
	}
	for (var p = 0, m = t.selections; p < m.length; p++) {
		var h = m[p], g = void 0;
		if (r && a.add(o), h.kind === M.FIELD) {
			var _ = Sr(h), v = h.selectionSet;
			if (g = o[_] || e[_], g === void 0) continue;
			if (v && g !== null) {
				var f = rs(e[_], v, n, r, globalThis.__DEV__ === !1 ? void 0 : `${i || ""}.${_}`);
				a.has(f) && (g = f);
			}
			globalThis.__DEV__ === !1 && (o[_] = g), globalThis.__DEV__ !== !1 && (r && _ !== "__typename" && !Object.getOwnPropertyDescriptor(o, _)?.value ? Object.defineProperty(o, _, is(_, g, i || "", n.operationName, n.operationType)) : (delete o[_], o[_] = g));
		}
		if (h.kind === M.INLINE_FRAGMENT && (!h.typeCondition || n.cache.fragmentMatches(h, e.__typename)) && (g = rs(e, h.selectionSet, n, r, i)), h.kind === M.FRAGMENT_SPREAD) {
			var y = h.name.value, b = n.fragmentMap[y] || (n.fragmentMap[y] = n.cache.lookupFragment(y));
			j(b, 59, y);
			var x = sn(h);
			x !== "mask" && (g = rs(e, b.selectionSet, n, x === "migrate", i));
		}
		a.has(g) && a.add(o);
	}
	return "__typename" in e && !("__typename" in o) && (o.__typename = e.__typename), Object.keys(o).length !== Object.keys(e).length && a.add(o), a.has(o) ? o : e;
}
function is(e, t, n, r, i) {
	var a = function() {
		return Qo.getValue() ? t : (globalThis.__DEV__ !== !1 && j.warn(60, r ? `${i} '${r}'` : `anonymous ${i}`, `${n}.${e}`.replace(/^\./, "")), a = function() {
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
function as(e, t, n, r) {
	if (!n.fragmentMatches) return globalThis.__DEV__ !== !1 && es(), e;
	var i = t.definitions.filter(function(e) {
		return e.kind === M.FRAGMENT_DEFINITION;
	});
	r === void 0 && (j(i.length === 1, 61, i.length), r = i[0].name.value);
	var a = i.find(function(e) {
		return e.name.value === r;
	});
	return j(!!a, 62, r), e == null || U(e, {}) ? e : ts(e, a.selectionSet, {
		operationType: "fragment",
		operationName: a.name.value,
		fragmentMap: Cn(kr(t)),
		cache: n,
		mutableTargets: new Xo(),
		knownChanged: new Zo()
	});
}
//#endregion
//#region node_modules/@apollo/client/masking/maskOperation.js
function os(e, t, n) {
	if (!n.fragmentMatches) return globalThis.__DEV__ !== !1 && es(), e;
	var r = Dr(t);
	return j(r, 63), e == null ? e : ts(e, r.selectionSet, {
		operationType: r.operation,
		operationName: r.name?.value,
		fragmentMap: Cn(kr(t)),
		cache: n,
		mutableTargets: new Xo(),
		knownChanged: new Zo()
	});
}
//#endregion
//#region node_modules/@apollo/client/cache/core/cache.js
var ss = function() {
	function e() {
		this.assumeImmutableResults = !1, this.getFragmentDoc = bi(Sn, {
			max: zn["cache.fragmentQueryDocuments"] || 1e3,
			cache: Pn
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
		return t === void 0 && (t = !!e.optimistic), globalThis.__DEV__ !== !1 && V(e, "canonizeResults", "cache.readQuery"), Ia("canonizeResults", function() {
			return n.read(O(O({}, e), {
				rootId: e.id || "ROOT_QUERY",
				optimistic: t
			}));
		});
	}, e.prototype.watchFragment = function(e) {
		var t = this, n = e.fragment, r = e.fragmentName, i = e.from, a = e.optimistic, o = a === void 0 ? !0 : a, s = ne(e, [
			"fragment",
			"fragmentName",
			"from",
			"optimistic"
		]), c = this.getFragmentDoc(n, r), l = i === void 0 || typeof i == "string" ? i : this.identify(i), u = !!e[Symbol.for("apollo.dataMasking")];
		if (globalThis.__DEV__ !== !1) {
			var d = r || jr(n).name.value;
			l || globalThis.__DEV__ !== !1 && j.warn(1, d);
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
					var o = u ? as(a.result, n, t, r) : a.result;
					if (!(p && Ko(c, { data: p.result }, { data: o }, e.variables))) {
						var s = {
							data: o,
							complete: !!a.complete
						};
						a.missing && (s.missing = Ri(a.missing.map(function(e) {
							return e.missing;
						}))), p = O(O({}, a), { result: o }), i.next(s);
					}
				}
			}));
		});
	}, e.prototype.readFragment = function(e, t) {
		var n = this;
		return t === void 0 && (t = !!e.optimistic), globalThis.__DEV__ !== !1 && V(e, "canonizeResults", "cache.readFragment"), Ia("canonizeResults", function() {
			return n.read(O(O({}, e), {
				query: n.getFragmentDoc(e.fragment, e.fragmentName),
				rootId: e.id,
				optimistic: t
			}));
		});
	}, e.prototype.writeQuery = function(e) {
		var t = e.id, n = e.data, r = ne(e, ["id", "data"]);
		return this.write(Object.assign(r, {
			dataId: t || "ROOT_QUERY",
			result: n
		}));
	}, e.prototype.writeFragment = function(e) {
		var t = e.id, n = e.data, r = e.fragment, i = e.fragmentName, a = ne(e, [
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
			var r = Ia("canonizeResults", function() {
				return n.readQuery(e);
			}), i = t(r);
			return i == null ? r : (n.writeQuery(O(O({}, e), { data: i })), i);
		} });
	}, e.prototype.updateFragment = function(e, t) {
		return globalThis.__DEV__ !== !1 && V(e, "canonizeResults", "cache.updateFragment"), this.batch({ update: function(n) {
			var r = Ia("canonizeResults", function() {
				return n.readFragment(e);
			}), i = t(r);
			return i == null ? r : (n.writeFragment(O(O({}, e), { data: i })), i);
		} });
	}, e;
}();
globalThis.__DEV__ !== !1 && (ss.prototype.getMemoryInternals = Wn);
//#endregion
//#region node_modules/@apollo/client/cache/core/types/common.js
var cs = function(e) {
	te(t, e);
	function t(n, r, i, a) {
		var o, s = e.call(this, n) || this;
		if (s.message = n, s.path = r, s.query = i, s.variables = a, Array.isArray(s.path)) {
			s.missing = s.message;
			for (var c = s.path.length - 1; c >= 0; --c) s.missing = (o = {}, o[s.path[c]] = s.missing, o);
		} else s.missing = s.path;
		return s.__proto__ = t.prototype, s;
	}
	return t;
}(Error), ls = Object.prototype.hasOwnProperty;
function us(e) {
	return e == null;
}
function ds(e, t) {
	var n = e.__typename, r = e.id, i = e._id;
	if (typeof n == "string" && (t && (t.keyObject = us(r) ? us(i) ? void 0 : { _id: i } : { id: r }), us(r) && !us(i) && (r = i), !us(r))) return `${n}:${typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r)}`;
}
var fs = {
	dataIdFromObject: ds,
	addTypename: !0,
	resultCaching: !0,
	canonizeResults: !1
};
function ps(e) {
	return ka(fs, e);
}
function ms(e) {
	var t = e.canonizeResults;
	return t === void 0 ? fs.canonizeResults : t;
}
function hs(e, t) {
	return R(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var gs = /^[_a-z][_0-9a-z]*/i;
function _s(e) {
	var t = e.match(gs);
	return t ? t[0] : e;
}
function vs(e, t, n) {
	return L(t) ? z(t) ? t.every(function(t) {
		return vs(e, t, n);
	}) : e.selections.every(function(e) {
		if (wr(e) && tn(e, n)) {
			var r = Sr(e);
			return ls.call(t, r) && (!e.selectionSet || vs(e.selectionSet, t[r], n));
		}
		return !0;
	}) : !1;
}
function ys(e) {
	return L(e) && !R(e) && !z(e);
}
function bs() {
	return new Bi();
}
function xs(e, t) {
	var n = Cn(kr(e));
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
var Ss = Object.create(null), Cs = function() {
	return Ss;
}, ws = Object.create(null), Ts = function() {
	function e(e, t) {
		var n = this;
		this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
			return ga(R(e) ? n.get(e.__ref, t) : e && e[t]);
		}, this.canRead = function(e) {
			return R(e) ? n.has(e.__ref) : typeof e == "object";
		}, this.toReference = function(e, t) {
			if (typeof e == "string") return ar(e);
			if (R(e)) return e;
			var r = n.policies.identify(e)[0];
			if (r) {
				var i = ar(r);
				return t && n.merge(r, e), i;
			}
		};
	}
	return e.prototype.toObject = function() {
		return O({}, this.data);
	}, e.prototype.has = function(e) {
		return this.lookup(e, !0) !== void 0;
	}, e.prototype.get = function(e, t) {
		if (this.group.depend(e, t), ls.call(this.data, e)) {
			var n = this.data[e];
			if (n && ls.call(n, t)) return n[t];
		}
		if (t === "__typename" && ls.call(this.policies.rootTypenamesById, e)) return this.policies.rootTypenamesById[e];
		if (this instanceof ks) return this.parent.get(e, t);
	}, e.prototype.lookup = function(e, t) {
		if (t && this.group.depend(e, "__exists"), ls.call(this.data, e)) return this.data[e];
		if (this instanceof ks) return this.parent.lookup(e, t);
		if (this.policies.rootTypenamesById[e]) return Object.create(null);
	}, e.prototype.merge = function(e, t) {
		var n = this, r;
		R(e) && (e = e.__ref), R(t) && (t = t.__ref);
		var i = typeof e == "string" ? this.lookup(r = e) : e, a = typeof t == "string" ? this.lookup(r = t) : t;
		if (a) {
			j(typeof r == "string", 2);
			var o = new Bi(js).merge(i, a);
			if (this.data[r] = o, o !== i && (delete this.refs[r], this.group.caching)) {
				var s = Object.create(null);
				i || (s.__exists = 1), Object.keys(a).forEach(function(e) {
					if (!i || i[e] !== o[e]) {
						s[e] = 1;
						var t = _s(e);
						t !== e && !n.policies.hasKeyArgs(o.__typename, t) && (s[t] = 1), o[e] === void 0 && !(n instanceof ks) && delete o[e];
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
				DELETE: Ss,
				INVALIDATE: ws,
				isReference: R,
				toReference: this.toReference,
				canRead: this.canRead,
				readField: function(t, r) {
					return n.policies.readField(typeof t == "string" ? {
						fieldName: t,
						from: r || ar(e)
					} : t, { store: n });
				}
			};
			if (Object.keys(r).forEach(function(c) {
				var l = _s(c), u = r[c];
				if (u !== void 0) {
					var d = typeof t == "function" ? t : t[c] || t[l];
					if (d) {
						var f = d === Cs ? Ss : d(ga(u), O(O({}, s), {
							fieldName: l,
							storeFieldName: c,
							storage: n.getStorage(e, c)
						}));
						if (f === ws) n.group.dirty(e, c);
						else if (f === Ss && (f = void 0), f !== u && (i[c] = f, a = !0, u = f, globalThis.__DEV__ !== !1)) {
							var p = function(e) {
								if (n.lookup(e.__ref) === void 0) return globalThis.__DEV__ !== !1 && j.warn(3, e), !0;
							};
							if (R(f)) p(f);
							else if (Array.isArray(f)) for (var m = !1, h = void 0, g = 0, _ = f; g < _.length; g++) {
								var v = _[g];
								if (R(v)) {
									if (m = !0, p(v)) break;
								} else typeof v == "object" && v && n.policies.identify(v)[0] && (h = v);
								if (m && h !== void 0) {
									globalThis.__DEV__ !== !1 && j.warn(4, h);
									break;
								}
							}
						}
					}
					u !== void 0 && (o = !1);
				}
			}), a) return this.merge(e, i), o && (this instanceof ks ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
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
			return this.modify(e, o ? (r = {}, r[o] = Cs, r) : Cs);
		}
		return !1;
	}, e.prototype.evict = function(e, t) {
		var n = !1;
		return e.id && (ls.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof ks && this !== t && (n = this.parent.evict(e, t) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n;
	}, e.prototype.clear = function() {
		this.replace(null);
	}, e.prototype.extract = function() {
		var e = this, t = this.toObject(), n = [];
		return this.getRootIdSet().forEach(function(t) {
			ls.call(e.policies.rootTypenamesById, t) || n.push(t);
		}), n.length && (t.__META = { extraRootIds: n.sort() }), t;
	}, e.prototype.replace = function(e) {
		var t = this;
		if (Object.keys(this.data).forEach(function(n) {
			e && ls.call(e, n) || t.delete(n);
		}), e) {
			var n = e.__META, r = ne(e, ["__META"]);
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
		return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof ks ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
	}, e.prototype.gc = function() {
		var e = this, t = this.getRootIdSet(), n = this.toObject();
		t.forEach(function(r) {
			ls.call(n, r) && (Object.keys(e.findChildRefIds(r)).forEach(t.add, t), delete n[r]);
		});
		var r = Object.keys(n);
		if (r.length) {
			for (var i = this; i instanceof ks;) i = i.parent;
			r.forEach(function(e) {
				return i.delete(e);
			});
		}
		return r;
	}, e.prototype.findChildRefIds = function(e) {
		if (!ls.call(this.refs, e)) {
			var t = this.refs[e] = Object.create(null), n = this.data[e];
			if (!n) return t;
			var r = new Set([n]);
			r.forEach(function(e) {
				R(e) && (t[e.__ref] = !0), L(e) && Object.keys(e).forEach(function(t) {
					var n = e[t];
					L(n) && r.add(n);
				});
			});
		}
		return this.refs[e];
	}, e.prototype.makeCacheKey = function() {
		return this.group.keyMaker.lookupArray(arguments);
	}, e;
}(), Es = function() {
	function e(e, t) {
		t === void 0 && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching();
	}
	return e.prototype.resetCaching = function() {
		this.d = this.caching ? gi() : null, this.keyMaker = new fn(hn);
	}, e.prototype.depend = function(e, t) {
		if (this.d) {
			this.d(Ds(e, t));
			var n = _s(t);
			n !== t && this.d(Ds(e, n)), this.parent && this.parent.depend(e, t);
		}
	}, e.prototype.dirty = function(e, t) {
		this.d && this.d.dirty(Ds(e, t), t === "__exists" ? "forget" : "setDirty");
	}, e;
}();
function Ds(e, t) {
	return t + "#" + e;
}
function Os(e, t) {
	Ms(e) && e.group.depend(t, "__exists");
}
(function(e) {
	e.Root = function(e) {
		te(t, e);
		function t(t) {
			var n = t.policies, r = t.resultCaching, i = r === void 0 ? !0 : r, a = t.seed, o = e.call(this, n, new Es(i)) || this;
			return o.stump = new As(o), o.storageTrie = new fn(hn), a && o.replace(a), o;
		}
		return t.prototype.addLayer = function(e, t) {
			return this.stump.addLayer(e, t);
		}, t.prototype.removeLayer = function() {
			return this;
		}, t.prototype.getStorage = function() {
			return this.storageTrie.lookupArray(arguments);
		}, t;
	}(e);
})(Ts || (Ts = {}));
var ks = function(e) {
	te(t, e);
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
		return O(O({}, this.parent.toObject()), this.data);
	}, t.prototype.findChildRefIds = function(t) {
		var n = this.parent.findChildRefIds(t);
		return ls.call(this.data, t) ? O(O({}, n), e.prototype.findChildRefIds.call(this, t)) : n;
	}, t.prototype.getStorage = function() {
		for (var e = this.parent; e.parent;) e = e.parent;
		return e.getStorage.apply(e, arguments);
	}, t;
}(Ts), As = function(e) {
	te(t, e);
	function t(t) {
		return e.call(this, "EntityStore.Stump", t, function() {}, new Es(t.group.caching, t.group)) || this;
	}
	return t.prototype.removeLayer = function() {
		return this;
	}, t.prototype.merge = function(e, t) {
		return this.parent.merge(e, t);
	}, t;
}(ks);
function js(e, t, n) {
	var r = e[n], i = t[n];
	return U(r, i) ? r : i;
}
function Ms(e) {
	return !!(e instanceof Ts && e.group.caching);
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/object-canon.js
function Ns(e) {
	return L(e) ? z(e) ? e.slice(0) : O({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Ps = function() {
	function e() {
		this.known = new (gn ? WeakSet : Set)(), this.pool = new fn(hn), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
	}
	return e.prototype.isKnown = function(e) {
		return L(e) && this.known.has(e);
	}, e.prototype.pass = function(e) {
		if (L(e)) {
			var t = Ns(e);
			return this.passes.set(t, e), t;
		}
		return e;
	}, e.prototype.admit = function(e) {
		var t = this;
		if (L(e)) {
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
function Fs(e) {
	return [
		e.selectionSet,
		e.objectOrReference,
		e.context,
		e.context.canonizeResults
	];
}
var Is = function() {
	function e(e) {
		var t = this;
		this.knownResults = new (hn ? WeakMap : Map)(), this.config = ka(e, {
			addTypename: e.addTypename !== !1,
			canonizeResults: ms(e)
		}), this.canon = e.canon || new Ps(), this.executeSelectionSet = bi(function(e) {
			var n, r = e.context.canonizeResults, i = Fs(e);
			i[3] = !r;
			var a = (n = t.executeSelectionSet).peek.apply(n, i);
			return a ? r ? O(O({}, a), { result: t.canon.admit(a.result) }) : a : (Os(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e));
		}, {
			max: this.config.resultCacheMaxSize || zn["inMemoryCache.executeSelectionSet"] || 5e4,
			keyArgs: Fs,
			makeCacheKey: function(e, t, n, r) {
				if (Ms(n.store)) return n.store.makeCacheKey(e, R(t) ? t.__ref : t, n.varString, r);
			}
		}), this.executeSubSelectedArray = bi(function(e) {
			return Os(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e);
		}, {
			max: this.config.resultCacheMaxSize || zn["inMemoryCache.executeSubSelectedArray"] || 1e4,
			makeCacheKey: function(e) {
				var t = e.field, n = e.array, r = e.context;
				if (Ms(r.store)) return r.store.makeCacheKey(t, n, r.varString);
			}
		});
	}
	return e.prototype.resetCanon = function() {
		this.canon = new Ps();
	}, e.prototype.diffQueryAgainstStore = function(e) {
		var t = e.store, n = e.query, r = e.rootId, i = r === void 0 ? "ROOT_QUERY" : r, a = e.variables, o = e.returnPartialData, s = o === void 0 ? !0 : o, c = e.canonizeResults, l = c === void 0 ? this.config.canonizeResults : c, u = this.config.cache.policies;
		a = O(O({}, Nr(Ar(n))), a);
		var d = ar(i), f = this.executeSelectionSet({
			selectionSet: Mr(n).selectionSet,
			objectOrReference: d,
			enclosingRef: d,
			context: O({
				store: t,
				query: n,
				policies: u,
				variables: a,
				varString: tr(a),
				canonizeResults: l
			}, xs(n, this.config.fragments))
		}), p;
		if (f.missing && (p = [new cs(Ls(f.missing), f.missing, n, a)], !s)) throw p[0];
		return {
			result: f.result,
			complete: !p,
			missing: p
		};
	}, e.prototype.isFresh = function(e, t, n, r) {
		if (Ms(r.store) && this.knownResults.get(e) === n) {
			var i = this.executeSelectionSet.peek(n, t, r, this.canon.isKnown(e));
			if (i && e === i.result) return !0;
		}
		return !1;
	}, e.prototype.execSelectionSetImpl = function(e) {
		var t = this, n = e.selectionSet, r = e.objectOrReference, i = e.enclosingRef, a = e.context;
		if (R(r) && !a.policies.rootTypenamesById[r.__ref] && !a.store.has(r.__ref)) return {
			result: this.canon.empty,
			missing: `Dangling reference to missing ${r.__ref} object`
		};
		var o = a.variables, s = a.policies, c = a.store.getFieldValue(r, "__typename"), l = [], u, d = new Bi();
		this.config.addTypename && typeof c == "string" && !s.rootIdsByTypename[c] && l.push({ __typename: c });
		function f(e, t) {
			var n;
			return e.missing && (u = d.merge(u, (n = {}, n[t] = e.missing, n))), e.result;
		}
		var p = new Set(n.selections);
		p.forEach(function(e) {
			var n, m;
			if (tn(e, o)) if (wr(e)) {
				var h = s.readField({
					fieldName: e.name.value,
					field: e,
					variables: a.variables,
					from: r
				}, a), g = Sr(e);
				h === void 0 ? Mi.added(e) || (u = d.merge(u, (n = {}, n[g] = `Can't find field '${e.name.value}' on ${R(r) ? r.__ref + " object" : "object " + JSON.stringify(r, null, 2)}`, n))) : z(h) ? h.length > 0 && (h = f(t.executeSubSelectedArray({
					field: e,
					array: h,
					enclosingRef: i,
					context: a
				}), g)) : e.selectionSet ? h != null && (h = f(t.executeSelectionSet({
					selectionSet: e.selectionSet,
					objectOrReference: h,
					enclosingRef: R(h) ? h : i,
					context: a
				}), g)) : a.canonizeResults && (h = t.canon.pass(h)), h !== void 0 && l.push((m = {}, m[g] = h, m));
			} else {
				var _ = wn(e, a.lookupFragment);
				if (!_ && e.kind === M.FRAGMENT_SPREAD) throw ye(10, e.name.value);
				_ && s.fragmentMatches(_, c) && _.selectionSet.selections.forEach(p.add, p);
			}
		});
		var m = {
			result: Ri(l),
			missing: u
		}, h = a.canonizeResults ? this.canon.admit(m) : ga(m);
		return h.result && this.knownResults.set(h.result, n), h;
	}, e.prototype.execSubSelectedArrayImpl = function(e) {
		var t = this, n = e.field, r = e.array, i = e.enclosingRef, a = e.context, o, s = new Bi();
		function c(e, t) {
			var n;
			return e.missing && (o = s.merge(o, (n = {}, n[t] = e.missing, n))), e.result;
		}
		return n.selectionSet && (r = r.filter(a.store.canRead)), r = r.map(function(e, r) {
			return e === null ? null : z(e) ? c(t.executeSubSelectedArray({
				field: n,
				array: e,
				enclosingRef: i,
				context: a
			}), r) : n.selectionSet ? c(t.executeSelectionSet({
				selectionSet: n.selectionSet,
				objectOrReference: e,
				enclosingRef: R(e) ? e : i,
				context: a
			}), r) : (globalThis.__DEV__ !== !1 && Rs(a.store, n, e), e);
		}), {
			result: a.canonizeResults ? this.canon.admit(r) : r,
			missing: o
		};
	}, e;
}();
function Ls(e) {
	try {
		JSON.stringify(e, function(e, t) {
			if (typeof t == "string") throw t;
			return t;
		});
	} catch (e) {
		return e;
	}
}
function Rs(e, t, n) {
	if (!t.selectionSet) {
		var r = new Set([n]);
		r.forEach(function(n) {
			L(n) && (j(!R(n), 11, hs(e, n), t.name.value), Object.values(n).forEach(r.add, r));
		});
	}
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/reactiveVars.js
var zs = new Vr(), Bs = /* @__PURE__ */ new WeakMap();
function Vs(e) {
	var t = Bs.get(e);
	return t || Bs.set(e, t = {
		vars: /* @__PURE__ */ new Set(),
		dep: gi()
	}), t;
}
function Hs(e) {
	Vs(e).vars.forEach(function(t) {
		return t.forgetCache(e);
	});
}
function Us(e) {
	Vs(e).vars.forEach(function(t) {
		return t.attachCache(e);
	});
}
function Ws(e) {
	var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = function(a) {
		if (arguments.length > 0) {
			if (e !== a) {
				e = a, t.forEach(function(e) {
					Vs(e).dep.dirty(r), Gs(e);
				});
				var o = Array.from(n);
				n.clear(), o.forEach(function(t) {
					return t(e);
				});
			}
		} else {
			var s = zs.getValue();
			s && (i(s), Vs(s).dep(r));
		}
		return e;
	};
	r.onNextChange = function(e) {
		return n.add(e), function() {
			n.delete(e);
		};
	};
	var i = r.attachCache = function(e) {
		return t.add(e), Vs(e).vars.add(r), r;
	};
	return r.forgetCache = function(e) {
		return t.delete(e);
	}, r;
}
function Gs(e) {
	e.broadcastWatches && e.broadcastWatches();
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/key-extractor.js
var Ks = Object.create(null);
function qs(e) {
	var t = JSON.stringify(e);
	return Ks[t] || (Ks[t] = Object.create(null));
}
function Js(e) {
	var t = qs(e);
	return t.keyFieldsFn || (t.keyFieldsFn = function(t, n) {
		var r = function(e, t) {
			return n.readField(t, e);
		}, i = n.keyObject = Xs(e, function(e) {
			var i = $s(n.storeObject, e, r);
			return i === void 0 && t !== n.storeObject && ls.call(t, e[0]) && (i = $s(t, e, Qs)), j(i !== void 0, 5, e.join("."), t), i;
		});
		return `${n.typename}:${JSON.stringify(i)}`;
	});
}
function Ys(e) {
	var t = qs(e);
	return t.keyArgsFn || (t.keyArgsFn = function(t, n) {
		var r = n.field, i = n.variables, a = n.fieldName, o = Xs(e, function(e) {
			var n = e[0], a = n.charAt(0);
			if (a === "@") {
				if (r && Ti(r.directives)) {
					var o = n.slice(1), s = r.directives.find(function(e) {
						return e.name.value === o;
					}), c = s && xr(s, i);
					return c && $s(c, e.slice(1));
				}
				return;
			}
			if (a === "$") {
				var l = n.slice(1);
				if (i && ls.call(i, l)) {
					var u = e.slice(0);
					return u[0] = l, $s(i, u);
				}
				return;
			}
			if (t) return $s(t, e);
		}), s = JSON.stringify(o);
		return (t || s !== "{}") && (a += ":" + s), a;
	});
}
function Xs(e, t) {
	var n = new Bi();
	return Zs(e).reduce(function(e, r) {
		var i, a = t(r);
		if (a !== void 0) {
			for (var o = r.length - 1; o >= 0; --o) a = (i = {}, i[r[o]] = a, i);
			e = n.merge(e, a);
		}
		return e;
	}, Object.create(null));
}
function Zs(e) {
	var t = qs(e);
	if (!t.paths) {
		var n = t.paths = [], r = [];
		e.forEach(function(t, i) {
			z(t) ? (Zs(t).forEach(function(e) {
				return n.push(r.concat(e));
			}), r.length = 0) : (r.push(t), z(e[i + 1]) || (n.push(r.slice(0)), r.length = 0));
		});
	}
	return t.paths;
}
function Qs(e, t) {
	return e[t];
}
function $s(e, t, n) {
	return n = n || Qs, ec(t.reduce(function e(t, r) {
		return z(t) ? t.map(function(t) {
			return e(t, r);
		}) : t && n(t, r);
	}, e));
}
function ec(e) {
	return L(e) ? z(e) ? e.map(ec) : Xs(Object.keys(e).sort(), function(t) {
		return $s(e, t);
	}) : e;
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/policies.js
function tc(e) {
	return e.args === void 0 ? e.field ? xr(e.field, e.variables) : null : e.args;
}
var nc = function() {}, rc = function(e, t) {
	return t.fieldName;
}, ic = function(e, t, n) {
	var r = n.mergeObjects;
	return r(e, t);
}, ac = function(e, t) {
	return t;
}, oc = function() {
	function e(e) {
		this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = O({ dataIdFromObject: ds }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
	}
	return e.prototype.identify = function(e, t) {
		var n = this, r = t && (t.typename || t.storeObject?.__typename) || e.__typename;
		if (r === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
		var i = t && t.storeObject || e, a = O(O({}, t), {
			typename: r,
			storeObject: i,
			readField: t && t.readField || function() {
				var e = cc(arguments, i);
				return n.readField(e, {
					store: n.cache.data,
					variables: e.variables
				});
			}
		}), o, s = r && this.getTypePolicy(r), c = s && s.keyFn || this.config.dataIdFromObject;
		return Qo.withValue(!0, function() {
			for (; c;) {
				var t = c(O(O({}, e), i), a);
				if (z(t)) c = Js(t);
				else {
					o = t;
					break;
				}
			}
		}), o = o ? String(o) : void 0, a.keyObject ? [o, a.keyObject] : [o];
	}, e.prototype.addTypePolicies = function(e) {
		var t = this;
		Object.keys(e).forEach(function(n) {
			var r = e[n], i = r.queryType, a = r.mutationType, o = r.subscriptionType, s = ne(r, [
				"queryType",
				"mutationType",
				"subscriptionType"
			]);
			i && t.setRootTypename("Query", n), a && t.setRootTypename("Mutation", n), o && t.setRootTypename("Subscription", n), ls.call(t.toBeAdded, n) ? t.toBeAdded[n].push(s) : t.toBeAdded[n] = [s];
		});
	}, e.prototype.updateTypePolicy = function(e, t, n) {
		var r = this.getTypePolicy(e), i = t.keyFields, a = t.fields;
		function o(e, t) {
			e.merge = typeof t == "function" ? t : t === !0 ? ic : t === !1 ? ac : e.merge;
		}
		o(r, t.merge), r.keyFn = i === !1 ? nc : z(i) ? Js(i) : typeof i == "function" ? i : r.keyFn, a && Object.keys(a).forEach(function(t) {
			var r = n[t];
			(!r || r?.typename !== e) && (r = n[t] = { typename: e });
			var i = a[t];
			if (typeof i == "function") r.read = i;
			else {
				var s = i.keyArgs, c = i.read, l = i.merge;
				r.keyFn = s === !1 ? rc : z(s) ? Ys(s) : typeof s == "function" ? s : r.keyFn, typeof c == "function" && (r.read = c), o(r, l);
			}
			r.read && r.merge && (r.keyFn = r.keyFn || rc);
		});
	}, e.prototype.setRootTypename = function(e, t) {
		t === void 0 && (t = e);
		var n = "ROOT_" + e.toUpperCase(), r = this.rootTypenamesById[n];
		t !== r && (j(!r || r === e, 6, e), r && delete this.rootIdsByTypename[r], this.rootIdsByTypename[t] = n, this.rootTypenamesById[n] = t);
	}, e.prototype.addPossibleTypes = function(e) {
		var t = this;
		this.usingPossibleTypes = !0, Object.keys(e).forEach(function(n) {
			t.getSupertypeSet(n, !0), e[n].forEach(function(e) {
				t.getSupertypeSet(e, !0).add(n);
				var r = e.match(gs);
				(!r || r[0] !== e) && t.fuzzySubtypes.set(e, new RegExp(e));
			});
		});
	}, e.prototype.getTypePolicy = function(e) {
		var t = this;
		if (!ls.call(this.typePolicies, e)) {
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
				var r = t.getTypePolicy(e), i = r.fields, a = ne(r, ["fields"]);
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
			if (f.has(a)) return o.has(a) || (u && globalThis.__DEV__ !== !1 && j.warn(7, t, a), o.add(a)), !0;
			f.forEach(c), l && d === s.length - 1 && vs(e.selectionSet, n, r) && (l = !1, u = !0, this.fuzzySubtypes.forEach(function(e, n) {
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
		}, s = tc(e); a;) {
			var c = a(s, o);
			if (z(c)) a = Ys(c);
			else {
				i = c || n;
				break;
			}
		}
		return i === void 0 && (i = e.field ? _r(e.field, e.variables) : br(n, tc(e))), i === !1 ? n : n === _s(i) ? i : n + ":" + i;
	}, e.prototype.readField = function(e, t) {
		var n = e.from;
		if (n && (e.field || e.fieldName)) {
			if (e.typename === void 0) {
				var r = t.store.getFieldValue(n, "__typename");
				r && (e.typename = r);
			}
			var i = this.getStoreFieldName(e), a = _s(i), o = t.store.getFieldValue(n, i), s = this.getFieldPolicy(e.typename, a), c = s && s.read;
			if (c) {
				var l = sc(this, n, e, t, t.store.getStorage(R(n) ? n.__ref : n, i));
				return zs.withValue(this.cache, c, [o, l]);
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
		return s === ic ? lc(r.store)(e, t) : s === ac ? t : (r.overwrite && (e = void 0), s(e, t, sc(this, void 0, {
			typename: o,
			fieldName: a.name.value,
			field: a,
			variables: r.variables
		}, r, i || Object.create(null))));
	}, e;
}();
function sc(e, t, n, r, i) {
	var a = e.getStoreFieldName(n), o = _s(a), s = n.variables || r.variables, c = r.store, l = c.toReference, u = c.canRead;
	return {
		args: tc(n),
		field: n.field || null,
		fieldName: o,
		storeFieldName: a,
		variables: s,
		isReference: R,
		toReference: l,
		storage: i,
		cache: e.cache,
		canRead: u,
		readField: function() {
			return e.readField(cc(arguments, t, s), r);
		},
		mergeObjects: lc(r.store)
	};
}
function cc(e, t, n) {
	var r = e[0], i = e[1], a = e.length, o;
	return typeof r == "string" ? o = {
		fieldName: r,
		from: a > 1 ? i : t
	} : (o = O({}, r), ls.call(o, "from") || (o.from = t)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && j.warn(8, _e(Array.from(e))), o.variables === void 0 && (o.variables = n), o;
}
function lc(e) {
	return function(t, n) {
		if (z(t) || z(n)) throw ye(9);
		if (L(t) && L(n)) {
			var r = e.getFieldValue(t, "__typename"), i = e.getFieldValue(n, "__typename");
			if (r && i && r !== i) return n;
			if (R(t) && ys(n)) return e.merge(t.__ref, n), t;
			if (ys(t) && R(n)) return e.merge(t, n.__ref), n;
			if (ys(t) && ys(n)) return O(O({}, t), n);
		}
		return n;
	};
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/writeToStore.js
function uc(e, t, n) {
	var r = `${t}${n}`, i = e.flavors.get(r);
	return i || e.flavors.set(r, i = e.clientOnly === t && e.deferred === n ? e : O(O({}, e), {
		clientOnly: t,
		deferred: n
	})), i;
}
var dc = function() {
	function e(e, t, n) {
		this.cache = e, this.reader = t, this.fragments = n;
	}
	return e.prototype.writeToStore = function(e, t) {
		var n = this, r = t.query, i = t.result, a = t.dataId, o = t.variables, s = t.overwrite, c = Dr(r), l = bs();
		o = O(O({}, Nr(c)), o);
		var u = O(O({
			store: e,
			written: Object.create(null),
			merge: function(e, t) {
				return l.merge(e, t);
			},
			variables: o,
			varString: tr(o)
		}, xs(r, this.fragments)), {
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
		if (!R(d)) throw ye(12, i);
		return u.incomingById.forEach(function(t, r) {
			var i = t.storeObject, a = t.mergeTree, o = t.fieldNodeSet, s = ar(r);
			if (a && a.map.size) {
				var c = n.applyMerges(a, s, i, u);
				if (R(c)) return;
				i = c;
			}
			if (globalThis.__DEV__ !== !1 && !u.overwrite) {
				var l = Object.create(null);
				o.forEach(function(e) {
					e.selectionSet && (l[e.name.value] = !0);
				});
				var d = function(e) {
					return l[_s(e)] === !0;
				}, f = function(e) {
					var t = a && a.map.get(e);
					return !!(t && t.info && t.info.merge);
				};
				Object.keys(i).forEach(function(e) {
					d(e) && !f(e) && vc(s, i, e, u.store);
				});
			}
			e.merge(r, i);
		}), e.retain(d.__ref), d;
	}, e.prototype.processSelectionSet = function(e) {
		var t = this, n = e.dataId, r = e.result, i = e.selectionSet, a = e.context, o = e.mergeTree, s = this.cache.policies, c = Object.create(null), l = n && s.rootTypenamesById[n] || Cr(r, i, a.fragmentMap) || n && a.store.get(n, "__typename");
		typeof l == "string" && (c.__typename = l);
		var u = function() {
			var e = cc(arguments, c, a.variables);
			if (R(e.from)) {
				var t = a.incomingById.get(e.from.__ref);
				if (t) {
					var n = s.readField(O(O({}, e), { from: t.storeObject }), a);
					if (n !== void 0) return n;
				}
			}
			return s.readField(e, a);
		}, d = /* @__PURE__ */ new Set();
		this.flattenFields(i, r, a, l).forEach(function(e, n) {
			var i, a = r[Sr(n)];
			if (d.add(n), a !== void 0) {
				var f = s.getStoreFieldName({
					typename: l,
					fieldName: n.name.value,
					field: n,
					variables: e.variables
				}), p = pc(o, f), m = t.processFieldValue(a, n, n.selectionSet ? uc(e, !1, !1) : e, p), h = void 0;
				n.selectionSet && (R(m) || ys(m)) && (h = u("__typename", m));
				var g = s.getMergeFunction(l, n.name.value, h);
				g ? p.info = {
					field: n,
					typename: l,
					merge: g
				} : gc(o, f), c = e.merge(c, (i = {}, i[f] = m, i));
			} else globalThis.__DEV__ !== !1 && !e.clientOnly && !e.deferred && !Mi.added(n) && !s.getReadFunction(l, n.name.value) && globalThis.__DEV__ !== !1 && j.error(13, Sr(n), r);
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
			var h = ar(n), g = a.written[n] || (a.written[n] = []);
			if (g.indexOf(i) >= 0 || (g.push(i), this.reader && this.reader.isFresh(r, h, i, a))) return h;
			var _ = a.incomingById.get(n);
			return _ ? (_.storeObject = a.merge(_.storeObject, c), _.mergeTree = mc(_.mergeTree, o), d.forEach(function(e) {
				return _.fieldNodeSet.add(e);
			})) : a.incomingById.set(n, {
				storeObject: c,
				mergeTree: hc(o) ? void 0 : o,
				fieldNodeSet: d
			}), h;
		}
		return c;
	}, e.prototype.processFieldValue = function(e, t, n, r) {
		var i = this;
		return !t.selectionSet || e === null ? globalThis.__DEV__ === !1 ? e : fa(e) : z(e) ? e.map(function(e, a) {
			var o = i.processFieldValue(e, t, n, pc(r, a));
			return gc(r, a), o;
		}) : this.processSelectionSet({
			result: e,
			selectionSet: t.selectionSet,
			context: n,
			mergeTree: r
		});
	}, e.prototype.flattenFields = function(e, t, n, r) {
		r === void 0 && (r = Cr(t, e, n.fragmentMap));
		var i = /* @__PURE__ */ new Map(), a = this.cache.policies, o = new fn(!1);
		return (function e(s, c) {
			var l = o.lookup(s, c.clientOnly, c.deferred);
			l.visited || (l.visited = !0, s.selections.forEach(function(o) {
				if (tn(o, n.variables)) {
					var s = c.clientOnly, l = c.deferred;
					if (!(s && l) && Ti(o.directives) && o.directives.forEach(function(e) {
						var t = e.name.value;
						if (t === "client" && (s = !0), t === "defer") {
							var r = xr(e, n.variables);
							(!r || r.if !== !1) && (l = !0);
						}
					}), wr(o)) {
						var u = i.get(o);
						u && (s = s && u.clientOnly, l = l && u.deferred), i.set(o, uc(n, s, l));
					} else {
						var d = wn(o, n.lookupFragment);
						if (!d && o.kind === M.FRAGMENT_SPREAD) throw ye(14, o.name.value);
						d && a.fragmentMatches(d, r, t, n.variables) && e(d.selectionSet, uc(n, s, l));
					}
				}
			}));
		})(e, n), i;
	}, e.prototype.applyMerges = function(e, t, n, r, i) {
		var a, o = this;
		if (e.map.size && !R(n)) {
			var s = !z(n) && (R(t) || ys(t)) ? t : void 0, c = n;
			s && !i && (i = [R(s) ? s.__ref : s]);
			var l, u = function(e, t) {
				return z(e) ? typeof t == "number" ? e[t] : void 0 : r.store.getFieldValue(e, String(t));
			};
			e.map.forEach(function(e, t) {
				var n = u(s, t), a = u(c, t);
				if (a !== void 0) {
					i && i.push(t);
					var d = o.applyMerges(e, n, a, r, i);
					d !== a && (l = l || /* @__PURE__ */ new Map(), l.set(t, d)), i && j(i.pop() === t);
				}
			}), l && (n = z(c) ? c.slice(0) : O({}, c), l.forEach(function(e, t) {
				n[t] = e;
			}));
		}
		return e.info ? this.cache.policies.runMergeFunction(t, n, e.info, r, i && (a = r.store).getStorage.apply(a, i)) : n;
	}, e;
}(), fc = [];
function pc(e, t) {
	var n = e.map;
	return n.has(t) || n.set(t, fc.pop() || { map: /* @__PURE__ */ new Map() }), n.get(t);
}
function mc(e, t) {
	if (e === t || !t || hc(t)) return e;
	if (!e || hc(e)) return t;
	var n = e.info && t.info ? O(O({}, e.info), t.info) : e.info || t.info, r = e.map.size && t.map.size, i = {
		info: n,
		map: r ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map
	};
	if (r) {
		var a = new Set(t.map.keys());
		e.map.forEach(function(e, n) {
			i.map.set(n, mc(e, t.map.get(n))), a.delete(n);
		}), a.forEach(function(n) {
			i.map.set(n, mc(t.map.get(n), e.map.get(n)));
		});
	}
	return i;
}
function hc(e) {
	return !e || !(e.info || e.map.size);
}
function gc(e, t) {
	var n = e.map, r = n.get(t);
	r && hc(r) && (fc.push(r), n.delete(t));
}
var _c = /* @__PURE__ */ new Set();
function vc(e, t, n, r) {
	var i = function(e) {
		var t = r.getFieldValue(e, n);
		return typeof t == "object" && t;
	}, a = i(e);
	if (a) {
		var o = i(t);
		if (o && !R(a) && !U(a, o) && !Object.keys(a).every(function(e) {
			return r.getFieldValue(o, e) !== void 0;
		})) {
			var s = r.getFieldValue(e, "__typename") || r.getFieldValue(t, "__typename"), c = _s(n), l = `${s}.${c}`;
			if (!_c.has(l)) {
				_c.add(l);
				var u = [];
				!z(a) && !z(o) && [a, o].forEach(function(e) {
					var t = r.getFieldValue(e, "__typename");
					typeof t == "string" && !u.includes(t) && u.push(t);
				}), globalThis.__DEV__ !== !1 && j.warn(15, c, s, u.length ? "either ensure all objects of type " + u.join(" and ") + " have an ID or a custom merge function, or " : "", l, O({}, a), O({}, o));
			}
		}
	}
}
//#endregion
//#region node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
var yc = function(e) {
	te(t, e);
	function t(t) {
		t === void 0 && (t = {});
		var n = e.call(this) || this;
		return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new Si(Mi), n.assumeImmutableResults = !0, n.makeVar = Ws, n.txCount = 0, globalThis.__DEV__ !== !1 && (V(t, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`."), V(t, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.")), n.config = ps(t), n.addTypename = !!n.config.addTypename, n.policies = new oc({
			cache: n,
			dataIdFromObject: n.config.dataIdFromObject,
			possibleTypes: n.config.possibleTypes,
			typePolicies: n.config.typePolicies
		}), n.init(), n;
	}
	return t.prototype.init = function() {
		var e = this.data = new Ts.Root({
			policies: this.policies,
			resultCaching: this.config.resultCaching
		});
		this.optimisticData = e.stump, this.resetResultCache();
	}, t.prototype.resetResultCache = function(e) {
		var t = this, n = this.storeReader, r = this.config.fragments;
		this.addTypenameTransform.resetCache(), r?.resetCaches(), this.storeWriter = new dc(this, this.storeReader = new Is({
			cache: this,
			addTypename: this.addTypename,
			resultCacheMaxSize: this.config.resultCacheMaxSize,
			canonizeResults: ms(this.config),
			canon: e ? void 0 : n && n.canon,
			fragments: r
		}), r), this.maybeBroadcastWatch = bi(function(e, n) {
			return t.broadcastWatch(e, n);
		}, {
			max: this.config.resultCacheMaxSize || zn["inMemoryCache.maybeBroadcastWatch"] || 5e3,
			makeCacheKey: function(e) {
				var n = e.optimistic ? t.optimisticData : t.data;
				if (Ms(n)) {
					var r = e.optimistic, i = e.id, a = e.variables;
					return n.makeCacheKey(e.query, e.callback, tr({
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
			return this.storeReader.diffQueryAgainstStore(O(O({}, e), {
				store: e.optimistic ? this.optimisticData : this.data,
				config: this.config,
				returnPartialData: n
			})).result || null;
		} catch (e) {
			if (e instanceof cs) return null;
			throw e;
		}
	}, t.prototype.write = function(e) {
		try {
			return ++this.txCount, this.storeWriter.writeToStore(this.data, e);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, t.prototype.modify = function(e) {
		if (ls.call(e, "id") && !e.id) return !1;
		var t = e.optimistic ? this.optimisticData : this.data;
		try {
			return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, t.prototype.diff = function(e) {
		return globalThis.__DEV__ !== !1 && V(e, "canonizeResults", "cache.diff"), this.storeReader.diffQueryAgainstStore(O(O({}, e), {
			store: e.optimistic ? this.optimisticData : this.data,
			rootId: e.id || "ROOT_QUERY",
			config: this.config
		}));
	}, t.prototype.watch = function(e) {
		var t = this;
		return this.watches.size || Us(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e), function() {
			t.watches.delete(e) && !t.watches.size && Hs(t), t.maybeBroadcastWatch.forget(e);
		};
	}, t.prototype.gc = function(e) {
		globalThis.__DEV__ !== !1 && V(e || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option."), tr.reset(), wi.reset();
		var t = this.optimisticData.gc();
		return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t;
	}, t.prototype.retain = function(e, t) {
		return (t ? this.optimisticData : this.data).retain(e);
	}, t.prototype.release = function(e, t) {
		return (t ? this.optimisticData : this.data).release(e);
	}, t.prototype.identify = function(e) {
		if (R(e)) return e.__ref;
		try {
			return this.policies.identify(e)[0];
		} catch (e) {
			globalThis.__DEV__ !== !1 && j.warn(e);
		}
	}, t.prototype.evict = function(e) {
		if (!e.id) {
			if (ls.call(e, "id")) return !1;
			e = O(O({}, e), { id: "ROOT_QUERY" });
		}
		try {
			return ++this.txCount, this.optimisticData.evict(e, this.data);
		} finally {
			!--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
		}
	}, t.prototype.reset = function(e) {
		var t = this;
		return this.init(), tr.reset(), e && e.discardWatches ? (this.watches.forEach(function(e) {
			return t.maybeBroadcastWatch.forget(e);
		}), this.watches.clear(), Hs(this)) : this.broadcastWatches(), Promise.resolve();
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
		var n = this, r = e.lastDiff, i = Ia("canonizeResults", function() {
			return n.diff(e);
		});
		t && (e.optimistic && typeof t.optimistic == "string" && (i.fromOptimisticTransaction = !0), t.onWatchUpdated && t.onWatchUpdated.call(this, e, i, r) === !1) || (!r || !U(r.result, i.result)) && e.callback(e.lastDiff = i, r);
	}, t;
}(ss);
globalThis.__DEV__ !== !1 && (yc.prototype.getMemoryInternals = Un);
//#endregion
//#region node_modules/@apollo/client/core/networkStatus.js
var W;
(function(e) {
	e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(W || (W = {}));
function bc(e) {
	return e ? e < 7 : !1;
}
//#endregion
//#region node_modules/@apollo/client/core/ObservableQuery.js
var xc = Object.assign, Sc = Object.hasOwnProperty, Cc = function(e) {
	te(t, e);
	function t(n) {
		var r = n.queryManager, i = n.queryInfo, a = n.options, o = this, s = t.inactiveOnCreation.getValue();
		o = e.call(this, function(e) {
			o._getOrCreateQuery();
			try {
				var t = e._subscription._observer;
				t && !t.error && (t.error = wc);
			} catch {}
			var n = !o.observers.size;
			o.observers.add(e);
			var r = o.last;
			return r && r.error ? e.error && e.error(r.error) : r && r.result && e.next && e.next(o.maskResult(r.result)), n && o.reobserve().catch(function() {}), function() {
				o.observers.delete(e) && !o.observers.size && o.tearDownQuery();
			};
		}) || this, o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.dirty = !1, o._getOrCreateQuery = function() {
			return s && (r.queries.set(o.queryId, i), s = !1), o.queryManager.getOrCreateQuery(o.queryId);
		}, o.queryInfo = i, o.queryManager = r, o.waitForOwnResult = Ec(a.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o), o.maskResult = o.maskResult.bind(o);
		var c = r.defaultOptions.watchQuery, l = (c === void 0 ? {} : c).fetchPolicy, u = l === void 0 ? "cache-first" : l, d = a.fetchPolicy, f = d === void 0 ? u : d, p = a.initialFetchPolicy, m = p === void 0 ? f === "standby" ? u : f : p;
		o.options = O(O({}, a), {
			initialFetchPolicy: m,
			fetchPolicy: f
		}), o.queryId = i.queryId || r.generateQueryId();
		var h = Dr(o.query);
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
		return globalThis.__DEV__ !== !1 && La("observableQuery.result", function() {
			globalThis.__DEV__ !== !1 && j.warn(23);
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
		var n = Ia("getLastResult", function() {
			return t.getLastResult(!0);
		}), r = this.queryInfo.networkStatus || n && n.networkStatus || W.ready, i = O(O({}, n), {
			loading: bc(r),
			networkStatus: r
		}), a = this.options.fetchPolicy, o = a === void 0 ? "cache-first" : a;
		if (!(Ec(o) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)) if (this.waitForOwnResult) this.queryInfo.updateWatch();
		else {
			var s = this.queryInfo.getDiff();
			(s.complete || this.options.returnPartialData) && (i.data = s.result), U(i.data, {}) && (i.data = void 0), s.complete ? (delete i.partial, s.complete && i.networkStatus === W.loading && (o === "cache-first" || o === "cache-only") && (i.networkStatus = W.ready, i.loading = !1)) : i.partial = !0, i.networkStatus === W.ready && (i.error || i.errors) && (i.networkStatus = W.error), globalThis.__DEV__ !== !1 && !s.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && Tc(s.missing);
		}
		return e && this.updateLastResult(i), i;
	}, t.prototype.getCurrentResult = function(e) {
		return e === void 0 && (e = !0), this.maskResult(this.getCurrentFullResult(e));
	}, t.prototype.isDifferentFromLastResult = function(e, t) {
		if (!this.last) return !0;
		var n = this.queryManager.getDocumentInfo(this.query), r = this.queryManager.dataMasking, i = r ? n.nonReactiveQuery : this.query;
		return (r || n.hasNonreactiveDirective ? !Ko(i, this.last.result, e, this.variables) : !U(this.last.result, e)) || t && !U(this.last.variables, t);
	}, t.prototype.getLast = function(e, t) {
		var n = this.last;
		if (n && n[e] && (!t || U(n.variables, this.variables))) return n[e];
	}, t.prototype.getLastResult = function(e) {
		return globalThis.__DEV__ !== !1 && La("getLastResult", function() {
			globalThis.__DEV__ !== !1 && j.warn(24);
		}), this.getLast("result", e);
	}, t.prototype.getLastError = function(e) {
		return globalThis.__DEV__ !== !1 && La("getLastError", function() {
			globalThis.__DEV__ !== !1 && j.warn(25);
		}), this.getLast("error", e);
	}, t.prototype.resetLastResults = function() {
		globalThis.__DEV__ !== !1 && La("resetLastResults", function() {
			globalThis.__DEV__ !== !1 && j.warn(26);
		}), delete this.last, this.isTornDown = !1;
	}, t.prototype.resetQueryStoreErrors = function() {
		globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && j.warn(27), this.queryManager.resetErrors(this.queryId);
	}, t.prototype.refetch = function(e) {
		var t = { pollInterval: 0 };
		if (this.options.fetchPolicy === "no-cache" ? t.fetchPolicy = "no-cache" : t.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && e && Sc.call(e, "variables")) {
			var n = Ar(this.query), r = n.variableDefinitions;
			(!r || !r.some(function(e) {
				return e.variable.name.value === "variables";
			})) && globalThis.__DEV__ !== !1 && j.warn(28, e, n.name?.value || n);
		}
		return e && !U(this.options.variables, e) && (t.variables = this.options.variables = O(O({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(t, W.refetch);
	}, t.prototype.fetchMore = function(e) {
		var t = this, n = O(O({}, e.query ? e : O(O(O(O({}, this.options), { query: this.options.query }), e), { variables: O(O({}, this.options.variables), e.variables) })), { fetchPolicy: "no-cache" });
		n.query = this.transformDocument(n.query);
		var r = this.queryManager.generateQueryId();
		this.lastQuery = e.query ? this.transformDocument(this.options.query) : n.query;
		var i = this.queryInfo, a = i.networkStatus;
		i.networkStatus = W.fetchMore, n.notifyOnNetworkStatusChange && this.observe();
		var o = /* @__PURE__ */ new Set(), s = e?.updateQuery, c = this.options.fetchPolicy !== "no-cache";
		return c || j(s, 29), this.queryManager.fetchQuery(r, n, W.fetchMore).then(function(l) {
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
				t.reportResult(O(O({}, u), {
					networkStatus: a,
					loading: bc(a),
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
					return r(e, O({ subscriptionData: n }, t));
				});
			},
			error: function(t) {
				if (e.onError) {
					e.onError(t);
					return;
				}
				globalThis.__DEV__ !== !1 && j.error(30, t);
			}
		});
		return this.subscriptions.add(n), function() {
			t.subscriptions.delete(n) && n.unsubscribe();
		};
	}, t.prototype.setOptions = function(e) {
		return globalThis.__DEV__ !== !1 && (V(e, "canonizeResults", "setOptions"), La("setOptions", function() {
			globalThis.__DEV__ !== !1 && j.warn(31);
		})), this.reobserve(e);
	}, t.prototype.silentSetOptions = function(e) {
		var t = ka(this.options, e || {});
		xc(this.options, t);
	}, t.prototype.setVariables = function(e) {
		var t = this;
		return U(this.variables, e) ? this.observers.size ? Ia("observableQuery.result", function() {
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
				j(r, 32);
				var i = n || (this.pollingInfo = {});
				i.interval = r;
				var a = function() {
					var t;
					e.pollingInfo && (!bc(e.queryInfo.networkStatus) && !(t = e.options).skipPollAttempt?.call(t) ? e.reobserve({ fetchPolicy: e.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only" }, W.poll).then(o, o) : o());
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
		var r = Ia("getLastError", function() {
			return n.getLastError();
		});
		return r && this.last && !U(t, this.last.variables) && (r = void 0), this.last = O({
			result: this.queryManager.assumeImmutableResults ? e : fa(e),
			variables: t
		}, r ? { error: r } : null);
	}, t.prototype.reobserveAsConcast = function(e, t) {
		var n = this;
		this.isTornDown = !1;
		var r = t === W.refetch || t === W.fetchMore || t === W.poll, i = this.options.variables, a = this.options.fetchPolicy, o = ka(this.options, e || {}), s = r ? o : xc(this.options, o), c = this.transformDocument(s.query);
		this.lastQuery = c, r || (this.updatePolling(), e && e.variables && !U(e.variables, i) && s.fetchPolicy !== "standby" && (s.fetchPolicy === a || typeof s.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", s), t === void 0 && (t = W.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Ec(s.fetchPolicy));
		var l = function() {
			n.concast === f && (n.waitForOwnResult = !1);
		}, u = s.variables && O({}, s.variables), d = this.fetch(s, t, c), f = d.concast, p = d.fromLink, m = {
			next: function(e) {
				U(n.variables, u) && (l(), n.reportResult(e, u));
			},
			error: function(e) {
				U(n.variables, u) && (no(e) || (e = new io({ networkError: e })), l(), n.reportError(e, u));
			}
		};
		return !r && (p || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = f, this.observer = m), f.addObserver(m), f;
	}, t.prototype.reobserve = function(e, t) {
		return ua(this.reobserveAsConcast(e, t).promise.then(this.maskResult));
	}, t.prototype.resubscribeAfterError = function() {
		for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
		var r = this.last;
		Ia("resetLastResults", function() {
			return e.resetLastResults();
		});
		var i = this.subscribe.apply(this, t);
		return this.last = r, i;
	}, t.prototype.observe = function() {
		this.reportResult(this.getCurrentFullResult(!1), this.variables);
	}, t.prototype.reportResult = function(e, t) {
		var n = this, r = Ia("getLastError", function() {
			return n.getLastError();
		}), i = this.isDifferentFromLastResult(e, t);
		(r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), (r || i) && _a(this.observers, "next", this.maskResult(e));
	}, t.prototype.reportError = function(e, t) {
		var n = this, r = O(O({}, Ia("getLastResult", function() {
			return n.getLastResult();
		})), {
			error: e,
			errors: e.graphQLErrors,
			networkStatus: W.error,
			loading: !1
		});
		this.updateLastResult(r, t), _a(this.observers, "error", this.last.error = e);
	}, t.prototype.hasObservers = function() {
		return this.observers.size > 0;
	}, t.prototype.tearDownQuery = function() {
		this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(e) {
			return e.unsubscribe();
		}), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
	}, t.prototype.transformDocument = function(e) {
		return this.queryManager.transform(e);
	}, t.prototype.maskResult = function(e) {
		return e && "data" in e ? O(O({}, e), { data: this.queryManager.maskOperation({
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
		this.cancelNotifyTimeout(), this.dirty && (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !bc(this.queryInfo.networkStatus)) && (this.queryInfo.getDiff().fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst()), this.dirty = !1;
	}, t.prototype.reobserveCacheFirst = function() {
		var e = this.options, t = e.fetchPolicy, n = e.nextFetchPolicy;
		return t === "cache-and-network" || t === "network-only" ? this.reobserve({
			fetchPolicy: "cache-first",
			nextFetchPolicy: function(e, r) {
				return this.nextFetchPolicy = n, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(e, r) : t;
			}
		}) : this.reobserve();
	}, t.inactiveOnCreation = new Vr(), t;
}(B);
ya(Cc);
function wc(e) {
	globalThis.__DEV__ !== !1 && j.error(33, e.message, e.stack);
}
function Tc(e) {
	globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && j.debug(34, e);
}
function Ec(e) {
	return e === "network-only" || e === "no-cache" || e === "standby";
}
//#endregion
//#region node_modules/@apollo/client/core/QueryInfo.js
var Dc = new (hn ? WeakMap : Map)();
function Oc(e, t) {
	var n = e[t];
	typeof n == "function" && (e[t] = function() {
		return Dc.set(e, (Dc.get(e) + 1) % 0x38d7ea4c68000), n.apply(this, arguments);
	});
}
var kc = function() {
	function e(e, t) {
		t === void 0 && (t = e.generateQueryId()), this.queryId = t, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
		var n = this.cache = e.cache;
		Dc.has(n) || (Dc.set(n, 0), Oc(n, "evict"), Oc(n, "modify"), Oc(n, "reset"));
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
		var r = Ia("canonizeResults", function() {
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
		e && !e.complete && Ia("getLastError", function() {
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
			var r = O(O({}, this.getDiffOptions(e)), {
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
		return !(n && n.dmCount === Dc.get(this.cache) && U(t, n.variables) && U(e.data, n.result.data));
	}, e.prototype.markResult = function(e, t, n, r) {
		var i = this, a, o = new Bi(), s = Ti(e.errors) ? e.errors.slice(0) : [];
		if ((a = this.observableQuery) == null || a.resetNotifications(), "incremental" in e && Ti(e.incremental)) e.data = Ea(this.getDiff().result, e);
		else if ("hasNext" in e && e.hasNext) {
			var c = this.getDiff();
			e.data = o.merge(c.result, e.data);
		}
		this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({
			result: e.data,
			complete: !0
		}, this.getDiffOptions(n.variables)) : r !== 0 && (Ac(e, n.errorPolicy) ? this.cache.performTransaction(function(a) {
			if (i.shouldWrite(e, n.variables)) a.writeQuery({
				query: t,
				data: e.data,
				variables: n.variables,
				overwrite: r === 1
			}), i.lastWrite = {
				result: e,
				variables: n.variables,
				dmCount: Dc.get(i.cache)
			};
			else if (i.lastDiff && i.lastDiff.diff.complete) {
				e.data = i.lastDiff.diff.result;
				return;
			}
			var o = i.getDiffOptions(n.variables), s = Ia("canonizeResults", function() {
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
function Ac(e, t) {
	t === void 0 && (t = "none");
	var n = t === "ignore" || t === "all", r = !Da(e);
	return !r && n && e.data && (r = !0), r;
}
//#endregion
//#region node_modules/@apollo/client/core/QueryManager.js
var jc = Object.prototype.hasOwnProperty, Mc = Object.create(null), Nc = function() {
	function e(e) {
		var t = this;
		this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new Ln(zn["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new fn(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
		var n = new Si(function(e) {
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
		}), this.cancelPendingFetches(ye(35));
	}, e.prototype.cancelPendingFetches = function(e) {
		this.fetchCancelFns.forEach(function(t) {
			return t(e);
		}), this.fetchCancelFns.clear();
	}, e.prototype.mutate = function(e) {
		return re(this, arguments, void 0, function(e) {
			var t, n, r, i, a, o = e.mutation, s = e.variables, c = e.optimisticResponse, l = e.updateQueries, u = e.refetchQueries, d = u === void 0 ? [] : u, f = e.awaitRefetchQueries, p = f === void 0 ? !1 : f, m = e.update, h = e.onQueryUpdated, g = e.fetchPolicy, _ = g === void 0 ? this.defaultOptions.mutate?.fetchPolicy || "network-only" : g, v = e.errorPolicy, y = v === void 0 ? this.defaultOptions.mutate?.errorPolicy || "none" : v, b = e.keepRootFields, x = e.context;
			return k(this, function(e) {
				switch (e.label) {
					case 0: return j(o, 36), j(_ === "network-only" || _ === "no-cache", 37), t = this.generateMutationId(), o = this.cache.transformForLink(this.transform(o)), n = this.getDocumentInfo(o).hasClientExports, s = this.getVariables(o, s), n ? [4, this.localState.addExportedVariables(o, s, x)] : [3, 2];
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
						return va(a.getObservableFromLink(o, O(O({}, x), { optimisticResponse: i ? c : void 0 }), s, {}, !1), function(e) {
							if (Da(e) && y === "none") throw new io({ graphQLErrors: Oa(e) });
							r && (r.loading = !1, r.error = null);
							var n = O({}, e);
							return typeof d == "function" && (d = d(n)), y === "ignore" && Da(n) && delete n.errors, a.markMutationResult({
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
								a.broadcastQueries(), (!("hasNext" in n) || n.hasNext === !1) && e(O(O({}, n), { data: a.maskOperation({
									document: o,
									data: n.data,
									fetchPolicy: _,
									id: t
								}) }));
							},
							error: function(e) {
								r && (r.loading = !1, r.error = e), i && a.cache.removeOptimistic(t), a.broadcastQueries(), n(e instanceof io ? e : new io({ networkError: e }));
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
		if (!a && Ac(r, e.errorPolicy)) {
			if (Sa(r) || i.push({
				result: r.data,
				dataId: "ROOT_MUTATION",
				query: e.document,
				variables: e.variables
			}), Sa(r) && Ti(r.incremental)) {
				var o = t.diff({
					id: "ROOT_MUTATION",
					query: this.getDocumentInfo(e.document).asQuery,
					variables: e.variables,
					optimistic: !1,
					returnPartialData: !0
				}), s = void 0;
				o.result && (s = Ea(o.result, r)), s !== void 0 && (r.data = s, i.push({
					result: s,
					dataId: "ROOT_MUTATION",
					query: e.document,
					variables: e.variables
				}));
			}
			var c = e.updateQueries;
			c && this.queries.forEach(function(e, a) {
				var o = e.observableQuery, s = o && o.queryName;
				if (!(!s || !jc.call(c, s))) {
					var l = c[s], u = n.queries.get(a), d = u.document, f = u.variables, p = t.diff({
						query: d,
						variables: f,
						returnPartialData: !0,
						optimistic: !1
					}), m = p.result;
					if (p.complete && m) {
						var h = l(m, {
							mutationResult: r,
							queryName: d && Or(d) || void 0,
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
					var o = e.update, s = !wa(r) || Sa(r) && !r.hasNext;
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
	}, e.prototype.markMutationOptimistic = function(e, t) {
		var n = this, r = typeof e == "function" ? e(t.variables, { IGNORE: Mc }) : e;
		return r === Mc ? !1 : (this.cache.recordOptimisticTransaction(function(e) {
			try {
				n.markMutationResult(O(O({}, t), { result: { data: r } }), e);
			} catch (e) {
				globalThis.__DEV__ !== !1 && j.error(e);
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
				hasClientExports: rn(e),
				hasForcedResolvers: this.localState.shouldForceResolvers(e),
				hasNonreactiveDirective: nn(["nonreactive"], e),
				nonReactiveQuery: Fi(e),
				clientQuery: this.localState.clientQuery(e),
				serverQuery: ji([
					{
						name: "client",
						remove: !0
					},
					{ name: "connection" },
					{ name: "nonreactive" },
					{ name: "unmask" }
				], e),
				defaultVars: Nr(Dr(e)),
				asQuery: O(O({}, e), { definitions: e.definitions.map(function(e) {
					return e.kind === "OperationDefinition" && e.operation !== "query" ? O(O({}, e), { operation: "query" }) : e;
				}) })
			};
			t.set(e, n);
		}
		return t.get(e);
	}, e.prototype.getVariables = function(e, t) {
		return O(O({}, this.getDocumentInfo(e).defaultVars), t);
	}, e.prototype.watchQuery = function(e) {
		var t = this.transform(e.query);
		e = O(O({}, e), { variables: this.getVariables(t, e.variables) }), e.notifyOnNetworkStatusChange === void 0 && (e.notifyOnNetworkStatusChange = !1);
		var n = new kc(this), r = new Cc({
			queryManager: this,
			queryInfo: n,
			options: e
		});
		return r.lastQuery = t, Cc.inactiveOnCreation.getValue() || this.queries.set(r.queryId, n), n.init({
			document: t,
			observableQuery: r,
			variables: r.variables
		}), r;
	}, e.prototype.query = function(e, t) {
		var n = this;
		t === void 0 && (t = this.generateQueryId()), j(e.query, 38), j(e.query.kind === "Document", 39), j(!e.returnPartialData, 40), j(!e.pollInterval, 41);
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
		return e === void 0 && (e = { discardWatches: !0 }), this.cancelPendingFetches(ye(42)), this.queries.forEach(function(e) {
			e.observableQuery ? e.networkStatus = W.loading : e.stop();
		}), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e);
	}, e.prototype.getObservableQueries = function(e) {
		var t = this;
		e === void 0 && (e = "active");
		var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
		return Array.isArray(e) && e.forEach(function(e) {
			if (typeof e == "string") r.set(e, e), i.set(e, !1);
			else if (or(e)) {
				var n = wi(t.transform(e));
				r.set(n, Or(e)), i.set(n, !1);
			} else L(e) && e.query && a.add(e);
		}), this.queries.forEach(function(t, r) {
			var a = t.observableQuery, o = t.document;
			if (a) {
				if (e === "all") {
					n.set(r, a);
					return;
				}
				var s = a.queryName;
				if (a.options.fetchPolicy === "standby" || e === "active" && !a.hasObservers()) return;
				(e === "active" || s && i.has(s) || o && i.has(wi(o))) && (n.set(r, a), s && i.set(s, !0), o && i.set(wi(o), !0));
			}
		}), a.size && a.forEach(function(e) {
			var r = ge("legacyOneTimeQuery"), i = t.getOrCreateQuery(r).init({
				document: e.query,
				variables: e.variables
			}), a = new Cc({
				queryManager: t,
				queryInfo: i,
				options: O(O({}, e), { fetchPolicy: "network-only" })
			});
			j(a.queryId === r), i.setObservableQuery(a), n.set(r, a);
		}), globalThis.__DEV__ !== !1 && i.size && i.forEach(function(e, t) {
			if (!e) {
				var n = r.get(t);
				n ? globalThis.__DEV__ !== !1 && j.warn(43, n) : globalThis.__DEV__ !== !1 && j.warn(44);
			}
		}), n;
	}, e.prototype.reFetchObservableQueries = function(e) {
		var t = this;
		e === void 0 && (e = !1);
		var n = [];
		return this.getObservableQueries(e ? "all" : "active").forEach(function(r, i) {
			var a = r.options.fetchPolicy;
			Ia("resetLastResults", function() {
				return r.resetLastResults();
			}), (e || a !== "standby" && a !== "cache-only") && n.push(r.refetch()), (t.queries.get(i) || r.queryInfo).setDiff(null);
		}), this.broadcastQueries(), Promise.all(n);
	}, e.prototype.startGraphQLSubscription = function(e) {
		var t = this, n = e.query, r = e.variables, i = e.fetchPolicy, a = e.errorPolicy, o = a === void 0 ? "none" : a, s = e.context, c = s === void 0 ? {} : s, l = e.extensions, u = l === void 0 ? {} : l;
		n = this.transform(n), r = this.getVariables(n, r);
		var d = function(e) {
			return t.getObservableFromLink(n, c, e, u).map(function(r) {
				i !== "no-cache" && (Ac(r, o) && t.cache.write({
					query: n,
					result: r.data,
					dataId: "ROOT_SUBSCRIPTION",
					variables: e
				}), t.broadcastQueries());
				var a = Da(r), s = to(r);
				if (a || s) {
					var c = {};
					if (a && (c.graphQLErrors = r.errors), s && (c.protocolErrors = r.extensions[eo]), o === "none" || s) throw new io(c);
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
				operationName: Or(c) || void 0,
				context: this.prepareContext(O(O({}, t), { forceFetch: !i })),
				extensions: r
			};
			if (t = p.context, i) {
				var m = wi(c), h = tr(n), g = d.lookup(m, h);
				if (o = g.observable, !o) {
					var _ = new xa([_o(f, p)]);
					o = g.observable = _, _.beforeNext(function e(t, n) {
						t === "next" && "hasNext" in n && n.hasNext ? _.beforeNext(e) : d.remove(m, h);
					});
				}
			} else o = new xa([_o(f, p)]);
		} else o = new xa([B.of({ data: {} })]), t = this.prepareContext(t);
		return l && (o = va(o, function(e) {
			return a.localState.runResolvers({
				document: l,
				remoteResult: e,
				context: t,
				variables: n
			});
		})), o;
	}, e.prototype.getResultsFromLink = function(e, t, n) {
		var r = e.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(n.query);
		return va(this.getObservableFromLink(i, n.context, n.variables), function(a) {
			var o = Oa(a), s = o.length > 0, c = n.errorPolicy;
			if (r >= e.lastRequestId) {
				if (s && c === "none") throw e.markError(new io({ graphQLErrors: o }));
				e.markResult(a, i, n, t), e.markReady();
			}
			var l = {
				data: a.data,
				loading: !1,
				networkStatus: W.ready
			};
			return s && c === "none" && (l.data = void 0), s && c !== "ignore" && (l.errors = o, l.networkStatus = W.error), l;
		}, function(t) {
			var n = no(t) ? t : new io({ networkError: t });
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
		if (this.getDocumentInfo(g.query).hasClientExports) y = new xa(this.localState.addExportedVariables(g.query, g.variables, g.context).then(_).then(function(e) {
			return e.sources;
		})), b = !0;
		else {
			var x = _(g.variables);
			b = x.fromLink, y = new xa(x.sources);
		}
		return y.promise.then(v, v), {
			concast: y,
			fromLink: b
		};
	}, e.prototype.refetchQueries = function(e) {
		var t = this, n = e.updateCache, r = e.include, i = e.optimistic, a = i === void 0 ? !1 : i, o = e.removeOptimistic, s = o === void 0 ? a ? ge("refetchQueries") : void 0 : o, c = e.onQueryUpdated, l = /* @__PURE__ */ new Map();
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
				var r = e.watcher instanceof kc && e.watcher.observableQuery;
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
			c && (a || (a = Ia("canonizeResults", function() {
				return t.cache.diff(r.queryInfo.getDiffOptions());
			})), o = c(r, a, i)), (!c || o === !0) && (o = r.refetch()), o !== !1 && u.set(r, o), n.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(n);
		}), s && this.cache.removeOptimistic(s), u;
	}, e.prototype.maskOperation = function(e) {
		var t = e.document, n = e.data;
		if (globalThis.__DEV__ !== !1) {
			var r = e.fetchPolicy, i = e.id, a = Dr(t)?.operation, o = (a?.[0] ?? "o") + i;
			this.dataMasking && r === "no-cache" && !Tn(t) && !this.noCacheWarningsByQueryId.has(o) && (this.noCacheWarningsByQueryId.add(o), globalThis.__DEV__ !== !1 && j.warn(45, Or(t) ?? `Unnamed ${a ?? "operation"}`));
		}
		return this.dataMasking ? os(n, t, this.cache) : n;
	}, e.prototype.maskFragment = function(e) {
		var t = e.data, n = e.fragment, r = e.fragmentName;
		return this.dataMasking ? as(t, n, this.cache, r) : t;
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
			globalThis.__DEV__ !== !1 && !l && !U(o, {}) && Tc(t.missing);
			var s = function(e) {
				return B.of(O({
					data: e,
					loading: bc(n),
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
		}, _ = d && typeof f == "number" && f !== n && bc(n);
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
		return e && !this.queries.has(e) && this.queries.set(e, new kc(this, e)), this.queries.get(e);
	}, e.prototype.prepareContext = function(e) {
		e === void 0 && (e = {});
		var t = this.localState.prepareContext(e);
		return O(O(O({}, this.defaultContext), t), { clientAwareness: this.clientAwareness });
	}, e;
}(), Pc = function() {
	function e(e) {
		var t = e.cache, n = e.client, r = e.resolvers, i = e.fragmentMatcher;
		this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = t, n && (this.client = n), r && this.addResolvers(r), i && this.setFragmentMatcher(i);
	}
	return e.prototype.addResolvers = function(e) {
		var t = this;
		this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(e) {
			t.resolvers = Li(t.resolvers, e);
		}) : this.resolvers = Li(this.resolvers, e);
	}, e.prototype.setResolvers = function(e) {
		this.resolvers = {}, this.addResolvers(e);
	}, e.prototype.getResolvers = function() {
		return this.resolvers || {};
	}, e.prototype.runResolvers = function(e) {
		return re(this, arguments, void 0, function(e) {
			var t = e.document, n = e.remoteResult, r = e.context, i = e.variables, a = e.onlyRunForcedResolvers, o = a === void 0 ? !1 : a;
			return k(this, function(e) {
				return t ? [2, this.resolveDocument(t, n.data, r, i, this.fragmentMatcher, o).then(function(e) {
					return O(O({}, n), { data: e.result });
				})] : [2, n];
			});
		});
	}, e.prototype.setFragmentMatcher = function(e) {
		this.fragmentMatcher = e;
	}, e.prototype.getFragmentMatcher = function() {
		return this.fragmentMatcher;
	}, e.prototype.clientQuery = function(e) {
		return nn(["client"], e) && this.resolvers ? e : null;
	}, e.prototype.serverQuery = function(e) {
		return Pi(e);
	}, e.prototype.prepareContext = function(e) {
		var t = this.cache;
		return O(O({}, e), {
			cache: t,
			getCacheKey: function(e) {
				return t.identify(e);
			}
		});
	}, e.prototype.addExportedVariables = function(e) {
		return re(this, arguments, void 0, function(e, t, n) {
			return t === void 0 && (t = {}), n === void 0 && (n = {}), k(this, function(r) {
				return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(n), t).then(function(e) {
					return O(O({}, t), e.exportedVariables);
				})] : [2, O({}, t)];
			});
		});
	}, e.prototype.shouldForceResolvers = function(e) {
		var t = !1;
		return Kt(e, { Directive: { enter: function(e) {
			if (e.name.value === "client" && e.arguments && (t = e.arguments.some(function(e) {
				return e.name.value === "always" && e.value.kind === "BooleanValue" && e.value.value === !0;
			}), t)) return Gt;
		} } }), t;
	}, e.prototype.buildRootValueFromCache = function(e, t) {
		return this.cache.diff({
			query: Ni(e),
			variables: t,
			returnPartialData: !0,
			optimistic: !1
		}).result;
	}, e.prototype.resolveDocument = function(e, t) {
		return re(this, arguments, void 0, function(e, t, n, r, i, a) {
			var o, s, c, l, u, d, f, p, m, h, g;
			return n === void 0 && (n = {}), r === void 0 && (r = {}), i === void 0 && (i = function() {
				return !0;
			}), a === void 0 && (a = !1), k(this, function(_) {
				return o = Mr(e), s = kr(e), c = Cn(s), l = this.collectSelectionsToResolve(o, c), u = o.operation, d = u ? u.charAt(0).toUpperCase() + u.slice(1) : "Query", f = this, p = f.cache, m = f.client, h = {
					fragmentMap: c,
					context: O(O({}, n), {
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
		return re(this, void 0, void 0, function() {
			var i, a, o, s, c, l = this;
			return k(this, function(u) {
				return i = r.fragmentMap, a = r.context, o = r.variables, s = [n], c = function(e) {
					return re(l, void 0, void 0, function() {
						var c, l;
						return k(this, function(u) {
							return !t && !r.selectionsToResolve.has(e) || !tn(e, o) ? [2] : wr(e) ? [2, this.resolveField(e, t, n, r).then(function(t) {
								var n;
								t !== void 0 && s.push((n = {}, n[Sr(e)] = t, n));
							})] : (Tr(e) ? c = e : (c = i[e.name.value], j(c, 21, e.name.value)), c && c.typeCondition && (l = c.typeCondition.name.value, r.fragmentMatcher(n, l, a)) ? [2, this.resolveSelectionSet(c.selectionSet, t, n, r).then(function(e) {
								s.push(e);
							})] : [2]);
						});
					});
				}, [2, Promise.all(e.selections.map(c)).then(function() {
					return Ri(s);
				})];
			});
		});
	}, e.prototype.resolveField = function(e, t, n, r) {
		return re(this, void 0, void 0, function() {
			var i, a, o, s, c, l, u, d, f, p = this;
			return k(this, function(m) {
				return n ? (i = r.variables, a = e.name.value, o = Sr(e), s = a !== o, c = n[o] || n[a], l = Promise.resolve(c), (!r.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (u = n.__typename || r.defaultOperationType, d = this.resolvers && this.resolvers[u], d && (f = d[s ? a : o], f && (l = Promise.resolve(zs.withValue(this.cache, f, [
					n,
					xr(e, i),
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
				r.set(e, a), Kt(e, {
					Directive: function(e, t, r, i, o) {
						e.name.value === "client" && o.forEach(function(e) {
							n(e) && en(e) && a.add(e);
						});
					},
					FragmentSpread: function(e, r, o, s, c) {
						var l = t[e.name.value];
						j(l, 22, e.name.value);
						var u = i(l);
						u.size > 0 && (c.forEach(function(e) {
							n(e) && en(e) && a.add(e);
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
}(), Fc = !1, Ic = function() {
	function e(e) {
		var t = this;
		if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache) throw ye(16);
		var n = e.uri, r = e.credentials, i = e.headers, a = e.cache, o = e.documentTransform, s = e.ssrMode, c = s === void 0 ? !1 : s, l = e.ssrForceFetchDelay, u = l === void 0 ? 0 : l, d = e.connectToDevTools, f = e.queryDeduplication, p = f === void 0 ? !0 : f, m = e.defaultOptions, h = e.defaultContext, g = e.assumeImmutableResults, _ = g === void 0 ? a.assumeImmutableResults : g, v = e.resolvers, y = e.typeDefs, b = e.fragmentMatcher, x = e.clientAwareness, S = e.name, C = e.version, w = e.devtools, T = e.dataMasking;
		globalThis.__DEV__ !== !1 && (V(e, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead."), V(e, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead."), V(e, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead."), V(e, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead."), V(e, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead."), V(e, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead."), V(e, "typeDefs", "ApolloClient"), e.link || globalThis.__DEV__ !== !1 && j.warn(17));
		var E = e.link;
		E || (E = n ? new Go({
			uri: n,
			credentials: r,
			headers: i
		}) : ho.empty()), this.link = E, this.cache = a, this.disableNetworkFetches = c || u > 0, this.queryDeduplication = p, this.defaultOptions = m || Object.create(null), this.typeDefs = y, this.devtoolsConfig = O(O({}, w), { enabled: w?.enabled ?? d }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), u && setTimeout(function() {
			return t.disableNetworkFetches = !1;
		}, u), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = fe, this.localState = new Pc({
			cache: a,
			client: this,
			resolvers: v,
			fragmentMatcher: b
		}), this.queryManager = new Nc({
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
			(e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, !Fc && globalThis.__DEV__ !== !1 && (Fc = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
				if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
					var e = window.navigator, t = e && e.userAgent, n = void 0;
					typeof t == "string" && (t.indexOf("Chrome/") > -1 ? n = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : t.indexOf("Firefox/") > -1 && (n = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), n && globalThis.__DEV__ !== !1 && j.log("Download the Apollo DevTools for a better development experience: %s", n);
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
		return this.defaultOptions.watchQuery && (e = Aa(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = O(O({}, e), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (V(e, "canonizeResults", "client.watchQuery"), V(e, "partialRefetch", "client.watchQuery")), this.queryManager.watchQuery(e);
	}, e.prototype.query = function(e) {
		return this.defaultOptions.query && (e = Aa(this.defaultOptions.query, e)), j(e.fetchPolicy !== "cache-and-network", 18), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = O(O({}, e), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (V(e, "canonizeResults", "client.query"), V(e, "notifyOnNetworkStatusChange", "client.query", "This option does not affect `client.query` and can be safely removed."), e.fetchPolicy === "standby" && globalThis.__DEV__ !== !1 && j.warn(19)), this.queryManager.query(e);
	}, e.prototype.mutate = function(e) {
		return this.defaultOptions.mutate && (e = Aa(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
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
		return _o(this.link, e);
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
			globalThis.__DEV__ !== !1 && j.debug(20, e);
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
globalThis.__DEV__ !== !1 && (Ic.prototype.getMemoryInternals = Hn);
//#endregion
//#region node_modules/graphql-tag/lib/index.js
var Lc = /* @__PURE__ */ new Map(), Rc = /* @__PURE__ */ new Map(), zc = !0, Bc = !1;
function Vc(e) {
	return e.replace(/[\s,]+/g, " ").trim();
}
function Hc(e) {
	return Vc(e.source.body.substring(e.start, e.end));
}
function Uc(e) {
	var t = /* @__PURE__ */ new Set(), n = [];
	return e.definitions.forEach(function(e) {
		if (e.kind === "FragmentDefinition") {
			var r = e.name.value, i = Hc(e.loc), a = Rc.get(r);
			a && !a.has(i) ? zc && console.warn("Warning: fragment with name " + r + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : a || Rc.set(r, a = /* @__PURE__ */ new Set()), a.add(i), t.has(i) || (t.add(i), n.push(e));
		} else n.push(e);
	}), O(O({}, e), { definitions: n });
}
function Wc(e) {
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
function Gc(e) {
	var t = Vc(e);
	if (!Lc.has(t)) {
		var n = Lt(e, {
			experimentalFragmentVariables: Bc,
			allowLegacyFragmentVariables: Bc
		});
		if (!n || n.kind !== "Document") throw Error("Not a valid GraphQL document.");
		Lc.set(t, Wc(Uc(n)));
	}
	return Lc.get(t);
}
function G(e) {
	var t = [...arguments].slice(1);
	typeof e == "string" && (e = [e]);
	var n = e[0];
	return t.forEach(function(t, r) {
		t && t.kind === "Document" ? n += t.loc.source.body : n += t, n += e[r + 1];
	}), Gc(n);
}
function Kc() {
	Lc.clear(), Rc.clear();
}
function qc() {
	zc = !1;
}
function Jc() {
	Bc = !0;
}
function Yc() {
	Bc = !1;
}
var Xc = {
	gql: G,
	resetCaches: Kc,
	disableFragmentWarnings: qc,
	enableExperimentalFragmentVariables: Jc,
	disableExperimentalFragmentVariables: Yc
};
(function(e) {
	e.gql = Xc.gql, e.resetCaches = Xc.resetCaches, e.disableFragmentWarnings = Xc.disableFragmentWarnings, e.enableExperimentalFragmentVariables = Xc.enableExperimentalFragmentVariables, e.disableExperimentalFragmentVariables = Xc.disableExperimentalFragmentVariables;
})(G || (G = {})), G.default = G;
//#endregion
//#region node_modules/@apollo/client/react/parser/index.js
var Zc;
(function(e) {
	e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription";
})(Zc || (Zc = {}));
var Qc;
function $c(e) {
	var t;
	switch (e) {
		case Zc.Query:
			t = "Query";
			break;
		case Zc.Mutation:
			t = "Mutation";
			break;
		case Zc.Subscription:
			t = "Subscription";
			break;
	}
	return t;
}
function el(e) {
	La("parser", function() {
		globalThis.__DEV__ !== !1 && j.warn(93);
	}), Qc || (Qc = new Ln(zn.parser || 1e3));
	var t = Qc.get(e);
	if (t) return t;
	var n, r, i;
	j(!!e && !!e.kind, 94, e);
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
	j(!a.length || o.length || s.length || c.length, 95), j(o.length + s.length + c.length <= 1, 96, e, o.length, c.length, s.length), r = o.length ? Zc.Query : Zc.Mutation, !o.length && !s.length && (r = Zc.Subscription);
	var f = o.length ? o : s.length ? s : c;
	j(f.length === 1, 97, e, f.length);
	var p = f[0];
	n = p.variableDefinitions || [], i = p.name && p.name.kind === "Name" ? p.name.value : "data";
	var m = {
		name: i,
		type: r,
		variables: n
	};
	return Qc.set(e, m), m;
}
el.resetCache = function() {
	Qc = void 0;
}, globalThis.__DEV__ !== !1 && Vn("parser", function() {
	return Qc ? Qc.size : 0;
});
function tl(e, t) {
	var n = Ia("parser", el, [e]), r = $c(t), i = $c(n.type);
	j(n.type === t, 98, r, r, i);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js
var nl = yn ? H.useLayoutEffect : H.useEffect;
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/useWarnRemovedOption.js
function rl(e, t, n, r) {
	"use no memo";
	r === void 0 && (r = "Please remove this option.");
	var i = H.useRef(!1);
	globalThis.__DEV__ !== !1 && t in e && !i.current && (V(e, t, n, r), i.current = !0);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/internal/wrapHook.js
var il = Symbol.for("apollo.hook.wrappers");
function al(e, t, n) {
	var r = n.queryManager, i = r && r[il], a = i && i[e];
	return a ? a(t) : t;
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useQuery.js
var ol = Object.prototype.hasOwnProperty;
function sl() {}
var cl = Symbol();
function ll(e, t) {
	return t === void 0 && (t = Object.create(null)), al("useQuery", ul, Ba(t && t.client))(e, t);
}
function ul(e, t) {
	globalThis.__DEV__ !== !1 && (rl(t, "canonizeResults", "useQuery"), rl(t, "partialRefetch", "useQuery"), rl(t, "defaultOptions", "useQuery", "Pass the options directly to the hook instead."), rl(t, "onCompleted", "useQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), rl(t, "onError", "useQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));
	var n = fl(e, t), r = n.result, i = n.obsQueryFields;
	return H.useMemo(function() {
		return O(O({}, r), i);
	}, [r, i]);
}
function dl(e, t, n, r, i) {
	function a(a) {
		return tl(t, Zc.Query), {
			client: e,
			query: t,
			observable: r && r.getSSRObservable(i()) || Cc.inactiveOnCreation.withValue(!r, function() {
				return Ia(["canonizeResults", "partialRefetch"], function() {
					return e.watchQuery(_l(void 0, e, n, i()));
				});
			}),
			resultData: { previousData: a?.resultData.current?.data }
		};
	}
	var o = H.useState(a), s = o[0], c = o[1];
	function l(e) {
		var t;
		Object.assign(s.observable, (t = {}, t[cl] = e, t));
		var n = s.resultData;
		c(O(O({}, s), {
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
function fl(e, t) {
	var n = Ba(t.client), r = H.useContext(za()).renderPromises, i = !!r, a = n.disableNetworkFetches, o = t.ssr !== !1 && !t.skip, s = t.partialRefetch, c = gl(n, e, t, i), l = dl(n, e, t, r, c), u = l[0], d = u.observable, f = u.resultData, p = l[1], m = c(d);
	hl(f, d, n, t, m);
	var h = H.useMemo(function() {
		return Dl(d);
	}, [d]);
	return ml(d, r, o), {
		result: pl(f, d, n, t, m, a, s, i, {
			onCompleted: t.onCompleted || sl,
			onError: t.onError || sl
		}),
		obsQueryFields: h,
		observable: d,
		resultData: f,
		client: n,
		onQueryExecuted: p
	};
}
function pl(e, t, n, r, i, a, o, s, c) {
	var l = H.useRef(c);
	H.useEffect(function() {
		l.current = c;
	});
	var u = (s || a) && r.ssr === !1 && !r.skip ? Tl : r.skip || i.fetchPolicy === "standby" ? El : void 0, d = e.previousData, f = H.useMemo(function() {
		return u && Cl(u, d, t, n);
	}, [
		n,
		t,
		u,
		d
	]);
	return Ha(H.useCallback(function(r) {
		if (s) return function() {};
		var i = function() {
			var i = e.current, a = t.getCurrentResult();
			i && i.loading === a.loading && i.networkStatus === a.networkStatus && U(i.data, a.data) || vl(a, e, t, n, o, r, l.current);
		}, a = function(s) {
			if (c.current.unsubscribe(), c.current = t.resubscribeAfterError(i, a), !ol.call(s, "graphQLErrors")) throw s;
			var u = e.current;
			(!u || u && u.loading || !U(s, u.error)) && vl({
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
		return f || bl(e, t, l.current, o, n);
	}, function() {
		return f || bl(e, t, l.current, o, n);
	});
}
function ml(e, t, n) {
	t && n && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e));
}
function hl(e, t, n, r, i) {
	t[cl] && !U(t[cl], i) && (t.reobserve(_l(t, n, r, i)), e.previousData = e.current?.data || e.previousData, e.current = void 0), t[cl] = i;
}
function gl(e, t, n, r) {
	n === void 0 && (n = {});
	var i = n.skip;
	n.ssr, n.onCompleted, n.onError;
	var a = n.defaultOptions, o = ne(n, [
		"skip",
		"ssr",
		"onCompleted",
		"onError",
		"defaultOptions"
	]);
	return function(n) {
		var s = Object.assign(o, { query: t });
		return r && (s.fetchPolicy === "network-only" || s.fetchPolicy === "cache-and-network") && (s.fetchPolicy = "cache-first"), s.variables || (s.variables = {}), i ? (s.initialFetchPolicy = s.initialFetchPolicy || s.fetchPolicy || xl(a, e.defaultOptions), s.fetchPolicy = "standby") : s.fetchPolicy || (s.fetchPolicy = n?.options.initialFetchPolicy || xl(a, e.defaultOptions)), s;
	};
}
function _l(e, t, n, r) {
	var i = [], a = t.defaultOptions.watchQuery;
	return a && i.push(a), n.defaultOptions && i.push(n.defaultOptions), i.push(ka(e && e.options, r)), i.reduce(Aa);
}
function vl(e, t, n, r, i, a, o) {
	var s = t.current;
	s && s.data && (t.previousData = s.data), !e.error && Ti(e.errors) && (e.error = new io({ graphQLErrors: e.errors })), t.current = Cl(wl(e, n, i), t.previousData, n, r), a(), yl(e, s?.networkStatus, o);
}
function yl(e, t, n) {
	if (!e.loading) {
		var r = Sl(e);
		Promise.resolve().then(function() {
			r ? n.onError(r) : e.data && t !== e.networkStatus && e.networkStatus === W.ready && n.onCompleted(e.data);
		}).catch(function(e) {
			globalThis.__DEV__ !== !1 && j.warn(e);
		});
	}
}
function bl(e, t, n, r, i) {
	return e.current || vl(t.getCurrentResult(), e, t, i, r, function() {}, n), e.current;
}
function xl(e, t) {
	return e?.fetchPolicy || t?.watchQuery?.fetchPolicy || "cache-first";
}
function Sl(e) {
	return Ti(e.errors) ? new io({ graphQLErrors: e.errors }) : e.error;
}
function Cl(e, t, n, r) {
	var i = e.data;
	e.partial;
	var a = ne(e, ["data", "partial"]);
	return O(O({ data: i }, a), {
		client: r,
		observable: n,
		variables: n.variables,
		called: e !== Tl && e !== El,
		previousData: t
	});
}
function wl(e, t, n) {
	return e.partial && n && !e.loading && (!e.data || Object.keys(e.data).length === 0) && t.options.fetchPolicy !== "cache-only" ? (t.refetch(), O(O({}, e), {
		loading: !0,
		networkStatus: W.refetch
	})) : e;
}
var Tl = ga({
	loading: !0,
	data: void 0,
	error: void 0,
	networkStatus: W.loading
}), El = ga({
	loading: !1,
	data: void 0,
	error: void 0,
	networkStatus: W.ready
});
function Dl(e) {
	return {
		refetch: e.refetch.bind(e),
		reobserve: function() {
			var t = [...arguments];
			return globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && j.warn(83), e.reobserve.apply(e, t);
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
function Ol(e, t) {
	globalThis.__DEV__ !== !1 && rl(t || {}, "ignoreResults", "useMutation", "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");
	var n = Ba(t?.client);
	tl(e, Zc.Mutation);
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
	nl(function() {
		Object.assign(o.current, {
			client: n,
			options: t,
			mutation: e
		});
	});
	var s = H.useCallback(function(e) {
		e === void 0 && (e = {});
		var t = o.current, n = t.options, r = t.mutation, i = O(O({}, n), { mutation: r }), s = e.client || o.current.client;
		!o.current.result.loading && !i.ignoreResults && o.current.isMounted && a(o.current.result = {
			loading: !0,
			error: void 0,
			data: void 0,
			called: !0,
			client: s
		});
		var c = ++o.current.mutationId, l = Aa(i, e);
		return s.mutate(l).then(function(t) {
			var n = t.data, r = t.errors, i = r && r.length > 0 ? new io({ graphQLErrors: r }) : void 0, u = e.onError || o.current.options?.onError;
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
	}, []), [s, O({ reset: c }, i)];
}
//#endregion
//#region lib/ai-assistant.ts
var kl = "Gaia", Al = "AI Agent";
function jl(e) {
	return e ? e.enabled ? e.name?.trim() || "Gaia" : null : kl;
}
//#endregion
//#region dummy/authors.ts
var Ml = {
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
function Nl(e) {
	return e.map((e) => Ml[e]);
}
//#endregion
//#region dummy/help.ts
var Pl = [
	"demo-cat-getting-started",
	"demo-cat-automation",
	"demo-cat-integrations",
	"demo-cat-billing"
];
function Fl(e) {
	return Pl.map((t) => ({
		id: t,
		articleCount: Il.filter((e) => e.categoryId === t).length,
		title: e.raw(`help.categories.${t}.title`),
		description: e.raw(`help.categories.${t}.description`)
	}));
}
var Il = [
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
function Ll(e) {
	return Il.map(({ authorIds: t, tagSlugs: n, ...r }) => ({
		...r,
		title: e.raw(`help.articles.${r.id}.title`),
		excerpt: e.raw(`help.articles.${r.id}.excerpt`),
		contentMarkdown: e.raw(`help.articles.${r.id}.body`),
		authors: Nl(t),
		tags: n.map((t) => ({
			_id: `demo-tag-${t}`,
			slug: t,
			label: e.raw(`help.tags.${t}`)
		}))
	}));
}
//#endregion
//#region lib/asset-url.ts
var Rl = "https://cdn.wexio.io";
function zl(e) {
	return /^https?:\/\//.test(e) ? e : Rl + (e.startsWith("/") ? e : `/${e}`);
}
//#endregion
//#region dummy/messages.ts
function Bl(e) {
	return [{
		kind: "MESSAGE",
		text: e.raw("messenger.welcome.greeting")
	}];
}
var Vl = [
	{
		id: "m-demo-1",
		direction: "OUTBOUND",
		sender: {
			kind: "ai",
			name: "Gaia"
		},
		buttons: [
			{ payload: "pricing" },
			{ payload: "features" },
			{ payload: "handoff" }
		]
	},
	{
		id: "m-demo-2",
		direction: "INBOUND",
		sender: { kind: "visitor" }
	},
	{
		id: "m-demo-3",
		direction: "OUTBOUND",
		sender: {
			kind: "ai",
			name: "Gaia"
		},
		media: [{
			url: "https://picsum.photos/seed/wexio-hero/900/600",
			mimetype: "image/jpeg",
			width: 900,
			height: 600
		}]
	},
	{
		id: "m-demo-4",
		direction: "INBOUND",
		sender: { kind: "visitor" },
		media: [{
			url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
			mimetype: "image/gif",
			width: 400,
			height: 400
		}],
		deliveryStatus: "READ"
	},
	{
		id: "m-demo-5",
		direction: "OUTBOUND",
		sender: {
			kind: "ai",
			name: "Gaia"
		}
	},
	{
		id: "m-demo-6",
		direction: "OUTBOUND",
		sender: {
			kind: "operator",
			name: "Alex"
		},
		media: [
			{
				url: "https://picsum.photos/seed/wexio-a/800/600",
				mimetype: "image/jpeg",
				width: 800,
				height: 600
			},
			{
				url: "https://picsum.photos/seed/wexio-b/800/600",
				mimetype: "image/jpeg",
				width: 800,
				height: 600
			},
			{
				url: "https://picsum.photos/seed/wexio-c/800/600",
				mimetype: "image/jpeg",
				width: 800,
				height: 600
			},
			{
				url: "https://picsum.photos/seed/wexio-d/800/600",
				mimetype: "image/jpeg",
				width: 800,
				height: 600
			}
		]
	},
	{
		id: "m-demo-7",
		direction: "OUTBOUND",
		sender: {
			kind: "operator",
			name: "Alex"
		},
		media: [{
			url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
			mimetype: "video/mp4",
			width: 1280,
			height: 720
		}]
	},
	{
		id: "m-demo-8",
		direction: "OUTBOUND",
		sender: {
			kind: "operator",
			name: "Alex"
		},
		media: [{
			url: zl("/sounds/wx-nt_3.mp3"),
			mimetype: "audio/mpeg"
		}]
	},
	{
		id: "m-demo-9",
		direction: "OUTBOUND",
		sender: {
			kind: "operator",
			name: "Alex"
		},
		media: [{
			url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
			mimetype: "application/pdf"
		}]
	},
	{
		id: "m-demo-10",
		direction: "OUTBOUND",
		sender: {
			kind: "ai",
			name: "Gaia"
		},
		buttons: [
			{ payload: "sandbox" },
			{ payload: "book-call" },
			{ payload: "stay" }
		]
	}
];
function Hl(e) {
	let t = e.raw("conversation.visitorName");
	return Vl.map((n) => {
		let r = `conversation.messages.${n.id}`, i = {
			id: n.id,
			direction: n.direction,
			text: e.raw(`${r}.text`),
			ageLabel: e.raw(`${r}.ageLabel`),
			sender: {
				kind: n.sender.kind,
				name: n.sender.kind === "visitor" ? t : n.sender.name ?? ""
			}
		};
		if (n.buttons) {
			let t = e.raw(`${r}.buttons`);
			i.buttons = n.buttons.map((e, n) => ({
				payload: e.payload,
				text: t[n] ?? ""
			}));
		}
		if (n.media) {
			let t = e.raw(`${r}.mediaAlts`);
			i.media = n.media.map((e, n) => ({
				...e,
				alt: t[n] ?? ""
			}));
		}
		return n.deliveryStatus && (i.deliveryStatus = n.deliveryStatus), i;
	});
}
//#endregion
//#region dummy/news.ts
var Ul = [
	{
		id: "demo-news-1",
		publishedAt: "2026-04-30T10:00:00.000Z",
		coverGradient: ["#1e1f21", "#121314"],
		coverImageUrl: "https://picsum.photos/seed/wexio-pioneer/960/600",
		authorIds: ["maya", "sam"],
		categorySlug: "company",
		tagSlugs: ["events", "product"]
	},
	{
		id: "demo-news-2",
		publishedAt: "2026-04-15T10:00:00.000Z",
		coverGradient: ["#1e3a8a", "#0c1e4a"],
		coverImageUrl: "https://picsum.photos/seed/wexio-april/960/600",
		authorIds: ["leo"],
		categorySlug: "product",
		tagSlugs: ["product", "release"]
	},
	{
		id: "demo-news-3",
		publishedAt: "2026-03-22T10:00:00.000Z",
		coverGradient: ["#0f766e", "#042f2e"],
		coverImageUrl: "https://picsum.photos/seed/wexio-langs/960/600",
		authorIds: ["ira", "leo"],
		categorySlug: "product",
		tagSlugs: ["ai", "languages"]
	},
	{
		id: "demo-news-4",
		publishedAt: "2026-03-08T10:00:00.000Z",
		coverGradient: ["#7c3aed", "#2e1065"],
		authorIds: ["leo"],
		categorySlug: "engineering",
		tagSlugs: ["integrations", "slack"]
	},
	{
		id: "demo-news-5",
		publishedAt: "2026-02-18T10:00:00.000Z",
		coverGradient: ["#b45309", "#451a03"],
		coverImageUrl: "https://picsum.photos/seed/wexio-inbox2/960/600",
		authorIds: ["maya"],
		categorySlug: "product",
		tagSlugs: ["inbox", "product"]
	},
	{
		id: "demo-news-6",
		publishedAt: "2026-02-02T10:00:00.000Z",
		coverGradient: ["#155e75", "#083344"],
		authorIds: ["sam"],
		categorySlug: "engineering",
		tagSlugs: ["privacy", "security"]
	},
	{
		id: "demo-news-7",
		publishedAt: "2026-01-20T10:00:00.000Z",
		coverGradient: ["#be185d", "#500724"],
		coverImageUrl: "https://picsum.photos/seed/wexio-mobile/960/600",
		authorIds: ["ira"],
		categorySlug: "product",
		tagSlugs: ["mobile", "beta"]
	},
	{
		id: "demo-news-8",
		publishedAt: "2026-01-05T10:00:00.000Z",
		coverGradient: ["#15803d", "#052e16"],
		authorIds: ["maya", "leo"],
		categorySlug: "engineering",
		tagSlugs: ["ai", "analytics"]
	}
];
function Wl(e) {
	return Ul.map(({ tagSlugs: t, authorIds: n, categorySlug: r, ...i }) => ({
		...i,
		title: e.raw(`news.${i.id}.title`),
		excerpt: e.raw(`news.${i.id}.excerpt`),
		contentMarkdown: e.raw(`news.${i.id}.body`),
		authors: Nl(n),
		category: {
			slug: r,
			label: e.raw(`news.categories.${r}`)
		},
		tags: t.map((t) => ({
			slug: t,
			label: e.raw(`news.tags.${t}`)
		}))
	}));
}
//#endregion
//#region dummy/threads.ts
function Gl(e) {
	let t = Date.now(), n = (e) => (/* @__PURE__ */ new Date(t - e * 6e4)).toISOString(), r = [
		"sandbox",
		"book-call",
		"stay"
	], i = e.raw("conversation.messages.m-demo-10.buttons").map((e, t) => ({
		text: e,
		payload: r[t] ?? ""
	}));
	return [
		{
			chatId: "thread-main",
			threadKey: null,
			status: "OPEN",
			unreadCount: 1,
			updatedAt: n(4),
			preview: {
				text: e.raw("threads.main"),
				at: n(4),
				fromVisitor: !1,
				buttons: i
			},
			senderName: kl,
			lastSenderKind: "ai"
		},
		{
			chatId: "thread-billing",
			threadKey: "demo-thread-billing",
			status: "PENDING",
			unreadCount: 0,
			updatedAt: n(95),
			preview: {
				text: e.raw("threads.billing"),
				at: n(95),
				fromVisitor: !1
			},
			senderName: kl,
			lastSenderKind: "ai"
		},
		{
			chatId: "thread-integrations",
			threadKey: "demo-thread-integrations",
			status: "RESOLVED",
			unreadCount: 0,
			updatedAt: n(1560),
			preview: {
				text: e.raw("threads.integrations"),
				at: n(1560),
				fromVisitor: !0
			},
			senderName: kl,
			lastSenderKind: "visitor"
		}
	];
}
//#endregion
//#region node_modules/@apollo/client/link/context/index.js
wt();
function Kl(e) {
	return new ho(function(t, n) {
		var r = ne(t, []);
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
function ql(e) {
	return new ho(function(t, n) {
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
						}) : to(i) && (o = e({
							protocolErrors: i.extensions[eo],
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
	te(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n.link = ql(t), n;
	}
	return t.prototype.request = function(e, t) {
		return this.link.request(e, t);
	}, t;
})(ho);
//#endregion
//#region lib/api.ts
var Jl = "https://api.wexio.io", Yl = "http://localhost:3001", Xl = "https://local.api.wexio.io:3443";
function Zl() {
	let e = Ql("NEXT_PUBLIC_WEXIO_API_URL");
	if (e) return e;
	if (typeof window < "u") {
		let { protocol: e, hostname: t } = window.location;
		if (e === "https:" && /^local\.[a-z-]+\.wexio\.io$/i.test(t)) return Xl;
		if (e === "https:" && /\.wexio\.io$/i.test(t)) {
			let e = t.replace(/^(app|templates)\./i, "api.").replace(/\.(app|templates)\./i, ".api.");
			return e === t ? Jl : `https://${e}`;
		}
		if (t === "localhost" || t === "127.0.0.1" || t === "[::1]") return Yl;
	}
	return Jl;
}
function Ql(e) {
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
function $l() {
	return Ql("NEXT_PUBLIC_WEXIO_DEMO_PK");
}
var eu = /* @__PURE__ */ new Map();
function tu(e, t) {
	if (!e) return Promise.resolve(null);
	let n = `${e}|${t ?? ""}`, r = eu.get(n);
	if (r) return r;
	let i = (async () => {
		try {
			let n = new URL(`${Zl()}/api/web/config/${encodeURIComponent(e)}`);
			t && n.searchParams.set("locale", t);
			let r = await fetch(n.toString(), {
				method: "GET",
				headers: { "x-web-public-key": e },
				credentials: "omit"
			});
			return r.ok ? ou(await r.json()) : null;
		} catch {
			return null;
		}
	})();
	return eu.set(n, i.then((e) => (e === null && eu.delete(n), e))), eu.get(n) ?? i;
}
var nu = [
	"NAME",
	"EMAIL",
	"PHONE",
	"CUSTOM_TEXT"
], ru = [
	"HINT",
	"SYSTEM",
	"MESSAGE"
];
function iu(e, t) {
	if (e === null || !e) return null;
	let n = Array.isArray(e.commands) ? e.commands.filter((e) => typeof e == "string" && e.length > 0).slice(0, 20) : [], r = Array.isArray(e.messages) ? e.messages.filter((e) => !!e && typeof e.text == "string" && e.text.length > 0 && typeof e.kind == "string" && ru.includes(e.kind)).map((e) => ({
		kind: e.kind,
		text: e.text
	})).slice(0, 10) : [];
	return {
		title: e.title ?? null,
		description: e.description ?? null,
		aiAssistantAvatar: e.aiAssistantAvatar ?? null,
		aiAssistant: (() => {
			let n = e.aiAssistant ?? t;
			return {
				enabled: n?.enabled ?? !0,
				name: n?.name ?? null,
				avatar: n?.avatar ?? e.aiAssistantAvatar ?? null
			};
		})(),
		commands: n,
		messages: r,
		showRelatedNews: e.showRelatedNews ?? !0,
		showRelatedHelpArticles: e.showRelatedHelpArticles ?? !0,
		showReactionCounts: e.showReactionCounts ?? !1,
		profile: Array.isArray(e.profile?.fields) && e.profile.fields.length > 0 ? { fields: e.profile.fields.filter((e) => typeof e == "string") } : null
	};
}
function au(e) {
	if (!e) return null;
	let t = (Array.isArray(e.fields) ? e.fields : []).filter((e) => e && nu.includes(e.kind)).map((e) => ({
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
function ou(e) {
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
		prechatForm: au(e.prechatForm),
		operatorAvatars: Array.isArray(e.operatorAvatars) ? e.operatorAvatars.filter((e) => !!e?.src).map((e) => ({
			src: e.src,
			alt: e.alt ?? ""
		})) : [],
		organizationLogo: e.logo ? {
			light: e.logo.light ?? null,
			dark: e.logo.dark ?? null
		} : null,
		showLogoInLauncher: e.showLogoInLauncher ?? !1,
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
		messenger: iu(e.messenger, e.aiAssistant),
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
var su = /* @__PURE__ */ new Map();
function cu(e) {
	if (!e) return Promise.resolve(null);
	let t = su.get(e);
	if (t) return t;
	let n = (async () => {
		try {
			let t = new URL(`${Zl()}/api/web/config/${encodeURIComponent(e)}`);
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
	return su.set(e, n.then((t) => (t === null && su.delete(e), t))), su.get(e) ?? n;
}
//#endregion
//#region lib/apollo-client.ts
var lu = null, uu = null;
function du(e) {
	lu = e;
}
function fu() {
	return lu;
}
var pu = null;
function mu(e) {
	pu = e;
}
var hu = null;
function gu(e) {
	hu = e;
}
var _u = new Set([
	"StartAnonymousVisitor",
	"StartIdentifiedVisitor",
	"VisitorPasskeyRegistrationOptions",
	"VerifyVisitorPasskeyRegistration",
	"VisitorPasskeyAuthenticationOptions",
	"VerifyVisitorPasskeyAuthentication"
]);
function vu(e) {
	uu = e;
}
function yu() {
	return uu;
}
var bu = null;
function xu() {
	if (bu) return bu;
	let e = new Go({
		uri: `${Zl()}/graphql`,
		credentials: "omit"
	}), t = Kl((e, { headers: t }) => ({ headers: {
		...t,
		...uu ? { "x-web-public-key": uu } : {},
		...lu ? { authorization: `Bearer ${lu}` } : {}
	} }));
	return bu = new Ic({
		link: go([
			ql(({ operation: e, graphQLErrors: t, networkError: n }) => {
				if (_u.has(e.operationName)) return;
				let r = n && "statusCode" in n ? n.statusCode : void 0;
				if ((t ?? []).some((e) => {
					let t = e.extensions;
					if (t?.code === "webIntegrationMismatch") return !0;
					let n = t?.response?.message;
					return !!(typeof n == "string" && n.includes("webIntegrationMismatch") || Array.isArray(n) && n.some((e) => typeof e == "string" && e.includes("webIntegrationMismatch")));
				})) {
					hu?.();
					return;
				}
				(r === 401 || (t ?? []).some((e) => {
					let t = e.extensions;
					return t?.code === "UNAUTHENTICATED" || t?.response?.statusCode === 401 || e.message === "Unauthorized";
				})) && pu?.();
			}),
			t,
			e
		]),
		cache: new yc({ typePolicies: {} }),
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
	}), bu;
}
//#endregion
//#region lib/graphql/queries/generated/messaging.generated.tsx
var Su = {}, Cu = G`
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
    blocked
  }
}
    `;
function wu(e) {
	return Ol(Cu, {
		...Su,
		...e
	});
}
var Tu = G`
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
    blocked
  }
}
    `;
function Eu(e) {
	return Ol(Tu, {
		...Su,
		...e
	});
}
var Du = G`
    mutation SendVisitorMessage($input: VisitorSendMessageInput!) {
  sendVisitorMessage(input: $input) {
    ok
    messageId
    chatId
  }
}
    `;
function Ou(e) {
	return Ol(Du, {
		...Su,
		...e
	});
}
var ku = G`
    query VisitorThreads($pagination: SocialPaginationInput, $filter: ThreadFilter) {
  visitorThreads(pagination: $pagination, filter: $filter) {
    visitorBlocked
    threads {
      id
      threadKey
      status
      blocked
      unReadCount
      updatedAt
      lastMessagePreview
      lastMessageAt
      lastMessageFromVisitor
      lastMessageSenderKind
      lastMessageSenderName
      lastMessageMediaType
      lastMessageMediaThumbUrl
    }
    nextCursor
    hasNext
  }
}
    `;
function Au(e) {
	return ll(ku, {
		...Su,
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
var ju = G`
    mutation MarkVisitorChatRead($chatId: String!) {
  markVisitorChatRead(chatId: $chatId) {
    count
  }
}
    `;
function Mu(e) {
	return Ol(ju, {
		...Su,
		...e
	});
}
G`
    query VisitorChatUnread($chatId: String!) {
  visitorChatUnread(chatId: $chatId) {
    count
    lastMessage {
      id
      text
      caption
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
var Nu = G`
    mutation SignalVisitorTyping($chatId: String) {
  signalVisitorTyping(chatId: $chatId) {
    ok
  }
}
    `;
function Pu(e) {
	return Ol(Nu, {
		...Su,
		...e
	});
}
var Fu = G`
    mutation UploadVisitorMedia($input: VisitorUploadInputType!) {
  uploadVisitorMedia(input: $input) {
    url
    mediaId
    mimetype
    size
  }
}
    `;
function Iu(e) {
	return Ol(Fu, {
		...Su,
		...e
	});
}
var Lu = G`
    mutation RemoveVisitorMedia($mediaId: ID!) {
  removeVisitorMedia(mediaId: $mediaId) {
    ok
  }
}
    `;
function Ru(e) {
	return Ol(Lu, {
		...Su,
		...e
	});
}
var zu = G`
    mutation SubmitVisitorPrechat($input: VisitorPrechatInput!) {
  submitVisitorPrechat(input: $input) {
    ok
  }
}
    `;
function Bu(e) {
	return Ol(zu, {
		...Su,
		...e
	});
}
var Vu = G`
    query VisitorChatHistory($chatId: String!, $before: String, $limit: Int) {
  visitorChatHistory(chatId: $chatId, before: $before, limit: $limit)
}
    `, Hu = G`
    query VisitorChatTranscript($chatId: String!) {
  visitorChatTranscript(chatId: $chatId)
}
    `;
function Uu(e) {
	return ll(Vu, {
		...Su,
		...e
	});
}
var Wu = G`
    query VisitorChatRecentInbound($chatId: String!) {
  visitorChatRecentInbound(chatId: $chatId) {
    id
    text
    caption
    createdAt
    sender {
      kind
      name
      avatar
    }
  }
}
    `;
function Gu(e) {
	return ll(Wu, {
		...Su,
		...e
	});
}
var Ku = G`
    query VisitorChatAssignment($chatId: String!) {
  visitorChatAssignment(chatId: $chatId) {
    assignedStatus
    blocked
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
function qu(e) {
	return ll(Ku, {
		...Su,
		...e
	});
}
var Ju = G`
    mutation ResolveVisitorChat($chatId: String!) {
  resolveVisitorChat(chatId: $chatId) {
    ok
  }
}
    `;
function Yu(e) {
	return Ol(Ju, {
		...Su,
		...e
	});
}
var Xu = G`
    mutation TrackVisitorPageView($input: TrackVisitorPageViewInput!) {
  trackVisitorPageView(input: $input) {
    ok
  }
}
    `;
function Zu(e) {
	return Ol(Xu, {
		...Su,
		...e
	});
}
var Qu = G`
    mutation TrackVisitorLinkClick($input: TrackVisitorLinkClickInput!) {
  trackVisitorLinkClick(input: $input) {
    ok
  }
}
    `;
function $u(e) {
	return Ol(Qu, {
		...Su,
		...e
	});
}
//#endregion
//#region lib/graphql/queries/generated/reactions.generated.tsx
var ed = {}, td = G`
    query VisitorReactionSet($surface: ReactionSurface!) {
  visitorReactionSet(surface: $surface) {
    _id
    surface
    enabled
    slots {
      slotIndex
      emoji
      sentiment
    }
  }
}
    `;
function nd(e) {
	return ll(td, {
		...ed,
		...e
	});
}
var rd = G`
    mutation SubmitVisitorReaction($input: VisitorReactionInput!) {
  submitVisitorReaction(input: $input) {
    ok
  }
}
    `;
function id(e) {
	return Ol(rd, {
		...ed,
		...e
	});
}
//#endregion
//#region lib/offline-cache.ts
var ad = "wexio-cache", od = "kv", sd = 1, cd = {
	config: (e, t) => `config:${e}:${t}`,
	news: (e, t) => `news:${e}:${t}`,
	newsPost: (e, t, n) => `news-post:${e}:${t}:${n}`,
	article: (e, t, n) => `article:${e}:${t}:${n}`,
	helpCategories: (e, t) => `help-categories:${e}:${t}`,
	helpRoot: (e, t) => `help-root:${e}:${t}`,
	home: (e, t, n) => `home:${e}:${t}:${n}`
}, ld = 336 * 60 * 60 * 1e3;
function ud(e) {
	return !!e && typeof e == "object" && typeof e.at == "number";
}
function dd() {
	let e = /* @__PURE__ */ new Map();
	return {
		get: (t) => Promise.resolve(e.get(t) ?? null),
		set: (t, n) => (e.set(t, n), Promise.resolve()),
		prune: (t) => {
			for (let [n, r] of e) r.at < t && e.delete(n);
			return Promise.resolve();
		}
	};
}
function fd() {
	return typeof indexedDB > "u" ? Promise.resolve(null) : new Promise((e) => {
		let t;
		try {
			t = indexedDB.open(ad, sd);
		} catch {
			e(null);
			return;
		}
		t.onupgradeneeded = () => {
			let e = t.result;
			e.objectStoreNames.contains(od) || e.createObjectStore(od);
		}, t.onsuccess = () => e(t.result), t.onerror = () => e(null), t.onblocked = () => e(null);
	});
}
var pd = {
	get: (e) => fd().then((t) => new Promise((n) => {
		if (!t) {
			n(null);
			return;
		}
		try {
			let r = t.transaction(od, "readonly").objectStore(od).get(e);
			r.onsuccess = () => n(ud(r.result) ? r.result : null), r.onerror = () => n(null);
		} catch {
			n(null);
		}
	})),
	set: (e, t) => fd().then((n) => new Promise((r) => {
		if (!n) {
			r();
			return;
		}
		try {
			let i = n.transaction(od, "readwrite");
			i.objectStore(od).put(t, e), i.oncomplete = () => r(), i.onerror = () => r(), i.onabort = () => r();
		} catch {
			r();
		}
	})),
	prune: (e) => fd().then((t) => new Promise((n) => {
		if (!t) {
			n();
			return;
		}
		try {
			let r = t.transaction(od, "readwrite"), i = r.objectStore(od).openCursor();
			i.onsuccess = () => {
				let t = i.result;
				if (!t) return;
				let n = t.value;
				(!ud(n) || n.at < e) && t.delete(), t.continue();
			}, r.oncomplete = () => n(), r.onerror = () => n(), r.onabort = () => n();
		} catch {
			n();
		}
	}))
};
function md() {
	return typeof indexedDB > "u" ? dd() : pd;
}
var hd = md(), gd = !1;
function _d() {
	gd || (gd = !0, hd.prune(Date.now() - ld).catch(() => void 0));
}
async function vd(e) {
	_d();
	try {
		let t = await hd.get(e);
		return !t || Date.now() - t.at > 12096e5 ? null : t.v;
	} catch {
		return null;
	}
}
function yd(e, t) {
	return _d(), hd.set(e, {
		v: t,
		at: Date.now()
	}).catch(() => void 0);
}
//#endregion
//#region lib/outbox-context.tsx
var bd = m(null), xd = bd.Provider;
function Sd() {
	return _(bd);
}
//#endregion
//#region lib/use-widget-env.tsx
function Cd() {
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
var wd = m(null);
function Td({ env: e, children: t }) {
	return /* @__PURE__ */ w(wd.Provider, {
		value: e,
		children: t
	});
}
function Ed() {
	return _(wd) ?? Cd();
}
//#endregion
//#region lib/theme-font.ts
var Dd = {
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
function Od(e) {
	if (!e || typeof document > "u") return;
	let t = e.split(",")[0]?.trim().replace(/^['"]|['"]$/g, "");
	if (!t) return;
	let n = Dd[t.toLowerCase()];
	if (!n) return;
	let r = `wexio-font-${t.toLowerCase().replace(/\s+/g, "-")}`;
	if (document.getElementById(r)) return;
	let i = document.createElement("link");
	i.id = r, i.rel = "stylesheet", i.href = `https://fonts.googleapis.com/css2?family=${n}&display=swap`, document.head.appendChild(i);
}
//#endregion
//#region lib/widget-config.ts
var kd = {
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
	showLogoInLauncher: !1,
	greeting: {
		headline: "Hi there 👋",
		subheadline: "How can we help?"
	},
	homeLayout: [
		{
			kind: "team-status",
			showResponseTime: !0,
			showOperatorAvatars: !0,
			presence: "HUMAN",
			responseTime: "MINUTES"
		},
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
	],
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
		aiAssistantAvatar: zl("/logo-dark.png"),
		aiAssistant: {
			enabled: !0,
			name: null,
			avatar: zl("/logo-dark.png")
		},
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
}, Ad = [
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
function jd() {
	let e = Ed(), t = l(), [n, r] = S({
		mode: "demo",
		config: kd,
		isDummy: !0,
		isLoading: !0,
		error: null
	}), [i, a] = S(null);
	v(() => {
		let n = new URL(window.location.href), i = n.searchParams.get("pk") ?? void 0, o = n.searchParams.get("mode"), s = e.modeOverride === "demo", c = s ? void 0 : $l() || void 0, l = s ? void 0 : e.publicKeyOverride ?? i ?? c, u = l === "pk_demo" ? void 0 : l, d = e.modeOverride ?? (u ? "production" : o === "preview" ? "preview" : "demo"), f = !1;
		if ((async () => {
			if (e.configBase) {
				let t = u ? await cu(u) : null;
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
					config: kd,
					isDummy: e.forceDummyData,
					isLoading: !1,
					error: null
				});
				return;
			}
			if (u) {
				let e = await tu(u, t);
				if (f) return;
				if (e) {
					r({
						mode: d,
						config: e,
						isDummy: !1,
						isLoading: !1,
						error: null
					}), yd(cd.config(u, t), e);
					return;
				}
				let n = await vd(cd.config(u, t));
				if (f) return;
				if (n) {
					r({
						mode: d,
						config: n,
						isDummy: !1,
						isLoading: !1,
						error: null
					});
					return;
				}
				r({
					mode: d,
					config: kd,
					isDummy: !0,
					isLoading: !1,
					error: "publicKeyInvalid"
				});
				return;
			}
			r({
				mode: d,
				config: kd,
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
			t && a((e) => Md(e ?? {}, t));
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
	let o = n.isDummy || e.forceDummyData === !0, s = b(() => {
		let t = n.config;
		return i && (t = Md(t, i)), e.configOverride && (t = Md(t, e.configOverride)), o && t.operatorAvatars.length === 0 && (t = {
			...t,
			operatorAvatars: kd.operatorAvatars
		}), t;
	}, [
		n.config,
		i,
		e.configOverride,
		o
	]), c = e.styleRoot;
	y(() => {
		s.theme && zd(s.theme, c ?? document);
	}, [s.theme, c]), v(() => {
		s.theme && Od(s.theme.fontFamily);
	}, [s.theme]);
	let u = e.onLocaleStrategy;
	return v(() => {
		let e = s.localeStrategy === "DEFAULT" ? s.defaultLocale : s.localeStrategy;
		u?.(e);
	}, [
		u,
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
function Md(e, t) {
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
		messenger: t.messenger === void 0 ? e.messenger : t.messenger === null ? null : {
			...e.messenger ?? {},
			...t.messenger
		},
		tracking: t.tracking === void 0 ? e.tracking : {
			...e.tracking ?? {},
			...t.tracking ?? {}
		},
		theme: t.theme === void 0 ? e.theme : t.theme
	};
}
var Nd = {
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
}, Pd = {
	sm: "--wx-radius-sm",
	md: "--wx-radius",
	lg: "--wx-radius-lg",
	xl: "--wx-radius-xl"
};
function Fd(e) {
	return e ? Object.entries(e).filter(([, e]) => typeof e == "string" && e.length > 0).map(([e, t]) => `${Nd[e]}: ${t};`).join(" ") : "";
}
function Id(e) {
	return e ? Object.entries(e).filter(([, e]) => typeof e == "number" && Number.isFinite(e)).map(([e, t]) => `${Pd[e]}: ${t}px;`).join(" ") : "";
}
var Ld = /* @__PURE__ */ new WeakMap();
function Rd(e) {
	let t = [Id(e.radii), typeof e.fontFamily == "string" && e.fontFamily.trim().length > 0 ? `--wx-font: ${e.fontFamily};` : ""].filter(Boolean).join(" "), n = [Fd(e.light), t].filter(Boolean).join(" "), r = [Fd(e.dark), t].filter(Boolean).join(" "), i = [];
	return n && i.push(`:root, :host { ${n} }`), r && i.push(`[data-theme="dark"] { ${r} }`), i.join(" ");
}
function zd(e, t) {
	let n = Rd(e);
	if (!(t instanceof Document)) {
		let e = t;
		if (typeof CSSStyleSheet < "u" && "replaceSync" in CSSStyleSheet.prototype) {
			let t = Ld.get(e);
			t || (t = new CSSStyleSheet(), Ld.set(e, t), e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]), t.replaceSync(n);
			return;
		}
		let r = e.querySelector("#wexio-theme-vars");
		r || (r = document.createElement("style"), r.id = "wexio-theme-vars", e.appendChild(r)), r.textContent = n;
		return;
	}
	let r = t.getElementById("wexio-theme-vars");
	r || (r = document.createElement("style"), r.id = "wexio-theme-vars", t.head.appendChild(r)), r.textContent = n;
}
var Bd = u("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Vd = u("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Hd = u("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), Ud = u("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Wd = u("globe", [
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
]);
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function Gd(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function Kd(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Gd(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Gd(e[t], null);
			}
		};
	};
}
function qd(...e) {
	return p.useCallback(Kd(...e), e);
}
//#endregion
//#region components/ui/card.tsx
var Jd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: c("rounded-wx-lg bg-wx-bg-elevated text-wx-fg", e),
	...t
}));
Jd.displayName = "Card";
var Yd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: c("rounded-wx bg-wx-bg-elevated-2 text-wx-fg", e),
	...t
}));
Yd.displayName = "CardNested";
var Xd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: c("flex flex-col gap-1 px-5 pt-5", e),
	...t
}));
Xd.displayName = "CardHeader";
var Zd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("p", {
	ref: n,
	className: c("text-base font-semibold text-wx-fg", e),
	...t
}));
Zd.displayName = "CardTitle";
var Qd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("p", {
	ref: n,
	className: c("text-sm text-wx-fg-muted", e),
	...t
}));
Qd.displayName = "CardSubtitle";
var $d = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: c("px-5 py-4", e),
	...t
}));
$d.displayName = "CardBody";
var ef = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w("div", {
	ref: n,
	className: c("flex items-center justify-between px-5 py-3 border-t border-wx-border", e),
	...t
}));
ef.displayName = "CardFooter";
//#endregion
//#region node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function tf(e) {
	let t = /* @__PURE__ */ nf(e), n = p.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = p.Children.toArray(r), o = a.find(af);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? p.Children.count(e) > 1 ? p.Children.only(null) : p.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ w(t, {
				...i,
				ref: n,
				children: p.isValidElement(e) ? p.cloneElement(e, void 0, r) : null
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
function nf(e) {
	let t = p.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (p.isValidElement(n)) {
			let e = sf(n), i = of(r, n.props);
			return n.type !== p.Fragment && (i.ref = t ? Kd(t, e) : e), p.cloneElement(n, i);
		}
		return p.Children.count(n) > 1 ? p.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var rf = Symbol("radix.slottable");
function af(e) {
	return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === rf;
}
function of(e, t) {
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
function sf(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var cf = [
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
	let n = /* @__PURE__ */ tf(`Primitive.${t}`), r = p.forwardRef((e, r) => {
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
function lf(e, t) {
	e && E.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var uf = globalThis?.document ? p.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
function df(e, t) {
	return p.useReducer((e, n) => t[e][n] ?? e, e);
}
var ff = (e) => {
	let { present: t, children: n } = e, r = pf(t), i = typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n), a = qd(r.ref, hf(i));
	return typeof n == "function" || r.isPresent ? p.cloneElement(i, { ref: a }) : null;
};
ff.displayName = "Presence";
function pf(e) {
	let [t, n] = p.useState(), r = p.useRef(null), i = p.useRef(e), a = p.useRef("none"), [o, s] = df(e ? "mounted" : "unmounted", {
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
	return p.useEffect(() => {
		let e = mf(r.current);
		a.current = o === "mounted" ? e : "none";
	}, [o]), uf(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = mf(t);
			e ? s("MOUNT") : o === "none" || t?.display === "none" ? s("UNMOUNT") : s(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, s]), uf(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = mf(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (s("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = mf(r.current));
			};
			return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		} else s("ANIMATION_END");
	}, [t, s]), {
		isPresent: ["mounted", "unmountSuspended"].includes(o),
		ref: p.useCallback((e) => {
			r.current = e ? getComputedStyle(e) : null, n(e);
		}, [])
	};
}
function mf(e) {
	return e?.animationName || "none";
}
function hf(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
function gf(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = p.createContext(r), a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = p.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ w(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = p.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => p.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return p.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, _f(i, ...t)];
}
function _f(...e) {
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
			return p.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function vf(e) {
	let t = p.useRef(e);
	return p.useEffect(() => {
		t.current = e;
	}), p.useMemo(() => (...e) => t.current?.(...e), []);
}
//#endregion
//#region node_modules/@radix-ui/react-direction/dist/index.mjs
var yf = p.createContext(void 0);
function bf(e) {
	let t = p.useContext(yf);
	return e || t || "ltr";
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
function xf(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
typeof window < "u" && window.document && window.document.createElement;
function Sf(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region node_modules/@radix-ui/react-scroll-area/dist/index.mjs
function Cf(e, t) {
	return p.useReducer((e, n) => t[e][n] ?? e, e);
}
var wf = "ScrollArea", [Tf, Ef] = gf(wf), [Df, Of] = Tf(wf), kf = p.forwardRef((e, t) => {
	let { __scopeScrollArea: n, type: r = "hover", dir: i, scrollHideDelay: a = 600, ...o } = e, [s, c] = p.useState(null), [l, u] = p.useState(null), [d, f] = p.useState(null), [m, h] = p.useState(null), [g, _] = p.useState(null), [v, y] = p.useState(0), [b, x] = p.useState(0), [S, C] = p.useState(!1), [T, E] = p.useState(!1), ee = qd(t, (e) => c(e)), D = bf(i);
	return /* @__PURE__ */ w(Df, {
		scope: n,
		type: r,
		dir: D,
		scrollHideDelay: a,
		scrollArea: s,
		viewport: l,
		onViewportChange: u,
		content: d,
		onContentChange: f,
		scrollbarX: m,
		onScrollbarXChange: h,
		scrollbarXEnabled: S,
		onScrollbarXEnabledChange: C,
		scrollbarY: g,
		onScrollbarYChange: _,
		scrollbarYEnabled: T,
		onScrollbarYEnabledChange: E,
		onCornerWidthChange: y,
		onCornerHeightChange: x,
		children: /* @__PURE__ */ w(cf.div, {
			dir: D,
			...o,
			ref: ee,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": v + "px",
				"--radix-scroll-area-corner-height": b + "px",
				...e.style
			}
		})
	});
});
kf.displayName = wf;
var Af = "ScrollAreaViewport", jf = p.forwardRef((e, t) => {
	let { __scopeScrollArea: n, children: r, nonce: i, ...a } = e, o = Of(Af, n), s = qd(t, p.useRef(null), o.onViewportChange);
	return /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
		nonce: i
	}), /* @__PURE__ */ w(cf.div, {
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
jf.displayName = Af;
var Mf = "ScrollAreaScrollbar", Nf = p.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Of(Mf, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: o } = i, s = e.orientation === "horizontal";
	return p.useEffect(() => (s ? a(!0) : o(!0), () => {
		s ? a(!1) : o(!1);
	}), [
		s,
		a,
		o
	]), i.type === "hover" ? /* @__PURE__ */ w(Pf, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "scroll" ? /* @__PURE__ */ w(Ff, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "auto" ? /* @__PURE__ */ w(If, {
		...r,
		ref: t,
		forceMount: n
	}) : i.type === "always" ? /* @__PURE__ */ w(Lf, {
		...r,
		ref: t
	}) : null;
});
Nf.displayName = Mf;
var Pf = p.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Of(Mf, e.__scopeScrollArea), [a, o] = p.useState(!1);
	return p.useEffect(() => {
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
	}, [i.scrollArea, i.scrollHideDelay]), /* @__PURE__ */ w(ff, {
		present: n || a,
		children: /* @__PURE__ */ w(If, {
			"data-state": a ? "visible" : "hidden",
			...r,
			ref: t
		})
	});
}), Ff = p.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Of(Mf, e.__scopeScrollArea), a = e.orientation === "horizontal", o = rp(() => c("SCROLL_END"), 100), [s, c] = Cf("hidden", {
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
	return p.useEffect(() => {
		if (s === "idle") {
			let e = window.setTimeout(() => c("HIDE"), i.scrollHideDelay);
			return () => window.clearTimeout(e);
		}
	}, [
		s,
		i.scrollHideDelay,
		c
	]), p.useEffect(() => {
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
	]), /* @__PURE__ */ w(ff, {
		present: n || s !== "hidden",
		children: /* @__PURE__ */ w(Lf, {
			"data-state": s === "hidden" ? "hidden" : "visible",
			...r,
			ref: t,
			onPointerEnter: Sf(e.onPointerEnter, () => c("POINTER_ENTER")),
			onPointerLeave: Sf(e.onPointerLeave, () => c("POINTER_LEAVE"))
		})
	});
}), If = p.forwardRef((e, t) => {
	let n = Of(Mf, e.__scopeScrollArea), { forceMount: r, ...i } = e, [a, o] = p.useState(!1), s = e.orientation === "horizontal", c = rp(() => {
		if (n.viewport) {
			let e = n.viewport.offsetWidth < n.viewport.scrollWidth, t = n.viewport.offsetHeight < n.viewport.scrollHeight;
			o(s ? e : t);
		}
	}, 10);
	return ip(n.viewport, c), ip(n.content, c), /* @__PURE__ */ w(ff, {
		present: r || a,
		children: /* @__PURE__ */ w(Lf, {
			"data-state": a ? "visible" : "hidden",
			...i,
			ref: t
		})
	});
}), Lf = p.forwardRef((e, t) => {
	let { orientation: n = "vertical", ...r } = e, i = Of(Mf, e.__scopeScrollArea), a = p.useRef(null), o = p.useRef(0), [s, c] = p.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), l = Xf(s.viewport, s.content), u = {
		...r,
		sizes: s,
		onSizesChange: c,
		hasThumb: l > 0 && l < 1,
		onThumbChange: (e) => a.current = e,
		onThumbPointerUp: () => o.current = 0,
		onThumbPointerDown: (e) => o.current = e
	};
	function d(e, t) {
		return Qf(e, o.current, s, t);
	}
	return n === "horizontal" ? /* @__PURE__ */ w(Rf, {
		...u,
		ref: t,
		onThumbPositionChange: () => {
			if (i.viewport && a.current) {
				let e = i.viewport.scrollLeft, t = $f(e, s, i.dir);
				a.current.style.transform = `translate3d(${t}px, 0, 0)`;
			}
		},
		onWheelScroll: (e) => {
			i.viewport && (i.viewport.scrollLeft = e);
		},
		onDragScroll: (e) => {
			i.viewport && (i.viewport.scrollLeft = d(e, i.dir));
		}
	}) : n === "vertical" ? /* @__PURE__ */ w(zf, {
		...u,
		ref: t,
		onThumbPositionChange: () => {
			if (i.viewport && a.current) {
				let e = i.viewport.scrollTop, t = $f(e, s);
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
}), Rf = p.forwardRef((e, t) => {
	let { sizes: n, onSizesChange: r, ...i } = e, a = Of(Mf, e.__scopeScrollArea), [o, s] = p.useState(), c = p.useRef(null), l = qd(t, c, a.onScrollbarXChange);
	return p.useEffect(() => {
		c.current && s(getComputedStyle(c.current));
	}, [c]), /* @__PURE__ */ w(Hf, {
		"data-orientation": "horizontal",
		...i,
		ref: l,
		sizes: n,
		style: {
			bottom: 0,
			left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": Zf(n) + "px",
			...e.style
		},
		onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
		onDragScroll: (t) => e.onDragScroll(t.x),
		onWheelScroll: (t, n) => {
			if (a.viewport) {
				let r = a.viewport.scrollLeft + t.deltaX;
				e.onWheelScroll(r), tp(r, n) && t.preventDefault();
			}
		},
		onResize: () => {
			c.current && a.viewport && o && r({
				content: a.viewport.scrollWidth,
				viewport: a.viewport.offsetWidth,
				scrollbar: {
					size: c.current.clientWidth,
					paddingStart: Yf(o.paddingLeft),
					paddingEnd: Yf(o.paddingRight)
				}
			});
		}
	});
}), zf = p.forwardRef((e, t) => {
	let { sizes: n, onSizesChange: r, ...i } = e, a = Of(Mf, e.__scopeScrollArea), [o, s] = p.useState(), c = p.useRef(null), l = qd(t, c, a.onScrollbarYChange);
	return p.useEffect(() => {
		c.current && s(getComputedStyle(c.current));
	}, [c]), /* @__PURE__ */ w(Hf, {
		"data-orientation": "vertical",
		...i,
		ref: l,
		sizes: n,
		style: {
			top: 0,
			right: a.dir === "ltr" ? 0 : void 0,
			left: a.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": Zf(n) + "px",
			...e.style
		},
		onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
		onDragScroll: (t) => e.onDragScroll(t.y),
		onWheelScroll: (t, n) => {
			if (a.viewport) {
				let r = a.viewport.scrollTop + t.deltaY;
				e.onWheelScroll(r), tp(r, n) && t.preventDefault();
			}
		},
		onResize: () => {
			c.current && a.viewport && o && r({
				content: a.viewport.scrollHeight,
				viewport: a.viewport.offsetHeight,
				scrollbar: {
					size: c.current.clientHeight,
					paddingStart: Yf(o.paddingTop),
					paddingEnd: Yf(o.paddingBottom)
				}
			});
		}
	});
}), [Bf, Vf] = Tf(Mf), Hf = p.forwardRef((e, t) => {
	let { __scopeScrollArea: n, sizes: r, hasThumb: i, onThumbChange: a, onThumbPointerUp: o, onThumbPointerDown: s, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...f } = e, m = Of(Mf, n), [h, g] = p.useState(null), _ = qd(t, (e) => g(e)), v = p.useRef(null), y = p.useRef(""), b = m.viewport, x = r.content - r.viewport, S = vf(u), C = vf(c), T = rp(d, 10);
	function E(e) {
		v.current && l({
			x: e.clientX - v.current.left,
			y: e.clientY - v.current.top
		});
	}
	return p.useEffect(() => {
		let e = (e) => {
			let t = e.target;
			h?.contains(t) && S(e, x);
		};
		return document.addEventListener("wheel", e, { passive: !1 }), () => document.removeEventListener("wheel", e, { passive: !1 });
	}, [
		b,
		h,
		x,
		S
	]), p.useEffect(C, [r, C]), ip(h, T), ip(m.content, T), /* @__PURE__ */ w(Bf, {
		scope: n,
		scrollbar: h,
		hasThumb: i,
		onThumbChange: vf(a),
		onThumbPointerUp: vf(o),
		onThumbPositionChange: C,
		onThumbPointerDown: vf(s),
		children: /* @__PURE__ */ w(cf.div, {
			...f,
			ref: _,
			style: {
				position: "absolute",
				...f.style
			},
			onPointerDown: Sf(e.onPointerDown, (e) => {
				e.button === 0 && (e.target.setPointerCapture(e.pointerId), v.current = h.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), E(e));
			}),
			onPointerMove: Sf(e.onPointerMove, E),
			onPointerUp: Sf(e.onPointerUp, (e) => {
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = y.current, m.viewport && (m.viewport.style.scrollBehavior = ""), v.current = null;
			})
		})
	});
}), Uf = "ScrollAreaThumb", Wf = p.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Vf(Uf, e.__scopeScrollArea);
	return /* @__PURE__ */ w(ff, {
		present: n || i.hasThumb,
		children: /* @__PURE__ */ w(Gf, {
			ref: t,
			...r
		})
	});
}), Gf = p.forwardRef((e, t) => {
	let { __scopeScrollArea: n, style: r, ...i } = e, a = Of(Uf, n), o = Vf(Uf, n), { onThumbPositionChange: s } = o, c = qd(t, (e) => o.onThumbChange(e)), l = p.useRef(void 0), u = rp(() => {
		l.current && (l.current(), l.current = void 0);
	}, 100);
	return p.useEffect(() => {
		let e = a.viewport;
		if (e) {
			let t = () => {
				u(), l.current || (l.current = np(e, s), s());
			};
			return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
		}
	}, [
		a.viewport,
		u,
		s
	]), /* @__PURE__ */ w(cf.div, {
		"data-state": o.hasThumb ? "visible" : "hidden",
		...i,
		ref: c,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...r
		},
		onPointerDownCapture: Sf(e.onPointerDownCapture, (e) => {
			let t = e.target.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top;
			o.onThumbPointerDown({
				x: n,
				y: r
			});
		}),
		onPointerUp: Sf(e.onPointerUp, o.onThumbPointerUp)
	});
});
Wf.displayName = Uf;
var Kf = "ScrollAreaCorner", qf = p.forwardRef((e, t) => {
	let n = Of(Kf, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
	return n.type !== "scroll" && r ? /* @__PURE__ */ w(Jf, {
		...e,
		ref: t
	}) : null;
});
qf.displayName = Kf;
var Jf = p.forwardRef((e, t) => {
	let { __scopeScrollArea: n, ...r } = e, i = Of(Kf, n), [a, o] = p.useState(0), [s, c] = p.useState(0), l = !!(a && s);
	return ip(i.scrollbarX, () => {
		let e = i.scrollbarX?.offsetHeight || 0;
		i.onCornerHeightChange(e), c(e);
	}), ip(i.scrollbarY, () => {
		let e = i.scrollbarY?.offsetWidth || 0;
		i.onCornerWidthChange(e), o(e);
	}), l ? /* @__PURE__ */ w(cf.div, {
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
function Yf(e) {
	return e ? parseInt(e, 10) : 0;
}
function Xf(e, t) {
	let n = e / t;
	return isNaN(n) ? 0 : n;
}
function Zf(e) {
	let t = Xf(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
	return Math.max(r, 18);
}
function Qf(e, t, n, r = "ltr") {
	let i = Zf(n), a = i / 2, o = t || a, s = i - o, c = n.scrollbar.paddingStart + o, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
	return ep([c, l], d)(e);
}
function $f(e, t, n = "ltr") {
	let r = Zf(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, o = t.content - t.viewport, s = a - r, c = xf(e, n === "ltr" ? [0, o] : [o * -1, 0]);
	return ep([0, o], [0, s])(c);
}
function ep(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function tp(e, t) {
	return e > 0 && e < t;
}
var np = (e, t = () => {}) => {
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
function rp(e, t) {
	let n = vf(e), r = p.useRef(0);
	return p.useEffect(() => () => window.clearTimeout(r.current), []), p.useCallback(() => {
		window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
	}, [n, t]);
}
function ip(e, t) {
	let n = vf(t);
	uf(() => {
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
var ap = kf, op = jf, sp = qf;
//#endregion
//#region components/ui/scroll-area.tsx
function cp({ className: e, viewportRef: t, children: n, onScroll: r, ...i }) {
	return /* @__PURE__ */ T(ap, {
		"data-slot": "scroll-area",
		className: c("relative min-h-0 min-w-0 overflow-hidden", e),
		...i,
		children: [
			/* @__PURE__ */ w(op, {
				ref: t,
				"data-slot": "scroll-area-viewport",
				onScroll: r,
				className: c("h-full w-full rounded-[inherit]", "[&>div]:!block [&>div]:!w-full [&>div]:!max-w-full", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary/40"),
				children: n
			}),
			/* @__PURE__ */ w(lp, {}),
			/* @__PURE__ */ w(sp, {})
		]
	});
}
function lp({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ w(Nf, {
		"data-slot": "scroll-area-scrollbar",
		orientation: t,
		className: c("flex touch-none select-none transition-opacity duration-150", "opacity-0 data-[state=visible]:opacity-100", "hover:opacity-100", t === "vertical" && "h-full w-1.5 border-l border-l-transparent p-px", t === "horizontal" && "h-1.5 flex-col border-t border-t-transparent p-px", e),
		...n,
		children: /* @__PURE__ */ w(Wf, {
			"data-slot": "scroll-area-thumb",
			className: c("relative flex-1 rounded-full", "bg-wx-fg-muted/40 hover:bg-wx-fg-muted/60 transition-colors")
		})
	});
}
//#endregion
//#region lib/use-offline-data.ts
function up(e, t) {
	let [n, r] = S(null);
	return v(() => {
		if (!e) return;
		if (t != null) {
			r(t), yd(e, t);
			return;
		}
		let n = !1;
		return vd(e).then((e) => {
			!n && e != null && r((t) => t ?? e);
		}), () => {
			n = !0;
		};
	}, [e, t]), t ?? n;
}
//#endregion
//#region lib/visitor-tracking.ts
function dp(e, t) {
	try {
		return new URL(e).pathname.replace(/\/$/, "") === new URL(t).pathname.replace(/\/$/, "");
	} catch {
		return e === t;
	}
}
function fp(e, t, n) {
	let r = [...e, t];
	return r.length > n ? r.slice(r.length - n) : r;
}
//#endregion
//#region components/widget/tracking/tracking-provider.tsx
var pp = m({
	trackPageView: () => {},
	trackLinkClick: () => {}
});
function mp() {
	return _(pp);
}
function hp({ children: e, tracking: t, enabled: n, token: r }) {
	let i = Ed(), [a] = Zu(), [o] = $u(), s = Sd(), c = n && (t?.trackWebsitePages ?? !0), l = n && (t?.trackWidgetLinks ?? !0), u = x([]), d = x(null), f = x(null), p = x(null), m = g((e) => {
		if (s) {
			s.enqueue({
				op: e.kind === "page" ? "trackPageView" : "trackLinkClick",
				semantics: "queue",
				payload: e.input
			});
			return;
		}
		e.kind === "page" ? a({ variables: { input: e.input } }).catch(() => {}) : o({ variables: { input: e.input } }).catch(() => {});
	}, [
		s,
		a,
		o
	]), h = g((e) => {
		s || fu() ? m(e) : u.current = fp(u.current, e, 50);
	}, [s, m]);
	v(() => {
		if (!r) return;
		let e = u.current;
		u.current = [];
		for (let t of e) m(t);
	}, [r, m]), v(() => () => {
		f.current && clearTimeout(f.current);
	}, []);
	let _ = g((e, t) => {
		!c || !e || d.current && dp(d.current, e) || (f.current && clearTimeout(f.current), f.current = setTimeout(() => {
			d.current = e, h({
				kind: "page",
				input: {
					url: e,
					title: t?.title,
					referrer: t?.referrer,
					occurredAt: (/* @__PURE__ */ new Date()).toISOString()
				}
			});
		}, 500));
	}, [c, h]), y = g((e) => {
		!l || !e.url || h({
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
	}, [l, h]);
	return v(() => {
		if (!c || typeof window > "u") return;
		if (i.kind === "iframe") {
			let e = (e) => {
				let t = e.data;
				!t || typeof t != "object" || t.type !== "wexio:host-navigation:v1" || typeof t.url == "string" && _(t.url, {
					title: typeof t.title == "string" ? t.title : void 0,
					referrer: typeof t.referrer == "string" ? t.referrer : void 0
				});
			};
			return window.addEventListener("message", e), () => window.removeEventListener("message", e);
		}
		let e = () => _(window.location.href, {
			title: document.title,
			referrer: document.referrer
		}), t = () => {
			p.current?.();
			let t = document.querySelector("title"), n = !1, r = () => {
				o?.disconnect(), clearTimeout(a), p.current = null;
			}, i = () => {
				n || (n = !0, r(), e());
			}, a = setTimeout(i, 600), o = null;
			t && typeof MutationObserver < "u" && (o = new MutationObserver(i), o.observe(t, {
				childList: !0,
				characterData: !0,
				subtree: !0
			})), p.current = r;
		};
		e();
		let n = window.history.pushState, r = window.history.replaceState;
		return window.history.pushState = function(...e) {
			let r = n.apply(this, e);
			return t(), r;
		}, window.history.replaceState = function(...e) {
			let n = r.apply(this, e);
			return t(), n;
		}, window.addEventListener("popstate", t), window.addEventListener("hashchange", t), () => {
			p.current?.(), window.history.pushState = n, window.history.replaceState = r, window.removeEventListener("popstate", t), window.removeEventListener("hashchange", t);
		};
	}, [
		c,
		i.kind,
		_
	]), /* @__PURE__ */ w(pp.Provider, {
		value: {
			trackPageView: _,
			trackLinkClick: y
		},
		children: e
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message/media-lightbox.tsx
function gp({ items: e, initialIndex: t, open: n, onClose: r }) {
	let i = s("lightbox"), [a, l] = S(t), u = Ed(), p = !(u.embedded ?? !1) || (u.lightboxViewport ?? !0);
	v(() => {
		n && l(t);
	}, [n, t]);
	let m = e.length, h = e[a], _ = g(() => {
		l((e) => (e + 1) % m);
	}, [m]), y = g(() => {
		l((e) => (e - 1 + m) % m);
	}, [m]);
	v(() => {
		if (!n) return;
		let e = (e) => {
			e.key === "Escape" ? r() : e.key === "ArrowRight" ? _() : e.key === "ArrowLeft" && y();
		};
		document.addEventListener("keydown", e);
		let t = document.body.style.overflow;
		return p && (document.body.style.overflow = "hidden"), () => {
			document.removeEventListener("keydown", e), p && (document.body.style.overflow = t);
		};
	}, [
		n,
		r,
		_,
		y,
		p
	]);
	let b = u.themeRoot ?? (typeof document < "u" ? document.body : null);
	return b ? ee(/* @__PURE__ */ w(d, { children: n && h && /* @__PURE__ */ T(o.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .15 },
		onClick: r,
		className: c(p ? "fixed" : "absolute", "inset-0 z-2147483647 flex items-center justify-center", "bg-black/85 backdrop-blur-sm"),
		role: "dialog",
		"aria-modal": "true",
		"aria-label": h.alt || i("mediaPreview"),
		children: [
			/* @__PURE__ */ w("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), r();
				},
				"aria-label": i("close"),
				className: c("absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ w(f, { size: 18 })
			}),
			m > 1 && /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), y();
				},
				"aria-label": i("previous"),
				className: c("absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ w(Hd, { size: 20 })
			}), /* @__PURE__ */ w("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), _();
				},
				"aria-label": i("next"),
				className: c("absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full", "bg-white/10 text-white transition-colors hover:bg-white/20"),
				children: /* @__PURE__ */ w(Ud, { size: 20 })
			})] }),
			/* @__PURE__ */ w(o.div, {
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
				className: c("pointer-events-none flex items-center justify-center", p ? "max-h-[90vh] max-w-[90vw]" : "absolute inset-0 p-6"),
				children: h.mimetype.startsWith("video/") ? /* @__PURE__ */ w("video", {
					src: h.url,
					controls: !0,
					autoPlay: !0,
					onClick: (e) => e.stopPropagation(),
					className: c("pointer-events-auto rounded-wx-lg", p ? "max-h-[90vh] max-w-[90vw]" : "max-h-full max-w-full")
				}) : h.mimetype === "application/pdf" ? /* @__PURE__ */ w("iframe", {
					src: h.url,
					title: h.alt || "PDF preview",
					onClick: (e) => e.stopPropagation(),
					className: c("pointer-events-auto rounded-wx-lg border-0 bg-white", p ? "h-[90vh] w-[90vw]" : "h-full w-full")
				}) : /* @__PURE__ */ w(o.img, {
					src: h.url,
					alt: h.alt,
					onClick: (e) => e.stopPropagation(),
					draggable: !1,
					drag: m > 1 ? "x" : !1,
					dragConstraints: {
						left: 0,
						right: 0
					},
					dragElastic: .18,
					dragMomentum: !1,
					onDragEnd: (e, t) => {
						t.offset.x <= -60 ? _() : t.offset.x >= 60 && y();
					},
					className: c("pointer-events-auto rounded-wx-lg object-contain", m > 1 && "cursor-grab active:cursor-grabbing", p ? "max-h-[90vh] max-w-[90vw]" : "max-h-full max-w-full")
				})
			}, `${a}-${h.url}`),
			m > 1 && /* @__PURE__ */ T("div", {
				className: "absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white",
				children: [
					a + 1,
					" / ",
					m
				]
			})
		]
	}, "media-lightbox") }), b) : null;
}
//#endregion
//#region node_modules/comma-separated-tokens/index.js
function _p(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var vp = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, yp = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, bp = {};
function xp(e, t) {
	return ((t || bp).jsx ? yp : vp).test(e);
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var Sp = /[ \t\n\f\r]/g;
function Cp(e) {
	return typeof e == "object" ? e.type === "text" ? wp(e.value) : !1 : wp(e);
}
function wp(e) {
	return e.replace(Sp, "") === "";
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var Tp = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
Tp.prototype.normal = {}, Tp.prototype.property = {}, Tp.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function Ep(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new Tp(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function Dp(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var Op = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
Op.prototype.attribute = "", Op.prototype.booleanish = !1, Op.prototype.boolean = !1, Op.prototype.commaOrSpaceSeparated = !1, Op.prototype.commaSeparated = !1, Op.prototype.defined = !1, Op.prototype.mustUseProperty = !1, Op.prototype.number = !1, Op.prototype.overloadedBoolean = !1, Op.prototype.property = "", Op.prototype.spaceSeparated = !1, Op.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var kp = /* @__PURE__ */ i({
	boolean: () => K,
	booleanish: () => jp,
	commaOrSpaceSeparated: () => Pp,
	commaSeparated: () => Np,
	number: () => q,
	overloadedBoolean: () => Mp,
	spaceSeparated: () => J
}), Ap = 0, K = Fp(), jp = Fp(), Mp = Fp(), q = Fp(), J = Fp(), Np = Fp(), Pp = Fp();
function Fp() {
	return 2 ** ++Ap;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var Ip = Object.keys(kp), Lp = class extends Op {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), Rp(this, "space", r), typeof n == "number") for (; ++i < Ip.length;) {
			let e = Ip[i];
			Rp(this, Ip[i], (n & kp[e]) === kp[e]);
		}
	}
};
Lp.prototype.defined = !0;
function Rp(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function zp(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new Lp(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[Dp(r)] = r, n[Dp(a.attribute)] = r;
	}
	return new Tp(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var Bp = zp({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: jp,
		ariaAutoComplete: null,
		ariaBusy: jp,
		ariaChecked: jp,
		ariaColCount: q,
		ariaColIndex: q,
		ariaColSpan: q,
		ariaControls: J,
		ariaCurrent: null,
		ariaDescribedBy: J,
		ariaDetails: null,
		ariaDisabled: jp,
		ariaDropEffect: J,
		ariaErrorMessage: null,
		ariaExpanded: jp,
		ariaFlowTo: J,
		ariaGrabbed: jp,
		ariaHasPopup: null,
		ariaHidden: jp,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: J,
		ariaLevel: q,
		ariaLive: null,
		ariaModal: jp,
		ariaMultiLine: jp,
		ariaMultiSelectable: jp,
		ariaOrientation: null,
		ariaOwns: J,
		ariaPlaceholder: null,
		ariaPosInSet: q,
		ariaPressed: jp,
		ariaReadOnly: jp,
		ariaRelevant: null,
		ariaRequired: jp,
		ariaRoleDescription: J,
		ariaRowCount: q,
		ariaRowIndex: q,
		ariaRowSpan: q,
		ariaSelected: jp,
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
function Vp(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function Hp(e, t) {
	return Vp(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var Up = zp({
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
		accept: Np,
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
		contentEditable: jp,
		controls: K,
		controlsList: J,
		coords: q | Np,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: K,
		defer: K,
		dir: null,
		dirName: null,
		disabled: K,
		download: Mp,
		draggable: jp,
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
		hidden: Mp,
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
		spellCheck: jp,
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
		value: jp,
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
		scrolling: jp,
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
	transform: Hp
}), Wp = zp({
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
		about: Pp,
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
		g1: Np,
		g2: Np,
		glyphName: Np,
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
		kernelMatrix: Pp,
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
		property: Pp,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: Pp,
		rev: Pp,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: Pp,
		requiredFeatures: Pp,
		requiredFonts: Pp,
		requiredFormats: Pp,
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
		strokeDashArray: Pp,
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
		systemLanguage: Pp,
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
		typeOf: Pp,
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
	transform: Vp
}), Gp = zp({
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
}), Kp = zp({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: Hp
}), qp = zp({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), Jp = {
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
}, Yp = /[A-Z]/g, Xp = /-[a-z]/g, Zp = /^data[-\w.:]+$/i;
function Qp(e, t) {
	let n = Dp(t), r = t, i = Op;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && Zp.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(Xp, em);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!Xp.test(e)) {
				let n = e.replace(Yp, $p);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = Lp;
	}
	return new i(r, t);
}
function $p(e) {
	return "-" + e.toLowerCase();
}
function em(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var tm = Ep([
	Bp,
	Up,
	Gp,
	Kp,
	qp
], "html"), nm = Ep([
	Bp,
	Wp,
	Gp,
	Kp,
	qp
], "svg");
//#endregion
//#region node_modules/space-separated-tokens/index.js
function rm(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/inline-style-parser/cjs/index.js
var im = /* @__PURE__ */ t(((e, t) => {
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
})), am = /* @__PURE__ */ t(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(im());
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
})), om = /* @__PURE__ */ t(((e) => {
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
})), sm = /* @__PURE__ */ t(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(am()), r = om();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), cm = um("end"), lm = um("start");
function um(e) {
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
function dm(e) {
	let t = lm(e), n = cm(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function fm(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? mm(e.position) : "start" in e || "end" in e ? mm(e) : "line" in e || "column" in e ? pm(e) : "";
}
function pm(e) {
	return hm(e && e.line) + ":" + hm(e && e.column);
}
function mm(e) {
	return pm(e && e.start) + "-" + pm(e && e.end);
}
function hm(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region node_modules/vfile-message/lib/index.js
var gm = class extends Error {
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
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = fm(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
gm.prototype.file = "", gm.prototype.name = "", gm.prototype.reason = "", gm.prototype.message = "", gm.prototype.stack = "", gm.prototype.column = void 0, gm.prototype.line = void 0, gm.prototype.ancestors = void 0, gm.prototype.cause = void 0, gm.prototype.fatal = void 0, gm.prototype.place = void 0, gm.prototype.ruleId = void 0, gm.prototype.source = void 0;
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var _m = /* @__PURE__ */ e(sm(), 1), vm = {}.hasOwnProperty, ym = /* @__PURE__ */ new Map(), bm = /[A-Z]/g, xm = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), Sm = new Set(["td", "th"]), Cm = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function wm(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = Fm(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = Pm(n, t.jsx, t.jsxs);
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
		schema: t.space === "svg" ? nm : tm,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = Tm(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function Tm(e, t, n) {
	if (t.type === "element") return Em(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return Dm(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return km(e, t, n);
	if (t.type === "mdxjsEsm") return Om(e, t);
	if (t.type === "root") return Am(e, t, n);
	if (t.type === "text") return jm(e, t);
}
function Em(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = nm, e.schema = i), e.ancestors.push(t);
	let a = Vm(e, t.tagName, !1), o = Im(e, t), s = Rm(e, t);
	return xm.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e == "string" ? !Cp(e) : !0;
	})), Mm(e, o, a, t), Nm(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Dm(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	Hm(e, t.position);
}
function Om(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	Hm(e, t.position);
}
function km(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = nm, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : Vm(e, t.name, !0), o = Lm(e, t), s = Rm(e, t);
	return Mm(e, o, a, t), Nm(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Am(e, t, n) {
	let r = {};
	return Nm(r, Rm(e, t)), e.create(t, e.Fragment, r, n);
}
function jm(e, t) {
	return t.value;
}
function Mm(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Nm(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function Pm(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function Fm(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = lm(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function Im(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && vm.call(t.properties, i)) {
		let a = zm(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && Sm.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style || (n.style = {});
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function Lm(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else Hm(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else Hm(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function Rm(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : ym;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = Tm(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function zm(e, t, n) {
	let r = Qp(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? _p(n) : rm(n)), r.property === "style") {
			let t = typeof n == "object" ? n : Bm(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = Um(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? Jp[r.property] || r.property : r.attribute, n];
	}
}
function Bm(e, t) {
	try {
		return (0, _m.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new gm("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = Cm + "#cannot-parse-style-attribute", r;
	}
}
function Vm(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = xp(e[n]) ? {
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
	} else r = xp(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return vm.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	Hm(e);
}
function Hm(e, t) {
	let n = new gm("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = Cm + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Um(e) {
	let t = {}, n;
	for (n in e) vm.call(e, n) && (t[Wm(n)] = e[n]);
	return t;
}
function Wm(e) {
	let t = e.replace(bm, Gm);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Gm(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var Km = {
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
}, qm = {};
function Jm(e, t) {
	let n = t || qm;
	return Ym(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function Ym(e, t, n) {
	if (Zm(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return Xm(e.children, t, n);
	}
	return Array.isArray(e) ? Xm(e, t, n) : "";
}
function Xm(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = Ym(e[i], t, n);
	return r.join("");
}
function Zm(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region node_modules/character-entities/index.js
var Qm = {
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
}, $m = {}.hasOwnProperty;
function eh(e) {
	return $m.call(Qm, e) ? Qm[e] : !1;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function th(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function nh(e, t) {
	return e.length > 0 ? (th(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var rh = {}.hasOwnProperty;
function ih(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) ah(t, e[n]);
	return t;
}
function ah(e, t) {
	let n;
	for (n in t) {
		let r = (rh.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			rh.call(r, a) || (r[a] = []);
			let e = i[a];
			oh(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function oh(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	th(e, 0, 0, r);
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function sh(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function ch(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var lh = vh(/[A-Za-z]/), uh = vh(/[\dA-Za-z]/), dh = vh(/[#-'*+\--9=?A-Z^-~]/);
function fh(e) {
	return e !== null && (e < 32 || e === 127);
}
var ph = vh(/\d/), mh = vh(/[\dA-Fa-f]/), hh = vh(/[!-/:-@[-`{-~]/);
function Y(e) {
	return e !== null && e < -2;
}
function X(e) {
	return e !== null && (e < 0 || e === 32);
}
function Z(e) {
	return e === -2 || e === -1 || e === 32;
}
var gh = vh(/\p{P}|\p{S}/u), _h = vh(/\s/);
function vh(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function yh(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && uh(e.charCodeAt(n + 1)) && uh(e.charCodeAt(n + 2))) i = 2;
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
var bh = { tokenize: xh };
function xh(e) {
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
var Sh = { tokenize: wh }, Ch = { tokenize: Th };
function wh(e) {
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
			return th(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(Ch, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(Ch, p, m)(n);
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
			th(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
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
function Th(e, t, n) {
	return Q(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function Eh(e) {
	if (e === null || X(e) || _h(e)) return 1;
	if (gh(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function Dh(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var Oh = {
	name: "attention",
	resolveAll: kh,
	tokenize: Ah
};
function kh(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			jh(d, -c), jh(f, c), o = {
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
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = nh(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = nh(l, [
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
			]), l = nh(l, Dh(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = nh(l, [
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
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = nh(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, th(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function Ah(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Eh(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Eh(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function jh(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var Mh = {
	name: "autolink",
	tokenize: Nh
};
function Nh(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return lh(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || uh(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || uh(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || fh(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : dh(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return uh(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || uh(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var Ph = {
	partial: !0,
	tokenize: Fh
};
function Fh(e, t, n) {
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
var Ih = {
	continuation: { tokenize: Rh },
	exit: zh,
	name: "blockQuote",
	tokenize: Lh
};
function Lh(e, t, n) {
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
function Rh(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Z(t) ? Q(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Ih, t, n)(r);
	}
}
function zh(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var Bh = {
	name: "characterEscape",
	tokenize: Vh
};
function Vh(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return hh(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var Hh = {
	name: "characterReference",
	tokenize: Uh
};
function Uh(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = uh, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = mh, u) : (e.enter("characterReferenceValue"), a = 7, o = ph, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === uh && !eh(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var Wh = {
	partial: !0,
	tokenize: qh
}, Gh = {
	concrete: !0,
	name: "codeFenced",
	tokenize: Kh
};
function Kh(e, t, n) {
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
		return n === null || Y(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Wh, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
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
		return t === null || Y(t) ? e.check(Wh, h, b)(t) : (e.enter("codeFlowValue"), y(t));
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
function qh(e, t, n) {
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
var Jh = {
	name: "codeIndented",
	tokenize: Xh
}, Yh = {
	partial: !0,
	tokenize: Zh
};
function Xh(e, t, n) {
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
		return t === null ? c(t) : Y(t) ? e.attempt(Yh, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || Y(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function Zh(e, t, n) {
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
var Qh = {
	name: "codeText",
	previous: eg,
	resolve: $h,
	tokenize: tg
};
function $h(e) {
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
function eg(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tg(e, t, n) {
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
var ng = class {
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
		return n && rg(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), rg(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), rg(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			rg(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			rg(this.left, t.reverse());
		}
	}
};
function rg(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function ig(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new ng(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, ag(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return th(e, 0, Infinity, u.slice(0)), !l;
}
function ag(e, t) {
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
var og = {
	resolve: cg,
	tokenize: lg
}, sg = {
	partial: !0,
	tokenize: ug
};
function cg(e) {
	return ig(e), e;
}
function lg(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : Y(t) ? e.check(sg, o, a)(t) : (e.consume(t), i);
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
function ug(e, t, n) {
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
function dg(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || fh(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
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
		return !u && (i === null || i === 41 || X(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || fh(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function fg(e, t, n, r, i, a) {
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
function pg(e, t, n, r, i, a) {
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
function mg(e, t) {
	let n;
	return r;
	function r(i) {
		return Y(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Z(i) ? Q(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var hg = {
	name: "definition",
	tokenize: _g
}, gg = {
	partial: !0,
	tokenize: vg
};
function _g(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return fg.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = ch(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return X(t) ? mg(e, l)(t) : l(t);
	}
	function l(t) {
		return dg(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(gg, d, d)(t);
	}
	function d(t) {
		return Z(t) ? Q(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || Y(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function vg(e, t, n) {
	return r;
	function r(t) {
		return X(t) ? mg(e, i)(t) : n(t);
	}
	function i(t) {
		return pg(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
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
var yg = {
	name: "hardBreakEscape",
	tokenize: bg
};
function bg(e, t, n) {
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
var xg = {
	name: "headingAtx",
	resolve: Sg,
	tokenize: Cg
};
function Sg(e, t) {
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
	}, th(e, r, n - r + 1, [
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
function Cg(e, t, n) {
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
var wg = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), Tg = [
	"pre",
	"script",
	"style",
	"textarea"
], Eg = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: kg,
	tokenize: Ag
}, Dg = {
	partial: !0,
	tokenize: Mg
}, Og = {
	partial: !0,
	tokenize: jg
};
function kg(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Ag(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : ae) : lh(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : lh(a) ? (e.consume(a), i = 4, r.interrupt ? t : ae) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : ae) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : D : m) : n(i);
	}
	function h(t) {
		return lh(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || X(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && Tg.includes(l) ? (i = 1, r.interrupt ? t(s) : D(s)) : wg.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : D(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || uh(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : D) : n(i);
	}
	function v(t) {
		return Z(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || lh(t) ? (e.consume(t), b) : Z(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || uh(t) ? (e.consume(t), b) : x(t);
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
		return t === 45 && i === 2 ? (e.consume(t), re) : t === 60 && i === 1 ? (e.consume(t), k) : t === 62 && i === 4 ? (e.consume(t), oe) : t === 63 && i === 3 ? (e.consume(t), ae) : t === 93 && i === 5 ? (e.consume(t), ie) : Y(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Dg, se, te)(t)) : t === null || Y(t) ? (e.exit("htmlFlowData"), te(t)) : (e.consume(t), D);
	}
	function te(t) {
		return e.check(Og, O, se)(t);
	}
	function O(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), ne;
	}
	function ne(t) {
		return t === null || Y(t) ? te(t) : (e.enter("htmlFlowData"), D(t));
	}
	function re(t) {
		return t === 45 ? (e.consume(t), ae) : D(t);
	}
	function k(t) {
		return t === 47 ? (e.consume(t), o = "", A) : D(t);
	}
	function A(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return Tg.includes(n) ? (e.consume(t), oe) : D(t);
		}
		return lh(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), A) : D(t);
	}
	function ie(t) {
		return t === 93 ? (e.consume(t), ae) : D(t);
	}
	function ae(t) {
		return t === 62 ? (e.consume(t), oe) : t === 45 && i === 2 ? (e.consume(t), ae) : D(t);
	}
	function oe(t) {
		return t === null || Y(t) ? (e.exit("htmlFlowData"), se(t)) : (e.consume(t), oe);
	}
	function se(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function jg(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function Mg(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Ph, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var Ng = {
	name: "htmlText",
	tokenize: Pg
};
function Pg(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : lh(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : lh(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : Y(t) ? (o = d, k(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? re(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : Y(t) ? (o = h, k(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? re(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? re(t) : Y(t) ? (o = v, k(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : Y(t) ? (o = y, k(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? re(e) : y(e);
	}
	function x(t) {
		return lh(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || uh(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return Y(t) ? (o = C, k(t)) : Z(t) ? (e.consume(t), C) : re(t);
	}
	function w(t) {
		return t === 45 || uh(t) ? (e.consume(t), w) : t === 47 || t === 62 || X(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), re) : t === 58 || t === 95 || lh(t) ? (e.consume(t), E) : Y(t) ? (o = T, k(t)) : Z(t) ? (e.consume(t), T) : re(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || uh(t) ? (e.consume(t), E) : ee(t);
	}
	function ee(t) {
		return t === 61 ? (e.consume(t), D) : Y(t) ? (o = ee, k(t)) : Z(t) ? (e.consume(t), ee) : T(t);
	}
	function D(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, te) : Y(t) ? (o = D, k(t)) : Z(t) ? (e.consume(t), D) : (e.consume(t), O);
	}
	function te(t) {
		return t === i ? (e.consume(t), i = void 0, ne) : t === null ? n(t) : Y(t) ? (o = te, k(t)) : (e.consume(t), te);
	}
	function O(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || X(t) ? T(t) : (e.consume(t), O);
	}
	function ne(e) {
		return e === 47 || e === 62 || X(e) ? T(e) : n(e);
	}
	function re(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function k(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), A;
	}
	function A(t) {
		return Z(t) ? Q(e, ie, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : ie(t);
	}
	function ie(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var Fg = {
	name: "labelEnd",
	resolveAll: zg,
	resolveTo: Bg,
	tokenize: Vg
}, Ig = { tokenize: Hg }, Lg = { tokenize: Ug }, Rg = { tokenize: Wg };
function zg(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && th(e, 0, e.length, n), e;
}
function Bg(e, t) {
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
	]], s = nh(s, e.slice(a + 1, a + r + 3)), s = nh(s, [[
		"enter",
		u,
		t
	]]), s = nh(s, Dh(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = nh(s, [
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
	]), s = nh(s, e.slice(o + 1)), s = nh(s, [[
		"exit",
		c,
		t
	]]), th(e, a, e.length, s), e;
}
function Vg(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(ch(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(Ig, u, o ? u : d)(t) : t === 91 ? e.attempt(Lg, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Rg, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function Hg(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return X(t) ? mg(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : dg(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return X(t) ? mg(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? pg(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return X(t) ? mg(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function Ug(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return fg.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(ch(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function Wg(e, t, n) {
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
var Gg = {
	name: "labelStartImage",
	resolveAll: Fg.resolveAll,
	tokenize: Kg
};
function Kg(e, t, n) {
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
var qg = {
	name: "labelStartLink",
	resolveAll: Fg.resolveAll,
	tokenize: Jg
};
function Jg(e, t, n) {
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
var Yg = {
	name: "lineEnding",
	tokenize: Xg
};
function Xg(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Q(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var Zg = {
	name: "thematicBreak",
	tokenize: Qg
};
function Qg(e, t, n) {
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
var $g = {
	continuation: { tokenize: r_ },
	exit: a_,
	name: "list",
	tokenize: n_
}, e_ = {
	partial: !0,
	tokenize: o_
}, t_ = {
	partial: !0,
	tokenize: i_
};
function n_(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : ph(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(Zg, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return ph(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(Ph, r.interrupt ? n : u, e.attempt(e_, f, d));
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
function r_(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(Ph, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Q(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !Z(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(t_, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, Q(e, e.attempt($g, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function i_(e, t, n) {
	let r = this;
	return Q(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function a_(e) {
	e.exit(this.containerState.type);
}
function o_(e, t, n) {
	let r = this;
	return Q(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !Z(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var s_ = {
	name: "setextUnderline",
	resolveTo: c_,
	tokenize: l_
};
function c_(e, t) {
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
function l_(e, t, n) {
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
var u_ = { tokenize: d_ };
function d_(e) {
	let t = this, n = e.attempt(Ph, r, e.attempt(this.parser.constructs.flowInitial, i, Q(e, e.attempt(this.parser.constructs.flow, i, e.attempt(og, i)), "linePrefix")));
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
var f_ = { resolveAll: g_() }, p_ = h_("string"), m_ = h_("text");
function h_(e) {
	return {
		resolveAll: g_(e === "text" ? __ : void 0),
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
function g_(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function __(e, t) {
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
var v_ = /* @__PURE__ */ i({
	attentionMarkers: () => E_,
	contentInitial: () => b_,
	disable: () => D_,
	document: () => y_,
	flow: () => S_,
	flowInitial: () => x_,
	insideSpan: () => T_,
	string: () => C_,
	text: () => w_
}), y_ = {
	42: $g,
	43: $g,
	45: $g,
	48: $g,
	49: $g,
	50: $g,
	51: $g,
	52: $g,
	53: $g,
	54: $g,
	55: $g,
	56: $g,
	57: $g,
	62: Ih
}, b_ = { 91: hg }, x_ = {
	[-2]: Jh,
	[-1]: Jh,
	32: Jh
}, S_ = {
	35: xg,
	42: Zg,
	45: [s_, Zg],
	60: Eg,
	61: s_,
	95: Zg,
	96: Gh,
	126: Gh
}, C_ = {
	38: Hh,
	92: Bh
}, w_ = {
	[-5]: Yg,
	[-4]: Yg,
	[-3]: Yg,
	33: Gg,
	38: Hh,
	42: Oh,
	60: [Mh, Ng],
	91: qg,
	92: [yg, Bh],
	93: Fg,
	95: Oh,
	96: Qh
}, T_ = { null: [Oh, f_] }, E_ = { null: [42, 95] }, D_ = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function O_(e, t, n) {
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
		return o = nh(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = Dh(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return A_(p(e), t);
	}
	function p(e) {
		return k_(o, e);
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
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && th(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
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
function k_(e, t) {
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
function A_(e, t) {
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
function j_(e) {
	let t = {
		constructs: ih([v_, ...(e || {}).extensions || []]),
		content: n(bh),
		defined: [],
		document: n(Sh),
		flow: n(u_),
		lazy: {},
		string: n(p_),
		text: n(m_)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return O_(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function M_(e) {
	for (; !ig(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var N_ = /[\0\t\n\r]/g;
function P_() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n && (i.charCodeAt(0) === 65279 && u++, n = void 0); u < i.length;) {
			if (N_.lastIndex = u, c = N_.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
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
var F_ = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function I_(e) {
	return e.replace(F_, L_);
}
function L_(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return sh(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return eh(n) || e;
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var R_ = {}.hasOwnProperty;
function z_(e, t, n) {
	return t && typeof t == "object" && (n = t, t = void 0), B_(n)(M_(j_(n).document().write(P_()(e, t, !0))));
}
function B_(e) {
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
			blockQuote: a(he),
			characterEscape: T,
			characterReference: T,
			codeFenced: a(ge),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(ge, o),
			codeText: a(_e, o),
			codeTextData: T,
			data: T,
			codeFlowValue: T,
			definition: a(ve),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(j),
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
			reference: ce,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(ye),
			strong: a(De),
			thematicBreak: a(ke)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: me,
			autolinkProtocol: pe,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: ue,
			characterReferenceMarkerNumeric: ue,
			characterReferenceValue: de,
			characterReference: fe,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: E,
			codeIndented: c(_),
			codeText: c(ne),
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
			htmlText: c(O),
			htmlTextData: E,
			image: c(k),
			label: ie,
			labelText: A,
			lineEnding: ee,
			link: c(re),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: le,
			resourceDestinationString: ae,
			resourceTitleString: oe,
			resource: se,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	H_(t, (e || {}).mdastExtensions || []);
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
			R_.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || W_).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: V_(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: V_(e.length > 0 ? e[e.length - 2][1].end : {
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
			start: V_(t.start),
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
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || W_).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + fm({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = V_(e.end);
	}
	function u() {
		return Jm(this.stack.pop());
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
		n.label = t, n.identifier = ch(this.sliceSerialize(e)).toLowerCase();
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
		(!n || n.type !== "text") && (n = Oe(), n.position = {
			start: V_(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = V_(e.end);
	}
	function ee(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = V_(e.end), this.data.atHardBreak = void 0;
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
	function O() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ne() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function re() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function k() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function A(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = I_(t), n.identifier = ch(t).toLowerCase();
	}
	function ie() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function ae() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function oe() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function se() {
		this.data.inReference = void 0;
	}
	function ce() {
		this.data.referenceType = "collapsed";
	}
	function le(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = ch(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function ue(e) {
		this.data.characterReferenceType = e.type;
	}
	function de(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = sh(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = eh(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function fe(e) {
		let t = this.stack.pop();
		t.position.end = V_(e.end);
	}
	function pe(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function me(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function he() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function ge() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function _e() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function ve() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function j() {
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
	function De() {
		return {
			type: "strong",
			children: []
		};
	}
	function Oe() {
		return {
			type: "text",
			value: ""
		};
	}
	function ke() {
		return { type: "thematicBreak" };
	}
}
function V_(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function H_(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? H_(e, r) : U_(e, r);
	}
}
function U_(e, t) {
	let n;
	for (n in t) if (R_.call(t, n)) switch (n) {
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
function W_(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + fm({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + fm({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + fm({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function G_(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return z_(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function K_(e, t) {
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
function q_(e, t) {
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
function J_(e, t) {
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
function Y_(e, t) {
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
function X_(e, t) {
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
function Z_(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = yh(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
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
function Q_(e, t) {
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
function $_(e, t) {
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
function ev(e, t) {
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
function tv(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return ev(e, t);
	let i = {
		src: yh(r.url || ""),
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
function nv(e, t) {
	let n = { src: yh(t.url) };
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
function rv(e, t) {
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
function iv(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return ev(e, t);
	let i = { href: yh(r.url || "") };
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
function av(e, t) {
	let n = { href: yh(t.url) };
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
function ov(e, t, n) {
	let r = e.all(t), i = n ? sv(n) : cv(t), a = {}, o = [];
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
function sv(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = cv(n[r]);
	}
	return t;
}
function cv(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function lv(e, t) {
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
function uv(e, t) {
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
function dv(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function fv(e, t) {
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
function pv(e, t) {
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
		}, a = lm(t.children[1]), o = cm(t.children[t.children.length - 1]);
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
function mv(e, t, n) {
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
function hv(e, t) {
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
var gv = 9, _v = 32;
function vv(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(yv(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(yv(t.slice(i), i > 0, !1)), a.join("");
}
function yv(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === gv || t === _v;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === gv || t === _v;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function bv(e, t) {
	let n = {
		type: "text",
		value: vv(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function xv(e, t) {
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
var Sv = {
	blockquote: K_,
	break: q_,
	code: J_,
	delete: Y_,
	emphasis: X_,
	footnoteReference: Z_,
	heading: Q_,
	html: $_,
	imageReference: tv,
	image: nv,
	inlineCode: rv,
	linkReference: iv,
	link: av,
	listItem: ov,
	list: lv,
	paragraph: uv,
	root: dv,
	strong: fv,
	table: pv,
	tableCell: hv,
	tableRow: mv,
	text: bv,
	thematicBreak: xv,
	toml: Cv,
	yaml: Cv,
	definition: Cv,
	footnoteDefinition: Cv
};
function Cv() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var wv = typeof self == "object" ? self : globalThis, Tv = (e, t) => {
	switch (e) {
		case "Function":
		case "SharedWorker":
		case "Worker":
		case "eval":
		case "setInterval":
		case "setTimeout": throw TypeError("unable to deserialize " + e);
	}
	return new wv[e](t);
}, Ev = (e, t) => {
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
				return n(Tv(e, t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(Tv(a, o), i);
	};
	return r;
}, Dv = (e) => Ev(/* @__PURE__ */ new Map(), e)(0), Ov = "", { toString: kv } = {}, { keys: Av } = Object, jv = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = kv.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, Ov];
		case "Object": return [2, Ov];
		case "Date": return [3, Ov];
		case "RegExp": return [4, Ov];
		case "Map": return [5, Ov];
		case "Set": return [6, Ov];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, Mv = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), Nv = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = jv(r);
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
				for (let t of Av(r)) (e || !Mv(jv(r[t]))) && n.push([a(t), a(r[t])]);
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
				for (let [n, i] of r) (e || !(Mv(jv(n)) || Mv(jv(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !Mv(jv(n))) && t.push(a(n));
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
}, Pv = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return Nv(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Fv = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? Dv(Pv(e, t)) : structuredClone(e) : (e, t) => Dv(Pv(e, t));
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function Iv(e, t) {
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
function Lv(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Rv(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Iv, r = e.options.footnoteBackLabel || Lv, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = yh(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
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
					...Fv(o),
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
var zv = (function(e) {
	if (e == null) return Wv;
	if (typeof e == "function") return Uv(e);
	if (typeof e == "object") return Array.isArray(e) ? Bv(e) : Vv(e);
	if (typeof e == "string") return Hv(e);
	throw Error("Expected function, string, or object as test");
});
function Bv(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = zv(e[n]);
	return Uv(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function Vv(e) {
	let t = e;
	return Uv(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function Hv(e) {
	return Uv(t);
	function t(t) {
		return t && t.type === e;
	}
}
function Uv(e) {
	return t;
	function t(t, n, r) {
		return !!(Gv(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function Wv() {
	return !0;
}
function Gv(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function Kv(e) {
	return e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var qv = [];
function Jv(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = zv(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + Kv(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = qv, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = Yv(n(e, c)), l[0] === !1)) return l;
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
function Yv(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? qv : [e];
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function Xv(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), Jv(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var Zv = {}.hasOwnProperty, Qv = {};
function $v(e, t) {
	let n = t || Qv, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: ty,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...Sv,
			...n.handlers
		},
		one: o,
		options: n,
		patch: ey,
		wrap: ry
	};
	return Xv(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (Zv.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = Fv(n);
				return r.children = a.all(e), r;
			}
			return Fv(e);
		}
		return (a.options.unknownHandler || ny)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = iy(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = iy(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function ey(e, t) {
	e.position && (t.position = dm(e));
}
function ty(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, Fv(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function ny(e, t) {
	let n = t.data || {}, r = "value" in t && !(Zv.call(n, "hProperties") || Zv.call(n, "hChildren")) ? {
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
function ry(e, t) {
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
function iy(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function ay(e, t) {
	let n = $v(e, t), r = n.one(e, void 0), i = Rv(n), a = Array.isArray(r) ? {
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
function oy(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = ay(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return ay(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region node_modules/bail/index.js
function sy(e) {
	if (e) throw e;
}
//#endregion
//#region node_modules/is-plain-obj/index.js
var cy = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
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
function ly(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region node_modules/trough/lib/index.js
function uy() {
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
			t = o, s ? dy(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function dy(e, t) {
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
var fy = {
	basename: py,
	dirname: my,
	extname: hy,
	join: gy,
	sep: "/"
};
function py(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	yy(e);
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
function my(e) {
	if (yy(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r || (r = !0);
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function hy(e) {
	yy(e);
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
function gy(...e) {
	let t = -1, n;
	for (; ++t < e.length;) yy(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : _y(n);
}
function _y(e) {
	yy(e);
	let t = e.codePointAt(0) === 47, n = vy(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function vy(e, t) {
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
function yy(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var by = { cwd: xy };
function xy() {
	return "/";
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function Sy(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function Cy(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!Sy(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return wy(e);
}
function wy(e) {
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
var Ty = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], Ey = class {
	constructor(e) {
		let t;
		t = e ? Sy(e) ? { path: e } : typeof e == "string" || Ay(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : by.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < Ty.length;) {
			let e = Ty[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) Ty.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? fy.basename(this.path) : void 0;
	}
	set basename(e) {
		Oy(e, "basename"), Dy(e, "basename"), this.path = fy.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? fy.dirname(this.path) : void 0;
	}
	set dirname(e) {
		ky(this.basename, "dirname"), this.path = fy.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? fy.extname(this.path) : void 0;
	}
	set extname(e) {
		if (Dy(e, "extname"), ky(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = fy.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		Sy(e) && (e = Cy(e)), Oy(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? fy.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		Oy(e, "stem"), Dy(e, "stem"), this.path = fy.join(this.dirname || "", e + (this.extname || ""));
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
		let r = new gm(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function Dy(e, t) {
	if (e && e.includes(fy.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + fy.sep + "`");
}
function Oy(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function ky(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function Ay(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var jy = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), My = {}.hasOwnProperty, Ny = new class e extends jy {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = uy();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, cy.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (Iy("data", this.frozen), this.namespace[e] = t, this) : My.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (Iy("data", this.frozen), this.namespace = e, this) : this.namespace;
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
		let t = zy(e), n = this.parser || this.Parser;
		return Py("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), Py("process", this.parser || this.Parser), Fy("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = zy(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				Vy(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), Py("processSync", this.parser || this.Parser), Fy("processSync", this.compiler || this.Compiler), this.process(e, r), Ry("processSync", "process", t), n;
		function r(e, r) {
			t = !0, sy(e), n = r;
		}
	}
	run(e, t, n) {
		Ly(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = zy(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), Ry("runSync", "run", n), r;
		function i(e, t) {
			sy(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = zy(t), r = this.compiler || this.Compiler;
		return Fy("stringify", r), Ly(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (Iy("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
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
			o(e.plugins), e.settings && (r.settings = (0, cy.default)(!0, r.settings, e.settings));
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
				ly(o) && ly(r) && (r = (0, cy.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function Py(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function Fy(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function Iy(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function Ly(e) {
	if (!ly(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function Ry(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function zy(e) {
	return By(e) ? e : new Ey(e);
}
function By(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Vy(e) {
	return typeof e == "string" || Hy(e);
}
function Hy(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var Uy = [], Wy = { allowDangerousHtml: !0 }, Gy = /^(https?|ircs?|mailto|xmpp)$/i, Ky = [
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
function qy(e) {
	let t = Jy(e), n = Yy(e);
	return Xy(t.runSync(t.parse(n), n), e);
}
function Jy(e) {
	let t = e.rehypePlugins || Uy, n = e.remarkPlugins || Uy, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...Wy
	} : Wy;
	return Ny().use(G_).use(n).use(oy, r).use(t);
}
function Yy(e) {
	let t = e.children || "", n = new Ey();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function Xy(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || Zy;
	for (let e of Ky) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return Xv(e, l), wm(e, {
		Fragment: C,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: w,
		jsxs: T,
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
			for (t in Km) if (Object.hasOwn(Km, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = Km[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function Zy(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Gy.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region node_modules/ccount/index.js
function Qy(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
//#endregion
//#region node_modules/escape-string-regexp/index.js
function $y(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
//#endregion
//#region node_modules/mdast-util-find-and-replace/lib/index.js
function eb(e, t, n) {
	let r = zv((n || {}).ignore || []), i = tb(t), a = -1;
	for (; ++a < i.length;) Jv(e, "text", o);
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
function tb(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([nb(e[0]), rb(e[1])]);
	}
	return t;
}
function nb(e) {
	return typeof e == "string" ? new RegExp($y(e), "g") : e;
}
function rb(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
//#endregion
//#region node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var ib = "phrasing", ab = [
	"autolink",
	"link",
	"image",
	"label"
];
function ob() {
	return {
		transforms: [mb],
		enter: {
			literalAutolink: cb,
			literalAutolinkEmail: lb,
			literalAutolinkHttp: lb,
			literalAutolinkWww: lb
		},
		exit: {
			literalAutolink: pb,
			literalAutolinkEmail: fb,
			literalAutolinkHttp: ub,
			literalAutolinkWww: db
		}
	};
}
function sb() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: ib,
			notInConstruct: ab
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: ib,
			notInConstruct: ab
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: ib,
			notInConstruct: ab
		}
	] };
}
function cb(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function lb(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function ub(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function db(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function fb(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function pb(e) {
	this.exit(e);
}
function mb(e) {
	eb(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, hb], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, gb]], { ignore: ["link", "linkReference"] });
}
function hb(e, t, n, r, i) {
	let a = "";
	if (!yb(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !_b(n))) return !1;
	let o = vb(n + r);
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
function gb(e, t, n, r) {
	return !yb(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function _b(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function vb(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = Qy(e, "("), a = Qy(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function yb(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || _h(n) || gh(n)) && (!t || n !== 47);
}
//#endregion
//#region node_modules/mdast-util-gfm-footnote/lib/index.js
kb.peek = Ob;
function bb() {
	this.buffer();
}
function xb(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function Sb() {
	this.buffer();
}
function Cb(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function wb(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = ch(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function Tb(e) {
	this.exit(e);
}
function Eb(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = ch(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function Db(e) {
	this.exit(e);
}
function Ob() {
	return "[";
}
function kb(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), s(), o(), a += i.move("]"), a;
}
function Ab() {
	return {
		enter: {
			gfmFootnoteCallString: bb,
			gfmFootnoteCall: xb,
			gfmFootnoteDefinitionLabelString: Sb,
			gfmFootnoteDefinition: Cb
		},
		exit: {
			gfmFootnoteCallString: wb,
			gfmFootnoteCall: Tb,
			gfmFootnoteDefinitionLabelString: Eb,
			gfmFootnoteDefinition: Db
		}
	};
}
function jb(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference: kb
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
		})), c(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? Nb : Mb))), s(), o;
	}
}
function Mb(e, t, n) {
	return t === 0 ? e : Nb(e, t, n);
}
function Nb(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region node_modules/mdast-util-gfm-strikethrough/lib/index.js
var Pb = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
zb.peek = Bb;
function Fb() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: Lb },
		exit: { strikethrough: Rb }
	};
}
function Ib() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: Pb
		}],
		handlers: { delete: zb }
	};
}
function Lb(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function Rb(e) {
	this.exit(e);
}
function zb(e, t, n, r) {
	let i = n.createTracker(r), a = n.enter("strikethrough"), o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), a(), o;
}
function Bb() {
	return "~";
}
//#endregion
//#region node_modules/markdown-table/index.js
function Vb(e) {
	return e.length;
}
function Hb(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Vb, a = [], o = [], s = [], c = [], l = 0, u = -1;
	for (; ++u < e.length;) {
		let t = [], r = [], a = -1;
		for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
			let o = Ub(e[u][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (c[a] === void 0 || e > c[a]) && (c[a] = e);
			}
			t.push(o);
		}
		o[u] = t, s[u] = r;
	}
	let d = -1;
	if (typeof r == "object" && "length" in r) for (; ++d < l;) a[d] = Wb(r[d]);
	else {
		let e = Wb(r);
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
function Ub(e) {
	return e == null ? "" : String(e);
}
function Wb(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function Gb(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), Kb);
	return i(), o;
}
function Kb(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function qb(e, t) {
	return Jb(e, t.inConstruct, !0) && !Jb(e, t.notInConstruct, !1);
}
function Jb(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/break.js
function Yb(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) if (n.unsafe[i].character === "\n" && qb(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return "\\\n";
}
//#endregion
//#region node_modules/longest-streak/index.js
function Xb(e, t) {
	let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
	if (typeof t != "string") throw TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
	return o;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function Zb(e, t) {
	return !!(t.options.fences === !1 && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function Qb(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/code.js
function $b(e, t, n, r) {
	let i = Qb(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
	if (Zb(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, ex);
		return e(), t;
	}
	let s = n.createTracker(r), c = i.repeat(Math.max(Xb(a, i) + 1, 3)), l = n.enter("codeFenced"), u = s.move(c);
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
function ex(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function tx(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/definition.js
function nx(e, t, n, r) {
	let i = tx(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), s = n.enter("label"), c = n.createTracker(r), l = c.move("[");
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
function rx(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function ix(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function ax(e, t, n) {
	let r = Eh(e), i = Eh(t);
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
ox.peek = sx;
function ox(e, t, n, r) {
	let i = rx(n), a = n.enter("emphasis"), o = n.createTracker(r), s = o.move(i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = ax(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = ix(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = ax(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + ix(d));
	let p = o.move(i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function sx(e, t, n) {
	return n.options.emphasis || "*";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function cx(e, t) {
	let n = !1;
	return Xv(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && Jm(e) && (t.options.setext || n));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/heading.js
function lx(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (cx(e, n)) {
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
	return /^[\t ]/.test(l) && (l = ix(l.charCodeAt(0)) + l.slice(1)), l = l ? o + " " + l : o, n.options.closeAtx && (l += " " + o), c(), s(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/html.js
ux.peek = dx;
function ux(e) {
	return e.value || "";
}
function dx() {
	return "<";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/image.js
fx.peek = px;
function fx(e, t, n, r) {
	let i = tx(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), s = n.enter("label"), c = n.createTracker(r), l = c.move("![");
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
function px() {
	return "!";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
mx.peek = hx;
function mx(e, t, n, r) {
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
function hx() {
	return "!";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
gx.peek = _x;
function gx(e, t, n) {
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
function _x() {
	return "`";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function vx(e, t) {
	let n = Jm(e);
	return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/link.js
yx.peek = bx;
function yx(e, t, n, r) {
	let i = tx(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r), s, c;
	if (vx(e, n)) {
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
function bx(e, t, n) {
	return vx(e, n) ? "<" : "[";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
xx.peek = Sx;
function xx(e, t, n, r) {
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
function Sx() {
	return "[";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function Cx(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function wx(e) {
	let t = Cx(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function Tx(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function Ex(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/list.js
function Dx(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? Tx(n) : Cx(n), s = e.ordered ? o === "." ? ")" : "." : wx(n), c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), Ex(n) === o && t) {
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
function Ox(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function kx(e, t, n, r) {
	let i = Ox(n), a = n.bulletCurrent || Cx(n);
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
function Ax(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
//#endregion
//#region node_modules/mdast-util-phrasing/lib/index.js
var jx = zv([
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
function Mx(e, t, n, r) {
	return (e.children.some(function(e) {
		return jx(e);
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function Nx(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/strong.js
Px.peek = Fx;
function Px(e, t, n, r) {
	let i = Nx(n), a = n.enter("strong"), o = n.createTracker(r), s = o.move(i + i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = ax(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = ix(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = ax(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + ix(d));
	let p = o.move(i + i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function Fx(e, t, n) {
	return n.options.strong || "*";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/text.js
function Ix(e, t, n, r) {
	return n.safe(e.value, r);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function Lx(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function Rx(e, t, n) {
	let r = (Ex(n) + (n.options.ruleSpaces ? " " : "")).repeat(Lx(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/index.js
var zx = {
	blockquote: Gb,
	break: Yb,
	code: $b,
	definition: nx,
	emphasis: ox,
	hardBreak: Yb,
	heading: lx,
	html: ux,
	image: fx,
	imageReference: mx,
	inlineCode: gx,
	link: yx,
	linkReference: xx,
	list: Dx,
	listItem: kx,
	paragraph: Ax,
	root: Mx,
	strong: Px,
	text: Ix,
	thematicBreak: Rx
};
//#endregion
//#region node_modules/mdast-util-gfm-table/lib/index.js
function Bx() {
	return {
		enter: {
			table: Vx,
			tableData: Gx,
			tableHeader: Gx,
			tableRow: Ux
		},
		exit: {
			codeText: Kx,
			table: Hx,
			tableData: Wx,
			tableHeader: Wx,
			tableRow: Wx
		}
	};
}
function Vx(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function Hx(e) {
	this.exit(e), this.data.inTable = void 0;
}
function Ux(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function Wx(e) {
	this.exit(e);
}
function Gx(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function Kx(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, qx));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function qx(e, t) {
	return t === "|" ? t : e;
}
function Jx(e) {
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
		return Hb(e, {
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
		let r = zx.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
//#endregion
//#region node_modules/mdast-util-gfm-task-list-item/lib/index.js
function Yx() {
	return { exit: {
		taskListCheckValueChecked: Zx,
		taskListCheckValueUnchecked: Zx,
		paragraph: Qx
	} };
}
function Xx() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: $x }
	};
}
function Zx(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Qx(e) {
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
function $x(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
	a && s.move(o);
	let c = zx.listItem(e, t, n, {
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
function eS() {
	return [
		ob(),
		Ab(),
		Fb(),
		Bx(),
		Yx()
	];
}
function tS(e) {
	return { extensions: [
		sb(),
		jb(e),
		Ib(),
		Jx(e),
		Xx()
	] };
}
//#endregion
//#region node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var nS = {
	tokenize: gS,
	partial: !0
}, rS = {
	tokenize: _S,
	partial: !0
}, iS = {
	tokenize: vS,
	partial: !0
}, aS = {
	tokenize: yS,
	partial: !0
}, oS = {
	tokenize: bS,
	partial: !0
}, sS = {
	name: "wwwAutolink",
	tokenize: mS,
	previous: xS
}, cS = {
	name: "protocolAutolink",
	tokenize: hS,
	previous: SS
}, lS = {
	name: "emailAutolink",
	tokenize: pS,
	previous: CS
}, uS = {};
function dS() {
	return { text: uS };
}
for (var fS = 48; fS < 123;) uS[fS] = lS, fS++, fS === 58 ? fS = 65 : fS === 91 && (fS = 97);
uS[43] = lS, uS[45] = lS, uS[46] = lS, uS[95] = lS, uS[72] = [lS, cS], uS[104] = [lS, cS], uS[87] = [lS, sS], uS[119] = [lS, sS];
function pS(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !wS(t) || !CS.call(r, r.previous) || TS(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return wS(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(oS, u, l)(t) : t === 45 || t === 95 || uh(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && lh(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function mS(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !xS.call(r, r.previous) || TS(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(nS, e.attempt(rS, e.attempt(iS, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function hS(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && SS.call(r, r.previous) && !TS(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if (lh(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
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
		return t === null || fh(t) || X(t) || _h(t) || gh(t) ? n(t) : e.attempt(rS, e.attempt(iS, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function gS(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function _S(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(aS, c, s)(t) : t === null || X(t) || _h(t) || t !== 45 && gh(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function vS(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(aS, t, a)(o) : o === null || X(o) || _h(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function yS(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || X(o) || _h(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || X(e) || _h(e) ? t(e) : r(e);
	}
	function a(e) {
		return lh(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : lh(t) ? (e.consume(t), o) : n(t);
	}
}
function bS(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return uh(e) ? n(e) : t(e);
	}
}
function xS(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || X(e);
}
function SS(e) {
	return !lh(e);
}
function CS(e) {
	return !(e === 47 || wS(e));
}
function wS(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || uh(e);
}
function TS(e) {
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
var ES = {
	tokenize: PS,
	partial: !0
};
function DS() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: jS,
			continuation: { tokenize: MS },
			exit: NS
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: AS
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: OS,
				resolveTo: kS
			}
		}
	};
}
function OS(e, t, n) {
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
		let s = ch(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function kS(e, t) {
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
function AS(e, t, n) {
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
			return i.includes(ch(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return X(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function jS(e, t, n) {
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
			return a = ch(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
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
function MS(e, t, n) {
	return e.check(Ph, t, e.attempt(ES, t, n));
}
function NS(e) {
	e.exit("gfmFootnoteDefinition");
}
function PS(e, t, n) {
	let r = this;
	return Q(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function FS(e) {
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
				s && th(o, o.length, 0, Dh(s, e.slice(r + 1, n), t)), th(o, o.length, 0, [
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
				]), th(e, r - 1, n - r + 3, o), n = r + o.length - 2;
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
			let s = Eh(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = Eh(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/edit-map.js
var IS = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		LS(this, e, t, n);
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
function LS(e, t, n, r) {
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
function RS(e, t) {
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
function zS() {
	return { flow: { null: {
		name: "table",
		tokenize: BS,
		resolveAll: VS
	} } };
}
function BS(e, t, n) {
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
function VS(e, t) {
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
	], s = !1, c = 0, l, u, d, f = new IS();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (US(f, t, c, l, u), u = void 0, c = 0), l = {
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
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = HS(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = HS(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = HS(f, t, o, i, n, d)) : (o[0] = o[1], d = HS(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && US(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = RS(t.events, n));
	}
	return e;
}
function HS(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, WS(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = WS(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = WS(t.events, n[2]), a = WS(t.events, n[3]), o = {
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
	return i !== void 0 && (a.end = Object.assign({}, WS(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function US(e, t, n, r, i) {
	let a = [], o = WS(t.events, n);
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
function WS(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
//#endregion
//#region node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var GS = {
	name: "tasklistCheck",
	tokenize: qS
};
function KS() {
	return { text: { 91: GS } };
}
function qS(e, t, n) {
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
		return Y(r) ? t(r) : Z(r) ? e.check({ tokenize: JS }, t, n)(r) : n(r);
	}
}
function JS(e, t, n) {
	return Q(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm/index.js
function YS(e) {
	return ih([
		dS(),
		DS(),
		FS(e),
		zS(),
		KS()
	]);
}
//#endregion
//#region node_modules/remark-gfm/lib/index.js
var XS = {};
function ZS(e) {
	let t = this, n = e || XS, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
	i.push(YS(n)), a.push(eS()), o.push(tS(n));
}
//#endregion
//#region node_modules/html-dom-parser/lib/client/html-to-dom.js
var QS = /* @__PURE__ */ t(((e) => {
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
			P(this, "parent", null), P(this, "prev", null), P(this, "next", null), P(this, "startIndex", null), P(this, "endIndex", null);
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
			super(), P(this, "data", void 0), this.data = e;
		}
		get nodeValue() {
			return this.data;
		}
		set nodeValue(e) {
			this.data = e;
		}
	}, a = class extends i {
		constructor(...e) {
			super(...e), P(this, "type", t.Text);
		}
		get nodeType() {
			return 3;
		}
	}, o = class extends i {
		constructor(...e) {
			super(...e), P(this, "type", t.Comment);
		}
		get nodeType() {
			return 8;
		}
	}, s = class extends i {
		constructor(e, n) {
			super(n), P(this, "type", t.Directive), P(this, "name", void 0), P(this, "x-name", void 0), P(this, "x-publicId", void 0), P(this, "x-systemId", void 0), this.name = e;
		}
		get nodeType() {
			return 1;
		}
	}, c = class extends r {
		constructor(e) {
			super(), P(this, "children", void 0), this.children = e;
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
			super(...e), P(this, "type", t.CDATA);
		}
		get nodeType() {
			return 4;
		}
	}, u = class extends c {
		constructor(...e) {
			super(...e), P(this, "type", t.Root);
		}
		get nodeType() {
			return 9;
		}
	}, d = class extends c {
		constructor(e, n, r = [], i = e === "script" ? t.Script : e === "style" ? t.Style : t.Tag) {
			super(r), P(this, "name", void 0), P(this, "attribs", void 0), P(this, "type", void 0), P(this, "namespace", void 0), P(this, "x-attribsNamespace", void 0), P(this, "x-attribsPrefix", void 0), this.name = e, this.attribs = n, this.type = i;
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
	function O(e) {
		return e.replace(w, x);
	}
	function ne(e, t, n) {
		t === void 0 && (t = null);
		for (var r = [], i, c = 0, l = e.length; c < l; c++) {
			var u = e[c];
			switch (u.nodeType) {
				case 1:
					var f = ee(u.nodeName);
					i = new d(f, E(u.attributes)), i.children = ne(f === "template" ? u.content.childNodes : u.childNodes, i);
					break;
				/* v8 ignore start */
				case 3:
					i = new a(O(u.nodeValue ?? ""));
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
	var re = "html", k = "head", A = "body", ie = /<([a-zA-Z]+[0-9]?)/;
	function ae(e, t) {
		return t ? t.createHTML(e) : e;
	}
	/* v8 ignore start */
	var oe = function(e, t, n) {
		throw Error("This browser does not support `document.implementation.createHTMLDocument`");
	}, se = function(e, t, n) {
		throw Error("This browser does not support `DOMParser.prototype.parseFromString`");
	}, ce = typeof window == "object" && window.DOMParser;
	if (typeof ce == "function") {
		var le = new ce(), ue = "text/html";
		se = function(e, t, n) {
			return t && (e = `<${t}>${e}</${t}>`), le.parseFromString(e, ue);
		}, oe = se;
	}
	if (typeof document == "object" && document.implementation) {
		var de = document.implementation.createHTMLDocument();
		oe = function(e, t, n) {
			if (t) {
				var r = de.documentElement.querySelector(t);
				return r && (r.innerHTML = ae(e, n)), de;
			}
			return de.documentElement.innerHTML = ae(e, n), de;
		};
	}
	var fe = typeof document == "object" && document.createElement("template"), pe;
	fe && fe.content && (pe = function(e, t) {
		return fe.innerHTML = ae(e, t), fe.content.childNodes;
	});
	var me = function() {
		return document.createDocumentFragment().childNodes;
	};
	/* v8 ignore stop */
	function he(e, t) {
		var n, r;
		e = te(e);
		var i = (ie.exec(e)?.[1])?.toLowerCase();
		switch (i) {
			case re:
				var a = se(e);
				if (!D(e, k)) {
					var o = a.querySelector(k);
					(n = o?.parentNode) == null || n.removeChild(o);
				}
				if (!D(e, A)) {
					var o = a.querySelector(A);
					(r = o?.parentNode) == null || r.removeChild(o);
				}
				return a.querySelectorAll(re);
			case k:
			case A:
				var s = oe(e, void 0, t).querySelectorAll(i);
				return D(e, A) && D(e, k) ? s[0].parentNode?.childNodes ?? me() : s;
			/* v8 ignore start */
			default:
				if (pe) return pe(e, t);
				var o = oe(e, A, t).querySelector(A);
				return o?.childNodes ?? me();
		}
	}
	var ge = /<(![a-zA-Z\s]+)>/;
	function _e(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		var n = ge.exec(e), r = n ? n[1] : void 0;
		return ne(he(e, t?.trustedTypePolicy), null, r);
	}
	e.default = _e;
})), $S = /* @__PURE__ */ t(((e) => {
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
})), eC = /* @__PURE__ */ t(((e) => {
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
	var { CAMELCASE: m, SAME: h, possibleStandardNames: g } = $S(), _ = RegExp.prototype.test.bind(/* @__PURE__ */ RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), v = Object.keys(g).reduce((e, t) => {
		let n = g[t];
		return n === h ? e[t] = t : n === m ? e[t.toLowerCase()] = t : e[t] = n, e;
	}, {});
	e.BOOLEAN = i, e.BOOLEANISH_STRING = r, e.NUMERIC = o, e.OVERLOADED_BOOLEAN = a, e.POSITIVE_NUMERIC = s, e.RESERVED = t, e.STRING = n, e.getPropertyInfo = c, e.isCustomAttribute = _, e.possibleStandardNames = v;
})), tC = /* @__PURE__ */ t(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = o, e.setStyleProp = c;
	var n = r("react"), i = t(sm()), a = new Set([
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
	e.PRESERVE_CUSTOM_ATTRIBUTES = Number(n.version.split(".")[0]) >= 16, e.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
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
})), nC = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var t = eC(), n = tC(), r = ["checked", "value"], i = [
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
function rC(e) {
	return e.type === $.Tag || e.type === $.Script || e.type === $.Style;
}
var $, iC = a((() => {
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})($ || ($ = {})), $.Root, $.Text, $.Directive, $.Comment, $.Script, $.Style, $.Tag, $.CDATA, $.Doctype;
}));
//#endregion
//#region node_modules/domhandler/dist/node.js
function aC(e) {
	return rC(e);
}
function oC(e) {
	return e.type === $.CDATA;
}
function sC(e) {
	return e.type === $.Text;
}
function cC(e) {
	return e.type === $.Comment;
}
function lC(e) {
	return e.type === $.Directive;
}
function uC(e) {
	return e.type === $.Root;
}
function dC(e) {
	return Object.hasOwn(e, "children");
}
function fC(e, t = !1) {
	let n;
	if (sC(e)) n = new gC(e.data);
	else if (cC(e)) n = new _C(e.data);
	else if (aC(e)) {
		let r = t ? pC(e.children) : [], i = new SC(e.name, { ...e.attribs }, r);
		for (let e of r) e.parent = i;
		e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), n = i;
	} else if (oC(e)) {
		let r = t ? pC(e.children) : [], i = new bC(r);
		for (let e of r) e.parent = i;
		n = i;
	} else if (uC(e)) {
		let r = t ? pC(e.children) : [], i = new xC(r);
		for (let e of r) e.parent = i;
		e["x-mode"] && (i["x-mode"] = e["x-mode"]), n = i;
	} else if (lC(e)) {
		let t = new vC(e.name, e.data);
		e["x-name"] != null && (t["x-name"] = e["x-name"], t["x-publicId"] = e["x-publicId"], t["x-systemId"] = e["x-systemId"]), n = t;
	} else throw Error(`Not implemented yet: ${e.type}`);
	return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
}
function pC(e) {
	let t = e.map((e) => fC(e, !0));
	for (let e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
	return t;
}
var mC, hC, gC, _C, vC, yC, bC, xC, SC, CC = a((() => {
	iC(), wt(), mC = class {
		constructor() {
			P(this, "parent", null), P(this, "prev", null), P(this, "next", null), P(this, "startIndex", null), P(this, "endIndex", null);
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
			return fC(this, e);
		}
	}, hC = class extends mC {
		constructor(e) {
			super(), P(this, "data", void 0), this.data = e;
		}
		get nodeValue() {
			return this.data;
		}
		set nodeValue(e) {
			this.data = e;
		}
	}, gC = class extends hC {
		constructor(...e) {
			super(...e), P(this, "type", $.Text);
		}
		get nodeType() {
			return 3;
		}
	}, _C = class extends hC {
		constructor(...e) {
			super(...e), P(this, "type", $.Comment);
		}
		get nodeType() {
			return 8;
		}
	}, vC = class extends hC {
		constructor(e, t) {
			super(t), P(this, "type", $.Directive), P(this, "name", void 0), P(this, "x-name", void 0), P(this, "x-publicId", void 0), P(this, "x-systemId", void 0), this.name = e;
		}
		get nodeType() {
			return 1;
		}
	}, yC = class extends mC {
		constructor(e) {
			super(), P(this, "children", void 0), this.children = e;
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
	}, bC = class extends yC {
		constructor(...e) {
			super(...e), P(this, "type", $.CDATA);
		}
		get nodeType() {
			return 4;
		}
	}, xC = class extends yC {
		constructor(...e) {
			super(...e), P(this, "type", $.Root);
		}
		get nodeType() {
			return 9;
		}
	}, SC = class extends yC {
		constructor(e, t, n = [], r = e === "script" ? $.Script : e === "style" ? $.Style : $.Tag) {
			super(n), P(this, "name", void 0), P(this, "attribs", void 0), P(this, "type", void 0), P(this, "namespace", void 0), P(this, "x-attribsNamespace", void 0), P(this, "x-attribsPrefix", void 0), this.name = e, this.attribs = t, this.type = r;
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
})), wC = /* @__PURE__ */ i({
	CDATA: () => bC,
	Comment: () => _C,
	DataNode: () => hC,
	Document: () => xC,
	DomHandler: () => EC,
	Element: () => SC,
	Node: () => mC,
	NodeWithChildren: () => yC,
	ProcessingInstruction: () => vC,
	Text: () => gC,
	cloneNode: () => fC,
	default: () => EC,
	hasChildren: () => dC,
	isCDATA: () => oC,
	isComment: () => cC,
	isDirective: () => lC,
	isDocument: () => uC,
	isTag: () => aC,
	isText: () => sC
}), TC, EC, DC = a((() => {
	iC(), CC(), wt(), CC(), TC = {
		withStartIndices: !1,
		withEndIndices: !1,
		xmlMode: !1
	}, EC = class {
		constructor(e, t, n) {
			P(this, "dom", []), P(this, "root", new xC(this.dom)), P(this, "callback", void 0), P(this, "options", void 0), P(this, "elementCB", void 0), P(this, "done", !1), P(this, "tagStack", [this.root]), P(this, "lastNode", null), P(this, "parser", null), typeof t == "function" && (n = t, t = TC), typeof e == "object" && (t = e, e = void 0), this.callback = e ?? null, this.options = t ?? TC, this.elementCB = n ?? null;
		}
		onparserinit(e) {
			this.parser = e;
		}
		onreset() {
			this.dom = [], this.root = new xC(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
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
			let n = new SC(e, t, void 0, this.options.xmlMode ? $.Tag : void 0);
			this.addNode(n), this.tagStack.push(n);
		}
		ontext(e) {
			let { lastNode: t } = this;
			if (t && t.type === $.Text) t.data += e, this.options.withEndIndices && this.parser && (t.endIndex = this.parser.endIndex);
			else {
				let t = new gC(e);
				this.addNode(t), this.lastNode = t;
			}
		}
		oncomment(e) {
			if (this.lastNode && this.lastNode.type === $.Comment) {
				this.lastNode.data += e;
				return;
			}
			let t = new _C(e);
			this.addNode(t), this.lastNode = t;
		}
		oncommentend() {
			this.lastNode = null;
		}
		oncdatastart() {
			let e = new gC(""), t = new bC([e]);
			this.addNode(t), e.parent = t, this.lastNode = e;
		}
		oncdataend() {
			this.lastNode = null;
		}
		onprocessinginstruction(e, t) {
			let n = new vC(e, t);
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
})), OC = /* @__PURE__ */ t(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = l;
	var i = (DC(), n(wC)), a = r("react"), o = t(nC()), s = tC(), c = {
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
})), kC = /* @__PURE__ */ e((/* @__PURE__ */ t(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = s;
	var r = t(QS());
	e.htmlToDOM = r.default, e.attributesToProps = t(nC()).default;
	var i = t(OC());
	e.domToReact = i.default;
	var a = (DC(), n(wC));
	Object.defineProperty(e, "Comment", {
		enumerable: !0,
		get: function() {
			return a.Comment;
		}
	}), Object.defineProperty(e, "Element", {
		enumerable: !0,
		get: function() {
			return a.Element;
		}
	}), Object.defineProperty(e, "ProcessingInstruction", {
		enumerable: !0,
		get: function() {
			return a.ProcessingInstruction;
		}
	}), Object.defineProperty(e, "Text", {
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
})))(), 1), AC = kC.default.default || kC.default;
//#endregion
//#region components/widget/article-html/blocks/table-of-contents.tsx
function jC({ entries: e }) {
	let t = s("article"), [n, r] = S(!1), i = (e, t) => {
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
	return /* @__PURE__ */ T("nav", {
		"aria-label": t("tableOfContents"),
		className: c("wx-toc mt-0 overflow-hidden rounded-xl border border-wx-border bg-wx-bg", "[&_a]:no-underline [&_a]:text-inherit [&_a:hover]:opacity-100", "[&_ul]:m-0 [&_ul]:list-none [&_ul]:p-0", "[&_li]:m-0"),
		children: [/* @__PURE__ */ T("button", {
			type: "button",
			onClick: () => r((e) => !e),
			"aria-expanded": n,
			className: c("flex w-full items-center justify-between gap-3 px-4 py-3", "text-left text-sm font-medium text-wx-fg", "transition-colors hover:bg-wx-bg-elevated/40"),
			children: [/* @__PURE__ */ w("span", { children: t("tableOfContents") }), /* @__PURE__ */ w(Vd, {
				className: c("h-4 w-4 shrink-0 text-wx-fg-subtle transition-transform duration-200", n && "rotate-180"),
				"aria-hidden": "true"
			})]
		}), /* @__PURE__ */ w("div", {
			className: c("grid transition-[grid-template-rows] duration-200 ease-out", n ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
			"aria-hidden": !n,
			children: /* @__PURE__ */ w("div", {
				className: "min-h-0 overflow-hidden",
				children: /* @__PURE__ */ w("div", {
					className: "border-t border-wx-border/70 px-2 py-2",
					children: /* @__PURE__ */ w("div", {
						className: "flex flex-col",
						children: e.map((e) => {
							let t = e.level === 2 ? 16 : e.level === 3 ? 32 : 0;
							return /* @__PURE__ */ w("button", {
								type: "button",
								onClick: (t) => i(t, e.id),
								className: c("flex h-8 items-center truncate rounded-md pr-2 text-left text-sm text-wx-fg", "transition-colors hover:bg-wx-bg-elevated/50"),
								style: { paddingLeft: 12 + t },
								children: /* @__PURE__ */ w("span", {
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
function MC({ summary: e, body: t, defaultOpen: n }) {
	let [r, i] = S(n);
	return /* @__PURE__ */ T("div", {
		className: "my-2 overflow-hidden rounded-lg border border-wx-border",
		children: [/* @__PURE__ */ T("button", {
			type: "button",
			onClick: () => i((e) => !e),
			"aria-expanded": r,
			className: c("flex w-full items-center justify-between gap-3 px-4 py-3", "text-left text-sm font-semibold text-wx-fg", "transition-colors hover:bg-wx-bg-elevated/50", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary/30"),
			children: [/* @__PURE__ */ w("span", {
				className: "min-w-0 flex-1",
				children: e
			}), /* @__PURE__ */ w(Vd, {
				className: c("h-4 w-4 shrink-0 text-wx-fg-subtle transition-transform", r && "rotate-180"),
				"aria-hidden": "true"
			})]
		}), r && /* @__PURE__ */ w("div", {
			className: "border-t border-wx-border px-4 py-3 text-sm leading-relaxed text-wx-fg [&>:first-child]:mt-0 [&>:last-child]:mb-0",
			children: t
		})]
	});
}
//#endregion
//#region components/widget/article-html/build-options/accordion.tsx
var NC = (e, t) => {
	let n = e.name === "details", r = e.name === "div" && e.attribs?.["data-type"] === "details";
	if (!n && !r) return;
	let i = r ? (e.children ?? []).flatMap((e) => e instanceof kC.Element && e.name === "div" && !e.attribs?.["data-type"] ? e.children ?? [] : [e]) : e.children ?? [], a = i.find((e) => e instanceof kC.Element && e.name === "summary"), o = i.filter((e) => e !== a && !(e instanceof kC.Element && e.name === "button")), s = o.find((e) => e instanceof kC.Element && e.name === "div" && (e.attribs?.["data-type"] === "detailsContent" || e.attribs?.["data-type"] === "details-content")), c = s ? s.children ?? [] : o, l = a ? (0, kC.domToReact)(a.children, t.options) : null, u = /* @__PURE__ */ w(C, { children: (0, kC.domToReact)(c, t.options) });
	return /* @__PURE__ */ w(MC, {
		defaultOpen: e.attribs?.open !== void 0 || e.attribs?.["data-open"] === "true",
		summary: l,
		body: u
	});
}, PC = {
	card: "border-wx-border bg-wx-bg-elevated/60",
	callout: "border-wx-primary/30 bg-wx-primary/5",
	note: "border-wx-border bg-wx-bg-elevated/60",
	tip: "border-wx-success/30 bg-wx-success/5",
	warning: "border-wx-warning/30 bg-wx-warning/5",
	danger: "border-wx-danger/30 bg-wx-danger/5"
}, FC = (e, t) => {
	let n = PC[e.name];
	if (n) return /* @__PURE__ */ w("div", {
		className: `my-4 rounded-wx-md border px-4 py-3 ${n}`,
		"data-custom-block": e.name,
		children: (0, kC.domToReact)(e.children ?? [], t.options)
	});
};
//#endregion
//#region lib/article-toc.ts
function IC(e, t) {
	let n = e.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "section", r = n, i = 2;
	for (; t.has(r);) r = `${n}-${i}`, i += 1;
	return t.add(r), r;
}
//#endregion
//#region components/widget/article-html/extract-text.ts
function LC(e) {
	let t = "";
	for (let n of e.children ?? []) n.type === "text" ? t += n.data ?? "" : n instanceof kC.Element && (t += LC(n));
	return t;
}
//#endregion
//#region components/widget/article-html/build-options/heading.ts
var RC = (e, t) => {
	if (e.name !== "h1" && e.name !== "h2" && e.name !== "h3") return;
	let n = Number(e.name.slice(1)), r = LC(e).trim();
	if (!r) return;
	let i = IC(r, t.seenIds);
	return t.entries.push({
		id: i,
		text: r,
		level: n
	}), h(e.name, { id: i }, (0, kC.domToReact)(e.children ?? [], t.options));
}, zC = (e, t) => {
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
		return /* @__PURE__ */ w("button", {
			type: "button",
			onClick: () => n(e),
			className: "my-3 block w-full cursor-zoom-in border-0 bg-transparent p-0",
			"aria-label": c || "Open image",
			children: /* @__PURE__ */ w("img", {
				src: s,
				alt: c,
				style: l,
				className: "max-w-full"
			})
		});
	}
	return /* @__PURE__ */ w("img", {
		src: s,
		alt: c,
		style: l,
		className: "my-3 max-w-full"
	});
}, BC = (e, t) => {
	if (e.name !== "a") return;
	let n = e.attribs?.href ?? "";
	return /* @__PURE__ */ w("a", {
		href: n,
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: () => t.onLinkClick?.(n),
		className: "text-wx-primary underline underline-offset-2 transition-opacity hover:opacity-70",
		children: (0, kC.domToReact)(e.children ?? [], t.options)
	});
}, VC = (e, t) => {
	if (e.name === "table") return /* @__PURE__ */ w("div", {
		className: c("my-3 overflow-x-auto", "[scrollbar-width:thin] [scrollbar-color:var(--color-wx-fg-subtle)_transparent]", "[&::-webkit-scrollbar]:h-2", "[&::-webkit-scrollbar-track]:bg-transparent", "[&::-webkit-scrollbar-thumb]:rounded-full", "[&::-webkit-scrollbar-thumb]:bg-wx-fg-subtle/40", "[&::-webkit-scrollbar-thumb:hover]:bg-wx-fg-subtle/60"),
		children: /* @__PURE__ */ w("table", { children: (0, kC.domToReact)(e.children ?? [], t.options) })
	});
};
//#endregion
//#region components/widget/article-html/blocks/tabs-block.tsx
function HC({ tabs: e }) {
	let t = s("article"), [n, r] = S(0);
	return e.length === 0 ? null : /* @__PURE__ */ T("div", {
		className: "my-4",
		children: [/* @__PURE__ */ w("div", {
			role: "tablist",
			className: "relative flex items-center gap-1 border-b border-wx-border",
			children: e.map((e, i) => {
				let a = i === n, o = e.label || t("tabFallback", { n: i + 1 });
				return /* @__PURE__ */ T("button", {
					type: "button",
					role: "tab",
					"aria-selected": a,
					tabIndex: a ? 0 : -1,
					onClick: () => r(i),
					className: c("group relative inline-flex items-center justify-center px-3 py-2 text-sm", "transition-colors focus-visible:outline-none", a ? "font-semibold text-wx-fg" : "font-medium text-wx-fg-muted hover:text-wx-fg"),
					children: [o, /* @__PURE__ */ w("span", {
						"aria-hidden": "true",
						className: c("pointer-events-none absolute inset-x-2 bottom-0 h-[2px] origin-left rounded-full bg-wx-primary", "transition-transform duration-200 ease-out", a ? "scale-x-100" : "scale-x-0")
					})]
				}, i);
			})
		}), /* @__PURE__ */ w("div", {
			className: "mt-3 text-sm leading-relaxed text-wx-fg [&>:first-child]:mt-0 [&>:last-child]:mb-0",
			children: e[n]?.body
		})]
	});
}
//#endregion
//#region components/widget/article-html/build-options.ts
var UC = [
	RC,
	(e, t) => {
		if (e.name === "div" && (e.attribs?.["data-type"] === "tabs" || e.attribs?.["data-type"] === "tabs")) return /* @__PURE__ */ w(HC, { tabs: (e.children ?? []).filter((e) => e instanceof kC.Element && e.name === "div" && e.attribs?.["data-type"] === "tab").map((e) => {
			let n = e.children?.find((e) => e instanceof kC.Element && e.name === "div" && "data-tab-label" in (e.attribs ?? {})), r = (e.children ?? []).filter((e) => e !== n);
			return {
				label: n ? LC(n).trim() : "",
				body: /* @__PURE__ */ w(C, { children: (0, kC.domToReact)(r, t.options) })
			};
		}) });
	},
	NC,
	FC,
	VC,
	zC,
	BC
];
function WC(e, t, n, r, i) {
	let a = {}, o = {
		options: a,
		entries: e,
		seenIds: t,
		images: n,
		onImageClick: r,
		onLinkClick: i
	};
	return a.replace = (e) => {
		if (e instanceof kC.Element) for (let t of UC) {
			let n = t(e, o);
			if (n !== void 0) return n;
		}
	}, a;
}
//#endregion
//#region components/widget/article-html/index.tsx
function GC({ html: e, className: t, onLinkClick: n }) {
	let [r, i] = S(null), { trackLinkClick: a } = mp(), o = g((e) => a({
		url: e,
		targetType: "EXTERNAL"
	}), [a]), s = n ?? o, { parsed: c, entries: l, images: u } = b(() => {
		let t = [], n = /* @__PURE__ */ new Set(), r = [];
		return {
			parsed: AC(e, WC(t, n, r, i, s)),
			entries: t,
			images: r
		};
	}, [e, s]);
	return /* @__PURE__ */ T("div", {
		className: t,
		children: [
			l.length >= 3 && /* @__PURE__ */ w(jC, { entries: l }),
			c,
			u.length > 0 && /* @__PURE__ */ w(gp, {
				items: u,
				initialIndex: r ?? 0,
				open: r !== null,
				onClose: () => i(null)
			})
		]
	});
}
function KC(e) {
	return AC(e, WC([], /* @__PURE__ */ new Set()));
}
//#endregion
//#region lib/content-languages.ts
var qC = [
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
function JC(e) {
	let t = qC.find((t) => t.value === e);
	if (t) return t.label;
	let n = e.split("-")[0].toLowerCase(), r = qC.find((e) => e.value === n);
	return r ? r.label : n.toUpperCase();
}
//#endregion
export { Uu as $, Ad as A, Hu as B, Kd as C, Ba as Ct, Vd as D, O as Dt, Ud as E, j as Et, cd as F, Pu as G, Ru as H, yd as I, Bu as J, wu as K, id as L, Ed as M, xd as N, Bd as O, ne as Ot, Sd as P, qu as Q, nd as R, Zd as S, G as St, Wd as T, we as Tt, Yu as U, Mu as V, Ou as W, Zu as X, $u as Y, Iu as Z, cf as _, Al as _t, qy as a, gu as at, $d as b, Ol as bt, mp as c, du as ct, Sf as d, Wl as dt, Gu as et, xf as f, Hl as ft, uf as g, Fl as gt, gf as h, Ll as ht, ZS as i, fu as it, Td as j, jd as k, A as kt, up as l, Zl as lt, vf as m, zl as mt, GC as n, xu as nt, gp as o, mu as ot, bf as p, Bl as pt, Eu as q, KC as r, yu as rt, hp as s, vu as st, JC as t, Au as tt, cp as u, Gl as ut, lf as v, kl as vt, qd as w, za as wt, Qd as x, ll as xt, Jd as y, jl as yt, Wu as z };

//# sourceMappingURL=widget-react-Dtx_fW3V.js.map