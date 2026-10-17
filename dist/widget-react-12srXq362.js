globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Hei 👋 Takk for at du tok kontakt. Jeg kommer tilbake til deg snart…`,ageLabel:`4 t`},t={"demo-news-1":{title:`Pioneer 2026: sett av datoen`,excerpt:`Vi er tilbake i San Francisco 8. oktober. Dørene åpner kl. 9, keynote kl. 10.`,body:`## Hva du kan forvente

Årets keynote handler om det vi har lansert åpent og det som kommer. Live-demoer, ikke lysbilder.

- **Gaia-veikartet** - hvor AI-en vår er på vei de neste to kvartalene.
- **Kundehistorier** - tre team forteller hvordan de halverte tiden til første svar.
- **Praktiske laber** - ta med en bærbar og bygg en flyt sammen med ingeniørene våre.

## Slik kommer du deg dit

Stedet er Pier 27 Cruise Terminal, rett ved Embarcadero. Nærmeste BART-stopp er Embarcadero, 12 minutters gange langs vannet.

## Billetter

Early bird-plassene er begrenset og åpner neste uke. Eksisterende kunder får førsteretten, så følg med i innboksen din.

> Kan du ikke komme fysisk? Keynoten strømmes direkte, og opptakene legges ut her samme kveld.`},"demo-news-2":{title:`Dette lanserte vi i april`,excerpt:`Tre nye automatiseringsutløsere og et mye raskere innbokssøk.`,body:`<p>April var en travel måned. Her er alt vi lanserte, på et øyeblikk:</p>
<table>
<thead><tr><th>Område</th><th>Hva som er endret</th><th>Hvorfor det betyr noe</th></tr></thead>
<tbody>
<tr><td>Innbokssøk</td><td>Umiddelbare resultater mens du skriver</td><td>50k samtaler, under 100 ms</td></tr>
<tr><td>Automatisering</td><td>Tre nye utløsere</td><td>Forlatt handlekurv, side besøkt på nytt, stille besøkende</td></tr>
<tr><td>Skrivefelt</td><td>Utkastet overlever bytte av fane</td><td>Ingen flere tapte halvskrevne svar</td></tr>
<tr><td>Mørk modus</td><td>Ingen hvitt glimt ved første visning</td><td>Renere innlasting på mørke nettsteder</td></tr>
</tbody>
</table>
<p>Her er det nye søket i aksjon - resultatene kommer før du er ferdig med å skrive:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Innbokssøk som viser resultater umiddelbart" />
<p>Trykk på bildet for å se nærmere. Har du et ønske? Svar her - vi leser alle.</p>`},"demo-news-3":{title:`Gaia snakker nå 28 språk`,excerpt:`Registrer den besøkendes språk automatisk, eller lås ett. Ingen ekstra oppsett.`,body:`<p>Gaia svarer nå på 28 språk, registrert automatisk fra den besøkendes første melding. Spørsmålene vi får oftest:</p>
<details><summary>Hvordan fungerer språkgjenkjenning?</summary><p>Gaia leser den første meldingen og svarer på samme språk. Finnes hjelpeartiklene dine på det språket, henviser hun til dem; ellers svarer hun ut fra nærmeste treff og gir deg beskjed om hullet.</p></details>
<details><summary>Kan jeg tvinge ett enkelt språk?</summary><p>Ja. Lås ett i <strong>Innstillinger → AI → Språk</strong>, så holder Gaia seg til det uansett hva den besøkende skriver.</p></details>
<details><summary>Hva ser operatørene?</summary><p>Transkripsjoner forblir på teamets språk, med den opprinnelige meldingen lagret ved siden av oversettelsen.</p></details>
<p>Et raskt innblikk i at Gaia bytter språk midt i en samtale:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia svarer på flere språk" />`},"demo-news-4":{title:`Send samtaler rett inn i Slack`,excerpt:`Koble en hvilken som helst innkommende webhook til en Slack-kanal. Ingen limkode.`,body:`## Koble til med to klikk

Gå til **Integrasjoner → Slack**, trykk *Koble til* og godkjenn tilgangene. Velg kanalen nye samtaler skal havne i - de fleste team bruker \`#support\`.

## Hva du får

- En Slack-melding i det øyeblikket en chat starter, med lenke tilbake til innboksen.
- Operatørsvar i tråd under den opprinnelige meldingen.
- Svar rett fra Slack, så sender vi det til den besøkende i sanntid.

## Webhooks også

Sender du allerede hendelser fra dine egne systemer? Pek en webhook mot Slack-kanalen din og hopp helt over den skreddersydde integrasjonen.`},"demo-news-5":{title:`Inbox 2.0: triage uten musen`,excerpt:`Nye hurtigtaster for å tildele, utsette og løse - alt fra tastaturet.`,body:`<p>Inbox 2.0 er tastatur først. Her er jukselappen, gruppert etter hva du gjør:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Navigere</div><ul><li><code>j</code> / <code>k</code> - neste / forrige samtale</li><li><code>g</code> og deretter <code>i</code> - gå til innboksen</li></ul></div>
<div data-type="tab"><div data-tab-label>Handle</div><ul><li><code>e</code> - løs</li><li><code>a</code> - tildel meg</li><li><code>s</code> - utsett</li></ul></div>
<div data-type="tab"><div data-tab-label>Skrive</div><ul><li><code>Cmd+Enter</code> - send</li><li><code>/</code> - lagrede svar</li><li><code>Cmd+K</code> - kommandopalett</li></ul></div>
</div>
<p>Den nye innboksen - alt innen rekkevidde av en tast:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="Den nye tastaturbaserte innboksen" />`},"demo-news-6":{title:`Selvbetjent dataeksport og sletting`,excerpt:`Håndter dataforespørsler fra besøkende med ett klikk. GDPR-klart rett ut av boksen.`,body:`## Eksport

Fra en besøkendes profil trykker du **Eksporter data** for å lage en JSON-pakke med hver melding, hendelse og egenskap vi har om vedkommende. Den lastes ned umiddelbart, og forespørselen loggføres i dine rutiner.

## Slett

**Slett data** fjerner den besøkende og sletter meldingene fra innboksen, søket og alle tilkoblede CRM-er via den samme webhook-broen. Handlingen logges og kan ikke angres.

## For personvernombudet

- Hver eksport og sletting får tidsstempel og avsender.
- Lagringsperioder kan konfigureres per arbeidsområde.
- En databehandleravtale er tilgjengelig på forespørsel.`},"demo-news-7":{title:`Mobil-SDK i beta: iOS og Android`,excerpt:`Ta den samme samtalen inn i den native appen din. Betaplasser åpner nå.`,body:`## Én samtale, alle flater

En besøkende som starter en chat på nettstedet ditt, kan ta den opp igjen i appen din, innlogget og med full historikk. Samme Gaia, samme operatører, samme innboks.

## Hva er med i betaen

- Native launcher for SwiftUI og Jetpack Compose.
- Pushvarsler for nye svar.
- Offline-kø, slik at meldinger sendes når forbindelsen er tilbake.

## Bli med

Vi tar inn noen få team hver uke. Svar her med plattformen din og omtrent hvor mange månedlige aktive brukere du har, så sender vi deg en nøkkel.

> Beta betyr noen skarpe kanter. Vi sender ut rettelser hver uke og leser hver feilrapport.`},"demo-news-8":{title:`Se hvilke AI-svar som faktisk fungerte`,excerpt:`Følg med på om hvert Gaia-svar førte til en løsning, en overføring eller et frafall.`,body:`## Den nye visningen

**Analyse → AI-resultater** deler opp hvert Gaia-svar etter hva som skjedde videre:

- **Løst** - den besøkende fikk det vedkommende trengte og dro fornøyd.
- **Overført** - Gaia ga samtalen videre til et menneske.
- **Frafall** - den besøkende lukket widgeten uten løsning.

## Innsikt per artikkel

Gå inn i en hjelpeartikkel for å se hvor ofte Gaia henviser til den og om disse henvisningene løser saken. Lav løsningsgrad på en artikkel med mye trafikk betyr vanligvis at innholdet må skrives om, ikke AI-en.

## Gjør noe med det

Sorter etter frafallsrate for å finne spørsmålene Gaia sliter mest med, og legg så til en flyt eller en skarpere artikkel for å tette hullet.`},tags:{events:`Arrangementer`,product:`Produkt`,release:`Utgivelse`,ai:`AI`,languages:`Språk`,integrations:`Integrasjoner`,slack:`Slack`,inbox:`Innboks`,privacy:`Personvern`,security:`Sikkerhet`,mobile:`Mobil`,beta:`Beta`,analytics:`Analyse`},categories:{company:`Selskap`,product:`Produkt`,engineering:`Utvikling`}},n={categories:{"demo-cat-getting-started":{title:`Kom i gang`,description:`Installer widgeten og sett opp din første samtale.`},"demo-cat-automation":{title:`Automatisering`,description:`Flyter, utløsere og automatisk AI-svar.`},"demo-cat-integrations":{title:`Integrasjoner`,description:`Koble til CRM, Slack og CMS.`},"demo-cat-billing":{title:`Fakturering og abonnement`,description:`Prisnivåer, fakturaer og administrasjon av seter.`}},articles:{"demo-article-install":{title:`Installer Wexio-widgeten på nettstedet ditt`,excerpt:`Et snutt på 30 sekunder du limer inn før den avsluttende </body>-taggen.`,body:`## Legg til loader-skriptet

Lim inn denne snutten på hver side der du vil at widgeten skal vises:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

Loaderen legger inn en flytende launcher nederst til høyre. Klikk på den for å åpne chatpanelet.

## Bekreft installasjonen

- Besøk en side som inneholder snutten.
- Åpne nettleserkonsollen.
- Du skal se \`[wexio] widget mounted\`.

## Tilpass utseendet

Widgeten leser merkefargene fra dashbordet ditt. Oppdater dem i **Innstillinger → Merkevare**.

> Trenger du hjelp? Trykk på "Trenger du fortsatt hjelp? Send oss en melding" nedenfor, så guider vi deg.`},"demo-article-flows":{title:`Bygg din første automatiseringsflyt`,excerpt:`Dra, slipp og lanser en velkomstbot på under fem minutter.`,body:`## Hva er en flyt?

En flyt er et lite tre av samtaletrinn - spørsmål, svar og betingelser - som kjører hver gang en besøkende treffer en utløser.

## Tre typer utløsere

1. **Besøkende åpnet widgeten** - hils på førstegangsbesøkende.
2. **Besøkende stilte et spørsmål** - Gaia (AI) prøver å svare; klarer hun det ikke, overtar flyten.
3. **Webhook mottatt** - CMS-et eller nettbutikkplattformen din sender en hendelse; flyten starter i riktig chat.

## Beste praksis

- Hold første svar under 80 tegn.
- Tilby 2-3 hurtigsvar-chips, ikke et åpent spørsmål.
- Gi alltid en utvei - *"Snakk med et menneske"*.`},"demo-article-slack":{title:`Videresend chatter til Slack`,excerpt:`Speil hver nye samtale inn i en Slack-kanal du velger.`,body:`## Koble til arbeidsområdet ditt

Klikk *Koble til* i **Integrasjoner → Slack**. Du sendes til Slacks OAuth-skjerm - godkjenn de ønskede tilgangene (\`chat:write\`, \`channels:read\`).

## Velg en kanal

Etter autorisering velger du målkanalen (eller oppretter en ny, som \`#support\`).

## Hva som videresendes

- Åpningsmeldingen, med en dyplenke tilbake til wexio-innboksen.
- Operatørsvar som tråder.
- Svar fra besøkende i sanntid via SSE-broen.

## Motsatt retning

Operatører kan svare *fra* Slack - wexio lytter etter svar i Slack-tråder og sender dem tilbake til widgeten.`},"demo-article-billing":{title:`Oppdater abonnementet og faktureringsinformasjonen din`,excerpt:`Bytt nivå, endre kort eller last ned fakturaer.`,body:`## Abonnement

- **Free** - 1 widget, grunnleggende funksjoner, "Powered by Wexio"-merke.
- **Standard** - ubegrenset antall widgeter, automatiseringer, integrasjoner.
- **Enterprise** - white-label, SLA, dedikert support.

## Bytt abonnement

**Innstillinger → Fakturering → Bytt abonnement**. Oppgraderinger trer i kraft umiddelbart; nedgraderinger gjelder fra slutten av inneværende periode.

## Fakturaer

Last ned hver faktura som PDF fra **Fakturering → Historikk**. Vi sender også en kopi på e-post ved hver fornyelse.`},"demo-article-theme":{title:`Tilpass widget-temaet`,excerpt:`Tilpass widgeten til merkevaren din - farger, avrunding, mørk modus.`,body:`## Merkefarger

I **Innstillinger → Merkevare** angir du:

- **Primær** - styrer launcheren, send-knappen og fokusringer.
- **Bakgrunn** - panelflaten (lys) og paret for mørk modus.

## Avrunding

Velg mellom \`sm\`, \`md\`, \`lg\` for et strammere eller mykere uttrykk. Endringen gjelder umiddelbart for alle widgeter på alle sider.

## Mørk modus

Standard = følg den besøkendes systeminnstilling. Lås til **alltid lys** eller **alltid mørk** hvis nettstedet ditt ikke støtter mørk modus selv.`},"demo-article-handoff":{title:`Overfør fra Gaia til en menneskelig operatør`,excerpt:`Når AI ikke er nok - send den besøkende videre til en kollega.`,body:`## Utløsere

Gaia overfører automatisk når:

- Den besøkende skriver *"snakke med et menneske"* (eller en lokalisert variant).
- Det samme spørsmålet stilles to ganger uten løsning.
- Den besøkendes hensikt samsvarer med en rutingregel (f.eks. fakturering → økonomiteamet).

## Ruting

Sett opp **Ruting → Regler** for å sende bestemte hensikter til bestemte team eller operatører. Både round-robin og minst belastet støttes.

## Utenfor åpningstid

Hvis ingen operatør er pålogget, tilbyr Gaia et tilbakeringings- eller e-postskjema i stedet for å late som om noen er tilgjengelig.`},"demo-article-crm":{title:`Synkroniser samtaler med CRM-et ditt`,excerpt:`Send hver chat til HubSpot, Salesforce eller Pipedrive.`,body:`## Støttede CRM-er

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (API-token)
- Egendefinert via webhooks

## Hva som synkroniseres

- Nye samtaler oppretter en kontakt (hvis den ikke finnes fra før) og et notat.
- Operatørsvar legges til i kontaktens tidslinje.
- Tagger satt i wexio speiles til CRM-et.

## Toveis

Operatørnotater lagt til i CRM-et kan sendes tilbake til wexio via webhook-mottakeren - se *Integrasjoner → Webhooks → Innkommende*.`},"demo-article-shortcuts":{title:`Hurtigtaster for operatører`,excerpt:`Triager dobbelt så raskt - uten mus.`,body:"## Navigering i innboksen\n\n- `j` / `k` - neste / forrige samtale\n- `e` - løs\n- `a` - tildel meg\n- `s` - utsett\n\n## Skrivefelt\n\n- `Cmd+Enter` - send\n- `/` - åpne velgeren for lagrede svar\n- `Cmd+K` - kommandopalett (alt)\n\n## Tips\n\nHold musepekeren over en knapp i dashbordet - verktøytipset viser hurtigtasten."}},tags:{setup:`Oppsett`,install:`Installasjon`,automation:`Automatisering`,flows:`Flyter`,integrations:`Integrasjoner`,slack:`Slack`,billing:`Fakturering`,plans:`Abonnement`,design:`Design`,ai:`AI`,crm:`CRM`,productivity:`Produktivitet`,inbox:`Innboks`}},r={visitorName:`Deg`,messages:{"m-demo-1":{text:`Hei 👋 Jeg er Gaia, Wexios AI. Hva kan jeg hjelpe deg med?`,ageLabel:`09:41`,buttons:[`Hvordan fungerer prisene?`,`Hva kan den gjøre?`,`Snakk med et menneske`]},"m-demo-2":{text:`Kan du vise meg hvordan widgeten ser ut?`,ageLabel:`09:41`},"m-demo-3":{text:``,ageLabel:`09:42`,mediaAlts:[`Skjermbilde av produktet`]},"m-demo-4":{text:``,ageLabel:`09:42`,mediaAlts:[`Roterende jordklode`]},"m-demo-5":{text:`Flott! 😄 Her er noen bilder fra teamet vårt.`,ageLabel:`09:43`},"m-demo-6":{text:`Noen høydepunkter fra dashbordet`,ageLabel:`09:43`,mediaAlts:[`Dashbordoversikt`,`Analyse`,`Innboks`,`Rapporter`]},"m-demo-7":{text:``,ageLabel:`09:44`,mediaAlts:[`Rask gjennomgang`]},"m-demo-8":{text:``,ageLabel:`09:44`,mediaAlts:[`Talemelding`]},"m-demo-9":{text:``,ageLabel:`09:45`,mediaAlts:[`Kom i gang-veiledning`]},"m-demo-9b":{text:``,ageLabel:`09:45`,mediaAlts:[`Wexio-integrasjoner`]},"m-demo-10":{text:`Klar for å prøve selv?`,ageLabel:`09:45`,buttons:[`Åpne sandkassen`,`Book en samtale`,`Fortsett å chatte`]}}},i={messengerDescription:`Teamet vårt kan også hjelpe`,messengerMessage:`Hei 👋 Spør oss om hva som helst, eller velg en hurtighandling.`},a={welcome:{system:`Du chatter nå med Gaia, AI-assistenten vår.`,hint:`Tips: legg ved en fil eller ta opp en talemelding når som helst.`,greeting:`Hei 👋 Jeg er Gaia, Wexios AI. Spør meg om hva som helst, eller velg en hurtighandling for å komme i gang.`},replies:{pricing:{text:`Wexio er gratis for én widget; betalte abonnement starter på $39/mnd og gir tilgang til automatiseringer, integrasjoner og white-label.`,planBtn:`Vis abonnementsnivåer`,salesBtn:`Snakk med salg`},gaia:{text:`Gaia er AI-agenten som svarer på spørsmål fra besøkende umiddelbart. Hun lærer av hjelpeartiklene dine og overfører til et menneske når hun ikke kan hjelpe.`,handoffBtn:`Hvordan fungerer overføring?`},human:{text:`Selvfølgelig - jeg tar med Alex fra teamet. De svarer i løpet av noen minutter i åpningstiden.`},fallback:{text:`Skjønner - jeg sjekker det og kommer tilbake om et øyeblikk.`},voice:{text:`Jeg har mottatt talemeldingen din - jeg sjekker det og kommer tilbake.`}}},o={main:`Klar for å prøve selv?`,billing:`Takk! Jeg har sendt spørsmålet ditt om fakturaen videre til faktureringsteamet.`,integrations:`Hvordan kobler jeg WhatsApp til kontoen min?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-12srXq362.js.map