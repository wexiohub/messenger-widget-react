globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Hej 👋 Tack för att du hörde av dig. Jag återkommer strax…`,ageLabel:`4 t`},t={"demo-news-1":{title:`Pioneer 2026: boka in datumet`,excerpt:`Vi är tillbaka i San Francisco den 8 oktober. Dörrarna öppnar kl. 9, keynote kl. 10.`,body:`## Vad du kan förvänta dig

Årets keynote handlar om vad vi har släppt öppet och vad som kommer härnäst. Liveuppvisningar, inga bilder.

- **Gaias färdplan** - vart vår AI är på väg under de kommande två kvartalen.
- **Kundberättelser** - tre team berättar hur de halverade tiden till första svar.
- **Praktiska labb** - ta med en laptop och bygg ett flöde tillsammans med våra ingenjörer.

## Så tar du dig dit

Platsen är Pier 27 Cruise Terminal, precis vid Embarcadero. Närmaste BART-station är Embarcadero, 12 minuters promenad längs vattnet.

## Biljetter

Platserna i early bird-släppet är begränsade och öppnar nästa vecka. Befintliga kunder får förtur, så håll utkik i inkorgen.

> Kan du inte komma på plats? Keynoten direktsänds och inspelningarna kommer hit samma kväll.`},"demo-news-2":{title:`Det här släppte vi i april`,excerpt:`Tre nya automationsutlösare och en mycket snabbare inkorgssökning.`,body:`<p>April var en stor månad. Här är allt vi släppte, i korthet:</p>
<table>
<thead><tr><th>Område</th><th>Vad som ändrats</th><th>Varför det spelar roll</th></tr></thead>
<tbody>
<tr><td>Inkorgssökning</td><td>Omedelbara resultat medan du skriver</td><td>50 000 konversationer, under 100 ms</td></tr>
<tr><td>Automation</td><td>Tre nya utlösare</td><td>Övergiven varukorg, sida besökt igen, tyst besökare</td></tr>
<tr><td>Svarsfält</td><td>Utkastet överlever flikbyte</td><td>Inga fler förlorade halvskrivna svar</td></tr>
<tr><td>Mörkt läge</td><td>Ingen vit blixt vid första visningen</td><td>Renare inladdning på mörka sajter</td></tr>
</tbody>
</table>
<p>Här är den nya sökningen i praktiken - resultaten dyker upp innan du hunnit skriva klart:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Inkorgssökning som visar resultat direkt" />
<p>Tryck på bilden för att se den närmare. Har du en önskan? Svara här - vi läser alla.</p>`},"demo-news-3":{title:`Gaia talar nu 28 språk`,excerpt:`Identifiera besökarens språk automatiskt eller lås ett. Ingen extra inställning.`,body:`<p>Gaia svarar nu på 28 språk, som identifieras automatiskt från besökarens första meddelande. De vanligaste frågorna vi får:</p>
<details><summary>Hur fungerar språkidentifieringen?</summary><p>Gaia läser det första meddelandet och svarar på samma språk. Finns dina hjälpartiklar på det språket hänvisar hon till dem; annars svarar hon utifrån närmaste träff och flaggar luckan till dig.</p></details>
<details><summary>Kan jag tvinga fram ett enda språk?</summary><p>Ja. Lås ett under <strong>Inställningar → AI → Språk</strong> så håller sig Gaia till det oavsett vad besökaren skriver.</p></details>
<details><summary>Vad ser operatörerna?</summary><p>Transkriptioner förblir på ditt teams språk, och originalmeddelandet sparas bredvid översättningen.</p></details>
<p>En snabb titt på hur Gaia byter språk mitt i en tråd:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia svarar på flera olika språk" />`},"demo-news-4":{title:`Skicka konversationer direkt till Slack`,excerpt:`Koppla valfri inkommande webhook till en Slack-kanal. Ingen mellankod.`,body:`## Anslut med två klick

Gå till **Integrationer → Slack**, tryck på *Anslut* och godkänn behörigheterna. Välj kanalen som nya konversationer ska hamna i - de flesta team använder \`#support\`.

## Det här får du

- Ett Slack-meddelande i samma stund som en chatt startar, med länk tillbaka till inkorgen.
- Operatörssvar i en tråd under det ursprungliga meddelandet.
- Svara direkt från Slack så skickar vi det till besökaren i realtid.

## Webhooks också

Skickar du redan händelser från egna system? Rikta valfri webhook mot din Slack-kanal och hoppa över den egna integrationen helt.`},"demo-news-5":{title:`Inbox 2.0: triagera utan mus`,excerpt:`Nya kortkommandon för att tilldela, snooza och lösa - allt från tangentbordet.`,body:`<p>Inbox 2.0 är byggd för tangentbordet. Här är fusklappen, grupperad efter vad du gör:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Navigera</div><ul><li><code>j</code> / <code>k</code> - nästa / föregående konversation</li><li><code>g</code> sedan <code>i</code> - gå till inkorgen</li></ul></div>
<div data-type="tab"><div data-tab-label>Agera</div><ul><li><code>e</code> - lös</li><li><code>a</code> - tilldela mig</li><li><code>s</code> - snooza</li></ul></div>
<div data-type="tab"><div data-tab-label>Skriva</div><ul><li><code>Cmd+Enter</code> - skicka</li><li><code>/</code> - sparade svar</li><li><code>Cmd+K</code> - kommandopalett</li></ul></div>
</div>
<p>Den omdesignade inkorgen - allt inom räckhåll för en tangent:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="Den omdesignade tangentbordsbaserade inkorgen" />`},"demo-news-6":{title:`Självbetjäning för dataexport och radering`,excerpt:`Hantera besökares dataförfrågningar med ett klick. GDPR-redo direkt.`,body:`## Exportera

Från en besökares profil trycker du på **Exportera data** för att skapa ett JSON-paket med varje meddelande, händelse och attribut vi har om personen. Det laddas ned direkt och förfrågan loggas för din dokumentation.

## Radera

**Radera data** tar bort besökaren och raderar meddelandena från inkorgen, sökningen och alla anslutna CRM via samma webhook-brygga. Åtgärden loggas och går inte att ångra.

## För ditt dataskyddsombud

- Varje export och radering får tidsstämpel och avsändare.
- Lagringstider kan ställas in per arbetsyta.
- Ett personuppgiftsbiträdesavtal finns på begäran.`},"demo-news-7":{title:`Mobil-SDK i beta: iOS och Android`,excerpt:`Ta med samma konversation in i din inbyggda app. Betaplatser öppna nu.`,body:`## En konversation, alla ytor

En besökare som startar en chatt på din webbplats kan fortsätta den i din app, inloggad och med hela historiken. Samma Gaia, samma operatörer, samma inkorg.

## Vad som ingår i betan

- Inbyggd launcher för SwiftUI och Jetpack Compose.
- Pushnotiser för nya svar.
- Offlinekö, så att meddelanden skickas när uppkopplingen är tillbaka.

## Gå med

Vi tar in några team varje vecka. Svara här med din plattform och ungefär hur många aktiva användare du har per månad, så skickar vi en nyckel.

> Beta betyder vassa kanter. Vi släpper fixar varje vecka och läser varje felrapport.`},"demo-news-8":{title:`Se vilka AI-svar som faktiskt fungerade`,excerpt:`Följ upp om varje Gaia-svar ledde till en lösning, en överlämning eller ett avhopp.`,body:`## Den nya vyn

**Analys → AI-utfall** bryter ned varje Gaia-svar efter vad som hände sedan:

- **Löst** - besökaren fick det den behövde och gick nöjd.
- **Överlämnad** - Gaia lämnade över konversationen till en människa.
- **Avhopp** - besökaren stängde widgeten utan att få hjälp.

## Insikt per artikel

Gå in på en hjälpartikel för att se hur ofta Gaia hänvisar till den och om de hänvisningarna leder till lösning. Låg lösningsgrad på en artikel med mycket trafik betyder oftast att innehållet behöver skrivas om, inte AI:n.

## Agera på det

Sortera efter avhoppsfrekvens för att hitta frågorna Gaia har svårast för, och lägg sedan till ett flöde eller en vassare artikel för att täppa till luckan.`},tags:{events:`Evenemang`,product:`Produkt`,release:`Release`,ai:`AI`,languages:`Språk`,integrations:`Integrationer`,slack:`Slack`,inbox:`Inkorg`,privacy:`Integritet`,security:`Säkerhet`,mobile:`Mobil`,beta:`Beta`,analytics:`Analys`},categories:{company:`Företag`,product:`Produkt`,engineering:`Utveckling`}},n={categories:{"demo-cat-getting-started":{title:`Kom igång`,description:`Installera widgeten och ställ in din första konversation.`},"demo-cat-automation":{title:`Automation`,description:`Flöden, utlösare och AI-autosvar.`},"demo-cat-integrations":{title:`Integrationer`,description:`Anslut ditt CRM, Slack och CMS.`},"demo-cat-billing":{title:`Fakturering och planer`,description:`Prisnivåer, fakturor och hantering av platser.`}},articles:{"demo-article-install":{title:`Installera Wexio-widgeten på din webbplats`,excerpt:`Ett kodstycke på 30 sekunder som du klistrar in före den avslutande </body>-taggen.`,body:`## Lägg till loader-skriptet

Klistra in det här kodstycket på varje sida där du vill att widgeten ska visas:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

Loadern lägger till en flytande launcher i det nedre högra hörnet. Klicka på den för att öppna chattpanelen.

## Verifiera installationen

- Besök en sida som innehåller kodstycket.
- Öppna webbläsarens konsol.
- Du bör se \`[wexio] widget mounted\`.

## Anpassa utseendet

Widgeten läser varumärkesfärgerna från din dashboard. Uppdatera dem under **Inställningar → Varumärke**.

> Behöver du hjälp? Tryck på "Behöver du fortfarande hjälp? Skriv till oss" nedan så guidar vi dig.`},"demo-article-flows":{title:`Bygg ditt första automationsflöde`,excerpt:`Dra, släpp och lansera en välkomstbot på under fem minuter.`,body:`## Vad är ett flöde?

Ett flöde är ett litet träd av konversationssteg - frågor, svar och villkor - som körs varje gång en besökare matchar en utlösare.

## Tre typer av utlösare

1. **Besökaren öppnade widgeten** - hälsa förstagångsbesökare välkomna.
2. **Besökaren ställde en fråga** - Gaia (AI) försöker svara; klarar hon det inte tar flödet över.
3. **Webhook mottagen** - ditt CMS eller din e-handelsplattform skickar en händelse; flödet startar i rätt chatt.

## Bästa praxis

- Håll första svaren under 80 tecken.
- Erbjud 2-3 snabbsvarsknappar, inte en öppen fråga.
- Erbjud alltid en utväg - *"Prata med en människa"*.`},"demo-article-slack":{title:`Vidarebefordra chattar till Slack`,excerpt:`Spegla varje ny konversation i en Slack-kanal du väljer.`,body:`## Anslut din arbetsyta

Klicka på *Anslut* under **Integrationer → Slack**. Du skickas till Slacks OAuth-skärm - godkänn de begärda behörigheterna (\`chat:write\`, \`channels:read\`).

## Välj en kanal

Efter godkännandet väljer du målkanal (eller skapar en ny, till exempel \`#support\`).

## Vad som vidarebefordras

- Det första meddelandet, med en djuplänk tillbaka till wexio-inkorgen.
- Operatörssvar som trådade meddelanden.
- Besökarens svar i realtid via SSE-bryggan.

## Motsatt riktning

Operatörer kan svara *från* Slack - wexio lyssnar efter svar i Slack-trådar och skickar tillbaka dem till widgeten.`},"demo-article-billing":{title:`Uppdatera din plan och dina faktureringsuppgifter`,excerpt:`Byt nivå, ändra kort eller ladda ned fakturor.`,body:`## Planer

- **Free** - 1 widget, grundfunktioner, märket "Powered by Wexio".
- **Standard** - obegränsat antal widgetar, automationer, integrationer.
- **Enterprise** - white-label, SLA, dedikerad support.

## Byt plan

**Inställningar → Fakturering → Byt plan**. Uppgraderingar gäller direkt; nedgraderingar börjar gälla vid slutet av den aktuella perioden.

## Fakturor

Ladda ned varje faktura som PDF från **Fakturering → Historik**. Vi mejlar också en kopia vid varje förnyelse.`},"demo-article-theme":{title:`Anpassa widgetens tema`,excerpt:`Matcha widgeten med ditt varumärke - färger, rundning, mörkt läge.`,body:`## Varumärkesfärger

Under **Inställningar → Varumärke** ställer du in:

- **Primär** - styr launchern, skicka-knappen och fokusringar.
- **Bakgrund** - panelens yta (ljust) och paret för mörkt läge.

## Rundning

Välj mellan \`sm\`, \`md\`, \`lg\` för ett skarpare eller mjukare utseende. Ändringen gäller direkt för alla widgetar på alla sidor.

## Mörkt läge

Standard = följ besökarens systeminställning. Lås till **alltid ljust** eller **alltid mörkt** om din webbplats inte själv stöder mörkt läge.`},"demo-article-handoff":{title:`Lämna över från Gaia till en mänsklig operatör`,excerpt:`När AI inte räcker - skicka besökaren vidare till en kollega.`,body:`## Utlösare

Gaia lämnar över automatiskt när:

- Besökaren skriver *"prata med en människa"* (eller någon lokaliserad variant).
- Samma fråga ställs två gånger utan lösning.
- Besökarens avsikt matchar en routingregel (t.ex. fakturering → ekonomiteamet).

## Routing

Ställ in **Routing → Regler** för att styra vissa avsikter till specifika team eller operatörer. Både round-robin och minst belastad stöds.

## Utanför öppettider

Om ingen operatör är online erbjuder Gaia ett formulär för återuppringning eller e-postöverlämning i stället för att låtsas att någon är tillgänglig.`},"demo-article-crm":{title:`Synkronisera konversationer med ditt CRM`,excerpt:`Skicka varje chatt till HubSpot, Salesforce eller Pipedrive.`,body:`## CRM som stöds

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (API-token)
- Anpassat via webhooks

## Vad som synkroniseras

- Nya konversationer skapar en kontakt (om den inte redan finns) och en anteckning.
- Operatörssvar läggs till i kontaktens tidslinje.
- Taggar som sätts i wexio speglas till CRM:et.

## Åt båda hållen

Operatörsanteckningar som läggs till i CRM:et kan skickas tillbaka till wexio via webhook-mottagaren - se *Integrationer → Webhooks → Inkommande*.`},"demo-article-shortcuts":{title:`Kortkommandon för operatörer`,excerpt:`Triagera dubbelt så snabbt - ingen mus behövs.`,body:"## Navigera i inkorgen\n\n- `j` / `k` - nästa / föregående konversation\n- `e` - lös\n- `a` - tilldela mig\n- `s` - snooza\n\n## Svarsfält\n\n- `Cmd+Enter` - skicka\n- `/` - öppna väljaren för sparade svar\n- `Cmd+K` - kommandopalett (allt)\n\n## Tips\n\nHovra över valfri knapp i dashboarden - verktygstipset visar dess kortkommando."}},tags:{setup:`Inställning`,install:`Installation`,automation:`Automation`,flows:`Flöden`,integrations:`Integrationer`,slack:`Slack`,billing:`Fakturering`,plans:`Planer`,design:`Design`,ai:`AI`,crm:`CRM`,productivity:`Produktivitet`,inbox:`Inkorg`}},r={visitorName:`Du`,messages:{"m-demo-1":{text:`Hej 👋 Jag är Gaia, Wexios AI. Vad kan jag hjälpa dig med?`,ageLabel:`09:41`,buttons:[`Hur funkar priserna?`,`Vad kan den göra?`,`Prata med en människa`]},"m-demo-2":{text:`Kan du visa hur widgeten ser ut?`,ageLabel:`09:41`},"m-demo-3":{text:``,ageLabel:`09:42`,mediaAlts:[`Skärmbild av produkten`]},"m-demo-4":{text:``,ageLabel:`09:42`,mediaAlts:[`Snurrande jordglob`]},"m-demo-5":{text:`Snyggt! 😄 Här är några vyer från vårt team.`,ageLabel:`09:43`},"m-demo-6":{text:`Några höjdpunkter från dashboarden`,ageLabel:`09:43`,mediaAlts:[`Dashboardöversikt`,`Analys`,`Inkorg`,`Rapporter`]},"m-demo-7":{text:``,ageLabel:`09:44`,mediaAlts:[`Snabb genomgång`]},"m-demo-8":{text:``,ageLabel:`09:44`,mediaAlts:[`Röstmeddelande`]},"m-demo-9":{text:``,ageLabel:`09:45`,mediaAlts:[`Kom igång-guide`]},"m-demo-9b":{text:``,ageLabel:`09:45`,mediaAlts:[`Wexio-integrationer`]},"m-demo-10":{text:`Redo att testa själv?`,ageLabel:`09:45`,buttons:[`Öppna sandlådan`,`Boka ett samtal`,`Fortsätt chatta`]}}},i={messengerDescription:`Vårt team kan också hjälpa till`,messengerMessage:`Hej 👋 Fråga oss vad som helst, eller välj en snabbåtgärd.`},a={welcome:{system:`Du chattar nu med Gaia, vår AI-assistent.`,hint:`Tips: bifoga en fil eller spela in ett röstmeddelande när som helst.`,greeting:`Hej 👋 Jag är Gaia, Wexios AI. Fråga mig vad som helst, eller välj en snabbåtgärd för att komma igång.`},replies:{pricing:{text:`Wexio är gratis för en widget; betalplaner börjar på $39/mån och låser upp automationer, integrationer och white-label.`,planBtn:`Visa plannivåer`,salesBtn:`Prata med försäljning`},gaia:{text:`Gaia är AI-agenten som svarar på besökarnas frågor direkt. Hon lär sig av dina hjälpartiklar och lämnar över till en människa när hon inte kan hjälpa till.`,handoffBtn:`Hur fungerar överlämning?`},human:{text:`Självklart - jag kopplar in Alex från teamet. De svarar inom några minuter under kontorstid.`},fallback:{text:`Uppfattat - jag kollar upp det och återkommer om en stund.`},voice:{text:`Jag fick ditt röstmeddelande - jag kollar upp det och återkommer.`}}},o={main:`Redo att testa själv?`,billing:`Tack! Jag har skickat din fakturafråga vidare till faktureringsteamet.`,integrations:`Hur kopplar jag WhatsApp till mitt konto?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-Cw8StXTV2.js.map