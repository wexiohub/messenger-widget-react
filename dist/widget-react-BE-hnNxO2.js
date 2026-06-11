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
//#region messages/uk.json
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
	home: "Головна",
	messages: "Повідомлення",
	help: "Допомога",
	news: "Новини",
	profile: "Профіль"
}, r = {
	close: "Закрити",
	back: "Назад",
	conversationSubtitle: "Наші фахівці також можуть допомогти",
	helpTitle: "Допомога",
	newsTitle: "Новини",
	expand: "Розгорнути віджет",
	collapse: "Згорнути віджет"
}, i = {
	open: "Відкрити чат",
	close: "Закрити чат",
	loading: "Підключення…"
}, a = {
	greetingHeadline: "Як справи? 👋",
	greetingSubheadline: "Чим вам допомогти?",
	askTitle: "Поставити запитання",
	askSubtitle: "Вам допоможуть наш бот і наші фахівці",
	recentMessageLabel: "Нещодавнє повідомлення",
	recentMessageTitle: "Нещодавнє повідомлення",
	recentMessageFromFallback: "Gaia",
	recentMessageAgo: "4 год",
	recentMessageSample: "Привіт 👋 Дякуємо, що звернулися - ми скоро повернемося до вас.",
	featuredArticleLoading: "Рекомендована стаття",
	featuredArticleTap: "Натисніть, щоб читати",
	featuredArticleEmpty: "Виберіть статтю",
	featuredArticleSetUp: "Налаштуйте цей блок у панелі",
	featuredArticleDemoEyebrow: "Pioneer · Save the date",
	featuredArticleDemoHeadline: "8 жовтня 2026",
	featuredArticleDemoSubline: "Сан-Франциско · офлайн + онлайн",
	featuredArticleDemoCta: "Переглянути програму запуску",
	seeAgenda: "Переглянути програму запуску",
	browseHelp: "Довідка",
	whatsNew: "Що нового",
	searchPlaceholder: "Пошук у довідці",
	pinnedArticlesTitle: "Почніть із цього",
	popularArticlesTitle: "Популярні статті",
	pinnedArticleRow: "Закріплена стаття {n}",
	newsPreviewTitle: "Останні новини",
	newsPreviewRow: "Новина {n}",
	myConversationsTitle: "Ваші розмови",
	myConversationsEmpty: "Переглянути ваші розмови",
	teamStatusOnline: "Ми онлайн",
	teamStatusReplyTime: "Зазвичай відповідаємо за кілька хвилин"
}, o = {
	today: "Сьогодні",
	yesterday: "Вчора",
	unreadMessages: "Непрочитані повідомлення",
	emptyTitle: "Ще немає повідомлень",
	emptyBody: "Розпочніть розмову - ми відповімо тут.",
	sendCta: "Надіслати повідомлення",
	attach: "Прикріпити файл",
	commands: "Швидкі команди",
	record: "Записати голосове повідомлення",
	stopRecording: "Зупинити запис",
	recording: "Запис…",
	uploading: "Завантаження…",
	uploadFailed: "Не вдалося завантажити",
	voiceDenied: "Доступ до мікрофона заборонено",
	voiceUnsupported: "Браузер не підтримує запис голосу",
	fileTooLarge: "Файл завеликий (максимум 10 МБ)",
	fileMimeNotAllowed: "Цей тип файлу не підтримується",
	emoji: "Вставити емодзі",
	cancelRecording: "Скасувати запис",
	pauseRecording: "Призупинити запис",
	resumeRecording: "Продовжити запис",
	playPreview: "Прослухати запис",
	emojiPicker: "Вибір емодзі",
	emojiSearch: "Пошук…",
	playAudio: "Відтворити",
	pauseAudio: "Пауза",
	openAudio: "Відкрити аудіо",
	removeAttachment: "Видалити",
	aiAssistant: "ШІ-помічник",
	operator: "Оператор",
	openImage: "Відкрити зображення",
	openPreview: "Відкрити перегляд",
	play: "Відтворити",
	pause: "Призупинити",
	typing: "друкує…",
	aiThinking: "думає…",
	aiSearching: "переглядає…",
	typingSomeone: "Хтось",
	signInToChat: "Будь ласка, увійдіть, щоб почати розмову.",
	signInUnavailable: "Вхід наразі недоступний.",
	googleSignIn: "Вхід через аккаунт Google",
	passkeySignIn: "Увійти за допомогою passkey",
	passkeyRegister: "Вперше? Створіть passkey",
	passkeyError: "Не вдалося увійти. Спробуйте ще раз.",
	passkeyNoCredential: "На цьому пристрої ще немає passkey — натисніть «Створіть passkey», щоб додати.",
	googleSignInDemo: "Продовжити з Google"
}, s = {
	title: "Перш ніж почати",
	subtitle: "Кілька деталей, щоб наша команда могла швидше допомогти.",
	labelName: "Імʼя",
	labelEmail: "Електронна пошта",
	labelPhone: "Телефон",
	labelCustom: "Деталі",
	required: "Обовʼязкове поле",
	invalidEmail: "Введіть дійсну адресу електронної пошти",
	invalidPhone: "Введіть дійсний номер телефону",
	submit: "Продовжити",
	submitFailed: "Не вдалося надіслати - спробуйте ще раз."
}, c = {
	searchPlaceholder: "Шукати в довідці",
	emptyTitle: "Ще немає статей",
	emptyBody: "Оператор ще не опублікував жодної статті.",
	back: "Назад",
	helpful: "Чи була ця стаття корисною?",
	yes: "Так",
	no: "Ні",
	thanks: "Дякуємо за відгук.",
	unresolvedCta: "Усе ще потрібна допомога? Напишіть нам",
	noResults: "Нічого не знайдено",
	articleNotFound: "Статтю не знайдено",
	articleNotTranslated: "Ця стаття ще не доступна вашою мовою.",
	writtenBy: "Автор: {names}",
	relatedTitle: "Схожі статті",
	collectionsCount: "{count, plural, =0 {Без колекцій} one {# колекція} few {# колекції} many {# колекцій} other {# колекцій}}",
	articlesCount: "{count, plural, =0 {Без статей} one {Статей: #} few {Статей: #} many {Статей: #} other {Статей: #}}",
	authorsByline: "Автори {first}{remaining, plural, =0 {} one { та ще #} few { та ще #} many { та ще #} other { та ще #}}"
}, l = {
	emptyTitle: "Поки що нічого нового",
	emptyBody: "Заходьте сюди за продуктовими новинами й оголошеннями.",
	helpful: "Чи була ця стаття корисною?",
	yes: "Так",
	no: "Ні",
	thanks: "Дякуємо за відгук.",
	searchPlaceholder: "Пошук у новинах",
	noResults: "Нічого не знайдено",
	editedAt: "редаговано {when}",
	articleNotFound: "Статтю не знайдено.",
	articleNotTranslated: "Цей допис ще не доступний вашою мовою.",
	readOriginal: "Читати оригінал",
	relatedTitle: "Схоже",
	writtenBy: "Автор: {names}"
}, u = {
	ariaLabel: "Реакції",
	tapAria: "Поставити {emoji}"
}, d = {
	title: "Читати іншою мовою",
	ariaLabel: "Мови статті"
}, f = {
	poweredBy: "Працює на",
	wexio: "Wexio"
}, p = {
	mute: "Вимкнути звуки сповіщень",
	unmute: "Увімкнути звуки сповіщень"
}, m = {
	tableOfContents: "Зміст",
	tabFallback: "Вкладка {n}"
}, h = {
	newMessage: "Нове повідомлення",
	dismiss: "Закрити",
	aiAssistant: "ШІ-помічник",
	operator: "Оператор"
}, g = {
	mediaPreview: "Перегляд медіа",
	close: "Закрити перегляд",
	previous: "Попереднє",
	next: "Наступне"
}, _ = {
	turnstileTitle: "Не вдалося перевірити браузер",
	turnstileBody: "Не вдалося пройти перевірку безпеки. Можливо, заважає мережа або блокувальник реклами — спробуйте ще раз або перезавантажте сторінку.",
	genericTitle: "Не вдалося підключитися",
	genericBody: "Сталася помилка під час входу. Спробуйте за мить.",
	retry: "Спробувати знову",
	dismiss: "Закрити"
}, v = {
	title: "Ваш профіль",
	subtitle: "Оновіть свої дані та налаштування віджета.",
	uploadAvatar: "Змінити фото",
	removeAvatar: "Видалити фото",
	avatarUploading: "Завантаження…",
	preferencesHeading: "Налаштування",
	preferenceLanguage: "Мова",
	preferenceDesktopNotifications: "Сповіщення на робочому столі",
	preferenceDesktopNotificationsHint: "Отримуйте системне сповіщення, коли віджет неактивний.",
	preferenceThemeMode: "Тема",
	themeAuto: "Як у системі",
	themeLight: "Світла",
	themeDark: "Темна",
	themeLocked: "Тема задана оператором.",
	pinnedHint: "Задано оператором — не редагується.",
	requiredHint: "Обов'язкове",
	invalidEmail: "Введіть коректну адресу електронної пошти.",
	invalidPhone: "Використовуйте міжнародний формат, напр. +380441234567.",
	noFields: "Тут поки що нема що редагувати.",
	save: "Зберегти",
	saving: "Збереження…",
	cancel: "Скасувати",
	saved: "Зміни збережено.",
	loading: "Завантаження профілю…",
	loadError: "Не вдалося завантажити профіль. Спробуйте ще раз.",
	retry: "Повторити",
	errorFieldNotAllowed: "Це поле не редагується в цьому віджеті. Спробуйте оновити сторінку.",
	errorFieldPinned: "Це поле заблоковане вашим обліковим записом.",
	errorFieldInvalid: "Деякі значення некоректні. Перевірте підсвічені поля.",
	errorThemeLocked: "Тема заблокована оператором.",
	errorFeatureDisabled: "Редагування профілю вимкнено оператором.",
	errorGeneric: "Не вдалося зберегти зміни. Спробуйте ще раз.",
	notificationsBlocked: "Сповіщення заблоковано браузером. Оновіть дозволи сайту, щоб увімкнути.",
	notificationsRequest: "Дозвольте сповіщення в підказці браузера, щоб увімкнути.",
	systemFields: {
		avatar: "Фото",
		wexioId: "Wexio ID",
		telegramId: "Telegram ID",
		whatsappId: "WhatsApp ID",
		viberId: "Viber ID",
		instagramId: "Instagram ID",
		optInWhatsapp: "Дозвіл на WhatsApp",
		webVerified: "Підтверджений відвідувач",
		firstName: "Ім'я",
		lastName: "Прізвище",
		username: "Юзернейм",
		language: "Мова",
		email: "Email",
		phone: "Телефон",
		company: "Компанія",
		location: "Місцезнаходження",
		isValid: "Активний акаунт",
		chatStatus: "Статус чату",
		chatCategory: "Категорія чату",
		priority: "Пріоритет",
		leadSource: "Джерело ліда",
		leadStatus: "Статус ліда",
		interestLevel: "Рівень зацікавленості",
		productInterest: "Інтерес до продукту",
		budgetRange: "Бюджет",
		purchaseTimeline: "Терміни покупки",
		lastMessageSentAt: "Останнє надіслане",
		lastMessageReceivedAt: "Останнє отримане",
		lastSeenAt: "Останній візит",
		firstMessageReceivedAt: "Перший контакт",
		isBlocked: "Заблоковано",
		registrationDate: "Дата реєстрації",
		aiAvailable: "AI-допомога",
		totalMessagesSent: "Надіслано повідомлень",
		totalMessagesReceived: "Отримано повідомлень",
		totalAiMessagesSent: "AI-повідомлень",
		totalBotMessagesSent: "Бот-повідомлень",
		totalUserMessagesSent: "Операторських повідомлень",
		flowCompletionRate: "Завершеність флоу",
		lastFlowCompleted: "Останній завершений флоу",
		totalFlowsStarted: "Розпочато флоу",
		totalFlowsCompleted: "Завершено флоу"
	},
	systemFieldOptions: {
		chatStatus: {
			ISSUE: "Проблема",
			RESOLVED: "Вирішено",
			PENDING: "Очікує",
			IN_PROGRESS: "В процесі",
			CLOSED: "Закрито"
		},
		chatCategory: {
			SALES: "Продажі",
			SUPPORT: "Підтримка",
			BILLING: "Оплата",
			FEEDBACK: "Відгук",
			GENERAL: "Загальне",
			OTHER: "Інше"
		},
		priority: {
			LOW: "Низький",
			MEDIUM: "Середній",
			HIGH: "Високий",
			URGENT: "Терміновий"
		},
		leadStatus: {
			NEW: "Новий",
			CONTACTED: "Зв'язалися",
			QUALIFIED: "Кваліфікований",
			NEGOTIATING: "Переговори",
			WON: "Виграно",
			LOST: "Втрачено"
		},
		interestLevel: {
			LOW: "Низький",
			MEDIUM: "Середній",
			HIGH: "Високий",
			VERY_HIGH: "Дуже високий"
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

//# sourceMappingURL=widget-react-BE-hnNxO2.js.map