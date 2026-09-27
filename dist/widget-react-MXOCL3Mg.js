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
import { Et as t, F as n, M as r, S as i, Tt as a, ht as o, l as s, st as c, u as l, x as u, z as d } from "./widget-react-C6lzldez.js";
import { i as f, n as p, o as m, t as h } from "./widget-react-krPPnv02.js";
import { c as g } from "./widget-react-CN_FIvMD.js";
import { useCallback as _, useEffect as v, useMemo as y, useRef as b, useState as x } from "react";
import { Fragment as S, jsx as C, jsxs as w } from "react/jsx-runtime";
//#region lib/graphql/queries/generated/news.generated.tsx
var T = {}, E = t`
    query VisitorNewsList($args: VisitorNewsListArgs) {
  visitorNewsList(args: $args) {
    items {
      _id
      title
      slug
      excerpt
      publishedAt
      upstreamUpdatedAt
      reactionCounts
      coverImageUrl {
        _id
        url
      }
      externalCoverImageUrl
      authors {
        _id
        name
        photo {
          _id
          url
        }
      }
      categories {
        _id
        slug
        label
      }
      tags {
        _id
        slug
        label
      }
    }
    meta {
      totalCount
      currentPage
      totalPages
      hasNextPage
      hasPreviousPage
    }
  }
}
    `;
function ee(e) {
	return a(E, {
		...T,
		...e
	});
}
var D = t`
    query VisitorNewsPostCard($args: VisitorNewsPostArgs!) {
  visitorNewsPost(args: $args) {
    _id
    title
    excerpt
    coverImageUrl {
      _id
      url
    }
    externalCoverImageUrl
  }
}
    `;
function O(e) {
	return a(D, {
		...T,
		...e
	});
}
var k = t`
    query VisitorNewsPost($args: VisitorNewsPostArgs!) {
  visitorNewsPost(args: $args) {
    _id
    title
    slug
    excerpt
    contentMarkdown
    bodyFormat
    locale
    publishedAt
    upstreamUpdatedAt
    viewCount
    reactionCounts
    viewerReaction
    sourceUrl
    coverImageUrl {
      _id
      url
    }
    externalCoverImageUrl
    source {
      _id
      name
      type
    }
    authors {
      _id
      name
      photo {
        _id
        url
      }
    }
    categories {
      _id
      slug
      label
    }
    tags {
      _id
      slug
      label
    }
    translations {
      _id
      locale
      slug
    }
  }
}
    `;
function A(e) {
	return a(k, {
		...T,
		...e
	});
}
var j = t`
    query VisitorNewsRelated($postId: ID!, $limit: Int, $locale: String) {
  visitorNewsRelated(postId: $postId, limit: $limit, locale: $locale) {
    _id
    title
    slug
    excerpt
    publishedAt
    coverImageUrl {
      _id
      url
    }
    externalCoverImageUrl
  }
}
    `;
function M(e) {
	return a(j, {
		...T,
		...e
	});
}
t`
    mutation RecordVisitorNewsView($postId: String!) {
  recordVisitorNewsView(postId: $postId) {
    ok
  }
}
    `;
var N = t`
    query VisitorNewsListSlim($args: VisitorNewsListArgs) {
  visitorNewsList(args: $args) {
    items {
      _id
      title
    }
  }
}
    `;
function P(e) {
	return a(N, {
		...T,
		...e
	});
}
var F = h("megaphone", [
	["path", {
		d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
		key: "q8bfy3"
	}],
	["path", {
		d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
		key: "1853fq"
	}],
	["path", {
		d: "M8 6v8",
		key: "15ugcq"
	}]
]);
//#endregion
//#region components/ui/icon.tsx
function I({ icon: e, size: t = 20, strokeWidth: n = 2, className: r, ...i }) {
	return /* @__PURE__ */ C(e, {
		width: t,
		height: t,
		strokeWidth: n,
		className: p("shrink-0", r),
		...i
	});
}
//#endregion
//#region components/ui/skeleton.tsx
function L({ className: e, ...t }) {
	return /* @__PURE__ */ C("div", {
		"data-slot": "skeleton",
		className: p("animate-pulse rounded-wx-sm bg-wx-bg-elevated", e),
		...t
	});
}
//#endregion
//#region components/widget/author-avatars.tsx
function R(e) {
	if (!Array.isArray(e)) return;
	let t = e.map((e) => {
		if (!e || typeof e != "object") return null;
		let t = e.name;
		if (typeof t != "string") return null;
		let n = e._id ?? e.id, r = e.photo?.url;
		return {
			id: String(n ?? t),
			name: t,
			photoUrl: typeof r == "string" ? r : null
		};
	}).filter((e) => !!e);
	return t.length > 0 ? t : void 0;
}
function z({ authors: e, max: t = 3, className: n }) {
	return !e || e.length === 0 ? null : /* @__PURE__ */ C("span", {
		className: `flex items-center -space-x-1.5 ${n ?? ""}`,
		children: e.slice(0, t).map((e) => e.photoUrl ? /* @__PURE__ */ C("img", {
			src: e.photoUrl,
			alt: e.name,
			title: e.name,
			className: "h-5 w-5 rounded-full border border-wx-bg object-cover"
		}, e.id) : /* @__PURE__ */ C("span", {
			title: e.name,
			className: "flex h-5 w-5 items-center justify-center rounded-full border border-wx-bg bg-wx-bg-elevated-2 text-[9px] font-semibold text-wx-fg-muted",
			children: e.name.charAt(0).toUpperCase()
		}, e.id))
	});
}
//#endregion
//#region components/widget/sticky-search-header.tsx
function B({ value: e, onChange: t, placeholder: n, className: r }) {
	return /* @__PURE__ */ w("div", {
		className: p("sticky top-0 z-10 flex items-center gap-2.5 border-wx-border border-b bg-wx-bg px-4", r),
		children: [/* @__PURE__ */ C(g, {
			size: 16,
			className: "shrink-0 text-wx-fg-muted"
		}), /* @__PURE__ */ C("input", {
			type: "search",
			value: e,
			onChange: (e) => t(e.target.value),
			placeholder: n,
			className: p("block w-full min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-wx-fg", "placeholder:text-wx-fg-muted focus:outline-none focus:ring-0", "[&::-webkit-search-cancel-button]:appearance-none")
		})]
	});
}
//#endregion
//#region lib/use-scroll-restore.ts
var V = /* @__PURE__ */ new Map();
function H(e) {
	let t = b(null);
	return v(() => {
		let n = t.current;
		if (!n) return;
		let r = V.get(e) ?? 0, i = !1, a = performance.now(), o = () => {
			if (i || !t.current) return;
			let e = t.current;
			if (e.scrollHeight - e.clientHeight >= r) {
				e.scrollTop = r;
				return;
			}
			if (performance.now() - a > 500) {
				e.scrollTop = r;
				return;
			}
			requestAnimationFrame(o);
		};
		requestAnimationFrame(o);
		let s = () => {
			V.set(e, n.scrollTop);
		};
		return n.addEventListener("scroll", s, { passive: !0 }), () => {
			i = !0, n.removeEventListener("scroll", s);
		};
	}, [e]), t;
}
//#endregion
//#region components/widget/tabs/news-tab/helpers.ts
function U(e) {
	if (!e.upstreamUpdatedAt) return !1;
	let t = Date.parse(e.upstreamUpdatedAt), n = Date.parse(e.publishedAt);
	return Number.isNaN(t) || Number.isNaN(n) ? !1 : t > n + 6e4;
}
function W(e) {
	let t = Date.parse(e);
	if (Number.isNaN(t)) return "";
	let n = Date.now() - t, r = Math.floor(n / 6e4);
	if (r < 1) return "just now";
	if (r < 60) return `${r}m ago`;
	let i = Math.floor(r / 60);
	if (i < 24) return `${i}h ago`;
	let a = Math.floor(i / 24);
	return a < 7 ? `${a}d ago` : new Date(t).toLocaleDateString();
}
//#endregion
//#region components/widget/tabs/news-tab/index.tsx
var G = 10, te = 240;
function K({ isDummy: e, onOpenArticle: t }) {
	let i = f("news"), a = n(), u = m(), p = r(), [h, g] = x(""), b = J(h, 300), T = b.length >= 2, E = p.previewData?.newsPosts, D = !e && Array.isArray(E) && E.length > 0, [O, k] = x(G), { data: A, error: j, loading: M, fetchMore: N } = ee({
		variables: { args: {
			locale: u,
			limit: G,
			offset: 0,
			...T ? { query: b } : {}
		} },
		skip: e || D,
		notifyOnNetworkStatusChange: !0
	});
	v(() => {
		k(G);
	}, [b, D]);
	let P = c(), R = s(P && !e && !T ? d.news(P, u) : null, A), z = y(() => (R?.visitorNewsList.items ?? []).filter((e) => !!e).map(q), [R]), V = D ? (E ?? []).filter((e) => !!e && typeof e == "object").map(q) : [], U = _((e) => e.title.toLowerCase().includes(b.toLowerCase()) || e.excerpt.toLowerCase().includes(b.toLowerCase()), [b]), W = e ? T ? o(a).filter(U) : o(a) : D ? T ? V.filter(U) : V : z, K = D || e ? W.slice(0, O) : W, X = y(() => e || D ? O < W.length : R?.visitorNewsList.meta.hasNextPage ?? !1, [
		e,
		D,
		O,
		W.length,
		R
	]), [Z, Q] = x(!1), $ = _(async () => {
		if (!(!X || Z)) {
			if (e || D) {
				k((e) => e + G);
				return;
			}
			Q(!0);
			try {
				await N({
					variables: { args: {
						locale: u,
						limit: G,
						offset: A?.visitorNewsList.items.length ?? 0,
						...T ? { query: b } : {}
					} },
					updateQuery: (e, { fetchMoreResult: t }) => {
						if (!t) return e;
						let n = /* @__PURE__ */ new Set(), r = [];
						for (let i of [...e.visitorNewsList.items, ...t.visitorNewsList.items]) i && !n.has(i._id) && (n.add(i._id), r.push(i));
						return {
							...e,
							visitorNewsList: {
								...t.visitorNewsList,
								items: r
							}
						};
					}
				});
			} finally {
				Q(!1);
			}
		}
	}, [
		X,
		Z,
		e,
		D,
		T,
		b,
		u,
		N,
		A
	]), ne = H("news"), re = _((e) => {
		let t = e.currentTarget;
		t.scrollHeight - t.clientHeight - t.scrollTop < te && $();
	}, [$]), ie = W.length > 0 || T, ae = !e && !D && M && K.length === 0;
	return j && K.length === 0 ? /* @__PURE__ */ C("div", {
		className: "flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center",
		children: /* @__PURE__ */ C("p", {
			className: "text-sm text-wx-fg-muted",
			children: i("emptyTitle")
		})
	}) : /* @__PURE__ */ w(l, {
		className: "flex-1",
		viewportRef: ne,
		onScroll: re,
		children: [ie && /* @__PURE__ */ C(B, {
			value: h,
			onChange: g,
			placeholder: i("searchPlaceholder")
		}), /* @__PURE__ */ C("div", {
			className: "flex flex-col gap-3 px-4 pt-4 pb-6",
			children: ae ? Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ w("div", {
				className: "overflow-hidden rounded-wx-lg bg-wx-bg-elevated",
				children: [/* @__PURE__ */ C(L, { className: "aspect-[16/10] w-full rounded-none" }), /* @__PURE__ */ w("div", {
					className: "space-y-2 px-5 py-4",
					children: [
						/* @__PURE__ */ C(L, { className: "h-3 w-3/4" }),
						/* @__PURE__ */ C(L, { className: "h-3 w-1/2" }),
						/* @__PURE__ */ C(L, { className: "mt-1 h-2 w-1/3" })
					]
				})]
			}, t)) : K.length === 0 ? /* @__PURE__ */ w("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center",
				children: [
					/* @__PURE__ */ C("div", {
						className: "flex h-14 w-14 items-center justify-center rounded-full bg-wx-bg-elevated text-wx-fg-muted",
						children: /* @__PURE__ */ C(I, {
							icon: F,
							size: 28
						})
					}),
					/* @__PURE__ */ C("p", {
						className: "text-base font-semibold text-wx-fg",
						children: i(T ? "noResults" : "emptyTitle")
					}),
					!T && /* @__PURE__ */ C("p", {
						className: "text-sm text-wx-fg-muted",
						children: i("emptyBody")
					})
				]
			}) : /* @__PURE__ */ w(S, { children: [K.map((e, n) => /* @__PURE__ */ C(Y, {
				item: e,
				locale: u,
				delay: n < G ? n * .04 : 0,
				onClick: () => t(e.id)
			}, e.id)), Z && /* @__PURE__ */ C("div", {
				className: "flex justify-center py-3",
				children: /* @__PURE__ */ C(L, { className: "h-3 w-24" })
			})] })
		})]
	});
}
function q(e, t = 0) {
	let n = e.coverImageUrl?.url, r = e.externalCoverImageUrl, i = typeof n == "string" ? n : typeof r == "string" ? r : null, a = (e) => Array.isArray(e) ? e.map((e) => {
		if (!e || typeof e != "object") return null;
		let t = e.slug, n = e.label;
		return typeof t != "string" || typeof n != "string" ? null : {
			slug: t,
			label: n
		};
	}).filter((e) => !!e) : void 0, o = a(e.tags), s = a(e.categories), c = Array.isArray(e.authors) ? e.authors.map((e) => {
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
		id: String(e._id ?? e.id ?? `news-${t}`),
		title: typeof e.title == "string" ? e.title : "",
		excerpt: typeof e.excerpt == "string" ? e.excerpt : "",
		publishedAt: typeof e.publishedAt == "string" ? e.publishedAt : (/* @__PURE__ */ new Date()).toISOString(),
		coverGradient: ["#1e1f21", "#121314"],
		...i ? { coverImageUrl: i } : {},
		...typeof e.upstreamUpdatedAt == "string" ? { upstreamUpdatedAt: e.upstreamUpdatedAt } : {},
		...o && o.length > 0 ? { tags: o } : {},
		...s && s.length > 0 ? { categories: s } : {},
		...c && c.length > 0 ? { authors: c } : {},
		reactionCounts: e.reactionCounts ?? null
	};
}
function J(e, t) {
	let [n, r] = x(e);
	return v(() => {
		let n = setTimeout(() => r(e), t);
		return () => clearTimeout(n);
	}, [e, t]), n;
}
function Y({ item: t, locale: n, delay: r, onClick: a }) {
	let o = f("news"), s = t.categories ?? (t.category ? [t.category] : []), c = R(t.authors);
	return /* @__PURE__ */ w(e.button, {
		type: "button",
		onClick: a,
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		whileHover: { y: -2 },
		whileTap: { scale: .985 },
		transition: {
			duration: .2,
			delay: r
		},
		className: p("block w-full shrink-0 overflow-hidden rounded-wx-lg bg-wx-bg-elevated text-left", "transition-colors hover:bg-wx-bg-elevated-2", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary focus-visible:ring-offset-2 focus-visible:ring-offset-wx-bg"),
		children: [/* @__PURE__ */ C("div", {
			className: "aspect-[16/10] w-full bg-cover bg-center",
			style: t.coverImageUrl ? { backgroundImage: `url(${t.coverImageUrl})` } : { background: `linear-gradient(135deg, ${t.coverGradient[0]}, ${t.coverGradient[1]})` },
			"aria-hidden": "true"
		}), /* @__PURE__ */ w("div", {
			className: "px-5 py-4",
			children: [
				(s.length > 0 || c != null) && /* @__PURE__ */ w("div", {
					className: "mb-1.5 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ C("div", {
						className: "flex min-w-0 flex-wrap gap-1.5",
						children: s.slice(0, 2).map((e) => /* @__PURE__ */ C("span", {
							className: "text-[10px] font-semibold uppercase tracking-wide text-wx-primary",
							children: e.label
						}, e.slug))
					}), /* @__PURE__ */ C(z, {
						authors: c,
						className: "shrink-0"
					})]
				}),
				/* @__PURE__ */ C(i, {
					className: "text-sm",
					children: t.title
				}),
				t.excerpt && /* @__PURE__ */ C(u, {
					className: "mt-1 text-xs",
					children: t.excerpt
				}),
				/* @__PURE__ */ w("p", {
					className: "mt-2 flex items-center gap-2 text-xs text-wx-fg-subtle",
					children: [/* @__PURE__ */ C("span", { children: new Date(t.publishedAt).toLocaleDateString(n, {
						month: "short",
						day: "numeric",
						year: "numeric"
					}) }), U(t) && t.upstreamUpdatedAt && /* @__PURE__ */ C("span", {
						className: "rounded-full bg-wx-bg-elevated px-1.5 py-0.5 text-[10px] font-medium text-wx-fg-muted",
						title: new Date(t.upstreamUpdatedAt).toLocaleString(n),
						children: o("editedAt", { when: W(t.upstreamUpdatedAt) })
					})]
				}),
				t.tags && t.tags.length > 0 && /* @__PURE__ */ C("div", {
					className: "mt-2.5 flex flex-wrap gap-1",
					children: t.tags.slice(0, 4).map((e) => /* @__PURE__ */ C("span", {
						className: "rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[10px] font-medium text-wx-fg-muted",
						children: e.label
					}, e.slug))
				})
			]
		})]
	});
}
//#endregion
export { B as a, L as c, E as d, P as f, M as h, H as i, I as l, A as m, W as n, z as o, O as p, U as r, R as s, K as t, F as u };

//# sourceMappingURL=widget-react-MXOCL3Mg.js.map