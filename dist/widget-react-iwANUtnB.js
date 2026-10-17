globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Hi there 👋 Thanks for reaching out. I'll get back to you shortly…`,ageLabel:`4h`},t={"demo-news-1":{title:`Pioneer 2026: save the date`,excerpt:`We're back in San Francisco on October 8. Doors at 9, keynote at 10.`,body:`## What to expect

This year's keynote is all about what we shipped in the open and what's coming next. Live demos, not slides.

- **The Gaia roadmap** - where our AI is headed over the next two quarters.
- **Customer stories** - three teams share how they halved first-response time.
- **Hands-on labs** - bring a laptop and build a flow with our engineers.

## Getting there

The venue is the Pier 27 Cruise Terminal, right on the Embarcadero. Closest BART stop is Embarcadero, a 12-minute walk along the water.

## Tickets

Early-bird seats are limited and go live next week. Existing customers get first dibs, so keep an eye on your inbox.

> Can't make it in person? The keynote streams live and the recordings land here the same evening.`},"demo-news-2":{title:`What shipped in April`,excerpt:`Three new automation triggers and a much faster inbox search.`,body:`<p>April was a big month. Here's everything that shipped, at a glance:</p>
<table>
<thead><tr><th>Area</th><th>What changed</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Inbox search</td><td>Instant, as-you-type results</td><td>50k conversations, under 100ms</td></tr>
<tr><td>Automation</td><td>Three new triggers</td><td>Cart abandoned, page revisited, quiet visitor</td></tr>
<tr><td>Composer</td><td>Draft survives a tab switch</td><td>No more lost half-typed replies</td></tr>
<tr><td>Dark mode</td><td>No white flash on first paint</td><td>Cleaner load on dark sites</td></tr>
</tbody>
</table>
<p>Here's the new search in action - results land before you finish typing:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Inbox search returning results instantly" />
<p>Tap the image to take a closer look. Got a request? Reply here - we read every one.</p>`},"demo-news-3":{title:`Gaia now speaks 28 languages`,excerpt:`Auto-detect the visitor's language or pin one. No extra setup.`,body:`<p>Gaia now replies in 28 languages, detected automatically from the visitor's first message. The questions we hear most:</p>
<details><summary>How does language detection work?</summary><p>Gaia reads the opening message and replies in the same language. If your help articles exist in that language it cites them; otherwise it answers from the closest match and flags the gap to you.</p></details>
<details><summary>Can I force a single language?</summary><p>Yes. Pin one in <strong>Settings → AI → Language</strong> and Gaia sticks to it no matter what the visitor types.</p></details>
<details><summary>What do operators see?</summary><p>Transcripts stay in your team's language, with the original message kept alongside the translation.</p></details>
<p>A quick look at Gaia switching languages mid-thread:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia replying across several languages" />`},"demo-news-4":{title:`Pipe conversations straight into Slack`,excerpt:`Connect any incoming webhook to a Slack channel. No glue code.`,body:`## Connect in two clicks

Head to **Integrations → Slack**, hit *Connect*, and approve the scopes. Pick the channel new conversations should land in - most teams use \`#support\`.

## What you get

- A Slack message the moment a chat starts, with a link back to the inbox.
- Operator replies threaded under the original message.
- Reply right from Slack and we post it back to the visitor in real time.

## Webhooks too

Already pushing events from your own systems? Point any webhook at your Slack channel and skip the custom integration entirely.`},"demo-news-5":{title:`Inbox 2.0: triage without the mouse`,excerpt:`New shortcuts for assigning, snoozing, and resolving - all from the keyboard.`,body:`<p>Inbox 2.0 is keyboard-first. Here's the cheat sheet, grouped by what you're doing:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Navigate</div><ul><li><code>j</code> / <code>k</code> - next / previous conversation</li><li><code>g</code> then <code>i</code> - jump to the inbox</li></ul></div>
<div data-type="tab"><div data-tab-label>Act</div><ul><li><code>e</code> - resolve</li><li><code>a</code> - assign to me</li><li><code>s</code> - snooze</li></ul></div>
<div data-type="tab"><div data-tab-label>Compose</div><ul><li><code>Cmd+Enter</code> - send</li><li><code>/</code> - saved replies</li><li><code>Cmd+K</code> - command palette</li></ul></div>
</div>
<p>The redesigned inbox - everything within a key's reach:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="The redesigned keyboard-first inbox" />`},"demo-news-6":{title:`Self-serve data exports and deletion`,excerpt:`Handle visitor data requests in a click. GDPR-ready out of the box.`,body:`## Export

From any visitor's profile, hit **Export data** to generate a JSON bundle of every message, event, and attribute we hold for them. It downloads instantly and logs the request for your records.

## Delete

**Delete data** removes the visitor and scrubs their messages from the inbox, search, and any connected CRM through the same webhook bridge. The action is logged and irreversible.

## For your DPO

- Every export and deletion is timestamped and attributed.
- Retention windows are configurable per workspace.
- A data-processing agreement is available on request.`},"demo-news-7":{title:`Mobile SDK beta: iOS and Android`,excerpt:`Bring the same conversation into your native app. Beta seats open now.`,body:`## One conversation, every surface

A visitor who starts a chat on your website can pick it up in your app, signed in, with full history. Same Gaia, same operators, same inbox.

## What's in the beta

- Native launcher for SwiftUI and Jetpack Compose.
- Push notifications for new replies.
- Offline queue, so messages send when the connection comes back.

## Join

We're onboarding a handful of teams each week. Reply here with your platform and rough monthly active users and we'll send you a key.

> Beta means rough edges. We ship fixes weekly and read every bug report.`},"demo-news-8":{title:`See which AI answers actually worked`,excerpt:`Track whether each Gaia reply led to a resolution, a handoff, or a bounce.`,body:`## The new view

**Analytics → AI outcomes** breaks down every Gaia reply by what happened next:

- **Resolved** - the visitor got what they needed and left happy.
- **Handed off** - Gaia passed the conversation to a human.
- **Bounced** - the visitor closed the widget without resolving.

## Per-article insight

Drill into any help article to see how often Gaia cites it and whether those citations resolve. Low resolution on a high-traffic article usually means the content needs a rewrite, not the AI.

## Act on it

Sort by bounce rate to find the questions Gaia struggles with most, then add a flow or a sharper article to close the gap.`},tags:{events:`Events`,product:`Product`,release:`Release`,ai:`AI`,languages:`Languages`,integrations:`Integrations`,slack:`Slack`,inbox:`Inbox`,privacy:`Privacy`,security:`Security`,mobile:`Mobile`,beta:`Beta`,analytics:`Analytics`},categories:{company:`Company`,product:`Product`,engineering:`Engineering`}},n={categories:{"demo-cat-getting-started":{title:`Getting started`,description:`Install the widget and configure your first conversation.`},"demo-cat-automation":{title:`Automation`,description:`Flows, triggers, and the AI auto-reply.`},"demo-cat-integrations":{title:`Integrations`,description:`Connect your CRM, Slack, and CMS.`},"demo-cat-billing":{title:`Billing & plans`,description:`Pricing tiers, invoices, and seat management.`}},articles:{"demo-article-install":{title:`Install the Wexio widget on your site`,excerpt:`A 30-second snippet you paste before the closing </body> tag.`,body:`## Add the loader script

Paste this snippet into every page where you want the widget to appear:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

The loader injects a floating launcher in the bottom-right corner. Click it to open the chat panel.

## Verify the install

- Visit a page that includes the snippet.
- Open the browser console.
- You should see \`[wexio] widget mounted\`.

## Customise the look

The widget reads brand colours from your dashboard. Update them in **Settings → Brand**.

> Need a hand? Tap "Still need help? Message us" below and we'll walk you through it.`},"demo-article-flows":{title:`Build your first automation flow`,excerpt:`Drag, drop, and ship a welcome bot in under five minutes.`,body:`## What's a flow?

A flow is a tiny tree of conversation steps - questions, replies, and conditions - that runs whenever a visitor matches a trigger.

## Three trigger types

1. **Visitor opened the widget** - greet first-timers.
2. **Visitor asked a question** - Gaia (AI) tries to answer; if it can't, the flow takes over.
3. **Webhook received** - your CMS or e-commerce platform pushes an event; the flow kicks off in the right chat.

## Best practices

- Keep first replies under 80 characters.
- Offer 2-3 quick-reply chips, not a free-text question.
- Always provide an escape hatch - *"Talk to a human"*.`},"demo-article-slack":{title:`Forward chats to Slack`,excerpt:`Mirror every new conversation into a Slack channel of your choice.`,body:`## Connect your workspace

In **Integrations → Slack** click *Connect*. You'll be redirected to Slack's OAuth screen - approve the requested scopes (\`chat:write\`, \`channels:read\`).

## Pick a channel

After authorising, choose the target channel (or create a new one like \`#support\`).

## What gets forwarded

- The opening message, with a deeplink back to the wexio inbox.
- Operator replies as threaded messages.
- Visitor replies in real time via the SSE bridge.

## Reverse direction

Operators can reply *from* Slack - wexio listens for Slack thread replies and posts them back to the widget.`},"demo-article-billing":{title:`Update your plan and billing details`,excerpt:`Switch tiers, change card, or download invoices.`,body:`## Plans

- **Free** - 1 widget, basic features, "Powered by Wexio" badge.
- **Standard** - unlimited widgets, automations, integrations.
- **Enterprise** - white-label, SLA, dedicated support.

## Change plan

**Settings → Billing → Change plan**. Upgrades take effect immediately; downgrades apply at the end of the current cycle.

## Invoices

Download every invoice as PDF from **Billing → History**. We also email a copy on each renewal.`},"demo-article-theme":{title:`Customise the widget theme`,excerpt:`Match the widget to your brand - colours, radii, dark mode.`,body:`## Brand colours

In **Settings → Brand**, set:

- **Primary** - drives the launcher, send button, focus rings.
- **Background** - the panel surface (light) and dark-mode pair.

## Radii

Pick from \`sm\`, \`md\`, \`lg\` for a tighter or softer look. The change applies live to every widget on every page.

## Dark mode

Default = follow the visitor's system preference. Pin to **always light** or **always dark** if your site doesn't support dark mode itself.`},"demo-article-handoff":{title:`Hand off from Gaia to a human operator`,excerpt:`When AI isn't enough - route the visitor to a teammate.`,body:`## Triggers

Gaia hands off automatically when:

- The visitor types *"talk to a human"* (or any localised variant).
- The same question is asked twice with no resolution.
- The visitor's intent matches a routing rule (e.g., billing → finance team).

## Routing

Set up **Routing → Rules** to direct certain intents to specific teams or operators. Round-robin and least-loaded are both supported.

## Out-of-hours

If no operator is online, Gaia offers a callback or email-handoff form instead of pretending someone's available.`},"demo-article-crm":{title:`Sync conversations to your CRM`,excerpt:`Push every chat into HubSpot, Salesforce, or Pipedrive.`,body:`## Supported CRMs

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (API token)
- Custom via webhooks

## What syncs

- New conversations create a contact (if not already present) and a note.
- Operator replies append to the contact timeline.
- Tags applied in wexio mirror to the CRM.

## Two-way

Operator notes added in the CRM can post back to wexio via the webhook receiver - see *Integrations → Webhooks → Inbound*.`},"demo-article-shortcuts":{title:`Operator keyboard shortcuts`,excerpt:`Triage twice as fast - no mouse required.`,body:"## Inbox navigation\n\n- `j` / `k` - next / previous conversation\n- `e` - resolve\n- `a` - assign to me\n- `s` - snooze\n\n## Composer\n\n- `Cmd+Enter` - send\n- `/` - open saved-reply picker\n- `Cmd+K` - command palette (everything)\n\n## Tip\n\nHover any button in the dashboard - the tooltip shows its shortcut."}},tags:{setup:`Setup`,install:`Install`,automation:`Automation`,flows:`Flows`,integrations:`Integrations`,slack:`Slack`,billing:`Billing`,plans:`Plans`,design:`Design`,ai:`AI`,crm:`CRM`,productivity:`Productivity`,inbox:`Inbox`}},r={visitorName:`You`,messages:{"m-demo-1":{text:`Hi there 👋 I'm Gaia, the Wexio AI. What can I help you with?`,ageLabel:`9:41 AM`,buttons:[`How does pricing work?`,`What can it do?`,`Talk to a human`]},"m-demo-2":{text:`Can you show me what the widget looks like?`,ageLabel:`9:41 AM`},"m-demo-3":{text:``,ageLabel:`9:42 AM`,mediaAlts:[`Product screenshot`]},"m-demo-4":{text:``,ageLabel:`9:42 AM`,mediaAlts:[`Spinning globe`]},"m-demo-5":{text:`Nice one! 😄 Here are a few views from our team.`,ageLabel:`9:43 AM`},"m-demo-6":{text:`A few dashboard highlights`,ageLabel:`9:43 AM`,mediaAlts:[`Dashboard overview`,`Analytics`,`Inbox`,`Reports`]},"m-demo-7":{text:``,ageLabel:`9:44 AM`,mediaAlts:[`Quick walkthrough`]},"m-demo-8":{text:``,ageLabel:`9:44 AM`,mediaAlts:[`Voice note`]},"m-demo-9":{text:``,ageLabel:`9:45 AM`,mediaAlts:[`Getting started guide`]},"m-demo-9b":{text:``,ageLabel:`9:45 AM`,mediaAlts:[`Wexio integrations`]},"m-demo-10":{text:`Ready to try it yourself?`,ageLabel:`9:45 AM`,buttons:[`Open sandbox`,`Book a call`,`Keep chatting`]}}},i={messengerDescription:`Our team can also help`,messengerMessage:`Hi 👋 Ask us anything, or pick a quick action.`},a={welcome:{system:`You're now chatting with Gaia, our AI assistant.`,hint:`Tip: attach a file or record a voice note any time.`,greeting:`Hi there 👋 I'm Gaia, the Wexio AI. Ask me anything, or pick a quick action to get started.`},replies:{pricing:{text:`Wexio is free for one widget; paid plans start at $39/mo and unlock automations, integrations, and white-label.`,planBtn:`Show plan tiers`,salesBtn:`Talk to sales`},gaia:{text:`Gaia is the AI agent that answers visitor questions instantly. It learns from your help articles and hands off to a human when it can't help.`,handoffBtn:`How does handoff work?`},human:{text:`Of course - looping in Alex from the team. They'll respond within a few minutes during business hours.`},fallback:{text:`Got it - let me check on that and circle back in a moment.`},voice:{text:`Got your voice note - let me check that and circle back.`}}},o={main:`Ready to try it yourself?`,billing:`Thanks! I flagged your invoice question to the billing team.`,integrations:`How do I connect WhatsApp to my account?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-iwANUtnB.js.map