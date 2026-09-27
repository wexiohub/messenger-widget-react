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
import { C as e, Et as t, Tt as n, wt as r } from "./widget-react-C6lzldez.js";
import { n as i, r as a } from "./widget-react-krPPnv02.js";
import * as o from "react";
import { jsx as s } from "react/jsx-runtime";
//#region lib/graphql/queries/generated/help.generated.tsx
var c = {}, l = /* @__PURE__ */ function(e) {
	return e.Popular = "POPULAR", e.Recent = "RECENT", e;
}({}), u = t`
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
function d(e) {
	return n(u, {
		...c,
		...e
	});
}
t`
    query VisitorHelpTags($locale: String) {
  visitorHelpTags(locale: $locale) {
    _id
    slug
    label
    description
  }
}
    `;
var f = t`
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
function p(e) {
	return n(f, {
		...c,
		...e
	});
}
var m = t`
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
function h(e) {
	return n(m, {
		...c,
		...e
	});
}
var g = t`
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
function _(e) {
	return n(g, {
		...c,
		...e
	});
}
var v = t`
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
function y(e) {
	return n(v, {
		...c,
		...e
	});
}
var b = t`
    mutation RecordVisitorHelpView($articleId: String!) {
  recordVisitorHelpView(articleId: $articleId) {
    ok
  }
}
    `;
function x(e) {
	return r(b, {
		...c,
		...e
	});
}
var S = t`
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
function C(e) {
	return n(S, {
		...c,
		...e
	});
}
var w = t`
    query VisitorHelpArticlesByIdsSlim($ids: [ID!]!, $locale: String) {
  visitorHelpArticlesByIds(ids: $ids, locale: $locale) {
    _id
    title
    slug
  }
}
    `;
function T(e) {
	return n(w, {
		...c,
		...e
	});
}
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
var E = Symbol.for("react.lazy"), D = o.use;
function O(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function k(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === E && "_payload" in e && O(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function A(e) {
	let t = /* @__PURE__ */ M(e), n = o.forwardRef((e, n) => {
		let { children: r, ...i } = e;
		k(r) && typeof D == "function" && (r = D(r._payload));
		let a = o.Children.toArray(r), c = a.find(P);
		if (c) {
			let e = c.props.children, r = a.map((t) => t === c ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ s(t, {
				...i,
				ref: n,
				children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ s(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
var j = /* @__PURE__ */ A("Slot");
/* @__NO_SIDE_EFFECTS__ */
function M(t) {
	let n = o.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (k(r) && typeof D == "function" && (r = D(r._payload)), o.isValidElement(r)) {
			let t = I(r), a = F(i, r.props);
			return r.type !== o.Fragment && (a.ref = n ? e(n, t) : t), o.cloneElement(r, a);
		}
		return o.Children.count(r) > 1 ? o.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var N = Symbol("radix.slottable");
function P(e) {
	return o.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === N;
}
function F(e, t) {
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
function I(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var L = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, R = a, z = ((e, t) => (n) => {
	if (t?.variants == null) return R(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = L(t) || L(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return R(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}), B = o.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...a }, o) => /* @__PURE__ */ s(r ? j : "button", {
	ref: o,
	className: i(z({
		variant: t,
		size: n,
		className: e
	})),
	...a
}));
B.displayName = "Button";
//#endregion
export { f as a, _ as c, p as d, C as f, u as i, T as l, A as n, x as o, y as p, l as r, h as s, B as t, d as u };

//# sourceMappingURL=widget-react-bPokx9L5.js.map