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
import { F as e, M as t, c as n, dt as r, k as i, l as a, rt as o, u as s } from "./widget-react-Dtx_fW3V.js";
import { i as c, n as l, o as u } from "./widget-react-krPPnv02.js";
import { h as d, m as f, n as p, r as m } from "./widget-react-CHSNuztJ.js";
import { t as h } from "./widget-react-B7es3n1-.js";
import { a as g, c as _, i as v, l as y, n as ee, o as b, r as x, t as S } from "./widget-react-vXfa9GKf.js";
import { useEffect as C, useRef as w, useState as T } from "react";
import { jsx as E, jsxs as D } from "react/jsx-runtime";
//#region components/widget/news-article-view/helpers.ts
function O(e) {
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
function k({ currentId: e, currentCategoryIds: t, currentTagIds: n, previewPostsById: r, visitorRelatedRaw: i, isDummy: a, onOpen: o }) {
	let s = c("news"), l = (() => {
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
	return l.length === 0 ? null : /* @__PURE__ */ D("section", {
		className: "mt-6",
		children: [/* @__PURE__ */ E("p", {
			className: "mb-2 text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
			children: s("relatedTitle")
		}), /* @__PURE__ */ E("ul", {
			className: "flex flex-col gap-2",
			children: l.map((e) => /* @__PURE__ */ E("li", { children: /* @__PURE__ */ D("button", {
				type: "button",
				onClick: () => o(e.id),
				className: "flex w-full items-center gap-3 rounded-wx-lg bg-wx-bg-elevated px-3 py-2 text-left transition-colors hover:bg-wx-bg-elevated/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
				children: [/* @__PURE__ */ E("span", {
					className: "aspect-square w-12 shrink-0 rounded-wx-sm bg-cover bg-center",
					style: e.coverImageUrl ? { backgroundImage: `url(${e.coverImageUrl})` } : { background: "linear-gradient(135deg, #1e1f21, #121314)" },
					"aria-hidden": "true"
				}), /* @__PURE__ */ E("span", {
					className: "min-w-0 flex-1 truncate text-sm font-medium text-wx-fg",
					children: e.title
				})]
			}) }, e.id))
		})]
	});
}
//#endregion
//#region components/widget/news-article-view/index.tsx
function A({ id: A, isDummy: j, onOpenRelated: ne, onTitleResolved: re }) {
	let M = c("news"), N = c("demo"), P = u(), F = t(), { config: I } = i(), L = I.messenger?.showRelatedNews ?? !0, R = I.messenger?.showReactionCounts ?? !0, { trackLinkClick: z } = n(), B = w(null), V = (e) => {
		ne?.(e);
	}, [H, U] = T(P), W = g(H, N), G = j ? null : F.previewData?.newsPostsById?.[A], K = !!G, { data: q, loading: J } = f({
		variables: { args: {
			id: A,
			locale: P
		} },
		skip: j || K || !A
	}), Y = o(), ie = a(Y && !j && !K && A ? e.newsPost(Y, A, P) : null, q), { data: ae } = d({
		variables: {
			postId: A,
			limit: 5,
			locale: P
		},
		skip: j || K || !A || !L
	}), X = j ? r(W).find((e) => e.id === A) ?? null : null, Z = X ? {
		id: X.id,
		title: X.title,
		excerpt: X.excerpt,
		contentMarkdown: X.contentMarkdown,
		bodyFormat: "markdown",
		coverImageUrl: X.coverImageUrl,
		coverGradient: X.coverGradient,
		publishedAt: X.publishedAt,
		upstreamUpdatedAt: X.upstreamUpdatedAt,
		tags: X.tags,
		authors: X.authors,
		category: X.category,
		locale: H
	} : O(K ? G : ie?.visitorNewsPost);
	if (b(Z?.title, re), C(() => {
		j || K || !Z?.id || B.current !== Z.id && (B.current = Z.id, z({
			url: `/news/${Z.id}`,
			targetType: "NEWS_POST",
			targetRefId: Z.id
		}));
	}, [
		Z?.id,
		j,
		K,
		z
	]), !Z) return J ? /* @__PURE__ */ E(te, {}) : /* @__PURE__ */ E("div", {
		className: "flex flex-1 items-center justify-center px-6 py-12 text-center",
		children: /* @__PURE__ */ E("p", {
			className: "text-sm text-wx-fg-muted",
			children: M("articleNotFound")
		})
	});
	let oe = P.split("-")[0].toLowerCase(), Q = Z.locale ? Z.locale.split("-")[0].toLowerCase() : null;
	if (!j && !K && !I.contentLocaleFallback && Q !== null && Q !== oe) return /* @__PURE__ */ E("div", {
		className: "flex flex-1 items-center justify-center px-6 py-12 text-center",
		children: /* @__PURE__ */ E("p", {
			className: "text-sm text-wx-fg-muted",
			children: M("articleNotTranslated")
		})
	});
	let $ = Z.coverGradient ?? ["#1e1f21", "#121314"];
	return /* @__PURE__ */ E(s, {
		className: "flex-1",
		children: /* @__PURE__ */ D("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ E("div", {
				className: l("relative w-full"),
				style: {
					aspectRatio: "16 / 9",
					background: Z.coverImageUrl ? `url(${Z.coverImageUrl}) center/cover` : `linear-gradient(135deg, ${$[0]}, ${$[1]})`
				},
				"aria-hidden": "true"
			}), /* @__PURE__ */ D("div", {
				className: "flex flex-col gap-3 px-5 pt-5 pb-12",
				children: [
					Z.category && /* @__PURE__ */ E("p", {
						className: "text-[11px] font-semibold tracking-[0.14em] text-wx-primary uppercase",
						children: Z.category.label
					}),
					/* @__PURE__ */ D("p", {
						className: "flex items-center gap-2 text-xs text-wx-fg-subtle",
						children: [/* @__PURE__ */ E("span", { children: new Date(Z.publishedAt).toLocaleDateString(P, {
							month: "long",
							day: "numeric",
							year: "numeric"
						}) }), m(Z) && Z.upstreamUpdatedAt && /* @__PURE__ */ E("span", {
							className: "rounded-full bg-wx-bg-elevated px-1.5 py-0.5 text-[10px] font-medium text-wx-fg-muted",
							title: new Date(Z.upstreamUpdatedAt).toLocaleString(P),
							children: M("editedAt", { when: p(Z.upstreamUpdatedAt) })
						})]
					}),
					/* @__PURE__ */ E("h2", {
						className: "text-2xl leading-tight font-bold text-wx-fg",
						children: Z.title
					}),
					Z.authors && Z.authors.length > 0 && /* @__PURE__ */ D("p", {
						className: "flex items-center gap-2 text-xs text-wx-fg-muted",
						children: [/* @__PURE__ */ E("span", {
							className: "flex -space-x-1.5",
							children: Z.authors.slice(0, 3).map((e) => /* @__PURE__ */ E("span", {
								className: "h-5 w-5 overflow-hidden rounded-full bg-wx-bg-elevated ring-1 ring-wx-bg",
								"aria-hidden": "true",
								children: /* @__PURE__ */ E("img", {
									src: e.photo.url,
									alt: "",
									className: "h-full w-full object-cover"
								})
							}, e._id))
						}), /* @__PURE__ */ E("span", { children: M("writtenBy", { names: Z.authors.map((e) => e.name).join(", ") }) })]
					}),
					Z.tags && Z.tags.length > 0 && /* @__PURE__ */ E("div", {
						className: "flex flex-wrap gap-1",
						children: Z.tags.map((e) => /* @__PURE__ */ E("span", {
							className: "rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[11px] font-medium text-wx-fg-muted",
							children: e.label
						}, e.slug))
					}),
					Z.excerpt && /* @__PURE__ */ E("p", {
						className: "text-base leading-relaxed text-wx-fg-muted",
						children: Z.excerpt
					}),
					Z.contentMarkdown && /* @__PURE__ */ E(x, {
						content: Z.contentMarkdown,
						isHtml: Z.bodyFormat === "html" || y(Z.contentMarkdown),
						markdownMarginClass: "mt-3"
					}),
					Z.sourceUrl && /* @__PURE__ */ D("a", {
						href: Z.sourceUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-4 flex items-center justify-center gap-1.5 text-xs text-wx-primary underline underline-offset-2 transition-opacity hover:opacity-80",
						children: [/* @__PURE__ */ E(h, { size: 12 }), /* @__PURE__ */ E("span", { children: M("readOriginal") })]
					}),
					L && /* @__PURE__ */ E(k, {
						currentId: Z.id,
						currentCategoryIds: Z.categoryIds ?? [],
						currentTagIds: Z.tagIds ?? [],
						previewPostsById: j ? void 0 : F.previewData?.newsPostsById,
						visitorRelatedRaw: ae?.visitorNewsRelated,
						isDummy: j,
						onOpen: V
					}),
					Z.id && /* @__PURE__ */ E(S, {
						surface: _.NEWS,
						itemId: Z.id,
						reactionCounts: Z.reactionCounts ?? null,
						viewerReaction: Z.viewerReaction ?? null,
						groupItemIds: [Z.id, ...(Z.translations ?? []).map((e) => e.id)],
						isDummy: j,
						showCounts: R,
						className: "mt-6"
					}),
					/* @__PURE__ */ E(ee, {
						currentLocale: j ? H : Z.locale ?? P,
						locales: j ? [...v] : (Z.translations ?? []).map((e) => e.locale),
						allowedLocales: j ? void 0 : I.supportedLocales,
						onSelect: j ? (e) => U(e) : (e) => {
							let t = (Z.translations ?? []).find((t) => t.locale === e);
							t && V(t.id);
						},
						className: "mt-6"
					})
				]
			})]
		})
	});
}
function te() {
	return /* @__PURE__ */ E(s, {
		className: "flex-1",
		children: /* @__PURE__ */ D("div", {
			className: "flex flex-col",
			"aria-busy": "true",
			"aria-live": "polite",
			children: [/* @__PURE__ */ E("div", {
				className: "w-full animate-pulse bg-wx-bg-elevated",
				style: { aspectRatio: "16 / 9" }
			}), /* @__PURE__ */ D("div", {
				className: "px-5 pt-5 pb-12",
				children: [
					/* @__PURE__ */ D("div", {
						className: "animate-pulse space-y-2.5",
						children: [/* @__PURE__ */ E("div", { className: "h-5 w-3/4 rounded-md bg-wx-bg-elevated" }), /* @__PURE__ */ E("div", { className: "h-5 w-1/2 rounded-md bg-wx-bg-elevated" })]
					}),
					/* @__PURE__ */ E("div", {
						className: "mt-4 flex items-center gap-2 animate-pulse",
						children: /* @__PURE__ */ E("div", { className: "h-3 w-24 rounded-md bg-wx-bg-elevated" })
					}),
					/* @__PURE__ */ E("div", {
						className: "mt-6 space-y-2.5 animate-pulse",
						children: [
							"w-full",
							"w-11/12",
							"w-10/12",
							"w-full",
							"w-9/12",
							"w-7/12"
						].map((e, t) => /* @__PURE__ */ E("div", { className: l("h-3 rounded-md bg-wx-bg-elevated", e) }, t))
					})
				]
			})]
		})
	});
}
//#endregion
export { A as NewsArticleView };

//# sourceMappingURL=widget-react-l5oryxYk.js.map