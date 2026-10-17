# @wexio/messenger-widget-react

## 1.5.2

### Patch Changes

- 27bb610: Related articles keep their own title in the header and Back returns to where the chain started
- 27bb610: Restore the smooth expand / collapse animation of the open panel (the header "Expand widget" button), which regressed in 1.5.0: the panel grows and shrinks with one spring on width and height again, and in the iframe embed a collapse is no longer clipped by the frame shrinking before the animation ends.

## 1.5.1

### Patch Changes

- 4773a1e: Translations and demo content:

  - 57 widget strings that were still English in 29 locales are now translated (composer formatting, GIPHY picker, offline banner, conversation list empty and error states, "usually replies in…" lines, transcript export).
  - The emoji picker category names, desktop notification titles ("New message", "Image", "Video", "Voice message", "Attachment"), the profile select placeholders and the file attachment fallback follow the visitor's language.
  - The demo conversation is available in all 33 locales (it was English and Ukrainian only), the demo article language switcher offers all of them, and the demo messenger shows the integrations clip as a looping, muted GIF-style video below the PDF.
  - The demo copy no longer reaches the iframe route of live widgets (it is merged only for demo renders), which makes the iframe response smaller.

## 1.5.0

### Minor Changes

- cb1f56b: The operator's `defaultTab` (Home, Messenger, Help, News, Profile) is now applied. The panel used to open on Home for every integration because the landing tab was fixed on the first render, before the config arrived. It now opens on the tab set in the dashboard (a disabled tab still falls back to the first enabled one); a tab the visitor already picked, a deep link, a host `openTab` or a peek action is never overridden. Integrations with a non-Home default tab will see their panel open there. Same in the React, web-component and script-tag embeds.
- cb1f56b: The widget now fails closed (behaviour change, hence minor).

  - A definitive "off" answer from the BE (HTTP 400 / 401 / 403 / 404 on the config, a status other than `active`, or a 403 `webMessengerNotAvailable` / `webMessengerDisabled` on the handshake or a content query) renders nothing in the React, web-component and script-tag embeds, stops the visitor handshake, realtime, tracking and the outbox, and evicts that key's cached config so a later outage cannot bring it back. In the script-tag embed the frame and the attribution link are removed.
  - A transient failure (network, timeout, 5xx) hides the widget unless an earlier `active` answer is cached, in which case it still loads from the cache.
  - With an injected `config` plus a public key, a failed gate fetch used to default to `active` (fail open); it now follows the same policy.
  - Config and gate requests time out after 8 seconds.
  - Unchanged: no public key / demo mode, injected config without a key, and previews that force dummy data.

  See "Failure policy" in `docs/CONFIG_REFERENCE.md`.

- cb1f56b: Web fonts: the list of families the widget will load grows from 10 to 26 (Open Sans, Noto Sans, Source Sans 3, Manrope, Onest, PT Sans, Fira Sans, Jost, Rubik, Comfortaa, Merriweather, Lora, PT Serif, Playfair Display, JetBrains Mono, IBM Plex Mono added). A theme `fontFamily` that starts with a listed family adds one stylesheet link to Google Fonts (`fonts.googleapis.com` / `fonts.gstatic.com`) on the visitor's page, including for a self-hosted copy of the same name: a third-party request (IP disclosed to Google) that a strict CSP (`style-src` / `font-src`) can block, in which case the stack's fallback font is shown. See THEMING.md. Also: `fontFamily` is now validated (the backend's rule) before it is written into CSS, so an unsafe value is ignored and the default font stack applies.
- cb1f56b: Smaller first download (PF-03). Only the resolved language is fetched (one on-demand chunk per locale; English is bundled and renders first, the language swaps in when its chunk arrives, so a slow or failed request never hides the launcher and never shows message keys). The phone validator (libphonenumber) loads on demand when the Profile tab opens. The JS output is whitespace-minified.

  **Layout change of the published bundle (migration note).** The script/web-component `widget.js` is no longer a single file: it imports hash-named siblings `widget-wc-<hash>.js` relative to its own URL. They must be served from the same directory as `widget.js`. `cdn.wexio.io/widget/` and the pinned `cdn.wexio.io/widget/v<version>/` folders do this; the legacy `widget@<version>.js` URL is now a permanent redirect to `widget/v<version>/widget.js` (so chunks resolve in the pinned folder). Self-hosters must copy the whole `public/widget/` folder: copying `widget.js` alone fails to load. A missing lazy chunk degrades gracefully (English, no emoji picker) and logs a `[wexio]` console warning. The React package already shipped `widget-react-<hash>.js` chunks; they now also include one chunk per locale. The latest `widget.js` / `widget-react.js` entries are cached for 60 s without stale-while-revalidate so a cached entry cannot outlive its chunks. Public bundles also ship `LICENSES.txt` with third-party notices.

- cb1f56b: Performance round 2.

  - A feature whose code chunk fails to load (emoji picker, GIF picker, voice recorder, voice waveform, article views) now retries automatically, then shows a small inline "Couldn't load - Retry" instead of staying broken until the page is reloaded. A language chunk that fails keeps English and retries quietly. (In the script-tag / iframe embed the frame's runtime remembers a failed chunk, so Retry only helps in the React and web-component embeds there.)
  - Voice notes follow iOS Safari's audio rules: nothing is decoded or played before the visitor taps, hovering only warms the code, a note whose waveform cannot be built falls back to the browser's own player (or an "Open audio" link), and only one note plays at a time.
  - The closed launcher in the iframe embed no longer re-measures itself on every thread event that changes nothing.

### Patch Changes

- cb1f56b: Conversation review fixes.

  - Loading older history no longer pulls a reader who scrolled up to the bottom when the newest message is their own; only a real send of their own scrolls to the new bubble.
  - `Wexio('shutdown')` now also forgets unsent drafts and the offline queue of unsent messages, so the next visitor on a shared device never sees or sends the previous visitor's text. Drafts are scoped per integration.
  - An edit of a message older than the loaded history no longer appears as a new message at the bottom; it applies once that message loads. An edit that blanks a message keeps the previous text.
  - Closing the panel discards an unsent voice recording (it is not saved or sent).

- cb1f56b: Conversation fixes from the UI audit.

  - A message queued (for example offline) in one thread no longer shows up inside another thread.
  - Long unbroken text, long links and wide HTML tables stay inside the message bubble (tables scroll inside it).
  - The visitor's own send scrolls to the new bubble even when they had scrolled up, and resizing the panel (window, rotation, keyboard) keeps the newest message in view.
  - Closing the panel stops a voice recording and releases the microphone.
  - Realtime events with nothing to show (location, reaction, unknown kinds) are no longer messages (no blank bubble, chime or notification), and edited messages (`messageUpdate`) now update in place.
  - An unsent draft is kept per thread when the visitor leaves and re-enters it.
  - Demo: the sent exchange survives re-entering the thread, an attachment-only send shows the attachment, and the voice-note reply is localised (en, uk).

- cb1f56b: Home, Help and News audit fixes.

  - A partial or malformed news / help reply (null list, missing `items` / `meta`) no longer crashes the widget; the news unread check that runs in the shell took the launcher down with it.
  - A visitor session whose handshake reply lacks a usable `expiresIn` no longer starts an endless immediate re-handshake loop (renewal is clamped and backs off; very long lifetimes no longer overflow the timer).
  - A failed "next page" request in News / Help no longer raises an unhandled error; scrolling again retries.
  - Long unbroken text (URLs, tokens) in news cards, help rows and article titles, tags and prose wraps inside the panel instead of being clipped.
  - RTL: Home / Help / News content now follows the panel direction (it was forced left-to-right), directional arrows and chevrons mirror, cards align to the start edge, and the Arabic team-status copy is translated.
  - Accessibility: the Home card "see all" button has an accessible name; opening an article by keyboard keeps focus in the panel.
  - Quick-action `open-url` only opens http(s), mailto, tel and sms links; a malformed home layout (no buttons, null block) no longer breaks the Home tab.
  - Demo mode: lists show a skeleton while the demo content loads (no blank cards), and a failed demo chunk load no longer raises an unhandled error.

- cb1f56b: Launcher and open/close fixes across the three embeds (React, web-component, script tag).

  - Script tag: closing the panel with the header X no longer hides the whole frame. The launcher used to disappear until the host called `Wexio('show')`; now it stays and the frame shrinks to the launcher.
  - Script tag: the open panel's drop shadow is no longer cut off in a hard edge at the frame's left and top; the frame leaves room for it. Closing no longer clips the panel while it fades out (the frame waits for the fade), and the auth-error popup ("Couldn't connect") is no longer clipped by the small closed frame.
  - Web-component and React: Tailwind shadows, rings and `--tw-*` utilities work again inside the Shadow DOM (an unlayered defaults block was resetting them), so the launcher has its drop shadow and keyboard focus ring. Host page text styles (`letter-spacing`, `text-transform`, `font-style`, `text-align`, `word-break`, `hyphens`, `visibility`, `pointer-events`, `cursor`, ...) no longer leak into the widget. A root font size on the host `<html>` (for example `62.5%`) still scales the web-component and React widget (documented; the script tag is unaffected).
  - The launcher peek keeps its dismiss X reachable with many quick replies or on a short screen: in the web-component and React embeds it is capped to the viewport, in the script tag the frame grows to fit it and, when the host page clamps the frame, the peek is capped to what remains. The message text keeps priority; the quick replies scroll.
  - Keyboard: opening from the launcher moves focus into the panel, closing returns it to the launcher, and Escape closes the panel. Escape that cancels an IME composition or the link field does not close the panel.
  - **Behaviour change (kept on purpose):** `onClose` / `wexio:close` now fire whenever the panel closes (header X, launcher button, Escape), not only for the header X, and `onOpen` / `wexio:open` fire on every open. The script-tag embed now emits `wexio:open` / `wexio:close` window events as documented. **Migration:** a host that unmounts the widget in `onClose` will now remove the launcher on every close; use CSS or state that keeps the component mounted, or ignore the callback.
  - Script tag: the `wexio:resize` sizes grew (the open frame is 96 px wider and 144 px taller than the panel to hold its margins and shadow, 516 x 814 for a default 420 x 670 panel); consumers sizing a container from them see new numbers.
  - Arabic and Hebrew set the document direction from the widget locale in every embed (the iframe never did; the web-component only followed the host page). Other locales keep inheriting the host page's direction in the web-component and React. This is the base direction only: full right to left layout polish (physical margins, paddings and alignments) is not part of this release; the Home tab card buttons now align with the direction.
  - `prefers-reduced-motion` is honoured: the panel slide, launcher morph, badge pulse and peek pop-in no longer play, and looping CSS animations (typing dots, pulse) stop. Opacity fades, the loading spinner (slowly) and width/height springs still animate.
  - **Visible change:** on a clean host page the web-component and React widget now renders in `system-ui` instead of inheriting the host page font (the iframe/script tag embed is unchanged). The operator theme font (`--wx-font`) still wins. Host `-webkit-text-fill-color` no longer recolours the widget text.
  - Escape closes the emoji picker and then the panel in the web-component and React embeds (focus used to fall to the page body after the picker closed), and focus returns to the emoji button.

- cb1f56b: Performance fixes for long conversations.

  - Typing in the composer, the operator's typing indicator and an incoming message no longer re-render every message in the thread. On a 500-message thread with a 4x slower CPU, typing 35 characters was 37 long tasks (about 3 s of blocked main thread) and is now none; an incoming message costs less than half of what it did.
  - The history is mapped once per fetch instead of once per incoming message, and the tracking context no longer hands every message bubble a new value on each update (which made memoisation useless). An inbound message that arrives while the panel is closed no longer re-renders the hidden thread: six messages on a 500-message thread went from about 1-1.6 s of long tasks to 0.2-0.4 s at 4x CPU.
  - Message bubbles no longer use framer-motion `layout="position"`, so a bubble is not re-measured on every update. Nothing visible changes: new bubbles still slide in, the unread divider still collapses.
  - Voice notes no longer block the main thread when a conversation opens. They used to start decoding the audio as soon as they appeared, one stall of 200-470 ms for a thread with voice notes; now each is a light static row (play button, stand-in waveform) until the visitor hovers, focuses or presses play, and then plays as before.
  - A tab that fails to render (for example a malformed payload from the server) no longer blanks the whole widget. The tab shows one calm "Something went wrong" state with a "Try again" button, the launcher and the tab bar keep working, and the failure is reported once through `console.error` with a `[wexio]` prefix. New translation keys `tabError.title`, `tabError.hint`, `tabError.retry` in all 33 locales.

- cb1f56b: Security hardening of the embeds.

  - A host config patch (`wexioSettings.configOverride`, the React `configOverride` prop, `wexio:config-override:v1` messages) can no longer change `status`, `branding` or the BE-owned parts of `security` in production: the "Powered by" badge, the plan gate and the sign-in gate come from the server only. Theme, features, greeting and the other presentation fields are unaffected. In a public build the patch is filtered whenever a real public key is present, on every channel, whatever `mode` the host sets, and also when the patch was posted before the key was set (the filter runs when the config is read). Key-less demo content and the private dashboard build apply the full patch.
  - The widget now accepts `wexio:*` messages (identify, prefill, shutdown, config override, theme, host navigation) only from its own parent window (iframe) or its own window (web-component, React). A page that frames or opens the customer site can no longer bind the visitor to its identity, wipe the session or restyle the widget.
  - Script tag: the widget iframe is no longer delegated clipboard read or write access (`allow="autoplay; microphone"`); the widget never used either.
  - Script tag: operator or RSS article HTML can no longer make the closed iframe cover the host page. The launcher, peek and popup are found by element identity instead of a `data-wx-*` attribute lookup, and `data-wx-*` attributes are dropped from rendered content.
  - The trusted-host flag is a build-time constant of the private build only; the release boundary check fails if a public bundle carries it.
  - Escape at the page body no longer closes the open panel while a host modal (`<dialog open>`, `aria-modal`) is open.

- cb1f56b: Threads, sign-in and profile fixes.

  - `Wexio('shutdown')` now also forgets the previous visitor's thread list, unread badge, open conversation and profile form; the next visitor starts from an empty widget.
  - The thread list catches up after a dropped connection, the network coming back or the tab becoming visible again, and an older or replayed update no longer overwrites a newer preview (or chimes again).
  - Profile: text typed while a save is in flight is kept; an offline or demo save keeps the new value; a change the server rejects rolls back with a message; the form shows the widget's own validation messages instead of the browser's bubble.
  - Sign-in: "Try again" works after a blocked Turnstile script and brings the error popup back if it fails again; the Google button shows a busy state and a clear message when Google's script cannot load.
  - Pressing Enter repeatedly while a required pre-chat form submits sends the message once.
  - The "You:" prefix in the conversation list is translated (English and Ukrainian; other languages show the English text for now).
  - Web component: a language picked in Profile switches the widget at once.
  - Two widgets with different public keys on one page each use their own key, session and drafts.
  - Wide tables in messages scroll inside the bubble and keep their words whole.
  - Behaviour note: `setWexioPublicKey`, `setPublicKey` and `getApolloClient` only act on the default instance (the iframe route and non-component code). They no longer affect a `<WexioWidget>` or `<wexio-widget>`, which each own their connection state and take the key from the `publicKey` prop / `public-key` attribute.
  - A language the server rejects in Profile is rolled back in the widget chrome too, not only in the form.

- cb1f56b: The offline cache (config, gate and the other offline slices) now lives 72 hours instead of 14 days, so a downgraded or disabled key does not keep the widget alive from the cache for weeks during an API outage. Expired entries are treated as absent and evicted.
- cb1f56b: Changing the public key at runtime (`<WexioWidget publicKey>` prop, the `public-key` attribute) now starts a fresh widget session: the instance (token, Apollo cache, 401 recovery) and the widget tree are rebuilt, so nothing of the previous integration's visitor reaches the new one. An integration whose Home was never customised (the BE sends `homeLayout: []`) now shows the default Home blocks instead of a blank tab.

  Key policy: a key change while the panel is open now reports `onClose` / `wexio:close` for the old widget (the same applies when the host unmounts an open widget); an empty key then the real key is a normal first mount; a key that goes empty and returns within 400 ms keeps the widget and its open chat; empty for longer shows the demo.

  `homeLayout: []` from the BE is deliberately treated as "never customised": the widget shows the bundled default Home blocks (the BE returns `[]` where its entity default is `null` and cannot tell never-customised from emptied, and a Home with no blocks is meaningless). A Home cannot be deliberately emptied.

- cb1f56b: Fix: an integration whose default tab is "Messenger" now opens the Messages tab (the backend value was lowercased to an unknown tab id and the widget fell back to Home).
- cb1f56b: Demo mode: the related news and help-article lists are derived from the demo data and their toggles work. Real widgets are unchanged.
- cb1f56b: The conversation stays on the newest message when its content grows late: a video tile now reserves its box before the poster or first frame arrives (it was 0px tall, then grew by ~165px), and a reader pinned to the bottom keeps following content that settles at any time, not only for 2 s after the thread opened.
- cb1f56b: Fix the launcher's double focus ring and the cut-off shadow under the peek quick-reply chips.

  After a click the launcher stayed focused, and the next key press anywhere (an arrow or space scrolling the host page) made the browser show its keyboard ring, so a dark double ring popped onto the button out of nowhere. Focus that came from a pointer no longer draws the ring; keyboard focus still does. The quick-reply chip list also clipped each chip's drop shadow in a hard straight edge; its clip box now contains the shadow.

- cb1f56b: Expanding and collapsing the panel no longer animates its width and height every frame (a full layout of the thread per frame, which stuttered on phone-class CPUs with a long conversation). The panel now snaps to its final size and a compositor-only transform plays the same spring on top, so it looks the same but costs a handful of layouts instead of about 40. The content is never stretched, the iframe embed behaves the same, and `prefers-reduced-motion` snaps straight to the new size.
- cb1f56b: Docs: every package README links the new Playground (https://cdn.wexio.io/playground), which replaces the StackBlitz / CodeSandbox demos; the examples repository README points there too.
- cb1f56b: UI polish: messages and the opening conversation rise in like llm-console (gentle-in, last rows staggered, reduced motion = none); the unread badge only fades; the launcher no longer swaps its icon for a spinner while connecting; the demo conversation opens at the newest message.

## 1.4.1

### Patch Changes

- 9383463: Fix the widget still rendering on a site after the operator disabled it.

  When an integration is `disabled` (operator kill switch) or `plan_blocked` (org below the required plan), the backend correctly answers `status: 'disabled' | 'plan_blocked'`, and the contract is that the launcher hides silently. Only the script-tag loader honoured that (it checks the status before creating its iframe). The React and web-component embeds mount the widget shell directly and never looked at `status`, so they painted a live launcher whose session the backend then refused, and the widget opened straight into an error. The shell now renders nothing for any status other than `active`, so all embeds behave the same. `status` is server-owned (never taken from host props) and falls back to `active` if the gate request fails, so an outage cannot hide a working widget.

## 1.4.0

### Minor Changes

- 784e291: Same host controls on every embed (React, web-component, script-tag/iframe), plus a batch of embed fixes.

  **New**

  - **Theme control.** `theme` prop (React) / `theme="light|dark|auto"` attribute (web-component) / `window.Wexio('theme', ...)` and `wexioSettings.theme` (script tag). A host dark-mode toggle can drive the widget at runtime; it wins over the OS and the operator default.
  - **Launcher offset.** `offset={{ x, y }}` (React) / `offset-x`, `offset-y` attributes (web-component) / `wexioSettings.offset` (script tag) nudge the launcher, peek and panel away from their corner so they clear host furniture (cookie banners, back-to-top). Panel size caps subtract the same offset, so a pushed-up panel never overflows the top of the viewport.
  - **Branding override everywhere.** `configOverride` is honoured by all three embeds (React prop, `wexioSettings.configOverride`, and `wexio:config-override:v1` messages for live changes).
  - **Events and identity parity.** The web-component now fires `wexio:open` and reads `wexioSettings.user`; the script-tag embed re-emits `wexio:open` / `wexio:close` / `wexio:resize` as `window` events and accepts `wexioSettings.mode`.
  - **Launcher position in the iframe.** The operator's left/right launcher corner now moves the frame accordingly.

  **Fixed**

  - **Widget crashed on every site ("This page couldn't load").** The iframe route got a fresh default env on every render, so any config error (403/404) looped effects forever. The env is now stable.
  - **iframe app returned 500 for most locales** (`en-GB`, `de`, `fr`, ...): the server imported a `demo.<locale>.json` that only exists for `en` and `uk`. It now falls back to English.
  - **Web-component ignored theme colours.** Theme tokens were injected into the page `<head>`, which cannot reach the widget's Shadow DOM; they are now adopted into the shadow root, like the React embed.
  - **iframe sizing and position.** The panel was a smaller copy (~338x558 instead of 420x670) and sat 20px further from the corner than the other embeds; it now matches. The closed launcher frame fits the unread badge, shadow and peek bubble instead of clipping them, the panel no longer slowly rises from the bottom when opening, and a crashed widget stays a small corner box instead of covering the page.
  - **Conversation-header menu closed while typing.** The header was remounted on every shell re-render.
  - **Demo mode.** The FAQ tab no longer crashes on search before the demo content loads, and the demo conversation's quick-reply buttons and attachment names are no longer blank.

## 1.3.1

### Patch Changes

- 231e345: Fix the widget when it runs embedded inside a host app (the dashboard's live preview / the React-component embed).

  - **Demo content no longer breaks the host page.** In demo/preview mode the mock threads, help articles and news are now read straight from the widget's bundled demo content instead of next-intl's lazy `demo` namespace. Inside an embedded host (Turbopack) that lazy namespace was not visible to the demo builders, so previews rendered empty and logged `MISSING_MESSAGE` for every key, and the thread-list builder crashed the whole host page with "map is not a function". The builders are also guarded so a not-yet-resolved value degrades to empty instead of throwing.
  - **Pickers and menus are clickable inside the Shadow DOM embed.** The GIF and emoji pickers, the conversation-header overflow menu, the language selector and the composer commands popover used a document-level click-outside check against `event.target`. In the Shadow DOM embed that target is retargeted to the shadow host, so every in-picker click read as "outside" and closed the popover on mousedown before the click landed (a GIF/sticker/emoji tap "fell through"). They now test `event.composedPath()`, which pierces the shadow boundary and is unchanged for the iframe / standalone embeds.
  - **team-status "online" dot alignment.** The status dot is now aligned to the title's first line instead of drifting above it when operator avatars make the row taller.

## 1.3.0

### Minor Changes

- 037c210: Full two-way messaging: multi-topic threads, offline outbox, blocked visitors, richer composer, and transcript download.

  **Multi-topic conversation threads**

  - A multi-topic conversation list: the visitor can keep several topics side by side, each with its own preview, unread count, and status (open / pending / resolved). Starting a new question opens a fresh thread instead of overwriting the current one.
  - The launcher badge, peek, thread list, and open thread now share one unread source, so reading a message clears it everywhere at once. Quick-reply chips render inside the launcher peek so a visitor can answer without opening the panel.
  - Per-thread realtime: typing, unread, operator-handoff and status changes update the right thread live.

  **Blocked visitors**

  - Two levels of blocking are now honored on the client. **Thread-level**: the visitor can't reply in that thread but can still start a new one. **Global (contact-level)**: no composer anywhere and no new conversations, with friendly copy. The block is enforced on first paint (so a blocked visitor never sees a live composer) and kept current via the realtime stream. Blocked sends are dropped from the offline queue instead of retrying forever.

  **Offline outbox**

  - A generic IndexedDB queue backs the visitor's outbound actions — message sends, reactions, read receipts, profile changes, and activity tracking. Actions taken offline (or mid-reconnect) are persisted and converge automatically when the connection returns, so nothing is silently lost.

  **Composer**

  - Rich-text editing (bold / lists / links, Markdown-aware) and a GIF / sticker picker join the existing emoji picker, file attachments, and voice recorder.

  **Conversation lifecycle**

  - Download a conversation transcript from the header.
  - A clearer "conversation closed" state with a one-tap "start a new conversation".
  - A connection-status footer replaces the old branding footer, so a dropped connection is visible in-thread.

  **Reliability**

  - A code-split chunk that can't be fetched (for example the voice-note player while offline) now degrades gracefully to a fallback instead of breaking the whole conversation.

  **Captured visitors (lazy inbox)**

  - A drive-by visitor no longer opens a conversation until they actually engage. When there is nothing in the inbox yet, a configured welcome message shows as a default thread the visitor can read and reply in, rather than an empty "no conversations" screen — and the proactive welcome peek + badge appear once, then clear after it is read.
  - A first message (or an operator's proactive message) creates the conversation on the fly and its reply, greeting, and typing now render live in-thread — no reload, and no double launcher peek when a greeting flow is active.
  - Sent-message stability: the visitor's own bubble no longer flickers (animate out then back in) when the thread refetches after a send, and switching a thread's conversation id no longer remounts the open thread.

  **Media message previews**

  - A thread whose last message is a photo, video, gif, sticker, voice note, audio, or file now shows a typed label + thumbnail in the thread list and launcher peek, instead of a blank row.

  **i18n**

  - New conversation, thread, block, and transcript strings across all supported UI locales.

  No breaking changes to the package API — `publicKey`, `user`, `config`, and the `onOpen` / `onClose` / `onResize` callbacks are unchanged.

## 1.2.4

### Patch Changes

- 4215287: Re-publish to complete the release across all distribution channels (npm, the per-package dist repos, GitHub Releases, and the CDN bundle) after the 1.2.3 publish only partially completed. No functional changes from 1.2.3.

## 1.2.3

### Patch Changes

- 146aa5f: Make notification sounds far lighter, two changes:

  1. **Lazy loading.** The inbound/outbound `Audio` elements were built with `preload="auto"`, so both sound files were fetched on every page load the widget was embedded on, even for visitors who never opened the chat. They now use `preload="none"` (with `src` set after `preload`), so a sound downloads lazily on its first `play()`, which is always user-gesture triggered.

  2. **MP3 instead of WAV.** The 21 preset sounds were uncompressed WAV (~17MB total, individual files up to ~1.7MB). They are now 128kbps MP3 (~2MB total, ~16-52KB each). Preset ids resolve to `/sounds/wx-nt_*.mp3`; operator-uploaded custom sounds (full URLs) are unaffected.

  Together this removes ~3.6MB from the host page's initial load and makes the lazy first-play near-instant. No API or behavior change.

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

  - **README rewritten** with a clearer structure: table-of-contents, expanded `window.WexioWidget` method reference (`show` / `hide` / `update` / `shutdown` / `showSpace` / `showMessages` / `showNewMessage` / `showArticle` / `showNews` / `onShow` / `onHide` / `onUnreadCountChange` / `hideNotifications` / `whoami` / `getVisitorId` / `setLocale`), troubleshooting section, multi-framework note, and an author/support footer. License badge swapped to a static MIT badge so it stops showing "Package not found" while the npm registry's aggregate endpoint is still propagating.
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
