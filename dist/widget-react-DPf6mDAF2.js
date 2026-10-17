globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`안녕하세요 👋 문의해 주셔서 감사합니다. 곧 답변드리겠습니다…`,ageLabel:`4시간`},t={"demo-news-1":{title:`Pioneer 2026: 날짜를 기억해 주세요`,excerpt:`10월 8일, 샌프란시스코에서 다시 만납니다. 입장은 9시, 기조연설은 10시입니다.`,body:`## 기대해 주세요

올해 기조연설은 우리가 공개적으로 선보인 것과 앞으로 선보일 것에 관한 이야기입니다. 슬라이드가 아닌 라이브 데모로 보여드립니다.

- **Gaia 로드맵** - 앞으로 두 분기 동안 우리 AI가 나아갈 방향.
- **고객 사례** - 세 팀이 첫 응답 시간을 절반으로 줄인 방법을 소개합니다.
- **실습 랩** - 노트북을 가져와 엔지니어와 함께 플로우를 만들어 보세요.

## 오시는 길

행사장은 엠바카데로 바로 앞에 있는 Pier 27 크루즈 터미널입니다. 가장 가까운 BART 역은 Embarcadero이며, 바다를 따라 걸어서 12분 거리입니다.

## 티켓

얼리버드 좌석은 한정되어 있으며 다음 주에 판매를 시작합니다. 기존 고객께 먼저 안내해 드리니 받은편지함을 확인해 주세요.

> 직접 참석하기 어려우신가요? 기조연설은 라이브로 중계되며, 녹화본은 당일 저녁 여기에 올라옵니다.`},"demo-news-2":{title:`4월에 출시된 기능`,excerpt:`새로운 자동화 트리거 3개와 훨씬 빨라진 받은편지함 검색.`,body:`<p>4월은 정말 바쁜 달이었습니다. 출시된 내용을 한눈에 정리했습니다.</p>
<table>
<thead><tr><th>영역</th><th>변경 사항</th><th>중요한 이유</th></tr></thead>
<tbody>
<tr><td>받은편지함 검색</td><td>입력과 동시에 즉시 결과 표시</td><td>대화 5만 건을 100ms 이내에 검색</td></tr>
<tr><td>자동화</td><td>새 트리거 3개</td><td>장바구니 이탈, 페이지 재방문, 조용한 방문자</td></tr>
<tr><td>작성기</td><td>탭을 전환해도 초안 유지</td><td>쓰다 만 답장이 사라지지 않습니다</td></tr>
<tr><td>다크 모드</td><td>첫 렌더링 시 흰 화면 깜빡임 제거</td><td>어두운 사이트에서 더 깔끔한 로딩</td></tr>
</tbody>
</table>
<p>새 검색이 동작하는 모습입니다. 입력을 마치기 전에 결과가 나타납니다.</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="받은편지함 검색이 결과를 즉시 보여주는 모습" />
<p>이미지를 탭하면 자세히 볼 수 있습니다. 요청 사항이 있으신가요? 여기에 답장해 주세요. 모두 읽고 있습니다.</p>`},"demo-news-3":{title:`Gaia, 이제 28개 언어를 지원합니다`,excerpt:`방문자의 언어를 자동으로 감지하거나 하나로 고정하세요. 추가 설정은 필요 없습니다.`,body:`<p>이제 Gaia는 방문자의 첫 메시지에서 자동으로 감지한 28개 언어로 답변합니다. 가장 많이 받는 질문은 다음과 같습니다.</p>
<details><summary>언어 감지는 어떻게 작동하나요?</summary><p>Gaia는 첫 메시지를 읽고 같은 언어로 답변합니다. 해당 언어로 된 도움말 문서가 있으면 인용하고, 없으면 가장 가까운 내용으로 답변하면서 부족한 부분을 알려드립니다.</p></details>
<details><summary>하나의 언어로 고정할 수 있나요?</summary><p>네. <strong>설정 → AI → 언어</strong>에서 하나를 고정하면 방문자가 어떤 언어로 입력하든 Gaia는 그 언어를 유지합니다.</p></details>
<details><summary>상담원에게는 무엇이 보이나요?</summary><p>대화 기록은 팀의 언어로 표시되며, 원본 메시지도 번역과 함께 보관됩니다.</p></details>
<p>대화 도중 Gaia가 언어를 바꾸는 모습을 살펴보세요.</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="여러 언어로 답변하는 Gaia" />`},"demo-news-4":{title:`대화를 Slack으로 바로 전달하세요`,excerpt:`수신 웹훅을 Slack 채널에 연결하세요. 별도의 연동 코드가 필요 없습니다.`,body:`## 두 번의 클릭으로 연결

**연동 → Slack**으로 이동해 *연결*을 누르고 권한을 승인하세요. 새 대화를 받을 채널을 고르면 됩니다. 대부분의 팀은 \`#support\`를 사용합니다.

## 이런 점이 좋습니다

- 채팅이 시작되는 즉시 받은편지함 링크와 함께 Slack 메시지가 도착합니다.
- 상담원 답변이 원본 메시지 아래 스레드로 정리됩니다.
- Slack에서 바로 답장하면 실시간으로 방문자에게 전달됩니다.

## 웹훅도 지원

이미 자체 시스템에서 이벤트를 보내고 있나요? 어떤 웹훅이든 Slack 채널로 연결하면 맞춤 연동 개발을 건너뛸 수 있습니다.`},"demo-news-5":{title:`Inbox 2.0: 마우스 없이 분류하기`,excerpt:`배정, 스누즈, 해결을 위한 새 단축키. 모두 키보드로 할 수 있습니다.`,body:`<p>Inbox 2.0은 키보드 중심입니다. 작업별로 정리한 단축키 모음입니다.</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>이동</div><ul><li><code>j</code> / <code>k</code> - 다음 / 이전 대화</li><li><code>g</code> 다음 <code>i</code> - 받은편지함으로 이동</li></ul></div>
<div data-type="tab"><div data-tab-label>처리</div><ul><li><code>e</code> - 해결</li><li><code>a</code> - 나에게 배정</li><li><code>s</code> - 스누즈</li></ul></div>
<div data-type="tab"><div data-tab-label>작성</div><ul><li><code>Cmd+Enter</code> - 보내기</li><li><code>/</code> - 저장된 답변</li><li><code>Cmd+K</code> - 명령 팔레트</li></ul></div>
</div>
<p>새롭게 디자인된 받은편지함 - 모든 것이 손끝에서 닿습니다.</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="키보드 중심으로 새롭게 디자인된 받은편지함" />`},"demo-news-6":{title:`셀프서비스 데이터 내보내기와 삭제`,excerpt:`방문자의 데이터 요청을 클릭 한 번으로 처리하세요. GDPR에도 기본으로 대응합니다.`,body:`## 내보내기

방문자 프로필에서 **데이터 내보내기**를 누르면 보관 중인 모든 메시지, 이벤트, 속성이 담긴 JSON 번들이 생성됩니다. 즉시 다운로드되며 요청 내역이 기록으로 남습니다.

## 삭제

**데이터 삭제**는 방문자를 제거하고, 받은편지함과 검색, 그리고 같은 웹훅 브리지로 연결된 CRM에서 메시지를 모두 지웁니다. 이 작업은 기록되며 되돌릴 수 없습니다.

## DPO를 위한 안내

- 모든 내보내기와 삭제에는 시각과 실행자가 기록됩니다.
- 보관 기간은 워크스페이스별로 설정할 수 있습니다.
- 데이터 처리 계약서는 요청 시 제공됩니다.`},"demo-news-7":{title:`모바일 SDK 베타: iOS와 Android`,excerpt:`같은 대화를 네이티브 앱으로 가져오세요. 베타 참여 신청을 받고 있습니다.`,body:`## 하나의 대화, 모든 화면

웹사이트에서 채팅을 시작한 방문자가 로그인한 상태로 앱에서 전체 기록과 함께 이어갈 수 있습니다. 같은 Gaia, 같은 상담원, 같은 받은편지함입니다.

## 베타에 포함된 기능

- SwiftUI와 Jetpack Compose용 네이티브 런처.
- 새 답변에 대한 푸시 알림.
- 오프라인 큐: 연결이 복구되면 메시지가 전송됩니다.

## 참여하기

매주 몇 개 팀씩 온보딩하고 있습니다. 사용하는 플랫폼과 대략적인 월간 활성 사용자 수를 여기에 답장해 주시면 키를 보내드립니다.

> 베타는 아직 다듬어지지 않은 부분이 있다는 뜻입니다. 매주 수정 사항을 배포하고 모든 버그 리포트를 읽고 있습니다.`},"demo-news-8":{title:`어떤 AI 답변이 실제로 효과가 있었는지 확인하세요`,excerpt:`Gaia의 각 답변이 해결, 상담원 전환, 이탈 중 무엇으로 이어졌는지 추적합니다.`,body:`## 새로운 보기

**분석 → AI 결과**에서는 Gaia의 모든 답변을 이후 결과별로 나눠서 보여줍니다.

- **해결됨** - 방문자가 필요한 답을 얻고 만족하며 떠났습니다.
- **전환됨** - Gaia가 대화를 사람에게 넘겼습니다.
- **이탈** - 방문자가 해결하지 못한 채 위젯을 닫았습니다.

## 문서별 인사이트

도움말 문서를 열어 Gaia가 얼마나 자주 인용하는지, 그 인용이 해결로 이어지는지 확인하세요. 트래픽이 많은 문서의 해결률이 낮다면 보통 AI가 아니라 콘텐츠를 다시 써야 한다는 뜻입니다.

## 바로 활용하기

이탈률순으로 정렬해 Gaia가 가장 어려워하는 질문을 찾고, 플로우나 더 명확한 문서를 추가해 빈틈을 메우세요.`},tags:{events:`이벤트`,product:`제품`,release:`릴리스`,ai:`AI`,languages:`언어`,integrations:`연동`,slack:`Slack`,inbox:`받은편지함`,privacy:`개인정보`,security:`보안`,mobile:`모바일`,beta:`베타`,analytics:`분석`},categories:{company:`회사`,product:`제품`,engineering:`엔지니어링`}},n={categories:{"demo-cat-getting-started":{title:`시작하기`,description:`위젯을 설치하고 첫 대화를 설정하세요.`},"demo-cat-automation":{title:`자동화`,description:`플로우, 트리거, AI 자동 답변.`},"demo-cat-integrations":{title:`연동`,description:`CRM, Slack, CMS를 연결하세요.`},"demo-cat-billing":{title:`결제 및 요금제`,description:`요금 등급, 청구서, 좌석 관리.`}},articles:{"demo-article-install":{title:`사이트에 Wexio 위젯 설치하기`,excerpt:`닫는 </body> 태그 앞에 붙여 넣는 30초짜리 스니펫.`,body:`## 로더 스크립트 추가

위젯을 표시하려는 모든 페이지에 이 스니펫을 붙여 넣으세요.

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

로더가 오른쪽 아래 모서리에 떠 있는 런처를 추가합니다. 클릭하면 채팅 패널이 열립니다.

## 설치 확인

- 스니펫이 포함된 페이지를 엽니다.
- 브라우저 콘솔을 엽니다.
- \`[wexio] widget mounted\`가 표시되어야 합니다.

## 디자인 맞춤 설정

위젯은 대시보드의 브랜드 색상을 읽어 옵니다. **설정 → 브랜드**에서 변경하세요.

> 도움이 필요하신가요? 아래의 "아직 도움이 필요하신가요? 메시지 보내기"를 눌러 주시면 안내해 드립니다.`},"demo-article-flows":{title:`첫 자동화 플로우 만들기`,excerpt:`끌어다 놓기만 하면 5분 안에 환영 봇을 배포할 수 있습니다.`,body:`## 플로우란?

플로우는 질문, 답변, 조건 같은 대화 단계로 이루어진 작은 트리로, 방문자가 트리거에 해당할 때마다 실행됩니다.

## 세 가지 트리거 유형

1. **방문자가 위젯을 열었을 때** - 처음 온 방문자에게 인사합니다.
2. **방문자가 질문했을 때** - Gaia(AI)가 답변을 시도하고, 답하지 못하면 플로우가 이어받습니다.
3. **웹훅을 받았을 때** - CMS나 이커머스 플랫폼이 이벤트를 보내면 해당 채팅에서 플로우가 시작됩니다.

## 모범 사례

- 첫 답변은 80자 이내로 유지하세요.
- 자유 입력 질문 대신 빠른 답변 칩을 2~3개 제공하세요.
- 항상 빠져나갈 길을 마련하세요 - *"상담원과 대화하기"*.`},"demo-article-slack":{title:`채팅을 Slack으로 전달하기`,excerpt:`새 대화를 원하는 Slack 채널에 그대로 복제하세요.`,body:`## 워크스페이스 연결

**연동 → Slack**에서 *연결*을 클릭하세요. Slack의 OAuth 화면으로 이동하면 요청된 권한(\`chat:write\`, \`channels:read\`)을 승인합니다.

## 채널 선택

인증이 끝나면 대상 채널을 선택하거나 \`#support\` 같은 새 채널을 만드세요.

## 전달되는 내용

- 첫 메시지와 wexio 받은편지함으로 가는 딥링크.
- 상담원 답변은 스레드 메시지로 전달됩니다.
- 방문자 답변은 SSE 브리지를 통해 실시간으로 전달됩니다.

## 반대 방향

상담원은 Slack *에서* 답장할 수 있습니다. wexio가 Slack 스레드 답장을 감지해 위젯으로 전달합니다.`},"demo-article-billing":{title:`요금제와 결제 정보 변경하기`,excerpt:`등급 변경, 카드 변경, 청구서 다운로드.`,body:`## 요금제

- **Free** - 위젯 1개, 기본 기능, "Powered by Wexio" 배지.
- **Standard** - 위젯 무제한, 자동화, 연동.
- **Enterprise** - 화이트 라벨, SLA, 전담 지원.

## 요금제 변경

**설정 → 결제 → 요금제 변경**. 업그레이드는 즉시 적용되고, 다운그레이드는 현재 결제 주기가 끝날 때 적용됩니다.

## 청구서

**결제 → 내역**에서 모든 청구서를 PDF로 다운로드할 수 있습니다. 갱신할 때마다 이메일로도 사본을 보내드립니다.`},"demo-article-theme":{title:`위젯 테마 맞춤 설정`,excerpt:`브랜드에 맞게 조정하세요 - 색상, 모서리 둥글기, 다크 모드.`,body:`## 브랜드 색상

**설정 → 브랜드**에서 다음을 설정하세요.

- **기본색** - 런처, 보내기 버튼, 포커스 링에 적용됩니다.
- **배경** - 패널 표면(라이트)과 다크 모드용 짝 색상.

## 모서리 둥글기

\`sm\`, \`md\`, \`lg\` 중에서 골라 더 각지거나 더 부드러운 느낌을 낼 수 있습니다. 변경 사항은 모든 페이지의 모든 위젯에 실시간으로 적용됩니다.

## 다크 모드

기본값은 방문자의 시스템 설정을 따릅니다. 사이트 자체가 다크 모드를 지원하지 않는다면 **항상 라이트** 또는 **항상 다크**로 고정하세요.`},"demo-article-handoff":{title:`Gaia에서 상담원으로 전환하기`,excerpt:`AI로 충분하지 않을 때 - 방문자를 팀원에게 연결하세요.`,body:`## 트리거

Gaia는 다음과 같은 경우 자동으로 상담원에게 넘깁니다.

- 방문자가 *"상담원과 대화하고 싶어요"*(또는 각 언어의 비슷한 표현)라고 입력한 경우.
- 같은 질문이 해결되지 않은 채 두 번 반복된 경우.
- 방문자의 의도가 라우팅 규칙과 일치하는 경우(예: 결제 → 재무팀).

## 라우팅

**라우팅 → 규칙**을 설정해 특정 의도를 특정 팀이나 상담원에게 보내세요. 라운드 로빈과 최소 부하 방식을 모두 지원합니다.

## 업무 시간 외

온라인 상담원이 없으면 Gaia는 누군가 있는 척하지 않고 콜백 또는 이메일 전달 양식을 안내합니다.`},"demo-article-crm":{title:`대화를 CRM과 동기화하기`,excerpt:`모든 채팅을 HubSpot, Salesforce, Pipedrive로 보내세요.`,body:`## 지원하는 CRM

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (API 토큰)
- 웹훅을 통한 맞춤 연동

## 동기화되는 내용

- 새 대화가 생기면 연락처(없는 경우)와 메모가 만들어집니다.
- 상담원 답변은 연락처 타임라인에 추가됩니다.
- wexio에서 적용한 태그가 CRM에도 반영됩니다.

## 양방향

CRM에서 추가한 상담원 메모는 웹훅 수신기를 통해 wexio로 다시 전달할 수 있습니다. *연동 → 웹훅 → 수신*을 참고하세요.`},"demo-article-shortcuts":{title:`상담원용 키보드 단축키`,excerpt:`두 배 빠르게 분류하세요 - 마우스는 필요 없습니다.`,body:"## 받은편지함 이동\n\n- `j` / `k` - 다음 / 이전 대화\n- `e` - 해결\n- `a` - 나에게 배정\n- `s` - 스누즈\n\n## 작성기\n\n- `Cmd+Enter` - 보내기\n- `/` - 저장된 답변 선택기 열기\n- `Cmd+K` - 명령 팔레트(모든 기능)\n\n## 팁\n\n대시보드의 아무 버튼에나 마우스를 올려 보세요. 툴팁에 단축키가 표시됩니다."}},tags:{setup:`설정`,install:`설치`,automation:`자동화`,flows:`플로우`,integrations:`연동`,slack:`Slack`,billing:`결제`,plans:`요금제`,design:`디자인`,ai:`AI`,crm:`CRM`,productivity:`생산성`,inbox:`받은편지함`}},r={visitorName:`나`,messages:{"m-demo-1":{text:`안녕하세요 👋 저는 Wexio의 AI, Gaia입니다. 무엇을 도와드릴까요?`,ageLabel:`오전 9:41`,buttons:[`요금은 어떻게 되나요?`,`무엇을 할 수 있나요?`,`상담원과 대화하기`]},"m-demo-2":{text:`위젯이 어떻게 생겼는지 보여줄 수 있나요?`,ageLabel:`오전 9:41`},"m-demo-3":{text:``,ageLabel:`오전 9:42`,mediaAlts:[`제품 스크린샷`]},"m-demo-4":{text:``,ageLabel:`오전 9:42`,mediaAlts:[`회전하는 지구본`]},"m-demo-5":{text:`멋지네요! 😄 저희 팀이 준비한 화면 몇 가지를 보여드릴게요.`,ageLabel:`오전 9:43`},"m-demo-6":{text:`대시보드 주요 화면`,ageLabel:`오전 9:43`,mediaAlts:[`대시보드 개요`,`분석`,`받은편지함`,`리포트`]},"m-demo-7":{text:``,ageLabel:`오전 9:44`,mediaAlts:[`간단한 둘러보기`]},"m-demo-8":{text:``,ageLabel:`오전 9:44`,mediaAlts:[`음성 메모`]},"m-demo-9":{text:``,ageLabel:`오전 9:45`,mediaAlts:[`시작 가이드`]},"m-demo-9b":{text:``,ageLabel:`오전 9:45`,mediaAlts:[`Wexio 연동`]},"m-demo-10":{text:`직접 사용해 보시겠어요?`,ageLabel:`오전 9:45`,buttons:[`샌드박스 열기`,`통화 예약하기`,`계속 채팅하기`]}}},i={messengerDescription:`저희 팀도 도와드릴 수 있습니다`,messengerMessage:`안녕하세요 👋 궁금한 점을 물어보시거나 빠른 작업을 선택해 보세요.`},a={welcome:{system:`AI 어시스턴트 Gaia와 채팅 중입니다.`,hint:`팁: 언제든 파일을 첨부하거나 음성 메모를 녹음할 수 있습니다.`,greeting:`안녕하세요 👋 저는 Wexio의 AI, Gaia입니다. 무엇이든 물어보시거나 빠른 작업을 골라 시작해 보세요.`},replies:{pricing:{text:`Wexio는 위젯 1개까지 무료이며, 유료 요금제는 월 $39부터 시작해 자동화, 연동, 화이트 라벨을 사용할 수 있습니다.`,planBtn:`요금제 보기`,salesBtn:`영업팀과 상담하기`},gaia:{text:`Gaia는 방문자의 질문에 즉시 답하는 AI 에이전트입니다. 도움말 문서로 학습하고, 도움을 드리기 어려울 때는 사람에게 넘겨 드립니다.`,handoffBtn:`상담원 전환은 어떻게 작동하나요?`},human:{text:`물론이죠 - 팀의 Alex를 연결해 드릴게요. 업무 시간에는 몇 분 안에 답변드립니다.`},fallback:{text:`알겠습니다 - 확인해 보고 곧 다시 연락드릴게요.`},voice:{text:`음성 메모를 받았습니다 - 확인해 보고 다시 연락드릴게요.`}}},o={main:`직접 사용해 보시겠어요?`,billing:`감사합니다! 청구서 관련 문의는 결제팀에 전달했습니다.`,integrations:`WhatsApp을 내 계정에 연결하려면 어떻게 하나요?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-DPf6mDAF2.js.map