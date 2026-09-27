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
import { Ct as t, D as n, L as r, O as i, P as a, R as o, T as s, a as c, i as l, n as u, t as d } from "./widget-react-Dtx_fW3V.js";
import { i as f, n as p } from "./widget-react-krPPnv02.js";
import { n as m } from "./widget-react-wSc9gIfG.js";
import { useCallback as h, useEffect as g, useMemo as _, useRef as v, useState as y } from "react";
import { jsx as b, jsxs as x } from "react/jsx-runtime";
//#region lib/detect-html.ts
function S(e) {
	if (!e) return !1;
	let t = e.trimStart().slice(0, 200);
	return /^<(?:[a-z!][^>]*|!--)/i.test(t);
}
//#endregion
//#region lib/graphql/generated/types.ts
var C = /* @__PURE__ */ function(e) {
	return e.HTML = "HTML", e.MARKDOWN = "MARKDOWN", e;
}({}), w = /* @__PURE__ */ function(e) {
	return e.HELP = "HELP", e.NEWS = "NEWS", e;
}({});
//#endregion
//#region lib/use-article-title-sink.ts
function T(e, t) {
	g(() => {
		if (t) return e && t(e), () => t(null);
	}, [e, t]);
}
//#endregion
//#region lib/use-demo-translator.ts
var E = ["en", "uk"];
async function D(e) {
	switch (e) {
		case "uk": return (await import("./widget-react-DSUX0aJn.js")).default;
		default: return (await import("./widget-react-D8Z8cGhJ.js")).default;
	}
}
function O(e) {
	return (t) => {
		let n = e;
		for (let e of t.split(".")) if (n && typeof n == "object" && e in n) n = n[e];
		else return;
		return n;
	};
}
function k(e, t) {
	let [n, r] = y(null);
	return g(() => {
		let t = !0;
		return D(e).then((e) => {
			t && r({ raw: O(e) });
		}), () => {
			t = !1;
		};
	}, [e]), n ?? t;
}
//#endregion
//#region lib/article-prose.ts
var A = (/* @__PURE__ */ "prose max-w-none text-sm leading-relaxed text-wx-fg,[&_p]:my-3 [&_strong]:font-semibold [&_em]:italic,[&_a]:text-wx-primary [&_a]:underline [&_a]:underline-offset-2,[&_a]:transition-opacity [&_a:hover]:opacity-70,[&_code]:rounded-[6px] [&_code]:bg-wx-bg-elevated [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em],[&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-wx-border,[&_pre]:bg-[#0f1115] [&_pre]:text-zinc-100 [&_pre]:p-4 [&_pre]:text-[12.5px] [&_pre]:leading-relaxed,[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-zinc-100,[&_.hljs-keyword]:text-violet-300 [&_.hljs-built_in]:text-violet-300 [&_.hljs-type]:text-violet-300,[&_.hljs-string]:text-emerald-300,[&_.hljs-number]:text-amber-300 [&_.hljs-literal]:text-amber-300,[&_.hljs-comment]:text-zinc-500 [&_.hljs-comment]:italic,[&_.hljs-attr]:text-sky-300 [&_.hljs-attribute]:text-sky-300,[&_.hljs-title]:text-zinc-100 [&_.hljs-title]:font-medium,[&_.hljs-tag]:text-rose-300 [&_.hljs-name]:text-rose-300,[&_h1]:mt-6 [&_h1]:mb-3 [&_h1]:text-xl [&_h1]:font-semibold [&_h1]:tracking-tight,[&_h2]:mt-5 [&_h2]:mb-2 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:tracking-tight,[&_h3]:mt-4 [&_h3]:mb-1.5 [&_h3]:text-sm [&_h3]:font-semibold,[&_h1]:scroll-mt-16 [&_h2]:scroll-mt-16 [&_h3]:scroll-mt-16,[&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-wx-fg-subtle,[&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:marker:text-wx-fg-subtle,[&_li]:my-1,[&_ul[data-type=taskList]]:list-none! [&_ul[data-type=taskList]]:pl-0!,[&_ul[data-type=taskList]_li]:my-1.5 [&_ul[data-type=taskList]_li]:flex! [&_ul[data-type=taskList]_li]:items-start [&_ul[data-type=taskList]_li]:gap-2 [&_ul[data-type=taskList]_li]:pl-0,[&_ul[data-type=taskList]_li]:marker:content-none,[&_ul[data-type=taskList]_li>label]:m-0 [&_ul[data-type=taskList]_li>label]:inline-flex [&_ul[data-type=taskList]_li>label]:h-5 [&_ul[data-type=taskList]_li>label]:items-center [&_ul[data-type=taskList]_li>label]:shrink-0 [&_ul[data-type=taskList]_li>label]:select-none,[&_ul[data-type=taskList]_li>label]:pointer-events-none [&_ul[data-type=taskList]_li>label]:cursor-default,[&_ul[data-type=taskList]_input]:accent-wx-primary [&_ul[data-type=taskList]_input]:h-3.5 [&_ul[data-type=taskList]_input]:w-3.5,[&_ul[data-type=taskList]_li>label>span]:hidden,[&_ul[data-type=taskList]_li>div]:min-w-0 [&_ul[data-type=taskList]_li>div]:flex-1,[&_ul[data-type=taskList]_li>div>p]:my-0! [&_ul[data-type=taskList]_li>div>p]:leading-snug,[&_ul[data-type=taskList]_li[data-checked=true]>div]:text-wx-fg-muted [&_ul[data-type=taskList]_li[data-checked=true]>div]:line-through,[&_blockquote]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:border-wx-primary/40,[&_blockquote]:pl-3 [&_blockquote]:italic [&_blockquote]:text-wx-fg-muted,[&_hr]:my-6 [&_hr]:border-wx-border,[&_img]:my-3 [&_img]:mx-auto [&_img]:block [&_img]:max-w-full,[&_figure]:my-5 [&_figure]:flex [&_figure]:flex-col [&_figure]:items-center [&_figure]:text-center,[&_figure_img]:my-0,[&_figcaption]:mt-2 [&_figcaption]:text-xs [&_figcaption]:italic [&_figcaption]:text-wx-fg-muted,[&_table]:my-3 [&_table]:w-full [&_table]:table-fixed [&_table]:border-collapse [&_table]:text-xs,[&_table]:overflow-hidden [&_table]:rounded-lg [&_table]:border [&_table]:border-wx-border,[&_thead]:bg-wx-bg-elevated,[&_th]:px-2.5 [&_th]:py-1.5 [&_th]:text-left [&_th]:font-medium [&_th]:text-wx-fg,[&_th]:border-b [&_th]:border-wx-border,[&_th+th]:border-l [&_th+th]:border-wx-border,[&_td]:px-2.5 [&_td]:py-1.5 [&_td]:text-wx-fg [&_td]:align-top,[&_td+td]:border-l [&_td+td]:border-wx-border,[&_tbody_tr]:border-t [&_tbody_tr]:border-wx-border,[&_tbody_tr:nth-child(odd)]:bg-wx-bg-elevated/40,[&_th_p]:my-0 [&_td_p]:my-0 [&_th_p]:inline [&_td_p]:inline,[&_details]:my-2 [&_details]:overflow-hidden [&_details]:rounded-lg [&_details]:border [&_details]:border-wx-border [&_details]:bg-wx-bg-elevated/40,[&_details+details]:mt-2,[&_summary]:relative [&_summary]:cursor-pointer [&_summary]:list-none [&_summary]:px-4 [&_summary]:py-3,[&_summary]:pr-10 [&_summary]:text-sm [&_summary]:font-medium [&_summary]:text-wx-fg,[&_summary::-webkit-details-marker]:hidden [&_summary::marker]:hidden,[&_summary]:after:absolute [&_summary]:after:right-4 [&_summary]:after:top-1/2,[&_summary]:after:-translate-y-1/2 [&_summary]:after:text-wx-fg-subtle,[&_summary]:after:text-base [&_summary]:after:leading-none,[&_summary]:after:transition-transform [&_summary]:after:content-['\\203A'],[&_details[open]_summary]:after:rotate-90,[&_details[open]_summary]:border-b [&_details[open]_summary]:border-wx-border,[&_details]:[&>:not(summary)]:px-4 [&_details]:[&>:not(summary)]:py-3,[&_details]:[&>:not(summary):first-of-type]:pt-3".split(",")).join(" ");
//#endregion
//#region components/widget/article-body.tsx
function j({ content: e, isHtml: t, markdownMarginClass: n }) {
	return t ? /* @__PURE__ */ b(u, {
		html: e,
		className: `mt-0 ${A}`
	}) : /* @__PURE__ */ b("div", {
		className: `${n} ${A}`,
		children: /* @__PURE__ */ b(c, {
			remarkPlugins: [l],
			children: e
		})
	});
}
//#endregion
//#region components/widget/language-selector/index.tsx
function M({ currentLocale: t, locales: r, allowedLocales: a, onSelect: o, className: c }) {
	let l = f("languageSelector"), [u, h] = y(!1), _ = v(null);
	g(() => {
		if (!u) return;
		let e = (e) => {
			_.current && !_.current.contains(e.target) && h(!1);
		}, t = (e) => {
			e.key === "Escape" && h(!1);
		};
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, [u]);
	let S = a && a.length > 0 ? new Set(a.map((e) => e.split("-")[0].toLowerCase())) : null, C = Array.from(new Set(r.filter(Boolean))).filter((e) => !S || S.has(e.split("-")[0].toLowerCase()));
	if (C.length <= 1) return null;
	let w = t.split("-")[0].toLowerCase();
	return /* @__PURE__ */ x("div", {
		ref: _,
		className: p("relative", c),
		children: [
			/* @__PURE__ */ b("p", {
				className: "mb-1.5 text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
				children: l("title")
			}),
			/* @__PURE__ */ x("button", {
				type: "button",
				onClick: () => h((e) => !e),
				"aria-haspopup": "listbox",
				"aria-expanded": u,
				"aria-label": l("ariaLabel"),
				className: p("flex w-full items-center gap-2 rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2", "text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary"),
				children: [
					/* @__PURE__ */ b(s, {
						size: 15,
						className: "shrink-0 text-wx-fg-muted"
					}),
					/* @__PURE__ */ b("span", {
						className: "min-w-0 flex-1 truncate text-left",
						children: d(t)
					}),
					/* @__PURE__ */ b(n, {
						size: 15,
						className: p("shrink-0 text-wx-fg-subtle transition-transform", u && "rotate-180")
					})
				]
			}),
			/* @__PURE__ */ b(m, { children: u && /* @__PURE__ */ b(e.ul, {
				initial: {
					opacity: 0,
					y: 4
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: 4
				},
				transition: { duration: .14 },
				className: p("absolute bottom-full left-0 z-20 mb-1 max-h-56 w-full overflow-auto", "rounded-wx-sm border border-wx-border bg-wx-bg py-1 shadow-[0_12px_32px_rgba(0,0,0,0.16)]"),
				role: "listbox",
				children: C.map((e) => {
					let t = e.split("-")[0].toLowerCase() === w;
					return /* @__PURE__ */ b("li", { children: /* @__PURE__ */ x("button", {
						type: "button",
						role: "option",
						"aria-selected": t,
						onClick: () => {
							o(e), h(!1);
						},
						className: p("flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors", t ? "font-semibold text-wx-primary" : "text-wx-fg hover:bg-wx-bg-elevated"),
						children: [/* @__PURE__ */ b("span", {
							className: "min-w-0 flex-1 truncate",
							children: d(e)
						}), t && /* @__PURE__ */ b(i, {
							size: 15,
							className: "shrink-0 text-wx-primary"
						})]
					}) }, e);
				})
			}) })
		]
	});
}
//#endregion
//#region components/widget/reaction-bar.tsx
var N = (e, t) => `wexio:reaction:${e}:${t}`, P = [
	{
		slotIndex: 0,
		emoji: "🎉"
	},
	{
		slotIndex: 1,
		emoji: "❤️"
	},
	{
		slotIndex: 2,
		emoji: "👍"
	}
], F = {
	[w.NEWS]: "NewsPost",
	[w.HELP]: "HelpArticle"
};
function I({ surface: n, itemId: i, reactionCounts: s, viewerReaction: c, groupItemIds: l, readonly: u = !1, showCounts: d = !0, isDummy: m = !1, className: v }) {
	let S = f("reactions"), C = t(), { data: w, loading: T } = o({
		variables: { surface: n },
		fetchPolicy: "cache-first",
		skip: m
	}), [E, { loading: D }] = r(), O = a(), k = _(() => m ? P : w?.visitorReactionSet?.slots ?? [], [m, w]), A = m ? !0 : w?.visitorReactionSet?.enabled ?? !0, j = N(n, i), [M, I] = y(null);
	g(() => {
		if (!m) {
			I(c ?? null);
			return;
		}
		if (typeof window > "u") return;
		let e = window.localStorage.getItem(j);
		I(e === null ? null : Number(e));
	}, [
		m,
		j,
		c
	]);
	let [L, R] = y({}), z = (e) => (s?.[String(e)] ?? 0) + (m ? L[e] ?? 0 : 0), B = h((e, t) => {
		let r = F[n], a = l?.length ? l : [i];
		for (let n of a) {
			let i = C.cache.identify({
				__typename: r,
				_id: n
			});
			i && C.cache.modify({
				id: i,
				fields: {
					viewerReaction: () => t,
					reactionCounts: (n) => {
						let r = { ...n ?? {} };
						return t !== null && (r[t] = (r[t] ?? 0) + 1), e !== null && (r[e] = Math.max(0, (r[e] ?? 0) - 1)), r;
					}
				}
			});
		}
	}, [
		C,
		n,
		l,
		i
	]), V = async (e) => {
		if (u || D || M === e) return;
		let t = M;
		if (I(e), m) {
			typeof window < "u" && window.localStorage.setItem(j, String(e)), R((n) => ({
				...n,
				[e]: (n[e] ?? 0) + 1,
				...t === null ? {} : { [t]: (n[t] ?? 0) - 1 }
			}));
			return;
		}
		if (B(t, e), O) {
			O.enqueue({
				op: "reaction",
				semantics: "convergence",
				convergenceKey: `reaction:${n}:${i}`,
				payload: {
					surface: n,
					itemId: i,
					slotIndex: e
				}
			});
			return;
		}
		try {
			await E({ variables: { input: {
				surface: n,
				itemId: i,
				slotIndex: e
			} } });
		} catch {
			B(e, t), I(t);
		}
	};
	return T || !A || k.length === 0 ? null : /* @__PURE__ */ b("div", {
		className: p("flex flex-wrap items-center justify-center gap-2", v),
		role: "group",
		"aria-label": S("ariaLabel"),
		children: k.map((t) => {
			let n = M === t.slotIndex, r = z(t.slotIndex);
			return /* @__PURE__ */ x(e.button, {
				type: "button",
				disabled: u || D,
				onClick: () => void V(t.slotIndex),
				whileTap: { scale: .9 },
				whileHover: { scale: 1.06 },
				transition: {
					type: "spring",
					stiffness: 400,
					damping: 18
				},
				className: p("flex items-center gap-1.5 rounded-full px-3 py-1.5 text-2xl leading-none transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary", n ? "bg-wx-primary/10 ring-1 ring-wx-primary/40" : "hover:bg-wx-bg-elevated", u && "cursor-default opacity-70"),
				"aria-pressed": n,
				"aria-label": S("tapAria", { emoji: t.emoji }),
				children: [/* @__PURE__ */ b("span", {
					"aria-hidden": "true",
					children: t.emoji
				}), d && r > 0 && /* @__PURE__ */ b("span", {
					className: "text-xs font-medium text-wx-fg-muted",
					children: r
				})]
			}, t.slotIndex);
		})
	});
}
//#endregion
export { k as a, w as c, E as i, S as l, M as n, T as o, j as r, C as s, I as t };

//# sourceMappingURL=widget-react-vXfa9GKf.js.map