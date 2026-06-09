import type { CSSProperties } from "react";

export type WidgetTab = "home" | "messages" | "help" | "news" | "profile";

export interface WidgetFeatures {
  home: boolean;
  messenger: boolean;
  help: boolean;
  news: boolean;
}

/** Designer-friendly colour tokens — mirrors the BE's
 *  `WebIntegrationThemePalette`. Every field optional. */
export interface WidgetThemePalette {
  background?: string;
  surface?: string;
  surfaceElevated?: string;
  text?: string;
  textMuted?: string;
  textSubtle?: string;
  border?: string;
  borderStrong?: string;
  primary?: string;
  primaryHover?: string;
  primaryForeground?: string;
  launcherBackground?: string;
  launcherForeground?: string;
  success?: string;
  danger?: string;
}

export interface WidgetThemeRadii {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export type LauncherPosition = "RIGHT_BOTTOM" | "LEFT_BOTTOM";

export interface WidgetTheme {
  light?: WidgetThemePalette;
  dark?: WidgetThemePalette;
  radii?: WidgetThemeRadii;
  /** Which corner the launcher + panel anchor to. Defaults to bottom-right. */
  launcherPosition?: LauncherPosition;
  /** Full CSS `font-family` stack applied to the whole widget.
   *  Theme-invariant; falls back to the bundled Geist default when unset. */
  fontFamily?: string;
}

export type PrechatFieldKind = "NAME" | "EMAIL" | "PHONE" | "CUSTOM_TEXT";

export interface WidgetPrechatField {
  kind: PrechatFieldKind;
  key: string;
  label: string;
  required: boolean;
}

export interface WidgetPrechatForm {
  enabled: boolean;
  fields: WidgetPrechatField[];
}

export interface WidgetSounds {
  enabled: boolean;
  inboundSoundId: string | null;
  outboundSoundId: string | null;
  volume: number;
}

export type WidgetMessengerMessageKind = "HINT" | "SYSTEM";

export interface WidgetMessengerMessage {
  kind: WidgetMessengerMessageKind;
  text: string;
}

export interface WidgetMessengerConfig {
  title: string | null;
  description: string | null;
  aiAssistantAvatar: string | null;
  commands: string[];
  messages: WidgetMessengerMessage[];
  showRelatedNews: boolean;
  showRelatedHelpArticles: boolean;
  showReactionCounts: boolean;
}

export type WidgetLocaleStrategy = "AUTO" | "WEBSITE" | "DEFAULT";

/* ── Home-tab block model ─────────────────────────────────────────── */

export type HomeNamedIcon =
  | "telegram"
  | "whatsapp"
  | "viber"
  | "instagram"
  | "messenger"
  | "discord"
  | "slack"
  | "line"
  | "facebook"
  | "twitter"
  | "linkedin"
  | "reddit"
  | "tiktok"
  | "chat"
  | "email"
  | "phone"
  | "video-call"
  | "help"
  | "book"
  | "bell"
  | "star"
  | "heart"
  | "bookmark"
  | "arrow-right"
  | "lock"
  | "shield"
  | "user"
  | "users";

export type HomeQuickActionIcon =
  | { kind: "named"; name: HomeNamedIcon; colored?: boolean }
  | { kind: "media"; url: string };

export interface HomeQuickActionButton {
  label?: string;
  icon?: HomeQuickActionIcon;
  action: "open-messenger" | "open-help" | "open-news" | "open-url";
  url?: string;
  style?: "default" | "primary" | "ghost";
}

export type HomeQuickActionLayout = "stacked" | "inline";

export interface HomeHelpSuggestionsConfig {
  mode: "popular" | "recent" | "category" | "manual";
  maxItems: number;
  categoryId?: string;
  articleIds?: string[];
}

export type HomeBlock =
  | {
      kind: "quick-actions";
      buttons: HomeQuickActionButton[];
      layout?: HomeQuickActionLayout;
    }
  | {
      kind: "help-search";
      placeholder?: string;
      suggestions: HomeHelpSuggestionsConfig;
    }
  | { kind: "pinned-articles"; articleIds: string[]; title?: string }
  | { kind: "news-preview"; maxItems?: number; title?: string }
  | {
      kind: "team-status";
      showResponseTime: boolean;
      showOperatorAvatars: boolean;
    }
  | { kind: "divider" }
  | { kind: "rich-text"; markdown: string }
  | {
      kind: "ask-question";
      title?: string;
      subtitle?: string;
      action?: "open-messenger" | "open-help" | "open-news";
    }
  | { kind: "recent-message"; title?: string }
  | {
      kind: "featured-article";
      newsId?: string;
      ctaLabel?: string;
    };

export type HomeBlockKind = HomeBlock["kind"];

/**
 * Host-injectable subset of `WidgetSecurity`. `requireAuth` /
 * `google.enabled` / `passkey.enabled` are UI conveniences (BE
 * enforces gating server-side regardless). `clientId` and
 * `allowedOrigins` are intentionally NOT injectable — BE-owned.
 */
export interface InjectableWidgetSecurity {
  requireAuth?: boolean;
  google?: { enabled?: boolean };
  passkey?: { enabled?: boolean };
}

/**
 * Public widget config — the trimmed shape operators can pre-resolve
 * and pass to the component. `status`, `branding`, and
 * `security.allowedOrigins` are intentionally NOT here: those are
 * server-owned and not host-overridable.
 */
export interface InjectableWidgetConfig {
  integrationId?: string;
  name?: string;
  defaultTab: WidgetTab;
  features: WidgetFeatures;
  theme: WidgetTheme | null;
  themeMode: "light" | "dark" | "auto";
  operatorAvatars: { src: string; alt: string }[];
  /** Per-mode organisation logo URLs (already flattened from BE Media
   *  refs). `null` for the whole object = operator never uploaded one. */
  organizationLogo: { light: string | null; dark: string | null } | null;
  greeting: {
    headline: string;
    subheadline: string;
  };
  /** Operator-configured Home-tab block layout. `null` → the widget's
   *  bundled default layout. */
  homeLayout: HomeBlock[] | null;
  prechatForm: WidgetPrechatForm | null;
  sounds: WidgetSounds | null;
  messenger: WidgetMessengerConfig | null;
  locales?: { primary: string; supported: string[]; strategy?: WidgetLocaleStrategy };
  /** Sign-in methods — host can flip `enabled` per method. `clientId`
   *  and `requireAuth` actual enforcement are BE-sourced. */
  security?: InjectableWidgetSecurity;
}

export interface VisitorIdentity {
  /** Google FedCM id_token (preferred). */
  googleIdToken?: string;
  /** Host-signed JWT carrying the visitor's identity claims. */
  jwt?: string;
  /** Legacy userId + HMAC pair — `userHash = HMAC-SHA256(userId, integrationSecret)`. */
  userId?: string;
  userHash?: string;
  name?: string;
  email?: string;
  phone?: string;
  /** Open key/value bag — populates the People profile's context snapshot. */
  attributes?: Record<string, unknown>;
}

export interface WexioWidgetProps {
  publicKey?: string;
  /**
   * Log a known user into the widget (the React equivalent of
   * Intercom's `boot({ user_id, ... })`). Provide ONE proof:
   * `googleIdToken`, `jwt`, or the legacy `userId` + `userHash` pair.
   * `name` / `email` / `phone` populate the People profile;
   * `attributes` is an open bag of extra fields.
   *
   * Memoise this — a fresh object literal every render churns the
   * env (the handshake itself is guarded against re-firing unless the
   * proof actually changes).
   */
  user?: VisitorIdentity;
  /**
   * Full, pre-resolved widget config. When provided, the widget boots
   * from it directly and SKIPS the `GET /api/web/config/:pk` bootstrap
   * request — for a host that already has the config server-rendered
   * or fetched once app-wide. Still pass `publicKey` — it's needed for
   * the GraphQL header + visitor handshake; only the config fetch is
   * skipped. Memoise this.
   */
  config?: InjectableWidgetConfig;
  onResize?: (size: { width: number; height: number }) => void;
  /**
   * Fired when the visitor opens the panel. Pairs with `onClose`.
   */
  onOpen?: () => void;
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
}

export type WexioWidgetReactProps = WexioWidgetProps;

export declare function WexioWidget(props: WexioWidgetProps): JSX.Element;

/**
 * Imperatively stamp the public-key onto the apollo singleton.
 * Useful for SSR data fetching paths that need the
 * `x-web-public-key` header before the component mounts.
 */
export declare function setWexioPublicKey(key: string | null): void;
