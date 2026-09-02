# @wexio/messenger-widget-react

## 1.2.2

### Patch Changes

- 948dbaf: Fix website page-view tracking reporting the PREVIOUS page's title after a SPA navigation. The host router changes the URL synchronously but updates `document.title` a tick later, so the title was read too early. Both capture paths (the iframe `loader.js` and the web-component provider) now wait for `<title>` to actually update (via a `MutationObserver`, with a short timeout fallback) before reporting, so the title matches the new URL.

## 1.2.1

### Patch Changes

- 717679b: Ship `CHANGELOG.md` in the published package (added to each package's `files`) and into the per-package dist repos, so consumers can see release notes on npm and GitHub.

## 1.2.0

### Minor Changes

- 972e218: Visitor activity tracking, AI reply Sources, Markdown rendering, and navigation fixes.

  **Visitor activity tracking**

  - Website page views (initial load + SPA navigation) and in-widget link clicks (help / news / CTA / external) are reported when the operator's `trackWebsitePages` / `trackWidgetLinks` flags are on. Events queue before the visitor handshake and flush once the session lands.
  - iframe embeds capture host-page navigation in `loader.js` and forward it to the widget; web-component / React embeds read history directly.
  - Help/news open-tracking now fires from the article detail view keyed on the post `_id` — so it covers every entry path (search, category, related, home blocks) and matches the id used by reactions.
  - The detected visitor locale is sent in the handshake `contextSnapshot` so the operator's profile LANGUAGE resolves accurately.

  **AI replies**

  - **Sources block** under AI answers: a collapsible `Sources · N` pill (with a stacked favicon preview) that expands to source rows with a hover tooltip (title + description). Internal `/help` · `/news` sources open in-widget; absolute URLs open in a new tab. Sourced from both the realtime event and chat history.
  - **Markdown replies** are now rendered (bold, lists, links, code, headings) with the exact same styling as HTML replies; links route the same way. Fixes large gaps between list items in AI HTML lists.

  **Navigation & misc**

  - "Back" now returns to the view the visitor drilled in from (home, messages, a category, another article) instead of a fixed section index.
  - The home "Latest news" block opens the tapped post directly instead of the News tab.
  - Tap a message bubble to reveal its sender + time.

## 1.1.5

### Patch Changes

- 8041e58: Show the operator ETA while a handoff is pending. When an operator is assigned but hasn't joined yet, the widget now shows the estimated time to the first reply instead of a generic "please wait": a minutes figure (`operator_load`), a soft "we usually reply within a few minutes", or — when the team is offline / out of hours — an honest "the team will be back at {time}" (localized to the visitor's timezone). The `visitorChatAssignment` query and the realtime `assignment` event both carry the `estimate`, so the line is correct on first paint and stays current. New i18n keys added across all supported locales.

## 1.1.4

### Patch Changes

- 3e10bb5: Render inline HTML in AI chat messages. AI replies embed `<a>` / `<ul>` / `<pre>` fragments mid-text (not wrapped in a block tag), which previously showed as literal tags because the renderer only treated a message as HTML when it started with a tag. The message body now detects HTML anywhere and renders it through the same `html-react-parser` pipeline the article / operator HTML uses (markup becomes a React tree, `<script>` inert), while preserving the plain-text line breaks. External links open in a new tab; internal `/help/…` links keep routing inside the widget.

## 1.1.3

### Patch Changes

- 38321be: fix: don't run the demo unread-peek while the config is still loading. The base
  state is `isDummy: true` until the BE config lands, so on live that transient
  window rendered demo content and logged `MISSING_MESSAGE: demo.*` (demo strings
  are intentionally omitted from live for perf). The peek now waits for the config
  to resolve — live stays demo-free, no console error.

## 1.1.2

### Patch Changes

- 5a6d67d: a11y: fix "aria-hidden element must not contain focusable elements" — the closed
  panel is now `inert` (its nav/links leave the tab order + a11y tree while hidden),
  and the launcher's unread-count badge is `aria-hidden` so it no longer mismatches
  the button's accessible name.

## 1.1.1

### Patch Changes

- d09ab70: Flow button fixes.

  - **Resume flow by value**: quick-reply clicks now send the button's `value` (`buttonValue`) so the BE resumes the flow deterministically instead of matching the raw label — fixes "sometimes the button works, sometimes the AI answers".
  - **Button types**: `url` buttons open the link in a new tab and `phone` buttons dial `tel:` — neither posts to the chat (previously every button was treated as a callback, so a `url` tap silently ended the flow). `type` / `url` / `phoneNumber` now carry through both the history and live-SSE mappers.
  - **Always-render link buttons**: `url` / `phone` buttons render regardless of whether the message is the active flow step; `callback` buttons stay gated to the active step.
  - **Affordance**: `url` / `phone` buttons show an external-link / phone glyph.

## 1.1.0

### Minor Changes

- db2d14c: Operator handoff status in the visitor widget, a news read/unread indicator, and a message-persistence fix.

  - **Operator handoff**: the visitor now sees the live state of a human handoff — a "an operator has been assigned, please wait…" line while pending, a centered system message with the operator's name + avatar when connected (survives reload), and a "resolve conversation" action in the header. Resolution is attributed ("resolved by you" / "by {operator}") and driven by a new `visitorChatAssignment` query, a `kind: "assignment"` realtime event, and a `resolveVisitorChat` mutation.
  - **News unread indicator**: a countless dot on the launcher and the News tab when the newest post hasn't been seen (tracked in localStorage; visiting the News tab clears it). On the launcher it folds into the message count (+1) when there are also unread messages. Only shown when the News tab is enabled and posts exist.
  - **Fix**: in-session messages no longer disappear when the widget unmounts/remounts on an SPA re-navigation — the chat-history query now refetches on mount instead of serving a stale cache-first page.
  - New handoff/news i18n keys added across all supported locales.

## 1.0.29

### Patch Changes

- 7aeb4e6: Fix mobile file uploads and false "microphone access denied".

  **File uploads (mobile).** The upload allow-list rejected iOS camera
  captures — photos default to HEIC/HEIF, videos to QuickTime (`.mov`),
  voice memos to `audio/mp4` (`.m4a`) — and any file the browser reported
  with an empty `File.type` (common on mobile). The client and backend
  allow-lists now cover HEIC/HEIF, QuickTime, 3GPP and WebM video, plus
  `audio/mp4`/`audio/wav`; an empty `File.type` now falls back to the
  filename extension, and the resolved MIME is sent to the backend so it
  no longer 415s on an empty type.

  **Microphone.** The iframe loader was missing `microphone` in its `allow`
  attribute, so the browser blocked `getUserMedia` via Permissions-Policy
  and the recorder reported "microphone access denied" even when the
  visitor never denied it. Added `microphone` to the iframe `allow`, and
  the recorder now separates a real permission denial from missing-device,
  busy-device and insecure-context failures.

## 1.0.28

### Patch Changes

- 844d503: v1.0.28 — Real fix for missing input borders + other styling regressions in Shadow DOM contexts. v1.0.27's `:host` mirror block was insufficient.

  **Diagnosis (now actually correct).** Tailwind v4 removed the explicit `*, ::before, ::after { --tw-border-style: solid; … }` reset block that v3 used. Instead it relies on `@property --tw-border-style { initial-value: solid; }` declarations to provide the same defaults globally.

  The CSS spec says `@property` registers properties at the document level, and the registered `initial-value` applies wherever the property isn't explicitly set — including inside Shadow DOM. In practice, Chromium's implementation of `@property` resolution from **adopted stylesheets** does NOT propagate initial-values into Shadow DOM children. So `var(--tw-border-style)` resolves to empty string inside the widget's Shadow DOM, `border-style: ""` evaluates to `none`, and every `border` utility paints an invisible border.

  Same root cause hits every Tailwind utility implemented as `var(--tw-*)`: shadows, gradients, scale/rotate transforms, ring widths, leading, tracking, drop-shadows, backdrop filters. The visible-only-some-styling-broken pattern users reported was exactly the set of utilities NOT using `--tw-*` vars (basic colors via `--color-wx-*`, basic spacing) rendering fine, while the variable-driven ones broke.

  The iframe-mount path (cdn-loader) was unaffected because its CSS lives in the iframe's actual document where `@property` registration works normally.

  **Fix.** A `:host *, :host ::before, :host ::after { … }` block in `globals.css` explicitly sets every Tailwind v4 default that the `@property` system was supposed to provide. The full list is mirrored from Tailwind's own `::backdrop` defaults block (which Tailwind emits for the `::backdrop` pseudo-element specifically — apparently they hit the same Chromium limitation there).

  This block needs to stay in lockstep with Tailwind v4's evolution — if Tailwind adds a new internal CSS variable, we need to mirror its default here too. The comment block in `globals.css` flags the maintenance contract.

  **Verified locally** — both `widget.js` (web-component bundle, consumed by Vue / Angular / Ember / loader) and `widget-react.js` (React-direct bundle, consumed by the React npm package) now contain the explicit `:host *` reset.

  **Note on language switcher.** Previously reported as "broken" alongside the styling issues — likely a downstream symptom of the same Shadow DOM CSS variable issue: the dropdown's clickable area was invisible because `border` / `ring` / `shadow` utilities had no effect, so users were clicking on a styled-by-text-only target. After this fix the dropdown UI should be tappable normally. If language still doesn't switch after v1.0.28 retest, that's a separate bug to chase.

## 1.0.27

### Patch Changes

- efc87a5: v1.0.27 — Three critical fixes that v1.0.24-v1.0.26 missed.

  **1. Shadow DOM CSS variables — the real cause of "missing input borders, broken styling" reports.**

  Tailwind v4's `@theme inline` block emits `--color-wx-bg`, `--color-wx-border`, etc. ONLY under the `:root` selector. When the widget's stylesheet is adopted into a Shadow DOM (via `adoptedStyleSheets` — used by the `<wexio-widget>` direct embed AND the `<WexioWidget />` React portal), `:root` doesn't match anything inside that scope. Every Tailwind utility class that resolves to `var(--color-wx-*)` (which is most of them) falls back to its undefined-variable default — invisible borders, transparent surfaces, broken focus rings.

  The iframe-mount path (cdn-loader) was unaffected because its CSS lives in the iframe's actual document where `:root` matches `<html>`.

  Fix:

  - A `:host { … }` mirror block in `app/globals.css` duplicates every variable mapping for Shadow DOM consumers.
  - The dark-mode block is now `:host([data-theme="dark"]), [data-theme="dark"] { … }` so the variable overrides apply when `data-theme="dark"` is set on either `<html>` (iframe path) or the `<wexio-widget>` host element (Shadow DOM path).
  - The Tailwind dark variant is extended to `&:where([data-theme="dark"], [data-theme="dark"] *, :host([data-theme="dark"]) *)` so dark-mode utility classes (`dark:bg-wx-bg`, etc.) fire on Shadow DOM children when the host has the data-attribute.

  **2. `loader.js` fixes from v1.0.24 reapplied.**

  The `pk_demo` short-circuit + conditional iframe chrome (`applyChromeForSize`) that shipped in v1.0.24's release notes never actually landed in the deployed bundle — a `git checkout -- public/widget/` to discard locally-rebuilt artifacts also reverted the loader.js edits, and only the changeset file made it into the commit. v1.0.25/v1.0.26 published with the same broken loader. v1.0.27 ships the actual fix:

  - `pk_demo` short-circuit: skip the BE round-trip + 404 entirely.
  - `applyChromeForSize(width, height)`: bare iframe at launcher size (72×72), card chrome at panel size (400×640), runs on initial mount AND on every `wexio:widget:resize:v1` postMessage.
  - `app/globals.css` `html, body` `background: transparent` (was `var(--wx-bg)`): the iframe document background no longer paints a white square BEHIND the dark launcher button. The panel surface itself stays opaque via `bg-wx-bg` on `<WidgetShell>`'s panel container.

  **3. Ember addon misdetection defenses.**

  User reports of `An addon must define a 'name' property` persisted through v1.0.25's `ember-addon` keyword removal (verified via `npm view ... keywords` — the published manifest is clean). Belt-and-braces:

  - Drop the optional `ember-source` peer dep (we use vanilla DOM APIs; no actual dependency).
  - Drop the `ember` keyword (could trigger heuristic detection in some ember-cli versions).
  - Add a `name: "@wexio/messenger-widget-ember"` field to the CJS module.exports as a safety net — if ember-cli still decides to introspect our package as an addon for any reason, the missing-name check at least doesn't blow up.

  If the user still sees the error after v1.0.27, StackBlitz's npm cache is serving a stale older version (possible workaround: bump the example's package.json to `^1.0.27` to force-refresh).

## 1.0.26

### Patch Changes

- 7cfd905: v1.0.26 — `@wexio/messenger-widget-vue` switches to runtime-inject pattern (matches Angular + Ember in v1.0.24).

  **Background.** v1.0.23 / v1.0.24 of the Vue wrapper static-imported `./widget.js` (the web-component runtime bundle) at the top of the package's entry file. That bundles the runtime into the consumer's Vite app via Vite's automatic dependency pre-bundling — esbuild walks `node_modules/@wexio/messenger-widget-vue/dist/widget.js`, re-processes it, and produces a flattened chunk that ships alongside the consumer's app code.

  That round-trip appears to mangle the widget's inlined Tailwind v4 stylesheet string. Symptoms reported on real StackBlitz sandboxes: input borders missing, language switcher inert, partial styling on the visitor's profile tab. The exact same `widget.js` runs cleanly when loaded directly from `cdn.wexio.io/widget/widget.js` (the iframe / `<wexio-widget>` direct embed path) — so the bundle's build output isn't broken, the round-trip through consumer's esbuild is.

  **Fix.** Vue wrapper now matches the Angular + Ember v1.0.24 pattern: an `ensureRuntime()` helper appends `<script type="module" src="https://cdn.wexio.io/widget/widget.js">` to `<head>` on first `onMounted`, idempotent via a marker attribute. The widget loads from its native origin (where its build output is untouched), the browser caches the module for subsequent components, and Vite's pre-bundling never sees the runtime.

  **Package size:** drops from ~688 KB (3 MB unpacked) to ~6 KB (~12 KB unpacked). The widget bundle itself isn't smaller — it just lives on the CDN now, where it always did for the iframe / web-component paths.

  **No prop / event API changes.** Consumers' Vue templates and event handlers work unchanged.

  **React is unchanged in this patch.** The `@wexio/messenger-widget-react` bundle is the React tree itself (not a wrapper around a web component), so the same fix doesn't apply — it'd require an architectural split. A user report of partial styling in React tracks under follow-up investigation; tracked separately.

## 1.0.25

### Patch Changes

- afc092e: v1.0.25 — fix(ember): drop `ember-addon` keyword so ember-cli stops trying to instantiate it as an addon.

  v1.0.24 carried `"keywords": ["ember-addon", …]` over from the initial scaffold. Ember CLI scans every installed package's `keywords` array for `ember-addon` and tries to construct an addon object from packages that have it — calling the addon's `index.js` as a constructor and reading a `name` property. The Wexio Ember package is a plain library (just exports `WexioWidgetService`), so the construct path fails:

  ```
  An addon must define a `name` property
  (found at .../node_modules/@wexio/messenger-widget-ember/dist).
  ```

  Removing the keyword lets ember-cli treat the package as a regular dependency. The remaining keywords still surface the package in relevant npm searches (`wexio`, `chat`, `ember`, `custom-element`).

  No code changes — keyword-only. Fixed group means React/Vue/Angular get a no-op version bump for consistency.

## 1.0.24

### Patch Changes

- bc1914e: v1.0.24 — Five fixes, four packages affected, one bundle untouched.

  **1. `loader.js` `pk_demo` short-circuit.** When `data-public-key="pk_demo"` (or `?pk=pk_demo` forwarded into the loader's bootstrap), the loader now SKIPS the `GET /api/web/config/:pk` BE round-trip entirely and mounts the iframe immediately. The iframe app already recognised the sentinel (v1.0.23) and rendered `DEMO_CONFIG`, so the fetch was a noisy 404 that delayed the launcher mount for zero benefit.

  **2. `loader.js` conditional iframe chrome.** The loader used to paint `border-radius` + `box-shadow` + opaque background on the iframe unconditionally. Correct at 400×640 panel dimensions (looks like a floating card), wrong at 72×72 launcher dimensions (stacks a "white card" behind the dark launcher button — visible in iframe mode, invisible in web-component mode). New `applyChromeForSize(width, height)` helper toggles chrome on a 200 px threshold and runs on initial mount AND every `wexio:widget:resize:v1` postMessage, so the transition fires the instant the visitor opens / closes the panel. Net: `<script src=".../loader.js" data-public-key="pk_demo">` now renders a launcher pixel-identical to `<wexio-widget public-key="pk_demo">`.

  **3. `@wexio/messenger-widget-angular` rebuilt with `ng-packagr`.** v1.0.23 used `ts.transpileModule` (lightweight, no `@angular/core` resolution at publish time) which emitted `__decorate(Component({...}))` calls. That worked in JIT dev mode but Angular's AOT compiler couldn't read `standalone: true` from those calls — StackBlitz reproduced as `TS-992012: Component imports must be standalone components`. ng-packagr is the only sustainable path for an Angular library on npm: it produces FESM2022 bundles + Angular Package Format partial-compilation `.d.ts` with `ɵɵComponentDeclaration<…, true, never>` (the `true` = standalone) that AOT recognises. The `widget.js` runtime is no longer bundled in the package — the component runtime-injects a `<script type="module">` on first `ngAfterViewInit` (idempotent via marker attribute). Net: drops the package from ~3 MB to 13.6 KB AND fixes the AOT failure.

  **4. `@wexio/messenger-widget-ember` dual-build ESM + CJS, no widget runtime in package.** v1.0.23 shipped only ESM (`type: "module"`), which broke `ember serve` for every consumer — Ember CLI's `package-info-cache` scan uses synchronous `require()` to read every installed package, and `require()` of pure ESM throws `require() of ES Module … not supported`. v1.0.24 ships both `dist/index.js` (ESM) and `dist/index.cjs` (CJS) routed via the package.json `exports` map. The `widget.js` runtime was removed from the bundle (CJS-can't-require-ESM means re-introducing the side-effect import would re-introduce the bug); the `WexioWidgetService` class now runtime-injects the script on first construction, mirroring the Angular pattern.

  **5. CI dist-repo sync layout commentary.** `release.yml` Angular sync step keeps the same `dist/` nesting it had before — ng-packagr's output lives at `packages/angular/dist/` root (FESM + esm2022 + .d.ts), and the source `package.json` paths now use `./dist/fesm2022/…` so the published tarball + dist-repo mirror agree.

  **Examples repo follow-up** — `wexiohub/web-widget-examples` got matching updates:

  - Angular example `src/index.html` adds a `<script type="module" src="https://cdn.wexio.io/widget/widget.js"></script>` to load the runtime in parallel with Angular bootstrap (runtime-inject by the component is a fallback for consumers who don't add the script).
  - Ember example same: `<script>` tag added to `app/index.html`, side-effect import removed from `app/app.js`.
  - README reordered to put **StackBlitz first for framework examples** (where it works reliably) and **CodeSandbox first for static examples** (where Pitcher-microVM isn't needed).

  Net: all 6 examples now have at least one working sandbox provider after this release.

## 1.0.23

### Patch Changes

- 5435f8b: `pk_demo` documentation sentinel — `publicKey="pk_demo"` now short-circuits to demo mode (same effect as omitting `publicKey` entirely, but self-documenting).

  Until this change, the only way to render the bundled demo content was to omit `publicKey` from the component / web-component / loader. That's fine for production code where the value is dynamic, but in **examples, Storybook stories, and marketing pages** it reads ambiguously: `publicKey={undefined}` could mean "demo on purpose" or "I forgot to wire the env var".

  After this change:

  ```tsx
  <WexioWidget publicKey="pk_demo" />   // ← reads "this is intentionally demo"
  <wexio-widget public-key="pk_demo" /> // ← same on the web component
  ```

  The resolver in `lib/use-widget-config.ts` treats `"pk_demo"` as if `publicKey` were unset:

  1. Mode resolution falls through to `"demo"`.
  2. `fetchWebConfig` is NOT called — the BE never sees the sentinel, so no rejection round-trip.
  3. The bundled `DEMO_CONFIG` (operator-mode mock data) renders.

  Backwards compatible — existing demos that omit `publicKey` continue to work unchanged.

  Surfaces affected (single resolver change covers all of them):

  - `@wexio/messenger-widget-react` — `<WexioWidget publicKey="pk_demo" />`
  - `@wexio/messenger-widget-vue` — `<WexioWidget public-key="pk_demo" />`
  - `@wexio/messenger-widget-angular` — `<wexio-widget-ng publicKey="pk_demo" />`
  - `@wexio/messenger-widget-ember` — `<wexio-widget public-key="pk_demo">` in `.hbs`
  - Web component (`widget.js`) — `<wexio-widget public-key="pk_demo">`
  - Loader (`loader.js`) — `<script data-public-key="pk_demo">`
  - URL param — `?pk=pk_demo`

  The published examples at [`wexiohub/web-widget-examples`](https://github.com/wexiohub/web-widget-examples) now use this sentinel uniformly.

- 5435f8b: v1.0.23 — Native Vue 3, Angular, and Ember integrations alongside the existing React package.

  All three new packages consume the same `widget.js` web-component bundle the React package already ships; the wrappers are intentionally thin (camelCase → kebab-attr binding, `CustomEvent` re-emit, imperative `identify()` passthrough). Same `WidgetShell` runtime, same Shadow-DOM isolation, same visitor-handshake flow.

  - **`@wexio/messenger-widget-vue`** — `defineComponent({ ... })` wrapper with reactive `props.user` watch. Pure ESM JS, no SFC compilation step required. Consumers configure their Vue compiler's `isCustomElement` for `wexio-widget` (one-line Vite / Vue CLI / Nuxt snippet in the README).
  - **`@wexio/messenger-widget-angular`** — Standalone `WexioWidgetComponent` (selector `wexio-widget-ng`) with `@Input()` / `@Output()` / `@ViewChild` plumbing and `CUSTOM_ELEMENTS_SCHEMA`. Drop into any standalone component's `imports`. Prepack uses `ts.transpileModule` (isolated-module pattern, no @angular/core resolution at publish time) to emit ES2022 JS with `__decorate` calls via `tslib`.
  - **`@wexio/messenger-widget-ember`** — Tiny side-effect import + optional `WexioWidgetService` helper. Glimmer renders `<wexio-widget>` as a native DOM element, so no wrapper component needed — consumers use the element directly in `.hbs` templates with `{{on}}` for event binding.

  All four wrapper packages are now in the changesets fixed-version group with `@wexio/widget-private`, so they version + publish together on every release (matching bundle hash → matching package version → no drift).

  Public-boundary types match across all four wrappers: `VisitorIdentity`, `WexioWidgetProps`/`Inputs`, `WexioWidgetEmits`/`Outputs`. Each package hand-rolls its own `.d.ts` (no shared package — keeps each wrapper installable without pulling in the others). The CI boundary check (`scripts/check-public-boundary.mjs`) already covers them since the symbol allow-list is type-name-based, not package-bound.

## 1.0.22

### Patch Changes

- d215d27: v1.0.22 — Demo mode preference changes now propagate widget-wide (no more GraphQL mutations, no more tab-switch resets).

  In v1.0.20 the Profile-tab demo got rendered but every preference change still fired the `UpdateVisitorProfile` GraphQL mutation, and the change was only visible inside the Profile tab itself — switching to another tab reset the language to the browser default and the theme to operator config. Two reasons:

  1. `useApplyPref` always called the Apollo mutation, no `isDummy` branch.
  2. The demo preference state lived inside `ProfileTab`'s local `useState`; `useThemeMode` / `useVisitorProfilePreferences` / `RuntimeIntlProvider` never saw it.

  Fixes:

  - **`useApplyPref`** now takes an optional `onDemoApply` callback. When provided (demo mode), the GraphQL mutation is SKIPPED entirely; the callback writes the change to a global bus + `setRuntimeLocale` still fires for language switches so the live `RuntimeIntlProvider` swap works the same as in live mode.
  - **New `lib/runtime-demo-prefs.ts`** — module-level singleton bus (`setDemoPref` / `useDemoPrefs`) for visitor prefs in demo mode. Same pattern as `runtime-locale.ts`. Holds `themeMode`, `language`, `desktopNotifications`.
  - **`useVisitorProfilePreferences`** accepts an `isDummy` flag. In demo mode it reads from the demo bus instead of the Apollo query (which is skipped). Theme + language + notification consumers across the widget shell see the visitor's demo selections via the same path they use in live mode.
  - **Profile tab** — `applyDemoPref` writes through to `setDemoPref(key, value)` rather than a local `useState`. The `profile` memo merges the demo profile shell with the live bus snapshot so the Profile tab's own preference rows reflect the current bus state on re-mount.
  - **`handleSave` + `handleAvatarFile`** — `isDummy` guards added. In demo mode "Save" flashes the saved chip + clears the edit flag without firing the mutation; avatar upload reads the file as a data URL for local preview only.

  Net effect: changing language / theme / desktop-notifications in the demo Profile tab now flips the chrome immediately and the change persists across tab switches, with zero network calls. Identity-field edits ("Name", "Email", "Phone") commit locally too — save chip flashes, no mutation.

## 1.0.21

### Patch Changes

- 07b73e1: v1.0.21 — Hotfix the Profile-tab demo-mode render loop (regression in v1.0.20).

  Opening the Profile tab in demo mode crashed the entire widget with React error #185 (`Maximum update depth exceeded`). The v1.0.20 demo-mode profile injection called `buildDemoVisitorProfile()` inline in the render body, creating a fresh object identity on every render. The downstream `useEffect([profile, hasEdits])` saw `profile` as "changed" every tick, called `setValues(seedValues(profile))`, triggered a re-render, the inline call produced another fresh object, and the loop never settled.

  Memoised the demo profile via `useMemo([isDummy, locale])` — stable identity per locale, the seeding effect runs once on first paint and stays put.

## 1.0.20

### Patch Changes

- 371833d: v1.0.20 — Search input layout, Profile-tab demo mode, web-component lightbox styles, and demo FAQ URL update.

  **Search input misalignment** — `StickySearchHeader` used an absolutely-positioned icon overlay, which in some Shadow DOM scroll contexts let the icon escape the containing block + pushed the placeholder text onto a second visual line. Switched to a clean flex layout — icon and input now sit on the same row regardless of scroll state or parent positioning. Same code path on Help, News, and any other tab using the header.

  **Profile tab was a title-only placeholder in demo mode** — the `isDummy` short-circuit returned `<h1>{tabName}<p>{subtitle}` and bailed, hiding the avatar hero + field rows + preferences entirely. Now synthesises a `VisitorProfile` (`Avatar`, `Name`, `Email`, `Phone` fields + standard preferences) so the demo tab renders the full UI. Save / mutations are no-ops in demo (existing `isDummy` guards in the mutation paths handle it).

  **Web-component lightbox rendered unstyled** — `<wexio-widget>` never set `env.themeRoot`, so `MediaLightbox`'s portal fell through to `document.body`. Tailwind classes (`bg-black/85`, `fixed`, `z-2147483647`) live in the Shadow DOM's adopted stylesheet and don't reach light-DOM nodes, leaving the lightbox as unstyled inline content visible below the widget panel. Now sets `themeRoot` to the Shadow DOM mount point — portal stays inside the widget's stylesheet scope, lightbox renders correctly. Same root cause as the v1.0.11 React-component fix.

  **Demo FAQ snippet** — the bundled "Install the Wexio widget" article had `https://cdn.wexio.io/loader.js` in the code sample. Updated to the namespaced `https://cdn.wexio.io/widget/loader.js` to match the v1.0.15 CDN restructure. Both `demo.en.json` and `demo.uk.json` updated.

## 1.0.19

### Patch Changes

- a6e6fe7: v1.0.19 — `<wexio-widget mode="demo">` escape hatch + process polyfill on the React-component bundle.

  **`widget-demo.html` was still hitting the API even with no `public-key`** — the web-component bundle has `NEXT_PUBLIC_WEXIO_DEMO_PK` inlined at widget-CI build time as the fallback PK. The bundle was auto-applying it and hitting `/api/web/config/pk_live_…`, turning the public demo into a hidden marketing-integration embed. Two fixes:

  1. **New `<wexio-widget mode="demo">` attribute** — forces the bundled mock content regardless of any PK that would otherwise auto-resolve (env-baked fallback, `?pk=` URL param, even a `public-key` attribute the host left on). When set, `useWidgetConfig` short-circuits the entire PK resolution chain (`env.publicKeyOverride`, `pkFromUrl`, `pkFromEnv` all suppressed) and falls straight through to `DEMO_CONFIG`. `widget-demo.html` now sets `mode="demo"` so the visible demo on `cdn.wexio.io` is a true visitor experience.
  2. **Process polyfill banner on the React-component bundle** — `widget-react-demo.html` was throwing `ReferenceError: process is not defined` at `widget-react-<hash>.js:17:262`. Same polyfill banner the web-component got in v1.0.18 is now on the React bundle too — adds `globalThis.process = { env: {}, nextTick, emit }` at the top of every output file if missing. Transitive deps that touch `process.env.X` / `process.nextTick` / `process.emit` no longer crash on ESM-CDN standalone loads (the npm + Next consumer path is unaffected; Next polyfills `process` itself before reaching this banner).

  The React-component public surface still doesn't accept `mode` — that was deliberately removed in v1.0.6 for the public type surface. The new attribute is web-component only. The React-component standalone ESM-CDN path also relies on the chain working differently: `process.env.NEXT_PUBLIC_WEXIO_DEMO_PK` is NOT pre-substituted by Vite (since v1.0.17), so `readEnvOverride()`'s try/catch returns empty when no consumer bundler ran → `pkFromEnv` is empty → `publicKey` is undefined → demo mode auto-applies. `widget-react-demo.html` now renders the bundled demo without an explicit mode flag.

## 1.0.18

### Patch Changes

- 721874c: v1.0.18 — Vercel deploy recovery + `process is not defined` polyfill for the web-component bundle.

  **Vercel deploys have been failing silently since v1.0.15** — every commit since June 10 deployed-failed, so `cdn.wexio.io` has been serving 14+ hour stale content (loader-demo.html that should have been deleted in v1.0.16 was still served; widget-react-demo.html was still showing pre-restructure URLs; the `/widget/v1.0.17/` directory 404'd). Three causes, all fixed:

  1. **Invalid `vercel.json` schema** — the chunk-rewrite block I added in v1.0.16 had a freeform `"comment"` field. Vercel's schema validator is strict (`Invalid vercel.json - rewrites[5] should NOT have additional property 'comment'`). The comment is gone; the rewrite still works.
  2. **151 MB of sourcemaps in `public/`** — the release workflow was copying `widget.js.map` into every `public/widget/v<ver>/` directory on each release. Each map is ~8 MB, 17+ versions = 151 MB of accumulated maps. The workflow now skips copying maps to pinned-version dirs (latest `widget.js.map` still ships on the CDN for debugging the current release; pinned older versions don't get one). 17 historical map files purged from git in this commit.
  3. **`bot@wexio.io` was rejected as a commit author** by Vercel's GitHub-user attribution (`GitHub user not found`). Workflow now uses `github-actions[bot]` + the matching `41898282+github-actions[bot]@users.noreply.github.com` no-reply address, which Vercel recognises cleanly.

  **`process is not defined` crash on standalone widget.js** — transitive deps (Next runtime checks, EventEmitter shims) touch `process.env.X` / `process.nextTick` / `process.emit` with `X` not covered by our `define` block. The web-component bundle now has a one-line banner injected at the top: `if(typeof globalThis.process==="undefined"){globalThis.process={env:{},nextTick:fn=>setTimeout(fn,0),emit:()=>false}};` — runs once at module load, no perf cost, every dependency that touches `process` gets a safe stub.

  After this release, the existing v1.0.15+ deploys that piled up on Vercel will all roll forward. The demo HTML pages (`widget-demo.html`, `widget-react-demo.html`) and the deleted `loader-demo.html` will reflect their actual repo state instead of pre-v1.0.15 content from the last successful deploy.

## 1.0.17

### Patch Changes

- d31bff9: v1.0.17 — Restore consumer-side env-var propagation for the React package (staging override regression from v1.0.16).

  **Bug**: After v1.0.16 added Vite-side inlining of `process.env.NEXT_PUBLIC_WEXIO_API_URL` to fix the standalone web-component bundle's `ReferenceError: process is not defined`, the SAME inlining accidentally applied to the React-component bundle too. That burned in whatever the widget-CI build env had (almost always empty) BEFORE the consumer's Next/webpack could substitute from THEIR `.env`. Staging deployments setting `NEXT_PUBLIC_WEXIO_API_URL=https://staging.api.wexio.io` saw the var silently ignored — widget hit production API instead, got 404s on staging-only `pk_live_*` keys.

  **Fix**: split the two Vite configs.

  - **`widget.js`** (web-component, script-tag standalone) — Vite still inlines `NEXT_PUBLIC_*` so the bundle is safe to execute in a browser with no `process` global. Build-time env from widget-CI applies (empty → falls through to hostname auto-detect / production default, which is the right behaviour).
  - **`widget-react.js`** (npm package consumed via Next/webpack) — Vite NO LONGER inlines `NEXT_PUBLIC_*`. The literal `process.env.NEXT_PUBLIC_WEXIO_API_URL` survives into `packages/react/dist/` so the deploying app's Next inlines from THEIR `.env` at THEIR build time. Vercel `NEXT_PUBLIC_WEXIO_API_URL` env vars now flow through.
  - **Standalone ESM-CDN load** of `widget-react.js` (no consumer bundler ever ran) — `readEnvOverride()` in `lib/api.ts` wraps `process.env.*` reads in try/catch so the `ReferenceError` is caught and the resolver falls through to hostname auto-detect instead of crashing.

  **Net effect**: `NEXT_PUBLIC_WEXIO_API_URL=https://staging.api.wexio.io` in Vercel's staging env now reaches the widget. The four lower precedence levels (`local.*.wexio.io`, `*.wexio.io` derived `api.*`, plain `localhost`, prod fallback) are unchanged.

## 1.0.16

### Patch Changes

- b4f35d9: v1.0.16 — Followups to the 1.0.15 CDN restructure.

  **`process is not defined` runtime crash in the web-component bundle** — `widget.js` is loaded directly by host browsers via `<script type="module">`, with no Next.js / webpack to inline `process.env.NEXT_PUBLIC_*` at consume time. Two source references (`process.env.NEXT_PUBLIC_WEXIO_API_URL` in `apiBase()`, `process.env.NEXT_PUBLIC_WEXIO_DEMO_PK` in `useWidgetConfig`) were surviving into the bundle and crashing on first call. Vite's `define` block in both library configs (web-component + React-component) now stringifies both vars so they're statically replaced at build time. Same fix for `widget-react.js` so the ESM CDN path also runs standalone.

  **Demo HTML pages were 404'ing chunks** — `widget-react-demo.html` imported from the legacy flat URL `/widget-react.js`. The Vercel rewrite served the main bundle, but the bundle's internal dynamic-import chunks resolve relative to the URL it was LOADED FROM (`cdn.wexio.io/widget-react-<hash>.js`) — and those flat-path chunks 404 because the files live under `/widget/`. Two fixes: (1) Demo pages now import from `/widget/widget-react.js` and `/widget/widget.js` directly (no rewrite hop, chunks resolve correctly). (2) Added chunk-level rewrites to `vercel.json` (`/widget-react-:hash.js` → `/widget/widget-react-:hash.js`) so existing customer embeds pinned to the legacy URL keep working without their host needing to update.

  **`loader-demo.html` deleted** — it was a `next dev`-only harness (`data-public-key="demo"` against a BE key that doesn't exist + `data-origin="http://localhost:3000"`) that couldn't possibly work on the production CDN. Customers visiting `cdn.wexio.io/widget/loader-demo.html` saw a localhost iframe target + a 404 from the BE config endpoint.

  **Welcome page generalised** — `cdn.wexio.io/` will host non-widget Wexio products too, so the welcome blurb no longer reads as widget-specific. Now says "Static asset host for Wexio products" + mentions the per-product namespacing (`/widget/…`).

  **.gitignore cleanup** — the 1.0.15 commit accidentally tracked the React-component build outputs (chunks + main + sourcemap) because `.gitignore` still referenced the old `/public/widget.js` paths. Updated to match the new `/public/widget/...` layout; previously-tracked outputs were removed with `git rm --cached`. CI rebuilds these on every deploy, so removing them from the repo doesn't affect production — just stops bloating commits.

- 1187cd7: `apiBase()` default fallback is now `https://api.wexio.io` instead of `http://localhost:3001`.

  Customer sites embedding the widget (any origin that isn't `*.wexio.io`, `localhost`, or `127.0.0.1`) without an explicit `NEXT_PUBLIC_WEXIO_API_URL` override were falling through to the localhost fallback — a BE the customer obviously isn't running. Every config / GraphQL call from the widget on their host page failed silently.

  New resolution chain:

  1. `NEXT_PUBLIC_WEXIO_API_URL` env override (wins outright)
  2. `local.*.wexio.io` host → cert-backed `https://local.api.wexio.io:3443`
  3. Any `*.wexio.io` host → derived `api.<rest>.wexio.io` (e.g. `staging.app.wexio.io` → `staging.api.wexio.io`)
  4. Plain `localhost` / `127.0.0.1` → `http://localhost:3001` (next dev / Storybook / CI)
  5. Anything else → `https://api.wexio.io` (production)

  Bucket 5 is new — previously it was the localhost fallback. SSR fallback also bumped from localhost to prod (safer default; the widget never fetches during SSR anyway, but tooling that touches this code is happier with a real URL).

## 1.0.15

### Patch Changes

- 9bb3b97: v1.0.15 — CDN URL restructure.

  All script bundles now live under a dedicated `/widget/` namespace on the CDN. **Existing customer embeds keep working unchanged** — Vercel rewrites alias every legacy flat URL onto the new structure.

  **New canonical URLs:**

  | Surface                           | URL                                             |
  | --------------------------------- | ----------------------------------------------- |
  | Script-tag loader (iframe)        | `https://cdn.wexio.io/widget/loader.js`         |
  | Web Component                     | `https://cdn.wexio.io/widget/widget.js`         |
  | ESM CDN of React component        | `https://cdn.wexio.io/widget/widget-react.js`   |
  | Pinned version (any of the above) | `https://cdn.wexio.io/widget/v1.0.15/loader.js` |

  **Legacy URLs (still serve the same files, via rewrites):**

  - `cdn.wexio.io/loader.js` → `/widget/loader.js`
  - `cdn.wexio.io/widget.js` → `/widget/widget.js`
  - `cdn.wexio.io/widget-react.js` → `/widget/widget-react.js`
  - `cdn.wexio.io/loader@1.0.15.js` → `/widget/v1.0.15/loader.js`
  - `cdn.wexio.io/widget@1.0.15.js` → `/widget/v1.0.15/widget.js`

  **What changed on disk:**

  - `public/loader.js` → `public/widget/loader.js` (source)
  - `public/loader@1.0.X.js` + `public/widget@1.0.X.js{,.map}` → `public/widget/v1.0.X/{loader,widget}.js{,.map}` (committed pinned versions, ~50 historical files migrated)
  - `public/*-demo.html` → `public/widget/*-demo.html`
  - Build outputs land in `public/widget/` instead of `public/` — both Vite configs updated.
  - Release sync step in `.github/workflows/release.yml` writes pinned copies to `public/widget/v<ver>/` going forward.
  - Runtime assets (`sounds/`, `logo-*.png`, `marketing/`) STAY at `public/` root — they're version-independent and `assetUrl()` references them via unversioned URLs.

  No widget API / behaviour change. Pure infrastructure cleanup.

## 1.0.14

### Patch Changes

- e68f4c4: v1.0.14 — Strip demo content from production bundle path + CDN cleanup.

  **Demo translations are now fully lazy** — `messages/demo.{en,uk}.json` (~52 KB raw / ~16 KB gzipped) was statically imported by the React-component and web-component entry points and baked into `LOCALE_MESSAGES` for every supported locale. Production visitors with a real `publicKey` never run any code that READS the demo namespace, but the JSON content was still downloaded because the static import made it an eager dependency. Now the entry points ship an empty `demo: {}` stub (just enough to satisfy `useTranslations("demo")`'s hook contract); the real demo namespace is dynamic-imported by `<DemoMessages>` ONLY when `isDummy === true` (no `publicKey` → marketing-page demo flow). Demo-mode visitors pay a one-time ~7 KB gzipped chunk fetch on widget open.

  **CDN home page no longer paints a widget** — `cdn.wexio.io/` (bare visit, no query params) previously rendered `<WidgetShell />` regardless of whether anyone meant to embed a widget. Curious visitors arriving directly at the CDN domain saw a stray chat panel with no context. Now bare `/` serves a small server-rendered welcome blurb with links to `wexio.io` / docs. `/?pk=…` and `/?mode=preview` (the iframe-loader and dashboard-preview targets) keep rendering the widget tree as before — no embed behaviour change.

  **Three dev-harness routes removed** — `/auth`, `/inject`, `/live` were `next dev`-only harnesses for testing JWT/HMAC auth flows + the `configBase` injection path + the BE-fetch config path. None of them ship behaviour useful in production. Deletions trim the deploy and remove three SSR routes from Vercel's function surface.

## 1.0.13

### Patch Changes

- 577fcd0: v1.0.13 — Quick-actions inline layout polish.

  **Cap raised from 4 → 8** to match the dashboard's max-buttons setting. With 5–8 tiles the layout wraps to a second row at 4 columns so per-tile size stays consistent.

  **Fixed tile height** — was `aspect-square` (tile height = tile width), which ballooned to 150–200px tall when only 2–3 tiles shared a row. Now a fixed `h-24` (96px) regardless of count — comfortable room for the 36px icon chip + caption + chrome padding without towering over the home tab.

## 1.0.12

### Patch Changes

- bd8647c: v1.0.12 — Home-block item caps now honour operator intent.

  **`help-search` in manual mode** — the explicit `articleIds[]` list was being silently sliced by the abstract `maxItems` knob. An operator who listed 8 articles + had `maxItems: 4` (a leftover default from when the mode was popular/recent/category) saw only the first 4 rendered. The block now treats the explicit list as the source of truth in manual mode and ignores `maxItems` entirely; `maxItems` still controls the popular / recent / category modes (where there's no operator-supplied list and the BE returns a sorted feed). Sanity-capped at 10.

  **`pinned-articles`** — hardcoded `slice(0, 5)` raised to 10 so longer pinned lists render in full.

  **`news-preview`** — cap raised from 6 to 10 for consistency.

  10 is the "home tab shouldn't fill with hundreds of rows on a config typo" sanity ceiling; well above the 3–8 range operators actually use. Operators with longer feeds should link visitors into the dedicated Help / News tab via the block's "See all" affordance.

## 1.0.11

### Patch Changes

- d8f7fc2: v1.0.11 — Lightbox stacking fix in React-component embed.

  The v1.0.9 launcher-position fix flipped `env.embedded` from `true` → `false` for production React embeds. The lightbox was using `embedded` to decide its portal target — `false` portaled the overlay to `document.body`, OUTSIDE the widget's Shadow DOM where the Tailwind stylesheet lives. As a result the overlay's `position: fixed`, `z-2147483647`, and `bg-black/85` classes silently became no-ops, and the lightbox rendered as plain unstyled inline content — visible behind the host page's sticky header and the widget panel.

  Fix: decouple the portal target from the `embedded` layout flag. The overlay now portals into `env.themeRoot` (the Shadow DOM root) whenever one is available — Tailwind classes resolve to real CSS, `position: fixed` still anchors to the viewport from inside the Shadow tree, and `z-2147483647` puts the overlay above the host page chrome and the widget panel (at z-2147483601). Iframe build keeps falling through to `document.body` (no Shadow DOM there, but the iframe body owns the stylesheet anyway).

  No API surface change — visitors who tap an image in a chat now see the dark full-viewport overlay correctly.

## 1.0.10

### Patch Changes

- b60a0d9: v1.0.10 — Retry flicker fix, dropdown stacking + scroll-lock fix, `onResize` loop fix.

  **Retry no longer reloads the widget** — clicking the auth-error popup's Retry button used to clear `session.error` and set `isAuthenticating=true` in the same tick, which tripped the `authReady` gate (`!!token || !!error`) and unmounted the entire widget for a moment. Now `authReady` is a one-way latch (`useRef`) — once we've ever reached ready, we stay ready for the rest of the mount. Visitors see just the launcher spinning during retries, not a full widget reload.

  **Profile-tab language picker opens correctly + host scroll stays alive** — two related Radix Select issues in the Shadow-DOM React-component embed:

  - Dropdown was opening but rendering behind the widget panel (panel z-index `2147483601`, dropdown z-index `10000`). Bumped dropdown to `2147483602`.
  - Radix `Select.Root` defaults to `modal={true}`, which writes `overflow: hidden` to `document.body` — that lock LEAKED through the Shadow DOM to the host page, freezing the visitor's scroll. The `<Select>` wrapper now defaults to `modal={false}` (outside-click + Escape still close the dropdown via Radix's non-modal path).

  **`onResize` no longer fires on every host re-render** — the resize effect's deps included the whole `env` object. Hosts that pass inline `user={…}` / `configOverride={…}` props to `<WexioWidget>` churn the env's `useMemo` on every render, including window-resize-triggered re-renders, so `onResize` was firing on every host repaint with unchanged dimensions. Switched to a `useRef` for the callback; effect now fires only when widget dimensions actually change (open ↔ closed ↔ expanded).

## 1.0.9

### Patch Changes

- d615857: v1.0.9 — Launcher anchoring fix, invalid-publicKey hide, z-index lift.

  **Launcher position** — React-component embed in `production` / `demo` mode now anchors the launcher + panel to the viewport (`fixed`), matching standard chat-widget conventions. Previously every React embed was treated as "embedded" (container-anchored via `absolute`) so the launcher could land mid-page next to the host's own header. Dashboard preview pane keeps the container-anchored behaviour via `mode === "preview"`.

  **Invalid publicKey hides the widget** — when the BE returns 404 / 403 for `GET /api/web/config/:pk`, the widget now renders nothing instead of silently falling back to bundled demo content. A real visitor browsing a misconfigured host page sees an empty rectangle (the operator's signal to fix the key) instead of a working-looking messenger that talks to no one. Legitimate no-`publicKey` marketing demos still show bundled content as before.

  **Z-index lift** — launcher, panel, launcher-peek bubble, and auth-error popup all moved into the `2147483599 – 2147483601` range so they reliably float above sticky host headers, full-page modals, cookie banners, and other top-layer host chrome. Previously the launcher sat at `z-50` and the panel had no `z-index` at all, so a host `<header class="z-50 sticky">` could clip the widget.

  **New surface field** — `useWidgetConfig()` returns an additional `error: "publicKeyInvalid" | null` discriminator (private surface). Public package consumers don't see it on the type — the widget self-hides via the shell.

## 1.0.8

### Patch Changes

- 0fc6dd0: v1.0.8 — Locale UX overhaul, greeting / block-title localization, brand-icon expansion.

  **Locale picker UX** — always visible in the Profile tab and always lists the full 33-locale set; dropped the gates on `localeStrategy === "DEFAULT"` and `config.supportedLocales` (the operator's `supportedLocales` only filters article-language variants, not UI chrome). The visitor's saved choice already wins over operator strategy via the cookie precedence chain — that resolution is unchanged.

  **Immediate locale switch** — both the React-component and web-component embeds now subscribe to the runtime-locale bus so a Profile-tab language save flips the UI live (no remount, no reload). Previously only the iframe path's `RuntimeIntlProvider` heard the signal.

  **Operator-text localization (greeting + block titles)** — when the visitor's UI locale doesn't share a base language with the integration's `defaultLocale`, the widget swaps operator-written strings for bundled per-locale translations. An English-only operator greeting no longer leaks into a French / Japanese / Arabic session. Affects `config.greeting.{headline,subheadline}` and `block.title` / `block.subtitle` on Quick Actions, Help Search, Pinned Articles, News Preview, Featured Article, Ask Question, Recent Message. New helper: `localizeConfigText` / `useConfigLocalizer` in `lib/localize-config-text.ts`.

  **Brand icons** — 6 new real brand SVGs added: `line`, `facebook`, `twitter` (current X glyph), `linkedin`, `reddit`, `tiktok`. Discord + Slack also got real SVGs (previously only had lucide fallbacks). `HomeQuickActionIcon` gained an optional `colored?: boolean` flag — `false` (default) renders monochrome via `currentColor` so the icon inherits the widget palette; `true` renders official brand colours, with full radial-gradient for Instagram, 4-quadrant multi-fill for Slack, and the cyan/magenta/black layered glyph for TikTok.

  **Surface additions**: `HomeNamedIcon` extended with `line`, `facebook`, `twitter`, `linkedin`, `reddit`, `tiktok`. `HomeQuickActionIcon.colored?: boolean` (optional, defaults to `false` — backwards-compatible). Public `.d.ts` updated. Dashboard FE needs to update the icon picker to surface the new names + the colored toggle (see release notes / repo doc).

## 1.0.7

### Patch Changes

- 5e02004: Switch npm publish auth to OIDC Trusted Publisher. The release workflow no longer needs a long-lived `NPM_TOKEN` secret — GitHub Actions exchanges a short-lived OIDC token for a single-use publish credential, scoped to this repo + `release.yml`. No source / API changes; this is a CI / supply-chain hygiene release.

## 1.0.6

### Patch Changes

- 973358a: Drop `mode` from the public React-component surface. The hand-rolled `.d.ts` previously exposed `mode?: "production" | "demo"`, contradicting `entries/public.ts` which declares `PublicWidgetMode = "production"` only. The widget already auto-resolves to `production` when `publicKey` is set and `demo` (bundled mock content) otherwise — no host needs to force the mode explicitly. Hosts who want a marketing-page demo simply omit `publicKey`. The `preview` / `demo` modes remain on the private surface for the dashboard preview pane.

## 1.0.5

### Patch Changes

- 77c6b95: v1.0.5 — Locales, Cloudflare Turnstile, and live-preview correctness.

  **32 new UI locales** — German, Spanish (+ `es-MX`), French, Italian, Dutch, Portuguese (+ `pt-BR`), Swedish, Danish, Norwegian, Finnish, Polish, Czech, Slovak, Turkish, Romanian, Hungarian, Greek, Arabic, Hebrew, Hindi, Thai, Vietnamese, Indonesian, Japanese, Korean, Chinese (`zh` + `zh-TW`), plus regional English variants `en-US` / `en-GB`. Region-tagged codes (`pt-BR`, `zh-TW`) now match exactly before falling back to the base language.

  **Cloudflare Turnstile end-to-end** — config plumbing (`botProtection.turnstile`), lazy CF script loader, container anchored at the launcher corner, handshake gated on the resulting token, retry popup floating above the launcher on challenge failure. Hosts wire nothing — operator-controlled from the Wexio dashboard.

  **Live-preview fixes** —

  - `localeStrategy` / `defaultLocale` now reflect live in the dashboard preview (bypasses visitor `?lang=` / cookie escape hatches in `preview` mode so the operator's draft strategy actually wins).
  - Theme tokens apply via `useLayoutEffect` (no flash on theme switch).
  - Profile field re-order via `messenger.profile.fields[]`.
  - `supportedLocales` allow-list filters the below-article language picker.
  - `contentLocaleFallback: false` renders an empty "not translated" state instead of the default-locale body when the visitor's locale has no translation.
  - Forced `themeMode: "light" | "dark"` hides the Profile-tab theme row entirely.
  - All four `NextIntlClientProvider` instances pass `timeZone` (silences next-intl `ENVIRONMENT_FALLBACK` warnings).

  **Public surface narrowed** — `locale`, `prefill`, `lightboxViewport` props removed from the React component (operator-side config + Profile-tab language switcher are now the source of truth). `onOpen` callback added. See the package README for the current prop table.

  **Internal cleanups** — slim GraphQL queries for Home-block previews (just id/title, not full fragments); dropdown popovers now portal to the Shadow DOM root (fixes transparent background under React-component embed); sourcemaps excluded from npm tarball (~9 MB → ~3 MB install).

## 1.0.4

### Patch Changes

- d33b6f7: Catch-up release. v1.0.3 published to npm but the dist-repo sync steps were skipped on rerun (Changesets reports `published: false` once a version is already on the registry, even if downstream sync steps failed). This release re-runs the full pipeline on the now-correct PAT-based dist-repo sync. No source changes.

## 1.0.3

### Patch Changes

- 9a3fe35: Validate end-to-end release pipeline on the new PAT-based dist-repo sync (replaces the previous SSH deploy-key approach, which couldn't be reused across multiple dist repos in the same GitHub org). No source changes.

## 1.0.2

### Patch Changes

- 7f1c40d: **Public package polish:**

  - Removed the `mode` prop from `WexioWidgetProps`. It was always locked to `"production"` so it served no purpose on the public surface — preview + demo modes were always dashboard-only. If you had `mode="production"` in your code, just delete it.
  - `lightboxViewport` now defaults to `true` (full-viewport overlay). The previous default contained the gallery inside the widget's host box, which was too small for most floating-launcher embeds. Pass `lightboxViewport={false}` to keep the gallery contained.
  - README: dropped the architecture aside about which fields `InjectableWidgetConfig` excludes (was internal context, not useful to public consumers). Docs URL switched to `learn.wexio.io`.

  **New: `@wexio/widget-private`.** Phase 2 of the distribution split. Same JS runtime as `@wexio/messenger-widget-react`, but the emitted `.d.ts` exposes the dashboard-only props (`mode: "preview" | "demo"`, `configOverride` over the full `WidgetConfig`, `useDummyData`, `previewData`, `WidgetBranding`, `WidgetSecurity`). Not on npm — consumed by the operator dashboard via a git dependency on the private GitHub dist repo (`wexiohub/widget-private`). Versions stay in lock-step with the public package via the Changesets fixed group.

## 1.0.1

### Patch Changes

- bae143e: **Docs + dist-repo layout.** No public API change. Two improvements:

  - **README rewritten** in a more Intercom-style structure: table-of-contents, expanded `window.WexioWidget` method reference (`show` / `hide` / `update` / `shutdown` / `showSpace` / `showMessages` / `showNewMessage` / `showArticle` / `showNews` / `onShow` / `onHide` / `onUnreadCountChange` / `hideNotifications` / `whoami` / `getVisitorId` / `setLocale`), troubleshooting section, multi-framework note, and an author/support footer. License badge swapped to a static MIT badge so it stops showing "Package not found" while the npm registry's aggregate endpoint is still propagating.
  - **Dist repo layout** (`wexiohub/messenger-widget-react`) now nests built artefacts under `dist/` to match the published npm tarball. Top-level: `README.md`, `LICENSE`, `package.json`; chunks + types under `dist/`. Makes the dist repo cleaner to browse and lets consumers install directly via git URL if they need to pin a version that hasn't reached npm yet.

## 1.0.0

### Major Changes

- 68cd830: **Package renamed:** `@wexio/widget-react` is now `@wexio/messenger-widget-react`. Migrate by updating your `package.json` dependency name and changing the import path:

  ```diff
  - import { WexioWidget } from "@wexio/widget-react";
  + import { WexioWidget } from "@wexio/messenger-widget-react";
  ```

  No prop API changes for the public surface in this release. Internally the public/private boundary is now enforced via a separate `entries/public.ts` entry point, so the emitted `.d.ts` no longer leaks dashboard-only props (`mode: "preview" | "demo"`, `configOverride` over the full `WidgetConfig`, `useDummyData`, `previewData`). Operators who only use the documented public props are unaffected. Operators who relied on the leaked private props (which were never documented) need to remove them — they were never intended to ship.

  License changed from `UNLICENSED` to `MIT`.
