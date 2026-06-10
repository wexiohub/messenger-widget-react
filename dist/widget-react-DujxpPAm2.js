import "react";
import "react-dom";
import "react/jsx-runtime";
import "react-dom/client";
import { i as e, n as t } from "./widget-react-BxvW64LH.js";
import { t as n } from "./widget-react-CUBFPjaV.js";
import { n as r, r as i, t as a } from "./widget-react-DOX6j7_Q.js";
import { t as o } from "./widget-react-Cr4nQesv2.js";
import { memo as s, useEffect as c, useMemo as l, useRef as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region node_modules/@wavesurfer/react/dist/index.js
function m(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function h(e, t) {
	let [n, r] = d(null), i = l((() => m(t, ["plugins"])), [t]), a = l((() => Object.entries(i).flat()), [i]);
	return c((() => {
		if (!e?.current) return;
		let n = o.create(Object.assign(Object.assign({}, i), {
			plugins: t.plugins,
			container: e.current
		}));
		return r(n), () => {
			n.destroy();
		};
	}), [
		e,
		t.plugins,
		...a
	]), n;
}
var g = /^on([A-Z])/, _ = (e) => g.test(e);
function v(e, t) {
	c((() => {
		if (!e) return;
		let n = Object.entries(t);
		if (!n.length) return;
		let r = n.map((([t, n]) => {
			let r = t.replace(g, ((e, t) => t.toLowerCase()));
			return e.on(r, ((...t) => n(e, ...t)));
		}));
		return () => {
			r.forEach(((e) => e()));
		};
	}), [e, ...l((() => Object.entries(t).flat()), [t])]);
}
s(((e) => {
	let t = u(null), [n, r] = function(e) {
		return l((() => {
			let t = Object.assign({}, e), n = Object.assign({}, e);
			for (let e in t) _(e) ? delete t[e] : delete n[e];
			return [t, n];
		}), [e]);
	}(e);
	return v(h(t, n), r), f("div", { ref: t });
}));
function y(e) {
	var { container: t } = e;
	let n = h(t, m(e, ["container"])), r = function(e) {
		let [t, n] = d(!1), [r, i] = d(!1), [a, o] = d(!1), [s, u] = d(0);
		return c((() => {
			if (!e) return;
			let t = [
				e.on("load", (() => {
					n(!1), i(!1), u(0);
				})),
				e.on("ready", (() => {
					n(!0), i(!1), o(!1), u(0);
				})),
				e.on("finish", (() => {
					o(!0);
				})),
				e.on("play", (() => {
					i(!0);
				})),
				e.on("pause", (() => {
					i(!1);
				})),
				e.on("timeupdate", (() => {
					u(e.getCurrentTime());
				})),
				e.on("destroy", (() => {
					n(!1), i(!1);
				}))
			];
			return () => {
				t.forEach(((e) => e()));
			};
		}), [e]), l((() => ({
			isReady: t,
			isPlaying: r,
			hasFinished: a,
			currentTime: s
		})), [
			r,
			a,
			s,
			t
		]);
	}(n);
	return l((() => Object.assign(Object.assign({}, r), { wavesurfer: n })), [r, n]);
}
//#endregion
//#region node_modules/wavesurfer.js/dist/plugins/hover.esm.js
var b = class {
	constructor() {
		this.listeners = {};
	}
	on(e, t, n) {
		if (this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set()), n?.once) {
			let n = (...r) => {
				this.un(e, n), t(...r);
			};
			return this.listeners[e].add(n), () => this.un(e, n);
		}
		return this.listeners[e].add(t), () => this.un(e, t);
	}
	un(e, t) {
		var n;
		(n = this.listeners[e]) == null || n.delete(t);
	}
	once(e, t) {
		return this.on(e, t, { once: !0 });
	}
	unAll() {
		this.listeners = {};
	}
	emit(e, ...t) {
		this.listeners[e] && this.listeners[e].forEach(((e) => e(...t)));
	}
}, x = class extends b {
	constructor(e) {
		super(), this.subscriptions = [], this.isDestroyed = !1, this.options = e;
	}
	onInit() {}
	_init(e) {
		this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = e, this.onInit();
	}
	destroy() {
		this.emit("destroy"), this.subscriptions.forEach(((e) => e())), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
	}
};
function S(e, t) {
	let n = t.xmlns ? document.createElementNS(t.xmlns, e) : document.createElement(e);
	for (let [e, r] of Object.entries(t)) if (e === "children" && r) for (let [e, t] of Object.entries(r)) t instanceof Node ? n.appendChild(t) : typeof t == "string" ? n.appendChild(document.createTextNode(t)) : n.appendChild(S(e, t));
	else e === "style" ? Object.assign(n.style, r) : e === "textContent" ? n.textContent = r : n.setAttribute(e, r.toString());
	return n;
}
function C(e, t, n) {
	let r = S(e, t || {});
	return n?.appendChild(r), r;
}
function w(e, t) {
	let n, r = () => {
		n && (n(), n = void 0), n = e();
	}, i = t.map(((e) => e.subscribe(r)));
	return r(), () => {
		n && (n(), n = void 0), i.forEach(((e) => e()));
	};
}
function T(e, t) {
	let n = function(e) {
		let t = e, n = /* @__PURE__ */ new Set();
		return {
			get value() {
				return t;
			},
			set(e) {
				Object.is(t, e) || (t = e, n.forEach(((e) => e(t))));
			},
			update(e) {
				this.set(e(t));
			},
			subscribe: (e) => (n.add(e), () => n.delete(e))
		};
	}(null), r = (e) => {
		n.set(e);
	};
	return e.addEventListener(t, r), n._cleanup = () => {
		e.removeEventListener(t, r);
	}, n;
}
var E = {
	lineWidth: 1,
	labelSize: 11,
	labelPreferLeft: !1,
	formatTimeCallback: (e) => `${Math.floor(e / 60)}:${`0${Math.floor(e) % 60}`.slice(-2)}`
}, D = class e extends x {
	constructor(e) {
		super(e || {}), this.lastPointerPosition = null, this.options = Object.assign({}, E, e), this.wrapper = C("div", { part: "hover" }), this.label = C("span", { part: "hover-label" }, this.wrapper);
	}
	static create(t) {
		return new e(t);
	}
	addUnits(e) {
		return `${e}${typeof e == "number" ? "px" : ""}`;
	}
	onInit() {
		if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
		let e = this.wavesurfer.options, t = this.options.lineColor || e.cursorColor || e.progressColor;
		Object.assign(this.wrapper.style, {
			position: "absolute",
			zIndex: 10,
			left: 0,
			top: 0,
			height: "100%",
			pointerEvents: "none",
			borderLeft: `${this.addUnits(this.options.lineWidth)} solid ${t}`,
			opacity: "0",
			transition: "opacity .1s ease-in"
		}), Object.assign(this.label.style, {
			display: "block",
			backgroundColor: this.options.labelBackground,
			color: this.options.labelColor,
			fontSize: `${this.addUnits(this.options.labelSize)}`,
			transition: "transform .1s ease-in",
			padding: "2px 3px"
		});
		let n = this.wavesurfer.getWrapper();
		n.appendChild(this.wrapper);
		let r = this.wavesurfer.getState(), i = T(n, "pointermove"), a = T(n, "pointerleave");
		this.subscriptions.push(w((() => {
			let e = i.value;
			if (!e || !this.wavesurfer) return;
			this.lastPointerPosition = {
				clientX: e.clientX,
				clientY: e.clientY
			};
			let t = this.wavesurfer.getWrapper().getBoundingClientRect(), { width: n } = t, a = e.clientX - t.left, o = Math.min(1, Math.max(0, a / n)), s = Math.min(n - this.options.lineWidth - 1, a);
			this.wrapper.style.transform = `translateX(${s}px)`, this.wrapper.style.opacity = "1";
			let c = r.duration.value;
			this.label.textContent = this.options.formatTimeCallback(c * o);
			let l = this.label.offsetWidth, u = this.options.labelPreferLeft ? s - l > 0 : s + l > n;
			this.label.style.transform = u ? `translateX(-${l + this.options.lineWidth}px)` : "", this.emit("hover", o);
		}), [i, r.duration])), this.subscriptions.push(w((() => {
			a.value && (this.wrapper.style.opacity = "0", this.lastPointerPosition = null, this.wrapper.style.transform = "");
		}), [a]));
		let o = () => {
			if (this.lastPointerPosition && this.wavesurfer) {
				let e = this.wavesurfer.getWrapper().getBoundingClientRect(), { width: t } = e, n = this.lastPointerPosition.clientX - e.left, i = Math.min(1, Math.max(0, n / t)), a = Math.min(t - this.options.lineWidth - 1, n);
				this.wrapper.style.transform = `translateX(${a}px)`;
				let o = r.duration.value;
				this.label.textContent = this.options.formatTimeCallback(o * i);
				let s = this.label.offsetWidth, c = this.options.labelPreferLeft ? a - s > 0 : a + s > t;
				this.label.style.transform = c ? `translateX(-${s + this.options.lineWidth}px)` : "";
			}
		};
		this.subscriptions.push(this.wavesurfer.on("zoom", o)), this.subscriptions.push(this.wavesurfer.on("scroll", o));
	}
	destroy() {
		super.destroy(), this.wrapper.remove();
	}
};
//#endregion
//#region components/widget/tabs/messages-tab/message/audio-bubble-player.tsx
function O({ src: o, onDark: s = !1 }) {
	let m = e("messages"), h = u(null), [g, _] = d(null), [v, b] = d(!1);
	c(() => {
		let e = h.current;
		if (!e) return;
		let t = getComputedStyle(e), n = t.getPropertyValue("--wx-primary").trim() || "#121314", r = t.getPropertyValue("--wx-primary-fg").trim() || "#ffffff", i = t.getPropertyValue("--wx-fg-muted").trim() || "#6b7280";
		_(s ? {
			wave: A(r, .35),
			progress: r,
			hoverLine: r
		} : {
			wave: i,
			progress: n,
			hoverLine: n
		});
	}, [s]);
	let x = l(() => g ? [D.create({
		lineColor: g.hoverLine,
		lineWidth: 1,
		labelBackground: g.hoverLine,
		labelColor: s ? "#121314" : "#ffffff",
		labelSize: "10px"
	})] : [], [g, s]), S = l(() => ({ credentials: "omit" }), []), { wavesurfer: C, isReady: w, isPlaying: T, currentTime: E } = y({
		container: h,
		url: g && !v ? o : void 0,
		waveColor: g?.wave,
		progressColor: g?.progress,
		cursorColor: g?.progress,
		barWidth: 2,
		barRadius: 2,
		cursorWidth: 1,
		height: 24,
		hideScrollbar: !0,
		plugins: x,
		fetchParams: S
	});
	return c(() => {
		if (!C) return;
		let e = () => b(!0);
		return C.on("error", e), () => {
			C.un("error", e);
		};
	}, [C]), v ? /* @__PURE__ */ p("a", {
		href: o,
		target: "_blank",
		rel: "noopener",
		className: t("inline-flex w-60 max-w-full items-center gap-2 rounded-wx-sm px-3 py-2 text-xs font-medium", s ? "bg-wx-primary-fg/10 text-wx-primary-fg hover:bg-wx-primary-fg/20" : "bg-wx-bg/60 text-wx-fg hover:bg-wx-bg"),
		children: [/* @__PURE__ */ f(n, {
			size: 12,
			className: "shrink-0"
		}), /* @__PURE__ */ f("span", {
			className: "truncate",
			children: m("openAudio")
		})]
	}) : /* @__PURE__ */ p("div", {
		className: "flex w-60 max-w-full min-w-0 items-center gap-3",
		children: [
			/* @__PURE__ */ f("button", {
				type: "button",
				onClick: () => {
					C?.playPause();
				},
				"aria-label": m(T ? "pauseAudio" : "playAudio"),
				className: t("flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-opacity", s ? "bg-wx-primary-fg text-wx-primary hover:opacity-90" : "bg-wx-primary text-wx-primary-fg hover:bg-wx-primary-hover"),
				children: w ? T ? /* @__PURE__ */ f(r, { size: 12 }) : /* @__PURE__ */ f(a, {
					size: 12,
					className: "translate-x-[1px]"
				}) : /* @__PURE__ */ f(i, {
					size: 12,
					className: "animate-spin"
				})
			}),
			/* @__PURE__ */ f("div", {
				ref: h,
				className: "min-w-0 flex-1"
			}),
			/* @__PURE__ */ f("span", {
				className: t("shrink-0 font-mono text-[10px] tabular-nums", s ? "text-wx-primary-fg/70" : "text-wx-fg-subtle"),
				children: w ? k(E) : "0:00"
			})
		]
	});
}
function k(e) {
	return `${Math.floor(e / 60)}:${Math.floor(e % 60).toString().padStart(2, "0")}`;
}
function A(e, t) {
	let n = e.replace("#", "");
	return n.length === 6 ? `rgba(${parseInt(n.substring(0, 2), 16)}, ${parseInt(n.substring(2, 4), 16)}, ${parseInt(n.substring(4, 6), 16)}, ${t})` : e;
}
//#endregion
export { O as AudioBubblePlayer };

//# sourceMappingURL=widget-react-DujxpPAm2.js.map