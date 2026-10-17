globalThis.process===void 0&&(globalThis.process={env:{},nextTick:function(e){setTimeout(e,0)},emit:function(){return!1}});import"react";import"react-dom";import"react/jsx-runtime";import"react-dom/client";var e={sender:`Gaia`,preview:`Hola 👋 Gracias por escribirnos. Te respondo en un momento…`,ageLabel:`4 h`},t={"demo-news-1":{title:`Pioneer 2026: apunta la fecha`,excerpt:`Volvemos a San Francisco el 8 de octubre. Apertura de puertas a las 9, keynote a las 10.`,body:`## Qué esperar

La keynote de este año trata de lo que hemos lanzado en abierto y de lo que viene. Demos en directo, no diapositivas.

- **La hoja de ruta de Gaia** - hacia dónde irá nuestra IA en los próximos dos trimestres.
- **Historias de clientes** - tres equipos cuentan cómo redujeron a la mitad el tiempo de primera respuesta.
- **Talleres prácticos** - trae un portátil y crea un flujo con nuestros ingenieros.

## Cómo llegar

La sede es la Pier 27 Cruise Terminal, justo en el Embarcadero. La parada de BART más cercana es Embarcadero, a 12 minutos a pie junto al agua.

## Entradas

Las entradas anticipadas son limitadas y saldrán a la venta la próxima semana. Los clientes actuales tendrán prioridad, así que estate atento a tu bandeja de entrada.

> ¿No puedes asistir en persona? La keynote se emite en directo y las grabaciones estarán aquí esa misma tarde.`},"demo-news-2":{title:`Lo que lanzamos en abril`,excerpt:`Tres nuevos activadores de automatización y una búsqueda en la bandeja mucho más rápida.`,body:`<p>Abril fue un gran mes. Aquí tienes todo lo que lanzamos, de un vistazo:</p>
<table>
<thead><tr><th>Área</th><th>Qué cambió</th><th>Por qué importa</th></tr></thead>
<tbody>
<tr><td>Búsqueda en la bandeja</td><td>Resultados instantáneos mientras escribes</td><td>50 000 conversaciones, en menos de 100 ms</td></tr>
<tr><td>Automatización</td><td>Tres nuevos activadores</td><td>Carrito abandonado, página revisitada, visitante inactivo</td></tr>
<tr><td>Editor</td><td>El borrador sobrevive al cambio de pestaña</td><td>Se acabaron las respuestas a medias perdidas</td></tr>
<tr><td>Modo oscuro</td><td>Sin destello blanco al primer render</td><td>Carga más limpia en sitios oscuros</td></tr>
</tbody>
</table>
<p>Así funciona la nueva búsqueda - los resultados aparecen antes de que termines de escribir:</p>
<img src="https://picsum.photos/seed/wexio-search/1024/576" alt="Búsqueda en la bandeja que devuelve resultados al instante" />
<p>Toca la imagen para verla más de cerca. ¿Tienes alguna petición? Responde aquí - leemos todas.</p>`},"demo-news-3":{title:`Gaia ahora habla 28 idiomas`,excerpt:`Detecta automáticamente el idioma del visitante o fija uno. Sin configuración adicional.`,body:`<p>Gaia ahora responde en 28 idiomas, detectados automáticamente a partir del primer mensaje del visitante. Las preguntas que más escuchamos:</p>
<details><summary>¿Cómo funciona la detección de idioma?</summary><p>Gaia lee el mensaje inicial y responde en el mismo idioma. Si tus artículos de ayuda existen en ese idioma, los cita; si no, responde con la coincidencia más cercana y te avisa de la carencia.</p></details>
<details><summary>¿Puedo forzar un único idioma?</summary><p>Sí. Fija uno en <strong>Ajustes → IA → Idioma</strong> y Gaia se mantendrá en él escriba lo que escriba el visitante.</p></details>
<details><summary>¿Qué ven los operadores?</summary><p>Las transcripciones se quedan en el idioma de tu equipo, con el mensaje original guardado junto a la traducción.</p></details>
<p>Un vistazo rápido a Gaia cambiando de idioma a mitad de conversación:</p>
<img src="https://picsum.photos/seed/wexio-lang/1024/576" alt="Gaia respondiendo en varios idiomas" />`},"demo-news-4":{title:`Lleva las conversaciones directamente a Slack`,excerpt:`Conecta cualquier webhook entrante a un canal de Slack. Sin código intermedio.`,body:`## Conecta en dos clics

Ve a **Integraciones → Slack**, pulsa *Conectar* y aprueba los permisos. Elige el canal donde deben llegar las nuevas conversaciones - la mayoría de los equipos usa \`#support\`.

## Qué obtienes

- Un mensaje de Slack en cuanto empieza un chat, con un enlace de vuelta a la bandeja.
- Las respuestas de los operadores, en hilo bajo el mensaje original.
- Responde desde Slack y se lo enviamos al visitante en tiempo real.

## También webhooks

¿Ya envías eventos desde tus propios sistemas? Apunta cualquier webhook a tu canal de Slack y olvídate de la integración a medida.`},"demo-news-5":{title:`Bandeja 2.0: clasifica sin ratón`,excerpt:`Nuevos atajos para asignar, posponer y resolver - todo desde el teclado.`,body:`<p>La Bandeja 2.0 prioriza el teclado. Aquí tienes la chuleta, agrupada por lo que estás haciendo:</p>
<div data-type="tabs">
<div data-type="tab"><div data-tab-label>Navegar</div><ul><li><code>j</code> / <code>k</code> - conversación siguiente / anterior</li><li><code>g</code> luego <code>i</code> - ir a la bandeja</li></ul></div>
<div data-type="tab"><div data-tab-label>Actuar</div><ul><li><code>e</code> - resolver</li><li><code>a</code> - asignármela</li><li><code>s</code> - posponer</li></ul></div>
<div data-type="tab"><div data-tab-label>Redactar</div><ul><li><code>Cmd+Enter</code> - enviar</li><li><code>/</code> - respuestas guardadas</li><li><code>Cmd+K</code> - paleta de comandos</li></ul></div>
</div>
<p>La bandeja rediseñada - todo al alcance de una tecla:</p>
<img src="https://picsum.photos/seed/wexio-inbox/1024/576" alt="La bandeja rediseñada, pensada para el teclado" />`},"demo-news-6":{title:`Exportación y eliminación de datos por autoservicio`,excerpt:`Gestiona las solicitudes de datos de los visitantes con un clic. Listo para el RGPD desde el primer día.`,body:`## Exportar

Desde el perfil de cualquier visitante, pulsa **Exportar datos** para generar un paquete JSON con todos los mensajes, eventos y atributos que guardamos de él. Se descarga al instante y la solicitud queda registrada para tu archivo.

## Eliminar

**Eliminar datos** borra al visitante y elimina sus mensajes de la bandeja, de la búsqueda y de cualquier CRM conectado a través del mismo puente de webhooks. La acción queda registrada y es irreversible.

## Para tu DPO

- Cada exportación y eliminación lleva marca de tiempo y autor.
- Los plazos de conservación se configuran por espacio de trabajo.
- Hay un acuerdo de encargado del tratamiento disponible bajo petición.`},"demo-news-7":{title:`Beta del SDK móvil: iOS y Android`,excerpt:`Lleva la misma conversación a tu app nativa. Plazas de la beta abiertas ya.`,body:`## Una conversación, todas las superficies

Un visitante que inicia un chat en tu web puede retomarlo en tu app, con sesión iniciada y con todo el historial. La misma Gaia, los mismos operadores, la misma bandeja.

## Qué incluye la beta

- Launcher nativo para SwiftUI y Jetpack Compose.
- Notificaciones push para nuevas respuestas.
- Cola sin conexión, para que los mensajes se envíen cuando vuelva la conexión.

## Cómo unirte

Incorporamos a un puñado de equipos cada semana. Responde aquí con tu plataforma y tus usuarios activos mensuales aproximados y te enviaremos una clave.

> Beta significa asperezas. Publicamos correcciones cada semana y leemos todos los informes de errores.`},"demo-news-8":{title:`Descubre qué respuestas de la IA funcionaron de verdad`,excerpt:`Comprueba si cada respuesta de Gaia terminó en una resolución, una derivación o un abandono.`,body:`## La nueva vista

**Analítica → Resultados de la IA** desglosa cada respuesta de Gaia según lo que ocurrió después:

- **Resuelto** - el visitante obtuvo lo que necesitaba y se fue satisfecho.
- **Derivado** - Gaia pasó la conversación a una persona.
- **Abandonado** - el visitante cerró el widget sin resolver su duda.

## Información por artículo

Entra en cualquier artículo de ayuda para ver con qué frecuencia lo cita Gaia y si esas citas resuelven. Una baja resolución en un artículo con mucho tráfico suele significar que hay que reescribir el contenido, no la IA.

## Actúa

Ordena por tasa de abandono para encontrar las preguntas con las que Gaia más tiene dificultades y luego añade un flujo o un artículo más preciso para cerrar la brecha.`},tags:{events:`Eventos`,product:`Producto`,release:`Lanzamiento`,ai:`IA`,languages:`Idiomas`,integrations:`Integraciones`,slack:`Slack`,inbox:`Bandeja`,privacy:`Privacidad`,security:`Seguridad`,mobile:`Móvil`,beta:`Beta`,analytics:`Analítica`},categories:{company:`Empresa`,product:`Producto`,engineering:`Ingeniería`}},n={categories:{"demo-cat-getting-started":{title:`Primeros pasos`,description:`Instala el widget y configura tu primera conversación.`},"demo-cat-automation":{title:`Automatización`,description:`Flujos, activadores y la respuesta automática de la IA.`},"demo-cat-integrations":{title:`Integraciones`,description:`Conecta tu CRM, Slack y CMS.`},"demo-cat-billing":{title:`Facturación y planes`,description:`Niveles de precios, facturas y gestión de puestos.`}},articles:{"demo-article-install":{title:`Instala el widget de Wexio en tu sitio`,excerpt:`Un fragmento de 30 segundos que pegas antes de la etiqueta de cierre </body>.`,body:`## Añade el script del cargador

Pega este fragmento en cada página donde quieras que aparezca el widget:

\`\`\`html
<script
  src="https://cdn.wexio.io/widget/loader.js"
  data-public-key="pk_live_YOUR_KEY"
><\/script>
\`\`\`

El cargador inserta un launcher flotante en la esquina inferior derecha. Haz clic para abrir el panel de chat.

## Verifica la instalación

- Visita una página que incluya el fragmento.
- Abre la consola del navegador.
- Deberías ver \`[wexio] widget mounted\`.

## Personaliza el aspecto

El widget lee los colores de marca de tu panel. Actualízalos en **Ajustes → Marca**.

> ¿Necesitas una mano? Toca "¿Aún necesitas ayuda? Escríbenos" más abajo y te guiaremos.`},"demo-article-flows":{title:`Crea tu primer flujo de automatización`,excerpt:`Arrastra, suelta y publica un bot de bienvenida en menos de cinco minutos.`,body:`## ¿Qué es un flujo?

Un flujo es un pequeño árbol de pasos de conversación - preguntas, respuestas y condiciones - que se ejecuta cada vez que un visitante cumple un activador.

## Tres tipos de activador

1. **El visitante abrió el widget** - da la bienvenida a quienes llegan por primera vez.
2. **El visitante hizo una pregunta** - Gaia (IA) intenta responder; si no puede, el flujo toma el relevo.
3. **Webhook recibido** - tu CMS o plataforma de comercio electrónico envía un evento; el flujo arranca en el chat correcto.

## Buenas prácticas

- Mantén las primeras respuestas por debajo de 80 caracteres.
- Ofrece 2-3 chips de respuesta rápida, no una pregunta de texto libre.
- Ofrece siempre una salida - *"Hablar con una persona"*.`},"demo-article-slack":{title:`Reenvía chats a Slack`,excerpt:`Replica cada nueva conversación en el canal de Slack que elijas.`,body:`## Conecta tu espacio de trabajo

En **Integraciones → Slack** haz clic en *Conectar*. Te redirigiremos a la pantalla OAuth de Slack - aprueba los permisos solicitados (\`chat:write\`, \`channels:read\`).

## Elige un canal

Tras autorizar, elige el canal de destino (o crea uno nuevo como \`#support\`).

## Qué se reenvía

- El mensaje inicial, con un enlace directo a la bandeja de wexio.
- Las respuestas de los operadores como mensajes en hilo.
- Las respuestas de los visitantes en tiempo real mediante el puente SSE.

## Sentido inverso

Los operadores pueden responder *desde* Slack - wexio escucha las respuestas en los hilos de Slack y las publica de vuelta en el widget.`},"demo-article-billing":{title:`Actualiza tu plan y tus datos de facturación`,excerpt:`Cambia de plan, cambia de tarjeta o descarga facturas.`,body:`## Planes

- **Free** - 1 widget, funciones básicas, insignia "Powered by Wexio".
- **Standard** - widgets ilimitados, automatizaciones, integraciones.
- **Enterprise** - marca blanca, SLA, soporte dedicado.

## Cambiar de plan

**Ajustes → Facturación → Cambiar de plan**. Las mejoras de plan se aplican de inmediato; las reducciones, al final del ciclo actual.

## Facturas

Descarga cada factura en PDF desde **Facturación → Historial**. También te enviamos una copia por correo en cada renovación.`},"demo-article-theme":{title:`Personaliza el tema del widget`,excerpt:`Adapta el widget a tu marca - colores, radios, modo oscuro.`,body:`## Colores de marca

En **Ajustes → Marca**, define:

- **Primario** - controla el launcher, el botón de enviar y los anillos de foco.
- **Fondo** - la superficie del panel (claro) y su par para el modo oscuro.

## Radios

Elige entre \`sm\`, \`md\` y \`lg\` para un aspecto más definido o más suave. El cambio se aplica en vivo a todos los widgets de todas las páginas.

## Modo oscuro

Por defecto = seguir la preferencia del sistema del visitante. Fíjalo en **siempre claro** o **siempre oscuro** si tu sitio no admite el modo oscuro.`},"demo-article-handoff":{title:`Derivar de Gaia a un operador humano`,excerpt:`Cuando la IA no basta - encamina al visitante a un compañero.`,body:`## Activadores

Gaia deriva automáticamente cuando:

- El visitante escribe *"hablar con una persona"* (o cualquier variante localizada).
- Se hace la misma pregunta dos veces sin resolución.
- La intención del visitante coincide con una regla de enrutamiento (p. ej., facturación → equipo de finanzas).

## Enrutamiento

Configura **Enrutamiento → Reglas** para dirigir ciertas intenciones a equipos u operadores concretos. Se admiten tanto round-robin como menor carga.

## Fuera de horario

Si no hay ningún operador conectado, Gaia ofrece un formulario de llamada de vuelta o de derivación por correo en lugar de fingir que hay alguien disponible.`},"demo-article-crm":{title:`Sincroniza conversaciones con tu CRM`,excerpt:`Envía cada chat a HubSpot, Salesforce o Pipedrive.`,body:`## CRM compatibles

- HubSpot (OAuth)
- Salesforce (OAuth)
- Pipedrive (token de API)
- Personalizado mediante webhooks

## Qué se sincroniza

- Las nuevas conversaciones crean un contacto (si aún no existe) y una nota.
- Las respuestas de los operadores se añaden a la cronología del contacto.
- Las etiquetas aplicadas en wexio se reflejan en el CRM.

## En ambos sentidos

Las notas de operador añadidas en el CRM pueden volver a wexio mediante el receptor de webhooks - consulta *Integraciones → Webhooks → Entrante*.`},"demo-article-shortcuts":{title:`Atajos de teclado para operadores`,excerpt:`Clasifica el doble de rápido - sin ratón.`,body:"## Navegación en la bandeja\n\n- `j` / `k` - conversación siguiente / anterior\n- `e` - resolver\n- `a` - asignármela\n- `s` - posponer\n\n## Editor\n\n- `Cmd+Enter` - enviar\n- `/` - abrir el selector de respuestas guardadas\n- `Cmd+K` - paleta de comandos (todo)\n\n## Consejo\n\nPasa el cursor por cualquier botón del panel - la información emergente muestra su atajo."}},tags:{setup:`Configuración`,install:`Instalación`,automation:`Automatización`,flows:`Flujos`,integrations:`Integraciones`,slack:`Slack`,billing:`Facturación`,plans:`Planes`,design:`Diseño`,ai:`IA`,crm:`CRM`,productivity:`Productividad`,inbox:`Bandeja`}},r={visitorName:`Tú`,messages:{"m-demo-1":{text:`Hola 👋 Soy Gaia, la IA de Wexio. ¿En qué puedo ayudarte?`,ageLabel:`9:41`,buttons:[`¿Cómo funcionan los precios?`,`¿Qué puede hacer?`,`Hablar con una persona`]},"m-demo-2":{text:`¿Puedes enseñarme cómo se ve el widget?`,ageLabel:`9:41`},"m-demo-3":{text:``,ageLabel:`9:42`,mediaAlts:[`Captura de pantalla del producto`]},"m-demo-4":{text:``,ageLabel:`9:42`,mediaAlts:[`Globo terráqueo giratorio`]},"m-demo-5":{text:`¡Genial! 😄 Aquí tienes unas vistas de nuestro equipo.`,ageLabel:`9:43`},"m-demo-6":{text:`Algunos puntos destacados del panel`,ageLabel:`9:43`,mediaAlts:[`Resumen del panel`,`Analítica`,`Bandeja`,`Informes`]},"m-demo-7":{text:``,ageLabel:`9:44`,mediaAlts:[`Recorrido rápido`]},"m-demo-8":{text:``,ageLabel:`9:44`,mediaAlts:[`Nota de voz`]},"m-demo-9":{text:``,ageLabel:`9:45`,mediaAlts:[`Guía de primeros pasos`]},"m-demo-9b":{text:``,ageLabel:`9:45`,mediaAlts:[`Integraciones de Wexio`]},"m-demo-10":{text:`¿Listo para probarlo tú mismo?`,ageLabel:`9:45`,buttons:[`Abrir sandbox`,`Reservar una llamada`,`Seguir chateando`]}}},i={messengerDescription:`Nuestro equipo también puede ayudarte`,messengerMessage:`Hola 👋 Pregúntanos lo que quieras o elige una acción rápida.`},a={welcome:{system:`Ahora estás chateando con Gaia, nuestra asistente de IA.`,hint:`Consejo: adjunta un archivo o graba una nota de voz cuando quieras.`,greeting:`Hola 👋 Soy Gaia, la IA de Wexio. Pregúntame lo que quieras o elige una acción rápida para empezar.`},replies:{pricing:{text:`Wexio es gratis para un widget; los planes de pago empiezan en 39 $/mes y desbloquean automatizaciones, integraciones y marca blanca.`,planBtn:`Ver niveles de planes`,salesBtn:`Hablar con ventas`},gaia:{text:`Gaia es el agente de IA que responde al instante las preguntas de los visitantes. Aprende de tus artículos de ayuda y deriva a una persona cuando no puede ayudar.`,handoffBtn:`¿Cómo funciona la derivación?`},human:{text:`Por supuesto - aviso a Alex, del equipo. Responderá en pocos minutos en horario laboral.`},fallback:{text:`Entendido - voy a comprobarlo y te respondo en un momento.`},voice:{text:`He recibido tu nota de voz - la reviso y te respondo enseguida.`}}},o={main:`¿Listo para probarlo tú mismo?`,billing:`¡Gracias! He pasado tu consulta sobre la factura al equipo de facturación.`,integrations:`¿Cómo conecto WhatsApp a mi cuenta?`},s={recentMessage:e,news:t,help:n,conversation:r,playgroundDefaults:i,messenger:a,threads:o};export{r as conversation,s as default,n as help,a as messenger,t as news,i as playgroundDefaults,e as recentMessage,o as threads};
//# sourceMappingURL=widget-react-C1rXlCoj.js.map