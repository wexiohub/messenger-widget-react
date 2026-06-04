"use client";
import "react";
import "react-dom";
import "react/jsx-runtime";
import "react-dom/client";
import { S as e, a as t, d as n, i as r, l as i, n as a, r as o, t as s, u as c, w as l, y as u } from "./widget-react-DE7AVrCo.js";
import { $ as d, A as f, D as p, E as m, F as h, I as g, L as _, M as v, N as y, O as b, P as x, R as S, S as C, T as w, X as T, Y as E, _ as D, a as O, b as k, c as A, cn as j, d as M, et as N, f as P, fn as F, g as I, h as ee, i as te, j as ne, k as L, l as R, n as re, nn as ie, o as z, pn as ae, r as B, s as oe, t as se, tn as ce, u as le, v as ue, w as de, x as fe, y as pe } from "./widget-react-BfPdgAQ-.js";
import { _ as V, a as me, c as he, d as ge, f as _e, g as ve, h as ye, i as be, l as xe, m as Se, r as Ce, s as we, u as Te } from "./widget-react-BAOIDvhV.js";
import { a as Ee, i as H, n as U, o as De, s as Oe, t as W } from "./widget-react-BxvW64LH.js";
import { a as ke, c as Ae, d as je, f as G, h as Me, i as Ne, l as Pe, m as Fe, p as Ie, t as Le, u as Re } from "./widget-react-DwL_rsx_.js";
import { n as ze, r as Be, t as Ve } from "./widget-react-DOX6j7_Q.js";
import { t as He } from "./widget-react-Dew7YaLU.js";
import { t as Ue } from "./widget-react-D8TPnM9r.js";
import { t as We } from "./widget-react-DSw03RG7.js";
import { t as Ge } from "./widget-react-D-QrEVpv.js";
import { t as Ke } from "./widget-react-Cj_zbk_F.js";
import { t as qe } from "./widget-react-AgErOR36.js";
import * as K from "react";
import Je, { Suspense as Ye, forwardRef as Xe, lazy as Ze, startTransition as Qe, useCallback as q, useEffect as J, useLayoutEffect as $e, useMemo as et, useRef as Y, useState as X } from "react";
import { Fragment as tt, jsx as Z, jsxs as Q } from "react/jsx-runtime";
import * as nt from "react-dom";
import rt, { createPortal as it } from "react-dom";
//#region node_modules/@apollo/client/react/context/ApolloProvider.js
var at = /* @__PURE__ */ l(ce(), 1), ot = function(e) {
	var t = e.client, n = e.children, r = T(), i = at.useContext(r), a = at.useMemo(function() {
		return j(j({}, i), { client: t || i.client });
	}, [i, t]);
	return ie(a.client, 71), at.createElement(r.Provider, { value: a }, n);
}, st;
function ct() {}
function lt() {
	return st || (st = at.createContext(null)), at.useCallback(function() {
		var e = console.error;
		try {
			return console.error = ct, at.useContext(st), !0;
		} catch {
			return !1;
		} finally {
			console.error = e;
		}
	}, []);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useLazyQuery.js
var ut = [
	"refetch",
	"reobserve",
	"fetchMore",
	"updateQuery",
	"startPolling",
	"stopPolling",
	"subscribeToMore"
], dt = [
	"initialFetchPolicy",
	"onCompleted",
	"onError",
	"defaultOptions",
	"partialRefetch",
	"canonizeResults"
], ft = [
	"query",
	"ssr",
	"client",
	"fetchPolicy",
	"nextFetchPolicy",
	"refetchWritePolicy",
	"errorPolicy",
	"pollInterval",
	"notifyOnNetworkStatusChange",
	"returnPartialData",
	"skipPollAttempt"
];
function pt(e, t) {
	if (globalThis.__DEV__ !== !1) {
		var n = t || {};
		g(n, "canonizeResults", "useLazyQuery"), g(n, "variables", "useLazyQuery", "Pass all `variables` to the returned `execute` function instead."), g(n, "context", "useLazyQuery", "Pass `context` to the returned `execute` function instead."), g(n, "onCompleted", "useLazyQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), g(n, "onError", "useLazyQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."), g(n, "defaultOptions", "useLazyQuery", "Pass the options directly to the hook instead."), g(n, "initialFetchPolicy", "useLazyQuery", "Use the `fetchPolicy` option instead."), g(n, "partialRefetch", "useLazyQuery");
	}
	var r = at.useRef(void 0), i = at.useRef(void 0), a = at.useRef(void 0), o = N(t, r.current || {}), s = o?.query ?? e;
	i.current = t, a.current = s;
	var c = j(j({}, o), { skip: !r.current }), l = h(s, c), u = l.obsQueryFields, f = l.result, p = l.client, m = l.resultData, v = l.observable, y = l.onQueryExecuted, b = v.options.initialFetchPolicy || ne(c.defaultOptions, p.defaultOptions), x = at.useReducer(function(e) {
		return e + 1;
	}, 0)[1], S = at.useMemo(function() {
		for (var e = {}, t = function(t) {
			var n = u[t];
			e[t] = function() {
				return globalThis.__DEV__ !== !1 && t === "reobserve" && globalThis.__DEV__ !== !1 && ie.warn(79), r.current || (r.current = Object.create(null), x()), n.apply(this, arguments);
			};
		}, n = 0, i = ut; n < i.length; n++) {
			var a = i[n];
			t(a);
		}
		return e;
	}, [x, u]), C = !!r.current, w = at.useMemo(function() {
		return j(j(j({}, f), S), { called: C });
	}, [
		f,
		S,
		C
	]), T = lt(), E = at.useRef(/* @__PURE__ */ new Set()), D = at.useCallback(function(e) {
		if (globalThis.__DEV__ !== !1) {
			T() && globalThis.__DEV__ !== !1 && ie.warn(80);
			for (var t = 0, n = dt; t < n.length; t++) {
				var o = n[t];
				E.current.has(o) || (d(e || {}, o, "useLazyQuery.execute"), E.current.add(o));
			}
			for (var c = 0, l = ft; c < l.length; c++) {
				var u = l[c];
				E.current.has(u) || (d(e || {}, u, "useLazyQuery.execute", "Please pass the option to the `useLazyQuery` hook instead."), E.current.add(u));
			}
		}
		r.current = e ? j(j({}, e), { fetchPolicy: e.fetchPolicy || b }) : { fetchPolicy: b };
		var f = mt(m, v, p, s, j(j({}, N(i.current, j({ query: a.current }, r.current))), { skip: !1 }), y).then(function(e) {
			return Object.assign(e, S);
		});
		return f.catch(function() {}), f;
	}, [
		T,
		p,
		s,
		S,
		b,
		v,
		m,
		y
	]), O = at.useRef(D);
	return _(function() {
		O.current = D;
	}), [at.useCallback(function() {
		var e = [...arguments];
		return O.current.apply(O, e);
	}, []), w];
}
function mt(e, t, n, r, i, a) {
	var o = f(n, i.query || r, i, !1)(t), s = t.reobserveAsConcast(v(t, n, i, o));
	return a(o), new Promise(function(r) {
		var i;
		s.subscribe({
			next: function(e) {
				i = e;
			},
			error: function() {
				r(y(t.getCurrentResult(), e.previousData, t, n));
			},
			complete: function() {
				r(y(t.maskResult(i), e.previousData, t, n));
			}
		});
	});
}
//#endregion
//#region node_modules/next-intl/dist/esm/production/shared/NextIntlClientProvider.js
function ht({ locale: e, ...t }) {
	if (!e) throw Error(void 0);
	return Z(Oe, {
		locale: e,
		...t
	});
}
//#endregion
//#region lib/ai-assistant.ts
var gt = "Gaia", _t = {}, vt = S`
    mutation StartAnonymousVisitor($input: VisitorAnonymousAuthInput!) {
  startAnonymousVisitor(input: $input) {
    token
    expiresIn
    chatId
    peopleId
    visitorId
    kind
    displayName
    shortHandle
  }
}
    `;
function yt(e) {
	return L(vt, {
		..._t,
		...e
	});
}
var bt = S`
    mutation StartIdentifiedVisitor($input: VisitorIdentifiedAuthInput!) {
  startIdentifiedVisitor(input: $input) {
    token
    expiresIn
    chatId
    peopleId
    visitorId
    kind
    displayName
    shortHandle
  }
}
    `;
function xt(e) {
	return L(bt, {
		..._t,
		...e
	});
}
var St = S`
    mutation SendVisitorMessage($input: VisitorSendMessageInput!) {
  sendVisitorMessage(input: $input) {
    ok
    messageId
  }
}
    `;
function Ct(e) {
	return L(St, {
		..._t,
		...e
	});
}
S`
    mutation MarkVisitorMessageRead($messageId: String!) {
  markVisitorMessageRead(messageId: $messageId) {
    ok
  }
}
    `;
var wt = S`
    mutation MarkVisitorChatRead($chatId: String!) {
  markVisitorChatRead(chatId: $chatId) {
    count
  }
}
    `;
function Tt(e) {
	return L(wt, {
		..._t,
		...e
	});
}
var $ = S`
    query VisitorChatUnread($chatId: String!) {
  visitorChatUnread(chatId: $chatId) {
    count
    lastMessage {
      id
      text
      buttons
      createdAt
      sender {
        kind
        name
        avatar
      }
    }
  }
}
    `;
function Et(e) {
	return pt($, {
		..._t,
		...e
	});
}
var Dt = S`
    mutation SignalVisitorTyping {
  signalVisitorTyping {
    ok
  }
}
    `;
function Ot(e) {
	return L(Dt, {
		..._t,
		...e
	});
}
var kt = S`
    mutation UploadVisitorMedia($input: VisitorUploadInputType!) {
  uploadVisitorMedia(input: $input) {
    url
    mediaId
    mimetype
    size
  }
}
    `;
function At(e) {
	return L(kt, {
		..._t,
		...e
	});
}
var jt = S`
    mutation RemoveVisitorMedia($mediaId: ID!) {
  removeVisitorMedia(mediaId: $mediaId) {
    ok
  }
}
    `;
function Mt(e) {
	return L(jt, {
		..._t,
		...e
	});
}
var Nt = S`
    mutation SubmitVisitorPrechat($input: VisitorPrechatInput!) {
  submitVisitorPrechat(input: $input) {
    ok
  }
}
    `;
function Pt(e) {
	return L(Nt, {
		..._t,
		...e
	});
}
var Ft = S`
    query VisitorChatHistory($chatId: String!, $before: String, $limit: Int) {
  visitorChatHistory(chatId: $chatId, before: $before, limit: $limit)
}
    `;
function It(e) {
	return x(Ft, {
		..._t,
		...e
	});
}
var Lt = S`
    query VisitorChatRecentInbound($chatId: String!) {
  visitorChatRecentInbound(chatId: $chatId) {
    id
    text
    createdAt
    sender {
      kind
      name
      avatar
    }
  }
}
    `;
function Rt(e) {
	return x(Lt, {
		..._t,
		...e
	});
}
//#endregion
//#region lib/graphql/queries/generated/profile.generated.tsx
var zt = {}, Bt = S`
    query VisitorProfilePreferences {
  visitorProfile {
    preferences {
      language
      desktopNotifications
      themeMode
    }
    themeModeEditable
  }
}
    `;
function Vt(e) {
	return x(Bt, {
		...zt,
		...e
	});
}
var Ht = S`
    query VisitorProfile {
  visitorProfile {
    fields {
      key
      label
      type
      required
      pinned
      options
      value
    }
    preferences {
      language
      desktopNotifications
      themeMode
    }
    themeModeEditable
  }
}
    `;
function Ut(e) {
	return x(Ht, {
		...zt,
		...e
	});
}
var Wt = S`
    mutation UpdateVisitorProfile($input: UpdateVisitorProfileInput!) {
  updateVisitorProfile(input: $input) {
    fields {
      key
      label
      type
      required
      pinned
      options
      value
    }
    preferences {
      language
      desktopNotifications
      themeMode
    }
    themeModeEditable
  }
}
    `;
function Gt(e) {
	return L(Wt, {
		...zt,
		...e
	});
}
Array.from({ length: 21 }, (e, t) => `wx-nt_${t + 1}`);
var Kt = "wx-nt_";
function qt(e) {
	return e ? e.startsWith("http://") || e.startsWith("https://") ? e : e.startsWith(Kt) ? p(`/sounds/${e}.wav`) : null : null;
}
var Jt = "wexio:sound-muted";
//#endregion
//#region lib/use-sound-player.ts
function Yt(e) {
	let [t, n] = X(!1), r = Y(null), i = Y(null);
	J(() => {
		typeof window > "u" || n(localStorage.getItem(Jt) === "1");
	}, []), J(() => {
		if (typeof window > "u") return;
		r.current?.pause(), i.current?.pause();
		let t = qt(e?.inboundSoundId), n = qt(e?.outboundSoundId), a = typeof e?.volume == "number" ? Math.max(0, Math.min(1, e.volume)) : .5;
		return r.current = t ? Xt(t, a) : null, i.current = n ? Xt(n, a) : null, () => {
			r.current?.pause(), i.current?.pause();
		};
	}, [e]);
	let a = q(() => {
		n((e) => {
			let t = !e;
			try {
				localStorage.setItem(Jt, t ? "1" : "0");
			} catch {}
			return t;
		});
	}, []), o = q((n) => {
		if (t || e && e.enabled === !1) return;
		let a = n === "inbound" ? r.current : i.current;
		a && (a.currentTime = 0, a.play().catch(() => {}));
	}, [t, e]);
	return {
		muted: t,
		toggleMuted: a,
		playInbound: () => o("inbound"),
		playOutbound: () => o("outbound")
	};
}
function Xt(e, t) {
	let n = new Audio(e);
	return n.preload = "auto", n.volume = t, n;
}
//#endregion
//#region lib/use-theme-mode.ts
function Zt(e, t) {
	let [n, r] = X("dark"), i = m().themeRoot;
	return J(() => {
		let n = new URL(window.location.href).searchParams.get("theme"), a = e && Qt(e) ? e : null, o = t?.allowed !== !1, s = t?.preference && Qt(t.preference) ? t.preference : null, c = (() => {
			if (n && Qt(n)) return n;
			if (o && s && s !== "auto") return s;
			if (a && a !== "auto") return a;
			if (o) {
				let e = localStorage.getItem("wexio:theme");
				if (e && Qt(e)) return e;
			}
			return "auto";
		})(), l = i ?? document.documentElement, u = () => {
			let e = c === "auto" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : c;
			l.dataset.theme = e, r(e);
		};
		u();
		let d = window.matchMedia("(prefers-color-scheme: dark)"), f = () => c === "auto" && u();
		d.addEventListener?.("change", f);
		let p = (e) => {
			if (!e.data || typeof e.data != "object" || e.data.type !== "wexio:preview-theme-mode:v1") return;
			let t = e.data.mode;
			t && Qt(t) && (c = t, u());
		};
		return window.addEventListener("message", p), () => {
			d.removeEventListener?.("change", f), window.removeEventListener("message", p);
		};
	}, [
		e,
		i,
		t?.preference,
		t?.allowed
	]), n;
}
function Qt(e) {
	return e === "light" || e === "dark" || e === "auto";
}
//#endregion
//#region lib/use-visitor-auth.ts
var $t = (e) => e ? `wexio:visitor-id:${e}` : "wexio:visitor-id", en = (e) => e ? `wexio:visitor-session:${e}` : "wexio:visitor-session", tn = "wexio:visitor-id", nn = "wexio:visitor-session";
function rn(e) {
	if (!(typeof window > "u")) try {
		let t = {
			token: e.token,
			chatId: e.chatId,
			peopleId: e.peopleId,
			displayName: e.displayName,
			expiresAt: Date.now() + e.expiresIn * 1e3
		};
		localStorage.setItem(en(_e()), JSON.stringify(t));
	} catch {}
}
function an() {
	if (typeof window > "u") return null;
	let e = _e();
	try {
		let t = localStorage.getItem(en(e));
		if (!t && e) {
			let n = localStorage.getItem(nn);
			n && (localStorage.setItem(en(e), n), localStorage.removeItem(nn), t = n);
		}
		if (!t) return null;
		let n = JSON.parse(t);
		return typeof n?.token != "string" || typeof n?.expiresAt != "number" || n.expiresAt - sn * 1e3 <= Date.now() ? (localStorage.removeItem(en(e)), null) : n;
	} catch {
		return null;
	}
}
function on() {
	if (!(typeof window > "u")) try {
		localStorage.removeItem(en(_e())), localStorage.removeItem(nn);
	} catch {}
}
var sn = 30, cn = "wexio:prechat-submitted:";
function ln() {
	if (V(null), on(), !(typeof window > "u")) try {
		let e = _e();
		localStorage.removeItem($t(e)), localStorage.removeItem(tn);
		for (let e = localStorage.length - 1; e >= 0; e--) {
			let t = localStorage.key(e);
			t?.startsWith(cn) && localStorage.removeItem(t);
		}
	} catch {}
}
function un(e) {
	let [t, n] = X({
		token: null,
		chatId: null,
		peopleId: null,
		displayName: null,
		isAuthenticating: e.enabled,
		error: null,
		verified: !1
	}), [r] = yt(), [i] = xt(), a = Y(e.identity ?? null);
	a.current = e.identity ?? null;
	let o = Y(null), s = Y(0), c = q(async (e) => {
		try {
			let t = fn(), l = a.current, u;
			if (l && (l.googleIdToken || l.jwt || l.userId && l.userHash)) {
				let n = await i({ variables: { input: {
					visitorId: t,
					...l.googleIdToken ? { googleIdToken: l.googleIdToken } : l.jwt ? { jwt: l.jwt } : {
						userId: l.userId,
						userHash: l.userHash
					},
					name: l.name,
					email: l.email,
					phone: l.phone,
					contextSnapshot: l.attributes ? JSON.stringify(l.attributes) : void 0
				} } });
				if (e.current) return;
				u = n.data?.startIdentifiedVisitor;
			} else {
				let n = await r({ variables: { input: { visitorId: t } } });
				if (e.current) return;
				u = n.data?.startAnonymousVisitor;
			}
			if (!u) {
				n((e) => ({
					...e,
					isAuthenticating: !1,
					error: "handshake_empty_response"
				}));
				return;
			}
			if (u.visitorId && u.visitorId !== t) try {
				localStorage.setItem($t(_e()), u.visitorId);
			} catch {}
			V(u.token), n({
				token: u.token,
				chatId: u.chatId,
				peopleId: u.peopleId,
				displayName: u.displayName,
				isAuthenticating: !1,
				error: null,
				verified: u.kind === "identified"
			}), u.kind === "identified" ? rn({
				token: u.token,
				chatId: u.chatId,
				peopleId: u.peopleId,
				displayName: u.displayName,
				expiresIn: u.expiresIn
			}) : on();
			let d = Math.max(5e3, (u.expiresIn - sn) * 1e3);
			o.current && clearTimeout(o.current), s.current = Date.now() + d, o.current = setTimeout(() => {
				e.current || c(e);
			}, d);
		} catch (t) {
			if (e.current) return;
			n({
				token: null,
				chatId: null,
				peopleId: null,
				displayName: null,
				isAuthenticating: !1,
				error: t.message,
				verified: !1
			});
		}
	}, [r, i]), l = e.identity, u = l?.googleIdToken ? `google:${l.googleIdToken}` : l?.jwt ? `jwt:${l.jwt}` : l?.userId && l?.userHash ? `${l.userId}:${l.userHash}` : null;
	return J(() => {
		if (!e.enabled) {
			n((e) => ({
				...e,
				isAuthenticating: !1
			}));
			return;
		}
		if (typeof window > "u") return;
		let t = { current: !1 }, r = a.current ? null : an();
		if (r) {
			V(r.token), n({
				token: r.token,
				chatId: r.chatId,
				peopleId: r.peopleId,
				displayName: r.displayName,
				isAuthenticating: !1,
				error: null,
				verified: !0
			});
			let e = Math.max(0, r.expiresAt - Date.now());
			s.current = r.expiresAt, o.current && clearTimeout(o.current), o.current = setTimeout(() => {
				t.current || (on(), c(t));
			}, e);
		} else c(t);
		let i = () => {
			t.current || typeof document > "u" || document.hidden || s.current !== 0 && Date.now() >= s.current && c(t);
		};
		return document.addEventListener("visibilitychange", i), () => {
			t.current = !0, document.removeEventListener("visibilitychange", i), o.current && (clearTimeout(o.current), o.current = null);
		};
	}, [
		e.enabled,
		c,
		u,
		e.epoch
	]), J(() => {
		if (!e.enabled || typeof window > "u") return;
		let t = !1;
		return ye(() => {
			t || (t = !0, on(), V(null), c({ current: !1 }).finally(() => {
				t = !1;
			}));
		}), Se(() => {
			if (!t) {
				t = !0, on(), V(null);
				try {
					let e = _e();
					localStorage.removeItem($t(e));
				} catch {}
				c({ current: !1 }).finally(() => {
					t = !1;
				});
			}
		}), () => {
			ye(null), Se(null);
		};
	}, [e.enabled, c]), t;
}
function dn(e) {
	let [t, n] = X({
		identity: null,
		prefill: null
	});
	return J(() => {
		if (e.visitorIdentity || e.visitorPrefill || typeof window > "u") return;
		let t = (e) => {
			let t = e.data;
			if (!(!t || typeof t != "object")) if (t.type === "wexio:identify:v1") {
				let e = t.user;
				if (!e || typeof e != "object") return;
				let r = typeof e.googleIdToken == "string", i = typeof e.jwt == "string", a = typeof e.userId == "string" && typeof e.userHash == "string";
				if (!r && !i && !a) return;
				n((t) => ({
					...t,
					identity: {
						googleIdToken: r ? e.googleIdToken : void 0,
						jwt: i ? e.jwt : void 0,
						userId: typeof e.userId == "string" ? e.userId : void 0,
						userHash: typeof e.userHash == "string" ? e.userHash : void 0,
						name: typeof e.name == "string" ? e.name : void 0,
						email: typeof e.email == "string" ? e.email : void 0,
						phone: typeof e.phone == "string" ? e.phone : void 0,
						attributes: e.attributes && typeof e.attributes == "object" ? e.attributes : void 0
					}
				}));
			} else if (t.type === "wexio:prefill:v1") {
				let e = t.prefill;
				if (!e || typeof e != "object") return;
				n((t) => ({
					...t,
					prefill: {
						name: typeof e.name == "string" ? e.name : void 0,
						email: typeof e.email == "string" ? e.email : void 0,
						phone: typeof e.phone == "string" ? e.phone : void 0
					}
				}));
			} else t.type === "wexio:shutdown:v1" && n({
				identity: null,
				prefill: null
			});
		};
		return window.addEventListener("message", t), window.parent?.postMessage({ type: "wexio:widget:ready:v1" }, "*"), () => window.removeEventListener("message", t);
	}, [e.visitorIdentity, e.visitorPrefill]), {
		identity: e.visitorIdentity ?? t.identity,
		prefill: e.visitorPrefill ?? t.prefill
	};
}
function fn() {
	try {
		let e = _e(), t = $t(e), n = localStorage.getItem(t);
		if (n) return n;
		if (e) {
			let e = localStorage.getItem(tn);
			if (e) return localStorage.setItem(t, e), localStorage.removeItem(tn), e;
		}
		let r = pn();
		return localStorage.setItem(t, r), r;
	} catch {
		return pn();
	}
}
function pn() {
	if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
	let e = new Uint8Array(16);
	if (typeof crypto < "u" && crypto.getRandomValues) crypto.getRandomValues(e);
	else for (let t = 0; t < 16; t++) e[t] = Math.floor(Math.random() * 256);
	return Array.from(e, (e) => e.toString(16).padStart(2, "0")).join("");
}
//#endregion
//#region lib/locales.ts
var mn = ["en", "uk"];
function hn(e) {
	return typeof e == "string" && mn.includes(e);
}
//#endregion
//#region lib/runtime-locale.ts
var gn = null, _n = /* @__PURE__ */ new Set();
function vn(e) {
	if (hn(e) && gn !== e) {
		gn = e;
		for (let t of _n) t(e);
	}
}
//#endregion
//#region lib/use-visitor-profile-preferences.ts
var yn = {
	themeMode: null,
	themeModeEditable: !0,
	language: null,
	desktopNotifications: !1,
	loaded: !1
};
function bn(e) {
	let { data: t } = Vt({ skip: !e.enabled }), n = t?.visitorProfile, r = n ? {
		themeMode: xn(n.preferences.themeMode),
		themeModeEditable: n.themeModeEditable,
		language: n.preferences.language ?? null,
		desktopNotifications: !!n.preferences.desktopNotifications,
		loaded: !0
	} : e.enabled ? yn : {
		...yn,
		loaded: !0
	};
	return J(() => {
		if (r.loaded && r.language) {
			try {
				document.cookie = `wexio-locale=${encodeURIComponent(r.language)}; path=/; max-age=${3600 * 24 * 365}; samesite=lax`;
			} catch {}
			vn(r.language);
		}
	}, [r.loaded, r.language]), r;
}
function xn(e) {
	if (typeof e != "string") return null;
	let t = e.toLowerCase();
	return t === "light" || t === "dark" ? t : t === "auto" || t === "system" ? "auto" : null;
}
//#endregion
//#region lib/use-visitor-realtime.ts
function Sn({ chatId: e, token: t, enabled: n = !0, onMessage: r }) {
	let i = Y(r);
	J(() => {
		i.current = r;
	}, [r]), J(() => {
		if (!n || !e || !t || typeof window > "u") return;
		let r = _e();
		if (!r) return;
		let a = `${de()}/api/web/realtime/${encodeURIComponent(e)}?token=${encodeURIComponent(t)}&publicKey=${encodeURIComponent(r)}`, o = new EventSource(a, { withCredentials: !1 }), s = (e) => {
			try {
				let t = JSON.parse(e.data);
				i.current(t);
			} catch {
				console.warn("[wexio] unparseable SSE frame", e.data);
			}
		};
		return o.addEventListener("message", s), o.addEventListener("messageUpdate", s), () => {
			o.removeEventListener("message", s), o.removeEventListener("messageUpdate", s), o.close();
		};
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region dummy/messages.ts
function Cn(e) {
	return [{
		kind: "SYSTEM",
		text: e.raw("messenger.welcome.system")
	}, {
		kind: "HINT",
		text: e.raw("messenger.welcome.hint")
	}];
}
var wn = [];
function Tn(e) {
	let t = e.raw("conversation.visitorName");
	return wn.map((n) => {
		let r = `conversation.messages.${n.id}`, i = {
			id: n.id,
			direction: n.direction,
			text: e.raw(`${r}.text`),
			ageLabel: e.raw(`${r}.ageLabel`),
			sender: {
				kind: n.sender.kind,
				name: n.sender.kind === "visitor" ? t : n.sender.name ?? ""
			}
		};
		if (n.buttons) {
			let t = e.raw(`${r}.buttons`);
			i.buttons = n.buttons.map((e, n) => ({
				payload: e.payload,
				text: t[n] ?? ""
			}));
		}
		if (n.media) {
			let t = e.raw(`${r}.mediaAlts`);
			i.media = n.media.map((e, n) => ({
				...e,
				alt: t[n] ?? ""
			}));
		}
		return n.deliveryStatus && (i.deliveryStatus = n.deliveryStatus), i;
	});
}
//#endregion
//#region lib/use-visitor-unread.ts
function En({ chatId: e, isDummy: t }) {
	let n = H("demo"), [r, i] = X(!1), [a, o] = X(0), [s, c] = X(null), l = Y(/* @__PURE__ */ new Set()), u = Y(null), d = Y(!1), [f] = Et({ fetchPolicy: "network-only" });
	J(() => {
		t || !e || u.current !== e && (u.current = e, l.current = /* @__PURE__ */ new Set(), d.current = !1, f({ variables: { chatId: e } }).then((e) => {
			if (d.current) return;
			let t = e.data?.visitorChatUnread;
			if (t) if (o(t.count ?? 0), t.lastMessage) {
				let e = {
					id: t.lastMessage.id,
					text: t.lastMessage.text ?? null,
					sender: {
						kind: t.lastMessage.sender.kind,
						name: t.lastMessage.sender.name,
						avatar: t.lastMessage.sender.avatar ?? void 0
					},
					buttons: On(t.lastMessage.buttons)
				};
				l.current.add(e.id), c(e);
			} else c(null);
		}).catch(() => {}));
	}, [
		e,
		t,
		f
	]);
	let p = q(() => {
		if (t) {
			i(!0);
			return;
		}
		o(0), c(null), d.current = !0;
	}, [t]), m = q((e) => {
		if (t || e.kind === "typing" || e.kind === "read-receipt") return;
		let n = e.from ?? e.sender;
		if (n?.kind === "visitor") return;
		let r = e.externalMessageId;
		if (!r || l.current.has(r)) return;
		l.current.add(r), o((e) => e + 1);
		let i = Array.isArray(e.buttons) ? e.buttons.map((e) => ({
			text: e.label,
			payload: e.value
		})) : [];
		c({
			id: r,
			text: e.text ?? null,
			sender: {
				kind: n?.kind ?? "operator",
				name: n?.name ?? "",
				...n?.avatar ? { avatar: n.avatar } : {}
			},
			buttons: i
		});
	}, [t]), h = q((e) => {
		if (t || e.length === 0) return;
		let n = 0;
		for (let t of e) l.current.has(t) && (l.current.delete(t), n += 1);
		n > 0 && o((e) => Math.max(0, e - n)), c((t) => t && (e.includes(t.id) ? null : t));
	}, [t]);
	if (t) {
		let e = r ? null : Dn(n);
		return {
			count: +!!e,
			lastMessage: e,
			clear: p,
			noteInbound: m,
			noteRead: h
		};
	}
	return {
		count: a,
		lastMessage: s,
		clear: p,
		noteInbound: m,
		noteRead: h
	};
}
function Dn(e) {
	let t = Tn(e);
	for (let e = t.length - 1; e >= 0; e--) {
		let n = t[e];
		if (n.direction === "OUTBOUND") return {
			id: n.id,
			text: n.text,
			sender: {
				kind: n.sender.kind,
				name: n.sender.name
			},
			buttons: n.buttons?.map((e) => ({
				text: e.text,
				payload: e.payload
			})) ?? []
		};
	}
	return null;
}
function On(e) {
	return Array.isArray(e) ? e.filter((e) => typeof e == "object" && !!e).map((e) => {
		let t = kn(e.text, e.label) ?? "";
		return {
			text: t,
			payload: kn(e.payload, e.value) ?? t
		};
	}).filter((e) => e.text.length > 0) : [];
}
function kn(...e) {
	for (let t of e) if (typeof t == "string" && t.length > 0) return t;
}
//#endregion
//#region lib/widget-route.ts
function An(e) {
	return e.kind === "home" || e.kind === "help" || e.kind === "news" || e.kind === "profile";
}
function jn(e, t) {
	switch (e.kind) {
		case "messages": return t.home ? { kind: "home" } : t.help ? { kind: "help" } : t.news ? { kind: "news" } : t.profile ? { kind: "profile" } : { kind: "messages" };
		case "help-category": return { kind: "help" };
		case "help-article": return e.from === "category" && e.fromCategoryId ? {
			kind: "help-category",
			categoryId: e.fromCategoryId
		} : { kind: "help" };
		case "news-article": return { kind: "news" };
		default: return { kind: "home" };
	}
}
function Mn(e) {
	switch (e.kind) {
		case "home": return "home";
		case "messages": return "messages";
		case "help":
		case "help-category":
		case "help-article": return "help";
		case "news":
		case "news-article": return "news";
		case "profile": return "profile";
	}
}
function Nn(e, t) {
	return e === "home" ? t.home : e === "messages" ? t.messenger : e === "help" ? t.help : e === "news" ? t.news : !!t.profile;
}
function Pn(e) {
	return +!!e.home + +!!e.messenger + +!!e.help + +!!e.news + +!!e.profile;
}
function Fn(e, t) {
	if (Nn(e, t)) return e;
	for (let e of [
		"home",
		"messages",
		"help",
		"news",
		"profile"
	]) if (Nn(e, t)) return e;
	return e;
}
var In = W("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]), Ln = W("bell", [["path", {
	d: "M10.268 21a2 2 0 0 0 3.464 0",
	key: "vwvbt9"
}], ["path", {
	d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
	key: "11g9vi"
}]]), Rn = W("book", [["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}]]), zn = W("bookmark", [["path", {
	d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
	key: "oz39mx"
}]]), Bn = W("camera", [["path", {
	d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
	key: "18u6gg"
}], ["circle", {
	cx: "12",
	cy: "13",
	r: "3",
	key: "1vg3eu"
}]]), Vn = W("circle-question-mark", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
		key: "1u773s"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), Hn = W("command", [["path", {
	d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
	key: "11bfej"
}]]), Un = W("file-text", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]), Wn = W("gamepad-2", [
	["line", {
		x1: "6",
		x2: "10",
		y1: "11",
		y2: "11",
		key: "1gktln"
	}],
	["line", {
		x1: "8",
		x2: "8",
		y1: "9",
		y2: "13",
		key: "qnk9ow"
	}],
	["line", {
		x1: "15",
		x2: "15.01",
		y1: "12",
		y2: "12",
		key: "krot7o"
	}],
	["line", {
		x1: "18",
		x2: "18.01",
		y1: "10",
		y2: "10",
		key: "1lcuu1"
	}],
	["path", {
		d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
		key: "mfqc10"
	}]
]), Gn = W("hash", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "9",
		y2: "9",
		key: "4lhtct"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "15",
		y2: "15",
		key: "vyu0kd"
	}],
	["line", {
		x1: "10",
		x2: "8",
		y1: "3",
		y2: "21",
		key: "1ggp8o"
	}],
	["line", {
		x1: "16",
		x2: "14",
		y1: "3",
		y2: "21",
		key: "weycgp"
	}]
]), Kn = W("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]), qn = W("image-plus", [
	["path", {
		d: "M16 5h6",
		key: "1vod17"
	}],
	["path", {
		d: "M19 2v6",
		key: "4bpg5p"
	}],
	["path", {
		d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
		key: "1ue2ih"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]), Jn = W("lightbulb", [
	["path", {
		d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
		key: "1gvzjb"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]), Yn = W("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]), Xn = W("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]), Zn = W("message-circle-more", [
	["path", {
		d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
		key: "1sd12s"
	}],
	["path", {
		d: "M8 12h.01",
		key: "czm47f"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M16 12h.01",
		key: "1l6xoz"
	}]
]), Qn = W("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]), $n = W("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]), er = W("monitor", [
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "21",
		y2: "21",
		key: "1svkeh"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "17",
		y2: "21",
		key: "vw1qmm"
	}]
]), tr = W("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]), nr = W("paperclip", [["path", {
	d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
	key: "1miecu"
}]]), rr = W("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]), ir = W("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), ar = W("shield", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}]]), or = W("smile", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M8 14s1.5 2 4 2 4-2 4-2",
		key: "1y1vjs"
	}],
	["line", {
		x1: "9",
		x2: "9.01",
		y1: "9",
		y2: "9",
		key: "yxxnd0"
	}],
	["line", {
		x1: "15",
		x2: "15.01",
		y1: "9",
		y2: "9",
		key: "1p4y9e"
	}]
]), sr = W("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]), cr = W("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]), lr = W("sun", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "m17.66 17.66 1.41 1.41",
		key: "ptbguv"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "m6.34 17.66-1.41 1.41",
		key: "1m8zz5"
	}],
	["path", {
		d: "m19.07 4.93-1.41 1.41",
		key: "1shlcs"
	}]
]), ur = W("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), dr = W("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]), fr = W("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]), pr = W("video", [["path", {
	d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
	key: "ftymec"
}], ["rect", {
	x: "2",
	y: "6",
	width: "14",
	height: "12",
	rx: "2",
	key: "158x01"
}]]), mr = W("volume-2", [
	["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}],
	["path", {
		d: "M16 9a5 5 0 0 1 0 6",
		key: "1q6k2b"
	}],
	["path", {
		d: "M19.364 18.364a9 9 0 0 0 0-12.728",
		key: "ijwkga"
	}]
]), hr = W("volume-x", [
	["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}],
	["line", {
		x1: "22",
		x2: "16",
		y1: "9",
		y2: "15",
		key: "1ewh16"
	}],
	["line", {
		x1: "16",
		x2: "22",
		y1: "9",
		y2: "15",
		key: "5ykzw1"
	}]
]), gr = {
	sm: "h-3.5 min-w-3.5 px-0.75 text-[8px]",
	md: "h-5 min-w-5 px-1.5 text-[10px]"
};
function _r({ count: e, size: t = "sm", className: r }) {
	return /* @__PURE__ */ Z(b, { children: e > 0 && /* @__PURE__ */ Q(n.span, {
		role: "status",
		initial: { scale: 0 },
		animate: { scale: 1 },
		exit: { scale: 0 },
		transition: {
			type: "spring",
			stiffness: 600,
			damping: 9
		},
		className: U("inline-flex", r),
		"aria-label": `${e} unread`,
		children: [
			/* @__PURE__ */ Z("span", {
				"aria-hidden": "true",
				className: "absolute inset-0 -z-10 rounded-full bg-wx-danger opacity-40 blur-[2px]"
			}),
			/* @__PURE__ */ Z(n.span, {
				"aria-hidden": "true",
				initial: !1,
				animate: {
					opacity: [.5, 0],
					scale: [1, 1.55]
				},
				transition: {
					duration: 1.6,
					ease: "easeOut",
					repeat: Infinity,
					repeatDelay: .4
				},
				className: "absolute inset-0 -z-10 rounded-full bg-wx-danger blur-[2px]"
			}),
			/* @__PURE__ */ Z("span", {
				className: U("relative flex items-center justify-center", "rounded-full bg-wx-danger font-bold leading-none text-white", gr[t]),
				children: e > 99 ? "99+" : e
			})
		]
	}, e) });
}
//#endregion
//#region components/widget/bottom-nav.tsx
var vr = [
	"home",
	"messages",
	"help",
	"news",
	"profile"
];
function yr({ active: e, features: t, onChange: n, unreadCount: i = 0 }) {
	let a = H("tabs"), s = Ue(), c = Ue(), l = vr.filter((e) => Sr(e, t));
	return /* @__PURE__ */ Z("div", {
		className: "px-3 pt-2 pb-2",
		children: /* @__PURE__ */ Z("nav", {
			role: "tablist",
			className: U("relative flex w-full items-center gap-1", "rounded-full bg-wx-bg-elevated/70 p-1 backdrop-blur-md", "shadow-[inset_0_0_0_1px_rgb(0_0_0/0.04)]"),
			children: l.map((t) => {
				let l = t === e;
				if (t === "home") return /* @__PURE__ */ Z(br, {
					id: t,
					label: a(t),
					isActive: l,
					onClick: () => n(t),
					parentHandlers: s.parentHandlers,
					icon: /* @__PURE__ */ Z(o, {
						ref: s.iconRef,
						size: 16
					})
				}, t);
				if (t === "messages") return /* @__PURE__ */ Z(br, {
					id: t,
					label: a(t),
					isActive: l,
					onClick: () => n(t),
					parentHandlers: c.parentHandlers,
					icon: /* @__PURE__ */ Z(r, {
						ref: c.iconRef,
						size: 16
					}),
					badgeCount: i
				}, t);
				let u = t === "help" ? Vn : t === "news" ? Fe : dr;
				return /* @__PURE__ */ Z(xr, {
					id: t,
					label: a(t),
					isActive: l,
					onClick: () => n(t),
					Icon: u
				}, t);
			})
		})
	});
}
function br({ id: e, label: t, isActive: r, onClick: i, icon: a, parentHandlers: o, badgeCount: s = 0 }) {
	return /* @__PURE__ */ Q("button", {
		type: "button",
		role: "tab",
		"aria-selected": r,
		onClick: i,
		...o,
		className: U("relative z-10 flex items-center justify-center gap-1.5 rounded-full px-3 py-2", "transition-colors duration-150", r ? "flex-[2_2_0%] text-wx-fg" : "flex-1 text-wx-fg-muted hover:text-wx-fg"),
		children: [
			r && /* @__PURE__ */ Z(n.span, {
				layoutId: "bottom-nav-pill",
				className: "absolute inset-0 -z-10 rounded-full bg-wx-bg shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
				transition: {
					type: "spring",
					stiffness: 420,
					damping: 36
				}
			}),
			/* @__PURE__ */ Q("span", {
				className: "relative inline-flex shrink-0 items-center justify-center",
				children: [a, /* @__PURE__ */ Z(_r, {
					count: s,
					size: "sm",
					className: "absolute -top-1.5 -right-2 z-20"
				})]
			}),
			/* @__PURE__ */ Z(n.span, {
				animate: {
					width: r ? "auto" : 0,
					opacity: +!!r,
					marginLeft: r ? 0 : -4
				},
				initial: !1,
				transition: {
					duration: .2,
					ease: "easeOut"
				},
				className: "overflow-hidden text-[11px] font-semibold tracking-tight whitespace-nowrap",
				children: t
			})
		]
	});
}
function xr({ id: e, label: t, isActive: r, onClick: i, Icon: a }) {
	let o = c();
	return J(() => {
		r && o.start({ scale: [
			1,
			1.15,
			1
		] });
	}, [r, o]), /* @__PURE__ */ Q(n.button, {
		type: "button",
		role: "tab",
		"aria-selected": r,
		onClick: i,
		onHoverStart: () => o.start({ rotate: [
			0,
			-10,
			10,
			0
		] }),
		className: U("relative z-10 flex items-center justify-center gap-1.5 rounded-full px-3 py-2", "transition-colors duration-150", r ? "flex-[2_2_0%] text-wx-fg" : "flex-1 text-wx-fg-muted hover:text-wx-fg"),
		children: [
			r && /* @__PURE__ */ Z(n.span, {
				layoutId: "bottom-nav-pill",
				className: "absolute inset-0 -z-10 rounded-full bg-wx-bg shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
				transition: {
					type: "spring",
					stiffness: 420,
					damping: 36
				}
			}),
			/* @__PURE__ */ Z(n.span, {
				animate: o,
				transition: { duration: .4 },
				children: /* @__PURE__ */ Z(a, {
					size: 16,
					strokeWidth: r ? 2.2 : 1.8
				})
			}),
			/* @__PURE__ */ Z(n.span, {
				animate: {
					width: r ? "auto" : 0,
					opacity: +!!r,
					marginLeft: r ? 0 : -4
				},
				initial: !1,
				transition: {
					duration: .2,
					ease: "easeOut"
				},
				className: "overflow-hidden text-[11px] font-semibold tracking-tight whitespace-nowrap",
				children: t
			})
		]
	});
}
function Sr(e, t) {
	return e === "home" ? t.home : e === "messages" ? t.messenger : e === "help" ? t.help : e === "news" ? t.news : !!t.profile;
}
//#endregion
//#region components/widget/branding-footer.tsx
function Cr({ className: e }) {
	let t = H("branding");
	return /* @__PURE__ */ Q(n.div, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .32,
			delay: .15,
			ease: "easeOut"
		},
		className: U("flex items-center justify-center gap-1 bg-wx-bg px-4 py-1.5 text-[10px] font-medium text-wx-fg-subtle", e),
		children: [/* @__PURE__ */ Z("span", { children: t("poweredBy") }), /* @__PURE__ */ Z("a", {
			href: "https://wexio.io?ref=widget",
			target: "_blank",
			rel: "noopener",
			className: "font-semibold text-wx-fg-muted transition-colors hover:text-wx-fg",
			children: t("wexio")
		})]
	});
}
//#endregion
//#region components/widget/sound-toggle.tsx
function wr({ muted: e, onToggle: t }) {
	return /* @__PURE__ */ Z(we, {
		type: "button",
		variant: "ghost",
		size: "icon",
		"aria-label": H("sound")(e ? "unmute" : "mute"),
		onClick: t,
		children: /* @__PURE__ */ Z(Ie, {
			icon: e ? hr : mr,
			size: 18
		})
	});
}
//#endregion
//#region components/widget/conversation-header.tsx
function Tr({ title: e, subtitle: t, organizationLogoUrl: n, muted: r, onToggleMute: a, onBack: o, onClose: c, expanded: l, onToggleExpand: u }) {
	let d = H("header"), f = H("header"), p = Ue(), m = Ue();
	return /* @__PURE__ */ Q("header", {
		className: U("flex items-center gap-3 border-b border-wx-border bg-wx-bg px-3 py-3"),
		children: [
			o && /* @__PURE__ */ Z(we, {
				type: "button",
				variant: "ghost",
				size: "icon",
				"aria-label": d("back"),
				onClick: o,
				className: "shrink-0",
				...p.parentHandlers,
				children: /* @__PURE__ */ Z(s, {
					ref: p.iconRef,
					size: 18
				})
			}),
			n && /* @__PURE__ */ Z("span", {
				className: "h-9 w-9 shrink-0 overflow-hidden rounded-full",
				children: /* @__PURE__ */ Z("img", {
					src: n,
					alt: e,
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ Q("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ Z("p", {
					className: "truncate text-sm font-semibold text-wx-fg",
					children: e
				}), t && /* @__PURE__ */ Z("p", {
					className: "truncate text-xs text-wx-fg-muted",
					children: t
				})]
			}),
			/* @__PURE__ */ Z(wr, {
				muted: r,
				onToggle: a
			}),
			u && /* @__PURE__ */ Z(we, {
				type: "button",
				variant: "ghost",
				size: "icon",
				"aria-label": f(l ? "collapse" : "expand"),
				onClick: u,
				className: "shrink-0",
				children: /* @__PURE__ */ Z(Er, { expanded: !!l })
			}),
			/* @__PURE__ */ Z(we, {
				type: "button",
				variant: "ghost",
				size: "icon",
				"aria-label": d("close"),
				onClick: c,
				className: "shrink-0",
				...m.parentHandlers,
				children: /* @__PURE__ */ Z(i, {
					ref: m.iconRef,
					size: 18
				})
			})
		]
	});
}
function Er({ expanded: e }) {
	return e ? /* @__PURE__ */ Q("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "18",
		height: "18",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ Z("polyline", { points: "4 14 10 14 10 20" }),
			/* @__PURE__ */ Z("polyline", { points: "20 10 14 10 14 4" }),
			/* @__PURE__ */ Z("line", {
				x1: "14",
				y1: "10",
				x2: "21",
				y2: "3"
			}),
			/* @__PURE__ */ Z("line", {
				x1: "3",
				y1: "21",
				x2: "10",
				y2: "14"
			})
		]
	}) : /* @__PURE__ */ Q("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "18",
		height: "18",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ Z("polyline", { points: "15 3 21 3 21 9" }),
			/* @__PURE__ */ Z("polyline", { points: "9 21 3 21 3 15" }),
			/* @__PURE__ */ Z("line", {
				x1: "21",
				y1: "3",
				x2: "14",
				y2: "10"
			}),
			/* @__PURE__ */ Z("line", {
				x1: "3",
				y1: "21",
				x2: "10",
				y2: "14"
			})
		]
	});
}
//#endregion
//#region components/widget/demo-messages.tsx
function Dr({ children: e }) {
	let { isDummy: t } = fe(), n = De(), r = Ee(), i = "demo" in r, [a, o] = X(null);
	return J(() => {
		if (!t || i) return;
		let e = !0;
		return Or(n).then((t) => {
			e && o(t);
		}), () => {
			e = !1;
		};
	}, [
		t,
		i,
		n
	]), !t || i ? /* @__PURE__ */ Z(tt, { children: e }) : a ? /* @__PURE__ */ Z(ht, {
		locale: n,
		messages: {
			...r,
			demo: a
		},
		children: e
	}) : null;
}
async function Or(e) {
	switch (e) {
		case "uk": return (await import("./widget-react-D-QrEVpv.js").then((e) => e.n)).default;
		default: return (await import("./widget-react-DSw03RG7.js").then((e) => e.n)).default;
	}
}
//#endregion
//#region components/widget/help-list-row.tsx
function kr({ title: e, description: t, meta: r, authors: i, onClick: a, kind: o = "none", delay: s = 0 }) {
	let c = o === "article";
	return /* @__PURE__ */ Q(n.button, {
		type: "button",
		onClick: a,
		initial: {
			opacity: 0,
			y: 4
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .18,
			delay: s
		},
		className: U("group flex w-full items-center gap-3 border-wx-border border-b text-left transition-colors", "hover:bg-wx-bg-elevated/60", "last:border-b-0", c ? "px-5 py-3" : "px-5 py-3.5"),
		children: [/* @__PURE__ */ Q("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [
				/* @__PURE__ */ Z("span", {
					className: U("text-wx-fg", c ? "font-normal text-sm" : "font-semibold text-sm"),
					children: e
				}),
				t && /* @__PURE__ */ Z("span", {
					className: U("leading-snug", c ? "truncate text-[11px] text-wx-fg-subtle" : "text-wx-fg-muted text-xs"),
					children: t
				}),
				r && /* @__PURE__ */ Z("span", {
					className: "text-[11px] text-wx-fg-subtle",
					children: r
				})
			]
		}), /* @__PURE__ */ Q("span", {
			className: "flex shrink-0 items-center gap-2 text-wx-fg-muted",
			children: [i && i.length > 0 && /* @__PURE__ */ Z(Re, { authors: i }), /* @__PURE__ */ Z(ue, {
				size: 16,
				className: "transition-transform group-hover:translate-x-0.5",
				"aria-hidden": "true"
			})]
		})]
	});
}
//#endregion
//#region components/widget/help-category-view.tsx
var Ar = 10, jr = 240, Mr = 3;
function Nr({ categoryId: e, categoryName: t, categoryDescription: r, categoryArticleCount: i, isDummy: a, onOpenCategory: o, onOpenArticle: s }) {
	let c = H("help"), l = H("demo"), u = De(), [d, f] = X(""), p = Fr(d, 300), m = p.length >= 2, { data: h } = be({
		variables: {
			parentId: e,
			locale: u
		},
		skip: a
	}), g = et(() => h?.visitorHelpFolders ?? [], [h]), { data: _, loading: v, fetchMore: y } = me({
		variables: { args: {
			folderId: e,
			locale: u,
			recursive: !1,
			limit: Ar,
			offset: 0
		} },
		skip: a,
		notifyOnNetworkStatusChange: !0
	}), { data: b, loading: x } = me({
		variables: { args: {
			query: p,
			locale: u,
			limit: 10
		} },
		skip: p.length < 2 || a
	}), S = a ? Te(l).find((t) => t.id === e) : null, C = a ? xe(l).filter((t) => t.categoryId === e) : [], w = a ? C.map((e) => ({
		id: e.id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt,
		authors: je(e.authors),
		reactionCounts: null
	})) : (_?.visitorHelpList.items ?? []).map((e) => ({
		id: e._id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt ?? null,
		authors: je(e.authors),
		reactionCounts: e.reactionCounts ?? null
	})), T = a ? xe(l).filter((e) => e.title.toLowerCase().includes(p.toLowerCase()) || e.excerpt.toLowerCase().includes(p.toLowerCase())).map((e) => ({
		id: e.id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt,
		authors: je(e.authors),
		reactionCounts: null
	})) : [], E = (b?.visitorHelpList.items ?? []).map((e) => ({
		id: e._id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt ?? null,
		authors: je(e.authors),
		reactionCounts: e.reactionCounts ?? null
	})), D = m ? a ? T : E : w, O = t ?? S?.title ?? "", k = r ?? S?.description ?? "", A = i ?? S?.articleCount ?? w.length, j = et(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of w) for (let n of t.authors ?? []) e.has(n.id) || e.set(n.id, n);
		return Array.from(e.values());
	}, [w]), N = j.slice(0, Mr), F = Math.max(0, j.length - N.length), I = N[0]?.name ?? "", ee = !m && !a && (_?.visitorHelpList.meta.hasNextPage ?? !1), [te, ne] = X(!1), L = q(async () => {
		if (!(!ee || te)) {
			ne(!0);
			try {
				await y({
					variables: { args: {
						folderId: e,
						locale: u,
						recursive: !1,
						limit: Ar,
						offset: _?.visitorHelpList.items.length ?? 0
					} },
					updateQuery: (e, { fetchMoreResult: t }) => t ? {
						...e,
						visitorHelpList: {
							...t.visitorHelpList,
							items: [...e.visitorHelpList.items, ...t.visitorHelpList.items]
						}
					} : e
				});
			} finally {
				ne(!1);
			}
		}
	}, [
		ee,
		te,
		e,
		u,
		y,
		_
	]), R = q((e) => {
		let t = e.currentTarget;
		t.scrollHeight - t.clientHeight - t.scrollTop < jr && L();
	}, [L]), ie = !a && !m && v && w.length === 0 && g.length === 0;
	return /* @__PURE__ */ Z("div", {
		className: "flex h-full min-h-0 flex-col",
		children: /* @__PURE__ */ Q(re, {
			className: "min-h-0 flex-1",
			onScroll: R,
			children: [
				/* @__PURE__ */ Z(Pe, {
					value: d,
					onChange: f,
					placeholder: c("searchPlaceholder")
				}),
				!m && O && /* @__PURE__ */ Z(n.div, {
					initial: {
						opacity: 0,
						y: 4
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .2 },
					className: "border-wx-border border-b px-5 py-5",
					children: /* @__PURE__ */ Q("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ Q("div", {
							className: "flex min-w-0 flex-1 flex-col gap-1.5",
							children: [
								/* @__PURE__ */ Z("h2", {
									className: "font-semibold text-lg text-wx-fg",
									children: O
								}),
								k && /* @__PURE__ */ Z("p", {
									className: "text-sm text-wx-fg-muted leading-snug",
									children: k
								}),
								/* @__PURE__ */ Q("div", {
									className: "mt-1 flex flex-col gap-0.5 text-wx-fg-subtle text-xs",
									children: [/* @__PURE__ */ Z("span", { children: c("articlesCount", { count: A }) }), I && /* @__PURE__ */ Z("span", { children: c("authorsByline", {
										first: I,
										remaining: F
									}) })]
								})
							]
						}), N.length > 0 && /* @__PURE__ */ Z("div", {
							className: "shrink-0",
							children: /* @__PURE__ */ Z(Re, { authors: N })
						})]
					})
				}),
				ie ? /* @__PURE__ */ Z(Pr, {}) : D.length === 0 && g.length === 0 ? /* @__PURE__ */ Z("div", {
					className: "px-5 py-6",
					children: /* @__PURE__ */ Z(M, { children: /* @__PURE__ */ Z(P, {
						className: "py-8 text-center",
						children: /* @__PURE__ */ Z("p", {
							className: "text-sm text-wx-fg-muted",
							children: c(m ? "noResults" : "emptyTitle")
						})
					}) })
				}) : /* @__PURE__ */ Q("div", {
					className: "flex flex-col",
					children: [
						D.map((e, t) => /* @__PURE__ */ Z(kr, {
							title: e.title,
							description: e.excerpt,
							authors: e.authors,
							kind: "article",
							onClick: () => s(e.slug),
							delay: Math.min(t, Ar) * .03
						}, e.id)),
						!m && g.map((e, t) => /* @__PURE__ */ Z(kr, {
							title: e.name,
							description: e.description,
							meta: (e.articleCount ?? 0) > 0 ? c("articlesCount", { count: e.articleCount ?? 0 }) : void 0,
							kind: "folder",
							onClick: () => o(e._id, {
								name: e.name,
								description: e.description ?? void 0,
								articleCount: e.articleCount ?? 0
							}),
							delay: (D.length + t) * .03
						}, e._id)),
						(te || x) && /* @__PURE__ */ Z("div", {
							className: "flex justify-center py-3",
							children: /* @__PURE__ */ Z(G, { className: "h-3 w-24" })
						})
					]
				})
			]
		})
	});
}
function Pr() {
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-col",
		children: Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ Q("div", {
			className: "flex items-center gap-3 border-wx-border border-b px-5 py-4 last:border-b-0",
			children: [/* @__PURE__ */ Q("div", {
				className: "flex min-w-0 flex-1 flex-col gap-2",
				children: [/* @__PURE__ */ Z(G, { className: "h-4 w-32 rounded" }), /* @__PURE__ */ Z(G, { className: "h-3 w-56 rounded" })]
			}), /* @__PURE__ */ Z(G, { className: "h-4 w-4 rounded" })]
		}, t))
	});
}
function Fr(e, t) {
	let [n, r] = X(e);
	return J(() => {
		let n = setTimeout(() => r(e), t);
		return () => clearTimeout(n);
	}, [e, t]), n;
}
//#endregion
//#region lib/strip-html.ts
function Ir(e) {
	if (!e) return "";
	if (!/[<&]/.test(e)) return e;
	if (typeof document < "u") {
		let t = document.createElement("div");
		return t.innerHTML = e, (t.textContent ?? "").replace(/\s+/g, " ").trim();
	}
	return e.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;/g, "'").replace(/\s+/g, " ").trim();
}
//#endregion
//#region components/widget/launcher-peek.tsx
function Lr({ message: e, onOpen: t, onDismiss: r, onSendButton: i, position: a = "right", embedded: o = !1 }) {
	let s = H("peek"), c = a === "left";
	return /* @__PURE__ */ Z(b, { children: e && /* @__PURE__ */ Q(n.div, {
		initial: {
			opacity: 0,
			y: 18,
			scale: .88
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 8,
			scale: .96
		},
		transition: {
			type: "spring",
			stiffness: 440,
			damping: 20
		},
		className: U("bottom-24 z-40 flex w-[300px] flex-col gap-2", o ? "absolute" : "fixed", c ? "left-4" : "right-4"),
		role: "dialog",
		"aria-label": s("newMessage"),
		children: [e.text && /* @__PURE__ */ Q(n.div, {
			whileHover: { y: -3 },
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 24
			},
			className: U("relative rounded-wx-lg border border-wx-border bg-wx-bg", "p-4 pr-9 text-wx-fg", "shadow-[0_16px_40px_rgba(0,0,0,0.16)]"),
			children: [/* @__PURE__ */ Z("button", {
				type: "button",
				onClick: r,
				"aria-label": s("dismiss"),
				className: U("absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full", "text-wx-fg-muted transition-colors hover:bg-wx-bg-elevated hover:text-wx-fg"),
				children: /* @__PURE__ */ Z(D, { size: 12 })
			}), /* @__PURE__ */ Q("button", {
				type: "button",
				onClick: t,
				className: U("block w-full text-left", "transition-opacity hover:opacity-90"),
				children: [/* @__PURE__ */ Z(Rr, { sender: e.sender }), /* @__PURE__ */ Z("span", {
					className: U("mt-1.5 block text-sm leading-relaxed", "wrap-anywhere", "line-clamp-10"),
					children: Ir(e.text)
				})]
			})]
		}), e.buttons.length > 0 && /* @__PURE__ */ Z("div", {
			className: U("flex flex-col gap-1.5", c ? "items-start" : "items-end"),
			children: e.buttons.map((e) => /* @__PURE__ */ Z(n.button, {
				type: "button",
				onClick: () => i(e.payload, e.text),
				whileHover: { y: -1 },
				whileTap: { scale: .96 },
				transition: {
					type: "spring",
					stiffness: 480,
					damping: 26
				},
				className: U("max-w-full rounded-full bg-wx-bg px-3.5 py-2 text-sm font-medium text-wx-primary", "transition-colors hover:bg-wx-primary hover:text-wx-primary-fg", "shadow-[0_4px_12px_rgba(0,0,0,0.08)]"),
				children: e.text
			}, e.payload))
		})]
	}, e.id) });
}
function Rr({ sender: e }) {
	let { config: t } = fe(), n = H("peek"), r = e.kind === "ai" || e.kind === "bot", i = r ? gt : e.name?.trim() ?? "", a = i ? null : e.kind === "operator" ? n("operator") : null, o = t.messenger?.aiAssistantAvatar ?? null;
	return /* @__PURE__ */ Q("span", {
		className: "flex items-center gap-2 text-xs",
		children: [r ? o ? /* @__PURE__ */ Z("span", {
			role: "img",
			"aria-label": n("aiAssistant"),
			className: "relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg-elevated shadow-sm",
			children: /* @__PURE__ */ Z("img", {
				src: o,
				alt: "",
				className: "h-full w-full object-cover",
				loading: "eager",
				decoding: "async"
			})
		}) : null : e.avatar ? /* @__PURE__ */ Z("img", {
			src: e.avatar,
			alt: i || a || "",
			className: "h-5 w-5 shrink-0 rounded-full object-cover"
		}) : /* @__PURE__ */ Z("span", {
			className: U("flex h-5 w-5 shrink-0 items-center justify-center rounded-full", "bg-wx-bg-elevated text-[9px] font-semibold text-wx-fg-muted"),
			children: zr(i || a || "")
		}), /* @__PURE__ */ Z("span", {
			className: "font-medium text-wx-fg-muted",
			children: i || a
		})]
	});
}
function zr(e) {
	let t = e.trim().split(/\s+/).map((e) => e.replace(/[^\p{L}\p{N}]/gu, "")).filter((e) => e.length > 0);
	return t.length === 0 ? "" : t.length === 1 ? t[0].charAt(0).toUpperCase() : t[0].charAt(0).toUpperCase() + t[t.length - 1].charAt(0).toUpperCase();
}
//#endregion
//#region components/widget/tab-title-header.tsx
function Br({ title: e, onBack: t, onClose: n, className: r, expanded: a, onToggleExpand: o }) {
	let c = H("header"), l = Ue(), u = Ue();
	return /* @__PURE__ */ Q("header", {
		className: U("flex h-14 items-center gap-2 border-b border-wx-border bg-wx-bg px-2", r),
		children: [
			/* @__PURE__ */ Z("div", {
				className: "flex flex-1 items-center justify-start",
				children: t && /* @__PURE__ */ Z(we, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": c("back"),
					onClick: t,
					className: "shrink-0",
					...l.parentHandlers,
					children: /* @__PURE__ */ Z(s, {
						ref: l.iconRef,
						size: 18
					})
				})
			}),
			e && /* @__PURE__ */ Z("h2", {
				className: "min-w-0 shrink truncate text-center text-base font-semibold text-wx-fg",
				children: e
			}),
			/* @__PURE__ */ Q("div", {
				className: "flex flex-1 items-center justify-end gap-0",
				children: [o && /* @__PURE__ */ Z(we, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": c(a ? "collapse" : "expand"),
					onClick: o,
					children: a ? /* @__PURE__ */ Q("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "18",
						height: "18",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ Z("polyline", { points: "4 14 10 14 10 20" }),
							/* @__PURE__ */ Z("polyline", { points: "20 10 14 10 14 4" }),
							/* @__PURE__ */ Z("line", {
								x1: "14",
								y1: "10",
								x2: "21",
								y2: "3"
							}),
							/* @__PURE__ */ Z("line", {
								x1: "3",
								y1: "21",
								x2: "10",
								y2: "14"
							})
						]
					}) : /* @__PURE__ */ Q("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "18",
						height: "18",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ Z("polyline", { points: "15 3 21 3 21 9" }),
							/* @__PURE__ */ Z("polyline", { points: "9 21 3 21 3 15" }),
							/* @__PURE__ */ Z("line", {
								x1: "21",
								y1: "3",
								x2: "14",
								y2: "10"
							}),
							/* @__PURE__ */ Z("line", {
								x1: "3",
								y1: "21",
								x2: "10",
								y2: "14"
							})
						]
					})
				}), /* @__PURE__ */ Z(we, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": c("close"),
					onClick: n,
					...u.parentHandlers,
					children: /* @__PURE__ */ Z(i, {
						ref: u.iconRef,
						size: 18
					})
				})]
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/help-tab.tsx
function Vr({ isDummy: e, onOpenCategory: t, onOpenArticle: n }) {
	let r = H("help"), i = H("demo"), a = De(), [o, s] = X(""), c = Wr(o, 300), { data: l, loading: u } = be({
		variables: {
			parentId: null,
			locale: a
		},
		skip: e
	}), { data: d } = me({
		variables: { args: {
			folderId: null,
			locale: a,
			recursive: !1,
			limit: 20
		} },
		skip: e
	}), { data: f } = me({
		variables: { args: {
			query: c,
			locale: a,
			limit: 10
		} },
		skip: c.length < 2 || e
	}), p = Gr(l), m = e ? Te(i) : p ?? [], h = c.length >= 2, g = Kr(f), _ = e ? xe(i).filter((e) => e.title.toLowerCase().includes(c.toLowerCase()) || e.excerpt.toLowerCase().includes(c.toLowerCase())).map((e) => ({
		id: e.id,
		title: e.title,
		excerpt: e.excerpt,
		slug: e.slug,
		authors: je(e.authors)
	})) : [], v = e ? _ : g, y = e ? [] : (d?.visitorHelpList.items ?? []).map((e) => ({
		id: e._id,
		title: e.title,
		excerpt: e.excerpt ?? null,
		slug: e.slug,
		authors: je(e.authors)
	}));
	return /* @__PURE__ */ Z("div", {
		className: "flex h-full min-h-0 flex-col",
		children: /* @__PURE__ */ Q(re, {
			className: "min-h-0 flex-1",
			viewportRef: Ae("help"),
			children: [/* @__PURE__ */ Z(Pe, {
				value: o,
				onChange: s,
				placeholder: r("searchPlaceholder")
			}), h ? /* @__PURE__ */ Z(Hr, {
				results: v,
				onOpen: n
			}) : u && m.length === 0 ? /* @__PURE__ */ Z(Ur, {}) : m.length > 0 || y.length > 0 ? /* @__PURE__ */ Q(tt, { children: [m.length > 0 && /* @__PURE__ */ Z("div", {
				className: "border-wx-border border-b px-5 py-4",
				children: /* @__PURE__ */ Z("p", {
					className: "font-semibold text-base text-wx-fg",
					children: r("collectionsCount", { count: m.length })
				})
			}), /* @__PURE__ */ Q("div", {
				className: "flex flex-col",
				children: [m.map((e, n) => /* @__PURE__ */ Z(kr, {
					title: e.title,
					description: e.description,
					meta: typeof e.articleCount == "number" && e.articleCount > 0 ? r("articlesCount", { count: e.articleCount }) : void 0,
					kind: "folder",
					onClick: () => t(e.id, {
						name: e.title,
						description: e.description,
						articleCount: e.articleCount
					}),
					delay: n * .03
				}, e.id)), y.map((e, t) => /* @__PURE__ */ Z(kr, {
					title: e.title,
					description: e.excerpt,
					authors: e.authors,
					kind: "article",
					onClick: () => n(e.slug),
					delay: (m.length + t) * .03
				}, e.id))]
			})] }) : /* @__PURE__ */ Z("div", {
				className: "px-5 py-6",
				children: /* @__PURE__ */ Z(M, { children: /* @__PURE__ */ Q(P, {
					className: "py-8 text-center",
					children: [/* @__PURE__ */ Z("p", {
						className: "font-semibold text-sm text-wx-fg",
						children: r("emptyTitle")
					}), /* @__PURE__ */ Z("p", {
						className: "mt-1 text-wx-fg-muted text-xs",
						children: r("emptyBody")
					})]
				}) })
			})]
		})
	});
}
function Hr({ results: e, onOpen: t }) {
	let n = H("help");
	return e.length === 0 ? /* @__PURE__ */ Z("div", {
		className: "px-5 py-6",
		children: /* @__PURE__ */ Z(M, { children: /* @__PURE__ */ Z(P, {
			className: "py-8 text-center",
			children: /* @__PURE__ */ Z("p", {
				className: "text-sm text-wx-fg-muted",
				children: n("noResults")
			})
		}) })
	}) : /* @__PURE__ */ Z("div", {
		className: "flex flex-col",
		children: e.map((e, n) => /* @__PURE__ */ Z(kr, {
			title: e.title,
			description: e.excerpt,
			authors: e.authors,
			onClick: () => t(e.slug),
			delay: n * .03
		}, e.id))
	});
}
function Ur() {
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-col",
		children: Array.from({ length: 4 }).map((e, t) => /* @__PURE__ */ Q("div", {
			className: "flex items-center gap-3 border-wx-border border-b px-5 py-4 last:border-b-0",
			children: [/* @__PURE__ */ Q("div", {
				className: "flex min-w-0 flex-1 flex-col gap-2",
				children: [
					/* @__PURE__ */ Z(G, { className: "h-4 w-32 rounded" }),
					/* @__PURE__ */ Z(G, { className: "h-3 w-56 rounded" }),
					/* @__PURE__ */ Z(G, { className: "h-3 w-20 rounded" })
				]
			}), /* @__PURE__ */ Z(G, { className: "h-4 w-4 rounded" })]
		}, t))
	});
}
function Wr(e, t) {
	let [n, r] = X(e);
	return J(() => {
		let n = setTimeout(() => r(e), t);
		return () => clearTimeout(n);
	}, [e, t]), n;
}
function Gr(e) {
	return e ? e.visitorHelpFolders.map((e) => ({
		id: e._id,
		title: e.name,
		description: e.description ?? "",
		articleCount: e.articleCount ?? 0
	})) : null;
}
function Kr(e) {
	return e ? e.visitorHelpList.items.map((e) => ({
		id: e._id,
		title: e.title,
		excerpt: e.excerpt ?? null,
		slug: e.slug,
		authors: je(e.authors),
		reactionCounts: e.reactionCounts ?? null
	})) : [];
}
//#endregion
//#region node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-context/dist/index.mjs
function qr(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = K.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = K.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ Z(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = K.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => K.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return K.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, Jr(i, ...t)];
}
function Jr(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return K.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-primitive/dist/index.mjs
var Yr = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = he(`Primitive.${t}`), r = K.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ Z(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {}), Xr = /* @__PURE__ */ u(((t) => {
	var n = e("react");
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : r, a = n.useState, o = n.useEffect, s = n.useLayoutEffect, c = n.useDebugValue;
	function l(e, t) {
		var n = t(), r = a({ inst: {
			value: n,
			getSnapshot: t
		} }), i = r[0].inst, l = r[1];
		return s(function() {
			i.value = n, i.getSnapshot = t, u(i) && l({ inst: i });
		}, [
			e,
			n,
			t
		]), o(function() {
			return u(i) && l({ inst: i }), e(function() {
				u(i) && l({ inst: i });
			});
		}, [e]), c(n), n;
	}
	function u(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !i(e, n);
		} catch {
			return !0;
		}
	}
	function d(e, t) {
		return t();
	}
	var f = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? d : l;
	t.useSyncExternalStore = n.useSyncExternalStore === void 0 ? f : n.useSyncExternalStore;
})), Zr = (/* @__PURE__ */ u(((e, t) => {
	t.exports = Xr();
})))();
function Qr() {
	return (0, Zr.useSyncExternalStore)($r, () => !0, () => !1);
}
function $r() {
	return () => {};
}
//#endregion
//#region node_modules/@radix-ui/react-avatar/dist/index.mjs
var ei = "Avatar", [ti, ni] = qr(ei), [ri, ii] = ti(ei), ai = K.forwardRef((e, t) => {
	let { __scopeAvatar: n, ...r } = e, [i, a] = K.useState("idle");
	return /* @__PURE__ */ Z(ri, {
		scope: n,
		imageLoadingStatus: i,
		onImageLoadingStatusChange: a,
		children: /* @__PURE__ */ Z(Yr.span, {
			...r,
			ref: t
		})
	});
});
ai.displayName = ei;
var oi = "AvatarImage", si = K.forwardRef((e, t) => {
	let { __scopeAvatar: n, src: r, onLoadingStatusChange: i = () => {}, ...a } = e, o = ii(oi, n), s = di(r, a), c = z((e) => {
		i(e), o.onImageLoadingStatusChange(e);
	});
	return A(() => {
		s !== "idle" && c(s);
	}, [s, c]), s === "loaded" ? /* @__PURE__ */ Z(Yr.img, {
		...a,
		ref: t,
		src: r
	}) : null;
});
si.displayName = oi;
var ci = "AvatarFallback", li = K.forwardRef((e, t) => {
	let { __scopeAvatar: n, delayMs: r, ...i } = e, a = ii(ci, n), [o, s] = K.useState(r === void 0);
	return K.useEffect(() => {
		if (r !== void 0) {
			let e = window.setTimeout(() => s(!0), r);
			return () => window.clearTimeout(e);
		}
	}, [r]), o && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ Z(Yr.span, {
		...i,
		ref: t
	}) : null;
});
li.displayName = ci;
function ui(e, t) {
	return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function di(e, { referrerPolicy: t, crossOrigin: n }) {
	let r = Qr(), i = K.useRef(null), a = r ? (i.current || (i.current = new window.Image()), i.current) : null, [o, s] = K.useState(() => ui(a, e));
	return A(() => {
		s(ui(a, e));
	}, [a, e]), A(() => {
		let e = (e) => () => {
			s(e);
		};
		if (!a) return;
		let r = e("loaded"), i = e("error");
		return a.addEventListener("load", r), a.addEventListener("error", i), t && (a.referrerPolicy = t), typeof n == "string" && (a.crossOrigin = n), () => {
			a.removeEventListener("load", r), a.removeEventListener("error", i);
		};
	}, [
		a,
		n,
		t
	]), o;
}
var fi = ai, pi = si, mi = li, hi = K.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ Z(fi, {
	ref: n,
	className: U("relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full", e),
	...t
}));
hi.displayName = fi.displayName;
var gi = K.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ Z(pi, {
	ref: n,
	className: U("aspect-square h-full w-full object-cover", e),
	...t
}));
gi.displayName = pi.displayName;
var _i = K.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ Z(mi, {
	ref: n,
	delayMs: 300,
	className: U("flex h-full w-full items-center justify-center bg-wx-bg-elevated-2 text-xs font-medium text-wx-fg-muted", e),
	...t
}));
_i.displayName = mi.displayName;
function vi({ avatars: e, max: t = 3, size: n = "md", ringClass: r = "ring-wx-bg", className: i }) {
	let a = e.slice(0, t), o = e.length - a.length, s = n === "sm" ? "h-7 w-7" : "h-8 w-8";
	return /* @__PURE__ */ Q("div", {
		className: U("flex -space-x-2", i),
		children: [a.map((e) => /* @__PURE__ */ Q(hi, {
			className: U(s, "ring-2", r),
			children: [/* @__PURE__ */ Z(gi, {
				src: e.src,
				alt: e.alt
			}), /* @__PURE__ */ Z(_i, { children: yi(e.alt) })]
		}, e.src)), o > 0 && /* @__PURE__ */ Z(hi, {
			className: U(s, "ring-2", r),
			children: /* @__PURE__ */ Q(_i, { children: ["+", o] })
		})]
	});
}
function yi(e) {
	return e.split(/\s+/).filter(Boolean).slice(0, 2).map((e) => e[0]?.toUpperCase() ?? "").join("");
}
//#endregion
//#region components/widget/home-blocks/blocks/ask-question.tsx
function bi({ block: e, config: t, onOpenTab: r }) {
	let i = H("home"), a = e.action ?? "open-messenger", o = a === "open-help" ? "help" : a === "open-news" ? "news" : "messages";
	return /* @__PURE__ */ Q(n.button, {
		type: "button",
		onClick: () => r(o),
		whileHover: { y: -1 },
		whileTap: { scale: .99 },
		transition: {
			type: "spring",
			stiffness: 360,
			damping: 26
		},
		className: "flex w-full items-center gap-3 rounded-wx-lg bg-wx-bg-elevated px-4 py-3.5 text-left transition-colors hover:bg-wx-bg-elevated-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: [
			/* @__PURE__ */ Q("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ Z("p", {
					className: "truncate text-base font-semibold text-wx-fg",
					children: e.title?.trim() || i("askTitle")
				}), /* @__PURE__ */ Z("p", {
					className: "mt-0.5 truncate text-sm text-wx-fg-muted",
					children: e.subtitle?.trim() || i("askSubtitle")
				})]
			}),
			t.operatorAvatars.length > 0 && /* @__PURE__ */ Z(vi, {
				avatars: t.operatorAvatars,
				size: "sm",
				ringClass: "ring-wx-bg-elevated"
			}),
			/* @__PURE__ */ Z(In, {
				size: 16,
				className: "shrink-0 text-wx-fg-muted"
			})
		]
	});
}
//#endregion
//#region components/widget/home-blocks/helpers.tsx
function xi(e) {
	if (!e || typeof e != "object") return null;
	let t = e, n = String(t._id ?? t.id ?? "");
	if (!n) return null;
	let r = t.coverImageUrl?.url, i = t.externalCoverImageUrl, a = typeof r == "string" ? r : typeof i == "string" ? i : void 0;
	return {
		id: n,
		title: typeof t.title == "string" ? t.title : "",
		excerpt: typeof t.excerpt == "string" ? t.excerpt : "",
		coverImageUrl: a
	};
}
function Si(e) {
	return Array.isArray(e) ? e.map((e) => typeof e == "object" && e && "title" in e ? String(e.title ?? "") : "").filter((e) => e.length > 0) : [];
}
function Ci(e, t) {
	return t || !e ? [] : e.map((e) => typeof e.title == "string" ? e.title : "").filter((e) => e.length > 0);
}
function wi(e) {
	let t = Date.parse(e);
	if (Number.isNaN(t)) return "";
	let n = Date.now() - t, r = Math.floor(n / 6e4);
	if (r < 1) return "Just now";
	if (r < 60) return `${r}m`;
	let i = Math.floor(r / 60);
	if (i < 24) return `${i}h`;
	let a = Math.floor(i / 24);
	return a < 7 ? `${a}d` : new Date(t).toLocaleDateString();
}
function Ti(e) {
	return e.split(/\n{2,}/).map((e, t) => /* @__PURE__ */ Z("p", {
		className: t > 0 ? "mt-2" : void 0,
		children: e.split("\n").map((e, t) => /* @__PURE__ */ Q("span", { children: [t > 0 && /* @__PURE__ */ Z("br", {}), Ei(e)] }, t))
	}, t));
}
function Ei(e) {
	let t = [], n = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g, r = 0, i, a = 0;
	for (; i = n.exec(e);) {
		if (i.index > r && t.push(e.slice(r, i.index)), i[1] && i[2]) {
			let e = /^https?:\/\//.test(i[2]) ? i[2] : "#";
			t.push(/* @__PURE__ */ Z("a", {
				href: e,
				target: "_blank",
				rel: "noopener noreferrer",
				children: i[1]
			}, a++));
		} else i[3] ? t.push(/* @__PURE__ */ Z("strong", {
			className: "font-semibold text-wx-fg",
			children: i[3]
		}, a++)) : i[4] && t.push(/* @__PURE__ */ Z("em", { children: i[4] }, a++));
		r = i.index + i[0].length;
	}
	return r < e.length && t.push(e.slice(r)), t;
}
//#endregion
//#region components/widget/home-blocks/blocks/featured-article.tsx
function Di({ block: e, onOpenTab: t, onOpenNewsArticle: r, isDummy: i }) {
	let a = H("home"), o = m(), s = !i && e.newsId ? o.previewData?.newsPostsById?.[e.newsId] : void 0, c = s !== void 0, { data: l, loading: u } = ke({
		variables: { args: { id: e.newsId ?? "" } },
		skip: i || c || !e.newsId
	});
	if (i) return /* @__PURE__ */ Q(n.button, {
		type: "button",
		onClick: () => r ? r("demo-news-1") : t("news"),
		whileHover: { y: -2 },
		whileTap: { scale: .99 },
		transition: {
			type: "spring",
			stiffness: 360,
			damping: 26
		},
		className: "block w-full overflow-hidden rounded-wx-xl bg-wx-bg-elevated text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: [/* @__PURE__ */ Z("div", {
			className: "relative w-full",
			style: {
				aspectRatio: "16 / 11",
				backgroundImage: "linear-gradient(135deg, #1e1f3b 0%, #1a1a2e 55%, #3a1e2b 100%)"
			},
			children: /* @__PURE__ */ Q("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-6 text-center text-white",
				children: [
					/* @__PURE__ */ Z("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] uppercase opacity-80",
						children: a("featuredArticleDemoEyebrow")
					}),
					/* @__PURE__ */ Z("p", {
						className: "text-2xl leading-tight font-bold",
						children: a("featuredArticleDemoHeadline")
					}),
					/* @__PURE__ */ Z("p", {
						className: "text-sm opacity-85",
						children: a("featuredArticleDemoSubline")
					})
				]
			})
		}), /* @__PURE__ */ Q("div", {
			className: "flex items-center justify-between gap-2 px-4 py-3",
			children: [/* @__PURE__ */ Z("span", {
				className: "truncate text-sm font-semibold text-wx-fg",
				children: a("featuredArticleDemoCta")
			}), /* @__PURE__ */ Z(ue, {
				size: 16,
				className: "shrink-0 text-wx-fg-subtle"
			})]
		})]
	});
	let d = xi(c ? s : l?.visitorNewsPost), f = !!d, p = e.ctaLabel?.trim() || a("featuredArticleTap"), h = f ? () => r ? r(d.id) : t("news") : void 0, g = d?.coverImageUrl;
	return !e.newsId || !u && !d ? /* @__PURE__ */ Z(n.button, {
		type: "button",
		onClick: () => t("news"),
		whileHover: { y: -1 },
		whileTap: { scale: .99 },
		transition: {
			type: "spring",
			stiffness: 360,
			damping: 26
		},
		className: "block w-full overflow-hidden rounded-wx-xl bg-wx-bg-elevated text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: /* @__PURE__ */ Z("div", {
			className: "relative w-full",
			style: {
				aspectRatio: "16 / 11",
				backgroundImage: "linear-gradient(135deg, #1e1f3b 0%, #1a1a2e 55%, #3a1e2b 100%)"
			},
			children: /* @__PURE__ */ Q("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-1 px-6 text-center text-white",
				children: [/* @__PURE__ */ Z("p", {
					className: "text-2xl leading-tight font-bold",
					children: e.newsId ? a("featuredArticleLoading") : a("featuredArticleEmpty")
				}), /* @__PURE__ */ Z("p", {
					className: "text-sm opacity-80",
					children: e.newsId ? "" : a("featuredArticleSetUp")
				})]
			})
		})
	}) : /* @__PURE__ */ Q(n.button, {
		type: "button",
		onClick: h,
		whileHover: f ? { y: -2 } : void 0,
		whileTap: f ? { scale: .99 } : void 0,
		transition: {
			type: "spring",
			stiffness: 360,
			damping: 26
		},
		disabled: !f,
		className: "block w-full overflow-hidden rounded-wx-xl bg-wx-bg-elevated text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: [/* @__PURE__ */ Z("div", {
			className: "relative w-full",
			style: {
				aspectRatio: "16 / 11",
				backgroundImage: g ? `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.65) 100%), url(${g})` : "linear-gradient(135deg, #1e1f3b 0%, #1a1a2e 55%, #3a1e2b 100%)",
				backgroundSize: "cover",
				backgroundPosition: "center"
			},
			children: /* @__PURE__ */ Q("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-6 text-center text-white",
				children: [/* @__PURE__ */ Z("p", {
					className: "text-2xl leading-tight font-bold",
					children: d?.title
				}), d?.excerpt && /* @__PURE__ */ Z("p", {
					className: "text-sm opacity-85 line-clamp-2",
					children: d.excerpt
				})]
			})
		}), /* @__PURE__ */ Q("div", {
			className: "flex items-center justify-between gap-2 px-4 py-3",
			children: [/* @__PURE__ */ Z("span", {
				className: "truncate text-sm font-semibold text-wx-fg",
				children: p
			}), /* @__PURE__ */ Z(ue, {
				size: 16,
				className: "shrink-0 text-wx-fg-subtle"
			})]
		})]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/help-search.tsx
function Oi({ block: e, onOpenTab: t }) {
	let n = H("home");
	return /* @__PURE__ */ Q("button", {
		type: "button",
		onClick: () => t("help"),
		className: "flex w-full items-center gap-2.5 rounded-wx-lg border border-wx-border bg-wx-bg-elevated px-3.5 py-3 text-left transition-colors hover:bg-wx-bg-elevated-2",
		children: [/* @__PURE__ */ Z(ir, {
			size: 16,
			className: "shrink-0 text-wx-fg-muted"
		}), /* @__PURE__ */ Z("span", {
			className: "text-sm text-wx-fg-muted",
			children: e.placeholder?.trim() || n("searchPlaceholder")
		})]
	});
}
//#endregion
//#region components/widget/home-blocks/shared.tsx
function ki({ title: e, onOpenAll: t, children: n }) {
	return /* @__PURE__ */ Q("div", {
		className: "overflow-hidden rounded-wx-lg border border-wx-border bg-wx-bg-elevated",
		children: [/* @__PURE__ */ Q("div", {
			className: "flex items-center justify-between px-3.5 pt-3 pb-1.5",
			children: [/* @__PURE__ */ Z("p", {
				className: "text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
				children: e
			}), /* @__PURE__ */ Z("button", {
				type: "button",
				onClick: t,
				className: "text-xs font-medium text-wx-primary hover:underline",
				children: /* @__PURE__ */ Z(ue, { size: 14 })
			})]
		}), n]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/news-preview.tsx
function Ai({ block: e, onOpenTab: t, isDummy: n }) {
	let r = H("home"), i = H("demo"), a = De(), o = m(), s = Math.max(1, Math.min(6, e.maxItems ?? 3)), c = n ? void 0 : o.previewData?.newsPosts, l = Array.isArray(c) && c.length > 0, { data: u, error: d, loading: f } = Ne({
		variables: { args: {
			locale: a,
			limit: s
		} },
		skip: n || l
	}), p = n ? Me(i).slice(0, s).map((e) => e.title) : l ? Si(c).slice(0, s) : Ci(u?.visitorNewsList.items, d).slice(0, s);
	return !n && !f && p.length === 0 ? null : /* @__PURE__ */ Z(ki, {
		title: e.title?.trim() || r("newsPreviewTitle"),
		onOpenAll: () => t("news"),
		children: /* @__PURE__ */ Z("ul", {
			className: "flex flex-col",
			children: p.map((e, n) => /* @__PURE__ */ Z("li", { children: /* @__PURE__ */ Q("button", {
				type: "button",
				onClick: () => t("news"),
				className: "flex w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-wx-bg-elevated-2",
				children: [
					/* @__PURE__ */ Z(sr, {
						size: 14,
						className: "shrink-0 text-wx-fg-muted"
					}),
					/* @__PURE__ */ Z("span", {
						className: "min-w-0 flex-1 truncate text-sm text-wx-fg",
						children: e
					}),
					/* @__PURE__ */ Z(ue, {
						size: 14,
						className: "shrink-0 text-wx-fg-subtle"
					})
				]
			}) }, n))
		})
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/pinned-articles.tsx
function ji({ block: e, onOpenTab: t, onOpenArticle: n, isDummy: r }) {
	let i = H("home"), a = H("demo"), o = m(), s = De(), c = (e.articleIds ?? []).slice(0, 5), l = c.length, u = r ? null : o.previewData?.helpArticlesById, d = !!u, { data: f } = Ce({
		variables: {
			ids: c,
			locale: s
		},
		skip: r || d || c.length === 0
	});
	if (r) {
		let r = xe(a).slice().sort((e, t) => t.viewCount - e.viewCount).slice(0, 4);
		return /* @__PURE__ */ Z(ki, {
			title: e.title?.trim() || i("popularArticlesTitle"),
			onOpenAll: () => t("help"),
			children: /* @__PURE__ */ Z("ul", {
				className: "flex flex-col",
				children: r.map((e) => /* @__PURE__ */ Z("li", { children: /* @__PURE__ */ Q("button", {
					type: "button",
					onClick: () => n ? n(e.slug) : t("help"),
					className: "flex w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-wx-bg-elevated-2",
					children: [
						/* @__PURE__ */ Z(Rn, {
							size: 14,
							className: "shrink-0 text-wx-fg-muted"
						}),
						/* @__PURE__ */ Z("span", {
							className: "min-w-0 flex-1 truncate text-sm text-wx-fg",
							children: e.title
						}),
						/* @__PURE__ */ Z(ue, {
							size: 14,
							className: "shrink-0 text-wx-fg-subtle"
						})
					]
				}) }, e.id))
			})
		});
	}
	if (l === 0) return null;
	let p = /* @__PURE__ */ new Map();
	if (d && u) for (let e of c) {
		let t = u[e];
		if (t && typeof t == "object") {
			let n = t;
			typeof n.title == "string" && typeof n.slug == "string" && p.set(e, {
				title: n.title,
				slug: n.slug
			});
		}
	}
	else for (let e of f?.visitorHelpArticlesByIds ?? []) p.set(e._id, {
		title: e.title,
		slug: e.slug
	});
	return /* @__PURE__ */ Z(ki, {
		title: e.title?.trim() || i("pinnedArticlesTitle"),
		onOpenAll: () => t("help"),
		children: /* @__PURE__ */ Z("ul", {
			className: "flex flex-col",
			children: c.map((e, r) => {
				let a = p.get(e);
				return /* @__PURE__ */ Z("li", { children: /* @__PURE__ */ Q("button", {
					type: "button",
					onClick: () => {
						a && n ? n(a.slug) : t("help");
					},
					className: "flex w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-wx-bg-elevated-2",
					children: [
						/* @__PURE__ */ Z(Rn, {
							size: 14,
							className: "shrink-0 text-wx-fg-muted"
						}),
						/* @__PURE__ */ Z("span", {
							className: "min-w-0 flex-1 truncate text-sm text-wx-fg",
							children: a ? a.title : i("pinnedArticleRow", { n: r + 1 })
						}),
						/* @__PURE__ */ Z(ue, {
							size: 14,
							className: "shrink-0 text-wx-fg-subtle"
						})
					]
				}) }, e);
			})
		})
	});
}
//#endregion
//#region components/widget/icons/brand-icons.tsx
function Mi(e, t) {
	return {
		xmlns: "http://www.w3.org/2000/svg",
		width: e,
		height: e,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		className: t
	};
}
function Ni({ size: e = 18, className: t }) {
	return /* @__PURE__ */ Q("svg", {
		...Mi(e, t),
		children: [/* @__PURE__ */ Z("title", { children: "WhatsApp" }), /* @__PURE__ */ Z("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" })]
	});
}
function Pi({ size: e = 18, className: t }) {
	return /* @__PURE__ */ Q("svg", {
		...Mi(e, t),
		children: [/* @__PURE__ */ Z("title", { children: "Telegram" }), /* @__PURE__ */ Z("path", { d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.149-.056-.211s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" })]
	});
}
function Fi({ size: e = 18, className: t }) {
	return /* @__PURE__ */ Q("svg", {
		...Mi(e, t),
		children: [/* @__PURE__ */ Z("title", { children: "Instagram" }), /* @__PURE__ */ Z("path", { d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" })]
	});
}
function Ii({ size: e = 18, className: t }) {
	return /* @__PURE__ */ Q("svg", {
		...Mi(e, t),
		children: [/* @__PURE__ */ Z("title", { children: "Messenger" }), /* @__PURE__ */ Z("path", { d: "M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.39 0 010 11.639zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.81-2.1a1.86 1.86 0 00-2.6.48z" })]
	});
}
function Li({ size: e = 18, className: t }) {
	return /* @__PURE__ */ Q("svg", {
		...Mi(e, t),
		children: [/* @__PURE__ */ Z("title", { children: "Viber" }), /* @__PURE__ */ Z("path", { d: "M11.4 0C9.473.028 5.333.344 3.018 2.467 1.298 4.187.696 6.7.633 9.817c-.062 3.116-.136 8.95 5.488 10.533v2.42s-.038.978.609 1.177c.781.243 1.24-.502 1.986-1.305.41-.441.973-1.09 1.4-1.587 3.85.324 6.8-.418 7.143-.529 1.072-.345 6.49-.95 7.245-9.388.36-3.66-.143-7.23-3.245-9.875-.96-.838-2.984-2.293-7.245-2.317 0 0-.246-.011-.61-.012zm.149 1.625c1.073 0 5.184.103 7.18 1.92 2.546 2.236 2.972 5.36 2.668 8.47-.55 7.058-4.825 7.55-5.73 7.838-.288.111-2.85.794-6.092.581 0 0-2.408 2.926-3.158 3.69-.117.122-.255.171-.347.144-.13-.034-.165-.193-.165-.428l.02-3.99c-4.756-1.302-4.482-6.293-4.43-8.895.054-2.602.547-4.735 1.996-6.176 1.948-1.788 5.485-2.05 7.196-2.054.43-.001.642-.05.862-.05zm-.135 2.5c-.143.001-.247.118-.222.262.024.142.143.245.286.245 1.86.041 3.385.685 4.555 1.975.555.617.836 1.27 1.045 2.06.21.789.275 1.638.245 2.475-.005.144.099.265.243.272s.265-.103.272-.247c.032-.876-.038-1.768-.262-2.617-.224-.847-.554-1.601-1.183-2.298-1.27-1.396-2.97-2.117-4.928-2.16-.018-.001-.034.001-.05.033zm-1.5 1.282c-.196.005-.452.038-.711.232-.413.31-1.262 1.328-1.293 2.078-.031.787 1.293 3.013 1.293 3.013l.025.026s1.044 1.706 2.075 3c1.027 1.297 2.075 2.187 2.075 2.187s1.293.992 2.078 1.231c.788.244 1.293-.025 1.605-.451.31-.413 1.328-1.231 1.328-2.018 0-.788-2.018-1.832-2.481-1.953-.464-.122-.866 0-.991.213-.213.366-.5.732-1.062.488-1.013-.46-1.628-1.013-2.018-1.487-.46-.5-.91-1.013-1.413-2.018-.25-.535.119-.825.488-1.038.213-.122.366-.524.244-.988-.122-.464-1.166-2.481-1.953-2.481-.094-.024-.207-.034-.31-.034zm2.293 1.187a.265.265 0 00-.262.262c0 .143.122.262.262.262.594.014 1.072.21 1.428.594.34.39.5.879.518 1.534a.265.265 0 00.262.262c.143 0 .262-.122.262-.262-.018-.79-.244-1.453-.659-1.928-.488-.5-1.044-.733-1.751-.733zm-.072 1.5a.255.255 0 00-.244.262c0 .143.122.262.262.262.453.043.622.213.65.66 0 .143.122.262.262.262a.265.265 0 00.262-.262c-.018-.595-.34-1.013-.952-1.184-.06-.012-.158 0-.218 0z" })]
	});
}
var Ri = {
	whatsapp: Ni,
	telegram: Pi,
	instagram: Fi,
	messenger: Ii,
	viber: Li
}, zi = {
	telegram: He,
	whatsapp: $n,
	viber: rr,
	instagram: Bn,
	messenger: Zn,
	discord: Wn,
	slack: Gn,
	chat: Qn,
	email: Xn,
	phone: rr,
	"video-call": pr,
	help: Vn,
	book: Rn,
	bell: Ln,
	star: cr,
	heart: Kn,
	bookmark: zn,
	"arrow-right": In,
	lock: Yn,
	shield: ar,
	user: dr,
	users: fr
};
function Bi({ block: e, onOpenTab: t }) {
	let n = (e) => {
		switch (e.action) {
			case "open-messenger": return t("messages");
			case "open-help": return t("help");
			case "open-news": return t("news");
			case "open-url":
				e.url && window.open(e.url, "_blank", "noopener,noreferrer");
				return;
		}
	};
	if (e.layout === "inline") {
		let t = e.buttons.slice(0, 4);
		return /* @__PURE__ */ Z("div", {
			className: U("grid gap-2", t.length === 1 && "grid-cols-1", t.length === 2 && "grid-cols-2", t.length === 3 && "grid-cols-3", t.length >= 4 && "grid-cols-4"),
			children: t.map((e, t) => /* @__PURE__ */ Z(Vi, {
				btn: e,
				onClick: () => n(e)
			}, `${e.action}-${t}`))
		});
	}
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-col gap-2",
		children: e.buttons.map((e, t) => /* @__PURE__ */ Z(Hi, {
			btn: e,
			onClick: () => n(e)
		}, `${e.action}-${t}`))
	});
}
function Vi({ btn: e, onClick: t }) {
	let r = e.icon?.kind === "named" ? e.icon.name : null, i = r ? Ri[r] : null, a = r ? zi[r] ?? Qn : Qn, o = i ?? a;
	return /* @__PURE__ */ Q(n.button, {
		type: "button",
		onClick: t,
		whileHover: {
			y: -2,
			scale: 1.02
		},
		whileTap: { scale: .96 },
		transition: {
			type: "spring",
			stiffness: 420,
			damping: 24
		},
		title: e.label,
		className: "group flex aspect-square flex-col items-center justify-center gap-1.5 rounded-wx-lg bg-wx-bg-elevated px-2 py-3 text-wx-fg transition-colors hover:bg-wx-bg-elevated-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: [/* @__PURE__ */ Z("span", {
			className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wx-bg transition-transform group-hover:scale-110",
			children: e.icon?.kind === "media" ? /* @__PURE__ */ Z("img", {
				src: e.icon.url,
				alt: "",
				className: "h-5 w-5 object-contain"
			}) : /* @__PURE__ */ Z(o, {
				size: 18,
				className: "text-wx-fg"
			})
		}), e.label && /* @__PURE__ */ Z("span", {
			className: "block w-full truncate text-center text-[11px] leading-tight font-medium",
			children: e.label
		})]
	});
}
function Hi({ btn: e, onClick: t }) {
	return !e.label && e.icon?.kind === "media" ? /* @__PURE__ */ Z(n.button, {
		type: "button",
		onClick: t,
		whileHover: { y: -2 },
		whileTap: { scale: .985 },
		transition: {
			type: "spring",
			stiffness: 360,
			damping: 26
		},
		className: "block w-full overflow-hidden rounded-wx-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: /* @__PURE__ */ Z("img", {
			src: e.icon.url,
			alt: "",
			className: "w-full object-cover"
		})
	}) : /* @__PURE__ */ Q(we, {
		type: "button",
		variant: e.style === "primary" ? "solid" : e.style === "ghost" ? "ghost" : "tonal",
		size: "lg",
		onClick: t,
		className: "justify-start gap-2.5",
		children: [e.icon?.kind === "named" ? /* @__PURE__ */ Z(Ri[e.icon.name] ?? zi[e.icon.name] ?? Qn, {
			size: 16,
			className: "shrink-0"
		}) : e.icon?.kind === "media" ? /* @__PURE__ */ Z("img", {
			src: e.icon.url,
			alt: "",
			className: "h-4 w-4 shrink-0 object-contain"
		}) : null, e.label && /* @__PURE__ */ Z("span", {
			className: "text-sm font-medium",
			children: e.label
		})]
	});
}
//#endregion
//#region components/widget/icons/wexio-mark.tsx
function Ui({ size: e = 24, className: t }) {
	return /* @__PURE__ */ Q("span", {
		style: {
			width: e,
			height: e
		},
		className: U("relative inline-block", t),
		role: "img",
		"aria-label": "Wexio",
		children: [/* @__PURE__ */ Z("img", {
			src: p("/logo-dark.png"),
			alt: "",
			width: e,
			height: e,
			className: "block h-full w-full dark:hidden"
		}), /* @__PURE__ */ Z("img", {
			src: p("/logo-light.png"),
			alt: "",
			width: e,
			height: e,
			className: "hidden h-full w-full dark:block"
		})]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/recent-message.tsx
function Wi({ block: e, onOpenTab: t, isDummy: n, chatId: r, config: i }) {
	let a = H("home"), { data: o, loading: s } = Rt({
		variables: { chatId: r ?? "" },
		skip: n || !r
	});
	if (!n) {
		if (!r || s) return null;
		let n = o?.visitorChatRecentInbound;
		if (!n) return null;
		let c = n.sender?.kind === "ai" || n.sender?.kind === "bot", l = c ? gt : n.sender?.name?.trim() || a("recentMessageFromFallback"), u = c ? i.messenger?.aiAssistantAvatar ?? null : n.sender?.avatar ?? null;
		return /* @__PURE__ */ Q("button", {
			type: "button",
			onClick: () => t("messages"),
			className: "flex w-full flex-col gap-3 rounded-wx-lg bg-wx-bg-elevated px-4 py-3.5 text-left transition-colors hover:bg-wx-bg-elevated-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
			children: [/* @__PURE__ */ Z("p", {
				className: "text-sm text-wx-fg-muted",
				children: e.title?.trim() || a("recentMessageTitle")
			}), /* @__PURE__ */ Q("div", {
				className: "flex items-start gap-3",
				children: [u ? /* @__PURE__ */ Z("span", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg",
					children: /* @__PURE__ */ Z("img", {
						src: u,
						alt: l,
						className: "h-9 w-9 rounded-full object-cover"
					})
				}) : c ? null : /* @__PURE__ */ Z("span", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg",
					children: /* @__PURE__ */ Z("span", {
						className: "text-sm font-semibold text-wx-fg-muted",
						children: l.charAt(0).toUpperCase()
					})
				}), /* @__PURE__ */ Q("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ Q("div", {
						className: "flex items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ Z("p", {
							className: "truncate text-sm font-semibold text-wx-fg",
							children: l
						}), /* @__PURE__ */ Z("span", {
							className: "shrink-0 text-xs text-wx-fg-subtle",
							children: wi(n.createdAt)
						})]
					}), /* @__PURE__ */ Z("p", {
						className: "mt-0.5 line-clamp-2 text-sm text-wx-fg-muted",
						children: Ir(n.text)
					})]
				})]
			})]
		});
	}
	return /* @__PURE__ */ Q("button", {
		type: "button",
		onClick: () => t("messages"),
		className: "flex w-full flex-col gap-3 rounded-wx-lg bg-wx-bg-elevated px-4 py-3.5 text-left transition-colors hover:bg-wx-bg-elevated-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: [/* @__PURE__ */ Z("p", {
			className: "text-sm text-wx-fg-muted",
			children: e.title?.trim() || a("recentMessageTitle")
		}), /* @__PURE__ */ Q("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ Z("span", {
				className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg",
				children: /* @__PURE__ */ Z(Ui, { size: 36 })
			}), /* @__PURE__ */ Q("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ Q("div", {
					className: "flex items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ Z("p", {
						className: "truncate text-sm font-semibold text-wx-fg",
						children: a("recentMessageFromFallback")
					}), /* @__PURE__ */ Z("span", {
						className: "shrink-0 text-xs text-wx-fg-subtle",
						children: a("recentMessageAgo")
					})]
				}), /* @__PURE__ */ Z("p", {
					className: "mt-0.5 line-clamp-2 text-sm text-wx-fg-muted",
					children: a("recentMessageSample")
				})]
			})]
		})]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/rich-text.tsx
function Gi({ block: e }) {
	return /* @__PURE__ */ Z("div", {
		className: "px-2 text-sm leading-relaxed text-wx-fg-muted [&_a]:text-wx-primary [&_a]:underline",
		children: Ti(e.markdown)
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/team-status.tsx
function Ki({ block: e, config: t }) {
	let n = H("home");
	return /* @__PURE__ */ Q("div", {
		className: "flex items-center gap-3 rounded-wx-lg bg-wx-bg-elevated px-3.5 py-3",
		children: [
			/* @__PURE__ */ Z("span", {
				"aria-hidden": "true",
				className: "h-2 w-2 shrink-0 rounded-full bg-wx-success"
			}),
			/* @__PURE__ */ Q("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ Z("p", {
					className: "text-sm font-semibold text-wx-fg",
					children: n("teamStatusOnline")
				}), e.showResponseTime && /* @__PURE__ */ Z("p", {
					className: "text-xs text-wx-fg-muted",
					children: n("teamStatusReplyTime")
				})]
			}),
			e.showOperatorAvatars && t.operatorAvatars.length > 0 && /* @__PURE__ */ Z(vi, {
				avatars: t.operatorAvatars,
				size: "sm",
				ringClass: "ring-wx-bg-elevated"
			})
		]
	});
}
//#endregion
//#region components/widget/home-blocks/index.tsx
function qi({ blocks: e, config: t, onOpenTab: n, onOpenNewsArticle: r, onOpenHelpArticle: i, isDummy: a, chatId: o }) {
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-col gap-3 px-4 pb-2",
		children: e.map((e, s) => /* @__PURE__ */ Z(Yi, {
			delay: Math.min(s, 6) * .05,
			children: /* @__PURE__ */ Z(Ji, {
				block: e,
				config: t,
				onOpenTab: n,
				onOpenNewsArticle: r,
				onOpenHelpArticle: i,
				isDummy: a,
				chatId: o
			})
		}, `${e.kind}-${s}`))
	});
}
function Ji({ block: e, config: t, onOpenTab: n, onOpenNewsArticle: r, onOpenHelpArticle: i, isDummy: a, chatId: o }) {
	switch (e.kind) {
		case "quick-actions": return /* @__PURE__ */ Z(Bi, {
			block: e,
			onOpenTab: n
		});
		case "help-search": return /* @__PURE__ */ Z(Oi, {
			block: e,
			onOpenTab: n
		});
		case "pinned-articles": return /* @__PURE__ */ Z(ji, {
			block: e,
			onOpenTab: n,
			onOpenArticle: i,
			isDummy: a
		});
		case "news-preview": return /* @__PURE__ */ Z(Ai, {
			block: e,
			onOpenTab: n,
			isDummy: a
		});
		case "team-status": return /* @__PURE__ */ Z(Ki, {
			block: e,
			config: t
		});
		case "rich-text": return /* @__PURE__ */ Z(Gi, { block: e });
		case "divider": return /* @__PURE__ */ Z("hr", { className: "my-1 border-wx-border" });
		case "ask-question": return /* @__PURE__ */ Z(bi, {
			block: e,
			config: t,
			onOpenTab: n
		});
		case "recent-message": return /* @__PURE__ */ Z(Wi, {
			block: e,
			onOpenTab: n,
			isDummy: a,
			chatId: o,
			config: t
		});
		case "featured-article": return /* @__PURE__ */ Z(Di, {
			block: e,
			onOpenTab: n,
			onOpenNewsArticle: r,
			isDummy: a
		});
		default: return null;
	}
}
function Yi({ delay: e, children: t, className: r }) {
	return /* @__PURE__ */ Z(n.div, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .24,
			delay: e,
			ease: "easeOut"
		},
		className: U(r),
		children: t
	});
}
function Xi(e, t) {
	return e.filter((e) => !((e.kind === "help-search" || e.kind === "pinned-articles") && !t.help || e.kind === "news-preview" && !t.news));
}
//#endregion
//#region components/widget/tabs/home-tab.tsx
function Zi({ config: e, organizationLogoUrl: t, onClose: n, onOpenTab: r, isDummy: a, chatId: o, onOpenNewsArticle: s, onOpenHelpArticle: c }) {
	let l = H("header"), u = Ue(), d = Xi(e.homeLayout ?? C, e.features), f = a || !!e.greeting?.headline?.trim() || !!e.greeting?.subheadline?.trim();
	return /* @__PURE__ */ Z(re, {
		className: "flex-1",
		children: /* @__PURE__ */ Q("div", {
			className: "flex flex-col pb-6",
			children: [
				/* @__PURE__ */ Q("div", {
					className: "flex items-center justify-between px-5 pt-5 pb-3",
					children: [t ? /* @__PURE__ */ Z("img", {
						src: t,
						alt: e.messenger?.title ?? "",
						className: "h-9 w-auto max-w-[140px] object-contain"
					}) : a ? /* @__PURE__ */ Z(Ui, { size: 28 }) : /* @__PURE__ */ Z("span", {
						className: "h-9",
						"aria-hidden": "true"
					}), /* @__PURE__ */ Q("div", {
						className: "flex items-center gap-1",
						children: [e.operatorAvatars.length > 0 && /* @__PURE__ */ Z(vi, {
							avatars: e.operatorAvatars,
							ringClass: "ring-wx-bg-elevated/60",
							className: "mr-2"
						}), /* @__PURE__ */ Z(we, {
							type: "button",
							variant: "ghost",
							size: "icon",
							"aria-label": l("close"),
							onClick: n,
							...u.parentHandlers,
							children: /* @__PURE__ */ Z(i, {
								ref: u.iconRef,
								size: 18
							})
						})]
					})]
				}),
				/* @__PURE__ */ Z(Qi, {
					config: e,
					isDummy: a
				}),
				/* @__PURE__ */ Z("div", {
					className: f ? void 0 : "pt-4",
					children: /* @__PURE__ */ Z(qi, {
						blocks: d,
						config: e,
						onOpenTab: r,
						onOpenNewsArticle: s,
						onOpenHelpArticle: c,
						isDummy: a,
						chatId: o
					})
				})
			]
		})
	});
}
function Qi({ config: e, isDummy: t }) {
	let n = H("home"), r = t ? n("greetingHeadline") : e.greeting?.headline?.trim() ?? "", i = t ? n("greetingSubheadline") : e.greeting?.subheadline?.trim() ?? "";
	return !r && !i ? null : /* @__PURE__ */ Q("section", {
		className: "px-5 pt-2 pb-4",
		children: [r && /* @__PURE__ */ Z("p", {
			className: "text-3xl leading-tight font-bold text-wx-fg-muted",
			children: r
		}), i && /* @__PURE__ */ Z("p", {
			className: "mt-1 text-3xl leading-tight font-bold text-wx-fg",
			children: i
		})]
	});
}
//#endregion
//#region lib/file-to-base64.ts
async function $i(e) {
	return new Promise((t, n) => {
		let r = new FileReader();
		r.onload = () => {
			let i = r.result;
			if (typeof i != "string") {
				n(/* @__PURE__ */ Error("FileReader returned non-string result"));
				return;
			}
			let a = i.indexOf(",");
			t({
				base64: a >= 0 ? i.slice(a + 1) : i,
				size: e.size
			});
		}, r.onerror = () => n(r.error ?? /* @__PURE__ */ Error("File read failed")), r.readAsDataURL(e);
	});
}
var ea = new Set([
	"image/png",
	"image/jpeg",
	"image/gif",
	"image/webp",
	"audio/mpeg",
	"audio/ogg",
	"audio/webm",
	"video/mp4",
	"application/pdf"
]), ta = "https://accounts.google.com/gsi/client";
function na({ clientId: e, onCredential: t }) {
	let n = H("messages"), r = Y(null), i = Y(t);
	return J(() => {
		i.current = t;
	}, [t]), J(() => {
		if (typeof window > "u") return;
		let t = !1, n = () => {
			if (t) return;
			let n = window.google?.accounts?.id, a = r.current;
			!n || !a || (n.initialize({
				client_id: e,
				callback: (e) => {
					e?.credential && i.current(e.credential);
				},
				auto_select: !1,
				cancel_on_tap_outside: !0,
				ux_mode: "popup"
			}), a.replaceChildren(), n.renderButton(a, {
				type: "standard",
				theme: "outline",
				size: "large",
				width: 200
			}));
		};
		if (window.google?.accounts?.id) return n(), () => {
			t = !0;
		};
		let a = document.querySelector(`script[src="${ta}"]`);
		if (a) return a.addEventListener("load", n, { once: !0 }), () => {
			t = !0, a.removeEventListener("load", n);
		};
		let o = document.createElement("script");
		return o.src = ta, o.async = !0, o.defer = !0, o.onload = n, document.head.appendChild(o), () => {
			t = !0, o.onload = null;
		};
	}, [e]), /* @__PURE__ */ Q(tt, { children: [/* @__PURE__ */ Q("button", {
		type: "button",
		onClick: () => {
			let e = r.current;
			e && e.querySelector("div[role=\"button\"]")?.click();
		},
		className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2",
		children: [/* @__PURE__ */ Z(ra, {}), /* @__PURE__ */ Z("span", { children: n("googleSignIn") })]
	}), /* @__PURE__ */ Z("div", {
		ref: r,
		"aria-hidden": "true",
		style: {
			position: "absolute",
			width: 1,
			height: 1,
			overflow: "hidden",
			clip: "rect(0 0 0 0)",
			clipPath: "inset(50%)",
			whiteSpace: "nowrap"
		}
	})] });
}
function ra() {
	return /* @__PURE__ */ Q("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 18 18",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ Z("path", {
				d: "M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.614z",
				fill: "#4285F4"
			}),
			/* @__PURE__ */ Z("path", {
				d: "M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z",
				fill: "#34A853"
			}),
			/* @__PURE__ */ Z("path", {
				d: "M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z",
				fill: "#FBBC05"
			}),
			/* @__PURE__ */ Z("path", {
				d: "M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z",
				fill: "#EA4335"
			})
		]
	});
}
//#endregion
//#region node_modules/@simplewebauthn/browser/dist/bundle/index.js
function ia(e) {
	return new TextEncoder().encode(e);
}
function aa(e) {
	let t = new Uint8Array(e), n = "";
	for (let e of t) n += String.fromCharCode(e);
	return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function oa(e) {
	let t = e.replace(/-/g, "+").replace(/_/g, "/"), n = (4 - t.length % 4) % 4, r = t.padEnd(t.length + n, "="), i = atob(r), a = new ArrayBuffer(i.length), o = new Uint8Array(a);
	for (let e = 0; e < i.length; e++) o[e] = i.charCodeAt(e);
	return a;
}
function sa() {
	return window?.PublicKeyCredential !== void 0 && typeof window.PublicKeyCredential == "function";
}
function ca(e) {
	let { id: t } = e;
	return {
		...e,
		id: oa(t),
		transports: e.transports
	};
}
function la(e) {
	return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
var ua = class extends Error {
	constructor({ message: e, code: t, cause: n, name: r }) {
		super(e, { cause: n }), this.name = r ?? n.name, this.code = t;
	}
};
function da({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new ua({
			message: "Registration ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "ConstraintError") {
		if (n.authenticatorSelection?.requireResidentKey === !0) return new ua({
			message: "Discoverable credentials were required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
			cause: e
		});
		if (n.authenticatorSelection?.userVerification === "required") return new ua({
			message: "User verification was required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
			cause: e
		});
	} else if (e.name === "InvalidStateError") return new ua({
		message: "The authenticator was previously registered",
		code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
		cause: e
	});
	else if (e.name === "NotAllowedError") return new ua({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "NotSupportedError") return n.pubKeyCredParams.filter((e) => e.type === "public-key").length === 0 ? new ua({
		message: "No entry in pubKeyCredParams was of type \"public-key\"",
		code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
		cause: e
	}) : new ua({
		message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
		code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!la(t)) return new ua({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rp.id !== t) return new ua({
			message: `The RP ID "${n.rp.id}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "TypeError") {
		if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64) return new ua({
			message: "User ID was not between 1 and 64 characters",
			code: "ERROR_INVALID_USER_ID_LENGTH",
			cause: e
		});
	} else if (e.name === "UnknownError") return new ua({
		message: "The authenticator was unable to process the specified options, or could not create a new credential",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return e;
}
var fa = new class {
	createNewAbortSignal() {
		if (this.controller) {
			let e = /* @__PURE__ */ Error("Cancelling existing WebAuthn API call for new one");
			e.name = "AbortError", this.controller.abort(e);
		}
		let e = new AbortController();
		return this.controller = e, e.signal;
	}
	cancelCeremony() {
		if (this.controller) {
			let e = /* @__PURE__ */ Error("Manually cancelling existing WebAuthn API call");
			e.name = "AbortError", this.controller.abort(e), this.controller = void 0;
		}
	}
}(), pa = ["cross-platform", "platform"];
function ma(e) {
	if (e && !(pa.indexOf(e) < 0)) return e;
}
async function ha(e) {
	if (!sa()) throw Error("WebAuthn is not supported in this browser");
	let t = { publicKey: {
		...e,
		challenge: oa(e.challenge),
		user: {
			...e.user,
			id: ia(e.user.id)
		},
		excludeCredentials: e.excludeCredentials?.map(ca)
	} };
	t.signal = fa.createNewAbortSignal();
	let n;
	try {
		n = await navigator.credentials.create(t);
	} catch (e) {
		throw da({
			error: e,
			options: t
		});
	}
	if (!n) throw Error("Registration was not completed");
	let { id: r, rawId: i, response: a, type: o } = n, s;
	typeof a.getTransports == "function" && (s = a.getTransports());
	let c;
	if (typeof a.getPublicKeyAlgorithm == "function") try {
		c = a.getPublicKeyAlgorithm();
	} catch (e) {
		ga("getPublicKeyAlgorithm()", e);
	}
	let l;
	if (typeof a.getPublicKey == "function") try {
		let e = a.getPublicKey();
		e !== null && (l = aa(e));
	} catch (e) {
		ga("getPublicKey()", e);
	}
	let u;
	if (typeof a.getAuthenticatorData == "function") try {
		u = aa(a.getAuthenticatorData());
	} catch (e) {
		ga("getAuthenticatorData()", e);
	}
	return {
		id: r,
		rawId: aa(i),
		response: {
			attestationObject: aa(a.attestationObject),
			clientDataJSON: aa(a.clientDataJSON),
			transports: s,
			publicKeyAlgorithm: c,
			publicKey: l,
			authenticatorData: u
		},
		type: o,
		clientExtensionResults: n.getClientExtensionResults(),
		authenticatorAttachment: ma(n.authenticatorAttachment)
	};
}
function ga(e, t) {
	console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${e}. You should report this error to them.\n`, t);
}
function _a(e) {
	return new TextDecoder("utf-8").decode(e);
}
function va() {
	let e = window.PublicKeyCredential;
	return e.isConditionalMediationAvailable === void 0 ? new Promise((e) => e(!1)) : e.isConditionalMediationAvailable();
}
function ya({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new ua({
			message: "Authentication ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "NotAllowedError") return new ua({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!la(t)) return new ua({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rpId !== t) return new ua({
			message: `The RP ID "${n.rpId}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "UnknownError") return new ua({
		message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return e;
}
async function ba(e, t = !1) {
	if (!sa()) throw Error("WebAuthn is not supported in this browser");
	let n;
	e.allowCredentials?.length !== 0 && (n = e.allowCredentials?.map(ca));
	let r = {
		...e,
		challenge: oa(e.challenge),
		allowCredentials: n
	}, i = {};
	if (t) {
		if (!await va()) throw Error("Browser does not support WebAuthn autofill");
		if (document.querySelectorAll("input[autocomplete$='webauthn']").length < 1) throw Error("No <input> with \"webauthn\" as the only or last value in its `autocomplete` attribute was detected");
		i.mediation = "conditional", r.allowCredentials = [];
	}
	i.publicKey = r, i.signal = fa.createNewAbortSignal();
	let a;
	try {
		a = await navigator.credentials.get(i);
	} catch (e) {
		throw ya({
			error: e,
			options: i
		});
	}
	if (!a) throw Error("Authentication was not completed");
	let { id: o, rawId: s, response: c, type: l } = a, u;
	return c.userHandle && (u = _a(c.userHandle)), {
		id: o,
		rawId: aa(s),
		response: {
			authenticatorData: aa(c.authenticatorData),
			clientDataJSON: aa(c.clientDataJSON),
			signature: aa(c.signature),
			userHandle: u
		},
		type: l,
		clientExtensionResults: a.getClientExtensionResults(),
		authenticatorAttachment: ma(a.authenticatorAttachment)
	};
}
//#endregion
//#region lib/use-passkey-auth.ts
var xa = S`
  mutation VisitorPasskeyRegistrationOptions($input: VisitorPasskeyOptionsInput!) {
    visitorPasskeyRegistrationOptions(input: $input) {
      sessionId
      optionsJson
    }
  }
`, Sa = S`
  mutation VerifyVisitorPasskeyRegistration($input: VisitorPasskeyVerifyInput!) {
    verifyVisitorPasskeyRegistration(input: $input) {
      token
      expiresIn
      chatId
      peopleId
      kind
      displayName
      shortHandle
    }
  }
`, Ca = S`
  mutation VisitorPasskeyAuthenticationOptions($input: VisitorPasskeyOptionsInput!) {
    visitorPasskeyAuthenticationOptions(input: $input) {
      sessionId
      optionsJson
    }
  }
`, wa = S`
  mutation VerifyVisitorPasskeyAuthentication($input: VisitorPasskeyVerifyInput!) {
    verifyVisitorPasskeyAuthentication(input: $input) {
      token
      expiresIn
      chatId
      peopleId
      kind
      displayName
      shortHandle
    }
  }
`;
function Ta(e) {
	let [t, n] = X("idle"), [r, i] = X(null), [a] = L(xa), [o] = L(Sa), [s] = L(Ca), [c] = L(wa), l = q(async (t) => {
		n("busy"), i(null);
		try {
			let r = {
				visitorId: e.visitorId,
				origin: e.origin
			}, i = t === "register" ? (await a({ variables: { input: r } })).data?.visitorPasskeyRegistrationOptions : (await s({ variables: { input: r } })).data?.visitorPasskeyAuthenticationOptions;
			if (!i) throw Error("passkey_options_failed");
			let l = JSON.parse(i.optionsJson), u = t === "register" ? await ha(l) : await ba(l), d = {
				visitorId: e.visitorId,
				sessionId: i.sessionId,
				responseJson: JSON.stringify(u)
			}, f = t === "register" ? (await o({ variables: { input: d } })).data?.verifyVisitorPasskeyRegistration : (await c({ variables: { input: d } })).data?.verifyVisitorPasskeyAuthentication;
			if (!f) throw Error("passkey_verify_failed");
			return V(f.token), n("idle"), f;
		} catch (e) {
			return n("error"), i(e.message || "passkey_failed"), null;
		}
	}, [
		e.visitorId,
		e.origin,
		a,
		o,
		s,
		c
	]);
	return {
		authenticate: q(() => l("authenticate"), [l]),
		register: q(() => l("register"), [l]),
		status: t,
		error: r,
		supported: typeof window < "u" && sa()
	};
}
//#endregion
//#region components/widget/auth/passkey-sign-in-button.tsx
function Ea({ onSession: e }) {
	let t = H("messages"), { authenticate: n, register: r, status: i, supported: a } = Ta({
		visitorId: et(() => fn(), []),
		origin: typeof window < "u" ? window.location.origin : ""
	}), [o, s] = X(null);
	if (!a) return null;
	let c = async (t, n) => {
		s(null);
		let r = await n();
		r ? e?.(r) : s(t);
	}, l = i === "busy";
	return /* @__PURE__ */ Q("div", {
		className: "flex w-full flex-col items-center gap-1.5",
		children: [
			/* @__PURE__ */ Q("button", {
				type: "button",
				disabled: l,
				onClick: () => c("signIn", n),
				className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2 disabled:opacity-60",
				children: [/* @__PURE__ */ Z(Da, {}), t("passkeySignIn")]
			}),
			/* @__PURE__ */ Z("button", {
				type: "button",
				disabled: l,
				onClick: () => c("register", r),
				className: o === "signIn" ? "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-primary bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-primary transition-colors hover:bg-wx-bg-elevated-2 disabled:opacity-60" : "text-xs text-wx-fg-muted underline-offset-2 hover:underline disabled:opacity-60",
				children: t("passkeyRegister")
			}),
			o === "signIn" && /* @__PURE__ */ Z("p", {
				className: "text-center text-xs text-wx-fg-subtle",
				children: t("passkeyNoCredential")
			}),
			o === "register" && /* @__PURE__ */ Z("p", {
				className: "text-center text-xs text-wx-danger",
				children: t("passkeyError")
			})
		]
	});
}
function Da() {
	return /* @__PURE__ */ Q("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ Z("circle", {
			cx: "8",
			cy: "9",
			r: "4"
		}), /* @__PURE__ */ Z("path", { d: "M10.5 12.5 21 23l-1.5-3 2-1-2-1.5L21 14l-4-1" })]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/composer/attachment-preview.tsx
var Oa = (e) => e.startsWith("image/"), ka = (e) => e.startsWith("video/"), Aa = (e) => e.startsWith("audio/"), ja = (e) => e === "application/pdf";
function Ma({ attachments: e, onRemove: t, onOpenLightbox: n }) {
	let r = H("messages"), i = Y(null), [a, o] = X(null);
	J(() => {
		a && (e.some((e) => e.tempId === a) || (i.current?.pause(), i.current = null, o(null)));
	}, [e, a]), J(() => () => {
		i.current?.pause(), i.current = null;
	}, []);
	let s = (e) => {
		if (!e.url) return;
		if (a === e.tempId) {
			i.current?.pause(), o(null);
			return;
		}
		i.current?.pause();
		let t = new Audio(e.url);
		t.onended = () => {
			o((t) => t === e.tempId ? null : t);
		}, t.play().catch(() => o(null)), i.current = t, o(e.tempId);
	}, c = e.filter((e) => !!e.url && (Oa(e.mimetype) || ka(e.mimetype) || ja(e.mimetype))), l = c.map((e) => ({
		url: e.url,
		mimetype: e.mimetype,
		alt: e.filename
	})), u = (e) => {
		let t = c.findIndex((t) => t.tempId === e.tempId);
		t < 0 || n(l, t);
	};
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-wrap gap-2",
		children: e.map((e) => {
			let n = e.mediaId === null, i = r("removeAttachment");
			if (Oa(e.mimetype) && e.url) return /* @__PURE__ */ Z(Na, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ Z("button", {
					type: "button",
					onClick: () => u(e),
					className: "block h-16 w-16 overflow-hidden rounded-wx-sm bg-wx-bg-elevated",
					"aria-label": r("openPreview"),
					children: /* @__PURE__ */ Z("img", {
						src: e.url,
						alt: e.filename,
						className: "h-full w-full object-cover"
					})
				})
			}, e.tempId);
			if (ka(e.mimetype) && e.url) return /* @__PURE__ */ Z(Na, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ Q("button", {
					type: "button",
					onClick: () => u(e),
					className: "relative block h-16 w-16 overflow-hidden rounded-wx-sm bg-wx-bg-elevated",
					"aria-label": r("openPreview"),
					children: [/* @__PURE__ */ Z("video", {
						src: e.url,
						className: "h-full w-full object-cover",
						muted: !0,
						playsInline: !0,
						preload: "metadata"
					}), /* @__PURE__ */ Z("span", {
						className: "absolute inset-0 flex items-center justify-center bg-black/30 text-white",
						children: /* @__PURE__ */ Z(Ve, {
							size: 16,
							fill: "currentColor"
						})
					})]
				})
			}, e.tempId);
			if (Aa(e.mimetype) && e.url) {
				let o = a === e.tempId, c = o ? ze : Ve;
				return /* @__PURE__ */ Z(Na, {
					uploading: n,
					onRemove: () => t(e.tempId),
					removeLabel: i,
					title: e.filename,
					children: /* @__PURE__ */ Z("button", {
						type: "button",
						onClick: () => s(e),
						"aria-label": r(o ? "pause" : "play"),
						className: U("flex h-16 w-16 items-center justify-center rounded-wx-sm transition-colors", o ? "bg-wx-primary text-wx-primary-fg" : "bg-wx-bg-elevated text-wx-fg-muted hover:text-wx-fg"),
						children: /* @__PURE__ */ Z(c, {
							size: 22,
							fill: "currentColor",
							strokeWidth: 0
						})
					})
				}, e.tempId);
			}
			return ja(e.mimetype) && e.url ? /* @__PURE__ */ Z(Na, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ Z("button", {
					type: "button",
					onClick: () => u(e),
					"aria-label": r("openPreview"),
					className: U("flex h-16 w-16 items-center justify-center rounded-wx-sm", "bg-wx-bg-elevated text-wx-fg-muted transition-colors hover:text-wx-fg"),
					children: /* @__PURE__ */ Z(Un, {
						size: 22,
						"aria-hidden": "true"
					})
				})
			}, e.tempId) : /* @__PURE__ */ Z(Na, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ Z("div", {
					className: "flex h-16 w-16 items-center justify-center rounded-wx-sm bg-wx-bg-elevated text-wx-fg-muted",
					children: /* @__PURE__ */ Z(Un, {
						size: 22,
						"aria-hidden": "true"
					})
				})
			}, e.tempId);
		})
	});
}
function Na({ children: e, uploading: t, onRemove: n, removeLabel: r, title: i }) {
	return /* @__PURE__ */ Q("div", {
		className: "relative",
		title: i,
		children: [
			e,
			t && /* @__PURE__ */ Z("span", {
				"aria-hidden": "true",
				className: U("pointer-events-none absolute inset-0 flex items-center justify-center", "rounded-wx-sm bg-black/30"),
				children: /* @__PURE__ */ Z("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" })
			}),
			/* @__PURE__ */ Z("button", {
				type: "button",
				onClick: n,
				"aria-label": r,
				className: U("absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center", "rounded-full bg-wx-bg text-wx-fg-muted shadow ring-1 ring-wx-border", "transition-colors hover:text-wx-fg"),
				children: /* @__PURE__ */ Z(D, { size: 11 })
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/composer/emoji-picker.tsx
var Pa = Ze(() => import("./widget-react-C5COLy3m.js")), Fa = "native", Ia = {
	"--epr-bg-color": "var(--wx-bg)",
	"--epr-category-label-bg-color": "var(--wx-bg)",
	"--epr-reactions-bg-color": "var(--wx-bg-elevated)",
	"--epr-picker-border-color": "var(--wx-border)",
	"--epr-picker-border-radius": "var(--wx-radius-lg, 12px)",
	"--epr-text-color": "var(--wx-fg)",
	"--epr-category-label-text-color": "var(--wx-fg-muted)",
	"--epr-hover-bg-color": "var(--wx-bg-elevated)",
	"--epr-focus-bg-color": "var(--wx-bg-elevated-2)",
	"--epr-highlight-color": "var(--wx-primary)",
	"--epr-category-icon-active-color": "var(--wx-primary)",
	"--epr-search-input-bg-color": "var(--wx-bg-elevated)",
	"--epr-search-input-bg-color-active": "var(--wx-bg-elevated)",
	"--epr-search-input-text-color": "var(--wx-fg)",
	"--epr-search-input-placeholder-color": "var(--wx-fg-muted)",
	"--epr-search-border-color": "var(--wx-border)",
	"--epr-search-border-color-active": "var(--wx-primary)",
	"--epr-search-input-border-radius": "var(--wx-radius, 8px)",
	"--epr-emoji-size": "22px",
	"--epr-emoji-fullsize": "30px",
	"--epr-emoji-padding": "4px",
	"--epr-category-padding": "4px",
	"--epr-category-navigation-button-size": "22px",
	"--epr-category-label-height": "26px",
	"--epr-header-padding": "6px",
	"--epr-search-input-height": "30px",
	"--epr-search-input-padding": "0 32px 0 34px",
	"--epr-horizontal-padding": "8px"
};
function La({ open: e, onClose: t, onSelect: r, anchorRef: i }) {
	let a = H("messages"), o = Y(null);
	return J(() => {
		if (!e) return;
		let n = (e) => {
			let n = e.target;
			o.current?.contains(n) || i?.current?.contains(n) || t();
		}, r = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("mousedown", n), document.addEventListener("keydown", r), () => {
			document.removeEventListener("mousedown", n), document.removeEventListener("keydown", r);
		};
	}, [
		e,
		t,
		i
	]), /* @__PURE__ */ Z(b, { children: e && /* @__PURE__ */ Z(n.div, {
		ref: o,
		initial: {
			opacity: 0,
			y: 6,
			scale: .96
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 6,
			scale: .96
		},
		transition: {
			duration: .14,
			ease: "easeOut"
		},
		className: U("absolute bottom-full left-3 z-20 mb-2 origin-bottom-left", "overflow-hidden rounded-wx-lg shadow-lg", "[&_.epr-btn-clear-search:hover]:!bg-wx-bg-elevated-2", "[&_.epr-btn-clear-search:focus]:!bg-wx-bg-elevated-2"),
		role: "dialog",
		"aria-label": a("emojiPicker"),
		children: /* @__PURE__ */ Z(Ye, {
			fallback: /* @__PURE__ */ Z("div", {
				className: "bg-wx-bg flex items-center justify-center",
				style: {
					width: 320,
					height: 360
				},
				children: /* @__PURE__ */ Z("div", { className: "border-wx-border border-t-wx-primary h-5 w-5 animate-spin rounded-full border-2" })
			}),
			children: /* @__PURE__ */ Z(Pa, {
				onEmojiClick: (e) => r(e.emoji),
				width: 320,
				height: 360,
				emojiStyle: Fa,
				previewConfig: { showPreview: !1 },
				skinTonesDisabled: !0,
				lazyLoadEmojis: !0,
				searchPlaceHolder: a("emojiSearch"),
				style: Ia
			})
		})
	}) });
}
//#endregion
//#region components/widget/tabs/messages-tab/composer/morph-send-button.tsx
function Ra({ kind: e, disabled: r, onSend: i, onMic: a, ariaLabels: o }) {
	let s = e === "send" ? i : a, c = o[e], l = Ue();
	return /* @__PURE__ */ Z(n.button, {
		type: "button",
		onClick: s,
		disabled: r && e === "send",
		"aria-label": c,
		whileHover: { scale: 1.08 },
		whileTap: { scale: .9 },
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 22
		},
		...e === "mic" ? l.parentHandlers : {},
		className: U("flex h-8 w-8 items-center justify-center rounded-full transition-colors", "bg-wx-primary text-wx-primary-fg hover:bg-wx-primary-hover", "disabled:opacity-50"),
		children: /* @__PURE__ */ Q(b, {
			mode: "wait",
			initial: !1,
			children: [
				e === "send" && r && /* @__PURE__ */ Z(n.span, {
					initial: {
						opacity: 0,
						scale: .6
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .6
					},
					transition: { duration: .14 },
					children: /* @__PURE__ */ Z(Be, {
						size: 14,
						className: "animate-spin"
					})
				}, "sending"),
				e === "send" && !r && /* @__PURE__ */ Z(n.span, {
					initial: {
						opacity: 0,
						scale: .6,
						rotate: -30
					},
					animate: {
						opacity: 1,
						scale: 1,
						rotate: 0
					},
					exit: {
						opacity: 0,
						scale: .6,
						rotate: 30
					},
					transition: { duration: .14 },
					children: /* @__PURE__ */ Z(He, { size: 14 })
				}, "send"),
				e === "mic" && /* @__PURE__ */ Z(n.span, {
					initial: {
						opacity: 0,
						scale: .6
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .6
					},
					transition: { duration: .14 },
					children: /* @__PURE__ */ Z(t, {
						ref: l.iconRef,
						size: 14
					})
				}, "mic")
			]
		})
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/dummy-reply.ts
function za(e, t) {
	let n = e.toLowerCase();
	return n.includes("pric") ? {
		text: t.raw("messenger.replies.pricing.text"),
		buttons: [{
			text: t.raw("messenger.replies.pricing.planBtn"),
			payload: "plans"
		}, {
			text: t.raw("messenger.replies.pricing.salesBtn"),
			payload: "sales"
		}]
	} : n.includes("gaia") || n.includes("ai") ? {
		text: t.raw("messenger.replies.gaia.text"),
		buttons: [{
			text: t.raw("messenger.replies.gaia.handoffBtn"),
			payload: "handoff-flow"
		}]
	} : n.includes("human") || n.includes("chat with") || n.includes("operator") ? { text: t.raw("messenger.replies.human.text") } : { text: t.raw("messenger.replies.fallback.text") };
}
//#endregion
//#region components/widget/tabs/messages-tab/message/date-separator.tsx
function Ba({ label: e }) {
	return /* @__PURE__ */ Z("div", {
		className: "sticky top-2 z-10 flex justify-center py-1",
		children: /* @__PURE__ */ Z("span", {
			className: "rounded-full bg-wx-bg-elevated px-3 py-1 text-[11px] font-medium text-wx-fg-muted shadow-sm",
			children: e
		})
	});
}
//#endregion
//#region lib/internal-link.ts
function Va(e, t) {
	if (!e || e.startsWith("#") || /^[a-z][a-z0-9+\-.]*:/i.test(e) && !/^https?:/i.test(e)) return null;
	let n = t ?? (typeof window < "u" ? window.location.origin : "http://localhost"), r;
	try {
		r = new URL(e, n);
	} catch {
		return null;
	}
	try {
		let e = new URL(n).origin;
		if (r.origin !== e) return null;
	} catch {}
	let i = r.pathname.split("/").filter(Boolean);
	if (i.length < 2) return null;
	let [a, ...o] = i, s = o.join("/");
	if (!s) return null;
	let c = r.searchParams.get("locale") ?? void 0;
	return a === "help" ? {
		kind: "help-article",
		slug: s,
		locale: c
	} : a === "news" || a === "article" ? {
		kind: "news-article",
		slug: s,
		locale: c
	} : null;
}
//#endregion
//#region components/widget/tabs/messages-tab/message/bot-avatar.tsx
function Ha({ size: e, senderKind: t, senderName: n, senderAvatarUrl: r, aiAssistantAvatarUrl: i, organizationLogoUrl: a, organizationName: o, className: s }) {
	let c = H("messages"), l = {
		width: e,
		height: e
	};
	if (t === "ai" || t === "bot") return i ? /* @__PURE__ */ Z("span", {
		style: l,
		className: U("relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg-elevated shadow-sm", s),
		role: "img",
		"aria-label": c("aiAssistant"),
		children: /* @__PURE__ */ Z("img", {
			src: i,
			alt: "",
			className: "h-full w-full object-cover",
			loading: "eager",
			decoding: "async"
		})
	}) : /* @__PURE__ */ Z("span", {
		style: l,
		className: U("shrink-0", s),
		"aria-hidden": "true"
	});
	if (r) return /* @__PURE__ */ Z("span", {
		style: l,
		className: U("shrink-0 overflow-hidden rounded-full", s),
		children: /* @__PURE__ */ Z("img", {
			src: r,
			alt: "",
			className: "h-full w-full object-cover"
		})
	});
	let u = n ? Ua(n) : "";
	if (!u && a) return /* @__PURE__ */ Z("span", {
		style: l,
		className: U("shrink-0 overflow-hidden rounded-full", s),
		children: /* @__PURE__ */ Z("img", {
			src: a,
			alt: o ?? "",
			className: "h-full w-full object-cover"
		})
	});
	let d = u || (o ?? "").trim().charAt(0).toUpperCase();
	return /* @__PURE__ */ Z("span", {
		style: l,
		className: U("flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg-elevated text-[0.7em] font-semibold text-wx-fg-muted", s),
		children: d || ""
	});
}
function Ua(e) {
	let t = e.trim().split(/\s+/).map((e) => e.replace(/[^\p{L}\p{N}]/gu, "")).filter((e) => e.length > 0);
	return t.length === 0 ? "" : t.length === 1 ? t[0].charAt(0).toUpperCase() : t[0].charAt(0).toUpperCase() + t[t.length - 1].charAt(0).toUpperCase();
}
//#endregion
//#region components/widget/tabs/messages-tab/message/message-bubble.tsx
var Wa = Ze(() => import("./widget-react-CUuKGDZN.js").then((e) => ({ default: e.AudioBubblePlayer })));
function Ga({ message: e, organizationLogoUrl: t, organizationName: r, aiAssistantAvatarUrl: i, buttonsActive: a, onButtonClick: o, onOpenLightbox: s, onInternalLink: c }) {
	let l = H("messages"), u = e.direction === "OUTBOUND", d = e.sender.kind === "ai" || e.sender.kind === "bot" ? gt : e.sender.name?.trim() || "", f = d ? null : e.sender.kind === "operator" ? l("operator") : null;
	return /* @__PURE__ */ Q(n.div, {
		layout: "position",
		"data-message-id": e.id,
		initial: {
			opacity: 0,
			x: u ? -16 : 16
		},
		animate: {
			opacity: 1,
			x: 0
		},
		exit: { opacity: 0 },
		transition: {
			duration: .24,
			ease: "easeOut"
		},
		className: U("flex flex-col gap-1.5", u ? "items-start" : "items-end"),
		children: [
			/* @__PURE__ */ Q("div", {
				className: U("flex max-w-[85%] items-start gap-2", u ? "flex-row" : "flex-row-reverse"),
				children: [u && /* @__PURE__ */ Z(Ha, {
					size: 28,
					senderKind: e.sender.kind,
					senderName: e.sender.name,
					senderAvatarUrl: e.sender.avatar,
					aiAssistantAvatarUrl: i,
					organizationLogoUrl: t,
					organizationName: r,
					className: "mt-0.5"
				}), (() => {
					let t = e.media ?? [], n = (e) => e.mimetype.startsWith("image/") || e.mimetype.startsWith("video/") || e.mimetype === "application/pdf", r = t.filter(n), i = t.filter((e) => !n(e)), a = !!e.text, o = i.length > 0;
					return /* @__PURE__ */ Q("div", {
						className: U("max-w-full overflow-hidden rounded-wx-lg", (a || o) && (u ? "bg-wx-bg-elevated text-wx-fg" : "bg-wx-primary text-wx-primary-fg")),
						children: [r.length > 0 && /* @__PURE__ */ Z(qa, {
							items: r,
							onOpenLightbox: s
						}), (a || o) && /* @__PURE__ */ Q("div", {
							className: U("flex flex-col gap-2 px-4 py-2.5 text-sm", r.length > 0 && "pt-2"),
							children: [a && /* @__PURE__ */ Z(Ka, {
								text: e.text,
								isOutbound: u,
								onInternalLink: c
							}), i.map((e, t) => /* @__PURE__ */ Z(Ja, {
								media: e,
								onDark: !u
							}, t))]
						})]
					});
				})()]
			}),
			(d || e.ageLabel) && /* @__PURE__ */ Q("p", {
				className: U("flex items-center gap-1.5 text-[11px] text-wx-fg-subtle", u ? "ml-9" : "mr-1"),
				children: [
					u && d && /* @__PURE__ */ Z("span", {
						className: "font-medium text-wx-fg-muted",
						children: d
					}),
					u && f && /* @__PURE__ */ Q(tt, { children: [/* @__PURE__ */ Z("span", {
						"aria-hidden": "true",
						children: "·"
					}), /* @__PURE__ */ Z("span", { children: f })] }),
					e.ageLabel && /* @__PURE__ */ Q(tt, { children: [u && d || u && f ? /* @__PURE__ */ Z("span", {
						"aria-hidden": "true",
						children: "·"
					}) : null, /* @__PURE__ */ Z("span", { children: e.ageLabel })] })
				]
			}),
			a && e.buttons && e.buttons.length > 0 && /* @__PURE__ */ Z(n.div, {
				initial: {
					opacity: 0,
					y: 4
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: { opacity: 0 },
				transition: {
					duration: .18,
					ease: "easeOut"
				},
				className: U("flex flex-wrap gap-1", u ? "ml-9 max-w-[85%]" : "mr-1 justify-end"),
				children: e.buttons.map((e) => /* @__PURE__ */ Z(n.button, {
					type: "button",
					onClick: () => o?.(e),
					whileHover: { y: -1 },
					whileTap: { scale: .96 },
					transition: {
						type: "spring",
						stiffness: 480,
						damping: 26
					},
					className: U("rounded-full bg-wx-bg-elevated px-2.5 py-1 text-xs font-medium text-wx-primary", "transition-colors hover:bg-wx-primary hover:text-wx-primary-fg"),
					children: e.text
				}, e.payload))
			})
		]
	});
}
function Ka({ text: e, isOutbound: t, onInternalLink: n }) {
	let r = q((e) => {
		if (!n || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
		let t = e.target?.closest?.("a");
		if (!t) return;
		let r = t.getAttribute("href");
		if (!r) return;
		let i = Va(r);
		i && (e.preventDefault(), n(i));
	}, [n]);
	return /^\s*<[a-z][a-z0-9]*(\s|>|\/)/i.test(e) ? /* @__PURE__ */ Z("div", {
		onClick: r,
		dangerouslySetInnerHTML: { __html: e },
		className: U("leading-relaxed", "[&>p]:my-0 [&>p+p]:mt-2", "[&_a]:underline [&_a]:underline-offset-2 [&_a]:opacity-90 [&_a:hover]:opacity-100", "[&_strong]:font-semibold [&_em]:italic", "[&_ul]:my-1.5 [&_ul]:list-disc [&_ul]:pl-5", "[&_ol]:my-1.5 [&_ol]:list-decimal [&_ol]:pl-5", "[&_li]:my-0.5", "[&_code]:rounded-sm [&_code]:bg-black/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.85em]", !t && "[&_code]:bg-white/15")
	}) : /* @__PURE__ */ Z("p", {
		className: "whitespace-pre-wrap leading-relaxed",
		children: e
	});
}
function qa({ items: e, onOpenLightbox: t }) {
	let n = H("messages");
	if (e.length === 0) return null;
	let r = e.length > 1;
	return /* @__PURE__ */ Z("div", {
		className: U("grid w-full", r ? "max-h-[20rem] grid-cols-2 gap-0.5 auto-rows-fr" : "grid-cols-1"),
		children: e.map((i, a) => {
			let o = () => t?.(e, a);
			return i.mimetype === "application/pdf" ? /* @__PURE__ */ Q("button", {
				type: "button",
				onClick: o,
				"aria-label": i.alt || n("openPreview"),
				className: U("group flex w-full cursor-zoom-in items-center gap-3 px-4 py-3 text-left", "bg-wx-bg-elevated text-wx-fg transition-colors hover:bg-wx-bg-elevated-2"),
				children: [/* @__PURE__ */ Z("span", {
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-wx-sm bg-wx-bg text-[10px] font-bold tracking-wider text-wx-fg-muted shadow-sm",
					children: "PDF"
				}), /* @__PURE__ */ Q("span", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ Z("span", {
						className: "truncate text-sm font-medium",
						children: i.alt
					}), /* @__PURE__ */ Z("span", {
						className: "truncate text-xs text-wx-fg-muted",
						children: i.mimetype
					})]
				})]
			}, a) : i.mimetype.startsWith("video/") ? /* @__PURE__ */ Q("div", {
				className: "relative w-full",
				children: [/* @__PURE__ */ Z("video", {
					src: i.url,
					controls: !0,
					preload: "metadata",
					className: U("block w-full", r ? "h-full object-cover" : "max-h-80")
				}), r && /* @__PURE__ */ Z("button", {
					type: "button",
					"aria-label": i.alt || n("openPreview"),
					onClick: o,
					className: "absolute inset-0 cursor-zoom-in"
				})]
			}, a) : /* @__PURE__ */ Z("button", {
				type: "button",
				onClick: o,
				"aria-label": i.alt || n("openImage"),
				className: U("group relative block w-full overflow-hidden", "cursor-zoom-in"),
				children: /* @__PURE__ */ Z("img", {
					src: i.url,
					alt: i.alt,
					loading: "lazy",
					className: U("block w-full transition-transform duration-200 group-hover:scale-[1.02]", r ? "h-full object-cover" : "max-h-80 object-cover")
				})
			}, a);
		})
	});
}
function Ja({ media: e, onDark: t }) {
	return e.mimetype.startsWith("audio/") ? /* @__PURE__ */ Z(Ye, {
		fallback: /* @__PURE__ */ Z("div", { className: "h-12 w-56 max-w-full animate-pulse rounded-wx bg-wx-bg-elevated" }),
		children: /* @__PURE__ */ Z(Wa, {
			src: e.url,
			onDark: t
		})
	}) : /* @__PURE__ */ Z(Ya, { media: e });
}
function Ya({ media: e }) {
	let t = e.alt || e.url.split("/").pop() || e.mimetype || "File", n = Xa(e.mimetype);
	return /* @__PURE__ */ Q("a", {
		href: e.url,
		target: "_blank",
		rel: "noopener",
		className: "flex max-w-xs items-center gap-3 rounded-wx-sm bg-wx-bg-elevated/60 px-3 py-2.5 text-xs text-wx-fg transition-colors hover:bg-wx-bg-elevated",
		children: [/* @__PURE__ */ Z("span", {
			className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-wx-sm bg-wx-bg-elevated-2 text-[10px] font-bold tracking-wider text-wx-fg-muted uppercase",
			children: n
		}), /* @__PURE__ */ Q("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ Z("span", {
				className: "block truncate font-medium text-wx-fg",
				children: t
			}), /* @__PURE__ */ Z("span", {
				className: "block truncate text-wx-fg-subtle",
				children: e.mimetype || "file"
			})]
		})]
	});
}
function Xa(e) {
	return e ? e.includes("pdf") ? "PDF" : e.includes("zip") || e.includes("compressed") ? "ZIP" : e.includes("spreadsheet") || e.includes("excel") ? "XLS" : e.includes("word") || e.includes("document") ? "DOC" : e.startsWith("text/") ? "TXT" : (e.split("/")[1] ?? "").slice(0, 4).toUpperCase() || "FILE" : "FILE";
}
//#endregion
//#region components/widget/tabs/messages-tab/message/typing-bubble.tsx
function Za({ actorName: e, actorKind: t, actorAvatarUrl: r, actorPhase: i, aiAssistantAvatarUrl: a, organizationLogoUrl: o, organizationName: s }) {
	let c = H("messages");
	return /* @__PURE__ */ Q(n.div, {
		layout: "position",
		initial: {
			opacity: 0,
			y: 6
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: { opacity: 0 },
		transition: { duration: .18 },
		className: "flex flex-col items-start gap-1.5",
		children: [/* @__PURE__ */ Q("div", {
			className: "flex max-w-[85%] items-start gap-2",
			children: [/* @__PURE__ */ Z(Ha, {
				size: 28,
				senderKind: t,
				senderName: e,
				senderAvatarUrl: r,
				aiAssistantAvatarUrl: a,
				organizationLogoUrl: o,
				organizationName: s,
				className: "mt-0.5"
			}), /* @__PURE__ */ Z("div", {
				className: "rounded-wx-lg bg-wx-bg-elevated px-4 py-3 text-sm text-wx-fg",
				children: /* @__PURE__ */ Q("span", {
					className: "inline-flex items-end gap-1",
					children: [
						/* @__PURE__ */ Z("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-wx-fg-muted [animation-delay:-0.3s]" }),
						/* @__PURE__ */ Z("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-wx-fg-muted [animation-delay:-0.15s]" }),
						/* @__PURE__ */ Z("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-wx-fg-muted" })
					]
				})
			})]
		}), /* @__PURE__ */ Q("p", {
			className: "ml-9 text-[11px] text-wx-fg-subtle",
			children: [
				/* @__PURE__ */ Z("span", {
					className: "font-medium text-wx-fg-muted",
					children: e && e !== "…" ? e : c("typingSomeone")
				}),
				/* @__PURE__ */ Z("span", {
					"aria-hidden": "true",
					children: " · "
				}),
				/* @__PURE__ */ Z("span", { children: c(i === "thinking" ? "aiThinking" : i === "searching" ? "aiSearching" : "typing") })
			]
		})]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message/unread-divider.tsx
var Qa = Xe(({ label: e }, t) => /* @__PURE__ */ Q("div", {
	ref: t,
	className: "flex items-center gap-2 py-1",
	children: [
		/* @__PURE__ */ Z("span", {
			"aria-hidden": "true",
			className: "h-px flex-1 bg-wx-danger/40"
		}),
		/* @__PURE__ */ Z("span", {
			className: "text-[11px] font-semibold text-wx-danger",
			children: e
		}),
		/* @__PURE__ */ Z("span", {
			"aria-hidden": "true",
			className: "h-px flex-1 bg-wx-danger/40"
		})
	]
}));
Qa.displayName = "UnreadDivider";
//#endregion
//#region components/widget/tabs/messages-tab/message/typewriter.tsx
var $a = 42;
function eo(e) {
	let t = $a * (.6 + Math.random() * .8);
	return e && ".!?".includes(e) ? t += 380 : e && ",;:".includes(e) && (t += 180), t;
}
function to({ text: e, startDelayMs: t = 0, onDone: n }) {
	let [r, i] = X(t > 0 ? -1 : 0), a = Y(n);
	if (a.current = n, J(() => i(t > 0 ? -1 : 0), [e]), J(() => {
		if (r < 0) {
			let e = setTimeout(() => i(0), t);
			return () => clearTimeout(e);
		}
		if (r >= e.length) {
			a.current?.();
			return;
		}
		let n = setTimeout(() => i((e) => e + 1), eo(e[r - 1]));
		return () => clearTimeout(n);
	}, [
		r,
		e,
		t
	]), r < 0) return /* @__PURE__ */ Q("span", {
		className: "inline-flex items-end gap-1 align-middle",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ Z("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60 [animation-delay:-0.3s]" }),
			/* @__PURE__ */ Z("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60 [animation-delay:-0.15s]" }),
			/* @__PURE__ */ Z("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60" })
		]
	});
	let o = r >= e.length;
	return /* @__PURE__ */ Q(tt, { children: [e.slice(0, r), !o && /* @__PURE__ */ Z("span", {
		"aria-hidden": "true",
		className: "ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.15em] animate-pulse rounded-[1px] bg-current align-baseline"
	})] });
}
//#endregion
//#region components/widget/tabs/messages-tab/message/welcome-message.tsx
function no({ kind: e, text: t, typewriter: n = !1, typewriterDelayMs: r = 0 }) {
	return e === "SYSTEM" ? /* @__PURE__ */ Z("div", {
		className: "flex justify-center px-2 py-1",
		children: /* @__PURE__ */ Z("span", {
			className: "text-[11px] text-wx-fg-muted",
			children: n ? /* @__PURE__ */ Z(to, {
				text: t,
				startDelayMs: r
			}) : t
		})
	}) : /* @__PURE__ */ Q("div", {
		className: "flex w-full items-start gap-2 rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2.5 text-wx-fg-muted",
		children: [/* @__PURE__ */ Z(Jn, {
			size: 15,
			className: "mt-0.5 shrink-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ Z("p", {
			className: "text-xs leading-relaxed italic",
			children: t
		})]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message-mapping.ts
function ro(e, t) {
	if (!e) return [];
	let n = e.visitorChatHistory;
	if (!n || typeof n != "object") return [];
	let r = n.items;
	return Array.isArray(r) ? r.filter((e) => typeof e == "object" && !!e).map((e, n) => {
		let r = e.sender ?? {}, i = typeof e.deliveryStatus == "string" ? e.deliveryStatus : void 0, a = typeof r.avatar == "string" ? r.avatar : void 0, o = e.buttons, s = Array.isArray(o) ? o.filter((e) => typeof e == "object" && !!e).map((e) => {
			let t = typeof e.label == "string" ? e.label : typeof e.text == "string" ? e.text : "";
			return {
				text: t,
				payload: typeof e.value == "string" ? e.value : typeof e.payload == "string" ? e.payload : t
			};
		}).filter((e) => !!e.text) : void 0, c = r.kind ?? "operator", l = c === "ai" || c === "bot" ? gt : r.name ?? "", u = io(e.media), d = typeof e.createdAt == "string" ? e.createdAt : void 0;
		return {
			id: String(e.id ?? `m-${n}`),
			direction: e.direction === "INBOUND" ? "INBOUND" : "OUTBOUND",
			text: typeof e.text == "string" ? e.text : "",
			ageLabel: oo(d, t),
			...d ? { createdAt: d } : {},
			sender: {
				kind: c,
				name: l,
				...a ? { avatar: a } : {}
			},
			...u.length > 0 ? { media: u } : {},
			...s && s.length > 0 ? { buttons: s } : {},
			...i ? { deliveryStatus: i } : {}
		};
	}).reverse() : [];
}
function io(e) {
	return e ? (Array.isArray(e) ? e : typeof e == "object" && e ? [typeof e.mediaId == "object" && e.mediaId !== null ? e.mediaId : e] : []).filter((e) => typeof e == "object" && !!e).map((e) => ({
		url: typeof e.url == "string" ? e.url : "",
		mimetype: typeof e.mimeType == "string" ? e.mimeType : typeof e.mimetype == "string" ? e.mimetype : "",
		alt: typeof e.filename == "string" ? e.filename : typeof e.alt == "string" ? e.alt : ""
	})).filter((e) => !!e.url && !!e.mimetype) : [];
}
function ao(e, t) {
	let n = atob(e), r = new Uint8Array(n.length);
	for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
	return new Blob([r], { type: t });
}
function oo(e, t) {
	if (!e) return "";
	try {
		return new Date(e).toLocaleTimeString(t, {
			hour: "numeric",
			minute: "2-digit"
		});
	} catch {
		return "";
	}
}
//#endregion
//#region components/widget/tabs/messages-tab/message-rows.ts
var so = (e, t) => e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
function co(e, t) {
	if (e.createdAt) {
		let t = new Date(e.createdAt);
		if (!Number.isNaN(t.getTime())) return t;
	}
	return t;
}
function lo(e, t, n) {
	if (so(e, n)) return t.todayLabel;
	let r = new Date(n);
	return r.setDate(n.getDate() - 1), so(e, r) ? t.yesterdayLabel : e.toLocaleDateString(t.locale, e.getFullYear() === n.getFullYear() ? {
		day: "numeric",
		month: "short"
	} : {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function uo(e, t) {
	let n = t.now ?? /* @__PURE__ */ new Date(), r = [], i = null;
	for (let a of e) {
		let e = co(a, n), o = `${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;
		o !== i && (i = o, r.push({
			kind: "date",
			key: `date-${o}`,
			label: lo(e, t, n)
		})), t.unreadAnchorId && a.id === t.unreadAnchorId && r.push({
			kind: "unread",
			key: "unread-divider"
		}), r.push({
			kind: "message",
			key: a.clientKey ?? a.id,
			message: a
		});
	}
	return r;
}
//#endregion
//#region components/ui/input.tsx
var fo = K.forwardRef(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ Z("input", {
	ref: r,
	type: t,
	className: U("h-11 w-full rounded-wx bg-wx-bg-elevated px-4 text-sm text-wx-fg", "placeholder:text-wx-fg-muted", "focus:outline-none focus:ring-2 focus:ring-wx-primary", "disabled:cursor-not-allowed disabled:opacity-50", e),
	...n
}));
fo.displayName = "Input";
//#endregion
//#region components/widget/tabs/messages-tab/prechat-form/helpers.ts
function po(e) {
	return e === "EMAIL" ? "email" : e === "PHONE" ? "tel" : "text";
}
function mo(e) {
	return e === "NAME" ? "name" : e === "EMAIL" ? "email" : e === "PHONE" ? "tel" : "off";
}
function ho(e) {
	return `wexio:prechat-submitted:${e}`;
}
function go(e) {
	try {
		return localStorage.getItem(ho(e)) === "1";
	} catch {
		return !1;
	}
}
function _o(e) {
	try {
		localStorage.setItem(ho(e), "1");
	} catch {}
}
function vo(e, t, n) {
	let r = {};
	for (let i of e.fields) {
		let e = (t[i.key] ?? "").trim();
		if (i.required && !e) {
			r[i.key] = n.required;
			continue;
		}
		e && (i.kind === "EMAIL" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? r[i.key] = n.invalidEmail : i.kind === "PHONE" && !/^[+\d\s()-]{5,}$/.test(e) && (r[i.key] = n.invalidPhone));
	}
	return r;
}
function yo(e, t) {
	return e.fields.map((e) => ({
		key: e.key,
		value: (t[e.key] ?? "").trim()
	})).filter((e) => e.value.length > 0);
}
function bo(e, t) {
	if (!t) return {};
	let n = {};
	for (let r of e.fields) {
		let e = (r.kind === "NAME" ? t.name : r.kind === "EMAIL" ? t.email : r.kind === "PHONE" ? t.phone : void 0)?.trim();
		e && (n[r.key] = e);
	}
	return n;
}
//#endregion
//#region components/widget/tabs/messages-tab/prechat-form/composer-fields.tsx
function xo({ form: e, values: t, errors: n, onChange: r, disabled: i = !1 }) {
	let a = H("prechat"), o = (e) => {
		if (e.label.trim()) return e.label;
		switch (e.kind) {
			case "NAME": return a("labelName");
			case "EMAIL": return a("labelEmail");
			case "PHONE": return a("labelPhone");
			case "CUSTOM_TEXT": return a("labelCustom");
		}
	};
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-col gap-1.5 border-wx-border border-b px-2.5 pt-2 pb-1.5",
		children: e.fields.map((e) => {
			let a = o(e), s = n[e.key];
			return /* @__PURE__ */ Q("div", { children: [/* @__PURE__ */ Z(fo, {
				type: po(e.kind),
				value: t[e.key] ?? "",
				onChange: (t) => r(e.key, t.target.value),
				autoComplete: mo(e.kind),
				disabled: i,
				"aria-invalid": !!s,
				"aria-label": a,
				placeholder: e.required ? `${a} *` : a,
				className: U("h-8 rounded-wx-md px-3 text-[13px]", s && "ring-1 ring-wx-danger placeholder:text-wx-danger/60 focus:ring-wx-danger")
			}), s && /* @__PURE__ */ Z("p", {
				className: "mt-0.5 px-1 text-[10px] text-wx-danger leading-none",
				children: s
			})] }, e.key);
		})
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/index.tsx
var So = {
	required: "r",
	invalidEmail: "e",
	invalidPhone: "p"
}, Co = Ze(() => import("./widget-react-CPYwD6FR.js").then((e) => ({ default: e.VoiceRecorderBar })));
function wo({ isDummy: e, chatId: t, token: r, prechatForm: i, messenger: a, organizationLogoUrl: o, organizationName: s, isOpen: c = !0, onInbound: l, onOutbound: u, registerRealtimeHandler: d, unreadCount: f = 0, clearUnread: p, liveMessages: m, appendLiveMessage: h, replaceLiveMessage: g, initialVisitorMessage: _, onInitialVisitorMessageSent: v, visitorIdentity: y, visitorPrefill: x, security: S, verified: C = !1, onGoogleCredential: w, onPasskeySession: T, onInternalLink: E }) {
	let D = H("messages"), O = H("demo"), k = H("prechat"), A = De(), j = _e() ?? "", [M, N] = X(null);
	J(() => {
		N(go(j));
	}, [j]);
	let [P, F] = X({}), [I, ee] = X({}), [te, ne] = X(null), [L, { loading: R }] = Pt(), ie = q((e, t) => {
		F((n) => ({
			...n,
			[e]: t
		})), ee((t) => {
			if (!t[e]) return t;
			let n = { ...t };
			return delete n[e], n;
		});
	}, []), z = et(() => i ? bo(i, x) : {}, [i, x]);
	J(() => {
		Object.keys(z).length !== 0 && F((e) => {
			let t = !1, n = { ...e };
			for (let [e, r] of Object.entries(z)) n[e] || (n[e] = r, t = !0);
			return t ? n : e;
		});
	}, [z]);
	let [ae, B] = X(!1), oe = et(() => {
		if (!y || !i?.enabled || i.fields.length === 0) return !1;
		let e = (e) => e === "NAME" ? !!y.name?.trim() : e === "EMAIL" ? !!y.email?.trim() : e === "PHONE" ? !!y.phone?.trim() : !1;
		return i.fields.filter((e) => e.required).every((t) => e(t.kind));
	}, [y, i]), ce = et(() => !i?.enabled || i.fields.length === 0 || Object.keys(z).length === 0 ? !1 : Object.keys(vo(i, z, So)).length === 0, [i, z]), le = Y(!1);
	J(() => {
		!ce || M !== !1 || ae || le.current || oe || !i || !e && !r || (le.current = !0, (async () => {
			if (e) {
				_o(j), N(!0);
				return;
			}
			try {
				await L({ variables: { input: { fields: yo(i, z) } } }), _o(j), N(!0);
			} catch {
				le.current = !1, B(!0);
			}
		})());
	}, [
		ce,
		M,
		ae,
		oe,
		i,
		z,
		e,
		r,
		j,
		L
	]);
	let ue = !!i?.enabled && i.fields.length > 0 && M === !1 && !oe && !(ce && !ae), [de, fe] = X(() => {
		if (typeof window > "u") return !1;
		try {
			return sessionStorage.getItem("wexio:demo-authed") === "1";
		} catch {
			return !1;
		}
	}), pe = (e) => {
		fe(e);
		try {
			e ? sessionStorage.setItem("wexio:demo-authed", "1") : sessionStorage.removeItem("wexio:demo-authed");
		} catch {}
	}, V = S?.google?.enabled ? S.google.clientId : null, me = !!S?.passkey?.enabled, he = !!S?.requireAuth && !C && !(e && de), ge = q(async () => {
		if (!ue || !i) return !0;
		let t = vo(i, P, {
			required: k("required"),
			invalidEmail: k("invalidEmail"),
			invalidPhone: k("invalidPhone")
		});
		if (Object.keys(t).length > 0) return ee(t), !1;
		if (ne(null), e) return _o(j), N(!0), !0;
		try {
			return await L({ variables: { input: { fields: yo(i, P) } } }), _o(j), N(!0), !0;
		} catch (e) {
			return ne(e instanceof Error ? e.message : k("submitFailed")), !1;
		}
	}, [
		ue,
		i,
		P,
		e,
		j,
		L,
		k
	]), [ve, ye] = X(""), [be, xe] = X(!1), [Se, Ce] = X(!1), [we, Te] = X(!1), Ee = Y(null), Oe = Y(null), W = Y(null);
	J(() => {
		if (!Se) return;
		let e = (e) => {
			let t = e.target;
			W.current?.contains(t) || t instanceof Element && t.closest("[data-wx-commands-panel]") || Ce(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [Se]);
	let ke = (e) => {
		let t = Ee.current;
		if (!t) {
			ye((t) => t + e);
			return;
		}
		let n = t.selectionStart ?? ve.length, r = t.selectionEnd ?? ve.length;
		ye(ve.slice(0, n) + e + ve.slice(r)), requestAnimationFrame(() => {
			t.focus();
			let r = n + e.length;
			t.setSelectionRange(r, r);
		});
	};
	J(() => {
		let e = Ee.current;
		e && (e.style.height = "auto", e.style.height = `${Math.min(e.scrollHeight, 120)}px`);
	}, [ve]);
	let [Ae, je] = X(e ? Tn(O) : []), Me = e ? Ae : m ?? [], Ne = q((t) => {
		if (e) {
			je((e) => e.some((e) => e.id === t.id) ? e : [...e, t]);
			return;
		}
		h?.(t);
	}, [e, h]), [Pe, Fe] = X(/* @__PURE__ */ new Set()), [Ie, Le] = X(null), Re = Y(null);
	J(() => () => {
		Re.current && clearTimeout(Re.current);
	}, []);
	let [ze, Be] = X([]), [Ve, He] = X(null), Ue = Y(null), We = Y(null), [Ge] = At(), [Ke] = Mt(), [qe] = Tt(), K = Y(/* @__PURE__ */ new Set()), Je = Y(!0), Xe = Y(!0), Ze = Y(!1);
	J(() => {
		f === 0 && (Ze.current = !1);
	}, [f]);
	let Qe = q(() => {
		Ze.current || f !== 0 && (Ze.current = !0, p?.(), !(e || !t) && qe({ variables: { chatId: t } }).catch(() => {
			Ze.current = !1;
		}));
	}, [
		t,
		e,
		f,
		qe,
		p
	]), [$e, nt] = X(() => /* @__PURE__ */ new Set()), [rt, it] = X(null), at = (e, t) => it({
		items: e,
		index: t
	}), { data: ot, loading: st, fetchMore: ct } = It({
		variables: {
			chatId: t ?? "",
			limit: 10
		},
		skip: e || !t || !r
	}), lt = (() => {
		let e = ot?.visitorChatHistory?.items;
		if (!Array.isArray(e) || e.length === 0) return null;
		let t = e[e.length - 1];
		return typeof t?.id == "string" ? t.id : null;
	})(), ut = !!ot?.visitorChatHistory?.nextCursor, [dt, ft] = X(!1), [pt, mt] = X(!1), ht = q(async () => {
		if (!(e || !t || !lt || dt || pt || !ut)) {
			ft(!0);
			try {
				((await ct({
					variables: {
						chatId: t,
						before: lt,
						limit: 10
					},
					updateQuery: (e, { fetchMoreResult: t }) => {
						if (!t) return e;
						let n = e.visitorChatHistory?.items ?? [], r = t.visitorChatHistory?.items ?? [], i = new Set(n.map((e) => typeof e.id == "string" ? e.id : null).filter((e) => !!e)), a = [...n, ...r.filter((e) => typeof e.id != "string" || !i.has(e.id))];
						return {
							...e,
							visitorChatHistory: {
								...t.visitorChatHistory,
								items: a
							}
						};
					}
				})).data.visitorChatHistory?.items?.length ?? 0) === 0 && mt(!0);
			} catch {} finally {
				ft(!1);
			}
		}
	}, [
		e,
		t,
		lt,
		dt,
		pt,
		ut,
		ct
	]), _t = Y(() => {});
	J(() => {
		_t.current = (e) => wt(e);
	}), J(() => {
		if (d) return d((e) => _t.current(e));
	}, [d]);
	let [vt, { loading: yt }] = Ct(), [bt] = Ot(), xt = Y(0), St = q(() => {
		if (e || !r) return;
		let t = Date.now();
		t - xt.current < 3e3 || (xt.current = t, bt().catch(() => void 0));
	}, [
		bt,
		e,
		r
	]), wt = (e) => {
		let t = e.from ?? e.sender, n = t?.kind, r = t?.name ?? "";
		if (e.kind === "typing") {
			Le({
				name: n === "ai" || n === "bot" ? gt : r,
				kind: n,
				avatar: t?.avatar,
				phase: e.phase
			}), Re.current && clearTimeout(Re.current), Re.current = setTimeout(() => Le(null), 8e3);
			return;
		}
		if (e.kind === "read-receipt") {
			let t = e.readReceipt?.messageIds ?? [];
			t.length > 0 && nt((e) => {
				let n = new Set(e);
				for (let e of t) n.add(e);
				return n;
			});
			return;
		}
		Re.current && (clearTimeout(Re.current), Re.current = null), Le(null);
	}, $ = et(() => {
		if (e) return Me;
		let t = ro(ot, A), n = new Set(t.map((e) => e.id)), r = Me.filter((e) => !n.has(e.id));
		return [...t, ...r];
	}, [
		e,
		Me,
		ot,
		A
	]), Et = Y(0);
	Et.current === 0 && f > 0 && (Et.current = f);
	let [Dt, kt] = X(null), jt = Y(null), Nt = Y(!1), Ft = Y(null);
	Ft.current = Dt, J(() => {
		if (Nt.current || st) return;
		Nt.current = !0;
		let e = Et.current;
		if (e > 0 && $.length > 0) {
			let t = 0, n = null;
			for (let r = $.length - 1; r >= 0 && !($[r].direction === "OUTBOUND" && (n = $[r].id, t += 1, t >= e)); r--);
			n && kt(n);
		}
	}, [st, $]), J(() => {
		if (!Dt) return;
		let e = jt.current;
		e && (zt.current = !0, e.scrollIntoView({
			block: "center",
			behavior: "auto"
		}));
	}, [Dt]), J(() => {
		if (!Dt) return;
		let e = setTimeout(() => kt(null), 4e3);
		return () => clearTimeout(e);
	}, [Dt]);
	let Lt = Y(c);
	J(() => {
		let e = c && !Lt.current;
		if (Lt.current = c, !e) return;
		let t = null;
		if (f > 0 && $.length > 0) {
			let e = 0;
			for (let n = $.length - 1; n >= 0 && !($[n].direction === "OUTBOUND" && (t = $[n].id, e += 1, e >= f)); n--);
		}
		Ft.current = t, zt.current = !1, kt(t);
	}, [
		c,
		f,
		$
	]), J(() => {
		let e = Ue.current;
		if (!e) return;
		let t = () => {
			let t = e.scrollHeight - e.scrollTop - e.clientHeight < 80;
			Je.current = t, t && (Xe.current = !0), e.scrollTop < 120 && ht();
		};
		t(), e.addEventListener("scroll", t, { passive: !0 });
		let n = (t) => {
			let n = t.target;
			(n instanceof HTMLImageElement || n instanceof HTMLVideoElement) && (!Je.current || !Xe.current || e.scrollTo({
				top: e.scrollHeight,
				behavior: "auto"
			}));
		};
		return e.addEventListener("load", n, !0), () => {
			e.removeEventListener("scroll", t), e.removeEventListener("load", n, !0);
		};
	}, [ht]);
	let Rt = Y(null);
	J(() => {
		let e = Ue.current;
		if (!e) return;
		if (dt) {
			Rt.current = {
				scrollTop: e.scrollTop,
				scrollHeight: e.scrollHeight
			};
			return;
		}
		let t = Rt.current;
		if (!t) return;
		Rt.current = null;
		let n = e.scrollHeight - t.scrollHeight;
		n > 0 && (e.scrollTop = t.scrollTop + n);
	}, [dt]);
	let zt = Y(!1), Bt = Y(0);
	J(() => {
		let e = Ue.current;
		if (!e) return;
		let t = !zt.current && $.length > 0, n = Bt.current, r = $.length > n;
		Bt.current = $.length;
		let i = $[$.length - 1], a = r && !t && !!i && i.sender.kind !== "visitor", o = r ? $[n] : null;
		if (!t && !Je.current) return;
		let s = e.firstElementChild, c = r && !t && !!i && i.sender.kind === "visitor", l = () => {
			if (!(!t && !Je.current) && !(Ft.current || Et.current > 0 && !Nt.current)) {
				if (a) {
					if (Xe.current = !1, !Je.current) return;
					let t = o ? e.querySelector(`[data-message-id="${o.id}"]`) : null;
					if (!t) return;
					let n = t.getBoundingClientRect().height, r = e.clientHeight;
					if (n <= r * .6) e.scrollTo({
						top: e.scrollHeight - r,
						behavior: "smooth"
					});
					else {
						let n = e.getBoundingClientRect(), i = t.getBoundingClientRect().top - n.top + e.scrollTop - (r - 80), a = Math.max(0, Math.min(e.scrollHeight - r, i));
						e.scrollTo({
							top: a,
							behavior: "smooth"
						});
					}
					return;
				}
				c && (Xe.current = !0), !(!t && !Xe.current) && e.scrollTo({
					top: e.scrollHeight,
					behavior: t ? "auto" : "smooth"
				});
			}
		};
		l(), t && (zt.current = !0, Je.current = !0);
		let u = requestAnimationFrame(l), d = null;
		if (s && typeof ResizeObserver < "u") {
			d = new ResizeObserver(l), d.observe(s);
			let e = window.setTimeout(() => d?.disconnect(), 2e3);
			return () => {
				cancelAnimationFrame(u), clearTimeout(e), d?.disconnect();
			};
		}
		return () => cancelAnimationFrame(u);
	}, [
		$.length,
		Ie,
		Dt,
		c
	]), J(() => {
		if (!c || f === 0) return;
		let e = Ue.current;
		if (!e) return;
		let t = () => {
			e.scrollHeight - e.scrollTop - e.clientHeight <= 20 && Qe();
		};
		return t(), e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, [
		c,
		f,
		Qe,
		$.length
	]);
	let Vt = (() => {
		for (let e = $.length - 1; e >= 0; e--) {
			let t = $[e];
			if (t.direction !== "OUTBOUND") break;
			if (t.buttons && t.buttons.length > 0 && !Pe.has(t.id)) return t.id;
		}
		return null;
	})(), Ht = (e) => {
		let t = `tmp-${Date.now()}`;
		Ne({
			id: t,
			direction: "INBOUND",
			text: e,
			ageLabel: "now",
			sender: {
				kind: "visitor",
				name: "You"
			},
			deliveryStatus: "DELIVERED"
		}), u?.(), setTimeout(() => {
			let n = za(e, O);
			Ne({
				id: `tmp-fin-${Date.now()}`,
				direction: "OUTBOUND",
				text: n.text,
				ageLabel: "now",
				sender: {
					kind: "ai",
					name: gt
				},
				buttons: n.buttons
			}), nt((e) => {
				let n = new Set(e);
				return n.add(t), n;
			}), l?.();
		}, 900);
	}, Ut = Y(!1);
	J(() => {
		!e || !_ || Ut.current || (Ut.current = !0, Ht(_), v?.());
	}, [e, _]);
	let Wt = (t, n) => {
		if (Fe((e) => {
			let n = new Set(e);
			return n.add(t), n;
		}), e) {
			Ht(n.text);
			return;
		}
		let r = `tmp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
		Ne({
			id: r,
			clientKey: r,
			direction: "INBOUND",
			text: n.text,
			ageLabel: "now",
			sender: {
				kind: "visitor",
				name: ""
			},
			deliveryStatus: "SENT"
		}), u?.(), vt({ variables: { input: { text: n.text } } }).then((e) => {
			let t = e.data?.sendVisitorMessage?.messageId;
			t && g?.(r, {
				id: t,
				direction: "INBOUND",
				text: n.text,
				ageLabel: "now",
				sender: {
					kind: "visitor",
					name: ""
				},
				deliveryStatus: "DELIVERED"
			});
		}).catch(() => {});
	}, Gt = async (t) => {
		if (He(null), !ea.has(t.type)) {
			He(D("fileMimeNotAllowed"));
			return;
		}
		if (t.size > 10485760) {
			He(D("fileTooLarge"));
			return;
		}
		if (e) {
			Be((e) => [...e, {
				tempId: `upl-${Date.now()}`,
				filename: t.name,
				mimetype: t.type,
				mediaId: "demo-media",
				url: URL.createObjectURL(t)
			}]);
			return;
		}
		let n = `upl-${Date.now()}`, r = URL.createObjectURL(t);
		Be((e) => [...e, {
			tempId: n,
			filename: t.name,
			mimetype: t.type,
			mediaId: null,
			url: r
		}]);
		try {
			let { base64: e } = await $i(t), i = (await Ge({ variables: { input: {
				filename: t.name,
				mimetype: t.type,
				dataBase64: e
			} } })).data?.uploadVisitorMedia;
			if (!i) throw Error("empty upload response");
			K.current.delete(n) && Ke({ variables: { mediaId: i.mediaId } }).catch(() => void 0), i.url && URL.revokeObjectURL(r), Be((e) => e.map((e) => e.tempId === n ? {
				...e,
				mediaId: i.mediaId,
				...i.url ? { url: i.url } : {}
			} : e));
		} catch {
			URL.revokeObjectURL(r), Be((e) => e.filter((e) => e.tempId !== n)), He(D("uploadFailed"));
		}
	}, Kt = (t) => {
		let n = ze.find((e) => e.tempId === t);
		n?.url?.startsWith("blob:") && URL.revokeObjectURL(n.url), n && !e && (n.mediaId ? Ke({ variables: { mediaId: n.mediaId } }).catch(() => void 0) : K.current.add(t)), Be((e) => e.filter((e) => e.tempId !== t));
	}, qt = async () => {
		He(null), await ge() && Te(!0);
	}, Jt = async (t) => {
		if (Te(!1), t.size > 10485760) {
			He(D("fileTooLarge"));
			return;
		}
		if (e) {
			let e = ao(t.base64, t.mimetype), n = URL.createObjectURL(e), r = `tmp-voice-${Date.now()}`;
			Ne({
				id: r,
				direction: "INBOUND",
				text: "",
				ageLabel: "now",
				sender: {
					kind: "visitor",
					name: "You"
				},
				media: [{
					url: n,
					mimetype: t.mimetype,
					alt: t.filename
				}],
				deliveryStatus: "DELIVERED"
			}), u?.(), setTimeout(() => {
				Ne({
					id: `tmp-fin-${Date.now()}`,
					direction: "OUTBOUND",
					text: "Got your voice note - let me check that and circle back.",
					ageLabel: "now",
					sender: {
						kind: "ai",
						name: gt
					}
				}), nt((e) => {
					let t = new Set(e);
					return t.add(r), t;
				}), l?.();
			}, 900);
			return;
		}
		try {
			let e = (await Ge({ variables: { input: {
				filename: t.filename,
				mimetype: t.mimetype,
				dataBase64: t.base64
			} } })).data?.uploadVisitorMedia?.mediaId;
			if (!e) throw Error("empty upload response");
			let n = ao(t.base64, t.mimetype), r = URL.createObjectURL(n), i = `tmp-voice-${Date.now()}`;
			Ne({
				id: i,
				clientKey: i,
				direction: "INBOUND",
				text: "",
				ageLabel: "now",
				sender: {
					kind: "visitor",
					name: ""
				},
				media: [{
					url: r,
					mimetype: t.mimetype,
					alt: t.filename
				}],
				deliveryStatus: "SENT"
			}), await vt({ variables: { input: { mediaIds: [e] } } }), u?.();
		} catch {
			He(D("uploadFailed"));
		}
	}, Yt = (e) => {
		Te(!1), He(D(e === "unsupported" ? "voiceUnsupported" : e === "denied" ? "voiceDenied" : "uploadFailed"));
	}, Xt = async () => {
		let t = ve.trim(), n = ze.map((e) => e.mediaId).filter((e) => !!e);
		if (!t && n.length === 0 || yt || R) return;
		let r = ze.filter((e) => !!e.mediaId && !!e.url).map((e) => ({
			url: e.url,
			mimetype: e.mimetype,
			alt: e.filename
		}));
		if (!await ge()) return;
		if (e) {
			ye(""), Be([]), Ht(t || "[file]");
			return;
		}
		let i = `tmp-${Date.now()}`;
		Ne({
			id: i,
			clientKey: i,
			direction: "INBOUND",
			text: t,
			ageLabel: "now",
			sender: {
				kind: "visitor",
				name: ""
			},
			...r.length > 0 ? { media: r } : {},
			deliveryStatus: "SENT"
		}), ye(""), Be([]);
		try {
			let e = await vt({ variables: { input: {
				...t ? { text: t } : {},
				...n.length > 0 ? { mediaIds: n } : {}
			} } });
			u?.();
			let a = e.data?.sendVisitorMessage?.messageId;
			a && g?.(i, {
				id: a,
				direction: "INBOUND",
				text: t,
				ageLabel: "now",
				sender: {
					kind: "visitor",
					name: ""
				},
				...r.length > 0 ? { media: r } : {},
				deliveryStatus: "DELIVERED"
			});
		} catch {}
	}, Zt = async (t) => {
		if (Ce(!1), !await ge()) return;
		if (e) {
			Ht(t);
			return;
		}
		let n = `tmp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
		Ne({
			id: n,
			clientKey: n,
			direction: "INBOUND",
			text: t,
			ageLabel: "now",
			sender: {
				kind: "visitor",
				name: ""
			},
			deliveryStatus: "SENT"
		}), u?.();
		try {
			let e = (await vt({ variables: { input: { text: t } } })).data?.sendVisitorMessage?.messageId;
			e && g?.(n, {
				id: e,
				direction: "INBOUND",
				text: t,
				ageLabel: "now",
				sender: {
					kind: "visitor",
					name: ""
				},
				deliveryStatus: "DELIVERED"
			});
		} catch {}
	}, Qt = ve.trim() || ze.length > 0 ? "send" : "mic", $t = ze.some((e) => e.mediaId === null), en = e ? Cn(O) : a?.messages ?? [], tn = en.filter((e) => e.kind === "SYSTEM"), nn = en.filter((e) => e.kind === "HINT"), rn = e || he || !st && !ut;
	a?.showRelatedNews, a?.showRelatedHelpArticles, a?.showReactionCounts;
	let an = et(() => uo($, {
		locale: A,
		todayLabel: D("today"),
		yesterdayLabel: D("yesterday"),
		unreadAnchorId: Dt
	}), [
		$,
		A,
		D,
		Dt
	]);
	return /* @__PURE__ */ Q("div", {
		className: "flex flex-1 flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ Z(re, {
				className: "flex-1",
				viewportRef: Ue,
				children: /* @__PURE__ */ Q("div", {
					className: "flex flex-col gap-3 px-4 pt-4 pb-3",
					children: [
						rn && tn.length > 0 && /* @__PURE__ */ Z("div", {
							className: "flex flex-col gap-2",
							children: tn.map((e) => /* @__PURE__ */ Z(no, {
								kind: e.kind,
								text: e.text
							}, `${e.kind}:${e.text}`))
						}),
						rn && nn.length > 0 && /* @__PURE__ */ Z("div", {
							className: "flex flex-col gap-2",
							children: nn.map((e) => /* @__PURE__ */ Z(no, {
								kind: e.kind,
								text: e.text
							}, `${e.kind}:${e.text}`))
						}),
						!he && /* @__PURE__ */ Q(tt, { children: [st && $.length === 0 && /* @__PURE__ */ Q("div", {
							className: "flex flex-col gap-3",
							children: [
								/* @__PURE__ */ Q("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ Z(G, { className: "h-7 w-7 shrink-0 rounded-full" }), /* @__PURE__ */ Z(G, { className: "h-10 w-3/4 rounded-wx-lg" })]
								}),
								/* @__PURE__ */ Z("div", {
									className: "flex flex-row-reverse items-start",
									children: /* @__PURE__ */ Z(G, { className: "h-8 w-2/3 rounded-wx-lg" })
								}),
								/* @__PURE__ */ Q("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ Z(G, { className: "h-7 w-7 shrink-0 rounded-full" }), /* @__PURE__ */ Z(G, { className: "h-12 w-4/5 rounded-wx-lg" })]
								})
							]
						}), /* @__PURE__ */ Z(b, {
							initial: e,
							children: an.map((e) => {
								if (e.kind === "date") return /* @__PURE__ */ Z(Ba, { label: e.label }, e.key);
								if (e.kind === "unread") return /* @__PURE__ */ Z(Qa, {
									ref: jt,
									label: D("unreadMessages")
								}, e.key);
								let t = e.message;
								return /* @__PURE__ */ Z(Ga, {
									message: $e.has(t.id) ? {
										...t,
										deliveryStatus: "READ"
									} : t,
									organizationLogoUrl: o,
									organizationName: s,
									aiAssistantAvatarUrl: a?.aiAssistantAvatar ?? null,
									buttonsActive: t.id === Vt,
									onButtonClick: (e) => Wt(t.id, e),
									onOpenLightbox: at,
									onInternalLink: E
								}, e.key);
							})
						})] }),
						!he && Ie && /* @__PURE__ */ Z(Za, {
							actorName: Ie.name,
							actorKind: Ie.kind,
							actorAvatarUrl: Ie.avatar,
							actorPhase: Ie.phase,
							aiAssistantAvatarUrl: a?.aiAssistantAvatar ?? null,
							organizationLogoUrl: o,
							organizationName: s
						})
					]
				})
			}),
			/* @__PURE__ */ Q("div", {
				className: "relative bg-wx-bg px-3 pt-2 pb-3",
				children: [
					/* @__PURE__ */ Z(La, {
						open: be,
						onClose: () => xe(!1),
						onSelect: ke,
						anchorRef: Oe
					}),
					Ve && /* @__PURE__ */ Z("p", {
						className: "mb-2 text-xs text-wx-danger",
						children: Ve
					}),
					/* @__PURE__ */ Z(b, {
						mode: "wait",
						initial: !1,
						children: he ? /* @__PURE__ */ Q(n.div, {
							initial: {
								opacity: 0,
								y: 6
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -6
							},
							transition: { duration: .18 },
							className: "flex flex-col items-center gap-2 rounded-wx-lg border border-wx-border bg-wx-bg p-4",
							children: [/* @__PURE__ */ Z("p", {
								className: "text-center text-sm text-wx-fg-muted",
								children: D("signInToChat")
							}), /* @__PURE__ */ Z("div", {
								className: "flex w-full flex-col gap-2",
								children: e ? /* @__PURE__ */ Q(tt, { children: [
									S?.google?.enabled && /* @__PURE__ */ Z("button", {
										type: "button",
										onClick: () => pe(!0),
										className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2",
										children: D("googleSignInDemo")
									}),
									S?.passkey?.enabled && /* @__PURE__ */ Z("button", {
										type: "button",
										onClick: () => pe(!0),
										className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2",
										children: D("passkeySignIn")
									}),
									!S?.google?.enabled && !S?.passkey?.enabled && /* @__PURE__ */ Z("p", {
										className: "text-center text-xs text-wx-fg-subtle",
										children: D("signInUnavailable")
									})
								] }) : /* @__PURE__ */ Q(tt, { children: [
									V && /* @__PURE__ */ Z(na, {
										clientId: V,
										onCredential: (e) => w?.(e)
									}),
									me && /* @__PURE__ */ Z(Ea, { onSession: T }),
									!V && !me && /* @__PURE__ */ Z("p", {
										className: "text-center text-xs text-wx-fg-subtle",
										children: D("signInUnavailable")
									})
								] })
							})]
						}, "auth-gate") : we ? /* @__PURE__ */ Z(Ye, {
							fallback: /* @__PURE__ */ Z("div", { className: "h-13 w-full animate-pulse rounded-wx-lg bg-wx-bg-elevated" }),
							children: /* @__PURE__ */ Z(Co, {
								onComplete: Jt,
								onCancel: () => Te(!1),
								onError: Yt
							})
						}, "recorder") : /* @__PURE__ */ Q(n.div, {
							initial: {
								opacity: 0,
								y: 6
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -6
							},
							transition: { duration: .18 },
							className: U("flex flex-col rounded-wx-lg border border-wx-border bg-wx-bg", "focus-within:border-wx-primary focus-within:ring-2 focus-within:ring-wx-primary/20", "transition-colors"),
							children: [
								ze.length > 0 && /* @__PURE__ */ Z("div", {
									className: "px-3 pt-3 pb-1",
									children: /* @__PURE__ */ Z(Ma, {
										attachments: ze,
										onRemove: Kt,
										onOpenLightbox: at
									})
								}),
								ue && i && /* @__PURE__ */ Q(tt, { children: [/* @__PURE__ */ Z(xo, {
									form: i,
									values: P,
									errors: I,
									onChange: ie,
									disabled: R
								}), te && /* @__PURE__ */ Z("p", {
									className: "px-3 pt-1.5 text-[11px] text-wx-danger",
									children: te
								})] }),
								/* @__PURE__ */ Z("textarea", {
									ref: Ee,
									name: "wexio-message",
									value: ve,
									onChange: (e) => {
										ye(e.target.value), St();
									},
									onKeyDown: (e) => {
										e.key === "Enter" && !e.shiftKey && (e.preventDefault(), Xt());
									},
									placeholder: D("sendCta"),
									style: {
										minHeight: 41,
										maxHeight: 120
									},
									autoComplete: "off",
									autoCorrect: "off",
									autoCapitalize: "sentences",
									spellCheck: !0,
									"data-1p-ignore": "true",
									"data-lpignore": "true",
									"data-form-type": "other",
									className: U("w-full resize-none rounded-wx-lg bg-transparent px-4 pt-2.5 pb-1 text-sm text-wx-fg", "placeholder:text-wx-fg-muted", "focus:outline-none")
								}),
								/* @__PURE__ */ Q("div", {
									className: "flex items-center justify-between px-1.5 pt-0.5 pb-1.5",
									children: [/* @__PURE__ */ Q("div", {
										className: "flex items-center gap-0.5",
										children: [
											/* @__PURE__ */ Z("input", {
												ref: We,
												type: "file",
												accept: Array.from(ea).join(","),
												className: "hidden",
												onChange: (e) => {
													let t = e.target.files?.[0];
													t && Gt(t), e.target.value = "";
												}
											}),
											/* @__PURE__ */ Z(n.button, {
												type: "button",
												"aria-label": D("attach"),
												onClick: () => We.current?.click(),
												whileHover: { scale: 1.12 },
												whileTap: { scale: .9 },
												transition: {
													type: "spring",
													stiffness: 400,
													damping: 20
												},
												className: "flex h-7 w-7 items-center justify-center rounded-full text-wx-fg-muted transition-colors hover:bg-wx-bg-elevated hover:text-wx-fg",
												children: /* @__PURE__ */ Z(nr, { size: 14 })
											}),
											/* @__PURE__ */ Z(n.button, {
												ref: Oe,
												type: "button",
												"aria-label": D("emoji"),
												"aria-expanded": be,
												onClick: () => xe((e) => !e),
												whileHover: { scale: 1.12 },
												whileTap: { scale: .9 },
												transition: {
													type: "spring",
													stiffness: 400,
													damping: 20
												},
												className: U("flex h-7 w-7 items-center justify-center rounded-full transition-colors", be ? "bg-wx-bg-elevated text-wx-fg" : "text-wx-fg-muted hover:bg-wx-bg-elevated hover:text-wx-fg"),
												children: /* @__PURE__ */ Z(or, { size: 14 })
											}),
											(a?.commands?.length ?? 0) > 0 && /* @__PURE__ */ Q("div", {
												className: "relative",
												children: [/* @__PURE__ */ Z(n.button, {
													ref: W,
													type: "button",
													"aria-label": D("commands"),
													"aria-expanded": Se,
													onClick: () => Ce((e) => !e),
													whileHover: { scale: 1.12 },
													whileTap: { scale: .9 },
													transition: {
														type: "spring",
														stiffness: 400,
														damping: 20
													},
													className: U("flex h-7 w-7 items-center justify-center rounded-full transition-colors", Se ? "bg-wx-bg-elevated text-wx-fg" : "text-wx-fg-muted hover:bg-wx-bg-elevated hover:text-wx-fg"),
													children: /* @__PURE__ */ Z(Hn, { size: 14 })
												}), /* @__PURE__ */ Z(b, { children: Se && /* @__PURE__ */ Z(n.div, {
													"data-wx-commands-panel": !0,
													initial: {
														opacity: 0,
														y: 4
													},
													animate: {
														opacity: 1,
														y: 0
													},
													exit: {
														opacity: 0,
														y: 4
													},
													transition: { duration: .12 },
													className: "absolute bottom-full left-0 z-10 mb-2 w-44 overflow-hidden rounded-lg border border-wx-border bg-wx-bg shadow-lg",
													children: /* @__PURE__ */ Z("ul", {
														className: "flex flex-col py-1",
														children: a?.commands.map((e) => /* @__PURE__ */ Z("li", { children: /* @__PURE__ */ Z("button", {
															type: "button",
															onClick: () => Zt(e),
															className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs font-mono text-wx-fg hover:bg-wx-bg-elevated",
															children: e
														}) }, e))
													})
												}) })]
											})
										]
									}), /* @__PURE__ */ Z(Ra, {
										kind: Qt,
										disabled: yt || $t,
										onSend: Xt,
										onMic: qt,
										ariaLabels: {
											send: D("sendCta"),
											mic: D("record")
										}
									})]
								})
							]
						}, "composer")
					})
				]
			}),
			/* @__PURE__ */ Z(se, {
				items: rt?.items ?? [],
				initialIndex: rt?.index ?? 0,
				open: !!rt,
				onClose: () => it(null)
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/avatar-hero.tsx
function To({ field: e, value: t, uploading: n, onPick: r, onClear: i, displayName: a, t: o }) {
	let s = Y(null), [c, l] = X(!1);
	J(() => {
		l(!1);
	}, [t]);
	let u = a.split(/\s+/).filter(Boolean).slice(0, 2).map((e) => e[0]?.toUpperCase() ?? "").join(""), d = e.pinned;
	return /* @__PURE__ */ Q("div", {
		className: "flex flex-col items-center gap-2.5 pt-4 pb-2",
		children: [
			/* @__PURE__ */ Q("div", {
				className: "group relative",
				children: [
					/* @__PURE__ */ Z("span", {
						"aria-hidden": "true",
						className: "absolute -inset-2 rounded-full bg-wx-primary/20 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
					}),
					/* @__PURE__ */ Q("button", {
						type: "button",
						disabled: d || n,
						onClick: () => s.current?.click(),
						"aria-label": o("uploadAvatar"),
						style: {
							height: 88,
							width: 88
						},
						className: U("relative flex items-center justify-center overflow-hidden rounded-full", "bg-gradient-to-br from-wx-bg-elevated to-wx-bg-elevated-2 text-2xl font-semibold text-wx-fg-muted", "ring-1 ring-inset ring-wx-border", !d && !n && "cursor-pointer transition-transform duration-200 hover:scale-[1.04]", d && "cursor-not-allowed"),
						children: [t && !c ? /* @__PURE__ */ Z("img", {
							src: t,
							alt: "",
							className: "h-full w-full object-cover",
							referrerPolicy: "no-referrer",
							onError: () => l(!0)
						}) : u ? /* @__PURE__ */ Z("span", {
							"aria-hidden": "true",
							children: u
						}) : /* @__PURE__ */ Z(Bn, {
							size: 26,
							"aria-hidden": "true"
						}), !d && /* @__PURE__ */ Z("span", {
							className: "absolute inset-x-0 bottom-0 flex h-7 items-center justify-center bg-black/45 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100",
							children: n ? /* @__PURE__ */ Z(Be, {
								size: 14,
								className: "animate-spin text-white",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ Z(qn, {
								size: 14,
								className: "text-white",
								"aria-hidden": "true"
							})
						})]
					}),
					d && /* @__PURE__ */ Z("span", {
						className: "absolute right-0 bottom-0 flex h-6 w-6 items-center justify-center rounded-full bg-wx-bg shadow-sm ring-1 ring-wx-border",
						children: /* @__PURE__ */ Z(Yn, {
							size: 11,
							className: "text-wx-fg-subtle",
							"aria-hidden": "true"
						})
					}),
					!d && t && /* @__PURE__ */ Z("button", {
						type: "button",
						onClick: i,
						"aria-label": o("removeAvatar"),
						className: "-top-1 -right-1 absolute flex h-7 w-7 items-center justify-center rounded-full border border-wx-border bg-wx-bg text-wx-fg-muted shadow-sm transition-colors hover:bg-wx-bg-elevated hover:text-wx-danger",
						children: /* @__PURE__ */ Z(ur, {
							size: 12,
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ Z("input", {
						ref: s,
						type: "file",
						accept: "image/png,image/jpeg,image/gif,image/webp",
						className: "hidden",
						onChange: (e) => {
							let t = e.target.files?.[0];
							t && r(t), e.target.value = "";
						}
					})
				]
			}),
			a && /* @__PURE__ */ Z("p", {
				className: "text-[15px] font-semibold text-wx-fg",
				children: a
			}),
			d && /* @__PURE__ */ Z("p", {
				className: "text-[11px] text-wx-fg-subtle",
				children: o("pinnedHint")
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/switch.tsx
function Eo({ checked: e, onChange: t, disabled: n }) {
	return /* @__PURE__ */ Z("button", {
		type: "button",
		role: "switch",
		"aria-checked": e,
		disabled: n,
		onClick: () => t(!e),
		className: U("relative h-6 w-10 shrink-0 rounded-full transition-colors", e ? "bg-wx-primary" : "bg-wx-bg-elevated-2", n && "cursor-not-allowed opacity-60"),
		children: /* @__PURE__ */ Z("span", {
			"aria-hidden": "true",
			className: U("absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform", e && "translate-x-4")
		})
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/boolean-control.tsx
function Do({ id: e, value: t, disabled: n, onChange: r }) {
	return /* @__PURE__ */ Z("div", {
		id: e,
		className: "flex",
		children: /* @__PURE__ */ Z(Eo, {
			checked: t === "true",
			disabled: n,
			onChange: (e) => r(e ? "true" : "false")
		})
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/helpers.ts
function Oo(e) {
	let t = {};
	for (let n of e.fields) t[n.key] = n.value ?? null;
	return t;
}
function ko(e) {
	return e == null || e === "" || e.trim() === "";
}
function Ao(e, t) {
	if (e == null) return null;
	switch (t) {
		case "STRING":
		case "ENUM":
		case "AVATAR": return e.trim() === "" ? null : e.trim();
		case "NUMBER": {
			let t = e.trim();
			if (t === "") return null;
			let n = Number(t);
			return Number.isFinite(n) ? String(n) : t;
		}
		case "BOOLEAN": return e === "true" ? "true" : "false";
		case "DATE": return e === "" ? null : e;
		case "ARRAY": {
			let t = e.trim();
			if (t === "") return null;
			try {
				let e = JSON.parse(t);
				if (Array.isArray(e)) return JSON.stringify(e.map(String));
			} catch {}
			return JSON.stringify(t.split(",").map((e) => e.trim()).filter(Boolean));
		}
		default: return e;
	}
}
function jo(e, t) {
	let n = [];
	for (let r of e) {
		if (r.pinned) continue;
		let e = Ao(r.value ?? null, r.type), i = Ao(t[r.key] ?? null, r.type);
		e !== i && n.push({
			key: r.key,
			value: i ?? ""
		});
	}
	return n;
}
function Mo(e, t) {
	let n = (n) => t[n]?.trim() || e.fields.find((e) => e.key === n)?.value?.trim() || "", r = n("firstName"), i = n("lastName");
	return r || i ? `${r} ${i}`.trim() : n("name") || n("displayName") || "";
}
function No(e) {
	if (!e) return "";
	if (/^\d{4}-\d{2}-\d{2}$/.test(e)) return e;
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : t.toISOString().slice(0, 10);
}
function Po(e) {
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		if (Array.isArray(t)) return t.map((e) => String(e));
	} catch {}
	return [];
}
function Fo(e, t) {
	try {
		let n = new Intl.DisplayNames([t], { type: "language" }).of(e);
		if (n) return n.charAt(0).toUpperCase() + n.slice(1);
	} catch {}
	return e;
}
//#endregion
//#region components/widget/tabs/profile-tab/input-class.ts
var Io = U("w-full rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2 text-sm text-wx-fg", "focus:border-wx-primary focus:outline-none focus:ring-2 focus:ring-wx-primary/20", "read-only:cursor-not-allowed read-only:bg-wx-bg-elevated/60 read-only:text-wx-fg-muted", "disabled:cursor-not-allowed disabled:bg-wx-bg-elevated/60 disabled:text-wx-fg-muted");
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/date-control.tsx
function Lo({ id: e, value: t, disabled: n, onChange: r }) {
	return /* @__PURE__ */ Z("input", {
		id: e,
		type: "date",
		value: No(t),
		disabled: n,
		onChange: (e) => r(e.target.value || null),
		className: Io
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/number-control.tsx
function Ro({ id: e, value: t, disabled: n, onChange: r }) {
	return /* @__PURE__ */ Z("input", {
		id: e,
		type: "number",
		value: t ?? "",
		disabled: n,
		inputMode: "decimal",
		onChange: (e) => r(e.target.value || null),
		className: Io
	});
}
//#endregion
//#region node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function zo(e) {
	let t = /* @__PURE__ */ Bo(e), n = K.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = K.Children.toArray(r), o = a.find(Ho);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? K.Children.count(e) > 1 ? K.Children.only(null) : K.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ Z(t, {
				...i,
				ref: n,
				children: K.isValidElement(e) ? K.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ Z(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function Bo(e) {
	let t = K.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (K.isValidElement(n)) {
			let e = Wo(n), i = Uo(r, n.props);
			return n.type !== K.Fragment && (i.ref = t ? ee(t, e) : e), K.cloneElement(n, i);
		}
		return K.Children.count(n) > 1 ? K.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var Vo = Symbol("radix.slottable");
function Ho(e) {
	return K.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Vo;
}
function Uo(e, t) {
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
function Wo(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Go(e) {
	let t = e + "CollectionProvider", [n, r] = oe(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = (e) => {
		let { scope: t, children: n } = e, r = Je.useRef(null), a = Je.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ Z(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	};
	o.displayName = t;
	let s = e + "CollectionSlot", c = /* @__PURE__ */ zo(s), l = Je.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ Z(c, {
			ref: I(t, a(s, n).collectionRef),
			children: r
		});
	});
	l.displayName = s;
	let u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ zo(u), p = Je.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = Je.useRef(null), s = I(t, o), c = a(u, n);
		return Je.useEffect(() => (c.itemMap.set(o, {
			ref: o,
			...i
		}), () => void c.itemMap.delete(o))), /* @__PURE__ */ Z(f, {
			[d]: "",
			ref: s,
			children: r
		});
	});
	p.displayName = u;
	function m(t) {
		let n = a(e + "CollectionConsumer", t);
		return Je.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${d}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: o,
			Slot: l,
			ItemSlot: p
		},
		m,
		r
	];
}
//#endregion
//#region node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function Ko(e, t = globalThis?.document) {
	let n = z(e);
	K.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && n(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [n, t]);
}
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var qo = "DismissableLayer", Jo = "dismissableLayer.update", Yo = "dismissableLayer.pointerDownOutside", Xo = "dismissableLayer.focusOutside", Zo, Qo = K.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), $o = K.forwardRef((e, t) => {
	let { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: o, onDismiss: s, ...c } = e, l = K.useContext(Qo), [u, d] = K.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, p] = K.useState({}), m = I(t, (e) => d(e)), h = Array.from(l.layers), [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), _ = h.indexOf(g), v = u ? h.indexOf(u) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, b = v >= _, x = ns((e) => {
		let t = e.target, n = [...l.branches].some((e) => e.contains(t));
		!b || n || (i?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f), S = rs((e) => {
		let t = e.target;
		[...l.branches].some((e) => e.contains(t)) || (a?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f);
	return Ko((e) => {
		v === l.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
	}, f), K.useEffect(() => {
		if (u) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Zo = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), is(), () => {
			n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Zo);
		};
	}, [
		u,
		f,
		n,
		l
	]), K.useEffect(() => () => {
		u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), is());
	}, [u, l]), K.useEffect(() => {
		let e = () => p({});
		return document.addEventListener(Jo, e), () => document.removeEventListener(Jo, e);
	}, []), /* @__PURE__ */ Z(R.div, {
		...c,
		ref: m,
		style: {
			pointerEvents: y ? b ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: B(e.onFocusCapture, S.onFocusCapture),
		onBlurCapture: B(e.onBlurCapture, S.onBlurCapture),
		onPointerDownCapture: B(e.onPointerDownCapture, x.onPointerDownCapture)
	});
});
$o.displayName = qo;
var es = "DismissableLayerBranch", ts = K.forwardRef((e, t) => {
	let n = K.useContext(Qo), r = K.useRef(null), i = I(t, r);
	return K.useEffect(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), /* @__PURE__ */ Z(R.div, {
		...e,
		ref: i
	});
});
ts.displayName = es;
function ns(e, t = globalThis?.document) {
	let n = z(e), r = K.useRef(!1), i = K.useRef(() => {});
	return K.useEffect(() => {
		let e = (e) => {
			if (e.target && !r.current) {
				let r = function() {
					as(Yo, n, a, { discrete: !0 });
				}, a = { originalEvent: e };
				e.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, { once: !0 })) : r();
			} else t.removeEventListener("click", i.current);
			r.current = !1;
		}, a = window.setTimeout(() => {
			t.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current);
		};
	}, [t, n]), { onPointerDownCapture: () => r.current = !0 };
}
function rs(e, t = globalThis?.document) {
	let n = z(e), r = K.useRef(!1);
	return K.useEffect(() => {
		let e = (e) => {
			e.target && !r.current && as(Xo, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function is() {
	let e = new CustomEvent(Jo);
	document.dispatchEvent(e);
}
function as(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? le(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var os = 0;
function ss() {
	K.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? cs()), document.body.insertAdjacentElement("beforeend", e[1] ?? cs()), os++, () => {
			os === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), os--;
		};
	}, []);
}
function cs() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var ls = "focusScope.autoFocusOnMount", us = "focusScope.autoFocusOnUnmount", ds = {
	bubbles: !1,
	cancelable: !0
}, fs = "FocusScope", ps = K.forwardRef((e, t) => {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = K.useState(null), l = z(i), u = z(a), d = K.useRef(null), f = I(t, (e) => c(e)), p = K.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	K.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (p.paused || !s) return;
				let t = e.target;
				s.contains(t) ? d.current = t : bs(d.current, { select: !0 });
			}, t = function(e) {
				if (p.paused || !s) return;
				let t = e.relatedTarget;
				t !== null && (s.contains(t) || bs(d.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && bs(s);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return s && r.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		s,
		p.paused
	]), K.useEffect(() => {
		if (s) {
			xs.add(p);
			let e = document.activeElement;
			if (!s.contains(e)) {
				let t = new CustomEvent(ls, ds);
				s.addEventListener(ls, l), s.dispatchEvent(t), t.defaultPrevented || (ms(ws(gs(s)), { select: !0 }), document.activeElement === e && bs(s));
			}
			return () => {
				s.removeEventListener(ls, l), setTimeout(() => {
					let t = new CustomEvent(us, ds);
					s.addEventListener(us, u), s.dispatchEvent(t), t.defaultPrevented || bs(e ?? document.body, { select: !0 }), s.removeEventListener(us, u), xs.remove(p);
				}, 0);
			};
		}
	}, [
		s,
		l,
		u,
		p
	]);
	let m = K.useCallback((e) => {
		if (!n && !r || p.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = hs(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && bs(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && bs(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		p.paused
	]);
	return /* @__PURE__ */ Z(R.div, {
		tabIndex: -1,
		...o,
		ref: f,
		onKeyDown: m
	});
});
ps.displayName = fs;
function ms(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (bs(r, { select: t }), document.activeElement !== n) return;
}
function hs(e) {
	let t = gs(e);
	return [_s(t, e), _s(t.reverse(), e)];
}
function gs(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function _s(e, t) {
	for (let n of e) if (!vs(n, { upTo: t })) return n;
}
function vs(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function ys(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function bs(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && ys(e) && t && e.select();
	}
}
var xs = Ss();
function Ss() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Cs(e, t), e.unshift(t);
		},
		remove(t) {
			e = Cs(e, t), e[0]?.resume();
		}
	};
}
function Cs(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function ws(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region node_modules/@radix-ui/react-id/dist/index.mjs
var Ts = K.useId || (() => void 0), Es = 0;
function Ds(e) {
	let [t, n] = K.useState(Ts());
	return A(() => {
		e || n((e) => e ?? String(Es++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Os = [
	"top",
	"right",
	"bottom",
	"left"
], ks = Math.min, As = Math.max, js = Math.round, Ms = Math.floor, Ns = (e) => ({
	x: e,
	y: e
}), Ps = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Fs(e, t, n) {
	return As(e, ks(t, n));
}
function Is(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Ls(e) {
	return e.split("-")[0];
}
function Rs(e) {
	return e.split("-")[1];
}
function zs(e) {
	return e === "x" ? "y" : "x";
}
function Bs(e) {
	return e === "y" ? "height" : "width";
}
function Vs(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Hs(e) {
	return zs(Vs(e));
}
function Us(e, t, n) {
	n === void 0 && (n = !1);
	let r = Rs(e), i = Hs(e), a = Bs(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Qs(o)), [o, Qs(o)];
}
function Ws(e) {
	let t = Qs(e);
	return [
		Gs(e),
		t,
		Gs(t)
	];
}
function Gs(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Ks = ["left", "right"], qs = ["right", "left"], Js = ["top", "bottom"], Ys = ["bottom", "top"];
function Xs(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? qs : Ks : t ? Ks : qs;
		case "left":
		case "right": return t ? Js : Ys;
		default: return [];
	}
}
function Zs(e, t, n, r) {
	let i = Rs(e), a = Xs(Ls(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Gs)))), a;
}
function Qs(e) {
	let t = Ls(e);
	return Ps[t] + e.slice(t.length);
}
function $s(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function ec(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : $s(e);
}
function tc(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function nc(e, t, n) {
	let { reference: r, floating: i } = e, a = Vs(t), o = Hs(t), s = Bs(o), c = Ls(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (Rs(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function rc(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Is(t, e), p = ec(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = tc(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = tc(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var ic = 50, ac = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: rc
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = nc(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < ic && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = nc(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, oc = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Is(e, t) || {};
		if (l == null) return {};
		let d = ec(u), f = {
			x: n,
			y: r
		}, p = Hs(i), m = Bs(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = ks(d[_], T), D = ks(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = Fs(O, A, k), M = !c.arrow && Rs(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), sc = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Is(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Ls(r), _ = Vs(o), v = Ls(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Qs(o)] : Ws(o)), x = p !== "none";
			!d && x && b.push(...Zs(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Us(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Vs(t)) || T.every((e) => Vs(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Vs(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function cc(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function lc(e) {
	return Os.some((t) => e[t] >= 0);
}
var uc = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Is(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = cc(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: lc(e)
					} };
				}
				case "escaped": {
					let e = cc(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: lc(e)
					} };
				}
				default: return {};
			}
		}
	};
}, dc = /* @__PURE__ */ new Set(["left", "top"]);
async function fc(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Ls(n), s = Rs(n), c = Vs(n) === "y", l = dc.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Is(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var pc = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await fc(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, mc = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = Is(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Vs(Ls(i)), p = zs(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Fs(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Fs(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, hc = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Is(e, t), u = {
				x: n,
				y: r
			}, d = Vs(i), f = zs(d), p = u[f], m = u[d], h = Is(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = dc.has(Ls(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, gc = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = Is(e, t), u = await o.detectOverflow(t, l), d = Ls(i), f = Rs(i), p = Vs(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = ks(h - u[g], v), x = ks(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = As(u.left, 0), t = As(u.right, 0), n = As(u.top, 0), r = As(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : As(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : As(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function _c() {
	return typeof window < "u";
}
function vc(e) {
	return xc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function yc(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bc(e) {
	return ((xc(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function xc(e) {
	return _c() ? e instanceof Node || e instanceof yc(e).Node : !1;
}
function Sc(e) {
	return _c() ? e instanceof Element || e instanceof yc(e).Element : !1;
}
function Cc(e) {
	return _c() ? e instanceof HTMLElement || e instanceof yc(e).HTMLElement : !1;
}
function wc(e) {
	return !_c() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof yc(e).ShadowRoot;
}
function Tc(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Ic(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Ec(e) {
	return /^(table|td|th)$/.test(vc(e));
}
function Dc(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Oc = /transform|translate|scale|rotate|perspective|filter/, kc = /paint|layout|strict|content/, Ac = (e) => !!e && e !== "none", jc;
function Mc(e) {
	let t = Sc(e) ? Ic(e) : e;
	return Ac(t.transform) || Ac(t.translate) || Ac(t.scale) || Ac(t.rotate) || Ac(t.perspective) || !Pc() && (Ac(t.backdropFilter) || Ac(t.filter)) || Oc.test(t.willChange || "") || kc.test(t.contain || "");
}
function Nc(e) {
	let t = Rc(e);
	for (; Cc(t) && !Fc(t);) {
		if (Mc(t)) return t;
		if (Dc(t)) return null;
		t = Rc(t);
	}
	return null;
}
function Pc() {
	return jc ?? (jc = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), jc;
}
function Fc(e) {
	return /^(html|body|#document)$/.test(vc(e));
}
function Ic(e) {
	return yc(e).getComputedStyle(e);
}
function Lc(e) {
	return Sc(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Rc(e) {
	if (vc(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || wc(e) && e.host || bc(e);
	return wc(t) ? t.host : t;
}
function zc(e) {
	let t = Rc(e);
	return Fc(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Cc(t) && Tc(t) ? t : zc(t);
}
function Bc(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = zc(e), i = r === e.ownerDocument?.body, a = yc(r);
	if (i) {
		let e = Vc(a);
		return t.concat(a, a.visualViewport || [], Tc(r) ? r : [], e && n ? Bc(e) : []);
	} else return t.concat(r, Bc(r, [], n));
}
function Vc(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Hc(e) {
	let t = Ic(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Cc(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = js(n) !== a || js(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Uc(e) {
	return Sc(e) ? e : e.contextElement;
}
function Wc(e) {
	let t = Uc(e);
	if (!Cc(t)) return Ns(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Hc(t), o = (a ? js(n.width) : n.width) / r, s = (a ? js(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Gc = /* @__PURE__ */ Ns(0);
function Kc(e) {
	let t = yc(e);
	return !Pc() || !t.visualViewport ? Gc : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function qc(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== yc(e) ? !1 : t;
}
function Jc(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Uc(e), o = Ns(1);
	t && (r ? Sc(r) && (o = Wc(r)) : o = Wc(e));
	let s = qc(a, n, r) ? Kc(a) : Ns(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = yc(a), t = r && Sc(r) ? yc(r) : r, n = e, i = Vc(n);
		for (; i && r && t !== n;) {
			let e = Wc(i), t = i.getBoundingClientRect(), r = Ic(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = yc(i), i = Vc(n);
		}
	}
	return tc({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Yc(e, t) {
	let n = Lc(e).scrollLeft;
	return t ? t.left + n : Jc(bc(e)).left + n;
}
function Xc(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Yc(e, n),
		y: n.top + t.scrollTop
	};
}
function Zc(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = bc(r), s = t ? Dc(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Ns(1), u = Ns(0), d = Cc(r);
	if ((d || !d && !a) && ((vc(r) !== "body" || Tc(o)) && (c = Lc(r)), d)) {
		let e = Jc(r);
		l = Wc(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Xc(o, c) : Ns(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Qc(e) {
	return Array.from(e.getClientRects());
}
function $c(e) {
	let t = bc(e), n = Lc(e), r = e.ownerDocument.body, i = As(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = As(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Yc(e), s = -n.scrollTop;
	return Ic(r).direction === "rtl" && (o += As(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var el = 25;
function tl(e, t) {
	let n = yc(e), r = bc(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Pc();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Yc(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= el && (a -= o);
	} else l <= el && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function nl(e, t) {
	let n = Jc(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Cc(e) ? Wc(e) : Ns(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function rl(e, t, n) {
	let r;
	if (t === "viewport") r = tl(e, n);
	else if (t === "document") r = $c(bc(e));
	else if (Sc(t)) r = nl(t, n);
	else {
		let n = Kc(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return tc(r);
}
function il(e, t) {
	let n = Rc(e);
	return n === t || !Sc(n) || Fc(n) ? !1 : Ic(n).position === "fixed" || il(n, t);
}
function al(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Bc(e, [], !1).filter((e) => Sc(e) && vc(e) !== "body"), i = null, a = Ic(e).position === "fixed", o = a ? Rc(e) : e;
	for (; Sc(o) && !Fc(o);) {
		let t = Ic(o), n = Mc(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Tc(o) && !n && il(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Rc(o);
	}
	return t.set(e, r), r;
}
function ol(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Dc(t) ? [] : al(t, this._c) : [].concat(n), r], o = rl(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = rl(t, a[e], i);
		s = As(n.top, s), c = ks(n.right, c), l = ks(n.bottom, l), u = As(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function sl(e) {
	let { width: t, height: n } = Hc(e);
	return {
		width: t,
		height: n
	};
}
function cl(e, t, n) {
	let r = Cc(t), i = bc(t), a = n === "fixed", o = Jc(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Ns(0);
	function l() {
		c.x = Yc(i);
	}
	if (r || !r && !a) if ((vc(t) !== "body" || Tc(i)) && (s = Lc(t)), r) {
		let e = Jc(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Xc(i, s) : Ns(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function ll(e) {
	return Ic(e).position === "static";
}
function ul(e, t) {
	if (!Cc(e) || Ic(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return bc(e) === n && (n = n.ownerDocument.body), n;
}
function dl(e, t) {
	let n = yc(e);
	if (Dc(e)) return n;
	if (!Cc(e)) {
		let t = Rc(e);
		for (; t && !Fc(t);) {
			if (Sc(t) && !ll(t)) return t;
			t = Rc(t);
		}
		return n;
	}
	let r = ul(e, t);
	for (; r && Ec(r) && ll(r);) r = ul(r, t);
	return r && Fc(r) && ll(r) && !Mc(r) ? n : r || Nc(e) || n;
}
var fl = async function(e) {
	let t = this.getOffsetParent || dl, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: cl(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function pl(e) {
	return Ic(e).direction === "rtl";
}
var ml = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Zc,
	getDocumentElement: bc,
	getClippingRect: ol,
	getOffsetParent: dl,
	getElementRects: fl,
	getClientRects: Qc,
	getDimensions: sl,
	getScale: Wc,
	isElement: Sc,
	isRTL: pl
};
function hl(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function gl(e, t) {
	let n = null, r, i = bc(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Ms(d), h = Ms(i.clientWidth - (u + f)), g = Ms(i.clientHeight - (d + p)), _ = Ms(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: As(0, ks(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !hl(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function _l(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Uc(e), u = i || a ? [...l ? Bc(l) : [], ...t ? Bc(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? gl(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Jc(e) : null;
	c && g();
	function g() {
		let t = Jc(e);
		h && !hl(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var vl = pc, yl = mc, bl = sc, xl = gc, Sl = uc, Cl = oc, wl = hc, Tl = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: ml,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return ac(e, t, {
		...i,
		platform: a
	});
}, El = typeof document < "u" ? $e : function() {};
function Dl(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Dl(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Dl(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Ol(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function kl(e, t) {
	let n = Ol(e);
	return Math.round(t * n) / n;
}
function Al(e) {
	let t = K.useRef(e);
	return El(() => {
		t.current = e;
	}), t;
}
function jl(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = K.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = K.useState(r);
	Dl(f, r) || p(r);
	let [m, h] = K.useState(null), [g, _] = K.useState(null), v = K.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = K.useCallback((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = K.useRef(null), C = K.useRef(null), w = K.useRef(u), T = c != null, E = Al(c), D = Al(i), O = Al(l), k = K.useCallback(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		D.current && (e.platform = D.current), Tl(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: O.current !== !1
			};
			A.current && !Dl(w.current, t) && (w.current = t, nt.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		D,
		O
	]);
	El(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let A = K.useRef(!1);
	El(() => (A.current = !0, () => {
		A.current = !1;
	}), []), El(() => {
		if (b && (S.current = b), x && (C.current = x), b && x) {
			if (E.current) return E.current(b, x, k);
			k();
		}
	}, [
		b,
		x,
		k,
		E,
		T
	]);
	let j = K.useMemo(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), M = K.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), N = K.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!M.floating) return e;
		let t = kl(M.floating, u.x), r = kl(M.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...Ol(M.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		M.floating,
		u.x,
		u.y
	]);
	return K.useMemo(() => ({
		...u,
		update: k,
		refs: j,
		elements: M,
		floatingStyles: N
	}), [
		u,
		k,
		j,
		M,
		N
	]);
}
var Ml = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Cl({
				element: r.current,
				padding: i
			}).fn(n) : r ? Cl({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Nl = (e, t) => {
	let n = vl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Pl = (e, t) => {
	let n = yl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Fl = (e, t) => ({
	fn: wl(e).fn,
	options: [e, t]
}), Il = (e, t) => {
	let n = bl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ll = (e, t) => {
	let n = xl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Rl = (e, t) => {
	let n = Sl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, zl = (e, t) => {
	let n = Ml(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Bl = "Arrow", Vl = K.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ Z(R.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ Z("polygon", { points: "0,0 30,0 15,10" })
	});
});
Vl.displayName = Bl;
var Hl = Vl;
//#endregion
//#region node_modules/@radix-ui/react-use-size/dist/index.mjs
function Ul(e) {
	let [t, n] = K.useState(void 0);
	return A(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let r = t[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				n({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		} else n(void 0);
	}, [e]), t;
}
//#endregion
//#region node_modules/@radix-ui/react-popper/dist/index.mjs
var Wl = "Popper", [Gl, Kl] = oe(Wl), [ql, Jl] = Gl(Wl), Yl = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = K.useState(null);
	return /* @__PURE__ */ Z(ql, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		children: n
	});
};
Yl.displayName = Wl;
var Xl = "PopperAnchor", Zl = K.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = Jl(Xl, n), o = K.useRef(null), s = I(t, o), c = K.useRef(null);
	return K.useEffect(() => {
		let e = c.current;
		c.current = r?.current || o.current, e !== c.current && a.onAnchorChange(c.current);
	}), r ? null : /* @__PURE__ */ Z(R.div, {
		...i,
		ref: s
	});
});
Zl.displayName = Xl;
var Ql = "PopperContent", [$l, eu] = Gl(Ql), tu = K.forwardRef((e, t) => {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: d = "partial", hideWhenDetached: f = !1, updatePositionStrategy: p = "optimized", onPlaced: m, ...h } = e, g = Jl(Ql, n), [_, v] = K.useState(null), y = I(t, (e) => v(e)), [b, x] = K.useState(null), S = Ul(b), C = S?.width ?? 0, w = S?.height ?? 0, T = r + (a === "center" ? "" : "-" + a), E = typeof u == "number" ? u : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...u
	}, D = Array.isArray(l) ? l : [l], O = D.length > 0, k = {
		padding: E,
		boundary: D.filter(au),
		altBoundary: O
	}, { refs: j, floatingStyles: M, placement: N, isPositioned: P, middlewareData: F } = jl({
		strategy: "fixed",
		placement: T,
		whileElementsMounted: (...e) => _l(...e, { animationFrame: p === "always" }),
		elements: { reference: g.anchor },
		middleware: [
			Nl({
				mainAxis: i + w,
				alignmentAxis: o
			}),
			c && Pl({
				mainAxis: !0,
				crossAxis: !1,
				limiter: d === "partial" ? Fl() : void 0,
				...k
			}),
			c && Il({ ...k }),
			Ll({
				...k,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			b && zl({
				element: b,
				padding: s
			}),
			ou({
				arrowWidth: C,
				arrowHeight: w
			}),
			f && Rl({
				strategy: "referenceHidden",
				...k
			})
		]
	}), [ee, te] = su(N), ne = z(m);
	A(() => {
		P && ne?.();
	}, [P, ne]);
	let L = F.arrow?.x, re = F.arrow?.y, ie = F.arrow?.centerOffset !== 0, [ae, B] = K.useState();
	return A(() => {
		_ && B(window.getComputedStyle(_).zIndex);
	}, [_]), /* @__PURE__ */ Z("div", {
		ref: j.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...M,
			transform: P ? M.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ae,
			"--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(" "),
			...F.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ Z($l, {
			scope: n,
			placedSide: ee,
			onArrowChange: x,
			arrowX: L,
			arrowY: re,
			shouldHideArrow: ie,
			children: /* @__PURE__ */ Z(R.div, {
				"data-side": ee,
				"data-align": te,
				...h,
				ref: y,
				style: {
					...h.style,
					animation: P ? void 0 : "none"
				}
			})
		})
	});
});
tu.displayName = Ql;
var nu = "PopperArrow", ru = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, iu = K.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = eu(nu, n), a = ru[i.placedSide];
	return /* @__PURE__ */ Z("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ Z(Hl, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
iu.displayName = nu;
function au(e) {
	return e !== null;
}
var ou = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = su(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function su(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var cu = Yl, lu = Zl, uu = tu, du = iu, fu = "Portal", pu = K.forwardRef((e, t) => {
	let { container: n, ...r } = e, [i, a] = K.useState(!1);
	A(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? rt.createPortal(/* @__PURE__ */ Z(R.div, {
		...r,
		ref: t
	}), o) : null;
});
pu.displayName = fu;
//#endregion
//#region node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function mu(e) {
	let t = /* @__PURE__ */ hu(e), n = K.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = K.Children.toArray(r), o = a.find(_u);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? K.Children.count(e) > 1 ? K.Children.only(null) : K.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ Z(t, {
				...i,
				ref: n,
				children: K.isValidElement(e) ? K.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ Z(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function hu(e) {
	let t = K.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (K.isValidElement(n)) {
			let e = yu(n), i = vu(r, n.props);
			return n.type !== K.Fragment && (i.ref = t ? ee(t, e) : e), K.cloneElement(n, i);
		}
		return K.Children.count(n) > 1 ? K.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var gu = Symbol("radix.slottable");
function _u(e) {
	return K.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gu;
}
function vu(e, t) {
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
function yu(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var bu = K.useInsertionEffect || A;
function xu({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	let [i, a, o] = Su({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0, c = s ? e : i;
	{
		let t = K.useRef(e !== void 0);
		K.useEffect(() => {
			let e = t.current;
			e !== s && console.warn(`${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = s;
		}, [s, r]);
	}
	return [c, K.useCallback((t) => {
		if (s) {
			let n = Cu(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
function Su({ defaultProp: e, onChange: t }) {
	let [n, r] = K.useState(e), i = K.useRef(n), a = K.useRef(t);
	return bu(() => {
		a.current = t;
	}, [t]), K.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
function Cu(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
function wu(e) {
	let t = K.useRef({
		value: e,
		previous: e
	});
	return K.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
//#endregion
//#region node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Tu = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), Eu = "VisuallyHidden", Du = K.forwardRef((e, t) => /* @__PURE__ */ Z(R.span, {
	...e,
	ref: t,
	style: {
		...Tu,
		...e.style
	}
}));
Du.displayName = Eu;
//#endregion
//#region node_modules/aria-hidden/dist/es2015/index.js
var Ou = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, ku = /* @__PURE__ */ new WeakMap(), Au = /* @__PURE__ */ new WeakMap(), ju = {}, Mu = 0, Nu = function(e) {
	return e && (e.host || Nu(e.parentNode));
}, Pu = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Nu(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Fu = function(e, t, n, r) {
	var i = Pu(t, Array.isArray(e) ? e : [e]);
	ju[n] || (ju[n] = /* @__PURE__ */ new WeakMap());
	var a = ju[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (ku.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				ku.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Au.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Mu++, function() {
		o.forEach(function(e) {
			var t = ku.get(e) - 1, i = a.get(e) - 1;
			ku.set(e, t), a.set(e, i), t || (Au.has(e) || e.removeAttribute(r), Au.delete(e)), i || e.removeAttribute(n);
		}), Mu--, Mu || (ku = /* @__PURE__ */ new WeakMap(), ku = /* @__PURE__ */ new WeakMap(), Au = /* @__PURE__ */ new WeakMap(), ju = {});
	};
}, Iu = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Ou(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Fu(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Lu = "right-scroll-bar-position", Ru = "width-before-scroll-bar", zu = "with-scroll-bars-hidden", Bu = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
function Vu(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
function Hu(e, t) {
	var n = X(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var Uu = typeof window < "u" ? K.useLayoutEffect : K.useEffect, Wu = /* @__PURE__ */ new WeakMap();
function Gu(e, t) {
	var n = Hu(t || null, function(t) {
		return e.forEach(function(e) {
			return Vu(e, t);
		});
	});
	return Uu(function() {
		var t = Wu.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Vu(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Vu(e, a);
			});
		}
		Wu.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function Ku(e) {
	return e;
}
function qu(e, t) {
	t === void 0 && (t = Ku);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function Ju(e) {
	e === void 0 && (e = {});
	var t = qu(null);
	return t.options = j({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var Yu = function(e) {
	var t = e.sideCar, n = F(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return K.createElement(r, j({}, n));
};
Yu.isSideCarExport = !0;
function Xu(e, t) {
	return e.useMedium(t), Yu;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var Zu = Ju(), Qu = function() {}, $u = K.forwardRef(function(e, t) {
	var n = K.useRef(null), r = K.useState({
		onScrollCapture: Qu,
		onWheelCapture: Qu,
		onTouchMoveCapture: Qu
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = F(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), x = f, S = Gu([n, t]), C = j(j({}, b), i);
	return K.createElement(K.Fragment, null, u && K.createElement(x, {
		sideCar: Zu,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? K.cloneElement(K.Children.only(s), j(j({}, C), { ref: S })) : K.createElement(v, j({}, C, {
		className: c,
		ref: S
	}), s));
});
$u.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, $u.classNames = {
	fullWidth: Ru,
	zeroRight: Lu
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var ed, td = function() {
	if (ed) return ed;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function nd() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = td();
	return t && e.setAttribute("nonce", t), e;
}
function rd(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function id(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var ad = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = nd()) && (rd(t, n), id(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, od = function() {
	var e = ad();
	return function(t, n) {
		K.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, sd = function() {
	var e = od();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, cd = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, ld = function(e) {
	return parseInt(e || "", 10) || 0;
}, ud = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		ld(n),
		ld(r),
		ld(i)
	];
}, dd = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return cd;
	var t = ud(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, fd = sd(), pd = "data-scroll-locked", md = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${zu} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${pd}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${Lu} {
    right: ${s}px ${r};
  }
  
  .${Ru} {
    margin-right: ${s}px ${r};
  }
  
  .${Lu} .${Lu} {
    right: 0 ${r};
  }
  
  .${Ru} .${Ru} {
    margin-right: 0 ${r};
  }
  
  body[${pd}] {
    ${Bu}: ${s}px;
  }
`;
}, hd = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, gd = function() {
	K.useEffect(function() {
		return document.body.setAttribute(pd, (hd() + 1).toString()), function() {
			var e = hd() - 1;
			e <= 0 ? document.body.removeAttribute(pd) : document.body.setAttribute(pd, e.toString());
		};
	}, []);
}, _d = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	gd();
	var a = K.useMemo(function() {
		return dd(i);
	}, [i]);
	return K.createElement(fd, { styles: md(a, !t, i, n ? "" : "!important") });
}, vd = !1;
if (typeof window < "u") try {
	var yd = Object.defineProperty({}, "passive", { get: function() {
		return vd = !0, !0;
	} });
	window.addEventListener("test", yd, yd), window.removeEventListener("test", yd, yd);
} catch {
	vd = !1;
}
var bd = vd ? { passive: !1 } : !1, xd = function(e) {
	return e.tagName === "TEXTAREA";
}, Sd = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !xd(e) && n[t] === "visible");
}, Cd = function(e) {
	return Sd(e, "overflowY");
}, wd = function(e) {
	return Sd(e, "overflowX");
}, Td = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Od(e, r)) {
			var i = kd(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Ed = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Dd = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Od = function(e, t) {
	return e === "v" ? Cd(t) : wd(t);
}, kd = function(e, t) {
	return e === "v" ? Ed(t) : Dd(t);
}, Ad = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, jd = function(e, t, n, r, i) {
	var a = Ad(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = kd(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Od(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Md = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Nd = function(e) {
	return [e.deltaX, e.deltaY];
}, Pd = function(e) {
	return e && "current" in e ? e.current : e;
}, Fd = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Id = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Ld = 0, Rd = [];
function zd(e) {
	var t = K.useRef([]), n = K.useRef([0, 0]), r = K.useRef(), i = K.useState(Ld++)[0], a = K.useState(sd)[0], o = K.useRef(e);
	K.useEffect(function() {
		o.current = e;
	}, [e]), K.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = ae([e.lockRef.current], (e.shards || []).map(Pd), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = K.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Md(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Td(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Td(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return jd(h, t, e, h === "h" ? s : c, !0);
	}, []), c = K.useCallback(function(e) {
		var n = e;
		if (!(!Rd.length || Rd[Rd.length - 1] !== a)) {
			var r = "deltaY" in n ? Nd(n) : Md(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Fd(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Pd).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = K.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Bd(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = K.useCallback(function(e) {
		n.current = Md(e), r.current = void 0;
	}, []), d = K.useCallback(function(t) {
		l(t.type, Nd(t), t.target, s(t, e.lockRef.current));
	}, []), f = K.useCallback(function(t) {
		l(t.type, Md(t), t.target, s(t, e.lockRef.current));
	}, []);
	K.useEffect(function() {
		return Rd.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, bd), document.addEventListener("touchmove", c, bd), document.addEventListener("touchstart", u, bd), function() {
			Rd = Rd.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, bd), document.removeEventListener("touchmove", c, bd), document.removeEventListener("touchstart", u, bd);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return K.createElement(K.Fragment, null, m ? K.createElement(a, { styles: Id(i) }) : null, p ? K.createElement(_d, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Bd(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Vd = Xu(Zu, zd), Hd = K.forwardRef(function(e, t) {
	return K.createElement($u, j({}, e, {
		ref: t,
		sideCar: Vd
	}));
});
Hd.classNames = $u.classNames;
//#endregion
//#region node_modules/@radix-ui/react-select/dist/index.mjs
var Ud = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], Wd = [" ", "Enter"], Gd = "Select", [Kd, qd, Jd] = Go(Gd), [Yd, Xd] = oe(Gd, [Jd, Kl]), Zd = Kl(), [Qd, $d] = Yd(Gd), [ef, tf] = Yd(Gd), nf = (e) => {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: p, form: m } = e, h = Zd(t), [g, _] = K.useState(null), [v, y] = K.useState(null), [b, x] = K.useState(!1), S = O(l), [C, w] = xu({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: Gd
	}), [T, E] = xu({
		prop: o,
		defaultProp: s,
		onChange: c,
		caller: Gd
	}), D = K.useRef(null), k = g ? m || !!g.closest("form") : !0, [A, j] = K.useState(/* @__PURE__ */ new Set()), M = Array.from(A).map((e) => e.props.value).join(";");
	return /* @__PURE__ */ Z(cu, {
		...h,
		children: /* @__PURE__ */ Q(Qd, {
			required: p,
			scope: t,
			trigger: g,
			onTriggerChange: _,
			valueNode: v,
			onValueNodeChange: y,
			valueNodeHasChildren: b,
			onValueNodeHasChildrenChange: x,
			contentId: Ds(),
			value: T,
			onValueChange: E,
			open: C,
			onOpenChange: w,
			dir: S,
			triggerPointerDownPosRef: D,
			disabled: f,
			children: [/* @__PURE__ */ Z(Kd.Provider, {
				scope: t,
				children: /* @__PURE__ */ Z(ef, {
					scope: e.__scopeSelect,
					onNativeOptionAdd: K.useCallback((e) => {
						j((t) => new Set(t).add(e));
					}, []),
					onNativeOptionRemove: K.useCallback((e) => {
						j((t) => {
							let n = new Set(t);
							return n.delete(e), n;
						});
					}, []),
					children: n
				})
			}), k ? /* @__PURE__ */ Q(Qf, {
				"aria-hidden": !0,
				required: p,
				tabIndex: -1,
				name: u,
				autoComplete: d,
				value: T,
				onChange: (e) => E(e.target.value),
				disabled: f,
				form: m,
				children: [T === void 0 ? /* @__PURE__ */ Z("option", { value: "" }) : null, Array.from(A)]
			}, M) : null]
		})
	});
};
nf.displayName = Gd;
var rf = "SelectTrigger", af = K.forwardRef((e, t) => {
	let { __scopeSelect: n, disabled: r = !1, ...i } = e, a = Zd(n), o = $d(rf, n), s = o.disabled || r, c = I(t, o.onTriggerChange), l = qd(n), u = K.useRef("touch"), [d, f, p] = ep((e) => {
		let t = l().filter((e) => !e.disabled), n = tp(t, e, t.find((e) => e.value === o.value));
		n !== void 0 && o.onValueChange(n.value);
	}), m = (e) => {
		s || (o.onOpenChange(!0), p()), e && (o.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ Z(lu, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ Z(R.button, {
			type: "button",
			role: "combobox",
			"aria-controls": o.contentId,
			"aria-expanded": o.open,
			"aria-required": o.required,
			"aria-autocomplete": "none",
			dir: o.dir,
			"data-state": o.open ? "open" : "closed",
			disabled: s,
			"data-disabled": s ? "" : void 0,
			"data-placeholder": $f(o.value) ? "" : void 0,
			...i,
			ref: c,
			onClick: B(i.onClick, (e) => {
				e.currentTarget.focus(), u.current !== "mouse" && m(e);
			}),
			onPointerDown: B(i.onPointerDown, (e) => {
				u.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (m(e), e.preventDefault());
			}),
			onKeyDown: B(i.onKeyDown, (e) => {
				let t = d.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && f(e.key), !(t && e.key === " ") && Ud.includes(e.key) && (m(), e.preventDefault());
			})
		})
	});
});
af.displayName = rf;
var of = "SelectValue", sf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, children: a, placeholder: o = "", ...s } = e, c = $d(of, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = I(t, c.onValueNodeChange);
	return A(() => {
		l(u);
	}, [l, u]), /* @__PURE__ */ Z(R.span, {
		...s,
		ref: d,
		style: { pointerEvents: "none" },
		children: $f(c.value) ? /* @__PURE__ */ Z(tt, { children: o }) : a
	});
});
sf.displayName = of;
var cf = "SelectIcon", lf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ Z(R.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
});
lf.displayName = cf;
var uf = "SelectPortal", df = (e) => /* @__PURE__ */ Z(pu, {
	asChild: !0,
	...e
});
df.displayName = uf;
var ff = "SelectContent", pf = K.forwardRef((e, t) => {
	let n = $d(ff, e.__scopeSelect), [r, i] = K.useState();
	if (A(() => {
		i(new DocumentFragment());
	}, []), !n.open) {
		let t = r;
		return t ? nt.createPortal(/* @__PURE__ */ Z(hf, {
			scope: e.__scopeSelect,
			children: /* @__PURE__ */ Z(Kd.Slot, {
				scope: e.__scopeSelect,
				children: /* @__PURE__ */ Z("div", { children: e.children })
			})
		}), t) : null;
	}
	return /* @__PURE__ */ Z(yf, {
		...e,
		ref: t
	});
});
pf.displayName = ff;
var mf = 10, [hf, gf] = Yd(ff), _f = "SelectContentImpl", vf = /* @__PURE__ */ mu("SelectContent.RemoveScroll"), yf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, position: r = "item-aligned", onCloseAutoFocus: i, onEscapeKeyDown: a, onPointerDownOutside: o, side: s, sideOffset: c, align: l, alignOffset: u, arrowPadding: d, collisionBoundary: f, collisionPadding: p, sticky: m, hideWhenDetached: h, avoidCollisions: g, ..._ } = e, v = $d(ff, n), [y, b] = K.useState(null), [x, S] = K.useState(null), C = I(t, (e) => b(e)), [w, T] = K.useState(null), [E, D] = K.useState(null), O = qd(n), [k, A] = K.useState(!1), j = K.useRef(!1);
	K.useEffect(() => {
		if (y) return Iu(y);
	}, [y]), ss();
	let M = K.useCallback((e) => {
		let [t, ...n] = O().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && x && (x.scrollTop = 0), n === r && x && (x.scrollTop = x.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [O, x]), N = K.useCallback(() => M([w, y]), [
		M,
		w,
		y
	]);
	K.useEffect(() => {
		k && N();
	}, [k, N]);
	let { onOpenChange: P, triggerPointerDownPosRef: F } = v;
	K.useEffect(() => {
		if (y) {
			let e = {
				x: 0,
				y: 0
			}, t = (t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (F.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (F.current?.y ?? 0))
				};
			}, n = (n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : y.contains(n.target) || P(!1), document.removeEventListener("pointermove", t), F.current = null;
			};
			return F.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		y,
		P,
		F
	]), K.useEffect(() => {
		let e = () => P(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [P]);
	let [ee, te] = ep((e) => {
		let t = O().filter((e) => !e.disabled), n = tp(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current.focus());
	}), ne = K.useCallback((e, t, n) => {
		let r = !j.current && !n;
		(v.value !== void 0 && v.value === t || r) && (T(e), r && (j.current = !0));
	}, [v.value]), L = K.useCallback(() => y?.focus(), [y]), R = K.useCallback((e, t, n) => {
		let r = !j.current && !n;
		(v.value !== void 0 && v.value === t || r) && D(e);
	}, [v.value]), re = r === "popper" ? Cf : xf, ie = re === Cf ? {
		side: s,
		sideOffset: c,
		align: l,
		alignOffset: u,
		arrowPadding: d,
		collisionBoundary: f,
		collisionPadding: p,
		sticky: m,
		hideWhenDetached: h,
		avoidCollisions: g
	} : {};
	return /* @__PURE__ */ Z(hf, {
		scope: n,
		content: y,
		viewport: x,
		onViewportChange: S,
		itemRefCallback: ne,
		selectedItem: w,
		onItemLeave: L,
		itemTextRefCallback: R,
		focusSelectedItem: N,
		selectedItemText: E,
		position: r,
		isPositioned: k,
		searchRef: ee,
		children: /* @__PURE__ */ Z(Hd, {
			as: vf,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ Z(ps, {
				asChild: !0,
				trapped: v.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: B(i, (e) => {
					v.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ Z($o, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: a,
					onPointerDownOutside: o,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => v.onOpenChange(!1),
					children: /* @__PURE__ */ Z(re, {
						role: "listbox",
						id: v.contentId,
						"data-state": v.open ? "open" : "closed",
						dir: v.dir,
						onContextMenu: (e) => e.preventDefault(),
						..._,
						...ie,
						onPlaced: () => A(!0),
						ref: C,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							..._.style
						},
						onKeyDown: B(_.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && te(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = O().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => M(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
yf.displayName = _f;
var bf = "SelectItemAlignedPosition", xf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, onPlaced: r, ...i } = e, a = $d(ff, n), o = gf(ff, n), [s, c] = K.useState(null), [l, u] = K.useState(null), d = I(t, (e) => u(e)), f = qd(n), p = K.useRef(!1), m = K.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: _, focusSelectedItem: v } = o, y = K.useCallback(() => {
		if (a.trigger && a.valueNode && s && l && h && g && _) {
			let e = a.trigger.getBoundingClientRect(), t = l.getBoundingClientRect(), n = a.valueNode.getBoundingClientRect(), i = _.getBoundingClientRect();
			if (a.dir !== "rtl") {
				let r = i.left - t.left, a = n.left - r, o = e.left - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - mf, d = te(a, [mf, Math.max(mf, u - l)]);
				s.style.minWidth = c + "px", s.style.left = d + "px";
			} else {
				let r = t.right - i.right, a = window.innerWidth - n.right - r, o = window.innerWidth - e.right - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - mf, d = te(a, [mf, Math.max(mf, u - l)]);
				s.style.minWidth = c + "px", s.style.right = d + "px";
			}
			let o = f(), c = window.innerHeight - mf * 2, u = h.scrollHeight, d = window.getComputedStyle(l), m = parseInt(d.borderTopWidth, 10), v = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = m + v + u + b + y, S = Math.min(g.offsetHeight * 5, x), C = window.getComputedStyle(h), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - mf, D = c - E, O = g.offsetHeight / 2, k = g.offsetTop + O, A = m + v + k, j = x - A;
			if (A <= E) {
				let e = o.length > 0 && g === o[o.length - 1].ref.current;
				s.style.bottom = "0px";
				let t = l.clientHeight - h.offsetTop - h.offsetHeight, n = A + Math.max(D, O + (e ? T : 0) + t + y);
				s.style.height = n + "px";
			} else {
				let e = o.length > 0 && g === o[0].ref.current;
				s.style.top = "0px";
				let t = Math.max(E, m + h.offsetTop + (e ? w : 0) + O) + j;
				s.style.height = t + "px", h.scrollTop = A - E + h.offsetTop;
			}
			s.style.margin = `${mf}px 0`, s.style.minHeight = S + "px", s.style.maxHeight = c + "px", r?.(), requestAnimationFrame(() => p.current = !0);
		}
	}, [
		f,
		a.trigger,
		a.valueNode,
		s,
		l,
		h,
		g,
		_,
		a.dir,
		r
	]);
	A(() => y(), [y]);
	let [b, x] = K.useState();
	return A(() => {
		l && x(window.getComputedStyle(l).zIndex);
	}, [l]), /* @__PURE__ */ Z(wf, {
		scope: n,
		contentWrapper: s,
		shouldExpandOnScrollRef: p,
		onScrollButtonChange: K.useCallback((e) => {
			e && m.current === !0 && (y(), v?.(), m.current = !1);
		}, [y, v]),
		children: /* @__PURE__ */ Z("div", {
			ref: c,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: b
			},
			children: /* @__PURE__ */ Z(R.div, {
				...i,
				ref: d,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...i.style
				}
			})
		})
	});
});
xf.displayName = bf;
var Sf = "SelectPopperPosition", Cf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = mf, ...a } = e;
	return /* @__PURE__ */ Z(uu, {
		...Zd(n),
		...a,
		ref: t,
		align: r,
		collisionPadding: i,
		style: {
			boxSizing: "border-box",
			...a.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Cf.displayName = Sf;
var [wf, Tf] = Yd(ff, {}), Ef = "SelectViewport", Df = K.forwardRef((e, t) => {
	let { __scopeSelect: n, nonce: r, ...i } = e, a = gf(Ef, n), o = Tf(Ef, n), s = I(t, a.onViewportChange), c = K.useRef(0);
	return /* @__PURE__ */ Q(tt, { children: [/* @__PURE__ */ Z("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: r
	}), /* @__PURE__ */ Z(Kd.Slot, {
		scope: n,
		children: /* @__PURE__ */ Z(R.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...i,
			ref: s,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...i.style
			},
			onScroll: B(i.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = o;
				if (r?.current && n) {
					let e = Math.abs(c.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - mf * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				c.current = t.scrollTop;
			})
		})
	})] });
});
Df.displayName = Ef;
var Of = "SelectGroup", [kf, Af] = Yd(Of), jf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Ds();
	return /* @__PURE__ */ Z(kf, {
		scope: n,
		id: i,
		children: /* @__PURE__ */ Z(R.div, {
			role: "group",
			"aria-labelledby": i,
			...r,
			ref: t
		})
	});
});
jf.displayName = Of;
var Mf = "SelectLabel", Nf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Af(Mf, n);
	return /* @__PURE__ */ Z(R.div, {
		id: i.id,
		...r,
		ref: t
	});
});
Nf.displayName = Mf;
var Pf = "SelectItem", [Ff, If] = Yd(Pf), Lf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, value: r, disabled: i = !1, textValue: a, ...o } = e, s = $d(Pf, n), c = gf(Pf, n), l = s.value === r, [u, d] = K.useState(a ?? ""), [f, p] = K.useState(!1), m = I(t, (e) => c.itemRefCallback?.(e, r, i)), h = Ds(), g = K.useRef("touch"), _ = () => {
		i || (s.onValueChange(r), s.onOpenChange(!1));
	};
	if (r === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ Z(Ff, {
		scope: n,
		value: r,
		disabled: i,
		textId: h,
		isSelected: l,
		onItemTextChange: K.useCallback((e) => {
			d((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ Z(Kd.ItemSlot, {
			scope: n,
			value: r,
			disabled: i,
			textValue: u,
			children: /* @__PURE__ */ Z(R.div, {
				role: "option",
				"aria-labelledby": h,
				"data-highlighted": f ? "" : void 0,
				"aria-selected": l && f,
				"data-state": l ? "checked" : "unchecked",
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				tabIndex: i ? void 0 : -1,
				...o,
				ref: m,
				onFocus: B(o.onFocus, () => p(!0)),
				onBlur: B(o.onBlur, () => p(!1)),
				onClick: B(o.onClick, () => {
					g.current !== "mouse" && _();
				}),
				onPointerUp: B(o.onPointerUp, () => {
					g.current === "mouse" && _();
				}),
				onPointerDown: B(o.onPointerDown, (e) => {
					g.current = e.pointerType;
				}),
				onPointerMove: B(o.onPointerMove, (e) => {
					g.current = e.pointerType, i ? c.onItemLeave?.() : g.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: B(o.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && c.onItemLeave?.();
				}),
				onKeyDown: B(o.onKeyDown, (e) => {
					c.searchRef?.current !== "" && e.key === " " || (Wd.includes(e.key) && _(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
Lf.displayName = Pf;
var Rf = "SelectItemText", zf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, ...a } = e, o = $d(Rf, n), s = gf(Rf, n), c = If(Rf, n), l = tf(Rf, n), [u, d] = K.useState(null), f = I(t, (e) => d(e), c.onItemTextChange, (e) => s.itemTextRefCallback?.(e, c.value, c.disabled)), p = u?.textContent, m = K.useMemo(() => /* @__PURE__ */ Z("option", {
		value: c.value,
		disabled: c.disabled,
		children: p
	}, c.value), [
		c.disabled,
		c.value,
		p
	]), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
	return A(() => (h(m), () => g(m)), [
		h,
		g,
		m
	]), /* @__PURE__ */ Q(tt, { children: [/* @__PURE__ */ Z(R.span, {
		id: c.textId,
		...a,
		ref: f
	}), c.isSelected && o.valueNode && !o.valueNodeHasChildren ? nt.createPortal(a.children, o.valueNode) : null] });
});
zf.displayName = Rf;
var Bf = "SelectItemIndicator", Vf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return If(Bf, n).isSelected ? /* @__PURE__ */ Z(R.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
});
Vf.displayName = Bf;
var Hf = "SelectScrollUpButton", Uf = K.forwardRef((e, t) => {
	let n = gf(Hf, e.__scopeSelect), r = Tf(Hf, e.__scopeSelect), [i, a] = K.useState(!1), o = I(t, r.onScrollButtonChange);
	return A(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				a(t.scrollTop > 0);
			}, t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ Z(Kf, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
Uf.displayName = Hf;
var Wf = "SelectScrollDownButton", Gf = K.forwardRef((e, t) => {
	let n = gf(Wf, e.__scopeSelect), r = Tf(Wf, e.__scopeSelect), [i, a] = K.useState(!1), o = I(t, r.onScrollButtonChange);
	return A(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight;
				a(Math.ceil(t.scrollTop) < e);
			}, t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ Z(Kf, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
Gf.displayName = Wf;
var Kf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, onAutoScroll: r, ...i } = e, a = gf("SelectScrollButton", n), o = K.useRef(null), s = qd(n), c = K.useCallback(() => {
		o.current !== null && (window.clearInterval(o.current), o.current = null);
	}, []);
	return K.useEffect(() => () => c(), [c]), A(() => {
		s().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [s]), /* @__PURE__ */ Z(R.div, {
		"aria-hidden": !0,
		...i,
		ref: t,
		style: {
			flexShrink: 0,
			...i.style
		},
		onPointerDown: B(i.onPointerDown, () => {
			o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerMove: B(i.onPointerMove, () => {
			a.onItemLeave?.(), o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerLeave: B(i.onPointerLeave, () => {
			c();
		})
	});
}), qf = "SelectSeparator", Jf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ Z(R.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
});
Jf.displayName = qf;
var Yf = "SelectArrow", Xf = K.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Zd(n), a = $d(Yf, n), o = gf(Yf, n);
	return a.open && o.position === "popper" ? /* @__PURE__ */ Z(du, {
		...i,
		...r,
		ref: t
	}) : null;
});
Xf.displayName = Yf;
var Zf = "SelectBubbleInput", Qf = K.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
	let i = K.useRef(null), a = I(r, i), o = wu(t);
	return K.useEffect(() => {
		let e = i.current;
		if (!e) return;
		let n = window.HTMLSelectElement.prototype, r = Object.getOwnPropertyDescriptor(n, "value").set;
		if (o !== t && r) {
			let n = new Event("change", { bubbles: !0 });
			r.call(e, t), e.dispatchEvent(n);
		}
	}, [o, t]), /* @__PURE__ */ Z(R.select, {
		...n,
		style: {
			...Tu,
			...n.style
		},
		ref: a,
		defaultValue: t
	});
});
Qf.displayName = Zf;
function $f(e) {
	return e === "" || e === void 0;
}
function ep(e) {
	let t = z(e), n = K.useRef(""), r = K.useRef(0), i = K.useCallback((e) => {
		let i = n.current + e;
		t(i), (function e(t) {
			n.current = t, window.clearTimeout(r.current), t !== "" && (r.current = window.setTimeout(() => e(""), 1e3));
		})(i);
	}, [t]), a = K.useCallback(() => {
		n.current = "", window.clearTimeout(r.current);
	}, []);
	return K.useEffect(() => () => window.clearTimeout(r.current), []), [
		n,
		i,
		a
	];
}
function tp(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = np(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function np(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var rp = nf, ip = af, ap = sf, op = lf, sp = df, cp = pf, lp = Df, up = Lf, dp = zf, fp = Vf, pp = rp, mp = ap, hp = K.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ Q(ip, {
	ref: r,
	className: U("flex h-9 w-full items-center justify-between gap-2 rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2 text-sm text-wx-fg", "placeholder:text-wx-fg-subtle", "focus:border-wx-primary focus:outline-none focus:ring-2 focus:ring-wx-primary/20", "disabled:cursor-not-allowed disabled:bg-wx-bg-elevated/60 disabled:text-wx-fg-muted", "[&>span]:line-clamp-1", e),
	...n,
	children: [t, /* @__PURE__ */ Z(op, {
		asChild: !0,
		children: /* @__PURE__ */ Z(pe, {
			size: 14,
			className: "opacity-60",
			"aria-hidden": "true"
		})
	})]
}));
hp.displayName = ip.displayName;
var gp = K.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, i) => /* @__PURE__ */ Z(sp, { children: /* @__PURE__ */ Z(cp, {
	ref: i,
	position: n,
	className: U("relative z-[10000] max-h-72 min-w-[8rem] overflow-hidden rounded-wx-sm border border-wx-border bg-wx-bg text-wx-fg shadow-lg", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1", e),
	...r,
	children: /* @__PURE__ */ Z(lp, {
		className: U("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
		children: t
	})
}) }));
gp.displayName = cp.displayName;
var _p = K.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ Q(up, {
	ref: r,
	className: U("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-2 pl-7 text-sm outline-none", "focus:bg-wx-bg-elevated focus:text-wx-fg", "data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "data-[state=checked]:font-medium", e),
	...n,
	children: [/* @__PURE__ */ Z("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ Z(fp, { children: /* @__PURE__ */ Z(k, {
			size: 12,
			className: "text-wx-primary",
			"aria-hidden": "true"
		}) })
	}), /* @__PURE__ */ Z(dp, { children: t })]
}));
_p.displayName = up.displayName;
//#endregion
//#region components/widget/tabs/profile-tab/system-field-labels.ts
function vp(e) {
	return e.replace(/_([a-z])/g, (e, t) => t.toUpperCase());
}
var yp = new Set(/* @__PURE__ */ "avatar.wexioId.telegramId.whatsappId.viberId.instagramId.optInWhatsapp.webVerified.firstName.lastName.username.language.email.phone.company.location.isValid.chatStatus.chatCategory.priority.leadSource.leadStatus.interestLevel.productInterest.budgetRange.purchaseTimeline.lastMessageSentAt.lastMessageReceivedAt.lastSeenAt.firstMessageReceivedAt.isBlocked.registrationDate.aiAvailable.totalMessagesSent.totalMessagesReceived.totalAiMessagesSent.totalBotMessagesSent.totalUserMessagesSent.flowCompletionRate.lastFlowCompleted.totalFlowsStarted.totalFlowsCompleted".split(".")), bp = new Set([
	"chatStatus",
	"chatCategory",
	"priority",
	"leadStatus",
	"interestLevel"
]);
function xp(e, t, n) {
	let r = vp(e);
	return yp.has(r) ? n(`systemFields.${r}`) : t;
}
function Sp(e, t, n) {
	let r = vp(e);
	return bp.has(r) ? n(`systemFieldOptions.${r}.${t}`) : Tp(t);
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/options-control.tsx
function Cp({ id: e, fieldKey: t, mode: n, options: r, value: i, disabled: a, onChange: o, t: s }) {
	return r.length === 0 ? /* @__PURE__ */ Z("p", {
		id: e,
		className: "text-[11px] text-wx-fg-subtle italic",
		children: "No options configured."
	}) : /* @__PURE__ */ Q(pp, {
		value: (n === "single" ? i ?? "" : Po(i)[0] ?? "") || void 0,
		disabled: a,
		onValueChange: (e) => {
			if (e === "__clear__" || !e) {
				o(null);
				return;
			}
			o(n === "single" ? e : JSON.stringify([e]));
		},
		children: [/* @__PURE__ */ Z(hp, {
			id: e,
			"aria-label": "Select an option",
			children: /* @__PURE__ */ Z(mp, { placeholder: "—" })
		}), /* @__PURE__ */ Q(gp, { children: [/* @__PURE__ */ Z(_p, {
			value: "__clear__",
			children: "—"
		}), r.map((e) => /* @__PURE__ */ Z(_p, {
			value: e,
			children: Sp(t, e, s)
		}, e))] })]
	});
}
var wp = new Set([
	"URL",
	"ID",
	"AI",
	"API",
	"VIP",
	"CRM",
	"SMS"
]);
function Tp(e) {
	if (!e) return e;
	let t = e.replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(/[\s_-]+/).filter(Boolean);
	return t.length === 0 ? e : t.map((e, t) => {
		let n = e.toUpperCase();
		if (wp.has(n)) return n;
		let r = e.toLowerCase();
		return t === 0 ? r.charAt(0).toUpperCase() + r.slice(1) : r;
	}).join(" ");
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/string-control.tsx
function Ep({ id: e, fieldKey: t, value: n, disabled: r, onChange: i }) {
	return /* @__PURE__ */ Z("input", {
		id: e,
		type: t === "email" ? "email" : t === "phone" ? "tel" : "text",
		value: n ?? "",
		disabled: r,
		autoComplete: t === "email" ? "email" : t === "phone" ? "tel" : t === "firstName" ? "given-name" : t === "lastName" ? "family-name" : void 0,
		placeholder: t === "phone" ? "+1 555 123 4567" : void 0,
		onChange: (e) => i(e.target.value || null),
		className: Io
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/index.tsx
function Dp({ id: e, field: t, value: n, onChange: r, t: i }) {
	let a = t.pinned;
	switch (t.type) {
		case "BOOLEAN": return /* @__PURE__ */ Z(Do, {
			id: e,
			value: n,
			disabled: a,
			onChange: r
		});
		case "NUMBER": return /* @__PURE__ */ Z(Ro, {
			id: e,
			value: n,
			disabled: a,
			onChange: r
		});
		case "DATE": return /* @__PURE__ */ Z(Lo, {
			id: e,
			value: n,
			disabled: a,
			onChange: r
		});
		case "ENUM": return /* @__PURE__ */ Z(Cp, {
			id: e,
			fieldKey: t.key,
			mode: "single",
			options: t.options ?? [],
			value: n,
			disabled: a,
			onChange: r,
			t: i
		});
		case "ARRAY": return /* @__PURE__ */ Z(Cp, {
			id: e,
			fieldKey: t.key,
			mode: "multi",
			options: t.options ?? [],
			value: n,
			disabled: a,
			onChange: r,
			t: i
		});
		case "AVATAR": return null;
		default: return /* @__PURE__ */ Z(Ep, {
			id: e,
			fieldKey: t.key,
			value: n,
			disabled: a,
			onChange: r
		});
	}
}
//#endregion
//#region components/widget/tabs/profile-tab/field-row.tsx
function Op({ field: e, value: t, onChange: n, error: r, t: i }) {
	let a = e.pinned, o = `wx-profile-${e.key}`;
	return /* @__PURE__ */ Q("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ Q("label", {
				htmlFor: o,
				className: "flex items-baseline justify-between gap-2 text-xs font-medium text-wx-fg-muted",
				children: [/* @__PURE__ */ Q("span", {
					className: "inline-flex items-center gap-1",
					children: [
						xp(e.key, e.label, i),
						e.required && /* @__PURE__ */ Q("span", {
							className: "text-wx-danger",
							title: i("requiredHint"),
							children: ["*", /* @__PURE__ */ Z("span", {
								className: "sr-only",
								children: i("requiredHint")
							})]
						}),
						a && /* @__PURE__ */ Z(Yn, {
							size: 11,
							"aria-hidden": "true",
							className: "text-wx-fg-subtle"
						})
					]
				}), a && /* @__PURE__ */ Z("span", {
					className: "text-[10px] font-normal text-wx-fg-subtle",
					children: i("pinnedHint")
				})]
			}),
			/* @__PURE__ */ Z(Dp, {
				id: o,
				field: e,
				value: t,
				onChange: n,
				t: i
			}),
			r && /* @__PURE__ */ Z("p", {
				className: "text-[11px] text-wx-danger",
				children: r
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/section.tsx
function kp({ eyebrow: e, adornment: t, children: n }) {
	return /* @__PURE__ */ Q("section", {
		className: "mt-6 flex flex-col gap-4 border-wx-border border-t pt-5 first:mt-4 first:border-t-0 first:pt-0",
		children: [/* @__PURE__ */ Q("div", {
			className: "flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ Z("h2", {
				className: "text-[11px] font-semibold tracking-[0.08em] text-wx-fg-subtle uppercase",
				children: e
			}), t]
		}), /* @__PURE__ */ Z("div", {
			className: "flex flex-col gap-4",
			children: n
		})]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/settings-row.tsx
function Ap({ label: e, hint: t, children: n }) {
	return /* @__PURE__ */ Q("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ Q("div", {
			className: "flex min-w-0 flex-col",
			children: [/* @__PURE__ */ Z("span", {
				className: "text-sm font-medium text-wx-fg",
				children: e
			}), t && /* @__PURE__ */ Z("span", {
				className: "text-[11px] text-wx-fg-muted",
				children: t
			})]
		}), /* @__PURE__ */ Z("div", {
			className: "shrink-0",
			children: n
		})]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/preferences-section.tsx
var jp = [
	{
		value: "system",
		icon: er,
		labelKey: "themeAuto"
	},
	{
		value: "light",
		icon: lr,
		labelKey: "themeLight"
	},
	{
		value: "dark",
		icon: tr,
		labelKey: "themeDark"
	}
];
function Mp({ profile: e, locale: t, languageEditable: n, prefSaving: r, applyPref: i, onNotificationError: a, t: o }) {
	return /* @__PURE__ */ Q(kp, {
		eyebrow: o("preferencesHeading"),
		adornment: r ? /* @__PURE__ */ Q("span", {
			className: "inline-flex items-center gap-1 text-[10px] font-normal text-wx-fg-subtle",
			children: [/* @__PURE__ */ Z(Be, {
				size: 10,
				className: "animate-spin",
				"aria-hidden": "true"
			}), o("saving")]
		}) : void 0,
		children: [
			n && /* @__PURE__ */ Z(Ap, {
				label: o("preferenceLanguage"),
				children: /* @__PURE__ */ Z("div", {
					className: "w-40",
					children: /* @__PURE__ */ Q(pp, {
						value: e.preferences.language ?? t,
						disabled: r === "language",
						onValueChange: (e) => i("language", e || null),
						children: [/* @__PURE__ */ Z(hp, {
							"aria-label": o("preferenceLanguage"),
							children: /* @__PURE__ */ Z(mp, {})
						}), /* @__PURE__ */ Z(gp, { children: mn.map((e) => /* @__PURE__ */ Z(_p, {
							value: e,
							children: Fo(e, t)
						}, e)) })]
					})
				})
			}),
			/* @__PURE__ */ Z(Ap, {
				label: o("preferenceThemeMode"),
				hint: e.themeModeEditable ? void 0 : o("themeLocked"),
				children: /* @__PURE__ */ Z("div", {
					className: "inline-flex items-center gap-0.5 rounded-full bg-wx-bg-elevated p-0.5",
					children: jp.map(({ value: t, icon: n, labelKey: a }) => {
						let s = (e.preferences.themeMode ?? "system") === t;
						return /* @__PURE__ */ Z("button", {
							type: "button",
							"aria-pressed": s,
							"aria-label": o(a),
							title: o(a),
							disabled: !e.themeModeEditable || r === "themeMode",
							onClick: () => i("themeMode", t),
							className: U("flex h-7 w-9 items-center justify-center rounded-full transition-all", s ? "bg-wx-bg text-wx-fg shadow-[0_1px_3px_rgba(0,0,0,0.08)]" : "text-wx-fg-muted hover:text-wx-fg", "disabled:cursor-not-allowed disabled:opacity-50"),
							children: /* @__PURE__ */ Z(n, {
								size: 13,
								"aria-hidden": "true"
							})
						}, t);
					})
				})
			}),
			/* @__PURE__ */ Z(Ap, {
				label: o("preferenceDesktopNotifications"),
				hint: o("preferenceDesktopNotificationsHint"),
				children: /* @__PURE__ */ Z(Eo, {
					checked: !!e.preferences.desktopNotifications && (typeof Notification > "u" || Notification.permission === "granted"),
					onChange: async (e) => {
						if (!e) {
							i("desktopNotifications", !1);
							return;
						}
						if (typeof Notification > "u") {
							a("notificationsRequest");
							return;
						}
						if (Notification.permission === "denied") {
							a("notificationsBlocked");
							return;
						}
						if (Notification.permission === "default") try {
							if (await Notification.requestPermission() !== "granted") {
								a("notificationsBlocked");
								return;
							}
						} catch {
							a("notificationsRequest");
							return;
						}
						i("desktopNotifications", !0);
					}
				})
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/profile-error.ts
function Np(e) {
	let t = e, n = [];
	if (t?.graphQLErrors) for (let e of t.graphQLErrors) {
		let t = e.extensions?.code;
		typeof t == "string" && n.push(t);
	}
	typeof t?.message == "string" && n.push(t.message);
	for (let e of n) {
		if (e === "webProfileFieldNotAllowed") return "fieldNotAllowed";
		if (e === "webProfileFieldPinned") return "fieldPinned";
		if (e === "webProfileThemeLocked") return "themeLocked";
		if (e === "webProfileFeatureDisabled") return "featureDisabled";
		if (e === "peopleFields.invalidValue") return "fieldInvalid";
	}
	return "generic";
}
function Pp(e) {
	let t = e;
	if (!t?.graphQLErrors) return null;
	for (let e of t.graphQLErrors) {
		let t = e.extensions;
		if (t && t.code === "peopleFields.invalidValue") {
			if (typeof t.field == "string") return t.field;
			if (typeof t.key == "string") return t.key;
		}
	}
	return null;
}
function Fp(e) {
	switch (e) {
		case "fieldNotAllowed": return "errorFieldNotAllowed";
		case "fieldPinned": return "errorFieldPinned";
		case "themeLocked": return "errorThemeLocked";
		case "featureDisabled": return "errorFeatureDisabled";
		case "fieldInvalid": return "errorFieldInvalid";
		default: return "errorGeneric";
	}
}
//#endregion
//#region components/widget/tabs/profile-tab/use-apply-pref.ts
function Ip(e, t) {
	let [n] = Gt(), [r, i] = X(null), [a, o] = X(null), s = q(() => o(null), []);
	return {
		apply: q(async (r, a) => {
			if (!e) return;
			i(r), o(null);
			let s = { [r]: a }, c = {
				__typename: "VisitorProfilePreferences",
				...e.preferences,
				...s
			};
			try {
				await n({
					variables: { input: { preferences: s } },
					optimisticResponse: {
						__typename: "Mutation",
						updateVisitorProfile: {
							__typename: "VisitorProfile",
							...e,
							preferences: c
						}
					},
					update: (e, { data: t }) => {
						let n = t?.updateVisitorProfile;
						n && e.writeQuery({
							query: Ht,
							data: { visitorProfile: n }
						});
					}
				}), r === "language" && typeof a == "string" && vn(a);
			} catch (e) {
				o(t(Fp(Np(e))));
			} finally {
				i(null);
			}
		}, [
			e,
			t,
			n
		]),
		saving: r,
		error: a,
		clearError: s
	};
}
//#endregion
//#region node_modules/libphonenumber-js/metadata.min.json.js
var Lp = {
	version: 4,
	country_calling_codes: {
		1: [
			"US",
			"AG",
			"AI",
			"AS",
			"BB",
			"BM",
			"BS",
			"CA",
			"DM",
			"DO",
			"GD",
			"GU",
			"JM",
			"KN",
			"KY",
			"LC",
			"MP",
			"MS",
			"PR",
			"SX",
			"TC",
			"TT",
			"VC",
			"VG",
			"VI"
		],
		7: ["RU", "KZ"],
		20: ["EG"],
		27: ["ZA"],
		30: ["GR"],
		31: ["NL"],
		32: ["BE"],
		33: ["FR"],
		34: ["ES"],
		36: ["HU"],
		39: ["IT", "VA"],
		40: ["RO"],
		41: ["CH"],
		43: ["AT"],
		44: [
			"GB",
			"GG",
			"IM",
			"JE"
		],
		45: ["DK"],
		46: ["SE"],
		47: ["NO", "SJ"],
		48: ["PL"],
		49: ["DE"],
		51: ["PE"],
		52: ["MX"],
		53: ["CU"],
		54: ["AR"],
		55: ["BR"],
		56: ["CL"],
		57: ["CO"],
		58: ["VE"],
		60: ["MY"],
		61: [
			"AU",
			"CC",
			"CX"
		],
		62: ["ID"],
		63: ["PH"],
		64: ["NZ"],
		65: ["SG"],
		66: ["TH"],
		81: ["JP"],
		82: ["KR"],
		84: ["VN"],
		86: ["CN"],
		90: ["TR"],
		91: ["IN"],
		92: ["PK"],
		93: ["AF"],
		94: ["LK"],
		95: ["MM"],
		98: ["IR"],
		211: ["SS"],
		212: ["MA", "EH"],
		213: ["DZ"],
		216: ["TN"],
		218: ["LY"],
		220: ["GM"],
		221: ["SN"],
		222: ["MR"],
		223: ["ML"],
		224: ["GN"],
		225: ["CI"],
		226: ["BF"],
		227: ["NE"],
		228: ["TG"],
		229: ["BJ"],
		230: ["MU"],
		231: ["LR"],
		232: ["SL"],
		233: ["GH"],
		234: ["NG"],
		235: ["TD"],
		236: ["CF"],
		237: ["CM"],
		238: ["CV"],
		239: ["ST"],
		240: ["GQ"],
		241: ["GA"],
		242: ["CG"],
		243: ["CD"],
		244: ["AO"],
		245: ["GW"],
		246: ["IO"],
		247: ["AC"],
		248: ["SC"],
		249: ["SD"],
		250: ["RW"],
		251: ["ET"],
		252: ["SO"],
		253: ["DJ"],
		254: ["KE"],
		255: ["TZ"],
		256: ["UG"],
		257: ["BI"],
		258: ["MZ"],
		260: ["ZM"],
		261: ["MG"],
		262: ["RE", "YT"],
		263: ["ZW"],
		264: ["NA"],
		265: ["MW"],
		266: ["LS"],
		267: ["BW"],
		268: ["SZ"],
		269: ["KM"],
		290: ["SH", "TA"],
		291: ["ER"],
		297: ["AW"],
		298: ["FO"],
		299: ["GL"],
		350: ["GI"],
		351: ["PT"],
		352: ["LU"],
		353: ["IE"],
		354: ["IS"],
		355: ["AL"],
		356: ["MT"],
		357: ["CY"],
		358: ["FI", "AX"],
		359: ["BG"],
		370: ["LT"],
		371: ["LV"],
		372: ["EE"],
		373: ["MD"],
		374: ["AM"],
		375: ["BY"],
		376: ["AD"],
		377: ["MC"],
		378: ["SM"],
		380: ["UA"],
		381: ["RS"],
		382: ["ME"],
		383: ["XK"],
		385: ["HR"],
		386: ["SI"],
		387: ["BA"],
		389: ["MK"],
		420: ["CZ"],
		421: ["SK"],
		423: ["LI"],
		500: ["FK"],
		501: ["BZ"],
		502: ["GT"],
		503: ["SV"],
		504: ["HN"],
		505: ["NI"],
		506: ["CR"],
		507: ["PA"],
		508: ["PM"],
		509: ["HT"],
		590: [
			"GP",
			"BL",
			"MF"
		],
		591: ["BO"],
		592: ["GY"],
		593: ["EC"],
		594: ["GF"],
		595: ["PY"],
		596: ["MQ"],
		597: ["SR"],
		598: ["UY"],
		599: ["CW", "BQ"],
		670: ["TL"],
		672: ["NF"],
		673: ["BN"],
		674: ["NR"],
		675: ["PG"],
		676: ["TO"],
		677: ["SB"],
		678: ["VU"],
		679: ["FJ"],
		680: ["PW"],
		681: ["WF"],
		682: ["CK"],
		683: ["NU"],
		685: ["WS"],
		686: ["KI"],
		687: ["NC"],
		688: ["TV"],
		689: ["PF"],
		690: ["TK"],
		691: ["FM"],
		692: ["MH"],
		850: ["KP"],
		852: ["HK"],
		853: ["MO"],
		855: ["KH"],
		856: ["LA"],
		880: ["BD"],
		886: ["TW"],
		960: ["MV"],
		961: ["LB"],
		962: ["JO"],
		963: ["SY"],
		964: ["IQ"],
		965: ["KW"],
		966: ["SA"],
		967: ["YE"],
		968: ["OM"],
		970: ["PS"],
		971: ["AE"],
		972: ["IL"],
		973: ["BH"],
		974: ["QA"],
		975: ["BT"],
		976: ["MN"],
		977: ["NP"],
		992: ["TJ"],
		993: ["TM"],
		994: ["AZ"],
		995: ["GE"],
		996: ["KG"],
		998: ["UZ"]
	},
	countries: {
		AC: [
			"247",
			"00",
			"(?:[01589]\\d|[46])\\d{4}",
			[5, 6]
		],
		AD: [
			"376",
			"00",
			"(?:1|6\\d)\\d{7}|[135-9]\\d{5}",
			[
				6,
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					["[135-9]"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["1"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["6"]
				]
			]
		],
		AE: [
			"971",
			"00",
			"(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{2,9})",
					"$1 $2",
					["60|8"]
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[236]|[479][2-8]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{5})",
					"$1 $2 $3",
					["[479]"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["5"],
					"0$1"
				]
			],
			"0"
		],
		AF: [
			"93",
			"00",
			"[2-7]\\d{8}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[2-7]"],
				"0$1"
			]],
			"0"
		],
		AG: [
			"1",
			"011",
			"(?:268|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([457]\\d{6})$|1",
			"268$1",
			0,
			"268"
		],
		AI: [
			"1",
			"011",
			"(?:264|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2457]\\d{6})$|1",
			"264$1",
			0,
			"264"
		],
		AL: [
			"355",
			"00",
			"(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
			[
				6,
				7,
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{3,4})",
					"$1 $2",
					["80|9"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["4[2-6]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[2358][2-5]|4"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["[23578]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["6"],
					"0$1"
				]
			],
			"0"
		],
		AM: [
			"374",
			"00",
			"(?:[1-489]\\d|55|60|77)\\d{6}",
			[8],
			[
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["[89]0"],
					"0 $1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["2|3[12]"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["1|47"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["[3-9]"],
					"0$1"
				]
			],
			"0"
		],
		AO: [
			"244",
			"00",
			"[29]\\d{8}",
			[9],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[29]"]
			]]
		],
		AR: [
			"54",
			"00",
			"(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",
			[10, 11],
			[
				[
					"(\\d{4})(\\d{2})(\\d{4})",
					"$1 $2-$3",
					[
						"2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
						"2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
						"2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
						"2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
					],
					"0$1",
					1
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2-$3",
					["1"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["[68]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2-$3",
					["[23]"],
					"0$1",
					1
				],
				[
					"(\\d)(\\d{4})(\\d{2})(\\d{4})",
					"$2 15-$3-$4",
					[
						"9(?:2[2-469]|3[3-578])",
						"9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
						"9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
						"9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
						"9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
					],
					"0$1",
					0,
					"$1 $2 $3-$4"
				],
				[
					"(\\d)(\\d{2})(\\d{4})(\\d{4})",
					"$2 15-$3-$4",
					["91"],
					"0$1",
					0,
					"$1 $2 $3-$4"
				],
				[
					"(\\d{3})(\\d{3})(\\d{5})",
					"$1-$2-$3",
					["8"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{4})",
					"$2 15-$3-$4",
					["9"],
					"0$1",
					0,
					"$1 $2 $3-$4"
				]
			],
			"0",
			0,
			"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
			"9$1"
		],
		AS: [
			"1",
			"011",
			"(?:[58]\\d\\d|684|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([267]\\d{6})$|1",
			"684$1",
			0,
			"684"
		],
		AT: [
			"43",
			"00",
			"1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d)(\\d{3,12})",
					"$1 $2",
					["1(?:11|[2-9])"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})",
					"$1 $2",
					["517"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,5})",
					"$1 $2",
					["5[079]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,10})",
					"$1 $2",
					["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3,9})",
					"$1 $2",
					["[2-467]|5[2-6]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["5"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4,7})",
					"$1 $2 $3",
					["5"],
					"0$1"
				]
			],
			"0"
		],
		AU: [
			"61",
			"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
			"1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				12
			],
			[
				[
					"(\\d{2})(\\d{3,4})",
					"$1 $2",
					["16"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					["16"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["14|4"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[2378]"],
					"(0$1)"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["1(?:30|[89])"]
				]
			],
			"0",
			0,
			"(183[12])|0",
			0,
			0,
			0,
			[
				["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}", [9]],
				["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]],
				["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
				["190[0-26]\\d{6}", [10]],
				0,
				0,
				0,
				["163\\d{2,6}", [
					5,
					6,
					7,
					8,
					9
				]],
				["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
				["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [
					6,
					8,
					10,
					12
				]]
			],
			"0011"
		],
		AW: [
			"297",
			"00",
			"(?:[25-79]\\d\\d|800)\\d{4}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[25-9]"]
			]]
		],
		AX: [
			"358",
			"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
			"2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			0,
			"0",
			0,
			0,
			0,
			0,
			"18",
			0,
			"00"
		],
		AZ: [
			"994",
			"00",
			"365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",
			[9],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["90"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"1[28]|2|365|46",
						"1[28]|2|365[45]|46",
						"1[28]|2|365(?:4|5[02])|46"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[13-9]"],
					"0$1"
				]
			],
			"0"
		],
		BA: [
			"387",
			"00",
			"6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",
			[8, 9],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["6[1-3]|[7-9]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2-$3",
					["[3-5]|6[56]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					["6"],
					"0$1"
				]
			],
			"0"
		],
		BB: [
			"1",
			"011",
			"(?:246|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"246$1",
			0,
			"246"
		],
		BD: [
			"880",
			"00",
			"[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",
			[
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{4,6})",
					"$1-$2",
					["31[5-8]|[459]1"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,7})",
					"$1-$2",
					["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3,6})",
					"$1-$2",
					["[13-9]|2[23]"],
					"0$1"
				],
				[
					"(\\d)(\\d{7,8})",
					"$1-$2",
					["2"],
					"0$1"
				]
			],
			"0"
		],
		BE: [
			"32",
			"00",
			"4\\d{8}|[1-9]\\d{7}",
			[8, 9],
			[
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["(?:80|9)0"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[239]|4[23]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[15-8]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["4"],
					"0$1"
				]
			],
			"0"
		],
		BF: [
			"226",
			"00",
			"[024-7]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[024-7]"]
			]]
		],
		BG: [
			"359",
			"00",
			"00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
			[
				6,
				7,
				8,
				9,
				12
			],
			[
				[
					"(\\d)(\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["2"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["43[1-6]|70[1-9]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,3})",
					"$1 $2 $3",
					["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["(?:70|8)0"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})",
					"$1 $2 $3",
					["43[1-7]|7"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[48]|9[08]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["9"],
					"0$1"
				]
			],
			"0"
		],
		BH: [
			"973",
			"00",
			"[136-9]\\d{7}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[13679]|8[02-4679]"]
			]]
		],
		BI: [
			"257",
			"00",
			"(?:[267]\\d|31)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[2367]"]
			]]
		],
		BJ: [
			"229",
			"00",
			"(?:01\\d|8)\\d{7}",
			[8, 10],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"]
			], [
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4 $5",
				["0"]
			]]
		],
		BL: [
			"590",
			"00",
			"7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",
			[9],
			0,
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["(?:59(?:0(?:2[7-9]|3[3-7]|5[12]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"],
				["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],
				["80[0-5]\\d{6}"],
				["8[129]\\d{7}"],
				0,
				0,
				0,
				0,
				["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
			]
		],
		BM: [
			"1",
			"011",
			"(?:441|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"441$1",
			0,
			"441"
		],
		BN: [
			"673",
			"00",
			"[2-578]\\d{6}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[2-578]"]
			]]
		],
		BO: [
			"591",
			"00(?:1\\d)?",
			"(?:[2-7]\\d\\d|8001)\\d{5}",
			[8, 9],
			[
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					["[23]|4[46]|50"]
				],
				[
					"(\\d{8})",
					"$1",
					["[5-7]"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["8"]
				]
			],
			"0",
			0,
			"0(1\\d)?"
		],
		BQ: [
			"599",
			"00",
			"(?:[34]1|7\\d)\\d{5}",
			[7],
			0,
			0,
			0,
			0,
			0,
			0,
			"[347]"
		],
		BR: [
			"55",
			"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
			"[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}",
			[
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]
				],
				[
					"(\\d{3})(\\d{2,3})(\\d{4})",
					"$1 $2 $3",
					["(?:[358]|90)0"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2-$3",
					["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],
					"($1)"
				],
				[
					"(\\d{2})(\\d{5})(\\d{4})",
					"$1 $2-$3",
					["[16][1-9]|[2-57-9]"],
					"($1)"
				]
			],
			"0",
			0,
			"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
			"$2"
		],
		BS: [
			"1",
			"011",
			"(?:242|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([3-8]\\d{6})$|1",
			"242$1",
			0,
			"242"
		],
		BT: [
			"975",
			"00",
			"[178]\\d{7}|[2-8]\\d{6}",
			[7, 8],
			[[
				"(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[2-6]|7[246]|8[2-4]"]
			], [
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["1[67]|[78]"]
			]]
		],
		BW: [
			"267",
			"00",
			"(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",
			[
				7,
				8,
				10
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["90"]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[24-6]|3[15-9]"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[37]"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["0"]
				],
				[
					"(\\d{3})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					["8"]
				]
			]
		],
		BY: [
			"375",
			"810",
			"(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
			[
				6,
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					["800"],
					"8 $1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,4})",
					"$1 $2 $3",
					["800"],
					"8 $1"
				],
				[
					"(\\d{4})(\\d{2})(\\d{3})",
					"$1 $2-$3",
					["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],
					"8 0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					["1(?:[56]|7[467])|2[1-3]"],
					"8 0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					["[1-4]"],
					"8 0$1"
				],
				[
					"(\\d{3})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["[89]"],
					"8 $1"
				]
			],
			"8",
			0,
			"0|80?",
			0,
			0,
			0,
			0,
			"8~10"
		],
		BZ: [
			"501",
			"00",
			"(?:0800\\d|[2-8])\\d{6}",
			[7, 11],
			[[
				"(\\d{3})(\\d{4})",
				"$1-$2",
				["[2-8]"]
			], [
				"(\\d)(\\d{3})(\\d{4})(\\d{3})",
				"$1-$2-$3-$4",
				["0"]
			]]
		],
		CA: [
			"1",
			"011",
			"[2-9]\\d{9}|3\\d{6}",
			[7, 10],
			0,
			"1",
			0,
			0,
			0,
			0,
			0,
			[
				["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]],
				["", [10]],
				["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
				["900[2-9]\\d{6}", [10]],
				["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]],
				0,
				["310\\d{4}", [7]],
				0,
				["600[2-9]\\d{6}", [10]]
			]
		],
		CC: [
			"61",
			"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
			"1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
			[
				6,
				7,
				8,
				9,
				10,
				12
			],
			0,
			"0",
			0,
			"([59]\\d{7})$|0",
			"8$1",
			0,
			0,
			[
				["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
				["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]],
				["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
				["190[0-26]\\d{6}", [10]],
				0,
				0,
				0,
				0,
				["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
				["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [
					6,
					8,
					10,
					12
				]]
			],
			"0011"
		],
		CD: [
			"243",
			"00",
			"(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}",
			[
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["88"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["[1-6]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["5"],
					"0$1"
				]
			],
			"0"
		],
		CF: [
			"236",
			"00",
			"8776\\d{4}|(?:[27]\\d|61)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[26-8]"]
			]]
		],
		CG: [
			"242",
			"00",
			"222\\d{6}|(?:0\\d|80)\\d{7}",
			[9],
			[[
				"(\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				["8"]
			], [
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[02]"]
			]]
		],
		CH: [
			"41",
			"00",
			"8\\d{11}|[2-9]\\d{8}",
			[9, 12],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8[047]|90"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[2-79]|81"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		CI: [
			"225",
			"00",
			"[02]\\d{9}",
			[10],
			[[
				"(\\d{2})(\\d{2})(\\d)(\\d{5})",
				"$1 $2 $3 $4",
				["2"]
			], [
				"(\\d{2})(\\d{2})(\\d{2})(\\d{4})",
				"$1 $2 $3 $4",
				["0"]
			]]
		],
		CK: [
			"682",
			"00",
			"[2-578]\\d{4}",
			[5],
			[[
				"(\\d{2})(\\d{3})",
				"$1 $2",
				["[2-578]"]
			]]
		],
		CL: [
			"56",
			"(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",
			"12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",
			[
				9,
				10,
				11
			],
			[
				[
					"(\\d{5})(\\d{4})",
					"$1 $2",
					["219", "2196"],
					"($1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["60|809"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["44"]
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["2[1-36]"],
					"($1)"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["9(?:10|[2-9])"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"],
					"($1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["60|8"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					["60"]
				]
			]
		],
		CM: [
			"237",
			"00",
			"[26]\\d{8}|88\\d{6,7}",
			[8, 9],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["88"]
			], [
				"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4 $5",
				["[26]|88"]
			]]
		],
		CN: [
			"86",
			"00|1(?:[12]\\d|79)\\d\\d00",
			"(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}",
			[
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{2})(\\d{5,6})",
					"$1 $2",
					[
						"(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]",
						"(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1",
						"10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12",
						"10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123",
						"10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
						"(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
						"85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
						"85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["(?:4|80)0"]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"10|2(?:[02-57-9]|1[1-9])",
						"10|2(?:[02-57-9]|1[1-9])",
						"10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{7,8})",
					"$1 $2",
					["9"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["80"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[3-578]"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["1[3-9]"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3 $4",
					["[12]"],
					"0$1",
					1
				]
			],
			"0",
			0,
			"(1(?:[12]\\d|79)\\d\\d)|0",
			0,
			0,
			0,
			0,
			"00"
		],
		CO: [
			"57",
			"00(?:4(?:[14]4|56)|[579])",
			"(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}",
			[
				8,
				10,
				11
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["46"]
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					["6|90"],
					"($1)"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					["3[0-357]|9[14]"]
				],
				[
					"(\\d)(\\d{3})(\\d{7})",
					"$1-$2-$3",
					["1"],
					"0$1",
					0,
					"$1 $2 $3"
				]
			],
			"0",
			0,
			"0([3579]|4(?:[14]4|56))?"
		],
		CR: [
			"506",
			"00",
			"(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",
			[8, 10],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[2-7]|8[3-9]"]
			], [
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1-$2-$3",
				["[89]"]
			]],
			0,
			0,
			"(19(?:0[0-2468]|1[09]|20|66|77|99))"
		],
		CU: [
			"53",
			"119",
			"(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",
			[
				6,
				7,
				8,
				10
			],
			[
				[
					"(\\d{2})(\\d{4,6})",
					"$1 $2",
					["2[1-4]|[34]"],
					"(0$1)"
				],
				[
					"(\\d)(\\d{6,7})",
					"$1 $2",
					["7"],
					"(0$1)"
				],
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					["[56]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		CV: [
			"238",
			"0",
			"(?:[2-59]\\d\\d|800)\\d{4}",
			[7],
			[[
				"(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3",
				["[2-589]"]
			]]
		],
		CW: [
			"599",
			"00",
			"(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
			[7, 8],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[3467]"]
			], [
				"(\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["9[4-8]"]
			]],
			0,
			0,
			0,
			0,
			0,
			"[69]"
		],
		CX: [
			"61",
			"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
			"1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
			[
				6,
				7,
				8,
				9,
				10,
				12
			],
			0,
			"0",
			0,
			"([59]\\d{7})$|0",
			"8$1",
			0,
			0,
			[
				["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
				["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]],
				["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
				["190[0-26]\\d{6}", [10]],
				0,
				0,
				0,
				0,
				["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
				["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [
					6,
					8,
					10,
					12
				]]
			],
			"0011"
		],
		CY: [
			"357",
			"00",
			"(?:[279]\\d|[58]0)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{6})",
				"$1 $2",
				["[257-9]"]
			]]
		],
		CZ: [
			"420",
			"00",
			"(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",
			[
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[2-8]|9[015-7]"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})(\\d{2})",
					"$1 $2 $3 $4",
					["96"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["9"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["9"]
				]
			]
		],
		DE: [
			"49",
			"00",
			"[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15
			],
			[
				[
					"(\\d{2})(\\d{3,13})",
					"$1 $2",
					["3[02]|40|[68]9"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,12})",
					"$1 $2",
					["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{2,11})",
					"$1 $2",
					["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["138"],
					"0$1"
				],
				[
					"(\\d{5})(\\d{2,10})",
					"$1 $2",
					["3"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5,11})",
					"$1 $2",
					["181"],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{4,10})",
					"$1 $2 $3",
					["1(?:3|80)|9"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7,8})",
					"$1 $2",
					["1[67]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7,12})",
					"$1 $2",
					["8"],
					"0$1"
				],
				[
					"(\\d{5})(\\d{6})",
					"$1 $2",
					[
						"185",
						"1850",
						"18500"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["7"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{7})",
					"$1 $2",
					["18[68]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{7})",
					"$1 $2",
					["15[1279]"],
					"0$1"
				],
				[
					"(\\d{5})(\\d{6})",
					"$1 $2",
					["15[03568]", "15(?:[0568]|3[13])"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{8})",
					"$1 $2",
					["18"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{7,8})",
					"$1 $2 $3",
					["1(?:6[023]|7)"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{2})(\\d{7})",
					"$1 $2 $3",
					["15[279]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{8})",
					"$1 $2 $3",
					["15"],
					"0$1"
				]
			],
			"0"
		],
		DJ: [
			"253",
			"00",
			"(?:2\\d|77)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[27]"]
			]]
		],
		DK: [
			"45",
			"00",
			"[2-9]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[2-9]"]
			]]
		],
		DM: [
			"1",
			"011",
			"(?:[58]\\d\\d|767|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-7]\\d{6})$|1",
			"767$1",
			0,
			"767"
		],
		DO: [
			"1",
			"011",
			"(?:[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			0,
			0,
			0,
			"8001|8[024]9"
		],
		DZ: [
			"213",
			"00",
			"(?:[1-4]|[5-79]\\d|80)\\d{7}",
			[8, 9],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[1-4]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["9"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[5-8]"],
					"0$1"
				]
			],
			"0"
		],
		EC: [
			"593",
			"00",
			"1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",
			[
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2-$3",
					["[2-7]"],
					"(0$1)",
					0,
					"$1-$2-$3"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["9"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["1"]
				]
			],
			"0"
		],
		EE: [
			"372",
			"00",
			"8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",
			[
				7,
				8,
				10
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]
				],
				[
					"(\\d{4})(\\d{3,4})",
					"$1 $2",
					["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["7"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8"]
				]
			]
		],
		EG: [
			"20",
			"00",
			"[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{7,8})",
					"$1 $2",
					["[23]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{6,7})",
					"$1 $2",
					["1[35]|[4-6]|8[2468]|9[235-7]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{8})",
					"$1 $2",
					["1"],
					"0$1"
				]
			],
			"0"
		],
		EH: [
			"212",
			"00",
			"[5-8]\\d{8}",
			[9],
			0,
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["528[89]\\d{5}"],
				["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|5[0-5]))\\d{6}"],
				["80[0-7]\\d{6}"],
				["89\\d{7}"],
				0,
				0,
				0,
				0,
				["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]
			]
		],
		ER: [
			"291",
			"00",
			"[178]\\d{6}",
			[7],
			[[
				"(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[178]"],
				"0$1"
			]],
			"0"
		],
		ES: [
			"34",
			"00",
			"[5-9]\\d{8}",
			[9],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[89]00"]
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[5-9]"]
			]]
		],
		ET: [
			"251",
			"00",
			"(?:11|[2-57-9]\\d)\\d{7}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[1-57-9]"],
				"0$1"
			]],
			"0"
		],
		FI: [
			"358",
			"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
			"[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{5})",
					"$1",
					["20[2-59]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3,7})",
					"$1 $2",
					["(?:[1-3]0|[68])0|70[07-9]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4,8})",
					"$1 $2",
					["[14]|2[09]|50|7[135]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{6,10})",
					"$1 $2",
					["7"],
					"0$1"
				],
				[
					"(\\d)(\\d{4,9})",
					"$1 $2",
					["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			"1[03-79]|[2-9]",
			0,
			"00"
		],
		FJ: [
			"679",
			"0(?:0|52)",
			"45\\d{5}|(?:0800\\d|[235-9])\\d{6}",
			[7, 11],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[235-9]|45"]
			], [
				"(\\d{4})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["0"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		FK: [
			"500",
			"00",
			"[2-7]\\d{4}",
			[5]
		],
		FM: [
			"691",
			"00",
			"(?:[39]\\d\\d|820)\\d{4}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[389]"]
			]]
		],
		FO: [
			"298",
			"00",
			"[2-9]\\d{5}",
			[6],
			[[
				"(\\d{6})",
				"$1",
				["[2-9]"]
			]],
			0,
			0,
			"(10(?:01|[12]0|88))"
		],
		FR: [
			"33",
			"00",
			"[1-9]\\d{8}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"],
				"0 $1"
			], [
				"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4 $5",
				["[1-79]"],
				"0$1"
			]],
			"0"
		],
		GA: [
			"241",
			"00",
			"(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",
			[7, 8],
			[
				[
					"(\\d)(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[2-7]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["0"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["11|[67]"],
					"0$1"
				]
			],
			0,
			0,
			"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})",
			"$1"
		],
		GB: [
			"44",
			"00",
			"[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
			[
				7,
				9,
				10
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"800",
						"8001",
						"80011",
						"800111",
						"8001111"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"845",
						"8454",
						"84546",
						"845464"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					["800"],
					"0$1"
				],
				[
					"(\\d{5})(\\d{4,5})",
					"$1 $2",
					[
						"1(?:38|5[23]|69|76|94)",
						"1(?:(?:38|69)7|5(?:24|39)|768|946)",
						"1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5,6})",
					"$1 $2",
					["1(?:[2-69][02-9]|[78])"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{6})",
					"$1 $2",
					["7"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[1389]"],
					"0$1"
				]
			],
			"0",
			0,
			"0|180020",
			0,
			0,
			0,
			[
				["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
				["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
				["80[08]\\d{7}|800\\d{6}|8001111"],
				["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
				["70\\d{8}", [10]],
				0,
				["(?:3[0347]|55)\\d{8}", [10]],
				["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
				["56\\d{8}", [10]]
			],
			0,
			" x"
		],
		GD: [
			"1",
			"011",
			"(?:473|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"473$1",
			0,
			"473"
		],
		GE: [
			"995",
			"00",
			"(?:[3-57]\\d\\d|800)\\d{6}",
			[9],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["70"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["32"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[57]"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[348]"],
					"0$1"
				]
			],
			"0"
		],
		GF: [
			"594",
			"00",
			"(?:694\\d|7093)\\d{5}|(?:59|[89]\\d)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[5-7]|80[6-9]|9[47]"],
				"0$1"
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[89]"],
				"0$1"
			]],
			"0"
		],
		GG: [
			"44",
			"00",
			"(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
			[
				7,
				9,
				10
			],
			0,
			"0",
			0,
			"([25-9]\\d{5})$|0|180020",
			"1481$1",
			0,
			0,
			[
				["1481[25-9]\\d{5}", [10]],
				["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
				["80[08]\\d{7}|800\\d{6}|8001111"],
				["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
				["70\\d{8}", [10]],
				0,
				["(?:3[0347]|55)\\d{8}", [10]],
				["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
				["56\\d{8}", [10]]
			]
		],
		GH: [
			"233",
			"00",
			"[235]\\d{8}|800\\d{5,6}",
			[8, 9],
			[[
				"(\\d{3})(\\d{5})",
				"$1 $2",
				["8"],
				"0$1"
			], [
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[2358]"],
				"0$1"
			]],
			"0"
		],
		GI: [
			"350",
			"00",
			"(?:[25]\\d|60)\\d{6}",
			[8],
			[[
				"(\\d{3})(\\d{5})",
				"$1 $2",
				["2"]
			]]
		],
		GL: [
			"299",
			"00",
			"(?:19|[2-689]\\d|70)\\d{4}",
			[6],
			[[
				"(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3",
				["19|[2-9]"]
			]]
		],
		GM: [
			"220",
			"00",
			"[2-9]\\d{6}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[2-9]"]
			]]
		],
		GN: [
			"224",
			"00",
			"722\\d{6}|(?:3|6\\d)\\d{7}",
			[8, 9],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["3"]
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[67]"]
			]]
		],
		GP: [
			"590",
			"00",
			"7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[5-79]|80[6-9]"],
				"0$1"
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"],
				"0$1"
			]],
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["(?:59(?:0(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)|87\\d)|80[6-9]\\d\\d)\\d{4}"],
				["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],
				["80[0-5]\\d{6}"],
				["8[129]\\d{7}"],
				0,
				0,
				0,
				0,
				["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
			]
		],
		GQ: [
			"240",
			"00",
			"222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[235]"]
			], [
				"(\\d{3})(\\d{6})",
				"$1 $2",
				["[89]"]
			]]
		],
		GR: [
			"30",
			"00",
			"5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",
			[
				10,
				11,
				12
			],
			[
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["21|7"]
				],
				[
					"(\\d{4})(\\d{6})",
					"$1 $2",
					["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[2689]"]
				],
				[
					"(\\d{3})(\\d{3,4})(\\d{5})",
					"$1 $2 $3",
					["8"]
				]
			]
		],
		GT: [
			"502",
			"00",
			"80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",
			[8, 11],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[2-8]"]
			], [
				"(\\d{4})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["1"]
			]]
		],
		GU: [
			"1",
			"011",
			"(?:[58]\\d\\d|671|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"671$1",
			0,
			"671"
		],
		GW: [
			"245",
			"00",
			"[49]\\d{8}|4\\d{6}",
			[7, 9],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["40"]
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[49]"]
			]]
		],
		GY: [
			"592",
			"001",
			"(?:[2-8]\\d{3}|9008)\\d{3}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[2-9]"]
			]]
		],
		HK: [
			"852",
			"00(?:30|5[09]|[126-9]?)",
			"8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",
			[
				5,
				6,
				7,
				8,
				9,
				11
			],
			[
				[
					"(\\d{3})(\\d{2,5})",
					"$1 $2",
					["900", "9003"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["9"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		HN: [
			"504",
			"00",
			"8\\d{10}|[237-9]\\d{7}",
			[8, 11],
			[[
				"(\\d{4})(\\d{4})",
				"$1-$2",
				["[237-9]"]
			]]
		],
		HR: [
			"385",
			"00",
			"[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}",
			[
				7,
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["6[01]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					["8"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{3})",
					"$1 $2 $3",
					["1"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["6|7[245]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["9"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[2-57]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		HT: [
			"509",
			"00",
			"[2-589]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{4})",
				"$1 $2 $3",
				["[2-589]"]
			]]
		],
		HU: [
			"36",
			"00",
			"[235-7]\\d{8}|[1-9]\\d{7}",
			[8, 9],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"(06 $1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],
					"(06 $1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[2-9]"],
					"06 $1"
				]
			],
			"06"
		],
		ID: [
			"62",
			"00[89]",
			"00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}",
			[
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["15"]
				],
				[
					"(\\d{2})(\\d{5,9})",
					"$1 $2",
					["2[124]|[36]1"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{5,7})",
					"$1 $2",
					["800"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5,8})",
					"$1 $2",
					["[2-79]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3,4})(\\d{3})",
					"$1-$2-$3",
					["8[1-35-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6,8})",
					"$1 $2",
					["1"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["804"],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["80"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})(\\d{4,5})",
					"$1-$2-$3",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		IE: [
			"353",
			"00",
			"(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
			[
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["2[24-9]|47|58|6[237-9]|9[35-9]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["[45]0"],
					"(0$1)"
				],
				[
					"(\\d)(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[2569]|4[1-69]|7[14]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["70"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["81"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[78]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["1"]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["4"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3 $4",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		IL: [
			"972",
			"0(?:0|1[2-9])",
			"1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",
			[
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{4})(\\d{3})",
					"$1-$2",
					["125"]
				],
				[
					"(\\d{4})(\\d{2})(\\d{2})",
					"$1-$2-$3",
					["121"]
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["[2-489]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["[57]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1-$2-$3",
					["12"]
				],
				[
					"(\\d{4})(\\d{6})",
					"$1-$2",
					["159"]
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{3})",
					"$1-$2-$3-$4",
					["1[7-9]"]
				],
				[
					"(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})",
					"$1-$2 $3-$4",
					["15"]
				]
			],
			"0"
		],
		IM: [
			"44",
			"00",
			"1624\\d{6}|(?:[3578]\\d|90)\\d{8}",
			[10],
			0,
			"0",
			0,
			"([25-8]\\d{5})$|0|180020",
			"1624$1",
			0,
			"74576|(?:16|7[56])24"
		],
		IN: [
			"91",
			"00",
			"(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",
			[
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d{8})",
					"$1",
					[
						"5(?:0|2[23]|3[03]|[67]1|88)",
						"5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)",
						"5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"
					],
					0,
					1
				],
				[
					"(\\d{4})(\\d{4,5})",
					"$1 $2",
					["180", "1800"],
					0,
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["140"],
					0,
					1
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"11|2[02]|33|4[04]|79[1-7]|80[2-46]",
						"11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])",
						"11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"
					],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67)[14]",
						"1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31)|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
						"1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:3171|5[15][2-6]|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|8(?:16|2[014]|3[126]|6[136]|7[78]|83)(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"
					],
					"0$1",
					1
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|3[129]|5[29]|6[02-5]|70)|807",
						"1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7(?:[23569]|8[0-57-9])|8[1-6])|7(?:1(?:[013-8]|9[6-9])|3(?:17|2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
						"1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578])\\d|7(?:[23569]\\d|8[0-57-9])|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|3(?:2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"
					],
					"0$1",
					1
				],
				[
					"(\\d{5})(\\d{5})",
					"$1 $2",
					["16|[6-9]"],
					"0$1",
					1
				],
				[
					"(\\d{4})(\\d{2,4})(\\d{4})",
					"$1 $2 $3",
					["18[06]", "18[06]0"],
					0,
					1
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["18"],
					0,
					1
				]
			],
			"0"
		],
		IO: [
			"246",
			"00",
			"3\\d{6}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["3"]
			]]
		],
		IQ: [
			"964",
			"00",
			"(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[2-6]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["7"],
					"0$1"
				]
			],
			"0"
		],
		IR: [
			"98",
			"00",
			"[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",
			[
				4,
				5,
				6,
				7,
				10
			],
			[
				[
					"(\\d{4,5})",
					"$1",
					["96"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4,5})",
					"$1 $2",
					["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["9"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[1-8]"],
					"0$1"
				]
			],
			"0"
		],
		IS: [
			"354",
			"00|1(?:0(?:01|[12]0)|100)",
			"(?:38\\d|[4-9])\\d{6}",
			[7, 9],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[4-9]"]
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["3"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		IT: [
			"39",
			"00",
			"0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",
			[
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{2})(\\d{4,6})",
					"$1 $2",
					["0[26]"]
				],
				[
					"(\\d{3})(\\d{3,6})",
					"$1 $2",
					["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]
				],
				[
					"(\\d{4})(\\d{2,6})",
					"$1 $2",
					["0(?:[13-579][2-46-8]|8[236-8])"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["894"]
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["0[26]|5"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["1(?:44|[679])|[378]|43"]
				],
				[
					"(\\d{3})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["0[13-57-9][0159]|14"]
				],
				[
					"(\\d{2})(\\d{4})(\\d{5})",
					"$1 $2 $3",
					["0[26]"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["0"]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4,5})",
					"$1 $2 $3",
					["[03]"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],
				["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]],
				["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
				["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [
					6,
					8,
					9,
					10
				]],
				["1(?:78\\d|99)\\d{6}", [9, 10]],
				["3[2-8]\\d{9,10}", [11, 12]],
				0,
				0,
				["55\\d{8}", [10]],
				["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
			]
		],
		JE: [
			"44",
			"00",
			"1534\\d{6}|(?:[3578]\\d|90)\\d{8}",
			[10],
			0,
			"0",
			0,
			"([0-24-8]\\d{5})$|0|180020",
			"1534$1",
			0,
			0,
			[
				["1534[0-24-8]\\d{5}"],
				["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],
				["80(?:07(?:35|81)|8901)\\d{4}"],
				["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
				["701511\\d{4}"],
				0,
				["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
				["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
				["56\\d{8}"]
			]
		],
		JM: [
			"1",
			"011",
			"(?:[58]\\d\\d|658|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			0,
			0,
			0,
			"658|876"
		],
		JO: [
			"962",
			"00",
			"(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}",
			[8, 9],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[2356]|87"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{5,6})",
					"$1 $2",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					["70"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[47]"],
					"0$1"
				]
			],
			"0"
		],
		JP: [
			"81",
			"010",
			"00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",
			[
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1-$2-$3",
					["(?:12|57|99)0"],
					"0$1"
				],
				[
					"(\\d{4})(\\d)(\\d{4})",
					"$1-$2-$3",
					[
						"1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])",
						"1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
						"1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["60"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1-$2-$3",
					["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
						"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
						"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1-$2-$3",
					["[14]|[289][2-9]|5[3-9]|7[2-4679]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["800"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1-$2-$3",
					["[25-9]"],
					"0$1"
				]
			],
			"0",
			0,
			"(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0",
			"$1"
		],
		KE: [
			"254",
			"000",
			"(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
			[
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{5,7})",
					"$1 $2",
					["[24-6]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					["[17]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				]
			],
			"0"
		],
		KG: [
			"996",
			"00",
			"8\\d{9}|[235-9]\\d{8}",
			[9, 10],
			[
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					["3(?:1[346]|[24-79])"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[235-79]|88"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d)(\\d{2,3})",
					"$1 $2 $3 $4",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		KH: [
			"855",
			"00[14-9]",
			"1\\d{9}|[1-9]\\d{7,8}",
			[
				8,
				9,
				10
			],
			[[
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				["[1-9]"],
				"0$1"
			], [
				"(\\d{4})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["1"]
			]],
			"0"
		],
		KI: [
			"686",
			"00",
			"(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",
			[5, 8],
			0,
			"0"
		],
		KM: [
			"269",
			"00",
			"[3478]\\d{6}",
			[7],
			[[
				"(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3",
				["[3478]"]
			]]
		],
		KN: [
			"1",
			"011",
			"(?:[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-7]\\d{6})$|1",
			"869$1",
			0,
			"869"
		],
		KP: [
			"850",
			"00|99",
			"85\\d{6}|(?:19\\d|[2-7])\\d{7}",
			[8, 10],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[2-7]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"0$1"
				]
			],
			"0"
		],
		KR: [
			"82",
			"00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
			"00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",
			[
				5,
				6,
				8,
				9,
				10,
				11,
				12,
				13,
				14
			],
			[
				[
					"(\\d{2})(\\d{3,4})",
					"$1-$2",
					["(?:3[1-3]|[46][1-4]|5[1-5])1"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					["1"]
				],
				[
					"(\\d)(\\d{3,4})(\\d{4})",
					"$1-$2-$3",
					["2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					["[36]0|8"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1-$2-$3",
					["[1346]|5[1-5]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1-$2-$3",
					["[57]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{5})(\\d{4})",
					"$1-$2-$3",
					["5"],
					"0$1"
				]
			],
			"0",
			0,
			"0(8(?:[1-46-8]|5\\d\\d))?"
		],
		KW: [
			"965",
			"00",
			"18\\d{5}|(?:[2569]\\d|41)\\d{6}",
			[7, 8],
			[[
				"(\\d{4})(\\d{3,4})",
				"$1 $2",
				["[169]|2(?:[235]|4[1-35-9])|52"]
			], [
				"(\\d{3})(\\d{5})",
				"$1 $2",
				["[245]"]
			]]
		],
		KY: [
			"1",
			"011",
			"(?:345|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"345$1",
			0,
			"345"
		],
		KZ: [
			"7",
			"810",
			"8\\d{13}|[78]\\d{9}",
			[10, 14],
			0,
			"8",
			0,
			0,
			0,
			0,
			"7",
			0,
			"8~10"
		],
		LA: [
			"856",
			"00",
			"[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["2[13]|3[14]|[4-8]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					["3"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["[23]"],
					"0$1"
				]
			],
			"0"
		],
		LB: [
			"961",
			"00",
			"[27-9]\\d{7}|[13-9]\\d{6}",
			[7, 8],
			[[
				"(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"],
				"0$1"
			], [
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[27-9]"]
			]],
			"0"
		],
		LC: [
			"1",
			"011",
			"(?:[58]\\d\\d|758|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-8]\\d{6})$|1",
			"758$1",
			0,
			"758"
		],
		LI: [
			"423",
			"00",
			"[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",
			[7, 9],
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["8"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["69"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["6"]
				]
			],
			"0",
			0,
			"(1001)|0"
		],
		LK: [
			"94",
			"00",
			"[1-9]\\d{8}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["7"],
				"0$1"
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[1-689]"],
				"0$1"
			]],
			"0"
		],
		LR: [
			"231",
			"00",
			"(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",
			[
				7,
				8,
				9
			],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["4[67]|[56]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[2-578]"],
					"0$1"
				]
			],
			"0"
		],
		LS: [
			"266",
			"00",
			"(?:[256]\\d\\d|800)\\d{5}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[2568]"]
			]]
		],
		LT: [
			"370",
			"00",
			"(?:[3469]\\d|52|[78]0)\\d{6}",
			[8],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["52[0-7]"],
					"(0-$1)",
					1
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["[7-9]"],
					"0 $1",
					1
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["37|4(?:[15]|6[1-8])"],
					"(0-$1)",
					1
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["[3-6]"],
					"(0-$1)",
					1
				]
			],
			"0",
			0,
			"[08]"
		],
		LU: [
			"352",
			"00",
			"35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{2})(\\d{3})",
					"$1 $2",
					["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["20[2-689]"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
					"$1 $2 $3 $4",
					["20"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
					"$1 $2 $3 $4",
					["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["80[01]|90[015]"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					["20"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["6"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
					"$1 $2 $3 $4 $5",
					["20"]
				]
			],
			0,
			0,
			"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
		],
		LV: [
			"371",
			"00",
			"(?:[268]\\d|78|90)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[2679]|8[01]"]
			]]
		],
		LY: [
			"218",
			"00",
			"[2-9]\\d{8}",
			[9],
			[[
				"(\\d{2})(\\d{7})",
				"$1-$2",
				["[2-9]"],
				"0$1"
			]],
			"0"
		],
		MA: [
			"212",
			"00",
			"[5-8]\\d{8}",
			[9],
			[
				[
					"(\\d{4})(\\d{5})",
					"$1-$2",
					["892"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1-$2",
					["8(?:0[0-7]|9)"],
					"0$1"
				],
				[
					"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					["[5-8]"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			"[5-8]"
		],
		MC: [
			"377",
			"00",
			"(?:[3489]|[67]\\d)\\d{7}",
			[8, 9],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["4"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[389]"]
				],
				[
					"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					["[67]"],
					"0$1"
				]
			],
			"0"
		],
		MD: [
			"373",
			"00",
			"(?:[235-7]\\d|[89]0)\\d{6}",
			[8],
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["22|3"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["[25-7]"],
					"0$1"
				]
			],
			"0"
		],
		ME: [
			"382",
			"00",
			"(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",
			[8, 9],
			[[
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				["[2-9]"],
				"0$1"
			]],
			"0"
		],
		MF: [
			"590",
			"00",
			"7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",
			[9],
			0,
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["(?:59(?:0(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"],
				["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],
				["80[0-5]\\d{6}"],
				["8[129]\\d{7}"],
				0,
				0,
				0,
				0,
				["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]
			]
		],
		MG: [
			"261",
			"00",
			"[23]\\d{8}",
			[9],
			[[
				"(\\d{2})(\\d{2})(\\d{3})(\\d{2})",
				"$1 $2 $3 $4",
				["[23]"],
				"0$1"
			]],
			"0",
			0,
			"([24-9]\\d{6})$|0",
			"20$1"
		],
		MH: [
			"692",
			"011",
			"329\\d{4}|(?:[256]\\d|45)\\d{5}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1-$2",
				["[2-6]"]
			]],
			"1"
		],
		MK: [
			"389",
			"00",
			"[2-578]\\d{7}",
			[8],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["2|34[47]|4(?:[37]7|5[47]|64)"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[347]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[58]"],
					"0$1"
				]
			],
			"0"
		],
		ML: [
			"223",
			"00",
			"[24-9]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[24-9]"]
			]]
		],
		MM: [
			"95",
			"00",
			"1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",
			[
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["16|2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[12]|452|678|86", "[12]|452|6788|86"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[4-7]|8[1-35]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4,6})",
					"$1 $2 $3",
					["9(?:2[0-4]|[35-9]|4[137-9])"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["92"],
					"0$1"
				],
				[
					"(\\d)(\\d{5})(\\d{4})",
					"$1 $2 $3",
					["9"],
					"0$1"
				]
			],
			"0"
		],
		MN: [
			"976",
			"001",
			"[12]\\d{7,9}|[5-9]\\d{7}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["11|2[16]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[5-9]"]
				],
				[
					"(\\d{3})(\\d{5,6})",
					"$1 $2",
					["[12]2[1-3]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5,6})",
					"$1 $2",
					["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],
					"0$1"
				],
				[
					"(\\d{5})(\\d{4,5})",
					"$1 $2",
					["[12]"],
					"0$1"
				]
			],
			"0"
		],
		MO: [
			"853",
			"00",
			"0800\\d{3}|(?:28|[68]\\d)\\d{6}",
			[7, 8],
			[[
				"(\\d{4})(\\d{3})",
				"$1 $2",
				["0"]
			], [
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[268]"]
			]]
		],
		MP: [
			"1",
			"011",
			"[58]\\d{9}|(?:67|90)0\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"670$1",
			0,
			"670"
		],
		MQ: [
			"596",
			"00",
			"7091\\d{5}|(?:[56]9|[89]\\d)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[5-79]|8(?:0[6-9]|[36])"],
				"0$1"
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"],
				"0$1"
			]],
			"0"
		],
		MR: [
			"222",
			"00",
			"(?:[2-4]\\d\\d|800)\\d{5}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[2-48]"]
			]]
		],
		MS: [
			"1",
			"011",
			"(?:[58]\\d\\d|664|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([34]\\d{6})$|1",
			"664$1",
			0,
			"664"
		],
		MT: [
			"356",
			"00",
			"3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[2357-9]"]
			]]
		],
		MU: [
			"230",
			"0(?:0|[24-7]0|3[03])",
			"(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",
			[
				7,
				8,
				10
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[2-46]|8[013]"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[57]"]
				],
				[
					"(\\d{5})(\\d{5})",
					"$1 $2",
					["8"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"020"
		],
		MV: [
			"960",
			"0(?:0|19)",
			"(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
			[7, 10],
			[[
				"(\\d{3})(\\d{4})",
				"$1-$2",
				["[34679]"]
			], [
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[89]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		MW: [
			"265",
			"00",
			"(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",
			[7, 9],
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["1[2-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[137-9]"],
					"0$1"
				]
			],
			"0"
		],
		MX: [
			"52",
			"0[09]",
			"[2-9]\\d{9}",
			[10],
			[[
				"(\\d{2})(\\d{4})(\\d{4})",
				"$1 $2 $3",
				["33|5[56]|81"]
			], [
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[2-9]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		MY: [
			"60",
			"00",
			"1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1-$2 $3",
					["[4-79]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1-$2 $3",
					["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],
					"0$1"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1-$2 $3",
					["3"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2})(\\d{4})",
					"$1-$2-$3-$4",
					["1(?:[367]|80)"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2 $3",
					["15"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1-$2 $3",
					["1"],
					"0$1"
				]
			],
			"0"
		],
		MZ: [
			"258",
			"00",
			"(?:2|8\\d)\\d{7}",
			[8, 9],
			[[
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				["2|8[2-79]"]
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["8"]
			]]
		],
		NA: [
			"264",
			"00",
			"[68]\\d{7,8}",
			[8, 9],
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["88"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["6"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["87"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		NC: [
			"687",
			"00",
			"(?:050|[2-57-9]\\d\\d)\\d{3}",
			[6],
			[[
				"(\\d{2})(\\d{2})(\\d{2})",
				"$1.$2.$3",
				["[02-57-9]"]
			]]
		],
		NE: [
			"227",
			"00",
			"[027-9]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["08"]
			], [
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[089]|2[013]|7[0467]"]
			]]
		],
		NF: [
			"672",
			"00",
			"[13]\\d{5}",
			[6],
			[[
				"(\\d{2})(\\d{4})",
				"$1 $2",
				["1[0-3]"]
			], [
				"(\\d)(\\d{5})",
				"$1 $2",
				["[13]"]
			]],
			0,
			0,
			"([0-258]\\d{4})$",
			"3$1"
		],
		NG: [
			"234",
			"009",
			"(?:20|9\\d)\\d{8}|[78]\\d{9,13}",
			[
				10,
				11,
				12,
				13,
				14
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[7-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["20[129]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})(\\d{4,5})",
					"$1 $2 $3",
					["[78]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})(\\d{5,6})",
					"$1 $2 $3",
					["[78]"],
					"0$1"
				]
			],
			"0"
		],
		NI: [
			"505",
			"00",
			"(?:1800|[25-8]\\d{3})\\d{4}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[125-8]"]
			]]
		],
		NL: [
			"31",
			"00",
			"(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",
			[
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{3})(\\d{4,7})",
					"$1 $2",
					["[89]0"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					["66"],
					"0$1"
				],
				[
					"(\\d)(\\d{8})",
					"$1 $2",
					["6"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[1-578]|91"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{5})",
					"$1 $2 $3",
					["9"],
					"0$1"
				]
			],
			"0"
		],
		NO: [
			"47",
			"00",
			"(?:0|[2-9]\\d{3})\\d{4}",
			[5, 8],
			[[
				"(\\d{3})(\\d{2})(\\d{3})",
				"$1 $2 $3",
				["8"]
			], [
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[2-79]"]
			]],
			0,
			0,
			0,
			0,
			0,
			"[02-689]|7[0-8]"
		],
		NP: [
			"977",
			"00",
			"(?:1\\d|9)\\d{9}|[1-9]\\d{7}",
			[
				8,
				10,
				11
			],
			[
				[
					"(\\d)(\\d{7})",
					"$1-$2",
					["1[2-6]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1-$2",
					["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1-$2",
					["9"]
				]
			],
			"0"
		],
		NR: [
			"674",
			"00",
			"(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[24-9]"]
			]]
		],
		NU: [
			"683",
			"00",
			"(?:[4-7]|888\\d)\\d{3}",
			[4, 7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["8"]
			]]
		],
		NZ: [
			"64",
			"0(?:0|161)",
			"[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",
			[
				5,
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{3,8})",
					"$1 $2",
					["8[1-79]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					["50[036-8]|8|90", "50(?:[0367]|88)|8|90"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["24|[346]|7[2-57-9]|9[2-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["2(?:10|74)|[589]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["1|2[028]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,5})",
					"$1 $2 $3",
					["2(?:[169]|7[0-35-9])|7"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		OM: [
			"968",
			"00",
			"(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",
			[
				7,
				8,
				9
			],
			[
				[
					"(\\d{3})(\\d{4,6})",
					"$1 $2",
					["[58]"]
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["2"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[179]"]
				]
			]
		],
		PA: [
			"507",
			"00",
			"(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",
			[
				7,
				8,
				10,
				11
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					["[1-57-9]"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					["[68]"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"]
				]
			]
		],
		PE: [
			"51",
			"00|19(?:1[124]|77|90)00",
			"(?:[14-8]|9\\d)\\d{7}",
			[8, 9],
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["80"],
					"(0$1)"
				],
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					["1"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["[4-8]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["9"]
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"00",
			" Anexo "
		],
		PF: [
			"689",
			"00",
			"4\\d{5}(?:\\d{2})?|8\\d{7,8}",
			[
				6,
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					["44"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["4|8[7-9]"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["8"]
				]
			]
		],
		PG: [
			"675",
			"00|140[1-3]",
			"(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
			[7, 8],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["18|[2-69]|85"]
			], [
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[78]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		PH: [
			"63",
			"00",
			"(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",
			[
				6,
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d)(\\d{5})",
					"$1 $2",
					["2"],
					"(0$1)"
				],
				[
					"(\\d{4})(\\d{4,6})",
					"$1 $2",
					["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],
					"(0$1)"
				],
				[
					"(\\d{5})(\\d{4})",
					"$1 $2",
					["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"],
					"(0$1)"
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["2"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[3-7]|8[2-8]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"]
				],
				[
					"(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})",
					"$1 $2 $3 $4",
					["1"]
				]
			],
			"0"
		],
		PK: [
			"92",
			"00",
			"122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
			[
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{2,7})",
					"$1 $2 $3",
					["[89]0"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					["1"]
				],
				[
					"(\\d{3})(\\d{6,7})",
					"$1 $2",
					["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{7,8})",
					"$1 $2",
					["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],
					"(0$1)"
				],
				[
					"(\\d{5})(\\d{5})",
					"$1 $2",
					["58"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					["3"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["[24-9]"],
					"(0$1)"
				]
			],
			"0"
		],
		PL: [
			"48",
			"00",
			"(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",
			[
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{5})",
					"$1",
					["19"]
				],
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					["11|20|64"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					["64"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["1[2-8]|[2-7]|8[1-79]|9[145]"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["8"]
				]
			]
		],
		PM: [
			"508",
			"00",
			"[78]\\d{8}|[2-9]\\d{5}",
			[6, 9],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					["[2-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["7"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		PR: [
			"1",
			"011",
			"(?:[589]\\d\\d|787)\\d{7}",
			[10],
			0,
			"1",
			0,
			0,
			0,
			0,
			"787|939"
		],
		PS: [
			"970",
			"00",
			"[2489]2\\d{6}|(?:1\\d|5)\\d{8}",
			[
				8,
				9,
				10
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[2489]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["5"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["1"]
				]
			],
			"0"
		],
		PT: [
			"351",
			"00",
			"1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["2[12]"]
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["16|[236-9]"]
			]]
		],
		PW: [
			"680",
			"01[12]",
			"(?:[24-8]\\d\\d|345|900)\\d{4}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[2-9]"]
			]]
		],
		PY: [
			"595",
			"00",
			"[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}",
			[
				6,
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{3})(\\d{3,6})",
					"$1 $2",
					["[2-9]0"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["3[289]|4[246-8]|61|7[1-3]|8[1-36]"],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{4,5})",
					"$1 $2",
					["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["87"]
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					["9(?:[5-79]|8[1-7])"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[2-8]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["9"]
				]
			],
			"0"
		],
		QA: [
			"974",
			"00",
			"800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",
			[
				7,
				8,
				9,
				11
			],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["2[136]|8"]
			], [
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[3-7]"]
			]]
		],
		RE: [
			"262",
			"00",
			"709\\d{6}|(?:26|[689]\\d)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[26-9]"],
				"0$1"
			]],
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["2631[0-6]\\d{4}|26(?:2\\d|30|88)\\d{5}"],
				["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"],
				["80\\d{7}"],
				["89[1-37-9]\\d{6}"],
				0,
				0,
				0,
				0,
				["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],
				["8(?:1[019]|2[0156]|84|90)\\d{6}"]
			]
		],
		RO: [
			"40",
			"00",
			"(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",
			[6, 9],
			[
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					["2[3-6]", "2[3-6]\\d9"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					["219|31"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[23]1"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[236-9]"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			" int "
		],
		RS: [
			"381",
			"00",
			"38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",
			[
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			[[
				"(\\d{3})(\\d{3,9})",
				"$1 $2",
				["(?:2[389]|39)0|[7-9]"],
				"0$1"
			], [
				"(\\d{2})(\\d{5,10})",
				"$1 $2",
				["[1-36]"],
				"0$1"
			]],
			"0"
		],
		RU: [
			"7",
			"810",
			"8\\d{13}|[347-9]\\d{9}",
			[10, 14],
			[
				[
					"(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"7(?:1[0-8]|2[1-9])",
						"7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))",
						"7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"
					],
					"8 ($1)",
					1
				],
				[
					"(\\d{5})(\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"7(?:1[0-68]|2[1-9])",
						"7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))",
						"7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"
					],
					"8 ($1)",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["7"],
					"8 ($1)",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					["[349]|8(?:[02-7]|1[1-8])"],
					"8 ($1)",
					1
				],
				[
					"(\\d{4})(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["8"],
					"8 ($1)"
				]
			],
			"8",
			0,
			0,
			0,
			0,
			"[3489]",
			0,
			"8~10"
		],
		RW: [
			"250",
			"00",
			"(?:06|[27]\\d\\d|[89]00)\\d{6}",
			[8, 9],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["0"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["2"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[7-9]"],
					"0$1"
				]
			],
			"0"
		],
		SA: [
			"966",
			"00",
			"(?:[15]\\d|800|92)\\d{7}",
			[9, 10],
			[
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					["9"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["5"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"]
				]
			],
			"0"
		],
		SB: [
			"677",
			"0[01]",
			"[6-9]\\d{6}|[1-6]\\d{4}",
			[5, 7],
			[[
				"(\\d{2})(\\d{5})",
				"$1 $2",
				["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]
			]]
		],
		SC: [
			"248",
			"010|0[0-2]",
			"(?:[2489]\\d|64)\\d{5}",
			[7],
			[[
				"(\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[246]|9[57]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		SD: [
			"249",
			"00",
			"[19]\\d{8}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				["[19]"],
				"0$1"
			]],
			"0"
		],
		SE: [
			"46",
			"00",
			"(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
			[
				6,
				7,
				8,
				9,
				10,
				12
			],
			[
				[
					"(\\d{2})(\\d{2,3})(\\d{2})",
					"$1-$2 $3",
					["20"],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					["9(?:00|39|44|9)"],
					"0$1",
					0,
					"$1 $2"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})",
					"$1-$2 $3",
					["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					["8"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2,3})(\\d{2})",
					"$1-$2 $3",
					["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d{3})(\\d{2,3})(\\d{3})",
					"$1-$2 $3",
					["9(?:00|39|44)"],
					"0$1",
					0,
					"$1 $2 $3"
				],
				[
					"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					["10|7"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{2})",
					"$1-$2 $3 $4",
					["8"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
					"$1-$2 $3 $4",
					["9"],
					"0$1",
					0,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4 $5",
					["[26]"],
					"0$1",
					0,
					"$1 $2 $3 $4 $5"
				]
			],
			"0"
		],
		SG: [
			"65",
			"0[0-3]\\d",
			"(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",
			[
				8,
				10,
				11
			],
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[369]|8(?:0[1-9]|[1-9])"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"]
				],
				[
					"(\\d{4})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					["7"]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["1"]
				]
			]
		],
		SH: [
			"290",
			"00",
			"(?:[256]\\d|8)\\d{3}",
			[4, 5],
			0,
			0,
			0,
			0,
			0,
			0,
			"[256]"
		],
		SI: [
			"386",
			"00|10(?:22|66|88|99)",
			"[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",
			[
				5,
				6,
				7,
				8
			],
			[
				[
					"(\\d{2})(\\d{3,6})",
					"$1 $2",
					["8[09]|9"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["59|8"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[37][01]|4[0139]|51|6"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[1-57]"],
					"(0$1)"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		SJ: [
			"47",
			"00",
			"0\\d{4}|(?:[489]\\d|79)\\d{6}",
			[5, 8],
			0,
			0,
			0,
			0,
			0,
			0,
			"79"
		],
		SK: [
			"421",
			"00",
			"[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
			[
				6,
				7,
				9
			],
			[
				[
					"(\\d)(\\d{2})(\\d{3,4})",
					"$1 $2 $3",
					["21"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					["[3-5][1-8]1", "[3-5][1-8]1[67]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{3})(\\d{2})",
					"$1 $2 $3 $4",
					["2"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[689]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[3-5]"],
					"0$1"
				]
			],
			"0"
		],
		SL: [
			"232",
			"00",
			"(?:[237-9]\\d|66)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{6})",
				"$1 $2",
				["[236-9]"],
				"(0$1)"
			]],
			"0"
		],
		SM: [
			"378",
			"00",
			"(?:0549|[5-7]\\d)\\d{6}",
			[8, 10],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[5-7]"]
			], [
				"(\\d{4})(\\d{6})",
				"$1 $2",
				["0"]
			]],
			0,
			0,
			"([89]\\d{5})$",
			"0549$1"
		],
		SN: [
			"221",
			"00",
			"(?:[378]\\d|93)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"]
			], [
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[379]"]
			]]
		],
		SO: [
			"252",
			"00",
			"[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",
			[
				6,
				7,
				8,
				9
			],
			[
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					["8[125]"]
				],
				[
					"(\\d{6})",
					"$1",
					["[134]"]
				],
				[
					"(\\d)(\\d{6})",
					"$1 $2",
					["[15]|2[0-79]|3[0-46-8]|4[0-7]"]
				],
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					["(?:2|90)4|[67]"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[348]|64|79|90"]
				],
				[
					"(\\d{2})(\\d{5,7})",
					"$1 $2",
					["1|28|6[0-35-9]|7[67]|9[2-9]"]
				]
			],
			"0"
		],
		SR: [
			"597",
			"00",
			"(?:[2-5]|[6-9]\\d)\\d{5}",
			[6, 7],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1-$2-$3",
					["56"]
				],
				[
					"(\\d{3})(\\d{3})",
					"$1-$2",
					["[2-5]"]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					["[6-9]"]
				]
			]
		],
		SS: [
			"211",
			"00",
			"[19]\\d{8}",
			[9],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[19]"],
				"0$1"
			]],
			"0"
		],
		ST: [
			"239",
			"00",
			"(?:22|9\\d)\\d{5}",
			[7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[29]"]
			]]
		],
		SV: [
			"503",
			"00",
			"[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",
			[
				7,
				8,
				11
			],
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[89]"]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[25-7]"]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["[89]"]
				]
			]
		],
		SX: [
			"1",
			"011",
			"7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"(5\\d{6})$|1",
			"721$1",
			0,
			"721"
		],
		SY: [
			"963",
			"00",
			"[1-359]\\d{8}|[1-5]\\d{7}",
			[8, 9],
			[[
				"(\\d{2})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				["[1-4]|5[1-3]"],
				"0$1",
				1
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[59]"],
				"0$1",
				1
			]],
			"0"
		],
		SZ: [
			"268",
			"00",
			"0800\\d{4}|(?:[237]\\d|900)\\d{6}",
			[8, 9],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[0237]"]
			], [
				"(\\d{5})(\\d{4})",
				"$1 $2",
				["9"]
			]]
		],
		TA: [
			"290",
			"00",
			"8\\d{3}",
			[4],
			0,
			0,
			0,
			0,
			0,
			0,
			"8"
		],
		TC: [
			"1",
			"011",
			"(?:[58]\\d\\d|649|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-479]\\d{6})$|1",
			"649$1",
			0,
			"649"
		],
		TD: [
			"235",
			"00|16",
			"(?:22|[3689]\\d|77)\\d{6}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[236-9]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"00"
		],
		TG: [
			"228",
			"00",
			"[279]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[279]"]
			]]
		],
		TH: [
			"66",
			"00[1-9]",
			"(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",
			[
				8,
				9,
				10,
				13
			],
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["2"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[13-9]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["1"]
				]
			],
			"0"
		],
		TJ: [
			"992",
			"810",
			"(?:[0-57-9]\\d|66)\\d{7}",
			[9],
			[
				[
					"(\\d{6})(\\d)(\\d{2})",
					"$1 $2 $3",
					["331", "3317"]
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["44[02-479]|[34]7"]
				],
				[
					"(\\d{4})(\\d)(\\d{4})",
					"$1 $2 $3",
					["3(?:[1245]|3[12])"]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["\\d"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"8~10"
		],
		TK: [
			"690",
			"00",
			"[2-47]\\d{3,6}",
			[
				4,
				5,
				6,
				7
			]
		],
		TL: [
			"670",
			"00",
			"7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",
			[7, 8],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[2-489]|70"]
			], [
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["7"]
			]]
		],
		TM: [
			"993",
			"810",
			"(?:[1-6]\\d|71)\\d{6}",
			[8],
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					["12"],
					"(8 $1)"
				],
				[
					"(\\d{3})(\\d)(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					["[1-5]"],
					"(8 $1)"
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["[67]"],
					"8 $1"
				]
			],
			"8",
			0,
			0,
			0,
			0,
			0,
			0,
			"8~10"
		],
		TN: [
			"216",
			"00",
			"[2-57-9]\\d{7}",
			[8],
			[[
				"(\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[2-57-9]"]
			]]
		],
		TO: [
			"676",
			"00",
			"(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",
			[5, 7],
			[
				[
					"(\\d{2})(\\d{3})",
					"$1-$2",
					["[2-4]|50|6[09]|7[0-24-69]|8[05]"]
				],
				[
					"(\\d{4})(\\d{3})",
					"$1 $2",
					["0"]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[5-9]"]
				]
			]
		],
		TR: [
			"90",
			"00",
			"4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",
			[
				7,
				10,
				12,
				13
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["512|8[01589]|90"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["5[0-79]"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["[24][1-8]|3[1-9]"],
					"(0$1)",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{6,7})",
					"$1 $2 $3",
					["80"],
					"0$1",
					1
				]
			],
			"0"
		],
		TT: [
			"1",
			"011",
			"(?:[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-46-8]\\d{6})$|1",
			"868$1",
			0,
			"868"
		],
		TV: [
			"688",
			"00",
			"(?:2|7\\d\\d|90)\\d{4}",
			[
				5,
				6,
				7
			],
			[
				[
					"(\\d{2})(\\d{3})",
					"$1 $2",
					["2"]
				],
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					["90"]
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["7"]
				]
			]
		],
		TW: [
			"886",
			"0(?:0[25-79]|19)",
			"[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
			[
				7,
				8,
				9,
				10,
				11
			],
			[
				[
					"(\\d{2})(\\d)(\\d{4})",
					"$1 $2 $3",
					["202"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["826"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					["83"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["82"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[25]0|37|49|8[09]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["[23568]|4(?:0[02-48]|[1-478])|7[1-9]", "[23568]|4(?:0[2-48]|[1-478])|(?:400|7)[1-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[49]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{4})(\\d{4,5})",
					"$1 $2 $3",
					["7"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			"#"
		],
		TZ: [
			"255",
			"00[056]",
			"(?:[25-8]\\d|41|90)\\d{7}",
			[9],
			[
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[24]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					["5"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[67]"],
					"0$1"
				]
			],
			"0"
		],
		UA: [
			"380",
			"00",
			"[89]\\d{9}|[3-9]\\d{8}",
			[9, 10],
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[3-7]|89|9[1-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["[89]"],
					"0$1"
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"0~0"
		],
		UG: [
			"256",
			"00[057]",
			"800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",
			[9],
			[
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					["202", "2024"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					["[27-9]|4(?:6[45]|[7-9])"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					["[34]"],
					"0$1"
				]
			],
			"0"
		],
		US: [
			"1",
			"011",
			"[2-9]\\d{9}|3\\d{6}",
			[10],
			[[
				"(\\d{3})(\\d{4})",
				"$1-$2",
				["310"],
				0,
				1
			], [
				"(\\d{3})(\\d{3})(\\d{4})",
				"($1) $2-$3",
				["[2-9]"],
				0,
				1,
				"$1-$2-$3"
			]],
			"1",
			0,
			0,
			0,
			0,
			0,
			[
				["(?:274[27]|(?:472|983)[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-2478]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"],
				[""],
				["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
				["900[2-9]\\d{6}"],
				["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]
			]
		],
		UY: [
			"598",
			"0(?:0|1[3-9]\\d)",
			"0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}",
			[
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13
			],
			[
				[
					"(\\d{4,5})",
					"$1",
					["21"]
				],
				[
					"(\\d{3})(\\d{3,4})",
					"$1 $2",
					["0"]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["[49]0|8"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["9"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					["[124]"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					["0"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})",
					"$1 $2 $3 $4",
					["0"]
				]
			],
			"0",
			0,
			0,
			0,
			0,
			0,
			0,
			"00",
			" int. "
		],
		UZ: [
			"998",
			"00",
			"(?:20|33|[5-9]\\d)\\d{7}",
			[9],
			[[
				"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["[235-9]"]
			]]
		],
		VA: [
			"39",
			"00",
			"0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
			[
				6,
				7,
				8,
				9,
				10,
				11,
				12
			],
			0,
			0,
			0,
			0,
			0,
			0,
			"06698"
		],
		VC: [
			"1",
			"011",
			"(?:[58]\\d\\d|784|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-7]\\d{6})$|1",
			"784$1",
			0,
			"784"
		],
		VE: [
			"58",
			"00",
			"[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",
			[10],
			[[
				"(\\d{3})(\\d{7})",
				"$1-$2",
				["[24-689]"],
				"0$1"
			]],
			"0"
		],
		VG: [
			"1",
			"011",
			"(?:284|[58]\\d\\d|900)\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-578]\\d{6})$|1",
			"284$1",
			0,
			"284"
		],
		VI: [
			"1",
			"011",
			"[58]\\d{9}|(?:34|90)0\\d{7}",
			[10],
			0,
			"1",
			0,
			"([2-9]\\d{6})$|1",
			"340$1",
			0,
			"340"
		],
		VN: [
			"84",
			"00",
			"[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",
			[
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["80"],
					"0$1",
					1
				],
				[
					"(\\d{4})(\\d{4,6})",
					"$1 $2",
					["1(?:2[02]|[89])"],
					0,
					1
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					["1[26]|6"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[357-9]"],
					"0$1",
					1
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["2[48]"],
					"0$1",
					1
				],
				[
					"(\\d{3})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					["2"],
					"0$1",
					1
				]
			],
			"0"
		],
		VU: [
			"678",
			"00",
			"[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",
			[5, 7],
			[[
				"(\\d{3})(\\d{4})",
				"$1 $2",
				["[57-9]"]
			]]
		],
		WF: [
			"681",
			"00",
			"(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}",
			[6, 9],
			[[
				"(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3",
				["[47-9]"]
			], [
				"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				["8"]
			]]
		],
		WS: [
			"685",
			"0",
			"(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
			[
				5,
				6,
				7,
				10
			],
			[
				[
					"(\\d{5})",
					"$1",
					["[2-5]|6[1-9]"]
				],
				[
					"(\\d{3})(\\d{3,7})",
					"$1 $2",
					["[68]"]
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["7"]
				]
			]
		],
		XK: [
			"383",
			"00",
			"2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",
			[
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					["[89]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["[2-4]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["2|39"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7,10})",
					"$1 $2",
					["3"],
					"0$1"
				]
			],
			"0"
		],
		YE: [
			"967",
			"00",
			"(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
			[
				7,
				8,
				9
			],
			[[
				"(\\d)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				["[1-6]|7(?:[24-6]|8[0-7])"],
				"0$1"
			], [
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["7"],
				"0$1"
			]],
			"0"
		],
		YT: [
			"262",
			"00",
			"(?:639\\d|7093)\\d{5}|(?:26|80|9\\d)\\d{7}",
			[9],
			0,
			"0",
			0,
			0,
			0,
			0,
			0,
			[
				["26(?:89\\d|9(?:0[0-467]|15|5[0-4]|6\\d|[78]0))\\d{4}"],
				["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"],
				["80\\d{7}"],
				0,
				0,
				0,
				0,
				0,
				["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]
			]
		],
		ZA: [
			"27",
			"00",
			"[1-79]\\d{8}|8\\d{4,9}",
			[
				5,
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{2})(\\d{3,4})",
					"$1 $2",
					["8[1-4]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,3})",
					"$1 $2 $3",
					["8[1-4]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["860"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["[1-9]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["8"],
					"0$1"
				]
			],
			"0"
		],
		ZM: [
			"260",
			"00",
			"800\\d{6}|(?:21|[579]\\d|63)\\d{7}",
			[9],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[28]"],
				"0$1"
			], [
				"(\\d{2})(\\d{7})",
				"$1 $2",
				["[579]"],
				"0$1"
			]],
			"0"
		],
		ZW: [
			"263",
			"00",
			"2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
			[
				5,
				6,
				7,
				8,
				9,
				10
			],
			[
				[
					"(\\d{3})(\\d{3,5})",
					"$1 $2",
					["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],
					"0$1"
				],
				[
					"(\\d)(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					["[49]"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					["80"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["7"],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{6})",
					"$1 $2",
					["8"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3,5})",
					"$1 $2",
					["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					["29[013-9]|39|54"],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3,5})",
					"$1 $2",
					["(?:25|54)8", "258|5483"],
					"0$1"
				]
			],
			"0"
		]
	},
	nonGeographic: {
		800: [
			"800",
			0,
			"(?:00|[1-9]\\d)\\d{6}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["\\d"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				["(?:00|[1-9]\\d)\\d{6}"]
			]
		],
		808: [
			"808",
			0,
			"[1-9]\\d{7}",
			[8],
			[[
				"(\\d{4})(\\d{4})",
				"$1 $2",
				["[1-9]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				["[1-9]\\d{7}"]
			]
		],
		870: [
			"870",
			0,
			"7\\d{11}|[235-7]\\d{8}",
			[9, 12],
			[[
				"(\\d{3})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				["[235-7]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"],
				0,
				0,
				0,
				0,
				0,
				0,
				["2\\d{8}", [9]]
			]
		],
		878: [
			"878",
			0,
			"10\\d{10}",
			[12],
			[[
				"(\\d{2})(\\d{5})(\\d{5})",
				"$1 $2 $3",
				["1"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				["10\\d{10}"]
			]
		],
		881: [
			"881",
			0,
			"6\\d{9}|[0-36-9]\\d{8}",
			[9, 10],
			[[
				"(\\d)(\\d{3})(\\d{5})",
				"$1 $2 $3",
				["[0-37-9]"]
			], [
				"(\\d)(\\d{3})(\\d{5,6})",
				"$1 $2 $3",
				["6"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[0, ["6\\d{9}|[0-36-9]\\d{8}"]]
		],
		882: [
			"882",
			0,
			"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",
			[
				7,
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					["16|342"]
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					["49"]
				],
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					["1[36]|9"]
				],
				[
					"(\\d{2})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					["3[23]"]
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					["16"]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["10|23|3(?:[15]|4[57])|4|5[12]"]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["34"]
				],
				[
					"(\\d{2})(\\d{4,5})(\\d{5})",
					"$1 $2 $3",
					["[1-35]"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}", [
					7,
					8,
					9,
					10,
					12
				]],
				0,
				0,
				0,
				["348[57]\\d{7}", [11]],
				0,
				0,
				["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]
			]
		],
		883: [
			"883",
			0,
			"(?:[1-4]\\d|51)\\d{6,10}",
			[
				8,
				9,
				10,
				11,
				12
			],
			[
				[
					"(\\d{3})(\\d{3})(\\d{2,8})",
					"$1 $2 $3",
					["[14]|2[24-689]|3[02-689]|51[24-9]"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					["510"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					["21"]
				],
				[
					"(\\d{4})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					["51[13]"]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					["[235]"]
				]
			],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]
			]
		],
		888: [
			"888",
			0,
			"\\d{11}",
			[11],
			[["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				0,
				0,
				0,
				["\\d{11}"]
			]
		],
		979: [
			"979",
			0,
			"[1359]\\d{8}",
			[9],
			[[
				"(\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				["[1359]"]
			]],
			0,
			0,
			0,
			0,
			0,
			0,
			[
				0,
				0,
				0,
				["[1359]\\d{8}"]
			]
		]
	}
};
//#endregion
//#region node_modules/libphonenumber-js/min/exports/withMetadataArgument.js
function Rp(e, t) {
	var n = Array.prototype.slice.call(t);
	return n.push(Lp), e.apply(this, n);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/tools/semver-compare.js
function zp(e, t) {
	e = e.split("-"), t = t.split("-");
	for (var n = e[0].split("."), r = t[0].split("."), i = 0; i < 3; i++) {
		var a = Number(n[i]), o = Number(r[i]);
		if (a > o) return 1;
		if (o > a) return -1;
		if (!isNaN(a) && isNaN(o)) return 1;
		if (isNaN(a) && !isNaN(o)) return -1;
	}
	return e[1] && t[1] ? e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : 0 : !e[1] && t[1] ? 1 : e[1] && !t[1] ? -1 : 0;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/isObject.js
var Bp = {}.constructor;
function Vp(e) {
	return e != null && e.constructor === Bp;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/isCallingCode.js
var Hp = /^\d+$/;
function Up(e) {
	return Hp.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/metadata.js
function Wp(e) {
	"@babel/helpers - typeof";
	return Wp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Wp(e);
}
function Gp(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Kp(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Jp(r.key), r);
	}
}
function qp(e, t, n) {
	return t && Kp(e.prototype, t), n && Kp(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Jp(e) {
	var t = Yp(e, "string");
	return Wp(t) == "symbol" ? t : t + "";
}
function Yp(e, t) {
	if (Wp(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Wp(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Xp = "1.2.0", Zp = "1.7.35", Qp = " ext. ", $p = /* @__PURE__ */ function() {
	function e(t) {
		Gp(this, e), am(t), this.metadata = t, lm.call(this, t);
	}
	return qp(e, [
		{
			key: "getCountries",
			value: function() {
				return Object.keys(this.metadata.countries).filter(function(e) {
					return e !== "001";
				});
			}
		},
		{
			key: "getCountryMetadata",
			value: function(e) {
				return this.metadata.countries[e];
			}
		},
		{
			key: "nonGeographic",
			value: function() {
				if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical;
			}
		},
		{
			key: "hasCountry",
			value: function(e) {
				return this.getCountryMetadata(e) !== void 0;
			}
		},
		{
			key: "hasCallingCode",
			value: function(e) {
				if (this.getCountryCodesForCallingCode(e)) return !0;
				if (this.nonGeographic()) {
					if (this.nonGeographic()[e]) return !0;
				} else {
					var t = this.countryCallingCodes()[e];
					if (t && t.length === 1 && t[0] === "001") return !0;
				}
			}
		},
		{
			key: "isNonGeographicCallingCode",
			value: function(e) {
				return this.nonGeographic() ? !!this.nonGeographic()[e] : !this.getCountryCodesForCallingCode(e);
			}
		},
		{
			key: "country",
			value: function(e) {
				return this.selectNumberingPlan(e);
			}
		},
		{
			key: "selectNumberingPlan",
			value: function(e, t) {
				var n, r;
				if (e && (Up(e) ? r = e : n = e), t && (r = t), n && n !== "001") {
					var i = this.getCountryMetadata(n);
					if (!i) throw Error(`Unknown country: ${n}`);
					this.numberingPlan = new em(i, this);
				} else if (r) {
					if (!this.hasCallingCode(r)) throw Error(`Unknown calling code: ${r}`);
					this.numberingPlan = new em(this.getNumberingPlanMetadata(r), this);
				} else this.numberingPlan = void 0;
				return this;
			}
		},
		{
			key: "getCountryCodesForCallingCode",
			value: function(e) {
				var t = this.countryCallingCodes()[e];
				if (t) return t.length === 1 && t[0].length === 3 ? void 0 : t;
			}
		},
		{
			key: "getCountryCodeForCallingCode",
			value: function(e) {
				var t = this.getCountryCodesForCallingCode(e);
				if (t) return t[0];
			}
		},
		{
			key: "getNumberingPlanMetadata",
			value: function(e) {
				var t = this.getCountryCodeForCallingCode(e);
				if (t) return this.getCountryMetadata(t);
				if (this.nonGeographic()) {
					var n = this.nonGeographic()[e];
					if (n) return n;
				} else {
					var r = this.countryCallingCodes()[e];
					if (r && r.length === 1 && r[0] === "001") return this.metadata.countries["001"];
				}
			}
		},
		{
			key: "countryCallingCode",
			value: function() {
				return this.numberingPlan.callingCode();
			}
		},
		{
			key: "IDDPrefix",
			value: function() {
				return this.numberingPlan.IDDPrefix();
			}
		},
		{
			key: "defaultIDDPrefix",
			value: function() {
				return this.numberingPlan.defaultIDDPrefix();
			}
		},
		{
			key: "nationalNumberPattern",
			value: function() {
				return this.numberingPlan.nationalNumberPattern();
			}
		},
		{
			key: "possibleLengths",
			value: function() {
				return this.numberingPlan.possibleLengths();
			}
		},
		{
			key: "formats",
			value: function() {
				return this.numberingPlan.formats();
			}
		},
		{
			key: "nationalPrefixForParsing",
			value: function() {
				return this.numberingPlan.nationalPrefixForParsing();
			}
		},
		{
			key: "nationalPrefixTransformRule",
			value: function() {
				return this.numberingPlan.nationalPrefixTransformRule();
			}
		},
		{
			key: "leadingDigits",
			value: function() {
				return this.numberingPlan.leadingDigits();
			}
		},
		{
			key: "hasTypes",
			value: function() {
				return this.numberingPlan.hasTypes();
			}
		},
		{
			key: "type",
			value: function(e) {
				return this.numberingPlan.type(e);
			}
		},
		{
			key: "ext",
			value: function() {
				return this.numberingPlan.ext();
			}
		},
		{
			key: "countryCallingCodes",
			value: function() {
				return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
			}
		},
		{
			key: "chooseCountryByCountryCallingCode",
			value: function(e) {
				return this.selectNumberingPlan(e);
			}
		},
		{
			key: "hasSelectedNumberingPlan",
			value: function() {
				return this.numberingPlan !== void 0;
			}
		}
	]);
}(), em = /* @__PURE__ */ function() {
	function e(t, n) {
		Gp(this, e), this.globalMetadataObject = n, this.metadata = t, lm.call(this, n.metadata);
	}
	return qp(e, [
		{
			key: "callingCode",
			value: function() {
				return this.metadata[0];
			}
		},
		{
			key: "_getDefaultCountryMetadataForThisCallingCode",
			value: function() {
				return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
			}
		},
		{
			key: "getDefaultCountryMetadataForRegion",
			value: function() {
				return this._getDefaultCountryMetadataForThisCallingCode();
			}
		},
		{
			key: "IDDPrefix",
			value: function() {
				if (!(this.v1 || this.v2)) return this.metadata[1];
			}
		},
		{
			key: "defaultIDDPrefix",
			value: function() {
				if (!(this.v1 || this.v2)) return this.metadata[12];
			}
		},
		{
			key: "nationalNumberPattern",
			value: function() {
				return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
			}
		},
		{
			key: "possibleLengths",
			value: function() {
				if (!this.v1) return this.metadata[this.v2 ? 2 : 3];
			}
		},
		{
			key: "_getFormats",
			value: function(e) {
				return e[this.v1 ? 2 : this.v2 ? 3 : 4];
			}
		},
		{
			key: "formats",
			value: function() {
				var e = this;
				return (this._getFormats(this.metadata) || this._getFormats(this._getDefaultCountryMetadataForThisCallingCode()) || []).map(function(t) {
					return new tm(t, e);
				});
			}
		},
		{
			key: "nationalPrefix",
			value: function() {
				return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
			}
		},
		{
			key: "_getNationalPrefixFormattingRule",
			value: function(e) {
				return e[this.v1 ? 4 : this.v2 ? 5 : 6];
			}
		},
		{
			key: "nationalPrefixFormattingRule",
			value: function() {
				return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this._getDefaultCountryMetadataForThisCallingCode());
			}
		},
		{
			key: "_nationalPrefixForParsing",
			value: function() {
				return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
			}
		},
		{
			key: "nationalPrefixForParsing",
			value: function() {
				return this._nationalPrefixForParsing() || this.nationalPrefix();
			}
		},
		{
			key: "nationalPrefixTransformRule",
			value: function() {
				return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
			}
		},
		{
			key: "_getNationalPrefixIsOptionalWhenFormatting",
			value: function() {
				return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
			}
		},
		{
			key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
			value: function() {
				return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this._getDefaultCountryMetadataForThisCallingCode());
			}
		},
		{
			key: "leadingDigits",
			value: function() {
				return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
			}
		},
		{
			key: "types",
			value: function() {
				return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
			}
		},
		{
			key: "hasTypes",
			value: function() {
				return this.types() && this.types().length === 0 ? !1 : !!this.types();
			}
		},
		{
			key: "type",
			value: function(e) {
				if (this.hasTypes() && im(this.types(), e)) return new rm(im(this.types(), e), this);
			}
		},
		{
			key: "ext",
			value: function() {
				return this.v1 || this.v2 ? Qp : this.metadata[13] || Qp;
			}
		}
	]);
}(), tm = /* @__PURE__ */ function() {
	function e(t, n) {
		Gp(this, e), this._format = t, this.metadata = n;
	}
	return qp(e, [
		{
			key: "pattern",
			value: function() {
				return this._format[0];
			}
		},
		{
			key: "format",
			value: function() {
				return this._format[1];
			}
		},
		{
			key: "leadingDigitsPatterns",
			value: function() {
				return this._format[2] || [];
			}
		},
		{
			key: "nationalPrefixFormattingRule",
			value: function() {
				return this._format[3] || this.metadata.nationalPrefixFormattingRule();
			}
		},
		{
			key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
			value: function() {
				return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
			}
		},
		{
			key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
			value: function() {
				return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
			}
		},
		{
			key: "usesNationalPrefix",
			value: function() {
				return !!(this.nationalPrefixFormattingRule() && !nm.test(this.nationalPrefixFormattingRule()));
			}
		},
		{
			key: "internationalFormat",
			value: function() {
				return this._format[5] || this.format();
			}
		}
	]);
}(), nm = /^\(?\$1\)?$/, rm = /* @__PURE__ */ function() {
	function e(t, n) {
		Gp(this, e), this.type = t, this.metadata = n;
	}
	return qp(e, [{
		key: "pattern",
		value: function() {
			return this.metadata.v1 ? this.type : this.type[0];
		}
	}, {
		key: "possibleLengths",
		value: function() {
			if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths();
		}
	}]);
}();
function im(e, t) {
	switch (t) {
		case "FIXED_LINE": return e[0];
		case "MOBILE": return e[1];
		case "TOLL_FREE": return e[2];
		case "PREMIUM_RATE": return e[3];
		case "PERSONAL_NUMBER": return e[4];
		case "VOICEMAIL": return e[5];
		case "UAN": return e[6];
		case "PAGER": return e[7];
		case "VOIP": return e[8];
		case "SHARED_COST": return e[9];
	}
}
function am(e) {
	if (!e) throw Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
	if (!Vp(e) || !Vp(e.countries)) throw Error(`[libphonenumber-js] \`metadata\` argument was passed but it's not a valid metadata. Must be an object having \`.countries\` child object property. Got ${Vp(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + om(e) + ": " + e}.`);
}
/* istanbul ignore next */
var om = function(e) {
	return Wp(e);
};
function sm(e, t) {
	var n = new $p(t);
	if (n.hasCountry(e)) return n.selectNumberingPlan(e).countryCallingCode();
	throw Error(`Unknown country: ${e}`);
}
function cm(e, t) {
	return t.countries.hasOwnProperty(e);
}
function lm(e) {
	var t = e.version;
	typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? zp(t, Xp) === -1 ? this.v2 = !0 : zp(t, Zp) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
function um(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = dm(e)) || t && e && typeof e.length == "number") {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function dm(e, t) {
	if (e) {
		if (typeof e == "string") return fm(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fm(e, t) : void 0;
	}
}
function fm(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function pm(e, t) {
	for (var n = e.slice(), r = um(t), i; !(i = r()).done;) {
		var a = i.value;
		e.indexOf(a) < 0 && n.push(a);
	}
	return n.sort(function(e, t) {
		return e - t;
	});
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
function mm(e, t, n) {
	return hm(e, void 0, t, n);
}
function hm(e, t, n, r) {
	n && (r = new $p(r.metadata), r.selectNumberingPlan(n));
	var i = r.type(t), a = i && i.possibleLengths() || r.possibleLengths();
	if (!a) return "IS_POSSIBLE";
	if (t === "FIXED_LINE_OR_MOBILE") {
		/* istanbul ignore next */
		if (!r.type("FIXED_LINE")) return hm(e, "MOBILE", n, r);
		var o = r.type("MOBILE");
		o && (a = pm(a, o.possibleLengths()));
	} else if (t && !i) return "INVALID_LENGTH";
	var s = e.length, c = a[0];
	return c === s ? "IS_POSSIBLE" : c > s ? "TOO_SHORT" : a[a.length - 1] < s ? "TOO_LONG" : a.indexOf(s, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
//#endregion
//#region node_modules/libphonenumber-js/es6/isPossible.js
function gm(e, t, n) {
	/* istanbul ignore if */
	t === void 0 && (t = {});
	var r = new $p(n);
	if (t.v2) {
		if (!e.countryCallingCode) throw Error("Invalid phone number object passed");
		r.selectNumberingPlan(e.country || e.countryCallingCode);
	} else {
		if (!e.phone) return !1;
		if (e.country) {
			if (!r.hasCountry(e.country)) throw Error(`Unknown country: ${e.country}`);
			r.selectNumberingPlan(e.country);
		} else {
			if (!e.countryCallingCode) throw Error("Invalid phone number object passed");
			r.selectNumberingPlan(e.countryCallingCode);
		}
	}
	if (r.possibleLengths()) return _m(e.phone || e.nationalNumber, r);
	if (e.countryCallingCode && r.isNonGeographicCallingCode(e.countryCallingCode)) return !0;
	throw Error("Missing \"possibleLengths\" in metadata. Perhaps the metadata has been generated before v1.0.18.");
}
function _m(e, t) {
	switch (mm(e, void 0, t)) {
		case "IS_POSSIBLE": return !0;
		default: return !1;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
function vm(e, t) {
	return e = e || "", RegExp("^(?:" + t + ")$").test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getNumberType.js
function ym(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = bm(e)) || t && e && typeof e.length == "number") {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function bm(e, t) {
	if (e) {
		if (typeof e == "string") return xm(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xm(e, t) : void 0;
	}
}
function xm(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var Sm = [
	"MOBILE",
	"PREMIUM_RATE",
	"TOLL_FREE",
	"SHARED_COST",
	"VOIP",
	"PERSONAL_NUMBER",
	"PAGER",
	"UAN",
	"VOICEMAIL"
];
function Cm(e, t, n) {
	if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
		var r = new $p(n);
		r.selectNumberingPlan(e.country || e.countryCallingCode);
		var i = t.v2 ? e.nationalNumber : e.phone;
		if (vm(i, r.nationalNumberPattern())) {
			if (wm(i, "FIXED_LINE", r)) return r.type("MOBILE") && r.type("MOBILE").pattern() === "" || !r.type("MOBILE") || wm(i, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
			for (var a = ym(Sm), o; !(o = a()).done;) {
				var s = o.value;
				if (wm(i, s, r)) return s;
			}
		}
	}
}
function wm(e, t, n) {
	var r = n.type(t);
	return !r || !r.pattern() || r.possibleLengths() && r.possibleLengths().indexOf(e.length) < 0 ? !1 : vm(e, r.pattern());
}
//#endregion
//#region node_modules/libphonenumber-js/es6/isValid.js
function Tm(e, t, n) {
	t = t || {};
	var r = new $p(n);
	return r.selectNumberingPlan(e.country || e.countryCallingCode), r.hasTypes() ? Cm(e, t, r.metadata) !== void 0 : vm(t.v2 ? e.nationalNumber : e.phone, r.nationalNumberPattern());
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/isCountryCode.js
var Em = /^[A-Z]{2}$/;
function Dm(e) {
	return Em.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getCountryAndCallingCodeFromOneOfThem.js
var Om = !1;
function km(e, t) {
	var n, r, i = new $p(t);
	return Dm(e) ? (n = e, i.selectNumberingPlan(n), r = i.countryCallingCode()) : (r = e, Om && i.isNonGeographicCallingCode(r) && (n = "001")), {
		country: n,
		callingCode: r
	};
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
function Am(e, t, n) {
	var r = new $p(n).getCountryCodesForCallingCode(e);
	return r ? r.filter(function(e) {
		return jm(t, e, n);
	}) : [];
}
function jm(e, t, n) {
	var r = new $p(n);
	return r.selectNumberingPlan(t), r.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/constants.js
var Mm = "0-9０-９٠-٩۰-۹", Nm = "-‐-―−ー－／/．. \xA0­​⁠　()（）［］\\[\\]~⁓∼～", Pm = "+＋", Fm = RegExp("([" + Mm + "])");
function Im(e, t, n, r) {
	if (t) {
		var i = new $p(r);
		i.selectNumberingPlan(t || n);
		var a = new RegExp(i.IDDPrefix());
		if (e.search(a) === 0) {
			e = e.slice(e.match(a)[0].length);
			var o = e.match(Fm);
			if (!(o && o[1] != null && o[1].length > 0 && o[1] === "0")) return e;
		}
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
function Lm(e, t) {
	if (e && t.numberingPlan.nationalPrefixForParsing()) {
		var n = RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")"), r = n.exec(e);
		if (r) {
			var i, a, o = r.length - 1, s = o > 0 && r[o];
			if (t.nationalPrefixTransformRule() && s) i = e.replace(n, t.nationalPrefixTransformRule()), o > 1 && (a = r[1]);
			else {
				var c = r[0];
				i = e.slice(c.length), s && (a = r[1]);
			}
			var l;
			if (s) {
				var u = e.indexOf(r[1]);
				e.slice(0, u) === t.numberingPlan.nationalPrefix() && (l = t.numberingPlan.nationalPrefix());
			} else l = r[0];
			return {
				nationalNumber: i,
				nationalPrefix: l,
				carrierCode: a
			};
		}
	}
	return { nationalNumber: e };
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getCountryByNationalNumber.js
function Rm(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = zm(e)) || t && e && typeof e.length == "number") {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function zm(e, t) {
	if (e) {
		if (typeof e == "string") return Bm(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bm(e, t) : void 0;
	}
}
function Bm(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Vm(e, t, n) {
	for (var r = new $p(n), i = Rm(t), a; !(a = i()).done;) {
		var o = a.value;
		if (r.selectNumberingPlan(o), r.leadingDigits()) {
			if (e && e.search(r.leadingDigits()) === 0) return o;
		} else if (Cm({
			phone: e,
			country: o
		}, void 0, r.metadata)) return o;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
var Hm = !1;
function Um(e, t) {
	var n = t.nationalNumber, r = t.metadata;
	/* istanbul ignore if */
	if (Hm && r.isNonGeographicCallingCode(e)) return "001";
	var i = r.getCountryCodesForCallingCode(e);
	if (i) return i.length === 1 ? i[0] : Vm(n, i, r.metadata);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
function Wm(e, t, n) {
	var r = Lm(e, n), i = r.carrierCode, a = r.nationalNumber;
	return a !== e && (!Gm(e, a, n) || n.numberingPlan.possibleLengths() && (t || (t = Um(n.numberingPlan.callingCode(), {
		nationalNumber: a,
		metadata: n
	})), !Km(a, t, n))) ? { nationalNumber: e } : {
		nationalNumber: a,
		carrierCode: i
	};
}
function Gm(e, t, n) {
	return !(vm(e, n.nationalNumberPattern()) && !vm(t, n.nationalNumberPattern()));
}
function Km(e, t, n) {
	switch (mm(e, t, n)) {
		case "TOO_SHORT":
		case "INVALID_LENGTH": return !1;
		default: return !0;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
function qm(e, t, n, r, i) {
	if (!(t || n || r)) return { number: e };
	var a = t || n ? sm(t || n, i) : r;
	if (e.indexOf(a) === 0) {
		var o = new $p(i);
		o.selectNumberingPlan(t || n || r);
		var s = e.slice(a.length), c = Wm(s, void 0, o).nationalNumber, l = Wm(e, void 0, o).nationalNumber;
		if (!vm(l, o.nationalNumberPattern()) && vm(c, o.nationalNumberPattern()) || mm(l, void 0, o) === "TOO_LONG") return {
			countryCallingCode: a,
			number: s
		};
	}
	return { number: e };
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
function Jm(e, t, n, r, i) {
	if (!e) return {};
	var a;
	if (e[0] !== "+") {
		var o = Im(e, t || n, r, i);
		if (o && o !== e) a = !0, e = "+" + o;
		else {
			if (t || n || r) {
				var s = qm(e, t, n, r, i), c = s.countryCallingCode, l = s.number;
				if (c) return {
					countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
					countryCallingCode: c,
					number: l
				};
			}
			return { number: e };
		}
	}
	if (e[1] === "0") return {};
	for (var u = new $p(i), d = 2; d - 1 <= 3 && d <= e.length;) {
		var f = e.slice(1, d);
		if (u.hasCallingCode(f)) return u.selectNumberingPlan(f), {
			countryCallingCodeSource: a ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
			countryCallingCode: f,
			number: e.slice(d)
		};
		d++;
	}
	return {};
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
function Ym(e) {
	return e.replace(RegExp(`[${Nm}]+`, "g"), " ").trim();
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
var Xm = /(\$\d)/;
function Zm(e, t, n) {
	var r = n.useInternationalFormat, i = n.withNationalPrefix;
	n.carrierCode, n.metadata;
	var a = e.replace(new RegExp(t.pattern()), r ? t.internationalFormat() : i && t.nationalPrefixFormattingRule() ? t.format().replace(Xm, t.nationalPrefixFormattingRule()) : t.format());
	return r ? Ym(a) : a;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
var Qm = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function $m(e, t, n) {
	var r = new $p(n);
	if (r.selectNumberingPlan(e || t), r.defaultIDDPrefix()) return r.defaultIDDPrefix();
	if (Qm.test(r.IDDPrefix())) return r.IDDPrefix();
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
var eh = ";ext=", th = function(e) {
	return `([${Mm}]{1,${e}})`;
};
function nh(e) {
	var t = "20", n = "15", r = "9", i = "6", a = "[ \xA0\\t,]*", o = "[:\\.．]?[ \xA0\\t,-]*", s = "#?", c = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", l = "(?:[xｘ#＃~～]|int|ｉｎｔ)", u = "[- ]+", d = "[ \xA0\\t]*", f = "(?:,{2}|;)", p = eh + th(t), m = a + c + o + th(t) + s, h = a + l + o + th(r) + s, g = u + th(i) + "#", _ = d + f + o + th(n) + s, v = d + "(?:,)+" + o + th(r) + s;
	return p + "|" + m + "|" + h + "|" + g + "|" + _ + "|" + v;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
var rh = "[" + Mm + "]{2}", ih = "[" + Pm + "]{0,1}(?:[" + Nm + "]*[" + Mm + "]){3,}[" + Nm + Mm + "]*", ah = RegExp("^[" + Pm + "]{0,1}(?:[" + Nm + "]*[" + Mm + "]){1,2}$", "i"), oh = ih + "(?:" + nh() + ")?", sh = RegExp("^" + rh + "$|^" + oh + "$", "i");
function ch(e) {
	return e.length >= 2 && sh.test(e);
}
function lh(e) {
	return ah.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/RFC3966.js
function uh(e) {
	var t = e.number, n = e.ext;
	if (!t) return "";
	if (t[0] !== "+") throw Error("\"formatRFC3966()\" expects \"number\" to be in E.164 format.");
	return `tel:${t}${n ? ";ext=" + n : ""}`;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/format.js
var dh = { formatExtension: function(e, t, n) {
	return `${e}${n.ext()}${t}`;
} };
function fh(e, t, n, r) {
	n = n ? _h({}, dh, n) : dh;
	var i = new $p(r);
	if (e.country && e.country !== "001") {
		if (!i.hasCountry(e.country)) throw Error(`Unknown country: ${e.country}`);
		i.selectNumberingPlan(e.country);
	} else if (e.countryCallingCode) i.selectNumberingPlan(e.countryCallingCode);
	else return e.phone || "";
	var a = i.countryCallingCode(), o = n.v2 ? e.nationalNumber : e.phone, s;
	switch (t) {
		case "NATIONAL": return o ? (s = ph(o, e.carrierCode, "NATIONAL", i, n), hh(s, e.ext, i, n.formatExtension)) : "";
		case "INTERNATIONAL": return o ? (s = ph(o, null, "INTERNATIONAL", i, n), s = `+${a} ${s}`, hh(s, e.ext, i, n.formatExtension)) : `+${a}`;
		case "E.164": return `+${a}${o}`;
		case "RFC3966": return uh({
			number: `+${a}${o}`,
			ext: e.ext
		});
		case "IDD":
			if (!n.fromCountry) return;
			var c = gh(o, e.carrierCode, a, n.fromCountry, i);
			return c ? hh(c, e.ext, i, n.formatExtension) : void 0;
		default: throw Error(`Unknown "format" argument passed to "formatNumber()": "${t}"`);
	}
}
function ph(e, t, n, r, i) {
	var a = mh(r.formats(), e);
	return a ? Zm(e, a, {
		useInternationalFormat: n === "INTERNATIONAL",
		withNationalPrefix: !(a.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && i && i.nationalPrefix === !1),
		carrierCode: t,
		metadata: r
	}) : e;
}
function mh(e, t) {
	return vh(e, function(e) {
		if (e.leadingDigitsPatterns().length > 0) {
			var n = e.leadingDigitsPatterns()[e.leadingDigitsPatterns().length - 1];
			if (t.search(n) !== 0) return !1;
		}
		return vm(t, e.pattern());
	});
}
function hh(e, t, n, r) {
	return t ? r(e, t, n) : e;
}
function gh(e, t, n, r, i) {
	if (sm(r, i.metadata) === n) {
		var a = ph(e, t, "NATIONAL", i);
		return n === "1" ? n + " " + a : a;
	}
	var o = $m(r, void 0, i.metadata);
	if (o) return `${o} ${n} ${ph(e, null, "INTERNATIONAL", i)}`;
}
function _h() {
	for (var e = 1, t = [...arguments]; e < t.length;) {
		if (t[e]) for (var n in t[e]) t[0][n] = t[e][n];
		e++;
	}
	return t[0];
}
function vh(e, t) {
	for (var n = 0; n < e.length;) {
		if (t(e[n])) return e[n];
		n++;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/PhoneNumber.js
function yh(e) {
	"@babel/helpers - typeof";
	return yh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, yh(e);
}
function bh(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function xh(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? bh(Object(n), !0).forEach(function(t) {
			Sh(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bh(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Sh(e, t, n) {
	return (t = Eh(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ch(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function wh(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Eh(r.key), r);
	}
}
function Th(e, t, n) {
	return t && wh(e.prototype, t), n && wh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Eh(e) {
	var t = Dh(e, "string");
	return yh(t) == "symbol" ? t : t + "";
}
function Dh(e, t) {
	if (yh(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (yh(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Oh = /* @__PURE__ */ function() {
	function e(t, n, r) {
		if (Ch(this, e), !t) throw TypeError("First argument is required");
		if (typeof t != "string") throw TypeError("First argument must be a string");
		if (t[0] === "+" && !n) throw TypeError("`metadata` argument not passed");
		if (Vp(n) && Vp(n.countries)) {
			r = n;
			var i = t;
			if (!kh.test(i)) throw Error("Invalid `number` argument passed: must consist of a \"+\" followed by digits");
			var a = Jm(i, void 0, void 0, void 0, r), o = a.countryCallingCode;
			if (n = a.number, t = o, !n) throw Error("Invalid `number` argument passed: too short");
		}
		if (!n) throw TypeError("`nationalNumber` argument is required");
		if (typeof n != "string") throw TypeError("`nationalNumber` argument must be a string");
		am(r);
		var s = km(t, r), c = s.country, l = s.callingCode;
		this.country = c, this.countryCallingCode = l, this.nationalNumber = n, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
			return r;
		};
	}
	return Th(e, [
		{
			key: "setExt",
			value: function(e) {
				this.ext = e;
			}
		},
		{
			key: "getPossibleCountries",
			value: function() {
				return this.country ? [this.country] : Am(this.countryCallingCode, this.nationalNumber, this.getMetadata());
			}
		},
		{
			key: "isPossible",
			value: function() {
				return gm(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "isValid",
			value: function() {
				return Tm(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "isNonGeographic",
			value: function() {
				return new $p(this.getMetadata()).isNonGeographicCallingCode(this.countryCallingCode);
			}
		},
		{
			key: "isEqual",
			value: function(e) {
				return this.number === e.number && this.ext === e.ext;
			}
		},
		{
			key: "getType",
			value: function() {
				return Cm(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "format",
			value: function(e, t) {
				return fh(this, e, t ? xh(xh({}, t), {}, { v2: !0 }) : { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "formatNational",
			value: function(e) {
				return this.format("NATIONAL", e);
			}
		},
		{
			key: "formatInternational",
			value: function(e) {
				return this.format("INTERNATIONAL", e);
			}
		},
		{
			key: "getURI",
			value: function(e) {
				return this.format("RFC3966", e);
			}
		}
	]);
}(), kh = /^\+\d+$/;
//#endregion
//#region node_modules/libphonenumber-js/es6/ParseError.js
function Ah(e) {
	"@babel/helpers - typeof";
	return Ah = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ah(e);
}
function jh(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Nh(r.key), r);
	}
}
function Mh(e, t, n) {
	return t && jh(e.prototype, t), n && jh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Nh(e) {
	var t = Ph(e, "string");
	return Ah(t) == "symbol" ? t : t + "";
}
function Ph(e, t) {
	if (Ah(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ah(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Fh(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Ih(e, t, n) {
	return t = Gh(t), Lh(e, Hh() ? Reflect.construct(t, n || [], Gh(e).constructor) : t.apply(e, n));
}
function Lh(e, t) {
	if (t && (Ah(t) == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Rh(e);
}
function Rh(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function zh(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wh(e, t);
}
function Bh(e) {
	var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
	return Bh = function(e) {
		if (e === null || !Uh(e)) return e;
		if (typeof e != "function") throw TypeError("Super expression must either be null or a function");
		if (t !== void 0) {
			if (t.has(e)) return t.get(e);
			t.set(e, n);
		}
		function n() {
			return Vh(e, arguments, Gh(this).constructor);
		}
		return n.prototype = Object.create(e.prototype, { constructor: {
			value: n,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), Wh(n, e);
	}, Bh(e);
}
function Vh(e, t, n) {
	if (Hh()) return Reflect.construct.apply(null, arguments);
	var r = [null];
	r.push.apply(r, t);
	var i = new (e.bind.apply(e, r))();
	return n && Wh(i, n.prototype), i;
}
function Hh() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Hh = function() {
		return !!e;
	})();
}
function Uh(e) {
	try {
		return Function.toString.call(e).indexOf("[native code]") !== -1;
	} catch {
		return typeof e == "function";
	}
}
function Wh(e, t) {
	return Wh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Wh(e, t);
}
function Gh(e) {
	return Gh = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Gh(e);
}
var Kh = /* @__PURE__ */ function(e) {
	function t(e) {
		var n;
		return Fh(this, t), n = Ih(this, t, [e]), Object.setPrototypeOf(n, t.prototype), n.name = n.constructor.name, n;
	}
	return zh(t, e), Mh(t);
}(/* @__PURE__ */ Bh(Error)), qh = RegExp("(?:" + nh() + ")$", "i");
function Jh(e) {
	var t = e.search(qh);
	if (t < 0) return {};
	for (var n = e.slice(0, t), r = e.match(qh), i = 1; i < r.length;) {
		if (r[i]) return {
			number: n,
			ext: r[i]
		};
		i++;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/parseDigits.js
var Yh = {
	0: "0",
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	7: "7",
	8: "8",
	9: "9",
	"０": "0",
	"１": "1",
	"２": "2",
	"３": "3",
	"４": "4",
	"５": "5",
	"６": "6",
	"７": "7",
	"８": "8",
	"９": "9",
	"٠": "0",
	"١": "1",
	"٢": "2",
	"٣": "3",
	"٤": "4",
	"٥": "5",
	"٦": "6",
	"٧": "7",
	"٨": "8",
	"٩": "9",
	"۰": "0",
	"۱": "1",
	"۲": "2",
	"۳": "3",
	"۴": "4",
	"۵": "5",
	"۶": "6",
	"۷": "7",
	"۸": "8",
	"۹": "9"
};
function Xh(e) {
	return Yh[e];
}
//#endregion
//#region node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
function Zh(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = Qh(e)) || t && e && typeof e.length == "number") {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Qh(e, t) {
	if (e) {
		if (typeof e == "string") return $h(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $h(e, t) : void 0;
	}
}
function $h(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function eg(e) {
	for (var t = "", n = Zh(e.split("")), r; !(r = n()).done;) {
		var i = r.value;
		t += tg(i, t) || "";
	}
	return t;
}
function tg(e, t, n) {
	if (e === "+") {
		if (t) {
			typeof n == "function" && n("end");
			return;
		}
		return "+";
	}
	return Xh(e);
}
var ng = "([" + Mm + "]|[\\-\\.\\(\\)]?)", rg = "^\\+" + ng + "*[" + Mm + "]" + ng + "*$", ig = new RegExp(rg, "g"), ag = Mm, og = "[" + ag + "]+((\\-)*[" + ag + "])*", sg = "[a-zA-Z]+((\\-)*[" + ag + "])*", cg = "^(" + og + "\\.)*" + sg + "\\.?$", lg = new RegExp(cg, "g"), ug = "tel:", dg = ";phone-context=", fg = ";isub=";
function pg(e) {
	var t = e.indexOf(dg);
	if (t < 0) return null;
	var n = t + dg.length;
	if (n >= e.length) return "";
	var r = e.indexOf(";", n);
	return r >= 0 ? e.substring(n, r) : e.substring(n);
}
function mg(e) {
	return e === null ? !0 : e.length === 0 ? !1 : ig.test(e) || lg.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
function hg(e, t) {
	var n = t.extractFormattedPhoneNumber, r = pg(e);
	if (!mg(r)) throw new Kh("NOT_A_NUMBER");
	var i;
	if (r === null) i = n(e) || "";
	else {
		i = "", r.charAt(0) === "+" && (i += r);
		var a = e.indexOf(ug), o = a >= 0 ? a + ug.length : 0, s = e.indexOf(dg);
		i += e.substring(o, s);
	}
	var c = i.indexOf(fg);
	if (c > 0 && (i = i.substring(0, c)), i !== "") return i;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/parse.js
var gg = 250, _g = RegExp("[" + Pm + Mm + "]"), vg = RegExp("[^" + Mm + "#]+$"), yg = !1;
function bg(e, t, n) {
	t = t || {};
	var r = new $p(n);
	if (t.defaultCountry && !r.hasCountry(t.defaultCountry)) throw t.v2 ? new Kh("INVALID_COUNTRY") : Error(`Unknown country: ${t.defaultCountry}`);
	var i = Sg(e, t.v2, t.extract), a = i.number, o = i.ext, s = i.error;
	if (!a) {
		if (t.v2) throw s === "TOO_SHORT" ? new Kh("TOO_SHORT") : new Kh("NOT_A_NUMBER");
		return {};
	}
	var c = wg(a, t.defaultCountry, t.defaultCallingCode, r), l = c.country, u = c.nationalNumber, d = c.countryCallingCode, f = c.countryCallingCodeSource, p = c.carrierCode;
	if (!r.hasSelectedNumberingPlan()) {
		if (t.v2) throw new Kh("INVALID_COUNTRY");
		return {};
	}
	if (!u || u.length < 2) {
		/* istanbul ignore if */
		if (t.v2) throw new Kh("TOO_SHORT");
		return {};
	}
	if (u.length > 17) {
		if (t.v2) throw new Kh("TOO_LONG");
		return {};
	}
	if (t.v2) {
		var m = new Oh(d, u, r.metadata);
		return l && (m.country = l), p && (m.carrierCode = p), o && (m.ext = o), m.__countryCallingCodeSource = f, m;
	}
	var h = (t.extended ? r.hasSelectedNumberingPlan() : l) ? vm(u, r.nationalNumberPattern()) : !1;
	return t.extended ? {
		country: l,
		countryCallingCode: d,
		carrierCode: p,
		valid: h,
		possible: h ? !0 : !!(t.extended === !0 && r.possibleLengths() && _m(u, r)),
		phone: u,
		ext: o
	} : h ? Cg(l, u, o) : {};
}
function xg(e, t, n) {
	if (e) {
		if (e.length > gg) {
			if (n) throw new Kh("TOO_LONG");
			return;
		}
		if (t === !1) return e;
		var r = e.search(_g);
		if (!(r < 0)) return e.slice(r).replace(vg, "");
	}
}
function Sg(e, t, n) {
	var r = hg(e, { extractFormattedPhoneNumber: function(e) {
		return xg(e, n, t);
	} });
	if (!r) return {};
	if (!ch(r)) return lh(r) ? { error: "TOO_SHORT" } : {};
	var i = Jh(r);
	return i.ext ? i : { number: r };
}
function Cg(e, t, n) {
	var r = {
		country: e,
		phone: t
	};
	return n && (r.ext = n), r;
}
function wg(e, t, n, r) {
	var i = Jm(eg(e), void 0, t, n, r.metadata), a = i.countryCallingCodeSource, o = i.countryCallingCode, s = i.number, c;
	if (o) r.selectNumberingPlan(o);
	else if (s && (t || n)) t ? (c = t, r.selectNumberingPlan(t), o = r.numberingPlan.callingCode()) : (r.selectNumberingPlan(n), o = n, yg && r.isNonGeographicCallingCode(o) && (c = "001"));
	else return {};
	if (!s) return {
		countryCallingCodeSource: a,
		countryCallingCode: o
	};
	var l = Wm(eg(s), void 0, r), u = l.nationalNumber, d = l.carrierCode, f = Um(o, {
		nationalNumber: u,
		metadata: r
	});
	return f && (c = f, f === "001" || r.selectNumberingPlan(c)), {
		country: c,
		countryCallingCode: o,
		countryCallingCodeSource: a,
		nationalNumber: u,
		carrierCode: d
	};
}
//#endregion
//#region node_modules/libphonenumber-js/es6/parsePhoneNumberWithError_.js
function Tg(e) {
	"@babel/helpers - typeof";
	return Tg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Tg(e);
}
function Eg(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Dg(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Eg(Object(n), !0).forEach(function(t) {
			Og(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Eg(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Og(e, t, n) {
	return (t = kg(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function kg(e) {
	var t = Ag(e, "string");
	return Tg(t) == "symbol" ? t : t + "";
}
function Ag(e, t) {
	if (Tg(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Tg(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function jg(e, t, n) {
	return bg(e, Dg(Dg({}, t), {}, { v2: !0 }), n);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/normalizeArguments.js
function Mg(e) {
	"@babel/helpers - typeof";
	return Mg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Mg(e);
}
function Ng(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Pg(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ng(Object(n), !0).forEach(function(t) {
			Fg(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ng(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Fg(e, t, n) {
	return (t = Ig(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ig(e) {
	var t = Lg(e, "string");
	return Mg(t) == "symbol" ? t : t + "";
}
function Lg(e, t) {
	if (Mg(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Mg(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Rg(e, t) {
	return Ug(e) || Hg(e, t) || Bg(e, t) || zg();
}
function zg() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Bg(e, t) {
	if (e) {
		if (typeof e == "string") return Vg(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vg(e, t) : void 0;
	}
}
function Vg(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Hg(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Ug(e) {
	if (Array.isArray(e)) return e;
}
function Wg(e) {
	var t = Rg(Array.prototype.slice.call(e), 4), n = t[0], r = t[1], i = t[2], a = t[3], o, s, c;
	if (typeof n == "string") o = n;
	else throw TypeError("A text for parsing must be a string.");
	if (!r || typeof r == "string") a ? (s = i, c = a) : (s = void 0, c = i), r && (s = Pg({ defaultCountry: r }, s));
	else if (Vp(r)) i ? (s = r, c = i) : c = r;
	else throw Error(`Invalid second argument: ${r}`);
	return {
		text: o,
		options: s,
		metadata: c
	};
}
//#endregion
//#region node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
function Gg(e) {
	"@babel/helpers - typeof";
	return Gg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Gg(e);
}
function Kg(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function qg(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Kg(Object(n), !0).forEach(function(t) {
			Jg(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kg(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Jg(e, t, n) {
	return (t = Yg(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Yg(e) {
	var t = Xg(e, "string");
	return Gg(t) == "symbol" ? t : t + "";
}
function Xg(e, t) {
	if (Gg(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Gg(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Zg(e, t, n) {
	t && t.defaultCountry && !cm(t.defaultCountry, n) && (t = qg(qg({}, t), {}, { defaultCountry: void 0 }));
	try {
		return jg(e, t, n);
	} catch (e) {
		/* istanbul ignore else */
		if (!(e instanceof Kh)) throw e;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/isValidPhoneNumber.js
function Qg(e) {
	"@babel/helpers - typeof";
	return Qg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Qg(e);
}
function $g(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function e_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? $g(Object(n), !0).forEach(function(t) {
			t_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $g(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function t_(e, t, n) {
	return (t = n_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function n_(e) {
	var t = r_(e, "string");
	return Qg(t) == "symbol" ? t : t + "";
}
function r_(e, t) {
	if (Qg(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Qg(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function i_() {
	var e = Wg(arguments), t = e.text, n = e.options, r = e.metadata;
	n = e_(e_({}, n), {}, { extract: !1 });
	var i = Zg(t, n, r);
	return i && i.isValid() || !1;
}
//#endregion
//#region node_modules/libphonenumber-js/min/exports/isValidPhoneNumber.js
function a_() {
	return Rp(i_, arguments);
}
//#endregion
//#region components/widget/tabs/profile-tab/validators.ts
var o_ = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function s_(e) {
	return e ? o_.test(e.trim()) ? null : "invalidEmail" : null;
}
function c_(e) {
	if (!e) return null;
	let t = e.trim();
	return t.startsWith("+") && a_(t) ? null : "invalidPhone";
}
function l_(e, t) {
	return t == null || t === "" ? null : e.key === "email" ? s_(t) : e.key === "phone" ? c_(t) : null;
}
//#endregion
//#region components/widget/tabs/profile-tab/index.tsx
function u_({ isDummy: e }) {
	let t = H("profile"), n = H("tabs"), r = De(), { config: i } = fe(), a = i.localeStrategy !== "DEFAULT", { data: o, loading: s, error: c, refetch: l } = Ut({ skip: e }), u = o?.visitorProfile, [d, { loading: f }] = Gt(), [p, { loading: m }] = At(), { apply: h, saving: g } = Ip(u, t), [_, v] = X({}), [y, b] = X(!1), [x, S] = X(!1), [C, w] = X(null), [T, E] = X({});
	J(() => {
		u && (y || v(Oo(u)));
	}, [u, y]);
	let { avatarField: O, regularFields: A } = et(() => u ? {
		avatarField: u.fields.find((e) => e.type === "AVATAR") ?? null,
		regularFields: u.fields.filter((e) => e.type !== "AVATAR")
	} : {
		avatarField: null,
		regularFields: []
	}, [u]), j = q((e, t) => {
		v((n) => ({
			...n,
			[e]: t
		})), b(!0), S(!1), w(null), E((t) => {
			if (!t[e]) return t;
			let n = { ...t };
			return delete n[e], n;
		});
	}, []), M = q(() => {
		u && (v(Oo(u)), b(!1), w(null), E({}));
	}, [u]), N = q(async () => {
		if (!u) return;
		let e = {};
		for (let n of u.fields) {
			if (n.pinned) continue;
			let r = _[n.key] ?? null;
			if (n.required && ko(r)) {
				e[n.key] = t("requiredHint");
				continue;
			}
			let i = l_(n, r);
			i && (e[n.key] = t(i));
		}
		if (Object.keys(e).length > 0) {
			E(e), w(t("errorFieldInvalid"));
			return;
		}
		let n = jo(u.fields, _);
		if (n.length !== 0) {
			w(null), E({});
			try {
				let e = (await d({
					variables: { input: { fields: n } },
					update: (e, { data: t }) => {
						let n = t?.updateVisitorProfile;
						n && e.writeQuery({
							query: Ht,
							data: { visitorProfile: n }
						});
					}
				})).data?.updateVisitorProfile;
				e && (v(Oo(e)), b(!1), S(!0), setTimeout(() => S(!1), 2400));
			} catch (e) {
				let n = Np(e);
				if (n === "fieldInvalid") {
					let n = Pp(e);
					n && E({ [n]: t("errorFieldInvalid") });
				}
				w(t(Fp(n)));
			}
		}
	}, [
		u,
		t,
		d,
		_
	]), P = q(async (e) => {
		if (O) {
			if (w(null), !ea.has(e.type) || !e.type.startsWith("image/")) {
				w(t("errorGeneric"));
				return;
			}
			if (e.size > 10485760) {
				w(t("errorGeneric"));
				return;
			}
			try {
				let { base64: t } = await $i(e), n = (await p({ variables: { input: {
					filename: e.name,
					mimetype: e.type,
					dataBase64: t
				} } })).data?.uploadVisitorMedia?.url;
				if (!n) throw Error("empty upload response");
				j(O.key, n);
			} catch {
				w(t("errorGeneric"));
			}
		}
	}, [
		O,
		j,
		t,
		p
	]);
	if (e) return /* @__PURE__ */ Z(re, {
		className: "flex-1",
		children: /* @__PURE__ */ Q("div", {
			className: "flex flex-col gap-3 px-4 py-6",
			children: [/* @__PURE__ */ Z("h1", {
				className: "text-lg font-semibold text-wx-fg",
				children: n("profile")
			}), /* @__PURE__ */ Z("p", {
				className: "text-sm text-wx-fg-muted",
				children: t("subtitle")
			})]
		})
	});
	if (s) return /* @__PURE__ */ Z(re, {
		className: "flex-1",
		children: /* @__PURE__ */ Q("div", {
			className: "flex flex-col gap-4 px-5 py-6",
			"aria-busy": "true",
			children: [
				/* @__PURE__ */ Q("div", {
					className: "mx-auto flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ Z(G, { className: "h-24 w-24 rounded-full" }), /* @__PURE__ */ Z(G, { className: "h-4 w-32 rounded" })]
				}),
				/* @__PURE__ */ Z(G, { className: "h-9 w-full rounded-wx-sm" }),
				/* @__PURE__ */ Z(G, { className: "h-9 w-full rounded-wx-sm" }),
				/* @__PURE__ */ Z(G, { className: "h-9 w-full rounded-wx-sm" }),
				/* @__PURE__ */ Z("span", {
					className: "sr-only",
					children: t("loading")
				})
			]
		})
	});
	if (c || !u) return /* @__PURE__ */ Z(re, {
		className: "flex-1",
		children: /* @__PURE__ */ Q("div", {
			className: "flex flex-col gap-3 px-5 py-6",
			children: [/* @__PURE__ */ Z("p", {
				className: "text-sm text-wx-danger",
				children: t("loadError")
			}), /* @__PURE__ */ Z("button", {
				type: "button",
				onClick: () => l(),
				className: "self-start rounded-full bg-wx-bg-elevated px-3 py-1.5 text-sm text-wx-fg hover:bg-wx-bg-elevated-2",
				children: t("retry")
			})]
		})
	});
	let F = O ? _[O.key] ?? null : null, I = Mo(u, _);
	return /* @__PURE__ */ Q("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ Z(re, {
			className: "min-h-0 flex-1",
			children: /* @__PURE__ */ Q("form", {
				id: "wx-profile-form",
				onSubmit: (e) => {
					e.preventDefault(), N();
				},
				className: "flex flex-col px-5 pt-2 pb-4",
				children: [
					O && /* @__PURE__ */ Z(To, {
						field: O,
						value: F,
						uploading: m,
						onPick: P,
						onClear: () => j(O.key, null),
						displayName: I,
						t
					}),
					A.length > 0 && /* @__PURE__ */ Z(kp, {
						eyebrow: t("title"),
						children: A.map((e) => /* @__PURE__ */ Z(Op, {
							field: e,
							value: _[e.key] ?? null,
							onChange: (t) => j(e.key, t),
							error: T[e.key],
							t
						}, e.key))
					}),
					!O && A.length === 0 && /* @__PURE__ */ Z("p", {
						className: "py-6 text-center text-sm text-wx-fg-muted",
						children: t("noFields")
					}),
					/* @__PURE__ */ Z(Mp, {
						profile: u,
						locale: r,
						languageEditable: a,
						prefSaving: g,
						applyPref: h,
						onNotificationError: (e) => w(e ? t(e) : null),
						t
					}),
					C && /* @__PURE__ */ Q("p", {
						className: "mt-4 flex items-start gap-1.5 rounded-wx-sm bg-wx-danger/10 px-3 py-2 text-xs text-wx-danger",
						children: [/* @__PURE__ */ Z(D, {
							size: 13,
							"aria-hidden": "true",
							className: "mt-0.5 shrink-0"
						}), /* @__PURE__ */ Z("span", { children: C })]
					}),
					x && !C && /* @__PURE__ */ Q("p", {
						className: "mt-4 flex items-center gap-1.5 rounded-wx-sm bg-wx-success/10 px-3 py-2 text-xs text-wx-success",
						children: [/* @__PURE__ */ Z(k, {
							size: 13,
							"aria-hidden": "true"
						}), /* @__PURE__ */ Z("span", { children: t("saved") })]
					})
				]
			})
		}), y && /* @__PURE__ */ Q("div", {
			className: "flex items-center gap-2 border-t border-wx-border bg-wx-bg/95 px-4 py-3 backdrop-blur",
			children: [/* @__PURE__ */ Q("button", {
				type: "submit",
				form: "wx-profile-form",
				disabled: f,
				className: U("flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wx-primary px-4 py-2 text-sm font-semibold text-wx-primary-fg", "hover:bg-wx-primary-hover disabled:cursor-not-allowed disabled:opacity-60"),
				children: [f && /* @__PURE__ */ Z(Be, {
					size: 14,
					className: "animate-spin",
					"aria-hidden": "true"
				}), t(f ? "saving" : "save")]
			}), /* @__PURE__ */ Z("button", {
				type: "button",
				onClick: M,
				disabled: f,
				className: U("rounded-full bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg", "hover:bg-wx-bg-elevated-2 disabled:cursor-not-allowed disabled:opacity-60"),
				children: t("cancel")
			})]
		})]
	});
}
//#endregion
//#region components/widget/widget-launcher.tsx
function d_({ isOpen: e, onToggle: t, unreadCount: i = 0, position: o = "right", embedded: s = !1 }) {
	let c = H("launcher"), l = Ue(), u = Ue(), d = e ? u.parentHandlers : l.parentHandlers, f = !e && i > 0;
	return /* @__PURE__ */ Q(n.button, {
		type: "button",
		onClick: t,
		"aria-label": c(e ? "close" : "open"),
		whileHover: { scale: 1.05 },
		whileTap: { scale: .92 },
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 22
		},
		onHoverStart: d.onMouseEnter,
		onHoverEnd: d.onMouseLeave,
		...d,
		className: U(s ? "absolute" : "fixed", "bottom-4 z-50", o === "left" ? "left-4" : "right-4", "flex h-14 w-14 items-center justify-center rounded-full", "bg-wx-launcher-bg text-wx-launcher-fg", "shadow-[0_8px_24px_rgba(0,0,0,0.18)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-launcher-bg focus-visible:ring-offset-2 focus-visible:ring-offset-white"),
		children: [/* @__PURE__ */ Z(_r, {
			count: f ? i : 0,
			size: "md",
			className: "absolute -top-1 -right-1 z-10"
		}), /* @__PURE__ */ Z(b, {
			mode: "wait",
			initial: !1,
			children: e ? /* @__PURE__ */ Z(n.span, {
				initial: {
					opacity: 0,
					rotate: -90,
					scale: .7
				},
				animate: {
					opacity: 1,
					rotate: 0,
					scale: 1
				},
				exit: {
					opacity: 0,
					rotate: 90,
					scale: .7
				},
				transition: { duration: .18 },
				children: /* @__PURE__ */ Z(a, {
					ref: u.iconRef,
					size: 24
				})
			}, "x") : /* @__PURE__ */ Z(n.span, {
				initial: {
					opacity: 0,
					rotate: 90,
					scale: .7
				},
				animate: {
					opacity: 1,
					rotate: 0,
					scale: 1
				},
				exit: {
					opacity: 0,
					rotate: -90,
					scale: .7
				},
				transition: { duration: .18 },
				children: /* @__PURE__ */ Z(r, {
					ref: l.iconRef,
					size: 24,
					className: "[&_svg]:fill-wx-launcher-fg [&_svg]:stroke-wx-launcher-fg dark:[&_svg]:fill-wx-bg dark:[&_svg]:stroke-wx-bg"
				})
			}, "chat")
		})]
	});
}
//#endregion
//#region components/widget/widget-shell/helpers.ts
function f_(e) {
	if (typeof e != "string") return "auto";
	let t = e.toLowerCase();
	return t === "light" || t === "dark" || t === "auto" ? t : "auto";
}
function p_(e, t) {
	if (!e) return null;
	let n = t === "dark" ? e.dark : e.light, r = t === "dark" ? e.light : e.dark;
	return n ?? r ?? null;
}
function m_(e) {
	return e === "messages" ? { kind: "messages" } : e === "help" ? { kind: "help" } : e === "news" ? { kind: "news" } : e === "profile" ? { kind: "profile" } : { kind: "home" };
}
function h_(e) {
	switch (e.kind) {
		case "home": return 0;
		case "messages": return 1;
		case "help": return 2;
		case "help-category": return 2.5;
		case "help-article": return 2.75;
		case "news": return 3;
		case "news-article": return 3.25;
		case "profile": return 4;
	}
}
function g_(e) {
	return e.kind === "help-category" ? `help-category:${e.categoryId}` : e.kind === "help-article" ? `help-article:${e.slug}` : e.kind === "news-article" ? `news-article:${e.id}` : e.kind;
}
var __ = {
	enter: (e) => ({
		x: e > 0 ? 28 : e < 0 ? -28 : 0,
		opacity: 0
	}),
	center: {
		x: 0,
		opacity: 1
	},
	exit: (e) => ({
		x: e > 0 ? -28 : e < 0 ? 28 : 0,
		opacity: 0
	})
}, v_ = Ze(() => import("./widget-react-CAWxn8I0.js").then((e) => ({ default: e.HelpArticleView }))), y_ = Ze(() => import("./widget-react-DtOeNw5z.js").then((e) => ({ default: e.NewsArticleView }))), b_ = "wexio:panel-expanded", x_ = 32, S_ = 112;
function C_() {
	if (typeof window > "u") return !1;
	try {
		return localStorage.getItem(b_) === "1";
	} catch {
		return !1;
	}
}
function w_(e, t) {
	let n = "";
	if (e) try {
		n = (new DOMParser().parseFromString(e, "text/html").body.textContent ?? "").replace(/\s+/g, " ").trim();
	} catch {
		n = e.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
	}
	if (n) return n;
	if (t.length === 0) return "New message";
	let r = t[0]?.mimetype ?? "", i = r.startsWith("image/") ? "Image" : r.startsWith("video/") ? "Video" : r.startsWith("audio/") ? "Voice message" : "Attachment";
	return t.length > 1 ? `${i} +${t.length - 1}` : i;
}
function T_() {
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-1 items-center justify-center",
		children: /* @__PURE__ */ Z("div", { className: "border-wx-border border-t-wx-primary h-5 w-5 animate-spin rounded-full border-2" })
	});
}
function E_() {
	return /* @__PURE__ */ Z(Dr, { children: /* @__PURE__ */ Z(D_, {}) });
}
function D_() {
	let e = H("header"), t = De(), r = m(), { mode: i, config: a, isDummy: o } = fe(), s = a.theme?.launcherPosition === "LEFT_BOTTOM", c = r.embedded ?? !1, { muted: l, toggleMuted: u, playInbound: d, playOutbound: f } = Yt(a.sounds), { identity: h, prefill: g } = dn(r), [_, v] = X(null), [y, x] = X(0);
	J(() => {
		if (typeof window > "u") return;
		let e = (e) => {
			!e.data || e.data.type !== "wexio:shutdown:v1" || (ln(), v(null), w(null), x((e) => e + 1));
		};
		return window.addEventListener("message", e), () => window.removeEventListener("message", e);
	}, []);
	let S = un({
		enabled: i === "production" && !o,
		identity: h ?? _,
		epoch: y
	}), [C, w] = X(null), T = C ?? S, D = bn({ enabled: !!a.features.profile && !o && !!T.token });
	J(() => {
		if (typeof window > "u") return;
		let e = window;
		e.__wexioNotifyDebug = () => {
			let e = {
				prefEnabled: D.desktopNotifications,
				permission: typeof Notification < "u" ? Notification.permission : "(unsupported)",
				prefsLoaded: D.loaded,
				featureEnabled: !!a.features.profile,
				sessionToken: !!T.token
			};
			return console.log("[wexio] notify state:", e), e;
		}, e.__wexioTestNotify = () => {
			if (typeof Notification > "u") return console.warn("[wexio] Notification API not available in this context"), "unsupported";
			if (Notification.permission !== "granted") return console.warn("[wexio] permission not granted:", Notification.permission), Notification.permission;
			try {
				let e = new Notification("Wexio test", {
					body: "If you can see this, notifications work.",
					tag: "wexio-test"
				});
				return e.onshow = () => console.log("[wexio] test notification: onshow fired"), e.onerror = (e) => console.warn("[wexio] test notification: onerror", e), e.onclose = () => console.log("[wexio] test notification: onclose"), console.log("[wexio] test notification posted to browser"), "posted";
			} catch (e) {
				return console.warn("[wexio] test notification threw:", e), e;
			}
		};
	}, [
		D.desktopNotifications,
		D.loaded,
		a.features.profile,
		T.token
	]);
	let O = Zt(f_(a.themeMode), {
		preference: D.themeMode,
		allowed: D.themeModeEditable
	}), k = p_(a.organizationLogo, O), A = k ?? (o ? p(`/logo-${O}.png`) : null), [j, M] = X(() => m_(Fn(a.defaultTab, a.features)));
	J(() => {
		Nn(Mn(j), a.features) || M(m_(Fn(a.defaultTab, a.features)));
	}, [a.features, a.defaultTab]);
	let [N, P] = X(!1), [F, I] = X(C_);
	J(() => {
		try {
			localStorage.setItem(b_, F ? "1" : "0");
		} catch {}
	}, [F]);
	let [ee, te] = X(null), [ne, L] = X(!1);
	J(() => {
		N && L(!0);
	}, [N]);
	let R = En({
		chatId: T.chatId,
		isDummy: o
	}), re = E(), ie = Y(null), [z, ae] = X([]), [B, oe] = X(null);
	J(() => {
		ae([]);
	}, [T.chatId]), J(() => {
		a.features.profile && (!T.peopleId || !T.token || re.refetchQueries({ include: [Ht] }));
	}, [T.peopleId]);
	let se = q((e) => {
		ae((t) => t.some((t) => t.id === e.id) ? t : [...t, e]);
	}, []), ce = q((e, t) => {
		ae((n) => n.map((n) => n.id === e ? {
			...t,
			clientKey: t.clientKey ?? n.clientKey ?? e
		} : n));
	}, []), le = Y((e) => (ie.current = e, () => {
		ie.current === e && (ie.current = null);
	})).current;
	Sn({
		chatId: T.chatId,
		token: T.token,
		enabled: !o && i === "production",
		onMessage: (e) => {
			if (ie.current?.(e), e.kind === "read-receipt") {
				R.noteRead(e.readReceipt?.messageIds ?? []);
				return;
			}
			if (e.kind === "typing") return;
			let t = (e.from ?? e.sender)?.kind;
			if (t === "visitor") return;
			d();
			let n = e.from ?? e.sender, r = Array.isArray(e.buttons) ? e.buttons.map((e) => ({
				text: e.label,
				payload: e.value
			})) : void 0, i = t === "ai" || t === "bot" ? gt : n?.name ?? "", a = e.sentAt ?? (/* @__PURE__ */ new Date()).toISOString(), o = (() => {
				try {
					return new Date(a).toLocaleTimeString(void 0, {
						hour: "numeric",
						minute: "2-digit"
					});
				} catch {
					return "";
				}
			})(), s = e.media, c = io(s), l = s && typeof s == "object" && !Array.isArray(s) ? s.caption : void 0;
			se({
				id: e.externalMessageId,
				direction: "OUTBOUND",
				text: e.text || (typeof l == "string" ? l : ""),
				ageLabel: o,
				sender: {
					kind: t ?? "operator",
					name: i,
					...n?.avatar ? { avatar: n.avatar } : {}
				},
				...c.length > 0 ? { media: c } : {},
				...r ? { buttons: r } : {},
				deliveryStatus: "DELIVERED"
			}), R.noteInbound(e);
			let u = typeof document < "u" && !document.hidden, f = N && u && j.kind === "messages", p = D.desktopNotifications, m = typeof Notification < "u" ? Notification.permission : "(unsupported)", h = m === "granted", g = p && h && !f;
			if (console.log("[wexio] inbound:", {
				id: e.externalMessageId,
				kind: e.kind,
				from: i,
				prefEnabled: p,
				permission: m,
				isOpen: N,
				docVisible: u,
				route: j.kind,
				activelyReadingMessages: f,
				willNotify: g
			}), p && h && !f) try {
				let t = typeof l == "string" ? l : "", r = w_(e.text || t, c), a = n?.avatar ?? k ?? void 0, o = new Notification(i || "New message", {
					body: r,
					tag: e.externalMessageId,
					icon: a
				});
				o.onclick = () => {
					try {
						window.focus();
					} catch {}
					P(!0), M({ kind: "messages" }), o.close();
				};
			} catch (e) {
				console.warn("[wexio] desktop notification failed:", e);
			}
			else p && !h && console.warn("[wexio] desktop notifications enabled but browser permission is not granted; current value:", m);
			T.chatId && re.writeQuery({
				query: Lt,
				variables: { chatId: T.chatId },
				data: {
					__typename: "Query",
					visitorChatRecentInbound: {
						__typename: "VisitorChatRecentInbound",
						id: e.externalMessageId,
						text: e.text ?? null,
						createdAt: e.sentAt ?? (/* @__PURE__ */ new Date()).toISOString(),
						sender: {
							__typename: "VisitorUnreadSender",
							kind: n?.kind ?? "operator",
							name: n?.name ?? "",
							avatar: n?.avatar ?? null
						}
					}
				}
			});
		}
	});
	let [ue] = Ct(), de = (j.kind === "messages" || j.kind === "help-article" || j.kind === "news-article") && F, pe = de ? 640 : 420, V = de ? 860 : 670, [me, he] = X(null);
	J(() => {
		if (typeof window > "u") return;
		let e = () => {
			let e = window.innerWidth, t = window.innerHeight;
			he((n) => n && n.w === e && n.h === t ? n : {
				w: e,
				h: t
			});
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []);
	let ge = c || !me ? pe : Math.min(pe, me.w - x_), _e = c || !me ? V : Math.min(V, me.h - S_), ve = Y(h_(j)), ye = (() => {
		let e = h_(j), t = ve.current;
		return ve.current = e, e === t ? 0 : e > t ? 1 : -1;
	})();
	J(() => {
		let e = N ? pe : 72, t = N ? V : 72;
		r.onResize(e, t);
	}, [
		N,
		pe,
		V,
		r
	]);
	let be = () => {
		P(!1), i === "production" && r.onClose();
	}, xe = async (e, t) => {
		if (o) oe(t), R.clear();
		else if (T.chatId) try {
			await ue({ variables: { input: { text: t } } });
		} catch {}
		M({ kind: "messages" }), P(!0), f();
	}, Se = () => {
		M({ kind: "messages" }), P(!0);
	}, Ce = !a.branding?.hidden, we = Pn(a.features), Te = An(j) && we > 1, Ee = j.kind === "home", Oe = Mn(j);
	return /* @__PURE__ */ Q(tt, { children: [
		/* @__PURE__ */ Q(n.div, {
			"aria-hidden": !N,
			initial: !1,
			animate: N ? {
				opacity: 1,
				y: 0,
				scale: 1,
				pointerEvents: "auto",
				width: ge,
				height: _e
			} : {
				opacity: 0,
				y: 16,
				scale: .98,
				pointerEvents: "none",
				width: ge,
				height: _e
			},
			transition: {
				opacity: {
					type: "spring",
					stiffness: 320,
					damping: 30
				},
				y: {
					type: "spring",
					stiffness: 320,
					damping: 30
				},
				scale: {
					type: "spring",
					stiffness: 320,
					damping: 30
				},
				width: {
					type: "spring",
					stiffness: 300,
					damping: 32
				},
				height: {
					type: "spring",
					stiffness: 300,
					damping: 32
				}
			},
			"data-wx-panel": !0,
			className: U("isolate flex flex-col overflow-hidden bg-wx-bg text-wx-fg", c ? "absolute" : "fixed", "bottom-24 rounded-wx-xl", c ? "max-w-[calc(100%-2rem)] max-h-[calc(100%-7rem)]" : "max-w-[calc(100vw-2rem)] max-h-[calc(100dvh-7rem)]", s ? "left-4" : "right-4"),
			children: [
				Ee && /* @__PURE__ */ Z("div", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(99,102,241,0.22),transparent_55%),linear-gradient(to_bottom,var(--wx-bg-elevated-2)_0%,var(--wx-bg-elevated)_40%,var(--wx-bg)_75%)] dark:bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(99,102,241,0.35),transparent_55%),linear-gradient(to_bottom,var(--wx-bg-elevated-2)_0%,var(--wx-bg-elevated)_40%,var(--wx-bg)_75%)]"
				}),
				/* @__PURE__ */ Z(W, {
					route: j,
					onPop: () => M(jn(j, a.features)),
					onClose: be
				}),
				/* @__PURE__ */ Z("main", {
					className: "relative flex flex-1 flex-col overflow-hidden",
					children: ne && /* @__PURE__ */ Z(b, {
						mode: "sync",
						initial: !1,
						custom: ye,
						children: /* @__PURE__ */ Q(n.div, {
							custom: ye,
							variants: __,
							initial: "enter",
							animate: "center",
							exit: "exit",
							transition: {
								x: {
									type: "tween",
									duration: .18,
									ease: [
										.32,
										.72,
										0,
										1
									]
								},
								opacity: {
									duration: .14,
									ease: "easeOut"
								}
							},
							style: { willChange: "transform, opacity" },
							className: "absolute inset-0 flex flex-col overflow-hidden",
							children: [
								j.kind === "home" && /* @__PURE__ */ Z(Zi, {
									config: a,
									organizationLogoUrl: k,
									onClose: be,
									onOpenTab: (e) => M({ kind: e }),
									onOpenNewsArticle: (e) => M({
										kind: "news-article",
										id: e
									}),
									onOpenHelpArticle: (e) => M({
										kind: "help-article",
										slug: e,
										from: "search"
									}),
									isDummy: o,
									chatId: T.chatId ?? null
								}),
								j.kind === "messages" && /* @__PURE__ */ Z(wo, {
									isDummy: o,
									chatId: T.chatId,
									token: T.token,
									prechatForm: a.prechatForm,
									messenger: a.messenger,
									organizationLogoUrl: k,
									organizationName: a.messenger?.title ?? "",
									isOpen: N,
									onInbound: d,
									onOutbound: f,
									registerRealtimeHandler: le,
									unreadCount: R.count,
									clearUnread: R.clear,
									liveMessages: z,
									appendLiveMessage: se,
									replaceLiveMessage: ce,
									initialVisitorMessage: B,
									onInitialVisitorMessageSent: () => oe(null),
									visitorIdentity: h,
									visitorPrefill: g,
									security: a.security,
									verified: T.verified,
									onGoogleCredential: (e) => v({ googleIdToken: e }),
									onPasskeySession: (e) => {
										rn(e), w({
											token: e.token,
											chatId: e.chatId,
											peopleId: e.peopleId,
											displayName: e.displayName,
											isAuthenticating: !1,
											error: null,
											verified: !0
										});
									},
									onInternalLink: (e) => {
										e.kind === "help-article" ? M({
											kind: "help-article",
											slug: e.slug,
											from: "search",
											locale: e.locale
										}) : e.kind === "news-article" && M({ kind: "news" });
									}
								}),
								j.kind === "help" && /* @__PURE__ */ Z(Vr, {
									isDummy: o,
									onOpenCategory: (e, t) => M({
										kind: "help-category",
										categoryId: e,
										categoryName: t?.name,
										categoryDescription: t?.description,
										categoryArticleCount: t?.articleCount
									}),
									onOpenArticle: (e) => M({
										kind: "help-article",
										slug: e,
										from: "search"
									})
								}),
								j.kind === "help-category" && /* @__PURE__ */ Z(Nr, {
									categoryId: j.categoryId,
									categoryName: j.categoryName,
									categoryDescription: j.categoryDescription,
									categoryArticleCount: j.categoryArticleCount,
									isDummy: o,
									onOpenCategory: (e, t) => M({
										kind: "help-category",
										categoryId: e,
										categoryName: t?.name,
										categoryDescription: t?.description,
										categoryArticleCount: t?.articleCount
									}),
									onOpenArticle: (e) => M({
										kind: "help-article",
										slug: e,
										from: "category",
										fromCategoryId: j.categoryId
									})
								}),
								j.kind === "help-article" && /* @__PURE__ */ Z(Ye, {
									fallback: /* @__PURE__ */ Z(T_, {}),
									children: /* @__PURE__ */ Z(v_, {
										slug: j.slug,
										locale: j.locale ?? t,
										isDummy: o,
										onHandoff: () => M({ kind: "messages" }),
										onOpenArticle: (e) => M({
											kind: "help-article",
											slug: e,
											from: "search"
										}),
										onOpenTranslation: (e, t) => M({
											kind: "help-article",
											slug: e,
											locale: t,
											from: j.from,
											fromCategoryId: j.fromCategoryId
										}),
										onTitleResolved: te
									})
								}),
								j.kind === "news" && /* @__PURE__ */ Z(Le, {
									isDummy: o,
									onOpenArticle: (e) => M({
										kind: "news-article",
										id: e
									})
								}),
								j.kind === "news-article" && /* @__PURE__ */ Z(Ye, {
									fallback: /* @__PURE__ */ Z(T_, {}),
									children: /* @__PURE__ */ Z(y_, {
										id: j.id,
										isDummy: o,
										onOpenRelated: (e) => M({
											kind: "news-article",
											id: e
										}),
										onTitleResolved: te
									})
								}),
								j.kind === "profile" && /* @__PURE__ */ Z(u_, { isDummy: o })
							]
						}, g_(j))
					})
				}),
				Te && /* @__PURE__ */ Z(yr, {
					active: Oe,
					features: a.features,
					onChange: (e) => {
						Qe(() => {
							M({ kind: e === "messages" ? "messages" : e });
						});
					},
					unreadCount: R.count
				}),
				Ce && /* @__PURE__ */ Z(Cr, {})
			]
		}),
		/* @__PURE__ */ Z(Lr, {
			message: N ? null : R.lastMessage,
			onOpen: Se,
			onDismiss: R.clear,
			onSendButton: xe,
			position: s ? "left" : "right",
			embedded: c
		}),
		/* @__PURE__ */ Z(d_, {
			isOpen: N,
			onToggle: () => P((e) => !e),
			unreadCount: R.count,
			position: s ? "left" : "right",
			embedded: c
		})
	] });
	function W({ route: t, onPop: n, onClose: r }) {
		if (t.kind === "messages") {
			let t = we > 1;
			return /* @__PURE__ */ Z(Tr, {
				title: a.messenger?.title?.trim() || "Gaia",
				subtitle: a.messenger?.description?.trim() || e("conversationSubtitle"),
				organizationLogoUrl: A,
				muted: l,
				onToggleMute: u,
				onBack: t ? n : void 0,
				onClose: r,
				expanded: de,
				onToggleExpand: () => I((e) => !e)
			});
		}
		return t.kind === "help" ? /* @__PURE__ */ Z(Br, {
			title: e("helpTitle"),
			onClose: r
		}) : t.kind === "help-category" ? /* @__PURE__ */ Z(Br, {
			title: e("helpTitle"),
			onBack: n,
			onClose: r
		}) : t.kind === "help-article" ? /* @__PURE__ */ Z(Br, {
			title: ee ?? e("helpTitle"),
			onBack: n,
			onClose: r,
			expanded: de,
			onToggleExpand: () => I((e) => !e)
		}) : t.kind === "news" ? /* @__PURE__ */ Z(Br, {
			title: e("newsTitle"),
			onClose: r
		}) : t.kind === "news-article" ? /* @__PURE__ */ Z(Br, {
			title: ee ?? e("newsTitle"),
			onBack: n,
			onClose: r,
			expanded: de,
			onToggleExpand: () => I((e) => !e)
		}) : null;
	}
}
//#endregion
//#region \0rolldown_dynamic_import_helper.js
var O_ = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, k_ = /* @__PURE__ */ u(((e, t) => {
	var n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, o = (e, t) => {
		for (var r in t) n(e, r, {
			get: t[r],
			enumerable: !0
		});
	}, s = (e, t, o, s) => {
		if (t && typeof t == "object" || typeof t == "function") for (let c of i(t)) !a.call(e, c) && c !== o && n(e, c, {
			get: () => t[c],
			enumerable: !(s = r(t, c)) || s.enumerable
		});
		return e;
	}, c = (e) => s(n({}, "__esModule", { value: !0 }), e), l = {};
	o(l, {
		RequestCookies: () => y,
		ResponseCookies: () => b,
		parseCookie: () => d,
		parseSetCookie: () => f,
		stringifyCookie: () => u
	}), t.exports = c(l);
	function u(e) {
		let t = [
			"path" in e && e.path && `Path=${e.path}`,
			"expires" in e && (e.expires || e.expires === 0) && `Expires=${(typeof e.expires == "number" ? new Date(e.expires) : e.expires).toUTCString()}`,
			"maxAge" in e && typeof e.maxAge == "number" && `Max-Age=${e.maxAge}`,
			"domain" in e && e.domain && `Domain=${e.domain}`,
			"secure" in e && e.secure && "Secure",
			"httpOnly" in e && e.httpOnly && "HttpOnly",
			"sameSite" in e && e.sameSite && `SameSite=${e.sameSite}`,
			"partitioned" in e && e.partitioned && "Partitioned",
			"priority" in e && e.priority && `Priority=${e.priority}`
		].filter(Boolean), n = `${e.name}=${encodeURIComponent(e.value ?? "")}`;
		return t.length === 0 ? n : `${n}; ${t.join("; ")}`;
	}
	function d(e) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e.split(/; */)) {
			if (!n) continue;
			let e = n.indexOf("=");
			if (e === -1) {
				t.set(n, "true");
				continue;
			}
			let [r, i] = [n.slice(0, e), n.slice(e + 1)];
			try {
				t.set(r, decodeURIComponent(i ?? "true"));
			} catch {}
		}
		return t;
	}
	function f(e) {
		if (!e) return;
		let [[t, n], ...r] = d(e), { domain: i, expires: a, httponly: o, maxage: s, path: c, samesite: l, secure: u, partitioned: f, priority: m } = Object.fromEntries(r.map(([e, t]) => [e.toLowerCase().replace(/-/g, ""), t]));
		return p({
			name: t,
			value: decodeURIComponent(n),
			domain: i,
			...a && { expires: new Date(a) },
			...o && { httpOnly: !0 },
			...typeof s == "string" && { maxAge: Number(s) },
			path: c,
			...l && { sameSite: h(l) },
			...u && { secure: !0 },
			...m && { priority: _(m) },
			...f && { partitioned: !0 }
		});
	}
	function p(e) {
		let t = {};
		for (let n in e) e[n] && (t[n] = e[n]);
		return t;
	}
	var m = [
		"strict",
		"lax",
		"none"
	];
	function h(e) {
		return e = e.toLowerCase(), m.includes(e) ? e : void 0;
	}
	var g = [
		"low",
		"medium",
		"high"
	];
	function _(e) {
		return e = e.toLowerCase(), g.includes(e) ? e : void 0;
	}
	function v(e) {
		if (!e) return [];
		var t = [], n = 0, r, i, a, o, s;
		function c() {
			for (; n < e.length && /\s/.test(e.charAt(n));) n += 1;
			return n < e.length;
		}
		function l() {
			return i = e.charAt(n), i !== "=" && i !== ";" && i !== ",";
		}
		for (; n < e.length;) {
			for (r = n, s = !1; c();) if (i = e.charAt(n), i === ",") {
				for (a = n, n += 1, c(), o = n; n < e.length && l();) n += 1;
				n < e.length && e.charAt(n) === "=" ? (s = !0, n = o, t.push(e.substring(r, a)), r = n) : n = a + 1;
			} else n += 1;
			(!s || n >= e.length) && t.push(e.substring(r, e.length));
		}
		return t;
	}
	var y = class {
		constructor(e) {
			this._parsed = /* @__PURE__ */ new Map(), this._headers = e;
			let t = e.get("cookie");
			if (t) {
				let e = d(t);
				for (let [t, n] of e) this._parsed.set(t, {
					name: t,
					value: n
				});
			}
		}
		[Symbol.iterator]() {
			return this._parsed[Symbol.iterator]();
		}
		get size() {
			return this._parsed.size;
		}
		get(...e) {
			let t = typeof e[0] == "string" ? e[0] : e[0].name;
			return this._parsed.get(t);
		}
		getAll(...e) {
			let t = Array.from(this._parsed);
			if (!e.length) return t.map(([e, t]) => t);
			let n = typeof e[0] == "string" ? e[0] : e[0]?.name;
			return t.filter(([e]) => e === n).map(([e, t]) => t);
		}
		has(e) {
			return this._parsed.has(e);
		}
		set(...e) {
			let [t, n] = e.length === 1 ? [e[0].name, e[0].value] : e, r = this._parsed;
			return r.set(t, {
				name: t,
				value: n
			}), this._headers.set("cookie", Array.from(r).map(([e, t]) => u(t)).join("; ")), this;
		}
		delete(e) {
			let t = this._parsed, n = Array.isArray(e) ? e.map((e) => t.delete(e)) : t.delete(e);
			return this._headers.set("cookie", Array.from(t).map(([e, t]) => u(t)).join("; ")), n;
		}
		clear() {
			return this.delete(Array.from(this._parsed.keys())), this;
		}
		[Symbol.for("edge-runtime.inspect.custom")]() {
			return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
		}
		toString() {
			return [...this._parsed.values()].map((e) => `${e.name}=${encodeURIComponent(e.value)}`).join("; ");
		}
	}, b = class {
		constructor(e) {
			this._parsed = /* @__PURE__ */ new Map(), this._headers = e;
			let t = e.getSetCookie?.call(e) ?? e.get("set-cookie") ?? [], n = Array.isArray(t) ? t : v(t);
			for (let e of n) {
				let t = f(e);
				t && this._parsed.set(t.name, t);
			}
		}
		get(...e) {
			let t = typeof e[0] == "string" ? e[0] : e[0].name;
			return this._parsed.get(t);
		}
		getAll(...e) {
			let t = Array.from(this._parsed.values());
			if (!e.length) return t;
			let n = typeof e[0] == "string" ? e[0] : e[0]?.name;
			return t.filter((e) => e.name === n);
		}
		has(e) {
			return this._parsed.has(e);
		}
		set(...e) {
			let [t, n, r] = e.length === 1 ? [
				e[0].name,
				e[0].value,
				e[0]
			] : e, i = this._parsed;
			return i.set(t, S({
				name: t,
				value: n,
				...r
			})), x(i, this._headers), this;
		}
		delete(...e) {
			let [t, n] = typeof e[0] == "string" ? [e[0]] : [e[0].name, e[0]];
			return this.set({
				...n,
				name: t,
				value: "",
				expires: /* @__PURE__ */ new Date(0)
			});
		}
		[Symbol.for("edge-runtime.inspect.custom")]() {
			return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
		}
		toString() {
			return [...this._parsed.values()].map(u).join("; ");
		}
	};
	function x(e, t) {
		t.delete("set-cookie");
		for (let [, n] of e) {
			let e = u(n);
			t.append("set-cookie", e);
		}
	}
	function S(e = {
		name: "",
		value: ""
	}) {
		return typeof e.expires == "number" && (e.expires = new Date(e.expires)), e.maxAge && (e.expires = new Date(Date.now() + e.maxAge * 1e3)), (e.path === null || e.path === void 0) && (e.path = "/"), e;
	}
})), A_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		RequestCookies: function() {
			return n.RequestCookies;
		},
		ResponseCookies: function() {
			return n.ResponseCookies;
		},
		stringifyCookie: function() {
			return n.stringifyCookie;
		}
	});
	var n = k_();
})), j_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "ReflectAdapter", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = class {
		static get(e, t, n) {
			let r = Reflect.get(e, t, n);
			return typeof r == "function" ? r.bind(e) : r;
		}
		static set(e, t, n, r) {
			return Reflect.set(e, t, n, r);
		}
		static has(e, t) {
			return Reflect.has(e, t);
		}
		static deleteProperty(e, t) {
			return Reflect.deleteProperty(e, t);
		}
	};
})), M_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		bindSnapshot: function() {
			return o;
		},
		createAsyncLocalStorage: function() {
			return a;
		},
		createSnapshot: function() {
			return s;
		}
	});
	var n = Object.defineProperty(/* @__PURE__ */ Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
		value: "E504",
		enumerable: !1,
		configurable: !0
	}), r = class {
		disable() {
			throw n;
		}
		getStore() {}
		run() {
			throw n;
		}
		exit() {
			throw n;
		}
		enterWith() {
			throw n;
		}
		static bind(e) {
			return e;
		}
	}, i = typeof globalThis < "u" && globalThis.AsyncLocalStorage;
	function a() {
		return i ? new i() : new r();
	}
	function o(e) {
		return i ? i.bind(e) : r.bind(e);
	}
	function s() {
		return i ? i.snapshot() : function(e, ...t) {
			return e(...t);
		};
	}
})), N_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "workAsyncStorageInstance", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (0, M_().createAsyncLocalStorage)();
})), P_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "workAsyncStorage", {
		enumerable: !0,
		get: function() {
			return t.workAsyncStorageInstance;
		}
	});
	var t = N_();
})), F_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		ActionDidNotRevalidate: function() {
			return n;
		},
		ActionDidRevalidateDynamicOnly: function() {
			return i;
		},
		ActionDidRevalidateStaticAndDynamic: function() {
			return r;
		}
	});
	var n = 0, r = 1, i = 2;
})), I_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		MutableRequestCookiesAdapter: function() {
			return d;
		},
		ReadonlyRequestCookiesError: function() {
			return o;
		},
		RequestCookiesAdapter: function() {
			return s;
		},
		appendMutableCookies: function() {
			return u;
		},
		areCookiesMutableInCurrentPhase: function() {
			return p;
		},
		createCookiesWithMutableAccessCheck: function() {
			return f;
		},
		getModifiedCookieValues: function() {
			return l;
		},
		responseCookiesToRequestCookies: function() {
			return h;
		}
	});
	var n = A_(), r = j_(), i = P_(), a = F_(), o = class e extends Error {
		constructor() {
			super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
		}
		static callable() {
			throw new e();
		}
	}, s = class {
		static seal(e) {
			return new Proxy(e, { get(e, t, n) {
				switch (t) {
					case "clear":
					case "delete":
					case "set": return o.callable;
					default: return r.ReflectAdapter.get(e, t, n);
				}
			} });
		}
	}, c = Symbol.for("next.mutated.cookies");
	function l(e) {
		let t = e[c];
		return !t || !Array.isArray(t) || t.length === 0 ? [] : t;
	}
	function u(e, t) {
		let r = l(t);
		if (r.length === 0) return !1;
		let i = new n.ResponseCookies(e), a = i.getAll();
		for (let e of r) i.set(e);
		for (let e of a) i.set(e);
		return !0;
	}
	var d = class {
		static wrap(e, t) {
			let o = new n.ResponseCookies(new Headers());
			for (let t of e.getAll()) o.set(t);
			let s = [], l = /* @__PURE__ */ new Set(), u = () => {
				let e = i.workAsyncStorage.getStore();
				if (e && (e.pathWasRevalidated = a.ActionDidRevalidateStaticAndDynamic), s = o.getAll().filter((e) => l.has(e.name)), t) {
					let e = [];
					for (let t of s) {
						let r = new n.ResponseCookies(new Headers());
						r.set(t), e.push(r.toString());
					}
					t(e);
				}
			}, d = new Proxy(o, { get(e, t, n) {
				switch (t) {
					case c: return s;
					case "delete": return function(...t) {
						l.add(typeof t[0] == "string" ? t[0] : t[0].name);
						try {
							return e.delete(...t), d;
						} finally {
							u();
						}
					};
					case "set": return function(...t) {
						l.add(typeof t[0] == "string" ? t[0] : t[0].name);
						try {
							return e.set(...t), d;
						} finally {
							u();
						}
					};
					default: return r.ReflectAdapter.get(e, t, n);
				}
			} });
			return d;
		}
	};
	function f(e) {
		let t = new Proxy(e.mutableCookies, { get(n, i, a) {
			switch (i) {
				case "delete": return function(...r) {
					return m(e, "cookies().delete"), n.delete(...r), t;
				};
				case "set": return function(...r) {
					return m(e, "cookies().set"), n.set(...r), t;
				};
				default: return r.ReflectAdapter.get(n, i, a);
			}
		} });
		return t;
	}
	function p(e) {
		return e.phase === "action";
	}
	function m(e, t) {
		if (!p(e)) throw new o();
	}
	function h(e) {
		let t = new n.RequestCookies(new Headers());
		for (let n of e.getAll()) t.set(n);
		return t;
	}
})), L_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "workUnitAsyncStorageInstance", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (0, M_().createAsyncLocalStorage)();
})), R_ = /* @__PURE__ */ u(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		ACTION_HEADER: function() {
			return i;
		},
		FLIGHT_HEADERS: function() {
			return m;
		},
		NEXT_ACTION_NOT_FOUND_HEADER: function() {
			return x;
		},
		NEXT_ACTION_REVALIDATED_HEADER: function() {
			return w;
		},
		NEXT_DID_POSTPONE_HEADER: function() {
			return _;
		},
		NEXT_HMR_REFRESH_HASH_COOKIE: function() {
			return l;
		},
		NEXT_HMR_REFRESH_HEADER: function() {
			return c;
		},
		NEXT_HTML_REQUEST_ID_HEADER: function() {
			return C;
		},
		NEXT_INSTANT_PREFETCH_HEADER: function() {
			return f;
		},
		NEXT_INSTANT_TEST_COOKIE: function() {
			return p;
		},
		NEXT_IS_PRERENDER_HEADER: function() {
			return b;
		},
		NEXT_REQUEST_ID_HEADER: function() {
			return S;
		},
		NEXT_REWRITTEN_PATH_HEADER: function() {
			return v;
		},
		NEXT_REWRITTEN_QUERY_HEADER: function() {
			return y;
		},
		NEXT_ROUTER_PREFETCH_HEADER: function() {
			return o;
		},
		NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
			return s;
		},
		NEXT_ROUTER_STALE_TIME_HEADER: function() {
			return g;
		},
		NEXT_ROUTER_STATE_TREE_HEADER: function() {
			return a;
		},
		NEXT_RSC_UNION_QUERY: function() {
			return h;
		},
		NEXT_URL: function() {
			return u;
		},
		RSC_CONTENT_TYPE_HEADER: function() {
			return d;
		},
		RSC_HEADER: function() {
			return r;
		}
	});
	var r = "rsc", i = "next-action", a = "next-router-state-tree", o = "next-router-prefetch", s = "next-router-segment-prefetch", c = "next-hmr-refresh", l = "__next_hmr_refresh_hash__", u = "next-url", d = "text/x-component", f = "next-instant-navigation-testing-prefetch", p = "next-instant-navigation-testing", m = [
		r,
		a,
		o,
		c,
		s
	], h = "_rsc", g = "x-nextjs-stale-time", _ = "x-nextjs-postponed", v = "x-nextjs-rewritten-path", y = "x-nextjs-rewritten-query", b = "x-nextjs-prerender", x = "x-nextjs-action-not-found", S = "x-nextjs-request-id", C = "x-nextjs-html-request-id", w = "x-action-revalidated";
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), z_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "InvariantError", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = class extends Error {
		constructor(e, t) {
			super(`Invariant: ${e.endsWith(".") ? e : e + "."} This is a bug in Next.js.`, t), this.name = "InvariantError";
		}
	};
})), B_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "createPromiseWithResolvers", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	function t() {
		let e, t, n = new Promise((n, r) => {
			e = n, t = r;
		});
		return {
			resolve: e,
			reject: t,
			promise: n
		};
	}
})), V_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		RenderStage: function() {
			return i;
		},
		StagedRenderingController: function() {
			return a;
		}
	});
	var n = z_(), r = B_(), i = /* @__PURE__ */ function(e) {
		return e[e.Before = 1] = "Before", e[e.EarlyStatic = 2] = "EarlyStatic", e[e.Static = 3] = "Static", e[e.EarlyRuntime = 4] = "EarlyRuntime", e[e.Runtime = 5] = "Runtime", e[e.Dynamic = 6] = "Dynamic", e[e.Abandoned = 7] = "Abandoned", e;
	}({}), a = class {
		constructor(e, t, n) {
			this.abortSignal = e, this.abandonController = t, this.shouldTrackSyncIO = n, this.currentStage = 1, this.syncInterruptReason = null, this.staticStageEndTime = Infinity, this.runtimeStageEndTime = Infinity, this.staticStageListeners = [], this.earlyRuntimeStageListeners = [], this.runtimeStageListeners = [], this.dynamicStageListeners = [], this.staticStagePromise = (0, r.createPromiseWithResolvers)(), this.earlyRuntimeStagePromise = (0, r.createPromiseWithResolvers)(), this.runtimeStagePromise = (0, r.createPromiseWithResolvers)(), this.dynamicStagePromise = (0, r.createPromiseWithResolvers)(), e && e.addEventListener("abort", () => {
				let { reason: t } = e;
				this.staticStagePromise.promise.catch(o), this.staticStagePromise.reject(t), this.earlyRuntimeStagePromise.promise.catch(o), this.earlyRuntimeStagePromise.reject(t), this.runtimeStagePromise.promise.catch(o), this.runtimeStagePromise.reject(t), this.dynamicStagePromise.promise.catch(o), this.dynamicStagePromise.reject(t);
			}, { once: !0 }), t && t.signal.addEventListener("abort", () => {
				this.abandonRender();
			}, { once: !0 });
		}
		onStage(e, t) {
			if (this.currentStage >= e) t();
			else if (e === 3) this.staticStageListeners.push(t);
			else if (e === 4) this.earlyRuntimeStageListeners.push(t);
			else if (e === 5) this.runtimeStageListeners.push(t);
			else if (e === 6) this.dynamicStageListeners.push(t);
			else throw Object.defineProperty(new n.InvariantError(`Invalid render stage: ${e}`), "__NEXT_ERROR_CODE", {
				value: "E881",
				enumerable: !1,
				configurable: !0
			});
		}
		shouldTrackSyncInterrupt() {
			if (!this.shouldTrackSyncIO) return !1;
			switch (this.currentStage) {
				case 1: return !1;
				case 2:
				case 3: return !0;
				case 4: return !0;
				case 5: return !1;
				case 6:
				case 7: return !1;
				default: return !1;
			}
		}
		syncInterruptCurrentStageWithReason(e) {
			if (this.currentStage !== 1 && this.currentStage !== 7) {
				if (this.abandonController) {
					this.abandonController.abort();
					return;
				}
				if (this.abortSignal) {
					this.syncInterruptReason = e, this.currentStage = 7;
					return;
				}
				switch (this.currentStage) {
					case 2:
					case 3:
					case 4:
						this.syncInterruptReason = e, this.advanceStage(6);
						return;
					case 5: return;
					default:
				}
			}
		}
		getSyncInterruptReason() {
			return this.syncInterruptReason;
		}
		getStaticStageEndTime() {
			return this.staticStageEndTime;
		}
		getRuntimeStageEndTime() {
			return this.runtimeStageEndTime;
		}
		abandonRender() {
			let { currentStage: e } = this;
			switch (e) {
				case 2: this.resolveStaticStage();
				case 3: this.resolveEarlyRuntimeStage();
				case 4: this.resolveRuntimeStage();
				case 5:
					this.currentStage = 7;
					return;
				case 6:
				case 1:
				case 7: break;
				default:
			}
		}
		advanceStage(e) {
			if (e <= this.currentStage) return;
			let t = this.currentStage;
			if (this.currentStage = e, t < 3 && e >= 3 && this.resolveStaticStage(), t < 4 && e >= 4 && this.resolveEarlyRuntimeStage(), t < 5 && e >= 5 && (this.staticStageEndTime = performance.now() + performance.timeOrigin, this.resolveRuntimeStage()), t < 6 && e >= 6) {
				this.runtimeStageEndTime = performance.now() + performance.timeOrigin, this.resolveDynamicStage();
				return;
			}
		}
		resolveStaticStage() {
			let e = this.staticStageListeners;
			for (let t = 0; t < e.length; t++) e[t]();
			e.length = 0, this.staticStagePromise.resolve();
		}
		resolveEarlyRuntimeStage() {
			let e = this.earlyRuntimeStageListeners;
			for (let t = 0; t < e.length; t++) e[t]();
			e.length = 0, this.earlyRuntimeStagePromise.resolve();
		}
		resolveRuntimeStage() {
			let e = this.runtimeStageListeners;
			for (let t = 0; t < e.length; t++) e[t]();
			e.length = 0, this.runtimeStagePromise.resolve();
		}
		resolveDynamicStage() {
			let e = this.dynamicStageListeners;
			for (let t = 0; t < e.length; t++) e[t]();
			e.length = 0, this.dynamicStagePromise.resolve();
		}
		getStagePromise(e) {
			switch (e) {
				case 3: return this.staticStagePromise.promise;
				case 4: return this.earlyRuntimeStagePromise.promise;
				case 5: return this.runtimeStagePromise.promise;
				case 6: return this.dynamicStagePromise.promise;
				default: throw Object.defineProperty(new n.InvariantError(`Invalid render stage: ${e}`), "__NEXT_ERROR_CODE", {
					value: "E881",
					enumerable: !1,
					configurable: !0
				});
			}
		}
		waitForStage(e) {
			return this.getStagePromise(e);
		}
		delayUntilStage(e, t, n) {
			let r = s(this.getStagePromise(e), t, n);
			return this.abortSignal && r.catch(o), r;
		}
	};
	function o() {}
	function s(e, t, n) {
		let r = new Promise((t, r) => {
			e.then(t.bind(null, n), r);
		});
		return t !== void 0 && (r.displayName = t), r;
	}
})), H_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		getCacheSignal: function() {
			return g;
		},
		getDraftModeProviderForCacheScope: function() {
			return m;
		},
		getHmrRefreshHash: function() {
			return d;
		},
		getPrerenderResumeDataCache: function() {
			return l;
		},
		getRenderResumeDataCache: function() {
			return u;
		},
		getServerComponentsHmrCache: function() {
			return p;
		},
		getStagedRenderingController: function() {
			return h;
		},
		isHmrRefresh: function() {
			return f;
		},
		isInEarlyRenderStage: function() {
			return o;
		},
		throwForMissingRequestStore: function() {
			return s;
		},
		throwInvariantForMissingStore: function() {
			return c;
		},
		workUnitAsyncStorage: function() {
			return n.workUnitAsyncStorageInstance;
		}
	});
	var n = L_(), r = R_(), i = z_(), a = V_();
	function o(e) {
		let t = e.stagedRendering;
		return t ? t.currentStage === a.RenderStage.EarlyStatic || t.currentStage === a.RenderStage.EarlyRuntime : !1;
	}
	function s(e) {
		throw Object.defineProperty(/* @__PURE__ */ Error(`\`${e}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
			value: "E251",
			enumerable: !1,
			configurable: !0
		});
	}
	function c() {
		throw Object.defineProperty(new i.InvariantError("Expected workUnitAsyncStorage to have a store."), "__NEXT_ERROR_CODE", {
			value: "E696",
			enumerable: !1,
			configurable: !0
		});
	}
	function l(e) {
		switch (e.type) {
			case "prerender":
			case "prerender-runtime":
			case "prerender-ppr": return e.prerenderResumeDataCache;
			case "prerender-client":
			case "validation-client": return e.prerenderResumeDataCache;
			case "request": if (e.prerenderResumeDataCache) return e.prerenderResumeDataCache;
			case "prerender-legacy":
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "generate-static-params": return null;
			default: return e;
		}
	}
	function u(e) {
		switch (e.type) {
			case "request":
			case "prerender":
			case "prerender-runtime":
			case "prerender-client":
			case "validation-client": if (e.renderResumeDataCache) return e.renderResumeDataCache;
			case "prerender-ppr": return e.prerenderResumeDataCache ?? null;
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "prerender-legacy":
			case "generate-static-params": return null;
			default: return e;
		}
	}
	function d(e) {
		if (process.env.__NEXT_DEV_SERVER) switch (e.type) {
			case "cache":
			case "private-cache":
			case "prerender":
			case "prerender-runtime": return e.hmrRefreshHash;
			case "request": return e.cookies.get(r.NEXT_HMR_REFRESH_HASH_COOKIE)?.value;
			case "prerender-client":
			case "validation-client":
			case "prerender-ppr":
			case "prerender-legacy":
			case "unstable-cache":
			case "generate-static-params": break;
			default:
		}
	}
	function f(e) {
		if (process.env.__NEXT_DEV_SERVER) switch (e.type) {
			case "cache":
			case "private-cache":
			case "request": return e.isHmrRefresh ?? !1;
			case "prerender":
			case "prerender-client":
			case "validation-client":
			case "prerender-runtime":
			case "prerender-ppr":
			case "prerender-legacy":
			case "unstable-cache":
			case "generate-static-params": break;
			default:
		}
		return !1;
	}
	function p(e) {
		if (process.env.__NEXT_DEV_SERVER) switch (e.type) {
			case "cache":
			case "private-cache":
			case "request": return e.serverComponentsHmrCache;
			case "prerender":
			case "prerender-client":
			case "validation-client":
			case "prerender-runtime":
			case "prerender-ppr":
			case "prerender-legacy":
			case "unstable-cache":
			case "generate-static-params": break;
			default:
		}
	}
	function m(e, t) {
		if (e.isDraftMode) switch (t.type) {
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "prerender-runtime":
			case "request": return t.draftMode;
			case "prerender":
			case "prerender-client":
			case "validation-client":
			case "prerender-ppr":
			case "prerender-legacy":
			case "generate-static-params": break;
			default:
		}
	}
	function h(e) {
		switch (e.type) {
			case "request":
			case "prerender-runtime": return e.stagedRendering ?? null;
			case "prerender":
			case "prerender-client":
			case "validation-client":
			case "prerender-ppr":
			case "prerender-legacy":
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "generate-static-params": return null;
			default: return e;
		}
	}
	function g(e) {
		switch (e.type) {
			case "prerender":
			case "prerender-client":
			case "validation-client":
			case "prerender-runtime": return e.cacheSignal;
			case "request": if (e.cacheSignal) return e.cacheSignal;
			case "prerender-ppr":
			case "prerender-legacy":
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "generate-static-params": return null;
			default: return e;
		}
	}
})), U_ = /* @__PURE__ */ u(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		DynamicServerError: function() {
			return i;
		},
		isDynamicServerError: function() {
			return a;
		}
	});
	var r = "DYNAMIC_SERVER_USAGE", i = class extends Error {
		constructor(e) {
			super(`Dynamic server usage: ${e}`), this.description = e, this.digest = r;
		}
	};
	function a(e) {
		return typeof e != "object" || !e || !("digest" in e) || typeof e.digest != "string" ? !1 : e.digest === r;
	}
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), W_ = /* @__PURE__ */ u(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		StaticGenBailoutError: function() {
			return i;
		},
		isStaticGenBailoutError: function() {
			return a;
		}
	});
	var r = "NEXT_STATIC_GEN_BAILOUT", i = class extends Error {
		constructor(...e) {
			super(...e), this.code = r;
		}
	};
	function a(e) {
		return typeof e != "object" || !e || !("code" in e) ? !1 : e.code === r;
	}
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), G_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		delayUntilRuntimeStage: function() {
			return d;
		},
		getRuntimeStage: function() {
			return u;
		},
		isHangingPromiseRejectionError: function() {
			return r;
		},
		makeDevtoolsIOAwarePromise: function() {
			return l;
		},
		makeHangingPromise: function() {
			return s;
		}
	});
	var n = V_();
	function r(e) {
		return typeof e != "object" || !e || !("digest" in e) ? !1 : e.digest === i;
	}
	var i = "HANGING_PROMISE_REJECTION", a = class extends Error {
		constructor(e, t) {
			super(`During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${e}".`), this.route = e, this.expression = t, this.digest = i;
		}
	}, o = /* @__PURE__ */ new WeakMap();
	function s(e, t, n) {
		if (e.aborted) return Promise.reject(new a(t, n));
		{
			let r = new Promise((r, i) => {
				let s = i.bind(null, new a(t, n)), c = o.get(e);
				if (c) c.push(s);
				else {
					let t = [s];
					o.set(e, t), e.addEventListener("abort", () => {
						for (let e = 0; e < t.length; e++) t[e]();
					}, { once: !0 });
				}
			});
			return r.catch(c), r;
		}
	}
	function c() {}
	function l(e, t, n) {
		return t.stagedRendering ? t.stagedRendering.delayUntilStage(n, void 0, e) : new Promise((t) => {
			setTimeout(() => {
				t(e);
			}, 0);
		});
	}
	function u(e) {
		return e.currentStage === n.RenderStage.EarlyStatic || e.currentStage === n.RenderStage.EarlyRuntime ? n.RenderStage.EarlyRuntime : n.RenderStage.Runtime;
	}
	function d(e, t) {
		let { stagedRendering: n } = e;
		return n ? n.waitForStage(u(n)).then(() => t) : t;
	}
})), K_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		METADATA_BOUNDARY_NAME: function() {
			return n;
		},
		OUTLET_BOUNDARY_NAME: function() {
			return i;
		},
		ROOT_LAYOUT_BOUNDARY_NAME: function() {
			return a;
		},
		VIEWPORT_BOUNDARY_NAME: function() {
			return r;
		}
	});
	var n = "__next_metadata_boundary__", r = "__next_viewport_boundary__", i = "__next_outlet_boundary__", a = "__next_root_layout_boundary__";
})), q_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		atLeastOneTask: function() {
			return i;
		},
		scheduleImmediate: function() {
			return r;
		},
		scheduleOnNextTick: function() {
			return n;
		},
		waitAtLeastOneReactRenderTask: function() {
			return a;
		}
	});
	var n = (e) => {
		Promise.resolve().then(() => {
			process.env.NEXT_RUNTIME === "edge" ? setTimeout(e, 0) : process.nextTick(e);
		});
	}, r = (e) => {
		process.env.NEXT_RUNTIME === "edge" ? setTimeout(e, 0) : setImmediate(e);
	};
	function i() {
		return new Promise((e) => r(e));
	}
	function a() {
		return process.env.NEXT_RUNTIME === "edge" ? new Promise((e) => setTimeout(e, 0)) : new Promise((e) => setImmediate(e));
	}
})), J_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		BailoutToCSRError: function() {
			return r;
		},
		isBailoutToCSRError: function() {
			return i;
		}
	});
	var n = "BAILOUT_TO_CLIENT_SIDE_RENDERING", r = class extends Error {
		constructor(e) {
			super(`Bail out to client-side rendering: ${e}`), this.reason = e, this.digest = n;
		}
	};
	function i(e) {
		return typeof e != "object" || !e || !("digest" in e) ? !1 : e.digest === n;
	}
})), Y_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "INSTANT_VALIDATION_BOUNDARY_NAME", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = "__next_instant_validation_boundary__";
})), X_ = /* @__PURE__ */ u(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 });
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(t, {
		DynamicHoleKind: function() {
			return ce;
		},
		Postpone: function() {
			return T;
		},
		PreludeState: function() {
			return me;
		},
		abortAndThrowOnSynchronousRequestDataAccess: function() {
			return w;
		},
		abortOnSynchronousPlatformIOAccess: function() {
			return C;
		},
		accessedDynamicData: function() {
			return N;
		},
		annotateDynamicAccess: function() {
			return ne;
		},
		consumeDynamicAccess: function() {
			return P;
		},
		createDynamicTrackingState: function() {
			return g;
		},
		createDynamicValidationState: function() {
			return _;
		},
		createHangingInputAbortSignal: function() {
			return te;
		},
		createInstantValidationState: function() {
			return le;
		},
		createRenderInBrowserAbortSignal: function() {
			return ee;
		},
		formatDynamicAPIAccesses: function() {
			return F;
		},
		getFirstDynamicReason: function() {
			return v;
		},
		getNavigationDisallowedDynamicReasons: function() {
			return ve;
		},
		getStaticShellDisallowedDynamicReasons: function() {
			return _e;
		},
		isDynamicPostpone: function() {
			return O;
		},
		isPrerenderInterruptedError: function() {
			return M;
		},
		logDisallowedDynamicError: function() {
			return he;
		},
		markCurrentScopeAsDynamic: function() {
			return y;
		},
		postponeWithTracking: function() {
			return E;
		},
		throwIfDisallowedDynamic: function() {
			return ge;
		},
		throwToInterruptStaticGeneration: function() {
			return b;
		},
		trackAllowedDynamicAccess: function() {
			return se;
		},
		trackDynamicDataInDynamicRender: function() {
			return x;
		},
		trackDynamicHoleInNavigation: function() {
			return ue;
		},
		trackDynamicHoleInRuntimeShell: function() {
			return fe;
		},
		trackDynamicHoleInStaticShell: function() {
			return pe;
		},
		trackThrownErrorInNavigation: function() {
			return de;
		},
		useDynamicRouteParams: function() {
			return L;
		},
		useDynamicSearchParams: function() {
			return R;
		}
	});
	var r = /* @__PURE__ */ m(e("react")), i = U_(), a = W_(), o = H_(), s = P_(), c = G_(), l = K_(), u = q_(), d = J_(), f = z_(), p = Y_();
	function m(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var h = typeof r.default.unstable_postpone == "function";
	function g(e) {
		return {
			isDebugDynamicAccesses: e,
			dynamicAccesses: [],
			syncDynamicErrorWithStack: null
		};
	}
	function _() {
		return {
			hasSuspenseAboveBody: !1,
			hasDynamicMetadata: !1,
			dynamicMetadata: null,
			hasDynamicViewport: !1,
			hasAllowedDynamic: !1,
			dynamicErrors: []
		};
	}
	function v(e) {
		return e.dynamicAccesses[0]?.expression;
	}
	function y(e, t, n) {
		if (t) switch (t.type) {
			case "cache":
			case "unstable-cache": return;
			case "private-cache": return;
			case "prerender-legacy":
			case "prerender-ppr":
			case "request":
			case "generate-static-params": break;
			default:
		}
		if (!(e.forceDynamic || e.forceStatic)) {
			if (e.dynamicShouldError) throw Object.defineProperty(new a.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${n}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
				value: "E553",
				enumerable: !1,
				configurable: !0
			});
			if (t) switch (t.type) {
				case "prerender-ppr": return E(e.route, n, t.dynamicTracking);
				case "prerender-legacy":
					t.revalidate = 0;
					let r = Object.defineProperty(new i.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used ${n}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
						value: "E550",
						enumerable: !1,
						configurable: !0
					});
					throw e.dynamicUsageDescription = n, e.dynamicUsageStack = r.stack, r;
				case "request": break;
				case "generate-static-params": break;
				default:
			}
		}
	}
	function b(e, t, n) {
		let r = Object.defineProperty(new i.DynamicServerError(`Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
			value: "E558",
			enumerable: !1,
			configurable: !0
		});
		throw n.revalidate = 0, t.dynamicUsageDescription = e, t.dynamicUsageStack = r.stack, r;
	}
	function x(e) {
		switch (e.type) {
			case "cache":
			case "unstable-cache": return;
			case "private-cache": return;
			case "prerender":
			case "prerender-runtime":
			case "prerender-legacy":
			case "prerender-ppr":
			case "prerender-client":
			case "validation-client":
			case "generate-static-params": break;
			case "request": break;
			default:
		}
	}
	function S(e, t, n) {
		let r = j(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);
		n.controller.abort(r);
		let i = n.dynamicTracking;
		i && i.dynamicAccesses.push({
			stack: i.isDebugDynamicAccesses ? (/* @__PURE__ */ Error()).stack : void 0,
			expression: t
		});
	}
	function C(e, t, n, r) {
		let i = r.dynamicTracking;
		S(e, t, r), i && i.syncDynamicErrorWithStack === null && (i.syncDynamicErrorWithStack = n);
	}
	function w(e, t, n, r) {
		if (r.controller.signal.aborted === !1) {
			S(e, t, r);
			let i = r.dynamicTracking;
			i && i.syncDynamicErrorWithStack === null && (i.syncDynamicErrorWithStack = n);
		}
		throw j(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);
	}
	function T({ reason: e, route: t }) {
		let n = o.workUnitAsyncStorage.getStore();
		E(t, e, n && n.type === "prerender-ppr" ? n.dynamicTracking : null);
	}
	function E(e, t, n) {
		I(), n && n.dynamicAccesses.push({
			stack: n.isDebugDynamicAccesses ? (/* @__PURE__ */ Error()).stack : void 0,
			expression: t
		}), r.default.unstable_postpone(D(e, t));
	}
	function D(e, t) {
		return `Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
	}
	function O(e) {
		return typeof e == "object" && e && typeof e.message == "string" ? k(e.message) : !1;
	}
	function k(e) {
		return e.includes("needs to bail out of prerendering at this point because it used") && e.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
	}
	if (k(D("%%%", "^^^")) === !1) throw Object.defineProperty(/* @__PURE__ */ Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
		value: "E296",
		enumerable: !1,
		configurable: !0
	});
	var A = "NEXT_PRERENDER_INTERRUPTED";
	function j(e) {
		let t = Object.defineProperty(Error(e), "__NEXT_ERROR_CODE", {
			value: "E394",
			enumerable: !1,
			configurable: !0
		});
		return t.digest = A, t;
	}
	function M(e) {
		return typeof e == "object" && !!e && e.digest === A && "name" in e && "message" in e && e instanceof Error;
	}
	function N(e) {
		return e.length > 0;
	}
	function P(e, t) {
		return e.dynamicAccesses.push(...t.dynamicAccesses), e.dynamicAccesses;
	}
	function F(e) {
		return e.filter((e) => typeof e.stack == "string" && e.stack.length > 0).map(({ expression: e, stack: t }) => (t = t.split("\n").slice(4).filter((e) => !(e.includes("node_modules/next/") || e.includes(" (<anonymous>)") || e.includes(" (node:"))).join("\n"), `Dynamic API Usage Debug - ${e}:\n${t}`));
	}
	function I() {
		if (!h) throw Object.defineProperty(/* @__PURE__ */ Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
			value: "E224",
			enumerable: !1,
			configurable: !0
		});
	}
	function ee() {
		let e = new AbortController();
		return e.abort(Object.defineProperty(new d.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
			value: "E721",
			enumerable: !1,
			configurable: !0
		})), e.signal;
	}
	function te(e) {
		switch (e.type) {
			case "prerender":
			case "prerender-runtime":
				let t = new AbortController();
				if (e.cacheSignal) e.cacheSignal.inputReady().then(() => {
					t.abort();
				});
				else if (e.type === "prerender-runtime" && e.stagedRendering) {
					let { stagedRendering: n } = e;
					n.waitForStage((0, c.getRuntimeStage)(n)).then(() => (0, u.scheduleOnNextTick)(() => t.abort()));
				} else (0, u.scheduleOnNextTick)(() => t.abort());
				return t.signal;
			case "prerender-client":
			case "validation-client":
			case "prerender-ppr":
			case "prerender-legacy":
			case "request":
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "generate-static-params": return;
			default:
		}
	}
	function ne(e, t) {
		let n = t.dynamicTracking;
		n && n.dynamicAccesses.push({
			stack: n.isDebugDynamicAccesses ? (/* @__PURE__ */ Error()).stack : void 0,
			expression: e
		});
	}
	function L(e) {
		let t = s.workAsyncStorage.getStore(), n = o.workUnitAsyncStorage.getStore();
		if (t && n) switch (n.type) {
			case "prerender-client":
			case "prerender": {
				let i = n.fallbackRouteParams;
				i && i.size > 0 && r.default.use((0, c.makeHangingPromise)(n.renderSignal, t.route, e));
				break;
			}
			case "prerender-ppr": {
				let r = n.fallbackRouteParams;
				if (r && r.size > 0) return E(t.route, e, n.dynamicTracking);
				break;
			}
			case "validation-client": break;
			case "prerender-runtime": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called during a runtime prerender. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E771",
				enumerable: !1,
				configurable: !0
			});
			case "cache":
			case "private-cache": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E745",
				enumerable: !1,
				configurable: !0
			});
			case "generate-static-params": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called in \`generateStaticParams\`. Next.js should be preventing ${e} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E1130",
				enumerable: !1,
				configurable: !0
			});
			case "prerender-legacy":
			case "request":
			case "unstable-cache": break;
			default:
		}
	}
	function R(e) {
		let t = s.workAsyncStorage.getStore(), n = o.workUnitAsyncStorage.getStore();
		if (t) switch (n || (0, o.throwForMissingRequestStore)(e), n.type) {
			case "validation-client": return;
			case "prerender-client":
				r.default.use((0, c.makeHangingPromise)(n.renderSignal, t.route, e));
				break;
			case "prerender-legacy":
			case "prerender-ppr":
				if (t.forceStatic) return;
				throw Object.defineProperty(new d.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
					value: "E394",
					enumerable: !1,
					configurable: !0
				});
			case "prerender":
			case "prerender-runtime": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called from a Server Component. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E795",
				enumerable: !1,
				configurable: !0
			});
			case "cache":
			case "unstable-cache":
			case "private-cache": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E745",
				enumerable: !1,
				configurable: !0
			});
			case "generate-static-params": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called in \`generateStaticParams\`. Next.js should be preventing ${e} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E1130",
				enumerable: !1,
				configurable: !0
			});
			case "request": return;
			default:
		}
	}
	var re = /\n\s+at Suspense \(<anonymous>\)/, ie = RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${l.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`), z = RegExp(`\\n\\s+at ${l.METADATA_BOUNDARY_NAME}[\\n\\s]`), ae = RegExp(`\\n\\s+at ${l.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`), B = RegExp(`\\n\\s+at ${l.OUTLET_BOUNDARY_NAME}[\\n\\s]`), oe = RegExp(`\\n\\s+at ${p.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`);
	function se(e, t, n, r) {
		if (!B.test(t)) if (z.test(t)) {
			n.hasDynamicMetadata = !0;
			return;
		} else if (ae.test(t)) {
			n.hasDynamicViewport = !0;
			return;
		} else if (ie.test(t)) {
			n.hasAllowedDynamic = !0, n.hasSuspenseAboveBody = !0;
			return;
		} else if (re.test(t)) {
			n.hasAllowedDynamic = !0;
			return;
		} else if (r.syncDynamicErrorWithStack) {
			n.dynamicErrors.push(r.syncDynamicErrorWithStack);
			return;
		} else {
			let r = `Route "${e.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, i = V(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1079",
				enumerable: !1,
				configurable: !0
			}), t, null);
			n.dynamicErrors.push(i);
			return;
		}
	}
	var ce = /* @__PURE__ */ function(e) {
		return e[e.Runtime = 1] = "Runtime", e[e.Dynamic = 2] = "Dynamic", e;
	}({});
	function le(e) {
		return {
			hasDynamicMetadata: !1,
			hasAllowedClientDynamicAboveBoundary: !1,
			dynamicMetadata: null,
			hasDynamicViewport: !1,
			hasAllowedDynamic: !1,
			dynamicErrors: [],
			validationPreventingErrors: [],
			thrownErrorsOutsideBoundary: [],
			createInstantStack: e
		};
	}
	function ue(e, t, n, r, i, a) {
		if (B.test(t)) return;
		if (z.test(t)) {
			let r = i === 1 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateMetadata` or you have file-based metadata such as icons that depend on dynamic params segments." : "Uncached data or `connection()` was accessed inside `generateMetadata`.", a = `Route "${e.route}": ${r} Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
			n.dynamicMetadata = V(Object.defineProperty(Error(a), "__NEXT_ERROR_CODE", {
				value: "E1076",
				enumerable: !1,
				configurable: !0
			}), t, n.createInstantStack);
			return;
		}
		if (ae.test(t)) {
			let r = i === 1 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateViewport`." : "Uncached data or `connection()` was accessed inside `generateViewport`.", a = `Route "${e.route}": ${r} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, o = V(Object.defineProperty(Error(a), "__NEXT_ERROR_CODE", {
				value: "E1086",
				enumerable: !1,
				configurable: !0
			}), t, n.createInstantStack);
			n.dynamicErrors.push(o);
			return;
		}
		let o = oe.exec(t);
		if (o) {
			let e = re.exec(t);
			if (e && e.index < o.index) {
				n.hasAllowedDynamic = !0;
				return;
			}
		} else if (a.expectedIds.size === a.renderedIds.size) {
			n.hasAllowedClientDynamicAboveBoundary = !0, n.hasAllowedDynamic = !0;
			return;
		} else {
			let r = `Route "${e.route}": Could not validate \`unstable_instant\` because a Client Component in a parent segment prevented the page from rendering.`, i = V(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1082",
				enumerable: !1,
				configurable: !0
			}), t, n.createInstantStack);
			n.validationPreventingErrors.push(i);
			return;
		}
		if (r.syncDynamicErrorWithStack) {
			let e = r.syncDynamicErrorWithStack;
			n.createInstantStack !== null && e.cause === void 0 && (e.cause = n.createInstantStack()), n.dynamicErrors.push(e);
			return;
		}
		let s = i === 1 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed outside of `<Suspense>`." : "Uncached data or `connection()` was accessed outside of `<Suspense>`.", c = `Route "${e.route}": ${s} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, l = V(Object.defineProperty(Error(c), "__NEXT_ERROR_CODE", {
			value: "E1078",
			enumerable: !1,
			configurable: !0
		}), t, n.createInstantStack);
		n.dynamicErrors.push(l);
	}
	function de(e, t, n, r) {
		let i = oe.exec(r);
		if (i) {
			let a = re.exec(r);
			if (a && a.index < i.index) return;
			let o = `Route "${e.route}": Could not validate \`unstable_instant\` because an error prevented the target segment from rendering.`, s = V(Object.defineProperty(Error(o, { cause: n }), "__NEXT_ERROR_CODE", {
				value: "E1112",
				enumerable: !1,
				configurable: !0
			}), r, null);
			t.validationPreventingErrors.push(s);
		} else {
			let e = V(Object.defineProperty(Error("An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.", { cause: n }), "__NEXT_ERROR_CODE", {
				value: "E1118",
				enumerable: !1,
				configurable: !0
			}), r, null);
			t.thrownErrorsOutsideBoundary.push(e);
		}
	}
	function fe(e, t, n, r) {
		if (B.test(t)) return;
		if (z.test(t)) {
			let r = `Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
			n.dynamicMetadata = V(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1080",
				enumerable: !1,
				configurable: !0
			}), t, null);
			return;
		} else if (ae.test(t)) {
			let r = `Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, i = V(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1077",
				enumerable: !1,
				configurable: !0
			}), t, null);
			n.dynamicErrors.push(i);
			return;
		} else if (ie.test(t)) {
			n.hasAllowedDynamic = !0, n.hasSuspenseAboveBody = !0;
			return;
		} else if (re.test(t)) {
			n.hasAllowedDynamic = !0;
			return;
		} else if (r.syncDynamicErrorWithStack) {
			n.dynamicErrors.push(r.syncDynamicErrorWithStack);
			return;
		}
		let i = `Route "${e.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, a = V(Object.defineProperty(Error(i), "__NEXT_ERROR_CODE", {
			value: "E1084",
			enumerable: !1,
			configurable: !0
		}), t, null);
		n.dynamicErrors.push(a);
	}
	function pe(e, t, n, r) {
		if (!B.test(t)) if (z.test(t)) {
			let r = `Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
			n.dynamicMetadata = V(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1085",
				enumerable: !1,
				configurable: !0
			}), t, null);
			return;
		} else if (ae.test(t)) {
			let r = `Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, i = V(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1081",
				enumerable: !1,
				configurable: !0
			}), t, null);
			n.dynamicErrors.push(i);
			return;
		} else if (ie.test(t)) {
			n.hasAllowedDynamic = !0, n.hasSuspenseAboveBody = !0;
			return;
		} else if (re.test(t)) {
			n.hasAllowedDynamic = !0;
			return;
		} else if (r.syncDynamicErrorWithStack) {
			n.dynamicErrors.push(r.syncDynamicErrorWithStack);
			return;
		} else {
			let r = `Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, i = V(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1083",
				enumerable: !1,
				configurable: !0
			}), t, null);
			n.dynamicErrors.push(i);
			return;
		}
	}
	function V(e, t, n) {
		return n !== null && (e.cause = n()), e.stack = e.name + ": " + e.message + t, e;
	}
	var me = /* @__PURE__ */ function(e) {
		return e[e.Full = 0] = "Full", e[e.Empty = 1] = "Empty", e[e.Errored = 2] = "Errored", e;
	}({});
	function he(e, t) {
		console.error(t), console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${e.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
	}
	function ge(e, t, n, r) {
		if (r.syncDynamicErrorWithStack) throw he(e, r.syncDynamicErrorWithStack), new a.StaticGenBailoutError();
		if (t !== 0) {
			if (n.hasSuspenseAboveBody) return;
			let r = n.dynamicErrors;
			if (r.length > 0) {
				for (let t = 0; t < r.length; t++) he(e, r[t]);
				throw new a.StaticGenBailoutError();
			}
			if (n.hasDynamicViewport) throw console.error(`Route "${e.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`), new a.StaticGenBailoutError();
			if (t === 1) throw console.error(`Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`), new a.StaticGenBailoutError();
		} else if (n.hasAllowedDynamic === !1 && n.hasDynamicMetadata) throw console.error(`Route "${e.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`), new a.StaticGenBailoutError();
	}
	function _e(e, t, n, r) {
		if (r || n.hasSuspenseAboveBody) return [];
		if (t !== 0) {
			let r = n.dynamicErrors;
			if (r.length > 0) return r;
			if (t === 1) return [Object.defineProperty(new f.InvariantError(`Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
				value: "E936",
				enumerable: !1,
				configurable: !0
			})];
		} else if (n.hasAllowedDynamic === !1 && n.dynamicErrors.length === 0 && n.dynamicMetadata) return [n.dynamicMetadata];
		return [];
	}
	function ve(e, t, n, r, i) {
		if (r) {
			let { missingSampleErrors: e } = r;
			if (e.length > 0) return e;
		}
		let { validationPreventingErrors: a } = n;
		if (a.length > 0) return a;
		if (i.renderedIds.size < i.expectedIds.size) {
			let { thrownErrorsOutsideBoundary: t, createInstantStack: r } = n;
			if (t.length === 0) {
				let t = `Route "${e.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering for an unknown reason.`, n = r === null ? /* @__PURE__ */ Error() : r();
				return n.name = "Error", n.message = t, [n];
			} else if (t.length === 1) {
				let n = `Route "${e.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to the following error.`, i = r === null ? /* @__PURE__ */ Error() : r();
				return i.name = "Error", i.message = n, [i, t[0]];
			} else {
				let n = `Route "${e.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`, i = r === null ? /* @__PURE__ */ Error() : r();
				return i.name = "Error", i.message = n, [i, ...t];
			}
		}
		if (t !== 0) {
			let r = n.dynamicErrors;
			if (r.length > 0) return r;
			if (t === 1) return n.hasAllowedClientDynamicAboveBoundary ? [] : [Object.defineProperty(new f.InvariantError(`Route "${e.route}" failed to render during instant validation and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
				value: "E1055",
				enumerable: !1,
				configurable: !0
			})];
		} else {
			let e = n.dynamicErrors;
			if (e.length > 0) return e;
			if (n.hasAllowedDynamic === !1 && n.dynamicMetadata) return [n.dynamicMetadata];
		}
		return [];
	}
})), Z_ = /* @__PURE__ */ u(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), Object.defineProperty(t, "createDedupedByCallsiteServerErrorLoggerDev", {
		enumerable: !0,
		get: function() {
			return c;
		}
	});
	var n = /* @__PURE__ */ i(e("react"));
	function r(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (r = function(e) {
			return e ? n : t;
		})(e);
	}
	function i(e, t) {
		if (!t && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var n = r(t);
		if (n && n.has(e)) return n.get(e);
		var i = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var o in e) if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
			var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
			s && (s.get || s.set) ? Object.defineProperty(i, o, s) : i[o] = e[o];
		}
		return i.default = e, n && n.set(e, i), i;
	}
	var a = { current: null }, o = typeof n.cache == "function" ? n.cache : (e) => e, s = process.env.__NEXT_CACHE_COMPONENTS ? console.error : console.warn;
	o((e) => {
		try {
			s(a.current);
		} finally {
			a.current = null;
		}
	});
	function c(e) {
		return function(...t) {
			s(e(...t));
		};
	}
})), Q_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "afterTaskAsyncStorageInstance", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (0, M_().createAsyncLocalStorage)();
})), $_ = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "afterTaskAsyncStorage", {
		enumerable: !0,
		get: function() {
			return t.afterTaskAsyncStorageInstance;
		}
	});
	var t = Q_();
})), ev = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		isRequestAPICallableInsideAfter: function() {
			return o;
		},
		throwForSearchParamsAccessInUseCache: function() {
			return a;
		},
		throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
			return i;
		}
	});
	var n = W_(), r = $_();
	function i(e, t) {
		throw Object.defineProperty(new n.StaticGenBailoutError(`Route ${e} with \`dynamic = "error"\` couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
			value: "E543",
			enumerable: !1,
			configurable: !0
		});
	}
	function a(e, t) {
		let n = Object.defineProperty(/* @__PURE__ */ Error(`Route ${e.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
			value: "E842",
			enumerable: !1,
			configurable: !0
		});
		throw Error.captureStackTrace(n, t), e.invalidDynamicUsageError ?? (e.invalidDynamicUsageError = n), n;
	}
	function o() {
		return r.afterTaskAsyncStorage.getStore()?.rootTaskSpawnPhase === "action";
	}
})), tv = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "cookies", {
		enumerable: !0,
		get: function() {
			return d;
		}
	});
	var t = I_(), n = A_(), r = P_(), i = H_(), a = X_(), o = W_(), s = G_(), c = Z_(), l = ev(), u = z_();
	V_();
	function d() {
		let e = "cookies", n = r.workAsyncStorage.getStore(), c = i.workUnitAsyncStorage.getStore();
		if (n) {
			if (c && c.phase === "after" && !(0, l.isRequestAPICallableInsideAfter)()) throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${n.route} used \`cookies()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`cookies()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
				value: "E843",
				enumerable: !1,
				configurable: !0
			});
			if (n.forceStatic) return h(f());
			if (n.dynamicShouldError) throw Object.defineProperty(new o.StaticGenBailoutError(`Route ${n.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
				value: "E849",
				enumerable: !1,
				configurable: !0
			});
			if (c) switch (c.type) {
				case "cache":
					let r = Object.defineProperty(/* @__PURE__ */ Error(`Route ${n.route} used \`cookies()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
						value: "E831",
						enumerable: !1,
						configurable: !0
					});
					throw Error.captureStackTrace(r, d), n.invalidDynamicUsageError ?? (n.invalidDynamicUsageError = r), r;
				case "unstable-cache": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${n.route} used \`cookies()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
					value: "E846",
					enumerable: !1,
					configurable: !0
				});
				case "generate-static-params": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${n.route} used \`cookies()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
					value: "E1123",
					enumerable: !1,
					configurable: !0
				});
				case "prerender": return m(n, c);
				case "prerender-client":
				case "validation-client":
					let o = "`cookies`";
					throw Object.defineProperty(new u.InvariantError(`${o} must not be used within a Client Component. Next.js should be preventing ${o} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
						value: "E1037",
						enumerable: !1,
						configurable: !0
					});
				case "prerender-ppr": return (0, a.postponeWithTracking)(n.route, e, c.dynamicTracking);
				case "prerender-legacy": return (0, a.throwToInterruptStaticGeneration)(e, n, c);
				case "prerender-runtime": return (0, s.delayUntilRuntimeStage)(c, h(c.cookies));
				case "private-cache": return h(c.cookies);
				case "request":
					(0, a.trackDynamicDataInDynamicRender)(c);
					let l;
					if (l = (0, t.areCookiesMutableInCurrentPhase)(c) ? c.userspaceMutableCookies : c.cookies, c.asyncApiPromises) {
						let e = (0, i.isInEarlyRenderStage)(c);
						return l === c.mutableCookies ? e ? c.asyncApiPromises.earlyMutableCookies : c.asyncApiPromises.mutableCookies : e ? c.asyncApiPromises.earlyCookies : c.asyncApiPromises.cookies;
					} else return h(l);
				default:
			}
		}
		(0, i.throwForMissingRequestStore)(e);
	}
	function f() {
		return t.RequestCookiesAdapter.seal(new n.RequestCookies(new Headers({})));
	}
	var p = /* @__PURE__ */ new WeakMap();
	function m(e, t) {
		let n = p.get(t);
		if (n) return n;
		let r = (0, s.makeHangingPromise)(t.renderSignal, e.route, "`cookies()`");
		return p.set(t, r), r;
	}
	function h(e) {
		let t = p.get(e);
		if (t) return t;
		let n = Promise.resolve(e);
		return p.set(e, n), n;
	}
	(0, c.createDedupedByCallsiteServerErrorLoggerDev)(g);
	function g(e, t) {
		let n = e ? `Route "${e}" ` : "This route ";
		return Object.defineProperty(/* @__PURE__ */ Error(`${n}used ${t}. \`cookies()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
			value: "E830",
			enumerable: !1,
			configurable: !0
		});
	}
})), nv = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		HeadersAdapter: function() {
			return i;
		},
		ReadonlyHeadersError: function() {
			return r;
		}
	});
	var n = j_(), r = class e extends Error {
		constructor() {
			super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
		}
		static callable() {
			throw new e();
		}
	}, i = class e extends Headers {
		constructor(e) {
			super(), this.headers = new Proxy(e, {
				get(t, r, i) {
					if (typeof r == "symbol") return n.ReflectAdapter.get(t, r, i);
					let a = r.toLowerCase(), o = Object.keys(e).find((e) => e.toLowerCase() === a);
					if (o !== void 0) return n.ReflectAdapter.get(t, o, i);
				},
				set(t, r, i, a) {
					if (typeof r == "symbol") return n.ReflectAdapter.set(t, r, i, a);
					let o = r.toLowerCase(), s = Object.keys(e).find((e) => e.toLowerCase() === o);
					return n.ReflectAdapter.set(t, s ?? r, i, a);
				},
				has(t, r) {
					if (typeof r == "symbol") return n.ReflectAdapter.has(t, r);
					let i = r.toLowerCase(), a = Object.keys(e).find((e) => e.toLowerCase() === i);
					return a === void 0 ? !1 : n.ReflectAdapter.has(t, a);
				},
				deleteProperty(t, r) {
					if (typeof r == "symbol") return n.ReflectAdapter.deleteProperty(t, r);
					let i = r.toLowerCase(), a = Object.keys(e).find((e) => e.toLowerCase() === i);
					return a === void 0 ? !0 : n.ReflectAdapter.deleteProperty(t, a);
				}
			});
		}
		static seal(e) {
			return new Proxy(e, { get(e, t, i) {
				switch (t) {
					case "append":
					case "delete":
					case "set": return r.callable;
					default: return n.ReflectAdapter.get(e, t, i);
				}
			} });
		}
		merge(e) {
			return Array.isArray(e) ? e.join(", ") : e;
		}
		static from(t) {
			return t instanceof Headers ? t : new e(t);
		}
		append(e, t) {
			let n = this.headers[e];
			typeof n == "string" ? this.headers[e] = [n, t] : Array.isArray(n) ? n.push(t) : this.headers[e] = t;
		}
		delete(e) {
			delete this.headers[e];
		}
		get(e) {
			let t = this.headers[e];
			return t === void 0 ? null : this.merge(t);
		}
		has(e) {
			return this.headers[e] !== void 0;
		}
		set(e, t) {
			this.headers[e] = t;
		}
		forEach(e, t) {
			for (let [n, r] of this.entries()) e.call(t, r, n, this);
		}
		*entries() {
			for (let e of Object.keys(this.headers)) {
				let t = e.toLowerCase();
				yield [t, this.get(t)];
			}
		}
		*keys() {
			for (let e of Object.keys(this.headers)) yield e.toLowerCase();
		}
		*values() {
			for (let e of Object.keys(this.headers)) yield this.get(e);
		}
		[Symbol.iterator]() {
			return this.entries();
		}
	};
})), rv = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "headers", {
		enumerable: !0,
		get: function() {
			return u;
		}
	});
	var t = nv(), n = P_(), r = H_(), i = X_(), a = W_(), o = G_(), s = Z_(), c = ev(), l = z_();
	V_();
	function u() {
		let e = "headers", s = n.workAsyncStorage.getStore(), d = r.workUnitAsyncStorage.getStore();
		if (s) {
			if (d && d.phase === "after" && !(0, c.isRequestAPICallableInsideAfter)()) throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${s.route} used \`headers()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`headers()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
				value: "E839",
				enumerable: !1,
				configurable: !0
			});
			if (s.forceStatic) return p(t.HeadersAdapter.seal(new Headers({})));
			if (d) switch (d.type) {
				case "cache": {
					let e = Object.defineProperty(/* @__PURE__ */ Error(`Route ${s.route} used \`headers()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
						value: "E833",
						enumerable: !1,
						configurable: !0
					});
					throw Error.captureStackTrace(e, u), s.invalidDynamicUsageError ?? (s.invalidDynamicUsageError = e), e;
				}
				case "unstable-cache": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${s.route} used \`headers()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
					value: "E838",
					enumerable: !1,
					configurable: !0
				});
				case "generate-static-params": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${s.route} used \`headers()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
					value: "E1134",
					enumerable: !1,
					configurable: !0
				});
				case "prerender":
				case "prerender-client":
				case "validation-client":
				case "private-cache":
				case "prerender-runtime":
				case "prerender-ppr":
				case "prerender-legacy":
				case "request": break;
				default:
			}
			if (s.dynamicShouldError) throw Object.defineProperty(new a.StaticGenBailoutError(`Route ${s.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
				value: "E828",
				enumerable: !1,
				configurable: !0
			});
			if (d) switch (d.type) {
				case "prerender": return f(s, d);
				case "prerender-client":
				case "validation-client":
					let t = "`headers`";
					throw Object.defineProperty(new l.InvariantError(`${t} must not be used within a client component. Next.js should be preventing ${t} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
						value: "E1017",
						enumerable: !1,
						configurable: !0
					});
				case "prerender-ppr": return (0, i.postponeWithTracking)(s.route, e, d.dynamicTracking);
				case "prerender-legacy": return (0, i.throwToInterruptStaticGeneration)(e, s, d);
				case "prerender-runtime": return (0, o.delayUntilRuntimeStage)(d, p(d.headers));
				case "private-cache": return p(d.headers);
				case "request": return (0, i.trackDynamicDataInDynamicRender)(d), d.asyncApiPromises ? (0, r.isInEarlyRenderStage)(d) ? d.asyncApiPromises.earlyHeaders : d.asyncApiPromises.headers : p(d.headers);
				default:
			}
		}
		(0, r.throwForMissingRequestStore)(e);
	}
	var d = /* @__PURE__ */ new WeakMap();
	function f(e, t) {
		let n = d.get(t);
		if (n) return n;
		let r = (0, o.makeHangingPromise)(t.renderSignal, e.route, "`headers()`");
		return d.set(t, r), r;
	}
	function p(e) {
		let t = d.get(e);
		if (t) return t;
		let n = Promise.resolve(e);
		return d.set(e, n), n;
	}
	(0, s.createDedupedByCallsiteServerErrorLoggerDev)(m);
	function m(e, t) {
		let n = e ? `Route "${e}" ` : "This route ";
		return Object.defineProperty(/* @__PURE__ */ Error(`${n}used ${t}. \`headers()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
			value: "E836",
			enumerable: !1,
			configurable: !0
		});
	}
})), iv = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "draftMode", {
		enumerable: !0,
		get: function() {
			return l;
		}
	});
	var t = H_(), n = P_(), r = X_(), i = Z_(), a = W_(), o = U_(), s = z_(), c = G_();
	j_();
	function l() {
		let e = "draftMode", r = n.workAsyncStorage.getStore(), i = t.workUnitAsyncStorage.getStore();
		switch ((!r || !i) && (0, t.throwForMissingRequestStore)(e), i.type) {
			case "prerender-runtime": return (0, c.delayUntilRuntimeStage)(i, u(i.draftMode, r));
			case "request": return u(i.draftMode, r);
			case "cache":
			case "private-cache":
			case "unstable-cache":
				let n = (0, t.getDraftModeProviderForCacheScope)(r, i);
				if (n) return u(n, r);
			case "prerender":
			case "prerender-ppr":
			case "prerender-legacy": return u(null, r);
			case "prerender-client":
			case "validation-client": {
				let e = "`draftMode`";
				throw Object.defineProperty(new s.InvariantError(`${e} must not be used within a Client Component. Next.js should be preventing ${e} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
					value: "E1046",
					enumerable: !1,
					configurable: !0
				});
			}
			case "generate-static-params": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${r.route} used \`${e}()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
				value: "E1132",
				enumerable: !1,
				configurable: !0
			});
			default: return i;
		}
	}
	function u(e, t) {
		let n = e ?? d;
		return f.get(n) || Promise.resolve(new p(e));
	}
	var d = {}, f = /* @__PURE__ */ new WeakMap(), p = class {
		constructor(e) {
			this._provider = e;
		}
		get isEnabled() {
			return this._provider === null ? !1 : this._provider.isEnabled;
		}
		enable() {
			h("draftMode().enable()", this.enable), this._provider !== null && this._provider.enable();
		}
		disable() {
			h("draftMode().disable()", this.disable), this._provider !== null && this._provider.disable();
		}
	};
	(0, i.createDedupedByCallsiteServerErrorLoggerDev)(m);
	function m(e, t) {
		let n = e ? `Route "${e}" ` : "This route ";
		return Object.defineProperty(/* @__PURE__ */ Error(`${n}used ${t}. \`draftMode()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
			value: "E835",
			enumerable: !1,
			configurable: !0
		});
	}
	function h(e, i) {
		let c = n.workAsyncStorage.getStore(), l = t.workUnitAsyncStorage.getStore();
		if (c) {
			if (l?.phase === "after") throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${c.route} used "${e}" inside \`after()\`. The enabled status of \`draftMode()\` can be read inside \`after()\` but you cannot enable or disable \`draftMode()\`. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
				value: "E845",
				enumerable: !1,
				configurable: !0
			});
			if (c.dynamicShouldError) throw Object.defineProperty(new a.StaticGenBailoutError(`Route ${c.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
				value: "E553",
				enumerable: !1,
				configurable: !0
			});
			if (l) switch (l.type) {
				case "cache":
				case "private-cache": {
					let t = Object.defineProperty(/* @__PURE__ */ Error(`Route ${c.route} used "${e}" inside "use cache". The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
						value: "E829",
						enumerable: !1,
						configurable: !0
					});
					throw Error.captureStackTrace(t, i), c.invalidDynamicUsageError ?? (c.invalidDynamicUsageError = t), t;
				}
				case "unstable-cache": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${c.route} used "${e}" inside a function cached with \`unstable_cache()\`. The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
					value: "E844",
					enumerable: !1,
					configurable: !0
				});
				case "prerender":
				case "prerender-runtime": {
					let t = Object.defineProperty(/* @__PURE__ */ Error(`Route ${c.route} used ${e} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`), "__NEXT_ERROR_CODE", {
						value: "E126",
						enumerable: !1,
						configurable: !0
					});
					return (0, r.abortAndThrowOnSynchronousRequestDataAccess)(c.route, e, t, l);
				}
				case "prerender-client":
				case "validation-client":
					let t = "`draftMode`";
					throw Object.defineProperty(new s.InvariantError(`${t} must not be used within a Client Component. Next.js should be preventing ${t} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
						value: "E1046",
						enumerable: !1,
						configurable: !0
					});
				case "prerender-ppr": return (0, r.postponeWithTracking)(c.route, e, l.dynamicTracking);
				case "prerender-legacy":
					l.revalidate = 0;
					let n = Object.defineProperty(new o.DynamicServerError(`Route ${c.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
						value: "E558",
						enumerable: !1,
						configurable: !0
					});
					throw c.dynamicUsageDescription = e, c.dynamicUsageStack = n.stack, n;
				case "request":
					(0, r.trackDynamicDataInDynamicRender)(l);
					break;
				case "generate-static-params": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${c.route} used \`${e}\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
					value: "E1121",
					enumerable: !1,
					configurable: !0
				});
				default:
			}
		}
	}
})), av = /* @__PURE__ */ u(((e, t) => {
	t.exports.cookies = tv().cookies, t.exports.headers = rv().headers, t.exports.draftMode = iv().draftMode;
}));
//#endregion
//#region node_modules/next-intl/dist/esm/production/server/react-client/index.js
function ov(e) {
	return () => {
		throw Error(`\`${e}\` is not supported in Client Components.`);
	};
}
function sv(...e) {
	return ov("getRequestConfig");
}
//#endregion
//#region lib/i18n.ts
var cv = av();
function lv(e) {
	if (!e) return null;
	let t = e.split(",").map((e) => e.split(";")[0].trim().toLowerCase()).filter(Boolean);
	for (let e of t) {
		let t = e.split("-")[0];
		if (hn(t)) return t;
	}
	return null;
}
sv(async ({ requestLocale: e }) => {
	let t = await uv(e), [n, r] = await Promise.all([O_(/* @__PURE__ */ Object.assign({
		"../messages/demo.en.json": () => import("./widget-react-DSw03RG7.js").then((e) => e.n),
		"../messages/demo.uk.json": () => import("./widget-react-D-QrEVpv.js").then((e) => e.n),
		"../messages/en.json": () => import("./widget-react-Cj_zbk_F.js").then((e) => e.n),
		"../messages/uk.json": () => import("./widget-react-AgErOR36.js").then((e) => e.n)
	}), `../messages/${t}.json`, 3), O_(/* @__PURE__ */ Object.assign({
		"../messages/demo.en.json": () => import("./widget-react-DSw03RG7.js").then((e) => e.n),
		"../messages/demo.uk.json": () => import("./widget-react-D-QrEVpv.js").then((e) => e.n)
	}), `../messages/demo.${t}.json`, 3)]);
	return {
		locale: t,
		messages: {
			...n.default,
			demo: r.default
		}
	};
});
async function uv(e) {
	let t = await e;
	if (hn(t)) return t;
	try {
		let e = await (0, cv.headers)(), t = e.get("x-wexio-locale");
		if (hn(t)) return t;
		let n = (await (0, cv.cookies)()).get("wexio-locale")?.value;
		if (hn(n)) return n;
		let r = lv(e.get("accept-language"));
		if (r) return r;
	} catch {}
	return "en";
}
//#endregion
//#region lib/locale-detect.ts
function dv(e) {
	if (typeof window > "u") return "en";
	let t = fv(new URL(window.location.href).searchParams.get("lang"));
	if (t) return t;
	let n = fv(pv("wexio-locale"));
	if (n) return n;
	if (e && e !== "AUTO" && e !== "WEBSITE") {
		let t = fv(e);
		if (t) return t;
	} else if (e === "WEBSITE") {
		let e = fv(document.documentElement.lang);
		if (e) return e;
	}
	return fv(navigator.language) || "en";
}
function fv(e) {
	if (!e) return null;
	let t = e.toLowerCase().split(/[-_]/)[0];
	return mn.includes(t) ? t : null;
}
function pv(e) {
	let t = document.cookie.split(";");
	for (let n of t) {
		let [t, ...r] = n.trim().split("=");
		if (t === e) return decodeURIComponent(r.join("="));
	}
	return null;
}
//#endregion
//#region react-component/styles.css?inline
var mv = "/*! tailwindcss v4.3.0 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\"}::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\"}}}@layer theme{:root,:host{--color-amber-300:#ffd236;--color-emerald-300:#5ee9b5;--color-sky-300:#77d4ff;--color-violet-300:#c4b4ff;--color-rose-300:#ffa2ae;--color-zinc-100:#f4f4f5;--color-zinc-500:#71717b;--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height:calc(2.25 / 1.875);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wide:.025em;--tracking-wider:.05em;--leading-tight:1.25;--leading-snug:1.375;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--ease-out:cubic-bezier(0, 0, .2, 1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-bounce:bounce 1s infinite;--blur-sm:8px;--blur-md:12px;--blur-lg:16px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-geist-sans);--default-mono-font-family:var(--font-geist-mono);--color-wx-fg-subtle:var(--wx-fg-subtle)}@supports (color:color(display-p3 0 0 0)){:root,:host{--color-amber-300:color(display-p3 .974327 .83063 .33298);--color-emerald-300:color(display-p3 .524941 .903425 .722352);--color-sky-300:color(display-p3 .546356 .822561 .990576);--color-violet-300:color(display-p3 .758872 .706261 .991729);--color-rose-300:color(display-p3 .96017 .647703 .683715);--color-zinc-100:color(display-p3 .956385 .956385 .959079);--color-zinc-500:color(display-p3 .442983 .442931 .480324)}}@supports (color:lab(0% 0 0)){:root,:host{--color-amber-300:lab(86.4156% 6.13147 78.3961);--color-emerald-300:lab(83.9203% -48.7124 13.8849);--color-sky-300:lab(80.3307% -20.2945 -31.385);--color-violet-300:lab(76.7419% 18.3911 -37.0706);--color-rose-300:lab(76.6339% 38.3549 9.68835);--color-zinc-100:lab(96.1634% .0993311 -.364041);--color-zinc-500:lab(47.8878% 1.65477 -5.77283)}}}@layer base{*,:after,:before{box-sizing:border-box;border:0 solid;margin:0;padding:0}::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::-webkit-file-upload-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::-webkit-file-upload-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:-webkit-any([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:-webkit-any([multiple],[size])) optgroup option{padding-inline-start:20px}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::-webkit-file-upload-button{margin-inline-end:4px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-year-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-month-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-day-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-hour-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-minute-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-second-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-millisecond-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-meridiem-field{padding-block-start:0;padding-block-end:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button{-webkit-appearance:button;appearance:button}input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;appearance:button}::-webkit-file-upload-button{-webkit-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.-inset-2{inset:calc(var(--spacing) * -2)}.inset-0{inset:calc(var(--spacing) * 0)}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.inset-x-2{inset-inline:calc(var(--spacing) * 2)}.-top-1{top:calc(var(--spacing) * -1)}.-top-1\\.5{top:calc(var(--spacing) * -1.5)}.top-0{top:calc(var(--spacing) * 0)}.top-0\\.5{top:calc(var(--spacing) * .5)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-4{top:calc(var(--spacing) * 4)}.-right-1{right:calc(var(--spacing) * -1)}.-right-1\\.5{right:calc(var(--spacing) * -1.5)}.-right-2{right:calc(var(--spacing) * -2)}.right-0{right:calc(var(--spacing) * 0)}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-5{right:calc(var(--spacing) * 5)}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-5{bottom:calc(var(--spacing) * 5)}.bottom-24{bottom:calc(var(--spacing) * 24)}.bottom-full{bottom:100%}.left-0{left:calc(var(--spacing) * 0)}.left-0\\.5{left:calc(var(--spacing) * .5)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-3\\.5{left:calc(var(--spacing) * 3.5)}.left-4{left:calc(var(--spacing) * 4)}.isolate{isolation:isolate}.-z-10{z-index:calc(10 * -1)}.z-10{z-index:10}.z-20{z-index:20}.z-40{z-index:40}.z-50{z-index:50}.z-\\[10000\\]{z-index:10000}.z-\\[2147483647\\]{z-index:2147483647}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing) * 0)}.mx-auto{margin-inline-start:auto;margin-inline-end:auto}.my-1{margin-block:calc(var(--spacing) * 1)}.my-2{margin-block:calc(var(--spacing) * 2)}.my-3{margin-block:calc(var(--spacing) * 3)}.my-4{margin-block:calc(var(--spacing) * 4)}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-1\\.5{margin-top:calc(var(--spacing) * 1.5)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-2\\.5{margin-top:calc(var(--spacing) * 2.5)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-5{margin-top:calc(var(--spacing) * 5)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mr-1{margin-right:calc(var(--spacing) * 1)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-1\\.5{margin-bottom:calc(var(--spacing) * 1.5)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.ml-0\\.5{margin-left:calc(var(--spacing) * .5)}.ml-9{margin-left:calc(var(--spacing) * 9)}.line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-10{-webkit-line-clamp:10;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-\\[16\\/10\\]{aspect-ratio:16/10}.aspect-square{aspect-ratio:1}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2{height:calc(var(--spacing) * 2)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-13{height:calc(var(--spacing) * 13)}.h-14{height:calc(var(--spacing) * 14)}.h-16{height:calc(var(--spacing) * 16)}.h-24{height:calc(var(--spacing) * 24)}.h-96{height:calc(var(--spacing) * 96)}.h-\\[1\\.05em\\]{height:1.05em}.h-\\[2px\\]{height:2px}.h-\\[90vh\\]{height:90vh}.h-\\[720px\\]{height:720px}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.max-h-56{max-height:calc(var(--spacing) * 56)}.max-h-72{max-height:calc(var(--spacing) * 72)}.max-h-80{max-height:calc(var(--spacing) * 80)}.max-h-\\[20rem\\]{max-height:20rem}.max-h-\\[90vh\\]{max-height:90vh}.max-h-\\[calc\\(100\\%-7rem\\)\\]{max-height:calc(100% - 7rem)}.max-h-\\[calc\\(100dvh-7rem\\)\\]{max-height:calc(100dvh - 7rem)}.max-h-full{max-height:100%}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-12{min-height:calc(var(--spacing) * 12)}.w-1\\.5{width:calc(var(--spacing) * 1.5)}.w-1\\/2{width:50%}.w-1\\/3{width:33.3333%}.w-2{width:calc(var(--spacing) * 2)}.w-2\\/3{width:66.6667%}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-4\\/5{width:80%}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-7\\/12{width:58.3333%}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-9\\/12{width:75%}.w-10{width:calc(var(--spacing) * 10)}.w-10\\/12{width:83.3333%}.w-11\\/12{width:91.6667%}.w-12{width:calc(var(--spacing) * 12)}.w-14{width:calc(var(--spacing) * 14)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-32{width:calc(var(--spacing) * 32)}.w-40{width:calc(var(--spacing) * 40)}.w-44{width:calc(var(--spacing) * 44)}.w-56{width:calc(var(--spacing) * 56)}.w-60{width:calc(var(--spacing) * 60)}.w-\\[0\\.5em\\]{width:.5em}.w-\\[90vw\\]{width:90vw}.w-\\[300px\\]{width:300px}.w-\\[420px\\]{width:420px}.w-auto{width:auto}.w-full{width:100%}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90vw\\]{max-width:90vw}.max-w-\\[140px\\]{max-width:140px}.max-w-\\[calc\\(100\\%-2rem\\)\\]{max-width:calc(100% - 2rem)}.max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.max-w-full{max-width:100%}.max-w-none{max-width:none}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-3\\.5{min-width:calc(var(--spacing) * 3.5)}.min-w-5{min-width:calc(var(--spacing) * 5)}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.min-w-full{min-width:100%}.flex-1{flex:1}.flex-\\[2_2_0\\%\\]{flex:2 2}.flex-shrink,.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.table-fixed{table-layout:fixed}.origin-bottom-left{transform-origin:0 100%}.origin-left{transform-origin:0}.-translate-x-1\\/2{--tw-translate-x:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-4{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-\\[1px\\]{--tw-translate-x:1px;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[0\\.15em\\]{--tw-translate-y:.15em;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-x-0{--tw-scale-x:0%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-x-100{--tw-scale-x:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-bounce{animation:var(--animate-bounce)}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.cursor-zoom-in{cursor:zoom-in}.touch-none{touch-action:none}.resize{resize:both}.resize-none{resize:none}.\\[scrollbar-width\\:thin\\]{scrollbar-width:thin}.\\[scrollbar-color\\:var\\(--color-wx-fg-subtle\\)_transparent\\]{scrollbar-color:var(--color-wx-fg-subtle) transparent}.list-none{list-style-type:none}.auto-rows-fr{grid-auto-rows:minmax(0,1fr)}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-rows-\\[0fr\\]{grid-template-rows:0fr}.grid-rows-\\[1fr\\]{grid-template-rows:1fr}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.-space-x-1\\.5>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * -1.5) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * -1.5) * calc(1 - var(--tw-space-x-reverse)))}:where(.-space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * -2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * -2) * calc(1 - var(--tw-space-x-reverse)))}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.rounded{border-radius:.25rem}.rounded-\\[1px\\]{border-radius:1px}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-none{border-radius:0}.rounded-sm{border-radius:var(--radius-sm)}.rounded-wx{border-radius:var(--wx-radius)}.rounded-wx-lg{border-radius:var(--wx-radius-lg)}.rounded-wx-sm{border-radius:var(--wx-radius-sm)}.rounded-wx-xl{border-radius:var(--wx-radius-xl)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-white{border-color:var(--color-white)}.border-wx-bg{border-color:var(--wx-bg)}.border-wx-border,.border-wx-border\\/70{border-color:var(--wx-border)}@supports (color:color-mix(in lab, red, red)){.border-wx-border\\/70{border-color:color-mix(in oklab, var(--wx-border) 70%, transparent)}}.border-wx-danger\\/30{border-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.border-wx-danger\\/30{border-color:color-mix(in oklab, var(--wx-danger) 30%, transparent)}}.border-wx-primary,.border-wx-primary\\/30{border-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.border-wx-primary\\/30{border-color:color-mix(in oklab, var(--wx-primary) 30%, transparent)}}.border-wx-success\\/30{border-color:var(--wx-success)}@supports (color:color-mix(in lab, red, red)){.border-wx-success\\/30{border-color:color-mix(in oklab, var(--wx-success) 30%, transparent)}}.border-t-transparent{border-top-color:#0000}.border-t-wx-primary{border-top-color:var(--wx-primary)}.border-l-transparent{border-left-color:#0000}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab, red, red)){.bg-black\\/30{background-color:color-mix(in oklab, var(--color-black) 30%, transparent)}}.bg-black\\/45{background-color:#00000073}@supports (color:color-mix(in lab, red, red)){.bg-black\\/45{background-color:color-mix(in oklab, var(--color-black) 45%, transparent)}}.bg-black\\/85{background-color:#000000d9}@supports (color:color-mix(in lab, red, red)){.bg-black\\/85{background-color:color-mix(in oklab, var(--color-black) 85%, transparent)}}.bg-current{background-color:currentColor}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/10{background-color:#ffffff1a}@supports (color:color-mix(in lab, red, red)){.bg-white\\/10{background-color:color-mix(in oklab, var(--color-white) 10%, transparent)}}.bg-wx-bg{background-color:var(--wx-bg)}.bg-wx-bg-elevated{background-color:var(--wx-bg-elevated)}.bg-wx-bg-elevated-2{background-color:var(--wx-bg-elevated-2)}.bg-wx-bg-elevated\\/60{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg-elevated\\/60{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.bg-wx-bg-elevated\\/70{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg-elevated\\/70{background-color:color-mix(in oklab, var(--wx-bg-elevated) 70%, transparent)}}.bg-wx-bg\\/60{background-color:var(--wx-bg)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg\\/60{background-color:color-mix(in oklab, var(--wx-bg) 60%, transparent)}}.bg-wx-bg\\/95{background-color:var(--wx-bg)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg\\/95{background-color:color-mix(in oklab, var(--wx-bg) 95%, transparent)}}.bg-wx-danger,.bg-wx-danger\\/5{background-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.bg-wx-danger\\/5{background-color:color-mix(in oklab, var(--wx-danger) 5%, transparent)}}.bg-wx-danger\\/10{background-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.bg-wx-danger\\/10{background-color:color-mix(in oklab, var(--wx-danger) 10%, transparent)}}.bg-wx-danger\\/40{background-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.bg-wx-danger\\/40{background-color:color-mix(in oklab, var(--wx-danger) 40%, transparent)}}.bg-wx-fg-muted,.bg-wx-fg-muted\\/40{background-color:var(--wx-fg-muted)}@supports (color:color-mix(in lab, red, red)){.bg-wx-fg-muted\\/40{background-color:color-mix(in oklab, var(--wx-fg-muted) 40%, transparent)}}.bg-wx-launcher-bg{background-color:var(--wx-launcher-bg)}.bg-wx-primary{background-color:var(--wx-primary)}.bg-wx-primary-fg,.bg-wx-primary-fg\\/10{background-color:var(--wx-primary-fg)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary-fg\\/10{background-color:color-mix(in oklab, var(--wx-primary-fg) 10%, transparent)}}.bg-wx-primary\\/5{background-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary\\/5{background-color:color-mix(in oklab, var(--wx-primary) 5%, transparent)}}.bg-wx-primary\\/10{background-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary\\/10{background-color:color-mix(in oklab, var(--wx-primary) 10%, transparent)}}.bg-wx-primary\\/20{background-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary\\/20{background-color:color-mix(in oklab, var(--wx-primary) 20%, transparent)}}.bg-wx-success,.bg-wx-success\\/5{background-color:var(--wx-success)}@supports (color:color-mix(in lab, red, red)){.bg-wx-success\\/5{background-color:color-mix(in oklab, var(--wx-success) 5%, transparent)}}.bg-wx-success\\/10{background-color:var(--wx-success)}@supports (color:color-mix(in lab, red, red)){.bg-wx-success\\/10{background-color:color-mix(in oklab, var(--wx-success) 10%, transparent)}}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-\\[radial-gradient\\(120\\%_80\\%_at_50\\%_-10\\%\\,rgba\\(99\\,102\\,241\\,0\\.22\\)\\,transparent_55\\%\\)\\,linear-gradient\\(to_bottom\\,var\\(--wx-bg-elevated-2\\)_0\\%\\,var\\(--wx-bg-elevated\\)_40\\%\\,var\\(--wx-bg\\)_75\\%\\)\\]{background-image:radial-gradient(120% 80% at 50% -10%,#6366f138,transparent 55%),linear-gradient(to bottom,var(--wx-bg-elevated-2) 0%,var(--wx-bg-elevated) 40%,var(--wx-bg) 75%)}.from-wx-bg-elevated{--tw-gradient-from:var(--wx-bg-elevated);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-wx-bg-elevated-2{--tw-gradient-to:var(--wx-bg-elevated-2);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.bg-cover{background-size:cover}.bg-center{background-position:50%}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.p-0{padding:calc(var(--spacing) * 0)}.p-0\\.5{padding:calc(var(--spacing) * .5)}.p-1{padding:calc(var(--spacing) * 1)}.p-2{padding:calc(var(--spacing) * 2)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-px{padding:1px}.px-0\\.75{padding-inline:calc(var(--spacing) * .75)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-5{padding-block:calc(var(--spacing) * 5)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-12{padding-block:calc(var(--spacing) * 12)}.pt-0\\.5{padding-top:calc(var(--spacing) * .5)}.pt-1\\.5{padding-top:calc(var(--spacing) * 1.5)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pt-5{padding-top:calc(var(--spacing) * 5)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-9{padding-right:calc(var(--spacing) * 9)}.pb-1{padding-bottom:calc(var(--spacing) * 1)}.pb-1\\.5{padding-bottom:calc(var(--spacing) * 1.5)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-12{padding-bottom:calc(var(--spacing) * 12)}.pl-7{padding-left:calc(var(--spacing) * 7)}.pl-10{padding-left:calc(var(--spacing) * 10)}.text-center{text-align:center}.text-left{text-align:left}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.font-mono{font-family:var(--font-geist-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[0\\.7em\\]{font-size:.7em}.text-\\[8px\\]{font-size:8px}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.text-\\[15px\\]{font-size:15px}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.08em\\]{--tw-tracking:.08em;letter-spacing:.08em}.tracking-\\[0\\.14em\\]{--tw-tracking:.14em;letter-spacing:.14em}.tracking-\\[0\\.22em\\]{--tw-tracking:.22em;letter-spacing:.22em}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.wrap-anywhere{overflow-wrap:anywhere}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-white{color:var(--color-white)}.text-wx-danger{color:var(--wx-danger)}.text-wx-fg{color:var(--wx-fg)}.text-wx-fg-muted{color:var(--wx-fg-muted)}.text-wx-fg-subtle{color:var(--wx-fg-subtle)}.text-wx-launcher-fg{color:var(--wx-launcher-fg)}.text-wx-primary{color:var(--wx-primary)}.text-wx-primary-fg,.text-wx-primary-fg\\/70{color:var(--wx-primary-fg)}@supports (color:color-mix(in lab, red, red)){.text-wx-primary-fg\\/70{color:color-mix(in oklab, var(--wx-primary-fg) 70%, transparent)}}.text-wx-success{color:var(--wx-success)}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-0{opacity:0}.opacity-40{opacity:.4}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-80{opacity:.8}.opacity-85{opacity:.85}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_1px_3px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow:0 1px 3px var(--tw-shadow-color,#00000014);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_2px_8px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow:0 2px 8px var(--tw-shadow-color,#00000014);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_4px_12px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow:0 4px 12px var(--tw-shadow-color,#00000014);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_8px_24px_rgba\\(0\\,0\\,0\\,0\\.18\\)\\]{--tw-shadow:0 8px 24px var(--tw-shadow-color,#0000002e);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_12px_32px_rgba\\(0\\,0\\,0\\,0\\.16\\)\\]{--tw-shadow:0 12px 32px var(--tw-shadow-color,#00000029);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_16px_40px_rgba\\(0\\,0\\,0\\,0\\.16\\)\\]{--tw-shadow:0 16px 40px var(--tw-shadow-color,#00000029);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[inset_0_0_0_1px_rgb\\(0_0_0\\/0\\.04\\)\\]{--tw-shadow:inset 0 0 0 1px var(--tw-shadow-color,#0000000a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring,.ring-1{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-wx-bg{--tw-ring-color:var(--wx-bg)}.ring-wx-bg-elevated,.ring-wx-bg-elevated\\/60{--tw-ring-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.ring-wx-bg-elevated\\/60{--tw-ring-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.ring-wx-border{--tw-ring-color:var(--wx-border)}.ring-wx-danger{--tw-ring-color:var(--wx-danger)}.ring-wx-primary\\/40{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.ring-wx-primary\\/40{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 40%, transparent)}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur-\\[2px\\]{--tw-blur:blur(2px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.blur-lg{--tw-blur:blur(var(--blur-lg));filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[grid-template-rows\\]{transition-property:grid-template-rows;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.\\[animation-delay\\:-0\\.3s\\]{animation-delay:-.3s}.\\[animation-delay\\:-0\\.15s\\]{animation-delay:-.15s}.\\[t\\:systemFieldOptions\\.chatStatus\\.IN_PROGRESS\\]{t:systemFieldOptions.chatStatus.IN PROGRESS}.\\[t\\:systemFields\\.chatStatus\\]{t:systemFields.chatStatus}.\\[t\\:systemFields\\.firstName\\]{t:systemFields.firstName}.ring-inset{--tw-ring-inset:inset}@media (hover:hover){.group-hover\\:translate-x-0\\.5:is(:where(.group):hover *){--tw-translate-x:calc(var(--spacing) * .5);translate:var(--tw-translate-x) var(--tw-translate-y)}.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.group-hover\\:scale-\\[1\\.02\\]:is(:where(.group):hover *){scale:1.02}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}}.placeholder\\:text-wx-danger\\/60::placeholder{color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.placeholder\\:text-wx-danger\\/60::placeholder{color:color-mix(in oklab, var(--wx-danger) 60%, transparent)}}.placeholder\\:text-wx-fg-muted::placeholder{color:var(--wx-fg-muted)}.placeholder\\:text-wx-fg-subtle::placeholder{color:var(--wx-fg-subtle)}.first\\:mt-4:first-child{margin-top:calc(var(--spacing) * 4)}.first\\:border-t-0:first-child{border-top-style:var(--tw-border-style);border-top-width:0}.first\\:pt-0:first-child{padding-top:calc(var(--spacing) * 0)}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.read-only\\:cursor-not-allowed:read-only{cursor:not-allowed}.read-only\\:bg-wx-bg-elevated\\/60:read-only{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.read-only\\:bg-wx-bg-elevated\\/60:read-only{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.read-only\\:text-wx-fg-muted:read-only{color:var(--wx-fg-muted)}.focus-within\\:border-wx-primary:focus-within{border-color:var(--wx-primary)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-within\\:ring-wx-primary\\/20:focus-within{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus-within\\:ring-wx-primary\\/20:focus-within{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 20%, transparent)}}@media (hover:hover){.hover\\:scale-\\[1\\.04\\]:hover{scale:1.04}.hover\\:bg-white\\/20:hover{background-color:#fff3}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-white\\/20:hover{background-color:color-mix(in oklab, var(--color-white) 20%, transparent)}}.hover\\:bg-wx-bg:hover{background-color:var(--wx-bg)}.hover\\:bg-wx-bg-elevated:hover{background-color:var(--wx-bg-elevated)}.hover\\:bg-wx-bg-elevated-2:hover{background-color:var(--wx-bg-elevated-2)}.hover\\:bg-wx-bg-elevated\\/40:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/40:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 40%, transparent)}}.hover\\:bg-wx-bg-elevated\\/50:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/50:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 50%, transparent)}}.hover\\:bg-wx-bg-elevated\\/60:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/60:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.hover\\:bg-wx-bg-elevated\\/80:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/80:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 80%, transparent)}}.hover\\:bg-wx-fg-muted\\/60:hover{background-color:var(--wx-fg-muted)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-fg-muted\\/60:hover{background-color:color-mix(in oklab, var(--wx-fg-muted) 60%, transparent)}}.hover\\:bg-wx-primary:hover{background-color:var(--wx-primary)}.hover\\:bg-wx-primary-fg\\/20:hover{background-color:var(--wx-primary-fg)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-primary-fg\\/20:hover{background-color:color-mix(in oklab, var(--wx-primary-fg) 20%, transparent)}}.hover\\:bg-wx-primary-hover:hover{background-color:var(--wx-primary-hover)}.hover\\:text-wx-danger:hover{color:var(--wx-danger)}.hover\\:text-wx-fg:hover{color:var(--wx-fg)}.hover\\:text-wx-primary-fg:hover{color:var(--wx-primary-fg)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-70:hover{opacity:.7}.hover\\:opacity-80:hover{opacity:.8}.hover\\:opacity-90:hover{opacity:.9}.hover\\:opacity-100:hover{opacity:1}}.focus\\:border-wx-primary:focus{border-color:var(--wx-primary)}.focus\\:bg-wx-bg-elevated:focus{background-color:var(--wx-bg-elevated)}.focus\\:text-wx-fg:focus{color:var(--wx-fg)}.focus\\:ring-0:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-wx-danger:focus{--tw-ring-color:var(--wx-danger)}.focus\\:ring-wx-primary:focus,.focus\\:ring-wx-primary\\/20:focus{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus\\:ring-wx-primary\\/20:focus{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 20%, transparent)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-wx-launcher-bg:focus-visible{--tw-ring-color:var(--wx-launcher-bg)}.focus-visible\\:ring-wx-primary:focus-visible{--tw-ring-color:var(--wx-primary)}.focus-visible\\:ring-wx-primary\\/30:focus-visible{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus-visible\\:ring-wx-primary\\/30:focus-visible{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 30%, transparent)}}.focus-visible\\:ring-wx-primary\\/40:focus-visible{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus-visible\\:ring-wx-primary\\/40:focus-visible{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 40%, transparent)}}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:ring-offset-wx-bg:focus-visible{--tw-ring-offset-color:var(--wx-bg)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-wx-bg-elevated\\/60:disabled{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.disabled\\:bg-wx-bg-elevated\\/60:disabled{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.disabled\\:text-wx-fg-muted:disabled{color:var(--wx-fg-muted)}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60:disabled{opacity:.6}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=active\\]\\:text-wx-fg[data-state=active]{color:var(--wx-fg)}.data-\\[state\\=checked\\]\\:font-medium[data-state=checked]{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.data-\\[state\\=visible\\]\\:opacity-100[data-state=visible]{opacity:1}.dark\\:block:where([data-theme=dark],[data-theme=dark] *){display:block}.dark\\:hidden:where([data-theme=dark],[data-theme=dark] *){display:none}.dark\\:bg-\\[radial-gradient\\(120\\%_80\\%_at_50\\%_-10\\%\\,rgba\\(99\\,102\\,241\\,0\\.35\\)\\,transparent_55\\%\\)\\,linear-gradient\\(to_bottom\\,var\\(--wx-bg-elevated-2\\)_0\\%\\,var\\(--wx-bg-elevated\\)_40\\%\\,var\\(--wx-bg\\)_75\\%\\)\\]:where([data-theme=dark],[data-theme=dark] *){background-image:radial-gradient(120% 80% at 50% -10%,#6366f159,transparent 55%),linear-gradient(to bottom,var(--wx-bg-elevated-2) 0%,var(--wx-bg-elevated) 40%,var(--wx-bg) 75%)}.\\[\\&_\\.epr-btn-clear-search\\:focus\\]\\:\\!bg-wx-bg-elevated-2 .epr-btn-clear-search:focus,.\\[\\&_\\.epr-btn-clear-search\\:hover\\]\\:\\!bg-wx-bg-elevated-2 .epr-btn-clear-search:hover{background-color:var(--wx-bg-elevated-2)!important}.\\[\\&_\\.hljs-attr\\]\\:text-sky-300 .hljs-attr,.\\[\\&_\\.hljs-attribute\\]\\:text-sky-300 .hljs-attribute{color:var(--color-sky-300)}.\\[\\&_\\.hljs-built_in\\]\\:text-violet-300 .hljs-built in{color:var(--color-violet-300)}.\\[\\&_\\.hljs-comment\\]\\:text-zinc-500 .hljs-comment{color:var(--color-zinc-500)}.\\[\\&_\\.hljs-comment\\]\\:italic .hljs-comment{font-style:italic}.\\[\\&_\\.hljs-keyword\\]\\:text-violet-300 .hljs-keyword{color:var(--color-violet-300)}.\\[\\&_\\.hljs-literal\\]\\:text-amber-300 .hljs-literal{color:var(--color-amber-300)}.\\[\\&_\\.hljs-name\\]\\:text-rose-300 .hljs-name{color:var(--color-rose-300)}.\\[\\&_\\.hljs-number\\]\\:text-amber-300 .hljs-number{color:var(--color-amber-300)}.\\[\\&_\\.hljs-string\\]\\:text-emerald-300 .hljs-string{color:var(--color-emerald-300)}.\\[\\&_\\.hljs-tag\\]\\:text-rose-300 .hljs-tag{color:var(--color-rose-300)}.\\[\\&_\\.hljs-title\\]\\:font-medium .hljs-title{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.\\[\\&_\\.hljs-title\\]\\:text-zinc-100 .hljs-title{color:var(--color-zinc-100)}.\\[\\&_\\.hljs-type\\]\\:text-violet-300 .hljs-type{color:var(--color-violet-300)}.\\[\\&_a\\]\\:text-inherit a{color:inherit}.\\[\\&_a\\]\\:text-wx-primary a{color:var(--wx-primary)}.\\[\\&_a\\]\\:no-underline a{text-decoration-line:none}.\\[\\&_a\\]\\:underline a{text-decoration-line:underline}.\\[\\&_a\\]\\:underline-offset-2 a{text-underline-offset:2px}.\\[\\&_a\\]\\:opacity-90 a{opacity:.9}.\\[\\&_a\\]\\:transition-opacity a{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_a\\:hover\\]\\:opacity-70 a:hover{opacity:.7}.\\[\\&_a\\:hover\\]\\:opacity-100 a:hover{opacity:1}.\\[\\&_blockquote\\]\\:my-4 blockquote{margin-block:calc(var(--spacing) * 4)}.\\[\\&_blockquote\\]\\:border-l-2 blockquote{border-left-style:var(--tw-border-style);border-left-width:2px}.\\[\\&_blockquote\\]\\:border-wx-primary\\/40 blockquote{border-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.\\[\\&_blockquote\\]\\:border-wx-primary\\/40 blockquote{border-color:color-mix(in oklab, var(--wx-primary) 40%, transparent)}}.\\[\\&_blockquote\\]\\:pl-3 blockquote{padding-left:calc(var(--spacing) * 3)}.\\[\\&_blockquote\\]\\:text-wx-fg-muted blockquote{color:var(--wx-fg-muted)}.\\[\\&_blockquote\\]\\:italic blockquote{font-style:italic}.\\[\\&_code\\]\\:rounded-\\[6px\\] code{border-radius:6px}.\\[\\&_code\\]\\:rounded-sm code{border-radius:var(--radius-sm)}.\\[\\&_code\\]\\:bg-black\\/10 code{background-color:#0000001a}@supports (color:color-mix(in lab, red, red)){.\\[\\&_code\\]\\:bg-black\\/10 code{background-color:color-mix(in oklab, var(--color-black) 10%, transparent)}}.\\[\\&_code\\]\\:bg-white\\/15 code{background-color:#ffffff26}@supports (color:color-mix(in lab, red, red)){.\\[\\&_code\\]\\:bg-white\\/15 code{background-color:color-mix(in oklab, var(--color-white) 15%, transparent)}}.\\[\\&_code\\]\\:bg-wx-bg-elevated code{background-color:var(--wx-bg-elevated)}.\\[\\&_code\\]\\:px-1 code{padding-inline:calc(var(--spacing) * 1)}.\\[\\&_code\\]\\:px-1\\.5 code{padding-inline:calc(var(--spacing) * 1.5)}.\\[\\&_code\\]\\:py-0\\.5 code{padding-block:calc(var(--spacing) * .5)}.\\[\\&_code\\]\\:font-mono code{font-family:var(--font-geist-mono)}.\\[\\&_code\\]\\:text-\\[0\\.85em\\] code{font-size:.85em}.\\[\\&_details\\]\\:my-2 details{margin-block:calc(var(--spacing) * 2)}.\\[\\&_details\\]\\:overflow-hidden details{overflow:hidden}.\\[\\&_details\\]\\:rounded-lg details{border-radius:var(--radius-lg)}.\\[\\&_details\\]\\:border details{border-style:var(--tw-border-style);border-width:1px}.\\[\\&_details\\]\\:border-wx-border details{border-color:var(--wx-border)}.\\[\\&_details\\]\\:bg-wx-bg-elevated\\/40 details{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.\\[\\&_details\\]\\:bg-wx-bg-elevated\\/40 details{background-color:color-mix(in oklab, var(--wx-bg-elevated) 40%, transparent)}}.\\[\\&_details\\+details\\]\\:mt-2 details+details{margin-top:calc(var(--spacing) * 2)}.\\[\\&_details\\[open\\]_summary\\]\\:border-b details[open] summary{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.\\[\\&_details\\[open\\]_summary\\]\\:border-wx-border details[open] summary{border-color:var(--wx-border)}.\\[\\&_details\\[open\\]_summary\\]\\:after\\:rotate-90 details[open] summary:after{content:var(--tw-content);rotate:90deg}.\\[\\&_em\\]\\:italic em{font-style:italic}.\\[\\&_figcaption\\]\\:mt-2 figcaption{margin-top:calc(var(--spacing) * 2)}.\\[\\&_figcaption\\]\\:text-xs figcaption{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.\\[\\&_figcaption\\]\\:text-wx-fg-muted figcaption{color:var(--wx-fg-muted)}.\\[\\&_figcaption\\]\\:italic figcaption{font-style:italic}.\\[\\&_figure\\]\\:my-5 figure{margin-block:calc(var(--spacing) * 5)}.\\[\\&_figure\\]\\:flex figure{display:flex}.\\[\\&_figure\\]\\:flex-col figure{flex-direction:column}.\\[\\&_figure\\]\\:items-center figure{align-items:center}.\\[\\&_figure\\]\\:text-center figure{text-align:center}.\\[\\&_figure_img\\]\\:my-0 figure img{margin-block:calc(var(--spacing) * 0)}.\\[\\&_h1\\]\\:mt-6 h1{margin-top:calc(var(--spacing) * 6)}.\\[\\&_h1\\]\\:mb-3 h1{margin-bottom:calc(var(--spacing) * 3)}.\\[\\&_h1\\]\\:scroll-mt-16 h1{scroll-margin-top:calc(var(--spacing) * 16)}.\\[\\&_h1\\]\\:text-xl h1{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.\\[\\&_h1\\]\\:font-semibold h1{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_h1\\]\\:tracking-tight h1{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.\\[\\&_h2\\]\\:mt-5 h2{margin-top:calc(var(--spacing) * 5)}.\\[\\&_h2\\]\\:mb-2 h2{margin-bottom:calc(var(--spacing) * 2)}.\\[\\&_h2\\]\\:scroll-mt-16 h2{scroll-margin-top:calc(var(--spacing) * 16)}.\\[\\&_h2\\]\\:text-base h2{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\[\\&_h2\\]\\:font-semibold h2{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_h2\\]\\:tracking-tight h2{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.\\[\\&_h3\\]\\:mt-4 h3{margin-top:calc(var(--spacing) * 4)}.\\[\\&_h3\\]\\:mb-1\\.5 h3{margin-bottom:calc(var(--spacing) * 1.5)}.\\[\\&_h3\\]\\:scroll-mt-16 h3{scroll-margin-top:calc(var(--spacing) * 16)}.\\[\\&_h3\\]\\:text-sm h3{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\[\\&_h3\\]\\:font-semibold h3{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_hr\\]\\:my-6 hr{margin-block:calc(var(--spacing) * 6)}.\\[\\&_hr\\]\\:border-wx-border hr{border-color:var(--wx-border)}.\\[\\&_img\\]\\:mx-auto img{margin-inline-start:auto;margin-inline-end:auto}.\\[\\&_img\\]\\:my-3 img{margin-block:calc(var(--spacing) * 3)}.\\[\\&_img\\]\\:block img{display:block}.\\[\\&_img\\]\\:max-w-full img{max-width:100%}.\\[\\&_li\\]\\:m-0 li{margin:calc(var(--spacing) * 0)}.\\[\\&_li\\]\\:my-0\\.5 li{margin-block:calc(var(--spacing) * .5)}.\\[\\&_li\\]\\:my-1 li{margin-block:calc(var(--spacing) * 1)}.\\[\\&_ol\\]\\:my-1\\.5 ol{margin-block:calc(var(--spacing) * 1.5)}.\\[\\&_ol\\]\\:my-3 ol{margin-block:calc(var(--spacing) * 3)}.\\[\\&_ol\\]\\:list-decimal ol{list-style-type:decimal}.\\[\\&_ol\\]\\:pl-5 ol{padding-left:calc(var(--spacing) * 5)}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol ::marker{color:var(--wx-fg-subtle)}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol::marker{color:var(--wx-fg-subtle)}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol ::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_p\\]\\:my-3 p{margin-block:calc(var(--spacing) * 3)}.\\[\\&_pre\\]\\:my-4 pre{margin-block:calc(var(--spacing) * 4)}.\\[\\&_pre\\]\\:overflow-x-auto pre{overflow-x:auto}.\\[\\&_pre\\]\\:rounded-lg pre{border-radius:var(--radius-lg)}.\\[\\&_pre\\]\\:border pre{border-style:var(--tw-border-style);border-width:1px}.\\[\\&_pre\\]\\:border-wx-border pre{border-color:var(--wx-border)}.\\[\\&_pre\\]\\:bg-\\[\\#0f1115\\] pre{background-color:#0f1115}.\\[\\&_pre\\]\\:p-4 pre{padding:calc(var(--spacing) * 4)}.\\[\\&_pre\\]\\:text-\\[12\\.5px\\] pre{font-size:12.5px}.\\[\\&_pre\\]\\:leading-relaxed pre{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.\\[\\&_pre\\]\\:text-zinc-100 pre{color:var(--color-zinc-100)}.\\[\\&_pre_code\\]\\:bg-transparent pre code{background-color:#0000}.\\[\\&_pre_code\\]\\:p-0 pre code{padding:calc(var(--spacing) * 0)}.\\[\\&_pre_code\\]\\:text-zinc-100 pre code{color:var(--color-zinc-100)}.\\[\\&_strong\\]\\:font-semibold strong{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_summary\\]\\:relative summary{position:relative}.\\[\\&_summary\\]\\:cursor-pointer summary{cursor:pointer}.\\[\\&_summary\\]\\:list-none summary{list-style-type:none}.\\[\\&_summary\\]\\:px-4 summary{padding-inline:calc(var(--spacing) * 4)}.\\[\\&_summary\\]\\:py-3 summary{padding-block:calc(var(--spacing) * 3)}.\\[\\&_summary\\]\\:pr-10 summary{padding-right:calc(var(--spacing) * 10)}.\\[\\&_summary\\]\\:text-sm summary{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\[\\&_summary\\]\\:font-medium summary{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.\\[\\&_summary\\]\\:text-wx-fg summary{color:var(--wx-fg)}.\\[\\&_summary\\]\\:after\\:absolute summary:after{content:var(--tw-content);position:absolute}.\\[\\&_summary\\]\\:after\\:top-1\\/2 summary:after{content:var(--tw-content);top:50%}.\\[\\&_summary\\]\\:after\\:right-4 summary:after{content:var(--tw-content);right:calc(var(--spacing) * 4)}.\\[\\&_summary\\]\\:after\\:-translate-y-1\\/2 summary:after{content:var(--tw-content);--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\&_summary\\]\\:after\\:text-base summary:after{content:var(--tw-content);font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\[\\&_summary\\]\\:after\\:leading-none summary:after{content:var(--tw-content);--tw-leading:1;line-height:1}.\\[\\&_summary\\]\\:after\\:text-wx-fg-subtle summary:after{content:var(--tw-content);color:var(--wx-fg-subtle)}.\\[\\&_summary\\]\\:after\\:transition-transform summary:after{content:var(--tw-content);transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_summary\\]\\:after\\:content-\\[\\'\\\\\\\\203A\\'\\] summary:after{--tw-content:\"\\\\203A\";content:var(--tw-content)}.\\[\\&_summary\\:\\:-webkit-details-marker\\]\\:hidden summary::-webkit-details-marker{display:none}.\\[\\&_summary\\:\\:marker\\]\\:hidden summary::marker{display:none}.\\[\\&_svg\\]\\:fill-wx-launcher-fg svg{fill:var(--wx-launcher-fg)}.\\[\\&_svg\\]\\:stroke-wx-launcher-fg svg{stroke:var(--wx-launcher-fg)}.dark\\:\\[\\&_svg\\]\\:fill-wx-bg:where([data-theme=dark],[data-theme=dark] *) svg{fill:var(--wx-bg)}.dark\\:\\[\\&_svg\\]\\:stroke-wx-bg:where([data-theme=dark],[data-theme=dark] *) svg{stroke:var(--wx-bg)}.\\[\\&_table\\]\\:my-3 table{margin-block:calc(var(--spacing) * 3)}.\\[\\&_table\\]\\:w-full table{width:100%}.\\[\\&_table\\]\\:table-fixed table{table-layout:fixed}.\\[\\&_table\\]\\:border-collapse table{border-collapse:collapse}.\\[\\&_table\\]\\:overflow-hidden table{overflow:hidden}.\\[\\&_table\\]\\:rounded-lg table{border-radius:var(--radius-lg)}.\\[\\&_table\\]\\:border table{border-style:var(--tw-border-style);border-width:1px}.\\[\\&_table\\]\\:border-wx-border table{border-color:var(--wx-border)}.\\[\\&_table\\]\\:text-xs table{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.\\[\\&_tbody_tr\\]\\:border-t tbody tr{border-top-style:var(--tw-border-style);border-top-width:1px}.\\[\\&_tbody_tr\\]\\:border-wx-border tbody tr{border-color:var(--wx-border)}.\\[\\&_tbody_tr\\:nth-child\\(odd\\)\\]\\:bg-wx-bg-elevated\\/40 tbody tr:nth-child(odd){background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.\\[\\&_tbody_tr\\:nth-child\\(odd\\)\\]\\:bg-wx-bg-elevated\\/40 tbody tr:nth-child(odd){background-color:color-mix(in oklab, var(--wx-bg-elevated) 40%, transparent)}}.\\[\\&_td\\]\\:px-2\\.5 td{padding-inline:calc(var(--spacing) * 2.5)}.\\[\\&_td\\]\\:py-1\\.5 td{padding-block:calc(var(--spacing) * 1.5)}.\\[\\&_td\\]\\:align-top td{vertical-align:top}.\\[\\&_td\\]\\:text-wx-fg td{color:var(--wx-fg)}.\\[\\&_td_p\\]\\:my-0 td p{margin-block:calc(var(--spacing) * 0)}.\\[\\&_td_p\\]\\:inline td p{display:inline}.\\[\\&_td\\+td\\]\\:border-l td+td{border-left-style:var(--tw-border-style);border-left-width:1px}.\\[\\&_td\\+td\\]\\:border-wx-border td+td{border-color:var(--wx-border)}.\\[\\&_th\\]\\:border-b th{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.\\[\\&_th\\]\\:border-wx-border th{border-color:var(--wx-border)}.\\[\\&_th\\]\\:px-2\\.5 th{padding-inline:calc(var(--spacing) * 2.5)}.\\[\\&_th\\]\\:py-1\\.5 th{padding-block:calc(var(--spacing) * 1.5)}.\\[\\&_th\\]\\:text-left th{text-align:left}.\\[\\&_th\\]\\:font-medium th{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.\\[\\&_th\\]\\:text-wx-fg th{color:var(--wx-fg)}.\\[\\&_th_p\\]\\:my-0 th p{margin-block:calc(var(--spacing) * 0)}.\\[\\&_th_p\\]\\:inline th p{display:inline}.\\[\\&_th\\+th\\]\\:border-l th+th{border-left-style:var(--tw-border-style);border-left-width:1px}.\\[\\&_th\\+th\\]\\:border-wx-border th+th{border-color:var(--wx-border)}.\\[\\&_thead\\]\\:bg-wx-bg-elevated thead{background-color:var(--wx-bg-elevated)}.\\[\\&_ul\\]\\:m-0 ul{margin:calc(var(--spacing) * 0)}.\\[\\&_ul\\]\\:my-1\\.5 ul{margin-block:calc(var(--spacing) * 1.5)}.\\[\\&_ul\\]\\:my-3 ul{margin-block:calc(var(--spacing) * 3)}.\\[\\&_ul\\]\\:list-disc ul{list-style-type:disc}.\\[\\&_ul\\]\\:list-none ul{list-style-type:none}.\\[\\&_ul\\]\\:p-0 ul{padding:calc(var(--spacing) * 0)}.\\[\\&_ul\\]\\:pl-5 ul{padding-left:calc(var(--spacing) * 5)}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul ::marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul::marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul ::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\[data-type\\=taskList\\]\\]\\:list-none\\! ul[data-type=taskList]{list-style-type:none!important}.\\[\\&_ul\\[data-type\\=taskList\\]\\]\\:pl-0\\! ul[data-type=taskList]{padding-left:calc(var(--spacing) * 0)!important}.\\[\\&_ul\\[data-type\\=taskList\\]_input\\]\\:h-3\\.5 ul[data-type=taskList] input{height:calc(var(--spacing) * 3.5)}.\\[\\&_ul\\[data-type\\=taskList\\]_input\\]\\:w-3\\.5 ul[data-type=taskList] input{width:calc(var(--spacing) * 3.5)}.\\[\\&_ul\\[data-type\\=taskList\\]_input\\]\\:accent-wx-primary ul[data-type=taskList] input{accent-color:var(--wx-primary)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:my-1\\.5 ul[data-type=taskList] li{margin-block:calc(var(--spacing) * 1.5)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:flex\\! ul[data-type=taskList] li{display:flex!important}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:items-start ul[data-type=taskList] li{align-items:flex-start}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:gap-2 ul[data-type=taskList] li{gap:calc(var(--spacing) * 2)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:pl-0 ul[data-type=taskList] li{padding-left:calc(var(--spacing) * 0)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li ::marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li::marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li ::-webkit-details-marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li::-webkit-details-marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\]\\:min-w-0 ul[data-type=taskList] li>div{min-width:calc(var(--spacing) * 0)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\]\\:flex-1 ul[data-type=taskList] li>div{flex:1}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\>p\\]\\:my-0\\! ul[data-type=taskList] li>div>p{margin-block:calc(var(--spacing) * 0)!important}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\>p\\]\\:leading-snug ul[data-type=taskList] li>div>p{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:pointer-events-none ul[data-type=taskList] li>label{pointer-events:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:m-0 ul[data-type=taskList] li>label{margin:calc(var(--spacing) * 0)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:inline-flex ul[data-type=taskList] li>label{display:inline-flex}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:h-5 ul[data-type=taskList] li>label{height:calc(var(--spacing) * 5)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:shrink-0 ul[data-type=taskList] li>label{flex-shrink:0}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:cursor-default ul[data-type=taskList] li>label{cursor:default}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:items-center ul[data-type=taskList] li>label{align-items:center}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:select-none ul[data-type=taskList] li>label{-webkit-user-select:none;user-select:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\>span\\]\\:hidden ul[data-type=taskList] li>label>span{display:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\[data-checked\\=true\\]\\>div\\]\\:text-wx-fg-muted ul[data-type=taskList] li[data-checked=true]>div{color:var(--wx-fg-muted)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\[data-checked\\=true\\]\\>div\\]\\:line-through ul[data-type=taskList] li[data-checked=true]>div{text-decoration-line:line-through}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:h-2::-webkit-scrollbar{height:calc(var(--spacing) * 2)}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full::-webkit-scrollbar-thumb{border-radius:3.40282e38px}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-wx-fg-subtle\\/40::-webkit-scrollbar-thumb{background-color:var(--wx-fg-subtle)}@supports (color:color-mix(in lab, red, red)){.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-wx-fg-subtle\\/40::-webkit-scrollbar-thumb{background-color:color-mix(in oklab, var(--wx-fg-subtle) 40%, transparent)}}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-wx-fg-subtle\\/60::-webkit-scrollbar-thumb:hover{background-color:var(--wx-fg-subtle)}@supports (color:color-mix(in lab, red, red)){.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-wx-fg-subtle\\/60::-webkit-scrollbar-thumb:hover{background-color:color-mix(in oklab, var(--wx-fg-subtle) 60%, transparent)}}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-transparent::-webkit-scrollbar-track{background-color:#0000}.\\[\\&\\:\\:-webkit-search-cancel-button\\]\\:appearance-none::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.\\[\\&\\>\\:first-child\\]\\:mt-0>:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&\\>\\:last-child\\]\\:mb-0>:last-child{margin-bottom:calc(var(--spacing) * 0)}.\\[\\&_details\\]\\:\\[\\&\\>\\:not\\(summary\\)\\]\\:px-4 details>:not(summary){padding-inline:calc(var(--spacing) * 4)}.\\[\\&_details\\]\\:\\[\\&\\>\\:not\\(summary\\)\\]\\:py-3 details>:not(summary){padding-block:calc(var(--spacing) * 3)}.\\[\\&_details\\]\\:\\[\\&\\>\\:not\\(summary\\)\\:first-of-type\\]\\:pt-3 details>:not(summary):first-of-type{padding-top:calc(var(--spacing) * 3)}.\\[\\&\\>div\\]\\:\\!block>div{display:block!important}.\\[\\&\\>div\\]\\:\\!w-full>div{width:100%!important}.\\[\\&\\>div\\]\\:\\!max-w-full>div{max-width:100%!important}.\\[\\&\\>p\\]\\:my-0>p{margin-block:calc(var(--spacing) * 0)}.\\[\\&\\>p\\+p\\]\\:mt-2>p+p{margin-top:calc(var(--spacing) * 2)}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}:root,:host{--wx-bg:#fff;--wx-bg-elevated:#f5f5f7;--wx-bg-elevated-2:#ebebef;--wx-fg:#121314;--wx-fg-muted:#6b7280;--wx-fg-subtle:#9ca3af;--wx-border:#e4e4e7;--wx-border-strong:#d1d5db;--wx-primary:#121314;--wx-primary-hover:#2a2c2e;--wx-primary-fg:#fff;--wx-launcher-bg:#121314;--wx-launcher-fg:#fff;--wx-success:#10b981;--wx-danger:#ef4444;--wx-radius-sm:8px;--wx-radius:12px;--wx-radius-lg:20px;--wx-radius-xl:28px}[data-theme=dark]{--wx-bg:#121314;--wx-bg-elevated:#1e1f21;--wx-bg-elevated-2:#2a2c2e;--wx-fg:#f4f4f5;--wx-fg-muted:#a1a1aa;--wx-fg-subtle:#71717a;--wx-border:#2a2c2e;--wx-border-strong:#3f3f46;--wx-primary:#fff;--wx-primary-hover:#e4e4e7;--wx-primary-fg:#121314;--wx-launcher-bg:#fff;--wx-launcher-fg:#121314}html,body{background:var(--wx-bg);height:100%;color:var(--wx-fg)}body{font-family:var(--wx-font,var(--font-geist-sans)), system-ui, -apple-system, sans-serif;-webkit-font-smoothing:antialiased;margin:0;padding:0}button:not(:disabled),[role=button]:not([aria-disabled=true]),a[href],label[for],summary{cursor:pointer}button:disabled,[role=button][aria-disabled=true]{cursor:default}[data-wx-gis]>div,[data-wx-gis]>div>div{width:100%!important}[data-wx-gis] [role=button]{border-radius:var(--wx-radius)!important;width:100%!important;max-width:none!important;overflow:hidden!important}:host{font-family:var(--wx-font,var(--font-geist-sans)), system-ui, -apple-system, sans-serif;-webkit-font-smoothing:antialiased}*{-webkit-tap-highlight-color:transparent}[data-theme=dark] [data-wx-panel]{box-shadow:0 0 0 1px #ffffff0f,0 32px 80px #0000008c,0 0 48px #ffffff0a}[data-theme=dark] [data-wx-panel]:before{content:\"\";pointer-events:none;z-index:30;background:radial-gradient(circle at 0 0,#ffffff29 0%,#ffffff12 30%,#ffffff05 60%,#fff0 70%);width:260px;height:260px;position:absolute;top:0;left:0}[data-theme=dark] [data-wx-panel] header{background:0 0;border-bottom-color:#0000}[data-wx-panel]{box-shadow:0 24px 64px #0000002e}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:\"*\";inherits:false}@property --tw-gradient-from{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:\"*\";inherits:false}@property --tw-gradient-via-stops{syntax:\"*\";inherits:false}@property --tw-gradient-from-position{syntax:\"<length-percentage>\";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:\"<length-percentage>\";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:\"<length-percentage>\";inherits:false;initial-value:100%}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@property --tw-content{syntax:\"*\";inherits:false;initial-value:\"\"}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}", hv = {
	en: {
		...Ke,
		demo: We
	},
	uk: {
		...qe,
		demo: Ge
	}
};
function gv({ publicKey: e, locale: t, user: n, prefill: r, mode: i, configOverride: a, config: o, useDummyData: s, previewData: c, lightboxViewport: l, onResize: u, onClose: d, className: f, style: p }) {
	let m = Y(null), [h, g] = X(null), [_, v] = X(() => t ?? dv());
	J(() => {
		t && v(t);
	}, [t]);
	let [y, b] = X(null), x = Y(u), S = Y(d);
	J(() => {
		x.current = u, S.current = d;
	}, [u, d]), J(() => {
		ve(e ?? null);
	}, [e]), J(() => {
		let e = m.current;
		if (!e) return;
		let t = e.shadowRoot ?? e.attachShadow({ mode: "open" });
		if (typeof CSSStyleSheet < "u" && "replaceSync" in CSSStyleSheet.prototype) {
			let e = new CSSStyleSheet();
			e.replaceSync(mv), t.adoptedStyleSheets = [...t.adoptedStyleSheets ?? [], e];
		} else if (!t.querySelector("style[data-wexio-style]")) {
			let e = document.createElement("style");
			e.setAttribute("data-wexio-style", "true"), e.textContent = mv, t.appendChild(e);
		}
		let n = t.querySelector("div[data-wexio-portal-target]");
		n || (n = document.createElement("div"), n.setAttribute("data-wexio-portal-target", "true"), n.style.display = "contents", t.appendChild(n)), g(n), b(t);
	}, []);
	let C = et(() => ({
		kind: "web-component",
		publicKeyOverride: e,
		modeOverride: i ?? (e ? "production" : "demo"),
		configOverride: a,
		configBase: o,
		forceDummyData: s,
		previewData: c,
		embedded: !0,
		visitorIdentity: n,
		visitorPrefill: r,
		lightboxViewport: l ?? !1,
		themeRoot: h ?? void 0,
		styleRoot: y ?? void 0,
		onResize: (e, t) => {
			x.current?.({
				width: e,
				height: t
			});
		},
		onClose: () => {
			S.current?.();
		},
		onLocaleStrategy: t ? void 0 : (e) => v(dv(e))
	}), [
		e,
		i,
		a,
		o,
		s,
		c,
		l,
		h,
		y,
		t,
		n,
		r
	]);
	return /* @__PURE__ */ Z("div", {
		ref: m,
		"data-wexio-widget-host": "true",
		className: f,
		style: p,
		children: h ? it(/* @__PURE__ */ Z(_v, {
			env: C,
			locale: _,
			children: /* @__PURE__ */ Z(E_, {})
		}), h) : null
	});
}
function _v({ env: e, locale: t, children: n }) {
	let r = hv[t];
	return /* @__PURE__ */ Z(ot, {
		client: et(() => ge(), []),
		children: /* @__PURE__ */ Z(ht, {
			locale: t,
			messages: r,
			children: /* @__PURE__ */ Z(w, {
				env: e,
				children: n
			})
		})
	});
}
//#endregion
export { gv as WexioWidget, ve as setWexioPublicKey };

//# sourceMappingURL=widget-react.js.map