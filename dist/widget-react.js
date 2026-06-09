"use client";
import "react";
import "react-dom";
import "react/jsx-runtime";
import "react-dom/client";
import { S as e, a as t, d as n, i as r, l as i, n as a, r as o, t as s, u as c, w as l, y as u } from "./widget-react-DE7AVrCo.js";
import { A as d, C as f, D as p, E as m, F as h, I as g, L as _, M as v, N as y, O as b, P as x, R as S, S as C, T as w, X as T, Z as E, _ as D, a as O, b as k, c as A, d as j, et as M, f as N, g as ee, i as P, j as te, k as F, l as I, ln as L, mn as ne, n as re, nn as ie, o as ae, p as oe, pn as se, r as ce, rn as le, s as R, t as z, tt as ue, u as B, v as de, x as fe, y as pe, z as V } from "./widget-react-CXWfdJcE.js";
import { _ as me, a as he, b as ge, c as _e, d as ve, f as ye, h as be, i as xe, m as Se, o as Ce, p as we, s as Te, t as Ee, u as De, v as Oe, y as ke } from "./widget-react-tf213AGn.js";
import { a as Ae, i as H, n as U, o as je, s as Me, t as W } from "./widget-react-BxvW64LH.js";
import { a as Ne, c as Pe, d as Fe, f as Ie, h as Le, i as Re, l as ze, m as Be, p as Ve, t as He, u as Ue } from "./widget-react-FRbAvEjJ.js";
import { n as We, r as Ge, t as Ke } from "./widget-react-DOX6j7_Q.js";
import { t as qe } from "./widget-react-Dew7YaLU.js";
import { t as Je } from "./widget-react-D8TPnM9r.js";
import { t as Ye } from "./widget-react-Cfgp7JeP.js";
import { t as Xe } from "./widget-react-DiF8_rWm.js";
import { t as Ze } from "./widget-react-DhC6mv1r.js";
import { t as Qe } from "./widget-react-CLRkytx8.js";
import { t as G } from "./widget-react-_xdGdTzK.js";
import { t as $e } from "./widget-react-BC-2nOW4.js";
import { t as et } from "./widget-react-L8PMkUr7.js";
import { t as tt } from "./widget-react-Dr-NACA0.js";
import { t as nt } from "./widget-react-CozbWJT5.js";
import { t as rt } from "./widget-react-BcPE3ZoY.js";
import { t as it } from "./widget-react-C2atp9Wc.js";
import { t as at } from "./widget-react-iKCOmnGh.js";
import { t as ot } from "./widget-react-C7J17SWR.js";
import { t as st } from "./widget-react-CMvMg68M.js";
import { t as ct } from "./widget-react-D3ZFysG9.js";
import { t as lt } from "./widget-react-BNG2P8TD.js";
import { t as ut } from "./widget-react-DRyfg-bL.js";
import { t as dt } from "./widget-react-JOt2DXbR.js";
import { t as ft } from "./widget-react-Dq_sYldT.js";
import { t as pt } from "./widget-react-BdgqHrUV.js";
import { t as mt } from "./widget-react-BthaWcns.js";
import { t as ht } from "./widget-react-DjXlAiu5.js";
import { t as gt } from "./widget-react-DviuEPoq.js";
import { t as _t } from "./widget-react-LWisk9g6.js";
import { t as vt } from "./widget-react-CKZ5tNDZ.js";
import { t as yt } from "./widget-react-Crxd4qSM.js";
import { t as bt } from "./widget-react-fNts-U3I2.js";
import { t as xt } from "./widget-react-xzOjEdXk2.js";
import { t as K } from "./widget-react-CVLlTbB_2.js";
import { t as St } from "./widget-react-DkhMvmdX2.js";
import { t as Ct } from "./widget-react-BdohGq4s2.js";
import { t as wt } from "./widget-react-CYlAGnu_2.js";
import { t as Tt } from "./widget-react-CSqqxBrZ2.js";
import { t as Et } from "./widget-react-C-8yYmmX2.js";
import { t as Dt } from "./widget-react-COu0Pgwj2.js";
import * as q from "react";
import Ot, { Suspense as kt, forwardRef as At, lazy as jt, startTransition as Mt, useCallback as J, useEffect as Y, useLayoutEffect as Nt, useMemo as Pt, useRef as X, useState as Z } from "react";
import { Fragment as Ft, jsx as Q, jsxs as $ } from "react/jsx-runtime";
import * as It from "react-dom";
import Lt, { createPortal as Rt } from "react-dom";
//#region node_modules/@apollo/client/react/context/ApolloProvider.js
var zt = /* @__PURE__ */ l(ie(), 1), Bt = function(e) {
	var t = e.client, n = e.children, r = E(), i = zt.useContext(r), a = zt.useMemo(function() {
		return L(L({}, i), { client: t || i.client });
	}, [i, t]);
	return le(a.client, 71), zt.createElement(r.Provider, { value: a }, n);
}, Vt;
function Ht() {}
function Ut() {
	return Vt || (Vt = zt.createContext(null)), zt.useCallback(function() {
		var e = console.error;
		try {
			return console.error = Ht, zt.useContext(Vt), !0;
		} catch {
			return !1;
		} finally {
			console.error = e;
		}
	}, []);
}
//#endregion
//#region node_modules/@apollo/client/react/hooks/useLazyQuery.js
var Wt = [
	"refetch",
	"reobserve",
	"fetchMore",
	"updateQuery",
	"startPolling",
	"stopPolling",
	"subscribeToMore"
], Gt = [
	"initialFetchPolicy",
	"onCompleted",
	"onError",
	"defaultOptions",
	"partialRefetch",
	"canonizeResults"
], Kt = [
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
function qt(e, t) {
	if (globalThis.__DEV__ !== !1) {
		var n = t || {};
		_(n, "canonizeResults", "useLazyQuery"), _(n, "variables", "useLazyQuery", "Pass all `variables` to the returned `execute` function instead."), _(n, "context", "useLazyQuery", "Pass `context` to the returned `execute` function instead."), _(n, "onCompleted", "useLazyQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), _(n, "onError", "useLazyQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."), _(n, "defaultOptions", "useLazyQuery", "Pass the options directly to the hook instead."), _(n, "initialFetchPolicy", "useLazyQuery", "Use the `fetchPolicy` option instead."), _(n, "partialRefetch", "useLazyQuery");
	}
	var r = zt.useRef(void 0), i = zt.useRef(void 0), a = zt.useRef(void 0), o = ue(t, r.current || {}), s = o?.query ?? e;
	i.current = t, a.current = s;
	var c = L(L({}, o), { skip: !r.current }), l = g(s, c), u = l.obsQueryFields, d = l.result, f = l.client, p = l.resultData, m = l.observable, h = l.onQueryExecuted, y = m.options.initialFetchPolicy || v(c.defaultOptions, f.defaultOptions), b = zt.useReducer(function(e) {
		return e + 1;
	}, 0)[1], x = zt.useMemo(function() {
		for (var e = {}, t = function(t) {
			var n = u[t];
			e[t] = function() {
				return globalThis.__DEV__ !== !1 && t === "reobserve" && globalThis.__DEV__ !== !1 && le.warn(79), r.current || (r.current = Object.create(null), b()), n.apply(this, arguments);
			};
		}, n = 0, i = Wt; n < i.length; n++) {
			var a = i[n];
			t(a);
		}
		return e;
	}, [b, u]), C = !!r.current, w = zt.useMemo(function() {
		return L(L(L({}, d), x), { called: C });
	}, [
		d,
		x,
		C
	]), T = Ut(), E = zt.useRef(/* @__PURE__ */ new Set()), D = zt.useCallback(function(e) {
		if (globalThis.__DEV__ !== !1) {
			T() && globalThis.__DEV__ !== !1 && le.warn(80);
			for (var t = 0, n = Gt; t < n.length; t++) {
				var o = n[t];
				E.current.has(o) || (M(e || {}, o, "useLazyQuery.execute"), E.current.add(o));
			}
			for (var c = 0, l = Kt; c < l.length; c++) {
				var u = l[c];
				E.current.has(u) || (M(e || {}, u, "useLazyQuery.execute", "Please pass the option to the `useLazyQuery` hook instead."), E.current.add(u));
			}
		}
		r.current = e ? L(L({}, e), { fetchPolicy: e.fetchPolicy || y }) : { fetchPolicy: y };
		var d = Jt(p, m, f, s, L(L({}, ue(i.current, L({ query: a.current }, r.current))), { skip: !1 }), h).then(function(e) {
			return Object.assign(e, x);
		});
		return d.catch(function() {}), d;
	}, [
		T,
		f,
		s,
		x,
		y,
		m,
		p,
		h
	]), O = zt.useRef(D);
	return S(function() {
		O.current = D;
	}), [zt.useCallback(function() {
		var e = [...arguments];
		return O.current.apply(O, e);
	}, []), w];
}
function Jt(e, t, n, r, i, a) {
	var o = te(n, i.query || r, i, !1)(t), s = t.reobserveAsConcast(y(t, n, i, o));
	return a(o), new Promise(function(r) {
		var i;
		s.subscribe({
			next: function(e) {
				i = e;
			},
			error: function() {
				r(x(t.getCurrentResult(), e.previousData, t, n));
			},
			complete: function() {
				r(x(t.maskResult(i), e.previousData, t, n));
			}
		});
	});
}
//#endregion
//#region node_modules/next-intl/dist/esm/production/shared/NextIntlClientProvider.js
function Yt({ locale: e, ...t }) {
	if (!e) throw Error(void 0);
	return Q(Me, {
		locale: e,
		...t
	});
}
//#endregion
//#region lib/ai-assistant.ts
var Xt = "Gaia", Zt = {}, Qt = V`
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
function $t(e) {
	return d(Qt, {
		...Zt,
		...e
	});
}
var en = V`
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
function tn(e) {
	return d(en, {
		...Zt,
		...e
	});
}
var nn = V`
    mutation SendVisitorMessage($input: VisitorSendMessageInput!) {
  sendVisitorMessage(input: $input) {
    ok
    messageId
  }
}
    `;
function rn(e) {
	return d(nn, {
		...Zt,
		...e
	});
}
V`
    mutation MarkVisitorMessageRead($messageId: String!) {
  markVisitorMessageRead(messageId: $messageId) {
    ok
  }
}
    `;
var an = V`
    mutation MarkVisitorChatRead($chatId: String!) {
  markVisitorChatRead(chatId: $chatId) {
    count
  }
}
    `;
function on(e) {
	return d(an, {
		...Zt,
		...e
	});
}
var sn = V`
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
function cn(e) {
	return qt(sn, {
		...Zt,
		...e
	});
}
var ln = V`
    mutation SignalVisitorTyping {
  signalVisitorTyping {
    ok
  }
}
    `;
function un(e) {
	return d(ln, {
		...Zt,
		...e
	});
}
var dn = V`
    mutation UploadVisitorMedia($input: VisitorUploadInputType!) {
  uploadVisitorMedia(input: $input) {
    url
    mediaId
    mimetype
    size
  }
}
    `;
function fn(e) {
	return d(dn, {
		...Zt,
		...e
	});
}
var pn = V`
    mutation RemoveVisitorMedia($mediaId: ID!) {
  removeVisitorMedia(mediaId: $mediaId) {
    ok
  }
}
    `;
function mn(e) {
	return d(pn, {
		...Zt,
		...e
	});
}
var hn = V`
    mutation SubmitVisitorPrechat($input: VisitorPrechatInput!) {
  submitVisitorPrechat(input: $input) {
    ok
  }
}
    `;
function gn(e) {
	return d(hn, {
		...Zt,
		...e
	});
}
var _n = V`
    query VisitorChatHistory($chatId: String!, $before: String, $limit: Int) {
  visitorChatHistory(chatId: $chatId, before: $before, limit: $limit)
}
    `;
function vn(e) {
	return h(_n, {
		...Zt,
		...e
	});
}
var yn = V`
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
function bn(e) {
	return h(yn, {
		...Zt,
		...e
	});
}
//#endregion
//#region lib/graphql/queries/generated/profile.generated.tsx
var xn = {}, Sn = V`
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
function Cn(e) {
	return h(Sn, {
		...xn,
		...e
	});
}
var wn = V`
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
function Tn(e) {
	return h(wn, {
		...xn,
		...e
	});
}
var En = V`
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
function Dn(e) {
	return d(En, {
		...xn,
		...e
	});
}
Array.from({ length: 21 }, (e, t) => `wx-nt_${t + 1}`);
var On = "wx-nt_";
function kn(e) {
	return e ? e.startsWith("http://") || e.startsWith("https://") ? e : e.startsWith(On) ? b(`/sounds/${e}.wav`) : null : null;
}
var An = "wexio:sound-muted";
//#endregion
//#region lib/use-sound-player.ts
function jn(e) {
	let [t, n] = Z(!1), r = X(null), i = X(null);
	Y(() => {
		typeof window > "u" || n(localStorage.getItem(An) === "1");
	}, []), Y(() => {
		if (typeof window > "u") return;
		r.current?.pause(), i.current?.pause();
		let t = kn(e?.inboundSoundId), n = kn(e?.outboundSoundId), a = typeof e?.volume == "number" ? Math.max(0, Math.min(1, e.volume)) : .5;
		return r.current = t ? Mn(t, a) : null, i.current = n ? Mn(n, a) : null, () => {
			r.current?.pause(), i.current?.pause();
		};
	}, [e]);
	let a = J(() => {
		n((e) => {
			let t = !e;
			try {
				localStorage.setItem(An, t ? "1" : "0");
			} catch {}
			return t;
		});
	}, []), o = J((n) => {
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
function Mn(e, t) {
	let n = new Audio(e);
	return n.preload = "auto", n.volume = t, n;
}
//#endregion
//#region lib/use-theme-mode.ts
function Nn(e, t) {
	let [n, r] = Z("dark"), i = p().themeRoot;
	return Y(() => {
		let n = new URL(window.location.href).searchParams.get("theme"), a = e && Pn(e) ? e : null, o = t?.allowed !== !1, s = t?.preference && Pn(t.preference) ? t.preference : null, c = (() => {
			if (n && Pn(n)) return n;
			if (o && s && s !== "auto") return s;
			if (a && a !== "auto") return a;
			if (o) {
				let e = localStorage.getItem("wexio:theme");
				if (e && Pn(e)) return e;
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
			t && Pn(t) && (c = t, u());
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
function Pn(e) {
	return e === "light" || e === "dark" || e === "auto";
}
//#endregion
//#region lib/use-turnstile.ts
var Fn = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", In = "wexio-turnstile-script", Ln = null;
function Rn() {
	return typeof window > "u" ? Promise.reject(/* @__PURE__ */ Error("turnstile: no window")) : window.turnstile ? Promise.resolve() : Ln || (Ln = new Promise((e, t) => {
		let n = document.getElementById(In);
		if (n) {
			if (window.turnstile) return e();
			n.addEventListener("load", () => e(), { once: !0 }), n.addEventListener("error", () => t(/* @__PURE__ */ Error("turnstile: script load error")), { once: !0 });
			return;
		}
		let r = document.createElement("script");
		r.id = In, r.src = Fn, r.async = !0, r.defer = !0, r.addEventListener("load", () => e(), { once: !0 }), r.addEventListener("error", () => t(/* @__PURE__ */ Error("turnstile: script load error")), { once: !0 }), document.head.appendChild(r);
	}).catch((e) => {
		throw Ln = null, e;
	}), Ln);
}
function zn(e) {
	let { siteKey: t, theme: n, position: r = "right" } = e, i = X(null), a = X(n);
	return Y(() => {
		a.current = n;
	}, [n]), Y(() => {
		if (typeof document > "u") return;
		let e = document.createElement("div");
		return e.style.position = "fixed", e.style.bottom = "88px", r === "left" ? e.style.left = "16px" : e.style.right = "16px", e.style.zIndex = "60", document.body.appendChild(e), i.current = e, () => {
			e.remove(), i.current = null;
		};
	}, [r]), { getToken: J(async () => {
		if (!t) return;
		await Rn();
		let e = i.current, n = typeof window < "u" ? window.turnstile : void 0;
		if (!e || !n) throw Error("turnstile: not ready");
		return new Promise((r, i) => {
			let a = n.render(e, {
				sitekey: t,
				execution: "render",
				appearance: "interaction-only",
				retry: "auto",
				"refresh-expired": "auto",
				callback: (e) => {
					r(e);
					try {
						n.remove(a);
					} catch {}
				},
				"error-callback": () => {
					try {
						n.remove(a);
					} catch {}
					i(/* @__PURE__ */ Error("turnstile: error"));
				},
				"expired-callback": () => {
					try {
						n.remove(a);
					} catch {}
					i(/* @__PURE__ */ Error("turnstile: expired before submission"));
				},
				"timeout-callback": () => {
					try {
						n.remove(a);
					} catch {}
					i(/* @__PURE__ */ Error("turnstile: timeout"));
				}
			});
		});
	}, [t]) };
}
//#endregion
//#region lib/use-visitor-auth.ts
var Bn = (e) => e ? `wexio:visitor-id:${e}` : "wexio:visitor-id", Vn = (e) => e ? `wexio:visitor-session:${e}` : "wexio:visitor-session", Hn = "wexio:visitor-id", Un = "wexio:visitor-session";
function Wn(e) {
	if (!(typeof window > "u")) try {
		let t = {
			token: e.token,
			chatId: e.chatId,
			peopleId: e.peopleId,
			displayName: e.displayName,
			expiresAt: Date.now() + e.expiresIn * 1e3
		};
		localStorage.setItem(Vn(be()), JSON.stringify(t));
	} catch {}
}
function Gn() {
	if (typeof window > "u") return null;
	let e = be();
	try {
		let t = localStorage.getItem(Vn(e));
		if (!t && e) {
			let n = localStorage.getItem(Un);
			n && (localStorage.setItem(Vn(e), n), localStorage.removeItem(Un), t = n);
		}
		if (!t) return null;
		let n = JSON.parse(t);
		return typeof n?.token != "string" || typeof n?.expiresAt != "number" || n.expiresAt - qn * 1e3 <= Date.now() ? (localStorage.removeItem(Vn(e)), null) : n;
	} catch {
		return null;
	}
}
function Kn() {
	if (!(typeof window > "u")) try {
		localStorage.removeItem(Vn(be())), localStorage.removeItem(Un);
	} catch {}
}
var qn = 30, Jn = "wexio:prechat-submitted:";
function Yn() {
	if (ge(null), Kn(), !(typeof window > "u")) try {
		let e = be();
		localStorage.removeItem(Bn(e)), localStorage.removeItem(Hn);
		for (let e = localStorage.length - 1; e >= 0; e--) {
			let t = localStorage.key(e);
			t?.startsWith(Jn) && localStorage.removeItem(t);
		}
	} catch {}
}
function Xn(e) {
	let [t, n] = Z({
		token: null,
		chatId: null,
		peopleId: null,
		displayName: null,
		isAuthenticating: e.enabled,
		error: null,
		verified: !1
	}), [r] = $t(), [i] = tn(), a = X(e.identity ?? null);
	a.current = e.identity ?? null;
	let o = X(e.getTurnstileToken);
	o.current = e.getTurnstileToken;
	let s = X(null), c = X(0), l = J(async (e) => {
		n((e) => ({
			...e,
			isAuthenticating: !0,
			error: null
		}));
		try {
			let t = Qn(), u = a.current, d;
			try {
				d = await o.current?.() ?? void 0;
			} catch (t) {
				if (e.current) return;
				n((e) => ({
					...e,
					isAuthenticating: !1,
					error: `turnstile_failed:${t.message}`
				}));
				return;
			}
			if (e.current) return;
			let f;
			if (u && (u.googleIdToken || u.jwt || u.userId && u.userHash)) {
				let n = await i({ variables: { input: {
					visitorId: t,
					...u.googleIdToken ? { googleIdToken: u.googleIdToken } : u.jwt ? { jwt: u.jwt } : {
						userId: u.userId,
						userHash: u.userHash
					},
					name: u.name,
					email: u.email,
					phone: u.phone,
					contextSnapshot: u.attributes ? JSON.stringify(u.attributes) : void 0,
					turnstileToken: d
				} } });
				if (e.current) return;
				f = n.data?.startIdentifiedVisitor;
			} else {
				let n = await r({ variables: { input: {
					visitorId: t,
					turnstileToken: d
				} } });
				if (e.current) return;
				f = n.data?.startAnonymousVisitor;
			}
			if (!f) {
				n((e) => ({
					...e,
					isAuthenticating: !1,
					error: "handshake_empty_response"
				}));
				return;
			}
			if (f.visitorId && f.visitorId !== t) try {
				localStorage.setItem(Bn(be()), f.visitorId);
			} catch {}
			ge(f.token), n({
				token: f.token,
				chatId: f.chatId,
				peopleId: f.peopleId,
				displayName: f.displayName,
				isAuthenticating: !1,
				error: null,
				verified: f.kind === "identified"
			}), f.kind === "identified" ? Wn({
				token: f.token,
				chatId: f.chatId,
				peopleId: f.peopleId,
				displayName: f.displayName,
				expiresIn: f.expiresIn
			}) : Kn();
			let p = Math.max(5e3, (f.expiresIn - qn) * 1e3);
			s.current && clearTimeout(s.current), c.current = Date.now() + p, s.current = setTimeout(() => {
				e.current || l(e);
			}, p);
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
	}, [r, i]), u = e.identity, d = u?.googleIdToken ? `google:${u.googleIdToken}` : u?.jwt ? `jwt:${u.jwt}` : u?.userId && u?.userHash ? `${u.userId}:${u.userHash}` : null;
	return Y(() => {
		if (!e.enabled) {
			n((e) => ({
				...e,
				isAuthenticating: !1
			}));
			return;
		}
		if (typeof window > "u") return;
		let t = { current: !1 }, r = a.current ? null : Gn();
		if (r) {
			ge(r.token), n({
				token: r.token,
				chatId: r.chatId,
				peopleId: r.peopleId,
				displayName: r.displayName,
				isAuthenticating: !1,
				error: null,
				verified: !0
			});
			let e = Math.max(0, r.expiresAt - Date.now());
			c.current = r.expiresAt, s.current && clearTimeout(s.current), s.current = setTimeout(() => {
				t.current || (Kn(), l(t));
			}, e);
		} else l(t);
		let i = () => {
			t.current || typeof document > "u" || document.hidden || c.current !== 0 && Date.now() >= c.current && l(t);
		};
		return document.addEventListener("visibilitychange", i), () => {
			t.current = !0, document.removeEventListener("visibilitychange", i), s.current && (clearTimeout(s.current), s.current = null);
		};
	}, [
		e.enabled,
		l,
		d,
		e.epoch
	]), Y(() => {
		if (!e.enabled || typeof window > "u") return;
		let t = !1;
		return Oe(() => {
			t || (t = !0, Kn(), ge(null), l({ current: !1 }).finally(() => {
				t = !1;
			}));
		}), me(() => {
			if (!t) {
				t = !0, Kn(), ge(null);
				try {
					let e = be();
					localStorage.removeItem(Bn(e));
				} catch {}
				l({ current: !1 }).finally(() => {
					t = !1;
				});
			}
		}), () => {
			Oe(null), me(null);
		};
	}, [e.enabled, l]), t;
}
function Zn(e) {
	let [t, n] = Z({
		identity: null,
		prefill: null
	});
	return Y(() => {
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
function Qn() {
	try {
		let e = be(), t = Bn(e), n = localStorage.getItem(t);
		if (n) return n;
		if (e) {
			let e = localStorage.getItem(Hn);
			if (e) return localStorage.setItem(t, e), localStorage.removeItem(Hn), e;
		}
		let r = $n();
		return localStorage.setItem(t, r), r;
	} catch {
		return $n();
	}
}
function $n() {
	if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
	let e = new Uint8Array(16);
	if (typeof crypto < "u" && crypto.getRandomValues) crypto.getRandomValues(e);
	else for (let t = 0; t < 16; t++) e[t] = Math.floor(Math.random() * 256);
	return Array.from(e, (e) => e.toString(16).padStart(2, "0")).join("");
}
//#endregion
//#region lib/locales.ts
var er = /* @__PURE__ */ "en.en-US.en-GB.uk.de.es.es-MX.fr.it.nl.pt.pt-BR.sv.da.no.fi.pl.cs.sk.tr.ro.hu.el.ar.he.hi.th.vi.id.ja.ko.zh.zh-TW".split(".");
function tr(e) {
	return typeof e == "string" && er.includes(e);
}
//#endregion
//#region lib/runtime-locale.ts
var nr = null, rr = /* @__PURE__ */ new Set();
function ir(e) {
	if (tr(e) && nr !== e) {
		nr = e;
		for (let t of rr) t(e);
	}
}
function ar(e) {
	return rr.add(e), () => {
		rr.delete(e);
	};
}
//#endregion
//#region lib/use-visitor-profile-preferences.ts
var or = {
	themeMode: null,
	themeModeEditable: !0,
	language: null,
	desktopNotifications: !1,
	loaded: !1
};
function sr(e) {
	let { data: t } = Cn({ skip: !e.enabled }), n = t?.visitorProfile, r = n ? {
		themeMode: cr(n.preferences.themeMode),
		themeModeEditable: n.themeModeEditable,
		language: n.preferences.language ?? null,
		desktopNotifications: !!n.preferences.desktopNotifications,
		loaded: !0
	} : e.enabled ? or : {
		...or,
		loaded: !0
	};
	return Y(() => {
		if (r.loaded && r.language) {
			try {
				document.cookie = `wexio-locale=${encodeURIComponent(r.language)}; path=/; max-age=${3600 * 24 * 365}; samesite=lax`;
			} catch {}
			ir(r.language);
		}
	}, [r.loaded, r.language]), r;
}
function cr(e) {
	if (typeof e != "string") return null;
	let t = e.toLowerCase();
	return t === "light" || t === "dark" ? t : t === "auto" || t === "system" ? "auto" : null;
}
//#endregion
//#region lib/use-visitor-realtime.ts
function lr({ chatId: e, token: t, enabled: n = !0, onMessage: r }) {
	let i = X(r);
	Y(() => {
		i.current = r;
	}, [r]), Y(() => {
		if (!n || !e || !t || typeof window > "u") return;
		let r = be();
		if (!r) return;
		let a = `${w()}/api/web/realtime/${encodeURIComponent(e)}?token=${encodeURIComponent(t)}&publicKey=${encodeURIComponent(r)}`, o = new EventSource(a, { withCredentials: !1 }), s = (e) => {
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
function ur(e) {
	return [{
		kind: "SYSTEM",
		text: e.raw("messenger.welcome.system")
	}, {
		kind: "HINT",
		text: e.raw("messenger.welcome.hint")
	}];
}
var dr = [];
function fr(e) {
	let t = e.raw("conversation.visitorName");
	return dr.map((n) => {
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
function pr({ chatId: e, isDummy: t }) {
	let n = H("demo"), [r, i] = Z(!1), [a, o] = Z(0), [s, c] = Z(null), l = X(/* @__PURE__ */ new Set()), u = X(null), d = X(!1), [f] = cn({ fetchPolicy: "network-only" });
	Y(() => {
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
					buttons: hr(t.lastMessage.buttons)
				};
				l.current.add(e.id), c(e);
			} else c(null);
		}).catch(() => {}));
	}, [
		e,
		t,
		f
	]);
	let p = J(() => {
		if (t) {
			i(!0);
			return;
		}
		o(0), c(null), d.current = !0;
	}, [t]), m = J((e) => {
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
	}, [t]), h = J((e) => {
		if (t || e.length === 0) return;
		let n = 0;
		for (let t of e) l.current.has(t) && (l.current.delete(t), n += 1);
		n > 0 && o((e) => Math.max(0, e - n)), c((t) => t && (e.includes(t.id) ? null : t));
	}, [t]);
	if (t) {
		let e = r ? null : mr(n);
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
function mr(e) {
	let t = fr(e);
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
function hr(e) {
	return Array.isArray(e) ? e.filter((e) => typeof e == "object" && !!e).map((e) => {
		let t = gr(e.text, e.label) ?? "";
		return {
			text: t,
			payload: gr(e.payload, e.value) ?? t
		};
	}).filter((e) => e.text.length > 0) : [];
}
function gr(...e) {
	for (let t of e) if (typeof t == "string" && t.length > 0) return t;
}
//#endregion
//#region lib/widget-route.ts
function _r(e) {
	return e.kind === "home" || e.kind === "help" || e.kind === "news" || e.kind === "profile";
}
function vr(e, t) {
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
function yr(e) {
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
function br(e, t) {
	return e === "home" ? t.home : e === "messages" ? t.messenger : e === "help" ? t.help : e === "news" ? t.news : !!t.profile;
}
function xr(e) {
	return +!!e.home + +!!e.messenger + +!!e.help + +!!e.news + +!!e.profile;
}
function Sr(e, t) {
	if (br(e, t)) return e;
	for (let e of [
		"home",
		"messages",
		"help",
		"news",
		"profile"
	]) if (br(e, t)) return e;
	return e;
}
var Cr = W("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]), wr = W("bell", [["path", {
	d: "M10.268 21a2 2 0 0 0 3.464 0",
	key: "vwvbt9"
}], ["path", {
	d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
	key: "11g9vi"
}]]), Tr = W("book", [["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}]]), Er = W("bookmark", [["path", {
	d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
	key: "oz39mx"
}]]), Dr = W("camera", [["path", {
	d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
	key: "18u6gg"
}], ["circle", {
	cx: "12",
	cy: "13",
	r: "3",
	key: "1vg3eu"
}]]), Or = W("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]), kr = W("circle-question-mark", [
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
]), Ar = W("command", [["path", {
	d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
	key: "11bfej"
}]]), jr = W("file-text", [
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
]), Mr = W("gamepad-2", [
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
]), Nr = W("hash", [
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
]), Pr = W("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]), Fr = W("image-plus", [
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
]), Ir = W("lightbulb", [
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
]), Lr = W("lock", [["rect", {
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
}]]), Rr = W("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]), zr = W("message-circle-more", [
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
]), Br = W("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]), Vr = W("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]), Hr = W("monitor", [
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
]), Ur = W("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]), Wr = W("paperclip", [["path", {
	d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
	key: "1miecu"
}]]), Gr = W("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]), Kr = W("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]), qr = W("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), Jr = W("shield-alert", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "M12 8v4",
		key: "1got3b"
	}],
	["path", {
		d: "M12 16h.01",
		key: "1drbdi"
	}]
]), Yr = W("shield", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}]]), Xr = W("smile", [
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
]), Zr = W("sparkles", [
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
]), Qr = W("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]), $r = W("sun", [
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
]), ei = W("trash-2", [
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
]), ti = W("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]), ni = W("users", [
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
]), ri = W("video", [["path", {
	d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
	key: "ftymec"
}], ["rect", {
	x: "2",
	y: "6",
	width: "14",
	height: "12",
	rx: "2",
	key: "158x01"
}]]), ii = W("volume-2", [
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
]), ai = W("volume-x", [
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
]), oi = {
	sm: "h-3.5 min-w-3.5 px-0.75 text-[8px]",
	md: "h-5 min-w-5 px-1.5 text-[10px]"
};
function si({ count: e, size: t = "sm", className: r }) {
	return /* @__PURE__ */ Q(F, { children: e > 0 && /* @__PURE__ */ $(n.span, {
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
			/* @__PURE__ */ Q("span", {
				"aria-hidden": "true",
				className: "absolute inset-0 -z-10 rounded-full bg-wx-danger opacity-40 blur-[2px]"
			}),
			/* @__PURE__ */ Q(n.span, {
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
			/* @__PURE__ */ Q("span", {
				className: U("relative flex items-center justify-center", "rounded-full bg-wx-danger font-bold leading-none text-white", oi[t]),
				children: e > 99 ? "99+" : e
			})
		]
	}, e) });
}
//#endregion
//#region components/widget/bottom-nav.tsx
var ci = [
	"home",
	"messages",
	"help",
	"news",
	"profile"
];
function li({ active: e, features: t, onChange: n, unreadCount: i = 0 }) {
	let a = H("tabs"), s = Je(), c = Je(), l = ci.filter((e) => fi(e, t));
	return /* @__PURE__ */ Q("div", {
		className: "px-3 pt-2 pb-2",
		children: /* @__PURE__ */ Q("nav", {
			role: "tablist",
			className: U("relative flex w-full items-center gap-1", "rounded-full bg-wx-bg-elevated/70 p-1 backdrop-blur-md", "shadow-[inset_0_0_0_1px_rgb(0_0_0/0.04)]"),
			children: l.map((t) => {
				let l = t === e;
				if (t === "home") return /* @__PURE__ */ Q(ui, {
					id: t,
					label: a(t),
					isActive: l,
					onClick: () => n(t),
					parentHandlers: s.parentHandlers,
					icon: /* @__PURE__ */ Q(o, {
						ref: s.iconRef,
						size: 16
					})
				}, t);
				if (t === "messages") return /* @__PURE__ */ Q(ui, {
					id: t,
					label: a(t),
					isActive: l,
					onClick: () => n(t),
					parentHandlers: c.parentHandlers,
					icon: /* @__PURE__ */ Q(r, {
						ref: c.iconRef,
						size: 16
					}),
					badgeCount: i
				}, t);
				let u = t === "help" ? kr : t === "news" ? Be : ti;
				return /* @__PURE__ */ Q(di, {
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
function ui({ id: e, label: t, isActive: r, onClick: i, icon: a, parentHandlers: o, badgeCount: s = 0 }) {
	return /* @__PURE__ */ $("button", {
		type: "button",
		role: "tab",
		"aria-selected": r,
		onClick: i,
		...o,
		className: U("relative z-10 flex items-center justify-center gap-1.5 rounded-full px-3 py-2", "transition-colors duration-150", r ? "flex-[2_2_0%] text-wx-fg" : "flex-1 text-wx-fg-muted hover:text-wx-fg"),
		children: [
			r && /* @__PURE__ */ Q(n.span, {
				layoutId: "bottom-nav-pill",
				className: "absolute inset-0 -z-10 rounded-full bg-wx-bg shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
				transition: {
					type: "spring",
					stiffness: 420,
					damping: 36
				}
			}),
			/* @__PURE__ */ $("span", {
				className: "relative inline-flex shrink-0 items-center justify-center",
				children: [a, /* @__PURE__ */ Q(si, {
					count: s,
					size: "sm",
					className: "absolute -top-1.5 -right-2 z-20"
				})]
			}),
			/* @__PURE__ */ Q(n.span, {
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
function di({ id: e, label: t, isActive: r, onClick: i, Icon: a }) {
	let o = c();
	return Y(() => {
		r && o.start({ scale: [
			1,
			1.15,
			1
		] });
	}, [r, o]), /* @__PURE__ */ $(n.button, {
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
			r && /* @__PURE__ */ Q(n.span, {
				layoutId: "bottom-nav-pill",
				className: "absolute inset-0 -z-10 rounded-full bg-wx-bg shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
				transition: {
					type: "spring",
					stiffness: 420,
					damping: 36
				}
			}),
			/* @__PURE__ */ Q(n.span, {
				animate: o,
				transition: { duration: .4 },
				children: /* @__PURE__ */ Q(a, {
					size: 16,
					strokeWidth: r ? 2.2 : 1.8
				})
			}),
			/* @__PURE__ */ Q(n.span, {
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
function fi(e, t) {
	return e === "home" ? t.home : e === "messages" ? t.messenger : e === "help" ? t.help : e === "news" ? t.news : !!t.profile;
}
//#endregion
//#region components/widget/branding-footer.tsx
function pi({ className: e }) {
	let t = H("branding");
	return /* @__PURE__ */ $(n.div, {
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
		children: [/* @__PURE__ */ Q("span", { children: t("poweredBy") }), /* @__PURE__ */ Q("a", {
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
function mi({ muted: e, onToggle: t }) {
	return /* @__PURE__ */ Q(De, {
		type: "button",
		variant: "ghost",
		size: "icon",
		"aria-label": H("sound")(e ? "unmute" : "mute"),
		onClick: t,
		children: /* @__PURE__ */ Q(Ve, {
			icon: e ? ai : ii,
			size: 18
		})
	});
}
//#endregion
//#region components/widget/conversation-header.tsx
function hi({ title: e, subtitle: t, organizationLogoUrl: n, muted: r, onToggleMute: a, onBack: o, onClose: c, expanded: l, onToggleExpand: u }) {
	let d = H("header"), f = H("header"), p = Je(), m = Je();
	return /* @__PURE__ */ $("header", {
		className: U("flex items-center gap-3 border-b border-wx-border bg-wx-bg px-3 py-3"),
		children: [
			o && /* @__PURE__ */ Q(De, {
				type: "button",
				variant: "ghost",
				size: "icon",
				"aria-label": d("back"),
				onClick: o,
				className: "shrink-0",
				...p.parentHandlers,
				children: /* @__PURE__ */ Q(s, {
					ref: p.iconRef,
					size: 18
				})
			}),
			n && /* @__PURE__ */ Q("span", {
				className: "h-9 w-9 shrink-0 overflow-hidden rounded-full",
				children: /* @__PURE__ */ Q("img", {
					src: n,
					alt: e,
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ $("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ Q("p", {
					className: "truncate text-sm font-semibold text-wx-fg",
					children: e
				}), t && /* @__PURE__ */ Q("p", {
					className: "truncate text-xs text-wx-fg-muted",
					children: t
				})]
			}),
			/* @__PURE__ */ Q(mi, {
				muted: r,
				onToggle: a
			}),
			u && /* @__PURE__ */ Q(De, {
				type: "button",
				variant: "ghost",
				size: "icon",
				"aria-label": f(l ? "collapse" : "expand"),
				onClick: u,
				className: "shrink-0",
				children: /* @__PURE__ */ Q(gi, { expanded: !!l })
			}),
			/* @__PURE__ */ Q(De, {
				type: "button",
				variant: "ghost",
				size: "icon",
				"aria-label": d("close"),
				onClick: c,
				className: "shrink-0",
				...m.parentHandlers,
				children: /* @__PURE__ */ Q(i, {
					ref: m.iconRef,
					size: 18
				})
			})
		]
	});
}
function gi({ expanded: e }) {
	return e ? /* @__PURE__ */ $("svg", {
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
			/* @__PURE__ */ Q("polyline", { points: "4 14 10 14 10 20" }),
			/* @__PURE__ */ Q("polyline", { points: "20 10 14 10 14 4" }),
			/* @__PURE__ */ Q("line", {
				x1: "14",
				y1: "10",
				x2: "21",
				y2: "3"
			}),
			/* @__PURE__ */ Q("line", {
				x1: "3",
				y1: "21",
				x2: "10",
				y2: "14"
			})
		]
	}) : /* @__PURE__ */ $("svg", {
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
			/* @__PURE__ */ Q("polyline", { points: "15 3 21 3 21 9" }),
			/* @__PURE__ */ Q("polyline", { points: "9 21 3 21 3 15" }),
			/* @__PURE__ */ Q("line", {
				x1: "21",
				y1: "3",
				x2: "14",
				y2: "10"
			}),
			/* @__PURE__ */ Q("line", {
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
function _i({ children: e }) {
	let { isDummy: t } = C(), n = je(), r = Ae(), i = "demo" in r, [a, o] = Z(null);
	return Y(() => {
		if (!t || i) return;
		let e = !0;
		return vi(n).then((t) => {
			e && o(t);
		}), () => {
			e = !1;
		};
	}, [
		t,
		i,
		n
	]), !t || i ? /* @__PURE__ */ Q(Ft, { children: e }) : a ? /* @__PURE__ */ Q(Yt, {
		locale: n,
		messages: {
			...r,
			demo: a
		},
		timeZone: typeof Intl < "u" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "UTC",
		children: e
	}) : null;
}
async function vi(e) {
	switch (e) {
		case "uk": return (await import("./widget-react-BC-2nOW4.js").then((e) => e.n)).default;
		default: return (await import("./widget-react-_xdGdTzK.js").then((e) => e.n)).default;
	}
}
//#endregion
//#region components/widget/help-list-row.tsx
function yi({ title: e, description: t, meta: r, authors: i, onClick: a, kind: o = "none", delay: s = 0 }) {
	let c = o === "article";
	return /* @__PURE__ */ $(n.button, {
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
		children: [/* @__PURE__ */ $("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [
				/* @__PURE__ */ Q("span", {
					className: U("text-wx-fg", c ? "font-normal text-sm" : "font-semibold text-sm"),
					children: e
				}),
				t && /* @__PURE__ */ Q("span", {
					className: U("leading-snug", c ? "truncate text-[11px] text-wx-fg-subtle" : "text-wx-fg-muted text-xs"),
					children: t
				}),
				r && /* @__PURE__ */ Q("span", {
					className: "text-[11px] text-wx-fg-subtle",
					children: r
				})
			]
		}), /* @__PURE__ */ $("span", {
			className: "flex shrink-0 items-center gap-2 text-wx-fg-muted",
			children: [i && i.length > 0 && /* @__PURE__ */ Q(Ue, { authors: i }), /* @__PURE__ */ Q(pe, {
				size: 16,
				className: "transition-transform group-hover:translate-x-0.5",
				"aria-hidden": "true"
			})]
		})]
	});
}
//#endregion
//#region components/widget/help-category-view.tsx
var bi = 10, xi = 240, Si = 3;
function Ci({ categoryId: e, categoryName: t, categoryDescription: r, categoryArticleCount: i, isDummy: a, onOpenCategory: o, onOpenArticle: s }) {
	let c = H("help"), l = H("demo"), u = je(), [d, f] = Z(""), p = Ti(d, 300), m = p.length >= 2, { data: h } = Ce({
		variables: {
			parentId: e,
			locale: u
		},
		skip: a
	}), g = Pt(() => h?.visitorHelpFolders ?? [], [h]), { data: _, loading: v, fetchMore: y } = Te({
		variables: { args: {
			folderId: e,
			locale: u,
			recursive: !1,
			limit: bi,
			offset: 0
		} },
		skip: a,
		notifyOnNetworkStatusChange: !0
	}), { data: b, loading: x } = Te({
		variables: { args: {
			query: p,
			locale: u,
			limit: 10
		} },
		skip: p.length < 2 || a
	}), S = a ? we(l).find((t) => t.id === e) : null, C = a ? ye(l).filter((t) => t.categoryId === e) : [], w = a ? C.map((e) => ({
		id: e.id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt,
		authors: Fe(e.authors),
		reactionCounts: null
	})) : (_?.visitorHelpList.items ?? []).map((e) => ({
		id: e._id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt ?? null,
		authors: Fe(e.authors),
		reactionCounts: e.reactionCounts ?? null
	})), T = a ? ye(l).filter((e) => e.title.toLowerCase().includes(p.toLowerCase()) || e.excerpt.toLowerCase().includes(p.toLowerCase())).map((e) => ({
		id: e.id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt,
		authors: Fe(e.authors),
		reactionCounts: null
	})) : [], E = (b?.visitorHelpList.items ?? []).map((e) => ({
		id: e._id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt ?? null,
		authors: Fe(e.authors),
		reactionCounts: e.reactionCounts ?? null
	})), D = m ? a ? T : E : w, O = t ?? S?.title ?? "", k = r ?? S?.description ?? "", A = i ?? S?.articleCount ?? w.length, j = Pt(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of w) for (let n of t.authors ?? []) e.has(n.id) || e.set(n.id, n);
		return Array.from(e.values());
	}, [w]), M = j.slice(0, Si), ee = Math.max(0, j.length - M.length), P = M[0]?.name ?? "", te = !m && !a && (_?.visitorHelpList.meta.hasNextPage ?? !1), [F, I] = Z(!1), L = J(async () => {
		if (!(!te || F)) {
			I(!0);
			try {
				await y({
					variables: { args: {
						folderId: e,
						locale: u,
						recursive: !1,
						limit: bi,
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
				I(!1);
			}
		}
	}, [
		te,
		F,
		e,
		u,
		y,
		_
	]), ne = J((e) => {
		let t = e.currentTarget;
		t.scrollHeight - t.clientHeight - t.scrollTop < xi && L();
	}, [L]), re = !a && !m && v && w.length === 0 && g.length === 0;
	return /* @__PURE__ */ Q("div", {
		className: "flex h-full min-h-0 flex-col",
		children: /* @__PURE__ */ $(ce, {
			className: "min-h-0 flex-1",
			onScroll: ne,
			children: [
				/* @__PURE__ */ Q(ze, {
					value: d,
					onChange: f,
					placeholder: c("searchPlaceholder")
				}),
				!m && O && /* @__PURE__ */ Q(n.div, {
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
					children: /* @__PURE__ */ $("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ $("div", {
							className: "flex min-w-0 flex-1 flex-col gap-1.5",
							children: [
								/* @__PURE__ */ Q("h2", {
									className: "font-semibold text-lg text-wx-fg",
									children: O
								}),
								k && /* @__PURE__ */ Q("p", {
									className: "text-sm text-wx-fg-muted leading-snug",
									children: k
								}),
								/* @__PURE__ */ $("div", {
									className: "mt-1 flex flex-col gap-0.5 text-wx-fg-subtle text-xs",
									children: [/* @__PURE__ */ Q("span", { children: c("articlesCount", { count: A }) }), P && /* @__PURE__ */ Q("span", { children: c("authorsByline", {
										first: P,
										remaining: ee
									}) })]
								})
							]
						}), M.length > 0 && /* @__PURE__ */ Q("div", {
							className: "shrink-0",
							children: /* @__PURE__ */ Q(Ue, { authors: M })
						})]
					})
				}),
				re ? /* @__PURE__ */ Q(wi, {}) : D.length === 0 && g.length === 0 ? /* @__PURE__ */ Q("div", {
					className: "px-5 py-6",
					children: /* @__PURE__ */ Q(N, { children: /* @__PURE__ */ Q(oe, {
						className: "py-8 text-center",
						children: /* @__PURE__ */ Q("p", {
							className: "text-sm text-wx-fg-muted",
							children: c(m ? "noResults" : "emptyTitle")
						})
					}) })
				}) : /* @__PURE__ */ $("div", {
					className: "flex flex-col",
					children: [
						D.map((e, t) => /* @__PURE__ */ Q(yi, {
							title: e.title,
							description: e.excerpt,
							authors: e.authors,
							kind: "article",
							onClick: () => s(e.slug),
							delay: Math.min(t, bi) * .03
						}, e.id)),
						!m && g.map((e, t) => /* @__PURE__ */ Q(yi, {
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
						(F || x) && /* @__PURE__ */ Q("div", {
							className: "flex justify-center py-3",
							children: /* @__PURE__ */ Q(Ie, { className: "h-3 w-24" })
						})
					]
				})
			]
		})
	});
}
function wi() {
	return /* @__PURE__ */ Q("div", {
		className: "flex flex-col",
		children: Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ $("div", {
			className: "flex items-center gap-3 border-wx-border border-b px-5 py-4 last:border-b-0",
			children: [/* @__PURE__ */ $("div", {
				className: "flex min-w-0 flex-1 flex-col gap-2",
				children: [/* @__PURE__ */ Q(Ie, { className: "h-4 w-32 rounded" }), /* @__PURE__ */ Q(Ie, { className: "h-3 w-56 rounded" })]
			}), /* @__PURE__ */ Q(Ie, { className: "h-4 w-4 rounded" })]
		}, t))
	});
}
function Ti(e, t) {
	let [n, r] = Z(e);
	return Y(() => {
		let n = setTimeout(() => r(e), t);
		return () => clearTimeout(n);
	}, [e, t]), n;
}
//#endregion
//#region lib/strip-html.ts
function Ei(e) {
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
function Di({ message: e, onOpen: t, onDismiss: r, onSendButton: i, position: a = "right", embedded: o = !1 }) {
	let s = H("peek"), c = a === "left";
	return /* @__PURE__ */ Q(F, { children: e && /* @__PURE__ */ $(n.div, {
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
		className: U("bottom-24 z-2147483599 flex w-[300px] flex-col gap-2", o ? "absolute" : "fixed", c ? "left-4" : "right-4"),
		role: "dialog",
		"aria-label": s("newMessage"),
		children: [e.text && /* @__PURE__ */ $(n.div, {
			whileHover: { y: -3 },
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 24
			},
			className: U("relative rounded-wx-lg border border-wx-border bg-wx-bg", "p-4 pr-9 text-wx-fg", "shadow-[0_16px_40px_rgba(0,0,0,0.16)]"),
			children: [/* @__PURE__ */ Q("button", {
				type: "button",
				onClick: r,
				"aria-label": s("dismiss"),
				className: U("absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full", "text-wx-fg-muted transition-colors hover:bg-wx-bg-elevated hover:text-wx-fg"),
				children: /* @__PURE__ */ Q(de, { size: 12 })
			}), /* @__PURE__ */ $("button", {
				type: "button",
				onClick: t,
				className: U("block w-full text-left", "transition-opacity hover:opacity-90"),
				children: [/* @__PURE__ */ Q(Oi, { sender: e.sender }), /* @__PURE__ */ Q("span", {
					className: U("mt-1.5 block text-sm leading-relaxed", "wrap-anywhere", "line-clamp-10"),
					children: Ei(e.text)
				})]
			})]
		}), e.buttons.length > 0 && /* @__PURE__ */ Q("div", {
			className: U("flex flex-col gap-1.5", c ? "items-start" : "items-end"),
			children: e.buttons.map((e) => /* @__PURE__ */ Q(n.button, {
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
function Oi({ sender: e }) {
	let { config: t } = C(), n = H("peek"), r = e.kind === "ai" || e.kind === "bot", i = r ? Xt : e.name?.trim() ?? "", a = i ? null : e.kind === "operator" ? n("operator") : null, o = t.messenger?.aiAssistantAvatar ?? null;
	return /* @__PURE__ */ $("span", {
		className: "flex items-center gap-2 text-xs",
		children: [r ? o ? /* @__PURE__ */ Q("span", {
			role: "img",
			"aria-label": n("aiAssistant"),
			className: "relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg-elevated shadow-sm",
			children: /* @__PURE__ */ Q("img", {
				src: o,
				alt: "",
				className: "h-full w-full object-cover",
				loading: "eager",
				decoding: "async"
			})
		}) : null : e.avatar ? /* @__PURE__ */ Q("img", {
			src: e.avatar,
			alt: i || a || "",
			className: "h-5 w-5 shrink-0 rounded-full object-cover"
		}) : /* @__PURE__ */ Q("span", {
			className: U("flex h-5 w-5 shrink-0 items-center justify-center rounded-full", "bg-wx-bg-elevated text-[9px] font-semibold text-wx-fg-muted"),
			children: ki(i || a || "")
		}), /* @__PURE__ */ Q("span", {
			className: "font-medium text-wx-fg-muted",
			children: i || a
		})]
	});
}
function ki(e) {
	let t = e.trim().split(/\s+/).map((e) => e.replace(/[^\p{L}\p{N}]/gu, "")).filter((e) => e.length > 0);
	return t.length === 0 ? "" : t.length === 1 ? t[0].charAt(0).toUpperCase() : t[0].charAt(0).toUpperCase() + t[t.length - 1].charAt(0).toUpperCase();
}
//#endregion
//#region components/widget/tab-title-header.tsx
function Ai({ title: e, onBack: t, onClose: n, className: r, expanded: a, onToggleExpand: o }) {
	let c = H("header"), l = Je(), u = Je();
	return /* @__PURE__ */ $("header", {
		className: U("flex h-14 items-center gap-2 border-b border-wx-border bg-wx-bg px-2", r),
		children: [
			/* @__PURE__ */ Q("div", {
				className: "flex flex-1 items-center justify-start",
				children: t && /* @__PURE__ */ Q(De, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": c("back"),
					onClick: t,
					className: "shrink-0",
					...l.parentHandlers,
					children: /* @__PURE__ */ Q(s, {
						ref: l.iconRef,
						size: 18
					})
				})
			}),
			e && /* @__PURE__ */ Q("h2", {
				className: "min-w-0 shrink truncate text-center text-base font-semibold text-wx-fg",
				children: e
			}),
			/* @__PURE__ */ $("div", {
				className: "flex flex-1 items-center justify-end gap-0",
				children: [o && /* @__PURE__ */ Q(De, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": c(a ? "collapse" : "expand"),
					onClick: o,
					children: a ? /* @__PURE__ */ $("svg", {
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
							/* @__PURE__ */ Q("polyline", { points: "4 14 10 14 10 20" }),
							/* @__PURE__ */ Q("polyline", { points: "20 10 14 10 14 4" }),
							/* @__PURE__ */ Q("line", {
								x1: "14",
								y1: "10",
								x2: "21",
								y2: "3"
							}),
							/* @__PURE__ */ Q("line", {
								x1: "3",
								y1: "21",
								x2: "10",
								y2: "14"
							})
						]
					}) : /* @__PURE__ */ $("svg", {
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
							/* @__PURE__ */ Q("polyline", { points: "15 3 21 3 21 9" }),
							/* @__PURE__ */ Q("polyline", { points: "9 21 3 21 3 15" }),
							/* @__PURE__ */ Q("line", {
								x1: "21",
								y1: "3",
								x2: "14",
								y2: "10"
							}),
							/* @__PURE__ */ Q("line", {
								x1: "3",
								y1: "21",
								x2: "10",
								y2: "14"
							})
						]
					})
				}), /* @__PURE__ */ Q(De, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": c("close"),
					onClick: n,
					...u.parentHandlers,
					children: /* @__PURE__ */ Q(i, {
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
function ji({ isDummy: e, onOpenCategory: t, onOpenArticle: n }) {
	let r = H("help"), i = H("demo"), a = je(), [o, s] = Z(""), c = Pi(o, 300), { data: l, loading: u } = Ce({
		variables: {
			parentId: null,
			locale: a
		},
		skip: e
	}), { data: d } = Te({
		variables: { args: {
			folderId: null,
			locale: a,
			recursive: !1,
			limit: 20
		} },
		skip: e
	}), { data: f } = Te({
		variables: { args: {
			query: c,
			locale: a,
			limit: 10
		} },
		skip: c.length < 2 || e
	}), p = Fi(l), m = e ? we(i) : p ?? [], h = c.length >= 2, g = Ii(f), _ = e ? ye(i).filter((e) => e.title.toLowerCase().includes(c.toLowerCase()) || e.excerpt.toLowerCase().includes(c.toLowerCase())).map((e) => ({
		id: e.id,
		title: e.title,
		excerpt: e.excerpt,
		slug: e.slug,
		authors: Fe(e.authors)
	})) : [], v = e ? _ : g, y = e ? [] : (d?.visitorHelpList.items ?? []).map((e) => ({
		id: e._id,
		title: e.title,
		excerpt: e.excerpt ?? null,
		slug: e.slug,
		authors: Fe(e.authors)
	}));
	return /* @__PURE__ */ Q("div", {
		className: "flex h-full min-h-0 flex-col",
		children: /* @__PURE__ */ $(ce, {
			className: "min-h-0 flex-1",
			viewportRef: Pe("help"),
			children: [/* @__PURE__ */ Q(ze, {
				value: o,
				onChange: s,
				placeholder: r("searchPlaceholder")
			}), h ? /* @__PURE__ */ Q(Mi, {
				results: v,
				onOpen: n
			}) : u && m.length === 0 ? /* @__PURE__ */ Q(Ni, {}) : m.length > 0 || y.length > 0 ? /* @__PURE__ */ $(Ft, { children: [m.length > 0 && /* @__PURE__ */ Q("div", {
				className: "border-wx-border border-b px-5 py-4",
				children: /* @__PURE__ */ Q("p", {
					className: "font-semibold text-base text-wx-fg",
					children: r("collectionsCount", { count: m.length })
				})
			}), /* @__PURE__ */ $("div", {
				className: "flex flex-col",
				children: [m.map((e, n) => /* @__PURE__ */ Q(yi, {
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
				}, e.id)), y.map((e, t) => /* @__PURE__ */ Q(yi, {
					title: e.title,
					description: e.excerpt,
					authors: e.authors,
					kind: "article",
					onClick: () => n(e.slug),
					delay: (m.length + t) * .03
				}, e.id))]
			})] }) : /* @__PURE__ */ Q("div", {
				className: "px-5 py-6",
				children: /* @__PURE__ */ Q(N, { children: /* @__PURE__ */ $(oe, {
					className: "py-8 text-center",
					children: [/* @__PURE__ */ Q("p", {
						className: "font-semibold text-sm text-wx-fg",
						children: r("emptyTitle")
					}), /* @__PURE__ */ Q("p", {
						className: "mt-1 text-wx-fg-muted text-xs",
						children: r("emptyBody")
					})]
				}) })
			})]
		})
	});
}
function Mi({ results: e, onOpen: t }) {
	let n = H("help");
	return e.length === 0 ? /* @__PURE__ */ Q("div", {
		className: "px-5 py-6",
		children: /* @__PURE__ */ Q(N, { children: /* @__PURE__ */ Q(oe, {
			className: "py-8 text-center",
			children: /* @__PURE__ */ Q("p", {
				className: "text-sm text-wx-fg-muted",
				children: n("noResults")
			})
		}) })
	}) : /* @__PURE__ */ Q("div", {
		className: "flex flex-col",
		children: e.map((e, n) => /* @__PURE__ */ Q(yi, {
			title: e.title,
			description: e.excerpt,
			authors: e.authors,
			onClick: () => t(e.slug),
			delay: n * .03
		}, e.id))
	});
}
function Ni() {
	return /* @__PURE__ */ Q("div", {
		className: "flex flex-col",
		children: Array.from({ length: 4 }).map((e, t) => /* @__PURE__ */ $("div", {
			className: "flex items-center gap-3 border-wx-border border-b px-5 py-4 last:border-b-0",
			children: [/* @__PURE__ */ $("div", {
				className: "flex min-w-0 flex-1 flex-col gap-2",
				children: [
					/* @__PURE__ */ Q(Ie, { className: "h-4 w-32 rounded" }),
					/* @__PURE__ */ Q(Ie, { className: "h-3 w-56 rounded" }),
					/* @__PURE__ */ Q(Ie, { className: "h-3 w-20 rounded" })
				]
			}), /* @__PURE__ */ Q(Ie, { className: "h-4 w-4 rounded" })]
		}, t))
	});
}
function Pi(e, t) {
	let [n, r] = Z(e);
	return Y(() => {
		let n = setTimeout(() => r(e), t);
		return () => clearTimeout(n);
	}, [e, t]), n;
}
function Fi(e) {
	return e ? e.visitorHelpFolders.map((e) => ({
		id: e._id,
		title: e.name,
		description: e.description ?? "",
		articleCount: e.articleCount ?? 0
	})) : null;
}
function Ii(e) {
	return e ? e.visitorHelpList.items.map((e) => ({
		id: e._id,
		title: e.title,
		excerpt: e.excerpt ?? null,
		slug: e.slug,
		authors: Fe(e.authors),
		reactionCounts: e.reactionCounts ?? null
	})) : [];
}
//#endregion
//#region node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-context/dist/index.mjs
function Li(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = q.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = q.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ Q(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = q.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => q.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return q.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, Ri(i, ...t)];
}
function Ri(...e) {
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
			return q.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-primitive/dist/index.mjs
var zi = [
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
	let n = ve(`Primitive.${t}`), r = q.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ Q(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {}), Bi = /* @__PURE__ */ u(((t) => {
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
})), Vi = (/* @__PURE__ */ u(((e, t) => {
	t.exports = Bi();
})))();
function Hi() {
	return (0, Vi.useSyncExternalStore)(Ui, () => !0, () => !1);
}
function Ui() {
	return () => {};
}
//#endregion
//#region node_modules/@radix-ui/react-avatar/dist/index.mjs
var Wi = "Avatar", [Gi, Ki] = Li(Wi), [qi, Ji] = Gi(Wi), Yi = q.forwardRef((e, t) => {
	let { __scopeAvatar: n, ...r } = e, [i, a] = q.useState("idle");
	return /* @__PURE__ */ Q(qi, {
		scope: n,
		imageLoadingStatus: i,
		onImageLoadingStatusChange: a,
		children: /* @__PURE__ */ Q(zi.span, {
			...r,
			ref: t
		})
	});
});
Yi.displayName = Wi;
var Xi = "AvatarImage", Zi = q.forwardRef((e, t) => {
	let { __scopeAvatar: n, src: r, onLoadingStatusChange: i = () => {}, ...a } = e, o = Ji(Xi, n), s = ta(r, a), c = R((e) => {
		i(e), o.onImageLoadingStatusChange(e);
	});
	return I(() => {
		s !== "idle" && c(s);
	}, [s, c]), s === "loaded" ? /* @__PURE__ */ Q(zi.img, {
		...a,
		ref: t,
		src: r
	}) : null;
});
Zi.displayName = Xi;
var Qi = "AvatarFallback", $i = q.forwardRef((e, t) => {
	let { __scopeAvatar: n, delayMs: r, ...i } = e, a = Ji(Qi, n), [o, s] = q.useState(r === void 0);
	return q.useEffect(() => {
		if (r !== void 0) {
			let e = window.setTimeout(() => s(!0), r);
			return () => window.clearTimeout(e);
		}
	}, [r]), o && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ Q(zi.span, {
		...i,
		ref: t
	}) : null;
});
$i.displayName = Qi;
function ea(e, t) {
	return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function ta(e, { referrerPolicy: t, crossOrigin: n }) {
	let r = Hi(), i = q.useRef(null), a = r ? (i.current || (i.current = new window.Image()), i.current) : null, [o, s] = q.useState(() => ea(a, e));
	return I(() => {
		s(ea(a, e));
	}, [a, e]), I(() => {
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
var na = Yi, ra = Zi, ia = $i, aa = q.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ Q(na, {
	ref: n,
	className: U("relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full", e),
	...t
}));
aa.displayName = na.displayName;
var oa = q.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ Q(ra, {
	ref: n,
	className: U("aspect-square h-full w-full object-cover", e),
	...t
}));
oa.displayName = ra.displayName;
var sa = q.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ Q(ia, {
	ref: n,
	delayMs: 300,
	className: U("flex h-full w-full items-center justify-center bg-wx-bg-elevated-2 text-xs font-medium text-wx-fg-muted", e),
	...t
}));
sa.displayName = ia.displayName;
function ca({ avatars: e, max: t = 3, size: n = "md", ringClass: r = "ring-wx-bg", className: i }) {
	let a = e.slice(0, t), o = e.length - a.length, s = n === "sm" ? "h-7 w-7" : "h-8 w-8";
	return /* @__PURE__ */ $("div", {
		className: U("flex -space-x-2", i),
		children: [a.map((e) => /* @__PURE__ */ $(aa, {
			className: U(s, "ring-2", r),
			children: [/* @__PURE__ */ Q(oa, {
				src: e.src,
				alt: e.alt
			}), /* @__PURE__ */ Q(sa, { children: la(e.alt) })]
		}, e.src)), o > 0 && /* @__PURE__ */ Q(aa, {
			className: U(s, "ring-2", r),
			children: /* @__PURE__ */ $(sa, { children: ["+", o] })
		})]
	});
}
function la(e) {
	return e.split(/\s+/).filter(Boolean).slice(0, 2).map((e) => e[0]?.toUpperCase() ?? "").join("");
}
//#endregion
//#region lib/localize-config-text.ts
function ua(e, t, n, r) {
	let i = e?.trim() ?? "";
	return i && da(n, r ?? "en") ? i : t;
}
function da(e, t) {
	return fa(e) === fa(t);
}
function fa(e) {
	return e.toLowerCase().split("-")[0];
}
function pa() {
	let e = je(), { config: t } = C(), n = t.defaultLocale ?? "en";
	return J((t, r) => ua(t, r, e, n), [e, n]);
}
//#endregion
//#region components/widget/home-blocks/blocks/ask-question.tsx
function ma({ block: e, config: t, onOpenTab: r }) {
	let i = H("home"), a = pa(), o = e.action ?? "open-messenger", s = o === "open-help" ? "help" : o === "open-news" ? "news" : "messages";
	return /* @__PURE__ */ $(n.button, {
		type: "button",
		onClick: () => r(s),
		whileHover: { y: -1 },
		whileTap: { scale: .99 },
		transition: {
			type: "spring",
			stiffness: 360,
			damping: 26
		},
		className: "flex w-full items-center gap-3 rounded-wx-lg bg-wx-bg-elevated px-4 py-3.5 text-left transition-colors hover:bg-wx-bg-elevated-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: [
			/* @__PURE__ */ $("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ Q("p", {
					className: "truncate text-base font-semibold text-wx-fg",
					children: a(e.title, i("askTitle"))
				}), /* @__PURE__ */ Q("p", {
					className: "mt-0.5 truncate text-sm text-wx-fg-muted",
					children: a(e.subtitle, i("askSubtitle"))
				})]
			}),
			t.operatorAvatars.length > 0 && /* @__PURE__ */ Q(ca, {
				avatars: t.operatorAvatars,
				size: "sm",
				ringClass: "ring-wx-bg-elevated"
			}),
			/* @__PURE__ */ Q(Cr, {
				size: 16,
				className: "shrink-0 text-wx-fg-muted"
			})
		]
	});
}
//#endregion
//#region components/widget/home-blocks/helpers.tsx
function ha(e) {
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
function ga(e) {
	return Array.isArray(e) ? e.map((e) => typeof e == "object" && e && "title" in e ? String(e.title ?? "") : "").filter((e) => e.length > 0) : [];
}
function _a(e, t) {
	return t || !e ? [] : e.map((e) => typeof e.title == "string" ? e.title : "").filter((e) => e.length > 0);
}
function va(e) {
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
function ya(e) {
	return e.split(/\n{2,}/).map((e, t) => /* @__PURE__ */ Q("p", {
		className: t > 0 ? "mt-2" : void 0,
		children: e.split("\n").map((e, t) => /* @__PURE__ */ $("span", { children: [t > 0 && /* @__PURE__ */ Q("br", {}), ba(e)] }, t))
	}, t));
}
function ba(e) {
	let t = [], n = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g, r = 0, i, a = 0;
	for (; i = n.exec(e);) {
		if (i.index > r && t.push(e.slice(r, i.index)), i[1] && i[2]) {
			let e = /^https?:\/\//.test(i[2]) ? i[2] : "#";
			t.push(/* @__PURE__ */ Q("a", {
				href: e,
				target: "_blank",
				rel: "noopener noreferrer",
				children: i[1]
			}, a++));
		} else i[3] ? t.push(/* @__PURE__ */ Q("strong", {
			className: "font-semibold text-wx-fg",
			children: i[3]
		}, a++)) : i[4] && t.push(/* @__PURE__ */ Q("em", { children: i[4] }, a++));
		r = i.index + i[0].length;
	}
	return r < e.length && t.push(e.slice(r)), t;
}
//#endregion
//#region components/widget/home-blocks/blocks/featured-article.tsx
function xa({ block: e, onOpenTab: t, onOpenNewsArticle: r, isDummy: i }) {
	let a = H("home"), o = p(), s = !i && e.newsId ? o.previewData?.newsPostsById?.[e.newsId] : void 0, c = s !== void 0, { data: l, loading: u } = Ne({
		variables: { args: { id: e.newsId ?? "" } },
		skip: i || c || !e.newsId
	});
	if (i) return /* @__PURE__ */ $(n.button, {
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
		children: [/* @__PURE__ */ Q("div", {
			className: "relative w-full",
			style: {
				aspectRatio: "16 / 11",
				backgroundImage: "linear-gradient(135deg, #1e1f3b 0%, #1a1a2e 55%, #3a1e2b 100%)"
			},
			children: /* @__PURE__ */ $("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-6 text-center text-white",
				children: [
					/* @__PURE__ */ Q("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] uppercase opacity-80",
						children: a("featuredArticleDemoEyebrow")
					}),
					/* @__PURE__ */ Q("p", {
						className: "text-2xl leading-tight font-bold",
						children: a("featuredArticleDemoHeadline")
					}),
					/* @__PURE__ */ Q("p", {
						className: "text-sm opacity-85",
						children: a("featuredArticleDemoSubline")
					})
				]
			})
		}), /* @__PURE__ */ $("div", {
			className: "flex items-center justify-between gap-2 px-4 py-3",
			children: [/* @__PURE__ */ Q("span", {
				className: "truncate text-sm font-semibold text-wx-fg",
				children: a("featuredArticleDemoCta")
			}), /* @__PURE__ */ Q(pe, {
				size: 16,
				className: "shrink-0 text-wx-fg-subtle"
			})]
		})]
	});
	let d = ha(c ? s : l?.visitorNewsPost), f = !!d, m = e.ctaLabel?.trim() || a("featuredArticleTap"), h = f ? () => r ? r(d.id) : t("news") : void 0, g = d?.coverImageUrl;
	return !e.newsId || !u && !d ? /* @__PURE__ */ Q(n.button, {
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
		children: /* @__PURE__ */ Q("div", {
			className: "relative w-full",
			style: {
				aspectRatio: "16 / 11",
				backgroundImage: "linear-gradient(135deg, #1e1f3b 0%, #1a1a2e 55%, #3a1e2b 100%)"
			},
			children: /* @__PURE__ */ $("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-1 px-6 text-center text-white",
				children: [/* @__PURE__ */ Q("p", {
					className: "text-2xl leading-tight font-bold",
					children: e.newsId ? a("featuredArticleLoading") : a("featuredArticleEmpty")
				}), /* @__PURE__ */ Q("p", {
					className: "text-sm opacity-80",
					children: e.newsId ? "" : a("featuredArticleSetUp")
				})]
			})
		})
	}) : /* @__PURE__ */ $(n.button, {
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
		children: [/* @__PURE__ */ Q("div", {
			className: "relative w-full",
			style: {
				aspectRatio: "16 / 11",
				backgroundImage: g ? `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.65) 100%), url(${g})` : "linear-gradient(135deg, #1e1f3b 0%, #1a1a2e 55%, #3a1e2b 100%)",
				backgroundSize: "cover",
				backgroundPosition: "center"
			},
			children: /* @__PURE__ */ $("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-6 text-center text-white",
				children: [/* @__PURE__ */ Q("p", {
					className: "text-2xl leading-tight font-bold",
					children: d?.title
				}), d?.excerpt && /* @__PURE__ */ Q("p", {
					className: "text-sm opacity-85 line-clamp-2",
					children: d.excerpt
				})]
			})
		}), /* @__PURE__ */ $("div", {
			className: "flex items-center justify-between gap-2 px-4 py-3",
			children: [/* @__PURE__ */ Q("span", {
				className: "truncate text-sm font-semibold text-wx-fg",
				children: m
			}), /* @__PURE__ */ Q(pe, {
				size: 16,
				className: "shrink-0 text-wx-fg-subtle"
			})]
		})]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/help-search.tsx
function Sa() {
	return /* @__PURE__ */ $("div", {
		className: "flex w-full items-center gap-2 px-3.5 py-2.5",
		children: [/* @__PURE__ */ Q("div", { className: "h-3.5 min-w-0 flex-1 animate-pulse rounded-wx-sm bg-wx-bg-elevated-2" }), /* @__PURE__ */ Q("div", { className: "h-3.5 w-3.5 shrink-0 animate-pulse rounded-wx-sm bg-wx-bg-elevated-2" })]
	});
}
function Ca({ title: e, slug: t, onOpenArticle: n, onOpenTab: r }) {
	return /* @__PURE__ */ $("button", {
		type: "button",
		onClick: () => n ? n(t) : r("help"),
		className: "flex w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-wx-bg-elevated-2",
		children: [/* @__PURE__ */ Q("span", {
			className: "min-w-0 flex-1 truncate text-sm text-wx-fg",
			children: e
		}), /* @__PURE__ */ Q(pe, {
			size: 14,
			className: "shrink-0 text-wx-fg-subtle"
		})]
	});
}
function wa({ block: e, onOpenTab: t, onOpenArticle: n, isDummy: r }) {
	let i = H("home"), a = H("demo"), o = p(), s = je(), c = e.suggestions, l = c ? Math.max(0, Math.min(c.maxItems ?? 0, 10)) : 0, u = o.previewData?.helpArticles, d = !r && !!u && l > 0, f = c?.mode === "popular" ? Ee.Popular : c?.mode === "recent" ? Ee.Recent : void 0, m = c?.mode === "category" ? c.categoryId : void 0, h = r || d || l === 0 || !c || !(c.mode === "popular" || c.mode === "recent" || c.mode === "category") || c.mode === "category" && !m, { data: g, loading: _ } = _e({
		variables: { args: {
			limit: l,
			locale: s,
			sort: f,
			folderId: m ?? void 0,
			recursive: c?.mode === "category" ? !0 : void 0
		} },
		skip: h
	}), v = c?.mode === "manual" ? (c.articleIds ?? []).slice(0, l) : [], y = r || d || v.length === 0, { data: b, loading: x } = he({
		variables: {
			ids: v,
			locale: s
		},
		skip: y
	}), S = (() => {
		if (l === 0 || !c) return [];
		if (r) {
			let e = ye(a);
			return (c.mode === "popular" ? e.slice().sort((e, t) => t.viewCount - e.viewCount) : c.mode === "recent" ? e.slice().sort((e, t) => (t.publishedAt ?? "").localeCompare(e.publishedAt ?? "")) : c.mode === "category" && c.categoryId ? e.filter((e) => e.categoryId === c.categoryId) : c.mode === "manual" ? (c.articleIds ?? []).map((t) => e.find((e) => e.id === t)).filter((e) => e != null) : e).slice(0, l).map((e) => ({
				id: e.id,
				title: e.title,
				slug: e.slug
			}));
		}
		if (d && u) {
			let e = u.map((e) => {
				if (!e || typeof e != "object") return null;
				let t = e;
				return typeof t._id == "string" && typeof t.title == "string" && typeof t.slug == "string" ? {
					id: t._id,
					title: t.title,
					slug: t.slug
				} : null;
			}).filter((e) => e != null);
			if (c.mode === "manual" && c.articleIds) {
				let t = new Map(e.map((e) => [e.id, e]));
				return c.articleIds.map((e) => t.get(e)).filter((e) => e != null).slice(0, l);
			}
			return e.slice(0, l);
		}
		return c.mode === "manual" ? (b?.visitorHelpArticlesByIds ?? []).filter((e) => e != null).map((e) => ({
			id: e._id,
			title: e.title,
			slug: e.slug
		})) : (g?.visitorHelpList?.items ?? []).map((e) => ({
			id: e._id,
			title: e.title,
			slug: e.slug
		}));
	})(), C = !r && !d && (_ || x) && S.length === 0 ? l : 0, w = C > 0 || S.length > 0;
	return /* @__PURE__ */ $("div", {
		className: "overflow-hidden rounded-wx-lg border border-wx-border bg-wx-bg-elevated",
		children: [/* @__PURE__ */ $("button", {
			type: "button",
			onClick: () => t("help"),
			className: "flex w-full items-center gap-2.5 px-3.5 py-3 text-left transition-colors hover:bg-wx-bg-elevated-2",
			children: [/* @__PURE__ */ Q("span", {
				className: "min-w-0 flex-1 truncate text-sm font-medium text-wx-fg",
				children: e.placeholder?.trim() || i("searchPlaceholder")
			}), /* @__PURE__ */ Q(qr, {
				size: 16,
				className: "shrink-0 text-wx-fg-muted"
			})]
		}), w && /* @__PURE__ */ Q("div", {
			className: "border-t border-wx-border",
			children: C > 0 ? Array.from({ length: C }).map((e, t) => /* @__PURE__ */ Q(Sa, {}, t)) : S.map((e) => /* @__PURE__ */ Q(Ca, {
				title: e.title,
				slug: e.slug,
				onOpenArticle: n,
				onOpenTab: t
			}, e.id))
		})]
	});
}
//#endregion
//#region components/widget/home-blocks/shared.tsx
function Ta({ title: e, onOpenAll: t, children: n }) {
	return /* @__PURE__ */ $("div", {
		className: "overflow-hidden rounded-wx-lg border border-wx-border bg-wx-bg-elevated",
		children: [/* @__PURE__ */ $("div", {
			className: "flex items-center justify-between px-3.5 pt-3 pb-1.5",
			children: [/* @__PURE__ */ Q("p", {
				className: "text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
				children: e
			}), /* @__PURE__ */ Q("button", {
				type: "button",
				onClick: t,
				className: "text-xs font-medium text-wx-primary hover:underline",
				children: /* @__PURE__ */ Q(pe, { size: 14 })
			})]
		}), n]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/news-preview.tsx
function Ea({ block: e, onOpenTab: t, isDummy: n }) {
	let r = H("home"), i = H("demo"), a = je(), o = p(), s = pa(), c = Math.max(1, Math.min(6, e.maxItems ?? 3)), l = n ? void 0 : o.previewData?.newsPosts, u = Array.isArray(l) && l.length > 0, { data: d, error: f, loading: m } = Re({
		variables: { args: {
			locale: a,
			limit: c
		} },
		skip: n || u
	}), h = n ? Le(i).slice(0, c).map((e) => e.title) : u ? ga(l).slice(0, c) : _a(d?.visitorNewsList.items, f).slice(0, c);
	return !n && !m && h.length === 0 ? null : /* @__PURE__ */ Q(Ta, {
		title: s(e.title, r("newsPreviewTitle")),
		onOpenAll: () => t("news"),
		children: /* @__PURE__ */ Q("ul", {
			className: "flex flex-col",
			children: h.map((e, n) => /* @__PURE__ */ Q("li", { children: /* @__PURE__ */ $("button", {
				type: "button",
				onClick: () => t("news"),
				className: "flex w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-wx-bg-elevated-2",
				children: [
					/* @__PURE__ */ Q(Zr, {
						size: 14,
						className: "shrink-0 text-wx-fg-muted"
					}),
					/* @__PURE__ */ Q("span", {
						className: "min-w-0 flex-1 truncate text-sm text-wx-fg",
						children: e
					}),
					/* @__PURE__ */ Q(pe, {
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
function Da({ block: e, onOpenTab: t, onOpenArticle: n, isDummy: r }) {
	let i = H("home"), a = H("demo"), o = p(), s = je(), c = pa(), l = (e.articleIds ?? []).slice(0, 5), u = l.length, d = r ? null : o.previewData?.helpArticlesById, f = !!d, { data: m } = xe({
		variables: {
			ids: l,
			locale: s
		},
		skip: r || f || l.length === 0
	});
	if (r) {
		let r = ye(a).slice().sort((e, t) => t.viewCount - e.viewCount).slice(0, 4);
		return /* @__PURE__ */ Q(Ta, {
			title: c(e.title, i("popularArticlesTitle")),
			onOpenAll: () => t("help"),
			children: /* @__PURE__ */ Q("ul", {
				className: "flex flex-col",
				children: r.map((e) => /* @__PURE__ */ Q("li", { children: /* @__PURE__ */ $("button", {
					type: "button",
					onClick: () => n ? n(e.slug) : t("help"),
					className: "flex w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-wx-bg-elevated-2",
					children: [
						/* @__PURE__ */ Q(Tr, {
							size: 14,
							className: "shrink-0 text-wx-fg-muted"
						}),
						/* @__PURE__ */ Q("span", {
							className: "min-w-0 flex-1 truncate text-sm text-wx-fg",
							children: e.title
						}),
						/* @__PURE__ */ Q(pe, {
							size: 14,
							className: "shrink-0 text-wx-fg-subtle"
						})
					]
				}) }, e.id))
			})
		});
	}
	if (u === 0) return null;
	let h = /* @__PURE__ */ new Map();
	if (f && d) for (let e of l) {
		let t = d[e];
		if (t && typeof t == "object") {
			let n = t;
			typeof n.title == "string" && typeof n.slug == "string" && h.set(e, {
				title: n.title,
				slug: n.slug
			});
		}
	}
	else for (let e of m?.visitorHelpArticlesByIds ?? []) h.set(e._id, {
		title: e.title,
		slug: e.slug
	});
	return /* @__PURE__ */ Q(Ta, {
		title: c(e.title, i("pinnedArticlesTitle")),
		onOpenAll: () => t("help"),
		children: /* @__PURE__ */ Q("ul", {
			className: "flex flex-col",
			children: l.map((e, r) => {
				let a = h.get(e);
				return /* @__PURE__ */ Q("li", { children: /* @__PURE__ */ $("button", {
					type: "button",
					onClick: () => {
						a && n ? n(a.slug) : t("help");
					},
					className: "flex w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-wx-bg-elevated-2",
					children: [
						/* @__PURE__ */ Q(Tr, {
							size: 14,
							className: "shrink-0 text-wx-fg-muted"
						}),
						/* @__PURE__ */ Q("span", {
							className: "min-w-0 flex-1 truncate text-sm text-wx-fg",
							children: a ? a.title : i("pinnedArticleRow", { n: r + 1 })
						}),
						/* @__PURE__ */ Q(pe, {
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
function Oa(e, t, n) {
	return {
		xmlns: "http://www.w3.org/2000/svg",
		width: e,
		height: e,
		viewBox: "0 0 24 24",
		fill: n,
		"aria-hidden": "true",
		className: t
	};
}
function ka({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ $("svg", {
		...Oa(e, t, n ? "#25D366" : "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "WhatsApp" }), /* @__PURE__ */ Q("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" })]
	});
}
function Aa({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ $("svg", {
		...Oa(e, t, n ? "#26A5E4" : "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "Telegram" }), /* @__PURE__ */ Q("path", { d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.149-.056-.211s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" })]
	});
}
function ja({ size: e = 18, className: t, colored: n }) {
	return n ? /* @__PURE__ */ $("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: e,
		height: e,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className: t,
		children: [
			/* @__PURE__ */ Q("title", { children: "Instagram" }),
			/* @__PURE__ */ Q("defs", { children: /* @__PURE__ */ $("radialGradient", {
				id: "wexio-ig-gradient",
				cx: "30%",
				cy: "107%",
				r: "150%",
				children: [
					/* @__PURE__ */ Q("stop", {
						offset: "0%",
						stopColor: "#FFDD55"
					}),
					/* @__PURE__ */ Q("stop", {
						offset: "25%",
						stopColor: "#FFDD55"
					}),
					/* @__PURE__ */ Q("stop", {
						offset: "50%",
						stopColor: "#FF543E"
					}),
					/* @__PURE__ */ Q("stop", {
						offset: "75%",
						stopColor: "#C837AB"
					}),
					/* @__PURE__ */ Q("stop", {
						offset: "100%",
						stopColor: "#5851DB"
					})
				]
			}) }),
			/* @__PURE__ */ Q("path", {
				fill: "url(#wexio-ig-gradient)",
				d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
			})
		]
	}) : /* @__PURE__ */ $("svg", {
		...Oa(e, t, "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "Instagram" }), /* @__PURE__ */ Q("path", { d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" })]
	});
}
function Ma({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ $("svg", {
		...Oa(e, t, n ? "#0078FF" : "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "Messenger" }), /* @__PURE__ */ Q("path", { d: "M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.39 0 010 11.639zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.81-2.1a1.86 1.86 0 00-2.6.48z" })]
	});
}
function Na({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ $("svg", {
		...Oa(e, t, n ? "#7360F2" : "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "Viber" }), /* @__PURE__ */ Q("path", { d: "M11.4 0C9.473.028 5.333.344 3.018 2.467 1.298 4.187.696 6.7.633 9.817c-.062 3.116-.136 8.95 5.488 10.533v2.42s-.038.978.609 1.177c.781.243 1.24-.502 1.986-1.305.41-.441.973-1.09 1.4-1.587 3.85.324 6.8-.418 7.143-.529 1.072-.345 6.49-.95 7.245-9.388.36-3.66-.143-7.23-3.245-9.875-.96-.838-2.984-2.293-7.245-2.317 0 0-.246-.011-.61-.012zm.149 1.625c1.073 0 5.184.103 7.18 1.92 2.546 2.236 2.972 5.36 2.668 8.47-.55 7.058-4.825 7.55-5.73 7.838-.288.111-2.85.794-6.092.581 0 0-2.408 2.926-3.158 3.69-.117.122-.255.171-.347.144-.13-.034-.165-.193-.165-.428l.02-3.99c-4.756-1.302-4.482-6.293-4.43-8.895.054-2.602.547-4.735 1.996-6.176 1.948-1.788 5.485-2.05 7.196-2.054.43-.001.642-.05.862-.05zm-.135 2.5c-.143.001-.247.118-.222.262.024.142.143.245.286.245 1.86.041 3.385.685 4.555 1.975.555.617.836 1.27 1.045 2.06.21.789.275 1.638.245 2.475-.005.144.099.265.243.272s.265-.103.272-.247c.032-.876-.038-1.768-.262-2.617-.224-.847-.554-1.601-1.183-2.298-1.27-1.396-2.97-2.117-4.928-2.16-.018-.001-.034.001-.05.033zm-1.5 1.282c-.196.005-.452.038-.711.232-.413.31-1.262 1.328-1.293 2.078-.031.787 1.293 3.013 1.293 3.013l.025.026s1.044 1.706 2.075 3c1.027 1.297 2.075 2.187 2.075 2.187s1.293.992 2.078 1.231c.788.244 1.293-.025 1.605-.451.31-.413 1.328-1.231 1.328-2.018 0-.788-2.018-1.832-2.481-1.953-.464-.122-.866 0-.991.213-.213.366-.5.732-1.062.488-1.013-.46-1.628-1.013-2.018-1.487-.46-.5-.91-1.013-1.413-2.018-.25-.535.119-.825.488-1.038.213-.122.366-.524.244-.988-.122-.464-1.166-2.481-1.953-2.481-.094-.024-.207-.034-.31-.034zm2.293 1.187a.265.265 0 00-.262.262c0 .143.122.262.262.262.594.014 1.072.21 1.428.594.34.39.5.879.518 1.534a.265.265 0 00.262.262c.143 0 .262-.122.262-.262-.018-.79-.244-1.453-.659-1.928-.488-.5-1.044-.733-1.751-.733zm-.072 1.5a.255.255 0 00-.244.262c0 .143.122.262.262.262.453.043.622.213.65.66 0 .143.122.262.262.262a.265.265 0 00.262-.262c-.018-.595-.34-1.013-.952-1.184-.06-.012-.158 0-.218 0z" })]
	});
}
function Pa({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ $("svg", {
		...Oa(e, t, n ? "#5865F2" : "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "Discord" }), /* @__PURE__ */ Q("path", { d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" })]
	});
}
function Fa({ size: e = 18, className: t, colored: n }) {
	return n ? /* @__PURE__ */ $("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: e,
		height: e,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className: t,
		children: [
			/* @__PURE__ */ Q("title", { children: "Slack" }),
			/* @__PURE__ */ Q("path", {
				fill: "#E01E5A",
				d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
			}),
			/* @__PURE__ */ Q("path", {
				fill: "#36C5F0",
				d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
			}),
			/* @__PURE__ */ Q("path", {
				fill: "#2EB67D",
				d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
			}),
			/* @__PURE__ */ Q("path", {
				fill: "#ECB22E",
				d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
			})
		]
	}) : /* @__PURE__ */ $("svg", {
		...Oa(e, t, "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "Slack" }), /* @__PURE__ */ Q("path", { d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" })]
	});
}
function Ia({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ $("svg", {
		...Oa(e, t, n ? "#06C755" : "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "LINE" }), /* @__PURE__ */ Q("path", { d: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" })]
	});
}
function La({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ $("svg", {
		...Oa(e, t, n ? "#1877F2" : "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "Facebook" }), /* @__PURE__ */ Q("path", { d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" })]
	});
}
function Ra({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ $("svg", {
		...Oa(e, t, n ? "#000000" : "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "X" }), /* @__PURE__ */ Q("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })]
	});
}
function za({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ $("svg", {
		...Oa(e, t, n ? "#0A66C2" : "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "LinkedIn" }), /* @__PURE__ */ Q("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })]
	});
}
function Ba({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ $("svg", {
		...Oa(e, t, n ? "#FF4500" : "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "Reddit" }), /* @__PURE__ */ Q("path", { d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" })]
	});
}
function Va({ size: e = 18, className: t, colored: n }) {
	return n ? /* @__PURE__ */ $("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: e,
		height: e,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className: t,
		children: [
			/* @__PURE__ */ Q("title", { children: "TikTok" }),
			/* @__PURE__ */ Q("path", {
				fill: "#25F4EE",
				d: "M9.375 9.05v-1.1a4.91 4.91 0 0 0-.71-.06 4.99 4.99 0 0 0-2.86 9.03 4.987 4.987 0 0 1 3.57-7.87zM15.66 5.34v-1A2.93 2.93 0 0 1 13.42.78l-.07-.78h-.84a2.95 2.95 0 0 0 3.15 5.34zM18.51 6.78a4.96 4.96 0 0 1-.97-2.96h-.65A4.972 4.972 0 0 0 18.51 6.78z"
			}),
			/* @__PURE__ */ Q("path", {
				fill: "#FE2C55",
				d: "M14.46 14.86a4.99 4.99 0 0 1-4.99 4.93 4.99 4.99 0 0 1-2.86-.9 4.987 4.987 0 0 0 8.55-3.45v-9c.96.69 2.06 1.18 3.21 1.36v-1.5a4.94 4.94 0 0 1-2.5-1.32V13.4zM8.61 11.91a4.987 4.987 0 0 1 5.41-4.91v-1.5a5.06 5.06 0 0 0-.66-.04c-2.76 0-5.01 2.24-5.01 5.01a4.99 4.99 0 0 0 .26 1.44z"
			}),
			/* @__PURE__ */ Q("path", {
				fill: "#000000",
				d: "M16.6 5.82a4.91 4.91 0 0 1-.94-.48V7.81a6.412 6.412 0 0 0 4.18 1.53V7.84a3.84 3.84 0 0 1-3.24-2.02zM7.96 12.93a3.7 3.7 0 0 1 1.41-.27c.24 0 .48.04.71.1V9.06a6.41 6.41 0 0 0-.71-.05v3.43a3.69 3.69 0 0 0-.7-.06 3.72 3.72 0 0 0-3.72 3.72 3.72 3.72 0 0 0 3.01 3.65 3.7 3.7 0 0 1-1.06-2.61 3.72 3.72 0 0 1 1.06-2.61zM12.51 18.51c-.99-.07-1.94-.46-2.69-1.1a3.71 3.71 0 0 0 2.71 1.17c2.06 0 3.72-1.66 3.72-3.72V5.82a4.91 4.91 0 0 0-1.46-.18v9.04a3.72 3.72 0 0 1-2.28 3.83z"
			})
		]
	}) : /* @__PURE__ */ $("svg", {
		...Oa(e, t, "currentColor"),
		children: [/* @__PURE__ */ Q("title", { children: "TikTok" }), /* @__PURE__ */ Q("path", { d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" })]
	});
}
var Ha = {
	whatsapp: ka,
	telegram: Aa,
	instagram: ja,
	messenger: Ma,
	viber: Na,
	discord: Pa,
	slack: Fa,
	line: Ia,
	facebook: La,
	twitter: Ra,
	linkedin: za,
	reddit: Ba,
	tiktok: Va
}, Ua = {
	telegram: qe,
	whatsapp: Vr,
	viber: Gr,
	instagram: Dr,
	messenger: zr,
	discord: Mr,
	slack: Nr,
	chat: Br,
	email: Rr,
	phone: Gr,
	"video-call": ri,
	help: kr,
	book: Tr,
	bell: wr,
	star: Qr,
	heart: Pr,
	bookmark: Er,
	"arrow-right": Cr,
	lock: Lr,
	shield: Yr,
	user: ti,
	users: ni
};
function Wa({ block: e, onOpenTab: t }) {
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
		return /* @__PURE__ */ Q("div", {
			className: U("grid gap-2", t.length === 1 && "grid-cols-1", t.length === 2 && "grid-cols-2", t.length === 3 && "grid-cols-3", t.length >= 4 && "grid-cols-4"),
			children: t.map((e, t) => /* @__PURE__ */ Q(Ga, {
				btn: e,
				onClick: () => n(e)
			}, `${e.action}-${t}`))
		});
	}
	return /* @__PURE__ */ Q("div", {
		className: "flex flex-col gap-2",
		children: e.buttons.map((e, t) => /* @__PURE__ */ Q(Ka, {
			btn: e,
			onClick: () => n(e)
		}, `${e.action}-${t}`))
	});
}
function Ga({ btn: e, onClick: t }) {
	let r = e.icon?.kind === "named" ? e.icon.name : null, i = e.icon?.kind === "named" ? !!e.icon.colored : !1, a = r ? Ha[r] : null, o = r ? Ua[r] ?? Br : Br, s = a ?? o;
	return /* @__PURE__ */ $(n.button, {
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
		children: [/* @__PURE__ */ Q("span", {
			className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wx-bg transition-transform group-hover:scale-110",
			children: e.icon?.kind === "media" ? /* @__PURE__ */ Q("img", {
				src: e.icon.url,
				alt: "",
				className: "h-5 w-5 object-contain"
			}) : /* @__PURE__ */ Q(s, {
				size: 18,
				className: i ? void 0 : "text-wx-fg",
				colored: a ? i : void 0
			})
		}), e.label && /* @__PURE__ */ Q("span", {
			className: "block w-full truncate text-center text-[11px] leading-tight font-medium",
			children: e.label
		})]
	});
}
function Ka({ btn: e, onClick: t }) {
	return !e.label && e.icon?.kind === "media" ? /* @__PURE__ */ Q(n.button, {
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
		children: /* @__PURE__ */ Q("img", {
			src: e.icon.url,
			alt: "",
			className: "w-full object-cover"
		})
	}) : /* @__PURE__ */ $(De, {
		type: "button",
		variant: e.style === "primary" ? "solid" : e.style === "ghost" ? "ghost" : "tonal",
		size: "lg",
		onClick: t,
		className: "justify-start gap-2.5",
		children: [e.icon?.kind === "named" ? (() => {
			let t = e.icon.name, n = !!e.icon.colored, r = Ha[t];
			return r ? /* @__PURE__ */ Q(r, {
				size: 16,
				className: "shrink-0",
				colored: n
			}) : /* @__PURE__ */ Q(Ua[t] ?? Br, {
				size: 16,
				className: "shrink-0"
			});
		})() : e.icon?.kind === "media" ? /* @__PURE__ */ Q("img", {
			src: e.icon.url,
			alt: "",
			className: "h-4 w-4 shrink-0 object-contain"
		}) : null, e.label && /* @__PURE__ */ Q("span", {
			className: "text-sm font-medium",
			children: e.label
		})]
	});
}
//#endregion
//#region components/widget/icons/wexio-mark.tsx
function qa({ size: e = 24, className: t }) {
	return /* @__PURE__ */ $("span", {
		style: {
			width: e,
			height: e
		},
		className: U("relative inline-block", t),
		role: "img",
		"aria-label": "Wexio",
		children: [/* @__PURE__ */ Q("img", {
			src: b("/logo-dark.png"),
			alt: "",
			width: e,
			height: e,
			className: "block h-full w-full dark:hidden"
		}), /* @__PURE__ */ Q("img", {
			src: b("/logo-light.png"),
			alt: "",
			width: e,
			height: e,
			className: "hidden h-full w-full dark:block"
		})]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/recent-message.tsx
function Ja({ block: e, onOpenTab: t, isDummy: n, chatId: r, config: i }) {
	let a = H("home"), o = pa(), { data: s, loading: c } = bn({
		variables: { chatId: r ?? "" },
		skip: n || !r
	});
	if (!n) {
		if (!r || c) return null;
		let n = s?.visitorChatRecentInbound;
		if (!n) return null;
		let l = n.sender?.kind === "ai" || n.sender?.kind === "bot", u = l ? Xt : n.sender?.name?.trim() || a("recentMessageFromFallback"), d = l ? i.messenger?.aiAssistantAvatar ?? null : n.sender?.avatar ?? null;
		return /* @__PURE__ */ $("button", {
			type: "button",
			onClick: () => t("messages"),
			className: "flex w-full flex-col gap-3 rounded-wx-lg bg-wx-bg-elevated px-4 py-3.5 text-left transition-colors hover:bg-wx-bg-elevated-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
			children: [/* @__PURE__ */ Q("p", {
				className: "text-sm text-wx-fg-muted",
				children: o(e.title, a("recentMessageTitle"))
			}), /* @__PURE__ */ $("div", {
				className: "flex items-start gap-3",
				children: [d ? /* @__PURE__ */ Q("span", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg",
					children: /* @__PURE__ */ Q("img", {
						src: d,
						alt: u,
						className: "h-9 w-9 rounded-full object-cover"
					})
				}) : l ? null : /* @__PURE__ */ Q("span", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg",
					children: /* @__PURE__ */ Q("span", {
						className: "text-sm font-semibold text-wx-fg-muted",
						children: u.charAt(0).toUpperCase()
					})
				}), /* @__PURE__ */ $("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ $("div", {
						className: "flex items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ Q("p", {
							className: "truncate text-sm font-semibold text-wx-fg",
							children: u
						}), /* @__PURE__ */ Q("span", {
							className: "shrink-0 text-xs text-wx-fg-subtle",
							children: va(n.createdAt)
						})]
					}), /* @__PURE__ */ Q("p", {
						className: "mt-0.5 line-clamp-2 text-sm text-wx-fg-muted",
						children: Ei(n.text)
					})]
				})]
			})]
		});
	}
	return /* @__PURE__ */ $("button", {
		type: "button",
		onClick: () => t("messages"),
		className: "flex w-full flex-col gap-3 rounded-wx-lg bg-wx-bg-elevated px-4 py-3.5 text-left transition-colors hover:bg-wx-bg-elevated-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: [/* @__PURE__ */ Q("p", {
			className: "text-sm text-wx-fg-muted",
			children: o(e.title, a("recentMessageTitle"))
		}), /* @__PURE__ */ $("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ Q("span", {
				className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg",
				children: /* @__PURE__ */ Q(qa, { size: 36 })
			}), /* @__PURE__ */ $("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ $("div", {
					className: "flex items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ Q("p", {
						className: "truncate text-sm font-semibold text-wx-fg",
						children: a("recentMessageFromFallback")
					}), /* @__PURE__ */ Q("span", {
						className: "shrink-0 text-xs text-wx-fg-subtle",
						children: a("recentMessageAgo")
					})]
				}), /* @__PURE__ */ Q("p", {
					className: "mt-0.5 line-clamp-2 text-sm text-wx-fg-muted",
					children: a("recentMessageSample")
				})]
			})]
		})]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/rich-text.tsx
function Ya({ block: e }) {
	return /* @__PURE__ */ Q("div", {
		className: "px-2 text-sm leading-relaxed text-wx-fg-muted [&_a]:text-wx-primary [&_a]:underline",
		children: ya(e.markdown)
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/team-status.tsx
function Xa({ block: e, config: t }) {
	let n = H("home");
	return /* @__PURE__ */ $("div", {
		className: "flex items-center gap-3 rounded-wx-lg bg-wx-bg-elevated px-3.5 py-3",
		children: [
			/* @__PURE__ */ Q("span", {
				"aria-hidden": "true",
				className: "h-2 w-2 shrink-0 rounded-full bg-wx-success"
			}),
			/* @__PURE__ */ $("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ Q("p", {
					className: "text-sm font-semibold text-wx-fg",
					children: n("teamStatusOnline")
				}), e.showResponseTime && /* @__PURE__ */ Q("p", {
					className: "text-xs text-wx-fg-muted",
					children: n("teamStatusReplyTime")
				})]
			}),
			e.showOperatorAvatars && t.operatorAvatars.length > 0 && /* @__PURE__ */ Q(ca, {
				avatars: t.operatorAvatars,
				size: "sm",
				ringClass: "ring-wx-bg-elevated"
			})
		]
	});
}
//#endregion
//#region components/widget/home-blocks/index.tsx
function Za({ blocks: e, config: t, onOpenTab: n, onOpenNewsArticle: r, onOpenHelpArticle: i, isDummy: a, chatId: o }) {
	return /* @__PURE__ */ Q("div", {
		className: "flex flex-col gap-3 px-4 pb-2",
		children: e.map((e, s) => /* @__PURE__ */ Q($a, {
			delay: Math.min(s, 6) * .05,
			children: /* @__PURE__ */ Q(Qa, {
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
function Qa({ block: e, config: t, onOpenTab: n, onOpenNewsArticle: r, onOpenHelpArticle: i, isDummy: a, chatId: o }) {
	switch (e.kind) {
		case "quick-actions": return /* @__PURE__ */ Q(Wa, {
			block: e,
			onOpenTab: n
		});
		case "help-search": return /* @__PURE__ */ Q(wa, {
			block: e,
			onOpenTab: n,
			onOpenArticle: i,
			isDummy: a
		});
		case "pinned-articles": return /* @__PURE__ */ Q(Da, {
			block: e,
			onOpenTab: n,
			onOpenArticle: i,
			isDummy: a
		});
		case "news-preview": return /* @__PURE__ */ Q(Ea, {
			block: e,
			onOpenTab: n,
			isDummy: a
		});
		case "team-status": return /* @__PURE__ */ Q(Xa, {
			block: e,
			config: t
		});
		case "rich-text": return /* @__PURE__ */ Q(Ya, { block: e });
		case "divider": return /* @__PURE__ */ Q("hr", { className: "my-1 border-wx-border" });
		case "ask-question": return /* @__PURE__ */ Q(ma, {
			block: e,
			config: t,
			onOpenTab: n
		});
		case "recent-message": return /* @__PURE__ */ Q(Ja, {
			block: e,
			onOpenTab: n,
			isDummy: a,
			chatId: o,
			config: t
		});
		case "featured-article": return /* @__PURE__ */ Q(xa, {
			block: e,
			onOpenTab: n,
			onOpenNewsArticle: r,
			isDummy: a
		});
		default: return null;
	}
}
function $a({ delay: e, children: t, className: r }) {
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
			duration: .24,
			delay: e,
			ease: "easeOut"
		},
		className: U(r),
		children: t
	});
}
function eo(e, t) {
	return e.filter((e) => !((e.kind === "help-search" || e.kind === "pinned-articles") && !t.help || e.kind === "news-preview" && !t.news));
}
//#endregion
//#region components/widget/tabs/home-tab.tsx
function to({ config: e, organizationLogoUrl: t, onClose: n, onOpenTab: r, isDummy: a, chatId: o, onOpenNewsArticle: s, onOpenHelpArticle: c }) {
	let l = H("header"), u = Je(), d = eo(e.homeLayout ?? f, e.features), p = a || !!e.greeting?.headline?.trim() || !!e.greeting?.subheadline?.trim();
	return /* @__PURE__ */ Q(ce, {
		className: "flex-1",
		children: /* @__PURE__ */ $("div", {
			className: "flex flex-col pb-6",
			children: [
				/* @__PURE__ */ $("div", {
					className: "flex items-center justify-between px-5 pt-5 pb-3",
					children: [t ? /* @__PURE__ */ Q("img", {
						src: t,
						alt: e.messenger?.title ?? "",
						className: "h-9 w-auto max-w-[140px] object-contain"
					}) : a ? /* @__PURE__ */ Q(qa, { size: 28 }) : /* @__PURE__ */ Q("span", {
						className: "h-9",
						"aria-hidden": "true"
					}), /* @__PURE__ */ $("div", {
						className: "flex items-center gap-1",
						children: [e.operatorAvatars.length > 0 && /* @__PURE__ */ Q(ca, {
							avatars: e.operatorAvatars,
							ringClass: "ring-wx-bg-elevated/60",
							className: "mr-2"
						}), /* @__PURE__ */ Q(De, {
							type: "button",
							variant: "ghost",
							size: "icon",
							"aria-label": l("close"),
							onClick: n,
							...u.parentHandlers,
							children: /* @__PURE__ */ Q(i, {
								ref: u.iconRef,
								size: 18
							})
						})]
					})]
				}),
				/* @__PURE__ */ Q(no, {
					config: e,
					isDummy: a
				}),
				/* @__PURE__ */ Q("div", {
					className: p ? void 0 : "pt-4",
					children: /* @__PURE__ */ Q(Za, {
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
function no({ config: e, isDummy: t }) {
	let n = H("home"), r = je(), i = e.greeting?.headline?.trim() ?? "", a = e.greeting?.subheadline?.trim() ?? "";
	if (!t && !(i || a)) return null;
	let o = da(r, e.defaultLocale ?? "en"), s = !t && o, c = s ? i : n("greetingHeadline"), l = s ? a : n("greetingSubheadline");
	return !c && !l ? null : /* @__PURE__ */ $("section", {
		className: "px-5 pt-2 pb-4",
		children: [c && /* @__PURE__ */ Q("p", {
			className: "text-3xl leading-tight font-bold text-wx-fg-muted",
			children: c
		}), l && /* @__PURE__ */ Q("p", {
			className: "mt-1 text-3xl leading-tight font-bold text-wx-fg",
			children: l
		})]
	});
}
//#endregion
//#region lib/file-to-base64.ts
async function ro(e) {
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
var io = new Set([
	"image/png",
	"image/jpeg",
	"image/gif",
	"image/webp",
	"audio/mpeg",
	"audio/ogg",
	"audio/webm",
	"video/mp4",
	"application/pdf"
]), ao = "https://accounts.google.com/gsi/client";
function oo({ clientId: e, onCredential: t }) {
	let n = H("messages"), r = X(null), i = X(t);
	return Y(() => {
		i.current = t;
	}, [t]), Y(() => {
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
		let a = document.querySelector(`script[src="${ao}"]`);
		if (a) return a.addEventListener("load", n, { once: !0 }), () => {
			t = !0, a.removeEventListener("load", n);
		};
		let o = document.createElement("script");
		return o.src = ao, o.async = !0, o.defer = !0, o.onload = n, document.head.appendChild(o), () => {
			t = !0, o.onload = null;
		};
	}, [e]), /* @__PURE__ */ $(Ft, { children: [/* @__PURE__ */ $("button", {
		type: "button",
		onClick: () => {
			let e = r.current;
			e && e.querySelector("div[role=\"button\"]")?.click();
		},
		className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2",
		children: [/* @__PURE__ */ Q(so, {}), /* @__PURE__ */ Q("span", { children: n("googleSignIn") })]
	}), /* @__PURE__ */ Q("div", {
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
function so() {
	return /* @__PURE__ */ $("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 18 18",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ Q("path", {
				d: "M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.614z",
				fill: "#4285F4"
			}),
			/* @__PURE__ */ Q("path", {
				d: "M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z",
				fill: "#34A853"
			}),
			/* @__PURE__ */ Q("path", {
				d: "M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z",
				fill: "#FBBC05"
			}),
			/* @__PURE__ */ Q("path", {
				d: "M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z",
				fill: "#EA4335"
			})
		]
	});
}
//#endregion
//#region node_modules/@simplewebauthn/browser/dist/bundle/index.js
function co(e) {
	return new TextEncoder().encode(e);
}
function lo(e) {
	let t = new Uint8Array(e), n = "";
	for (let e of t) n += String.fromCharCode(e);
	return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function uo(e) {
	let t = e.replace(/-/g, "+").replace(/_/g, "/"), n = (4 - t.length % 4) % 4, r = t.padEnd(t.length + n, "="), i = atob(r), a = new ArrayBuffer(i.length), o = new Uint8Array(a);
	for (let e = 0; e < i.length; e++) o[e] = i.charCodeAt(e);
	return a;
}
function fo() {
	return window?.PublicKeyCredential !== void 0 && typeof window.PublicKeyCredential == "function";
}
function po(e) {
	let { id: t } = e;
	return {
		...e,
		id: uo(t),
		transports: e.transports
	};
}
function mo(e) {
	return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
var ho = class extends Error {
	constructor({ message: e, code: t, cause: n, name: r }) {
		super(e, { cause: n }), this.name = r ?? n.name, this.code = t;
	}
};
function go({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new ho({
			message: "Registration ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "ConstraintError") {
		if (n.authenticatorSelection?.requireResidentKey === !0) return new ho({
			message: "Discoverable credentials were required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
			cause: e
		});
		if (n.authenticatorSelection?.userVerification === "required") return new ho({
			message: "User verification was required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
			cause: e
		});
	} else if (e.name === "InvalidStateError") return new ho({
		message: "The authenticator was previously registered",
		code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
		cause: e
	});
	else if (e.name === "NotAllowedError") return new ho({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "NotSupportedError") return n.pubKeyCredParams.filter((e) => e.type === "public-key").length === 0 ? new ho({
		message: "No entry in pubKeyCredParams was of type \"public-key\"",
		code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
		cause: e
	}) : new ho({
		message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
		code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!mo(t)) return new ho({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rp.id !== t) return new ho({
			message: `The RP ID "${n.rp.id}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "TypeError") {
		if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64) return new ho({
			message: "User ID was not between 1 and 64 characters",
			code: "ERROR_INVALID_USER_ID_LENGTH",
			cause: e
		});
	} else if (e.name === "UnknownError") return new ho({
		message: "The authenticator was unable to process the specified options, or could not create a new credential",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return e;
}
var _o = new class {
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
}(), vo = ["cross-platform", "platform"];
function yo(e) {
	if (e && !(vo.indexOf(e) < 0)) return e;
}
async function bo(e) {
	if (!fo()) throw Error("WebAuthn is not supported in this browser");
	let t = { publicKey: {
		...e,
		challenge: uo(e.challenge),
		user: {
			...e.user,
			id: co(e.user.id)
		},
		excludeCredentials: e.excludeCredentials?.map(po)
	} };
	t.signal = _o.createNewAbortSignal();
	let n;
	try {
		n = await navigator.credentials.create(t);
	} catch (e) {
		throw go({
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
		xo("getPublicKeyAlgorithm()", e);
	}
	let l;
	if (typeof a.getPublicKey == "function") try {
		let e = a.getPublicKey();
		e !== null && (l = lo(e));
	} catch (e) {
		xo("getPublicKey()", e);
	}
	let u;
	if (typeof a.getAuthenticatorData == "function") try {
		u = lo(a.getAuthenticatorData());
	} catch (e) {
		xo("getAuthenticatorData()", e);
	}
	return {
		id: r,
		rawId: lo(i),
		response: {
			attestationObject: lo(a.attestationObject),
			clientDataJSON: lo(a.clientDataJSON),
			transports: s,
			publicKeyAlgorithm: c,
			publicKey: l,
			authenticatorData: u
		},
		type: o,
		clientExtensionResults: n.getClientExtensionResults(),
		authenticatorAttachment: yo(n.authenticatorAttachment)
	};
}
function xo(e, t) {
	console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${e}. You should report this error to them.\n`, t);
}
function So(e) {
	return new TextDecoder("utf-8").decode(e);
}
function Co() {
	let e = window.PublicKeyCredential;
	return e.isConditionalMediationAvailable === void 0 ? new Promise((e) => e(!1)) : e.isConditionalMediationAvailable();
}
function wo({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new ho({
			message: "Authentication ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "NotAllowedError") return new ho({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!mo(t)) return new ho({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rpId !== t) return new ho({
			message: `The RP ID "${n.rpId}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "UnknownError") return new ho({
		message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return e;
}
async function To(e, t = !1) {
	if (!fo()) throw Error("WebAuthn is not supported in this browser");
	let n;
	e.allowCredentials?.length !== 0 && (n = e.allowCredentials?.map(po));
	let r = {
		...e,
		challenge: uo(e.challenge),
		allowCredentials: n
	}, i = {};
	if (t) {
		if (!await Co()) throw Error("Browser does not support WebAuthn autofill");
		if (document.querySelectorAll("input[autocomplete$='webauthn']").length < 1) throw Error("No <input> with \"webauthn\" as the only or last value in its `autocomplete` attribute was detected");
		i.mediation = "conditional", r.allowCredentials = [];
	}
	i.publicKey = r, i.signal = _o.createNewAbortSignal();
	let a;
	try {
		a = await navigator.credentials.get(i);
	} catch (e) {
		throw wo({
			error: e,
			options: i
		});
	}
	if (!a) throw Error("Authentication was not completed");
	let { id: o, rawId: s, response: c, type: l } = a, u;
	return c.userHandle && (u = So(c.userHandle)), {
		id: o,
		rawId: lo(s),
		response: {
			authenticatorData: lo(c.authenticatorData),
			clientDataJSON: lo(c.clientDataJSON),
			signature: lo(c.signature),
			userHandle: u
		},
		type: l,
		clientExtensionResults: a.getClientExtensionResults(),
		authenticatorAttachment: yo(a.authenticatorAttachment)
	};
}
//#endregion
//#region lib/use-passkey-auth.ts
var Eo = V`
  mutation VisitorPasskeyRegistrationOptions($input: VisitorPasskeyOptionsInput!) {
    visitorPasskeyRegistrationOptions(input: $input) {
      sessionId
      optionsJson
    }
  }
`, Do = V`
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
`, Oo = V`
  mutation VisitorPasskeyAuthenticationOptions($input: VisitorPasskeyOptionsInput!) {
    visitorPasskeyAuthenticationOptions(input: $input) {
      sessionId
      optionsJson
    }
  }
`, ko = V`
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
function Ao(e) {
	let [t, n] = Z("idle"), [r, i] = Z(null), [a] = d(Eo), [o] = d(Do), [s] = d(Oo), [c] = d(ko), l = J(async (t) => {
		n("busy"), i(null);
		try {
			let r = {
				visitorId: e.visitorId,
				origin: e.origin
			}, i = t === "register" ? (await a({ variables: { input: r } })).data?.visitorPasskeyRegistrationOptions : (await s({ variables: { input: r } })).data?.visitorPasskeyAuthenticationOptions;
			if (!i) throw Error("passkey_options_failed");
			let l = JSON.parse(i.optionsJson), u = t === "register" ? await bo(l) : await To(l), d = {
				visitorId: e.visitorId,
				sessionId: i.sessionId,
				responseJson: JSON.stringify(u)
			}, f = t === "register" ? (await o({ variables: { input: d } })).data?.verifyVisitorPasskeyRegistration : (await c({ variables: { input: d } })).data?.verifyVisitorPasskeyAuthentication;
			if (!f) throw Error("passkey_verify_failed");
			return ge(f.token), n("idle"), f;
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
		authenticate: J(() => l("authenticate"), [l]),
		register: J(() => l("register"), [l]),
		status: t,
		error: r,
		supported: typeof window < "u" && fo()
	};
}
//#endregion
//#region components/widget/auth/passkey-sign-in-button.tsx
function jo({ onSession: e }) {
	let t = H("messages"), { authenticate: n, register: r, status: i, supported: a } = Ao({
		visitorId: Pt(() => Qn(), []),
		origin: typeof window < "u" ? window.location.origin : ""
	}), [o, s] = Z(null);
	if (!a) return null;
	let c = async (t, n) => {
		s(null);
		let r = await n();
		r ? e?.(r) : s(t);
	}, l = i === "busy";
	return /* @__PURE__ */ $("div", {
		className: "flex w-full flex-col items-center gap-1.5",
		children: [
			/* @__PURE__ */ $("button", {
				type: "button",
				disabled: l,
				onClick: () => c("signIn", n),
				className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2 disabled:opacity-60",
				children: [/* @__PURE__ */ Q(Mo, {}), t("passkeySignIn")]
			}),
			/* @__PURE__ */ Q("button", {
				type: "button",
				disabled: l,
				onClick: () => c("register", r),
				className: o === "signIn" ? "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-primary bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-primary transition-colors hover:bg-wx-bg-elevated-2 disabled:opacity-60" : "text-xs text-wx-fg-muted underline-offset-2 hover:underline disabled:opacity-60",
				children: t("passkeyRegister")
			}),
			o === "signIn" && /* @__PURE__ */ Q("p", {
				className: "text-center text-xs text-wx-fg-subtle",
				children: t("passkeyNoCredential")
			}),
			o === "register" && /* @__PURE__ */ Q("p", {
				className: "text-center text-xs text-wx-danger",
				children: t("passkeyError")
			})
		]
	});
}
function Mo() {
	return /* @__PURE__ */ $("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ Q("circle", {
			cx: "8",
			cy: "9",
			r: "4"
		}), /* @__PURE__ */ Q("path", { d: "M10.5 12.5 21 23l-1.5-3 2-1-2-1.5L21 14l-4-1" })]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/composer/attachment-preview.tsx
var No = (e) => e.startsWith("image/"), Po = (e) => e.startsWith("video/"), Fo = (e) => e.startsWith("audio/"), Io = (e) => e === "application/pdf";
function Lo({ attachments: e, onRemove: t, onOpenLightbox: n }) {
	let r = H("messages"), i = X(null), [a, o] = Z(null);
	Y(() => {
		a && (e.some((e) => e.tempId === a) || (i.current?.pause(), i.current = null, o(null)));
	}, [e, a]), Y(() => () => {
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
	}, c = e.filter((e) => !!e.url && (No(e.mimetype) || Po(e.mimetype) || Io(e.mimetype))), l = c.map((e) => ({
		url: e.url,
		mimetype: e.mimetype,
		alt: e.filename
	})), u = (e) => {
		let t = c.findIndex((t) => t.tempId === e.tempId);
		t < 0 || n(l, t);
	};
	return /* @__PURE__ */ Q("div", {
		className: "flex flex-wrap gap-2",
		children: e.map((e) => {
			let n = e.mediaId === null, i = r("removeAttachment");
			if (No(e.mimetype) && e.url) return /* @__PURE__ */ Q(Ro, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ Q("button", {
					type: "button",
					onClick: () => u(e),
					className: "block h-16 w-16 overflow-hidden rounded-wx-sm bg-wx-bg-elevated",
					"aria-label": r("openPreview"),
					children: /* @__PURE__ */ Q("img", {
						src: e.url,
						alt: e.filename,
						className: "h-full w-full object-cover"
					})
				})
			}, e.tempId);
			if (Po(e.mimetype) && e.url) return /* @__PURE__ */ Q(Ro, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ $("button", {
					type: "button",
					onClick: () => u(e),
					className: "relative block h-16 w-16 overflow-hidden rounded-wx-sm bg-wx-bg-elevated",
					"aria-label": r("openPreview"),
					children: [/* @__PURE__ */ Q("video", {
						src: e.url,
						className: "h-full w-full object-cover",
						muted: !0,
						playsInline: !0,
						preload: "metadata"
					}), /* @__PURE__ */ Q("span", {
						className: "absolute inset-0 flex items-center justify-center bg-black/30 text-white",
						children: /* @__PURE__ */ Q(Ke, {
							size: 16,
							fill: "currentColor"
						})
					})]
				})
			}, e.tempId);
			if (Fo(e.mimetype) && e.url) {
				let o = a === e.tempId, c = o ? We : Ke;
				return /* @__PURE__ */ Q(Ro, {
					uploading: n,
					onRemove: () => t(e.tempId),
					removeLabel: i,
					title: e.filename,
					children: /* @__PURE__ */ Q("button", {
						type: "button",
						onClick: () => s(e),
						"aria-label": r(o ? "pause" : "play"),
						className: U("flex h-16 w-16 items-center justify-center rounded-wx-sm transition-colors", o ? "bg-wx-primary text-wx-primary-fg" : "bg-wx-bg-elevated text-wx-fg-muted hover:text-wx-fg"),
						children: /* @__PURE__ */ Q(c, {
							size: 22,
							fill: "currentColor",
							strokeWidth: 0
						})
					})
				}, e.tempId);
			}
			return Io(e.mimetype) && e.url ? /* @__PURE__ */ Q(Ro, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ Q("button", {
					type: "button",
					onClick: () => u(e),
					"aria-label": r("openPreview"),
					className: U("flex h-16 w-16 items-center justify-center rounded-wx-sm", "bg-wx-bg-elevated text-wx-fg-muted transition-colors hover:text-wx-fg"),
					children: /* @__PURE__ */ Q(jr, {
						size: 22,
						"aria-hidden": "true"
					})
				})
			}, e.tempId) : /* @__PURE__ */ Q(Ro, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ Q("div", {
					className: "flex h-16 w-16 items-center justify-center rounded-wx-sm bg-wx-bg-elevated text-wx-fg-muted",
					children: /* @__PURE__ */ Q(jr, {
						size: 22,
						"aria-hidden": "true"
					})
				})
			}, e.tempId);
		})
	});
}
function Ro({ children: e, uploading: t, onRemove: n, removeLabel: r, title: i }) {
	return /* @__PURE__ */ $("div", {
		className: "relative",
		title: i,
		children: [
			e,
			t && /* @__PURE__ */ Q("span", {
				"aria-hidden": "true",
				className: U("pointer-events-none absolute inset-0 flex items-center justify-center", "rounded-wx-sm bg-black/30"),
				children: /* @__PURE__ */ Q("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" })
			}),
			/* @__PURE__ */ Q("button", {
				type: "button",
				onClick: n,
				"aria-label": r,
				className: U("absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center", "rounded-full bg-wx-bg text-wx-fg-muted shadow ring-1 ring-wx-border", "transition-colors hover:text-wx-fg"),
				children: /* @__PURE__ */ Q(de, { size: 11 })
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/composer/emoji-picker.tsx
var zo = jt(() => import("./widget-react-wTlmXnex2.js")), Bo = "native", Vo = {
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
function Ho({ open: e, onClose: t, onSelect: r, anchorRef: i }) {
	let a = H("messages"), o = X(null);
	return Y(() => {
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
	]), /* @__PURE__ */ Q(F, { children: e && /* @__PURE__ */ Q(n.div, {
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
		children: /* @__PURE__ */ Q(kt, {
			fallback: /* @__PURE__ */ Q("div", {
				className: "bg-wx-bg flex items-center justify-center",
				style: {
					width: 320,
					height: 360
				},
				children: /* @__PURE__ */ Q("div", { className: "border-wx-border border-t-wx-primary h-5 w-5 animate-spin rounded-full border-2" })
			}),
			children: /* @__PURE__ */ Q(zo, {
				onEmojiClick: (e) => r(e.emoji),
				width: 320,
				height: 360,
				emojiStyle: Bo,
				previewConfig: { showPreview: !1 },
				skinTonesDisabled: !0,
				lazyLoadEmojis: !0,
				searchPlaceHolder: a("emojiSearch"),
				style: Vo
			})
		})
	}) });
}
//#endregion
//#region components/widget/tabs/messages-tab/composer/morph-send-button.tsx
function Uo({ kind: e, disabled: r, onSend: i, onMic: a, ariaLabels: o }) {
	let s = e === "send" ? i : a, c = o[e], l = Je();
	return /* @__PURE__ */ Q(n.button, {
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
		children: /* @__PURE__ */ $(F, {
			mode: "wait",
			initial: !1,
			children: [
				e === "send" && r && /* @__PURE__ */ Q(n.span, {
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
					children: /* @__PURE__ */ Q(Ge, {
						size: 14,
						className: "animate-spin"
					})
				}, "sending"),
				e === "send" && !r && /* @__PURE__ */ Q(n.span, {
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
					children: /* @__PURE__ */ Q(qe, { size: 14 })
				}, "send"),
				e === "mic" && /* @__PURE__ */ Q(n.span, {
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
					children: /* @__PURE__ */ Q(t, {
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
function Wo(e, t) {
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
function Go({ label: e }) {
	return /* @__PURE__ */ Q("div", {
		className: "sticky top-2 z-10 flex justify-center py-1",
		children: /* @__PURE__ */ Q("span", {
			className: "rounded-full bg-wx-bg-elevated px-3 py-1 text-[11px] font-medium text-wx-fg-muted shadow-sm",
			children: e
		})
	});
}
//#endregion
//#region lib/internal-link.ts
function Ko(e, t) {
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
function qo({ size: e, senderKind: t, senderName: n, senderAvatarUrl: r, aiAssistantAvatarUrl: i, organizationLogoUrl: a, organizationName: o, className: s }) {
	let c = H("messages"), l = {
		width: e,
		height: e
	};
	if (t === "ai" || t === "bot") return i ? /* @__PURE__ */ Q("span", {
		style: l,
		className: U("relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg-elevated shadow-sm", s),
		role: "img",
		"aria-label": c("aiAssistant"),
		children: /* @__PURE__ */ Q("img", {
			src: i,
			alt: "",
			className: "h-full w-full object-cover",
			loading: "eager",
			decoding: "async"
		})
	}) : /* @__PURE__ */ Q("span", {
		style: l,
		className: U("shrink-0", s),
		"aria-hidden": "true"
	});
	if (r) return /* @__PURE__ */ Q("span", {
		style: l,
		className: U("shrink-0 overflow-hidden rounded-full", s),
		children: /* @__PURE__ */ Q("img", {
			src: r,
			alt: "",
			className: "h-full w-full object-cover"
		})
	});
	let u = n ? Jo(n) : "";
	if (!u && a) return /* @__PURE__ */ Q("span", {
		style: l,
		className: U("shrink-0 overflow-hidden rounded-full", s),
		children: /* @__PURE__ */ Q("img", {
			src: a,
			alt: o ?? "",
			className: "h-full w-full object-cover"
		})
	});
	let d = u || (o ?? "").trim().charAt(0).toUpperCase();
	return /* @__PURE__ */ Q("span", {
		style: l,
		className: U("flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg-elevated text-[0.7em] font-semibold text-wx-fg-muted", s),
		children: d || ""
	});
}
function Jo(e) {
	let t = e.trim().split(/\s+/).map((e) => e.replace(/[^\p{L}\p{N}]/gu, "")).filter((e) => e.length > 0);
	return t.length === 0 ? "" : t.length === 1 ? t[0].charAt(0).toUpperCase() : t[0].charAt(0).toUpperCase() + t[t.length - 1].charAt(0).toUpperCase();
}
//#endregion
//#region components/widget/tabs/messages-tab/message/message-bubble.tsx
var Yo = jt(() => import("./widget-react-DqRO9d652.js").then((e) => ({ default: e.AudioBubblePlayer })));
function Xo({ message: e, organizationLogoUrl: t, organizationName: r, aiAssistantAvatarUrl: i, buttonsActive: a, onButtonClick: o, onOpenLightbox: s, onInternalLink: c }) {
	let l = H("messages"), u = e.direction === "OUTBOUND", d = e.sender.kind === "ai" || e.sender.kind === "bot" ? Xt : e.sender.name?.trim() || "", f = d ? null : e.sender.kind === "operator" ? l("operator") : null;
	return /* @__PURE__ */ $(n.div, {
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
			/* @__PURE__ */ $("div", {
				className: U("flex max-w-[85%] items-start gap-2", u ? "flex-row" : "flex-row-reverse"),
				children: [u && /* @__PURE__ */ Q(qo, {
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
					return /* @__PURE__ */ $("div", {
						className: U("max-w-full overflow-hidden rounded-wx-lg", (a || o) && (u ? "bg-wx-bg-elevated text-wx-fg" : "bg-wx-primary text-wx-primary-fg")),
						children: [r.length > 0 && /* @__PURE__ */ Q(Qo, {
							items: r,
							onOpenLightbox: s
						}), (a || o) && /* @__PURE__ */ $("div", {
							className: U("flex flex-col gap-2 px-4 py-2.5 text-sm", r.length > 0 && "pt-2"),
							children: [a && /* @__PURE__ */ Q(Zo, {
								text: e.text,
								isOutbound: u,
								onInternalLink: c
							}), i.map((e, t) => /* @__PURE__ */ Q($o, {
								media: e,
								onDark: !u
							}, t))]
						})]
					});
				})()]
			}),
			(d || e.ageLabel) && /* @__PURE__ */ $("p", {
				className: U("flex items-center gap-1.5 text-[11px] text-wx-fg-subtle", u ? "ml-9" : "mr-1"),
				children: [
					u && d && /* @__PURE__ */ Q("span", {
						className: "font-medium text-wx-fg-muted",
						children: d
					}),
					u && f && /* @__PURE__ */ $(Ft, { children: [/* @__PURE__ */ Q("span", {
						"aria-hidden": "true",
						children: "·"
					}), /* @__PURE__ */ Q("span", { children: f })] }),
					e.ageLabel && /* @__PURE__ */ $(Ft, { children: [u && d || u && f ? /* @__PURE__ */ Q("span", {
						"aria-hidden": "true",
						children: "·"
					}) : null, /* @__PURE__ */ Q("span", { children: e.ageLabel })] })
				]
			}),
			a && e.buttons && e.buttons.length > 0 && /* @__PURE__ */ Q(n.div, {
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
				children: e.buttons.map((e) => /* @__PURE__ */ Q(n.button, {
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
function Zo({ text: e, isOutbound: t, onInternalLink: n }) {
	let r = J((e) => {
		if (!n || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
		let t = e.target?.closest?.("a");
		if (!t) return;
		let r = t.getAttribute("href");
		if (!r) return;
		let i = Ko(r);
		i && (e.preventDefault(), n(i));
	}, [n]);
	return /^\s*<[a-z][a-z0-9]*(\s|>|\/)/i.test(e) ? /* @__PURE__ */ Q("div", {
		onClick: r,
		dangerouslySetInnerHTML: { __html: e },
		className: U("leading-relaxed", "[&>p]:my-0 [&>p+p]:mt-2", "[&_a]:underline [&_a]:underline-offset-2 [&_a]:opacity-90 [&_a:hover]:opacity-100", "[&_strong]:font-semibold [&_em]:italic", "[&_ul]:my-1.5 [&_ul]:list-disc [&_ul]:pl-5", "[&_ol]:my-1.5 [&_ol]:list-decimal [&_ol]:pl-5", "[&_li]:my-0.5", "[&_code]:rounded-sm [&_code]:bg-black/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.85em]", !t && "[&_code]:bg-white/15")
	}) : /* @__PURE__ */ Q("p", {
		className: "whitespace-pre-wrap leading-relaxed",
		children: e
	});
}
function Qo({ items: e, onOpenLightbox: t }) {
	let n = H("messages");
	if (e.length === 0) return null;
	let r = e.length > 1;
	return /* @__PURE__ */ Q("div", {
		className: U("grid w-full", r ? "max-h-[20rem] grid-cols-2 gap-0.5 auto-rows-fr" : "grid-cols-1"),
		children: e.map((i, a) => {
			let o = () => t?.(e, a);
			return i.mimetype === "application/pdf" ? /* @__PURE__ */ $("button", {
				type: "button",
				onClick: o,
				"aria-label": i.alt || n("openPreview"),
				className: U("group flex w-full cursor-zoom-in items-center gap-3 px-4 py-3 text-left", "bg-wx-bg-elevated text-wx-fg transition-colors hover:bg-wx-bg-elevated-2"),
				children: [/* @__PURE__ */ Q("span", {
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-wx-sm bg-wx-bg text-[10px] font-bold tracking-wider text-wx-fg-muted shadow-sm",
					children: "PDF"
				}), /* @__PURE__ */ $("span", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ Q("span", {
						className: "truncate text-sm font-medium",
						children: i.alt
					}), /* @__PURE__ */ Q("span", {
						className: "truncate text-xs text-wx-fg-muted",
						children: i.mimetype
					})]
				})]
			}, a) : i.mimetype.startsWith("video/") ? /* @__PURE__ */ $("div", {
				className: "relative w-full",
				children: [/* @__PURE__ */ Q("video", {
					src: i.url,
					controls: !0,
					preload: "metadata",
					className: U("block w-full", r ? "h-full object-cover" : "max-h-80")
				}), r && /* @__PURE__ */ Q("button", {
					type: "button",
					"aria-label": i.alt || n("openPreview"),
					onClick: o,
					className: "absolute inset-0 cursor-zoom-in"
				})]
			}, a) : /* @__PURE__ */ Q("button", {
				type: "button",
				onClick: o,
				"aria-label": i.alt || n("openImage"),
				className: U("group relative block w-full overflow-hidden", "cursor-zoom-in"),
				children: /* @__PURE__ */ Q("img", {
					src: i.url,
					alt: i.alt,
					loading: "lazy",
					className: U("block w-full transition-transform duration-200 group-hover:scale-[1.02]", r ? "h-full object-cover" : "max-h-80 object-cover")
				})
			}, a);
		})
	});
}
function $o({ media: e, onDark: t }) {
	return e.mimetype.startsWith("audio/") ? /* @__PURE__ */ Q(kt, {
		fallback: /* @__PURE__ */ Q("div", { className: "h-12 w-56 max-w-full animate-pulse rounded-wx bg-wx-bg-elevated" }),
		children: /* @__PURE__ */ Q(Yo, {
			src: e.url,
			onDark: t
		})
	}) : /* @__PURE__ */ Q(es, { media: e });
}
function es({ media: e }) {
	let t = e.alt || e.url.split("/").pop() || e.mimetype || "File", n = ts(e.mimetype);
	return /* @__PURE__ */ $("a", {
		href: e.url,
		target: "_blank",
		rel: "noopener",
		className: "flex max-w-xs items-center gap-3 rounded-wx-sm bg-wx-bg-elevated/60 px-3 py-2.5 text-xs text-wx-fg transition-colors hover:bg-wx-bg-elevated",
		children: [/* @__PURE__ */ Q("span", {
			className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-wx-sm bg-wx-bg-elevated-2 text-[10px] font-bold tracking-wider text-wx-fg-muted uppercase",
			children: n
		}), /* @__PURE__ */ $("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ Q("span", {
				className: "block truncate font-medium text-wx-fg",
				children: t
			}), /* @__PURE__ */ Q("span", {
				className: "block truncate text-wx-fg-subtle",
				children: e.mimetype || "file"
			})]
		})]
	});
}
function ts(e) {
	return e ? e.includes("pdf") ? "PDF" : e.includes("zip") || e.includes("compressed") ? "ZIP" : e.includes("spreadsheet") || e.includes("excel") ? "XLS" : e.includes("word") || e.includes("document") ? "DOC" : e.startsWith("text/") ? "TXT" : (e.split("/")[1] ?? "").slice(0, 4).toUpperCase() || "FILE" : "FILE";
}
//#endregion
//#region components/widget/tabs/messages-tab/message/typing-bubble.tsx
function ns({ actorName: e, actorKind: t, actorAvatarUrl: r, actorPhase: i, aiAssistantAvatarUrl: a, organizationLogoUrl: o, organizationName: s }) {
	let c = H("messages");
	return /* @__PURE__ */ $(n.div, {
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
		children: [/* @__PURE__ */ $("div", {
			className: "flex max-w-[85%] items-start gap-2",
			children: [/* @__PURE__ */ Q(qo, {
				size: 28,
				senderKind: t,
				senderName: e,
				senderAvatarUrl: r,
				aiAssistantAvatarUrl: a,
				organizationLogoUrl: o,
				organizationName: s,
				className: "mt-0.5"
			}), /* @__PURE__ */ Q("div", {
				className: "rounded-wx-lg bg-wx-bg-elevated px-4 py-3 text-sm text-wx-fg",
				children: /* @__PURE__ */ $("span", {
					className: "inline-flex items-end gap-1",
					children: [
						/* @__PURE__ */ Q("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-wx-fg-muted [animation-delay:-0.3s]" }),
						/* @__PURE__ */ Q("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-wx-fg-muted [animation-delay:-0.15s]" }),
						/* @__PURE__ */ Q("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-wx-fg-muted" })
					]
				})
			})]
		}), /* @__PURE__ */ $("p", {
			className: "ml-9 text-[11px] text-wx-fg-subtle",
			children: [
				/* @__PURE__ */ Q("span", {
					className: "font-medium text-wx-fg-muted",
					children: e && e !== "…" ? e : c("typingSomeone")
				}),
				/* @__PURE__ */ Q("span", {
					"aria-hidden": "true",
					children: " · "
				}),
				/* @__PURE__ */ Q("span", { children: c(i === "thinking" ? "aiThinking" : i === "searching" ? "aiSearching" : "typing") })
			]
		})]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message/unread-divider.tsx
var rs = At(({ label: e }, t) => /* @__PURE__ */ $("div", {
	ref: t,
	className: "flex items-center gap-2 py-1",
	children: [
		/* @__PURE__ */ Q("span", {
			"aria-hidden": "true",
			className: "h-px flex-1 bg-wx-danger/40"
		}),
		/* @__PURE__ */ Q("span", {
			className: "text-[11px] font-semibold text-wx-danger",
			children: e
		}),
		/* @__PURE__ */ Q("span", {
			"aria-hidden": "true",
			className: "h-px flex-1 bg-wx-danger/40"
		})
	]
}));
rs.displayName = "UnreadDivider";
//#endregion
//#region components/widget/tabs/messages-tab/message/typewriter.tsx
var is = 42;
function as(e) {
	let t = is * (.6 + Math.random() * .8);
	return e && ".!?".includes(e) ? t += 380 : e && ",;:".includes(e) && (t += 180), t;
}
function os({ text: e, startDelayMs: t = 0, onDone: n }) {
	let [r, i] = Z(t > 0 ? -1 : 0), a = X(n);
	if (a.current = n, Y(() => i(t > 0 ? -1 : 0), [e]), Y(() => {
		if (r < 0) {
			let e = setTimeout(() => i(0), t);
			return () => clearTimeout(e);
		}
		if (r >= e.length) {
			a.current?.();
			return;
		}
		let n = setTimeout(() => i((e) => e + 1), as(e[r - 1]));
		return () => clearTimeout(n);
	}, [
		r,
		e,
		t
	]), r < 0) return /* @__PURE__ */ $("span", {
		className: "inline-flex items-end gap-1 align-middle",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ Q("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60 [animation-delay:-0.3s]" }),
			/* @__PURE__ */ Q("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60 [animation-delay:-0.15s]" }),
			/* @__PURE__ */ Q("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60" })
		]
	});
	let o = r >= e.length;
	return /* @__PURE__ */ $(Ft, { children: [e.slice(0, r), !o && /* @__PURE__ */ Q("span", {
		"aria-hidden": "true",
		className: "ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.15em] animate-pulse rounded-[1px] bg-current align-baseline"
	})] });
}
//#endregion
//#region components/widget/tabs/messages-tab/message/welcome-message.tsx
function ss({ kind: e, text: t, typewriter: n = !1, typewriterDelayMs: r = 0 }) {
	return e === "SYSTEM" ? /* @__PURE__ */ Q("div", {
		className: "flex justify-center px-2 py-1",
		children: /* @__PURE__ */ Q("span", {
			className: "text-[11px] text-wx-fg-muted",
			children: n ? /* @__PURE__ */ Q(os, {
				text: t,
				startDelayMs: r
			}) : t
		})
	}) : /* @__PURE__ */ $("div", {
		className: "flex w-full items-start gap-2 rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2.5 text-wx-fg-muted",
		children: [/* @__PURE__ */ Q(Ir, {
			size: 15,
			className: "mt-0.5 shrink-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ Q("p", {
			className: "text-xs leading-relaxed italic",
			children: t
		})]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message-mapping.ts
function cs(e, t) {
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
		}).filter((e) => !!e.text) : void 0, c = r.kind ?? "operator", l = c === "ai" || c === "bot" ? Xt : r.name ?? "", u = ls(e.media), d = typeof e.createdAt == "string" ? e.createdAt : void 0;
		return {
			id: String(e.id ?? `m-${n}`),
			direction: e.direction === "INBOUND" ? "INBOUND" : "OUTBOUND",
			text: typeof e.text == "string" ? e.text : "",
			ageLabel: ds(d, t),
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
function ls(e) {
	return e ? (Array.isArray(e) ? e : typeof e == "object" && e ? [typeof e.mediaId == "object" && e.mediaId !== null ? e.mediaId : e] : []).filter((e) => typeof e == "object" && !!e).map((e) => ({
		url: typeof e.url == "string" ? e.url : "",
		mimetype: typeof e.mimeType == "string" ? e.mimeType : typeof e.mimetype == "string" ? e.mimetype : "",
		alt: typeof e.filename == "string" ? e.filename : typeof e.alt == "string" ? e.alt : ""
	})).filter((e) => !!e.url && !!e.mimetype) : [];
}
function us(e, t) {
	let n = atob(e), r = new Uint8Array(n.length);
	for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
	return new Blob([r], { type: t });
}
function ds(e, t) {
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
var fs = (e, t) => e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
function ps(e, t) {
	if (e.createdAt) {
		let t = new Date(e.createdAt);
		if (!Number.isNaN(t.getTime())) return t;
	}
	return t;
}
function ms(e, t, n) {
	if (fs(e, n)) return t.todayLabel;
	let r = new Date(n);
	return r.setDate(n.getDate() - 1), fs(e, r) ? t.yesterdayLabel : e.toLocaleDateString(t.locale, e.getFullYear() === n.getFullYear() ? {
		day: "numeric",
		month: "short"
	} : {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function hs(e, t) {
	let n = t.now ?? /* @__PURE__ */ new Date(), r = [], i = null;
	for (let a of e) {
		let e = ps(a, n), o = `${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;
		o !== i && (i = o, r.push({
			kind: "date",
			key: `date-${o}`,
			label: ms(e, t, n)
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
var gs = q.forwardRef(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ Q("input", {
	ref: r,
	type: t,
	className: U("h-11 w-full rounded-wx bg-wx-bg-elevated px-4 text-sm text-wx-fg", "placeholder:text-wx-fg-muted", "focus:outline-none focus:ring-2 focus:ring-wx-primary", "disabled:cursor-not-allowed disabled:opacity-50", e),
	...n
}));
gs.displayName = "Input";
//#endregion
//#region components/widget/tabs/messages-tab/prechat-form/helpers.ts
function _s(e) {
	return e === "EMAIL" ? "email" : e === "PHONE" ? "tel" : "text";
}
function vs(e) {
	return e === "NAME" ? "name" : e === "EMAIL" ? "email" : e === "PHONE" ? "tel" : "off";
}
function ys(e) {
	return `wexio:prechat-submitted:${e}`;
}
function bs(e) {
	try {
		return localStorage.getItem(ys(e)) === "1";
	} catch {
		return !1;
	}
}
function xs(e) {
	try {
		localStorage.setItem(ys(e), "1");
	} catch {}
}
function Ss(e, t, n) {
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
function Cs(e, t) {
	return e.fields.map((e) => ({
		key: e.key,
		value: (t[e.key] ?? "").trim()
	})).filter((e) => e.value.length > 0);
}
function ws(e, t) {
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
function Ts({ form: e, values: t, errors: n, onChange: r, disabled: i = !1 }) {
	let a = H("prechat"), o = (e) => {
		if (e.label.trim()) return e.label;
		switch (e.kind) {
			case "NAME": return a("labelName");
			case "EMAIL": return a("labelEmail");
			case "PHONE": return a("labelPhone");
			case "CUSTOM_TEXT": return a("labelCustom");
		}
	};
	return /* @__PURE__ */ Q("div", {
		className: "flex flex-col gap-1.5 border-wx-border border-b px-2.5 pt-2 pb-1.5",
		children: e.fields.map((e) => {
			let a = o(e), s = n[e.key];
			return /* @__PURE__ */ $("div", { children: [/* @__PURE__ */ Q(gs, {
				type: _s(e.kind),
				value: t[e.key] ?? "",
				onChange: (t) => r(e.key, t.target.value),
				autoComplete: vs(e.kind),
				disabled: i,
				"aria-invalid": !!s,
				"aria-label": a,
				placeholder: e.required ? `${a} *` : a,
				className: U("h-8 rounded-wx-md px-3 text-[13px]", s && "ring-1 ring-wx-danger placeholder:text-wx-danger/60 focus:ring-wx-danger")
			}), s && /* @__PURE__ */ Q("p", {
				className: "mt-0.5 px-1 text-[10px] text-wx-danger leading-none",
				children: s
			})] }, e.key);
		})
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/index.tsx
var Es = {
	required: "r",
	invalidEmail: "e",
	invalidPhone: "p"
}, Ds = jt(() => import("./widget-react-CdjAa7d12.js").then((e) => ({ default: e.VoiceRecorderBar })));
function Os({ isDummy: e, chatId: t, token: r, prechatForm: i, messenger: a, organizationLogoUrl: o, organizationName: s, isOpen: c = !0, onInbound: l, onOutbound: u, registerRealtimeHandler: d, unreadCount: f = 0, clearUnread: p, liveMessages: m, appendLiveMessage: h, replaceLiveMessage: g, initialVisitorMessage: _, onInitialVisitorMessageSent: v, visitorIdentity: y, visitorPrefill: b, security: x, verified: S = !1, onGoogleCredential: C, onPasskeySession: w, onInternalLink: T, getTurnstileToken: E }) {
	let D = H("messages"), O = H("demo"), k = H("prechat"), A = je(), j = be() ?? "", [M, N] = Z(null);
	Y(() => {
		N(bs(j));
	}, [j]);
	let [ee, P] = Z({}), [te, I] = Z({}), [L, ne] = Z(null), [ie, { loading: ae }] = gn(), oe = J((e, t) => {
		P((n) => ({
			...n,
			[e]: t
		})), I((t) => {
			if (!t[e]) return t;
			let n = { ...t };
			return delete n[e], n;
		});
	}, []), se = Pt(() => i ? ws(i, b) : {}, [i, b]);
	Y(() => {
		Object.keys(se).length !== 0 && P((e) => {
			let t = !1, n = { ...e };
			for (let [e, r] of Object.entries(se)) n[e] || (n[e] = r, t = !0);
			return t ? n : e;
		});
	}, [se]);
	let [le, R] = Z(!1), z = Pt(() => {
		if (!y || !i?.enabled || i.fields.length === 0) return !1;
		let e = (e) => e === "NAME" ? !!y.name?.trim() : e === "EMAIL" ? !!y.email?.trim() : e === "PHONE" ? !!y.phone?.trim() : !1;
		return i.fields.filter((e) => e.required).every((t) => e(t.kind));
	}, [y, i]), ue = Pt(() => !i?.enabled || i.fields.length === 0 || Object.keys(se).length === 0 ? !1 : Object.keys(Ss(i, se, Es)).length === 0, [i, se]), B = X(!1);
	Y(() => {
		!ue || M !== !1 || le || B.current || z || !i || !e && !r || (B.current = !0, (async () => {
			if (e) {
				xs(j), N(!0);
				return;
			}
			try {
				let e = await E?.() ?? void 0;
				await ie({ variables: { input: {
					fields: Cs(i, se),
					turnstileToken: e
				} } }), xs(j), N(!0);
			} catch {
				B.current = !1, R(!0);
			}
		})());
	}, [
		ue,
		M,
		le,
		z,
		i,
		se,
		e,
		r,
		j,
		ie,
		E
	]);
	let de = !!i?.enabled && i.fields.length > 0 && M === !1 && !z && !(ue && !le), [fe, pe] = Z(() => {
		if (typeof window > "u") return !1;
		try {
			return sessionStorage.getItem("wexio:demo-authed") === "1";
		} catch {
			return !1;
		}
	}), V = (e) => {
		pe(e);
		try {
			e ? sessionStorage.setItem("wexio:demo-authed", "1") : sessionStorage.removeItem("wexio:demo-authed");
		} catch {}
	}, me = x?.google?.enabled ? x.google.clientId : null, he = !!x?.passkey?.enabled, ge = !!x?.requireAuth && !S && !(e && fe), _e = J(async () => {
		if (!de || !i) return !0;
		let t = Ss(i, ee, {
			required: k("required"),
			invalidEmail: k("invalidEmail"),
			invalidPhone: k("invalidPhone")
		});
		if (Object.keys(t).length > 0) return I(t), !1;
		if (ne(null), e) return xs(j), N(!0), !0;
		try {
			let e = await E?.() ?? void 0;
			return await ie({ variables: { input: {
				fields: Cs(i, ee),
				turnstileToken: e
			} } }), xs(j), N(!0), !0;
		} catch (e) {
			return ne(e instanceof Error ? e.message : k("submitFailed")), !1;
		}
	}, [
		de,
		i,
		ee,
		e,
		j,
		ie,
		k,
		E
	]), [ve, ye] = Z(""), [xe, Se] = Z(!1), [Ce, we] = Z(!1), [Te, Ee] = Z(!1), De = X(null), Oe = X(null), ke = X(null);
	Y(() => {
		if (!Ce) return;
		let e = (e) => {
			let t = e.target;
			ke.current?.contains(t) || t instanceof Element && t.closest("[data-wx-commands-panel]") || we(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [Ce]);
	let Ae = (e) => {
		let t = De.current;
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
	Y(() => {
		let e = De.current;
		e && (e.style.height = "auto", e.style.height = `${Math.min(e.scrollHeight, 120)}px`);
	}, [ve]);
	let [Me, W] = Z(e ? fr(O) : []), Ne = e ? Me : m ?? [], Pe = J((t) => {
		if (e) {
			W((e) => e.some((e) => e.id === t.id) ? e : [...e, t]);
			return;
		}
		h?.(t);
	}, [e, h]), [Fe, Le] = Z(/* @__PURE__ */ new Set()), [Re, ze] = Z(null), Be = X(null);
	Y(() => () => {
		Be.current && clearTimeout(Be.current);
	}, []);
	let [Ve, He] = Z([]), [Ue, We] = Z(null), Ge = X(null), Ke = X(null), [qe] = fn(), [Je] = mn(), [Ye] = on(), Xe = X(/* @__PURE__ */ new Set()), Ze = X(!0), Qe = X(!0), G = X(!1);
	Y(() => {
		f === 0 && (G.current = !1);
	}, [f]);
	let $e = J(() => {
		G.current || f !== 0 && (G.current = !0, p?.(), !(e || !t) && Ye({ variables: { chatId: t } }).catch(() => {
			G.current = !1;
		}));
	}, [
		t,
		e,
		f,
		Ye,
		p
	]), [et, tt] = Z(() => /* @__PURE__ */ new Set()), [nt, rt] = Z(null), it = (e, t) => rt({
		items: e,
		index: t
	}), { data: at, loading: ot, fetchMore: st } = vn({
		variables: {
			chatId: t ?? "",
			limit: 10
		},
		skip: e || !t || !r
	}), ct = (() => {
		let e = at?.visitorChatHistory?.items;
		if (!Array.isArray(e) || e.length === 0) return null;
		let t = e[e.length - 1];
		return typeof t?.id == "string" ? t.id : null;
	})(), lt = !!at?.visitorChatHistory?.nextCursor, [ut, dt] = Z(!1), [ft, pt] = Z(!1), mt = J(async () => {
		if (!(e || !t || !ct || ut || ft || !lt)) {
			dt(!0);
			try {
				((await st({
					variables: {
						chatId: t,
						before: ct,
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
				})).data.visitorChatHistory?.items?.length ?? 0) === 0 && pt(!0);
			} catch {} finally {
				dt(!1);
			}
		}
	}, [
		e,
		t,
		ct,
		ut,
		ft,
		lt,
		st
	]), ht = X(() => {});
	Y(() => {
		ht.current = (e) => xt(e);
	}), Y(() => {
		if (d) return d((e) => ht.current(e));
	}, [d]);
	let [gt, { loading: _t }] = rn(), [vt] = un(), yt = X(0), bt = J(() => {
		if (e || !r) return;
		let t = Date.now();
		t - yt.current < 3e3 || (yt.current = t, vt().catch(() => void 0));
	}, [
		vt,
		e,
		r
	]), xt = (e) => {
		let t = e.from ?? e.sender, n = t?.kind, r = t?.name ?? "";
		if (e.kind === "typing") {
			ze({
				name: n === "ai" || n === "bot" ? Xt : r,
				kind: n,
				avatar: t?.avatar,
				phase: e.phase
			}), Be.current && clearTimeout(Be.current), Be.current = setTimeout(() => ze(null), 8e3);
			return;
		}
		if (e.kind === "read-receipt") {
			let t = e.readReceipt?.messageIds ?? [];
			t.length > 0 && tt((e) => {
				let n = new Set(e);
				for (let e of t) n.add(e);
				return n;
			});
			return;
		}
		Be.current && (clearTimeout(Be.current), Be.current = null), ze(null);
	}, K = Pt(() => {
		if (e) return Ne;
		let t = cs(at, A), n = new Set(t.map((e) => e.id)), r = Ne.filter((e) => !n.has(e.id));
		return [...t, ...r];
	}, [
		e,
		Ne,
		at,
		A
	]), St = X(0);
	St.current === 0 && f > 0 && (St.current = f);
	let [Ct, wt] = Z(null), Tt = X(null), Et = X(!1), Dt = X(null);
	Dt.current = Ct, Y(() => {
		if (Et.current || ot) return;
		Et.current = !0;
		let e = St.current;
		if (e > 0 && K.length > 0) {
			let t = 0, n = null;
			for (let r = K.length - 1; r >= 0 && !(K[r].direction === "OUTBOUND" && (n = K[r].id, t += 1, t >= e)); r--);
			n && wt(n);
		}
	}, [ot, K]), Y(() => {
		if (!Ct) return;
		let e = Tt.current;
		e && (At.current = !0, e.scrollIntoView({
			block: "center",
			behavior: "auto"
		}));
	}, [Ct]), Y(() => {
		if (!Ct) return;
		let e = setTimeout(() => wt(null), 4e3);
		return () => clearTimeout(e);
	}, [Ct]);
	let q = X(c);
	Y(() => {
		let e = c && !q.current;
		if (q.current = c, !e) return;
		let t = null;
		if (f > 0 && K.length > 0) {
			let e = 0;
			for (let n = K.length - 1; n >= 0 && !(K[n].direction === "OUTBOUND" && (t = K[n].id, e += 1, e >= f)); n--);
		}
		Dt.current = t, At.current = !1, wt(t);
	}, [
		c,
		f,
		K
	]), Y(() => {
		let e = Ge.current;
		if (!e) return;
		let t = () => {
			let t = e.scrollHeight - e.scrollTop - e.clientHeight < 80;
			Ze.current = t, t && (Qe.current = !0), e.scrollTop < 120 && mt();
		};
		t(), e.addEventListener("scroll", t, { passive: !0 });
		let n = (t) => {
			let n = t.target;
			(n instanceof HTMLImageElement || n instanceof HTMLVideoElement) && (!Ze.current || !Qe.current || e.scrollTo({
				top: e.scrollHeight,
				behavior: "auto"
			}));
		};
		return e.addEventListener("load", n, !0), () => {
			e.removeEventListener("scroll", t), e.removeEventListener("load", n, !0);
		};
	}, [mt]);
	let Ot = X(null);
	Y(() => {
		let e = Ge.current;
		if (!e) return;
		if (ut) {
			Ot.current = {
				scrollTop: e.scrollTop,
				scrollHeight: e.scrollHeight
			};
			return;
		}
		let t = Ot.current;
		if (!t) return;
		Ot.current = null;
		let n = e.scrollHeight - t.scrollHeight;
		n > 0 && (e.scrollTop = t.scrollTop + n);
	}, [ut]);
	let At = X(!1), jt = X(0);
	Y(() => {
		let e = Ge.current;
		if (!e) return;
		let t = !At.current && K.length > 0, n = jt.current, r = K.length > n;
		jt.current = K.length;
		let i = K[K.length - 1], a = r && !t && !!i && i.sender.kind !== "visitor", o = r ? K[n] : null;
		if (!t && !Ze.current) return;
		let s = e.firstElementChild, c = r && !t && !!i && i.sender.kind === "visitor", l = () => {
			if (!(!t && !Ze.current) && !(Dt.current || St.current > 0 && !Et.current)) {
				if (a) {
					if (Qe.current = !1, !Ze.current) return;
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
				c && (Qe.current = !0), !(!t && !Qe.current) && e.scrollTo({
					top: e.scrollHeight,
					behavior: t ? "auto" : "smooth"
				});
			}
		};
		l(), t && (At.current = !0, Ze.current = !0);
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
		K.length,
		Re,
		Ct,
		c
	]), Y(() => {
		if (!c || f === 0) return;
		let e = Ge.current;
		if (!e) return;
		let t = () => {
			e.scrollHeight - e.scrollTop - e.clientHeight <= 20 && $e();
		};
		return t(), e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, [
		c,
		f,
		$e,
		K.length
	]);
	let Mt = (() => {
		for (let e = K.length - 1; e >= 0; e--) {
			let t = K[e];
			if (t.direction !== "OUTBOUND") break;
			if (t.buttons && t.buttons.length > 0 && !Fe.has(t.id)) return t.id;
		}
		return null;
	})(), Nt = (e) => {
		let t = `tmp-${Date.now()}`;
		Pe({
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
			let n = Wo(e, O);
			Pe({
				id: `tmp-fin-${Date.now()}`,
				direction: "OUTBOUND",
				text: n.text,
				ageLabel: "now",
				sender: {
					kind: "ai",
					name: Xt
				},
				buttons: n.buttons
			}), tt((e) => {
				let n = new Set(e);
				return n.add(t), n;
			}), l?.();
		}, 900);
	}, It = X(!1);
	Y(() => {
		!e || !_ || It.current || (It.current = !0, Nt(_), v?.());
	}, [e, _]);
	let Lt = (t, n) => {
		if (Le((e) => {
			let n = new Set(e);
			return n.add(t), n;
		}), e) {
			Nt(n.text);
			return;
		}
		let r = `tmp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
		Pe({
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
		}), u?.(), gt({ variables: { input: { text: n.text } } }).then((e) => {
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
	}, Rt = async (t) => {
		if (We(null), !io.has(t.type)) {
			We(D("fileMimeNotAllowed"));
			return;
		}
		if (t.size > 10485760) {
			We(D("fileTooLarge"));
			return;
		}
		if (e) {
			He((e) => [...e, {
				tempId: `upl-${Date.now()}`,
				filename: t.name,
				mimetype: t.type,
				mediaId: "demo-media",
				url: URL.createObjectURL(t)
			}]);
			return;
		}
		let n = `upl-${Date.now()}`, r = URL.createObjectURL(t);
		He((e) => [...e, {
			tempId: n,
			filename: t.name,
			mimetype: t.type,
			mediaId: null,
			url: r
		}]);
		try {
			let { base64: e } = await ro(t), i = (await qe({ variables: { input: {
				filename: t.name,
				mimetype: t.type,
				dataBase64: e
			} } })).data?.uploadVisitorMedia;
			if (!i) throw Error("empty upload response");
			Xe.current.delete(n) && Je({ variables: { mediaId: i.mediaId } }).catch(() => void 0), i.url && URL.revokeObjectURL(r), He((e) => e.map((e) => e.tempId === n ? {
				...e,
				mediaId: i.mediaId,
				...i.url ? { url: i.url } : {}
			} : e));
		} catch {
			URL.revokeObjectURL(r), He((e) => e.filter((e) => e.tempId !== n)), We(D("uploadFailed"));
		}
	}, zt = (t) => {
		let n = Ve.find((e) => e.tempId === t);
		n?.url?.startsWith("blob:") && URL.revokeObjectURL(n.url), n && !e && (n.mediaId ? Je({ variables: { mediaId: n.mediaId } }).catch(() => void 0) : Xe.current.add(t)), He((e) => e.filter((e) => e.tempId !== t));
	}, Bt = async () => {
		We(null), await _e() && Ee(!0);
	}, Vt = async (t) => {
		if (Ee(!1), t.size > 10485760) {
			We(D("fileTooLarge"));
			return;
		}
		if (e) {
			let e = us(t.base64, t.mimetype), n = URL.createObjectURL(e), r = `tmp-voice-${Date.now()}`;
			Pe({
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
				Pe({
					id: `tmp-fin-${Date.now()}`,
					direction: "OUTBOUND",
					text: "Got your voice note - let me check that and circle back.",
					ageLabel: "now",
					sender: {
						kind: "ai",
						name: Xt
					}
				}), tt((e) => {
					let t = new Set(e);
					return t.add(r), t;
				}), l?.();
			}, 900);
			return;
		}
		try {
			let e = (await qe({ variables: { input: {
				filename: t.filename,
				mimetype: t.mimetype,
				dataBase64: t.base64
			} } })).data?.uploadVisitorMedia?.mediaId;
			if (!e) throw Error("empty upload response");
			let n = us(t.base64, t.mimetype), r = URL.createObjectURL(n), i = `tmp-voice-${Date.now()}`;
			Pe({
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
			}), await gt({ variables: { input: { mediaIds: [e] } } }), u?.();
		} catch {
			We(D("uploadFailed"));
		}
	}, Ht = (e) => {
		Ee(!1), We(D(e === "unsupported" ? "voiceUnsupported" : e === "denied" ? "voiceDenied" : "uploadFailed"));
	}, Ut = async () => {
		let t = ve.trim(), n = Ve.map((e) => e.mediaId).filter((e) => !!e);
		if (!t && n.length === 0 || _t || ae) return;
		let r = Ve.filter((e) => !!e.mediaId && !!e.url).map((e) => ({
			url: e.url,
			mimetype: e.mimetype,
			alt: e.filename
		}));
		if (!await _e()) return;
		if (e) {
			ye(""), He([]), Nt(t || "[file]");
			return;
		}
		let i = `tmp-${Date.now()}`;
		Pe({
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
		}), ye(""), He([]);
		try {
			let e = await gt({ variables: { input: {
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
	}, Wt = async (t) => {
		if (we(!1), !await _e()) return;
		if (e) {
			Nt(t);
			return;
		}
		let n = `tmp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
		Pe({
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
			let e = (await gt({ variables: { input: { text: t } } })).data?.sendVisitorMessage?.messageId;
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
	}, Gt = ve.trim() || Ve.length > 0 ? "send" : "mic", Kt = Ve.some((e) => e.mediaId === null), qt = e ? ur(O) : a?.messages ?? [], Jt = qt.filter((e) => e.kind === "SYSTEM"), Yt = qt.filter((e) => e.kind === "HINT"), Zt = e || ge || !ot && !lt;
	a?.showRelatedNews, a?.showRelatedHelpArticles, a?.showReactionCounts;
	let Qt = Pt(() => hs(K, {
		locale: A,
		todayLabel: D("today"),
		yesterdayLabel: D("yesterday"),
		unreadAnchorId: Ct
	}), [
		K,
		A,
		D,
		Ct
	]);
	return /* @__PURE__ */ $("div", {
		className: "flex flex-1 flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ Q(ce, {
				className: "flex-1",
				viewportRef: Ge,
				children: /* @__PURE__ */ $("div", {
					className: "flex flex-col gap-3 px-4 pt-4 pb-3",
					children: [
						Zt && Jt.length > 0 && /* @__PURE__ */ Q("div", {
							className: "flex flex-col gap-2",
							children: Jt.map((e) => /* @__PURE__ */ Q(ss, {
								kind: e.kind,
								text: e.text
							}, `${e.kind}:${e.text}`))
						}),
						Zt && Yt.length > 0 && /* @__PURE__ */ Q("div", {
							className: "flex flex-col gap-2",
							children: Yt.map((e) => /* @__PURE__ */ Q(ss, {
								kind: e.kind,
								text: e.text
							}, `${e.kind}:${e.text}`))
						}),
						!ge && /* @__PURE__ */ $(Ft, { children: [ot && K.length === 0 && /* @__PURE__ */ $("div", {
							className: "flex flex-col gap-3",
							children: [
								/* @__PURE__ */ $("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ Q(Ie, { className: "h-7 w-7 shrink-0 rounded-full" }), /* @__PURE__ */ Q(Ie, { className: "h-10 w-3/4 rounded-wx-lg" })]
								}),
								/* @__PURE__ */ Q("div", {
									className: "flex flex-row-reverse items-start",
									children: /* @__PURE__ */ Q(Ie, { className: "h-8 w-2/3 rounded-wx-lg" })
								}),
								/* @__PURE__ */ $("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ Q(Ie, { className: "h-7 w-7 shrink-0 rounded-full" }), /* @__PURE__ */ Q(Ie, { className: "h-12 w-4/5 rounded-wx-lg" })]
								})
							]
						}), /* @__PURE__ */ Q(F, {
							initial: e,
							children: Qt.map((e) => {
								if (e.kind === "date") return /* @__PURE__ */ Q(Go, { label: e.label }, e.key);
								if (e.kind === "unread") return /* @__PURE__ */ Q(rs, {
									ref: Tt,
									label: D("unreadMessages")
								}, e.key);
								let t = e.message;
								return /* @__PURE__ */ Q(Xo, {
									message: et.has(t.id) ? {
										...t,
										deliveryStatus: "READ"
									} : t,
									organizationLogoUrl: o,
									organizationName: s,
									aiAssistantAvatarUrl: a?.aiAssistantAvatar ?? null,
									buttonsActive: t.id === Mt,
									onButtonClick: (e) => Lt(t.id, e),
									onOpenLightbox: it,
									onInternalLink: T
								}, e.key);
							})
						})] }),
						!ge && Re && /* @__PURE__ */ Q(ns, {
							actorName: Re.name,
							actorKind: Re.kind,
							actorAvatarUrl: Re.avatar,
							actorPhase: Re.phase,
							aiAssistantAvatarUrl: a?.aiAssistantAvatar ?? null,
							organizationLogoUrl: o,
							organizationName: s
						})
					]
				})
			}),
			/* @__PURE__ */ $("div", {
				className: "relative bg-wx-bg px-3 pt-2 pb-3",
				children: [
					/* @__PURE__ */ Q(Ho, {
						open: xe,
						onClose: () => Se(!1),
						onSelect: Ae,
						anchorRef: Oe
					}),
					Ue && /* @__PURE__ */ Q("p", {
						className: "mb-2 text-xs text-wx-danger",
						children: Ue
					}),
					/* @__PURE__ */ Q(F, {
						mode: "wait",
						initial: !1,
						children: ge ? /* @__PURE__ */ $(n.div, {
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
							children: [/* @__PURE__ */ Q("p", {
								className: "text-center text-sm text-wx-fg-muted",
								children: D("signInToChat")
							}), /* @__PURE__ */ Q("div", {
								className: "flex w-full flex-col gap-2",
								children: e ? /* @__PURE__ */ $(Ft, { children: [
									x?.google?.enabled && /* @__PURE__ */ Q("button", {
										type: "button",
										onClick: () => V(!0),
										className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2",
										children: D("googleSignInDemo")
									}),
									x?.passkey?.enabled && /* @__PURE__ */ Q("button", {
										type: "button",
										onClick: () => V(!0),
										className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2",
										children: D("passkeySignIn")
									}),
									!x?.google?.enabled && !x?.passkey?.enabled && /* @__PURE__ */ Q("p", {
										className: "text-center text-xs text-wx-fg-subtle",
										children: D("signInUnavailable")
									})
								] }) : /* @__PURE__ */ $(Ft, { children: [
									me && /* @__PURE__ */ Q(oo, {
										clientId: me,
										onCredential: (e) => C?.(e)
									}),
									he && /* @__PURE__ */ Q(jo, { onSession: w }),
									!me && !he && /* @__PURE__ */ Q("p", {
										className: "text-center text-xs text-wx-fg-subtle",
										children: D("signInUnavailable")
									})
								] })
							})]
						}, "auth-gate") : Te ? /* @__PURE__ */ Q(kt, {
							fallback: /* @__PURE__ */ Q("div", { className: "h-13 w-full animate-pulse rounded-wx-lg bg-wx-bg-elevated" }),
							children: /* @__PURE__ */ Q(Ds, {
								onComplete: Vt,
								onCancel: () => Ee(!1),
								onError: Ht
							})
						}, "recorder") : /* @__PURE__ */ $(n.div, {
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
								Ve.length > 0 && /* @__PURE__ */ Q("div", {
									className: "px-3 pt-3 pb-1",
									children: /* @__PURE__ */ Q(Lo, {
										attachments: Ve,
										onRemove: zt,
										onOpenLightbox: it
									})
								}),
								de && i && /* @__PURE__ */ $(Ft, { children: [/* @__PURE__ */ Q(Ts, {
									form: i,
									values: ee,
									errors: te,
									onChange: oe,
									disabled: ae
								}), L && /* @__PURE__ */ Q("p", {
									className: "px-3 pt-1.5 text-[11px] text-wx-danger",
									children: L
								})] }),
								/* @__PURE__ */ Q("textarea", {
									ref: De,
									name: "wexio-message",
									value: ve,
									onChange: (e) => {
										ye(e.target.value), bt();
									},
									onKeyDown: (e) => {
										e.key === "Enter" && !e.shiftKey && (e.preventDefault(), Ut());
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
								/* @__PURE__ */ $("div", {
									className: "flex items-center justify-between px-1.5 pt-0.5 pb-1.5",
									children: [/* @__PURE__ */ $("div", {
										className: "flex items-center gap-0.5",
										children: [
											/* @__PURE__ */ Q("input", {
												ref: Ke,
												type: "file",
												accept: Array.from(io).join(","),
												className: "hidden",
												onChange: (e) => {
													let t = e.target.files?.[0];
													t && Rt(t), e.target.value = "";
												}
											}),
											/* @__PURE__ */ Q(n.button, {
												type: "button",
												"aria-label": D("attach"),
												onClick: () => Ke.current?.click(),
												whileHover: { scale: 1.12 },
												whileTap: { scale: .9 },
												transition: {
													type: "spring",
													stiffness: 400,
													damping: 20
												},
												className: "flex h-7 w-7 items-center justify-center rounded-full text-wx-fg-muted transition-colors hover:bg-wx-bg-elevated hover:text-wx-fg",
												children: /* @__PURE__ */ Q(Wr, { size: 14 })
											}),
											/* @__PURE__ */ Q(n.button, {
												ref: Oe,
												type: "button",
												"aria-label": D("emoji"),
												"aria-expanded": xe,
												onClick: () => Se((e) => !e),
												whileHover: { scale: 1.12 },
												whileTap: { scale: .9 },
												transition: {
													type: "spring",
													stiffness: 400,
													damping: 20
												},
												className: U("flex h-7 w-7 items-center justify-center rounded-full transition-colors", xe ? "bg-wx-bg-elevated text-wx-fg" : "text-wx-fg-muted hover:bg-wx-bg-elevated hover:text-wx-fg"),
												children: /* @__PURE__ */ Q(Xr, { size: 14 })
											}),
											(a?.commands?.length ?? 0) > 0 && /* @__PURE__ */ $("div", {
												className: "relative",
												children: [/* @__PURE__ */ Q(n.button, {
													ref: ke,
													type: "button",
													"aria-label": D("commands"),
													"aria-expanded": Ce,
													onClick: () => we((e) => !e),
													whileHover: { scale: 1.12 },
													whileTap: { scale: .9 },
													transition: {
														type: "spring",
														stiffness: 400,
														damping: 20
													},
													className: U("flex h-7 w-7 items-center justify-center rounded-full transition-colors", Ce ? "bg-wx-bg-elevated text-wx-fg" : "text-wx-fg-muted hover:bg-wx-bg-elevated hover:text-wx-fg"),
													children: /* @__PURE__ */ Q(Ar, { size: 14 })
												}), /* @__PURE__ */ Q(F, { children: Ce && /* @__PURE__ */ Q(n.div, {
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
													children: /* @__PURE__ */ Q("ul", {
														className: "flex flex-col py-1",
														children: a?.commands.map((e) => /* @__PURE__ */ Q("li", { children: /* @__PURE__ */ Q("button", {
															type: "button",
															onClick: () => Wt(e),
															className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs font-mono text-wx-fg hover:bg-wx-bg-elevated",
															children: e
														}) }, e))
													})
												}) })]
											})
										]
									}), /* @__PURE__ */ Q(Uo, {
										kind: Gt,
										disabled: _t || Kt,
										onSend: Ut,
										onMic: Bt,
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
			/* @__PURE__ */ Q(re, {
				items: nt?.items ?? [],
				initialIndex: nt?.index ?? 0,
				open: !!nt,
				onClose: () => rt(null)
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/avatar-hero.tsx
function ks({ field: e, value: t, uploading: n, onPick: r, onClear: i, displayName: a, t: o }) {
	let s = X(null), [c, l] = Z(!1);
	Y(() => {
		l(!1);
	}, [t]);
	let u = a.split(/\s+/).filter(Boolean).slice(0, 2).map((e) => e[0]?.toUpperCase() ?? "").join(""), d = e.pinned;
	return /* @__PURE__ */ $("div", {
		className: "flex flex-col items-center gap-2.5 pt-4 pb-2",
		children: [
			/* @__PURE__ */ $("div", {
				className: "group relative",
				children: [
					/* @__PURE__ */ Q("span", {
						"aria-hidden": "true",
						className: "absolute -inset-2 rounded-full bg-wx-primary/20 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
					}),
					/* @__PURE__ */ $("button", {
						type: "button",
						disabled: d || n,
						onClick: () => s.current?.click(),
						"aria-label": o("uploadAvatar"),
						style: {
							height: 88,
							width: 88
						},
						className: U("relative flex items-center justify-center overflow-hidden rounded-full", "bg-gradient-to-br from-wx-bg-elevated to-wx-bg-elevated-2 text-2xl font-semibold text-wx-fg-muted", "ring-1 ring-inset ring-wx-border", !d && !n && "cursor-pointer transition-transform duration-200 hover:scale-[1.04]", d && "cursor-not-allowed"),
						children: [t && !c ? /* @__PURE__ */ Q("img", {
							src: t,
							alt: "",
							className: "h-full w-full object-cover",
							referrerPolicy: "no-referrer",
							onError: () => l(!0)
						}) : u ? /* @__PURE__ */ Q("span", {
							"aria-hidden": "true",
							children: u
						}) : /* @__PURE__ */ Q(Dr, {
							size: 26,
							"aria-hidden": "true"
						}), !d && /* @__PURE__ */ Q("span", {
							className: "absolute inset-x-0 bottom-0 flex h-7 items-center justify-center bg-black/45 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100",
							children: n ? /* @__PURE__ */ Q(Ge, {
								size: 14,
								className: "animate-spin text-white",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ Q(Fr, {
								size: 14,
								className: "text-white",
								"aria-hidden": "true"
							})
						})]
					}),
					d && /* @__PURE__ */ Q("span", {
						className: "absolute right-0 bottom-0 flex h-6 w-6 items-center justify-center rounded-full bg-wx-bg shadow-sm ring-1 ring-wx-border",
						children: /* @__PURE__ */ Q(Lr, {
							size: 11,
							className: "text-wx-fg-subtle",
							"aria-hidden": "true"
						})
					}),
					!d && t && /* @__PURE__ */ Q("button", {
						type: "button",
						onClick: i,
						"aria-label": o("removeAvatar"),
						className: "-top-1 -right-1 absolute flex h-7 w-7 items-center justify-center rounded-full border border-wx-border bg-wx-bg text-wx-fg-muted shadow-sm transition-colors hover:bg-wx-bg-elevated hover:text-wx-danger",
						children: /* @__PURE__ */ Q(ei, {
							size: 12,
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ Q("input", {
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
			a && /* @__PURE__ */ Q("p", {
				className: "text-[15px] font-semibold text-wx-fg",
				children: a
			}),
			d && /* @__PURE__ */ Q("p", {
				className: "text-[11px] text-wx-fg-subtle",
				children: o("pinnedHint")
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/switch.tsx
function As({ checked: e, onChange: t, disabled: n }) {
	return /* @__PURE__ */ Q("button", {
		type: "button",
		role: "switch",
		"aria-checked": e,
		disabled: n,
		onClick: () => t(!e),
		className: U("relative h-6 w-10 shrink-0 rounded-full transition-colors", e ? "bg-wx-primary" : "bg-wx-bg-elevated-2", n && "cursor-not-allowed opacity-60"),
		children: /* @__PURE__ */ Q("span", {
			"aria-hidden": "true",
			className: U("absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform", e && "translate-x-4")
		})
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/boolean-control.tsx
function js({ id: e, value: t, disabled: n, onChange: r }) {
	return /* @__PURE__ */ Q("div", {
		id: e,
		className: "flex",
		children: /* @__PURE__ */ Q(As, {
			checked: t === "true",
			disabled: n,
			onChange: (e) => r(e ? "true" : "false")
		})
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/helpers.ts
function Ms(e) {
	let t = {};
	for (let n of e.fields) t[n.key] = n.value ?? null;
	return t;
}
function Ns(e) {
	return e == null || e === "" || e.trim() === "";
}
function Ps(e, t) {
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
function Fs(e, t) {
	let n = [];
	for (let r of e) {
		if (r.pinned) continue;
		let e = Ps(r.value ?? null, r.type), i = Ps(t[r.key] ?? null, r.type);
		e !== i && n.push({
			key: r.key,
			value: i ?? ""
		});
	}
	return n;
}
function Is(e, t) {
	let n = (n) => t[n]?.trim() || e.fields.find((e) => e.key === n)?.value?.trim() || "", r = n("firstName"), i = n("lastName");
	return r || i ? `${r} ${i}`.trim() : n("name") || n("displayName") || "";
}
function Ls(e) {
	if (!e) return "";
	if (/^\d{4}-\d{2}-\d{2}$/.test(e)) return e;
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : t.toISOString().slice(0, 10);
}
function Rs(e) {
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		if (Array.isArray(t)) return t.map((e) => String(e));
	} catch {}
	return [];
}
//#endregion
//#region components/widget/tabs/profile-tab/input-class.ts
var zs = U("w-full rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2 text-sm text-wx-fg", "focus:border-wx-primary focus:outline-none focus:ring-2 focus:ring-wx-primary/20", "read-only:cursor-not-allowed read-only:bg-wx-bg-elevated/60 read-only:text-wx-fg-muted", "disabled:cursor-not-allowed disabled:bg-wx-bg-elevated/60 disabled:text-wx-fg-muted");
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/date-control.tsx
function Bs({ id: e, value: t, disabled: n, onChange: r }) {
	return /* @__PURE__ */ Q("input", {
		id: e,
		type: "date",
		value: Ls(t),
		disabled: n,
		onChange: (e) => r(e.target.value || null),
		className: zs
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/number-control.tsx
function Vs({ id: e, value: t, disabled: n, onChange: r }) {
	return /* @__PURE__ */ Q("input", {
		id: e,
		type: "number",
		value: t ?? "",
		disabled: n,
		inputMode: "decimal",
		onChange: (e) => r(e.target.value || null),
		className: zs
	});
}
//#endregion
//#region node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function Hs(e) {
	let t = /* @__PURE__ */ Us(e), n = q.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = q.Children.toArray(r), o = a.find(Gs);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ Q(t, {
				...i,
				ref: n,
				children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ Q(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function Us(e) {
	let t = q.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (q.isValidElement(n)) {
			let e = qs(n), i = Ks(r, n.props);
			return n.type !== q.Fragment && (i.ref = t ? ee(t, e) : e), q.cloneElement(n, i);
		}
		return q.Children.count(n) > 1 ? q.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var Ws = Symbol("radix.slottable");
function Gs(e) {
	return q.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ws;
}
function Ks(e, t) {
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
function qs(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Js(e) {
	let t = e + "CollectionProvider", [n, r] = A(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = (e) => {
		let { scope: t, children: n } = e, r = Ot.useRef(null), a = Ot.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ Q(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	};
	o.displayName = t;
	let s = e + "CollectionSlot", c = /* @__PURE__ */ Hs(s), l = Ot.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ Q(c, {
			ref: D(t, a(s, n).collectionRef),
			children: r
		});
	});
	l.displayName = s;
	let u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ Hs(u), p = Ot.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = Ot.useRef(null), s = D(t, o), c = a(u, n);
		return Ot.useEffect(() => (c.itemMap.set(o, {
			ref: o,
			...i
		}), () => void c.itemMap.delete(o))), /* @__PURE__ */ Q(f, {
			[d]: "",
			ref: s,
			children: r
		});
	});
	p.displayName = u;
	function m(t) {
		let n = a(e + "CollectionConsumer", t);
		return Ot.useCallback(() => {
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
function Ys(e, t = globalThis?.document) {
	let n = R(e);
	q.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && n(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [n, t]);
}
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var Xs = "DismissableLayer", Zs = "dismissableLayer.update", Qs = "dismissableLayer.pointerDownOutside", $s = "dismissableLayer.focusOutside", ec, tc = q.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), nc = q.forwardRef((e, t) => {
	let { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: o, onDismiss: s, ...c } = e, l = q.useContext(tc), [u, d] = q.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, p] = q.useState({}), m = D(t, (e) => d(e)), h = Array.from(l.layers), [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), _ = h.indexOf(g), v = u ? h.indexOf(u) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, b = v >= _, x = ac((e) => {
		let t = e.target, n = [...l.branches].some((e) => e.contains(t));
		!b || n || (i?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f), S = oc((e) => {
		let t = e.target;
		[...l.branches].some((e) => e.contains(t)) || (a?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f);
	return Ys((e) => {
		v === l.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
	}, f), q.useEffect(() => {
		if (u) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (ec = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), sc(), () => {
			n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = ec);
		};
	}, [
		u,
		f,
		n,
		l
	]), q.useEffect(() => () => {
		u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), sc());
	}, [u, l]), q.useEffect(() => {
		let e = () => p({});
		return document.addEventListener(Zs, e), () => document.removeEventListener(Zs, e);
	}, []), /* @__PURE__ */ Q(B.div, {
		...c,
		ref: m,
		style: {
			pointerEvents: y ? b ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: P(e.onFocusCapture, S.onFocusCapture),
		onBlurCapture: P(e.onBlurCapture, S.onBlurCapture),
		onPointerDownCapture: P(e.onPointerDownCapture, x.onPointerDownCapture)
	});
});
nc.displayName = Xs;
var rc = "DismissableLayerBranch", ic = q.forwardRef((e, t) => {
	let n = q.useContext(tc), r = q.useRef(null), i = D(t, r);
	return q.useEffect(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), /* @__PURE__ */ Q(B.div, {
		...e,
		ref: i
	});
});
ic.displayName = rc;
function ac(e, t = globalThis?.document) {
	let n = R(e), r = q.useRef(!1), i = q.useRef(() => {});
	return q.useEffect(() => {
		let e = (e) => {
			if (e.target && !r.current) {
				let r = function() {
					cc(Qs, n, a, { discrete: !0 });
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
function oc(e, t = globalThis?.document) {
	let n = R(e), r = q.useRef(!1);
	return q.useEffect(() => {
		let e = (e) => {
			e.target && !r.current && cc($s, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function sc() {
	let e = new CustomEvent(Zs);
	document.dispatchEvent(e);
}
function cc(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? j(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var lc = 0;
function uc() {
	q.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? dc()), document.body.insertAdjacentElement("beforeend", e[1] ?? dc()), lc++, () => {
			lc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), lc--;
		};
	}, []);
}
function dc() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var fc = "focusScope.autoFocusOnMount", pc = "focusScope.autoFocusOnUnmount", mc = {
	bubbles: !1,
	cancelable: !0
}, hc = "FocusScope", gc = q.forwardRef((e, t) => {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = q.useState(null), l = R(i), u = R(a), d = q.useRef(null), f = D(t, (e) => c(e)), p = q.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	q.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (p.paused || !s) return;
				let t = e.target;
				s.contains(t) ? d.current = t : Cc(d.current, { select: !0 });
			}, t = function(e) {
				if (p.paused || !s) return;
				let t = e.relatedTarget;
				t !== null && (s.contains(t) || Cc(d.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Cc(s);
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
	]), q.useEffect(() => {
		if (s) {
			wc.add(p);
			let e = document.activeElement;
			if (!s.contains(e)) {
				let t = new CustomEvent(fc, mc);
				s.addEventListener(fc, l), s.dispatchEvent(t), t.defaultPrevented || (_c(Dc(yc(s)), { select: !0 }), document.activeElement === e && Cc(s));
			}
			return () => {
				s.removeEventListener(fc, l), setTimeout(() => {
					let t = new CustomEvent(pc, mc);
					s.addEventListener(pc, u), s.dispatchEvent(t), t.defaultPrevented || Cc(e ?? document.body, { select: !0 }), s.removeEventListener(pc, u), wc.remove(p);
				}, 0);
			};
		}
	}, [
		s,
		l,
		u,
		p
	]);
	let m = q.useCallback((e) => {
		if (!n && !r || p.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = vc(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && Cc(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && Cc(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		p.paused
	]);
	return /* @__PURE__ */ Q(B.div, {
		tabIndex: -1,
		...o,
		ref: f,
		onKeyDown: m
	});
});
gc.displayName = hc;
function _c(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Cc(r, { select: t }), document.activeElement !== n) return;
}
function vc(e) {
	let t = yc(e);
	return [bc(t, e), bc(t.reverse(), e)];
}
function yc(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function bc(e, t) {
	for (let n of e) if (!xc(n, { upTo: t })) return n;
}
function xc(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function Sc(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function Cc(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Sc(e) && t && e.select();
	}
}
var wc = Tc();
function Tc() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Ec(e, t), e.unshift(t);
		},
		remove(t) {
			e = Ec(e, t), e[0]?.resume();
		}
	};
}
function Ec(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function Dc(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region node_modules/@radix-ui/react-id/dist/index.mjs
var Oc = q.useId || (() => void 0), kc = 0;
function Ac(e) {
	let [t, n] = q.useState(Oc());
	return I(() => {
		e || n((e) => e ?? String(kc++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var jc = [
	"top",
	"right",
	"bottom",
	"left"
], Mc = Math.min, Nc = Math.max, Pc = Math.round, Fc = Math.floor, Ic = (e) => ({
	x: e,
	y: e
}), Lc = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Rc(e, t, n) {
	return Nc(e, Mc(t, n));
}
function zc(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Bc(e) {
	return e.split("-")[0];
}
function Vc(e) {
	return e.split("-")[1];
}
function Hc(e) {
	return e === "x" ? "y" : "x";
}
function Uc(e) {
	return e === "y" ? "height" : "width";
}
function Wc(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Gc(e) {
	return Hc(Wc(e));
}
function Kc(e, t, n) {
	n === void 0 && (n = !1);
	let r = Vc(e), i = Gc(e), a = Uc(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = tl(o)), [o, tl(o)];
}
function qc(e) {
	let t = tl(e);
	return [
		Jc(e),
		t,
		Jc(t)
	];
}
function Jc(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Yc = ["left", "right"], Xc = ["right", "left"], Zc = ["top", "bottom"], Qc = ["bottom", "top"];
function $c(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Xc : Yc : t ? Yc : Xc;
		case "left":
		case "right": return t ? Zc : Qc;
		default: return [];
	}
}
function el(e, t, n, r) {
	let i = Vc(e), a = $c(Bc(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Jc)))), a;
}
function tl(e) {
	let t = Bc(e);
	return Lc[t] + e.slice(t.length);
}
function nl(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function rl(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : nl(e);
}
function il(e) {
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
function al(e, t, n) {
	let { reference: r, floating: i } = e, a = Wc(t), o = Gc(t), s = Uc(o), c = Bc(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (Vc(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function ol(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = zc(t, e), p = rl(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = il(await i.getClippingRect({
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
	}, y = il(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var sl = 50, cl = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: ol
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = al(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < sl && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = al(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, ll = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = zc(e, t) || {};
		if (l == null) return {};
		let d = rl(u), f = {
			x: n,
			y: r
		}, p = Gc(i), m = Uc(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Mc(d[_], T), D = Mc(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = Rc(O, A, k), M = !c.arrow && Vc(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
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
}), ul = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = zc(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Bc(r), _ = Wc(o), v = Bc(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [tl(o)] : qc(o)), x = p !== "none";
			!d && x && b.push(...el(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Kc(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Wc(t)) || T.every((e) => Wc(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
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
								let t = Wc(e.placement);
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
function dl(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function fl(e) {
	return jc.some((t) => e[t] >= 0);
}
var pl = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = zc(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = dl(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: fl(e)
					} };
				}
				case "escaped": {
					let e = dl(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: fl(e)
					} };
				}
				default: return {};
			}
		}
	};
}, ml = /* @__PURE__ */ new Set(["left", "top"]);
async function hl(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Bc(n), s = Vc(n), c = Wc(n) === "y", l = ml.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = zc(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var gl = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await hl(t, e);
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
}, _l = function(e) {
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
			} }, ...l } = zc(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Wc(Bc(i)), p = Hc(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Rc(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Rc(n, h, r);
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
}, vl = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = zc(e, t), u = {
				x: n,
				y: r
			}, d = Wc(i), f = Hc(d), p = u[f], m = u[d], h = zc(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = ml.has(Bc(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, yl = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = zc(e, t), u = await o.detectOverflow(t, l), d = Bc(i), f = Vc(i), p = Wc(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = Mc(h - u[g], v), x = Mc(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = Nc(u.left, 0), t = Nc(u.right, 0), n = Nc(u.top, 0), r = Nc(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : Nc(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : Nc(u.top, u.bottom));
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
function bl() {
	return typeof window < "u";
}
function xl(e) {
	return wl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Sl(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Cl(e) {
	return ((wl(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function wl(e) {
	return bl() ? e instanceof Node || e instanceof Sl(e).Node : !1;
}
function Tl(e) {
	return bl() ? e instanceof Element || e instanceof Sl(e).Element : !1;
}
function El(e) {
	return bl() ? e instanceof HTMLElement || e instanceof Sl(e).HTMLElement : !1;
}
function Dl(e) {
	return !bl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Sl(e).ShadowRoot;
}
function Ol(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = zl(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function kl(e) {
	return /^(table|td|th)$/.test(xl(e));
}
function Al(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var jl = /transform|translate|scale|rotate|perspective|filter/, Ml = /paint|layout|strict|content/, Nl = (e) => !!e && e !== "none", Pl;
function Fl(e) {
	let t = Tl(e) ? zl(e) : e;
	return Nl(t.transform) || Nl(t.translate) || Nl(t.scale) || Nl(t.rotate) || Nl(t.perspective) || !Ll() && (Nl(t.backdropFilter) || Nl(t.filter)) || jl.test(t.willChange || "") || Ml.test(t.contain || "");
}
function Il(e) {
	let t = Vl(e);
	for (; El(t) && !Rl(t);) {
		if (Fl(t)) return t;
		if (Al(t)) return null;
		t = Vl(t);
	}
	return null;
}
function Ll() {
	return Pl ?? (Pl = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Pl;
}
function Rl(e) {
	return /^(html|body|#document)$/.test(xl(e));
}
function zl(e) {
	return Sl(e).getComputedStyle(e);
}
function Bl(e) {
	return Tl(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Vl(e) {
	if (xl(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Dl(e) && e.host || Cl(e);
	return Dl(t) ? t.host : t;
}
function Hl(e) {
	let t = Vl(e);
	return Rl(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : El(t) && Ol(t) ? t : Hl(t);
}
function Ul(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Hl(e), i = r === e.ownerDocument?.body, a = Sl(r);
	if (i) {
		let e = Wl(a);
		return t.concat(a, a.visualViewport || [], Ol(r) ? r : [], e && n ? Ul(e) : []);
	} else return t.concat(r, Ul(r, [], n));
}
function Wl(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Gl(e) {
	let t = zl(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = El(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Pc(n) !== a || Pc(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Kl(e) {
	return Tl(e) ? e : e.contextElement;
}
function ql(e) {
	let t = Kl(e);
	if (!El(t)) return Ic(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Gl(t), o = (a ? Pc(n.width) : n.width) / r, s = (a ? Pc(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Jl = /* @__PURE__ */ Ic(0);
function Yl(e) {
	let t = Sl(e);
	return !Ll() || !t.visualViewport ? Jl : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Xl(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Sl(e) ? !1 : t;
}
function Zl(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Kl(e), o = Ic(1);
	t && (r ? Tl(r) && (o = ql(r)) : o = ql(e));
	let s = Xl(a, n, r) ? Yl(a) : Ic(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Sl(a), t = r && Tl(r) ? Sl(r) : r, n = e, i = Wl(n);
		for (; i && r && t !== n;) {
			let e = ql(i), t = i.getBoundingClientRect(), r = zl(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Sl(i), i = Wl(n);
		}
	}
	return il({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Ql(e, t) {
	let n = Bl(e).scrollLeft;
	return t ? t.left + n : Zl(Cl(e)).left + n;
}
function $l(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Ql(e, n),
		y: n.top + t.scrollTop
	};
}
function eu(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Cl(r), s = t ? Al(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Ic(1), u = Ic(0), d = El(r);
	if ((d || !d && !a) && ((xl(r) !== "body" || Ol(o)) && (c = Bl(r)), d)) {
		let e = Zl(r);
		l = ql(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? $l(o, c) : Ic(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function tu(e) {
	return Array.from(e.getClientRects());
}
function nu(e) {
	let t = Cl(e), n = Bl(e), r = e.ownerDocument.body, i = Nc(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Nc(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Ql(e), s = -n.scrollTop;
	return zl(r).direction === "rtl" && (o += Nc(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var ru = 25;
function iu(e, t) {
	let n = Sl(e), r = Cl(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Ll();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Ql(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= ru && (a -= o);
	} else l <= ru && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function au(e, t) {
	let n = Zl(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = El(e) ? ql(e) : Ic(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function ou(e, t, n) {
	let r;
	if (t === "viewport") r = iu(e, n);
	else if (t === "document") r = nu(Cl(e));
	else if (Tl(t)) r = au(t, n);
	else {
		let n = Yl(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return il(r);
}
function su(e, t) {
	let n = Vl(e);
	return n === t || !Tl(n) || Rl(n) ? !1 : zl(n).position === "fixed" || su(n, t);
}
function cu(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Ul(e, [], !1).filter((e) => Tl(e) && xl(e) !== "body"), i = null, a = zl(e).position === "fixed", o = a ? Vl(e) : e;
	for (; Tl(o) && !Rl(o);) {
		let t = zl(o), n = Fl(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Ol(o) && !n && su(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Vl(o);
	}
	return t.set(e, r), r;
}
function lu(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Al(t) ? [] : cu(t, this._c) : [].concat(n), r], o = ou(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = ou(t, a[e], i);
		s = Nc(n.top, s), c = Mc(n.right, c), l = Mc(n.bottom, l), u = Nc(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function uu(e) {
	let { width: t, height: n } = Gl(e);
	return {
		width: t,
		height: n
	};
}
function du(e, t, n) {
	let r = El(t), i = Cl(t), a = n === "fixed", o = Zl(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Ic(0);
	function l() {
		c.x = Ql(i);
	}
	if (r || !r && !a) if ((xl(t) !== "body" || Ol(i)) && (s = Bl(t)), r) {
		let e = Zl(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? $l(i, s) : Ic(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function fu(e) {
	return zl(e).position === "static";
}
function pu(e, t) {
	if (!El(e) || zl(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Cl(e) === n && (n = n.ownerDocument.body), n;
}
function mu(e, t) {
	let n = Sl(e);
	if (Al(e)) return n;
	if (!El(e)) {
		let t = Vl(e);
		for (; t && !Rl(t);) {
			if (Tl(t) && !fu(t)) return t;
			t = Vl(t);
		}
		return n;
	}
	let r = pu(e, t);
	for (; r && kl(r) && fu(r);) r = pu(r, t);
	return r && Rl(r) && fu(r) && !Fl(r) ? n : r || Il(e) || n;
}
var hu = async function(e) {
	let t = this.getOffsetParent || mu, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: du(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function gu(e) {
	return zl(e).direction === "rtl";
}
var _u = {
	convertOffsetParentRelativeRectToViewportRelativeRect: eu,
	getDocumentElement: Cl,
	getClippingRect: lu,
	getOffsetParent: mu,
	getElementRects: hu,
	getClientRects: tu,
	getDimensions: uu,
	getScale: ql,
	isElement: Tl,
	isRTL: gu
};
function vu(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function yu(e, t) {
	let n = null, r, i = Cl(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Fc(d), h = Fc(i.clientWidth - (u + f)), g = Fc(i.clientHeight - (d + p)), _ = Fc(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Nc(0, Mc(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !vu(l, e.getBoundingClientRect()) && o(), y = !1;
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
function bu(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Kl(e), u = i || a ? [...l ? Ul(l) : [], ...t ? Ul(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? yu(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Zl(e) : null;
	c && g();
	function g() {
		let t = Zl(e);
		h && !vu(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var xu = gl, Su = _l, Cu = ul, wu = yl, Tu = pl, Eu = ll, Du = vl, Ou = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: _u,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return cl(e, t, {
		...i,
		platform: a
	});
}, ku = typeof document < "u" ? Nt : function() {};
function Au(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Au(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Au(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function ju(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Mu(e, t) {
	let n = ju(e);
	return Math.round(t * n) / n;
}
function Nu(e) {
	let t = q.useRef(e);
	return ku(() => {
		t.current = e;
	}), t;
}
function Pu(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = q.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = q.useState(r);
	Au(f, r) || p(r);
	let [m, h] = q.useState(null), [g, _] = q.useState(null), v = q.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = q.useCallback((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = q.useRef(null), C = q.useRef(null), w = q.useRef(u), T = c != null, E = Nu(c), D = Nu(i), O = Nu(l), k = q.useCallback(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		D.current && (e.platform = D.current), Ou(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: O.current !== !1
			};
			A.current && !Au(w.current, t) && (w.current = t, It.flushSync(() => {
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
	ku(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let A = q.useRef(!1);
	ku(() => (A.current = !0, () => {
		A.current = !1;
	}), []), ku(() => {
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
	let j = q.useMemo(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), M = q.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), N = q.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!M.floating) return e;
		let t = Mu(M.floating, u.x), r = Mu(M.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...ju(M.floating) >= 1.5 && { willChange: "transform" }
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
	return q.useMemo(() => ({
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
var Fu = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Eu({
				element: r.current,
				padding: i
			}).fn(n) : r ? Eu({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Iu = (e, t) => {
	let n = xu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Lu = (e, t) => {
	let n = Su(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ru = (e, t) => ({
	fn: Du(e).fn,
	options: [e, t]
}), zu = (e, t) => {
	let n = Cu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Bu = (e, t) => {
	let n = wu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Vu = (e, t) => {
	let n = Tu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Hu = (e, t) => {
	let n = Fu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Uu = "Arrow", Wu = q.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ Q(B.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ Q("polygon", { points: "0,0 30,0 15,10" })
	});
});
Wu.displayName = Uu;
var Gu = Wu;
//#endregion
//#region node_modules/@radix-ui/react-use-size/dist/index.mjs
function Ku(e) {
	let [t, n] = q.useState(void 0);
	return I(() => {
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
var qu = "Popper", [Ju, Yu] = A(qu), [Xu, Zu] = Ju(qu), Qu = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = q.useState(null);
	return /* @__PURE__ */ Q(Xu, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		children: n
	});
};
Qu.displayName = qu;
var $u = "PopperAnchor", ed = q.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = Zu($u, n), o = q.useRef(null), s = D(t, o), c = q.useRef(null);
	return q.useEffect(() => {
		let e = c.current;
		c.current = r?.current || o.current, e !== c.current && a.onAnchorChange(c.current);
	}), r ? null : /* @__PURE__ */ Q(B.div, {
		...i,
		ref: s
	});
});
ed.displayName = $u;
var td = "PopperContent", [nd, rd] = Ju(td), id = q.forwardRef((e, t) => {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: d = "partial", hideWhenDetached: f = !1, updatePositionStrategy: p = "optimized", onPlaced: m, ...h } = e, g = Zu(td, n), [_, v] = q.useState(null), y = D(t, (e) => v(e)), [b, x] = q.useState(null), S = Ku(b), C = S?.width ?? 0, w = S?.height ?? 0, T = r + (a === "center" ? "" : "-" + a), E = typeof u == "number" ? u : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...u
	}, O = Array.isArray(l) ? l : [l], k = O.length > 0, A = {
		padding: E,
		boundary: O.filter(cd),
		altBoundary: k
	}, { refs: j, floatingStyles: M, placement: N, isPositioned: ee, middlewareData: P } = Pu({
		strategy: "fixed",
		placement: T,
		whileElementsMounted: (...e) => bu(...e, { animationFrame: p === "always" }),
		elements: { reference: g.anchor },
		middleware: [
			Iu({
				mainAxis: i + w,
				alignmentAxis: o
			}),
			c && Lu({
				mainAxis: !0,
				crossAxis: !1,
				limiter: d === "partial" ? Ru() : void 0,
				...A
			}),
			c && zu({ ...A }),
			Bu({
				...A,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			b && Hu({
				element: b,
				padding: s
			}),
			ld({
				arrowWidth: C,
				arrowHeight: w
			}),
			f && Vu({
				strategy: "referenceHidden",
				...A
			})
		]
	}), [te, F] = ud(N), L = R(m);
	I(() => {
		ee && L?.();
	}, [ee, L]);
	let ne = P.arrow?.x, re = P.arrow?.y, ie = P.arrow?.centerOffset !== 0, [ae, oe] = q.useState();
	return I(() => {
		_ && oe(window.getComputedStyle(_).zIndex);
	}, [_]), /* @__PURE__ */ Q("div", {
		ref: j.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...M,
			transform: ee ? M.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ae,
			"--radix-popper-transform-origin": [P.transformOrigin?.x, P.transformOrigin?.y].join(" "),
			...P.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ Q(nd, {
			scope: n,
			placedSide: te,
			onArrowChange: x,
			arrowX: ne,
			arrowY: re,
			shouldHideArrow: ie,
			children: /* @__PURE__ */ Q(B.div, {
				"data-side": te,
				"data-align": F,
				...h,
				ref: y,
				style: {
					...h.style,
					animation: ee ? void 0 : "none"
				}
			})
		})
	});
});
id.displayName = td;
var ad = "PopperArrow", od = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, sd = q.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = rd(ad, n), a = od[i.placedSide];
	return /* @__PURE__ */ Q("span", {
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
		children: /* @__PURE__ */ Q(Gu, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
sd.displayName = ad;
function cd(e) {
	return e !== null;
}
var ld = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = ud(n), u = {
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
function ud(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var dd = Qu, fd = ed, pd = id, md = sd, hd = "Portal", gd = q.forwardRef((e, t) => {
	let { container: n, ...r } = e, [i, a] = q.useState(!1);
	I(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? Lt.createPortal(/* @__PURE__ */ Q(B.div, {
		...r,
		ref: t
	}), o) : null;
});
gd.displayName = hd;
//#endregion
//#region node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function _d(e) {
	let t = /* @__PURE__ */ vd(e), n = q.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = q.Children.toArray(r), o = a.find(bd);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? q.Children.count(e) > 1 ? q.Children.only(null) : q.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ Q(t, {
				...i,
				ref: n,
				children: q.isValidElement(e) ? q.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ Q(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function vd(e) {
	let t = q.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (q.isValidElement(n)) {
			let e = Sd(n), i = xd(r, n.props);
			return n.type !== q.Fragment && (i.ref = t ? ee(t, e) : e), q.cloneElement(n, i);
		}
		return q.Children.count(n) > 1 ? q.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var yd = Symbol("radix.slottable");
function bd(e) {
	return q.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === yd;
}
function xd(e, t) {
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
function Sd(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Cd = q.useInsertionEffect || I;
function wd({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	let [i, a, o] = Td({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0, c = s ? e : i;
	{
		let t = q.useRef(e !== void 0);
		q.useEffect(() => {
			let e = t.current;
			e !== s && console.warn(`${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = s;
		}, [s, r]);
	}
	return [c, q.useCallback((t) => {
		if (s) {
			let n = Ed(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
function Td({ defaultProp: e, onChange: t }) {
	let [n, r] = q.useState(e), i = q.useRef(n), a = q.useRef(t);
	return Cd(() => {
		a.current = t;
	}, [t]), q.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
function Ed(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
function Dd(e) {
	let t = q.useRef({
		value: e,
		previous: e
	});
	return q.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
//#endregion
//#region node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Od = Object.freeze({
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
}), kd = "VisuallyHidden", Ad = q.forwardRef((e, t) => /* @__PURE__ */ Q(B.span, {
	...e,
	ref: t,
	style: {
		...Od,
		...e.style
	}
}));
Ad.displayName = kd;
//#endregion
//#region node_modules/aria-hidden/dist/es2015/index.js
var jd = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Md = /* @__PURE__ */ new WeakMap(), Nd = /* @__PURE__ */ new WeakMap(), Pd = {}, Fd = 0, Id = function(e) {
	return e && (e.host || Id(e.parentNode));
}, Ld = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Id(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Rd = function(e, t, n, r) {
	var i = Ld(t, Array.isArray(e) ? e : [e]);
	Pd[n] || (Pd[n] = /* @__PURE__ */ new WeakMap());
	var a = Pd[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Md.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Md.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Nd.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Fd++, function() {
		o.forEach(function(e) {
			var t = Md.get(e) - 1, i = a.get(e) - 1;
			Md.set(e, t), a.set(e, i), t || (Nd.has(e) || e.removeAttribute(r), Nd.delete(e)), i || e.removeAttribute(n);
		}), Fd--, Fd || (Md = /* @__PURE__ */ new WeakMap(), Md = /* @__PURE__ */ new WeakMap(), Nd = /* @__PURE__ */ new WeakMap(), Pd = {});
	};
}, zd = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || jd(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Rd(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Bd = "right-scroll-bar-position", Vd = "width-before-scroll-bar", Hd = "with-scroll-bars-hidden", Ud = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
function Wd(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
function Gd(e, t) {
	var n = Z(function() {
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
var Kd = typeof window < "u" ? q.useLayoutEffect : q.useEffect, qd = /* @__PURE__ */ new WeakMap();
function Jd(e, t) {
	var n = Gd(t || null, function(t) {
		return e.forEach(function(e) {
			return Wd(e, t);
		});
	});
	return Kd(function() {
		var t = qd.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Wd(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Wd(e, a);
			});
		}
		qd.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function Yd(e) {
	return e;
}
function Xd(e, t) {
	t === void 0 && (t = Yd);
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
function Zd(e) {
	e === void 0 && (e = {});
	var t = Xd(null);
	return t.options = L({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var Qd = function(e) {
	var t = e.sideCar, n = se(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return q.createElement(r, L({}, n));
};
Qd.isSideCarExport = !0;
function $d(e, t) {
	return e.useMedium(t), Qd;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var ef = Zd(), tf = function() {}, nf = q.forwardRef(function(e, t) {
	var n = q.useRef(null), r = q.useState({
		onScrollCapture: tf,
		onWheelCapture: tf,
		onTouchMoveCapture: tf
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = se(e, [
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
	]), x = f, S = Jd([n, t]), C = L(L({}, b), i);
	return q.createElement(q.Fragment, null, u && q.createElement(x, {
		sideCar: ef,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? q.cloneElement(q.Children.only(s), L(L({}, C), { ref: S })) : q.createElement(v, L({}, C, {
		className: c,
		ref: S
	}), s));
});
nf.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, nf.classNames = {
	fullWidth: Vd,
	zeroRight: Bd
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var rf, af = function() {
	if (rf) return rf;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function of() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = af();
	return t && e.setAttribute("nonce", t), e;
}
function sf(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cf(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var lf = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = of()) && (sf(t, n), cf(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, uf = function() {
	var e = lf();
	return function(t, n) {
		q.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, df = function() {
	var e = uf();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, ff = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, pf = function(e) {
	return parseInt(e || "", 10) || 0;
}, mf = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		pf(n),
		pf(r),
		pf(i)
	];
}, hf = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return ff;
	var t = mf(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, gf = df(), _f = "data-scroll-locked", vf = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Hd} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${_f}] {
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
  
  .${Bd} {
    right: ${s}px ${r};
  }
  
  .${Vd} {
    margin-right: ${s}px ${r};
  }
  
  .${Bd} .${Bd} {
    right: 0 ${r};
  }
  
  .${Vd} .${Vd} {
    margin-right: 0 ${r};
  }
  
  body[${_f}] {
    ${Ud}: ${s}px;
  }
`;
}, yf = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, bf = function() {
	q.useEffect(function() {
		return document.body.setAttribute(_f, (yf() + 1).toString()), function() {
			var e = yf() - 1;
			e <= 0 ? document.body.removeAttribute(_f) : document.body.setAttribute(_f, e.toString());
		};
	}, []);
}, xf = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	bf();
	var a = q.useMemo(function() {
		return hf(i);
	}, [i]);
	return q.createElement(gf, { styles: vf(a, !t, i, n ? "" : "!important") });
}, Sf = !1;
if (typeof window < "u") try {
	var Cf = Object.defineProperty({}, "passive", { get: function() {
		return Sf = !0, !0;
	} });
	window.addEventListener("test", Cf, Cf), window.removeEventListener("test", Cf, Cf);
} catch {
	Sf = !1;
}
var wf = Sf ? { passive: !1 } : !1, Tf = function(e) {
	return e.tagName === "TEXTAREA";
}, Ef = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Tf(e) && n[t] === "visible");
}, Df = function(e) {
	return Ef(e, "overflowY");
}, Of = function(e) {
	return Ef(e, "overflowX");
}, kf = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Mf(e, r)) {
			var i = Nf(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Af = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, jf = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Mf = function(e, t) {
	return e === "v" ? Df(t) : Of(t);
}, Nf = function(e, t) {
	return e === "v" ? Af(t) : jf(t);
}, Pf = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Ff = function(e, t, n, r, i) {
	var a = Pf(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Nf(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Mf(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, If = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Lf = function(e) {
	return [e.deltaX, e.deltaY];
}, Rf = function(e) {
	return e && "current" in e ? e.current : e;
}, zf = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Bf = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Vf = 0, Hf = [];
function Uf(e) {
	var t = q.useRef([]), n = q.useRef([0, 0]), r = q.useRef(), i = q.useState(Vf++)[0], a = q.useState(df)[0], o = q.useRef(e);
	q.useEffect(function() {
		o.current = e;
	}, [e]), q.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = ne([e.lockRef.current], (e.shards || []).map(Rf), !0).filter(Boolean);
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
	var s = q.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = If(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = kf(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = kf(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Ff(h, t, e, h === "h" ? s : c, !0);
	}, []), c = q.useCallback(function(e) {
		var n = e;
		if (!(!Hf.length || Hf[Hf.length - 1] !== a)) {
			var r = "deltaY" in n ? Lf(n) : If(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && zf(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Rf).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = q.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Wf(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = q.useCallback(function(e) {
		n.current = If(e), r.current = void 0;
	}, []), d = q.useCallback(function(t) {
		l(t.type, Lf(t), t.target, s(t, e.lockRef.current));
	}, []), f = q.useCallback(function(t) {
		l(t.type, If(t), t.target, s(t, e.lockRef.current));
	}, []);
	q.useEffect(function() {
		return Hf.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, wf), document.addEventListener("touchmove", c, wf), document.addEventListener("touchstart", u, wf), function() {
			Hf = Hf.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, wf), document.removeEventListener("touchmove", c, wf), document.removeEventListener("touchstart", u, wf);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return q.createElement(q.Fragment, null, m ? q.createElement(a, { styles: Bf(i) }) : null, p ? q.createElement(xf, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Wf(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Gf = $d(ef, Uf), Kf = q.forwardRef(function(e, t) {
	return q.createElement(nf, L({}, e, {
		ref: t,
		sideCar: Gf
	}));
});
Kf.classNames = nf.classNames;
//#endregion
//#region node_modules/@radix-ui/react-select/dist/index.mjs
var qf = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], Jf = [" ", "Enter"], Yf = "Select", [Xf, Zf, Qf] = Js(Yf), [$f, ep] = A(Yf, [Qf, Yu]), tp = Yu(), [np, rp] = $f(Yf), [ip, ap] = $f(Yf), op = (e) => {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: p, form: m } = e, h = tp(t), [g, _] = q.useState(null), [v, y] = q.useState(null), [b, x] = q.useState(!1), S = ae(l), [C, w] = wd({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: Yf
	}), [T, E] = wd({
		prop: o,
		defaultProp: s,
		onChange: c,
		caller: Yf
	}), D = q.useRef(null), O = g ? m || !!g.closest("form") : !0, [k, A] = q.useState(/* @__PURE__ */ new Set()), j = Array.from(k).map((e) => e.props.value).join(";");
	return /* @__PURE__ */ Q(dd, {
		...h,
		children: /* @__PURE__ */ $(np, {
			required: p,
			scope: t,
			trigger: g,
			onTriggerChange: _,
			valueNode: v,
			onValueNodeChange: y,
			valueNodeHasChildren: b,
			onValueNodeHasChildrenChange: x,
			contentId: Ac(),
			value: T,
			onValueChange: E,
			open: C,
			onOpenChange: w,
			dir: S,
			triggerPointerDownPosRef: D,
			disabled: f,
			children: [/* @__PURE__ */ Q(Xf.Provider, {
				scope: t,
				children: /* @__PURE__ */ Q(ip, {
					scope: e.__scopeSelect,
					onNativeOptionAdd: q.useCallback((e) => {
						A((t) => new Set(t).add(e));
					}, []),
					onNativeOptionRemove: q.useCallback((e) => {
						A((t) => {
							let n = new Set(t);
							return n.delete(e), n;
						});
					}, []),
					children: n
				})
			}), O ? /* @__PURE__ */ $(tm, {
				"aria-hidden": !0,
				required: p,
				tabIndex: -1,
				name: u,
				autoComplete: d,
				value: T,
				onChange: (e) => E(e.target.value),
				disabled: f,
				form: m,
				children: [T === void 0 ? /* @__PURE__ */ Q("option", { value: "" }) : null, Array.from(k)]
			}, j) : null]
		})
	});
};
op.displayName = Yf;
var sp = "SelectTrigger", cp = q.forwardRef((e, t) => {
	let { __scopeSelect: n, disabled: r = !1, ...i } = e, a = tp(n), o = rp(sp, n), s = o.disabled || r, c = D(t, o.onTriggerChange), l = Zf(n), u = q.useRef("touch"), [d, f, p] = rm((e) => {
		let t = l().filter((e) => !e.disabled), n = im(t, e, t.find((e) => e.value === o.value));
		n !== void 0 && o.onValueChange(n.value);
	}), m = (e) => {
		s || (o.onOpenChange(!0), p()), e && (o.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ Q(fd, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ Q(B.button, {
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
			"data-placeholder": nm(o.value) ? "" : void 0,
			...i,
			ref: c,
			onClick: P(i.onClick, (e) => {
				e.currentTarget.focus(), u.current !== "mouse" && m(e);
			}),
			onPointerDown: P(i.onPointerDown, (e) => {
				u.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (m(e), e.preventDefault());
			}),
			onKeyDown: P(i.onKeyDown, (e) => {
				let t = d.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && f(e.key), !(t && e.key === " ") && qf.includes(e.key) && (m(), e.preventDefault());
			})
		})
	});
});
cp.displayName = sp;
var lp = "SelectValue", up = q.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, children: a, placeholder: o = "", ...s } = e, c = rp(lp, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = D(t, c.onValueNodeChange);
	return I(() => {
		l(u);
	}, [l, u]), /* @__PURE__ */ Q(B.span, {
		...s,
		ref: d,
		style: { pointerEvents: "none" },
		children: nm(c.value) ? /* @__PURE__ */ Q(Ft, { children: o }) : a
	});
});
up.displayName = lp;
var dp = "SelectIcon", fp = q.forwardRef((e, t) => {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ Q(B.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
});
fp.displayName = dp;
var pp = "SelectPortal", mp = (e) => /* @__PURE__ */ Q(gd, {
	asChild: !0,
	...e
});
mp.displayName = pp;
var hp = "SelectContent", gp = q.forwardRef((e, t) => {
	let n = rp(hp, e.__scopeSelect), [r, i] = q.useState();
	if (I(() => {
		i(new DocumentFragment());
	}, []), !n.open) {
		let t = r;
		return t ? It.createPortal(/* @__PURE__ */ Q(vp, {
			scope: e.__scopeSelect,
			children: /* @__PURE__ */ Q(Xf.Slot, {
				scope: e.__scopeSelect,
				children: /* @__PURE__ */ Q("div", { children: e.children })
			})
		}), t) : null;
	}
	return /* @__PURE__ */ Q(Sp, {
		...e,
		ref: t
	});
});
gp.displayName = hp;
var _p = 10, [vp, yp] = $f(hp), bp = "SelectContentImpl", xp = /* @__PURE__ */ _d("SelectContent.RemoveScroll"), Sp = q.forwardRef((e, t) => {
	let { __scopeSelect: n, position: r = "item-aligned", onCloseAutoFocus: i, onEscapeKeyDown: a, onPointerDownOutside: o, side: s, sideOffset: c, align: l, alignOffset: u, arrowPadding: d, collisionBoundary: f, collisionPadding: p, sticky: m, hideWhenDetached: h, avoidCollisions: g, ..._ } = e, v = rp(hp, n), [y, b] = q.useState(null), [x, S] = q.useState(null), C = D(t, (e) => b(e)), [w, T] = q.useState(null), [E, O] = q.useState(null), k = Zf(n), [A, j] = q.useState(!1), M = q.useRef(!1);
	q.useEffect(() => {
		if (y) return zd(y);
	}, [y]), uc();
	let N = q.useCallback((e) => {
		let [t, ...n] = k().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && x && (x.scrollTop = 0), n === r && x && (x.scrollTop = x.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [k, x]), ee = q.useCallback(() => N([w, y]), [
		N,
		w,
		y
	]);
	q.useEffect(() => {
		A && ee();
	}, [A, ee]);
	let { onOpenChange: te, triggerPointerDownPosRef: F } = v;
	q.useEffect(() => {
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
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : y.contains(n.target) || te(!1), document.removeEventListener("pointermove", t), F.current = null;
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
		te,
		F
	]), q.useEffect(() => {
		let e = () => te(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [te]);
	let [I, L] = rm((e) => {
		let t = k().filter((e) => !e.disabled), n = im(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current.focus());
	}), ne = q.useCallback((e, t, n) => {
		let r = !M.current && !n;
		(v.value !== void 0 && v.value === t || r) && (T(e), r && (M.current = !0));
	}, [v.value]), re = q.useCallback(() => y?.focus(), [y]), ie = q.useCallback((e, t, n) => {
		let r = !M.current && !n;
		(v.value !== void 0 && v.value === t || r) && O(e);
	}, [v.value]), ae = r === "popper" ? Ep : wp, oe = ae === Ep ? {
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
	return /* @__PURE__ */ Q(vp, {
		scope: n,
		content: y,
		viewport: x,
		onViewportChange: S,
		itemRefCallback: ne,
		selectedItem: w,
		onItemLeave: re,
		itemTextRefCallback: ie,
		focusSelectedItem: ee,
		selectedItemText: E,
		position: r,
		isPositioned: A,
		searchRef: I,
		children: /* @__PURE__ */ Q(Kf, {
			as: xp,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ Q(gc, {
				asChild: !0,
				trapped: v.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: P(i, (e) => {
					v.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ Q(nc, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: a,
					onPointerDownOutside: o,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => v.onOpenChange(!1),
					children: /* @__PURE__ */ Q(ae, {
						role: "listbox",
						id: v.contentId,
						"data-state": v.open ? "open" : "closed",
						dir: v.dir,
						onContextMenu: (e) => e.preventDefault(),
						..._,
						...oe,
						onPlaced: () => j(!0),
						ref: C,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							..._.style
						},
						onKeyDown: P(_.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && L(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = k().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => N(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
Sp.displayName = bp;
var Cp = "SelectItemAlignedPosition", wp = q.forwardRef((e, t) => {
	let { __scopeSelect: n, onPlaced: r, ...i } = e, a = rp(hp, n), o = yp(hp, n), [s, c] = q.useState(null), [l, u] = q.useState(null), d = D(t, (e) => u(e)), f = Zf(n), p = q.useRef(!1), m = q.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: _, focusSelectedItem: v } = o, y = q.useCallback(() => {
		if (a.trigger && a.valueNode && s && l && h && g && _) {
			let e = a.trigger.getBoundingClientRect(), t = l.getBoundingClientRect(), n = a.valueNode.getBoundingClientRect(), i = _.getBoundingClientRect();
			if (a.dir !== "rtl") {
				let r = i.left - t.left, a = n.left - r, o = e.left - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - _p, d = O(a, [_p, Math.max(_p, u - l)]);
				s.style.minWidth = c + "px", s.style.left = d + "px";
			} else {
				let r = t.right - i.right, a = window.innerWidth - n.right - r, o = window.innerWidth - e.right - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - _p, d = O(a, [_p, Math.max(_p, u - l)]);
				s.style.minWidth = c + "px", s.style.right = d + "px";
			}
			let o = f(), c = window.innerHeight - _p * 2, u = h.scrollHeight, d = window.getComputedStyle(l), m = parseInt(d.borderTopWidth, 10), v = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = m + v + u + b + y, S = Math.min(g.offsetHeight * 5, x), C = window.getComputedStyle(h), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - _p, D = c - E, k = g.offsetHeight / 2, A = g.offsetTop + k, j = m + v + A, M = x - j;
			if (j <= E) {
				let e = o.length > 0 && g === o[o.length - 1].ref.current;
				s.style.bottom = "0px";
				let t = l.clientHeight - h.offsetTop - h.offsetHeight, n = j + Math.max(D, k + (e ? T : 0) + t + y);
				s.style.height = n + "px";
			} else {
				let e = o.length > 0 && g === o[0].ref.current;
				s.style.top = "0px";
				let t = Math.max(E, m + h.offsetTop + (e ? w : 0) + k) + M;
				s.style.height = t + "px", h.scrollTop = j - E + h.offsetTop;
			}
			s.style.margin = `${_p}px 0`, s.style.minHeight = S + "px", s.style.maxHeight = c + "px", r?.(), requestAnimationFrame(() => p.current = !0);
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
	I(() => y(), [y]);
	let [b, x] = q.useState();
	return I(() => {
		l && x(window.getComputedStyle(l).zIndex);
	}, [l]), /* @__PURE__ */ Q(Dp, {
		scope: n,
		contentWrapper: s,
		shouldExpandOnScrollRef: p,
		onScrollButtonChange: q.useCallback((e) => {
			e && m.current === !0 && (y(), v?.(), m.current = !1);
		}, [y, v]),
		children: /* @__PURE__ */ Q("div", {
			ref: c,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: b
			},
			children: /* @__PURE__ */ Q(B.div, {
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
wp.displayName = Cp;
var Tp = "SelectPopperPosition", Ep = q.forwardRef((e, t) => {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = _p, ...a } = e;
	return /* @__PURE__ */ Q(pd, {
		...tp(n),
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
Ep.displayName = Tp;
var [Dp, Op] = $f(hp, {}), kp = "SelectViewport", Ap = q.forwardRef((e, t) => {
	let { __scopeSelect: n, nonce: r, ...i } = e, a = yp(kp, n), o = Op(kp, n), s = D(t, a.onViewportChange), c = q.useRef(0);
	return /* @__PURE__ */ $(Ft, { children: [/* @__PURE__ */ Q("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: r
	}), /* @__PURE__ */ Q(Xf.Slot, {
		scope: n,
		children: /* @__PURE__ */ Q(B.div, {
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
			onScroll: P(i.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = o;
				if (r?.current && n) {
					let e = Math.abs(c.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - _p * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
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
Ap.displayName = kp;
var jp = "SelectGroup", [Mp, Np] = $f(jp), Pp = q.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Ac();
	return /* @__PURE__ */ Q(Mp, {
		scope: n,
		id: i,
		children: /* @__PURE__ */ Q(B.div, {
			role: "group",
			"aria-labelledby": i,
			...r,
			ref: t
		})
	});
});
Pp.displayName = jp;
var Fp = "SelectLabel", Ip = q.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Np(Fp, n);
	return /* @__PURE__ */ Q(B.div, {
		id: i.id,
		...r,
		ref: t
	});
});
Ip.displayName = Fp;
var Lp = "SelectItem", [Rp, zp] = $f(Lp), Bp = q.forwardRef((e, t) => {
	let { __scopeSelect: n, value: r, disabled: i = !1, textValue: a, ...o } = e, s = rp(Lp, n), c = yp(Lp, n), l = s.value === r, [u, d] = q.useState(a ?? ""), [f, p] = q.useState(!1), m = D(t, (e) => c.itemRefCallback?.(e, r, i)), h = Ac(), g = q.useRef("touch"), _ = () => {
		i || (s.onValueChange(r), s.onOpenChange(!1));
	};
	if (r === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ Q(Rp, {
		scope: n,
		value: r,
		disabled: i,
		textId: h,
		isSelected: l,
		onItemTextChange: q.useCallback((e) => {
			d((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ Q(Xf.ItemSlot, {
			scope: n,
			value: r,
			disabled: i,
			textValue: u,
			children: /* @__PURE__ */ Q(B.div, {
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
				onFocus: P(o.onFocus, () => p(!0)),
				onBlur: P(o.onBlur, () => p(!1)),
				onClick: P(o.onClick, () => {
					g.current !== "mouse" && _();
				}),
				onPointerUp: P(o.onPointerUp, () => {
					g.current === "mouse" && _();
				}),
				onPointerDown: P(o.onPointerDown, (e) => {
					g.current = e.pointerType;
				}),
				onPointerMove: P(o.onPointerMove, (e) => {
					g.current = e.pointerType, i ? c.onItemLeave?.() : g.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: P(o.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && c.onItemLeave?.();
				}),
				onKeyDown: P(o.onKeyDown, (e) => {
					c.searchRef?.current !== "" && e.key === " " || (Jf.includes(e.key) && _(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
Bp.displayName = Lp;
var Vp = "SelectItemText", Hp = q.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, ...a } = e, o = rp(Vp, n), s = yp(Vp, n), c = zp(Vp, n), l = ap(Vp, n), [u, d] = q.useState(null), f = D(t, (e) => d(e), c.onItemTextChange, (e) => s.itemTextRefCallback?.(e, c.value, c.disabled)), p = u?.textContent, m = q.useMemo(() => /* @__PURE__ */ Q("option", {
		value: c.value,
		disabled: c.disabled,
		children: p
	}, c.value), [
		c.disabled,
		c.value,
		p
	]), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
	return I(() => (h(m), () => g(m)), [
		h,
		g,
		m
	]), /* @__PURE__ */ $(Ft, { children: [/* @__PURE__ */ Q(B.span, {
		id: c.textId,
		...a,
		ref: f
	}), c.isSelected && o.valueNode && !o.valueNodeHasChildren ? It.createPortal(a.children, o.valueNode) : null] });
});
Hp.displayName = Vp;
var Up = "SelectItemIndicator", Wp = q.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return zp(Up, n).isSelected ? /* @__PURE__ */ Q(B.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
});
Wp.displayName = Up;
var Gp = "SelectScrollUpButton", Kp = q.forwardRef((e, t) => {
	let n = yp(Gp, e.__scopeSelect), r = Op(Gp, e.__scopeSelect), [i, a] = q.useState(!1), o = D(t, r.onScrollButtonChange);
	return I(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				a(t.scrollTop > 0);
			}, t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ Q(Yp, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
Kp.displayName = Gp;
var qp = "SelectScrollDownButton", Jp = q.forwardRef((e, t) => {
	let n = yp(qp, e.__scopeSelect), r = Op(qp, e.__scopeSelect), [i, a] = q.useState(!1), o = D(t, r.onScrollButtonChange);
	return I(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight;
				a(Math.ceil(t.scrollTop) < e);
			}, t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ Q(Yp, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
Jp.displayName = qp;
var Yp = q.forwardRef((e, t) => {
	let { __scopeSelect: n, onAutoScroll: r, ...i } = e, a = yp("SelectScrollButton", n), o = q.useRef(null), s = Zf(n), c = q.useCallback(() => {
		o.current !== null && (window.clearInterval(o.current), o.current = null);
	}, []);
	return q.useEffect(() => () => c(), [c]), I(() => {
		s().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [s]), /* @__PURE__ */ Q(B.div, {
		"aria-hidden": !0,
		...i,
		ref: t,
		style: {
			flexShrink: 0,
			...i.style
		},
		onPointerDown: P(i.onPointerDown, () => {
			o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerMove: P(i.onPointerMove, () => {
			a.onItemLeave?.(), o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerLeave: P(i.onPointerLeave, () => {
			c();
		})
	});
}), Xp = "SelectSeparator", Zp = q.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ Q(B.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
});
Zp.displayName = Xp;
var Qp = "SelectArrow", $p = q.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = tp(n), a = rp(Qp, n), o = yp(Qp, n);
	return a.open && o.position === "popper" ? /* @__PURE__ */ Q(md, {
		...i,
		...r,
		ref: t
	}) : null;
});
$p.displayName = Qp;
var em = "SelectBubbleInput", tm = q.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
	let i = q.useRef(null), a = D(r, i), o = Dd(t);
	return q.useEffect(() => {
		let e = i.current;
		if (!e) return;
		let n = window.HTMLSelectElement.prototype, r = Object.getOwnPropertyDescriptor(n, "value").set;
		if (o !== t && r) {
			let n = new Event("change", { bubbles: !0 });
			r.call(e, t), e.dispatchEvent(n);
		}
	}, [o, t]), /* @__PURE__ */ Q(B.select, {
		...n,
		style: {
			...Od,
			...n.style
		},
		ref: a,
		defaultValue: t
	});
});
tm.displayName = em;
function nm(e) {
	return e === "" || e === void 0;
}
function rm(e) {
	let t = R(e), n = q.useRef(""), r = q.useRef(0), i = q.useCallback((e) => {
		let i = n.current + e;
		t(i), (function e(t) {
			n.current = t, window.clearTimeout(r.current), t !== "" && (r.current = window.setTimeout(() => e(""), 1e3));
		})(i);
	}, [t]), a = q.useCallback(() => {
		n.current = "", window.clearTimeout(r.current);
	}, []);
	return q.useEffect(() => () => window.clearTimeout(r.current), []), [
		n,
		i,
		a
	];
}
function im(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = am(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function am(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var om = op, sm = cp, cm = up, lm = fp, um = mp, dm = gp, fm = Ap, pm = Bp, mm = Hp, hm = Wp;
//#endregion
//#region components/ui/select.tsx
function gm({ modal: e = !1, ...t }) {
	return /* @__PURE__ */ Q(om, {
		modal: e,
		...t
	});
}
var _m = cm, vm = q.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ $(sm, {
	ref: r,
	className: U("flex h-9 w-full items-center justify-between gap-2 rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2 text-sm text-wx-fg", "placeholder:text-wx-fg-subtle", "focus:border-wx-primary focus:outline-none focus:ring-2 focus:ring-wx-primary/20", "disabled:cursor-not-allowed disabled:bg-wx-bg-elevated/60 disabled:text-wx-fg-muted", "[&>span]:line-clamp-1", e),
	...n,
	children: [t, /* @__PURE__ */ Q(lm, {
		asChild: !0,
		children: /* @__PURE__ */ Q(k, {
			size: 14,
			className: "opacity-60",
			"aria-hidden": "true"
		})
	})]
}));
vm.displayName = sm.displayName;
var ym = q.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, i) => /* @__PURE__ */ Q(um, {
	container: p().themeRoot ?? void 0,
	children: /* @__PURE__ */ Q(dm, {
		ref: i,
		position: n,
		className: U("relative z-2147483602 max-h-72 min-w-32 overflow-hidden rounded-wx-sm border border-wx-border bg-wx-bg text-wx-fg shadow-lg", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1", e),
		...r,
		children: /* @__PURE__ */ Q(fm, {
			className: U("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children: t
		})
	})
}));
ym.displayName = dm.displayName;
var bm = q.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ $(pm, {
	ref: r,
	className: U("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-2 pl-7 text-sm outline-none", "focus:bg-wx-bg-elevated focus:text-wx-fg", "data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "data-[state=checked]:font-medium", e),
	...n,
	children: [/* @__PURE__ */ Q("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ Q(hm, { children: /* @__PURE__ */ Q(fe, {
			size: 12,
			className: "text-wx-primary",
			"aria-hidden": "true"
		}) })
	}), /* @__PURE__ */ Q(mm, { children: t })]
}));
bm.displayName = pm.displayName;
//#endregion
//#region components/widget/tabs/profile-tab/system-field-labels.ts
function xm(e) {
	return e.replace(/_([a-z])/g, (e, t) => t.toUpperCase());
}
var Sm = new Set(/* @__PURE__ */ "avatar.wexioId.telegramId.whatsappId.viberId.instagramId.optInWhatsapp.webVerified.firstName.lastName.username.language.email.phone.company.location.isValid.chatStatus.chatCategory.priority.leadSource.leadStatus.interestLevel.productInterest.budgetRange.purchaseTimeline.lastMessageSentAt.lastMessageReceivedAt.lastSeenAt.firstMessageReceivedAt.isBlocked.registrationDate.aiAvailable.totalMessagesSent.totalMessagesReceived.totalAiMessagesSent.totalBotMessagesSent.totalUserMessagesSent.flowCompletionRate.lastFlowCompleted.totalFlowsStarted.totalFlowsCompleted".split(".")), Cm = new Set([
	"chatStatus",
	"chatCategory",
	"priority",
	"leadStatus",
	"interestLevel"
]);
function wm(e, t, n) {
	let r = xm(e);
	return Sm.has(r) ? n(`systemFields.${r}`) : t;
}
function Tm(e, t, n) {
	let r = xm(e);
	return Cm.has(r) ? n(`systemFieldOptions.${r}.${t}`) : Om(t);
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/options-control.tsx
function Em({ id: e, fieldKey: t, mode: n, options: r, value: i, disabled: a, onChange: o, t: s }) {
	return r.length === 0 ? /* @__PURE__ */ Q("p", {
		id: e,
		className: "text-[11px] text-wx-fg-subtle italic",
		children: "No options configured."
	}) : /* @__PURE__ */ $(gm, {
		value: (n === "single" ? i ?? "" : Rs(i)[0] ?? "") || void 0,
		disabled: a,
		onValueChange: (e) => {
			if (e === "__clear__" || !e) {
				o(null);
				return;
			}
			o(n === "single" ? e : JSON.stringify([e]));
		},
		children: [/* @__PURE__ */ Q(vm, {
			id: e,
			"aria-label": "Select an option",
			children: /* @__PURE__ */ Q(_m, { placeholder: "—" })
		}), /* @__PURE__ */ $(ym, { children: [/* @__PURE__ */ Q(bm, {
			value: "__clear__",
			children: "—"
		}), r.map((e) => /* @__PURE__ */ Q(bm, {
			value: e,
			children: Tm(t, e, s)
		}, e))] })]
	});
}
var Dm = new Set([
	"URL",
	"ID",
	"AI",
	"API",
	"VIP",
	"CRM",
	"SMS"
]);
function Om(e) {
	if (!e) return e;
	let t = e.replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(/[\s_-]+/).filter(Boolean);
	return t.length === 0 ? e : t.map((e, t) => {
		let n = e.toUpperCase();
		if (Dm.has(n)) return n;
		let r = e.toLowerCase();
		return t === 0 ? r.charAt(0).toUpperCase() + r.slice(1) : r;
	}).join(" ");
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/string-control.tsx
function km({ id: e, fieldKey: t, value: n, disabled: r, onChange: i }) {
	return /* @__PURE__ */ Q("input", {
		id: e,
		type: t === "email" ? "email" : t === "phone" ? "tel" : "text",
		value: n ?? "",
		disabled: r,
		autoComplete: t === "email" ? "email" : t === "phone" ? "tel" : t === "firstName" ? "given-name" : t === "lastName" ? "family-name" : void 0,
		placeholder: t === "phone" ? "+1 555 123 4567" : void 0,
		onChange: (e) => i(e.target.value || null),
		className: zs
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/index.tsx
function Am({ id: e, field: t, value: n, onChange: r, t: i }) {
	let a = t.pinned;
	switch (t.type) {
		case "BOOLEAN": return /* @__PURE__ */ Q(js, {
			id: e,
			value: n,
			disabled: a,
			onChange: r
		});
		case "NUMBER": return /* @__PURE__ */ Q(Vs, {
			id: e,
			value: n,
			disabled: a,
			onChange: r
		});
		case "DATE": return /* @__PURE__ */ Q(Bs, {
			id: e,
			value: n,
			disabled: a,
			onChange: r
		});
		case "ENUM": return /* @__PURE__ */ Q(Em, {
			id: e,
			fieldKey: t.key,
			mode: "single",
			options: t.options ?? [],
			value: n,
			disabled: a,
			onChange: r,
			t: i
		});
		case "ARRAY": return /* @__PURE__ */ Q(Em, {
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
		default: return /* @__PURE__ */ Q(km, {
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
function jm({ field: e, value: t, onChange: n, error: r, t: i }) {
	let a = e.pinned, o = `wx-profile-${e.key}`;
	return /* @__PURE__ */ $("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ $("label", {
				htmlFor: o,
				className: "flex items-baseline justify-between gap-2 text-xs font-medium text-wx-fg-muted",
				children: [/* @__PURE__ */ $("span", {
					className: "inline-flex items-center gap-1",
					children: [
						wm(e.key, e.label, i),
						e.required && /* @__PURE__ */ $("span", {
							className: "text-wx-danger",
							title: i("requiredHint"),
							children: ["*", /* @__PURE__ */ Q("span", {
								className: "sr-only",
								children: i("requiredHint")
							})]
						}),
						a && /* @__PURE__ */ Q(Lr, {
							size: 11,
							"aria-hidden": "true",
							className: "text-wx-fg-subtle"
						})
					]
				}), a && /* @__PURE__ */ Q("span", {
					className: "text-[10px] font-normal text-wx-fg-subtle",
					children: i("pinnedHint")
				})]
			}),
			/* @__PURE__ */ Q(Am, {
				id: o,
				field: e,
				value: t,
				onChange: n,
				t: i
			}),
			r && /* @__PURE__ */ Q("p", {
				className: "text-[11px] text-wx-danger",
				children: r
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/section.tsx
function Mm({ eyebrow: e, adornment: t, children: n }) {
	return /* @__PURE__ */ $("section", {
		className: "mt-6 flex flex-col gap-4 border-wx-border border-t pt-5 first:mt-4 first:border-t-0 first:pt-0",
		children: [/* @__PURE__ */ $("div", {
			className: "flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ Q("h2", {
				className: "text-[11px] font-semibold tracking-[0.08em] text-wx-fg-subtle uppercase",
				children: e
			}), t]
		}), /* @__PURE__ */ Q("div", {
			className: "flex flex-col gap-4",
			children: n
		})]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/settings-row.tsx
function Nm({ label: e, hint: t, children: n }) {
	return /* @__PURE__ */ $("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ $("div", {
			className: "flex min-w-0 flex-col",
			children: [/* @__PURE__ */ Q("span", {
				className: "text-sm font-medium text-wx-fg",
				children: e
			}), t && /* @__PURE__ */ Q("span", {
				className: "text-[11px] text-wx-fg-muted",
				children: t
			})]
		}), /* @__PURE__ */ Q("div", {
			className: "shrink-0",
			children: n
		})]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/preferences-section.tsx
var Pm = [
	{
		value: "system",
		icon: Hr,
		labelKey: "themeAuto"
	},
	{
		value: "light",
		icon: $r,
		labelKey: "themeLight"
	},
	{
		value: "dark",
		icon: Ur,
		labelKey: "themeDark"
	}
];
function Fm({ profile: e, locale: t, themeMode: n, prefSaving: r, applyPref: i, onNotificationError: a, t: o }) {
	let s = er, c = n === "auto";
	return /* @__PURE__ */ $(Mm, {
		eyebrow: o("preferencesHeading"),
		adornment: r ? /* @__PURE__ */ $("span", {
			className: "inline-flex items-center gap-1 text-[10px] font-normal text-wx-fg-subtle",
			children: [/* @__PURE__ */ Q(Ge, {
				size: 10,
				className: "animate-spin",
				"aria-hidden": "true"
			}), o("saving")]
		}) : void 0,
		children: [
			/* @__PURE__ */ Q(Nm, {
				label: o("preferenceLanguage"),
				children: /* @__PURE__ */ Q("div", {
					className: "w-40",
					children: /* @__PURE__ */ $(gm, {
						value: e.preferences.language ?? t,
						disabled: r === "language",
						onValueChange: (e) => i("language", e || null),
						children: [/* @__PURE__ */ Q(vm, {
							"aria-label": o("preferenceLanguage"),
							children: /* @__PURE__ */ Q(_m, {})
						}), /* @__PURE__ */ Q(ym, { children: s.map((e) => /* @__PURE__ */ Q(bm, {
							value: e,
							children: z(e)
						}, e)) })]
					})
				})
			}),
			c && /* @__PURE__ */ Q(Nm, {
				label: o("preferenceThemeMode"),
				children: /* @__PURE__ */ Q("div", {
					className: "inline-flex items-center gap-0.5 rounded-full bg-wx-bg-elevated p-0.5",
					children: Pm.map(({ value: t, icon: n, labelKey: a }) => {
						let s = (e.preferences.themeMode ?? "system") === t;
						return /* @__PURE__ */ Q("button", {
							type: "button",
							"aria-pressed": s,
							"aria-label": o(a),
							title: o(a),
							disabled: r === "themeMode",
							onClick: () => i("themeMode", t),
							className: U("flex h-7 w-9 items-center justify-center rounded-full transition-all", s ? "bg-wx-bg text-wx-fg shadow-[0_1px_3px_rgba(0,0,0,0.08)]" : "text-wx-fg-muted hover:text-wx-fg", "disabled:cursor-not-allowed disabled:opacity-50"),
							children: /* @__PURE__ */ Q(n, {
								size: 13,
								"aria-hidden": "true"
							})
						}, t);
					})
				})
			}),
			/* @__PURE__ */ Q(Nm, {
				label: o("preferenceDesktopNotifications"),
				hint: o("preferenceDesktopNotificationsHint"),
				children: /* @__PURE__ */ Q(As, {
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
function Im(e) {
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
function Lm(e) {
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
function Rm(e) {
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
function zm(e, t) {
	let [n] = Dn(), [r, i] = Z(null), [a, o] = Z(null), s = J(() => o(null), []);
	return {
		apply: J(async (r, a) => {
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
							query: wn,
							data: { visitorProfile: n }
						});
					}
				}), r === "language" && typeof a == "string" && ir(a);
			} catch (e) {
				o(t(Rm(Im(e))));
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
var Bm = {
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
function Vm(e, t) {
	var n = Array.prototype.slice.call(t);
	return n.push(Bm), e.apply(this, n);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/tools/semver-compare.js
function Hm(e, t) {
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
var Um = {}.constructor;
function Wm(e) {
	return e != null && e.constructor === Um;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/isCallingCode.js
var Gm = /^\d+$/;
function Km(e) {
	return Gm.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/metadata.js
function qm(e) {
	"@babel/helpers - typeof";
	return qm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, qm(e);
}
function Jm(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Ym(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Zm(r.key), r);
	}
}
function Xm(e, t, n) {
	return t && Ym(e.prototype, t), n && Ym(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Zm(e) {
	var t = Qm(e, "string");
	return qm(t) == "symbol" ? t : t + "";
}
function Qm(e, t) {
	if (qm(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (qm(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var $m = "1.2.0", eh = "1.7.35", th = " ext. ", nh = /* @__PURE__ */ function() {
	function e(t) {
		Jm(this, e), ch(t), this.metadata = t, fh.call(this, t);
	}
	return Xm(e, [
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
				if (e && (Km(e) ? r = e : n = e), t && (r = t), n && n !== "001") {
					var i = this.getCountryMetadata(n);
					if (!i) throw Error(`Unknown country: ${n}`);
					this.numberingPlan = new rh(i, this);
				} else if (r) {
					if (!this.hasCallingCode(r)) throw Error(`Unknown calling code: ${r}`);
					this.numberingPlan = new rh(this.getNumberingPlanMetadata(r), this);
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
}(), rh = /* @__PURE__ */ function() {
	function e(t, n) {
		Jm(this, e), this.globalMetadataObject = n, this.metadata = t, fh.call(this, n.metadata);
	}
	return Xm(e, [
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
					return new ih(t, e);
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
				if (this.hasTypes() && sh(this.types(), e)) return new oh(sh(this.types(), e), this);
			}
		},
		{
			key: "ext",
			value: function() {
				return this.v1 || this.v2 ? th : this.metadata[13] || th;
			}
		}
	]);
}(), ih = /* @__PURE__ */ function() {
	function e(t, n) {
		Jm(this, e), this._format = t, this.metadata = n;
	}
	return Xm(e, [
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
				return !!(this.nationalPrefixFormattingRule() && !ah.test(this.nationalPrefixFormattingRule()));
			}
		},
		{
			key: "internationalFormat",
			value: function() {
				return this._format[5] || this.format();
			}
		}
	]);
}(), ah = /^\(?\$1\)?$/, oh = /* @__PURE__ */ function() {
	function e(t, n) {
		Jm(this, e), this.type = t, this.metadata = n;
	}
	return Xm(e, [{
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
function sh(e, t) {
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
function ch(e) {
	if (!e) throw Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
	if (!Wm(e) || !Wm(e.countries)) throw Error(`[libphonenumber-js] \`metadata\` argument was passed but it's not a valid metadata. Must be an object having \`.countries\` child object property. Got ${Wm(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + lh(e) + ": " + e}.`);
}
/* istanbul ignore next */
var lh = function(e) {
	return qm(e);
};
function uh(e, t) {
	var n = new nh(t);
	if (n.hasCountry(e)) return n.selectNumberingPlan(e).countryCallingCode();
	throw Error(`Unknown country: ${e}`);
}
function dh(e, t) {
	return t.countries.hasOwnProperty(e);
}
function fh(e) {
	var t = e.version;
	typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? Hm(t, $m) === -1 ? this.v2 = !0 : Hm(t, eh) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
function ph(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = mh(e)) || t && e && typeof e.length == "number") {
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
function mh(e, t) {
	if (e) {
		if (typeof e == "string") return hh(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hh(e, t) : void 0;
	}
}
function hh(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function gh(e, t) {
	for (var n = e.slice(), r = ph(t), i; !(i = r()).done;) {
		var a = i.value;
		e.indexOf(a) < 0 && n.push(a);
	}
	return n.sort(function(e, t) {
		return e - t;
	});
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
function _h(e, t, n) {
	return vh(e, void 0, t, n);
}
function vh(e, t, n, r) {
	n && (r = new nh(r.metadata), r.selectNumberingPlan(n));
	var i = r.type(t), a = i && i.possibleLengths() || r.possibleLengths();
	if (!a) return "IS_POSSIBLE";
	if (t === "FIXED_LINE_OR_MOBILE") {
		/* istanbul ignore next */
		if (!r.type("FIXED_LINE")) return vh(e, "MOBILE", n, r);
		var o = r.type("MOBILE");
		o && (a = gh(a, o.possibleLengths()));
	} else if (t && !i) return "INVALID_LENGTH";
	var s = e.length, c = a[0];
	return c === s ? "IS_POSSIBLE" : c > s ? "TOO_SHORT" : a[a.length - 1] < s ? "TOO_LONG" : a.indexOf(s, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
//#endregion
//#region node_modules/libphonenumber-js/es6/isPossible.js
function yh(e, t, n) {
	/* istanbul ignore if */
	t === void 0 && (t = {});
	var r = new nh(n);
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
	if (r.possibleLengths()) return bh(e.phone || e.nationalNumber, r);
	if (e.countryCallingCode && r.isNonGeographicCallingCode(e.countryCallingCode)) return !0;
	throw Error("Missing \"possibleLengths\" in metadata. Perhaps the metadata has been generated before v1.0.18.");
}
function bh(e, t) {
	switch (_h(e, void 0, t)) {
		case "IS_POSSIBLE": return !0;
		default: return !1;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
function xh(e, t) {
	return e = e || "", RegExp("^(?:" + t + ")$").test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getNumberType.js
function Sh(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = Ch(e)) || t && e && typeof e.length == "number") {
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
function Ch(e, t) {
	if (e) {
		if (typeof e == "string") return wh(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wh(e, t) : void 0;
	}
}
function wh(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var Th = [
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
function Eh(e, t, n) {
	if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
		var r = new nh(n);
		r.selectNumberingPlan(e.country || e.countryCallingCode);
		var i = t.v2 ? e.nationalNumber : e.phone;
		if (xh(i, r.nationalNumberPattern())) {
			if (Dh(i, "FIXED_LINE", r)) return r.type("MOBILE") && r.type("MOBILE").pattern() === "" || !r.type("MOBILE") || Dh(i, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
			for (var a = Sh(Th), o; !(o = a()).done;) {
				var s = o.value;
				if (Dh(i, s, r)) return s;
			}
		}
	}
}
function Dh(e, t, n) {
	var r = n.type(t);
	return !r || !r.pattern() || r.possibleLengths() && r.possibleLengths().indexOf(e.length) < 0 ? !1 : xh(e, r.pattern());
}
//#endregion
//#region node_modules/libphonenumber-js/es6/isValid.js
function Oh(e, t, n) {
	t = t || {};
	var r = new nh(n);
	return r.selectNumberingPlan(e.country || e.countryCallingCode), r.hasTypes() ? Eh(e, t, r.metadata) !== void 0 : xh(t.v2 ? e.nationalNumber : e.phone, r.nationalNumberPattern());
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/isCountryCode.js
var kh = /^[A-Z]{2}$/;
function Ah(e) {
	return kh.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getCountryAndCallingCodeFromOneOfThem.js
var jh = !1;
function Mh(e, t) {
	var n, r, i = new nh(t);
	return Ah(e) ? (n = e, i.selectNumberingPlan(n), r = i.countryCallingCode()) : (r = e, jh && i.isNonGeographicCallingCode(r) && (n = "001")), {
		country: n,
		callingCode: r
	};
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
function Nh(e, t, n) {
	var r = new nh(n).getCountryCodesForCallingCode(e);
	return r ? r.filter(function(e) {
		return Ph(t, e, n);
	}) : [];
}
function Ph(e, t, n) {
	var r = new nh(n);
	return r.selectNumberingPlan(t), r.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/constants.js
var Fh = "0-9０-９٠-٩۰-۹", Ih = "-‐-―−ー－／/．. \xA0­​⁠　()（）［］\\[\\]~⁓∼～", Lh = "+＋", Rh = RegExp("([" + Fh + "])");
function zh(e, t, n, r) {
	if (t) {
		var i = new nh(r);
		i.selectNumberingPlan(t || n);
		var a = new RegExp(i.IDDPrefix());
		if (e.search(a) === 0) {
			e = e.slice(e.match(a)[0].length);
			var o = e.match(Rh);
			if (!(o && o[1] != null && o[1].length > 0 && o[1] === "0")) return e;
		}
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
function Bh(e, t) {
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
function Vh(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = Hh(e)) || t && e && typeof e.length == "number") {
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
function Hh(e, t) {
	if (e) {
		if (typeof e == "string") return Uh(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Uh(e, t) : void 0;
	}
}
function Uh(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Wh(e, t, n) {
	for (var r = new nh(n), i = Vh(t), a; !(a = i()).done;) {
		var o = a.value;
		if (r.selectNumberingPlan(o), r.leadingDigits()) {
			if (e && e.search(r.leadingDigits()) === 0) return o;
		} else if (Eh({
			phone: e,
			country: o
		}, void 0, r.metadata)) return o;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
var Gh = !1;
function Kh(e, t) {
	var n = t.nationalNumber, r = t.metadata;
	/* istanbul ignore if */
	if (Gh && r.isNonGeographicCallingCode(e)) return "001";
	var i = r.getCountryCodesForCallingCode(e);
	if (i) return i.length === 1 ? i[0] : Wh(n, i, r.metadata);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
function qh(e, t, n) {
	var r = Bh(e, n), i = r.carrierCode, a = r.nationalNumber;
	return a !== e && (!Jh(e, a, n) || n.numberingPlan.possibleLengths() && (t || (t = Kh(n.numberingPlan.callingCode(), {
		nationalNumber: a,
		metadata: n
	})), !Yh(a, t, n))) ? { nationalNumber: e } : {
		nationalNumber: a,
		carrierCode: i
	};
}
function Jh(e, t, n) {
	return !(xh(e, n.nationalNumberPattern()) && !xh(t, n.nationalNumberPattern()));
}
function Yh(e, t, n) {
	switch (_h(e, t, n)) {
		case "TOO_SHORT":
		case "INVALID_LENGTH": return !1;
		default: return !0;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
function Xh(e, t, n, r, i) {
	if (!(t || n || r)) return { number: e };
	var a = t || n ? uh(t || n, i) : r;
	if (e.indexOf(a) === 0) {
		var o = new nh(i);
		o.selectNumberingPlan(t || n || r);
		var s = e.slice(a.length), c = qh(s, void 0, o).nationalNumber, l = qh(e, void 0, o).nationalNumber;
		if (!xh(l, o.nationalNumberPattern()) && xh(c, o.nationalNumberPattern()) || _h(l, void 0, o) === "TOO_LONG") return {
			countryCallingCode: a,
			number: s
		};
	}
	return { number: e };
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
function Zh(e, t, n, r, i) {
	if (!e) return {};
	var a;
	if (e[0] !== "+") {
		var o = zh(e, t || n, r, i);
		if (o && o !== e) a = !0, e = "+" + o;
		else {
			if (t || n || r) {
				var s = Xh(e, t, n, r, i), c = s.countryCallingCode, l = s.number;
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
	for (var u = new nh(i), d = 2; d - 1 <= 3 && d <= e.length;) {
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
function Qh(e) {
	return e.replace(RegExp(`[${Ih}]+`, "g"), " ").trim();
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
var $h = /(\$\d)/;
function eg(e, t, n) {
	var r = n.useInternationalFormat, i = n.withNationalPrefix;
	n.carrierCode, n.metadata;
	var a = e.replace(new RegExp(t.pattern()), r ? t.internationalFormat() : i && t.nationalPrefixFormattingRule() ? t.format().replace($h, t.nationalPrefixFormattingRule()) : t.format());
	return r ? Qh(a) : a;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
var tg = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function ng(e, t, n) {
	var r = new nh(n);
	if (r.selectNumberingPlan(e || t), r.defaultIDDPrefix()) return r.defaultIDDPrefix();
	if (tg.test(r.IDDPrefix())) return r.IDDPrefix();
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
var rg = ";ext=", ig = function(e) {
	return `([${Fh}]{1,${e}})`;
};
function ag(e) {
	var t = "20", n = "15", r = "9", i = "6", a = "[ \xA0\\t,]*", o = "[:\\.．]?[ \xA0\\t,-]*", s = "#?", c = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", l = "(?:[xｘ#＃~～]|int|ｉｎｔ)", u = "[- ]+", d = "[ \xA0\\t]*", f = "(?:,{2}|;)", p = rg + ig(t), m = a + c + o + ig(t) + s, h = a + l + o + ig(r) + s, g = u + ig(i) + "#", _ = d + f + o + ig(n) + s, v = d + "(?:,)+" + o + ig(r) + s;
	return p + "|" + m + "|" + h + "|" + g + "|" + _ + "|" + v;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
var og = "[" + Fh + "]{2}", sg = "[" + Lh + "]{0,1}(?:[" + Ih + "]*[" + Fh + "]){3,}[" + Ih + Fh + "]*", cg = RegExp("^[" + Lh + "]{0,1}(?:[" + Ih + "]*[" + Fh + "]){1,2}$", "i"), lg = sg + "(?:" + ag() + ")?", ug = RegExp("^" + og + "$|^" + lg + "$", "i");
function dg(e) {
	return e.length >= 2 && ug.test(e);
}
function fg(e) {
	return cg.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/RFC3966.js
function pg(e) {
	var t = e.number, n = e.ext;
	if (!t) return "";
	if (t[0] !== "+") throw Error("\"formatRFC3966()\" expects \"number\" to be in E.164 format.");
	return `tel:${t}${n ? ";ext=" + n : ""}`;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/format.js
var mg = { formatExtension: function(e, t, n) {
	return `${e}${n.ext()}${t}`;
} };
function hg(e, t, n, r) {
	n = n ? bg({}, mg, n) : mg;
	var i = new nh(r);
	if (e.country && e.country !== "001") {
		if (!i.hasCountry(e.country)) throw Error(`Unknown country: ${e.country}`);
		i.selectNumberingPlan(e.country);
	} else if (e.countryCallingCode) i.selectNumberingPlan(e.countryCallingCode);
	else return e.phone || "";
	var a = i.countryCallingCode(), o = n.v2 ? e.nationalNumber : e.phone, s;
	switch (t) {
		case "NATIONAL": return o ? (s = gg(o, e.carrierCode, "NATIONAL", i, n), vg(s, e.ext, i, n.formatExtension)) : "";
		case "INTERNATIONAL": return o ? (s = gg(o, null, "INTERNATIONAL", i, n), s = `+${a} ${s}`, vg(s, e.ext, i, n.formatExtension)) : `+${a}`;
		case "E.164": return `+${a}${o}`;
		case "RFC3966": return pg({
			number: `+${a}${o}`,
			ext: e.ext
		});
		case "IDD":
			if (!n.fromCountry) return;
			var c = yg(o, e.carrierCode, a, n.fromCountry, i);
			return c ? vg(c, e.ext, i, n.formatExtension) : void 0;
		default: throw Error(`Unknown "format" argument passed to "formatNumber()": "${t}"`);
	}
}
function gg(e, t, n, r, i) {
	var a = _g(r.formats(), e);
	return a ? eg(e, a, {
		useInternationalFormat: n === "INTERNATIONAL",
		withNationalPrefix: !(a.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && i && i.nationalPrefix === !1),
		carrierCode: t,
		metadata: r
	}) : e;
}
function _g(e, t) {
	return xg(e, function(e) {
		if (e.leadingDigitsPatterns().length > 0) {
			var n = e.leadingDigitsPatterns()[e.leadingDigitsPatterns().length - 1];
			if (t.search(n) !== 0) return !1;
		}
		return xh(t, e.pattern());
	});
}
function vg(e, t, n, r) {
	return t ? r(e, t, n) : e;
}
function yg(e, t, n, r, i) {
	if (uh(r, i.metadata) === n) {
		var a = gg(e, t, "NATIONAL", i);
		return n === "1" ? n + " " + a : a;
	}
	var o = ng(r, void 0, i.metadata);
	if (o) return `${o} ${n} ${gg(e, null, "INTERNATIONAL", i)}`;
}
function bg() {
	for (var e = 1, t = [...arguments]; e < t.length;) {
		if (t[e]) for (var n in t[e]) t[0][n] = t[e][n];
		e++;
	}
	return t[0];
}
function xg(e, t) {
	for (var n = 0; n < e.length;) {
		if (t(e[n])) return e[n];
		n++;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/PhoneNumber.js
function Sg(e) {
	"@babel/helpers - typeof";
	return Sg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Sg(e);
}
function Cg(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function wg(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Cg(Object(n), !0).forEach(function(t) {
			Tg(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cg(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Tg(e, t, n) {
	return (t = kg(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Eg(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Dg(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, kg(r.key), r);
	}
}
function Og(e, t, n) {
	return t && Dg(e.prototype, t), n && Dg(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function kg(e) {
	var t = Ag(e, "string");
	return Sg(t) == "symbol" ? t : t + "";
}
function Ag(e, t) {
	if (Sg(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Sg(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var jg = /* @__PURE__ */ function() {
	function e(t, n, r) {
		if (Eg(this, e), !t) throw TypeError("First argument is required");
		if (typeof t != "string") throw TypeError("First argument must be a string");
		if (t[0] === "+" && !n) throw TypeError("`metadata` argument not passed");
		if (Wm(n) && Wm(n.countries)) {
			r = n;
			var i = t;
			if (!Mg.test(i)) throw Error("Invalid `number` argument passed: must consist of a \"+\" followed by digits");
			var a = Zh(i, void 0, void 0, void 0, r), o = a.countryCallingCode;
			if (n = a.number, t = o, !n) throw Error("Invalid `number` argument passed: too short");
		}
		if (!n) throw TypeError("`nationalNumber` argument is required");
		if (typeof n != "string") throw TypeError("`nationalNumber` argument must be a string");
		ch(r);
		var s = Mh(t, r), c = s.country, l = s.callingCode;
		this.country = c, this.countryCallingCode = l, this.nationalNumber = n, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
			return r;
		};
	}
	return Og(e, [
		{
			key: "setExt",
			value: function(e) {
				this.ext = e;
			}
		},
		{
			key: "getPossibleCountries",
			value: function() {
				return this.country ? [this.country] : Nh(this.countryCallingCode, this.nationalNumber, this.getMetadata());
			}
		},
		{
			key: "isPossible",
			value: function() {
				return yh(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "isValid",
			value: function() {
				return Oh(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "isNonGeographic",
			value: function() {
				return new nh(this.getMetadata()).isNonGeographicCallingCode(this.countryCallingCode);
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
				return Eh(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "format",
			value: function(e, t) {
				return hg(this, e, t ? wg(wg({}, t), {}, { v2: !0 }) : { v2: !0 }, this.getMetadata());
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
}(), Mg = /^\+\d+$/;
//#endregion
//#region node_modules/libphonenumber-js/es6/ParseError.js
function Ng(e) {
	"@babel/helpers - typeof";
	return Ng = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ng(e);
}
function Pg(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ig(r.key), r);
	}
}
function Fg(e, t, n) {
	return t && Pg(e.prototype, t), n && Pg(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ig(e) {
	var t = Lg(e, "string");
	return Ng(t) == "symbol" ? t : t + "";
}
function Lg(e, t) {
	if (Ng(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ng(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Rg(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function zg(e, t, n) {
	return t = Jg(t), Bg(e, Gg() ? Reflect.construct(t, n || [], Jg(e).constructor) : t.apply(e, n));
}
function Bg(e, t) {
	if (t && (Ng(t) == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Vg(e);
}
function Vg(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Hg(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qg(e, t);
}
function Ug(e) {
	var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
	return Ug = function(e) {
		if (e === null || !Kg(e)) return e;
		if (typeof e != "function") throw TypeError("Super expression must either be null or a function");
		if (t !== void 0) {
			if (t.has(e)) return t.get(e);
			t.set(e, n);
		}
		function n() {
			return Wg(e, arguments, Jg(this).constructor);
		}
		return n.prototype = Object.create(e.prototype, { constructor: {
			value: n,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), qg(n, e);
	}, Ug(e);
}
function Wg(e, t, n) {
	if (Gg()) return Reflect.construct.apply(null, arguments);
	var r = [null];
	r.push.apply(r, t);
	var i = new (e.bind.apply(e, r))();
	return n && qg(i, n.prototype), i;
}
function Gg() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Gg = function() {
		return !!e;
	})();
}
function Kg(e) {
	try {
		return Function.toString.call(e).indexOf("[native code]") !== -1;
	} catch {
		return typeof e == "function";
	}
}
function qg(e, t) {
	return qg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, qg(e, t);
}
function Jg(e) {
	return Jg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Jg(e);
}
var Yg = /* @__PURE__ */ function(e) {
	function t(e) {
		var n;
		return Rg(this, t), n = zg(this, t, [e]), Object.setPrototypeOf(n, t.prototype), n.name = n.constructor.name, n;
	}
	return Hg(t, e), Fg(t);
}(/* @__PURE__ */ Ug(Error)), Xg = RegExp("(?:" + ag() + ")$", "i");
function Zg(e) {
	var t = e.search(Xg);
	if (t < 0) return {};
	for (var n = e.slice(0, t), r = e.match(Xg), i = 1; i < r.length;) {
		if (r[i]) return {
			number: n,
			ext: r[i]
		};
		i++;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/parseDigits.js
var Qg = {
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
function $g(e) {
	return Qg[e];
}
//#endregion
//#region node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
function e_(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = t_(e)) || t && e && typeof e.length == "number") {
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
function t_(e, t) {
	if (e) {
		if (typeof e == "string") return n_(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? n_(e, t) : void 0;
	}
}
function n_(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function r_(e) {
	for (var t = "", n = e_(e.split("")), r; !(r = n()).done;) {
		var i = r.value;
		t += i_(i, t) || "";
	}
	return t;
}
function i_(e, t, n) {
	if (e === "+") {
		if (t) {
			typeof n == "function" && n("end");
			return;
		}
		return "+";
	}
	return $g(e);
}
var a_ = "([" + Fh + "]|[\\-\\.\\(\\)]?)", o_ = "^\\+" + a_ + "*[" + Fh + "]" + a_ + "*$", s_ = new RegExp(o_, "g"), c_ = Fh, l_ = "[" + c_ + "]+((\\-)*[" + c_ + "])*", u_ = "[a-zA-Z]+((\\-)*[" + c_ + "])*", d_ = "^(" + l_ + "\\.)*" + u_ + "\\.?$", f_ = new RegExp(d_, "g"), p_ = "tel:", m_ = ";phone-context=", h_ = ";isub=";
function g_(e) {
	var t = e.indexOf(m_);
	if (t < 0) return null;
	var n = t + m_.length;
	if (n >= e.length) return "";
	var r = e.indexOf(";", n);
	return r >= 0 ? e.substring(n, r) : e.substring(n);
}
function __(e) {
	return e === null ? !0 : e.length === 0 ? !1 : s_.test(e) || f_.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
function v_(e, t) {
	var n = t.extractFormattedPhoneNumber, r = g_(e);
	if (!__(r)) throw new Yg("NOT_A_NUMBER");
	var i;
	if (r === null) i = n(e) || "";
	else {
		i = "", r.charAt(0) === "+" && (i += r);
		var a = e.indexOf(p_), o = a >= 0 ? a + p_.length : 0, s = e.indexOf(m_);
		i += e.substring(o, s);
	}
	var c = i.indexOf(h_);
	if (c > 0 && (i = i.substring(0, c)), i !== "") return i;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/parse.js
var y_ = 250, b_ = RegExp("[" + Lh + Fh + "]"), x_ = RegExp("[^" + Fh + "#]+$"), S_ = !1;
function C_(e, t, n) {
	t = t || {};
	var r = new nh(n);
	if (t.defaultCountry && !r.hasCountry(t.defaultCountry)) throw t.v2 ? new Yg("INVALID_COUNTRY") : Error(`Unknown country: ${t.defaultCountry}`);
	var i = T_(e, t.v2, t.extract), a = i.number, o = i.ext, s = i.error;
	if (!a) {
		if (t.v2) throw s === "TOO_SHORT" ? new Yg("TOO_SHORT") : new Yg("NOT_A_NUMBER");
		return {};
	}
	var c = D_(a, t.defaultCountry, t.defaultCallingCode, r), l = c.country, u = c.nationalNumber, d = c.countryCallingCode, f = c.countryCallingCodeSource, p = c.carrierCode;
	if (!r.hasSelectedNumberingPlan()) {
		if (t.v2) throw new Yg("INVALID_COUNTRY");
		return {};
	}
	if (!u || u.length < 2) {
		/* istanbul ignore if */
		if (t.v2) throw new Yg("TOO_SHORT");
		return {};
	}
	if (u.length > 17) {
		if (t.v2) throw new Yg("TOO_LONG");
		return {};
	}
	if (t.v2) {
		var m = new jg(d, u, r.metadata);
		return l && (m.country = l), p && (m.carrierCode = p), o && (m.ext = o), m.__countryCallingCodeSource = f, m;
	}
	var h = (t.extended ? r.hasSelectedNumberingPlan() : l) ? xh(u, r.nationalNumberPattern()) : !1;
	return t.extended ? {
		country: l,
		countryCallingCode: d,
		carrierCode: p,
		valid: h,
		possible: h ? !0 : !!(t.extended === !0 && r.possibleLengths() && bh(u, r)),
		phone: u,
		ext: o
	} : h ? E_(l, u, o) : {};
}
function w_(e, t, n) {
	if (e) {
		if (e.length > y_) {
			if (n) throw new Yg("TOO_LONG");
			return;
		}
		if (t === !1) return e;
		var r = e.search(b_);
		if (!(r < 0)) return e.slice(r).replace(x_, "");
	}
}
function T_(e, t, n) {
	var r = v_(e, { extractFormattedPhoneNumber: function(e) {
		return w_(e, n, t);
	} });
	if (!r) return {};
	if (!dg(r)) return fg(r) ? { error: "TOO_SHORT" } : {};
	var i = Zg(r);
	return i.ext ? i : { number: r };
}
function E_(e, t, n) {
	var r = {
		country: e,
		phone: t
	};
	return n && (r.ext = n), r;
}
function D_(e, t, n, r) {
	var i = Zh(r_(e), void 0, t, n, r.metadata), a = i.countryCallingCodeSource, o = i.countryCallingCode, s = i.number, c;
	if (o) r.selectNumberingPlan(o);
	else if (s && (t || n)) t ? (c = t, r.selectNumberingPlan(t), o = r.numberingPlan.callingCode()) : (r.selectNumberingPlan(n), o = n, S_ && r.isNonGeographicCallingCode(o) && (c = "001"));
	else return {};
	if (!s) return {
		countryCallingCodeSource: a,
		countryCallingCode: o
	};
	var l = qh(r_(s), void 0, r), u = l.nationalNumber, d = l.carrierCode, f = Kh(o, {
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
function O_(e) {
	"@babel/helpers - typeof";
	return O_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, O_(e);
}
function k_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function A_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? k_(Object(n), !0).forEach(function(t) {
			j_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function j_(e, t, n) {
	return (t = M_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function M_(e) {
	var t = N_(e, "string");
	return O_(t) == "symbol" ? t : t + "";
}
function N_(e, t) {
	if (O_(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (O_(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function P_(e, t, n) {
	return C_(e, A_(A_({}, t), {}, { v2: !0 }), n);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/normalizeArguments.js
function F_(e) {
	"@babel/helpers - typeof";
	return F_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, F_(e);
}
function I_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function L_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? I_(Object(n), !0).forEach(function(t) {
			R_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function R_(e, t, n) {
	return (t = z_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function z_(e) {
	var t = B_(e, "string");
	return F_(t) == "symbol" ? t : t + "";
}
function B_(e, t) {
	if (F_(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (F_(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function V_(e, t) {
	return K_(e) || G_(e, t) || U_(e, t) || H_();
}
function H_() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function U_(e, t) {
	if (e) {
		if (typeof e == "string") return W_(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? W_(e, t) : void 0;
	}
}
function W_(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function G_(e, t) {
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
function K_(e) {
	if (Array.isArray(e)) return e;
}
function q_(e) {
	var t = V_(Array.prototype.slice.call(e), 4), n = t[0], r = t[1], i = t[2], a = t[3], o, s, c;
	if (typeof n == "string") o = n;
	else throw TypeError("A text for parsing must be a string.");
	if (!r || typeof r == "string") a ? (s = i, c = a) : (s = void 0, c = i), r && (s = L_({ defaultCountry: r }, s));
	else if (Wm(r)) i ? (s = r, c = i) : c = r;
	else throw Error(`Invalid second argument: ${r}`);
	return {
		text: o,
		options: s,
		metadata: c
	};
}
//#endregion
//#region node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
function J_(e) {
	"@babel/helpers - typeof";
	return J_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, J_(e);
}
function Y_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function X_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Y_(Object(n), !0).forEach(function(t) {
			Z_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Z_(e, t, n) {
	return (t = Q_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Q_(e) {
	var t = $_(e, "string");
	return J_(t) == "symbol" ? t : t + "";
}
function $_(e, t) {
	if (J_(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (J_(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function ev(e, t, n) {
	t && t.defaultCountry && !dh(t.defaultCountry, n) && (t = X_(X_({}, t), {}, { defaultCountry: void 0 }));
	try {
		return P_(e, t, n);
	} catch (e) {
		/* istanbul ignore else */
		if (!(e instanceof Yg)) throw e;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/isValidPhoneNumber.js
function tv(e) {
	"@babel/helpers - typeof";
	return tv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, tv(e);
}
function nv(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function rv(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? nv(Object(n), !0).forEach(function(t) {
			iv(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nv(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function iv(e, t, n) {
	return (t = av(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function av(e) {
	var t = ov(e, "string");
	return tv(t) == "symbol" ? t : t + "";
}
function ov(e, t) {
	if (tv(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (tv(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function sv() {
	var e = q_(arguments), t = e.text, n = e.options, r = e.metadata;
	n = rv(rv({}, n), {}, { extract: !1 });
	var i = ev(t, n, r);
	return i && i.isValid() || !1;
}
//#endregion
//#region node_modules/libphonenumber-js/min/exports/isValidPhoneNumber.js
function cv() {
	return Vm(sv, arguments);
}
//#endregion
//#region components/widget/tabs/profile-tab/validators.ts
var lv = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function uv(e) {
	return e ? lv.test(e.trim()) ? null : "invalidEmail" : null;
}
function dv(e) {
	if (!e) return null;
	let t = e.trim();
	return t.startsWith("+") && cv(t) ? null : "invalidPhone";
}
function fv(e, t) {
	return t == null || t === "" ? null : e.key === "email" ? uv(t) : e.key === "phone" ? dv(t) : null;
}
//#endregion
//#region components/widget/tabs/profile-tab/index.tsx
function pv({ isDummy: e }) {
	let t = H("profile"), n = H("tabs"), r = je(), { config: i } = C(), { data: a, loading: o, error: s, refetch: c } = Tn({ skip: e }), l = a?.visitorProfile, [u, { loading: d }] = Dn(), [f, { loading: p }] = fn(), { apply: m, saving: h } = zm(l, t), [g, _] = Z({}), [v, y] = Z(!1), [b, x] = Z(!1), [S, w] = Z(null), [T, E] = Z({});
	Y(() => {
		l && (v || _(Ms(l)));
	}, [l, v]);
	let D = i.messenger?.profile?.fields ?? null, { avatarField: O, regularFields: k } = Pt(() => {
		if (!l) return {
			avatarField: null,
			regularFields: []
		};
		let e = l.fields.find((e) => e.type === "AVATAR") ?? null, t = l.fields.filter((e) => e.type !== "AVATAR");
		if (!D) return {
			avatarField: e,
			regularFields: t
		};
		let n = new Map(t.map((e) => [e.key, e]));
		return {
			avatarField: e,
			regularFields: D.map((e) => n.get(e)).filter((e) => !!e)
		};
	}, [l, D]), A = J((e, t) => {
		_((n) => ({
			...n,
			[e]: t
		})), y(!0), x(!1), w(null), E((t) => {
			if (!t[e]) return t;
			let n = { ...t };
			return delete n[e], n;
		});
	}, []), j = J(() => {
		l && (_(Ms(l)), y(!1), w(null), E({}));
	}, [l]), M = J(async () => {
		if (!l) return;
		let e = {};
		for (let n of l.fields) {
			if (n.pinned) continue;
			let r = g[n.key] ?? null;
			if (n.required && Ns(r)) {
				e[n.key] = t("requiredHint");
				continue;
			}
			let i = fv(n, r);
			i && (e[n.key] = t(i));
		}
		if (Object.keys(e).length > 0) {
			E(e), w(t("errorFieldInvalid"));
			return;
		}
		let n = Fs(l.fields, g);
		if (n.length !== 0) {
			w(null), E({});
			try {
				let e = (await u({
					variables: { input: { fields: n } },
					update: (e, { data: t }) => {
						let n = t?.updateVisitorProfile;
						n && e.writeQuery({
							query: wn,
							data: { visitorProfile: n }
						});
					}
				})).data?.updateVisitorProfile;
				e && (_(Ms(e)), y(!1), x(!0), setTimeout(() => x(!1), 2400));
			} catch (e) {
				let n = Im(e);
				if (n === "fieldInvalid") {
					let n = Lm(e);
					n && E({ [n]: t("errorFieldInvalid") });
				}
				w(t(Rm(n)));
			}
		}
	}, [
		l,
		t,
		u,
		g
	]), N = J(async (e) => {
		if (O) {
			if (w(null), !io.has(e.type) || !e.type.startsWith("image/")) {
				w(t("errorGeneric"));
				return;
			}
			if (e.size > 10485760) {
				w(t("errorGeneric"));
				return;
			}
			try {
				let { base64: t } = await ro(e), n = (await f({ variables: { input: {
					filename: e.name,
					mimetype: e.type,
					dataBase64: t
				} } })).data?.uploadVisitorMedia?.url;
				if (!n) throw Error("empty upload response");
				A(O.key, n);
			} catch {
				w(t("errorGeneric"));
			}
		}
	}, [
		O,
		A,
		t,
		f
	]);
	if (e) return /* @__PURE__ */ Q(ce, {
		className: "flex-1",
		children: /* @__PURE__ */ $("div", {
			className: "flex flex-col gap-3 px-4 py-6",
			children: [/* @__PURE__ */ Q("h1", {
				className: "text-lg font-semibold text-wx-fg",
				children: n("profile")
			}), /* @__PURE__ */ Q("p", {
				className: "text-sm text-wx-fg-muted",
				children: t("subtitle")
			})]
		})
	});
	if (o) return /* @__PURE__ */ Q(ce, {
		className: "flex-1",
		children: /* @__PURE__ */ $("div", {
			className: "flex flex-col gap-4 px-5 py-6",
			"aria-busy": "true",
			children: [
				/* @__PURE__ */ $("div", {
					className: "mx-auto flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ Q(Ie, { className: "h-24 w-24 rounded-full" }), /* @__PURE__ */ Q(Ie, { className: "h-4 w-32 rounded" })]
				}),
				/* @__PURE__ */ Q(Ie, { className: "h-9 w-full rounded-wx-sm" }),
				/* @__PURE__ */ Q(Ie, { className: "h-9 w-full rounded-wx-sm" }),
				/* @__PURE__ */ Q(Ie, { className: "h-9 w-full rounded-wx-sm" }),
				/* @__PURE__ */ Q("span", {
					className: "sr-only",
					children: t("loading")
				})
			]
		})
	});
	if (s || !l) return /* @__PURE__ */ $("div", {
		className: "flex flex-1 flex-col items-center justify-center gap-4 px-6 py-10 text-center",
		children: [
			/* @__PURE__ */ Q("div", {
				className: "flex h-12 w-12 items-center justify-center rounded-full bg-wx-danger/10 text-wx-danger",
				children: /* @__PURE__ */ Q(Or, {
					size: 24,
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ Q("p", {
				className: "max-w-xs text-sm text-wx-fg-muted",
				children: t("loadError")
			}),
			/* @__PURE__ */ $("button", {
				type: "button",
				onClick: () => c(),
				className: "inline-flex items-center gap-1.5 rounded-full bg-wx-primary px-4 py-2 text-sm font-medium text-wx-primary-fg transition-colors hover:bg-wx-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary focus-visible:ring-offset-2 focus-visible:ring-offset-wx-bg",
				children: [/* @__PURE__ */ Q(Kr, {
					size: 14,
					"aria-hidden": "true"
				}), t("retry")]
			})
		]
	});
	let ee = O ? g[O.key] ?? null : null, P = Is(l, g);
	return /* @__PURE__ */ $("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ Q(ce, {
			className: "min-h-0 flex-1",
			children: /* @__PURE__ */ $("form", {
				id: "wx-profile-form",
				onSubmit: (e) => {
					e.preventDefault(), M();
				},
				className: "flex flex-col px-5 pt-2 pb-4",
				children: [
					O && /* @__PURE__ */ Q(ks, {
						field: O,
						value: ee,
						uploading: p,
						onPick: N,
						onClear: () => A(O.key, null),
						displayName: P,
						t
					}),
					k.length > 0 && /* @__PURE__ */ Q(Mm, {
						eyebrow: t("title"),
						children: k.map((e) => /* @__PURE__ */ Q(jm, {
							field: e,
							value: g[e.key] ?? null,
							onChange: (t) => A(e.key, t),
							error: T[e.key],
							t
						}, e.key))
					}),
					!O && k.length === 0 && /* @__PURE__ */ Q("p", {
						className: "py-6 text-center text-sm text-wx-fg-muted",
						children: t("noFields")
					}),
					/* @__PURE__ */ Q(Fm, {
						profile: l,
						locale: r,
						themeMode: i.themeMode,
						prefSaving: h,
						applyPref: m,
						onNotificationError: (e) => w(e ? t(e) : null),
						t
					}),
					S && /* @__PURE__ */ $("p", {
						className: "mt-4 flex items-start gap-1.5 rounded-wx-sm bg-wx-danger/10 px-3 py-2 text-xs text-wx-danger",
						children: [/* @__PURE__ */ Q(de, {
							size: 13,
							"aria-hidden": "true",
							className: "mt-0.5 shrink-0"
						}), /* @__PURE__ */ Q("span", { children: S })]
					}),
					b && !S && /* @__PURE__ */ $("p", {
						className: "mt-4 flex items-center gap-1.5 rounded-wx-sm bg-wx-success/10 px-3 py-2 text-xs text-wx-success",
						children: [/* @__PURE__ */ Q(fe, {
							size: 13,
							"aria-hidden": "true"
						}), /* @__PURE__ */ Q("span", { children: t("saved") })]
					})
				]
			})
		}), v && /* @__PURE__ */ $("div", {
			className: "flex items-center gap-2 border-t border-wx-border bg-wx-bg/95 px-4 py-3 backdrop-blur",
			children: [/* @__PURE__ */ $("button", {
				type: "submit",
				form: "wx-profile-form",
				disabled: d,
				className: U("flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wx-primary px-4 py-2 text-sm font-semibold text-wx-primary-fg", "hover:bg-wx-primary-hover disabled:cursor-not-allowed disabled:opacity-60"),
				children: [d && /* @__PURE__ */ Q(Ge, {
					size: 14,
					className: "animate-spin",
					"aria-hidden": "true"
				}), t(d ? "saving" : "save")]
			}), /* @__PURE__ */ Q("button", {
				type: "button",
				onClick: j,
				disabled: d,
				className: U("rounded-full bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg", "hover:bg-wx-bg-elevated-2 disabled:cursor-not-allowed disabled:opacity-60"),
				children: t("cancel")
			})]
		})]
	});
}
//#endregion
//#region components/widget/widget-launcher.tsx
function mv({ isOpen: e, onToggle: t, unreadCount: i = 0, position: o = "right", embedded: s = !1, loading: c = !1 }) {
	let l = H("launcher"), u = Je(), d = Je(), f = e ? d.parentHandlers : u.parentHandlers, p = !e && i > 0;
	return /* @__PURE__ */ $(n.button, {
		type: "button",
		onClick: c ? void 0 : t,
		disabled: c,
		"aria-label": l(c ? "loading" : e ? "close" : "open"),
		"aria-busy": c || void 0,
		whileHover: c ? void 0 : { scale: 1.05 },
		whileTap: c ? void 0 : { scale: .92 },
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 22
		},
		onHoverStart: f.onMouseEnter,
		onHoverEnd: f.onMouseLeave,
		...f,
		className: U(s ? "absolute" : "fixed", "bottom-4 z-2147483600", o === "left" ? "left-4" : "right-4", "flex h-14 w-14 items-center justify-center rounded-full", "bg-wx-launcher-bg text-wx-launcher-fg", "shadow-[0_8px_24px_rgba(0,0,0,0.18)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-launcher-bg focus-visible:ring-offset-2 focus-visible:ring-offset-white"),
		children: [/* @__PURE__ */ Q(si, {
			count: p ? i : 0,
			size: "md",
			className: "absolute -top-1 -right-1 z-10"
		}), /* @__PURE__ */ Q(F, {
			mode: "wait",
			initial: !1,
			children: c ? /* @__PURE__ */ Q(n.span, {
				initial: {
					opacity: 0,
					scale: .7
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .7
				},
				transition: { duration: .18 },
				className: U("h-6 w-6 animate-spin rounded-full border-2", "border-wx-launcher-fg/30 border-t-wx-launcher-fg", "dark:border-wx-bg/30 dark:border-t-wx-bg"),
				"aria-hidden": "true"
			}, "spinner") : e ? /* @__PURE__ */ Q(n.span, {
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
				children: /* @__PURE__ */ Q(a, {
					ref: d.iconRef,
					size: 24
				})
			}, "x") : /* @__PURE__ */ Q(n.span, {
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
				children: /* @__PURE__ */ Q(r, {
					ref: u.iconRef,
					size: 24,
					className: "[&_svg]:fill-current [&_svg]:stroke-current"
				})
			}, "chat")
		})]
	});
}
//#endregion
//#region components/widget/widget-shell/auth-error-overlay.tsx
function hv({ open: e, errorCode: t, onRetry: r, onDismiss: i, position: a = "right", embedded: o = !1 }) {
	let s = H("authError"), c = a === "left", l = t?.startsWith("turnstile_failed:") ?? !1, u = s(l ? "turnstileTitle" : "genericTitle"), d = s(l ? "turnstileBody" : "genericBody");
	return /* @__PURE__ */ Q(F, { children: e && /* @__PURE__ */ Q(n.div, {
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
		className: U("bottom-24 z-2147483599 w-[300px]", o ? "absolute" : "fixed", c ? "left-4" : "right-4"),
		role: "alert",
		"aria-live": "polite",
		"aria-label": u,
		children: /* @__PURE__ */ $("div", {
			className: U("relative rounded-wx-lg border border-wx-border bg-wx-bg", "p-4 pr-9 text-wx-fg", "shadow-[0_16px_40px_rgba(0,0,0,0.16)]"),
			children: [
				/* @__PURE__ */ Q("button", {
					type: "button",
					onClick: i,
					"aria-label": s("dismiss"),
					className: U("absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full", "text-wx-fg-muted transition-colors hover:bg-wx-bg-elevated hover:text-wx-fg"),
					children: /* @__PURE__ */ Q(de, { size: 12 })
				}),
				/* @__PURE__ */ $("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ Q("div", {
						className: U("flex h-8 w-8 shrink-0 items-center justify-center rounded-full", "bg-wx-danger/10 text-wx-danger"),
						children: Q(l ? Jr : Kr, {
							size: 16,
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ $("div", {
						className: "flex min-w-0 flex-1 flex-col gap-1",
						children: [/* @__PURE__ */ Q("p", {
							className: "text-sm font-medium text-wx-fg",
							children: u
						}), /* @__PURE__ */ Q("p", {
							className: "text-xs leading-relaxed text-wx-fg-muted",
							children: d
						})]
					})]
				}),
				/* @__PURE__ */ Q("div", {
					className: "mt-3 flex justify-end",
					children: /* @__PURE__ */ $("button", {
						type: "button",
						onClick: r,
						className: U("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium", "bg-wx-primary text-wx-primary-fg transition-colors", "hover:bg-wx-primary-hover", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary focus-visible:ring-offset-2 focus-visible:ring-offset-wx-bg"),
						children: [/* @__PURE__ */ Q(Kr, {
							size: 12,
							"aria-hidden": "true"
						}), s("retry")]
					})
				})
			]
		})
	}) });
}
//#endregion
//#region components/widget/widget-shell/helpers.ts
function gv(e) {
	if (typeof e != "string") return "auto";
	let t = e.toLowerCase();
	return t === "light" || t === "dark" || t === "auto" ? t : "auto";
}
function _v(e, t) {
	if (!e) return null;
	let n = t === "dark" ? e.dark : e.light, r = t === "dark" ? e.light : e.dark;
	return n ?? r ?? null;
}
function vv(e) {
	return e === "messages" ? { kind: "messages" } : e === "help" ? { kind: "help" } : e === "news" ? { kind: "news" } : e === "profile" ? { kind: "profile" } : { kind: "home" };
}
function yv(e) {
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
function bv(e) {
	return e.kind === "help-category" ? `help-category:${e.categoryId}` : e.kind === "help-article" ? `help-article:${e.slug}` : e.kind === "news-article" ? `news-article:${e.id}` : e.kind;
}
var xv = {
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
}, Sv = jt(() => import("./widget-react-C_q29OuH2.js").then((e) => ({ default: e.HelpArticleView }))), Cv = jt(() => import("./widget-react-CndZFsvh2.js").then((e) => ({ default: e.NewsArticleView }))), wv = "wexio:panel-expanded", Tv = 32, Ev = 112;
function Dv() {
	if (typeof window > "u") return !1;
	try {
		return localStorage.getItem(wv) === "1";
	} catch {
		return !1;
	}
}
function Ov(e, t) {
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
function kv() {
	return /* @__PURE__ */ Q("div", {
		className: "flex flex-1 items-center justify-center",
		children: /* @__PURE__ */ Q("div", { className: "border-wx-border border-t-wx-primary h-5 w-5 animate-spin rounded-full border-2" })
	});
}
function Av() {
	return /* @__PURE__ */ Q(_i, { children: /* @__PURE__ */ Q(jv, {}) });
}
function jv() {
	let e = H("header"), t = je(), r = p(), { mode: i, config: a, isDummy: o, isLoading: s, error: c } = C(), l = a.theme?.launcherPosition === "LEFT_BOTTOM", u = r.embedded ?? !1, { muted: d, toggleMuted: f, playInbound: m, playOutbound: h } = jn(a.sounds), { identity: g, prefill: _ } = Zn(r), [v, y] = Z(null), [x, S] = Z(0);
	Y(() => {
		if (typeof window > "u") return;
		let e = (e) => {
			!e.data || e.data.type !== "wexio:shutdown:v1" || (Yn(), y(null), j(null), S((e) => e + 1));
		};
		return window.addEventListener("message", e), () => window.removeEventListener("message", e);
	}, []);
	let w = !!a.botProtection?.turnstile?.enabled, E = a.botProtection?.turnstile?.siteKey ?? null, D = w && E ? E : null;
	Y(() => {}, [w, E]);
	let { getToken: O } = zn({
		siteKey: D,
		position: l ? "left" : "right"
	}), k = Xn({
		enabled: !s && i === "production" && !o,
		identity: g ?? v,
		epoch: x,
		getTurnstileToken: O
	}), [A, j] = Z(null), M = A ?? k, N = !!M.error && i === "production" && !o, ee = (s || M.isAuthenticating) && i === "production" && !o, [P, te] = Z(!1);
	Y(() => {
		N || te(!1);
	}, [N]);
	let I = J(() => {
		te(!1), S((e) => e + 1);
	}, []), L = J(() => te(!1), []), ne = X(!1), re = X(!1);
	ne.current = N || ee, re.current = N;
	let ie = J(() => {
		if (re.current) {
			te(!0);
			return;
		}
		ne.current || B(!0);
	}, []), ae = J(() => {
		B((e) => e ? !1 : re.current ? (te(!0), !1) : !ne.current);
	}, []), oe = sr({ enabled: !!a.features.profile && !o && !!M.token });
	Y(() => {
		if (typeof window > "u") return;
		let e = window;
		e.__wexioNotifyDebug = () => {
			let e = {
				prefEnabled: oe.desktopNotifications,
				permission: typeof Notification < "u" ? Notification.permission : "(unsupported)",
				prefsLoaded: oe.loaded,
				featureEnabled: !!a.features.profile,
				sessionToken: !!M.token
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
		oe.desktopNotifications,
		oe.loaded,
		a.features.profile,
		M.token
	]);
	let se = Nn(gv(a.themeMode), {
		preference: oe.themeMode,
		allowed: oe.themeModeEditable
	}), ce = _v(a.organizationLogo, se), le = ce ?? (o ? b(`/logo-${se}.png`) : null), [R, z] = Z(() => vv(Sr(a.defaultTab, a.features)));
	Y(() => {
		br(yr(R), a.features) || z(vv(Sr(a.defaultTab, a.features)));
	}, [a.features, a.defaultTab]);
	let [ue, B] = Z(!1), [de, fe] = Z(Dv);
	Y(() => {
		try {
			localStorage.setItem(wv, de ? "1" : "0");
		} catch {}
	}, [de]);
	let [pe, V] = Z(null), [me, he] = Z(!1);
	Y(() => {
		ue && (he(!0), i === "production" && r.onOpen?.());
	}, [
		ue,
		i,
		r
	]);
	let ge = pr({
		chatId: M.chatId,
		isDummy: o
	}), _e = T(), ve = X(null), [ye, be] = Z([]), [xe, Se] = Z(null);
	Y(() => {
		be([]);
	}, [M.chatId]), Y(() => {
		a.features.profile && (!M.peopleId || !M.token || _e.refetchQueries({ include: [wn] }));
	}, [M.peopleId]);
	let Ce = J((e) => {
		be((t) => t.some((t) => t.id === e.id) ? t : [...t, e]);
	}, []), we = J((e, t) => {
		be((n) => n.map((n) => n.id === e ? {
			...t,
			clientKey: t.clientKey ?? n.clientKey ?? e
		} : n));
	}, []), Te = X((e) => (ve.current = e, () => {
		ve.current === e && (ve.current = null);
	})).current;
	lr({
		chatId: M.chatId,
		token: M.token,
		enabled: !o && i === "production",
		onMessage: (e) => {
			if (ve.current?.(e), e.kind === "read-receipt") {
				ge.noteRead(e.readReceipt?.messageIds ?? []);
				return;
			}
			if (e.kind === "typing") return;
			let t = (e.from ?? e.sender)?.kind;
			if (t === "visitor") return;
			m();
			let n = e.from ?? e.sender, r = Array.isArray(e.buttons) ? e.buttons.map((e) => ({
				text: e.label,
				payload: e.value
			})) : void 0, i = t === "ai" || t === "bot" ? Xt : n?.name ?? "", a = e.sentAt ?? (/* @__PURE__ */ new Date()).toISOString(), o = (() => {
				try {
					return new Date(a).toLocaleTimeString(void 0, {
						hour: "numeric",
						minute: "2-digit"
					});
				} catch {
					return "";
				}
			})(), s = e.media, c = ls(s), l = s && typeof s == "object" && !Array.isArray(s) ? s.caption : void 0;
			Ce({
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
			}), ge.noteInbound(e);
			let u = typeof document < "u" && !document.hidden, d = ue && u && R.kind === "messages", f = oe.desktopNotifications, p = typeof Notification < "u" ? Notification.permission : "(unsupported)", h = p === "granted", g = f && h && !d;
			if (console.log("[wexio] inbound:", {
				id: e.externalMessageId,
				kind: e.kind,
				from: i,
				prefEnabled: f,
				permission: p,
				isOpen: ue,
				docVisible: u,
				route: R.kind,
				activelyReadingMessages: d,
				willNotify: g
			}), f && h && !d) try {
				let t = typeof l == "string" ? l : "", r = Ov(e.text || t, c), a = n?.avatar ?? ce ?? void 0, o = new Notification(i || "New message", {
					body: r,
					tag: e.externalMessageId,
					icon: a
				});
				o.onclick = () => {
					try {
						window.focus();
					} catch {}
					ie(), z({ kind: "messages" }), o.close();
				};
			} catch (e) {
				console.warn("[wexio] desktop notification failed:", e);
			}
			else f && !h && console.warn("[wexio] desktop notifications enabled but browser permission is not granted; current value:", p);
			M.chatId && _e.writeQuery({
				query: yn,
				variables: { chatId: M.chatId },
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
	let [Ee] = rn(), De = (R.kind === "messages" || R.kind === "help-article" || R.kind === "news-article") && de, Oe = De ? 640 : 420, ke = De ? 860 : 670, [Ae, Me] = Z(null);
	Y(() => {
		if (typeof window > "u") return;
		let e = () => {
			let e = window.innerWidth, t = window.innerHeight;
			Me((n) => n && n.w === e && n.h === t ? n : {
				w: e,
				h: t
			});
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []);
	let W = u || !Ae ? Oe : Math.min(Oe, Ae.w - Tv), Ne = u || !Ae ? ke : Math.min(ke, Ae.h - Ev), Pe = X(yv(R)), Fe = (() => {
		let e = yv(R), t = Pe.current;
		return Pe.current = e, e === t ? 0 : e > t ? 1 : -1;
	})(), Ie = X(r.onResize);
	Ie.current = r.onResize, Y(() => {
		let e = ue ? Oe : 72, t = ue ? ke : 72;
		Ie.current(e, t);
	}, [
		ue,
		Oe,
		ke
	]);
	let Le = () => {
		B(!1), i === "production" && r.onClose();
	}, Re = async (e, t) => {
		if (o) Se(t), ge.clear();
		else if (M.chatId) try {
			await Ee({ variables: { input: { text: t } } });
		} catch {}
		z({ kind: "messages" }), ie(), h();
	}, ze = () => {
		z({ kind: "messages" }), ie();
	}, Be = !a.branding?.hidden, Ve = xr(a.features), Ue = _r(R) && Ve > 1, We = R.kind === "home", Ge = yr(R), Ke = (e) => {
		Mt(() => {
			z({ kind: e === "messages" ? "messages" : e });
		});
	}, qe = X(!1), Je = o || i !== "production" || !!M.token || !!M.error;
	Je && (qe.current = !0);
	let Ye = qe.current || Je;
	if (c === "publicKeyInvalid" || s || !Ye) return null;
	return /* @__PURE__ */ $(Ft, { children: [
		/* @__PURE__ */ $(n.div, {
			"aria-hidden": !ue,
			initial: !1,
			animate: ue ? {
				opacity: 1,
				y: 0,
				scale: 1,
				pointerEvents: "auto",
				width: W,
				height: Ne
			} : {
				opacity: 0,
				y: 16,
				scale: .98,
				pointerEvents: "none",
				width: W,
				height: Ne
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
			className: U("isolate flex flex-col overflow-hidden bg-wx-bg text-wx-fg", u ? "absolute" : "fixed", "bottom-24 z-2147483601 rounded-wx-xl", u ? "max-w-[calc(100%-2rem)] max-h-[calc(100%-7rem)]" : "max-w-[calc(100vw-2rem)] max-h-[calc(100dvh-7rem)]", l ? "left-4" : "right-4"),
			children: [
				We && /* @__PURE__ */ Q("div", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(99,102,241,0.22),transparent_55%),linear-gradient(to_bottom,var(--wx-bg-elevated-2)_0%,var(--wx-bg-elevated)_40%,var(--wx-bg)_75%)] dark:bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(99,102,241,0.35),transparent_55%),linear-gradient(to_bottom,var(--wx-bg-elevated-2)_0%,var(--wx-bg-elevated)_40%,var(--wx-bg)_75%)]"
				}),
				/* @__PURE__ */ Q(Xe, {
					route: R,
					onPop: () => z(vr(R, a.features)),
					onClose: Le
				}),
				/* @__PURE__ */ Q("main", {
					className: "relative flex flex-1 flex-col overflow-hidden",
					children: me && /* @__PURE__ */ Q(F, {
						mode: "sync",
						initial: !1,
						custom: Fe,
						children: /* @__PURE__ */ $(n.div, {
							custom: Fe,
							variants: xv,
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
								R.kind === "home" && /* @__PURE__ */ Q(to, {
									config: a,
									organizationLogoUrl: ce,
									onClose: Le,
									onOpenTab: (e) => z({ kind: e }),
									onOpenNewsArticle: (e) => z({
										kind: "news-article",
										id: e
									}),
									onOpenHelpArticle: (e) => z({
										kind: "help-article",
										slug: e,
										from: "search"
									}),
									isDummy: o,
									chatId: M.chatId ?? null
								}),
								R.kind === "messages" && /* @__PURE__ */ Q(Os, {
									isDummy: o,
									chatId: M.chatId,
									token: M.token,
									prechatForm: a.prechatForm,
									messenger: a.messenger,
									organizationLogoUrl: ce,
									organizationName: a.messenger?.title ?? "",
									isOpen: ue,
									onInbound: m,
									onOutbound: h,
									registerRealtimeHandler: Te,
									unreadCount: ge.count,
									clearUnread: ge.clear,
									liveMessages: ye,
									appendLiveMessage: Ce,
									replaceLiveMessage: we,
									initialVisitorMessage: xe,
									onInitialVisitorMessageSent: () => Se(null),
									visitorIdentity: g,
									visitorPrefill: _,
									security: a.security,
									verified: M.verified,
									onGoogleCredential: (e) => y({ googleIdToken: e }),
									onPasskeySession: (e) => {
										Wn(e), j({
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
										e.kind === "help-article" ? z({
											kind: "help-article",
											slug: e.slug,
											from: "search",
											locale: e.locale
										}) : e.kind === "news-article" && z({ kind: "news" });
									},
									getTurnstileToken: O
								}),
								R.kind === "help" && /* @__PURE__ */ Q(ji, {
									isDummy: o,
									onOpenCategory: (e, t) => z({
										kind: "help-category",
										categoryId: e,
										categoryName: t?.name,
										categoryDescription: t?.description,
										categoryArticleCount: t?.articleCount
									}),
									onOpenArticle: (e) => z({
										kind: "help-article",
										slug: e,
										from: "search"
									})
								}),
								R.kind === "help-category" && /* @__PURE__ */ Q(Ci, {
									categoryId: R.categoryId,
									categoryName: R.categoryName,
									categoryDescription: R.categoryDescription,
									categoryArticleCount: R.categoryArticleCount,
									isDummy: o,
									onOpenCategory: (e, t) => z({
										kind: "help-category",
										categoryId: e,
										categoryName: t?.name,
										categoryDescription: t?.description,
										categoryArticleCount: t?.articleCount
									}),
									onOpenArticle: (e) => z({
										kind: "help-article",
										slug: e,
										from: "category",
										fromCategoryId: R.categoryId
									})
								}),
								R.kind === "help-article" && /* @__PURE__ */ Q(kt, {
									fallback: /* @__PURE__ */ Q(kv, {}),
									children: /* @__PURE__ */ Q(Sv, {
										slug: R.slug,
										locale: R.locale ?? t,
										isDummy: o,
										onHandoff: () => z({ kind: "messages" }),
										onOpenArticle: (e) => z({
											kind: "help-article",
											slug: e,
											from: "search"
										}),
										onOpenTranslation: (e, t) => z({
											kind: "help-article",
											slug: e,
											locale: t,
											from: R.from,
											fromCategoryId: R.fromCategoryId
										}),
										onTitleResolved: V
									})
								}),
								R.kind === "news" && /* @__PURE__ */ Q(He, {
									isDummy: o,
									onOpenArticle: (e) => z({
										kind: "news-article",
										id: e
									})
								}),
								R.kind === "news-article" && /* @__PURE__ */ Q(kt, {
									fallback: /* @__PURE__ */ Q(kv, {}),
									children: /* @__PURE__ */ Q(Cv, {
										id: R.id,
										isDummy: o,
										onOpenRelated: (e) => z({
											kind: "news-article",
											id: e
										}),
										onTitleResolved: V
									})
								}),
								R.kind === "profile" && /* @__PURE__ */ Q(pv, { isDummy: o })
							]
						}, bv(R))
					})
				}),
				Ue && /* @__PURE__ */ Q(li, {
					active: Ge,
					features: a.features,
					onChange: Ke,
					unreadCount: ge.count
				}),
				Be && /* @__PURE__ */ Q(pi, {})
			]
		}),
		/* @__PURE__ */ Q(Di, {
			message: ue ? null : ge.lastMessage,
			onOpen: ze,
			onDismiss: ge.clear,
			onSendButton: Re,
			position: l ? "left" : "right",
			embedded: u
		}),
		/* @__PURE__ */ Q(hv, {
			open: N && P,
			errorCode: M.error,
			onRetry: I,
			onDismiss: L,
			position: l ? "left" : "right",
			embedded: u
		}),
		/* @__PURE__ */ Q(mv, {
			isOpen: ue,
			onToggle: ae,
			unreadCount: ge.count,
			position: l ? "left" : "right",
			embedded: u,
			loading: ee
		})
	] });
	function Xe({ route: t, onPop: n, onClose: r }) {
		if (t.kind === "messages") {
			let t = Ve > 1;
			return /* @__PURE__ */ Q(hi, {
				title: a.messenger?.title?.trim() || "Gaia",
				subtitle: a.messenger?.description?.trim() || e("conversationSubtitle"),
				organizationLogoUrl: le,
				muted: d,
				onToggleMute: f,
				onBack: t ? n : void 0,
				onClose: r,
				expanded: De,
				onToggleExpand: () => fe((e) => !e)
			});
		}
		return t.kind === "help" ? /* @__PURE__ */ Q(Ai, {
			title: e("helpTitle"),
			onClose: r
		}) : t.kind === "help-category" ? /* @__PURE__ */ Q(Ai, {
			title: e("helpTitle"),
			onBack: n,
			onClose: r
		}) : t.kind === "help-article" ? /* @__PURE__ */ Q(Ai, {
			title: pe ?? e("helpTitle"),
			onBack: n,
			onClose: r,
			expanded: De,
			onToggleExpand: () => fe((e) => !e)
		}) : t.kind === "news" ? /* @__PURE__ */ Q(Ai, {
			title: e("newsTitle"),
			onClose: r
		}) : t.kind === "news-article" ? /* @__PURE__ */ Q(Ai, {
			title: pe ?? e("newsTitle"),
			onBack: n,
			onClose: r,
			expanded: De,
			onToggleExpand: () => fe((e) => !e)
		}) : null;
	}
}
//#endregion
//#region \0rolldown_dynamic_import_helper.js
var Mv = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, Nv = /* @__PURE__ */ u(((e, t) => {
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
})), Pv = /* @__PURE__ */ u(((e) => {
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
	var n = Nv();
})), Fv = /* @__PURE__ */ u(((e) => {
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
})), Iv = /* @__PURE__ */ u(((e) => {
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
})), Lv = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "workAsyncStorageInstance", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (0, Iv().createAsyncLocalStorage)();
})), Rv = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "workAsyncStorage", {
		enumerable: !0,
		get: function() {
			return t.workAsyncStorageInstance;
		}
	});
	var t = Lv();
})), zv = /* @__PURE__ */ u(((e) => {
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
})), Bv = /* @__PURE__ */ u(((e) => {
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
	var n = Pv(), r = Fv(), i = Rv(), a = zv(), o = class e extends Error {
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
})), Vv = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "workUnitAsyncStorageInstance", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (0, Iv().createAsyncLocalStorage)();
})), Hv = /* @__PURE__ */ u(((e, t) => {
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
})), Uv = /* @__PURE__ */ u(((e) => {
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
})), Wv = /* @__PURE__ */ u(((e) => {
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
})), Gv = /* @__PURE__ */ u(((e) => {
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
	var n = Uv(), r = Wv(), i = /* @__PURE__ */ function(e) {
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
})), Kv = /* @__PURE__ */ u(((e) => {
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
	var n = Vv(), r = Hv(), i = Uv(), a = Gv();
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
})), qv = /* @__PURE__ */ u(((e, t) => {
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
})), Jv = /* @__PURE__ */ u(((e, t) => {
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
})), Yv = /* @__PURE__ */ u(((e) => {
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
	var n = Gv();
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
})), Xv = /* @__PURE__ */ u(((e) => {
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
})), Zv = /* @__PURE__ */ u(((e) => {
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
})), Qv = /* @__PURE__ */ u(((e) => {
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
})), $v = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "INSTANT_VALIDATION_BOUNDARY_NAME", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = "__next_instant_validation_boundary__";
})), ey = /* @__PURE__ */ u(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 });
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(t, {
		DynamicHoleKind: function() {
			return z;
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
			return L;
		},
		consumeDynamicAccess: function() {
			return ee;
		},
		createDynamicTrackingState: function() {
			return g;
		},
		createDynamicValidationState: function() {
			return _;
		},
		createHangingInputAbortSignal: function() {
			return I;
		},
		createInstantValidationState: function() {
			return ue;
		},
		createRenderInBrowserAbortSignal: function() {
			return F;
		},
		formatDynamicAPIAccesses: function() {
			return P;
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
			return R;
		},
		trackDynamicDataInDynamicRender: function() {
			return x;
		},
		trackDynamicHoleInNavigation: function() {
			return B;
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
			return ne;
		},
		useDynamicSearchParams: function() {
			return re;
		}
	});
	var r = /* @__PURE__ */ m(e("react")), i = qv(), a = Jv(), o = Kv(), s = Rv(), c = Yv(), l = Xv(), u = Zv(), d = Qv(), f = Uv(), p = $v();
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
		te(), n && n.dynamicAccesses.push({
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
	function ee(e, t) {
		return e.dynamicAccesses.push(...t.dynamicAccesses), e.dynamicAccesses;
	}
	function P(e) {
		return e.filter((e) => typeof e.stack == "string" && e.stack.length > 0).map(({ expression: e, stack: t }) => (t = t.split("\n").slice(4).filter((e) => !(e.includes("node_modules/next/") || e.includes(" (<anonymous>)") || e.includes(" (node:"))).join("\n"), `Dynamic API Usage Debug - ${e}:\n${t}`));
	}
	function te() {
		if (!h) throw Object.defineProperty(/* @__PURE__ */ Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
			value: "E224",
			enumerable: !1,
			configurable: !0
		});
	}
	function F() {
		let e = new AbortController();
		return e.abort(Object.defineProperty(new d.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
			value: "E721",
			enumerable: !1,
			configurable: !0
		})), e.signal;
	}
	function I(e) {
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
	function L(e, t) {
		let n = t.dynamicTracking;
		n && n.dynamicAccesses.push({
			stack: n.isDebugDynamicAccesses ? (/* @__PURE__ */ Error()).stack : void 0,
			expression: e
		});
	}
	function ne(e) {
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
	function re(e) {
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
	var ie = /\n\s+at Suspense \(<anonymous>\)/, ae = RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${l.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`), oe = RegExp(`\\n\\s+at ${l.METADATA_BOUNDARY_NAME}[\\n\\s]`), se = RegExp(`\\n\\s+at ${l.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`), ce = RegExp(`\\n\\s+at ${l.OUTLET_BOUNDARY_NAME}[\\n\\s]`), le = RegExp(`\\n\\s+at ${p.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`);
	function R(e, t, n, r) {
		if (!ce.test(t)) if (oe.test(t)) {
			n.hasDynamicMetadata = !0;
			return;
		} else if (se.test(t)) {
			n.hasDynamicViewport = !0;
			return;
		} else if (ae.test(t)) {
			n.hasAllowedDynamic = !0, n.hasSuspenseAboveBody = !0;
			return;
		} else if (ie.test(t)) {
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
	var z = /* @__PURE__ */ function(e) {
		return e[e.Runtime = 1] = "Runtime", e[e.Dynamic = 2] = "Dynamic", e;
	}({});
	function ue(e) {
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
	function B(e, t, n, r, i, a) {
		if (ce.test(t)) return;
		if (oe.test(t)) {
			let r = i === 1 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateMetadata` or you have file-based metadata such as icons that depend on dynamic params segments." : "Uncached data or `connection()` was accessed inside `generateMetadata`.", a = `Route "${e.route}": ${r} Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
			n.dynamicMetadata = V(Object.defineProperty(Error(a), "__NEXT_ERROR_CODE", {
				value: "E1076",
				enumerable: !1,
				configurable: !0
			}), t, n.createInstantStack);
			return;
		}
		if (se.test(t)) {
			let r = i === 1 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateViewport`." : "Uncached data or `connection()` was accessed inside `generateViewport`.", a = `Route "${e.route}": ${r} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, o = V(Object.defineProperty(Error(a), "__NEXT_ERROR_CODE", {
				value: "E1086",
				enumerable: !1,
				configurable: !0
			}), t, n.createInstantStack);
			n.dynamicErrors.push(o);
			return;
		}
		let o = le.exec(t);
		if (o) {
			let e = ie.exec(t);
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
		let i = le.exec(r);
		if (i) {
			let a = ie.exec(r);
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
		if (ce.test(t)) return;
		if (oe.test(t)) {
			let r = `Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
			n.dynamicMetadata = V(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1080",
				enumerable: !1,
				configurable: !0
			}), t, null);
			return;
		} else if (se.test(t)) {
			let r = `Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, i = V(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1077",
				enumerable: !1,
				configurable: !0
			}), t, null);
			n.dynamicErrors.push(i);
			return;
		} else if (ae.test(t)) {
			n.hasAllowedDynamic = !0, n.hasSuspenseAboveBody = !0;
			return;
		} else if (ie.test(t)) {
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
		if (!ce.test(t)) if (oe.test(t)) {
			let r = `Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
			n.dynamicMetadata = V(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1085",
				enumerable: !1,
				configurable: !0
			}), t, null);
			return;
		} else if (se.test(t)) {
			let r = `Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, i = V(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1081",
				enumerable: !1,
				configurable: !0
			}), t, null);
			n.dynamicErrors.push(i);
			return;
		} else if (ae.test(t)) {
			n.hasAllowedDynamic = !0, n.hasSuspenseAboveBody = !0;
			return;
		} else if (ie.test(t)) {
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
})), ty = /* @__PURE__ */ u(((t) => {
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
})), ny = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "afterTaskAsyncStorageInstance", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (0, Iv().createAsyncLocalStorage)();
})), ry = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "afterTaskAsyncStorage", {
		enumerable: !0,
		get: function() {
			return t.afterTaskAsyncStorageInstance;
		}
	});
	var t = ny();
})), iy = /* @__PURE__ */ u(((e) => {
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
	var n = Jv(), r = ry();
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
})), ay = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "cookies", {
		enumerable: !0,
		get: function() {
			return d;
		}
	});
	var t = Bv(), n = Pv(), r = Rv(), i = Kv(), a = ey(), o = Jv(), s = Yv(), c = ty(), l = iy(), u = Uv();
	Gv();
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
})), oy = /* @__PURE__ */ u(((e) => {
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
	var n = Fv(), r = class e extends Error {
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
})), sy = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "headers", {
		enumerable: !0,
		get: function() {
			return u;
		}
	});
	var t = oy(), n = Rv(), r = Kv(), i = ey(), a = Jv(), o = Yv(), s = ty(), c = iy(), l = Uv();
	Gv();
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
})), cy = /* @__PURE__ */ u(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "draftMode", {
		enumerable: !0,
		get: function() {
			return l;
		}
	});
	var t = Kv(), n = Rv(), r = ey(), i = ty(), a = Jv(), o = qv(), s = Uv(), c = Yv();
	Fv();
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
})), ly = /* @__PURE__ */ u(((e, t) => {
	t.exports.cookies = ay().cookies, t.exports.headers = sy().headers, t.exports.draftMode = cy().draftMode;
}));
//#endregion
//#region node_modules/next-intl/dist/esm/production/server/react-client/index.js
function uy(e) {
	return () => {
		throw Error(`\`${e}\` is not supported in Client Components.`);
	};
}
function dy(...e) {
	return uy("getRequestConfig");
}
//#endregion
//#region lib/i18n.ts
var fy = ly();
function py(e) {
	if (!e) return null;
	let t = new Map(er.map((e) => [e.toLowerCase(), e])), n = e.split(",").map((e) => e.split(";")[0].trim().toLowerCase().replace(/_/g, "-")).filter(Boolean);
	for (let e of n) {
		let n = t.get(e);
		if (n) return n;
		let r = e.split("-")[0], i = t.get(r);
		if (i) return i;
	}
	return null;
}
dy(async ({ requestLocale: e }) => {
	let t = await my(e), [n, r] = await Promise.all([Mv(/* @__PURE__ */ Object.assign({
		"../messages/ar.json": () => import("./widget-react-Cfgp7JeP.js").then((e) => e.n),
		"../messages/cs.json": () => import("./widget-react-DiF8_rWm.js").then((e) => e.n),
		"../messages/da.json": () => import("./widget-react-DhC6mv1r.js").then((e) => e.n),
		"../messages/de.json": () => import("./widget-react-CLRkytx8.js").then((e) => e.n),
		"../messages/demo.en.json": () => import("./widget-react-_xdGdTzK.js").then((e) => e.n),
		"../messages/demo.uk.json": () => import("./widget-react-BC-2nOW4.js").then((e) => e.n),
		"../messages/el.json": () => import("./widget-react-L8PMkUr7.js").then((e) => e.n),
		"../messages/en-GB.json": () => import("./widget-react-CozbWJT5.js").then((e) => e.n),
		"../messages/en-US.json": () => import("./widget-react-BcPE3ZoY.js").then((e) => e.n),
		"../messages/en.json": () => import("./widget-react-Dr-NACA0.js").then((e) => e.n),
		"../messages/es-MX.json": () => import("./widget-react-iKCOmnGh.js").then((e) => e.n),
		"../messages/es.json": () => import("./widget-react-C2atp9Wc.js").then((e) => e.n),
		"../messages/fi.json": () => import("./widget-react-C7J17SWR.js").then((e) => e.n),
		"../messages/fr.json": () => import("./widget-react-CMvMg68M.js").then((e) => e.n),
		"../messages/he.json": () => import("./widget-react-D3ZFysG9.js").then((e) => e.n),
		"../messages/hi.json": () => import("./widget-react-BNG2P8TD.js").then((e) => e.n),
		"../messages/hu.json": () => import("./widget-react-DRyfg-bL.js").then((e) => e.n),
		"../messages/id.json": () => import("./widget-react-JOt2DXbR.js").then((e) => e.n),
		"../messages/it.json": () => import("./widget-react-Dq_sYldT.js").then((e) => e.n),
		"../messages/ja.json": () => import("./widget-react-BdgqHrUV.js").then((e) => e.n),
		"../messages/ko.json": () => import("./widget-react-BthaWcns.js").then((e) => e.n),
		"../messages/nl.json": () => import("./widget-react-DjXlAiu5.js").then((e) => e.n),
		"../messages/no.json": () => import("./widget-react-DviuEPoq.js").then((e) => e.n),
		"../messages/pl.json": () => import("./widget-react-LWisk9g6.js").then((e) => e.n),
		"../messages/pt-BR.json": () => import("./widget-react-Crxd4qSM.js").then((e) => e.n),
		"../messages/pt.json": () => import("./widget-react-CKZ5tNDZ.js").then((e) => e.n),
		"../messages/ro.json": () => import("./widget-react-fNts-U3I2.js").then((e) => e.n),
		"../messages/sk.json": () => import("./widget-react-xzOjEdXk2.js").then((e) => e.n),
		"../messages/sv.json": () => import("./widget-react-CVLlTbB_2.js").then((e) => e.n),
		"../messages/th.json": () => import("./widget-react-DkhMvmdX2.js").then((e) => e.n),
		"../messages/tr.json": () => import("./widget-react-BdohGq4s2.js").then((e) => e.n),
		"../messages/uk.json": () => import("./widget-react-CYlAGnu_2.js").then((e) => e.n),
		"../messages/vi.json": () => import("./widget-react-CSqqxBrZ2.js").then((e) => e.n),
		"../messages/zh-TW.json": () => import("./widget-react-COu0Pgwj2.js").then((e) => e.n),
		"../messages/zh.json": () => import("./widget-react-C-8yYmmX2.js").then((e) => e.n)
	}), `../messages/${t}.json`, 3), Mv(/* @__PURE__ */ Object.assign({
		"../messages/demo.en.json": () => import("./widget-react-_xdGdTzK.js").then((e) => e.n),
		"../messages/demo.uk.json": () => import("./widget-react-BC-2nOW4.js").then((e) => e.n)
	}), `../messages/demo.${t}.json`, 3)]);
	return {
		locale: t,
		messages: {
			...n.default,
			demo: r.default
		}
	};
});
async function my(e) {
	let t = await e;
	if (tr(t)) return t;
	try {
		let e = await (0, fy.headers)(), t = e.get("x-wexio-locale");
		if (tr(t)) return t;
		let n = (await (0, fy.cookies)()).get("wexio-locale")?.value;
		if (tr(n)) return n;
		let r = py(e.get("accept-language"));
		if (r) return r;
	} catch {}
	return "en";
}
//#endregion
//#region lib/locale-detect.ts
function hy(e, t) {
	if (typeof window > "u") return "en";
	if (!t?.ignoreVisitorOverrides) {
		let e = _y(new URL(window.location.href).searchParams.get("lang"));
		if (e) return e;
		let t = _y(vy("wexio-locale"));
		if (t) return t;
	}
	if (e && e !== "AUTO" && e !== "WEBSITE") {
		let t = _y(e);
		if (t) return t;
	} else if (e === "WEBSITE") {
		let e = _y(document.documentElement.lang);
		if (e) return e;
	}
	return _y(navigator.language) || "en";
}
var gy = new Map(er.map((e) => [e.toLowerCase(), e]));
function _y(e) {
	if (!e) return null;
	let t = e.toLowerCase().replace(/_/g, "-"), n = gy.get(t);
	if (n) return n;
	let r = t.split("-")[0];
	return gy.get(r) ?? null;
}
function vy(e) {
	let t = document.cookie.split(";");
	for (let n of t) {
		let [t, ...r] = n.trim().split("=");
		if (t === e) return decodeURIComponent(r.join("="));
	}
	return null;
}
//#endregion
//#region react-component/styles.css?inline
var yy = "/*! tailwindcss v4.3.0 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\"}::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\"}}}@layer theme{:root,:host{--color-amber-300:#ffd236;--color-emerald-300:#5ee9b5;--color-sky-300:#77d4ff;--color-violet-300:#c4b4ff;--color-rose-300:#ffa2ae;--color-zinc-100:#f4f4f5;--color-zinc-500:#71717b;--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height:calc(2.25 / 1.875);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wide:.025em;--tracking-wider:.05em;--leading-tight:1.25;--leading-snug:1.375;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--ease-in:cubic-bezier(.4, 0, 1, 1);--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-bounce:bounce 1s infinite;--blur-sm:8px;--blur-md:12px;--blur-lg:16px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-geist-sans);--default-mono-font-family:var(--font-geist-mono);--color-wx-fg-subtle:var(--wx-fg-subtle)}@supports (color:color(display-p3 0 0 0)){:root,:host{--color-amber-300:color(display-p3 .974327 .83063 .33298);--color-emerald-300:color(display-p3 .524941 .903425 .722352);--color-sky-300:color(display-p3 .546356 .822561 .990576);--color-violet-300:color(display-p3 .758872 .706261 .991729);--color-rose-300:color(display-p3 .96017 .647703 .683715);--color-zinc-100:color(display-p3 .956385 .956385 .959079);--color-zinc-500:color(display-p3 .442983 .442931 .480324)}}@supports (color:lab(0% 0 0)){:root,:host{--color-amber-300:lab(86.4156% 6.13147 78.3961);--color-emerald-300:lab(83.9203% -48.7124 13.8849);--color-sky-300:lab(80.3307% -20.2945 -31.385);--color-violet-300:lab(76.7419% 18.3911 -37.0706);--color-rose-300:lab(76.6339% 38.3549 9.68835);--color-zinc-100:lab(96.1634% .0993311 -.364041);--color-zinc-500:lab(47.8878% 1.65477 -5.77283)}}}@layer base{*,:after,:before{box-sizing:border-box;border:0 solid;margin:0;padding:0}::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::-webkit-file-upload-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::-webkit-file-upload-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:-webkit-any([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:-webkit-any([multiple],[size])) optgroup option{padding-inline-start:20px}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::-webkit-file-upload-button{margin-inline-end:4px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-year-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-month-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-day-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-hour-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-minute-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-second-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-millisecond-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-meridiem-field{padding-block-start:0;padding-block-end:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button{-webkit-appearance:button;appearance:button}input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;appearance:button}::-webkit-file-upload-button{-webkit-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip-path:none;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.-inset-1{inset:calc(var(--spacing) * -1)}.-inset-2{inset:calc(var(--spacing) * -2)}.inset-0{inset:calc(var(--spacing) * 0)}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.inset-x-2{inset-inline:calc(var(--spacing) * 2)}.-top-1{top:calc(var(--spacing) * -1)}.-top-1\\.5{top:calc(var(--spacing) * -1.5)}.top-0{top:calc(var(--spacing) * 0)}.top-0\\.5{top:calc(var(--spacing) * .5)}.top-1{top:calc(var(--spacing) * 1)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-4{top:calc(var(--spacing) * 4)}.-right-1{right:calc(var(--spacing) * -1)}.-right-1\\.5{right:calc(var(--spacing) * -1.5)}.-right-2{right:calc(var(--spacing) * -2)}.right-0{right:calc(var(--spacing) * 0)}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-5{right:calc(var(--spacing) * 5)}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-5{bottom:calc(var(--spacing) * 5)}.bottom-24{bottom:calc(var(--spacing) * 24)}.bottom-full{bottom:100%}.left-0{left:calc(var(--spacing) * 0)}.left-0\\.5{left:calc(var(--spacing) * .5)}.left-1{left:calc(var(--spacing) * 1)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-3\\.5{left:calc(var(--spacing) * 3.5)}.left-4{left:calc(var(--spacing) * 4)}.isolate{isolation:isolate}.isolation-auto{isolation:auto}.-z-10{z-index:calc(10 * -1)}.z-10{z-index:10}.z-20{z-index:20}.z-40{z-index:40}.z-50{z-index:50}.z-2147483599{z-index:2147483599}.z-2147483600{z-index:2147483600}.z-2147483601{z-index:2147483601}.z-2147483602{z-index:2147483602}.z-2147483647{z-index:2147483647}.z-\\[10000\\]{z-index:10000}.z-\\[2147483647\\]{z-index:2147483647}.\\!container{width:100%!important}@media (min-width:40rem){.\\!container{max-width:40rem!important}}@media (min-width:48rem){.\\!container{max-width:48rem!important}}@media (min-width:64rem){.\\!container{max-width:64rem!important}}@media (min-width:80rem){.\\!container{max-width:80rem!important}}@media (min-width:96rem){.\\!container{max-width:96rem!important}}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.container\\!{width:100%!important}@media (min-width:40rem){.container\\!{max-width:40rem!important}}@media (min-width:48rem){.container\\!{max-width:48rem!important}}@media (min-width:64rem){.container\\!{max-width:64rem!important}}@media (min-width:80rem){.container\\!{max-width:80rem!important}}@media (min-width:96rem){.container\\!{max-width:96rem!important}}.m-0{margin:calc(var(--spacing) * 0)}.mx-auto{margin-inline-start:auto;margin-inline-end:auto}.my-1{margin-block:calc(var(--spacing) * 1)}.my-2{margin-block:calc(var(--spacing) * 2)}.my-3{margin-block:calc(var(--spacing) * 3)}.my-4{margin-block:calc(var(--spacing) * 4)}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-1\\.5{margin-top:calc(var(--spacing) * 1.5)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-2\\.5{margin-top:calc(var(--spacing) * 2.5)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-5{margin-top:calc(var(--spacing) * 5)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mr-1{margin-right:calc(var(--spacing) * 1)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-1\\.5{margin-bottom:calc(var(--spacing) * 1.5)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.ml-0{margin-left:calc(var(--spacing) * 0)}.ml-0\\.5{margin-left:calc(var(--spacing) * .5)}.ml-9{margin-left:calc(var(--spacing) * 9)}.line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-10{-webkit-line-clamp:10;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.\\!hidden{display:none!important}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.inline-table{display:inline-table}.list-item{display:list-item}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-column{display:table-column}.table-column-group{display:table-column-group}.table-footer-group{display:table-footer-group}.table-header-group{display:table-header-group}.table-row{display:table-row}.table-row-group{display:table-row-group}.aspect-\\[16\\/10\\]{aspect-ratio:16/10}.aspect-square{aspect-ratio:1}.h-1{height:calc(var(--spacing) * 1)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2{height:calc(var(--spacing) * 2)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-13{height:calc(var(--spacing) * 13)}.h-14{height:calc(var(--spacing) * 14)}.h-16{height:calc(var(--spacing) * 16)}.h-24{height:calc(var(--spacing) * 24)}.h-96{height:calc(var(--spacing) * 96)}.h-\\[1\\.05em\\]{height:1.05em}.h-\\[2px\\]{height:2px}.h-\\[90vh\\]{height:90vh}.h-\\[720px\\]{height:720px}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.max-h-56{max-height:calc(var(--spacing) * 56)}.max-h-72{max-height:calc(var(--spacing) * 72)}.max-h-80{max-height:calc(var(--spacing) * 80)}.max-h-\\[20rem\\]{max-height:20rem}.max-h-\\[90vh\\]{max-height:90vh}.max-h-\\[calc\\(100\\%-7rem\\)\\]{max-height:calc(100% - 7rem)}.max-h-\\[calc\\(100dvh-7rem\\)\\]{max-height:calc(100dvh - 7rem)}.max-h-full{max-height:100%}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-12{min-height:calc(var(--spacing) * 12)}.w-1{width:calc(var(--spacing) * 1)}.w-1\\.5{width:calc(var(--spacing) * 1.5)}.w-1\\/2{width:50%}.w-1\\/3{width:33.3333%}.w-2{width:calc(var(--spacing) * 2)}.w-2\\/3{width:66.6667%}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-4\\/5{width:80%}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-7\\/12{width:58.3333%}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-9\\/12{width:75%}.w-10{width:calc(var(--spacing) * 10)}.w-10\\/12{width:83.3333%}.w-11{width:calc(var(--spacing) * 11)}.w-11\\/12{width:91.6667%}.w-12{width:calc(var(--spacing) * 12)}.w-14{width:calc(var(--spacing) * 14)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-32{width:calc(var(--spacing) * 32)}.w-40{width:calc(var(--spacing) * 40)}.w-44{width:calc(var(--spacing) * 44)}.w-56{width:calc(var(--spacing) * 56)}.w-60{width:calc(var(--spacing) * 60)}.w-\\[0\\.5em\\]{width:.5em}.w-\\[90vw\\]{width:90vw}.w-\\[300px\\]{width:300px}.w-\\[420px\\]{width:420px}.w-auto{width:auto}.w-full{width:100%}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90vw\\]{max-width:90vw}.max-w-\\[140px\\]{max-width:140px}.max-w-\\[calc\\(100\\%-2rem\\)\\]{max-width:calc(100% - 2rem)}.max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.max-w-full{max-width:100%}.max-w-none{max-width:none}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-3{min-width:calc(var(--spacing) * 3)}.min-w-3\\.5{min-width:calc(var(--spacing) * 3.5)}.min-w-5{min-width:calc(var(--spacing) * 5)}.min-w-32{min-width:calc(var(--spacing) * 32)}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.min-w-full{min-width:100%}.flex-1{flex:1}.flex-\\[2_2_0\\%\\]{flex:2 2}.flex-shrink,.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.table-fixed{table-layout:fixed}.border-collapse{border-collapse:collapse}.origin-bottom-left{transform-origin:0 100%}.origin-left{transform-origin:0}.-translate-x-1{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-4{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-\\[1px\\]{--tw-translate-x:1px;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[0\\.15em\\]{--tw-translate-y:.15em;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-none{translate:none}.scale-x-0{--tw-scale-x:0%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-x-100{--tw-scale-x:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-3d{scale:var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-bounce{animation:var(--animate-bounce)}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.cursor-zoom-in{cursor:zoom-in}.touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)}.touch-none{touch-action:none}.resize{resize:both}.resize-none{resize:none}.\\[scrollbar-width\\:thin\\]{scrollbar-width:thin}.\\[scrollbar-color\\:var\\(--color-wx-fg-subtle\\)_transparent\\]{scrollbar-color:var(--color-wx-fg-subtle) transparent}.list-none{list-style-type:none}.auto-rows-fr{grid-auto-rows:minmax(0,1fr)}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-rows-\\[0fr\\]{grid-template-rows:0fr}.grid-rows-\\[1fr\\]{grid-template-rows:1fr}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}:where(.-space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * -1) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * -1) * calc(1 - var(--tw-space-x-reverse)))}:where(.-space-x-1\\.5>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * -1.5) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * -1.5) * calc(1 - var(--tw-space-x-reverse)))}:where(.-space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * -2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * -2) * calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}:where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px * var(--tw-divide-x-reverse));border-inline-end-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px * var(--tw-divide-y-reverse));border-bottom-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.rounded{border-radius:.25rem}.rounded-\\[1px\\]{border-radius:1px}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-none{border-radius:0}.rounded-sm{border-radius:var(--radius-sm)}.rounded-wx{border-radius:var(--wx-radius)}.rounded-wx-lg{border-radius:var(--wx-radius-lg)}.rounded-wx-sm{border-radius:var(--wx-radius-sm)}.rounded-wx-xl{border-radius:var(--wx-radius-xl)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-s:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-s:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-s:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-s:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-ss:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-left-radius:.25rem}.rounded-ss:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-left-radius:.25rem}.rounded-ss:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-right-radius:.25rem}.rounded-ss:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-right-radius:.25rem}.rounded-e:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-e:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-e:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-se:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-right-radius:.25rem}.rounded-se:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-right-radius:.25rem}.rounded-se:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-left-radius:.25rem}.rounded-se:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-left-radius:.25rem}.rounded-ee:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-bottom-right-radius:.25rem}.rounded-ee:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-bottom-right-radius:.25rem}.rounded-ee:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-bottom-left-radius:.25rem}.rounded-ee:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-bottom-left-radius:.25rem}.rounded-es:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-bottom-left-radius:.25rem}.rounded-es:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-bottom-left-radius:.25rem}.rounded-es:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-bottom-right-radius:.25rem}.rounded-es:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-bottom-right-radius:.25rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-tl{border-top-left-radius:.25rem}.rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-tr{border-top-right-radius:.25rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-br{border-bottom-right-radius:.25rem}.rounded-bl{border-bottom-left-radius:.25rem}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-x{border-inline-style:var(--tw-border-style);border-left-width:1px;border-right-width:1px}.border-y{border-block-style:var(--tw-border-style);border-block-start-width:1px;border-block-end-width:1px}.border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.border-bs{border-block-start-style:var(--tw-border-style);border-block-start-width:1px}.border-be{border-block-end-style:var(--tw-border-style);border-block-end-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-white{border-color:var(--color-white)}.border-wx-bg{border-color:var(--wx-bg)}.border-wx-border,.border-wx-border\\/70{border-color:var(--wx-border)}@supports (color:color-mix(in lab, red, red)){.border-wx-border\\/70{border-color:color-mix(in oklab, var(--wx-border) 70%, transparent)}}.border-wx-danger,.border-wx-danger\\/30{border-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.border-wx-danger\\/30{border-color:color-mix(in oklab, var(--wx-danger) 30%, transparent)}}.border-wx-launcher-fg,.border-wx-launcher-fg\\/30{border-color:var(--wx-launcher-fg)}@supports (color:color-mix(in lab, red, red)){.border-wx-launcher-fg\\/30{border-color:color-mix(in oklab, var(--wx-launcher-fg) 30%, transparent)}}.border-wx-primary,.border-wx-primary\\/30{border-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.border-wx-primary\\/30{border-color:color-mix(in oklab, var(--wx-primary) 30%, transparent)}}.border-wx-success,.border-wx-success\\/30{border-color:var(--wx-success)}@supports (color:color-mix(in lab, red, red)){.border-wx-success\\/30{border-color:color-mix(in oklab, var(--wx-success) 30%, transparent)}}.border-t-transparent{border-top-color:#0000}.border-t-wx-launcher-fg{border-top-color:var(--wx-launcher-fg)}.border-t-wx-primary{border-top-color:var(--wx-primary)}.border-l-transparent{border-left-color:#0000}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab, red, red)){.bg-black\\/30{background-color:color-mix(in oklab, var(--color-black) 30%, transparent)}}.bg-black\\/45{background-color:#00000073}@supports (color:color-mix(in lab, red, red)){.bg-black\\/45{background-color:color-mix(in oklab, var(--color-black) 45%, transparent)}}.bg-black\\/85{background-color:#000000d9}@supports (color:color-mix(in lab, red, red)){.bg-black\\/85{background-color:color-mix(in oklab, var(--color-black) 85%, transparent)}}.bg-current{background-color:currentColor}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/10{background-color:#ffffff1a}@supports (color:color-mix(in lab, red, red)){.bg-white\\/10{background-color:color-mix(in oklab, var(--color-white) 10%, transparent)}}.bg-wx-bg{background-color:var(--wx-bg)}.bg-wx-bg-elevated{background-color:var(--wx-bg-elevated)}.bg-wx-bg-elevated-2{background-color:var(--wx-bg-elevated-2)}.bg-wx-bg-elevated\\/60{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg-elevated\\/60{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.bg-wx-bg-elevated\\/70{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg-elevated\\/70{background-color:color-mix(in oklab, var(--wx-bg-elevated) 70%, transparent)}}.bg-wx-bg\\/60{background-color:var(--wx-bg)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg\\/60{background-color:color-mix(in oklab, var(--wx-bg) 60%, transparent)}}.bg-wx-bg\\/95{background-color:var(--wx-bg)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg\\/95{background-color:color-mix(in oklab, var(--wx-bg) 95%, transparent)}}.bg-wx-danger,.bg-wx-danger\\/5{background-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.bg-wx-danger\\/5{background-color:color-mix(in oklab, var(--wx-danger) 5%, transparent)}}.bg-wx-danger\\/10{background-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.bg-wx-danger\\/10{background-color:color-mix(in oklab, var(--wx-danger) 10%, transparent)}}.bg-wx-danger\\/40{background-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.bg-wx-danger\\/40{background-color:color-mix(in oklab, var(--wx-danger) 40%, transparent)}}.bg-wx-fg-muted,.bg-wx-fg-muted\\/40{background-color:var(--wx-fg-muted)}@supports (color:color-mix(in lab, red, red)){.bg-wx-fg-muted\\/40{background-color:color-mix(in oklab, var(--wx-fg-muted) 40%, transparent)}}.bg-wx-launcher-bg{background-color:var(--wx-launcher-bg)}.bg-wx-primary{background-color:var(--wx-primary)}.bg-wx-primary-fg,.bg-wx-primary-fg\\/10{background-color:var(--wx-primary-fg)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary-fg\\/10{background-color:color-mix(in oklab, var(--wx-primary-fg) 10%, transparent)}}.bg-wx-primary\\/5{background-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary\\/5{background-color:color-mix(in oklab, var(--wx-primary) 5%, transparent)}}.bg-wx-primary\\/10{background-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary\\/10{background-color:color-mix(in oklab, var(--wx-primary) 10%, transparent)}}.bg-wx-primary\\/20{background-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary\\/20{background-color:color-mix(in oklab, var(--wx-primary) 20%, transparent)}}.bg-wx-success,.bg-wx-success\\/5{background-color:var(--wx-success)}@supports (color:color-mix(in lab, red, red)){.bg-wx-success\\/5{background-color:color-mix(in oklab, var(--wx-success) 5%, transparent)}}.bg-wx-success\\/10{background-color:var(--wx-success)}@supports (color:color-mix(in lab, red, red)){.bg-wx-success\\/10{background-color:color-mix(in oklab, var(--wx-success) 10%, transparent)}}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-\\[radial-gradient\\(120\\%_80\\%_at_50\\%_-10\\%\\,rgba\\(99\\,102\\,241\\,0\\.22\\)\\,transparent_55\\%\\)\\,linear-gradient\\(to_bottom\\,var\\(--wx-bg-elevated-2\\)_0\\%\\,var\\(--wx-bg-elevated\\)_40\\%\\,var\\(--wx-bg\\)_75\\%\\)\\]{background-image:radial-gradient(120% 80% at 50% -10%,#6366f138,transparent 55%),linear-gradient(to bottom,var(--wx-bg-elevated-2) 0%,var(--wx-bg-elevated) 40%,var(--wx-bg) 75%)}.from-wx-bg-elevated{--tw-gradient-from:var(--wx-bg-elevated);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-wx-bg-elevated-2{--tw-gradient-to:var(--wx-bg-elevated-2);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.bg-cover{background-size:cover}.bg-center{background-position:50%}.bg-repeat{background-repeat:repeat}.mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.p-0{padding:calc(var(--spacing) * 0)}.p-0\\.5{padding:calc(var(--spacing) * .5)}.p-1{padding:calc(var(--spacing) * 1)}.p-2{padding:calc(var(--spacing) * 2)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-px{padding:1px}.px-0{padding-inline:calc(var(--spacing) * 0)}.px-0\\.75{padding-inline:calc(var(--spacing) * .75)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-5{padding-block:calc(var(--spacing) * 5)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-10{padding-block:calc(var(--spacing) * 10)}.py-12{padding-block:calc(var(--spacing) * 12)}.pt-0{padding-top:calc(var(--spacing) * 0)}.pt-0\\.5{padding-top:calc(var(--spacing) * .5)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-1\\.5{padding-top:calc(var(--spacing) * 1.5)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pt-5{padding-top:calc(var(--spacing) * 5)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-9{padding-right:calc(var(--spacing) * 9)}.pb-1{padding-bottom:calc(var(--spacing) * 1)}.pb-1\\.5{padding-bottom:calc(var(--spacing) * 1.5)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-12{padding-bottom:calc(var(--spacing) * 12)}.pl-7{padding-left:calc(var(--spacing) * 7)}.pl-10{padding-left:calc(var(--spacing) * 10)}.text-center{text-align:center}.text-left{text-align:left}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.font-mono{font-family:var(--font-geist-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[0\\.7em\\]{font-size:.7em}.text-\\[8px\\]{font-size:8px}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.text-\\[15px\\]{font-size:15px}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.08em\\]{--tw-tracking:.08em;letter-spacing:.08em}.tracking-\\[0\\.14em\\]{--tw-tracking:.14em;letter-spacing:.14em}.tracking-\\[0\\.22em\\]{--tw-tracking:.22em;letter-spacing:.22em}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-wrap{text-wrap:wrap}.wrap-anywhere{overflow-wrap:anywhere}.text-clip{text-overflow:clip}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-white{color:var(--color-white)}.text-wx-danger{color:var(--wx-danger)}.text-wx-fg{color:var(--wx-fg)}.text-wx-fg-muted{color:var(--wx-fg-muted)}.text-wx-fg-subtle{color:var(--wx-fg-subtle)}.text-wx-launcher-fg{color:var(--wx-launcher-fg)}.text-wx-primary{color:var(--wx-primary)}.text-wx-primary-fg,.text-wx-primary-fg\\/70{color:var(--wx-primary-fg)}@supports (color:color-mix(in lab, red, red)){.text-wx-primary-fg\\/70{color:color-mix(in oklab, var(--wx-primary-fg) 70%, transparent)}}.text-wx-success{color:var(--wx-success)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.opacity-0{opacity:0}.opacity-40{opacity:.4}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-80{opacity:.8}.opacity-85{opacity:.85}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_1px_3px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow:0 1px 3px var(--tw-shadow-color,#00000014);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_2px_8px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow:0 2px 8px var(--tw-shadow-color,#00000014);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_4px_12px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow:0 4px 12px var(--tw-shadow-color,#00000014);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_8px_24px_rgba\\(0\\,0\\,0\\,0\\.18\\)\\]{--tw-shadow:0 8px 24px var(--tw-shadow-color,#0000002e);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_12px_32px_rgba\\(0\\,0\\,0\\,0\\.16\\)\\]{--tw-shadow:0 12px 32px var(--tw-shadow-color,#00000029);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_16px_40px_rgba\\(0\\,0\\,0\\,0\\.16\\)\\]{--tw-shadow:0 16px 40px var(--tw-shadow-color,#00000029);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[inset_0_0_0_1px_rgb\\(0_0_0\\/0\\.04\\)\\]{--tw-shadow:inset 0 0 0 1px var(--tw-shadow-color,#0000000a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring,.ring-1{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-wx-bg{--tw-ring-color:var(--wx-bg)}.ring-wx-bg-elevated,.ring-wx-bg-elevated\\/60{--tw-ring-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.ring-wx-bg-elevated\\/60{--tw-ring-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.ring-wx-border{--tw-ring-color:var(--wx-border)}.ring-wx-danger{--tw-ring-color:var(--wx-danger)}.ring-wx-primary,.ring-wx-primary\\/40{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.ring-wx-primary\\/40{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 40%, transparent)}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.blur-\\[2px\\]{--tw-blur:blur(2px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.blur-lg{--tw-blur:blur(var(--blur-lg));filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[grid-template-rows\\]{transition-property:grid-template-rows;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.\\[animation-delay\\:-0\\.3s\\]{animation-delay:-.3s}.\\[animation-delay\\:-0\\.15s\\]{animation-delay:-.15s}.\\[t\\:systemFieldOptions\\.chatStatus\\.IN_PROGRESS\\]{t:systemFieldOptions.chatStatus.IN PROGRESS}.\\[t\\:systemFields\\.chatStatus\\]{t:systemFields.chatStatus}.\\[t\\:systemFields\\.firstName\\]{t:systemFields.firstName}:where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ring-inset{--tw-ring-inset:inset}@media (hover:hover){.group-hover\\:translate-x-0\\.5:is(:where(.group):hover *){--tw-translate-x:calc(var(--spacing) * .5);translate:var(--tw-translate-x) var(--tw-translate-y)}.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.group-hover\\:scale-\\[1\\.02\\]:is(:where(.group):hover *){scale:1.02}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}}.placeholder\\:text-wx-danger\\/60::placeholder{color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.placeholder\\:text-wx-danger\\/60::placeholder{color:color-mix(in oklab, var(--wx-danger) 60%, transparent)}}.placeholder\\:text-wx-fg-muted::placeholder{color:var(--wx-fg-muted)}.placeholder\\:text-wx-fg-subtle::placeholder{color:var(--wx-fg-subtle)}.first\\:mt-4:first-child{margin-top:calc(var(--spacing) * 4)}.first\\:border-t-0:first-child{border-top-style:var(--tw-border-style);border-top-width:0}.first\\:pt-0:first-child{padding-top:calc(var(--spacing) * 0)}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.read-only\\:cursor-not-allowed:read-only{cursor:not-allowed}.read-only\\:bg-wx-bg-elevated\\/60:read-only{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.read-only\\:bg-wx-bg-elevated\\/60:read-only{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.read-only\\:text-wx-fg-muted:read-only{color:var(--wx-fg-muted)}.focus-within\\:border-wx-primary:focus-within{border-color:var(--wx-primary)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-within\\:ring-wx-primary\\/20:focus-within{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus-within\\:ring-wx-primary\\/20:focus-within{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 20%, transparent)}}@media (hover:hover){.hover\\:scale-\\[1\\.04\\]:hover{scale:1.04}.hover\\:bg-white\\/20:hover{background-color:#fff3}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-white\\/20:hover{background-color:color-mix(in oklab, var(--color-white) 20%, transparent)}}.hover\\:bg-wx-bg:hover{background-color:var(--wx-bg)}.hover\\:bg-wx-bg-elevated:hover{background-color:var(--wx-bg-elevated)}.hover\\:bg-wx-bg-elevated-2:hover{background-color:var(--wx-bg-elevated-2)}.hover\\:bg-wx-bg-elevated\\/40:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/40:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 40%, transparent)}}.hover\\:bg-wx-bg-elevated\\/50:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/50:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 50%, transparent)}}.hover\\:bg-wx-bg-elevated\\/60:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/60:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.hover\\:bg-wx-bg-elevated\\/80:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/80:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 80%, transparent)}}.hover\\:bg-wx-fg-muted\\/60:hover{background-color:var(--wx-fg-muted)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-fg-muted\\/60:hover{background-color:color-mix(in oklab, var(--wx-fg-muted) 60%, transparent)}}.hover\\:bg-wx-primary:hover{background-color:var(--wx-primary)}.hover\\:bg-wx-primary-fg\\/20:hover{background-color:var(--wx-primary-fg)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-primary-fg\\/20:hover{background-color:color-mix(in oklab, var(--wx-primary-fg) 20%, transparent)}}.hover\\:bg-wx-primary-hover:hover{background-color:var(--wx-primary-hover)}.hover\\:text-wx-danger:hover{color:var(--wx-danger)}.hover\\:text-wx-fg:hover{color:var(--wx-fg)}.hover\\:text-wx-primary-fg:hover{color:var(--wx-primary-fg)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-70:hover{opacity:.7}.hover\\:opacity-80:hover{opacity:.8}.hover\\:opacity-90:hover{opacity:.9}.hover\\:opacity-100:hover{opacity:1}}.focus\\:border-wx-primary:focus{border-color:var(--wx-primary)}.focus\\:bg-wx-bg-elevated:focus{background-color:var(--wx-bg-elevated)}.focus\\:text-wx-fg:focus{color:var(--wx-fg)}.focus\\:ring-0:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-wx-danger:focus{--tw-ring-color:var(--wx-danger)}.focus\\:ring-wx-primary:focus,.focus\\:ring-wx-primary\\/20:focus{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus\\:ring-wx-primary\\/20:focus{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 20%, transparent)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-wx-launcher-bg:focus-visible{--tw-ring-color:var(--wx-launcher-bg)}.focus-visible\\:ring-wx-primary:focus-visible{--tw-ring-color:var(--wx-primary)}.focus-visible\\:ring-wx-primary\\/30:focus-visible{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus-visible\\:ring-wx-primary\\/30:focus-visible{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 30%, transparent)}}.focus-visible\\:ring-wx-primary\\/40:focus-visible{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus-visible\\:ring-wx-primary\\/40:focus-visible{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 40%, transparent)}}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:ring-offset-wx-bg:focus-visible{--tw-ring-offset-color:var(--wx-bg)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-wx-bg-elevated\\/60:disabled{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.disabled\\:bg-wx-bg-elevated\\/60:disabled{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.disabled\\:text-wx-fg-muted:disabled{color:var(--wx-fg-muted)}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60:disabled{opacity:.6}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=active\\]\\:text-wx-fg[data-state=active]{color:var(--wx-fg)}.data-\\[state\\=checked\\]\\:font-medium[data-state=checked]{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.data-\\[state\\=visible\\]\\:opacity-100[data-state=visible]{opacity:1}.dark\\:block:where([data-theme=dark],[data-theme=dark] *){display:block}.dark\\:hidden:where([data-theme=dark],[data-theme=dark] *){display:none}.dark\\:border-wx-bg\\/30:where([data-theme=dark],[data-theme=dark] *){border-color:var(--wx-bg)}@supports (color:color-mix(in lab, red, red)){.dark\\:border-wx-bg\\/30:where([data-theme=dark],[data-theme=dark] *){border-color:color-mix(in oklab, var(--wx-bg) 30%, transparent)}}.dark\\:border-t-wx-bg:where([data-theme=dark],[data-theme=dark] *){border-top-color:var(--wx-bg)}.dark\\:bg-\\[radial-gradient\\(120\\%_80\\%_at_50\\%_-10\\%\\,rgba\\(99\\,102\\,241\\,0\\.35\\)\\,transparent_55\\%\\)\\,linear-gradient\\(to_bottom\\,var\\(--wx-bg-elevated-2\\)_0\\%\\,var\\(--wx-bg-elevated\\)_40\\%\\,var\\(--wx-bg\\)_75\\%\\)\\]:where([data-theme=dark],[data-theme=dark] *){background-image:radial-gradient(120% 80% at 50% -10%,#6366f159,transparent 55%),linear-gradient(to bottom,var(--wx-bg-elevated-2) 0%,var(--wx-bg-elevated) 40%,var(--wx-bg) 75%)}.\\[\\&_\\.epr-btn-clear-search\\:focus\\]\\:\\!bg-wx-bg-elevated-2 .epr-btn-clear-search:focus,.\\[\\&_\\.epr-btn-clear-search\\:hover\\]\\:\\!bg-wx-bg-elevated-2 .epr-btn-clear-search:hover{background-color:var(--wx-bg-elevated-2)!important}.\\[\\&_\\.hljs-attr\\]\\:text-sky-300 .hljs-attr,.\\[\\&_\\.hljs-attribute\\]\\:text-sky-300 .hljs-attribute{color:var(--color-sky-300)}.\\[\\&_\\.hljs-built_in\\]\\:text-violet-300 .hljs-built in{color:var(--color-violet-300)}.\\[\\&_\\.hljs-comment\\]\\:text-zinc-500 .hljs-comment{color:var(--color-zinc-500)}.\\[\\&_\\.hljs-comment\\]\\:italic .hljs-comment{font-style:italic}.\\[\\&_\\.hljs-keyword\\]\\:text-violet-300 .hljs-keyword{color:var(--color-violet-300)}.\\[\\&_\\.hljs-literal\\]\\:text-amber-300 .hljs-literal{color:var(--color-amber-300)}.\\[\\&_\\.hljs-name\\]\\:text-rose-300 .hljs-name{color:var(--color-rose-300)}.\\[\\&_\\.hljs-number\\]\\:text-amber-300 .hljs-number{color:var(--color-amber-300)}.\\[\\&_\\.hljs-string\\]\\:text-emerald-300 .hljs-string{color:var(--color-emerald-300)}.\\[\\&_\\.hljs-tag\\]\\:text-rose-300 .hljs-tag{color:var(--color-rose-300)}.\\[\\&_\\.hljs-title\\]\\:font-medium .hljs-title{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.\\[\\&_\\.hljs-title\\]\\:text-zinc-100 .hljs-title{color:var(--color-zinc-100)}.\\[\\&_\\.hljs-type\\]\\:text-violet-300 .hljs-type{color:var(--color-violet-300)}.\\[\\&_a\\]\\:text-inherit a{color:inherit}.\\[\\&_a\\]\\:text-wx-primary a{color:var(--wx-primary)}.\\[\\&_a\\]\\:no-underline a{text-decoration-line:none}.\\[\\&_a\\]\\:underline a{text-decoration-line:underline}.\\[\\&_a\\]\\:underline-offset-2 a{text-underline-offset:2px}.\\[\\&_a\\]\\:opacity-90 a{opacity:.9}.\\[\\&_a\\]\\:transition-opacity a{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_a\\:hover\\]\\:opacity-70 a:hover{opacity:.7}.\\[\\&_a\\:hover\\]\\:opacity-100 a:hover{opacity:1}.\\[\\&_blockquote\\]\\:my-4 blockquote{margin-block:calc(var(--spacing) * 4)}.\\[\\&_blockquote\\]\\:border-l-2 blockquote{border-left-style:var(--tw-border-style);border-left-width:2px}.\\[\\&_blockquote\\]\\:border-wx-primary\\/40 blockquote{border-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.\\[\\&_blockquote\\]\\:border-wx-primary\\/40 blockquote{border-color:color-mix(in oklab, var(--wx-primary) 40%, transparent)}}.\\[\\&_blockquote\\]\\:pl-3 blockquote{padding-left:calc(var(--spacing) * 3)}.\\[\\&_blockquote\\]\\:text-wx-fg-muted blockquote{color:var(--wx-fg-muted)}.\\[\\&_blockquote\\]\\:italic blockquote{font-style:italic}.\\[\\&_code\\]\\:rounded-\\[6px\\] code{border-radius:6px}.\\[\\&_code\\]\\:rounded-sm code{border-radius:var(--radius-sm)}.\\[\\&_code\\]\\:bg-black\\/10 code{background-color:#0000001a}@supports (color:color-mix(in lab, red, red)){.\\[\\&_code\\]\\:bg-black\\/10 code{background-color:color-mix(in oklab, var(--color-black) 10%, transparent)}}.\\[\\&_code\\]\\:bg-white\\/15 code{background-color:#ffffff26}@supports (color:color-mix(in lab, red, red)){.\\[\\&_code\\]\\:bg-white\\/15 code{background-color:color-mix(in oklab, var(--color-white) 15%, transparent)}}.\\[\\&_code\\]\\:bg-wx-bg-elevated code{background-color:var(--wx-bg-elevated)}.\\[\\&_code\\]\\:px-1 code{padding-inline:calc(var(--spacing) * 1)}.\\[\\&_code\\]\\:px-1\\.5 code{padding-inline:calc(var(--spacing) * 1.5)}.\\[\\&_code\\]\\:py-0\\.5 code{padding-block:calc(var(--spacing) * .5)}.\\[\\&_code\\]\\:font-mono code{font-family:var(--font-geist-mono)}.\\[\\&_code\\]\\:text-\\[0\\.85em\\] code{font-size:.85em}.\\[\\&_details\\]\\:my-2 details{margin-block:calc(var(--spacing) * 2)}.\\[\\&_details\\]\\:overflow-hidden details{overflow:hidden}.\\[\\&_details\\]\\:rounded-lg details{border-radius:var(--radius-lg)}.\\[\\&_details\\]\\:border details{border-style:var(--tw-border-style);border-width:1px}.\\[\\&_details\\]\\:border-wx-border details{border-color:var(--wx-border)}.\\[\\&_details\\]\\:bg-wx-bg-elevated\\/40 details{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.\\[\\&_details\\]\\:bg-wx-bg-elevated\\/40 details{background-color:color-mix(in oklab, var(--wx-bg-elevated) 40%, transparent)}}.\\[\\&_details\\+details\\]\\:mt-2 details+details{margin-top:calc(var(--spacing) * 2)}.\\[\\&_details\\[open\\]_summary\\]\\:border-b details[open] summary{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.\\[\\&_details\\[open\\]_summary\\]\\:border-wx-border details[open] summary{border-color:var(--wx-border)}.\\[\\&_details\\[open\\]_summary\\]\\:after\\:rotate-90 details[open] summary:after{content:var(--tw-content);rotate:90deg}.\\[\\&_em\\]\\:italic em{font-style:italic}.\\[\\&_figcaption\\]\\:mt-2 figcaption{margin-top:calc(var(--spacing) * 2)}.\\[\\&_figcaption\\]\\:text-xs figcaption{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.\\[\\&_figcaption\\]\\:text-wx-fg-muted figcaption{color:var(--wx-fg-muted)}.\\[\\&_figcaption\\]\\:italic figcaption{font-style:italic}.\\[\\&_figure\\]\\:my-5 figure{margin-block:calc(var(--spacing) * 5)}.\\[\\&_figure\\]\\:flex figure{display:flex}.\\[\\&_figure\\]\\:flex-col figure{flex-direction:column}.\\[\\&_figure\\]\\:items-center figure{align-items:center}.\\[\\&_figure\\]\\:text-center figure{text-align:center}.\\[\\&_figure_img\\]\\:my-0 figure img{margin-block:calc(var(--spacing) * 0)}.\\[\\&_h1\\]\\:mt-6 h1{margin-top:calc(var(--spacing) * 6)}.\\[\\&_h1\\]\\:mb-3 h1{margin-bottom:calc(var(--spacing) * 3)}.\\[\\&_h1\\]\\:scroll-mt-16 h1{scroll-margin-top:calc(var(--spacing) * 16)}.\\[\\&_h1\\]\\:text-xl h1{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.\\[\\&_h1\\]\\:font-semibold h1{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_h1\\]\\:tracking-tight h1{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.\\[\\&_h2\\]\\:mt-5 h2{margin-top:calc(var(--spacing) * 5)}.\\[\\&_h2\\]\\:mb-2 h2{margin-bottom:calc(var(--spacing) * 2)}.\\[\\&_h2\\]\\:scroll-mt-16 h2{scroll-margin-top:calc(var(--spacing) * 16)}.\\[\\&_h2\\]\\:text-base h2{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\[\\&_h2\\]\\:font-semibold h2{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_h2\\]\\:tracking-tight h2{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.\\[\\&_h3\\]\\:mt-4 h3{margin-top:calc(var(--spacing) * 4)}.\\[\\&_h3\\]\\:mb-1\\.5 h3{margin-bottom:calc(var(--spacing) * 1.5)}.\\[\\&_h3\\]\\:scroll-mt-16 h3{scroll-margin-top:calc(var(--spacing) * 16)}.\\[\\&_h3\\]\\:text-sm h3{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\[\\&_h3\\]\\:font-semibold h3{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_hr\\]\\:my-6 hr{margin-block:calc(var(--spacing) * 6)}.\\[\\&_hr\\]\\:border-wx-border hr{border-color:var(--wx-border)}.\\[\\&_img\\]\\:mx-auto img{margin-inline-start:auto;margin-inline-end:auto}.\\[\\&_img\\]\\:my-3 img{margin-block:calc(var(--spacing) * 3)}.\\[\\&_img\\]\\:block img{display:block}.\\[\\&_img\\]\\:max-w-full img{max-width:100%}.\\[\\&_li\\]\\:m-0 li{margin:calc(var(--spacing) * 0)}.\\[\\&_li\\]\\:my-0\\.5 li{margin-block:calc(var(--spacing) * .5)}.\\[\\&_li\\]\\:my-1 li{margin-block:calc(var(--spacing) * 1)}.\\[\\&_ol\\]\\:my-1\\.5 ol{margin-block:calc(var(--spacing) * 1.5)}.\\[\\&_ol\\]\\:my-3 ol{margin-block:calc(var(--spacing) * 3)}.\\[\\&_ol\\]\\:list-decimal ol{list-style-type:decimal}.\\[\\&_ol\\]\\:pl-5 ol{padding-left:calc(var(--spacing) * 5)}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol ::marker{color:var(--wx-fg-subtle)}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol::marker{color:var(--wx-fg-subtle)}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol ::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_p\\]\\:my-3 p{margin-block:calc(var(--spacing) * 3)}.\\[\\&_pre\\]\\:my-4 pre{margin-block:calc(var(--spacing) * 4)}.\\[\\&_pre\\]\\:overflow-x-auto pre{overflow-x:auto}.\\[\\&_pre\\]\\:rounded-lg pre{border-radius:var(--radius-lg)}.\\[\\&_pre\\]\\:border pre{border-style:var(--tw-border-style);border-width:1px}.\\[\\&_pre\\]\\:border-wx-border pre{border-color:var(--wx-border)}.\\[\\&_pre\\]\\:bg-\\[\\#0f1115\\] pre{background-color:#0f1115}.\\[\\&_pre\\]\\:p-4 pre{padding:calc(var(--spacing) * 4)}.\\[\\&_pre\\]\\:text-\\[12\\.5px\\] pre{font-size:12.5px}.\\[\\&_pre\\]\\:leading-relaxed pre{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.\\[\\&_pre\\]\\:text-zinc-100 pre{color:var(--color-zinc-100)}.\\[\\&_pre_code\\]\\:bg-transparent pre code{background-color:#0000}.\\[\\&_pre_code\\]\\:p-0 pre code{padding:calc(var(--spacing) * 0)}.\\[\\&_pre_code\\]\\:text-zinc-100 pre code{color:var(--color-zinc-100)}.\\[\\&_strong\\]\\:font-semibold strong{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_summary\\]\\:relative summary{position:relative}.\\[\\&_summary\\]\\:cursor-pointer summary{cursor:pointer}.\\[\\&_summary\\]\\:list-none summary{list-style-type:none}.\\[\\&_summary\\]\\:px-4 summary{padding-inline:calc(var(--spacing) * 4)}.\\[\\&_summary\\]\\:py-3 summary{padding-block:calc(var(--spacing) * 3)}.\\[\\&_summary\\]\\:pr-10 summary{padding-right:calc(var(--spacing) * 10)}.\\[\\&_summary\\]\\:text-sm summary{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\[\\&_summary\\]\\:font-medium summary{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.\\[\\&_summary\\]\\:text-wx-fg summary{color:var(--wx-fg)}.\\[\\&_summary\\]\\:after\\:absolute summary:after{content:var(--tw-content);position:absolute}.\\[\\&_summary\\]\\:after\\:top-1\\/2 summary:after{content:var(--tw-content);top:50%}.\\[\\&_summary\\]\\:after\\:right-4 summary:after{content:var(--tw-content);right:calc(var(--spacing) * 4)}.\\[\\&_summary\\]\\:after\\:-translate-y-1\\/2 summary:after{content:var(--tw-content);--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\&_summary\\]\\:after\\:text-base summary:after{content:var(--tw-content);font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\[\\&_summary\\]\\:after\\:leading-none summary:after{content:var(--tw-content);--tw-leading:1;line-height:1}.\\[\\&_summary\\]\\:after\\:text-wx-fg-subtle summary:after{content:var(--tw-content);color:var(--wx-fg-subtle)}.\\[\\&_summary\\]\\:after\\:transition-transform summary:after{content:var(--tw-content);transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_summary\\]\\:after\\:content-\\[\\'\\\\\\\\203A\\'\\] summary:after{--tw-content:\"\\\\203A\";content:var(--tw-content)}.\\[\\&_summary\\]\\:after\\:content-\\[\\'\\\\\\\\\\\\\\\\203A\\'\\] summary:after{--tw-content:\"\\\\\\\\203A\";content:var(--tw-content)}.\\[\\&_summary\\:\\:-webkit-details-marker\\]\\:hidden summary::-webkit-details-marker{display:none}.\\[\\&_summary\\:\\:marker\\]\\:hidden summary::marker{display:none}.\\[\\&_svg\\]\\:fill-current svg{fill:currentColor}.\\[\\&_svg\\]\\:fill-wx-launcher-fg svg{fill:var(--wx-launcher-fg)}.\\[\\&_svg\\]\\:stroke-current svg{stroke:currentColor}.\\[\\&_svg\\]\\:stroke-wx-launcher-fg svg{stroke:var(--wx-launcher-fg)}.dark\\:\\[\\&_svg\\]\\:fill-wx-bg:where([data-theme=dark],[data-theme=dark] *) svg{fill:var(--wx-bg)}.dark\\:\\[\\&_svg\\]\\:stroke-wx-bg:where([data-theme=dark],[data-theme=dark] *) svg{stroke:var(--wx-bg)}.\\[\\&_table\\]\\:my-3 table{margin-block:calc(var(--spacing) * 3)}.\\[\\&_table\\]\\:w-full table{width:100%}.\\[\\&_table\\]\\:table-fixed table{table-layout:fixed}.\\[\\&_table\\]\\:border-collapse table{border-collapse:collapse}.\\[\\&_table\\]\\:overflow-hidden table{overflow:hidden}.\\[\\&_table\\]\\:rounded-lg table{border-radius:var(--radius-lg)}.\\[\\&_table\\]\\:border table{border-style:var(--tw-border-style);border-width:1px}.\\[\\&_table\\]\\:border-wx-border table{border-color:var(--wx-border)}.\\[\\&_table\\]\\:text-xs table{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.\\[\\&_tbody_tr\\]\\:border-t tbody tr{border-top-style:var(--tw-border-style);border-top-width:1px}.\\[\\&_tbody_tr\\]\\:border-wx-border tbody tr{border-color:var(--wx-border)}.\\[\\&_tbody_tr\\:nth-child\\(odd\\)\\]\\:bg-wx-bg-elevated\\/40 tbody tr:nth-child(odd){background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.\\[\\&_tbody_tr\\:nth-child\\(odd\\)\\]\\:bg-wx-bg-elevated\\/40 tbody tr:nth-child(odd){background-color:color-mix(in oklab, var(--wx-bg-elevated) 40%, transparent)}}.\\[\\&_td\\]\\:px-2\\.5 td{padding-inline:calc(var(--spacing) * 2.5)}.\\[\\&_td\\]\\:py-1\\.5 td{padding-block:calc(var(--spacing) * 1.5)}.\\[\\&_td\\]\\:align-top td{vertical-align:top}.\\[\\&_td\\]\\:text-wx-fg td{color:var(--wx-fg)}.\\[\\&_td_p\\]\\:my-0 td p{margin-block:calc(var(--spacing) * 0)}.\\[\\&_td_p\\]\\:inline td p{display:inline}.\\[\\&_td\\+td\\]\\:border-l td+td{border-left-style:var(--tw-border-style);border-left-width:1px}.\\[\\&_td\\+td\\]\\:border-wx-border td+td{border-color:var(--wx-border)}.\\[\\&_th\\]\\:border-b th{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.\\[\\&_th\\]\\:border-wx-border th{border-color:var(--wx-border)}.\\[\\&_th\\]\\:px-2\\.5 th{padding-inline:calc(var(--spacing) * 2.5)}.\\[\\&_th\\]\\:py-1\\.5 th{padding-block:calc(var(--spacing) * 1.5)}.\\[\\&_th\\]\\:text-left th{text-align:left}.\\[\\&_th\\]\\:font-medium th{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.\\[\\&_th\\]\\:text-wx-fg th{color:var(--wx-fg)}.\\[\\&_th_p\\]\\:my-0 th p{margin-block:calc(var(--spacing) * 0)}.\\[\\&_th_p\\]\\:inline th p{display:inline}.\\[\\&_th\\+th\\]\\:border-l th+th{border-left-style:var(--tw-border-style);border-left-width:1px}.\\[\\&_th\\+th\\]\\:border-wx-border th+th{border-color:var(--wx-border)}.\\[\\&_thead\\]\\:bg-wx-bg-elevated thead{background-color:var(--wx-bg-elevated)}.\\[\\&_ul\\]\\:m-0 ul{margin:calc(var(--spacing) * 0)}.\\[\\&_ul\\]\\:my-1\\.5 ul{margin-block:calc(var(--spacing) * 1.5)}.\\[\\&_ul\\]\\:my-3 ul{margin-block:calc(var(--spacing) * 3)}.\\[\\&_ul\\]\\:list-disc ul{list-style-type:disc}.\\[\\&_ul\\]\\:list-none ul{list-style-type:none}.\\[\\&_ul\\]\\:p-0 ul{padding:calc(var(--spacing) * 0)}.\\[\\&_ul\\]\\:pl-5 ul{padding-left:calc(var(--spacing) * 5)}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul ::marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul::marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul ::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\[data-type\\=taskList\\]\\]\\:list-none\\! ul[data-type=taskList]{list-style-type:none!important}.\\[\\&_ul\\[data-type\\=taskList\\]\\]\\:pl-0\\! ul[data-type=taskList]{padding-left:calc(var(--spacing) * 0)!important}.\\[\\&_ul\\[data-type\\=taskList\\]_input\\]\\:h-3\\.5 ul[data-type=taskList] input{height:calc(var(--spacing) * 3.5)}.\\[\\&_ul\\[data-type\\=taskList\\]_input\\]\\:w-3\\.5 ul[data-type=taskList] input{width:calc(var(--spacing) * 3.5)}.\\[\\&_ul\\[data-type\\=taskList\\]_input\\]\\:accent-wx-primary ul[data-type=taskList] input{accent-color:var(--wx-primary)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:my-1\\.5 ul[data-type=taskList] li{margin-block:calc(var(--spacing) * 1.5)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:flex\\! ul[data-type=taskList] li{display:flex!important}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:items-start ul[data-type=taskList] li{align-items:flex-start}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:gap-2 ul[data-type=taskList] li{gap:calc(var(--spacing) * 2)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:pl-0 ul[data-type=taskList] li{padding-left:calc(var(--spacing) * 0)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li ::marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li::marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li ::-webkit-details-marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li::-webkit-details-marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\]\\:min-w-0 ul[data-type=taskList] li>div{min-width:calc(var(--spacing) * 0)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\]\\:flex-1 ul[data-type=taskList] li>div{flex:1}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\>p\\]\\:my-0\\! ul[data-type=taskList] li>div>p{margin-block:calc(var(--spacing) * 0)!important}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\>p\\]\\:leading-snug ul[data-type=taskList] li>div>p{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:pointer-events-none ul[data-type=taskList] li>label{pointer-events:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:m-0 ul[data-type=taskList] li>label{margin:calc(var(--spacing) * 0)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:inline-flex ul[data-type=taskList] li>label{display:inline-flex}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:h-5 ul[data-type=taskList] li>label{height:calc(var(--spacing) * 5)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:shrink-0 ul[data-type=taskList] li>label{flex-shrink:0}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:cursor-default ul[data-type=taskList] li>label{cursor:default}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:items-center ul[data-type=taskList] li>label{align-items:center}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:select-none ul[data-type=taskList] li>label{-webkit-user-select:none;user-select:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\>span\\]\\:hidden ul[data-type=taskList] li>label>span{display:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\[data-checked\\=true\\]\\>div\\]\\:text-wx-fg-muted ul[data-type=taskList] li[data-checked=true]>div{color:var(--wx-fg-muted)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\[data-checked\\=true\\]\\>div\\]\\:line-through ul[data-type=taskList] li[data-checked=true]>div{text-decoration-line:line-through}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:h-2::-webkit-scrollbar{height:calc(var(--spacing) * 2)}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full::-webkit-scrollbar-thumb{border-radius:3.40282e38px}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-wx-fg-subtle\\/40::-webkit-scrollbar-thumb{background-color:var(--wx-fg-subtle)}@supports (color:color-mix(in lab, red, red)){.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-wx-fg-subtle\\/40::-webkit-scrollbar-thumb{background-color:color-mix(in oklab, var(--wx-fg-subtle) 40%, transparent)}}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-wx-fg-subtle\\/60::-webkit-scrollbar-thumb:hover{background-color:var(--wx-fg-subtle)}@supports (color:color-mix(in lab, red, red)){.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-wx-fg-subtle\\/60::-webkit-scrollbar-thumb:hover{background-color:color-mix(in oklab, var(--wx-fg-subtle) 60%, transparent)}}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-transparent::-webkit-scrollbar-track{background-color:#0000}.\\[\\&\\:\\:-webkit-search-cancel-button\\]\\:appearance-none::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.\\[\\&\\>\\:first-child\\]\\:mt-0>:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&\\>\\:last-child\\]\\:mb-0>:last-child{margin-bottom:calc(var(--spacing) * 0)}.\\[\\&_details\\]\\:\\[\\&\\>\\:not\\(summary\\)\\]\\:px-4 details>:not(summary){padding-inline:calc(var(--spacing) * 4)}.\\[\\&_details\\]\\:\\[\\&\\>\\:not\\(summary\\)\\]\\:py-3 details>:not(summary){padding-block:calc(var(--spacing) * 3)}.\\[\\&_details\\]\\:\\[\\&\\>\\:not\\(summary\\)\\:first-of-type\\]\\:pt-3 details>:not(summary):first-of-type{padding-top:calc(var(--spacing) * 3)}.\\[\\&\\>div\\]\\:\\!block>div{display:block!important}.\\[\\&\\>div\\]\\:\\!w-full>div{width:100%!important}.\\[\\&\\>div\\]\\:\\!max-w-full>div{max-width:100%!important}.\\[\\&\\>p\\]\\:my-0>p{margin-block:calc(var(--spacing) * 0)}.\\[\\&\\>p\\+p\\]\\:mt-2>p+p{margin-top:calc(var(--spacing) * 2)}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}:root,:host{--wx-bg:#fff;--wx-bg-elevated:#f5f5f7;--wx-bg-elevated-2:#ebebef;--wx-fg:#121314;--wx-fg-muted:#6b7280;--wx-fg-subtle:#9ca3af;--wx-border:#e4e4e7;--wx-border-strong:#d1d5db;--wx-primary:#121314;--wx-primary-hover:#2a2c2e;--wx-primary-fg:#fff;--wx-launcher-bg:#121314;--wx-launcher-fg:#fff;--wx-success:#10b981;--wx-danger:#ef4444;--wx-radius-sm:8px;--wx-radius:12px;--wx-radius-lg:20px;--wx-radius-xl:28px}[data-theme=dark]{--wx-bg:#121314;--wx-bg-elevated:#1e1f21;--wx-bg-elevated-2:#2a2c2e;--wx-fg:#f4f4f5;--wx-fg-muted:#a1a1aa;--wx-fg-subtle:#71717a;--wx-border:#2a2c2e;--wx-border-strong:#3f3f46;--wx-primary:#fff;--wx-primary-hover:#e4e4e7;--wx-primary-fg:#121314;--wx-launcher-bg:#fff;--wx-launcher-fg:#121314}html,body{background:var(--wx-bg);height:100%;color:var(--wx-fg)}body{font-family:var(--wx-font,var(--font-geist-sans)), system-ui, -apple-system, sans-serif;-webkit-font-smoothing:antialiased;margin:0;padding:0}button:not(:disabled),[role=button]:not([aria-disabled=true]),a[href],label[for],summary{cursor:pointer}button:disabled,[role=button][aria-disabled=true]{cursor:default}[data-wx-gis]>div,[data-wx-gis]>div>div{width:100%!important}[data-wx-gis] [role=button]{border-radius:var(--wx-radius)!important;width:100%!important;max-width:none!important;overflow:hidden!important}:host{font-family:var(--wx-font,var(--font-geist-sans)), system-ui, -apple-system, sans-serif;-webkit-font-smoothing:antialiased}*{-webkit-tap-highlight-color:transparent}[data-theme=dark] [data-wx-panel]{box-shadow:0 0 0 1px #ffffff0f,0 32px 80px #0000008c,0 0 48px #ffffff0a}[data-theme=dark] [data-wx-panel]:before{content:\"\";pointer-events:none;z-index:30;background:radial-gradient(circle at 0 0,#ffffff29 0%,#ffffff12 30%,#ffffff05 60%,#fff0 70%);width:260px;height:260px;position:absolute;top:0;left:0}[data-theme=dark] [data-wx-panel] header{background:0 0;border-bottom-color:#0000}[data-wx-panel]{box-shadow:0 24px 64px #0000002e}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-pan-x{syntax:\"*\";inherits:false}@property --tw-pan-y{syntax:\"*\";inherits:false}@property --tw-pinch-zoom{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:\"*\";inherits:false}@property --tw-gradient-from{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:\"*\";inherits:false}@property --tw-gradient-via-stops{syntax:\"*\";inherits:false}@property --tw-gradient-from-position{syntax:\"<length-percentage>\";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:\"<length-percentage>\";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:\"<length-percentage>\";inherits:false;initial-value:100%}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@property --tw-content{syntax:\"*\";inherits:false;initial-value:\"\"}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}", by = {
	en: {
		...tt,
		demo: G
	},
	"en-US": {
		...rt,
		demo: G
	},
	"en-GB": {
		...nt,
		demo: G
	},
	uk: {
		...wt,
		demo: $e
	},
	de: {
		...Qe,
		demo: G
	},
	es: {
		...it,
		demo: G
	},
	"es-MX": {
		...at,
		demo: G
	},
	fr: {
		...st,
		demo: G
	},
	it: {
		...ft,
		demo: G
	},
	nl: {
		...ht,
		demo: G
	},
	pt: {
		...vt,
		demo: G
	},
	"pt-BR": {
		...yt,
		demo: G
	},
	sv: {
		...K,
		demo: G
	},
	da: {
		...Ze,
		demo: G
	},
	no: {
		...gt,
		demo: G
	},
	fi: {
		...ot,
		demo: G
	},
	pl: {
		..._t,
		demo: G
	},
	cs: {
		...Xe,
		demo: G
	},
	sk: {
		...xt,
		demo: G
	},
	tr: {
		...Ct,
		demo: G
	},
	ro: {
		...bt,
		demo: G
	},
	hu: {
		...ut,
		demo: G
	},
	el: {
		...et,
		demo: G
	},
	ar: {
		...Ye,
		demo: G
	},
	he: {
		...ct,
		demo: G
	},
	hi: {
		...lt,
		demo: G
	},
	th: {
		...St,
		demo: G
	},
	vi: {
		...Tt,
		demo: G
	},
	id: {
		...dt,
		demo: G
	},
	ja: {
		...pt,
		demo: G
	},
	ko: {
		...mt,
		demo: G
	},
	zh: {
		...Et,
		demo: G
	},
	"zh-TW": {
		...Dt,
		demo: G
	}
};
function xy({ publicKey: e, user: t, mode: n, configOverride: r, config: i, previewData: a, onResize: o, onOpen: s, onClose: c, className: l, style: u }) {
	let d = X(null), [f, p] = Z(null), [m, h] = Z(() => hy()), [g, _] = Z(null);
	Y(() => ar((e) => {
		tr(e) && h(e);
	}), []);
	let v = X(o), y = X(s), b = X(c);
	Y(() => {
		v.current = o, y.current = s, b.current = c;
	}, [
		o,
		s,
		c
	]), Y(() => {
		ke(e ?? null);
	}, [e]), Y(() => {
		let e = d.current;
		if (!e) return;
		let t = e.shadowRoot ?? e.attachShadow({ mode: "open" });
		if (typeof CSSStyleSheet < "u" && "replaceSync" in CSSStyleSheet.prototype) {
			let e = new CSSStyleSheet();
			e.replaceSync(yy), t.adoptedStyleSheets = [...t.adoptedStyleSheets ?? [], e];
		} else if (!t.querySelector("style[data-wexio-style]")) {
			let e = document.createElement("style");
			e.setAttribute("data-wexio-style", "true"), e.textContent = yy, t.appendChild(e);
		}
		let n = t.querySelector("div[data-wexio-portal-target]");
		n || (n = document.createElement("div"), n.setAttribute("data-wexio-portal-target", "true"), n.style.display = "contents", t.appendChild(n)), p(n), _(t);
	}, []);
	let x = Pt(() => {
		let o = n ?? (e ? "production" : "demo");
		return {
			kind: "web-component",
			publicKeyOverride: e,
			modeOverride: o,
			configOverride: r,
			configBase: i,
			forceDummyData: void 0,
			previewData: a,
			embedded: o === "preview",
			visitorIdentity: t,
			visitorPrefill: void 0,
			lightboxViewport: !0,
			themeRoot: f ?? void 0,
			styleRoot: g ?? void 0,
			onResize: (e, t) => {
				v.current?.({
					width: e,
					height: t
				});
			},
			onOpen: () => {
				y.current?.();
			},
			onClose: () => {
				b.current?.();
			},
			onLocaleStrategy: (e) => h(hy(e, { ignoreVisitorOverrides: o === "preview" }))
		};
	}, [
		e,
		n,
		r,
		i,
		a,
		f,
		g,
		t
	]);
	return /* @__PURE__ */ Q("div", {
		ref: d,
		"data-wexio-widget-host": "true",
		className: l,
		style: u,
		children: f ? Rt(/* @__PURE__ */ Q(Sy, {
			env: x,
			locale: m,
			children: /* @__PURE__ */ Q(Av, {})
		}), f) : null
	});
}
function Sy({ env: e, locale: t, children: n }) {
	let r = by[t];
	return /* @__PURE__ */ Q(Bt, {
		client: Pt(() => Se(), []),
		children: /* @__PURE__ */ Q(Yt, {
			locale: t,
			messages: r,
			timeZone: typeof Intl < "u" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "UTC",
			children: /* @__PURE__ */ Q(m, {
				env: e,
				children: n
			})
		})
	});
}
//#endregion
export { xy as WexioWidget, ke as setWexioPublicKey };

//# sourceMappingURL=widget-react.js.map