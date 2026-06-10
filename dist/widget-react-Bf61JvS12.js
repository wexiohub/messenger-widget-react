import "react";
import "react-dom";
import "react/jsx-runtime";
import "react-dom/client";
import { d as e, l as t, o as n, s as r } from "./widget-react-DE7AVrCo.js";
import { i, n as a, t as o } from "./widget-react-BxvW64LH.js";
import { t as s } from "./widget-react-Dew7YaLU.js";
import { t as c } from "./widget-react-D8TPnM9r.js";
import { t as l } from "./widget-react-Cr4nQesv2.js";
import { useEffect as u, useRef as d, useState as f } from "react";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
var g = o("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]);
//#endregion
//#region node_modules/wavesurfer.js/dist/plugins/record.esm.js
function _(e, t, n, r) {
	return new (n || (n = Promise))((function(i, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			var t;
			e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
				e(t);
			}))).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	}));
}
var v = class {
	constructor() {
		this.listeners = {};
	}
	on(e, t, n) {
		if (this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set()), n?.once) {
			let n = (...r) => {
				this.un(e, n), t(...r);
			};
			return this.listeners[e].add(n), () => this.un(e, n);
		}
		return this.listeners[e].add(t), () => this.un(e, t);
	}
	un(e, t) {
		var n;
		(n = this.listeners[e]) == null || n.delete(t);
	}
	once(e, t) {
		return this.on(e, t, { once: !0 });
	}
	unAll() {
		this.listeners = {};
	}
	emit(e, ...t) {
		this.listeners[e] && this.listeners[e].forEach(((e) => e(...t)));
	}
}, y = class extends v {
	constructor(e) {
		super(), this.subscriptions = [], this.isDestroyed = !1, this.options = e;
	}
	onInit() {}
	_init(e) {
		this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = e, this.onInit();
	}
	destroy() {
		this.emit("destroy"), this.subscriptions.forEach(((e) => e())), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
	}
}, b = class extends v {
	constructor() {
		super(...arguments), this.animationFrameId = null, this.isRunning = !1;
	}
	start() {
		if (this.isRunning) return;
		this.isRunning = !0;
		let e = () => {
			this.isRunning && (this.emit("tick"), this.animationFrameId = requestAnimationFrame(e));
		};
		e();
	}
	stop() {
		this.isRunning = !1, this.animationFrameId !== null && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
	}
	destroy() {
		this.stop();
	}
}, x = 100, S = [
	"audio/webm",
	"audio/wav",
	"audio/mpeg",
	"audio/mp4",
	"audio/mp3"
], C = class e extends y {
	constructor(e) {
		var t, n, r;
		super(Object.assign(Object.assign({}, e), {
			audioBitsPerSecond: e.audioBitsPerSecond ?? 128e3,
			scrollingWaveform: (t = e.scrollingWaveform) != null && t,
			scrollingWaveformWindow: e.scrollingWaveformWindow ?? 5,
			continuousWaveform: (n = e.continuousWaveform) != null && n,
			renderRecordedAudio: (r = e.renderRecordedAudio) == null || r,
			mediaRecorderTimeslice: e.mediaRecorderTimeslice ?? void 0
		})), this.stream = null, this.mediaRecorder = null, this.dataWindow = null, this.isWaveformPaused = !1, this.lastStartTime = 0, this.lastDuration = 0, this.duration = 0, this.micStream = null, this.recordedBlobUrl = null, this.timer = new b(), this.subscriptions.push(this.timer.on("tick", (() => {
			let e = performance.now() - this.lastStartTime;
			this.duration = this.isPaused() ? this.duration : this.lastDuration + e, this.emit("record-progress", this.duration);
		})));
	}
	static create(t) {
		return new e(t || {});
	}
	renderMicStream(e) {
		let t = new AudioContext(), n = t.createMediaStreamSource(e), r = t.createAnalyser();
		n.connect(r), (this.options.continuousWaveform || this.options.scrollingWaveform) && (r.fftSize = 32);
		let i = r.frequencyBinCount, a = new Float32Array(i), o = 0;
		this.wavesurfer && (this.originalOptions ?? (this.originalOptions = Object.assign({}, this.wavesurfer.options)), this.wavesurfer.options.interact = !1, this.options.scrollingWaveform && (this.wavesurfer.options.cursorWidth = 0, this.wavesurfer.options.normalize = !0, this.wavesurfer.options.maxPeak = 1));
		let s = setInterval((() => {
			if (!this.isWaveformPaused) {
				if (r.getFloatTimeDomainData(a), this.options.scrollingWaveform) {
					let e = Math.floor((this.options.scrollingWaveformWindow || 0) * x), t = 0;
					for (let e = 0; e < i; e++) {
						let n = Math.abs(a[e]);
						n > t && (t = n);
					}
					this.dataWindow || (this.dataWindow = new Float32Array(e));
					let n = new Float32Array(e);
					if (this.dataWindow && this.dataWindow.length > 0) {
						let t = e - 1, r = this.dataWindow.slice(-t);
						n.set(r, 0);
					}
					n[e - 1] = t, this.dataWindow = n;
				} else if (this.options.continuousWaveform) {
					if (!this.dataWindow) {
						let e = this.options.continuousWaveformDuration ? Math.round(this.options.continuousWaveformDuration * x) : (this.wavesurfer?.getWidth() ?? 0) * window.devicePixelRatio;
						this.dataWindow = new Float32Array(e);
					}
					let e = 0;
					for (let t = 0; t < i; t++) {
						let n = Math.abs(a[t]);
						n > e && (e = n);
					}
					if (o + 1 > this.dataWindow.length) {
						let e = new Float32Array(2 * this.dataWindow.length);
						e.set(this.dataWindow, 0), this.dataWindow = e;
					}
					this.dataWindow[o] = e, o++;
				} else this.dataWindow = a;
				if (this.wavesurfer) {
					let e = (this.dataWindow?.length ?? 0) / x;
					this.wavesurfer.load("", [this.dataWindow], this.options.scrollingWaveform ? this.options.scrollingWaveformWindow : e).then((() => {
						this.wavesurfer && this.options.continuousWaveform && (this.wavesurfer.setTime(this.getDuration() / 1e3), this.wavesurfer.options.minPxPerSec || this.wavesurfer.setOptions({ minPxPerSec: this.wavesurfer.getWidth() / this.wavesurfer.getDuration() }));
					})).catch(((e) => {
						console.error("Error rendering real-time recording data:", e);
					}));
				}
			}
		}), 10);
		return {
			onDestroy: () => {
				clearInterval(s), n?.disconnect(), t?.close();
			},
			onEnd: () => {
				this.isWaveformPaused = !0, this.stopMic();
			}
		};
	}
	startMic(e) {
		return _(this, void 0, void 0, (function* () {
			let t;
			this.micStream && this.stopMic();
			try {
				t = yield navigator.mediaDevices.getUserMedia({ audio: e == null || e });
			} catch (e) {
				throw Error("Error accessing the microphone: " + e.message);
			}
			let n = this.renderMicStream(t);
			return this.micStream = n, this.unsubscribeDestroy = this.once("destroy", n.onDestroy), this.unsubscribeRecordEnd = this.once("record-end", n.onEnd), this.stream = t, t;
		}));
	}
	stopMic() {
		var e, t, n;
		(e = this.micStream) == null || e.onDestroy(), (t = this.unsubscribeDestroy) == null || t.call(this), (n = this.unsubscribeRecordEnd) == null || n.call(this), this.micStream = null, this.unsubscribeDestroy = void 0, this.unsubscribeRecordEnd = void 0, this.stream && (this.stream.getTracks().forEach(((e) => e.stop())), this.stream = null, this.mediaRecorder = null);
	}
	startRecording(e) {
		return _(this, void 0, void 0, (function* () {
			let t = this.stream || (yield this.startMic(e));
			this.dataWindow = null;
			let n = this.mediaRecorder || new MediaRecorder(t, {
				mimeType: this.options.mimeType || S.find(((e) => MediaRecorder.isTypeSupported(e))),
				audioBitsPerSecond: this.options.audioBitsPerSecond
			});
			this.mediaRecorder = n, this.stopRecording();
			let r = [];
			n.ondataavailable = (e) => {
				e.data.size > 0 && r.push(e.data), this.emit("record-data-available", e.data);
			};
			let i = (e) => {
				var t;
				let i = new Blob(r, { type: n.mimeType });
				this.emit(e, i), this.options.renderRecordedAudio && (this.applyOriginalOptionsIfNeeded(), this.recordedBlobUrl && URL.revokeObjectURL(this.recordedBlobUrl), this.recordedBlobUrl = URL.createObjectURL(i), (t = this.wavesurfer) == null || t.load(this.recordedBlobUrl));
			};
			n.onpause = () => i("record-pause"), n.onstop = () => i("record-end"), n.start(this.options.mediaRecorderTimeslice), this.lastStartTime = performance.now(), this.lastDuration = 0, this.duration = 0, this.isWaveformPaused = !1, this.timer.start(), this.emit("record-start");
		}));
	}
	getDuration() {
		return this.duration;
	}
	isRecording() {
		return this.mediaRecorder?.state === "recording";
	}
	isPaused() {
		return this.mediaRecorder?.state === "paused";
	}
	isActive() {
		return this.mediaRecorder?.state !== "inactive";
	}
	stopRecording() {
		var e;
		this.isActive() && ((e = this.mediaRecorder) == null || e.stop(), this.timer.stop());
	}
	pauseRecording() {
		var e, t;
		this.isRecording() && (this.isWaveformPaused = !0, (e = this.mediaRecorder) == null || e.requestData(), (t = this.mediaRecorder) == null || t.pause(), this.timer.stop(), this.lastDuration = this.duration);
	}
	resumeRecording() {
		var e;
		this.isPaused() && (this.isWaveformPaused = !1, (e = this.mediaRecorder) == null || e.resume(), this.timer.start(), this.lastStartTime = performance.now(), this.emit("record-resume"));
	}
	static getAvailableAudioDevices() {
		return _(this, void 0, void 0, (function* () {
			return navigator.mediaDevices.enumerateDevices().then(((e) => e.filter(((e) => e.kind === "audioinput"))));
		}));
	}
	destroy() {
		this.applyOriginalOptionsIfNeeded(), super.destroy(), this.stopRecording(), this.stopMic(), this.recordedBlobUrl && (URL.revokeObjectURL(this.recordedBlobUrl), this.recordedBlobUrl = null);
	}
	applyOriginalOptionsIfNeeded() {
		this.wavesurfer && this.originalOptions && (this.wavesurfer.setOptions(this.originalOptions), delete this.originalOptions);
	}
};
//#endregion
//#region components/widget/tabs/messages-tab/composer/voice-recorder-bar/helpers.ts
function w(e) {
	let t = Math.max(0, e);
	return `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`;
}
function T() {
	if (typeof MediaRecorder > "u") return null;
	for (let e of [
		"audio/webm;codecs=opus",
		"audio/webm",
		"audio/mp4",
		"audio/ogg"
	]) if (MediaRecorder.isTypeSupported?.(e)) return e;
	return null;
}
async function E(e) {
	return new Promise((t, n) => {
		let r = new FileReader();
		r.onload = () => {
			let e = r.result;
			if (typeof e != "string") {
				n(/* @__PURE__ */ Error("FileReader returned non-string result"));
				return;
			}
			let i = e.indexOf(",");
			t(i >= 0 ? e.slice(i + 1) : e);
		}, r.onerror = () => n(r.error ?? /* @__PURE__ */ Error("read failed")), r.readAsDataURL(e);
	});
}
//#endregion
//#region components/widget/tabs/messages-tab/composer/voice-recorder-bar/index.tsx
function D({ onComplete: o, onCancel: c, onError: _ }) {
	let v = i("messages"), y = d(null), b = d(null), x = d(null), S = d(null), D = d([]), k = d(null), [A, j] = f("recording"), [M, N] = f(0), [P, F] = f(!1), I = d(null), L = d(!1);
	return u(() => {
		let e = y.current;
		if (!e) return;
		if (typeof window > "u" || !window.MediaRecorder) {
			_("unsupported");
			return;
		}
		let t = !1;
		L.current = !1;
		let n = getComputedStyle(e), r = n.getPropertyValue("--wx-primary").trim() || "#5b6cff", i = n.getPropertyValue("--wx-fg-muted").trim() || "#6b7280", a = l.create({
			container: e,
			waveColor: i,
			progressColor: r,
			cursorColor: r,
			cursorWidth: 2,
			height: 32,
			barWidth: 2,
			barGap: 2,
			barRadius: 2,
			interact: !0,
			hideScrollbar: !0
		});
		b.current = a, a.on("play", () => F(!0)), a.on("pause", () => F(!1)), a.on("finish", () => F(!1));
		let o = a.registerPlugin(C.create({
			continuousWaveform: !0,
			continuousWaveformDuration: 60,
			renderRecordedAudio: !1
		}));
		x.current = o;
		let s = null, c = null;
		return o.startMic().then((e) => {
			if (t || L.current) {
				try {
					e.getTracks().forEach((e) => {
						e.stop();
					});
				} catch {}
				try {
					o.stopMic();
				} catch {}
				return;
			}
			let n = T(), r = n ? new MediaRecorder(e, { mimeType: n }) : new MediaRecorder(e);
			S.current = r, c = r, D.current = [], r.addEventListener("dataavailable", (e) => {
				e.data && e.data.size > 0 && D.current.push(e.data);
			}), r.addEventListener("stop", () => {
				if (t || L.current) return;
				try {
					o.stopMic();
				} catch {}
				s !== null && (clearInterval(s), s = null, k.current = null);
				let e = r.mimeType || n || "audio/webm", i = new Blob(D.current, { type: e });
				E(i).then((n) => {
					if (t || L.current) return;
					let r = e.includes("mp4") ? "mp4" : "webm";
					I.current = {
						base64: n,
						mimetype: e.split(";")[0].trim(),
						size: i.size,
						filename: `voice-${Date.now()}.${r}`
					}, a.loadBlob(i).then(() => {
						if (!(t || L.current)) {
							try {
								a.setOptions({ interact: !0 });
							} catch {}
							try {
								a.setTime(0);
							} catch {}
						}
					}).catch(() => {}), j("preview");
				}).catch(() => _("failed"));
			}), r.start();
			let i = performance.now();
			s = window.setInterval(() => {
				let e = performance.now() - i, t = Math.floor(e / 1e3);
				N((e) => e === t ? e : t);
			}, 250), k.current = s;
		}).catch((e) => {
			if (t) return;
			let n = e?.message ?? "";
			_(n.includes("Permission") || n.includes("denied") ? "denied" : "failed");
		}), () => {
			t = !0, s !== null && clearInterval(s);
			try {
				c?.state === "recording" && c.stop();
			} catch {}
			try {
				o.stopMic();
			} catch {}
			a.destroy(), b.current === a && (b.current = null), x.current === o && (x.current = null), S.current === c && (S.current = null);
		};
	}, []), /* @__PURE__ */ h(e.div, {
		initial: {
			opacity: 0,
			y: 6
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: .18 },
		className: a("flex items-center gap-1.5 rounded-wx-lg border border-wx-border bg-wx-bg px-2 py-2"),
		children: [
			/* @__PURE__ */ m(O, {
				Icon: t,
				onClick: () => {
					L.current = !0;
					try {
						S.current?.state === "recording" && S.current.stop();
					} catch {}
					try {
						x.current?.stopMic();
					} catch {}
					try {
						b.current?.pause();
					} catch {}
					c();
				},
				ariaLabel: v("cancelRecording"),
				intent: "ghost"
			}),
			/* @__PURE__ */ h("div", {
				className: "flex h-9 min-w-0 flex-1 items-center gap-2 rounded-full bg-wx-bg-elevated px-3",
				children: [
					A === "recording" && /* @__PURE__ */ m("span", {
						"aria-hidden": "true",
						className: "h-2 w-2 shrink-0 animate-pulse rounded-full bg-wx-danger"
					}),
					/* @__PURE__ */ m("div", {
						ref: y,
						"aria-hidden": "true",
						className: a("min-w-0 flex-1 overflow-hidden", A !== "preview" && "pointer-events-none")
					}),
					/* @__PURE__ */ m("span", {
						className: "shrink-0 font-mono text-xs tabular-nums text-wx-fg-muted",
						children: w(M)
					})
				]
			}),
			A === "recording" && /* @__PURE__ */ m(e.button, {
				type: "button",
				onClick: () => {
					try {
						S.current?.state === "recording" && S.current.stop();
					} catch {}
				},
				"aria-label": v("stopRecording"),
				whileHover: { scale: 1.08 },
				whileTap: { scale: .9 },
				transition: {
					type: "spring",
					stiffness: 400,
					damping: 22
				},
				className: a("flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors", "text-wx-fg-muted hover:bg-wx-bg-elevated hover:text-wx-fg"),
				children: /* @__PURE__ */ m(g, { size: 14 })
			}),
			A === "preview" && /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m(O, {
				Icon: P ? n : r,
				onClick: () => {
					let e = b.current;
					e && (e.isPlaying() ? e.pause() : e.play());
				},
				ariaLabel: v(P ? "pauseRecording" : "playPreview"),
				intent: "ghost"
			}), /* @__PURE__ */ m(e.button, {
				type: "button",
				onClick: () => {
					let e = I.current;
					e && o(e);
				},
				"aria-label": v("sendCta"),
				whileHover: { scale: 1.08 },
				whileTap: { scale: .9 },
				transition: {
					type: "spring",
					stiffness: 400,
					damping: 22
				},
				className: a("flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors", "bg-wx-primary text-wx-primary-fg hover:bg-wx-primary-hover"),
				children: /* @__PURE__ */ m(s, { size: 14 })
			})] })
		]
	}, "voice-recorder");
}
function O({ Icon: t, onClick: n, ariaLabel: r, intent: i, size: o = 16 }) {
	let s = c();
	return /* @__PURE__ */ m(e.button, {
		type: "button",
		onClick: n,
		"aria-label": r,
		whileHover: { scale: 1.08 },
		whileTap: { scale: .9 },
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 22
		},
		...s.parentHandlers,
		className: a("flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors", i === "primary" ? "bg-wx-primary text-wx-primary-fg hover:bg-wx-primary-hover" : "text-wx-fg-muted hover:bg-wx-bg-elevated hover:text-wx-fg"),
		children: /* @__PURE__ */ m(t, {
			ref: s.iconRef,
			size: o
		})
	});
}
//#endregion
export { D as VoiceRecorderBar };

//# sourceMappingURL=widget-react-Bf61JvS12.js.map