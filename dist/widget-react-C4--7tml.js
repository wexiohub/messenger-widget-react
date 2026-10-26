globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";import{S as e,b as t,i as n,n as r,t as i}from"./widget-react-DIvxQOfe.js";import{D as a,E as o,Ft as s,P as c,Pt as l,R as u,ct as d,d as f,g as p,h as m,l as ee,yt as h}from"./widget-react-bQ4Udspa.js";import{c as g}from"./widget-react-_QsYqFeh.js";import{useCallback as _,useEffect as v,useMemo as y,useRef as b,useState as x}from"react";import{Fragment as te,jsx as S,jsxs as C}from"react/jsx-runtime";var w={},T=s`
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
    `;function ne(e){return l(T,{...w,...e})}var E=s`
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
    `;function D(e){return l(E,{...w,...e})}var O=s`
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
    `;function k(e){return l(O,{...w,...e})}var A=s`
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
    `;function j(e){return l(A,{...w,...e})}s`
    mutation RecordVisitorNewsView($postId: String!) {
  recordVisitorNewsView(postId: $postId) {
    ok
  }
}
    `;var M=s`
    query VisitorNewsListSlim($args: VisitorNewsListArgs) {
  visitorNewsList(args: $args) {
    items {
      _id
      title
    }
  }
}
    `;function N(e){return l(M,{...w,...e})}var P=i(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),F=i(`megaphone`,[[`path`,{d:`M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z`,key:`q8bfy3`}],[`path`,{d:`M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14`,key:`1853fq`}],[`path`,{d:`M8 6v8`,key:`15ugcq`}]]);function I({icon:e,size:t=20,strokeWidth:n=2,className:i,...a}){return S(e,{width:t,height:t,strokeWidth:n,className:r(`shrink-0`,i),...a})}function L({className:e,...t}){return S(`div`,{"data-slot":`skeleton`,className:r(`animate-pulse rounded-wx-sm bg-wx-bg-elevated`,e),...t})}function R(e){if(!Array.isArray(e))return;let t=e.map(e=>{if(!e||typeof e!=`object`)return null;let t=e.name;if(typeof t!=`string`)return null;let n=e._id??e.id,r=e.photo?.url;return{id:String(n??t),name:t,photoUrl:typeof r==`string`?r:null}}).filter(e=>!!e);return t.length>0?t:void 0}function z({authors:e,max:t=3,className:n}){return!e||e.length===0?null:S(`span`,{className:`flex items-center -space-x-1.5 ${n??``}`,children:e.slice(0,t).map(e=>e.photoUrl?S(`img`,{src:e.photoUrl,alt:e.name,title:e.name,className:`h-5 w-5 rounded-full border border-wx-bg object-cover`},e.id):S(`span`,{title:e.name,className:`flex h-5 w-5 items-center justify-center rounded-full border border-wx-bg bg-wx-bg-elevated-2 text-[9px] font-semibold text-wx-fg-muted`,children:e.name.charAt(0).toUpperCase()},e.id))})}function B({value:e,onChange:t,placeholder:n,className:i}){return C(`div`,{className:r(`sticky top-0 z-10 flex items-center gap-2.5 border-wx-border border-b bg-wx-bg px-4`,i),children:[S(g,{size:16,className:`shrink-0 text-wx-fg-muted`}),S(`input`,{type:`search`,value:e,onChange:e=>t(e.target.value),placeholder:n,className:r(`block w-full min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-wx-fg`,`placeholder:text-wx-fg-muted focus:outline-none focus:ring-0`,`[&::-webkit-search-cancel-button]:appearance-none`)})]})}var V=new Map;function H(e){let t=b(null);return v(()=>{let n=t.current;if(!n)return;let r=V.get(e)??0,i=!1,a=performance.now(),o=()=>{if(i||!t.current)return;let e=t.current;if(e.scrollHeight-e.clientHeight>=r){e.scrollTop=r;return}if(performance.now()-a>500){e.scrollTop=r;return}requestAnimationFrame(o)};requestAnimationFrame(o);let s=()=>{V.set(e,n.scrollTop)};return n.addEventListener(`scroll`,s,{passive:!0}),()=>{i=!0,n.removeEventListener(`scroll`,s)}},[e]),t}function U(e){if(!e.upstreamUpdatedAt)return!1;let t=Date.parse(e.upstreamUpdatedAt),n=Date.parse(e.publishedAt);return Number.isNaN(t)||Number.isNaN(n)?!1:t>n+6e4}function W(e){let t=Date.parse(e);if(Number.isNaN(t))return``;let n=Date.now()-t,r=Math.floor(n/6e4);if(r<1)return`just now`;if(r<60)return`${r}m ago`;let i=Math.floor(r/60);if(i<24)return`${i}h ago`;let a=Math.floor(i/24);return a<7?`${a}d ago`:new Date(t).toLocaleDateString()}var G=10,K=240;function q({isDummy:n,onOpenArticle:r}){let i=t(`news`),s=a(),l=e(),p=c(),[m,g]=x(``),b=Y(m,300),w=b.length>=2,T=p.previewData?.newsPosts,E=!n&&Array.isArray(T)&&T.length>0,[D,O]=x(G),{data:k,error:A,loading:j,fetchMore:M}=ne({variables:{args:{locale:l,limit:G,offset:0,...w?{query:b}:{}}},skip:n||E,notifyOnNetworkStatusChange:!0});v(()=>{O(G)},[b,E]);let N=h().publicKey,P=ee(N&&!n&&!w?u.news(N,l):null,k),R=y(()=>(P?.visitorNewsList?.items??[]).filter(e=>!!e).map(J),[P]),z=E?(T??[]).filter(e=>!!e&&typeof e==`object`).map(J):[],V=_(e=>e.title.toLowerCase().includes(b.toLowerCase())||e.excerpt.toLowerCase().includes(b.toLowerCase()),[b]),U=n?w?d(s).filter(V):d(s):E?w?z.filter(V):z:R,W=E||n?U.slice(0,D):U,q=y(()=>n||E?D<U.length:P?.visitorNewsList?.meta?.hasNextPage??!1,[n,E,D,U.length,P]),[Z,Q]=x(!1),$=_(async()=>{if(!(!q||Z)){if(n||E){O(e=>e+G);return}Q(!0);try{await M({variables:{args:{locale:l,limit:G,offset:k?.visitorNewsList?.items?.length??0,...w?{query:b}:{}}},updateQuery:(e,{fetchMoreResult:t})=>{if(!t)return e;let n=new Set,r=[];for(let i of[...e.visitorNewsList?.items??[],...t.visitorNewsList?.items??[]])i&&!n.has(i._id)&&(n.add(i._id),r.push(i));return{...e,visitorNewsList:{...t.visitorNewsList,items:r}}}})}catch(e){console.warn(`[wexio] news load-more failed:`,e)}finally{Q(!1)}}},[q,Z,n,E,w,b,l,M,k]),re=H(`news`),ie=_(e=>{let t=e.currentTarget;t.scrollHeight-t.clientHeight-t.scrollTop<K&&$()},[$]),ae=U.length>0||w,oe=n&&!o(s)||!n&&!E&&j&&W.length===0;return A&&W.length===0?S(`div`,{className:`flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center`,children:S(`p`,{className:`text-sm text-wx-fg-muted`,children:i(`emptyTitle`)})}):C(f,{followDirection:!0,className:`flex-1`,viewportRef:re,onScroll:ie,children:[ae&&S(B,{value:m,onChange:g,placeholder:i(`searchPlaceholder`)}),S(`div`,{className:`flex flex-col gap-3 px-4 pt-4 pb-6`,children:oe?Array.from({length:3}).map((e,t)=>C(`div`,{className:`overflow-hidden rounded-wx-lg bg-wx-bg-elevated`,children:[S(L,{className:`aspect-[16/10] w-full rounded-none`}),C(`div`,{className:`space-y-2 px-5 py-4`,children:[S(L,{className:`h-3 w-3/4`}),S(L,{className:`h-3 w-1/2`}),S(L,{className:`mt-1 h-2 w-1/3`})]})]},t)):W.length===0?C(`div`,{className:`flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center`,children:[S(`div`,{className:`flex h-14 w-14 items-center justify-center rounded-full bg-wx-bg-elevated text-wx-fg-muted`,children:S(I,{icon:F,size:28})}),S(`p`,{className:`text-base font-semibold text-wx-fg`,children:i(w?`noResults`:`emptyTitle`)}),!w&&S(`p`,{className:`text-sm text-wx-fg-muted`,children:i(`emptyBody`)})]}):C(te,{children:[W.map((e,t)=>S(X,{item:e,locale:l,delay:t<G?t*.04:0,onClick:()=>r(e.id)},e.id)),Z&&S(`div`,{className:`flex justify-center py-3`,children:S(L,{className:`h-3 w-24`})})]})})]})}function J(e,t=0){let n=e.coverImageUrl?.url,r=e.externalCoverImageUrl,i=typeof n==`string`?n:typeof r==`string`?r:null,a=e=>Array.isArray(e)?e.map(e=>{if(!e||typeof e!=`object`)return null;let t=e.slug,n=e.label;return typeof t!=`string`||typeof n!=`string`?null:{slug:t,label:n}}).filter(e=>!!e):void 0,o=a(e.tags),s=a(e.categories),c=Array.isArray(e.authors)?e.authors.map(e=>{if(!e||typeof e!=`object`)return null;let t=e.name;if(typeof t!=`string`)return null;let n=e._id,r=e.photo?.url;return{_id:String(n??t),name:t,photo:{url:typeof r==`string`?r:``}}}).filter(e=>!!e):void 0;return{id:String(e._id??e.id??`news-${t}`),title:typeof e.title==`string`?e.title:``,excerpt:typeof e.excerpt==`string`?e.excerpt:``,publishedAt:typeof e.publishedAt==`string`?e.publishedAt:new Date().toISOString(),coverGradient:[`#1e1f21`,`#121314`],...i?{coverImageUrl:i}:{},...typeof e.upstreamUpdatedAt==`string`?{upstreamUpdatedAt:e.upstreamUpdatedAt}:{},...o&&o.length>0?{tags:o}:{},...s&&s.length>0?{categories:s}:{},...c&&c.length>0?{authors:c}:{},reactionCounts:e.reactionCounts??null}}function Y(e,t){let[n,r]=x(e);return v(()=>{let n=setTimeout(()=>r(e),t);return()=>clearTimeout(n)},[e,t]),n}function X({item:e,locale:i,delay:a,onClick:o}){let s=t(`news`),c=e.categories??(e.category?[e.category]:[]),l=R(e.authors);return C(n.button,{type:`button`,onClick:o,initial:{opacity:0,y:8},animate:{opacity:1,y:0},whileHover:{y:-2},whileTap:{scale:.985},transition:{duration:.2,delay:a},className:r(`block w-full shrink-0 overflow-hidden rounded-wx-lg bg-wx-bg-elevated text-start [overflow-wrap:anywhere]`,`transition-colors hover:bg-wx-bg-elevated-2`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary focus-visible:ring-offset-2 focus-visible:ring-offset-wx-bg`),children:[S(`div`,{className:`aspect-[16/10] w-full bg-cover bg-center`,style:e.coverImageUrl?{backgroundImage:`url(${e.coverImageUrl})`}:{background:`linear-gradient(135deg, ${e.coverGradient[0]}, ${e.coverGradient[1]})`},"aria-hidden":`true`}),C(`div`,{className:`px-5 py-4`,children:[(c.length>0||l!=null)&&C(`div`,{className:`mb-1.5 flex items-center justify-between gap-2`,children:[S(`div`,{className:`flex min-w-0 flex-wrap gap-1.5`,children:c.slice(0,2).map(e=>S(`span`,{className:`text-[10px] font-semibold uppercase tracking-wide text-wx-primary`,children:e.label},e.slug))}),S(z,{authors:l,className:`shrink-0`})]}),S(p,{className:`text-sm`,children:e.title}),e.excerpt&&S(m,{className:`mt-1 text-xs`,children:e.excerpt}),C(`p`,{className:`mt-2 flex items-center gap-2 text-xs text-wx-fg-subtle`,children:[S(`span`,{children:new Date(e.publishedAt).toLocaleDateString(i,{month:`short`,day:`numeric`,year:`numeric`})}),U(e)&&e.upstreamUpdatedAt&&S(`span`,{className:`rounded-full bg-wx-bg-elevated px-1.5 py-0.5 text-[10px] font-medium text-wx-fg-muted`,title:new Date(e.upstreamUpdatedAt).toLocaleString(i),children:s(`editedAt`,{when:W(e.upstreamUpdatedAt)})})]}),e.tags&&e.tags.length>0&&S(`div`,{className:`mt-2.5 flex flex-wrap gap-1`,children:e.tags.slice(0,4).map(e=>S(`span`,{className:`rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[10px] font-medium text-wx-fg-muted`,children:e.label},e.slug))})]})]})}export{B as a,L as c,P as d,T as f,j as g,k as h,H as i,I as l,D as m,W as n,z as o,N as p,U as r,R as s,q as t,F as u};
//# sourceMappingURL=widget-react-C4--7tml.js.map