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
import { S as e, at as t, it as n, j as r, ot as i } from "./widget-react-CK8xTxwO.js";
import { n as a, r as o } from "./widget-react-krPPnv02.js";
import * as s from "react";
import { jsx as c } from "react/jsx-runtime";
//#region dummy/help.ts
var l = [
	"demo-cat-getting-started",
	"demo-cat-automation",
	"demo-cat-integrations",
	"demo-cat-billing"
];
function u(e) {
	return l.map((t) => ({
		id: t,
		articleCount: d.filter((e) => e.categoryId === t).length,
		title: e.raw(`help.categories.${t}.title`),
		description: e.raw(`help.categories.${t}.description`)
	}));
}
var d = [
	{
		id: "demo-article-install",
		slug: "install-the-widget",
		categoryId: "demo-cat-getting-started",
		viewCount: 2310,
		publishedAt: "2026-01-12T10:00:00.000Z",
		authorIds: ["maya"],
		tagSlugs: ["setup", "install"]
	},
	{
		id: "demo-article-flows",
		slug: "build-your-first-flow",
		categoryId: "demo-cat-automation",
		viewCount: 1684,
		publishedAt: "2026-02-04T10:00:00.000Z",
		authorIds: ["leo"],
		tagSlugs: ["automation", "flows"]
	},
	{
		id: "demo-article-slack",
		slug: "connect-slack",
		categoryId: "demo-cat-integrations",
		viewCount: 1102,
		publishedAt: "2026-02-22T10:00:00.000Z",
		authorIds: ["leo", "ira"],
		tagSlugs: ["integrations", "slack"]
	},
	{
		id: "demo-article-billing",
		slug: "manage-billing",
		categoryId: "demo-cat-billing",
		viewCount: 540,
		publishedAt: "2026-03-18T10:00:00.000Z",
		authorIds: ["maya"],
		tagSlugs: ["billing", "plans"]
	},
	{
		id: "demo-article-theme",
		slug: "customise-theme",
		categoryId: "demo-cat-getting-started",
		viewCount: 1340,
		publishedAt: "2026-02-10T10:00:00.000Z",
		authorIds: ["ira"],
		tagSlugs: ["setup", "design"]
	},
	{
		id: "demo-article-handoff",
		slug: "human-handoff",
		categoryId: "demo-cat-automation",
		viewCount: 988,
		publishedAt: "2026-03-01T10:00:00.000Z",
		authorIds: ["leo"],
		tagSlugs: ["automation", "ai"]
	},
	{
		id: "demo-article-crm",
		slug: "connect-crm",
		categoryId: "demo-cat-integrations",
		viewCount: 763,
		publishedAt: "2026-03-25T10:00:00.000Z",
		authorIds: ["ira"],
		tagSlugs: ["integrations", "crm"]
	},
	{
		id: "demo-article-shortcuts",
		slug: "operator-shortcuts",
		categoryId: "demo-cat-getting-started",
		viewCount: 612,
		publishedAt: "2026-04-08T10:00:00.000Z",
		authorIds: ["maya"],
		tagSlugs: ["productivity", "inbox"]
	}
];
function f(e) {
	return d.map(({ authorIds: t, tagSlugs: n, ...i }) => ({
		...i,
		title: e.raw(`help.articles.${i.id}.title`),
		excerpt: e.raw(`help.articles.${i.id}.excerpt`),
		contentMarkdown: e.raw(`help.articles.${i.id}.body`),
		authors: r(t),
		tags: n.map((t) => ({
			_id: `demo-tag-${t}`,
			slug: t,
			label: e.raw(`help.tags.${t}`)
		}))
	}));
}
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
var p = Symbol.for("react.lazy"), m = s.use;
function h(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function g(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && h(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function _(e) {
	let t = /* @__PURE__ */ y(e), n = s.forwardRef((e, n) => {
		let { children: r, ...i } = e;
		g(r) && typeof m == "function" && (r = m(r._payload));
		let a = s.Children.toArray(r), o = a.find(x);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? s.Children.count(e) > 1 ? s.Children.only(null) : s.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ c(t, {
				...i,
				ref: n,
				children: s.isValidElement(e) ? s.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ c(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
var v = /* @__PURE__ */ _("Slot");
/* @__NO_SIDE_EFFECTS__ */
function y(t) {
	let n = s.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (g(r) && typeof m == "function" && (r = m(r._payload)), s.isValidElement(r)) {
			let t = C(r), a = S(i, r.props);
			return r.type !== s.Fragment && (a.ref = n ? e(n, t) : t), s.cloneElement(r, a);
		}
		return s.Children.count(r) > 1 ? s.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var b = Symbol("radix.slottable");
function x(e) {
	return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === b;
}
function S(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function C(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var w = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, T = o, E = ((e, t) => (n) => {
	if (t?.variants == null) return T(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = w(t) || w(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return T(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
})("inline-flex items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary focus-visible:ring-offset-2 focus-visible:ring-offset-wx-bg disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			solid: "bg-wx-primary text-wx-primary-fg hover:bg-wx-primary-hover",
			tonal: "bg-wx-bg-elevated text-wx-fg hover:bg-wx-bg-elevated-2",
			ghost: "bg-transparent text-wx-fg-muted hover:bg-wx-bg-elevated hover:text-wx-fg",
			outline: "border border-wx-border bg-transparent text-wx-fg hover:bg-wx-bg-elevated"
		},
		size: {
			sm: "h-8 px-3 text-xs rounded-wx-sm whitespace-nowrap",
			md: "h-10 px-4 text-sm rounded-wx whitespace-nowrap",
			lg: "h-12 px-5 text-sm rounded-wx-lg whitespace-nowrap",
			tile: "w-full px-5 py-5 text-base rounded-wx-lg",
			icon: "h-9 w-9 rounded-full whitespace-nowrap"
		}
	},
	defaultVariants: {
		variant: "solid",
		size: "md"
	}
}), D = s.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...i }, o) => /* @__PURE__ */ c(r ? v : "button", {
	ref: o,
	className: a(E({
		variant: t,
		size: n,
		className: e
	})),
	...i
}));
D.displayName = "Button";
//#endregion
//#region lib/graphql/queries/generated/help.generated.tsx
var O = {}, k = /* @__PURE__ */ function(e) {
	return e.Popular = "POPULAR", e.Recent = "RECENT", e;
}({}), A = i`
    query VisitorHelpFolders($parentId: ID, $locale: String) {
  visitorHelpFolders(parentId: $parentId, locale: $locale) {
    _id
    name
    slug
    description
    parentId
    ancestors
    order
    articleCount
  }
}
    `;
function j(e) {
	return t(A, {
		...O,
		...e
	});
}
i`
    query VisitorHelpTags($locale: String) {
  visitorHelpTags(locale: $locale) {
    _id
    slug
    label
    description
  }
}
    `;
var M = i`
    query VisitorHelpList($args: VisitorHelpListArgs) {
  visitorHelpList(args: $args) {
    items {
      _id
      title
      slug
      excerpt
      locale
      publishedAt
      order
      reactionCounts
      folder {
        _id
        name
      }
      tags {
        _id
        slug
        label
      }
      authors {
        _id
        name
        photo {
          _id
          url
        }
      }
      coverImageUrl {
        _id
        url
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
	return t(M, {
		...O,
		...e
	});
}
var P = i`
    query VisitorHelpArticle($args: VisitorHelpArticleArgs!) {
  visitorHelpArticle(args: $args) {
    _id
    title
    slug
    excerpt
    content
    contentFormat
    locale
    publishedAt
    viewCount
    reactionCounts
    viewerReaction
    folder {
      _id
      name
      ancestors
    }
    ancestors
    authors {
      _id
      name
      photo {
        _id
        url
      }
    }
    tags {
      _id
      slug
      label
    }
    coverImageUrl {
      _id
      url
    }
    canonicalUrl
    translations {
      _id
      locale
      slug
    }
  }
}
    `;
function F(e) {
	return t(P, {
		...O,
		...e
	});
}
var I = i`
    query VisitorHelpArticlesByIds($ids: [ID!]!, $locale: String) {
  visitorHelpArticlesByIds(ids: $ids, locale: $locale) {
    _id
    title
    slug
    excerpt
    publishedAt
    coverImageUrl {
      _id
      url
    }
  }
}
    `;
function L(e) {
	return t(I, {
		...O,
		...e
	});
}
var R = i`
    query VisitorHelpRelated($articleId: ID!, $limit: Int, $locale: String) {
  visitorHelpRelated(articleId: $articleId, limit: $limit, locale: $locale) {
    _id
    title
    slug
    excerpt
    coverImageUrl {
      _id
      url
    }
  }
}
    `;
function z(e) {
	return t(R, {
		...O,
		...e
	});
}
var B = i`
    mutation RecordVisitorHelpView($articleId: String!) {
  recordVisitorHelpView(articleId: $articleId) {
    ok
  }
}
    `;
function V(e) {
	return n(B, {
		...O,
		...e
	});
}
var H = i`
    query VisitorHelpListSlim($args: VisitorHelpListArgs) {
  visitorHelpList(args: $args) {
    items {
      _id
      title
      slug
    }
  }
}
    `;
function U(e) {
	return t(H, {
		...O,
		...e
	});
}
var W = i`
    query VisitorHelpArticlesByIdsSlim($ids: [ID!]!, $locale: String) {
  visitorHelpArticlesByIds(ids: $ids, locale: $locale) {
    _id
    title
    slug
  }
}
    `;
function G(e) {
	return t(W, {
		...O,
		...e
	});
}
//#endregion
export { G as a, U as c, _ as d, f, L as i, z as l, V as n, j as o, u as p, F as r, N as s, k as t, D as u };

//# sourceMappingURL=widget-react-AwEaD0v2.js.map