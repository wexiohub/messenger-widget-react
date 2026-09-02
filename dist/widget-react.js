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
import { S as e, a as t, d as n, i as r, l as i, n as a, r as o, t as s, u as c, w as l, y as u } from "./widget-react-B9XrHKqv.js";
import { $ as d, A as f, B as p, C as m, D as h, E as g, F as _, G as v, H as y, J as b, K as x, L as S, M as C, N as w, O as T, P as E, Q as ee, R as D, S as O, T as k, U as te, V as A, W as j, X as M, Y as N, Z as ne, _ as re, a as ie, at as ae, c as oe, ct as se, d as P, dt as F, et as ce, f as le, ft as ue, g as I, h as L, i as de, it as R, k as fe, l as z, lt as pe, m as me, nt as he, o as ge, ot as _e, p as ve, pt as ye, q as be, r as xe, rt as Se, s as Ce, st as we, t as Te, tt as Ee, u as B, ut as De, v as Oe, w as ke, y as Ae, z as je } from "./widget-react-CK8xTxwO.js";
import { a as Me, i as V, n as H, o as Ne, s as Pe, t as U } from "./widget-react-krPPnv02.js";
import { a as Fe, c as W, d as Ie, f as Le, i as Re, l as ze, o as Be, p as Ve, s as He, t as Ue, u as We } from "./widget-react-DV3UnggB.js";
import { a as Ge, c as Ke, d as qe, f as Je, i as Ye, o as Xe, p as Ze, s as Qe, t as $e, u as et } from "./widget-react-AwEaD0v2.js";
import { t as tt } from "./widget-react-CIy9jXND.js";
import { n as nt, r as rt, t as it } from "./widget-react-faSyVXFQ.js";
import { t as at } from "./widget-react-BlTmXnei.js";
import { t as ot } from "./widget-react-B8rXZyxg.js";
import * as G from "react";
import st, { Suspense as ct, forwardRef as lt, lazy as ut, startTransition as dt, useCallback as K, useEffect as q, useLayoutEffect as ft, useMemo as pt, useRef as J, useState as Y } from "react";
import { Fragment as mt, jsx as X, jsxs as Z } from "react/jsx-runtime";
import * as ht from "react-dom";
import gt, { createPortal as _t } from "react-dom";
//#region node_modules/@apollo/client/react/context/ApolloProvider.js
var vt = /* @__PURE__ */ l(pe(), 1), yt = function(e) {
	var t = e.client, n = e.children, r = se(), i = vt.useContext(r), a = vt.useMemo(function() {
		return F(F({}, i), { client: t || i.client });
	}, [i, t]);
	return De(a.client, 71), vt.createElement(r.Provider, { value: a }, n);
};
//#endregion
//#region node_modules/next-intl/dist/esm/production/shared/NextIntlClientProvider.js
function bt({ locale: e, ...t }) {
	if (!e) throw Error(void 0);
	return X(Pe, {
		locale: e,
		...t
	});
}
//#endregion
//#region lib/ai-assistant.ts
var xt = "Gaia", St = {}, Ct = _e`
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
function wt(e) {
	return ae(Ct, {
		...St,
		...e
	});
}
var Tt = _e`
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
function Et(e) {
	return ae(Tt, {
		...St,
		...e
	});
}
var Dt = _e`
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
function Ot(e) {
	return R(Dt, {
		...St,
		...e
	});
}
//#endregion
//#region lib/use-news-unread.ts
function kt(e) {
	return e ? `wexio:news-last-read:${e}` : "wexio:news-last-read";
}
function At(e, t) {
	return e ? e !== t : !1;
}
function jt({ enabled: e, locale: t }) {
	let n = _(), { data: r } = Le({
		variables: { args: {
			locale: t,
			limit: 1
		} },
		skip: !e
	}), i = r?.visitorNewsList.items[0]?._id ?? null, [a, o] = Y(null);
	q(() => {
		if (!(typeof window > "u")) try {
			o(localStorage.getItem(kt(n)));
		} catch {
			o(null);
		}
	}, [n]);
	let s = K(() => {
		if (i) {
			o(i);
			try {
				localStorage.setItem(kt(n), i);
			} catch {}
		}
	}, [i, n]);
	return {
		hasUnread: e && At(i, a),
		markRead: s
	};
}
Array.from({ length: 21 }, (e, t) => `wx-nt_${t + 1}`);
var Mt = "wx-nt_";
function Nt(e) {
	return e ? e.startsWith("http://") || e.startsWith("https://") ? e : e.startsWith(Mt) ? he(`/sounds/${e}.wav`) : null : null;
}
var Pt = "wexio:sound-muted";
//#endregion
//#region lib/use-sound-player.ts
function Ft(e) {
	let [t, n] = Y(!1), r = J(null), i = J(null);
	q(() => {
		typeof window > "u" || n(localStorage.getItem(Pt) === "1");
	}, []), q(() => {
		if (typeof window > "u") return;
		r.current?.pause(), i.current?.pause();
		let t = Nt(e?.inboundSoundId), n = Nt(e?.outboundSoundId), a = typeof e?.volume == "number" ? Math.max(0, Math.min(1, e.volume)) : .5;
		return r.current = t ? It(t, a) : null, i.current = n ? It(n, a) : null, () => {
			r.current?.pause(), i.current?.pause();
		};
	}, [e]);
	let a = K(() => {
		n((e) => {
			let t = !e;
			try {
				localStorage.setItem(Pt, t ? "1" : "0");
			} catch {}
			return t;
		});
	}, []), o = K((n) => {
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
function It(e, t) {
	let n = new Audio(e);
	return n.preload = "auto", n.volume = t, n;
}
//#endregion
//#region lib/use-theme-mode.ts
function Q(e, t) {
	let [n, r] = Y("dark"), i = w().themeRoot;
	return q(() => {
		let n = new URL(window.location.href).searchParams.get("theme"), a = e && Lt(e) ? e : null, o = t?.allowed !== !1, s = t?.preference && Lt(t.preference) ? t.preference : null, c = (() => {
			if (n && Lt(n)) return n;
			if (o && s && s !== "auto") return s;
			if (a && a !== "auto") return a;
			if (o) {
				let e = localStorage.getItem("wexio:theme");
				if (e && Lt(e)) return e;
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
			t && Lt(t) && (c = t, u());
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
function Lt(e) {
	return e === "light" || e === "dark" || e === "auto";
}
//#endregion
//#region lib/use-turnstile.ts
var Rt = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", zt = "wexio-turnstile-script", Bt = null;
function Vt() {
	return typeof window > "u" ? Promise.reject(/* @__PURE__ */ Error("turnstile: no window")) : window.turnstile ? Promise.resolve() : Bt || (Bt = new Promise((e, t) => {
		let n = document.getElementById(zt);
		if (n) {
			if (window.turnstile) return e();
			n.addEventListener("load", () => e(), { once: !0 }), n.addEventListener("error", () => t(/* @__PURE__ */ Error("turnstile: script load error")), { once: !0 });
			return;
		}
		let r = document.createElement("script");
		r.id = zt, r.src = Rt, r.async = !0, r.defer = !0, r.addEventListener("load", () => e(), { once: !0 }), r.addEventListener("error", () => t(/* @__PURE__ */ Error("turnstile: script load error")), { once: !0 }), document.head.appendChild(r);
	}).catch((e) => {
		throw Bt = null, e;
	}), Bt);
}
function Ht(e) {
	let { siteKey: t, theme: n, position: r = "right" } = e, i = J(null), a = J(n);
	return q(() => {
		a.current = n;
	}, [n]), q(() => {
		if (typeof document > "u") return;
		let e = document.createElement("div");
		return e.style.position = "fixed", e.style.bottom = "88px", r === "left" ? e.style.left = "16px" : e.style.right = "16px", e.style.zIndex = "60", document.body.appendChild(e), i.current = e, () => {
			e.remove(), i.current = null;
		};
	}, [r]), { getToken: K(async () => {
		if (!t) return;
		await Vt();
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
//#region lib/locales.ts
var Ut = /* @__PURE__ */ "en.en-US.en-GB.uk.de.es.es-MX.fr.it.nl.pt.pt-BR.sv.da.no.fi.pl.cs.sk.tr.ro.hu.el.ar.he.hi.th.vi.id.ja.ko.zh.zh-TW".split(".");
function Wt(e) {
	return typeof e == "string" && Ut.includes(e);
}
//#endregion
//#region lib/locale-detect.ts
function Gt(e, t) {
	if (typeof window > "u") return "en";
	if (!t?.ignoreVisitorOverrides) {
		let e = qt(new URL(window.location.href).searchParams.get("lang"));
		if (e) return e;
		let t = qt(Jt("wexio-locale"));
		if (t) return t;
	}
	if (e && e !== "AUTO" && e !== "WEBSITE") {
		let t = qt(e);
		if (t) return t;
	} else if (e === "WEBSITE") {
		let e = qt(document.documentElement.lang);
		if (e) return e;
	}
	return qt(navigator.language) || "en";
}
var Kt = new Map(Ut.map((e) => [e.toLowerCase(), e]));
function qt(e) {
	if (!e) return null;
	let t = e.toLowerCase().replace(/_/g, "-"), n = Kt.get(t);
	if (n) return n;
	let r = t.split("-")[0];
	return Kt.get(r) ?? null;
}
function Jt(e) {
	let t = document.cookie.split(";");
	for (let n of t) {
		let [t, ...r] = n.trim().split("=");
		if (t === e) return decodeURIComponent(r.join("="));
	}
	return null;
}
//#endregion
//#region lib/use-visitor-auth.ts
var Yt = (e) => e ? `wexio:visitor-id:${e}` : "wexio:visitor-id", Xt = (e) => e ? `wexio:visitor-session:${e}` : "wexio:visitor-session", Zt = "wexio:visitor-id", Qt = "wexio:visitor-session";
function $t(e) {
	if (!(typeof window > "u")) try {
		let t = {
			token: e.token,
			chatId: e.chatId,
			peopleId: e.peopleId,
			displayName: e.displayName,
			expiresAt: Date.now() + e.expiresIn * 1e3
		};
		localStorage.setItem(Xt(_()), JSON.stringify(t));
	} catch {}
}
function en() {
	if (typeof window > "u") return null;
	let e = _();
	try {
		let t = localStorage.getItem(Xt(e));
		if (!t && e) {
			let n = localStorage.getItem(Qt);
			n && (localStorage.setItem(Xt(e), n), localStorage.removeItem(Qt), t = n);
		}
		if (!t) return null;
		let n = JSON.parse(t);
		return typeof n?.token != "string" || typeof n?.expiresAt != "number" || n.expiresAt - nn * 1e3 <= Date.now() ? (localStorage.removeItem(Xt(e)), null) : n;
	} catch {
		return null;
	}
}
function tn() {
	if (!(typeof window > "u")) try {
		localStorage.removeItem(Xt(_())), localStorage.removeItem(Qt);
	} catch {}
}
var nn = 30, rn = "wexio:prechat-submitted:";
function an() {
	if (p(null), tn(), !(typeof window > "u")) try {
		let e = _();
		localStorage.removeItem(Yt(e)), localStorage.removeItem(Zt);
		for (let e = localStorage.length - 1; e >= 0; e--) {
			let t = localStorage.key(e);
			t?.startsWith(rn) && localStorage.removeItem(t);
		}
	} catch {}
}
function on(e) {
	let [t, n] = Y({
		token: null,
		chatId: null,
		peopleId: null,
		displayName: null,
		isAuthenticating: e.enabled,
		error: null,
		verified: !1
	}), [r] = b(), [i] = N(), a = J(e.identity ?? null);
	a.current = e.identity ?? null;
	let o = J(e.getTurnstileToken);
	o.current = e.getTurnstileToken;
	let s = J(null), c = J(0), l = K(async (e) => {
		n((e) => ({
			...e,
			isAuthenticating: !0,
			error: null
		}));
		try {
			let t = cn(), u = a.current, d = Gt(), f;
			try {
				f = await o.current?.() ?? void 0;
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
			let m;
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
					contextSnapshot: JSON.stringify({
						...u.attributes && typeof u.attributes == "object" ? u.attributes : {},
						locale: d
					}),
					turnstileToken: f
				} } });
				if (e.current) return;
				m = n.data?.startIdentifiedVisitor;
			} else {
				let n = await r({ variables: { input: {
					visitorId: t,
					turnstileToken: f,
					contextSnapshot: JSON.stringify({ locale: d })
				} } });
				if (e.current) return;
				m = n.data?.startAnonymousVisitor;
			}
			if (!m) {
				n((e) => ({
					...e,
					isAuthenticating: !1,
					error: "handshake_empty_response"
				}));
				return;
			}
			if (m.visitorId && m.visitorId !== t) try {
				localStorage.setItem(Yt(_()), m.visitorId);
			} catch {}
			p(m.token), n({
				token: m.token,
				chatId: m.chatId,
				peopleId: m.peopleId,
				displayName: m.displayName,
				isAuthenticating: !1,
				error: null,
				verified: m.kind === "identified"
			}), m.kind === "identified" ? $t({
				token: m.token,
				chatId: m.chatId,
				peopleId: m.peopleId,
				displayName: m.displayName,
				expiresIn: m.expiresIn
			}) : tn();
			let h = Math.max(5e3, (m.expiresIn - nn) * 1e3);
			s.current && clearTimeout(s.current), c.current = Date.now() + h, s.current = setTimeout(() => {
				e.current || l(e);
			}, h);
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
	return q(() => {
		if (!e.enabled) {
			n((e) => ({
				...e,
				isAuthenticating: !1
			}));
			return;
		}
		if (typeof window > "u") return;
		let t = { current: !1 }, r = a.current ? null : en();
		if (r) {
			p(r.token), n({
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
				t.current || (tn(), l(t));
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
	]), q(() => {
		if (!e.enabled || typeof window > "u") return;
		let t = !1;
		return D(() => {
			t || (t = !0, tn(), p(null), l({ current: !1 }).finally(() => {
				t = !1;
			}));
		}), S(() => {
			if (!t) {
				t = !0, tn(), p(null);
				try {
					let e = _();
					localStorage.removeItem(Yt(e));
				} catch {}
				l({ current: !1 }).finally(() => {
					t = !1;
				});
			}
		}), () => {
			D(null), S(null);
		};
	}, [e.enabled, l]), t;
}
function sn(e) {
	let [t, n] = Y({
		identity: null,
		prefill: null
	});
	return q(() => {
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
function cn() {
	try {
		let e = _(), t = Yt(e), n = localStorage.getItem(t);
		if (n) return n;
		if (e) {
			let e = localStorage.getItem(Zt);
			if (e) return localStorage.setItem(t, e), localStorage.removeItem(Zt), e;
		}
		let r = ln();
		return localStorage.setItem(t, r), r;
	} catch {
		return ln();
	}
}
function ln() {
	if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
	let e = new Uint8Array(16);
	if (typeof crypto < "u" && crypto.getRandomValues) crypto.getRandomValues(e);
	else for (let t = 0; t < 16; t++) e[t] = Math.floor(Math.random() * 256);
	return Array.from(e, (e) => e.toString(16).padStart(2, "0")).join("");
}
//#endregion
//#region lib/runtime-demo-prefs.ts
var un = {
	themeMode: null,
	language: null,
	desktopNotifications: !1
}, dn = /* @__PURE__ */ new Set();
function fn(e, t) {
	if (un[e] !== t) {
		un = {
			...un,
			[e]: t
		};
		for (let e of dn) e(un);
	}
}
function pn() {
	let [e, t] = Y(un);
	return q(() => (dn.add(t), t(un), () => {
		dn.delete(t);
	}), []), e;
}
//#endregion
//#region lib/runtime-locale.ts
var mn = null, hn = /* @__PURE__ */ new Set();
function gn(e) {
	if (Wt(e) && mn !== e) {
		mn = e;
		for (let t of hn) t(e);
	}
}
function _n(e) {
	return hn.add(e), () => {
		hn.delete(e);
	};
}
//#endregion
//#region lib/use-visitor-profile-preferences.ts
var vn = {
	themeMode: null,
	themeModeEditable: !0,
	language: null,
	desktopNotifications: !1,
	loaded: !1
};
function yn(e) {
	let { data: t } = wt({ skip: !e.enabled || !!e.isDummy }), n = t?.visitorProfile, r = pn(), i = e.isDummy ? {
		themeMode: r.themeMode,
		themeModeEditable: !0,
		language: r.language,
		desktopNotifications: r.desktopNotifications,
		loaded: !0
	} : n ? {
		themeMode: bn(n.preferences.themeMode),
		themeModeEditable: n.themeModeEditable,
		language: n.preferences.language ?? null,
		desktopNotifications: !!n.preferences.desktopNotifications,
		loaded: !0
	} : e.enabled ? vn : {
		...vn,
		loaded: !0
	};
	return q(() => {
		if (i.loaded && i.language) {
			try {
				document.cookie = `wexio-locale=${encodeURIComponent(i.language)}; path=/; max-age=${3600 * 24 * 365}; samesite=lax`;
			} catch {}
			gn(i.language);
		}
	}, [i.loaded, i.language]), i;
}
function bn(e) {
	if (typeof e != "string") return null;
	let t = e.toLowerCase();
	return t === "light" || t === "dark" ? t : t === "auto" || t === "system" ? "auto" : null;
}
//#endregion
//#region lib/use-visitor-realtime.ts
function xn({ chatId: e, token: t, enabled: n = !0, onMessage: r }) {
	let i = J(r);
	q(() => {
		i.current = r;
	}, [r]), q(() => {
		if (!n || !e || !t || typeof window > "u") return;
		let r = _();
		if (!r) return;
		let a = `${A()}/api/web/realtime/${encodeURIComponent(e)}?token=${encodeURIComponent(t)}&publicKey=${encodeURIComponent(r)}`, o = new EventSource(a, { withCredentials: !1 }), s = (e) => {
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
function Sn(e) {
	return [{
		kind: "SYSTEM",
		text: e.raw("messenger.welcome.system")
	}, {
		kind: "HINT",
		text: e.raw("messenger.welcome.hint")
	}];
}
var Cn = [];
function wn(e) {
	let t = e.raw("conversation.visitorName");
	return Cn.map((n) => {
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
function Tn({ chatId: e, isDummy: t, isLoading: n }) {
	let r = V("demo"), [i, a] = Y(!1), [o, s] = Y(0), [c, l] = Y(null), u = J(/* @__PURE__ */ new Set()), d = J(null), f = J(!1), [p] = Ee({ fetchPolicy: "network-only" });
	q(() => {
		t || !e || d.current !== e && (d.current = e, u.current = /* @__PURE__ */ new Set(), f.current = !1, p({ variables: { chatId: e } }).then((e) => {
			if (f.current) return;
			let t = e.data?.visitorChatUnread;
			if (t) if (s(t.count ?? 0), t.lastMessage) {
				let e = {
					id: t.lastMessage.id,
					text: t.lastMessage.text ?? null,
					sender: {
						kind: t.lastMessage.sender.kind,
						name: t.lastMessage.sender.name,
						avatar: t.lastMessage.sender.avatar ?? void 0
					},
					buttons: Dn(t.lastMessage.buttons)
				};
				u.current.add(e.id), l(e);
			} else l(null);
		}).catch(() => {}));
	}, [
		e,
		t,
		p
	]);
	let m = K(() => {
		if (t) {
			a(!0);
			return;
		}
		s(0), l(null), f.current = !0;
	}, [t]), h = K((e) => {
		if (t || e.kind === "typing" || e.kind === "read-receipt" || e.kind === "assignment") return;
		let n = e.from ?? e.sender;
		if (n?.kind === "visitor") return;
		let r = e.externalMessageId;
		if (!r || u.current.has(r)) return;
		u.current.add(r), s((e) => e + 1);
		let i = Array.isArray(e.buttons) ? e.buttons.map((e) => ({
			text: e.label,
			payload: e.value
		})) : [];
		l({
			id: r,
			text: e.text ?? null,
			sender: {
				kind: n?.kind ?? "operator",
				name: n?.name ?? "",
				...n?.avatar ? { avatar: n.avatar } : {}
			},
			buttons: i
		});
	}, [t]), g = K((e) => {
		if (t || e.length === 0) return;
		let n = 0;
		for (let t of e) u.current.has(t) && (u.current.delete(t), n += 1);
		n > 0 && s((e) => Math.max(0, e - n)), l((t) => t && (e.includes(t.id) ? null : t));
	}, [t]);
	if (t && !n) {
		let e = i ? null : En(r);
		return {
			count: +!!e,
			lastMessage: e,
			clear: m,
			noteInbound: h,
			noteRead: g
		};
	}
	return {
		count: o,
		lastMessage: c,
		clear: m,
		noteInbound: h,
		noteRead: g
	};
}
function En(e) {
	let t = wn(e);
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
function Dn(e) {
	return Array.isArray(e) ? e.filter((e) => typeof e == "object" && !!e).map((e) => {
		let t = On(e.text, e.label) ?? "";
		return {
			text: t,
			payload: On(e.payload, e.value) ?? t
		};
	}).filter((e) => e.text.length > 0) : [];
}
function On(...e) {
	for (let t of e) if (typeof t == "string" && t.length > 0) return t;
}
//#endregion
//#region lib/visitor-assignment.ts
var kn = { status: null };
function An(e) {
	let t = e.assignment;
	return t ? t.assignedStatus === "connected" ? {
		status: "connected",
		...t.operator ? { operator: t.operator } : {}
	} : t.assignedStatus === "pending" ? {
		status: "pending",
		...t.estimate ? { estimate: t.estimate } : {}
	} : { status: null } : null;
}
function jn(e, t, n = /* @__PURE__ */ new Date()) {
	let r = new Date(e);
	if (Number.isNaN(r.getTime())) return "";
	let i = (e, t) => e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate(), a = new Intl.DateTimeFormat(t, {
		hour: "numeric",
		minute: "2-digit"
	}).format(r);
	if (i(r, n)) return a;
	let o = new Date(n);
	return o.setDate(n.getDate() + 1), i(r, o) ? `${new Intl.RelativeTimeFormat(t, { numeric: "auto" }).format(1, "day")}, ${a}` : `${new Intl.DateTimeFormat(t, { weekday: "short" }).format(r)}, ${a}`;
}
function Mn(e) {
	let t = e.assignment;
	if (!t || !t.messageId) return null;
	let n = {
		id: t.messageId,
		direction: "OUTBOUND",
		text: "",
		ageLabel: "",
		...e.sentAt ? { createdAt: e.sentAt } : {},
		sender: {
			kind: "system",
			name: "System"
		}
	};
	return t.assignedStatus === "connected" ? {
		...n,
		system: {
			type: "OPERATOR_CONNECTED",
			...t.operator?.name ? { operatorName: t.operator.name } : {},
			...t.operator?.avatar ? { operatorAvatar: t.operator.avatar } : {}
		}
	} : t.assignedStatus === null ? {
		...n,
		system: {
			type: "CHAT_RESOLVED",
			...t.initiator ? { initiator: t.initiator } : {}
		}
	} : null;
}
function Nn(e, t, n) {
	if (e.basis === "business_hours") return e.availableAt ? t("assignment.eta.businessHours", { time: jn(e.availableAt, n) }) : null;
	if (e.basis === "operator_load") {
		if (typeof e.etaMinutes == "number") return t("assignment.eta.minutes", { minutes: e.etaMinutes });
		if (e.soft) return t("assignment.eta.soft");
	}
	return null;
}
//#endregion
//#region lib/widget-route.ts
function Pn(e) {
	return e.kind === "home" || e.kind === "help" || e.kind === "news" || e.kind === "profile";
}
function Fn(e, t) {
	switch (e.kind) {
		case "messages": return t.home ? { kind: "home" } : t.help ? { kind: "help" } : t.news ? { kind: "news" } : t.profile ? { kind: "profile" } : { kind: "messages" };
		case "help-category": return e.origin ?? { kind: "help" };
		case "help-article": return e.origin ? e.origin : e.from === "category" && e.fromCategoryId ? {
			kind: "help-category",
			categoryId: e.fromCategoryId
		} : { kind: "help" };
		case "news-article": return e.origin ?? { kind: "news" };
		default: return { kind: "home" };
	}
}
function In(e, t) {
	return e.kind === "help-article" || e.kind === "news-article" || e.kind === "help-category" ? {
		...e,
		origin: t
	} : e;
}
function Ln(e) {
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
function Rn(e, t) {
	return e === "home" ? t.home : e === "messages" ? t.messenger : e === "help" ? t.help : e === "news" ? t.news : !!t.profile;
}
function zn(e) {
	return +!!e.home + +!!e.messenger + +!!e.help + +!!e.news + +!!e.profile;
}
function Bn(e, t) {
	if (Rn(e, t)) return e;
	for (let e of [
		"home",
		"messages",
		"help",
		"news",
		"profile"
	]) if (Rn(e, t)) return e;
	return e;
}
var Vn = U("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]), Hn = U("arrow-up-right", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]), Un = U("bell", [["path", {
	d: "M10.268 21a2 2 0 0 0 3.464 0",
	key: "vwvbt9"
}], ["path", {
	d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
	key: "11g9vi"
}]]), Wn = U("book-open", [["path", {
	d: "M12 7v14",
	key: "1akyts"
}], ["path", {
	d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
	key: "ruj8y"
}]]), Gn = U("book", [["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}]]), Kn = U("bookmark", [["path", {
	d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
	key: "oz39mx"
}]]), qn = U("camera", [["path", {
	d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
	key: "18u6gg"
}], ["circle", {
	cx: "12",
	cy: "13",
	r: "3",
	key: "1vg3eu"
}]]), Jn = U("circle-alert", [
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
]), Yn = U("circle-question-mark", [
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
]), Xn = U("command", [["path", {
	d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
	key: "11bfej"
}]]), Zn = U("file-text", [
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
]), Qn = U("gamepad-2", [
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
]), $n = U("hash", [
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
]), er = U("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]), tr = U("image-plus", [
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
]), nr = U("lightbulb", [
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
]), rr = U("lock", [["rect", {
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
}]]), ir = U("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]), ar = U("message-circle-more", [
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
]), or = U("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]), sr = U("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]), cr = U("monitor", [
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
]), lr = U("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]), ur = U("paperclip", [["path", {
	d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
	key: "1miecu"
}]]), dr = U("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]), fr = U("refresh-cw", [
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
]), pr = U("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), mr = U("shield-alert", [
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
]), hr = U("shield", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}]]), gr = U("smile", [
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
]), _r = U("sparkles", [
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
]), vr = U("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]), yr = U("sun", [
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
]), br = U("trash-2", [
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
]), xr = U("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]), Sr = U("users", [
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
]), Cr = U("video", [["path", {
	d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
	key: "ftymec"
}], ["rect", {
	x: "2",
	y: "6",
	width: "14",
	height: "12",
	rx: "2",
	key: "158x01"
}]]), wr = U("volume-2", [
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
]), Tr = U("volume-x", [
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
]), Er = {
	sm: "h-3.5 min-w-3.5 px-0.75 text-[8px]",
	md: "h-5 min-w-5 px-1.5 text-[10px]"
};
function Dr({ count: e, size: t = "sm", className: r, dot: i, label: a }) {
	let o = i && e <= 0;
	return /* @__PURE__ */ X(Se, { children: (e > 0 || o) && /* @__PURE__ */ Z(n.span, {
		role: "status",
		initial: { scale: 0 },
		animate: { scale: 1 },
		exit: { scale: 0 },
		transition: {
			type: "spring",
			stiffness: 600,
			damping: 9
		},
		className: H("inline-flex", r),
		"aria-label": a ?? `${e} unread`,
		children: [
			/* @__PURE__ */ X("span", {
				"aria-hidden": "true",
				className: "absolute inset-0 -z-10 rounded-full bg-wx-danger opacity-40 blur-[2px]"
			}),
			/* @__PURE__ */ X(n.span, {
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
			/* @__PURE__ */ X("span", {
				className: H("relative flex items-center justify-center", "rounded-full bg-wx-danger font-bold leading-none text-white", Er[t]),
				children: o ? null : e > 99 ? "99+" : e
			})
		]
	}, o ? "dot" : e) });
}
//#endregion
//#region components/widget/bottom-nav.tsx
var Or = [
	"home",
	"messages",
	"help",
	"news",
	"profile"
];
function kr({ active: e, features: t, onChange: n, unreadCount: i = 0, newsUnread: a = !1 }) {
	let s = V("tabs"), c = V("news"), l = ot(), u = ot(), d = Or.filter((e) => Mr(e, t));
	return /* @__PURE__ */ X("div", {
		className: "px-3 pt-2 pb-2",
		children: /* @__PURE__ */ X("nav", {
			role: "tablist",
			className: H("relative flex w-full items-center gap-1", "rounded-full bg-wx-bg-elevated/70 p-1 backdrop-blur-md", "shadow-[inset_0_0_0_1px_rgb(0_0_0/0.04)]"),
			children: d.map((t) => {
				let d = t === e;
				if (t === "home") return /* @__PURE__ */ X(Ar, {
					id: t,
					label: s(t),
					isActive: d,
					onClick: () => n(t),
					parentHandlers: l.parentHandlers,
					icon: /* @__PURE__ */ X(o, {
						ref: l.iconRef,
						size: 16
					})
				}, t);
				if (t === "messages") return /* @__PURE__ */ X(Ar, {
					id: t,
					label: s(t),
					isActive: d,
					onClick: () => n(t),
					parentHandlers: u.parentHandlers,
					icon: /* @__PURE__ */ X(r, {
						ref: u.iconRef,
						size: 16
					}),
					badgeCount: i
				}, t);
				let f = t === "help" ? Yn : t === "news" ? We : xr;
				return /* @__PURE__ */ X(jr, {
					id: t,
					label: s(t),
					isActive: d,
					onClick: () => n(t),
					Icon: f,
					showDot: t === "news" && a,
					dotLabel: c("unread")
				}, t);
			})
		})
	});
}
function Ar({ id: e, label: t, isActive: r, onClick: i, icon: a, parentHandlers: o, badgeCount: s = 0 }) {
	return /* @__PURE__ */ Z("button", {
		type: "button",
		role: "tab",
		"aria-selected": r,
		onClick: i,
		...o,
		className: H("relative z-10 flex items-center justify-center gap-1.5 rounded-full px-3 py-2", "transition-colors duration-150", r ? "flex-[2_2_0%] text-wx-fg" : "flex-1 text-wx-fg-muted hover:text-wx-fg"),
		children: [
			r && /* @__PURE__ */ X(n.span, {
				layoutId: "bottom-nav-pill",
				className: "absolute inset-0 -z-10 rounded-full bg-wx-bg shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
				transition: {
					type: "spring",
					stiffness: 420,
					damping: 36
				}
			}),
			/* @__PURE__ */ Z("span", {
				className: "relative inline-flex shrink-0 items-center justify-center",
				children: [a, /* @__PURE__ */ X(Dr, {
					count: s,
					size: "sm",
					className: "absolute -top-1.5 -right-2 z-20"
				})]
			}),
			/* @__PURE__ */ X(n.span, {
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
function jr({ id: e, label: t, isActive: r, onClick: i, Icon: a, showDot: o = !1, dotLabel: s }) {
	let l = c();
	return q(() => {
		r && l.start({ scale: [
			1,
			1.15,
			1
		] });
	}, [r, l]), /* @__PURE__ */ Z(n.button, {
		type: "button",
		role: "tab",
		"aria-selected": r,
		onClick: i,
		onHoverStart: () => l.start({ rotate: [
			0,
			-10,
			10,
			0
		] }),
		className: H("relative z-10 flex items-center justify-center gap-1.5 rounded-full px-3 py-2", "transition-colors duration-150", r ? "flex-[2_2_0%] text-wx-fg" : "flex-1 text-wx-fg-muted hover:text-wx-fg"),
		children: [
			r && /* @__PURE__ */ X(n.span, {
				layoutId: "bottom-nav-pill",
				className: "absolute inset-0 -z-10 rounded-full bg-wx-bg shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
				transition: {
					type: "spring",
					stiffness: 420,
					damping: 36
				}
			}),
			/* @__PURE__ */ Z("span", {
				className: "relative inline-flex shrink-0 items-center justify-center",
				children: [/* @__PURE__ */ X(n.span, {
					animate: l,
					transition: { duration: .4 },
					children: /* @__PURE__ */ X(a, {
						size: 16,
						strokeWidth: r ? 2.2 : 1.8
					})
				}), /* @__PURE__ */ X(Dr, {
					count: 0,
					dot: o,
					label: s,
					size: "sm",
					className: "absolute -top-1.5 -right-2 z-20"
				})]
			}),
			/* @__PURE__ */ X(n.span, {
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
function Mr(e, t) {
	return e === "home" ? t.home : e === "messages" ? t.messenger : e === "help" ? t.help : e === "news" ? t.news : !!t.profile;
}
//#endregion
//#region components/widget/branding-footer.tsx
function Nr({ className: e }) {
	let t = V("branding");
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
			duration: .32,
			delay: .15,
			ease: "easeOut"
		},
		className: H("flex items-center justify-center gap-1 bg-wx-bg px-4 py-1.5 text-[10px] font-medium text-wx-fg-subtle", e),
		children: [/* @__PURE__ */ X("span", { children: t("poweredBy") }), /* @__PURE__ */ X("a", {
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
function Pr({ muted: e, onToggle: t }) {
	return /* @__PURE__ */ X(et, {
		type: "button",
		variant: "ghost",
		size: "icon",
		"aria-label": V("sound")(e ? "unmute" : "mute"),
		onClick: t,
		children: /* @__PURE__ */ X(ze, {
			icon: e ? Tr : wr,
			size: 18
		})
	});
}
//#endregion
//#region components/widget/conversation-header.tsx
function Fr({ title: e, subtitle: t, organizationLogoUrl: n, muted: r, onToggleMute: a, onBack: o, onClose: c, showResolve: l, onResolve: u, expanded: d, onToggleExpand: f }) {
	let p = V("header"), m = V("header"), h = V("messages"), g = ot(), _ = ot();
	return /* @__PURE__ */ Z("header", {
		className: H("flex items-center gap-3 border-b border-wx-border bg-wx-bg px-3 py-3"),
		children: [
			o && /* @__PURE__ */ X(et, {
				type: "button",
				variant: "ghost",
				size: "icon",
				"aria-label": p("back"),
				onClick: o,
				className: "shrink-0",
				...g.parentHandlers,
				children: /* @__PURE__ */ X(s, {
					ref: g.iconRef,
					size: 18
				})
			}),
			n && /* @__PURE__ */ X("span", {
				className: "h-9 w-9 shrink-0 overflow-hidden rounded-full",
				children: /* @__PURE__ */ X("img", {
					src: n,
					alt: e,
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ Z("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ X("p", {
					className: "truncate text-sm font-semibold text-wx-fg",
					children: e
				}), t && /* @__PURE__ */ X("p", {
					className: "truncate text-xs text-wx-fg-muted",
					children: t
				})]
			}),
			l && u && /* @__PURE__ */ X(et, {
				type: "button",
				variant: "ghost",
				size: "icon",
				"aria-label": h("resolveConversation"),
				title: h("resolveConversation"),
				onClick: u,
				className: "shrink-0",
				children: /* @__PURE__ */ X(Ir, {})
			}),
			/* @__PURE__ */ X(Pr, {
				muted: r,
				onToggle: a
			}),
			f && /* @__PURE__ */ X(et, {
				type: "button",
				variant: "ghost",
				size: "icon",
				"aria-label": m(d ? "collapse" : "expand"),
				onClick: f,
				className: "shrink-0",
				children: /* @__PURE__ */ X(Lr, { expanded: !!d })
			}),
			/* @__PURE__ */ X(et, {
				type: "button",
				variant: "ghost",
				size: "icon",
				"aria-label": p("close"),
				onClick: c,
				className: "shrink-0",
				..._.parentHandlers,
				children: /* @__PURE__ */ X(i, {
					ref: _.iconRef,
					size: 18
				})
			})
		]
	});
}
function Ir() {
	return /* @__PURE__ */ Z("svg", {
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
		children: [/* @__PURE__ */ X("path", { d: "M21.801 10A10 10 0 1 1 17 3.335" }), /* @__PURE__ */ X("path", { d: "m9 11 3 3L22 4" })]
	});
}
function Lr({ expanded: e }) {
	return e ? /* @__PURE__ */ Z("svg", {
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
			/* @__PURE__ */ X("polyline", { points: "4 14 10 14 10 20" }),
			/* @__PURE__ */ X("polyline", { points: "20 10 14 10 14 4" }),
			/* @__PURE__ */ X("line", {
				x1: "14",
				y1: "10",
				x2: "21",
				y2: "3"
			}),
			/* @__PURE__ */ X("line", {
				x1: "3",
				y1: "21",
				x2: "10",
				y2: "14"
			})
		]
	}) : /* @__PURE__ */ Z("svg", {
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
			/* @__PURE__ */ X("polyline", { points: "15 3 21 3 21 9" }),
			/* @__PURE__ */ X("polyline", { points: "9 21 3 21 3 15" }),
			/* @__PURE__ */ X("line", {
				x1: "21",
				y1: "3",
				x2: "14",
				y2: "10"
			}),
			/* @__PURE__ */ X("line", {
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
function Rr({ children: e }) {
	let { isDummy: t } = fe(), n = Ne(), r = Me(), i = r.demo, a = i !== void 0 && typeof i == "object" && !!i && Object.keys(i).length > 0, [o, s] = Y(null);
	return q(() => {
		if (!t || a) return;
		let e = !0;
		return zr(n).then((t) => {
			e && s(t);
		}), () => {
			e = !1;
		};
	}, [
		t,
		a,
		n
	]), !t || a ? /* @__PURE__ */ X(mt, { children: e }) : o ? /* @__PURE__ */ X(bt, {
		locale: n,
		messages: {
			...r,
			demo: o
		},
		timeZone: typeof Intl < "u" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "UTC",
		children: e
	}) : null;
}
async function zr(e) {
	switch (e) {
		case "uk": return (await import("./widget-react-B9X7Tn7t.js")).default;
		default: return (await import("./widget-react-DNFROpaS.js")).default;
	}
}
//#endregion
//#region components/widget/help-list-row.tsx
function Br({ title: e, description: t, meta: r, authors: i, onClick: a, kind: o = "none", delay: s = 0 }) {
	let c = o === "article";
	return /* @__PURE__ */ Z(n.button, {
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
		className: H("group flex w-full items-center gap-3 border-wx-border border-b text-left transition-colors", "hover:bg-wx-bg-elevated/60", "last:border-b-0", c ? "px-5 py-3" : "px-5 py-3.5"),
		children: [/* @__PURE__ */ Z("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [
				/* @__PURE__ */ X("span", {
					className: H("text-wx-fg", c ? "font-normal text-sm" : "font-semibold text-sm"),
					children: e
				}),
				t && /* @__PURE__ */ X("span", {
					className: H("leading-snug", c ? "truncate text-[11px] text-wx-fg-subtle" : "text-wx-fg-muted text-xs"),
					children: t
				}),
				r && /* @__PURE__ */ X("span", {
					className: "text-[11px] text-wx-fg-subtle",
					children: r
				})
			]
		}), /* @__PURE__ */ Z("span", {
			className: "flex shrink-0 items-center gap-2 text-wx-fg-muted",
			children: [i && i.length > 0 && /* @__PURE__ */ X(Be, { authors: i }), /* @__PURE__ */ X(g, {
				size: 16,
				className: "transition-transform group-hover:translate-x-0.5",
				"aria-hidden": "true"
			})]
		})]
	});
}
//#endregion
//#region components/widget/help-category-view.tsx
var Vr = 10, Hr = 240, Ur = 3;
function Wr({ categoryId: e, categoryName: t, categoryDescription: r, categoryArticleCount: i, isDummy: a, onOpenCategory: o, onOpenArticle: s }) {
	let c = V("help"), l = V("demo"), u = Ne(), [d, f] = Y(""), p = Kr(d, 300), m = p.length >= 2, { data: h } = Xe({
		variables: {
			parentId: e,
			locale: u
		},
		skip: a
	}), g = pt(() => h?.visitorHelpFolders ?? [], [h]), { data: _, loading: v, fetchMore: y } = Qe({
		variables: { args: {
			folderId: e,
			locale: u,
			recursive: !1,
			limit: Vr,
			offset: 0
		} },
		skip: a,
		notifyOnNetworkStatusChange: !0
	}), { data: b, loading: x } = Qe({
		variables: { args: {
			query: p,
			locale: u,
			limit: 10
		} },
		skip: p.length < 2 || a
	}), S = a ? Ze(l).find((t) => t.id === e) : null, C = a ? Je(l).filter((t) => t.categoryId === e) : [], w = a ? C.map((e) => ({
		id: e.id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt,
		authors: He(e.authors),
		reactionCounts: null
	})) : (_?.visitorHelpList.items ?? []).map((e) => ({
		id: e._id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt ?? null,
		authors: He(e.authors),
		reactionCounts: e.reactionCounts ?? null
	})), T = a ? Je(l).filter((e) => e.title.toLowerCase().includes(p.toLowerCase()) || e.excerpt.toLowerCase().includes(p.toLowerCase())).map((e) => ({
		id: e.id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt,
		authors: He(e.authors),
		reactionCounts: null
	})) : [], E = (b?.visitorHelpList.items ?? []).map((e) => ({
		id: e._id,
		slug: e.slug,
		title: e.title,
		excerpt: e.excerpt ?? null,
		authors: He(e.authors),
		reactionCounts: e.reactionCounts ?? null
	})), ee = m ? a ? T : E : w, D = t ?? S?.title ?? "", O = r ?? S?.description ?? "", k = i ?? S?.articleCount ?? w.length, te = pt(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of w) for (let n of t.authors ?? []) e.has(n.id) || e.set(n.id, n);
		return Array.from(e.values());
	}, [w]), A = te.slice(0, Ur), j = Math.max(0, te.length - A.length), M = A[0]?.name ?? "", N = !m && !a && (_?.visitorHelpList.meta.hasNextPage ?? !1), [ne, re] = Y(!1), ie = K(async () => {
		if (!(!N || ne)) {
			re(!0);
			try {
				await y({
					variables: { args: {
						folderId: e,
						locale: u,
						recursive: !1,
						limit: Vr,
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
				re(!1);
			}
		}
	}, [
		N,
		ne,
		e,
		u,
		y,
		_
	]), ae = K((e) => {
		let t = e.currentTarget;
		t.scrollHeight - t.clientHeight - t.scrollTop < Hr && ie();
	}, [ie]), oe = !a && !m && v && w.length === 0 && g.length === 0;
	return /* @__PURE__ */ X("div", {
		className: "flex h-full min-h-0 flex-col",
		children: /* @__PURE__ */ Z(z, {
			className: "min-h-0 flex-1",
			onScroll: ae,
			children: [
				/* @__PURE__ */ X(Fe, {
					value: d,
					onChange: f,
					placeholder: c("searchPlaceholder")
				}),
				!m && D && /* @__PURE__ */ X(n.div, {
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
					children: /* @__PURE__ */ Z("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ Z("div", {
							className: "flex min-w-0 flex-1 flex-col gap-1.5",
							children: [
								/* @__PURE__ */ X("h2", {
									className: "font-semibold text-lg text-wx-fg",
									children: D
								}),
								O && /* @__PURE__ */ X("p", {
									className: "text-sm text-wx-fg-muted leading-snug",
									children: O
								}),
								/* @__PURE__ */ Z("div", {
									className: "mt-1 flex flex-col gap-0.5 text-wx-fg-subtle text-xs",
									children: [/* @__PURE__ */ X("span", { children: c("articlesCount", { count: k }) }), M && /* @__PURE__ */ X("span", { children: c("authorsByline", {
										first: M,
										remaining: j
									}) })]
								})
							]
						}), A.length > 0 && /* @__PURE__ */ X("div", {
							className: "shrink-0",
							children: /* @__PURE__ */ X(Be, { authors: A })
						})]
					})
				}),
				oe ? /* @__PURE__ */ X(Gr, {}) : ee.length === 0 && g.length === 0 ? /* @__PURE__ */ X("div", {
					className: "px-5 py-6",
					children: /* @__PURE__ */ X(Oe, { children: /* @__PURE__ */ X(Ae, {
						className: "py-8 text-center",
						children: /* @__PURE__ */ X("p", {
							className: "text-sm text-wx-fg-muted",
							children: c(m ? "noResults" : "emptyTitle")
						})
					}) })
				}) : /* @__PURE__ */ Z("div", {
					className: "flex flex-col",
					children: [
						ee.map((e, t) => /* @__PURE__ */ X(Br, {
							title: e.title,
							description: e.excerpt,
							authors: e.authors,
							kind: "article",
							onClick: () => s(e.slug),
							delay: Math.min(t, Vr) * .03
						}, e.id)),
						!m && g.map((e, t) => /* @__PURE__ */ X(Br, {
							title: e.name,
							description: e.description,
							meta: (e.articleCount ?? 0) > 0 ? c("articlesCount", { count: e.articleCount ?? 0 }) : void 0,
							kind: "folder",
							onClick: () => o(e._id, {
								name: e.name,
								description: e.description ?? void 0,
								articleCount: e.articleCount ?? 0
							}),
							delay: (ee.length + t) * .03
						}, e._id)),
						(ne || x) && /* @__PURE__ */ X("div", {
							className: "flex justify-center py-3",
							children: /* @__PURE__ */ X(W, { className: "h-3 w-24" })
						})
					]
				})
			]
		})
	});
}
function Gr() {
	return /* @__PURE__ */ X("div", {
		className: "flex flex-col",
		children: Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ Z("div", {
			className: "flex items-center gap-3 border-wx-border border-b px-5 py-4 last:border-b-0",
			children: [/* @__PURE__ */ Z("div", {
				className: "flex min-w-0 flex-1 flex-col gap-2",
				children: [/* @__PURE__ */ X(W, { className: "h-4 w-32 rounded" }), /* @__PURE__ */ X(W, { className: "h-3 w-56 rounded" })]
			}), /* @__PURE__ */ X(W, { className: "h-4 w-4 rounded" })]
		}, t))
	});
}
function Kr(e, t) {
	let [n, r] = Y(e);
	return q(() => {
		let n = setTimeout(() => r(e), t);
		return () => clearTimeout(n);
	}, [e, t]), n;
}
//#endregion
//#region lib/strip-html.ts
function qr(e) {
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
function Jr({ message: e, onOpen: t, onDismiss: r, onSendButton: i, position: a = "right", embedded: o = !1 }) {
	let s = V("peek"), c = a === "left";
	return /* @__PURE__ */ X(Se, { children: e && /* @__PURE__ */ Z(n.div, {
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
		className: H("bottom-24 z-2147483599 flex w-[300px] flex-col gap-2", o ? "absolute" : "fixed", c ? "left-4" : "right-4"),
		role: "dialog",
		"aria-label": s("newMessage"),
		children: [e.text && /* @__PURE__ */ Z(n.div, {
			whileHover: { y: -3 },
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 24
			},
			className: H("relative rounded-wx-lg border border-wx-border bg-wx-bg", "p-4 pr-9 text-wx-fg", "shadow-[0_16px_40px_rgba(0,0,0,0.16)]"),
			children: [/* @__PURE__ */ X("button", {
				type: "button",
				onClick: r,
				"aria-label": s("dismiss"),
				className: H("absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full", "text-wx-fg-muted transition-colors hover:bg-wx-bg-elevated hover:text-wx-fg"),
				children: /* @__PURE__ */ X(ke, { size: 12 })
			}), /* @__PURE__ */ Z("button", {
				type: "button",
				onClick: t,
				className: H("block w-full text-left", "transition-opacity hover:opacity-90"),
				children: [/* @__PURE__ */ X(Yr, { sender: e.sender }), /* @__PURE__ */ X("span", {
					className: H("mt-1.5 block text-sm leading-relaxed", "wrap-anywhere", "line-clamp-10"),
					children: qr(e.text)
				})]
			})]
		}), e.buttons.length > 0 && /* @__PURE__ */ X("div", {
			className: H("flex flex-col gap-1.5", c ? "items-start" : "items-end"),
			children: e.buttons.map((e) => /* @__PURE__ */ X(n.button, {
				type: "button",
				onClick: () => i(e.payload, e.text),
				whileHover: { y: -1 },
				whileTap: { scale: .96 },
				transition: {
					type: "spring",
					stiffness: 480,
					damping: 26
				},
				className: H("max-w-full rounded-full bg-wx-bg px-3.5 py-2 text-sm font-medium text-wx-primary", "transition-colors hover:bg-wx-primary hover:text-wx-primary-fg", "shadow-[0_4px_12px_rgba(0,0,0,0.08)]"),
				children: e.text
			}, e.payload))
		})]
	}, e.id) });
}
function Yr({ sender: e }) {
	let { config: t } = fe(), n = V("peek"), r = e.kind === "ai" || e.kind === "bot", i = r ? xt : e.name?.trim() ?? "", a = i ? null : e.kind === "operator" ? n("operator") : null, o = t.messenger?.aiAssistantAvatar ?? null;
	return /* @__PURE__ */ Z("span", {
		className: "flex items-center gap-2 text-xs",
		children: [r ? o ? /* @__PURE__ */ X("span", {
			role: "img",
			"aria-label": n("aiAssistant"),
			className: "relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg-elevated shadow-sm",
			children: /* @__PURE__ */ X("img", {
				src: o,
				alt: "",
				className: "h-full w-full object-cover",
				loading: "eager",
				decoding: "async"
			})
		}) : null : e.avatar ? /* @__PURE__ */ X("img", {
			src: e.avatar,
			alt: i || a || "",
			className: "h-5 w-5 shrink-0 rounded-full object-cover"
		}) : /* @__PURE__ */ X("span", {
			className: H("flex h-5 w-5 shrink-0 items-center justify-center rounded-full", "bg-wx-bg-elevated text-[9px] font-semibold text-wx-fg-muted"),
			children: Xr(i || a || "")
		}), /* @__PURE__ */ X("span", {
			className: "font-medium text-wx-fg-muted",
			children: i || a
		})]
	});
}
function Xr(e) {
	let t = e.trim().split(/\s+/).map((e) => e.replace(/[^\p{L}\p{N}]/gu, "")).filter((e) => e.length > 0);
	return t.length === 0 ? "" : t.length === 1 ? t[0].charAt(0).toUpperCase() : t[0].charAt(0).toUpperCase() + t[t.length - 1].charAt(0).toUpperCase();
}
//#endregion
//#region components/widget/tab-title-header.tsx
function Zr({ title: e, onBack: t, onClose: n, className: r, expanded: a, onToggleExpand: o }) {
	let c = V("header"), l = ot(), u = ot();
	return /* @__PURE__ */ Z("header", {
		className: H("flex h-14 items-center gap-2 border-b border-wx-border bg-wx-bg px-2", r),
		children: [
			/* @__PURE__ */ X("div", {
				className: "flex flex-1 items-center justify-start",
				children: t && /* @__PURE__ */ X(et, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": c("back"),
					onClick: t,
					className: "shrink-0",
					...l.parentHandlers,
					children: /* @__PURE__ */ X(s, {
						ref: l.iconRef,
						size: 18
					})
				})
			}),
			e && /* @__PURE__ */ X("h2", {
				className: "min-w-0 shrink truncate text-center text-base font-semibold text-wx-fg",
				children: e
			}),
			/* @__PURE__ */ Z("div", {
				className: "flex flex-1 items-center justify-end gap-0",
				children: [o && /* @__PURE__ */ X(et, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": c(a ? "collapse" : "expand"),
					onClick: o,
					children: a ? /* @__PURE__ */ Z("svg", {
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
							/* @__PURE__ */ X("polyline", { points: "4 14 10 14 10 20" }),
							/* @__PURE__ */ X("polyline", { points: "20 10 14 10 14 4" }),
							/* @__PURE__ */ X("line", {
								x1: "14",
								y1: "10",
								x2: "21",
								y2: "3"
							}),
							/* @__PURE__ */ X("line", {
								x1: "3",
								y1: "21",
								x2: "10",
								y2: "14"
							})
						]
					}) : /* @__PURE__ */ Z("svg", {
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
							/* @__PURE__ */ X("polyline", { points: "15 3 21 3 21 9" }),
							/* @__PURE__ */ X("polyline", { points: "9 21 3 21 3 15" }),
							/* @__PURE__ */ X("line", {
								x1: "21",
								y1: "3",
								x2: "14",
								y2: "10"
							}),
							/* @__PURE__ */ X("line", {
								x1: "3",
								y1: "21",
								x2: "10",
								y2: "14"
							})
						]
					})
				}), /* @__PURE__ */ X(et, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": c("close"),
					onClick: n,
					...u.parentHandlers,
					children: /* @__PURE__ */ X(i, {
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
function Qr({ isDummy: e, onOpenCategory: t, onOpenArticle: n }) {
	let r = V("help"), i = V("demo"), a = Ne(), [o, s] = Y(""), c = ti(o, 300), { data: l, loading: u } = Xe({
		variables: {
			parentId: null,
			locale: a
		},
		skip: e
	}), { data: d } = Qe({
		variables: { args: {
			folderId: null,
			locale: a,
			recursive: !1,
			limit: 20
		} },
		skip: e
	}), { data: f } = Qe({
		variables: { args: {
			query: c,
			locale: a,
			limit: 10
		} },
		skip: c.length < 2 || e
	}), p = ni(l), m = e ? Ze(i) : p ?? [], h = c.length >= 2, g = ri(f), _ = e ? Je(i).filter((e) => e.title.toLowerCase().includes(c.toLowerCase()) || e.excerpt.toLowerCase().includes(c.toLowerCase())).map((e) => ({
		id: e.id,
		title: e.title,
		excerpt: e.excerpt,
		slug: e.slug,
		authors: He(e.authors)
	})) : [], v = e ? _ : g, y = e ? [] : (d?.visitorHelpList.items ?? []).map((e) => ({
		id: e._id,
		title: e.title,
		excerpt: e.excerpt ?? null,
		slug: e.slug,
		authors: He(e.authors)
	}));
	return /* @__PURE__ */ X("div", {
		className: "flex h-full min-h-0 flex-col",
		children: /* @__PURE__ */ Z(z, {
			className: "min-h-0 flex-1",
			viewportRef: Re("help"),
			children: [/* @__PURE__ */ X(Fe, {
				value: o,
				onChange: s,
				placeholder: r("searchPlaceholder")
			}), h ? /* @__PURE__ */ X($r, {
				results: v,
				onOpen: n
			}) : u && m.length === 0 ? /* @__PURE__ */ X(ei, {}) : m.length > 0 || y.length > 0 ? /* @__PURE__ */ Z(mt, { children: [m.length > 0 && /* @__PURE__ */ X("div", {
				className: "border-wx-border border-b px-5 py-4",
				children: /* @__PURE__ */ X("p", {
					className: "font-semibold text-base text-wx-fg",
					children: r("collectionsCount", { count: m.length })
				})
			}), /* @__PURE__ */ Z("div", {
				className: "flex flex-col",
				children: [m.map((e, n) => /* @__PURE__ */ X(Br, {
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
				}, e.id)), y.map((e, t) => /* @__PURE__ */ X(Br, {
					title: e.title,
					description: e.excerpt,
					authors: e.authors,
					kind: "article",
					onClick: () => n(e.slug),
					delay: (m.length + t) * .03
				}, e.id))]
			})] }) : /* @__PURE__ */ X("div", {
				className: "px-5 py-6",
				children: /* @__PURE__ */ X(Oe, { children: /* @__PURE__ */ Z(Ae, {
					className: "py-8 text-center",
					children: [/* @__PURE__ */ X("p", {
						className: "font-semibold text-sm text-wx-fg",
						children: r("emptyTitle")
					}), /* @__PURE__ */ X("p", {
						className: "mt-1 text-wx-fg-muted text-xs",
						children: r("emptyBody")
					})]
				}) })
			})]
		})
	});
}
function $r({ results: e, onOpen: t }) {
	let n = V("help");
	return e.length === 0 ? /* @__PURE__ */ X("div", {
		className: "px-5 py-6",
		children: /* @__PURE__ */ X(Oe, { children: /* @__PURE__ */ X(Ae, {
			className: "py-8 text-center",
			children: /* @__PURE__ */ X("p", {
				className: "text-sm text-wx-fg-muted",
				children: n("noResults")
			})
		}) })
	}) : /* @__PURE__ */ X("div", {
		className: "flex flex-col",
		children: e.map((e, n) => /* @__PURE__ */ X(Br, {
			title: e.title,
			description: e.excerpt,
			authors: e.authors,
			onClick: () => t(e.slug),
			delay: n * .03
		}, e.id))
	});
}
function ei() {
	return /* @__PURE__ */ X("div", {
		className: "flex flex-col",
		children: Array.from({ length: 4 }).map((e, t) => /* @__PURE__ */ Z("div", {
			className: "flex items-center gap-3 border-wx-border border-b px-5 py-4 last:border-b-0",
			children: [/* @__PURE__ */ Z("div", {
				className: "flex min-w-0 flex-1 flex-col gap-2",
				children: [
					/* @__PURE__ */ X(W, { className: "h-4 w-32 rounded" }),
					/* @__PURE__ */ X(W, { className: "h-3 w-56 rounded" }),
					/* @__PURE__ */ X(W, { className: "h-3 w-20 rounded" })
				]
			}), /* @__PURE__ */ X(W, { className: "h-4 w-4 rounded" })]
		}, t))
	});
}
function ti(e, t) {
	let [n, r] = Y(e);
	return q(() => {
		let n = setTimeout(() => r(e), t);
		return () => clearTimeout(n);
	}, [e, t]), n;
}
function ni(e) {
	return e ? e.visitorHelpFolders.map((e) => ({
		id: e._id,
		title: e.name,
		description: e.description ?? "",
		articleCount: e.articleCount ?? 0
	})) : null;
}
function ri(e) {
	return e ? e.visitorHelpList.items.map((e) => ({
		id: e._id,
		title: e.title,
		excerpt: e.excerpt ?? null,
		slug: e.slug,
		authors: He(e.authors),
		reactionCounts: e.reactionCounts ?? null
	})) : [];
}
//#endregion
//#region node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-context/dist/index.mjs
function ii(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = G.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = G.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ X(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = G.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => G.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return G.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, ai(i, ...t)];
}
function ai(...e) {
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
			return G.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-primitive/dist/index.mjs
var oi = [
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
	let n = qe(`Primitive.${t}`), r = G.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ X(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {}), si = /* @__PURE__ */ u(((t) => {
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
})), ci = (/* @__PURE__ */ u(((e, t) => {
	t.exports = si();
})))();
function li() {
	return (0, ci.useSyncExternalStore)(ui, () => !0, () => !1);
}
function ui() {
	return () => {};
}
//#endregion
//#region node_modules/@radix-ui/react-avatar/dist/index.mjs
var di = "Avatar", [fi, pi] = ii(di), [mi, hi] = fi(di), gi = G.forwardRef((e, t) => {
	let { __scopeAvatar: n, ...r } = e, [i, a] = G.useState("idle");
	return /* @__PURE__ */ X(mi, {
		scope: n,
		imageLoadingStatus: i,
		onImageLoadingStatusChange: a,
		children: /* @__PURE__ */ X(oi.span, {
			...r,
			ref: t
		})
	});
});
gi.displayName = di;
var _i = "AvatarImage", vi = G.forwardRef((e, t) => {
	let { __scopeAvatar: n, src: r, onLoadingStatusChange: i = () => {}, ...a } = e, o = hi(_i, n), s = Si(r, a), c = ve((e) => {
		i(e), o.onImageLoadingStatusChange(e);
	});
	return L(() => {
		s !== "idle" && c(s);
	}, [s, c]), s === "loaded" ? /* @__PURE__ */ X(oi.img, {
		...a,
		ref: t,
		src: r
	}) : null;
});
vi.displayName = _i;
var yi = "AvatarFallback", bi = G.forwardRef((e, t) => {
	let { __scopeAvatar: n, delayMs: r, ...i } = e, a = hi(yi, n), [o, s] = G.useState(r === void 0);
	return G.useEffect(() => {
		if (r !== void 0) {
			let e = window.setTimeout(() => s(!0), r);
			return () => window.clearTimeout(e);
		}
	}, [r]), o && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ X(oi.span, {
		...i,
		ref: t
	}) : null;
});
bi.displayName = yi;
function xi(e, t) {
	return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function Si(e, { referrerPolicy: t, crossOrigin: n }) {
	let r = li(), i = G.useRef(null), a = r ? (i.current || (i.current = new window.Image()), i.current) : null, [o, s] = G.useState(() => xi(a, e));
	return L(() => {
		s(xi(a, e));
	}, [a, e]), L(() => {
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
var Ci = gi, wi = vi, Ti = bi, Ei = G.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X(Ci, {
	ref: n,
	className: H("relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full", e),
	...t
}));
Ei.displayName = Ci.displayName;
var Di = G.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X(wi, {
	ref: n,
	className: H("aspect-square h-full w-full object-cover", e),
	...t
}));
Di.displayName = wi.displayName;
var Oi = G.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ X(Ti, {
	ref: n,
	delayMs: 300,
	className: H("flex h-full w-full items-center justify-center bg-wx-bg-elevated-2 text-xs font-medium text-wx-fg-muted", e),
	...t
}));
Oi.displayName = Ti.displayName;
function ki({ avatars: e, max: t = 3, size: n = "md", ringClass: r = "ring-wx-bg", className: i }) {
	let a = e.slice(0, t), o = e.length - a.length, s = n === "sm" ? "h-7 w-7" : "h-8 w-8";
	return /* @__PURE__ */ Z("div", {
		className: H("flex -space-x-2", i),
		children: [a.map((e) => /* @__PURE__ */ Z(Ei, {
			className: H(s, "ring-2", r),
			children: [/* @__PURE__ */ X(Di, {
				src: e.src,
				alt: e.alt
			}), /* @__PURE__ */ X(Oi, { children: Ai(e.alt) })]
		}, e.src)), o > 0 && /* @__PURE__ */ X(Ei, {
			className: H(s, "ring-2", r),
			children: /* @__PURE__ */ Z(Oi, { children: ["+", o] })
		})]
	});
}
function Ai(e) {
	return e.split(/\s+/).filter(Boolean).slice(0, 2).map((e) => e[0]?.toUpperCase() ?? "").join("");
}
//#endregion
//#region lib/localize-config-text.ts
function ji(e, t, n, r) {
	let i = e?.trim() ?? "";
	return i && Mi(n, r ?? "en") ? i : t;
}
function Mi(e, t) {
	return Ni(e) === Ni(t);
}
function Ni(e) {
	return e.toLowerCase().split("-")[0];
}
function Pi() {
	let e = Ne(), { config: t } = fe(), n = t.defaultLocale ?? "en";
	return K((t, r) => ji(t, r, e, n), [e, n]);
}
//#endregion
//#region components/widget/home-blocks/blocks/ask-question.tsx
function Fi({ block: e, config: t, onOpenTab: r }) {
	let i = V("home"), a = Pi(), o = e.action ?? "open-messenger", s = o === "open-help" ? "help" : o === "open-news" ? "news" : "messages";
	return /* @__PURE__ */ Z(n.button, {
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
			/* @__PURE__ */ Z("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ X("p", {
					className: "truncate text-base font-semibold text-wx-fg",
					children: a(e.title, i("askTitle"))
				}), /* @__PURE__ */ X("p", {
					className: "mt-0.5 truncate text-sm text-wx-fg-muted",
					children: a(e.subtitle, i("askSubtitle"))
				})]
			}),
			t.operatorAvatars.length > 0 && /* @__PURE__ */ X(ki, {
				avatars: t.operatorAvatars,
				size: "sm",
				ringClass: "ring-wx-bg-elevated"
			}),
			/* @__PURE__ */ X(Vn, {
				size: 16,
				className: "shrink-0 text-wx-fg-muted"
			})
		]
	});
}
//#endregion
//#region components/widget/home-blocks/helpers.tsx
function Ii(e) {
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
function Li(e) {
	return Array.isArray(e) ? e.map((e) => {
		if (typeof e != "object" || !e) return null;
		let t = e, n = typeof t.title == "string" ? t.title : "";
		return n ? {
			id: String(t._id ?? t.id ?? ""),
			title: n
		} : null;
	}).filter((e) => e !== null) : [];
}
function Ri(e, t) {
	return t || !e ? [] : e.map((e) => {
		let t = typeof e.title == "string" ? e.title : "";
		return t ? {
			id: String(e._id ?? e.id ?? ""),
			title: t
		} : null;
	}).filter((e) => e !== null);
}
function zi(e) {
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
function Bi(e) {
	return e.split(/\n{2,}/).map((e, t) => /* @__PURE__ */ X("p", {
		className: t > 0 ? "mt-2" : void 0,
		children: e.split("\n").map((e, t) => /* @__PURE__ */ Z("span", { children: [t > 0 && /* @__PURE__ */ X("br", {}), Vi(e)] }, t))
	}, t));
}
function Vi(e) {
	let t = [], n = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g, r = 0, i, a = 0;
	for (; i = n.exec(e);) {
		if (i.index > r && t.push(e.slice(r, i.index)), i[1] && i[2]) {
			let e = /^https?:\/\//.test(i[2]) ? i[2] : "#";
			t.push(/* @__PURE__ */ X("a", {
				href: e,
				target: "_blank",
				rel: "noopener noreferrer",
				children: i[1]
			}, a++));
		} else i[3] ? t.push(/* @__PURE__ */ X("strong", {
			className: "font-semibold text-wx-fg",
			children: i[3]
		}, a++)) : i[4] && t.push(/* @__PURE__ */ X("em", { children: i[4] }, a++));
		r = i.index + i[0].length;
	}
	return r < e.length && t.push(e.slice(r)), t;
}
//#endregion
//#region components/widget/home-blocks/blocks/featured-article.tsx
function Hi({ block: e, onOpenTab: t, onOpenNewsArticle: r, isDummy: i }) {
	let a = V("home"), o = w(), s = !i && e.newsId ? o.previewData?.newsPostsById?.[e.newsId] : void 0, c = s !== void 0, { data: l, loading: u } = Ve({
		variables: { args: { id: e.newsId ?? "" } },
		skip: i || c || !e.newsId
	});
	if (i) return /* @__PURE__ */ Z(n.button, {
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
		children: [/* @__PURE__ */ X("div", {
			className: "relative w-full",
			style: {
				aspectRatio: "16 / 11",
				backgroundImage: "linear-gradient(135deg, #1e1f3b 0%, #1a1a2e 55%, #3a1e2b 100%)"
			},
			children: /* @__PURE__ */ Z("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-6 text-center text-white",
				children: [
					/* @__PURE__ */ X("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] uppercase opacity-80",
						children: a("featuredArticleDemoEyebrow")
					}),
					/* @__PURE__ */ X("p", {
						className: "text-2xl leading-tight font-bold",
						children: a("featuredArticleDemoHeadline")
					}),
					/* @__PURE__ */ X("p", {
						className: "text-sm opacity-85",
						children: a("featuredArticleDemoSubline")
					})
				]
			})
		}), /* @__PURE__ */ Z("div", {
			className: "flex items-center justify-between gap-2 px-4 py-3",
			children: [/* @__PURE__ */ X("span", {
				className: "truncate text-sm font-semibold text-wx-fg",
				children: a("featuredArticleDemoCta")
			}), /* @__PURE__ */ X(g, {
				size: 16,
				className: "shrink-0 text-wx-fg-subtle"
			})]
		})]
	});
	let d = Ii(c ? s : l?.visitorNewsPost), f = !!d, p = e.ctaLabel?.trim() || a("featuredArticleTap"), m = f ? () => r ? r(d.id) : t("news") : void 0, h = d?.coverImageUrl;
	return !e.newsId || !u && !d ? /* @__PURE__ */ X(n.button, {
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
		children: /* @__PURE__ */ X("div", {
			className: "relative w-full",
			style: {
				aspectRatio: "16 / 11",
				backgroundImage: "linear-gradient(135deg, #1e1f3b 0%, #1a1a2e 55%, #3a1e2b 100%)"
			},
			children: /* @__PURE__ */ Z("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-1 px-6 text-center text-white",
				children: [/* @__PURE__ */ X("p", {
					className: "text-2xl leading-tight font-bold",
					children: e.newsId ? a("featuredArticleLoading") : a("featuredArticleEmpty")
				}), /* @__PURE__ */ X("p", {
					className: "text-sm opacity-80",
					children: e.newsId ? "" : a("featuredArticleSetUp")
				})]
			})
		})
	}) : /* @__PURE__ */ Z(n.button, {
		type: "button",
		onClick: m,
		whileHover: f ? { y: -2 } : void 0,
		whileTap: f ? { scale: .99 } : void 0,
		transition: {
			type: "spring",
			stiffness: 360,
			damping: 26
		},
		disabled: !f,
		className: "block w-full overflow-hidden rounded-wx-xl bg-wx-bg-elevated text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: [/* @__PURE__ */ X("div", {
			className: "relative w-full",
			style: {
				aspectRatio: "16 / 11",
				backgroundImage: h ? `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.65) 100%), url(${h})` : "linear-gradient(135deg, #1e1f3b 0%, #1a1a2e 55%, #3a1e2b 100%)",
				backgroundSize: "cover",
				backgroundPosition: "center"
			},
			children: /* @__PURE__ */ Z("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-6 text-center text-white",
				children: [/* @__PURE__ */ X("p", {
					className: "text-2xl leading-tight font-bold",
					children: d?.title
				}), d?.excerpt && /* @__PURE__ */ X("p", {
					className: "text-sm opacity-85 line-clamp-2",
					children: d.excerpt
				})]
			})
		}), /* @__PURE__ */ Z("div", {
			className: "flex items-center justify-between gap-2 px-4 py-3",
			children: [/* @__PURE__ */ X("span", {
				className: "truncate text-sm font-semibold text-wx-fg",
				children: p
			}), /* @__PURE__ */ X(g, {
				size: 16,
				className: "shrink-0 text-wx-fg-subtle"
			})]
		})]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/help-search.tsx
function Ui() {
	return /* @__PURE__ */ Z("div", {
		className: "flex w-full items-center gap-2 px-3.5 py-2.5",
		children: [/* @__PURE__ */ X("div", { className: "h-3.5 min-w-0 flex-1 animate-pulse rounded-wx-sm bg-wx-bg-elevated-2" }), /* @__PURE__ */ X("div", { className: "h-3.5 w-3.5 shrink-0 animate-pulse rounded-wx-sm bg-wx-bg-elevated-2" })]
	});
}
function Wi({ title: e, slug: t, onOpenArticle: n, onOpenTab: r }) {
	return /* @__PURE__ */ Z("button", {
		type: "button",
		onClick: () => n ? n(t) : r("help"),
		className: "flex w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-wx-bg-elevated-2",
		children: [/* @__PURE__ */ X("span", {
			className: "min-w-0 flex-1 truncate text-sm text-wx-fg",
			children: e
		}), /* @__PURE__ */ X(g, {
			size: 14,
			className: "shrink-0 text-wx-fg-subtle"
		})]
	});
}
function Gi({ block: e, onOpenTab: t, onOpenArticle: n, isDummy: r }) {
	let i = V("home"), a = V("demo"), o = w(), s = Ne(), c = e.suggestions, l = c ? c.mode === "manual" ? Math.min((c.articleIds ?? []).length, 10) : Math.max(0, Math.min(c.maxItems ?? 0, 10)) : 0, u = o.previewData?.helpArticles, d = !r && !!u && l > 0, f = c?.mode === "popular" ? $e.Popular : c?.mode === "recent" ? $e.Recent : void 0, p = c?.mode === "category" ? c.categoryId : void 0, m = r || d || l === 0 || !c || !(c.mode === "popular" || c.mode === "recent" || c.mode === "category") || c.mode === "category" && !p, { data: h, loading: g } = Ke({
		variables: { args: {
			limit: l,
			locale: s,
			sort: f,
			folderId: p ?? void 0,
			recursive: c?.mode === "category" ? !0 : void 0
		} },
		skip: m
	}), _ = c?.mode === "manual" ? (c.articleIds ?? []).slice(0, l) : [], v = r || d || _.length === 0, { data: y, loading: b } = Ge({
		variables: {
			ids: _,
			locale: s
		},
		skip: v
	}), x = (() => {
		if (l === 0 || !c) return [];
		if (r) {
			let e = Je(a);
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
		return c.mode === "manual" ? (y?.visitorHelpArticlesByIds ?? []).filter((e) => e != null).map((e) => ({
			id: e._id,
			title: e.title,
			slug: e.slug
		})) : (h?.visitorHelpList?.items ?? []).map((e) => ({
			id: e._id,
			title: e.title,
			slug: e.slug
		}));
	})(), S = !r && !d && (g || b) && x.length === 0 ? l : 0, C = S > 0 || x.length > 0;
	return /* @__PURE__ */ Z("div", {
		className: "overflow-hidden rounded-wx-lg border border-wx-border bg-wx-bg-elevated",
		children: [/* @__PURE__ */ Z("button", {
			type: "button",
			onClick: () => t("help"),
			className: "flex w-full items-center gap-2.5 px-3.5 py-3 text-left transition-colors hover:bg-wx-bg-elevated-2",
			children: [/* @__PURE__ */ X("span", {
				className: "min-w-0 flex-1 truncate text-sm font-medium text-wx-fg",
				children: e.placeholder?.trim() || i("searchPlaceholder")
			}), /* @__PURE__ */ X(pr, {
				size: 16,
				className: "shrink-0 text-wx-fg-muted"
			})]
		}), C && /* @__PURE__ */ X("div", {
			className: "border-t border-wx-border",
			children: S > 0 ? Array.from({ length: S }).map((e, t) => /* @__PURE__ */ X(Ui, {}, t)) : x.map((e) => /* @__PURE__ */ X(Wi, {
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
function Ki({ title: e, onOpenAll: t, children: n }) {
	return /* @__PURE__ */ Z("div", {
		className: "overflow-hidden rounded-wx-lg border border-wx-border bg-wx-bg-elevated",
		children: [/* @__PURE__ */ Z("div", {
			className: "flex items-center justify-between px-3.5 pt-3 pb-1.5",
			children: [/* @__PURE__ */ X("p", {
				className: "text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
				children: e
			}), /* @__PURE__ */ X("button", {
				type: "button",
				onClick: t,
				className: "text-xs font-medium text-wx-primary hover:underline",
				children: /* @__PURE__ */ X(g, { size: 14 })
			})]
		}), n]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/news-preview.tsx
function qi({ block: e, onOpenTab: t, onOpenNewsArticle: n, isDummy: r }) {
	let i = V("home"), a = V("demo"), o = Ne(), s = w(), c = Pi(), l = Math.max(1, Math.min(10, e.maxItems ?? 3)), u = r ? void 0 : s.previewData?.newsPosts, d = Array.isArray(u) && u.length > 0, { data: f, error: p, loading: m } = Le({
		variables: { args: {
			locale: o,
			limit: l
		} },
		skip: r || d
	}), h = r ? Ie(a).slice(0, l).map((e) => ({
		id: e.id,
		title: e.title
	})) : d ? Li(u).slice(0, l) : Ri(f?.visitorNewsList.items, p).slice(0, l);
	return !r && !m && h.length === 0 ? null : /* @__PURE__ */ X(Ki, {
		title: c(e.title, i("newsPreviewTitle")),
		onOpenAll: () => t("news"),
		children: /* @__PURE__ */ X("ul", {
			className: "flex flex-col",
			children: h.map((e) => /* @__PURE__ */ X("li", { children: /* @__PURE__ */ Z("button", {
				type: "button",
				onClick: () => n ? n(e.id) : t("news"),
				className: "flex w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-wx-bg-elevated-2",
				children: [
					/* @__PURE__ */ X(_r, {
						size: 14,
						className: "shrink-0 text-wx-fg-muted"
					}),
					/* @__PURE__ */ X("span", {
						className: "min-w-0 flex-1 truncate text-sm text-wx-fg",
						children: e.title
					}),
					/* @__PURE__ */ X(g, {
						size: 14,
						className: "shrink-0 text-wx-fg-subtle"
					})
				]
			}) }, e.id || e.title))
		})
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/pinned-articles.tsx
function Ji({ block: e, onOpenTab: t, onOpenArticle: n, isDummy: r }) {
	let i = V("home"), a = V("demo"), o = w(), s = Ne(), c = Pi(), l = (e.articleIds ?? []).slice(0, 10), u = l.length, d = r ? null : o.previewData?.helpArticlesById, f = !!d, { data: p } = Ye({
		variables: {
			ids: l,
			locale: s
		},
		skip: r || f || l.length === 0
	});
	if (r) {
		let r = Je(a).slice().sort((e, t) => t.viewCount - e.viewCount).slice(0, 4);
		return /* @__PURE__ */ X(Ki, {
			title: c(e.title, i("popularArticlesTitle")),
			onOpenAll: () => t("help"),
			children: /* @__PURE__ */ X("ul", {
				className: "flex flex-col",
				children: r.map((e) => /* @__PURE__ */ X("li", { children: /* @__PURE__ */ Z("button", {
					type: "button",
					onClick: () => n ? n(e.slug) : t("help"),
					className: "flex w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-wx-bg-elevated-2",
					children: [
						/* @__PURE__ */ X(Gn, {
							size: 14,
							className: "shrink-0 text-wx-fg-muted"
						}),
						/* @__PURE__ */ X("span", {
							className: "min-w-0 flex-1 truncate text-sm text-wx-fg",
							children: e.title
						}),
						/* @__PURE__ */ X(g, {
							size: 14,
							className: "shrink-0 text-wx-fg-subtle"
						})
					]
				}) }, e.id))
			})
		});
	}
	if (u === 0) return null;
	let m = /* @__PURE__ */ new Map();
	if (f && d) for (let e of l) {
		let t = d[e];
		if (t && typeof t == "object") {
			let n = t;
			typeof n.title == "string" && typeof n.slug == "string" && m.set(e, {
				title: n.title,
				slug: n.slug
			});
		}
	}
	else for (let e of p?.visitorHelpArticlesByIds ?? []) m.set(e._id, {
		title: e.title,
		slug: e.slug
	});
	return /* @__PURE__ */ X(Ki, {
		title: c(e.title, i("pinnedArticlesTitle")),
		onOpenAll: () => t("help"),
		children: /* @__PURE__ */ X("ul", {
			className: "flex flex-col",
			children: l.map((e, r) => {
				let a = m.get(e);
				return /* @__PURE__ */ X("li", { children: /* @__PURE__ */ Z("button", {
					type: "button",
					onClick: () => {
						a && n ? n(a.slug) : t("help");
					},
					className: "flex w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-wx-bg-elevated-2",
					children: [
						/* @__PURE__ */ X(Gn, {
							size: 14,
							className: "shrink-0 text-wx-fg-muted"
						}),
						/* @__PURE__ */ X("span", {
							className: "min-w-0 flex-1 truncate text-sm text-wx-fg",
							children: a ? a.title : i("pinnedArticleRow", { n: r + 1 })
						}),
						/* @__PURE__ */ X(g, {
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
function Yi(e, t, n) {
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
function Xi({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ Z("svg", {
		...Yi(e, t, n ? "#25D366" : "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "WhatsApp" }), /* @__PURE__ */ X("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" })]
	});
}
function Zi({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ Z("svg", {
		...Yi(e, t, n ? "#26A5E4" : "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "Telegram" }), /* @__PURE__ */ X("path", { d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.149-.056-.211s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" })]
	});
}
function Qi({ size: e = 18, className: t, colored: n }) {
	return n ? /* @__PURE__ */ Z("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: e,
		height: e,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className: t,
		children: [
			/* @__PURE__ */ X("title", { children: "Instagram" }),
			/* @__PURE__ */ X("defs", { children: /* @__PURE__ */ Z("radialGradient", {
				id: "wexio-ig-gradient",
				cx: "30%",
				cy: "107%",
				r: "150%",
				children: [
					/* @__PURE__ */ X("stop", {
						offset: "0%",
						stopColor: "#FFDD55"
					}),
					/* @__PURE__ */ X("stop", {
						offset: "25%",
						stopColor: "#FFDD55"
					}),
					/* @__PURE__ */ X("stop", {
						offset: "50%",
						stopColor: "#FF543E"
					}),
					/* @__PURE__ */ X("stop", {
						offset: "75%",
						stopColor: "#C837AB"
					}),
					/* @__PURE__ */ X("stop", {
						offset: "100%",
						stopColor: "#5851DB"
					})
				]
			}) }),
			/* @__PURE__ */ X("path", {
				fill: "url(#wexio-ig-gradient)",
				d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
			})
		]
	}) : /* @__PURE__ */ Z("svg", {
		...Yi(e, t, "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "Instagram" }), /* @__PURE__ */ X("path", { d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" })]
	});
}
function $i({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ Z("svg", {
		...Yi(e, t, n ? "#0078FF" : "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "Messenger" }), /* @__PURE__ */ X("path", { d: "M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.39 0 010 11.639zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.81-2.1a1.86 1.86 0 00-2.6.48z" })]
	});
}
function ea({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ Z("svg", {
		...Yi(e, t, n ? "#7360F2" : "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "Viber" }), /* @__PURE__ */ X("path", { d: "M11.4 0C9.473.028 5.333.344 3.018 2.467 1.298 4.187.696 6.7.633 9.817c-.062 3.116-.136 8.95 5.488 10.533v2.42s-.038.978.609 1.177c.781.243 1.24-.502 1.986-1.305.41-.441.973-1.09 1.4-1.587 3.85.324 6.8-.418 7.143-.529 1.072-.345 6.49-.95 7.245-9.388.36-3.66-.143-7.23-3.245-9.875-.96-.838-2.984-2.293-7.245-2.317 0 0-.246-.011-.61-.012zm.149 1.625c1.073 0 5.184.103 7.18 1.92 2.546 2.236 2.972 5.36 2.668 8.47-.55 7.058-4.825 7.55-5.73 7.838-.288.111-2.85.794-6.092.581 0 0-2.408 2.926-3.158 3.69-.117.122-.255.171-.347.144-.13-.034-.165-.193-.165-.428l.02-3.99c-4.756-1.302-4.482-6.293-4.43-8.895.054-2.602.547-4.735 1.996-6.176 1.948-1.788 5.485-2.05 7.196-2.054.43-.001.642-.05.862-.05zm-.135 2.5c-.143.001-.247.118-.222.262.024.142.143.245.286.245 1.86.041 3.385.685 4.555 1.975.555.617.836 1.27 1.045 2.06.21.789.275 1.638.245 2.475-.005.144.099.265.243.272s.265-.103.272-.247c.032-.876-.038-1.768-.262-2.617-.224-.847-.554-1.601-1.183-2.298-1.27-1.396-2.97-2.117-4.928-2.16-.018-.001-.034.001-.05.033zm-1.5 1.282c-.196.005-.452.038-.711.232-.413.31-1.262 1.328-1.293 2.078-.031.787 1.293 3.013 1.293 3.013l.025.026s1.044 1.706 2.075 3c1.027 1.297 2.075 2.187 2.075 2.187s1.293.992 2.078 1.231c.788.244 1.293-.025 1.605-.451.31-.413 1.328-1.231 1.328-2.018 0-.788-2.018-1.832-2.481-1.953-.464-.122-.866 0-.991.213-.213.366-.5.732-1.062.488-1.013-.46-1.628-1.013-2.018-1.487-.46-.5-.91-1.013-1.413-2.018-.25-.535.119-.825.488-1.038.213-.122.366-.524.244-.988-.122-.464-1.166-2.481-1.953-2.481-.094-.024-.207-.034-.31-.034zm2.293 1.187a.265.265 0 00-.262.262c0 .143.122.262.262.262.594.014 1.072.21 1.428.594.34.39.5.879.518 1.534a.265.265 0 00.262.262c.143 0 .262-.122.262-.262-.018-.79-.244-1.453-.659-1.928-.488-.5-1.044-.733-1.751-.733zm-.072 1.5a.255.255 0 00-.244.262c0 .143.122.262.262.262.453.043.622.213.65.66 0 .143.122.262.262.262a.265.265 0 00.262-.262c-.018-.595-.34-1.013-.952-1.184-.06-.012-.158 0-.218 0z" })]
	});
}
function ta({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ Z("svg", {
		...Yi(e, t, n ? "#5865F2" : "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "Discord" }), /* @__PURE__ */ X("path", { d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" })]
	});
}
function na({ size: e = 18, className: t, colored: n }) {
	return n ? /* @__PURE__ */ Z("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: e,
		height: e,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className: t,
		children: [
			/* @__PURE__ */ X("title", { children: "Slack" }),
			/* @__PURE__ */ X("path", {
				fill: "#E01E5A",
				d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
			}),
			/* @__PURE__ */ X("path", {
				fill: "#36C5F0",
				d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
			}),
			/* @__PURE__ */ X("path", {
				fill: "#2EB67D",
				d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
			}),
			/* @__PURE__ */ X("path", {
				fill: "#ECB22E",
				d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
			})
		]
	}) : /* @__PURE__ */ Z("svg", {
		...Yi(e, t, "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "Slack" }), /* @__PURE__ */ X("path", { d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" })]
	});
}
function ra({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ Z("svg", {
		...Yi(e, t, n ? "#06C755" : "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "LINE" }), /* @__PURE__ */ X("path", { d: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" })]
	});
}
function ia({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ Z("svg", {
		...Yi(e, t, n ? "#1877F2" : "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "Facebook" }), /* @__PURE__ */ X("path", { d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" })]
	});
}
function aa({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ Z("svg", {
		...Yi(e, t, n ? "#000000" : "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "X" }), /* @__PURE__ */ X("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })]
	});
}
function oa({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ Z("svg", {
		...Yi(e, t, n ? "#0A66C2" : "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "LinkedIn" }), /* @__PURE__ */ X("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })]
	});
}
function sa({ size: e = 18, className: t, colored: n }) {
	return /* @__PURE__ */ Z("svg", {
		...Yi(e, t, n ? "#FF4500" : "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "Reddit" }), /* @__PURE__ */ X("path", { d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" })]
	});
}
function ca({ size: e = 18, className: t, colored: n }) {
	return n ? /* @__PURE__ */ Z("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: e,
		height: e,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className: t,
		children: [
			/* @__PURE__ */ X("title", { children: "TikTok" }),
			/* @__PURE__ */ X("path", {
				fill: "#25F4EE",
				d: "M9.375 9.05v-1.1a4.91 4.91 0 0 0-.71-.06 4.99 4.99 0 0 0-2.86 9.03 4.987 4.987 0 0 1 3.57-7.87zM15.66 5.34v-1A2.93 2.93 0 0 1 13.42.78l-.07-.78h-.84a2.95 2.95 0 0 0 3.15 5.34zM18.51 6.78a4.96 4.96 0 0 1-.97-2.96h-.65A4.972 4.972 0 0 0 18.51 6.78z"
			}),
			/* @__PURE__ */ X("path", {
				fill: "#FE2C55",
				d: "M14.46 14.86a4.99 4.99 0 0 1-4.99 4.93 4.99 4.99 0 0 1-2.86-.9 4.987 4.987 0 0 0 8.55-3.45v-9c.96.69 2.06 1.18 3.21 1.36v-1.5a4.94 4.94 0 0 1-2.5-1.32V13.4zM8.61 11.91a4.987 4.987 0 0 1 5.41-4.91v-1.5a5.06 5.06 0 0 0-.66-.04c-2.76 0-5.01 2.24-5.01 5.01a4.99 4.99 0 0 0 .26 1.44z"
			}),
			/* @__PURE__ */ X("path", {
				fill: "#000000",
				d: "M16.6 5.82a4.91 4.91 0 0 1-.94-.48V7.81a6.412 6.412 0 0 0 4.18 1.53V7.84a3.84 3.84 0 0 1-3.24-2.02zM7.96 12.93a3.7 3.7 0 0 1 1.41-.27c.24 0 .48.04.71.1V9.06a6.41 6.41 0 0 0-.71-.05v3.43a3.69 3.69 0 0 0-.7-.06 3.72 3.72 0 0 0-3.72 3.72 3.72 3.72 0 0 0 3.01 3.65 3.7 3.7 0 0 1-1.06-2.61 3.72 3.72 0 0 1 1.06-2.61zM12.51 18.51c-.99-.07-1.94-.46-2.69-1.1a3.71 3.71 0 0 0 2.71 1.17c2.06 0 3.72-1.66 3.72-3.72V5.82a4.91 4.91 0 0 0-1.46-.18v9.04a3.72 3.72 0 0 1-2.28 3.83z"
			})
		]
	}) : /* @__PURE__ */ Z("svg", {
		...Yi(e, t, "currentColor"),
		children: [/* @__PURE__ */ X("title", { children: "TikTok" }), /* @__PURE__ */ X("path", { d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" })]
	});
}
var la = {
	whatsapp: Xi,
	telegram: Zi,
	instagram: Qi,
	messenger: $i,
	viber: ea,
	discord: ta,
	slack: na,
	line: ra,
	facebook: ia,
	twitter: aa,
	linkedin: oa,
	reddit: sa,
	tiktok: ca
}, ua = {
	telegram: at,
	whatsapp: sr,
	viber: dr,
	instagram: qn,
	messenger: ar,
	discord: Qn,
	slack: $n,
	chat: or,
	email: ir,
	phone: dr,
	"video-call": Cr,
	help: Yn,
	book: Gn,
	bell: Un,
	star: vr,
	heart: er,
	bookmark: Kn,
	"arrow-right": Vn,
	lock: rr,
	shield: hr,
	user: xr,
	users: Sr
};
function da({ block: e, onOpenTab: t }) {
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
		let t = e.buttons.slice(0, 8);
		return /* @__PURE__ */ X("div", {
			className: H("grid gap-2", t.length === 1 && "grid-cols-1", t.length === 2 && "grid-cols-2", t.length === 3 && "grid-cols-3", t.length >= 4 && "grid-cols-4"),
			children: t.map((e, t) => /* @__PURE__ */ X(fa, {
				btn: e,
				onClick: () => n(e)
			}, `${e.action}-${t}`))
		});
	}
	return /* @__PURE__ */ X("div", {
		className: "flex flex-col gap-2",
		children: e.buttons.map((e, t) => /* @__PURE__ */ X(pa, {
			btn: e,
			onClick: () => n(e)
		}, `${e.action}-${t}`))
	});
}
function fa({ btn: e, onClick: t }) {
	let r = e.icon?.kind === "named" ? e.icon.name : null, i = e.icon?.kind === "named" ? !!e.icon.colored : !1, a = r ? la[r] : null, o = r ? ua[r] ?? or : or, s = a ?? o;
	return /* @__PURE__ */ Z(n.button, {
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
		className: "group flex h-24 flex-col items-center justify-center gap-1.5 rounded-wx-lg bg-wx-bg-elevated px-2 py-3 text-wx-fg transition-colors hover:bg-wx-bg-elevated-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: [/* @__PURE__ */ X("span", {
			className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wx-bg transition-transform group-hover:scale-110",
			children: e.icon?.kind === "media" ? /* @__PURE__ */ X("img", {
				src: e.icon.url,
				alt: "",
				className: "h-5 w-5 object-contain"
			}) : /* @__PURE__ */ X(s, {
				size: 18,
				className: i ? void 0 : "text-wx-fg",
				colored: a ? i : void 0
			})
		}), e.label && /* @__PURE__ */ X("span", {
			className: "block w-full truncate text-center text-[11px] leading-tight font-medium",
			children: e.label
		})]
	});
}
function pa({ btn: e, onClick: t }) {
	return !e.label && e.icon?.kind === "media" ? /* @__PURE__ */ X(n.button, {
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
		children: /* @__PURE__ */ X("img", {
			src: e.icon.url,
			alt: "",
			className: "w-full object-cover"
		})
	}) : /* @__PURE__ */ Z(et, {
		type: "button",
		variant: e.style === "primary" ? "solid" : e.style === "ghost" ? "ghost" : "tonal",
		size: "lg",
		onClick: t,
		className: "justify-start gap-2.5",
		children: [e.icon?.kind === "named" ? (() => {
			let t = e.icon.name, n = !!e.icon.colored, r = la[t];
			return r ? /* @__PURE__ */ X(r, {
				size: 16,
				className: "shrink-0",
				colored: n
			}) : /* @__PURE__ */ X(ua[t] ?? or, {
				size: 16,
				className: "shrink-0"
			});
		})() : e.icon?.kind === "media" ? /* @__PURE__ */ X("img", {
			src: e.icon.url,
			alt: "",
			className: "h-4 w-4 shrink-0 object-contain"
		}) : null, e.label && /* @__PURE__ */ X("span", {
			className: "text-sm font-medium",
			children: e.label
		})]
	});
}
//#endregion
//#region components/widget/icons/wexio-mark.tsx
function ma({ size: e = 24, className: t }) {
	return /* @__PURE__ */ Z("span", {
		style: {
			width: e,
			height: e
		},
		className: H("relative inline-block", t),
		role: "img",
		"aria-label": "Wexio",
		children: [/* @__PURE__ */ X("img", {
			src: he("/logo-dark.png"),
			alt: "",
			width: e,
			height: e,
			className: "block h-full w-full dark:hidden"
		}), /* @__PURE__ */ X("img", {
			src: he("/logo-light.png"),
			alt: "",
			width: e,
			height: e,
			className: "hidden h-full w-full dark:block"
		})]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/recent-message.tsx
function ha({ block: e, onOpenTab: t, isDummy: n, chatId: r, config: i }) {
	let a = V("home"), o = Pi(), { data: s, loading: c } = ce({
		variables: { chatId: r ?? "" },
		skip: n || !r
	});
	if (!n) {
		if (!r || c) return null;
		let n = s?.visitorChatRecentInbound;
		if (!n) return null;
		let l = n.sender?.kind === "ai" || n.sender?.kind === "bot", u = l ? xt : n.sender?.name?.trim() || a("recentMessageFromFallback"), d = l ? i.messenger?.aiAssistantAvatar ?? null : n.sender?.avatar ?? null;
		return /* @__PURE__ */ Z("button", {
			type: "button",
			onClick: () => t("messages"),
			className: "flex w-full flex-col gap-3 rounded-wx-lg bg-wx-bg-elevated px-4 py-3.5 text-left transition-colors hover:bg-wx-bg-elevated-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
			children: [/* @__PURE__ */ X("p", {
				className: "text-sm text-wx-fg-muted",
				children: o(e.title, a("recentMessageTitle"))
			}), /* @__PURE__ */ Z("div", {
				className: "flex items-start gap-3",
				children: [d ? /* @__PURE__ */ X("span", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg",
					children: /* @__PURE__ */ X("img", {
						src: d,
						alt: u,
						className: "h-9 w-9 rounded-full object-cover"
					})
				}) : l ? null : /* @__PURE__ */ X("span", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg",
					children: /* @__PURE__ */ X("span", {
						className: "text-sm font-semibold text-wx-fg-muted",
						children: u.charAt(0).toUpperCase()
					})
				}), /* @__PURE__ */ Z("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ Z("div", {
						className: "flex items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ X("p", {
							className: "truncate text-sm font-semibold text-wx-fg",
							children: u
						}), /* @__PURE__ */ X("span", {
							className: "shrink-0 text-xs text-wx-fg-subtle",
							children: zi(n.createdAt)
						})]
					}), /* @__PURE__ */ X("p", {
						className: "mt-0.5 line-clamp-2 text-sm text-wx-fg-muted",
						children: qr(n.text)
					})]
				})]
			})]
		});
	}
	return /* @__PURE__ */ Z("button", {
		type: "button",
		onClick: () => t("messages"),
		className: "flex w-full flex-col gap-3 rounded-wx-lg bg-wx-bg-elevated px-4 py-3.5 text-left transition-colors hover:bg-wx-bg-elevated-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary",
		children: [/* @__PURE__ */ X("p", {
			className: "text-sm text-wx-fg-muted",
			children: o(e.title, a("recentMessageTitle"))
		}), /* @__PURE__ */ Z("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ X("span", {
				className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg",
				children: /* @__PURE__ */ X(ma, { size: 36 })
			}), /* @__PURE__ */ Z("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ Z("div", {
					className: "flex items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ X("p", {
						className: "truncate text-sm font-semibold text-wx-fg",
						children: a("recentMessageFromFallback")
					}), /* @__PURE__ */ X("span", {
						className: "shrink-0 text-xs text-wx-fg-subtle",
						children: a("recentMessageAgo")
					})]
				}), /* @__PURE__ */ X("p", {
					className: "mt-0.5 line-clamp-2 text-sm text-wx-fg-muted",
					children: a("recentMessageSample")
				})]
			})]
		})]
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/rich-text.tsx
function ga({ block: e }) {
	return /* @__PURE__ */ X("div", {
		className: "px-2 text-sm leading-relaxed text-wx-fg-muted [&_a]:text-wx-primary [&_a]:underline",
		children: Bi(e.markdown)
	});
}
//#endregion
//#region components/widget/home-blocks/blocks/team-status.tsx
function _a({ block: e, config: t }) {
	let n = V("home");
	return /* @__PURE__ */ Z("div", {
		className: "flex items-center gap-3 rounded-wx-lg bg-wx-bg-elevated px-3.5 py-3",
		children: [
			/* @__PURE__ */ X("span", {
				"aria-hidden": "true",
				className: "h-2 w-2 shrink-0 rounded-full bg-wx-success"
			}),
			/* @__PURE__ */ Z("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ X("p", {
					className: "text-sm font-semibold text-wx-fg",
					children: n("teamStatusOnline")
				}), e.showResponseTime && /* @__PURE__ */ X("p", {
					className: "text-xs text-wx-fg-muted",
					children: n("teamStatusReplyTime")
				})]
			}),
			e.showOperatorAvatars && t.operatorAvatars.length > 0 && /* @__PURE__ */ X(ki, {
				avatars: t.operatorAvatars,
				size: "sm",
				ringClass: "ring-wx-bg-elevated"
			})
		]
	});
}
//#endregion
//#region components/widget/home-blocks/index.tsx
function va({ blocks: e, config: t, onOpenTab: n, onOpenNewsArticle: r, onOpenHelpArticle: i, isDummy: a, chatId: o }) {
	return /* @__PURE__ */ X("div", {
		className: "flex flex-col gap-3 px-4 pb-2",
		children: e.map((e, s) => /* @__PURE__ */ X(ba, {
			delay: Math.min(s, 6) * .05,
			children: /* @__PURE__ */ X(ya, {
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
function ya({ block: e, config: t, onOpenTab: n, onOpenNewsArticle: r, onOpenHelpArticle: i, isDummy: a, chatId: o }) {
	switch (e.kind) {
		case "quick-actions": return /* @__PURE__ */ X(da, {
			block: e,
			onOpenTab: n
		});
		case "help-search": return /* @__PURE__ */ X(Gi, {
			block: e,
			onOpenTab: n,
			onOpenArticle: i,
			isDummy: a
		});
		case "pinned-articles": return /* @__PURE__ */ X(Ji, {
			block: e,
			onOpenTab: n,
			onOpenArticle: i,
			isDummy: a
		});
		case "news-preview": return /* @__PURE__ */ X(qi, {
			block: e,
			onOpenTab: n,
			onOpenNewsArticle: r,
			isDummy: a
		});
		case "team-status": return /* @__PURE__ */ X(_a, {
			block: e,
			config: t
		});
		case "rich-text": return /* @__PURE__ */ X(ga, { block: e });
		case "divider": return /* @__PURE__ */ X("hr", { className: "my-1 border-wx-border" });
		case "ask-question": return /* @__PURE__ */ X(Fi, {
			block: e,
			config: t,
			onOpenTab: n
		});
		case "recent-message": return /* @__PURE__ */ X(ha, {
			block: e,
			onOpenTab: n,
			isDummy: a,
			chatId: o,
			config: t
		});
		case "featured-article": return /* @__PURE__ */ X(Hi, {
			block: e,
			onOpenTab: n,
			onOpenNewsArticle: r,
			isDummy: a
		});
		default: return null;
	}
}
function ba({ delay: e, children: t, className: r }) {
	return /* @__PURE__ */ X(n.div, {
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
		className: H(r),
		children: t
	});
}
function xa(e, t) {
	return e.filter((e) => !((e.kind === "help-search" || e.kind === "pinned-articles") && !t.help || e.kind === "news-preview" && !t.news));
}
//#endregion
//#region components/widget/tabs/home-tab.tsx
function Sa({ config: e, organizationLogoUrl: t, onClose: n, onOpenTab: r, isDummy: a, chatId: o, onOpenNewsArticle: s, onOpenHelpArticle: c }) {
	let l = V("header"), u = ot(), d = xa(e.homeLayout ?? f, e.features), p = a || !!e.greeting?.headline?.trim() || !!e.greeting?.subheadline?.trim();
	return /* @__PURE__ */ X(z, {
		className: "flex-1",
		children: /* @__PURE__ */ Z("div", {
			className: "flex flex-col pb-6",
			children: [
				/* @__PURE__ */ Z("div", {
					className: "flex items-center justify-between px-5 pt-5 pb-3",
					children: [t ? /* @__PURE__ */ X("img", {
						src: t,
						alt: e.messenger?.title ?? "",
						className: "h-9 w-auto max-w-[140px] object-contain"
					}) : a ? /* @__PURE__ */ X(ma, { size: 28 }) : /* @__PURE__ */ X("span", {
						className: "h-9",
						"aria-hidden": "true"
					}), /* @__PURE__ */ Z("div", {
						className: "flex items-center gap-1",
						children: [e.operatorAvatars.length > 0 && /* @__PURE__ */ X(ki, {
							avatars: e.operatorAvatars,
							ringClass: "ring-wx-bg-elevated/60",
							className: "mr-2"
						}), /* @__PURE__ */ X(et, {
							type: "button",
							variant: "ghost",
							size: "icon",
							"aria-label": l("close"),
							onClick: n,
							...u.parentHandlers,
							children: /* @__PURE__ */ X(i, {
								ref: u.iconRef,
								size: 18
							})
						})]
					})]
				}),
				/* @__PURE__ */ X(Ca, {
					config: e,
					isDummy: a
				}),
				/* @__PURE__ */ X("div", {
					className: p ? void 0 : "pt-4",
					children: /* @__PURE__ */ X(va, {
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
function Ca({ config: e, isDummy: t }) {
	let n = V("home"), r = Ne(), i = e.greeting?.headline?.trim() ?? "", a = e.greeting?.subheadline?.trim() ?? "";
	if (!t && !(i || a)) return null;
	let o = Mi(r, e.defaultLocale ?? "en"), s = !t && o, c = s ? i : n("greetingHeadline"), l = s ? a : n("greetingSubheadline");
	return !c && !l ? null : /* @__PURE__ */ Z("section", {
		className: "px-5 pt-2 pb-4",
		children: [c && /* @__PURE__ */ X("p", {
			className: "text-3xl leading-tight font-bold text-wx-fg-muted",
			children: c
		}), l && /* @__PURE__ */ X("p", {
			className: "mt-1 text-3xl leading-tight font-bold text-wx-fg",
			children: l
		})]
	});
}
//#endregion
//#region lib/file-to-base64.ts
async function wa(e) {
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
var Ta = new Set([
	"image/png",
	"image/jpeg",
	"image/gif",
	"image/webp",
	"image/heic",
	"image/heif",
	"audio/mpeg",
	"audio/mp4",
	"audio/ogg",
	"audio/webm",
	"audio/wav",
	"video/mp4",
	"video/quicktime",
	"video/webm",
	"video/3gpp",
	"application/pdf"
]), Ea = {
	png: "image/png",
	jpg: "image/jpeg",
	jpeg: "image/jpeg",
	gif: "image/gif",
	webp: "image/webp",
	heic: "image/heic",
	heif: "image/heif",
	mp3: "audio/mpeg",
	m4a: "audio/mp4",
	ogg: "audio/ogg",
	oga: "audio/ogg",
	wav: "audio/wav",
	weba: "audio/webm",
	mp4: "video/mp4",
	mov: "video/quicktime",
	webm: "video/webm",
	"3gp": "video/3gpp",
	pdf: "application/pdf"
};
function Da(e) {
	return e.type ? e.type : Ea[e.name.split(".").pop()?.toLowerCase() ?? ""] ?? "";
}
//#endregion
//#region components/widget/auth/google-sign-in-button.tsx
var Oa = "https://accounts.google.com/gsi/client";
function ka({ clientId: e, onCredential: t }) {
	let n = V("messages"), r = J(null), i = J(t);
	return q(() => {
		i.current = t;
	}, [t]), q(() => {
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
		let a = document.querySelector(`script[src="${Oa}"]`);
		if (a) return a.addEventListener("load", n, { once: !0 }), () => {
			t = !0, a.removeEventListener("load", n);
		};
		let o = document.createElement("script");
		return o.src = Oa, o.async = !0, o.defer = !0, o.onload = n, document.head.appendChild(o), () => {
			t = !0, o.onload = null;
		};
	}, [e]), /* @__PURE__ */ Z(mt, { children: [/* @__PURE__ */ Z("button", {
		type: "button",
		onClick: () => {
			let e = r.current;
			e && e.querySelector("div[role=\"button\"]")?.click();
		},
		className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2",
		children: [/* @__PURE__ */ X(Aa, {}), /* @__PURE__ */ X("span", { children: n("googleSignIn") })]
	}), /* @__PURE__ */ X("div", {
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
function Aa() {
	return /* @__PURE__ */ Z("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 18 18",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ X("path", {
				d: "M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.614z",
				fill: "#4285F4"
			}),
			/* @__PURE__ */ X("path", {
				d: "M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z",
				fill: "#34A853"
			}),
			/* @__PURE__ */ X("path", {
				d: "M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z",
				fill: "#FBBC05"
			}),
			/* @__PURE__ */ X("path", {
				d: "M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z",
				fill: "#EA4335"
			})
		]
	});
}
//#endregion
//#region node_modules/@simplewebauthn/browser/dist/bundle/index.js
function ja(e) {
	return new TextEncoder().encode(e);
}
function Ma(e) {
	let t = new Uint8Array(e), n = "";
	for (let e of t) n += String.fromCharCode(e);
	return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Na(e) {
	let t = e.replace(/-/g, "+").replace(/_/g, "/"), n = (4 - t.length % 4) % 4, r = t.padEnd(t.length + n, "="), i = atob(r), a = new ArrayBuffer(i.length), o = new Uint8Array(a);
	for (let e = 0; e < i.length; e++) o[e] = i.charCodeAt(e);
	return a;
}
function Pa() {
	return window?.PublicKeyCredential !== void 0 && typeof window.PublicKeyCredential == "function";
}
function Fa(e) {
	let { id: t } = e;
	return {
		...e,
		id: Na(t),
		transports: e.transports
	};
}
function Ia(e) {
	return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
var La = class extends Error {
	constructor({ message: e, code: t, cause: n, name: r }) {
		super(e, { cause: n }), this.name = r ?? n.name, this.code = t;
	}
};
function Ra({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new La({
			message: "Registration ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "ConstraintError") {
		if (n.authenticatorSelection?.requireResidentKey === !0) return new La({
			message: "Discoverable credentials were required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
			cause: e
		});
		if (n.authenticatorSelection?.userVerification === "required") return new La({
			message: "User verification was required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
			cause: e
		});
	} else if (e.name === "InvalidStateError") return new La({
		message: "The authenticator was previously registered",
		code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
		cause: e
	});
	else if (e.name === "NotAllowedError") return new La({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "NotSupportedError") return n.pubKeyCredParams.filter((e) => e.type === "public-key").length === 0 ? new La({
		message: "No entry in pubKeyCredParams was of type \"public-key\"",
		code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
		cause: e
	}) : new La({
		message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
		code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!Ia(t)) return new La({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rp.id !== t) return new La({
			message: `The RP ID "${n.rp.id}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "TypeError") {
		if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64) return new La({
			message: "User ID was not between 1 and 64 characters",
			code: "ERROR_INVALID_USER_ID_LENGTH",
			cause: e
		});
	} else if (e.name === "UnknownError") return new La({
		message: "The authenticator was unable to process the specified options, or could not create a new credential",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return e;
}
var za = new class {
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
}(), Ba = ["cross-platform", "platform"];
function Va(e) {
	if (e && !(Ba.indexOf(e) < 0)) return e;
}
async function Ha(e) {
	if (!Pa()) throw Error("WebAuthn is not supported in this browser");
	let t = { publicKey: {
		...e,
		challenge: Na(e.challenge),
		user: {
			...e.user,
			id: ja(e.user.id)
		},
		excludeCredentials: e.excludeCredentials?.map(Fa)
	} };
	t.signal = za.createNewAbortSignal();
	let n;
	try {
		n = await navigator.credentials.create(t);
	} catch (e) {
		throw Ra({
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
		Ua("getPublicKeyAlgorithm()", e);
	}
	let l;
	if (typeof a.getPublicKey == "function") try {
		let e = a.getPublicKey();
		e !== null && (l = Ma(e));
	} catch (e) {
		Ua("getPublicKey()", e);
	}
	let u;
	if (typeof a.getAuthenticatorData == "function") try {
		u = Ma(a.getAuthenticatorData());
	} catch (e) {
		Ua("getAuthenticatorData()", e);
	}
	return {
		id: r,
		rawId: Ma(i),
		response: {
			attestationObject: Ma(a.attestationObject),
			clientDataJSON: Ma(a.clientDataJSON),
			transports: s,
			publicKeyAlgorithm: c,
			publicKey: l,
			authenticatorData: u
		},
		type: o,
		clientExtensionResults: n.getClientExtensionResults(),
		authenticatorAttachment: Va(n.authenticatorAttachment)
	};
}
function Ua(e, t) {
	console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${e}. You should report this error to them.\n`, t);
}
function Wa(e) {
	return new TextDecoder("utf-8").decode(e);
}
function Ga() {
	let e = window.PublicKeyCredential;
	return e.isConditionalMediationAvailable === void 0 ? new Promise((e) => e(!1)) : e.isConditionalMediationAvailable();
}
function Ka({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new La({
			message: "Authentication ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "NotAllowedError") return new La({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!Ia(t)) return new La({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rpId !== t) return new La({
			message: `The RP ID "${n.rpId}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "UnknownError") return new La({
		message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return e;
}
async function qa(e, t = !1) {
	if (!Pa()) throw Error("WebAuthn is not supported in this browser");
	let n;
	e.allowCredentials?.length !== 0 && (n = e.allowCredentials?.map(Fa));
	let r = {
		...e,
		challenge: Na(e.challenge),
		allowCredentials: n
	}, i = {};
	if (t) {
		if (!await Ga()) throw Error("Browser does not support WebAuthn autofill");
		if (document.querySelectorAll("input[autocomplete$='webauthn']").length < 1) throw Error("No <input> with \"webauthn\" as the only or last value in its `autocomplete` attribute was detected");
		i.mediation = "conditional", r.allowCredentials = [];
	}
	i.publicKey = r, i.signal = za.createNewAbortSignal();
	let a;
	try {
		a = await navigator.credentials.get(i);
	} catch (e) {
		throw Ka({
			error: e,
			options: i
		});
	}
	if (!a) throw Error("Authentication was not completed");
	let { id: o, rawId: s, response: c, type: l } = a, u;
	return c.userHandle && (u = Wa(c.userHandle)), {
		id: o,
		rawId: Ma(s),
		response: {
			authenticatorData: Ma(c.authenticatorData),
			clientDataJSON: Ma(c.clientDataJSON),
			signature: Ma(c.signature),
			userHandle: u
		},
		type: l,
		clientExtensionResults: a.getClientExtensionResults(),
		authenticatorAttachment: Va(a.authenticatorAttachment)
	};
}
//#endregion
//#region lib/use-passkey-auth.ts
var Ja = _e`
  mutation VisitorPasskeyRegistrationOptions($input: VisitorPasskeyOptionsInput!) {
    visitorPasskeyRegistrationOptions(input: $input) {
      sessionId
      optionsJson
    }
  }
`, Ya = _e`
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
`, Xa = _e`
  mutation VisitorPasskeyAuthenticationOptions($input: VisitorPasskeyOptionsInput!) {
    visitorPasskeyAuthenticationOptions(input: $input) {
      sessionId
      optionsJson
    }
  }
`, Za = _e`
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
function Qa(e) {
	let [t, n] = Y("idle"), [r, i] = Y(null), [a] = R(Ja), [o] = R(Ya), [s] = R(Xa), [c] = R(Za), l = K(async (t) => {
		n("busy"), i(null);
		try {
			let r = {
				visitorId: e.visitorId,
				origin: e.origin
			}, i = t === "register" ? (await a({ variables: { input: r } })).data?.visitorPasskeyRegistrationOptions : (await s({ variables: { input: r } })).data?.visitorPasskeyAuthenticationOptions;
			if (!i) throw Error("passkey_options_failed");
			let l = JSON.parse(i.optionsJson), u = t === "register" ? await Ha(l) : await qa(l), d = {
				visitorId: e.visitorId,
				sessionId: i.sessionId,
				responseJson: JSON.stringify(u)
			}, f = t === "register" ? (await o({ variables: { input: d } })).data?.verifyVisitorPasskeyRegistration : (await c({ variables: { input: d } })).data?.verifyVisitorPasskeyAuthentication;
			if (!f) throw Error("passkey_verify_failed");
			return p(f.token), n("idle"), f;
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
		authenticate: K(() => l("authenticate"), [l]),
		register: K(() => l("register"), [l]),
		status: t,
		error: r,
		supported: typeof window < "u" && Pa()
	};
}
//#endregion
//#region components/widget/auth/passkey-sign-in-button.tsx
function $a({ onSession: e }) {
	let t = V("messages"), { authenticate: n, register: r, status: i, supported: a } = Qa({
		visitorId: pt(() => cn(), []),
		origin: typeof window < "u" ? window.location.origin : ""
	}), [o, s] = Y(null);
	if (!a) return null;
	let c = async (t, n) => {
		s(null);
		let r = await n();
		r ? e?.(r) : s(t);
	}, l = i === "busy";
	return /* @__PURE__ */ Z("div", {
		className: "flex w-full flex-col items-center gap-1.5",
		children: [
			/* @__PURE__ */ Z("button", {
				type: "button",
				disabled: l,
				onClick: () => c("signIn", n),
				className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2 disabled:opacity-60",
				children: [/* @__PURE__ */ X(eo, {}), t("passkeySignIn")]
			}),
			/* @__PURE__ */ X("button", {
				type: "button",
				disabled: l,
				onClick: () => c("register", r),
				className: o === "signIn" ? "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-primary bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-primary transition-colors hover:bg-wx-bg-elevated-2 disabled:opacity-60" : "text-xs text-wx-fg-muted underline-offset-2 hover:underline disabled:opacity-60",
				children: t("passkeyRegister")
			}),
			o === "signIn" && /* @__PURE__ */ X("p", {
				className: "text-center text-xs text-wx-fg-subtle",
				children: t("passkeyNoCredential")
			}),
			o === "register" && /* @__PURE__ */ X("p", {
				className: "text-center text-xs text-wx-danger",
				children: t("passkeyError")
			})
		]
	});
}
function eo() {
	return /* @__PURE__ */ Z("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ X("circle", {
			cx: "8",
			cy: "9",
			r: "4"
		}), /* @__PURE__ */ X("path", { d: "M10.5 12.5 21 23l-1.5-3 2-1-2-1.5L21 14l-4-1" })]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/composer/attachment-preview.tsx
var to = (e) => e.startsWith("image/"), no = (e) => e.startsWith("video/"), ro = (e) => e.startsWith("audio/"), io = (e) => e === "application/pdf";
function ao({ attachments: e, onRemove: t, onOpenLightbox: n }) {
	let r = V("messages"), i = J(null), [a, o] = Y(null);
	q(() => {
		a && (e.some((e) => e.tempId === a) || (i.current?.pause(), i.current = null, o(null)));
	}, [e, a]), q(() => () => {
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
	}, c = e.filter((e) => !!e.url && (to(e.mimetype) || no(e.mimetype) || io(e.mimetype))), l = c.map((e) => ({
		url: e.url,
		mimetype: e.mimetype,
		alt: e.filename
	})), u = (e) => {
		let t = c.findIndex((t) => t.tempId === e.tempId);
		t < 0 || n(l, t);
	};
	return /* @__PURE__ */ X("div", {
		className: "flex flex-wrap gap-2",
		children: e.map((e) => {
			let n = e.mediaId === null, i = r("removeAttachment");
			if (to(e.mimetype) && e.url) return /* @__PURE__ */ X(oo, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ X("button", {
					type: "button",
					onClick: () => u(e),
					className: "block h-16 w-16 overflow-hidden rounded-wx-sm bg-wx-bg-elevated",
					"aria-label": r("openPreview"),
					children: /* @__PURE__ */ X("img", {
						src: e.url,
						alt: e.filename,
						className: "h-full w-full object-cover"
					})
				})
			}, e.tempId);
			if (no(e.mimetype) && e.url) return /* @__PURE__ */ X(oo, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ Z("button", {
					type: "button",
					onClick: () => u(e),
					className: "relative block h-16 w-16 overflow-hidden rounded-wx-sm bg-wx-bg-elevated",
					"aria-label": r("openPreview"),
					children: [/* @__PURE__ */ X("video", {
						src: e.url,
						className: "h-full w-full object-cover",
						muted: !0,
						playsInline: !0,
						preload: "metadata"
					}), /* @__PURE__ */ X("span", {
						className: "absolute inset-0 flex items-center justify-center bg-black/30 text-white",
						children: /* @__PURE__ */ X(it, {
							size: 16,
							fill: "currentColor"
						})
					})]
				})
			}, e.tempId);
			if (ro(e.mimetype) && e.url) {
				let o = a === e.tempId, c = o ? nt : it;
				return /* @__PURE__ */ X(oo, {
					uploading: n,
					onRemove: () => t(e.tempId),
					removeLabel: i,
					title: e.filename,
					children: /* @__PURE__ */ X("button", {
						type: "button",
						onClick: () => s(e),
						"aria-label": r(o ? "pause" : "play"),
						className: H("flex h-16 w-16 items-center justify-center rounded-wx-sm transition-colors", o ? "bg-wx-primary text-wx-primary-fg" : "bg-wx-bg-elevated text-wx-fg-muted hover:text-wx-fg"),
						children: /* @__PURE__ */ X(c, {
							size: 22,
							fill: "currentColor",
							strokeWidth: 0
						})
					})
				}, e.tempId);
			}
			return io(e.mimetype) && e.url ? /* @__PURE__ */ X(oo, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ X("button", {
					type: "button",
					onClick: () => u(e),
					"aria-label": r("openPreview"),
					className: H("flex h-16 w-16 items-center justify-center rounded-wx-sm", "bg-wx-bg-elevated text-wx-fg-muted transition-colors hover:text-wx-fg"),
					children: /* @__PURE__ */ X(Zn, {
						size: 22,
						"aria-hidden": "true"
					})
				})
			}, e.tempId) : /* @__PURE__ */ X(oo, {
				uploading: n,
				onRemove: () => t(e.tempId),
				removeLabel: i,
				title: e.filename,
				children: /* @__PURE__ */ X("div", {
					className: "flex h-16 w-16 items-center justify-center rounded-wx-sm bg-wx-bg-elevated text-wx-fg-muted",
					children: /* @__PURE__ */ X(Zn, {
						size: 22,
						"aria-hidden": "true"
					})
				})
			}, e.tempId);
		})
	});
}
function oo({ children: e, uploading: t, onRemove: n, removeLabel: r, title: i }) {
	return /* @__PURE__ */ Z("div", {
		className: "relative",
		title: i,
		children: [
			e,
			t && /* @__PURE__ */ X("span", {
				"aria-hidden": "true",
				className: H("pointer-events-none absolute inset-0 flex items-center justify-center", "rounded-wx-sm bg-black/30"),
				children: /* @__PURE__ */ X("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" })
			}),
			/* @__PURE__ */ X("button", {
				type: "button",
				onClick: n,
				"aria-label": r,
				className: H("absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center", "rounded-full bg-wx-bg text-wx-fg-muted shadow ring-1 ring-wx-border", "transition-colors hover:text-wx-fg"),
				children: /* @__PURE__ */ X(ke, { size: 11 })
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/composer/emoji-picker.tsx
var so = ut(() => import("./widget-react-DXP6EOCM.js")), co = "native", lo = {
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
function uo({ open: e, onClose: t, onSelect: r, anchorRef: i }) {
	let a = V("messages"), o = J(null);
	return q(() => {
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
	]), /* @__PURE__ */ X(Se, { children: e && /* @__PURE__ */ X(n.div, {
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
		className: H("absolute bottom-full left-3 z-20 mb-2 origin-bottom-left", "overflow-hidden rounded-wx-lg shadow-lg", "[&_.epr-btn-clear-search:hover]:!bg-wx-bg-elevated-2", "[&_.epr-btn-clear-search:focus]:!bg-wx-bg-elevated-2"),
		role: "dialog",
		"aria-label": a("emojiPicker"),
		children: /* @__PURE__ */ X(ct, {
			fallback: /* @__PURE__ */ X("div", {
				className: "bg-wx-bg flex items-center justify-center",
				style: {
					width: 320,
					height: 360
				},
				children: /* @__PURE__ */ X("div", { className: "border-wx-border border-t-wx-primary h-5 w-5 animate-spin rounded-full border-2" })
			}),
			children: /* @__PURE__ */ X(so, {
				onEmojiClick: (e) => r(e.emoji),
				width: 320,
				height: 360,
				emojiStyle: co,
				previewConfig: { showPreview: !1 },
				skinTonesDisabled: !0,
				lazyLoadEmojis: !0,
				searchPlaceHolder: a("emojiSearch"),
				style: lo
			})
		})
	}) });
}
//#endregion
//#region components/widget/tabs/messages-tab/composer/morph-send-button.tsx
function fo({ kind: e, disabled: r, onSend: i, onMic: a, ariaLabels: o }) {
	let s = e === "send" ? i : a, c = o[e], l = ot();
	return /* @__PURE__ */ X(n.button, {
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
		className: H("flex h-8 w-8 items-center justify-center rounded-full transition-colors", "bg-wx-primary text-wx-primary-fg hover:bg-wx-primary-hover", "disabled:opacity-50"),
		children: /* @__PURE__ */ Z(Se, {
			mode: "wait",
			initial: !1,
			children: [
				e === "send" && r && /* @__PURE__ */ X(n.span, {
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
					children: /* @__PURE__ */ X(rt, {
						size: 14,
						className: "animate-spin"
					})
				}, "sending"),
				e === "send" && !r && /* @__PURE__ */ X(n.span, {
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
					children: /* @__PURE__ */ X(at, { size: 14 })
				}, "send"),
				e === "mic" && /* @__PURE__ */ X(n.span, {
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
					children: /* @__PURE__ */ X(t, {
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
function po(e, t) {
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
function mo({ label: e }) {
	return /* @__PURE__ */ X("div", {
		className: "sticky top-2 z-10 flex justify-center py-1",
		children: /* @__PURE__ */ X("span", {
			className: "rounded-full bg-wx-bg-elevated px-3 py-1 text-[11px] font-medium text-wx-fg-muted shadow-sm",
			children: e
		})
	});
}
//#endregion
//#region lib/internal-link.ts
function ho(e, t) {
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
//#region lib/message-html.ts
var go = "ul|ol|li|pre|p|blockquote|h[1-6]";
function _o(e) {
	return /<[a-z][a-z0-9]*(\s|>|\/)/i.test(e);
}
var vo = [
	/\*\*[^*\n]+\*\*/,
	/__[^_\n]+__/,
	/\[[^\]\n]+\]\([^)\n]+\)/,
	/`[^`\n]+`/,
	/```/,
	/^\s{0,3}#{1,6}\s+/m,
	/^\s*[-*+]\s+\S/m,
	/^\s*\d+\.\s+\S/m,
	/^\s*>\s+\S/m
];
function yo(e) {
	return vo.some((t) => t.test(e));
}
function bo(e) {
	return e.replace(RegExp(`\\n+(?=</?(?:${go})[\\s/>])`, "gi"), "").replace(RegExp(`(</?(?:${go})[^>]*>)\\n+`, "gi"), "$1");
}
//#endregion
//#region components/widget/tabs/messages-tab/message/sources/source-utils.ts
function xo(e) {
	return typeof e == "string" && /^https?:\/\//i.test(e.trim());
}
function So(e) {
	if (!xo(e)) return null;
	try {
		return new URL(e.trim()).hostname.replace(/^www\./i, "") || null;
	} catch {
		return null;
	}
}
function Co(e) {
	if (!e) return null;
	let t = e.split(".").filter(Boolean);
	if (t.length <= 2) return t.join(".") || null;
	let n = t[t.length - 2].length <= 3 ? 3 : 2;
	return t.slice(-n).join(".");
}
function wo(e, t = 64) {
	let n = Co(So(e));
	return n ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(n)}&sz=${t}` : null;
}
function To(e) {
	return !!(e.seoTitle?.trim() || e.link?.trim());
}
function Eo(e) {
	return e.seoTitle?.trim() || (So(e.link) ?? e.link?.trim() ?? "");
}
//#endregion
//#region components/widget/tabs/messages-tab/message-mapping.ts
function Do(e) {
	return e.type === "url" || e.type === "phone";
}
function Oo(e, t) {
	if (!e) return [];
	let n = e.visitorChatHistory;
	if (!n || typeof n != "object") return [];
	let r = n.items;
	return Array.isArray(r) ? r.filter((e) => typeof e == "object" && !!e).map((e, n) => {
		let r = e.sender ?? {}, i = typeof e.deliveryStatus == "string" ? e.deliveryStatus : void 0, a = typeof r.avatar == "string" ? r.avatar : void 0, o = e.buttons, s = Array.isArray(o) ? o.filter((e) => typeof e == "object" && !!e).map((e) => {
			let t = typeof e.label == "string" ? e.label : typeof e.text == "string" ? e.text : "", n = typeof e.value == "string" ? e.value : typeof e.payload == "string" ? e.payload : t, r = typeof e.type == "string" ? e.type.toLowerCase() : void 0, i = typeof e.url == "string" ? e.url : void 0, a = typeof e.phoneNumber == "string" ? e.phoneNumber : void 0;
			return {
				text: t,
				payload: n,
				...r ? { type: r } : {},
				...i ? { url: i } : {},
				...a ? { phoneNumber: a } : {}
			};
		}).filter((e) => !!e.text) : void 0, c = r.kind ?? "operator", l = (() => {
			if (typeof e.system != "object" || e.system === null) return;
			let t = e.system;
			if (t.type !== "OPERATOR_CONNECTED" && t.type !== "CHAT_RESOLVED") return;
			let n = t.initiator === "VISITOR" || t.initiator === "OPERATOR" || t.initiator === "SYSTEM" ? t.initiator : void 0;
			return {
				type: t.type,
				...typeof t.operatorName == "string" ? { operatorName: t.operatorName } : {},
				...typeof t.operatorAvatar == "string" ? { operatorAvatar: t.operatorAvatar } : {},
				...n ? { initiator: n } : {}
			};
		})(), u = c === "ai" || c === "bot" ? xt : r.name ?? "", d = ko(e.media), f = Ao(e.sources), p = typeof e.createdAt == "string" ? e.createdAt : void 0;
		return {
			id: String(e.id ?? `m-${n}`),
			direction: e.direction === "INBOUND" ? "INBOUND" : "OUTBOUND",
			text: typeof e.text == "string" ? e.text : "",
			ageLabel: Mo(p, t),
			...p ? { createdAt: p } : {},
			sender: {
				kind: c,
				name: u,
				...a ? { avatar: a } : {}
			},
			...d.length > 0 ? { media: d } : {},
			...f.length > 0 ? { sources: f } : {},
			...s && s.length > 0 ? { buttons: s } : {},
			...i ? { deliveryStatus: i } : {},
			...l ? { system: l } : {}
		};
	}).reverse() : [];
}
function ko(e) {
	return e ? (Array.isArray(e) ? e : typeof e == "object" && e ? [typeof e.mediaId == "object" && e.mediaId !== null ? e.mediaId : e] : []).filter((e) => typeof e == "object" && !!e).map((e) => ({
		url: typeof e.url == "string" ? e.url : "",
		mimetype: typeof e.mimeType == "string" ? e.mimeType : typeof e.mimetype == "string" ? e.mimetype : "",
		alt: typeof e.filename == "string" ? e.filename : typeof e.alt == "string" ? e.alt : ""
	})).filter((e) => !!e.url && !!e.mimetype) : [];
}
function Ao(e) {
	if (!Array.isArray(e)) return [];
	let t = (e) => typeof e == "string" ? e : null;
	return e.map((e) => {
		if (!e || typeof e != "object") return null;
		let n = e;
		return {
			link: t(n.link),
			seoTitle: t(n.seoTitle),
			seoDescription: t(n.seoDescription)
		};
	}).filter((e) => !!e && To(e));
}
function jo(e, t) {
	let n = atob(e), r = new Uint8Array(n.length);
	for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
	return new Blob([r], { type: t });
}
function Mo(e, t) {
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
//#region components/widget/tabs/messages-tab/message/bot-avatar.tsx
function No({ size: e, senderKind: t, senderName: n, senderAvatarUrl: r, aiAssistantAvatarUrl: i, organizationLogoUrl: a, organizationName: o, className: s }) {
	let c = V("messages"), l = {
		width: e,
		height: e
	};
	if (t === "ai" || t === "bot") return i ? /* @__PURE__ */ X("span", {
		style: l,
		className: H("relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg-elevated shadow-sm", s),
		role: "img",
		"aria-label": c("aiAssistant"),
		children: /* @__PURE__ */ X("img", {
			src: i,
			alt: "",
			className: "h-full w-full object-cover",
			loading: "eager",
			decoding: "async"
		})
	}) : /* @__PURE__ */ X("span", {
		style: l,
		className: H("shrink-0", s),
		"aria-hidden": "true"
	});
	if (r) return /* @__PURE__ */ X("span", {
		style: l,
		className: H("shrink-0 overflow-hidden rounded-full", s),
		children: /* @__PURE__ */ X("img", {
			src: r,
			alt: "",
			className: "h-full w-full object-cover"
		})
	});
	let u = n ? Po(n) : "";
	if (!u && a) return /* @__PURE__ */ X("span", {
		style: l,
		className: H("shrink-0 overflow-hidden rounded-full", s),
		children: /* @__PURE__ */ X("img", {
			src: a,
			alt: o ?? "",
			className: "h-full w-full object-cover"
		})
	});
	let d = u || (o ?? "").trim().charAt(0).toUpperCase();
	return /* @__PURE__ */ X("span", {
		style: l,
		className: H("flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-wx-bg-elevated text-[0.7em] font-semibold text-wx-fg-muted", s),
		children: d || ""
	});
}
function Po(e) {
	let t = e.trim().split(/\s+/).map((e) => e.replace(/[^\p{L}\p{N}]/gu, "")).filter((e) => e.length > 0);
	return t.length === 0 ? "" : t.length === 1 ? t[0].charAt(0).toUpperCase() : t[0].charAt(0).toUpperCase() + t[t.length - 1].charAt(0).toUpperCase();
}
//#endregion
//#region components/widget/tabs/messages-tab/message/sources/message-sources.tsx
var Fo = 4;
function Io(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.link?.trim() || void 0, i = xo(e), a = i ? Co(So(e)) ?? e ?? "external" : "internal";
		if (!t.has(a) && (t.add(a), n.push({
			key: a,
			favicon: wo(e),
			external: i
		}), n.length >= Fo)) break;
	}
	return n;
}
function Lo({ sources: e, onOpen: t }) {
	let n = V("messages"), [r, i] = Y(!1), a = e.filter(To);
	if (a.length === 0) return null;
	let o = Io(a);
	return /* @__PURE__ */ Z("div", {
		className: "mt-1.5 flex w-full flex-col items-start gap-1",
		children: [/* @__PURE__ */ Z("button", {
			type: "button",
			onClick: () => i((e) => !e),
			"aria-expanded": r,
			className: H("flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-wx-border bg-wx-bg-elevated py-1 pr-2.5 pl-1.5", "font-medium text-[11px] text-wx-fg-muted transition-colors hover:bg-wx-bg-elevated-2 hover:text-wx-fg", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary"),
			children: [
				/* @__PURE__ */ X("span", {
					className: "flex items-center -space-x-1.5",
					children: o.map((e) => /* @__PURE__ */ X("span", {
						className: "inline-flex h-4 w-4 items-center justify-center overflow-hidden rounded-full bg-wx-bg ring-2 ring-wx-bg-elevated",
						children: /* @__PURE__ */ X(zo, {
							favicon: e.favicon,
							external: e.external
						})
					}, e.key))
				}),
				/* @__PURE__ */ Z("span", { children: [
					n("sources"),
					" · ",
					a.length
				] }),
				/* @__PURE__ */ X(h, {
					className: H("h-3 w-3 transition-transform", r && "rotate-180"),
					"aria-hidden": "true"
				})
			]
		}), r && /* @__PURE__ */ X("div", {
			className: "flex w-full flex-col",
			children: a.map((e, n) => /* @__PURE__ */ X(Ro, {
				source: e,
				onOpen: t
			}, n))
		})]
	});
}
function Ro({ source: e, onOpen: t }) {
	let n = e.link?.trim() || void 0, r = xo(n), i = wo(n), a = e.seoTitle?.trim(), o = e.seoDescription?.trim(), s = r ? n : a ?? n ?? Eo(e), c = !!(a || o), l = /* @__PURE__ */ Z(mt, { children: [
		/* @__PURE__ */ X(zo, {
			favicon: i,
			external: r
		}),
		/* @__PURE__ */ X("span", {
			className: "min-w-0 flex-1 truncate text-[12px] text-wx-fg",
			children: s
		}),
		r && /* @__PURE__ */ X(Hn, {
			className: "h-3.5 w-3.5 shrink-0 text-wx-fg-subtle",
			"aria-hidden": "true"
		})
	] }), u = "flex items-center gap-2 rounded-md px-2 py-1.5 text-left";
	return /* @__PURE__ */ Z("div", {
		className: "group relative",
		children: [n ? /* @__PURE__ */ X("button", {
			type: "button",
			onClick: () => t(n),
			className: H(u, "w-full transition-colors hover:bg-wx-bg-elevated", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary"),
			children: l
		}) : /* @__PURE__ */ X("div", {
			className: u,
			children: l
		}), c && /* @__PURE__ */ Z("div", {
			className: "pointer-events-none absolute bottom-full left-2 z-10 mb-1 hidden w-max max-w-[240px] rounded-lg bg-wx-fg px-3 py-2 text-wx-bg shadow-lg group-hover:block",
			children: [a && /* @__PURE__ */ X("p", {
				className: "font-semibold text-[12px] leading-snug",
				children: a
			}), o && /* @__PURE__ */ X("p", {
				className: "mt-0.5 text-[11px] text-wx-bg/70 leading-snug",
				children: o
			})]
		})]
	});
}
function zo({ favicon: e, external: t }) {
	let [n, r] = Y(!1);
	return t && e && !n ? /* @__PURE__ */ X("img", {
		src: e,
		alt: "",
		width: 14,
		height: 14,
		referrerPolicy: "no-referrer",
		className: "h-4 w-4 shrink-0 rounded-full bg-white object-contain p-px ring-1 ring-black/10",
		onError: () => r(!0)
	}) : /* @__PURE__ */ X(t ? k : Wn, {
		className: "h-4 w-4 shrink-0 text-wx-fg-subtle",
		"aria-hidden": "true"
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message/message-bubble.tsx
var Bo = ut(() => import("./widget-react-CtvdaJvy.js").then((e) => ({ default: e.AudioBubblePlayer })));
function Vo({ message: e, organizationLogoUrl: t, organizationName: r, aiAssistantAvatarUrl: i, buttonsActive: a, onButtonClick: o, onOpenLightbox: s, onInternalLink: c }) {
	let l = V("messages"), u = e.direction === "OUTBOUND", d = (e.buttons ?? []).filter((e) => Do(e) || a), { trackLinkClick: f } = oe(), p = K((e) => {
		let t = ho(e);
		if (t) {
			c?.(t);
			return;
		}
		f({
			url: e,
			targetType: "EXTERNAL"
		}), window.open(e, "_blank", "noopener,noreferrer");
	}, [c, f]), [m, h] = Y(!1), g = K((e) => {
		e.target.closest("a, button, input, textarea, video") || h((e) => !e);
	}, []), _ = e.sender.kind === "ai" || e.sender.kind === "bot" ? xt : e.sender.name?.trim() || "", v = _ ? null : e.sender.kind === "operator" ? l("operator") : null;
	return /* @__PURE__ */ Z(n.div, {
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
		className: H("flex flex-col gap-1.5", u ? "items-start" : "items-end"),
		children: [
			/* @__PURE__ */ Z("div", {
				className: H("flex max-w-[85%] items-start gap-2", u ? "flex-row" : "flex-row-reverse"),
				children: [u && /* @__PURE__ */ X(No, {
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
					return /* @__PURE__ */ Z("div", {
						onClick: g,
						className: H("max-w-full overflow-hidden rounded-wx-lg", (a || o) && (u ? "bg-wx-bg-elevated text-wx-fg" : "bg-wx-primary text-wx-primary-fg")),
						children: [r.length > 0 && /* @__PURE__ */ X(Uo, {
							items: r,
							onOpenLightbox: s
						}), (a || o) && /* @__PURE__ */ Z("div", {
							className: H("flex flex-col gap-2 px-4 py-2.5 text-sm", r.length > 0 && "pt-2"),
							children: [a && /* @__PURE__ */ X(Ho, {
								text: e.text,
								isOutbound: u,
								onInternalLink: c
							}), i.map((e, t) => /* @__PURE__ */ X(Wo, {
								media: e,
								onDark: !u
							}, t))]
						})]
					});
				})()]
			}),
			/* @__PURE__ */ X(Se, {
				initial: !1,
				children: m && (_ || e.ageLabel) && /* @__PURE__ */ Z(n.p, {
					initial: {
						opacity: 0,
						height: 0
					},
					animate: {
						opacity: 1,
						height: "auto"
					},
					exit: {
						opacity: 0,
						height: 0
					},
					transition: {
						duration: .18,
						ease: "easeOut"
					},
					className: H("flex items-center gap-1.5 overflow-hidden text-[11px] text-wx-fg-subtle", u ? "ml-9" : "mr-1"),
					children: [
						u && _ && /* @__PURE__ */ X("span", {
							className: "font-medium text-wx-fg-muted",
							children: _
						}),
						u && v && /* @__PURE__ */ Z(mt, { children: [/* @__PURE__ */ X("span", {
							"aria-hidden": "true",
							children: "·"
						}), /* @__PURE__ */ X("span", { children: v })] }),
						e.ageLabel && /* @__PURE__ */ Z(mt, { children: [u && _ || u && v ? /* @__PURE__ */ X("span", {
							"aria-hidden": "true",
							children: "·"
						}) : null, /* @__PURE__ */ X("span", { children: e.ageLabel })] })
					]
				})
			}),
			e.sources && e.sources.length > 0 && /* @__PURE__ */ X("div", {
				className: "ml-9 max-w-[calc(85%_-_2.25rem)]",
				children: /* @__PURE__ */ X(Lo, {
					sources: e.sources,
					onOpen: p
				})
			}),
			d.length > 0 && /* @__PURE__ */ X(n.div, {
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
				className: H("flex flex-wrap gap-1", u ? "ml-9 max-w-[85%]" : "mr-1 justify-end"),
				children: d.map((e) => /* @__PURE__ */ Z(n.button, {
					type: "button",
					onClick: () => o?.(e),
					whileHover: { y: -1 },
					whileTap: { scale: .96 },
					transition: {
						type: "spring",
						stiffness: 480,
						damping: 26
					},
					className: H("inline-flex items-center gap-1", "rounded-full bg-wx-bg-elevated px-2.5 py-1 text-xs font-medium text-wx-primary", "transition-colors hover:bg-wx-primary hover:text-wx-primary-fg"),
					children: [
						e.type === "url" && /* @__PURE__ */ X(tt, {
							size: 12,
							className: "shrink-0",
							"aria-hidden": "true"
						}),
						e.type === "phone" && /* @__PURE__ */ X(dr, {
							size: 12,
							className: "shrink-0",
							"aria-hidden": "true"
						}),
						e.text
					]
				}, e.payload))
			})
		]
	});
}
function Ho({ text: e, isOutbound: t, onInternalLink: n }) {
	let { trackLinkClick: r } = oe(), i = K((e) => {
		if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
		let t = e.target?.closest?.("a");
		if (!t) return;
		let i = t.getAttribute("href");
		if (!i) return;
		let a = ho(i);
		if (a) {
			if (!n) return;
			e.preventDefault(), n(a);
			return;
		}
		e.preventDefault(), r({
			url: i,
			targetType: "EXTERNAL"
		}), window.open(i, "_blank", "noopener,noreferrer");
	}, [n, r]), a = _o(e), o = !a && t && yo(e);
	return !a && !o ? /* @__PURE__ */ X("p", {
		className: "whitespace-pre-wrap leading-relaxed",
		children: e
	}) : /* @__PURE__ */ X("div", {
		onClick: i,
		className: H("leading-relaxed", a ? "whitespace-pre-wrap" : "whitespace-normal", "[&>p]:my-0 [&>p+p]:mt-2", "[&_a]:underline [&_a]:underline-offset-2 [&_a]:opacity-90 [&_a:hover]:opacity-100", "[&_strong]:font-semibold [&_em]:italic", "[&_ul]:my-1.5 [&_ul]:list-disc [&_ul]:whitespace-normal [&_ul]:pl-5", "[&_ol]:my-1.5 [&_ol]:list-decimal [&_ol]:whitespace-normal [&_ol]:pl-5", "[&_li]:my-0.5", "[&_li>p]:my-0 [&_li>p+p]:mt-1", "[&_code]:rounded-sm [&_code]:bg-black/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.85em]", "[&_pre]:my-2 [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:bg-black/10 [&_pre]:p-2 [&_pre]:text-[0.8em]", !t && "[&_code]:bg-white/15 [&_pre]:bg-white/15"),
		children: a ? xe(bo(e)) : /* @__PURE__ */ X(ie, {
			remarkPlugins: [de],
			children: e
		})
	});
}
function Uo({ items: e, onOpenLightbox: t }) {
	let n = V("messages");
	if (e.length === 0) return null;
	let r = e.length > 1;
	return /* @__PURE__ */ X("div", {
		className: H("grid w-full", r ? "max-h-[20rem] grid-cols-2 gap-0.5 auto-rows-fr" : "grid-cols-1"),
		children: e.map((i, a) => {
			let o = () => t?.(e, a);
			return i.mimetype === "application/pdf" ? /* @__PURE__ */ Z("button", {
				type: "button",
				onClick: o,
				"aria-label": i.alt || n("openPreview"),
				className: H("group flex w-full cursor-zoom-in items-center gap-3 px-4 py-3 text-left", "bg-wx-bg-elevated text-wx-fg transition-colors hover:bg-wx-bg-elevated-2"),
				children: [/* @__PURE__ */ X("span", {
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-wx-sm bg-wx-bg text-[10px] font-bold tracking-wider text-wx-fg-muted shadow-sm",
					children: "PDF"
				}), /* @__PURE__ */ Z("span", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ X("span", {
						className: "truncate text-sm font-medium",
						children: i.alt
					}), /* @__PURE__ */ X("span", {
						className: "truncate text-xs text-wx-fg-muted",
						children: i.mimetype
					})]
				})]
			}, a) : i.mimetype.startsWith("video/") ? /* @__PURE__ */ Z("div", {
				className: "relative w-full",
				children: [/* @__PURE__ */ X("video", {
					src: i.url,
					controls: !0,
					preload: "metadata",
					className: H("block w-full", r ? "h-full object-cover" : "max-h-80")
				}), r && /* @__PURE__ */ X("button", {
					type: "button",
					"aria-label": i.alt || n("openPreview"),
					onClick: o,
					className: "absolute inset-0 cursor-zoom-in"
				})]
			}, a) : /* @__PURE__ */ X("button", {
				type: "button",
				onClick: o,
				"aria-label": i.alt || n("openImage"),
				className: H("group relative block w-full overflow-hidden", "cursor-zoom-in"),
				children: /* @__PURE__ */ X("img", {
					src: i.url,
					alt: i.alt,
					loading: "lazy",
					className: H("block w-full transition-transform duration-200 group-hover:scale-[1.02]", r ? "h-full object-cover" : "max-h-80 object-cover")
				})
			}, a);
		})
	});
}
function Wo({ media: e, onDark: t }) {
	return e.mimetype.startsWith("audio/") ? /* @__PURE__ */ X(ct, {
		fallback: /* @__PURE__ */ X("div", { className: "h-12 w-56 max-w-full animate-pulse rounded-wx bg-wx-bg-elevated" }),
		children: /* @__PURE__ */ X(Bo, {
			src: e.url,
			onDark: t
		})
	}) : /* @__PURE__ */ X(Go, { media: e });
}
function Go({ media: e }) {
	let t = e.alt || e.url.split("/").pop() || e.mimetype || "File", n = Ko(e.mimetype);
	return /* @__PURE__ */ Z("a", {
		href: e.url,
		target: "_blank",
		rel: "noopener",
		className: "flex max-w-xs items-center gap-3 rounded-wx-sm bg-wx-bg-elevated/60 px-3 py-2.5 text-xs text-wx-fg transition-colors hover:bg-wx-bg-elevated",
		children: [/* @__PURE__ */ X("span", {
			className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-wx-sm bg-wx-bg-elevated-2 text-[10px] font-bold tracking-wider text-wx-fg-muted uppercase",
			children: n
		}), /* @__PURE__ */ Z("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ X("span", {
				className: "block truncate font-medium text-wx-fg",
				children: t
			}), /* @__PURE__ */ X("span", {
				className: "block truncate text-wx-fg-subtle",
				children: e.mimetype || "file"
			})]
		})]
	});
}
function Ko(e) {
	return e ? e.includes("pdf") ? "PDF" : e.includes("zip") || e.includes("compressed") ? "ZIP" : e.includes("spreadsheet") || e.includes("excel") ? "XLS" : e.includes("word") || e.includes("document") ? "DOC" : e.startsWith("text/") ? "TXT" : (e.split("/")[1] ?? "").slice(0, 4).toUpperCase() || "FILE" : "FILE";
}
//#endregion
//#region components/widget/tabs/messages-tab/message/system-notice.tsx
function qo(e, t) {
	return e.type === "OPERATOR_CONNECTED" ? e.operatorName ? t("withOperator", { name: e.operatorName }) : t("operatorConnected") : e.initiator === "VISITOR" ? t("chatResolvedByYou") : e.initiator === "OPERATOR" && e.operatorName ? t("chatResolvedByOperator", { name: e.operatorName }) : t("chatResolved");
}
function Jo({ system: e, messageId: t }) {
	let n = V("messages"), r = e.type === "OPERATOR_CONNECTED" ? e.operatorAvatar : void 0;
	return /* @__PURE__ */ Z("div", {
		className: "flex items-center justify-center gap-1.5 px-2 py-1",
		"data-message-id": t,
		children: [r && /* @__PURE__ */ X("img", {
			src: r,
			alt: "",
			className: "h-4 w-4 shrink-0 rounded-full object-cover"
		}), /* @__PURE__ */ X("span", {
			className: "text-[11px] text-wx-fg-muted",
			children: qo(e, n)
		})]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message/typing-bubble.tsx
function Yo({ actorName: e, actorKind: t, actorAvatarUrl: r, actorPhase: i, aiAssistantAvatarUrl: a, organizationLogoUrl: o, organizationName: s }) {
	let c = V("messages");
	return /* @__PURE__ */ Z(n.div, {
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
		children: [/* @__PURE__ */ Z("div", {
			className: "flex max-w-[85%] items-start gap-2",
			children: [/* @__PURE__ */ X(No, {
				size: 28,
				senderKind: t,
				senderName: e,
				senderAvatarUrl: r,
				aiAssistantAvatarUrl: a,
				organizationLogoUrl: o,
				organizationName: s,
				className: "mt-0.5"
			}), /* @__PURE__ */ X("div", {
				className: "rounded-wx-lg bg-wx-bg-elevated px-4 py-3 text-sm text-wx-fg",
				children: /* @__PURE__ */ Z("span", {
					className: "inline-flex items-end gap-1",
					children: [
						/* @__PURE__ */ X("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-wx-fg-muted [animation-delay:-0.3s]" }),
						/* @__PURE__ */ X("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-wx-fg-muted [animation-delay:-0.15s]" }),
						/* @__PURE__ */ X("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-wx-fg-muted" })
					]
				})
			})]
		}), /* @__PURE__ */ Z("p", {
			className: "ml-9 text-[11px] text-wx-fg-subtle",
			children: [
				/* @__PURE__ */ X("span", {
					className: "font-medium text-wx-fg-muted",
					children: e && e !== "…" ? e : c("typingSomeone")
				}),
				/* @__PURE__ */ X("span", {
					"aria-hidden": "true",
					children: " · "
				}),
				/* @__PURE__ */ X("span", { children: c(i === "thinking" ? "aiThinking" : i === "searching" ? "aiSearching" : "typing") })
			]
		})]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message/unread-divider.tsx
var Xo = lt(({ label: e }, t) => /* @__PURE__ */ Z("div", {
	ref: t,
	className: "flex items-center gap-2 py-1",
	children: [
		/* @__PURE__ */ X("span", {
			"aria-hidden": "true",
			className: "h-px flex-1 bg-wx-danger/40"
		}),
		/* @__PURE__ */ X("span", {
			className: "text-[11px] font-semibold text-wx-danger",
			children: e
		}),
		/* @__PURE__ */ X("span", {
			"aria-hidden": "true",
			className: "h-px flex-1 bg-wx-danger/40"
		})
	]
}));
Xo.displayName = "UnreadDivider";
//#endregion
//#region components/widget/tabs/messages-tab/message/typewriter.tsx
var Zo = 42;
function Qo(e) {
	let t = Zo * (.6 + Math.random() * .8);
	return e && ".!?".includes(e) ? t += 380 : e && ",;:".includes(e) && (t += 180), t;
}
function $o({ text: e, startDelayMs: t = 0, onDone: n }) {
	let [r, i] = Y(t > 0 ? -1 : 0), a = J(n);
	if (a.current = n, q(() => i(t > 0 ? -1 : 0), [e]), q(() => {
		if (r < 0) {
			let e = setTimeout(() => i(0), t);
			return () => clearTimeout(e);
		}
		if (r >= e.length) {
			a.current?.();
			return;
		}
		let n = setTimeout(() => i((e) => e + 1), Qo(e[r - 1]));
		return () => clearTimeout(n);
	}, [
		r,
		e,
		t
	]), r < 0) return /* @__PURE__ */ Z("span", {
		className: "inline-flex items-end gap-1 align-middle",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ X("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60 [animation-delay:-0.3s]" }),
			/* @__PURE__ */ X("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60 [animation-delay:-0.15s]" }),
			/* @__PURE__ */ X("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60" })
		]
	});
	let o = r >= e.length;
	return /* @__PURE__ */ Z(mt, { children: [e.slice(0, r), !o && /* @__PURE__ */ X("span", {
		"aria-hidden": "true",
		className: "ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.15em] animate-pulse rounded-[1px] bg-current align-baseline"
	})] });
}
//#endregion
//#region components/widget/tabs/messages-tab/message/welcome-message.tsx
function es({ kind: e, text: t, typewriter: n = !1, typewriterDelayMs: r = 0 }) {
	return e === "SYSTEM" ? /* @__PURE__ */ X("div", {
		className: "flex justify-center px-2 py-1",
		children: /* @__PURE__ */ X("span", {
			className: "text-[11px] text-wx-fg-muted",
			children: n ? /* @__PURE__ */ X($o, {
				text: t,
				startDelayMs: r
			}) : t
		})
	}) : /* @__PURE__ */ Z("div", {
		className: "flex w-full items-start gap-2 rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2.5 text-wx-fg-muted",
		children: [/* @__PURE__ */ X(nr, {
			size: 15,
			className: "mt-0.5 shrink-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ X("p", {
			className: "text-xs leading-relaxed italic",
			children: t
		})]
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/message-rows.ts
var ts = (e, t) => e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
function ns(e, t) {
	if (e.createdAt) {
		let t = new Date(e.createdAt);
		if (!Number.isNaN(t.getTime())) return t;
	}
	return t;
}
function rs(e, t, n) {
	if (ts(e, n)) return t.todayLabel;
	let r = new Date(n);
	return r.setDate(n.getDate() - 1), ts(e, r) ? t.yesterdayLabel : e.toLocaleDateString(t.locale, e.getFullYear() === n.getFullYear() ? {
		day: "numeric",
		month: "short"
	} : {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function is(e, t) {
	let n = t.now ?? /* @__PURE__ */ new Date(), r = [], i = null;
	for (let a of e) {
		let e = ns(a, n), o = `${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;
		o !== i && (i = o, r.push({
			kind: "date",
			key: `date-${o}`,
			label: rs(e, t, n)
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
var as = G.forwardRef(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ X("input", {
	ref: r,
	type: t,
	className: H("h-11 w-full rounded-wx bg-wx-bg-elevated px-4 text-sm text-wx-fg", "placeholder:text-wx-fg-muted", "focus:outline-none focus:ring-2 focus:ring-wx-primary", "disabled:cursor-not-allowed disabled:opacity-50", e),
	...n
}));
as.displayName = "Input";
//#endregion
//#region components/widget/tabs/messages-tab/prechat-form/helpers.ts
function os(e) {
	return e === "EMAIL" ? "email" : e === "PHONE" ? "tel" : "text";
}
function ss(e) {
	return e === "NAME" ? "name" : e === "EMAIL" ? "email" : e === "PHONE" ? "tel" : "off";
}
function cs(e) {
	return `wexio:prechat-submitted:${e}`;
}
function ls(e) {
	try {
		return localStorage.getItem(cs(e)) === "1";
	} catch {
		return !1;
	}
}
function us(e) {
	try {
		localStorage.setItem(cs(e), "1");
	} catch {}
}
function ds(e, t, n) {
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
function fs(e, t) {
	return e.fields.map((e) => ({
		key: e.key,
		value: (t[e.key] ?? "").trim()
	})).filter((e) => e.value.length > 0);
}
function ps(e, t) {
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
function ms({ form: e, values: t, errors: n, onChange: r, disabled: i = !1 }) {
	let a = V("prechat"), o = (e) => {
		if (e.label.trim()) return e.label;
		switch (e.kind) {
			case "NAME": return a("labelName");
			case "EMAIL": return a("labelEmail");
			case "PHONE": return a("labelPhone");
			case "CUSTOM_TEXT": return a("labelCustom");
		}
	};
	return /* @__PURE__ */ X("div", {
		className: "flex flex-col gap-1.5 border-wx-border border-b px-2.5 pt-2 pb-1.5",
		children: e.fields.map((e) => {
			let a = o(e), s = n[e.key];
			return /* @__PURE__ */ Z("div", { children: [/* @__PURE__ */ X(as, {
				type: os(e.kind),
				value: t[e.key] ?? "",
				onChange: (t) => r(e.key, t.target.value),
				autoComplete: ss(e.kind),
				disabled: i,
				"aria-invalid": !!s,
				"aria-label": a,
				placeholder: e.required ? `${a} *` : a,
				className: H("h-8 rounded-wx-md px-3 text-[13px]", s && "ring-1 ring-wx-danger placeholder:text-wx-danger/60 focus:ring-wx-danger")
			}), s && /* @__PURE__ */ X("p", {
				className: "mt-0.5 px-1 text-[10px] text-wx-danger leading-none",
				children: s
			})] }, e.key);
		})
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/index.tsx
var hs = {
	required: "r",
	invalidEmail: "e",
	invalidPhone: "p"
}, gs = ut(() => import("./widget-react-DubCiNev.js").then((e) => ({ default: e.VoiceRecorderBar })));
function _s({ isDummy: e, chatId: t, token: r, prechatForm: i, messenger: a, organizationLogoUrl: o, organizationName: s, isOpen: c = !0, assignmentStatus: l, assignmentEstimate: u, onInbound: f, onOutbound: p, registerRealtimeHandler: m, unreadCount: h = 0, clearUnread: g, liveMessages: v, appendLiveMessage: y, replaceLiveMessage: b, initialVisitorMessage: S, onInitialVisitorMessageSent: C, visitorIdentity: w, visitorPrefill: T, security: E, verified: ee = !1, onGoogleCredential: D, onPasskeySession: O, onInternalLink: k, getTurnstileToken: A }) {
	let N = V("messages"), re = V("demo"), ie = V("prechat"), ae = Ne(), { trackLinkClick: se } = oe(), P = _() ?? "", [F, ce] = Y(null);
	q(() => {
		ce(ls(P));
	}, [P]);
	let [le, ue] = Y({}), [I, L] = Y({}), [de, R] = Y(null), [fe, { loading: pe }] = M(), me = K((e, t) => {
		ue((n) => ({
			...n,
			[e]: t
		})), L((t) => {
			if (!t[e]) return t;
			let n = { ...t };
			return delete n[e], n;
		});
	}, []), he = pt(() => i ? ps(i, T) : {}, [i, T]);
	q(() => {
		Object.keys(he).length !== 0 && ue((e) => {
			let t = !1, n = { ...e };
			for (let [e, r] of Object.entries(he)) n[e] || (n[e] = r, t = !0);
			return t ? n : e;
		});
	}, [he]);
	let [_e, ve] = Y(!1), ye = pt(() => {
		if (!w || !i?.enabled || i.fields.length === 0) return !1;
		let e = (e) => e === "NAME" ? !!w.name?.trim() : e === "EMAIL" ? !!w.email?.trim() : e === "PHONE" ? !!w.phone?.trim() : !1;
		return i.fields.filter((e) => e.required).every((t) => e(t.kind));
	}, [w, i]), xe = pt(() => !i?.enabled || i.fields.length === 0 || Object.keys(he).length === 0 ? !1 : Object.keys(ds(i, he, hs)).length === 0, [i, he]), Ce = J(!1);
	q(() => {
		!xe || F !== !1 || _e || Ce.current || ye || !i || !e && !r || (Ce.current = !0, (async () => {
			if (e) {
				us(P), ce(!0);
				return;
			}
			try {
				let e = await A?.() ?? void 0;
				await fe({ variables: { input: {
					fields: fs(i, he),
					turnstileToken: e
				} } }), us(P), ce(!0);
			} catch {
				Ce.current = !1, ve(!0);
			}
		})());
	}, [
		xe,
		F,
		_e,
		ye,
		i,
		he,
		e,
		r,
		P,
		fe,
		A
	]);
	let we = !!i?.enabled && i.fields.length > 0 && F === !1 && !ye && !(xe && !_e), [Te, Ee] = Y(() => {
		if (typeof window > "u") return !1;
		try {
			return sessionStorage.getItem("wexio:demo-authed") === "1";
		} catch {
			return !1;
		}
	}), B = (e) => {
		Ee(e);
		try {
			e ? sessionStorage.setItem("wexio:demo-authed", "1") : sessionStorage.removeItem("wexio:demo-authed");
		} catch {}
	}, De = E?.google?.enabled ? E.google.clientId : null, Oe = !!E?.passkey?.enabled, ke = !!E?.requireAuth && !ee && !(e && Te), Ae = K(async () => {
		if (!we || !i) return !0;
		let t = ds(i, le, {
			required: ie("required"),
			invalidEmail: ie("invalidEmail"),
			invalidPhone: ie("invalidPhone")
		});
		if (Object.keys(t).length > 0) return L(t), !1;
		if (R(null), e) return us(P), ce(!0), !0;
		try {
			let e = await A?.() ?? void 0;
			return await fe({ variables: { input: {
				fields: fs(i, le),
				turnstileToken: e
			} } }), us(P), ce(!0), !0;
		} catch (e) {
			return R(e instanceof Error ? e.message : ie("submitFailed")), !1;
		}
	}, [
		we,
		i,
		le,
		e,
		P,
		fe,
		ie,
		A
	]), [je, Me] = Y(""), [Pe, U] = Y(!1), [Fe, Ie] = Y(!1), [Le, Re] = Y(!1), ze = J(null), Be = J(null), Ve = J(null);
	q(() => {
		if (!Fe) return;
		let e = (e) => {
			let t = e.target;
			Ve.current?.contains(t) || t instanceof Element && t.closest("[data-wx-commands-panel]") || Ie(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [Fe]);
	let He = (e) => {
		let t = ze.current;
		if (!t) {
			Me((t) => t + e);
			return;
		}
		let n = t.selectionStart ?? je.length, r = t.selectionEnd ?? je.length;
		Me(je.slice(0, n) + e + je.slice(r)), requestAnimationFrame(() => {
			t.focus();
			let r = n + e.length;
			t.setSelectionRange(r, r);
		});
	};
	q(() => {
		let e = ze.current;
		e && (e.style.height = "auto", e.style.height = `${Math.min(e.scrollHeight, 120)}px`);
	}, [je]);
	let [Ue, We] = Y(e ? wn(re) : []), Ge = e ? Ue : v ?? [], Ke = K((t) => {
		if (e) {
			We((e) => e.some((e) => e.id === t.id) ? e : [...e, t]);
			return;
		}
		y?.(t);
	}, [e, y]), [qe, Je] = Y(/* @__PURE__ */ new Set()), [Ye, Xe] = Y(null), Ze = J(null);
	q(() => () => {
		Ze.current && clearTimeout(Ze.current);
	}, []);
	let [Qe, $e] = Y([]), [et, tt] = Y(null), nt = J(null), rt = J(null), [it] = ne(), [at] = j(), [ot] = te(), G = J(/* @__PURE__ */ new Set()), st = J(!0), lt = J(!0), ut = J(!1);
	q(() => {
		h === 0 && (ut.current = !1);
	}, [h]);
	let dt = K(() => {
		ut.current || h !== 0 && (ut.current = !0, g?.(), !(e || !t) && ot({ variables: { chatId: t } }).catch(() => {
			ut.current = !1;
		}));
	}, [
		t,
		e,
		h,
		ot,
		g
	]), [ft, ht] = Y(() => /* @__PURE__ */ new Set()), [gt, _t] = Y(null), vt = (e, t) => _t({
		items: e,
		index: t
	}), { data: yt, loading: bt, fetchMore: St } = d({
		variables: {
			chatId: t ?? "",
			limit: 10
		},
		skip: e || !t || !r,
		fetchPolicy: "cache-and-network",
		nextFetchPolicy: "cache-first"
	}), Ct = (() => {
		let e = yt?.visitorChatHistory?.items;
		if (!Array.isArray(e) || e.length === 0) return null;
		let t = e[e.length - 1];
		return typeof t?.id == "string" ? t.id : null;
	})(), wt = !!yt?.visitorChatHistory?.nextCursor, [Tt, Et] = Y(!1), [Dt, Ot] = Y(!1), kt = K(async () => {
		if (!(e || !t || !Ct || Tt || Dt || !wt)) {
			Et(!0);
			try {
				((await St({
					variables: {
						chatId: t,
						before: Ct,
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
				})).data.visitorChatHistory?.items?.length ?? 0) === 0 && Ot(!0);
			} catch {} finally {
				Et(!1);
			}
		}
	}, [
		e,
		t,
		Ct,
		Tt,
		Dt,
		wt,
		St
	]), At = J(() => {});
	q(() => {
		At.current = (e) => It(e);
	}), q(() => {
		if (m) return m((e) => At.current(e));
	}, [m]);
	let [jt, { loading: Mt }] = x(), [Nt] = be(), Pt = J(0), Ft = K(() => {
		if (e || !r) return;
		let t = Date.now();
		t - Pt.current < 3e3 || (Pt.current = t, Nt().catch(() => void 0));
	}, [
		Nt,
		e,
		r
	]), It = (e) => {
		let t = e.from ?? e.sender, n = t?.kind, r = t?.name ?? "";
		if (e.kind === "typing") {
			Xe({
				name: n === "ai" || n === "bot" ? xt : r,
				kind: n,
				avatar: t?.avatar,
				phase: e.phase
			}), Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => Xe(null), 8e3);
			return;
		}
		if (e.kind === "read-receipt") {
			let t = e.readReceipt?.messageIds ?? [];
			t.length > 0 && ht((e) => {
				let n = new Set(e);
				for (let e of t) n.add(e);
				return n;
			});
			return;
		}
		Ze.current && (clearTimeout(Ze.current), Ze.current = null), Xe(null);
	}, Q = pt(() => {
		if (e) return Ge;
		let t = Oo(yt, ae), n = new Set(t.map((e) => e.id)), r = Ge.filter((e) => !n.has(e.id));
		return [...t, ...r];
	}, [
		e,
		Ge,
		yt,
		ae
	]), Lt = J(0);
	Lt.current === 0 && h > 0 && (Lt.current = h);
	let [Rt, zt] = Y(null), Bt = J(null), Vt = J(!1), Ht = J(null);
	Ht.current = Rt, q(() => {
		if (Vt.current || bt) return;
		Vt.current = !0;
		let e = Lt.current;
		if (e > 0 && Q.length > 0) {
			let t = 0, n = null;
			for (let r = Q.length - 1; r >= 0 && !(Q[r].direction === "OUTBOUND" && (n = Q[r].id, t += 1, t >= e)); r--);
			n && zt(n);
		}
	}, [bt, Q]), q(() => {
		if (!Rt) return;
		let e = Bt.current;
		e && (Gt.current = !0, e.scrollIntoView({
			block: "center",
			behavior: "auto"
		}));
	}, [Rt]), q(() => {
		if (!Rt) return;
		let e = setTimeout(() => zt(null), 4e3);
		return () => clearTimeout(e);
	}, [Rt]);
	let Ut = J(c);
	q(() => {
		let e = c && !Ut.current;
		if (Ut.current = c, !e) return;
		let t = null;
		if (h > 0 && Q.length > 0) {
			let e = 0;
			for (let n = Q.length - 1; n >= 0 && !(Q[n].direction === "OUTBOUND" && (t = Q[n].id, e += 1, e >= h)); n--);
		}
		Ht.current = t, Gt.current = !1, zt(t);
	}, [
		c,
		h,
		Q
	]), q(() => {
		let e = nt.current;
		if (!e) return;
		let t = () => {
			let t = e.scrollHeight - e.scrollTop - e.clientHeight < 80;
			st.current = t, t && (lt.current = !0), e.scrollTop < 120 && kt();
		};
		t(), e.addEventListener("scroll", t, { passive: !0 });
		let n = (t) => {
			let n = t.target;
			(n instanceof HTMLImageElement || n instanceof HTMLVideoElement) && (!st.current || !lt.current || e.scrollTo({
				top: e.scrollHeight,
				behavior: "auto"
			}));
		};
		return e.addEventListener("load", n, !0), () => {
			e.removeEventListener("scroll", t), e.removeEventListener("load", n, !0);
		};
	}, [kt]);
	let Wt = J(null);
	q(() => {
		let e = nt.current;
		if (!e) return;
		if (Tt) {
			Wt.current = {
				scrollTop: e.scrollTop,
				scrollHeight: e.scrollHeight
			};
			return;
		}
		let t = Wt.current;
		if (!t) return;
		Wt.current = null;
		let n = e.scrollHeight - t.scrollHeight;
		n > 0 && (e.scrollTop = t.scrollTop + n);
	}, [Tt]);
	let Gt = J(!1), Kt = J(0);
	q(() => {
		let e = nt.current;
		if (!e) return;
		let t = !Gt.current && Q.length > 0, n = Kt.current, r = Q.length > n;
		Kt.current = Q.length;
		let i = Q[Q.length - 1], a = r && !t && !!i && i.sender.kind !== "visitor", o = r ? Q[n] : null;
		if (!t && !st.current) return;
		let s = e.firstElementChild, c = r && !t && !!i && i.sender.kind === "visitor", l = () => {
			if (!(!t && !st.current) && !(Ht.current || Lt.current > 0 && !Vt.current)) {
				if (a) {
					if (lt.current = !1, !st.current) return;
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
				c && (lt.current = !0), !(!t && !lt.current) && e.scrollTo({
					top: e.scrollHeight,
					behavior: t ? "auto" : "smooth"
				});
			}
		};
		l(), t && (Gt.current = !0, st.current = !0);
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
		Q.length,
		Ye,
		Rt,
		c
	]), q(() => {
		if (!c || h === 0) return;
		let e = nt.current;
		if (!e) return;
		let t = () => {
			e.scrollHeight - e.scrollTop - e.clientHeight <= 20 && dt();
		};
		return t(), e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, [
		c,
		h,
		dt,
		Q.length
	]);
	let qt = (() => {
		for (let e = Q.length - 1; e >= 0; e--) {
			let t = Q[e];
			if (t.direction !== "OUTBOUND") break;
			if (t.buttons && t.buttons.length > 0 && !qe.has(t.id)) return t.id;
		}
		return null;
	})(), Jt = (e) => {
		let t = `tmp-${Date.now()}`;
		Ke({
			id: t,
			direction: "INBOUND",
			text: e,
			ageLabel: "now",
			sender: {
				kind: "visitor",
				name: "You"
			},
			deliveryStatus: "DELIVERED"
		}), p?.(), setTimeout(() => {
			let n = po(e, re);
			Ke({
				id: `tmp-fin-${Date.now()}`,
				direction: "OUTBOUND",
				text: n.text,
				ageLabel: "now",
				sender: {
					kind: "ai",
					name: xt
				},
				buttons: n.buttons
			}), ht((e) => {
				let n = new Set(e);
				return n.add(t), n;
			}), f?.();
		}, 900);
	}, Yt = J(!1);
	q(() => {
		!e || !S || Yt.current || (Yt.current = !0, Jt(S), C?.());
	}, [e, S]);
	let Xt = (t, n) => {
		if (n.type === "url") {
			n.url && (se({
				url: n.url,
				targetType: "CTA_URL",
				targetRefId: t,
				title: n.text
			}), window.open(n.url, "_blank", "noopener,noreferrer"));
			return;
		}
		if (n.type === "phone") {
			n.phoneNumber && (window.location.href = `tel:${n.phoneNumber}`);
			return;
		}
		if (n.type && n.type !== "callback") return;
		if (Je((e) => {
			let n = new Set(e);
			return n.add(t), n;
		}), e) {
			Jt(n.text);
			return;
		}
		let r = `tmp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
		Ke({
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
		}), p?.(), jt({ variables: { input: {
			text: n.text,
			buttonValue: n.payload
		} } }).then((e) => {
			let t = e.data?.sendVisitorMessage?.messageId;
			t && b?.(r, {
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
	}, Zt = async (t) => {
		tt(null);
		let n = Da(t);
		if (!Ta.has(n)) {
			tt(N("fileMimeNotAllowed"));
			return;
		}
		if (t.size > 10485760) {
			tt(N("fileTooLarge"));
			return;
		}
		if (e) {
			$e((e) => [...e, {
				tempId: `upl-${Date.now()}`,
				filename: t.name,
				mimetype: n,
				mediaId: "demo-media",
				url: URL.createObjectURL(t)
			}]);
			return;
		}
		let r = `upl-${Date.now()}`, i = URL.createObjectURL(t);
		$e((e) => [...e, {
			tempId: r,
			filename: t.name,
			mimetype: n,
			mediaId: null,
			url: i
		}]);
		try {
			let { base64: e } = await wa(t), a = (await it({ variables: { input: {
				filename: t.name,
				mimetype: n,
				dataBase64: e
			} } })).data?.uploadVisitorMedia;
			if (!a) throw Error("empty upload response");
			G.current.delete(r) && at({ variables: { mediaId: a.mediaId } }).catch(() => void 0), a.url && URL.revokeObjectURL(i), $e((e) => e.map((e) => e.tempId === r ? {
				...e,
				mediaId: a.mediaId,
				...a.url ? { url: a.url } : {}
			} : e));
		} catch {
			URL.revokeObjectURL(i), $e((e) => e.filter((e) => e.tempId !== r)), tt(N("uploadFailed"));
		}
	}, Qt = (t) => {
		let n = Qe.find((e) => e.tempId === t);
		n?.url?.startsWith("blob:") && URL.revokeObjectURL(n.url), n && !e && (n.mediaId ? at({ variables: { mediaId: n.mediaId } }).catch(() => void 0) : G.current.add(t)), $e((e) => e.filter((e) => e.tempId !== t));
	}, $t = async () => {
		tt(null), await Ae() && Re(!0);
	}, en = async (t) => {
		if (Re(!1), t.size > 10485760) {
			tt(N("fileTooLarge"));
			return;
		}
		if (e) {
			let e = jo(t.base64, t.mimetype), n = URL.createObjectURL(e), r = `tmp-voice-${Date.now()}`;
			Ke({
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
			}), p?.(), setTimeout(() => {
				Ke({
					id: `tmp-fin-${Date.now()}`,
					direction: "OUTBOUND",
					text: "Got your voice note - let me check that and circle back.",
					ageLabel: "now",
					sender: {
						kind: "ai",
						name: xt
					}
				}), ht((e) => {
					let t = new Set(e);
					return t.add(r), t;
				}), f?.();
			}, 900);
			return;
		}
		try {
			let e = (await it({ variables: { input: {
				filename: t.filename,
				mimetype: t.mimetype,
				dataBase64: t.base64
			} } })).data?.uploadVisitorMedia?.mediaId;
			if (!e) throw Error("empty upload response");
			let n = jo(t.base64, t.mimetype), r = URL.createObjectURL(n), i = `tmp-voice-${Date.now()}`;
			Ke({
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
			}), await jt({ variables: { input: { mediaIds: [e] } } }), p?.();
		} catch {
			tt(N("uploadFailed"));
		}
	}, tn = (e) => {
		Re(!1), tt(N(e === "unsupported" ? "voiceUnsupported" : e === "denied" ? "voiceDenied" : "uploadFailed"));
	}, nn = async () => {
		let t = je.trim(), n = Qe.map((e) => e.mediaId).filter((e) => !!e);
		if (!t && n.length === 0 || Mt || pe) return;
		let r = Qe.filter((e) => !!e.mediaId && !!e.url).map((e) => ({
			url: e.url,
			mimetype: e.mimetype,
			alt: e.filename
		}));
		if (!await Ae()) return;
		if (e) {
			Me(""), $e([]), Jt(t || "[file]");
			return;
		}
		let i = `tmp-${Date.now()}`;
		Ke({
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
		}), Me(""), $e([]);
		try {
			let e = await jt({ variables: { input: {
				...t ? { text: t } : {},
				...n.length > 0 ? { mediaIds: n } : {}
			} } });
			p?.();
			let a = e.data?.sendVisitorMessage?.messageId;
			a && b?.(i, {
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
	}, rn = async (t) => {
		if (Ie(!1), !await Ae()) return;
		if (e) {
			Jt(t);
			return;
		}
		let n = `tmp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
		Ke({
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
		}), p?.();
		try {
			let e = (await jt({ variables: { input: { text: t } } })).data?.sendVisitorMessage?.messageId;
			e && b?.(n, {
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
	}, an = je.trim() || Qe.length > 0 ? "send" : "mic", on = Qe.some((e) => e.mediaId === null), sn = e ? Sn(re) : a?.messages ?? [], cn = sn.filter((e) => e.kind === "SYSTEM"), ln = sn.filter((e) => e.kind === "HINT"), un = e || ke || !bt && !wt;
	a?.showRelatedNews, a?.showRelatedHelpArticles, a?.showReactionCounts;
	let dn = pt(() => is(Q, {
		locale: ae,
		todayLabel: N("today"),
		yesterdayLabel: N("yesterday"),
		unreadAnchorId: Rt
	}), [
		Q,
		ae,
		N,
		Rt
	]);
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-1 flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ X(z, {
				className: "flex-1",
				viewportRef: nt,
				children: /* @__PURE__ */ Z("div", {
					className: "flex flex-col gap-3 px-4 pt-4 pb-3",
					children: [
						un && cn.length > 0 && /* @__PURE__ */ X("div", {
							className: "flex flex-col gap-2",
							children: cn.map((e) => /* @__PURE__ */ X(es, {
								kind: e.kind,
								text: e.text
							}, `${e.kind}:${e.text}`))
						}),
						un && ln.length > 0 && /* @__PURE__ */ X("div", {
							className: "flex flex-col gap-2",
							children: ln.map((e) => /* @__PURE__ */ X(es, {
								kind: e.kind,
								text: e.text
							}, `${e.kind}:${e.text}`))
						}),
						!ke && /* @__PURE__ */ Z(mt, { children: [bt && Q.length === 0 && /* @__PURE__ */ Z("div", {
							className: "flex flex-col gap-3",
							children: [
								/* @__PURE__ */ Z("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ X(W, { className: "h-7 w-7 shrink-0 rounded-full" }), /* @__PURE__ */ X(W, { className: "h-10 w-3/4 rounded-wx-lg" })]
								}),
								/* @__PURE__ */ X("div", {
									className: "flex flex-row-reverse items-start",
									children: /* @__PURE__ */ X(W, { className: "h-8 w-2/3 rounded-wx-lg" })
								}),
								/* @__PURE__ */ Z("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ X(W, { className: "h-7 w-7 shrink-0 rounded-full" }), /* @__PURE__ */ X(W, { className: "h-12 w-4/5 rounded-wx-lg" })]
								})
							]
						}), /* @__PURE__ */ X(Se, {
							initial: e,
							children: dn.map((e) => {
								if (e.kind === "date") return /* @__PURE__ */ X(mo, { label: e.label }, e.key);
								if (e.kind === "unread") return /* @__PURE__ */ X(Xo, {
									ref: Bt,
									label: N("unreadMessages")
								}, e.key);
								let t = e.message;
								return t.sender.kind === "system" && t.system ? /* @__PURE__ */ X(Jo, {
									system: t.system,
									messageId: t.id
								}, e.key) : /* @__PURE__ */ X(Vo, {
									message: ft.has(t.id) ? {
										...t,
										deliveryStatus: "READ"
									} : t,
									organizationLogoUrl: o,
									organizationName: s,
									aiAssistantAvatarUrl: a?.aiAssistantAvatar ?? null,
									buttonsActive: t.id === qt,
									onButtonClick: (e) => Xt(t.id, e),
									onOpenLightbox: vt,
									onInternalLink: k
								}, e.key);
							})
						})] }),
						!ke && Ye && /* @__PURE__ */ X(Yo, {
							actorName: Ye.name,
							actorKind: Ye.kind,
							actorAvatarUrl: Ye.avatar,
							actorPhase: Ye.phase,
							aiAssistantAvatarUrl: a?.aiAssistantAvatar ?? null,
							organizationLogoUrl: o,
							organizationName: s
						})
					]
				})
			}),
			/* @__PURE__ */ Z("div", {
				className: "relative bg-wx-bg px-3 pt-2 pb-3",
				children: [
					l === "pending" && /* @__PURE__ */ X("div", {
						className: "mb-2 flex justify-center",
						children: /* @__PURE__ */ X("span", {
							className: "rounded-wx-sm bg-wx-bg-elevated px-3 py-1 text-center text-[11px] text-wx-fg-muted",
							children: u && Nn(u, N, ae) || N("connectingOperator")
						})
					}),
					/* @__PURE__ */ X(uo, {
						open: Pe,
						onClose: () => U(!1),
						onSelect: He,
						anchorRef: Be
					}),
					et && /* @__PURE__ */ X("p", {
						className: "mb-2 text-xs text-wx-danger",
						children: et
					}),
					/* @__PURE__ */ X(Se, {
						mode: "wait",
						initial: !1,
						children: ke ? /* @__PURE__ */ Z(n.div, {
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
							children: [/* @__PURE__ */ X("p", {
								className: "text-center text-sm text-wx-fg-muted",
								children: N("signInToChat")
							}), /* @__PURE__ */ X("div", {
								className: "flex w-full flex-col gap-2",
								children: e ? /* @__PURE__ */ Z(mt, { children: [
									E?.google?.enabled && /* @__PURE__ */ X("button", {
										type: "button",
										onClick: () => B(!0),
										className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2",
										children: N("googleSignInDemo")
									}),
									E?.passkey?.enabled && /* @__PURE__ */ X("button", {
										type: "button",
										onClick: () => B(!0),
										className: "flex w-full items-center justify-center gap-2 rounded-wx border border-wx-border bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated-2",
										children: N("passkeySignIn")
									}),
									!E?.google?.enabled && !E?.passkey?.enabled && /* @__PURE__ */ X("p", {
										className: "text-center text-xs text-wx-fg-subtle",
										children: N("signInUnavailable")
									})
								] }) : /* @__PURE__ */ Z(mt, { children: [
									De && /* @__PURE__ */ X(ka, {
										clientId: De,
										onCredential: (e) => D?.(e)
									}),
									Oe && /* @__PURE__ */ X($a, { onSession: O }),
									!De && !Oe && /* @__PURE__ */ X("p", {
										className: "text-center text-xs text-wx-fg-subtle",
										children: N("signInUnavailable")
									})
								] })
							})]
						}, "auth-gate") : Le ? /* @__PURE__ */ X(ct, {
							fallback: /* @__PURE__ */ X("div", { className: "h-13 w-full animate-pulse rounded-wx-lg bg-wx-bg-elevated" }),
							children: /* @__PURE__ */ X(gs, {
								onComplete: en,
								onCancel: () => Re(!1),
								onError: tn
							})
						}, "recorder") : /* @__PURE__ */ Z(n.div, {
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
							className: H("flex flex-col rounded-wx-lg border border-wx-border bg-wx-bg", "focus-within:border-wx-primary focus-within:ring-2 focus-within:ring-wx-primary/20", "transition-colors"),
							children: [
								Qe.length > 0 && /* @__PURE__ */ X("div", {
									className: "px-3 pt-3 pb-1",
									children: /* @__PURE__ */ X(ao, {
										attachments: Qe,
										onRemove: Qt,
										onOpenLightbox: vt
									})
								}),
								we && i && /* @__PURE__ */ Z(mt, { children: [/* @__PURE__ */ X(ms, {
									form: i,
									values: le,
									errors: I,
									onChange: me,
									disabled: pe
								}), de && /* @__PURE__ */ X("p", {
									className: "px-3 pt-1.5 text-[11px] text-wx-danger",
									children: de
								})] }),
								/* @__PURE__ */ X("textarea", {
									ref: ze,
									name: "wexio-message",
									value: je,
									onChange: (e) => {
										Me(e.target.value), Ft();
									},
									onKeyDown: (e) => {
										e.key === "Enter" && !e.shiftKey && (e.preventDefault(), nn());
									},
									placeholder: N("sendCta"),
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
									className: H("w-full resize-none rounded-wx-lg bg-transparent px-4 pt-2.5 pb-1 text-sm text-wx-fg", "placeholder:text-wx-fg-muted", "focus:outline-none")
								}),
								/* @__PURE__ */ Z("div", {
									className: "flex items-center justify-between px-1.5 pt-0.5 pb-1.5",
									children: [/* @__PURE__ */ Z("div", {
										className: "flex items-center gap-0.5",
										children: [
											/* @__PURE__ */ X("input", {
												ref: rt,
												type: "file",
												accept: Array.from(Ta).join(","),
												className: "hidden",
												onChange: (e) => {
													let t = e.target.files?.[0];
													t && Zt(t), e.target.value = "";
												}
											}),
											/* @__PURE__ */ X(n.button, {
												type: "button",
												"aria-label": N("attach"),
												onClick: () => rt.current?.click(),
												whileHover: { scale: 1.12 },
												whileTap: { scale: .9 },
												transition: {
													type: "spring",
													stiffness: 400,
													damping: 20
												},
												className: "flex h-7 w-7 items-center justify-center rounded-full text-wx-fg-muted transition-colors hover:bg-wx-bg-elevated hover:text-wx-fg",
												children: /* @__PURE__ */ X(ur, { size: 14 })
											}),
											/* @__PURE__ */ X(n.button, {
												ref: Be,
												type: "button",
												"aria-label": N("emoji"),
												"aria-expanded": Pe,
												onClick: () => U((e) => !e),
												whileHover: { scale: 1.12 },
												whileTap: { scale: .9 },
												transition: {
													type: "spring",
													stiffness: 400,
													damping: 20
												},
												className: H("flex h-7 w-7 items-center justify-center rounded-full transition-colors", Pe ? "bg-wx-bg-elevated text-wx-fg" : "text-wx-fg-muted hover:bg-wx-bg-elevated hover:text-wx-fg"),
												children: /* @__PURE__ */ X(gr, { size: 14 })
											}),
											(a?.commands?.length ?? 0) > 0 && /* @__PURE__ */ Z("div", {
												className: "relative",
												children: [/* @__PURE__ */ X(n.button, {
													ref: Ve,
													type: "button",
													"aria-label": N("commands"),
													"aria-expanded": Fe,
													onClick: () => Ie((e) => !e),
													whileHover: { scale: 1.12 },
													whileTap: { scale: .9 },
													transition: {
														type: "spring",
														stiffness: 400,
														damping: 20
													},
													className: H("flex h-7 w-7 items-center justify-center rounded-full transition-colors", Fe ? "bg-wx-bg-elevated text-wx-fg" : "text-wx-fg-muted hover:bg-wx-bg-elevated hover:text-wx-fg"),
													children: /* @__PURE__ */ X(Xn, { size: 14 })
												}), /* @__PURE__ */ X(Se, { children: Fe && /* @__PURE__ */ X(n.div, {
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
													children: /* @__PURE__ */ X("ul", {
														className: "flex flex-col py-1",
														children: a?.commands.map((e) => /* @__PURE__ */ X("li", { children: /* @__PURE__ */ X("button", {
															type: "button",
															onClick: () => rn(e),
															className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs font-mono text-wx-fg hover:bg-wx-bg-elevated",
															children: e
														}) }, e))
													})
												}) })]
											})
										]
									}), /* @__PURE__ */ X(fo, {
										kind: an,
										disabled: Mt || on,
										onSend: nn,
										onMic: $t,
										ariaLabels: {
											send: N("sendCta"),
											mic: N("record")
										}
									})]
								})
							]
						}, "composer")
					})
				]
			}),
			/* @__PURE__ */ X(ge, {
				items: gt?.items ?? [],
				initialIndex: gt?.index ?? 0,
				open: !!gt,
				onClose: () => _t(null)
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/avatar-hero.tsx
function vs({ field: e, value: t, uploading: n, onPick: r, onClear: i, displayName: a, t: o }) {
	let s = J(null), [c, l] = Y(!1);
	q(() => {
		l(!1);
	}, [t]);
	let u = a.split(/\s+/).filter(Boolean).slice(0, 2).map((e) => e[0]?.toUpperCase() ?? "").join(""), d = e.pinned;
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-col items-center gap-2.5 pt-4 pb-2",
		children: [
			/* @__PURE__ */ Z("div", {
				className: "group relative",
				children: [
					/* @__PURE__ */ X("span", {
						"aria-hidden": "true",
						className: "absolute -inset-2 rounded-full bg-wx-primary/20 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
					}),
					/* @__PURE__ */ Z("button", {
						type: "button",
						disabled: d || n,
						onClick: () => s.current?.click(),
						"aria-label": o("uploadAvatar"),
						style: {
							height: 88,
							width: 88
						},
						className: H("relative flex items-center justify-center overflow-hidden rounded-full", "bg-gradient-to-br from-wx-bg-elevated to-wx-bg-elevated-2 text-2xl font-semibold text-wx-fg-muted", "ring-1 ring-inset ring-wx-border", !d && !n && "cursor-pointer transition-transform duration-200 hover:scale-[1.04]", d && "cursor-not-allowed"),
						children: [t && !c ? /* @__PURE__ */ X("img", {
							src: t,
							alt: "",
							className: "h-full w-full object-cover",
							referrerPolicy: "no-referrer",
							onError: () => l(!0)
						}) : u ? /* @__PURE__ */ X("span", {
							"aria-hidden": "true",
							children: u
						}) : /* @__PURE__ */ X(qn, {
							size: 26,
							"aria-hidden": "true"
						}), !d && /* @__PURE__ */ X("span", {
							className: "absolute inset-x-0 bottom-0 flex h-7 items-center justify-center bg-black/45 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100",
							children: n ? /* @__PURE__ */ X(rt, {
								size: 14,
								className: "animate-spin text-white",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ X(tr, {
								size: 14,
								className: "text-white",
								"aria-hidden": "true"
							})
						})]
					}),
					d && /* @__PURE__ */ X("span", {
						className: "absolute right-0 bottom-0 flex h-6 w-6 items-center justify-center rounded-full bg-wx-bg shadow-sm ring-1 ring-wx-border",
						children: /* @__PURE__ */ X(rr, {
							size: 11,
							className: "text-wx-fg-subtle",
							"aria-hidden": "true"
						})
					}),
					!d && t && /* @__PURE__ */ X("button", {
						type: "button",
						onClick: i,
						"aria-label": o("removeAvatar"),
						className: "-top-1 -right-1 absolute flex h-7 w-7 items-center justify-center rounded-full border border-wx-border bg-wx-bg text-wx-fg-muted shadow-sm transition-colors hover:bg-wx-bg-elevated hover:text-wx-danger",
						children: /* @__PURE__ */ X(br, {
							size: 12,
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ X("input", {
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
			a && /* @__PURE__ */ X("p", {
				className: "text-[15px] font-semibold text-wx-fg",
				children: a
			}),
			d && /* @__PURE__ */ X("p", {
				className: "text-[11px] text-wx-fg-subtle",
				children: o("pinnedHint")
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/switch.tsx
function ys({ checked: e, onChange: t, disabled: n }) {
	return /* @__PURE__ */ X("button", {
		type: "button",
		role: "switch",
		"aria-checked": e,
		disabled: n,
		onClick: () => t(!e),
		className: H("relative h-6 w-10 shrink-0 rounded-full transition-colors", e ? "bg-wx-primary" : "bg-wx-bg-elevated-2", n && "cursor-not-allowed opacity-60"),
		children: /* @__PURE__ */ X("span", {
			"aria-hidden": "true",
			className: H("absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform", e && "translate-x-4")
		})
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/boolean-control.tsx
function bs({ id: e, value: t, disabled: n, onChange: r }) {
	return /* @__PURE__ */ X("div", {
		id: e,
		className: "flex",
		children: /* @__PURE__ */ X(ys, {
			checked: t === "true",
			disabled: n,
			onChange: (e) => r(e ? "true" : "false")
		})
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/helpers.ts
function xs(e) {
	let t = {};
	for (let n of e.fields) t[n.key] = n.value ?? null;
	return t;
}
function Ss(e) {
	return e == null || e === "" || e.trim() === "";
}
function Cs(e, t) {
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
function ws(e, t) {
	let n = [];
	for (let r of e) {
		if (r.pinned) continue;
		let e = Cs(r.value ?? null, r.type), i = Cs(t[r.key] ?? null, r.type);
		e !== i && n.push({
			key: r.key,
			value: i ?? ""
		});
	}
	return n;
}
function Ts(e, t) {
	let n = (n) => t[n]?.trim() || e.fields.find((e) => e.key === n)?.value?.trim() || "", r = n("firstName"), i = n("lastName");
	return r || i ? `${r} ${i}`.trim() : n("name") || n("displayName") || "";
}
function Es(e) {
	if (!e) return "";
	if (/^\d{4}-\d{2}-\d{2}$/.test(e)) return e;
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : t.toISOString().slice(0, 10);
}
function Ds(e) {
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		if (Array.isArray(t)) return t.map((e) => String(e));
	} catch {}
	return [];
}
//#endregion
//#region components/widget/tabs/profile-tab/input-class.ts
var Os = H("w-full rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2 text-sm text-wx-fg", "focus:border-wx-primary focus:outline-none focus:ring-2 focus:ring-wx-primary/20", "read-only:cursor-not-allowed read-only:bg-wx-bg-elevated/60 read-only:text-wx-fg-muted", "disabled:cursor-not-allowed disabled:bg-wx-bg-elevated/60 disabled:text-wx-fg-muted");
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/date-control.tsx
function ks({ id: e, value: t, disabled: n, onChange: r }) {
	return /* @__PURE__ */ X("input", {
		id: e,
		type: "date",
		value: Es(t),
		disabled: n,
		onChange: (e) => r(e.target.value || null),
		className: Os
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/number-control.tsx
function As({ id: e, value: t, disabled: n, onChange: r }) {
	return /* @__PURE__ */ X("input", {
		id: e,
		type: "number",
		value: t ?? "",
		disabled: n,
		inputMode: "decimal",
		onChange: (e) => r(e.target.value || null),
		className: Os
	});
}
//#endregion
//#region node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function js(e) {
	let t = /* @__PURE__ */ Ms(e), n = G.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = G.Children.toArray(r), o = a.find(Ps);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? G.Children.count(e) > 1 ? G.Children.only(null) : G.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ X(t, {
				...i,
				ref: n,
				children: G.isValidElement(e) ? G.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ X(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function Ms(e) {
	let t = G.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (G.isValidElement(n)) {
			let e = Is(n), i = Fs(r, n.props);
			return n.type !== G.Fragment && (i.ref = t ? O(t, e) : e), G.cloneElement(n, i);
		}
		return G.Children.count(n) > 1 ? G.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var Ns = Symbol("radix.slottable");
function Ps(e) {
	return G.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ns;
}
function Fs(e, t) {
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
function Is(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ls(e) {
	let t = e + "CollectionProvider", [n, r] = me(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = (e) => {
		let { scope: t, children: n } = e, r = st.useRef(null), a = st.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ X(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	};
	o.displayName = t;
	let s = e + "CollectionSlot", c = /* @__PURE__ */ js(s), l = st.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ X(c, {
			ref: m(t, a(s, n).collectionRef),
			children: r
		});
	});
	l.displayName = s;
	let u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ js(u), p = st.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = st.useRef(null), s = m(t, o), c = a(u, n);
		return st.useEffect(() => (c.itemMap.set(o, {
			ref: o,
			...i
		}), () => void c.itemMap.delete(o))), /* @__PURE__ */ X(f, {
			[d]: "",
			ref: s,
			children: r
		});
	});
	p.displayName = u;
	function h(t) {
		let n = a(e + "CollectionConsumer", t);
		return st.useCallback(() => {
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
		h,
		r
	];
}
//#endregion
//#region node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function Rs(e, t = globalThis?.document) {
	let n = ve(e);
	G.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && n(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [n, t]);
}
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var zs = "DismissableLayer", Bs = "dismissableLayer.update", Vs = "dismissableLayer.pointerDownOutside", Hs = "dismissableLayer.focusOutside", Us, Ws = G.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), Gs = G.forwardRef((e, t) => {
	let { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: o, onDismiss: s, ...c } = e, l = G.useContext(Ws), [u, d] = G.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, p] = G.useState({}), h = m(t, (e) => d(e)), g = Array.from(l.layers), [_] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(_), y = u ? g.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = Js((e) => {
		let t = e.target, n = [...l.branches].some((e) => e.contains(t));
		!x || n || (i?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f), C = Ys((e) => {
		let t = e.target;
		[...l.branches].some((e) => e.contains(t)) || (a?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f);
	return Rs((e) => {
		y === l.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
	}, f), G.useEffect(() => {
		if (u) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Us = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Xs(), () => {
			n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Us);
		};
	}, [
		u,
		f,
		n,
		l
	]), G.useEffect(() => () => {
		u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Xs());
	}, [u, l]), G.useEffect(() => {
		let e = () => p({});
		return document.addEventListener(Bs, e), () => document.removeEventListener(Bs, e);
	}, []), /* @__PURE__ */ X(I.div, {
		...c,
		ref: h,
		style: {
			pointerEvents: b ? x ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: B(e.onFocusCapture, C.onFocusCapture),
		onBlurCapture: B(e.onBlurCapture, C.onBlurCapture),
		onPointerDownCapture: B(e.onPointerDownCapture, S.onPointerDownCapture)
	});
});
Gs.displayName = zs;
var Ks = "DismissableLayerBranch", qs = G.forwardRef((e, t) => {
	let n = G.useContext(Ws), r = G.useRef(null), i = m(t, r);
	return G.useEffect(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), /* @__PURE__ */ X(I.div, {
		...e,
		ref: i
	});
});
qs.displayName = Ks;
function Js(e, t = globalThis?.document) {
	let n = ve(e), r = G.useRef(!1), i = G.useRef(() => {});
	return G.useEffect(() => {
		let e = (e) => {
			if (e.target && !r.current) {
				let r = function() {
					Zs(Vs, n, a, { discrete: !0 });
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
function Ys(e, t = globalThis?.document) {
	let n = ve(e), r = G.useRef(!1);
	return G.useEffect(() => {
		let e = (e) => {
			e.target && !r.current && Zs(Hs, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function Xs() {
	let e = new CustomEvent(Bs);
	document.dispatchEvent(e);
}
function Zs(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? re(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Qs = 0;
function $s() {
	G.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? ec()), document.body.insertAdjacentElement("beforeend", e[1] ?? ec()), Qs++, () => {
			Qs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), Qs--;
		};
	}, []);
}
function ec() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var tc = "focusScope.autoFocusOnMount", nc = "focusScope.autoFocusOnUnmount", rc = {
	bubbles: !1,
	cancelable: !0
}, ic = "FocusScope", ac = G.forwardRef((e, t) => {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = G.useState(null), l = ve(i), u = ve(a), d = G.useRef(null), f = m(t, (e) => c(e)), p = G.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	G.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (p.paused || !s) return;
				let t = e.target;
				s.contains(t) ? d.current = t : fc(d.current, { select: !0 });
			}, t = function(e) {
				if (p.paused || !s) return;
				let t = e.relatedTarget;
				t !== null && (s.contains(t) || fc(d.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && fc(s);
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
	]), G.useEffect(() => {
		if (s) {
			pc.add(p);
			let e = document.activeElement;
			if (!s.contains(e)) {
				let t = new CustomEvent(tc, rc);
				s.addEventListener(tc, l), s.dispatchEvent(t), t.defaultPrevented || (oc(gc(cc(s)), { select: !0 }), document.activeElement === e && fc(s));
			}
			return () => {
				s.removeEventListener(tc, l), setTimeout(() => {
					let t = new CustomEvent(nc, rc);
					s.addEventListener(nc, u), s.dispatchEvent(t), t.defaultPrevented || fc(e ?? document.body, { select: !0 }), s.removeEventListener(nc, u), pc.remove(p);
				}, 0);
			};
		}
	}, [
		s,
		l,
		u,
		p
	]);
	let h = G.useCallback((e) => {
		if (!n && !r || p.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = sc(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && fc(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && fc(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		p.paused
	]);
	return /* @__PURE__ */ X(I.div, {
		tabIndex: -1,
		...o,
		ref: f,
		onKeyDown: h
	});
});
ac.displayName = ic;
function oc(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (fc(r, { select: t }), document.activeElement !== n) return;
}
function sc(e) {
	let t = cc(e);
	return [lc(t, e), lc(t.reverse(), e)];
}
function cc(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function lc(e, t) {
	for (let n of e) if (!uc(n, { upTo: t })) return n;
}
function uc(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function dc(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function fc(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && dc(e) && t && e.select();
	}
}
var pc = mc();
function mc() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = hc(e, t), e.unshift(t);
		},
		remove(t) {
			e = hc(e, t), e[0]?.resume();
		}
	};
}
function hc(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function gc(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region node_modules/@radix-ui/react-id/dist/index.mjs
var _c = G.useId || (() => void 0), vc = 0;
function yc(e) {
	let [t, n] = G.useState(_c());
	return L(() => {
		e || n((e) => e ?? String(vc++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var bc = [
	"top",
	"right",
	"bottom",
	"left"
], xc = Math.min, Sc = Math.max, Cc = Math.round, wc = Math.floor, Tc = (e) => ({
	x: e,
	y: e
}), Ec = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Dc(e, t, n) {
	return Sc(e, xc(t, n));
}
function Oc(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function kc(e) {
	return e.split("-")[0];
}
function Ac(e) {
	return e.split("-")[1];
}
function jc(e) {
	return e === "x" ? "y" : "x";
}
function Mc(e) {
	return e === "y" ? "height" : "width";
}
function Nc(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Pc(e) {
	return jc(Nc(e));
}
function Fc(e, t, n) {
	n === void 0 && (n = !1);
	let r = Ac(e), i = Pc(e), a = Mc(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Wc(o)), [o, Wc(o)];
}
function Ic(e) {
	let t = Wc(e);
	return [
		Lc(e),
		t,
		Lc(t)
	];
}
function Lc(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Rc = ["left", "right"], zc = ["right", "left"], Bc = ["top", "bottom"], Vc = ["bottom", "top"];
function Hc(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? zc : Rc : t ? Rc : zc;
		case "left":
		case "right": return t ? Bc : Vc;
		default: return [];
	}
}
function Uc(e, t, n, r) {
	let i = Ac(e), a = Hc(kc(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Lc)))), a;
}
function Wc(e) {
	let t = kc(e);
	return Ec[t] + e.slice(t.length);
}
function Gc(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Kc(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Gc(e);
}
function qc(e) {
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
function Jc(e, t, n) {
	let { reference: r, floating: i } = e, a = Nc(t), o = Pc(t), s = Mc(o), c = kc(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (Ac(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Yc(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Oc(t, e), p = Kc(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = qc(await i.getClippingRect({
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
	}, y = qc(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Xc = 50, Zc = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Yc
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Jc(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Xc && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Jc(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Qc = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Oc(e, t) || {};
		if (l == null) return {};
		let d = Kc(u), f = {
			x: n,
			y: r
		}, p = Pc(i), m = Mc(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = xc(d[_], T), ee = xc(d[v], T), D = E, O = C - h[m] - ee, k = C / 2 - h[m] / 2 + w, te = Dc(D, k, O), A = !c.arrow && Ac(i) != null && k !== te && a.reference[m] / 2 - (k < D ? E : ee) - h[m] / 2 < 0, j = A ? k < D ? k - D : k - O : 0;
		return {
			[p]: f[p] + j,
			data: {
				[p]: te,
				centerOffset: k - te - j,
				...A && { alignmentOffset: j }
			},
			reset: A
		};
	}
}), $c = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Oc(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = kc(r), _ = Nc(o), v = kc(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Wc(o)] : Ic(o)), x = p !== "none";
			!d && x && b.push(...Uc(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Fc(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Nc(t)) || T.every((e) => Nc(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
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
								let t = Nc(e.placement);
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
function el(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function tl(e) {
	return bc.some((t) => e[t] >= 0);
}
var nl = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Oc(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = el(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: tl(e)
					} };
				}
				case "escaped": {
					let e = el(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: tl(e)
					} };
				}
				default: return {};
			}
		}
	};
}, rl = /* @__PURE__ */ new Set(["left", "top"]);
async function il(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = kc(n), s = Ac(n), c = Nc(n) === "y", l = rl.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Oc(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var al = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await il(t, e);
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
}, ol = function(e) {
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
			} }, ...l } = Oc(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Nc(kc(i)), p = jc(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Dc(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Dc(n, h, r);
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
}, sl = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Oc(e, t), u = {
				x: n,
				y: r
			}, d = Nc(i), f = jc(d), p = u[f], m = u[d], h = Oc(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = rl.has(kc(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, cl = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = Oc(e, t), u = await o.detectOverflow(t, l), d = kc(i), f = Ac(i), p = Nc(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = xc(h - u[g], v), x = xc(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = Sc(u.left, 0), t = Sc(u.right, 0), n = Sc(u.top, 0), r = Sc(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : Sc(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : Sc(u.top, u.bottom));
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
function ll() {
	return typeof window < "u";
}
function ul(e) {
	return pl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function dl(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fl(e) {
	return ((pl(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function pl(e) {
	return ll() ? e instanceof Node || e instanceof dl(e).Node : !1;
}
function ml(e) {
	return ll() ? e instanceof Element || e instanceof dl(e).Element : !1;
}
function hl(e) {
	return ll() ? e instanceof HTMLElement || e instanceof dl(e).HTMLElement : !1;
}
function gl(e) {
	return !ll() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof dl(e).ShadowRoot;
}
function _l(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Ol(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function vl(e) {
	return /^(table|td|th)$/.test(ul(e));
}
function yl(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var bl = /transform|translate|scale|rotate|perspective|filter/, xl = /paint|layout|strict|content/, Sl = (e) => !!e && e !== "none", Cl;
function wl(e) {
	let t = ml(e) ? Ol(e) : e;
	return Sl(t.transform) || Sl(t.translate) || Sl(t.scale) || Sl(t.rotate) || Sl(t.perspective) || !El() && (Sl(t.backdropFilter) || Sl(t.filter)) || bl.test(t.willChange || "") || xl.test(t.contain || "");
}
function Tl(e) {
	let t = Al(e);
	for (; hl(t) && !Dl(t);) {
		if (wl(t)) return t;
		if (yl(t)) return null;
		t = Al(t);
	}
	return null;
}
function El() {
	return Cl ?? (Cl = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Cl;
}
function Dl(e) {
	return /^(html|body|#document)$/.test(ul(e));
}
function Ol(e) {
	return dl(e).getComputedStyle(e);
}
function kl(e) {
	return ml(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Al(e) {
	if (ul(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || gl(e) && e.host || fl(e);
	return gl(t) ? t.host : t;
}
function jl(e) {
	let t = Al(e);
	return Dl(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : hl(t) && _l(t) ? t : jl(t);
}
function Ml(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = jl(e), i = r === e.ownerDocument?.body, a = dl(r);
	if (i) {
		let e = Nl(a);
		return t.concat(a, a.visualViewport || [], _l(r) ? r : [], e && n ? Ml(e) : []);
	} else return t.concat(r, Ml(r, [], n));
}
function Nl(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Pl(e) {
	let t = Ol(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = hl(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Cc(n) !== a || Cc(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Fl(e) {
	return ml(e) ? e : e.contextElement;
}
function Il(e) {
	let t = Fl(e);
	if (!hl(t)) return Tc(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Pl(t), o = (a ? Cc(n.width) : n.width) / r, s = (a ? Cc(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Ll = /* @__PURE__ */ Tc(0);
function Rl(e) {
	let t = dl(e);
	return !El() || !t.visualViewport ? Ll : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function zl(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== dl(e) ? !1 : t;
}
function Bl(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Fl(e), o = Tc(1);
	t && (r ? ml(r) && (o = Il(r)) : o = Il(e));
	let s = zl(a, n, r) ? Rl(a) : Tc(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = dl(a), t = r && ml(r) ? dl(r) : r, n = e, i = Nl(n);
		for (; i && r && t !== n;) {
			let e = Il(i), t = i.getBoundingClientRect(), r = Ol(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = dl(i), i = Nl(n);
		}
	}
	return qc({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Vl(e, t) {
	let n = kl(e).scrollLeft;
	return t ? t.left + n : Bl(fl(e)).left + n;
}
function Hl(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Vl(e, n),
		y: n.top + t.scrollTop
	};
}
function Ul(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = fl(r), s = t ? yl(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Tc(1), u = Tc(0), d = hl(r);
	if ((d || !d && !a) && ((ul(r) !== "body" || _l(o)) && (c = kl(r)), d)) {
		let e = Bl(r);
		l = Il(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Hl(o, c) : Tc(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Wl(e) {
	return Array.from(e.getClientRects());
}
function Gl(e) {
	let t = fl(e), n = kl(e), r = e.ownerDocument.body, i = Sc(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Sc(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Vl(e), s = -n.scrollTop;
	return Ol(r).direction === "rtl" && (o += Sc(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Kl = 25;
function ql(e, t) {
	let n = dl(e), r = fl(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = El();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Vl(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Kl && (a -= o);
	} else l <= Kl && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function Jl(e, t) {
	let n = Bl(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = hl(e) ? Il(e) : Tc(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Yl(e, t, n) {
	let r;
	if (t === "viewport") r = ql(e, n);
	else if (t === "document") r = Gl(fl(e));
	else if (ml(t)) r = Jl(t, n);
	else {
		let n = Rl(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return qc(r);
}
function Xl(e, t) {
	let n = Al(e);
	return n === t || !ml(n) || Dl(n) ? !1 : Ol(n).position === "fixed" || Xl(n, t);
}
function Zl(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Ml(e, [], !1).filter((e) => ml(e) && ul(e) !== "body"), i = null, a = Ol(e).position === "fixed", o = a ? Al(e) : e;
	for (; ml(o) && !Dl(o);) {
		let t = Ol(o), n = wl(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || _l(o) && !n && Xl(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Al(o);
	}
	return t.set(e, r), r;
}
function Ql(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? yl(t) ? [] : Zl(t, this._c) : [].concat(n), r], o = Yl(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Yl(t, a[e], i);
		s = Sc(n.top, s), c = xc(n.right, c), l = xc(n.bottom, l), u = Sc(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function $l(e) {
	let { width: t, height: n } = Pl(e);
	return {
		width: t,
		height: n
	};
}
function eu(e, t, n) {
	let r = hl(t), i = fl(t), a = n === "fixed", o = Bl(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Tc(0);
	function l() {
		c.x = Vl(i);
	}
	if (r || !r && !a) if ((ul(t) !== "body" || _l(i)) && (s = kl(t)), r) {
		let e = Bl(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Hl(i, s) : Tc(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function tu(e) {
	return Ol(e).position === "static";
}
function nu(e, t) {
	if (!hl(e) || Ol(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return fl(e) === n && (n = n.ownerDocument.body), n;
}
function ru(e, t) {
	let n = dl(e);
	if (yl(e)) return n;
	if (!hl(e)) {
		let t = Al(e);
		for (; t && !Dl(t);) {
			if (ml(t) && !tu(t)) return t;
			t = Al(t);
		}
		return n;
	}
	let r = nu(e, t);
	for (; r && vl(r) && tu(r);) r = nu(r, t);
	return r && Dl(r) && tu(r) && !wl(r) ? n : r || Tl(e) || n;
}
var iu = async function(e) {
	let t = this.getOffsetParent || ru, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: eu(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function au(e) {
	return Ol(e).direction === "rtl";
}
var ou = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Ul,
	getDocumentElement: fl,
	getClippingRect: Ql,
	getOffsetParent: ru,
	getElementRects: iu,
	getClientRects: Wl,
	getDimensions: $l,
	getScale: Il,
	isElement: ml,
	isRTL: au
};
function su(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function cu(e, t) {
	let n = null, r, i = fl(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = wc(d), h = wc(i.clientWidth - (u + f)), g = wc(i.clientHeight - (d + p)), _ = wc(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Sc(0, xc(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !su(l, e.getBoundingClientRect()) && o(), y = !1;
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
function lu(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Fl(e), u = i || a ? [...l ? Ml(l) : [], ...t ? Ml(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? cu(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Bl(e) : null;
	c && g();
	function g() {
		let t = Bl(e);
		h && !su(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var uu = al, du = ol, fu = $c, pu = cl, mu = nl, hu = Qc, gu = sl, _u = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: ou,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Zc(e, t, {
		...i,
		platform: a
	});
}, vu = typeof document < "u" ? ft : function() {};
function yu(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!yu(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !yu(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function bu(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xu(e, t) {
	let n = bu(e);
	return Math.round(t * n) / n;
}
function Su(e) {
	let t = G.useRef(e);
	return vu(() => {
		t.current = e;
	}), t;
}
function Cu(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = G.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = G.useState(r);
	yu(f, r) || p(r);
	let [m, h] = G.useState(null), [g, _] = G.useState(null), v = G.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = G.useCallback((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = G.useRef(null), C = G.useRef(null), w = G.useRef(u), T = c != null, E = Su(c), ee = Su(i), D = Su(l), O = G.useCallback(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		ee.current && (e.platform = ee.current), _u(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: D.current !== !1
			};
			k.current && !yu(w.current, t) && (w.current = t, ht.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		ee,
		D
	]);
	vu(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let k = G.useRef(!1);
	vu(() => (k.current = !0, () => {
		k.current = !1;
	}), []), vu(() => {
		if (b && (S.current = b), x && (C.current = x), b && x) {
			if (E.current) return E.current(b, x, O);
			O();
		}
	}, [
		b,
		x,
		O,
		E,
		T
	]);
	let te = G.useMemo(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), A = G.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), j = G.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!A.floating) return e;
		let t = xu(A.floating, u.x), r = xu(A.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...bu(A.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		A.floating,
		u.x,
		u.y
	]);
	return G.useMemo(() => ({
		...u,
		update: O,
		refs: te,
		elements: A,
		floatingStyles: j
	}), [
		u,
		O,
		te,
		A,
		j
	]);
}
var wu = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : hu({
				element: r.current,
				padding: i
			}).fn(n) : r ? hu({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Tu = (e, t) => {
	let n = uu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Eu = (e, t) => {
	let n = du(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Du = (e, t) => ({
	fn: gu(e).fn,
	options: [e, t]
}), Ou = (e, t) => {
	let n = fu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, ku = (e, t) => {
	let n = pu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Au = (e, t) => {
	let n = mu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, ju = (e, t) => {
	let n = wu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Mu = "Arrow", Nu = G.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ X(I.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ X("polygon", { points: "0,0 30,0 15,10" })
	});
});
Nu.displayName = Mu;
var Pu = Nu;
//#endregion
//#region node_modules/@radix-ui/react-use-size/dist/index.mjs
function Fu(e) {
	let [t, n] = G.useState(void 0);
	return L(() => {
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
var Iu = "Popper", [Lu, Ru] = me(Iu), [zu, Bu] = Lu(Iu), Vu = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = G.useState(null);
	return /* @__PURE__ */ X(zu, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		children: n
	});
};
Vu.displayName = Iu;
var Hu = "PopperAnchor", Uu = G.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = Bu(Hu, n), o = G.useRef(null), s = m(t, o), c = G.useRef(null);
	return G.useEffect(() => {
		let e = c.current;
		c.current = r?.current || o.current, e !== c.current && a.onAnchorChange(c.current);
	}), r ? null : /* @__PURE__ */ X(I.div, {
		...i,
		ref: s
	});
});
Uu.displayName = Hu;
var Wu = "PopperContent", [Gu, Ku] = Lu(Wu), qu = G.forwardRef((e, t) => {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: d = "partial", hideWhenDetached: f = !1, updatePositionStrategy: p = "optimized", onPlaced: h, ...g } = e, _ = Bu(Wu, n), [v, y] = G.useState(null), b = m(t, (e) => y(e)), [x, S] = G.useState(null), C = Fu(x), w = C?.width ?? 0, T = C?.height ?? 0, E = r + (a === "center" ? "" : "-" + a), ee = typeof u == "number" ? u : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...u
	}, D = Array.isArray(l) ? l : [l], O = D.length > 0, k = {
		padding: ee,
		boundary: D.filter(Zu),
		altBoundary: O
	}, { refs: te, floatingStyles: A, placement: j, isPositioned: M, middlewareData: N } = Cu({
		strategy: "fixed",
		placement: E,
		whileElementsMounted: (...e) => lu(...e, { animationFrame: p === "always" }),
		elements: { reference: _.anchor },
		middleware: [
			Tu({
				mainAxis: i + T,
				alignmentAxis: o
			}),
			c && Eu({
				mainAxis: !0,
				crossAxis: !1,
				limiter: d === "partial" ? Du() : void 0,
				...k
			}),
			c && Ou({ ...k }),
			ku({
				...k,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			x && ju({
				element: x,
				padding: s
			}),
			Qu({
				arrowWidth: w,
				arrowHeight: T
			}),
			f && Au({
				strategy: "referenceHidden",
				...k
			})
		]
	}), [ne, re] = $u(j), ie = ve(h);
	L(() => {
		M && ie?.();
	}, [M, ie]);
	let ae = N.arrow?.x, oe = N.arrow?.y, se = N.arrow?.centerOffset !== 0, [P, F] = G.useState();
	return L(() => {
		v && F(window.getComputedStyle(v).zIndex);
	}, [v]), /* @__PURE__ */ X("div", {
		ref: te.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...A,
			transform: M ? A.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: P,
			"--radix-popper-transform-origin": [N.transformOrigin?.x, N.transformOrigin?.y].join(" "),
			...N.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ X(Gu, {
			scope: n,
			placedSide: ne,
			onArrowChange: S,
			arrowX: ae,
			arrowY: oe,
			shouldHideArrow: se,
			children: /* @__PURE__ */ X(I.div, {
				"data-side": ne,
				"data-align": re,
				...g,
				ref: b,
				style: {
					...g.style,
					animation: M ? void 0 : "none"
				}
			})
		})
	});
});
qu.displayName = Wu;
var Ju = "PopperArrow", Yu = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Xu = G.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = Ku(Ju, n), a = Yu[i.placedSide];
	return /* @__PURE__ */ X("span", {
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
		children: /* @__PURE__ */ X(Pu, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
Xu.displayName = Ju;
function Zu(e) {
	return e !== null;
}
var Qu = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = $u(n), u = {
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
function $u(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var ed = Vu, td = Uu, nd = qu, rd = Xu, id = "Portal", ad = G.forwardRef((e, t) => {
	let { container: n, ...r } = e, [i, a] = G.useState(!1);
	L(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? gt.createPortal(/* @__PURE__ */ X(I.div, {
		...r,
		ref: t
	}), o) : null;
});
ad.displayName = id;
//#endregion
//#region node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function od(e) {
	let t = /* @__PURE__ */ sd(e), n = G.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = G.Children.toArray(r), o = a.find(ld);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? G.Children.count(e) > 1 ? G.Children.only(null) : G.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ X(t, {
				...i,
				ref: n,
				children: G.isValidElement(e) ? G.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ X(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function sd(e) {
	let t = G.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (G.isValidElement(n)) {
			let e = dd(n), i = ud(r, n.props);
			return n.type !== G.Fragment && (i.ref = t ? O(t, e) : e), G.cloneElement(n, i);
		}
		return G.Children.count(n) > 1 ? G.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var cd = Symbol("radix.slottable");
function ld(e) {
	return G.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === cd;
}
function ud(e, t) {
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
function dd(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var fd = G.useInsertionEffect || L;
function pd({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	let [i, a, o] = md({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0, c = s ? e : i;
	{
		let t = G.useRef(e !== void 0);
		G.useEffect(() => {
			let e = t.current;
			e !== s && console.warn(`${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = s;
		}, [s, r]);
	}
	return [c, G.useCallback((t) => {
		if (s) {
			let n = hd(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
function md({ defaultProp: e, onChange: t }) {
	let [n, r] = G.useState(e), i = G.useRef(n), a = G.useRef(t);
	return fd(() => {
		a.current = t;
	}, [t]), G.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
function hd(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
function gd(e) {
	let t = G.useRef({
		value: e,
		previous: e
	});
	return G.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
//#endregion
//#region node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var _d = Object.freeze({
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
}), vd = "VisuallyHidden", yd = G.forwardRef((e, t) => /* @__PURE__ */ X(I.span, {
	...e,
	ref: t,
	style: {
		..._d,
		...e.style
	}
}));
yd.displayName = vd;
//#endregion
//#region node_modules/aria-hidden/dist/es2015/index.js
var bd = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, xd = /* @__PURE__ */ new WeakMap(), Sd = /* @__PURE__ */ new WeakMap(), Cd = {}, wd = 0, Td = function(e) {
	return e && (e.host || Td(e.parentNode));
}, Ed = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Td(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Dd = function(e, t, n, r) {
	var i = Ed(t, Array.isArray(e) ? e : [e]);
	Cd[n] || (Cd[n] = /* @__PURE__ */ new WeakMap());
	var a = Cd[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (xd.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				xd.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Sd.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), wd++, function() {
		o.forEach(function(e) {
			var t = xd.get(e) - 1, i = a.get(e) - 1;
			xd.set(e, t), a.set(e, i), t || (Sd.has(e) || e.removeAttribute(r), Sd.delete(e)), i || e.removeAttribute(n);
		}), wd--, wd || (xd = /* @__PURE__ */ new WeakMap(), xd = /* @__PURE__ */ new WeakMap(), Sd = /* @__PURE__ */ new WeakMap(), Cd = {});
	};
}, Od = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || bd(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Dd(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, kd = "right-scroll-bar-position", Ad = "width-before-scroll-bar", jd = "with-scroll-bars-hidden", Md = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
function Nd(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
function Pd(e, t) {
	var n = Y(function() {
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
var Fd = typeof window < "u" ? G.useLayoutEffect : G.useEffect, Id = /* @__PURE__ */ new WeakMap();
function Ld(e, t) {
	var n = Pd(t || null, function(t) {
		return e.forEach(function(e) {
			return Nd(e, t);
		});
	});
	return Fd(function() {
		var t = Id.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Nd(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Nd(e, a);
			});
		}
		Id.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function Rd(e) {
	return e;
}
function zd(e, t) {
	t === void 0 && (t = Rd);
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
function Bd(e) {
	e === void 0 && (e = {});
	var t = zd(null);
	return t.options = F({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var Vd = function(e) {
	var t = e.sideCar, n = ue(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return G.createElement(r, F({}, n));
};
Vd.isSideCarExport = !0;
function Hd(e, t) {
	return e.useMedium(t), Vd;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var Ud = Bd(), Wd = function() {}, Gd = G.forwardRef(function(e, t) {
	var n = G.useRef(null), r = G.useState({
		onScrollCapture: Wd,
		onWheelCapture: Wd,
		onTouchMoveCapture: Wd
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = ue(e, [
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
	]), x = f, S = Ld([n, t]), C = F(F({}, b), i);
	return G.createElement(G.Fragment, null, u && G.createElement(x, {
		sideCar: Ud,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? G.cloneElement(G.Children.only(s), F(F({}, C), { ref: S })) : G.createElement(v, F({}, C, {
		className: c,
		ref: S
	}), s));
});
Gd.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Gd.classNames = {
	fullWidth: Ad,
	zeroRight: kd
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var Kd, qd = function() {
	if (Kd) return Kd;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function Jd() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = qd();
	return t && e.setAttribute("nonce", t), e;
}
function Yd(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Xd(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Zd = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Jd()) && (Yd(t, n), Xd(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Qd = function() {
	var e = Zd();
	return function(t, n) {
		G.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, $d = function() {
	var e = Qd();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, ef = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, tf = function(e) {
	return parseInt(e || "", 10) || 0;
}, nf = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		tf(n),
		tf(r),
		tf(i)
	];
}, rf = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return ef;
	var t = nf(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, af = $d(), of = "data-scroll-locked", sf = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${jd} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${of}] {
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
  
  .${kd} {
    right: ${s}px ${r};
  }
  
  .${Ad} {
    margin-right: ${s}px ${r};
  }
  
  .${kd} .${kd} {
    right: 0 ${r};
  }
  
  .${Ad} .${Ad} {
    margin-right: 0 ${r};
  }
  
  body[${of}] {
    ${Md}: ${s}px;
  }
`;
}, cf = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, lf = function() {
	G.useEffect(function() {
		return document.body.setAttribute(of, (cf() + 1).toString()), function() {
			var e = cf() - 1;
			e <= 0 ? document.body.removeAttribute(of) : document.body.setAttribute(of, e.toString());
		};
	}, []);
}, uf = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	lf();
	var a = G.useMemo(function() {
		return rf(i);
	}, [i]);
	return G.createElement(af, { styles: sf(a, !t, i, n ? "" : "!important") });
}, df = !1;
if (typeof window < "u") try {
	var ff = Object.defineProperty({}, "passive", { get: function() {
		return df = !0, !0;
	} });
	window.addEventListener("test", ff, ff), window.removeEventListener("test", ff, ff);
} catch {
	df = !1;
}
var pf = df ? { passive: !1 } : !1, mf = function(e) {
	return e.tagName === "TEXTAREA";
}, hf = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !mf(e) && n[t] === "visible");
}, gf = function(e) {
	return hf(e, "overflowY");
}, _f = function(e) {
	return hf(e, "overflowX");
}, vf = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), xf(e, r)) {
			var i = Sf(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, yf = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, bf = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, xf = function(e, t) {
	return e === "v" ? gf(t) : _f(t);
}, Sf = function(e, t) {
	return e === "v" ? yf(t) : bf(t);
}, Cf = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, wf = function(e, t, n, r, i) {
	var a = Cf(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Sf(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && xf(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Tf = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ef = function(e) {
	return [e.deltaX, e.deltaY];
}, Df = function(e) {
	return e && "current" in e ? e.current : e;
}, Of = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, kf = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Af = 0, jf = [];
function Mf(e) {
	var t = G.useRef([]), n = G.useRef([0, 0]), r = G.useRef(), i = G.useState(Af++)[0], a = G.useState($d)[0], o = G.useRef(e);
	G.useEffect(function() {
		o.current = e;
	}, [e]), G.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = ye([e.lockRef.current], (e.shards || []).map(Df), !0).filter(Boolean);
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
	var s = G.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Tf(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = vf(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = vf(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return wf(h, t, e, h === "h" ? s : c, !0);
	}, []), c = G.useCallback(function(e) {
		var n = e;
		if (!(!jf.length || jf[jf.length - 1] !== a)) {
			var r = "deltaY" in n ? Ef(n) : Tf(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Of(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Df).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = G.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Nf(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = G.useCallback(function(e) {
		n.current = Tf(e), r.current = void 0;
	}, []), d = G.useCallback(function(t) {
		l(t.type, Ef(t), t.target, s(t, e.lockRef.current));
	}, []), f = G.useCallback(function(t) {
		l(t.type, Tf(t), t.target, s(t, e.lockRef.current));
	}, []);
	G.useEffect(function() {
		return jf.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, pf), document.addEventListener("touchmove", c, pf), document.addEventListener("touchstart", u, pf), function() {
			jf = jf.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, pf), document.removeEventListener("touchmove", c, pf), document.removeEventListener("touchstart", u, pf);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return G.createElement(G.Fragment, null, m ? G.createElement(a, { styles: kf(i) }) : null, p ? G.createElement(uf, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Nf(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Pf = Hd(Ud, Mf), Ff = G.forwardRef(function(e, t) {
	return G.createElement(Gd, F({}, e, {
		ref: t,
		sideCar: Pf
	}));
});
Ff.classNames = Gd.classNames;
//#endregion
//#region node_modules/@radix-ui/react-select/dist/index.mjs
var If = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], Lf = [" ", "Enter"], Rf = "Select", [zf, Bf, Vf] = Ls(Rf), [Hf, Uf] = me(Rf, [Vf, Ru]), Wf = Ru(), [Gf, Kf] = Hf(Rf), [qf, Jf] = Hf(Rf), Yf = (e) => {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: p, form: m } = e, h = Wf(t), [g, _] = G.useState(null), [v, y] = G.useState(null), [b, x] = G.useState(!1), S = le(l), [C, w] = pd({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: Rf
	}), [T, E] = pd({
		prop: o,
		defaultProp: s,
		onChange: c,
		caller: Rf
	}), ee = G.useRef(null), D = g ? m || !!g.closest("form") : !0, [O, k] = G.useState(/* @__PURE__ */ new Set()), te = Array.from(O).map((e) => e.props.value).join(";");
	return /* @__PURE__ */ X(ed, {
		...h,
		children: /* @__PURE__ */ Z(Gf, {
			required: p,
			scope: t,
			trigger: g,
			onTriggerChange: _,
			valueNode: v,
			onValueNodeChange: y,
			valueNodeHasChildren: b,
			onValueNodeHasChildrenChange: x,
			contentId: yc(),
			value: T,
			onValueChange: E,
			open: C,
			onOpenChange: w,
			dir: S,
			triggerPointerDownPosRef: ee,
			disabled: f,
			children: [/* @__PURE__ */ X(zf.Provider, {
				scope: t,
				children: /* @__PURE__ */ X(qf, {
					scope: e.__scopeSelect,
					onNativeOptionAdd: G.useCallback((e) => {
						k((t) => new Set(t).add(e));
					}, []),
					onNativeOptionRemove: G.useCallback((e) => {
						k((t) => {
							let n = new Set(t);
							return n.delete(e), n;
						});
					}, []),
					children: n
				})
			}), D ? /* @__PURE__ */ Z(Wp, {
				"aria-hidden": !0,
				required: p,
				tabIndex: -1,
				name: u,
				autoComplete: d,
				value: T,
				onChange: (e) => E(e.target.value),
				disabled: f,
				form: m,
				children: [T === void 0 ? /* @__PURE__ */ X("option", { value: "" }) : null, Array.from(O)]
			}, te) : null]
		})
	});
};
Yf.displayName = Rf;
var Xf = "SelectTrigger", Zf = G.forwardRef((e, t) => {
	let { __scopeSelect: n, disabled: r = !1, ...i } = e, a = Wf(n), o = Kf(Xf, n), s = o.disabled || r, c = m(t, o.onTriggerChange), l = Bf(n), u = G.useRef("touch"), [d, f, p] = Kp((e) => {
		let t = l().filter((e) => !e.disabled), n = qp(t, e, t.find((e) => e.value === o.value));
		n !== void 0 && o.onValueChange(n.value);
	}), h = (e) => {
		s || (o.onOpenChange(!0), p()), e && (o.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ X(td, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ X(I.button, {
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
			"data-placeholder": Gp(o.value) ? "" : void 0,
			...i,
			ref: c,
			onClick: B(i.onClick, (e) => {
				e.currentTarget.focus(), u.current !== "mouse" && h(e);
			}),
			onPointerDown: B(i.onPointerDown, (e) => {
				u.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (h(e), e.preventDefault());
			}),
			onKeyDown: B(i.onKeyDown, (e) => {
				let t = d.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && f(e.key), !(t && e.key === " ") && If.includes(e.key) && (h(), e.preventDefault());
			})
		})
	});
});
Zf.displayName = Xf;
var Qf = "SelectValue", $f = G.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, children: a, placeholder: o = "", ...s } = e, c = Kf(Qf, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = m(t, c.onValueNodeChange);
	return L(() => {
		l(u);
	}, [l, u]), /* @__PURE__ */ X(I.span, {
		...s,
		ref: d,
		style: { pointerEvents: "none" },
		children: Gp(c.value) ? /* @__PURE__ */ X(mt, { children: o }) : a
	});
});
$f.displayName = Qf;
var ep = "SelectIcon", tp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ X(I.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
});
tp.displayName = ep;
var np = "SelectPortal", rp = (e) => /* @__PURE__ */ X(ad, {
	asChild: !0,
	...e
});
rp.displayName = np;
var ip = "SelectContent", ap = G.forwardRef((e, t) => {
	let n = Kf(ip, e.__scopeSelect), [r, i] = G.useState();
	if (L(() => {
		i(new DocumentFragment());
	}, []), !n.open) {
		let t = r;
		return t ? ht.createPortal(/* @__PURE__ */ X(sp, {
			scope: e.__scopeSelect,
			children: /* @__PURE__ */ X(zf.Slot, {
				scope: e.__scopeSelect,
				children: /* @__PURE__ */ X("div", { children: e.children })
			})
		}), t) : null;
	}
	return /* @__PURE__ */ X(dp, {
		...e,
		ref: t
	});
});
ap.displayName = ip;
var op = 10, [sp, cp] = Hf(ip), lp = "SelectContentImpl", up = /* @__PURE__ */ od("SelectContent.RemoveScroll"), dp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, position: r = "item-aligned", onCloseAutoFocus: i, onEscapeKeyDown: a, onPointerDownOutside: o, side: s, sideOffset: c, align: l, alignOffset: u, arrowPadding: d, collisionBoundary: f, collisionPadding: p, sticky: h, hideWhenDetached: g, avoidCollisions: _, ...v } = e, y = Kf(ip, n), [b, x] = G.useState(null), [S, C] = G.useState(null), w = m(t, (e) => x(e)), [T, E] = G.useState(null), [ee, D] = G.useState(null), O = Bf(n), [k, te] = G.useState(!1), A = G.useRef(!1);
	G.useEffect(() => {
		if (b) return Od(b);
	}, [b]), $s();
	let j = G.useCallback((e) => {
		let [t, ...n] = O().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && S && (S.scrollTop = 0), n === r && S && (S.scrollTop = S.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [O, S]), M = G.useCallback(() => j([T, b]), [
		j,
		T,
		b
	]);
	G.useEffect(() => {
		k && M();
	}, [k, M]);
	let { onOpenChange: N, triggerPointerDownPosRef: ne } = y;
	G.useEffect(() => {
		if (b) {
			let e = {
				x: 0,
				y: 0
			}, t = (t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (ne.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (ne.current?.y ?? 0))
				};
			}, n = (n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : b.contains(n.target) || N(!1), document.removeEventListener("pointermove", t), ne.current = null;
			};
			return ne.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		b,
		N,
		ne
	]), G.useEffect(() => {
		let e = () => N(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [N]);
	let [re, ie] = Kp((e) => {
		let t = O().filter((e) => !e.disabled), n = qp(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current.focus());
	}), ae = G.useCallback((e, t, n) => {
		let r = !A.current && !n;
		(y.value !== void 0 && y.value === t || r) && (E(e), r && (A.current = !0));
	}, [y.value]), oe = G.useCallback(() => b?.focus(), [b]), se = G.useCallback((e, t, n) => {
		let r = !A.current && !n;
		(y.value !== void 0 && y.value === t || r) && D(e);
	}, [y.value]), P = r === "popper" ? hp : pp, F = P === hp ? {
		side: s,
		sideOffset: c,
		align: l,
		alignOffset: u,
		arrowPadding: d,
		collisionBoundary: f,
		collisionPadding: p,
		sticky: h,
		hideWhenDetached: g,
		avoidCollisions: _
	} : {};
	return /* @__PURE__ */ X(sp, {
		scope: n,
		content: b,
		viewport: S,
		onViewportChange: C,
		itemRefCallback: ae,
		selectedItem: T,
		onItemLeave: oe,
		itemTextRefCallback: se,
		focusSelectedItem: M,
		selectedItemText: ee,
		position: r,
		isPositioned: k,
		searchRef: re,
		children: /* @__PURE__ */ X(Ff, {
			as: up,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ X(ac, {
				asChild: !0,
				trapped: y.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: B(i, (e) => {
					y.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ X(Gs, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: a,
					onPointerDownOutside: o,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => y.onOpenChange(!1),
					children: /* @__PURE__ */ X(P, {
						role: "listbox",
						id: y.contentId,
						"data-state": y.open ? "open" : "closed",
						dir: y.dir,
						onContextMenu: (e) => e.preventDefault(),
						...v,
						...F,
						onPlaced: () => te(!0),
						ref: w,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...v.style
						},
						onKeyDown: B(v.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && ie(e.key), [
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
								setTimeout(() => j(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
dp.displayName = lp;
var fp = "SelectItemAlignedPosition", pp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, onPlaced: r, ...i } = e, a = Kf(ip, n), o = cp(ip, n), [s, c] = G.useState(null), [l, u] = G.useState(null), d = m(t, (e) => u(e)), f = Bf(n), p = G.useRef(!1), h = G.useRef(!0), { viewport: g, selectedItem: _, selectedItemText: v, focusSelectedItem: y } = o, b = G.useCallback(() => {
		if (a.trigger && a.valueNode && s && l && g && _ && v) {
			let e = a.trigger.getBoundingClientRect(), t = l.getBoundingClientRect(), n = a.valueNode.getBoundingClientRect(), i = v.getBoundingClientRect();
			if (a.dir !== "rtl") {
				let r = i.left - t.left, a = n.left - r, o = e.left - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - op, d = P(a, [op, Math.max(op, u - l)]);
				s.style.minWidth = c + "px", s.style.left = d + "px";
			} else {
				let r = t.right - i.right, a = window.innerWidth - n.right - r, o = window.innerWidth - e.right - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - op, d = P(a, [op, Math.max(op, u - l)]);
				s.style.minWidth = c + "px", s.style.right = d + "px";
			}
			let o = f(), c = window.innerHeight - op * 2, u = g.scrollHeight, d = window.getComputedStyle(l), m = parseInt(d.borderTopWidth, 10), h = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = m + h + u + b + y, S = Math.min(_.offsetHeight * 5, x), C = window.getComputedStyle(g), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - op, ee = c - E, D = _.offsetHeight / 2, O = _.offsetTop + D, k = m + h + O, te = x - k;
			if (k <= E) {
				let e = o.length > 0 && _ === o[o.length - 1].ref.current;
				s.style.bottom = "0px";
				let t = l.clientHeight - g.offsetTop - g.offsetHeight, n = k + Math.max(ee, D + (e ? T : 0) + t + y);
				s.style.height = n + "px";
			} else {
				let e = o.length > 0 && _ === o[0].ref.current;
				s.style.top = "0px";
				let t = Math.max(E, m + g.offsetTop + (e ? w : 0) + D) + te;
				s.style.height = t + "px", g.scrollTop = k - E + g.offsetTop;
			}
			s.style.margin = `${op}px 0`, s.style.minHeight = S + "px", s.style.maxHeight = c + "px", r?.(), requestAnimationFrame(() => p.current = !0);
		}
	}, [
		f,
		a.trigger,
		a.valueNode,
		s,
		l,
		g,
		_,
		v,
		a.dir,
		r
	]);
	L(() => b(), [b]);
	let [x, S] = G.useState();
	return L(() => {
		l && S(window.getComputedStyle(l).zIndex);
	}, [l]), /* @__PURE__ */ X(gp, {
		scope: n,
		contentWrapper: s,
		shouldExpandOnScrollRef: p,
		onScrollButtonChange: G.useCallback((e) => {
			e && h.current === !0 && (b(), y?.(), h.current = !1);
		}, [b, y]),
		children: /* @__PURE__ */ X("div", {
			ref: c,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: x
			},
			children: /* @__PURE__ */ X(I.div, {
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
pp.displayName = fp;
var mp = "SelectPopperPosition", hp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = op, ...a } = e;
	return /* @__PURE__ */ X(nd, {
		...Wf(n),
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
hp.displayName = mp;
var [gp, _p] = Hf(ip, {}), vp = "SelectViewport", yp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, nonce: r, ...i } = e, a = cp(vp, n), o = _p(vp, n), s = m(t, a.onViewportChange), c = G.useRef(0);
	return /* @__PURE__ */ Z(mt, { children: [/* @__PURE__ */ X("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: r
	}), /* @__PURE__ */ X(zf.Slot, {
		scope: n,
		children: /* @__PURE__ */ X(I.div, {
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
						let r = window.innerHeight - op * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
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
yp.displayName = vp;
var bp = "SelectGroup", [xp, Sp] = Hf(bp), Cp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = yc();
	return /* @__PURE__ */ X(xp, {
		scope: n,
		id: i,
		children: /* @__PURE__ */ X(I.div, {
			role: "group",
			"aria-labelledby": i,
			...r,
			ref: t
		})
	});
});
Cp.displayName = bp;
var wp = "SelectLabel", Tp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Sp(wp, n);
	return /* @__PURE__ */ X(I.div, {
		id: i.id,
		...r,
		ref: t
	});
});
Tp.displayName = wp;
var Ep = "SelectItem", [Dp, Op] = Hf(Ep), kp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, value: r, disabled: i = !1, textValue: a, ...o } = e, s = Kf(Ep, n), c = cp(Ep, n), l = s.value === r, [u, d] = G.useState(a ?? ""), [f, p] = G.useState(!1), h = m(t, (e) => c.itemRefCallback?.(e, r, i)), g = yc(), _ = G.useRef("touch"), v = () => {
		i || (s.onValueChange(r), s.onOpenChange(!1));
	};
	if (r === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ X(Dp, {
		scope: n,
		value: r,
		disabled: i,
		textId: g,
		isSelected: l,
		onItemTextChange: G.useCallback((e) => {
			d((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ X(zf.ItemSlot, {
			scope: n,
			value: r,
			disabled: i,
			textValue: u,
			children: /* @__PURE__ */ X(I.div, {
				role: "option",
				"aria-labelledby": g,
				"data-highlighted": f ? "" : void 0,
				"aria-selected": l && f,
				"data-state": l ? "checked" : "unchecked",
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				tabIndex: i ? void 0 : -1,
				...o,
				ref: h,
				onFocus: B(o.onFocus, () => p(!0)),
				onBlur: B(o.onBlur, () => p(!1)),
				onClick: B(o.onClick, () => {
					_.current !== "mouse" && v();
				}),
				onPointerUp: B(o.onPointerUp, () => {
					_.current === "mouse" && v();
				}),
				onPointerDown: B(o.onPointerDown, (e) => {
					_.current = e.pointerType;
				}),
				onPointerMove: B(o.onPointerMove, (e) => {
					_.current = e.pointerType, i ? c.onItemLeave?.() : _.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: B(o.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && c.onItemLeave?.();
				}),
				onKeyDown: B(o.onKeyDown, (e) => {
					c.searchRef?.current !== "" && e.key === " " || (Lf.includes(e.key) && v(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
kp.displayName = Ep;
var Ap = "SelectItemText", jp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, ...a } = e, o = Kf(Ap, n), s = cp(Ap, n), c = Op(Ap, n), l = Jf(Ap, n), [u, d] = G.useState(null), f = m(t, (e) => d(e), c.onItemTextChange, (e) => s.itemTextRefCallback?.(e, c.value, c.disabled)), p = u?.textContent, h = G.useMemo(() => /* @__PURE__ */ X("option", {
		value: c.value,
		disabled: c.disabled,
		children: p
	}, c.value), [
		c.disabled,
		c.value,
		p
	]), { onNativeOptionAdd: g, onNativeOptionRemove: _ } = l;
	return L(() => (g(h), () => _(h)), [
		g,
		_,
		h
	]), /* @__PURE__ */ Z(mt, { children: [/* @__PURE__ */ X(I.span, {
		id: c.textId,
		...a,
		ref: f
	}), c.isSelected && o.valueNode && !o.valueNodeHasChildren ? ht.createPortal(a.children, o.valueNode) : null] });
});
jp.displayName = Ap;
var Mp = "SelectItemIndicator", Np = G.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return Op(Mp, n).isSelected ? /* @__PURE__ */ X(I.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
});
Np.displayName = Mp;
var Pp = "SelectScrollUpButton", Fp = G.forwardRef((e, t) => {
	let n = cp(Pp, e.__scopeSelect), r = _p(Pp, e.__scopeSelect), [i, a] = G.useState(!1), o = m(t, r.onScrollButtonChange);
	return L(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				a(t.scrollTop > 0);
			}, t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ X(Rp, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
Fp.displayName = Pp;
var Ip = "SelectScrollDownButton", Lp = G.forwardRef((e, t) => {
	let n = cp(Ip, e.__scopeSelect), r = _p(Ip, e.__scopeSelect), [i, a] = G.useState(!1), o = m(t, r.onScrollButtonChange);
	return L(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight;
				a(Math.ceil(t.scrollTop) < e);
			}, t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ X(Rp, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
Lp.displayName = Ip;
var Rp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, onAutoScroll: r, ...i } = e, a = cp("SelectScrollButton", n), o = G.useRef(null), s = Bf(n), c = G.useCallback(() => {
		o.current !== null && (window.clearInterval(o.current), o.current = null);
	}, []);
	return G.useEffect(() => () => c(), [c]), L(() => {
		s().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [s]), /* @__PURE__ */ X(I.div, {
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
}), zp = "SelectSeparator", Bp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ X(I.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
});
Bp.displayName = zp;
var Vp = "SelectArrow", Hp = G.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Wf(n), a = Kf(Vp, n), o = cp(Vp, n);
	return a.open && o.position === "popper" ? /* @__PURE__ */ X(rd, {
		...i,
		...r,
		ref: t
	}) : null;
});
Hp.displayName = Vp;
var Up = "SelectBubbleInput", Wp = G.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
	let i = G.useRef(null), a = m(r, i), o = gd(t);
	return G.useEffect(() => {
		let e = i.current;
		if (!e) return;
		let n = window.HTMLSelectElement.prototype, r = Object.getOwnPropertyDescriptor(n, "value").set;
		if (o !== t && r) {
			let n = new Event("change", { bubbles: !0 });
			r.call(e, t), e.dispatchEvent(n);
		}
	}, [o, t]), /* @__PURE__ */ X(I.select, {
		...n,
		style: {
			..._d,
			...n.style
		},
		ref: a,
		defaultValue: t
	});
});
Wp.displayName = Up;
function Gp(e) {
	return e === "" || e === void 0;
}
function Kp(e) {
	let t = ve(e), n = G.useRef(""), r = G.useRef(0), i = G.useCallback((e) => {
		let i = n.current + e;
		t(i), (function e(t) {
			n.current = t, window.clearTimeout(r.current), t !== "" && (r.current = window.setTimeout(() => e(""), 1e3));
		})(i);
	}, [t]), a = G.useCallback(() => {
		n.current = "", window.clearTimeout(r.current);
	}, []);
	return G.useEffect(() => () => window.clearTimeout(r.current), []), [
		n,
		i,
		a
	];
}
function qp(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Jp(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function Jp(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var Yp = Yf, Xp = Zf, Zp = $f, Qp = tp, $p = rp, em = ap, tm = yp, nm = kp, rm = jp, im = Np;
//#endregion
//#region components/ui/select.tsx
function am({ modal: e = !1, ...t }) {
	return /* @__PURE__ */ X(Yp, {
		modal: e,
		...t
	});
}
var om = Zp, sm = G.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ Z(Xp, {
	ref: r,
	className: H("flex h-9 w-full items-center justify-between gap-2 rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2 text-sm text-wx-fg", "placeholder:text-wx-fg-subtle", "focus:border-wx-primary focus:outline-none focus:ring-2 focus:ring-wx-primary/20", "disabled:cursor-not-allowed disabled:bg-wx-bg-elevated/60 disabled:text-wx-fg-muted", "[&>span]:line-clamp-1", e),
	...n,
	children: [t, /* @__PURE__ */ X(Qp, {
		asChild: !0,
		children: /* @__PURE__ */ X(h, {
			size: 14,
			className: "opacity-60",
			"aria-hidden": "true"
		})
	})]
}));
sm.displayName = Xp.displayName;
var cm = G.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, i) => /* @__PURE__ */ X($p, {
	container: w().themeRoot ?? void 0,
	children: /* @__PURE__ */ X(em, {
		ref: i,
		position: n,
		className: H("relative z-2147483602 max-h-72 min-w-32 overflow-hidden rounded-wx-sm border border-wx-border bg-wx-bg text-wx-fg shadow-lg", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1", e),
		...r,
		children: /* @__PURE__ */ X(tm, {
			className: H("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children: t
		})
	})
}));
cm.displayName = em.displayName;
var lm = G.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ Z(nm, {
	ref: r,
	className: H("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-2 pl-7 text-sm outline-none", "focus:bg-wx-bg-elevated focus:text-wx-fg", "data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "data-[state=checked]:font-medium", e),
	...n,
	children: [/* @__PURE__ */ X("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ X(im, { children: /* @__PURE__ */ X(T, {
			size: 12,
			className: "text-wx-primary",
			"aria-hidden": "true"
		}) })
	}), /* @__PURE__ */ X(rm, { children: t })]
}));
lm.displayName = nm.displayName;
//#endregion
//#region components/widget/tabs/profile-tab/system-field-labels.ts
function um(e) {
	return e.replace(/_([a-z])/g, (e, t) => t.toUpperCase());
}
var dm = new Set(/* @__PURE__ */ "avatar.wexioId.telegramId.whatsappId.viberId.instagramId.optInWhatsapp.webVerified.firstName.lastName.username.language.email.phone.company.location.isValid.chatStatus.chatCategory.priority.leadSource.leadStatus.interestLevel.productInterest.budgetRange.purchaseTimeline.lastMessageSentAt.lastMessageReceivedAt.lastSeenAt.firstMessageReceivedAt.isBlocked.registrationDate.aiAvailable.totalMessagesSent.totalMessagesReceived.totalAiMessagesSent.totalBotMessagesSent.totalUserMessagesSent.flowCompletionRate.lastFlowCompleted.totalFlowsStarted.totalFlowsCompleted".split(".")), fm = new Set([
	"chatStatus",
	"chatCategory",
	"priority",
	"leadStatus",
	"interestLevel"
]);
function pm(e, t, n) {
	let r = um(e);
	return dm.has(r) ? n(`systemFields.${r}`) : t;
}
function mm(e, t, n) {
	let r = um(e);
	return fm.has(r) ? n(`systemFieldOptions.${r}.${t}`) : _m(t);
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/options-control.tsx
function hm({ id: e, fieldKey: t, mode: n, options: r, value: i, disabled: a, onChange: o, t: s }) {
	return r.length === 0 ? /* @__PURE__ */ X("p", {
		id: e,
		className: "text-[11px] text-wx-fg-subtle italic",
		children: "No options configured."
	}) : /* @__PURE__ */ Z(am, {
		value: (n === "single" ? i ?? "" : Ds(i)[0] ?? "") || void 0,
		disabled: a,
		onValueChange: (e) => {
			if (e === "__clear__" || !e) {
				o(null);
				return;
			}
			o(n === "single" ? e : JSON.stringify([e]));
		},
		children: [/* @__PURE__ */ X(sm, {
			id: e,
			"aria-label": "Select an option",
			children: /* @__PURE__ */ X(om, { placeholder: "—" })
		}), /* @__PURE__ */ Z(cm, { children: [/* @__PURE__ */ X(lm, {
			value: "__clear__",
			children: "—"
		}), r.map((e) => /* @__PURE__ */ X(lm, {
			value: e,
			children: mm(t, e, s)
		}, e))] })]
	});
}
var gm = new Set([
	"URL",
	"ID",
	"AI",
	"API",
	"VIP",
	"CRM",
	"SMS"
]);
function _m(e) {
	if (!e) return e;
	let t = e.replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(/[\s_-]+/).filter(Boolean);
	return t.length === 0 ? e : t.map((e, t) => {
		let n = e.toUpperCase();
		if (gm.has(n)) return n;
		let r = e.toLowerCase();
		return t === 0 ? r.charAt(0).toUpperCase() + r.slice(1) : r;
	}).join(" ");
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/string-control.tsx
function vm({ id: e, fieldKey: t, value: n, disabled: r, onChange: i }) {
	return /* @__PURE__ */ X("input", {
		id: e,
		type: t === "email" ? "email" : t === "phone" ? "tel" : "text",
		value: n ?? "",
		disabled: r,
		autoComplete: t === "email" ? "email" : t === "phone" ? "tel" : t === "firstName" ? "given-name" : t === "lastName" ? "family-name" : void 0,
		placeholder: t === "phone" ? "+1 555 123 4567" : void 0,
		onChange: (e) => i(e.target.value || null),
		className: Os
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/field-controls/index.tsx
function ym({ id: e, field: t, value: n, onChange: r, t: i }) {
	let a = t.pinned;
	switch (t.type) {
		case "BOOLEAN": return /* @__PURE__ */ X(bs, {
			id: e,
			value: n,
			disabled: a,
			onChange: r
		});
		case "NUMBER": return /* @__PURE__ */ X(As, {
			id: e,
			value: n,
			disabled: a,
			onChange: r
		});
		case "DATE": return /* @__PURE__ */ X(ks, {
			id: e,
			value: n,
			disabled: a,
			onChange: r
		});
		case "ENUM": return /* @__PURE__ */ X(hm, {
			id: e,
			fieldKey: t.key,
			mode: "single",
			options: t.options ?? [],
			value: n,
			disabled: a,
			onChange: r,
			t: i
		});
		case "ARRAY": return /* @__PURE__ */ X(hm, {
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
		default: return /* @__PURE__ */ X(vm, {
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
function bm({ field: e, value: t, onChange: n, error: r, t: i }) {
	let a = e.pinned, o = `wx-profile-${e.key}`;
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ Z("label", {
				htmlFor: o,
				className: "flex items-baseline justify-between gap-2 text-xs font-medium text-wx-fg-muted",
				children: [/* @__PURE__ */ Z("span", {
					className: "inline-flex items-center gap-1",
					children: [
						pm(e.key, e.label, i),
						e.required && /* @__PURE__ */ Z("span", {
							className: "text-wx-danger",
							title: i("requiredHint"),
							children: ["*", /* @__PURE__ */ X("span", {
								className: "sr-only",
								children: i("requiredHint")
							})]
						}),
						a && /* @__PURE__ */ X(rr, {
							size: 11,
							"aria-hidden": "true",
							className: "text-wx-fg-subtle"
						})
					]
				}), a && /* @__PURE__ */ X("span", {
					className: "text-[10px] font-normal text-wx-fg-subtle",
					children: i("pinnedHint")
				})]
			}),
			/* @__PURE__ */ X(ym, {
				id: o,
				field: e,
				value: t,
				onChange: n,
				t: i
			}),
			r && /* @__PURE__ */ X("p", {
				className: "text-[11px] text-wx-danger",
				children: r
			})
		]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/section.tsx
function xm({ eyebrow: e, adornment: t, children: n }) {
	return /* @__PURE__ */ Z("section", {
		className: "mt-6 flex flex-col gap-4 border-wx-border border-t pt-5 first:mt-4 first:border-t-0 first:pt-0",
		children: [/* @__PURE__ */ Z("div", {
			className: "flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ X("h2", {
				className: "text-[11px] font-semibold tracking-[0.08em] text-wx-fg-subtle uppercase",
				children: e
			}), t]
		}), /* @__PURE__ */ X("div", {
			className: "flex flex-col gap-4",
			children: n
		})]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/settings-row.tsx
function Sm({ label: e, hint: t, children: n }) {
	return /* @__PURE__ */ Z("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ Z("div", {
			className: "flex min-w-0 flex-col",
			children: [/* @__PURE__ */ X("span", {
				className: "text-sm font-medium text-wx-fg",
				children: e
			}), t && /* @__PURE__ */ X("span", {
				className: "text-[11px] text-wx-fg-muted",
				children: t
			})]
		}), /* @__PURE__ */ X("div", {
			className: "shrink-0",
			children: n
		})]
	});
}
//#endregion
//#region components/widget/tabs/profile-tab/preferences-section.tsx
var Cm = [
	{
		value: "system",
		icon: cr,
		labelKey: "themeAuto"
	},
	{
		value: "light",
		icon: yr,
		labelKey: "themeLight"
	},
	{
		value: "dark",
		icon: lr,
		labelKey: "themeDark"
	}
];
function wm({ profile: e, locale: t, themeMode: n, prefSaving: r, applyPref: i, onNotificationError: a, t: o }) {
	let s = Ut, c = n === "auto";
	return /* @__PURE__ */ Z(xm, {
		eyebrow: o("preferencesHeading"),
		adornment: r ? /* @__PURE__ */ Z("span", {
			className: "inline-flex items-center gap-1 text-[10px] font-normal text-wx-fg-subtle",
			children: [/* @__PURE__ */ X(rt, {
				size: 10,
				className: "animate-spin",
				"aria-hidden": "true"
			}), o("saving")]
		}) : void 0,
		children: [
			/* @__PURE__ */ X(Sm, {
				label: o("preferenceLanguage"),
				children: /* @__PURE__ */ X("div", {
					className: "w-40",
					children: /* @__PURE__ */ Z(am, {
						value: e.preferences.language ?? t,
						disabled: r === "language",
						onValueChange: (e) => i("language", e || null),
						children: [/* @__PURE__ */ X(sm, {
							"aria-label": o("preferenceLanguage"),
							children: /* @__PURE__ */ X(om, {})
						}), /* @__PURE__ */ X(cm, { children: s.map((e) => /* @__PURE__ */ X(lm, {
							value: e,
							children: Te(e)
						}, e)) })]
					})
				})
			}),
			c && /* @__PURE__ */ X(Sm, {
				label: o("preferenceThemeMode"),
				children: /* @__PURE__ */ X("div", {
					className: "inline-flex items-center gap-0.5 rounded-full bg-wx-bg-elevated p-0.5",
					children: Cm.map(({ value: t, icon: n, labelKey: a }) => {
						let s = (e.preferences.themeMode ?? "system") === t;
						return /* @__PURE__ */ X("button", {
							type: "button",
							"aria-pressed": s,
							"aria-label": o(a),
							title: o(a),
							disabled: r === "themeMode",
							onClick: () => i("themeMode", t),
							className: H("flex h-7 w-9 items-center justify-center rounded-full transition-all", s ? "bg-wx-bg text-wx-fg shadow-[0_1px_3px_rgba(0,0,0,0.08)]" : "text-wx-fg-muted hover:text-wx-fg", "disabled:cursor-not-allowed disabled:opacity-50"),
							children: /* @__PURE__ */ X(n, {
								size: 13,
								"aria-hidden": "true"
							})
						}, t);
					})
				})
			}),
			/* @__PURE__ */ X(Sm, {
				label: o("preferenceDesktopNotifications"),
				hint: o("preferenceDesktopNotificationsHint"),
				children: /* @__PURE__ */ X(ys, {
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
function Tm(e) {
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
function Em(e) {
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
function Dm(e) {
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
function Om(e, t, n) {
	let [r] = Ot(), [i, a] = Y(null), [o, s] = Y(null), c = K(() => s(null), []);
	return {
		apply: K(async (i, o) => {
			if (!e) return;
			if (n) {
				n(i, o), i === "language" && typeof o == "string" && gn(o);
				return;
			}
			a(i), s(null);
			let c = { [i]: o }, l = {
				__typename: "VisitorProfilePreferences",
				...e.preferences,
				...c
			};
			try {
				await r({
					variables: { input: { preferences: c } },
					optimisticResponse: {
						__typename: "Mutation",
						updateVisitorProfile: {
							__typename: "VisitorProfile",
							...e,
							preferences: l
						}
					},
					update: (e, { data: t }) => {
						let n = t?.updateVisitorProfile;
						n && e.writeQuery({
							query: Tt,
							data: { visitorProfile: n }
						});
					}
				}), i === "language" && typeof o == "string" && gn(o);
			} catch (e) {
				s(t(Dm(Tm(e))));
			} finally {
				a(null);
			}
		}, [
			e,
			t,
			r,
			n
		]),
		saving: i,
		error: o,
		clearError: c
	};
}
//#endregion
//#region node_modules/libphonenumber-js/metadata.min.json.js
var km = {
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
function Am(e, t) {
	var n = Array.prototype.slice.call(t);
	return n.push(km), e.apply(this, n);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/tools/semver-compare.js
function jm(e, t) {
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
var Mm = {}.constructor;
function Nm(e) {
	return e != null && e.constructor === Mm;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/isCallingCode.js
var Pm = /^\d+$/;
function Fm(e) {
	return Pm.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/metadata.js
function Im(e) {
	"@babel/helpers - typeof";
	return Im = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Im(e);
}
function Lm(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Rm(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Bm(r.key), r);
	}
}
function zm(e, t, n) {
	return t && Rm(e.prototype, t), n && Rm(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Bm(e) {
	var t = Vm(e, "string");
	return Im(t) == "symbol" ? t : t + "";
}
function Vm(e, t) {
	if (Im(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Im(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Hm = "1.2.0", Um = "1.7.35", Wm = " ext. ", Gm = /* @__PURE__ */ function() {
	function e(t) {
		Lm(this, e), Zm(t), this.metadata = t, th.call(this, t);
	}
	return zm(e, [
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
				if (e && (Fm(e) ? r = e : n = e), t && (r = t), n && n !== "001") {
					var i = this.getCountryMetadata(n);
					if (!i) throw Error(`Unknown country: ${n}`);
					this.numberingPlan = new Km(i, this);
				} else if (r) {
					if (!this.hasCallingCode(r)) throw Error(`Unknown calling code: ${r}`);
					this.numberingPlan = new Km(this.getNumberingPlanMetadata(r), this);
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
}(), Km = /* @__PURE__ */ function() {
	function e(t, n) {
		Lm(this, e), this.globalMetadataObject = n, this.metadata = t, th.call(this, n.metadata);
	}
	return zm(e, [
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
					return new qm(t, e);
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
				if (this.hasTypes() && Xm(this.types(), e)) return new Ym(Xm(this.types(), e), this);
			}
		},
		{
			key: "ext",
			value: function() {
				return this.v1 || this.v2 ? Wm : this.metadata[13] || Wm;
			}
		}
	]);
}(), qm = /* @__PURE__ */ function() {
	function e(t, n) {
		Lm(this, e), this._format = t, this.metadata = n;
	}
	return zm(e, [
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
				return !!(this.nationalPrefixFormattingRule() && !Jm.test(this.nationalPrefixFormattingRule()));
			}
		},
		{
			key: "internationalFormat",
			value: function() {
				return this._format[5] || this.format();
			}
		}
	]);
}(), Jm = /^\(?\$1\)?$/, Ym = /* @__PURE__ */ function() {
	function e(t, n) {
		Lm(this, e), this.type = t, this.metadata = n;
	}
	return zm(e, [{
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
function Xm(e, t) {
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
function Zm(e) {
	if (!e) throw Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
	if (!Nm(e) || !Nm(e.countries)) throw Error(`[libphonenumber-js] \`metadata\` argument was passed but it's not a valid metadata. Must be an object having \`.countries\` child object property. Got ${Nm(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + Qm(e) + ": " + e}.`);
}
/* istanbul ignore next */
var Qm = function(e) {
	return Im(e);
};
function $m(e, t) {
	var n = new Gm(t);
	if (n.hasCountry(e)) return n.selectNumberingPlan(e).countryCallingCode();
	throw Error(`Unknown country: ${e}`);
}
function eh(e, t) {
	return t.countries.hasOwnProperty(e);
}
function th(e) {
	var t = e.version;
	typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? jm(t, Hm) === -1 ? this.v2 = !0 : jm(t, Um) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
function nh(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = rh(e)) || t && e && typeof e.length == "number") {
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
function rh(e, t) {
	if (e) {
		if (typeof e == "string") return ih(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ih(e, t) : void 0;
	}
}
function ih(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function ah(e, t) {
	for (var n = e.slice(), r = nh(t), i; !(i = r()).done;) {
		var a = i.value;
		e.indexOf(a) < 0 && n.push(a);
	}
	return n.sort(function(e, t) {
		return e - t;
	});
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
function oh(e, t, n) {
	return sh(e, void 0, t, n);
}
function sh(e, t, n, r) {
	n && (r = new Gm(r.metadata), r.selectNumberingPlan(n));
	var i = r.type(t), a = i && i.possibleLengths() || r.possibleLengths();
	if (!a) return "IS_POSSIBLE";
	if (t === "FIXED_LINE_OR_MOBILE") {
		/* istanbul ignore next */
		if (!r.type("FIXED_LINE")) return sh(e, "MOBILE", n, r);
		var o = r.type("MOBILE");
		o && (a = ah(a, o.possibleLengths()));
	} else if (t && !i) return "INVALID_LENGTH";
	var s = e.length, c = a[0];
	return c === s ? "IS_POSSIBLE" : c > s ? "TOO_SHORT" : a[a.length - 1] < s ? "TOO_LONG" : a.indexOf(s, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
//#endregion
//#region node_modules/libphonenumber-js/es6/isPossible.js
function ch(e, t, n) {
	/* istanbul ignore if */
	t === void 0 && (t = {});
	var r = new Gm(n);
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
	if (r.possibleLengths()) return lh(e.phone || e.nationalNumber, r);
	if (e.countryCallingCode && r.isNonGeographicCallingCode(e.countryCallingCode)) return !0;
	throw Error("Missing \"possibleLengths\" in metadata. Perhaps the metadata has been generated before v1.0.18.");
}
function lh(e, t) {
	switch (oh(e, void 0, t)) {
		case "IS_POSSIBLE": return !0;
		default: return !1;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
function uh(e, t) {
	return e = e || "", RegExp("^(?:" + t + ")$").test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getNumberType.js
function dh(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = fh(e)) || t && e && typeof e.length == "number") {
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
function fh(e, t) {
	if (e) {
		if (typeof e == "string") return ph(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ph(e, t) : void 0;
	}
}
function ph(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var mh = [
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
function hh(e, t, n) {
	if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
		var r = new Gm(n);
		r.selectNumberingPlan(e.country || e.countryCallingCode);
		var i = t.v2 ? e.nationalNumber : e.phone;
		if (uh(i, r.nationalNumberPattern())) {
			if (gh(i, "FIXED_LINE", r)) return r.type("MOBILE") && r.type("MOBILE").pattern() === "" || !r.type("MOBILE") || gh(i, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
			for (var a = dh(mh), o; !(o = a()).done;) {
				var s = o.value;
				if (gh(i, s, r)) return s;
			}
		}
	}
}
function gh(e, t, n) {
	var r = n.type(t);
	return !r || !r.pattern() || r.possibleLengths() && r.possibleLengths().indexOf(e.length) < 0 ? !1 : uh(e, r.pattern());
}
//#endregion
//#region node_modules/libphonenumber-js/es6/isValid.js
function _h(e, t, n) {
	t = t || {};
	var r = new Gm(n);
	return r.selectNumberingPlan(e.country || e.countryCallingCode), r.hasTypes() ? hh(e, t, r.metadata) !== void 0 : uh(t.v2 ? e.nationalNumber : e.phone, r.nationalNumberPattern());
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/isCountryCode.js
var vh = /^[A-Z]{2}$/;
function yh(e) {
	return vh.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getCountryAndCallingCodeFromOneOfThem.js
var bh = !1;
function xh(e, t) {
	var n, r, i = new Gm(t);
	return yh(e) ? (n = e, i.selectNumberingPlan(n), r = i.countryCallingCode()) : (r = e, bh && i.isNonGeographicCallingCode(r) && (n = "001")), {
		country: n,
		callingCode: r
	};
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
function Sh(e, t, n) {
	var r = new Gm(n).getCountryCodesForCallingCode(e);
	return r ? r.filter(function(e) {
		return Ch(t, e, n);
	}) : [];
}
function Ch(e, t, n) {
	var r = new Gm(n);
	return r.selectNumberingPlan(t), r.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/constants.js
var wh = "0-9０-９٠-٩۰-۹", Th = "-‐-―−ー－／/．. \xA0­​⁠　()（）［］\\[\\]~⁓∼～", Eh = "+＋", Dh = RegExp("([" + wh + "])");
function Oh(e, t, n, r) {
	if (t) {
		var i = new Gm(r);
		i.selectNumberingPlan(t || n);
		var a = new RegExp(i.IDDPrefix());
		if (e.search(a) === 0) {
			e = e.slice(e.match(a)[0].length);
			var o = e.match(Dh);
			if (!(o && o[1] != null && o[1].length > 0 && o[1] === "0")) return e;
		}
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
function kh(e, t) {
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
function Ah(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = jh(e)) || t && e && typeof e.length == "number") {
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
function jh(e, t) {
	if (e) {
		if (typeof e == "string") return Mh(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Mh(e, t) : void 0;
	}
}
function Mh(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Nh(e, t, n) {
	for (var r = new Gm(n), i = Ah(t), a; !(a = i()).done;) {
		var o = a.value;
		if (r.selectNumberingPlan(o), r.leadingDigits()) {
			if (e && e.search(r.leadingDigits()) === 0) return o;
		} else if (hh({
			phone: e,
			country: o
		}, void 0, r.metadata)) return o;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
var Ph = !1;
function Fh(e, t) {
	var n = t.nationalNumber, r = t.metadata;
	/* istanbul ignore if */
	if (Ph && r.isNonGeographicCallingCode(e)) return "001";
	var i = r.getCountryCodesForCallingCode(e);
	if (i) return i.length === 1 ? i[0] : Nh(n, i, r.metadata);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
function Ih(e, t, n) {
	var r = kh(e, n), i = r.carrierCode, a = r.nationalNumber;
	return a !== e && (!Lh(e, a, n) || n.numberingPlan.possibleLengths() && (t || (t = Fh(n.numberingPlan.callingCode(), {
		nationalNumber: a,
		metadata: n
	})), !Rh(a, t, n))) ? { nationalNumber: e } : {
		nationalNumber: a,
		carrierCode: i
	};
}
function Lh(e, t, n) {
	return !(uh(e, n.nationalNumberPattern()) && !uh(t, n.nationalNumberPattern()));
}
function Rh(e, t, n) {
	switch (oh(e, t, n)) {
		case "TOO_SHORT":
		case "INVALID_LENGTH": return !1;
		default: return !0;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
function zh(e, t, n, r, i) {
	if (!(t || n || r)) return { number: e };
	var a = t || n ? $m(t || n, i) : r;
	if (e.indexOf(a) === 0) {
		var o = new Gm(i);
		o.selectNumberingPlan(t || n || r);
		var s = e.slice(a.length), c = Ih(s, void 0, o).nationalNumber, l = Ih(e, void 0, o).nationalNumber;
		if (!uh(l, o.nationalNumberPattern()) && uh(c, o.nationalNumberPattern()) || oh(l, void 0, o) === "TOO_LONG") return {
			countryCallingCode: a,
			number: s
		};
	}
	return { number: e };
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
function Bh(e, t, n, r, i) {
	if (!e) return {};
	var a;
	if (e[0] !== "+") {
		var o = Oh(e, t || n, r, i);
		if (o && o !== e) a = !0, e = "+" + o;
		else {
			if (t || n || r) {
				var s = zh(e, t, n, r, i), c = s.countryCallingCode, l = s.number;
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
	for (var u = new Gm(i), d = 2; d - 1 <= 3 && d <= e.length;) {
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
function Vh(e) {
	return e.replace(RegExp(`[${Th}]+`, "g"), " ").trim();
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
var Hh = /(\$\d)/;
function Uh(e, t, n) {
	var r = n.useInternationalFormat, i = n.withNationalPrefix;
	n.carrierCode, n.metadata;
	var a = e.replace(new RegExp(t.pattern()), r ? t.internationalFormat() : i && t.nationalPrefixFormattingRule() ? t.format().replace(Hh, t.nationalPrefixFormattingRule()) : t.format());
	return r ? Vh(a) : a;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
var Wh = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function Gh(e, t, n) {
	var r = new Gm(n);
	if (r.selectNumberingPlan(e || t), r.defaultIDDPrefix()) return r.defaultIDDPrefix();
	if (Wh.test(r.IDDPrefix())) return r.IDDPrefix();
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
var Kh = ";ext=", qh = function(e) {
	return `([${wh}]{1,${e}})`;
};
function Jh(e) {
	var t = "20", n = "15", r = "9", i = "6", a = "[ \xA0\\t,]*", o = "[:\\.．]?[ \xA0\\t,-]*", s = "#?", c = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", l = "(?:[xｘ#＃~～]|int|ｉｎｔ)", u = "[- ]+", d = "[ \xA0\\t]*", f = "(?:,{2}|;)", p = Kh + qh(t), m = a + c + o + qh(t) + s, h = a + l + o + qh(r) + s, g = u + qh(i) + "#", _ = d + f + o + qh(n) + s, v = d + "(?:,)+" + o + qh(r) + s;
	return p + "|" + m + "|" + h + "|" + g + "|" + _ + "|" + v;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
var Yh = "[" + wh + "]{2}", Xh = "[" + Eh + "]{0,1}(?:[" + Th + "]*[" + wh + "]){3,}[" + Th + wh + "]*", Zh = RegExp("^[" + Eh + "]{0,1}(?:[" + Th + "]*[" + wh + "]){1,2}$", "i"), Qh = Xh + "(?:" + Jh() + ")?", $h = RegExp("^" + Yh + "$|^" + Qh + "$", "i");
function eg(e) {
	return e.length >= 2 && $h.test(e);
}
function tg(e) {
	return Zh.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/RFC3966.js
function ng(e) {
	var t = e.number, n = e.ext;
	if (!t) return "";
	if (t[0] !== "+") throw Error("\"formatRFC3966()\" expects \"number\" to be in E.164 format.");
	return `tel:${t}${n ? ";ext=" + n : ""}`;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/format.js
var rg = { formatExtension: function(e, t, n) {
	return `${e}${n.ext()}${t}`;
} };
function ig(e, t, n, r) {
	n = n ? lg({}, rg, n) : rg;
	var i = new Gm(r);
	if (e.country && e.country !== "001") {
		if (!i.hasCountry(e.country)) throw Error(`Unknown country: ${e.country}`);
		i.selectNumberingPlan(e.country);
	} else if (e.countryCallingCode) i.selectNumberingPlan(e.countryCallingCode);
	else return e.phone || "";
	var a = i.countryCallingCode(), o = n.v2 ? e.nationalNumber : e.phone, s;
	switch (t) {
		case "NATIONAL": return o ? (s = ag(o, e.carrierCode, "NATIONAL", i, n), sg(s, e.ext, i, n.formatExtension)) : "";
		case "INTERNATIONAL": return o ? (s = ag(o, null, "INTERNATIONAL", i, n), s = `+${a} ${s}`, sg(s, e.ext, i, n.formatExtension)) : `+${a}`;
		case "E.164": return `+${a}${o}`;
		case "RFC3966": return ng({
			number: `+${a}${o}`,
			ext: e.ext
		});
		case "IDD":
			if (!n.fromCountry) return;
			var c = cg(o, e.carrierCode, a, n.fromCountry, i);
			return c ? sg(c, e.ext, i, n.formatExtension) : void 0;
		default: throw Error(`Unknown "format" argument passed to "formatNumber()": "${t}"`);
	}
}
function ag(e, t, n, r, i) {
	var a = og(r.formats(), e);
	return a ? Uh(e, a, {
		useInternationalFormat: n === "INTERNATIONAL",
		withNationalPrefix: !(a.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && i && i.nationalPrefix === !1),
		carrierCode: t,
		metadata: r
	}) : e;
}
function og(e, t) {
	return ug(e, function(e) {
		if (e.leadingDigitsPatterns().length > 0) {
			var n = e.leadingDigitsPatterns()[e.leadingDigitsPatterns().length - 1];
			if (t.search(n) !== 0) return !1;
		}
		return uh(t, e.pattern());
	});
}
function sg(e, t, n, r) {
	return t ? r(e, t, n) : e;
}
function cg(e, t, n, r, i) {
	if ($m(r, i.metadata) === n) {
		var a = ag(e, t, "NATIONAL", i);
		return n === "1" ? n + " " + a : a;
	}
	var o = Gh(r, void 0, i.metadata);
	if (o) return `${o} ${n} ${ag(e, null, "INTERNATIONAL", i)}`;
}
function lg() {
	for (var e = 1, t = [...arguments]; e < t.length;) {
		if (t[e]) for (var n in t[e]) t[0][n] = t[e][n];
		e++;
	}
	return t[0];
}
function ug(e, t) {
	for (var n = 0; n < e.length;) {
		if (t(e[n])) return e[n];
		n++;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/PhoneNumber.js
function dg(e) {
	"@babel/helpers - typeof";
	return dg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, dg(e);
}
function fg(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function pg(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? fg(Object(n), !0).forEach(function(t) {
			mg(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fg(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function mg(e, t, n) {
	return (t = vg(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function hg(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function gg(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, vg(r.key), r);
	}
}
function _g(e, t, n) {
	return t && gg(e.prototype, t), n && gg(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vg(e) {
	var t = yg(e, "string");
	return dg(t) == "symbol" ? t : t + "";
}
function yg(e, t) {
	if (dg(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (dg(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var bg = /* @__PURE__ */ function() {
	function e(t, n, r) {
		if (hg(this, e), !t) throw TypeError("First argument is required");
		if (typeof t != "string") throw TypeError("First argument must be a string");
		if (t[0] === "+" && !n) throw TypeError("`metadata` argument not passed");
		if (Nm(n) && Nm(n.countries)) {
			r = n;
			var i = t;
			if (!xg.test(i)) throw Error("Invalid `number` argument passed: must consist of a \"+\" followed by digits");
			var a = Bh(i, void 0, void 0, void 0, r), o = a.countryCallingCode;
			if (n = a.number, t = o, !n) throw Error("Invalid `number` argument passed: too short");
		}
		if (!n) throw TypeError("`nationalNumber` argument is required");
		if (typeof n != "string") throw TypeError("`nationalNumber` argument must be a string");
		Zm(r);
		var s = xh(t, r), c = s.country, l = s.callingCode;
		this.country = c, this.countryCallingCode = l, this.nationalNumber = n, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
			return r;
		};
	}
	return _g(e, [
		{
			key: "setExt",
			value: function(e) {
				this.ext = e;
			}
		},
		{
			key: "getPossibleCountries",
			value: function() {
				return this.country ? [this.country] : Sh(this.countryCallingCode, this.nationalNumber, this.getMetadata());
			}
		},
		{
			key: "isPossible",
			value: function() {
				return ch(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "isValid",
			value: function() {
				return _h(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "isNonGeographic",
			value: function() {
				return new Gm(this.getMetadata()).isNonGeographicCallingCode(this.countryCallingCode);
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
				return hh(this, { v2: !0 }, this.getMetadata());
			}
		},
		{
			key: "format",
			value: function(e, t) {
				return ig(this, e, t ? pg(pg({}, t), {}, { v2: !0 }) : { v2: !0 }, this.getMetadata());
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
}(), xg = /^\+\d+$/;
//#endregion
//#region node_modules/libphonenumber-js/es6/ParseError.js
function Sg(e) {
	"@babel/helpers - typeof";
	return Sg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Sg(e);
}
function Cg(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Tg(r.key), r);
	}
}
function wg(e, t, n) {
	return t && Cg(e.prototype, t), n && Cg(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Tg(e) {
	var t = Eg(e, "string");
	return Sg(t) == "symbol" ? t : t + "";
}
function Eg(e, t) {
	if (Sg(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Sg(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Dg(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Og(e, t, n) {
	return t = Lg(t), kg(e, Pg() ? Reflect.construct(t, n || [], Lg(e).constructor) : t.apply(e, n));
}
function kg(e, t) {
	if (t && (Sg(t) == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Ag(e);
}
function Ag(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function jg(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ig(e, t);
}
function Mg(e) {
	var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
	return Mg = function(e) {
		if (e === null || !Fg(e)) return e;
		if (typeof e != "function") throw TypeError("Super expression must either be null or a function");
		if (t !== void 0) {
			if (t.has(e)) return t.get(e);
			t.set(e, n);
		}
		function n() {
			return Ng(e, arguments, Lg(this).constructor);
		}
		return n.prototype = Object.create(e.prototype, { constructor: {
			value: n,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), Ig(n, e);
	}, Mg(e);
}
function Ng(e, t, n) {
	if (Pg()) return Reflect.construct.apply(null, arguments);
	var r = [null];
	r.push.apply(r, t);
	var i = new (e.bind.apply(e, r))();
	return n && Ig(i, n.prototype), i;
}
function Pg() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (Pg = function() {
		return !!e;
	})();
}
function Fg(e) {
	try {
		return Function.toString.call(e).indexOf("[native code]") !== -1;
	} catch {
		return typeof e == "function";
	}
}
function Ig(e, t) {
	return Ig = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Ig(e, t);
}
function Lg(e) {
	return Lg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Lg(e);
}
var Rg = /* @__PURE__ */ function(e) {
	function t(e) {
		var n;
		return Dg(this, t), n = Og(this, t, [e]), Object.setPrototypeOf(n, t.prototype), n.name = n.constructor.name, n;
	}
	return jg(t, e), wg(t);
}(/* @__PURE__ */ Mg(Error)), zg = RegExp("(?:" + Jh() + ")$", "i");
function Bg(e) {
	var t = e.search(zg);
	if (t < 0) return {};
	for (var n = e.slice(0, t), r = e.match(zg), i = 1; i < r.length;) {
		if (r[i]) return {
			number: n,
			ext: r[i]
		};
		i++;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/parseDigits.js
var Vg = {
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
function Hg(e) {
	return Vg[e];
}
//#endregion
//#region node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
function Ug(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = Wg(e)) || t && e && typeof e.length == "number") {
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
function Wg(e, t) {
	if (e) {
		if (typeof e == "string") return Gg(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gg(e, t) : void 0;
	}
}
function Gg(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Kg(e) {
	for (var t = "", n = Ug(e.split("")), r; !(r = n()).done;) {
		var i = r.value;
		t += qg(i, t) || "";
	}
	return t;
}
function qg(e, t, n) {
	if (e === "+") {
		if (t) {
			typeof n == "function" && n("end");
			return;
		}
		return "+";
	}
	return Hg(e);
}
var Jg = "([" + wh + "]|[\\-\\.\\(\\)]?)", Yg = "^\\+" + Jg + "*[" + wh + "]" + Jg + "*$", Xg = new RegExp(Yg, "g"), Zg = wh, Qg = "[" + Zg + "]+((\\-)*[" + Zg + "])*", $g = "[a-zA-Z]+((\\-)*[" + Zg + "])*", e_ = "^(" + Qg + "\\.)*" + $g + "\\.?$", t_ = new RegExp(e_, "g"), n_ = "tel:", r_ = ";phone-context=", i_ = ";isub=";
function a_(e) {
	var t = e.indexOf(r_);
	if (t < 0) return null;
	var n = t + r_.length;
	if (n >= e.length) return "";
	var r = e.indexOf(";", n);
	return r >= 0 ? e.substring(n, r) : e.substring(n);
}
function o_(e) {
	return e === null ? !0 : e.length === 0 ? !1 : Xg.test(e) || t_.test(e);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
function s_(e, t) {
	var n = t.extractFormattedPhoneNumber, r = a_(e);
	if (!o_(r)) throw new Rg("NOT_A_NUMBER");
	var i;
	if (r === null) i = n(e) || "";
	else {
		i = "", r.charAt(0) === "+" && (i += r);
		var a = e.indexOf(n_), o = a >= 0 ? a + n_.length : 0, s = e.indexOf(r_);
		i += e.substring(o, s);
	}
	var c = i.indexOf(i_);
	if (c > 0 && (i = i.substring(0, c)), i !== "") return i;
}
//#endregion
//#region node_modules/libphonenumber-js/es6/parse.js
var c_ = 250, l_ = RegExp("[" + Eh + wh + "]"), u_ = RegExp("[^" + wh + "#]+$"), d_ = !1;
function f_(e, t, n) {
	t = t || {};
	var r = new Gm(n);
	if (t.defaultCountry && !r.hasCountry(t.defaultCountry)) throw t.v2 ? new Rg("INVALID_COUNTRY") : Error(`Unknown country: ${t.defaultCountry}`);
	var i = m_(e, t.v2, t.extract), a = i.number, o = i.ext, s = i.error;
	if (!a) {
		if (t.v2) throw s === "TOO_SHORT" ? new Rg("TOO_SHORT") : new Rg("NOT_A_NUMBER");
		return {};
	}
	var c = g_(a, t.defaultCountry, t.defaultCallingCode, r), l = c.country, u = c.nationalNumber, d = c.countryCallingCode, f = c.countryCallingCodeSource, p = c.carrierCode;
	if (!r.hasSelectedNumberingPlan()) {
		if (t.v2) throw new Rg("INVALID_COUNTRY");
		return {};
	}
	if (!u || u.length < 2) {
		/* istanbul ignore if */
		if (t.v2) throw new Rg("TOO_SHORT");
		return {};
	}
	if (u.length > 17) {
		if (t.v2) throw new Rg("TOO_LONG");
		return {};
	}
	if (t.v2) {
		var m = new bg(d, u, r.metadata);
		return l && (m.country = l), p && (m.carrierCode = p), o && (m.ext = o), m.__countryCallingCodeSource = f, m;
	}
	var h = (t.extended ? r.hasSelectedNumberingPlan() : l) ? uh(u, r.nationalNumberPattern()) : !1;
	return t.extended ? {
		country: l,
		countryCallingCode: d,
		carrierCode: p,
		valid: h,
		possible: h ? !0 : !!(t.extended === !0 && r.possibleLengths() && lh(u, r)),
		phone: u,
		ext: o
	} : h ? h_(l, u, o) : {};
}
function p_(e, t, n) {
	if (e) {
		if (e.length > c_) {
			if (n) throw new Rg("TOO_LONG");
			return;
		}
		if (t === !1) return e;
		var r = e.search(l_);
		if (!(r < 0)) return e.slice(r).replace(u_, "");
	}
}
function m_(e, t, n) {
	var r = s_(e, { extractFormattedPhoneNumber: function(e) {
		return p_(e, n, t);
	} });
	if (!r) return {};
	if (!eg(r)) return tg(r) ? { error: "TOO_SHORT" } : {};
	var i = Bg(r);
	return i.ext ? i : { number: r };
}
function h_(e, t, n) {
	var r = {
		country: e,
		phone: t
	};
	return n && (r.ext = n), r;
}
function g_(e, t, n, r) {
	var i = Bh(Kg(e), void 0, t, n, r.metadata), a = i.countryCallingCodeSource, o = i.countryCallingCode, s = i.number, c;
	if (o) r.selectNumberingPlan(o);
	else if (s && (t || n)) t ? (c = t, r.selectNumberingPlan(t), o = r.numberingPlan.callingCode()) : (r.selectNumberingPlan(n), o = n, d_ && r.isNonGeographicCallingCode(o) && (c = "001"));
	else return {};
	if (!s) return {
		countryCallingCodeSource: a,
		countryCallingCode: o
	};
	var l = Ih(Kg(s), void 0, r), u = l.nationalNumber, d = l.carrierCode, f = Fh(o, {
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
function __(e) {
	"@babel/helpers - typeof";
	return __ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, __(e);
}
function v_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function y_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? v_(Object(n), !0).forEach(function(t) {
			b_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function b_(e, t, n) {
	return (t = x_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function x_(e) {
	var t = S_(e, "string");
	return __(t) == "symbol" ? t : t + "";
}
function S_(e, t) {
	if (__(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (__(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function C_(e, t, n) {
	return f_(e, y_(y_({}, t), {}, { v2: !0 }), n);
}
//#endregion
//#region node_modules/libphonenumber-js/es6/normalizeArguments.js
function w_(e) {
	"@babel/helpers - typeof";
	return w_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, w_(e);
}
function T_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function E_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? T_(Object(n), !0).forEach(function(t) {
			D_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function D_(e, t, n) {
	return (t = O_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function O_(e) {
	var t = k_(e, "string");
	return w_(t) == "symbol" ? t : t + "";
}
function k_(e, t) {
	if (w_(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (w_(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function A_(e, t) {
	return F_(e) || P_(e, t) || M_(e, t) || j_();
}
function j_() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function M_(e, t) {
	if (e) {
		if (typeof e == "string") return N_(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? N_(e, t) : void 0;
	}
}
function N_(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function P_(e, t) {
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
function F_(e) {
	if (Array.isArray(e)) return e;
}
function I_(e) {
	var t = A_(Array.prototype.slice.call(e), 4), n = t[0], r = t[1], i = t[2], a = t[3], o, s, c;
	if (typeof n == "string") o = n;
	else throw TypeError("A text for parsing must be a string.");
	if (!r || typeof r == "string") a ? (s = i, c = a) : (s = void 0, c = i), r && (s = E_({ defaultCountry: r }, s));
	else if (Nm(r)) i ? (s = r, c = i) : c = r;
	else throw Error(`Invalid second argument: ${r}`);
	return {
		text: o,
		options: s,
		metadata: c
	};
}
//#endregion
//#region node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
function L_(e) {
	"@babel/helpers - typeof";
	return L_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, L_(e);
}
function R_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function z_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? R_(Object(n), !0).forEach(function(t) {
			B_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function B_(e, t, n) {
	return (t = V_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function V_(e) {
	var t = H_(e, "string");
	return L_(t) == "symbol" ? t : t + "";
}
function H_(e, t) {
	if (L_(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (L_(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function U_(e, t, n) {
	t && t.defaultCountry && !eh(t.defaultCountry, n) && (t = z_(z_({}, t), {}, { defaultCountry: void 0 }));
	try {
		return C_(e, t, n);
	} catch (e) {
		/* istanbul ignore else */
		if (!(e instanceof Rg)) throw e;
	}
}
//#endregion
//#region node_modules/libphonenumber-js/es6/isValidPhoneNumber.js
function W_(e) {
	"@babel/helpers - typeof";
	return W_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, W_(e);
}
function G_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function K_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? G_(Object(n), !0).forEach(function(t) {
			q_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function q_(e, t, n) {
	return (t = J_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function J_(e) {
	var t = Y_(e, "string");
	return W_(t) == "symbol" ? t : t + "";
}
function Y_(e, t) {
	if (W_(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (W_(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function X_() {
	var e = I_(arguments), t = e.text, n = e.options, r = e.metadata;
	n = K_(K_({}, n), {}, { extract: !1 });
	var i = U_(t, n, r);
	return i && i.isValid() || !1;
}
//#endregion
//#region node_modules/libphonenumber-js/min/exports/isValidPhoneNumber.js
function Z_() {
	return Am(X_, arguments);
}
//#endregion
//#region components/widget/tabs/profile-tab/validators.ts
var Q_ = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function $_(e) {
	return e ? Q_.test(e.trim()) ? null : "invalidEmail" : null;
}
function ev(e) {
	if (!e) return null;
	let t = e.trim();
	return t.startsWith("+") && Z_(t) ? null : "invalidPhone";
}
function tv(e, t) {
	return t == null || t === "" ? null : e.key === "email" ? $_(t) : e.key === "phone" ? ev(t) : null;
}
//#endregion
//#region components/widget/tabs/profile-tab/index.tsx
function nv({ isDummy: e }) {
	let t = V("profile"), n = Ne(), { config: r } = fe(), { data: i, loading: a, error: o, refetch: s } = Et({ skip: e }), c = pt(() => e ? iv(n) : null, [e, n]), l = pn(), u = pt(() => c ? {
		...c,
		preferences: {
			...c.preferences,
			...l.themeMode != null && { themeMode: l.themeMode },
			...l.language != null && { language: l.language },
			desktopNotifications: l.desktopNotifications
		}
	} : i?.visitorProfile, [
		c,
		l,
		i?.visitorProfile
	]), [d, { loading: f }] = Ot(), [p, { loading: m }] = ne(), h = K((e, t) => {
		e === "language" ? fn("language", typeof t == "string" ? t : null) : e === "themeMode" ? fn("themeMode", rv(t)) : e === "desktopNotifications" && fn("desktopNotifications", !!t);
	}, []), { apply: g, saving: _ } = Om(u, t, e ? h : void 0), [v, y] = Y({}), [b, x] = Y(!1), [S, C] = Y(!1), [w, E] = Y(null), [ee, D] = Y({});
	q(() => {
		u && (b || y(xs(u)));
	}, [u, b]);
	let O = r.messenger?.profile?.fields ?? null, { avatarField: k, regularFields: te } = pt(() => {
		if (!u) return {
			avatarField: null,
			regularFields: []
		};
		let e = u.fields.find((e) => e.type === "AVATAR") ?? null, t = u.fields.filter((e) => e.type !== "AVATAR");
		if (!O) return {
			avatarField: e,
			regularFields: t
		};
		let n = new Map(t.map((e) => [e.key, e]));
		return {
			avatarField: e,
			regularFields: O.map((e) => n.get(e)).filter((e) => !!e)
		};
	}, [u, O]), A = K((e, t) => {
		y((n) => ({
			...n,
			[e]: t
		})), x(!0), C(!1), E(null), D((t) => {
			if (!t[e]) return t;
			let n = { ...t };
			return delete n[e], n;
		});
	}, []), j = K(() => {
		u && (y(xs(u)), x(!1), E(null), D({}));
	}, [u]), M = K(async () => {
		if (!u) return;
		let n = {};
		for (let e of u.fields) {
			if (e.pinned) continue;
			let r = v[e.key] ?? null;
			if (e.required && Ss(r)) {
				n[e.key] = t("requiredHint");
				continue;
			}
			let i = tv(e, r);
			i && (n[e.key] = t(i));
		}
		if (Object.keys(n).length > 0) {
			D(n), E(t("errorFieldInvalid"));
			return;
		}
		let r = ws(u.fields, v);
		if (r.length !== 0) {
			if (E(null), D({}), e) {
				x(!1), C(!0), setTimeout(() => C(!1), 2400);
				return;
			}
			try {
				let e = (await d({
					variables: { input: { fields: r } },
					update: (e, { data: t }) => {
						let n = t?.updateVisitorProfile;
						n && e.writeQuery({
							query: Tt,
							data: { visitorProfile: n }
						});
					}
				})).data?.updateVisitorProfile;
				e && (y(xs(e)), x(!1), C(!0), setTimeout(() => C(!1), 2400));
			} catch (e) {
				let n = Tm(e);
				if (n === "fieldInvalid") {
					let n = Em(e);
					n && D({ [n]: t("errorFieldInvalid") });
				}
				E(t(Dm(n)));
			}
		}
	}, [
		u,
		t,
		d,
		v,
		e
	]), N = K(async (n) => {
		if (k) {
			if (E(null), !Ta.has(n.type) || !n.type.startsWith("image/")) {
				E(t("errorGeneric"));
				return;
			}
			if (n.size > 10485760) {
				E(t("errorGeneric"));
				return;
			}
			try {
				if (e) {
					let { base64: e } = await wa(n);
					A(k.key, `data:${n.type};base64,${e}`);
					return;
				}
				let { base64: t } = await wa(n), r = (await p({ variables: { input: {
					filename: n.name,
					mimetype: n.type,
					dataBase64: t
				} } })).data?.uploadVisitorMedia?.url;
				if (!r) throw Error("empty upload response");
				A(k.key, r);
			} catch {
				E(t("errorGeneric"));
			}
		}
	}, [
		k,
		e,
		A,
		t,
		p
	]);
	if (a) return /* @__PURE__ */ X(z, {
		className: "flex-1",
		children: /* @__PURE__ */ Z("div", {
			className: "flex flex-col gap-4 px-5 py-6",
			"aria-busy": "true",
			children: [
				/* @__PURE__ */ Z("div", {
					className: "mx-auto flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ X(W, { className: "h-24 w-24 rounded-full" }), /* @__PURE__ */ X(W, { className: "h-4 w-32 rounded" })]
				}),
				/* @__PURE__ */ X(W, { className: "h-9 w-full rounded-wx-sm" }),
				/* @__PURE__ */ X(W, { className: "h-9 w-full rounded-wx-sm" }),
				/* @__PURE__ */ X(W, { className: "h-9 w-full rounded-wx-sm" }),
				/* @__PURE__ */ X("span", {
					className: "sr-only",
					children: t("loading")
				})
			]
		})
	});
	if (o || !u) return /* @__PURE__ */ Z("div", {
		className: "flex flex-1 flex-col items-center justify-center gap-4 px-6 py-10 text-center",
		children: [
			/* @__PURE__ */ X("div", {
				className: "flex h-12 w-12 items-center justify-center rounded-full bg-wx-danger/10 text-wx-danger",
				children: /* @__PURE__ */ X(Jn, {
					size: 24,
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ X("p", {
				className: "max-w-xs text-sm text-wx-fg-muted",
				children: t("loadError")
			}),
			/* @__PURE__ */ Z("button", {
				type: "button",
				onClick: () => s(),
				className: "inline-flex items-center gap-1.5 rounded-full bg-wx-primary px-4 py-2 text-sm font-medium text-wx-primary-fg transition-colors hover:bg-wx-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary focus-visible:ring-offset-2 focus-visible:ring-offset-wx-bg",
				children: [/* @__PURE__ */ X(fr, {
					size: 14,
					"aria-hidden": "true"
				}), t("retry")]
			})
		]
	});
	let re = k ? v[k.key] ?? null : null, ie = Ts(u, v);
	return /* @__PURE__ */ Z("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ X(z, {
			className: "min-h-0 flex-1",
			children: /* @__PURE__ */ Z("form", {
				id: "wx-profile-form",
				onSubmit: (e) => {
					e.preventDefault(), M();
				},
				className: "flex flex-col px-5 pt-2 pb-4",
				children: [
					k && /* @__PURE__ */ X(vs, {
						field: k,
						value: re,
						uploading: m,
						onPick: N,
						onClear: () => A(k.key, null),
						displayName: ie,
						t
					}),
					te.length > 0 && /* @__PURE__ */ X(xm, {
						eyebrow: t("title"),
						children: te.map((e) => /* @__PURE__ */ X(bm, {
							field: e,
							value: v[e.key] ?? null,
							onChange: (t) => A(e.key, t),
							error: ee[e.key],
							t
						}, e.key))
					}),
					!k && te.length === 0 && /* @__PURE__ */ X("p", {
						className: "py-6 text-center text-sm text-wx-fg-muted",
						children: t("noFields")
					}),
					/* @__PURE__ */ X(wm, {
						profile: u,
						locale: n,
						themeMode: r.themeMode,
						prefSaving: _,
						applyPref: g,
						onNotificationError: (e) => E(e ? t(e) : null),
						t
					}),
					w && /* @__PURE__ */ Z("p", {
						className: "mt-4 flex items-start gap-1.5 rounded-wx-sm bg-wx-danger/10 px-3 py-2 text-xs text-wx-danger",
						children: [/* @__PURE__ */ X(ke, {
							size: 13,
							"aria-hidden": "true",
							className: "mt-0.5 shrink-0"
						}), /* @__PURE__ */ X("span", { children: w })]
					}),
					S && !w && /* @__PURE__ */ Z("p", {
						className: "mt-4 flex items-center gap-1.5 rounded-wx-sm bg-wx-success/10 px-3 py-2 text-xs text-wx-success",
						children: [/* @__PURE__ */ X(T, {
							size: 13,
							"aria-hidden": "true"
						}), /* @__PURE__ */ X("span", { children: t("saved") })]
					})
				]
			})
		}), b && /* @__PURE__ */ Z("div", {
			className: "flex items-center gap-2 border-t border-wx-border bg-wx-bg/95 px-4 py-3 backdrop-blur",
			children: [/* @__PURE__ */ Z("button", {
				type: "submit",
				form: "wx-profile-form",
				disabled: f,
				className: H("flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wx-primary px-4 py-2 text-sm font-semibold text-wx-primary-fg", "hover:bg-wx-primary-hover disabled:cursor-not-allowed disabled:opacity-60"),
				children: [f && /* @__PURE__ */ X(rt, {
					size: 14,
					className: "animate-spin",
					"aria-hidden": "true"
				}), t(f ? "saving" : "save")]
			}), /* @__PURE__ */ X("button", {
				type: "button",
				onClick: j,
				disabled: f,
				className: H("rounded-full bg-wx-bg-elevated px-4 py-2 text-sm font-medium text-wx-fg", "hover:bg-wx-bg-elevated-2 disabled:cursor-not-allowed disabled:opacity-60"),
				children: t("cancel")
			})]
		})]
	});
}
function rv(e) {
	if (typeof e != "string") return null;
	let t = e.toLowerCase();
	return t === "light" || t === "dark" ? t : t === "auto" || t === "system" ? "auto" : null;
}
function iv(e) {
	return {
		themeModeEditable: !0,
		preferences: {
			language: e,
			themeMode: "system",
			desktopNotifications: !1
		},
		fields: [
			{
				key: "avatar",
				label: "Avatar",
				type: "AVATAR",
				required: !1,
				pinned: !1,
				value: null
			},
			{
				key: "name",
				label: "Name",
				type: "STRING",
				required: !1,
				pinned: !1,
				value: "John Doe"
			},
			{
				key: "email",
				label: "Email",
				type: "STRING",
				required: !1,
				pinned: !1,
				value: ""
			},
			{
				key: "phone",
				label: "Phone",
				type: "STRING",
				required: !1,
				pinned: !1,
				value: ""
			}
		]
	};
}
//#endregion
//#region components/widget/widget-launcher.tsx
function av({ isOpen: e, onToggle: t, unreadCount: i = 0, newsUnread: o = !1, position: s = "right", embedded: c = !1, loading: l = !1 }) {
	let u = V("launcher"), d = V("news"), f = ot(), p = ot(), m = e ? p.parentHandlers : f.parentHandlers, h = i + +!!o, g = !e && i > 0, _ = !e && i === 0 && o;
	return /* @__PURE__ */ Z(n.button, {
		type: "button",
		onClick: l ? void 0 : t,
		disabled: l,
		"aria-label": u(l ? "loading" : e ? "close" : "open"),
		"aria-busy": l || void 0,
		whileHover: l ? void 0 : { scale: 1.05 },
		whileTap: l ? void 0 : { scale: .92 },
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 22
		},
		onHoverStart: m.onMouseEnter,
		onHoverEnd: m.onMouseLeave,
		...m,
		className: H(c ? "absolute" : "fixed", "bottom-4 z-2147483600", s === "left" ? "left-4" : "right-4", "flex h-14 w-14 items-center justify-center rounded-full", "bg-wx-launcher-bg text-wx-launcher-fg", "shadow-[0_8px_24px_rgba(0,0,0,0.18)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-launcher-bg focus-visible:ring-offset-2 focus-visible:ring-offset-white"),
		children: [/* @__PURE__ */ X("span", {
			"aria-hidden": !0,
			className: "contents",
			children: /* @__PURE__ */ X(Dr, {
				count: g ? h : 0,
				dot: _,
				label: _ ? d("unread") : void 0,
				size: "md",
				className: "absolute -top-1 -right-1 z-10"
			})
		}), /* @__PURE__ */ X(Se, {
			mode: "wait",
			initial: !1,
			children: l ? /* @__PURE__ */ X(n.span, {
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
				className: H("h-6 w-6 animate-spin rounded-full border-2", "border-wx-launcher-fg/30 border-t-wx-launcher-fg", "dark:border-wx-bg/30 dark:border-t-wx-bg"),
				"aria-hidden": "true"
			}, "spinner") : e ? /* @__PURE__ */ X(n.span, {
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
				children: /* @__PURE__ */ X(a, {
					ref: p.iconRef,
					size: 24
				})
			}, "x") : /* @__PURE__ */ X(n.span, {
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
				children: /* @__PURE__ */ X(r, {
					ref: f.iconRef,
					size: 24,
					className: "[&_svg]:fill-current [&_svg]:stroke-current"
				})
			}, "chat")
		})]
	});
}
//#endregion
//#region components/widget/widget-shell/auth-error-overlay.tsx
function ov({ open: e, errorCode: t, onRetry: r, onDismiss: i, position: a = "right", embedded: o = !1 }) {
	let s = V("authError"), c = a === "left", l = t?.startsWith("turnstile_failed:") ?? !1, u = s(l ? "turnstileTitle" : "genericTitle"), d = s(l ? "turnstileBody" : "genericBody");
	return /* @__PURE__ */ X(Se, { children: e && /* @__PURE__ */ X(n.div, {
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
		className: H("bottom-24 z-2147483599 w-[300px]", o ? "absolute" : "fixed", c ? "left-4" : "right-4"),
		role: "alert",
		"aria-live": "polite",
		"aria-label": u,
		children: /* @__PURE__ */ Z("div", {
			className: H("relative rounded-wx-lg border border-wx-border bg-wx-bg", "p-4 pr-9 text-wx-fg", "shadow-[0_16px_40px_rgba(0,0,0,0.16)]"),
			children: [
				/* @__PURE__ */ X("button", {
					type: "button",
					onClick: i,
					"aria-label": s("dismiss"),
					className: H("absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full", "text-wx-fg-muted transition-colors hover:bg-wx-bg-elevated hover:text-wx-fg"),
					children: /* @__PURE__ */ X(ke, { size: 12 })
				}),
				/* @__PURE__ */ Z("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ X("div", {
						className: H("flex h-8 w-8 shrink-0 items-center justify-center rounded-full", "bg-wx-danger/10 text-wx-danger"),
						children: X(l ? mr : fr, {
							size: 16,
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ Z("div", {
						className: "flex min-w-0 flex-1 flex-col gap-1",
						children: [/* @__PURE__ */ X("p", {
							className: "text-sm font-medium text-wx-fg",
							children: u
						}), /* @__PURE__ */ X("p", {
							className: "text-xs leading-relaxed text-wx-fg-muted",
							children: d
						})]
					})]
				}),
				/* @__PURE__ */ X("div", {
					className: "mt-3 flex justify-end",
					children: /* @__PURE__ */ Z("button", {
						type: "button",
						onClick: r,
						className: H("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium", "bg-wx-primary text-wx-primary-fg transition-colors", "hover:bg-wx-primary-hover", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary focus-visible:ring-offset-2 focus-visible:ring-offset-wx-bg"),
						children: [/* @__PURE__ */ X(fr, {
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
function sv(e) {
	if (typeof e != "string") return "auto";
	let t = e.toLowerCase();
	return t === "light" || t === "dark" || t === "auto" ? t : "auto";
}
function cv(e, t) {
	if (!e) return null;
	let n = t === "dark" ? e.dark : e.light, r = t === "dark" ? e.light : e.dark;
	return n ?? r ?? null;
}
function lv(e) {
	return e === "messages" ? { kind: "messages" } : e === "help" ? { kind: "help" } : e === "news" ? { kind: "news" } : e === "profile" ? { kind: "profile" } : { kind: "home" };
}
function uv(e) {
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
function dv(e) {
	return e.kind === "help-category" ? `help-category:${e.categoryId}` : e.kind === "help-article" ? `help-article:${e.slug}` : e.kind === "news-article" ? `news-article:${e.id}` : e.kind;
}
var fv = {
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
}, pv = ut(() => import("./widget-react-CAsPo1rw.js").then((e) => ({ default: e.HelpArticleView }))), mv = ut(() => import("./widget-react-yTVzOzaU.js").then((e) => ({ default: e.NewsArticleView }))), hv = "wexio:panel-expanded", gv = 32, _v = 112;
function vv() {
	if (typeof window > "u") return !1;
	try {
		return localStorage.getItem(hv) === "1";
	} catch {
		return !1;
	}
}
function yv(e, t) {
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
function bv() {
	return /* @__PURE__ */ X("div", {
		className: "flex flex-1 items-center justify-center",
		children: /* @__PURE__ */ X("div", { className: "border-wx-border border-t-wx-primary h-5 w-5 animate-spin rounded-full border-2" })
	});
}
function xv() {
	return /* @__PURE__ */ X(Rr, { children: /* @__PURE__ */ X(Sv, {}) });
}
function Sv() {
	let e = V("header"), t = Ne(), r = w(), { mode: i, config: a, isDummy: o, isLoading: s, error: c } = fe(), l = a.theme?.launcherPosition === "LEFT_BOTTOM", u = r.embedded ?? !1, { muted: d, toggleMuted: f, playInbound: p, playOutbound: m } = Ft(a.sounds), { identity: h, prefill: g } = sn(r), [_, b] = Y(null), [S, C] = Y(0);
	q(() => {
		if (typeof window > "u") return;
		let e = (e) => {
			!e.data || e.data.type !== "wexio:shutdown:v1" || (an(), b(null), A(null), C((e) => e + 1));
		};
		return window.addEventListener("message", e), () => window.removeEventListener("message", e);
	}, []);
	let T = !!a.botProtection?.turnstile?.enabled, E = a.botProtection?.turnstile?.siteKey ?? null, D = T && E ? E : null;
	q(() => {}, [T, E]);
	let { getToken: O } = Ht({
		siteKey: D,
		position: l ? "left" : "right"
	}), k = on({
		enabled: !s && i === "production" && !o,
		identity: h ?? _,
		epoch: S,
		getTurnstileToken: O
	}), [te, A] = Y(null), j = te ?? k, M = !!j.error && i === "production" && !o, N = (s || j.isAuthenticating) && i === "production" && !o, [ne, re] = Y(!1);
	q(() => {
		M || re(!1);
	}, [M]);
	let ie = K(() => {
		re(!1), C((e) => e + 1);
	}, []), ae = K(() => re(!1), []), oe = J(!1), se = J(!1);
	oe.current = M || N, se.current = M;
	let P = K(() => {
		if (se.current) {
			re(!0);
			return;
		}
		oe.current || pe(!0);
	}, []), F = K(() => {
		pe((e) => e ? !1 : se.current ? (re(!0), !1) : !oe.current);
	}, []), ce = yn({
		enabled: !!a.features.profile && (o || !!j.token),
		isDummy: o
	});
	q(() => {
		if (typeof window > "u") return;
		let e = window;
		e.__wexioNotifyDebug = () => {
			let e = {
				prefEnabled: ce.desktopNotifications,
				permission: typeof Notification < "u" ? Notification.permission : "(unsupported)",
				prefsLoaded: ce.loaded,
				featureEnabled: !!a.features.profile,
				sessionToken: !!j.token
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
		ce.desktopNotifications,
		ce.loaded,
		a.features.profile,
		j.token
	]);
	let le = Q(sv(a.themeMode), {
		preference: ce.themeMode,
		allowed: ce.themeModeEditable
	}), ue = cv(a.organizationLogo, le), I = ue ?? (o ? he(`/logo-${le}.png`) : null), [L, de] = Y(() => lv(Bn(a.defaultTab, a.features))), R = K((e) => de((t) => In(e, t)), []);
	q(() => {
		Rn(Ln(L), a.features) || de(lv(Bn(a.defaultTab, a.features)));
	}, [a.features, a.defaultTab]);
	let [z, pe] = Y(!1), [me, ge] = Y(vv);
	q(() => {
		try {
			localStorage.setItem(hv, me ? "1" : "0");
		} catch {}
	}, [me]);
	let [_e, ve] = Y(null), [ye, be] = Y(!1);
	q(() => {
		z && (be(!0), i === "production" && r.onOpen?.());
	}, [
		z,
		i,
		r
	]);
	let xe = Tn({
		chatId: j.chatId,
		isDummy: o,
		isLoading: s
	}), Te = jt({
		enabled: i === "production" && !o && !!a.features.news,
		locale: t
	}), Ee = we(), B = J(null), [De, Oe] = Y([]), [ke, Ae] = Y(kn), je = J(!1), [Me, Pe] = Y(null);
	q(() => {
		Oe([]), Ae(kn), je.current = !1;
	}, [j.chatId]);
	let U = ee({
		variables: { chatId: j.chatId ?? "" },
		skip: o || !j.chatId || !j.token,
		fetchPolicy: "network-only"
	});
	q(() => {
		if (je.current) return;
		let e = U.data?.visitorChatAssignment;
		e && (e.assignedStatus === "connected" ? Ae({
			status: "connected",
			...e.operator ? { operator: {
				name: e.operator.name,
				...e.operator.avatar ? { avatar: e.operator.avatar } : {}
			} } : {}
		}) : e.assignedStatus === "pending" ? Ae({
			status: "pending",
			...e.estimate ? { estimate: e.estimate } : {}
		}) : Ae(kn));
	}, [U.data]), q(() => {
		a.features.profile && (!j.peopleId || !j.token || Ee.refetchQueries({ include: [Tt] }));
	}, [j.peopleId]);
	let Fe = K((e) => {
		Oe((t) => t.some((t) => t.id === e.id) ? t : [...t, e]);
	}, []), W = K((e, t) => {
		Oe((n) => n.map((n) => n.id === e ? {
			...t,
			clientKey: t.clientKey ?? n.clientKey ?? e
		} : n));
	}, []), Ie = J((e) => (B.current = e, () => {
		B.current === e && (B.current = null);
	})).current;
	xn({
		chatId: j.chatId,
		token: j.token,
		enabled: !o && i === "production",
		onMessage: (e) => {
			if (B.current?.(e), e.kind === "read-receipt") {
				xe.noteRead(e.readReceipt?.messageIds ?? []);
				return;
			}
			if (e.kind === "typing") return;
			if (e.kind === "assignment") {
				let t = An(e);
				t && (Ae(t), je.current = !0);
				let n = Mn(e);
				n && Fe(n);
				return;
			}
			let t = (e.from ?? e.sender)?.kind;
			if (t === "visitor") return;
			p();
			let n = e.from ?? e.sender, r = Array.isArray(e.buttons) ? e.buttons.map((e) => ({
				text: e.label,
				payload: e.value,
				...e.type ? { type: e.type.toLowerCase() } : {},
				...e.url ? { url: e.url } : {},
				...e.phoneNumber ? { phoneNumber: e.phoneNumber } : {}
			})) : void 0, i = t === "ai" || t === "bot" ? xt : n?.name ?? "", a = e.sentAt ?? (/* @__PURE__ */ new Date()).toISOString(), o = (() => {
				try {
					return new Date(a).toLocaleTimeString(void 0, {
						hour: "numeric",
						minute: "2-digit"
					});
				} catch {
					return "";
				}
			})(), s = e.media, c = ko(s), l = Ao(e.sources), u = s && typeof s == "object" && !Array.isArray(s) ? s.caption : void 0;
			Fe({
				id: e.externalMessageId,
				direction: "OUTBOUND",
				text: e.text || (typeof u == "string" ? u : ""),
				ageLabel: o,
				sender: {
					kind: t ?? "operator",
					name: i,
					...n?.avatar ? { avatar: n.avatar } : {}
				},
				...c.length > 0 ? { media: c } : {},
				...l.length > 0 ? { sources: l } : {},
				...r ? { buttons: r } : {},
				deliveryStatus: "DELIVERED"
			}), xe.noteInbound(e);
			let d = typeof document < "u" && !document.hidden, f = z && d && L.kind === "messages", m = ce.desktopNotifications, h = typeof Notification < "u" ? Notification.permission : "(unsupported)", g = h === "granted", _ = m && g && !f;
			if (console.log("[wexio] inbound:", {
				id: e.externalMessageId,
				kind: e.kind,
				from: i,
				prefEnabled: m,
				permission: h,
				isOpen: z,
				docVisible: d,
				route: L.kind,
				activelyReadingMessages: f,
				willNotify: _
			}), m && g && !f) try {
				let t = typeof u == "string" ? u : "", r = yv(e.text || t, c), a = n?.avatar ?? ue ?? void 0, o = new Notification(i || "New message", {
					body: r,
					tag: e.externalMessageId,
					icon: a
				});
				o.onclick = () => {
					try {
						window.focus();
					} catch {}
					P(), de({ kind: "messages" }), o.close();
				};
			} catch (e) {
				console.warn("[wexio] desktop notification failed:", e);
			}
			else m && !g && console.warn("[wexio] desktop notifications enabled but browser permission is not granted; current value:", h);
			j.chatId && Ee.writeQuery({
				query: y,
				variables: { chatId: j.chatId },
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
	let [Le] = x(), [Re] = v(), ze = K(() => {
		if (!j.chatId) return;
		let e = ke;
		Ae(kn), Re({ variables: { chatId: j.chatId } }).catch(() => {
			Ae(e);
		});
	}, [
		Re,
		j.chatId,
		ke
	]), Be = (L.kind === "messages" || L.kind === "help-article" || L.kind === "news-article") && me, Ve = Be ? 640 : 420, He = Be ? 860 : 670, [We, Ge] = Y(null);
	q(() => {
		if (typeof window > "u") return;
		let e = () => {
			let e = window.innerWidth, t = window.innerHeight;
			Ge((n) => n && n.w === e && n.h === t ? n : {
				w: e,
				h: t
			});
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []);
	let Ke = u || !We ? Ve : Math.min(Ve, We.w - gv), qe = u || !We ? He : Math.min(He, We.h - _v), Je = J(uv(L)), Ye = (() => {
		let e = uv(L), t = Je.current;
		return Je.current = e, e === t ? 0 : e > t ? 1 : -1;
	})(), Xe = J(r.onResize);
	Xe.current = r.onResize, q(() => {
		let e = z ? Ve : 72, t = z ? He : 72;
		Xe.current(e, t);
	}, [
		z,
		Ve,
		He
	]);
	let Ze = () => {
		pe(!1), i === "production" && r.onClose();
	}, Qe = async (e, t) => {
		if (o) Pe(t), xe.clear();
		else if (j.chatId) try {
			await Le({ variables: { input: { text: t } } });
		} catch {}
		de({ kind: "messages" }), P(), m();
	}, $e = () => {
		de({ kind: "messages" }), P();
	}, et = !a.branding?.hidden, tt = zn(a.features), nt = Pn(L) && tt > 1, rt = L.kind === "home", it = Ln(L);
	q(() => {
		it === "news" && Te.markRead();
	}, [it, Te.markRead]);
	let at = (e) => {
		dt(() => {
			de({ kind: e === "messages" ? "messages" : e });
		});
	}, ot = J(!1), G = o || i !== "production" || !!j.token || !!j.error;
	G && (ot.current = !0);
	let st = ot.current || G;
	if (c === "publicKeyInvalid" || s || !st) return null;
	return /* @__PURE__ */ Z(mt, { children: [
		/* @__PURE__ */ X(Ce, {
			tracking: a.tracking,
			enabled: i === "production" && !o,
			token: j.token,
			children: /* @__PURE__ */ Z(n.div, {
				"aria-hidden": !z,
				inert: !z,
				initial: !1,
				animate: z ? {
					opacity: 1,
					y: 0,
					scale: 1,
					pointerEvents: "auto",
					width: Ke,
					height: qe
				} : {
					opacity: 0,
					y: 16,
					scale: .98,
					pointerEvents: "none",
					width: Ke,
					height: qe
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
				className: H("isolate flex flex-col overflow-hidden bg-wx-bg text-wx-fg", u ? "absolute" : "fixed", "bottom-24 z-2147483601 rounded-wx-xl", u ? "max-w-[calc(100%-2rem)] max-h-[calc(100%-7rem)]" : "max-w-[calc(100vw-2rem)] max-h-[calc(100dvh-7rem)]", l ? "left-4" : "right-4"),
				children: [
					rt && /* @__PURE__ */ X("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(99,102,241,0.22),transparent_55%),linear-gradient(to_bottom,var(--wx-bg-elevated-2)_0%,var(--wx-bg-elevated)_40%,var(--wx-bg)_75%)] dark:bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(99,102,241,0.35),transparent_55%),linear-gradient(to_bottom,var(--wx-bg-elevated-2)_0%,var(--wx-bg-elevated)_40%,var(--wx-bg)_75%)]"
					}),
					/* @__PURE__ */ X(lt, {
						route: L,
						onPop: () => de(Fn(L, a.features)),
						onClose: Ze
					}),
					/* @__PURE__ */ X("main", {
						className: "relative flex flex-1 flex-col overflow-hidden",
						children: ye && /* @__PURE__ */ X(Se, {
							mode: "sync",
							initial: !1,
							custom: Ye,
							children: /* @__PURE__ */ Z(n.div, {
								custom: Ye,
								variants: fv,
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
									L.kind === "home" && /* @__PURE__ */ X(Sa, {
										config: a,
										organizationLogoUrl: ue,
										onClose: Ze,
										onOpenTab: (e) => de({ kind: e }),
										onOpenNewsArticle: (e) => R({
											kind: "news-article",
											id: e
										}),
										onOpenHelpArticle: (e) => R({
											kind: "help-article",
											slug: e,
											from: "search"
										}),
										isDummy: o,
										chatId: j.chatId ?? null
									}),
									L.kind === "messages" && /* @__PURE__ */ X(_s, {
										isDummy: o,
										chatId: j.chatId,
										token: j.token,
										prechatForm: a.prechatForm,
										messenger: a.messenger,
										organizationLogoUrl: ue,
										organizationName: a.messenger?.title ?? "",
										isOpen: z,
										onInbound: p,
										onOutbound: m,
										registerRealtimeHandler: Ie,
										unreadCount: xe.count,
										clearUnread: xe.clear,
										liveMessages: De,
										appendLiveMessage: Fe,
										replaceLiveMessage: W,
										assignmentStatus: ke.status,
										assignmentEstimate: ke.estimate,
										initialVisitorMessage: Me,
										onInitialVisitorMessageSent: () => Pe(null),
										visitorIdentity: h,
										visitorPrefill: g,
										security: a.security,
										verified: j.verified,
										onGoogleCredential: (e) => b({ googleIdToken: e }),
										onPasskeySession: (e) => {
											$t(e), A({
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
											e.kind === "help-article" ? R({
												kind: "help-article",
												slug: e.slug,
												from: "search",
												locale: e.locale
											}) : e.kind === "news-article" && de({ kind: "news" });
										},
										getTurnstileToken: O
									}),
									L.kind === "help" && /* @__PURE__ */ X(Qr, {
										isDummy: o,
										onOpenCategory: (e, t) => R({
											kind: "help-category",
											categoryId: e,
											categoryName: t?.name,
											categoryDescription: t?.description,
											categoryArticleCount: t?.articleCount
										}),
										onOpenArticle: (e) => R({
											kind: "help-article",
											slug: e,
											from: "search"
										})
									}),
									L.kind === "help-category" && /* @__PURE__ */ X(Wr, {
										categoryId: L.categoryId,
										categoryName: L.categoryName,
										categoryDescription: L.categoryDescription,
										categoryArticleCount: L.categoryArticleCount,
										isDummy: o,
										onOpenCategory: (e, t) => R({
											kind: "help-category",
											categoryId: e,
											categoryName: t?.name,
											categoryDescription: t?.description,
											categoryArticleCount: t?.articleCount
										}),
										onOpenArticle: (e) => R({
											kind: "help-article",
											slug: e,
											from: "category",
											fromCategoryId: L.categoryId
										})
									}),
									L.kind === "help-article" && /* @__PURE__ */ X(ct, {
										fallback: /* @__PURE__ */ X(bv, {}),
										children: /* @__PURE__ */ X(pv, {
											slug: L.slug,
											locale: L.locale ?? t,
											isDummy: o,
											onHandoff: () => de({ kind: "messages" }),
											onOpenArticle: (e) => R({
												kind: "help-article",
												slug: e,
												from: "search"
											}),
											onOpenTranslation: (e, t) => de({
												kind: "help-article",
												slug: e,
												locale: t,
												from: L.from,
												fromCategoryId: L.fromCategoryId,
												origin: L.origin
											}),
											onTitleResolved: ve
										})
									}),
									L.kind === "news" && /* @__PURE__ */ X(Ue, {
										isDummy: o,
										onOpenArticle: (e) => R({
											kind: "news-article",
											id: e
										})
									}),
									L.kind === "news-article" && /* @__PURE__ */ X(ct, {
										fallback: /* @__PURE__ */ X(bv, {}),
										children: /* @__PURE__ */ X(mv, {
											id: L.id,
											isDummy: o,
											onOpenRelated: (e) => R({
												kind: "news-article",
												id: e
											}),
											onTitleResolved: ve
										})
									}),
									L.kind === "profile" && /* @__PURE__ */ X(nv, { isDummy: o })
								]
							}, dv(L))
						})
					}),
					nt && /* @__PURE__ */ X(kr, {
						active: it,
						features: a.features,
						onChange: at,
						unreadCount: xe.count,
						newsUnread: Te.hasUnread
					}),
					et && /* @__PURE__ */ X(Nr, {})
				]
			})
		}),
		/* @__PURE__ */ X(Jr, {
			message: z ? null : xe.lastMessage,
			onOpen: $e,
			onDismiss: xe.clear,
			onSendButton: Qe,
			position: l ? "left" : "right",
			embedded: u
		}),
		/* @__PURE__ */ X(ov, {
			open: M && ne,
			errorCode: j.error,
			onRetry: ie,
			onDismiss: ae,
			position: l ? "left" : "right",
			embedded: u
		}),
		/* @__PURE__ */ X(av, {
			isOpen: z,
			onToggle: F,
			unreadCount: xe.count,
			newsUnread: Te.hasUnread,
			position: l ? "left" : "right",
			embedded: u,
			loading: N
		})
	] });
	function lt({ route: t, onPop: n, onClose: r }) {
		if (t.kind === "messages") {
			let t = tt > 1;
			return /* @__PURE__ */ X(Fr, {
				title: a.messenger?.title?.trim() || "Gaia",
				subtitle: a.messenger?.description?.trim() || e("conversationSubtitle"),
				organizationLogoUrl: I,
				muted: d,
				onToggleMute: f,
				onBack: t ? n : void 0,
				onClose: r,
				expanded: Be,
				onToggleExpand: () => ge((e) => !e),
				showResolve: ke.status === "connected",
				onResolve: ze
			});
		}
		return t.kind === "help" ? /* @__PURE__ */ X(Zr, {
			title: e("helpTitle"),
			onClose: r
		}) : t.kind === "help-category" ? /* @__PURE__ */ X(Zr, {
			title: e("helpTitle"),
			onBack: n,
			onClose: r
		}) : t.kind === "help-article" ? /* @__PURE__ */ X(Zr, {
			title: _e ?? e("helpTitle"),
			onBack: n,
			onClose: r,
			expanded: Be,
			onToggleExpand: () => ge((e) => !e)
		}) : t.kind === "news" ? /* @__PURE__ */ X(Zr, {
			title: e("newsTitle"),
			onClose: r
		}) : t.kind === "news-article" ? /* @__PURE__ */ X(Zr, {
			title: _e ?? e("newsTitle"),
			onBack: n,
			onClose: r,
			expanded: Be,
			onToggleExpand: () => ge((e) => !e)
		}) : null;
	}
}
var Cv = {
	tabs: {
		home: "الرئيسية",
		messages: "الرسائل",
		help: "المساعدة",
		news: "الأخبار",
		profile: "الملف الشخصي"
	},
	header: {
		close: "إغلاق",
		back: "رجوع",
		conversationSubtitle: "يمكن لفريقنا أيضًا مساعدتك",
		helpTitle: "المساعدة",
		newsTitle: "الأخبار",
		expand: "توسيع الأداة",
		collapse: "طي الأداة"
	},
	launcher: {
		open: "فتح المحادثة",
		close: "إغلاق المحادثة",
		loading: "جارٍ الاتصال…"
	},
	home: {
		greetingHeadline: "مرحبًا 👋",
		greetingSubheadline: "كيف يمكننا مساعدتك؟",
		askTitle: "اطرح سؤالاً",
		askSubtitle: "يمكن لروبوتنا وفريقنا مساعدتك",
		recentMessageLabel: "رسالة حديثة",
		recentMessageTitle: "رسالة حديثة",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 س",
		recentMessageSample: "مرحبًا 👋 شكرًا لتواصلك معنا - سنعود إليك على الفور.",
		featuredArticleLoading: "مقال مميز",
		featuredArticleTap: "اضغط للقراءة",
		featuredArticleEmpty: "اختر مقالاً",
		featuredArticleSetUp: "اضبط هذا القسم من لوحة التحكم",
		featuredArticleDemoEyebrow: "Pioneer · احفظ التاريخ",
		featuredArticleDemoHeadline: "8 أكتوبر 2026",
		featuredArticleDemoSubline: "سان فرانسيسكو · حضوريًا + افتراضيًا",
		featuredArticleDemoCta: "عرض جدول الإطلاق",
		seeAgenda: "عرض جدول الإطلاق",
		browseHelp: "تصفح المساعدة",
		whatsNew: "ما الجديد",
		searchPlaceholder: "ابحث في المساعدة",
		pinnedArticlesTitle: "اقرأ هذه أولاً",
		popularArticlesTitle: "المقالات الشائعة",
		pinnedArticleRow: "مقال مثبّت {n}",
		newsPreviewTitle: "أحدث الأخبار",
		newsPreviewRow: "خبر {n}",
		myConversationsTitle: "محادثاتك",
		myConversationsEmpty: "عرض محادثاتك",
		teamStatusOnline: "نحن متصلون",
		teamStatusReplyTime: "نرد عادةً خلال دقائق قليلة"
	},
	messages: {
		today: "اليوم",
		yesterday: "أمس",
		unreadMessages: "رسائل غير مقروءة",
		emptyTitle: "لا توجد رسائل بعد",
		emptyBody: "ابدأ محادثة وسيرد عليك فريقنا هنا.",
		sendCta: "أرسل لنا رسالة",
		attach: "إرفاق ملف",
		commands: "أوامر سريعة",
		record: "تسجيل رسالة صوتية",
		stopRecording: "إيقاف التسجيل",
		recording: "جارٍ التسجيل…",
		uploading: "جارٍ الرفع…",
		uploadFailed: "فشل الرفع",
		voiceDenied: "تم رفض الوصول إلى الميكروفون",
		voiceUnsupported: "التسجيل الصوتي غير مدعوم في هذا المتصفح",
		fileTooLarge: "الملف كبير جدًا (الحد الأقصى 10 ميغابايت)",
		fileMimeNotAllowed: "هذا النوع من الملفات غير مدعوم",
		emoji: "إدراج رمز تعبيري",
		cancelRecording: "إلغاء التسجيل",
		pauseRecording: "إيقاف التسجيل مؤقتًا",
		resumeRecording: "استئناف التسجيل",
		playPreview: "تشغيل التسجيل",
		emojiPicker: "منتقي الرموز التعبيرية",
		emojiSearch: "بحث…",
		playAudio: "تشغيل",
		pauseAudio: "إيقاف مؤقت",
		openAudio: "فتح الصوت",
		removeAttachment: "إزالة",
		aiAssistant: "مساعد AI",
		operator: "المشغّل",
		openImage: "فتح الصورة",
		openPreview: "فتح المعاينة",
		play: "تشغيل",
		pause: "إيقاف مؤقت",
		typing: "يكتب…",
		aiThinking: "يفكر…",
		aiSearching: "يتصفح…",
		typingSomeone: "شخص ما",
		signInToChat: "يرجى تسجيل الدخول لبدء المحادثة.",
		signInUnavailable: "تسجيل الدخول غير متاح حاليًا.",
		googleSignIn: "تسجيل الدخول باستخدام Google",
		passkeySignIn: "تسجيل الدخول باستخدام مفتاح المرور",
		passkeyRegister: "أول مرة؟ أنشئ مفتاح مرور",
		passkeyError: "تعذّر تسجيل الدخول. يرجى المحاولة مرة أخرى.",
		passkeyNoCredential: "لا يوجد مفتاح مرور على هذا الجهاز بعد — اضغط «أنشئ مفتاح مرور» لإنشائه.",
		googleSignInDemo: "المتابعة باستخدام Google",
		connectingOperator: "تم تعيين مشغّل، يرجى الانتظار…",
		assignment: { eta: {
			minutes: "سيرد أحد الموظفين خلال {minutes} دقيقة تقريبًا",
			soft: "نرد عادةً خلال بضع دقائق",
			businessHours: "سيعود الفريق في {time}"
		} },
		withOperator: "أنت الآن تتحدث مع {name}",
		operatorConnected: "تم الاتصال بالمشغّل",
		chatResolved: "تم حل المحادثة",
		chatResolvedByYou: "تم حل المحادثة بواسطتك",
		chatResolvedByOperator: "تم حل المحادثة بواسطة {name}",
		resolveConversation: "حل المحادثة",
		sources: "المصادر",
		moreSources: "+{count} أخرى"
	},
	prechat: {
		title: "قبل أن نبدأ",
		subtitle: "بعض المعلومات السريعة لمساعدتك بشكل أسرع.",
		labelName: "الاسم",
		labelEmail: "البريد الإلكتروني",
		labelPhone: "الهاتف",
		labelCustom: "التفاصيل",
		required: "مطلوب",
		invalidEmail: "يرجى إدخال بريد إلكتروني صالح",
		invalidPhone: "يرجى إدخال رقم هاتف صالح",
		submit: "متابعة",
		submitFailed: "تعذّر الإرسال - يرجى المحاولة مرة أخرى."
	},
	help: {
		searchPlaceholder: "ابحث في المساعدة",
		emptyTitle: "لا توجد مقالات بعد",
		emptyBody: "لم ينشر المشغّل أي محتوى بعد.",
		back: "رجوع",
		helpful: "هل كان هذا مفيدًا؟",
		yes: "نعم",
		no: "لا",
		thanks: "شكرًا على ملاحظاتك.",
		unresolvedCta: "ما زلت بحاجة إلى المساعدة؟ راسلنا",
		noResults: "لا توجد نتائج",
		articleNotFound: "لم يتم العثور على المقال",
		articleNotTranslated: "هذا المقال غير متاح بلغتك بعد.",
		writtenBy: "بقلم {names}",
		relatedTitle: "مقالات ذات صلة",
		collectionsCount: "{count, plural, zero {لا توجد مجموعات} one {مجموعة واحدة} two {مجموعتان} few {# مجموعات} many {# مجموعة} other {# مجموعة}}",
		articlesCount: "{count, plural, zero {لا توجد مقالات} one {المقالات: #} two {المقالات: #} few {المقالات: #} many {المقالات: #} other {المقالات: #}}",
		authorsByline: "المؤلفون {first}{remaining, plural, zero {} one { و# آخر} two { و# آخرَين} few { و# آخرين} many { و# آخرين} other { و# آخر}}"
	},
	news: {
		unread: "أخبار غير مقروءة",
		emptyTitle: "لا توجد تحديثات بعد",
		emptyBody: "عُد هنا للاطلاع على أخبار المنتج والإعلانات.",
		helpful: "هل كان هذا المقال مفيدًا؟",
		yes: "نعم",
		no: "لا",
		thanks: "شكرًا على ملاحظاتك.",
		searchPlaceholder: "ابحث في الأخبار",
		noResults: "لا توجد منشورات مطابقة",
		editedAt: "تم التعديل {when}",
		articleNotFound: "لم يتم العثور على المقال.",
		articleNotTranslated: "هذا المنشور غير متاح بلغتك بعد.",
		readOriginal: "اقرأ النص الأصلي",
		relatedTitle: "ذات صلة",
		writtenBy: "بقلم {names}"
	},
	reactions: {
		ariaLabel: "التفاعلات",
		tapAria: "تفاعل بـ {emoji}"
	},
	languageSelector: {
		title: "اقرأ بلغة أخرى",
		ariaLabel: "لغات المقال"
	},
	branding: {
		poweredBy: "مشغَّل بواسطة",
		wexio: "Wexio"
	},
	sound: {
		mute: "كتم أصوات الإشعارات",
		unmute: "تشغيل أصوات الإشعارات"
	},
	article: {
		tableOfContents: "جدول المحتويات",
		tabFallback: "علامة تبويب {n}"
	},
	peek: {
		newMessage: "رسالة جديدة",
		dismiss: "إغلاق",
		aiAssistant: "مساعد AI",
		operator: "المشغّل"
	},
	lightbox: {
		mediaPreview: "معاينة الوسائط",
		close: "إغلاق المعاينة",
		previous: "السابق",
		next: "التالي"
	},
	authError: {
		turnstileTitle: "تعذّر التحقق من متصفحك",
		turnstileBody: "لم نتمكن من إكمال التحقق الأمني. قد يكون ذلك بسبب الشبكة أو مانع الإعلانات — حاول مرة أخرى أو أعد تحميل الصفحة.",
		genericTitle: "تعذّر الاتصال",
		genericBody: "حدث خطأ ما أثناء تسجيل دخولك. يرجى المحاولة بعد قليل.",
		retry: "حاول مرة أخرى",
		dismiss: "إغلاق"
	},
	profile: {
		title: "ملفك الشخصي",
		subtitle: "حدّث معلوماتك وطريقة عمل الأداة.",
		uploadAvatar: "تغيير الصورة",
		removeAvatar: "إزالة الصورة",
		avatarUploading: "جارٍ الرفع…",
		preferencesHeading: "التفضيلات",
		preferenceLanguage: "اللغة",
		preferenceDesktopNotifications: "إشعارات سطح المكتب",
		preferenceDesktopNotificationsHint: "احصل على إشعار نظام عندما لا تكون الأداة في المقدمة.",
		preferenceThemeMode: "المظهر",
		themeAuto: "حسب النظام",
		themeLight: "فاتح",
		themeDark: "داكن",
		themeLocked: "تم ضبط المظهر بواسطة المشغّل.",
		pinnedHint: "تم ضبطه بواسطة المشغّل — غير قابل للتعديل.",
		requiredHint: "مطلوب",
		invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صالح.",
		invalidPhone: "استخدم التنسيق الدولي، مثل +14155552671.",
		noFields: "لا يوجد شيء لتعديله هنا بعد.",
		save: "حفظ التغييرات",
		saving: "جارٍ الحفظ…",
		cancel: "تجاهل",
		saved: "تم حفظ التغييرات.",
		loading: "جارٍ تحميل الملف الشخصي…",
		loadError: "تعذّر تحميل ملفك الشخصي. يرجى المحاولة مرة أخرى.",
		retry: "إعادة المحاولة",
		errorFieldNotAllowed: "هذا الحقل غير قابل للتعديل في هذه الأداة. حاول تحديث الصفحة.",
		errorFieldPinned: "هذا الحقل مقفل بواسطة حسابك.",
		errorFieldInvalid: "بعض القيم غير صالحة. تحقق من الحقول المظللة.",
		errorThemeLocked: "المظهر مقفل بواسطة المشغّل.",
		errorFeatureDisabled: "تم تعطيل تعديل الملف الشخصي بواسطة المشغّل.",
		errorGeneric: "تعذّر حفظ تغييراتك. يرجى المحاولة مرة أخرى.",
		notificationsBlocked: "الإشعارات محظورة بواسطة المتصفح. حدّث أذونات الموقع لتفعيلها.",
		notificationsRequest: "اسمح بالإشعارات عند طلب المتصفح لتفعيل هذه الميزة.",
		systemFields: {
			avatar: "الصورة",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "موافقة WhatsApp",
			webVerified: "زائر موثّق",
			firstName: "الاسم الأول",
			lastName: "اسم العائلة",
			username: "اسم المستخدم",
			language: "اللغة",
			email: "البريد الإلكتروني",
			phone: "الهاتف",
			company: "الشركة",
			location: "الموقع",
			isValid: "حساب صالح",
			chatStatus: "حالة المحادثة",
			chatCategory: "فئة المحادثة",
			priority: "الأولوية",
			leadSource: "مصدر العميل المحتمل",
			leadStatus: "حالة العميل المحتمل",
			interestLevel: "مستوى الاهتمام",
			productInterest: "الاهتمام بالمنتج",
			budgetRange: "الميزانية",
			purchaseTimeline: "موعد الشراء",
			lastMessageSentAt: "آخر رسالة مُرسلة",
			lastMessageReceivedAt: "آخر رسالة مستلمة",
			lastSeenAt: "آخر ظهور",
			firstMessageReceivedAt: "أول تواصل",
			isBlocked: "محظور",
			registrationDate: "تاريخ التسجيل",
			aiAvailable: "مساعدة AI",
			totalMessagesSent: "الرسائل المُرسلة",
			totalMessagesReceived: "الرسائل المستلمة",
			totalAiMessagesSent: "رسائل AI المُرسلة",
			totalBotMessagesSent: "رسائل الروبوت المُرسلة",
			totalUserMessagesSent: "رسائل المشغّل المُرسلة",
			flowCompletionRate: "معدل اكتمال التدفقات",
			lastFlowCompleted: "آخر تدفق مكتمل",
			totalFlowsStarted: "التدفقات المبدوءة",
			totalFlowsCompleted: "التدفقات المكتملة"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "مشكلة",
				RESOLVED: "تم الحل",
				PENDING: "قيد الانتظار",
				IN_PROGRESS: "قيد التنفيذ",
				CLOSED: "مغلق"
			},
			chatCategory: {
				SALES: "مبيعات",
				SUPPORT: "دعم",
				BILLING: "فوترة",
				FEEDBACK: "ملاحظات",
				GENERAL: "عام",
				OTHER: "أخرى"
			},
			priority: {
				LOW: "منخفضة",
				MEDIUM: "متوسطة",
				HIGH: "عالية",
				URGENT: "عاجلة"
			},
			leadStatus: {
				NEW: "جديد",
				CONTACTED: "تم التواصل",
				QUALIFIED: "مؤهل",
				NEGOTIATING: "قيد التفاوض",
				WON: "ناجح",
				LOST: "خاسر"
			},
			interestLevel: {
				LOW: "منخفض",
				MEDIUM: "متوسط",
				HIGH: "عالٍ",
				VERY_HIGH: "عالٍ جدًا"
			}
		}
	}
}, wv = {
	tabs: {
		home: "Domů",
		messages: "Zprávy",
		help: "Nápověda",
		news: "Novinky",
		profile: "Profil"
	},
	header: {
		close: "Zavřít",
		back: "Zpět",
		conversationSubtitle: "Pomůže vám i náš tým",
		helpTitle: "Nápověda",
		newsTitle: "Novinky",
		expand: "Rozbalit widget",
		collapse: "Sbalit widget"
	},
	launcher: {
		open: "Otevřít chat",
		close: "Zavřít chat",
		loading: "Připojování…"
	},
	home: {
		greetingHeadline: "Ahoj 👋",
		greetingSubheadline: "Jak vám můžeme pomoci?",
		askTitle: "Položit otázku",
		askSubtitle: "Pomůže náš bot i tým",
		recentMessageLabel: "Poslední zpráva",
		recentMessageTitle: "Poslední zpráva",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 h",
		recentMessageSample: "Ahoj 👋 Děkujeme za zprávu - brzy se vám ozveme.",
		featuredArticleLoading: "Doporučený článek",
		featuredArticleTap: "Klepnutím otevřete",
		featuredArticleEmpty: "Vyberte článek",
		featuredArticleSetUp: "Nakonfigurujte tento blok v panelu",
		featuredArticleDemoEyebrow: "Pioneer · Rezervujte si datum",
		featuredArticleDemoHeadline: "8. října 2026",
		featuredArticleDemoSubline: "San Francisco · Osobně + online",
		featuredArticleDemoCta: "Zobrazit program",
		seeAgenda: "Zobrazit program",
		browseHelp: "Procházet nápovědu",
		whatsNew: "Co je nového",
		searchPlaceholder: "Hledat v nápovědě",
		pinnedArticlesTitle: "Začněte tímto",
		popularArticlesTitle: "Populární články",
		pinnedArticleRow: "Připnutý článek {n}",
		newsPreviewTitle: "Nejnovější novinky",
		newsPreviewRow: "Aktualizace {n}",
		myConversationsTitle: "Vaše konverzace",
		myConversationsEmpty: "Zobrazit vaše konverzace",
		teamStatusOnline: "Jsme online",
		teamStatusReplyTime: "Obvykle odpovídáme do několika minut"
	},
	messages: {
		today: "Dnes",
		yesterday: "Včera",
		unreadMessages: "Nepřečtené zprávy",
		emptyTitle: "Zatím žádné zprávy",
		emptyBody: "Začněte konverzaci a náš tým vám odpoví zde.",
		sendCta: "Poslat zprávu",
		attach: "Připojit soubor",
		commands: "Rychlé příkazy",
		record: "Nahrát hlasovou zprávu",
		stopRecording: "Zastavit nahrávání",
		recording: "Nahrávám…",
		uploading: "Nahrávám…",
		uploadFailed: "Nahrávání selhalo",
		voiceDenied: "Přístup k mikrofonu byl odepřen",
		voiceUnsupported: "Tento prohlížeč nepodporuje nahrávání hlasu",
		fileTooLarge: "Soubor je příliš velký (max. 10 MB)",
		fileMimeNotAllowed: "Tento typ souboru není podporován",
		emoji: "Vložit emoji",
		cancelRecording: "Zrušit nahrávání",
		pauseRecording: "Pozastavit nahrávání",
		resumeRecording: "Pokračovat v nahrávání",
		playPreview: "Přehrát nahrávku",
		emojiPicker: "Výběr emoji",
		emojiSearch: "Hledat…",
		playAudio: "Přehrát",
		pauseAudio: "Pauza",
		openAudio: "Otevřít zvuk",
		removeAttachment: "Odebrat",
		aiAssistant: "AI asistent",
		operator: "Operátor",
		openImage: "Otevřít obrázek",
		openPreview: "Otevřít náhled",
		play: "Přehrát",
		pause: "Pauza",
		typing: "píše…",
		aiThinking: "přemýšlí…",
		aiSearching: "prohledává…",
		typingSomeone: "Někdo",
		signInToChat: "Přihlaste se prosím, abyste mohli začít konverzaci.",
		signInUnavailable: "Přihlášení není momentálně dostupné.",
		googleSignIn: "Přihlásit se přes Google",
		passkeySignIn: "Přihlásit se pomocí passkey",
		passkeyRegister: "Poprvé? Nastavte passkey",
		passkeyError: "Přihlášení se nezdařilo. Zkuste to znovu.",
		passkeyNoCredential: "Na tomto zařízení zatím není žádný passkey — klepnutím na „Nastavte passkey“ ho vytvoříte.",
		googleSignInDemo: "Pokračovat s Google",
		connectingOperator: "Byl přiřazen operátor, počkejte prosím…",
		assignment: { eta: {
			minutes: "Operátor odpoví přibližně za {minutes} min",
			soft: "Obvykle odpovídáme do několika minut",
			businessHours: "Tým se vrátí v {time}"
		} },
		withOperator: "Nyní si píšete s {name}",
		operatorConnected: "Operátor připojen",
		chatResolved: "Konverzace vyřešena",
		chatResolvedByYou: "Konverzaci jste vyřešili vy",
		chatResolvedByOperator: "Konverzaci vyřešil {name}",
		resolveConversation: "Vyřešit konverzaci",
		sources: "Zdroje",
		moreSources: "+{count} další"
	},
	prechat: {
		title: "Než začneme",
		subtitle: "Pár údajů, aby vám náš tým mohl pomoci rychleji.",
		labelName: "Jméno",
		labelEmail: "E-mail",
		labelPhone: "Telefon",
		labelCustom: "Podrobnosti",
		required: "Povinné",
		invalidEmail: "Zadejte platnou e-mailovou adresu",
		invalidPhone: "Zadejte platné telefonní číslo",
		submit: "Pokračovat",
		submitFailed: "Odeslání se nezdařilo - zkuste to znovu."
	},
	help: {
		searchPlaceholder: "Hledat v nápovědě",
		emptyTitle: "Zatím žádné články",
		emptyBody: "Váš operátor zatím nic nezveřejnil.",
		back: "Zpět",
		helpful: "Bylo to užitečné?",
		yes: "Ano",
		no: "Ne",
		thanks: "Děkujeme za zpětnou vazbu.",
		unresolvedCta: "Potřebujete další pomoc? Napište nám",
		noResults: "Žádné výsledky",
		articleNotFound: "Článek nebyl nalezen",
		articleNotTranslated: "Tento článek zatím není dostupný ve vašem jazyce.",
		writtenBy: "Autor: {names}",
		relatedTitle: "Související články",
		collectionsCount: "{count, plural, =0 {Žádné kolekce} one {# kolekce} few {# kolekce} many {# kolekce} other {# kolekcí}}",
		articlesCount: "{count, plural, =0 {Žádné články} one {Články: #} few {Články: #} many {Články: #} other {Články: #}}",
		authorsByline: "Autoři {first}{remaining, plural, =0 {} one { a # další} few { a # další} many { a # dalších} other { a # dalších}}"
	},
	news: {
		emptyTitle: "Zatím žádné novinky",
		emptyBody: "Vracejte se sem pro novinky o produktu a oznámení.",
		helpful: "Byl tento článek užitečný?",
		yes: "Ano",
		no: "Ne",
		thanks: "Děkujeme za zpětnou vazbu.",
		searchPlaceholder: "Hledat v novinkách",
		noResults: "Žádné odpovídající příspěvky",
		editedAt: "upraveno {when}",
		articleNotFound: "Článek nebyl nalezen.",
		articleNotTranslated: "Tento příspěvek zatím není dostupný ve vašem jazyce.",
		readOriginal: "Přečíst originál",
		relatedTitle: "Související",
		writtenBy: "Autor: {names}",
		unread: "Nepřečtené novinky"
	},
	reactions: {
		ariaLabel: "Reakce",
		tapAria: "Reagovat: {emoji}"
	},
	languageSelector: {
		title: "Číst v jiném jazyce",
		ariaLabel: "Jazyky článku"
	},
	branding: {
		poweredBy: "Pohání",
		wexio: "Wexio"
	},
	sound: {
		mute: "Vypnout zvuky oznámení",
		unmute: "Zapnout zvuky oznámení"
	},
	article: {
		tableOfContents: "Obsah",
		tabFallback: "Karta {n}"
	},
	peek: {
		newMessage: "Nová zpráva",
		dismiss: "Zavřít",
		aiAssistant: "AI asistent",
		operator: "Operátor"
	},
	lightbox: {
		mediaPreview: "Náhled média",
		close: "Zavřít náhled",
		previous: "Předchozí",
		next: "Další"
	},
	authError: {
		turnstileTitle: "Nepodařilo se ověřit prohlížeč",
		turnstileBody: "Nepodařilo se dokončit bezpečnostní kontrolu. Někdy je důvodem síť nebo blokátor reklam — zkuste to znovu nebo načtěte stránku.",
		genericTitle: "Nepodařilo se připojit",
		genericBody: "Při přihlašování se něco pokazilo. Zkuste to za chvíli znovu.",
		retry: "Zkusit znovu",
		dismiss: "Zavřít"
	},
	profile: {
		title: "Váš profil",
		subtitle: "Aktualizujte své údaje a chování widgetu.",
		uploadAvatar: "Změnit fotku",
		removeAvatar: "Odebrat fotku",
		avatarUploading: "Nahrávám…",
		preferencesHeading: "Předvolby",
		preferenceLanguage: "Jazyk",
		preferenceDesktopNotifications: "Oznámení na ploše",
		preferenceDesktopNotificationsHint: "Získejte systémové oznámení, když widget není aktivní.",
		preferenceThemeMode: "Motiv",
		themeAuto: "Podle systému",
		themeLight: "Světlý",
		themeDark: "Tmavý",
		themeLocked: "Motiv nastavil operátor.",
		pinnedHint: "Nastavil operátor — nelze upravovat.",
		requiredHint: "Povinné",
		invalidEmail: "Zadejte platnou e-mailovou adresu.",
		invalidPhone: "Použijte mezinárodní formát, např. +14155552671.",
		noFields: "Zatím tu není nic k úpravě.",
		save: "Uložit změny",
		saving: "Ukládám…",
		cancel: "Zahodit",
		saved: "Změny uloženy.",
		loading: "Načítání profilu…",
		loadError: "Nepodařilo se načíst profil. Zkuste to znovu.",
		retry: "Opakovat",
		errorFieldNotAllowed: "Toto pole nelze v tomto widgetu upravovat. Zkuste obnovit stránku.",
		errorFieldPinned: "Toto pole je uzamčeno vaším účtem.",
		errorFieldInvalid: "Některé hodnoty nejsou platné. Zkontrolujte zvýrazněná pole.",
		errorThemeLocked: "Motiv uzamkl operátor.",
		errorFeatureDisabled: "Úpravy profilu vypnul operátor.",
		errorGeneric: "Nepodařilo se uložit změny. Zkuste to znovu.",
		notificationsBlocked: "Oznámení jsou zablokována prohlížečem. Aktualizujte oprávnění webu, abyste je povolili.",
		notificationsRequest: "Když se objeví výzva, povolte oznámení, abyste tuto funkci aktivovali.",
		systemFields: {
			avatar: "Fotka",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "Souhlas s WhatsApp",
			webVerified: "Ověřený návštěvník",
			firstName: "Jméno",
			lastName: "Příjmení",
			username: "Uživatelské jméno",
			language: "Jazyk",
			email: "E-mail",
			phone: "Telefon",
			company: "Společnost",
			location: "Lokalita",
			isValid: "Platný účet",
			chatStatus: "Stav chatu",
			chatCategory: "Kategorie chatu",
			priority: "Priorita",
			leadSource: "Zdroj leadu",
			leadStatus: "Stav leadu",
			interestLevel: "Úroveň zájmu",
			productInterest: "Zájem o produkt",
			budgetRange: "Rozpočet",
			purchaseTimeline: "Časový plán nákupu",
			lastMessageSentAt: "Naposledy odesláno",
			lastMessageReceivedAt: "Naposledy přijato",
			lastSeenAt: "Naposledy viděn",
			firstMessageReceivedAt: "První kontakt",
			isBlocked: "Zablokovaný",
			registrationDate: "Registrace",
			aiAvailable: "Pomoc AI",
			totalMessagesSent: "Odeslané zprávy",
			totalMessagesReceived: "Přijaté zprávy",
			totalAiMessagesSent: "Odeslané AI zprávy",
			totalBotMessagesSent: "Odeslané bot zprávy",
			totalUserMessagesSent: "Odeslané zprávy operátora",
			flowCompletionRate: "Úspěšnost dokončení flow",
			lastFlowCompleted: "Poslední dokončený flow",
			totalFlowsStarted: "Spuštěné flow",
			totalFlowsCompleted: "Dokončené flow"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problém",
				RESOLVED: "Vyřešeno",
				PENDING: "Čeká",
				IN_PROGRESS: "Probíhá",
				CLOSED: "Uzavřeno"
			},
			chatCategory: {
				SALES: "Prodej",
				SUPPORT: "Podpora",
				BILLING: "Fakturace",
				FEEDBACK: "Zpětná vazba",
				GENERAL: "Obecné",
				OTHER: "Jiné"
			},
			priority: {
				LOW: "Nízká",
				MEDIUM: "Střední",
				HIGH: "Vysoká",
				URGENT: "Naléhavá"
			},
			leadStatus: {
				NEW: "Nový",
				CONTACTED: "Kontaktován",
				QUALIFIED: "Kvalifikovaný",
				NEGOTIATING: "Jednání",
				WON: "Získaný",
				LOST: "Ztracený"
			},
			interestLevel: {
				LOW: "Nízká",
				MEDIUM: "Střední",
				HIGH: "Vysoká",
				VERY_HIGH: "Velmi vysoká"
			}
		}
	}
}, Tv = {
	tabs: {
		home: "Hjem",
		messages: "Beskeder",
		help: "Hjælp",
		news: "Nyheder",
		profile: "Profil"
	},
	header: {
		close: "Luk",
		back: "Tilbage",
		conversationSubtitle: "Vores team kan også hjælpe",
		helpTitle: "Hjælp",
		newsTitle: "Nyheder",
		expand: "Udvid widget",
		collapse: "Skjul widget"
	},
	launcher: {
		open: "Åbn chat",
		close: "Luk chat",
		loading: "Forbinder…"
	},
	home: {
		greetingHeadline: "Hej der 👋",
		greetingSubheadline: "Hvordan kan vi hjælpe?",
		askTitle: "Stil et spørgsmål",
		askSubtitle: "Vores bot og team kan hjælpe",
		recentMessageLabel: "Seneste besked",
		recentMessageTitle: "Seneste besked",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4t",
		recentMessageSample: "Hej der 👋 Tak fordi du skrev - vi vender hurtigt tilbage.",
		featuredArticleLoading: "Fremhævet artikel",
		featuredArticleTap: "Tryk for at læse",
		featuredArticleEmpty: "Vælg en artikel",
		featuredArticleSetUp: "Konfigurer denne blok i dit dashboard",
		featuredArticleDemoEyebrow: "Pioneer · Sæt kryds i kalenderen",
		featuredArticleDemoHeadline: "8. oktober 2026",
		featuredArticleDemoSubline: "San Francisco · Fysisk + virtuel",
		featuredArticleDemoCta: "Se programmet",
		seeAgenda: "Se programmet",
		browseHelp: "Gennemse hjælp",
		whatsNew: "Nyheder",
		searchPlaceholder: "Søg i hjælpen",
		pinnedArticlesTitle: "Læs disse først",
		popularArticlesTitle: "Populære artikler",
		pinnedArticleRow: "Fastgjort artikel {n}",
		newsPreviewTitle: "Seneste nyt",
		newsPreviewRow: "Nyhedsopdatering {n}",
		myConversationsTitle: "Dine samtaler",
		myConversationsEmpty: "Se dine samtaler",
		teamStatusOnline: "Vi er online",
		teamStatusReplyTime: "Svarer som regel inden for få minutter"
	},
	messages: {
		today: "I dag",
		yesterday: "I går",
		unreadMessages: "Ulæste beskeder",
		emptyTitle: "Ingen beskeder endnu",
		emptyBody: "Start en samtale, så vender vores team tilbage her.",
		sendCta: "Send os en besked",
		attach: "Vedhæft en fil",
		commands: "Hurtige kommandoer",
		record: "Optag en talebesked",
		stopRecording: "Stop optagelse",
		recording: "Optager…",
		uploading: "Uploader…",
		uploadFailed: "Upload mislykkedes",
		voiceDenied: "Adgang til mikrofon er nægtet",
		voiceUnsupported: "Stemmeoptagelse understøttes ikke i denne browser",
		fileTooLarge: "Filen er for stor (maks. 10 MB)",
		fileMimeNotAllowed: "Denne filtype understøttes ikke",
		emoji: "Indsæt emoji",
		cancelRecording: "Annuller optagelse",
		pauseRecording: "Pause optagelse",
		resumeRecording: "Genoptag optagelse",
		playPreview: "Afspil optagelse",
		emojiPicker: "Emoji-vælger",
		emojiSearch: "Søg…",
		playAudio: "Afspil",
		pauseAudio: "Pause",
		openAudio: "Åbn lyd",
		removeAttachment: "Fjern",
		aiAssistant: "AI-assistent",
		operator: "Operatør",
		openImage: "Åbn billede",
		openPreview: "Åbn forhåndsvisning",
		play: "Afspil",
		pause: "Pause",
		typing: "skriver…",
		aiThinking: "tænker…",
		aiSearching: "søger…",
		typingSomeone: "Nogen",
		signInToChat: "Log ind for at starte samtalen.",
		signInUnavailable: "Login er ikke tilgængeligt lige nu.",
		googleSignIn: "Log ind med Google",
		passkeySignIn: "Log ind med en passkey",
		passkeyRegister: "Første gang? Opret en passkey",
		passkeyError: "Kunne ikke logge ind. Prøv igen.",
		passkeyNoCredential: "Ingen passkey på denne enhed endnu — tryk på ”Opret en passkey” for at oprette en.",
		googleSignInDemo: "Fortsæt med Google",
		connectingOperator: "En operatør er blevet tildelt, vent venligst…",
		assignment: { eta: {
			minutes: "En medarbejder svarer om cirka {minutes} min",
			soft: "Vi svarer normalt inden for få minutter",
			businessHours: "Teamet er tilbage {time}"
		} },
		withOperator: "Du chatter nu med {name}",
		operatorConnected: "Operatør forbundet",
		chatResolved: "Samtalen er løst",
		chatResolvedByYou: "Samtalen blev løst af dig",
		chatResolvedByOperator: "Samtalen blev løst af {name}",
		resolveConversation: "Løs samtalen",
		sources: "Kilder",
		moreSources: "+{count} mere"
	},
	prechat: {
		title: "Før vi starter",
		subtitle: "Et par hurtige detaljer, så vores team kan hjælpe dig hurtigere.",
		labelName: "Navn",
		labelEmail: "E-mail",
		labelPhone: "Telefon",
		labelCustom: "Detaljer",
		required: "Påkrævet",
		invalidEmail: "Indtast en gyldig e-mail",
		invalidPhone: "Indtast et gyldigt telefonnummer",
		submit: "Fortsæt",
		submitFailed: "Kunne ikke sende - prøv igen."
	},
	help: {
		searchPlaceholder: "Søg i hjælpen",
		emptyTitle: "Ingen artikler endnu",
		emptyBody: "Din operatør har endnu ikke udgivet noget.",
		back: "Tilbage",
		helpful: "Var dette nyttigt?",
		yes: "Ja",
		no: "Nej",
		thanks: "Tak for din feedback.",
		unresolvedCta: "Har du stadig brug for hjælp? Skriv til os",
		noResults: "Ingen resultater",
		articleNotFound: "Artikel ikke fundet",
		articleNotTranslated: "Denne artikel er endnu ikke tilgængelig på dit sprog.",
		writtenBy: "Skrevet af {names}",
		relatedTitle: "Relaterede artikler",
		collectionsCount: "{count, plural, =0 {Ingen samlinger} one {# samling} other {# samlinger}}",
		articlesCount: "{count, plural, =0 {Ingen artikler} one {Artikler: #} other {Artikler: #}}",
		authorsByline: "Forfattere {first}{remaining, plural, =0 {} one { og # mere} other { og # mere}}"
	},
	news: {
		emptyTitle: "Ingen opdateringer endnu",
		emptyBody: "Kig forbi her for produktnyt og meddelelser.",
		helpful: "Var denne artikel nyttig?",
		yes: "Ja",
		no: "Nej",
		thanks: "Tak for din feedback.",
		searchPlaceholder: "Søg i nyheder",
		noResults: "Ingen matchende opslag",
		editedAt: "redigeret {when}",
		articleNotFound: "Artikel ikke fundet.",
		articleNotTranslated: "Dette opslag er endnu ikke tilgængeligt på dit sprog.",
		readOriginal: "Læs originalen",
		relatedTitle: "Relateret",
		writtenBy: "Skrevet af {names}",
		unread: "Ulæste nyheder"
	},
	reactions: {
		ariaLabel: "Reaktioner",
		tapAria: "Reager med {emoji}"
	},
	languageSelector: {
		title: "Læs på et andet sprog",
		ariaLabel: "Artiklens sprog"
	},
	branding: {
		poweredBy: "Drevet af",
		wexio: "Wexio"
	},
	sound: {
		mute: "Slå notifikationslyde fra",
		unmute: "Slå notifikationslyde til"
	},
	article: {
		tableOfContents: "Indholdsfortegnelse",
		tabFallback: "Fane {n}"
	},
	peek: {
		newMessage: "Ny besked",
		dismiss: "Afvis",
		aiAssistant: "AI-assistent",
		operator: "Operatør"
	},
	lightbox: {
		mediaPreview: "Forhåndsvisning af medie",
		close: "Luk forhåndsvisning",
		previous: "Forrige",
		next: "Næste"
	},
	authError: {
		turnstileTitle: "Kunne ikke verificere din browser",
		turnstileBody: "Vi kunne ikke gennemføre sikkerhedstjekket. Det kan skyldes netværk eller en annonceblokering — prøv igen, eller genindlæs siden.",
		genericTitle: "Kunne ikke forbinde",
		genericBody: "Noget gik galt under login. Prøv igen om et øjeblik.",
		retry: "Prøv igen",
		dismiss: "Afvis"
	},
	profile: {
		title: "Din profil",
		subtitle: "Opdater dine oplysninger, og hvordan widgeten opfører sig.",
		uploadAvatar: "Skift foto",
		removeAvatar: "Fjern foto",
		avatarUploading: "Uploader…",
		preferencesHeading: "Indstillinger",
		preferenceLanguage: "Sprog",
		preferenceDesktopNotifications: "Notifikationer på skrivebordet",
		preferenceDesktopNotificationsHint: "Få en systemnotifikation, når widgeten ikke er i fokus.",
		preferenceThemeMode: "Tema",
		themeAuto: "Følg systemet",
		themeLight: "Lyst",
		themeDark: "Mørkt",
		themeLocked: "Temaet er sat af operatøren.",
		pinnedHint: "Sat af operatøren — kan ikke redigeres.",
		requiredHint: "Påkrævet",
		invalidEmail: "Indtast en gyldig e-mailadresse.",
		invalidPhone: "Brug internationalt format, f.eks. +14155552671.",
		noFields: "Der er intet at redigere her endnu.",
		save: "Gem ændringer",
		saving: "Gemmer…",
		cancel: "Annuller",
		saved: "Ændringerne er gemt.",
		loading: "Indlæser profil…",
		loadError: "Kunne ikke indlæse din profil. Prøv igen.",
		retry: "Prøv igen",
		errorFieldNotAllowed: "Dette felt kan ikke redigeres i denne widget. Prøv at opdatere.",
		errorFieldPinned: "Dette felt er låst af din konto.",
		errorFieldInvalid: "Nogle værdier er ikke gyldige. Tjek de markerede felter.",
		errorThemeLocked: "Temaet er låst af operatøren.",
		errorFeatureDisabled: "Profilredigering er slået fra af operatøren.",
		errorGeneric: "Kunne ikke gemme dine ændringer. Prøv igen.",
		notificationsBlocked: "Notifikationer er blokeret af browseren. Opdater sidens tilladelser for at slå dem til.",
		notificationsRequest: "Tillad notifikationer, når du bliver spurgt, for at aktivere dette.",
		systemFields: {
			avatar: "Foto",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp-samtykke",
			webVerified: "Verificeret besøgende",
			firstName: "Fornavn",
			lastName: "Efternavn",
			username: "Brugernavn",
			language: "Sprog",
			email: "E-mail",
			phone: "Telefon",
			company: "Virksomhed",
			location: "Placering",
			isValid: "Gyldig konto",
			chatStatus: "Chatstatus",
			chatCategory: "Chatkategori",
			priority: "Prioritet",
			leadSource: "Leadkilde",
			leadStatus: "Leadstatus",
			interestLevel: "Interesseniveau",
			productInterest: "Produktinteresse",
			budgetRange: "Budget",
			purchaseTimeline: "Tidsplan for køb",
			lastMessageSentAt: "Senest sendt",
			lastMessageReceivedAt: "Senest modtaget",
			lastSeenAt: "Senest set",
			firstMessageReceivedAt: "Første kontakt",
			isBlocked: "Blokeret",
			registrationDate: "Registreret",
			aiAvailable: "AI-assistance",
			totalMessagesSent: "Sendte beskeder",
			totalMessagesReceived: "Modtagne beskeder",
			totalAiMessagesSent: "Sendte AI-beskeder",
			totalBotMessagesSent: "Sendte bot-beskeder",
			totalUserMessagesSent: "Sendte operatørbeskeder",
			flowCompletionRate: "Gennemførelsesgrad for flows",
			lastFlowCompleted: "Senest gennemførte flow",
			totalFlowsStarted: "Startede flows",
			totalFlowsCompleted: "Gennemførte flows"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problem",
				RESOLVED: "Løst",
				PENDING: "Afventer",
				IN_PROGRESS: "I gang",
				CLOSED: "Lukket"
			},
			chatCategory: {
				SALES: "Salg",
				SUPPORT: "Support",
				BILLING: "Fakturering",
				FEEDBACK: "Feedback",
				GENERAL: "Generelt",
				OTHER: "Andet"
			},
			priority: {
				LOW: "Lav",
				MEDIUM: "Mellem",
				HIGH: "Høj",
				URGENT: "Haster"
			},
			leadStatus: {
				NEW: "Ny",
				CONTACTED: "Kontaktet",
				QUALIFIED: "Kvalificeret",
				NEGOTIATING: "Forhandler",
				WON: "Vundet",
				LOST: "Tabt"
			},
			interestLevel: {
				LOW: "Lav",
				MEDIUM: "Mellem",
				HIGH: "Høj",
				VERY_HIGH: "Meget høj"
			}
		}
	}
}, Ev = {
	tabs: {
		home: "Start",
		messages: "Nachrichten",
		help: "Hilfe",
		news: "Neuigkeiten",
		profile: "Profil"
	},
	header: {
		close: "Schließen",
		back: "Zurück",
		conversationSubtitle: "Unser Team hilft Ihnen ebenfalls gern",
		helpTitle: "Hilfe",
		newsTitle: "Neuigkeiten",
		expand: "Widget vergrößern",
		collapse: "Widget verkleinern"
	},
	launcher: {
		open: "Chat öffnen",
		close: "Chat schließen",
		loading: "Verbinden…"
	},
	home: {
		greetingHeadline: "Hallo 👋",
		greetingSubheadline: "Wie können wir helfen?",
		askTitle: "Stellen Sie eine Frage",
		askSubtitle: "Unser Bot und unser Team helfen weiter",
		recentMessageLabel: "Aktuelle Nachricht",
		recentMessageTitle: "Aktuelle Nachricht",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 Std.",
		recentMessageSample: "Hallo 👋 Danke für Ihre Nachricht – wir melden uns gleich.",
		featuredArticleLoading: "Empfohlener Artikel",
		featuredArticleTap: "Tippen zum Lesen",
		featuredArticleEmpty: "Artikel auswählen",
		featuredArticleSetUp: "Konfigurieren Sie diesen Block in Ihrem Dashboard",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "8. Oktober 2026",
		featuredArticleDemoSubline: "San Francisco · vor Ort + virtuell",
		featuredArticleDemoCta: "Launch-Agenda ansehen",
		seeAgenda: "Launch-Agenda ansehen",
		browseHelp: "Hilfe durchsuchen",
		whatsNew: "Was ist neu",
		searchPlaceholder: "Hilfe durchsuchen",
		pinnedArticlesTitle: "Zuerst lesen",
		popularArticlesTitle: "Beliebte Artikel",
		pinnedArticleRow: "Angehefteter Artikel {n}",
		newsPreviewTitle: "Aktuelle Neuigkeiten",
		newsPreviewRow: "News-Update {n}",
		myConversationsTitle: "Ihre Gespräche",
		myConversationsEmpty: "Ihre Gespräche anzeigen",
		teamStatusOnline: "Wir sind online",
		teamStatusReplyTime: "Antwortet meist innerhalb weniger Minuten"
	},
	messages: {
		today: "Heute",
		yesterday: "Gestern",
		unreadMessages: "Ungelesene Nachrichten",
		emptyTitle: "Noch keine Nachrichten",
		emptyBody: "Starten Sie ein Gespräch – unser Team antwortet Ihnen hier.",
		sendCta: "Nachricht senden",
		attach: "Datei anhängen",
		commands: "Schnellbefehle",
		record: "Sprachnachricht aufnehmen",
		stopRecording: "Aufnahme stoppen",
		recording: "Aufnahme läuft…",
		uploading: "Wird hochgeladen…",
		uploadFailed: "Upload fehlgeschlagen",
		voiceDenied: "Mikrofonzugriff verweigert",
		voiceUnsupported: "Sprachaufnahme wird in diesem Browser nicht unterstützt",
		fileTooLarge: "Datei ist zu groß (max. 10 MB)",
		fileMimeNotAllowed: "Dieser Dateityp wird nicht unterstützt",
		emoji: "Emoji einfügen",
		cancelRecording: "Aufnahme abbrechen",
		pauseRecording: "Aufnahme pausieren",
		resumeRecording: "Aufnahme fortsetzen",
		playPreview: "Aufnahme abspielen",
		emojiPicker: "Emoji-Auswahl",
		emojiSearch: "Suchen…",
		playAudio: "Abspielen",
		pauseAudio: "Pause",
		openAudio: "Audio öffnen",
		removeAttachment: "Entfernen",
		aiAssistant: "KI-Assistent",
		operator: "Mitarbeiter",
		openImage: "Bild öffnen",
		openPreview: "Vorschau öffnen",
		play: "Abspielen",
		pause: "Pause",
		typing: "schreibt…",
		aiThinking: "denkt nach…",
		aiSearching: "durchsucht…",
		typingSomeone: "Jemand",
		signInToChat: "Bitte melden Sie sich an, um das Gespräch zu starten.",
		signInUnavailable: "Anmeldung ist derzeit nicht verfügbar.",
		googleSignIn: "Mit Google anmelden",
		passkeySignIn: "Mit Passkey anmelden",
		passkeyRegister: "Zum ersten Mal hier? Passkey einrichten",
		passkeyError: "Anmeldung nicht möglich. Bitte erneut versuchen.",
		passkeyNoCredential: "Auf diesem Gerät ist noch kein Passkey vorhanden – tippen Sie auf „Passkey einrichten“, um einen zu erstellen.",
		googleSignInDemo: "Mit Google fortfahren",
		connectingOperator: "Ein Mitarbeiter wurde zugewiesen, bitte warten…",
		assignment: { eta: {
			minutes: "Ein Mitarbeiter antwortet in etwa {minutes} Min.",
			soft: "Wir antworten normalerweise innerhalb weniger Minuten",
			businessHours: "Das Team ist wieder um {time} erreichbar"
		} },
		withOperator: "Sie chatten jetzt mit {name}",
		operatorConnected: "Mitarbeiter verbunden",
		chatResolved: "Gespräch gelöst",
		chatResolvedByYou: "Gespräch von Ihnen gelöst",
		chatResolvedByOperator: "Gespräch gelöst von {name}",
		resolveConversation: "Gespräch als gelöst markieren",
		sources: "Quellen",
		moreSources: "+{count} weitere"
	},
	prechat: {
		title: "Bevor wir loslegen",
		subtitle: "Ein paar Angaben, damit unser Team schneller helfen kann.",
		labelName: "Name",
		labelEmail: "E-Mail",
		labelPhone: "Telefon",
		labelCustom: "Details",
		required: "Erforderlich",
		invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
		invalidPhone: "Bitte geben Sie eine gültige Telefonnummer ein",
		submit: "Weiter",
		submitFailed: "Senden fehlgeschlagen – bitte erneut versuchen."
	},
	help: {
		searchPlaceholder: "Hilfe durchsuchen",
		emptyTitle: "Noch keine Artikel",
		emptyBody: "Ihr Betreiber hat noch nichts veröffentlicht.",
		back: "Zurück",
		helpful: "War das hilfreich?",
		yes: "Ja",
		no: "Nein",
		thanks: "Danke für Ihr Feedback.",
		unresolvedCta: "Brauchen Sie weiter Hilfe? Schreiben Sie uns",
		noResults: "Keine Ergebnisse",
		articleNotFound: "Artikel nicht gefunden",
		articleNotTranslated: "Dieser Artikel ist in Ihrer Sprache noch nicht verfügbar.",
		writtenBy: "Geschrieben von {names}",
		relatedTitle: "Verwandte Artikel",
		collectionsCount: "{count, plural, =0 {Keine Sammlungen} one {# Sammlung} other {# Sammlungen}}",
		articlesCount: "{count, plural, =0 {Keine Artikel} one {Artikel: #} other {Artikel: #}}",
		authorsByline: "Autoren {first}{remaining, plural, =0 {} one { und # weitere(r)} other { und # weitere}}"
	},
	news: {
		emptyTitle: "Noch keine Updates",
		emptyBody: "Schauen Sie hier für Produktneuigkeiten und Ankündigungen vorbei.",
		helpful: "War dieser Artikel hilfreich?",
		yes: "Ja",
		no: "Nein",
		thanks: "Danke für Ihr Feedback.",
		searchPlaceholder: "Neuigkeiten durchsuchen",
		noResults: "Keine passenden Beiträge",
		editedAt: "bearbeitet {when}",
		articleNotFound: "Artikel nicht gefunden.",
		articleNotTranslated: "Dieser Beitrag ist in Ihrer Sprache noch nicht verfügbar.",
		readOriginal: "Original lesen",
		relatedTitle: "Ähnliche Beiträge",
		writtenBy: "Geschrieben von {names}",
		unread: "Ungelesene Neuigkeiten"
	},
	reactions: {
		ariaLabel: "Reaktionen",
		tapAria: "Mit {emoji} reagieren"
	},
	languageSelector: {
		title: "In einer anderen Sprache lesen",
		ariaLabel: "Artikelsprachen"
	},
	branding: {
		poweredBy: "Bereitgestellt von",
		wexio: "Wexio"
	},
	sound: {
		mute: "Benachrichtigungstöne stummschalten",
		unmute: "Benachrichtigungstöne aktivieren"
	},
	article: {
		tableOfContents: "Inhaltsverzeichnis",
		tabFallback: "Tab {n}"
	},
	peek: {
		newMessage: "Neue Nachricht",
		dismiss: "Schließen",
		aiAssistant: "KI-Assistent",
		operator: "Mitarbeiter"
	},
	lightbox: {
		mediaPreview: "Medienvorschau",
		close: "Vorschau schließen",
		previous: "Zurück",
		next: "Weiter"
	},
	authError: {
		turnstileTitle: "Browser konnte nicht verifiziert werden",
		turnstileBody: "Die Sicherheitsprüfung konnte nicht abgeschlossen werden. Manchmal liegt das am Netzwerk oder an einem Werbeblocker – versuchen Sie es erneut oder laden Sie die Seite neu.",
		genericTitle: "Verbindung fehlgeschlagen",
		genericBody: "Beim Anmelden ist etwas schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.",
		retry: "Erneut versuchen",
		dismiss: "Schließen"
	},
	profile: {
		title: "Ihr Profil",
		subtitle: "Aktualisieren Sie Ihre Daten und das Verhalten des Widgets.",
		uploadAvatar: "Foto ändern",
		removeAvatar: "Foto entfernen",
		avatarUploading: "Wird hochgeladen…",
		preferencesHeading: "Einstellungen",
		preferenceLanguage: "Sprache",
		preferenceDesktopNotifications: "Desktop-Benachrichtigungen",
		preferenceDesktopNotificationsHint: "Erhalten Sie eine Systembenachrichtigung, wenn das Widget nicht im Fokus ist.",
		preferenceThemeMode: "Design",
		themeAuto: "Wie System",
		themeLight: "Hell",
		themeDark: "Dunkel",
		themeLocked: "Das Design wird vom Betreiber festgelegt.",
		pinnedHint: "Vom Betreiber festgelegt – nicht bearbeitbar.",
		requiredHint: "Erforderlich",
		invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
		invalidPhone: "Internationales Format verwenden, z. B. +4915112345678.",
		noFields: "Hier gibt es noch nichts zu bearbeiten.",
		save: "Änderungen speichern",
		saving: "Wird gespeichert…",
		cancel: "Verwerfen",
		saved: "Änderungen gespeichert.",
		loading: "Profil wird geladen…",
		loadError: "Profil konnte nicht geladen werden. Bitte erneut versuchen.",
		retry: "Erneut versuchen",
		errorFieldNotAllowed: "Dieses Feld kann in diesem Widget nicht bearbeitet werden. Versuchen Sie es nach einem Neuladen.",
		errorFieldPinned: "Dieses Feld ist durch Ihr Konto gesperrt.",
		errorFieldInvalid: "Einige Werte sind ungültig. Bitte prüfen Sie die markierten Felder.",
		errorThemeLocked: "Das Design ist vom Betreiber gesperrt.",
		errorFeatureDisabled: "Die Profilbearbeitung wurde vom Betreiber deaktiviert.",
		errorGeneric: "Änderungen konnten nicht gespeichert werden. Bitte erneut versuchen.",
		notificationsBlocked: "Benachrichtigungen sind im Browser blockiert. Aktualisieren Sie die Seitenberechtigungen, um sie zu aktivieren.",
		notificationsRequest: "Lassen Sie Benachrichtigungen zu, wenn Sie dazu aufgefordert werden.",
		systemFields: {
			avatar: "Foto",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp-Zustimmung",
			webVerified: "Verifizierter Besucher",
			firstName: "Vorname",
			lastName: "Nachname",
			username: "Benutzername",
			language: "Sprache",
			email: "E-Mail",
			phone: "Telefon",
			company: "Unternehmen",
			location: "Standort",
			isValid: "Konto gültig",
			chatStatus: "Chat-Status",
			chatCategory: "Chat-Kategorie",
			priority: "Priorität",
			leadSource: "Lead-Quelle",
			leadStatus: "Lead-Status",
			interestLevel: "Interessenlevel",
			productInterest: "Produktinteresse",
			budgetRange: "Budget",
			purchaseTimeline: "Kaufzeitraum",
			lastMessageSentAt: "Zuletzt gesendet",
			lastMessageReceivedAt: "Zuletzt empfangen",
			lastSeenAt: "Zuletzt gesehen",
			firstMessageReceivedAt: "Erstkontakt",
			isBlocked: "Blockiert",
			registrationDate: "Registriert",
			aiAvailable: "KI-Unterstützung",
			totalMessagesSent: "Gesendete Nachrichten",
			totalMessagesReceived: "Empfangene Nachrichten",
			totalAiMessagesSent: "Von KI gesendet",
			totalBotMessagesSent: "Vom Bot gesendet",
			totalUserMessagesSent: "Von Mitarbeitenden gesendet",
			flowCompletionRate: "Abschlussrate Flow",
			lastFlowCompleted: "Zuletzt abgeschlossener Flow",
			totalFlowsStarted: "Gestartete Flows",
			totalFlowsCompleted: "Abgeschlossene Flows"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problem",
				RESOLVED: "Gelöst",
				PENDING: "Ausstehend",
				IN_PROGRESS: "In Bearbeitung",
				CLOSED: "Geschlossen"
			},
			chatCategory: {
				SALES: "Vertrieb",
				SUPPORT: "Support",
				BILLING: "Abrechnung",
				FEEDBACK: "Feedback",
				GENERAL: "Allgemein",
				OTHER: "Sonstiges"
			},
			priority: {
				LOW: "Niedrig",
				MEDIUM: "Mittel",
				HIGH: "Hoch",
				URGENT: "Dringend"
			},
			leadStatus: {
				NEW: "Neu",
				CONTACTED: "Kontaktiert",
				QUALIFIED: "Qualifiziert",
				NEGOTIATING: "In Verhandlung",
				WON: "Gewonnen",
				LOST: "Verloren"
			},
			interestLevel: {
				LOW: "Niedrig",
				MEDIUM: "Mittel",
				HIGH: "Hoch",
				VERY_HIGH: "Sehr hoch"
			}
		}
	}
}, Dv = {
	tabs: {
		home: "Αρχική",
		messages: "Μηνύματα",
		help: "Βοήθεια",
		news: "Νέα",
		profile: "Προφίλ"
	},
	header: {
		close: "Κλείσιμο",
		back: "Πίσω",
		conversationSubtitle: "Η ομάδα μας μπορεί επίσης να βοηθήσει",
		helpTitle: "Βοήθεια",
		newsTitle: "Νέα",
		expand: "Ανάπτυξη widget",
		collapse: "Σύμπτυξη widget"
	},
	launcher: {
		open: "Άνοιγμα συνομιλίας",
		close: "Κλείσιμο συνομιλίας",
		loading: "Σύνδεση…"
	},
	home: {
		greetingHeadline: "Γεια σου 👋",
		greetingSubheadline: "Πώς μπορούμε να βοηθήσουμε;",
		askTitle: "Κάνε μια ερώτηση",
		askSubtitle: "Το bot και η ομάδα μας μπορούν να βοηθήσουν",
		recentMessageLabel: "Πρόσφατο μήνυμα",
		recentMessageTitle: "Πρόσφατο μήνυμα",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 ώ",
		recentMessageSample: "Γεια 👋 Ευχαριστούμε που επικοινώνησες — θα επανέλθουμε σύντομα.",
		featuredArticleLoading: "Επιλεγμένο άρθρο",
		featuredArticleTap: "Πάτησε για να διαβάσεις",
		featuredArticleEmpty: "Διάλεξε ένα άρθρο",
		featuredArticleSetUp: "Ρύθμισε αυτό το μπλοκ στον πίνακά σου",
		featuredArticleDemoEyebrow: "Pioneer · Κράτησε την ημερομηνία",
		featuredArticleDemoHeadline: "8 Οκτωβρίου 2026",
		featuredArticleDemoSubline: "Σαν Φρανσίσκο · με φυσική παρουσία + διαδικτυακά",
		featuredArticleDemoCta: "Δες το πρόγραμμα του launch",
		seeAgenda: "Δες το πρόγραμμα του launch",
		browseHelp: "Περιήγηση στη Βοήθεια",
		whatsNew: "Τι νέο υπάρχει",
		searchPlaceholder: "Αναζήτηση στη Βοήθεια",
		pinnedArticlesTitle: "Διάβασε πρώτα αυτά",
		popularArticlesTitle: "Δημοφιλή άρθρα",
		pinnedArticleRow: "Καρφιτσωμένο άρθρο {n}",
		newsPreviewTitle: "Τελευταία νέα",
		newsPreviewRow: "Ενημέρωση {n}",
		myConversationsTitle: "Οι συνομιλίες σου",
		myConversationsEmpty: "Δες τις συνομιλίες σου",
		teamStatusOnline: "Είμαστε online",
		teamStatusReplyTime: "Συνήθως απαντάμε σε λίγα λεπτά"
	},
	messages: {
		today: "Σήμερα",
		yesterday: "Χθες",
		unreadMessages: "Μη αναγνωσμένα μηνύματα",
		emptyTitle: "Δεν υπάρχουν ακόμη μηνύματα",
		emptyBody: "Ξεκίνα μια συνομιλία και η ομάδα μας θα σου απαντήσει εδώ.",
		sendCta: "Στείλε μας μήνυμα",
		attach: "Επισύναψε αρχείο",
		commands: "Γρήγορες εντολές",
		record: "Ηχογράφησε φωνητικό μήνυμα",
		stopRecording: "Διακοπή ηχογράφησης",
		recording: "Ηχογράφηση…",
		uploading: "Μεταφόρτωση…",
		uploadFailed: "Η μεταφόρτωση απέτυχε",
		voiceDenied: "Απορρίφθηκε η πρόσβαση στο μικρόφωνο",
		voiceUnsupported: "Η εγγραφή φωνής δεν υποστηρίζεται σε αυτό το πρόγραμμα περιήγησης",
		fileTooLarge: "Το αρχείο είναι πολύ μεγάλο (έως 10 MB)",
		fileMimeNotAllowed: "Αυτός ο τύπος αρχείου δεν υποστηρίζεται",
		emoji: "Εισαγωγή emoji",
		cancelRecording: "Ακύρωση ηχογράφησης",
		pauseRecording: "Παύση ηχογράφησης",
		resumeRecording: "Συνέχιση ηχογράφησης",
		playPreview: "Αναπαραγωγή ηχογράφησης",
		emojiPicker: "Επιλογέας emoji",
		emojiSearch: "Αναζήτηση…",
		playAudio: "Αναπαραγωγή",
		pauseAudio: "Παύση",
		openAudio: "Άνοιγμα ήχου",
		removeAttachment: "Αφαίρεση",
		aiAssistant: "AI βοηθός",
		operator: "Χειριστής",
		openImage: "Άνοιγμα εικόνας",
		openPreview: "Άνοιγμα προεπισκόπησης",
		play: "Αναπαραγωγή",
		pause: "Παύση",
		typing: "πληκτρολογεί…",
		aiThinking: "σκέφτεται…",
		aiSearching: "ψάχνει…",
		typingSomeone: "Κάποιος",
		signInToChat: "Συνδέσου για να ξεκινήσεις τη συνομιλία.",
		signInUnavailable: "Η σύνδεση δεν είναι διαθέσιμη αυτή τη στιγμή.",
		googleSignIn: "Σύνδεση με Google",
		passkeySignIn: "Σύνδεση με passkey",
		passkeyRegister: "Πρώτη φορά; Δημιούργησε ένα passkey",
		passkeyError: "Δεν ήταν δυνατή η σύνδεση. Δοκίμασε ξανά.",
		passkeyNoCredential: "Δεν υπάρχει ακόμη passkey σε αυτή τη συσκευή — πάτησε «Δημιούργησε ένα passkey» για να δημιουργήσεις ένα.",
		googleSignInDemo: "Συνέχεια με Google",
		connectingOperator: "Έχει οριστεί χειριστής, παρακαλώ περιμένετε…",
		assignment: { eta: {
			minutes: "Ένας εκπρόσωπος θα απαντήσει σε περίπου {minutes} λεπτά",
			soft: "Συνήθως απαντάμε μέσα σε λίγα λεπτά",
			businessHours: "Η ομάδα θα επιστρέψει στις {time}"
		} },
		withOperator: "Συνομιλείτε τώρα με {name}",
		operatorConnected: "Ο χειριστής συνδέθηκε",
		chatResolved: "Η συνομιλία επιλύθηκε",
		chatResolvedByYou: "Η συνομιλία επιλύθηκε από εσάς",
		chatResolvedByOperator: "Η συνομιλία επιλύθηκε από {name}",
		resolveConversation: "Επίλυση συνομιλίας",
		sources: "Πηγές",
		moreSources: "+{count} ακόμη"
	},
	prechat: {
		title: "Πριν ξεκινήσουμε",
		subtitle: "Λίγες πληροφορίες ώστε η ομάδα μας να σε βοηθήσει πιο γρήγορα.",
		labelName: "Όνομα",
		labelEmail: "Email",
		labelPhone: "Τηλέφωνο",
		labelCustom: "Λεπτομέρειες",
		required: "Υποχρεωτικό",
		invalidEmail: "Εισήγαγε ένα έγκυρο email",
		invalidPhone: "Εισήγαγε έναν έγκυρο αριθμό τηλεφώνου",
		submit: "Συνέχεια",
		submitFailed: "Δεν ήταν δυνατή η υποβολή — δοκίμασε ξανά."
	},
	help: {
		searchPlaceholder: "Αναζήτηση στη Βοήθεια",
		emptyTitle: "Δεν υπάρχουν ακόμη άρθρα",
		emptyBody: "Ο χειριστής σου δεν έχει δημοσιεύσει ακόμη τίποτα.",
		back: "Πίσω",
		helpful: "Σου ήταν χρήσιμο;",
		yes: "Ναι",
		no: "Όχι",
		thanks: "Ευχαριστούμε για την ανατροφοδότηση.",
		unresolvedCta: "Χρειάζεσαι ακόμη βοήθεια; Στείλε μας μήνυμα",
		noResults: "Κανένα αποτέλεσμα",
		articleNotFound: "Το άρθρο δεν βρέθηκε",
		articleNotTranslated: "Αυτό το άρθρο δεν είναι ακόμη διαθέσιμο στη γλώσσα σου.",
		writtenBy: "Γράφτηκε από {names}",
		relatedTitle: "Σχετικά άρθρα",
		collectionsCount: "{count, plural, =0 {Καμία συλλογή} one {# συλλογή} other {# συλλογές}}",
		articlesCount: "{count, plural, =0 {Κανένα άρθρο} one {Άρθρα: #} other {Άρθρα: #}}",
		authorsByline: "Συγγραφείς {first}{remaining, plural, =0 {} one { και # ακόμη} other { και # ακόμη}}"
	},
	news: {
		unread: "Μη αναγνωσμένα νέα",
		emptyTitle: "Καμία ενημέρωση ακόμη",
		emptyBody: "Επίστρεψε εδώ για νέα προϊόντος και ανακοινώσεις.",
		helpful: "Σου ήταν χρήσιμο αυτό το άρθρο;",
		yes: "Ναι",
		no: "Όχι",
		thanks: "Ευχαριστούμε για την ανατροφοδότηση.",
		searchPlaceholder: "Αναζήτηση στα νέα",
		noResults: "Καμία αντίστοιχη δημοσίευση",
		editedAt: "επεξεργάστηκε {when}",
		articleNotFound: "Το άρθρο δεν βρέθηκε.",
		articleNotTranslated: "Αυτή η ανάρτηση δεν είναι ακόμη διαθέσιμη στη γλώσσα σου.",
		readOriginal: "Διάβασε το πρωτότυπο",
		relatedTitle: "Σχετικά",
		writtenBy: "Γράφτηκε από {names}"
	},
	reactions: {
		ariaLabel: "Αντιδράσεις",
		tapAria: "Αντίδραση με {emoji}"
	},
	languageSelector: {
		title: "Διάβασε σε άλλη γλώσσα",
		ariaLabel: "Γλώσσες άρθρου"
	},
	branding: {
		poweredBy: "Με την υποστήριξη του",
		wexio: "Wexio"
	},
	sound: {
		mute: "Σίγαση ήχων ειδοποιήσεων",
		unmute: "Ενεργοποίηση ήχων ειδοποιήσεων"
	},
	article: {
		tableOfContents: "Πίνακας περιεχομένων",
		tabFallback: "Καρτέλα {n}"
	},
	peek: {
		newMessage: "Νέο μήνυμα",
		dismiss: "Κλείσιμο",
		aiAssistant: "AI βοηθός",
		operator: "Χειριστής"
	},
	lightbox: {
		mediaPreview: "Προεπισκόπηση πολυμέσων",
		close: "Κλείσιμο προεπισκόπησης",
		previous: "Προηγούμενο",
		next: "Επόμενο"
	},
	authError: {
		turnstileTitle: "Δεν ήταν δυνατή η επαλήθευση του προγράμματος περιήγησης",
		turnstileBody: "Δεν μπορέσαμε να ολοκληρώσουμε τον έλεγχο ασφαλείας. Ορισμένες φορές αυτό οφείλεται σε πρόβλημα δικτύου ή σε ad-blocker — δοκίμασε ξανά ή φόρτωσε ξανά τη σελίδα.",
		genericTitle: "Δεν ήταν δυνατή η σύνδεση",
		genericBody: "Κάτι πήγε στραβά κατά τη σύνδεσή σου. Δοκίμασε ξανά σε λίγο.",
		retry: "Δοκίμασε ξανά",
		dismiss: "Κλείσιμο"
	},
	profile: {
		title: "Το προφίλ σου",
		subtitle: "Ενημέρωσε τα στοιχεία σου και τη συμπεριφορά του widget.",
		uploadAvatar: "Αλλαγή φωτογραφίας",
		removeAvatar: "Αφαίρεση φωτογραφίας",
		avatarUploading: "Μεταφόρτωση…",
		preferencesHeading: "Προτιμήσεις",
		preferenceLanguage: "Γλώσσα",
		preferenceDesktopNotifications: "Ειδοποιήσεις επιφάνειας εργασίας",
		preferenceDesktopNotificationsHint: "Λάβε ειδοποίηση συστήματος όταν το widget δεν είναι εστιασμένο.",
		preferenceThemeMode: "Θέμα",
		themeAuto: "Όπως το σύστημα",
		themeLight: "Φωτεινό",
		themeDark: "Σκούρο",
		themeLocked: "Το θέμα έχει οριστεί από τον χειριστή.",
		pinnedHint: "Έχει οριστεί από τον χειριστή — δεν επεξεργάζεται.",
		requiredHint: "Υποχρεωτικό",
		invalidEmail: "Εισήγαγε μια έγκυρη διεύθυνση email.",
		invalidPhone: "Χρησιμοποίησε διεθνή μορφή, π.χ. +14155552671.",
		noFields: "Δεν υπάρχει τίποτα προς επεξεργασία ακόμη.",
		save: "Αποθήκευση αλλαγών",
		saving: "Αποθήκευση…",
		cancel: "Απόρριψη",
		saved: "Οι αλλαγές αποθηκεύτηκαν.",
		loading: "Φόρτωση προφίλ…",
		loadError: "Δεν ήταν δυνατή η φόρτωση του προφίλ σου. Δοκίμασε ξανά.",
		retry: "Δοκίμασε ξανά",
		errorFieldNotAllowed: "Αυτό το πεδίο δεν επεξεργάζεται σε αυτό το widget. Δοκίμασε ανανέωση.",
		errorFieldPinned: "Αυτό το πεδίο είναι κλειδωμένο από τον λογαριασμό σου.",
		errorFieldInvalid: "Ορισμένες τιμές δεν είναι έγκυρες. Έλεγξε τα επισημασμένα πεδία.",
		errorThemeLocked: "Το θέμα είναι κλειδωμένο από τον χειριστή.",
		errorFeatureDisabled: "Η επεξεργασία προφίλ έχει απενεργοποιηθεί από τον χειριστή.",
		errorGeneric: "Δεν ήταν δυνατή η αποθήκευση των αλλαγών. Δοκίμασε ξανά.",
		notificationsBlocked: "Οι ειδοποιήσεις είναι αποκλεισμένες από το πρόγραμμα περιήγησης. Ενημέρωσε τις άδειες της ιστοσελίδας για να τις ενεργοποιήσεις.",
		notificationsRequest: "Επίτρεψε τις ειδοποιήσεις όταν σου ζητηθεί για να το ενεργοποιήσεις.",
		systemFields: {
			avatar: "Φωτογραφία",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "Συγκατάθεση WhatsApp",
			webVerified: "Επαληθευμένος επισκέπτης",
			firstName: "Όνομα",
			lastName: "Επώνυμο",
			username: "Όνομα χρήστη",
			language: "Γλώσσα",
			email: "Email",
			phone: "Τηλέφωνο",
			company: "Εταιρεία",
			location: "Τοποθεσία",
			isValid: "Έγκυρος λογαριασμός",
			chatStatus: "Κατάσταση συνομιλίας",
			chatCategory: "Κατηγορία συνομιλίας",
			priority: "Προτεραιότητα",
			leadSource: "Πηγή lead",
			leadStatus: "Κατάσταση lead",
			interestLevel: "Επίπεδο ενδιαφέροντος",
			productInterest: "Ενδιαφέρον προϊόντος",
			budgetRange: "Προϋπολογισμός",
			purchaseTimeline: "Χρονοδιάγραμμα αγοράς",
			lastMessageSentAt: "Τελευταίο σταλμένο μήνυμα",
			lastMessageReceivedAt: "Τελευταίο μήνυμα που λήφθηκε",
			lastSeenAt: "Τελευταία εμφάνιση",
			firstMessageReceivedAt: "Πρώτη επικοινωνία",
			isBlocked: "Αποκλεισμένος",
			registrationDate: "Εγγραφή",
			aiAvailable: "Υποστήριξη AI",
			totalMessagesSent: "Σταλμένα μηνύματα",
			totalMessagesReceived: "Ληφθέντα μηνύματα",
			totalAiMessagesSent: "Σταλμένα μηνύματα AI",
			totalBotMessagesSent: "Σταλμένα μηνύματα bot",
			totalUserMessagesSent: "Σταλμένα μηνύματα χειριστή",
			flowCompletionRate: "Ποσοστό ολοκλήρωσης flow",
			lastFlowCompleted: "Τελευταίο ολοκληρωμένο flow",
			totalFlowsStarted: "Flows που ξεκίνησαν",
			totalFlowsCompleted: "Flows που ολοκληρώθηκαν"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Πρόβλημα",
				RESOLVED: "Επιλύθηκε",
				PENDING: "Εκκρεμεί",
				IN_PROGRESS: "Σε εξέλιξη",
				CLOSED: "Έκλεισε"
			},
			chatCategory: {
				SALES: "Πωλήσεις",
				SUPPORT: "Υποστήριξη",
				BILLING: "Χρεώσεις",
				FEEDBACK: "Ανατροφοδότηση",
				GENERAL: "Γενικά",
				OTHER: "Άλλο"
			},
			priority: {
				LOW: "Χαμηλή",
				MEDIUM: "Μεσαία",
				HIGH: "Υψηλή",
				URGENT: "Επείγουσα"
			},
			leadStatus: {
				NEW: "Νέο",
				CONTACTED: "Επικοινωνήθηκε",
				QUALIFIED: "Κατάλληλο",
				NEGOTIATING: "Σε διαπραγμάτευση",
				WON: "Κερδίθηκε",
				LOST: "Χάθηκε"
			},
			interestLevel: {
				LOW: "Χαμηλό",
				MEDIUM: "Μεσαίο",
				HIGH: "Υψηλό",
				VERY_HIGH: "Πολύ υψηλό"
			}
		}
	}
}, Ov = {
	tabs: {
		home: "Home",
		messages: "Messages",
		help: "Help",
		news: "News",
		profile: "Profile"
	},
	header: {
		close: "Close",
		back: "Back",
		conversationSubtitle: "Our team can also help",
		helpTitle: "Help",
		newsTitle: "News",
		expand: "Expand widget",
		collapse: "Collapse widget"
	},
	launcher: {
		open: "Open chat",
		close: "Close chat",
		loading: "Connecting…"
	},
	home: {
		greetingHeadline: "Hi there 👋",
		greetingSubheadline: "How can we help?",
		askTitle: "Ask a question",
		askSubtitle: "Our bot and team can help",
		recentMessageLabel: "Recent message",
		recentMessageTitle: "Recent message",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4h",
		recentMessageSample: "Hi there 👋 Thanks for reaching out - we'll be right back with you.",
		featuredArticleLoading: "Featured article",
		featuredArticleTap: "Tap to read",
		featuredArticleEmpty: "Pick an article",
		featuredArticleSetUp: "Configure this block in your dashboard",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "October 8, 2026",
		featuredArticleDemoSubline: "San Francisco · In-person + virtual",
		featuredArticleDemoCta: "See the launch agenda",
		seeAgenda: "See the launch agenda",
		browseHelp: "Browse Help",
		whatsNew: "What's new",
		searchPlaceholder: "Search for help",
		pinnedArticlesTitle: "Read these first",
		popularArticlesTitle: "Popular articles",
		pinnedArticleRow: "Pinned article {n}",
		newsPreviewTitle: "Latest news",
		newsPreviewRow: "News update {n}",
		myConversationsTitle: "Your conversations",
		myConversationsEmpty: "View your conversations",
		teamStatusOnline: "We're online",
		teamStatusReplyTime: "Usually replies in a few minutes"
	},
	messages: {
		today: "Today",
		yesterday: "Yesterday",
		unreadMessages: "Unread messages",
		emptyTitle: "No messages yet",
		emptyBody: "Start a conversation and our team will get back to you here.",
		sendCta: "Send us a message",
		attach: "Attach a file",
		commands: "Quick commands",
		record: "Record a voice message",
		stopRecording: "Stop recording",
		recording: "Recording…",
		uploading: "Uploading…",
		uploadFailed: "Upload failed",
		voiceDenied: "Microphone access denied",
		voiceUnsupported: "Voice recording isn't supported in this browser",
		fileTooLarge: "File is too large (max 10MB)",
		fileMimeNotAllowed: "This file type isn't supported",
		emoji: "Insert emoji",
		cancelRecording: "Cancel recording",
		pauseRecording: "Pause recording",
		resumeRecording: "Resume recording",
		playPreview: "Play recording",
		emojiPicker: "Emoji picker",
		emojiSearch: "Search…",
		playAudio: "Play",
		pauseAudio: "Pause",
		openAudio: "Open audio",
		removeAttachment: "Remove",
		aiAssistant: "AI assistant",
		operator: "Operator",
		openImage: "Open image",
		openPreview: "Open preview",
		play: "Play",
		pause: "Pause",
		typing: "typing…",
		aiThinking: "thinking…",
		aiSearching: "browsing…",
		typingSomeone: "Someone",
		signInToChat: "Please sign in to start the conversation.",
		signInUnavailable: "Sign-in is not available right now.",
		googleSignIn: "Sign in with Google",
		passkeySignIn: "Sign in with a passkey",
		passkeyRegister: "First time? Set up a passkey",
		passkeyError: "Couldn't sign in. Please try again.",
		passkeyNoCredential: "No passkey on this device yet — tap “Set up a passkey” to create one.",
		googleSignInDemo: "Continue with Google",
		connectingOperator: "An operator has been assigned, please wait…",
		assignment: { eta: {
			minutes: "An operator will reply in about {minutes} min",
			soft: "We usually reply within a few minutes",
			businessHours: "The team will be back at {time}"
		} },
		withOperator: "You're now chatting with {name}",
		operatorConnected: "Operator connected",
		chatResolved: "Conversation resolved",
		chatResolvedByYou: "Conversation resolved by you",
		chatResolvedByOperator: "Conversation resolved by {name}",
		resolveConversation: "Resolve conversation",
		sources: "Sources",
		moreSources: "+{count} more"
	},
	prechat: {
		title: "Before we start",
		subtitle: "A few quick details so our team can help you faster.",
		labelName: "Name",
		labelEmail: "Email",
		labelPhone: "Phone",
		labelCustom: "Details",
		required: "Required",
		invalidEmail: "Please enter a valid email",
		invalidPhone: "Please enter a valid phone number",
		submit: "Continue",
		submitFailed: "Couldn't submit - please try again."
	},
	help: {
		searchPlaceholder: "Search for help",
		emptyTitle: "No articles yet",
		emptyBody: "Your operator hasn't published anything yet.",
		back: "Back",
		helpful: "Was this helpful?",
		yes: "Yes",
		no: "No",
		thanks: "Thanks for the feedback.",
		unresolvedCta: "Still need help? Message us",
		noResults: "No results",
		articleNotFound: "Article not found",
		articleNotTranslated: "This article isn't available in your language yet.",
		writtenBy: "Written by {names}",
		relatedTitle: "Related articles",
		collectionsCount: "{count, plural, =0 {No collections} one {# collection} other {# collections}}",
		articlesCount: "{count, plural, =0 {No articles} one {Articles: #} other {Articles: #}}",
		authorsByline: "Authors {first}{remaining, plural, =0 {} one { and # more} other { and # more}}"
	},
	news: {
		unread: "Unread news",
		emptyTitle: "No updates yet",
		emptyBody: "Check back here for product news and announcements.",
		helpful: "Was this article helpful?",
		yes: "Yes",
		no: "No",
		thanks: "Thanks for the feedback.",
		searchPlaceholder: "Search news",
		noResults: "No matching posts",
		editedAt: "edited {when}",
		articleNotFound: "Article not found.",
		articleNotTranslated: "This post isn't available in your language yet.",
		readOriginal: "Read the original",
		relatedTitle: "Related",
		writtenBy: "Written by {names}"
	},
	reactions: {
		ariaLabel: "Reactions",
		tapAria: "React with {emoji}"
	},
	languageSelector: {
		title: "Read in another language",
		ariaLabel: "Article languages"
	},
	branding: {
		poweredBy: "Powered by",
		wexio: "Wexio"
	},
	sound: {
		mute: "Mute notification sounds",
		unmute: "Unmute notification sounds"
	},
	article: {
		tableOfContents: "Table of contents",
		tabFallback: "Tab {n}"
	},
	peek: {
		newMessage: "New message",
		dismiss: "Dismiss",
		aiAssistant: "AI assistant",
		operator: "Operator"
	},
	lightbox: {
		mediaPreview: "Media preview",
		close: "Close preview",
		previous: "Previous",
		next: "Next"
	},
	authError: {
		turnstileTitle: "Couldn't verify your browser",
		turnstileBody: "We weren't able to complete the security check. This is sometimes a network or ad-blocker issue — try again, or reload the page.",
		genericTitle: "Couldn't connect",
		genericBody: "Something went wrong while signing you in. Please try again in a moment.",
		retry: "Try again",
		dismiss: "Dismiss"
	},
	profile: {
		title: "Your profile",
		subtitle: "Update your info and how the widget behaves.",
		uploadAvatar: "Change photo",
		removeAvatar: "Remove photo",
		avatarUploading: "Uploading…",
		preferencesHeading: "Preferences",
		preferenceLanguage: "Language",
		preferenceDesktopNotifications: "Desktop notifications",
		preferenceDesktopNotificationsHint: "Get a system notification when the widget isn't focused.",
		preferenceThemeMode: "Theme",
		themeAuto: "Match system",
		themeLight: "Light",
		themeDark: "Dark",
		themeLocked: "Theme is set by the operator.",
		pinnedHint: "Set by the operator — not editable.",
		requiredHint: "Required",
		invalidEmail: "Please enter a valid email address.",
		invalidPhone: "Use international format, e.g. +14155552671.",
		noFields: "There's nothing to edit here yet.",
		save: "Save changes",
		saving: "Saving…",
		cancel: "Discard",
		saved: "Changes saved.",
		loading: "Loading profile…",
		loadError: "Couldn't load your profile. Please try again.",
		retry: "Retry",
		errorFieldNotAllowed: "This field isn't editable in this widget. Try refreshing.",
		errorFieldPinned: "This field is locked by your account.",
		errorFieldInvalid: "Some values aren't valid. Check the highlighted fields.",
		errorThemeLocked: "Theme is locked by the operator.",
		errorFeatureDisabled: "Profile editing has been turned off by the operator.",
		errorGeneric: "Couldn't save your changes. Please try again.",
		notificationsBlocked: "Notifications are blocked by the browser. Update site permissions to enable.",
		notificationsRequest: "Allow notifications when prompted to enable this.",
		systemFields: {
			avatar: "Photo",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp opt-in",
			webVerified: "Verified visitor",
			firstName: "First name",
			lastName: "Last name",
			username: "Username",
			language: "Language",
			email: "Email",
			phone: "Phone",
			company: "Company",
			location: "Location",
			isValid: "Account valid",
			chatStatus: "Chat status",
			chatCategory: "Chat category",
			priority: "Priority",
			leadSource: "Lead source",
			leadStatus: "Lead status",
			interestLevel: "Interest level",
			productInterest: "Product interest",
			budgetRange: "Budget",
			purchaseTimeline: "Purchase timeline",
			lastMessageSentAt: "Last message sent",
			lastMessageReceivedAt: "Last message received",
			lastSeenAt: "Last seen",
			firstMessageReceivedAt: "First contact",
			isBlocked: "Blocked",
			registrationDate: "Registered",
			aiAvailable: "AI assistance",
			totalMessagesSent: "Messages sent",
			totalMessagesReceived: "Messages received",
			totalAiMessagesSent: "AI messages sent",
			totalBotMessagesSent: "Bot messages sent",
			totalUserMessagesSent: "Operator messages sent",
			flowCompletionRate: "Flow completion rate",
			lastFlowCompleted: "Last completed flow",
			totalFlowsStarted: "Flows started",
			totalFlowsCompleted: "Flows completed"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Issue",
				RESOLVED: "Resolved",
				PENDING: "Pending",
				IN_PROGRESS: "In progress",
				CLOSED: "Closed"
			},
			chatCategory: {
				SALES: "Sales",
				SUPPORT: "Support",
				BILLING: "Billing",
				FEEDBACK: "Feedback",
				GENERAL: "General",
				OTHER: "Other"
			},
			priority: {
				LOW: "Low",
				MEDIUM: "Medium",
				HIGH: "High",
				URGENT: "Urgent"
			},
			leadStatus: {
				NEW: "New",
				CONTACTED: "Contacted",
				QUALIFIED: "Qualified",
				NEGOTIATING: "Negotiating",
				WON: "Won",
				LOST: "Lost"
			},
			interestLevel: {
				LOW: "Low",
				MEDIUM: "Medium",
				HIGH: "High",
				VERY_HIGH: "Very high"
			}
		}
	}
}, kv = {
	tabs: {
		home: "Home",
		messages: "Messages",
		help: "Help",
		news: "News",
		profile: "Profile"
	},
	header: {
		close: "Close",
		back: "Back",
		conversationSubtitle: "Our team can also help",
		helpTitle: "Help",
		newsTitle: "News",
		expand: "Expand widget",
		collapse: "Collapse widget"
	},
	launcher: {
		open: "Open chat",
		close: "Close chat",
		loading: "Connecting…"
	},
	home: {
		greetingHeadline: "Hi there 👋",
		greetingSubheadline: "How can we help?",
		askTitle: "Ask a question",
		askSubtitle: "Our bot and team can help",
		recentMessageLabel: "Recent message",
		recentMessageTitle: "Recent message",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4h",
		recentMessageSample: "Hi there 👋 Thanks for reaching out - we'll be right back with you.",
		featuredArticleLoading: "Featured article",
		featuredArticleTap: "Tap to read",
		featuredArticleEmpty: "Pick an article",
		featuredArticleSetUp: "Configure this block in your dashboard",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "October 8, 2026",
		featuredArticleDemoSubline: "San Francisco · In-person + virtual",
		featuredArticleDemoCta: "See the launch agenda",
		seeAgenda: "See the launch agenda",
		browseHelp: "Browse Help",
		whatsNew: "What's new",
		searchPlaceholder: "Search for help",
		pinnedArticlesTitle: "Read these first",
		popularArticlesTitle: "Popular articles",
		pinnedArticleRow: "Pinned article {n}",
		newsPreviewTitle: "Latest news",
		newsPreviewRow: "News update {n}",
		myConversationsTitle: "Your conversations",
		myConversationsEmpty: "View your conversations",
		teamStatusOnline: "We're online",
		teamStatusReplyTime: "Usually replies in a few minutes"
	},
	messages: {
		today: "Today",
		yesterday: "Yesterday",
		unreadMessages: "Unread messages",
		emptyTitle: "No messages yet",
		emptyBody: "Start a conversation and our team will get back to you here.",
		sendCta: "Send us a message",
		attach: "Attach a file",
		commands: "Quick commands",
		record: "Record a voice message",
		stopRecording: "Stop recording",
		recording: "Recording…",
		uploading: "Uploading…",
		uploadFailed: "Upload failed",
		voiceDenied: "Microphone access denied",
		voiceUnsupported: "Voice recording isn't supported in this browser",
		fileTooLarge: "File is too large (max 10MB)",
		fileMimeNotAllowed: "This file type isn't supported",
		emoji: "Insert emoji",
		cancelRecording: "Cancel recording",
		pauseRecording: "Pause recording",
		resumeRecording: "Resume recording",
		playPreview: "Play recording",
		emojiPicker: "Emoji picker",
		emojiSearch: "Search…",
		playAudio: "Play",
		pauseAudio: "Pause",
		openAudio: "Open audio",
		removeAttachment: "Remove",
		aiAssistant: "AI assistant",
		operator: "Operator",
		openImage: "Open image",
		openPreview: "Open preview",
		play: "Play",
		pause: "Pause",
		typing: "typing…",
		aiThinking: "thinking…",
		aiSearching: "browsing…",
		typingSomeone: "Someone",
		signInToChat: "Please sign in to start the conversation.",
		signInUnavailable: "Sign-in is not available right now.",
		googleSignIn: "Sign in with Google",
		passkeySignIn: "Sign in with a passkey",
		passkeyRegister: "First time? Set up a passkey",
		passkeyError: "Couldn't sign in. Please try again.",
		passkeyNoCredential: "No passkey on this device yet — tap “Set up a passkey” to create one.",
		googleSignInDemo: "Continue with Google",
		connectingOperator: "An operator has been assigned, please wait…",
		assignment: { eta: {
			minutes: "An operator will reply in about {minutes} min",
			soft: "We usually reply within a few minutes",
			businessHours: "The team will be back at {time}"
		} },
		withOperator: "You're now chatting with {name}",
		operatorConnected: "Operator connected",
		chatResolved: "Conversation resolved",
		chatResolvedByYou: "Conversation resolved by you",
		chatResolvedByOperator: "Conversation resolved by {name}",
		resolveConversation: "Resolve conversation",
		sources: "Sources",
		moreSources: "+{count} more"
	},
	prechat: {
		title: "Before we start",
		subtitle: "A few quick details so our team can help you faster.",
		labelName: "Name",
		labelEmail: "Email",
		labelPhone: "Phone",
		labelCustom: "Details",
		required: "Required",
		invalidEmail: "Please enter a valid email",
		invalidPhone: "Please enter a valid phone number",
		submit: "Continue",
		submitFailed: "Couldn't submit - please try again."
	},
	help: {
		searchPlaceholder: "Search for help",
		emptyTitle: "No articles yet",
		emptyBody: "Your operator hasn't published anything yet.",
		back: "Back",
		helpful: "Was this helpful?",
		yes: "Yes",
		no: "No",
		thanks: "Thanks for the feedback.",
		unresolvedCta: "Still need help? Message us",
		noResults: "No results",
		articleNotFound: "Article not found",
		articleNotTranslated: "This article isn't available in your language yet.",
		writtenBy: "Written by {names}",
		relatedTitle: "Related articles",
		collectionsCount: "{count, plural, =0 {No collections} one {# collection} other {# collections}}",
		articlesCount: "{count, plural, =0 {No articles} one {Articles: #} other {Articles: #}}",
		authorsByline: "Authors {first}{remaining, plural, =0 {} one { and # more} other { and # more}}"
	},
	news: {
		emptyTitle: "No updates yet",
		emptyBody: "Check back here for product news and announcements.",
		helpful: "Was this article helpful?",
		yes: "Yes",
		no: "No",
		thanks: "Thanks for the feedback.",
		searchPlaceholder: "Search news",
		noResults: "No matching posts",
		editedAt: "edited {when}",
		articleNotFound: "Article not found.",
		articleNotTranslated: "This post isn't available in your language yet.",
		readOriginal: "Read the original",
		relatedTitle: "Related",
		writtenBy: "Written by {names}",
		unread: "Unread news"
	},
	reactions: {
		ariaLabel: "Reactions",
		tapAria: "React with {emoji}"
	},
	languageSelector: {
		title: "Read in another language",
		ariaLabel: "Article languages"
	},
	branding: {
		poweredBy: "Powered by",
		wexio: "Wexio"
	},
	sound: {
		mute: "Mute notification sounds",
		unmute: "Unmute notification sounds"
	},
	article: {
		tableOfContents: "Table of contents",
		tabFallback: "Tab {n}"
	},
	peek: {
		newMessage: "New message",
		dismiss: "Dismiss",
		aiAssistant: "AI assistant",
		operator: "Operator"
	},
	lightbox: {
		mediaPreview: "Media preview",
		close: "Close preview",
		previous: "Previous",
		next: "Next"
	},
	authError: {
		turnstileTitle: "Couldn't verify your browser",
		turnstileBody: "We weren't able to complete the security check. This is sometimes a network or ad-blocker issue — try again, or reload the page.",
		genericTitle: "Couldn't connect",
		genericBody: "Something went wrong while signing you in. Please try again in a moment.",
		retry: "Try again",
		dismiss: "Dismiss"
	},
	profile: {
		title: "Your profile",
		subtitle: "Update your info and how the widget behaves.",
		uploadAvatar: "Change photo",
		removeAvatar: "Remove photo",
		avatarUploading: "Uploading…",
		preferencesHeading: "Preferences",
		preferenceLanguage: "Language",
		preferenceDesktopNotifications: "Desktop notifications",
		preferenceDesktopNotificationsHint: "Get a system notification when the widget isn't focused.",
		preferenceThemeMode: "Theme",
		themeAuto: "Match system",
		themeLight: "Light",
		themeDark: "Dark",
		themeLocked: "Theme is set by the operator.",
		pinnedHint: "Set by the operator — not editable.",
		requiredHint: "Required",
		invalidEmail: "Please enter a valid email address.",
		invalidPhone: "Use international format, e.g. +14155552671.",
		noFields: "There's nothing to edit here yet.",
		save: "Save changes",
		saving: "Saving…",
		cancel: "Discard",
		saved: "Changes saved.",
		loading: "Loading profile…",
		loadError: "Couldn't load your profile. Please try again.",
		retry: "Retry",
		errorFieldNotAllowed: "This field isn't editable in this widget. Try refreshing.",
		errorFieldPinned: "This field is locked by your account.",
		errorFieldInvalid: "Some values aren't valid. Check the highlighted fields.",
		errorThemeLocked: "Theme is locked by the operator.",
		errorFeatureDisabled: "Profile editing has been turned off by the operator.",
		errorGeneric: "Couldn't save your changes. Please try again.",
		notificationsBlocked: "Notifications are blocked by the browser. Update site permissions to enable.",
		notificationsRequest: "Allow notifications when prompted to enable this.",
		systemFields: {
			avatar: "Photo",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp opt-in",
			webVerified: "Verified visitor",
			firstName: "First name",
			lastName: "Last name",
			username: "Username",
			language: "Language",
			email: "Email",
			phone: "Phone",
			company: "Company",
			location: "Location",
			isValid: "Account valid",
			chatStatus: "Chat status",
			chatCategory: "Chat category",
			priority: "Priority",
			leadSource: "Lead source",
			leadStatus: "Lead status",
			interestLevel: "Interest level",
			productInterest: "Product interest",
			budgetRange: "Budget",
			purchaseTimeline: "Purchase timeline",
			lastMessageSentAt: "Last message sent",
			lastMessageReceivedAt: "Last message received",
			lastSeenAt: "Last seen",
			firstMessageReceivedAt: "First contact",
			isBlocked: "Blocked",
			registrationDate: "Registered",
			aiAvailable: "AI assistance",
			totalMessagesSent: "Messages sent",
			totalMessagesReceived: "Messages received",
			totalAiMessagesSent: "AI messages sent",
			totalBotMessagesSent: "Bot messages sent",
			totalUserMessagesSent: "Operator messages sent",
			flowCompletionRate: "Flow completion rate",
			lastFlowCompleted: "Last completed flow",
			totalFlowsStarted: "Flows started",
			totalFlowsCompleted: "Flows completed"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Issue",
				RESOLVED: "Resolved",
				PENDING: "Pending",
				IN_PROGRESS: "In progress",
				CLOSED: "Closed"
			},
			chatCategory: {
				SALES: "Sales",
				SUPPORT: "Support",
				BILLING: "Billing",
				FEEDBACK: "Feedback",
				GENERAL: "General",
				OTHER: "Other"
			},
			priority: {
				LOW: "Low",
				MEDIUM: "Medium",
				HIGH: "High",
				URGENT: "Urgent"
			},
			leadStatus: {
				NEW: "New",
				CONTACTED: "Contacted",
				QUALIFIED: "Qualified",
				NEGOTIATING: "Negotiating",
				WON: "Won",
				LOST: "Lost"
			},
			interestLevel: {
				LOW: "Low",
				MEDIUM: "Medium",
				HIGH: "High",
				VERY_HIGH: "Very high"
			}
		}
	}
}, Av = {
	tabs: {
		home: "Home",
		messages: "Messages",
		help: "Help",
		news: "News",
		profile: "Profile"
	},
	header: {
		close: "Close",
		back: "Back",
		conversationSubtitle: "Our team can also help",
		helpTitle: "Help",
		newsTitle: "News",
		expand: "Expand widget",
		collapse: "Collapse widget"
	},
	launcher: {
		open: "Open chat",
		close: "Close chat",
		loading: "Connecting…"
	},
	home: {
		greetingHeadline: "Hi there 👋",
		greetingSubheadline: "How can we help?",
		askTitle: "Ask a question",
		askSubtitle: "Our bot and team can help",
		recentMessageLabel: "Recent message",
		recentMessageTitle: "Recent message",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4h",
		recentMessageSample: "Hi there 👋 Thanks for reaching out - we'll be right back with you.",
		featuredArticleLoading: "Featured article",
		featuredArticleTap: "Tap to read",
		featuredArticleEmpty: "Pick an article",
		featuredArticleSetUp: "Configure this block in your dashboard",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "October 8, 2026",
		featuredArticleDemoSubline: "San Francisco · In-person + virtual",
		featuredArticleDemoCta: "See the launch agenda",
		seeAgenda: "See the launch agenda",
		browseHelp: "Browse Help",
		whatsNew: "What's new",
		searchPlaceholder: "Search for help",
		pinnedArticlesTitle: "Read these first",
		popularArticlesTitle: "Popular articles",
		pinnedArticleRow: "Pinned article {n}",
		newsPreviewTitle: "Latest news",
		newsPreviewRow: "News update {n}",
		myConversationsTitle: "Your conversations",
		myConversationsEmpty: "View your conversations",
		teamStatusOnline: "We're online",
		teamStatusReplyTime: "Usually replies in a few minutes"
	},
	messages: {
		today: "Today",
		yesterday: "Yesterday",
		unreadMessages: "Unread messages",
		emptyTitle: "No messages yet",
		emptyBody: "Start a conversation and our team will get back to you here.",
		sendCta: "Send us a message",
		attach: "Attach a file",
		commands: "Quick commands",
		record: "Record a voice message",
		stopRecording: "Stop recording",
		recording: "Recording…",
		uploading: "Uploading…",
		uploadFailed: "Upload failed",
		voiceDenied: "Microphone access denied",
		voiceUnsupported: "Voice recording isn't supported in this browser",
		fileTooLarge: "File is too large (max 10MB)",
		fileMimeNotAllowed: "This file type isn't supported",
		emoji: "Insert emoji",
		cancelRecording: "Cancel recording",
		pauseRecording: "Pause recording",
		resumeRecording: "Resume recording",
		playPreview: "Play recording",
		emojiPicker: "Emoji picker",
		emojiSearch: "Search…",
		playAudio: "Play",
		pauseAudio: "Pause",
		openAudio: "Open audio",
		removeAttachment: "Remove",
		aiAssistant: "AI assistant",
		operator: "Operator",
		openImage: "Open image",
		openPreview: "Open preview",
		play: "Play",
		pause: "Pause",
		typing: "typing…",
		aiThinking: "thinking…",
		aiSearching: "browsing…",
		typingSomeone: "Someone",
		signInToChat: "Please sign in to start the conversation.",
		signInUnavailable: "Sign-in is not available right now.",
		googleSignIn: "Sign in with Google",
		passkeySignIn: "Sign in with a passkey",
		passkeyRegister: "First time? Set up a passkey",
		passkeyError: "Couldn't sign in. Please try again.",
		passkeyNoCredential: "No passkey on this device yet — tap “Set up a passkey” to create one.",
		googleSignInDemo: "Continue with Google",
		connectingOperator: "An operator has been assigned, please wait…",
		assignment: { eta: {
			minutes: "An operator will reply in about {minutes} min",
			soft: "We usually reply within a few minutes",
			businessHours: "The team will be back at {time}"
		} },
		withOperator: "You're now chatting with {name}",
		operatorConnected: "Operator connected",
		chatResolved: "Conversation resolved",
		chatResolvedByYou: "Conversation resolved by you",
		chatResolvedByOperator: "Conversation resolved by {name}",
		resolveConversation: "Resolve conversation",
		sources: "Sources",
		moreSources: "+{count} more"
	},
	prechat: {
		title: "Before we start",
		subtitle: "A few quick details so our team can help you faster.",
		labelName: "Name",
		labelEmail: "Email",
		labelPhone: "Phone",
		labelCustom: "Details",
		required: "Required",
		invalidEmail: "Please enter a valid email",
		invalidPhone: "Please enter a valid phone number",
		submit: "Continue",
		submitFailed: "Couldn't submit - please try again."
	},
	help: {
		searchPlaceholder: "Search for help",
		emptyTitle: "No articles yet",
		emptyBody: "Your operator hasn't published anything yet.",
		back: "Back",
		helpful: "Was this helpful?",
		yes: "Yes",
		no: "No",
		thanks: "Thanks for the feedback.",
		unresolvedCta: "Still need help? Message us",
		noResults: "No results",
		articleNotFound: "Article not found",
		articleNotTranslated: "This article isn't available in your language yet.",
		writtenBy: "Written by {names}",
		relatedTitle: "Related articles",
		collectionsCount: "{count, plural, =0 {No collections} one {# collection} other {# collections}}",
		articlesCount: "{count, plural, =0 {No articles} one {Articles: #} other {Articles: #}}",
		authorsByline: "Authors {first}{remaining, plural, =0 {} one { and # more} other { and # more}}"
	},
	news: {
		emptyTitle: "No updates yet",
		emptyBody: "Check back here for product news and announcements.",
		helpful: "Was this article helpful?",
		yes: "Yes",
		no: "No",
		thanks: "Thanks for the feedback.",
		searchPlaceholder: "Search news",
		noResults: "No matching posts",
		editedAt: "edited {when}",
		articleNotFound: "Article not found.",
		articleNotTranslated: "This post isn't available in your language yet.",
		readOriginal: "Read the original",
		relatedTitle: "Related",
		writtenBy: "Written by {names}",
		unread: "Unread news"
	},
	reactions: {
		ariaLabel: "Reactions",
		tapAria: "React with {emoji}"
	},
	languageSelector: {
		title: "Read in another language",
		ariaLabel: "Article languages"
	},
	branding: {
		poweredBy: "Powered by",
		wexio: "Wexio"
	},
	sound: {
		mute: "Mute notification sounds",
		unmute: "Unmute notification sounds"
	},
	article: {
		tableOfContents: "Table of contents",
		tabFallback: "Tab {n}"
	},
	peek: {
		newMessage: "New message",
		dismiss: "Dismiss",
		aiAssistant: "AI assistant",
		operator: "Operator"
	},
	lightbox: {
		mediaPreview: "Media preview",
		close: "Close preview",
		previous: "Previous",
		next: "Next"
	},
	authError: {
		turnstileTitle: "Couldn't verify your browser",
		turnstileBody: "We weren't able to complete the security check. This is sometimes a network or ad-blocker issue — try again, or reload the page.",
		genericTitle: "Couldn't connect",
		genericBody: "Something went wrong while signing you in. Please try again in a moment.",
		retry: "Try again",
		dismiss: "Dismiss"
	},
	profile: {
		title: "Your profile",
		subtitle: "Update your info and how the widget behaves.",
		uploadAvatar: "Change photo",
		removeAvatar: "Remove photo",
		avatarUploading: "Uploading…",
		preferencesHeading: "Preferences",
		preferenceLanguage: "Language",
		preferenceDesktopNotifications: "Desktop notifications",
		preferenceDesktopNotificationsHint: "Get a system notification when the widget isn't focused.",
		preferenceThemeMode: "Theme",
		themeAuto: "Match system",
		themeLight: "Light",
		themeDark: "Dark",
		themeLocked: "Theme is set by the operator.",
		pinnedHint: "Set by the operator — not editable.",
		requiredHint: "Required",
		invalidEmail: "Please enter a valid email address.",
		invalidPhone: "Use international format, e.g. +14155552671.",
		noFields: "There's nothing to edit here yet.",
		save: "Save changes",
		saving: "Saving…",
		cancel: "Discard",
		saved: "Changes saved.",
		loading: "Loading profile…",
		loadError: "Couldn't load your profile. Please try again.",
		retry: "Retry",
		errorFieldNotAllowed: "This field isn't editable in this widget. Try refreshing.",
		errorFieldPinned: "This field is locked by your account.",
		errorFieldInvalid: "Some values aren't valid. Check the highlighted fields.",
		errorThemeLocked: "Theme is locked by the operator.",
		errorFeatureDisabled: "Profile editing has been turned off by the operator.",
		errorGeneric: "Couldn't save your changes. Please try again.",
		notificationsBlocked: "Notifications are blocked by the browser. Update site permissions to enable.",
		notificationsRequest: "Allow notifications when prompted to enable this.",
		systemFields: {
			avatar: "Photo",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp opt-in",
			webVerified: "Verified visitor",
			firstName: "First name",
			lastName: "Last name",
			username: "Username",
			language: "Language",
			email: "Email",
			phone: "Phone",
			company: "Company",
			location: "Location",
			isValid: "Account valid",
			chatStatus: "Chat status",
			chatCategory: "Chat category",
			priority: "Priority",
			leadSource: "Lead source",
			leadStatus: "Lead status",
			interestLevel: "Interest level",
			productInterest: "Product interest",
			budgetRange: "Budget",
			purchaseTimeline: "Purchase timeline",
			lastMessageSentAt: "Last message sent",
			lastMessageReceivedAt: "Last message received",
			lastSeenAt: "Last seen",
			firstMessageReceivedAt: "First contact",
			isBlocked: "Blocked",
			registrationDate: "Registered",
			aiAvailable: "AI assistance",
			totalMessagesSent: "Messages sent",
			totalMessagesReceived: "Messages received",
			totalAiMessagesSent: "AI messages sent",
			totalBotMessagesSent: "Bot messages sent",
			totalUserMessagesSent: "Operator messages sent",
			flowCompletionRate: "Flow completion rate",
			lastFlowCompleted: "Last completed flow",
			totalFlowsStarted: "Flows started",
			totalFlowsCompleted: "Flows completed"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Issue",
				RESOLVED: "Resolved",
				PENDING: "Pending",
				IN_PROGRESS: "In progress",
				CLOSED: "Closed"
			},
			chatCategory: {
				SALES: "Sales",
				SUPPORT: "Support",
				BILLING: "Billing",
				FEEDBACK: "Feedback",
				GENERAL: "General",
				OTHER: "Other"
			},
			priority: {
				LOW: "Low",
				MEDIUM: "Medium",
				HIGH: "High",
				URGENT: "Urgent"
			},
			leadStatus: {
				NEW: "New",
				CONTACTED: "Contacted",
				QUALIFIED: "Qualified",
				NEGOTIATING: "Negotiating",
				WON: "Won",
				LOST: "Lost"
			},
			interestLevel: {
				LOW: "Low",
				MEDIUM: "Medium",
				HIGH: "High",
				VERY_HIGH: "Very high"
			}
		}
	}
}, jv = {
	tabs: {
		home: "Inicio",
		messages: "Mensajes",
		help: "Ayuda",
		news: "Novedades",
		profile: "Perfil"
	},
	header: {
		close: "Cerrar",
		back: "Atrás",
		conversationSubtitle: "Nuestro equipo también puede ayudarte",
		helpTitle: "Ayuda",
		newsTitle: "Novedades",
		expand: "Ampliar widget",
		collapse: "Contraer widget"
	},
	launcher: {
		open: "Abrir chat",
		close: "Cerrar chat",
		loading: "Conectando…"
	},
	home: {
		greetingHeadline: "¡Hola! 👋",
		greetingSubheadline: "¿En qué podemos ayudarte?",
		askTitle: "Haz una pregunta",
		askSubtitle: "Nuestro bot y nuestro equipo pueden ayudarte",
		recentMessageLabel: "Mensaje reciente",
		recentMessageTitle: "Mensaje reciente",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 h",
		recentMessageSample: "Hola 👋 Gracias por contactarnos: enseguida te respondemos.",
		featuredArticleLoading: "Artículo destacado",
		featuredArticleTap: "Toca para leer",
		featuredArticleEmpty: "Elige un artículo",
		featuredArticleSetUp: "Configura este bloque en tu panel",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "8 de octubre de 2026",
		featuredArticleDemoSubline: "San Francisco · presencial + virtual",
		featuredArticleDemoCta: "Ver la agenda del evento",
		seeAgenda: "Ver la agenda del evento",
		browseHelp: "Explorar la ayuda",
		whatsNew: "Novedades",
		searchPlaceholder: "Buscar en la ayuda",
		pinnedArticlesTitle: "Lee esto primero",
		popularArticlesTitle: "Artículos populares",
		pinnedArticleRow: "Artículo fijado {n}",
		newsPreviewTitle: "Últimas novedades",
		newsPreviewRow: "Novedad {n}",
		myConversationsTitle: "Tus conversaciones",
		myConversationsEmpty: "Ver tus conversaciones",
		teamStatusOnline: "Estamos en línea",
		teamStatusReplyTime: "Normalmente respondemos en unos minutos"
	},
	messages: {
		today: "Hoy",
		yesterday: "Ayer",
		unreadMessages: "Mensajes sin leer",
		emptyTitle: "Aún no hay mensajes",
		emptyBody: "Empieza una conversación y nuestro equipo te responderá aquí.",
		sendCta: "Envíanos un mensaje",
		attach: "Adjuntar un archivo",
		commands: "Comandos rápidos",
		record: "Grabar un mensaje de voz",
		stopRecording: "Detener grabación",
		recording: "Grabando…",
		uploading: "Subiendo…",
		uploadFailed: "Error al subir",
		voiceDenied: "Acceso al micrófono denegado",
		voiceUnsupported: "Este navegador no admite grabación de voz",
		fileTooLarge: "El archivo es demasiado grande (máx. 10 MB)",
		fileMimeNotAllowed: "Este tipo de archivo no es compatible",
		emoji: "Insertar emoji",
		cancelRecording: "Cancelar grabación",
		pauseRecording: "Pausar grabación",
		resumeRecording: "Reanudar grabación",
		playPreview: "Reproducir grabación",
		emojiPicker: "Selector de emojis",
		emojiSearch: "Buscar…",
		playAudio: "Reproducir",
		pauseAudio: "Pausar",
		openAudio: "Abrir audio",
		removeAttachment: "Eliminar",
		aiAssistant: "Asistente de IA",
		operator: "Agente",
		openImage: "Abrir imagen",
		openPreview: "Abrir vista previa",
		play: "Reproducir",
		pause: "Pausar",
		typing: "escribiendo…",
		aiThinking: "pensando…",
		aiSearching: "buscando…",
		typingSomeone: "Alguien",
		signInToChat: "Inicia sesión para empezar la conversación.",
		signInUnavailable: "El inicio de sesión no está disponible ahora mismo.",
		googleSignIn: "Iniciar sesión con Google",
		passkeySignIn: "Iniciar sesión con una passkey",
		passkeyRegister: "¿Primera vez? Configurar una passkey",
		passkeyError: "No se pudo iniciar sesión. Inténtalo de nuevo.",
		passkeyNoCredential: "Aún no hay ninguna passkey en este dispositivo: toca «Configurar una passkey» para crear una.",
		googleSignInDemo: "Continuar con Google",
		connectingOperator: "Se ha asignado un agente, espera un momento…",
		assignment: { eta: {
			minutes: "Un agente responderá en unos {minutes} min",
			soft: "Normalmente respondemos en pocos minutos",
			businessHours: "El equipo volverá a las {time}"
		} },
		withOperator: "Ahora estás chateando con {name}",
		operatorConnected: "Agente conectado",
		chatResolved: "Conversación resuelta",
		chatResolvedByYou: "Conversación resuelta por ti",
		chatResolvedByOperator: "Conversación resuelta por {name}",
		resolveConversation: "Resolver conversación",
		sources: "Fuentes",
		moreSources: "+{count} más"
	},
	prechat: {
		title: "Antes de empezar",
		subtitle: "Unos datos rápidos para que nuestro equipo te ayude antes.",
		labelName: "Nombre",
		labelEmail: "Correo electrónico",
		labelPhone: "Teléfono",
		labelCustom: "Detalles",
		required: "Obligatorio",
		invalidEmail: "Introduce un correo electrónico válido",
		invalidPhone: "Introduce un número de teléfono válido",
		submit: "Continuar",
		submitFailed: "No se pudo enviar: inténtalo de nuevo."
	},
	help: {
		searchPlaceholder: "Buscar en la ayuda",
		emptyTitle: "Aún no hay artículos",
		emptyBody: "Tu operador todavía no ha publicado nada.",
		back: "Atrás",
		helpful: "¿Te ha resultado útil?",
		yes: "Sí",
		no: "No",
		thanks: "Gracias por tu opinión.",
		unresolvedCta: "¿Sigues necesitando ayuda? Escríbenos",
		noResults: "Sin resultados",
		articleNotFound: "Artículo no encontrado",
		articleNotTranslated: "Este artículo aún no está disponible en tu idioma.",
		writtenBy: "Escrito por {names}",
		relatedTitle: "Artículos relacionados",
		collectionsCount: "{count, plural, =0 {Sin colecciones} one {# colección} other {# colecciones}}",
		articlesCount: "{count, plural, =0 {Sin artículos} one {Artículos: #} other {Artículos: #}}",
		authorsByline: "Autores {first}{remaining, plural, =0 {} one { y # más} other { y # más}}"
	},
	news: {
		emptyTitle: "Aún no hay novedades",
		emptyBody: "Vuelve aquí para ver noticias del producto y anuncios.",
		helpful: "¿Te ha resultado útil este artículo?",
		yes: "Sí",
		no: "No",
		thanks: "Gracias por tu opinión.",
		searchPlaceholder: "Buscar novedades",
		noResults: "Sin publicaciones coincidentes",
		editedAt: "editado {when}",
		articleNotFound: "Artículo no encontrado.",
		articleNotTranslated: "Esta publicación aún no está disponible en tu idioma.",
		readOriginal: "Leer el original",
		relatedTitle: "Relacionados",
		writtenBy: "Escrito por {names}",
		unread: "Novedades sin leer"
	},
	reactions: {
		ariaLabel: "Reacciones",
		tapAria: "Reaccionar con {emoji}"
	},
	languageSelector: {
		title: "Leer en otro idioma",
		ariaLabel: "Idiomas del artículo"
	},
	branding: {
		poweredBy: "Con tecnología de",
		wexio: "Wexio"
	},
	sound: {
		mute: "Silenciar sonidos de notificación",
		unmute: "Activar sonidos de notificación"
	},
	article: {
		tableOfContents: "Tabla de contenidos",
		tabFallback: "Pestaña {n}"
	},
	peek: {
		newMessage: "Nuevo mensaje",
		dismiss: "Descartar",
		aiAssistant: "Asistente de IA",
		operator: "Agente"
	},
	lightbox: {
		mediaPreview: "Vista previa del medio",
		close: "Cerrar vista previa",
		previous: "Anterior",
		next: "Siguiente"
	},
	authError: {
		turnstileTitle: "No se pudo verificar tu navegador",
		turnstileBody: "No hemos podido completar la comprobación de seguridad. A veces se debe a la red o a un bloqueador de anuncios: inténtalo de nuevo o recarga la página.",
		genericTitle: "No se pudo conectar",
		genericBody: "Algo ha fallado al iniciar tu sesión. Vuelve a intentarlo en un momento.",
		retry: "Reintentar",
		dismiss: "Descartar"
	},
	profile: {
		title: "Tu perfil",
		subtitle: "Actualiza tus datos y la forma en que se comporta el widget.",
		uploadAvatar: "Cambiar foto",
		removeAvatar: "Quitar foto",
		avatarUploading: "Subiendo…",
		preferencesHeading: "Preferencias",
		preferenceLanguage: "Idioma",
		preferenceDesktopNotifications: "Notificaciones de escritorio",
		preferenceDesktopNotificationsHint: "Recibe una notificación del sistema cuando el widget no esté en primer plano.",
		preferenceThemeMode: "Tema",
		themeAuto: "Como el sistema",
		themeLight: "Claro",
		themeDark: "Oscuro",
		themeLocked: "El tema lo establece el operador.",
		pinnedHint: "Establecido por el operador: no se puede editar.",
		requiredHint: "Obligatorio",
		invalidEmail: "Introduce una dirección de correo válida.",
		invalidPhone: "Usa el formato internacional, p. ej. +34911234567.",
		noFields: "Aún no hay nada que editar aquí.",
		save: "Guardar cambios",
		saving: "Guardando…",
		cancel: "Descartar",
		saved: "Cambios guardados.",
		loading: "Cargando perfil…",
		loadError: "No se pudo cargar tu perfil. Inténtalo de nuevo.",
		retry: "Reintentar",
		errorFieldNotAllowed: "Este campo no es editable en este widget. Prueba a refrescar.",
		errorFieldPinned: "Este campo está bloqueado por tu cuenta.",
		errorFieldInvalid: "Algunos valores no son válidos. Revisa los campos marcados.",
		errorThemeLocked: "El tema está bloqueado por el operador.",
		errorFeatureDisabled: "El operador ha desactivado la edición del perfil.",
		errorGeneric: "No se pudieron guardar los cambios. Inténtalo de nuevo.",
		notificationsBlocked: "El navegador bloquea las notificaciones. Actualiza los permisos del sitio para activarlas.",
		notificationsRequest: "Permite las notificaciones cuando se te pida para activarlas.",
		systemFields: {
			avatar: "Foto",
			wexioId: "ID de Wexio",
			telegramId: "ID de Telegram",
			whatsappId: "ID de WhatsApp",
			viberId: "ID de Viber",
			instagramId: "ID de Instagram",
			optInWhatsapp: "Consentimiento de WhatsApp",
			webVerified: "Visitante verificado",
			firstName: "Nombre",
			lastName: "Apellidos",
			username: "Nombre de usuario",
			language: "Idioma",
			email: "Correo electrónico",
			phone: "Teléfono",
			company: "Empresa",
			location: "Ubicación",
			isValid: "Cuenta válida",
			chatStatus: "Estado del chat",
			chatCategory: "Categoría del chat",
			priority: "Prioridad",
			leadSource: "Origen del lead",
			leadStatus: "Estado del lead",
			interestLevel: "Nivel de interés",
			productInterest: "Interés en el producto",
			budgetRange: "Presupuesto",
			purchaseTimeline: "Plazo de compra",
			lastMessageSentAt: "Último mensaje enviado",
			lastMessageReceivedAt: "Último mensaje recibido",
			lastSeenAt: "Última conexión",
			firstMessageReceivedAt: "Primer contacto",
			isBlocked: "Bloqueado",
			registrationDate: "Registrado",
			aiAvailable: "Asistencia de IA",
			totalMessagesSent: "Mensajes enviados",
			totalMessagesReceived: "Mensajes recibidos",
			totalAiMessagesSent: "Mensajes enviados por IA",
			totalBotMessagesSent: "Mensajes enviados por el bot",
			totalUserMessagesSent: "Mensajes enviados por el agente",
			flowCompletionRate: "Tasa de finalización de flujos",
			lastFlowCompleted: "Último flujo completado",
			totalFlowsStarted: "Flujos iniciados",
			totalFlowsCompleted: "Flujos completados"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Incidencia",
				RESOLVED: "Resuelto",
				PENDING: "Pendiente",
				IN_PROGRESS: "En curso",
				CLOSED: "Cerrado"
			},
			chatCategory: {
				SALES: "Ventas",
				SUPPORT: "Soporte",
				BILLING: "Facturación",
				FEEDBACK: "Opiniones",
				GENERAL: "General",
				OTHER: "Otro"
			},
			priority: {
				LOW: "Baja",
				MEDIUM: "Media",
				HIGH: "Alta",
				URGENT: "Urgente"
			},
			leadStatus: {
				NEW: "Nuevo",
				CONTACTED: "Contactado",
				QUALIFIED: "Cualificado",
				NEGOTIATING: "En negociación",
				WON: "Ganado",
				LOST: "Perdido"
			},
			interestLevel: {
				LOW: "Bajo",
				MEDIUM: "Medio",
				HIGH: "Alto",
				VERY_HIGH: "Muy alto"
			}
		}
	}
}, Mv = {
	tabs: {
		home: "Inicio",
		messages: "Mensajes",
		help: "Ayuda",
		news: "Novedades",
		profile: "Perfil"
	},
	header: {
		close: "Cerrar",
		back: "Atrás",
		conversationSubtitle: "Nuestro equipo también puede ayudarte",
		helpTitle: "Ayuda",
		newsTitle: "Novedades",
		expand: "Ampliar widget",
		collapse: "Contraer widget"
	},
	launcher: {
		open: "Abrir chat",
		close: "Cerrar chat",
		loading: "Conectando…"
	},
	home: {
		greetingHeadline: "¡Hola! 👋",
		greetingSubheadline: "¿En qué te podemos ayudar?",
		askTitle: "Haz una pregunta",
		askSubtitle: "Nuestro bot y nuestro equipo te pueden ayudar",
		recentMessageLabel: "Mensaje reciente",
		recentMessageTitle: "Mensaje reciente",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 h",
		recentMessageSample: "Hola 👋 Gracias por escribirnos: enseguida te respondemos.",
		featuredArticleLoading: "Artículo destacado",
		featuredArticleTap: "Toca para leer",
		featuredArticleEmpty: "Elige un artículo",
		featuredArticleSetUp: "Configura este bloque en tu tablero",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "8 de octubre de 2026",
		featuredArticleDemoSubline: "San Francisco · presencial + virtual",
		featuredArticleDemoCta: "Ver la agenda del lanzamiento",
		seeAgenda: "Ver la agenda del lanzamiento",
		browseHelp: "Explorar la ayuda",
		whatsNew: "Lo nuevo",
		searchPlaceholder: "Buscar ayuda",
		pinnedArticlesTitle: "Lee esto primero",
		popularArticlesTitle: "Artículos populares",
		pinnedArticleRow: "Artículo fijado {n}",
		newsPreviewTitle: "Últimas novedades",
		newsPreviewRow: "Novedad {n}",
		myConversationsTitle: "Tus conversaciones",
		myConversationsEmpty: "Ver tus conversaciones",
		teamStatusOnline: "Estamos en línea",
		teamStatusReplyTime: "Normalmente respondemos en unos minutos"
	},
	messages: {
		today: "Hoy",
		yesterday: "Ayer",
		unreadMessages: "Mensajes sin leer",
		emptyTitle: "Todavía no hay mensajes",
		emptyBody: "Inicia una conversación y nuestro equipo te responderá aquí.",
		sendCta: "Envíanos un mensaje",
		attach: "Adjuntar un archivo",
		commands: "Comandos rápidos",
		record: "Grabar un mensaje de voz",
		stopRecording: "Detener grabación",
		recording: "Grabando…",
		uploading: "Subiendo…",
		uploadFailed: "Error al subir",
		voiceDenied: "Acceso al micrófono denegado",
		voiceUnsupported: "Este navegador no admite grabación de voz",
		fileTooLarge: "El archivo es demasiado grande (máx. 10 MB)",
		fileMimeNotAllowed: "Este tipo de archivo no es compatible",
		emoji: "Insertar emoji",
		cancelRecording: "Cancelar grabación",
		pauseRecording: "Pausar grabación",
		resumeRecording: "Reanudar grabación",
		playPreview: "Reproducir grabación",
		emojiPicker: "Selector de emojis",
		emojiSearch: "Buscar…",
		playAudio: "Reproducir",
		pauseAudio: "Pausar",
		openAudio: "Abrir audio",
		removeAttachment: "Quitar",
		aiAssistant: "Asistente de IA",
		operator: "Agente",
		openImage: "Abrir imagen",
		openPreview: "Abrir vista previa",
		play: "Reproducir",
		pause: "Pausar",
		typing: "escribiendo…",
		aiThinking: "pensando…",
		aiSearching: "buscando…",
		typingSomeone: "Alguien",
		signInToChat: "Inicia sesión para comenzar la conversación.",
		signInUnavailable: "El inicio de sesión no está disponible en este momento.",
		googleSignIn: "Iniciar sesión con Google",
		passkeySignIn: "Iniciar sesión con una passkey",
		passkeyRegister: "¿Primera vez? Configurar una passkey",
		passkeyError: "No se pudo iniciar sesión. Inténtalo de nuevo.",
		passkeyNoCredential: "Aún no hay ninguna passkey en este dispositivo: toca «Configurar una passkey» para crear una.",
		googleSignInDemo: "Continuar con Google",
		connectingOperator: "Se asignó un agente, espera un momento…",
		assignment: { eta: {
			minutes: "Un agente responderá en unos {minutes} min",
			soft: "Normalmente respondemos en pocos minutos",
			businessHours: "El equipo estará de vuelta a las {time}"
		} },
		withOperator: "Ahora estás chateando con {name}",
		operatorConnected: "Agente conectado",
		chatResolved: "Conversación resuelta",
		chatResolvedByYou: "Conversación resuelta por ti",
		chatResolvedByOperator: "Conversación resuelta por {name}",
		resolveConversation: "Resolver conversación",
		sources: "Fuentes",
		moreSources: "+{count} más"
	},
	prechat: {
		title: "Antes de comenzar",
		subtitle: "Unos datos rápidos para que nuestro equipo te ayude más rápido.",
		labelName: "Nombre",
		labelEmail: "Correo electrónico",
		labelPhone: "Teléfono",
		labelCustom: "Detalles",
		required: "Obligatorio",
		invalidEmail: "Ingresa un correo electrónico válido",
		invalidPhone: "Ingresa un número de teléfono válido",
		submit: "Continuar",
		submitFailed: "No se pudo enviar: inténtalo de nuevo."
	},
	help: {
		searchPlaceholder: "Buscar ayuda",
		emptyTitle: "Todavía no hay artículos",
		emptyBody: "Tu operador aún no ha publicado nada.",
		back: "Atrás",
		helpful: "¿Te resultó útil?",
		yes: "Sí",
		no: "No",
		thanks: "Gracias por tu opinión.",
		unresolvedCta: "¿Todavía necesitas ayuda? Escríbenos",
		noResults: "Sin resultados",
		articleNotFound: "Artículo no encontrado",
		articleNotTranslated: "Este artículo aún no está disponible en tu idioma.",
		writtenBy: "Escrito por {names}",
		relatedTitle: "Artículos relacionados",
		collectionsCount: "{count, plural, =0 {Sin colecciones} one {# colección} other {# colecciones}}",
		articlesCount: "{count, plural, =0 {Sin artículos} one {Artículos: #} other {Artículos: #}}",
		authorsByline: "Autores {first}{remaining, plural, =0 {} one { y # más} other { y # más}}"
	},
	news: {
		emptyTitle: "Todavía no hay actualizaciones",
		emptyBody: "Vuelve aquí para ver novedades y anuncios del producto.",
		helpful: "¿Te resultó útil este artículo?",
		yes: "Sí",
		no: "No",
		thanks: "Gracias por tu opinión.",
		searchPlaceholder: "Buscar novedades",
		noResults: "No hay publicaciones coincidentes",
		editedAt: "editado {when}",
		articleNotFound: "Artículo no encontrado.",
		articleNotTranslated: "Esta publicación aún no está disponible en tu idioma.",
		readOriginal: "Leer el original",
		relatedTitle: "Relacionados",
		writtenBy: "Escrito por {names}",
		unread: "Novedades sin leer"
	},
	reactions: {
		ariaLabel: "Reacciones",
		tapAria: "Reaccionar con {emoji}"
	},
	languageSelector: {
		title: "Leer en otro idioma",
		ariaLabel: "Idiomas del artículo"
	},
	branding: {
		poweredBy: "Con tecnología de",
		wexio: "Wexio"
	},
	sound: {
		mute: "Silenciar sonidos de notificación",
		unmute: "Activar sonidos de notificación"
	},
	article: {
		tableOfContents: "Tabla de contenidos",
		tabFallback: "Pestaña {n}"
	},
	peek: {
		newMessage: "Mensaje nuevo",
		dismiss: "Descartar",
		aiAssistant: "Asistente de IA",
		operator: "Agente"
	},
	lightbox: {
		mediaPreview: "Vista previa del contenido",
		close: "Cerrar vista previa",
		previous: "Anterior",
		next: "Siguiente"
	},
	authError: {
		turnstileTitle: "No se pudo verificar tu navegador",
		turnstileBody: "No pudimos completar la verificación de seguridad. A veces es un problema de red o de un bloqueador de anuncios: inténtalo de nuevo o recarga la página.",
		genericTitle: "No se pudo conectar",
		genericBody: "Algo salió mal al iniciar tu sesión. Inténtalo de nuevo en un momento.",
		retry: "Reintentar",
		dismiss: "Descartar"
	},
	profile: {
		title: "Tu perfil",
		subtitle: "Actualiza tus datos y cómo se comporta el widget.",
		uploadAvatar: "Cambiar foto",
		removeAvatar: "Quitar foto",
		avatarUploading: "Subiendo…",
		preferencesHeading: "Preferencias",
		preferenceLanguage: "Idioma",
		preferenceDesktopNotifications: "Notificaciones de escritorio",
		preferenceDesktopNotificationsHint: "Recibe una notificación del sistema cuando el widget no esté en primer plano.",
		preferenceThemeMode: "Tema",
		themeAuto: "Igual al sistema",
		themeLight: "Claro",
		themeDark: "Oscuro",
		themeLocked: "El tema lo define el operador.",
		pinnedHint: "Definido por el operador: no editable.",
		requiredHint: "Obligatorio",
		invalidEmail: "Ingresa una dirección de correo válida.",
		invalidPhone: "Usa el formato internacional, p. ej. +525512345678.",
		noFields: "Todavía no hay nada que editar aquí.",
		save: "Guardar cambios",
		saving: "Guardando…",
		cancel: "Descartar",
		saved: "Cambios guardados.",
		loading: "Cargando perfil…",
		loadError: "No se pudo cargar tu perfil. Inténtalo de nuevo.",
		retry: "Reintentar",
		errorFieldNotAllowed: "Este campo no es editable en este widget. Intenta recargar.",
		errorFieldPinned: "Este campo está bloqueado por tu cuenta.",
		errorFieldInvalid: "Algunos valores no son válidos. Revisa los campos marcados.",
		errorThemeLocked: "El tema está bloqueado por el operador.",
		errorFeatureDisabled: "El operador desactivó la edición del perfil.",
		errorGeneric: "No se pudieron guardar los cambios. Inténtalo de nuevo.",
		notificationsBlocked: "El navegador bloquea las notificaciones. Actualiza los permisos del sitio para activarlas.",
		notificationsRequest: "Permite las notificaciones cuando te lo solicite el navegador para activarlas.",
		systemFields: {
			avatar: "Foto",
			wexioId: "ID de Wexio",
			telegramId: "ID de Telegram",
			whatsappId: "ID de WhatsApp",
			viberId: "ID de Viber",
			instagramId: "ID de Instagram",
			optInWhatsapp: "Consentimiento de WhatsApp",
			webVerified: "Visitante verificado",
			firstName: "Nombre",
			lastName: "Apellido",
			username: "Nombre de usuario",
			language: "Idioma",
			email: "Correo electrónico",
			phone: "Teléfono",
			company: "Empresa",
			location: "Ubicación",
			isValid: "Cuenta válida",
			chatStatus: "Estado del chat",
			chatCategory: "Categoría del chat",
			priority: "Prioridad",
			leadSource: "Origen del prospecto",
			leadStatus: "Estado del prospecto",
			interestLevel: "Nivel de interés",
			productInterest: "Interés en el producto",
			budgetRange: "Presupuesto",
			purchaseTimeline: "Plazo de compra",
			lastMessageSentAt: "Último mensaje enviado",
			lastMessageReceivedAt: "Último mensaje recibido",
			lastSeenAt: "Última conexión",
			firstMessageReceivedAt: "Primer contacto",
			isBlocked: "Bloqueado",
			registrationDate: "Registrado",
			aiAvailable: "Asistencia de IA",
			totalMessagesSent: "Mensajes enviados",
			totalMessagesReceived: "Mensajes recibidos",
			totalAiMessagesSent: "Mensajes enviados por IA",
			totalBotMessagesSent: "Mensajes enviados por el bot",
			totalUserMessagesSent: "Mensajes enviados por el agente",
			flowCompletionRate: "Tasa de finalización de flujos",
			lastFlowCompleted: "Último flujo completado",
			totalFlowsStarted: "Flujos iniciados",
			totalFlowsCompleted: "Flujos completados"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problema",
				RESOLVED: "Resuelto",
				PENDING: "Pendiente",
				IN_PROGRESS: "En curso",
				CLOSED: "Cerrado"
			},
			chatCategory: {
				SALES: "Ventas",
				SUPPORT: "Soporte",
				BILLING: "Facturación",
				FEEDBACK: "Comentarios",
				GENERAL: "General",
				OTHER: "Otro"
			},
			priority: {
				LOW: "Baja",
				MEDIUM: "Media",
				HIGH: "Alta",
				URGENT: "Urgente"
			},
			leadStatus: {
				NEW: "Nuevo",
				CONTACTED: "Contactado",
				QUALIFIED: "Calificado",
				NEGOTIATING: "Negociando",
				WON: "Ganado",
				LOST: "Perdido"
			},
			interestLevel: {
				LOW: "Bajo",
				MEDIUM: "Medio",
				HIGH: "Alto",
				VERY_HIGH: "Muy alto"
			}
		}
	}
}, Nv = {
	tabs: {
		home: "Etusivu",
		messages: "Viestit",
		help: "Ohje",
		news: "Uutiset",
		profile: "Profiili"
	},
	header: {
		close: "Sulje",
		back: "Takaisin",
		conversationSubtitle: "Myös tiimimme voi auttaa",
		helpTitle: "Ohje",
		newsTitle: "Uutiset",
		expand: "Laajenna widget",
		collapse: "Pienennä widget"
	},
	launcher: {
		open: "Avaa chat",
		close: "Sulje chat",
		loading: "Yhdistetään…"
	},
	home: {
		greetingHeadline: "Hei 👋",
		greetingSubheadline: "Miten voimme auttaa?",
		askTitle: "Esitä kysymys",
		askSubtitle: "Bottimme ja tiimimme voivat auttaa",
		recentMessageLabel: "Viimeisin viesti",
		recentMessageTitle: "Viimeisin viesti",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 t",
		recentMessageSample: "Hei 👋 Kiitos yhteydenotosta - palaamme asiaan pian.",
		featuredArticleLoading: "Nostettu artikkeli",
		featuredArticleTap: "Avaa napauttamalla",
		featuredArticleEmpty: "Valitse artikkeli",
		featuredArticleSetUp: "Määritä tämä lohko hallintapaneelissa",
		featuredArticleDemoEyebrow: "Pioneer · Merkitse kalenteriin",
		featuredArticleDemoHeadline: "8. lokakuuta 2026",
		featuredArticleDemoSubline: "San Francisco · Paikan päällä + virtuaalisesti",
		featuredArticleDemoCta: "Katso ohjelma",
		seeAgenda: "Katso ohjelma",
		browseHelp: "Selaa ohjeita",
		whatsNew: "Mitä uutta",
		searchPlaceholder: "Hae ohjeista",
		pinnedArticlesTitle: "Lue ensin nämä",
		popularArticlesTitle: "Suositut artikkelit",
		pinnedArticleRow: "Kiinnitetty artikkeli {n}",
		newsPreviewTitle: "Viimeisimmät uutiset",
		newsPreviewRow: "Uutispäivitys {n}",
		myConversationsTitle: "Keskustelusi",
		myConversationsEmpty: "Näytä keskustelusi",
		teamStatusOnline: "Olemme paikalla",
		teamStatusReplyTime: "Vastaamme yleensä muutamassa minuutissa"
	},
	messages: {
		today: "Tänään",
		yesterday: "Eilen",
		unreadMessages: "Lukemattomat viestit",
		emptyTitle: "Ei vielä viestejä",
		emptyBody: "Aloita keskustelu, niin tiimimme vastaa sinulle täällä.",
		sendCta: "Lähetä meille viesti",
		attach: "Liitä tiedosto",
		commands: "Pikakomennot",
		record: "Tallenna ääniviesti",
		stopRecording: "Lopeta tallennus",
		recording: "Tallennetaan…",
		uploading: "Ladataan…",
		uploadFailed: "Lataus epäonnistui",
		voiceDenied: "Mikrofonin käyttö estetty",
		voiceUnsupported: "Tämä selain ei tue äänitallennusta",
		fileTooLarge: "Tiedosto on liian suuri (enintään 10 Mt)",
		fileMimeNotAllowed: "Tämä tiedostotyyppi ei ole tuettu",
		emoji: "Lisää emoji",
		cancelRecording: "Peruuta tallennus",
		pauseRecording: "Keskeytä tallennus",
		resumeRecording: "Jatka tallennusta",
		playPreview: "Toista tallenne",
		emojiPicker: "Emoji-valitsin",
		emojiSearch: "Hae…",
		playAudio: "Toista",
		pauseAudio: "Keskeytä",
		openAudio: "Avaa ääni",
		removeAttachment: "Poista",
		aiAssistant: "Tekoälyavustaja",
		operator: "Operaattori",
		openImage: "Avaa kuva",
		openPreview: "Avaa esikatselu",
		play: "Toista",
		pause: "Keskeytä",
		typing: "kirjoittaa…",
		aiThinking: "miettii…",
		aiSearching: "selaa…",
		typingSomeone: "Joku",
		signInToChat: "Kirjaudu sisään aloittaaksesi keskustelun.",
		signInUnavailable: "Kirjautuminen ei ole juuri nyt käytettävissä.",
		googleSignIn: "Kirjaudu Googlella",
		passkeySignIn: "Kirjaudu passkeyllä",
		passkeyRegister: "Ensimmäistä kertaa? Luo passkey",
		passkeyError: "Kirjautuminen ei onnistunut. Yritä uudelleen.",
		passkeyNoCredential: "Tällä laitteella ei vielä ole passkeytä — napauta ”Luo passkey” lisätäksesi sen.",
		googleSignInDemo: "Jatka Googlella",
		connectingOperator: "Operaattori on määritetty, odota hetki…",
		assignment: { eta: {
			minutes: "Operaattori vastaa noin {minutes} min kuluttua",
			soft: "Vastaamme yleensä muutamassa minuutissa",
			businessHours: "Tiimi palaa {time}"
		} },
		withOperator: "Keskustelet nyt henkilön {name} kanssa",
		operatorConnected: "Operaattori yhdistetty",
		chatResolved: "Keskustelu ratkaistu",
		chatResolvedByYou: "Ratkaisit keskustelun",
		chatResolvedByOperator: "{name} ratkaisi keskustelun",
		resolveConversation: "Ratkaise keskustelu",
		sources: "Lähteet",
		moreSources: "+{count} lisää"
	},
	prechat: {
		title: "Ennen kuin aloitamme",
		subtitle: "Muutama tieto, jotta tiimimme voi auttaa sinua nopeammin.",
		labelName: "Nimi",
		labelEmail: "Sähköposti",
		labelPhone: "Puhelin",
		labelCustom: "Lisätiedot",
		required: "Pakollinen",
		invalidEmail: "Anna kelvollinen sähköpostiosoite",
		invalidPhone: "Anna kelvollinen puhelinnumero",
		submit: "Jatka",
		submitFailed: "Lähetys epäonnistui - yritä uudelleen."
	},
	help: {
		searchPlaceholder: "Hae ohjeista",
		emptyTitle: "Ei vielä artikkeleita",
		emptyBody: "Operaattorisi ei ole vielä julkaissut mitään.",
		back: "Takaisin",
		helpful: "Oliko tästä apua?",
		yes: "Kyllä",
		no: "Ei",
		thanks: "Kiitos palautteesta.",
		unresolvedCta: "Tarvitsetko vielä apua? Lähetä meille viesti",
		noResults: "Ei tuloksia",
		articleNotFound: "Artikkelia ei löytynyt",
		articleNotTranslated: "Tämä artikkeli ei ole vielä saatavilla kielelläsi.",
		writtenBy: "Kirjoittaja: {names}",
		relatedTitle: "Liittyvät artikkelit",
		collectionsCount: "{count, plural, =0 {Ei kokoelmia} one {# kokoelma} other {# kokoelmaa}}",
		articlesCount: "{count, plural, =0 {Ei artikkeleita} one {Artikkeleita: #} other {Artikkeleita: #}}",
		authorsByline: "Kirjoittajat {first}{remaining, plural, =0 {} one { ja # muu} other { ja # muuta}}"
	},
	news: {
		emptyTitle: "Ei vielä päivityksiä",
		emptyBody: "Käy täällä lukemassa tuoteuutisia ja ilmoituksia.",
		helpful: "Oliko artikkelista apua?",
		yes: "Kyllä",
		no: "Ei",
		thanks: "Kiitos palautteesta.",
		searchPlaceholder: "Hae uutisista",
		noResults: "Ei osumia",
		editedAt: "muokattu {when}",
		articleNotFound: "Artikkelia ei löytynyt.",
		articleNotTranslated: "Tämä julkaisu ei ole vielä saatavilla kielelläsi.",
		readOriginal: "Lue alkuperäinen",
		relatedTitle: "Aiheeseen liittyvää",
		writtenBy: "Kirjoittaja: {names}",
		unread: "Lukemattomat uutiset"
	},
	reactions: {
		ariaLabel: "Reaktiot",
		tapAria: "Reagoi: {emoji}"
	},
	languageSelector: {
		title: "Lue toisella kielellä",
		ariaLabel: "Artikkelin kielet"
	},
	branding: {
		poweredBy: "Tarjoaa",
		wexio: "Wexio"
	},
	sound: {
		mute: "Mykistä ilmoitusäänet",
		unmute: "Poista ilmoitusäänten mykistys"
	},
	article: {
		tableOfContents: "Sisällysluettelo",
		tabFallback: "Välilehti {n}"
	},
	peek: {
		newMessage: "Uusi viesti",
		dismiss: "Sulje",
		aiAssistant: "Tekoälyavustaja",
		operator: "Operaattori"
	},
	lightbox: {
		mediaPreview: "Median esikatselu",
		close: "Sulje esikatselu",
		previous: "Edellinen",
		next: "Seuraava"
	},
	authError: {
		turnstileTitle: "Selaimen vahvistus epäonnistui",
		turnstileBody: "Emme voineet suorittaa turvatarkistusta loppuun. Syynä on toisinaan verkko tai mainosten estäjä — yritä uudelleen tai päivitä sivu.",
		genericTitle: "Yhteyden muodostaminen epäonnistui",
		genericBody: "Jokin meni vikaan sisäänkirjautumisessa. Yritä hetken kuluttua uudelleen.",
		retry: "Yritä uudelleen",
		dismiss: "Sulje"
	},
	profile: {
		title: "Profiilisi",
		subtitle: "Päivitä tietosi ja widgetin toiminta.",
		uploadAvatar: "Vaihda kuva",
		removeAvatar: "Poista kuva",
		avatarUploading: "Ladataan…",
		preferencesHeading: "Asetukset",
		preferenceLanguage: "Kieli",
		preferenceDesktopNotifications: "Työpöytäilmoitukset",
		preferenceDesktopNotificationsHint: "Saa järjestelmäilmoitus, kun widget ei ole aktiivinen.",
		preferenceThemeMode: "Teema",
		themeAuto: "Järjestelmän mukaan",
		themeLight: "Vaalea",
		themeDark: "Tumma",
		themeLocked: "Teema on operaattorin määrittämä.",
		pinnedHint: "Operaattorin määrittämä — ei muokattavissa.",
		requiredHint: "Pakollinen",
		invalidEmail: "Anna kelvollinen sähköpostiosoite.",
		invalidPhone: "Käytä kansainvälistä muotoa, esim. +14155552671.",
		noFields: "Täällä ei ole vielä mitään muokattavaa.",
		save: "Tallenna muutokset",
		saving: "Tallennetaan…",
		cancel: "Hylkää",
		saved: "Muutokset tallennettu.",
		loading: "Ladataan profiilia…",
		loadError: "Profiilin lataus epäonnistui. Yritä uudelleen.",
		retry: "Yritä uudelleen",
		errorFieldNotAllowed: "Tätä kenttää ei voi muokata tässä widgetissä. Yritä päivittää sivu.",
		errorFieldPinned: "Tämä kenttä on tilisi lukitsema.",
		errorFieldInvalid: "Osa arvoista on virheellisiä. Tarkista korostetut kentät.",
		errorThemeLocked: "Operaattori on lukinnut teeman.",
		errorFeatureDisabled: "Operaattori on poistanut profiilin muokkauksen käytöstä.",
		errorGeneric: "Muutosten tallennus epäonnistui. Yritä uudelleen.",
		notificationsBlocked: "Selain estää ilmoitukset. Päivitä sivuston käyttöoikeudet ottaaksesi ne käyttöön.",
		notificationsRequest: "Salli ilmoitukset, kun sitä pyydetään, ottaaksesi tämän käyttöön.",
		systemFields: {
			avatar: "Kuva",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp-suostumus",
			webVerified: "Vahvistettu kävijä",
			firstName: "Etunimi",
			lastName: "Sukunimi",
			username: "Käyttäjänimi",
			language: "Kieli",
			email: "Sähköposti",
			phone: "Puhelin",
			company: "Yritys",
			location: "Sijainti",
			isValid: "Tili voimassa",
			chatStatus: "Chatin tila",
			chatCategory: "Chatin kategoria",
			priority: "Prioriteetti",
			leadSource: "Liidin lähde",
			leadStatus: "Liidin tila",
			interestLevel: "Kiinnostuksen taso",
			productInterest: "Tuotekiinnostus",
			budgetRange: "Budjetti",
			purchaseTimeline: "Ostoaikataulu",
			lastMessageSentAt: "Viimeksi lähetetty",
			lastMessageReceivedAt: "Viimeksi vastaanotettu",
			lastSeenAt: "Viimeksi nähty",
			firstMessageReceivedAt: "Ensimmäinen kontakti",
			isBlocked: "Estetty",
			registrationDate: "Rekisteröity",
			aiAvailable: "Tekoälyapu",
			totalMessagesSent: "Lähetetyt viestit",
			totalMessagesReceived: "Vastaanotetut viestit",
			totalAiMessagesSent: "Lähetetyt tekoälyviestit",
			totalBotMessagesSent: "Lähetetyt bottiviestit",
			totalUserMessagesSent: "Lähetetyt operaattoriviestit",
			flowCompletionRate: "Flowien suoritusaste",
			lastFlowCompleted: "Viimeksi suoritettu flow",
			totalFlowsStarted: "Aloitettuja floweja",
			totalFlowsCompleted: "Suoritettuja floweja"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Ongelma",
				RESOLVED: "Ratkaistu",
				PENDING: "Odottaa",
				IN_PROGRESS: "Käynnissä",
				CLOSED: "Suljettu"
			},
			chatCategory: {
				SALES: "Myynti",
				SUPPORT: "Tuki",
				BILLING: "Laskutus",
				FEEDBACK: "Palaute",
				GENERAL: "Yleinen",
				OTHER: "Muu"
			},
			priority: {
				LOW: "Matala",
				MEDIUM: "Keskitaso",
				HIGH: "Korkea",
				URGENT: "Kiireellinen"
			},
			leadStatus: {
				NEW: "Uusi",
				CONTACTED: "Otettu yhteyttä",
				QUALIFIED: "Karsittu",
				NEGOTIATING: "Neuvotteluissa",
				WON: "Voitettu",
				LOST: "Menetetty"
			},
			interestLevel: {
				LOW: "Matala",
				MEDIUM: "Keskitaso",
				HIGH: "Korkea",
				VERY_HIGH: "Erittäin korkea"
			}
		}
	}
}, Pv = {
	tabs: {
		home: "Accueil",
		messages: "Messages",
		help: "Aide",
		news: "Actualités",
		profile: "Profil"
	},
	header: {
		close: "Fermer",
		back: "Retour",
		conversationSubtitle: "Notre équipe peut aussi vous aider",
		helpTitle: "Aide",
		newsTitle: "Actualités",
		expand: "Agrandir le widget",
		collapse: "Réduire le widget"
	},
	launcher: {
		open: "Ouvrir le chat",
		close: "Fermer le chat",
		loading: "Connexion…"
	},
	home: {
		greetingHeadline: "Bonjour 👋",
		greetingSubheadline: "Comment pouvons-nous vous aider ?",
		askTitle: "Posez une question",
		askSubtitle: "Notre bot et notre équipe peuvent vous aider",
		recentMessageLabel: "Message récent",
		recentMessageTitle: "Message récent",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 h",
		recentMessageSample: "Bonjour 👋 Merci de nous avoir contactés — nous revenons vers vous très vite.",
		featuredArticleLoading: "Article à la une",
		featuredArticleTap: "Appuyez pour lire",
		featuredArticleEmpty: "Choisissez un article",
		featuredArticleSetUp: "Configurez ce bloc dans votre tableau de bord",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "8 octobre 2026",
		featuredArticleDemoSubline: "San Francisco · présentiel + virtuel",
		featuredArticleDemoCta: "Voir le programme du lancement",
		seeAgenda: "Voir le programme du lancement",
		browseHelp: "Parcourir l'aide",
		whatsNew: "Quoi de neuf",
		searchPlaceholder: "Rechercher dans l'aide",
		pinnedArticlesTitle: "À lire en premier",
		popularArticlesTitle: "Articles populaires",
		pinnedArticleRow: "Article épinglé {n}",
		newsPreviewTitle: "Dernières actualités",
		newsPreviewRow: "Actualité {n}",
		myConversationsTitle: "Vos conversations",
		myConversationsEmpty: "Voir vos conversations",
		teamStatusOnline: "Nous sommes en ligne",
		teamStatusReplyTime: "Nous répondons généralement en quelques minutes"
	},
	messages: {
		today: "Aujourd'hui",
		yesterday: "Hier",
		unreadMessages: "Messages non lus",
		emptyTitle: "Aucun message pour l'instant",
		emptyBody: "Démarrez une conversation et notre équipe vous répondra ici.",
		sendCta: "Envoyez-nous un message",
		attach: "Joindre un fichier",
		commands: "Commandes rapides",
		record: "Enregistrer un message vocal",
		stopRecording: "Arrêter l'enregistrement",
		recording: "Enregistrement…",
		uploading: "Envoi en cours…",
		uploadFailed: "Échec de l'envoi",
		voiceDenied: "Accès au microphone refusé",
		voiceUnsupported: "L'enregistrement vocal n'est pas pris en charge par ce navigateur",
		fileTooLarge: "Le fichier est trop volumineux (10 Mo max.)",
		fileMimeNotAllowed: "Ce type de fichier n'est pas pris en charge",
		emoji: "Insérer un émoji",
		cancelRecording: "Annuler l'enregistrement",
		pauseRecording: "Mettre l'enregistrement en pause",
		resumeRecording: "Reprendre l'enregistrement",
		playPreview: "Écouter l'enregistrement",
		emojiPicker: "Sélecteur d'émojis",
		emojiSearch: "Rechercher…",
		playAudio: "Lire",
		pauseAudio: "Pause",
		openAudio: "Ouvrir l'audio",
		removeAttachment: "Supprimer",
		aiAssistant: "Assistant IA",
		operator: "Opérateur",
		openImage: "Ouvrir l'image",
		openPreview: "Ouvrir l'aperçu",
		play: "Lire",
		pause: "Pause",
		typing: "écrit…",
		aiThinking: "réfléchit…",
		aiSearching: "recherche…",
		typingSomeone: "Quelqu'un",
		signInToChat: "Veuillez vous connecter pour démarrer la conversation.",
		signInUnavailable: "La connexion n'est pas disponible pour le moment.",
		googleSignIn: "Se connecter avec Google",
		passkeySignIn: "Se connecter avec une passkey",
		passkeyRegister: "Première fois ? Configurez une passkey",
		passkeyError: "Impossible de vous connecter. Veuillez réessayer.",
		passkeyNoCredential: "Aucune passkey sur cet appareil — appuyez sur « Configurez une passkey » pour en créer une.",
		googleSignInDemo: "Continuer avec Google",
		connectingOperator: "Un opérateur vous a été attribué, veuillez patienter…",
		assignment: { eta: {
			minutes: "Un opérateur répondra dans environ {minutes} min",
			soft: "Nous répondons généralement en quelques minutes",
			businessHours: "L'équipe sera de retour à {time}"
		} },
		withOperator: "Vous discutez maintenant avec {name}",
		operatorConnected: "Opérateur connecté",
		chatResolved: "Conversation résolue",
		chatResolvedByYou: "Conversation résolue par vous",
		chatResolvedByOperator: "Conversation résolue par {name}",
		resolveConversation: "Résoudre la conversation",
		sources: "Sources",
		moreSources: "+{count} de plus"
	},
	prechat: {
		title: "Avant de commencer",
		subtitle: "Quelques informations pour que notre équipe puisse vous aider plus vite.",
		labelName: "Nom",
		labelEmail: "E-mail",
		labelPhone: "Téléphone",
		labelCustom: "Détails",
		required: "Obligatoire",
		invalidEmail: "Veuillez saisir une adresse e-mail valide",
		invalidPhone: "Veuillez saisir un numéro de téléphone valide",
		submit: "Continuer",
		submitFailed: "Échec de l'envoi — veuillez réessayer."
	},
	help: {
		searchPlaceholder: "Rechercher dans l'aide",
		emptyTitle: "Aucun article pour l'instant",
		emptyBody: "Votre opérateur n'a encore rien publié.",
		back: "Retour",
		helpful: "Cela vous a-t-il aidé ?",
		yes: "Oui",
		no: "Non",
		thanks: "Merci pour votre retour.",
		unresolvedCta: "Besoin d'aide supplémentaire ? Écrivez-nous",
		noResults: "Aucun résultat",
		articleNotFound: "Article introuvable",
		articleNotTranslated: "Cet article n'est pas encore disponible dans votre langue.",
		writtenBy: "Écrit par {names}",
		relatedTitle: "Articles liés",
		collectionsCount: "{count, plural, =0 {Aucune collection} one {# collection} other {# collections}}",
		articlesCount: "{count, plural, =0 {Aucun article} one {Articles : #} other {Articles : #}}",
		authorsByline: "Auteurs {first}{remaining, plural, =0 {} one { et # de plus} other { et # de plus}}"
	},
	news: {
		emptyTitle: "Aucune nouveauté pour l'instant",
		emptyBody: "Revenez ici pour les actualités produit et les annonces.",
		helpful: "Cet article vous a-t-il aidé ?",
		yes: "Oui",
		no: "Non",
		thanks: "Merci pour votre retour.",
		searchPlaceholder: "Rechercher dans les actualités",
		noResults: "Aucun article correspondant",
		editedAt: "modifié {when}",
		articleNotFound: "Article introuvable.",
		articleNotTranslated: "Cet article n'est pas encore disponible dans votre langue.",
		readOriginal: "Lire l'original",
		relatedTitle: "Connexes",
		writtenBy: "Écrit par {names}",
		unread: "Actualités non lues"
	},
	reactions: {
		ariaLabel: "Réactions",
		tapAria: "Réagir avec {emoji}"
	},
	languageSelector: {
		title: "Lire dans une autre langue",
		ariaLabel: "Langues de l'article"
	},
	branding: {
		poweredBy: "Propulsé par",
		wexio: "Wexio"
	},
	sound: {
		mute: "Couper les sons de notification",
		unmute: "Activer les sons de notification"
	},
	article: {
		tableOfContents: "Table des matières",
		tabFallback: "Onglet {n}"
	},
	peek: {
		newMessage: "Nouveau message",
		dismiss: "Fermer",
		aiAssistant: "Assistant IA",
		operator: "Opérateur"
	},
	lightbox: {
		mediaPreview: "Aperçu du média",
		close: "Fermer l'aperçu",
		previous: "Précédent",
		next: "Suivant"
	},
	authError: {
		turnstileTitle: "Impossible de vérifier votre navigateur",
		turnstileBody: "Nous n'avons pas pu finaliser la vérification de sécurité. Cela vient parfois du réseau ou d'un bloqueur de publicités — réessayez ou rechargez la page.",
		genericTitle: "Impossible de se connecter",
		genericBody: "Une erreur s'est produite lors de votre connexion. Réessayez dans un instant.",
		retry: "Réessayer",
		dismiss: "Fermer"
	},
	profile: {
		title: "Votre profil",
		subtitle: "Mettez à jour vos informations et le comportement du widget.",
		uploadAvatar: "Changer la photo",
		removeAvatar: "Supprimer la photo",
		avatarUploading: "Envoi en cours…",
		preferencesHeading: "Préférences",
		preferenceLanguage: "Langue",
		preferenceDesktopNotifications: "Notifications de bureau",
		preferenceDesktopNotificationsHint: "Recevez une notification système quand le widget n'est pas au premier plan.",
		preferenceThemeMode: "Thème",
		themeAuto: "Comme le système",
		themeLight: "Clair",
		themeDark: "Sombre",
		themeLocked: "Le thème est défini par l'opérateur.",
		pinnedHint: "Défini par l'opérateur — non modifiable.",
		requiredHint: "Obligatoire",
		invalidEmail: "Veuillez saisir une adresse e-mail valide.",
		invalidPhone: "Utilisez le format international, par ex. +33612345678.",
		noFields: "Il n'y a rien à modifier ici pour le moment.",
		save: "Enregistrer",
		saving: "Enregistrement…",
		cancel: "Annuler",
		saved: "Modifications enregistrées.",
		loading: "Chargement du profil…",
		loadError: "Impossible de charger votre profil. Veuillez réessayer.",
		retry: "Réessayer",
		errorFieldNotAllowed: "Ce champ n'est pas modifiable dans ce widget. Essayez de rafraîchir.",
		errorFieldPinned: "Ce champ est verrouillé par votre compte.",
		errorFieldInvalid: "Certaines valeurs sont invalides. Vérifiez les champs surlignés.",
		errorThemeLocked: "Le thème est verrouillé par l'opérateur.",
		errorFeatureDisabled: "L'opérateur a désactivé la modification du profil.",
		errorGeneric: "Impossible d'enregistrer les modifications. Veuillez réessayer.",
		notificationsBlocked: "Les notifications sont bloquées par le navigateur. Mettez à jour les autorisations du site pour les activer.",
		notificationsRequest: "Autorisez les notifications lorsque le navigateur vous y invite.",
		systemFields: {
			avatar: "Photo",
			wexioId: "ID Wexio",
			telegramId: "ID Telegram",
			whatsappId: "ID WhatsApp",
			viberId: "ID Viber",
			instagramId: "ID Instagram",
			optInWhatsapp: "Consentement WhatsApp",
			webVerified: "Visiteur vérifié",
			firstName: "Prénom",
			lastName: "Nom",
			username: "Nom d'utilisateur",
			language: "Langue",
			email: "E-mail",
			phone: "Téléphone",
			company: "Entreprise",
			location: "Emplacement",
			isValid: "Compte valide",
			chatStatus: "Statut du chat",
			chatCategory: "Catégorie de chat",
			priority: "Priorité",
			leadSource: "Source du lead",
			leadStatus: "Statut du lead",
			interestLevel: "Niveau d'intérêt",
			productInterest: "Intérêt produit",
			budgetRange: "Budget",
			purchaseTimeline: "Horizon d'achat",
			lastMessageSentAt: "Dernier message envoyé",
			lastMessageReceivedAt: "Dernier message reçu",
			lastSeenAt: "Dernière connexion",
			firstMessageReceivedAt: "Premier contact",
			isBlocked: "Bloqué",
			registrationDate: "Inscrit le",
			aiAvailable: "Assistance IA",
			totalMessagesSent: "Messages envoyés",
			totalMessagesReceived: "Messages reçus",
			totalAiMessagesSent: "Messages envoyés par l'IA",
			totalBotMessagesSent: "Messages envoyés par le bot",
			totalUserMessagesSent: "Messages envoyés par l'opérateur",
			flowCompletionRate: "Taux d'achèvement des flows",
			lastFlowCompleted: "Dernier flow terminé",
			totalFlowsStarted: "Flows démarrés",
			totalFlowsCompleted: "Flows terminés"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problème",
				RESOLVED: "Résolu",
				PENDING: "En attente",
				IN_PROGRESS: "En cours",
				CLOSED: "Fermé"
			},
			chatCategory: {
				SALES: "Ventes",
				SUPPORT: "Support",
				BILLING: "Facturation",
				FEEDBACK: "Retours",
				GENERAL: "Général",
				OTHER: "Autre"
			},
			priority: {
				LOW: "Basse",
				MEDIUM: "Moyenne",
				HIGH: "Haute",
				URGENT: "Urgente"
			},
			leadStatus: {
				NEW: "Nouveau",
				CONTACTED: "Contacté",
				QUALIFIED: "Qualifié",
				NEGOTIATING: "En négociation",
				WON: "Gagné",
				LOST: "Perdu"
			},
			interestLevel: {
				LOW: "Faible",
				MEDIUM: "Moyen",
				HIGH: "Élevé",
				VERY_HIGH: "Très élevé"
			}
		}
	}
}, Fv = {
	tabs: {
		home: "בית",
		messages: "הודעות",
		help: "עזרה",
		news: "חדשות",
		profile: "פרופיל"
	},
	header: {
		close: "סגירה",
		back: "חזרה",
		conversationSubtitle: "גם הצוות שלנו יכול לעזור",
		helpTitle: "עזרה",
		newsTitle: "חדשות",
		expand: "הרחבת הווידג'ט",
		collapse: "כיווץ הווידג'ט"
	},
	launcher: {
		open: "פתיחת צ'אט",
		close: "סגירת צ'אט",
		loading: "מתחבר…"
	},
	home: {
		greetingHeadline: "שלום 👋",
		greetingSubheadline: "במה נוכל לעזור?",
		askTitle: "שאלו שאלה",
		askSubtitle: "הבוט והצוות שלנו יוכלו לעזור",
		recentMessageLabel: "הודעה אחרונה",
		recentMessageTitle: "הודעה אחרונה",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4ש'",
		recentMessageSample: "שלום 👋 תודה שפניתם - נחזור אליכם מיד.",
		featuredArticleLoading: "מאמר מומלץ",
		featuredArticleTap: "הקישו לקריאה",
		featuredArticleEmpty: "בחרו מאמר",
		featuredArticleSetUp: "הגדירו את הבלוק הזה בלוח הבקרה",
		featuredArticleDemoEyebrow: "Pioneer · שמרו את התאריך",
		featuredArticleDemoHeadline: "8 באוקטובר 2026",
		featuredArticleDemoSubline: "סן פרנסיסקו · פרונטלי + וירטואלי",
		featuredArticleDemoCta: "צפו בלוח האירועים",
		seeAgenda: "צפו בלוח האירועים",
		browseHelp: "עיון בעזרה",
		whatsNew: "מה חדש",
		searchPlaceholder: "חיפוש בעזרה",
		pinnedArticlesTitle: "קראו את אלה ראשונים",
		popularArticlesTitle: "מאמרים פופולריים",
		pinnedArticleRow: "מאמר מוצמד {n}",
		newsPreviewTitle: "החדשות האחרונות",
		newsPreviewRow: "עדכון חדשות {n}",
		myConversationsTitle: "השיחות שלך",
		myConversationsEmpty: "צפייה בשיחות שלך",
		teamStatusOnline: "אנחנו מחוברים",
		teamStatusReplyTime: "בדרך כלל עונים תוך מספר דקות"
	},
	messages: {
		today: "היום",
		yesterday: "אתמול",
		unreadMessages: "הודעות שלא נקראו",
		emptyTitle: "אין עדיין הודעות",
		emptyBody: "התחילו שיחה והצוות שלנו יחזור אליכם כאן.",
		sendCta: "שלחו לנו הודעה",
		attach: "צירוף קובץ",
		commands: "פקודות מהירות",
		record: "הקלטת הודעה קולית",
		stopRecording: "עצירת הקלטה",
		recording: "מקליט…",
		uploading: "מעלה…",
		uploadFailed: "ההעלאה נכשלה",
		voiceDenied: "הגישה למיקרופון נדחתה",
		voiceUnsupported: "הקלטה קולית אינה נתמכת בדפדפן זה",
		fileTooLarge: "הקובץ גדול מדי (מקסימום 10MB)",
		fileMimeNotAllowed: "סוג קובץ זה אינו נתמך",
		emoji: "הוספת אימוג'י",
		cancelRecording: "ביטול הקלטה",
		pauseRecording: "השהיית הקלטה",
		resumeRecording: "חידוש הקלטה",
		playPreview: "השמעת ההקלטה",
		emojiPicker: "בורר אימוג'י",
		emojiSearch: "חיפוש…",
		playAudio: "השמעה",
		pauseAudio: "השהיה",
		openAudio: "פתיחת אודיו",
		removeAttachment: "הסרה",
		aiAssistant: "עוזר AI",
		operator: "נציג",
		openImage: "פתיחת תמונה",
		openPreview: "פתיחת תצוגה מקדימה",
		play: "השמעה",
		pause: "השהיה",
		typing: "מקליד…",
		aiThinking: "חושב…",
		aiSearching: "מחפש…",
		typingSomeone: "מישהו",
		signInToChat: "אנא היכנסו כדי להתחיל את השיחה.",
		signInUnavailable: "הכניסה אינה זמינה כעת.",
		googleSignIn: "כניסה עם Google",
		passkeySignIn: "כניסה עם מפתח גישה",
		passkeyRegister: "פעם ראשונה? הגדירו מפתח גישה",
		passkeyError: "הכניסה נכשלה. נסו שוב.",
		passkeyNoCredential: "אין עדיין מפתח גישה במכשיר הזה — הקישו על «הגדירו מפתח גישה» כדי ליצור אחד.",
		googleSignInDemo: "המשך עם Google",
		connectingOperator: "שויך נציג, אנא המתן…",
		assignment: { eta: {
			minutes: "נציג יענה בעוד כ-{minutes} דק׳",
			soft: "אנחנו בדרך כלל עונים תוך כמה דקות",
			businessHours: "הצוות יחזור ב-{time}"
		} },
		withOperator: "כעת מתקיימת שיחה עם {name}",
		operatorConnected: "נציג התחבר",
		chatResolved: "השיחה נפתרה",
		chatResolvedByYou: "השיחה נפתרה על ידך",
		chatResolvedByOperator: "השיחה נפתרה על ידי {name}",
		resolveConversation: "פתרון השיחה",
		sources: "מקורות",
		moreSources: "עוד {count}"
	},
	prechat: {
		title: "לפני שמתחילים",
		subtitle: "כמה פרטים מהירים כדי שהצוות יוכל לעזור מהר יותר.",
		labelName: "שם",
		labelEmail: "דוא\"ל",
		labelPhone: "טלפון",
		labelCustom: "פרטים",
		required: "שדה חובה",
		invalidEmail: "אנא הזינו כתובת דוא\"ל תקינה",
		invalidPhone: "אנא הזינו מספר טלפון תקין",
		submit: "המשך",
		submitFailed: "השליחה נכשלה - נסו שוב."
	},
	help: {
		searchPlaceholder: "חיפוש בעזרה",
		emptyTitle: "אין עדיין מאמרים",
		emptyBody: "המפעיל שלכם עדיין לא פרסם דבר.",
		back: "חזרה",
		helpful: "האם זה היה מועיל?",
		yes: "כן",
		no: "לא",
		thanks: "תודה על המשוב.",
		unresolvedCta: "עדיין צריכים עזרה? שלחו לנו הודעה",
		noResults: "אין תוצאות",
		articleNotFound: "המאמר לא נמצא",
		articleNotTranslated: "המאמר הזה עדיין אינו זמין בשפה שלכם.",
		writtenBy: "נכתב על ידי {names}",
		relatedTitle: "מאמרים קשורים",
		collectionsCount: "{count, plural, =0 {אין אוספים} one {אוסף אחד} two {שני אוספים} other {# אוספים}}",
		articlesCount: "{count, plural, =0 {אין מאמרים} one {מאמרים: #} two {מאמרים: #} other {מאמרים: #}}",
		authorsByline: "מחברים {first}{remaining, plural, =0 {} one { ועוד אחד} two { ועוד #} other { ועוד #}}"
	},
	news: {
		unread: "חדשות שלא נקראו",
		emptyTitle: "אין עדיין עדכונים",
		emptyBody: "חזרו לכאן כדי לקרוא חדשות מוצר והודעות.",
		helpful: "האם המאמר הזה היה מועיל?",
		yes: "כן",
		no: "לא",
		thanks: "תודה על המשוב.",
		searchPlaceholder: "חיפוש בחדשות",
		noResults: "לא נמצאו פוסטים מתאימים",
		editedAt: "נערך {when}",
		articleNotFound: "המאמר לא נמצא.",
		articleNotTranslated: "הפוסט הזה עדיין אינו זמין בשפה שלכם.",
		readOriginal: "קריאת המקור",
		relatedTitle: "קשורים",
		writtenBy: "נכתב על ידי {names}"
	},
	reactions: {
		ariaLabel: "תגובות",
		tapAria: "תגובה עם {emoji}"
	},
	languageSelector: {
		title: "קריאה בשפה אחרת",
		ariaLabel: "שפות המאמר"
	},
	branding: {
		poweredBy: "מופעל על ידי",
		wexio: "Wexio"
	},
	sound: {
		mute: "השתקת צלילי התראה",
		unmute: "הפעלת צלילי התראה"
	},
	article: {
		tableOfContents: "תוכן עניינים",
		tabFallback: "לשונית {n}"
	},
	peek: {
		newMessage: "הודעה חדשה",
		dismiss: "סגירה",
		aiAssistant: "עוזר AI",
		operator: "נציג"
	},
	lightbox: {
		mediaPreview: "תצוגה מקדימה של מדיה",
		close: "סגירת תצוגה מקדימה",
		previous: "הקודם",
		next: "הבא"
	},
	authError: {
		turnstileTitle: "לא הצלחנו לאמת את הדפדפן",
		turnstileBody: "לא הצלחנו להשלים את בדיקת האבטחה. זו לעיתים בעיית רשת או חוסם פרסומות — נסו שוב או רעננו את הדף.",
		genericTitle: "לא הצלחנו להתחבר",
		genericBody: "משהו השתבש במהלך הכניסה. נסו שוב בעוד רגע.",
		retry: "נסו שוב",
		dismiss: "סגירה"
	},
	profile: {
		title: "הפרופיל שלך",
		subtitle: "עדכנו את הפרטים שלכם ואת אופן פעולת הווידג'ט.",
		uploadAvatar: "החלפת תמונה",
		removeAvatar: "הסרת תמונה",
		avatarUploading: "מעלה…",
		preferencesHeading: "העדפות",
		preferenceLanguage: "שפה",
		preferenceDesktopNotifications: "התראות שולחן עבודה",
		preferenceDesktopNotificationsHint: "קבלו התראת מערכת כשהווידג'ט לא במוקד.",
		preferenceThemeMode: "ערכת נושא",
		themeAuto: "כמו במערכת",
		themeLight: "בהירה",
		themeDark: "כהה",
		themeLocked: "ערכת הנושא נקבעת על ידי המפעיל.",
		pinnedHint: "נקבע על ידי המפעיל — לא ניתן לעריכה.",
		requiredHint: "חובה",
		invalidEmail: "אנא הזינו כתובת דוא\"ל תקינה.",
		invalidPhone: "השתמשו בפורמט בינלאומי, למשל +14155552671.",
		noFields: "אין עדיין מה לערוך כאן.",
		save: "שמירת שינויים",
		saving: "שומר…",
		cancel: "ביטול",
		saved: "השינויים נשמרו.",
		loading: "טוען פרופיל…",
		loadError: "לא הצלחנו לטעון את הפרופיל. נסו שוב.",
		retry: "ניסיון חוזר",
		errorFieldNotAllowed: "השדה הזה לא ניתן לעריכה בווידג'ט הזה. נסו לרענן.",
		errorFieldPinned: "השדה הזה נעול על ידי החשבון שלכם.",
		errorFieldInvalid: "חלק מהערכים אינם תקינים. בדקו את השדות המודגשים.",
		errorThemeLocked: "ערכת הנושא נעולה על ידי המפעיל.",
		errorFeatureDisabled: "עריכת הפרופיל הושבתה על ידי המפעיל.",
		errorGeneric: "לא הצלחנו לשמור את השינויים. נסו שוב.",
		notificationsBlocked: "התראות חסומות בדפדפן. עדכנו את הרשאות האתר כדי להפעיל.",
		notificationsRequest: "אשרו התראות כשהדפדפן יבקש כדי להפעיל את זה.",
		systemFields: {
			avatar: "תמונה",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "אישור WhatsApp",
			webVerified: "מבקר מאומת",
			firstName: "שם פרטי",
			lastName: "שם משפחה",
			username: "שם משתמש",
			language: "שפה",
			email: "דוא\"ל",
			phone: "טלפון",
			company: "חברה",
			location: "מיקום",
			isValid: "חשבון תקין",
			chatStatus: "סטטוס שיחה",
			chatCategory: "קטגוריית שיחה",
			priority: "עדיפות",
			leadSource: "מקור הליד",
			leadStatus: "סטטוס הליד",
			interestLevel: "רמת עניין",
			productInterest: "עניין במוצר",
			budgetRange: "תקציב",
			purchaseTimeline: "לוח זמנים לרכישה",
			lastMessageSentAt: "הודעה אחרונה שנשלחה",
			lastMessageReceivedAt: "הודעה אחרונה שהתקבלה",
			lastSeenAt: "ביקור אחרון",
			firstMessageReceivedAt: "פנייה ראשונה",
			isBlocked: "חסום",
			registrationDate: "תאריך הרשמה",
			aiAvailable: "סיוע AI",
			totalMessagesSent: "הודעות שנשלחו",
			totalMessagesReceived: "הודעות שהתקבלו",
			totalAiMessagesSent: "הודעות AI שנשלחו",
			totalBotMessagesSent: "הודעות בוט שנשלחו",
			totalUserMessagesSent: "הודעות נציג שנשלחו",
			flowCompletionRate: "אחוז השלמת תהליכים",
			lastFlowCompleted: "תהליך אחרון שהושלם",
			totalFlowsStarted: "תהליכים שהתחילו",
			totalFlowsCompleted: "תהליכים שהושלמו"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "תקלה",
				RESOLVED: "טופל",
				PENDING: "ממתין",
				IN_PROGRESS: "בתהליך",
				CLOSED: "סגור"
			},
			chatCategory: {
				SALES: "מכירות",
				SUPPORT: "תמיכה",
				BILLING: "חיוב",
				FEEDBACK: "משוב",
				GENERAL: "כללי",
				OTHER: "אחר"
			},
			priority: {
				LOW: "נמוכה",
				MEDIUM: "בינונית",
				HIGH: "גבוהה",
				URGENT: "דחופה"
			},
			leadStatus: {
				NEW: "חדש",
				CONTACTED: "נוצר קשר",
				QUALIFIED: "מוכשר",
				NEGOTIATING: "במשא ומתן",
				WON: "נסגר בהצלחה",
				LOST: "אבד"
			},
			interestLevel: {
				LOW: "נמוכה",
				MEDIUM: "בינונית",
				HIGH: "גבוהה",
				VERY_HIGH: "גבוהה מאוד"
			}
		}
	}
}, Iv = {
	tabs: {
		home: "होम",
		messages: "संदेश",
		help: "सहायता",
		news: "समाचार",
		profile: "प्रोफ़ाइल"
	},
	header: {
		close: "बंद करें",
		back: "वापस",
		conversationSubtitle: "हमारी टीम भी मदद कर सकती है",
		helpTitle: "सहायता",
		newsTitle: "समाचार",
		expand: "विजेट विस्तार करें",
		collapse: "विजेट संक्षिप्त करें"
	},
	launcher: {
		open: "चैट खोलें",
		close: "चैट बंद करें",
		loading: "कनेक्ट हो रहा है…"
	},
	home: {
		greetingHeadline: "नमस्ते 👋",
		greetingSubheadline: "हम आपकी कैसे मदद कर सकते हैं?",
		askTitle: "प्रश्न पूछें",
		askSubtitle: "हमारा बॉट और टीम मदद कर सकते हैं",
		recentMessageLabel: "हाल का संदेश",
		recentMessageTitle: "हाल का संदेश",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 घं",
		recentMessageSample: "नमस्ते 👋 संपर्क करने के लिए धन्यवाद - हम जल्द ही आपके पास वापस आएंगे।",
		featuredArticleLoading: "विशेष लेख",
		featuredArticleTap: "पढ़ने के लिए टैप करें",
		featuredArticleEmpty: "एक लेख चुनें",
		featuredArticleSetUp: "इस ब्लॉक को अपने डैशबोर्ड में कॉन्फ़िगर करें",
		featuredArticleDemoEyebrow: "Pioneer · तारीख याद रखें",
		featuredArticleDemoHeadline: "8 अक्टूबर, 2026",
		featuredArticleDemoSubline: "सैन फ़्रांसिस्को · व्यक्तिगत + वर्चुअल",
		featuredArticleDemoCta: "लॉन्च का कार्यक्रम देखें",
		seeAgenda: "लॉन्च का कार्यक्रम देखें",
		browseHelp: "सहायता ब्राउज़ करें",
		whatsNew: "नया क्या है",
		searchPlaceholder: "सहायता खोजें",
		pinnedArticlesTitle: "पहले इन्हें पढ़ें",
		popularArticlesTitle: "लोकप्रिय लेख",
		pinnedArticleRow: "पिन किया गया लेख {n}",
		newsPreviewTitle: "ताज़ा समाचार",
		newsPreviewRow: "समाचार अपडेट {n}",
		myConversationsTitle: "आपकी बातचीत",
		myConversationsEmpty: "अपनी बातचीत देखें",
		teamStatusOnline: "हम ऑनलाइन हैं",
		teamStatusReplyTime: "आमतौर पर कुछ मिनटों में उत्तर देते हैं"
	},
	messages: {
		today: "आज",
		yesterday: "कल",
		unreadMessages: "अपठित संदेश",
		emptyTitle: "अभी तक कोई संदेश नहीं",
		emptyBody: "बातचीत शुरू करें और हमारी टीम यहाँ आपसे संपर्क करेगी।",
		sendCta: "हमें संदेश भेजें",
		attach: "फ़ाइल संलग्न करें",
		commands: "त्वरित कमांड",
		record: "ध्वनि संदेश रिकॉर्ड करें",
		stopRecording: "रिकॉर्डिंग रोकें",
		recording: "रिकॉर्ड हो रहा है…",
		uploading: "अपलोड हो रहा है…",
		uploadFailed: "अपलोड विफल",
		voiceDenied: "माइक्रोफ़ोन तक पहुँच अस्वीकृत",
		voiceUnsupported: "इस ब्राउज़र में ध्वनि रिकॉर्डिंग समर्थित नहीं है",
		fileTooLarge: "फ़ाइल बहुत बड़ी है (अधिकतम 10MB)",
		fileMimeNotAllowed: "यह फ़ाइल प्रकार समर्थित नहीं है",
		emoji: "इमोजी डालें",
		cancelRecording: "रिकॉर्डिंग रद्द करें",
		pauseRecording: "रिकॉर्डिंग रोकें",
		resumeRecording: "रिकॉर्डिंग जारी रखें",
		playPreview: "रिकॉर्डिंग चलाएँ",
		emojiPicker: "इमोजी पिकर",
		emojiSearch: "खोजें…",
		playAudio: "चलाएँ",
		pauseAudio: "रोकें",
		openAudio: "ऑडियो खोलें",
		removeAttachment: "हटाएँ",
		aiAssistant: "AI सहायक",
		operator: "ऑपरेटर",
		openImage: "छवि खोलें",
		openPreview: "पूर्वावलोकन खोलें",
		play: "चलाएँ",
		pause: "रोकें",
		typing: "टाइप कर रहा है…",
		aiThinking: "सोच रहा है…",
		aiSearching: "ब्राउज़ कर रहा है…",
		typingSomeone: "कोई",
		signInToChat: "कृपया बातचीत शुरू करने के लिए साइन इन करें।",
		signInUnavailable: "साइन-इन अभी उपलब्ध नहीं है।",
		googleSignIn: "Google से साइन इन करें",
		passkeySignIn: "पासकी से साइन इन करें",
		passkeyRegister: "पहली बार? पासकी सेट करें",
		passkeyError: "साइन इन नहीं हो सका। कृपया फिर से कोशिश करें।",
		passkeyNoCredential: "इस डिवाइस पर अभी कोई पासकी नहीं है — बनाने के लिए \"पासकी सेट करें\" पर टैप करें।",
		googleSignInDemo: "Google के साथ जारी रखें",
		connectingOperator: "एक ऑपरेटर नियुक्त किया गया है, कृपया प्रतीक्षा करें…",
		assignment: { eta: {
			minutes: "एक ऑपरेटर लगभग {minutes} मिनट में जवाब देगा",
			soft: "हम आमतौर पर कुछ ही मिनटों में जवाब देते हैं",
			businessHours: "टीम {time} पर वापस आएगी"
		} },
		withOperator: "अब आप {name} के साथ चैट कर रहे हैं",
		operatorConnected: "ऑपरेटर से जुड़ गए",
		chatResolved: "बातचीत हल हो गई",
		chatResolvedByYou: "आपके द्वारा बातचीत हल की गई",
		chatResolvedByOperator: "{name} द्वारा बातचीत हल की गई",
		resolveConversation: "बातचीत हल करें",
		sources: "स्रोत",
		moreSources: "+{count} और"
	},
	prechat: {
		title: "शुरू करने से पहले",
		subtitle: "कुछ त्वरित विवरण ताकि हमारी टीम आपकी तेज़ी से मदद कर सके।",
		labelName: "नाम",
		labelEmail: "ईमेल",
		labelPhone: "फ़ोन",
		labelCustom: "विवरण",
		required: "आवश्यक",
		invalidEmail: "कृपया एक मान्य ईमेल दर्ज करें",
		invalidPhone: "कृपया एक मान्य फ़ोन नंबर दर्ज करें",
		submit: "जारी रखें",
		submitFailed: "जमा नहीं हो सका - कृपया फिर से कोशिश करें।"
	},
	help: {
		searchPlaceholder: "सहायता खोजें",
		emptyTitle: "अभी तक कोई लेख नहीं",
		emptyBody: "आपके ऑपरेटर ने अभी तक कुछ भी प्रकाशित नहीं किया है।",
		back: "वापस",
		helpful: "क्या यह सहायक था?",
		yes: "हाँ",
		no: "नहीं",
		thanks: "फ़ीडबैक के लिए धन्यवाद।",
		unresolvedCta: "अभी भी सहायता चाहिए? हमें संदेश भेजें",
		noResults: "कोई परिणाम नहीं",
		articleNotFound: "लेख नहीं मिला",
		articleNotTranslated: "यह लेख अभी आपकी भाषा में उपलब्ध नहीं है।",
		writtenBy: "{names} द्वारा लिखित",
		relatedTitle: "संबंधित लेख",
		collectionsCount: "{count, plural, =0 {कोई संग्रह नहीं} one {# संग्रह} other {# संग्रह}}",
		articlesCount: "{count, plural, =0 {कोई लेख नहीं} one {लेख: #} other {लेख: #}}",
		authorsByline: "लेखक {first}{remaining, plural, =0 {} one { और # अन्य} other { और # अन्य}}"
	},
	news: {
		unread: "अपठित समाचार",
		emptyTitle: "अभी तक कोई अपडेट नहीं",
		emptyBody: "उत्पाद समाचार और घोषणाओं के लिए यहाँ वापस आएँ।",
		helpful: "क्या यह लेख सहायक था?",
		yes: "हाँ",
		no: "नहीं",
		thanks: "फ़ीडबैक के लिए धन्यवाद।",
		searchPlaceholder: "समाचार खोजें",
		noResults: "कोई मिलान वाली पोस्ट नहीं",
		editedAt: "{when} संपादित",
		articleNotFound: "लेख नहीं मिला।",
		articleNotTranslated: "यह पोस्ट अभी आपकी भाषा में उपलब्ध नहीं है।",
		readOriginal: "मूल पढ़ें",
		relatedTitle: "संबंधित",
		writtenBy: "{names} द्वारा लिखित"
	},
	reactions: {
		ariaLabel: "प्रतिक्रियाएँ",
		tapAria: "{emoji} के साथ प्रतिक्रिया दें"
	},
	languageSelector: {
		title: "अन्य भाषा में पढ़ें",
		ariaLabel: "लेख की भाषाएँ"
	},
	branding: {
		poweredBy: "द्वारा संचालित",
		wexio: "Wexio"
	},
	sound: {
		mute: "सूचना ध्वनियाँ म्यूट करें",
		unmute: "सूचना ध्वनियाँ अनम्यूट करें"
	},
	article: {
		tableOfContents: "विषय-सूची",
		tabFallback: "टैब {n}"
	},
	peek: {
		newMessage: "नया संदेश",
		dismiss: "खारिज करें",
		aiAssistant: "AI सहायक",
		operator: "ऑपरेटर"
	},
	lightbox: {
		mediaPreview: "मीडिया पूर्वावलोकन",
		close: "पूर्वावलोकन बंद करें",
		previous: "पिछला",
		next: "अगला"
	},
	authError: {
		turnstileTitle: "आपका ब्राउज़र सत्यापित नहीं हो सका",
		turnstileBody: "हम सुरक्षा जाँच पूरी नहीं कर सके। कभी-कभी यह नेटवर्क या ऐड-ब्लॉकर की समस्या होती है — फिर से कोशिश करें या पेज पुनः लोड करें।",
		genericTitle: "कनेक्ट नहीं हो सका",
		genericBody: "साइन इन करते समय कुछ गलत हो गया। कृपया कुछ देर में फिर से कोशिश करें।",
		retry: "फिर से कोशिश करें",
		dismiss: "खारिज करें"
	},
	profile: {
		title: "आपकी प्रोफ़ाइल",
		subtitle: "अपनी जानकारी और विजेट का व्यवहार अपडेट करें।",
		uploadAvatar: "फ़ोटो बदलें",
		removeAvatar: "फ़ोटो हटाएँ",
		avatarUploading: "अपलोड हो रहा है…",
		preferencesHeading: "वरीयताएँ",
		preferenceLanguage: "भाषा",
		preferenceDesktopNotifications: "डेस्कटॉप सूचनाएँ",
		preferenceDesktopNotificationsHint: "जब विजेट फ़ोकस में न हो तो सिस्टम सूचना प्राप्त करें।",
		preferenceThemeMode: "थीम",
		themeAuto: "सिस्टम से मिलाएँ",
		themeLight: "लाइट",
		themeDark: "डार्क",
		themeLocked: "थीम ऑपरेटर द्वारा निर्धारित है।",
		pinnedHint: "ऑपरेटर द्वारा निर्धारित — संपादन योग्य नहीं।",
		requiredHint: "आवश्यक",
		invalidEmail: "कृपया एक मान्य ईमेल पता दर्ज करें।",
		invalidPhone: "अंतर्राष्ट्रीय फ़ॉर्मेट का उपयोग करें, जैसे +14155552671।",
		noFields: "यहाँ अभी संपादित करने को कुछ नहीं है।",
		save: "परिवर्तन सहेजें",
		saving: "सहेजा जा रहा है…",
		cancel: "रद्द करें",
		saved: "परिवर्तन सहेजे गए।",
		loading: "प्रोफ़ाइल लोड हो रही है…",
		loadError: "आपकी प्रोफ़ाइल लोड नहीं हो सकी। कृपया फिर से कोशिश करें।",
		retry: "पुनः प्रयास करें",
		errorFieldNotAllowed: "यह फ़ील्ड इस विजेट में संपादन योग्य नहीं है। ताज़ा करने का प्रयास करें।",
		errorFieldPinned: "यह फ़ील्ड आपके खाते द्वारा लॉक है।",
		errorFieldInvalid: "कुछ मान मान्य नहीं हैं। हाइलाइट किए गए फ़ील्ड जाँचें।",
		errorThemeLocked: "थीम ऑपरेटर द्वारा लॉक है।",
		errorFeatureDisabled: "ऑपरेटर ने प्रोफ़ाइल संपादन बंद कर दिया है।",
		errorGeneric: "आपके परिवर्तन सहेजे नहीं जा सके। कृपया फिर से कोशिश करें।",
		notificationsBlocked: "ब्राउज़र द्वारा सूचनाएँ ब्लॉक हैं। सक्षम करने के लिए साइट अनुमतियाँ अपडेट करें।",
		notificationsRequest: "इसे सक्षम करने के लिए संकेत मिलने पर सूचनाओं की अनुमति दें।",
		systemFields: {
			avatar: "फ़ोटो",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp ऑप्ट-इन",
			webVerified: "सत्यापित विज़िटर",
			firstName: "पहला नाम",
			lastName: "उपनाम",
			username: "उपयोगकर्ता नाम",
			language: "भाषा",
			email: "ईमेल",
			phone: "फ़ोन",
			company: "कंपनी",
			location: "स्थान",
			isValid: "खाता वैध",
			chatStatus: "चैट स्थिति",
			chatCategory: "चैट श्रेणी",
			priority: "प्राथमिकता",
			leadSource: "लीड स्रोत",
			leadStatus: "लीड स्थिति",
			interestLevel: "रुचि स्तर",
			productInterest: "उत्पाद रुचि",
			budgetRange: "बजट",
			purchaseTimeline: "खरीद की समय-सीमा",
			lastMessageSentAt: "अंतिम संदेश भेजा",
			lastMessageReceivedAt: "अंतिम संदेश प्राप्त",
			lastSeenAt: "अंतिम बार देखा गया",
			firstMessageReceivedAt: "पहला संपर्क",
			isBlocked: "अवरुद्ध",
			registrationDate: "पंजीकृत",
			aiAvailable: "AI सहायता",
			totalMessagesSent: "भेजे गए संदेश",
			totalMessagesReceived: "प्राप्त संदेश",
			totalAiMessagesSent: "AI संदेश भेजे गए",
			totalBotMessagesSent: "बॉट संदेश भेजे गए",
			totalUserMessagesSent: "ऑपरेटर संदेश भेजे गए",
			flowCompletionRate: "फ़्लो पूर्णता दर",
			lastFlowCompleted: "अंतिम पूर्ण फ़्लो",
			totalFlowsStarted: "शुरू किए गए फ़्लो",
			totalFlowsCompleted: "पूर्ण किए गए फ़्लो"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "समस्या",
				RESOLVED: "हल हो गया",
				PENDING: "लंबित",
				IN_PROGRESS: "प्रगति में",
				CLOSED: "बंद"
			},
			chatCategory: {
				SALES: "बिक्री",
				SUPPORT: "सहायता",
				BILLING: "बिलिंग",
				FEEDBACK: "फ़ीडबैक",
				GENERAL: "सामान्य",
				OTHER: "अन्य"
			},
			priority: {
				LOW: "कम",
				MEDIUM: "मध्यम",
				HIGH: "उच्च",
				URGENT: "अत्यावश्यक"
			},
			leadStatus: {
				NEW: "नया",
				CONTACTED: "संपर्क किया गया",
				QUALIFIED: "योग्य",
				NEGOTIATING: "बातचीत में",
				WON: "जीता",
				LOST: "हारा"
			},
			interestLevel: {
				LOW: "कम",
				MEDIUM: "मध्यम",
				HIGH: "उच्च",
				VERY_HIGH: "बहुत उच्च"
			}
		}
	}
}, Lv = {
	tabs: {
		home: "Kezdőlap",
		messages: "Üzenetek",
		help: "Súgó",
		news: "Hírek",
		profile: "Profil"
	},
	header: {
		close: "Bezárás",
		back: "Vissza",
		conversationSubtitle: "Csapatunk is segíthet",
		helpTitle: "Súgó",
		newsTitle: "Hírek",
		expand: "Widget kibontása",
		collapse: "Widget összecsukása"
	},
	launcher: {
		open: "Csevegés megnyitása",
		close: "Csevegés bezárása",
		loading: "Csatlakozás…"
	},
	home: {
		greetingHeadline: "Üdv 👋",
		greetingSubheadline: "Miben segíthetünk?",
		askTitle: "Tegyél fel egy kérdést",
		askSubtitle: "Botunk és csapatunk is segíthet",
		recentMessageLabel: "Legutóbbi üzenet",
		recentMessageTitle: "Legutóbbi üzenet",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 ó",
		recentMessageSample: "Üdv 👋 Köszönjük, hogy megkerestél — hamarosan jelentkezünk.",
		featuredArticleLoading: "Kiemelt cikk",
		featuredArticleTap: "Koppints az olvasáshoz",
		featuredArticleEmpty: "Válassz cikket",
		featuredArticleSetUp: "Állítsd be ezt a blokkot a vezérlőpulton",
		featuredArticleDemoEyebrow: "Pioneer · Jegyezd fel a dátumot",
		featuredArticleDemoHeadline: "2026. október 8.",
		featuredArticleDemoSubline: "San Francisco · személyesen + online",
		featuredArticleDemoCta: "Megnyitási program megtekintése",
		seeAgenda: "Megnyitási program megtekintése",
		browseHelp: "Súgó tallózása",
		whatsNew: "Mi újság",
		searchPlaceholder: "Keresés a súgóban",
		pinnedArticlesTitle: "Először ezeket olvasd",
		popularArticlesTitle: "Népszerű cikkek",
		pinnedArticleRow: "Rögzített cikk {n}",
		newsPreviewTitle: "Legfrissebb hírek",
		newsPreviewRow: "Hírfrissítés {n}",
		myConversationsTitle: "Beszélgetéseid",
		myConversationsEmpty: "Beszélgetéseid megtekintése",
		teamStatusOnline: "Online vagyunk",
		teamStatusReplyTime: "Általában pár percen belül válaszolunk"
	},
	messages: {
		today: "Ma",
		yesterday: "Tegnap",
		unreadMessages: "Olvasatlan üzenetek",
		emptyTitle: "Még nincsenek üzenetek",
		emptyBody: "Indíts beszélgetést, és csapatunk itt válaszol.",
		sendCta: "Küldj nekünk üzenetet",
		attach: "Fájl csatolása",
		commands: "Gyors parancsok",
		record: "Hangüzenet rögzítése",
		stopRecording: "Felvétel leállítása",
		recording: "Felvétel…",
		uploading: "Feltöltés…",
		uploadFailed: "A feltöltés nem sikerült",
		voiceDenied: "A mikrofonhoz való hozzáférés megtagadva",
		voiceUnsupported: "A hangrögzítés nem támogatott ebben a böngészőben",
		fileTooLarge: "A fájl túl nagy (max. 10 MB)",
		fileMimeNotAllowed: "Ez a fájltípus nem támogatott",
		emoji: "Emoji beszúrása",
		cancelRecording: "Felvétel megszakítása",
		pauseRecording: "Felvétel szüneteltetése",
		resumeRecording: "Felvétel folytatása",
		playPreview: "Felvétel lejátszása",
		emojiPicker: "Emoji-választó",
		emojiSearch: "Keresés…",
		playAudio: "Lejátszás",
		pauseAudio: "Szünet",
		openAudio: "Hang megnyitása",
		removeAttachment: "Eltávolítás",
		aiAssistant: "AI asszisztens",
		operator: "Operátor",
		openImage: "Kép megnyitása",
		openPreview: "Előnézet megnyitása",
		play: "Lejátszás",
		pause: "Szünet",
		typing: "ír…",
		aiThinking: "gondolkodik…",
		aiSearching: "keres…",
		typingSomeone: "Valaki",
		signInToChat: "Kérlek, jelentkezz be a beszélgetés megkezdéséhez.",
		signInUnavailable: "A bejelentkezés jelenleg nem érhető el.",
		googleSignIn: "Bejelentkezés Google-fiókkal",
		passkeySignIn: "Bejelentkezés passkey-jel",
		passkeyRegister: "Először vagy itt? Hozz létre egy passkey-t",
		passkeyError: "Nem sikerült bejelentkezni. Kérlek, próbáld újra.",
		passkeyNoCredential: "Ezen az eszközön még nincs passkey — koppints a „Hozz létre egy passkey-t” opcióra a létrehozáshoz.",
		googleSignInDemo: "Folytatás Google-fiókkal",
		connectingOperator: "Egy operátor lett hozzárendelve, kérjük, várj…",
		assignment: { eta: {
			minutes: "Egy munkatárs kb. {minutes} perc múlva válaszol",
			soft: "Általában néhány percen belül válaszolunk",
			businessHours: "A csapat {time} időpontban tér vissza"
		} },
		withOperator: "Mostantól {name} munkatárssal beszélgetsz",
		operatorConnected: "Operátor csatlakozott",
		chatResolved: "Beszélgetés lezárva",
		chatResolvedByYou: "A beszélgetést te zártad le",
		chatResolvedByOperator: "A beszélgetést {name} zárta le",
		resolveConversation: "Beszélgetés lezárása",
		sources: "Források",
		moreSources: "+{count} további"
	},
	prechat: {
		title: "Mielőtt elkezdjük",
		subtitle: "Néhány gyors adat, hogy csapatunk gyorsabban tudjon segíteni.",
		labelName: "Név",
		labelEmail: "E-mail",
		labelPhone: "Telefon",
		labelCustom: "Részletek",
		required: "Kötelező",
		invalidEmail: "Adj meg érvényes e-mail-címet",
		invalidPhone: "Adj meg érvényes telefonszámot",
		submit: "Folytatás",
		submitFailed: "Nem sikerült elküldeni — próbáld újra."
	},
	help: {
		searchPlaceholder: "Keresés a súgóban",
		emptyTitle: "Még nincsenek cikkek",
		emptyBody: "Az operátor még nem tett közzé semmit.",
		back: "Vissza",
		helpful: "Hasznos volt?",
		yes: "Igen",
		no: "Nem",
		thanks: "Köszönjük a visszajelzést.",
		unresolvedCta: "Még mindig segítségre van szükséged? Írj nekünk",
		noResults: "Nincs találat",
		articleNotFound: "A cikk nem található",
		articleNotTranslated: "Ez a cikk még nem érhető el a nyelveden.",
		writtenBy: "Írta: {names}",
		relatedTitle: "Kapcsolódó cikkek",
		collectionsCount: "{count, plural, =0 {Nincs gyűjtemény} one {# gyűjtemény} other {# gyűjtemény}}",
		articlesCount: "{count, plural, =0 {Nincs cikk} one {Cikkek: #} other {Cikkek: #}}",
		authorsByline: "Szerzők {first}{remaining, plural, =0 {} one { és további #} other { és további #}}"
	},
	news: {
		emptyTitle: "Még nincsenek frissítések",
		emptyBody: "Nézz vissza ide termékhírekért és bejelentésekért.",
		helpful: "Hasznos volt ez a cikk?",
		yes: "Igen",
		no: "Nem",
		thanks: "Köszönjük a visszajelzést.",
		searchPlaceholder: "Keresés a hírekben",
		noResults: "Nincs találat",
		editedAt: "szerkesztve: {when}",
		articleNotFound: "A cikk nem található.",
		articleNotTranslated: "Ez a bejegyzés még nem érhető el a nyelveden.",
		readOriginal: "Eredeti elolvasása",
		relatedTitle: "Kapcsolódó",
		writtenBy: "Írta: {names}",
		unread: "Olvasatlan hírek"
	},
	reactions: {
		ariaLabel: "Reakciók",
		tapAria: "Reakció: {emoji}"
	},
	languageSelector: {
		title: "Olvasás más nyelven",
		ariaLabel: "Cikk nyelvei"
	},
	branding: {
		poweredBy: "Üzemeltető:",
		wexio: "Wexio"
	},
	sound: {
		mute: "Értesítési hangok némítása",
		unmute: "Értesítési hangok bekapcsolása"
	},
	article: {
		tableOfContents: "Tartalomjegyzék",
		tabFallback: "{n}. fül"
	},
	peek: {
		newMessage: "Új üzenet",
		dismiss: "Bezárás",
		aiAssistant: "AI asszisztens",
		operator: "Operátor"
	},
	lightbox: {
		mediaPreview: "Média előnézet",
		close: "Előnézet bezárása",
		previous: "Előző",
		next: "Következő"
	},
	authError: {
		turnstileTitle: "Nem sikerült ellenőrizni a böngésződet",
		turnstileBody: "Nem tudtuk befejezni a biztonsági ellenőrzést. Ezt néha hálózati vagy reklámblokkoló okozza — próbáld újra vagy töltsd újra az oldalt.",
		genericTitle: "Nem sikerült csatlakozni",
		genericBody: "Valami hiba történt a bejelentkezés közben. Próbáld újra hamarosan.",
		retry: "Próbáld újra",
		dismiss: "Bezárás"
	},
	profile: {
		title: "A profilod",
		subtitle: "Frissítsd az adataid, és állítsd be a widget viselkedését.",
		uploadAvatar: "Fénykép cseréje",
		removeAvatar: "Fénykép eltávolítása",
		avatarUploading: "Feltöltés…",
		preferencesHeading: "Beállítások",
		preferenceLanguage: "Nyelv",
		preferenceDesktopNotifications: "Asztali értesítések",
		preferenceDesktopNotificationsHint: "Kapj rendszerértesítést, ha a widget nincs előtérben.",
		preferenceThemeMode: "Téma",
		themeAuto: "Mint a rendszer",
		themeLight: "Világos",
		themeDark: "Sötét",
		themeLocked: "A témát az operátor állította be.",
		pinnedHint: "Az operátor állította be — nem szerkeszthető.",
		requiredHint: "Kötelező",
		invalidEmail: "Adj meg érvényes e-mail-címet.",
		invalidPhone: "Használj nemzetközi formátumot, pl. +14155552671.",
		noFields: "Itt még nincs mit szerkeszteni.",
		save: "Mentés",
		saving: "Mentés…",
		cancel: "Elvetés",
		saved: "A módosítások elmentve.",
		loading: "Profil betöltése…",
		loadError: "A profil nem tölthető be. Próbáld újra.",
		retry: "Újra",
		errorFieldNotAllowed: "Ez a mező ebben a widgetben nem szerkeszthető. Próbáld újratölteni.",
		errorFieldPinned: "Ezt a mezőt a fiókod zárolta.",
		errorFieldInvalid: "Néhány érték érvénytelen. Ellenőrizd a kijelölt mezőket.",
		errorThemeLocked: "A témát az operátor zárolta.",
		errorFeatureDisabled: "A profilszerkesztést az operátor kikapcsolta.",
		errorGeneric: "Nem sikerült menteni a módosításokat. Próbáld újra.",
		notificationsBlocked: "Az értesítéseket a böngésző blokkolja. Frissítsd a webhely engedélyeit az engedélyezéshez.",
		notificationsRequest: "Engedélyezd az értesítéseket, amikor megjelenik a kérés.",
		systemFields: {
			avatar: "Fénykép",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp hozzájárulás",
			webVerified: "Hitelesített látogató",
			firstName: "Keresztnév",
			lastName: "Vezetéknév",
			username: "Felhasználónév",
			language: "Nyelv",
			email: "E-mail",
			phone: "Telefon",
			company: "Cég",
			location: "Helyszín",
			isValid: "Érvényes fiók",
			chatStatus: "Csevegés állapota",
			chatCategory: "Csevegés kategóriája",
			priority: "Prioritás",
			leadSource: "Lead forrása",
			leadStatus: "Lead állapota",
			interestLevel: "Érdeklődés szintje",
			productInterest: "Termékérdeklődés",
			budgetRange: "Keret",
			purchaseTimeline: "Vásárlási időszak",
			lastMessageSentAt: "Utolsó küldött üzenet",
			lastMessageReceivedAt: "Utolsó kapott üzenet",
			lastSeenAt: "Utoljára látva",
			firstMessageReceivedAt: "Első kapcsolatfelvétel",
			isBlocked: "Letiltva",
			registrationDate: "Regisztráció",
			aiAvailable: "AI segítség",
			totalMessagesSent: "Küldött üzenetek",
			totalMessagesReceived: "Fogadott üzenetek",
			totalAiMessagesSent: "Küldött AI-üzenetek",
			totalBotMessagesSent: "Küldött bot-üzenetek",
			totalUserMessagesSent: "Küldött operátori üzenetek",
			flowCompletionRate: "Flow befejezési arány",
			lastFlowCompleted: "Utolsó befejezett flow",
			totalFlowsStarted: "Megkezdett flow-k",
			totalFlowsCompleted: "Befejezett flow-k"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Probléma",
				RESOLVED: "Megoldva",
				PENDING: "Függőben",
				IN_PROGRESS: "Folyamatban",
				CLOSED: "Lezárva"
			},
			chatCategory: {
				SALES: "Értékesítés",
				SUPPORT: "Támogatás",
				BILLING: "Számlázás",
				FEEDBACK: "Visszajelzés",
				GENERAL: "Általános",
				OTHER: "Egyéb"
			},
			priority: {
				LOW: "Alacsony",
				MEDIUM: "Közepes",
				HIGH: "Magas",
				URGENT: "Sürgős"
			},
			leadStatus: {
				NEW: "Új",
				CONTACTED: "Megkeresve",
				QUALIFIED: "Minősített",
				NEGOTIATING: "Tárgyalás alatt",
				WON: "Megnyerve",
				LOST: "Elveszett"
			},
			interestLevel: {
				LOW: "Alacsony",
				MEDIUM: "Közepes",
				HIGH: "Magas",
				VERY_HIGH: "Nagyon magas"
			}
		}
	}
}, Rv = {
	tabs: {
		home: "Beranda",
		messages: "Pesan",
		help: "Bantuan",
		news: "Berita",
		profile: "Profil"
	},
	header: {
		close: "Tutup",
		back: "Kembali",
		conversationSubtitle: "Tim kami juga dapat membantu",
		helpTitle: "Bantuan",
		newsTitle: "Berita",
		expand: "Perluas widget",
		collapse: "Ciutkan widget"
	},
	launcher: {
		open: "Buka chat",
		close: "Tutup chat",
		loading: "Menghubungkan…"
	},
	home: {
		greetingHeadline: "Halo 👋",
		greetingSubheadline: "Bagaimana kami bisa membantu?",
		askTitle: "Ajukan pertanyaan",
		askSubtitle: "Bot dan tim kami siap membantu",
		recentMessageLabel: "Pesan terbaru",
		recentMessageTitle: "Pesan terbaru",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 jam",
		recentMessageSample: "Halo 👋 Terima kasih telah menghubungi - kami akan segera kembali.",
		featuredArticleLoading: "Artikel pilihan",
		featuredArticleTap: "Ketuk untuk baca",
		featuredArticleEmpty: "Pilih artikel",
		featuredArticleSetUp: "Konfigurasikan blok ini di dasbor Anda",
		featuredArticleDemoEyebrow: "Pioneer · Catat tanggalnya",
		featuredArticleDemoHeadline: "8 Oktober 2026",
		featuredArticleDemoSubline: "San Francisco · Tatap muka + virtual",
		featuredArticleDemoCta: "Lihat agenda peluncuran",
		seeAgenda: "Lihat agenda peluncuran",
		browseHelp: "Telusuri Bantuan",
		whatsNew: "Apa yang baru",
		searchPlaceholder: "Cari bantuan",
		pinnedArticlesTitle: "Baca ini lebih dulu",
		popularArticlesTitle: "Artikel populer",
		pinnedArticleRow: "Artikel disematkan {n}",
		newsPreviewTitle: "Berita terbaru",
		newsPreviewRow: "Pembaruan berita {n}",
		myConversationsTitle: "Percakapan Anda",
		myConversationsEmpty: "Lihat percakapan Anda",
		teamStatusOnline: "Kami online",
		teamStatusReplyTime: "Biasanya membalas dalam beberapa menit"
	},
	messages: {
		today: "Hari ini",
		yesterday: "Kemarin",
		unreadMessages: "Pesan belum dibaca",
		emptyTitle: "Belum ada pesan",
		emptyBody: "Mulai percakapan dan tim kami akan menanggapi di sini.",
		sendCta: "Kirim pesan",
		attach: "Lampirkan file",
		commands: "Perintah cepat",
		record: "Rekam pesan suara",
		stopRecording: "Berhenti merekam",
		recording: "Merekam…",
		uploading: "Mengunggah…",
		uploadFailed: "Unggahan gagal",
		voiceDenied: "Akses mikrofon ditolak",
		voiceUnsupported: "Perekaman suara tidak didukung di browser ini",
		fileTooLarge: "File terlalu besar (maks 10MB)",
		fileMimeNotAllowed: "Jenis file ini tidak didukung",
		emoji: "Sisipkan emoji",
		cancelRecording: "Batalkan rekaman",
		pauseRecording: "Jeda rekaman",
		resumeRecording: "Lanjutkan rekaman",
		playPreview: "Putar rekaman",
		emojiPicker: "Pemilih emoji",
		emojiSearch: "Cari…",
		playAudio: "Putar",
		pauseAudio: "Jeda",
		openAudio: "Buka audio",
		removeAttachment: "Hapus",
		aiAssistant: "Asisten AI",
		operator: "Operator",
		openImage: "Buka gambar",
		openPreview: "Buka pratinjau",
		play: "Putar",
		pause: "Jeda",
		typing: "mengetik…",
		aiThinking: "berpikir…",
		aiSearching: "menelusuri…",
		typingSomeone: "Seseorang",
		signInToChat: "Silakan masuk untuk memulai percakapan.",
		signInUnavailable: "Masuk tidak tersedia saat ini.",
		googleSignIn: "Masuk dengan Google",
		passkeySignIn: "Masuk dengan passkey",
		passkeyRegister: "Pertama kali? Siapkan passkey",
		passkeyError: "Tidak bisa masuk. Silakan coba lagi.",
		passkeyNoCredential: "Belum ada passkey di perangkat ini — ketuk \"Siapkan passkey\" untuk membuatnya.",
		googleSignInDemo: "Lanjutkan dengan Google",
		connectingOperator: "Operator telah ditugaskan, mohon tunggu…",
		assignment: { eta: {
			minutes: "Operator akan membalas dalam sekitar {minutes} mnt",
			soft: "Kami biasanya membalas dalam beberapa menit",
			businessHours: "Tim akan kembali pada {time}"
		} },
		withOperator: "Anda sekarang mengobrol dengan {name}",
		operatorConnected: "Operator terhubung",
		chatResolved: "Percakapan diselesaikan",
		chatResolvedByYou: "Percakapan diselesaikan oleh Anda",
		chatResolvedByOperator: "Percakapan diselesaikan oleh {name}",
		resolveConversation: "Selesaikan percakapan",
		sources: "Sumber",
		moreSources: "+{count} lainnya"
	},
	prechat: {
		title: "Sebelum kita mulai",
		subtitle: "Beberapa detail singkat agar tim kami bisa membantu Anda lebih cepat.",
		labelName: "Nama",
		labelEmail: "Email",
		labelPhone: "Telepon",
		labelCustom: "Detail",
		required: "Wajib",
		invalidEmail: "Silakan masukkan email yang valid",
		invalidPhone: "Silakan masukkan nomor telepon yang valid",
		submit: "Lanjutkan",
		submitFailed: "Tidak bisa mengirim - silakan coba lagi."
	},
	help: {
		searchPlaceholder: "Cari bantuan",
		emptyTitle: "Belum ada artikel",
		emptyBody: "Operator Anda belum menerbitkan apa pun.",
		back: "Kembali",
		helpful: "Apakah ini bermanfaat?",
		yes: "Ya",
		no: "Tidak",
		thanks: "Terima kasih atas masukannya.",
		unresolvedCta: "Masih butuh bantuan? Kirim pesan",
		noResults: "Tidak ada hasil",
		articleNotFound: "Artikel tidak ditemukan",
		articleNotTranslated: "Artikel ini belum tersedia dalam bahasa Anda.",
		writtenBy: "Ditulis oleh {names}",
		relatedTitle: "Artikel terkait",
		collectionsCount: "{count, plural, =0 {Tidak ada koleksi} other {# koleksi}}",
		articlesCount: "{count, plural, =0 {Tidak ada artikel} other {Artikel: #}}",
		authorsByline: "Penulis {first}{remaining, plural, =0 {} other { dan # lainnya}}"
	},
	news: {
		unread: "Berita belum dibaca",
		emptyTitle: "Belum ada pembaruan",
		emptyBody: "Kembali ke sini untuk berita produk dan pengumuman.",
		helpful: "Apakah artikel ini bermanfaat?",
		yes: "Ya",
		no: "Tidak",
		thanks: "Terima kasih atas masukannya.",
		searchPlaceholder: "Cari berita",
		noResults: "Tidak ada postingan yang cocok",
		editedAt: "diedit {when}",
		articleNotFound: "Artikel tidak ditemukan.",
		articleNotTranslated: "Postingan ini belum tersedia dalam bahasa Anda.",
		readOriginal: "Baca aslinya",
		relatedTitle: "Terkait",
		writtenBy: "Ditulis oleh {names}"
	},
	reactions: {
		ariaLabel: "Reaksi",
		tapAria: "Reaksi dengan {emoji}"
	},
	languageSelector: {
		title: "Baca dalam bahasa lain",
		ariaLabel: "Bahasa artikel"
	},
	branding: {
		poweredBy: "Didukung oleh",
		wexio: "Wexio"
	},
	sound: {
		mute: "Bisukan suara notifikasi",
		unmute: "Aktifkan suara notifikasi"
	},
	article: {
		tableOfContents: "Daftar isi",
		tabFallback: "Tab {n}"
	},
	peek: {
		newMessage: "Pesan baru",
		dismiss: "Tutup",
		aiAssistant: "Asisten AI",
		operator: "Operator"
	},
	lightbox: {
		mediaPreview: "Pratinjau media",
		close: "Tutup pratinjau",
		previous: "Sebelumnya",
		next: "Berikutnya"
	},
	authError: {
		turnstileTitle: "Tidak bisa memverifikasi browser Anda",
		turnstileBody: "Kami tidak dapat menyelesaikan pemeriksaan keamanan. Terkadang ini masalah jaringan atau ad-blocker — coba lagi atau muat ulang halaman.",
		genericTitle: "Tidak bisa terhubung",
		genericBody: "Terjadi kesalahan saat masuk. Silakan coba lagi sebentar.",
		retry: "Coba lagi",
		dismiss: "Tutup"
	},
	profile: {
		title: "Profil Anda",
		subtitle: "Perbarui info Anda dan bagaimana widget bekerja.",
		uploadAvatar: "Ubah foto",
		removeAvatar: "Hapus foto",
		avatarUploading: "Mengunggah…",
		preferencesHeading: "Preferensi",
		preferenceLanguage: "Bahasa",
		preferenceDesktopNotifications: "Notifikasi desktop",
		preferenceDesktopNotificationsHint: "Dapatkan notifikasi sistem saat widget tidak terfokus.",
		preferenceThemeMode: "Tema",
		themeAuto: "Ikuti sistem",
		themeLight: "Terang",
		themeDark: "Gelap",
		themeLocked: "Tema diatur oleh operator.",
		pinnedHint: "Diatur oleh operator — tidak dapat diedit.",
		requiredHint: "Wajib",
		invalidEmail: "Silakan masukkan alamat email yang valid.",
		invalidPhone: "Gunakan format internasional, misal +14155552671.",
		noFields: "Belum ada yang bisa diedit di sini.",
		save: "Simpan perubahan",
		saving: "Menyimpan…",
		cancel: "Batal",
		saved: "Perubahan tersimpan.",
		loading: "Memuat profil…",
		loadError: "Tidak bisa memuat profil Anda. Silakan coba lagi.",
		retry: "Coba lagi",
		errorFieldNotAllowed: "Bidang ini tidak dapat diedit di widget ini. Coba muat ulang.",
		errorFieldPinned: "Bidang ini dikunci oleh akun Anda.",
		errorFieldInvalid: "Beberapa nilai tidak valid. Periksa bidang yang ditandai.",
		errorThemeLocked: "Tema dikunci oleh operator.",
		errorFeatureDisabled: "Pengeditan profil telah dinonaktifkan oleh operator.",
		errorGeneric: "Tidak bisa menyimpan perubahan. Silakan coba lagi.",
		notificationsBlocked: "Notifikasi diblokir oleh browser. Perbarui izin situs untuk mengaktifkan.",
		notificationsRequest: "Izinkan notifikasi saat diminta untuk mengaktifkannya.",
		systemFields: {
			avatar: "Foto",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "Setujui WhatsApp",
			webVerified: "Pengunjung terverifikasi",
			firstName: "Nama depan",
			lastName: "Nama belakang",
			username: "Nama pengguna",
			language: "Bahasa",
			email: "Email",
			phone: "Telepon",
			company: "Perusahaan",
			location: "Lokasi",
			isValid: "Akun valid",
			chatStatus: "Status chat",
			chatCategory: "Kategori chat",
			priority: "Prioritas",
			leadSource: "Sumber lead",
			leadStatus: "Status lead",
			interestLevel: "Tingkat minat",
			productInterest: "Minat produk",
			budgetRange: "Anggaran",
			purchaseTimeline: "Jadwal pembelian",
			lastMessageSentAt: "Pesan terakhir dikirim",
			lastMessageReceivedAt: "Pesan terakhir diterima",
			lastSeenAt: "Terakhir terlihat",
			firstMessageReceivedAt: "Kontak pertama",
			isBlocked: "Diblokir",
			registrationDate: "Terdaftar",
			aiAvailable: "Bantuan AI",
			totalMessagesSent: "Pesan terkirim",
			totalMessagesReceived: "Pesan diterima",
			totalAiMessagesSent: "Pesan AI terkirim",
			totalBotMessagesSent: "Pesan bot terkirim",
			totalUserMessagesSent: "Pesan operator terkirim",
			flowCompletionRate: "Tingkat penyelesaian flow",
			lastFlowCompleted: "Flow terakhir selesai",
			totalFlowsStarted: "Flow dimulai",
			totalFlowsCompleted: "Flow selesai"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Masalah",
				RESOLVED: "Selesai",
				PENDING: "Tertunda",
				IN_PROGRESS: "Sedang berjalan",
				CLOSED: "Ditutup"
			},
			chatCategory: {
				SALES: "Penjualan",
				SUPPORT: "Dukungan",
				BILLING: "Penagihan",
				FEEDBACK: "Masukan",
				GENERAL: "Umum",
				OTHER: "Lainnya"
			},
			priority: {
				LOW: "Rendah",
				MEDIUM: "Sedang",
				HIGH: "Tinggi",
				URGENT: "Mendesak"
			},
			leadStatus: {
				NEW: "Baru",
				CONTACTED: "Telah dihubungi",
				QUALIFIED: "Memenuhi syarat",
				NEGOTIATING: "Negosiasi",
				WON: "Menang",
				LOST: "Kalah"
			},
			interestLevel: {
				LOW: "Rendah",
				MEDIUM: "Sedang",
				HIGH: "Tinggi",
				VERY_HIGH: "Sangat tinggi"
			}
		}
	}
}, zv = {
	tabs: {
		home: "Home",
		messages: "Messaggi",
		help: "Aiuto",
		news: "Novità",
		profile: "Profilo"
	},
	header: {
		close: "Chiudi",
		back: "Indietro",
		conversationSubtitle: "Anche il nostro team può aiutarti",
		helpTitle: "Aiuto",
		newsTitle: "Novità",
		expand: "Espandi widget",
		collapse: "Comprimi widget"
	},
	launcher: {
		open: "Apri chat",
		close: "Chiudi chat",
		loading: "Connessione…"
	},
	home: {
		greetingHeadline: "Ciao 👋",
		greetingSubheadline: "Come possiamo aiutarti?",
		askTitle: "Fai una domanda",
		askSubtitle: "Il nostro bot e il nostro team possono aiutarti",
		recentMessageLabel: "Messaggio recente",
		recentMessageTitle: "Messaggio recente",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 h",
		recentMessageSample: "Ciao 👋 Grazie di averci contattato — torniamo subito da te.",
		featuredArticleLoading: "Articolo in evidenza",
		featuredArticleTap: "Tocca per leggere",
		featuredArticleEmpty: "Scegli un articolo",
		featuredArticleSetUp: "Configura questo blocco nella tua dashboard",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "8 ottobre 2026",
		featuredArticleDemoSubline: "San Francisco · in presenza + virtuale",
		featuredArticleDemoCta: "Vedi il programma del lancio",
		seeAgenda: "Vedi il programma del lancio",
		browseHelp: "Sfoglia l'aiuto",
		whatsNew: "Novità",
		searchPlaceholder: "Cerca nell'aiuto",
		pinnedArticlesTitle: "Leggi prima questi",
		popularArticlesTitle: "Articoli popolari",
		pinnedArticleRow: "Articolo fissato {n}",
		newsPreviewTitle: "Ultime novità",
		newsPreviewRow: "Aggiornamento {n}",
		myConversationsTitle: "Le tue conversazioni",
		myConversationsEmpty: "Vedi le tue conversazioni",
		teamStatusOnline: "Siamo online",
		teamStatusReplyTime: "Di solito rispondiamo in pochi minuti"
	},
	messages: {
		today: "Oggi",
		yesterday: "Ieri",
		unreadMessages: "Messaggi non letti",
		emptyTitle: "Ancora nessun messaggio",
		emptyBody: "Avvia una conversazione e il nostro team ti risponderà qui.",
		sendCta: "Inviaci un messaggio",
		attach: "Allega un file",
		commands: "Comandi rapidi",
		record: "Registra un messaggio vocale",
		stopRecording: "Interrompi registrazione",
		recording: "Registrazione…",
		uploading: "Caricamento…",
		uploadFailed: "Caricamento non riuscito",
		voiceDenied: "Accesso al microfono negato",
		voiceUnsupported: "La registrazione vocale non è supportata in questo browser",
		fileTooLarge: "Il file è troppo grande (max 10 MB)",
		fileMimeNotAllowed: "Questo tipo di file non è supportato",
		emoji: "Inserisci emoji",
		cancelRecording: "Annulla registrazione",
		pauseRecording: "Metti in pausa la registrazione",
		resumeRecording: "Riprendi registrazione",
		playPreview: "Riproduci registrazione",
		emojiPicker: "Selettore emoji",
		emojiSearch: "Cerca…",
		playAudio: "Riproduci",
		pauseAudio: "Pausa",
		openAudio: "Apri audio",
		removeAttachment: "Rimuovi",
		aiAssistant: "Assistente IA",
		operator: "Operatore",
		openImage: "Apri immagine",
		openPreview: "Apri anteprima",
		play: "Riproduci",
		pause: "Pausa",
		typing: "sta scrivendo…",
		aiThinking: "sta pensando…",
		aiSearching: "sta cercando…",
		typingSomeone: "Qualcuno",
		signInToChat: "Accedi per iniziare la conversazione.",
		signInUnavailable: "L'accesso non è disponibile in questo momento.",
		googleSignIn: "Accedi con Google",
		passkeySignIn: "Accedi con una passkey",
		passkeyRegister: "Prima volta? Configura una passkey",
		passkeyError: "Accesso non riuscito. Riprova.",
		passkeyNoCredential: "Nessuna passkey su questo dispositivo — tocca «Configura una passkey» per crearne una.",
		googleSignInDemo: "Continua con Google",
		connectingOperator: "È stato assegnato un operatore, attendi…",
		assignment: { eta: {
			minutes: "Un operatore risponderà tra circa {minutes} min",
			soft: "Di solito rispondiamo entro pochi minuti",
			businessHours: "Il team sarà di nuovo disponibile alle {time}"
		} },
		withOperator: "Ora stai chattando con {name}",
		operatorConnected: "Operatore connesso",
		chatResolved: "Conversazione risolta",
		chatResolvedByYou: "Conversazione risolta da te",
		chatResolvedByOperator: "Conversazione risolta da {name}",
		resolveConversation: "Risolvi conversazione",
		sources: "Fonti",
		moreSources: "+{count} altre"
	},
	prechat: {
		title: "Prima di iniziare",
		subtitle: "Qualche dettaglio rapido per aiutarti più in fretta.",
		labelName: "Nome",
		labelEmail: "Email",
		labelPhone: "Telefono",
		labelCustom: "Dettagli",
		required: "Obbligatorio",
		invalidEmail: "Inserisci un'email valida",
		invalidPhone: "Inserisci un numero di telefono valido",
		submit: "Continua",
		submitFailed: "Invio non riuscito — riprova."
	},
	help: {
		searchPlaceholder: "Cerca nell'aiuto",
		emptyTitle: "Ancora nessun articolo",
		emptyBody: "Il tuo operatore non ha ancora pubblicato nulla.",
		back: "Indietro",
		helpful: "È stato utile?",
		yes: "Sì",
		no: "No",
		thanks: "Grazie per il riscontro.",
		unresolvedCta: "Ti serve ancora aiuto? Scrivici",
		noResults: "Nessun risultato",
		articleNotFound: "Articolo non trovato",
		articleNotTranslated: "Questo articolo non è ancora disponibile nella tua lingua.",
		writtenBy: "Scritto da {names}",
		relatedTitle: "Articoli correlati",
		collectionsCount: "{count, plural, =0 {Nessuna raccolta} one {# raccolta} other {# raccolte}}",
		articlesCount: "{count, plural, =0 {Nessun articolo} one {Articoli: #} other {Articoli: #}}",
		authorsByline: "Autori {first}{remaining, plural, =0 {} one { e # altro} other { e # altri}}"
	},
	news: {
		emptyTitle: "Ancora nessun aggiornamento",
		emptyBody: "Torna qui per novità di prodotto e annunci.",
		helpful: "Questo articolo è stato utile?",
		yes: "Sì",
		no: "No",
		thanks: "Grazie per il riscontro.",
		searchPlaceholder: "Cerca nelle novità",
		noResults: "Nessun post corrispondente",
		editedAt: "modificato {when}",
		articleNotFound: "Articolo non trovato.",
		articleNotTranslated: "Questo post non è ancora disponibile nella tua lingua.",
		readOriginal: "Leggi l'originale",
		relatedTitle: "Correlati",
		writtenBy: "Scritto da {names}",
		unread: "Novità non lette"
	},
	reactions: {
		ariaLabel: "Reazioni",
		tapAria: "Reagisci con {emoji}"
	},
	languageSelector: {
		title: "Leggi in un'altra lingua",
		ariaLabel: "Lingue dell'articolo"
	},
	branding: {
		poweredBy: "Tecnologia di",
		wexio: "Wexio"
	},
	sound: {
		mute: "Silenzia i suoni delle notifiche",
		unmute: "Attiva i suoni delle notifiche"
	},
	article: {
		tableOfContents: "Sommario",
		tabFallback: "Scheda {n}"
	},
	peek: {
		newMessage: "Nuovo messaggio",
		dismiss: "Chiudi",
		aiAssistant: "Assistente IA",
		operator: "Operatore"
	},
	lightbox: {
		mediaPreview: "Anteprima media",
		close: "Chiudi anteprima",
		previous: "Precedente",
		next: "Successivo"
	},
	authError: {
		turnstileTitle: "Impossibile verificare il browser",
		turnstileBody: "Non è stato possibile completare il controllo di sicurezza. A volte dipende dalla rete o da un ad-blocker — riprova o ricarica la pagina.",
		genericTitle: "Connessione non riuscita",
		genericBody: "Qualcosa è andato storto durante l'accesso. Riprova tra un momento.",
		retry: "Riprova",
		dismiss: "Chiudi"
	},
	profile: {
		title: "Il tuo profilo",
		subtitle: "Aggiorna i tuoi dati e il comportamento del widget.",
		uploadAvatar: "Cambia foto",
		removeAvatar: "Rimuovi foto",
		avatarUploading: "Caricamento…",
		preferencesHeading: "Preferenze",
		preferenceLanguage: "Lingua",
		preferenceDesktopNotifications: "Notifiche desktop",
		preferenceDesktopNotificationsHint: "Ricevi una notifica di sistema quando il widget non è in primo piano.",
		preferenceThemeMode: "Tema",
		themeAuto: "Come il sistema",
		themeLight: "Chiaro",
		themeDark: "Scuro",
		themeLocked: "Il tema è impostato dall'operatore.",
		pinnedHint: "Impostato dall'operatore — non modificabile.",
		requiredHint: "Obbligatorio",
		invalidEmail: "Inserisci un indirizzo email valido.",
		invalidPhone: "Usa il formato internazionale, ad es. +393331234567.",
		noFields: "Qui non c'è ancora nulla da modificare.",
		save: "Salva modifiche",
		saving: "Salvataggio…",
		cancel: "Annulla",
		saved: "Modifiche salvate.",
		loading: "Caricamento profilo…",
		loadError: "Impossibile caricare il profilo. Riprova.",
		retry: "Riprova",
		errorFieldNotAllowed: "Questo campo non è modificabile in questo widget. Prova ad aggiornare.",
		errorFieldPinned: "Questo campo è bloccato dal tuo account.",
		errorFieldInvalid: "Alcuni valori non sono validi. Controlla i campi evidenziati.",
		errorThemeLocked: "Il tema è bloccato dall'operatore.",
		errorFeatureDisabled: "La modifica del profilo è stata disattivata dall'operatore.",
		errorGeneric: "Impossibile salvare le modifiche. Riprova.",
		notificationsBlocked: "Le notifiche sono bloccate dal browser. Aggiorna i permessi del sito per attivarle.",
		notificationsRequest: "Consenti le notifiche quando richiesto per attivarle.",
		systemFields: {
			avatar: "Foto",
			wexioId: "ID Wexio",
			telegramId: "ID Telegram",
			whatsappId: "ID WhatsApp",
			viberId: "ID Viber",
			instagramId: "ID Instagram",
			optInWhatsapp: "Consenso WhatsApp",
			webVerified: "Visitatore verificato",
			firstName: "Nome",
			lastName: "Cognome",
			username: "Nome utente",
			language: "Lingua",
			email: "Email",
			phone: "Telefono",
			company: "Azienda",
			location: "Posizione",
			isValid: "Account valido",
			chatStatus: "Stato chat",
			chatCategory: "Categoria chat",
			priority: "Priorità",
			leadSource: "Origine del lead",
			leadStatus: "Stato del lead",
			interestLevel: "Livello di interesse",
			productInterest: "Interesse per il prodotto",
			budgetRange: "Budget",
			purchaseTimeline: "Tempistiche di acquisto",
			lastMessageSentAt: "Ultimo messaggio inviato",
			lastMessageReceivedAt: "Ultimo messaggio ricevuto",
			lastSeenAt: "Ultimo accesso",
			firstMessageReceivedAt: "Primo contatto",
			isBlocked: "Bloccato",
			registrationDate: "Registrato",
			aiAvailable: "Assistenza IA",
			totalMessagesSent: "Messaggi inviati",
			totalMessagesReceived: "Messaggi ricevuti",
			totalAiMessagesSent: "Messaggi inviati dall'IA",
			totalBotMessagesSent: "Messaggi inviati dal bot",
			totalUserMessagesSent: "Messaggi inviati dall'operatore",
			flowCompletionRate: "Tasso di completamento dei flow",
			lastFlowCompleted: "Ultimo flow completato",
			totalFlowsStarted: "Flow avviati",
			totalFlowsCompleted: "Flow completati"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problema",
				RESOLVED: "Risolto",
				PENDING: "In attesa",
				IN_PROGRESS: "In corso",
				CLOSED: "Chiuso"
			},
			chatCategory: {
				SALES: "Vendite",
				SUPPORT: "Supporto",
				BILLING: "Fatturazione",
				FEEDBACK: "Feedback",
				GENERAL: "Generale",
				OTHER: "Altro"
			},
			priority: {
				LOW: "Bassa",
				MEDIUM: "Media",
				HIGH: "Alta",
				URGENT: "Urgente"
			},
			leadStatus: {
				NEW: "Nuovo",
				CONTACTED: "Contattato",
				QUALIFIED: "Qualificato",
				NEGOTIATING: "In trattativa",
				WON: "Acquisito",
				LOST: "Perso"
			},
			interestLevel: {
				LOW: "Basso",
				MEDIUM: "Medio",
				HIGH: "Alto",
				VERY_HIGH: "Molto alto"
			}
		}
	}
}, Bv = {
	tabs: {
		home: "ホーム",
		messages: "メッセージ",
		help: "ヘルプ",
		news: "ニュース",
		profile: "プロフィール"
	},
	header: {
		close: "閉じる",
		back: "戻る",
		conversationSubtitle: "私たちのチームもお手伝いします",
		helpTitle: "ヘルプ",
		newsTitle: "ニュース",
		expand: "ウィジェットを拡大",
		collapse: "ウィジェットを縮小"
	},
	launcher: {
		open: "チャットを開く",
		close: "チャットを閉じる",
		loading: "接続中…"
	},
	home: {
		greetingHeadline: "こんにちは 👋",
		greetingSubheadline: "どうされましたか?",
		askTitle: "質問する",
		askSubtitle: "ボットとチームがお手伝いします",
		recentMessageLabel: "最近のメッセージ",
		recentMessageTitle: "最近のメッセージ",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4時間前",
		recentMessageSample: "こんにちは 👋 お問い合わせありがとうございます - すぐにご返信いたします。",
		featuredArticleLoading: "注目の記事",
		featuredArticleTap: "タップして読む",
		featuredArticleEmpty: "記事を選択",
		featuredArticleSetUp: "ダッシュボードでこのブロックを設定してください",
		featuredArticleDemoEyebrow: "Pioneer · 日程をご確認ください",
		featuredArticleDemoHeadline: "2026年10月8日",
		featuredArticleDemoSubline: "サンフランシスコ · 現地 + オンライン",
		featuredArticleDemoCta: "ローンチプログラムを見る",
		seeAgenda: "ローンチプログラムを見る",
		browseHelp: "ヘルプを見る",
		whatsNew: "新着情報",
		searchPlaceholder: "ヘルプを検索",
		pinnedArticlesTitle: "最初にお読みください",
		popularArticlesTitle: "人気の記事",
		pinnedArticleRow: "固定された記事 {n}",
		newsPreviewTitle: "最新ニュース",
		newsPreviewRow: "ニュース {n}",
		myConversationsTitle: "あなたの会話",
		myConversationsEmpty: "会話を見る",
		teamStatusOnline: "オンラインです",
		teamStatusReplyTime: "通常は数分で返信します"
	},
	messages: {
		today: "今日",
		yesterday: "昨日",
		unreadMessages: "未読メッセージ",
		emptyTitle: "まだメッセージはありません",
		emptyBody: "会話を始めると、ここで私たちのチームが返信します。",
		sendCta: "メッセージを送る",
		attach: "ファイルを添付",
		commands: "クイックコマンド",
		record: "音声メッセージを録音",
		stopRecording: "録音を停止",
		recording: "録音中…",
		uploading: "アップロード中…",
		uploadFailed: "アップロードに失敗しました",
		voiceDenied: "マイクへのアクセスが拒否されました",
		voiceUnsupported: "このブラウザでは音声録音がサポートされていません",
		fileTooLarge: "ファイルが大きすぎます(最大10MB)",
		fileMimeNotAllowed: "このファイル形式はサポートされていません",
		emoji: "絵文字を挿入",
		cancelRecording: "録音をキャンセル",
		pauseRecording: "録音を一時停止",
		resumeRecording: "録音を再開",
		playPreview: "録音を再生",
		emojiPicker: "絵文字ピッカー",
		emojiSearch: "検索…",
		playAudio: "再生",
		pauseAudio: "一時停止",
		openAudio: "音声を開く",
		removeAttachment: "削除",
		aiAssistant: "AIアシスタント",
		operator: "オペレーター",
		openImage: "画像を開く",
		openPreview: "プレビューを開く",
		play: "再生",
		pause: "一時停止",
		typing: "入力中…",
		aiThinking: "考えています…",
		aiSearching: "検索中…",
		typingSomeone: "誰か",
		signInToChat: "会話を始めるにはサインインしてください。",
		signInUnavailable: "現在サインインはご利用いただけません。",
		googleSignIn: "Googleでサインイン",
		passkeySignIn: "パスキーでサインイン",
		passkeyRegister: "初めての方はパスキーを設定",
		passkeyError: "サインインできませんでした。もう一度お試しください。",
		passkeyNoCredential: "このデバイスにはまだパスキーがありません — 作成するには「パスキーを設定」をタップしてください。",
		googleSignInDemo: "Googleで続行",
		connectingOperator: "オペレーターが割り当てられました。しばらくお待ちください…",
		assignment: { eta: {
			minutes: "オペレーターは約{minutes}分以内に返信いたします",
			soft: "通常、数分以内に返信いたします",
			businessHours: "スタッフは{time}に対応を再開いたします"
		} },
		withOperator: "{name}とのチャットが始まりました",
		operatorConnected: "オペレーターが接続されました",
		chatResolved: "会話は解決済みです",
		chatResolvedByYou: "あなたが会話を解決しました",
		chatResolvedByOperator: "{name}が会話を解決しました",
		resolveConversation: "会話を解決する",
		sources: "出典",
		moreSources: "他{count}件"
	},
	prechat: {
		title: "始める前に",
		subtitle: "私たちのチームがより早くお手伝いできるよう、簡単な情報をお願いします。",
		labelName: "お名前",
		labelEmail: "メール",
		labelPhone: "電話",
		labelCustom: "詳細",
		required: "必須",
		invalidEmail: "有効なメールアドレスを入力してください",
		invalidPhone: "有効な電話番号を入力してください",
		submit: "続ける",
		submitFailed: "送信できませんでした - もう一度お試しください。"
	},
	help: {
		searchPlaceholder: "ヘルプを検索",
		emptyTitle: "まだ記事はありません",
		emptyBody: "オペレーターはまだ何も公開していません。",
		back: "戻る",
		helpful: "お役に立ちましたか?",
		yes: "はい",
		no: "いいえ",
		thanks: "フィードバックをありがとうございます。",
		unresolvedCta: "まだサポートが必要ですか? メッセージをお送りください",
		noResults: "結果がありません",
		articleNotFound: "記事が見つかりません",
		articleNotTranslated: "この記事はまだお使いの言語ではご利用いただけません。",
		writtenBy: "{names}著",
		relatedTitle: "関連記事",
		collectionsCount: "{count, plural, =0 {コレクションなし} other {# 件のコレクション}}",
		articlesCount: "{count, plural, =0 {記事なし} other {記事: #}}",
		authorsByline: "著者 {first}{remaining, plural, =0 {} other { 他 # 名}}"
	},
	news: {
		emptyTitle: "まだ更新はありません",
		emptyBody: "プロダクトニュースやお知らせはこちらで確認してください。",
		helpful: "この記事はお役に立ちましたか?",
		yes: "はい",
		no: "いいえ",
		thanks: "フィードバックをありがとうございます。",
		searchPlaceholder: "ニュースを検索",
		noResults: "該当する投稿がありません",
		editedAt: "{when}に編集",
		articleNotFound: "記事が見つかりません。",
		articleNotTranslated: "この投稿はまだお使いの言語ではご利用いただけません。",
		readOriginal: "原文を読む",
		relatedTitle: "関連",
		writtenBy: "{names}著",
		unread: "未読のニュース"
	},
	reactions: {
		ariaLabel: "リアクション",
		tapAria: "{emoji}でリアクション"
	},
	languageSelector: {
		title: "他の言語で読む",
		ariaLabel: "記事の言語"
	},
	branding: {
		poweredBy: "提供:",
		wexio: "Wexio"
	},
	sound: {
		mute: "通知音をミュート",
		unmute: "通知音をオン"
	},
	article: {
		tableOfContents: "目次",
		tabFallback: "タブ {n}"
	},
	peek: {
		newMessage: "新着メッセージ",
		dismiss: "閉じる",
		aiAssistant: "AIアシスタント",
		operator: "オペレーター"
	},
	lightbox: {
		mediaPreview: "メディアプレビュー",
		close: "プレビューを閉じる",
		previous: "前へ",
		next: "次へ"
	},
	authError: {
		turnstileTitle: "ブラウザを検証できませんでした",
		turnstileBody: "セキュリティチェックを完了できませんでした。ネットワークまたは広告ブロッカーの問題の可能性があります — もう一度お試しいただくか、ページを再読み込みしてください。",
		genericTitle: "接続できませんでした",
		genericBody: "サインイン中にエラーが発生しました。しばらくしてからもう一度お試しください。",
		retry: "もう一度試す",
		dismiss: "閉じる"
	},
	profile: {
		title: "あなたのプロフィール",
		subtitle: "情報とウィジェットの動作を更新します。",
		uploadAvatar: "写真を変更",
		removeAvatar: "写真を削除",
		avatarUploading: "アップロード中…",
		preferencesHeading: "設定",
		preferenceLanguage: "言語",
		preferenceDesktopNotifications: "デスクトップ通知",
		preferenceDesktopNotificationsHint: "ウィジェットがフォーカスされていないときにシステム通知を受け取ります。",
		preferenceThemeMode: "テーマ",
		themeAuto: "システムに合わせる",
		themeLight: "ライト",
		themeDark: "ダーク",
		themeLocked: "テーマはオペレーターによって設定されています。",
		pinnedHint: "オペレーターによって設定 — 編集できません。",
		requiredHint: "必須",
		invalidEmail: "有効なメールアドレスを入力してください。",
		invalidPhone: "国際形式を使用してください(例: +14155552671)。",
		noFields: "ここにはまだ編集できる項目はありません。",
		save: "変更を保存",
		saving: "保存中…",
		cancel: "破棄",
		saved: "変更を保存しました。",
		loading: "プロフィールを読み込み中…",
		loadError: "プロフィールを読み込めませんでした。もう一度お試しください。",
		retry: "再試行",
		errorFieldNotAllowed: "このウィジェットではこの項目は編集できません。更新してみてください。",
		errorFieldPinned: "この項目はアカウントによってロックされています。",
		errorFieldInvalid: "一部の値が無効です。ハイライトされた項目を確認してください。",
		errorThemeLocked: "テーマはオペレーターによってロックされています。",
		errorFeatureDisabled: "プロフィール編集はオペレーターによって無効にされています。",
		errorGeneric: "変更を保存できませんでした。もう一度お試しください。",
		notificationsBlocked: "ブラウザによって通知がブロックされています。有効にするにはサイトの権限を更新してください。",
		notificationsRequest: "有効にするには、プロンプトで通知を許可してください。",
		systemFields: {
			avatar: "写真",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp 受信許可",
			webVerified: "認証済み訪問者",
			firstName: "名",
			lastName: "姓",
			username: "ユーザー名",
			language: "言語",
			email: "メール",
			phone: "電話",
			company: "会社",
			location: "所在地",
			isValid: "アカウント有効",
			chatStatus: "チャットステータス",
			chatCategory: "チャットカテゴリ",
			priority: "優先度",
			leadSource: "リードソース",
			leadStatus: "リードステータス",
			interestLevel: "関心レベル",
			productInterest: "製品への関心",
			budgetRange: "予算",
			purchaseTimeline: "購入時期",
			lastMessageSentAt: "最後の送信",
			lastMessageReceivedAt: "最後の受信",
			lastSeenAt: "最終アクセス",
			firstMessageReceivedAt: "最初の連絡",
			isBlocked: "ブロック済み",
			registrationDate: "登録日",
			aiAvailable: "AIサポート",
			totalMessagesSent: "送信メッセージ数",
			totalMessagesReceived: "受信メッセージ数",
			totalAiMessagesSent: "AI送信メッセージ数",
			totalBotMessagesSent: "ボット送信メッセージ数",
			totalUserMessagesSent: "オペレーター送信メッセージ数",
			flowCompletionRate: "フロー完了率",
			lastFlowCompleted: "最後に完了したフロー",
			totalFlowsStarted: "開始したフロー",
			totalFlowsCompleted: "完了したフロー"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "問題",
				RESOLVED: "解決済み",
				PENDING: "保留中",
				IN_PROGRESS: "進行中",
				CLOSED: "クローズ"
			},
			chatCategory: {
				SALES: "営業",
				SUPPORT: "サポート",
				BILLING: "請求",
				FEEDBACK: "フィードバック",
				GENERAL: "一般",
				OTHER: "その他"
			},
			priority: {
				LOW: "低",
				MEDIUM: "中",
				HIGH: "高",
				URGENT: "緊急"
			},
			leadStatus: {
				NEW: "新規",
				CONTACTED: "連絡済み",
				QUALIFIED: "条件適合",
				NEGOTIATING: "交渉中",
				WON: "受注",
				LOST: "失注"
			},
			interestLevel: {
				LOW: "低",
				MEDIUM: "中",
				HIGH: "高",
				VERY_HIGH: "非常に高い"
			}
		}
	}
}, Vv = {
	tabs: {
		home: "홈",
		messages: "메시지",
		help: "도움말",
		news: "소식",
		profile: "프로필"
	},
	header: {
		close: "닫기",
		back: "뒤로",
		conversationSubtitle: "저희 팀도 도와드릴 수 있습니다",
		helpTitle: "도움말",
		newsTitle: "소식",
		expand: "위젯 확장",
		collapse: "위젯 축소"
	},
	launcher: {
		open: "채팅 열기",
		close: "채팅 닫기",
		loading: "연결 중…"
	},
	home: {
		greetingHeadline: "안녕하세요 👋",
		greetingSubheadline: "무엇을 도와드릴까요?",
		askTitle: "질문하기",
		askSubtitle: "저희 봇과 팀이 도와드립니다",
		recentMessageLabel: "최근 메시지",
		recentMessageTitle: "최근 메시지",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4시간 전",
		recentMessageSample: "안녕하세요 👋 연락 주셔서 감사합니다 - 곧 회신드리겠습니다.",
		featuredArticleLoading: "추천 문서",
		featuredArticleTap: "탭하여 읽기",
		featuredArticleEmpty: "문서 선택",
		featuredArticleSetUp: "대시보드에서 이 블록을 설정하세요",
		featuredArticleDemoEyebrow: "Pioneer · 일정을 기억하세요",
		featuredArticleDemoHeadline: "2026년 10월 8일",
		featuredArticleDemoSubline: "샌프란시스코 · 현장 + 온라인",
		featuredArticleDemoCta: "런칭 일정 보기",
		seeAgenda: "런칭 일정 보기",
		browseHelp: "도움말 둘러보기",
		whatsNew: "새로운 소식",
		searchPlaceholder: "도움말 검색",
		pinnedArticlesTitle: "먼저 읽어보세요",
		popularArticlesTitle: "인기 문서",
		pinnedArticleRow: "고정된 문서 {n}",
		newsPreviewTitle: "최신 소식",
		newsPreviewRow: "소식 업데이트 {n}",
		myConversationsTitle: "내 대화",
		myConversationsEmpty: "내 대화 보기",
		teamStatusOnline: "온라인입니다",
		teamStatusReplyTime: "보통 몇 분 내로 답변합니다"
	},
	messages: {
		today: "오늘",
		yesterday: "어제",
		unreadMessages: "읽지 않은 메시지",
		emptyTitle: "아직 메시지가 없습니다",
		emptyBody: "대화를 시작하시면 저희 팀이 여기서 회신드립니다.",
		sendCta: "메시지 보내기",
		attach: "파일 첨부",
		commands: "빠른 명령",
		record: "음성 메시지 녹음",
		stopRecording: "녹음 중지",
		recording: "녹음 중…",
		uploading: "업로드 중…",
		uploadFailed: "업로드 실패",
		voiceDenied: "마이크 접근이 거부되었습니다",
		voiceUnsupported: "이 브라우저에서는 음성 녹음을 지원하지 않습니다",
		fileTooLarge: "파일이 너무 큽니다 (최대 10MB)",
		fileMimeNotAllowed: "지원하지 않는 파일 형식입니다",
		emoji: "이모지 삽입",
		cancelRecording: "녹음 취소",
		pauseRecording: "녹음 일시정지",
		resumeRecording: "녹음 재개",
		playPreview: "녹음 재생",
		emojiPicker: "이모지 선택",
		emojiSearch: "검색…",
		playAudio: "재생",
		pauseAudio: "일시정지",
		openAudio: "오디오 열기",
		removeAttachment: "삭제",
		aiAssistant: "AI 어시스턴트",
		operator: "상담원",
		openImage: "이미지 열기",
		openPreview: "미리보기 열기",
		play: "재생",
		pause: "일시정지",
		typing: "입력 중…",
		aiThinking: "생각 중…",
		aiSearching: "검색 중…",
		typingSomeone: "누군가",
		signInToChat: "대화를 시작하려면 로그인해 주십시오.",
		signInUnavailable: "현재 로그인을 사용할 수 없습니다.",
		googleSignIn: "Google로 로그인",
		passkeySignIn: "패스키로 로그인",
		passkeyRegister: "처음이신가요? 패스키 설정",
		passkeyError: "로그인할 수 없습니다. 다시 시도해 주십시오.",
		passkeyNoCredential: "이 기기에 아직 패스키가 없습니다 — 생성하려면 \"패스키 설정\"을 탭하세요.",
		googleSignInDemo: "Google로 계속하기",
		connectingOperator: "상담원이 배정되었습니다. 잠시만 기다려 주십시오…",
		assignment: { eta: {
			minutes: "상담원이 약 {minutes}분 이내에 답변드립니다",
			soft: "보통 몇 분 이내에 답변드립니다",
			businessHours: "담당팀이 {time}에 다시 응대를 시작합니다"
		} },
		withOperator: "이제 {name}님과 채팅 중입니다",
		operatorConnected: "상담원이 연결되었습니다",
		chatResolved: "대화가 해결되었습니다",
		chatResolvedByYou: "회원님이 대화를 해결했습니다",
		chatResolvedByOperator: "{name}님이 대화를 해결했습니다",
		resolveConversation: "대화 해결",
		sources: "출처",
		moreSources: "+{count}개 더"
	},
	prechat: {
		title: "시작하기 전에",
		subtitle: "저희 팀이 더 빠르게 도와드릴 수 있도록 몇 가지 정보를 알려 주십시오.",
		labelName: "이름",
		labelEmail: "이메일",
		labelPhone: "전화",
		labelCustom: "세부사항",
		required: "필수",
		invalidEmail: "올바른 이메일을 입력해 주십시오",
		invalidPhone: "올바른 전화번호를 입력해 주십시오",
		submit: "계속",
		submitFailed: "제출할 수 없습니다 - 다시 시도해 주십시오."
	},
	help: {
		searchPlaceholder: "도움말 검색",
		emptyTitle: "아직 문서가 없습니다",
		emptyBody: "운영자가 아직 아무것도 게시하지 않았습니다.",
		back: "뒤로",
		helpful: "도움이 되셨나요?",
		yes: "예",
		no: "아니오",
		thanks: "피드백 감사합니다.",
		unresolvedCta: "아직 도움이 필요하신가요? 메시지를 보내 주세요",
		noResults: "결과가 없습니다",
		articleNotFound: "문서를 찾을 수 없습니다",
		articleNotTranslated: "이 문서는 아직 해당 언어로 제공되지 않습니다.",
		writtenBy: "작성자: {names}",
		relatedTitle: "관련 문서",
		collectionsCount: "{count, plural, =0 {컬렉션 없음} other {컬렉션 #개}}",
		articlesCount: "{count, plural, =0 {문서 없음} other {문서: #}}",
		authorsByline: "작성자 {first}{remaining, plural, =0 {} other { 외 #명}}"
	},
	news: {
		emptyTitle: "아직 업데이트가 없습니다",
		emptyBody: "제품 소식과 공지를 보려면 다시 확인해 주십시오.",
		helpful: "이 문서가 도움이 되셨나요?",
		yes: "예",
		no: "아니오",
		thanks: "피드백 감사합니다.",
		searchPlaceholder: "소식 검색",
		noResults: "일치하는 게시물이 없습니다",
		editedAt: "{when}에 편집됨",
		articleNotFound: "문서를 찾을 수 없습니다.",
		articleNotTranslated: "이 게시물은 아직 해당 언어로 제공되지 않습니다.",
		readOriginal: "원문 보기",
		relatedTitle: "관련",
		writtenBy: "작성자: {names}",
		unread: "읽지 않은 소식"
	},
	reactions: {
		ariaLabel: "반응",
		tapAria: "{emoji}로 반응하기"
	},
	languageSelector: {
		title: "다른 언어로 읽기",
		ariaLabel: "문서 언어"
	},
	branding: {
		poweredBy: "제공:",
		wexio: "Wexio"
	},
	sound: {
		mute: "알림 소리 음소거",
		unmute: "알림 소리 켜기"
	},
	article: {
		tableOfContents: "목차",
		tabFallback: "탭 {n}"
	},
	peek: {
		newMessage: "새 메시지",
		dismiss: "닫기",
		aiAssistant: "AI 어시스턴트",
		operator: "상담원"
	},
	lightbox: {
		mediaPreview: "미디어 미리보기",
		close: "미리보기 닫기",
		previous: "이전",
		next: "다음"
	},
	authError: {
		turnstileTitle: "브라우저를 확인할 수 없습니다",
		turnstileBody: "보안 확인을 완료할 수 없습니다. 네트워크나 광고 차단기 문제일 수 있습니다 — 다시 시도하거나 페이지를 새로고침해 주십시오.",
		genericTitle: "연결할 수 없습니다",
		genericBody: "로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해 주십시오.",
		retry: "다시 시도",
		dismiss: "닫기"
	},
	profile: {
		title: "내 프로필",
		subtitle: "정보와 위젯 동작을 업데이트합니다.",
		uploadAvatar: "사진 변경",
		removeAvatar: "사진 삭제",
		avatarUploading: "업로드 중…",
		preferencesHeading: "환경설정",
		preferenceLanguage: "언어",
		preferenceDesktopNotifications: "데스크톱 알림",
		preferenceDesktopNotificationsHint: "위젯에 포커스가 없을 때 시스템 알림을 받습니다.",
		preferenceThemeMode: "테마",
		themeAuto: "시스템 설정 사용",
		themeLight: "라이트",
		themeDark: "다크",
		themeLocked: "테마는 운영자가 설정합니다.",
		pinnedHint: "운영자에 의해 설정됨 — 편집할 수 없습니다.",
		requiredHint: "필수",
		invalidEmail: "올바른 이메일 주소를 입력해 주십시오.",
		invalidPhone: "국제 형식을 사용해 주십시오 (예: +14155552671).",
		noFields: "여기에는 아직 편집할 항목이 없습니다.",
		save: "변경사항 저장",
		saving: "저장 중…",
		cancel: "취소",
		saved: "변경사항이 저장되었습니다.",
		loading: "프로필 로드 중…",
		loadError: "프로필을 로드할 수 없습니다. 다시 시도해 주십시오.",
		retry: "재시도",
		errorFieldNotAllowed: "이 위젯에서는 이 필드를 편집할 수 없습니다. 새로고침해 주십시오.",
		errorFieldPinned: "이 필드는 계정에 의해 잠겨 있습니다.",
		errorFieldInvalid: "일부 값이 올바르지 않습니다. 강조 표시된 필드를 확인해 주십시오.",
		errorThemeLocked: "테마는 운영자에 의해 잠겨 있습니다.",
		errorFeatureDisabled: "프로필 편집이 운영자에 의해 비활성화되었습니다.",
		errorGeneric: "변경사항을 저장할 수 없습니다. 다시 시도해 주십시오.",
		notificationsBlocked: "브라우저가 알림을 차단했습니다. 활성화하려면 사이트 권한을 업데이트해 주십시오.",
		notificationsRequest: "활성화하려면 알림 요청 시 허용해 주십시오.",
		systemFields: {
			avatar: "사진",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp 수신 동의",
			webVerified: "인증된 방문자",
			firstName: "이름",
			lastName: "성",
			username: "사용자명",
			language: "언어",
			email: "이메일",
			phone: "전화",
			company: "회사",
			location: "위치",
			isValid: "유효한 계정",
			chatStatus: "채팅 상태",
			chatCategory: "채팅 카테고리",
			priority: "우선순위",
			leadSource: "리드 출처",
			leadStatus: "리드 상태",
			interestLevel: "관심 수준",
			productInterest: "관심 제품",
			budgetRange: "예산",
			purchaseTimeline: "구매 시기",
			lastMessageSentAt: "마지막 발송",
			lastMessageReceivedAt: "마지막 수신",
			lastSeenAt: "마지막 접속",
			firstMessageReceivedAt: "첫 연락",
			isBlocked: "차단됨",
			registrationDate: "등록일",
			aiAvailable: "AI 지원",
			totalMessagesSent: "발송한 메시지",
			totalMessagesReceived: "수신한 메시지",
			totalAiMessagesSent: "AI 발송 메시지",
			totalBotMessagesSent: "봇 발송 메시지",
			totalUserMessagesSent: "상담원 발송 메시지",
			flowCompletionRate: "플로우 완료율",
			lastFlowCompleted: "마지막 완료 플로우",
			totalFlowsStarted: "시작한 플로우",
			totalFlowsCompleted: "완료한 플로우"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "이슈",
				RESOLVED: "해결됨",
				PENDING: "대기 중",
				IN_PROGRESS: "진행 중",
				CLOSED: "종료됨"
			},
			chatCategory: {
				SALES: "영업",
				SUPPORT: "지원",
				BILLING: "결제",
				FEEDBACK: "피드백",
				GENERAL: "일반",
				OTHER: "기타"
			},
			priority: {
				LOW: "낮음",
				MEDIUM: "보통",
				HIGH: "높음",
				URGENT: "긴급"
			},
			leadStatus: {
				NEW: "신규",
				CONTACTED: "연락함",
				QUALIFIED: "검증됨",
				NEGOTIATING: "협상 중",
				WON: "성공",
				LOST: "실패"
			},
			interestLevel: {
				LOW: "낮음",
				MEDIUM: "보통",
				HIGH: "높음",
				VERY_HIGH: "매우 높음"
			}
		}
	}
}, Hv = {
	tabs: {
		home: "Home",
		messages: "Berichten",
		help: "Help",
		news: "Nieuws",
		profile: "Profiel"
	},
	header: {
		close: "Sluiten",
		back: "Terug",
		conversationSubtitle: "Ons team kan ook helpen",
		helpTitle: "Help",
		newsTitle: "Nieuws",
		expand: "Widget uitklappen",
		collapse: "Widget inklappen"
	},
	launcher: {
		open: "Chat openen",
		close: "Chat sluiten",
		loading: "Verbinden…"
	},
	home: {
		greetingHeadline: "Hoi 👋",
		greetingSubheadline: "Hoe kunnen we helpen?",
		askTitle: "Stel een vraag",
		askSubtitle: "Onze bot en ons team helpen je graag",
		recentMessageLabel: "Recent bericht",
		recentMessageTitle: "Recent bericht",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 u",
		recentMessageSample: "Hoi 👋 Bedankt voor je bericht – we komen zo bij je terug.",
		featuredArticleLoading: "Uitgelicht artikel",
		featuredArticleTap: "Tik om te lezen",
		featuredArticleEmpty: "Kies een artikel",
		featuredArticleSetUp: "Stel dit blok in via je dashboard",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "8 oktober 2026",
		featuredArticleDemoSubline: "San Francisco · in persoon + virtueel",
		featuredArticleDemoCta: "Bekijk de launchagenda",
		seeAgenda: "Bekijk de launchagenda",
		browseHelp: "Help doorbladeren",
		whatsNew: "Wat is er nieuw",
		searchPlaceholder: "Zoeken in help",
		pinnedArticlesTitle: "Lees deze eerst",
		popularArticlesTitle: "Populaire artikelen",
		pinnedArticleRow: "Vastgezet artikel {n}",
		newsPreviewTitle: "Laatste nieuws",
		newsPreviewRow: "Nieuwsupdate {n}",
		myConversationsTitle: "Jouw gesprekken",
		myConversationsEmpty: "Bekijk je gesprekken",
		teamStatusOnline: "We zijn online",
		teamStatusReplyTime: "Meestal antwoord binnen enkele minuten"
	},
	messages: {
		today: "Vandaag",
		yesterday: "Gisteren",
		unreadMessages: "Ongelezen berichten",
		emptyTitle: "Nog geen berichten",
		emptyBody: "Start een gesprek – ons team antwoordt hier.",
		sendCta: "Stuur ons een bericht",
		attach: "Bestand bijvoegen",
		commands: "Snelle commando's",
		record: "Spraakbericht opnemen",
		stopRecording: "Opname stoppen",
		recording: "Opnemen…",
		uploading: "Uploaden…",
		uploadFailed: "Uploaden mislukt",
		voiceDenied: "Microfoontoegang geweigerd",
		voiceUnsupported: "Spraakopname wordt niet ondersteund in deze browser",
		fileTooLarge: "Bestand is te groot (max. 10 MB)",
		fileMimeNotAllowed: "Dit bestandstype wordt niet ondersteund",
		emoji: "Emoji invoegen",
		cancelRecording: "Opname annuleren",
		pauseRecording: "Opname pauzeren",
		resumeRecording: "Opname hervatten",
		playPreview: "Opname afspelen",
		emojiPicker: "Emoji-keuze",
		emojiSearch: "Zoeken…",
		playAudio: "Afspelen",
		pauseAudio: "Pauzeren",
		openAudio: "Audio openen",
		removeAttachment: "Verwijderen",
		aiAssistant: "AI-assistent",
		operator: "Medewerker",
		openImage: "Afbeelding openen",
		openPreview: "Voorvertoning openen",
		play: "Afspelen",
		pause: "Pauzeren",
		typing: "typt…",
		aiThinking: "denkt na…",
		aiSearching: "doorzoekt…",
		typingSomeone: "Iemand",
		signInToChat: "Meld je aan om het gesprek te starten.",
		signInUnavailable: "Aanmelden is op dit moment niet beschikbaar.",
		googleSignIn: "Aanmelden met Google",
		passkeySignIn: "Aanmelden met een passkey",
		passkeyRegister: "Eerste keer? Maak een passkey aan",
		passkeyError: "Aanmelden is mislukt. Probeer het opnieuw.",
		passkeyNoCredential: "Nog geen passkey op dit apparaat – tik op «Maak een passkey aan» om er een te maken.",
		googleSignInDemo: "Doorgaan met Google",
		connectingOperator: "Er is een medewerker toegewezen, een moment geduld…",
		assignment: { eta: {
			minutes: "Een medewerker reageert over ongeveer {minutes} min",
			soft: "We reageren meestal binnen een paar minuten",
			businessHours: "Het team is weer bereikbaar om {time}"
		} },
		withOperator: "Je chat nu met {name}",
		operatorConnected: "Medewerker verbonden",
		chatResolved: "Gesprek opgelost",
		chatResolvedByYou: "Gesprek door jou opgelost",
		chatResolvedByOperator: "Gesprek opgelost door {name}",
		resolveConversation: "Gesprek oplossen",
		sources: "Bronnen",
		moreSources: "+{count} meer"
	},
	prechat: {
		title: "Voordat we beginnen",
		subtitle: "Een paar snelle gegevens, zodat ons team je sneller kan helpen.",
		labelName: "Naam",
		labelEmail: "E-mail",
		labelPhone: "Telefoon",
		labelCustom: "Details",
		required: "Verplicht",
		invalidEmail: "Voer een geldig e-mailadres in",
		invalidPhone: "Voer een geldig telefoonnummer in",
		submit: "Doorgaan",
		submitFailed: "Versturen is mislukt – probeer het opnieuw."
	},
	help: {
		searchPlaceholder: "Zoeken in help",
		emptyTitle: "Nog geen artikelen",
		emptyBody: "Je operator heeft nog niets gepubliceerd.",
		back: "Terug",
		helpful: "Was dit nuttig?",
		yes: "Ja",
		no: "Nee",
		thanks: "Bedankt voor je feedback.",
		unresolvedCta: "Heb je nog hulp nodig? Stuur ons een bericht",
		noResults: "Geen resultaten",
		articleNotFound: "Artikel niet gevonden",
		articleNotTranslated: "Dit artikel is nog niet beschikbaar in jouw taal.",
		writtenBy: "Geschreven door {names}",
		relatedTitle: "Gerelateerde artikelen",
		collectionsCount: "{count, plural, =0 {Geen collecties} one {# collectie} other {# collecties}}",
		articlesCount: "{count, plural, =0 {Geen artikelen} one {Artikelen: #} other {Artikelen: #}}",
		authorsByline: "Auteurs {first}{remaining, plural, =0 {} one { en # meer} other { en # meer}}"
	},
	news: {
		emptyTitle: "Nog geen updates",
		emptyBody: "Kom hier terug voor productnieuws en aankondigingen.",
		helpful: "Was dit artikel nuttig?",
		yes: "Ja",
		no: "Nee",
		thanks: "Bedankt voor je feedback.",
		searchPlaceholder: "Zoeken in nieuws",
		noResults: "Geen overeenkomende berichten",
		editedAt: "bewerkt {when}",
		articleNotFound: "Artikel niet gevonden.",
		articleNotTranslated: "Dit bericht is nog niet beschikbaar in jouw taal.",
		readOriginal: "Lees het origineel",
		relatedTitle: "Gerelateerd",
		writtenBy: "Geschreven door {names}",
		unread: "Ongelezen nieuws"
	},
	reactions: {
		ariaLabel: "Reacties",
		tapAria: "Reageer met {emoji}"
	},
	languageSelector: {
		title: "Lees in een andere taal",
		ariaLabel: "Talen van het artikel"
	},
	branding: {
		poweredBy: "Mogelijk gemaakt door",
		wexio: "Wexio"
	},
	sound: {
		mute: "Meldingsgeluiden dempen",
		unmute: "Meldingsgeluiden inschakelen"
	},
	article: {
		tableOfContents: "Inhoudsopgave",
		tabFallback: "Tabblad {n}"
	},
	peek: {
		newMessage: "Nieuw bericht",
		dismiss: "Sluiten",
		aiAssistant: "AI-assistent",
		operator: "Medewerker"
	},
	lightbox: {
		mediaPreview: "Mediavoorvertoning",
		close: "Voorvertoning sluiten",
		previous: "Vorige",
		next: "Volgende"
	},
	authError: {
		turnstileTitle: "Kon je browser niet verifiëren",
		turnstileBody: "De beveiligingscontrole kon niet worden voltooid. Soms ligt het aan het netwerk of een ad-blocker – probeer het opnieuw of laad de pagina opnieuw.",
		genericTitle: "Verbinden mislukt",
		genericBody: "Er ging iets mis bij het aanmelden. Probeer het zo opnieuw.",
		retry: "Opnieuw proberen",
		dismiss: "Sluiten"
	},
	profile: {
		title: "Jouw profiel",
		subtitle: "Werk je gegevens en het gedrag van de widget bij.",
		uploadAvatar: "Foto wijzigen",
		removeAvatar: "Foto verwijderen",
		avatarUploading: "Uploaden…",
		preferencesHeading: "Voorkeuren",
		preferenceLanguage: "Taal",
		preferenceDesktopNotifications: "Bureaubladmeldingen",
		preferenceDesktopNotificationsHint: "Ontvang een systeemmelding wanneer de widget niet op de voorgrond staat.",
		preferenceThemeMode: "Thema",
		themeAuto: "Volg systeem",
		themeLight: "Licht",
		themeDark: "Donker",
		themeLocked: "Het thema is ingesteld door de operator.",
		pinnedHint: "Ingesteld door de operator – niet aanpasbaar.",
		requiredHint: "Verplicht",
		invalidEmail: "Voer een geldig e-mailadres in.",
		invalidPhone: "Gebruik internationaal formaat, bijv. +31612345678.",
		noFields: "Er is hier nog niets te bewerken.",
		save: "Wijzigingen opslaan",
		saving: "Opslaan…",
		cancel: "Verwerpen",
		saved: "Wijzigingen opgeslagen.",
		loading: "Profiel laden…",
		loadError: "Profiel kon niet worden geladen. Probeer het opnieuw.",
		retry: "Opnieuw proberen",
		errorFieldNotAllowed: "Dit veld kan in deze widget niet worden bewerkt. Probeer te vernieuwen.",
		errorFieldPinned: "Dit veld is vergrendeld door je account.",
		errorFieldInvalid: "Sommige waarden zijn ongeldig. Controleer de gemarkeerde velden.",
		errorThemeLocked: "Het thema is vergrendeld door de operator.",
		errorFeatureDisabled: "De operator heeft het bewerken van het profiel uitgeschakeld.",
		errorGeneric: "Wijzigingen konden niet worden opgeslagen. Probeer het opnieuw.",
		notificationsBlocked: "Meldingen zijn geblokkeerd door de browser. Werk de sitepermissies bij om ze in te schakelen.",
		notificationsRequest: "Sta meldingen toe wanneer daarom wordt gevraagd om dit in te schakelen.",
		systemFields: {
			avatar: "Foto",
			wexioId: "Wexio-ID",
			telegramId: "Telegram-ID",
			whatsappId: "WhatsApp-ID",
			viberId: "Viber-ID",
			instagramId: "Instagram-ID",
			optInWhatsapp: "WhatsApp-toestemming",
			webVerified: "Geverifieerde bezoeker",
			firstName: "Voornaam",
			lastName: "Achternaam",
			username: "Gebruikersnaam",
			language: "Taal",
			email: "E-mail",
			phone: "Telefoon",
			company: "Bedrijf",
			location: "Locatie",
			isValid: "Account geldig",
			chatStatus: "Chatstatus",
			chatCategory: "Chatcategorie",
			priority: "Prioriteit",
			leadSource: "Bron van lead",
			leadStatus: "Status van lead",
			interestLevel: "Interesseniveau",
			productInterest: "Productinteresse",
			budgetRange: "Budget",
			purchaseTimeline: "Aankooptermijn",
			lastMessageSentAt: "Laatste bericht verstuurd",
			lastMessageReceivedAt: "Laatste bericht ontvangen",
			lastSeenAt: "Laatst gezien",
			firstMessageReceivedAt: "Eerste contact",
			isBlocked: "Geblokkeerd",
			registrationDate: "Geregistreerd",
			aiAvailable: "AI-ondersteuning",
			totalMessagesSent: "Berichten verstuurd",
			totalMessagesReceived: "Berichten ontvangen",
			totalAiMessagesSent: "Door AI verstuurde berichten",
			totalBotMessagesSent: "Door bot verstuurde berichten",
			totalUserMessagesSent: "Door medewerker verstuurde berichten",
			flowCompletionRate: "Voltooiingspercentage flow",
			lastFlowCompleted: "Laatst voltooide flow",
			totalFlowsStarted: "Gestarte flows",
			totalFlowsCompleted: "Voltooide flows"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Probleem",
				RESOLVED: "Opgelost",
				PENDING: "In behandeling",
				IN_PROGRESS: "Bezig",
				CLOSED: "Gesloten"
			},
			chatCategory: {
				SALES: "Verkoop",
				SUPPORT: "Support",
				BILLING: "Facturatie",
				FEEDBACK: "Feedback",
				GENERAL: "Algemeen",
				OTHER: "Overig"
			},
			priority: {
				LOW: "Laag",
				MEDIUM: "Gemiddeld",
				HIGH: "Hoog",
				URGENT: "Urgent"
			},
			leadStatus: {
				NEW: "Nieuw",
				CONTACTED: "Benaderd",
				QUALIFIED: "Gekwalificeerd",
				NEGOTIATING: "In onderhandeling",
				WON: "Gewonnen",
				LOST: "Verloren"
			},
			interestLevel: {
				LOW: "Laag",
				MEDIUM: "Gemiddeld",
				HIGH: "Hoog",
				VERY_HIGH: "Zeer hoog"
			}
		}
	}
}, Uv = {
	tabs: {
		home: "Hjem",
		messages: "Meldinger",
		help: "Hjelp",
		news: "Nyheter",
		profile: "Profil"
	},
	header: {
		close: "Lukk",
		back: "Tilbake",
		conversationSubtitle: "Teamet vårt kan også hjelpe",
		helpTitle: "Hjelp",
		newsTitle: "Nyheter",
		expand: "Utvid widgeten",
		collapse: "Minimer widgeten"
	},
	launcher: {
		open: "Åpne chat",
		close: "Lukk chat",
		loading: "Kobler til…"
	},
	home: {
		greetingHeadline: "Hei der 👋",
		greetingSubheadline: "Hvordan kan vi hjelpe?",
		askTitle: "Still et spørsmål",
		askSubtitle: "Boten og teamet vårt kan hjelpe",
		recentMessageLabel: "Siste melding",
		recentMessageTitle: "Siste melding",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4t",
		recentMessageSample: "Hei der 👋 Takk for at du tar kontakt - vi kommer straks tilbake.",
		featuredArticleLoading: "Utvalgt artikkel",
		featuredArticleTap: "Trykk for å lese",
		featuredArticleEmpty: "Velg en artikkel",
		featuredArticleSetUp: "Konfigurer denne blokken i dashbordet",
		featuredArticleDemoEyebrow: "Pioneer · Sett av datoen",
		featuredArticleDemoHeadline: "8. oktober 2026",
		featuredArticleDemoSubline: "San Francisco · Fysisk + digitalt",
		featuredArticleDemoCta: "Se programmet",
		seeAgenda: "Se programmet",
		browseHelp: "Bla i hjelpen",
		whatsNew: "Hva er nytt",
		searchPlaceholder: "Søk i hjelp",
		pinnedArticlesTitle: "Les disse først",
		popularArticlesTitle: "Populære artikler",
		pinnedArticleRow: "Festet artikkel {n}",
		newsPreviewTitle: "Siste nytt",
		newsPreviewRow: "Nyhetsoppdatering {n}",
		myConversationsTitle: "Dine samtaler",
		myConversationsEmpty: "Se dine samtaler",
		teamStatusOnline: "Vi er på nett",
		teamStatusReplyTime: "Svarer vanligvis i løpet av få minutter"
	},
	messages: {
		today: "I dag",
		yesterday: "I går",
		unreadMessages: "Uleste meldinger",
		emptyTitle: "Ingen meldinger ennå",
		emptyBody: "Start en samtale, så svarer teamet vårt deg her.",
		sendCta: "Send oss en melding",
		attach: "Legg ved en fil",
		commands: "Hurtigkommandoer",
		record: "Spill inn en talemelding",
		stopRecording: "Stopp opptak",
		recording: "Tar opp…",
		uploading: "Laster opp…",
		uploadFailed: "Opplastingen mislyktes",
		voiceDenied: "Tilgang til mikrofon nektet",
		voiceUnsupported: "Taleopptak støttes ikke i denne nettleseren",
		fileTooLarge: "Filen er for stor (maks. 10 MB)",
		fileMimeNotAllowed: "Denne filtypen støttes ikke",
		emoji: "Sett inn emoji",
		cancelRecording: "Avbryt opptak",
		pauseRecording: "Pause opptak",
		resumeRecording: "Fortsett opptak",
		playPreview: "Spill av opptak",
		emojiPicker: "Emoji-velger",
		emojiSearch: "Søk…",
		playAudio: "Spill av",
		pauseAudio: "Pause",
		openAudio: "Åpne lyd",
		removeAttachment: "Fjern",
		aiAssistant: "AI-assistent",
		operator: "Operatør",
		openImage: "Åpne bilde",
		openPreview: "Åpne forhåndsvisning",
		play: "Spill av",
		pause: "Pause",
		typing: "skriver…",
		aiThinking: "tenker…",
		aiSearching: "søker…",
		typingSomeone: "Noen",
		signInToChat: "Logg inn for å starte samtalen.",
		signInUnavailable: "Innlogging er ikke tilgjengelig akkurat nå.",
		googleSignIn: "Logg inn med Google",
		passkeySignIn: "Logg inn med passkey",
		passkeyRegister: "Første gang? Opprett en passkey",
		passkeyError: "Kunne ikke logge inn. Prøv igjen.",
		passkeyNoCredential: "Ingen passkey på denne enheten ennå — trykk «Opprett en passkey» for å lage en.",
		googleSignInDemo: "Fortsett med Google",
		connectingOperator: "En operatør er tildelt, vennligst vent…",
		assignment: { eta: {
			minutes: "En operatør svarer om cirka {minutes} min",
			soft: "Vi svarer vanligvis innen få minutter",
			businessHours: "Teamet er tilbake {time}"
		} },
		withOperator: "Du chatter nå med {name}",
		operatorConnected: "Operatør tilkoblet",
		chatResolved: "Samtalen er løst",
		chatResolvedByYou: "Samtalen ble løst av deg",
		chatResolvedByOperator: "Samtalen ble løst av {name}",
		resolveConversation: "Løs samtalen",
		sources: "Kilder",
		moreSources: "+{count} til"
	},
	prechat: {
		title: "Før vi starter",
		subtitle: "Noen raske detaljer slik at teamet vårt kan hjelpe deg raskere.",
		labelName: "Navn",
		labelEmail: "E-post",
		labelPhone: "Telefon",
		labelCustom: "Detaljer",
		required: "Påkrevd",
		invalidEmail: "Skriv inn en gyldig e-postadresse",
		invalidPhone: "Skriv inn et gyldig telefonnummer",
		submit: "Fortsett",
		submitFailed: "Kunne ikke sende - prøv igjen."
	},
	help: {
		searchPlaceholder: "Søk i hjelp",
		emptyTitle: "Ingen artikler ennå",
		emptyBody: "Operatøren din har ikke publisert noe ennå.",
		back: "Tilbake",
		helpful: "Var dette nyttig?",
		yes: "Ja",
		no: "Nei",
		thanks: "Takk for tilbakemeldingen.",
		unresolvedCta: "Trenger du fortsatt hjelp? Skriv til oss",
		noResults: "Ingen treff",
		articleNotFound: "Artikkel ikke funnet",
		articleNotTranslated: "Denne artikkelen er ikke tilgjengelig på språket ditt ennå.",
		writtenBy: "Skrevet av {names}",
		relatedTitle: "Relaterte artikler",
		collectionsCount: "{count, plural, =0 {Ingen samlinger} one {# samling} other {# samlinger}}",
		articlesCount: "{count, plural, =0 {Ingen artikler} one {Artikler: #} other {Artikler: #}}",
		authorsByline: "Forfattere {first}{remaining, plural, =0 {} one { og # til} other { og # til}}"
	},
	news: {
		emptyTitle: "Ingen oppdateringer ennå",
		emptyBody: "Kom tilbake hit for produktnyheter og kunngjøringer.",
		helpful: "Var denne artikkelen nyttig?",
		yes: "Ja",
		no: "Nei",
		thanks: "Takk for tilbakemeldingen.",
		searchPlaceholder: "Søk i nyheter",
		noResults: "Ingen treff",
		editedAt: "redigert {when}",
		articleNotFound: "Artikkel ikke funnet.",
		articleNotTranslated: "Dette innlegget er ikke tilgjengelig på språket ditt ennå.",
		readOriginal: "Les originalen",
		relatedTitle: "Relatert",
		writtenBy: "Skrevet av {names}",
		unread: "Uleste nyheter"
	},
	reactions: {
		ariaLabel: "Reaksjoner",
		tapAria: "Reager med {emoji}"
	},
	languageSelector: {
		title: "Les på et annet språk",
		ariaLabel: "Artikkelens språk"
	},
	branding: {
		poweredBy: "Drevet av",
		wexio: "Wexio"
	},
	sound: {
		mute: "Slå av varsellyder",
		unmute: "Slå på varsellyder"
	},
	article: {
		tableOfContents: "Innholdsfortegnelse",
		tabFallback: "Fane {n}"
	},
	peek: {
		newMessage: "Ny melding",
		dismiss: "Lukk",
		aiAssistant: "AI-assistent",
		operator: "Operatør"
	},
	lightbox: {
		mediaPreview: "Forhåndsvisning av media",
		close: "Lukk forhåndsvisning",
		previous: "Forrige",
		next: "Neste"
	},
	authError: {
		turnstileTitle: "Kunne ikke verifisere nettleseren din",
		turnstileBody: "Vi klarte ikke å fullføre sikkerhetssjekken. Det kan skyldes nettverk eller en annonseblokkering — prøv igjen, eller last inn siden på nytt.",
		genericTitle: "Kunne ikke koble til",
		genericBody: "Noe gikk galt under innloggingen. Prøv igjen om et øyeblikk.",
		retry: "Prøv igjen",
		dismiss: "Lukk"
	},
	profile: {
		title: "Profilen din",
		subtitle: "Oppdater informasjonen din og hvordan widgeten oppfører seg.",
		uploadAvatar: "Bytt bilde",
		removeAvatar: "Fjern bilde",
		avatarUploading: "Laster opp…",
		preferencesHeading: "Innstillinger",
		preferenceLanguage: "Språk",
		preferenceDesktopNotifications: "Skrivebordsvarsler",
		preferenceDesktopNotificationsHint: "Få et systemvarsel når widgeten ikke er i fokus.",
		preferenceThemeMode: "Tema",
		themeAuto: "Følg systemet",
		themeLight: "Lyst",
		themeDark: "Mørkt",
		themeLocked: "Temaet er satt av operatøren.",
		pinnedHint: "Satt av operatøren — kan ikke redigeres.",
		requiredHint: "Påkrevd",
		invalidEmail: "Skriv inn en gyldig e-postadresse.",
		invalidPhone: "Bruk internasjonalt format, f.eks. +14155552671.",
		noFields: "Det er ingenting å redigere her ennå.",
		save: "Lagre endringer",
		saving: "Lagrer…",
		cancel: "Forkast",
		saved: "Endringene er lagret.",
		loading: "Laster profil…",
		loadError: "Kunne ikke laste profilen din. Prøv igjen.",
		retry: "Prøv igjen",
		errorFieldNotAllowed: "Dette feltet kan ikke redigeres i denne widgeten. Prøv å oppdatere.",
		errorFieldPinned: "Dette feltet er låst av kontoen din.",
		errorFieldInvalid: "Noen verdier er ugyldige. Sjekk de uthevede feltene.",
		errorThemeLocked: "Temaet er låst av operatøren.",
		errorFeatureDisabled: "Profilredigering er slått av av operatøren.",
		errorGeneric: "Kunne ikke lagre endringene dine. Prøv igjen.",
		notificationsBlocked: "Varsler er blokkert av nettleseren. Oppdater nettstedets tillatelser for å aktivere.",
		notificationsRequest: "Tillat varsler når du blir spurt for å aktivere dette.",
		systemFields: {
			avatar: "Bilde",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp-samtykke",
			webVerified: "Verifisert besøkende",
			firstName: "Fornavn",
			lastName: "Etternavn",
			username: "Brukernavn",
			language: "Språk",
			email: "E-post",
			phone: "Telefon",
			company: "Selskap",
			location: "Sted",
			isValid: "Gyldig konto",
			chatStatus: "Chatstatus",
			chatCategory: "Chatkategori",
			priority: "Prioritet",
			leadSource: "Leadkilde",
			leadStatus: "Leadstatus",
			interestLevel: "Interessenivå",
			productInterest: "Produktinteresse",
			budgetRange: "Budsjett",
			purchaseTimeline: "Tidsplan for kjøp",
			lastMessageSentAt: "Sist sendt",
			lastMessageReceivedAt: "Sist mottatt",
			lastSeenAt: "Sist sett",
			firstMessageReceivedAt: "Første kontakt",
			isBlocked: "Blokkert",
			registrationDate: "Registrert",
			aiAvailable: "AI-assistanse",
			totalMessagesSent: "Sendte meldinger",
			totalMessagesReceived: "Mottatte meldinger",
			totalAiMessagesSent: "Sendte AI-meldinger",
			totalBotMessagesSent: "Sendte bot-meldinger",
			totalUserMessagesSent: "Sendte operatørmeldinger",
			flowCompletionRate: "Fullføringsgrad for flyter",
			lastFlowCompleted: "Sist fullførte flyt",
			totalFlowsStarted: "Startede flyter",
			totalFlowsCompleted: "Fullførte flyter"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problem",
				RESOLVED: "Løst",
				PENDING: "Venter",
				IN_PROGRESS: "Pågår",
				CLOSED: "Lukket"
			},
			chatCategory: {
				SALES: "Salg",
				SUPPORT: "Støtte",
				BILLING: "Fakturering",
				FEEDBACK: "Tilbakemelding",
				GENERAL: "Generelt",
				OTHER: "Annet"
			},
			priority: {
				LOW: "Lav",
				MEDIUM: "Middels",
				HIGH: "Høy",
				URGENT: "Haster"
			},
			leadStatus: {
				NEW: "Ny",
				CONTACTED: "Kontaktet",
				QUALIFIED: "Kvalifisert",
				NEGOTIATING: "Forhandler",
				WON: "Vunnet",
				LOST: "Tapt"
			},
			interestLevel: {
				LOW: "Lav",
				MEDIUM: "Middels",
				HIGH: "Høy",
				VERY_HIGH: "Svært høy"
			}
		}
	}
}, Wv = {
	tabs: {
		home: "Główna",
		messages: "Wiadomości",
		help: "Pomoc",
		news: "Aktualności",
		profile: "Profil"
	},
	header: {
		close: "Zamknij",
		back: "Wstecz",
		conversationSubtitle: "Nasz zespół również może pomóc",
		helpTitle: "Pomoc",
		newsTitle: "Aktualności",
		expand: "Rozwiń widget",
		collapse: "Zwiń widget"
	},
	launcher: {
		open: "Otwórz czat",
		close: "Zamknij czat",
		loading: "Łączenie…"
	},
	home: {
		greetingHeadline: "Cześć 👋",
		greetingSubheadline: "Jak możemy pomóc?",
		askTitle: "Zadaj pytanie",
		askSubtitle: "Pomoże nasz bot i zespół",
		recentMessageLabel: "Ostatnia wiadomość",
		recentMessageTitle: "Ostatnia wiadomość",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 godz.",
		recentMessageSample: "Cześć 👋 Dziękujemy za kontakt - wkrótce wrócimy do Ciebie.",
		featuredArticleLoading: "Wyróżniony artykuł",
		featuredArticleTap: "Stuknij, aby przeczytać",
		featuredArticleEmpty: "Wybierz artykuł",
		featuredArticleSetUp: "Skonfiguruj ten blok w panelu",
		featuredArticleDemoEyebrow: "Pioneer · Zarezerwuj datę",
		featuredArticleDemoHeadline: "8 października 2026",
		featuredArticleDemoSubline: "San Francisco · Stacjonarnie + online",
		featuredArticleDemoCta: "Zobacz program",
		seeAgenda: "Zobacz program",
		browseHelp: "Przeglądaj pomoc",
		whatsNew: "Co nowego",
		searchPlaceholder: "Szukaj w pomocy",
		pinnedArticlesTitle: "Przeczytaj najpierw",
		popularArticlesTitle: "Popularne artykuły",
		pinnedArticleRow: "Przypięty artykuł {n}",
		newsPreviewTitle: "Najnowsze wiadomości",
		newsPreviewRow: "Aktualizacja {n}",
		myConversationsTitle: "Twoje rozmowy",
		myConversationsEmpty: "Zobacz swoje rozmowy",
		teamStatusOnline: "Jesteśmy online",
		teamStatusReplyTime: "Zwykle odpowiadamy w ciągu kilku minut"
	},
	messages: {
		today: "Dzisiaj",
		yesterday: "Wczoraj",
		unreadMessages: "Nieprzeczytane wiadomości",
		emptyTitle: "Brak wiadomości",
		emptyBody: "Rozpocznij rozmowę, a nasz zespół odpowie tutaj.",
		sendCta: "Wyślij wiadomość",
		attach: "Załącz plik",
		commands: "Szybkie polecenia",
		record: "Nagraj wiadomość głosową",
		stopRecording: "Zatrzymaj nagrywanie",
		recording: "Nagrywanie…",
		uploading: "Przesyłanie…",
		uploadFailed: "Przesyłanie nie powiodło się",
		voiceDenied: "Brak dostępu do mikrofonu",
		voiceUnsupported: "Ta przeglądarka nie obsługuje nagrywania głosu",
		fileTooLarge: "Plik jest za duży (maks. 10 MB)",
		fileMimeNotAllowed: "Ten typ pliku nie jest obsługiwany",
		emoji: "Wstaw emoji",
		cancelRecording: "Anuluj nagrywanie",
		pauseRecording: "Wstrzymaj nagrywanie",
		resumeRecording: "Wznów nagrywanie",
		playPreview: "Odtwórz nagranie",
		emojiPicker: "Wybór emoji",
		emojiSearch: "Szukaj…",
		playAudio: "Odtwórz",
		pauseAudio: "Wstrzymaj",
		openAudio: "Otwórz audio",
		removeAttachment: "Usuń",
		aiAssistant: "Asystent AI",
		operator: "Operator",
		openImage: "Otwórz obraz",
		openPreview: "Otwórz podgląd",
		play: "Odtwórz",
		pause: "Wstrzymaj",
		typing: "pisze…",
		aiThinking: "myśli…",
		aiSearching: "przegląda…",
		typingSomeone: "Ktoś",
		signInToChat: "Zaloguj się, aby rozpocząć rozmowę.",
		signInUnavailable: "Logowanie jest obecnie niedostępne.",
		googleSignIn: "Zaloguj się przez Google",
		passkeySignIn: "Zaloguj się za pomocą passkey",
		passkeyRegister: "Pierwszy raz? Utwórz passkey",
		passkeyError: "Nie udało się zalogować. Spróbuj ponownie.",
		passkeyNoCredential: "Na tym urządzeniu nie ma jeszcze passkey — stuknij „Utwórz passkey”, aby go dodać.",
		googleSignInDemo: "Kontynuuj z Google",
		connectingOperator: "Operator został przydzielony, proszę czekać…",
		assignment: { eta: {
			minutes: "Operator odpowie za około {minutes} min",
			soft: "Zwykle odpowiadamy w ciągu kilku minut",
			businessHours: "Zespół wróci o {time}"
		} },
		withOperator: "Rozmawiasz teraz z {name}",
		operatorConnected: "Operator połączony",
		chatResolved: "Rozmowa zakończona",
		chatResolvedByYou: "Rozmowa zakończona przez Ciebie",
		chatResolvedByOperator: "Rozmowa zakończona przez {name}",
		resolveConversation: "Zakończ rozmowę",
		sources: "Źródła",
		moreSources: "+{count} więcej"
	},
	prechat: {
		title: "Zanim zaczniemy",
		subtitle: "Kilka szczegółów, aby nasz zespół mógł szybciej pomóc.",
		labelName: "Imię",
		labelEmail: "E-mail",
		labelPhone: "Telefon",
		labelCustom: "Szczegóły",
		required: "Wymagane",
		invalidEmail: "Podaj prawidłowy adres e-mail",
		invalidPhone: "Podaj prawidłowy numer telefonu",
		submit: "Dalej",
		submitFailed: "Nie udało się wysłać - spróbuj ponownie."
	},
	help: {
		searchPlaceholder: "Szukaj w pomocy",
		emptyTitle: "Brak artykułów",
		emptyBody: "Twój operator nie opublikował jeszcze żadnych treści.",
		back: "Wstecz",
		helpful: "Czy to było pomocne?",
		yes: "Tak",
		no: "Nie",
		thanks: "Dziękujemy za opinię.",
		unresolvedCta: "Nadal potrzebujesz pomocy? Napisz do nas",
		noResults: "Brak wyników",
		articleNotFound: "Nie znaleziono artykułu",
		articleNotTranslated: "Ten artykuł nie jest jeszcze dostępny w Twoim języku.",
		writtenBy: "Autor: {names}",
		relatedTitle: "Powiązane artykuły",
		collectionsCount: "{count, plural, =0 {Brak kolekcji} one {# kolekcja} few {# kolekcje} many {# kolekcji} other {# kolekcji}}",
		articlesCount: "{count, plural, =0 {Brak artykułów} one {Artykuły: #} few {Artykuły: #} many {Artykuły: #} other {Artykuły: #}}",
		authorsByline: "Autorzy {first}{remaining, plural, =0 {} one { i jeszcze #} few { i jeszcze #} many { i jeszcze #} other { i jeszcze #}}"
	},
	news: {
		emptyTitle: "Brak aktualizacji",
		emptyBody: "Zaglądaj tu po nowości produktowe i ogłoszenia.",
		helpful: "Czy ten artykuł był pomocny?",
		yes: "Tak",
		no: "Nie",
		thanks: "Dziękujemy za opinię.",
		searchPlaceholder: "Szukaj w aktualnościach",
		noResults: "Brak pasujących wpisów",
		editedAt: "edytowano {when}",
		articleNotFound: "Nie znaleziono artykułu.",
		articleNotTranslated: "Ten wpis nie jest jeszcze dostępny w Twoim języku.",
		readOriginal: "Przeczytaj oryginał",
		relatedTitle: "Powiązane",
		writtenBy: "Autor: {names}",
		unread: "Nieprzeczytane aktualności"
	},
	reactions: {
		ariaLabel: "Reakcje",
		tapAria: "Zareaguj: {emoji}"
	},
	languageSelector: {
		title: "Czytaj w innym języku",
		ariaLabel: "Języki artykułu"
	},
	branding: {
		poweredBy: "Działa dzięki",
		wexio: "Wexio"
	},
	sound: {
		mute: "Wycisz dźwięki powiadomień",
		unmute: "Włącz dźwięki powiadomień"
	},
	article: {
		tableOfContents: "Spis treści",
		tabFallback: "Karta {n}"
	},
	peek: {
		newMessage: "Nowa wiadomość",
		dismiss: "Zamknij",
		aiAssistant: "Asystent AI",
		operator: "Operator"
	},
	lightbox: {
		mediaPreview: "Podgląd multimediów",
		close: "Zamknij podgląd",
		previous: "Poprzednie",
		next: "Następne"
	},
	authError: {
		turnstileTitle: "Nie udało się zweryfikować przeglądarki",
		turnstileBody: "Nie udało nam się ukończyć weryfikacji bezpieczeństwa. Czasem powodem jest sieć lub blokowanie reklam — spróbuj ponownie lub odśwież stronę.",
		genericTitle: "Nie udało się połączyć",
		genericBody: "Coś poszło nie tak podczas logowania. Spróbuj za chwilę.",
		retry: "Spróbuj ponownie",
		dismiss: "Zamknij"
	},
	profile: {
		title: "Twój profil",
		subtitle: "Zaktualizuj swoje dane i sposób działania widgetu.",
		uploadAvatar: "Zmień zdjęcie",
		removeAvatar: "Usuń zdjęcie",
		avatarUploading: "Przesyłanie…",
		preferencesHeading: "Preferencje",
		preferenceLanguage: "Język",
		preferenceDesktopNotifications: "Powiadomienia na pulpicie",
		preferenceDesktopNotificationsHint: "Otrzymuj powiadomienie systemowe, gdy widget nie jest aktywny.",
		preferenceThemeMode: "Motyw",
		themeAuto: "Jak w systemie",
		themeLight: "Jasny",
		themeDark: "Ciemny",
		themeLocked: "Motyw ustawiony przez operatora.",
		pinnedHint: "Ustawione przez operatora — nie można edytować.",
		requiredHint: "Wymagane",
		invalidEmail: "Podaj prawidłowy adres e-mail.",
		invalidPhone: "Użyj formatu międzynarodowego, np. +14155552671.",
		noFields: "Nie ma jeszcze nic do edycji.",
		save: "Zapisz zmiany",
		saving: "Zapisywanie…",
		cancel: "Odrzuć",
		saved: "Zmiany zapisane.",
		loading: "Wczytywanie profilu…",
		loadError: "Nie udało się wczytać profilu. Spróbuj ponownie.",
		retry: "Ponów",
		errorFieldNotAllowed: "Tego pola nie można edytować w tym widgecie. Spróbuj odświeżyć.",
		errorFieldPinned: "To pole jest zablokowane przez Twoje konto.",
		errorFieldInvalid: "Niektóre wartości są nieprawidłowe. Sprawdź wyróżnione pola.",
		errorThemeLocked: "Motyw zablokowany przez operatora.",
		errorFeatureDisabled: "Edycja profilu została wyłączona przez operatora.",
		errorGeneric: "Nie udało się zapisać zmian. Spróbuj ponownie.",
		notificationsBlocked: "Powiadomienia są blokowane przez przeglądarkę. Zaktualizuj uprawnienia witryny, aby je włączyć.",
		notificationsRequest: "Zezwól na powiadomienia, gdy pojawi się monit, aby to włączyć.",
		systemFields: {
			avatar: "Zdjęcie",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "Zgoda na WhatsApp",
			webVerified: "Zweryfikowany gość",
			firstName: "Imię",
			lastName: "Nazwisko",
			username: "Nazwa użytkownika",
			language: "Język",
			email: "E-mail",
			phone: "Telefon",
			company: "Firma",
			location: "Lokalizacja",
			isValid: "Konto aktywne",
			chatStatus: "Status czatu",
			chatCategory: "Kategoria czatu",
			priority: "Priorytet",
			leadSource: "Źródło leada",
			leadStatus: "Status leada",
			interestLevel: "Poziom zainteresowania",
			productInterest: "Zainteresowanie produktem",
			budgetRange: "Budżet",
			purchaseTimeline: "Harmonogram zakupu",
			lastMessageSentAt: "Ostatnia wysłana",
			lastMessageReceivedAt: "Ostatnia odebrana",
			lastSeenAt: "Ostatnio widziany",
			firstMessageReceivedAt: "Pierwszy kontakt",
			isBlocked: "Zablokowany",
			registrationDate: "Zarejestrowany",
			aiAvailable: "Pomoc AI",
			totalMessagesSent: "Wysłane wiadomości",
			totalMessagesReceived: "Odebrane wiadomości",
			totalAiMessagesSent: "Wiadomości AI",
			totalBotMessagesSent: "Wiadomości bota",
			totalUserMessagesSent: "Wiadomości operatora",
			flowCompletionRate: "Wskaźnik ukończenia flow",
			lastFlowCompleted: "Ostatni ukończony flow",
			totalFlowsStarted: "Rozpoczęte flow",
			totalFlowsCompleted: "Ukończone flow"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problem",
				RESOLVED: "Rozwiązane",
				PENDING: "Oczekuje",
				IN_PROGRESS: "W trakcie",
				CLOSED: "Zamknięte"
			},
			chatCategory: {
				SALES: "Sprzedaż",
				SUPPORT: "Wsparcie",
				BILLING: "Płatności",
				FEEDBACK: "Opinia",
				GENERAL: "Ogólne",
				OTHER: "Inne"
			},
			priority: {
				LOW: "Niski",
				MEDIUM: "Średni",
				HIGH: "Wysoki",
				URGENT: "Pilny"
			},
			leadStatus: {
				NEW: "Nowy",
				CONTACTED: "Skontaktowano się",
				QUALIFIED: "Zakwalifikowany",
				NEGOTIATING: "Negocjacje",
				WON: "Wygrany",
				LOST: "Stracony"
			},
			interestLevel: {
				LOW: "Niski",
				MEDIUM: "Średni",
				HIGH: "Wysoki",
				VERY_HIGH: "Bardzo wysoki"
			}
		}
	}
}, Gv = {
	tabs: {
		home: "Início",
		messages: "Mensagens",
		help: "Ajuda",
		news: "Novidades",
		profile: "Perfil"
	},
	header: {
		close: "Fechar",
		back: "Voltar",
		conversationSubtitle: "A nossa equipa também pode ajudar",
		helpTitle: "Ajuda",
		newsTitle: "Novidades",
		expand: "Expandir widget",
		collapse: "Recolher widget"
	},
	launcher: {
		open: "Abrir chat",
		close: "Fechar chat",
		loading: "A ligar…"
	},
	home: {
		greetingHeadline: "Olá 👋",
		greetingSubheadline: "Como podemos ajudar?",
		askTitle: "Faça uma pergunta",
		askSubtitle: "O nosso bot e a nossa equipa podem ajudar",
		recentMessageLabel: "Mensagem recente",
		recentMessageTitle: "Mensagem recente",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 h",
		recentMessageSample: "Olá 👋 Obrigado por contactar-nos — voltamos já a si.",
		featuredArticleLoading: "Artigo em destaque",
		featuredArticleTap: "Toque para ler",
		featuredArticleEmpty: "Escolha um artigo",
		featuredArticleSetUp: "Configure este bloco no seu painel",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "8 de outubro de 2026",
		featuredArticleDemoSubline: "São Francisco · presencial + virtual",
		featuredArticleDemoCta: "Ver a agenda do lançamento",
		seeAgenda: "Ver a agenda do lançamento",
		browseHelp: "Explorar a ajuda",
		whatsNew: "Novidades",
		searchPlaceholder: "Procurar na ajuda",
		pinnedArticlesTitle: "Leia isto primeiro",
		popularArticlesTitle: "Artigos populares",
		pinnedArticleRow: "Artigo fixado {n}",
		newsPreviewTitle: "Últimas novidades",
		newsPreviewRow: "Novidade {n}",
		myConversationsTitle: "As suas conversas",
		myConversationsEmpty: "Ver as suas conversas",
		teamStatusOnline: "Estamos online",
		teamStatusReplyTime: "Normalmente respondemos em poucos minutos"
	},
	messages: {
		today: "Hoje",
		yesterday: "Ontem",
		unreadMessages: "Mensagens não lidas",
		emptyTitle: "Ainda não há mensagens",
		emptyBody: "Inicie uma conversa e a nossa equipa responder-lhe-á aqui.",
		sendCta: "Envie-nos uma mensagem",
		attach: "Anexar um ficheiro",
		commands: "Comandos rápidos",
		record: "Gravar uma mensagem de voz",
		stopRecording: "Parar gravação",
		recording: "A gravar…",
		uploading: "A carregar…",
		uploadFailed: "Falha ao carregar",
		voiceDenied: "Acesso ao microfone negado",
		voiceUnsupported: "Este navegador não suporta gravação de voz",
		fileTooLarge: "O ficheiro é demasiado grande (máx. 10 MB)",
		fileMimeNotAllowed: "Este tipo de ficheiro não é suportado",
		emoji: "Inserir emoji",
		cancelRecording: "Cancelar gravação",
		pauseRecording: "Pausar gravação",
		resumeRecording: "Retomar gravação",
		playPreview: "Reproduzir gravação",
		emojiPicker: "Seletor de emojis",
		emojiSearch: "Procurar…",
		playAudio: "Reproduzir",
		pauseAudio: "Pausar",
		openAudio: "Abrir áudio",
		removeAttachment: "Remover",
		aiAssistant: "Assistente de IA",
		operator: "Agente",
		openImage: "Abrir imagem",
		openPreview: "Abrir pré-visualização",
		play: "Reproduzir",
		pause: "Pausar",
		typing: "a escrever…",
		aiThinking: "a pensar…",
		aiSearching: "a procurar…",
		typingSomeone: "Alguém",
		signInToChat: "Inicie sessão para começar a conversa.",
		signInUnavailable: "O início de sessão não está disponível neste momento.",
		googleSignIn: "Iniciar sessão com Google",
		passkeySignIn: "Iniciar sessão com uma passkey",
		passkeyRegister: "Primeira vez? Configure uma passkey",
		passkeyError: "Não foi possível iniciar sessão. Tente novamente.",
		passkeyNoCredential: "Ainda não há nenhuma passkey neste dispositivo — toque em «Configure uma passkey» para criar uma.",
		googleSignInDemo: "Continuar com Google",
		connectingOperator: "Foi-lhe atribuído um operador, aguarde…",
		assignment: { eta: {
			minutes: "Um operador irá responder daqui a cerca de {minutes} min",
			soft: "Normalmente respondemos em poucos minutos",
			businessHours: "A equipa estará de volta às {time}"
		} },
		withOperator: "Está agora a conversar com {name}",
		operatorConnected: "Operador ligado",
		chatResolved: "Conversa resolvida",
		chatResolvedByYou: "Conversa resolvida por si",
		chatResolvedByOperator: "Conversa resolvida por {name}",
		resolveConversation: "Resolver conversa",
		sources: "Fontes",
		moreSources: "+{count} mais"
	},
	prechat: {
		title: "Antes de começarmos",
		subtitle: "Alguns dados rápidos para a nossa equipa ajudar mais depressa.",
		labelName: "Nome",
		labelEmail: "E-mail",
		labelPhone: "Telemóvel",
		labelCustom: "Detalhes",
		required: "Obrigatório",
		invalidEmail: "Introduza um e-mail válido",
		invalidPhone: "Introduza um número de telemóvel válido",
		submit: "Continuar",
		submitFailed: "Não foi possível submeter — tente novamente."
	},
	help: {
		searchPlaceholder: "Procurar na ajuda",
		emptyTitle: "Ainda não há artigos",
		emptyBody: "O seu operador ainda não publicou nada.",
		back: "Voltar",
		helpful: "Foi útil?",
		yes: "Sim",
		no: "Não",
		thanks: "Obrigado pelo seu feedback.",
		unresolvedCta: "Ainda precisa de ajuda? Escreva-nos",
		noResults: "Sem resultados",
		articleNotFound: "Artigo não encontrado",
		articleNotTranslated: "Este artigo ainda não está disponível no seu idioma.",
		writtenBy: "Escrito por {names}",
		relatedTitle: "Artigos relacionados",
		collectionsCount: "{count, plural, =0 {Sem coleções} one {# coleção} other {# coleções}}",
		articlesCount: "{count, plural, =0 {Sem artigos} one {Artigos: #} other {Artigos: #}}",
		authorsByline: "Autores {first}{remaining, plural, =0 {} one { e mais #} other { e mais #}}"
	},
	news: {
		emptyTitle: "Ainda não há atualizações",
		emptyBody: "Volte aqui para ver novidades do produto e anúncios.",
		helpful: "Este artigo foi útil?",
		yes: "Sim",
		no: "Não",
		thanks: "Obrigado pelo seu feedback.",
		searchPlaceholder: "Procurar nas novidades",
		noResults: "Sem publicações correspondentes",
		editedAt: "editado {when}",
		articleNotFound: "Artigo não encontrado.",
		articleNotTranslated: "Esta publicação ainda não está disponível no seu idioma.",
		readOriginal: "Ler o original",
		relatedTitle: "Relacionados",
		writtenBy: "Escrito por {names}",
		unread: "Novidades não lidas"
	},
	reactions: {
		ariaLabel: "Reações",
		tapAria: "Reagir com {emoji}"
	},
	languageSelector: {
		title: "Ler noutro idioma",
		ariaLabel: "Idiomas do artigo"
	},
	branding: {
		poweredBy: "Com tecnologia de",
		wexio: "Wexio"
	},
	sound: {
		mute: "Silenciar sons de notificação",
		unmute: "Ativar sons de notificação"
	},
	article: {
		tableOfContents: "Índice",
		tabFallback: "Separador {n}"
	},
	peek: {
		newMessage: "Nova mensagem",
		dismiss: "Dispensar",
		aiAssistant: "Assistente de IA",
		operator: "Agente"
	},
	lightbox: {
		mediaPreview: "Pré-visualização do conteúdo",
		close: "Fechar pré-visualização",
		previous: "Anterior",
		next: "Seguinte"
	},
	authError: {
		turnstileTitle: "Não foi possível verificar o seu navegador",
		turnstileBody: "Não conseguimos concluir a verificação de segurança. Por vezes é um problema de rede ou de bloqueador de anúncios — tente novamente ou recarregue a página.",
		genericTitle: "Não foi possível ligar",
		genericBody: "Algo correu mal ao iniciar a sua sessão. Tente novamente daqui a um momento.",
		retry: "Tentar novamente",
		dismiss: "Dispensar"
	},
	profile: {
		title: "O seu perfil",
		subtitle: "Atualize os seus dados e o comportamento do widget.",
		uploadAvatar: "Alterar fotografia",
		removeAvatar: "Remover fotografia",
		avatarUploading: "A carregar…",
		preferencesHeading: "Preferências",
		preferenceLanguage: "Idioma",
		preferenceDesktopNotifications: "Notificações de ambiente de trabalho",
		preferenceDesktopNotificationsHint: "Receba uma notificação do sistema quando o widget não estiver em primeiro plano.",
		preferenceThemeMode: "Tema",
		themeAuto: "Como o sistema",
		themeLight: "Claro",
		themeDark: "Escuro",
		themeLocked: "O tema é definido pelo operador.",
		pinnedHint: "Definido pelo operador — não editável.",
		requiredHint: "Obrigatório",
		invalidEmail: "Introduza um endereço de e-mail válido.",
		invalidPhone: "Use o formato internacional, p. ex. +351912345678.",
		noFields: "Ainda não há nada para editar aqui.",
		save: "Guardar alterações",
		saving: "A guardar…",
		cancel: "Descartar",
		saved: "Alterações guardadas.",
		loading: "A carregar o perfil…",
		loadError: "Não foi possível carregar o seu perfil. Tente novamente.",
		retry: "Repetir",
		errorFieldNotAllowed: "Este campo não é editável neste widget. Tente atualizar.",
		errorFieldPinned: "Este campo está bloqueado pela sua conta.",
		errorFieldInvalid: "Alguns valores não são válidos. Verifique os campos destacados.",
		errorThemeLocked: "O tema está bloqueado pelo operador.",
		errorFeatureDisabled: "O operador desativou a edição do perfil.",
		errorGeneric: "Não foi possível guardar as alterações. Tente novamente.",
		notificationsBlocked: "As notificações estão bloqueadas pelo navegador. Atualize as permissões do site para ativar.",
		notificationsRequest: "Permita as notificações quando for solicitado para ativar isto.",
		systemFields: {
			avatar: "Fotografia",
			wexioId: "ID Wexio",
			telegramId: "ID Telegram",
			whatsappId: "ID WhatsApp",
			viberId: "ID Viber",
			instagramId: "ID Instagram",
			optInWhatsapp: "Consentimento WhatsApp",
			webVerified: "Visitante verificado",
			firstName: "Nome próprio",
			lastName: "Apelido",
			username: "Nome de utilizador",
			language: "Idioma",
			email: "E-mail",
			phone: "Telemóvel",
			company: "Empresa",
			location: "Localização",
			isValid: "Conta válida",
			chatStatus: "Estado do chat",
			chatCategory: "Categoria do chat",
			priority: "Prioridade",
			leadSource: "Origem do lead",
			leadStatus: "Estado do lead",
			interestLevel: "Nível de interesse",
			productInterest: "Interesse no produto",
			budgetRange: "Orçamento",
			purchaseTimeline: "Prazo de compra",
			lastMessageSentAt: "Última mensagem enviada",
			lastMessageReceivedAt: "Última mensagem recebida",
			lastSeenAt: "Visto pela última vez",
			firstMessageReceivedAt: "Primeiro contacto",
			isBlocked: "Bloqueado",
			registrationDate: "Registado",
			aiAvailable: "Assistência de IA",
			totalMessagesSent: "Mensagens enviadas",
			totalMessagesReceived: "Mensagens recebidas",
			totalAiMessagesSent: "Mensagens enviadas pela IA",
			totalBotMessagesSent: "Mensagens enviadas pelo bot",
			totalUserMessagesSent: "Mensagens enviadas pelo agente",
			flowCompletionRate: "Taxa de conclusão de flows",
			lastFlowCompleted: "Último flow concluído",
			totalFlowsStarted: "Flows iniciados",
			totalFlowsCompleted: "Flows concluídos"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problema",
				RESOLVED: "Resolvido",
				PENDING: "Pendente",
				IN_PROGRESS: "Em curso",
				CLOSED: "Fechado"
			},
			chatCategory: {
				SALES: "Vendas",
				SUPPORT: "Suporte",
				BILLING: "Faturação",
				FEEDBACK: "Comentários",
				GENERAL: "Geral",
				OTHER: "Outro"
			},
			priority: {
				LOW: "Baixa",
				MEDIUM: "Média",
				HIGH: "Alta",
				URGENT: "Urgente"
			},
			leadStatus: {
				NEW: "Novo",
				CONTACTED: "Contactado",
				QUALIFIED: "Qualificado",
				NEGOTIATING: "Em negociação",
				WON: "Ganho",
				LOST: "Perdido"
			},
			interestLevel: {
				LOW: "Baixo",
				MEDIUM: "Médio",
				HIGH: "Alto",
				VERY_HIGH: "Muito alto"
			}
		}
	}
}, Kv = {
	tabs: {
		home: "Início",
		messages: "Mensagens",
		help: "Ajuda",
		news: "Novidades",
		profile: "Perfil"
	},
	header: {
		close: "Fechar",
		back: "Voltar",
		conversationSubtitle: "Nossa equipe também pode ajudar",
		helpTitle: "Ajuda",
		newsTitle: "Novidades",
		expand: "Expandir widget",
		collapse: "Recolher widget"
	},
	launcher: {
		open: "Abrir chat",
		close: "Fechar chat",
		loading: "Conectando…"
	},
	home: {
		greetingHeadline: "Oi 👋",
		greetingSubheadline: "Como podemos ajudar?",
		askTitle: "Faça uma pergunta",
		askSubtitle: "Nosso bot e nossa equipe podem ajudar",
		recentMessageLabel: "Mensagem recente",
		recentMessageTitle: "Mensagem recente",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 h",
		recentMessageSample: "Oi 👋 Obrigado por entrar em contato — já voltamos para você.",
		featuredArticleLoading: "Artigo em destaque",
		featuredArticleTap: "Toque para ler",
		featuredArticleEmpty: "Escolha um artigo",
		featuredArticleSetUp: "Configure este bloco no seu painel",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "8 de outubro de 2026",
		featuredArticleDemoSubline: "São Francisco · presencial + virtual",
		featuredArticleDemoCta: "Ver a agenda do lançamento",
		seeAgenda: "Ver a agenda do lançamento",
		browseHelp: "Explorar a ajuda",
		whatsNew: "Novidades",
		searchPlaceholder: "Buscar na ajuda",
		pinnedArticlesTitle: "Leia isto primeiro",
		popularArticlesTitle: "Artigos populares",
		pinnedArticleRow: "Artigo fixado {n}",
		newsPreviewTitle: "Últimas novidades",
		newsPreviewRow: "Atualização {n}",
		myConversationsTitle: "Suas conversas",
		myConversationsEmpty: "Ver suas conversas",
		teamStatusOnline: "Estamos online",
		teamStatusReplyTime: "Normalmente respondemos em poucos minutos"
	},
	messages: {
		today: "Hoje",
		yesterday: "Ontem",
		unreadMessages: "Mensagens não lidas",
		emptyTitle: "Ainda não há mensagens",
		emptyBody: "Inicie uma conversa e nossa equipe responde aqui.",
		sendCta: "Envie uma mensagem",
		attach: "Anexar um arquivo",
		commands: "Comandos rápidos",
		record: "Gravar mensagem de voz",
		stopRecording: "Parar gravação",
		recording: "Gravando…",
		uploading: "Enviando…",
		uploadFailed: "Falha no envio",
		voiceDenied: "Acesso ao microfone negado",
		voiceUnsupported: "Este navegador não oferece gravação de voz",
		fileTooLarge: "O arquivo é muito grande (máx. 10 MB)",
		fileMimeNotAllowed: "Este tipo de arquivo não é suportado",
		emoji: "Inserir emoji",
		cancelRecording: "Cancelar gravação",
		pauseRecording: "Pausar gravação",
		resumeRecording: "Retomar gravação",
		playPreview: "Reproduzir gravação",
		emojiPicker: "Seletor de emoji",
		emojiSearch: "Buscar…",
		playAudio: "Reproduzir",
		pauseAudio: "Pausar",
		openAudio: "Abrir áudio",
		removeAttachment: "Remover",
		aiAssistant: "Assistente de IA",
		operator: "Atendente",
		openImage: "Abrir imagem",
		openPreview: "Abrir prévia",
		play: "Reproduzir",
		pause: "Pausar",
		typing: "digitando…",
		aiThinking: "pensando…",
		aiSearching: "pesquisando…",
		typingSomeone: "Alguém",
		signInToChat: "Entre na sua conta para iniciar a conversa.",
		signInUnavailable: "O login não está disponível neste momento.",
		googleSignIn: "Entrar com o Google",
		passkeySignIn: "Entrar com uma passkey",
		passkeyRegister: "Primeira vez? Configurar uma passkey",
		passkeyError: "Não foi possível entrar. Tente novamente.",
		passkeyNoCredential: "Ainda não há nenhuma passkey neste dispositivo — toque em «Configurar uma passkey» para criar uma.",
		googleSignInDemo: "Continuar com o Google",
		connectingOperator: "Um atendente foi atribuído, aguarde…",
		assignment: { eta: {
			minutes: "Um atendente responderá em cerca de {minutes} min",
			soft: "Normalmente respondemos em poucos minutos",
			businessHours: "A equipe estará de volta às {time}"
		} },
		withOperator: "Agora você está conversando com {name}",
		operatorConnected: "Atendente conectado",
		chatResolved: "Conversa resolvida",
		chatResolvedByYou: "Conversa resolvida por você",
		chatResolvedByOperator: "Conversa resolvida por {name}",
		resolveConversation: "Resolver conversa",
		sources: "Fontes",
		moreSources: "+{count} mais"
	},
	prechat: {
		title: "Antes de começarmos",
		subtitle: "Alguns dados rápidos para nossa equipe ajudar mais rápido.",
		labelName: "Nome",
		labelEmail: "E-mail",
		labelPhone: "Celular",
		labelCustom: "Detalhes",
		required: "Obrigatório",
		invalidEmail: "Informe um e-mail válido",
		invalidPhone: "Informe um número de celular válido",
		submit: "Continuar",
		submitFailed: "Não foi possível enviar — tente novamente."
	},
	help: {
		searchPlaceholder: "Buscar na ajuda",
		emptyTitle: "Ainda não há artigos",
		emptyBody: "Seu operador ainda não publicou nada.",
		back: "Voltar",
		helpful: "Isto foi útil?",
		yes: "Sim",
		no: "Não",
		thanks: "Obrigado pelo retorno.",
		unresolvedCta: "Ainda precisa de ajuda? Mande uma mensagem",
		noResults: "Sem resultados",
		articleNotFound: "Artigo não encontrado",
		articleNotTranslated: "Este artigo ainda não está disponível no seu idioma.",
		writtenBy: "Escrito por {names}",
		relatedTitle: "Artigos relacionados",
		collectionsCount: "{count, plural, =0 {Sem coleções} one {# coleção} other {# coleções}}",
		articlesCount: "{count, plural, =0 {Sem artigos} one {Artigos: #} other {Artigos: #}}",
		authorsByline: "Autores {first}{remaining, plural, =0 {} one { e mais #} other { e mais #}}"
	},
	news: {
		emptyTitle: "Ainda não há novidades",
		emptyBody: "Volte aqui para ver novidades do produto e anúncios.",
		helpful: "Este artigo foi útil?",
		yes: "Sim",
		no: "Não",
		thanks: "Obrigado pelo retorno.",
		searchPlaceholder: "Buscar nas novidades",
		noResults: "Nenhuma publicação correspondente",
		editedAt: "editado {when}",
		articleNotFound: "Artigo não encontrado.",
		articleNotTranslated: "Esta publicação ainda não está disponível no seu idioma.",
		readOriginal: "Ler o original",
		relatedTitle: "Relacionados",
		writtenBy: "Escrito por {names}",
		unread: "Novidades não lidas"
	},
	reactions: {
		ariaLabel: "Reações",
		tapAria: "Reagir com {emoji}"
	},
	languageSelector: {
		title: "Ler em outro idioma",
		ariaLabel: "Idiomas do artigo"
	},
	branding: {
		poweredBy: "Desenvolvido por",
		wexio: "Wexio"
	},
	sound: {
		mute: "Silenciar sons de notificação",
		unmute: "Ativar sons de notificação"
	},
	article: {
		tableOfContents: "Sumário",
		tabFallback: "Aba {n}"
	},
	peek: {
		newMessage: "Nova mensagem",
		dismiss: "Dispensar",
		aiAssistant: "Assistente de IA",
		operator: "Atendente"
	},
	lightbox: {
		mediaPreview: "Pré-visualização da mídia",
		close: "Fechar prévia",
		previous: "Anterior",
		next: "Próximo"
	},
	authError: {
		turnstileTitle: "Não foi possível verificar seu navegador",
		turnstileBody: "Não conseguimos concluir a verificação de segurança. Às vezes é um problema de rede ou de bloqueador de anúncios — tente de novo ou recarregue a página.",
		genericTitle: "Não foi possível conectar",
		genericBody: "Algo deu errado ao fazer login. Tente novamente em um instante.",
		retry: "Tentar de novo",
		dismiss: "Dispensar"
	},
	profile: {
		title: "Seu perfil",
		subtitle: "Atualize seus dados e o comportamento do widget.",
		uploadAvatar: "Alterar foto",
		removeAvatar: "Remover foto",
		avatarUploading: "Enviando…",
		preferencesHeading: "Preferências",
		preferenceLanguage: "Idioma",
		preferenceDesktopNotifications: "Notificações no computador",
		preferenceDesktopNotificationsHint: "Receba uma notificação do sistema quando o widget não estiver em foco.",
		preferenceThemeMode: "Tema",
		themeAuto: "Como o sistema",
		themeLight: "Claro",
		themeDark: "Escuro",
		themeLocked: "O tema é definido pelo operador.",
		pinnedHint: "Definido pelo operador — não editável.",
		requiredHint: "Obrigatório",
		invalidEmail: "Informe um e-mail válido.",
		invalidPhone: "Use o formato internacional, p. ex. +5511987654321.",
		noFields: "Ainda não há nada para editar aqui.",
		save: "Salvar alterações",
		saving: "Salvando…",
		cancel: "Descartar",
		saved: "Alterações salvas.",
		loading: "Carregando perfil…",
		loadError: "Não foi possível carregar seu perfil. Tente novamente.",
		retry: "Tentar de novo",
		errorFieldNotAllowed: "Este campo não pode ser editado neste widget. Tente atualizar a página.",
		errorFieldPinned: "Este campo está bloqueado pela sua conta.",
		errorFieldInvalid: "Alguns valores não são válidos. Confira os campos destacados.",
		errorThemeLocked: "O tema está bloqueado pelo operador.",
		errorFeatureDisabled: "O operador desativou a edição do perfil.",
		errorGeneric: "Não foi possível salvar as alterações. Tente novamente.",
		notificationsBlocked: "O navegador bloqueou as notificações. Atualize as permissões do site para ativar.",
		notificationsRequest: "Permita as notificações quando solicitado para ativar isso.",
		systemFields: {
			avatar: "Foto",
			wexioId: "ID Wexio",
			telegramId: "ID Telegram",
			whatsappId: "ID WhatsApp",
			viberId: "ID Viber",
			instagramId: "ID Instagram",
			optInWhatsapp: "Consentimento do WhatsApp",
			webVerified: "Visitante verificado",
			firstName: "Nome",
			lastName: "Sobrenome",
			username: "Nome de usuário",
			language: "Idioma",
			email: "E-mail",
			phone: "Celular",
			company: "Empresa",
			location: "Localização",
			isValid: "Conta válida",
			chatStatus: "Status do chat",
			chatCategory: "Categoria do chat",
			priority: "Prioridade",
			leadSource: "Origem do lead",
			leadStatus: "Status do lead",
			interestLevel: "Nível de interesse",
			productInterest: "Interesse no produto",
			budgetRange: "Orçamento",
			purchaseTimeline: "Prazo de compra",
			lastMessageSentAt: "Última mensagem enviada",
			lastMessageReceivedAt: "Última mensagem recebida",
			lastSeenAt: "Visto pela última vez",
			firstMessageReceivedAt: "Primeiro contato",
			isBlocked: "Bloqueado",
			registrationDate: "Cadastrado em",
			aiAvailable: "Assistência de IA",
			totalMessagesSent: "Mensagens enviadas",
			totalMessagesReceived: "Mensagens recebidas",
			totalAiMessagesSent: "Mensagens enviadas pela IA",
			totalBotMessagesSent: "Mensagens enviadas pelo bot",
			totalUserMessagesSent: "Mensagens enviadas pelo atendente",
			flowCompletionRate: "Taxa de conclusão de flows",
			lastFlowCompleted: "Último flow concluído",
			totalFlowsStarted: "Flows iniciados",
			totalFlowsCompleted: "Flows concluídos"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problema",
				RESOLVED: "Resolvido",
				PENDING: "Pendente",
				IN_PROGRESS: "Em andamento",
				CLOSED: "Fechado"
			},
			chatCategory: {
				SALES: "Vendas",
				SUPPORT: "Suporte",
				BILLING: "Cobrança",
				FEEDBACK: "Feedback",
				GENERAL: "Geral",
				OTHER: "Outro"
			},
			priority: {
				LOW: "Baixa",
				MEDIUM: "Média",
				HIGH: "Alta",
				URGENT: "Urgente"
			},
			leadStatus: {
				NEW: "Novo",
				CONTACTED: "Contatado",
				QUALIFIED: "Qualificado",
				NEGOTIATING: "Em negociação",
				WON: "Ganho",
				LOST: "Perdido"
			},
			interestLevel: {
				LOW: "Baixo",
				MEDIUM: "Médio",
				HIGH: "Alto",
				VERY_HIGH: "Muito alto"
			}
		}
	}
}, qv = {
	tabs: {
		home: "Acasă",
		messages: "Mesaje",
		help: "Ajutor",
		news: "Noutăți",
		profile: "Profil"
	},
	header: {
		close: "Închide",
		back: "Înapoi",
		conversationSubtitle: "Și echipa noastră te poate ajuta",
		helpTitle: "Ajutor",
		newsTitle: "Noutăți",
		expand: "Extinde widgetul",
		collapse: "Restrânge widgetul"
	},
	launcher: {
		open: "Deschide chatul",
		close: "Închide chatul",
		loading: "Se conectează…"
	},
	home: {
		greetingHeadline: "Salut 👋",
		greetingSubheadline: "Cu ce te putem ajuta?",
		askTitle: "Pune o întrebare",
		askSubtitle: "Botul și echipa noastră te pot ajuta",
		recentMessageLabel: "Mesaj recent",
		recentMessageTitle: "Mesaj recent",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 h",
		recentMessageSample: "Salut 👋 Mulțumim că ne-ai contactat — revenim cu un răspuns în scurt timp.",
		featuredArticleLoading: "Articol recomandat",
		featuredArticleTap: "Atinge pentru a citi",
		featuredArticleEmpty: "Alege un articol",
		featuredArticleSetUp: "Configurează acest bloc în panoul tău",
		featuredArticleDemoEyebrow: "Pioneer · Reține data",
		featuredArticleDemoHeadline: "8 octombrie 2026",
		featuredArticleDemoSubline: "San Francisco · în persoană + online",
		featuredArticleDemoCta: "Vezi programul lansării",
		seeAgenda: "Vezi programul lansării",
		browseHelp: "Răsfoiește ajutorul",
		whatsNew: "Ce este nou",
		searchPlaceholder: "Caută în ajutor",
		pinnedArticlesTitle: "Citește mai întâi astea",
		popularArticlesTitle: "Articole populare",
		pinnedArticleRow: "Articol fixat {n}",
		newsPreviewTitle: "Ultimele noutăți",
		newsPreviewRow: "Noutate {n}",
		myConversationsTitle: "Conversațiile tale",
		myConversationsEmpty: "Vezi-ți conversațiile",
		teamStatusOnline: "Suntem online",
		teamStatusReplyTime: "De obicei răspundem în câteva minute"
	},
	messages: {
		today: "Astăzi",
		yesterday: "Ieri",
		unreadMessages: "Mesaje necitite",
		emptyTitle: "Încă nu există mesaje",
		emptyBody: "Începe o conversație, iar echipa noastră îți va răspunde aici.",
		sendCta: "Trimite-ne un mesaj",
		attach: "Atașează un fișier",
		commands: "Comenzi rapide",
		record: "Înregistrează un mesaj vocal",
		stopRecording: "Oprește înregistrarea",
		recording: "Se înregistrează…",
		uploading: "Se încarcă…",
		uploadFailed: "Încărcarea a eșuat",
		voiceDenied: "Accesul la microfon a fost refuzat",
		voiceUnsupported: "Înregistrarea vocală nu este acceptată în acest browser",
		fileTooLarge: "Fișierul este prea mare (maximum 10 MB)",
		fileMimeNotAllowed: "Acest tip de fișier nu este acceptat",
		emoji: "Inserează emoji",
		cancelRecording: "Anulează înregistrarea",
		pauseRecording: "Întrerupe înregistrarea",
		resumeRecording: "Reia înregistrarea",
		playPreview: "Redă înregistrarea",
		emojiPicker: "Selector de emoji",
		emojiSearch: "Caută…",
		playAudio: "Redă",
		pauseAudio: "Pauză",
		openAudio: "Deschide audio",
		removeAttachment: "Elimină",
		aiAssistant: "Asistent AI",
		operator: "Operator",
		openImage: "Deschide imaginea",
		openPreview: "Deschide previzualizarea",
		play: "Redă",
		pause: "Pauză",
		typing: "scrie…",
		aiThinking: "gândește…",
		aiSearching: "caută…",
		typingSomeone: "Cineva",
		signInToChat: "Te rugăm să te conectezi pentru a începe conversația.",
		signInUnavailable: "Autentificarea nu este disponibilă în acest moment.",
		googleSignIn: "Conectează-te cu Google",
		passkeySignIn: "Conectează-te cu un passkey",
		passkeyRegister: "Prima dată? Configurează un passkey",
		passkeyError: "Nu am putut autentifica. Încearcă din nou.",
		passkeyNoCredential: "Încă nu există un passkey pe acest dispozitiv — atinge „Configurează un passkey” pentru a crea unul.",
		googleSignInDemo: "Continuă cu Google",
		connectingOperator: "Un operator ți-a fost alocat, te rugăm să aștepți…",
		assignment: { eta: {
			minutes: "Un operator va răspunde în aproximativ {minutes} min",
			soft: "De obicei răspundem în câteva minute",
			businessHours: "Echipa revine la {time}"
		} },
		withOperator: "Acum discuți cu {name}",
		operatorConnected: "Operator conectat",
		chatResolved: "Conversație rezolvată",
		chatResolvedByYou: "Conversație rezolvată de tine",
		chatResolvedByOperator: "Conversație rezolvată de {name}",
		resolveConversation: "Rezolvă conversația",
		sources: "Surse",
		moreSources: "+{count} mai multe"
	},
	prechat: {
		title: "Înainte de a începe",
		subtitle: "Câteva detalii rapide ca echipa noastră să te poată ajuta mai repede.",
		labelName: "Nume",
		labelEmail: "E-mail",
		labelPhone: "Telefon",
		labelCustom: "Detalii",
		required: "Obligatoriu",
		invalidEmail: "Te rugăm să introduci un e-mail valid",
		invalidPhone: "Te rugăm să introduci un număr de telefon valid",
		submit: "Continuă",
		submitFailed: "Nu s-a putut trimite — încearcă din nou."
	},
	help: {
		searchPlaceholder: "Caută în ajutor",
		emptyTitle: "Încă nu există articole",
		emptyBody: "Operatorul tău nu a publicat încă nimic.",
		back: "Înapoi",
		helpful: "A fost util?",
		yes: "Da",
		no: "Nu",
		thanks: "Mulțumim pentru feedback.",
		unresolvedCta: "Mai ai nevoie de ajutor? Scrie-ne",
		noResults: "Niciun rezultat",
		articleNotFound: "Articolul nu a fost găsit",
		articleNotTranslated: "Acest articol nu este încă disponibil în limba ta.",
		writtenBy: "Scris de {names}",
		relatedTitle: "Articole similare",
		collectionsCount: "{count, plural, =0 {Nicio colecție} one {# colecție} few {# colecții} other {# de colecții}}",
		articlesCount: "{count, plural, =0 {Niciun articol} one {Articole: #} few {Articole: #} other {Articole: #}}",
		authorsByline: "Autori {first}{remaining, plural, =0 {} one { și încă #} few { și încă #} other { și încă #}}"
	},
	news: {
		emptyTitle: "Încă nu există actualizări",
		emptyBody: "Revino aici pentru noutăți și anunțuri despre produs.",
		helpful: "Acest articol a fost util?",
		yes: "Da",
		no: "Nu",
		thanks: "Mulțumim pentru feedback.",
		searchPlaceholder: "Caută în noutăți",
		noResults: "Nicio postare găsită",
		editedAt: "editat {when}",
		articleNotFound: "Articolul nu a fost găsit.",
		articleNotTranslated: "Această postare nu este încă disponibilă în limba ta.",
		readOriginal: "Citește originalul",
		relatedTitle: "Similar",
		writtenBy: "Scris de {names}",
		unread: "Știri necitite"
	},
	reactions: {
		ariaLabel: "Reacții",
		tapAria: "Reacționează cu {emoji}"
	},
	languageSelector: {
		title: "Citește în altă limbă",
		ariaLabel: "Limbi articol"
	},
	branding: {
		poweredBy: "Susținut de",
		wexio: "Wexio"
	},
	sound: {
		mute: "Dezactivează sunetele notificărilor",
		unmute: "Activează sunetele notificărilor"
	},
	article: {
		tableOfContents: "Cuprins",
		tabFallback: "Filă {n}"
	},
	peek: {
		newMessage: "Mesaj nou",
		dismiss: "Închide",
		aiAssistant: "Asistent AI",
		operator: "Operator"
	},
	lightbox: {
		mediaPreview: "Previzualizare media",
		close: "Închide previzualizarea",
		previous: "Anterior",
		next: "Următor"
	},
	authError: {
		turnstileTitle: "Nu am putut verifica browserul",
		turnstileBody: "Nu am putut finaliza verificarea de securitate. Uneori este o problemă de rețea sau de blocator de reclame — încearcă din nou sau reîncarcă pagina.",
		genericTitle: "Nu ne-am putut conecta",
		genericBody: "Ceva nu a funcționat la autentificare. Încearcă din nou într-un moment.",
		retry: "Încearcă din nou",
		dismiss: "Închide"
	},
	profile: {
		title: "Profilul tău",
		subtitle: "Actualizează-ți datele și modul în care funcționează widgetul.",
		uploadAvatar: "Schimbă fotografia",
		removeAvatar: "Elimină fotografia",
		avatarUploading: "Se încarcă…",
		preferencesHeading: "Preferințe",
		preferenceLanguage: "Limbă",
		preferenceDesktopNotifications: "Notificări desktop",
		preferenceDesktopNotificationsHint: "Primește o notificare de sistem când widgetul nu este în prim-plan.",
		preferenceThemeMode: "Temă",
		themeAuto: "Ca în sistem",
		themeLight: "Luminoasă",
		themeDark: "Întunecată",
		themeLocked: "Tema este setată de operator.",
		pinnedHint: "Setat de operator — nu poate fi editat.",
		requiredHint: "Obligatoriu",
		invalidEmail: "Te rugăm să introduci o adresă de e-mail validă.",
		invalidPhone: "Folosește formatul internațional, ex. +14155552671.",
		noFields: "Aici nu este încă nimic de editat.",
		save: "Salvează modificările",
		saving: "Se salvează…",
		cancel: "Renunță",
		saved: "Modificările au fost salvate.",
		loading: "Se încarcă profilul…",
		loadError: "Profilul nu a putut fi încărcat. Încearcă din nou.",
		retry: "Reîncearcă",
		errorFieldNotAllowed: "Acest câmp nu poate fi editat în acest widget. Încearcă să reîncarci.",
		errorFieldPinned: "Acest câmp este blocat de contul tău.",
		errorFieldInvalid: "Unele valori nu sunt valide. Verifică câmpurile evidențiate.",
		errorThemeLocked: "Tema este blocată de operator.",
		errorFeatureDisabled: "Editarea profilului a fost dezactivată de operator.",
		errorGeneric: "Modificările nu au putut fi salvate. Încearcă din nou.",
		notificationsBlocked: "Notificările sunt blocate de browser. Actualizează permisiunile site-ului pentru a le activa.",
		notificationsRequest: "Permite notificările când ești întrebat pentru a activa această funcție.",
		systemFields: {
			avatar: "Fotografie",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "Acord WhatsApp",
			webVerified: "Vizitator verificat",
			firstName: "Prenume",
			lastName: "Nume de familie",
			username: "Nume de utilizator",
			language: "Limbă",
			email: "E-mail",
			phone: "Telefon",
			company: "Companie",
			location: "Locație",
			isValid: "Cont valid",
			chatStatus: "Stare chat",
			chatCategory: "Categorie chat",
			priority: "Prioritate",
			leadSource: "Sursă lead",
			leadStatus: "Stare lead",
			interestLevel: "Nivel de interes",
			productInterest: "Interes pentru produs",
			budgetRange: "Buget",
			purchaseTimeline: "Termen de achiziție",
			lastMessageSentAt: "Ultimul mesaj trimis",
			lastMessageReceivedAt: "Ultimul mesaj primit",
			lastSeenAt: "Văzut ultima dată",
			firstMessageReceivedAt: "Primul contact",
			isBlocked: "Blocat",
			registrationDate: "Înregistrat",
			aiAvailable: "Asistență AI",
			totalMessagesSent: "Mesaje trimise",
			totalMessagesReceived: "Mesaje primite",
			totalAiMessagesSent: "Mesaje AI trimise",
			totalBotMessagesSent: "Mesaje bot trimise",
			totalUserMessagesSent: "Mesaje operator trimise",
			flowCompletionRate: "Rată de finalizare flow",
			lastFlowCompleted: "Ultimul flow finalizat",
			totalFlowsStarted: "Flow-uri începute",
			totalFlowsCompleted: "Flow-uri finalizate"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problemă",
				RESOLVED: "Rezolvat",
				PENDING: "În așteptare",
				IN_PROGRESS: "În curs",
				CLOSED: "Închis"
			},
			chatCategory: {
				SALES: "Vânzări",
				SUPPORT: "Suport",
				BILLING: "Facturare",
				FEEDBACK: "Feedback",
				GENERAL: "General",
				OTHER: "Altul"
			},
			priority: {
				LOW: "Scăzută",
				MEDIUM: "Medie",
				HIGH: "Ridicată",
				URGENT: "Urgentă"
			},
			leadStatus: {
				NEW: "Nou",
				CONTACTED: "Contactat",
				QUALIFIED: "Calificat",
				NEGOTIATING: "În negociere",
				WON: "Câștigat",
				LOST: "Pierdut"
			},
			interestLevel: {
				LOW: "Scăzut",
				MEDIUM: "Mediu",
				HIGH: "Ridicat",
				VERY_HIGH: "Foarte ridicat"
			}
		}
	}
}, Jv = {
	tabs: {
		home: "Domov",
		messages: "Správy",
		help: "Pomocník",
		news: "Novinky",
		profile: "Profil"
	},
	header: {
		close: "Zavrieť",
		back: "Späť",
		conversationSubtitle: "Pomôže vám aj náš tím",
		helpTitle: "Pomocník",
		newsTitle: "Novinky",
		expand: "Rozbaliť widget",
		collapse: "Zbaliť widget"
	},
	launcher: {
		open: "Otvoriť chat",
		close: "Zavrieť chat",
		loading: "Pripájanie…"
	},
	home: {
		greetingHeadline: "Ahoj 👋",
		greetingSubheadline: "Ako vám môžeme pomôcť?",
		askTitle: "Položiť otázku",
		askSubtitle: "Pomôže náš bot a tím",
		recentMessageLabel: "Posledná správa",
		recentMessageTitle: "Posledná správa",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 h",
		recentMessageSample: "Ahoj 👋 Ďakujeme za správu - čoskoro sa vám ozveme.",
		featuredArticleLoading: "Odporúčaný článok",
		featuredArticleTap: "Klepnutím čítate",
		featuredArticleEmpty: "Vyberte článok",
		featuredArticleSetUp: "Nakonfigurujte tento blok v paneli",
		featuredArticleDemoEyebrow: "Pioneer · Rezervujte si dátum",
		featuredArticleDemoHeadline: "8. októbra 2026",
		featuredArticleDemoSubline: "San Francisco · Osobne + online",
		featuredArticleDemoCta: "Zobraziť program",
		seeAgenda: "Zobraziť program",
		browseHelp: "Prehliadať pomocník",
		whatsNew: "Čo je nové",
		searchPlaceholder: "Hľadať v pomocníkovi",
		pinnedArticlesTitle: "Začnite týmto",
		popularArticlesTitle: "Populárne články",
		pinnedArticleRow: "Pripnutý článok {n}",
		newsPreviewTitle: "Najnovšie správy",
		newsPreviewRow: "Aktualizácia {n}",
		myConversationsTitle: "Vaše konverzácie",
		myConversationsEmpty: "Zobraziť vaše konverzácie",
		teamStatusOnline: "Sme online",
		teamStatusReplyTime: "Zvyčajne odpovedáme v priebehu pár minút"
	},
	messages: {
		today: "Dnes",
		yesterday: "Včera",
		unreadMessages: "Neprečítané správy",
		emptyTitle: "Zatiaľ žiadne správy",
		emptyBody: "Začnite konverzáciu a náš tím vám odpovie tu.",
		sendCta: "Pošlite nám správu",
		attach: "Pripojiť súbor",
		commands: "Rýchle príkazy",
		record: "Nahrať hlasovú správu",
		stopRecording: "Zastaviť nahrávanie",
		recording: "Nahráva sa…",
		uploading: "Nahráva sa…",
		uploadFailed: "Nahrávanie zlyhalo",
		voiceDenied: "Prístup k mikrofónu bol zamietnutý",
		voiceUnsupported: "Tento prehliadač nepodporuje nahrávanie hlasu",
		fileTooLarge: "Súbor je príliš veľký (max. 10 MB)",
		fileMimeNotAllowed: "Tento typ súboru nie je podporovaný",
		emoji: "Vložiť emoji",
		cancelRecording: "Zrušiť nahrávanie",
		pauseRecording: "Pozastaviť nahrávanie",
		resumeRecording: "Pokračovať v nahrávaní",
		playPreview: "Prehrať nahrávku",
		emojiPicker: "Výber emoji",
		emojiSearch: "Hľadať…",
		playAudio: "Prehrať",
		pauseAudio: "Pozastaviť",
		openAudio: "Otvoriť zvuk",
		removeAttachment: "Odstrániť",
		aiAssistant: "AI asistent",
		operator: "Operátor",
		openImage: "Otvoriť obrázok",
		openPreview: "Otvoriť náhľad",
		play: "Prehrať",
		pause: "Pozastaviť",
		typing: "píše…",
		aiThinking: "premýšľa…",
		aiSearching: "prehľadáva…",
		typingSomeone: "Niekto",
		signInToChat: "Prihláste sa, aby ste mohli začať konverzáciu.",
		signInUnavailable: "Prihlásenie momentálne nie je dostupné.",
		googleSignIn: "Prihlásiť sa cez Google",
		passkeySignIn: "Prihlásiť sa pomocou passkey",
		passkeyRegister: "Prvýkrát? Nastavte si passkey",
		passkeyError: "Prihlásenie sa nepodarilo. Skúste to znova.",
		passkeyNoCredential: "Na tomto zariadení ešte nie je žiadny passkey — klepnutím na „Nastavte si passkey“ ho vytvoríte.",
		googleSignInDemo: "Pokračovať s Google",
		connectingOperator: "Bol pridelený operátor, počkajte prosím…",
		assignment: { eta: {
			minutes: "Operátor odpovie približne o {minutes} min",
			soft: "Zvyčajne odpovedáme do niekoľkých minút",
			businessHours: "Tím sa vráti o {time}"
		} },
		withOperator: "Teraz si píšete s {name}",
		operatorConnected: "Operátor pripojený",
		chatResolved: "Konverzácia vyriešená",
		chatResolvedByYou: "Konverzáciu ste vyriešili vy",
		chatResolvedByOperator: "Konverzáciu vyriešil {name}",
		resolveConversation: "Vyriešiť konverzáciu",
		sources: "Zdroje",
		moreSources: "+{count} ďalšie"
	},
	prechat: {
		title: "Skôr ako začneme",
		subtitle: "Pár údajov, aby vám náš tím mohol pomôcť rýchlejšie.",
		labelName: "Meno",
		labelEmail: "E-mail",
		labelPhone: "Telefón",
		labelCustom: "Podrobnosti",
		required: "Povinné",
		invalidEmail: "Zadajte platnú e-mailovú adresu",
		invalidPhone: "Zadajte platné telefónne číslo",
		submit: "Pokračovať",
		submitFailed: "Odoslanie sa nepodarilo - skúste to znova."
	},
	help: {
		searchPlaceholder: "Hľadať v pomocníkovi",
		emptyTitle: "Zatiaľ žiadne články",
		emptyBody: "Váš operátor zatiaľ nič nezverejnil.",
		back: "Späť",
		helpful: "Pomohlo to?",
		yes: "Áno",
		no: "Nie",
		thanks: "Ďakujeme za spätnú väzbu.",
		unresolvedCta: "Potrebujete ďalšiu pomoc? Napíšte nám",
		noResults: "Žiadne výsledky",
		articleNotFound: "Článok sa nenašiel",
		articleNotTranslated: "Tento článok zatiaľ nie je dostupný vo vašom jazyku.",
		writtenBy: "Autor: {names}",
		relatedTitle: "Súvisiace články",
		collectionsCount: "{count, plural, =0 {Žiadne kolekcie} one {# kolekcia} few {# kolekcie} many {# kolekcie} other {# kolekcií}}",
		articlesCount: "{count, plural, =0 {Žiadne články} one {Články: #} few {Články: #} many {Články: #} other {Články: #}}",
		authorsByline: "Autori {first}{remaining, plural, =0 {} one { a # ďalší} few { a # ďalší} many { a # ďalších} other { a # ďalších}}"
	},
	news: {
		emptyTitle: "Zatiaľ žiadne novinky",
		emptyBody: "Pozrite sa sem pre novinky o produkte a oznámenia.",
		helpful: "Bol tento článok užitočný?",
		yes: "Áno",
		no: "Nie",
		thanks: "Ďakujeme za spätnú väzbu.",
		searchPlaceholder: "Hľadať v novinkách",
		noResults: "Žiadne zhodné príspevky",
		editedAt: "upravené {when}",
		articleNotFound: "Článok sa nenašiel.",
		articleNotTranslated: "Tento príspevok zatiaľ nie je dostupný vo vašom jazyku.",
		readOriginal: "Čítať originál",
		relatedTitle: "Súvisiace",
		writtenBy: "Autor: {names}",
		unread: "Neprečítané novinky"
	},
	reactions: {
		ariaLabel: "Reakcie",
		tapAria: "Reagovať: {emoji}"
	},
	languageSelector: {
		title: "Čítať v inom jazyku",
		ariaLabel: "Jazyky článku"
	},
	branding: {
		poweredBy: "Pohán",
		wexio: "Wexio"
	},
	sound: {
		mute: "Vypnúť zvuky upozornení",
		unmute: "Zapnúť zvuky upozornení"
	},
	article: {
		tableOfContents: "Obsah",
		tabFallback: "Karta {n}"
	},
	peek: {
		newMessage: "Nová správa",
		dismiss: "Zavrieť",
		aiAssistant: "AI asistent",
		operator: "Operátor"
	},
	lightbox: {
		mediaPreview: "Náhľad média",
		close: "Zavrieť náhľad",
		previous: "Predchádzajúce",
		next: "Ďalšie"
	},
	authError: {
		turnstileTitle: "Nepodarilo sa overiť prehliadač",
		turnstileBody: "Nepodarilo sa dokončiť bezpečnostnú kontrolu. Niekedy je dôvodom sieť alebo blokovač reklám — skúste to znova alebo načítajte stránku.",
		genericTitle: "Nepodarilo sa pripojiť",
		genericBody: "Pri prihlásení sa niečo pokazilo. Skúste to o chvíľu znova.",
		retry: "Skúsiť znova",
		dismiss: "Zavrieť"
	},
	profile: {
		title: "Váš profil",
		subtitle: "Aktualizujte svoje údaje a správanie widgetu.",
		uploadAvatar: "Zmeniť fotku",
		removeAvatar: "Odstrániť fotku",
		avatarUploading: "Nahráva sa…",
		preferencesHeading: "Predvoľby",
		preferenceLanguage: "Jazyk",
		preferenceDesktopNotifications: "Upozornenia na ploche",
		preferenceDesktopNotificationsHint: "Získajte systémové upozornenie, keď widget nie je aktívny.",
		preferenceThemeMode: "Motív",
		themeAuto: "Podľa systému",
		themeLight: "Svetlý",
		themeDark: "Tmavý",
		themeLocked: "Motív nastavil operátor.",
		pinnedHint: "Nastavil operátor — nedá sa upraviť.",
		requiredHint: "Povinné",
		invalidEmail: "Zadajte platnú e-mailovú adresu.",
		invalidPhone: "Použite medzinárodný formát, napr. +14155552671.",
		noFields: "Zatiaľ tu nie je čo upravovať.",
		save: "Uložiť zmeny",
		saving: "Ukladá sa…",
		cancel: "Zahodiť",
		saved: "Zmeny uložené.",
		loading: "Načítava sa profil…",
		loadError: "Profil sa nepodarilo načítať. Skúste to znova.",
		retry: "Opakovať",
		errorFieldNotAllowed: "Toto pole sa v tomto widgete nedá upraviť. Skúste obnoviť stránku.",
		errorFieldPinned: "Toto pole je uzamknuté vaším účtom.",
		errorFieldInvalid: "Niektoré hodnoty sú neplatné. Skontrolujte zvýraznené polia.",
		errorThemeLocked: "Motív uzamkol operátor.",
		errorFeatureDisabled: "Úpravy profilu vypol operátor.",
		errorGeneric: "Zmeny sa nepodarilo uložiť. Skúste to znova.",
		notificationsBlocked: "Upozornenia sú blokované prehliadačom. Aktualizujte povolenia stránky, aby ste ich povolili.",
		notificationsRequest: "Keď sa objaví výzva, povoľte upozornenia, aby ste toto aktivovali.",
		systemFields: {
			avatar: "Fotka",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "Súhlas s WhatsApp",
			webVerified: "Overený návštevník",
			firstName: "Meno",
			lastName: "Priezvisko",
			username: "Používateľské meno",
			language: "Jazyk",
			email: "E-mail",
			phone: "Telefón",
			company: "Spoločnosť",
			location: "Lokalita",
			isValid: "Platný účet",
			chatStatus: "Stav chatu",
			chatCategory: "Kategória chatu",
			priority: "Priorita",
			leadSource: "Zdroj leadu",
			leadStatus: "Stav leadu",
			interestLevel: "Úroveň záujmu",
			productInterest: "Záujem o produkt",
			budgetRange: "Rozpočet",
			purchaseTimeline: "Časový plán nákupu",
			lastMessageSentAt: "Naposledy odoslané",
			lastMessageReceivedAt: "Naposledy prijaté",
			lastSeenAt: "Naposledy videný",
			firstMessageReceivedAt: "Prvý kontakt",
			isBlocked: "Zablokovaný",
			registrationDate: "Registrácia",
			aiAvailable: "Pomoc AI",
			totalMessagesSent: "Odoslané správy",
			totalMessagesReceived: "Prijaté správy",
			totalAiMessagesSent: "Odoslané AI správy",
			totalBotMessagesSent: "Odoslané bot správy",
			totalUserMessagesSent: "Odoslané správy operátora",
			flowCompletionRate: "Miera dokončenia flow",
			lastFlowCompleted: "Posledný dokončený flow",
			totalFlowsStarted: "Spustené flow",
			totalFlowsCompleted: "Dokončené flow"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problém",
				RESOLVED: "Vyriešené",
				PENDING: "Čaká",
				IN_PROGRESS: "Prebieha",
				CLOSED: "Uzavreté"
			},
			chatCategory: {
				SALES: "Predaj",
				SUPPORT: "Podpora",
				BILLING: "Fakturácia",
				FEEDBACK: "Spätná väzba",
				GENERAL: "Všeobecné",
				OTHER: "Iné"
			},
			priority: {
				LOW: "Nízka",
				MEDIUM: "Stredná",
				HIGH: "Vysoká",
				URGENT: "Naliehavá"
			},
			leadStatus: {
				NEW: "Nový",
				CONTACTED: "Kontaktovaný",
				QUALIFIED: "Kvalifikovaný",
				NEGOTIATING: "Rokovania",
				WON: "Získaný",
				LOST: "Stratený"
			},
			interestLevel: {
				LOW: "Nízka",
				MEDIUM: "Stredná",
				HIGH: "Vysoká",
				VERY_HIGH: "Veľmi vysoká"
			}
		}
	}
}, Yv = {
	tabs: {
		home: "Hem",
		messages: "Meddelanden",
		help: "Hjälp",
		news: "Nyheter",
		profile: "Profil"
	},
	header: {
		close: "Stäng",
		back: "Tillbaka",
		conversationSubtitle: "Vårt team kan också hjälpa till",
		helpTitle: "Hjälp",
		newsTitle: "Nyheter",
		expand: "Förstora widgeten",
		collapse: "Förminska widgeten"
	},
	launcher: {
		open: "Öppna chatten",
		close: "Stäng chatten",
		loading: "Ansluter…"
	},
	home: {
		greetingHeadline: "Hej där 👋",
		greetingSubheadline: "Hur kan vi hjälpa till?",
		askTitle: "Ställ en fråga",
		askSubtitle: "Vår bot och vårt team kan hjälpa till",
		recentMessageLabel: "Senaste meddelandet",
		recentMessageTitle: "Senaste meddelandet",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4t",
		recentMessageSample: "Hej där 👋 Tack för att du hör av dig - vi återkommer strax.",
		featuredArticleLoading: "Utvald artikel",
		featuredArticleTap: "Tryck för att läsa",
		featuredArticleEmpty: "Välj en artikel",
		featuredArticleSetUp: "Konfigurera detta block i din panel",
		featuredArticleDemoEyebrow: "Pioneer · Spara datumet",
		featuredArticleDemoHeadline: "8 oktober 2026",
		featuredArticleDemoSubline: "San Francisco · På plats + digitalt",
		featuredArticleDemoCta: "Se programmet",
		seeAgenda: "Se programmet",
		browseHelp: "Bläddra i hjälpen",
		whatsNew: "Vad är nytt",
		searchPlaceholder: "Sök i hjälpen",
		pinnedArticlesTitle: "Läs dessa först",
		popularArticlesTitle: "Populära artiklar",
		pinnedArticleRow: "Fäst artikel {n}",
		newsPreviewTitle: "Senaste nytt",
		newsPreviewRow: "Nyhetsuppdatering {n}",
		myConversationsTitle: "Dina konversationer",
		myConversationsEmpty: "Se dina konversationer",
		teamStatusOnline: "Vi är online",
		teamStatusReplyTime: "Svarar oftast inom några minuter"
	},
	messages: {
		today: "I dag",
		yesterday: "I går",
		unreadMessages: "Olästa meddelanden",
		emptyTitle: "Inga meddelanden än",
		emptyBody: "Starta en konversation så återkommer vårt team här.",
		sendCta: "Skicka ett meddelande",
		attach: "Bifoga en fil",
		commands: "Snabbkommandon",
		record: "Spela in ett röstmeddelande",
		stopRecording: "Stoppa inspelningen",
		recording: "Spelar in…",
		uploading: "Laddar upp…",
		uploadFailed: "Uppladdningen misslyckades",
		voiceDenied: "Åtkomst till mikrofonen nekad",
		voiceUnsupported: "Röstinspelning stöds inte i den här webbläsaren",
		fileTooLarge: "Filen är för stor (max 10 MB)",
		fileMimeNotAllowed: "Den här filtypen stöds inte",
		emoji: "Infoga emoji",
		cancelRecording: "Avbryt inspelning",
		pauseRecording: "Pausa inspelning",
		resumeRecording: "Fortsätt inspelning",
		playPreview: "Spela upp inspelningen",
		emojiPicker: "Emojiväljare",
		emojiSearch: "Sök…",
		playAudio: "Spela",
		pauseAudio: "Pausa",
		openAudio: "Öppna ljud",
		removeAttachment: "Ta bort",
		aiAssistant: "AI-assistent",
		operator: "Operatör",
		openImage: "Öppna bild",
		openPreview: "Öppna förhandsvisning",
		play: "Spela",
		pause: "Pausa",
		typing: "skriver…",
		aiThinking: "tänker…",
		aiSearching: "söker…",
		typingSomeone: "Någon",
		signInToChat: "Logga in för att starta konversationen.",
		signInUnavailable: "Inloggning är inte tillgänglig just nu.",
		googleSignIn: "Logga in med Google",
		passkeySignIn: "Logga in med passkey",
		passkeyRegister: "Första gången? Skapa en passkey",
		passkeyError: "Det gick inte att logga in. Försök igen.",
		passkeyNoCredential: "Ingen passkey på den här enheten än — tryck på ”Skapa en passkey” för att lägga till.",
		googleSignInDemo: "Fortsätt med Google",
		connectingOperator: "En operatör har tilldelats, vänligen vänta…",
		assignment: { eta: {
			minutes: "En operatör svarar om cirka {minutes} min",
			soft: "Vi svarar oftast inom några minuter",
			businessHours: "Teamet är tillbaka {time}"
		} },
		withOperator: "Du chattar nu med {name}",
		operatorConnected: "Operatör ansluten",
		chatResolved: "Konversationen har lösts",
		chatResolvedByYou: "Konversationen löstes av dig",
		chatResolvedByOperator: "Konversationen löstes av {name}",
		resolveConversation: "Lös konversationen",
		sources: "Källor",
		moreSources: "+{count} till"
	},
	prechat: {
		title: "Innan vi börjar",
		subtitle: "Några snabba uppgifter så att vårt team kan hjälpa dig snabbare.",
		labelName: "Namn",
		labelEmail: "E-post",
		labelPhone: "Telefon",
		labelCustom: "Detaljer",
		required: "Obligatoriskt",
		invalidEmail: "Ange en giltig e-postadress",
		invalidPhone: "Ange ett giltigt telefonnummer",
		submit: "Fortsätt",
		submitFailed: "Det gick inte att skicka - försök igen."
	},
	help: {
		searchPlaceholder: "Sök i hjälpen",
		emptyTitle: "Inga artiklar än",
		emptyBody: "Din operatör har inte publicerat något än.",
		back: "Tillbaka",
		helpful: "Var detta till hjälp?",
		yes: "Ja",
		no: "Nej",
		thanks: "Tack för din feedback.",
		unresolvedCta: "Behöver du fortfarande hjälp? Skriv till oss",
		noResults: "Inga resultat",
		articleNotFound: "Artikeln hittades inte",
		articleNotTranslated: "Den här artikeln finns inte på ditt språk än.",
		writtenBy: "Skrivet av {names}",
		relatedTitle: "Relaterade artiklar",
		collectionsCount: "{count, plural, =0 {Inga samlingar} one {# samling} other {# samlingar}}",
		articlesCount: "{count, plural, =0 {Inga artiklar} one {Artiklar: #} other {Artiklar: #}}",
		authorsByline: "Författare {first}{remaining, plural, =0 {} one { och # till} other { och # till}}"
	},
	news: {
		emptyTitle: "Inga uppdateringar än",
		emptyBody: "Titta tillbaka här för produktnyheter och tillkännagivanden.",
		helpful: "Var den här artikeln till hjälp?",
		yes: "Ja",
		no: "Nej",
		thanks: "Tack för din feedback.",
		searchPlaceholder: "Sök i nyheter",
		noResults: "Inga matchande inlägg",
		editedAt: "redigerad {when}",
		articleNotFound: "Artikeln hittades inte.",
		articleNotTranslated: "Det här inlägget finns inte på ditt språk än.",
		readOriginal: "Läs originalet",
		relatedTitle: "Relaterat",
		writtenBy: "Skrivet av {names}",
		unread: "Olästa nyheter"
	},
	reactions: {
		ariaLabel: "Reaktioner",
		tapAria: "Reagera med {emoji}"
	},
	languageSelector: {
		title: "Läs på ett annat språk",
		ariaLabel: "Artikelns språk"
	},
	branding: {
		poweredBy: "Drivs av",
		wexio: "Wexio"
	},
	sound: {
		mute: "Stäng av aviseringsljud",
		unmute: "Slå på aviseringsljud"
	},
	article: {
		tableOfContents: "Innehåll",
		tabFallback: "Flik {n}"
	},
	peek: {
		newMessage: "Nytt meddelande",
		dismiss: "Stäng",
		aiAssistant: "AI-assistent",
		operator: "Operatör"
	},
	lightbox: {
		mediaPreview: "Mediaförhandsvisning",
		close: "Stäng förhandsvisning",
		previous: "Föregående",
		next: "Nästa"
	},
	authError: {
		turnstileTitle: "Kunde inte verifiera din webbläsare",
		turnstileBody: "Vi kunde inte slutföra säkerhetskontrollen. Det beror ibland på nätverket eller en annonsblockerare — försök igen eller ladda om sidan.",
		genericTitle: "Kunde inte ansluta",
		genericBody: "Något gick fel vid inloggningen. Försök igen om en stund.",
		retry: "Försök igen",
		dismiss: "Stäng"
	},
	profile: {
		title: "Din profil",
		subtitle: "Uppdatera dina uppgifter och hur widgeten beter sig.",
		uploadAvatar: "Byt foto",
		removeAvatar: "Ta bort foto",
		avatarUploading: "Laddar upp…",
		preferencesHeading: "Inställningar",
		preferenceLanguage: "Språk",
		preferenceDesktopNotifications: "Skrivbordsaviseringar",
		preferenceDesktopNotificationsHint: "Få en systemavisering när widgeten inte är i fokus.",
		preferenceThemeMode: "Tema",
		themeAuto: "Följ systemet",
		themeLight: "Ljust",
		themeDark: "Mörkt",
		themeLocked: "Temat är satt av operatören.",
		pinnedHint: "Satt av operatören — kan inte redigeras.",
		requiredHint: "Obligatoriskt",
		invalidEmail: "Ange en giltig e-postadress.",
		invalidPhone: "Använd internationellt format, t.ex. +14155552671.",
		noFields: "Det finns inget att redigera här än.",
		save: "Spara ändringar",
		saving: "Sparar…",
		cancel: "Avbryt",
		saved: "Ändringarna har sparats.",
		loading: "Laddar profil…",
		loadError: "Det gick inte att läsa in din profil. Försök igen.",
		retry: "Försök igen",
		errorFieldNotAllowed: "Detta fält går inte att redigera i den här widgeten. Försök ladda om.",
		errorFieldPinned: "Detta fält är låst av ditt konto.",
		errorFieldInvalid: "Några värden är ogiltiga. Kontrollera de markerade fälten.",
		errorThemeLocked: "Temat är låst av operatören.",
		errorFeatureDisabled: "Profilredigering har stängts av av operatören.",
		errorGeneric: "Det gick inte att spara dina ändringar. Försök igen.",
		notificationsBlocked: "Aviseringar är blockerade av webbläsaren. Uppdatera webbplatsens behörigheter för att aktivera.",
		notificationsRequest: "Tillåt aviseringar när du blir tillfrågad för att aktivera detta.",
		systemFields: {
			avatar: "Foto",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp-samtycke",
			webVerified: "Verifierad besökare",
			firstName: "Förnamn",
			lastName: "Efternamn",
			username: "Användarnamn",
			language: "Språk",
			email: "E-post",
			phone: "Telefon",
			company: "Företag",
			location: "Plats",
			isValid: "Giltigt konto",
			chatStatus: "Chattstatus",
			chatCategory: "Chattkategori",
			priority: "Prioritet",
			leadSource: "Leadkälla",
			leadStatus: "Leadstatus",
			interestLevel: "Intressenivå",
			productInterest: "Produktintresse",
			budgetRange: "Budget",
			purchaseTimeline: "Tidsplan för köp",
			lastMessageSentAt: "Senaste skickade",
			lastMessageReceivedAt: "Senaste mottagna",
			lastSeenAt: "Senast sedd",
			firstMessageReceivedAt: "Första kontakt",
			isBlocked: "Blockerad",
			registrationDate: "Registrerad",
			aiAvailable: "AI-assistans",
			totalMessagesSent: "Skickade meddelanden",
			totalMessagesReceived: "Mottagna meddelanden",
			totalAiMessagesSent: "Skickade AI-meddelanden",
			totalBotMessagesSent: "Skickade bot-meddelanden",
			totalUserMessagesSent: "Skickade operatörsmeddelanden",
			flowCompletionRate: "Slutförandegrad för flöden",
			lastFlowCompleted: "Senast slutförda flöde",
			totalFlowsStarted: "Startade flöden",
			totalFlowsCompleted: "Slutförda flöden"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Problem",
				RESOLVED: "Löst",
				PENDING: "Väntar",
				IN_PROGRESS: "Pågår",
				CLOSED: "Stängd"
			},
			chatCategory: {
				SALES: "Försäljning",
				SUPPORT: "Support",
				BILLING: "Fakturering",
				FEEDBACK: "Feedback",
				GENERAL: "Allmänt",
				OTHER: "Övrigt"
			},
			priority: {
				LOW: "Låg",
				MEDIUM: "Medel",
				HIGH: "Hög",
				URGENT: "Brådskande"
			},
			leadStatus: {
				NEW: "Ny",
				CONTACTED: "Kontaktad",
				QUALIFIED: "Kvalificerad",
				NEGOTIATING: "Förhandlar",
				WON: "Vunnen",
				LOST: "Förlorad"
			},
			interestLevel: {
				LOW: "Låg",
				MEDIUM: "Medel",
				HIGH: "Hög",
				VERY_HIGH: "Mycket hög"
			}
		}
	}
}, Xv = {
	tabs: {
		home: "หน้าหลัก",
		messages: "ข้อความ",
		help: "ช่วยเหลือ",
		news: "ข่าวสาร",
		profile: "โปรไฟล์"
	},
	header: {
		close: "ปิด",
		back: "ย้อนกลับ",
		conversationSubtitle: "ทีมงานของเราพร้อมช่วยเหลือเช่นกัน",
		helpTitle: "ช่วยเหลือ",
		newsTitle: "ข่าวสาร",
		expand: "ขยายวิดเจ็ต",
		collapse: "ย่อวิดเจ็ต"
	},
	launcher: {
		open: "เปิดแชท",
		close: "ปิดแชท",
		loading: "กำลังเชื่อมต่อ…"
	},
	home: {
		greetingHeadline: "สวัสดี 👋",
		greetingSubheadline: "เราช่วยอะไรคุณได้บ้าง?",
		askTitle: "ถามคำถาม",
		askSubtitle: "บอทและทีมของเราพร้อมช่วยเหลือ",
		recentMessageLabel: "ข้อความล่าสุด",
		recentMessageTitle: "ข้อความล่าสุด",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 ชม.",
		recentMessageSample: "สวัสดี 👋 ขอบคุณที่ติดต่อมา - เราจะกลับมาหาคุณเร็ว ๆ นี้",
		featuredArticleLoading: "บทความเด่น",
		featuredArticleTap: "แตะเพื่ออ่าน",
		featuredArticleEmpty: "เลือกบทความ",
		featuredArticleSetUp: "กำหนดค่าบล็อกนี้ในแดชบอร์ดของคุณ",
		featuredArticleDemoEyebrow: "Pioneer · บันทึกวันนี้ไว้",
		featuredArticleDemoHeadline: "8 ตุลาคม 2026",
		featuredArticleDemoSubline: "ซานฟรานซิสโก · พบหน้า + ออนไลน์",
		featuredArticleDemoCta: "ดูกำหนดการเปิดตัว",
		seeAgenda: "ดูกำหนดการเปิดตัว",
		browseHelp: "เรียกดูความช่วยเหลือ",
		whatsNew: "มีอะไรใหม่",
		searchPlaceholder: "ค้นหาความช่วยเหลือ",
		pinnedArticlesTitle: "อ่านสิ่งเหล่านี้ก่อน",
		popularArticlesTitle: "บทความยอดนิยม",
		pinnedArticleRow: "บทความปักหมุด {n}",
		newsPreviewTitle: "ข่าวล่าสุด",
		newsPreviewRow: "ข่าวอัปเดต {n}",
		myConversationsTitle: "บทสนทนาของคุณ",
		myConversationsEmpty: "ดูบทสนทนาของคุณ",
		teamStatusOnline: "เราออนไลน์อยู่",
		teamStatusReplyTime: "ปกติตอบกลับภายในไม่กี่นาที"
	},
	messages: {
		today: "วันนี้",
		yesterday: "เมื่อวาน",
		unreadMessages: "ข้อความที่ยังไม่ได้อ่าน",
		emptyTitle: "ยังไม่มีข้อความ",
		emptyBody: "เริ่มการสนทนาแล้วทีมของเราจะตอบกลับคุณที่นี่",
		sendCta: "ส่งข้อความถึงเรา",
		attach: "แนบไฟล์",
		commands: "คำสั่งด่วน",
		record: "บันทึกข้อความเสียง",
		stopRecording: "หยุดบันทึก",
		recording: "กำลังบันทึก…",
		uploading: "กำลังอัปโหลด…",
		uploadFailed: "อัปโหลดไม่สำเร็จ",
		voiceDenied: "ปฏิเสธการเข้าถึงไมโครโฟน",
		voiceUnsupported: "เบราว์เซอร์นี้ไม่รองรับการบันทึกเสียง",
		fileTooLarge: "ไฟล์ใหญ่เกินไป (สูงสุด 10MB)",
		fileMimeNotAllowed: "ไม่รองรับไฟล์ประเภทนี้",
		emoji: "ใส่อีโมจิ",
		cancelRecording: "ยกเลิกการบันทึก",
		pauseRecording: "หยุดบันทึกชั่วคราว",
		resumeRecording: "บันทึกต่อ",
		playPreview: "เล่นที่บันทึกไว้",
		emojiPicker: "ตัวเลือกอีโมจิ",
		emojiSearch: "ค้นหา…",
		playAudio: "เล่น",
		pauseAudio: "หยุดชั่วคราว",
		openAudio: "เปิดเสียง",
		removeAttachment: "ลบ",
		aiAssistant: "ผู้ช่วย AI",
		operator: "เจ้าหน้าที่",
		openImage: "เปิดรูปภาพ",
		openPreview: "เปิดดูตัวอย่าง",
		play: "เล่น",
		pause: "หยุดชั่วคราว",
		typing: "กำลังพิมพ์…",
		aiThinking: "กำลังคิด…",
		aiSearching: "กำลังค้นหา…",
		typingSomeone: "ใครบางคน",
		signInToChat: "กรุณาเข้าสู่ระบบเพื่อเริ่มการสนทนา",
		signInUnavailable: "ยังไม่สามารถเข้าสู่ระบบได้ในขณะนี้",
		googleSignIn: "เข้าสู่ระบบด้วย Google",
		passkeySignIn: "เข้าสู่ระบบด้วยพาสคีย์",
		passkeyRegister: "ครั้งแรก? ตั้งค่าพาสคีย์",
		passkeyError: "เข้าสู่ระบบไม่สำเร็จ กรุณาลองอีกครั้ง",
		passkeyNoCredential: "ยังไม่มีพาสคีย์ในอุปกรณ์นี้ — แตะ \"ตั้งค่าพาสคีย์\" เพื่อสร้าง",
		googleSignInDemo: "ดำเนินการต่อด้วย Google",
		connectingOperator: "มีการมอบหมายเจ้าหน้าที่แล้ว โปรดรอสักครู่…",
		assignment: { eta: {
			minutes: "เจ้าหน้าที่จะตอบกลับในอีกประมาณ {minutes} นาที",
			soft: "โดยปกติเราจะตอบกลับภายในไม่กี่นาที",
			businessHours: "ทีมงานจะกลับมาในเวลา {time}"
		} },
		withOperator: "ตอนนี้คุณกำลังแชทกับ {name}",
		operatorConnected: "เชื่อมต่อกับเจ้าหน้าที่แล้ว",
		chatResolved: "การสนทนาได้รับการแก้ไขแล้ว",
		chatResolvedByYou: "คุณได้แก้ไขการสนทนาแล้ว",
		chatResolvedByOperator: "{name} ได้แก้ไขการสนทนาแล้ว",
		resolveConversation: "แก้ไขการสนทนา",
		sources: "แหล่งที่มา",
		moreSources: "อีก {count} รายการ"
	},
	prechat: {
		title: "ก่อนที่เราจะเริ่ม",
		subtitle: "รายละเอียดเล็กน้อยเพื่อให้ทีมของเราช่วยคุณได้เร็วขึ้น",
		labelName: "ชื่อ",
		labelEmail: "อีเมล",
		labelPhone: "โทรศัพท์",
		labelCustom: "รายละเอียด",
		required: "จำเป็น",
		invalidEmail: "กรุณากรอกอีเมลที่ถูกต้อง",
		invalidPhone: "กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง",
		submit: "ดำเนินการต่อ",
		submitFailed: "ส่งไม่สำเร็จ - กรุณาลองอีกครั้ง"
	},
	help: {
		searchPlaceholder: "ค้นหาความช่วยเหลือ",
		emptyTitle: "ยังไม่มีบทความ",
		emptyBody: "เจ้าหน้าที่ของคุณยังไม่ได้เผยแพร่บทความใด ๆ",
		back: "ย้อนกลับ",
		helpful: "บทความนี้มีประโยชน์ไหม?",
		yes: "ใช่",
		no: "ไม่",
		thanks: "ขอบคุณสำหรับความคิดเห็น",
		unresolvedCta: "ยังต้องการความช่วยเหลือ? ส่งข้อความหาเรา",
		noResults: "ไม่พบผลลัพธ์",
		articleNotFound: "ไม่พบบทความ",
		articleNotTranslated: "บทความนี้ยังไม่มีในภาษาของคุณ",
		writtenBy: "เขียนโดย {names}",
		relatedTitle: "บทความที่เกี่ยวข้อง",
		collectionsCount: "{count, plural, other {# ชุด}}",
		articlesCount: "{count, plural, other {บทความ: #}}",
		authorsByline: "ผู้เขียน {first}{remaining, plural, =0 {} other { และอีก #}}"
	},
	news: {
		unread: "ข่าวที่ยังไม่ได้อ่าน",
		emptyTitle: "ยังไม่มีอัปเดต",
		emptyBody: "กลับมาที่นี่เพื่อดูข่าวผลิตภัณฑ์และประกาศ",
		helpful: "บทความนี้มีประโยชน์ไหม?",
		yes: "ใช่",
		no: "ไม่",
		thanks: "ขอบคุณสำหรับความคิดเห็น",
		searchPlaceholder: "ค้นหาข่าว",
		noResults: "ไม่พบโพสต์ที่ตรงกัน",
		editedAt: "แก้ไขเมื่อ {when}",
		articleNotFound: "ไม่พบบทความ",
		articleNotTranslated: "โพสต์นี้ยังไม่มีในภาษาของคุณ",
		readOriginal: "อ่านต้นฉบับ",
		relatedTitle: "ที่เกี่ยวข้อง",
		writtenBy: "เขียนโดย {names}"
	},
	reactions: {
		ariaLabel: "ปฏิกิริยา",
		tapAria: "แสดงปฏิกิริยาด้วย {emoji}"
	},
	languageSelector: {
		title: "อ่านในภาษาอื่น",
		ariaLabel: "ภาษาของบทความ"
	},
	branding: {
		poweredBy: "ขับเคลื่อนโดย",
		wexio: "Wexio"
	},
	sound: {
		mute: "ปิดเสียงการแจ้งเตือน",
		unmute: "เปิดเสียงการแจ้งเตือน"
	},
	article: {
		tableOfContents: "สารบัญ",
		tabFallback: "แท็บ {n}"
	},
	peek: {
		newMessage: "ข้อความใหม่",
		dismiss: "ปิด",
		aiAssistant: "ผู้ช่วย AI",
		operator: "เจ้าหน้าที่"
	},
	lightbox: {
		mediaPreview: "ดูตัวอย่างสื่อ",
		close: "ปิดตัวอย่าง",
		previous: "ก่อนหน้า",
		next: "ถัดไป"
	},
	authError: {
		turnstileTitle: "ยืนยันเบราว์เซอร์ของคุณไม่ได้",
		turnstileBody: "เราไม่สามารถดำเนินการตรวจสอบความปลอดภัยให้เสร็จสมบูรณ์ บางครั้งเกิดจากปัญหาเครือข่ายหรือตัวบล็อกโฆษณา — ลองอีกครั้งหรือโหลดหน้าใหม่",
		genericTitle: "เชื่อมต่อไม่ได้",
		genericBody: "เกิดข้อผิดพลาดขณะเข้าสู่ระบบ กรุณาลองอีกครั้งในอีกสักครู่",
		retry: "ลองอีกครั้ง",
		dismiss: "ปิด"
	},
	profile: {
		title: "โปรไฟล์ของคุณ",
		subtitle: "อัปเดตข้อมูลและการทำงานของวิดเจ็ต",
		uploadAvatar: "เปลี่ยนรูป",
		removeAvatar: "ลบรูป",
		avatarUploading: "กำลังอัปโหลด…",
		preferencesHeading: "การตั้งค่า",
		preferenceLanguage: "ภาษา",
		preferenceDesktopNotifications: "การแจ้งเตือนเดสก์ท็อป",
		preferenceDesktopNotificationsHint: "รับการแจ้งเตือนจากระบบเมื่อวิดเจ็ตไม่ได้โฟกัส",
		preferenceThemeMode: "ธีม",
		themeAuto: "ตามระบบ",
		themeLight: "สว่าง",
		themeDark: "มืด",
		themeLocked: "ธีมถูกกำหนดโดยเจ้าหน้าที่",
		pinnedHint: "กำหนดโดยเจ้าหน้าที่ — แก้ไขไม่ได้",
		requiredHint: "จำเป็น",
		invalidEmail: "กรุณากรอกอีเมลที่ถูกต้อง",
		invalidPhone: "ใช้รูปแบบสากล เช่น +14155552671",
		noFields: "ยังไม่มีอะไรให้แก้ไขที่นี่",
		save: "บันทึกการเปลี่ยนแปลง",
		saving: "กำลังบันทึก…",
		cancel: "ยกเลิก",
		saved: "บันทึกการเปลี่ยนแปลงแล้ว",
		loading: "กำลังโหลดโปรไฟล์…",
		loadError: "โหลดโปรไฟล์ของคุณไม่ได้ กรุณาลองอีกครั้ง",
		retry: "ลองใหม่",
		errorFieldNotAllowed: "ช่องนี้แก้ไขไม่ได้ในวิดเจ็ตนี้ ลองรีเฟรชหน้า",
		errorFieldPinned: "ช่องนี้ถูกล็อกโดยบัญชีของคุณ",
		errorFieldInvalid: "บางค่าไม่ถูกต้อง ตรวจสอบช่องที่ถูกไฮไลต์",
		errorThemeLocked: "ธีมถูกล็อกโดยเจ้าหน้าที่",
		errorFeatureDisabled: "การแก้ไขโปรไฟล์ถูกปิดโดยเจ้าหน้าที่",
		errorGeneric: "บันทึกการเปลี่ยนแปลงไม่ได้ กรุณาลองอีกครั้ง",
		notificationsBlocked: "การแจ้งเตือนถูกบล็อกโดยเบราว์เซอร์ อัปเดตสิทธิ์ของไซต์เพื่อเปิดใช้งาน",
		notificationsRequest: "อนุญาตการแจ้งเตือนเมื่อมีการแจ้งเพื่อเปิดใช้งาน",
		systemFields: {
			avatar: "รูปภาพ",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "ยอมรับ WhatsApp",
			webVerified: "ผู้เยี่ยมชมที่ยืนยันแล้ว",
			firstName: "ชื่อ",
			lastName: "นามสกุล",
			username: "ชื่อผู้ใช้",
			language: "ภาษา",
			email: "อีเมล",
			phone: "โทรศัพท์",
			company: "บริษัท",
			location: "ที่อยู่",
			isValid: "บัญชีใช้งานได้",
			chatStatus: "สถานะแชท",
			chatCategory: "หมวดหมู่แชท",
			priority: "ความสำคัญ",
			leadSource: "ที่มาของลีด",
			leadStatus: "สถานะลีด",
			interestLevel: "ระดับความสนใจ",
			productInterest: "ความสนใจในผลิตภัณฑ์",
			budgetRange: "งบประมาณ",
			purchaseTimeline: "กรอบเวลาการซื้อ",
			lastMessageSentAt: "ส่งข้อความล่าสุด",
			lastMessageReceivedAt: "รับข้อความล่าสุด",
			lastSeenAt: "เห็นล่าสุด",
			firstMessageReceivedAt: "การติดต่อครั้งแรก",
			isBlocked: "ถูกบล็อก",
			registrationDate: "ลงทะเบียน",
			aiAvailable: "ความช่วยเหลือ AI",
			totalMessagesSent: "ข้อความที่ส่ง",
			totalMessagesReceived: "ข้อความที่รับ",
			totalAiMessagesSent: "ข้อความ AI ที่ส่ง",
			totalBotMessagesSent: "ข้อความบอทที่ส่ง",
			totalUserMessagesSent: "ข้อความเจ้าหน้าที่ที่ส่ง",
			flowCompletionRate: "อัตราการทำโฟลว์สำเร็จ",
			lastFlowCompleted: "โฟลว์ที่ทำสำเร็จล่าสุด",
			totalFlowsStarted: "โฟลว์ที่เริ่ม",
			totalFlowsCompleted: "โฟลว์ที่สำเร็จ"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "ปัญหา",
				RESOLVED: "แก้ไขแล้ว",
				PENDING: "รอดำเนินการ",
				IN_PROGRESS: "กำลังดำเนินการ",
				CLOSED: "ปิดแล้ว"
			},
			chatCategory: {
				SALES: "การขาย",
				SUPPORT: "การสนับสนุน",
				BILLING: "การชำระเงิน",
				FEEDBACK: "ความคิดเห็น",
				GENERAL: "ทั่วไป",
				OTHER: "อื่น ๆ"
			},
			priority: {
				LOW: "ต่ำ",
				MEDIUM: "ปานกลาง",
				HIGH: "สูง",
				URGENT: "เร่งด่วน"
			},
			leadStatus: {
				NEW: "ใหม่",
				CONTACTED: "ติดต่อแล้ว",
				QUALIFIED: "ผ่านเกณฑ์",
				NEGOTIATING: "กำลังเจรจา",
				WON: "ชนะ",
				LOST: "แพ้"
			},
			interestLevel: {
				LOW: "ต่ำ",
				MEDIUM: "ปานกลาง",
				HIGH: "สูง",
				VERY_HIGH: "สูงมาก"
			}
		}
	}
}, Zv = {
	tabs: {
		home: "Ana sayfa",
		messages: "Mesajlar",
		help: "Yardım",
		news: "Haberler",
		profile: "Profil"
	},
	header: {
		close: "Kapat",
		back: "Geri",
		conversationSubtitle: "Ekibimiz de yardımcı olabilir",
		helpTitle: "Yardım",
		newsTitle: "Haberler",
		expand: "Widget'ı genişlet",
		collapse: "Widget'ı küçült"
	},
	launcher: {
		open: "Sohbeti aç",
		close: "Sohbeti kapat",
		loading: "Bağlanıyor…"
	},
	home: {
		greetingHeadline: "Merhaba 👋",
		greetingSubheadline: "Nasıl yardımcı olabiliriz?",
		askTitle: "Soru sor",
		askSubtitle: "Botumuz ve ekibimiz yardımcı olabilir",
		recentMessageLabel: "Son mesaj",
		recentMessageTitle: "Son mesaj",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 sa",
		recentMessageSample: "Merhaba 👋 Bize ulaştığın için teşekkürler — kısa süre içinde döneceğiz.",
		featuredArticleLoading: "Öne çıkan makale",
		featuredArticleTap: "Okumak için dokun",
		featuredArticleEmpty: "Bir makale seç",
		featuredArticleSetUp: "Bu bloğu panelinde yapılandır",
		featuredArticleDemoEyebrow: "Pioneer · Tarihi not al",
		featuredArticleDemoHeadline: "8 Ekim 2026",
		featuredArticleDemoSubline: "San Francisco · Yüz yüze + çevrimiçi",
		featuredArticleDemoCta: "Lansman programını gör",
		seeAgenda: "Lansman programını gör",
		browseHelp: "Yardıma göz at",
		whatsNew: "Yenilikler",
		searchPlaceholder: "Yardımda ara",
		pinnedArticlesTitle: "Önce bunları oku",
		popularArticlesTitle: "Popüler makaleler",
		pinnedArticleRow: "Sabitlenmiş makale {n}",
		newsPreviewTitle: "Son haberler",
		newsPreviewRow: "Haber güncellemesi {n}",
		myConversationsTitle: "Sohbetlerin",
		myConversationsEmpty: "Sohbetlerini görüntüle",
		teamStatusOnline: "Çevrimiçiyiz",
		teamStatusReplyTime: "Genellikle birkaç dakika içinde yanıtlıyoruz"
	},
	messages: {
		today: "Bugün",
		yesterday: "Dün",
		unreadMessages: "Okunmamış mesajlar",
		emptyTitle: "Henüz mesaj yok",
		emptyBody: "Bir sohbet başlat — ekibimiz buradan sana dönecek.",
		sendCta: "Bize mesaj gönder",
		attach: "Dosya ekle",
		commands: "Hızlı komutlar",
		record: "Sesli mesaj kaydet",
		stopRecording: "Kaydı durdur",
		recording: "Kaydediliyor…",
		uploading: "Yükleniyor…",
		uploadFailed: "Yükleme başarısız",
		voiceDenied: "Mikrofon erişimi reddedildi",
		voiceUnsupported: "Bu tarayıcı ses kaydını desteklemiyor",
		fileTooLarge: "Dosya çok büyük (en fazla 10 MB)",
		fileMimeNotAllowed: "Bu dosya türü desteklenmiyor",
		emoji: "Emoji ekle",
		cancelRecording: "Kaydı iptal et",
		pauseRecording: "Kaydı duraklat",
		resumeRecording: "Kaydı sürdür",
		playPreview: "Kaydı oynat",
		emojiPicker: "Emoji seçici",
		emojiSearch: "Ara…",
		playAudio: "Oynat",
		pauseAudio: "Duraklat",
		openAudio: "Sesi aç",
		removeAttachment: "Kaldır",
		aiAssistant: "AI asistan",
		operator: "Operatör",
		openImage: "Görseli aç",
		openPreview: "Önizlemeyi aç",
		play: "Oynat",
		pause: "Duraklat",
		typing: "yazıyor…",
		aiThinking: "düşünüyor…",
		aiSearching: "araştırıyor…",
		typingSomeone: "Biri",
		signInToChat: "Sohbete başlamak için lütfen giriş yap.",
		signInUnavailable: "Giriş şu anda kullanılamıyor.",
		googleSignIn: "Google ile giriş yap",
		passkeySignIn: "Passkey ile giriş yap",
		passkeyRegister: "İlk kez mi? Bir passkey oluştur",
		passkeyError: "Giriş yapılamadı. Lütfen tekrar dene.",
		passkeyNoCredential: "Bu cihazda henüz passkey yok — eklemek için “Bir passkey oluştur”a dokun.",
		googleSignInDemo: "Google ile devam et",
		connectingOperator: "Bir operatör atandı, lütfen bekleyin…",
		assignment: { eta: {
			minutes: "Bir operatör yaklaşık {minutes} dk içinde yanıt verecek",
			soft: "Genellikle birkaç dakika içinde yanıt veriyoruz",
			businessHours: "Ekip {time} itibarıyla geri dönecek"
		} },
		withOperator: "Şimdi {name} ile sohbet ediyorsunuz",
		operatorConnected: "Operatör bağlandı",
		chatResolved: "Görüşme çözüldü",
		chatResolvedByYou: "Görüşmeyi siz çözdünüz",
		chatResolvedByOperator: "Görüşmeyi {name} çözdü",
		resolveConversation: "Görüşmeyi çöz",
		sources: "Kaynaklar",
		moreSources: "+{count} tane daha"
	},
	prechat: {
		title: "Başlamadan önce",
		subtitle: "Ekibimizin sana daha hızlı yardım edebilmesi için birkaç bilgi.",
		labelName: "İsim",
		labelEmail: "E-posta",
		labelPhone: "Telefon",
		labelCustom: "Ayrıntılar",
		required: "Zorunlu",
		invalidEmail: "Lütfen geçerli bir e-posta gir",
		invalidPhone: "Lütfen geçerli bir telefon numarası gir",
		submit: "Devam et",
		submitFailed: "Gönderilemedi — lütfen tekrar dene."
	},
	help: {
		searchPlaceholder: "Yardımda ara",
		emptyTitle: "Henüz makale yok",
		emptyBody: "Operatörün henüz bir şey yayımlamadı.",
		back: "Geri",
		helpful: "Bu yararlı oldu mu?",
		yes: "Evet",
		no: "Hayır",
		thanks: "Geri bildirim için teşekkürler.",
		unresolvedCta: "Hâlâ yardıma ihtiyacın var mı? Bize yaz",
		noResults: "Sonuç yok",
		articleNotFound: "Makale bulunamadı",
		articleNotTranslated: "Bu makale henüz senin dilinde mevcut değil.",
		writtenBy: "Yazan: {names}",
		relatedTitle: "İlgili makaleler",
		collectionsCount: "{count, plural, =0 {Koleksiyon yok} one {# koleksiyon} other {# koleksiyon}}",
		articlesCount: "{count, plural, =0 {Makale yok} one {Makale: #} other {Makale: #}}",
		authorsByline: "Yazarlar {first}{remaining, plural, =0 {} one { ve # kişi daha} other { ve # kişi daha}}"
	},
	news: {
		unread: "Okunmamış haberler",
		emptyTitle: "Henüz güncelleme yok",
		emptyBody: "Ürün haberleri ve duyurular için buraya tekrar bak.",
		helpful: "Bu makale yararlı oldu mu?",
		yes: "Evet",
		no: "Hayır",
		thanks: "Geri bildirim için teşekkürler.",
		searchPlaceholder: "Haberlerde ara",
		noResults: "Eşleşen gönderi yok",
		editedAt: "{when} tarihinde düzenlendi",
		articleNotFound: "Makale bulunamadı.",
		articleNotTranslated: "Bu gönderi henüz senin dilinde mevcut değil.",
		readOriginal: "Orijinali oku",
		relatedTitle: "İlgili",
		writtenBy: "Yazan: {names}"
	},
	reactions: {
		ariaLabel: "Tepkiler",
		tapAria: "{emoji} ile tepki ver"
	},
	languageSelector: {
		title: "Başka bir dilde oku",
		ariaLabel: "Makale dilleri"
	},
	branding: {
		poweredBy: "Sağlayıcı:",
		wexio: "Wexio"
	},
	sound: {
		mute: "Bildirim seslerini kapat",
		unmute: "Bildirim seslerini aç"
	},
	article: {
		tableOfContents: "İçindekiler",
		tabFallback: "Sekme {n}"
	},
	peek: {
		newMessage: "Yeni mesaj",
		dismiss: "Kapat",
		aiAssistant: "AI asistan",
		operator: "Operatör"
	},
	lightbox: {
		mediaPreview: "Medya önizlemesi",
		close: "Önizlemeyi kapat",
		previous: "Önceki",
		next: "Sonraki"
	},
	authError: {
		turnstileTitle: "Tarayıcın doğrulanamadı",
		turnstileBody: "Güvenlik kontrolünü tamamlayamadık. Bu bazen bir ağ veya reklam engelleyici sorunudur — tekrar dene ya da sayfayı yenile.",
		genericTitle: "Bağlanılamadı",
		genericBody: "Giriş yapılırken bir sorun oluştu. Lütfen biraz sonra tekrar dene.",
		retry: "Tekrar dene",
		dismiss: "Kapat"
	},
	profile: {
		title: "Profilin",
		subtitle: "Bilgilerini ve widget davranışını güncelle.",
		uploadAvatar: "Fotoğrafı değiştir",
		removeAvatar: "Fotoğrafı kaldır",
		avatarUploading: "Yükleniyor…",
		preferencesHeading: "Tercihler",
		preferenceLanguage: "Dil",
		preferenceDesktopNotifications: "Masaüstü bildirimleri",
		preferenceDesktopNotificationsHint: "Widget odakta değilken bir sistem bildirimi al.",
		preferenceThemeMode: "Tema",
		themeAuto: "Sistemle aynı",
		themeLight: "Açık",
		themeDark: "Koyu",
		themeLocked: "Tema operatör tarafından ayarlanmış.",
		pinnedHint: "Operatör tarafından ayarlanmış — düzenlenemez.",
		requiredHint: "Zorunlu",
		invalidEmail: "Lütfen geçerli bir e-posta adresi gir.",
		invalidPhone: "Uluslararası formatı kullan, örn. +14155552671.",
		noFields: "Burada henüz düzenlenecek bir şey yok.",
		save: "Değişiklikleri kaydet",
		saving: "Kaydediliyor…",
		cancel: "Vazgeç",
		saved: "Değişiklikler kaydedildi.",
		loading: "Profil yükleniyor…",
		loadError: "Profilin yüklenemedi. Lütfen tekrar dene.",
		retry: "Yeniden dene",
		errorFieldNotAllowed: "Bu alan bu widget'ta düzenlenemez. Sayfayı yenilemeyi dene.",
		errorFieldPinned: "Bu alan hesabın tarafından kilitlenmiş.",
		errorFieldInvalid: "Bazı değerler geçerli değil. Vurgulanan alanları kontrol et.",
		errorThemeLocked: "Tema operatör tarafından kilitlendi.",
		errorFeatureDisabled: "Profil düzenleme operatör tarafından kapatıldı.",
		errorGeneric: "Değişikliklerin kaydedilemedi. Lütfen tekrar dene.",
		notificationsBlocked: "Bildirimler tarayıcı tarafından engellendi. Etkinleştirmek için site izinlerini güncelle.",
		notificationsRequest: "Bunu etkinleştirmek için istendiğinde bildirimlere izin ver.",
		systemFields: {
			avatar: "Fotoğraf",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp onayı",
			webVerified: "Doğrulanmış ziyaretçi",
			firstName: "Ad",
			lastName: "Soyad",
			username: "Kullanıcı adı",
			language: "Dil",
			email: "E-posta",
			phone: "Telefon",
			company: "Şirket",
			location: "Konum",
			isValid: "Hesap geçerli",
			chatStatus: "Sohbet durumu",
			chatCategory: "Sohbet kategorisi",
			priority: "Öncelik",
			leadSource: "Müşteri adayı kaynağı",
			leadStatus: "Müşteri adayı durumu",
			interestLevel: "İlgi düzeyi",
			productInterest: "Ürün ilgisi",
			budgetRange: "Bütçe",
			purchaseTimeline: "Satın alma zaman çizelgesi",
			lastMessageSentAt: "Son gönderilen mesaj",
			lastMessageReceivedAt: "Son alınan mesaj",
			lastSeenAt: "Son görülme",
			firstMessageReceivedAt: "İlk iletişim",
			isBlocked: "Engellendi",
			registrationDate: "Kayıt tarihi",
			aiAvailable: "AI desteği",
			totalMessagesSent: "Gönderilen mesajlar",
			totalMessagesReceived: "Alınan mesajlar",
			totalAiMessagesSent: "Gönderilen AI mesajları",
			totalBotMessagesSent: "Gönderilen bot mesajları",
			totalUserMessagesSent: "Gönderilen operatör mesajları",
			flowCompletionRate: "Akış tamamlama oranı",
			lastFlowCompleted: "Son tamamlanan akış",
			totalFlowsStarted: "Başlatılan akışlar",
			totalFlowsCompleted: "Tamamlanan akışlar"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Sorun",
				RESOLVED: "Çözüldü",
				PENDING: "Beklemede",
				IN_PROGRESS: "Devam ediyor",
				CLOSED: "Kapatıldı"
			},
			chatCategory: {
				SALES: "Satış",
				SUPPORT: "Destek",
				BILLING: "Faturalama",
				FEEDBACK: "Geri bildirim",
				GENERAL: "Genel",
				OTHER: "Diğer"
			},
			priority: {
				LOW: "Düşük",
				MEDIUM: "Orta",
				HIGH: "Yüksek",
				URGENT: "Acil"
			},
			leadStatus: {
				NEW: "Yeni",
				CONTACTED: "İletişime geçildi",
				QUALIFIED: "Nitelikli",
				NEGOTIATING: "Görüşülüyor",
				WON: "Kazanıldı",
				LOST: "Kaybedildi"
			},
			interestLevel: {
				LOW: "Düşük",
				MEDIUM: "Orta",
				HIGH: "Yüksek",
				VERY_HIGH: "Çok yüksek"
			}
		}
	}
}, Qv = {
	tabs: {
		home: "Головна",
		messages: "Повідомлення",
		help: "Допомога",
		news: "Новини",
		profile: "Профіль"
	},
	header: {
		close: "Закрити",
		back: "Назад",
		conversationSubtitle: "Наші фахівці також можуть допомогти",
		helpTitle: "Допомога",
		newsTitle: "Новини",
		expand: "Розгорнути віджет",
		collapse: "Згорнути віджет"
	},
	launcher: {
		open: "Відкрити чат",
		close: "Закрити чат",
		loading: "Підключення…"
	},
	home: {
		greetingHeadline: "Як справи? 👋",
		greetingSubheadline: "Чим вам допомогти?",
		askTitle: "Поставити запитання",
		askSubtitle: "Вам допоможуть наш бот і наші фахівці",
		recentMessageLabel: "Нещодавнє повідомлення",
		recentMessageTitle: "Нещодавнє повідомлення",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 год",
		recentMessageSample: "Привіт 👋 Дякуємо, що звернулися - ми скоро повернемося до вас.",
		featuredArticleLoading: "Рекомендована стаття",
		featuredArticleTap: "Натисніть, щоб читати",
		featuredArticleEmpty: "Виберіть статтю",
		featuredArticleSetUp: "Налаштуйте цей блок у панелі",
		featuredArticleDemoEyebrow: "Pioneer · Save the date",
		featuredArticleDemoHeadline: "8 жовтня 2026",
		featuredArticleDemoSubline: "Сан-Франциско · офлайн + онлайн",
		featuredArticleDemoCta: "Переглянути програму запуску",
		seeAgenda: "Переглянути програму запуску",
		browseHelp: "Довідка",
		whatsNew: "Що нового",
		searchPlaceholder: "Пошук у довідці",
		pinnedArticlesTitle: "Почніть із цього",
		popularArticlesTitle: "Популярні статті",
		pinnedArticleRow: "Закріплена стаття {n}",
		newsPreviewTitle: "Останні новини",
		newsPreviewRow: "Новина {n}",
		myConversationsTitle: "Ваші розмови",
		myConversationsEmpty: "Переглянути ваші розмови",
		teamStatusOnline: "Ми онлайн",
		teamStatusReplyTime: "Зазвичай відповідаємо за кілька хвилин"
	},
	messages: {
		today: "Сьогодні",
		yesterday: "Вчора",
		unreadMessages: "Непрочитані повідомлення",
		emptyTitle: "Ще немає повідомлень",
		emptyBody: "Розпочніть розмову - ми відповімо тут.",
		sendCta: "Надіслати повідомлення",
		attach: "Прикріпити файл",
		commands: "Швидкі команди",
		record: "Записати голосове повідомлення",
		stopRecording: "Зупинити запис",
		recording: "Запис…",
		uploading: "Завантаження…",
		uploadFailed: "Не вдалося завантажити",
		voiceDenied: "Доступ до мікрофона заборонено",
		voiceUnsupported: "Браузер не підтримує запис голосу",
		fileTooLarge: "Файл завеликий (максимум 10 МБ)",
		fileMimeNotAllowed: "Цей тип файлу не підтримується",
		emoji: "Вставити емодзі",
		cancelRecording: "Скасувати запис",
		pauseRecording: "Призупинити запис",
		resumeRecording: "Продовжити запис",
		playPreview: "Прослухати запис",
		emojiPicker: "Вибір емодзі",
		emojiSearch: "Пошук…",
		playAudio: "Відтворити",
		pauseAudio: "Пауза",
		openAudio: "Відкрити аудіо",
		removeAttachment: "Видалити",
		aiAssistant: "ШІ-помічник",
		operator: "Оператор",
		openImage: "Відкрити зображення",
		openPreview: "Відкрити перегляд",
		play: "Відтворити",
		pause: "Призупинити",
		typing: "друкує…",
		aiThinking: "думає…",
		aiSearching: "переглядає…",
		typingSomeone: "Хтось",
		signInToChat: "Будь ласка, увійдіть, щоб почати розмову.",
		signInUnavailable: "Вхід наразі недоступний.",
		googleSignIn: "Вхід через аккаунт Google",
		passkeySignIn: "Увійти за допомогою passkey",
		passkeyRegister: "Вперше? Створіть passkey",
		passkeyError: "Не вдалося увійти. Спробуйте ще раз.",
		passkeyNoCredential: "На цьому пристрої ще немає passkey — натисніть «Створіть passkey», щоб додати.",
		googleSignInDemo: "Продовжити з Google",
		connectingOperator: "Оператора призначено, зачекайте…",
		assignment: { eta: {
			minutes: "Оператор відповість приблизно через {minutes} хв",
			soft: "Зазвичай ми відповідаємо протягом кількох хвилин",
			businessHours: "Команда повернеться о {time}"
		} },
		withOperator: "Тепер з вами {name}",
		operatorConnected: "Оператор приєднався",
		chatResolved: "Розмову завершено",
		chatResolvedByYou: "Розмову завершено вами",
		chatResolvedByOperator: "Розмову завершено — {name}",
		resolveConversation: "Завершити розмову",
		sources: "Джерела",
		moreSources: "+{count} ще"
	},
	prechat: {
		title: "Перш ніж почати",
		subtitle: "Кілька деталей, щоб наша команда могла швидше допомогти.",
		labelName: "Імʼя",
		labelEmail: "Електронна пошта",
		labelPhone: "Телефон",
		labelCustom: "Деталі",
		required: "Обовʼязкове поле",
		invalidEmail: "Введіть дійсну адресу електронної пошти",
		invalidPhone: "Введіть дійсний номер телефону",
		submit: "Продовжити",
		submitFailed: "Не вдалося надіслати - спробуйте ще раз."
	},
	help: {
		searchPlaceholder: "Шукати в довідці",
		emptyTitle: "Ще немає статей",
		emptyBody: "Оператор ще не опублікував жодної статті.",
		back: "Назад",
		helpful: "Чи була ця стаття корисною?",
		yes: "Так",
		no: "Ні",
		thanks: "Дякуємо за відгук.",
		unresolvedCta: "Усе ще потрібна допомога? Напишіть нам",
		noResults: "Нічого не знайдено",
		articleNotFound: "Статтю не знайдено",
		articleNotTranslated: "Ця стаття ще не доступна вашою мовою.",
		writtenBy: "Автор: {names}",
		relatedTitle: "Схожі статті",
		collectionsCount: "{count, plural, =0 {Без колекцій} one {# колекція} few {# колекції} many {# колекцій} other {# колекцій}}",
		articlesCount: "{count, plural, =0 {Без статей} one {Статей: #} few {Статей: #} many {Статей: #} other {Статей: #}}",
		authorsByline: "Автори {first}{remaining, plural, =0 {} one { та ще #} few { та ще #} many { та ще #} other { та ще #}}"
	},
	news: {
		unread: "Непрочитані новини",
		emptyTitle: "Поки що нічого нового",
		emptyBody: "Заходьте сюди за продуктовими новинами й оголошеннями.",
		helpful: "Чи була ця стаття корисною?",
		yes: "Так",
		no: "Ні",
		thanks: "Дякуємо за відгук.",
		searchPlaceholder: "Пошук у новинах",
		noResults: "Нічого не знайдено",
		editedAt: "редаговано {when}",
		articleNotFound: "Статтю не знайдено.",
		articleNotTranslated: "Цей допис ще не доступний вашою мовою.",
		readOriginal: "Читати оригінал",
		relatedTitle: "Схоже",
		writtenBy: "Автор: {names}"
	},
	reactions: {
		ariaLabel: "Реакції",
		tapAria: "Поставити {emoji}"
	},
	languageSelector: {
		title: "Читати іншою мовою",
		ariaLabel: "Мови статті"
	},
	branding: {
		poweredBy: "Працює на",
		wexio: "Wexio"
	},
	sound: {
		mute: "Вимкнути звуки сповіщень",
		unmute: "Увімкнути звуки сповіщень"
	},
	article: {
		tableOfContents: "Зміст",
		tabFallback: "Вкладка {n}"
	},
	peek: {
		newMessage: "Нове повідомлення",
		dismiss: "Закрити",
		aiAssistant: "ШІ-помічник",
		operator: "Оператор"
	},
	lightbox: {
		mediaPreview: "Перегляд медіа",
		close: "Закрити перегляд",
		previous: "Попереднє",
		next: "Наступне"
	},
	authError: {
		turnstileTitle: "Не вдалося перевірити браузер",
		turnstileBody: "Не вдалося пройти перевірку безпеки. Можливо, заважає мережа або блокувальник реклами — спробуйте ще раз або перезавантажте сторінку.",
		genericTitle: "Не вдалося підключитися",
		genericBody: "Сталася помилка під час входу. Спробуйте за мить.",
		retry: "Спробувати знову",
		dismiss: "Закрити"
	},
	profile: {
		title: "Ваш профіль",
		subtitle: "Оновіть свої дані та налаштування віджета.",
		uploadAvatar: "Змінити фото",
		removeAvatar: "Видалити фото",
		avatarUploading: "Завантаження…",
		preferencesHeading: "Налаштування",
		preferenceLanguage: "Мова",
		preferenceDesktopNotifications: "Сповіщення на робочому столі",
		preferenceDesktopNotificationsHint: "Отримуйте системне сповіщення, коли віджет неактивний.",
		preferenceThemeMode: "Тема",
		themeAuto: "Як у системі",
		themeLight: "Світла",
		themeDark: "Темна",
		themeLocked: "Тема задана оператором.",
		pinnedHint: "Задано оператором — не редагується.",
		requiredHint: "Обов'язкове",
		invalidEmail: "Введіть коректну адресу електронної пошти.",
		invalidPhone: "Використовуйте міжнародний формат, напр. +380441234567.",
		noFields: "Тут поки що нема що редагувати.",
		save: "Зберегти",
		saving: "Збереження…",
		cancel: "Скасувати",
		saved: "Зміни збережено.",
		loading: "Завантаження профілю…",
		loadError: "Не вдалося завантажити профіль. Спробуйте ще раз.",
		retry: "Повторити",
		errorFieldNotAllowed: "Це поле не редагується в цьому віджеті. Спробуйте оновити сторінку.",
		errorFieldPinned: "Це поле заблоковане вашим обліковим записом.",
		errorFieldInvalid: "Деякі значення некоректні. Перевірте підсвічені поля.",
		errorThemeLocked: "Тема заблокована оператором.",
		errorFeatureDisabled: "Редагування профілю вимкнено оператором.",
		errorGeneric: "Не вдалося зберегти зміни. Спробуйте ще раз.",
		notificationsBlocked: "Сповіщення заблоковано браузером. Оновіть дозволи сайту, щоб увімкнути.",
		notificationsRequest: "Дозвольте сповіщення в підказці браузера, щоб увімкнути.",
		systemFields: {
			avatar: "Фото",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "Дозвіл на WhatsApp",
			webVerified: "Підтверджений відвідувач",
			firstName: "Ім'я",
			lastName: "Прізвище",
			username: "Юзернейм",
			language: "Мова",
			email: "Email",
			phone: "Телефон",
			company: "Компанія",
			location: "Місцезнаходження",
			isValid: "Активний акаунт",
			chatStatus: "Статус чату",
			chatCategory: "Категорія чату",
			priority: "Пріоритет",
			leadSource: "Джерело ліда",
			leadStatus: "Статус ліда",
			interestLevel: "Рівень зацікавленості",
			productInterest: "Інтерес до продукту",
			budgetRange: "Бюджет",
			purchaseTimeline: "Терміни покупки",
			lastMessageSentAt: "Останнє надіслане",
			lastMessageReceivedAt: "Останнє отримане",
			lastSeenAt: "Останній візит",
			firstMessageReceivedAt: "Перший контакт",
			isBlocked: "Заблоковано",
			registrationDate: "Дата реєстрації",
			aiAvailable: "AI-допомога",
			totalMessagesSent: "Надіслано повідомлень",
			totalMessagesReceived: "Отримано повідомлень",
			totalAiMessagesSent: "AI-повідомлень",
			totalBotMessagesSent: "Бот-повідомлень",
			totalUserMessagesSent: "Операторських повідомлень",
			flowCompletionRate: "Завершеність флоу",
			lastFlowCompleted: "Останній завершений флоу",
			totalFlowsStarted: "Розпочато флоу",
			totalFlowsCompleted: "Завершено флоу"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Проблема",
				RESOLVED: "Вирішено",
				PENDING: "Очікує",
				IN_PROGRESS: "В процесі",
				CLOSED: "Закрито"
			},
			chatCategory: {
				SALES: "Продажі",
				SUPPORT: "Підтримка",
				BILLING: "Оплата",
				FEEDBACK: "Відгук",
				GENERAL: "Загальне",
				OTHER: "Інше"
			},
			priority: {
				LOW: "Низький",
				MEDIUM: "Середній",
				HIGH: "Високий",
				URGENT: "Терміновий"
			},
			leadStatus: {
				NEW: "Новий",
				CONTACTED: "Зв'язалися",
				QUALIFIED: "Кваліфікований",
				NEGOTIATING: "Переговори",
				WON: "Виграно",
				LOST: "Втрачено"
			},
			interestLevel: {
				LOW: "Низький",
				MEDIUM: "Середній",
				HIGH: "Високий",
				VERY_HIGH: "Дуже високий"
			}
		}
	}
}, $v = {
	tabs: {
		home: "Trang chủ",
		messages: "Tin nhắn",
		help: "Trợ giúp",
		news: "Tin tức",
		profile: "Hồ sơ"
	},
	header: {
		close: "Đóng",
		back: "Quay lại",
		conversationSubtitle: "Đội ngũ của chúng tôi cũng có thể hỗ trợ",
		helpTitle: "Trợ giúp",
		newsTitle: "Tin tức",
		expand: "Mở rộng widget",
		collapse: "Thu gọn widget"
	},
	launcher: {
		open: "Mở chat",
		close: "Đóng chat",
		loading: "Đang kết nối…"
	},
	home: {
		greetingHeadline: "Xin chào 👋",
		greetingSubheadline: "Chúng tôi có thể giúp gì cho bạn?",
		askTitle: "Đặt câu hỏi",
		askSubtitle: "Bot và đội ngũ của chúng tôi có thể giúp bạn",
		recentMessageLabel: "Tin nhắn gần đây",
		recentMessageTitle: "Tin nhắn gần đây",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 giờ",
		recentMessageSample: "Xin chào 👋 Cảm ơn bạn đã liên hệ - chúng tôi sẽ phản hồi ngay.",
		featuredArticleLoading: "Bài viết nổi bật",
		featuredArticleTap: "Nhấn để đọc",
		featuredArticleEmpty: "Chọn một bài viết",
		featuredArticleSetUp: "Cấu hình khối này trong bảng điều khiển",
		featuredArticleDemoEyebrow: "Pioneer · Ghi nhớ ngày",
		featuredArticleDemoHeadline: "Ngày 8 tháng 10, 2026",
		featuredArticleDemoSubline: "San Francisco · Trực tiếp + trực tuyến",
		featuredArticleDemoCta: "Xem chương trình ra mắt",
		seeAgenda: "Xem chương trình ra mắt",
		browseHelp: "Duyệt trợ giúp",
		whatsNew: "Có gì mới",
		searchPlaceholder: "Tìm kiếm trợ giúp",
		pinnedArticlesTitle: "Đọc trước những bài này",
		popularArticlesTitle: "Bài viết phổ biến",
		pinnedArticleRow: "Bài viết đã ghim {n}",
		newsPreviewTitle: "Tin mới nhất",
		newsPreviewRow: "Cập nhật tin tức {n}",
		myConversationsTitle: "Cuộc trò chuyện của bạn",
		myConversationsEmpty: "Xem các cuộc trò chuyện của bạn",
		teamStatusOnline: "Chúng tôi đang trực tuyến",
		teamStatusReplyTime: "Thường phản hồi trong vài phút"
	},
	messages: {
		today: "Hôm nay",
		yesterday: "Hôm qua",
		unreadMessages: "Tin nhắn chưa đọc",
		emptyTitle: "Chưa có tin nhắn",
		emptyBody: "Bắt đầu cuộc trò chuyện và đội ngũ của chúng tôi sẽ phản hồi tại đây.",
		sendCta: "Gửi tin nhắn cho chúng tôi",
		attach: "Đính kèm tệp",
		commands: "Lệnh nhanh",
		record: "Ghi tin nhắn thoại",
		stopRecording: "Dừng ghi",
		recording: "Đang ghi…",
		uploading: "Đang tải lên…",
		uploadFailed: "Tải lên thất bại",
		voiceDenied: "Quyền truy cập micro bị từ chối",
		voiceUnsupported: "Trình duyệt này không hỗ trợ ghi âm",
		fileTooLarge: "Tệp quá lớn (tối đa 10MB)",
		fileMimeNotAllowed: "Loại tệp này không được hỗ trợ",
		emoji: "Chèn emoji",
		cancelRecording: "Hủy ghi âm",
		pauseRecording: "Tạm dừng ghi",
		resumeRecording: "Tiếp tục ghi",
		playPreview: "Phát bản ghi",
		emojiPicker: "Bộ chọn emoji",
		emojiSearch: "Tìm kiếm…",
		playAudio: "Phát",
		pauseAudio: "Tạm dừng",
		openAudio: "Mở âm thanh",
		removeAttachment: "Xóa",
		aiAssistant: "Trợ lý AI",
		operator: "Nhân viên",
		openImage: "Mở hình ảnh",
		openPreview: "Mở xem trước",
		play: "Phát",
		pause: "Tạm dừng",
		typing: "đang nhập…",
		aiThinking: "đang suy nghĩ…",
		aiSearching: "đang duyệt…",
		typingSomeone: "Ai đó",
		signInToChat: "Vui lòng đăng nhập để bắt đầu cuộc trò chuyện.",
		signInUnavailable: "Đăng nhập hiện không khả dụng.",
		googleSignIn: "Đăng nhập bằng Google",
		passkeySignIn: "Đăng nhập bằng passkey",
		passkeyRegister: "Lần đầu? Thiết lập passkey",
		passkeyError: "Không thể đăng nhập. Vui lòng thử lại.",
		passkeyNoCredential: "Chưa có passkey trên thiết bị này — nhấn \"Thiết lập passkey\" để tạo.",
		googleSignInDemo: "Tiếp tục với Google",
		connectingOperator: "Đã có nhân viên hỗ trợ được chỉ định, vui lòng đợi…",
		assignment: { eta: {
			minutes: "Nhân viên sẽ trả lời trong khoảng {minutes} phút",
			soft: "Chúng tôi thường trả lời trong vài phút",
			businessHours: "Đội ngũ sẽ quay lại lúc {time}"
		} },
		withOperator: "Bạn đang trò chuyện với {name}",
		operatorConnected: "Đã kết nối với nhân viên hỗ trợ",
		chatResolved: "Cuộc trò chuyện đã được giải quyết",
		chatResolvedByYou: "Bạn đã giải quyết cuộc trò chuyện",
		chatResolvedByOperator: "{name} đã giải quyết cuộc trò chuyện",
		resolveConversation: "Giải quyết cuộc trò chuyện",
		sources: "Nguồn",
		moreSources: "+{count} nữa"
	},
	prechat: {
		title: "Trước khi bắt đầu",
		subtitle: "Vài thông tin nhanh để đội ngũ của chúng tôi hỗ trợ bạn nhanh hơn.",
		labelName: "Tên",
		labelEmail: "Email",
		labelPhone: "Điện thoại",
		labelCustom: "Chi tiết",
		required: "Bắt buộc",
		invalidEmail: "Vui lòng nhập email hợp lệ",
		invalidPhone: "Vui lòng nhập số điện thoại hợp lệ",
		submit: "Tiếp tục",
		submitFailed: "Không thể gửi - vui lòng thử lại."
	},
	help: {
		searchPlaceholder: "Tìm kiếm trợ giúp",
		emptyTitle: "Chưa có bài viết nào",
		emptyBody: "Quản trị viên chưa xuất bản nội dung nào.",
		back: "Quay lại",
		helpful: "Bài viết có hữu ích không?",
		yes: "Có",
		no: "Không",
		thanks: "Cảm ơn phản hồi của bạn.",
		unresolvedCta: "Vẫn cần trợ giúp? Hãy nhắn cho chúng tôi",
		noResults: "Không có kết quả",
		articleNotFound: "Không tìm thấy bài viết",
		articleNotTranslated: "Bài viết này chưa có bằng ngôn ngữ của bạn.",
		writtenBy: "Viết bởi {names}",
		relatedTitle: "Bài viết liên quan",
		collectionsCount: "{count, plural, =0 {Không có bộ sưu tập} other {# bộ sưu tập}}",
		articlesCount: "{count, plural, =0 {Không có bài viết} other {Bài viết: #}}",
		authorsByline: "Tác giả {first}{remaining, plural, =0 {} other { và # khác}}"
	},
	news: {
		unread: "Tin tức chưa đọc",
		emptyTitle: "Chưa có cập nhật nào",
		emptyBody: "Hãy quay lại đây để xem tin tức và thông báo về sản phẩm.",
		helpful: "Bài viết có hữu ích không?",
		yes: "Có",
		no: "Không",
		thanks: "Cảm ơn phản hồi của bạn.",
		searchPlaceholder: "Tìm kiếm tin tức",
		noResults: "Không tìm thấy bài đăng phù hợp",
		editedAt: "đã chỉnh sửa {when}",
		articleNotFound: "Không tìm thấy bài viết.",
		articleNotTranslated: "Bài đăng này chưa có bằng ngôn ngữ của bạn.",
		readOriginal: "Đọc bản gốc",
		relatedTitle: "Liên quan",
		writtenBy: "Viết bởi {names}"
	},
	reactions: {
		ariaLabel: "Phản hồi",
		tapAria: "Phản hồi với {emoji}"
	},
	languageSelector: {
		title: "Đọc bằng ngôn ngữ khác",
		ariaLabel: "Ngôn ngữ bài viết"
	},
	branding: {
		poweredBy: "Vận hành bởi",
		wexio: "Wexio"
	},
	sound: {
		mute: "Tắt âm thông báo",
		unmute: "Bật âm thông báo"
	},
	article: {
		tableOfContents: "Mục lục",
		tabFallback: "Tab {n}"
	},
	peek: {
		newMessage: "Tin nhắn mới",
		dismiss: "Bỏ qua",
		aiAssistant: "Trợ lý AI",
		operator: "Nhân viên"
	},
	lightbox: {
		mediaPreview: "Xem trước media",
		close: "Đóng xem trước",
		previous: "Trước",
		next: "Tiếp"
	},
	authError: {
		turnstileTitle: "Không xác minh được trình duyệt",
		turnstileBody: "Chúng tôi không thể hoàn thành kiểm tra bảo mật. Đôi khi là vấn đề mạng hoặc trình chặn quảng cáo — thử lại, hoặc tải lại trang.",
		genericTitle: "Không thể kết nối",
		genericBody: "Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau giây lát.",
		retry: "Thử lại",
		dismiss: "Bỏ qua"
	},
	profile: {
		title: "Hồ sơ của bạn",
		subtitle: "Cập nhật thông tin và cách widget hoạt động.",
		uploadAvatar: "Đổi ảnh",
		removeAvatar: "Xóa ảnh",
		avatarUploading: "Đang tải lên…",
		preferencesHeading: "Tùy chọn",
		preferenceLanguage: "Ngôn ngữ",
		preferenceDesktopNotifications: "Thông báo trên máy tính",
		preferenceDesktopNotificationsHint: "Nhận thông báo hệ thống khi widget không được tập trung.",
		preferenceThemeMode: "Giao diện",
		themeAuto: "Theo hệ thống",
		themeLight: "Sáng",
		themeDark: "Tối",
		themeLocked: "Giao diện được đặt bởi nhân viên.",
		pinnedHint: "Được đặt bởi nhân viên — không thể chỉnh sửa.",
		requiredHint: "Bắt buộc",
		invalidEmail: "Vui lòng nhập địa chỉ email hợp lệ.",
		invalidPhone: "Sử dụng định dạng quốc tế, ví dụ +14155552671.",
		noFields: "Chưa có gì để chỉnh sửa ở đây.",
		save: "Lưu thay đổi",
		saving: "Đang lưu…",
		cancel: "Hủy",
		saved: "Đã lưu thay đổi.",
		loading: "Đang tải hồ sơ…",
		loadError: "Không tải được hồ sơ. Vui lòng thử lại.",
		retry: "Thử lại",
		errorFieldNotAllowed: "Trường này không chỉnh sửa được trong widget này. Thử làm mới trang.",
		errorFieldPinned: "Trường này bị khóa bởi tài khoản của bạn.",
		errorFieldInvalid: "Một số giá trị không hợp lệ. Kiểm tra các trường được đánh dấu.",
		errorThemeLocked: "Giao diện bị khóa bởi nhân viên.",
		errorFeatureDisabled: "Việc chỉnh sửa hồ sơ đã bị tắt bởi nhân viên.",
		errorGeneric: "Không lưu được thay đổi. Vui lòng thử lại.",
		notificationsBlocked: "Thông báo bị trình duyệt chặn. Cập nhật quyền của trang để bật.",
		notificationsRequest: "Cho phép thông báo khi được hỏi để bật tính năng này.",
		systemFields: {
			avatar: "Ảnh",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "Đồng ý WhatsApp",
			webVerified: "Khách đã xác minh",
			firstName: "Tên",
			lastName: "Họ",
			username: "Tên người dùng",
			language: "Ngôn ngữ",
			email: "Email",
			phone: "Điện thoại",
			company: "Công ty",
			location: "Vị trí",
			isValid: "Tài khoản hợp lệ",
			chatStatus: "Trạng thái chat",
			chatCategory: "Danh mục chat",
			priority: "Mức độ ưu tiên",
			leadSource: "Nguồn lead",
			leadStatus: "Trạng thái lead",
			interestLevel: "Mức độ quan tâm",
			productInterest: "Sản phẩm quan tâm",
			budgetRange: "Ngân sách",
			purchaseTimeline: "Thời gian mua",
			lastMessageSentAt: "Tin gửi gần nhất",
			lastMessageReceivedAt: "Tin nhận gần nhất",
			lastSeenAt: "Lần xem gần nhất",
			firstMessageReceivedAt: "Liên hệ đầu tiên",
			isBlocked: "Bị chặn",
			registrationDate: "Đã đăng ký",
			aiAvailable: "Hỗ trợ AI",
			totalMessagesSent: "Tin nhắn đã gửi",
			totalMessagesReceived: "Tin nhắn đã nhận",
			totalAiMessagesSent: "Tin nhắn AI đã gửi",
			totalBotMessagesSent: "Tin nhắn bot đã gửi",
			totalUserMessagesSent: "Tin nhắn nhân viên đã gửi",
			flowCompletionRate: "Tỷ lệ hoàn thành flow",
			lastFlowCompleted: "Flow hoàn thành gần nhất",
			totalFlowsStarted: "Flow đã bắt đầu",
			totalFlowsCompleted: "Flow đã hoàn thành"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "Sự cố",
				RESOLVED: "Đã giải quyết",
				PENDING: "Đang chờ",
				IN_PROGRESS: "Đang xử lý",
				CLOSED: "Đã đóng"
			},
			chatCategory: {
				SALES: "Bán hàng",
				SUPPORT: "Hỗ trợ",
				BILLING: "Thanh toán",
				FEEDBACK: "Phản hồi",
				GENERAL: "Chung",
				OTHER: "Khác"
			},
			priority: {
				LOW: "Thấp",
				MEDIUM: "Trung bình",
				HIGH: "Cao",
				URGENT: "Khẩn cấp"
			},
			leadStatus: {
				NEW: "Mới",
				CONTACTED: "Đã liên hệ",
				QUALIFIED: "Đã đủ điều kiện",
				NEGOTIATING: "Đang đàm phán",
				WON: "Thắng",
				LOST: "Thua"
			},
			interestLevel: {
				LOW: "Thấp",
				MEDIUM: "Trung bình",
				HIGH: "Cao",
				VERY_HIGH: "Rất cao"
			}
		}
	}
}, ey = {
	tabs: {
		home: "首页",
		messages: "消息",
		help: "帮助",
		news: "动态",
		profile: "个人资料"
	},
	header: {
		close: "关闭",
		back: "返回",
		conversationSubtitle: "我们的团队也可以提供帮助",
		helpTitle: "帮助",
		newsTitle: "动态",
		expand: "展开小部件",
		collapse: "收起小部件"
	},
	launcher: {
		open: "打开聊天",
		close: "关闭聊天",
		loading: "正在连接…"
	},
	home: {
		greetingHeadline: "你好 👋",
		greetingSubheadline: "有什么可以帮您?",
		askTitle: "提问",
		askSubtitle: "我们的机器人和团队可以提供帮助",
		recentMessageLabel: "最近消息",
		recentMessageTitle: "最近消息",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 小时前",
		recentMessageSample: "你好 👋 感谢您的咨询 - 我们将很快回复您。",
		featuredArticleLoading: "推荐文章",
		featuredArticleTap: "点击阅读",
		featuredArticleEmpty: "选择一篇文章",
		featuredArticleSetUp: "在控制台中配置此模块",
		featuredArticleDemoEyebrow: "Pioneer · 敬请期待",
		featuredArticleDemoHeadline: "2026 年 10 月 8 日",
		featuredArticleDemoSubline: "旧金山 · 现场 + 线上",
		featuredArticleDemoCta: "查看发布日程",
		seeAgenda: "查看发布日程",
		browseHelp: "浏览帮助",
		whatsNew: "新动态",
		searchPlaceholder: "搜索帮助",
		pinnedArticlesTitle: "请先阅读",
		popularArticlesTitle: "热门文章",
		pinnedArticleRow: "置顶文章 {n}",
		newsPreviewTitle: "最新动态",
		newsPreviewRow: "动态更新 {n}",
		myConversationsTitle: "您的对话",
		myConversationsEmpty: "查看您的对话",
		teamStatusOnline: "我们在线",
		teamStatusReplyTime: "通常几分钟内回复"
	},
	messages: {
		today: "今天",
		yesterday: "昨天",
		unreadMessages: "未读消息",
		emptyTitle: "暂无消息",
		emptyBody: "开始对话,我们的团队将在这里回复您。",
		sendCta: "给我们发消息",
		attach: "附加文件",
		commands: "快捷命令",
		record: "录制语音消息",
		stopRecording: "停止录音",
		recording: "正在录音…",
		uploading: "正在上传…",
		uploadFailed: "上传失败",
		voiceDenied: "麦克风访问被拒绝",
		voiceUnsupported: "此浏览器不支持语音录制",
		fileTooLarge: "文件过大(最大 10MB)",
		fileMimeNotAllowed: "不支持此文件类型",
		emoji: "插入表情符号",
		cancelRecording: "取消录音",
		pauseRecording: "暂停录音",
		resumeRecording: "继续录音",
		playPreview: "播放录音",
		emojiPicker: "表情选择器",
		emojiSearch: "搜索…",
		playAudio: "播放",
		pauseAudio: "暂停",
		openAudio: "打开音频",
		removeAttachment: "移除",
		aiAssistant: "AI 助手",
		operator: "客服",
		openImage: "打开图片",
		openPreview: "打开预览",
		play: "播放",
		pause: "暂停",
		typing: "正在输入…",
		aiThinking: "思考中…",
		aiSearching: "浏览中…",
		typingSomeone: "有人",
		signInToChat: "请登录以开始对话。",
		signInUnavailable: "登录暂时不可用。",
		googleSignIn: "使用 Google 登录",
		passkeySignIn: "使用通行密钥登录",
		passkeyRegister: "第一次? 设置通行密钥",
		passkeyError: "无法登录。请重试。",
		passkeyNoCredential: "此设备上还没有通行密钥 — 点击\"设置通行密钥\"创建一个。",
		googleSignInDemo: "使用 Google 继续",
		connectingOperator: "已分配客服,请稍候…",
		assignment: { eta: {
			minutes: "客服将在约 {minutes} 分钟内回复",
			soft: "我们通常会在几分钟内回复",
			businessHours: "团队将在 {time} 恢复在线"
		} },
		withOperator: "您现在正在与 {name} 聊天",
		operatorConnected: "客服已连接",
		chatResolved: "对话已解决",
		chatResolvedByYou: "您已解决此对话",
		chatResolvedByOperator: "{name} 已解决此对话",
		resolveConversation: "解决对话",
		sources: "来源",
		moreSources: "还有 {count} 个"
	},
	prechat: {
		title: "开始之前",
		subtitle: "提供一些信息,让我们的团队能更快帮助您。",
		labelName: "姓名",
		labelEmail: "邮箱",
		labelPhone: "电话",
		labelCustom: "详情",
		required: "必填",
		invalidEmail: "请输入有效的邮箱地址",
		invalidPhone: "请输入有效的电话号码",
		submit: "继续",
		submitFailed: "无法提交 - 请重试。"
	},
	help: {
		searchPlaceholder: "搜索帮助",
		emptyTitle: "暂无文章",
		emptyBody: "客服尚未发布任何内容。",
		back: "返回",
		helpful: "这篇文章对您有帮助吗?",
		yes: "有",
		no: "没有",
		thanks: "感谢您的反馈。",
		unresolvedCta: "仍需帮助? 给我们发消息",
		noResults: "没有结果",
		articleNotFound: "未找到文章",
		articleNotTranslated: "此文章暂未提供您所用语言的版本。",
		writtenBy: "作者: {names}",
		relatedTitle: "相关文章",
		collectionsCount: "{count, plural, =0 {无合集} other {# 个合集}}",
		articlesCount: "{count, plural, =0 {无文章} other {文章: #}}",
		authorsByline: "作者 {first}{remaining, plural, =0 {} other { 及其他 # 人}}"
	},
	news: {
		emptyTitle: "暂无更新",
		emptyBody: "请回来这里查看产品动态和公告。",
		helpful: "这篇文章对您有帮助吗?",
		yes: "有",
		no: "没有",
		thanks: "感谢您的反馈。",
		searchPlaceholder: "搜索动态",
		noResults: "没有匹配的内容",
		editedAt: "{when}编辑",
		articleNotFound: "未找到文章。",
		articleNotTranslated: "此文章暂未提供您所用语言的版本。",
		readOriginal: "阅读原文",
		relatedTitle: "相关",
		writtenBy: "作者: {names}",
		unread: "未读动态"
	},
	reactions: {
		ariaLabel: "回应",
		tapAria: "用 {emoji} 回应"
	},
	languageSelector: {
		title: "用其他语言阅读",
		ariaLabel: "文章语言"
	},
	branding: {
		poweredBy: "由以下提供支持:",
		wexio: "Wexio"
	},
	sound: {
		mute: "静音通知声音",
		unmute: "取消静音通知声音"
	},
	article: {
		tableOfContents: "目录",
		tabFallback: "标签 {n}"
	},
	peek: {
		newMessage: "新消息",
		dismiss: "关闭",
		aiAssistant: "AI 助手",
		operator: "客服"
	},
	lightbox: {
		mediaPreview: "媒体预览",
		close: "关闭预览",
		previous: "上一个",
		next: "下一个"
	},
	authError: {
		turnstileTitle: "无法验证您的浏览器",
		turnstileBody: "我们无法完成安全检查。有时是网络或广告拦截器问题 — 请重试或刷新页面。",
		genericTitle: "无法连接",
		genericBody: "登录时出现问题。请稍后重试。",
		retry: "重试",
		dismiss: "关闭"
	},
	profile: {
		title: "您的资料",
		subtitle: "更新您的信息和小部件行为。",
		uploadAvatar: "更换照片",
		removeAvatar: "删除照片",
		avatarUploading: "正在上传…",
		preferencesHeading: "偏好设置",
		preferenceLanguage: "语言",
		preferenceDesktopNotifications: "桌面通知",
		preferenceDesktopNotificationsHint: "当小部件未聚焦时接收系统通知。",
		preferenceThemeMode: "主题",
		themeAuto: "跟随系统",
		themeLight: "浅色",
		themeDark: "深色",
		themeLocked: "主题由客服设置。",
		pinnedHint: "由客服设置 — 不可编辑。",
		requiredHint: "必填",
		invalidEmail: "请输入有效的邮箱地址。",
		invalidPhone: "请使用国际格式,例如 +14155552671。",
		noFields: "这里暂时没有可编辑的内容。",
		save: "保存更改",
		saving: "正在保存…",
		cancel: "放弃",
		saved: "更改已保存。",
		loading: "正在加载资料…",
		loadError: "无法加载您的资料。请重试。",
		retry: "重试",
		errorFieldNotAllowed: "此字段在本小部件中不可编辑。请尝试刷新。",
		errorFieldPinned: "此字段已被您的账户锁定。",
		errorFieldInvalid: "某些值无效。请检查高亮字段。",
		errorThemeLocked: "主题已被客服锁定。",
		errorFeatureDisabled: "客服已关闭资料编辑功能。",
		errorGeneric: "无法保存您的更改。请重试。",
		notificationsBlocked: "浏览器已阻止通知。请更新站点权限以启用。",
		notificationsRequest: "请在弹窗中允许通知以启用此功能。",
		systemFields: {
			avatar: "照片",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp 订阅",
			webVerified: "已验证访客",
			firstName: "名",
			lastName: "姓",
			username: "用户名",
			language: "语言",
			email: "邮箱",
			phone: "电话",
			company: "公司",
			location: "位置",
			isValid: "账户有效",
			chatStatus: "聊天状态",
			chatCategory: "聊天类别",
			priority: "优先级",
			leadSource: "线索来源",
			leadStatus: "线索状态",
			interestLevel: "兴趣等级",
			productInterest: "产品兴趣",
			budgetRange: "预算",
			purchaseTimeline: "采购时间",
			lastMessageSentAt: "最后发送",
			lastMessageReceivedAt: "最后接收",
			lastSeenAt: "最后访问",
			firstMessageReceivedAt: "首次联系",
			isBlocked: "已屏蔽",
			registrationDate: "注册日期",
			aiAvailable: "AI 协助",
			totalMessagesSent: "已发送消息",
			totalMessagesReceived: "已接收消息",
			totalAiMessagesSent: "AI 发送消息",
			totalBotMessagesSent: "机器人发送消息",
			totalUserMessagesSent: "客服发送消息",
			flowCompletionRate: "流程完成率",
			lastFlowCompleted: "最后完成的流程",
			totalFlowsStarted: "已开始流程",
			totalFlowsCompleted: "已完成流程"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "问题",
				RESOLVED: "已解决",
				PENDING: "待处理",
				IN_PROGRESS: "进行中",
				CLOSED: "已关闭"
			},
			chatCategory: {
				SALES: "销售",
				SUPPORT: "支持",
				BILLING: "账单",
				FEEDBACK: "反馈",
				GENERAL: "通用",
				OTHER: "其他"
			},
			priority: {
				LOW: "低",
				MEDIUM: "中",
				HIGH: "高",
				URGENT: "紧急"
			},
			leadStatus: {
				NEW: "新建",
				CONTACTED: "已联系",
				QUALIFIED: "已认证",
				NEGOTIATING: "协商中",
				WON: "赢单",
				LOST: "丢单"
			},
			interestLevel: {
				LOW: "低",
				MEDIUM: "中",
				HIGH: "高",
				VERY_HIGH: "非常高"
			}
		}
	}
}, ty = {
	tabs: {
		home: "首頁",
		messages: "訊息",
		help: "說明",
		news: "最新消息",
		profile: "個人資料"
	},
	header: {
		close: "關閉",
		back: "返回",
		conversationSubtitle: "我們的團隊也能提供協助",
		helpTitle: "說明",
		newsTitle: "最新消息",
		expand: "展開小工具",
		collapse: "收合小工具"
	},
	launcher: {
		open: "開啟聊天",
		close: "關閉聊天",
		loading: "連線中…"
	},
	home: {
		greetingHeadline: "您好 👋",
		greetingSubheadline: "我們能為您做些什麼?",
		askTitle: "提出問題",
		askSubtitle: "我們的機器人和團隊可以提供協助",
		recentMessageLabel: "最近訊息",
		recentMessageTitle: "最近訊息",
		recentMessageFromFallback: "Gaia",
		recentMessageAgo: "4 小時前",
		recentMessageSample: "您好 👋 感謝您的聯絡 - 我們會盡快回覆您。",
		featuredArticleLoading: "精選文章",
		featuredArticleTap: "點擊閱讀",
		featuredArticleEmpty: "選擇一篇文章",
		featuredArticleSetUp: "在儀表板中設定此區塊",
		featuredArticleDemoEyebrow: "Pioneer · 請記下日期",
		featuredArticleDemoHeadline: "2026 年 10 月 8 日",
		featuredArticleDemoSubline: "舊金山 · 現場 + 線上",
		featuredArticleDemoCta: "查看發表議程",
		seeAgenda: "查看發表議程",
		browseHelp: "瀏覽說明",
		whatsNew: "最新動態",
		searchPlaceholder: "搜尋說明",
		pinnedArticlesTitle: "請先閱讀這些",
		popularArticlesTitle: "熱門文章",
		pinnedArticleRow: "釘選文章 {n}",
		newsPreviewTitle: "最新消息",
		newsPreviewRow: "消息更新 {n}",
		myConversationsTitle: "您的對話",
		myConversationsEmpty: "查看您的對話",
		teamStatusOnline: "我們在線上",
		teamStatusReplyTime: "通常數分鐘內回覆"
	},
	messages: {
		today: "今天",
		yesterday: "昨天",
		unreadMessages: "未讀訊息",
		emptyTitle: "尚無訊息",
		emptyBody: "開始對話,我們的團隊會在這裡回覆您。",
		sendCta: "傳送訊息給我們",
		attach: "附加檔案",
		commands: "快速指令",
		record: "錄製語音訊息",
		stopRecording: "停止錄音",
		recording: "錄音中…",
		uploading: "上傳中…",
		uploadFailed: "上傳失敗",
		voiceDenied: "麥克風存取已遭拒",
		voiceUnsupported: "此瀏覽器不支援語音錄製",
		fileTooLarge: "檔案過大(最大 10MB)",
		fileMimeNotAllowed: "不支援此檔案類型",
		emoji: "插入表情符號",
		cancelRecording: "取消錄音",
		pauseRecording: "暫停錄音",
		resumeRecording: "繼續錄音",
		playPreview: "播放錄音",
		emojiPicker: "表情符號選擇器",
		emojiSearch: "搜尋…",
		playAudio: "播放",
		pauseAudio: "暫停",
		openAudio: "開啟音訊",
		removeAttachment: "移除",
		aiAssistant: "AI 助理",
		operator: "客服",
		openImage: "開啟圖片",
		openPreview: "開啟預覽",
		play: "播放",
		pause: "暫停",
		typing: "輸入中…",
		aiThinking: "思考中…",
		aiSearching: "瀏覽中…",
		typingSomeone: "有人",
		signInToChat: "請登入以開始對話。",
		signInUnavailable: "目前無法登入。",
		googleSignIn: "使用 Google 登入",
		passkeySignIn: "使用通行金鑰登入",
		passkeyRegister: "第一次嗎? 設定通行金鑰",
		passkeyError: "無法登入。請再試一次。",
		passkeyNoCredential: "此裝置上尚無通行金鑰 — 點擊「設定通行金鑰」來建立一個。",
		googleSignInDemo: "使用 Google 繼續",
		connectingOperator: "已指派客服,請稍候…",
		assignment: { eta: {
			minutes: "客服將在約 {minutes} 分鐘內回覆",
			soft: "我們通常會在幾分鐘內回覆",
			businessHours: "團隊將在 {time} 恢復上線"
		} },
		withOperator: "您現在正在與 {name} 聊天",
		operatorConnected: "客服已連線",
		chatResolved: "對話已解決",
		chatResolvedByYou: "您已解決此對話",
		chatResolvedByOperator: "{name} 已解決此對話",
		resolveConversation: "解決對話",
		sources: "來源",
		moreSources: "還有 {count} 個"
	},
	prechat: {
		title: "開始之前",
		subtitle: "請提供一些資訊,讓我們的團隊能更快協助您。",
		labelName: "姓名",
		labelEmail: "電子郵件",
		labelPhone: "電話",
		labelCustom: "詳細資訊",
		required: "必填",
		invalidEmail: "請輸入有效的電子郵件",
		invalidPhone: "請輸入有效的電話號碼",
		submit: "繼續",
		submitFailed: "無法送出 - 請再試一次。"
	},
	help: {
		searchPlaceholder: "搜尋說明",
		emptyTitle: "尚無文章",
		emptyBody: "客服尚未發布任何內容。",
		back: "返回",
		helpful: "這篇文章對您有幫助嗎?",
		yes: "有",
		no: "沒有",
		thanks: "感謝您的回饋。",
		unresolvedCta: "仍需協助? 傳送訊息給我們",
		noResults: "沒有結果",
		articleNotFound: "找不到文章",
		articleNotTranslated: "本文章尚未提供您所用語言的版本。",
		writtenBy: "作者:{names}",
		relatedTitle: "相關文章",
		collectionsCount: "{count, plural, =0 {無合集} other {# 個合集}}",
		articlesCount: "{count, plural, =0 {無文章} other {文章: #}}",
		authorsByline: "作者 {first}{remaining, plural, =0 {} other { 及其他 # 人}}"
	},
	news: {
		emptyTitle: "尚無更新",
		emptyBody: "請回到此處查看產品消息與公告。",
		helpful: "這篇文章對您有幫助嗎?",
		yes: "有",
		no: "沒有",
		thanks: "感謝您的回饋。",
		searchPlaceholder: "搜尋消息",
		noResults: "沒有相符的內容",
		editedAt: "於 {when} 編輯",
		articleNotFound: "找不到文章。",
		articleNotTranslated: "本貼文尚未提供您所用語言的版本。",
		readOriginal: "閱讀原文",
		relatedTitle: "相關",
		writtenBy: "作者:{names}",
		unread: "未讀消息"
	},
	reactions: {
		ariaLabel: "回應",
		tapAria: "用 {emoji} 回應"
	},
	languageSelector: {
		title: "以其他語言閱讀",
		ariaLabel: "文章語言"
	},
	branding: {
		poweredBy: "技術支援:",
		wexio: "Wexio"
	},
	sound: {
		mute: "靜音通知聲響",
		unmute: "取消靜音通知聲響"
	},
	article: {
		tableOfContents: "目錄",
		tabFallback: "分頁 {n}"
	},
	peek: {
		newMessage: "新訊息",
		dismiss: "關閉",
		aiAssistant: "AI 助理",
		operator: "客服"
	},
	lightbox: {
		mediaPreview: "媒體預覽",
		close: "關閉預覽",
		previous: "上一個",
		next: "下一個"
	},
	authError: {
		turnstileTitle: "無法驗證您的瀏覽器",
		turnstileBody: "我們無法完成安全檢查。有時這是網路或廣告封鎖工具的問題 — 請重試或重新載入頁面。",
		genericTitle: "無法連線",
		genericBody: "登入時發生問題。請稍候再試。",
		retry: "再試一次",
		dismiss: "關閉"
	},
	profile: {
		title: "您的個人資料",
		subtitle: "更新您的資訊及小工具的行為。",
		uploadAvatar: "更換照片",
		removeAvatar: "移除照片",
		avatarUploading: "上傳中…",
		preferencesHeading: "偏好設定",
		preferenceLanguage: "語言",
		preferenceDesktopNotifications: "桌面通知",
		preferenceDesktopNotificationsHint: "當小工具未獲焦點時接收系統通知。",
		preferenceThemeMode: "主題",
		themeAuto: "跟隨系統",
		themeLight: "淺色",
		themeDark: "深色",
		themeLocked: "主題由客服設定。",
		pinnedHint: "由客服設定 — 不可編輯。",
		requiredHint: "必填",
		invalidEmail: "請輸入有效的電子郵件地址。",
		invalidPhone: "請使用國際格式,例如 +14155552671。",
		noFields: "目前此處沒有可編輯的項目。",
		save: "儲存變更",
		saving: "儲存中…",
		cancel: "捨棄",
		saved: "變更已儲存。",
		loading: "載入個人資料中…",
		loadError: "無法載入您的個人資料。請再試一次。",
		retry: "重試",
		errorFieldNotAllowed: "此欄位在本小工具中無法編輯。請嘗試重新整理。",
		errorFieldPinned: "此欄位已被您的帳戶鎖定。",
		errorFieldInvalid: "部分值無效。請檢查標示的欄位。",
		errorThemeLocked: "主題已由客服鎖定。",
		errorFeatureDisabled: "客服已停用個人資料編輯。",
		errorGeneric: "無法儲存您的變更。請再試一次。",
		notificationsBlocked: "瀏覽器已封鎖通知。請更新網站權限以啟用。",
		notificationsRequest: "請在出現提示時允許通知以啟用此功能。",
		systemFields: {
			avatar: "照片",
			wexioId: "Wexio ID",
			telegramId: "Telegram ID",
			whatsappId: "WhatsApp ID",
			viberId: "Viber ID",
			instagramId: "Instagram ID",
			optInWhatsapp: "WhatsApp 訂閱",
			webVerified: "已驗證訪客",
			firstName: "名字",
			lastName: "姓氏",
			username: "使用者名稱",
			language: "語言",
			email: "電子郵件",
			phone: "電話",
			company: "公司",
			location: "位置",
			isValid: "帳戶有效",
			chatStatus: "對話狀態",
			chatCategory: "對話類別",
			priority: "優先順序",
			leadSource: "潛在客戶來源",
			leadStatus: "潛在客戶狀態",
			interestLevel: "興趣程度",
			productInterest: "產品興趣",
			budgetRange: "預算",
			purchaseTimeline: "採購時程",
			lastMessageSentAt: "最後傳送",
			lastMessageReceivedAt: "最後收到",
			lastSeenAt: "最後上線",
			firstMessageReceivedAt: "首次聯絡",
			isBlocked: "已封鎖",
			registrationDate: "註冊日期",
			aiAvailable: "AI 協助",
			totalMessagesSent: "已傳送訊息",
			totalMessagesReceived: "已收到訊息",
			totalAiMessagesSent: "AI 傳送訊息",
			totalBotMessagesSent: "機器人傳送訊息",
			totalUserMessagesSent: "客服傳送訊息",
			flowCompletionRate: "流程完成率",
			lastFlowCompleted: "最後完成的流程",
			totalFlowsStarted: "已開始的流程",
			totalFlowsCompleted: "已完成的流程"
		},
		systemFieldOptions: {
			chatStatus: {
				ISSUE: "問題",
				RESOLVED: "已解決",
				PENDING: "待處理",
				IN_PROGRESS: "進行中",
				CLOSED: "已關閉"
			},
			chatCategory: {
				SALES: "業務",
				SUPPORT: "支援",
				BILLING: "帳單",
				FEEDBACK: "意見回饋",
				GENERAL: "一般",
				OTHER: "其他"
			},
			priority: {
				LOW: "低",
				MEDIUM: "中",
				HIGH: "高",
				URGENT: "緊急"
			},
			leadStatus: {
				NEW: "新建",
				CONTACTED: "已聯絡",
				QUALIFIED: "已認證",
				NEGOTIATING: "協商中",
				WON: "成交",
				LOST: "流失"
			},
			interestLevel: {
				LOW: "低",
				MEDIUM: "中",
				HIGH: "高",
				VERY_HIGH: "非常高"
			}
		}
	}
}, ny = "/*! tailwindcss v4.3.0 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\"}::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\"}}}@layer theme{:root,:host{--font-sans:var(--font-geist-sans);--font-mono:var(--font-geist-mono);--color-amber-300:#ffd236;--color-emerald-300:#5ee9b5;--color-sky-300:#77d4ff;--color-violet-300:#c4b4ff;--color-rose-300:#ffa2ae;--color-zinc-100:#f4f4f5;--color-zinc-500:#71717b;--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height:calc(2.25 / 1.875);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wide:.025em;--tracking-wider:.05em;--leading-tight:1.25;--leading-snug:1.375;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--ease-in:cubic-bezier(.4, 0, 1, 1);--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-bounce:bounce 1s infinite;--blur-sm:8px;--blur-md:12px;--blur-lg:16px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-geist-sans);--default-mono-font-family:var(--font-geist-mono);--color-wx-bg:var(--wx-bg);--color-wx-bg-elevated:var(--wx-bg-elevated);--color-wx-bg-elevated-2:var(--wx-bg-elevated-2);--color-wx-fg:var(--wx-fg);--color-wx-fg-muted:var(--wx-fg-muted);--color-wx-fg-subtle:var(--wx-fg-subtle);--color-wx-border:var(--wx-border);--color-wx-border-strong:var(--wx-border-strong);--color-wx-primary:var(--wx-primary);--color-wx-primary-hover:var(--wx-primary-hover);--color-wx-primary-fg:var(--wx-primary-fg);--color-wx-launcher-bg:var(--wx-launcher-bg);--color-wx-launcher-fg:var(--wx-launcher-fg);--color-wx-success:var(--wx-success);--color-wx-danger:var(--wx-danger);--radius-wx-sm:var(--wx-radius-sm);--radius-wx:var(--wx-radius);--radius-wx-lg:var(--wx-radius-lg);--radius-wx-xl:var(--wx-radius-xl)}@supports (color:color(display-p3 0 0 0)){:root,:host{--color-amber-300:color(display-p3 .974327 .83063 .33298);--color-emerald-300:color(display-p3 .524941 .903425 .722352);--color-sky-300:color(display-p3 .546356 .822561 .990576);--color-violet-300:color(display-p3 .758872 .706261 .991729);--color-rose-300:color(display-p3 .96017 .647703 .683715);--color-zinc-100:color(display-p3 .956385 .956385 .959079);--color-zinc-500:color(display-p3 .442983 .442931 .480324)}}@supports (color:lab(0% 0 0)){:root,:host{--color-amber-300:lab(86.4156% 6.13147 78.3961);--color-emerald-300:lab(83.9203% -48.7124 13.8849);--color-sky-300:lab(80.3307% -20.2945 -31.385);--color-violet-300:lab(76.7419% 18.3911 -37.0706);--color-rose-300:lab(76.6339% 38.3549 9.68835);--color-zinc-100:lab(96.1634% .0993311 -.364041);--color-zinc-500:lab(47.8878% 1.65477 -5.77283)}}}@layer base{*,:after,:before{box-sizing:border-box;border:0 solid;margin:0;padding:0}::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::-webkit-file-upload-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::-webkit-file-upload-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:-webkit-any([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:-webkit-any([multiple],[size])) optgroup option{padding-inline-start:20px}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::-webkit-file-upload-button{margin-inline-end:4px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-year-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-month-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-day-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-hour-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-minute-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-second-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-millisecond-field{padding-block-start:0;padding-block-end:0}::-webkit-datetime-edit-meridiem-field{padding-block-start:0;padding-block-end:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button{-webkit-appearance:button;appearance:button}input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;appearance:button}::-webkit-file-upload-button{-webkit-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip-path:none;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.-inset-1{inset:calc(var(--spacing) * -1)}.-inset-2{inset:calc(var(--spacing) * -2)}.inset-0{inset:calc(var(--spacing) * 0)}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.inset-x-2{inset-inline:calc(var(--spacing) * 2)}.-top-1{top:calc(var(--spacing) * -1)}.-top-1\\.5{top:calc(var(--spacing) * -1.5)}.-top-8{top:calc(var(--spacing) * -8)}.top-0{top:calc(var(--spacing) * 0)}.top-0\\.5{top:calc(var(--spacing) * .5)}.top-1{top:calc(var(--spacing) * 1)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-4{top:calc(var(--spacing) * 4)}.-right-1{right:calc(var(--spacing) * -1)}.-right-1\\.5{right:calc(var(--spacing) * -1.5)}.-right-2{right:calc(var(--spacing) * -2)}.right-0{right:calc(var(--spacing) * 0)}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-5{right:calc(var(--spacing) * 5)}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-5{bottom:calc(var(--spacing) * 5)}.bottom-24{bottom:calc(var(--spacing) * 24)}.bottom-full{bottom:100%}.left-0{left:calc(var(--spacing) * 0)}.left-0\\.5{left:calc(var(--spacing) * .5)}.left-1{left:calc(var(--spacing) * 1)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-3\\.5{left:calc(var(--spacing) * 3.5)}.left-4{left:calc(var(--spacing) * 4)}.isolate{isolation:isolate}.isolation-auto{isolation:auto}.-z-10{z-index:calc(10 * -1)}.z-10{z-index:10}.z-20{z-index:20}.z-40{z-index:40}.z-50{z-index:50}.z-2147483599{z-index:2147483599}.z-2147483600{z-index:2147483600}.z-2147483601{z-index:2147483601}.z-2147483602{z-index:2147483602}.z-2147483647{z-index:2147483647}.z-\\[10000\\]{z-index:10000}.z-\\[2147483647\\]{z-index:2147483647}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing) * 0)}.mx-auto{margin-inline-start:auto;margin-inline-end:auto}.my-1{margin-block:calc(var(--spacing) * 1)}.my-2{margin-block:calc(var(--spacing) * 2)}.my-3{margin-block:calc(var(--spacing) * 3)}.my-4{margin-block:calc(var(--spacing) * 4)}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-1\\.5{margin-top:calc(var(--spacing) * 1.5)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-2\\.5{margin-top:calc(var(--spacing) * 2.5)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-5{margin-top:calc(var(--spacing) * 5)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mr-1{margin-right:calc(var(--spacing) * 1)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-1\\.5{margin-bottom:calc(var(--spacing) * 1.5)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.ml-0{margin-left:calc(var(--spacing) * 0)}.ml-0\\.5{margin-left:calc(var(--spacing) * .5)}.ml-9{margin-left:calc(var(--spacing) * 9)}.line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-10{-webkit-line-clamp:10;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.inline-table{display:inline-table}.list-item{display:list-item}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-column{display:table-column}.table-column-group{display:table-column-group}.table-footer-group{display:table-footer-group}.table-header-group{display:table-header-group}.table-row{display:table-row}.table-row-group{display:table-row-group}.aspect-\\[16\\/10\\]{aspect-ratio:16/10}.aspect-square{aspect-ratio:1}.h-1{height:calc(var(--spacing) * 1)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2{height:calc(var(--spacing) * 2)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-13{height:calc(var(--spacing) * 13)}.h-14{height:calc(var(--spacing) * 14)}.h-16{height:calc(var(--spacing) * 16)}.h-24{height:calc(var(--spacing) * 24)}.h-96{height:calc(var(--spacing) * 96)}.h-\\[1\\.05em\\]{height:1.05em}.h-\\[2px\\]{height:2px}.h-\\[90vh\\]{height:90vh}.h-\\[720px\\]{height:720px}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.max-h-56{max-height:calc(var(--spacing) * 56)}.max-h-72{max-height:calc(var(--spacing) * 72)}.max-h-80{max-height:calc(var(--spacing) * 80)}.max-h-\\[20rem\\]{max-height:20rem}.max-h-\\[90vh\\]{max-height:90vh}.max-h-\\[calc\\(100\\%-7rem\\)\\]{max-height:calc(100% - 7rem)}.max-h-\\[calc\\(100dvh-7rem\\)\\]{max-height:calc(100dvh - 7rem)}.max-h-full{max-height:100%}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-12{min-height:calc(var(--spacing) * 12)}.w-1{width:calc(var(--spacing) * 1)}.w-1\\.5{width:calc(var(--spacing) * 1.5)}.w-1\\/2{width:50%}.w-1\\/3{width:33.3333%}.w-2{width:calc(var(--spacing) * 2)}.w-2\\/3{width:66.6667%}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-4\\/5{width:80%}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-7\\/12{width:58.3333%}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-9\\/12{width:75%}.w-10{width:calc(var(--spacing) * 10)}.w-10\\/12{width:83.3333%}.w-11{width:calc(var(--spacing) * 11)}.w-11\\/12{width:91.6667%}.w-12{width:calc(var(--spacing) * 12)}.w-14{width:calc(var(--spacing) * 14)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-32{width:calc(var(--spacing) * 32)}.w-40{width:calc(var(--spacing) * 40)}.w-44{width:calc(var(--spacing) * 44)}.w-56{width:calc(var(--spacing) * 56)}.w-60{width:calc(var(--spacing) * 60)}.w-\\[0\\.5em\\]{width:.5em}.w-\\[90vw\\]{width:90vw}.w-\\[300px\\]{width:300px}.w-\\[420px\\]{width:420px}.w-auto{width:auto}.w-full{width:100%}.w-max{width:max-content}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90vw\\]{max-width:90vw}.max-w-\\[140px\\]{max-width:140px}.max-w-\\[240px\\]{max-width:240px}.max-w-\\[calc\\(85\\%_-_2\\.25rem\\)\\]{max-width:calc(85% - 2.25rem)}.max-w-\\[calc\\(100\\%-2rem\\)\\]{max-width:calc(100% - 2rem)}.max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.max-w-full{max-width:100%}.max-w-none{max-width:none}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-3{min-width:calc(var(--spacing) * 3)}.min-w-3\\.5{min-width:calc(var(--spacing) * 3.5)}.min-w-5{min-width:calc(var(--spacing) * 5)}.min-w-32{min-width:calc(var(--spacing) * 32)}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.min-w-full{min-width:100%}.flex-1{flex:1}.flex-\\[2_2_0\\%\\]{flex:2 2}.flex-shrink,.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.table-fixed{table-layout:fixed}.border-collapse{border-collapse:collapse}.origin-bottom-left{transform-origin:0 100%}.origin-left{transform-origin:0}.-translate-x-1{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-4{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-\\[1px\\]{--tw-translate-x:1px;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[0\\.15em\\]{--tw-translate-y:.15em;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-none{translate:none}.scale-x-0{--tw-scale-x:0%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-x-100{--tw-scale-x:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-3d{scale:var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-bounce{animation:var(--animate-bounce)}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.cursor-zoom-in{cursor:zoom-in}.touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)}.touch-none{touch-action:none}.resize{resize:both}.resize-none{resize:none}.\\[scrollbar-width\\:thin\\]{scrollbar-width:thin}.\\[scrollbar-color\\:var\\(--color-wx-fg-subtle\\)_transparent\\]{scrollbar-color:var(--color-wx-fg-subtle) transparent}.list-none{list-style-type:none}.auto-rows-fr{grid-auto-rows:minmax(0,1fr)}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-rows-\\[0fr\\]{grid-template-rows:0fr}.grid-rows-\\[1fr\\]{grid-template-rows:1fr}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}:where(.-space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * -1) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * -1) * calc(1 - var(--tw-space-x-reverse)))}:where(.-space-x-1\\.5>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * -1.5) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * -1.5) * calc(1 - var(--tw-space-x-reverse)))}:where(.-space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * -2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * -2) * calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}:where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px * var(--tw-divide-x-reverse));border-inline-end-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px * var(--tw-divide-y-reverse));border-bottom-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.rounded{border-radius:.25rem}.rounded-\\[1px\\]{border-radius:1px}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-none{border-radius:0}.rounded-sm{border-radius:var(--radius-sm)}.rounded-wx{border-radius:var(--wx-radius)}.rounded-wx-lg{border-radius:var(--wx-radius-lg)}.rounded-wx-sm{border-radius:var(--wx-radius-sm)}.rounded-wx-xl{border-radius:var(--wx-radius-xl)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-s:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-s:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-s:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-s:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-ss:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-left-radius:.25rem}.rounded-ss:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-left-radius:.25rem}.rounded-ss:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-right-radius:.25rem}.rounded-ss:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-right-radius:.25rem}.rounded-e:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-e:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-e:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-se:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-right-radius:.25rem}.rounded-se:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-top-right-radius:.25rem}.rounded-se:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-left-radius:.25rem}.rounded-se:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-top-left-radius:.25rem}.rounded-ee:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-bottom-right-radius:.25rem}.rounded-ee:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-bottom-right-radius:.25rem}.rounded-ee:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-bottom-left-radius:.25rem}.rounded-ee:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-bottom-left-radius:.25rem}.rounded-es:not(:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-bottom-left-radius:.25rem}.rounded-es:not(:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi))){border-bottom-left-radius:.25rem}.rounded-es:-webkit-any(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-bottom-right-radius:.25rem}.rounded-es:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){border-bottom-right-radius:.25rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-tl{border-top-left-radius:.25rem}.rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-tr{border-top-right-radius:.25rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-br{border-bottom-right-radius:.25rem}.rounded-bl{border-bottom-left-radius:.25rem}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-x{border-inline-style:var(--tw-border-style);border-left-width:1px;border-right-width:1px}.border-y{border-block-style:var(--tw-border-style);border-block-start-width:1px;border-block-end-width:1px}.border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.border-bs{border-block-start-style:var(--tw-border-style);border-block-start-width:1px}.border-be{border-block-end-style:var(--tw-border-style);border-block-end-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-white{border-color:var(--color-white)}.border-wx-bg{border-color:var(--wx-bg)}.border-wx-border,.border-wx-border\\/70{border-color:var(--wx-border)}@supports (color:color-mix(in lab, red, red)){.border-wx-border\\/70{border-color:color-mix(in oklab, var(--wx-border) 70%, transparent)}}.border-wx-danger,.border-wx-danger\\/30{border-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.border-wx-danger\\/30{border-color:color-mix(in oklab, var(--wx-danger) 30%, transparent)}}.border-wx-launcher-fg,.border-wx-launcher-fg\\/30{border-color:var(--wx-launcher-fg)}@supports (color:color-mix(in lab, red, red)){.border-wx-launcher-fg\\/30{border-color:color-mix(in oklab, var(--wx-launcher-fg) 30%, transparent)}}.border-wx-primary,.border-wx-primary\\/30{border-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.border-wx-primary\\/30{border-color:color-mix(in oklab, var(--wx-primary) 30%, transparent)}}.border-wx-success,.border-wx-success\\/30{border-color:var(--wx-success)}@supports (color:color-mix(in lab, red, red)){.border-wx-success\\/30{border-color:color-mix(in oklab, var(--wx-success) 30%, transparent)}}.border-t-transparent{border-top-color:#0000}.border-t-wx-launcher-fg{border-top-color:var(--wx-launcher-fg)}.border-t-wx-primary{border-top-color:var(--wx-primary)}.border-l-transparent{border-left-color:#0000}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab, red, red)){.bg-black\\/30{background-color:color-mix(in oklab, var(--color-black) 30%, transparent)}}.bg-black\\/45{background-color:#00000073}@supports (color:color-mix(in lab, red, red)){.bg-black\\/45{background-color:color-mix(in oklab, var(--color-black) 45%, transparent)}}.bg-black\\/85{background-color:#000000d9}@supports (color:color-mix(in lab, red, red)){.bg-black\\/85{background-color:color-mix(in oklab, var(--color-black) 85%, transparent)}}.bg-current{background-color:currentColor}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/10{background-color:#ffffff1a}@supports (color:color-mix(in lab, red, red)){.bg-white\\/10{background-color:color-mix(in oklab, var(--color-white) 10%, transparent)}}.bg-wx-bg{background-color:var(--wx-bg)}.bg-wx-bg-elevated{background-color:var(--wx-bg-elevated)}.bg-wx-bg-elevated-2{background-color:var(--wx-bg-elevated-2)}.bg-wx-bg-elevated\\/60{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg-elevated\\/60{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.bg-wx-bg-elevated\\/70{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg-elevated\\/70{background-color:color-mix(in oklab, var(--wx-bg-elevated) 70%, transparent)}}.bg-wx-bg\\/60{background-color:var(--wx-bg)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg\\/60{background-color:color-mix(in oklab, var(--wx-bg) 60%, transparent)}}.bg-wx-bg\\/95{background-color:var(--wx-bg)}@supports (color:color-mix(in lab, red, red)){.bg-wx-bg\\/95{background-color:color-mix(in oklab, var(--wx-bg) 95%, transparent)}}.bg-wx-danger,.bg-wx-danger\\/5{background-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.bg-wx-danger\\/5{background-color:color-mix(in oklab, var(--wx-danger) 5%, transparent)}}.bg-wx-danger\\/10{background-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.bg-wx-danger\\/10{background-color:color-mix(in oklab, var(--wx-danger) 10%, transparent)}}.bg-wx-danger\\/40{background-color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.bg-wx-danger\\/40{background-color:color-mix(in oklab, var(--wx-danger) 40%, transparent)}}.bg-wx-fg{background-color:var(--wx-fg)}.bg-wx-fg-muted,.bg-wx-fg-muted\\/40{background-color:var(--wx-fg-muted)}@supports (color:color-mix(in lab, red, red)){.bg-wx-fg-muted\\/40{background-color:color-mix(in oklab, var(--wx-fg-muted) 40%, transparent)}}.bg-wx-launcher-bg{background-color:var(--wx-launcher-bg)}.bg-wx-primary{background-color:var(--wx-primary)}.bg-wx-primary-fg,.bg-wx-primary-fg\\/10{background-color:var(--wx-primary-fg)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary-fg\\/10{background-color:color-mix(in oklab, var(--wx-primary-fg) 10%, transparent)}}.bg-wx-primary\\/5{background-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary\\/5{background-color:color-mix(in oklab, var(--wx-primary) 5%, transparent)}}.bg-wx-primary\\/10{background-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary\\/10{background-color:color-mix(in oklab, var(--wx-primary) 10%, transparent)}}.bg-wx-primary\\/20{background-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.bg-wx-primary\\/20{background-color:color-mix(in oklab, var(--wx-primary) 20%, transparent)}}.bg-wx-success,.bg-wx-success\\/5{background-color:var(--wx-success)}@supports (color:color-mix(in lab, red, red)){.bg-wx-success\\/5{background-color:color-mix(in oklab, var(--wx-success) 5%, transparent)}}.bg-wx-success\\/10{background-color:var(--wx-success)}@supports (color:color-mix(in lab, red, red)){.bg-wx-success\\/10{background-color:color-mix(in oklab, var(--wx-success) 10%, transparent)}}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-\\[radial-gradient\\(120\\%_80\\%_at_50\\%_-10\\%\\,rgba\\(99\\,102\\,241\\,0\\.22\\)\\,transparent_55\\%\\)\\,linear-gradient\\(to_bottom\\,var\\(--wx-bg-elevated-2\\)_0\\%\\,var\\(--wx-bg-elevated\\)_40\\%\\,var\\(--wx-bg\\)_75\\%\\)\\]{background-image:radial-gradient(120% 80% at 50% -10%,#6366f138,transparent 55%),linear-gradient(to bottom,var(--wx-bg-elevated-2) 0%,var(--wx-bg-elevated) 40%,var(--wx-bg) 75%)}.from-wx-bg-elevated{--tw-gradient-from:var(--wx-bg-elevated);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-wx-bg-elevated-2{--tw-gradient-to:var(--wx-bg-elevated-2);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.bg-cover{background-size:cover}.bg-center{background-position:50%}.bg-repeat{background-repeat:repeat}.mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.p-0{padding:calc(var(--spacing) * 0)}.p-0\\.5{padding:calc(var(--spacing) * .5)}.p-1{padding:calc(var(--spacing) * 1)}.p-2{padding:calc(var(--spacing) * 2)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-px{padding:1px}.px-0{padding-inline:calc(var(--spacing) * 0)}.px-0\\.75{padding-inline:calc(var(--spacing) * .75)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-5{padding-block:calc(var(--spacing) * 5)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-10{padding-block:calc(var(--spacing) * 10)}.py-12{padding-block:calc(var(--spacing) * 12)}.pt-0{padding-top:calc(var(--spacing) * 0)}.pt-0\\.5{padding-top:calc(var(--spacing) * .5)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-1\\.5{padding-top:calc(var(--spacing) * 1.5)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pt-5{padding-top:calc(var(--spacing) * 5)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-2\\.5{padding-right:calc(var(--spacing) * 2.5)}.pr-9{padding-right:calc(var(--spacing) * 9)}.pb-1{padding-bottom:calc(var(--spacing) * 1)}.pb-1\\.5{padding-bottom:calc(var(--spacing) * 1.5)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-12{padding-bottom:calc(var(--spacing) * 12)}.pl-1{padding-left:calc(var(--spacing) * 1)}.pl-1\\.5{padding-left:calc(var(--spacing) * 1.5)}.pl-7{padding-left:calc(var(--spacing) * 7)}.pl-10{padding-left:calc(var(--spacing) * 10)}.text-center{text-align:center}.text-left{text-align:left}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.font-mono{font-family:var(--font-geist-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[0\\.7em\\]{font-size:.7em}.text-\\[8px\\]{font-size:8px}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[15px\\]{font-size:15px}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.08em\\]{--tw-tracking:.08em;letter-spacing:.08em}.tracking-\\[0\\.14em\\]{--tw-tracking:.14em;letter-spacing:.14em}.tracking-\\[0\\.22em\\]{--tw-tracking:.22em;letter-spacing:.22em}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-wrap{text-wrap:wrap}.wrap-anywhere{overflow-wrap:anywhere}.text-clip{text-overflow:clip}.text-ellipsis{text-overflow:ellipsis}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-white{color:var(--color-white)}.text-wx-bg,.text-wx-bg\\/70{color:var(--wx-bg)}@supports (color:color-mix(in lab, red, red)){.text-wx-bg\\/70{color:color-mix(in oklab, var(--wx-bg) 70%, transparent)}}.text-wx-danger{color:var(--wx-danger)}.text-wx-fg{color:var(--wx-fg)}.text-wx-fg-muted{color:var(--wx-fg-muted)}.text-wx-fg-subtle{color:var(--wx-fg-subtle)}.text-wx-launcher-fg{color:var(--wx-launcher-fg)}.text-wx-primary{color:var(--wx-primary)}.text-wx-primary-fg,.text-wx-primary-fg\\/70{color:var(--wx-primary-fg)}@supports (color:color-mix(in lab, red, red)){.text-wx-primary-fg\\/70{color:color-mix(in oklab, var(--wx-primary-fg) 70%, transparent)}}.text-wx-success{color:var(--wx-success)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.opacity-0{opacity:0}.opacity-40{opacity:.4}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-80{opacity:.8}.opacity-85{opacity:.85}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_1px_3px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow:0 1px 3px var(--tw-shadow-color,#00000014);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_2px_8px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow:0 2px 8px var(--tw-shadow-color,#00000014);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_4px_12px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow:0 4px 12px var(--tw-shadow-color,#00000014);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_8px_24px_rgba\\(0\\,0\\,0\\,0\\.18\\)\\]{--tw-shadow:0 8px 24px var(--tw-shadow-color,#0000002e);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_12px_32px_rgba\\(0\\,0\\,0\\,0\\.16\\)\\]{--tw-shadow:0 12px 32px var(--tw-shadow-color,#00000029);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[0_16px_40px_rgba\\(0\\,0\\,0\\,0\\.16\\)\\]{--tw-shadow:0 16px 40px var(--tw-shadow-color,#00000029);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[inset_0_0_0_1px_rgb\\(0_0_0\\/0\\.04\\)\\]{--tw-shadow:inset 0 0 0 1px var(--tw-shadow-color,#0000000a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring,.ring-1{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-black{--tw-ring-color:var(--color-black)}.ring-black\\/10{--tw-ring-color:#0000001a}@supports (color:color-mix(in lab, red, red)){.ring-black\\/10{--tw-ring-color:color-mix(in oklab, var(--color-black) 10%, transparent)}}.ring-wx-bg{--tw-ring-color:var(--wx-bg)}.ring-wx-bg-elevated,.ring-wx-bg-elevated\\/60{--tw-ring-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.ring-wx-bg-elevated\\/60{--tw-ring-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.ring-wx-border{--tw-ring-color:var(--wx-border)}.ring-wx-danger{--tw-ring-color:var(--wx-danger)}.ring-wx-primary,.ring-wx-primary\\/40{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.ring-wx-primary\\/40{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 40%, transparent)}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.blur-\\[2px\\]{--tw-blur:blur(2px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.blur-lg{--tw-blur:blur(var(--blur-lg));filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[grid-template-rows\\]{transition-property:grid-template-rows;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.\\[animation-delay\\:-0\\.3s\\]{animation-delay:-.3s}.\\[animation-delay\\:-0\\.15s\\]{animation-delay:-.15s}.\\[t\\:systemFieldOptions\\.chatStatus\\.IN_PROGRESS\\]{t:systemFieldOptions.chatStatus.IN PROGRESS}.\\[t\\:systemFields\\.chatStatus\\]{t:systemFields.chatStatus}.\\[t\\:systemFields\\.firstName\\]{t:systemFields.firstName}:where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ring-inset{--tw-ring-inset:inset}@media (hover:hover){.group-hover\\:block:is(:where(.group):hover *){display:block}.group-hover\\:translate-x-0\\.5:is(:where(.group):hover *){--tw-translate-x:calc(var(--spacing) * .5);translate:var(--tw-translate-x) var(--tw-translate-y)}.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.group-hover\\:scale-\\[1\\.02\\]:is(:where(.group):hover *){scale:1.02}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}}.placeholder\\:text-wx-danger\\/60::placeholder{color:var(--wx-danger)}@supports (color:color-mix(in lab, red, red)){.placeholder\\:text-wx-danger\\/60::placeholder{color:color-mix(in oklab, var(--wx-danger) 60%, transparent)}}.placeholder\\:text-wx-fg-muted::placeholder{color:var(--wx-fg-muted)}.placeholder\\:text-wx-fg-subtle::placeholder{color:var(--wx-fg-subtle)}.first\\:mt-4:first-child{margin-top:calc(var(--spacing) * 4)}.first\\:border-t-0:first-child{border-top-style:var(--tw-border-style);border-top-width:0}.first\\:pt-0:first-child{padding-top:calc(var(--spacing) * 0)}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.read-only\\:cursor-not-allowed:read-only{cursor:not-allowed}.read-only\\:bg-wx-bg-elevated\\/60:read-only{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.read-only\\:bg-wx-bg-elevated\\/60:read-only{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.read-only\\:text-wx-fg-muted:read-only{color:var(--wx-fg-muted)}.focus-within\\:border-wx-primary:focus-within{border-color:var(--wx-primary)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-within\\:ring-wx-primary\\/20:focus-within{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus-within\\:ring-wx-primary\\/20:focus-within{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 20%, transparent)}}@media (hover:hover){.hover\\:scale-\\[1\\.04\\]:hover{scale:1.04}.hover\\:bg-white\\/20:hover{background-color:#fff3}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-white\\/20:hover{background-color:color-mix(in oklab, var(--color-white) 20%, transparent)}}.hover\\:bg-wx-bg:hover{background-color:var(--wx-bg)}.hover\\:bg-wx-bg-elevated:hover{background-color:var(--wx-bg-elevated)}.hover\\:bg-wx-bg-elevated-2:hover{background-color:var(--wx-bg-elevated-2)}.hover\\:bg-wx-bg-elevated\\/40:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/40:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 40%, transparent)}}.hover\\:bg-wx-bg-elevated\\/50:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/50:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 50%, transparent)}}.hover\\:bg-wx-bg-elevated\\/60:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/60:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.hover\\:bg-wx-bg-elevated\\/80:hover{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-bg-elevated\\/80:hover{background-color:color-mix(in oklab, var(--wx-bg-elevated) 80%, transparent)}}.hover\\:bg-wx-fg-muted\\/60:hover{background-color:var(--wx-fg-muted)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-fg-muted\\/60:hover{background-color:color-mix(in oklab, var(--wx-fg-muted) 60%, transparent)}}.hover\\:bg-wx-primary:hover{background-color:var(--wx-primary)}.hover\\:bg-wx-primary-fg\\/20:hover{background-color:var(--wx-primary-fg)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-wx-primary-fg\\/20:hover{background-color:color-mix(in oklab, var(--wx-primary-fg) 20%, transparent)}}.hover\\:bg-wx-primary-hover:hover{background-color:var(--wx-primary-hover)}.hover\\:text-wx-danger:hover{color:var(--wx-danger)}.hover\\:text-wx-fg:hover{color:var(--wx-fg)}.hover\\:text-wx-primary-fg:hover{color:var(--wx-primary-fg)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-70:hover{opacity:.7}.hover\\:opacity-80:hover{opacity:.8}.hover\\:opacity-90:hover{opacity:.9}.hover\\:opacity-100:hover{opacity:1}}.focus\\:border-wx-primary:focus{border-color:var(--wx-primary)}.focus\\:bg-wx-bg-elevated:focus{background-color:var(--wx-bg-elevated)}.focus\\:text-wx-fg:focus{color:var(--wx-fg)}.focus\\:ring-0:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-wx-danger:focus{--tw-ring-color:var(--wx-danger)}.focus\\:ring-wx-primary:focus,.focus\\:ring-wx-primary\\/20:focus{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus\\:ring-wx-primary\\/20:focus{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 20%, transparent)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-wx-launcher-bg:focus-visible{--tw-ring-color:var(--wx-launcher-bg)}.focus-visible\\:ring-wx-primary:focus-visible{--tw-ring-color:var(--wx-primary)}.focus-visible\\:ring-wx-primary\\/30:focus-visible{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus-visible\\:ring-wx-primary\\/30:focus-visible{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 30%, transparent)}}.focus-visible\\:ring-wx-primary\\/40:focus-visible{--tw-ring-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.focus-visible\\:ring-wx-primary\\/40:focus-visible{--tw-ring-color:color-mix(in oklab, var(--wx-primary) 40%, transparent)}}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:ring-offset-wx-bg:focus-visible{--tw-ring-offset-color:var(--wx-bg)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-wx-bg-elevated\\/60:disabled{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.disabled\\:bg-wx-bg-elevated\\/60:disabled{background-color:color-mix(in oklab, var(--wx-bg-elevated) 60%, transparent)}}.disabled\\:text-wx-fg-muted:disabled{color:var(--wx-fg-muted)}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60:disabled{opacity:.6}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=active\\]\\:text-wx-fg[data-state=active]{color:var(--wx-fg)}.data-\\[state\\=checked\\]\\:font-medium[data-state=checked]{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.data-\\[state\\=visible\\]\\:opacity-100[data-state=visible]{opacity:1}.dark\\:block:where([data-theme=dark],[data-theme=dark] *,:host([data-theme=dark]) *){display:block}.dark\\:hidden:where([data-theme=dark],[data-theme=dark] *,:host([data-theme=dark]) *){display:none}.dark\\:border-wx-bg\\/30:where([data-theme=dark],[data-theme=dark] *,:host([data-theme=dark]) *){border-color:var(--wx-bg)}@supports (color:color-mix(in lab, red, red)){.dark\\:border-wx-bg\\/30:where([data-theme=dark],[data-theme=dark] *,:host([data-theme=dark]) *){border-color:color-mix(in oklab, var(--wx-bg) 30%, transparent)}}.dark\\:border-t-wx-bg:where([data-theme=dark],[data-theme=dark] *,:host([data-theme=dark]) *){border-top-color:var(--wx-bg)}.dark\\:bg-wx-bg:where([data-theme=dark],[data-theme=dark] *,:host([data-theme=dark]) *){background-color:var(--wx-bg)}.dark\\:bg-\\[radial-gradient\\(120\\%_80\\%_at_50\\%_-10\\%\\,rgba\\(99\\,102\\,241\\,0\\.35\\)\\,transparent_55\\%\\)\\,linear-gradient\\(to_bottom\\,var\\(--wx-bg-elevated-2\\)_0\\%\\,var\\(--wx-bg-elevated\\)_40\\%\\,var\\(--wx-bg\\)_75\\%\\)\\]:where([data-theme=dark],[data-theme=dark] *,:host([data-theme=dark]) *){background-image:radial-gradient(120% 80% at 50% -10%,#6366f159,transparent 55%),linear-gradient(to bottom,var(--wx-bg-elevated-2) 0%,var(--wx-bg-elevated) 40%,var(--wx-bg) 75%)}.\\[\\&_\\.epr-btn-clear-search\\:focus\\]\\:\\!bg-wx-bg-elevated-2 .epr-btn-clear-search:focus,.\\[\\&_\\.epr-btn-clear-search\\:hover\\]\\:\\!bg-wx-bg-elevated-2 .epr-btn-clear-search:hover{background-color:var(--wx-bg-elevated-2)!important}.\\[\\&_\\.hljs-attr\\]\\:text-sky-300 .hljs-attr,.\\[\\&_\\.hljs-attribute\\]\\:text-sky-300 .hljs-attribute{color:var(--color-sky-300)}.\\[\\&_\\.hljs-built_in\\]\\:text-violet-300 .hljs-built in{color:var(--color-violet-300)}.\\[\\&_\\.hljs-comment\\]\\:text-zinc-500 .hljs-comment{color:var(--color-zinc-500)}.\\[\\&_\\.hljs-comment\\]\\:italic .hljs-comment{font-style:italic}.\\[\\&_\\.hljs-keyword\\]\\:text-violet-300 .hljs-keyword{color:var(--color-violet-300)}.\\[\\&_\\.hljs-literal\\]\\:text-amber-300 .hljs-literal{color:var(--color-amber-300)}.\\[\\&_\\.hljs-name\\]\\:text-rose-300 .hljs-name{color:var(--color-rose-300)}.\\[\\&_\\.hljs-number\\]\\:text-amber-300 .hljs-number{color:var(--color-amber-300)}.\\[\\&_\\.hljs-string\\]\\:text-emerald-300 .hljs-string{color:var(--color-emerald-300)}.\\[\\&_\\.hljs-tag\\]\\:text-rose-300 .hljs-tag{color:var(--color-rose-300)}.\\[\\&_\\.hljs-title\\]\\:font-medium .hljs-title{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.\\[\\&_\\.hljs-title\\]\\:text-zinc-100 .hljs-title{color:var(--color-zinc-100)}.\\[\\&_\\.hljs-type\\]\\:text-violet-300 .hljs-type{color:var(--color-violet-300)}.\\[\\&_a\\]\\:text-inherit a{color:inherit}.\\[\\&_a\\]\\:text-wx-primary a{color:var(--wx-primary)}.\\[\\&_a\\]\\:no-underline a{text-decoration-line:none}.\\[\\&_a\\]\\:underline a{text-decoration-line:underline}.\\[\\&_a\\]\\:underline-offset-2 a{text-underline-offset:2px}.\\[\\&_a\\]\\:opacity-90 a{opacity:.9}.\\[\\&_a\\]\\:transition-opacity a{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_a\\:hover\\]\\:opacity-70 a:hover{opacity:.7}.\\[\\&_a\\:hover\\]\\:opacity-100 a:hover{opacity:1}.\\[\\&_blockquote\\]\\:my-4 blockquote{margin-block:calc(var(--spacing) * 4)}.\\[\\&_blockquote\\]\\:border-l-2 blockquote{border-left-style:var(--tw-border-style);border-left-width:2px}.\\[\\&_blockquote\\]\\:border-wx-primary\\/40 blockquote{border-color:var(--wx-primary)}@supports (color:color-mix(in lab, red, red)){.\\[\\&_blockquote\\]\\:border-wx-primary\\/40 blockquote{border-color:color-mix(in oklab, var(--wx-primary) 40%, transparent)}}.\\[\\&_blockquote\\]\\:pl-3 blockquote{padding-left:calc(var(--spacing) * 3)}.\\[\\&_blockquote\\]\\:text-wx-fg-muted blockquote{color:var(--wx-fg-muted)}.\\[\\&_blockquote\\]\\:italic blockquote{font-style:italic}.\\[\\&_code\\]\\:rounded-\\[6px\\] code{border-radius:6px}.\\[\\&_code\\]\\:rounded-sm code{border-radius:var(--radius-sm)}.\\[\\&_code\\]\\:bg-black\\/10 code{background-color:#0000001a}@supports (color:color-mix(in lab, red, red)){.\\[\\&_code\\]\\:bg-black\\/10 code{background-color:color-mix(in oklab, var(--color-black) 10%, transparent)}}.\\[\\&_code\\]\\:bg-white\\/15 code{background-color:#ffffff26}@supports (color:color-mix(in lab, red, red)){.\\[\\&_code\\]\\:bg-white\\/15 code{background-color:color-mix(in oklab, var(--color-white) 15%, transparent)}}.\\[\\&_code\\]\\:bg-wx-bg-elevated code{background-color:var(--wx-bg-elevated)}.\\[\\&_code\\]\\:px-1 code{padding-inline:calc(var(--spacing) * 1)}.\\[\\&_code\\]\\:px-1\\.5 code{padding-inline:calc(var(--spacing) * 1.5)}.\\[\\&_code\\]\\:py-0\\.5 code{padding-block:calc(var(--spacing) * .5)}.\\[\\&_code\\]\\:font-mono code{font-family:var(--font-geist-mono)}.\\[\\&_code\\]\\:text-\\[0\\.85em\\] code{font-size:.85em}.\\[\\&_details\\]\\:my-2 details{margin-block:calc(var(--spacing) * 2)}.\\[\\&_details\\]\\:overflow-hidden details{overflow:hidden}.\\[\\&_details\\]\\:rounded-lg details{border-radius:var(--radius-lg)}.\\[\\&_details\\]\\:border details{border-style:var(--tw-border-style);border-width:1px}.\\[\\&_details\\]\\:border-wx-border details{border-color:var(--wx-border)}.\\[\\&_details\\]\\:bg-wx-bg-elevated\\/40 details{background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.\\[\\&_details\\]\\:bg-wx-bg-elevated\\/40 details{background-color:color-mix(in oklab, var(--wx-bg-elevated) 40%, transparent)}}.\\[\\&_details\\+details\\]\\:mt-2 details+details{margin-top:calc(var(--spacing) * 2)}.\\[\\&_details\\[open\\]_summary\\]\\:border-b details[open] summary{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.\\[\\&_details\\[open\\]_summary\\]\\:border-wx-border details[open] summary{border-color:var(--wx-border)}.\\[\\&_details\\[open\\]_summary\\]\\:after\\:rotate-90 details[open] summary:after{content:var(--tw-content);rotate:90deg}.\\[\\&_em\\]\\:italic em{font-style:italic}.\\[\\&_figcaption\\]\\:mt-2 figcaption{margin-top:calc(var(--spacing) * 2)}.\\[\\&_figcaption\\]\\:text-xs figcaption{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.\\[\\&_figcaption\\]\\:text-wx-fg-muted figcaption{color:var(--wx-fg-muted)}.\\[\\&_figcaption\\]\\:italic figcaption{font-style:italic}.\\[\\&_figure\\]\\:my-5 figure{margin-block:calc(var(--spacing) * 5)}.\\[\\&_figure\\]\\:flex figure{display:flex}.\\[\\&_figure\\]\\:flex-col figure{flex-direction:column}.\\[\\&_figure\\]\\:items-center figure{align-items:center}.\\[\\&_figure\\]\\:text-center figure{text-align:center}.\\[\\&_figure_img\\]\\:my-0 figure img{margin-block:calc(var(--spacing) * 0)}.\\[\\&_h1\\]\\:mt-6 h1{margin-top:calc(var(--spacing) * 6)}.\\[\\&_h1\\]\\:mb-3 h1{margin-bottom:calc(var(--spacing) * 3)}.\\[\\&_h1\\]\\:scroll-mt-16 h1{scroll-margin-top:calc(var(--spacing) * 16)}.\\[\\&_h1\\]\\:text-xl h1{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.\\[\\&_h1\\]\\:font-semibold h1{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_h1\\]\\:tracking-tight h1{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.\\[\\&_h2\\]\\:mt-5 h2{margin-top:calc(var(--spacing) * 5)}.\\[\\&_h2\\]\\:mb-2 h2{margin-bottom:calc(var(--spacing) * 2)}.\\[\\&_h2\\]\\:scroll-mt-16 h2{scroll-margin-top:calc(var(--spacing) * 16)}.\\[\\&_h2\\]\\:text-base h2{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\[\\&_h2\\]\\:font-semibold h2{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_h2\\]\\:tracking-tight h2{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.\\[\\&_h3\\]\\:mt-4 h3{margin-top:calc(var(--spacing) * 4)}.\\[\\&_h3\\]\\:mb-1\\.5 h3{margin-bottom:calc(var(--spacing) * 1.5)}.\\[\\&_h3\\]\\:scroll-mt-16 h3{scroll-margin-top:calc(var(--spacing) * 16)}.\\[\\&_h3\\]\\:text-sm h3{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\[\\&_h3\\]\\:font-semibold h3{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_hr\\]\\:my-6 hr{margin-block:calc(var(--spacing) * 6)}.\\[\\&_hr\\]\\:border-wx-border hr{border-color:var(--wx-border)}.\\[\\&_img\\]\\:mx-auto img{margin-inline-start:auto;margin-inline-end:auto}.\\[\\&_img\\]\\:my-3 img{margin-block:calc(var(--spacing) * 3)}.\\[\\&_img\\]\\:block img{display:block}.\\[\\&_img\\]\\:max-w-full img{max-width:100%}.\\[\\&_li\\]\\:m-0 li{margin:calc(var(--spacing) * 0)}.\\[\\&_li\\]\\:my-0\\.5 li{margin-block:calc(var(--spacing) * .5)}.\\[\\&_li\\]\\:my-1 li{margin-block:calc(var(--spacing) * 1)}.\\[\\&_li\\>p\\]\\:my-0 li>p{margin-block:calc(var(--spacing) * 0)}.\\[\\&_li\\>p\\+p\\]\\:mt-1 li>p+p{margin-top:calc(var(--spacing) * 1)}.\\[\\&_ol\\]\\:my-1\\.5 ol{margin-block:calc(var(--spacing) * 1.5)}.\\[\\&_ol\\]\\:my-3 ol{margin-block:calc(var(--spacing) * 3)}.\\[\\&_ol\\]\\:list-decimal ol{list-style-type:decimal}.\\[\\&_ol\\]\\:pl-5 ol{padding-left:calc(var(--spacing) * 5)}.\\[\\&_ol\\]\\:whitespace-normal ol{white-space:normal}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol ::marker{color:var(--wx-fg-subtle)}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol::marker{color:var(--wx-fg-subtle)}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol ::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_ol\\]\\:marker\\:text-wx-fg-subtle ol::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_p\\]\\:my-3 p{margin-block:calc(var(--spacing) * 3)}.\\[\\&_pre\\]\\:my-2 pre{margin-block:calc(var(--spacing) * 2)}.\\[\\&_pre\\]\\:my-4 pre{margin-block:calc(var(--spacing) * 4)}.\\[\\&_pre\\]\\:overflow-x-auto pre{overflow-x:auto}.\\[\\&_pre\\]\\:rounded pre{border-radius:.25rem}.\\[\\&_pre\\]\\:rounded-lg pre{border-radius:var(--radius-lg)}.\\[\\&_pre\\]\\:border pre{border-style:var(--tw-border-style);border-width:1px}.\\[\\&_pre\\]\\:border-wx-border pre{border-color:var(--wx-border)}.\\[\\&_pre\\]\\:bg-\\[\\#0f1115\\] pre{background-color:#0f1115}.\\[\\&_pre\\]\\:bg-black\\/10 pre{background-color:#0000001a}@supports (color:color-mix(in lab, red, red)){.\\[\\&_pre\\]\\:bg-black\\/10 pre{background-color:color-mix(in oklab, var(--color-black) 10%, transparent)}}.\\[\\&_pre\\]\\:bg-white\\/15 pre{background-color:#ffffff26}@supports (color:color-mix(in lab, red, red)){.\\[\\&_pre\\]\\:bg-white\\/15 pre{background-color:color-mix(in oklab, var(--color-white) 15%, transparent)}}.\\[\\&_pre\\]\\:p-2 pre{padding:calc(var(--spacing) * 2)}.\\[\\&_pre\\]\\:p-4 pre{padding:calc(var(--spacing) * 4)}.\\[\\&_pre\\]\\:text-\\[0\\.8em\\] pre{font-size:.8em}.\\[\\&_pre\\]\\:text-\\[12\\.5px\\] pre{font-size:12.5px}.\\[\\&_pre\\]\\:leading-relaxed pre{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.\\[\\&_pre\\]\\:text-zinc-100 pre{color:var(--color-zinc-100)}.\\[\\&_pre_code\\]\\:bg-transparent pre code{background-color:#0000}.\\[\\&_pre_code\\]\\:p-0 pre code{padding:calc(var(--spacing) * 0)}.\\[\\&_pre_code\\]\\:text-zinc-100 pre code{color:var(--color-zinc-100)}.\\[\\&_strong\\]\\:font-semibold strong{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\[\\&_summary\\]\\:relative summary{position:relative}.\\[\\&_summary\\]\\:cursor-pointer summary{cursor:pointer}.\\[\\&_summary\\]\\:list-none summary{list-style-type:none}.\\[\\&_summary\\]\\:px-4 summary{padding-inline:calc(var(--spacing) * 4)}.\\[\\&_summary\\]\\:py-3 summary{padding-block:calc(var(--spacing) * 3)}.\\[\\&_summary\\]\\:pr-10 summary{padding-right:calc(var(--spacing) * 10)}.\\[\\&_summary\\]\\:text-sm summary{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\[\\&_summary\\]\\:font-medium summary{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.\\[\\&_summary\\]\\:text-wx-fg summary{color:var(--wx-fg)}.\\[\\&_summary\\]\\:after\\:absolute summary:after{content:var(--tw-content);position:absolute}.\\[\\&_summary\\]\\:after\\:top-1\\/2 summary:after{content:var(--tw-content);top:50%}.\\[\\&_summary\\]\\:after\\:right-4 summary:after{content:var(--tw-content);right:calc(var(--spacing) * 4)}.\\[\\&_summary\\]\\:after\\:-translate-y-1\\/2 summary:after{content:var(--tw-content);--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\&_summary\\]\\:after\\:text-base summary:after{content:var(--tw-content);font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\[\\&_summary\\]\\:after\\:leading-none summary:after{content:var(--tw-content);--tw-leading:1;line-height:1}.\\[\\&_summary\\]\\:after\\:text-wx-fg-subtle summary:after{content:var(--tw-content);color:var(--wx-fg-subtle)}.\\[\\&_summary\\]\\:after\\:transition-transform summary:after{content:var(--tw-content);transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_summary\\]\\:after\\:content-\\[\\'\\\\\\\\203A\\'\\] summary:after{--tw-content:\"\\\\203A\";content:var(--tw-content)}.\\[\\&_summary\\:\\:-webkit-details-marker\\]\\:hidden summary::-webkit-details-marker{display:none}.\\[\\&_summary\\:\\:marker\\]\\:hidden summary::marker{display:none}.\\[\\&_svg\\]\\:fill-current svg{fill:currentColor}.\\[\\&_svg\\]\\:fill-wx-launcher-fg svg{fill:var(--wx-launcher-fg)}.\\[\\&_svg\\]\\:stroke-current svg{stroke:currentColor}.\\[\\&_svg\\]\\:stroke-wx-launcher-fg svg{stroke:var(--wx-launcher-fg)}.dark\\:\\[\\&_svg\\]\\:fill-wx-bg:where([data-theme=dark],[data-theme=dark] *,:host([data-theme=dark]) *) svg{fill:var(--wx-bg)}.dark\\:\\[\\&_svg\\]\\:stroke-wx-bg:where([data-theme=dark],[data-theme=dark] *,:host([data-theme=dark]) *) svg{stroke:var(--wx-bg)}.\\[\\&_table\\]\\:my-3 table{margin-block:calc(var(--spacing) * 3)}.\\[\\&_table\\]\\:w-full table{width:100%}.\\[\\&_table\\]\\:table-fixed table{table-layout:fixed}.\\[\\&_table\\]\\:border-collapse table{border-collapse:collapse}.\\[\\&_table\\]\\:overflow-hidden table{overflow:hidden}.\\[\\&_table\\]\\:rounded-lg table{border-radius:var(--radius-lg)}.\\[\\&_table\\]\\:border table{border-style:var(--tw-border-style);border-width:1px}.\\[\\&_table\\]\\:border-wx-border table{border-color:var(--wx-border)}.\\[\\&_table\\]\\:text-xs table{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.\\[\\&_tbody_tr\\]\\:border-t tbody tr{border-top-style:var(--tw-border-style);border-top-width:1px}.\\[\\&_tbody_tr\\]\\:border-wx-border tbody tr{border-color:var(--wx-border)}.\\[\\&_tbody_tr\\:nth-child\\(odd\\)\\]\\:bg-wx-bg-elevated\\/40 tbody tr:nth-child(odd){background-color:var(--wx-bg-elevated)}@supports (color:color-mix(in lab, red, red)){.\\[\\&_tbody_tr\\:nth-child\\(odd\\)\\]\\:bg-wx-bg-elevated\\/40 tbody tr:nth-child(odd){background-color:color-mix(in oklab, var(--wx-bg-elevated) 40%, transparent)}}.\\[\\&_td\\]\\:px-2\\.5 td{padding-inline:calc(var(--spacing) * 2.5)}.\\[\\&_td\\]\\:py-1\\.5 td{padding-block:calc(var(--spacing) * 1.5)}.\\[\\&_td\\]\\:align-top td{vertical-align:top}.\\[\\&_td\\]\\:text-wx-fg td{color:var(--wx-fg)}.\\[\\&_td_p\\]\\:my-0 td p{margin-block:calc(var(--spacing) * 0)}.\\[\\&_td_p\\]\\:inline td p{display:inline}.\\[\\&_td\\+td\\]\\:border-l td+td{border-left-style:var(--tw-border-style);border-left-width:1px}.\\[\\&_td\\+td\\]\\:border-wx-border td+td{border-color:var(--wx-border)}.\\[\\&_th\\]\\:border-b th{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.\\[\\&_th\\]\\:border-wx-border th{border-color:var(--wx-border)}.\\[\\&_th\\]\\:px-2\\.5 th{padding-inline:calc(var(--spacing) * 2.5)}.\\[\\&_th\\]\\:py-1\\.5 th{padding-block:calc(var(--spacing) * 1.5)}.\\[\\&_th\\]\\:text-left th{text-align:left}.\\[\\&_th\\]\\:font-medium th{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.\\[\\&_th\\]\\:text-wx-fg th{color:var(--wx-fg)}.\\[\\&_th_p\\]\\:my-0 th p{margin-block:calc(var(--spacing) * 0)}.\\[\\&_th_p\\]\\:inline th p{display:inline}.\\[\\&_th\\+th\\]\\:border-l th+th{border-left-style:var(--tw-border-style);border-left-width:1px}.\\[\\&_th\\+th\\]\\:border-wx-border th+th{border-color:var(--wx-border)}.\\[\\&_thead\\]\\:bg-wx-bg-elevated thead{background-color:var(--wx-bg-elevated)}.\\[\\&_ul\\]\\:m-0 ul{margin:calc(var(--spacing) * 0)}.\\[\\&_ul\\]\\:my-1\\.5 ul{margin-block:calc(var(--spacing) * 1.5)}.\\[\\&_ul\\]\\:my-3 ul{margin-block:calc(var(--spacing) * 3)}.\\[\\&_ul\\]\\:list-disc ul{list-style-type:disc}.\\[\\&_ul\\]\\:list-none ul{list-style-type:none}.\\[\\&_ul\\]\\:p-0 ul{padding:calc(var(--spacing) * 0)}.\\[\\&_ul\\]\\:pl-5 ul{padding-left:calc(var(--spacing) * 5)}.\\[\\&_ul\\]\\:whitespace-normal ul{white-space:normal}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul ::marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul::marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul ::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\]\\:marker\\:text-wx-fg-subtle ul::-webkit-details-marker{color:var(--wx-fg-subtle)}.\\[\\&_ul\\[data-type\\=taskList\\]\\]\\:list-none\\! ul[data-type=taskList]{list-style-type:none!important}.\\[\\&_ul\\[data-type\\=taskList\\]\\]\\:pl-0\\! ul[data-type=taskList]{padding-left:calc(var(--spacing) * 0)!important}.\\[\\&_ul\\[data-type\\=taskList\\]_input\\]\\:h-3\\.5 ul[data-type=taskList] input{height:calc(var(--spacing) * 3.5)}.\\[\\&_ul\\[data-type\\=taskList\\]_input\\]\\:w-3\\.5 ul[data-type=taskList] input{width:calc(var(--spacing) * 3.5)}.\\[\\&_ul\\[data-type\\=taskList\\]_input\\]\\:accent-wx-primary ul[data-type=taskList] input{accent-color:var(--wx-primary)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:my-1\\.5 ul[data-type=taskList] li{margin-block:calc(var(--spacing) * 1.5)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:flex\\! ul[data-type=taskList] li{display:flex!important}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:items-start ul[data-type=taskList] li{align-items:flex-start}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:gap-2 ul[data-type=taskList] li{gap:calc(var(--spacing) * 2)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:pl-0 ul[data-type=taskList] li{padding-left:calc(var(--spacing) * 0)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li ::marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li::marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li ::-webkit-details-marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\]\\:marker\\:content-none ul[data-type=taskList] li::-webkit-details-marker{--tw-content:none;content:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\]\\:min-w-0 ul[data-type=taskList] li>div{min-width:calc(var(--spacing) * 0)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\]\\:flex-1 ul[data-type=taskList] li>div{flex:1}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\>p\\]\\:my-0\\! ul[data-type=taskList] li>div>p{margin-block:calc(var(--spacing) * 0)!important}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>div\\>p\\]\\:leading-snug ul[data-type=taskList] li>div>p{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:pointer-events-none ul[data-type=taskList] li>label{pointer-events:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:m-0 ul[data-type=taskList] li>label{margin:calc(var(--spacing) * 0)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:inline-flex ul[data-type=taskList] li>label{display:inline-flex}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:h-5 ul[data-type=taskList] li>label{height:calc(var(--spacing) * 5)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:shrink-0 ul[data-type=taskList] li>label{flex-shrink:0}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:cursor-default ul[data-type=taskList] li>label{cursor:default}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:items-center ul[data-type=taskList] li>label{align-items:center}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\]\\:select-none ul[data-type=taskList] li>label{-webkit-user-select:none;user-select:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\>label\\>span\\]\\:hidden ul[data-type=taskList] li>label>span{display:none}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\[data-checked\\=true\\]\\>div\\]\\:text-wx-fg-muted ul[data-type=taskList] li[data-checked=true]>div{color:var(--wx-fg-muted)}.\\[\\&_ul\\[data-type\\=taskList\\]_li\\[data-checked\\=true\\]\\>div\\]\\:line-through ul[data-type=taskList] li[data-checked=true]>div{text-decoration-line:line-through}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:h-2::-webkit-scrollbar{height:calc(var(--spacing) * 2)}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full::-webkit-scrollbar-thumb{border-radius:3.40282e38px}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-wx-fg-subtle\\/40::-webkit-scrollbar-thumb{background-color:var(--wx-fg-subtle)}@supports (color:color-mix(in lab, red, red)){.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-wx-fg-subtle\\/40::-webkit-scrollbar-thumb{background-color:color-mix(in oklab, var(--wx-fg-subtle) 40%, transparent)}}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-wx-fg-subtle\\/60::-webkit-scrollbar-thumb:hover{background-color:var(--wx-fg-subtle)}@supports (color:color-mix(in lab, red, red)){.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-wx-fg-subtle\\/60::-webkit-scrollbar-thumb:hover{background-color:color-mix(in oklab, var(--wx-fg-subtle) 60%, transparent)}}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-transparent::-webkit-scrollbar-track{background-color:#0000}.\\[\\&\\:\\:-webkit-search-cancel-button\\]\\:appearance-none::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.\\[\\&\\>\\:first-child\\]\\:mt-0>:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&\\>\\:last-child\\]\\:mb-0>:last-child{margin-bottom:calc(var(--spacing) * 0)}.\\[\\&_details\\]\\:\\[\\&\\>\\:not\\(summary\\)\\]\\:px-4 details>:not(summary){padding-inline:calc(var(--spacing) * 4)}.\\[\\&_details\\]\\:\\[\\&\\>\\:not\\(summary\\)\\]\\:py-3 details>:not(summary){padding-block:calc(var(--spacing) * 3)}.\\[\\&_details\\]\\:\\[\\&\\>\\:not\\(summary\\)\\:first-of-type\\]\\:pt-3 details>:not(summary):first-of-type{padding-top:calc(var(--spacing) * 3)}.\\[\\&\\>div\\]\\:\\!block>div{display:block!important}.\\[\\&\\>div\\]\\:\\!w-full>div{width:100%!important}.\\[\\&\\>div\\]\\:\\!max-w-full>div{max-width:100%!important}.\\[\\&\\>p\\]\\:my-0>p{margin-block:calc(var(--spacing) * 0)}.\\[\\&\\>p\\+p\\]\\:mt-2>p+p{margin-top:calc(var(--spacing) * 2)}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}:root,:host{--wx-bg:#fff;--wx-bg-elevated:#f5f5f7;--wx-bg-elevated-2:#ebebef;--wx-fg:#121314;--wx-fg-muted:#6b7280;--wx-fg-subtle:#9ca3af;--wx-border:#e4e4e7;--wx-border-strong:#d1d5db;--wx-primary:#121314;--wx-primary-hover:#2a2c2e;--wx-primary-fg:#fff;--wx-launcher-bg:#121314;--wx-launcher-fg:#fff;--wx-success:#10b981;--wx-danger:#ef4444;--wx-radius-sm:8px;--wx-radius:12px;--wx-radius-lg:20px;--wx-radius-xl:28px}:host([data-theme=dark]),[data-theme=dark]{--wx-bg:#121314;--wx-bg-elevated:#1e1f21;--wx-bg-elevated-2:#2a2c2e;--wx-fg:#f4f4f5;--wx-fg-muted:#a1a1aa;--wx-fg-subtle:#71717a;--wx-border:#2a2c2e;--wx-border-strong:#3f3f46;--wx-primary:#fff;--wx-primary-hover:#e4e4e7;--wx-primary-fg:#121314;--wx-launcher-bg:#fff;--wx-launcher-fg:#121314}:host *,:host :before,:host :after{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\"}:host{--color-wx-bg:var(--wx-bg);--color-wx-bg-elevated:var(--wx-bg-elevated);--color-wx-bg-elevated-2:var(--wx-bg-elevated-2);--color-wx-fg:var(--wx-fg);--color-wx-fg-muted:var(--wx-fg-muted);--color-wx-fg-subtle:var(--wx-fg-subtle);--color-wx-border:var(--wx-border);--color-wx-border-strong:var(--wx-border-strong);--color-wx-primary:var(--wx-primary);--color-wx-primary-hover:var(--wx-primary-hover);--color-wx-primary-fg:var(--wx-primary-fg);--color-wx-launcher-bg:var(--wx-launcher-bg);--color-wx-launcher-fg:var(--wx-launcher-fg);--color-wx-success:var(--wx-success);--color-wx-danger:var(--wx-danger);--radius-wx-sm:var(--wx-radius-sm);--radius-wx:var(--wx-radius);--radius-wx-lg:var(--wx-radius-lg);--radius-wx-xl:var(--wx-radius-xl);--font-sans:var(--font-geist-sans);--font-mono:var(--font-geist-mono)}html,body{height:100%;color:var(--wx-fg);background:0 0}body{font-family:var(--wx-font,var(--font-geist-sans)), system-ui, -apple-system, sans-serif;-webkit-font-smoothing:antialiased;margin:0;padding:0}button:not(:disabled),[role=button]:not([aria-disabled=true]),a[href],label[for],summary{cursor:pointer}button:disabled,[role=button][aria-disabled=true]{cursor:default}[data-wx-gis]>div,[data-wx-gis]>div>div{width:100%!important}[data-wx-gis] [role=button]{border-radius:var(--wx-radius)!important;width:100%!important;max-width:none!important;overflow:hidden!important}:host{font-family:var(--wx-font,var(--font-geist-sans)), system-ui, -apple-system, sans-serif;-webkit-font-smoothing:antialiased}*{-webkit-tap-highlight-color:transparent}[data-theme=dark] [data-wx-panel]{box-shadow:0 0 0 1px #ffffff0f,0 32px 80px #0000008c,0 0 48px #ffffff0a}[data-theme=dark] [data-wx-panel]:before{content:\"\";pointer-events:none;z-index:30;background:radial-gradient(circle at 0 0,#ffffff29 0%,#ffffff12 30%,#ffffff05 60%,#fff0 70%);width:260px;height:260px;position:absolute;top:0;left:0}[data-theme=dark] [data-wx-panel] header{background:0 0;border-bottom-color:#0000}[data-wx-panel]{box-shadow:0 24px 64px #0000002e}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-pan-x{syntax:\"*\";inherits:false}@property --tw-pan-y{syntax:\"*\";inherits:false}@property --tw-pinch-zoom{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:\"*\";inherits:false}@property --tw-gradient-from{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:\"*\";inherits:false}@property --tw-gradient-via-stops{syntax:\"*\";inherits:false}@property --tw-gradient-from-position{syntax:\"<length-percentage>\";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:\"<length-percentage>\";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:\"<length-percentage>\";inherits:false;initial-value:100%}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@property --tw-content{syntax:\"*\";inherits:false;initial-value:\"\"}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}", $ = Object.freeze({}), ry = {
	en: {
		...Ov,
		demo: $
	},
	"en-US": {
		...Av,
		demo: $
	},
	"en-GB": {
		...kv,
		demo: $
	},
	uk: {
		...Qv,
		demo: $
	},
	de: {
		...Ev,
		demo: $
	},
	es: {
		...jv,
		demo: $
	},
	"es-MX": {
		...Mv,
		demo: $
	},
	fr: {
		...Pv,
		demo: $
	},
	it: {
		...zv,
		demo: $
	},
	nl: {
		...Hv,
		demo: $
	},
	pt: {
		...Gv,
		demo: $
	},
	"pt-BR": {
		...Kv,
		demo: $
	},
	sv: {
		...Yv,
		demo: $
	},
	da: {
		...Tv,
		demo: $
	},
	no: {
		...Uv,
		demo: $
	},
	fi: {
		...Nv,
		demo: $
	},
	pl: {
		...Wv,
		demo: $
	},
	cs: {
		...wv,
		demo: $
	},
	sk: {
		...Jv,
		demo: $
	},
	tr: {
		...Zv,
		demo: $
	},
	ro: {
		...qv,
		demo: $
	},
	hu: {
		...Lv,
		demo: $
	},
	el: {
		...Dv,
		demo: $
	},
	ar: {
		...Cv,
		demo: $
	},
	he: {
		...Fv,
		demo: $
	},
	hi: {
		...Iv,
		demo: $
	},
	th: {
		...Xv,
		demo: $
	},
	vi: {
		...$v,
		demo: $
	},
	id: {
		...Rv,
		demo: $
	},
	ja: {
		...Bv,
		demo: $
	},
	ko: {
		...Vv,
		demo: $
	},
	zh: {
		...ey,
		demo: $
	},
	"zh-TW": {
		...ty,
		demo: $
	}
};
function iy({ publicKey: e, user: t, mode: n, configOverride: r, config: i, previewData: a, onResize: o, onOpen: s, onClose: c, className: l, style: u }) {
	let d = J(null), [f, p] = Y(null), [m, h] = Y(() => Gt()), [g, _] = Y(null);
	q(() => _n((e) => {
		Wt(e) && h(e);
	}), []);
	let v = J(o), y = J(s), b = J(c);
	q(() => {
		v.current = o, y.current = s, b.current = c;
	}, [
		o,
		s,
		c
	]), q(() => {
		je(e ?? null);
	}, [e]), q(() => {
		let e = d.current;
		if (!e) return;
		let t = e.shadowRoot ?? e.attachShadow({ mode: "open" });
		if (typeof CSSStyleSheet < "u" && "replaceSync" in CSSStyleSheet.prototype) {
			let e = new CSSStyleSheet();
			e.replaceSync(ny), t.adoptedStyleSheets = [...t.adoptedStyleSheets ?? [], e];
		} else if (!t.querySelector("style[data-wexio-style]")) {
			let e = document.createElement("style");
			e.setAttribute("data-wexio-style", "true"), e.textContent = ny, t.appendChild(e);
		}
		let n = t.querySelector("div[data-wexio-portal-target]");
		n || (n = document.createElement("div"), n.setAttribute("data-wexio-portal-target", "true"), n.style.display = "contents", t.appendChild(n)), p(n), _(t);
	}, []);
	let x = pt(() => {
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
			onLocaleStrategy: (e) => h(Gt(e, { ignoreVisitorOverrides: o === "preview" }))
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
	return /* @__PURE__ */ X("div", {
		ref: d,
		"data-wexio-widget-host": "true",
		className: l,
		style: u,
		children: f ? _t(/* @__PURE__ */ X(ay, {
			env: x,
			locale: m,
			children: /* @__PURE__ */ X(xv, {})
		}), f) : null
	});
}
function ay({ env: e, locale: t, children: n }) {
	let r = ry[t];
	return /* @__PURE__ */ X(yt, {
		client: pt(() => E(), []),
		children: /* @__PURE__ */ X(bt, {
			locale: t,
			messages: r,
			timeZone: typeof Intl < "u" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "UTC",
			children: /* @__PURE__ */ X(C, {
				env: e,
				children: n
			})
		})
	});
}
//#endregion
export { iy as WexioWidget, je as setWexioPublicKey };

//# sourceMappingURL=widget-react.js.map