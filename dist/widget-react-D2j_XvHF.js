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
import { x as e } from "./widget-react-B9XrHKqv.js";
//#region messages/de.json
var t = /* @__PURE__ */ e({
	article: () => m,
	authError: () => _,
	branding: () => f,
	default: () => y,
	header: () => r,
	help: () => c,
	home: () => a,
	languageSelector: () => d,
	launcher: () => i,
	lightbox: () => g,
	messages: () => o,
	news: () => l,
	peek: () => h,
	prechat: () => s,
	profile: () => v,
	reactions: () => u,
	sound: () => p,
	tabs: () => n
}), n = {
	home: "Start",
	messages: "Nachrichten",
	help: "Hilfe",
	news: "Neuigkeiten",
	profile: "Profil"
}, r = {
	close: "Schließen",
	back: "Zurück",
	conversationSubtitle: "Unser Team hilft Ihnen ebenfalls gern",
	helpTitle: "Hilfe",
	newsTitle: "Neuigkeiten",
	expand: "Widget vergrößern",
	collapse: "Widget verkleinern"
}, i = {
	open: "Chat öffnen",
	close: "Chat schließen",
	loading: "Verbinden…"
}, a = {
	greetingHeadline: "Hallo 👋",
	greetingSubheadline: "Wie können wir helfen?",
	askTitle: "Stellen Sie eine Frage",
	askSubtitle: "Unser Bot und unser Team helfen weiter",
	recentMessageLabel: "Aktuelle Nachricht",
	recentMessageTitle: "Aktuelle Nachricht",
	recentMessageFromFallback: "Gaia",
	recentMessageAgo: "4 Std.",
	recentMessageSample: "Hallo 👋 Danke für Ihre Nachricht – wir melden uns gleich.",
	featuredArticleLoading: "Empfohlener Artikel",
	featuredArticleTap: "Tippen zum Lesen",
	featuredArticleEmpty: "Artikel auswählen",
	featuredArticleSetUp: "Konfigurieren Sie diesen Block in Ihrem Dashboard",
	featuredArticleDemoEyebrow: "Pioneer · Save the date",
	featuredArticleDemoHeadline: "8. Oktober 2026",
	featuredArticleDemoSubline: "San Francisco · vor Ort + virtuell",
	featuredArticleDemoCta: "Launch-Agenda ansehen",
	seeAgenda: "Launch-Agenda ansehen",
	browseHelp: "Hilfe durchsuchen",
	whatsNew: "Was ist neu",
	searchPlaceholder: "Hilfe durchsuchen",
	pinnedArticlesTitle: "Zuerst lesen",
	popularArticlesTitle: "Beliebte Artikel",
	pinnedArticleRow: "Angehefteter Artikel {n}",
	newsPreviewTitle: "Aktuelle Neuigkeiten",
	newsPreviewRow: "News-Update {n}",
	myConversationsTitle: "Ihre Gespräche",
	myConversationsEmpty: "Ihre Gespräche anzeigen",
	teamStatusOnline: "Wir sind online",
	teamStatusReplyTime: "Antwortet meist innerhalb weniger Minuten"
}, o = {
	today: "Heute",
	yesterday: "Gestern",
	unreadMessages: "Ungelesene Nachrichten",
	emptyTitle: "Noch keine Nachrichten",
	emptyBody: "Starten Sie ein Gespräch – unser Team antwortet Ihnen hier.",
	sendCta: "Nachricht senden",
	attach: "Datei anhängen",
	commands: "Schnellbefehle",
	record: "Sprachnachricht aufnehmen",
	stopRecording: "Aufnahme stoppen",
	recording: "Aufnahme läuft…",
	uploading: "Wird hochgeladen…",
	uploadFailed: "Upload fehlgeschlagen",
	voiceDenied: "Mikrofonzugriff verweigert",
	voiceUnsupported: "Sprachaufnahme wird in diesem Browser nicht unterstützt",
	fileTooLarge: "Datei ist zu groß (max. 10 MB)",
	fileMimeNotAllowed: "Dieser Dateityp wird nicht unterstützt",
	emoji: "Emoji einfügen",
	cancelRecording: "Aufnahme abbrechen",
	pauseRecording: "Aufnahme pausieren",
	resumeRecording: "Aufnahme fortsetzen",
	playPreview: "Aufnahme abspielen",
	emojiPicker: "Emoji-Auswahl",
	emojiSearch: "Suchen…",
	playAudio: "Abspielen",
	pauseAudio: "Pause",
	openAudio: "Audio öffnen",
	removeAttachment: "Entfernen",
	aiAssistant: "KI-Assistent",
	operator: "Mitarbeiter",
	openImage: "Bild öffnen",
	openPreview: "Vorschau öffnen",
	play: "Abspielen",
	pause: "Pause",
	typing: "schreibt…",
	aiThinking: "denkt nach…",
	aiSearching: "durchsucht…",
	typingSomeone: "Jemand",
	signInToChat: "Bitte melden Sie sich an, um das Gespräch zu starten.",
	signInUnavailable: "Anmeldung ist derzeit nicht verfügbar.",
	googleSignIn: "Mit Google anmelden",
	passkeySignIn: "Mit Passkey anmelden",
	passkeyRegister: "Zum ersten Mal hier? Passkey einrichten",
	passkeyError: "Anmeldung nicht möglich. Bitte erneut versuchen.",
	passkeyNoCredential: "Auf diesem Gerät ist noch kein Passkey vorhanden – tippen Sie auf „Passkey einrichten“, um einen zu erstellen.",
	googleSignInDemo: "Mit Google fortfahren"
}, s = {
	title: "Bevor wir loslegen",
	subtitle: "Ein paar Angaben, damit unser Team schneller helfen kann.",
	labelName: "Name",
	labelEmail: "E-Mail",
	labelPhone: "Telefon",
	labelCustom: "Details",
	required: "Erforderlich",
	invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
	invalidPhone: "Bitte geben Sie eine gültige Telefonnummer ein",
	submit: "Weiter",
	submitFailed: "Senden fehlgeschlagen – bitte erneut versuchen."
}, c = {
	searchPlaceholder: "Hilfe durchsuchen",
	emptyTitle: "Noch keine Artikel",
	emptyBody: "Ihr Betreiber hat noch nichts veröffentlicht.",
	back: "Zurück",
	helpful: "War das hilfreich?",
	yes: "Ja",
	no: "Nein",
	thanks: "Danke für Ihr Feedback.",
	unresolvedCta: "Brauchen Sie weiter Hilfe? Schreiben Sie uns",
	noResults: "Keine Ergebnisse",
	articleNotFound: "Artikel nicht gefunden",
	articleNotTranslated: "Dieser Artikel ist in Ihrer Sprache noch nicht verfügbar.",
	writtenBy: "Geschrieben von {names}",
	relatedTitle: "Verwandte Artikel",
	collectionsCount: "{count, plural, =0 {Keine Sammlungen} one {# Sammlung} other {# Sammlungen}}",
	articlesCount: "{count, plural, =0 {Keine Artikel} one {Artikel: #} other {Artikel: #}}",
	authorsByline: "Autoren {first}{remaining, plural, =0 {} one { und # weitere(r)} other { und # weitere}}"
}, l = {
	emptyTitle: "Noch keine Updates",
	emptyBody: "Schauen Sie hier für Produktneuigkeiten und Ankündigungen vorbei.",
	helpful: "War dieser Artikel hilfreich?",
	yes: "Ja",
	no: "Nein",
	thanks: "Danke für Ihr Feedback.",
	searchPlaceholder: "Neuigkeiten durchsuchen",
	noResults: "Keine passenden Beiträge",
	editedAt: "bearbeitet {when}",
	articleNotFound: "Artikel nicht gefunden.",
	articleNotTranslated: "Dieser Beitrag ist in Ihrer Sprache noch nicht verfügbar.",
	readOriginal: "Original lesen",
	relatedTitle: "Ähnliche Beiträge",
	writtenBy: "Geschrieben von {names}"
}, u = {
	ariaLabel: "Reaktionen",
	tapAria: "Mit {emoji} reagieren"
}, d = {
	title: "In einer anderen Sprache lesen",
	ariaLabel: "Artikelsprachen"
}, f = {
	poweredBy: "Bereitgestellt von",
	wexio: "Wexio"
}, p = {
	mute: "Benachrichtigungstöne stummschalten",
	unmute: "Benachrichtigungstöne aktivieren"
}, m = {
	tableOfContents: "Inhaltsverzeichnis",
	tabFallback: "Tab {n}"
}, h = {
	newMessage: "Neue Nachricht",
	dismiss: "Schließen",
	aiAssistant: "KI-Assistent",
	operator: "Mitarbeiter"
}, g = {
	mediaPreview: "Medienvorschau",
	close: "Vorschau schließen",
	previous: "Zurück",
	next: "Weiter"
}, _ = {
	turnstileTitle: "Browser konnte nicht verifiziert werden",
	turnstileBody: "Die Sicherheitsprüfung konnte nicht abgeschlossen werden. Manchmal liegt das am Netzwerk oder an einem Werbeblocker – versuchen Sie es erneut oder laden Sie die Seite neu.",
	genericTitle: "Verbindung fehlgeschlagen",
	genericBody: "Beim Anmelden ist etwas schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.",
	retry: "Erneut versuchen",
	dismiss: "Schließen"
}, v = {
	title: "Ihr Profil",
	subtitle: "Aktualisieren Sie Ihre Daten und das Verhalten des Widgets.",
	uploadAvatar: "Foto ändern",
	removeAvatar: "Foto entfernen",
	avatarUploading: "Wird hochgeladen…",
	preferencesHeading: "Einstellungen",
	preferenceLanguage: "Sprache",
	preferenceDesktopNotifications: "Desktop-Benachrichtigungen",
	preferenceDesktopNotificationsHint: "Erhalten Sie eine Systembenachrichtigung, wenn das Widget nicht im Fokus ist.",
	preferenceThemeMode: "Design",
	themeAuto: "Wie System",
	themeLight: "Hell",
	themeDark: "Dunkel",
	themeLocked: "Das Design wird vom Betreiber festgelegt.",
	pinnedHint: "Vom Betreiber festgelegt – nicht bearbeitbar.",
	requiredHint: "Erforderlich",
	invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
	invalidPhone: "Internationales Format verwenden, z. B. +4915112345678.",
	noFields: "Hier gibt es noch nichts zu bearbeiten.",
	save: "Änderungen speichern",
	saving: "Wird gespeichert…",
	cancel: "Verwerfen",
	saved: "Änderungen gespeichert.",
	loading: "Profil wird geladen…",
	loadError: "Profil konnte nicht geladen werden. Bitte erneut versuchen.",
	retry: "Erneut versuchen",
	errorFieldNotAllowed: "Dieses Feld kann in diesem Widget nicht bearbeitet werden. Versuchen Sie es nach einem Neuladen.",
	errorFieldPinned: "Dieses Feld ist durch Ihr Konto gesperrt.",
	errorFieldInvalid: "Einige Werte sind ungültig. Bitte prüfen Sie die markierten Felder.",
	errorThemeLocked: "Das Design ist vom Betreiber gesperrt.",
	errorFeatureDisabled: "Die Profilbearbeitung wurde vom Betreiber deaktiviert.",
	errorGeneric: "Änderungen konnten nicht gespeichert werden. Bitte erneut versuchen.",
	notificationsBlocked: "Benachrichtigungen sind im Browser blockiert. Aktualisieren Sie die Seitenberechtigungen, um sie zu aktivieren.",
	notificationsRequest: "Lassen Sie Benachrichtigungen zu, wenn Sie dazu aufgefordert werden.",
	systemFields: {
		avatar: "Foto",
		wexioId: "Wexio ID",
		telegramId: "Telegram ID",
		whatsappId: "WhatsApp ID",
		viberId: "Viber ID",
		instagramId: "Instagram ID",
		optInWhatsapp: "WhatsApp-Zustimmung",
		webVerified: "Verifizierter Besucher",
		firstName: "Vorname",
		lastName: "Nachname",
		username: "Benutzername",
		language: "Sprache",
		email: "E-Mail",
		phone: "Telefon",
		company: "Unternehmen",
		location: "Standort",
		isValid: "Konto gültig",
		chatStatus: "Chat-Status",
		chatCategory: "Chat-Kategorie",
		priority: "Priorität",
		leadSource: "Lead-Quelle",
		leadStatus: "Lead-Status",
		interestLevel: "Interessenlevel",
		productInterest: "Produktinteresse",
		budgetRange: "Budget",
		purchaseTimeline: "Kaufzeitraum",
		lastMessageSentAt: "Zuletzt gesendet",
		lastMessageReceivedAt: "Zuletzt empfangen",
		lastSeenAt: "Zuletzt gesehen",
		firstMessageReceivedAt: "Erstkontakt",
		isBlocked: "Blockiert",
		registrationDate: "Registriert",
		aiAvailable: "KI-Unterstützung",
		totalMessagesSent: "Gesendete Nachrichten",
		totalMessagesReceived: "Empfangene Nachrichten",
		totalAiMessagesSent: "Von KI gesendet",
		totalBotMessagesSent: "Vom Bot gesendet",
		totalUserMessagesSent: "Von Mitarbeitenden gesendet",
		flowCompletionRate: "Abschlussrate Flow",
		lastFlowCompleted: "Zuletzt abgeschlossener Flow",
		totalFlowsStarted: "Gestartete Flows",
		totalFlowsCompleted: "Abgeschlossene Flows"
	},
	systemFieldOptions: {
		chatStatus: {
			ISSUE: "Problem",
			RESOLVED: "Gelöst",
			PENDING: "Ausstehend",
			IN_PROGRESS: "In Bearbeitung",
			CLOSED: "Geschlossen"
		},
		chatCategory: {
			SALES: "Vertrieb",
			SUPPORT: "Support",
			BILLING: "Abrechnung",
			FEEDBACK: "Feedback",
			GENERAL: "Allgemein",
			OTHER: "Sonstiges"
		},
		priority: {
			LOW: "Niedrig",
			MEDIUM: "Mittel",
			HIGH: "Hoch",
			URGENT: "Dringend"
		},
		leadStatus: {
			NEW: "Neu",
			CONTACTED: "Kontaktiert",
			QUALIFIED: "Qualifiziert",
			NEGOTIATING: "In Verhandlung",
			WON: "Gewonnen",
			LOST: "Verloren"
		},
		interestLevel: {
			LOW: "Niedrig",
			MEDIUM: "Mittel",
			HIGH: "Hoch",
			VERY_HIGH: "Sehr hoch"
		}
	}
}, y = {
	tabs: n,
	header: r,
	launcher: i,
	home: a,
	messages: o,
	prechat: s,
	help: c,
	news: l,
	reactions: u,
	languageSelector: d,
	branding: f,
	sound: p,
	article: m,
	peek: h,
	lightbox: g,
	authError: _,
	profile: v
};
//#endregion
export { t as n, y as t };

//# sourceMappingURL=widget-react-D2j_XvHF.js.map