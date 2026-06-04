# Welcome to @wexio/messenger-widget-react 👋

[![Version](https://img.shields.io/npm/v/@wexio/messenger-widget-react.svg)](https://www.npmjs.com/package/@wexio/messenger-widget-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Documentation](https://img.shields.io/badge/docs-wexio.io-blue.svg)](https://learn.wexio.io)

Native React component for the [Wexio](https://wexio.io) web messenger. Renders inside a Shadow DOM portal for full style isolation — same `WidgetShell` runtime as the script-injected iframe and the `<wexio-widget>` web component. Same chat, same visitor identity, same backend; the only difference is **where the React tree mounts.**

🏠 [Website](https://wexio.io)
📚 [Developer Docs](https://learn.wexio.io)

## 📂 Description

- [Installation](#installation)
- [Quick start](#quick-start)
- [Identifying users](#identifying-users)
- [Props](#props)
- [Methods](#methods)
- [Types](#types)
- [SSR](#ssr)
- [Browser support](#browser-support)
- [Troubleshooting](#troubleshooting)
- [Use with other frameworks](#use-with-other-frameworks)
- [Author](#author)
- [License](#-license)

## Installation

```bash
yarn add @wexio/messenger-widget-react
```

or

```bash
npm install @wexio/messenger-widget-react
```

`react >= 18` and `react-dom >= 18` are peer dependencies — the widget uses the host's React tree.

## Quick start

Import the package on every page that should display the messenger (or on a common component used by them) and render the component. This must be done on the client side.

```tsx
import { WexioWidget } from "@wexio/messenger-widget-react";

export default function App() {
  return (
    <>
      {/* your app */}
      <WexioWidget publicKey="pk_live_..." />
    </>
  );
}
```

That's it — the widget mounts a floating launcher, handles its own theme/locale/state, and the operator dashboard sees the visitor immediately. The component manages its own lifecycle internally, so re-renders due to host DOM changes won't trigger a re-boot.

## Identifying users

Pass a verified `user` to log a known visitor in (the Wexio equivalent of Intercom's `boot({ user_id, ... })`). Provide ONE proof — a Google FedCM `id_token`, a host-signed `jwt`, or the legacy `userId` + `userHash` HMAC pair:

```tsx
<WexioWidget
  publicKey="pk_live_..."
  user={{
    jwt: serverSignedJwt, // host-signed identity token (recommended)
    name: "Ada Lovelace",
    email: "ada@example.com",
  }}
/>
```

For an **unverified pre-fill** (skip the prechat form when the visitor's email is already known but you can't sign it), use `prefill`:

```tsx
<WexioWidget publicKey="pk_live_..." prefill={{ email: "ada@example.com" }} />
```

> **Memoise `user` and `prefill`.** Fresh object literals every render churn the env (the handshake is internally guarded against re-firing unless the proof actually changes, but it's tidier to avoid).

## Props

| Prop                | Type                                                  | Description                                                                                                                              |
| ------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `publicKey`         | `string`                                              | Wexio integration public key (`pk_live_...`). Omit to render in demo mode (bundled mock content for landing pages or Storybook).         |
| `locale`            | `"en" \| "uk"`                                        | UI locale. Defaults to the visitor's browser language. Extend by contributing a new bundle to the source repo.                           |
| `user`              | [`VisitorIdentity`](#visitoridentity)                 | Verified identity. See [Identifying users](#identifying-users).                                                                          |
| `prefill`           | [`VisitorPrefill`](#visitorprefill)                   | Unverified pre-fill for the prechat form.                                                                                                |
| `config`            | [`InjectableWidgetConfig`](#injectablewidgetconfig)   | Pre-resolved widget config. Set this if you already have the config server-rendered or fetched app-wide — skips the bootstrap fetch.     |
| `lightboxViewport`  | `boolean` (default `true`)                            | Render the media lightbox (image / video gallery) as a viewport-fixed overlay. Pass `false` to contain the gallery inside the widget's host box. |
| `onResize`          | `(size: { width: number; height: number }) => void`   | Fired whenever the widget's intended dimensions change (open ↔ closed ↔ expanded). Use for host-side layout sync.                        |
| `onClose`           | `() => void`                                          | Fired when the visitor taps the close chip.                                                                                              |
| `className`         | `string`                                              | Pass-through class on the outer host `<div>`. Style this with normal layout CSS.                                                         |
| `style`             | `React.CSSProperties`                                 | Pass-through inline styles for the outer host `<div>`.                                                                                   |

## Methods

The visitor- and operator-facing imperative methods (`show`, `hide`, `update`, `shutdown`, `showSpace`, `showMessages`, `whoami`, `onUnreadCountChange`, etc.) live on `window.WexioWidget` once the component has mounted, mirroring the script loader's surface. A typed React hook (`useWexioWidget()`) ships in a future minor — until then, reach for the global from `useEffect`.

### show / hide / toggle

Open or close the messenger panel.

```ts
window.WexioWidget?.show();
window.WexioWidget?.hide();
window.WexioWidget?.toggle();
```

### update

Patch live config (swap identity, switch theme, change locale).

```ts
window.WexioWidget?.update({ locale: "uk" });
```

### shutdown / boot

Wipe session (token, sticky visitor id, prechat flags); `boot` re-initialises. Use on logout / shared devices.

```ts
window.WexioWidget?.shutdown();
window.WexioWidget?.boot({ publicKey: "pk_live_..." });
```

### showSpace

Open the messenger and route to a specific tab.

```ts
window.WexioWidget?.showSpace("home");
window.WexioWidget?.showSpace("messages");
window.WexioWidget?.showSpace("help");
window.WexioWidget?.showSpace("news");
window.WexioWidget?.showSpace("profile");
```

### showMessages

Alias for `showSpace("messages")`.

```ts
window.WexioWidget?.showMessages();
```

### showNewMessage

Open ready-to-compose. Optional prefill for the composer.

```ts
window.WexioWidget?.showNewMessage();
window.WexioWidget?.showNewMessage("Hi, I have a question about...");
```

### showArticle / showNews

Deep-link into a help article or news post.

```ts
window.WexioWidget?.showArticle(articleId);
window.WexioWidget?.showNews(newsItemId);
```

### onShow / onHide

Fire a callback when the messenger opens/closes.

```ts
window.WexioWidget?.onShow(() => {
  console.log("messenger opened");
});
window.WexioWidget?.onHide(() => {
  console.log("messenger closed");
});
```

### onUnreadCountChange

Fires immediately with the current count, then on every change. Common use: badge the host tab title.

```tsx
useEffect(() => {
  return window.WexioWidget?.onUnreadCountChange?.((count) => {
    document.title = count > 0 ? `(${count}) Inbox` : "Inbox";
  });
}, []);
```

### hideNotifications

Suppress launcher peek bubbles on new operator messages.

```ts
window.WexioWidget?.hideNotifications(true);  // suppress
window.WexioWidget?.hideNotifications(false); // restore
```

### whoami / getVisitorId

Read the current session.

```ts
const me = window.WexioWidget?.whoami();
// → { visitorId, peopleId, displayName, verified } | null
const visitorId = window.WexioWidget?.getVisitorId();
```

### setLocale

Programmatic language switch.

```ts
window.WexioWidget?.setLocale("uk");
```

### Future / reserved

The following names are reserved on the public surface for upcoming features and are no-ops today (with a `console.warn` in dev builds): `trackEvent`, `startTour`, `startSurvey`, `startChecklist`, `showTicket`. They'll light up when the corresponding backend features ship.

## Types

### VisitorIdentity

```ts
interface VisitorIdentity {
  googleIdToken?: string; // Google FedCM id_token (preferred)
  jwt?: string;           // Host-signed JWT
  userId?: string;        // Legacy HMAC pair…
  userHash?: string;      // …(HMAC-SHA256(userId, integrationSecret))
  name?: string;
  email?: string;
  phone?: string;
  attributes?: Record<string, unknown>;
}
```

### VisitorPrefill

```ts
interface VisitorPrefill {
  name?: string;
  email?: string;
  phone?: string;
}
```

### InjectableWidgetConfig

The pre-resolved widget config shape (theme, features, blocks, prechat, messenger chrome, sounds, locale strategy). Pull it from the package:

```ts
import type { InjectableWidgetConfig } from "@wexio/messenger-widget-react";
```

## SSR

The component renders `null` on the server. The Shadow-DOM portal target mounts on the first `useEffect`, so the widget is invisible during SSR/hydration and appears on first paint. Wrap in `<Suspense fallback={null}>` if you need to defer hydration in RSC-heavy apps.

## Browser support

Modern evergreen browsers — anything that supports Shadow DOM and ES2020. Internet Explorer is not supported.

## Troubleshooting

### Messenger not showing on page

- Check that the correct `publicKey` is being passed.
- Check the messenger is **active** for your integration on https://app.wexio.io.
- Confirm the component renders on the client (not during SSR) — `<WexioWidget>` returns `null` until the first `useEffect`.

### No user data attached

- Verify you're computing `userHash` server-side as `HMAC-SHA256(userId, integrationSecret)`. Never expose the integration secret to the browser.
- Confirm the proof you pass in `user` is one of: `googleIdToken`, `jwt`, or `userId` + `userHash`. Passing multiple proofs uses the first one detected (Google → jwt → HMAC).

### TypeScript errors after upgrade

The public type surface is locked to `entries/public.ts` in the source repo. If you previously relied on undocumented props (`mode: "preview"`, `configOverride`, `useDummyData`, `previewData`), they are no longer exposed — they were dashboard-only and never meant to ship. Remove them and the build will pass.

## Use with other frameworks

The underlying widget runtime is a Web Component, so it works in any modern framework — even without a typed wrapper:

```html
<wexio-widget public-key="pk_live_..."></wexio-widget>
<script type="module" src="https://cdn.wexio.io/widget.js"></script>
```

Typed wrappers are on the roadmap:

- `@wexio/messenger-widget-vue` — coming soon
- `@wexio/messenger-widget-angular` — coming soon
- `@wexio/messenger-widget-ember` — coming soon

For plain HTML / script-injection setups, paste the loader snippet from https://learn.wexio.io.

## Author

👤 **Wexio** ([https://wexio.io](https://wexio.io))

## Show your support

Give a ⭐️ if this package helped you!

## 📝 License

This project is [MIT](./LICENSE) licensed.

---

_Created with ❤️ by [Wexio](https://wexio.io)_
