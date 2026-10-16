globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";import{n as e,r as t}from"./widget-react-FX5W7RyV.js";import{St as n,bt as r,xt as i}from"./widget-react-CnP2-ZB-.js";import*as a from"react";import{jsx as o}from"react/jsx-runtime";var s={},c=function(e){return e.Popular=`POPULAR`,e.Recent=`RECENT`,e}({}),l=n`
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
    `;function u(e){return i(l,{...s,...e})}n`
    query VisitorHelpTags($locale: String) {
  visitorHelpTags(locale: $locale) {
    _id
    slug
    label
    description
  }
}
    `;var d=n`
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
    `;function f(e){return i(d,{...s,...e})}var p=n`
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
    `;function m(e){return i(p,{...s,...e})}var h=n`
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
    `;function g(e){return i(h,{...s,...e})}var _=n`
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
    `;function v(e){return i(_,{...s,...e})}var y=n`
    mutation RecordVisitorHelpView($articleId: String!) {
  recordVisitorHelpView(articleId: $articleId) {
    ok
  }
}
    `;function b(e){return r(y,{...s,...e})}var x=n`
    query VisitorHelpListSlim($args: VisitorHelpListArgs) {
  visitorHelpList(args: $args) {
    items {
      _id
      title
      slug
    }
  }
}
    `;function S(e){return i(x,{...s,...e})}var C=n`
    query VisitorHelpArticlesByIdsSlim($ids: [ID!]!, $locale: String) {
  visitorHelpArticlesByIds(ids: $ids, locale: $locale) {
    _id
    title
    slug
  }
}
    `;function w(e){return i(C,{...s,...e})}function T(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function E(...e){return t=>{let n=!1,r=e.map(e=>{let r=T(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():T(e[t],null)}}}}var D=Symbol.for(`react.lazy`),O=a.use;function k(e){return typeof e==`object`&&!!e&&`then`in e}function A(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===D&&`_payload`in e&&k(e._payload)}function j(e){let t=N(e),n=a.forwardRef((e,n)=>{let{children:r,...i}=e;A(r)&&typeof O==`function`&&(r=O(r._payload));let s=a.Children.toArray(r),c=s.find(F);if(c){let e=c.props.children,r=s.map(t=>t===c?a.Children.count(e)>1?a.Children.only(null):a.isValidElement(e)?e.props.children:null:t);return o(t,{...i,ref:n,children:a.isValidElement(e)?a.cloneElement(e,void 0,r):null})}return o(t,{...i,ref:n,children:r})});return n.displayName=`${e}.Slot`,n}var M=j(`Slot`);function N(e){let t=a.forwardRef((e,t)=>{let{children:n,...r}=e;if(A(n)&&typeof O==`function`&&(n=O(n._payload)),a.isValidElement(n)){let e=L(n),i=I(r,n.props);return n.type!==a.Fragment&&(i.ref=t?E(t,e):e),a.cloneElement(n,i)}return a.Children.count(n)>1?a.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var P=Symbol(`radix.slottable`);function F(e){return a.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===P}function I(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function L(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var R=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,z=t,B=((e,t)=>n=>{if(t?.variants==null)return z(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=R(t)||R(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return z(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)})(`inline-flex items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary focus-visible:ring-offset-2 focus-visible:ring-offset-wx-bg disabled:pointer-events-none disabled:opacity-50`,{variants:{variant:{solid:`bg-wx-primary text-wx-primary-fg hover:bg-wx-primary-hover`,tonal:`bg-wx-bg-elevated text-wx-fg hover:bg-wx-bg-elevated-2`,ghost:`bg-transparent text-wx-fg-muted hover:bg-wx-bg-elevated hover:text-wx-fg`,outline:`border border-wx-border bg-transparent text-wx-fg hover:bg-wx-bg-elevated`},size:{sm:`h-8 px-3 text-xs rounded-wx-sm whitespace-nowrap`,md:`h-10 px-4 text-sm rounded-wx whitespace-nowrap`,lg:`h-12 px-5 text-sm rounded-wx-lg whitespace-nowrap`,tile:`w-full px-5 py-5 text-base rounded-wx-lg`,icon:`h-9 w-9 rounded-full whitespace-nowrap`}},defaultVariants:{variant:`solid`,size:`md`}}),V=a.forwardRef(({className:t,variant:n,size:r,asChild:i=!1,...a},s)=>o(i?M:`button`,{ref:s,className:e(B({variant:n,size:r,className:t})),...a}));V.displayName=`Button`;export{d as a,g as c,f as d,S as f,l as i,w as l,j as n,b as o,v as p,c as r,m as s,V as t,u};
//# sourceMappingURL=widget-react-BrRmLgRl.js.map