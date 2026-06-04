# @wexio/messenger-widget-react

[![npm version](https://img.shields.io/npm/v/@wexio/messenger-widget-react.svg)](https://www.npmjs.com/package/@wexio/messenger-widget-react)
[![license](https://img.shields.io/npm/l/@wexio/messenger-widget-react.svg)](./LICENSE)

Native React component for the [Wexio](https://wexio.io) web messenger. Renders inside a Shadow DOM portal so widget styles never collide with the host React app. Same widget runtime as the script-injected iframe and the `<wexio-widget>` web component — your visitors see the same widget regardless of which delivery flavour you embed.

## Install

```bash
yarn add @wexio/messenger-widget-react
# or
npm install @wexio/messenger-widget-react
```

`react >= 18` and `react-dom >= 18` are peer dependencies — the widget uses the host's React tree.

## Quick start

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

That's it — the widget mounts a floating launcher in the bottom-right corner of the viewport and handles the rest (theme, locale, panel open/close, identity handshake, real-time chat).

## Identifying users

Pass a verified `user` to log a known visitor in (the Wexio equivalent of Intercom's `boot({ user_id, ... })`). Provide ONE proof — a Google FedCM `id_token`, a host-signed `jwt`, or a legacy `userId` + `userHash` HMAC pair:

```tsx
<WexioWidget
  publicKey="pk_live_..."
  user={{
    jwt: serverSignedJwt,
    name: "Ada Lovelace",
    email: "ada@example.com",
  }}
/>
```

For an unverified pre-fill (skip the prechat form when the visitor's email is already known but you can't sign it), use `prefill` instead:

```tsx
<WexioWidget publicKey="pk_live_..." prefill={{ email: "ada@example.com" }} />
```

> **Memoise `user` and `prefill`.** Fresh object literals every render churn the env (the handshake is internally guarded against re-firing unless the proof actually changes, but it's tidier to avoid).

## Props

| Prop                | Type                                                  | Description                                                                                                                              |
| ------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `publicKey`         | `string`                                              | Wexio integration public key (`pk_live_...`). Omit to render in demo mode (bundled mock content for landing pages or Storybook).         |
| `locale`            | `"en" \| "uk"`                                        | UI locale. Defaults to the visitor's browser language. Extend by contributing a new bundle to the source repo.                           |
| `mode`              | `"production"`                                        | Always `"production"` on the public package. (Preview + demo modes are dashboard-only.)                                                  |
| `user`              | [`VisitorIdentity`](#visitoridentity)                 | Verified identity. See [Identifying users](#identifying-users).                                                                          |
| `prefill`           | [`VisitorPrefill`](#visitorprefill)                   | Unverified pre-fill for the prechat form.                                                                                                |
| `config`            | [`InjectableWidgetConfig`](#injectablewidgetconfig)   | Pre-resolved widget config. Set this if you already have the config server-rendered or fetched app-wide — skips the bootstrap fetch.     |
| `lightboxViewport`  | `boolean`                                             | Render the media lightbox (image / video gallery) as a viewport-fixed overlay. Set `true` when the widget's host box is very small.      |
| `onResize`          | `(size: { width: number; height: number }) => void`   | Fired whenever the widget's intended dimensions change (open ↔ closed ↔ expanded).                                                       |
| `onClose`           | `() => void`                                          | Fired when the visitor taps the close chip.                                                                                              |
| `className`         | `string`                                              | Pass-through class on the outer host `<div>`. Style this with normal layout CSS.                                                         |
| `style`             | `React.CSSProperties`                                 | Pass-through inline styles for the outer host `<div>`.                                                                                   |

### Imperative API

The visitor- and operator-facing imperative methods (`show`, `hide`, `update`, `shutdown`, `showSpace`, `showMessages`, `whoami`, `onUnreadCountChange`, etc.) live on `window.WexioWidget` once the component has mounted, mirroring the script loader's surface. A typed React hook (`useWexioWidget()`) is in progress and ships in a future minor — until then, reach for the global from `useEffect`:

```tsx
useEffect(() => {
  window.WexioWidget?.onUnreadCountChange?.((count) => {
    document.title = count > 0 ? `(${count}) Inbox` : "Inbox";
  });
}, []);
```

See the [full method reference](https://github.com/wexiohub/messenger-widget-react#api) on GitHub.

## Types

### `VisitorIdentity`

```ts
interface VisitorIdentity {
  googleIdToken?: string;          // Google FedCM id_token (preferred)
  jwt?: string;                    // Host-signed JWT
  userId?: string;                 // Legacy HMAC pair…
  userHash?: string;               // …(HMAC-SHA256(userId, integrationSecret))
  name?: string;
  email?: string;
  phone?: string;
  attributes?: Record<string, unknown>;
}
```

### `VisitorPrefill`

```ts
interface VisitorPrefill {
  name?: string;
  email?: string;
  phone?: string;
}
```

### `InjectableWidgetConfig`

The pre-resolved widget config shape (theme, features, blocks, prechat, messenger chrome, sounds, locale strategy). It deliberately excludes `status`, `branding`, and `security.allowedOrigins` — those are server-owned and not host-overridable. Pull the full type from the package:

```ts
import type { InjectableWidgetConfig } from "@wexio/messenger-widget-react";
```

## SSR

The component renders `null` on the server. The Shadow-DOM portal target mounts on the first `useEffect`, so the widget is invisible during SSR/hydration and appears on first paint. Wrap in `<Suspense fallback={null}>` if you need to defer hydration in RSC-heavy apps.

## Browser support

Modern evergreen browsers — anything that supports Shadow DOM and ES2020. Internet Explorer is not supported.

## License

[MIT](./LICENSE) © Wexio
