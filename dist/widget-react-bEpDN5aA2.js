globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Hallo 👋 Bedankt voor je bericht. Ik kom zo snel mogelijk bij je terug…`,ageLabel:`4 u`},t={"demo-news-1":{title:`Pioneer 2026: zet het in je agenda`,excerpt:`We zijn terug in San Francisco op 8 oktober. Deuren open om 9 uur, keynote om 10 uur.`,body:`## Wat je kunt verwachten

De keynote van dit jaar gaat over wat we openlijk hebben opgeleverd en wat er nog aankomt. Live demo's, geen slides.

- **De Gaia-roadmap** - waar onze AI de komende twee kwartalen naartoe gaat.
- **Klantverhalen** - drie teams vertellen hoe ze hun eerste reactietijd halveerden.
- **Hands-on labs** - neem een laptop mee en bouw een flow met onze engineers.

## Hoe kom je er

De locatie is de Pier 27 Cruise Terminal, direct aan de Embarcadero. De dichtstbijzijnde BART-halte is Embarcadero, 12 minuten lopen langs het water.

## Tickets

Early-bird plaatsen zijn beperkt en gaan volgende week live. Bestaande klanten krijgen voorrang, dus houd je inbox in de gaten.

> Kun je er niet bij zijn? De keynote wordt live gestreamd en de opnames staan dezelfde avond hier.`},"demo-news-2":{title:`Wat er in april is uitgebracht`,excerpt:`Drie nieuwe automatiseringstriggers en een veel snellere inbox-zoekfunctie.`,body:`<p>April was een drukke maand. Dit is alles wat we hebben uitgebracht, in één oogopslag:</p>
<table>
<thead><tr><th>Onderdeel</th><th>Wat er veranderde</th><th>Waarom het ertoe doet</th></tr></thead>
<tbody>
<tr><td>Inbox zoeken</td><td>Directe resultaten terwijl je typt</td><td>50k gesprekken, onder 100 ms</td></tr>
<tr><td>Automatisering</td><td>Drie nieuwe triggers</td><td>Winkelwagen verlaten, pagina opnieuw bezocht, stille bezoeker</td></tr>
<tr><td>Editor</td><td>Concept blijft behouden bij wisselen van tabblad</td><td>Geen half getypte antwoorden meer kwijt</td></tr>
<tr><td>Donkere modus</td><td>Geen wit flitsje bij de eerste weergave</td><td>Rustiger laden op donkere sites</td></tr>
</tbody>
</table>
<p>Zo werkt de nieuwe zoekfunctie - resultaten verschijnen voordat je klaar bent met typen:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Inbox-zoekfunctie die direct resultaten toont" />
<p>Tik op de afbeelding om hem van dichterbij te bekijken. Heb je een wens? Reageer hier - we lezen ze allemaal.</p>`},"demo-news-3":{title:`Gaia spreekt nu 28 talen`,excerpt:`Herken de taal van de bezoeker automatisch of leg er één vast. Geen extra instellingen.`,body:`<p>Gaia antwoordt nu in 28 talen, automatisch herkend uit het eerste bericht van de bezoeker. De vragen die we het vaakst horen:</p>
<details><summary>Hoe werkt taalherkenning?</summary><p>Gaia leest het openingsbericht en antwoordt in dezelfde taal. Als je helpartikelen in die taal bestaan, verwijst Gaia ernaar; anders antwoordt ze op basis van de dichtstbijzijnde match en meldt ze het gat aan jou.</p></details>
<details><summary>Kan ik één taal afdwingen?</summary><p>Ja. Leg er één vast in <strong>Instellingen → AI → Taal</strong> en Gaia blijft die taal gebruiken, wat de bezoeker ook typt.</p></details>
<details><summary>Wat zien operators?</summary><p>Transcripties blijven in de taal van je team, met het oorspronkelijke bericht naast de vertaling bewaard.</p></details>
<p>Een korte blik op Gaia die midden in een gesprek van taal wisselt:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia antwoordt in meerdere talen" />`},"demo-news-4":{title:`Stuur gesprekken rechtstreeks naar Slack`,excerpt:`Koppel elke inkomende webhook aan een Slack-kanaal. Geen plakcode nodig.`,body:`## Koppel in twee klikken

Ga naar **Integraties → Slack**, klik op *Verbinden* en keur de rechten goed. Kies het kanaal waar nieuwe gesprekken binnenkomen - de meeste teams gebruiken \`#support\`.

## Wat je krijgt

- Een Slack-bericht op het moment dat een chat start, met een link terug naar de inbox.
- Antwoorden van operators in een thread onder het oorspronkelijke bericht.
- Antwoord direct vanuit Slack en wij sturen het in realtime door naar de bezoeker.

## Webhooks ook

Stuur je al events vanuit je eigen systemen? Richt een webhook op je Slack-kanaal en sla de eigen integratie helemaal over.`},"demo-news-5":{title:`Inbox 2.0: triage zonder muis`,excerpt:`Nieuwe sneltoetsen voor toewijzen, uitstellen en oplossen - allemaal met het toetsenbord.`,body:`<p>Inbox 2.0 draait om het toetsenbord. Hier is het spiekbriefje, gegroepeerd per activiteit:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Navigeren</div><ul><li><code>j</code> / <code>k</code> - volgend / vorig gesprek</li><li><code>g</code> en dan <code>i</code> - naar de inbox</li></ul></div>
<div data-type="tab"><div data-tab-label>Handelen</div><ul><li><code>e</code> - oplossen</li><li><code>a</code> - aan mij toewijzen</li><li><code>s</code> - uitstellen</li></ul></div>
<div data-type="tab"><div data-tab-label>Schrijven</div><ul><li><code>Cmd+Enter</code> - verzenden</li><li><code>/</code> - opgeslagen antwoorden</li><li><code>Cmd+K</code> - opdrachtenpalet</li></ul></div>
</div>
<p>De vernieuwde inbox - alles binnen handbereik van je toetsen:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="De vernieuwde inbox voor het toetsenbord" />`},"demo-news-6":{title:`Zelf gegevens exporteren en verwijderen`,excerpt:`Handel gegevensverzoeken van bezoekers af met één klik. AVG-klaar, direct uit de doos.`,body:`## Exporteren

Klik in het profiel van een bezoeker op **Gegevens exporteren** om een JSON-bundel te maken van elk bericht, event en attribuut dat we van die persoon hebben. Het wordt direct gedownload en het verzoek wordt voor je administratie vastgelegd.

## Verwijderen

**Gegevens verwijderen** haalt de bezoeker weg en wist de berichten uit de inbox, de zoekfunctie en elke gekoppelde CRM via dezelfde webhookbrug. De actie wordt vastgelegd en is onomkeerbaar.

## Voor je DPO

- Elke export en verwijdering heeft een tijdstempel en een uitvoerder.
- Bewaartermijnen zijn per workspace in te stellen.
- Een verwerkersovereenkomst is op aanvraag beschikbaar.`},"demo-news-7":{title:`Mobiele SDK-bèta: iOS en Android`,excerpt:`Breng hetzelfde gesprek naar je native app. Bèta-plekken zijn nu open.`,body:`## Eén gesprek, elk scherm

Een bezoeker die op je website een chat start, kan die in je app voortzetten, ingelogd en met de volledige geschiedenis. Dezelfde Gaia, dezelfde operators, dezelfde inbox.

## Wat zit er in de bèta

- Native launcher voor SwiftUI en Jetpack Compose.
- Pushmeldingen voor nieuwe antwoorden.
- Offline wachtrij, zodat berichten worden verstuurd zodra de verbinding terugkomt.

## Doe mee

We laten elke week een paar teams toe. Reageer hier met je platform en het ongeveer aantal maandelijkse actieve gebruikers, dan sturen we je een sleutel.

> Bèta betekent ruwe randjes. We leveren wekelijks fixes en lezen elke bugmelding.`},"demo-news-8":{title:`Zie welke AI-antwoorden echt hielpen`,excerpt:`Volg of elk Gaia-antwoord leidde tot een oplossing, een overdracht of een afhaker.`,body:`## De nieuwe weergave

**Analyse → AI-resultaten** splitst elk Gaia-antwoord uit op wat er daarna gebeurde:

- **Opgelost** - de bezoeker kreeg wat hij nodig had en vertrok tevreden.
- **Overgedragen** - Gaia gaf het gesprek door aan een mens.
- **Afgehaakt** - de bezoeker sloot de widget zonder oplossing.

## Inzicht per artikel

Duik in een helpartikel om te zien hoe vaak Gaia ernaar verwijst en of die verwijzingen tot een oplossing leiden. Weinig oplossingen bij een veelbezocht artikel betekent meestal dat de inhoud herschreven moet worden, niet de AI.

## Ga ermee aan de slag

Sorteer op afhaakpercentage om de vragen te vinden waar Gaia het meest mee worstelt, en voeg dan een flow of een scherper artikel toe om het gat te dichten.`},tags:{events:`Evenementen`,product:`Product`,release:`Release`,ai:`AI`,languages:`Talen`,integrations:`Integraties`,slack:`Slack`,inbox:`Inbox`,privacy:`Privacy`,security:`Beveiliging`,mobile:`Mobiel`,beta:`Bèta`,analytics:`Analyse`},categories:{company:`Bedrijf`,product:`Product`,engineering:`Engineering`}},n={categories:{"demo-cat-getting-started":{title:`Aan de slag`,description:`Installeer de widget en stel je eerste gesprek in.`},"demo-cat-automation":{title:`Automatisering`,description:`Flows, triggers en het automatische AI-antwoord.`},"demo-cat-integrations":{title:`Integraties`,description:`Koppel je CRM, Slack en CMS.`},"demo-cat-billing":{title:`Facturatie en abonnementen`,description:`Prijsniveaus, facturen en beheer van seats.`}},articles:{"demo-article-install":{title:`Installeer de Wexio-widget op je site`,excerpt:`Een snippet van 30 seconden die je vóór de afsluitende </body>-tag plakt.`,body:`## Voeg het loader-script toe

Plak deze snippet op elke pagina waar je de widget wilt tonen:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

De loader plaatst een zwevende launcher rechtsonder. Klik erop om het chatpaneel te openen.

## Controleer de installatie

- Bezoek een pagina met de snippet.
- Open de browserconsole.
- Je zou \`[wexio] widget mounted\` moeten zien.

## Pas het uiterlijk aan

De widget leest de merkkleuren uit je dashboard. Wijzig ze in **Instellingen → Merk**.

> Hulp nodig? Tik hieronder op "Nog hulp nodig? Stuur ons een bericht" en we helpen je op weg.`},"demo-article-flows":{title:`Bouw je eerste automatiseringsflow`,excerpt:`Slepen, neerzetten en een welkomstbot live zetten in minder dan vijf minuten.`,body:`## Wat is een flow?

Een flow is een kleine boom van gespreksstappen - vragen, antwoorden en voorwaarden - die draait zodra een bezoeker aan een trigger voldoet.

## Drie soorten triggers

1. **Bezoeker opende de widget** - begroet nieuwe bezoekers.
2. **Bezoeker stelde een vraag** - Gaia (AI) probeert te antwoorden; lukt dat niet, dan neemt de flow het over.
3. **Webhook ontvangen** - je CMS of webshopplatform stuurt een event; de flow start in de juiste chat.

## Best practices

- Houd eerste antwoorden onder de 80 tekens.
- Bied 2-3 snelle antwoordchips aan in plaats van een open vraag.
- Bied altijd een uitweg - *"Spreek met een mens"*.`},"demo-article-slack":{title:`Chats doorsturen naar Slack`,excerpt:`Spiegel elk nieuw gesprek naar een Slack-kanaal naar keuze.`,body:`## Koppel je workspace

Klik in **Integraties → Slack** op *Verbinden*. Je wordt doorgestuurd naar het OAuth-scherm van Slack - keur de gevraagde rechten goed (\`chat:write\`, \`channels:read\`).

## Kies een kanaal

Kies na het autoriseren het doelkanaal (of maak een nieuw aan, zoals \`#support\`).

## Wat wordt doorgestuurd

- Het openingsbericht, met een deeplink terug naar de wexio-inbox.
- Antwoorden van operators als berichten in een thread.
- Antwoorden van bezoekers in realtime via de SSE-brug.

## Andere richting

Operators kunnen *vanuit* Slack antwoorden - wexio luistert naar antwoorden in Slack-threads en plaatst ze terug in de widget.`},"demo-article-billing":{title:`Je abonnement en factuurgegevens bijwerken`,excerpt:`Wissel van niveau, wijzig je kaart of download facturen.`,body:`## Abonnementen

- **Free** - 1 widget, basisfuncties, badge "Powered by Wexio".
- **Standard** - onbeperkt widgets, automatiseringen, integraties.
- **Enterprise** - white-label, SLA, persoonlijke support.

## Abonnement wijzigen

**Instellingen → Facturatie → Abonnement wijzigen**. Upgrades gaan direct in; downgrades gelden vanaf het einde van de lopende periode.

## Facturen

Download elke factuur als pdf via **Facturatie → Geschiedenis**. Bij elke verlenging sturen we ook een kopie per e-mail.`},"demo-article-theme":{title:`Het thema van de widget aanpassen`,excerpt:`Laat de widget bij je merk passen - kleuren, afrondingen, donkere modus.`,body:`## Merkkleuren

Stel in **Instellingen → Merk** in:

- **Primair** - bepaalt de launcher, verzendknop en focusranden.
- **Achtergrond** - het paneeloppervlak (licht) en het paar voor de donkere modus.

## Afrondingen

Kies uit \`sm\`, \`md\`, \`lg\` voor een strakkere of zachtere look. De wijziging geldt direct voor elke widget op elke pagina.

## Donkere modus

Standaard = de systeemvoorkeur van de bezoeker volgen. Zet vast op **altijd licht** of **altijd donker** als je site zelf geen donkere modus ondersteunt.`},"demo-article-handoff":{title:`Overdragen van Gaia naar een medewerker`,excerpt:`Als AI niet genoeg is - stuur de bezoeker door naar een collega.`,body:`## Triggers

Gaia draagt automatisch over wanneer:

- De bezoeker *"ik wil een mens spreken"* typt (of een gelokaliseerde variant).
- Dezelfde vraag twee keer wordt gesteld zonder oplossing.
- De intentie van de bezoeker past bij een routeringsregel (bijv. facturatie → financiën).

## Routering

Stel **Routering → Regels** in om bepaalde intenties naar specifieke teams of operators te sturen. Round-robin en minst-belast worden beide ondersteund.

## Buiten kantooruren

Als er geen operator online is, biedt Gaia een terugbelverzoek of e-mailformulier aan in plaats van te doen alsof er iemand beschikbaar is.`},"demo-article-crm":{title:`Gesprekken synchroniseren met je CRM`,excerpt:`Stuur elke chat naar HubSpot, Salesforce of Pipedrive.`,body:`## Ondersteunde CRM's

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (API-token)
- Aangepast via webhooks

## Wat wordt gesynchroniseerd

- Nieuwe gesprekken maken een contact aan (als het er nog niet is) en een notitie.
- Antwoorden van operators worden toegevoegd aan de tijdlijn van het contact.
- Tags uit wexio worden gespiegeld naar de CRM.

## Tweerichtingsverkeer

Notities van operators in de CRM kunnen via de webhook-ontvanger terug naar wexio - zie *Integraties → Webhooks → Inkomend*.`},"demo-article-shortcuts":{title:`Sneltoetsen voor operators`,excerpt:`Triage twee keer zo snel - zonder muis.`,body:"## Navigatie in de inbox\n\n- `j` / `k` - volgend / vorig gesprek\n- `e` - oplossen\n- `a` - aan mij toewijzen\n- `s` - uitstellen\n\n## Editor\n\n- `Cmd+Enter` - verzenden\n- `/` - kiezer voor opgeslagen antwoorden openen\n- `Cmd+K` - opdrachtenpalet (alles)\n\n## Tip\n\nHoud de muis boven een knop in het dashboard - de tooltip toont de sneltoets."}},tags:{setup:`Installatie`,install:`Installeren`,automation:`Automatisering`,flows:`Flows`,integrations:`Integraties`,slack:`Slack`,billing:`Facturatie`,plans:`Abonnementen`,design:`Ontwerp`,ai:`AI`,crm:`CRM`,productivity:`Productiviteit`,inbox:`Inbox`}},r={visitorName:`Jij`,messages:{"m-demo-1":{text:`Hallo 👋 Ik ben Gaia, de AI van Wexio. Waarmee kan ik je helpen?`,ageLabel:`9:41`,buttons:[`Hoe werkt de prijs?`,`Wat kan het allemaal?`,`Spreek met een mens`]},"m-demo-2":{text:`Kun je laten zien hoe de widget eruitziet?`,ageLabel:`9:41`},"m-demo-3":{text:``,ageLabel:`9:42`,mediaAlts:[`Productscreenshot`]},"m-demo-4":{text:``,ageLabel:`9:42`,mediaAlts:[`Draaiende wereldbol`]},"m-demo-5":{text:`Mooi! 😄 Hier zijn een paar beelden van ons team.`,ageLabel:`9:43`},"m-demo-6":{text:`Een paar hoogtepunten uit het dashboard`,ageLabel:`9:43`,mediaAlts:[`Dashboardoverzicht`,`Analyse`,`Inbox`,`Rapporten`]},"m-demo-7":{text:``,ageLabel:`9:44`,mediaAlts:[`Korte rondleiding`]},"m-demo-8":{text:``,ageLabel:`9:44`,mediaAlts:[`Spraakbericht`]},"m-demo-9":{text:``,ageLabel:`9:45`,mediaAlts:[`Aan de slag-gids`]},"m-demo-9b":{text:``,ageLabel:`9:45`,mediaAlts:[`Wexio-integraties`]},"m-demo-10":{text:`Klaar om het zelf te proberen?`,ageLabel:`9:45`,buttons:[`Sandbox openen`,`Een gesprek plannen`,`Verder chatten`]}}},i={messengerDescription:`Ons team kan ook helpen`,messengerMessage:`Hoi 👋 Stel ons gerust een vraag, of kies een snelle actie.`},a={welcome:{system:`Je chat nu met Gaia, onze AI-assistent.`,hint:`Tip: voeg op elk moment een bestand toe of neem een spraakbericht op.`,greeting:`Hallo 👋 Ik ben Gaia, de AI van Wexio. Vraag me alles, of kies een snelle actie om te beginnen.`},replies:{pricing:{text:`Wexio is gratis voor één widget; betaalde abonnementen beginnen bij $39/mnd en ontgrendelen automatiseringen, integraties en white-label.`,planBtn:`Toon abonnementsniveaus`,salesBtn:`Praat met sales`},gaia:{text:`Gaia is de AI-agent die vragen van bezoekers direct beantwoordt. Ze leert van je helpartikelen en draagt over aan een mens als ze niet kan helpen.`,handoffBtn:`Hoe werkt overdragen?`},human:{text:`Natuurlijk - ik haal Alex van het team erbij. Tijdens kantooruren reageert die binnen een paar minuten.`},fallback:{text:`Begrepen - ik zoek het uit en kom zo bij je terug.`},voice:{text:`Je spraakbericht is binnen - ik zoek het uit en kom bij je terug.`}}},o={main:`Klaar om het zelf te proberen?`,billing:`Bedankt! Ik heb je vraag over de factuur doorgegeven aan het facturatieteam.`,integrations:`Hoe koppel ik WhatsApp aan mijn account?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-bEpDN5aA2.js.map