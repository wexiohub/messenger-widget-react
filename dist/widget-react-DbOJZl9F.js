globalThis.process === void 0 && (globalThis.process = {
	env: {},
	nextTick: function(e) {
		setTimeout(e, 0);
	},
	emit: function() {
		return !1;
	}
});
import * as e from "react";
import * as t from "react-dom";
import * as n from "react/jsx-runtime";
import * as r from "react-dom/client";
function i(i) {
	switch (i) {
		case "react": return e;
		case "react-dom": return t;
		case "react/jsx-runtime": return n;
		case "react-dom/client": return r;
	}
	throw Error("[wexio-widget] unexpected require(" + JSON.stringify(i) + ")");
}
import { Component as a, Fragment as o, createContext as s, createElement as c, forwardRef as l, useCallback as u, useContext as d, useEffect as f, useId as p, useInsertionEffect as m, useLayoutEffect as h, useMemo as g, useRef as _ } from "react";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var b = Object.create, x = Object.defineProperty, S = Object.getOwnPropertyDescriptor, C = Object.getOwnPropertyNames, ee = Object.getPrototypeOf, te = Object.prototype.hasOwnProperty, ne = (e, t) => () => (e && (t = e(e = 0)), t), re = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ie = (e, t) => {
	let n = {};
	for (var r in e) x(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || x(n, Symbol.toStringTag, { value: "Module" }), n;
}, ae = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = C(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !te.call(e, s) && s !== n && x(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = S(t, s)) || r.enumerable
	});
	return e;
}, oe = (e, t, n) => (n = e == null ? {} : b(ee(e)), ae(t || !e || !e.__esModule ? x(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), se = (e) => te.call(e, "module.exports") ? e["module.exports"] : ae(x({}, "__esModule", { value: !0 }), e), ce = /* @__PURE__ */ ((e) => i === void 0 ? typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (i === void 0 ? e : i)[t] }) : e : i)(function(e) {
	if (i !== void 0) return i.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), le = s({});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-constant.mjs
function ue(e) {
	let t = _(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var de = typeof window < "u" ? h : f, fe = /* @__PURE__ */ s(null);
//#endregion
//#region node_modules/motion-utils/dist/es/array.mjs
function pe(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function me(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region node_modules/motion-utils/dist/es/clamp.mjs
var w = (e, t, n) => n > t ? t : n < e ? e : n, he = () => {}, T = {}, ge = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
//#endregion
//#region node_modules/motion-utils/dist/es/is-object.mjs
function _e(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var ve = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/motion-utils/dist/es/memo.mjs
/* @__NO_SIDE_EFFECTS__ */
function ye(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/motion-utils/dist/es/noop.mjs
var E = /* @__NO_SIDE_EFFECTS__ */ (e) => e, be = (e, t) => (n) => t(e(n)), xe = (...e) => e.reduce(be), Se = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, Ce = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return pe(this.subscriptions, e), () => me(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, D = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, O = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
//#endregion
//#region node_modules/motion-utils/dist/es/velocity-per-second.mjs
function we(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var Te = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Ee = 1e-7, De = 12;
function Oe(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = Te(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > Ee && ++s < De);
	return o;
}
function ke(e, t, n, r) {
	if (e === t && n === r) return E;
	let i = (t) => Oe(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : Te(i(e), t, r);
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var Ae = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, je = (e) => (t) => 1 - e(1 - t), Me = /* @__PURE__ */ ke(.33, 1.53, .69, .99), Ne = /* @__PURE__ */ je(Me), Pe = /* @__PURE__ */ Ae(Ne), Fe = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * Ne(e) : .5 * (2 - 2 ** (-10 * (e - 1))), Ie = (e) => 1 - Math.sin(Math.acos(e)), Le = je(Ie), Re = Ae(Ie), ze = /* @__PURE__ */ ke(.42, 0, 1, 1), Be = /* @__PURE__ */ ke(0, 0, .58, 1), Ve = /* @__PURE__ */ ke(.42, 0, .58, 1), He = (e) => Array.isArray(e) && typeof e[0] != "number", Ue = (e) => Array.isArray(e) && typeof e[0] == "number", We = {
	linear: E,
	easeIn: ze,
	easeInOut: Ve,
	easeOut: Be,
	circIn: Ie,
	circInOut: Re,
	circOut: Le,
	backIn: Ne,
	backInOut: Pe,
	backOut: Me,
	anticipate: Fe
}, Ge = (e) => typeof e == "string", Ke = (e) => {
	if (Ue(e)) {
		e.length;
		let [t, n, r, i] = e;
		return ke(t, n, r, i);
	} else if (Ge(e)) return We[e], `${e}`, We[e];
	return e;
}, qe = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], k = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function Je(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, c = 0;
	function l(t) {
		o.has(t) && (u.schedule(t), e()), c++, t(s);
	}
	let u = {
		schedule: (e, t = !1, a = !1) => {
			let s = a && i ? n : r;
			return t && o.add(e), s.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, i) {
				a = !0;
				return;
			}
			i = !0;
			let o = n;
			n = r, r = o, n.forEach(l), t && k.value && k.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var Ye = 40;
function Xe(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = qe.reduce((e, n) => (e[n] = Je(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = T.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, Ye), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: qe.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < qe.length; t++) o[qe[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: A, cancel: j, state: M, steps: Ze } = /* @__PURE__ */ Xe(typeof requestAnimationFrame < "u" ? requestAnimationFrame : E, !0), Qe;
function $e() {
	Qe = void 0;
}
var N = {
	now: () => (Qe === void 0 && N.set(M.isProcessing || T.useManualTiming ? M.timestamp : performance.now()), Qe),
	set: (e) => {
		Qe = e, queueMicrotask($e);
	}
}, et = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, tt = (e) => (t) => typeof t == "string" && t.startsWith(e), nt = /* @__PURE__ */ tt("--"), rt = /* @__PURE__ */ tt("var(--"), it = (e) => rt(e) ? at.test(e.split("/*")[0].trim()) : !1, at = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ot(e) {
	return typeof e == "string" ? e.split("/*")[0].includes("var(--") : !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var st = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, ct = {
	...st,
	transform: (e) => w(0, 1, e)
}, lt = {
	...st,
	default: 1
}, ut = (e) => Math.round(e * 1e5) / 1e5, dt = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function ft(e) {
	return e == null;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var pt = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, mt = (e, t) => (n) => !!(typeof n == "string" && pt.test(n) && n.startsWith(e) || t && !ft(n) && Object.prototype.hasOwnProperty.call(n, t)), ht = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(dt);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, gt = (e) => w(0, 255, e), _t = {
	...st,
	transform: (e) => Math.round(gt(e))
}, P = {
	test: /* @__PURE__ */ mt("rgb", "red"),
	parse: /* @__PURE__ */ ht("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + _t.transform(e) + ", " + _t.transform(t) + ", " + _t.transform(n) + ", " + ut(ct.transform(r)) + ")"
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function vt(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var yt = {
	test: /* @__PURE__ */ mt("#"),
	parse: vt,
	transform: P.transform
}, bt = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), F = /* @__PURE__ */ bt("deg"), I = /* @__PURE__ */ bt("%"), L = /* @__PURE__ */ bt("px"), xt = /* @__PURE__ */ bt("vh"), St = /* @__PURE__ */ bt("vw"), Ct = {
	...I,
	parse: (e) => I.parse(e) / 100,
	transform: (e) => I.transform(e * 100)
}, wt = {
	test: /* @__PURE__ */ mt("hsl", "hue"),
	parse: /* @__PURE__ */ ht("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + I.transform(ut(t)) + ", " + I.transform(ut(n)) + ", " + ut(ct.transform(r)) + ")"
}, R = {
	test: (e) => P.test(e) || yt.test(e) || wt.test(e),
	parse: (e) => P.test(e) ? P.parse(e) : wt.test(e) ? wt.parse(e) : yt.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? P.transform(e) : wt.transform(e),
	getAnimatableNone: (e) => {
		let t = R.parse(e);
		return t.alpha = 0, R.transform(t);
	}
}, Tt = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function Et(e) {
	return isNaN(e) && typeof e == "string" && (e.match(dt)?.length || 0) + (e.match(Tt)?.length || 0) > 0;
}
var Dt = "number", Ot = "color", kt = "var", At = "var(", jt = "${}", Mt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Nt(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(Mt, (e) => (R.test(e) ? (r.color.push(a), i.push(Ot), n.push(R.parse(e))) : e.startsWith(At) ? (r.var.push(a), i.push(kt), n.push(e)) : (r.number.push(a), i.push(Dt), n.push(parseFloat(e))), ++a, jt)).split(jt),
		indexes: r,
		types: i
	};
}
function Pt(e) {
	return Nt(e).values;
}
function Ft({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Dt ? i += ut(r[a]) : e === Ot ? i += R.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function It(e) {
	return Ft(Nt(e));
}
var Lt = (e) => typeof e == "number" ? 0 : R.test(e) ? R.getAnimatableNone(e) : e, Rt = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : Lt(e);
function zt(e) {
	let t = Nt(e);
	return Ft(t)(t.values.map((e, n) => Rt(e, t.split[n])));
}
var z = {
	test: Et,
	parse: Pt,
	createTransformer: It,
	getAnimatableNone: zt
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function Bt(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Vt({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = Bt(s, r, e + 1 / 3), a = Bt(s, r, e), o = Bt(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function Ht(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/number.mjs
var B = (e, t, n) => e + (t - e) * n, Ut = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, Wt = [
	yt,
	P,
	wt
], Gt = (e) => Wt.find((t) => t.test(e));
function Kt(e) {
	let t = Gt(e);
	if (`${e}`, !t) return !1;
	let n = t.parse(e);
	return t === wt && (n = Vt(n)), n;
}
var qt = (e, t) => {
	let n = Kt(e), r = Kt(t);
	if (!n || !r) return Ht(e, t);
	let i = { ...n };
	return (e) => (i.red = Ut(n.red, r.red, e), i.green = Ut(n.green, r.green, e), i.blue = Ut(n.blue, r.blue, e), i.alpha = B(n.alpha, r.alpha, e), P.transform(i));
}, Jt = new Set(["none", "hidden"]);
function Yt(e, t) {
	return Jt.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function Xt(e, t) {
	return (n) => B(e, t, n);
}
function Zt(e) {
	return typeof e == "number" ? Xt : typeof e == "string" ? it(e) ? Ht : R.test(e) ? qt : tn : Array.isArray(e) ? Qt : typeof e == "object" ? R.test(e) ? qt : $t : Ht;
}
function Qt(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => Zt(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function $t(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Zt(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function en(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var tn = (e, t) => {
	let n = z.createTransformer(t), r = Nt(e), i = Nt(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Jt.has(e) && !i.values.length || Jt.has(t) && !r.values.length ? Yt(e, t) : xe(Qt(en(r, i), i.values), n) : (`${e}${t}`, Ht(e, t));
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/index.mjs
function nn(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? B(e, t, n) : Zt(e)(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var rn = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => A.update(t, e),
		stop: () => j(t),
		now: () => M.isProcessing ? M.timestamp : N.now()
	};
}, an = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, on = 2e4;
function sn(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function cn(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(sn(r), on);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ O(i)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var V = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function ln(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var un = 12;
function dn(e, t, n) {
	let r = n;
	for (let n = 1; n < un; n++) r -= e(r) / t(r);
	return r;
}
var fn = .001;
function pn({ duration: e = V.duration, bounce: t = V.bounce, velocity: n = V.velocity, mass: r = V.mass }) {
	let i, a;
	V.maxDuration;
	let o = 1 - t;
	o = w(V.minDamping, V.maxDamping, o), e = w(V.minDuration, V.maxDuration, /* @__PURE__ */ O(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = ln(t, o), c = Math.exp(-i);
		return fn - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = ln(t ** 2, o);
		return (-i(t) + fn > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => {
		let r = Math.exp(-t * e), i = (t - n) * e + 1;
		return -fn + r * i;
	}, a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = dn(i, a, s);
	if (e = /* @__PURE__ */ D(e), isNaN(c)) return {
		stiffness: V.stiffness,
		damping: V.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var mn = ["duration", "bounce"], hn = [
	"stiffness",
	"damping",
	"mass"
];
function gn(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function _n(e) {
	let t = {
		velocity: V.velocity,
		stiffness: V.stiffness,
		damping: V.damping,
		mass: V.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!gn(e, hn) && gn(e, mn)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * w(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: V.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = pn({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: V.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function vn(e = V.visualDuration, t = V.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = _n({
		...n,
		velocity: -/* @__PURE__ */ O(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ O(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r || (r = v ? V.restSpeed.granular : V.restSpeed.default), i || (i = v ? V.restDelta.granular : V.restDelta.default);
	let y, b, x, S, C, ee;
	if (h < 1) x = ln(_, h), S = (m + h * _ * g) / x, y = (e) => o - Math.exp(-h * _ * e) * (S * Math.sin(x * e) + g * Math.cos(x * e)), C = h * _ * S + g * x, ee = h * _ * g - S * x, b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + ee * Math.cos(x * e));
	else if (h === 1) {
		y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
		let e = m + _ * g;
		b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
	} else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
		let t = (m + h * _ * g) / e, n = h * _ * t - g * e, r = h * _ * g - t * e;
		b = (t) => {
			let i = Math.exp(-h * _ * t), a = Math.min(e * t, 300);
			return i * (n * Math.sinh(a) + r * Math.cosh(a));
		};
	}
	let te = {
		calculatedDuration: p && d || null,
		velocity: (e) => /* @__PURE__ */ D(b(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(x * e), a = Math.cos(x * e), c = o - t * (S * n + g * a), l = /* @__PURE__ */ D(t * (C * n + ee * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ D(b(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(sn(te), on), t = an((t) => te.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return te;
}
vn.applyToOptions = (e) => {
	let t = cn(e, 100, vn);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ D(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var yn = 5;
function bn(e, t, n) {
	let r = Math.max(t - yn, 0);
	return we(n - e(r), t - r);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function xn({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = vn({
			keyframes: [f.value, m(f.value)],
			velocity: bn(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/interpolate.mjs
function Sn(e, t, n) {
	let r = [], i = n || T.mix || nn, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = xe(Array.isArray(t) ? t[n] || E : t, a)), r.push(a);
	}
	return r;
}
function Cn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (t.length, a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Sn(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ Se(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(w(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function wn(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ Se(0, t, r);
		e.push(B(n, 1, i));
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Tn(e) {
	let t = [0];
	return wn(t, e.length - 1), t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function En(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Dn(e, t) {
	return e.map(() => t || Ve).splice(0, e.length - 1);
}
function On({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = He(r) ? r.map(Ke) : Ke(r), a = {
		done: !1,
		value: t[0]
	}, o = Cn(En(n && n.length === t.length ? n : Tn(t), e), t, { ease: Array.isArray(i) ? i : Dn(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var kn = (e) => e !== null;
function An(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(kn), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var jn = {
	decay: xn,
	inertia: xn,
	tween: On,
	keyframes: On,
	spring: vn
};
function Mn(e) {
	typeof e.type == "string" && (e.type = jn[e.type]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var Nn = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, Pn = (e) => e / 100, Fn = class extends Nn {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== N.now() && this.tick(N.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, et.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		Mn(e);
		let { type: t = On, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || On;
		s !== On && typeof o[0] != "number" && (this.mixKeyframes = xe(Pn, nn(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = sn(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
		this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let v = this.currentTime, y = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = w(0, 1, n) * o;
		}
		let b;
		_ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== xn && (b.value = An(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ O(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ O(e);
	}
	get time() {
		return /* @__PURE__ */ O(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ D(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return bn((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(N.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ O(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = rn, startTime: t } = this.options;
		this.driver || (this.driver = e((e) => this.tick(e))), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime || (this.startTime = t ?? n) : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(N.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, et.mainThread--;
	}
	stopDriver() {
		this.driver && (this.driver.stop(), this.driver = void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function In(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var H = (e) => e * 180 / Math.PI, Ln = (e) => zn(H(Math.atan2(e[1], e[0]))), Rn = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: Ln,
	rotateZ: Ln,
	skewX: (e) => H(Math.atan(e[1])),
	skewY: (e) => H(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, zn = (e) => (e %= 360, e < 0 && (e += 360), e), Bn = Ln, Vn = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Hn = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Un = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: Vn,
	scaleY: Hn,
	scale: (e) => (Vn(e) + Hn(e)) / 2,
	rotateX: (e) => zn(H(Math.atan2(e[6], e[5]))),
	rotateY: (e) => zn(H(Math.atan2(-e[2], e[0]))),
	rotateZ: Bn,
	rotate: Bn,
	skewX: (e) => H(Math.atan(e[4])),
	skewY: (e) => H(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Wn(e) {
	return +!!e.includes("scale");
}
function Gn(e, t) {
	if (!e || e === "none") return Wn(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = Un, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = Rn, i = t;
	}
	if (!i) return Wn(t);
	let a = r[t], o = i[1].split(",").map(qn);
	return typeof a == "function" ? a(o) : o[a];
}
var Kn = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return Gn(n, t);
};
function qn(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var Jn = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], Yn = new Set(Jn), Xn = (e) => e === st || e === L, Zn = new Set([
	"x",
	"y",
	"z"
]), Qn = Jn.filter((e) => !Zn.has(e));
function $n(e) {
	let t = [];
	return Qn.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var U = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => Gn(t, "x"),
	y: (e, { transform: t }) => Gn(t, "y")
};
U.translateX = U.x, U.translateY = U.y;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var W = /* @__PURE__ */ new Set(), er = !1, tr = !1, nr = !1;
function rr() {
	if (tr) {
		let e = Array.from(W).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = $n(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	tr = !1, er = !1, W.forEach((e) => e.complete(nr)), W.clear();
}
function ir() {
	W.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (tr = !0);
	});
}
function ar() {
	nr = !0, ir(), rr(), nr = !1;
}
var or = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (W.add(this), er || (er = !0, A.read(ir), A.resolveKeyframes(rr))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		In(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), W.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (W.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, sr = (e) => e.startsWith("--");
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function cr(e, t, n) {
	sr(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var lr = {};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function ur(e, t) {
	let n = /* @__PURE__ */ ye(e);
	return () => lr[t] ?? n();
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var dr = /* @__PURE__ */ ur(() => window.ScrollTimeline !== void 0, "scrollTimeline"), fr = /* @__PURE__ */ ur(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), pr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, mr = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /* @__PURE__ */ pr([
		0,
		.65,
		.55,
		1
	]),
	circOut: /* @__PURE__ */ pr([
		.55,
		0,
		1,
		.45
	]),
	backIn: /* @__PURE__ */ pr([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /* @__PURE__ */ pr([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function hr(e, t) {
	if (e) return typeof e == "function" ? fr() ? an(e, t) : "ease-out" : Ue(e) ? pr(e) : Array.isArray(e) ? e.map((e) => hr(e, t) || mr.easeOut) : mr[e];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function gr(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = hr(s, i);
	Array.isArray(d) && (u.easing = d), k.value && et.waapi++;
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	l && (f.pseudoElement = l);
	let p = e.animate(u, f);
	return k.value && p.finished.finally(() => {
		et.waapi--;
	}), p;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function _r(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function vr({ type: e, ...t }) {
	return _r(e) && fr() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var yr = class extends Nn {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, e.type;
		let c = vr(e);
		this.animation = gr(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = An(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), cr(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ O(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ O(e);
	}
	get time() {
		return /* @__PURE__ */ O(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ D(e), t && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && dr() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), E) : r(this);
	}
}, br = {
	anticipate: Fe,
	backInOut: Pe,
	circInOut: Re
};
function xr(e) {
	return e in br;
}
function Sr(e) {
	typeof e.ease == "string" && xr(e.ease) && (e.ease = br[e.ease]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var Cr = 10, wr = class extends yr {
	constructor(e) {
		Sr(e), Mn(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new Fn({
			...a,
			autoplay: !1
		}), s = Math.max(Cr, N.now() - this.startTime), c = w(0, Cr, s - Cr), l = o.sample(s).value, { name: u } = this.options;
		i && u && cr(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
	}
}, Tr = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (z.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Er(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Dr(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Tr(i, t), s = Tr(a, t);
	return `${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : Er(e) || (n === "spring" || _r(n)) && r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function Or(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var kr = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), Ar = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function jr(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && Ar.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var Mr = new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]), Nr = /* @__PURE__ */ ye(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Pr(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return Nr() && n && (kr.has(n) || Mr.has(n) && jr(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var Fr = 40, Ir = class extends Nn {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = N.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || or;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = N.now();
		let u = !0;
		Dr(e, i, a, o) || (u = !1, (T.instantAnimations || !s) && l?.(An(e, n, t)), e[0] = e[e.length - 1], Or(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > Fr ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && Pr(d), p = d.motionValue?.owner?.current, m;
		if (f) try {
			m = new wr({
				...d,
				element: p
			});
		} catch {
			m = new Fn(d);
		}
		else m = new Fn(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(E), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), ar()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function Lr(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
var Rr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function zr(e) {
	let t = Rr.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
function Br(e, t, n = 1) {
	`${e}`;
	let [r, i] = zr(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return ge(e) ? parseFloat(e) : e;
	}
	return it(i) ? Br(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var Vr = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, Hr = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), Ur = {
	type: "keyframes",
	duration: .8
}, Wr = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, Gr = (e, { keyframes: t }) => t.length > 2 ? Ur : Yn.has(e) ? e.startsWith("scale") ? Hr(t[1]) : Vr : Wr;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function Kr(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function qr(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : Kr(n, e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var Jr = new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
function Yr(e) {
	for (let t in e) if (!Jr.has(t)) return !0;
	return !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var Xr = (e, t, n, r = {}, i, a) => (o) => {
	let s = qr(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ D(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	Yr(s) || Object.assign(u, Gr(e, u)), u.duration && (u.duration = /* @__PURE__ */ D(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ D(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Or(u), u.delay === 0 && (d = !0)), (T.instantAnimations || T.skipAnimations || i?.shouldSkipAnimations) && (d = !0, Or(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = An(u.keyframes, s);
		if (e !== void 0) {
			A.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new Fn(u) : new Ir(u);
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function Zr(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function Qr(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = Zr(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = Zr(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function G(e, t, n) {
	let r = e.getProps();
	return Qr(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var $r = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...Jn
]), ei = 30, ti = (e) => !isNaN(parseFloat(e)), ni = { current: void 0 }, ri = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = N.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = N.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = ti(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new Ce());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), A.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return ni.current && ni.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = N.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > ei) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, ei);
		return we(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function ii(e, t) {
	return new ri(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var ai = (e) => Array.isArray(e);
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/setters.mjs
function oi(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ii(n));
}
function si(e) {
	return ai(e) ? e[e.length - 1] || 0 : e;
}
function ci(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = G(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) oi(e, t, si(i[t]));
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var K = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/is.mjs
function li(e) {
	return !!(K(e) && e.add);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function ui(e, t) {
	let n = e.getValue("willChange");
	if (li(n)) return n.add(t);
	if (!n && T.WillChange) {
		let n = new T.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function di(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var fi = "data-" + di("framerAppearId");
//#endregion
//#region node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function pi(e) {
	return e.props[fi];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function mi({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function hi(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? Kr(a, c) : c;
	let l = a?.reduceMotion;
	r && (a = r);
	let u = [], d = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || d && mi(d, t)) continue;
		let o = {
			delay: n,
			...qr(a || {}, t)
		}, c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			A.update(() => r.set(i));
			continue;
		}
		let f = !1;
		if (window.MotionHandoffAnimation) {
			let n = pi(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, A);
				e !== null && (o.startTime = e, f = !0);
			}
		}
		ui(e, t);
		let p = l ?? e.shouldReduceMotion;
		r.start(Xr(t, r, i, p && $r.has(t) ? { type: !1 } : o, e, f));
		let m = r.animation;
		m && u.push(m);
	}
	if (o) {
		let t = () => A.update(() => {
			o && ci(e, o);
		});
		u.length ? Promise.all(u).then(t) : t();
	}
	return u;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function gi(e, t, n = {}) {
	let r = G(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(hi(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return _i(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function _i(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(gi(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + Lr(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function vi(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => gi(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = gi(e, t, n);
	else {
		let i = typeof t == "function" ? G(e, t, n.custom) : t;
		r = Promise.all(hi(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/auto.mjs
var yi = {
	test: (e) => e === "auto",
	parse: (e) => e
}, bi = (e) => (t) => t.test(e), xi = [
	st,
	L,
	I,
	F,
	St,
	xt,
	yi
], Si = (e) => xi.find(bi(e));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Ci(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || ve(e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var wi = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Ti(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(dt) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!wi.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var Ei = /\b([a-z-]*)\(.*?\)/gu, Di = {
	...z,
	getAnimatableNone: (e) => {
		let t = e.match(Ei);
		return t ? t.map(Ti).join(" ") : e;
	}
}, Oi = {
	...z,
	getAnimatableNone: (e) => {
		let t = z.parse(e);
		return z.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, ki = {
	...st,
	transform: Math.round
}, Ai = {
	borderWidth: L,
	borderTopWidth: L,
	borderRightWidth: L,
	borderBottomWidth: L,
	borderLeftWidth: L,
	borderRadius: L,
	borderTopLeftRadius: L,
	borderTopRightRadius: L,
	borderBottomRightRadius: L,
	borderBottomLeftRadius: L,
	width: L,
	maxWidth: L,
	height: L,
	maxHeight: L,
	top: L,
	right: L,
	bottom: L,
	left: L,
	inset: L,
	insetBlock: L,
	insetBlockStart: L,
	insetBlockEnd: L,
	insetInline: L,
	insetInlineStart: L,
	insetInlineEnd: L,
	padding: L,
	paddingTop: L,
	paddingRight: L,
	paddingBottom: L,
	paddingLeft: L,
	paddingBlock: L,
	paddingBlockStart: L,
	paddingBlockEnd: L,
	paddingInline: L,
	paddingInlineStart: L,
	paddingInlineEnd: L,
	margin: L,
	marginTop: L,
	marginRight: L,
	marginBottom: L,
	marginLeft: L,
	marginBlock: L,
	marginBlockStart: L,
	marginBlockEnd: L,
	marginInline: L,
	marginInlineStart: L,
	marginInlineEnd: L,
	fontSize: L,
	backgroundPositionX: L,
	backgroundPositionY: L,
	rotate: F,
	rotateX: F,
	rotateY: F,
	rotateZ: F,
	scale: lt,
	scaleX: lt,
	scaleY: lt,
	scaleZ: lt,
	skew: F,
	skewX: F,
	skewY: F,
	distance: L,
	translateX: L,
	translateY: L,
	translateZ: L,
	x: L,
	y: L,
	z: L,
	perspective: L,
	transformPerspective: L,
	opacity: ct,
	originX: Ct,
	originY: Ct,
	originZ: L,
	zIndex: ki,
	fillOpacity: ct,
	strokeOpacity: ct,
	numOctaves: ki
}, ji = {
	...Ai,
	color: R,
	backgroundColor: R,
	outlineColor: R,
	fill: R,
	stroke: R,
	borderColor: R,
	borderTopColor: R,
	borderRightColor: R,
	borderBottomColor: R,
	borderLeftColor: R,
	filter: Di,
	WebkitFilter: Di,
	mask: Oi,
	WebkitMask: Oi
}, Mi = (e) => ji[e], Ni = /* @__PURE__ */ new Set([Di, Oi]);
function Pi(e, t) {
	let n = Mi(e);
	return Ni.has(n) || (n = z), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var Fi = new Set([
	"auto",
	"none",
	"0"
]);
function Ii(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !Fi.has(t) && Nt(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = Pi(n, i);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var Li = class extends or {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), it(r))) {
				let i = Br(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !$r.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Si(r), o = Si(i);
		if (ot(r) !== ot(i) && U[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (Xn(a) && Xn(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else U[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Ci(e[t])) && n.push(t);
		n.length && Ii(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = U[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = U[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function Ri(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var zi = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function Bi(e) {
	return _e(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: Vi, cancel: Hi } = /* @__PURE__ */ Xe(queueMicrotask, !1), q = {
	x: !1,
	y: !1
};
function Ui() {
	return q.x || q.y;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function Wi(e) {
	return e === "x" || e === "y" ? q[e] ? null : (q[e] = !0, () => {
		q[e] = !1;
	}) : q.x || q.y ? null : (q.x = q.y = !0, () => {
		q.x = q.y = !1;
	});
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function Gi(e, t) {
	let n = Ri(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/hover.mjs
function Ki(e) {
	return !(e.pointerType === "touch" || Ui());
}
function qi(e, t, n = {}) {
	let [r, i, a] = Gi(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", u);
		}, s = (e) => {
			a && (a(e), a = void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", c, i);
		}, u = (e) => {
			if (e.pointerType !== "touch") {
				if (n) {
					r = !0;
					return;
				}
				s(e);
			}
		};
		e.addEventListener("pointerenter", (n) => {
			if (!Ki(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var Ji = (e, t) => t ? e === t ? !0 : Ji(e, t.parentElement) : !1, Yi = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Xi = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function Zi(e) {
	return Xi.has(e.tagName) || e.isContentEditable === !0;
}
var Qi = new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function $i(e) {
	return Qi.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var ea = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function ta(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function na(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var ra = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = ta(() => {
		if (ea.has(n)) return;
		na(n, "down");
		let e = ta(() => {
			na(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => na(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/index.mjs
function ia(e) {
	return Yi(e) && !Ui();
}
var aa = /* @__PURE__ */ new WeakSet();
function oa(e, t, n = {}) {
	let [r, i, a] = Gi(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!ia(e) || aa.has(e)) return;
		ea.add(r), n.stopPropagation && aa.add(e);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), ea.has(r) && ea.delete(r), ia(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || Ji(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), Bi(e) && (e.addEventListener("focus", (e) => ra(e, i)), !Zi(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function sa(e) {
	return _e(e) && "ownerSVGElement" in e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/handle-element.mjs
var ca = /* @__PURE__ */ new WeakMap(), la, ua = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : sa(r) && "getBBox" in r ? r.getBBox()[t] : r[n], da = /* @__PURE__ */ ua("inline", "width", "offsetWidth"), fa = /* @__PURE__ */ ua("block", "height", "offsetHeight");
function pa({ target: e, borderBoxSize: t }) {
	ca.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return da(e, t);
			},
			get height() {
				return fa(e, t);
			}
		});
	});
}
function ma(e) {
	e.forEach(pa);
}
function ha() {
	typeof ResizeObserver > "u" || (la = new ResizeObserver(ma));
}
function ga(e, t) {
	la || ha();
	let n = Ri(e);
	return n.forEach((e) => {
		let n = ca.get(e);
		n || (n = /* @__PURE__ */ new Set(), ca.set(e, n)), n.add(t), la?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = ca.get(e);
			n?.delete(t), n?.size || la?.unobserve(e);
		});
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/handle-window.mjs
var _a = /* @__PURE__ */ new Set(), va;
function ya() {
	va = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		_a.forEach((t) => t(e));
	}, window.addEventListener("resize", va);
}
function ba(e) {
	return _a.add(e), va || ya(), () => {
		_a.delete(e), !_a.size && typeof va == "function" && (window.removeEventListener("resize", va), va = void 0);
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/index.mjs
function xa(e, t) {
	return typeof e == "function" ? ba(e) : ga(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function Sa(e) {
	return sa(e) && e.tagName === "svg";
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var Ca = [
	...xi,
	R,
	z
], wa = (e) => Ca.find(bi(e)), Ta = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), Ea = () => ({
	x: Ta(),
	y: Ta()
}), Da = () => ({
	min: 0,
	max: 0
}), J = () => ({
	x: Da(),
	y: Da()
}), Oa = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function ka(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function Aa(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var ja = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], Ma = ["initial", ...ja];
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function Na(e) {
	return ka(e.animate) || Ma.some((t) => Aa(e[t]));
}
function Pa(e) {
	return !!(Na(e) || e.variants);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function Fa(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (K(i)) e.addValue(r, i);
		else if (K(a)) e.addValue(r, ii(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, ii(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var Ia = { current: null }, La = { current: !1 }, Ra = typeof window < "u";
function za() {
	if (La.current = !0, Ra) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ia.current = e.matches;
		e.addEventListener("change", t), t();
	} else Ia.current = !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/VisualElement.mjs
var Ba = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Va = {};
function Ha(e) {
	Va = e;
}
function Ua() {
	return Va;
}
var Wa = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = or, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = N.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, A.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = Na(t), this.isVariantNode = Pa(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && K(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, Oa.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (La.current || za(), this.shouldReduceMotion = Ia.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), j(this.notifyUpdate), j(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && kr.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new yr({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ D(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = Yn.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && A.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i(), t.owner && t.stop();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in Va) {
			let t = Va[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : J();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < Ba.length; t++) {
			let n = Ba[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = Fa(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = ii(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (ge(n) || ve(n)) ? n = parseFloat(n) : !wa(n) && z.test(t) && (n = Pi(e, t)), this.setBaseTarget(e, K(n) ? n.get() : n)), K(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = Qr(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !K(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new Ce()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		Vi.render(this.render);
	}
}, Ga = class extends Wa {
	constructor() {
		super(...arguments), this.KeyframeResolver = Li;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		K(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, Y = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function Ka({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function qa({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function Ja(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function Ya(e) {
	return e === void 0 || e === 1;
}
function Xa({ scale: e, scaleX: t, scaleY: n }) {
	return !Ya(e) || !Ya(t) || !Ya(n);
}
function Za(e) {
	return Xa(e) || Qa(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Qa(e) {
	return $a(e.x) || $a(e.y);
}
function $a(e) {
	return e && e !== "0%";
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function eo(e, t, n) {
	return n + t * (e - n);
}
function to(e, t, n, r, i) {
	return i !== void 0 && (e = eo(e, i, r)), eo(e, n, r) + t;
}
function no(e, t = 0, n = 1, r, i) {
	e.min = to(e.min, t, n, r, i), e.max = to(e.max, t, n, r, i);
}
function ro(e, { x: t, y: n }) {
	no(e.x, t.translate, t.scale, t.originPoint), no(e.y, n.translate, n.scale, n.originPoint);
}
var io = .999999999999, ao = 1.0000000000001;
function oo(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && (X(e.x, -a.scroll.offset.x), X(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, ro(e, o)), r && Za(a.latestValues) && lo(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < ao && t.x > io && (t.x = 1), t.y < ao && t.y > io && (t.y = 1);
}
function X(e, t) {
	e.min += t, e.max += t;
}
function so(e, t, n, r, i = .5) {
	no(e, t, n, B(e.min, e.max, i), r);
}
function co(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function lo(e, t, n) {
	let r = n ?? e;
	so(e.x, co(t.x, r.x), t.scaleX, t.scale, t.originX), so(e.y, co(t.y, r.y), t.scaleY, t.scale, t.originY);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function uo(e, t) {
	return Ka(Ja(e.getBoundingClientRect(), t));
}
function fo(e, t, n) {
	let r = uo(e, n), { scroll: i } = t;
	return i && (X(r.x, i.offset.x), X(r.y, i.offset.y)), r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var po = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, mo = Jn.length;
function ho(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < mo; a++) {
		let o = Jn[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = zi(s, Ai[o]);
			if (!c) {
				i = !1;
				let t = po[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function go(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (Yn.has(e)) {
			o = !0;
			continue;
		} else if (nt(e)) {
			i[e] = n;
			continue;
		} else {
			let t = zi(n, Ai[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = ho(t, e.transform, n) : r.transform && (r.transform = "none")), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function _o(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function vo(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var yo = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (L.test(e)) e = parseFloat(e);
	else return e;
	return `${vo(e, t.target.x)}% ${vo(e, t.target.y)}%`;
} }, bo = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = z.parse(e);
	if (i.length > 5) return r;
	let a = z.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = B(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, xo = {
	borderRadius: {
		...yo,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: yo,
	borderTopRightRadius: yo,
	borderBottomLeftRadius: yo,
	borderBottomRightRadius: yo,
	boxShadow: bo
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function So(e, { layout: t, layoutId: n }) {
	return Yn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!xo[e] || e === "opacity");
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function Co(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (K(r[t]) || i && K(i[t]) || So(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function wo(e) {
	return window.getComputedStyle(e);
}
var To = class extends Ga {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = _o;
	}
	readValueFromInstance(e, t) {
		if (Yn.has(t)) return this.projection?.isProjecting ? Wn(t) : Kn(e, t);
		{
			let n = wo(e), r = (nt(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return uo(e, t);
	}
	build(e, t, n) {
		go(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Co(e, t, n);
	}
}, Eo = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, Do = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function Oo(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? Eo : Do;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var ko = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function Ao(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (go(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of ko) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && Oo(d, i, a, o, !1);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var jo = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]), Mo = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function No(e, t, n, r) {
	_o(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(jo.has(n) ? n : di(n), t.attrs[n]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function Po(e, t, n) {
	let r = Co(e, t, n);
	for (let n in e) if (K(e[n]) || K(t[n])) {
		let t = Jn.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var Fo = class extends Ga {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = J;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (Yn.has(t)) {
			let e = Mi(t);
			return e && e.default || 0;
		}
		return t = jo.has(t) ? t : di(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Po(e, t, n);
	}
	build(e, t, n) {
		Ao(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		No(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = Mo(e.tagName), super.mount(e);
	}
}, Io = Ma.length;
function Lo(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Lo(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < Io; n++) {
		let r = Ma[n], i = e.props[r];
		(Aa(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function Ro(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var zo = [...ja].reverse(), Bo = ja.length;
function Vo(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => vi(e, t, n)));
}
function Ho(e) {
	let t = Vo(e), n = Go(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = G(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function o(n) {
		t = n(e);
	}
	function s(o) {
		let { props: s } = e, c = Lo(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < Bo; t++) {
			let p = zo[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = Aa(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || ka(h) || typeof h == "boolean") continue;
			if (p === "exit" && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = Uo(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: ee = {} } = m, te = {
				...ee,
				...C
			}, ne = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in te) {
				let t = C[e], n = ee[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = ai(t) && ai(n) ? !Ro(t, n) : t !== n, r ? t == null ? u.add(e) : ne(e) : t !== void 0 && u.has(e) ? ne(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let re = v && y;
			b && (!re || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !re && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = G(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = Lr(r.enteringChildren, e, t);
					}
				}
				return {
					animation: t,
					options: n
				};
			}));
		}
		if (u.size) {
			let t = {};
			if (typeof s.initial != "boolean") {
				let n = G(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
				n && n.transition && (t.transition = n.transition);
			}
			u.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), l.push({ animation: t });
		}
		let p = !!l.length;
		return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve();
	}
	function c(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = s(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: s,
		setActive: c,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			n = Go(), i = !0;
		}
	};
}
function Uo(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ro(t, e) : !1;
}
function Wo(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function Go() {
	return {
		animate: Wo(!0),
		whileInView: Wo(),
		whileHover: Wo(),
		whileTap: Wo(),
		whileDrag: Wo(),
		whileFocus: Wo(),
		exit: Wo()
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function Ko(e, t) {
	e.min = t.min, e.max = t.max;
}
function Z(e, t) {
	Ko(e.x, t.x), Ko(e.y, t.y);
}
function qo(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var Jo = 1e-4, Yo = 1 - Jo, Xo = 1 + Jo, Zo = .01, Qo = 0 - Zo, $o = 0 + Zo;
function Q(e) {
	return e.max - e.min;
}
function es(e, t, n) {
	return Math.abs(e - t) <= n;
}
function ts(e, t, n, r = .5) {
	e.origin = r, e.originPoint = B(t.min, t.max, e.origin), e.scale = Q(n) / Q(t), e.translate = B(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Yo && e.scale <= Xo || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Qo && e.translate <= $o || isNaN(e.translate)) && (e.translate = 0);
}
function ns(e, t, n, r) {
	ts(e.x, t.x, n.x, r ? r.originX : void 0), ts(e.y, t.y, n.y, r ? r.originY : void 0);
}
function rs(e, t, n, r = 0) {
	e.min = (r ? B(n.min, n.max, r) : n.min) + t.min, e.max = e.min + Q(t);
}
function is(e, t, n, r) {
	rs(e.x, t.x, n.x, r?.x), rs(e.y, t.y, n.y, r?.y);
}
function as(e, t, n, r = 0) {
	let i = r ? B(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + Q(t);
}
function os(e, t, n, r) {
	as(e.x, t.x, n.x, r?.x), as(e.y, t.y, n.y, r?.y);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function ss(e, t, n, r, i) {
	return e -= t, e = eo(e, 1 / n, r), i !== void 0 && (e = eo(e, 1 / i, r)), e;
}
function cs(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (I.test(t) && (t = parseFloat(t), t = B(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = B(a.min, a.max, r);
	e === a && (s -= t), e.min = ss(e.min, t, n, s, i), e.max = ss(e.max, t, n, s, i);
}
function ls(e, t, [n, r, i], a, o) {
	cs(e, t[n], t[r], t[i], t.scale, a, o);
}
var us = [
	"x",
	"scaleX",
	"originX"
], ds = [
	"y",
	"scaleY",
	"originY"
];
function fs(e, t, n, r) {
	ls(e.x, t, us, n ? n.x : void 0, r ? r.x : void 0), ls(e.y, t, ds, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function ps(e) {
	return e.translate === 0 && e.scale === 1;
}
function ms(e) {
	return ps(e.x) && ps(e.y);
}
function hs(e, t) {
	return e.min === t.min && e.max === t.max;
}
function gs(e, t) {
	return hs(e.x, t.x) && hs(e.y, t.y);
}
function _s(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function vs(e, t) {
	return _s(e.x, t.x) && _s(e.y, t.y);
}
function ys(e) {
	return Q(e.x) / Q(e.y);
}
function bs(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function $(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function xs(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: s } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), a && (r += `rotateY(${a}deg) `), o && (r += `skewX(${o}deg) `), s && (r += `skewY(${s}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var Ss = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomLeftRadius",
	"borderBottomRightRadius"
], Cs = Ss.length, ws = (e) => typeof e == "string" ? parseFloat(e) : e, Ts = (e) => typeof e == "number" || L.test(e);
function Es(e, t, n, r, i, a) {
	i ? (e.opacity = B(0, n.opacity ?? 1, Os(r)), e.opacityExit = B(t.opacity ?? 1, 0, ks(r))) : a && (e.opacity = B(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < Cs; i++) {
		let a = Ss[i], o = Ds(t, a), s = Ds(n, a);
		o === void 0 && s === void 0 || (o || (o = 0), s || (s = 0), o === 0 || s === 0 || Ts(o) === Ts(s) ? (e[a] = Math.max(B(ws(o), ws(s), r), 0), (I.test(s) || I.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = B(t.rotate || 0, n.rotate || 0, r));
}
function Ds(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var Os = /* @__PURE__ */ As(0, .5, Le), ks = /* @__PURE__ */ As(.5, .95, E);
function As(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Se(e, t, r));
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function js(e, t, n) {
	let r = K(e) ? e : ii(e);
	return r.start(Xr("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function Ms(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var Ns = (e, t) => e.depth - t.depth, Ps = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		pe(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		me(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(Ns), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/delay.mjs
function Fs(e, t) {
	let n = N.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (j(r), e(a - t));
	};
	return A.setup(r, !0), () => j(r);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function Is(e) {
	return K(e) ? e.get() : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var Ls = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		pe(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			(!r || r.isConnected === !1) && !n.snapshot && (me(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (me(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
			let e = this.members[t];
			if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return this.promote(e), !0;
		}
		return !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.updateSnapshot(), e.scheduleRender();
			let { layoutDependency: r } = n.options, { layoutDependency: i } = e.options;
			(r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => e.instance && e.scheduleRender(!1));
	}
	removeLeadSnapshot() {
		this.lead?.snapshot && (this.lead.snapshot = void 0);
	}
}, Rs = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, zs = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, Bs = [
	"",
	"X",
	"Y",
	"Z"
], Vs = 1e3, Hs = 0;
function Us(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ws(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = pi(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", A, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && Ws(r);
}
function Gs({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = Hs++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, k.value && (zs.nodes = zs.calculatedTargetDeltas = zs.calculatedProjections = 0), this.nodes.forEach(Js), this.nodes.forEach(rc), this.nodes.forEach(ic), this.nodes.forEach(Ys), k.addProjectionMetrics && k.addProjectionMetrics(zs);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Ps());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new Ce()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = sa(t) && !Sa(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				A.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = Fs(i, 250), Rs.hasAnimatedSinceResize && (Rs.hasAnimatedSinceResize = !1, this.nodes.forEach(nc)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || dc, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !vs(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...qr(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l);
				} else t || nc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), j(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ac), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ws(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, (typeof t.latestValues.x == "string" || typeof t.latestValues.y == "string") && (t.isLayoutDirty = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				let e = this.updateBlockedByResize;
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Qs), this.nodes.forEach(Zs);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach($s);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(ec), this.nodes.forEach(tc), this.nodes.forEach(Ks), this.nodes.forEach(qs)) : this.nodes.forEach($s), this.clearAllSnapshots();
			let e = N.now();
			M.delta = w(0, 1e3 / 60, e - M.timestamp), M.timestamp = e, M.isProcessing = !0, Ze.update.process(M), Ze.preRender.process(M), Ze.render.process(M), M.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, Vi.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Xs), this.sharedNodes.forEach(oc);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, A.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			A.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Q(this.snapshot.measuredBox.x) && !Q(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = J()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !ms(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || Za(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), hc(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return J();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(_c))) {
				let { scroll: e } = this.root;
				e && (X(t.x, e.offset.x), X(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = J();
			if (Z(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && Z(t, e), X(t.x, i.offset.x), X(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n) {
			let r = n || J();
			Z(r, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (X(r.x, -n.scroll.offset.x), X(r.y, -n.scroll.offset.y)), Za(n.latestValues) && lo(r, n.latestValues, n.layout?.layoutBox);
			}
			return Za(this.latestValues) && lo(r, this.latestValues, this.layout?.layoutBox), r;
		}
		removeTransform(e) {
			let t = J();
			Z(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!Za(n.latestValues)) continue;
				let r;
				n.instance && (Xa(n.latestValues) && n.updateSnapshot(), r = J(), Z(r, n.measurePageBox())), fs(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return Za(this.latestValues) && fs(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 ? !0 : e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== M.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = t.isSharedProjectionDirty);
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = M.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = J(), this.targetWithTransforms = J()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), is(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Z(this.target, this.layout.layoutBox), ro(this.target, this.targetDelta)) : Z(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), k.value && zs.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Xa(this.parent.latestValues) || Qa(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = J(), this.relativeTargetOrigin = J(), os(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), Z(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === M.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			Z(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			oo(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = J());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (qo(this.prevProjectionDelta.x, this.projectionDelta.x), qo(this.prevProjectionDelta.y, this.projectionDelta.y)), ns(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !bs(this.projectionDelta.x, this.prevProjectionDelta.x) || !bs(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), k.value && zs.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = Ea(), this.projectionDelta = Ea(), this.projectionDeltaWithTransform = Ea();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = Ea();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = J(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), l = !c || c.members.length <= 1, u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(uc));
			this.animationProgress = 0;
			let d;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				sc(a.x, e.x, n), sc(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (os(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), lc(this.relativeTarget, this.relativeTargetOrigin, o, n), d && gs(this.relativeTarget, d) && (this.isProjectionDirty = !1), d || (d = J()), Z(d, this.relativeTarget)), s && (this.animationValues = i, Es(i, r, this.latestValues, n, u, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (j(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = A.update(() => {
				Rs.hasAnimatedSinceResize = !0, et.layout++, this.motionValue || (this.motionValue = ii(0)), this.motionValue.jump(0, !1), this.currentAnimation = js(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onStop: () => {
						et.layout--;
					},
					onComplete: () => {
						et.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Vs), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && gc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || J();
					let t = Q(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = Q(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				Z(t, n), lo(t, i), ns(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new Ls()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return e ? e.lead === this : !0;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && Us("z", e, r, this.animationValues);
			for (let t = 0; t < Bs.length; t++) Us(`rotate${Bs[t]}`, e, r, this.animationValues), Us(`skew${Bs[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		applyProjectionStyles(e, t) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				e.visibility = "hidden";
				return;
			}
			let n = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = Is(t?.pointerEvents) || "", e.transform = n ? n(this.latestValues, "") : "none";
				return;
			}
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = Is(t?.pointerEvents) || ""), this.hasProjected && !Za(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = xs(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in xo) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: s } = xo[t], c = a === "none" ? i[t] : n(i[t], r);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = r === this ? Is(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(Zs), this.root.sharedNodes.clear();
		}
	};
}
function Ks(e) {
	e.updateLayout();
}
function qs(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		if (i === "size") $((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = Q(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === "x" || i === "y") {
			let e = i === "x" ? "y" : "x";
			Ko(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else gc(i, t.layoutBox, n) && $((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = Q(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = Ea();
		ns(o, n, t.layoutBox);
		let s = Ea();
		a ? ns(s, e.applyTransform(r, !0), t.measuredBox) : ns(s, n, t.layoutBox);
		let c = !ms(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = J();
					os(s, t.layoutBox, i.layoutBox, o);
					let c = J();
					os(c, n, a.layoutBox, o), vs(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: l
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function Js(e) {
	k.value && zs.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Ys(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Xs(e) {
	e.clearSnapshot();
}
function Zs(e) {
	e.clearMeasurements();
}
function Qs(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function $s(e) {
	e.isLayoutDirty = !1;
}
function ec(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function tc(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function nc(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function rc(e) {
	e.resolveTargetDelta();
}
function ic(e) {
	e.calcProjection();
}
function ac(e) {
	e.resetSkewAndRotation();
}
function oc(e) {
	e.removeLeadSnapshot();
}
function sc(e, t, n) {
	e.translate = B(t.translate, 0, n), e.scale = B(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function cc(e, t, n, r) {
	e.min = B(t.min, n.min, r), e.max = B(t.max, n.max, r);
}
function lc(e, t, n, r) {
	cc(e.x, t.x, n.x, r), cc(e.y, t.y, n.y, r);
}
function uc(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var dc = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, fc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), pc = fc("applewebkit/") && !fc("chrome/") ? Math.round : E;
function mc(e) {
	e.min = pc(e.min), e.max = pc(e.max);
}
function hc(e) {
	mc(e.x), mc(e.y);
}
function gc(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !es(ys(t), ys(n), .2);
}
function _c(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var vc = Gs({
	attachResizeListener: (e, t) => Ms(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), yc = { current: void 0 }, bc = Gs({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!yc.current) {
			let e = new vc({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), yc.current = e;
		}
		return yc.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), xc = s({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function Sc(e = !0) {
	let t = d(fe);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = p();
	f(() => {
		if (e) return i(a);
	}, [e]);
	let o = u(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/LazyContext.mjs
var Cc = s({ strict: !1 }), wc = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, Tc = !1;
function Ec() {
	if (Tc) return;
	let e = {};
	for (let t in wc) e[t] = { isEnabled: (e) => wc[t].some((t) => !!e[t]) };
	Ha(e), Tc = !0;
}
function Dc() {
	return Ec(), Ua();
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function Oc(e) {
	let t = Dc();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	Ha(t);
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var kc = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function Ac(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || kc.has(e);
}
//#endregion
//#region __vite-optional-peer-dep:@emotion/is-prop-valid:framer-motion
var jc = /* @__PURE__ */ ie({ default: () => Mc }), Mc, Nc = ne((() => {
	throw Mc = {}, Error("Could not resolve \"@emotion/is-prop-valid\" imported by \"framer-motion\". Is it installed?");
})), Pc = (e) => !Ac(e);
function Fc(e) {
	typeof e == "function" && (Pc = (t) => t.startsWith("on") ? !Ac(t) : e(t));
}
try {
	Fc((Nc(), se(jc)).default);
} catch {}
function Ic(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || K(e[i]) || (Pc(i) || n === !0 && Ac(i) || !t && !Ac(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var Lc = /* @__PURE__ */ s({});
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function Rc(e, t) {
	if (Na(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || Aa(t) ? t : void 0,
			animate: Aa(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function zc(e) {
	let { initial: t, animate: n } = Rc(e, d(Lc));
	return g(() => ({
		initial: t,
		animate: n
	}), [Bc(t), Bc(n)]);
}
function Bc(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var Vc = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/use-props.mjs
function Hc(e, t, n) {
	for (let r in t) !K(t[r]) && !So(r, n) && (e[r] = t[r]);
}
function Uc({ transformTemplate: e }, t) {
	return g(() => {
		let n = Vc();
		return go(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Wc(e, t) {
	let n = e.style || {}, r = {};
	return Hc(r, n, e), Object.assign(r, Uc(e, t)), r;
}
function Gc(e, t) {
	let n = {}, r = Wc(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var Kc = () => ({
	...Vc(),
	attrs: {}
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function qc(e, t, n, r) {
	let i = g(() => {
		let n = Kc();
		return Ao(n, t, Mo(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		Hc(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var Jc = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function Yc(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(Jc.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function Xc(e, t, n, { latestValues: r }, i, a = !1, s) {
	let l = (s ?? Yc(e) ? qc : Gc)(t, r, i, e), u = Ic(t, typeof e == "string", a), d = e === o ? {} : {
		...u,
		...l,
		ref: n
	}, { children: f } = t, p = g(() => K(f) ? f.get() : f, [f]);
	return c(e, {
		...d,
		children: p
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function Zc({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: Qc(n, r, i, e),
		renderState: t()
	};
}
function Qc(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = Is(a[e]);
	let { initial: o, animate: s } = e, c = Na(e), l = Pa(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u = u || o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !ka(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = Qr(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
var $c = (e) => (t, n) => {
	let r = d(Lc), i = d(fe), a = () => Zc(e, t, r, i);
	return n ? a() : ue(a);
}, el = /* @__PURE__ */ $c({
	scrapeMotionValuesFromProps: Co,
	createRenderState: Vc
}), tl = /* @__PURE__ */ $c({
	scrapeMotionValuesFromProps: Po,
	createRenderState: Kc
}), nl = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function rl(e, t, n) {
	let r = _(n);
	m(() => {
		r.current = n;
	});
	let i = _(null);
	return u((n) => {
		n && e.onMount?.(n);
		let a = r.current;
		if (typeof a == "function") if (n) {
			let e = a(n);
			typeof e == "function" && (i.current = e);
		} else i.current ? (i.current(), i.current = null) : a(n);
		else a && (a.current = n);
		t && (n ? t.mount(n) : t.unmount());
	}, [t]);
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var il = s({});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function al(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function ol(e, t, n, r, i, a) {
	let { visualElement: o } = d(Lc), s = d(Cc), c = d(fe), l = d(xc), u = l.reducedMotion, p = l.skipAnimations, h = _(null), g = _(!1);
	r = r || s.renderer, !h.current && r && (h.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: c,
		blockInitialAnimation: c ? c.initial === !1 : !1,
		reducedMotionConfig: u,
		skipAnimations: p,
		isSVG: a
	}), g.current && h.current && (h.current.manuallyAnimateOnMount = !0));
	let v = h.current, y = d(il);
	v && !v.projection && i && (v.type === "html" || v.type === "svg") && sl(h.current, n, i, y);
	let b = _(!1);
	m(() => {
		v && b.current && v.update(n, c);
	});
	let x = n[fi], S = _(!!x && typeof window < "u" && !window.MotionHandoffIsComplete?.(x) && window.MotionHasOptimisedAnimation?.(x));
	return de(() => {
		g.current = !0, v && (b.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), S.current && v.animationState && v.animationState.animateChanges());
	}), f(() => {
		v && (!S.current && v.animationState && v.animationState.animateChanges(), S.current && (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(x);
		}), S.current = !1), v.enteringChildren = void 0);
	}), v;
}
function sl(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : cl(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && al(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: c,
		layoutRoot: l,
		layoutAnchor: u
	});
}
function cl(e) {
	if (e) return e.options.allowProjection === !1 ? cl(e.parent) : e.projection;
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/index.mjs
function ll(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	r && Oc(r);
	let a = n ? n === "svg" : Yc(e), o = a ? tl : el;
	function s(n, s) {
		let c, l = {
			...d(xc),
			...n,
			layoutId: ul(n)
		}, { isStatic: u } = l, f = zc(n), p = o(n, u);
		if (!u && typeof window < "u") {
			dl(l, r);
			let t = fl(l);
			c = t.MeasureLayout, f.visualElement = ol(e, p, l, i, t.ProjectionNode, a);
		}
		return y(Lc.Provider, {
			value: f,
			children: [c && f.visualElement ? v(c, {
				visualElement: f.visualElement,
				...l
			}) : null, Xc(e, n, rl(p, f.visualElement, s), p, u, t, a)]
		});
	}
	s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let c = l(s);
	return c[nl] = e, c;
}
function ul({ layoutId: e }) {
	let t = d(le).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function dl(e, t) {
	d(Cc).strict;
}
function fl(e) {
	let { drag: t, layout: n } = Dc();
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function pl(e, t) {
	if (typeof Proxy > "u") return ll;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => ll(n, r, e, t);
	return new Proxy((e, t) => r(e, t), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, ll(a, void 0, e, t)), n.get(a)) });
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var ml = (e, t) => t.isSVG ?? Yc(e) ? new Fo(t) : new To(t, { allowProjection: e !== o }), hl = class extends Y {
	constructor(e) {
		super(e), e.animationState || (e.animationState = Ho(e));
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		ka(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, gl = 0, _l = {
	animation: { Feature: hl },
	exit: { Feature: class extends Y {
		constructor() {
			super(...arguments), this.id = gl++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == "string") {
						let n = G(this.node, e, t);
						if (n) {
							let { transition: e, transitionEnd: t, ...r } = n;
							for (let e in r) this.node.getValue(e)?.jump(r[e]);
						}
					}
					this.node.animationState.reset(), this.node.animationState.animateChanges();
				} else this.node.animationState.setActive("exit", !1);
				this.isExitComplete = !1;
				return;
			}
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				this.isExitComplete = !0, t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
//#endregion
//#region node_modules/framer-motion/dist/es/events/event-info.mjs
function vl(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var yl = (e) => (t) => Yi(t) && e(t, vl(t));
//#endregion
//#region node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function bl(e, t, n, r) {
	return Ms(e, t, yl(n), r);
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var xl = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Sl = (e, t) => Math.abs(e - t);
function Cl(e, t) {
	let n = Sl(e.x, t.x), r = Sl(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var wl = /* @__PURE__ */ new Set(["auto", "scroll"]), Tl = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.lastRawMoveEventInfo && (this.lastMoveEventInfo = El(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = Ol(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = Cl(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = M;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = El(t, this.transformPagePoint), A.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = Ol(e.type === "pointercancel" ? this.lastMoveEventInfo : El(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !Yi(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let s = El(vl(e), this.transformPagePoint), { point: c } = s, { timestamp: l } = M;
		this.history = [{
			...c,
			timestamp: l
		}];
		let { onSessionStart: u } = t;
		u && u(e, Ol(s, this.history)), this.removeListeners = xe(bl(this.contextWindow, "pointermove", this.handlePointerMove), bl(this.contextWindow, "pointerup", this.handlePointerUp), bl(this.contextWindow, "pointercancel", this.handlePointerUp)), o && this.startScrollTracking(o);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(wl.has(e.overflowX) || wl.has(e.overflowY)) && this.scrollPositions.set(t, {
				x: t.scrollLeft,
				y: t.scrollTop
			}), t = t.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		}), window.addEventListener("scroll", this.onElementScroll, { capture: !0 }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	handleScroll(e) {
		let t = this.scrollPositions.get(e);
		if (!t) return;
		let n = e === window, r = n ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: e.scrollLeft,
			y: e.scrollTop
		}, i = {
			x: r.x - t.x,
			y: r.y - t.y
		};
		i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), A.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), j(this.updatePoint);
	}
};
function El(e, t) {
	return t ? { point: t(e.point) } : e;
}
function Dl(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function Ol({ point: e }, t) {
	return {
		point: e,
		delta: Dl(e, Al(t)),
		offset: Dl(e, kl(t)),
		velocity: jl(t, .1)
	};
}
function kl(e) {
	return e[0];
}
function Al(e) {
	return e[e.length - 1];
}
function jl(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = Al(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ D(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ D(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ O(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function Ml(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? B(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? B(n, e, r.max) : Math.min(e, n)), e;
}
function Nl(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function Pl(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: Nl(e.x, n, i),
		y: Nl(e.y, t, r)
	};
}
function Fl(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function Il(e, t) {
	return {
		x: Fl(e.x, t.x),
		y: Fl(e.y, t.y)
	};
}
function Ll(e, t) {
	let n = .5, r = Q(e), i = Q(t);
	return i > r ? n = /* @__PURE__ */ Se(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Se(e.min, e.max - i, t.min)), w(0, 1, n);
}
function Rl(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var zl = .35;
function Bl(e = zl) {
	return e === !1 ? e = 0 : e === !0 && (e = zl), {
		x: Vl(e, "left", "right"),
		y: Vl(e, "top", "bottom")
	};
}
function Vl(e, t, n) {
	return {
		min: Hl(e, t),
		max: Hl(e, n)
	};
}
function Hl(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var Ul = /* @__PURE__ */ new WeakMap(), Wl = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = J(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(vl(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = Wi(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (I.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = Q(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && A.update(() => i(e, t), !1, !0), ui(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = Jl(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && A.update(() => a(e, t), !1, !0);
		}, s = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, c = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: l } = this.getProps();
		this.panSession = new Tl(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: s,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: l,
			distanceThreshold: n,
			contextWindow: xl(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && A.postRender(() => o(n, r));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.endPanSession();
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1);
	}
	endPanSession() {
		this.panSession && this.panSession.end(), this.panSession = void 0;
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !ql(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = Ml(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && al(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = Pl(n.layoutBox, e) : this.constraints = !1, this.elastic = Bl(t), r !== this.constraints && !al(e) && n && this.constraints && !this.hasMutatedConstraints && $((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = Rl(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !al(e)) return !1;
		let n = e.current, { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = fo(n, r.root, this.visualElement.getTransformPagePoint()), a = Il(r.layout.layoutBox, i);
		if (t) {
			let e = t(qa(a));
			this.hasMutatedConstraints = !!e, e && (a = Ka(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = $((o) => {
			if (!ql(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			(a === !0 || a === o) && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return ui(this.visualElement, e), n.start(Xr(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		$((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps();
		return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		$((t) => {
			let { drag: n } = this.getProps();
			if (!ql(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - B(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!al(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		$((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = Ll({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), $((t) => {
			if (!ql(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(B(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Ul.set(this.visualElement, this);
		let e = this.visualElement.current, t = bl(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && $i(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			al(t) && t.current && (this.constraints = this.resolveRefConstraints(), n || (n = Kl(e, t.current, () => this.scalePositionWithinConstraints())));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), A.read(r);
		let o = Ms(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && ($((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			o(), t(), a(), s && s(), n && n();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = zl, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function Gl(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function Kl(e, t, n) {
	let r = xa(e, Gl(n)), i = xa(t, Gl(n));
	return () => {
		r(), i();
	};
}
function ql(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function Jl(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var Yl = class extends Y {
	constructor(e) {
		super(e), this.removeGroupControls = E, this.removeListeners = E, this.controls = new Wl(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || E;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, Xl = (e) => (t, n) => {
	e && A.update(() => e(t, n), !1, !0);
}, Zl = class extends Y {
	constructor() {
		super(...arguments), this.removePointerDownListener = E;
	}
	onPointerDown(e) {
		this.session = new Tl(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: xl(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: Xl(e),
			onStart: Xl(t),
			onMove: Xl(n),
			onEnd: (e, t) => {
				delete this.session, r && A.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = bl(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, Ql = !1, $l = class extends a {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), Ql && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), Rs.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), Ql = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || A.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { visualElement: e, layoutAnchor: t } = this.props, { projection: n } = e;
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), Vi.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		Ql = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function eu(e) {
	let [t, n] = Sc(), r = d(le);
	return v($l, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: d(il),
		isPresent: t,
		safeToRemove: n
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/drag.mjs
var tu = {
	pan: { Feature: Zl },
	drag: {
		Feature: Yl,
		ProjectionNode: bc,
		MeasureLayout: eu
	}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/hover.mjs
function nu(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && A.postRender(() => i(t, vl(t)));
}
var ru = class extends Y {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = qi(e, (e, t) => (nu(this.node, t, "Start"), (e) => nu(this.node, e, "End"))));
	}
	unmount() {}
}, iu = class extends Y {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = xe(Ms(this.node.current, "focus", () => this.onFocus()), Ms(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/press.mjs
function au(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && A.postRender(() => i(t, vl(t)));
}
var ou = class extends Y {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = oa(e, (e, t) => (au(this.node, t, "Start"), (e, { success: t }) => au(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, su = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), lu = (e) => {
	let t = su.get(e.target);
	t && t(e);
}, uu = (e) => {
	e.forEach(lu);
};
function du({ root: e, ...t }) {
	let n = e || document;
	cu.has(n) || cu.set(n, {});
	let r = cu.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(uu, {
		root: e,
		...t
	})), r[i];
}
function fu(e, t, n) {
	let r = du(t);
	return su.set(e, n), r.observe(e), () => {
		su.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var pu = {
	some: 0,
	all: 1
}, mu = class extends Y {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : pu[r]
		}, o = (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		};
		this.stopObserver = fu(this.node.current, a, o);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(hu(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function hu({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gu = {
	inView: { Feature: mu },
	tap: { Feature: ou },
	focus: { Feature: iu },
	hover: { Feature: ru }
}, _u = { layout: {
	ProjectionNode: bc,
	MeasureLayout: eu
} }, vu = /* @__PURE__ */ pl({
	..._l,
	...gu,
	...tu,
	..._u
}, ml);
//#endregion
export { oe as _, vi as a, fe as c, le as d, re as f, se as g, ce as h, Bi as i, de as l, ie as m, Sc as n, ci as o, ne as p, xc as r, he as s, vu as t, ue as u };

//# sourceMappingURL=widget-react-DbOJZl9F.js.map