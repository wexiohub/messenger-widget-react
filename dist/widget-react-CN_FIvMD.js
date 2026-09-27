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
import { a as e, l as t, o as n, s as r, t as i, u as a } from "./widget-react-DbOJZl9F.js";
import { forwardRef as o, useCallback as s, useImperativeHandle as c, useRef as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs
function f(e) {
	e.values.forEach((e) => e.stop());
}
function p(e, t) {
	[...t].reverse().forEach((r) => {
		let i = e.getVariant(r);
		i && n(e, i), e.variantChildren && e.variantChildren.forEach((e) => {
			p(e, t);
		});
	});
}
function m(e, t) {
	if (Array.isArray(t)) return p(e, t);
	if (typeof t == "string") return p(e, [t]);
	n(e, t);
}
function h() {
	let t = !1, n = /* @__PURE__ */ new Set(), i = {
		subscribe(e) {
			return n.add(e), () => void n.delete(e);
		},
		start(i, a) {
			r(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
			let o = [];
			return n.forEach((t) => {
				o.push(e(t, i, { transitionOverride: a }));
			}), Promise.all(o);
		},
		set(e) {
			return r(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), n.forEach((t) => {
				m(t, e);
			});
		},
		stop() {
			n.forEach((e) => {
				f(e);
			});
		},
		mount() {
			return t = !0, () => {
				t = !1, i.stop();
			};
		}
	};
	return i;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs
function g() {
	let e = a(h);
	return t(e.mount, []), e;
}
var _ = g;
//#endregion
//#region components/widget/icons/animated.tsx
function v(...e) {
	return e.filter(Boolean).join(" ");
}
var y = {
	normal: {
		d: "m12 19-7-7 7-7",
		translateX: 0
	},
	animate: {
		d: "m12 19-7-7 7-7",
		translateX: [
			0,
			3,
			0
		],
		transition: { duration: .4 }
	}
}, b = {
	normal: { d: "M19 12H5" },
	animate: {
		d: [
			"M19 12H5",
			"M19 12H10",
			"M19 12H5"
		],
		transition: { duration: .4 }
	}
}, x = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let f = _(), p = l(!1);
	c(o, () => (p.current = !0, {
		startAnimation: () => f.start("animate"),
		stopAnimation: () => f.start("normal")
	}));
	let m = s((t) => {
		p.current ? e?.(t) : f.start("animate");
	}, [f, e]), h = s((e) => {
		p.current ? t?.(e) : f.start("normal");
	}, [f, t]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: m,
		onMouseLeave: h,
		...a,
		children: /* @__PURE__ */ d("svg", {
			fill: "none",
			height: r,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: [/* @__PURE__ */ u(i.path, {
				animate: f,
				d: "m12 19-7-7 7-7",
				variants: y
			}), /* @__PURE__ */ u(i.path, {
				animate: f,
				d: "M19 12H5",
				variants: b
			})]
		})
	});
});
x.displayName = "ArrowLeftIcon";
var S = {
	normal: { d: "M5 12h14" },
	animate: {
		d: [
			"M5 12h14",
			"M5 12h9",
			"M5 12h14"
		],
		transition: { duration: .4 }
	}
}, C = {
	normal: {
		d: "m12 5 7 7-7 7",
		translateX: 0
	},
	animate: {
		d: "m12 5 7 7-7 7",
		translateX: [
			0,
			-3,
			0
		],
		transition: { duration: .4 }
	}
}, w = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let f = _(), p = l(!1);
	c(o, () => (p.current = !0, {
		startAnimation: () => f.start("animate"),
		stopAnimation: () => f.start("normal")
	}));
	let m = s((t) => {
		p.current ? e?.(t) : f.start("animate");
	}, [f, e]), h = s((e) => {
		p.current ? t?.(e) : f.start("normal");
	}, [f, t]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: m,
		onMouseLeave: h,
		...a,
		children: /* @__PURE__ */ d("svg", {
			fill: "none",
			height: r,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: [/* @__PURE__ */ u(i.path, {
				animate: f,
				d: "M5 12h14",
				variants: S
			}), /* @__PURE__ */ u(i.path, {
				animate: f,
				d: "m12 5 7 7-7 7",
				variants: C
			})]
		})
	});
});
w.displayName = "ArrowRightIcon";
var T = {
	times: [
		0,
		.4,
		1
	],
	duration: .5
}, E = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let d = _(), f = l(!1);
	c(o, () => (f.current = !0, {
		startAnimation: () => d.start("animate"),
		stopAnimation: () => d.start("normal")
	}));
	let p = s((t) => {
		f.current ? e?.(t) : d.start("animate");
	}, [d, e]), m = s((e) => {
		f.current ? t?.(e) : d.start("normal");
	}, [d, t]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: p,
		onMouseLeave: m,
		...a,
		children: /* @__PURE__ */ u("svg", {
			fill: "none",
			height: r,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ u(i.path, {
				animate: d,
				d: "m6 9 6 6 6-6",
				transition: T,
				variants: {
					normal: { y: 0 },
					animate: { y: [
						0,
						2,
						0
					] }
				}
			})
		})
	});
});
E.displayName = "ChevronDownIcon";
var D = {
	times: [
		0,
		.4,
		1
	],
	duration: .5
}, O = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let d = _(), f = l(!1);
	c(o, () => (f.current = !0, {
		startAnimation: () => d.start("animate"),
		stopAnimation: () => d.start("normal")
	}));
	let p = s((t) => {
		f.current ? e?.(t) : d.start("animate");
	}, [d, e]), m = s((e) => {
		f.current ? t?.(e) : d.start("normal");
	}, [d, t]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: p,
		onMouseLeave: m,
		...a,
		children: /* @__PURE__ */ u("svg", {
			fill: "none",
			height: r,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ u(i.path, {
				animate: d,
				d: "m9 18 6-6-6-6",
				transition: D,
				variants: {
					normal: { x: 0 },
					animate: { x: [
						0,
						2,
						0
					] }
				}
			})
		})
	});
});
O.displayName = "ChevronRightIcon";
var k = {
	duration: .6,
	opacity: { duration: .2 }
}, A = {
	normal: {
		pathLength: 1,
		opacity: 1
	},
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1]
	}
}, j = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let f = _(), p = l(!1);
	c(o, () => (p.current = !0, {
		startAnimation: () => f.start("animate"),
		stopAnimation: () => f.start("normal")
	}));
	let m = s((t) => {
		p.current ? e?.(t) : f.start("animate");
	}, [f, e]), h = s((e) => {
		p.current ? t?.(e) : f.start("normal");
	}, [f, t]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: m,
		onMouseLeave: h,
		...a,
		children: /* @__PURE__ */ d("svg", {
			fill: "none",
			height: r,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: [/* @__PURE__ */ u("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), /* @__PURE__ */ u(i.path, {
				animate: f,
				d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
				transition: k,
				variants: A
			})]
		})
	});
});
j.displayName = "HomeIcon";
var M = {
	normal: {
		scale: 1,
		rotate: 0
	},
	animate: {
		scale: 1.05,
		rotate: [
			0,
			-7,
			7,
			0
		],
		transition: {
			rotate: {
				duration: .5,
				ease: "easeInOut"
			},
			scale: {
				type: "spring",
				stiffness: 400,
				damping: 10
			}
		}
	}
}, N = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let d = _(), f = l(!1);
	c(o, () => (f.current = !0, {
		startAnimation: () => d.start("animate"),
		stopAnimation: () => d.start("normal")
	}));
	let p = s((t) => {
		f.current ? e?.(t) : d.start("animate");
	}, [d, e]), m = s((e) => {
		f.current ? t?.(e) : d.start("normal");
	}, [d, t]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: p,
		onMouseLeave: m,
		...a,
		children: /* @__PURE__ */ u(i.svg, {
			animate: d,
			fill: "none",
			height: r,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			variants: M,
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ u("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
		})
	});
});
N.displayName = "MessageSquareIcon";
var P = {
	normal: { y: 0 },
	animate: {
		y: [
			0,
			-3,
			0,
			-2,
			0
		],
		transition: {
			duration: .6,
			ease: "easeInOut"
		}
	}
}, F = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let f = _(), p = l(!1);
	c(o, () => (p.current = !0, {
		startAnimation: () => f.start("animate"),
		stopAnimation: () => f.start("normal")
	}));
	let m = s((t) => {
		p.current ? e?.(t) : f.start("animate");
	}, [f, e]), h = s((e) => {
		p.current ? t?.(e) : f.start("normal");
	}, [f, t]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: m,
		onMouseLeave: h,
		...a,
		children: /* @__PURE__ */ d("svg", {
			fill: "none",
			height: r,
			overflow: "visible",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: [
				/* @__PURE__ */ u("path", { d: "M12 19v3" }),
				/* @__PURE__ */ u("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
				/* @__PURE__ */ u(i.rect, {
					animate: f,
					height: "13",
					rx: "3",
					variants: P,
					width: "6",
					x: "9",
					y: "2"
				})
			]
		})
	});
});
F.displayName = "MicIcon";
var I = { normal: { y: 0 } }, L = { transition: {
	times: [
		0,
		.2,
		.5,
		1
	],
	duration: .5,
	stiffness: 260,
	damping: 20
} }, R = {
	...I,
	animate: {
		y: [
			0,
			2,
			0,
			0
		],
		...L
	}
}, z = {
	...I,
	animate: {
		y: [
			0,
			0,
			2,
			0
		],
		...L
	}
}, B = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let f = _(), p = l(!1);
	c(o, () => (p.current = !0, {
		startAnimation: () => f.start("animate"),
		stopAnimation: () => f.start("normal")
	}));
	let m = s((t) => {
		p.current ? e?.(t) : f.start("animate");
	}, [f, e]), h = s((e) => {
		p.current ? t?.(e) : f.start("normal");
	}, [f, t]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: m,
		onMouseLeave: h,
		...a,
		children: /* @__PURE__ */ d("svg", {
			fill: "none",
			height: r,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: [/* @__PURE__ */ u(i.rect, {
				animate: f,
				height: "16",
				rx: "1",
				variants: R,
				width: "4",
				x: "6",
				y: "4"
			}), /* @__PURE__ */ u(i.rect, {
				animate: f,
				height: "16",
				rx: "1",
				variants: z,
				width: "4",
				x: "14",
				y: "4"
			})]
		})
	});
});
B.displayName = "PauseIcon";
var V = {
	normal: {
		x: 0,
		rotate: 0
	},
	animate: {
		x: [
			0,
			-1,
			2,
			0
		],
		rotate: [
			0,
			-10,
			0,
			0
		],
		transition: {
			duration: .5,
			times: [
				0,
				.2,
				.5,
				1
			],
			stiffness: 260,
			damping: 20
		}
	}
}, H = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let d = _(), f = l(!1);
	c(o, () => (f.current = !0, {
		startAnimation: () => d.start("animate"),
		stopAnimation: () => d.start("normal")
	}));
	let p = s((t) => {
		f.current ? e?.(t) : d.start("animate");
	}, [d, e]), m = s((e) => {
		f.current ? t?.(e) : d.start("normal");
	}, [d, t]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: p,
		onMouseLeave: m,
		...a,
		children: /* @__PURE__ */ u(i.svg, {
			fill: "none",
			height: r,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ u(i.polygon, {
				animate: d,
				points: "6 3 20 12 6 21 6 3",
				variants: V
			})
		})
	});
});
H.displayName = "PlayIcon";
var U = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let f = _(), p = l(!1);
	c(o, () => (p.current = !0, {
		startAnimation: () => f.start("animate"),
		stopAnimation: () => f.start("normal")
	}));
	let m = s((t) => {
		p.current ? e?.(t) : f.start("animate");
	}, [f, e]), h = s((e) => {
		p.current ? t?.(e) : f.start("normal");
	}, [f, t]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: m,
		onMouseLeave: h,
		...a,
		children: /* @__PURE__ */ d(i.svg, {
			animate: f,
			fill: "none",
			height: r,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			transition: {
				duration: 1,
				bounce: .3
			},
			variants: {
				normal: {
					x: 0,
					y: 0
				},
				animate: {
					x: [
						0,
						0,
						-3,
						0
					],
					y: [
						0,
						-4,
						0,
						0
					]
				}
			},
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: [/* @__PURE__ */ u("circle", {
				cx: "11",
				cy: "11",
				r: "8"
			}), /* @__PURE__ */ u("path", { d: "m21 21-4.3-4.3" })]
		})
	});
});
U.displayName = "SearchIcon";
var W = {
	initial: {
		y: 0,
		fill: "none"
	},
	hover: {
		y: [
			0,
			-1,
			0,
			0
		],
		fill: "currentColor",
		transition: {
			duration: 1,
			bounce: .3
		}
	}
}, G = {
	initial: {
		opacity: 1,
		x: 0,
		y: 0
	},
	blink: () => ({
		opacity: [
			0,
			1,
			0,
			0,
			0,
			0,
			1
		],
		transition: {
			duration: 2,
			type: "spring",
			stiffness: 70,
			damping: 10,
			mass: .4
		}
	})
}, K = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let f = _(), p = _(), m = l(!1);
	c(o, () => (m.current = !0, {
		startAnimation: () => {
			p.start("hover"), f.start("blink", { delay: 1 });
		},
		stopAnimation: () => {
			p.start("initial"), f.start("initial");
		}
	}));
	let h = s((t) => {
		m.current ? e?.(t) : (p.start("hover"), f.start("blink", { delay: 1 }));
	}, [
		e,
		p,
		f
	]), g = s((e) => {
		m.current ? t?.(e) : (p.start("initial"), f.start("initial"));
	}, [
		p,
		f,
		t
	]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: h,
		onMouseLeave: g,
		...a,
		children: /* @__PURE__ */ d("svg", {
			fill: "none",
			height: r,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: [
				/* @__PURE__ */ u(i.path, {
					animate: p,
					d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
					variants: W
				}),
				/* @__PURE__ */ u(i.path, {
					animate: f,
					d: "M20 3v4",
					variants: G
				}),
				/* @__PURE__ */ u(i.path, {
					animate: f,
					d: "M22 5h-4",
					variants: G
				}),
				/* @__PURE__ */ u(i.path, {
					animate: f,
					d: "M4 17v2",
					variants: G
				}),
				/* @__PURE__ */ u(i.path, {
					animate: f,
					d: "M5 18H3",
					variants: G
				})
			]
		})
	});
});
K.displayName = "SparklesIcon";
var q = {
	normal: {
		opacity: 1,
		pathLength: 1
	},
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1]
	}
}, J = o(({ onMouseEnter: e, onMouseLeave: t, className: n, size: r = 28, ...a }, o) => {
	let f = _(), p = l(!1);
	c(o, () => (p.current = !0, {
		startAnimation: () => f.start("animate"),
		stopAnimation: () => f.start("normal")
	}));
	let m = s((t) => {
		p.current ? e?.(t) : f.start("animate");
	}, [f, e]), h = s((e) => {
		p.current ? t?.(e) : f.start("normal");
	}, [f, t]);
	return /* @__PURE__ */ u("div", {
		className: v(n),
		onMouseEnter: m,
		onMouseLeave: h,
		...a,
		children: /* @__PURE__ */ d("svg", {
			fill: "none",
			height: r,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			viewBox: "0 0 24 24",
			width: r,
			xmlns: "http://www.w3.org/2000/svg",
			children: [/* @__PURE__ */ u(i.path, {
				animate: f,
				d: "M18 6 6 18",
				variants: q
			}), /* @__PURE__ */ u(i.path, {
				animate: f,
				d: "m6 6 12 12",
				transition: { delay: .2 },
				variants: q
			})]
		})
	});
});
J.displayName = "XIcon";
//#endregion
export { F as a, U as c, N as i, J as l, E as n, B as o, j as r, H as s, x as t, _ as u };

//# sourceMappingURL=widget-react-CN_FIvMD.js.map