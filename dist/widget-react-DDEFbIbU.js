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
import { d as e } from "./widget-react-B9XrHKqv.js";
import { D as t, O as n, T as r, a as i, at as a, i as o, it as s, n as c, ot as l, rt as u, st as d, t as f } from "./widget-react-CK8xTxwO.js";
import { i as p, n as m } from "./widget-react-krPPnv02.js";
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
		case "uk": return (await import("./widget-react-B9X7Tn7t.js")).default;
		default: return (await import("./widget-react-DNFROpaS.js")).default;
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
	return t ? /* @__PURE__ */ b(c, {
		html: e,
		className: `mt-0 ${A}`
	}) : /* @__PURE__ */ b("div", {
		className: `${n} ${A}`,
		children: /* @__PURE__ */ b(i, {
			remarkPlugins: [o],
			children: e
		})
	});
}
//#endregion
//#region components/widget/language-selector/index.tsx
function M({ currentLocale: i, locales: a, allowedLocales: o, onSelect: s, className: c }) {
	let l = p("languageSelector"), [d, h] = y(!1), _ = v(null);
	g(() => {
		if (!d) return;
		let e = (e) => {
			_.current && !_.current.contains(e.target) && h(!1);
		}, t = (e) => {
			e.key === "Escape" && h(!1);
		};
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, [d]);
	let S = o && o.length > 0 ? new Set(o.map((e) => e.split("-")[0].toLowerCase())) : null, C = Array.from(new Set(a.filter(Boolean))).filter((e) => !S || S.has(e.split("-")[0].toLowerCase()));
	if (C.length <= 1) return null;
	let w = i.split("-")[0].toLowerCase();
	return /* @__PURE__ */ x("div", {
		ref: _,
		className: m("relative", c),
		children: [
			/* @__PURE__ */ b("p", {
				className: "mb-1.5 text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
				children: l("title")
			}),
			/* @__PURE__ */ x("button", {
				type: "button",
				onClick: () => h((e) => !e),
				"aria-haspopup": "listbox",
				"aria-expanded": d,
				"aria-label": l("ariaLabel"),
				className: m("flex w-full items-center gap-2 rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2", "text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary"),
				children: [
					/* @__PURE__ */ b(r, {
						size: 15,
						className: "shrink-0 text-wx-fg-muted"
					}),
					/* @__PURE__ */ b("span", {
						className: "min-w-0 flex-1 truncate text-left",
						children: f(i)
					}),
					/* @__PURE__ */ b(t, {
						size: 15,
						className: m("shrink-0 text-wx-fg-subtle transition-transform", d && "rotate-180")
					})
				]
			}),
			/* @__PURE__ */ b(u, { children: d && /* @__PURE__ */ b(e.ul, {
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
				className: m("absolute bottom-full left-0 z-20 mb-1 max-h-56 w-full overflow-auto", "rounded-wx-sm border border-wx-border bg-wx-bg py-1 shadow-[0_12px_32px_rgba(0,0,0,0.16)]"),
				role: "listbox",
				children: C.map((e) => {
					let t = e.split("-")[0].toLowerCase() === w;
					return /* @__PURE__ */ b("li", { children: /* @__PURE__ */ x("button", {
						type: "button",
						role: "option",
						"aria-selected": t,
						onClick: () => {
							s(e), h(!1);
						},
						className: m("flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors", t ? "font-semibold text-wx-primary" : "text-wx-fg hover:bg-wx-bg-elevated"),
						children: [/* @__PURE__ */ b("span", {
							className: "min-w-0 flex-1 truncate",
							children: f(e)
						}), t && /* @__PURE__ */ b(n, {
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
//#region lib/graphql/queries/generated/reactions.generated.tsx
var N = {}, P = l`
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
function F(e) {
	return a(P, {
		...N,
		...e
	});
}
var I = l`
    mutation SubmitVisitorReaction($input: VisitorReactionInput!) {
  submitVisitorReaction(input: $input) {
    ok
  }
}
    `;
function L(e) {
	return s(I, {
		...N,
		...e
	});
}
//#endregion
//#region components/widget/reaction-bar.tsx
var R = (e, t) => `wexio:reaction:${e}:${t}`, z = [
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
], B = {
	[w.NEWS]: "NewsPost",
	[w.HELP]: "HelpArticle"
};
function V({ surface: t, itemId: n, reactionCounts: r, viewerReaction: i, groupItemIds: a, readonly: o = !1, showCounts: s = !0, isDummy: c = !1, className: l }) {
	let u = p("reactions"), f = d(), { data: v, loading: S } = F({
		variables: { surface: t },
		fetchPolicy: "cache-first",
		skip: c
	}), [C, { loading: w }] = L(), T = _(() => c ? z : v?.visitorReactionSet?.slots ?? [], [c, v]), E = c ? !0 : v?.visitorReactionSet?.enabled ?? !0, D = R(t, n), [O, k] = y(null);
	g(() => {
		if (!c) {
			k(i ?? null);
			return;
		}
		if (typeof window > "u") return;
		let e = window.localStorage.getItem(D);
		k(e === null ? null : Number(e));
	}, [
		c,
		D,
		i
	]);
	let [A, j] = y({}), M = (e) => (r?.[String(e)] ?? 0) + (c ? A[e] ?? 0 : 0), N = h((e, r) => {
		let i = B[t], o = a?.length ? a : [n];
		for (let t of o) {
			let n = f.cache.identify({
				__typename: i,
				_id: t
			});
			n && f.cache.modify({
				id: n,
				fields: {
					viewerReaction: () => r,
					reactionCounts: (t) => {
						let n = { ...t ?? {} };
						return r !== null && (n[r] = (n[r] ?? 0) + 1), e !== null && (n[e] = Math.max(0, (n[e] ?? 0) - 1)), n;
					}
				}
			});
		}
	}, [
		f,
		t,
		a,
		n
	]), P = async (e) => {
		if (o || w || O === e) return;
		let r = O;
		if (k(e), c) {
			typeof window < "u" && window.localStorage.setItem(D, String(e)), j((t) => ({
				...t,
				[e]: (t[e] ?? 0) + 1,
				...r === null ? {} : { [r]: (t[r] ?? 0) - 1 }
			}));
			return;
		}
		N(r, e);
		try {
			await C({ variables: { input: {
				surface: t,
				itemId: n,
				slotIndex: e
			} } });
		} catch {
			N(e, r), k(r);
		}
	};
	return S || !E || T.length === 0 ? null : /* @__PURE__ */ b("div", {
		className: m("flex flex-wrap items-center justify-center gap-2", l),
		role: "group",
		"aria-label": u("ariaLabel"),
		children: T.map((t) => {
			let n = O === t.slotIndex, r = M(t.slotIndex);
			return /* @__PURE__ */ x(e.button, {
				type: "button",
				disabled: o || w,
				onClick: () => void P(t.slotIndex),
				whileTap: { scale: .9 },
				whileHover: { scale: 1.06 },
				transition: {
					type: "spring",
					stiffness: 400,
					damping: 18
				},
				className: m("flex items-center gap-1.5 rounded-full px-3 py-1.5 text-2xl leading-none transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary", n ? "bg-wx-primary/10 ring-1 ring-wx-primary/40" : "hover:bg-wx-bg-elevated", o && "cursor-default opacity-70"),
				"aria-pressed": n,
				"aria-label": u("tapAria", { emoji: t.emoji }),
				children: [/* @__PURE__ */ b("span", {
					"aria-hidden": "true",
					children: t.emoji
				}), s && r > 0 && /* @__PURE__ */ b("span", {
					className: "text-xs font-medium text-wx-fg-muted",
					children: r
				})]
			}, t.slotIndex);
		})
	});
}
//#endregion
export { k as a, w as c, E as i, S as l, M as n, T as o, j as r, C as s, V as t };

//# sourceMappingURL=widget-react-DDEFbIbU.js.map