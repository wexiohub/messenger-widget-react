globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Ahoj 👋 Ďakujem, že ste nás kontaktovali. Čoskoro sa vám ozvem…`,ageLabel:`4 h`},t={"demo-news-1":{title:`Pioneer 2026: poznačte si dátum`,excerpt:`Vraciame sa do San Francisca 8. októbra. Otvorenie dverí o 9:00, keynote o 10:00.`,body:`## Čo vás čaká

Tohtoročný keynote je celý o tom, čo sme zverejnili otvorene a čo príde ďalej. Živé ukážky, žiadne prezentácie.

- **Plán rozvoja Gaie** - kam sa naša AI uberie v nasledujúcich dvoch štvrťrokoch.
- **Príbehy zákazníkov** - tri tímy porozprávajú, ako skrátili čas prvej odpovede na polovicu.
- **Praktické laboratóriá** - prineste si notebook a postavte si flow s našimi inžiniermi.

## Ako sa tam dostať

Miestom konania je Pier 27 Cruise Terminal, priamo na Embarcadere. Najbližšia zastávka BART je Embarcadero, 12 minút pešo popri vode.

## Vstupenky

Miesta v predpredaji sú obmedzené a spustíme ich budúci týždeň. Existujúci zákazníci majú prednosť, preto sledujte svoju schránku.

> Nemôžete prísť osobne? Keynote sa vysiela naživo a záznamy sa tu objavia ešte ten istý večer.`},"demo-news-2":{title:`Čo sme vydali v apríli`,excerpt:`Tri nové spúšťače automatizácie a oveľa rýchlejšie vyhľadávanie v schránke.`,body:`<p>Apríl bol náročný mesiac. Tu je všetko, čo sme vydali, v kocke:</p>
<table>
<thead><tr><th>Oblasť</th><th>Čo sa zmenilo</th><th>Prečo na tom záleží</th></tr></thead>
<tbody>
<tr><td>Vyhľadávanie v schránke</td><td>Okamžité výsledky počas písania</td><td>50 tis. konverzácií, pod 100 ms</td></tr>
<tr><td>Automatizácia</td><td>Tri nové spúšťače</td><td>Opustený košík, opätovná návšteva stránky, mlčiaci návštevník</td></tr>
<tr><td>Editor odpovedí</td><td>Koncept prežije prepnutie karty</td><td>Už žiadne stratené rozpísané odpovede</td></tr>
<tr><td>Tmavý režim</td><td>Žiadny biely záblesk pri prvom vykreslení</td><td>Čistejšie načítanie na tmavých weboch</td></tr>
</tbody>
</table>
<p>Takto funguje nové vyhľadávanie - výsledky sa objavia skôr, než dopíšete:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Vyhľadávanie v schránke okamžite zobrazuje výsledky" />
<p>Klepnutím na obrázok si ho môžete pozrieť bližšie. Máte požiadavku? Odpovedzte tu - čítame každú.</p>`},"demo-news-3":{title:`Gaia teraz hovorí 28 jazykmi`,excerpt:`Automaticky rozpoznajte jazyk návštevníka alebo jeden pripnite. Bez ďalšieho nastavovania.`,body:`<p>Gaia teraz odpovedá v 28 jazykoch, ktoré rozpozná automaticky z prvej správy návštevníka. Otázky, ktoré počúvame najčastejšie:</p>
<details><summary>Ako funguje rozpoznávanie jazyka?</summary><p>Gaia prečíta úvodnú správu a odpovie v rovnakom jazyku. Ak vaše články pomocníka existujú v tomto jazyku, odkazuje na ne; inak odpovie podľa najbližšej zhody a upozorní vás na medzeru.</p></details>
<details><summary>Môžem vynútiť jediný jazyk?</summary><p>Áno. Pripnite jeden v <strong>Nastavenia → AI → Jazyk</strong> a Gaia sa ho drží bez ohľadu na to, čo návštevník napíše.</p></details>
<details><summary>Čo vidia operátori?</summary><p>Prepisy ostávajú v jazyku vášho tímu a pôvodná správa sa uchová vedľa prekladu.</p></details>
<p>Rýchly pohľad na to, ako Gaia mení jazyk uprostred konverzácie:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia odpovedá vo viacerých jazykoch" />`},"demo-news-4":{title:`Posielajte konverzácie priamo do Slacku`,excerpt:`Pripojte ľubovoľný prichádzajúci webhook ku kanálu Slack. Bez prepájacieho kódu.`,body:`## Pripojte na dva kliky

Prejdite do **Integrácie → Slack**, kliknite na *Pripojiť* a schváľte oprávnenia. Vyberte kanál, do ktorého majú prichádzať nové konverzácie - väčšina tímov používa \`#support\`.

## Čo získate

- Správu v Slacku v okamihu, keď sa začne chat, s odkazom späť do schránky.
- Odpovede operátorov vo vlákne pod pôvodnou správou.
- Odpovedzte priamo zo Slacku a my to v reálnom čase doručíme návštevníkovi.

## Aj webhooky

Už posielate udalosti z vlastných systémov? Namierte ľubovoľný webhook na svoj kanál Slack a vlastnú integráciu úplne preskočte.`},"demo-news-5":{title:`Inbox 2.0: triedenie bez myši`,excerpt:`Nové skratky na prideľovanie, odloženie a vyriešenie - všetko z klávesnice.`,body:`<p>Inbox 2.0 je postavený na klávesnici. Tu je ťahák zoskupený podľa toho, čo robíte:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Navigácia</div><ul><li><code>j</code> / <code>k</code> - ďalšia / predchádzajúca konverzácia</li><li><code>g</code> a potom <code>i</code> - prejsť do schránky</li></ul></div>
<div data-type="tab"><div data-tab-label>Akcie</div><ul><li><code>e</code> - vyriešiť</li><li><code>a</code> - prideliť mne</li><li><code>s</code> - odložiť</li></ul></div>
<div data-type="tab"><div data-tab-label>Písanie</div><ul><li><code>Cmd+Enter</code> - odoslať</li><li><code>/</code> - uložené odpovede</li><li><code>Cmd+K</code> - paleta príkazov</li></ul></div>
</div>
<p>Prepracovaná schránka - všetko na dosah jedného klávesu:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="Prepracovaná schránka orientovaná na klávesnicu" />`},"demo-news-6":{title:`Export a odstránenie údajov na vyžiadanie`,excerpt:`Vybavte žiadosti o údaje návštevníkov jedným kliknutím. Pripravené na GDPR hneď po inštalácii.`,body:`## Export

V profile ľubovoľného návštevníka kliknite na **Exportovať údaje** a vytvorte balík JSON so všetkými správami, udalosťami a atribútmi, ktoré o ňom evidujeme. Stiahne sa okamžite a žiadosť sa zaznamená pre vašu evidenciu.

## Odstránenie

**Odstrániť údaje** odstráni návštevníka a vymaže jeho správy zo schránky, z vyhľadávania aj zo všetkých pripojených CRM cez ten istý webhook most. Akcia sa zaznamenáva a je nezvratná.

## Pre vášho DPO

- Každý export a odstránenie má časovú pečiatku a autora.
- Doby uchovávania sú konfigurovateľné pre každý pracovný priestor.
- Zmluva o spracúvaní údajov je k dispozícii na požiadanie.`},"demo-news-7":{title:`Mobilné SDK v beta verzii: iOS a Android`,excerpt:`Preneste tú istú konverzáciu do svojej natívnej aplikácie. Miesta v beta verzii sú otvorené.`,body:`## Jedna konverzácia, každá obrazovka

Návštevník, ktorý začne chat na vašom webe, v ňom môže pokračovať vo vašej aplikácii, prihlásený a s celou históriou. Tá istá Gaia, tí istí operátori, tá istá schránka.

## Čo je v beta verzii

- Natívny launcher pre SwiftUI a Jetpack Compose.
- Push notifikácie o nových odpovediach.
- Offline fronta, takže sa správy odošlú, keď sa obnoví pripojenie.

## Pridajte sa

Každý týždeň zapájame niekoľko tímov. Odpovedzte tu s vašou platformou a približným počtom mesačne aktívnych používateľov a pošleme vám kľúč.

> Beta znamená hrubšie hrany. Opravy vydávame každý týždeň a čítame každé hlásenie chyby.`},"demo-news-8":{title:`Zistite, ktoré odpovede AI skutočne zabrali`,excerpt:`Sledujte, či každá odpoveď Gaie viedla k vyriešeniu, odovzdaniu človeku alebo odchodu.`,body:`## Nový pohľad

**Analytika → Výsledky AI** rozdeľuje každú odpoveď Gaie podľa toho, čo sa stalo potom:

- **Vyriešené** - návštevník dostal, čo potreboval, a odišiel spokojný.
- **Odovzdané** - Gaia odovzdala konverzáciu človeku.
- **Odchod** - návštevník zavrel widget bez vyriešenia.

## Prehľad pre každý článok

Otvorte ľubovoľný článok pomocníka a zistite, ako často ho Gaia cituje a či tieto citácie vedú k vyriešeniu. Nízka miera vyriešenia pri často navštevovanom článku zvyčajne znamená, že treba prepísať obsah, nie AI.

## Konajte

Zoraďte podľa miery odchodov, nájdite otázky, s ktorými Gaia zápasí najviac, a potom pridajte flow alebo presnejší článok, aby ste medzeru zaplnili.`},tags:{events:`Udalosti`,product:`Produkt`,release:`Vydanie`,ai:`AI`,languages:`Jazyky`,integrations:`Integrácie`,slack:`Slack`,inbox:`Schránka`,privacy:`Súkromie`,security:`Bezpečnosť`,mobile:`Mobil`,beta:`Beta`,analytics:`Analytika`},categories:{company:`Spoločnosť`,product:`Produkt`,engineering:`Inžinierstvo`}},n={categories:{"demo-cat-getting-started":{title:`Začíname`,description:`Nainštalujte widget a nastavte svoju prvú konverzáciu.`},"demo-cat-automation":{title:`Automatizácia`,description:`Flow, spúšťače a automatická odpoveď AI.`},"demo-cat-integrations":{title:`Integrácie`,description:`Pripojte svoje CRM, Slack a CMS.`},"demo-cat-billing":{title:`Fakturácia a plány`,description:`Cenové úrovne, faktúry a správa miest.`}},articles:{"demo-article-install":{title:`Nainštalujte widget Wexio na svoj web`,excerpt:`30-sekundový úryvok kódu, ktorý vložíte pred uzatvárací tag </body>.`,body:`## Pridajte skript loadera

Vložte tento úryvok na každú stránku, kde chcete, aby sa widget zobrazil:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

Loader vloží plávajúci launcher do pravého dolného rohu. Kliknutím naň otvoríte panel chatu.

## Overte inštaláciu

- Navštívte stránku, ktorá obsahuje úryvok.
- Otvorte konzolu prehliadača.
- Mali by ste vidieť \`[wexio] widget mounted\`.

## Prispôsobte vzhľad

Widget načítava farby značky z vášho dashboardu. Upravte ich v **Nastavenia → Značka**.

> Potrebujete pomoc? Klepnite nižšie na "Stále potrebujete pomoc? Napíšte nám" a prevedieme vás.`},"demo-article-flows":{title:`Vytvorte svoj prvý flow automatizácie`,excerpt:`Potiahnite, pusťte a spustite uvítacieho bota za menej než päť minút.`,body:`## Čo je flow?

Flow je malý strom krokov konverzácie - otázok, odpovedí a podmienok - ktorý sa spustí vždy, keď návštevník splní spúšťač.

## Tri typy spúšťačov

1. **Návštevník otvoril widget** - privítajte nových návštevníkov.
2. **Návštevník položil otázku** - Gaia (AI) sa pokúsi odpovedať; ak nevie, prevezme to flow.
3. **Prijatý webhook** - váš CMS alebo e-shopová platforma pošle udalosť; flow sa spustí v správnom chate.

## Osvedčené postupy

- Prvé odpovede držte pod 80 znakmi.
- Ponúknite 2-3 tlačidlá rýchlej odpovede, nie otvorenú otázku.
- Vždy ponúknite východisko - *"Hovoriť s človekom"*.`},"demo-article-slack":{title:`Presmerujte chaty do Slacku`,excerpt:`Zrkadlite každú novú konverzáciu do kanála Slack podľa vášho výberu.`,body:`## Pripojte svoj pracovný priestor

V **Integrácie → Slack** kliknite na *Pripojiť*. Presmeruje vás na obrazovku OAuth v Slacku - schváľte požadované oprávnenia (\`chat:write\`, \`channels:read\`).

## Vyberte kanál

Po autorizácii vyberte cieľový kanál (alebo vytvorte nový, napríklad \`#support\`).

## Čo sa presmeruje

- Úvodná správa s priamym odkazom späť do schránky wexio.
- Odpovede operátorov ako správy vo vlákne.
- Odpovede návštevníka v reálnom čase cez most SSE.

## Opačný smer

Operátori môžu odpovedať *zo* Slacku - wexio sleduje odpovede vo vláknach Slacku a odošle ich späť do widgetu.`},"demo-article-billing":{title:`Aktualizujte svoj plán a fakturačné údaje`,excerpt:`Zmeňte úroveň, kartu alebo si stiahnite faktúry.`,body:`## Plány

- **Free** - 1 widget, základné funkcie, odznak "Powered by Wexio".
- **Standard** - neobmedzený počet widgetov, automatizácie, integrácie.
- **Enterprise** - white-label, SLA, vyhradená podpora.

## Zmena plánu

**Nastavenia → Fakturácia → Zmeniť plán**. Zvýšenie plánu platí okamžite; zníženie sa uplatní na konci aktuálneho obdobia.

## Faktúry

Každú faktúru si stiahnite ako PDF v **Fakturácia → História**. Pri každom obnovení pošleme kópiu aj e-mailom.`},"demo-article-theme":{title:`Prispôsobte tému widgetu`,excerpt:`Zladťe widget so svojou značkou - farby, zaoblenie, tmavý režim.`,body:`## Farby značky

V **Nastavenia → Značka** nastavte:

- **Primárna** - určuje launcher, tlačidlo odoslania a zvýraznenie fokusu.
- **Pozadie** - povrch panela (svetlý) a dvojicu pre tmavý režim.

## Zaoblenie

Vyberte z \`sm\`, \`md\`, \`lg\` pre ostrejší alebo jemnejší vzhľad. Zmena sa okamžite prejaví vo všetkých widgetoch na všetkých stránkach.

## Tmavý režim

Predvolene = riadi sa systémovým nastavením návštevníka. Prepnite na **vždy svetlý** alebo **vždy tmavý**, ak váš web tmavý režim sám nepodporuje.`},"demo-article-handoff":{title:`Odovzdanie od Gaie ľudskému operátorovi`,excerpt:`Keď AI nestačí - presmerujte návštevníka na kolegu z tímu.`,body:`## Spúšťače

Gaia odovzdá konverzáciu automaticky, keď:

- Návštevník napíše *"chcem hovoriť s človekom"* (alebo ľubovoľnú lokalizovanú podobu).
- Rovnaká otázka padne dvakrát bez vyriešenia.
- Zámer návštevníka zodpovedá pravidlu smerovania (napr. fakturácia → finančný tím).

## Smerovanie

Nastavte **Smerovanie → Pravidlá** a presmerujte určité zámery na konkrétne tímy alebo operátorov. Podporované je round-robin aj najmenej zaťažený.

## Mimo pracovnej doby

Ak nie je online žiadny operátor, Gaia ponúkne formulár spätného volania alebo odovzdania e-mailom namiesto predstierania, že je niekto k dispozícii.`},"demo-article-crm":{title:`Synchronizujte konverzácie so svojím CRM`,excerpt:`Posielajte každý chat do HubSpotu, Salesforce alebo Pipedrive.`,body:`## Podporované CRM

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (API token)
- Vlastné cez webhooky

## Čo sa synchronizuje

- Nové konverzácie vytvoria kontakt (ak ešte neexistuje) a poznámku.
- Odpovede operátorov sa pridajú do časovej osi kontaktu.
- Štítky pridané vo wexio sa zrkadlia do CRM.

## Obojsmerne

Poznámky operátorov pridané v CRM sa môžu vrátiť do wexio cez prijímač webhookov - pozrite *Integrácie → Webhooky → Prichádzajúce*.`},"demo-article-shortcuts":{title:`Klávesové skratky pre operátorov`,excerpt:`Triedte dvakrát rýchlejšie - bez myši.`,body:"## Navigácia v schránke\n\n- `j` / `k` - ďalšia / predchádzajúca konverzácia\n- `e` - vyriešiť\n- `a` - prideliť mne\n- `s` - odložiť\n\n## Editor odpovedí\n\n- `Cmd+Enter` - odoslať\n- `/` - otvoriť výber uložených odpovedí\n- `Cmd+K` - paleta príkazov (všetko)\n\n## Tip\n\nPrejdite kurzorom nad ľubovoľné tlačidlo v dashboarde - tooltip zobrazí jeho skratku."}},tags:{setup:`Nastavenie`,install:`Inštalácia`,automation:`Automatizácia`,flows:`Flow`,integrations:`Integrácie`,slack:`Slack`,billing:`Fakturácia`,plans:`Plány`,design:`Dizajn`,ai:`AI`,crm:`CRM`,productivity:`Produktivita`,inbox:`Schránka`}},r={visitorName:`Vy`,messages:{"m-demo-1":{text:`Ahoj 👋 Som Gaia, AI od Wexio. S čím vám môžem pomôcť?`,ageLabel:`9:41`,buttons:[`Ako fungujú ceny?`,`Čo všetko dokáže?`,`Hovoriť s človekom`]},"m-demo-2":{text:`Môžete mi ukázať, ako widget vyzerá?`,ageLabel:`9:41`},"m-demo-3":{text:``,ageLabel:`9:42`,mediaAlts:[`Snímka obrazovky produktu`]},"m-demo-4":{text:``,ageLabel:`9:42`,mediaAlts:[`Točiaci sa glóbus`]},"m-demo-5":{text:`Pekné! 😄 Tu je niekoľko záberov od nášho tímu.`,ageLabel:`9:43`},"m-demo-6":{text:`Niekoľko zaujímavostí z dashboardu`,ageLabel:`9:43`,mediaAlts:[`Prehľad dashboardu`,`Analytika`,`Schránka`,`Reporty`]},"m-demo-7":{text:``,ageLabel:`9:44`,mediaAlts:[`Rýchla prehliadka`]},"m-demo-8":{text:``,ageLabel:`9:44`,mediaAlts:[`Hlasová správa`]},"m-demo-9":{text:``,ageLabel:`9:45`,mediaAlts:[`Príručka pre začiatočníkov`]},"m-demo-9b":{text:``,ageLabel:`9:45`,mediaAlts:[`Integrácie Wexio`]},"m-demo-10":{text:`Chcete si to vyskúšať sami?`,ageLabel:`9:45`,buttons:[`Otvoriť sandbox`,`Dohodnúť hovor`,`Pokračovať v chate`]}}},i={messengerDescription:`Pomôže vám aj náš tím`,messengerMessage:`Ahoj 👋 Opýtajte sa nás na čokoľvek alebo si vyberte rýchlu akciu.`},a={welcome:{system:`Práve chatujete s Gaiou, naším AI asistentom.`,hint:`Tip: kedykoľvek môžete priložiť súbor alebo nahrať hlasovú správu.`,greeting:`Ahoj 👋 Som Gaia, AI od Wexio. Opýtajte sa ma na čokoľvek alebo si na úvod vyberte rýchlu akciu.`},replies:{pricing:{text:`Wexio je zadarmo pre jeden widget; platené plány začínajú od $39/mes. a odomykajú automatizácie, integrácie a white-label.`,planBtn:`Zobraziť cenové úrovne`,salesBtn:`Hovoriť s obchodom`},gaia:{text:`Gaia je AI agent, ktorý okamžite odpovedá na otázky návštevníkov. Učí sa z vašich článkov pomocníka a keď nevie pomôcť, odovzdá konverzáciu človeku.`,handoffBtn:`Ako funguje odovzdanie?`},human:{text:`Samozrejme - pripájam Alexa z tímu. Počas pracovnej doby odpovie do pár minút.`},fallback:{text:`Rozumiem - overím to a o chvíľu sa vrátim.`},voice:{text:`Hlasovú správu som dostala - overím to a vrátim sa.`}}},o={main:`Chcete si to vyskúšať sami?`,billing:`Ďakujem! Vašu otázku o faktúre som odovzdala tímu fakturácie.`,integrations:`Ako pripojím WhatsApp k svojmu účtu?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-13R6Vrt62.js.map