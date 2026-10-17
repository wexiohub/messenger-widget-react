globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Merhaba 👋 Bize ulaştığınız için teşekkürler. Kısa sürede size dönüş yapacağım…`,ageLabel:`4 sa`},t={"demo-news-1":{title:`Pioneer 2026: tarihi ajandanıza yazın`,excerpt:`8 Ekim'de yeniden San Francisco'dayız. Kapılar 09.00'da açılıyor, ana konuşma 10.00'da.`,body:`## Neler sizi bekliyor

Bu yılki ana konuşma, açık biçimde yayınladıklarımız ve sırada olanlarla ilgili. Slayt değil, canlı demolar.

- **Gaia yol haritası** - yapay zekamızın önümüzdeki iki çeyrekte nereye gittiği.
- **Müşteri hikayeleri** - üç ekip ilk yanıt süresini nasıl yarıya indirdiğini anlatıyor.
- **Uygulamalı atölyeler** - dizüstü bilgisayarınızı getirin, mühendislerimizle birlikte bir akış oluşturun.

## Nasıl gidilir

Etkinlik yeri, Embarcadero'nun hemen kıyısındaki Pier 27 Cruise Terminal. En yakın BART durağı Embarcadero; sahil boyunca 12 dakikalık yürüyüş.

## Biletler

Erken kayıt koltukları sınırlı ve gelecek hafta satışa çıkıyor. Mevcut müşteriler öncelikli, bu yüzden gelen kutunuzu takip edin.

> Yüz yüze katılamıyor musunuz? Ana konuşma canlı yayınlanır, kayıtlar aynı akşam burada olur.`},"demo-news-2":{title:`Nisan ayında neler yayınladık`,excerpt:`Üç yeni otomasyon tetikleyicisi ve çok daha hızlı gelen kutusu araması.`,body:`<p>Nisan yoğun bir aydı. Yayınladığımız her şey bir bakışta:</p>
<table>
<thead><tr><th>Alan</th><th>Ne değişti</th><th>Neden önemli</th></tr></thead>
<tbody>
<tr><td>Gelen kutusu araması</td><td>Yazarken anında sonuçlar</td><td>50 bin görüşme, 100 ms'nin altında</td></tr>
<tr><td>Otomasyon</td><td>Üç yeni tetikleyici</td><td>Terk edilen sepet, yeniden ziyaret edilen sayfa, sessiz ziyaretçi</td></tr>
<tr><td>Yanıt alanı</td><td>Taslak sekme değişse de korunuyor</td><td>Yarım yazılmış yanıtlar artık kaybolmuyor</td></tr>
<tr><td>Koyu mod</td><td>İlk açılışta beyaz parlama yok</td><td>Koyu sitelerde daha temiz yükleme</td></tr>
</tbody>
</table>
<p>İşte yeni arama iş başında - siz yazmayı bitirmeden sonuçlar geliyor:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Sonuçları anında getiren gelen kutusu araması" />
<p>Daha yakından bakmak için görsele dokunun. Bir isteğiniz mi var? Buraya yanıt verin - hepsini okuyoruz.</p>`},"demo-news-3":{title:`Gaia artık 28 dil konuşuyor`,excerpt:`Ziyaretçinin dilini otomatik algılayın veya tek bir dili sabitleyin. Ek kurulum yok.`,body:`<p>Gaia artık ziyaretçinin ilk mesajından otomatik olarak algılanan 28 dilde yanıt veriyor. En sık duyduğumuz sorular:</p>
<details><summary>Dil algılama nasıl çalışır?</summary><p>Gaia ilk mesajı okur ve aynı dilde yanıt verir. Yardım makaleleriniz o dilde varsa onlara atıfta bulunur; yoksa en yakın eşleşmeden yanıtlar ve boşluğu size bildirir.</p></details>
<details><summary>Tek bir dili zorunlu kılabilir miyim?</summary><p>Evet. <strong>Ayarlar → Yapay Zeka → Dil</strong> bölümünden birini sabitleyin; ziyaretçi ne yazarsa yazsın Gaia o dile bağlı kalır.</p></details>
<details><summary>Operatörler ne görür?</summary><p>Dökümler ekibinizin dilinde kalır; orijinal mesaj çevirinin yanında saklanır.</p></details>
<p>Gaia'nın bir yazışmanın ortasında dil değiştirmesine kısa bir bakış:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia'nın birden fazla dilde yanıt vermesi" />`},"demo-news-4":{title:`Görüşmeleri doğrudan Slack'e aktarın`,excerpt:`Herhangi bir gelen webhook'u bir Slack kanalına bağlayın. Ara kod yok.`,body:`## İki tıkla bağlayın

**Entegrasyonlar → Slack**'e gidin, *Bağlan*'a basın ve izinleri onaylayın. Yeni görüşmelerin düşeceği kanalı seçin - çoğu ekip \`#support\` kullanıyor.

## Neler elde edersiniz

- Bir sohbet başladığı anda Slack'te, gelen kutusuna bağlantı içeren bir mesaj.
- Operatör yanıtları, orijinal mesajın altında iş parçacığı olarak.
- Doğrudan Slack'ten yanıtlayın, biz de ziyaretçiye gerçek zamanlı iletelim.

## Webhook'lar da var

Kendi sistemlerinizden zaten olay mı gönderiyorsunuz? Herhangi bir webhook'u Slack kanalınıza yönlendirin ve özel entegrasyonu tamamen atlayın.`},"demo-news-5":{title:`Inbox 2.0: fareye dokunmadan sınıflandırma`,excerpt:`Atama, erteleme ve çözme için yeni kısayollar - hepsi klavyeden.`,body:`<p>Inbox 2.0 önce klavye diyor. Yaptığınız işe göre gruplanmış kopya kâğıdı:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Gezinme</div><ul><li><code>j</code> / <code>k</code> - sonraki / önceki görüşme</li><li><code>g</code> sonra <code>i</code> - gelen kutusuna git</li></ul></div>
<div data-type="tab"><div data-tab-label>İşlem</div><ul><li><code>e</code> - çöz</li><li><code>a</code> - bana ata</li><li><code>s</code> - ertele</li></ul></div>
<div data-type="tab"><div data-tab-label>Yazma</div><ul><li><code>Cmd+Enter</code> - gönder</li><li><code>/</code> - kayıtlı yanıtlar</li><li><code>Cmd+K</code> - komut paleti</li></ul></div>
</div>
<p>Yeniden tasarlanan gelen kutusu - her şey bir tuş uzağınızda:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="Klavye öncelikli olarak yeniden tasarlanan gelen kutusu" />`},"demo-news-6":{title:`Kendi kendine veri dışa aktarma ve silme`,excerpt:`Ziyaretçi veri taleplerini tek tıkla yönetin. KVKK ve GDPR'ye kutudan çıktığı gibi hazır.`,body:`## Dışa aktarma

Herhangi bir ziyaretçinin profilinden **Verileri dışa aktar**'a basarak, onlarla ilgili elimizdeki tüm mesajları, olayları ve nitelikleri içeren bir JSON paketi oluşturun. Anında iner ve talep kayıtlarınız için günlüğe işlenir.

## Silme

**Verileri sil**, ziyaretçiyi kaldırır ve mesajlarını gelen kutusundan, aramadan ve aynı webhook köprüsü üzerinden bağlı tüm CRM'lerden temizler. İşlem günlüğe kaydedilir ve geri alınamaz.

## Veri sorumlunuz için

- Her dışa aktarma ve silme işlemi zaman damgalı ve sorumlusu belirtilmiş olarak kaydedilir.
- Saklama süreleri çalışma alanı bazında yapılandırılabilir.
- Talep üzerine bir veri işleme sözleşmesi sunulur.`},"demo-news-7":{title:`Mobil SDK beta: iOS ve Android`,excerpt:`Aynı görüşmeyi yerel uygulamanıza taşıyın. Beta kontenjanları şimdi açık.`,body:`## Tek görüşme, her yüzey

Web sitenizde sohbet başlatan bir ziyaretçi, oturum açmış halde ve tüm geçmişiyle bunu uygulamanızda sürdürebilir. Aynı Gaia, aynı operatörler, aynı gelen kutusu.

## Beta'da neler var

- SwiftUI ve Jetpack Compose için yerel başlatıcı.
- Yeni yanıtlar için anlık bildirimler.
- Çevrimdışı kuyruk; bağlantı geri geldiğinde mesajlar gönderilir.

## Katılın

Her hafta birkaç ekibi sürece dahil ediyoruz. Buraya platformunuzu ve yaklaşık aylık aktif kullanıcı sayınızı yazın, size bir anahtar gönderelim.

> Beta, pürüzler demek. Her hafta düzeltme yayınlıyor ve her hata raporunu okuyoruz.`},"demo-news-8":{title:`Hangi yapay zeka yanıtlarının gerçekten işe yaradığını görün`,excerpt:`Her Gaia yanıtının çözüme, devre veya terke yol açıp açmadığını takip edin.`,body:`## Yeni görünüm

**Analitik → Yapay zeka sonuçları**, her Gaia yanıtını sonrasında olanlara göre ayırır:

- **Çözüldü** - ziyaretçi ihtiyacını karşıladı ve memnun ayrıldı.
- **Devredildi** - Gaia görüşmeyi bir insana aktardı.
- **Terk edildi** - ziyaretçi sorunu çözülmeden widget'ı kapattı.

## Makale bazında içgörü

Bir yardım makalesine inerek Gaia'nın ona ne sıklıkla atıfta bulunduğunu ve bu atıfların çözümle sonuçlanıp sonuçlanmadığını görün. Yüksek trafikli bir makalede çözüm oranının düşük olması genellikle yapay zekanın değil, içeriğin yeniden yazılması gerektiği anlamına gelir.

## Harekete geçin

Gaia'nın en çok zorlandığı soruları bulmak için terk oranına göre sıralayın, sonra boşluğu kapatmak için bir akış ya da daha net bir makale ekleyin.`},tags:{events:`Etkinlikler`,product:`Ürün`,release:`Sürüm`,ai:`Yapay Zeka`,languages:`Diller`,integrations:`Entegrasyonlar`,slack:`Slack`,inbox:`Gelen Kutusu`,privacy:`Gizlilik`,security:`Güvenlik`,mobile:`Mobil`,beta:`Beta`,analytics:`Analitik`},categories:{company:`Şirket`,product:`Ürün`,engineering:`Mühendislik`}},n={categories:{"demo-cat-getting-started":{title:`Başlarken`,description:`Widget'ı kurun ve ilk görüşmenizi yapılandırın.`},"demo-cat-automation":{title:`Otomasyon`,description:`Akışlar, tetikleyiciler ve yapay zeka otomatik yanıtı.`},"demo-cat-integrations":{title:`Entegrasyonlar`,description:`CRM'inizi, Slack'i ve CMS'inizi bağlayın.`},"demo-cat-billing":{title:`Faturalama ve planlar`,description:`Fiyat kademeleri, faturalar ve koltuk yönetimi.`}},articles:{"demo-article-install":{title:`Wexio widget'ını sitenize kurun`,excerpt:`Kapanış </body> etiketinden önce yapıştıracağınız 30 saniyelik bir kod parçası.`,body:`## Yükleyici betiğini ekleyin

Widget'ın görünmesini istediğiniz her sayfaya bu kod parçasını yapıştırın:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

Yükleyici, sağ alt köşeye yüzen bir başlatıcı ekler. Sohbet panelini açmak için ona tıklayın.

## Kurulumu doğrulayın

- Kod parçasını içeren bir sayfayı ziyaret edin.
- Tarayıcı konsolunu açın.
- \`[wexio] widget mounted\` yazısını görmelisiniz.

## Görünümü özelleştirin

Widget, marka renklerini kontrol panelinizden okur. Bunları **Ayarlar → Marka** bölümünden güncelleyin.

> Yardıma mı ihtiyacınız var? Aşağıdaki "Hâlâ yardıma mı ihtiyacınız var? Bize yazın" seçeneğine dokunun, size adım adım yol gösterelim.`},"demo-article-flows":{title:`İlk otomasyon akışınızı oluşturun`,excerpt:`Sürükleyin, bırakın ve beş dakikadan kısa sürede bir karşılama botu yayınlayın.`,body:`## Akış nedir?

Akış, bir ziyaretçi bir tetikleyiciyle eşleştiğinde çalışan, soru, yanıt ve koşullardan oluşan küçük bir görüşme adımları ağacıdır.

## Üç tetikleyici türü

1. **Ziyaretçi widget'ı açtı** - ilk kez gelenleri karşılayın.
2. **Ziyaretçi bir soru sordu** - Gaia (yapay zeka) yanıtlamaya çalışır; yapamazsa akış devralır.
3. **Webhook alındı** - CMS'iniz veya e-ticaret platformunuz bir olay gönderir; akış doğru sohbette başlar.

## En iyi uygulamalar

- İlk yanıtları 80 karakterin altında tutun.
- Serbest metin sorusu yerine 2-3 hızlı yanıt düğmesi sunun.
- Her zaman bir çıkış yolu verin - *"Bir insanla konuş"*.`},"demo-article-slack":{title:`Sohbetleri Slack'e iletin`,excerpt:`Her yeni görüşmeyi seçtiğiniz bir Slack kanalına yansıtın.`,body:`## Çalışma alanınızı bağlayın

**Entegrasyonlar → Slack** bölümünde *Bağlan*'a tıklayın. Slack'in OAuth ekranına yönlendirilirsiniz - istenen izinleri (\`chat:write\`, \`channels:read\`) onaylayın.

## Bir kanal seçin

Yetkilendirdikten sonra hedef kanalı seçin (veya \`#support\` gibi yeni bir kanal oluşturun).

## Nelerin iletildiği

- İlk mesaj ve wexio gelen kutusuna giden bir derin bağlantı.
- Operatör yanıtları iş parçacığı mesajları olarak.
- Ziyaretçi yanıtları SSE köprüsü üzerinden gerçek zamanlı.

## Ters yön

Operatörler Slack'*ten* yanıt verebilir - wexio, Slack iş parçacığı yanıtlarını dinler ve widget'a geri gönderir.`},"demo-article-billing":{title:`Planınızı ve fatura bilgilerinizi güncelleyin`,excerpt:`Kademe değiştirin, kartı değiştirin veya faturaları indirin.`,body:`## Planlar

- **Free** - 1 widget, temel özellikler, "Powered by Wexio" rozeti.
- **Standard** - sınırsız widget, otomasyonlar, entegrasyonlar.
- **Enterprise** - white-label, SLA, özel destek.

## Planı değiştirin

**Ayarlar → Faturalama → Planı değiştir**. Yükseltmeler hemen geçerli olur; düşürmeler mevcut dönemin sonunda uygulanır.

## Faturalar

Her faturayı **Faturalama → Geçmiş** bölümünden PDF olarak indirin. Her yenilemede ayrıca e-postayla bir kopya da gönderiyoruz.`},"demo-article-theme":{title:`Widget temasını özelleştirin`,excerpt:`Widget'ı markanıza uydurun - renkler, köşe yuvarlaklığı, koyu mod.`,body:`## Marka renkleri

**Ayarlar → Marka** bölümünde şunları belirleyin:

- **Birincil** - başlatıcıyı, gönder düğmesini ve odak halkalarını belirler.
- **Arka plan** - panel yüzeyi (açık) ve koyu moddaki karşılığı.

## Köşe yuvarlaklığı

Daha keskin ya da daha yumuşak bir görünüm için \`sm\`, \`md\`, \`lg\` arasından seçin. Değişiklik her sayfadaki tüm widget'lara anında yansır.

## Koyu mod

Varsayılan = ziyaretçinin sistem tercihini izle. Sitenizin kendisi koyu modu desteklemiyorsa **her zaman açık** veya **her zaman koyu** olarak sabitleyin.`},"demo-article-handoff":{title:`Gaia'dan bir insan operatöre devir`,excerpt:`Yapay zeka yetmediğinde - ziyaretçiyi bir ekip arkadaşına yönlendirin.`,body:`## Tetikleyiciler

Gaia şu durumlarda otomatik olarak devreder:

- Ziyaretçi *"bir insanla konuşmak istiyorum"* yazdığında (veya yerelleştirilmiş herhangi bir karşılığını).
- Aynı soru çözülmeden iki kez sorulduğunda.
- Ziyaretçinin niyeti bir yönlendirme kuralıyla eşleştiğinde (ör., faturalama → finans ekibi).

## Yönlendirme

Belirli niyetleri belirli ekiplere veya operatörlere yönlendirmek için **Yönlendirme → Kurallar**'ı ayarlayın. Hem round-robin hem de en az yüklü seçeneği desteklenir.

## Mesai dışı

Hiçbir operatör çevrimiçi değilse Gaia, müsait biri varmış gibi davranmak yerine bir geri arama ya da e-posta devri formu sunar.`},"demo-article-crm":{title:`Görüşmeleri CRM'inizle senkronize edin`,excerpt:`Her sohbeti HubSpot, Salesforce veya Pipedrive'a aktarın.`,body:`## Desteklenen CRM'ler

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (API belirteci)
- Webhook'lar üzerinden özel

## Nelerin senkronize edildiği

- Yeni görüşmeler (henüz yoksa) bir kişi ve bir not oluşturur.
- Operatör yanıtları kişinin zaman çizelgesine eklenir.
- wexio'da uygulanan etiketler CRM'e yansır.

## İki yönlü

CRM'e eklenen operatör notları, webhook alıcısı üzerinden wexio'ya geri gönderilebilir - bkz. *Entegrasyonlar → Webhook'lar → Gelen*.`},"demo-article-shortcuts":{title:`Operatörler için klavye kısayolları`,excerpt:`İki kat hızlı sınıflandırın - fare gerekmez.`,body:"## Gelen kutusunda gezinme\n\n- `j` / `k` - sonraki / önceki görüşme\n- `e` - çöz\n- `a` - bana ata\n- `s` - ertele\n\n## Yanıt alanı\n\n- `Cmd+Enter` - gönder\n- `/` - kayıtlı yanıt seçiciyi aç\n- `Cmd+K` - komut paleti (her şey)\n\n## İpucu\n\nKontrol panelindeki herhangi bir düğmenin üzerine gelin - ipucu kutusu kısayolunu gösterir."}},tags:{setup:`Kurulum`,install:`Yükleme`,automation:`Otomasyon`,flows:`Akışlar`,integrations:`Entegrasyonlar`,slack:`Slack`,billing:`Faturalama`,plans:`Planlar`,design:`Tasarım`,ai:`Yapay Zeka`,crm:`CRM`,productivity:`Verimlilik`,inbox:`Gelen Kutusu`}},r={visitorName:`Siz`,messages:{"m-demo-1":{text:`Merhaba 👋 Ben Gaia, Wexio'nun yapay zekasıyım. Size nasıl yardımcı olabilirim?`,ageLabel:`09:41`,buttons:[`Fiyatlandırma nasıl işliyor?`,`Neler yapabilir?`,`Bir insanla konuş`]},"m-demo-2":{text:`Widget'ın nasıl göründüğünü gösterebilir misin?`,ageLabel:`09:41`},"m-demo-3":{text:``,ageLabel:`09:42`,mediaAlts:[`Ürün ekran görüntüsü`]},"m-demo-4":{text:``,ageLabel:`09:42`,mediaAlts:[`Dönen yerküre`]},"m-demo-5":{text:`Harika! 😄 İşte ekibimizden birkaç görünüm.`,ageLabel:`09:43`},"m-demo-6":{text:`Kontrol panelinden birkaç öne çıkan görünüm`,ageLabel:`09:43`,mediaAlts:[`Kontrol paneli genel bakış`,`Analitik`,`Gelen kutusu`,`Raporlar`]},"m-demo-7":{text:``,ageLabel:`09:44`,mediaAlts:[`Hızlı tanıtım`]},"m-demo-8":{text:``,ageLabel:`09:44`,mediaAlts:[`Sesli mesaj`]},"m-demo-9":{text:``,ageLabel:`09:45`,mediaAlts:[`Başlangıç kılavuzu`]},"m-demo-9b":{text:``,ageLabel:`09:45`,mediaAlts:[`Wexio entegrasyonları`]},"m-demo-10":{text:`Kendiniz denemeye hazır mısınız?`,ageLabel:`09:45`,buttons:[`Sandbox'ı aç`,`Görüşme ayarla`,`Sohbete devam et`]}}},i={messengerDescription:`Ekibimiz de yardımcı olabilir`,messengerMessage:`Merhaba 👋 Bize istediğinizi sorun ya da hızlı bir eylem seçin.`},a={welcome:{system:`Şu anda yapay zeka asistanımız Gaia ile sohbet ediyorsunuz.`,hint:`İpucu: istediğiniz zaman bir dosya ekleyebilir veya sesli mesaj kaydedebilirsiniz.`,greeting:`Merhaba 👋 Ben Gaia, Wexio'nun yapay zekasıyım. Bana istediğinizi sorun ya da başlamak için hızlı bir eylem seçin.`},replies:{pricing:{text:`Wexio bir widget için ücretsizdir; ücretli planlar ayda $39'dan başlar ve otomasyonların, entegrasyonların ve white-label'ın kilidini açar.`,planBtn:`Plan kademelerini göster`,salesBtn:`Satışla konuş`},gaia:{text:`Gaia, ziyaretçi sorularını anında yanıtlayan yapay zeka asistanıdır. Yardım makalelerinizden öğrenir ve yardımcı olamadığında bir insana devreder.`,handoffBtn:`Devir nasıl çalışıyor?`},human:{text:`Elbette - ekipten Alex'i devreye alıyorum. Mesai saatlerinde birkaç dakika içinde yanıt verecektir.`},fallback:{text:`Anladım - bunu kontrol edip birazdan size dönüş yapacağım.`},voice:{text:`Sesli mesajınızı aldım - kontrol edip size döneceğim.`}}},o={main:`Kendiniz denemeye hazır mısınız?`,billing:`Teşekkürler! Fatura sorunuzu faturalama ekibine ilettim.`,integrations:`WhatsApp'ı hesabıma nasıl bağlarım?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-C1vTza-V2.js.map