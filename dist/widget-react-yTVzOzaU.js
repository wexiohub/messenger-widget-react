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
import { N as e, c as t, k as n, l as r } from "./widget-react-CK8xTxwO.js";
import { i, n as a, o } from "./widget-react-krPPnv02.js";
import { d as s, h as c, m as l, n as u, r as d } from "./widget-react-DV3UnggB.js";
import { t as f } from "./widget-react-CIy9jXND.js";
import { a as p, c as ee, i as m, l as h, n as g, o as _, r as v, t as y } from "./widget-react-DDEFbIbU.js";
import { useEffect as b, useRef as x, useState as S } from "react";
import { jsx as C, jsxs as w } from "react/jsx-runtime";
//#region components/widget/news-article-view/helpers.ts
function T(e) {
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
function E({ currentId: e, currentCategoryIds: t, currentTagIds: n, previewPostsById: r, visitorRelatedRaw: a, isDummy: o, onOpen: s }) {
	let c = i("news"), l = (() => {
		if (o) return [];
		if (Array.isArray(a) && a.length > 0) return a.filter((e) => !!e && typeof e == "object").map((e) => {
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
	return l.length === 0 ? null : /* @__PURE__ */ w("section", {
		className: "mt-6",
		children: [/* @__PURE__ */ C("p", {
			className: "mb-2 text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
			children: c("relatedTitle")
		}), /* @__PURE__ */ C("ul", {
			className: "flex flex-col gap-2",
			children: l.map((e) => /* @__PURE__ */ C("li", { children: /* @__PURE__ */ w("button", {
				type: "button",
				onClick: () => s(e.id),
				className: "flex w-full items-center gap-3 rounded-wx-lg bg-wx-bg-elevated px-3 py-2 text-left transition-colors hover:bg-wx-bg-elevated/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
				children: [/* @__PURE__ */ C("span", {
					className: "aspect-square w-12 shrink-0 rounded-wx-sm bg-cover bg-center",
					style: e.coverImageUrl ? { backgroundImage: `url(${e.coverImageUrl})` } : { background: "linear-gradient(135deg, #1e1f21, #121314)" },
					"aria-hidden": "true"
				}), /* @__PURE__ */ C("span", {
					className: "min-w-0 flex-1 truncate text-sm font-medium text-wx-fg",
					children: e.title
				})]
			}) }, e.id))
		})]
	});
}
//#endregion
//#region components/widget/news-article-view/index.tsx
function D({ id: D, isDummy: k, onOpenRelated: A, onTitleResolved: j }) {
	let M = i("news"), N = i("demo"), P = o(), F = e(), { config: I } = n(), L = I.messenger?.showRelatedNews ?? !0, R = I.messenger?.showReactionCounts ?? !0, { trackLinkClick: z } = t(), B = x(null), V = (e) => {
		A?.(e);
	}, [H, U] = S(P), W = p(H, N), G = k ? null : F.previewData?.newsPostsById?.[D], K = !!G, { data: q, loading: J } = l({
		variables: { args: {
			id: D,
			locale: P
		} },
		skip: k || K || !D
	}), { data: Y } = c({
		variables: {
			postId: D,
			limit: 5,
			locale: P
		},
		skip: k || K || !D || !L
	}), X = k ? s(W).find((e) => e.id === D) ?? null : null, Z = X ? {
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
	} : T(K ? G : q?.visitorNewsPost);
	if (_(Z?.title, j), b(() => {
		k || K || !Z?.id || B.current !== Z.id && (B.current = Z.id, z({
			url: `/news/${Z.id}`,
			targetType: "NEWS_POST",
			targetRefId: Z.id
		}));
	}, [
		Z?.id,
		k,
		K,
		z
	]), !Z) return J ? /* @__PURE__ */ C(O, {}) : /* @__PURE__ */ C("div", {
		className: "flex flex-1 items-center justify-center px-6 py-12 text-center",
		children: /* @__PURE__ */ C("p", {
			className: "text-sm text-wx-fg-muted",
			children: M("articleNotFound")
		})
	});
	let te = P.split("-")[0].toLowerCase(), Q = Z.locale ? Z.locale.split("-")[0].toLowerCase() : null;
	if (!k && !K && !I.contentLocaleFallback && Q !== null && Q !== te) return /* @__PURE__ */ C("div", {
		className: "flex flex-1 items-center justify-center px-6 py-12 text-center",
		children: /* @__PURE__ */ C("p", {
			className: "text-sm text-wx-fg-muted",
			children: M("articleNotTranslated")
		})
	});
	let $ = Z.coverGradient ?? ["#1e1f21", "#121314"];
	return /* @__PURE__ */ C(r, {
		className: "flex-1",
		children: /* @__PURE__ */ w("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ C("div", {
				className: a("relative w-full"),
				style: {
					aspectRatio: "16 / 9",
					background: Z.coverImageUrl ? `url(${Z.coverImageUrl}) center/cover` : `linear-gradient(135deg, ${$[0]}, ${$[1]})`
				},
				"aria-hidden": "true"
			}), /* @__PURE__ */ w("div", {
				className: "flex flex-col gap-3 px-5 pt-5 pb-12",
				children: [
					Z.category && /* @__PURE__ */ C("p", {
						className: "text-[11px] font-semibold tracking-[0.14em] text-wx-primary uppercase",
						children: Z.category.label
					}),
					/* @__PURE__ */ w("p", {
						className: "flex items-center gap-2 text-xs text-wx-fg-subtle",
						children: [/* @__PURE__ */ C("span", { children: new Date(Z.publishedAt).toLocaleDateString(P, {
							month: "long",
							day: "numeric",
							year: "numeric"
						}) }), d(Z) && Z.upstreamUpdatedAt && /* @__PURE__ */ C("span", {
							className: "rounded-full bg-wx-bg-elevated px-1.5 py-0.5 text-[10px] font-medium text-wx-fg-muted",
							title: new Date(Z.upstreamUpdatedAt).toLocaleString(P),
							children: M("editedAt", { when: u(Z.upstreamUpdatedAt) })
						})]
					}),
					/* @__PURE__ */ C("h2", {
						className: "text-2xl leading-tight font-bold text-wx-fg",
						children: Z.title
					}),
					Z.authors && Z.authors.length > 0 && /* @__PURE__ */ w("p", {
						className: "flex items-center gap-2 text-xs text-wx-fg-muted",
						children: [/* @__PURE__ */ C("span", {
							className: "flex -space-x-1.5",
							children: Z.authors.slice(0, 3).map((e) => /* @__PURE__ */ C("span", {
								className: "h-5 w-5 overflow-hidden rounded-full bg-wx-bg-elevated ring-1 ring-wx-bg",
								"aria-hidden": "true",
								children: /* @__PURE__ */ C("img", {
									src: e.photo.url,
									alt: "",
									className: "h-full w-full object-cover"
								})
							}, e._id))
						}), /* @__PURE__ */ C("span", { children: M("writtenBy", { names: Z.authors.map((e) => e.name).join(", ") }) })]
					}),
					Z.tags && Z.tags.length > 0 && /* @__PURE__ */ C("div", {
						className: "flex flex-wrap gap-1",
						children: Z.tags.map((e) => /* @__PURE__ */ C("span", {
							className: "rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[11px] font-medium text-wx-fg-muted",
							children: e.label
						}, e.slug))
					}),
					Z.excerpt && /* @__PURE__ */ C("p", {
						className: "text-base leading-relaxed text-wx-fg-muted",
						children: Z.excerpt
					}),
					Z.contentMarkdown && /* @__PURE__ */ C(v, {
						content: Z.contentMarkdown,
						isHtml: Z.bodyFormat === "html" || h(Z.contentMarkdown),
						markdownMarginClass: "mt-3"
					}),
					Z.sourceUrl && /* @__PURE__ */ w("a", {
						href: Z.sourceUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-4 flex items-center justify-center gap-1.5 text-xs text-wx-primary underline underline-offset-2 transition-opacity hover:opacity-80",
						children: [/* @__PURE__ */ C(f, { size: 12 }), /* @__PURE__ */ C("span", { children: M("readOriginal") })]
					}),
					L && /* @__PURE__ */ C(E, {
						currentId: Z.id,
						currentCategoryIds: Z.categoryIds ?? [],
						currentTagIds: Z.tagIds ?? [],
						previewPostsById: k ? void 0 : F.previewData?.newsPostsById,
						visitorRelatedRaw: Y?.visitorNewsRelated,
						isDummy: k,
						onOpen: V
					}),
					Z.id && /* @__PURE__ */ C(y, {
						surface: ee.NEWS,
						itemId: Z.id,
						reactionCounts: Z.reactionCounts ?? null,
						viewerReaction: Z.viewerReaction ?? null,
						groupItemIds: [Z.id, ...(Z.translations ?? []).map((e) => e.id)],
						isDummy: k,
						showCounts: R,
						className: "mt-6"
					}),
					/* @__PURE__ */ C(g, {
						currentLocale: k ? H : Z.locale ?? P,
						locales: k ? [...m] : (Z.translations ?? []).map((e) => e.locale),
						allowedLocales: k ? void 0 : I.supportedLocales,
						onSelect: k ? (e) => U(e) : (e) => {
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
function O() {
	return /* @__PURE__ */ C(r, {
		className: "flex-1",
		children: /* @__PURE__ */ w("div", {
			className: "flex flex-col",
			"aria-busy": "true",
			"aria-live": "polite",
			children: [/* @__PURE__ */ C("div", {
				className: "w-full animate-pulse bg-wx-bg-elevated",
				style: { aspectRatio: "16 / 9" }
			}), /* @__PURE__ */ w("div", {
				className: "px-5 pt-5 pb-12",
				children: [
					/* @__PURE__ */ w("div", {
						className: "animate-pulse space-y-2.5",
						children: [/* @__PURE__ */ C("div", { className: "h-5 w-3/4 rounded-md bg-wx-bg-elevated" }), /* @__PURE__ */ C("div", { className: "h-5 w-1/2 rounded-md bg-wx-bg-elevated" })]
					}),
					/* @__PURE__ */ C("div", {
						className: "mt-4 flex items-center gap-2 animate-pulse",
						children: /* @__PURE__ */ C("div", { className: "h-3 w-24 rounded-md bg-wx-bg-elevated" })
					}),
					/* @__PURE__ */ C("div", {
						className: "mt-6 space-y-2.5 animate-pulse",
						children: [
							"w-full",
							"w-11/12",
							"w-10/12",
							"w-full",
							"w-9/12",
							"w-7/12"
						].map((e, t) => /* @__PURE__ */ C("div", { className: a("h-3 rounded-md bg-wx-bg-elevated", e) }, t))
					})
				]
			})]
		})
	});
}
//#endregion
export { D as NewsArticleView };

//# sourceMappingURL=widget-react-yTVzOzaU.js.map