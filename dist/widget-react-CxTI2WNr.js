globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Hej 👋 Tak fordi du skrev til os. Jeg vender tilbage til dig om lidt…`,ageLabel:`4 t.`},t={"demo-news-1":{title:`Pioneer 2026: sæt kryds i kalenderen`,excerpt:`Vi er tilbage i San Francisco den 8. oktober. Dørene åbner kl. 9, keynote kl. 10.`,body:`## Hvad du kan forvente

Årets keynote handler om det, vi har lanceret åbent, og det, der kommer næste gang. Live-demoer, ikke slides.

- **Gaias køreplan** - hvor vores AI er på vej hen de næste to kvartaler.
- **Kundehistorier** - tre teams fortæller, hvordan de halverede svartiden på første henvendelse.
- **Hands-on-labs** - tag en bærbar med og byg et flow sammen med vores udviklere.

## Sådan kommer du dertil

Stedet er Pier 27 Cruise Terminal, lige ved Embarcadero. Nærmeste BART-station er Embarcadero, en gåtur på 12 minutter langs vandet.

## Billetter

Early bird-pladserne er begrænsede og åbner i næste uge. Eksisterende kunder får forkøb, så hold øje med din indbakke.

> Kan du ikke komme personligt? Keynoten streames live, og optagelserne ligger her samme aften.`},"demo-news-2":{title:`Hvad der kom i april`,excerpt:`Tre nye automatiseringstriggere og en meget hurtigere søgning i indbakken.`,body:`<p>April var en stor måned. Her er alt, hvad vi lancerede, med et enkelt blik:</p>
<table>
<thead><tr><th>Område</th><th>Hvad der er ændret</th><th>Hvorfor det betyder noget</th></tr></thead>
<tbody>
<tr><td>Søgning i indbakken</td><td>Øjeblikkelige resultater, mens du skriver</td><td>50.000 samtaler, under 100 ms</td></tr>
<tr><td>Automatisering</td><td>Tre nye triggere</td><td>Forladt kurv, side besøgt igen, stille besøgende</td></tr>
<tr><td>Editor</td><td>Kladden overlever et skift af fane</td><td>Ikke flere tabte halvskrevne svar</td></tr>
<tr><td>Mørk tilstand</td><td>Intet hvidt glimt ved første visning</td><td>Renere indlæsning på mørke sites</td></tr>
</tbody>
</table>
<p>Her er den nye søgning i aktion - resultaterne dukker op, før du er færdig med at skrive:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Indbakkesøgning, der viser resultater med det samme" />
<p>Tryk på billedet for at se det tættere på. Har du et ønske? Svar her - vi læser dem alle.</p>`},"demo-news-3":{title:`Gaia taler nu 28 sprog`,excerpt:`Registrér den besøgendes sprog automatisk, eller lås ét fast. Ingen ekstra opsætning.`,body:`<p>Gaia svarer nu på 28 sprog, registreret automatisk ud fra den besøgendes første besked. De spørgsmål, vi hører oftest:</p>
<details><summary>Hvordan fungerer sprogregistreringen?</summary><p>Gaia læser den første besked og svarer på samme sprog. Findes dine hjælpeartikler på det sprog, henviser hun til dem; ellers svarer hun ud fra det nærmeste match og gør dig opmærksom på manglen.</p></details>
<details><summary>Kan jeg gennemtvinge ét sprog?</summary><p>Ja. Lås ét under <strong>Indstillinger → AI → Sprog</strong>, så holder Gaia sig til det, uanset hvad den besøgende skriver.</p></details>
<details><summary>Hvad ser operatørerne?</summary><p>Transskriptioner forbliver på dit teams sprog, og den oprindelige besked gemmes ved siden af oversættelsen.</p></details>
<p>Et hurtigt kig på Gaia, der skifter sprog midt i en tråd:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia svarer på flere sprog" />`},"demo-news-4":{title:`Send samtaler direkte til Slack`,excerpt:`Forbind en hvilken som helst indgående webhook til en Slack-kanal. Ingen limkode.`,body:`## Forbind med to klik

Gå til **Integrationer → Slack**, tryk på *Forbind*, og godkend tilladelserne. Vælg den kanal, nye samtaler skal lande i - de fleste teams bruger \`#support\`.

## Det får du

- En Slack-besked i det øjeblik, en chat starter, med et link tilbage til indbakken.
- Operatørsvar i tråd under den oprindelige besked.
- Svar direkte fra Slack, så sender vi det til den besøgende i realtid.

## Webhooks også

Sender du allerede hændelser fra dine egne systemer? Peg en hvilken som helst webhook mod din Slack-kanal og spring den skræddersyede integration helt over.`},"demo-news-5":{title:`Indbakke 2.0: sortér uden mus`,excerpt:`Nye genveje til at tildele, udsætte og løse - alt sammen fra tastaturet.`,body:`<p>Indbakke 2.0 er bygget til tastaturet. Her er snydearket, grupperet efter det, du laver:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Naviger</div><ul><li><code>j</code> / <code>k</code> - næste / forrige samtale</li><li><code>g</code> derefter <code>i</code> - gå til indbakken</li></ul></div>
<div data-type="tab"><div data-tab-label>Handl</div><ul><li><code>e</code> - løs</li><li><code>a</code> - tildel mig</li><li><code>s</code> - udsæt</li></ul></div>
<div data-type="tab"><div data-tab-label>Skriv</div><ul><li><code>Cmd+Enter</code> - send</li><li><code>/</code> - gemte svar</li><li><code>Cmd+K</code> - kommandopalet</li></ul></div>
</div>
<p>Den nye indbakke - alt inden for en tasts rækkevidde:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="Den nydesignede, tastaturfokuserede indbakke" />`},"demo-news-6":{title:`Selvbetjent dataeksport og sletning`,excerpt:`Håndtér besøgendes dataanmodninger med ét klik. GDPR-klar fra start.`,body:`## Eksport

Fra en besøgendes profil trykker du på **Eksportér data** for at generere en JSON-pakke med alle beskeder, hændelser og attributter, vi har gemt om vedkommende. Den downloades med det samme, og anmodningen logges til dine optegnelser.

## Slet

**Slet data** fjerner den besøgende og sletter vedkommendes beskeder fra indbakken, søgningen og enhver forbundet CRM via den samme webhook-bro. Handlingen logges og kan ikke fortrydes.

## Til din DPO

- Hver eksport og sletning er tidsstemplet og tilskrevet en person.
- Opbevaringsperioder kan konfigureres pr. workspace.
- En databehandleraftale er tilgængelig efter anmodning.`},"demo-news-7":{title:`Mobil-SDK i beta: iOS og Android`,excerpt:`Tag den samme samtale med ind i din native app. Betapladser er åbne nu.`,body:`## Én samtale, alle flader

En besøgende, der starter en chat på din hjemmeside, kan fortsætte i din app, logget ind og med hele historikken. Samme Gaia, samme operatører, samme indbakke.

## Hvad er med i betaen

- Native launcher til SwiftUI og Jetpack Compose.
- Push-notifikationer ved nye svar.
- Offline-kø, så beskeder sendes, når forbindelsen vender tilbage.

## Vær med

Vi tager en håndfuld teams ind hver uge. Svar her med din platform og et groft estimat af månedlige aktive brugere, så sender vi dig en nøgle.

> Beta betyder skarpe kanter. Vi udgiver rettelser hver uge og læser alle fejlrapporter.`},"demo-news-8":{title:`Se, hvilke AI-svar der virkelig virkede`,excerpt:`Følg, om hvert svar fra Gaia endte med en løsning, en overdragelse eller et afbrud.`,body:`## Den nye visning

**Analyser → AI-resultater** opdeler hvert svar fra Gaia efter, hvad der skete bagefter:

- **Løst** - den besøgende fik, hvad vedkommende havde brug for, og gik glad derfra.
- **Overdraget** - Gaia gav samtalen videre til et menneske.
- **Afbrudt** - den besøgende lukkede widgetten uden en løsning.

## Indsigt pr. artikel

Gå i dybden med en hvilken som helst hjælpeartikel for at se, hvor ofte Gaia henviser til den, og om de henvisninger løser sagen. Lav løsningsrate på en artikel med meget trafik betyder som regel, at indholdet skal omskrives, ikke AI'en.

## Handl på det

Sortér efter afbrudsrate for at finde de spørgsmål, Gaia har sværest ved, og tilføj så et flow eller en skarpere artikel for at lukke hullet.`},tags:{events:`Events`,product:`Produkt`,release:`Udgivelse`,ai:`AI`,languages:`Sprog`,integrations:`Integrationer`,slack:`Slack`,inbox:`Indbakke`,privacy:`Privatliv`,security:`Sikkerhed`,mobile:`Mobil`,beta:`Beta`,analytics:`Analyser`},categories:{company:`Virksomhed`,product:`Produkt`,engineering:`Udvikling`}},n={categories:{"demo-cat-getting-started":{title:`Kom godt i gang`,description:`Installér widgetten og opsæt din første samtale.`},"demo-cat-automation":{title:`Automatisering`,description:`Flows, triggere og AI's automatiske svar.`},"demo-cat-integrations":{title:`Integrationer`,description:`Forbind din CRM, Slack og CMS.`},"demo-cat-billing":{title:`Fakturering og abonnementer`,description:`Prisniveauer, fakturaer og administration af pladser.`}},articles:{"demo-article-install":{title:`Installér Wexio-widgetten på dit website`,excerpt:`Et 30-sekunders kodestykke, du indsætter før det afsluttende </body>-tag.`,body:`## Tilføj loader-scriptet

Indsæt dette kodestykke på hver side, hvor widgetten skal vises:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

Loaderen indsætter en flydende launcher i nederste højre hjørne. Klik på den for at åbne chatpanelet.

## Bekræft installationen

- Besøg en side, der indeholder kodestykket.
- Åbn browserens konsol.
- Du skulle gerne se \`[wexio] widget mounted\`.

## Tilpas udseendet

Widgetten henter mærkefarverne fra dit dashboard. Opdatér dem under **Indstillinger → Brand**.

> Brug for en hånd? Tryk på "Brug for mere hjælp? Skriv til os" nedenfor, så guider vi dig igennem.`},"demo-article-flows":{title:`Byg dit første automatiseringsflow`,excerpt:`Træk, slip og lancér en velkomstbot på under fem minutter.`,body:`## Hvad er et flow?

Et flow er et lille træ af samtaletrin - spørgsmål, svar og betingelser - der kører, hver gang en besøgende matcher en trigger.

## Tre triggertyper

1. **Besøgende åbnede widgetten** - byd førstegangsbesøgende velkommen.
2. **Besøgende stillede et spørgsmål** - Gaia (AI) forsøger at svare; kan hun ikke, overtager flowet.
3. **Webhook modtaget** - dit CMS eller din e-handelsplatform sender en hændelse; flowet starter i den rigtige chat.

## Bedste praksis

- Hold de første svar under 80 tegn.
- Tilbyd 2-3 hurtigsvar-chips i stedet for et frit tekstspørgsmål.
- Giv altid en udvej - *"Tal med et menneske"*.`},"demo-article-slack":{title:`Videresend chats til Slack`,excerpt:`Spejl hver ny samtale i en Slack-kanal efter eget valg.`,body:`## Forbind dit workspace

Klik på *Forbind* under **Integrationer → Slack**. Du sendes videre til Slacks OAuth-skærm - godkend de ønskede tilladelser (\`chat:write\`, \`channels:read\`).

## Vælg en kanal

Når du har godkendt, vælger du målkanalen (eller opretter en ny som \`#support\`).

## Hvad der videresendes

- Den første besked, med et direkte link tilbage til wexio-indbakken.
- Operatørsvar som tråd-beskeder.
- Besøgendes svar i realtid via SSE-broen.

## Den modsatte retning

Operatører kan svare *fra* Slack - wexio lytter efter svar i Slack-tråde og sender dem tilbage til widgetten.`},"demo-article-billing":{title:`Opdatér dit abonnement og dine faktureringsoplysninger`,excerpt:`Skift abonnement, skift kort, eller download fakturaer.`,body:`## Abonnementer

- **Free** - 1 widget, basisfunktioner, mærket "Powered by Wexio".
- **Standard** - ubegrænsede widgets, automatiseringer, integrationer.
- **Enterprise** - white-label, SLA, dedikeret support.

## Skift abonnement

**Indstillinger → Fakturering → Skift abonnement**. Opgraderinger træder i kraft med det samme; nedgraderinger gælder fra udgangen af den aktuelle periode.

## Fakturaer

Download hver faktura som PDF fra **Fakturering → Historik**. Vi sender også en kopi på mail ved hver fornyelse.`},"demo-article-theme":{title:`Tilpas widgettens tema`,excerpt:`Få widgetten til at matche dit brand - farver, afrunding, mørk tilstand.`,body:`## Mærkefarver

Under **Indstillinger → Brand** angiver du:

- **Primær** - styrer launcheren, send-knappen og fokusringene.
- **Baggrund** - panelets overflade (lys) og parret til mørk tilstand.

## Afrunding

Vælg mellem \`sm\`, \`md\` og \`lg\` for et skarpere eller blødere udtryk. Ændringen gælder live for alle widgets på alle sider.

## Mørk tilstand

Standard = følg den besøgendes systemindstilling. Lås til **altid lys** eller **altid mørk**, hvis dit website ikke selv understøtter mørk tilstand.`},"demo-article-handoff":{title:`Overdrag fra Gaia til en menneskelig operatør`,excerpt:`Når AI ikke er nok - send den besøgende videre til en kollega.`,body:`## Triggere

Gaia overdrager automatisk, når:

- Den besøgende skriver *"tal med et menneske"* (eller en lokaliseret variant).
- Det samme spørgsmål stilles to gange uden løsning.
- Den besøgendes hensigt matcher en routingregel (f.eks. fakturering → økonomiteamet).

## Routing

Opsæt **Routing → Regler** for at sende bestemte hensigter til bestemte teams eller operatører. Både round-robin og mindst belastet understøttes.

## Uden for åbningstid

Hvis ingen operatør er online, tilbyder Gaia en tilbagekaldelse eller en e-mail-overdragelsesformular i stedet for at lade som om, nogen er tilgængelig.`},"demo-article-crm":{title:`Synkronisér samtaler til din CRM`,excerpt:`Send hver chat til HubSpot, Salesforce eller Pipedrive.`,body:`## Understøttede CRM-systemer

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (API-token)
- Brugerdefineret via webhooks

## Hvad der synkroniseres

- Nye samtaler opretter en kontakt (hvis den ikke findes) og en note.
- Operatørsvar tilføjes til kontaktens tidslinje.
- Tags, der sættes i wexio, afspejles i CRM'en.

## Begge veje

Operatørnoter tilføjet i CRM'en kan sendes tilbage til wexio via webhook-modtageren - se *Integrationer → Webhooks → Indgående*.`},"demo-article-shortcuts":{title:`Tastaturgenveje til operatører`,excerpt:`Sortér dobbelt så hurtigt - uden mus.`,body:"## Navigation i indbakken\n\n- `j` / `k` - næste / forrige samtale\n- `e` - løs\n- `a` - tildel mig\n- `s` - udsæt\n\n## Editor\n\n- `Cmd+Enter` - send\n- `/` - åbn vælgeren til gemte svar\n- `Cmd+K` - kommandopalet (alt)\n\n## Tip\n\nHold musen over en knap i dashboardet - tooltippen viser dens genvej."}},tags:{setup:`Opsætning`,install:`Installation`,automation:`Automatisering`,flows:`Flows`,integrations:`Integrationer`,slack:`Slack`,billing:`Fakturering`,plans:`Abonnementer`,design:`Design`,ai:`AI`,crm:`CRM`,productivity:`Produktivitet`,inbox:`Indbakke`}},r={visitorName:`Dig`,messages:{"m-demo-1":{text:`Hej 👋 Jeg er Gaia, Wexios AI. Hvad kan jeg hjælpe dig med?`,ageLabel:`9:41`,buttons:[`Hvordan fungerer priserne?`,`Hvad kan den?`,`Tal med et menneske`]},"m-demo-2":{text:`Kan du vise mig, hvordan widgetten ser ud?`,ageLabel:`9:41`},"m-demo-3":{text:``,ageLabel:`9:42`,mediaAlts:[`Skærmbillede af produktet`]},"m-demo-4":{text:``,ageLabel:`9:42`,mediaAlts:[`Roterende globus`]},"m-demo-5":{text:`Flot! 😄 Her er et par billeder fra vores team.`,ageLabel:`9:43`},"m-demo-6":{text:`Nogle højdepunkter fra dashboardet`,ageLabel:`9:43`,mediaAlts:[`Dashboardoversigt`,`Analyser`,`Indbakke`,`Rapporter`]},"m-demo-7":{text:``,ageLabel:`9:44`,mediaAlts:[`Hurtig gennemgang`]},"m-demo-8":{text:``,ageLabel:`9:44`,mediaAlts:[`Talebesked`]},"m-demo-9":{text:``,ageLabel:`9:45`,mediaAlts:[`Kom godt i gang-guide`]},"m-demo-9b":{text:``,ageLabel:`9:45`,mediaAlts:[`Wexio-integrationer`]},"m-demo-10":{text:`Klar til at prøve det selv?`,ageLabel:`9:45`,buttons:[`Åbn sandbox`,`Book et opkald`,`Fortsæt med at chatte`]}}},i={messengerDescription:`Vores team kan også hjælpe`,messengerMessage:`Hej 👋 Spørg os om hvad som helst, eller vælg en hurtig handling.`},a={welcome:{system:`Du chatter nu med Gaia, vores AI-assistent.`,hint:`Tip: du kan til enhver tid vedhæfte en fil eller optage en talebesked.`,greeting:`Hej 👋 Jeg er Gaia, Wexios AI. Spørg mig om hvad som helst, eller vælg en hurtig handling for at komme i gang.`},replies:{pricing:{text:`Wexio er gratis til én widget; betalte abonnementer starter ved 39 $/md. og låser op for automatiseringer, integrationer og white-label.`,planBtn:`Vis abonnementsniveauer`,salesBtn:`Tal med salg`},gaia:{text:`Gaia er den AI-agent, der svarer på besøgendes spørgsmål med det samme. Hun lærer af dine hjælpeartikler og overdrager til et menneske, når hun ikke kan hjælpe.`,handoffBtn:`Hvordan fungerer overdragelse?`},human:{text:`Selvfølgelig - jeg henter Alex fra teamet. Vedkommende svarer inden for få minutter i åbningstiden.`},fallback:{text:`Forstået - jeg undersøger det og vender tilbage om lidt.`},voice:{text:`Jeg har fået din talebesked - jeg tjekker det og vender tilbage.`}}},o={main:`Klar til at prøve det selv?`,billing:`Tak! Jeg har givet dit spørgsmål om fakturaen videre til faktureringsteamet.`,integrations:`Hvordan forbinder jeg WhatsApp til min konto?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-CxTI2WNr.js.map