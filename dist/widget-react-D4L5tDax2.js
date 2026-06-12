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
import { i as e } from "./widget-react-B9XrHKqv.js";
import { D as t, S as n, f as r, p as i, r as a } from "./widget-react-DfX-FjHu.js";
import { a as o, c as ee, i as s, l as c, n as l, o as u, r as te, s as d, t as f } from "./widget-react-BwHHN-at.js";
import { f as p, g as m, l as h, n as g, r as _, u as v } from "./widget-react-BlpGsLnt.js";
import { i as y, n as b } from "./widget-react-CQ0DMi7b.js";
import { t as x } from "./widget-react-GkCAcRz0.js";
import { useEffect as S, useMemo as C, useState as w } from "react";
import { jsx as T, jsxs as E } from "react/jsx-runtime";
//#region components/widget/help-article-view/helpers.ts
function ne(e) {
	let t = (e) => Array.isArray(e) ? e : [];
	return {
		id: String(e._id ?? ""),
		title: typeof e.title == "string" ? e.title : "",
		excerpt: typeof e.excerpt == "string" ? e.excerpt : "",
		content: typeof e.content == "string" ? e.content : "",
		contentFormat: e.contentFormat === d.HTML ? d.HTML : d.MARKDOWN,
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
function D({ slug: b, locale: D, isDummy: k, onHandoff: A, onOpenArticle: j, onOpenTranslation: M, onTitleResolved: N }) {
	let P = y("help"), F = y("demo"), I = t(), { config: L } = n(), R = L.messenger?.showRelatedHelpArticles ?? !0, z = L.messenger?.showReactionCounts ?? !0, B = x(), [V, H] = w(D), U = o(V, F), W = C(() => {
		if (k) return null;
		let e = I.previewData?.helpArticles;
		return Array.isArray(e) ? e.find((e) => e && typeof e == "object" && e.slug === b) ?? null : null;
	}, [
		I.previewData,
		k,
		b
	]), G = !!W, { data: K, loading: q } = _({
		variables: { args: {
			slug: b,
			locale: D
		} },
		skip: k || G
	}), [J] = g(), Y = C(() => k ? p(U).find((e) => e.slug === b) : null, [
		k,
		b,
		U
	]), X = k ? Y ? {
		id: Y.id,
		title: Y.title,
		excerpt: Y.excerpt,
		content: Y.contentMarkdown,
		contentFormat: d.MARKDOWN,
		authors: Y.authors,
		tags: Y.tags,
		reactionCounts: null,
		locale: V,
		translations: []
	} : null : G && W ? {
		...ne(W),
		reactionCounts: W.reactionCounts ?? null,
		locale: D,
		translations: []
	} : K?.visitorHelpArticle ? {
		id: K.visitorHelpArticle._id,
		title: K.visitorHelpArticle.title,
		excerpt: K.visitorHelpArticle.excerpt ?? "",
		content: K.visitorHelpArticle.content,
		contentFormat: K.visitorHelpArticle.contentFormat,
		authors: K.visitorHelpArticle.authors,
		tags: K.visitorHelpArticle.tags,
		reactionCounts: K.visitorHelpArticle.reactionCounts ?? null,
		locale: K.visitorHelpArticle.locale,
		translations: K.visitorHelpArticle.translations
	} : null, { data: Z } = h({
		variables: {
			articleId: X?.id ?? "",
			limit: 5,
			locale: D
		},
		skip: k || G || !X?.id || !R
	}), re = C(() => {
		if (!G || !X?.id) return [];
		let e = (I.previewData?.helpArticles ?? []).filter((e) => !!e && typeof e == "object"), t = new Set((X.tags ?? []).map((e) => typeof e == "object" && e && "slug" in e ? String(e.slug) : null).filter((e) => !!e)), n = (() => {
			let e = W;
			if (!e) return null;
			let t = e.folderId;
			if (typeof t == "string") return t;
			let n = e.folder;
			if (n && typeof n == "object" && "_id" in n) {
				let e = n._id;
				return typeof e == "string" ? e : null;
			}
			return null;
		})();
		return e.filter((e) => String(e._id ?? "") !== X.id).map((e) => {
			let r = typeof e.folderId == "string" ? e.folderId : e.folder && typeof e.folder == "object" && "_id" in e.folder ? String(e.folder._id ?? "") : null, i = Array.isArray(e.tags) ? e.tags.map((e) => typeof e == "object" && e && "slug" in e ? String(e.slug) : null).filter((e) => !!e) : [];
			return {
				raw: e,
				score: (n && r === n ? 2 : 0) + i.filter((e) => t.has(e)).length
			};
		}).filter((e) => e.score > 0).sort((e, t) => t.score - e.score).slice(0, 5).map(({ raw: e }) => ({
			_id: String(e._id ?? ""),
			title: typeof e.title == "string" ? e.title : "",
			slug: typeof e.slug == "string" ? e.slug : "",
			excerpt: typeof e.excerpt == "string" ? e.excerpt : null
		}));
	}, [
		G,
		X,
		W,
		I.previewData
	]), Q = G ? re : Z?.visitorHelpRelated ?? [], ie = k || G ? null : K?.visitorHelpArticle?.viewerReaction ?? null, ae = !k && !G && K?.visitorHelpArticle ? [K.visitorHelpArticle._id, ...(K.visitorHelpArticle.translations ?? []).map((e) => e._id)] : X?.id ? [X.id] : [];
	S(() => {
		k || !X?.id || !m() || J({ variables: { articleId: X.id } }).catch(() => {});
	}, [
		X?.id,
		k,
		J
	]), u(X?.title, N);
	let oe = () => A();
	if (!q && !X) return /* @__PURE__ */ T("div", {
		className: "flex flex-1 flex-col items-center justify-center px-6 py-12",
		children: /* @__PURE__ */ T(r, { children: /* @__PURE__ */ T(i, {
			className: "py-8 text-center",
			children: /* @__PURE__ */ T("p", {
				className: "text-sm font-semibold text-wx-fg",
				children: P("articleNotFound")
			})
		}) })
	});
	let se = D.split("-")[0].toLowerCase(), $ = X ? X.locale.split("-")[0].toLowerCase() : null;
	return !k && !G && !L.contentLocaleFallback && $ !== null && $ !== se ? /* @__PURE__ */ T("div", {
		className: "flex flex-1 flex-col items-center justify-center px-6 py-12",
		children: /* @__PURE__ */ T(r, { children: /* @__PURE__ */ T(i, {
			className: "py-8 text-center",
			children: /* @__PURE__ */ T("p", {
				className: "text-sm font-semibold text-wx-fg",
				children: P("articleNotTranslated")
			})
		}) })
	}) : X ? /* @__PURE__ */ T(a, {
		className: "flex-1",
		children: /* @__PURE__ */ E("div", {
			className: "flex flex-col px-5 pt-5 pb-12",
			children: [
				/* @__PURE__ */ T("h2", {
					className: "text-xl leading-tight font-bold text-wx-fg",
					children: X.title
				}),
				X.authors.length > 0 && /* @__PURE__ */ E("p", {
					className: "mt-2 flex items-center gap-2 text-xs text-wx-fg-muted",
					children: [/* @__PURE__ */ T("span", {
						className: "flex -space-x-1.5",
						children: X.authors.slice(0, 3).map((e) => /* @__PURE__ */ T("span", {
							className: "h-5 w-5 overflow-hidden rounded-full bg-wx-bg-elevated ring-1 ring-wx-bg",
							"aria-hidden": "true",
							children: e.photo?.url ? /* @__PURE__ */ T("img", {
								src: e.photo.url,
								alt: "",
								className: "h-full w-full object-cover"
							}) : /* @__PURE__ */ T("span", {
								className: "flex h-full w-full items-center justify-center text-[10px] font-semibold uppercase text-wx-fg-muted",
								children: (e.name ?? "?").charAt(0)
							})
						}, e._id))
					}), /* @__PURE__ */ T("span", { children: P("writtenBy", { names: X.authors.map((e) => e.name ?? "").filter(Boolean).join(", ") }) })]
				}),
				X.tags.length > 0 && /* @__PURE__ */ T("div", {
					className: "mt-2 flex flex-wrap gap-1",
					children: X.tags.map((e) => /* @__PURE__ */ T("span", {
						className: "rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[11px] font-medium text-wx-fg-muted",
						children: e.label
					}, e._id))
				}),
				X.excerpt && /* @__PURE__ */ T("p", {
					className: "mt-2 mb-5 text-sm text-wx-fg-muted",
					children: X.excerpt
				}),
				/* @__PURE__ */ T(te, {
					content: X.content,
					isHtml: X.contentFormat === d.HTML || c(X.content),
					markdownMarginClass: "mt-3"
				}),
				/* @__PURE__ */ E(v, {
					type: "button",
					variant: "solid",
					size: "lg",
					className: "mt-6 w-full shrink-0 min-h-12",
					onClick: oe,
					...B.parentHandlers,
					children: [/* @__PURE__ */ T(e, {
						ref: B.iconRef,
						size: 16
					}), /* @__PURE__ */ T("span", { children: P("unresolvedCta") })]
				}),
				X.id && /* @__PURE__ */ T(f, {
					surface: ee.HELP,
					itemId: X.id,
					reactionCounts: X.reactionCounts,
					viewerReaction: ie,
					groupItemIds: ae,
					isDummy: k,
					showCounts: z,
					className: "mt-4"
				}),
				/* @__PURE__ */ T(l, {
					currentLocale: k ? V : X.locale,
					locales: k ? [...s] : X.translations.map((e) => e.locale),
					allowedLocales: k ? void 0 : L.supportedLocales,
					onSelect: k ? (e) => H(e) : (e) => {
						let t = X.translations.find((t) => t.locale === e);
						t && M?.(t.slug, t.locale);
					},
					className: "mt-6"
				}),
				R && Q.length > 0 && /* @__PURE__ */ E("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ T("p", {
						className: "mb-2 text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
						children: P("relatedTitle")
					}), /* @__PURE__ */ T("ul", {
						className: "flex flex-col gap-1.5",
						children: Q.map((e) => /* @__PURE__ */ T("li", { children: /* @__PURE__ */ E("button", {
							type: "button",
							onClick: () => j?.(e.slug),
							className: "flex w-full flex-col items-start gap-0.5 rounded-wx-lg bg-wx-bg-elevated px-3 py-2 text-left transition-colors hover:bg-wx-bg-elevated/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
							children: [/* @__PURE__ */ T("span", {
								className: "block truncate text-sm font-medium text-wx-fg",
								children: e.title
							}), e.excerpt && /* @__PURE__ */ T("span", {
								className: "line-clamp-1 block text-xs text-wx-fg-muted",
								children: e.excerpt
							})]
						}) }, e._id))
					})]
				})
			]
		})
	}) : /* @__PURE__ */ T(O, {});
}
function O() {
	return /* @__PURE__ */ T(a, {
		className: "flex-1",
		children: /* @__PURE__ */ E("div", {
			className: "flex flex-col px-5 pt-5 pb-12",
			"aria-busy": "true",
			"aria-live": "polite",
			children: [
				/* @__PURE__ */ E("div", {
					className: "animate-pulse space-y-2.5",
					children: [/* @__PURE__ */ T("div", { className: "h-5 w-3/4 rounded-md bg-wx-bg-elevated" }), /* @__PURE__ */ T("div", { className: "h-5 w-1/2 rounded-md bg-wx-bg-elevated" })]
				}),
				/* @__PURE__ */ E("div", {
					className: "mt-4 flex items-center gap-2 animate-pulse",
					children: [/* @__PURE__ */ T("div", { className: "h-5 w-5 rounded-full bg-wx-bg-elevated" }), /* @__PURE__ */ T("div", { className: "h-3 w-32 rounded-md bg-wx-bg-elevated" })]
				}),
				/* @__PURE__ */ T("div", {
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
					].map((e, t) => /* @__PURE__ */ T("div", { className: b("h-3 rounded-md bg-wx-bg-elevated", e) }, t))
				})
			]
		})
	});
}
//#endregion
export { D as HelpArticleView };

//# sourceMappingURL=widget-react-D4L5tDax2.js.map