globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Cześć 👋 Dziękuję za wiadomość. Odpiszę za chwilę…`,ageLabel:`4 godz.`},t={"demo-news-1":{title:`Pioneer 2026: zapisz datę`,excerpt:`Wracamy do San Francisco 8 października. Drzwi otwieramy o 9:00, keynote o 10:00.`,body:`## Czego się spodziewać

Tegoroczny keynote opowiada o tym, co udostępniliśmy publicznie i co jeszcze przed nami. Demo na żywo, a nie slajdy.

- **Plan rozwoju Gaii** - dokąd zmierza nasza AI w ciągu najbliższych dwóch kwartałów.
- **Historie klientów** - trzy zespoły opowiadają, jak o połowę skróciły czas pierwszej odpowiedzi.
- **Warsztaty praktyczne** - przynieś laptopa i zbuduj przepływ razem z naszymi inżynierami.

## Jak dojechać

Miejsce wydarzenia to terminal wycieczkowy Pier 27, tuż przy Embarcadero. Najbliższa stacja BART to Embarcadero, 12 minut pieszo wzdłuż wody.

## Bilety

Miejsca w puli early bird są ograniczone i ruszą w przyszłym tygodniu. Obecni klienci mają pierwszeństwo, więc zaglądaj do skrzynki.

> Nie możesz być na miejscu? Keynote będzie transmitowany na żywo, a nagrania pojawią się tutaj jeszcze tego samego wieczoru.`},"demo-news-2":{title:`Co wydaliśmy w kwietniu`,excerpt:`Trzy nowe wyzwalacze automatyzacji i znacznie szybsze wyszukiwanie w skrzynce.`,body:`<p>Kwiecień był intensywnym miesiącem. Oto wszystko, co wdrożyliśmy, w skrócie:</p>
<table>
<thead><tr><th>Obszar</th><th>Co się zmieniło</th><th>Dlaczego to ważne</th></tr></thead>
<tbody>
<tr><td>Wyszukiwanie w skrzynce</td><td>Natychmiastowe wyniki w trakcie pisania</td><td>50 tys. rozmów, poniżej 100 ms</td></tr>
<tr><td>Automatyzacja</td><td>Trzy nowe wyzwalacze</td><td>Porzucony koszyk, ponowna wizyta na stronie, cichy odwiedzający</td></tr>
<tr><td>Edytor odpowiedzi</td><td>Szkic przetrwa zmianę karty</td><td>Koniec z utraconymi, niedokończonymi odpowiedziami</td></tr>
<tr><td>Tryb ciemny</td><td>Brak białego błysku przy pierwszym wyświetleniu</td><td>Czystsze ładowanie na ciemnych stronach</td></tr>
</tbody>
</table>
<p>Oto nowe wyszukiwanie w akcji - wyniki pojawiają się, zanim skończysz pisać:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Wyszukiwanie w skrzynce natychmiast zwraca wyniki" />
<p>Dotknij obrazu, aby przyjrzeć mu się z bliska. Masz prośbę? Odpisz tutaj - czytamy każdą.</p>`},"demo-news-3":{title:`Gaia mówi już w 28 językach`,excerpt:`Wykrywaj język odwiedzającego automatycznie lub ustaw jeden na stałe. Bez dodatkowej konfiguracji.`,body:`<p>Gaia odpowiada teraz w 28 językach, rozpoznawanych automatycznie na podstawie pierwszej wiadomości odwiedzającego. Pytania, które słyszymy najczęściej:</p>
<details><summary>Jak działa wykrywanie języka?</summary><p>Gaia czyta pierwszą wiadomość i odpowiada w tym samym języku. Jeśli Twoje artykuły pomocy istnieją w tym języku, cytuje je; w przeciwnym razie odpowiada na podstawie najbliższego dopasowania i zgłasza Ci lukę.</p></details>
<details><summary>Czy mogę wymusić jeden język?</summary><p>Tak. Ustaw go w <strong>Ustawienia → AI → Język</strong>, a Gaia będzie się go trzymać niezależnie od tego, co wpisze odwiedzający.</p></details>
<details><summary>Co widzą operatorzy?</summary><p>Transkrypcje pozostają w języku Twojego zespołu, a oryginalna wiadomość jest zachowana obok tłumaczenia.</p></details>
<p>Krótki podgląd, jak Gaia zmienia język w trakcie rozmowy:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia odpowiada w kilku językach" />`},"demo-news-4":{title:`Przekazuj rozmowy prosto do Slacka`,excerpt:`Podłącz dowolny przychodzący webhook do kanału Slacka. Bez kodu pośredniczącego.`,body:`## Połącz w dwa kliknięcia

Przejdź do **Integracje → Slack**, kliknij *Połącz* i zatwierdź uprawnienia. Wybierz kanał, do którego mają trafiać nowe rozmowy - większość zespołów używa \`#support\`.

## Co dostajesz

- Wiadomość na Slacku w chwili rozpoczęcia czatu, z linkiem do skrzynki.
- Odpowiedzi operatorów w wątku pod oryginalną wiadomością.
- Odpowiadaj prosto ze Slacka, a my przekażemy odpowiedź odwiedzającemu w czasie rzeczywistym.

## Webhooki również

Wysyłasz już zdarzenia z własnych systemów? Skieruj dowolny webhook na swój kanał Slacka i całkiem pomiń własną integrację.`},"demo-news-5":{title:`Inbox 2.0: sortowanie bez myszy`,excerpt:`Nowe skróty do przypisywania, odkładania i rozwiązywania - wszystko z klawiatury.`,body:`<p>Inbox 2.0 stawia na klawiaturę. Oto ściągawka pogrupowana według tego, co robisz:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Nawigacja</div><ul><li><code>j</code> / <code>k</code> - następna / poprzednia rozmowa</li><li><code>g</code>, a potem <code>i</code> - przejdź do skrzynki</li></ul></div>
<div data-type="tab"><div data-tab-label>Działania</div><ul><li><code>e</code> - rozwiąż</li><li><code>a</code> - przypisz do mnie</li><li><code>s</code> - odłóż</li></ul></div>
<div data-type="tab"><div data-tab-label>Pisanie</div><ul><li><code>Cmd+Enter</code> - wyślij</li><li><code>/</code> - zapisane odpowiedzi</li><li><code>Cmd+K</code> - paleta poleceń</li></ul></div>
</div>
<p>Przeprojektowana skrzynka - wszystko na wyciągnięcie klawisza:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="Przeprojektowana skrzynka oparta na klawiaturze" />`},"demo-news-6":{title:`Samodzielny eksport i usuwanie danych`,excerpt:`Obsługuj żądania dotyczące danych odwiedzających jednym kliknięciem. Zgodność z RODO od razu.`,body:`## Eksport

W profilu dowolnego odwiedzającego kliknij **Eksportuj dane**, aby wygenerować pakiet JSON z każdą wiadomością, zdarzeniem i atrybutem, które o nim przechowujemy. Pobiera się natychmiast, a żądanie jest zapisywane w Twojej dokumentacji.

## Usuwanie

**Usuń dane** usuwa odwiedzającego i kasuje jego wiadomości ze skrzynki, wyszukiwarki oraz z każdego połączonego CRM przez ten sam most webhooków. Działanie jest rejestrowane i nieodwracalne.

## Dla Twojego IOD

- Każdy eksport i usunięcie ma znacznik czasu i autora.
- Okresy przechowywania można konfigurować dla każdej przestrzeni roboczej.
- Umowa powierzenia przetwarzania danych jest dostępna na życzenie.`},"demo-news-7":{title:`Beta SDK mobilnego: iOS i Android`,excerpt:`Przenieś tę samą rozmowę do swojej aplikacji natywnej. Miejsca w becie są już otwarte.`,body:`## Jedna rozmowa, każdy ekran

Odwiedzający, który zaczyna czat na Twojej stronie, może go kontynuować w aplikacji, po zalogowaniu i z pełną historią. Ta sama Gaia, ci sami operatorzy, ta sama skrzynka.

## Co jest w becie

- Natywny launcher dla SwiftUI i Jetpack Compose.
- Powiadomienia push o nowych odpowiedziach.
- Kolejka offline, dzięki której wiadomości wyślą się po odzyskaniu połączenia.

## Dołącz

Co tydzień wdrażamy kilka zespołów. Odpisz tutaj, podając platformę i orientacyjną liczbę miesięcznie aktywnych użytkowników, a wyślemy Ci klucz.

> Beta oznacza kilka niedociągnięć. Poprawki wydajemy co tydzień i czytamy każde zgłoszenie błędu.`},"demo-news-8":{title:`Zobacz, które odpowiedzi AI naprawdę zadziałały`,excerpt:`Śledź, czy każda odpowiedź Gai zakończyła się rozwiązaniem, przekazaniem człowiekowi czy porzuceniem rozmowy.`,body:`## Nowy widok

**Analityka → Wyniki AI** rozbija każdą odpowiedź Gai według tego, co wydarzyło się dalej:

- **Rozwiązane** - odwiedzający dostał, czego potrzebował, i wyszedł zadowolony.
- **Przekazane** - Gaia przekazała rozmowę człowiekowi.
- **Porzucone** - odwiedzający zamknął widżet bez rozwiązania sprawy.

## Wgląd w każdy artykuł

Otwórz dowolny artykuł pomocy, aby zobaczyć, jak często Gaia go cytuje i czy te cytaty prowadzą do rozwiązania. Niski odsetek rozwiązań przy artykule o dużym ruchu zwykle oznacza, że to treść wymaga przepisania, a nie AI.

## Wykorzystaj to

Posortuj według odsetka porzuceń, aby znaleźć pytania, z którymi Gaia radzi sobie najgorzej, a potem dodaj przepływ lub trafniejszy artykuł, by zamknąć lukę.`},tags:{events:`Wydarzenia`,product:`Produkt`,release:`Wydanie`,ai:`AI`,languages:`Języki`,integrations:`Integracje`,slack:`Slack`,inbox:`Skrzynka`,privacy:`Prywatność`,security:`Bezpieczeństwo`,mobile:`Mobile`,beta:`Beta`,analytics:`Analityka`},categories:{company:`Firma`,product:`Produkt`,engineering:`Inżynieria`}},n={categories:{"demo-cat-getting-started":{title:`Pierwsze kroki`,description:`Zainstaluj widżet i skonfiguruj pierwszą rozmowę.`},"demo-cat-automation":{title:`Automatyzacja`,description:`Przepływy, wyzwalacze i automatyczna odpowiedź AI.`},"demo-cat-integrations":{title:`Integracje`,description:`Połącz CRM, Slacka i CMS.`},"demo-cat-billing":{title:`Płatności i plany`,description:`Progi cenowe, faktury i zarządzanie miejscami.`}},articles:{"demo-article-install":{title:`Zainstaluj widżet Wexio na swojej stronie`,excerpt:`30-sekundowy fragment kodu wklejany przed zamykającym tagiem </body>.`,body:`## Dodaj skrypt ładujący

Wklej ten fragment na każdej stronie, na której ma się pojawić widżet:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

Skrypt dodaje pływający launcher w prawym dolnym rogu. Kliknij go, aby otworzyć panel czatu.

## Sprawdź instalację

- Otwórz stronę zawierającą ten fragment.
- Otwórz konsolę przeglądarki.
- Powinieneś zobaczyć \`[wexio] widget mounted\`.

## Dostosuj wygląd

Widżet pobiera kolory marki z Twojego panelu. Zmienisz je w **Ustawienia → Marka**.

> Potrzebujesz pomocy? Kliknij poniżej "Nadal potrzebujesz pomocy? Napisz do nas", a przeprowadzimy Cię przez cały proces.`},"demo-article-flows":{title:`Zbuduj swój pierwszy przepływ automatyzacji`,excerpt:`Przeciągnij, upuść i uruchom bota powitalnego w mniej niż pięć minut.`,body:`## Czym jest przepływ?

Przepływ to małe drzewo kroków rozmowy - pytań, odpowiedzi i warunków - które uruchamia się za każdym razem, gdy odwiedzający spełni warunek wyzwalacza.

## Trzy typy wyzwalaczy

1. **Odwiedzający otworzył widżet** - przywitaj osoby, które są tu pierwszy raz.
2. **Odwiedzający zadał pytanie** - Gaia (AI) próbuje odpowiedzieć; jeśli się nie uda, przepływ przejmuje rozmowę.
3. **Odebrano webhook** - Twój CMS lub platforma e-commerce wysyła zdarzenie; przepływ rusza we właściwym czacie.

## Dobre praktyki

- Pierwsze odpowiedzi niech mają mniej niż 80 znaków.
- Zaproponuj 2-3 przyciski szybkiej odpowiedzi zamiast pytania otwartego.
- Zawsze zostaw wyjście awaryjne - *"Porozmawiaj z człowiekiem"*.`},"demo-article-slack":{title:`Przekazuj czaty do Slacka`,excerpt:`Odzwierciedlaj każdą nową rozmowę w wybranym kanale Slacka.`,body:`## Połącz swoją przestrzeń roboczą

W **Integracje → Slack** kliknij *Połącz*. Zostaniesz przekierowany na ekran OAuth Slacka - zatwierdź żądane uprawnienia (\`chat:write\`, \`channels:read\`).

## Wybierz kanał

Po autoryzacji wybierz kanał docelowy (lub utwórz nowy, np. \`#support\`).

## Co jest przekazywane

- Pierwsza wiadomość z linkiem do skrzynki wexio.
- Odpowiedzi operatorów jako wiadomości w wątku.
- Odpowiedzi odwiedzających w czasie rzeczywistym przez most SSE.

## Kierunek odwrotny

Operatorzy mogą odpowiadać *ze* Slacka - wexio nasłuchuje odpowiedzi w wątkach Slacka i przesyła je do widżetu.`},"demo-article-billing":{title:`Zaktualizuj plan i dane do płatności`,excerpt:`Zmień plan, kartę lub pobierz faktury.`,body:`## Plany

- **Free** - 1 widżet, podstawowe funkcje, plakietka "Powered by Wexio".
- **Standard** - nielimitowana liczba widżetów, automatyzacje, integracje.
- **Enterprise** - white-label, SLA, dedykowane wsparcie.

## Zmiana planu

**Ustawienia → Płatności → Zmień plan**. Zmiana na wyższy plan działa od razu; zmiana na niższy obowiązuje od końca bieżącego okresu rozliczeniowego.

## Faktury

Pobierz każdą fakturę jako PDF z **Płatności → Historia**. Kopię wysyłamy też e-mailem przy każdym odnowieniu.`},"demo-article-theme":{title:`Dostosuj motyw widżetu`,excerpt:`Dopasuj widżet do swojej marki - kolory, zaokrąglenia, tryb ciemny.`,body:`## Kolory marki

W **Ustawienia → Marka** ustaw:

- **Podstawowy** - wpływa na launcher, przycisk wysyłania i obramowania fokusa.
- **Tło** - powierzchnię panelu (jasną) i jej odpowiednik w trybie ciemnym.

## Zaokrąglenia

Wybierz \`sm\`, \`md\` lub \`lg\`, aby uzyskać bardziej kanciasty lub łagodniejszy wygląd. Zmiana działa na żywo w każdym widżecie na każdej stronie.

## Tryb ciemny

Domyślnie = zgodnie z preferencją systemu odwiedzającego. Ustaw **zawsze jasny** lub **zawsze ciemny**, jeśli Twoja strona sama nie obsługuje trybu ciemnego.`},"demo-article-handoff":{title:`Przekaż rozmowę od Gai do operatora`,excerpt:`Gdy AI nie wystarcza - skieruj odwiedzającego do kolegi z zespołu.`,body:`## Wyzwalacze

Gaia przekazuje rozmowę automatycznie, gdy:

- Odwiedzający wpisze *"chcę porozmawiać z człowiekiem"* (lub dowolny zlokalizowany odpowiednik).
- To samo pytanie padnie dwa razy bez rozwiązania.
- Intencja odwiedzającego pasuje do reguły routingu (np. płatności → zespół finansów).

## Routing

Skonfiguruj **Routing → Reguły**, aby kierować określone intencje do konkretnych zespołów lub operatorów. Obsługiwane są round-robin i najmniej obciążony.

## Poza godzinami pracy

Jeśli żaden operator nie jest online, Gaia proponuje formularz oddzwonienia lub przekazania e-mailem, zamiast udawać, że ktoś jest dostępny.`},"demo-article-crm":{title:`Synchronizuj rozmowy ze swoim CRM`,excerpt:`Przesyłaj każdy czat do HubSpot, Salesforce lub Pipedrive.`,body:`## Obsługiwane CRM

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (token API)
- Własne przez webhooki

## Co jest synchronizowane

- Nowe rozmowy tworzą kontakt (jeśli jeszcze nie istnieje) i notatkę.
- Odpowiedzi operatorów są dopisywane do osi czasu kontaktu.
- Tagi nadane w wexio są odzwierciedlane w CRM.

## W obie strony

Notatki operatorów dodane w CRM mogą wrócić do wexio przez odbiornik webhooków - zobacz *Integracje → Webhooki → Przychodzące*.`},"demo-article-shortcuts":{title:`Skróty klawiszowe dla operatorów`,excerpt:`Sortuj dwa razy szybciej - bez myszy.`,body:"## Nawigacja w skrzynce\n\n- `j` / `k` - następna / poprzednia rozmowa\n- `e` - rozwiąż\n- `a` - przypisz do mnie\n- `s` - odłóż\n\n## Edytor odpowiedzi\n\n- `Cmd+Enter` - wyślij\n- `/` - otwórz wybór zapisanych odpowiedzi\n- `Cmd+K` - paleta poleceń (wszystko)\n\n## Wskazówka\n\nNajedź na dowolny przycisk w panelu - podpowiedź pokaże jego skrót."}},tags:{setup:`Konfiguracja`,install:`Instalacja`,automation:`Automatyzacja`,flows:`Przepływy`,integrations:`Integracje`,slack:`Slack`,billing:`Płatności`,plans:`Plany`,design:`Projekt`,ai:`AI`,crm:`CRM`,productivity:`Produktywność`,inbox:`Skrzynka`}},r={visitorName:`Ty`,messages:{"m-demo-1":{text:`Cześć 👋 Jestem Gaia, AI Wexio. W czym mogę pomóc?`,ageLabel:`9:41`,buttons:[`Jak działają ceny?`,`Co potrafi?`,`Porozmawiaj z człowiekiem`]},"m-demo-2":{text:`Możesz pokazać, jak wygląda widżet?`,ageLabel:`9:41`},"m-demo-3":{text:``,ageLabel:`9:42`,mediaAlts:[`Zrzut ekranu produktu`]},"m-demo-4":{text:``,ageLabel:`9:42`,mediaAlts:[`Obracający się globus`]},"m-demo-5":{text:`Świetne! 😄 Oto kilka ujęć od naszego zespołu.`,ageLabel:`9:43`},"m-demo-6":{text:`Kilka najważniejszych widoków z panelu`,ageLabel:`9:43`,mediaAlts:[`Przegląd panelu`,`Analityka`,`Skrzynka`,`Raporty`]},"m-demo-7":{text:``,ageLabel:`9:44`,mediaAlts:[`Szybki przewodnik`]},"m-demo-8":{text:``,ageLabel:`9:44`,mediaAlts:[`Wiadomość głosowa`]},"m-demo-9":{text:``,ageLabel:`9:45`,mediaAlts:[`Przewodnik na start`]},"m-demo-9b":{text:``,ageLabel:`9:45`,mediaAlts:[`Integracje Wexio`]},"m-demo-10":{text:`Chcesz wypróbować to sam?`,ageLabel:`9:45`,buttons:[`Otwórz piaskownicę`,`Umów rozmowę`,`Rozmawiajmy dalej`]}}},i={messengerDescription:`Nasz zespół również może pomóc`,messengerMessage:`Cześć 👋 Zapytaj nas o cokolwiek lub wybierz szybką akcję.`},a={welcome:{system:`Rozmawiasz teraz z Gaią, naszą asystentką AI.`,hint:`Wskazówka: w każdej chwili możesz dołączyć plik lub nagrać wiadomość głosową.`,greeting:`Cześć 👋 Jestem Gaia, AI Wexio. Pytaj o cokolwiek albo wybierz szybką akcję na start.`},replies:{pricing:{text:`Wexio jest darmowe dla jednego widżetu; płatne plany zaczynają się od $39/mies. i odblokowują automatyzacje, integracje oraz white-label.`,planBtn:`Pokaż plany`,salesBtn:`Porozmawiaj ze sprzedażą`},gaia:{text:`Gaia to agent AI, który natychmiast odpowiada na pytania odwiedzających. Uczy się z Twoich artykułów pomocy i przekazuje rozmowę człowiekowi, gdy nie potrafi pomóc.`,handoffBtn:`Jak działa przekazanie człowiekowi?`},human:{text:`Oczywiście - dołączam Alexa z zespołu. W godzinach pracy odpowie w ciągu kilku minut.`},fallback:{text:`Jasne - sprawdzę to i za chwilę wrócę z odpowiedzią.`},voice:{text:`Mam Twoją wiadomość głosową - sprawdzę to i wrócę z odpowiedzią.`}}},o={main:`Chcesz wypróbować to sam?`,billing:`Dziękuję! Przekazałam Twoje pytanie o fakturę zespołowi ds. płatności.`,integrations:`Jak połączyć WhatsApp z moim kontem?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-DLK0giQJ2.js.map