globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Ciao 👋 Grazie per averci scritto. Ti rispondo a breve…`,ageLabel:`4h`},t={"demo-news-1":{title:`Pioneer 2026: segna la data`,excerpt:`Torniamo a San Francisco l'8 ottobre. Apertura porte alle 9, keynote alle 10.`,body:`## Cosa aspettarsi

La keynote di quest'anno è tutta incentrata su ciò che abbiamo rilasciato in modo aperto e su ciò che arriverà. Demo dal vivo, non slide.

- **La roadmap di Gaia** - dove andrà la nostra AI nei prossimi due trimestri.
- **Storie dei clienti** - tre team raccontano come hanno dimezzato il tempo di prima risposta.
- **Laboratori pratici** - porta un laptop e costruisci un flusso con i nostri ingegneri.

## Come arrivare

La sede è il Pier 27 Cruise Terminal, proprio sull'Embarcadero. La fermata BART più vicina è Embarcadero, a 12 minuti a piedi lungo il mare.

## Biglietti

I posti early-bird sono limitati e saranno disponibili la prossima settimana. I clienti esistenti hanno la precedenza, quindi tieni d'occhio la tua casella di posta.

> Non puoi venire di persona? La keynote è in diretta streaming e le registrazioni arrivano qui la sera stessa.`},"demo-news-2":{title:`Le novità di aprile`,excerpt:`Tre nuovi trigger di automazione e una ricerca nella inbox molto più veloce.`,body:`<p>Aprile è stato un mese importante. Ecco tutte le novità in breve:</p>
<table>
<thead><tr><th>Area</th><th>Cosa è cambiato</th><th>Perché è importante</th></tr></thead>
<tbody>
<tr><td>Ricerca nella inbox</td><td>Risultati istantanei mentre scrivi</td><td>50k conversazioni, meno di 100 ms</td></tr>
<tr><td>Automazione</td><td>Tre nuovi trigger</td><td>Carrello abbandonato, pagina rivisitata, visitatore silenzioso</td></tr>
<tr><td>Editor di risposta</td><td>La bozza sopravvive al cambio di scheda</td><td>Niente più risposte scritte a metà perse</td></tr>
<tr><td>Modalità scura</td><td>Nessun lampo bianco al primo rendering</td><td>Caricamento più pulito sui siti scuri</td></tr>
</tbody>
</table>
<p>Ecco la nuova ricerca in azione - i risultati arrivano prima che tu finisca di scrivere:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="La ricerca nella inbox restituisce i risultati all'istante" />
<p>Tocca l'immagine per vederla da vicino. Hai una richiesta? Rispondi qui - le leggiamo tutte.</p>`},"demo-news-3":{title:`Gaia ora parla 28 lingue`,excerpt:`Rileva automaticamente la lingua del visitatore o fissane una. Nessuna configurazione extra.`,body:`<p>Gaia ora risponde in 28 lingue, rilevate automaticamente dal primo messaggio del visitatore. Le domande che sentiamo più spesso:</p>
<details><summary>Come funziona il rilevamento della lingua?</summary><p>Gaia legge il messaggio iniziale e risponde nella stessa lingua. Se i tuoi articoli di aiuto esistono in quella lingua li cita; altrimenti risponde dalla corrispondenza più vicina e ti segnala la lacuna.</p></details>
<details><summary>Posso forzare una sola lingua?</summary><p>Sì. Fissane una in <strong>Impostazioni → AI → Lingua</strong> e Gaia la mantiene qualunque cosa scriva il visitatore.</p></details>
<details><summary>Cosa vedono gli operatori?</summary><p>Le trascrizioni restano nella lingua del tuo team, con il messaggio originale conservato accanto alla traduzione.</p></details>
<p>Uno sguardo veloce a Gaia che cambia lingua a metà conversazione:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia che risponde in diverse lingue" />`},"demo-news-4":{title:`Porta le conversazioni direttamente su Slack`,excerpt:`Collega qualsiasi webhook in entrata a un canale Slack. Nessun codice di raccordo.`,body:`## Collega in due clic

Vai su **Integrazioni → Slack**, premi *Connetti* e approva i permessi. Scegli il canale in cui devono arrivare le nuove conversazioni - la maggior parte dei team usa \`#support\`.

## Cosa ottieni

- Un messaggio Slack nel momento in cui inizia una chat, con un link alla inbox.
- Le risposte degli operatori organizzate in thread sotto il messaggio originale.
- Rispondi direttamente da Slack e noi lo inviamo al visitatore in tempo reale.

## Anche webhook

Invii già eventi dai tuoi sistemi? Punta qualsiasi webhook al tuo canale Slack e salta del tutto l'integrazione personalizzata.`},"demo-news-5":{title:`Inbox 2.0: smista senza il mouse`,excerpt:`Nuove scorciatoie per assegnare, rimandare e risolvere - tutto da tastiera.`,body:`<p>Inbox 2.0 è pensata per la tastiera. Ecco il promemoria, raggruppato per quello che stai facendo:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Navigare</div><ul><li><code>j</code> / <code>k</code> - conversazione successiva / precedente</li><li><code>g</code> poi <code>i</code> - vai alla inbox</li></ul></div>
<div data-type="tab"><div data-tab-label>Agire</div><ul><li><code>e</code> - risolvi</li><li><code>a</code> - assegna a me</li><li><code>s</code> - rimanda</li></ul></div>
<div data-type="tab"><div data-tab-label>Scrivere</div><ul><li><code>Cmd+Enter</code> - invia</li><li><code>/</code> - risposte salvate</li><li><code>Cmd+K</code> - palette dei comandi</li></ul></div>
</div>
<p>La inbox ridisegnata - tutto a portata di tasto:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="La inbox ridisegnata, pensata per la tastiera" />`},"demo-news-6":{title:`Esportazione ed eliminazione dei dati in autonomia`,excerpt:`Gestisci le richieste di dati dei visitatori con un clic. Pronto per il GDPR fin da subito.`,body:`## Esporta

Dal profilo di qualsiasi visitatore, premi **Esporta dati** per generare un pacchetto JSON con ogni messaggio, evento e attributo che conserviamo su di lui. Si scarica subito e registra la richiesta per i tuoi archivi.

## Elimina

**Elimina dati** rimuove il visitatore e cancella i suoi messaggi dalla inbox, dalla ricerca e da qualsiasi CRM collegato tramite lo stesso ponte webhook. L'azione viene registrata ed è irreversibile.

## Per il tuo DPO

- Ogni esportazione ed eliminazione ha data e ora e un autore.
- I periodi di conservazione sono configurabili per workspace.
- Un accordo sul trattamento dei dati è disponibile su richiesta.`},"demo-news-7":{title:`Beta dell'SDK mobile: iOS e Android`,excerpt:`Porta la stessa conversazione nella tua app nativa. Posti beta aperti ora.`,body:`## Una conversazione, ogni superficie

Un visitatore che avvia una chat sul tuo sito può riprenderla nella tua app, con l'accesso effettuato e la cronologia completa. Stessa Gaia, stessi operatori, stessa inbox.

## Cosa include la beta

- Launcher nativo per SwiftUI e Jetpack Compose.
- Notifiche push per le nuove risposte.
- Coda offline, così i messaggi partono quando torna la connessione.

## Partecipa

Ogni settimana inseriamo un piccolo gruppo di team. Rispondi qui con la tua piattaforma e gli utenti attivi mensili approssimativi e ti invieremo una chiave.

> Beta significa qualche asperità. Rilasciamo correzioni ogni settimana e leggiamo ogni segnalazione di bug.`},"demo-news-8":{title:`Scopri quali risposte dell'AI hanno funzionato davvero`,excerpt:`Monitora se ogni risposta di Gaia ha portato a una risoluzione, a un passaggio a un operatore o a un abbandono.`,body:`## La nuova vista

**Analytics → Esiti dell'AI** suddivide ogni risposta di Gaia in base a ciò che è successo dopo:

- **Risolto** - il visitatore ha ottenuto ciò che gli serviva ed è uscito soddisfatto.
- **Passato a un operatore** - Gaia ha passato la conversazione a una persona.
- **Abbandonato** - il visitatore ha chiuso il widget senza risolvere.

## Approfondimento per articolo

Entra in qualsiasi articolo di aiuto per vedere quanto spesso Gaia lo cita e se quelle citazioni risolvono. Una bassa risoluzione su un articolo molto visitato di solito significa che il contenuto va riscritto, non l'AI.

## Agisci di conseguenza

Ordina per tasso di abbandono per trovare le domande su cui Gaia fatica di più, poi aggiungi un flusso o un articolo più mirato per colmare la lacuna.`},tags:{events:`Eventi`,product:`Prodotto`,release:`Rilascio`,ai:`AI`,languages:`Lingue`,integrations:`Integrazioni`,slack:`Slack`,inbox:`Inbox`,privacy:`Privacy`,security:`Sicurezza`,mobile:`Mobile`,beta:`Beta`,analytics:`Analytics`},categories:{company:`Azienda`,product:`Prodotto`,engineering:`Ingegneria`}},n={categories:{"demo-cat-getting-started":{title:`Per iniziare`,description:`Installa il widget e configura la tua prima conversazione.`},"demo-cat-automation":{title:`Automazione`,description:`Flussi, trigger e risposta automatica dell'AI.`},"demo-cat-integrations":{title:`Integrazioni`,description:`Collega il tuo CRM, Slack e CMS.`},"demo-cat-billing":{title:`Fatturazione e piani`,description:`Livelli di prezzo, fatture e gestione dei posti.`}},articles:{"demo-article-install":{title:`Installa il widget Wexio sul tuo sito`,excerpt:`Uno snippet da 30 secondi da incollare prima del tag di chiusura </body>.`,body:`## Aggiungi lo script loader

Incolla questo snippet in ogni pagina in cui vuoi che il widget appaia:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

Il loader inserisce un launcher flottante nell'angolo in basso a destra. Fai clic per aprire il pannello della chat.

## Verifica l'installazione

- Visita una pagina che include lo snippet.
- Apri la console del browser.
- Dovresti vedere \`[wexio] widget mounted\`.

## Personalizza l'aspetto

Il widget legge i colori del brand dalla tua dashboard. Aggiornali in **Impostazioni → Brand**.

> Serve una mano? Tocca "Hai ancora bisogno di aiuto? Scrivici" qui sotto e ti guideremo.`},"demo-article-flows":{title:`Crea il tuo primo flusso di automazione`,excerpt:`Trascina, rilascia e pubblica un bot di benvenuto in meno di cinque minuti.`,body:`## Che cos'è un flusso?

Un flusso è un piccolo albero di passaggi di conversazione - domande, risposte e condizioni - che si avvia ogni volta che un visitatore corrisponde a un trigger.

## Tre tipi di trigger

1. **Il visitatore ha aperto il widget** - dai il benvenuto a chi arriva per la prima volta.
2. **Il visitatore ha fatto una domanda** - Gaia (AI) prova a rispondere; se non ci riesce, subentra il flusso.
3. **Webhook ricevuto** - il tuo CMS o la piattaforma e-commerce invia un evento; il flusso parte nella chat giusta.

## Buone pratiche

- Mantieni le prime risposte sotto gli 80 caratteri.
- Offri 2-3 chip di risposta rapida, non una domanda a testo libero.
- Offri sempre una via d'uscita - *"Parla con una persona"*.`},"demo-article-slack":{title:`Inoltra le chat a Slack`,excerpt:`Replica ogni nuova conversazione in un canale Slack a tua scelta.`,body:`## Collega il tuo workspace

In **Integrazioni → Slack** fai clic su *Connetti*. Verrai reindirizzato alla schermata OAuth di Slack - approva i permessi richiesti (\`chat:write\`, \`channels:read\`).

## Scegli un canale

Dopo l'autorizzazione, scegli il canale di destinazione (o creane uno nuovo come \`#support\`).

## Cosa viene inoltrato

- Il messaggio iniziale, con un deeplink alla inbox di wexio.
- Le risposte degli operatori come messaggi in thread.
- Le risposte dei visitatori in tempo reale tramite il ponte SSE.

## Direzione inversa

Gli operatori possono rispondere *da* Slack - wexio ascolta le risposte ai thread di Slack e le invia al widget.`},"demo-article-billing":{title:`Aggiorna il tuo piano e i dati di fatturazione`,excerpt:`Cambia livello, cambia carta o scarica le fatture.`,body:`## Piani

- **Free** - 1 widget, funzioni di base, badge "Powered by Wexio".
- **Standard** - widget illimitati, automazioni, integrazioni.
- **Enterprise** - white-label, SLA, supporto dedicato.

## Cambia piano

**Impostazioni → Fatturazione → Cambia piano**. I passaggi a un piano superiore sono immediati; quelli a un piano inferiore si applicano alla fine del ciclo corrente.

## Fatture

Scarica ogni fattura in PDF da **Fatturazione → Cronologia**. Ne inviamo una copia anche via email a ogni rinnovo.`},"demo-article-theme":{title:`Personalizza il tema del widget`,excerpt:`Adatta il widget al tuo brand - colori, raggi, modalità scura.`,body:`## Colori del brand

In **Impostazioni → Brand**, imposta:

- **Primario** - guida il launcher, il pulsante di invio e gli anelli di focus.
- **Sfondo** - la superficie del pannello (chiara) e la coppia per la modalità scura.

## Raggi

Scegli tra \`sm\`, \`md\`, \`lg\` per un aspetto più netto o più morbido. La modifica si applica in tempo reale a ogni widget su ogni pagina.

## Modalità scura

Predefinito = segue la preferenza di sistema del visitatore. Imposta **sempre chiaro** o **sempre scuro** se il tuo sito non supporta la modalità scura.`},"demo-article-handoff":{title:`Passa da Gaia a un operatore umano`,excerpt:`Quando l'AI non basta - indirizza il visitatore a un collega.`,body:`## Trigger

Gaia passa la conversazione automaticamente quando:

- Il visitatore scrive *"voglio parlare con una persona"* (o una qualsiasi variante localizzata).
- La stessa domanda viene posta due volte senza risoluzione.
- L'intento del visitatore corrisponde a una regola di instradamento (ad es., fatturazione → team finanza).

## Instradamento

Configura **Instradamento → Regole** per indirizzare certi intenti a team o operatori specifici. Sono supportati sia round-robin sia il meno carico.

## Fuori orario

Se nessun operatore è online, Gaia offre un modulo di richiamata o di passaggio via email invece di far finta che qualcuno sia disponibile.`},"demo-article-crm":{title:`Sincronizza le conversazioni con il tuo CRM`,excerpt:`Invia ogni chat a HubSpot, Salesforce o Pipedrive.`,body:`## CRM supportati

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (token API)
- Personalizzato tramite webhook

## Cosa si sincronizza

- Le nuove conversazioni creano un contatto (se non già presente) e una nota.
- Le risposte degli operatori si aggiungono alla cronologia del contatto.
- I tag applicati in wexio vengono replicati nel CRM.

## Bidirezionale

Le note degli operatori aggiunte nel CRM possono tornare su wexio tramite il ricevitore webhook - vedi *Integrazioni → Webhook → In entrata*.`},"demo-article-shortcuts":{title:`Scorciatoie da tastiera per gli operatori`,excerpt:`Smista il doppio più in fretta - senza mouse.`,body:"## Navigazione nella inbox\n\n- `j` / `k` - conversazione successiva / precedente\n- `e` - risolvi\n- `a` - assegna a me\n- `s` - rimanda\n\n## Editor di risposta\n\n- `Cmd+Enter` - invia\n- `/` - apri il selettore delle risposte salvate\n- `Cmd+K` - palette dei comandi (tutto)\n\n## Suggerimento\n\nPassa il cursore su qualsiasi pulsante della dashboard - il tooltip mostra la sua scorciatoia."}},tags:{setup:`Configurazione`,install:`Installazione`,automation:`Automazione`,flows:`Flussi`,integrations:`Integrazioni`,slack:`Slack`,billing:`Fatturazione`,plans:`Piani`,design:`Design`,ai:`AI`,crm:`CRM`,productivity:`Produttività`,inbox:`Inbox`}},r={visitorName:`Tu`,messages:{"m-demo-1":{text:`Ciao 👋 Sono Gaia, l'AI di Wexio. Come posso aiutarti?`,ageLabel:`9:41`,buttons:[`Come funzionano i prezzi?`,`Cosa può fare?`,`Parla con una persona`]},"m-demo-2":{text:`Puoi mostrarmi che aspetto ha il widget?`,ageLabel:`9:41`},"m-demo-3":{text:``,ageLabel:`9:42`,mediaAlts:[`Screenshot del prodotto`]},"m-demo-4":{text:``,ageLabel:`9:42`,mediaAlts:[`Globo che gira`]},"m-demo-5":{text:`Bello! 😄 Ecco alcune immagini dal nostro team.`,ageLabel:`9:43`},"m-demo-6":{text:`Alcuni punti salienti della dashboard`,ageLabel:`9:43`,mediaAlts:[`Panoramica della dashboard`,`Analytics`,`Inbox`,`Report`]},"m-demo-7":{text:``,ageLabel:`9:44`,mediaAlts:[`Presentazione rapida`]},"m-demo-8":{text:``,ageLabel:`9:44`,mediaAlts:[`Messaggio vocale`]},"m-demo-9":{text:``,ageLabel:`9:45`,mediaAlts:[`Guida introduttiva`]},"m-demo-9b":{text:``,ageLabel:`9:45`,mediaAlts:[`Integrazioni Wexio`]},"m-demo-10":{text:`Pronto a provarlo di persona?`,ageLabel:`9:45`,buttons:[`Apri la sandbox`,`Prenota una chiamata`,`Continua a chattare`]}}},i={messengerDescription:`Anche il nostro team può aiutarti`,messengerMessage:`Ciao 👋 Chiedici qualsiasi cosa o scegli un'azione rapida.`},a={welcome:{system:`Ora stai chattando con Gaia, il nostro assistente AI.`,hint:`Suggerimento: allega un file o registra un messaggio vocale in qualsiasi momento.`,greeting:`Ciao 👋 Sono Gaia, l'AI di Wexio. Chiedimi pure qualsiasi cosa, oppure scegli un'azione rapida per iniziare.`},replies:{pricing:{text:`Wexio è gratuito per un widget; i piani a pagamento partono da $39/mese e sbloccano automazioni, integrazioni e white-label.`,planBtn:`Mostra i livelli di piano`,salesBtn:`Parla con le vendite`},gaia:{text:`Gaia è l'agente AI che risponde subito alle domande dei visitatori. Impara dai tuoi articoli di aiuto e passa la conversazione a una persona quando non può aiutare.`,handoffBtn:`Come funziona il passaggio a una persona?`},human:{text:`Certo - coinvolgo Alex del team. Risponderà entro pochi minuti durante l'orario di lavoro.`},fallback:{text:`Capito - controllo e ti rispondo tra un attimo.`},voice:{text:`Ho ricevuto il tuo messaggio vocale - controllo e ti rispondo.`}}},o={main:`Pronto a provarlo di persona?`,billing:`Grazie! Ho segnalato la tua domanda sulla fattura al team di fatturazione.`,integrations:`Come collego WhatsApp al mio account?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-C6OZyIh32.js.map