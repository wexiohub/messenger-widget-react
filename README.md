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
- [Bot protection (Cloudflare Turnstile)](#bot-protection-cloudflare-turnstile)
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

> **Memoise `user`.** Fresh object literals every render churn the env (the handshake is internally guarded against re-firing unless the proof actually changes, but it's tidier to avoid).

## Props

| Prop        | Type                                                | Description                                                                                                                                                                            |
| ----------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `publicKey` | `string`                                            | Wexio integration public key (`pk_live_...`). Omit to render in demo mode (bundled mock content for landing pages or Storybook).                                                       |
| `user`      | [`VisitorIdentity`](#visitoridentity)               | Verified identity. See [Identifying users](#identifying-users).                                                                                                                        |
| `mode`      | `"production" \| "demo"`                            | Force a mode. Auto-resolves to `production` when `publicKey` is set, `demo` otherwise. Set `demo` explicitly to render bundled mock content even with a public key (landing previews). |
| `config`    | [`InjectableWidgetConfig`](#injectablewidgetconfig) | Pre-resolved widget config. Set this if you already have the config server-rendered or fetched app-wide — skips the bootstrap fetch.                                                   |
| `onResize`  | `(size: { width: number; height: number }) => void` | Fired whenever the widget's intended dimensions change (open ↔ closed ↔ expanded). Use for host-side layout sync.                                                                      |
| `onOpen`    | `() => void`                                        | Fired when the visitor opens the panel (taps the launcher, peek bubble, etc.).                                                                                                         |
| `onClose`   | `() => void`                                        | Fired when the visitor taps the close chip.                                                                                                                                            |
| `className` | `string`                                            | Pass-through class on the outer host `<div>`. Style this with normal layout CSS.                                                                                                       |
| `style`     | `React.CSSProperties`                               | Pass-through inline styles for the outer host `<div>`.                                                                                                                                 |

> **UI locale is operator-controlled.** The widget ships **33 UI locales** (English, Ukrainian, German, Spanish — incl. `es-MX`, French, Italian, Dutch, Portuguese — incl. `pt-BR`, Swedish, Danish, Norwegian, Finnish, Polish, Czech, Slovak, Turkish, Romanian, Hungarian, Greek, Arabic, Hebrew, Hindi, Thai, Vietnamese, Indonesian, Japanese, Korean, Chinese — `zh` + `zh-TW`, plus regional English variants). The operator's `localeStrategy` (set in the Wexio dashboard) decides whether to follow the visitor's browser (`AUTO`), the host page's `<html lang>` (`WEBSITE`), or pin to a chosen language (`DEFAULT` + `defaultLocale`). The visitor can also override their language from the in-widget Profile tab.

## Bot protection (Cloudflare Turnstile)

When the operator enables [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) for the integration (Wexio dashboard → Security), the widget transparently runs an interaction-only challenge before the visitor handshake — no host wiring required. The launcher stays unclickable until the challenge resolves; on failure a small "couldn't verify you're human" popup appears anchored above the launcher with a retry button. The challenge token is attached to the prechat and identified-visitor handshake server-side, so operator-side rate-limiting / abuse rules apply automatically.

## Methods

The component's open / close lifecycle is driven via the `onOpen` / `onClose` callbacks plus the visitor's tap on the launcher — no host-side imperative call is needed for normal use.

An imperative `window.WexioWidget` surface (`show`, `hide`, `showSpace`, `setLocale`, `onUnreadCountChange`, …) is on the roadmap to mirror the script loader's API, but doesn't ship in the current React package. For deep-link / programmatic control today, mount the widget conditionally from your own host state.

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

### InjectableWidgetConfig

The pre-resolved widget config shape (theme, features, blocks, prechat, messenger chrome, sounds, locale strategy, bot protection). Pull it from the package:

```ts
import type { InjectableWidgetConfig } from "@wexio/messenger-widget-react";
```

The integration's [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) bot-protection check (when the operator enables it in the Wexio dashboard) is wired automatically — the widget loads the CF script, runs the challenge before the visitor handshake, and shows a retry popup above the launcher if the challenge fails. Hosts don't need to wire anything extra.

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

The public type surface is locked to `entries/public.ts` in the source repo. If you previously relied on undocumented props (`locale`, `prefill`, `lightboxViewport`, `mode: "preview"`, `configOverride`, `useDummyData`, `previewData`), they are no longer exposed — they were either dashboard-only or moved to operator-side config. Remove them and the build will pass. UI locale is now controlled by the operator's `localeStrategy` config and the visitor's Profile-tab language switcher.

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
