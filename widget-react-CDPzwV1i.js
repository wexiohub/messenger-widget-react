import "react";
import "react-dom";
import "react/jsx-runtime";
import "react-dom/client";
import { C as e, S as t, b as n, d as r, w as i, x as a, y as o } from "./widget-react-DE7AVrCo.js";
import { O as s, P as c, R as l, Y as u, b as d, k as f, t as p, y as m } from "./widget-react-BfPdgAQ-.js";
import { i as h, n as g, t as _ } from "./widget-react-BxvW64LH.js";
import { createElement as v, useCallback as y, useEffect as b, useMemo as x, useRef as S, useState as C } from "react";
import { Fragment as w, jsx as T, jsxs as E } from "react/jsx-runtime";
//#region \0@oxc-project+runtime@0.129.0/helpers/typeof.js
function D(e) {
	"@babel/helpers - typeof";
	return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, D(e);
}
var O = n((() => {}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/toPrimitive.js
function k(e, t) {
	if (D(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (D(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ee = n((() => {
	O();
}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/toPropertyKey.js
function te(e) {
	var t = k(e, "string");
	return D(t) == "symbol" ? t : t + "";
}
var A = n((() => {
	O(), ee();
}));
//#endregion
//#region \0@oxc-project+runtime@0.129.0/helpers/defineProperty.js
function j(e, t, n) {
	return (t = te(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var M = n((() => {
	A();
})), N = _("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]);
//#endregion
//#region lib/detect-html.ts
function ne(e) {
	if (!e) return !1;
	let t = e.trimStart().slice(0, 200);
	return /^<(?:[a-z!][^>]*|!--)/i.test(t);
}
//#endregion
//#region lib/graphql/generated/types.ts
M();
var re = /* @__PURE__ */ function(e) {
	return e.HTML = "HTML", e.MARKDOWN = "MARKDOWN", e;
}({}), P = /* @__PURE__ */ function(e) {
	return e.HELP = "HELP", e.NEWS = "NEWS", e;
}({});
//#endregion
//#region lib/use-article-title-sink.ts
function ie(e, t) {
	b(() => {
		if (t) return e && t(e), () => t(null);
	}, [e, t]);
}
//#endregion
//#region lib/use-demo-translator.ts
var ae = ["en", "uk"];
async function oe(e) {
	switch (e) {
		case "uk": return (await import("./widget-react-D-QrEVpv.js").then((e) => e.n)).default;
		default: return (await import("./widget-react-DSw03RG7.js").then((e) => e.n)).default;
	}
}
function se(e) {
	return (t) => {
		let n = e;
		for (let e of t.split(".")) if (n && typeof n == "object" && e in n) n = n[e];
		else return;
		return n;
	};
}
function ce(e, t) {
	let [n, r] = C(null);
	return b(() => {
		let t = !0;
		return oe(e).then((e) => {
			t && r({ raw: se(e) });
		}), () => {
			t = !1;
		};
	}, [e]), n ?? t;
}
//#endregion
//#region node_modules/comma-separated-tokens/index.js
function le(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var ue = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, de = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, fe = {};
function pe(e, t) {
	return ((t || fe).jsx ? de : ue).test(e);
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var me = /[ \t\n\f\r]/g;
function he(e) {
	return typeof e == "object" ? e.type === "text" ? ge(e.value) : !1 : ge(e);
}
function ge(e) {
	return e.replace(me, "") === "";
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var _e = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
_e.prototype.normal = {}, _e.prototype.property = {}, _e.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function ve(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new _e(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function ye(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var F = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
F.prototype.attribute = "", F.prototype.booleanish = !1, F.prototype.boolean = !1, F.prototype.commaOrSpaceSeparated = !1, F.prototype.commaSeparated = !1, F.prototype.defined = !1, F.prototype.mustUseProperty = !1, F.prototype.number = !1, F.prototype.overloadedBoolean = !1, F.prototype.property = "", F.prototype.spaceSeparated = !1, F.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var be = /* @__PURE__ */ a({
	boolean: () => I,
	booleanish: () => L,
	commaOrSpaceSeparated: () => B,
	commaSeparated: () => Ce,
	number: () => R,
	overloadedBoolean: () => Se,
	spaceSeparated: () => z
}), xe = 0, I = we(), L = we(), Se = we(), R = we(), z = we(), Ce = we(), B = we();
function we() {
	return 2 ** ++xe;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var Te = Object.keys(be), Ee = class extends F {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), De(this, "space", r), typeof n == "number") for (; ++i < Te.length;) {
			let e = Te[i];
			De(this, Te[i], (n & be[e]) === be[e]);
		}
	}
};
Ee.prototype.defined = !0;
function De(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function Oe(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new Ee(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[ye(r)] = r, n[ye(a.attribute)] = r;
	}
	return new _e(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var ke = Oe({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: L,
		ariaAutoComplete: null,
		ariaBusy: L,
		ariaChecked: L,
		ariaColCount: R,
		ariaColIndex: R,
		ariaColSpan: R,
		ariaControls: z,
		ariaCurrent: null,
		ariaDescribedBy: z,
		ariaDetails: null,
		ariaDisabled: L,
		ariaDropEffect: z,
		ariaErrorMessage: null,
		ariaExpanded: L,
		ariaFlowTo: z,
		ariaGrabbed: L,
		ariaHasPopup: null,
		ariaHidden: L,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: z,
		ariaLevel: R,
		ariaLive: null,
		ariaModal: L,
		ariaMultiLine: L,
		ariaMultiSelectable: L,
		ariaOrientation: null,
		ariaOwns: z,
		ariaPlaceholder: null,
		ariaPosInSet: R,
		ariaPressed: L,
		ariaReadOnly: L,
		ariaRelevant: null,
		ariaRequired: L,
		ariaRoleDescription: z,
		ariaRowCount: R,
		ariaRowIndex: R,
		ariaRowSpan: R,
		ariaSelected: L,
		ariaSetSize: R,
		ariaSort: null,
		ariaValueMax: R,
		ariaValueMin: R,
		ariaValueNow: R,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
function Ae(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function je(e, t) {
	return Ae(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var Me = Oe({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: Ce,
		acceptCharset: z,
		accessKey: z,
		action: null,
		allow: null,
		allowFullScreen: I,
		allowPaymentRequest: I,
		allowUserMedia: I,
		alt: null,
		as: null,
		async: I,
		autoCapitalize: null,
		autoComplete: z,
		autoFocus: I,
		autoPlay: I,
		blocking: z,
		capture: null,
		charSet: null,
		checked: I,
		cite: null,
		className: z,
		cols: R,
		colSpan: null,
		content: null,
		contentEditable: L,
		controls: I,
		controlsList: z,
		coords: R | Ce,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: I,
		defer: I,
		dir: null,
		dirName: null,
		disabled: I,
		download: Se,
		draggable: L,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: I,
		formTarget: null,
		headers: z,
		height: R,
		hidden: Se,
		high: R,
		href: null,
		hrefLang: null,
		htmlFor: z,
		httpEquiv: z,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: I,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: I,
		itemId: null,
		itemProp: z,
		itemRef: z,
		itemScope: I,
		itemType: z,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: I,
		low: R,
		manifest: null,
		max: null,
		maxLength: R,
		media: null,
		method: null,
		min: null,
		minLength: R,
		multiple: I,
		muted: I,
		name: null,
		nonce: null,
		noModule: I,
		noValidate: I,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: I,
		optimum: R,
		pattern: null,
		ping: z,
		placeholder: null,
		playsInline: I,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: I,
		referrerPolicy: null,
		rel: z,
		required: I,
		reversed: I,
		rows: R,
		rowSpan: R,
		sandbox: z,
		scope: null,
		scoped: I,
		seamless: I,
		selected: I,
		shadowRootClonable: I,
		shadowRootDelegatesFocus: I,
		shadowRootMode: null,
		shape: null,
		size: R,
		sizes: null,
		slot: null,
		span: R,
		spellCheck: L,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: R,
		step: null,
		style: null,
		tabIndex: R,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: I,
		useMap: null,
		value: L,
		width: R,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: z,
		axis: null,
		background: null,
		bgColor: null,
		border: R,
		borderColor: null,
		bottomMargin: R,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: I,
		declare: I,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: R,
		leftMargin: R,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: R,
		marginWidth: R,
		noResize: I,
		noHref: I,
		noShade: I,
		noWrap: I,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: R,
		rules: null,
		scheme: null,
		scrolling: L,
		standby: null,
		summary: null,
		text: null,
		topMargin: R,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: R,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: I,
		disableRemotePlayback: I,
		prefix: null,
		property: null,
		results: R,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: je
}), Ne = Oe({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: B,
		accentHeight: R,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: R,
		amplitude: R,
		arabicForm: null,
		ascent: R,
		attributeName: null,
		attributeType: null,
		azimuth: R,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: R,
		by: null,
		calcMode: null,
		capHeight: R,
		className: z,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: R,
		diffuseConstant: R,
		direction: null,
		display: null,
		dur: null,
		divisor: R,
		dominantBaseline: null,
		download: I,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: R,
		enableBackground: null,
		end: null,
		event: null,
		exponent: R,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: R,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: Ce,
		g2: Ce,
		glyphName: Ce,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: R,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: R,
		horizOriginX: R,
		horizOriginY: R,
		id: null,
		ideographic: R,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: R,
		k: R,
		k1: R,
		k2: R,
		k3: R,
		k4: R,
		kernelMatrix: B,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: R,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: R,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: R,
		overlineThickness: R,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: R,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: z,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: R,
		pointsAtY: R,
		pointsAtZ: R,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: B,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: B,
		rev: B,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: B,
		requiredFeatures: B,
		requiredFonts: B,
		requiredFormats: B,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: R,
		specularExponent: R,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: R,
		strikethroughThickness: R,
		string: null,
		stroke: null,
		strokeDashArray: B,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: R,
		strokeOpacity: R,
		strokeWidth: null,
		style: null,
		surfaceScale: R,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: B,
		tabIndex: R,
		tableValues: null,
		target: null,
		targetX: R,
		targetY: R,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: B,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: R,
		underlineThickness: R,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: R,
		values: null,
		vAlphabetic: R,
		vMathematical: R,
		vectorEffect: null,
		vHanging: R,
		vIdeographic: R,
		version: null,
		vertAdvY: R,
		vertOriginX: R,
		vertOriginY: R,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: R,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: Ae
}), Pe = Oe({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), Fe = Oe({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: je
}), Ie = Oe({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), Le = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
}, Re = /[A-Z]/g, ze = /-[a-z]/g, Be = /^data[-\w.:]+$/i;
function Ve(e, t) {
	let n = ye(t), r = t, i = F;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && Be.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(ze, Ue);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!ze.test(e)) {
				let n = e.replace(Re, He);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = Ee;
	}
	return new i(r, t);
}
function He(e) {
	return "-" + e.toLowerCase();
}
function Ue(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var We = ve([
	ke,
	Me,
	Pe,
	Fe,
	Ie
], "html"), Ge = ve([
	ke,
	Ne,
	Pe,
	Fe,
	Ie
], "svg");
//#endregion
//#region node_modules/space-separated-tokens/index.js
function Ke(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/inline-style-parser/cjs/index.js
var qe = /* @__PURE__ */ o(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g, u = "\n", d = "/", f = "*", p = "", m = "comment", h = "declaration";
	function g(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t = t || {};
		var l = 1, g = 1;
		function v(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf(u);
			g = ~n ? e.length - n : g + e.length;
		}
		function y() {
			var e = {
				line: l,
				column: g
			};
			return function(t) {
				return t.position = new b(e), C(), t;
			};
		}
		function b(e) {
			this.start = e, this.end = {
				line: l,
				column: g
			}, this.source = t.source;
		}
		b.prototype.content = e;
		function x(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + g + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = g, r.source = e, !t.silent) throw r;
		}
		function S(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return v(r), e = e.slice(r.length), n;
			}
		}
		function C() {
			S(i);
		}
		function w(e) {
			var t;
			for (e = e || []; t = T();) t !== !1 && e.push(t);
			return e;
		}
		function T() {
			var t = y();
			if (!(d != e.charAt(0) || f != e.charAt(1))) {
				for (var n = 2; p != e.charAt(n) && (f != e.charAt(n) || d != e.charAt(n + 1));) ++n;
				if (n += 2, p === e.charAt(n - 1)) return x("End of comment missing");
				var r = e.slice(2, n - 2);
				return g += 2, v(r), e = e.slice(n), g += 2, t({
					type: m,
					comment: r
				});
			}
		}
		function E() {
			var e = y(), t = S(a);
			if (t) {
				if (T(), !S(o)) return x("property missing ':'");
				var r = S(s), i = e({
					type: h,
					property: _(t[0].replace(n, p)),
					value: r ? _(r[0].replace(n, p)) : p
				});
				return S(c), i;
			}
		}
		function D() {
			var e = [];
			w(e);
			for (var t; t = E();) t !== !1 && (e.push(t), w(e));
			return e;
		}
		return C(), D();
	}
	function _(e) {
		return e ? e.replace(l, p) : p;
	}
	t.exports = g;
})), Je = /* @__PURE__ */ o(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(qe());
	function r(e, t) {
		let r = null;
		if (!e || typeof e != "string") return r;
		let i = (0, n.default)(e), a = typeof t == "function";
		return i.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: n, value: i } = e;
			a ? t(n, i, e) : i && (r = r || {}, r[n] = i);
		}), r;
	}
})), Ye = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), Xe = /* @__PURE__ */ o(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(Je()), r = Ye();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), Ze = $e("end"), Qe = $e("start");
function $e(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function et(e) {
	let t = Qe(e), n = Ze(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function tt(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? rt(e.position) : "start" in e || "end" in e ? rt(e) : "line" in e || "column" in e ? nt(e) : "";
}
function nt(e) {
	return it(e && e.line) + ":" + it(e && e.column);
}
function rt(e) {
	return nt(e && e.start) + "-" + nt(e && e.end);
}
function it(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region node_modules/vfile-message/lib/index.js
var V = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = tt(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
V.prototype.file = "", V.prototype.name = "", V.prototype.reason = "", V.prototype.message = "", V.prototype.stack = "", V.prototype.column = void 0, V.prototype.line = void 0, V.prototype.ancestors = void 0, V.prototype.cause = void 0, V.prototype.fatal = void 0, V.prototype.place = void 0, V.prototype.ruleId = void 0, V.prototype.source = void 0;
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var at = /* @__PURE__ */ i(Xe(), 1), ot = {}.hasOwnProperty, st = /* @__PURE__ */ new Map(), ct = /[A-Z]/g, lt = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), ut = new Set(["td", "th"]), dt = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function ft(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = Ct(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = St(n, t.jsx, t.jsxs);
	}
	let i = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: r,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: n,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: t.passKeys !== !1,
		passNode: t.passNode || !1,
		schema: t.space === "svg" ? Ge : We,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = pt(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function pt(e, t, n) {
	if (t.type === "element") return mt(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return ht(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return _t(e, t, n);
	if (t.type === "mdxjsEsm") return gt(e, t);
	if (t.type === "root") return vt(e, t, n);
	if (t.type === "text") return yt(e, t);
}
function mt(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Ge, e.schema = i), e.ancestors.push(t);
	let a = kt(e, t.tagName, !1), o = wt(e, t), s = Et(e, t);
	return lt.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e == "string" ? !he(e) : !0;
	})), bt(e, o, a, t), xt(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function ht(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	At(e, t.position);
}
function gt(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	At(e, t.position);
}
function _t(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = Ge, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : kt(e, t.name, !0), o = Tt(e, t), s = Et(e, t);
	return bt(e, o, a, t), xt(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function vt(e, t, n) {
	let r = {};
	return xt(r, Et(e, t)), e.create(t, e.Fragment, r, n);
}
function yt(e, t) {
	return t.value;
}
function bt(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function xt(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function St(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function Ct(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = Qe(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function wt(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && ot.call(t.properties, i)) {
		let a = Dt(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && ut.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style || (n.style = {});
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function Tt(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else At(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else At(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function Et(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : st;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = pt(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function Dt(e, t, n) {
	let r = Ve(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? le(n) : Ke(n)), r.property === "style") {
			let t = typeof n == "object" ? n : Ot(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = jt(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? Le[r.property] || r.property : r.attribute, n];
	}
}
function Ot(e, t) {
	try {
		return (0, at.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new V("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = dt + "#cannot-parse-style-attribute", r;
	}
}
function kt(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = pe(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = pe(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return ot.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	At(e);
}
function At(e, t) {
	let n = new V("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = dt + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function jt(e) {
	let t = {}, n;
	for (n in e) ot.call(e, n) && (t[Mt(n)] = e[n]);
	return t;
}
function Mt(e) {
	let t = e.replace(ct, Nt);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Nt(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var Pt = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
}, Ft = {};
function It(e, t) {
	let n = t || Ft;
	return Lt(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function Lt(e, t, n) {
	if (zt(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return Rt(e.children, t, n);
	}
	return Array.isArray(e) ? Rt(e, t, n) : "";
}
function Rt(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = Lt(e[i], t, n);
	return r.join("");
}
function zt(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region node_modules/character-entities/index.js
var Bt = {
	AElig: "Æ",
	AMP: "&",
	Aacute: "Á",
	Abreve: "Ă",
	Acirc: "Â",
	Acy: "А",
	Afr: "𝔄",
	Agrave: "À",
	Alpha: "Α",
	Amacr: "Ā",
	And: "⩓",
	Aogon: "Ą",
	Aopf: "𝔸",
	ApplyFunction: "⁡",
	Aring: "Å",
	Ascr: "𝒜",
	Assign: "≔",
	Atilde: "Ã",
	Auml: "Ä",
	Backslash: "∖",
	Barv: "⫧",
	Barwed: "⌆",
	Bcy: "Б",
	Because: "∵",
	Bernoullis: "ℬ",
	Beta: "Β",
	Bfr: "𝔅",
	Bopf: "𝔹",
	Breve: "˘",
	Bscr: "ℬ",
	Bumpeq: "≎",
	CHcy: "Ч",
	COPY: "©",
	Cacute: "Ć",
	Cap: "⋒",
	CapitalDifferentialD: "ⅅ",
	Cayleys: "ℭ",
	Ccaron: "Č",
	Ccedil: "Ç",
	Ccirc: "Ĉ",
	Cconint: "∰",
	Cdot: "Ċ",
	Cedilla: "¸",
	CenterDot: "·",
	Cfr: "ℭ",
	Chi: "Χ",
	CircleDot: "⊙",
	CircleMinus: "⊖",
	CirclePlus: "⊕",
	CircleTimes: "⊗",
	ClockwiseContourIntegral: "∲",
	CloseCurlyDoubleQuote: "”",
	CloseCurlyQuote: "’",
	Colon: "∷",
	Colone: "⩴",
	Congruent: "≡",
	Conint: "∯",
	ContourIntegral: "∮",
	Copf: "ℂ",
	Coproduct: "∐",
	CounterClockwiseContourIntegral: "∳",
	Cross: "⨯",
	Cscr: "𝒞",
	Cup: "⋓",
	CupCap: "≍",
	DD: "ⅅ",
	DDotrahd: "⤑",
	DJcy: "Ђ",
	DScy: "Ѕ",
	DZcy: "Џ",
	Dagger: "‡",
	Darr: "↡",
	Dashv: "⫤",
	Dcaron: "Ď",
	Dcy: "Д",
	Del: "∇",
	Delta: "Δ",
	Dfr: "𝔇",
	DiacriticalAcute: "´",
	DiacriticalDot: "˙",
	DiacriticalDoubleAcute: "˝",
	DiacriticalGrave: "`",
	DiacriticalTilde: "˜",
	Diamond: "⋄",
	DifferentialD: "ⅆ",
	Dopf: "𝔻",
	Dot: "¨",
	DotDot: "⃜",
	DotEqual: "≐",
	DoubleContourIntegral: "∯",
	DoubleDot: "¨",
	DoubleDownArrow: "⇓",
	DoubleLeftArrow: "⇐",
	DoubleLeftRightArrow: "⇔",
	DoubleLeftTee: "⫤",
	DoubleLongLeftArrow: "⟸",
	DoubleLongLeftRightArrow: "⟺",
	DoubleLongRightArrow: "⟹",
	DoubleRightArrow: "⇒",
	DoubleRightTee: "⊨",
	DoubleUpArrow: "⇑",
	DoubleUpDownArrow: "⇕",
	DoubleVerticalBar: "∥",
	DownArrow: "↓",
	DownArrowBar: "⤓",
	DownArrowUpArrow: "⇵",
	DownBreve: "̑",
	DownLeftRightVector: "⥐",
	DownLeftTeeVector: "⥞",
	DownLeftVector: "↽",
	DownLeftVectorBar: "⥖",
	DownRightTeeVector: "⥟",
	DownRightVector: "⇁",
	DownRightVectorBar: "⥗",
	DownTee: "⊤",
	DownTeeArrow: "↧",
	Downarrow: "⇓",
	Dscr: "𝒟",
	Dstrok: "Đ",
	ENG: "Ŋ",
	ETH: "Ð",
	Eacute: "É",
	Ecaron: "Ě",
	Ecirc: "Ê",
	Ecy: "Э",
	Edot: "Ė",
	Efr: "𝔈",
	Egrave: "È",
	Element: "∈",
	Emacr: "Ē",
	EmptySmallSquare: "◻",
	EmptyVerySmallSquare: "▫",
	Eogon: "Ę",
	Eopf: "𝔼",
	Epsilon: "Ε",
	Equal: "⩵",
	EqualTilde: "≂",
	Equilibrium: "⇌",
	Escr: "ℰ",
	Esim: "⩳",
	Eta: "Η",
	Euml: "Ë",
	Exists: "∃",
	ExponentialE: "ⅇ",
	Fcy: "Ф",
	Ffr: "𝔉",
	FilledSmallSquare: "◼",
	FilledVerySmallSquare: "▪",
	Fopf: "𝔽",
	ForAll: "∀",
	Fouriertrf: "ℱ",
	Fscr: "ℱ",
	GJcy: "Ѓ",
	GT: ">",
	Gamma: "Γ",
	Gammad: "Ϝ",
	Gbreve: "Ğ",
	Gcedil: "Ģ",
	Gcirc: "Ĝ",
	Gcy: "Г",
	Gdot: "Ġ",
	Gfr: "𝔊",
	Gg: "⋙",
	Gopf: "𝔾",
	GreaterEqual: "≥",
	GreaterEqualLess: "⋛",
	GreaterFullEqual: "≧",
	GreaterGreater: "⪢",
	GreaterLess: "≷",
	GreaterSlantEqual: "⩾",
	GreaterTilde: "≳",
	Gscr: "𝒢",
	Gt: "≫",
	HARDcy: "Ъ",
	Hacek: "ˇ",
	Hat: "^",
	Hcirc: "Ĥ",
	Hfr: "ℌ",
	HilbertSpace: "ℋ",
	Hopf: "ℍ",
	HorizontalLine: "─",
	Hscr: "ℋ",
	Hstrok: "Ħ",
	HumpDownHump: "≎",
	HumpEqual: "≏",
	IEcy: "Е",
	IJlig: "Ĳ",
	IOcy: "Ё",
	Iacute: "Í",
	Icirc: "Î",
	Icy: "И",
	Idot: "İ",
	Ifr: "ℑ",
	Igrave: "Ì",
	Im: "ℑ",
	Imacr: "Ī",
	ImaginaryI: "ⅈ",
	Implies: "⇒",
	Int: "∬",
	Integral: "∫",
	Intersection: "⋂",
	InvisibleComma: "⁣",
	InvisibleTimes: "⁢",
	Iogon: "Į",
	Iopf: "𝕀",
	Iota: "Ι",
	Iscr: "ℐ",
	Itilde: "Ĩ",
	Iukcy: "І",
	Iuml: "Ï",
	Jcirc: "Ĵ",
	Jcy: "Й",
	Jfr: "𝔍",
	Jopf: "𝕁",
	Jscr: "𝒥",
	Jsercy: "Ј",
	Jukcy: "Є",
	KHcy: "Х",
	KJcy: "Ќ",
	Kappa: "Κ",
	Kcedil: "Ķ",
	Kcy: "К",
	Kfr: "𝔎",
	Kopf: "𝕂",
	Kscr: "𝒦",
	LJcy: "Љ",
	LT: "<",
	Lacute: "Ĺ",
	Lambda: "Λ",
	Lang: "⟪",
	Laplacetrf: "ℒ",
	Larr: "↞",
	Lcaron: "Ľ",
	Lcedil: "Ļ",
	Lcy: "Л",
	LeftAngleBracket: "⟨",
	LeftArrow: "←",
	LeftArrowBar: "⇤",
	LeftArrowRightArrow: "⇆",
	LeftCeiling: "⌈",
	LeftDoubleBracket: "⟦",
	LeftDownTeeVector: "⥡",
	LeftDownVector: "⇃",
	LeftDownVectorBar: "⥙",
	LeftFloor: "⌊",
	LeftRightArrow: "↔",
	LeftRightVector: "⥎",
	LeftTee: "⊣",
	LeftTeeArrow: "↤",
	LeftTeeVector: "⥚",
	LeftTriangle: "⊲",
	LeftTriangleBar: "⧏",
	LeftTriangleEqual: "⊴",
	LeftUpDownVector: "⥑",
	LeftUpTeeVector: "⥠",
	LeftUpVector: "↿",
	LeftUpVectorBar: "⥘",
	LeftVector: "↼",
	LeftVectorBar: "⥒",
	Leftarrow: "⇐",
	Leftrightarrow: "⇔",
	LessEqualGreater: "⋚",
	LessFullEqual: "≦",
	LessGreater: "≶",
	LessLess: "⪡",
	LessSlantEqual: "⩽",
	LessTilde: "≲",
	Lfr: "𝔏",
	Ll: "⋘",
	Lleftarrow: "⇚",
	Lmidot: "Ŀ",
	LongLeftArrow: "⟵",
	LongLeftRightArrow: "⟷",
	LongRightArrow: "⟶",
	Longleftarrow: "⟸",
	Longleftrightarrow: "⟺",
	Longrightarrow: "⟹",
	Lopf: "𝕃",
	LowerLeftArrow: "↙",
	LowerRightArrow: "↘",
	Lscr: "ℒ",
	Lsh: "↰",
	Lstrok: "Ł",
	Lt: "≪",
	Map: "⤅",
	Mcy: "М",
	MediumSpace: " ",
	Mellintrf: "ℳ",
	Mfr: "𝔐",
	MinusPlus: "∓",
	Mopf: "𝕄",
	Mscr: "ℳ",
	Mu: "Μ",
	NJcy: "Њ",
	Nacute: "Ń",
	Ncaron: "Ň",
	Ncedil: "Ņ",
	Ncy: "Н",
	NegativeMediumSpace: "​",
	NegativeThickSpace: "​",
	NegativeThinSpace: "​",
	NegativeVeryThinSpace: "​",
	NestedGreaterGreater: "≫",
	NestedLessLess: "≪",
	NewLine: "\n",
	Nfr: "𝔑",
	NoBreak: "⁠",
	NonBreakingSpace: "\xA0",
	Nopf: "ℕ",
	Not: "⫬",
	NotCongruent: "≢",
	NotCupCap: "≭",
	NotDoubleVerticalBar: "∦",
	NotElement: "∉",
	NotEqual: "≠",
	NotEqualTilde: "≂̸",
	NotExists: "∄",
	NotGreater: "≯",
	NotGreaterEqual: "≱",
	NotGreaterFullEqual: "≧̸",
	NotGreaterGreater: "≫̸",
	NotGreaterLess: "≹",
	NotGreaterSlantEqual: "⩾̸",
	NotGreaterTilde: "≵",
	NotHumpDownHump: "≎̸",
	NotHumpEqual: "≏̸",
	NotLeftTriangle: "⋪",
	NotLeftTriangleBar: "⧏̸",
	NotLeftTriangleEqual: "⋬",
	NotLess: "≮",
	NotLessEqual: "≰",
	NotLessGreater: "≸",
	NotLessLess: "≪̸",
	NotLessSlantEqual: "⩽̸",
	NotLessTilde: "≴",
	NotNestedGreaterGreater: "⪢̸",
	NotNestedLessLess: "⪡̸",
	NotPrecedes: "⊀",
	NotPrecedesEqual: "⪯̸",
	NotPrecedesSlantEqual: "⋠",
	NotReverseElement: "∌",
	NotRightTriangle: "⋫",
	NotRightTriangleBar: "⧐̸",
	NotRightTriangleEqual: "⋭",
	NotSquareSubset: "⊏̸",
	NotSquareSubsetEqual: "⋢",
	NotSquareSuperset: "⊐̸",
	NotSquareSupersetEqual: "⋣",
	NotSubset: "⊂⃒",
	NotSubsetEqual: "⊈",
	NotSucceeds: "⊁",
	NotSucceedsEqual: "⪰̸",
	NotSucceedsSlantEqual: "⋡",
	NotSucceedsTilde: "≿̸",
	NotSuperset: "⊃⃒",
	NotSupersetEqual: "⊉",
	NotTilde: "≁",
	NotTildeEqual: "≄",
	NotTildeFullEqual: "≇",
	NotTildeTilde: "≉",
	NotVerticalBar: "∤",
	Nscr: "𝒩",
	Ntilde: "Ñ",
	Nu: "Ν",
	OElig: "Œ",
	Oacute: "Ó",
	Ocirc: "Ô",
	Ocy: "О",
	Odblac: "Ő",
	Ofr: "𝔒",
	Ograve: "Ò",
	Omacr: "Ō",
	Omega: "Ω",
	Omicron: "Ο",
	Oopf: "𝕆",
	OpenCurlyDoubleQuote: "“",
	OpenCurlyQuote: "‘",
	Or: "⩔",
	Oscr: "𝒪",
	Oslash: "Ø",
	Otilde: "Õ",
	Otimes: "⨷",
	Ouml: "Ö",
	OverBar: "‾",
	OverBrace: "⏞",
	OverBracket: "⎴",
	OverParenthesis: "⏜",
	PartialD: "∂",
	Pcy: "П",
	Pfr: "𝔓",
	Phi: "Φ",
	Pi: "Π",
	PlusMinus: "±",
	Poincareplane: "ℌ",
	Popf: "ℙ",
	Pr: "⪻",
	Precedes: "≺",
	PrecedesEqual: "⪯",
	PrecedesSlantEqual: "≼",
	PrecedesTilde: "≾",
	Prime: "″",
	Product: "∏",
	Proportion: "∷",
	Proportional: "∝",
	Pscr: "𝒫",
	Psi: "Ψ",
	QUOT: "\"",
	Qfr: "𝔔",
	Qopf: "ℚ",
	Qscr: "𝒬",
	RBarr: "⤐",
	REG: "®",
	Racute: "Ŕ",
	Rang: "⟫",
	Rarr: "↠",
	Rarrtl: "⤖",
	Rcaron: "Ř",
	Rcedil: "Ŗ",
	Rcy: "Р",
	Re: "ℜ",
	ReverseElement: "∋",
	ReverseEquilibrium: "⇋",
	ReverseUpEquilibrium: "⥯",
	Rfr: "ℜ",
	Rho: "Ρ",
	RightAngleBracket: "⟩",
	RightArrow: "→",
	RightArrowBar: "⇥",
	RightArrowLeftArrow: "⇄",
	RightCeiling: "⌉",
	RightDoubleBracket: "⟧",
	RightDownTeeVector: "⥝",
	RightDownVector: "⇂",
	RightDownVectorBar: "⥕",
	RightFloor: "⌋",
	RightTee: "⊢",
	RightTeeArrow: "↦",
	RightTeeVector: "⥛",
	RightTriangle: "⊳",
	RightTriangleBar: "⧐",
	RightTriangleEqual: "⊵",
	RightUpDownVector: "⥏",
	RightUpTeeVector: "⥜",
	RightUpVector: "↾",
	RightUpVectorBar: "⥔",
	RightVector: "⇀",
	RightVectorBar: "⥓",
	Rightarrow: "⇒",
	Ropf: "ℝ",
	RoundImplies: "⥰",
	Rrightarrow: "⇛",
	Rscr: "ℛ",
	Rsh: "↱",
	RuleDelayed: "⧴",
	SHCHcy: "Щ",
	SHcy: "Ш",
	SOFTcy: "Ь",
	Sacute: "Ś",
	Sc: "⪼",
	Scaron: "Š",
	Scedil: "Ş",
	Scirc: "Ŝ",
	Scy: "С",
	Sfr: "𝔖",
	ShortDownArrow: "↓",
	ShortLeftArrow: "←",
	ShortRightArrow: "→",
	ShortUpArrow: "↑",
	Sigma: "Σ",
	SmallCircle: "∘",
	Sopf: "𝕊",
	Sqrt: "√",
	Square: "□",
	SquareIntersection: "⊓",
	SquareSubset: "⊏",
	SquareSubsetEqual: "⊑",
	SquareSuperset: "⊐",
	SquareSupersetEqual: "⊒",
	SquareUnion: "⊔",
	Sscr: "𝒮",
	Star: "⋆",
	Sub: "⋐",
	Subset: "⋐",
	SubsetEqual: "⊆",
	Succeeds: "≻",
	SucceedsEqual: "⪰",
	SucceedsSlantEqual: "≽",
	SucceedsTilde: "≿",
	SuchThat: "∋",
	Sum: "∑",
	Sup: "⋑",
	Superset: "⊃",
	SupersetEqual: "⊇",
	Supset: "⋑",
	THORN: "Þ",
	TRADE: "™",
	TSHcy: "Ћ",
	TScy: "Ц",
	Tab: "	",
	Tau: "Τ",
	Tcaron: "Ť",
	Tcedil: "Ţ",
	Tcy: "Т",
	Tfr: "𝔗",
	Therefore: "∴",
	Theta: "Θ",
	ThickSpace: "  ",
	ThinSpace: " ",
	Tilde: "∼",
	TildeEqual: "≃",
	TildeFullEqual: "≅",
	TildeTilde: "≈",
	Topf: "𝕋",
	TripleDot: "⃛",
	Tscr: "𝒯",
	Tstrok: "Ŧ",
	Uacute: "Ú",
	Uarr: "↟",
	Uarrocir: "⥉",
	Ubrcy: "Ў",
	Ubreve: "Ŭ",
	Ucirc: "Û",
	Ucy: "У",
	Udblac: "Ű",
	Ufr: "𝔘",
	Ugrave: "Ù",
	Umacr: "Ū",
	UnderBar: "_",
	UnderBrace: "⏟",
	UnderBracket: "⎵",
	UnderParenthesis: "⏝",
	Union: "⋃",
	UnionPlus: "⊎",
	Uogon: "Ų",
	Uopf: "𝕌",
	UpArrow: "↑",
	UpArrowBar: "⤒",
	UpArrowDownArrow: "⇅",
	UpDownArrow: "↕",
	UpEquilibrium: "⥮",
	UpTee: "⊥",
	UpTeeArrow: "↥",
	Uparrow: "⇑",
	Updownarrow: "⇕",
	UpperLeftArrow: "↖",
	UpperRightArrow: "↗",
	Upsi: "ϒ",
	Upsilon: "Υ",
	Uring: "Ů",
	Uscr: "𝒰",
	Utilde: "Ũ",
	Uuml: "Ü",
	VDash: "⊫",
	Vbar: "⫫",
	Vcy: "В",
	Vdash: "⊩",
	Vdashl: "⫦",
	Vee: "⋁",
	Verbar: "‖",
	Vert: "‖",
	VerticalBar: "∣",
	VerticalLine: "|",
	VerticalSeparator: "❘",
	VerticalTilde: "≀",
	VeryThinSpace: " ",
	Vfr: "𝔙",
	Vopf: "𝕍",
	Vscr: "𝒱",
	Vvdash: "⊪",
	Wcirc: "Ŵ",
	Wedge: "⋀",
	Wfr: "𝔚",
	Wopf: "𝕎",
	Wscr: "𝒲",
	Xfr: "𝔛",
	Xi: "Ξ",
	Xopf: "𝕏",
	Xscr: "𝒳",
	YAcy: "Я",
	YIcy: "Ї",
	YUcy: "Ю",
	Yacute: "Ý",
	Ycirc: "Ŷ",
	Ycy: "Ы",
	Yfr: "𝔜",
	Yopf: "𝕐",
	Yscr: "𝒴",
	Yuml: "Ÿ",
	ZHcy: "Ж",
	Zacute: "Ź",
	Zcaron: "Ž",
	Zcy: "З",
	Zdot: "Ż",
	ZeroWidthSpace: "​",
	Zeta: "Ζ",
	Zfr: "ℨ",
	Zopf: "ℤ",
	Zscr: "𝒵",
	aacute: "á",
	abreve: "ă",
	ac: "∾",
	acE: "∾̳",
	acd: "∿",
	acirc: "â",
	acute: "´",
	acy: "а",
	aelig: "æ",
	af: "⁡",
	afr: "𝔞",
	agrave: "à",
	alefsym: "ℵ",
	aleph: "ℵ",
	alpha: "α",
	amacr: "ā",
	amalg: "⨿",
	amp: "&",
	and: "∧",
	andand: "⩕",
	andd: "⩜",
	andslope: "⩘",
	andv: "⩚",
	ang: "∠",
	ange: "⦤",
	angle: "∠",
	angmsd: "∡",
	angmsdaa: "⦨",
	angmsdab: "⦩",
	angmsdac: "⦪",
	angmsdad: "⦫",
	angmsdae: "⦬",
	angmsdaf: "⦭",
	angmsdag: "⦮",
	angmsdah: "⦯",
	angrt: "∟",
	angrtvb: "⊾",
	angrtvbd: "⦝",
	angsph: "∢",
	angst: "Å",
	angzarr: "⍼",
	aogon: "ą",
	aopf: "𝕒",
	ap: "≈",
	apE: "⩰",
	apacir: "⩯",
	ape: "≊",
	apid: "≋",
	apos: "'",
	approx: "≈",
	approxeq: "≊",
	aring: "å",
	ascr: "𝒶",
	ast: "*",
	asymp: "≈",
	asympeq: "≍",
	atilde: "ã",
	auml: "ä",
	awconint: "∳",
	awint: "⨑",
	bNot: "⫭",
	backcong: "≌",
	backepsilon: "϶",
	backprime: "‵",
	backsim: "∽",
	backsimeq: "⋍",
	barvee: "⊽",
	barwed: "⌅",
	barwedge: "⌅",
	bbrk: "⎵",
	bbrktbrk: "⎶",
	bcong: "≌",
	bcy: "б",
	bdquo: "„",
	becaus: "∵",
	because: "∵",
	bemptyv: "⦰",
	bepsi: "϶",
	bernou: "ℬ",
	beta: "β",
	beth: "ℶ",
	between: "≬",
	bfr: "𝔟",
	bigcap: "⋂",
	bigcirc: "◯",
	bigcup: "⋃",
	bigodot: "⨀",
	bigoplus: "⨁",
	bigotimes: "⨂",
	bigsqcup: "⨆",
	bigstar: "★",
	bigtriangledown: "▽",
	bigtriangleup: "△",
	biguplus: "⨄",
	bigvee: "⋁",
	bigwedge: "⋀",
	bkarow: "⤍",
	blacklozenge: "⧫",
	blacksquare: "▪",
	blacktriangle: "▴",
	blacktriangledown: "▾",
	blacktriangleleft: "◂",
	blacktriangleright: "▸",
	blank: "␣",
	blk12: "▒",
	blk14: "░",
	blk34: "▓",
	block: "█",
	bne: "=⃥",
	bnequiv: "≡⃥",
	bnot: "⌐",
	bopf: "𝕓",
	bot: "⊥",
	bottom: "⊥",
	bowtie: "⋈",
	boxDL: "╗",
	boxDR: "╔",
	boxDl: "╖",
	boxDr: "╓",
	boxH: "═",
	boxHD: "╦",
	boxHU: "╩",
	boxHd: "╤",
	boxHu: "╧",
	boxUL: "╝",
	boxUR: "╚",
	boxUl: "╜",
	boxUr: "╙",
	boxV: "║",
	boxVH: "╬",
	boxVL: "╣",
	boxVR: "╠",
	boxVh: "╫",
	boxVl: "╢",
	boxVr: "╟",
	boxbox: "⧉",
	boxdL: "╕",
	boxdR: "╒",
	boxdl: "┐",
	boxdr: "┌",
	boxh: "─",
	boxhD: "╥",
	boxhU: "╨",
	boxhd: "┬",
	boxhu: "┴",
	boxminus: "⊟",
	boxplus: "⊞",
	boxtimes: "⊠",
	boxuL: "╛",
	boxuR: "╘",
	boxul: "┘",
	boxur: "└",
	boxv: "│",
	boxvH: "╪",
	boxvL: "╡",
	boxvR: "╞",
	boxvh: "┼",
	boxvl: "┤",
	boxvr: "├",
	bprime: "‵",
	breve: "˘",
	brvbar: "¦",
	bscr: "𝒷",
	bsemi: "⁏",
	bsim: "∽",
	bsime: "⋍",
	bsol: "\\",
	bsolb: "⧅",
	bsolhsub: "⟈",
	bull: "•",
	bullet: "•",
	bump: "≎",
	bumpE: "⪮",
	bumpe: "≏",
	bumpeq: "≏",
	cacute: "ć",
	cap: "∩",
	capand: "⩄",
	capbrcup: "⩉",
	capcap: "⩋",
	capcup: "⩇",
	capdot: "⩀",
	caps: "∩︀",
	caret: "⁁",
	caron: "ˇ",
	ccaps: "⩍",
	ccaron: "č",
	ccedil: "ç",
	ccirc: "ĉ",
	ccups: "⩌",
	ccupssm: "⩐",
	cdot: "ċ",
	cedil: "¸",
	cemptyv: "⦲",
	cent: "¢",
	centerdot: "·",
	cfr: "𝔠",
	chcy: "ч",
	check: "✓",
	checkmark: "✓",
	chi: "χ",
	cir: "○",
	cirE: "⧃",
	circ: "ˆ",
	circeq: "≗",
	circlearrowleft: "↺",
	circlearrowright: "↻",
	circledR: "®",
	circledS: "Ⓢ",
	circledast: "⊛",
	circledcirc: "⊚",
	circleddash: "⊝",
	cire: "≗",
	cirfnint: "⨐",
	cirmid: "⫯",
	cirscir: "⧂",
	clubs: "♣",
	clubsuit: "♣",
	colon: ":",
	colone: "≔",
	coloneq: "≔",
	comma: ",",
	commat: "@",
	comp: "∁",
	compfn: "∘",
	complement: "∁",
	complexes: "ℂ",
	cong: "≅",
	congdot: "⩭",
	conint: "∮",
	copf: "𝕔",
	coprod: "∐",
	copy: "©",
	copysr: "℗",
	crarr: "↵",
	cross: "✗",
	cscr: "𝒸",
	csub: "⫏",
	csube: "⫑",
	csup: "⫐",
	csupe: "⫒",
	ctdot: "⋯",
	cudarrl: "⤸",
	cudarrr: "⤵",
	cuepr: "⋞",
	cuesc: "⋟",
	cularr: "↶",
	cularrp: "⤽",
	cup: "∪",
	cupbrcap: "⩈",
	cupcap: "⩆",
	cupcup: "⩊",
	cupdot: "⊍",
	cupor: "⩅",
	cups: "∪︀",
	curarr: "↷",
	curarrm: "⤼",
	curlyeqprec: "⋞",
	curlyeqsucc: "⋟",
	curlyvee: "⋎",
	curlywedge: "⋏",
	curren: "¤",
	curvearrowleft: "↶",
	curvearrowright: "↷",
	cuvee: "⋎",
	cuwed: "⋏",
	cwconint: "∲",
	cwint: "∱",
	cylcty: "⌭",
	dArr: "⇓",
	dHar: "⥥",
	dagger: "†",
	daleth: "ℸ",
	darr: "↓",
	dash: "‐",
	dashv: "⊣",
	dbkarow: "⤏",
	dblac: "˝",
	dcaron: "ď",
	dcy: "д",
	dd: "ⅆ",
	ddagger: "‡",
	ddarr: "⇊",
	ddotseq: "⩷",
	deg: "°",
	delta: "δ",
	demptyv: "⦱",
	dfisht: "⥿",
	dfr: "𝔡",
	dharl: "⇃",
	dharr: "⇂",
	diam: "⋄",
	diamond: "⋄",
	diamondsuit: "♦",
	diams: "♦",
	die: "¨",
	digamma: "ϝ",
	disin: "⋲",
	div: "÷",
	divide: "÷",
	divideontimes: "⋇",
	divonx: "⋇",
	djcy: "ђ",
	dlcorn: "⌞",
	dlcrop: "⌍",
	dollar: "$",
	dopf: "𝕕",
	dot: "˙",
	doteq: "≐",
	doteqdot: "≑",
	dotminus: "∸",
	dotplus: "∔",
	dotsquare: "⊡",
	doublebarwedge: "⌆",
	downarrow: "↓",
	downdownarrows: "⇊",
	downharpoonleft: "⇃",
	downharpoonright: "⇂",
	drbkarow: "⤐",
	drcorn: "⌟",
	drcrop: "⌌",
	dscr: "𝒹",
	dscy: "ѕ",
	dsol: "⧶",
	dstrok: "đ",
	dtdot: "⋱",
	dtri: "▿",
	dtrif: "▾",
	duarr: "⇵",
	duhar: "⥯",
	dwangle: "⦦",
	dzcy: "џ",
	dzigrarr: "⟿",
	eDDot: "⩷",
	eDot: "≑",
	eacute: "é",
	easter: "⩮",
	ecaron: "ě",
	ecir: "≖",
	ecirc: "ê",
	ecolon: "≕",
	ecy: "э",
	edot: "ė",
	ee: "ⅇ",
	efDot: "≒",
	efr: "𝔢",
	eg: "⪚",
	egrave: "è",
	egs: "⪖",
	egsdot: "⪘",
	el: "⪙",
	elinters: "⏧",
	ell: "ℓ",
	els: "⪕",
	elsdot: "⪗",
	emacr: "ē",
	empty: "∅",
	emptyset: "∅",
	emptyv: "∅",
	emsp13: " ",
	emsp14: " ",
	emsp: " ",
	eng: "ŋ",
	ensp: " ",
	eogon: "ę",
	eopf: "𝕖",
	epar: "⋕",
	eparsl: "⧣",
	eplus: "⩱",
	epsi: "ε",
	epsilon: "ε",
	epsiv: "ϵ",
	eqcirc: "≖",
	eqcolon: "≕",
	eqsim: "≂",
	eqslantgtr: "⪖",
	eqslantless: "⪕",
	equals: "=",
	equest: "≟",
	equiv: "≡",
	equivDD: "⩸",
	eqvparsl: "⧥",
	erDot: "≓",
	erarr: "⥱",
	escr: "ℯ",
	esdot: "≐",
	esim: "≂",
	eta: "η",
	eth: "ð",
	euml: "ë",
	euro: "€",
	excl: "!",
	exist: "∃",
	expectation: "ℰ",
	exponentiale: "ⅇ",
	fallingdotseq: "≒",
	fcy: "ф",
	female: "♀",
	ffilig: "ﬃ",
	fflig: "ﬀ",
	ffllig: "ﬄ",
	ffr: "𝔣",
	filig: "ﬁ",
	fjlig: "fj",
	flat: "♭",
	fllig: "ﬂ",
	fltns: "▱",
	fnof: "ƒ",
	fopf: "𝕗",
	forall: "∀",
	fork: "⋔",
	forkv: "⫙",
	fpartint: "⨍",
	frac12: "½",
	frac13: "⅓",
	frac14: "¼",
	frac15: "⅕",
	frac16: "⅙",
	frac18: "⅛",
	frac23: "⅔",
	frac25: "⅖",
	frac34: "¾",
	frac35: "⅗",
	frac38: "⅜",
	frac45: "⅘",
	frac56: "⅚",
	frac58: "⅝",
	frac78: "⅞",
	frasl: "⁄",
	frown: "⌢",
	fscr: "𝒻",
	gE: "≧",
	gEl: "⪌",
	gacute: "ǵ",
	gamma: "γ",
	gammad: "ϝ",
	gap: "⪆",
	gbreve: "ğ",
	gcirc: "ĝ",
	gcy: "г",
	gdot: "ġ",
	ge: "≥",
	gel: "⋛",
	geq: "≥",
	geqq: "≧",
	geqslant: "⩾",
	ges: "⩾",
	gescc: "⪩",
	gesdot: "⪀",
	gesdoto: "⪂",
	gesdotol: "⪄",
	gesl: "⋛︀",
	gesles: "⪔",
	gfr: "𝔤",
	gg: "≫",
	ggg: "⋙",
	gimel: "ℷ",
	gjcy: "ѓ",
	gl: "≷",
	glE: "⪒",
	gla: "⪥",
	glj: "⪤",
	gnE: "≩",
	gnap: "⪊",
	gnapprox: "⪊",
	gne: "⪈",
	gneq: "⪈",
	gneqq: "≩",
	gnsim: "⋧",
	gopf: "𝕘",
	grave: "`",
	gscr: "ℊ",
	gsim: "≳",
	gsime: "⪎",
	gsiml: "⪐",
	gt: ">",
	gtcc: "⪧",
	gtcir: "⩺",
	gtdot: "⋗",
	gtlPar: "⦕",
	gtquest: "⩼",
	gtrapprox: "⪆",
	gtrarr: "⥸",
	gtrdot: "⋗",
	gtreqless: "⋛",
	gtreqqless: "⪌",
	gtrless: "≷",
	gtrsim: "≳",
	gvertneqq: "≩︀",
	gvnE: "≩︀",
	hArr: "⇔",
	hairsp: " ",
	half: "½",
	hamilt: "ℋ",
	hardcy: "ъ",
	harr: "↔",
	harrcir: "⥈",
	harrw: "↭",
	hbar: "ℏ",
	hcirc: "ĥ",
	hearts: "♥",
	heartsuit: "♥",
	hellip: "…",
	hercon: "⊹",
	hfr: "𝔥",
	hksearow: "⤥",
	hkswarow: "⤦",
	hoarr: "⇿",
	homtht: "∻",
	hookleftarrow: "↩",
	hookrightarrow: "↪",
	hopf: "𝕙",
	horbar: "―",
	hscr: "𝒽",
	hslash: "ℏ",
	hstrok: "ħ",
	hybull: "⁃",
	hyphen: "‐",
	iacute: "í",
	ic: "⁣",
	icirc: "î",
	icy: "и",
	iecy: "е",
	iexcl: "¡",
	iff: "⇔",
	ifr: "𝔦",
	igrave: "ì",
	ii: "ⅈ",
	iiiint: "⨌",
	iiint: "∭",
	iinfin: "⧜",
	iiota: "℩",
	ijlig: "ĳ",
	imacr: "ī",
	image: "ℑ",
	imagline: "ℐ",
	imagpart: "ℑ",
	imath: "ı",
	imof: "⊷",
	imped: "Ƶ",
	in: "∈",
	incare: "℅",
	infin: "∞",
	infintie: "⧝",
	inodot: "ı",
	int: "∫",
	intcal: "⊺",
	integers: "ℤ",
	intercal: "⊺",
	intlarhk: "⨗",
	intprod: "⨼",
	iocy: "ё",
	iogon: "į",
	iopf: "𝕚",
	iota: "ι",
	iprod: "⨼",
	iquest: "¿",
	iscr: "𝒾",
	isin: "∈",
	isinE: "⋹",
	isindot: "⋵",
	isins: "⋴",
	isinsv: "⋳",
	isinv: "∈",
	it: "⁢",
	itilde: "ĩ",
	iukcy: "і",
	iuml: "ï",
	jcirc: "ĵ",
	jcy: "й",
	jfr: "𝔧",
	jmath: "ȷ",
	jopf: "𝕛",
	jscr: "𝒿",
	jsercy: "ј",
	jukcy: "є",
	kappa: "κ",
	kappav: "ϰ",
	kcedil: "ķ",
	kcy: "к",
	kfr: "𝔨",
	kgreen: "ĸ",
	khcy: "х",
	kjcy: "ќ",
	kopf: "𝕜",
	kscr: "𝓀",
	lAarr: "⇚",
	lArr: "⇐",
	lAtail: "⤛",
	lBarr: "⤎",
	lE: "≦",
	lEg: "⪋",
	lHar: "⥢",
	lacute: "ĺ",
	laemptyv: "⦴",
	lagran: "ℒ",
	lambda: "λ",
	lang: "⟨",
	langd: "⦑",
	langle: "⟨",
	lap: "⪅",
	laquo: "«",
	larr: "←",
	larrb: "⇤",
	larrbfs: "⤟",
	larrfs: "⤝",
	larrhk: "↩",
	larrlp: "↫",
	larrpl: "⤹",
	larrsim: "⥳",
	larrtl: "↢",
	lat: "⪫",
	latail: "⤙",
	late: "⪭",
	lates: "⪭︀",
	lbarr: "⤌",
	lbbrk: "❲",
	lbrace: "{",
	lbrack: "[",
	lbrke: "⦋",
	lbrksld: "⦏",
	lbrkslu: "⦍",
	lcaron: "ľ",
	lcedil: "ļ",
	lceil: "⌈",
	lcub: "{",
	lcy: "л",
	ldca: "⤶",
	ldquo: "“",
	ldquor: "„",
	ldrdhar: "⥧",
	ldrushar: "⥋",
	ldsh: "↲",
	le: "≤",
	leftarrow: "←",
	leftarrowtail: "↢",
	leftharpoondown: "↽",
	leftharpoonup: "↼",
	leftleftarrows: "⇇",
	leftrightarrow: "↔",
	leftrightarrows: "⇆",
	leftrightharpoons: "⇋",
	leftrightsquigarrow: "↭",
	leftthreetimes: "⋋",
	leg: "⋚",
	leq: "≤",
	leqq: "≦",
	leqslant: "⩽",
	les: "⩽",
	lescc: "⪨",
	lesdot: "⩿",
	lesdoto: "⪁",
	lesdotor: "⪃",
	lesg: "⋚︀",
	lesges: "⪓",
	lessapprox: "⪅",
	lessdot: "⋖",
	lesseqgtr: "⋚",
	lesseqqgtr: "⪋",
	lessgtr: "≶",
	lesssim: "≲",
	lfisht: "⥼",
	lfloor: "⌊",
	lfr: "𝔩",
	lg: "≶",
	lgE: "⪑",
	lhard: "↽",
	lharu: "↼",
	lharul: "⥪",
	lhblk: "▄",
	ljcy: "љ",
	ll: "≪",
	llarr: "⇇",
	llcorner: "⌞",
	llhard: "⥫",
	lltri: "◺",
	lmidot: "ŀ",
	lmoust: "⎰",
	lmoustache: "⎰",
	lnE: "≨",
	lnap: "⪉",
	lnapprox: "⪉",
	lne: "⪇",
	lneq: "⪇",
	lneqq: "≨",
	lnsim: "⋦",
	loang: "⟬",
	loarr: "⇽",
	lobrk: "⟦",
	longleftarrow: "⟵",
	longleftrightarrow: "⟷",
	longmapsto: "⟼",
	longrightarrow: "⟶",
	looparrowleft: "↫",
	looparrowright: "↬",
	lopar: "⦅",
	lopf: "𝕝",
	loplus: "⨭",
	lotimes: "⨴",
	lowast: "∗",
	lowbar: "_",
	loz: "◊",
	lozenge: "◊",
	lozf: "⧫",
	lpar: "(",
	lparlt: "⦓",
	lrarr: "⇆",
	lrcorner: "⌟",
	lrhar: "⇋",
	lrhard: "⥭",
	lrm: "‎",
	lrtri: "⊿",
	lsaquo: "‹",
	lscr: "𝓁",
	lsh: "↰",
	lsim: "≲",
	lsime: "⪍",
	lsimg: "⪏",
	lsqb: "[",
	lsquo: "‘",
	lsquor: "‚",
	lstrok: "ł",
	lt: "<",
	ltcc: "⪦",
	ltcir: "⩹",
	ltdot: "⋖",
	lthree: "⋋",
	ltimes: "⋉",
	ltlarr: "⥶",
	ltquest: "⩻",
	ltrPar: "⦖",
	ltri: "◃",
	ltrie: "⊴",
	ltrif: "◂",
	lurdshar: "⥊",
	luruhar: "⥦",
	lvertneqq: "≨︀",
	lvnE: "≨︀",
	mDDot: "∺",
	macr: "¯",
	male: "♂",
	malt: "✠",
	maltese: "✠",
	map: "↦",
	mapsto: "↦",
	mapstodown: "↧",
	mapstoleft: "↤",
	mapstoup: "↥",
	marker: "▮",
	mcomma: "⨩",
	mcy: "м",
	mdash: "—",
	measuredangle: "∡",
	mfr: "𝔪",
	mho: "℧",
	micro: "µ",
	mid: "∣",
	midast: "*",
	midcir: "⫰",
	middot: "·",
	minus: "−",
	minusb: "⊟",
	minusd: "∸",
	minusdu: "⨪",
	mlcp: "⫛",
	mldr: "…",
	mnplus: "∓",
	models: "⊧",
	mopf: "𝕞",
	mp: "∓",
	mscr: "𝓂",
	mstpos: "∾",
	mu: "μ",
	multimap: "⊸",
	mumap: "⊸",
	nGg: "⋙̸",
	nGt: "≫⃒",
	nGtv: "≫̸",
	nLeftarrow: "⇍",
	nLeftrightarrow: "⇎",
	nLl: "⋘̸",
	nLt: "≪⃒",
	nLtv: "≪̸",
	nRightarrow: "⇏",
	nVDash: "⊯",
	nVdash: "⊮",
	nabla: "∇",
	nacute: "ń",
	nang: "∠⃒",
	nap: "≉",
	napE: "⩰̸",
	napid: "≋̸",
	napos: "ŉ",
	napprox: "≉",
	natur: "♮",
	natural: "♮",
	naturals: "ℕ",
	nbsp: "\xA0",
	nbump: "≎̸",
	nbumpe: "≏̸",
	ncap: "⩃",
	ncaron: "ň",
	ncedil: "ņ",
	ncong: "≇",
	ncongdot: "⩭̸",
	ncup: "⩂",
	ncy: "н",
	ndash: "–",
	ne: "≠",
	neArr: "⇗",
	nearhk: "⤤",
	nearr: "↗",
	nearrow: "↗",
	nedot: "≐̸",
	nequiv: "≢",
	nesear: "⤨",
	nesim: "≂̸",
	nexist: "∄",
	nexists: "∄",
	nfr: "𝔫",
	ngE: "≧̸",
	nge: "≱",
	ngeq: "≱",
	ngeqq: "≧̸",
	ngeqslant: "⩾̸",
	nges: "⩾̸",
	ngsim: "≵",
	ngt: "≯",
	ngtr: "≯",
	nhArr: "⇎",
	nharr: "↮",
	nhpar: "⫲",
	ni: "∋",
	nis: "⋼",
	nisd: "⋺",
	niv: "∋",
	njcy: "њ",
	nlArr: "⇍",
	nlE: "≦̸",
	nlarr: "↚",
	nldr: "‥",
	nle: "≰",
	nleftarrow: "↚",
	nleftrightarrow: "↮",
	nleq: "≰",
	nleqq: "≦̸",
	nleqslant: "⩽̸",
	nles: "⩽̸",
	nless: "≮",
	nlsim: "≴",
	nlt: "≮",
	nltri: "⋪",
	nltrie: "⋬",
	nmid: "∤",
	nopf: "𝕟",
	not: "¬",
	notin: "∉",
	notinE: "⋹̸",
	notindot: "⋵̸",
	notinva: "∉",
	notinvb: "⋷",
	notinvc: "⋶",
	notni: "∌",
	notniva: "∌",
	notnivb: "⋾",
	notnivc: "⋽",
	npar: "∦",
	nparallel: "∦",
	nparsl: "⫽⃥",
	npart: "∂̸",
	npolint: "⨔",
	npr: "⊀",
	nprcue: "⋠",
	npre: "⪯̸",
	nprec: "⊀",
	npreceq: "⪯̸",
	nrArr: "⇏",
	nrarr: "↛",
	nrarrc: "⤳̸",
	nrarrw: "↝̸",
	nrightarrow: "↛",
	nrtri: "⋫",
	nrtrie: "⋭",
	nsc: "⊁",
	nsccue: "⋡",
	nsce: "⪰̸",
	nscr: "𝓃",
	nshortmid: "∤",
	nshortparallel: "∦",
	nsim: "≁",
	nsime: "≄",
	nsimeq: "≄",
	nsmid: "∤",
	nspar: "∦",
	nsqsube: "⋢",
	nsqsupe: "⋣",
	nsub: "⊄",
	nsubE: "⫅̸",
	nsube: "⊈",
	nsubset: "⊂⃒",
	nsubseteq: "⊈",
	nsubseteqq: "⫅̸",
	nsucc: "⊁",
	nsucceq: "⪰̸",
	nsup: "⊅",
	nsupE: "⫆̸",
	nsupe: "⊉",
	nsupset: "⊃⃒",
	nsupseteq: "⊉",
	nsupseteqq: "⫆̸",
	ntgl: "≹",
	ntilde: "ñ",
	ntlg: "≸",
	ntriangleleft: "⋪",
	ntrianglelefteq: "⋬",
	ntriangleright: "⋫",
	ntrianglerighteq: "⋭",
	nu: "ν",
	num: "#",
	numero: "№",
	numsp: " ",
	nvDash: "⊭",
	nvHarr: "⤄",
	nvap: "≍⃒",
	nvdash: "⊬",
	nvge: "≥⃒",
	nvgt: ">⃒",
	nvinfin: "⧞",
	nvlArr: "⤂",
	nvle: "≤⃒",
	nvlt: "<⃒",
	nvltrie: "⊴⃒",
	nvrArr: "⤃",
	nvrtrie: "⊵⃒",
	nvsim: "∼⃒",
	nwArr: "⇖",
	nwarhk: "⤣",
	nwarr: "↖",
	nwarrow: "↖",
	nwnear: "⤧",
	oS: "Ⓢ",
	oacute: "ó",
	oast: "⊛",
	ocir: "⊚",
	ocirc: "ô",
	ocy: "о",
	odash: "⊝",
	odblac: "ő",
	odiv: "⨸",
	odot: "⊙",
	odsold: "⦼",
	oelig: "œ",
	ofcir: "⦿",
	ofr: "𝔬",
	ogon: "˛",
	ograve: "ò",
	ogt: "⧁",
	ohbar: "⦵",
	ohm: "Ω",
	oint: "∮",
	olarr: "↺",
	olcir: "⦾",
	olcross: "⦻",
	oline: "‾",
	olt: "⧀",
	omacr: "ō",
	omega: "ω",
	omicron: "ο",
	omid: "⦶",
	ominus: "⊖",
	oopf: "𝕠",
	opar: "⦷",
	operp: "⦹",
	oplus: "⊕",
	or: "∨",
	orarr: "↻",
	ord: "⩝",
	order: "ℴ",
	orderof: "ℴ",
	ordf: "ª",
	ordm: "º",
	origof: "⊶",
	oror: "⩖",
	orslope: "⩗",
	orv: "⩛",
	oscr: "ℴ",
	oslash: "ø",
	osol: "⊘",
	otilde: "õ",
	otimes: "⊗",
	otimesas: "⨶",
	ouml: "ö",
	ovbar: "⌽",
	par: "∥",
	para: "¶",
	parallel: "∥",
	parsim: "⫳",
	parsl: "⫽",
	part: "∂",
	pcy: "п",
	percnt: "%",
	period: ".",
	permil: "‰",
	perp: "⊥",
	pertenk: "‱",
	pfr: "𝔭",
	phi: "φ",
	phiv: "ϕ",
	phmmat: "ℳ",
	phone: "☎",
	pi: "π",
	pitchfork: "⋔",
	piv: "ϖ",
	planck: "ℏ",
	planckh: "ℎ",
	plankv: "ℏ",
	plus: "+",
	plusacir: "⨣",
	plusb: "⊞",
	pluscir: "⨢",
	plusdo: "∔",
	plusdu: "⨥",
	pluse: "⩲",
	plusmn: "±",
	plussim: "⨦",
	plustwo: "⨧",
	pm: "±",
	pointint: "⨕",
	popf: "𝕡",
	pound: "£",
	pr: "≺",
	prE: "⪳",
	prap: "⪷",
	prcue: "≼",
	pre: "⪯",
	prec: "≺",
	precapprox: "⪷",
	preccurlyeq: "≼",
	preceq: "⪯",
	precnapprox: "⪹",
	precneqq: "⪵",
	precnsim: "⋨",
	precsim: "≾",
	prime: "′",
	primes: "ℙ",
	prnE: "⪵",
	prnap: "⪹",
	prnsim: "⋨",
	prod: "∏",
	profalar: "⌮",
	profline: "⌒",
	profsurf: "⌓",
	prop: "∝",
	propto: "∝",
	prsim: "≾",
	prurel: "⊰",
	pscr: "𝓅",
	psi: "ψ",
	puncsp: " ",
	qfr: "𝔮",
	qint: "⨌",
	qopf: "𝕢",
	qprime: "⁗",
	qscr: "𝓆",
	quaternions: "ℍ",
	quatint: "⨖",
	quest: "?",
	questeq: "≟",
	quot: "\"",
	rAarr: "⇛",
	rArr: "⇒",
	rAtail: "⤜",
	rBarr: "⤏",
	rHar: "⥤",
	race: "∽̱",
	racute: "ŕ",
	radic: "√",
	raemptyv: "⦳",
	rang: "⟩",
	rangd: "⦒",
	range: "⦥",
	rangle: "⟩",
	raquo: "»",
	rarr: "→",
	rarrap: "⥵",
	rarrb: "⇥",
	rarrbfs: "⤠",
	rarrc: "⤳",
	rarrfs: "⤞",
	rarrhk: "↪",
	rarrlp: "↬",
	rarrpl: "⥅",
	rarrsim: "⥴",
	rarrtl: "↣",
	rarrw: "↝",
	ratail: "⤚",
	ratio: "∶",
	rationals: "ℚ",
	rbarr: "⤍",
	rbbrk: "❳",
	rbrace: "}",
	rbrack: "]",
	rbrke: "⦌",
	rbrksld: "⦎",
	rbrkslu: "⦐",
	rcaron: "ř",
	rcedil: "ŗ",
	rceil: "⌉",
	rcub: "}",
	rcy: "р",
	rdca: "⤷",
	rdldhar: "⥩",
	rdquo: "”",
	rdquor: "”",
	rdsh: "↳",
	real: "ℜ",
	realine: "ℛ",
	realpart: "ℜ",
	reals: "ℝ",
	rect: "▭",
	reg: "®",
	rfisht: "⥽",
	rfloor: "⌋",
	rfr: "𝔯",
	rhard: "⇁",
	rharu: "⇀",
	rharul: "⥬",
	rho: "ρ",
	rhov: "ϱ",
	rightarrow: "→",
	rightarrowtail: "↣",
	rightharpoondown: "⇁",
	rightharpoonup: "⇀",
	rightleftarrows: "⇄",
	rightleftharpoons: "⇌",
	rightrightarrows: "⇉",
	rightsquigarrow: "↝",
	rightthreetimes: "⋌",
	ring: "˚",
	risingdotseq: "≓",
	rlarr: "⇄",
	rlhar: "⇌",
	rlm: "‏",
	rmoust: "⎱",
	rmoustache: "⎱",
	rnmid: "⫮",
	roang: "⟭",
	roarr: "⇾",
	robrk: "⟧",
	ropar: "⦆",
	ropf: "𝕣",
	roplus: "⨮",
	rotimes: "⨵",
	rpar: ")",
	rpargt: "⦔",
	rppolint: "⨒",
	rrarr: "⇉",
	rsaquo: "›",
	rscr: "𝓇",
	rsh: "↱",
	rsqb: "]",
	rsquo: "’",
	rsquor: "’",
	rthree: "⋌",
	rtimes: "⋊",
	rtri: "▹",
	rtrie: "⊵",
	rtrif: "▸",
	rtriltri: "⧎",
	ruluhar: "⥨",
	rx: "℞",
	sacute: "ś",
	sbquo: "‚",
	sc: "≻",
	scE: "⪴",
	scap: "⪸",
	scaron: "š",
	sccue: "≽",
	sce: "⪰",
	scedil: "ş",
	scirc: "ŝ",
	scnE: "⪶",
	scnap: "⪺",
	scnsim: "⋩",
	scpolint: "⨓",
	scsim: "≿",
	scy: "с",
	sdot: "⋅",
	sdotb: "⊡",
	sdote: "⩦",
	seArr: "⇘",
	searhk: "⤥",
	searr: "↘",
	searrow: "↘",
	sect: "§",
	semi: ";",
	seswar: "⤩",
	setminus: "∖",
	setmn: "∖",
	sext: "✶",
	sfr: "𝔰",
	sfrown: "⌢",
	sharp: "♯",
	shchcy: "щ",
	shcy: "ш",
	shortmid: "∣",
	shortparallel: "∥",
	shy: "­",
	sigma: "σ",
	sigmaf: "ς",
	sigmav: "ς",
	sim: "∼",
	simdot: "⩪",
	sime: "≃",
	simeq: "≃",
	simg: "⪞",
	simgE: "⪠",
	siml: "⪝",
	simlE: "⪟",
	simne: "≆",
	simplus: "⨤",
	simrarr: "⥲",
	slarr: "←",
	smallsetminus: "∖",
	smashp: "⨳",
	smeparsl: "⧤",
	smid: "∣",
	smile: "⌣",
	smt: "⪪",
	smte: "⪬",
	smtes: "⪬︀",
	softcy: "ь",
	sol: "/",
	solb: "⧄",
	solbar: "⌿",
	sopf: "𝕤",
	spades: "♠",
	spadesuit: "♠",
	spar: "∥",
	sqcap: "⊓",
	sqcaps: "⊓︀",
	sqcup: "⊔",
	sqcups: "⊔︀",
	sqsub: "⊏",
	sqsube: "⊑",
	sqsubset: "⊏",
	sqsubseteq: "⊑",
	sqsup: "⊐",
	sqsupe: "⊒",
	sqsupset: "⊐",
	sqsupseteq: "⊒",
	squ: "□",
	square: "□",
	squarf: "▪",
	squf: "▪",
	srarr: "→",
	sscr: "𝓈",
	ssetmn: "∖",
	ssmile: "⌣",
	sstarf: "⋆",
	star: "☆",
	starf: "★",
	straightepsilon: "ϵ",
	straightphi: "ϕ",
	strns: "¯",
	sub: "⊂",
	subE: "⫅",
	subdot: "⪽",
	sube: "⊆",
	subedot: "⫃",
	submult: "⫁",
	subnE: "⫋",
	subne: "⊊",
	subplus: "⪿",
	subrarr: "⥹",
	subset: "⊂",
	subseteq: "⊆",
	subseteqq: "⫅",
	subsetneq: "⊊",
	subsetneqq: "⫋",
	subsim: "⫇",
	subsub: "⫕",
	subsup: "⫓",
	succ: "≻",
	succapprox: "⪸",
	succcurlyeq: "≽",
	succeq: "⪰",
	succnapprox: "⪺",
	succneqq: "⪶",
	succnsim: "⋩",
	succsim: "≿",
	sum: "∑",
	sung: "♪",
	sup1: "¹",
	sup2: "²",
	sup3: "³",
	sup: "⊃",
	supE: "⫆",
	supdot: "⪾",
	supdsub: "⫘",
	supe: "⊇",
	supedot: "⫄",
	suphsol: "⟉",
	suphsub: "⫗",
	suplarr: "⥻",
	supmult: "⫂",
	supnE: "⫌",
	supne: "⊋",
	supplus: "⫀",
	supset: "⊃",
	supseteq: "⊇",
	supseteqq: "⫆",
	supsetneq: "⊋",
	supsetneqq: "⫌",
	supsim: "⫈",
	supsub: "⫔",
	supsup: "⫖",
	swArr: "⇙",
	swarhk: "⤦",
	swarr: "↙",
	swarrow: "↙",
	swnwar: "⤪",
	szlig: "ß",
	target: "⌖",
	tau: "τ",
	tbrk: "⎴",
	tcaron: "ť",
	tcedil: "ţ",
	tcy: "т",
	tdot: "⃛",
	telrec: "⌕",
	tfr: "𝔱",
	there4: "∴",
	therefore: "∴",
	theta: "θ",
	thetasym: "ϑ",
	thetav: "ϑ",
	thickapprox: "≈",
	thicksim: "∼",
	thinsp: " ",
	thkap: "≈",
	thksim: "∼",
	thorn: "þ",
	tilde: "˜",
	times: "×",
	timesb: "⊠",
	timesbar: "⨱",
	timesd: "⨰",
	tint: "∭",
	toea: "⤨",
	top: "⊤",
	topbot: "⌶",
	topcir: "⫱",
	topf: "𝕥",
	topfork: "⫚",
	tosa: "⤩",
	tprime: "‴",
	trade: "™",
	triangle: "▵",
	triangledown: "▿",
	triangleleft: "◃",
	trianglelefteq: "⊴",
	triangleq: "≜",
	triangleright: "▹",
	trianglerighteq: "⊵",
	tridot: "◬",
	trie: "≜",
	triminus: "⨺",
	triplus: "⨹",
	trisb: "⧍",
	tritime: "⨻",
	trpezium: "⏢",
	tscr: "𝓉",
	tscy: "ц",
	tshcy: "ћ",
	tstrok: "ŧ",
	twixt: "≬",
	twoheadleftarrow: "↞",
	twoheadrightarrow: "↠",
	uArr: "⇑",
	uHar: "⥣",
	uacute: "ú",
	uarr: "↑",
	ubrcy: "ў",
	ubreve: "ŭ",
	ucirc: "û",
	ucy: "у",
	udarr: "⇅",
	udblac: "ű",
	udhar: "⥮",
	ufisht: "⥾",
	ufr: "𝔲",
	ugrave: "ù",
	uharl: "↿",
	uharr: "↾",
	uhblk: "▀",
	ulcorn: "⌜",
	ulcorner: "⌜",
	ulcrop: "⌏",
	ultri: "◸",
	umacr: "ū",
	uml: "¨",
	uogon: "ų",
	uopf: "𝕦",
	uparrow: "↑",
	updownarrow: "↕",
	upharpoonleft: "↿",
	upharpoonright: "↾",
	uplus: "⊎",
	upsi: "υ",
	upsih: "ϒ",
	upsilon: "υ",
	upuparrows: "⇈",
	urcorn: "⌝",
	urcorner: "⌝",
	urcrop: "⌎",
	uring: "ů",
	urtri: "◹",
	uscr: "𝓊",
	utdot: "⋰",
	utilde: "ũ",
	utri: "▵",
	utrif: "▴",
	uuarr: "⇈",
	uuml: "ü",
	uwangle: "⦧",
	vArr: "⇕",
	vBar: "⫨",
	vBarv: "⫩",
	vDash: "⊨",
	vangrt: "⦜",
	varepsilon: "ϵ",
	varkappa: "ϰ",
	varnothing: "∅",
	varphi: "ϕ",
	varpi: "ϖ",
	varpropto: "∝",
	varr: "↕",
	varrho: "ϱ",
	varsigma: "ς",
	varsubsetneq: "⊊︀",
	varsubsetneqq: "⫋︀",
	varsupsetneq: "⊋︀",
	varsupsetneqq: "⫌︀",
	vartheta: "ϑ",
	vartriangleleft: "⊲",
	vartriangleright: "⊳",
	vcy: "в",
	vdash: "⊢",
	vee: "∨",
	veebar: "⊻",
	veeeq: "≚",
	vellip: "⋮",
	verbar: "|",
	vert: "|",
	vfr: "𝔳",
	vltri: "⊲",
	vnsub: "⊂⃒",
	vnsup: "⊃⃒",
	vopf: "𝕧",
	vprop: "∝",
	vrtri: "⊳",
	vscr: "𝓋",
	vsubnE: "⫋︀",
	vsubne: "⊊︀",
	vsupnE: "⫌︀",
	vsupne: "⊋︀",
	vzigzag: "⦚",
	wcirc: "ŵ",
	wedbar: "⩟",
	wedge: "∧",
	wedgeq: "≙",
	weierp: "℘",
	wfr: "𝔴",
	wopf: "𝕨",
	wp: "℘",
	wr: "≀",
	wreath: "≀",
	wscr: "𝓌",
	xcap: "⋂",
	xcirc: "◯",
	xcup: "⋃",
	xdtri: "▽",
	xfr: "𝔵",
	xhArr: "⟺",
	xharr: "⟷",
	xi: "ξ",
	xlArr: "⟸",
	xlarr: "⟵",
	xmap: "⟼",
	xnis: "⋻",
	xodot: "⨀",
	xopf: "𝕩",
	xoplus: "⨁",
	xotime: "⨂",
	xrArr: "⟹",
	xrarr: "⟶",
	xscr: "𝓍",
	xsqcup: "⨆",
	xuplus: "⨄",
	xutri: "△",
	xvee: "⋁",
	xwedge: "⋀",
	yacute: "ý",
	yacy: "я",
	ycirc: "ŷ",
	ycy: "ы",
	yen: "¥",
	yfr: "𝔶",
	yicy: "ї",
	yopf: "𝕪",
	yscr: "𝓎",
	yucy: "ю",
	yuml: "ÿ",
	zacute: "ź",
	zcaron: "ž",
	zcy: "з",
	zdot: "ż",
	zeetrf: "ℨ",
	zeta: "ζ",
	zfr: "𝔷",
	zhcy: "ж",
	zigrarr: "⇝",
	zopf: "𝕫",
	zscr: "𝓏",
	zwj: "‍",
	zwnj: "‌"
}, Vt = {}.hasOwnProperty;
function Ht(e) {
	return Vt.call(Bt, e) ? Bt[e] : !1;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function H(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function U(e, t) {
	return e.length > 0 ? (H(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var Ut = {}.hasOwnProperty;
function Wt(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) Gt(t, e[n]);
	return t;
}
function Gt(e, t) {
	let n;
	for (n in t) {
		let r = (Ut.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			Ut.call(r, a) || (r[a] = []);
			let e = i[a];
			Kt(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function Kt(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	H(e, 0, 0, r);
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function qt(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function W(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var G = tn(/[A-Za-z]/), K = tn(/[\dA-Za-z]/), Jt = tn(/[#-'*+\--9=?A-Z^-~]/);
function Yt(e) {
	return e !== null && (e < 32 || e === 127);
}
var Xt = tn(/\d/), Zt = tn(/[\dA-Fa-f]/), Qt = tn(/[!-/:-@[-`{-~]/);
function q(e) {
	return e !== null && e < -2;
}
function J(e) {
	return e !== null && (e < 0 || e === 32);
}
function Y(e) {
	return e === -2 || e === -1 || e === 32;
}
var $t = tn(/\p{P}|\p{S}/u), en = tn(/\s/);
function tn(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function nn(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && K(e.charCodeAt(n + 1)) && K(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region node_modules/micromark-factory-space/index.js
function X(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return Y(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return Y(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/content.js
var rn = { tokenize: an };
function an(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), X(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return q(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/document.js
var on = { tokenize: cn }, sn = { tokenize: ln };
function cn(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return H(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(sn, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(sn, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return q(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			H(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function ln(e, t, n) {
	return X(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function un(e) {
	if (e === null || J(e) || en(e)) return 1;
	if ($t(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function dn(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var fn = {
	name: "attention",
	resolveAll: pn,
	tokenize: mn
};
function pn(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			hn(d, -c), hn(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = U(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = U(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = U(l, dn(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = U(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = U(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, H(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function mn(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = un(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = un(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function hn(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var gn = {
	name: "autolink",
	tokenize: _n
};
function _n(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return G(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || K(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || K(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || Yt(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : Jt(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return K(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || K(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var vn = {
	partial: !0,
	tokenize: yn
};
function yn(e, t, n) {
	return r;
	function r(t) {
		return Y(t) ? X(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || q(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/block-quote.js
var bn = {
	continuation: { tokenize: Sn },
	exit: Cn,
	name: "blockQuote",
	tokenize: xn
};
function xn(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open || (e.enter("blockQuote", { _container: !0 }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return Y(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function Sn(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Y(t) ? X(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(bn, t, n)(r);
	}
}
function Cn(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var wn = {
	name: "characterEscape",
	tokenize: Tn
};
function Tn(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return Qt(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var En = {
	name: "characterReference",
	tokenize: Dn
};
function Dn(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = K, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = Zt, u) : (e.enter("characterReferenceValue"), a = 7, o = Xt, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === K && !Ht(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var On = {
	partial: !0,
	tokenize: jn
}, kn = {
	concrete: !0,
	name: "codeFenced",
	tokenize: An
};
function An(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), Y(t) ? X(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || q(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(On, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || q(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : Y(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), X(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || q(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || q(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && Y(t) ? X(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || q(t) ? e.check(On, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || q(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), Y(t) ? X(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), Y(t) ? X(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || q(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function jn(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-indented.js
var Mn = {
	name: "codeIndented",
	tokenize: Pn
}, Nn = {
	partial: !0,
	tokenize: Fn
};
function Pn(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), X(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : q(t) ? e.attempt(Nn, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || q(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function Fn(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : q(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : X(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : q(e) ? i(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-text.js
var In = {
	name: "codeText",
	previous: Rn,
	resolve: Ln,
	tokenize: zn
};
function Ln(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function Rn(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function zn(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : q(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || q(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var Bn = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && Vn(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), Vn(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), Vn(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			Vn(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			Vn(this.left, t.reverse());
		}
	}
};
function Vn(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function Hn(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new Bn(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, Un(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return H(e, 0, Infinity, u.slice(0)), !l;
}
function Un(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/content.js
var Wn = {
	resolve: Kn,
	tokenize: qn
}, Gn = {
	partial: !0,
	tokenize: Jn
};
function Kn(e) {
	return Hn(e), e;
}
function qn(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : q(t) ? e.check(Gn, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function Jn(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), X(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || q(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region node_modules/micromark-factory-destination/index.js
function Yn(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || Yt(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || q(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || J(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || Yt(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function Xn(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : q(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || q(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c || (c = !Y(t)), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-title/index.js
function Zn(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : q(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), X(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || q(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-whitespace/index.js
function Qn(e, t) {
	let n;
	return r;
	function r(i) {
		return q(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Y(i) ? X(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var $n = {
	name: "definition",
	tokenize: tr
}, er = {
	partial: !0,
	tokenize: nr
};
function tr(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return Xn.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = W(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return J(t) ? Qn(e, l)(t) : l(t);
	}
	function l(t) {
		return Yn(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(er, d, d)(t);
	}
	function d(t) {
		return Y(t) ? X(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || q(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function nr(e, t, n) {
	return r;
	function r(t) {
		return J(t) ? Qn(e, i)(t) : n(t);
	}
	function i(t) {
		return Zn(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return Y(t) ? X(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || q(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var rr = {
	name: "hardBreakEscape",
	tokenize: ir
};
function ir(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return q(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/heading-atx.js
var ar = {
	name: "headingAtx",
	resolve: or,
	tokenize: sr
};
function or(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, H(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function sr(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || J(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || q(n) ? (e.exit("atxHeading"), t(n)) : Y(n) ? X(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || J(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region node_modules/micromark-util-html-tag-name/index.js
var cr = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), lr = [
	"pre",
	"script",
	"style",
	"textarea"
], ur = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: pr,
	tokenize: mr
}, dr = {
	partial: !0,
	tokenize: gr
}, fr = {
	partial: !0,
	tokenize: hr
};
function pr(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function mr(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : ne) : G(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : G(a) ? (e.consume(a), i = 4, r.interrupt ? t : ne) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : ne) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return G(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || J(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && lr.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : cr.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || K(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return Y(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || G(t) ? (e.consume(t), b) : Y(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || K(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : Y(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : Y(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || q(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || J(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || Y(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || q(t) ? O(t) : Y(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), A) : t === 60 && i === 1 ? (e.consume(t), j) : t === 62 && i === 4 ? (e.consume(t), re) : t === 63 && i === 3 ? (e.consume(t), ne) : t === 93 && i === 5 ? (e.consume(t), N) : q(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(dr, P, k)(t)) : t === null || q(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(fr, ee, P)(t);
	}
	function ee(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), te;
	}
	function te(t) {
		return t === null || q(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function A(t) {
		return t === 45 ? (e.consume(t), ne) : O(t);
	}
	function j(t) {
		return t === 47 ? (e.consume(t), o = "", M) : O(t);
	}
	function M(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return lr.includes(n) ? (e.consume(t), re) : O(t);
		}
		return G(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), M) : O(t);
	}
	function N(t) {
		return t === 93 ? (e.consume(t), ne) : O(t);
	}
	function ne(t) {
		return t === 62 ? (e.consume(t), re) : t === 45 && i === 2 ? (e.consume(t), ne) : O(t);
	}
	function re(t) {
		return t === null || q(t) ? (e.exit("htmlFlowData"), P(t)) : (e.consume(t), re);
	}
	function P(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function hr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return q(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function gr(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(vn, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var _r = {
	name: "htmlText",
	tokenize: vr
};
function vr(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : G(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : G(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : q(t) ? (o = d, j(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? A(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : q(t) ? (o = h, j(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? A(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? A(t) : q(t) ? (o = v, j(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : q(t) ? (o = y, j(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? A(e) : y(e);
	}
	function x(t) {
		return G(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || K(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return q(t) ? (o = C, j(t)) : Y(t) ? (e.consume(t), C) : A(t);
	}
	function w(t) {
		return t === 45 || K(t) ? (e.consume(t), w) : t === 47 || t === 62 || J(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), A) : t === 58 || t === 95 || G(t) ? (e.consume(t), E) : q(t) ? (o = T, j(t)) : Y(t) ? (e.consume(t), T) : A(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || K(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : q(t) ? (o = D, j(t)) : Y(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : q(t) ? (o = O, j(t)) : Y(t) ? (e.consume(t), O) : (e.consume(t), ee);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, te) : t === null ? n(t) : q(t) ? (o = k, j(t)) : (e.consume(t), k);
	}
	function ee(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || J(t) ? T(t) : (e.consume(t), ee);
	}
	function te(e) {
		return e === 47 || e === 62 || J(e) ? T(e) : n(e);
	}
	function A(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function j(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), M;
	}
	function M(t) {
		return Y(t) ? X(e, N, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : N(t);
	}
	function N(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var yr = {
	name: "labelEnd",
	resolveAll: Cr,
	resolveTo: wr,
	tokenize: Tr
}, br = { tokenize: Er }, xr = { tokenize: Dr }, Sr = { tokenize: Or };
function Cr(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && H(e, 0, e.length, n), e;
}
function wr(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = U(s, e.slice(a + 1, a + r + 3)), s = U(s, [[
		"enter",
		u,
		t
	]]), s = U(s, dn(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = U(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = U(s, e.slice(o + 1)), s = U(s, [[
		"exit",
		c,
		t
	]]), H(e, a, e.length, s), e;
}
function Tr(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(W(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(br, u, o ? u : d)(t) : t === 91 ? e.attempt(xr, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Sr, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function Er(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return J(t) ? Qn(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : Yn(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return J(t) ? Qn(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? Zn(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return J(t) ? Qn(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function Dr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Xn.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(W(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function Or(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-image.js
var kr = {
	name: "labelStartImage",
	resolveAll: yr.resolveAll,
	tokenize: Ar
};
function Ar(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-link.js
var jr = {
	name: "labelStartLink",
	resolveAll: yr.resolveAll,
	tokenize: Mr
};
function Mr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/line-ending.js
var Nr = {
	name: "lineEnding",
	tokenize: Pr
};
function Pr(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), X(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var Fr = {
	name: "thematicBreak",
	tokenize: Ir
};
function Ir(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || q(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), Y(t) ? X(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/list.js
var Z = {
	continuation: { tokenize: Br },
	exit: Hr,
	name: "list",
	tokenize: zr
}, Lr = {
	partial: !0,
	tokenize: Ur
}, Rr = {
	partial: !0,
	tokenize: Vr
};
function zr(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : Xt(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(Fr, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return Xt(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(vn, r.interrupt ? n : u, e.attempt(Lr, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return Y(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function Br(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(vn, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, X(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !Y(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Rr, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, X(e, e.attempt(Z, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function Vr(e, t, n) {
	let r = this;
	return X(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function Hr(e) {
	e.exit(this.containerState.type);
}
function Ur(e, t, n) {
	let r = this;
	return X(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !Y(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var Wr = {
	name: "setextUnderline",
	resolveTo: Gr,
	tokenize: Kr
};
function Gr(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function Kr(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), Y(t) ? X(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || q(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/flow.js
var qr = { tokenize: Jr };
function Jr(e) {
	let t = this, n = e.attempt(vn, r, e.attempt(this.parser.constructs.flowInitial, i, X(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Wn, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/text.js
var Yr = { resolveAll: $r() }, Xr = Qr("string"), Zr = Qr("text");
function Qr(e) {
	return {
		resolveAll: $r(e === "text" ? ei : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function $r(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function ei(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region node_modules/micromark/lib/constructs.js
var ti = /* @__PURE__ */ a({
	attentionMarkers: () => li,
	contentInitial: () => ri,
	disable: () => ui,
	document: () => ni,
	flow: () => ai,
	flowInitial: () => ii,
	insideSpan: () => ci,
	string: () => oi,
	text: () => si
}), ni = {
	42: Z,
	43: Z,
	45: Z,
	48: Z,
	49: Z,
	50: Z,
	51: Z,
	52: Z,
	53: Z,
	54: Z,
	55: Z,
	56: Z,
	57: Z,
	62: bn
}, ri = { 91: $n }, ii = {
	[-2]: Mn,
	[-1]: Mn,
	32: Mn
}, ai = {
	35: ar,
	42: Fr,
	45: [Wr, Fr],
	60: ur,
	61: Wr,
	95: Fr,
	96: kn,
	126: kn
}, oi = {
	38: En,
	92: wn
}, si = {
	[-5]: Nr,
	[-4]: Nr,
	[-3]: Nr,
	33: kr,
	38: En,
	42: fn,
	60: [gn, _r],
	91: jr,
	92: [rr, wn],
	93: yr,
	95: fn,
	96: In
}, ci = { null: [fn, Yr] }, li = { null: [42, 95] }, ui = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function di(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = U(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = dn(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return pi(p(e), t);
	}
	function p(e) {
		return fi(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		q(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && H(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function fi(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function pi(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region node_modules/micromark/lib/parse.js
function mi(e) {
	let t = {
		constructs: Wt([ti, ...(e || {}).extensions || []]),
		content: n(rn),
		defined: [],
		document: n(on),
		flow: n(qr),
		lazy: {},
		string: n(Xr),
		text: n(Zr)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return di(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function hi(e) {
	for (; !Hn(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var gi = /[\0\t\n\r]/g;
function _i() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n && (i.charCodeAt(0) === 65279 && u++, n = void 0); u < i.length;) {
			if (gi.lastIndex = u, c = gi.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r && (s.push(-5), r = void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region node_modules/micromark-util-decode-string/index.js
var vi = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function yi(e) {
	return e.replace(vi, bi);
}
function bi(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return qt(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return Ht(n) || e;
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var xi = {}.hasOwnProperty;
function Si(e, t, n) {
	return t && typeof t == "object" && (n = t, t = void 0), Ci(n)(hi(mi(n).document().write(_i()(e, t, !0))));
}
function Ci(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(F),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(ge),
			blockQuote: a(de),
			characterEscape: T,
			characterReference: T,
			codeFenced: a(fe),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(fe, o),
			codeText: a(pe, o),
			codeTextData: T,
			data: T,
			codeFlowValue: T,
			definition: a(me),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(he),
			hardBreakEscape: a(_e),
			hardBreakTrailing: a(_e),
			htmlFlow: a(ve, o),
			htmlFlowData: T,
			htmlText: a(ve, o),
			htmlTextData: T,
			image: a(ye),
			label: o,
			link: a(F),
			listItem: a(xe),
			listItemValue: f,
			listOrdered: a(be, d),
			listUnordered: a(be),
			paragraph: a(I),
			reference: ie,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(ge),
			strong: a(L),
			thematicBreak: a(R)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: ue,
			autolinkProtocol: le,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: oe,
			characterReferenceMarkerNumeric: oe,
			characterReferenceValue: se,
			characterReference: ce,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: E,
			codeIndented: c(_),
			codeText: c(te),
			codeTextData: E,
			data: E,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: v,
			definitionTitleString: y,
			emphasis: c(),
			hardBreakEscape: c(O),
			hardBreakTrailing: c(O),
			htmlFlow: c(k),
			htmlFlowData: E,
			htmlText: c(ee),
			htmlTextData: E,
			image: c(j),
			label: N,
			labelText: M,
			lineEnding: D,
			link: c(A),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: ae,
			resourceDestinationString: ne,
			resourceTitleString: re,
			resource: P,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	Ti(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			xi.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || Di).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: wi(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: wi(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (!(t[1].type === "linePrefix" || t[1].type === "blockQuotePrefix" || t[1].type === "blockQuotePrefixWhitespace" || t[1].type === "blockQuoteMarker" || t[1].type === "listItemIndent")) break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: wi(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || Di).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + tt({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = wi(e.end);
	}
	function u() {
		return It(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function v(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = W(this.sliceSerialize(e)).toLowerCase();
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function x(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth || (t.depth = this.sliceSerialize(e).length);
	}
	function S() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function w() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function T(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = Se(), n.position = {
			start: wi(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = wi(e.end);
	}
	function D(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = wi(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (T.call(this, e), E.call(this, e));
	}
	function O() {
		this.data.atHardBreak = !0;
	}
	function k() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ee() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function te() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function A() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function j() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function M(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = yi(t), n.identifier = W(t).toLowerCase();
	}
	function N() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function ne() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function re() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function P() {
		this.data.inReference = void 0;
	}
	function ie() {
		this.data.referenceType = "collapsed";
	}
	function ae(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = W(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function oe(e) {
		this.data.characterReferenceType = e.type;
	}
	function se(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = qt(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = Ht(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function ce(e) {
		let t = this.stack.pop();
		t.position.end = wi(e.end);
	}
	function le(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function ue(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function de() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function fe() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function pe() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function me() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function he() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function ge() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function _e() {
		return { type: "break" };
	}
	function ve() {
		return {
			type: "html",
			value: ""
		};
	}
	function ye() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function F() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function be(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function xe(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function I() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function L() {
		return {
			type: "strong",
			children: []
		};
	}
	function Se() {
		return {
			type: "text",
			value: ""
		};
	}
	function R() {
		return { type: "thematicBreak" };
	}
}
function wi(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function Ti(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? Ti(e, r) : Ei(e, r);
	}
}
function Ei(e, t) {
	let n;
	for (n in t) if (xi.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function Di(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + tt({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + tt({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + tt({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function Oi(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return Si(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function ki(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/break.js
function Ai(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/code.js
function ji(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/delete.js
function Mi(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function Ni(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function Pi(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = nn(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/heading.js
function Fi(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/html.js
function Ii(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/revert.js
function Li(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function Ri(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return Li(e, t);
	let i = {
		src: nn(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image.js
function zi(e, t) {
	let n = { src: nn(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function Bi(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function Vi(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return Li(e, t);
	let i = { href: nn(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link.js
function Hi(e, t) {
	let n = { href: nn(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function Ui(e, t, n) {
	let r = e.all(t), i = n ? Wi(n) : Gi(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function Wi(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = Gi(n[r]);
	}
	return t;
}
function Gi(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function Ki(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function qi(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/root.js
function Ji(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function Yi(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table.js
function Xi(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = Qe(t.children[1]), o = Ze(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function Zi(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function Qi(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/trim-lines/index.js
var $i = 9, ea = 32;
function ta(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(na(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(na(t.slice(i), i > 0, !1)), a.join("");
}
function na(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === $i || t === ea;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === $i || t === ea;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function ra(e, t) {
	let n = {
		type: "text",
		value: ta(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function ia(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/index.js
var aa = {
	blockquote: ki,
	break: Ai,
	code: ji,
	delete: Mi,
	emphasis: Ni,
	footnoteReference: Pi,
	heading: Fi,
	html: Ii,
	imageReference: Ri,
	image: zi,
	inlineCode: Bi,
	linkReference: Vi,
	link: Hi,
	listItem: Ui,
	list: Ki,
	paragraph: qi,
	root: Ji,
	strong: Yi,
	table: Xi,
	tableCell: Qi,
	tableRow: Zi,
	text: ra,
	thematicBreak: ia,
	toml: oa,
	yaml: oa,
	definition: oa,
	footnoteDefinition: oa
};
function oa() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var sa = typeof self == "object" ? self : globalThis, ca = (e, t) => {
	switch (e) {
		case "Function":
		case "SharedWorker":
		case "Worker":
		case "eval":
		case "setInterval":
		case "setTimeout": throw TypeError("unable to deserialize " + e);
	}
	return new sa[e](t);
}, la = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(ca(e, t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(ca(a, o), i);
	};
	return r;
}, ua = (e) => la(/* @__PURE__ */ new Map(), e)(0), da = "", { toString: fa } = {}, { keys: pa } = Object, ma = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = fa.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, da];
		case "Object": return [2, da];
		case "Date": return [3, da];
		case "RegExp": return [4, da];
		case "Map": return [5, da];
		case "Set": return [6, da];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, ha = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), ga = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = ma(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of pa(r)) (e || !ha(ma(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(ha(ma(n)) || ha(ma(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !ha(ma(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, _a = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return ga(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, va = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? ua(_a(e, t)) : structuredClone(e) : (e, t) => ua(_a(e, t));
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function ya(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function ba(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function xa(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || ya, r = e.options.footnoteBackLabel || ba, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = nn(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...va(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region node_modules/unist-util-is/lib/index.js
var Sa = (function(e) {
	if (e == null) return Da;
	if (typeof e == "function") return Ea(e);
	if (typeof e == "object") return Array.isArray(e) ? Ca(e) : wa(e);
	if (typeof e == "string") return Ta(e);
	throw Error("Expected function, string, or object as test");
});
function Ca(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = Sa(e[n]);
	return Ea(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function wa(e) {
	let t = e;
	return Ea(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function Ta(e) {
	return Ea(t);
	function t(t) {
		return t && t.type === e;
	}
}
function Ea(e) {
	return t;
	function t(t, n, r) {
		return !!(Oa(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function Da() {
	return !0;
}
function Oa(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function ka(e) {
	return e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var Aa = [];
function ja(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = Sa(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + ka(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = Aa, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = Ma(n(e, c)), l[0] === !1)) return l;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && l[0] !== "skip") for (d = (r ? t.children.length : -1) + o, f = c.concat(t); d > -1 && d < t.children.length;) {
					let e = t.children[d];
					if (u = s(e, d, f)(), u[0] === !1) return u;
					d = typeof u[1] == "number" ? u[1] : d + o;
				}
			}
			return l;
		}
	}
}
function Ma(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? Aa : [e];
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function Na(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), ja(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var Pa = {}.hasOwnProperty, Fa = {};
function Ia(e, t) {
	let n = t || Fa, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: Ra,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...aa,
			...n.handlers
		},
		one: o,
		options: n,
		patch: La,
		wrap: Ba
	};
	return Na(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (Pa.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = va(n);
				return r.children = a.all(e), r;
			}
			return va(e);
		}
		return (a.options.unknownHandler || za)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = Va(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = Va(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function La(e, t) {
	e.position && (t.position = et(e));
}
function Ra(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, va(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function za(e, t) {
	let n = t.data || {}, r = "value" in t && !(Pa.call(n, "hProperties") || Pa.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function Ba(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function Va(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function Ha(e, t) {
	let n = Ia(e, t), r = n.one(e, void 0), i = xa(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region node_modules/remark-rehype/lib/index.js
function Ua(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = Ha(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return Ha(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region node_modules/bail/index.js
function Wa(e) {
	if (e) throw e;
}
//#endregion
//#region node_modules/is-plain-obj/index.js
var Ga = /* @__PURE__ */ i((/* @__PURE__ */ o(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
})))(), 1);
function Ka(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region node_modules/trough/lib/index.js
function qa() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
			t = o, s ? Ja(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function Ja(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region node_modules/vfile/lib/minpath.browser.js
var Ya = {
	basename: Xa,
	dirname: Za,
	extname: Qa,
	join: $a,
	sep: "/"
};
function Xa(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	no(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function Za(e) {
	if (no(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r || (r = !0);
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Qa(e) {
	no(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function $a(...e) {
	let t = -1, n;
	for (; ++t < e.length;) no(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : eo(n);
}
function eo(e) {
	no(e);
	let t = e.codePointAt(0) === 47, n = to(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function to(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
				if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
					if (n.length > 2) {
						if (c = n.lastIndexOf("/"), c !== n.length - 1) {
							c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
							continue;
						}
					} else if (n.length > 0) {
						n = "", r = 0, i = o, a = 0;
						continue;
					}
				}
				t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
			} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function no(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var ro = { cwd: io };
function io() {
	return "/";
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function ao(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function oo(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!ao(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return so(e);
}
function so(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region node_modules/vfile/lib/index.js
var co = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], lo = class {
	constructor(e) {
		let t;
		t = e ? ao(e) ? { path: e } : typeof e == "string" || mo(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : ro.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < co.length;) {
			let e = co[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) co.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? Ya.basename(this.path) : void 0;
	}
	set basename(e) {
		fo(e, "basename"), uo(e, "basename"), this.path = Ya.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? Ya.dirname(this.path) : void 0;
	}
	set dirname(e) {
		po(this.basename, "dirname"), this.path = Ya.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? Ya.extname(this.path) : void 0;
	}
	set extname(e) {
		if (uo(e, "extname"), po(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = Ya.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		ao(e) && (e = oo(e)), fo(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? Ya.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		fo(e, "stem"), uo(e, "stem"), this.path = Ya.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new V(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function uo(e, t) {
	if (e && e.includes(Ya.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + Ya.sep + "`");
}
function fo(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function po(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function mo(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var ho = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), go = {}.hasOwnProperty, _o = new class e extends ho {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = qa();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, Ga.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (bo("data", this.frozen), this.namespace[e] = t, this) : go.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (bo("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = Co(e), n = this.parser || this.Parser;
		return vo("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), vo("process", this.parser || this.Parser), yo("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = Co(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				To(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), vo("processSync", this.parser || this.Parser), yo("processSync", this.compiler || this.Compiler), this.process(e, r), So("processSync", "process", t), n;
		function r(e, r) {
			t = !0, Wa(e), n = r;
		}
	}
	run(e, t, n) {
		xo(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = Co(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), So("runSync", "run", n), r;
		function i(e, t) {
			Wa(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = Co(t), r = this.compiler || this.Compiler;
		return yo("stringify", r), xo(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (bo("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
		else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
		else throw TypeError("Expected usable value, not `" + e + "`");
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") if (Array.isArray(e)) {
				let [t, ...n] = e;
				s(t, n);
			} else a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, Ga.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) if (Array.isArray(e)) for (; ++t < e.length;) {
				let n = e[t];
				i(n);
			}
			else throw TypeError("Expected a list of plugins, not `" + e + "`");
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				Ka(o) && Ka(r) && (r = (0, Ga.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function vo(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function yo(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function bo(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function xo(e) {
	if (!Ka(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function So(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function Co(e) {
	return wo(e) ? e : new lo(e);
}
function wo(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function To(e) {
	return typeof e == "string" || Eo(e);
}
function Eo(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var Do = [], Oo = { allowDangerousHtml: !0 }, ko = /^(https?|ircs?|mailto|xmpp)$/i, Ao = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function jo(e) {
	let t = Mo(e), n = No(e);
	return Po(t.runSync(t.parse(n), n), e);
}
function Mo(e) {
	let t = e.rehypePlugins || Do, n = e.remarkPlugins || Do, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...Oo
	} : Oo;
	return _o().use(Oi).use(n).use(Ua, r).use(t);
}
function No(e) {
	let t = e.children || "", n = new lo();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function Po(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || Fo;
	for (let e of Ao) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return Na(e, l), ft(e, {
		Fragment: w,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: T,
		jsxs: E,
		passKeys: !0,
		passNode: !0
	});
	function l(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in Pt) if (Object.hasOwn(Pt, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = Pt[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function Fo(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || ko.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region node_modules/ccount/index.js
function Io(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
//#endregion
//#region node_modules/escape-string-regexp/index.js
function Lo(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
//#endregion
//#region node_modules/mdast-util-find-and-replace/lib/index.js
function Ro(e, t, n) {
	let r = Sa((n || {}).ignore || []), i = zo(t), a = -1;
	for (; ++a < i.length;) ja(e, "text", o);
	function o(e, t) {
		let n = -1, i;
		for (; ++n < t.length;) {
			let e = t[n], a = i ? i.children : void 0;
			if (r(e, a ? a.indexOf(e) : void 0, i)) return;
			i = e;
		}
		if (i) return s(e, t);
	}
	function s(e, t) {
		let n = t[t.length - 1], r = i[a][0], o = i[a][1], s = 0, c = n.children.indexOf(e), l = !1, u = [];
		r.lastIndex = 0;
		let d = r.exec(e.value);
		for (; d;) {
			let n = d.index, i = {
				index: d.index,
				input: d.input,
				stack: [...t, e]
			}, a = o(...d, i);
			if (typeof a == "string" && (a = a.length > 0 ? {
				type: "text",
				value: a
			} : void 0), a === !1 ? r.lastIndex = n + 1 : (s !== n && u.push({
				type: "text",
				value: e.value.slice(s, n)
			}), Array.isArray(a) ? u.push(...a) : a && u.push(a), s = n + d[0].length, l = !0), !r.global) break;
			d = r.exec(e.value);
		}
		return l ? (s < e.value.length && u.push({
			type: "text",
			value: e.value.slice(s)
		}), n.children.splice(c, 1, ...u)) : u = [e], c + u.length;
	}
}
function zo(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([Bo(e[0]), Vo(e[1])]);
	}
	return t;
}
function Bo(e) {
	return typeof e == "string" ? new RegExp(Lo(e), "g") : e;
}
function Vo(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
//#endregion
//#region node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var Ho = "phrasing", Uo = [
	"autolink",
	"link",
	"image",
	"label"
];
function Wo() {
	return {
		transforms: [Qo],
		enter: {
			literalAutolink: Ko,
			literalAutolinkEmail: qo,
			literalAutolinkHttp: qo,
			literalAutolinkWww: qo
		},
		exit: {
			literalAutolink: Zo,
			literalAutolinkEmail: Xo,
			literalAutolinkHttp: Jo,
			literalAutolinkWww: Yo
		}
	};
}
function Go() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: Ho,
			notInConstruct: Uo
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: Ho,
			notInConstruct: Uo
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: Ho,
			notInConstruct: Uo
		}
	] };
}
function Ko(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function qo(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function Jo(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function Yo(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Xo(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function Zo(e) {
	this.exit(e);
}
function Qo(e) {
	Ro(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, $o], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, es]], { ignore: ["link", "linkReference"] });
}
function $o(e, t, n, r, i) {
	let a = "";
	if (!rs(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !ts(n))) return !1;
	let o = ns(n + r);
	if (!o[0]) return !1;
	let s = {
		type: "link",
		title: null,
		url: a + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [s, {
		type: "text",
		value: o[1]
	}] : s;
}
function es(e, t, n, r) {
	return !rs(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function ts(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function ns(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = Io(e, "("), a = Io(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function rs(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || en(n) || $t(n)) && (!t || n !== 47);
}
//#endregion
//#region node_modules/mdast-util-gfm-footnote/lib/index.js
ps.peek = fs;
function is() {
	this.buffer();
}
function as(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function os() {
	this.buffer();
}
function ss(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function cs(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = W(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function ls(e) {
	this.exit(e);
}
function us(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = W(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function ds(e) {
	this.exit(e);
}
function fs() {
	return "[";
}
function ps(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), s(), o(), a += i.move("]"), a;
}
function ms() {
	return {
		enter: {
			gfmFootnoteCallString: is,
			gfmFootnoteCall: as,
			gfmFootnoteDefinitionLabelString: os,
			gfmFootnoteDefinition: ss
		},
		exit: {
			gfmFootnoteCallString: cs,
			gfmFootnoteCall: ls,
			gfmFootnoteDefinitionLabelString: us,
			gfmFootnoteDefinition: ds
		}
	};
}
function hs(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference: ps
		},
		unsafe: [{
			character: "[",
			inConstruct: [
				"label",
				"phrasing",
				"reference"
			]
		}]
	};
	function n(e, n, r, i) {
		let a = r.createTracker(i), o = a.move("[^"), s = r.enter("footnoteDefinition"), c = r.enter("label");
		return o += a.move(r.safe(r.associationId(e), {
			before: o,
			after: "]"
		})), c(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? _s : gs))), s(), o;
	}
}
function gs(e, t, n) {
	return t === 0 ? e : _s(e, t, n);
}
function _s(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region node_modules/mdast-util-gfm-strikethrough/lib/index.js
var vs = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
Cs.peek = ws;
function ys() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: xs },
		exit: { strikethrough: Ss }
	};
}
function bs() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: vs
		}],
		handlers: { delete: Cs }
	};
}
function xs(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function Ss(e) {
	this.exit(e);
}
function Cs(e, t, n, r) {
	let i = n.createTracker(r), a = n.enter("strikethrough"), o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), a(), o;
}
function ws() {
	return "~";
}
//#endregion
//#region node_modules/markdown-table/index.js
function Ts(e) {
	return e.length;
}
function Es(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Ts, a = [], o = [], s = [], c = [], l = 0, u = -1;
	for (; ++u < e.length;) {
		let t = [], r = [], a = -1;
		for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
			let o = Ds(e[u][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (c[a] === void 0 || e > c[a]) && (c[a] = e);
			}
			t.push(o);
		}
		o[u] = t, s[u] = r;
	}
	let d = -1;
	if (typeof r == "object" && "length" in r) for (; ++d < l;) a[d] = Os(r[d]);
	else {
		let e = Os(r);
		for (; ++d < l;) a[d] = e;
	}
	d = -1;
	let f = [], p = [];
	for (; ++d < l;) {
		let e = a[d], t = "", r = "";
		e === 99 ? (t = ":", r = ":") : e === 108 ? t = ":" : e === 114 && (r = ":");
		let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length), o = t + "-".repeat(i) + r;
		n.alignDelimiters !== !1 && (i = t.length + i + r.length, i > c[d] && (c[d] = i), p[d] = i), f[d] = o;
	}
	o.splice(1, 0, f), s.splice(1, 0, p), u = -1;
	let m = [];
	for (; ++u < o.length;) {
		let e = o[u], t = s[u];
		d = -1;
		let r = [];
		for (; ++d < l;) {
			let i = e[d] || "", o = "", s = "";
			if (n.alignDelimiters !== !1) {
				let e = c[d] - (t[d] || 0), n = a[d];
				n === 114 ? o = " ".repeat(e) : n === 99 ? e % 2 ? (o = " ".repeat(e / 2 + .5), s = " ".repeat(e / 2 - .5)) : (o = " ".repeat(e / 2), s = o) : s = " ".repeat(e);
			}
			n.delimiterStart !== !1 && !d && r.push("|"), n.padding !== !1 && !(n.alignDelimiters === !1 && i === "") && (n.delimiterStart !== !1 || d) && r.push(" "), n.alignDelimiters !== !1 && r.push(o), r.push(i), n.alignDelimiters !== !1 && r.push(s), n.padding !== !1 && r.push(" "), (n.delimiterEnd !== !1 || d !== l - 1) && r.push("|");
		}
		m.push(n.delimiterEnd === !1 ? r.join("").replace(/ +$/, "") : r.join(""));
	}
	return m.join("\n");
}
function Ds(e) {
	return e == null ? "" : String(e);
}
function Os(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function ks(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), As);
	return i(), o;
}
function As(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function js(e, t) {
	return Ms(e, t.inConstruct, !0) && !Ms(e, t.notInConstruct, !1);
}
function Ms(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/break.js
function Ns(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) if (n.unsafe[i].character === "\n" && js(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return "\\\n";
}
//#endregion
//#region node_modules/longest-streak/index.js
function Ps(e, t) {
	let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
	if (typeof t != "string") throw TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
	return o;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function Fs(e, t) {
	return !!(t.options.fences === !1 && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function Is(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/code.js
function Ls(e, t, n, r) {
	let i = Is(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
	if (Fs(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, Rs);
		return e(), t;
	}
	let s = n.createTracker(r), c = i.repeat(Math.max(Ps(a, i) + 1, 3)), l = n.enter("codeFenced"), u = s.move(c);
	if (e.lang) {
		let t = n.enter(`codeFencedLang${o}`);
		u += s.move(n.safe(e.lang, {
			before: u,
			after: " ",
			encode: ["`"],
			...s.current()
		})), t();
	}
	if (e.lang && e.meta) {
		let t = n.enter(`codeFencedMeta${o}`);
		u += s.move(" "), u += s.move(n.safe(e.meta, {
			before: u,
			after: "\n",
			encode: ["`"],
			...s.current()
		})), t();
	}
	return u += s.move("\n"), a && (u += s.move(a + "\n")), u += s.move(c), l(), u;
}
function Rs(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function zs(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/definition.js
function Bs(e, t, n, r) {
	let i = zs(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), s = n.enter("label"), c = n.createTracker(r), l = c.move("[");
	return l += c.move(n.safe(n.associationId(e), {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : "\n",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), o(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function Vs(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function Hs(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function Us(e, t, n) {
	let r = un(e), i = un(t);
	return r === void 0 ? i === void 0 ? n === "_" ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !0
	} : r === 1 ? i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !1
	} : {
		inside: !1,
		outside: !1
	};
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
Ws.peek = Gs;
function Ws(e, t, n, r) {
	let i = Vs(n), a = n.enter("emphasis"), o = n.createTracker(r), s = o.move(i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = Us(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = Hs(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = Us(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + Hs(d));
	let p = o.move(i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function Gs(e, t, n) {
	return n.options.emphasis || "*";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function Ks(e, t) {
	let n = !1;
	return Na(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && It(e) && (t.options.setext || n));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/heading.js
function qs(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (Ks(e, n)) {
		let t = n.enter("headingSetext"), r = n.enter("phrasing"), o = n.containerPhrasing(e, {
			...a.current(),
			before: "\n",
			after: "\n"
		});
		return r(), t(), o + "\n" + (i === 1 ? "=" : "-").repeat(o.length - (Math.max(o.lastIndexOf("\r"), o.lastIndexOf("\n")) + 1));
	}
	let o = "#".repeat(i), s = n.enter("headingAtx"), c = n.enter("phrasing");
	a.move(o + " ");
	let l = n.containerPhrasing(e, {
		before: "# ",
		after: "\n",
		...a.current()
	});
	return /^[\t ]/.test(l) && (l = Hs(l.charCodeAt(0)) + l.slice(1)), l = l ? o + " " + l : o, n.options.closeAtx && (l += " " + o), c(), s(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/html.js
Js.peek = Ys;
function Js(e) {
	return e.value || "";
}
function Ys() {
	return "<";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/image.js
Xs.peek = Zs;
function Xs(e, t, n, r) {
	let i = zs(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), s = n.enter("label"), c = n.createTracker(r), l = c.move("![");
	return l += c.move(n.safe(e.alt, {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), l += c.move(")"), o(), l;
}
function Zs() {
	return "!";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
Qs.peek = $s;
function Qs(e, t, n, r) {
	let i = e.referenceType, a = n.enter("imageReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("!["), l = n.safe(e.alt, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function $s() {
	return "!";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
ec.peek = tc;
function ec(e, t, n) {
	let r = e.value || "", i = "`", a = -1;
	for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
	for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
		let e = n.unsafe[a], t = n.compilePattern(e), i;
		if (e.atBreak) for (; i = t.exec(r);) {
			let e = i.index;
			r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--, r = r.slice(0, e) + " " + r.slice(i.index + 1);
		}
	}
	return i + r + i;
}
function tc() {
	return "`";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function nc(e, t) {
	let n = It(e);
	return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/link.js
rc.peek = ic;
function rc(e, t, n, r) {
	let i = zs(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r), s, c;
	if (nc(e, n)) {
		let t = n.stack;
		n.stack = [], s = n.enter("autolink");
		let r = o.move("<");
		return r += o.move(n.containerPhrasing(e, {
			before: r,
			after: ">",
			...o.current()
		})), r += o.move(">"), s(), n.stack = t, r;
	}
	s = n.enter("link"), c = n.enter("label");
	let l = o.move("[");
	return l += o.move(n.containerPhrasing(e, {
		before: l,
		after: "](",
		...o.current()
	})), l += o.move("]("), c(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(n.safe(e.url, {
		before: l,
		after: ">",
		...o.current()
	})), l += o.move(">")) : (c = n.enter("destinationRaw"), l += o.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...o.current()
	}))), c(), e.title && (c = n.enter(`title${a}`), l += o.move(" " + i), l += o.move(n.safe(e.title, {
		before: l,
		after: i,
		...o.current()
	})), l += o.move(i), c()), l += o.move(")"), s(), l;
}
function ic(e, t, n) {
	return nc(e, n) ? "<" : "[";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
ac.peek = oc;
function ac(e, t, n, r) {
	let i = e.referenceType, a = n.enter("linkReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("["), l = n.containerPhrasing(e, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function oc() {
	return "[";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function sc(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function cc(e) {
	let t = sc(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function lc(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function uc(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/list.js
function dc(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? lc(n) : sc(n), s = e.ordered ? o === "." ? ")" : "." : cc(n), c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), uc(n) === o && t) {
			let t = -1;
			for (; ++t < e.children.length;) {
				let n = e.children[t];
				if (n && n.type === "listItem" && n.children && n.children[0] && n.children[0].type === "thematicBreak") {
					c = !0;
					break;
				}
			}
		}
	}
	c && (o = s), n.bulletCurrent = o;
	let l = n.containerFlow(e, r);
	return n.bulletLastUsed = o, n.bulletCurrent = a, i(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function fc(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function pc(e, t, n, r) {
	let i = fc(n), a = n.bulletCurrent || sc(n);
	t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
	let o = a.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
	let s = n.createTracker(r);
	s.move(a + " ".repeat(o - a.length)), s.shift(o);
	let c = n.enter("listItem"), l = n.indentLines(n.containerFlow(e, s.current()), u);
	return c(), l;
	function u(e, t, n) {
		return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e;
	}
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function mc(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
//#endregion
//#region node_modules/mdast-util-phrasing/lib/index.js
var hc = Sa([
	"break",
	"delete",
	"emphasis",
	"footnote",
	"footnoteReference",
	"image",
	"imageReference",
	"inlineCode",
	"inlineMath",
	"link",
	"linkReference",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"strong",
	"text",
	"textDirective"
]);
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/root.js
function gc(e, t, n, r) {
	return (e.children.some(function(e) {
		return hc(e);
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function _c(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/strong.js
vc.peek = yc;
function vc(e, t, n, r) {
	let i = _c(n), a = n.enter("strong"), o = n.createTracker(r), s = o.move(i + i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = Us(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = Hs(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = Us(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + Hs(d));
	let p = o.move(i + i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function yc(e, t, n) {
	return n.options.strong || "*";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/text.js
function bc(e, t, n, r) {
	return n.safe(e.value, r);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function xc(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function Sc(e, t, n) {
	let r = (uc(n) + (n.options.ruleSpaces ? " " : "")).repeat(xc(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/index.js
var Cc = {
	blockquote: ks,
	break: Ns,
	code: Ls,
	definition: Bs,
	emphasis: Ws,
	hardBreak: Ns,
	heading: qs,
	html: Js,
	image: Xs,
	imageReference: Qs,
	inlineCode: ec,
	link: rc,
	linkReference: ac,
	list: dc,
	listItem: pc,
	paragraph: mc,
	root: gc,
	strong: vc,
	text: bc,
	thematicBreak: Sc
};
//#endregion
//#region node_modules/mdast-util-gfm-table/lib/index.js
function wc() {
	return {
		enter: {
			table: Tc,
			tableData: kc,
			tableHeader: kc,
			tableRow: Dc
		},
		exit: {
			codeText: Ac,
			table: Ec,
			tableData: Oc,
			tableHeader: Oc,
			tableRow: Oc
		}
	};
}
function Tc(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function Ec(e) {
	this.exit(e), this.data.inTable = void 0;
}
function Dc(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function Oc(e) {
	this.exit(e);
}
function kc(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function Ac(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, jc));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function jc(e, t) {
	return t === "|" ? t : e;
}
function Mc(e) {
	let t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "tableCell"
			},
			{
				character: "\n",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: "|",
				after: "[	 :-]"
			},
			{
				character: "|",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: ":",
				after: "-"
			},
			{
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}
		],
		handlers: {
			inlineCode: f,
			table: o,
			tableCell: c,
			tableRow: s
		}
	};
	function o(e, t, n, r) {
		return l(u(e, n, r), e.align);
	}
	function s(e, t, n, r) {
		let i = l([d(e, n, r)]);
		return i.slice(0, i.indexOf("\n"));
	}
	function c(e, t, n, r) {
		let i = n.enter("tableCell"), o = n.enter("phrasing"), s = n.containerPhrasing(e, {
			...r,
			before: a,
			after: a
		});
		return o(), i(), s;
	}
	function l(e, t) {
		return Es(e, {
			align: t,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		});
	}
	function u(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("table");
		for (; ++i < r.length;) a[i] = d(r[i], t, n);
		return o(), a;
	}
	function d(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("tableRow");
		for (; ++i < r.length;) a[i] = c(r[i], e, t, n);
		return o(), a;
	}
	function f(e, t, n) {
		let r = Cc.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
//#endregion
//#region node_modules/mdast-util-gfm-task-list-item/lib/index.js
function Nc() {
	return { exit: {
		taskListCheckValueChecked: Fc,
		taskListCheckValueUnchecked: Fc,
		paragraph: Ic
	} };
}
function Pc() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: Lc }
	};
}
function Fc(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Ic(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && t.type === "listItem" && typeof t.checked == "boolean") {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && n.type === "text") {
			let r = t.children, i = -1, a;
			for (; ++i < r.length;) {
				let e = r[i];
				if (e.type === "paragraph") {
					a = e;
					break;
				}
			}
			a === e && (n.value = n.value.slice(1), n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == "number" && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
function Lc(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
	a && s.move(o);
	let c = Cc.listItem(e, t, n, {
		...r,
		...s.current()
	});
	return a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c;
	function l(e) {
		return e + o;
	}
}
//#endregion
//#region node_modules/mdast-util-gfm/lib/index.js
function Rc() {
	return [
		Wo(),
		ms(),
		ys(),
		wc(),
		Nc()
	];
}
function zc(e) {
	return { extensions: [
		Go(),
		hs(e),
		bs(),
		Mc(e),
		Pc()
	] };
}
//#endregion
//#region node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var Bc = {
	tokenize: el,
	partial: !0
}, Vc = {
	tokenize: tl,
	partial: !0
}, Hc = {
	tokenize: nl,
	partial: !0
}, Uc = {
	tokenize: rl,
	partial: !0
}, Wc = {
	tokenize: il,
	partial: !0
}, Gc = {
	name: "wwwAutolink",
	tokenize: Qc,
	previous: al
}, Kc = {
	name: "protocolAutolink",
	tokenize: $c,
	previous: ol
}, qc = {
	name: "emailAutolink",
	tokenize: Zc,
	previous: sl
}, Jc = {};
function Yc() {
	return { text: Jc };
}
for (var Xc = 48; Xc < 123;) Jc[Xc] = qc, Xc++, Xc === 58 ? Xc = 65 : Xc === 91 && (Xc = 97);
Jc[43] = qc, Jc[45] = qc, Jc[46] = qc, Jc[95] = qc, Jc[72] = [qc, Kc], Jc[104] = [qc, Kc], Jc[87] = [qc, Gc], Jc[119] = [qc, Gc];
function Zc(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !cl(t) || !sl.call(r, r.previous) || ll(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return cl(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(Wc, u, l)(t) : t === 45 || t === 95 || K(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && G(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function Qc(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !al.call(r, r.previous) || ll(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Bc, e.attempt(Vc, e.attempt(Hc, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function $c(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && ol.call(r, r.previous) && !ll(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if (G(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
		if (t === 58) {
			let n = i.toLowerCase();
			if (n === "http" || n === "https") return e.consume(t), c;
		}
		return n(t);
	}
	function c(t) {
		return t === 47 ? (e.consume(t), a ? l : (a = !0, c)) : n(t);
	}
	function l(t) {
		return t === null || Yt(t) || J(t) || en(t) || $t(t) ? n(t) : e.attempt(Vc, e.attempt(Hc, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function el(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function tl(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(Uc, c, s)(t) : t === null || J(t) || en(t) || t !== 45 && $t(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function nl(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(Uc, t, a)(o) : o === null || J(o) || en(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function rl(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || J(o) || en(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || J(e) || en(e) ? t(e) : r(e);
	}
	function a(e) {
		return G(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : G(t) ? (e.consume(t), o) : n(t);
	}
}
function il(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return K(e) ? n(e) : t(e);
	}
}
function al(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || J(e);
}
function ol(e) {
	return !G(e);
}
function sl(e) {
	return !(e === 47 || cl(e));
}
function cl(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || K(e);
}
function ll(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
//#endregion
//#region node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var ul = {
	tokenize: vl,
	partial: !0
};
function dl() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: hl,
			continuation: { tokenize: gl },
			exit: _l
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: ml
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: fl,
				resolveTo: pl
			}
		}
	};
}
function fl(e, t, n) {
	let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
	for (; i--;) {
		let e = r.events[i][1];
		if (e.type === "labelImage") {
			o = e;
			break;
		}
		if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") break;
	}
	return s;
	function s(i) {
		if (!o || !o._balanced) return n(i);
		let s = W(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function pl(e, t) {
	let n = e.length;
	for (; n--;) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, s = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...s), e;
}
function ml(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return s;
	function s(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c;
	}
	function c(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l) : n(t);
	}
	function l(s) {
		if (a > 999 || s === 93 && !o || s === null || s === 91 || J(s)) return n(s);
		if (s === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes(W(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return J(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function hl(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (o > 999 || t === 93 && !s || t === null || t === 91 || J(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = W(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return J(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
	}
	function f(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), X(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function gl(e, t, n) {
	return e.check(vn, t, e.attempt(ul, t, n));
}
function _l(e) {
	e.exit("gfmFootnoteDefinition");
}
function vl(e, t, n) {
	let r = this;
	return X(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function yl(e) {
	let t = (e || {}).singleTilde, n = {
		name: "strikethrough",
		tokenize: i,
		resolveAll: r
	};
	return t ?? (t = !0), {
		text: { 126: n },
		insideSpan: { null: [n] },
		attentionMarkers: { null: [126] }
	};
	function r(e, t) {
		let n = -1;
		for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "strikethroughSequenceTemporary" && e[n][1]._close) {
			let r = n;
			for (; r--;) if (e[r][0] === "exit" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
				e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
				let i = {
					type: "strikethrough",
					start: Object.assign({}, e[r][1].start),
					end: Object.assign({}, e[n][1].end)
				}, a = {
					type: "strikethroughText",
					start: Object.assign({}, e[r][1].end),
					end: Object.assign({}, e[n][1].start)
				}, o = [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						e[r][1],
						t
					],
					[
						"exit",
						e[r][1],
						t
					],
					[
						"enter",
						a,
						t
					]
				], s = t.parser.constructs.insideSpan.null;
				s && H(o, o.length, 0, dn(s, e.slice(r + 1, n), t)), H(o, o.length, 0, [
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						e[n][1],
						t
					],
					[
						"exit",
						e[n][1],
						t
					],
					[
						"exit",
						i,
						t
					]
				]), H(e, r - 1, n - r + 3, o), n = r + o.length - 2;
				break;
			}
		}
		for (n = -1; ++n < e.length;) e[n][1].type === "strikethroughSequenceTemporary" && (e[n][1].type = "data");
		return e;
	}
	function i(e, n, r) {
		let i = this.previous, a = this.events, o = 0;
		return s;
		function s(t) {
			return i === 126 && a[a.length - 1][1].type !== "characterEscape" ? r(t) : (e.enter("strikethroughSequenceTemporary"), c(t));
		}
		function c(a) {
			let s = un(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = un(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/edit-map.js
var bl = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		xl(this, e, t, n);
	}
	consume(e) {
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function xl(e, t, n, r) {
	let i = 0;
	if (!(n === 0 && r.length === 0)) {
		for (; i < e.map.length;) {
			if (e.map[i][0] === t) {
				e.map[i][1] += n, e.map[i][2].push(...r);
				return;
			}
			i += 1;
		}
		e.map.push([
			t,
			n,
			r
		]);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/infer.js
function Sl(e, t) {
	let n = !1, r = [];
	for (; t < e.length;) {
		let i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					let e = r.length - 1;
					r[e] = r[e] === "left" ? "center" : "right";
				}
			} else if (i[1].type === "tableDelimiterRow") break;
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1;
	}
	return r;
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/syntax.js
function Cl() {
	return { flow: { null: {
		name: "table",
		tokenize: wl,
		resolveAll: Tl
	} } };
}
function wl(e, t, n) {
	let r = this, i = 0, a = 0, o;
	return s;
	function s(e) {
		let t = r.events.length - 1;
		for (; t > -1;) {
			let e = r.events[t][1].type;
			if (e === "lineEnding" || e === "linePrefix") t--;
			else break;
		}
		let i = t > -1 ? r.events[t][1].type : null, a = i === "tableHead" || i === "tableRow" ? S : c;
		return a === S && r.parser.lazy[r.now().line] ? n(e) : a(e);
	}
	function c(t) {
		return e.enter("tableHead"), e.enter("tableRow"), l(t);
	}
	function l(e) {
		return e === 124 ? u(e) : (o = !0, a += 1, u(e));
	}
	function u(t) {
		return t === null ? n(t) : q(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : Y(t) ? X(e, u, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), d(t)));
	}
	function d(t) {
		return t === null || t === 124 || J(t) ? (e.exit("data"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
	}
	function p(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, Y(t) ? X(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t));
	}
	function m(t) {
		return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : x(t);
	}
	function h(t) {
		return Y(t) ? X(e, g, "whitespace")(t) : g(t);
	}
	function g(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), _) : t === 45 ? (a += 1, _(t)) : t === null || q(t) ? b(t) : x(t);
	}
	function _(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), v(t)) : x(t);
	}
	function v(t) {
		return t === 45 ? (e.consume(t), v) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(t));
	}
	function y(t) {
		return Y(t) ? X(e, b, "whitespace")(t) : b(t);
	}
	function b(n) {
		return n === 124 ? m(n) : n === null || q(n) ? !o || i !== a ? x(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : x(n);
	}
	function x(e) {
		return n(e);
	}
	function S(t) {
		return e.enter("tableRow"), C(t);
	}
	function C(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), C) : n === null || q(n) ? (e.exit("tableRow"), t(n)) : Y(n) ? X(e, C, "whitespace")(n) : (e.enter("data"), w(n));
	}
	function w(t) {
		return t === null || t === 124 || J(t) ? (e.exit("data"), C(t)) : (e.consume(t), t === 92 ? T : w);
	}
	function T(t) {
		return t === 92 || t === 124 ? (e.consume(t), w) : w(t);
	}
}
function Tl(e, t) {
	let n = -1, r = !0, i = 0, a = [
		0,
		0,
		0,
		0
	], o = [
		0,
		0,
		0,
		0
	], s = !1, c = 0, l, u, d, f = new bl();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (Dl(f, t, c, l, u), u = void 0, c = 0), l = {
			type: "table",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			l,
			t
		]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [
			0,
			0,
			0,
			0
		], o = [
			0,
			n + 1,
			0,
			0
		], s && (s = !1, u = {
			type: "tableBody",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			u,
			t
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = El(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = El(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = El(f, t, o, i, n, d)) : (o[0] = o[1], d = El(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && Dl(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = Sl(t.events, n));
	}
	return e;
}
function El(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, Ol(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = Ol(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = Ol(t.events, n[2]), a = Ol(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, a)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), r !== 2) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return i !== void 0 && (a.end = Object.assign({}, Ol(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function Dl(e, t, n, r, i) {
	let a = [], o = Ol(t.events, n);
	i && (i.end = Object.assign({}, o), a.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), a.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, a);
}
function Ol(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
//#endregion
//#region node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var kl = {
	name: "tasklistCheck",
	tokenize: jl
};
function Al() {
	return { text: { 91: kl } };
}
function jl(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return J(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t);
	}
	function s(r) {
		return q(r) ? t(r) : Y(r) ? e.check({ tokenize: Ml }, t, n)(r) : n(r);
	}
}
function Ml(e, t, n) {
	return X(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm/index.js
function Nl(e) {
	return Wt([
		Yc(),
		dl(),
		yl(e),
		Cl(),
		Al()
	]);
}
//#endregion
//#region node_modules/remark-gfm/lib/index.js
var Pl = {};
function Fl(e) {
	let t = this, n = e || Pl, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
	i.push(Nl(n)), a.push(Rc()), o.push(zc(n));
}
//#endregion
//#region lib/article-prose.ts
var Il = (/* @__PURE__ */ "prose max-w-none text-sm leading-relaxed text-wx-fg,[&_p]:my-3 [&_strong]:font-semibold [&_em]:italic,[&_a]:text-wx-primary [&_a]:underline [&_a]:underline-offset-2,[&_a]:transition-opacity [&_a:hover]:opacity-70,[&_code]:rounded-[6px] [&_code]:bg-wx-bg-elevated [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em],[&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-wx-border,[&_pre]:bg-[#0f1115] [&_pre]:text-zinc-100 [&_pre]:p-4 [&_pre]:text-[12.5px] [&_pre]:leading-relaxed,[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-zinc-100,[&_.hljs-keyword]:text-violet-300 [&_.hljs-built_in]:text-violet-300 [&_.hljs-type]:text-violet-300,[&_.hljs-string]:text-emerald-300,[&_.hljs-number]:text-amber-300 [&_.hljs-literal]:text-amber-300,[&_.hljs-comment]:text-zinc-500 [&_.hljs-comment]:italic,[&_.hljs-attr]:text-sky-300 [&_.hljs-attribute]:text-sky-300,[&_.hljs-title]:text-zinc-100 [&_.hljs-title]:font-medium,[&_.hljs-tag]:text-rose-300 [&_.hljs-name]:text-rose-300,[&_h1]:mt-6 [&_h1]:mb-3 [&_h1]:text-xl [&_h1]:font-semibold [&_h1]:tracking-tight,[&_h2]:mt-5 [&_h2]:mb-2 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:tracking-tight,[&_h3]:mt-4 [&_h3]:mb-1.5 [&_h3]:text-sm [&_h3]:font-semibold,[&_h1]:scroll-mt-16 [&_h2]:scroll-mt-16 [&_h3]:scroll-mt-16,[&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-wx-fg-subtle,[&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:marker:text-wx-fg-subtle,[&_li]:my-1,[&_ul[data-type=taskList]]:list-none! [&_ul[data-type=taskList]]:pl-0!,[&_ul[data-type=taskList]_li]:my-1.5 [&_ul[data-type=taskList]_li]:flex! [&_ul[data-type=taskList]_li]:items-start [&_ul[data-type=taskList]_li]:gap-2 [&_ul[data-type=taskList]_li]:pl-0,[&_ul[data-type=taskList]_li]:marker:content-none,[&_ul[data-type=taskList]_li>label]:m-0 [&_ul[data-type=taskList]_li>label]:inline-flex [&_ul[data-type=taskList]_li>label]:h-5 [&_ul[data-type=taskList]_li>label]:items-center [&_ul[data-type=taskList]_li>label]:shrink-0 [&_ul[data-type=taskList]_li>label]:select-none,[&_ul[data-type=taskList]_li>label]:pointer-events-none [&_ul[data-type=taskList]_li>label]:cursor-default,[&_ul[data-type=taskList]_input]:accent-wx-primary [&_ul[data-type=taskList]_input]:h-3.5 [&_ul[data-type=taskList]_input]:w-3.5,[&_ul[data-type=taskList]_li>label>span]:hidden,[&_ul[data-type=taskList]_li>div]:min-w-0 [&_ul[data-type=taskList]_li>div]:flex-1,[&_ul[data-type=taskList]_li>div>p]:my-0! [&_ul[data-type=taskList]_li>div>p]:leading-snug,[&_ul[data-type=taskList]_li[data-checked=true]>div]:text-wx-fg-muted [&_ul[data-type=taskList]_li[data-checked=true]>div]:line-through,[&_blockquote]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:border-wx-primary/40,[&_blockquote]:pl-3 [&_blockquote]:italic [&_blockquote]:text-wx-fg-muted,[&_hr]:my-6 [&_hr]:border-wx-border,[&_img]:my-3 [&_img]:mx-auto [&_img]:block [&_img]:max-w-full,[&_figure]:my-5 [&_figure]:flex [&_figure]:flex-col [&_figure]:items-center [&_figure]:text-center,[&_figure_img]:my-0,[&_figcaption]:mt-2 [&_figcaption]:text-xs [&_figcaption]:italic [&_figcaption]:text-wx-fg-muted,[&_table]:my-3 [&_table]:w-full [&_table]:table-fixed [&_table]:border-collapse [&_table]:text-xs,[&_table]:overflow-hidden [&_table]:rounded-lg [&_table]:border [&_table]:border-wx-border,[&_thead]:bg-wx-bg-elevated,[&_th]:px-2.5 [&_th]:py-1.5 [&_th]:text-left [&_th]:font-medium [&_th]:text-wx-fg,[&_th]:border-b [&_th]:border-wx-border,[&_th+th]:border-l [&_th+th]:border-wx-border,[&_td]:px-2.5 [&_td]:py-1.5 [&_td]:text-wx-fg [&_td]:align-top,[&_td+td]:border-l [&_td+td]:border-wx-border,[&_tbody_tr]:border-t [&_tbody_tr]:border-wx-border,[&_tbody_tr:nth-child(odd)]:bg-wx-bg-elevated/40,[&_th_p]:my-0 [&_td_p]:my-0 [&_th_p]:inline [&_td_p]:inline,[&_details]:my-2 [&_details]:overflow-hidden [&_details]:rounded-lg [&_details]:border [&_details]:border-wx-border [&_details]:bg-wx-bg-elevated/40,[&_details+details]:mt-2,[&_summary]:relative [&_summary]:cursor-pointer [&_summary]:list-none [&_summary]:px-4 [&_summary]:py-3,[&_summary]:pr-10 [&_summary]:text-sm [&_summary]:font-medium [&_summary]:text-wx-fg,[&_summary::-webkit-details-marker]:hidden [&_summary::marker]:hidden,[&_summary]:after:absolute [&_summary]:after:right-4 [&_summary]:after:top-1/2,[&_summary]:after:-translate-y-1/2 [&_summary]:after:text-wx-fg-subtle,[&_summary]:after:text-base [&_summary]:after:leading-none,[&_summary]:after:transition-transform [&_summary]:after:content-['\\203A'],[&_details[open]_summary]:after:rotate-90,[&_details[open]_summary]:border-b [&_details[open]_summary]:border-wx-border,[&_details]:[&>:not(summary)]:px-4 [&_details]:[&>:not(summary)]:py-3,[&_details]:[&>:not(summary):first-of-type]:pt-3".split(",")).join(" "), Ll = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t;
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})(t || (t = {}));
	function n(e) {
		return e.type === t.Tag || e.type === t.Script || e.type === t.Style;
	}
	t.Root, t.Text, t.Directive, t.Comment, t.Script, t.Style, t.Tag, t.CDATA, t.Doctype;
	var r = class {
		constructor() {
			j(this, "parent", null), j(this, "prev", null), j(this, "next", null), j(this, "startIndex", null), j(this, "endIndex", null);
		}
		get parentNode() {
			return this.parent;
		}
		set parentNode(e) {
			this.parent = e;
		}
		get previousSibling() {
			return this.prev;
		}
		set previousSibling(e) {
			this.prev = e;
		}
		get nextSibling() {
			return this.next;
		}
		set nextSibling(e) {
			this.next = e;
		}
		cloneNode(e = !1) {
			return v(this, e);
		}
	}, i = class extends r {
		constructor(e) {
			super(), j(this, "data", void 0), this.data = e;
		}
		get nodeValue() {
			return this.data;
		}
		set nodeValue(e) {
			this.data = e;
		}
	}, a = class extends i {
		constructor(...e) {
			super(...e), j(this, "type", t.Text);
		}
		get nodeType() {
			return 3;
		}
	}, o = class extends i {
		constructor(...e) {
			super(...e), j(this, "type", t.Comment);
		}
		get nodeType() {
			return 8;
		}
	}, s = class extends i {
		constructor(e, n) {
			super(n), j(this, "type", t.Directive), j(this, "name", void 0), j(this, "x-name", void 0), j(this, "x-publicId", void 0), j(this, "x-systemId", void 0), this.name = e;
		}
		get nodeType() {
			return 1;
		}
	}, c = class extends r {
		constructor(e) {
			super(), j(this, "children", void 0), this.children = e;
		}
		get firstChild() {
			return this.children[0] ?? null;
		}
		get lastChild() {
			return this.children.length > 0 ? this.children[this.children.length - 1] : null;
		}
		get childNodes() {
			return this.children;
		}
		set childNodes(e) {
			this.children = e;
		}
	}, l = class extends c {
		constructor(...e) {
			super(...e), j(this, "type", t.CDATA);
		}
		get nodeType() {
			return 4;
		}
	}, u = class extends c {
		constructor(...e) {
			super(...e), j(this, "type", t.Root);
		}
		get nodeType() {
			return 9;
		}
	}, d = class extends c {
		constructor(e, n, r = [], i = e === "script" ? t.Script : e === "style" ? t.Style : t.Tag) {
			super(r), j(this, "name", void 0), j(this, "attribs", void 0), j(this, "type", void 0), j(this, "namespace", void 0), j(this, "x-attribsNamespace", void 0), j(this, "x-attribsPrefix", void 0), this.name = e, this.attribs = n, this.type = i;
		}
		get nodeType() {
			return 1;
		}
		get tagName() {
			return this.name;
		}
		set tagName(e) {
			this.name = e;
		}
		get attributes() {
			return Object.keys(this.attribs).map((e) => ({
				name: e,
				value: this.attribs[e],
				namespace: this["x-attribsNamespace"]?.[e],
				prefix: this["x-attribsPrefix"]?.[e]
			}));
		}
	};
	function f(e) {
		return n(e);
	}
	function p(e) {
		return e.type === t.CDATA;
	}
	function m(e) {
		return e.type === t.Text;
	}
	function h(e) {
		return e.type === t.Comment;
	}
	function g(e) {
		return e.type === t.Directive;
	}
	function _(e) {
		return e.type === t.Root;
	}
	function v(e, t = !1) {
		let n;
		if (m(e)) n = new a(e.data);
		else if (h(e)) n = new o(e.data);
		else if (f(e)) {
			let r = t ? y(e.children) : [], i = new d(e.name, { ...e.attribs }, r);
			for (let e of r) e.parent = i;
			e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), n = i;
		} else if (p(e)) {
			let r = t ? y(e.children) : [], i = new l(r);
			for (let e of r) e.parent = i;
			n = i;
		} else if (_(e)) {
			let r = t ? y(e.children) : [], i = new u(r);
			for (let e of r) e.parent = i;
			e["x-mode"] && (i["x-mode"] = e["x-mode"]), n = i;
		} else if (g(e)) {
			let t = new s(e.name, e.data);
			e["x-name"] != null && (t["x-name"] = e["x-name"], t["x-publicId"] = e["x-publicId"], t["x-systemId"] = e["x-systemId"]), n = t;
		} else throw Error(`Not implemented yet: ${e.type}`);
		return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
	}
	function y(e) {
		let t = e.map((e) => v(e, !0));
		for (let e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
		return t;
	}
	var b = (/* @__PURE__ */ "animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.linearGradient.radialGradient.textPath".split(".")).reduce(function(e, t) {
		return e[t.toLowerCase()] = t, e;
	}, {}), x = "\r", S = new RegExp(x, "g"), C = `__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_${Date.now().toString()}__`, w = new RegExp(C, "g");
	function T(e) {
		return b[e];
	}
	function E(e) {
		for (var t = {}, n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			t[i.name] = i.value;
		}
		return t;
	}
	function D(e) {
		return e = e.toLowerCase(), T(e) || e;
	}
	function O(e, t) {
		var n = "<" + t, r = e.toLowerCase().indexOf(n);
		if (r === -1) return !1;
		var i = e[r + n.length];
		return i === ">" || i === " " || i === "	" || i === "\n" || i === "\r" || i === "/";
	}
	function k(e) {
		return e.replace(S, C);
	}
	function ee(e) {
		return e.replace(w, x);
	}
	function te(e, t, n) {
		t === void 0 && (t = null);
		for (var r = [], i, c = 0, l = e.length; c < l; c++) {
			var u = e[c];
			switch (u.nodeType) {
				case 1:
					var f = D(u.nodeName);
					i = new d(f, E(u.attributes)), i.children = te(f === "template" ? u.content.childNodes : u.childNodes, i);
					break;
				/* v8 ignore start */
				case 3:
					i = new a(ee(u.nodeValue ?? ""));
					break;
				case 8:
					i = new o(u.nodeValue ?? "");
					break;
				/* v8 ignore stop */
				default: continue;
			}
			var p = r[c - 1] ?? null;
			p && (p.next = i), i.parent = t, i.prev = p, i.next = null, r.push(i);
		}
		return n && (i = new s(n.substring(0, n.indexOf(" ")).toLowerCase(), n), i.next = r[0] ?? null, i.parent = t, r.unshift(i), r[1] && (r[1].prev = r[0])), r;
	}
	var A = "html", M = "head", N = "body", ne = /<([a-zA-Z]+[0-9]?)/;
	function re(e, t) {
		return t ? t.createHTML(e) : e;
	}
	/* v8 ignore start */
	var P = function(e, t, n) {
		throw Error("This browser does not support `document.implementation.createHTMLDocument`");
	}, ie = function(e, t, n) {
		throw Error("This browser does not support `DOMParser.prototype.parseFromString`");
	}, ae = typeof window == "object" && window.DOMParser;
	if (typeof ae == "function") {
		var oe = new ae(), se = "text/html";
		ie = function(e, t, n) {
			return t && (e = `<${t}>${e}</${t}>`), oe.parseFromString(e, se);
		}, P = ie;
	}
	if (typeof document == "object" && document.implementation) {
		var ce = document.implementation.createHTMLDocument();
		P = function(e, t, n) {
			if (t) {
				var r = ce.documentElement.querySelector(t);
				return r && (r.innerHTML = re(e, n)), ce;
			}
			return ce.documentElement.innerHTML = re(e, n), ce;
		};
	}
	var le = typeof document == "object" && document.createElement("template"), ue;
	le && le.content && (ue = function(e, t) {
		return le.innerHTML = re(e, t), le.content.childNodes;
	});
	var de = function() {
		return document.createDocumentFragment().childNodes;
	};
	/* v8 ignore stop */
	function fe(e, t) {
		var n, r;
		e = k(e);
		var i = (ne.exec(e)?.[1])?.toLowerCase();
		switch (i) {
			case A:
				var a = ie(e);
				if (!O(e, M)) {
					var o = a.querySelector(M);
					(n = o?.parentNode) == null || n.removeChild(o);
				}
				if (!O(e, N)) {
					var o = a.querySelector(N);
					(r = o?.parentNode) == null || r.removeChild(o);
				}
				return a.querySelectorAll(A);
			case M:
			case N:
				var s = P(e, void 0, t).querySelectorAll(i);
				return O(e, N) && O(e, M) ? s[0].parentNode?.childNodes ?? de() : s;
			/* v8 ignore start */
			default:
				if (ue) return ue(e, t);
				var o = P(e, N, t).querySelector(N);
				return o?.childNodes ?? de();
		}
	}
	var pe = /<(![a-zA-Z\s]+)>/;
	function me(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		var n = pe.exec(e), r = n ? n[1] : void 0;
		return te(fe(e, t?.trustedTypePolicy), null, r);
	}
	e.default = me;
})), Rl = /* @__PURE__ */ o(((e) => {
	e.SAME = 0, e.CAMELCASE = 1, e.possibleStandardNames = {
		accept: 0,
		acceptCharset: 1,
		"accept-charset": "acceptCharset",
		accessKey: 1,
		action: 0,
		allowFullScreen: 1,
		alt: 0,
		as: 0,
		async: 0,
		autoCapitalize: 1,
		autoComplete: 1,
		autoCorrect: 1,
		autoFocus: 1,
		autoPlay: 1,
		autoSave: 1,
		capture: 0,
		cellPadding: 1,
		cellSpacing: 1,
		challenge: 0,
		charSet: 1,
		checked: 0,
		children: 0,
		cite: 0,
		class: "className",
		classID: 1,
		className: 1,
		cols: 0,
		colSpan: 1,
		content: 0,
		contentEditable: 1,
		contextMenu: 1,
		controls: 0,
		controlsList: 1,
		coords: 0,
		crossOrigin: 1,
		dangerouslySetInnerHTML: 1,
		data: 0,
		dateTime: 1,
		default: 0,
		defaultChecked: 1,
		defaultValue: 1,
		defer: 0,
		dir: 0,
		disabled: 0,
		disablePictureInPicture: 1,
		disableRemotePlayback: 1,
		download: 0,
		draggable: 0,
		encType: 1,
		enterKeyHint: 1,
		for: "htmlFor",
		form: 0,
		formMethod: 1,
		formAction: 1,
		formEncType: 1,
		formNoValidate: 1,
		formTarget: 1,
		frameBorder: 1,
		headers: 0,
		height: 0,
		hidden: 0,
		high: 0,
		href: 0,
		hrefLang: 1,
		htmlFor: 1,
		httpEquiv: 1,
		"http-equiv": "httpEquiv",
		icon: 0,
		id: 0,
		innerHTML: 1,
		inputMode: 1,
		integrity: 0,
		is: 0,
		itemID: 1,
		itemProp: 1,
		itemRef: 1,
		itemScope: 1,
		itemType: 1,
		keyParams: 1,
		keyType: 1,
		kind: 0,
		label: 0,
		lang: 0,
		list: 0,
		loop: 0,
		low: 0,
		manifest: 0,
		marginWidth: 1,
		marginHeight: 1,
		max: 0,
		maxLength: 1,
		media: 0,
		mediaGroup: 1,
		method: 0,
		min: 0,
		minLength: 1,
		multiple: 0,
		muted: 0,
		name: 0,
		noModule: 1,
		nonce: 0,
		noValidate: 1,
		open: 0,
		optimum: 0,
		pattern: 0,
		placeholder: 0,
		playsInline: 1,
		poster: 0,
		preload: 0,
		profile: 0,
		radioGroup: 1,
		readOnly: 1,
		referrerPolicy: 1,
		rel: 0,
		required: 0,
		reversed: 0,
		role: 0,
		rows: 0,
		rowSpan: 1,
		sandbox: 0,
		scope: 0,
		scoped: 0,
		scrolling: 0,
		seamless: 0,
		selected: 0,
		shape: 0,
		size: 0,
		sizes: 0,
		span: 0,
		spellCheck: 1,
		src: 0,
		srcDoc: 1,
		srcLang: 1,
		srcSet: 1,
		start: 0,
		step: 0,
		style: 0,
		summary: 0,
		tabIndex: 1,
		target: 0,
		title: 0,
		type: 0,
		useMap: 1,
		value: 0,
		width: 0,
		wmode: 0,
		wrap: 0,
		about: 0,
		accentHeight: 1,
		"accent-height": "accentHeight",
		accumulate: 0,
		additive: 0,
		alignmentBaseline: 1,
		"alignment-baseline": "alignmentBaseline",
		allowReorder: 1,
		alphabetic: 0,
		amplitude: 0,
		arabicForm: 1,
		"arabic-form": "arabicForm",
		ascent: 0,
		attributeName: 1,
		attributeType: 1,
		autoReverse: 1,
		azimuth: 0,
		baseFrequency: 1,
		baselineShift: 1,
		"baseline-shift": "baselineShift",
		baseProfile: 1,
		bbox: 0,
		begin: 0,
		bias: 0,
		by: 0,
		calcMode: 1,
		capHeight: 1,
		"cap-height": "capHeight",
		clip: 0,
		clipPath: 1,
		"clip-path": "clipPath",
		clipPathUnits: 1,
		clipRule: 1,
		"clip-rule": "clipRule",
		color: 0,
		colorInterpolation: 1,
		"color-interpolation": "colorInterpolation",
		colorInterpolationFilters: 1,
		"color-interpolation-filters": "colorInterpolationFilters",
		colorProfile: 1,
		"color-profile": "colorProfile",
		colorRendering: 1,
		"color-rendering": "colorRendering",
		contentScriptType: 1,
		contentStyleType: 1,
		cursor: 0,
		cx: 0,
		cy: 0,
		d: 0,
		datatype: 0,
		decelerate: 0,
		descent: 0,
		diffuseConstant: 1,
		direction: 0,
		display: 0,
		divisor: 0,
		dominantBaseline: 1,
		"dominant-baseline": "dominantBaseline",
		dur: 0,
		dx: 0,
		dy: 0,
		edgeMode: 1,
		elevation: 0,
		enableBackground: 1,
		"enable-background": "enableBackground",
		end: 0,
		exponent: 0,
		externalResourcesRequired: 1,
		fill: 0,
		fillOpacity: 1,
		"fill-opacity": "fillOpacity",
		fillRule: 1,
		"fill-rule": "fillRule",
		filter: 0,
		filterRes: 1,
		filterUnits: 1,
		floodOpacity: 1,
		"flood-opacity": "floodOpacity",
		floodColor: 1,
		"flood-color": "floodColor",
		focusable: 0,
		fontFamily: 1,
		"font-family": "fontFamily",
		fontSize: 1,
		"font-size": "fontSize",
		fontSizeAdjust: 1,
		"font-size-adjust": "fontSizeAdjust",
		fontStretch: 1,
		"font-stretch": "fontStretch",
		fontStyle: 1,
		"font-style": "fontStyle",
		fontVariant: 1,
		"font-variant": "fontVariant",
		fontWeight: 1,
		"font-weight": "fontWeight",
		format: 0,
		from: 0,
		fx: 0,
		fy: 0,
		g1: 0,
		g2: 0,
		glyphName: 1,
		"glyph-name": "glyphName",
		glyphOrientationHorizontal: 1,
		"glyph-orientation-horizontal": "glyphOrientationHorizontal",
		glyphOrientationVertical: 1,
		"glyph-orientation-vertical": "glyphOrientationVertical",
		glyphRef: 1,
		gradientTransform: 1,
		gradientUnits: 1,
		hanging: 0,
		horizAdvX: 1,
		"horiz-adv-x": "horizAdvX",
		horizOriginX: 1,
		"horiz-origin-x": "horizOriginX",
		ideographic: 0,
		imageRendering: 1,
		"image-rendering": "imageRendering",
		in2: 0,
		in: 0,
		inlist: 0,
		intercept: 0,
		k1: 0,
		k2: 0,
		k3: 0,
		k4: 0,
		k: 0,
		kernelMatrix: 1,
		kernelUnitLength: 1,
		kerning: 0,
		keyPoints: 1,
		keySplines: 1,
		keyTimes: 1,
		lengthAdjust: 1,
		letterSpacing: 1,
		"letter-spacing": "letterSpacing",
		lightingColor: 1,
		"lighting-color": "lightingColor",
		limitingConeAngle: 1,
		local: 0,
		markerEnd: 1,
		"marker-end": "markerEnd",
		markerHeight: 1,
		markerMid: 1,
		"marker-mid": "markerMid",
		markerStart: 1,
		"marker-start": "markerStart",
		markerUnits: 1,
		markerWidth: 1,
		mask: 0,
		maskContentUnits: 1,
		maskUnits: 1,
		mathematical: 0,
		mode: 0,
		numOctaves: 1,
		offset: 0,
		opacity: 0,
		operator: 0,
		order: 0,
		orient: 0,
		orientation: 0,
		origin: 0,
		overflow: 0,
		overlinePosition: 1,
		"overline-position": "overlinePosition",
		overlineThickness: 1,
		"overline-thickness": "overlineThickness",
		paintOrder: 1,
		"paint-order": "paintOrder",
		panose1: 0,
		"panose-1": "panose1",
		pathLength: 1,
		patternContentUnits: 1,
		patternTransform: 1,
		patternUnits: 1,
		pointerEvents: 1,
		"pointer-events": "pointerEvents",
		points: 0,
		pointsAtX: 1,
		pointsAtY: 1,
		pointsAtZ: 1,
		prefix: 0,
		preserveAlpha: 1,
		preserveAspectRatio: 1,
		primitiveUnits: 1,
		property: 0,
		r: 0,
		radius: 0,
		refX: 1,
		refY: 1,
		renderingIntent: 1,
		"rendering-intent": "renderingIntent",
		repeatCount: 1,
		repeatDur: 1,
		requiredExtensions: 1,
		requiredFeatures: 1,
		resource: 0,
		restart: 0,
		result: 0,
		results: 0,
		rotate: 0,
		rx: 0,
		ry: 0,
		scale: 0,
		security: 0,
		seed: 0,
		shapeRendering: 1,
		"shape-rendering": "shapeRendering",
		slope: 0,
		spacing: 0,
		specularConstant: 1,
		specularExponent: 1,
		speed: 0,
		spreadMethod: 1,
		startOffset: 1,
		stdDeviation: 1,
		stemh: 0,
		stemv: 0,
		stitchTiles: 1,
		stopColor: 1,
		"stop-color": "stopColor",
		stopOpacity: 1,
		"stop-opacity": "stopOpacity",
		strikethroughPosition: 1,
		"strikethrough-position": "strikethroughPosition",
		strikethroughThickness: 1,
		"strikethrough-thickness": "strikethroughThickness",
		string: 0,
		stroke: 0,
		strokeDasharray: 1,
		"stroke-dasharray": "strokeDasharray",
		strokeDashoffset: 1,
		"stroke-dashoffset": "strokeDashoffset",
		strokeLinecap: 1,
		"stroke-linecap": "strokeLinecap",
		strokeLinejoin: 1,
		"stroke-linejoin": "strokeLinejoin",
		strokeMiterlimit: 1,
		"stroke-miterlimit": "strokeMiterlimit",
		strokeWidth: 1,
		"stroke-width": "strokeWidth",
		strokeOpacity: 1,
		"stroke-opacity": "strokeOpacity",
		suppressContentEditableWarning: 1,
		suppressHydrationWarning: 1,
		surfaceScale: 1,
		systemLanguage: 1,
		tableValues: 1,
		targetX: 1,
		targetY: 1,
		textAnchor: 1,
		"text-anchor": "textAnchor",
		textDecoration: 1,
		"text-decoration": "textDecoration",
		textLength: 1,
		textRendering: 1,
		"text-rendering": "textRendering",
		to: 0,
		transform: 0,
		typeof: 0,
		u1: 0,
		u2: 0,
		underlinePosition: 1,
		"underline-position": "underlinePosition",
		underlineThickness: 1,
		"underline-thickness": "underlineThickness",
		unicode: 0,
		unicodeBidi: 1,
		"unicode-bidi": "unicodeBidi",
		unicodeRange: 1,
		"unicode-range": "unicodeRange",
		unitsPerEm: 1,
		"units-per-em": "unitsPerEm",
		unselectable: 0,
		vAlphabetic: 1,
		"v-alphabetic": "vAlphabetic",
		values: 0,
		vectorEffect: 1,
		"vector-effect": "vectorEffect",
		version: 0,
		vertAdvY: 1,
		"vert-adv-y": "vertAdvY",
		vertOriginX: 1,
		"vert-origin-x": "vertOriginX",
		vertOriginY: 1,
		"vert-origin-y": "vertOriginY",
		vHanging: 1,
		"v-hanging": "vHanging",
		vIdeographic: 1,
		"v-ideographic": "vIdeographic",
		viewBox: 1,
		viewTarget: 1,
		visibility: 0,
		vMathematical: 1,
		"v-mathematical": "vMathematical",
		vocab: 0,
		widths: 0,
		wordSpacing: 1,
		"word-spacing": "wordSpacing",
		writingMode: 1,
		"writing-mode": "writingMode",
		x1: 0,
		x2: 0,
		x: 0,
		xChannelSelector: 1,
		xHeight: 1,
		"x-height": "xHeight",
		xlinkActuate: 1,
		"xlink:actuate": "xlinkActuate",
		xlinkArcrole: 1,
		"xlink:arcrole": "xlinkArcrole",
		xlinkHref: 1,
		"xlink:href": "xlinkHref",
		xlinkRole: 1,
		"xlink:role": "xlinkRole",
		xlinkShow: 1,
		"xlink:show": "xlinkShow",
		xlinkTitle: 1,
		"xlink:title": "xlinkTitle",
		xlinkType: 1,
		"xlink:type": "xlinkType",
		xmlBase: 1,
		"xml:base": "xmlBase",
		xmlLang: 1,
		"xml:lang": "xmlLang",
		xmlns: 0,
		"xml:space": "xmlSpace",
		xmlnsXlink: 1,
		"xmlns:xlink": "xmlnsXlink",
		xmlSpace: 1,
		y1: 0,
		y2: 0,
		y: 0,
		yChannelSelector: 1,
		z: 0,
		zoomAndPan: 1
	};
})), zl = /* @__PURE__ */ o(((e) => {
	var t = 0, n = 1, r = 2, i = 3, a = 4, o = 5, s = 6;
	function c(e) {
		return u.hasOwnProperty(e) ? u[e] : null;
	}
	function l(e, t, n, o, s, c, l) {
		this.acceptsBooleans = t === r || t === i || t === a, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = l;
	}
	var u = {};
	[
		"children",
		"dangerouslySetInnerHTML",
		"defaultValue",
		"defaultChecked",
		"innerHTML",
		"suppressContentEditableWarning",
		"suppressHydrationWarning",
		"style"
	].forEach((e) => {
		u[e] = new l(e, t, !1, e, null, !1, !1);
	}), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(([e, t]) => {
		u[e] = new l(e, n, !1, t, null, !1, !1);
	}), [
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach((e) => {
		u[e] = new l(e, r, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach((e) => {
		u[e] = new l(e, r, !1, e, null, !1, !1);
	}), [
		"allowFullScreen",
		"async",
		"autoFocus",
		"autoPlay",
		"controls",
		"default",
		"defer",
		"disabled",
		"disablePictureInPicture",
		"disableRemotePlayback",
		"formNoValidate",
		"hidden",
		"loop",
		"noModule",
		"noValidate",
		"open",
		"playsInline",
		"readOnly",
		"required",
		"reversed",
		"scoped",
		"seamless",
		"itemScope"
	].forEach((e) => {
		u[e] = new l(e, i, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach((e) => {
		u[e] = new l(e, i, !0, e, null, !1, !1);
	}), ["capture", "download"].forEach((e) => {
		u[e] = new l(e, a, !1, e, null, !1, !1);
	}), [
		"cols",
		"rows",
		"size",
		"span"
	].forEach((e) => {
		u[e] = new l(e, s, !1, e, null, !1, !1);
	}), ["rowSpan", "start"].forEach((e) => {
		u[e] = new l(e, o, !1, e.toLowerCase(), null, !1, !1);
	});
	var d = /[\-\:]([a-z])/g, f = (e) => e[1].toUpperCase();
	(/* @__PURE__ */ "accent-height.alignment-baseline.arabic-form.baseline-shift.cap-height.clip-path.clip-rule.color-interpolation.color-interpolation-filters.color-profile.color-rendering.dominant-baseline.enable-background.fill-opacity.fill-rule.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.glyph-name.glyph-orientation-horizontal.glyph-orientation-vertical.horiz-adv-x.horiz-origin-x.image-rendering.letter-spacing.lighting-color.marker-end.marker-mid.marker-start.overline-position.overline-thickness.paint-order.panose-1.pointer-events.rendering-intent.shape-rendering.stop-color.stop-opacity.strikethrough-position.strikethrough-thickness.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.text-anchor.text-decoration.text-rendering.underline-position.underline-thickness.unicode-bidi.unicode-range.units-per-em.v-alphabetic.v-hanging.v-ideographic.v-mathematical.vector-effect.vert-adv-y.vert-origin-x.vert-origin-y.word-spacing.writing-mode.xmlns:xlink.x-height".split(".")).forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, null, !1, !1);
	}), [
		"xlink:actuate",
		"xlink:arcrole",
		"xlink:role",
		"xlink:show",
		"xlink:title",
		"xlink:type"
	].forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	}), [
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
	}), ["tabIndex", "crossOrigin"].forEach((e) => {
		u[e] = new l(e, n, !1, e.toLowerCase(), null, !1, !1);
	});
	var p = "xlinkHref";
	u[p] = new l("xlinkHref", n, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), [
		"src",
		"href",
		"action",
		"formAction"
	].forEach((e) => {
		u[e] = new l(e, n, !1, e.toLowerCase(), null, !0, !0);
	});
	var { CAMELCASE: m, SAME: h, possibleStandardNames: g } = Rl(), _ = RegExp.prototype.test.bind(/* @__PURE__ */ RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), v = Object.keys(g).reduce((e, t) => {
		let n = g[t];
		return n === h ? e[t] = t : n === m ? e[t.toLowerCase()] = t : e[t] = n, e;
	}, {});
	e.BOOLEAN = i, e.BOOLEANISH_STRING = r, e.NUMERIC = o, e.OVERLOADED_BOOLEAN = a, e.POSITIVE_NUMERIC = s, e.RESERVED = t, e.STRING = n, e.getPropertyInfo = c, e.isCustomAttribute = _, e.possibleStandardNames = v;
})), Bl = /* @__PURE__ */ o(((e) => {
	var n = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = o, e.setStyleProp = c;
	var r = t("react"), i = n(Xe()), a = new Set([
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-src",
		"font-face-uri",
		"font-face-format",
		"font-face-name",
		"missing-glyph"
	]);
	function o(e, t) {
		return e.includes("-") ? !a.has(e) : !!(t && typeof t.is == "string");
	}
	var s = { reactCompat: !0 };
	function c(e, t) {
		if (typeof e == "string") {
			if (!e.trim()) {
				t.style = {};
				return;
			}
			try {
				t.style = (0, i.default)(e, s);
			} catch {
				t.style = {};
			}
		}
	}
	e.PRESERVE_CUSTOM_ATTRIBUTES = Number(r.version.split(".")[0]) >= 16, e.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
		"tr",
		"tbody",
		"thead",
		"tfoot",
		"colgroup",
		"table",
		"head",
		"html",
		"frameset"
	]), e.canTextBeChildOfNode = (t) => !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(t.name), e.returnFirstArg = (e) => e;
})), Vl = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var t = zl(), n = Bl(), r = ["checked", "value"], i = [
		"input",
		"select",
		"textarea"
	], a = {
		reset: !0,
		submit: !0
	};
	function o(e = {}, o) {
		let c = {}, l = !!(e.type && a[e.type]);
		for (let a in e) {
			let u = e[a];
			if ((0, t.isCustomAttribute)(a)) {
				c[a] = u;
				continue;
			}
			let d = a.toLowerCase(), f = s(d);
			if (f) {
				let e = (0, t.getPropertyInfo)(f);
				switch (r.includes(f) && i.includes(o) && !l && (f = s("default" + d)), c[f] = u, e?.type) {
					case t.BOOLEAN:
						c[f] = !0;
						break;
					case t.OVERLOADED_BOOLEAN:
						u === "" && (c[f] = !0);
						break;
				}
				continue;
			}
			n.PRESERVE_CUSTOM_ATTRIBUTES && (c[a] = u);
		}
		return (0, n.setStyleProp)(e.style, c), c;
	}
	function s(e) {
		return t.possibleStandardNames[e];
	}
}));
//#endregion
//#region node_modules/domelementtype/dist/index.js
function Hl(e) {
	return e.type === Q.Tag || e.type === Q.Script || e.type === Q.Style;
}
var Q, Ul = n((() => {
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})(Q || (Q = {})), Q.Root, Q.Text, Q.Directive, Q.Comment, Q.Script, Q.Style, Q.Tag, Q.CDATA, Q.Doctype;
}));
//#endregion
//#region node_modules/domhandler/dist/node.js
function Wl(e) {
	return Hl(e);
}
function Gl(e) {
	return e.type === Q.CDATA;
}
function Kl(e) {
	return e.type === Q.Text;
}
function ql(e) {
	return e.type === Q.Comment;
}
function Jl(e) {
	return e.type === Q.Directive;
}
function Yl(e) {
	return e.type === Q.Root;
}
function Xl(e) {
	return Object.hasOwn(e, "children");
}
function Zl(e, t = !1) {
	let n;
	if (Kl(e)) n = new tu(e.data);
	else if (ql(e)) n = new nu(e.data);
	else if (Wl(e)) {
		let r = t ? Ql(e.children) : [], i = new su(e.name, { ...e.attribs }, r);
		for (let e of r) e.parent = i;
		e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), n = i;
	} else if (Gl(e)) {
		let r = t ? Ql(e.children) : [], i = new au(r);
		for (let e of r) e.parent = i;
		n = i;
	} else if (Yl(e)) {
		let r = t ? Ql(e.children) : [], i = new ou(r);
		for (let e of r) e.parent = i;
		e["x-mode"] && (i["x-mode"] = e["x-mode"]), n = i;
	} else if (Jl(e)) {
		let t = new ru(e.name, e.data);
		e["x-name"] != null && (t["x-name"] = e["x-name"], t["x-publicId"] = e["x-publicId"], t["x-systemId"] = e["x-systemId"]), n = t;
	} else throw Error(`Not implemented yet: ${e.type}`);
	return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
}
function Ql(e) {
	let t = e.map((e) => Zl(e, !0));
	for (let e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
	return t;
}
var $l, eu, tu, nu, ru, iu, au, ou, su, cu = n((() => {
	Ul(), M(), $l = class {
		constructor() {
			j(this, "parent", null), j(this, "prev", null), j(this, "next", null), j(this, "startIndex", null), j(this, "endIndex", null);
		}
		get parentNode() {
			return this.parent;
		}
		set parentNode(e) {
			this.parent = e;
		}
		get previousSibling() {
			return this.prev;
		}
		set previousSibling(e) {
			this.prev = e;
		}
		get nextSibling() {
			return this.next;
		}
		set nextSibling(e) {
			this.next = e;
		}
		cloneNode(e = !1) {
			return Zl(this, e);
		}
	}, eu = class extends $l {
		constructor(e) {
			super(), j(this, "data", void 0), this.data = e;
		}
		get nodeValue() {
			return this.data;
		}
		set nodeValue(e) {
			this.data = e;
		}
	}, tu = class extends eu {
		constructor(...e) {
			super(...e), j(this, "type", Q.Text);
		}
		get nodeType() {
			return 3;
		}
	}, nu = class extends eu {
		constructor(...e) {
			super(...e), j(this, "type", Q.Comment);
		}
		get nodeType() {
			return 8;
		}
	}, ru = class extends eu {
		constructor(e, t) {
			super(t), j(this, "type", Q.Directive), j(this, "name", void 0), j(this, "x-name", void 0), j(this, "x-publicId", void 0), j(this, "x-systemId", void 0), this.name = e;
		}
		get nodeType() {
			return 1;
		}
	}, iu = class extends $l {
		constructor(e) {
			super(), j(this, "children", void 0), this.children = e;
		}
		get firstChild() {
			return this.children[0] ?? null;
		}
		get lastChild() {
			return this.children.length > 0 ? this.children[this.children.length - 1] : null;
		}
		get childNodes() {
			return this.children;
		}
		set childNodes(e) {
			this.children = e;
		}
	}, au = class extends iu {
		constructor(...e) {
			super(...e), j(this, "type", Q.CDATA);
		}
		get nodeType() {
			return 4;
		}
	}, ou = class extends iu {
		constructor(...e) {
			super(...e), j(this, "type", Q.Root);
		}
		get nodeType() {
			return 9;
		}
	}, su = class extends iu {
		constructor(e, t, n = [], r = e === "script" ? Q.Script : e === "style" ? Q.Style : Q.Tag) {
			super(n), j(this, "name", void 0), j(this, "attribs", void 0), j(this, "type", void 0), j(this, "namespace", void 0), j(this, "x-attribsNamespace", void 0), j(this, "x-attribsPrefix", void 0), this.name = e, this.attribs = t, this.type = r;
		}
		get nodeType() {
			return 1;
		}
		get tagName() {
			return this.name;
		}
		set tagName(e) {
			this.name = e;
		}
		get attributes() {
			return Object.keys(this.attribs).map((e) => ({
				name: e,
				value: this.attribs[e],
				namespace: this["x-attribsNamespace"]?.[e],
				prefix: this["x-attribsPrefix"]?.[e]
			}));
		}
	};
})), lu = /* @__PURE__ */ a({
	CDATA: () => au,
	Comment: () => nu,
	DataNode: () => eu,
	Document: () => ou,
	DomHandler: () => du,
	Element: () => su,
	Node: () => $l,
	NodeWithChildren: () => iu,
	ProcessingInstruction: () => ru,
	Text: () => tu,
	cloneNode: () => Zl,
	default: () => du,
	hasChildren: () => Xl,
	isCDATA: () => Gl,
	isComment: () => ql,
	isDirective: () => Jl,
	isDocument: () => Yl,
	isTag: () => Wl,
	isText: () => Kl
}), uu, du, fu = n((() => {
	Ul(), cu(), M(), cu(), uu = {
		withStartIndices: !1,
		withEndIndices: !1,
		xmlMode: !1
	}, du = class {
		constructor(e, t, n) {
			j(this, "dom", []), j(this, "root", new ou(this.dom)), j(this, "callback", void 0), j(this, "options", void 0), j(this, "elementCB", void 0), j(this, "done", !1), j(this, "tagStack", [this.root]), j(this, "lastNode", null), j(this, "parser", null), typeof t == "function" && (n = t, t = uu), typeof e == "object" && (t = e, e = void 0), this.callback = e ?? null, this.options = t ?? uu, this.elementCB = n ?? null;
		}
		onparserinit(e) {
			this.parser = e;
		}
		onreset() {
			this.dom = [], this.root = new ou(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
		}
		onend() {
			this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
		}
		onerror(e) {
			this.handleCallback(e);
		}
		onclosetag() {
			this.lastNode = null;
			let e = this.tagStack.pop();
			this.options.withEndIndices && this.parser && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e);
		}
		onopentag(e, t) {
			let n = new su(e, t, void 0, this.options.xmlMode ? Q.Tag : void 0);
			this.addNode(n), this.tagStack.push(n);
		}
		ontext(e) {
			let { lastNode: t } = this;
			if (t && t.type === Q.Text) t.data += e, this.options.withEndIndices && this.parser && (t.endIndex = this.parser.endIndex);
			else {
				let t = new tu(e);
				this.addNode(t), this.lastNode = t;
			}
		}
		oncomment(e) {
			if (this.lastNode && this.lastNode.type === Q.Comment) {
				this.lastNode.data += e;
				return;
			}
			let t = new nu(e);
			this.addNode(t), this.lastNode = t;
		}
		oncommentend() {
			this.lastNode = null;
		}
		oncdatastart() {
			let e = new tu(""), t = new au([e]);
			this.addNode(t), e.parent = t, this.lastNode = e;
		}
		oncdataend() {
			this.lastNode = null;
		}
		onprocessinginstruction(e, t) {
			let n = new ru(e, t);
			this.addNode(n);
		}
		handleCallback(e) {
			if (typeof this.callback == "function") this.callback(e, this.dom);
			else if (e) throw e;
		}
		addNode(e) {
			let t = this.tagStack[this.tagStack.length - 1], n = t.children[t.children.length - 1];
			this.options.withStartIndices && this.parser && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && this.parser && (e.endIndex = this.parser.endIndex), t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null;
		}
	};
})), pu = /* @__PURE__ */ o(((n) => {
	var r = n && n.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(n, "__esModule", { value: !0 }), n.default = l;
	var i = (fu(), e(lu)), a = t("react"), o = r(Vl()), s = Bl(), c = {
		cloneElement: a.cloneElement,
		createElement: a.createElement,
		isValidElement: a.isValidElement
	};
	function l(e, t = {}) {
		let n = [], r = typeof t.replace == "function", i = t.transform ?? s.returnFirstArg, { cloneElement: a, createElement: f, isValidElement: p } = t.library ?? c, m = e.length;
		u(e);
		for (let c = 0; c < m; c++) {
			let u = e[c];
			if (r) {
				let e = t.replace?.call(t, u, c);
				if (p(e)) {
					m > 1 && (e = a(e, { key: e.key ?? c })), n.push(i(e, u, c));
					continue;
				}
			}
			if (u.type === "text") {
				let e = !u.data.trim().length;
				if (e && u.parent && !(0, s.canTextBeChildOfNode)(u.parent) || t.trim && e) continue;
				n.push(i(u.data, u, c));
				continue;
			}
			let h = u, g = {};
			d(h) ? ((0, s.setStyleProp)(h.attribs.style, h.attribs), g = h.attribs) : h.attribs && (g = (0, o.default)(h.attribs, h.name));
			let _;
			switch (u.type) {
				case "script":
				case "style":
					u.children[0] && (g.dangerouslySetInnerHTML = { __html: u.children[0].data });
					break;
				case "tag":
					u.name === "textarea" && u.children[0] ? g.defaultValue = u.children[0].data : u.children?.length && (_ = l(u.children, t));
					break;
				default: continue;
			}
			m > 1 && (g.key = c), n.push(i(f(u.name, g, _), u, c));
		}
		return n.length === 1 ? n[0] : n;
	}
	function u(e) {
		for (let t of e) (t.type === "tag" || t.type === "script" || t.type === "style") && (Object.setPrototypeOf(t, i.Element.prototype), u(t.children));
	}
	function d(e) {
		return s.PRESERVE_CUSTOM_ATTRIBUTES && e.type === "tag" && (0, s.isCustomComponent)(e.name, e.attribs);
	}
})), $ = /* @__PURE__ */ i((/* @__PURE__ */ o(((t) => {
	var n = t && t.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(t, "__esModule", { value: !0 }), t.htmlToDOM = t.domToReact = t.attributesToProps = t.Text = t.ProcessingInstruction = t.Element = t.Comment = void 0, t.default = s;
	var r = n(Ll());
	t.htmlToDOM = r.default, t.attributesToProps = n(Vl()).default;
	var i = n(pu());
	t.domToReact = i.default;
	var a = (fu(), e(lu));
	Object.defineProperty(t, "Comment", {
		enumerable: !0,
		get: function() {
			return a.Comment;
		}
	}), Object.defineProperty(t, "Element", {
		enumerable: !0,
		get: function() {
			return a.Element;
		}
	}), Object.defineProperty(t, "ProcessingInstruction", {
		enumerable: !0,
		get: function() {
			return a.ProcessingInstruction;
		}
	}), Object.defineProperty(t, "Text", {
		enumerable: !0,
		get: function() {
			return a.Text;
		}
	});
	var o = { lowerCaseAttributeNames: !1 };
	function s(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		let n = Object.assign(Object.assign({}, t?.htmlparser2 ?? o), { trustedTypePolicy: t?.trustedTypePolicy });
		return (0, i.default)((0, r.default)(e, n), t);
	}
})))(), 1), mu = $.default.default || $.default;
//#endregion
//#region components/widget/article-html/blocks/table-of-contents.tsx
function hu({ entries: e }) {
	let t = h("article"), [n, r] = C(!1), i = (e, t) => {
		e.preventDefault();
		let n = e.currentTarget.getRootNode(), r = n instanceof ShadowRoot || n instanceof Document ? n : document, i = "querySelector" in r ? r.querySelector(`[id="${CSS.escape(t)}"]`) : null;
		if (!i) return;
		let a = i.closest("[data-slot='scroll-area-viewport']");
		if (!a) {
			let e = i.parentElement;
			for (; e;) {
				let t = getComputedStyle(e);
				if (/(auto|scroll|overlay)/.test(t.overflowY)) {
					a = e;
					break;
				}
				e = e.parentElement;
			}
		}
		if (a) {
			let e = i.getBoundingClientRect(), t = a.getBoundingClientRect();
			a.scrollTo({
				top: a.scrollTop + e.top - t.top - 16,
				behavior: "smooth"
			});
		} else i.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ E("nav", {
		"aria-label": t("tableOfContents"),
		className: g("wx-toc mt-0 overflow-hidden rounded-xl border border-wx-border bg-wx-bg", "[&_a]:no-underline [&_a]:text-inherit [&_a:hover]:opacity-100", "[&_ul]:m-0 [&_ul]:list-none [&_ul]:p-0", "[&_li]:m-0"),
		children: [/* @__PURE__ */ E("button", {
			type: "button",
			onClick: () => r((e) => !e),
			"aria-expanded": n,
			className: g("flex w-full items-center justify-between gap-3 px-4 py-3", "text-left text-sm font-medium text-wx-fg", "transition-colors hover:bg-wx-bg-elevated/40"),
			children: [/* @__PURE__ */ T("span", { children: t("tableOfContents") }), /* @__PURE__ */ T(m, {
				className: g("h-4 w-4 shrink-0 text-wx-fg-subtle transition-transform duration-200", n && "rotate-180"),
				"aria-hidden": "true"
			})]
		}), /* @__PURE__ */ T("div", {
			className: g("grid transition-[grid-template-rows] duration-200 ease-out", n ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
			"aria-hidden": !n,
			children: /* @__PURE__ */ T("div", {
				className: "min-h-0 overflow-hidden",
				children: /* @__PURE__ */ T("div", {
					className: "border-t border-wx-border/70 px-2 py-2",
					children: /* @__PURE__ */ T("div", {
						className: "flex flex-col",
						children: e.map((e) => {
							let t = e.level === 2 ? 16 : e.level === 3 ? 32 : 0;
							return /* @__PURE__ */ T("button", {
								type: "button",
								onClick: (t) => i(t, e.id),
								className: g("flex h-8 items-center truncate rounded-md pr-2 text-left text-sm text-wx-fg", "transition-colors hover:bg-wx-bg-elevated/50"),
								style: { paddingLeft: 12 + t },
								children: /* @__PURE__ */ T("span", {
									className: "truncate",
									children: e.text
								})
							}, e.id);
						})
					})
				})
			})
		})]
	});
}
//#endregion
//#region components/widget/article-html/blocks/accordion-block.tsx
function gu({ summary: e, body: t, defaultOpen: n }) {
	let [r, i] = C(n);
	return /* @__PURE__ */ E("div", {
		className: "my-2 overflow-hidden rounded-lg border border-wx-border",
		children: [/* @__PURE__ */ E("button", {
			type: "button",
			onClick: () => i((e) => !e),
			"aria-expanded": r,
			className: g("flex w-full items-center justify-between gap-3 px-4 py-3", "text-left text-sm font-semibold text-wx-fg", "transition-colors hover:bg-wx-bg-elevated/50", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary/30"),
			children: [/* @__PURE__ */ T("span", {
				className: "min-w-0 flex-1",
				children: e
			}), /* @__PURE__ */ T(m, {
				className: g("h-4 w-4 shrink-0 text-wx-fg-subtle transition-transform", r && "rotate-180"),
				"aria-hidden": "true"
			})]
		}), r && /* @__PURE__ */ T("div", {
			className: "border-t border-wx-border px-4 py-3 text-sm leading-relaxed text-wx-fg [&>:first-child]:mt-0 [&>:last-child]:mb-0",
			children: t
		})]
	});
}
//#endregion
//#region components/widget/article-html/build-options/accordion.tsx
var _u = (e, t) => {
	let n = e.name === "details", r = e.name === "div" && e.attribs?.["data-type"] === "details";
	if (!n && !r) return;
	let i = r ? (e.children ?? []).flatMap((e) => e instanceof $.Element && e.name === "div" && !e.attribs?.["data-type"] ? e.children ?? [] : [e]) : e.children ?? [], a = i.find((e) => e instanceof $.Element && e.name === "summary"), o = i.filter((e) => e !== a && !(e instanceof $.Element && e.name === "button")), s = o.find((e) => e instanceof $.Element && e.name === "div" && (e.attribs?.["data-type"] === "detailsContent" || e.attribs?.["data-type"] === "details-content")), c = s ? s.children ?? [] : o, l = a ? (0, $.domToReact)(a.children, t.options) : null, u = /* @__PURE__ */ T(w, { children: (0, $.domToReact)(c, t.options) });
	return /* @__PURE__ */ T(gu, {
		defaultOpen: e.attribs?.open !== void 0 || e.attribs?.["data-open"] === "true",
		summary: l,
		body: u
	});
}, vu = {
	card: "border-wx-border bg-wx-bg-elevated/60",
	callout: "border-wx-primary/30 bg-wx-primary/5",
	note: "border-wx-border bg-wx-bg-elevated/60",
	tip: "border-wx-success/30 bg-wx-success/5",
	warning: "border-wx-warning/30 bg-wx-warning/5",
	danger: "border-wx-danger/30 bg-wx-danger/5"
}, yu = (e, t) => {
	let n = vu[e.name];
	if (n) return /* @__PURE__ */ T("div", {
		className: `my-4 rounded-wx-md border px-4 py-3 ${n}`,
		"data-custom-block": e.name,
		children: (0, $.domToReact)(e.children ?? [], t.options)
	});
};
//#endregion
//#region lib/article-toc.ts
function bu(e, t) {
	let n = e.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "section", r = n, i = 2;
	for (; t.has(r);) r = `${n}-${i}`, i += 1;
	return t.add(r), r;
}
//#endregion
//#region components/widget/article-html/extract-text.ts
function xu(e) {
	let t = "";
	for (let n of e.children ?? []) n.type === "text" ? t += n.data ?? "" : n instanceof $.Element && (t += xu(n));
	return t;
}
//#endregion
//#region components/widget/article-html/build-options/heading.ts
var Su = (e, t) => {
	if (e.name !== "h1" && e.name !== "h2" && e.name !== "h3") return;
	let n = Number(e.name.slice(1)), r = xu(e).trim();
	if (!r) return;
	let i = bu(r, t.seenIds);
	return t.entries.push({
		id: i,
		text: r,
		level: n
	}), v(e.name, { id: i }, (0, $.domToReact)(e.children ?? [], t.options));
}, Cu = (e, t) => {
	if (e.name !== "img") return;
	let n = e.attribs ?? {}, r = n["data-align"] ?? "center", i = n.width || n.style?.match(/width:\s*([^;]+)/i)?.[1], a = r === "left" ? "0" : "auto", o = r === "right" ? "0" : "auto", s = n.src ?? "", c = n.alt ?? "", l = {
		...i ? { width: i } : {},
		marginLeft: a,
		marginRight: o,
		display: "block"
	};
	if (t.images && t.onImageClick) {
		let e = t.images.length;
		t.images.push({
			url: s,
			mimetype: "image/jpeg",
			alt: c
		});
		let n = t.onImageClick;
		return /* @__PURE__ */ T("button", {
			type: "button",
			onClick: () => n(e),
			className: "my-3 block w-full cursor-zoom-in border-0 bg-transparent p-0",
			"aria-label": c || "Open image",
			children: /* @__PURE__ */ T("img", {
				src: s,
				alt: c,
				style: l,
				className: "max-w-full"
			})
		});
	}
	return /* @__PURE__ */ T("img", {
		src: s,
		alt: c,
		style: l,
		className: "my-3 max-w-full"
	});
}, wu = (e, t) => {
	if (e.name === "a") return /* @__PURE__ */ T("a", {
		href: e.attribs?.href ?? "",
		target: "_blank",
		rel: "noopener noreferrer",
		className: "text-wx-primary underline underline-offset-2 transition-opacity hover:opacity-70",
		children: (0, $.domToReact)(e.children ?? [], t.options)
	});
}, Tu = (e, t) => {
	if (e.name === "table") return /* @__PURE__ */ T("div", {
		className: g("my-3 overflow-x-auto", "[scrollbar-width:thin] [scrollbar-color:var(--color-wx-fg-subtle)_transparent]", "[&::-webkit-scrollbar]:h-2", "[&::-webkit-scrollbar-track]:bg-transparent", "[&::-webkit-scrollbar-thumb]:rounded-full", "[&::-webkit-scrollbar-thumb]:bg-wx-fg-subtle/40", "[&::-webkit-scrollbar-thumb:hover]:bg-wx-fg-subtle/60"),
		children: /* @__PURE__ */ T("table", { children: (0, $.domToReact)(e.children ?? [], t.options) })
	});
};
//#endregion
//#region components/widget/article-html/blocks/tabs-block.tsx
function Eu({ tabs: e }) {
	let t = h("article"), [n, r] = C(0);
	return e.length === 0 ? null : /* @__PURE__ */ E("div", {
		className: "my-4",
		children: [/* @__PURE__ */ T("div", {
			role: "tablist",
			className: "relative flex items-center gap-1 border-b border-wx-border",
			children: e.map((e, i) => {
				let a = i === n, o = e.label || t("tabFallback", { n: i + 1 });
				return /* @__PURE__ */ E("button", {
					type: "button",
					role: "tab",
					"aria-selected": a,
					tabIndex: a ? 0 : -1,
					onClick: () => r(i),
					className: g("group relative inline-flex items-center justify-center px-3 py-2 text-sm", "transition-colors focus-visible:outline-none", a ? "font-semibold text-wx-fg" : "font-medium text-wx-fg-muted hover:text-wx-fg"),
					children: [o, /* @__PURE__ */ T("span", {
						"aria-hidden": "true",
						className: g("pointer-events-none absolute inset-x-2 bottom-0 h-[2px] origin-left rounded-full bg-wx-primary", "transition-transform duration-200 ease-out", a ? "scale-x-100" : "scale-x-0")
					})]
				}, i);
			})
		}), /* @__PURE__ */ T("div", {
			className: "mt-3 text-sm leading-relaxed text-wx-fg [&>:first-child]:mt-0 [&>:last-child]:mb-0",
			children: e[n]?.body
		})]
	});
}
//#endregion
//#region components/widget/article-html/build-options.ts
var Du = [
	Su,
	(e, t) => {
		if (e.name === "div" && (e.attribs?.["data-type"] === "tabs" || e.attribs?.["data-type"] === "tabs")) return /* @__PURE__ */ T(Eu, { tabs: (e.children ?? []).filter((e) => e instanceof $.Element && e.name === "div" && e.attribs?.["data-type"] === "tab").map((e) => {
			let n = e.children?.find((e) => e instanceof $.Element && e.name === "div" && "data-tab-label" in (e.attribs ?? {})), r = (e.children ?? []).filter((e) => e !== n);
			return {
				label: n ? xu(n).trim() : "",
				body: /* @__PURE__ */ T(w, { children: (0, $.domToReact)(r, t.options) })
			};
		}) });
	},
	_u,
	yu,
	Tu,
	Cu,
	wu
];
function Ou(e, t, n, r) {
	let i = {}, a = {
		options: i,
		entries: e,
		seenIds: t,
		images: n,
		onImageClick: r
	};
	return i.replace = (e) => {
		if (e instanceof $.Element) for (let t of Du) {
			let n = t(e, a);
			if (n !== void 0) return n;
		}
	}, i;
}
//#endregion
//#region components/widget/article-html/index.tsx
function ku({ html: e, className: t }) {
	let [n, r] = C(null), { parsed: i, entries: a, images: o } = x(() => {
		let t = [], n = /* @__PURE__ */ new Set(), i = [];
		return {
			parsed: mu(e, Ou(t, n, i, r)),
			entries: t,
			images: i
		};
	}, [e]);
	return /* @__PURE__ */ E("div", {
		className: t,
		children: [
			a.length >= 3 && /* @__PURE__ */ T(hu, { entries: a }),
			i,
			o.length > 0 && /* @__PURE__ */ T(p, {
				items: o,
				initialIndex: n ?? 0,
				open: n !== null,
				onClose: () => r(null)
			})
		]
	});
}
//#endregion
//#region components/widget/article-body.tsx
function Au({ content: e, isHtml: t, markdownMarginClass: n }) {
	return t ? /* @__PURE__ */ T(ku, {
		html: e,
		className: `mt-0 ${Il}`
	}) : /* @__PURE__ */ T("div", {
		className: `${n} ${Il}`,
		children: /* @__PURE__ */ T(jo, {
			remarkPlugins: [Fl],
			children: e
		})
	});
}
//#endregion
//#region components/widget/language-selector/helpers.ts
function ju(e) {
	let t = e.split("-")[0];
	try {
		let n = new Intl.DisplayNames([e], { type: "language" }).of(t);
		if (n && n.toLowerCase() !== t.toLowerCase()) return n.charAt(0).toUpperCase() + n.slice(1);
	} catch {}
	return t.toUpperCase();
}
//#endregion
//#region components/widget/language-selector/index.tsx
function Mu({ currentLocale: e, locales: t, onSelect: n, className: i }) {
	let a = h("languageSelector"), [o, c] = C(!1), l = S(null);
	b(() => {
		if (!o) return;
		let e = (e) => {
			l.current && !l.current.contains(e.target) && c(!1);
		}, t = (e) => {
			e.key === "Escape" && c(!1);
		};
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, [o]);
	let u = Array.from(new Set(t.filter(Boolean)));
	if (u.length <= 1) return null;
	let f = e.split("-")[0].toLowerCase();
	return /* @__PURE__ */ E("div", {
		ref: l,
		className: g("relative", i),
		children: [
			/* @__PURE__ */ T("p", {
				className: "mb-1.5 text-xs font-semibold tracking-wide text-wx-fg-muted uppercase",
				children: a("title")
			}),
			/* @__PURE__ */ E("button", {
				type: "button",
				onClick: () => c((e) => !e),
				"aria-haspopup": "listbox",
				"aria-expanded": o,
				"aria-label": a("ariaLabel"),
				className: g("flex w-full items-center gap-2 rounded-wx-sm border border-wx-border bg-wx-bg px-3 py-2", "text-sm font-medium text-wx-fg transition-colors hover:bg-wx-bg-elevated", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary"),
				children: [
					/* @__PURE__ */ T(N, {
						size: 15,
						className: "shrink-0 text-wx-fg-muted"
					}),
					/* @__PURE__ */ T("span", {
						className: "min-w-0 flex-1 truncate text-left",
						children: ju(e)
					}),
					/* @__PURE__ */ T(m, {
						size: 15,
						className: g("shrink-0 text-wx-fg-subtle transition-transform", o && "rotate-180")
					})
				]
			}),
			/* @__PURE__ */ T(s, { children: o && /* @__PURE__ */ T(r.ul, {
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
				transition: { duration: .14 },
				className: g("absolute bottom-full left-0 z-20 mb-1 max-h-56 w-full overflow-auto", "rounded-wx-sm border border-wx-border bg-wx-bg py-1 shadow-[0_12px_32px_rgba(0,0,0,0.16)]"),
				role: "listbox",
				children: u.map((e) => {
					let t = e.split("-")[0].toLowerCase() === f;
					return /* @__PURE__ */ T("li", { children: /* @__PURE__ */ E("button", {
						type: "button",
						role: "option",
						"aria-selected": t,
						onClick: () => {
							n(e), c(!1);
						},
						className: g("flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors", t ? "font-semibold text-wx-primary" : "text-wx-fg hover:bg-wx-bg-elevated"),
						children: [/* @__PURE__ */ T("span", {
							className: "min-w-0 flex-1 truncate",
							children: ju(e)
						}), t && /* @__PURE__ */ T(d, {
							size: 15,
							className: "shrink-0 text-wx-primary"
						})]
					}) }, e);
				})
			}) })
		]
	});
}
//#endregion
//#region lib/graphql/queries/generated/reactions.generated.tsx
var Nu = {}, Pu = l`
    query VisitorReactionSet($surface: ReactionSurface!) {
  visitorReactionSet(surface: $surface) {
    _id
    surface
    enabled
    slots {
      slotIndex
      emoji
      sentiment
    }
  }
}
    `;
function Fu(e) {
	return c(Pu, {
		...Nu,
		...e
	});
}
var Iu = l`
    mutation SubmitVisitorReaction($input: VisitorReactionInput!) {
  submitVisitorReaction(input: $input) {
    ok
  }
}
    `;
function Lu(e) {
	return f(Iu, {
		...Nu,
		...e
	});
}
//#endregion
//#region components/widget/reaction-bar.tsx
var Ru = (e, t) => `wexio:reaction:${e}:${t}`, zu = [
	{
		slotIndex: 0,
		emoji: "🎉"
	},
	{
		slotIndex: 1,
		emoji: "❤️"
	},
	{
		slotIndex: 2,
		emoji: "👍"
	}
], Bu = {
	[P.NEWS]: "NewsPost",
	[P.HELP]: "HelpArticle"
};
function Vu({ surface: e, itemId: t, reactionCounts: n, viewerReaction: i, groupItemIds: a, readonly: o = !1, showCounts: s = !0, isDummy: c = !1, className: l }) {
	let d = h("reactions"), f = u(), { data: p, loading: m } = Fu({
		variables: { surface: e },
		fetchPolicy: "cache-first",
		skip: c
	}), [_, { loading: v }] = Lu(), S = x(() => c ? zu : p?.visitorReactionSet?.slots ?? [], [c, p]), w = c ? !0 : p?.visitorReactionSet?.enabled ?? !0, D = Ru(e, t), [O, k] = C(null);
	b(() => {
		if (!c) {
			k(i ?? null);
			return;
		}
		if (typeof window > "u") return;
		let e = window.localStorage.getItem(D);
		k(e === null ? null : Number(e));
	}, [
		c,
		D,
		i
	]);
	let [ee, te] = C({}), A = (e) => (n?.[String(e)] ?? 0) + (c ? ee[e] ?? 0 : 0), j = y((n, r) => {
		let i = Bu[e], o = a?.length ? a : [t];
		for (let e of o) {
			let t = f.cache.identify({
				__typename: i,
				_id: e
			});
			t && f.cache.modify({
				id: t,
				fields: {
					viewerReaction: () => r,
					reactionCounts: (e) => {
						let t = { ...e ?? {} };
						return r !== null && (t[r] = (t[r] ?? 0) + 1), n !== null && (t[n] = Math.max(0, (t[n] ?? 0) - 1)), t;
					}
				}
			});
		}
	}, [
		f,
		e,
		a,
		t
	]), M = async (n) => {
		if (o || v || O === n) return;
		let r = O;
		if (k(n), c) {
			typeof window < "u" && window.localStorage.setItem(D, String(n)), te((e) => ({
				...e,
				[n]: (e[n] ?? 0) + 1,
				...r === null ? {} : { [r]: (e[r] ?? 0) - 1 }
			}));
			return;
		}
		j(r, n);
		try {
			await _({ variables: { input: {
				surface: e,
				itemId: t,
				slotIndex: n
			} } });
		} catch {
			j(n, r), k(r);
		}
	};
	return m || !w || S.length === 0 ? null : /* @__PURE__ */ T("div", {
		className: g("flex flex-wrap items-center justify-center gap-2", l),
		role: "group",
		"aria-label": d("ariaLabel"),
		children: S.map((e) => {
			let t = O === e.slotIndex, n = A(e.slotIndex);
			return /* @__PURE__ */ E(r.button, {
				type: "button",
				disabled: o || v,
				onClick: () => void M(e.slotIndex),
				whileTap: { scale: .9 },
				whileHover: { scale: 1.06 },
				transition: {
					type: "spring",
					stiffness: 400,
					damping: 18
				},
				className: g("flex items-center gap-1.5 rounded-full px-3 py-1.5 text-2xl leading-none transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wx-primary", t ? "bg-wx-primary/10 ring-1 ring-wx-primary/40" : "hover:bg-wx-bg-elevated", o && "cursor-default opacity-70"),
				"aria-pressed": t,
				"aria-label": d("tapAria", { emoji: e.emoji }),
				children: [/* @__PURE__ */ T("span", {
					"aria-hidden": "true",
					children: e.emoji
				}), s && n > 0 && /* @__PURE__ */ T("span", {
					className: "text-xs font-medium text-wx-fg-muted",
					children: n
				})]
			}, e.slotIndex);
		})
	});
}
//#endregion
export { ce as a, P as c, ae as i, ne as l, Mu as n, ie as o, Au as r, re as s, Vu as t };

//# sourceMappingURL=widget-react-CDPzwV1i.js.map