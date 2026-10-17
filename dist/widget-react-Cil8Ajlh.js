globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Hei 👋 Kiitos viestistäsi. Palaan asiaan pian…`,ageLabel:`4 t`},t={"demo-news-1":{title:`Pioneer 2026: merkitse päivä kalenteriin`,excerpt:`Palaamme San Franciscoon 8. lokakuuta. Ovet aukeavat klo 9, pääpuhe klo 10.`,body:`## Mitä odottaa

Tämän vuoden pääpuhe kertoo siitä, mitä olemme julkaisseet avoimesti ja mitä on tulossa. Live-demoja, ei kalvoja.

- **Gaian tiekartta** - minne tekoälymme on matkalla seuraavien kahden neljänneksen aikana.
- **Asiakastarinat** - kolme tiimiä kertoo, miten ne puolittivat ensimmäisen vastauksen ajan.
- **Käytännön työpajat** - ota kannettava mukaan ja rakenna flow insinöörimme kanssa.

## Perille pääsy

Tapahtumapaikka on Pier 27 Cruise Terminal heti Embarcaderon varrella. Lähin BART-asema on Embarcadero, 12 minuutin kävelymatka rantaa pitkin.

## Liput

Early bird -paikat ovat rajallisia ja avautuvat ensi viikolla. Nykyiset asiakkaat pääsevät ensin, joten pidä silmällä sähköpostiasi.

> Etkö pääse paikan päälle? Pääpuhe striimataan livenä, ja tallenteet ovat täällä samana iltana.`},"demo-news-2":{title:`Mitä huhtikuussa julkaistiin`,excerpt:`Kolme uutta automaatiolaukaisinta ja paljon nopeampi postilaatikon haku.`,body:`<p>Huhtikuu oli iso kuukausi. Tässä kaikki julkaistu yhdellä silmäyksellä:</p>
<table>
<thead><tr><th>Alue</th><th>Mikä muuttui</th><th>Miksi sillä on väliä</th></tr></thead>
<tbody>
<tr><td>Postilaatikon haku</td><td>Tulokset heti kirjoittaessa</td><td>50 000 keskustelua, alle 100 ms</td></tr>
<tr><td>Automaatio</td><td>Kolme uutta laukaisinta</td><td>Hylätty ostoskori, sivulle palattu, hiljainen kävijä</td></tr>
<tr><td>Editori</td><td>Luonnos säilyy välilehden vaihdossa</td><td>Ei enää menetettyjä puolivalmiita vastauksia</td></tr>
<tr><td>Tumma tila</td><td>Ei valkoista välähdystä ensimmäisessä piirrossa</td><td>Siistimpi lataus tummilla sivustoilla</td></tr>
</tbody>
</table>
<p>Tässä uusi haku toiminnassa - tulokset ilmestyvät ennen kuin ehdit kirjoittaa loppuun:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Postilaatikon haku palauttaa tulokset heti" />
<p>Napauta kuvaa nähdäksesi sen lähempää. Onko sinulla toive? Vastaa tähän - luemme jokaisen.</p>`},"demo-news-3":{title:`Gaia puhuu nyt 28 kieltä`,excerpt:`Tunnista kävijän kieli automaattisesti tai lukitse yksi kieli. Ei lisäasetuksia.`,body:`<p>Gaia vastaa nyt 28 kielellä, jotka tunnistetaan automaattisesti kävijän ensimmäisestä viestistä. Yleisimmät kysymykset:</p>
<details><summary>Miten kielentunnistus toimii?</summary><p>Gaia lukee ensimmäisen viestin ja vastaa samalla kielellä. Jos ohjeartikkelisi löytyvät kyseisellä kielellä, hän lainaa niitä; muuten hän vastaa lähimmän vastineen perusteella ja ilmoittaa sinulle puutteesta.</p></details>
<details><summary>Voinko pakottaa yhden kielen?</summary><p>Kyllä. Lukitse yksi kohdassa <strong>Asetukset → Tekoäly → Kieli</strong>, niin Gaia pitäytyy siinä riippumatta siitä, mitä kävijä kirjoittaa.</p></details>
<details><summary>Mitä operaattorit näkevät?</summary><p>Keskustelulokit pysyvät tiimisi kielellä, ja alkuperäinen viesti säilytetään käännöksen rinnalla.</p></details>
<p>Pieni kurkistus siihen, kun Gaia vaihtaa kieltä kesken ketjun:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia vastaa usealla kielellä" />`},"demo-news-4":{title:`Ohjaa keskustelut suoraan Slackiin`,excerpt:`Yhdistä mikä tahansa saapuva webhook Slack-kanavaan. Ei liimakoodia.`,body:`## Yhdistä kahdella klikkauksella

Siirry kohtaan **Integraatiot → Slack**, valitse *Yhdistä* ja hyväksy oikeudet. Valitse kanava, johon uudet keskustelut tulevat - useimmat tiimit käyttävät kanavaa \`#support\`.

## Mitä saat

- Slack-viesti heti kun chat alkaa, linkki takaisin postilaatikkoon mukana.
- Operaattorien vastaukset ketjuna alkuperäisen viestin alla.
- Vastaa suoraan Slackista, ja välitämme sen kävijälle reaaliajassa.

## Myös webhookit

Lähetätkö jo tapahtumia omista järjestelmistäsi? Osoita mikä tahansa webhook Slack-kanavaasi ja jätä räätälöity integraatio kokonaan väliin.`},"demo-news-5":{title:`Postilaatikko 2.0: lajittele ilman hiirtä`,excerpt:`Uudet pikanäppäimet osoittamiseen, torkuttamiseen ja ratkaisemiseen - kaikki näppäimistöltä.`,body:`<p>Postilaatikko 2.0 on suunniteltu näppäimistö edellä. Tässä huijauslappu tekemisen mukaan ryhmiteltynä:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Liiku</div><ul><li><code>j</code> / <code>k</code> - seuraava / edellinen keskustelu</li><li><code>g</code> sitten <code>i</code> - siirry postilaatikkoon</li></ul></div>
<div data-type="tab"><div data-tab-label>Toimi</div><ul><li><code>e</code> - ratkaise</li><li><code>a</code> - osoita minulle</li><li><code>s</code> - torkuta</li></ul></div>
<div data-type="tab"><div data-tab-label>Kirjoita</div><ul><li><code>Cmd+Enter</code> - lähetä</li><li><code>/</code> - tallennetut vastaukset</li><li><code>Cmd+K</code> - komentopaletti</li></ul></div>
</div>
<p>Uudistettu postilaatikko - kaikki yhden näppäimen päässä:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="Uudistettu, näppäimistökeskeinen postilaatikko" />`},"demo-news-6":{title:`Tietojen vienti ja poisto itsepalveluna`,excerpt:`Hoida kävijöiden tietopyynnöt yhdellä klikkauksella. GDPR-valmis heti alusta.`,body:`## Vienti

Valitse minkä tahansa kävijän profiilissa **Vie tiedot**, niin luodaan JSON-paketti kaikista viesteistä, tapahtumista ja ominaisuuksista, joita hänestä säilytämme. Lataus alkaa heti, ja pyyntö kirjataan lokiin tietojesi tueksi.

## Poisto

**Poista tiedot** poistaa kävijän ja siivoaa hänen viestinsä postilaatikosta, hausta ja kaikista yhdistetyistä CRM-järjestelmistä saman webhook-sillan kautta. Toiminto kirjataan lokiin, eikä sitä voi perua.

## Tietosuojavastaavallesi

- Jokainen vienti ja poisto aikaleimataan ja yhdistetään tekijään.
- Säilytysajat ovat määritettävissä työtilakohtaisesti.
- Tietojenkäsittelysopimus on saatavilla pyynnöstä.`},"demo-news-7":{title:`Mobiili-SDK beta: iOS ja Android`,excerpt:`Tuo sama keskustelu natiivisovellukseesi. Beta-paikat ovat nyt auki.`,body:`## Yksi keskustelu, jokainen kanava

Verkkosivustollasi chatin aloittanut kävijä voi jatkaa sitä sovelluksessasi kirjautuneena ja koko historian kanssa. Sama Gaia, samat operaattorit, sama postilaatikko.

## Mitä betassa on

- Natiivi launcher SwiftUI:lle ja Jetpack Composelle.
- Push-ilmoitukset uusista vastauksista.
- Offline-jono, jotta viestit lähtevät, kun yhteys palaa.

## Liity mukaan

Otamme mukaan kourallisen tiimejä joka viikko. Vastaa tähän kertomalla alustasi ja arviosi kuukausittaisista aktiivisista käyttäjistä, niin lähetämme sinulle avaimen.

> Beta tarkoittaa rosoisuutta. Julkaisemme korjauksia viikoittain ja luemme jokaisen virheraportin.`},"demo-news-8":{title:`Näe, mitkä tekoälyn vastaukset todella toimivat`,excerpt:`Seuraa, johtiko jokainen Gaian vastaus ratkaisuun, luovutukseen vai poistumiseen.`,body:`## Uusi näkymä

**Analytiikka → Tekoälyn tulokset** erittelee jokaisen Gaian vastauksen sen mukaan, mitä seuraavaksi tapahtui:

- **Ratkaistu** - kävijä sai tarvitsemansa ja lähti tyytyväisenä.
- **Luovutettu** - Gaia siirsi keskustelun ihmiselle.
- **Poistui** - kävijä sulki widgetin ilman ratkaisua.

## Artikkelikohtainen tarkastelu

Avaa mikä tahansa ohjeartikkeli nähdäksesi, kuinka usein Gaia lainaa sitä ja johtavatko lainaukset ratkaisuun. Matala ratkaisuprosentti paljon liikennettä saavassa artikkelissa tarkoittaa yleensä, että sisältö kaipaa uudelleenkirjoitusta, ei tekoäly.

## Toimi sen mukaan

Lajittele poistumisprosentin mukaan löytääksesi kysymykset, joiden kanssa Gaia kamppailee eniten, ja lisää sitten flow tai tarkempi artikkeli aukon umpeen kuromiseksi.`},tags:{events:`Tapahtumat`,product:`Tuote`,release:`Julkaisu`,ai:`Tekoäly`,languages:`Kielet`,integrations:`Integraatiot`,slack:`Slack`,inbox:`Postilaatikko`,privacy:`Yksityisyys`,security:`Turvallisuus`,mobile:`Mobiili`,beta:`Beta`,analytics:`Analytiikka`},categories:{company:`Yritys`,product:`Tuote`,engineering:`Kehitys`}},n={categories:{"demo-cat-getting-started":{title:`Aloitus`,description:`Asenna widget ja määritä ensimmäinen keskustelusi.`},"demo-cat-automation":{title:`Automaatio`,description:`Flowt, laukaisimet ja tekoälyn automaattivastaus.`},"demo-cat-integrations":{title:`Integraatiot`,description:`Yhdistä CRM, Slack ja CMS.`},"demo-cat-billing":{title:`Laskutus ja paketit`,description:`Hintatasot, laskut ja paikkojen hallinta.`}},articles:{"demo-article-install":{title:`Asenna Wexio-widget sivustollesi`,excerpt:`30 sekunnin koodinpätkä, jonka liität ennen päättävää </body>-tunnistetta.`,body:`## Lisää latausskripti

Liitä tämä koodinpätkä jokaiselle sivulle, jolla haluat widgetin näkyvän:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

Lataaja lisää kelluvan launcherin oikeaan alakulmaan. Avaa chat-paneeli napsauttamalla sitä.

## Varmista asennus

- Avaa sivu, joka sisältää koodinpätkän.
- Avaa selaimen konsoli.
- Sinun pitäisi nähdä \`[wexio] widget mounted\`.

## Muokkaa ulkoasua

Widget lukee brändivärit hallintapaneelistasi. Päivitä ne kohdassa **Asetukset → Brändi**.

> Tarvitsetko apua? Napauta alta "Tarvitsetko vielä apua? Lähetä viesti", niin opastamme sinut läpi.`},"demo-article-flows":{title:`Rakenna ensimmäinen automaatioflow`,excerpt:`Vedä, pudota ja julkaise tervetulobotti alle viidessä minuutissa.`,body:`## Mikä on flow?

Flow on pieni puu keskusteluvaiheita - kysymyksiä, vastauksia ja ehtoja - joka suoritetaan aina, kun kävijä täyttää laukaisimen ehdot.

## Kolme laukaisintyyppiä

1. **Kävijä avasi widgetin** - tervehdi ensikertalaisia.
2. **Kävijä esitti kysymyksen** - Gaia (tekoäly) yrittää vastata; jos ei onnistu, flow ottaa vallan.
3. **Webhook vastaanotettu** - CMS tai verkkokauppa-alustasi lähettää tapahtuman; flow käynnistyy oikeassa chatissa.

## Parhaat käytännöt

- Pidä ensimmäiset vastaukset alle 80 merkin pituisina.
- Tarjoa 2-3 pikavastauspainiketta vapaan tekstin kysymyksen sijaan.
- Tarjoa aina uloskäynti - *"Puhu ihmisen kanssa"*.`},"demo-article-slack":{title:`Välitä chatit Slackiin`,excerpt:`Peilaa jokainen uusi keskustelu valitsemaasi Slack-kanavaan.`,body:`## Yhdistä työtilasi

Valitse kohdassa **Integraatiot → Slack** *Yhdistä*. Sinut ohjataan Slackin OAuth-näkymään - hyväksy pyydetyt oikeudet (\`chat:write\`, \`channels:read\`).

## Valitse kanava

Valtuutuksen jälkeen valitse kohdekanava (tai luo uusi, esimerkiksi \`#support\`).

## Mitä välitetään

- Avausviesti, jossa on suora linkki takaisin wexio-postilaatikkoon.
- Operaattorien vastaukset ketjuviesteinä.
- Kävijöiden vastaukset reaaliajassa SSE-sillan kautta.

## Päinvastainen suunta

Operaattorit voivat vastata *Slackista* - wexio kuuntelee Slack-ketjujen vastauksia ja lähettää ne takaisin widgetiin.`},"demo-article-billing":{title:`Päivitä pakettisi ja laskutustietosi`,excerpt:`Vaihda pakettia, vaihda korttia tai lataa laskuja.`,body:`## Paketit

- **Free** - 1 widget, perusominaisuudet, "Powered by Wexio" -merkki.
- **Standard** - rajattomat widgetit, automaatiot, integraatiot.
- **Enterprise** - white-label, SLA, oma tuki.

## Vaihda pakettia

**Asetukset → Laskutus → Vaihda pakettia**. Päivitykset tulevat voimaan heti; paketin alennukset nykyisen jakson päättyessä.

## Laskut

Lataa jokainen lasku PDF-tiedostona kohdasta **Laskutus → Historia**. Lähetämme myös kopion sähköpostitse jokaisen uusiutumisen yhteydessä.`},"demo-article-theme":{title:`Muokkaa widgetin teemaa`,excerpt:`Sovita widget brändiisi - värit, pyöristykset, tumma tila.`,body:`## Brändivärit

Määritä kohdassa **Asetukset → Brändi**:

- **Pääväri** - ohjaa launcheria, lähetyspainiketta ja kohdistusrenkaita.
- **Tausta** - paneelin pinta (vaalea) ja tumman tilan pari.

## Pyöristykset

Valitse \`sm\`, \`md\` tai \`lg\` terävämpään tai pehmeämpään ilmeeseen. Muutos tulee voimaan reaaliajassa jokaiseen widgetiin jokaisella sivulla.

## Tumma tila

Oletus = noudata kävijän järjestelmäasetusta. Lukitse **aina vaalea** tai **aina tumma**, jos sivustosi ei itse tue tummaa tilaa.`},"demo-article-handoff":{title:`Luovuta Gaialta ihmisoperaattorille`,excerpt:`Kun tekoäly ei riitä - ohjaa kävijä tiimikaverille.`,body:`## Laukaisimet

Gaia luovuttaa automaattisesti, kun:

- Kävijä kirjoittaa *"puhu ihmisen kanssa"* (tai jonkin lokalisoidun variantin).
- Sama kysymys esitetään kahdesti ilman ratkaisua.
- Kävijän aikomus vastaa reititystä (esim. laskutus → talousosasto).

## Reititys

Määritä **Reititys → Säännöt** ohjataksesi tietyt aikomukset tietyille tiimeille tai operaattoreille. Sekä round-robin että vähiten kuormitettu -tapa ovat tuettuja.

## Työajan ulkopuolella

Jos yksikään operaattori ei ole paikalla, Gaia tarjoaa takaisinsoitto- tai sähköpostiluovutuslomakkeen sen sijaan, että teeskentelisi jonkun olevan tavoitettavissa.`},"demo-article-crm":{title:`Synkronoi keskustelut CRM-järjestelmääsi`,excerpt:`Vie jokainen chat HubSpotiin, Salesforceen tai Pipedriveen.`,body:`## Tuetut CRM-järjestelmät

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (API-tunniste)
- Mukautettu webhookien kautta

## Mitä synkronoidaan

- Uudet keskustelut luovat yhteystiedon (ellei sitä jo ole) ja muistiinpanon.
- Operaattorien vastaukset lisätään yhteystiedon aikajanalle.
- Wexiossa lisätyt tunnisteet peilautuvat CRM:ään.

## Kaksisuuntaisesti

CRM:ssä lisätyt operaattorin muistiinpanot voidaan palauttaa wexioon webhook-vastaanottimen kautta - katso *Integraatiot → Webhookit → Saapuvat*.`},"demo-article-shortcuts":{title:`Operaattorin pikanäppäimet`,excerpt:`Lajittele kaksi kertaa nopeammin - ilman hiirtä.`,body:"## Postilaatikon selaus\n\n- `j` / `k` - seuraava / edellinen keskustelu\n- `e` - ratkaise\n- `a` - osoita minulle\n- `s` - torkuta\n\n## Editori\n\n- `Cmd+Enter` - lähetä\n- `/` - avaa tallennettujen vastausten valitsin\n- `Cmd+K` - komentopaletti (kaikki)\n\n## Vinkki\n\nVie osoitin minkä tahansa hallintapaneelin painikkeen päälle - työkaluvihje näyttää sen pikanäppäimen."}},tags:{setup:`Käyttöönotto`,install:`Asennus`,automation:`Automaatio`,flows:`Flowt`,integrations:`Integraatiot`,slack:`Slack`,billing:`Laskutus`,plans:`Paketit`,design:`Suunnittelu`,ai:`Tekoäly`,crm:`CRM`,productivity:`Tuottavuus`,inbox:`Postilaatikko`}},r={visitorName:`Sinä`,messages:{"m-demo-1":{text:`Hei 👋 Olen Gaia, Wexion tekoäly. Miten voin auttaa?`,ageLabel:`9:41`,buttons:[`Miten hinnoittelu toimii?`,`Mitä se osaa?`,`Puhu ihmisen kanssa`]},"m-demo-2":{text:`Voitko näyttää, miltä widget näyttää?`,ageLabel:`9:41`},"m-demo-3":{text:``,ageLabel:`9:42`,mediaAlts:[`Tuotteen kuvakaappaus`]},"m-demo-4":{text:``,ageLabel:`9:42`,mediaAlts:[`Pyörivä maapallo`]},"m-demo-5":{text:`Hienoa! 😄 Tässä muutama näkymä tiimiltämme.`,ageLabel:`9:43`},"m-demo-6":{text:`Muutama kohokohta hallintapaneelista`,ageLabel:`9:43`,mediaAlts:[`Hallintapaneelin yleiskatsaus`,`Analytiikka`,`Postilaatikko`,`Raportit`]},"m-demo-7":{text:``,ageLabel:`9:44`,mediaAlts:[`Pikaesittely`]},"m-demo-8":{text:``,ageLabel:`9:44`,mediaAlts:[`Ääniviesti`]},"m-demo-9":{text:``,ageLabel:`9:45`,mediaAlts:[`Aloitusopas`]},"m-demo-9b":{text:``,ageLabel:`9:45`,mediaAlts:[`Wexio-integraatiot`]},"m-demo-10":{text:`Valmis kokeilemaan itse?`,ageLabel:`9:45`,buttons:[`Avaa hiekkalaatikko`,`Varaa puhelu`,`Jatka chattailua`]}}},i={messengerDescription:`Myös tiimimme voi auttaa`,messengerMessage:`Hei 👋 Kysy meiltä mitä tahansa tai valitse pikatoiminto.`},a={welcome:{system:`Keskustelet nyt Gaian, tekoälyavustajamme, kanssa.`,hint:`Vinkki: voit liittää tiedoston tai nauhoittaa ääniviestin milloin tahansa.`,greeting:`Hei 👋 Olen Gaia, Wexion tekoäly. Kysy mitä tahansa tai valitse pikatoiminto aloittaaksesi.`},replies:{pricing:{text:`Wexio on ilmainen yhdelle widgetille; maksulliset paketit alkavat hintaan 39 $/kk ja avaavat automaatiot, integraatiot ja white-labelin.`,planBtn:`Näytä pakettitasot`,salesBtn:`Puhu myynnin kanssa`},gaia:{text:`Gaia on tekoälyagentti, joka vastaa kävijöiden kysymyksiin heti. Hän oppii ohjeartikkeleistasi ja luovuttaa ihmiselle, kun ei pysty auttamaan.`,handoffBtn:`Miten luovutus toimii?`},human:{text:`Totta kai - pyydän Alexin tiimistä mukaan. Hän vastaa muutamassa minuutissa työaikana.`},fallback:{text:`Selvä - tarkistan asian ja palaan hetken kuluttua.`},voice:{text:`Sain ääniviestisi - tarkistan asian ja palaan pian.`}}},o={main:`Valmis kokeilemaan itse?`,billing:`Kiitos! Välitin laskukysymyksesi laskutustiimille.`,integrations:`Miten yhdistän WhatsAppin tiliini?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-Cil8Ajlh.js.map