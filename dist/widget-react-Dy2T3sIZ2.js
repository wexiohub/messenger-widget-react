globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Olá 👋 Obrigada pelo seu contacto. Já respondo…`,ageLabel:`4h`},t={"demo-news-1":{title:`Pioneer 2026: reserve a data`,excerpt:`Voltamos a São Francisco a 8 de outubro. Portas abertas às 9h, keynote às 10h.`,body:`## O que esperar

A keynote deste ano é toda sobre o que lançámos de forma aberta e o que aí vem. Demonstrações ao vivo, não diapositivos.

- **O roadmap da Gaia** - para onde vai a nossa IA nos próximos dois trimestres.
- **Histórias de clientes** - três equipas contam como reduziram para metade o tempo de primeira resposta.
- **Laboratórios práticos** - traga um portátil e construa um fluxo com os nossos engenheiros.

## Como chegar

O local é o Pier 27 Cruise Terminal, mesmo no Embarcadero. A estação de BART mais próxima é a Embarcadero, a 12 minutos a pé junto à água.

## Bilhetes

Os lugares early bird são limitados e abrem na próxima semana. Os clientes atuais têm prioridade, por isso fique atento à sua caixa de entrada.

> Não pode ir pessoalmente? A keynote será transmitida em direto e as gravações chegam aqui na mesma noite.`},"demo-news-2":{title:`O que lançámos em abril`,excerpt:`Três novos acionadores de automatização e uma pesquisa na caixa de entrada muito mais rápida.`,body:`<p>Abril foi um mês em cheio. Eis tudo o que lançámos, num relance:</p>
<table>
<thead><tr><th>Área</th><th>O que mudou</th><th>Porque importa</th></tr></thead>
<tbody>
<tr><td>Pesquisa na caixa de entrada</td><td>Resultados instantâneos enquanto escreve</td><td>50 mil conversas, em menos de 100 ms</td></tr>
<tr><td>Automatização</td><td>Três novos acionadores</td><td>Carrinho abandonado, página revisitada, visitante calado</td></tr>
<tr><td>Editor de respostas</td><td>O rascunho sobrevive à mudança de separador</td><td>Chega de respostas a meio perdidas</td></tr>
<tr><td>Modo escuro</td><td>Sem flash branco na primeira renderização</td><td>Carregamento mais limpo em sites escuros</td></tr>
</tbody>
</table>
<p>Veja a nova pesquisa em ação - os resultados aparecem antes de acabar de escrever:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Pesquisa na caixa de entrada a mostrar resultados instantaneamente" />
<p>Toque na imagem para ver mais de perto. Tem algum pedido? Responda aqui - lemos todos.</p>`},"demo-news-3":{title:`A Gaia já fala 28 idiomas`,excerpt:`Detete automaticamente o idioma do visitante ou fixe um. Sem configuração adicional.`,body:`<p>A Gaia responde agora em 28 idiomas, detetados automaticamente a partir da primeira mensagem do visitante. As perguntas que mais ouvimos:</p>
<details><summary>Como funciona a deteção de idioma?</summary><p>A Gaia lê a mensagem inicial e responde no mesmo idioma. Se os seus artigos de ajuda existirem nesse idioma, cita-os; caso contrário, responde com base na correspondência mais próxima e avisa-o da lacuna.</p></details>
<details><summary>Posso forçar um único idioma?</summary><p>Sim. Fixe um em <strong>Definições → IA → Idioma</strong> e a Gaia mantém-se nele, independentemente do que o visitante escrever.</p></details>
<details><summary>O que veem os operadores?</summary><p>As transcrições ficam no idioma da sua equipa, com a mensagem original guardada junto da tradução.</p></details>
<p>Uma espreitadela à Gaia a mudar de idioma a meio da conversa:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia a responder em vários idiomas" />`},"demo-news-4":{title:`Envie conversas diretamente para o Slack`,excerpt:`Ligue qualquer webhook de entrada a um canal do Slack. Sem código intermédio.`,body:`## Ligue em dois cliques

Vá a **Integrações → Slack**, clique em *Ligar* e aprove as permissões. Escolha o canal para onde as novas conversas devem ir - a maioria das equipas usa \`#support\`.

## O que recebe

- Uma mensagem no Slack assim que um chat começa, com ligação de volta à caixa de entrada.
- Respostas dos operadores em thread por baixo da mensagem original.
- Responda diretamente do Slack e nós enviamos ao visitante em tempo real.

## Webhooks também

Já envia eventos dos seus próprios sistemas? Aponte qualquer webhook ao seu canal do Slack e dispense por completo a integração personalizada.`},"demo-news-5":{title:`Inbox 2.0: triagem sem rato`,excerpt:`Novos atalhos para atribuir, adiar e resolver - tudo pelo teclado.`,body:`<p>O Inbox 2.0 é feito para o teclado. Eis a cábula, agrupada pelo que está a fazer:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Navegar</div><ul><li><code>j</code> / <code>k</code> - conversa seguinte / anterior</li><li><code>g</code> e depois <code>i</code> - ir para a caixa de entrada</li></ul></div>
<div data-type="tab"><div data-tab-label>Agir</div><ul><li><code>e</code> - resolver</li><li><code>a</code> - atribuir a mim</li><li><code>s</code> - adiar</li></ul></div>
<div data-type="tab"><div data-tab-label>Escrever</div><ul><li><code>Cmd+Enter</code> - enviar</li><li><code>/</code> - respostas guardadas</li><li><code>Cmd+K</code> - paleta de comandos</li></ul></div>
</div>
<p>A caixa de entrada redesenhada - tudo ao alcance de uma tecla:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="A caixa de entrada redesenhada, centrada no teclado" />`},"demo-news-6":{title:`Exportação e eliminação de dados em autosserviço`,excerpt:`Trate os pedidos de dados dos visitantes com um clique. Pronto para o RGPD de origem.`,body:`## Exportar

No perfil de qualquer visitante, clique em **Exportar dados** para gerar um pacote JSON com todas as mensagens, eventos e atributos que guardamos sobre ele. A transferência é imediata e o pedido fica registado para o seu controlo.

## Eliminar

**Eliminar dados** remove o visitante e apaga as suas mensagens da caixa de entrada, da pesquisa e de qualquer CRM ligado através da mesma ponte de webhook. A ação fica registada e é irreversível.

## Para o seu encarregado de proteção de dados

- Cada exportação e eliminação tem data, hora e autor.
- Os prazos de conservação são configuráveis por espaço de trabalho.
- Um acordo de tratamento de dados está disponível mediante pedido.`},"demo-news-7":{title:`SDK móvel em beta: iOS e Android`,excerpt:`Leve a mesma conversa para a sua app nativa. Vagas do beta abertas agora.`,body:`## Uma conversa, todos os ecrãs

Um visitante que inicia um chat no seu site pode continuá-lo na sua app, com sessão iniciada e com todo o histórico. A mesma Gaia, os mesmos operadores, a mesma caixa de entrada.

## O que inclui o beta

- Launcher nativo para SwiftUI e Jetpack Compose.
- Notificações push para novas respostas.
- Fila offline, para que as mensagens sejam enviadas quando a ligação voltar.

## Participe

Estamos a integrar algumas equipas por semana. Responda aqui com a sua plataforma e uma estimativa de utilizadores ativos mensais, e enviamos-lhe uma chave.

> Beta significa arestas por limar. Lançamos correções todas as semanas e lemos cada relatório de erro.`},"demo-news-8":{title:`Veja que respostas da IA funcionaram mesmo`,excerpt:`Acompanhe se cada resposta da Gaia levou a uma resolução, a uma transferência ou a uma desistência.`,body:`## A nova vista

**Análises → Resultados da IA** divide cada resposta da Gaia pelo que aconteceu a seguir:

- **Resolvido** - o visitante obteve o que precisava e saiu satisfeito.
- **Transferido** - a Gaia passou a conversa a uma pessoa.
- **Desistência** - o visitante fechou o widget sem resolver.

## Perspetivas por artigo

Abra qualquer artigo de ajuda para ver com que frequência a Gaia o cita e se essas citações resolvem. Pouca resolução num artigo muito visitado costuma significar que é o conteúdo que precisa de ser reescrito, não a IA.

## Tire partido disso

Ordene pela taxa de desistência para encontrar as perguntas com que a Gaia mais se atrapalha e adicione um fluxo ou um artigo mais claro para fechar a lacuna.`},tags:{events:`Eventos`,product:`Produto`,release:`Lançamento`,ai:`IA`,languages:`Idiomas`,integrations:`Integrações`,slack:`Slack`,inbox:`Caixa de entrada`,privacy:`Privacidade`,security:`Segurança`,mobile:`Móvel`,beta:`Beta`,analytics:`Análises`},categories:{company:`Empresa`,product:`Produto`,engineering:`Engenharia`}},n={categories:{"demo-cat-getting-started":{title:`Primeiros passos`,description:`Instale o widget e configure a sua primeira conversa.`},"demo-cat-automation":{title:`Automatização`,description:`Fluxos, acionadores e a resposta automática da IA.`},"demo-cat-integrations":{title:`Integrações`,description:`Ligue o seu CRM, Slack e CMS.`},"demo-cat-billing":{title:`Faturação e planos`,description:`Escalões de preço, faturas e gestão de lugares.`}},articles:{"demo-article-install":{title:`Instale o widget da Wexio no seu site`,excerpt:`Um snippet de 30 segundos que cola antes da tag de fecho </body>.`,body:`## Adicione o script do loader

Cole este snippet em todas as páginas onde quer que o widget apareça:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

O loader insere um launcher flutuante no canto inferior direito. Clique nele para abrir o painel de chat.

## Verifique a instalação

- Visite uma página que inclua o snippet.
- Abra a consola do navegador.
- Deverá ver \`[wexio] widget mounted\`.

## Personalize o aspeto

O widget lê as cores da marca a partir do seu painel. Atualize-as em **Definições → Marca**.

> Precisa de ajuda? Toque em "Ainda precisa de ajuda? Envie-nos uma mensagem" abaixo e nós orientamo-lo.`},"demo-article-flows":{title:`Crie o seu primeiro fluxo de automatização`,excerpt:`Arraste, solte e publique um bot de boas-vindas em menos de cinco minutos.`,body:`## O que é um fluxo?

Um fluxo é uma pequena árvore de passos de conversa - perguntas, respostas e condições - que corre sempre que um visitante corresponde a um acionador.

## Três tipos de acionador

1. **Visitante abriu o widget** - dê as boas-vindas a quem chega pela primeira vez.
2. **Visitante fez uma pergunta** - a Gaia (IA) tenta responder; se não conseguir, o fluxo assume.
3. **Webhook recebido** - o seu CMS ou plataforma de comércio eletrónico envia um evento; o fluxo arranca no chat certo.

## Boas práticas

- Mantenha as primeiras respostas abaixo de 80 caracteres.
- Ofereça 2-3 botões de resposta rápida, não uma pergunta aberta.
- Ofereça sempre uma saída - *"Falar com uma pessoa"*.`},"demo-article-slack":{title:`Reencaminhe chats para o Slack`,excerpt:`Espelhe cada nova conversa num canal do Slack à sua escolha.`,body:`## Ligue o seu espaço de trabalho

Em **Integrações → Slack**, clique em *Ligar*. Será redirecionado para o ecrã de OAuth do Slack - aprove as permissões pedidas (\`chat:write\`, \`channels:read\`).

## Escolha um canal

Depois de autorizar, escolha o canal de destino (ou crie um novo, como \`#support\`).

## O que é reencaminhado

- A mensagem inicial, com uma ligação direta para a caixa de entrada da wexio.
- Respostas dos operadores como mensagens em thread.
- Respostas do visitante em tempo real através da ponte SSE.

## Sentido inverso

Os operadores podem responder *a partir do* Slack - a wexio escuta as respostas nas threads do Slack e envia-as de volta ao widget.`},"demo-article-billing":{title:`Atualize o seu plano e os dados de faturação`,excerpt:`Mude de escalão, altere o cartão ou transfira faturas.`,body:`## Planos

- **Free** - 1 widget, funcionalidades básicas, selo "Powered by Wexio".
- **Standard** - widgets ilimitados, automatizações, integrações.
- **Enterprise** - white-label, SLA, apoio dedicado.

## Alterar o plano

**Definições → Faturação → Alterar plano**. As subidas de plano têm efeito imediato; as descidas aplicam-se no fim do ciclo atual.

## Faturas

Transfira cada fatura em PDF em **Faturação → Histórico**. Também enviamos uma cópia por e-mail em cada renovação.`},"demo-article-theme":{title:`Personalize o tema do widget`,excerpt:`Combine o widget com a sua marca - cores, raios, modo escuro.`,body:`## Cores da marca

Em **Definições → Marca**, defina:

- **Primária** - define o launcher, o botão de enviar e os anéis de foco.
- **Fundo** - a superfície do painel (claro) e o par do modo escuro.

## Raios

Escolha entre \`sm\`, \`md\`, \`lg\` para um aspeto mais reto ou mais suave. A alteração aplica-se em direto a todos os widgets em todas as páginas.

## Modo escuro

Predefinição = seguir a preferência do sistema do visitante. Fixe em **sempre claro** ou **sempre escuro** se o seu site não suportar modo escuro.`},"demo-article-handoff":{title:`Transfira da Gaia para um operador humano`,excerpt:`Quando a IA não chega - encaminhe o visitante para um colega.`,body:`## Acionadores

A Gaia transfere automaticamente quando:

- O visitante escreve *"falar com uma pessoa"* (ou qualquer variante localizada).
- A mesma pergunta é feita duas vezes sem resolução.
- A intenção do visitante corresponde a uma regra de encaminhamento (por ex., faturação → equipa financeira).

## Encaminhamento

Configure **Encaminhamento → Regras** para dirigir certas intenções a equipas ou operadores específicos. São suportados round-robin e o menos carregado.

## Fora de horas

Se nenhum operador estiver online, a Gaia oferece um formulário de chamada de retorno ou de transferência por e-mail, em vez de fingir que há alguém disponível.`},"demo-article-crm":{title:`Sincronize conversas com o seu CRM`,excerpt:`Envie cada chat para o HubSpot, Salesforce ou Pipedrive.`,body:`## CRM suportados

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (token de API)
- Personalizado através de webhooks

## O que é sincronizado

- As novas conversas criam um contacto (se ainda não existir) e uma nota.
- As respostas dos operadores são adicionadas à cronologia do contacto.
- As etiquetas aplicadas na wexio são espelhadas no CRM.

## Nos dois sentidos

As notas dos operadores adicionadas no CRM podem voltar à wexio através do recetor de webhook - veja *Integrações → Webhooks → Entrada*.`},"demo-article-shortcuts":{title:`Atalhos de teclado para operadores`,excerpt:`Faça a triagem duas vezes mais depressa - sem rato.`,body:"## Navegação na caixa de entrada\n\n- `j` / `k` - conversa seguinte / anterior\n- `e` - resolver\n- `a` - atribuir a mim\n- `s` - adiar\n\n## Editor de respostas\n\n- `Cmd+Enter` - enviar\n- `/` - abrir o seletor de respostas guardadas\n- `Cmd+K` - paleta de comandos (tudo)\n\n## Dica\n\nPasse o cursor sobre qualquer botão do painel - a dica mostra o atalho."}},tags:{setup:`Configuração`,install:`Instalação`,automation:`Automatização`,flows:`Fluxos`,integrations:`Integrações`,slack:`Slack`,billing:`Faturação`,plans:`Planos`,design:`Design`,ai:`IA`,crm:`CRM`,productivity:`Produtividade`,inbox:`Caixa de entrada`}},r={visitorName:`Você`,messages:{"m-demo-1":{text:`Olá 👋 Sou a Gaia, a IA da Wexio. Em que posso ajudar?`,ageLabel:`9:41`,buttons:[`Como funcionam os preços?`,`O que consegue fazer?`,`Falar com uma pessoa`]},"m-demo-2":{text:`Pode mostrar-me como é o widget?`,ageLabel:`9:41`},"m-demo-3":{text:``,ageLabel:`9:42`,mediaAlts:[`Captura de ecrã do produto`]},"m-demo-4":{text:``,ageLabel:`9:42`,mediaAlts:[`Globo a rodar`]},"m-demo-5":{text:`Boa! 😄 Aqui ficam alguns ecrãs da nossa equipa.`,ageLabel:`9:43`},"m-demo-6":{text:`Alguns destaques do painel`,ageLabel:`9:43`,mediaAlts:[`Visão geral do painel`,`Análises`,`Caixa de entrada`,`Relatórios`]},"m-demo-7":{text:``,ageLabel:`9:44`,mediaAlts:[`Visita rápida`]},"m-demo-8":{text:``,ageLabel:`9:44`,mediaAlts:[`Mensagem de voz`]},"m-demo-9":{text:``,ageLabel:`9:45`,mediaAlts:[`Guia de primeiros passos`]},"m-demo-9b":{text:``,ageLabel:`9:45`,mediaAlts:[`Integrações do Wexio`]},"m-demo-10":{text:`Pronto para experimentar por si?`,ageLabel:`9:45`,buttons:[`Abrir a sandbox`,`Marcar uma chamada`,`Continuar a conversar`]}}},i={messengerDescription:`A nossa equipa também pode ajudar`,messengerMessage:`Olá 👋 Pergunte-nos o que quiser ou escolha uma ação rápida.`},a={welcome:{system:`Está agora a conversar com a Gaia, a nossa assistente de IA.`,hint:`Dica: anexe um ficheiro ou grave uma mensagem de voz a qualquer momento.`,greeting:`Olá 👋 Sou a Gaia, a IA da Wexio. Pergunte-me o que quiser ou escolha uma ação rápida para começar.`},replies:{pricing:{text:`A Wexio é gratuita para um widget; os planos pagos começam em $39/mês e desbloqueiam automatizações, integrações e white-label.`,planBtn:`Ver escalões de planos`,salesBtn:`Falar com vendas`},gaia:{text:`A Gaia é o agente de IA que responde de imediato às perguntas dos visitantes. Aprende com os seus artigos de ajuda e passa para uma pessoa quando não consegue ajudar.`,handoffBtn:`Como funciona a transferência?`},human:{text:`Claro - vou chamar o Alex, da equipa. Responde em poucos minutos durante o horário de expediente.`},fallback:{text:`Percebido - vou verificar e já volto com uma resposta.`},voice:{text:`Recebi a sua mensagem de voz - vou verificar e já volto.`}}},o={main:`Pronto para experimentar por si?`,billing:`Obrigada! Encaminhei a sua dúvida sobre a fatura para a equipa de faturação.`,integrations:`Como ligo o WhatsApp à minha conta?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-Dy2T3sIZ2.js.map