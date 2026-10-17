globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Dobrý den 👋 Děkuji, že jste se ozvali. Hned se vám ozvu…`,ageLabel:`4 h`},t={"demo-news-1":{title:`Pioneer 2026: poznamenejte si datum`,excerpt:`Vracíme se do San Francisca 8. října. Otevíráme v 9:00, keynote v 10:00.`,body:`## Co vás čeká

Letošní keynote je o tom, co jsme veřejně dodali a co přijde dál. Živé ukázky, žádné slajdy.

- **Roadmapa Gaii** - kam se naše AI vydá v příštích dvou čtvrtletích.
- **Příběhy zákazníků** - tři týmy sdílejí, jak zkrátily dobu první odpovědi na polovinu.
- **Praktické workshopy** - přineste si notebook a sestavte flow s našimi inženýry.

## Jak se tam dostat

Místem konání je Pier 27 Cruise Terminal přímo na Embarcaderu. Nejbližší stanice BART je Embarcadero, 12 minut pěšky podél vody.

## Vstupenky

Vstupenky za zvýhodněnou cenu jsou omezené a spustíme je příští týden. Stávající zákazníci mají přednost, sledujte proto svou schránku.

> Nemůžete přijet osobně? Keynote se vysílá živě a záznamy tu najdete týž večer.`},"demo-news-2":{title:`Co přinesl duben`,excerpt:`Tři nové spouštěče automatizace a mnohem rychlejší vyhledávání ve schránce.`,body:`<p>Duben byl velký měsíc. Tady je vše, co vyšlo, přehledně:</p>
<table>
<thead><tr><th>Oblast</th><th>Co se změnilo</th><th>Proč na tom záleží</th></tr></thead>
<tbody>
<tr><td>Vyhledávání ve schránce</td><td>Okamžité výsledky během psaní</td><td>50 tisíc konverzací, pod 100 ms</td></tr>
<tr><td>Automatizace</td><td>Tři nové spouštěče</td><td>Opuštěný košík, opakovaná návštěva stránky, tichý návštěvník</td></tr>
<tr><td>Editor</td><td>Koncept přežije přepnutí karty</td><td>Už žádné ztracené napůl napsané odpovědi</td></tr>
<tr><td>Tmavý režim</td><td>Žádné bílé probliknutí při prvním vykreslení</td><td>Čistší načtení na tmavých webech</td></tr>
</tbody>
</table>
<p>Nové vyhledávání v akci - výsledky se objeví dřív, než dopíšete:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Vyhledávání ve schránce vracející výsledky okamžitě" />
<p>Klepnutím na obrázek si ho prohlédnete zblízka. Máte požadavek? Odpovězte sem - čteme všechny.</p>`},"demo-news-3":{title:`Gaia nově mluví 28 jazyky`,excerpt:`Automaticky rozpoznejte jazyk návštěvníka, nebo jeden nastavte pevně. Bez další konfigurace.`,body:`<p>Gaia nově odpovídá ve 28 jazycích, které automaticky rozpozná z první zprávy návštěvníka. Na co se ptáte nejčastěji:</p>
<details><summary>Jak funguje rozpoznání jazyka?</summary><p>Gaia přečte úvodní zprávu a odpoví ve stejném jazyce. Pokud vaše články nápovědy v tomto jazyce existují, cituje je; jinak odpoví podle nejbližší shody a upozorní vás na mezeru.</p></details>
<details><summary>Mohu vynutit jediný jazyk?</summary><p>Ano. Nastavte jej v <strong>Nastavení → AI → Jazyk</strong> a Gaia se ho drží bez ohledu na to, co návštěvník napíše.</p></details>
<details><summary>Co vidí operátoři?</summary><p>Přepisy zůstávají v jazyce vašeho týmu a původní zpráva se uchovává vedle překladu.</p></details>
<p>Krátká ukázka, jak Gaia mění jazyk uprostřed vlákna:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia odpovídá v několika jazycích" />`},"demo-news-4":{title:`Posílejte konverzace přímo do Slacku`,excerpt:`Připojte libovolný příchozí webhook ke kanálu Slack. Bez propojovacího kódu.`,body:`## Připojení na dva kliknutí

Přejděte do **Integrace → Slack**, klikněte na *Připojit* a schvalte oprávnění. Vyberte kanál, kam mají nové konverzace chodit - většina týmů používá \`#support\`.

## Co získáte

- Zprávu ve Slacku ve chvíli, kdy chat začne, s odkazem zpět do schránky.
- Odpovědi operátorů ve vlákně pod původní zprávou.
- Odpovězte přímo ze Slacku a my to v reálném čase doručíme návštěvníkovi.

## I webhooky

Posíláte už události z vlastních systémů? Nasměrujte libovolný webhook do kanálu Slack a vlastní integraci si ušetřete.`},"demo-news-5":{title:`Schránka 2.0: třiďte bez myši`,excerpt:`Nové zkratky pro přiřazení, odložení a vyřešení - vše z klávesnice.`,body:`<p>Schránka 2.0 je navržena pro klávesnici. Tady je tahák seskupený podle toho, co děláte:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Pohyb</div><ul><li><code>j</code> / <code>k</code> - další / předchozí konverzace</li><li><code>g</code> pak <code>i</code> - přejít do schránky</li></ul></div>
<div data-type="tab"><div data-tab-label>Akce</div><ul><li><code>e</code> - vyřešit</li><li><code>a</code> - přiřadit mně</li><li><code>s</code> - odložit</li></ul></div>
<div data-type="tab"><div data-tab-label>Psaní</div><ul><li><code>Cmd+Enter</code> - odeslat</li><li><code>/</code> - uložené odpovědi</li><li><code>Cmd+K</code> - paleta příkazů</li></ul></div>
</div>
<p>Přepracovaná schránka - vše na dosah jedné klávesy:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="Přepracovaná schránka ovládaná hlavně klávesnicí" />`},"demo-news-6":{title:`Export a smazání dat na vyžádání`,excerpt:`Vyřizujte žádosti návštěvníků o data jedním kliknutím. Připraveno na GDPR hned po instalaci.`,body:`## Export

V profilu libovolného návštěvníka klikněte na **Exportovat data** a vygenerujte balíček JSON se všemi zprávami, událostmi a atributy, které o něm uchováváme. Stáhne se okamžitě a žádost se zaznamená do vaší evidence.

## Smazání

**Smazat data** odstraní návštěvníka a vymaže jeho zprávy ze schránky, z vyhledávání i z jakéhokoli připojeného CRM přes stejný webhookový most. Akce se zaznamenává a je nevratná.

## Pro vašeho DPO

- Každý export i smazání má časové razítko a autora.
- Lhůty uchovávání lze nastavit pro každý workspace.
- Smlouva o zpracování osobních údajů je k dispozici na vyžádání.`},"demo-news-7":{title:`Beta mobilního SDK: iOS a Android`,excerpt:`Přeneste stejnou konverzaci do nativní aplikace. Místa v betě jsou otevřená.`,body:`## Jedna konverzace, každé rozhraní

Návštěvník, který zahájí chat na vašem webu, může pokračovat ve vaší aplikaci, přihlášený a s plnou historií. Stejná Gaia, stejní operátoři, stejná schránka.

## Co beta obsahuje

- Nativní launcher pro SwiftUI a Jetpack Compose.
- Push notifikace o nových odpovědích.
- Offline fronta, aby se zprávy odeslaly, jakmile se vrátí připojení.

## Přidejte se

Každý týden přijímáme hrstku týmů. Odpovězte sem s uvedením své platformy a přibližného počtu měsíčně aktivních uživatelů a pošleme vám klíč.

> Beta znamená hrubé hrany. Opravy vydáváme každý týden a čteme každé hlášení chyby.`},"demo-news-8":{title:`Zjistěte, které odpovědi AI skutečně zabraly`,excerpt:`Sledujte, zda každá odpověď Gaii vedla k vyřešení, předání, nebo odchodu.`,body:`## Nový pohled

**Analytika → Výsledky AI** rozděluje každou odpověď Gaii podle toho, co následovalo:

- **Vyřešeno** - návštěvník dostal, co potřeboval, a odešel spokojený.
- **Předáno** - Gaia předala konverzaci člověku.
- **Opuštěno** - návštěvník zavřel widget bez vyřešení.

## Přehled po článcích

Otevřete libovolný článek nápovědy a uvidíte, jak často ho Gaia cituje a zda tyto citace vedou k vyřešení. Nízká míra vyřešení u hodně navštěvovaného článku obvykle znamená, že je třeba přepsat obsah, ne AI.

## Jednejte

Seřaďte podle míry opuštění a najděte otázky, se kterými Gaia zápolí nejvíc, a pak přidejte flow nebo přesnější článek, který mezeru zaplní.`},tags:{events:`Události`,product:`Produkt`,release:`Vydání`,ai:`AI`,languages:`Jazyky`,integrations:`Integrace`,slack:`Slack`,inbox:`Schránka`,privacy:`Soukromí`,security:`Zabezpečení`,mobile:`Mobil`,beta:`Beta`,analytics:`Analytika`},categories:{company:`Firma`,product:`Produkt`,engineering:`Vývoj`}},n={categories:{"demo-cat-getting-started":{title:`Začínáme`,description:`Nainstalujte widget a nastavte svou první konverzaci.`},"demo-cat-automation":{title:`Automatizace`,description:`Flow, spouštěče a automatická odpověď AI.`},"demo-cat-integrations":{title:`Integrace`,description:`Připojte CRM, Slack a CMS.`},"demo-cat-billing":{title:`Fakturace a tarify`,description:`Cenové úrovně, faktury a správa míst.`}},articles:{"demo-article-install":{title:`Instalace widgetu Wexio na váš web`,excerpt:`30sekundový úryvek, který vložíte před ukončovací značku </body>.`,body:`## Přidejte zaváděcí skript

Vložte tento úryvek na každou stránku, kde se má widget zobrazit:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

Zavaděč vloží plovoucí launcher do pravého dolního rohu. Klikněte na něj a otevře se panel chatu.

## Ověřte instalaci

- Navštivte stránku, která úryvek obsahuje.
- Otevřete konzoli prohlížeče.
- Měli byste vidět \`[wexio] widget mounted\`.

## Přizpůsobte vzhled

Widget přebírá barvy značky z vašeho přehledu. Upravíte je v **Nastavení → Značka**.

> Potřebujete pomoc? Klepněte níže na "Stále potřebujete pomoc? Napište nám" a provedeme vás.`},"demo-article-flows":{title:`Vytvořte své první automatizační flow`,excerpt:`Přetáhněte, pusťte a spusťte uvítacího bota za méně než pět minut.`,body:`## Co je flow?

Flow je malý strom kroků konverzace - otázek, odpovědí a podmínek - který se spustí vždy, když návštěvník splní spouštěč.

## Tři typy spouštěčů

1. **Návštěvník otevřel widget** - přivítejte nově příchozí.
2. **Návštěvník položil otázku** - Gaia (AI) se pokusí odpovědět; když to nezvládne, převezme to flow.
3. **Přijat webhook** - váš CMS nebo e-shop pošle událost; flow se spustí ve správném chatu.

## Osvědčené postupy

- První odpovědi držte pod 80 znaky.
- Nabídněte 2-3 čipy rychlé odpovědi místo otázky s volným textem.
- Vždy nabídněte únikovou cestu - *"Mluvit s člověkem"*.`},"demo-article-slack":{title:`Přeposílání chatů do Slacku`,excerpt:`Zrcadlete každou novou konverzaci do vybraného kanálu Slack.`,body:`## Připojte svůj workspace

V **Integrace → Slack** klikněte na *Připojit*. Budete přesměrováni na OAuth obrazovku Slacku - schvalte požadovaná oprávnění (\`chat:write\`, \`channels:read\`).

## Vyberte kanál

Po autorizaci vyberte cílový kanál (nebo vytvořte nový, třeba \`#support\`).

## Co se přeposílá

- Úvodní zpráva s odkazem zpět do schránky wexio.
- Odpovědi operátorů jako zprávy ve vlákně.
- Odpovědi návštěvníků v reálném čase přes most SSE.

## Opačný směr

Operátoři mohou odpovídat *ze* Slacku - wexio naslouchá odpovědím ve vláknech Slacku a posílá je zpět do widgetu.`},"demo-article-billing":{title:`Aktualizace tarifu a fakturačních údajů`,excerpt:`Změňte tarif, kartu nebo si stáhněte faktury.`,body:`## Tarify

- **Free** - 1 widget, základní funkce, odznak "Powered by Wexio".
- **Standard** - neomezený počet widgetů, automatizace, integrace.
- **Enterprise** - white-label, SLA, vyhrazená podpora.

## Změna tarifu

**Nastavení → Fakturace → Změnit tarif**. Přechod na vyšší tarif se projeví okamžitě; přechod na nižší na konci aktuálního období.

## Faktury

Každou fakturu si stáhnete jako PDF v **Fakturace → Historie**. Při každém obnovení vám navíc pošleme kopii e-mailem.`},"demo-article-theme":{title:`Přizpůsobení vzhledu widgetu`,excerpt:`Přizpůsobte widget své značce - barvy, zaoblení, tmavý režim.`,body:`## Barvy značky

V **Nastavení → Značka** nastavte:

- **Primární** - určuje launcher, tlačítko odeslat a zvýraznění fokusu.
- **Pozadí** - plochu panelu (světlou) a dvojici pro tmavý režim.

## Zaoblení

Vyberte z \`sm\`, \`md\`, \`lg\` pro ostřejší nebo měkčí vzhled. Změna se okamžitě projeví u každého widgetu na každé stránce.

## Tmavý režim

Výchozí = řídit se systémovým nastavením návštěvníka. Nastavte **vždy světlý** nebo **vždy tmavý**, pokud váš web tmavý režim sám nepodporuje.`},"demo-article-handoff":{title:`Předání z Gaii lidskému operátorovi`,excerpt:`Když AI nestačí - nasměrujte návštěvníka ke kolegovi.`,body:`## Spouštěče

Gaia předává automaticky, když:

- Návštěvník napíše *"mluvit s člověkem"* (nebo jakoukoli lokalizovanou variantu).
- Stejná otázka padne dvakrát bez vyřešení.
- Záměr návštěvníka odpovídá pravidlu směrování (např. fakturace → finanční tým).

## Směrování

V **Směrování → Pravidla** nastavte, které záměry se mají přesměrovat konkrétním týmům či operátorům. Podporováno je round-robin i nejméně vytížený.

## Mimo provozní dobu

Pokud není online žádný operátor, Gaia nabídne formulář pro zpětné volání nebo předání e-mailem, místo aby předstírala, že je někdo k dispozici.`},"demo-article-crm":{title:`Synchronizace konverzací s CRM`,excerpt:`Posílejte každý chat do HubSpotu, Salesforce nebo Pipedrive.`,body:`## Podporovaná CRM

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (API token)
- Vlastní přes webhooky

## Co se synchronizuje

- Nové konverzace vytvoří kontakt (pokud ještě neexistuje) a poznámku.
- Odpovědi operátorů se přidají na časovou osu kontaktu.
- Štítky přidané ve wexio se zrcadlí do CRM.

## Obousměrně

Poznámky operátorů přidané v CRM se mohou přes příjemce webhooků vrátit do wexio - viz *Integrace → Webhooky → Příchozí*.`},"demo-article-shortcuts":{title:`Klávesové zkratky pro operátory`,excerpt:`Třiďte dvakrát rychleji - bez myši.`,body:"## Navigace ve schránce\n\n- `j` / `k` - další / předchozí konverzace\n- `e` - vyřešit\n- `a` - přiřadit mně\n- `s` - odložit\n\n## Editor\n\n- `Cmd+Enter` - odeslat\n- `/` - otevřít výběr uložených odpovědí\n- `Cmd+K` - paleta příkazů (všechno)\n\n## Tip\n\nNajeďte na libovolné tlačítko v přehledu - tooltip ukáže jeho zkratku."}},tags:{setup:`Nastavení`,install:`Instalace`,automation:`Automatizace`,flows:`Flow`,integrations:`Integrace`,slack:`Slack`,billing:`Fakturace`,plans:`Tarify`,design:`Design`,ai:`AI`,crm:`CRM`,productivity:`Produktivita`,inbox:`Schránka`}},r={visitorName:`Vy`,messages:{"m-demo-1":{text:`Dobrý den 👋 Jsem Gaia, AI Wexio. S čím vám mohu pomoci?`,ageLabel:`9:41`,buttons:[`Jak funguje ceník?`,`Co všechno umí?`,`Mluvit s člověkem`]},"m-demo-2":{text:`Můžete mi ukázat, jak widget vypadá?`,ageLabel:`9:41`},"m-demo-3":{text:``,ageLabel:`9:42`,mediaAlts:[`Snímek obrazovky produktu`]},"m-demo-4":{text:``,ageLabel:`9:42`,mediaAlts:[`Otáčející se glóbus`]},"m-demo-5":{text:`Skvělé! 😄 Tady je pár pohledů od našeho týmu.`,ageLabel:`9:43`},"m-demo-6":{text:`Několik zajímavostí z přehledu`,ageLabel:`9:43`,mediaAlts:[`Přehled`,`Analytika`,`Schránka`,`Reporty`]},"m-demo-7":{text:``,ageLabel:`9:44`,mediaAlts:[`Rychlý průvodce`]},"m-demo-8":{text:``,ageLabel:`9:44`,mediaAlts:[`Hlasová zpráva`]},"m-demo-9":{text:``,ageLabel:`9:45`,mediaAlts:[`Průvodce pro začátečníky`]},"m-demo-9b":{text:``,ageLabel:`9:45`,mediaAlts:[`Integrace Wexio`]},"m-demo-10":{text:`Chcete si to vyzkoušet sami?`,ageLabel:`9:45`,buttons:[`Otevřít sandbox`,`Rezervovat hovor`,`Pokračovat v chatu`]}}},i={messengerDescription:`Pomůže vám i náš tým`,messengerMessage:`Ahoj 👋 Zeptejte se nás na cokoli, nebo vyberte rychlou akci.`},a={welcome:{system:`Právě chatujete s Gaiou, naší AI asistentkou.`,hint:`Tip: kdykoli můžete připojit soubor nebo nahrát hlasovou zprávu.`,greeting:`Dobrý den 👋 Jsem Gaia, AI Wexio. Zeptejte se na cokoli, nebo začněte rychlou akcí.`},replies:{pricing:{text:`Wexio je pro jeden widget zdarma; placené tarify začínají na 39 $/měs. a odemykají automatizace, integrace a white-label.`,planBtn:`Zobrazit tarify`,salesBtn:`Mluvit s obchodem`},gaia:{text:`Gaia je AI agent, který okamžitě odpovídá na otázky návštěvníků. Učí se z vašich článků nápovědy a předá konverzaci člověku, když si neporadí.`,handoffBtn:`Jak funguje předání?`},human:{text:`Samozřejmě - přizvu Alexe z týmu. V pracovní době odpoví během pár minut.`},fallback:{text:`Rozumím - zjistím to a za chvíli se vám ozvu.`},voice:{text:`Vaši hlasovou zprávu jsem dostala - podívám se na to a ozvu se.`}}},o={main:`Chcete si to vyzkoušet sami?`,billing:`Díky! Váš dotaz k faktuře jsem předala fakturačnímu týmu.`,integrations:`Jak připojím WhatsApp ke svému účtu?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-CgvtA8Ek.js.map