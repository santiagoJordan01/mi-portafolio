const publicAsset = (fileName) => `${import.meta.env.BASE_URL}${encodeURIComponent(fileName)}`

const categoryLabels = {
  es: {
    all: 'Todos',
    automation: 'Automatización',
    operations: 'Operación',
    product: 'Producto',
  },
  en: {
    all: 'All',
    automation: 'Automation',
    operations: 'Operations',
    product: 'Product',
  },
}

const shared = {
  brand: 'codev',
  name: 'Santiago Jordán Vargas',
  contactUrl:
    'https://mail.google.com/mail/?view=cm&fs=1&to=santijordanv@gmail.com&su=Oportunidad%20Full%20Stack&body=Hola%20Santiago%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar.',
  whatsappUrl:
    'https://wa.me/573228343350?text=Hola%20Santiago%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar.',
  social: {
    linkedin: 'https://www.linkedin.com/in/santiago-jord%C3%A1n-vargas-156363246/',
    github: 'https://github.com/santiagoJordan01',
    email: 'santijordanv@gmail.com',
    phone: '322 834 3350',
    phoneRaw: '573228343350',
  },
  profileImage: publicAsset('foto de perfil portfolio.jpg'),
  cvUrl: publicAsset('hoja de vida Santiago Jordan Vargas.pdf'),
  projects: [
    {
      slug: 'campanas-correos-mern',
      categoryKey: 'automation',
      title: 'Campañas de correo',
      titleEn: 'Email campaigns',
      whatEs: 'Herramienta para enviar correos masivos y ver si cada campaña está en espera, enviada o fallida.',
      whatEn: 'A tool to send bulk email and see whether each campaign is waiting, sent, or failed.',
      roleEs: 'Diseñé la fila de espera y el panel para que el operador lance la campaña y siga el estado sin quedarse bloqueado.',
      roleEn: 'I designed the waiting line and the panel so the operator can launch a campaign and follow its status without the screen locking.',
      tone: 'tone-cyan',
      tags: ['React', 'Node.js', 'Express', 'MySQL', 'Redis', 'Bull', 'Mailjet'],
      demoUrl: '',
      repoUrl: 'https://github.com/santiagoJordan01/Proyecto-MERN-de-campa-a-de-correos',
      highlightEs: 'El envío masivo corre en segundo plano y cada campaña muestra su estado.',
      highlightEn: 'Bulk sending runs in the background, and each campaign shows its status.',
      summaryEs:
        'El equipo carga una lista y sigue trabajando. El envío masivo no bloquea la herramienta.',
      summaryEn:
        'The team uploads a list and keeps working. Bulk sending does not lock the tool.',
      problemEs:
        'Enviar cientos o miles de correos en la misma petición bloquea la aplicación y no deja ver qué salió bien. El negocio necesita lanzar una campaña, adjuntar la imagen del correo y saber, sin esperar a que termine el envío, cuántos están en espera, cuántos salieron y cuántos fallaron.',
      problemEn:
        'Sending hundreds or thousands of emails in the same request locks the app and hides what actually went out. The business needs to launch a campaign, attach the email image, and see how many are waiting, sent, or failed without waiting for the batch to finish.',
      solutionEs:
        'Panel en React y API en Node.js. El operador sube un archivo CSV con los destinatarios, elige la plantilla, adjunta una imagen y previsualiza el correo antes de confirmar. Al confirmar, cada envío pasa a una fila de espera y un proceso en segundo plano lo manda con Mailjet. La pantalla no se queda bloqueada. El operador ve si cada campaña está en espera, enviada o fallida.',
      solutionEn:
        'React panel and Node.js API. The operator uploads a CSV file of recipients, picks a template, attaches an image, and previews the email before confirming. Each send then goes to a waiting line and a background process delivers it through Mailjet. The screen does not lock. The operator sees whether each campaign is waiting, sent, or failed.',
      resultsEs: [
        'El envío masivo dejó de depender de una sola petición: la campaña se procesa en segundo plano y el operador conserva el control.',
        'Cada campaña tiene estado visible (en cola, enviado, fallido), así que el seguimiento no depende de la bandeja de salida.',
        'La carga por CSV reemplaza la captura manual de destinatarios.',
      ],
      resultsEn: [
        'Bulk sending no longer depends on a single request: the campaign runs in the background and the operator stays in control.',
        'Each campaign has a visible status (queued, sent, failed), so follow-up does not depend on an inbox.',
        'CSV upload replaces typing recipients one by one.',
      ],
    },
    {
      slug: 'crm-empresarial',
      categoryKey: 'operations',
      title: 'CRM empresarial',
      titleEn: 'Business CRM',
      whatEs: 'Sistema para consultar clientes y prospectos, limitar quién puede editarlos y exportar el informe a PDF o Excel.',
      whatEn: 'A system to look up customers and prospects, limit who can edit them, and export the report to PDF or Excel.',
      roleEs: 'Armé el CRM con roles y la exportación a PDF y Excel desde los mismos datos del día.',
      roleEn: 'I built the CRM with roles and PDF and Excel export from the same daily records.',
      image: 'casos/crm.png',
      tone: 'tone-orange',
      tags: ['Laravel', 'PHP', 'MySQL', 'RBAC', 'PDF', 'Excel'],
      demoUrl: '',
      repoUrl: 'https://github.com/santiagoJordan01/CRM',
      highlightEs: 'Clientes, prospectos y permisos en un solo sistema, con informes en PDF y Excel.',
      highlightEn: 'Customers, prospects, and permissions in one system, with PDF and Excel reports.',
      summaryEs:
        'Comercial y operación consultan la misma información y exportan el informe del día sin armarlo a mano.',
      summaryEn:
        'Sales and operations share one source of truth and export the daily report without rebuilding it by hand.',
      problemEs:
        'Clientes, cobertura geográfica y prospectos que llegaban por la web estaban repartidos. Sin roles, cualquier usuario veía o editaba lo mismo. Los informes de gestión se armaban fuera del sistema, con el riesgo de trabajar sobre una versión distinta a la del día.',
      problemEn:
        'Customers, geographic coverage, and website prospects lived in different places. Without roles, every user could see or edit the same records. Management reports were rebuilt outside the system, so people worked from a copy that was already out of date.',
      solutionEs:
        'CRM en Laravel sobre MySQL. Cubre clientes, departamentos y municipios, prospectos que entran desde la web y avisos al cliente. El acceso pasa por roles: cada perfil ve y modifica solo lo que le corresponde. Los informes se exportan a PDF y Excel desde los mismos datos con los que trabaja el equipo.',
      solutionEn:
        'Laravel CRM on MySQL. It covers customers, departments and cities, prospects that arrive from the website, and customer notices. Access goes through roles, so each profile only sees and edits what it owns. Reports export to PDF and Excel from the same records the team works with.',
      resultsEs: [
        'Clientes, prospectos web y ubicación quedaron en un solo flujo, con dueño y permisos.',
        'El informe se exporta desde el sistema. Nadie lo reconstruye en una hoja suelta.',
        'Un usuario nuevo entra con un rol, no con acceso total.',
      ],
      resultsEn: [
        'Customers, website prospects, and location sit in one flow, with an owner and permissions.',
        'Reports are exported from the system. Nobody rebuilds them in a loose spreadsheet.',
        'A new user gets a role, not full access.',
      ],
    },
    {
      slug: 'phone-colombia',
      categoryKey: 'product',
      title: 'PhoneColombia',
      titleEn: 'PhoneColombia',
      whatEs: 'Página de productos y promociones. El negocio la actualiza desde un panel, sin volver a publicar el sitio.',
      whatEn: 'A products and promotions page. The business updates it from a panel, without publishing the site again.',
      roleEs: 'Pasé el contenido de un sitio estático a un panel: productos, promociones y testimonios se publican sin volver a subir el sitio.',
      roleEn: 'I moved the content off a static site and into a panel: products, promotions, and testimonials publish without uploading the site again.',
      tone: 'tone-violet',
      tags: ['React', 'Laravel', 'PHP', 'MySQL', 'Sanctum'],
      demoUrl: '',
      repoUrl: 'https://github.com/santiagoJordan01/phoneColombia',
      highlightEs: 'La página se actualiza desde un panel, sin publicar el sitio de nuevo por cada promoción.',
      highlightEn: 'The page updates from a panel, without publishing the site again for every promotion.',
      summaryEs:
        'El negocio cambia productos, promociones y testimonios sin tocar código, y la página pública muestra ese contenido.',
      summaryEn:
        'The business changes products, promotions, and testimonials without touching code, and the public page shows that content.',
      problemEs:
        'Una página comercial que solo se puede cambiar editando HTML depende de un desarrollador para una promoción, un precio o un testimonio. El contenido se desactualiza y cada cambio obliga a publicar el sitio de nuevo.',
      problemEn:
        'A commercial page that can only change by editing HTML depends on a developer for a promotion, a price, or a testimonial. Content goes stale, and every change means publishing the site again.',
      solutionEs:
        'Página pública en React y panel de administración sobre una API Laravel. Quien administra inicia sesión y gestiona productos, promociones, testimonios y los textos principales. Lo que se publica en el panel es lo que ve el visitante. La primera versión guardaba el contenido en Supabase. La versión actual pasó esa tarea a una API propia, con MySQL, inicio de sesión y archivos en el servidor.',
      solutionEn:
        'Public React page and an admin panel on a Laravel API. The person who manages the site signs in and edits products, promotions, testimonials, and the main text. What the panel publishes is what the visitor sees. The first version stored content in Supabase. The current version moved that job to its own API, with MySQL, sign-in, and files on the server.',
      resultsEs: [
        'Una promoción o un testimonio se publica desde el panel, sin volver a publicar el sitio.',
        'La página y el panel leen la misma información, así que no hay dos versiones del catálogo.',
        'El inicio de sesión separa la página pública de quien puede modificar el contenido.',
      ],
      resultsEn: [
        'A promotion or testimonial is published from the panel, without publishing the site again.',
        'The page and the panel read the same information, so there are not two versions of the catalog.',
        'Sign-in separates the public page from the people who can change the content.',
      ],
    },
    {
      slug: 'crm-conversacional',
      categoryKey: 'automation',
      title: 'Chat de atención',
      titleEn: 'Customer chat',
      whatEs: 'Aplicación para guardar prospectos, citas y conversaciones, y responder con un modelo de lenguaje.',
      whatEn: 'An app to store prospects, appointments, and conversations, and reply with a language model.',
      roleEs: 'Dejé prospectos, citas y el chat en una sola API, con inicio de sesión antes de pedir una respuesta al modelo.',
      roleEn: 'I put prospects, appointments, and chat on one API, with sign-in before asking the model for a reply.',
      image: 'casos/chat.png',
      tone: 'tone-slate',
      tags: ['Laravel', 'React', 'PostgreSQL', 'Sanctum', 'Groq'],
      demoUrl: '',
      repoUrl: 'https://github.com/santiagoJordan01/chatbot',
      highlightEs: 'La pregunta queda en la conversación y la respuesta sale del modelo, con el usuario identificado.',
      highlightEn: 'The question stays on the conversation and the reply comes from the model, with the user identified.',
      summaryEs:
        'Prospectos, citas y el chat viven en la misma API. Quien escribe inicia sesión antes de pedir una respuesta.',
      summaryEn:
        'Prospects, appointments, and chat live on the same API. The person writing signs in before asking for a reply.',
      problemEs:
        'Las conversaciones, los prospectos y las citas quedan en el celular de quien atiende. Sin un registro, no se sabe qué se respondió ni quién puede ver esa conversación. Pedir una respuesta a un modelo sin identificar al usuario tampoco deja rastro.',
      problemEn:
        'Conversations, prospects, and appointments stay on the phone of whoever is answering. Without a record, nobody can tell what was replied or who may see that conversation. Asking a model for a reply without identifying the user leaves no trail either.',
      solutionEs:
        'API en Laravel sobre PostgreSQL. Cubre negocios, prospectos, citas, conversaciones y la entrada de mensajes de WhatsApp. El chat exige inicio de sesión y envía la pregunta a Groq. La pantalla en React guarda la sesión y muestra la respuesta. Responde la pregunta directa: no arma un contexto de documentos mientras no exista una fuente propia de embeddings, para no inventar información que no está.',
      solutionEn:
        'Laravel API on PostgreSQL. It covers businesses, prospects, appointments, conversations, and incoming WhatsApp messages. Chat requires sign-in and sends the question to Groq. The React screen keeps the session and shows the reply. It answers the question directly: it does not build document context until there is a real embedding source, so it does not invent information that is not there.',
      resultsEs: [
        'La conversación queda en el sistema, no solo en el celular de quien atendió.',
        'Prospectos, citas y mensajes se consultan con la misma sesión.',
        'Sin inicio de sesión el modelo no responde.',
      ],
      resultsEn: [
        'The conversation stays in the system, not only on the phone of whoever answered.',
        'Prospects, appointments, and messages are read with the same session.',
        'Without sign-in, the model does not reply.',
      ],
    },
    {
      slug: 'control-de-horas',
      categoryKey: 'operations',
      title: 'Control de horas',
      titleEn: 'Time tracking',
      whatEs: 'Registro de las horas de cada empleado. Cuando la semana se aprueba, ya no se puede modificar.',
      whatEn: 'A log of each employee’s hours. Once the week is approved, it can no longer be changed.',
      roleEs: 'Modelé empleados, la carga de un solo día y el cierre de la semana, y dejé el cálculo de pago en un solo lugar.',
      roleEn: 'I modeled employees, the single daily entry, and the week close, and kept the pay calculation in one place.',
      tone: 'tone-cyan',
      tags: ['Next.js', 'Hono', 'PostgreSQL', 'Drizzle', 'TypeScript'],
      demoUrl: '',
      repoUrl: 'https://github.com/santiagoJordan01/OCMI-PRUEBA-TECNICA',
      highlightEs: 'La semana aprobada queda cerrada y el pago sale de las mismas horas que ve la pantalla.',
      highlightEn: 'An approved week stays closed, and pay comes from the same hours the screen shows.',
      summaryEs:
        'Cada empleado carga las horas del día. Cuando la semana se aprueba, ya no se puede modificar.',
      summaryEn:
        'Each employee logs the hours for the day. Once the week is approved, it can no longer be changed.',
      problemEs:
        'Las horas por empleado viven en hojas sueltas. Una semana ya revisada se puede seguir editando, y el pago se calcula aparte, con el riesgo de no coincidir con las horas cargadas.',
      problemEn:
        'Hours per employee live in loose spreadsheets. A week that was already reviewed can still be edited, and pay is calculated somewhere else, so it can disagree with the hours that were logged.',
      solutionEs:
        'API en Hono con Drizzle y PostgreSQL, y pantalla en Next.js. El sistema registra empleados, una carga de horas por día y la aprobación de la semana. Si la semana está aprobada, un cambio de horas se rechaza. El cálculo de horas y pago vive en un paquete compartido que usan la API y la pantalla. La base corre en Docker.',
      solutionEn:
        'Hono API with Drizzle and PostgreSQL, and a Next.js screen. The system records employees, one hours entry per day, and the week approval. If the week is approved, an hours change is rejected. Hours and pay are calculated in a shared package used by both the API and the screen. The database runs in Docker.',
      resultsEs: [
        'Cada empleado tiene una sola carga de horas por día.',
        'Una semana aprobada no acepta cambios.',
        'El pago de la semana sale del mismo cálculo que muestra la pantalla.',
      ],
      resultsEn: [
        'Each employee has a single hours entry per day.',
        'An approved week does not accept changes.',
        'Weekly pay comes from the same calculation the screen shows.',
      ],
    },
  ],
  technologies: {
    Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    Backend: ['Laravel', 'Node.js', 'Express', 'REST APIs', 'RBAC'],
    Databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Redis'],
    Tools: ['Git', 'GitHub', 'Docker', 'Bull'],
  },
}

const portfolioEs = {
  ...shared,
  role: 'Desarrollador Full Stack',
  availability: 'Disponible de inmediato',
  headlineBefore: 'Pongo en ',
  headlineAccent: 'producción',
  headlineAfter: ' software que integra, automatiza y sostiene la operación.',
  pitchLines: [
    {
      text: 'Más de 3 años resolviendo problemas de negocio en producción: facturación electrónica, básculas en caja e impresión donde está el operador.',
      tone: 'warm',
    },
    {
      text: 'Laravel, React y Node.js. Desde la integración con un servicio externo hasta el soporte con quien opera el sistema.',
      tone: 'cool',
    },
    {
      text: 'Busco un rol Semi-Senior donde pueda seguir siendo dueño de un módulo completo: diseño, desarrollo, despliegue y soporte.',
      tone: 'base',
    },
  ],
  proofs: [
    {
      title: 'DIAN en producción',
      text: 'El almacén sigue facturando en su sistema local. Un conector sube el documento a la nube y la DIAN lo acepta con el código de la factura (CUFE).',
    },
    {
      title: 'Impresión desde el celular',
      text: 'En el parqueadero el tiquete se envía desde el celular. Una computadora junto a la impresora lo toma y lo imprime, sin abrir el punto de venta ahí.',
    },
    {
      title: 'Báscula en la caja',
      text: 'El peso llega en el momento desde la báscula de la caja. La venta por kilo solo sigue si el peso está estable y el plato vuelve a cero.',
    },
  ],
  experience: [
    {
      role: 'Desarrollador Full Stack PHP',
      company: 'DEUR',
      period: 'Noviembre 2023 – 2026',
      bullets: [
        {
          lead: 'Facturación electrónica (DIAN).',
          text: 'El almacén ya generaba la venta en su sistema local, y esa computadora no puede enviar el documento a la DIAN. Diseñé el conector que vigila esos archivos, los sube al sistema en la nube y, desde Laravel, los manda a la plataforma que los entrega a la DIAN. Cubre facturas, documentos de compra y nómina electrónica. El documento queda aceptado cuando regresa válido y con el código de la factura (CUFE). El mismo archivo no se envía dos veces, y la clave de la empresa no queda guardada en esa computadora.',
        },
        {
          lead: 'Impresión remota.',
          text: 'En el parqueadero el operador está en el celular y la impresora está en otra computadora. El celular no llega a esa impresora. Armé una lista de espera en el sistema: el celular manda el tiquete, la computadora junto a la impresora lo toma, lo imprime y confirma. Si falla, lo intenta de nuevo. Así salen el ingreso, la salida y el cobro sin abrir el punto de venta en esa computadora.',
        },
        {
          lead: 'Lectura de básculas.',
          text: 'La báscula está conectada por USB a la computadora de la caja, y el sistema en la nube no puede leer ese puerto. Dejé un programa en esa computadora que mantiene la báscula abierta y muestra el peso al cajero en el momento. La venta por kilo solo continúa si el peso está estable, desde 10 g, y el plato vuelve a cero antes del siguiente producto. El programa arranca con Windows y se vuelve a abrir solo si deja de responder.',
        },
        {
          lead: 'Tiquetes y etiquetas en la caja.',
          text: 'La impresora de tiquetes está en la computadora del cajero. El punto de venta en la nube arma el documento y el navegador lo envía a un programa instalado en esa computadora, que lo manda a su impresora. Cada caja tiene la suya, así que el tiquete sale donde está el cajero.',
        },
        {
          lead: 'Ciclo completo con el cliente.',
          text: 'En estos módulos cubrí desarrollo, pruebas, instalación en la computadora del cliente, despliegue y soporte diario. El ajuste salía de un fallo en caja, en almacén o en la impresora del parqueadero. También hice capacitación y optimización de consultas SQL sobre la operación existente.',
        },
      ],
    },
    {
      role: 'Desarrollador Full Stack Freelance',
      company: 'Proyectos para clientes',
      period: 'Mayo 2023 – Noviembre 2023',
      bullets: [
        {
          lead: 'Entrega de punta a punta.',
          text: 'Entregué aplicaciones web a la medida con Laravel, React y Node.js, desde el alcance hasta el despliegue, con un interlocutor directo del lado del cliente.',
        },
        {
          lead: 'Operación sin depender de un cambio de código.',
          text: 'Implementé APIs REST y paneles de administración para que el día a día del cliente no requiriera un desarrollo por cada ajuste de contenido o de datos.',
        },
        {
          lead: 'Datos y despliegue.',
          text: 'Integré MySQL, MongoDB y Supabase según el producto, y dejé el sistema desplegado para uso real.',
        },
      ],
    },
  ],
  about: [
    'Soy desarrollador full stack con más de 3 años llevando software desde el requerimiento hasta el soporte con quien lo usa. Mi trabajo está en problemas de operación: cumplir una norma, quitar un paso manual, conectar un servicio o un dispositivo, y dejar el sistema estable en producción.',
    'En mi último empleo puse en producción el enlace entre el local y el sistema en la nube. Un conector en la computadora del almacén sube la venta y la deja aceptada ante la DIAN, con el código de la factura (CUFE). En la caja, la báscula se lee en el momento y el tiquete sale por la impresora de esa misma computadora. En el parqueadero, el operador envía el tiquete desde el celular y una computadora junto a la impresora lo imprime. En cada módulo cubrí desarrollo, instalación en el punto, despliegue y soporte con el operador.',
    'Trabajo con Laravel, React, Node.js y MySQL. Me muevo en APIs REST, control de acceso por roles y colas de trabajo. Me interesa un equipo donde un desarrollador sea dueño del ciclo completo de una funcionalidad.',
  ],
}

const portfolioEn = {
  ...shared,
  role: 'Full Stack Developer',
  availability: 'Available now',
  headlineBefore: 'I ship software that integrates, automates, and keeps daily ',
  headlineAccent: 'operations',
  headlineAfter: ' running.',
  pitchLines: [
    {
      text: '3+ years solving production business problems: electronic invoicing, scales at the register, and printing where the operator actually is.',
      tone: 'warm',
    },
    {
      text: 'Laravel, React, and Node.js. From an external integration to support for the person operating the system.',
      tone: 'cool',
    },
    {
      text: 'I am looking for a mid-level role where I can keep owning a module end to end: design, build, release, and support.',
      tone: 'base',
    },
  ],
  proofs: [
    {
      title: 'DIAN in production',
      text: 'The warehouse keeps invoicing in its local system. A connector uploads the document to the cloud, and the tax authority accepts it with the invoice code (CUFE).',
    },
    {
      title: 'Printing from a phone',
      text: 'In the parking lot, the ticket is sent from a phone. A computer next to the printer picks it up and prints it, without opening the point of sale there.',
    },
    {
      title: 'Scale at the register',
      text: 'The weight arrives live from the scale at the register. A sale by the kilo proceeds only when the weight is stable and the pan returns to zero.',
    },
  ],
  experience: [
    {
      role: 'Full Stack PHP Developer',
      company: 'DEUR',
      period: 'November 2023 – 2026',
      bullets: [
        {
          lead: 'Electronic invoicing (DIAN).',
          text: 'The warehouse already produced the sale in its local system, and that computer cannot send the document to the tax authority. I designed the connector that watches those files, uploads them to the cloud system, and has Laravel hand them to the platform that submits them to the tax authority. It covers invoices, purchase documents, and electronic payroll. A document is accepted when it comes back valid and with the invoice code (CUFE). The same file is not sent twice, and the company key is not stored on that computer.',
        },
        {
          lead: 'Remote printing.',
          text: 'In the parking lot the operator is on a phone and the printer is on another computer. The phone cannot reach that printer. I built a waiting list in the system: the phone sends the ticket, the computer next to the printer picks it up, prints it, and confirms. If it fails, it tries again. Entry, exit, and payment print without opening the point of sale on that computer.',
        },
        {
          lead: 'Scale readings.',
          text: 'The scale is plugged into the register computer by USB, and the cloud system cannot read that port. I left a program on that computer that keeps the scale open and shows the weight to the cashier as it changes. A sale by the kilo continues only with a stable weight, from 10 g, and the pan must return to zero before the next item. The program starts with Windows and opens again on its own if it stops responding.',
        },
        {
          lead: 'Tickets and labels at the register.',
          text: 'The ticket printer is on the cashier’s computer. The cloud point of sale builds the document and the browser sends it to a program installed on that computer, which sends it to the printer. Each register has its own, so the ticket comes out where the cashier is.',
        },
        {
          lead: 'Full cycle with the customer.',
          text: 'On these modules I covered development, testing, installation on the customer’s computer, deployment, and daily support. Fixes came from a failure at the register, the warehouse, or the parking printer. I also handled training and SQL tuning on the live operation.',
        },
      ],
    },
    {
      role: 'Freelance Full Stack Developer',
      company: 'Client projects',
      period: 'May 2023 – November 2023',
      bullets: [
        {
          lead: 'End-to-end delivery.',
          text: 'I delivered custom web apps with Laravel, React, and Node.js, from scope through deployment, with a direct counterpart on the client side.',
        },
        {
          lead: 'Operations without a code change.',
          text: 'I built REST APIs and admin panels so day-to-day client work did not require a development task for every content or data change.',
        },
        {
          lead: 'Data and deployment.',
          text: 'I integrated MySQL, MongoDB, and Supabase depending on the product, and left the system deployed for real use.',
        },
      ],
    },
  ],
  about: [
    'I am a full stack developer with 3+ years of experience taking software from a business requirement to support with the people who use it. My work sits on operational problems: meeting a regulation, removing a manual step, connecting a service or a device, and keeping the system stable in production.',
    'In my last role I shipped the link between the shop floor and the cloud system. A connector on the warehouse computer uploads the sale and leaves it accepted by Colombia’s tax authority (DIAN), with the invoice code (CUFE). At the register, the scale is read as the weight changes and the ticket prints on that computer’s printer. In the parking lot, the operator sends the ticket from a phone, and a computer next to the printer prints it. On each module I handled development, on-site installation, deployment, and support for the operator.',
    'I work with Laravel, React, Node.js, and MySQL. I am comfortable with REST APIs, role-based access, and job queues. I want a team where a developer owns a feature end to end.',
  ],
}

function localizeProject(project, language) {
  const isEnglish = language === 'en'
  const labels = categoryLabels[isEnglish ? 'en' : 'es']

  return {
    slug: project.slug,
    categoryKey: project.categoryKey,
    category: labels[project.categoryKey],
    title: isEnglish ? project.titleEn : project.title,
    what: isEnglish ? project.whatEn : project.whatEs,
    role: isEnglish ? project.roleEn : project.roleEs,
    image: project.image
      ? `${import.meta.env.BASE_URL}${project.image.split('/').map(encodeURIComponent).join('/')}`
      : '',
    tone: project.tone,
    tags: project.tags,
    demoUrl: project.demoUrl,
    repoUrl: project.repoUrl,
    highlight: isEnglish ? project.highlightEn : project.highlightEs,
    summary: isEnglish ? project.summaryEn : project.summaryEs,
    problem: isEnglish ? project.problemEn : project.problemEs,
    solution: isEnglish ? project.solutionEn : project.solutionEs,
    results: isEnglish ? project.resultsEn : project.resultsEs,
  }
}

export function getPortfolio(language) {
  const base = language === 'en' ? portfolioEn : portfolioEs
  const labels = categoryLabels[language === 'en' ? 'en' : 'es']

  return {
    ...base,
    projects: shared.projects.map((project) => localizeProject(project, language)),
    projectFilters: [
      { key: 'all', label: labels.all },
      { key: 'automation', label: labels.automation },
      { key: 'operations', label: labels.operations },
      { key: 'product', label: labels.product },
    ],
    technologies:
      language === 'en'
        ? {
            Frontend: shared.technologies.Frontend,
            Backend: shared.technologies.Backend,
            Databases: shared.technologies.Databases,
            Tools: shared.technologies.Tools,
          }
        : {
            Frontend: shared.technologies.Frontend,
            Backend: shared.technologies.Backend,
            'Bases de datos': shared.technologies.Databases,
            Herramientas: shared.technologies.Tools,
          },
  }
}

export function getNavItems(language) {
  if (language === 'en') {
    return [
      { label: 'Case studies', type: 'route', to: '/proyectos' },
      { label: 'Experience', type: 'anchor', anchor: 'experiencia' },
      { label: 'About', type: 'anchor', anchor: 'sobre-mi' },
      { label: 'Stack', type: 'anchor', anchor: 'tecnologias' },
    ]
  }

  return [
    { label: 'Casos', type: 'route', to: '/proyectos' },
    { label: 'Experiencia', type: 'anchor', anchor: 'experiencia' },
    { label: 'Sobre mí', type: 'anchor', anchor: 'sobre-mi' },
    { label: 'Tecnologías', type: 'anchor', anchor: 'tecnologias' },
  ]
}

export function getUiText(language) {
  if (language === 'en') {
    return {
      documentTitle: 'Santiago Jordán Vargas | Full Stack Developer',
      metaDescription:
        'Full stack developer with 3+ years shipping production integrations, automation, and business software with Laravel, React, and Node.js. Available now.',
      navAria: 'Main navigation',
      languageLabel: 'Language',
      darkModeLabel: 'Switch to dark mode',
      lightModeLabel: 'Switch to light mode',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      whatsapp: 'WhatsApp',
      emailCta: 'Email via Gmail',
      viewCases: 'View case studies',
      downloadCv: 'Download resume',
      experience: 'Experience',
      proofs: 'In production',
      projects: 'Case studies',
      projectsDescription:
        'Products with a business problem, the technical decision, and the operational result.',
      about: 'About',
      technologies: 'Stack',
      technologiesDescription: 'What I use to ship and support production web software.',
      viewAllProjects: 'Read the full case studies',
      viewDemo: 'View demo',
      viewCode: 'View code',
      readCase: 'Read case',
      whatIDid: 'What I did',
      problem: 'Problem',
      solution: 'Solution',
      results: 'Results',
      backToCases: 'All case studies',
      projectsPageDescription:
        'Each case explains the business constraint, the architecture, and what changed for the people using it.',
      projectFiltersAria: 'Case study filters',
      footerCta: 'Open to a mid-level full stack role. I can talk this week.',
      footerExperience: 'Experience',
      footerAbout: 'About',
      footerTechnologies: 'Stack',
      footerProjects: 'Case studies',
      profileAlt: 'Profile photo of Santiago Jordán Vargas',
      aboutAlt: 'Professional portrait of Santiago Jordán Vargas',
    }
  }

  return {
    documentTitle: 'Santiago Jordán Vargas | Desarrollador Full Stack',
    metaDescription:
      'Desarrollador full stack con más de 3 años poniendo en producción integraciones, automatización y software de operación con Laravel, React y Node.js. Disponible de inmediato.',
    navAria: 'Navegación principal',
    languageLabel: 'Idioma',
    darkModeLabel: 'Cambiar a modo oscuro',
    lightModeLabel: 'Cambiar a modo claro',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    whatsapp: 'WhatsApp',
    emailCta: 'Escribir por Gmail',
    viewCases: 'Ver casos de estudio',
    downloadCv: 'Descargar CV',
    experience: 'Experiencia',
    proofs: 'En producción',
    projects: 'Casos de estudio',
    projectsDescription:
      'Productos con el problema de negocio, la decisión técnica y el resultado para quien opera el sistema.',
    about: 'Sobre mí',
    technologies: 'Tecnologías',
    technologiesDescription: 'Lo que uso para construir y sostener software web en producción.',
    viewAllProjects: 'Leer los casos completos',
    viewDemo: 'Ver demo',
    viewCode: 'Ver código',
      readCase: 'Leer caso',
      whatIDid: 'Qué hice',
    problem: 'Problema',
    solution: 'Solución',
    results: 'Resultados',
    backToCases: 'Todos los casos',
    projectsPageDescription:
      'Cada caso explica la restricción del negocio, la arquitectura y qué cambió para quien usa el sistema.',
    projectFiltersAria: 'Filtros de casos',
    footerCta: 'Busco un rol full stack Semi-Senior. Puedo conversar esta semana.',
    footerExperience: 'Experiencia',
    footerAbout: 'Sobre mí',
    footerTechnologies: 'Tecnologías',
    footerProjects: 'Casos',
    profileAlt: 'Foto de perfil de Santiago Jordán Vargas',
    aboutAlt: 'Retrato profesional de Santiago Jordán Vargas',
  }
}
