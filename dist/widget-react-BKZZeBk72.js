globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`你好 👋 感谢你联系我们，我很快就会回复你…`,ageLabel:`4 小时`},t={"demo-news-1":{title:`Pioneer 2026：请预留日期`,excerpt:`10 月 8 日，我们将回到旧金山。9 点开放入场，10 点开始主题演讲。`,body:`## 活动亮点

今年的主题演讲聚焦于我们公开发布的成果和接下来的规划。现场演示，不放幻灯片。

- **Gaia 产品路线图** - 我们的 AI 在未来两个季度的发展方向。
- **客户故事** - 三个团队分享如何将首次响应时间缩短一半。
- **动手实验室** - 带上笔记本电脑，与我们的工程师一起搭建流程。

## 交通方式

会场位于 Embarcadero 海滨的 Pier 27 邮轮码头。最近的 BART 站是 Embarcadero，沿着水岸步行约 12 分钟。

## 门票

早鸟席位有限，将于下周开售。现有客户可优先购买，请留意你的收件箱。

> 无法亲自到场？主题演讲将进行直播，录像会在当天晚上上传到这里。`},"demo-news-2":{title:`四月发布的新功能`,excerpt:`三个全新的自动化触发器，以及快得多的收件箱搜索。`,body:`<p>四月是繁忙的一个月。以下是所有新发布的内容，一目了然：</p>
<table>
<thead><tr><th>领域</th><th>变化</th><th>为什么重要</th></tr></thead>
<tbody>
<tr><td>收件箱搜索</td><td>输入时即时显示结果</td><td>5 万条会话，不到 100 毫秒</td></tr>
<tr><td>自动化</td><td>三个新触发器</td><td>放弃购物车、重新访问页面、沉默的访客</td></tr>
<tr><td>回复编辑器</td><td>切换标签页后草稿依然保留</td><td>不会再丢失写到一半的回复</td></tr>
<tr><td>深色模式</td><td>首次渲染时不再闪白</td><td>在深色网站上加载更顺畅</td></tr>
</tbody>
</table>
<p>来看看新搜索的实际效果 - 你还没输完，结果就出现了：</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="收件箱搜索即时返回结果" />
<p>点按图片可以放大查看。有任何需求吗？直接在这里回复 - 我们每一条都会阅读。</p>`},"demo-news-3":{title:`Gaia 现已支持 28 种语言`,excerpt:`自动检测访客的语言，或固定使用某一种语言。无需额外设置。`,body:`<p>Gaia 现在能以 28 种语言回复，并从访客的第一条消息自动检测语言。以下是我们最常被问到的问题：</p>
<details><summary>语言检测是如何工作的？</summary><p>Gaia 会读取开场消息，并用相同的语言回复。如果你的帮助文章有该语言的版本，Gaia 会引用；如果没有，就会根据最接近的内容作答，并提醒你缺失的部分。</p></details>
<details><summary>可以强制只使用一种语言吗？</summary><p>可以。在 <strong>设置 → AI → 语言</strong> 中固定一种语言，无论访客输入什么，Gaia 都会保持该语言。</p></details>
<details><summary>客服人员会看到什么？</summary><p>会话记录会保持你团队使用的语言，原始消息也会与译文一起保留。</p></details>
<p>快速看看 Gaia 在对话中途切换语言的样子：</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia 以多种语言回复" />`},"demo-news-4":{title:`将会话直接导入 Slack`,excerpt:`将任何传入的 webhook 连接到 Slack 频道。无需额外的对接代码。`,body:`## 两次点击即可连接

前往 **集成 → Slack**，点击 *连接*，并批准权限。选择新会话要进入的频道 - 大多数团队使用 \`#support\`。

## 你将获得

- 聊天开始的瞬间，Slack 就会收到消息，并附带返回收件箱的链接。
- 客服人员的回复会以线程形式排在原始消息下方。
- 直接在 Slack 中回复，我们会实时转发给访客。

## 同样支持 Webhook

已经在从自己的系统推送事件了吗？把任何 webhook 指向你的 Slack 频道，就能完全省去自定义集成的工作。`},"demo-news-5":{title:`Inbox 2.0：不用鼠标也能分流`,excerpt:`用于分配、暂缓和解决的新快捷键 - 全部用键盘完成。`,body:`<p>Inbox 2.0 以键盘为先。以下是按操作分类的速查表：</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>浏览</div><ul><li><code>j</code> / <code>k</code> - 下一条 / 上一条会话</li><li><code>g</code> 然后 <code>i</code> - 跳转到收件箱</li></ul></div>
<div data-type="tab"><div data-tab-label>操作</div><ul><li><code>e</code> - 解决</li><li><code>a</code> - 分配给我</li><li><code>s</code> - 暂缓</li></ul></div>
<div data-type="tab"><div data-tab-label>撰写</div><ul><li><code>Cmd+Enter</code> - 发送</li><li><code>/</code> - 快捷回复</li><li><code>Cmd+K</code> - 命令面板</li></ul></div>
</div>
<p>重新设计的收件箱 - 一切尽在指尖：</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="重新设计、以键盘为先的收件箱" />`},"demo-news-6":{title:`自助式数据导出与删除`,excerpt:`一键处理访客的数据请求。开箱即符合 GDPR。`,body:`## 导出

在任意访客的个人资料中，点击 **导出数据**，即可生成一个 JSON 文件，包含我们保存的所有消息、事件和属性。文件会立即下载，并将该请求记录下来供你备查。

## 删除

**删除数据** 会移除该访客，并通过同一个 webhook 桥接，从收件箱、搜索以及所有已连接的 CRM 中清除其消息。此操作会被记录，且无法撤销。

## 给你的数据保护官

- 每次导出和删除都有时间戳和执行人。
- 保留期限可按工作区配置。
- 如有需要，可提供数据处理协议。`},"demo-news-7":{title:`移动 SDK 测试版：iOS 和 Android`,excerpt:`把同一段会话带进你的原生应用。测试名额现已开放。`,body:`## 一段会话，任意界面

在你网站上开始聊天的访客，可以在你的应用中继续，已登录且保留完整记录。同一个 Gaia、同一批客服人员、同一个收件箱。

## 测试版内容

- 适用于 SwiftUI 和 Jetpack Compose 的原生启动器。
- 新回复的推送通知。
- 离线队列，网络恢复后消息会自动发出。

## 加入我们

我们每周会接入几个团队。请在这里回复你的平台和大致的月活跃用户数，我们会给你发一个密钥。

> 测试版意味着还有些粗糙之处。我们每周都会发布修复，也会阅读每一份错误报告。`},"demo-news-8":{title:`看看哪些 AI 回答真正有效`,excerpt:`跟踪 Gaia 的每条回复最终是解决了问题、转接给真人，还是访客离开了。`,body:`## 全新视图

**分析 → AI 成效** 会根据后续发生的情况，对 Gaia 的每条回复进行分类：

- **已解决** - 访客得到了所需的答案，满意地离开。
- **已转接** - Gaia 将会话交给了真人。
- **流失** - 访客在问题未解决前就关闭了小组件。

## 单篇文章洞察

点进任意帮助文章，查看 Gaia 引用它的频率，以及这些引用是否真的解决了问题。高流量文章的解决率偏低，通常说明内容需要重写，而不是 AI 有问题。

## 付诸行动

按流失率排序，找出 Gaia 最吃力的问题，再新增一个流程或更精准的文章来填补空白。`},tags:{events:`活动`,product:`产品`,release:`发布`,ai:`AI`,languages:`语言`,integrations:`集成`,slack:`Slack`,inbox:`收件箱`,privacy:`隐私`,security:`安全`,mobile:`移动端`,beta:`测试版`,analytics:`分析`},categories:{company:`公司`,product:`产品`,engineering:`工程`}},n={categories:{"demo-cat-getting-started":{title:`快速入门`,description:`安装小组件并配置你的第一段会话。`},"demo-cat-automation":{title:`自动化`,description:`流程、触发器和 AI 自动回复。`},"demo-cat-integrations":{title:`集成`,description:`连接你的 CRM、Slack 和 CMS。`},"demo-cat-billing":{title:`账单与套餐`,description:`价格档位、发票和席位管理。`}},articles:{"demo-article-install":{title:`在你的网站上安装 Wexio 小组件`,excerpt:`只需 30 秒，把一段代码粘贴到结束 </body> 标签之前即可。`,body:`## 添加加载器脚本

将这段代码粘贴到每一个你希望显示小组件的页面：

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

加载器会在右下角添加一个悬浮的启动按钮。点击即可打开聊天面板。

## 验证安装是否成功

- 访问包含这段代码的页面。
- 打开浏览器控制台。
- 你应该会看到 \`[wexio] widget mounted\`。

## 自定义外观

小组件会从你的控制台读取品牌颜色。请在 **设置 → 品牌** 中更新。

> 需要帮助吗？请点击下方的“还需要帮助？给我们发消息”，我们会一步步带你完成。`},"demo-article-flows":{title:`创建你的第一个自动化流程`,excerpt:`拖放即可，五分钟内上线欢迎机器人。`,body:`## 什么是流程？

流程是由会话步骤 - 问题、回复和条件 - 组成的小型树状结构，每当访客符合某个触发器时就会运行。

## 三种触发器类型

1. **访客打开了小组件** - 欢迎首次到访的访客。
2. **访客提出了问题** - Gaia（AI）会尝试回答；如果无法回答，就由流程接管。
3. **收到 Webhook** - 你的 CMS 或电商平台推送事件，流程便会在正确的聊天中启动。

## 最佳实践

- 第一条回复保持在 80 个字符以内。
- 提供 2-3 个快捷回复按钮，而不是开放式提问。
- 始终提供退出途径 - *“转接真人”*。`},"demo-article-slack":{title:`将聊天转发到 Slack`,excerpt:`将每一段新会话同步到你选择的 Slack 频道。`,body:`## 连接你的工作区

在 **集成 → Slack** 中点击 *连接*。系统会将你带到 Slack 的 OAuth 页面 - 请批准所需权限（\`chat:write\`、\`channels:read\`）。

## 选择频道

授权后，选择目标频道（或新建一个，例如 \`#support\`）。

## 会转发哪些内容

- 开场消息，并附带返回 wexio 收件箱的深层链接。
- 客服人员的回复，以线程消息呈现。
- 访客的回复，通过 SSE 桥接实时送达。

## 反向传送

客服人员也可以 *从* Slack 回复 - wexio 会监听 Slack 线程中的回复，并回传到小组件。`},"demo-article-billing":{title:`更新你的套餐和账单信息`,excerpt:`切换档位、更换银行卡或下载发票。`,body:`## 套餐

- **Free** - 1 个小组件、基础功能、“Powered by Wexio”标识。
- **Standard** - 不限数量的小组件、自动化、集成。
- **Enterprise** - 白标、SLA、专属支持。

## 更改套餐

**设置 → 账单 → 更改套餐**。升级立即生效；降级将在当前计费周期结束时生效。

## 发票

在 **账单 → 历史记录** 中可将每张发票下载为 PDF。每次续费时，我们也会把副本发送到你的邮箱。`},"demo-article-theme":{title:`自定义小组件主题`,excerpt:`让小组件契合你的品牌 - 颜色、圆角、深色模式。`,body:`## 品牌颜色

在 **设置 → 品牌** 中设置：

- **主色** - 用于启动按钮、发送按钮和焦点轮廓。
- **背景** - 面板表面（浅色）以及对应的深色模式配色。

## 圆角

从 \`sm\`、\`md\`、\`lg\` 中选择，呈现更利落或更柔和的外观。更改会实时应用到所有页面上的每个小组件。

## 深色模式

默认 = 跟随访客的系统偏好。如果你的网站本身不支持深色模式，可固定为 **始终浅色** 或 **始终深色**。`},"demo-article-handoff":{title:`从 Gaia 转接给真人客服`,excerpt:`当 AI 不够用时 - 把访客转给团队成员。`,body:`## 触发条件

在以下情况下，Gaia 会自动转接：

- 访客输入 *“我要和真人沟通”*（或任何本地化的说法）。
- 同一个问题被问了两次仍未解决。
- 访客的意图符合路由规则（例如：账单 → 财务团队）。

## 路由

配置 **路由 → 规则**，将特定意图导向指定的团队或客服人员。同时支持轮流分配和负载最低优先。

## 非工作时间

如果没有任何客服人员在线，Gaia 会提供回电或邮件转接表单，而不是假装有人可以接听。`},"demo-article-crm":{title:`将会话同步到你的 CRM`,excerpt:`把每一段聊天推送到 HubSpot、Salesforce 或 Pipedrive。`,body:`## 支持的 CRM

- HubSpot（OAuth）
- Salesforce（OAuth）
- Pipedrive（API 令牌）
- 通过 webhook 自定义

## 同步的内容

- 新会话会创建联系人（如果尚不存在）和一条备注。
- 客服人员的回复会追加到联系人的时间线。
- 在 wexio 中应用的标签会同步到 CRM。

## 双向同步

在 CRM 中添加的客服备注，可通过 webhook 接收器传回 wexio - 请参阅 *集成 → Webhook → 入站*。`},"demo-article-shortcuts":{title:`客服人员键盘快捷键`,excerpt:`分流速度翻倍 - 完全不需要鼠标。`,body:"## 收件箱导航\n\n- `j` / `k` - 下一条 / 上一条会话\n- `e` - 解决\n- `a` - 分配给我\n- `s` - 暂缓\n\n## 回复编辑器\n\n- `Cmd+Enter` - 发送\n- `/` - 打开快捷回复选择器\n- `Cmd+K` - 命令面板（包含所有功能）\n\n## 小提示\n\n将光标悬停在控制台中的任意按钮上 - 提示文字会显示它的快捷键。"}},tags:{setup:`设置`,install:`安装`,automation:`自动化`,flows:`流程`,integrations:`集成`,slack:`Slack`,billing:`账单`,plans:`套餐`,design:`设计`,ai:`AI`,crm:`CRM`,productivity:`效率`,inbox:`收件箱`}},r={visitorName:`你`,messages:{"m-demo-1":{text:`你好 👋 我是 Gaia，Wexio 的 AI。有什么我可以帮忙的吗？`,ageLabel:`上午 9:41`,buttons:[`费用是怎么计算的？`,`它能做什么？`,`转接真人`]},"m-demo-2":{text:`可以让我看看小组件长什么样吗？`,ageLabel:`上午 9:41`},"m-demo-3":{text:``,ageLabel:`上午 9:42`,mediaAlts:[`产品截图`]},"m-demo-4":{text:``,ageLabel:`上午 9:42`,mediaAlts:[`旋转的地球`]},"m-demo-5":{text:`太棒了！😄 这里有几张我们团队的画面。`,ageLabel:`上午 9:43`},"m-demo-6":{text:`几个控制台亮点`,ageLabel:`上午 9:43`,mediaAlts:[`控制台总览`,`分析`,`收件箱`,`报表`]},"m-demo-7":{text:``,ageLabel:`上午 9:44`,mediaAlts:[`快速导览`]},"m-demo-8":{text:``,ageLabel:`上午 9:44`,mediaAlts:[`语音消息`]},"m-demo-9":{text:``,ageLabel:`上午 9:45`,mediaAlts:[`入门指南`]},"m-demo-9b":{text:``,ageLabel:`上午 9:45`,mediaAlts:[`Wexio 集成`]},"m-demo-10":{text:`准备好亲自试试了吗？`,ageLabel:`上午 9:45`,buttons:[`打开沙盒`,`预约通话`,`继续聊天`]}}},i={messengerDescription:`我们的团队也可以提供帮助`,messengerMessage:`你好 👋 有任何问题都可以问我们，或选择一个快捷操作。`},a={welcome:{system:`你现在正在与我们的 AI 助手 Gaia 聊天。`,hint:`提示：随时都可以添加附件或录制语音消息。`,greeting:`你好 👋 我是 Gaia，Wexio 的 AI。有任何问题都可以问我，或选择一个快捷操作开始。`},replies:{pricing:{text:`Wexio 的一个小组件可免费使用；付费套餐每月 $39 起，并解锁自动化、集成和白标功能。`,planBtn:`查看套餐档位`,salesBtn:`联系销售`},gaia:{text:`Gaia 是能即时回答访客问题的 AI 代理。她会从你的帮助文章中学习，并在无法协助时转接给真人。`,handoffBtn:`转接是如何工作的？`},human:{text:`没问题 - 我会邀请团队的 Alex 加入。工作时间内，他们会在几分钟内回复你。`},fallback:{text:`明白了 - 我去查一下，稍后再回复你。`},voice:{text:`收到你的语音消息了 - 我去确认一下，再回复你。`}}},o={main:`准备好亲自试试了吗？`,billing:`谢谢！我已将你的发票问题转给账单团队。`,integrations:`我要如何将 WhatsApp 连接到我的账号？`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-BKZZeBk72.js.map