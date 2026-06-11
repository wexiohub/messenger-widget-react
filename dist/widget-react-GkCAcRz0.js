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
import { useCallback as e, useRef as t } from "react";
//#region lib/use-icon-hover.ts
function n() {
	let n = t(null), r = e(() => {
		n.current?.startAnimation?.();
	}, []), i = e(() => {
		n.current?.stopAnimation?.();
	}, []);
	return {
		iconRef: n,
		parentHandlers: {
			onMouseEnter: r,
			onMouseLeave: i,
			onFocus: r,
			onBlur: i
		}
	};
}
//#endregion
export { n as t };

//# sourceMappingURL=widget-react-GkCAcRz0.js.map