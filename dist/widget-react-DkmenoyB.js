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
//#region messages/el.json
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
	home: "Αρχική",
	messages: "Μηνύματα",
	help: "Βοήθεια",
	news: "Νέα",
	profile: "Προφίλ"
}, r = {
	close: "Κλείσιμο",
	back: "Πίσω",
	conversationSubtitle: "Η ομάδα μας μπορεί επίσης να βοηθήσει",
	helpTitle: "Βοήθεια",
	newsTitle: "Νέα",
	expand: "Ανάπτυξη widget",
	collapse: "Σύμπτυξη widget"
}, i = {
	open: "Άνοιγμα συνομιλίας",
	close: "Κλείσιμο συνομιλίας",
	loading: "Σύνδεση…"
}, a = {
	greetingHeadline: "Γεια σου 👋",
	greetingSubheadline: "Πώς μπορούμε να βοηθήσουμε;",
	askTitle: "Κάνε μια ερώτηση",
	askSubtitle: "Το bot και η ομάδα μας μπορούν να βοηθήσουν",
	recentMessageLabel: "Πρόσφατο μήνυμα",
	recentMessageTitle: "Πρόσφατο μήνυμα",
	recentMessageFromFallback: "Gaia",
	recentMessageAgo: "4 ώ",
	recentMessageSample: "Γεια 👋 Ευχαριστούμε που επικοινώνησες — θα επανέλθουμε σύντομα.",
	featuredArticleLoading: "Επιλεγμένο άρθρο",
	featuredArticleTap: "Πάτησε για να διαβάσεις",
	featuredArticleEmpty: "Διάλεξε ένα άρθρο",
	featuredArticleSetUp: "Ρύθμισε αυτό το μπλοκ στον πίνακά σου",
	featuredArticleDemoEyebrow: "Pioneer · Κράτησε την ημερομηνία",
	featuredArticleDemoHeadline: "8 Οκτωβρίου 2026",
	featuredArticleDemoSubline: "Σαν Φρανσίσκο · με φυσική παρουσία + διαδικτυακά",
	featuredArticleDemoCta: "Δες το πρόγραμμα του launch",
	seeAgenda: "Δες το πρόγραμμα του launch",
	browseHelp: "Περιήγηση στη Βοήθεια",
	whatsNew: "Τι νέο υπάρχει",
	searchPlaceholder: "Αναζήτηση στη Βοήθεια",
	pinnedArticlesTitle: "Διάβασε πρώτα αυτά",
	popularArticlesTitle: "Δημοφιλή άρθρα",
	pinnedArticleRow: "Καρφιτσωμένο άρθρο {n}",
	newsPreviewTitle: "Τελευταία νέα",
	newsPreviewRow: "Ενημέρωση {n}",
	myConversationsTitle: "Οι συνομιλίες σου",
	myConversationsEmpty: "Δες τις συνομιλίες σου",
	teamStatusOnline: "Είμαστε online",
	teamStatusReplyTime: "Συνήθως απαντάμε σε λίγα λεπτά"
}, o = {
	today: "Σήμερα",
	yesterday: "Χθες",
	unreadMessages: "Μη αναγνωσμένα μηνύματα",
	emptyTitle: "Δεν υπάρχουν ακόμη μηνύματα",
	emptyBody: "Ξεκίνα μια συνομιλία και η ομάδα μας θα σου απαντήσει εδώ.",
	sendCta: "Στείλε μας μήνυμα",
	attach: "Επισύναψε αρχείο",
	commands: "Γρήγορες εντολές",
	record: "Ηχογράφησε φωνητικό μήνυμα",
	stopRecording: "Διακοπή ηχογράφησης",
	recording: "Ηχογράφηση…",
	uploading: "Μεταφόρτωση…",
	uploadFailed: "Η μεταφόρτωση απέτυχε",
	voiceDenied: "Απορρίφθηκε η πρόσβαση στο μικρόφωνο",
	voiceUnsupported: "Η εγγραφή φωνής δεν υποστηρίζεται σε αυτό το πρόγραμμα περιήγησης",
	fileTooLarge: "Το αρχείο είναι πολύ μεγάλο (έως 10 MB)",
	fileMimeNotAllowed: "Αυτός ο τύπος αρχείου δεν υποστηρίζεται",
	emoji: "Εισαγωγή emoji",
	cancelRecording: "Ακύρωση ηχογράφησης",
	pauseRecording: "Παύση ηχογράφησης",
	resumeRecording: "Συνέχιση ηχογράφησης",
	playPreview: "Αναπαραγωγή ηχογράφησης",
	emojiPicker: "Επιλογέας emoji",
	emojiSearch: "Αναζήτηση…",
	playAudio: "Αναπαραγωγή",
	pauseAudio: "Παύση",
	openAudio: "Άνοιγμα ήχου",
	removeAttachment: "Αφαίρεση",
	aiAssistant: "AI βοηθός",
	operator: "Χειριστής",
	openImage: "Άνοιγμα εικόνας",
	openPreview: "Άνοιγμα προεπισκόπησης",
	play: "Αναπαραγωγή",
	pause: "Παύση",
	typing: "πληκτρολογεί…",
	aiThinking: "σκέφτεται…",
	aiSearching: "ψάχνει…",
	typingSomeone: "Κάποιος",
	signInToChat: "Συνδέσου για να ξεκινήσεις τη συνομιλία.",
	signInUnavailable: "Η σύνδεση δεν είναι διαθέσιμη αυτή τη στιγμή.",
	googleSignIn: "Σύνδεση με Google",
	passkeySignIn: "Σύνδεση με passkey",
	passkeyRegister: "Πρώτη φορά; Δημιούργησε ένα passkey",
	passkeyError: "Δεν ήταν δυνατή η σύνδεση. Δοκίμασε ξανά.",
	passkeyNoCredential: "Δεν υπάρχει ακόμη passkey σε αυτή τη συσκευή — πάτησε «Δημιούργησε ένα passkey» για να δημιουργήσεις ένα.",
	googleSignInDemo: "Συνέχεια με Google"
}, s = {
	title: "Πριν ξεκινήσουμε",
	subtitle: "Λίγες πληροφορίες ώστε η ομάδα μας να σε βοηθήσει πιο γρήγορα.",
	labelName: "Όνομα",
	labelEmail: "Email",
	labelPhone: "Τηλέφωνο",
	labelCustom: "Λεπτομέρειες",
	required: "Υποχρεωτικό",
	invalidEmail: "Εισήγαγε ένα έγκυρο email",
	invalidPhone: "Εισήγαγε έναν έγκυρο αριθμό τηλεφώνου",
	submit: "Συνέχεια",
	submitFailed: "Δεν ήταν δυνατή η υποβολή — δοκίμασε ξανά."
}, c = {
	searchPlaceholder: "Αναζήτηση στη Βοήθεια",
	emptyTitle: "Δεν υπάρχουν ακόμη άρθρα",
	emptyBody: "Ο χειριστής σου δεν έχει δημοσιεύσει ακόμη τίποτα.",
	back: "Πίσω",
	helpful: "Σου ήταν χρήσιμο;",
	yes: "Ναι",
	no: "Όχι",
	thanks: "Ευχαριστούμε για την ανατροφοδότηση.",
	unresolvedCta: "Χρειάζεσαι ακόμη βοήθεια; Στείλε μας μήνυμα",
	noResults: "Κανένα αποτέλεσμα",
	articleNotFound: "Το άρθρο δεν βρέθηκε",
	articleNotTranslated: "Αυτό το άρθρο δεν είναι ακόμη διαθέσιμο στη γλώσσα σου.",
	writtenBy: "Γράφτηκε από {names}",
	relatedTitle: "Σχετικά άρθρα",
	collectionsCount: "{count, plural, =0 {Καμία συλλογή} one {# συλλογή} other {# συλλογές}}",
	articlesCount: "{count, plural, =0 {Κανένα άρθρο} one {Άρθρα: #} other {Άρθρα: #}}",
	authorsByline: "Συγγραφείς {first}{remaining, plural, =0 {} one { και # ακόμη} other { και # ακόμη}}"
}, l = {
	emptyTitle: "Καμία ενημέρωση ακόμη",
	emptyBody: "Επίστρεψε εδώ για νέα προϊόντος και ανακοινώσεις.",
	helpful: "Σου ήταν χρήσιμο αυτό το άρθρο;",
	yes: "Ναι",
	no: "Όχι",
	thanks: "Ευχαριστούμε για την ανατροφοδότηση.",
	searchPlaceholder: "Αναζήτηση στα νέα",
	noResults: "Καμία αντίστοιχη δημοσίευση",
	editedAt: "επεξεργάστηκε {when}",
	articleNotFound: "Το άρθρο δεν βρέθηκε.",
	articleNotTranslated: "Αυτή η ανάρτηση δεν είναι ακόμη διαθέσιμη στη γλώσσα σου.",
	readOriginal: "Διάβασε το πρωτότυπο",
	relatedTitle: "Σχετικά",
	writtenBy: "Γράφτηκε από {names}"
}, u = {
	ariaLabel: "Αντιδράσεις",
	tapAria: "Αντίδραση με {emoji}"
}, d = {
	title: "Διάβασε σε άλλη γλώσσα",
	ariaLabel: "Γλώσσες άρθρου"
}, f = {
	poweredBy: "Με την υποστήριξη του",
	wexio: "Wexio"
}, p = {
	mute: "Σίγαση ήχων ειδοποιήσεων",
	unmute: "Ενεργοποίηση ήχων ειδοποιήσεων"
}, m = {
	tableOfContents: "Πίνακας περιεχομένων",
	tabFallback: "Καρτέλα {n}"
}, h = {
	newMessage: "Νέο μήνυμα",
	dismiss: "Κλείσιμο",
	aiAssistant: "AI βοηθός",
	operator: "Χειριστής"
}, g = {
	mediaPreview: "Προεπισκόπηση πολυμέσων",
	close: "Κλείσιμο προεπισκόπησης",
	previous: "Προηγούμενο",
	next: "Επόμενο"
}, _ = {
	turnstileTitle: "Δεν ήταν δυνατή η επαλήθευση του προγράμματος περιήγησης",
	turnstileBody: "Δεν μπορέσαμε να ολοκληρώσουμε τον έλεγχο ασφαλείας. Ορισμένες φορές αυτό οφείλεται σε πρόβλημα δικτύου ή σε ad-blocker — δοκίμασε ξανά ή φόρτωσε ξανά τη σελίδα.",
	genericTitle: "Δεν ήταν δυνατή η σύνδεση",
	genericBody: "Κάτι πήγε στραβά κατά τη σύνδεσή σου. Δοκίμασε ξανά σε λίγο.",
	retry: "Δοκίμασε ξανά",
	dismiss: "Κλείσιμο"
}, v = {
	title: "Το προφίλ σου",
	subtitle: "Ενημέρωσε τα στοιχεία σου και τη συμπεριφορά του widget.",
	uploadAvatar: "Αλλαγή φωτογραφίας",
	removeAvatar: "Αφαίρεση φωτογραφίας",
	avatarUploading: "Μεταφόρτωση…",
	preferencesHeading: "Προτιμήσεις",
	preferenceLanguage: "Γλώσσα",
	preferenceDesktopNotifications: "Ειδοποιήσεις επιφάνειας εργασίας",
	preferenceDesktopNotificationsHint: "Λάβε ειδοποίηση συστήματος όταν το widget δεν είναι εστιασμένο.",
	preferenceThemeMode: "Θέμα",
	themeAuto: "Όπως το σύστημα",
	themeLight: "Φωτεινό",
	themeDark: "Σκούρο",
	themeLocked: "Το θέμα έχει οριστεί από τον χειριστή.",
	pinnedHint: "Έχει οριστεί από τον χειριστή — δεν επεξεργάζεται.",
	requiredHint: "Υποχρεωτικό",
	invalidEmail: "Εισήγαγε μια έγκυρη διεύθυνση email.",
	invalidPhone: "Χρησιμοποίησε διεθνή μορφή, π.χ. +14155552671.",
	noFields: "Δεν υπάρχει τίποτα προς επεξεργασία ακόμη.",
	save: "Αποθήκευση αλλαγών",
	saving: "Αποθήκευση…",
	cancel: "Απόρριψη",
	saved: "Οι αλλαγές αποθηκεύτηκαν.",
	loading: "Φόρτωση προφίλ…",
	loadError: "Δεν ήταν δυνατή η φόρτωση του προφίλ σου. Δοκίμασε ξανά.",
	retry: "Δοκίμασε ξανά",
	errorFieldNotAllowed: "Αυτό το πεδίο δεν επεξεργάζεται σε αυτό το widget. Δοκίμασε ανανέωση.",
	errorFieldPinned: "Αυτό το πεδίο είναι κλειδωμένο από τον λογαριασμό σου.",
	errorFieldInvalid: "Ορισμένες τιμές δεν είναι έγκυρες. Έλεγξε τα επισημασμένα πεδία.",
	errorThemeLocked: "Το θέμα είναι κλειδωμένο από τον χειριστή.",
	errorFeatureDisabled: "Η επεξεργασία προφίλ έχει απενεργοποιηθεί από τον χειριστή.",
	errorGeneric: "Δεν ήταν δυνατή η αποθήκευση των αλλαγών. Δοκίμασε ξανά.",
	notificationsBlocked: "Οι ειδοποιήσεις είναι αποκλεισμένες από το πρόγραμμα περιήγησης. Ενημέρωσε τις άδειες της ιστοσελίδας για να τις ενεργοποιήσεις.",
	notificationsRequest: "Επίτρεψε τις ειδοποιήσεις όταν σου ζητηθεί για να το ενεργοποιήσεις.",
	systemFields: {
		avatar: "Φωτογραφία",
		wexioId: "Wexio ID",
		telegramId: "Telegram ID",
		whatsappId: "WhatsApp ID",
		viberId: "Viber ID",
		instagramId: "Instagram ID",
		optInWhatsapp: "Συγκατάθεση WhatsApp",
		webVerified: "Επαληθευμένος επισκέπτης",
		firstName: "Όνομα",
		lastName: "Επώνυμο",
		username: "Όνομα χρήστη",
		language: "Γλώσσα",
		email: "Email",
		phone: "Τηλέφωνο",
		company: "Εταιρεία",
		location: "Τοποθεσία",
		isValid: "Έγκυρος λογαριασμός",
		chatStatus: "Κατάσταση συνομιλίας",
		chatCategory: "Κατηγορία συνομιλίας",
		priority: "Προτεραιότητα",
		leadSource: "Πηγή lead",
		leadStatus: "Κατάσταση lead",
		interestLevel: "Επίπεδο ενδιαφέροντος",
		productInterest: "Ενδιαφέρον προϊόντος",
		budgetRange: "Προϋπολογισμός",
		purchaseTimeline: "Χρονοδιάγραμμα αγοράς",
		lastMessageSentAt: "Τελευταίο σταλμένο μήνυμα",
		lastMessageReceivedAt: "Τελευταίο μήνυμα που λήφθηκε",
		lastSeenAt: "Τελευταία εμφάνιση",
		firstMessageReceivedAt: "Πρώτη επικοινωνία",
		isBlocked: "Αποκλεισμένος",
		registrationDate: "Εγγραφή",
		aiAvailable: "Υποστήριξη AI",
		totalMessagesSent: "Σταλμένα μηνύματα",
		totalMessagesReceived: "Ληφθέντα μηνύματα",
		totalAiMessagesSent: "Σταλμένα μηνύματα AI",
		totalBotMessagesSent: "Σταλμένα μηνύματα bot",
		totalUserMessagesSent: "Σταλμένα μηνύματα χειριστή",
		flowCompletionRate: "Ποσοστό ολοκλήρωσης flow",
		lastFlowCompleted: "Τελευταίο ολοκληρωμένο flow",
		totalFlowsStarted: "Flows που ξεκίνησαν",
		totalFlowsCompleted: "Flows που ολοκληρώθηκαν"
	},
	systemFieldOptions: {
		chatStatus: {
			ISSUE: "Πρόβλημα",
			RESOLVED: "Επιλύθηκε",
			PENDING: "Εκκρεμεί",
			IN_PROGRESS: "Σε εξέλιξη",
			CLOSED: "Έκλεισε"
		},
		chatCategory: {
			SALES: "Πωλήσεις",
			SUPPORT: "Υποστήριξη",
			BILLING: "Χρεώσεις",
			FEEDBACK: "Ανατροφοδότηση",
			GENERAL: "Γενικά",
			OTHER: "Άλλο"
		},
		priority: {
			LOW: "Χαμηλή",
			MEDIUM: "Μεσαία",
			HIGH: "Υψηλή",
			URGENT: "Επείγουσα"
		},
		leadStatus: {
			NEW: "Νέο",
			CONTACTED: "Επικοινωνήθηκε",
			QUALIFIED: "Κατάλληλο",
			NEGOTIATING: "Σε διαπραγμάτευση",
			WON: "Κερδίθηκε",
			LOST: "Χάθηκε"
		},
		interestLevel: {
			LOW: "Χαμηλό",
			MEDIUM: "Μεσαίο",
			HIGH: "Υψηλό",
			VERY_HIGH: "Πολύ υψηλό"
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

//# sourceMappingURL=widget-react-DkmenoyB.js.map