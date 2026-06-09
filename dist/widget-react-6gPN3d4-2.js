import "react";
import "react-dom";
import "react/jsx-runtime";
import "react-dom/client";
import { D as e, S as t, r as n } from "./widget-react-Xe5iO4UM.js";
import { a as r, c as i, i as a, l as o, n as s, o as c, r as l, t as u } from "./widget-react-DNT_Wjab.js";
import { i as d, n as f, o as p } from "./widget-react-BxvW64LH.js";
import { h as m, n as h, o as g, r as _, s as v } from "./widget-react-ONbzn_cj.js";
import { t as y } from "./widget-react-CUBFPjaV.js";
import { useState as b } from "react";
import { jsx as x, jsxs as S } from "react/jsx-runtime";
//#region components/widget/news-article-view/helpers.ts
function C(e) {
	if (!e || typeof e != "object") return null;
	let t = e, n = String(t._id ?? t.id ?? "");
	if (!n) return null;
	let r = t.coverImageUrl?.url, i = t.externalCoverImageUrl, a = typeof r == "string" ? r : typeof i == "string" ? i : void 0, o = Array.isArray(t.tags) ? t.tags.map((e) => {
		if (!e || typeof e != "object") return null;
		let t = e.slug, n = e.label;
		return typeof t != "string" || typeof n != "string" ? null : {
			slug: t,
			label: n
		};
	}).filter((e) => !!e) : void 0, s = (e) => {
		if (!Array.isArray(e)) return;
		let t = [];
		for (let n of e) if (n) {
			if (typeof n == "string") t.push(n);
			else if (typeof n == "object") {
				let e = n._id ?? n.id;
				typeof e == "string" && t.push(e);
			}
		}
		return t.length > 0 ? t : void 0;
	}, c = Array.isArray(t.translations) ? t.translations.map((e) => {
		if (!e || typeof e != "object") return null;
		let t = String(e._id ?? e.id ?? ""), n = e.locale;
		return !t || typeof n != "string" ? null : {
			id: t,
			locale: n
		};
	}).filter((e) => !!e) : void 0, l = Array.isArray(t.authors) ? t.authors.map((e) => {
		if (!e || typeof e != "object") return null;
		let t = e.name;
		if (typeof t != "string") return null;
		let n = e._id, r = e.photo?.url;
		return {
			_id: String(n ?? t),
			name: t,
			photo: { url: typeof r == "string" ? r : "" }
		};
	}).filter((e) => !!e) : void 0;
	return {
		id: n,
		title: typeof t.title == "string" ? t.title : "",
		excerpt: typeof t.excerpt == "string" ? t.excerpt : "",
		contentMarkdown: typeof t.contentMarkdown == "string" ? t.contentMarkdown : void 0,
		bodyFormat: typeof t.bodyFormat == "string" ? t.bodyFormat : void 0,
		coverImageUrl: a,
		publishedAt: typeof t.publishedAt == "string" ? t.publishedAt : (/* @__PURE__ */ new Date()).toISOString(),
		upstreamUpdatedAt: typeof t.upstreamUpdatedAt == "string" ? t.upstreamUpdatedAt : void 0,
		sourceUrl: typeof t.sourceUrl == "string" ? t.sourceUrl : void 0,
		reactionCounts: t.reactionCounts ?? null,
		viewerReaction: typeof t.viewerReaction == "number" ? t.viewerReaction : null,
		tags: o,
		authors: l,
		categoryIds: s(t.categories),
		tagIds: s(t.tags),
		locale: typeof t.locale == "string" ? t.locale : void 0,
		translations: c
	};
}
//#endregion
//#region components/widget/news-article-view/related-news-list.tsx
function w({ currentId: e, currentCategoryIds: t, currentTagIds: n, previewPostsById: r, visitorRelatedRaw: i, isDummy: a, onOpen: o }) {
	let s = d("news"), c = (() => {
		if (a) return [];
		if (Array.isArray(i) && i.length > 0) return i.filter((e) => !!e && typeof e == "object").map((e) => {
			let t = e.coverImageUrl?.url ?? e.externalCoverImageUrl;
			return {
				id: String(e._id ?? e.id ?? ""),
				title: typeof e.title == "string" ? e.title : "",
				coverImageUrl: typeof t == "string" ? t : void 0
			};
		}).filter((e) => e.id && e.title);
		if (r && Object.keys(r).length > 0 && (t.length > 0 || n.length > 0)) {
			let i = new Set(t), a = new Set(n), o = [];
			for (let [t, n] of Object.entries(r)) {
				if (t === e || !n || typeof n != "object") continue;
				let r = n, s = Array.isArray(r.categories) ? r.categories : [], c = Array.isArray(r.tags) ? r.tags : [], l = (e) => {
					let t = /* @__PURE__ */ new Set();
					for (let n of e) if (n && typeof n == "object") {
						let e = n._id ?? n.id;
						typeof e == "string" && t.add(e);
					}
					return t;
				}, u = l(s), d = l(c), f = 0;
				for (let e of u) i.has(e) && f++;
				for (let e of d) a.has(e) && f++;
				if (f === 0) continue;
				let p = r.coverImageUrl?.url ?? r.externalCoverImageUrl;
				o.push({
					id: t,
					title: typeof r.title == "string" ? r.title : "",
					coverImageUrl: typeof p == "string" ? p : void 0,
					overlap: f,
					publishedAt: typeof r.publishedAt == "string" ? r.publishedAt : ""
				});
			}
			return o.sort((e, t) => t.overlap === e.overlap ? t.publishedAt.localeCompare(e.publishedAt) : t.overlap - e.overlap), o.slice(0, 5).map(({ id: e, title: t, coverImageUrl: n }) => ({
				id: e,
				title: t,
				coverImageUrl: n
			}));
		}
		return [];
	})();
	return c.length === 0 ? null : /* @__PURE__ */ S("section", {
		className: "mt-6",
		children: [/* @__PURE__ */ x("p", {
			className: "mb-2 text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
			children: s("relatedTitle")
		}), /* @__PURE__ */ x("ul", {
			className: "flex flex-col gap-2",
			children: c.map((e) => /* @__PURE__ */ x("li", { children: /* @__PURE__ */ S("button", {
				type: "button",
				onClick: () => o(e.id),
				className: "flex w-full items-center gap-3 rounded-wx-lg bg-wx-bg-elevated px-3 py-2 text-left transition-colors hover:bg-wx-bg-elevated/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
				children: [/* @__PURE__ */ x("span", {
					className: "aspect-square w-12 shrink-0 rounded-wx-sm bg-cover bg-center",
					style: e.coverImageUrl ? { backgroundImage: `url(${e.coverImageUrl})` } : { background: "linear-gradient(135deg, #1e1f21, #121314)" },
					"aria-hidden": "true"
				}), /* @__PURE__ */ x("span", {
					className: "min-w-0 flex-1 truncate text-sm font-medium text-wx-fg",
					children: e.title
				})]
			}) }, e.id))
		})]
	});
}
//#endregion
//#region components/widget/news-article-view/index.tsx
function T({ id: T, isDummy: D, onOpenRelated: O, onTitleResolved: k }) {
	let A = d("news"), j = d("demo"), M = p(), N = e(), { config: P } = t(), F = P.messenger?.showRelatedNews ?? !0, I = P.messenger?.showReactionCounts ?? !0, [L, R] = b(M), z = r(L, j), B = D ? null : N.previewData?.newsPostsById?.[T], V = !!B, { data: H, loading: U } = g({
		variables: { args: {
			id: T,
			locale: M
		} },
		skip: D || V || !T
	}), { data: W } = v({
		variables: {
			postId: T,
			limit: 5,
			locale: M
		},
		skip: D || V || !T || !F
	}), G = D ? m(z).find((e) => e.id === T) ?? null : null, K = G ? {
		id: G.id,
		title: G.title,
		excerpt: G.excerpt,
		contentMarkdown: G.contentMarkdown,
		bodyFormat: "markdown",
		coverImageUrl: G.coverImageUrl,
		coverGradient: G.coverGradient,
		publishedAt: G.publishedAt,
		upstreamUpdatedAt: G.upstreamUpdatedAt,
		tags: G.tags,
		authors: G.authors,
		category: G.category,
		locale: L
	} : C(V ? B : H?.visitorNewsPost);
	if (c(K?.title, k), !K) return U ? /* @__PURE__ */ x(E, {}) : /* @__PURE__ */ x("div", {
		className: "flex flex-1 items-center justify-center px-6 py-12 text-center",
		children: /* @__PURE__ */ x("p", {
			className: "text-sm text-wx-fg-muted",
			children: A("articleNotFound")
		})
	});
	let q = M.split("-")[0].toLowerCase(), J = K.locale ? K.locale.split("-")[0].toLowerCase() : null;
	if (!D && !V && !P.contentLocaleFallback && J !== null && J !== q) return /* @__PURE__ */ x("div", {
		className: "flex flex-1 items-center justify-center px-6 py-12 text-center",
		children: /* @__PURE__ */ x("p", {
			className: "text-sm text-wx-fg-muted",
			children: A("articleNotTranslated")
		})
	});
	let Y = K.coverGradient ?? ["#1e1f21", "#121314"];
	return /* @__PURE__ */ x(n, {
		className: "flex-1",
		children: /* @__PURE__ */ S("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ x("div", {
				className: f("relative w-full"),
				style: {
					aspectRatio: "16 / 9",
					background: K.coverImageUrl ? `url(${K.coverImageUrl}) center/cover` : `linear-gradient(135deg, ${Y[0]}, ${Y[1]})`
				},
				"aria-hidden": "true"
			}), /* @__PURE__ */ S("div", {
				className: "flex flex-col gap-3 px-5 pt-5 pb-12",
				children: [
					K.category && /* @__PURE__ */ x("p", {
						className: "text-[11px] font-semibold tracking-[0.14em] text-wx-primary uppercase",
						children: K.category.label
					}),
					/* @__PURE__ */ S("p", {
						className: "flex items-center gap-2 text-xs text-wx-fg-subtle",
						children: [/* @__PURE__ */ x("span", { children: new Date(K.publishedAt).toLocaleDateString(M, {
							month: "long",
							day: "numeric",
							year: "numeric"
						}) }), _(K) && K.upstreamUpdatedAt && /* @__PURE__ */ x("span", {
							className: "rounded-full bg-wx-bg-elevated px-1.5 py-0.5 text-[10px] font-medium text-wx-fg-muted",
							title: new Date(K.upstreamUpdatedAt).toLocaleString(M),
							children: A("editedAt", { when: h(K.upstreamUpdatedAt) })
						})]
					}),
					/* @__PURE__ */ x("h2", {
						className: "text-2xl leading-tight font-bold text-wx-fg",
						children: K.title
					}),
					K.authors && K.authors.length > 0 && /* @__PURE__ */ S("p", {
						className: "flex items-center gap-2 text-xs text-wx-fg-muted",
						children: [/* @__PURE__ */ x("span", {
							className: "flex -space-x-1.5",
							children: K.authors.slice(0, 3).map((e) => /* @__PURE__ */ x("span", {
								className: "h-5 w-5 overflow-hidden rounded-full bg-wx-bg-elevated ring-1 ring-wx-bg",
								"aria-hidden": "true",
								children: /* @__PURE__ */ x("img", {
									src: e.photo.url,
									alt: "",
									className: "h-full w-full object-cover"
								})
							}, e._id))
						}), /* @__PURE__ */ x("span", { children: A("writtenBy", { names: K.authors.map((e) => e.name).join(", ") }) })]
					}),
					K.tags && K.tags.length > 0 && /* @__PURE__ */ x("div", {
						className: "flex flex-wrap gap-1",
						children: K.tags.map((e) => /* @__PURE__ */ x("span", {
							className: "rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[11px] font-medium text-wx-fg-muted",
							children: e.label
						}, e.slug))
					}),
					K.excerpt && /* @__PURE__ */ x("p", {
						className: "text-base leading-relaxed text-wx-fg-muted",
						children: K.excerpt
					}),
					K.contentMarkdown && /* @__PURE__ */ x(l, {
						content: K.contentMarkdown,
						isHtml: K.bodyFormat === "html" || o(K.contentMarkdown),
						markdownMarginClass: "mt-3"
					}),
					K.sourceUrl && /* @__PURE__ */ S("a", {
						href: K.sourceUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-4 flex items-center justify-center gap-1.5 text-xs text-wx-primary underline underline-offset-2 transition-opacity hover:opacity-80",
						children: [/* @__PURE__ */ x(y, { size: 12 }), /* @__PURE__ */ x("span", { children: A("readOriginal") })]
					}),
					F && /* @__PURE__ */ x(w, {
						currentId: K.id,
						currentCategoryIds: K.categoryIds ?? [],
						currentTagIds: K.tagIds ?? [],
						previewPostsById: D ? void 0 : N.previewData?.newsPostsById,
						visitorRelatedRaw: W?.visitorNewsRelated,
						isDummy: D,
						onOpen: O ?? (() => {})
					}),
					K.id && /* @__PURE__ */ x(u, {
						surface: i.NEWS,
						itemId: K.id,
						reactionCounts: K.reactionCounts ?? null,
						viewerReaction: K.viewerReaction ?? null,
						groupItemIds: [K.id, ...(K.translations ?? []).map((e) => e.id)],
						isDummy: D,
						showCounts: I,
						className: "mt-6"
					}),
					/* @__PURE__ */ x(s, {
						currentLocale: D ? L : K.locale ?? M,
						locales: D ? [...a] : (K.translations ?? []).map((e) => e.locale),
						allowedLocales: D ? void 0 : P.supportedLocales,
						onSelect: D ? (e) => R(e) : (e) => {
							let t = (K.translations ?? []).find((t) => t.locale === e);
							t && O?.(t.id);
						},
						className: "mt-6"
					})
				]
			})]
		})
	});
}
function E() {
	return /* @__PURE__ */ x(n, {
		className: "flex-1",
		children: /* @__PURE__ */ S("div", {
			className: "flex flex-col",
			"aria-busy": "true",
			"aria-live": "polite",
			children: [/* @__PURE__ */ x("div", {
				className: "w-full animate-pulse bg-wx-bg-elevated",
				style: { aspectRatio: "16 / 9" }
			}), /* @__PURE__ */ S("div", {
				className: "px-5 pt-5 pb-12",
				children: [
					/* @__PURE__ */ S("div", {
						className: "animate-pulse space-y-2.5",
						children: [/* @__PURE__ */ x("div", { className: "h-5 w-3/4 rounded-md bg-wx-bg-elevated" }), /* @__PURE__ */ x("div", { className: "h-5 w-1/2 rounded-md bg-wx-bg-elevated" })]
					}),
					/* @__PURE__ */ x("div", {
						className: "mt-4 flex items-center gap-2 animate-pulse",
						children: /* @__PURE__ */ x("div", { className: "h-3 w-24 rounded-md bg-wx-bg-elevated" })
					}),
					/* @__PURE__ */ x("div", {
						className: "mt-6 space-y-2.5 animate-pulse",
						children: [
							"w-full",
							"w-11/12",
							"w-10/12",
							"w-full",
							"w-9/12",
							"w-7/12"
						].map((e, t) => /* @__PURE__ */ x("div", { className: f("h-3 rounded-md bg-wx-bg-elevated", e) }, t))
					})
				]
			})]
		})
	});
}
//#endregion
export { T as NewsArticleView };

//# sourceMappingURL=widget-react-6gPN3d4-2.js.map