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
import { F as e, I as t, M as n, N as r, c as i, ht as a, k as o, l as s, st as c, u as l, z as u } from "./widget-react-C6lzldez.js";
import { i as d, n as f, o as p } from "./widget-react-krPPnv02.js";
import { h as m, m as h, n as g, r as ee } from "./widget-react-MXOCL3Mg.js";
import { t as _ } from "./widget-react-B7es3n1-.js";
import { i as v, n as y, o as b, r as te, s as ne, t as re } from "./widget-react-BfO-uP4o.js";
import { useEffect as x, useRef as S, useState as C } from "react";
import { jsx as w, jsxs as T } from "react/jsx-runtime";
//#region components/widget/news-article-view/helpers.ts
function E(e) {
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
function D({ currentId: e, currentCategoryIds: t, currentTagIds: n, previewPostsById: r, visitorRelatedRaw: i, isDummy: a, onOpen: o }) {
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
	return c.length === 0 ? null : /* @__PURE__ */ T("section", {
		className: "mt-6",
		children: [/* @__PURE__ */ w("p", {
			className: "mb-2 text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
			children: s("relatedTitle")
		}), /* @__PURE__ */ w("ul", {
			className: "flex flex-col gap-2",
			children: c.map((e) => /* @__PURE__ */ w("li", { children: /* @__PURE__ */ T("button", {
				type: "button",
				onClick: () => o(e.id),
				className: "flex w-full items-center gap-3 rounded-wx-lg bg-wx-bg-elevated px-3 py-2 text-left transition-colors hover:bg-wx-bg-elevated/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
				children: [/* @__PURE__ */ w("span", {
					className: "aspect-square w-12 shrink-0 rounded-wx-sm bg-cover bg-center",
					style: e.coverImageUrl ? { backgroundImage: `url(${e.coverImageUrl})` } : { background: "linear-gradient(135deg, #1e1f21, #121314)" },
					"aria-hidden": "true"
				}), /* @__PURE__ */ w("span", {
					className: "min-w-0 flex-1 truncate text-sm font-medium text-wx-fg",
					children: e.title
				})]
			}) }, e.id))
		})]
	});
}
//#endregion
//#region components/widget/news-article-view/index.tsx
function O({ id: O, isDummy: A, onOpenRelated: ie, onTitleResolved: j }) {
	let M = d("news"), N = e(), P = p(), F = n(), { config: I } = o(), L = I.messenger?.showRelatedNews ?? !0, R = I.messenger?.showReactionCounts ?? !0, { trackLinkClick: z } = i(), B = S(null), V = (e) => {
		ie?.(e);
	}, [H, U] = C(P), W = t(H, N), G = A ? null : F.previewData?.newsPostsById?.[O], K = !!G, { data: q, loading: J } = h({
		variables: { args: {
			id: O,
			locale: P
		} },
		skip: A || K || !O
	}), Y = c(), ae = s(Y && !A && !K && O ? u.newsPost(Y, O, P) : null, q), { data: oe } = m({
		variables: {
			postId: O,
			limit: 5,
			locale: P
		},
		skip: A || K || !O || !L
	}), X = A ? a(W).find((e) => e.id === O) ?? null : null, Z = X ? {
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
	} : E(K ? G : ae?.visitorNewsPost);
	if (v(Z?.title, j), x(() => {
		A || K || !Z?.id || B.current !== Z.id && (B.current = Z.id, z({
			url: `/news/${Z.id}`,
			targetType: "NEWS_POST",
			targetRefId: Z.id
		}));
	}, [
		Z?.id,
		A,
		K,
		z
	]), !Z) return J ? /* @__PURE__ */ w(k, {}) : /* @__PURE__ */ w("div", {
		className: "flex flex-1 items-center justify-center px-6 py-12 text-center",
		children: /* @__PURE__ */ w("p", {
			className: "text-sm text-wx-fg-muted",
			children: M("articleNotFound")
		})
	});
	let se = P.split("-")[0].toLowerCase(), Q = Z.locale ? Z.locale.split("-")[0].toLowerCase() : null;
	if (!A && !K && !I.contentLocaleFallback && Q !== null && Q !== se) return /* @__PURE__ */ w("div", {
		className: "flex flex-1 items-center justify-center px-6 py-12 text-center",
		children: /* @__PURE__ */ w("p", {
			className: "text-sm text-wx-fg-muted",
			children: M("articleNotTranslated")
		})
	});
	let $ = Z.coverGradient ?? ["#1e1f21", "#121314"];
	return /* @__PURE__ */ w(l, {
		className: "flex-1",
		children: /* @__PURE__ */ T("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ w("div", {
				className: f("relative w-full"),
				style: {
					aspectRatio: "16 / 9",
					background: Z.coverImageUrl ? `url(${Z.coverImageUrl}) center/cover` : `linear-gradient(135deg, ${$[0]}, ${$[1]})`
				},
				"aria-hidden": "true"
			}), /* @__PURE__ */ T("div", {
				className: "flex flex-col gap-3 px-5 pt-5 pb-12",
				children: [
					Z.category && /* @__PURE__ */ w("p", {
						className: "text-[11px] font-semibold tracking-[0.14em] text-wx-primary uppercase",
						children: Z.category.label
					}),
					/* @__PURE__ */ T("p", {
						className: "flex items-center gap-2 text-xs text-wx-fg-subtle",
						children: [/* @__PURE__ */ w("span", { children: new Date(Z.publishedAt).toLocaleDateString(P, {
							month: "long",
							day: "numeric",
							year: "numeric"
						}) }), ee(Z) && Z.upstreamUpdatedAt && /* @__PURE__ */ w("span", {
							className: "rounded-full bg-wx-bg-elevated px-1.5 py-0.5 text-[10px] font-medium text-wx-fg-muted",
							title: new Date(Z.upstreamUpdatedAt).toLocaleString(P),
							children: M("editedAt", { when: g(Z.upstreamUpdatedAt) })
						})]
					}),
					/* @__PURE__ */ w("h2", {
						className: "text-2xl leading-tight font-bold text-wx-fg",
						children: Z.title
					}),
					Z.authors && Z.authors.length > 0 && /* @__PURE__ */ T("p", {
						className: "flex items-center gap-2 text-xs text-wx-fg-muted",
						children: [/* @__PURE__ */ w("span", {
							className: "flex -space-x-1.5",
							children: Z.authors.slice(0, 3).map((e) => /* @__PURE__ */ w("span", {
								className: "h-5 w-5 overflow-hidden rounded-full bg-wx-bg-elevated ring-1 ring-wx-bg",
								"aria-hidden": "true",
								children: /* @__PURE__ */ w("img", {
									src: e.photo.url,
									alt: "",
									className: "h-full w-full object-cover"
								})
							}, e._id))
						}), /* @__PURE__ */ w("span", { children: M("writtenBy", { names: Z.authors.map((e) => e.name).join(", ") }) })]
					}),
					Z.tags && Z.tags.length > 0 && /* @__PURE__ */ w("div", {
						className: "flex flex-wrap gap-1",
						children: Z.tags.map((e) => /* @__PURE__ */ w("span", {
							className: "rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[11px] font-medium text-wx-fg-muted",
							children: e.label
						}, e.slug))
					}),
					Z.excerpt && /* @__PURE__ */ w("p", {
						className: "text-base leading-relaxed text-wx-fg-muted",
						children: Z.excerpt
					}),
					Z.contentMarkdown && /* @__PURE__ */ w(te, {
						content: Z.contentMarkdown,
						isHtml: Z.bodyFormat === "html" || ne(Z.contentMarkdown),
						markdownMarginClass: "mt-3"
					}),
					Z.sourceUrl && /* @__PURE__ */ T("a", {
						href: Z.sourceUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-4 flex items-center justify-center gap-1.5 text-xs text-wx-primary underline underline-offset-2 transition-opacity hover:opacity-80",
						children: [/* @__PURE__ */ w(_, { size: 12 }), /* @__PURE__ */ w("span", { children: M("readOriginal") })]
					}),
					L && /* @__PURE__ */ w(D, {
						currentId: Z.id,
						currentCategoryIds: Z.categoryIds ?? [],
						currentTagIds: Z.tagIds ?? [],
						previewPostsById: A ? void 0 : F.previewData?.newsPostsById,
						visitorRelatedRaw: oe?.visitorNewsRelated,
						isDummy: A,
						onOpen: V
					}),
					Z.id && /* @__PURE__ */ w(re, {
						surface: b.NEWS,
						itemId: Z.id,
						reactionCounts: Z.reactionCounts ?? null,
						viewerReaction: Z.viewerReaction ?? null,
						groupItemIds: [Z.id, ...(Z.translations ?? []).map((e) => e.id)],
						isDummy: A,
						showCounts: R,
						className: "mt-6"
					}),
					/* @__PURE__ */ w(y, {
						currentLocale: A ? H : Z.locale ?? P,
						locales: A ? [...r] : (Z.translations ?? []).map((e) => e.locale),
						allowedLocales: A ? void 0 : I.supportedLocales,
						onSelect: A ? (e) => U(e) : (e) => {
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
function k() {
	return /* @__PURE__ */ w(l, {
		className: "flex-1",
		children: /* @__PURE__ */ T("div", {
			className: "flex flex-col",
			"aria-busy": "true",
			"aria-live": "polite",
			children: [/* @__PURE__ */ w("div", {
				className: "w-full animate-pulse bg-wx-bg-elevated",
				style: { aspectRatio: "16 / 9" }
			}), /* @__PURE__ */ T("div", {
				className: "px-5 pt-5 pb-12",
				children: [
					/* @__PURE__ */ T("div", {
						className: "animate-pulse space-y-2.5",
						children: [/* @__PURE__ */ w("div", { className: "h-5 w-3/4 rounded-md bg-wx-bg-elevated" }), /* @__PURE__ */ w("div", { className: "h-5 w-1/2 rounded-md bg-wx-bg-elevated" })]
					}),
					/* @__PURE__ */ w("div", {
						className: "mt-4 flex items-center gap-2 animate-pulse",
						children: /* @__PURE__ */ w("div", { className: "h-3 w-24 rounded-md bg-wx-bg-elevated" })
					}),
					/* @__PURE__ */ w("div", {
						className: "mt-6 space-y-2.5 animate-pulse",
						children: [
							"w-full",
							"w-11/12",
							"w-10/12",
							"w-full",
							"w-9/12",
							"w-7/12"
						].map((e, t) => /* @__PURE__ */ w("div", { className: f("h-3 rounded-md bg-wx-bg-elevated", e) }, t))
					})
				]
			})]
		})
	});
}
//#endregion
export { O as NewsArticleView };

//# sourceMappingURL=widget-react-Bop75Z1t.js.map