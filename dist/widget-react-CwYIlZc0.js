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
//#region messages/ro.json
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
	home: "Acasă",
	messages: "Mesaje",
	help: "Ajutor",
	news: "Noutăți",
	profile: "Profil"
}, r = {
	close: "Închide",
	back: "Înapoi",
	conversationSubtitle: "Și echipa noastră te poate ajuta",
	helpTitle: "Ajutor",
	newsTitle: "Noutăți",
	expand: "Extinde widgetul",
	collapse: "Restrânge widgetul"
}, i = {
	open: "Deschide chatul",
	close: "Închide chatul",
	loading: "Se conectează…"
}, a = {
	greetingHeadline: "Salut 👋",
	greetingSubheadline: "Cu ce te putem ajuta?",
	askTitle: "Pune o întrebare",
	askSubtitle: "Botul și echipa noastră te pot ajuta",
	recentMessageLabel: "Mesaj recent",
	recentMessageTitle: "Mesaj recent",
	recentMessageFromFallback: "Gaia",
	recentMessageAgo: "4 h",
	recentMessageSample: "Salut 👋 Mulțumim că ne-ai contactat — revenim cu un răspuns în scurt timp.",
	featuredArticleLoading: "Articol recomandat",
	featuredArticleTap: "Atinge pentru a citi",
	featuredArticleEmpty: "Alege un articol",
	featuredArticleSetUp: "Configurează acest bloc în panoul tău",
	featuredArticleDemoEyebrow: "Pioneer · Reține data",
	featuredArticleDemoHeadline: "8 octombrie 2026",
	featuredArticleDemoSubline: "San Francisco · în persoană + online",
	featuredArticleDemoCta: "Vezi programul lansării",
	seeAgenda: "Vezi programul lansării",
	browseHelp: "Răsfoiește ajutorul",
	whatsNew: "Ce este nou",
	searchPlaceholder: "Caută în ajutor",
	pinnedArticlesTitle: "Citește mai întâi astea",
	popularArticlesTitle: "Articole populare",
	pinnedArticleRow: "Articol fixat {n}",
	newsPreviewTitle: "Ultimele noutăți",
	newsPreviewRow: "Noutate {n}",
	myConversationsTitle: "Conversațiile tale",
	myConversationsEmpty: "Vezi-ți conversațiile",
	teamStatusOnline: "Suntem online",
	teamStatusReplyTime: "De obicei răspundem în câteva minute"
}, o = {
	today: "Astăzi",
	yesterday: "Ieri",
	unreadMessages: "Mesaje necitite",
	emptyTitle: "Încă nu există mesaje",
	emptyBody: "Începe o conversație, iar echipa noastră îți va răspunde aici.",
	sendCta: "Trimite-ne un mesaj",
	attach: "Atașează un fișier",
	commands: "Comenzi rapide",
	record: "Înregistrează un mesaj vocal",
	stopRecording: "Oprește înregistrarea",
	recording: "Se înregistrează…",
	uploading: "Se încarcă…",
	uploadFailed: "Încărcarea a eșuat",
	voiceDenied: "Accesul la microfon a fost refuzat",
	voiceUnsupported: "Înregistrarea vocală nu este acceptată în acest browser",
	fileTooLarge: "Fișierul este prea mare (maximum 10 MB)",
	fileMimeNotAllowed: "Acest tip de fișier nu este acceptat",
	emoji: "Inserează emoji",
	cancelRecording: "Anulează înregistrarea",
	pauseRecording: "Întrerupe înregistrarea",
	resumeRecording: "Reia înregistrarea",
	playPreview: "Redă înregistrarea",
	emojiPicker: "Selector de emoji",
	emojiSearch: "Caută…",
	playAudio: "Redă",
	pauseAudio: "Pauză",
	openAudio: "Deschide audio",
	removeAttachment: "Elimină",
	aiAssistant: "Asistent AI",
	operator: "Operator",
	openImage: "Deschide imaginea",
	openPreview: "Deschide previzualizarea",
	play: "Redă",
	pause: "Pauză",
	typing: "scrie…",
	aiThinking: "gândește…",
	aiSearching: "caută…",
	typingSomeone: "Cineva",
	signInToChat: "Te rugăm să te conectezi pentru a începe conversația.",
	signInUnavailable: "Autentificarea nu este disponibilă în acest moment.",
	googleSignIn: "Conectează-te cu Google",
	passkeySignIn: "Conectează-te cu un passkey",
	passkeyRegister: "Prima dată? Configurează un passkey",
	passkeyError: "Nu am putut autentifica. Încearcă din nou.",
	passkeyNoCredential: "Încă nu există un passkey pe acest dispozitiv — atinge „Configurează un passkey” pentru a crea unul.",
	googleSignInDemo: "Continuă cu Google"
}, s = {
	title: "Înainte de a începe",
	subtitle: "Câteva detalii rapide ca echipa noastră să te poată ajuta mai repede.",
	labelName: "Nume",
	labelEmail: "E-mail",
	labelPhone: "Telefon",
	labelCustom: "Detalii",
	required: "Obligatoriu",
	invalidEmail: "Te rugăm să introduci un e-mail valid",
	invalidPhone: "Te rugăm să introduci un număr de telefon valid",
	submit: "Continuă",
	submitFailed: "Nu s-a putut trimite — încearcă din nou."
}, c = {
	searchPlaceholder: "Caută în ajutor",
	emptyTitle: "Încă nu există articole",
	emptyBody: "Operatorul tău nu a publicat încă nimic.",
	back: "Înapoi",
	helpful: "A fost util?",
	yes: "Da",
	no: "Nu",
	thanks: "Mulțumim pentru feedback.",
	unresolvedCta: "Mai ai nevoie de ajutor? Scrie-ne",
	noResults: "Niciun rezultat",
	articleNotFound: "Articolul nu a fost găsit",
	articleNotTranslated: "Acest articol nu este încă disponibil în limba ta.",
	writtenBy: "Scris de {names}",
	relatedTitle: "Articole similare",
	collectionsCount: "{count, plural, =0 {Nicio colecție} one {# colecție} few {# colecții} other {# de colecții}}",
	articlesCount: "{count, plural, =0 {Niciun articol} one {Articole: #} few {Articole: #} other {Articole: #}}",
	authorsByline: "Autori {first}{remaining, plural, =0 {} one { și încă #} few { și încă #} other { și încă #}}"
}, l = {
	emptyTitle: "Încă nu există actualizări",
	emptyBody: "Revino aici pentru noutăți și anunțuri despre produs.",
	helpful: "Acest articol a fost util?",
	yes: "Da",
	no: "Nu",
	thanks: "Mulțumim pentru feedback.",
	searchPlaceholder: "Caută în noutăți",
	noResults: "Nicio postare găsită",
	editedAt: "editat {when}",
	articleNotFound: "Articolul nu a fost găsit.",
	articleNotTranslated: "Această postare nu este încă disponibilă în limba ta.",
	readOriginal: "Citește originalul",
	relatedTitle: "Similar",
	writtenBy: "Scris de {names}"
}, u = {
	ariaLabel: "Reacții",
	tapAria: "Reacționează cu {emoji}"
}, d = {
	title: "Citește în altă limbă",
	ariaLabel: "Limbi articol"
}, f = {
	poweredBy: "Susținut de",
	wexio: "Wexio"
}, p = {
	mute: "Dezactivează sunetele notificărilor",
	unmute: "Activează sunetele notificărilor"
}, m = {
	tableOfContents: "Cuprins",
	tabFallback: "Filă {n}"
}, h = {
	newMessage: "Mesaj nou",
	dismiss: "Închide",
	aiAssistant: "Asistent AI",
	operator: "Operator"
}, g = {
	mediaPreview: "Previzualizare media",
	close: "Închide previzualizarea",
	previous: "Anterior",
	next: "Următor"
}, _ = {
	turnstileTitle: "Nu am putut verifica browserul",
	turnstileBody: "Nu am putut finaliza verificarea de securitate. Uneori este o problemă de rețea sau de blocator de reclame — încearcă din nou sau reîncarcă pagina.",
	genericTitle: "Nu ne-am putut conecta",
	genericBody: "Ceva nu a funcționat la autentificare. Încearcă din nou într-un moment.",
	retry: "Încearcă din nou",
	dismiss: "Închide"
}, v = {
	title: "Profilul tău",
	subtitle: "Actualizează-ți datele și modul în care funcționează widgetul.",
	uploadAvatar: "Schimbă fotografia",
	removeAvatar: "Elimină fotografia",
	avatarUploading: "Se încarcă…",
	preferencesHeading: "Preferințe",
	preferenceLanguage: "Limbă",
	preferenceDesktopNotifications: "Notificări desktop",
	preferenceDesktopNotificationsHint: "Primește o notificare de sistem când widgetul nu este în prim-plan.",
	preferenceThemeMode: "Temă",
	themeAuto: "Ca în sistem",
	themeLight: "Luminoasă",
	themeDark: "Întunecată",
	themeLocked: "Tema este setată de operator.",
	pinnedHint: "Setat de operator — nu poate fi editat.",
	requiredHint: "Obligatoriu",
	invalidEmail: "Te rugăm să introduci o adresă de e-mail validă.",
	invalidPhone: "Folosește formatul internațional, ex. +14155552671.",
	noFields: "Aici nu este încă nimic de editat.",
	save: "Salvează modificările",
	saving: "Se salvează…",
	cancel: "Renunță",
	saved: "Modificările au fost salvate.",
	loading: "Se încarcă profilul…",
	loadError: "Profilul nu a putut fi încărcat. Încearcă din nou.",
	retry: "Reîncearcă",
	errorFieldNotAllowed: "Acest câmp nu poate fi editat în acest widget. Încearcă să reîncarci.",
	errorFieldPinned: "Acest câmp este blocat de contul tău.",
	errorFieldInvalid: "Unele valori nu sunt valide. Verifică câmpurile evidențiate.",
	errorThemeLocked: "Tema este blocată de operator.",
	errorFeatureDisabled: "Editarea profilului a fost dezactivată de operator.",
	errorGeneric: "Modificările nu au putut fi salvate. Încearcă din nou.",
	notificationsBlocked: "Notificările sunt blocate de browser. Actualizează permisiunile site-ului pentru a le activa.",
	notificationsRequest: "Permite notificările când ești întrebat pentru a activa această funcție.",
	systemFields: {
		avatar: "Fotografie",
		wexioId: "Wexio ID",
		telegramId: "Telegram ID",
		whatsappId: "WhatsApp ID",
		viberId: "Viber ID",
		instagramId: "Instagram ID",
		optInWhatsapp: "Acord WhatsApp",
		webVerified: "Vizitator verificat",
		firstName: "Prenume",
		lastName: "Nume de familie",
		username: "Nume de utilizator",
		language: "Limbă",
		email: "E-mail",
		phone: "Telefon",
		company: "Companie",
		location: "Locație",
		isValid: "Cont valid",
		chatStatus: "Stare chat",
		chatCategory: "Categorie chat",
		priority: "Prioritate",
		leadSource: "Sursă lead",
		leadStatus: "Stare lead",
		interestLevel: "Nivel de interes",
		productInterest: "Interes pentru produs",
		budgetRange: "Buget",
		purchaseTimeline: "Termen de achiziție",
		lastMessageSentAt: "Ultimul mesaj trimis",
		lastMessageReceivedAt: "Ultimul mesaj primit",
		lastSeenAt: "Văzut ultima dată",
		firstMessageReceivedAt: "Primul contact",
		isBlocked: "Blocat",
		registrationDate: "Înregistrat",
		aiAvailable: "Asistență AI",
		totalMessagesSent: "Mesaje trimise",
		totalMessagesReceived: "Mesaje primite",
		totalAiMessagesSent: "Mesaje AI trimise",
		totalBotMessagesSent: "Mesaje bot trimise",
		totalUserMessagesSent: "Mesaje operator trimise",
		flowCompletionRate: "Rată de finalizare flow",
		lastFlowCompleted: "Ultimul flow finalizat",
		totalFlowsStarted: "Flow-uri începute",
		totalFlowsCompleted: "Flow-uri finalizate"
	},
	systemFieldOptions: {
		chatStatus: {
			ISSUE: "Problemă",
			RESOLVED: "Rezolvat",
			PENDING: "În așteptare",
			IN_PROGRESS: "În curs",
			CLOSED: "Închis"
		},
		chatCategory: {
			SALES: "Vânzări",
			SUPPORT: "Suport",
			BILLING: "Facturare",
			FEEDBACK: "Feedback",
			GENERAL: "General",
			OTHER: "Altul"
		},
		priority: {
			LOW: "Scăzută",
			MEDIUM: "Medie",
			HIGH: "Ridicată",
			URGENT: "Urgentă"
		},
		leadStatus: {
			NEW: "Nou",
			CONTACTED: "Contactat",
			QUALIFIED: "Calificat",
			NEGOTIATING: "În negociere",
			WON: "Câștigat",
			LOST: "Pierdut"
		},
		interestLevel: {
			LOW: "Scăzut",
			MEDIUM: "Mediu",
			HIGH: "Ridicat",
			VERY_HIGH: "Foarte ridicat"
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

//# sourceMappingURL=widget-react-CwYIlZc0.js.map