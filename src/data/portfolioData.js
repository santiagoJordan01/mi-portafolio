const shared = {
  brand: 'codev',
  name: 'Santiago Jordan Vargas',
  social: {
    linkedin: 'https://www.linkedin.com/in/santiago-jord%C3%A1n-vargas-156363246/',
    github: 'https://github.com/santiagoJordan01',
    email: 'santijordanv@gmail.com',
    phone: '322 834 3350',
    phoneRaw: '573228343350',
  },
  profileImage: '/foto de perfil portfolio.jpg',
  cvUrl: '/hoja de vida Santiago Jordan Vargas.pdf',
  projects: [
    {
      slug: 'campanas-correos-mern',
      category: 'Backend',
      title: 'Campanas de Correos MERN',
      subtitleEs: 'Plataforma para campanas masivas por correo',
      subtitleEn: 'Platform for large-scale email campaigns',
      descriptionEs:
        'Procesamiento asincrono con colas, carga CSV y monitoreo de estados de campanas en tiempo real.',
      descriptionEn:
        'Asynchronous queue processing, CSV uploads, and real-time campaign status monitoring.',
      tags: ['React', 'Node.js', 'Express', 'MySQL', 'Redis', 'Bull', 'Mailjet'],
      url: 'https://github.com/santiagoJordan01?tab=repositories',
      tone: 'tone-cyan',
    },
    {
      slug: 'crm-empresarial',
      category: 'Backend',
      title: 'CRM Empresarial',
      subtitleEs: 'Gestion de usuarios, roles y permisos',
      subtitleEn: 'User management, roles, and permissions',
      descriptionEs:
        'CRM orientado a procesos de negocio con exportacion de informes en PDF y Excel para operacion diaria.',
      descriptionEn:
        'Business-oriented CRM with PDF and Excel reporting for daily operations.',
      tags: ['Laravel', 'PHP', 'MySQL', 'RBAC', 'PDF', 'Excel'],
      url: 'https://github.com/santiagoJordan01?tab=repositories',
      tone: 'tone-orange',
    },
    {
      slug: 'phone-colombia',
      category: 'Frontend',
      title: 'PhoneColombia',
      subtitleEs: 'Panel administrador para landing pages',
      subtitleEn: 'Admin dashboard for landing pages',
      descriptionEs:
        'Dashboard para contenido multimedia con gestion dinamica de datos y persistencia con Supabase.',
      descriptionEn:
        'Dashboard for multimedia content with dynamic data management and Supabase persistence.',
      tags: ['React', 'Node.js', 'Supabase', 'Admin Panel'],
      url: 'https://github.com/santiagoJordan01?tab=repositories',
      tone: 'tone-violet',
    },
    {
      slug: 'mern-todo',
      category: 'Fullstack',
      title: 'MERN ToDo',
      subtitleEs: 'Aplicacion CRUD con arquitectura cliente-servidor',
      subtitleEn: 'CRUD app with client-server architecture',
      descriptionEs:
        'API REST y contenerizacion con Docker para despliegue portable y estandarizacion de entorno.',
      descriptionEn:
        'REST API and Docker containerization for portable deployments and environment consistency.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker'],
      url: 'https://github.com/santiagoJordan01?tab=repositories',
      tone: 'tone-slate',
    },
  ],
  technologies: {
    Frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Admin Panels'],
    Backend: ['Laravel', 'Node.js', 'Express', 'REST APIs', 'RBAC'],
    Databases: ['MySQL', 'MongoDB', 'Supabase', 'Redis'],
    Tools: ['Git', 'GitHub', 'Docker', 'Bull', 'Postman'],
  },
}

const portfolioEs = {
  ...shared,
  role: 'Full Stack Developer',
  heroTitle: 'Hola, soy Santiago',
  pitchLines: [
    {
      text: 'Construyo soluciones full stack enfocadas en negocio con Laravel, React y Node.js.',
      tone: 'warm',
    },
    {
      text: 'Especializado en CRM, paneles administrativos, APIs REST y automatizacion de procesos.',
      tone: 'cool',
    },
    {
      text: 'Desde la arquitectura hasta el despliegue, convierto ideas en productos reales.',
      tone: 'base',
    },
  ],
  experience: [
    {
      role: 'Desarrollador Full Stack PHP',
      company: 'DEUR',
      period: 'Noviembre 2025 - Actualidad',
      bullets: [
        'Desarrollo y mantenimiento de aplicaciones empresariales con Laravel.',
        'Soporte tecnico y funcional, instalaciones POS y capacitacion.',
        'Optimizacion SQL, mantenimiento evolutivo y soporte de sistemas.',
      ],
    },
    {
      role: 'Desarrollador Full Stack Freelance',
      company: 'Proyectos para clientes',
      period: 'Mayo 2025 - Noviembre 2025',
      bullets: [
        'Construccion de aplicaciones web full stack con Laravel, React y Node.js.',
        'Implementacion de APIs REST, paneles administrativos y sistemas CRUD.',
        'Integracion de MySQL, MongoDB y Supabase con despliegues en cloud.',
      ],
    },
  ],
  about: [
    'Desarrollador orientado a soluciones empresariales con enfoque en rendimiento, mantenibilidad y escalabilidad.',
    'Experiencia construyendo APIs REST, CRM, paneles administrativos e integraciones entre servicios y bases de datos.',
    'Combino desarrollo, soporte funcional y mejora continua para entregar valor real al negocio.',
  ],
  projectFilters: ['Todos', 'Backend', 'Frontend', 'Fullstack'],
  technologyGroups: ['Frontend', 'Backend', 'Databases', 'Tools'],
}

const portfolioEn = {
  ...shared,
  role: 'Full Stack Developer',
  heroTitle: 'Hi, I am Santiago',
  pitchLines: [
    {
      text: 'I build business-focused full stack solutions using Laravel, React, and Node.js.',
      tone: 'warm',
    },
    {
      text: 'Specialized in CRM systems, admin panels, REST APIs, and process automation.',
      tone: 'cool',
    },
    {
      text: 'From architecture to deployment, I turn ideas into real products.',
      tone: 'base',
    },
  ],
  experience: [
    {
      role: 'Full Stack PHP Developer',
      company: 'DEUR',
      period: 'November 2025 - Present',
      bullets: [
        'Built and maintained enterprise applications with Laravel.',
        'Provided technical and functional support, POS setup, and user training.',
        'Delivered SQL optimization, iterative maintenance, and platform support.',
      ],
    },
    {
      role: 'Freelance Full Stack Developer',
      company: 'Client Projects',
      period: 'May 2025 - November 2025',
      bullets: [
        'Built full stack web applications with Laravel, React, and Node.js.',
        'Implemented REST APIs, admin panels, and CRUD systems.',
        'Integrated MySQL, MongoDB, and Supabase with cloud deployments.',
      ],
    },
  ],
  about: [
    'Developer focused on business solutions with high standards for performance, maintainability, and scalability.',
    'Hands-on experience building REST APIs, CRM platforms, admin dashboards, and service integrations.',
    'I combine development, functional support, and continuous improvement to deliver real business value.',
  ],
  projectFilters: ['All', 'Backend', 'Frontend', 'Fullstack'],
  technologyGroups: ['Frontend', 'Backend', 'Databases', 'Tools'],
}

export function getPortfolio(language) {
  const base = language === 'en' ? portfolioEn : portfolioEs

  const projects = shared.projects.map((project) => ({
    ...project,
    subtitle: language === 'en' ? project.subtitleEn : project.subtitleEs,
    description: language === 'en' ? project.descriptionEn : project.descriptionEs,
  }))

  return {
    ...base,
    projects,
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
      { label: 'Projects', type: 'route', to: '/proyectos' },
      { label: 'Experience', type: 'anchor', anchor: 'experiencia' },
      { label: 'About', type: 'anchor', anchor: 'sobre-mi' },
      { label: 'Technologies', type: 'anchor', anchor: 'tecnologias' },
    ]
  }

  return [
    { label: 'Proyectos', type: 'route', to: '/proyectos' },
    { label: 'Experiencia', type: 'anchor', anchor: 'experiencia' },
    { label: 'Sobre mí', type: 'anchor', anchor: 'sobre-mi' },
    { label: 'Tecnologías', type: 'anchor', anchor: 'tecnologias' },
  ]
}

export function getUiText(language) {
  if (language === 'en') {
    return {
      navAria: 'Main navigation',
      languageLabel: 'Language',
      darkModeLabel: 'Switch to dark mode',
      lightModeLabel: 'Switch to light mode',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      experience: 'Experience',
      projects: 'Projects',
      projectsDescription:
        'Featured projects focused on business development, scalability, and automation.',
      about: 'About me',
      technologies: 'Technologies',
      technologiesDescription:
        'Tools and technologies I use to build robust end-to-end web solutions.',
      viewAllProjects: 'View all projects',
      viewProject: 'View project',
      viewResume: 'View resume',
      projectsPageDescription:
        'Project catalog with real backend, frontend, and fullstack implementations for business needs.',
      projectFiltersAria: 'Project filters',
      footerExperience: 'Experience',
      footerAbout: 'About',
      footerTechnologies: 'Technologies',
      footerProjects: 'Projects',
    }
  }

  return {
    navAria: 'Navegación principal',
    languageLabel: 'Idioma',
    darkModeLabel: 'Cambiar a modo oscuro',
    lightModeLabel: 'Cambiar a modo claro',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    experience: 'Experiencia',
    projects: 'Proyectos',
    projectsDescription:
      'Selección de proyectos destacados con foco en desarrollo empresarial, escalabilidad y automatización.',
    about: 'Sobre mí',
    technologies: 'Tecnologías',
    technologiesDescription:
      'Herramientas y tecnologías que uso para construir soluciones web robustas de extremo a extremo.',
    viewAllProjects: 'Ver todos los proyectos',
    viewProject: 'Ver proyecto',
    viewResume: 'Ver hoja de vida',
    projectsPageDescription:
      'Catálogo de proyectos con implementaciones reales en backend, frontend y fullstack para diferentes necesidades de negocio.',
    projectFiltersAria: 'Filtros de proyectos',
    footerExperience: 'Experiencia',
    footerAbout: 'Sobre mí',
    footerTechnologies: 'Tecnologías',
    footerProjects: 'Proyectos',
  }
}
