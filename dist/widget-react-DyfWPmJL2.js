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
//#region messages/tr.json
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
	home: "Ana sayfa",
	messages: "Mesajlar",
	help: "Yardım",
	news: "Haberler",
	profile: "Profil"
}, r = {
	close: "Kapat",
	back: "Geri",
	conversationSubtitle: "Ekibimiz de yardımcı olabilir",
	helpTitle: "Yardım",
	newsTitle: "Haberler",
	expand: "Widget'ı genişlet",
	collapse: "Widget'ı küçült"
}, i = {
	open: "Sohbeti aç",
	close: "Sohbeti kapat",
	loading: "Bağlanıyor…"
}, a = {
	greetingHeadline: "Merhaba 👋",
	greetingSubheadline: "Nasıl yardımcı olabiliriz?",
	askTitle: "Soru sor",
	askSubtitle: "Botumuz ve ekibimiz yardımcı olabilir",
	recentMessageLabel: "Son mesaj",
	recentMessageTitle: "Son mesaj",
	recentMessageFromFallback: "Gaia",
	recentMessageAgo: "4 sa",
	recentMessageSample: "Merhaba 👋 Bize ulaştığın için teşekkürler — kısa süre içinde döneceğiz.",
	featuredArticleLoading: "Öne çıkan makale",
	featuredArticleTap: "Okumak için dokun",
	featuredArticleEmpty: "Bir makale seç",
	featuredArticleSetUp: "Bu bloğu panelinde yapılandır",
	featuredArticleDemoEyebrow: "Pioneer · Tarihi not al",
	featuredArticleDemoHeadline: "8 Ekim 2026",
	featuredArticleDemoSubline: "San Francisco · Yüz yüze + çevrimiçi",
	featuredArticleDemoCta: "Lansman programını gör",
	seeAgenda: "Lansman programını gör",
	browseHelp: "Yardıma göz at",
	whatsNew: "Yenilikler",
	searchPlaceholder: "Yardımda ara",
	pinnedArticlesTitle: "Önce bunları oku",
	popularArticlesTitle: "Popüler makaleler",
	pinnedArticleRow: "Sabitlenmiş makale {n}",
	newsPreviewTitle: "Son haberler",
	newsPreviewRow: "Haber güncellemesi {n}",
	myConversationsTitle: "Sohbetlerin",
	myConversationsEmpty: "Sohbetlerini görüntüle",
	teamStatusOnline: "Çevrimiçiyiz",
	teamStatusReplyTime: "Genellikle birkaç dakika içinde yanıtlıyoruz"
}, o = {
	today: "Bugün",
	yesterday: "Dün",
	unreadMessages: "Okunmamış mesajlar",
	emptyTitle: "Henüz mesaj yok",
	emptyBody: "Bir sohbet başlat — ekibimiz buradan sana dönecek.",
	sendCta: "Bize mesaj gönder",
	attach: "Dosya ekle",
	commands: "Hızlı komutlar",
	record: "Sesli mesaj kaydet",
	stopRecording: "Kaydı durdur",
	recording: "Kaydediliyor…",
	uploading: "Yükleniyor…",
	uploadFailed: "Yükleme başarısız",
	voiceDenied: "Mikrofon erişimi reddedildi",
	voiceUnsupported: "Bu tarayıcı ses kaydını desteklemiyor",
	fileTooLarge: "Dosya çok büyük (en fazla 10 MB)",
	fileMimeNotAllowed: "Bu dosya türü desteklenmiyor",
	emoji: "Emoji ekle",
	cancelRecording: "Kaydı iptal et",
	pauseRecording: "Kaydı duraklat",
	resumeRecording: "Kaydı sürdür",
	playPreview: "Kaydı oynat",
	emojiPicker: "Emoji seçici",
	emojiSearch: "Ara…",
	playAudio: "Oynat",
	pauseAudio: "Duraklat",
	openAudio: "Sesi aç",
	removeAttachment: "Kaldır",
	aiAssistant: "AI asistan",
	operator: "Operatör",
	openImage: "Görseli aç",
	openPreview: "Önizlemeyi aç",
	play: "Oynat",
	pause: "Duraklat",
	typing: "yazıyor…",
	aiThinking: "düşünüyor…",
	aiSearching: "araştırıyor…",
	typingSomeone: "Biri",
	signInToChat: "Sohbete başlamak için lütfen giriş yap.",
	signInUnavailable: "Giriş şu anda kullanılamıyor.",
	googleSignIn: "Google ile giriş yap",
	passkeySignIn: "Passkey ile giriş yap",
	passkeyRegister: "İlk kez mi? Bir passkey oluştur",
	passkeyError: "Giriş yapılamadı. Lütfen tekrar dene.",
	passkeyNoCredential: "Bu cihazda henüz passkey yok — eklemek için “Bir passkey oluştur”a dokun.",
	googleSignInDemo: "Google ile devam et"
}, s = {
	title: "Başlamadan önce",
	subtitle: "Ekibimizin sana daha hızlı yardım edebilmesi için birkaç bilgi.",
	labelName: "İsim",
	labelEmail: "E-posta",
	labelPhone: "Telefon",
	labelCustom: "Ayrıntılar",
	required: "Zorunlu",
	invalidEmail: "Lütfen geçerli bir e-posta gir",
	invalidPhone: "Lütfen geçerli bir telefon numarası gir",
	submit: "Devam et",
	submitFailed: "Gönderilemedi — lütfen tekrar dene."
}, c = {
	searchPlaceholder: "Yardımda ara",
	emptyTitle: "Henüz makale yok",
	emptyBody: "Operatörün henüz bir şey yayımlamadı.",
	back: "Geri",
	helpful: "Bu yararlı oldu mu?",
	yes: "Evet",
	no: "Hayır",
	thanks: "Geri bildirim için teşekkürler.",
	unresolvedCta: "Hâlâ yardıma ihtiyacın var mı? Bize yaz",
	noResults: "Sonuç yok",
	articleNotFound: "Makale bulunamadı",
	articleNotTranslated: "Bu makale henüz senin dilinde mevcut değil.",
	writtenBy: "Yazan: {names}",
	relatedTitle: "İlgili makaleler",
	collectionsCount: "{count, plural, =0 {Koleksiyon yok} one {# koleksiyon} other {# koleksiyon}}",
	articlesCount: "{count, plural, =0 {Makale yok} one {Makale: #} other {Makale: #}}",
	authorsByline: "Yazarlar {first}{remaining, plural, =0 {} one { ve # kişi daha} other { ve # kişi daha}}"
}, l = {
	emptyTitle: "Henüz güncelleme yok",
	emptyBody: "Ürün haberleri ve duyurular için buraya tekrar bak.",
	helpful: "Bu makale yararlı oldu mu?",
	yes: "Evet",
	no: "Hayır",
	thanks: "Geri bildirim için teşekkürler.",
	searchPlaceholder: "Haberlerde ara",
	noResults: "Eşleşen gönderi yok",
	editedAt: "{when} tarihinde düzenlendi",
	articleNotFound: "Makale bulunamadı.",
	articleNotTranslated: "Bu gönderi henüz senin dilinde mevcut değil.",
	readOriginal: "Orijinali oku",
	relatedTitle: "İlgili",
	writtenBy: "Yazan: {names}"
}, u = {
	ariaLabel: "Tepkiler",
	tapAria: "{emoji} ile tepki ver"
}, d = {
	title: "Başka bir dilde oku",
	ariaLabel: "Makale dilleri"
}, f = {
	poweredBy: "Sağlayıcı:",
	wexio: "Wexio"
}, p = {
	mute: "Bildirim seslerini kapat",
	unmute: "Bildirim seslerini aç"
}, m = {
	tableOfContents: "İçindekiler",
	tabFallback: "Sekme {n}"
}, h = {
	newMessage: "Yeni mesaj",
	dismiss: "Kapat",
	aiAssistant: "AI asistan",
	operator: "Operatör"
}, g = {
	mediaPreview: "Medya önizlemesi",
	close: "Önizlemeyi kapat",
	previous: "Önceki",
	next: "Sonraki"
}, _ = {
	turnstileTitle: "Tarayıcın doğrulanamadı",
	turnstileBody: "Güvenlik kontrolünü tamamlayamadık. Bu bazen bir ağ veya reklam engelleyici sorunudur — tekrar dene ya da sayfayı yenile.",
	genericTitle: "Bağlanılamadı",
	genericBody: "Giriş yapılırken bir sorun oluştu. Lütfen biraz sonra tekrar dene.",
	retry: "Tekrar dene",
	dismiss: "Kapat"
}, v = {
	title: "Profilin",
	subtitle: "Bilgilerini ve widget davranışını güncelle.",
	uploadAvatar: "Fotoğrafı değiştir",
	removeAvatar: "Fotoğrafı kaldır",
	avatarUploading: "Yükleniyor…",
	preferencesHeading: "Tercihler",
	preferenceLanguage: "Dil",
	preferenceDesktopNotifications: "Masaüstü bildirimleri",
	preferenceDesktopNotificationsHint: "Widget odakta değilken bir sistem bildirimi al.",
	preferenceThemeMode: "Tema",
	themeAuto: "Sistemle aynı",
	themeLight: "Açık",
	themeDark: "Koyu",
	themeLocked: "Tema operatör tarafından ayarlanmış.",
	pinnedHint: "Operatör tarafından ayarlanmış — düzenlenemez.",
	requiredHint: "Zorunlu",
	invalidEmail: "Lütfen geçerli bir e-posta adresi gir.",
	invalidPhone: "Uluslararası formatı kullan, örn. +14155552671.",
	noFields: "Burada henüz düzenlenecek bir şey yok.",
	save: "Değişiklikleri kaydet",
	saving: "Kaydediliyor…",
	cancel: "Vazgeç",
	saved: "Değişiklikler kaydedildi.",
	loading: "Profil yükleniyor…",
	loadError: "Profilin yüklenemedi. Lütfen tekrar dene.",
	retry: "Yeniden dene",
	errorFieldNotAllowed: "Bu alan bu widget'ta düzenlenemez. Sayfayı yenilemeyi dene.",
	errorFieldPinned: "Bu alan hesabın tarafından kilitlenmiş.",
	errorFieldInvalid: "Bazı değerler geçerli değil. Vurgulanan alanları kontrol et.",
	errorThemeLocked: "Tema operatör tarafından kilitlendi.",
	errorFeatureDisabled: "Profil düzenleme operatör tarafından kapatıldı.",
	errorGeneric: "Değişikliklerin kaydedilemedi. Lütfen tekrar dene.",
	notificationsBlocked: "Bildirimler tarayıcı tarafından engellendi. Etkinleştirmek için site izinlerini güncelle.",
	notificationsRequest: "Bunu etkinleştirmek için istendiğinde bildirimlere izin ver.",
	systemFields: {
		avatar: "Fotoğraf",
		wexioId: "Wexio ID",
		telegramId: "Telegram ID",
		whatsappId: "WhatsApp ID",
		viberId: "Viber ID",
		instagramId: "Instagram ID",
		optInWhatsapp: "WhatsApp onayı",
		webVerified: "Doğrulanmış ziyaretçi",
		firstName: "Ad",
		lastName: "Soyad",
		username: "Kullanıcı adı",
		language: "Dil",
		email: "E-posta",
		phone: "Telefon",
		company: "Şirket",
		location: "Konum",
		isValid: "Hesap geçerli",
		chatStatus: "Sohbet durumu",
		chatCategory: "Sohbet kategorisi",
		priority: "Öncelik",
		leadSource: "Müşteri adayı kaynağı",
		leadStatus: "Müşteri adayı durumu",
		interestLevel: "İlgi düzeyi",
		productInterest: "Ürün ilgisi",
		budgetRange: "Bütçe",
		purchaseTimeline: "Satın alma zaman çizelgesi",
		lastMessageSentAt: "Son gönderilen mesaj",
		lastMessageReceivedAt: "Son alınan mesaj",
		lastSeenAt: "Son görülme",
		firstMessageReceivedAt: "İlk iletişim",
		isBlocked: "Engellendi",
		registrationDate: "Kayıt tarihi",
		aiAvailable: "AI desteği",
		totalMessagesSent: "Gönderilen mesajlar",
		totalMessagesReceived: "Alınan mesajlar",
		totalAiMessagesSent: "Gönderilen AI mesajları",
		totalBotMessagesSent: "Gönderilen bot mesajları",
		totalUserMessagesSent: "Gönderilen operatör mesajları",
		flowCompletionRate: "Akış tamamlama oranı",
		lastFlowCompleted: "Son tamamlanan akış",
		totalFlowsStarted: "Başlatılan akışlar",
		totalFlowsCompleted: "Tamamlanan akışlar"
	},
	systemFieldOptions: {
		chatStatus: {
			ISSUE: "Sorun",
			RESOLVED: "Çözüldü",
			PENDING: "Beklemede",
			IN_PROGRESS: "Devam ediyor",
			CLOSED: "Kapatıldı"
		},
		chatCategory: {
			SALES: "Satış",
			SUPPORT: "Destek",
			BILLING: "Faturalama",
			FEEDBACK: "Geri bildirim",
			GENERAL: "Genel",
			OTHER: "Diğer"
		},
		priority: {
			LOW: "Düşük",
			MEDIUM: "Orta",
			HIGH: "Yüksek",
			URGENT: "Acil"
		},
		leadStatus: {
			NEW: "Yeni",
			CONTACTED: "İletişime geçildi",
			QUALIFIED: "Nitelikli",
			NEGOTIATING: "Görüşülüyor",
			WON: "Kazanıldı",
			LOST: "Kaybedildi"
		},
		interestLevel: {
			LOW: "Düşük",
			MEDIUM: "Orta",
			HIGH: "Yüksek",
			VERY_HIGH: "Çok yüksek"
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

//# sourceMappingURL=widget-react-DyfWPmJL2.js.map