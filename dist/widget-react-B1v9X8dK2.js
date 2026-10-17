globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Olá 👋 Obrigada por entrar em contato. Já volto com uma resposta…`,ageLabel:`4h`},t={"demo-news-1":{title:`Pioneer 2026: reserve a data`,excerpt:`Voltamos a São Francisco em 8 de outubro. Portas abertas às 9h, keynote às 10h.`,body:`## O que esperar

A keynote deste ano é toda sobre o que lançamos abertamente e o que vem por aí. Demos ao vivo, não slides.

- **O roadmap da Gaia** - para onde nossa IA vai nos próximos dois trimestres.
- **Histórias de clientes** - três equipes contam como reduziram pela metade o tempo de primeira resposta.
- **Laboratórios práticos** - traga um notebook e monte um fluxo com nossos engenheiros.

## Como chegar

O local é o Pier 27 Cruise Terminal, na beira do Embarcadero. A estação de BART mais próxima é a Embarcadero, a 12 minutos a pé à beira da água.

## Ingressos

As vagas early bird são limitadas e abrem na semana que vem. Clientes atuais têm prioridade, então fique de olho na sua caixa de entrada.

> Não pode ir pessoalmente? A keynote será transmitida ao vivo e as gravações chegam aqui na mesma noite.`},"demo-news-2":{title:`O que lançamos em abril`,excerpt:`Três novos gatilhos de automação e uma busca na caixa de entrada muito mais rápida.`,body:`<p>Abril foi um mês cheio. Veja tudo o que lançamos, num relance:</p>
<table>
<thead><tr><th>Área</th><th>O que mudou</th><th>Por que importa</th></tr></thead>
<tbody>
<tr><td>Busca na caixa de entrada</td><td>Resultados instantâneos enquanto você digita</td><td>50 mil conversas, em menos de 100 ms</td></tr>
<tr><td>Automação</td><td>Três novos gatilhos</td><td>Carrinho abandonado, página revisitada, visitante quieto</td></tr>
<tr><td>Editor de respostas</td><td>O rascunho sobrevive à troca de aba</td><td>Chega de respostas pela metade perdidas</td></tr>
<tr><td>Modo escuro</td><td>Sem flash branco na primeira renderização</td><td>Carregamento mais limpo em sites escuros</td></tr>
</tbody>
</table>
<p>Veja a nova busca em ação - os resultados aparecem antes de você terminar de digitar:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Busca na caixa de entrada mostrando resultados instantaneamente" />
<p>Toque na imagem para ver de perto. Tem algum pedido? Responda aqui - lemos todos.</p>`},"demo-news-3":{title:`A Gaia agora fala 28 idiomas`,excerpt:`Detecte o idioma do visitante automaticamente ou fixe um. Sem configuração extra.`,body:`<p>A Gaia agora responde em 28 idiomas, detectados automaticamente a partir da primeira mensagem do visitante. As perguntas que mais ouvimos:</p>
<details><summary>Como funciona a detecção de idioma?</summary><p>A Gaia lê a mensagem inicial e responde no mesmo idioma. Se seus artigos de ajuda existirem nesse idioma, ela os cita; caso contrário, responde com base na correspondência mais próxima e avisa você sobre a lacuna.</p></details>
<details><summary>Posso forçar um único idioma?</summary><p>Sim. Fixe um em <strong>Configurações → IA → Idioma</strong> e a Gaia se mantém nele, não importa o que o visitante digite.</p></details>
<details><summary>O que os atendentes veem?</summary><p>As transcrições ficam no idioma da sua equipe, com a mensagem original guardada junto da tradução.</p></details>
<p>Uma olhada rápida na Gaia trocando de idioma no meio da conversa:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia respondendo em vários idiomas" />`},"demo-news-4":{title:`Envie conversas direto para o Slack`,excerpt:`Conecte qualquer webhook de entrada a um canal do Slack. Sem código intermediário.`,body:`## Conecte em dois cliques

Vá em **Integrações → Slack**, clique em *Conectar* e aprove as permissões. Escolha o canal para onde as novas conversas devem ir - a maioria das equipes usa \`#support\`.

## O que você recebe

- Uma mensagem no Slack assim que um chat começa, com link de volta para a caixa de entrada.
- Respostas dos atendentes em thread sob a mensagem original.
- Responda direto do Slack e nós enviamos ao visitante em tempo real.

## Webhooks também

Já envia eventos dos seus próprios sistemas? Aponte qualquer webhook para o seu canal do Slack e dispense a integração personalizada.`},"demo-news-5":{title:`Inbox 2.0: triagem sem mouse`,excerpt:`Novos atalhos para atribuir, adiar e resolver - tudo pelo teclado.`,body:`<p>O Inbox 2.0 é feito para o teclado. Aqui está a cola, agrupada pelo que você está fazendo:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Navegar</div><ul><li><code>j</code> / <code>k</code> - próxima / anterior conversa</li><li><code>g</code> e depois <code>i</code> - ir para a caixa de entrada</li></ul></div>
<div data-type="tab"><div data-tab-label>Agir</div><ul><li><code>e</code> - resolver</li><li><code>a</code> - atribuir a mim</li><li><code>s</code> - adiar</li></ul></div>
<div data-type="tab"><div data-tab-label>Escrever</div><ul><li><code>Cmd+Enter</code> - enviar</li><li><code>/</code> - respostas salvas</li><li><code>Cmd+K</code> - paleta de comandos</li></ul></div>
</div>
<p>A caixa de entrada redesenhada - tudo ao alcance de uma tecla:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="A caixa de entrada redesenhada, focada no teclado" />`},"demo-news-6":{title:`Exportação e exclusão de dados por autoatendimento`,excerpt:`Atenda solicitações de dados de visitantes com um clique. Pronto para a LGPD logo de cara.`,body:`## Exportar

No perfil de qualquer visitante, clique em **Exportar dados** para gerar um pacote JSON com todas as mensagens, eventos e atributos que guardamos dele. O download é imediato e a solicitação fica registrada para o seu controle.

## Excluir

**Excluir dados** remove o visitante e apaga as mensagens dele da caixa de entrada, da busca e de qualquer CRM conectado pela mesma ponte de webhook. A ação é registrada e irreversível.

## Para o seu encarregado de dados (DPO)

- Toda exportação e exclusão tem data, hora e autor.
- Os prazos de retenção são configuráveis por workspace.
- Um acordo de processamento de dados está disponível sob solicitação.`},"demo-news-7":{title:`SDK mobile em beta: iOS e Android`,excerpt:`Leve a mesma conversa para o seu app nativo. Vagas do beta abertas agora.`,body:`## Uma conversa, todas as telas

Um visitante que inicia um chat no seu site pode continuá-lo no seu app, logado e com todo o histórico. A mesma Gaia, os mesmos atendentes, a mesma caixa de entrada.

## O que há no beta

- Launcher nativo para SwiftUI e Jetpack Compose.
- Notificações push para novas respostas.
- Fila offline, para que as mensagens sejam enviadas quando a conexão voltar.

## Participe

Estamos integrando algumas equipes por semana. Responda aqui com a sua plataforma e uma estimativa de usuários ativos mensais, e enviaremos uma chave.

> Beta significa arestas a aparar. Lançamos correções toda semana e lemos cada relato de bug.`},"demo-news-8":{title:`Veja quais respostas da IA realmente funcionaram`,excerpt:`Acompanhe se cada resposta da Gaia levou a uma resolução, a um repasse ou a uma desistência.`,body:`## A nova visão

**Análises → Resultados da IA** detalha cada resposta da Gaia pelo que aconteceu depois:

- **Resolvido** - o visitante conseguiu o que precisava e saiu satisfeito.
- **Repassado** - a Gaia passou a conversa para uma pessoa.
- **Desistência** - o visitante fechou o widget sem resolver.

## Insights por artigo

Entre em qualquer artigo de ajuda para ver com que frequência a Gaia o cita e se essas citações resolvem. Pouca resolução em um artigo de muito acesso geralmente significa que o conteúdo precisa ser reescrito, não a IA.

## Aja com base nisso

Ordene pela taxa de desistência para achar as perguntas em que a Gaia mais tem dificuldade e adicione um fluxo ou um artigo mais claro para fechar a lacuna.`},tags:{events:`Eventos`,product:`Produto`,release:`Lançamento`,ai:`IA`,languages:`Idiomas`,integrations:`Integrações`,slack:`Slack`,inbox:`Caixa de entrada`,privacy:`Privacidade`,security:`Segurança`,mobile:`Mobile`,beta:`Beta`,analytics:`Análises`},categories:{company:`Empresa`,product:`Produto`,engineering:`Engenharia`}},n={categories:{"demo-cat-getting-started":{title:`Primeiros passos`,description:`Instale o widget e configure sua primeira conversa.`},"demo-cat-automation":{title:`Automação`,description:`Fluxos, gatilhos e a resposta automática da IA.`},"demo-cat-integrations":{title:`Integrações`,description:`Conecte seu CRM, Slack e CMS.`},"demo-cat-billing":{title:`Cobrança e planos`,description:`Faixas de preço, faturas e gestão de assentos.`}},articles:{"demo-article-install":{title:`Instale o widget da Wexio no seu site`,excerpt:`Um snippet de 30 segundos que você cola antes da tag de fechamento </body>.`,body:`## Adicione o script do loader

Cole este snippet em todas as páginas em que você quer que o widget apareça:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

O loader insere um launcher flutuante no canto inferior direito. Clique nele para abrir o painel de chat.

## Verifique a instalação

- Acesse uma página que inclua o snippet.
- Abra o console do navegador.
- Você deve ver \`[wexio] widget mounted\`.

## Personalize o visual

O widget lê as cores da marca no seu painel. Atualize-as em **Configurações → Marca**.

> Precisa de ajuda? Toque em "Ainda precisa de ajuda? Envie uma mensagem" abaixo e nós guiamos você.`},"demo-article-flows":{title:`Crie seu primeiro fluxo de automação`,excerpt:`Arraste, solte e publique um bot de boas-vindas em menos de cinco minutos.`,body:`## O que é um fluxo?

Um fluxo é uma pequena árvore de etapas de conversa - perguntas, respostas e condições - que roda sempre que um visitante corresponde a um gatilho.

## Três tipos de gatilho

1. **Visitante abriu o widget** - dê boas-vindas a quem chega pela primeira vez.
2. **Visitante fez uma pergunta** - a Gaia (IA) tenta responder; se não conseguir, o fluxo assume.
3. **Webhook recebido** - seu CMS ou plataforma de e-commerce envia um evento; o fluxo começa no chat certo.

## Boas práticas

- Mantenha as primeiras respostas com menos de 80 caracteres.
- Ofereça 2-3 botões de resposta rápida, não uma pergunta aberta.
- Sempre ofereça uma saída - *"Falar com uma pessoa"*.`},"demo-article-slack":{title:`Encaminhe chats para o Slack`,excerpt:`Espelhe cada nova conversa em um canal do Slack à sua escolha.`,body:`## Conecte seu workspace

Em **Integrações → Slack**, clique em *Conectar*. Você será redirecionado à tela de OAuth do Slack - aprove as permissões solicitadas (\`chat:write\`, \`channels:read\`).

## Escolha um canal

Depois de autorizar, escolha o canal de destino (ou crie um novo, como \`#support\`).

## O que é encaminhado

- A mensagem inicial, com um deeplink de volta para a caixa de entrada da wexio.
- Respostas dos atendentes como mensagens em thread.
- Respostas do visitante em tempo real pela ponte SSE.

## Direção inversa

Os atendentes podem responder *a partir do* Slack - a wexio escuta as respostas nas threads do Slack e as envia de volta ao widget.`},"demo-article-billing":{title:`Atualize seu plano e seus dados de cobrança`,excerpt:`Troque de plano, mude o cartão ou baixe faturas.`,body:`## Planos

- **Free** - 1 widget, recursos básicos, selo "Powered by Wexio".
- **Standard** - widgets ilimitados, automações, integrações.
- **Enterprise** - white-label, SLA, suporte dedicado.

## Trocar de plano

**Configurações → Cobrança → Alterar plano**. Upgrades entram em vigor na hora; downgrades valem a partir do fim do ciclo atual.

## Faturas

Baixe cada fatura em PDF em **Cobrança → Histórico**. Também enviamos uma cópia por e-mail a cada renovação.`},"demo-article-theme":{title:`Personalize o tema do widget`,excerpt:`Combine o widget com a sua marca - cores, raios, modo escuro.`,body:`## Cores da marca

Em **Configurações → Marca**, defina:

- **Primária** - define o launcher, o botão de enviar e os anéis de foco.
- **Fundo** - a superfície do painel (claro) e o par do modo escuro.

## Raios

Escolha entre \`sm\`, \`md\`, \`lg\` para um visual mais reto ou mais suave. A mudança vale ao vivo para todos os widgets em todas as páginas.

## Modo escuro

Padrão = seguir a preferência do sistema do visitante. Fixe em **sempre claro** ou **sempre escuro** se o seu site não oferece modo escuro.`},"demo-article-handoff":{title:`Repasse da Gaia para um atendente humano`,excerpt:`Quando a IA não basta - encaminhe o visitante a um colega.`,body:`## Gatilhos

A Gaia repassa automaticamente quando:

- O visitante digita *"falar com uma pessoa"* (ou qualquer variante localizada).
- A mesma pergunta é feita duas vezes sem resolução.
- A intenção do visitante corresponde a uma regra de roteamento (por ex., cobrança → equipe financeira).

## Roteamento

Configure **Roteamento → Regras** para direcionar certas intenções a equipes ou atendentes específicos. Há suporte para round-robin e menos carregado.

## Fora do horário

Se nenhum atendente estiver online, a Gaia oferece um formulário de retorno de chamada ou repasse por e-mail, em vez de fingir que há alguém disponível.`},"demo-article-crm":{title:`Sincronize conversas com o seu CRM`,excerpt:`Envie cada chat para o HubSpot, Salesforce ou Pipedrive.`,body:`## CRMs compatíveis

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (token de API)
- Personalizado via webhooks

## O que é sincronizado

- Novas conversas criam um contato (se ainda não existir) e uma nota.
- As respostas dos atendentes são adicionadas à linha do tempo do contato.
- As tags aplicadas na wexio são espelhadas no CRM.

## Nos dois sentidos

Notas de atendentes adicionadas no CRM podem voltar para a wexio pelo receptor de webhook - veja *Integrações → Webhooks → Entrada*.`},"demo-article-shortcuts":{title:`Atalhos de teclado para atendentes`,excerpt:`Faça a triagem duas vezes mais rápido - sem mouse.`,body:"## Navegação na caixa de entrada\n\n- `j` / `k` - próxima / anterior conversa\n- `e` - resolver\n- `a` - atribuir a mim\n- `s` - adiar\n\n## Editor de respostas\n\n- `Cmd+Enter` - enviar\n- `/` - abrir o seletor de respostas salvas\n- `Cmd+K` - paleta de comandos (tudo)\n\n## Dica\n\nPasse o mouse sobre qualquer botão do painel - a dica mostra o atalho."}},tags:{setup:`Configuração`,install:`Instalação`,automation:`Automação`,flows:`Fluxos`,integrations:`Integrações`,slack:`Slack`,billing:`Cobrança`,plans:`Planos`,design:`Design`,ai:`IA`,crm:`CRM`,productivity:`Produtividade`,inbox:`Caixa de entrada`}},r={visitorName:`Você`,messages:{"m-demo-1":{text:`Olá 👋 Eu sou a Gaia, a IA da Wexio. Como posso ajudar?`,ageLabel:`9:41`,buttons:[`Como funcionam os preços?`,`O que ela pode fazer?`,`Falar com uma pessoa`]},"m-demo-2":{text:`Você pode me mostrar como é o widget?`,ageLabel:`9:41`},"m-demo-3":{text:``,ageLabel:`9:42`,mediaAlts:[`Captura de tela do produto`]},"m-demo-4":{text:``,ageLabel:`9:42`,mediaAlts:[`Globo girando`]},"m-demo-5":{text:`Legal! 😄 Aqui estão algumas telas da nossa equipe.`,ageLabel:`9:43`},"m-demo-6":{text:`Alguns destaques do painel`,ageLabel:`9:43`,mediaAlts:[`Visão geral do painel`,`Análises`,`Caixa de entrada`,`Relatórios`]},"m-demo-7":{text:``,ageLabel:`9:44`,mediaAlts:[`Tour rápido`]},"m-demo-8":{text:``,ageLabel:`9:44`,mediaAlts:[`Mensagem de voz`]},"m-demo-9":{text:``,ageLabel:`9:45`,mediaAlts:[`Guia de primeiros passos`]},"m-demo-9b":{text:``,ageLabel:`9:45`,mediaAlts:[`Integrações do Wexio`]},"m-demo-10":{text:`Pronto para experimentar você mesmo?`,ageLabel:`9:45`,buttons:[`Abrir o sandbox`,`Agendar uma chamada`,`Continuar conversando`]}}},i={messengerDescription:`Nossa equipe também pode ajudar`,messengerMessage:`Oi 👋 Pergunte o que quiser ou escolha uma ação rápida.`},a={welcome:{system:`Você está conversando com a Gaia, nossa assistente de IA.`,hint:`Dica: anexe um arquivo ou grave uma mensagem de voz a qualquer momento.`,greeting:`Olá 👋 Eu sou a Gaia, a IA da Wexio. Pergunte o que quiser ou escolha uma ação rápida para começar.`},replies:{pricing:{text:`A Wexio é gratuita para um widget; os planos pagos começam em $39/mês e liberam automações, integrações e white-label.`,planBtn:`Ver faixas de planos`,salesBtn:`Falar com vendas`},gaia:{text:`A Gaia é o agente de IA que responde às dúvidas dos visitantes na hora. Ela aprende com os seus artigos de ajuda e passa para uma pessoa quando não consegue ajudar.`,handoffBtn:`Como funciona o repasse?`},human:{text:`Claro - vou chamar o Alex, da equipe. Ele responde em poucos minutos no horário comercial.`},fallback:{text:`Entendi - vou verificar isso e já volto com uma resposta.`},voice:{text:`Recebi sua mensagem de voz - vou verificar e já volto.`}}},o={main:`Pronto para experimentar você mesmo?`,billing:`Obrigada! Encaminhei sua dúvida sobre a fatura para a equipe de cobrança.`,integrations:`Como conecto o WhatsApp à minha conta?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-B1v9X8dK2.js.map