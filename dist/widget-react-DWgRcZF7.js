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
import { F as e, M as t, b as n, c as r, ht as i, it as a, k as o, l as ee, rt as te, u as s, y as c } from "./widget-react-Dtx_fW3V.js";
import { i as l, n as u } from "./widget-react-krPPnv02.js";
import { i as d } from "./widget-react-CN_FIvMD.js";
import { o as f, p as ne, s as p, t as m } from "./widget-react-BZ-SHa2o.js";
import { t as re } from "./widget-react-SI7deQTE.js";
import { a as ie, c as ae, i as h, l as g, n as _, o as oe, r as v, s as y, t as b } from "./widget-react-vXfa9GKf.js";
import { useEffect as x, useMemo as S, useRef as C, useState as se } from "react";
import { jsx as w, jsxs as T } from "react/jsx-runtime";
//#region components/widget/help-article-view/helpers.ts
function ce(e) {
	let t = (e) => Array.isArray(e) ? e : [];
	return {
		id: String(e._id ?? ""),
		title: typeof e.title == "string" ? e.title : "",
		excerpt: typeof e.excerpt == "string" ? e.excerpt : "",
		content: typeof e.content == "string" ? e.content : "",
		contentFormat: e.contentFormat === y.HTML ? y.HTML : y.MARKDOWN,
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
function E({ slug: u, locale: E, isDummy: D, onHandoff: O, onOpenArticle: k, onOpenTranslation: A, onTitleResolved: j }) {
	let M = l("help"), N = l("demo"), P = t(), { config: F } = o(), I = F.messenger?.showRelatedHelpArticles ?? !0, L = F.messenger?.showReactionCounts ?? !0, R = re(), [z, B] = se(E), V = ie(z, N), H = S(() => {
		if (D) return null;
		let e = P.previewData?.helpArticles;
		return Array.isArray(e) ? e.find((e) => e && typeof e == "object" && e.slug === u) ?? null : null;
	}, [
		P.previewData,
		D,
		u
	]), U = !!H, { data: W, loading: ue } = p({
		variables: { args: {
			slug: u,
			locale: E
		} },
		skip: D || U
	}), G = te(), K = ee(G && !D && !U ? e.article(G, u, E) : null, W), [q] = f(), { trackLinkClick: J } = r(), Y = C(null), X = S(() => D ? i(V).find((e) => e.slug === u) : null, [
		D,
		u,
		V
	]), Z = D ? X ? {
		id: X.id,
		title: X.title,
		excerpt: X.excerpt,
		content: X.contentMarkdown,
		contentFormat: y.MARKDOWN,
		authors: X.authors,
		tags: X.tags,
		reactionCounts: null,
		locale: z,
		translations: []
	} : null : U && H ? {
		...ce(H),
		reactionCounts: H.reactionCounts ?? null,
		locale: E,
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
	} : null, { data: de } = ne({
		variables: {
			articleId: Z?.id ?? "",
			limit: 5,
			locale: E
		},
		skip: D || U || !Z?.id || !I
	}), fe = S(() => {
		if (!U || !Z?.id) return [];
		let e = (P.previewData?.helpArticles ?? []).filter((e) => !!e && typeof e == "object"), t = new Set((Z.tags ?? []).map((e) => typeof e == "object" && e && "slug" in e ? String(e.slug) : null).filter((e) => !!e)), n = (() => {
			let e = H;
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
		U,
		Z,
		H,
		P.previewData
	]), Q = U ? fe : de?.visitorHelpRelated ?? [], pe = D || U ? null : W?.visitorHelpArticle?.viewerReaction ?? null, me = !D && !U && W?.visitorHelpArticle ? [W.visitorHelpArticle._id, ...(W.visitorHelpArticle.translations ?? []).map((e) => e._id)] : Z?.id ? [Z.id] : [];
	x(() => {
		D || !Z?.id || !a() || q({ variables: { articleId: Z.id } }).catch(() => {});
	}, [
		Z?.id,
		D,
		q
	]), x(() => {
		D || U || !Z?.id || Y.current !== Z.id && (Y.current = Z.id, J({
			url: `/help/${u}`,
			targetType: "HELP_ARTICLE",
			targetRefId: Z.id
		}));
	}, [
		Z?.id,
		D,
		U,
		u,
		J
	]), oe(Z?.title, j);
	let he = () => O();
	if (!ue && !Z) return /* @__PURE__ */ w("div", {
		className: "flex flex-1 flex-col items-center justify-center px-6 py-12",
		children: /* @__PURE__ */ w(c, { children: /* @__PURE__ */ w(n, {
			className: "py-8 text-center",
			children: /* @__PURE__ */ w("p", {
				className: "text-sm font-semibold text-wx-fg",
				children: M("articleNotFound")
			})
		}) })
	});
	let ge = E.split("-")[0].toLowerCase(), $ = Z ? Z.locale.split("-")[0].toLowerCase() : null;
	return !D && !U && !F.contentLocaleFallback && $ !== null && $ !== ge ? /* @__PURE__ */ w("div", {
		className: "flex flex-1 flex-col items-center justify-center px-6 py-12",
		children: /* @__PURE__ */ w(c, { children: /* @__PURE__ */ w(n, {
			className: "py-8 text-center",
			children: /* @__PURE__ */ w("p", {
				className: "text-sm font-semibold text-wx-fg",
				children: M("articleNotTranslated")
			})
		}) })
	}) : Z ? /* @__PURE__ */ w(s, {
		className: "flex-1",
		children: /* @__PURE__ */ T("div", {
			className: "flex flex-col px-5 pt-5 pb-12",
			children: [
				/* @__PURE__ */ w("h2", {
					className: "text-xl leading-tight font-bold text-wx-fg",
					children: Z.title
				}),
				Z.authors.length > 0 && /* @__PURE__ */ T("p", {
					className: "mt-2 flex items-center gap-2 text-xs text-wx-fg-muted",
					children: [/* @__PURE__ */ w("span", {
						className: "flex -space-x-1.5",
						children: Z.authors.slice(0, 3).map((e) => /* @__PURE__ */ w("span", {
							className: "h-5 w-5 overflow-hidden rounded-full bg-wx-bg-elevated ring-1 ring-wx-bg",
							"aria-hidden": "true",
							children: e.photo?.url ? /* @__PURE__ */ w("img", {
								src: e.photo.url,
								alt: "",
								className: "h-full w-full object-cover"
							}) : /* @__PURE__ */ w("span", {
								className: "flex h-full w-full items-center justify-center text-[10px] font-semibold uppercase text-wx-fg-muted",
								children: (e.name ?? "?").charAt(0)
							})
						}, e._id))
					}), /* @__PURE__ */ w("span", { children: M("writtenBy", { names: Z.authors.map((e) => e.name ?? "").filter(Boolean).join(", ") }) })]
				}),
				Z.tags.length > 0 && /* @__PURE__ */ w("div", {
					className: "mt-2 flex flex-wrap gap-1",
					children: Z.tags.map((e) => /* @__PURE__ */ w("span", {
						className: "rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[11px] font-medium text-wx-fg-muted",
						children: e.label
					}, e._id))
				}),
				Z.excerpt && /* @__PURE__ */ w("p", {
					className: "mt-2 mb-5 text-sm text-wx-fg-muted",
					children: Z.excerpt
				}),
				/* @__PURE__ */ w(v, {
					content: Z.content,
					isHtml: Z.contentFormat === y.HTML || g(Z.content),
					markdownMarginClass: "mt-3"
				}),
				/* @__PURE__ */ T(m, {
					type: "button",
					variant: "solid",
					size: "lg",
					className: "mt-6 w-full shrink-0 min-h-12",
					onClick: he,
					...R.parentHandlers,
					children: [/* @__PURE__ */ w(d, {
						ref: R.iconRef,
						size: 16
					}), /* @__PURE__ */ w("span", { children: M("unresolvedCta") })]
				}),
				Z.id && /* @__PURE__ */ w(b, {
					surface: ae.HELP,
					itemId: Z.id,
					reactionCounts: Z.reactionCounts,
					viewerReaction: pe,
					groupItemIds: me,
					isDummy: D,
					showCounts: L,
					className: "mt-4"
				}),
				/* @__PURE__ */ w(_, {
					currentLocale: D ? z : Z.locale,
					locales: D ? [...h] : Z.translations.map((e) => e.locale),
					allowedLocales: D ? void 0 : F.supportedLocales,
					onSelect: D ? (e) => B(e) : (e) => {
						let t = Z.translations.find((t) => t.locale === e);
						t && A?.(t.slug, t.locale);
					},
					className: "mt-6"
				}),
				I && Q.length > 0 && /* @__PURE__ */ T("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ w("p", {
						className: "mb-2 text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
						children: M("relatedTitle")
					}), /* @__PURE__ */ w("ul", {
						className: "flex flex-col gap-1.5",
						children: Q.map((e) => /* @__PURE__ */ w("li", { children: /* @__PURE__ */ T("button", {
							type: "button",
							onClick: () => k?.(e.slug),
							className: "flex w-full flex-col items-start gap-0.5 rounded-wx-lg bg-wx-bg-elevated px-3 py-2 text-left transition-colors hover:bg-wx-bg-elevated/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
							children: [/* @__PURE__ */ w("span", {
								className: "block truncate text-sm font-medium text-wx-fg",
								children: e.title
							}), e.excerpt && /* @__PURE__ */ w("span", {
								className: "line-clamp-1 block text-xs text-wx-fg-muted",
								children: e.excerpt
							})]
						}) }, e._id))
					})]
				})
			]
		})
	}) : /* @__PURE__ */ w(le, {});
}
function le() {
	return /* @__PURE__ */ w(s, {
		className: "flex-1",
		children: /* @__PURE__ */ T("div", {
			className: "flex flex-col px-5 pt-5 pb-12",
			"aria-busy": "true",
			"aria-live": "polite",
			children: [
				/* @__PURE__ */ T("div", {
					className: "animate-pulse space-y-2.5",
					children: [/* @__PURE__ */ w("div", { className: "h-5 w-3/4 rounded-md bg-wx-bg-elevated" }), /* @__PURE__ */ w("div", { className: "h-5 w-1/2 rounded-md bg-wx-bg-elevated" })]
				}),
				/* @__PURE__ */ T("div", {
					className: "mt-4 flex items-center gap-2 animate-pulse",
					children: [/* @__PURE__ */ w("div", { className: "h-5 w-5 rounded-full bg-wx-bg-elevated" }), /* @__PURE__ */ w("div", { className: "h-3 w-32 rounded-md bg-wx-bg-elevated" })]
				}),
				/* @__PURE__ */ w("div", {
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
					].map((e, t) => /* @__PURE__ */ w("div", { className: u("h-3 rounded-md bg-wx-bg-elevated", e) }, t))
				})
			]
		})
	});
}
//#endregion
export { E as HelpArticleView };

//# sourceMappingURL=widget-react-DWgRcZF7.js.map