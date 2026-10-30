globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";import{S as e,b as t,i as n,n as r,t as i}from"./widget-react-DIvxQOfe.js";import{A as a,Dt as o,Q as s,Rt as c,an as l,f as u,in as d,k as f,l as p,m,nt as h,v as g,y as _}from"./widget-react-BbMhq_D0.js";import{c as v}from"./widget-react-_QsYqFeh.js";import{useCallback as y,useEffect as b,useMemo as x,useRef as S,useState as C}from"react";import{Fragment as w,jsx as T,jsxs as E}from"react/jsx-runtime";var D={},O=l`
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
    `;function k(e){return d(O,{...D,...e})}var A=l`
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
    `;function j(e){return d(A,{...D,...e})}var M=l`
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
    `;function N(e){return d(M,{...D,...e})}var P=l`
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
    `;function F(e){return d(P,{...D,...e})}l`
    mutation RecordVisitorNewsView($postId: String!) {
  recordVisitorNewsView(postId: $postId) {
    ok
  }
}
    `;var I=l`
    query VisitorNewsListSlim($args: VisitorNewsListArgs) {
  visitorNewsList(args: $args) {
    items {
      _id
      title
    }
  }
}
    `;function L(e){return d(I,{...D,...e})}var R=i(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),z=i(`megaphone`,[[`path`,{d:`M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z`,key:`q8bfy3`}],[`path`,{d:`M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14`,key:`1853fq`}],[`path`,{d:`M8 6v8`,key:`15ugcq`}]]);function B({icon:e,size:t=20,strokeWidth:n=2,className:i,...a}){return T(e,{width:t,height:t,strokeWidth:n,className:r(`shrink-0`,i),...a})}function V({className:e,...t}){return T(`div`,{"data-slot":`skeleton`,className:r(`animate-pulse rounded-wx-sm bg-wx-bg-elevated`,e),...t})}function H(e){if(!Array.isArray(e))return;let t=e.map(e=>{if(!e||typeof e!=`object`)return null;let t=e.name;if(typeof t!=`string`)return null;let n=e._id??e.id,r=e.photo?.url;return{id:String(n??t),name:t,photoUrl:typeof r==`string`?r:null}}).filter(e=>!!e);return t.length>0?t:void 0}function U({authors:e,max:t=3,className:n}){return!e||e.length===0?null:T(`span`,{className:`flex items-center -space-x-1.5 ${n??``}`,children:e.slice(0,t).map(e=>e.photoUrl?T(`img`,{src:e.photoUrl,alt:e.name,title:e.name,className:`h-5 w-5 rounded-full border border-wx-bg object-cover`},e.id):T(`span`,{title:e.name,className:`flex h-5 w-5 items-center justify-center rounded-full border border-wx-bg bg-wx-bg-elevated-2 text-[9px] font-semibold text-wx-fg-muted`,children:e.name.charAt(0).toUpperCase()},e.id))})}function W({value:e,onChange:t,placeholder:n,className:i}){return E(`div`,{className:r(`sticky top-0 z-10 flex items-center gap-2.5 border-wx-border border-b bg-wx-bg px-4`,i),children:[T(v,{size:16,className:`shrink-0 text-wx-fg-muted`}),T(`input`,{type:`search`,value:e,onChange:e=>t(e.target.value),placeholder:n,className:r(`block w-full min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-wx-fg`,`placeholder:text-wx-fg-muted focus:outline-none focus:ring-0`,`[&::-webkit-search-cancel-button]:appearance-none`)})]})}var G=new Map;function K(e){let t=S(null);return b(()=>{let n=t.current;if(!n)return;let r=G.get(e)??0,i=!1,a=performance.now(),o=()=>{if(i||!t.current)return;let e=t.current;if(e.scrollHeight-e.clientHeight>=r){e.scrollTop=r;return}if(performance.now()-a>500){e.scrollTop=r;return}requestAnimationFrame(o)};requestAnimationFrame(o);let s=()=>{G.set(e,n.scrollTop)};return n.addEventListener(`scroll`,s,{passive:!0}),()=>{i=!0,n.removeEventListener(`scroll`,s)}},[e]),t}function q({url:e,className:t}){let[n,i]=C(null);return!e||n===e?null:T(`img`,{ref:t=>{t?.complete&&t.naturalWidth===0&&i(e)},src:e,alt:``,"aria-hidden":`true`,"data-testid":`news-cover`,onError:()=>i(e),className:r(`w-full bg-wx-bg-elevated-2 object-cover`,t)})}function J(e){if(!e.upstreamUpdatedAt)return!1;let t=Date.parse(e.upstreamUpdatedAt),n=Date.parse(e.publishedAt);return Number.isNaN(t)||Number.isNaN(n)?!1:t>n+6e4}function Y(e){let t=Date.parse(e);if(Number.isNaN(t))return``;let n=Date.now()-t,r=Math.floor(n/6e4);if(r<1)return`just now`;if(r<60)return`${r}m ago`;let i=Math.floor(r/60);if(i<24)return`${i}h ago`;let a=Math.floor(i/24);return a<7?`${a}d ago`:new Date(t).toLocaleDateString()}var X=10,ee=240;function Z({isDummy:n,onOpenArticle:r}){let i=t(`news`),l=a(),u=e(),d=s(),[g,_]=C(``),v=te(g,300),S=v.length>=2,D=d.previewData?.newsPosts,O=!n&&Array.isArray(D)&&D.length>0,[A,j]=C(X),{data:M,error:N,loading:P,fetchMore:F}=k({variables:{args:{locale:u,limit:X,offset:0,...S?{query:v}:{}}},skip:n||O,notifyOnNetworkStatusChange:!0});b(()=>{j(X)},[v,O]);let I=c().publicKey,L=p(I&&!n&&!S?h.news(I,u):null,M),R=x(()=>(L?.visitorNewsList?.items??[]).filter(e=>!!e).map(Q),[L]),H=O?(D??[]).filter(e=>!!e&&typeof e==`object`).map(Q):[],U=y(e=>e.title.toLowerCase().includes(v.toLowerCase())||e.excerpt.toLowerCase().includes(v.toLowerCase()),[v]),G=n?S?o(l).filter(U):o(l):O?S?H.filter(U):H:R,q=O||n?G.slice(0,A):G,J=x(()=>n||O?A<G.length:L?.visitorNewsList?.meta?.hasNextPage??!1,[n,O,A,G.length,L]),[Y,Z]=C(!1),$=y(async()=>{if(!(!J||Y)){if(n||O){j(e=>e+X);return}Z(!0);try{await F({variables:{args:{locale:u,limit:X,offset:M?.visitorNewsList?.items?.length??0,...S?{query:v}:{}}},updateQuery:(e,{fetchMoreResult:t})=>{if(!t)return e;let n=new Set,r=[];for(let i of[...e.visitorNewsList?.items??[],...t.visitorNewsList?.items??[]])i&&!n.has(i._id)&&(n.add(i._id),r.push(i));return{...e,visitorNewsList:{...t.visitorNewsList,items:r}}}})}catch(e){console.warn(`[wexio] news load-more failed:`,e)}finally{Z(!1)}}},[J,Y,n,O,S,v,u,F,M]),re=K(`news`),ie=y(e=>{let t=e.currentTarget;t.scrollHeight-t.clientHeight-t.scrollTop<ee&&$()},[$]),ae=G.length>0||S,oe=n&&!f(l)||!n&&!O&&P&&q.length===0;return N&&q.length===0?T(`div`,{className:`flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center`,children:T(`p`,{className:`text-sm text-wx-fg-muted`,children:i(`emptyTitle`)})}):E(m,{followDirection:!0,className:`flex-1`,viewportRef:re,onScroll:ie,children:[ae&&T(W,{value:g,onChange:_,placeholder:i(`searchPlaceholder`)}),T(`div`,{className:`flex flex-col gap-3 px-4 pt-4 pb-6`,children:oe?Array.from({length:3}).map((e,t)=>E(`div`,{className:`overflow-hidden rounded-wx-lg bg-wx-bg-elevated`,children:[T(V,{className:`aspect-[16/10] w-full rounded-none`}),E(`div`,{className:`space-y-2 px-5 py-4`,children:[T(V,{className:`h-3 w-3/4`}),T(V,{className:`h-3 w-1/2`}),T(V,{className:`mt-1 h-2 w-1/3`})]})]},t)):q.length===0?E(`div`,{className:`flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center`,children:[T(`div`,{className:`flex h-14 w-14 items-center justify-center rounded-full bg-wx-bg-elevated text-wx-fg-muted`,children:T(B,{icon:z,size:28})}),T(`p`,{className:`text-base font-semibold text-wx-fg`,children:i(S?`noResults`:`emptyTitle`)}),!S&&T(`p`,{className:`text-sm text-wx-fg-muted`,children:i(`emptyBody`)})]}):E(w,{children:[q.map((e,t)=>T(ne,{item:e,locale:u,delay:t<X?t*.04:0,onClick:()=>r(e.id)},e.id)),Y&&T(`div`,{className:`flex justify-center py-3`,children:T(V,{className:`h-3 w-24`})})]})})]})}function Q(e,t=0){let n=e.coverImageUrl?.url,r=e.externalCoverImageUrl,i=typeof n==`string`?n:typeof r==`string`?r:null,a=e=>Array.isArray(e)?e.map(e=>{if(!e||typeof e!=`object`)return null;let t=e.slug,n=e.label;return typeof t!=`string`||typeof n!=`string`?null:{slug:t,label:n}}).filter(e=>!!e):void 0,o=a(e.tags),s=a(e.categories),c=Array.isArray(e.authors)?e.authors.map(e=>{if(!e||typeof e!=`object`)return null;let t=e.name;if(typeof t!=`string`)return null;let n=e._id,r=e.photo?.url;return{_id:String(n??t),name:t,photo:{url:typeof r==`string`?r:``}}}).filter(e=>!!e):void 0;return{id:String(e._id??e.id??`news-${t}`),title:typeof e.title==`string`?e.title:``,excerpt:typeof e.excerpt==`string`?u(e.excerpt,240):``,publishedAt:typeof e.publishedAt==`string`?e.publishedAt:new Date().toISOString(),coverGradient:[`#1e1f21`,`#121314`],...i?{coverImageUrl:i}:{},...typeof e.upstreamUpdatedAt==`string`?{upstreamUpdatedAt:e.upstreamUpdatedAt}:{},...o&&o.length>0?{tags:o}:{},...s&&s.length>0?{categories:s}:{},...c&&c.length>0?{authors:c}:{},reactionCounts:e.reactionCounts??null}}function te(e,t){let[n,r]=C(e);return b(()=>{let n=setTimeout(()=>r(e),t);return()=>clearTimeout(n)},[e,t]),n}function ne({item:e,locale:i,delay:a,onClick:o}){let s=t(`news`),c=e.categories??(e.category?[e.category]:[]),l=H(e.authors);return E(n.button,{type:`button`,onClick:o,initial:{opacity:0,y:8},animate:{opacity:1,y:0},whileHover:{y:-2},whileTap:{scale:.985},transition:{duration:.2,delay:a},className:r(`block w-full shrink-0 overflow-hidden rounded-wx-lg bg-wx-bg-elevated text-start [overflow-wrap:anywhere]`,`transition-colors hover:bg-wx-bg-elevated-2`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary focus-visible:ring-offset-2 focus-visible:ring-offset-wx-bg`),children:[T(q,{url:e.coverImageUrl,className:`aspect-[16/10]`}),E(`div`,{className:`px-5 py-4`,children:[(c.length>0||l!=null)&&E(`div`,{className:`mb-1.5 flex items-center justify-between gap-2`,children:[T(`div`,{className:`flex min-w-0 flex-wrap gap-1.5`,children:c.slice(0,2).map(e=>T(`span`,{className:`text-[10px] font-semibold uppercase tracking-wide text-wx-primary`,children:e.label},e.slug))}),T(U,{authors:l,className:`shrink-0`})]}),T(_,{className:`text-sm`,children:e.title}),e.excerpt&&T(g,{className:`mt-1 line-clamp-4 text-xs`,children:e.excerpt}),E(`p`,{className:`mt-2 flex items-center gap-2 text-xs text-wx-fg-subtle`,children:[T(`span`,{children:new Date(e.publishedAt).toLocaleDateString(i,{month:`short`,day:`numeric`,year:`numeric`})}),J(e)&&e.upstreamUpdatedAt&&T(`span`,{className:`rounded-full bg-wx-bg-elevated px-1.5 py-0.5 text-[10px] font-medium text-wx-fg-muted`,title:new Date(e.upstreamUpdatedAt).toLocaleString(i),children:s(`editedAt`,{when:Y(e.upstreamUpdatedAt)})})]}),e.tags&&e.tags.length>0&&T(`div`,{className:`mt-2.5 flex flex-wrap gap-1`,children:e.tags.slice(0,4).map(e=>T(`span`,{className:`rounded-full bg-wx-bg-elevated px-2 py-0.5 text-[10px] font-medium text-wx-fg-muted`,children:e.label},e.slug))})]})]})}export{F as _,K as a,H as c,z as d,R as f,N as g,j as h,q as i,V as l,L as m,Y as n,W as o,O as p,J as r,U as s,Z as t,B as u};
//# sourceMappingURL=widget-react-PNvF_UGi.js.map