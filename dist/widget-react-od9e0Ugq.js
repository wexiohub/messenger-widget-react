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
//#region messages/nl.json
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
	home: "Home",
	messages: "Berichten",
	help: "Help",
	news: "Nieuws",
	profile: "Profiel"
}, r = {
	close: "Sluiten",
	back: "Terug",
	conversationSubtitle: "Ons team kan ook helpen",
	helpTitle: "Help",
	newsTitle: "Nieuws",
	expand: "Widget uitklappen",
	collapse: "Widget inklappen"
}, i = {
	open: "Chat openen",
	close: "Chat sluiten",
	loading: "Verbinden…"
}, a = {
	greetingHeadline: "Hoi 👋",
	greetingSubheadline: "Hoe kunnen we helpen?",
	askTitle: "Stel een vraag",
	askSubtitle: "Onze bot en ons team helpen je graag",
	recentMessageLabel: "Recent bericht",
	recentMessageTitle: "Recent bericht",
	recentMessageFromFallback: "Gaia",
	recentMessageAgo: "4 u",
	recentMessageSample: "Hoi 👋 Bedankt voor je bericht – we komen zo bij je terug.",
	featuredArticleLoading: "Uitgelicht artikel",
	featuredArticleTap: "Tik om te lezen",
	featuredArticleEmpty: "Kies een artikel",
	featuredArticleSetUp: "Stel dit blok in via je dashboard",
	featuredArticleDemoEyebrow: "Pioneer · Save the date",
	featuredArticleDemoHeadline: "8 oktober 2026",
	featuredArticleDemoSubline: "San Francisco · in persoon + virtueel",
	featuredArticleDemoCta: "Bekijk de launchagenda",
	seeAgenda: "Bekijk de launchagenda",
	browseHelp: "Help doorbladeren",
	whatsNew: "Wat is er nieuw",
	searchPlaceholder: "Zoeken in help",
	pinnedArticlesTitle: "Lees deze eerst",
	popularArticlesTitle: "Populaire artikelen",
	pinnedArticleRow: "Vastgezet artikel {n}",
	newsPreviewTitle: "Laatste nieuws",
	newsPreviewRow: "Nieuwsupdate {n}",
	myConversationsTitle: "Jouw gesprekken",
	myConversationsEmpty: "Bekijk je gesprekken",
	teamStatusOnline: "We zijn online",
	teamStatusReplyTime: "Meestal antwoord binnen enkele minuten"
}, o = {
	today: "Vandaag",
	yesterday: "Gisteren",
	unreadMessages: "Ongelezen berichten",
	emptyTitle: "Nog geen berichten",
	emptyBody: "Start een gesprek – ons team antwoordt hier.",
	sendCta: "Stuur ons een bericht",
	attach: "Bestand bijvoegen",
	commands: "Snelle commando's",
	record: "Spraakbericht opnemen",
	stopRecording: "Opname stoppen",
	recording: "Opnemen…",
	uploading: "Uploaden…",
	uploadFailed: "Uploaden mislukt",
	voiceDenied: "Microfoontoegang geweigerd",
	voiceUnsupported: "Spraakopname wordt niet ondersteund in deze browser",
	fileTooLarge: "Bestand is te groot (max. 10 MB)",
	fileMimeNotAllowed: "Dit bestandstype wordt niet ondersteund",
	emoji: "Emoji invoegen",
	cancelRecording: "Opname annuleren",
	pauseRecording: "Opname pauzeren",
	resumeRecording: "Opname hervatten",
	playPreview: "Opname afspelen",
	emojiPicker: "Emoji-keuze",
	emojiSearch: "Zoeken…",
	playAudio: "Afspelen",
	pauseAudio: "Pauzeren",
	openAudio: "Audio openen",
	removeAttachment: "Verwijderen",
	aiAssistant: "AI-assistent",
	operator: "Medewerker",
	openImage: "Afbeelding openen",
	openPreview: "Voorvertoning openen",
	play: "Afspelen",
	pause: "Pauzeren",
	typing: "typt…",
	aiThinking: "denkt na…",
	aiSearching: "doorzoekt…",
	typingSomeone: "Iemand",
	signInToChat: "Meld je aan om het gesprek te starten.",
	signInUnavailable: "Aanmelden is op dit moment niet beschikbaar.",
	googleSignIn: "Aanmelden met Google",
	passkeySignIn: "Aanmelden met een passkey",
	passkeyRegister: "Eerste keer? Maak een passkey aan",
	passkeyError: "Aanmelden is mislukt. Probeer het opnieuw.",
	passkeyNoCredential: "Nog geen passkey op dit apparaat – tik op «Maak een passkey aan» om er een te maken.",
	googleSignInDemo: "Doorgaan met Google"
}, s = {
	title: "Voordat we beginnen",
	subtitle: "Een paar snelle gegevens, zodat ons team je sneller kan helpen.",
	labelName: "Naam",
	labelEmail: "E-mail",
	labelPhone: "Telefoon",
	labelCustom: "Details",
	required: "Verplicht",
	invalidEmail: "Voer een geldig e-mailadres in",
	invalidPhone: "Voer een geldig telefoonnummer in",
	submit: "Doorgaan",
	submitFailed: "Versturen is mislukt – probeer het opnieuw."
}, c = {
	searchPlaceholder: "Zoeken in help",
	emptyTitle: "Nog geen artikelen",
	emptyBody: "Je operator heeft nog niets gepubliceerd.",
	back: "Terug",
	helpful: "Was dit nuttig?",
	yes: "Ja",
	no: "Nee",
	thanks: "Bedankt voor je feedback.",
	unresolvedCta: "Heb je nog hulp nodig? Stuur ons een bericht",
	noResults: "Geen resultaten",
	articleNotFound: "Artikel niet gevonden",
	articleNotTranslated: "Dit artikel is nog niet beschikbaar in jouw taal.",
	writtenBy: "Geschreven door {names}",
	relatedTitle: "Gerelateerde artikelen",
	collectionsCount: "{count, plural, =0 {Geen collecties} one {# collectie} other {# collecties}}",
	articlesCount: "{count, plural, =0 {Geen artikelen} one {Artikelen: #} other {Artikelen: #}}",
	authorsByline: "Auteurs {first}{remaining, plural, =0 {} one { en # meer} other { en # meer}}"
}, l = {
	emptyTitle: "Nog geen updates",
	emptyBody: "Kom hier terug voor productnieuws en aankondigingen.",
	helpful: "Was dit artikel nuttig?",
	yes: "Ja",
	no: "Nee",
	thanks: "Bedankt voor je feedback.",
	searchPlaceholder: "Zoeken in nieuws",
	noResults: "Geen overeenkomende berichten",
	editedAt: "bewerkt {when}",
	articleNotFound: "Artikel niet gevonden.",
	articleNotTranslated: "Dit bericht is nog niet beschikbaar in jouw taal.",
	readOriginal: "Lees het origineel",
	relatedTitle: "Gerelateerd",
	writtenBy: "Geschreven door {names}"
}, u = {
	ariaLabel: "Reacties",
	tapAria: "Reageer met {emoji}"
}, d = {
	title: "Lees in een andere taal",
	ariaLabel: "Talen van het artikel"
}, f = {
	poweredBy: "Mogelijk gemaakt door",
	wexio: "Wexio"
}, p = {
	mute: "Meldingsgeluiden dempen",
	unmute: "Meldingsgeluiden inschakelen"
}, m = {
	tableOfContents: "Inhoudsopgave",
	tabFallback: "Tabblad {n}"
}, h = {
	newMessage: "Nieuw bericht",
	dismiss: "Sluiten",
	aiAssistant: "AI-assistent",
	operator: "Medewerker"
}, g = {
	mediaPreview: "Mediavoorvertoning",
	close: "Voorvertoning sluiten",
	previous: "Vorige",
	next: "Volgende"
}, _ = {
	turnstileTitle: "Kon je browser niet verifiëren",
	turnstileBody: "De beveiligingscontrole kon niet worden voltooid. Soms ligt het aan het netwerk of een ad-blocker – probeer het opnieuw of laad de pagina opnieuw.",
	genericTitle: "Verbinden mislukt",
	genericBody: "Er ging iets mis bij het aanmelden. Probeer het zo opnieuw.",
	retry: "Opnieuw proberen",
	dismiss: "Sluiten"
}, v = {
	title: "Jouw profiel",
	subtitle: "Werk je gegevens en het gedrag van de widget bij.",
	uploadAvatar: "Foto wijzigen",
	removeAvatar: "Foto verwijderen",
	avatarUploading: "Uploaden…",
	preferencesHeading: "Voorkeuren",
	preferenceLanguage: "Taal",
	preferenceDesktopNotifications: "Bureaubladmeldingen",
	preferenceDesktopNotificationsHint: "Ontvang een systeemmelding wanneer de widget niet op de voorgrond staat.",
	preferenceThemeMode: "Thema",
	themeAuto: "Volg systeem",
	themeLight: "Licht",
	themeDark: "Donker",
	themeLocked: "Het thema is ingesteld door de operator.",
	pinnedHint: "Ingesteld door de operator – niet aanpasbaar.",
	requiredHint: "Verplicht",
	invalidEmail: "Voer een geldig e-mailadres in.",
	invalidPhone: "Gebruik internationaal formaat, bijv. +31612345678.",
	noFields: "Er is hier nog niets te bewerken.",
	save: "Wijzigingen opslaan",
	saving: "Opslaan…",
	cancel: "Verwerpen",
	saved: "Wijzigingen opgeslagen.",
	loading: "Profiel laden…",
	loadError: "Profiel kon niet worden geladen. Probeer het opnieuw.",
	retry: "Opnieuw proberen",
	errorFieldNotAllowed: "Dit veld kan in deze widget niet worden bewerkt. Probeer te vernieuwen.",
	errorFieldPinned: "Dit veld is vergrendeld door je account.",
	errorFieldInvalid: "Sommige waarden zijn ongeldig. Controleer de gemarkeerde velden.",
	errorThemeLocked: "Het thema is vergrendeld door de operator.",
	errorFeatureDisabled: "De operator heeft het bewerken van het profiel uitgeschakeld.",
	errorGeneric: "Wijzigingen konden niet worden opgeslagen. Probeer het opnieuw.",
	notificationsBlocked: "Meldingen zijn geblokkeerd door de browser. Werk de sitepermissies bij om ze in te schakelen.",
	notificationsRequest: "Sta meldingen toe wanneer daarom wordt gevraagd om dit in te schakelen.",
	systemFields: {
		avatar: "Foto",
		wexioId: "Wexio-ID",
		telegramId: "Telegram-ID",
		whatsappId: "WhatsApp-ID",
		viberId: "Viber-ID",
		instagramId: "Instagram-ID",
		optInWhatsapp: "WhatsApp-toestemming",
		webVerified: "Geverifieerde bezoeker",
		firstName: "Voornaam",
		lastName: "Achternaam",
		username: "Gebruikersnaam",
		language: "Taal",
		email: "E-mail",
		phone: "Telefoon",
		company: "Bedrijf",
		location: "Locatie",
		isValid: "Account geldig",
		chatStatus: "Chatstatus",
		chatCategory: "Chatcategorie",
		priority: "Prioriteit",
		leadSource: "Bron van lead",
		leadStatus: "Status van lead",
		interestLevel: "Interesseniveau",
		productInterest: "Productinteresse",
		budgetRange: "Budget",
		purchaseTimeline: "Aankooptermijn",
		lastMessageSentAt: "Laatste bericht verstuurd",
		lastMessageReceivedAt: "Laatste bericht ontvangen",
		lastSeenAt: "Laatst gezien",
		firstMessageReceivedAt: "Eerste contact",
		isBlocked: "Geblokkeerd",
		registrationDate: "Geregistreerd",
		aiAvailable: "AI-ondersteuning",
		totalMessagesSent: "Berichten verstuurd",
		totalMessagesReceived: "Berichten ontvangen",
		totalAiMessagesSent: "Door AI verstuurde berichten",
		totalBotMessagesSent: "Door bot verstuurde berichten",
		totalUserMessagesSent: "Door medewerker verstuurde berichten",
		flowCompletionRate: "Voltooiingspercentage flow",
		lastFlowCompleted: "Laatst voltooide flow",
		totalFlowsStarted: "Gestarte flows",
		totalFlowsCompleted: "Voltooide flows"
	},
	systemFieldOptions: {
		chatStatus: {
			ISSUE: "Probleem",
			RESOLVED: "Opgelost",
			PENDING: "In behandeling",
			IN_PROGRESS: "Bezig",
			CLOSED: "Gesloten"
		},
		chatCategory: {
			SALES: "Verkoop",
			SUPPORT: "Support",
			BILLING: "Facturatie",
			FEEDBACK: "Feedback",
			GENERAL: "Algemeen",
			OTHER: "Overig"
		},
		priority: {
			LOW: "Laag",
			MEDIUM: "Gemiddeld",
			HIGH: "Hoog",
			URGENT: "Urgent"
		},
		leadStatus: {
			NEW: "Nieuw",
			CONTACTED: "Benaderd",
			QUALIFIED: "Gekwalificeerd",
			NEGOTIATING: "In onderhandeling",
			WON: "Gewonnen",
			LOST: "Verloren"
		},
		interestLevel: {
			LOW: "Laag",
			MEDIUM: "Gemiddeld",
			HIGH: "Hoog",
			VERY_HIGH: "Zeer hoog"
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

//# sourceMappingURL=widget-react-od9e0Ugq.js.map