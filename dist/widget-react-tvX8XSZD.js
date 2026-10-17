globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Hallo 👋 Danke für deine Nachricht. Ich melde mich gleich bei dir…`,ageLabel:`4 Std.`},t={"demo-news-1":{title:`Pioneer 2026: Termin vormerken`,excerpt:`Wir sind am 8. Oktober zurück in San Francisco. Einlass um 9 Uhr, Keynote um 10 Uhr.`,body:`## Was dich erwartet

In der diesjährigen Keynote geht es darum, was wir offen ausgeliefert haben und was als Nächstes kommt. Live-Demos statt Folien.

- **Die Gaia-Roadmap** - wohin sich unsere KI in den nächsten zwei Quartalen entwickelt.
- **Kundengeschichten** - drei Teams erzählen, wie sie ihre Erstantwortzeit halbiert haben.
- **Praxis-Labs** - bring einen Laptop mit und baue gemeinsam mit unseren Entwicklern einen Flow.

## Anreise

Der Veranstaltungsort ist das Pier 27 Cruise Terminal direkt am Embarcadero. Die nächste BART-Station ist Embarcadero, 12 Minuten Fußweg am Wasser entlang.

## Tickets

Die Early-Bird-Plätze sind begrenzt und starten nächste Woche. Bestandskunden haben Vorrang - behalte also dein Postfach im Blick.

> Du kannst nicht vor Ort sein? Die Keynote wird live gestreamt, die Aufzeichnungen findest du noch am selben Abend hier.`},"demo-news-2":{title:`Das ist im April erschienen`,excerpt:`Drei neue Automatisierungs-Trigger und eine deutlich schnellere Posteingangs-Suche.`,body:`<p>Der April war ein großer Monat. Hier ist alles, was erschienen ist, auf einen Blick:</p>
<table>
<thead><tr><th>Bereich</th><th>Was sich geändert hat</th><th>Warum es wichtig ist</th></tr></thead>
<tbody>
<tr><td>Posteingangs-Suche</td><td>Sofortige Ergebnisse während der Eingabe</td><td>50.000 Unterhaltungen, unter 100 ms</td></tr>
<tr><td>Automatisierung</td><td>Drei neue Trigger</td><td>Warenkorb abgebrochen, Seite erneut besucht, ruhiger Besucher</td></tr>
<tr><td>Editor</td><td>Entwurf übersteht einen Tab-Wechsel</td><td>Keine verlorenen halb getippten Antworten mehr</td></tr>
<tr><td>Dunkelmodus</td><td>Kein weißes Aufblitzen beim ersten Rendern</td><td>Sauberer Start auf dunklen Seiten</td></tr>
</tbody>
</table>
<p>So sieht die neue Suche in Aktion aus - die Ergebnisse erscheinen, bevor du zu Ende getippt hast:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Posteingangs-Suche mit sofortigen Ergebnissen" />
<p>Tippe auf das Bild, um es genauer anzusehen. Hast du einen Wunsch? Antworte einfach hier - wir lesen jede Nachricht.</p>`},"demo-news-3":{title:`Gaia spricht jetzt 28 Sprachen`,excerpt:`Die Sprache des Besuchers automatisch erkennen oder fest vorgeben. Ohne zusätzliche Einrichtung.`,body:`<p>Gaia antwortet jetzt in 28 Sprachen, automatisch anhand der ersten Nachricht des Besuchers erkannt. Die häufigsten Fragen dazu:</p>
<details><summary>Wie funktioniert die Spracherkennung?</summary><p>Gaia liest die erste Nachricht und antwortet in derselben Sprache. Gibt es deine Hilfeartikel in dieser Sprache, zitiert Gaia sie; andernfalls antwortet sie anhand des ähnlichsten Artikels und weist dich auf die Lücke hin.</p></details>
<details><summary>Kann ich eine einzelne Sprache festlegen?</summary><p>Ja. Lege sie unter <strong>Einstellungen → KI → Sprache</strong> fest, und Gaia bleibt dabei, egal was der Besucher schreibt.</p></details>
<details><summary>Was sehen die Operatoren?</summary><p>Die Transkripte bleiben in der Sprache deines Teams, die Originalnachricht wird neben der Übersetzung gespeichert.</p></details>
<p>Ein kurzer Blick darauf, wie Gaia mitten im Verlauf die Sprache wechselt:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia antwortet in mehreren Sprachen" />`},"demo-news-4":{title:`Unterhaltungen direkt nach Slack leiten`,excerpt:`Verbinde einen beliebigen eingehenden Webhook mit einem Slack-Kanal. Ohne Glue-Code.`,body:`## In zwei Klicks verbunden

Gehe zu **Integrationen → Slack**, klicke auf *Verbinden* und bestätige die Berechtigungen. Wähle den Kanal, in dem neue Unterhaltungen landen sollen - die meisten Teams nutzen \`#support\`.

## Das bekommst du

- Eine Slack-Nachricht, sobald ein Chat beginnt, mit Link zurück zum Posteingang.
- Operator-Antworten als Thread unter der ursprünglichen Nachricht.
- Antworte direkt in Slack, und wir senden es in Echtzeit an den Besucher zurück.

## Auch Webhooks

Du sendest bereits Ereignisse aus deinen eigenen Systemen? Richte einen beliebigen Webhook auf deinen Slack-Kanal und spare dir die individuelle Integration.`},"demo-news-5":{title:`Posteingang 2.0: Triage ohne Maus`,excerpt:`Neue Tastenkürzel zum Zuweisen, Zurückstellen und Erledigen - alles per Tastatur.`,body:`<p>Der Posteingang 2.0 ist auf die Tastatur ausgelegt. Hier der Spickzettel, gruppiert nach Tätigkeit:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Navigieren</div><ul><li><code>j</code> / <code>k</code> - nächste / vorherige Unterhaltung</li><li><code>g</code> dann <code>i</code> - zum Posteingang springen</li></ul></div>
<div data-type="tab"><div data-tab-label>Handeln</div><ul><li><code>e</code> - erledigen</li><li><code>a</code> - mir zuweisen</li><li><code>s</code> - zurückstellen</li></ul></div>
<div data-type="tab"><div data-tab-label>Verfassen</div><ul><li><code>Cmd+Enter</code> - senden</li><li><code>/</code> - gespeicherte Antworten</li><li><code>Cmd+K</code> - Befehlspalette</li></ul></div>
</div>
<p>Der neu gestaltete Posteingang - alles in Reichweite einer Taste:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="Der neu gestaltete, tastaturorientierte Posteingang" />`},"demo-news-6":{title:`Datenexport und Löschung in Eigenregie`,excerpt:`Datenanfragen von Besuchern mit einem Klick bearbeiten. DSGVO-tauglich ab Werk.`,body:`## Export

Klicke im Profil eines Besuchers auf **Daten exportieren**, um ein JSON-Paket mit allen Nachrichten, Ereignissen und Attributen zu erzeugen, die wir zu ihm gespeichert haben. Der Download startet sofort, und die Anfrage wird für deine Unterlagen protokolliert.

## Löschen

**Daten löschen** entfernt den Besucher und bereinigt seine Nachrichten im Posteingang, in der Suche und in jedem verbundenen CRM über dieselbe Webhook-Brücke. Die Aktion wird protokolliert und ist unwiderruflich.

## Für deinen Datenschutzbeauftragten

- Jeder Export und jede Löschung wird mit Zeitstempel und Urheber festgehalten.
- Aufbewahrungsfristen sind pro Workspace konfigurierbar.
- Ein Auftragsverarbeitungsvertrag ist auf Anfrage erhältlich.`},"demo-news-7":{title:`Mobile-SDK-Beta: iOS und Android`,excerpt:`Bringe dieselbe Unterhaltung in deine native App. Beta-Plätze jetzt verfügbar.`,body:`## Eine Unterhaltung, jede Oberfläche

Ein Besucher, der auf deiner Website einen Chat beginnt, kann ihn in deiner App angemeldet und mit vollständigem Verlauf fortsetzen. Dieselbe Gaia, dieselben Operatoren, derselbe Posteingang.

## Das steckt in der Beta

- Nativer Launcher für SwiftUI und Jetpack Compose.
- Push-Benachrichtigungen bei neuen Antworten.
- Offline-Warteschlange, damit Nachrichten gesendet werden, sobald die Verbindung zurück ist.

## Mitmachen

Wir nehmen jede Woche eine Handvoll Teams auf. Antworte hier mit deiner Plattform und deinen ungefähren monatlich aktiven Nutzern, dann schicken wir dir einen Schlüssel.

> Beta heißt: Ecken und Kanten. Wir liefern wöchentlich Fixes und lesen jeden Fehlerbericht.`},"demo-news-8":{title:`Sieh, welche KI-Antworten wirklich geholfen haben`,excerpt:`Verfolge, ob jede Gaia-Antwort zu einer Lösung, einer Übergabe oder einem Abbruch geführt hat.`,body:`## Die neue Ansicht

**Analysen → KI-Ergebnisse** schlüsselt jede Gaia-Antwort danach auf, was danach geschah:

- **Gelöst** - der Besucher hat bekommen, was er brauchte, und ist zufrieden gegangen.
- **Übergeben** - Gaia hat die Unterhaltung an einen Menschen weitergegeben.
- **Abgebrochen** - der Besucher hat das Widget geschlossen, ohne dass das Anliegen gelöst wurde.

## Einblick pro Artikel

Öffne einen beliebigen Hilfeartikel und sieh, wie oft Gaia ihn zitiert und ob diese Zitate zur Lösung führen. Eine niedrige Lösungsquote bei einem viel besuchten Artikel bedeutet meist, dass der Inhalt überarbeitet werden muss, nicht die KI.

## Handeln

Sortiere nach Abbruchquote, um die Fragen zu finden, mit denen Gaia die meisten Probleme hat, und schließe die Lücke dann mit einem Flow oder einem präziseren Artikel.`},tags:{events:`Events`,product:`Produkt`,release:`Release`,ai:`KI`,languages:`Sprachen`,integrations:`Integrationen`,slack:`Slack`,inbox:`Posteingang`,privacy:`Datenschutz`,security:`Sicherheit`,mobile:`Mobil`,beta:`Beta`,analytics:`Analysen`},categories:{company:`Unternehmen`,product:`Produkt`,engineering:`Entwicklung`}},n={categories:{"demo-cat-getting-started":{title:`Erste Schritte`,description:`Installiere das Widget und richte deine erste Unterhaltung ein.`},"demo-cat-automation":{title:`Automatisierung`,description:`Flows, Trigger und die KI-Autoantwort.`},"demo-cat-integrations":{title:`Integrationen`,description:`Verbinde dein CRM, Slack und CMS.`},"demo-cat-billing":{title:`Abrechnung & Tarife`,description:`Preisstufen, Rechnungen und Platzverwaltung.`}},articles:{"demo-article-install":{title:`Das Wexio-Widget auf deiner Website installieren`,excerpt:`Ein 30-Sekunden-Snippet, das du vor dem schließenden </body>-Tag einfügst.`,body:`## Das Loader-Skript hinzufügen

Füge dieses Snippet auf jeder Seite ein, auf der das Widget erscheinen soll:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

Der Loader fügt unten rechts einen schwebenden Launcher ein. Klicke darauf, um das Chat-Panel zu öffnen.

## Die Installation prüfen

- Rufe eine Seite auf, die das Snippet enthält.
- Öffne die Browser-Konsole.
- Du solltest \`[wexio] widget mounted\` sehen.

## Das Aussehen anpassen

Das Widget übernimmt die Markenfarben aus deinem Dashboard. Ändere sie unter **Einstellungen → Marke**.

> Brauchst du Hilfe? Tippe unten auf "Noch Fragen? Schreib uns", und wir gehen es gemeinsam durch.`},"demo-article-flows":{title:`Deinen ersten Automatisierungs-Flow erstellen`,excerpt:`Per Drag-and-drop einen Willkommens-Bot in unter fünf Minuten live schalten.`,body:`## Was ist ein Flow?

Ein Flow ist ein kleiner Baum aus Unterhaltungsschritten - Fragen, Antworten und Bedingungen -, der immer dann läuft, wenn ein Besucher zu einem Trigger passt.

## Drei Trigger-Typen

1. **Besucher hat das Widget geöffnet** - begrüße Erstbesucher.
2. **Besucher hat eine Frage gestellt** - Gaia (KI) versucht zu antworten; wenn sie nicht kann, übernimmt der Flow.
3. **Webhook empfangen** - dein CMS oder deine E-Commerce-Plattform sendet ein Ereignis; der Flow startet im richtigen Chat.

## Best Practices

- Halte erste Antworten unter 80 Zeichen.
- Biete 2-3 Quick-Reply-Chips an statt einer Freitextfrage.
- Biete immer einen Ausweg an - *"Mit einem Menschen sprechen"*.`},"demo-article-slack":{title:`Chats an Slack weiterleiten`,excerpt:`Spiegle jede neue Unterhaltung in einen Slack-Kanal deiner Wahl.`,body:`## Workspace verbinden

Klicke unter **Integrationen → Slack** auf *Verbinden*. Du wirst zum OAuth-Bildschirm von Slack weitergeleitet - bestätige die angeforderten Berechtigungen (\`chat:write\`, \`channels:read\`).

## Kanal auswählen

Wähle nach der Autorisierung den Zielkanal (oder erstelle einen neuen, z. B. \`#support\`).

## Was weitergeleitet wird

- Die erste Nachricht, mit einem Deeplink zurück zum wexio-Posteingang.
- Operator-Antworten als Thread-Nachrichten.
- Antworten von Besuchern in Echtzeit über die SSE-Brücke.

## Die Gegenrichtung

Operatoren können *aus* Slack antworten - wexio lauscht auf Antworten in Slack-Threads und sendet sie zurück ins Widget.`},"demo-article-billing":{title:`Tarif und Rechnungsdaten aktualisieren`,excerpt:`Tarif wechseln, Karte ändern oder Rechnungen herunterladen.`,body:`## Tarife

- **Free** - 1 Widget, Grundfunktionen, Badge "Powered by Wexio".
- **Standard** - unbegrenzte Widgets, Automatisierungen, Integrationen.
- **Enterprise** - White-Label, SLA, persönlicher Support.

## Tarif wechseln

**Einstellungen → Abrechnung → Tarif wechseln**. Upgrades gelten sofort; Downgrades greifen zum Ende des laufenden Abrechnungszeitraums.

## Rechnungen

Lade jede Rechnung als PDF unter **Abrechnung → Verlauf** herunter. Bei jeder Verlängerung senden wir dir außerdem eine Kopie per E-Mail.`},"demo-article-theme":{title:`Das Widget-Design anpassen`,excerpt:`Passe das Widget an deine Marke an - Farben, Rundungen, Dunkelmodus.`,body:`## Markenfarben

Lege unter **Einstellungen → Marke** fest:

- **Primär** - bestimmt Launcher, Senden-Button und Fokusrahmen.
- **Hintergrund** - die Panel-Fläche (hell) und das Gegenstück für den Dunkelmodus.

## Rundungen

Wähle zwischen \`sm\`, \`md\` und \`lg\` für einen klareren oder weicheren Look. Die Änderung gilt sofort für jedes Widget auf jeder Seite.

## Dunkelmodus

Standard = der Systemeinstellung des Besuchers folgen. Stelle auf **immer hell** oder **immer dunkel**, wenn deine Website selbst keinen Dunkelmodus unterstützt.`},"demo-article-handoff":{title:`Von Gaia an einen menschlichen Operator übergeben`,excerpt:`Wenn die KI nicht reicht - leite den Besucher an einen Kollegen weiter.`,body:`## Auslöser

Gaia übergibt automatisch, wenn:

- der Besucher *"mit einem Menschen sprechen"* schreibt (oder eine lokalisierte Variante davon).
- dieselbe Frage zweimal ohne Lösung gestellt wird.
- die Absicht des Besuchers zu einer Routing-Regel passt (z. B. Abrechnung → Finanzteam).

## Routing

Richte unter **Routing → Regeln** ein, bestimmte Anliegen an bestimmte Teams oder Operatoren zu leiten. Round-Robin und Least-Loaded werden beide unterstützt.

## Außerhalb der Geschäftszeiten

Ist kein Operator online, bietet Gaia ein Rückruf- oder E-Mail-Übergabeformular an, statt so zu tun, als wäre jemand erreichbar.`},"demo-article-crm":{title:`Unterhaltungen mit deinem CRM synchronisieren`,excerpt:`Übertrage jeden Chat nach HubSpot, Salesforce oder Pipedrive.`,body:`## Unterstützte CRMs

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (API-Token)
- Individuell über Webhooks

## Was synchronisiert wird

- Neue Unterhaltungen erstellen einen Kontakt (falls noch nicht vorhanden) und eine Notiz.
- Operator-Antworten werden an die Kontakt-Timeline angehängt.
- In wexio vergebene Tags werden im CRM gespiegelt.

## In beide Richtungen

Im CRM hinzugefügte Operator-Notizen können über den Webhook-Empfänger zurück nach wexio gelangen - siehe *Integrationen → Webhooks → Eingehend*.`},"demo-article-shortcuts":{title:`Tastenkürzel für Operatoren`,excerpt:`Doppelt so schnell sortieren - ganz ohne Maus.`,body:"## Navigation im Posteingang\n\n- `j` / `k` - nächste / vorherige Unterhaltung\n- `e` - erledigen\n- `a` - mir zuweisen\n- `s` - zurückstellen\n\n## Editor\n\n- `Cmd+Enter` - senden\n- `/` - Auswahl gespeicherter Antworten öffnen\n- `Cmd+K` - Befehlspalette (alles)\n\n## Tipp\n\nFahre im Dashboard über eine beliebige Schaltfläche - der Tooltip zeigt das passende Tastenkürzel."}},tags:{setup:`Einrichtung`,install:`Installation`,automation:`Automatisierung`,flows:`Flows`,integrations:`Integrationen`,slack:`Slack`,billing:`Abrechnung`,plans:`Tarife`,design:`Design`,ai:`KI`,crm:`CRM`,productivity:`Produktivität`,inbox:`Posteingang`}},r={visitorName:`Du`,messages:{"m-demo-1":{text:`Hallo 👋 Ich bin Gaia, die Wexio-KI. Wobei kann ich dir helfen?`,ageLabel:`9:41`,buttons:[`Wie funktioniert die Preisgestaltung?`,`Was kann es?`,`Mit einem Menschen sprechen`]},"m-demo-2":{text:`Kannst du mir zeigen, wie das Widget aussieht?`,ageLabel:`9:41`},"m-demo-3":{text:``,ageLabel:`9:42`,mediaAlts:[`Produkt-Screenshot`]},"m-demo-4":{text:``,ageLabel:`9:42`,mediaAlts:[`Sich drehender Globus`]},"m-demo-5":{text:`Super! 😄 Hier ein paar Eindrücke von unserem Team.`,ageLabel:`9:43`},"m-demo-6":{text:`Ein paar Dashboard-Highlights`,ageLabel:`9:43`,mediaAlts:[`Dashboard-Übersicht`,`Analysen`,`Posteingang`,`Berichte`]},"m-demo-7":{text:``,ageLabel:`9:44`,mediaAlts:[`Kurze Einführung`]},"m-demo-8":{text:``,ageLabel:`9:44`,mediaAlts:[`Sprachnachricht`]},"m-demo-9":{text:``,ageLabel:`9:45`,mediaAlts:[`Leitfaden für den Einstieg`]},"m-demo-9b":{text:``,ageLabel:`9:45`,mediaAlts:[`Wexio-Integrationen`]},"m-demo-10":{text:`Bereit, es selbst auszuprobieren?`,ageLabel:`9:45`,buttons:[`Sandbox öffnen`,`Gespräch buchen`,`Weiter chatten`]}}},i={messengerDescription:`Unser Team hilft Ihnen ebenfalls gern`,messengerMessage:`Hallo 👋 Fragen Sie uns alles oder wählen Sie eine Schnellaktion.`},a={welcome:{system:`Du chattest jetzt mit Gaia, unserer KI-Assistentin.`,hint:`Tipp: Du kannst jederzeit eine Datei anhängen oder eine Sprachnachricht aufnehmen.`,greeting:`Hallo 👋 Ich bin Gaia, die Wexio-KI. Frag mich alles, oder wähle eine Schnellaktion zum Start.`},replies:{pricing:{text:`Wexio ist für ein Widget kostenlos; bezahlte Tarife starten bei 39 $/Monat und schalten Automatisierungen, Integrationen und White-Label frei.`,planBtn:`Tarifstufen anzeigen`,salesBtn:`Mit dem Vertrieb sprechen`},gaia:{text:`Gaia ist der KI-Agent, der Fragen von Besuchern sofort beantwortet. Sie lernt aus deinen Hilfeartikeln und übergibt an einen Menschen, wenn sie nicht weiterhelfen kann.`,handoffBtn:`Wie funktioniert die Übergabe?`},human:{text:`Natürlich - ich hole Alex aus dem Team dazu. Während der Geschäftszeiten meldet er sich innerhalb weniger Minuten.`},fallback:{text:`Verstanden - ich prüfe das kurz und melde mich gleich wieder.`},voice:{text:`Deine Sprachnachricht ist angekommen - ich sehe sie mir an und melde mich gleich.`}}},o={main:`Bereit, es selbst auszuprobieren?`,billing:`Danke! Ich habe deine Rechnungsfrage an das Abrechnungsteam weitergegeben.`,integrations:`Wie verbinde ich WhatsApp mit meinem Konto?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-tvX8XSZD.js.map