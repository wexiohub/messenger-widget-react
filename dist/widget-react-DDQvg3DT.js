import "react";
import "react-dom";
import "react/jsx-runtime";
import "react-dom/client";
import { c as e, d as t } from "./widget-react-DE7AVrCo.js";
import { D as n, F as r, h as i, m as a, r as o, w as s, z as c } from "./widget-react-CQ4e_16G.js";
import { i as l, n as u, o as d, t as f } from "./widget-react-BxvW64LH.js";
import { useCallback as p, useEffect as m, useMemo as h, useRef as g, useState as _ } from "react";
import { Fragment as v, jsx as y, jsxs as b } from "react/jsx-runtime";
//#region dummy/news.ts
var x = [
	{
		id: "demo-news-1",
		publishedAt: "2026-04-30T10:00:00.000Z",
		coverGradient: ["#1e1f21", "#121314"],
		coverImageUrl: "https://picsum.photos/seed/wexio-pioneer/960/600",
		authorIds: ["maya", "sam"],
		categorySlug: "company",
		tagSlugs: ["events", "product"]
	},
	{
		id: "demo-news-2",
		publishedAt: "2026-04-15T10:00:00.000Z",
		coverGradient: ["#1e3a8a", "#0c1e4a"],
		coverImageUrl: "https://picsum.photos/seed/wexio-april/960/600",
		authorIds: ["leo"],
		categorySlug: "product",
		tagSlugs: ["product", "release"]
	},
	{
		id: "demo-news-3",
		publishedAt: "2026-03-22T10:00:00.000Z",
		coverGradient: ["#0f766e", "#042f2e"],
		coverImageUrl: "https://picsum.photos/seed/wexio-langs/960/600",
		authorIds: ["ira", "leo"],
		categorySlug: "product",
		tagSlugs: ["ai", "languages"]
	},
	{
		id: "demo-news-4",
		publishedAt: "2026-03-08T10:00:00.000Z",
		coverGradient: ["#7c3aed", "#2e1065"],
		authorIds: ["leo"],
		categorySlug: "engineering",
		tagSlugs: ["integrations", "slack"]
	},
	{
		id: "demo-news-5",
		publishedAt: "2026-02-18T10:00:00.000Z",
		coverGradient: ["#b45309", "#451a03"],
		coverImageUrl: "https://picsum.photos/seed/wexio-inbox2/960/600",
		authorIds: ["maya"],
		categorySlug: "product",
		tagSlugs: ["inbox", "product"]
	},
	{
		id: "demo-news-6",
		publishedAt: "2026-02-02T10:00:00.000Z",
		coverGradient: ["#155e75", "#083344"],
		authorIds: ["sam"],
		categorySlug: "engineering",
		tagSlugs: ["privacy", "security"]
	},
	{
		id: "demo-news-7",
		publishedAt: "2026-01-20T10:00:00.000Z",
		coverGradient: ["#be185d", "#500724"],
		coverImageUrl: "https://picsum.photos/seed/wexio-mobile/960/600",
		authorIds: ["ira"],
		categorySlug: "product",
		tagSlugs: ["mobile", "beta"]
	},
	{
		id: "demo-news-8",
		publishedAt: "2026-01-05T10:00:00.000Z",
		coverGradient: ["#15803d", "#052e16"],
		authorIds: ["maya", "leo"],
		categorySlug: "engineering",
		tagSlugs: ["ai", "analytics"]
	}
];
function S(e) {
	return x.map(({ tagSlugs: t, authorIds: n, categorySlug: r, ...i }) => ({
		...i,
		title: e.raw(`news.${i.id}.title`),
		excerpt: e.raw(`news.${i.id}.excerpt`),
		contentMarkdown: e.raw(`news.${i.id}.body`),
		authors: s(n),
		category: {
			slug: r,
			label: e.raw(`news.categories.${r}`)
		},
		tags: t.map((t) => ({
			slug: t,
			label: e.raw(`news.tags.${t}`)
		}))
	}));
}
var C = f("megaphone", [
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
function w({ icon: e, size: t = 20, strokeWidth: n = 2, className: r, ...i }) {
	return /* @__PURE__ */ y(e, {
		width: t,
		height: t,
		strokeWidth: n,
		className: u("shrink-0", r),
		...i
	});
}
//#endregion
//#region components/ui/skeleton.tsx
function T({ className: e, ...t }) {
	return /* @__PURE__ */ y("div", {
		"data-slot": "skeleton",
		className: u("animate-pulse rounded-wx-sm bg-wx-bg-elevated", e),
		...t
	});
}
//#endregion
//#region components/widget/author-avatars.tsx
function E(e) {
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
function D({ authors: e, max: t = 3, className: n }) {
	return !e || e.length === 0 ? null : /* @__PURE__ */ y("span", {
		className: `flex items-center -space-x-1.5 ${n ?? ""}`,
		children: e.slice(0, t).map((e) => e.photoUrl ? /* @__PURE__ */ y("img", {
			src: e.photoUrl,
			alt: e.name,
			title: e.name,
			className: "h-5 w-5 rounded-full border border-wx-bg object-cover"
		}, e.id) : /* @__PURE__ */ y("span", {
			title: e.name,
			className: "flex h-5 w-5 items-center justify-center rounded-full border border-wx-bg bg-wx-bg-elevated-2 text-[9px] font-semibold text-wx-fg-muted",
			children: e.name.charAt(0).toUpperCase()
		}, e.id))
	});
}
//#endregion
//#region components/widget/sticky-search-header.tsx
function O({ value: t, onChange: n, placeholder: r, className: i }) {
	return /* @__PURE__ */ b("div", {
		className: u("sticky top-0 z-10 border-wx-border border-b bg-wx-bg", i),
		children: [/* @__PURE__ */ y("span", {
			className: "-translate-y-1/2 pointer-events-none absolute top-1/2 left-4 text-wx-fg-muted",
			children: /* @__PURE__ */ y(e, { size: 16 })
		}), /* @__PURE__ */ y("input", {
			type: "search",
			value: t,
			onChange: (e) => n(e.target.value),
			placeholder: r,
			className: u("block w-full border-0 bg-transparent px-4 py-3 pl-10 text-sm text-wx-fg", "placeholder:text-wx-fg-muted focus:outline-none focus:ring-0", "[&::-webkit-search-cancel-button]:appearance-none")
		})]
	});
}
//#endregion
//#region lib/use-scroll-restore.ts
var k = /* @__PURE__ */ new Map();
function A(e) {
	let t = g(null);
	return m(() => {
		let n = t.current;
		if (!n) return;
		let r = k.get(e) ?? 0, i = !1, a = performance.now(), o = () => {
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
			k.set(e, n.scrollTop);
		};
		return n.addEventListener("scroll", s, { passive: !0 }), () => {
			i = !0, n.removeEventListener("scroll", s);
		};
	}, [e]), t;
}
//#endregion
//#region lib/graphql/queries/generated/news.generated.tsx
var j = {}, M = c`
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
function N(e) {
	return r(M, {
		...j,
		...e
	});
}
var P = c`
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
function F(e) {
	return r(P, {
		...j,
		...e
	});
}
var I = c`
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
function L(e) {
	return r(I, {
		...j,
		...e
	});
}
var R = c`
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
function z(e) {
	return r(R, {
		...j,
		...e
	});
}
c`
    mutation RecordVisitorNewsView($postId: String!) {
  recordVisitorNewsView(postId: $postId) {
    ok
  }
}
    `;
var B = c`
    query VisitorNewsListSlim($args: VisitorNewsListArgs) {
  visitorNewsList(args: $args) {
    items {
      _id
      title
    }
  }
}
    `;
function V(e) {
	return r(B, {
		...j,
		...e
	});
}
//#endregion
//#region components/widget/tabs/news-tab/helpers.ts
function H(e) {
	if (!e.upstreamUpdatedAt) return !1;
	let t = Date.parse(e.upstreamUpdatedAt), n = Date.parse(e.publishedAt);
	return Number.isNaN(t) || Number.isNaN(n) ? !1 : t > n + 6e4;
}
function U(e) {
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
var W = 10, G = 240;
function K({ isDummy: e, onOpenArticle: t }) {
	let r = l("news"), i = l("demo"), a = d(), s = n(), [c, u] = _(""), f = J(c, 300), g = f.length >= 2, x = s.previewData?.newsPosts, E = !e && Array.isArray(x) && x.length > 0, [D, k] = _(W), { data: j, error: M, loading: P, fetchMore: F } = N({
		variables: { args: {
			locale: a,
			limit: W,
			offset: 0,
			...g ? { query: f } : {}
		} },
		skip: e || E,
		notifyOnNetworkStatusChange: !0
	});
	m(() => {
		k(W);
	}, [f, E]);
	let I = h(() => (j?.visitorNewsList.items ?? []).filter((e) => !!e).map(q), [j]), L = E ? (x ?? []).filter((e) => !!e && typeof e == "object").map(q) : [], R = p((e) => e.title.toLowerCase().includes(f.toLowerCase()) || e.excerpt.toLowerCase().includes(f.toLowerCase()), [f]), z = e ? g ? S(i).filter(R) : S(i) : E ? g ? L.filter(R) : L : I, B = E || e ? z.slice(0, D) : z, V = h(() => e || E ? D < z.length : j?.visitorNewsList.meta.hasNextPage ?? !1, [
		e,
		E,
		D,
		z.length,
		j
	]), [H, U] = _(!1), K = p(async () => {
		if (!(!V || H)) {
			if (e || E) {
				k((e) => e + W);
				return;
			}
			U(!0);
			try {
				await F({
					variables: { args: {
						locale: a,
						limit: W,
						offset: j?.visitorNewsList.items.length ?? 0,
						...g ? { query: f } : {}
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
				U(!1);
			}
		}
	}, [
		V,
		H,
		e,
		E,
		g,
		f,
		a,
		F,
		j
	]), X = A("news"), Z = p((e) => {
		let t = e.currentTarget;
		t.scrollHeight - t.clientHeight - t.scrollTop < G && K();
	}, [K]), Q = z.length > 0 || g, $ = !e && !E && P && B.length === 0;
	return M && B.length === 0 ? /* @__PURE__ */ y("div", {
		className: "flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center",
		children: /* @__PURE__ */ y("p", {
			className: "text-sm text-wx-fg-muted",
			children: r("emptyTitle")
		})
	}) : /* @__PURE__ */ b(o, {
		className: "flex-1",
		viewportRef: X,
		onScroll: Z,
		children: [Q && /* @__PURE__ */ y(O, {
			value: c,
			onChange: u,
			placeholder: r("searchPlaceholder")
		}), /* @__PURE__ */ y("div", {
			className: "flex flex-col gap-3 px-4 pt-4 pb-6",
			children: $ ? Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ b("div", {
				className: "overflow-hidden rounded-wx-lg bg-wx-bg-elevated",
				children: [/* @__PURE__ */ y(T, { className: "aspect-[16/10] w-full rounded-none" }), /* @__PURE__ */ b("div", {
					className: "space-y-2 px-5 py-4",
					children: [
						/* @__PURE__ */ y(T, { className: "h-3 w-3/4" }),
						/* @__PURE__ */ y(T, { className: "h-3 w-1/2" }),
						/* @__PURE__ */ y(T, { className: "mt-1 h-2 w-1/3" })
					]
				})]
			}, t)) : B.length === 0 ? /* @__PURE__ */ b("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center",
				children: [
					/* @__PURE__ */ y("div", {
						className: "flex h-14 w-14 items-center justify-center rounded-full bg-wx-bg-elevated text-wx-fg-muted",
						children: /* @__PURE__ */ y(w, {
							icon: C,
							size: 28
						})
					}),
					/* @__PURE__ */ y("p", {
						className: "text-base font-semibold text-wx-fg",
						children: r(g ? "noResults" : "emptyTitle")
					}),
					!g && /* @__PURE__ */ y("p", {
						className: "text-sm text-wx-fg-muted",
						children: r("emptyBody")
					})
				]
			}) : /* @__PURE__ */ b(v, { children: [B.map((e, n) => /* @__PURE__ */ y(Y, {
				item: e,
				locale: a,
				delay: n < W ? n * .04 : 0,
				onClick: () => t(e.id)
			}, e.id)), H && /* @__PURE__ */ y("div", {
				className: "flex justify-center py-3",
				children: /* @__PURE__ */ y(T, { className: "h-3 w-24" })
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
	let [n, r] = _(e);
	return m(() => {
		let n = setTimeout(() => r(e), t);
		return () => clearTimeout(n);
	}, [e, t]), n;
}
function Y({ item: e, locale: n, delay: r, onClick: o }) {
	let s = l("news"), c = e.categories ?? (e.category ? [e.category] : []), d = E(e.authors);
	return /* @__PURE__ */ b(t.button, {
		type: "button",
		onClick: o,
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
		className: u("block w-full shrink-0 overflow-hidden rounded-wx-lg bg-wx-bg-elevated text-left", "transition-colors hover:bg-wx-bg-elevated-2", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary focus-visible:ring-offset-2 focus-visible:ring-offset-wx-bg"),
		children: [/* @__PURE__ */ y("div", {
			className: "aspect-[16/10] w-full bg-cover bg-center",
			style: e.coverImageUrl ? { backgroundImage: `url(${e.coverImageUrl})` } : { background: `linear-gradient(135deg, ${e.coverGradient[0]}, ${e.coverGradient[1]})` },
			"aria-hidden": "true"
		}), /* @__PURE__ */ b("div", {
			className: "px-5 py-4",
			children: [
				(c.length > 0 || d != null) && /* @__PURE__ */ b("div", {
					className: "mb-1.5 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ y("div", {
						className: "flex min-w-0 flex-wrap gap-1.5",
						children: c.slice(0, 2).map((e) => /* @__PURE__ */ y("span", {
							className: "text-[10px] font-semibold uppercase tracking-wide text-wx-primary",
							children: e.label
						}, e.slug))
					}), /* @__PURE__ */ y(D, {
						authors: d,
						className: "shrink-0"
					})]
				}),
				/* @__PURE__ */ y(i, {
					className: "text-sm",
					children: e.title
				}),
				e.excerpt && /* @__PURE__ */ y(a, {
					className: "mt-1 text-xs",
					children: e.excerpt
				}),
				/* @__PURE__ */ b("p", {
					className: "mt-2 flex items-center gap-2 text-xs text-wx-fg-subtle",
					children: [/* @__PURE__ */ y("span", { children: new Date(e.publishedAt).toLocaleDateString(n, {
						month: "short",
						day: "numeric",
						year: "numeric"
					}) }), H(e) && e.upstreamUpdatedAt && /* @__PURE__ */ y("span", {
						className: "rounded-full bg-wx-bg-elevated px-1.5 py-0.5 text-[10px] font-medium text-wx-fg-muted",
						title: new Date(e.upstreamUpdatedAt).toLocaleString(n),
						children: s("editedAt", { when: U(e.upstreamUpdatedAt) })
					})]
				}),
				e.tags && e.tags.length > 0 && /* @__PURE__ */ y("div", {
					className: "mt-2.5 flex flex-wrap gap-1",
					children: e.tags.slice(0, 4).map((e) => /* @__PURE__ */ y("span", {
						className: "rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[10px] font-medium text-wx-fg-muted",
						children: e.label
					}, e.slug))
				})
			]
		})]
	});
}
//#endregion
export { F as a, A as c, E as d, T as f, S as h, V as i, O as l, C as m, U as n, L as o, w as p, H as r, z as s, K as t, D as u };

//# sourceMappingURL=widget-react-DDQvg3DT.js.map