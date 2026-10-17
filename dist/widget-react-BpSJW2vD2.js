globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`你好 👋 感謝你與我們聯絡，我很快就會回覆你…`,ageLabel:`4 小時`},t={"demo-news-1":{title:`Pioneer 2026：請預留日期`,excerpt:`10 月 8 日，我們將回到舊金山。9 點開放入場，10 點開始主題演講。`,body:`## 活動亮點

今年的主題演講聚焦於我們公開發表的成果與接下來的規劃。現場示範，不放投影片。

- **Gaia 產品藍圖** - 我們的 AI 在未來兩個季度的發展方向。
- **客戶故事** - 三個團隊分享如何將首次回覆時間縮短一半。
- **實作工作坊** - 帶上筆電，與我們的工程師一起打造流程。

## 交通方式

會場位於 Embarcadero 海濱的 Pier 27 郵輪碼頭。最近的 BART 站是 Embarcadero，沿著水岸步行約 12 分鐘。

## 票券

早鳥席位有限，將於下週開賣。現有客戶可優先購買，請留意你的收件匣。

> 無法親自到場？主題演講將進行直播，錄影會在當天晚上上傳到這裡。`},"demo-news-2":{title:`四月推出的新功能`,excerpt:`三個全新的自動化觸發條件，以及快上許多的收件匣搜尋。`,body:`<p>四月是個忙碌的月份。以下是所有新推出的內容，一目了然：</p>
<table>
<thead><tr><th>項目</th><th>改變內容</th><th>為什麼重要</th></tr></thead>
<tbody>
<tr><td>收件匣搜尋</td><td>輸入時即時顯示結果</td><td>5 萬筆對話，不到 100 毫秒</td></tr>
<tr><td>自動化</td><td>三個新觸發條件</td><td>放棄購物車、重新造訪頁面、沉默的訪客</td></tr>
<tr><td>回覆編輯器</td><td>切換分頁後草稿仍會保留</td><td>不會再遺失打到一半的回覆</td></tr>
<tr><td>深色模式</td><td>首次顯示時不再閃白光</td><td>在深色網站上載入更順暢</td></tr>
</tbody>
</table>
<p>來看看新的搜尋實際運作 - 你還沒輸入完，結果就出現了：</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="收件匣搜尋即時顯示結果" />
<p>點一下圖片可以放大查看。有任何需求嗎？直接在這裡回覆 - 我們每一則都會讀。</p>`},"demo-news-3":{title:`Gaia 現在支援 28 種語言`,excerpt:`自動偵測訪客的語言，或固定使用某一種語言。無需額外設定。`,body:`<p>Gaia 現在能以 28 種語言回覆，並從訪客的第一則訊息自動偵測語言。以下是我們最常被問到的問題：</p>
<details><summary>語言偵測是如何運作的？</summary><p>Gaia 會讀取開場訊息，並用相同的語言回覆。如果你的說明文章有該語言的版本，Gaia 會引用；如果沒有，就會根據最接近的內容回答，並提醒你缺少的部分。</p></details>
<details><summary>可以強制只使用單一語言嗎？</summary><p>可以。在 <strong>設定 → AI → 語言</strong> 固定一種語言，不論訪客輸入什麼，Gaia 都會維持該語言。</p></details>
<details><summary>客服人員會看到什麼？</summary><p>對話紀錄會維持你團隊使用的語言，原始訊息也會與翻譯一起保留。</p></details>
<p>快速看看 Gaia 在對話中途切換語言的樣子：</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia 以多種語言回覆" />`},"demo-news-4":{title:`將對話直接導入 Slack`,excerpt:`將任何傳入的 webhook 連接到 Slack 頻道。不需要額外的串接程式碼。`,body:`## 兩下點擊就能連接

前往 **整合 → Slack**，按下 *連接*，並核准權限。選擇新對話要進入的頻道 - 大多數團隊使用 \`#support\`。

## 你會得到

- 聊天開始的當下，Slack 就會收到訊息，並附上返回收件匣的連結。
- 客服人員的回覆會以討論串形式排在原始訊息下方。
- 直接在 Slack 回覆，我們會即時轉發給訪客。

## 也支援 Webhook

已經從自己的系統推送事件了嗎？把任何 webhook 指向你的 Slack 頻道，就能完全省下自訂整合的工作。`},"demo-news-5":{title:`Inbox 2.0：不用滑鼠也能分流`,excerpt:`指派、稍後處理與解決的新快速鍵 - 全部用鍵盤完成。`,body:`<p>Inbox 2.0 以鍵盤為優先。以下是依操作分類的速查表：</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>瀏覽</div><ul><li><code>j</code> / <code>k</code> - 下一則 / 上一則對話</li><li><code>g</code> 然後 <code>i</code> - 跳到收件匣</li></ul></div>
<div data-type="tab"><div data-tab-label>操作</div><ul><li><code>e</code> - 解決</li><li><code>a</code> - 指派給我</li><li><code>s</code> - 稍後處理</li></ul></div>
<div data-type="tab"><div data-tab-label>撰寫</div><ul><li><code>Cmd+Enter</code> - 傳送</li><li><code>/</code> - 快速回覆</li><li><code>Cmd+K</code> - 指令面板</li></ul></div>
</div>
<p>重新設計的收件匣 - 一切都在指尖可及的範圍：</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="重新設計、以鍵盤為優先的收件匣" />`},"demo-news-6":{title:`自助式資料匯出與刪除`,excerpt:`一鍵處理訪客的資料請求。開箱即符合 GDPR。`,body:`## 匯出

在任何訪客的個人檔案中，按下 **匯出資料**，即可產生一份 JSON 檔案，包含我們保存的所有訊息、事件與屬性。檔案會立即下載，並將請求記錄下來供你備查。

## 刪除

**刪除資料** 會移除該訪客，並透過同一個 webhook 橋接，從收件匣、搜尋及所有已連接的 CRM 中清除其訊息。此操作會被記錄，且無法復原。

## 給你的資料保護長

- 每次匯出與刪除都有時間戳記與執行者。
- 保存期限可依每個工作區設定。
- 如有需要，可提供資料處理協議。`},"demo-news-7":{title:`行動 SDK 測試版：iOS 與 Android`,excerpt:`把同一段對話帶進你的原生應用程式。測試名額現已開放。`,body:`## 一段對話，任何介面

在你網站上開始聊天的訪客，可以在你的應用程式中繼續，已登入且保有完整紀錄。同一個 Gaia、同一批客服人員、同一個收件匣。

## 測試版內容

- 適用於 SwiftUI 與 Jetpack Compose 的原生啟動器。
- 新回覆的推播通知。
- 離線佇列，網路恢復時訊息就會送出。

## 加入我們

我們每週會讓幾個團隊加入。請在這裡回覆你的平台與大約的每月活躍使用者數，我們會寄給你一組金鑰。

> 測試版代表還有些粗糙之處。我們每週都會發布修正，也會閱讀每一份錯誤回報。`},"demo-news-8":{title:`看看哪些 AI 回答真正有效`,excerpt:`追蹤 Gaia 的每則回覆最後是解決問題、轉接真人，還是訪客離開。`,body:`## 全新檢視

**分析 → AI 成效** 會依據後續發生的情況，將 Gaia 的每則回覆分類：

- **已解決** - 訪客得到所需的答案，滿意地離開。
- **已轉接** - Gaia 將對話交給真人。
- **流失** - 訪客在問題未解決前就關閉了小工具。

## 各文章的洞察

點進任何說明文章，查看 Gaia 引用它的頻率，以及這些引用是否真的解決了問題。高流量文章的解決率偏低，通常代表內容需要改寫，而不是 AI 有問題。

## 付諸行動

依流失率排序，找出 Gaia 最吃力的問題，再新增一個流程或更精準的文章來補足缺口。`},tags:{events:`活動`,product:`產品`,release:`發布`,ai:`AI`,languages:`語言`,integrations:`整合`,slack:`Slack`,inbox:`收件匣`,privacy:`隱私`,security:`安全性`,mobile:`行動裝置`,beta:`測試版`,analytics:`分析`},categories:{company:`公司`,product:`產品`,engineering:`工程`}},n={categories:{"demo-cat-getting-started":{title:`快速入門`,description:`安裝小工具並設定你的第一段對話。`},"demo-cat-automation":{title:`自動化`,description:`流程、觸發條件與 AI 自動回覆。`},"demo-cat-integrations":{title:`整合`,description:`連接你的 CRM、Slack 與 CMS。`},"demo-cat-billing":{title:`帳務與方案`,description:`價格等級、發票與席位管理。`}},articles:{"demo-article-install":{title:`在你的網站上安裝 Wexio 小工具`,excerpt:`只要 30 秒，把一段程式碼貼在結尾 </body> 標籤之前即可。`,body:`## 加入載入器指令碼

將這段程式碼貼到每一個你想顯示小工具的頁面：

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

載入器會在右下角加入一個浮動的啟動按鈕。點一下即可開啟聊天面板。

## 確認安裝成功

- 造訪包含這段程式碼的頁面。
- 開啟瀏覽器主控台。
- 你應該會看到 \`[wexio] widget mounted\`。

## 自訂外觀

小工具會從你的儀表板讀取品牌色彩。請在 **設定 → 品牌** 中更新。

> 需要協助嗎？請點選下方的「還需要協助？傳訊息給我們」，我們會一步步帶你完成。`},"demo-article-flows":{title:`建立你的第一個自動化流程`,excerpt:`拖曳、放下，五分鐘內就能上線歡迎機器人。`,body:`## 什麼是流程？

流程是由對話步驟 - 問題、回覆與條件 - 組成的小型樹狀結構，每當訪客符合某個觸發條件時就會執行。

## 三種觸發條件

1. **訪客開啟了小工具** - 歡迎初次造訪的訪客。
2. **訪客提出問題** - Gaia（AI）會嘗試回答；若無法回答，就由流程接手。
3. **收到 Webhook** - 你的 CMS 或電商平台推送事件，流程便會在正確的聊天中啟動。

## 最佳做法

- 第一則回覆保持在 80 個字元以內。
- 提供 2-3 個快速回覆按鈕，而不是開放式的提問。
- 永遠提供退出途徑 - *「轉接真人」*。`},"demo-article-slack":{title:`將聊天轉發到 Slack`,excerpt:`將每一段新對話同步到你選擇的 Slack 頻道。`,body:`## 連接你的工作區

在 **整合 → Slack** 中點選 *連接*。系統會將你帶到 Slack 的 OAuth 畫面 - 請核准所需權限（\`chat:write\`、\`channels:read\`）。

## 選擇頻道

授權後，選擇目標頻道（或建立新的，例如 \`#support\`）。

## 會轉發哪些內容

- 開場訊息，並附上返回 wexio 收件匣的深層連結。
- 客服人員的回覆，以討論串訊息呈現。
- 訪客的回覆，透過 SSE 橋接即時送達。

## 反向傳送

客服人員也可以 *從* Slack 回覆 - wexio 會監聽 Slack 討論串中的回覆，並傳回小工具。`},"demo-article-billing":{title:`更新你的方案與帳務資訊`,excerpt:`切換方案等級、更換信用卡或下載發票。`,body:`## 方案

- **Free** - 1 個小工具、基本功能、「Powered by Wexio」標誌。
- **Standard** - 不限數量的小工具、自動化、整合。
- **Enterprise** - 白標、SLA、專屬支援。

## 變更方案

**設定 → 帳務 → 變更方案**。升級會立即生效；降級則會在目前的計費週期結束時套用。

## 發票

在 **帳務 → 歷史紀錄** 中可將每張發票下載為 PDF。每次續約時，我們也會寄送一份副本到你的電子郵件。`},"demo-article-theme":{title:`自訂小工具的主題`,excerpt:`讓小工具符合你的品牌 - 色彩、圓角、深色模式。`,body:`## 品牌色彩

在 **設定 → 品牌** 中設定：

- **主色** - 用於啟動按鈕、傳送按鈕與焦點外框。
- **背景** - 面板表面（淺色）與對應的深色模式配色。

## 圓角

從 \`sm\`、\`md\`、\`lg\` 中挑選，呈現較俐落或較柔和的外觀。變更會即時套用到所有頁面上的每個小工具。

## 深色模式

預設 = 跟隨訪客的系統偏好。如果你的網站本身不支援深色模式，可固定為 **永遠淺色** 或 **永遠深色**。`},"demo-article-handoff":{title:`從 Gaia 轉接給真人客服`,excerpt:`當 AI 還不夠時 - 將訪客轉給團隊成員。`,body:`## 觸發條件

在下列情況下，Gaia 會自動轉接：

- 訪客輸入 *「我要和真人談話」*（或任何在地化的說法）。
- 同一個問題被問了兩次仍未解決。
- 訪客的意圖符合路由規則（例如：帳務 → 財務團隊）。

## 路由

設定 **路由 → 規則**，將特定意圖導向指定的團隊或客服人員。同時支援輪流分配與負載最低優先。

## 非營業時間

如果沒有任何客服人員在線，Gaia 會提供回電或電子郵件轉接表單，而不是假裝有人可以接聽。`},"demo-article-crm":{title:`將對話同步到你的 CRM`,excerpt:`把每一段聊天推送到 HubSpot、Salesforce 或 Pipedrive。`,body:`## 支援的 CRM

- HubSpot（OAuth）
- Salesforce（OAuth）
- Pipedrive（API 權杖）
- 透過 webhook 自訂

## 同步的內容

- 新對話會建立聯絡人（若尚未存在）與一則備註。
- 客服人員的回覆會附加到聯絡人的時間軸。
- 在 wexio 套用的標籤會同步到 CRM。

## 雙向同步

在 CRM 中新增的客服備註，可透過 webhook 接收器傳回 wexio - 請參閱 *整合 → Webhook → 傳入*。`},"demo-article-shortcuts":{title:`客服人員鍵盤快速鍵`,excerpt:`分流速度加倍 - 完全不需要滑鼠。`,body:"## 收件匣導覽\n\n- `j` / `k` - 下一則 / 上一則對話\n- `e` - 解決\n- `a` - 指派給我\n- `s` - 稍後處理\n\n## 回覆編輯器\n\n- `Cmd+Enter` - 傳送\n- `/` - 開啟快速回覆選擇器\n- `Cmd+K` - 指令面板（包含所有功能）\n\n## 小提示\n\n將游標移到儀表板中的任何按鈕上 - 提示文字會顯示它的快速鍵。"}},tags:{setup:`設定`,install:`安裝`,automation:`自動化`,flows:`流程`,integrations:`整合`,slack:`Slack`,billing:`帳務`,plans:`方案`,design:`設計`,ai:`AI`,crm:`CRM`,productivity:`生產力`,inbox:`收件匣`}},r={visitorName:`你`,messages:{"m-demo-1":{text:`你好 👋 我是 Gaia，Wexio 的 AI。有什麼我可以幫忙的嗎？`,ageLabel:`上午 9:41`,buttons:[`費用是怎麼計算的？`,`它能做什麼？`,`轉接真人`]},"m-demo-2":{text:`可以讓我看看小工具長什麼樣子嗎？`,ageLabel:`上午 9:41`},"m-demo-3":{text:``,ageLabel:`上午 9:42`,mediaAlts:[`產品螢幕截圖`]},"m-demo-4":{text:``,ageLabel:`上午 9:42`,mediaAlts:[`旋轉的地球`]},"m-demo-5":{text:`太棒了！😄 這裡有幾張我們團隊的畫面。`,ageLabel:`上午 9:43`},"m-demo-6":{text:`幾個儀表板重點`,ageLabel:`上午 9:43`,mediaAlts:[`儀表板總覽`,`分析`,`收件匣`,`報表`]},"m-demo-7":{text:``,ageLabel:`上午 9:44`,mediaAlts:[`快速導覽`]},"m-demo-8":{text:``,ageLabel:`上午 9:44`,mediaAlts:[`語音訊息`]},"m-demo-9":{text:``,ageLabel:`上午 9:45`,mediaAlts:[`入門指南`]},"m-demo-9b":{text:``,ageLabel:`上午 9:45`,mediaAlts:[`Wexio 整合`]},"m-demo-10":{text:`準備好親自試試了嗎？`,ageLabel:`上午 9:45`,buttons:[`開啟沙盒`,`預約通話`,`繼續聊天`]}}},i={messengerDescription:`我們的團隊也能提供協助`,messengerMessage:`嗨 👋 有任何問題都可以問我們，或選擇一個快速操作。`},a={welcome:{system:`你現在正在與我們的 AI 助理 Gaia 聊天。`,hint:`提示：隨時都可以附加檔案或錄製語音訊息。`,greeting:`你好 👋 我是 Gaia，Wexio 的 AI。有任何問題都可以問我，或選擇一個快速動作開始。`},replies:{pricing:{text:`Wexio 的一個小工具可免費使用；付費方案每月 $39 起，並解鎖自動化、整合與白標功能。`,planBtn:`查看方案等級`,salesBtn:`洽詢業務`},gaia:{text:`Gaia 是能即時回答訪客問題的 AI 代理。她會從你的說明文章中學習，並在無法協助時轉接給真人。`,handoffBtn:`轉接是如何運作的？`},human:{text:`沒問題 - 我會請團隊的 Alex 加入。營業時間內，他們會在幾分鐘內回覆你。`},fallback:{text:`了解 - 我來查一下，稍後再回覆你。`},voice:{text:`收到你的語音訊息了 - 我來確認一下，再回覆你。`}}},o={main:`準備好親自試試了嗎？`,billing:`謝謝！我已將你的發票問題轉給帳務團隊。`,integrations:`我要如何將 WhatsApp 連接到我的帳號？`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-BpSJW2vD2.js.map