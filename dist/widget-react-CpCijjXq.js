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
//#region messages/cs.json
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
	home: "Domů",
	messages: "Zprávy",
	help: "Nápověda",
	news: "Novinky",
	profile: "Profil"
}, r = {
	close: "Zavřít",
	back: "Zpět",
	conversationSubtitle: "Pomůže vám i náš tým",
	helpTitle: "Nápověda",
	newsTitle: "Novinky",
	expand: "Rozbalit widget",
	collapse: "Sbalit widget"
}, i = {
	open: "Otevřít chat",
	close: "Zavřít chat",
	loading: "Připojování…"
}, a = {
	greetingHeadline: "Ahoj 👋",
	greetingSubheadline: "Jak vám můžeme pomoci?",
	askTitle: "Položit otázku",
	askSubtitle: "Pomůže náš bot i tým",
	recentMessageLabel: "Poslední zpráva",
	recentMessageTitle: "Poslední zpráva",
	recentMessageFromFallback: "Gaia",
	recentMessageAgo: "4 h",
	recentMessageSample: "Ahoj 👋 Děkujeme za zprávu - brzy se vám ozveme.",
	featuredArticleLoading: "Doporučený článek",
	featuredArticleTap: "Klepnutím otevřete",
	featuredArticleEmpty: "Vyberte článek",
	featuredArticleSetUp: "Nakonfigurujte tento blok v panelu",
	featuredArticleDemoEyebrow: "Pioneer · Rezervujte si datum",
	featuredArticleDemoHeadline: "8. října 2026",
	featuredArticleDemoSubline: "San Francisco · Osobně + online",
	featuredArticleDemoCta: "Zobrazit program",
	seeAgenda: "Zobrazit program",
	browseHelp: "Procházet nápovědu",
	whatsNew: "Co je nového",
	searchPlaceholder: "Hledat v nápovědě",
	pinnedArticlesTitle: "Začněte tímto",
	popularArticlesTitle: "Populární články",
	pinnedArticleRow: "Připnutý článek {n}",
	newsPreviewTitle: "Nejnovější novinky",
	newsPreviewRow: "Aktualizace {n}",
	myConversationsTitle: "Vaše konverzace",
	myConversationsEmpty: "Zobrazit vaše konverzace",
	teamStatusOnline: "Jsme online",
	teamStatusReplyTime: "Obvykle odpovídáme do několika minut"
}, o = {
	today: "Dnes",
	yesterday: "Včera",
	unreadMessages: "Nepřečtené zprávy",
	emptyTitle: "Zatím žádné zprávy",
	emptyBody: "Začněte konverzaci a náš tým vám odpoví zde.",
	sendCta: "Poslat zprávu",
	attach: "Připojit soubor",
	commands: "Rychlé příkazy",
	record: "Nahrát hlasovou zprávu",
	stopRecording: "Zastavit nahrávání",
	recording: "Nahrávám…",
	uploading: "Nahrávám…",
	uploadFailed: "Nahrávání selhalo",
	voiceDenied: "Přístup k mikrofonu byl odepřen",
	voiceUnsupported: "Tento prohlížeč nepodporuje nahrávání hlasu",
	fileTooLarge: "Soubor je příliš velký (max. 10 MB)",
	fileMimeNotAllowed: "Tento typ souboru není podporován",
	emoji: "Vložit emoji",
	cancelRecording: "Zrušit nahrávání",
	pauseRecording: "Pozastavit nahrávání",
	resumeRecording: "Pokračovat v nahrávání",
	playPreview: "Přehrát nahrávku",
	emojiPicker: "Výběr emoji",
	emojiSearch: "Hledat…",
	playAudio: "Přehrát",
	pauseAudio: "Pauza",
	openAudio: "Otevřít zvuk",
	removeAttachment: "Odebrat",
	aiAssistant: "AI asistent",
	operator: "Operátor",
	openImage: "Otevřít obrázek",
	openPreview: "Otevřít náhled",
	play: "Přehrát",
	pause: "Pauza",
	typing: "píše…",
	aiThinking: "přemýšlí…",
	aiSearching: "prohledává…",
	typingSomeone: "Někdo",
	signInToChat: "Přihlaste se prosím, abyste mohli začít konverzaci.",
	signInUnavailable: "Přihlášení není momentálně dostupné.",
	googleSignIn: "Přihlásit se přes Google",
	passkeySignIn: "Přihlásit se pomocí passkey",
	passkeyRegister: "Poprvé? Nastavte passkey",
	passkeyError: "Přihlášení se nezdařilo. Zkuste to znovu.",
	passkeyNoCredential: "Na tomto zařízení zatím není žádný passkey — klepnutím na „Nastavte passkey“ ho vytvoříte.",
	googleSignInDemo: "Pokračovat s Google"
}, s = {
	title: "Než začneme",
	subtitle: "Pár údajů, aby vám náš tým mohl pomoci rychleji.",
	labelName: "Jméno",
	labelEmail: "E-mail",
	labelPhone: "Telefon",
	labelCustom: "Podrobnosti",
	required: "Povinné",
	invalidEmail: "Zadejte platnou e-mailovou adresu",
	invalidPhone: "Zadejte platné telefonní číslo",
	submit: "Pokračovat",
	submitFailed: "Odeslání se nezdařilo - zkuste to znovu."
}, c = {
	searchPlaceholder: "Hledat v nápovědě",
	emptyTitle: "Zatím žádné články",
	emptyBody: "Váš operátor zatím nic nezveřejnil.",
	back: "Zpět",
	helpful: "Bylo to užitečné?",
	yes: "Ano",
	no: "Ne",
	thanks: "Děkujeme za zpětnou vazbu.",
	unresolvedCta: "Potřebujete další pomoc? Napište nám",
	noResults: "Žádné výsledky",
	articleNotFound: "Článek nebyl nalezen",
	articleNotTranslated: "Tento článek zatím není dostupný ve vašem jazyce.",
	writtenBy: "Autor: {names}",
	relatedTitle: "Související články",
	collectionsCount: "{count, plural, =0 {Žádné kolekce} one {# kolekce} few {# kolekce} many {# kolekce} other {# kolekcí}}",
	articlesCount: "{count, plural, =0 {Žádné články} one {Články: #} few {Články: #} many {Články: #} other {Články: #}}",
	authorsByline: "Autoři {first}{remaining, plural, =0 {} one { a # další} few { a # další} many { a # dalších} other { a # dalších}}"
}, l = {
	emptyTitle: "Zatím žádné novinky",
	emptyBody: "Vracejte se sem pro novinky o produktu a oznámení.",
	helpful: "Byl tento článek užitečný?",
	yes: "Ano",
	no: "Ne",
	thanks: "Děkujeme za zpětnou vazbu.",
	searchPlaceholder: "Hledat v novinkách",
	noResults: "Žádné odpovídající příspěvky",
	editedAt: "upraveno {when}",
	articleNotFound: "Článek nebyl nalezen.",
	articleNotTranslated: "Tento příspěvek zatím není dostupný ve vašem jazyce.",
	readOriginal: "Přečíst originál",
	relatedTitle: "Související",
	writtenBy: "Autor: {names}"
}, u = {
	ariaLabel: "Reakce",
	tapAria: "Reagovat: {emoji}"
}, d = {
	title: "Číst v jiném jazyce",
	ariaLabel: "Jazyky článku"
}, f = {
	poweredBy: "Pohání",
	wexio: "Wexio"
}, p = {
	mute: "Vypnout zvuky oznámení",
	unmute: "Zapnout zvuky oznámení"
}, m = {
	tableOfContents: "Obsah",
	tabFallback: "Karta {n}"
}, h = {
	newMessage: "Nová zpráva",
	dismiss: "Zavřít",
	aiAssistant: "AI asistent",
	operator: "Operátor"
}, g = {
	mediaPreview: "Náhled média",
	close: "Zavřít náhled",
	previous: "Předchozí",
	next: "Další"
}, _ = {
	turnstileTitle: "Nepodařilo se ověřit prohlížeč",
	turnstileBody: "Nepodařilo se dokončit bezpečnostní kontrolu. Někdy je důvodem síť nebo blokátor reklam — zkuste to znovu nebo načtěte stránku.",
	genericTitle: "Nepodařilo se připojit",
	genericBody: "Při přihlašování se něco pokazilo. Zkuste to za chvíli znovu.",
	retry: "Zkusit znovu",
	dismiss: "Zavřít"
}, v = {
	title: "Váš profil",
	subtitle: "Aktualizujte své údaje a chování widgetu.",
	uploadAvatar: "Změnit fotku",
	removeAvatar: "Odebrat fotku",
	avatarUploading: "Nahrávám…",
	preferencesHeading: "Předvolby",
	preferenceLanguage: "Jazyk",
	preferenceDesktopNotifications: "Oznámení na ploše",
	preferenceDesktopNotificationsHint: "Získejte systémové oznámení, když widget není aktivní.",
	preferenceThemeMode: "Motiv",
	themeAuto: "Podle systému",
	themeLight: "Světlý",
	themeDark: "Tmavý",
	themeLocked: "Motiv nastavil operátor.",
	pinnedHint: "Nastavil operátor — nelze upravovat.",
	requiredHint: "Povinné",
	invalidEmail: "Zadejte platnou e-mailovou adresu.",
	invalidPhone: "Použijte mezinárodní formát, např. +14155552671.",
	noFields: "Zatím tu není nic k úpravě.",
	save: "Uložit změny",
	saving: "Ukládám…",
	cancel: "Zahodit",
	saved: "Změny uloženy.",
	loading: "Načítání profilu…",
	loadError: "Nepodařilo se načíst profil. Zkuste to znovu.",
	retry: "Opakovat",
	errorFieldNotAllowed: "Toto pole nelze v tomto widgetu upravovat. Zkuste obnovit stránku.",
	errorFieldPinned: "Toto pole je uzamčeno vaším účtem.",
	errorFieldInvalid: "Některé hodnoty nejsou platné. Zkontrolujte zvýrazněná pole.",
	errorThemeLocked: "Motiv uzamkl operátor.",
	errorFeatureDisabled: "Úpravy profilu vypnul operátor.",
	errorGeneric: "Nepodařilo se uložit změny. Zkuste to znovu.",
	notificationsBlocked: "Oznámení jsou zablokována prohlížečem. Aktualizujte oprávnění webu, abyste je povolili.",
	notificationsRequest: "Když se objeví výzva, povolte oznámení, abyste tuto funkci aktivovali.",
	systemFields: {
		avatar: "Fotka",
		wexioId: "Wexio ID",
		telegramId: "Telegram ID",
		whatsappId: "WhatsApp ID",
		viberId: "Viber ID",
		instagramId: "Instagram ID",
		optInWhatsapp: "Souhlas s WhatsApp",
		webVerified: "Ověřený návštěvník",
		firstName: "Jméno",
		lastName: "Příjmení",
		username: "Uživatelské jméno",
		language: "Jazyk",
		email: "E-mail",
		phone: "Telefon",
		company: "Společnost",
		location: "Lokalita",
		isValid: "Platný účet",
		chatStatus: "Stav chatu",
		chatCategory: "Kategorie chatu",
		priority: "Priorita",
		leadSource: "Zdroj leadu",
		leadStatus: "Stav leadu",
		interestLevel: "Úroveň zájmu",
		productInterest: "Zájem o produkt",
		budgetRange: "Rozpočet",
		purchaseTimeline: "Časový plán nákupu",
		lastMessageSentAt: "Naposledy odesláno",
		lastMessageReceivedAt: "Naposledy přijato",
		lastSeenAt: "Naposledy viděn",
		firstMessageReceivedAt: "První kontakt",
		isBlocked: "Zablokovaný",
		registrationDate: "Registrace",
		aiAvailable: "Pomoc AI",
		totalMessagesSent: "Odeslané zprávy",
		totalMessagesReceived: "Přijaté zprávy",
		totalAiMessagesSent: "Odeslané AI zprávy",
		totalBotMessagesSent: "Odeslané bot zprávy",
		totalUserMessagesSent: "Odeslané zprávy operátora",
		flowCompletionRate: "Úspěšnost dokončení flow",
		lastFlowCompleted: "Poslední dokončený flow",
		totalFlowsStarted: "Spuštěné flow",
		totalFlowsCompleted: "Dokončené flow"
	},
	systemFieldOptions: {
		chatStatus: {
			ISSUE: "Problém",
			RESOLVED: "Vyřešeno",
			PENDING: "Čeká",
			IN_PROGRESS: "Probíhá",
			CLOSED: "Uzavřeno"
		},
		chatCategory: {
			SALES: "Prodej",
			SUPPORT: "Podpora",
			BILLING: "Fakturace",
			FEEDBACK: "Zpětná vazba",
			GENERAL: "Obecné",
			OTHER: "Jiné"
		},
		priority: {
			LOW: "Nízká",
			MEDIUM: "Střední",
			HIGH: "Vysoká",
			URGENT: "Naléhavá"
		},
		leadStatus: {
			NEW: "Nový",
			CONTACTED: "Kontaktován",
			QUALIFIED: "Kvalifikovaný",
			NEGOTIATING: "Jednání",
			WON: "Získaný",
			LOST: "Ztracený"
		},
		interestLevel: {
			LOW: "Nízká",
			MEDIUM: "Střední",
			HIGH: "Vysoká",
			VERY_HIGH: "Velmi vysoká"
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

//# sourceMappingURL=widget-react-CpCijjXq.js.map