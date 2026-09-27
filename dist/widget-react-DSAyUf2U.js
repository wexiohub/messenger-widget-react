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
import { t as e } from "./widget-react-DbOJZl9F.js";
import { i as t, n } from "./widget-react-krPPnv02.js";
import { n as r, t as i } from "./widget-react-wSc9gIfG.js";
import { t as a } from "./widget-react-Ds5J9FbQ.js";
import { useCallback as o, useEffect as s, useRef as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region components/widget/tabs/messages-tab/composer/giphy-picker.tsx
var f = 300;
function p({ open: p, onClose: m, fetchPage: h, onPick: g, anchorRef: _ }) {
	let v = t("messages.giphy"), y = c(null), b = c(null), x = c(null), [S, C] = l("GIF"), [w, T] = l(""), [E, D] = l(""), [O, k] = l([]), [A, j] = l("loading"), M = c(0), N = c(!1), P = c(0);
	s(() => {
		let e = setTimeout(() => D(w.trim()), f);
		return () => clearTimeout(e);
	}, [w]);
	let F = o(async (e) => {
		let t = e ? ++P.current : P.current, n = e ? 0 : M.current;
		j(e ? "loading" : "loadingMore");
		try {
			let r = await h({
				type: S,
				query: E,
				offset: n
			});
			if (t !== P.current) return;
			M.current = r.nextOffset ?? n + r.items.length, N.current = r.hasNext, k((t) => {
				let n = e ? r.items : [...t, ...r.items], i = /* @__PURE__ */ new Set();
				return n.filter((e) => i.has(e.id) ? !1 : (i.add(e.id), !0));
			}), j("ready");
		} catch {
			if (t !== P.current) return;
			j("error");
		}
	}, [
		h,
		S,
		E
	]);
	s(() => {
		p && (b.current?.scrollTo({ top: 0 }), F(!0));
	}, [p, F]), s(() => {
		if (!p) return;
		let e = x.current, t = b.current;
		if (!e || !t) return;
		let n = new IntersectionObserver((e) => {
			e[0]?.isIntersecting && N.current && A === "ready" && F(!1);
		}, {
			root: t,
			rootMargin: "200px"
		});
		return n.observe(e), () => n.disconnect();
	}, [
		p,
		A,
		F
	]), s(() => {
		if (!p) return;
		let e = (e) => {
			let t = e.composedPath();
			y.current && t.includes(y.current) || _?.current && t.includes(_.current) || m();
		}, t = (e) => {
			e.key === "Escape" && m();
		};
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, [
		p,
		m,
		_
	]);
	let I = (e) => {
		e !== S && (k([]), C(e));
	};
	return /* @__PURE__ */ u(r, { children: p && /* @__PURE__ */ d(e.div, {
		ref: y,
		initial: {
			opacity: 0,
			y: 6,
			scale: .96
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 6,
			scale: .96
		},
		transition: {
			duration: .14,
			ease: "easeOut"
		},
		className: n("absolute bottom-full left-3 z-20 mb-2 flex origin-bottom-left flex-col", "h-105 w-95 max-w-[calc(100vw-24px)] overflow-hidden", "rounded-wx-lg border border-wx-border bg-wx-bg shadow-lg"),
		role: "dialog",
		"aria-label": v("title"),
		children: [
			/* @__PURE__ */ d("div", {
				className: "flex items-center gap-2 border-wx-border border-b px-3 py-2",
				children: [
					/* @__PURE__ */ u(a, {
						"aria-hidden": "true",
						className: "size-4 shrink-0 text-wx-fg-subtle"
					}),
					/* @__PURE__ */ u("input", {
						type: "text",
						value: w,
						onChange: (e) => T(e.target.value),
						placeholder: v("searchPlaceholder"),
						"aria-label": v("searchPlaceholder"),
						autoFocus: !0,
						className: "min-w-0 flex-1 bg-transparent text-sm text-wx-fg placeholder:text-wx-fg-subtle focus:outline-none"
					}),
					w && /* @__PURE__ */ u("button", {
						type: "button",
						onClick: () => T(""),
						"aria-label": v("clear"),
						className: "shrink-0 rounded-full p-0.5 text-wx-fg-subtle transition-colors hover:bg-wx-bg-elevated-2 hover:text-wx-fg",
						children: /* @__PURE__ */ u(i, {
							"aria-hidden": "true",
							className: "size-3.5"
						})
					})
				]
			}),
			/* @__PURE__ */ u("div", {
				className: "px-3 py-2",
				children: /* @__PURE__ */ u("div", {
					className: "flex rounded-full bg-wx-bg-elevated-2 p-0.5",
					children: ["GIF", "STICKER"].map((t) => {
						let r = S === t;
						return /* @__PURE__ */ d("button", {
							type: "button",
							onClick: () => I(t),
							"aria-pressed": r,
							className: "relative flex-1 rounded-full px-3.5 py-1 text-center font-medium text-[13px] transition-colors",
							children: [r && /* @__PURE__ */ u(e.span, {
								layoutId: "giphyTabPill",
								transition: {
									type: "spring",
									stiffness: 400,
									damping: 32
								},
								className: "absolute inset-0 rounded-full bg-wx-bg shadow-sm"
							}), /* @__PURE__ */ u("span", {
								className: n("relative z-10", r ? "text-wx-fg" : "text-wx-fg-muted"),
								children: v(t === "GIF" ? "tabGifs" : "tabStickers")
							})]
						}, t);
					})
				})
			}),
			/* @__PURE__ */ u("div", {
				ref: b,
				className: "relative flex-1 overflow-y-auto px-3",
				children: A === "loading" ? /* @__PURE__ */ u("div", {
					className: "flex h-full items-center justify-center",
					children: /* @__PURE__ */ u("div", { className: "size-5 animate-spin rounded-full border-2 border-wx-border border-t-wx-primary" })
				}) : A === "error" ? /* @__PURE__ */ d("div", {
					className: "flex h-full flex-col items-center justify-center gap-2 text-center",
					children: [/* @__PURE__ */ u("p", {
						className: "text-sm text-wx-fg-muted",
						children: v("error")
					}), /* @__PURE__ */ u("button", {
						type: "button",
						onClick: () => F(!0),
						className: "font-medium text-[13px] text-wx-primary hover:underline",
						children: v("retry")
					})]
				}) : O.length === 0 ? /* @__PURE__ */ u("div", {
					className: "flex h-full items-center justify-center",
					children: /* @__PURE__ */ u("p", {
						className: "text-sm text-wx-fg-muted",
						children: v("empty")
					})
				}) : /* @__PURE__ */ d("div", {
					className: n("columns-2 gap-2 py-1", S === "STICKER" && "[&_img]:bg-wx-bg-elevated-2"),
					children: [
						O.map((e) => /* @__PURE__ */ u("button", {
							type: "button",
							onClick: () => {
								g(e, S), m();
							},
							className: "mb-2 block w-full overflow-hidden rounded-wx-sm transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
							children: /* @__PURE__ */ u("img", {
								src: e.previewUrl,
								alt: e.title,
								width: e.previewWidth,
								height: e.previewHeight,
								loading: "lazy",
								className: "block h-auto w-full"
							})
						}, e.id)),
						/* @__PURE__ */ u("div", {
							ref: x,
							className: "h-1 w-full"
						}),
						A === "loadingMore" && /* @__PURE__ */ u("div", {
							className: "flex justify-center py-2",
							children: /* @__PURE__ */ u("div", { className: "size-4 animate-spin rounded-full border-2 border-wx-border border-t-wx-primary" })
						})
					]
				})
			}),
			/* @__PURE__ */ u("div", {
				className: "border-wx-border border-t px-3 py-1.5 text-center text-[10px] text-wx-fg-subtle",
				children: v("poweredBy")
			})
		]
	}) });
}
//#endregion
export { p as GiphyPicker };

//# sourceMappingURL=widget-react-DSAyUf2U.js.map