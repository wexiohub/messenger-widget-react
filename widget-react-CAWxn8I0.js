import "react";
import "react-dom";
import "react/jsx-runtime";
import "react-dom/client";
import { i as e } from "./widget-react-DE7AVrCo.js";
import { E as t, d as n, f as r, n as i, x as a } from "./widget-react-BfPdgAQ-.js";
import { a as o, c as s, i as c, l, n as u, o as d, r as f, s as p, t as m } from "./widget-react-CDPzwV1i.js";
import { l as h, n as g, o as _, p as v, s as y, t as b } from "./widget-react-BAOIDvhV.js";
import { i as x, n as S } from "./widget-react-BxvW64LH.js";
import { t as C } from "./widget-react-D8TPnM9r.js";
import { useEffect as w, useMemo as T, useState as ee } from "react";
import { jsx as E, jsxs as D } from "react/jsx-runtime";
//#region components/widget/help-article-view/helpers.ts
function O(e) {
	let t = (e) => Array.isArray(e) ? e : [];
	return {
		id: String(e._id ?? ""),
		title: typeof e.title == "string" ? e.title : "",
		excerpt: typeof e.excerpt == "string" ? e.excerpt : "",
		content: typeof e.content == "string" ? e.content : "",
		contentFormat: e.contentFormat === p.HTML ? p.HTML : p.MARKDOWN,
		authors: t(e.authors).filter((e) => !!e && typeof e == "object").map((e) => ({
			_id: String(e._id ?? ""),
			name: typeof e.name == "string" ? e.name : null,
			photo: e.photo
		})),
		tags: t(e.tags).filter((e) => !!e && typeof e == "object").map((e) => ({
			_id: String(e._id ?? ""),
			slug: typeof e.slug == "string" ? e.slug : "",
			label: typeof e.label == "string" ? e.label : ""
		}))
	};
}
//#endregion
//#region components/widget/help-article-view/index.tsx
function k({ slug: S, locale: k, isDummy: j, onHandoff: M, onOpenArticle: N, onOpenTranslation: P, onTitleResolved: F }) {
	let I = x("help"), L = x("demo"), R = t(), { config: z } = a(), B = z.messenger?.showRelatedHelpArticles ?? !0, V = z.messenger?.showReactionCounts ?? !0, H = C(), [U, W] = ee(k), G = o(U, L), K = T(() => {
		if (j) return null;
		let e = R.previewData?.helpArticles;
		return Array.isArray(e) ? e.find((e) => e && typeof e == "object" && e.slug === S) ?? null : null;
	}, [
		R.previewData,
		j,
		S
	]), q = !!K, { data: J, loading: Y } = g({
		variables: { args: {
			slug: S,
			locale: k
		} },
		skip: j || q
	}), [X] = b(), Z = T(() => j ? h(G).find((e) => e.slug === S) : null, [
		j,
		S,
		G
	]), Q = j ? Z ? {
		id: Z.id,
		title: Z.title,
		excerpt: Z.excerpt,
		content: Z.contentMarkdown,
		contentFormat: p.MARKDOWN,
		authors: Z.authors,
		tags: Z.tags,
		reactionCounts: null,
		locale: U,
		translations: []
	} : null : q && K ? {
		...O(K),
		reactionCounts: K.reactionCounts ?? null,
		locale: k,
		translations: []
	} : J?.visitorHelpArticle ? {
		id: J.visitorHelpArticle._id,
		title: J.visitorHelpArticle.title,
		excerpt: J.visitorHelpArticle.excerpt ?? "",
		content: J.visitorHelpArticle.content,
		contentFormat: J.visitorHelpArticle.contentFormat,
		authors: J.visitorHelpArticle.authors,
		tags: J.visitorHelpArticle.tags,
		reactionCounts: J.visitorHelpArticle.reactionCounts ?? null,
		locale: J.visitorHelpArticle.locale,
		translations: J.visitorHelpArticle.translations
	} : null, { data: te } = _({
		variables: {
			articleId: Q?.id ?? "",
			limit: 5,
			locale: k
		},
		skip: j || q || !Q?.id || !B
	}), $ = te?.visitorHelpRelated ?? [], ne = j || q ? null : J?.visitorHelpArticle?.viewerReaction ?? null, re = !j && !q && J?.visitorHelpArticle ? [J.visitorHelpArticle._id, ...(J.visitorHelpArticle.translations ?? []).map((e) => e._id)] : Q?.id ? [Q.id] : [];
	return w(() => {
		j || !Q?.id || !v() || X({ variables: { articleId: Q.id } }).catch(() => {});
	}, [
		Q?.id,
		j,
		X
	]), d(Q?.title, F), !Y && !Q ? /* @__PURE__ */ E("div", {
		className: "flex flex-1 flex-col items-center justify-center px-6 py-12",
		children: /* @__PURE__ */ E(n, { children: /* @__PURE__ */ E(r, {
			className: "py-8 text-center",
			children: /* @__PURE__ */ E("p", {
				className: "text-sm font-semibold text-wx-fg",
				children: I("articleNotFound")
			})
		}) })
	}) : Q ? /* @__PURE__ */ E(i, {
		className: "flex-1",
		children: /* @__PURE__ */ D("div", {
			className: "flex flex-col px-5 pt-5 pb-12",
			children: [
				/* @__PURE__ */ E("h2", {
					className: "text-xl leading-tight font-bold text-wx-fg",
					children: Q.title
				}),
				Q.authors.length > 0 && /* @__PURE__ */ D("p", {
					className: "mt-2 flex items-center gap-2 text-xs text-wx-fg-muted",
					children: [/* @__PURE__ */ E("span", {
						className: "flex -space-x-1.5",
						children: Q.authors.slice(0, 3).map((e) => /* @__PURE__ */ E("span", {
							className: "h-5 w-5 overflow-hidden rounded-full bg-wx-bg-elevated ring-1 ring-wx-bg",
							"aria-hidden": "true",
							children: e.photo?.url ? /* @__PURE__ */ E("img", {
								src: e.photo.url,
								alt: "",
								className: "h-full w-full object-cover"
							}) : /* @__PURE__ */ E("span", {
								className: "flex h-full w-full items-center justify-center text-[10px] font-semibold uppercase text-wx-fg-muted",
								children: (e.name ?? "?").charAt(0)
							})
						}, e._id))
					}), /* @__PURE__ */ E("span", { children: I("writtenBy", { names: Q.authors.map((e) => e.name ?? "").filter(Boolean).join(", ") }) })]
				}),
				Q.tags.length > 0 && /* @__PURE__ */ E("div", {
					className: "mt-2 flex flex-wrap gap-1",
					children: Q.tags.map((e) => /* @__PURE__ */ E("span", {
						className: "rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[11px] font-medium text-wx-fg-muted",
						children: e.label
					}, e._id))
				}),
				Q.excerpt && /* @__PURE__ */ E("p", {
					className: "mt-2 mb-5 text-sm text-wx-fg-muted",
					children: Q.excerpt
				}),
				/* @__PURE__ */ E(f, {
					content: Q.content,
					isHtml: Q.contentFormat === p.HTML || l(Q.content),
					markdownMarginClass: "mt-3"
				}),
				/* @__PURE__ */ D(y, {
					type: "button",
					variant: "solid",
					size: "lg",
					className: "mt-6 w-full shrink-0 min-h-12",
					onClick: () => M(),
					...H.parentHandlers,
					children: [/* @__PURE__ */ E(e, {
						ref: H.iconRef,
						size: 16
					}), /* @__PURE__ */ E("span", { children: I("unresolvedCta") })]
				}),
				Q.id && /* @__PURE__ */ E(m, {
					surface: s.HELP,
					itemId: Q.id,
					reactionCounts: Q.reactionCounts,
					viewerReaction: ne,
					groupItemIds: re,
					isDummy: j,
					showCounts: V,
					className: "mt-4"
				}),
				/* @__PURE__ */ E(u, {
					currentLocale: j ? U : Q.locale,
					locales: j ? [...c] : Q.translations.map((e) => e.locale),
					onSelect: j ? (e) => W(e) : (e) => {
						let t = Q.translations.find((t) => t.locale === e);
						t && P?.(t.slug, t.locale);
					},
					className: "mt-6"
				}),
				B && $.length > 0 && /* @__PURE__ */ D("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ E("p", {
						className: "mb-2 text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
						children: I("relatedTitle")
					}), /* @__PURE__ */ E("ul", {
						className: "flex flex-col gap-1.5",
						children: $.map((e) => /* @__PURE__ */ E("li", { children: /* @__PURE__ */ D("button", {
							type: "button",
							onClick: () => N?.(e.slug),
							className: "flex w-full items-start gap-3 rounded-wx-lg bg-wx-bg-elevated px-3 py-2 text-left transition-colors hover:bg-wx-bg-elevated/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
							children: [/* @__PURE__ */ E("span", {
								className: "aspect-square w-10 shrink-0 rounded-wx-sm bg-cover bg-center",
								style: e.coverImageUrl?.url ? { backgroundImage: `url(${e.coverImageUrl.url})` } : { background: "linear-gradient(135deg, #1e1f21, #121314)" },
								"aria-hidden": "true"
							}), /* @__PURE__ */ D("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ E("span", {
									className: "block truncate text-sm font-medium text-wx-fg",
									children: e.title
								}), e.excerpt && /* @__PURE__ */ E("span", {
									className: "line-clamp-1 block text-xs text-wx-fg-muted",
									children: e.excerpt
								})]
							})]
						}) }, e._id))
					})]
				})
			]
		})
	}) : /* @__PURE__ */ E(A, {});
}
function A() {
	return /* @__PURE__ */ E(i, {
		className: "flex-1",
		children: /* @__PURE__ */ D("div", {
			className: "flex flex-col px-5 pt-5 pb-12",
			"aria-busy": "true",
			"aria-live": "polite",
			children: [
				/* @__PURE__ */ D("div", {
					className: "animate-pulse space-y-2.5",
					children: [/* @__PURE__ */ E("div", { className: "h-5 w-3/4 rounded-md bg-wx-bg-elevated" }), /* @__PURE__ */ E("div", { className: "h-5 w-1/2 rounded-md bg-wx-bg-elevated" })]
				}),
				/* @__PURE__ */ D("div", {
					className: "mt-4 flex items-center gap-2 animate-pulse",
					children: [/* @__PURE__ */ E("div", { className: "h-5 w-5 rounded-full bg-wx-bg-elevated" }), /* @__PURE__ */ E("div", { className: "h-3 w-32 rounded-md bg-wx-bg-elevated" })]
				}),
				/* @__PURE__ */ E("div", {
					className: "mt-6 space-y-2.5 animate-pulse",
					children: [
						"w-full",
						"w-11/12",
						"w-10/12",
						"w-full",
						"w-9/12",
						"w-full",
						"w-11/12",
						"w-7/12"
					].map((e, t) => /* @__PURE__ */ E("div", { className: S("h-3 rounded-md bg-wx-bg-elevated", e) }, t))
				})
			]
		})
	});
}
//#endregion
export { k as HelpArticleView };

//# sourceMappingURL=widget-react-CAWxn8I0.js.map