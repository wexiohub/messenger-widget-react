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
import { c as e, d as t, i as n, l as r, n as i, r as a, u as o } from "./widget-react-DbOJZl9F.js";
import { t as s } from "./widget-react-krPPnv02.js";
import * as c from "react";
import { Children as l, isValidElement as u, useContext as d, useId as f, useInsertionEffect as p, useMemo as m, useRef as h, useState as g } from "react";
import { Fragment as _, jsx as v } from "react/jsx-runtime";
//#region node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function y(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function b(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = y(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : y(e[t], null);
			}
		};
	};
}
function x(...e) {
	return c.useCallback(b(...e), e);
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var S = class extends c.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (n(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, r = n(e) && e.offsetWidth || 0, i = n(e) && e.offsetHeight || 0, a = getComputedStyle(t), o = this.props.sizeRef.current;
			o.height = parseFloat(a.height), o.width = parseFloat(a.width), o.top = t.offsetTop, o.left = t.offsetLeft, o.right = r - o.width - o.left, o.bottom = i - o.height - o.top;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function C({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: o }) {
	let s = f(), l = h(null), u = h({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}), { nonce: m } = d(a), g = x(l, e.props?.ref ?? e?.ref);
	return p(() => {
		let { width: e, height: a, top: c, left: d, right: f, bottom: p } = u.current;
		if (t || o === !1 || !l.current || !e || !a) return;
		let h = n === "left" ? `left: ${d}` : `right: ${f}`, g = r === "bottom" ? `bottom: ${p}` : `top: ${c}`;
		l.current.dataset.motionPopId = s;
		let _ = document.createElement("style");
		m && (_.nonce = m);
		let v = i ?? document.head;
		return v.appendChild(_), _.sheet && _.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `), () => {
			l.current?.removeAttribute("data-motion-pop-id"), v.contains(_) && v.removeChild(_);
		};
	}, [t]), v(S, {
		isPresent: t,
		childRef: l,
		sizeRef: u,
		pop: o,
		children: o === !1 ? e : c.cloneElement(e, { ref: g })
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var w = ({ children: t, initial: n, isPresent: r, onExitComplete: i, custom: a, presenceAffectsLayout: s, mode: l, anchorX: u, anchorY: d, root: p }) => {
	let h = o(T), g = f(), _ = !0, y = m(() => (_ = !1, {
		id: g,
		initial: n,
		isPresent: r,
		custom: a,
		onExitComplete: (e) => {
			h.set(e, !0);
			for (let e of h.values()) if (!e) return;
			i && i();
		},
		register: (e) => (h.set(e, !1), () => h.delete(e))
	}), [
		r,
		h,
		i
	]);
	return s && _ && (y = { ...y }), m(() => {
		h.forEach((e, t) => h.set(t, !1));
	}, [r]), c.useEffect(() => {
		!r && !h.size && i && i();
	}, [r]), t = v(C, {
		pop: l === "popLayout",
		isPresent: r,
		anchorX: u,
		anchorY: d,
		root: p,
		children: t
	}), v(e.Provider, {
		value: y,
		children: t
	});
};
function T() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var E = (e) => e.key || "";
function D(e) {
	let t = [];
	return l.forEach(e, (e) => {
		u(e) && t.push(e);
	}), t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var O = ({ children: e, custom: n, initial: a = !0, onExitComplete: s, presenceAffectsLayout: c = !0, mode: l = "sync", propagate: u = !1, anchorX: f = "left", anchorY: p = "top", root: y }) => {
	let [b, x] = i(u), S = m(() => D(e), [e]), C = u && !b ? [] : S.map(E), T = h(!0), O = h(S), k = o(() => /* @__PURE__ */ new Map()), A = h(/* @__PURE__ */ new Set()), [j, M] = g(S), [N, P] = g(S);
	r(() => {
		T.current = !1, O.current = S;
		for (let e = 0; e < N.length; e++) {
			let t = E(N[e]);
			C.includes(t) ? (k.delete(t), A.current.delete(t)) : k.get(t) !== !0 && k.set(t, !1);
		}
	}, [
		N,
		C.length,
		C.join("-")
	]);
	let F = [];
	if (S !== j) {
		let e = [...S];
		for (let t = 0; t < N.length; t++) {
			let n = N[t], r = E(n);
			C.includes(r) || (e.splice(t, 0, n), F.push(n));
		}
		return l === "wait" && F.length && (e = F), P(D(e)), M(S), null;
	}
	let { forceRender: I } = d(t);
	return v(_, { children: N.map((e) => {
		let t = E(e), r = u && !b ? !1 : S === N || C.includes(t);
		return v(w, {
			isPresent: r,
			initial: !T.current || a ? void 0 : !1,
			custom: n,
			presenceAffectsLayout: c,
			mode: l,
			root: y,
			onExitComplete: r ? void 0 : () => {
				if (A.current.has(t)) return;
				if (k.has(t)) A.current.add(t), k.set(t, !0);
				else return;
				let e = !0;
				k.forEach((t) => {
					t || (e = !1);
				}), e && (I?.(), P(O.current), u && x?.(), s && s());
			},
			anchorX: f,
			anchorY: p,
			children: e
		}, t);
	}) });
}, k = s("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
export { O as n, k as t };

//# sourceMappingURL=widget-react-wSc9gIfG.js.map