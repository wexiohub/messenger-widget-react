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
import { I as t, N as n, c as r, k as i, l as a, v as o, y as s } from "./widget-react-CVLHwRZh.js";
import { i as c, n as l } from "./widget-react-krPPnv02.js";
import { f as u, l as d, n as f, r as p, u as m } from "./widget-react--D5-TDqS.js";
import { t as h } from "./widget-react-B8rXZyxg.js";
import { a as g, c as ee, i as te, l as ne, n as _, o as v, r as y, s as b, t as x } from "./widget-react-D8-Z8fvu.js";
import { useEffect as S, useMemo as C, useRef as w, useState as re } from "react";
import { jsx as T, jsxs as E } from "react/jsx-runtime";
//#region components/widget/help-article-view/helpers.ts
function D(e) {
	let t = (e) => Array.isArray(e) ? e : [];
	return {
		id: String(e._id ?? ""),
		title: typeof e.title == "string" ? e.title : "",
		excerpt: typeof e.excerpt == "string" ? e.excerpt : "",
		content: typeof e.content == "string" ? e.content : "",
		contentFormat: e.contentFormat === b.HTML ? b.HTML : b.MARKDOWN,
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
function O({ slug: l, locale: O, isDummy: k, onHandoff: ae, onOpenArticle: A, onOpenTranslation: j, onTitleResolved: M }) {
	let N = c("help"), P = c("demo"), F = n(), { config: I } = i(), L = I.messenger?.showRelatedHelpArticles ?? !0, R = I.messenger?.showReactionCounts ?? !0, z = h(), [B, V] = re(O), H = g(B, P), U = C(() => {
		if (k) return null;
		let e = F.previewData?.helpArticles;
		return Array.isArray(e) ? e.find((e) => e && typeof e == "object" && e.slug === l) ?? null : null;
	}, [
		F.previewData,
		k,
		l
	]), W = !!U, { data: G, loading: K } = p({
		variables: { args: {
			slug: l,
			locale: O
		} },
		skip: k || W
	}), [q] = f(), { trackLinkClick: J } = r(), Y = w(null), X = C(() => k ? u(H).find((e) => e.slug === l) : null, [
		k,
		l,
		H
	]), Z = k ? X ? {
		id: X.id,
		title: X.title,
		excerpt: X.excerpt,
		content: X.contentMarkdown,
		contentFormat: b.MARKDOWN,
		authors: X.authors,
		tags: X.tags,
		reactionCounts: null,
		locale: B,
		translations: []
	} : null : W && U ? {
		...D(U),
		reactionCounts: U.reactionCounts ?? null,
		locale: O,
		translations: []
	} : G?.visitorHelpArticle ? {
		id: G.visitorHelpArticle._id,
		title: G.visitorHelpArticle.title,
		excerpt: G.visitorHelpArticle.excerpt ?? "",
		content: G.visitorHelpArticle.content,
		contentFormat: G.visitorHelpArticle.contentFormat,
		authors: G.visitorHelpArticle.authors,
		tags: G.visitorHelpArticle.tags,
		reactionCounts: G.visitorHelpArticle.reactionCounts ?? null,
		locale: G.visitorHelpArticle.locale,
		translations: G.visitorHelpArticle.translations
	} : null, { data: oe } = d({
		variables: {
			articleId: Z?.id ?? "",
			limit: 5,
			locale: O
		},
		skip: k || W || !Z?.id || !L
	}), se = C(() => {
		if (!W || !Z?.id) return [];
		let e = (F.previewData?.helpArticles ?? []).filter((e) => !!e && typeof e == "object"), t = new Set((Z.tags ?? []).map((e) => typeof e == "object" && e && "slug" in e ? String(e.slug) : null).filter((e) => !!e)), n = (() => {
			let e = U;
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
		return e.filter((e) => String(e._id ?? "") !== Z.id).map((e) => {
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
		W,
		Z,
		U,
		F.previewData
	]), Q = W ? se : oe?.visitorHelpRelated ?? [], ce = k || W ? null : G?.visitorHelpArticle?.viewerReaction ?? null, le = !k && !W && G?.visitorHelpArticle ? [G.visitorHelpArticle._id, ...(G.visitorHelpArticle.translations ?? []).map((e) => e._id)] : Z?.id ? [Z.id] : [];
	S(() => {
		k || !Z?.id || !t() || q({ variables: { articleId: Z.id } }).catch(() => {});
	}, [
		Z?.id,
		k,
		q
	]), S(() => {
		k || W || !Z?.id || Y.current !== Z.id && (Y.current = Z.id, J({
			url: `/help/${l}`,
			targetType: "HELP_ARTICLE",
			targetRefId: Z.id
		}));
	}, [
		Z?.id,
		k,
		W,
		l,
		J
	]), v(Z?.title, M);
	let ue = () => ae();
	if (!K && !Z) return /* @__PURE__ */ T("div", {
		className: "flex flex-1 flex-col items-center justify-center px-6 py-12",
		children: /* @__PURE__ */ T(o, { children: /* @__PURE__ */ T(s, {
			className: "py-8 text-center",
			children: /* @__PURE__ */ T("p", {
				className: "text-sm font-semibold text-wx-fg",
				children: N("articleNotFound")
			})
		}) })
	});
	let de = O.split("-")[0].toLowerCase(), $ = Z ? Z.locale.split("-")[0].toLowerCase() : null;
	return !k && !W && !I.contentLocaleFallback && $ !== null && $ !== de ? /* @__PURE__ */ T("div", {
		className: "flex flex-1 flex-col items-center justify-center px-6 py-12",
		children: /* @__PURE__ */ T(o, { children: /* @__PURE__ */ T(s, {
			className: "py-8 text-center",
			children: /* @__PURE__ */ T("p", {
				className: "text-sm font-semibold text-wx-fg",
				children: N("articleNotTranslated")
			})
		}) })
	}) : Z ? /* @__PURE__ */ T(a, {
		className: "flex-1",
		children: /* @__PURE__ */ E("div", {
			className: "flex flex-col px-5 pt-5 pb-12",
			children: [
				/* @__PURE__ */ T("h2", {
					className: "text-xl leading-tight font-bold text-wx-fg",
					children: Z.title
				}),
				Z.authors.length > 0 && /* @__PURE__ */ E("p", {
					className: "mt-2 flex items-center gap-2 text-xs text-wx-fg-muted",
					children: [/* @__PURE__ */ T("span", {
						className: "flex -space-x-1.5",
						children: Z.authors.slice(0, 3).map((e) => /* @__PURE__ */ T("span", {
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
					}), /* @__PURE__ */ T("span", { children: N("writtenBy", { names: Z.authors.map((e) => e.name ?? "").filter(Boolean).join(", ") }) })]
				}),
				Z.tags.length > 0 && /* @__PURE__ */ T("div", {
					className: "mt-2 flex flex-wrap gap-1",
					children: Z.tags.map((e) => /* @__PURE__ */ T("span", {
						className: "rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[11px] font-medium text-wx-fg-muted",
						children: e.label
					}, e._id))
				}),
				Z.excerpt && /* @__PURE__ */ T("p", {
					className: "mt-2 mb-5 text-sm text-wx-fg-muted",
					children: Z.excerpt
				}),
				/* @__PURE__ */ T(y, {
					content: Z.content,
					isHtml: Z.contentFormat === b.HTML || ne(Z.content),
					markdownMarginClass: "mt-3"
				}),
				/* @__PURE__ */ E(m, {
					type: "button",
					variant: "solid",
					size: "lg",
					className: "mt-6 w-full shrink-0 min-h-12",
					onClick: ue,
					...z.parentHandlers,
					children: [/* @__PURE__ */ T(e, {
						ref: z.iconRef,
						size: 16
					}), /* @__PURE__ */ T("span", { children: N("unresolvedCta") })]
				}),
				Z.id && /* @__PURE__ */ T(x, {
					surface: ee.HELP,
					itemId: Z.id,
					reactionCounts: Z.reactionCounts,
					viewerReaction: ce,
					groupItemIds: le,
					isDummy: k,
					showCounts: R,
					className: "mt-4"
				}),
				/* @__PURE__ */ T(_, {
					currentLocale: k ? B : Z.locale,
					locales: k ? [...te] : Z.translations.map((e) => e.locale),
					allowedLocales: k ? void 0 : I.supportedLocales,
					onSelect: k ? (e) => V(e) : (e) => {
						let t = Z.translations.find((t) => t.locale === e);
						t && j?.(t.slug, t.locale);
					},
					className: "mt-6"
				}),
				L && Q.length > 0 && /* @__PURE__ */ E("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ T("p", {
						className: "mb-2 text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
						children: N("relatedTitle")
					}), /* @__PURE__ */ T("ul", {
						className: "flex flex-col gap-1.5",
						children: Q.map((e) => /* @__PURE__ */ T("li", { children: /* @__PURE__ */ E("button", {
							type: "button",
							onClick: () => A?.(e.slug),
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
	}) : /* @__PURE__ */ T(ie, {});
}
function ie() {
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
					].map((e, t) => /* @__PURE__ */ T("div", { className: l("h-3 rounded-md bg-wx-bg-elevated", e) }, t))
				})
			]
		})
	});
}
//#endregion
export { O as HelpArticleView };

//# sourceMappingURL=widget-react-DF5yY9sQ.js.map