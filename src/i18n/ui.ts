/**
 * i18n Translation Dictionaries
 * Single source of truth for ALL user-facing text across ES / EN / FR.
 * DRY principle: UI components NEVER contain hardcoded text.
 */

export const languages = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

// ── SEO / Meta ──────────────────────────────────────────────────────────────
const seo = {
  es: {
    title: 'OuiPaula | Profesora de Francés en Bogotá y Online',
    description:
      'Clases de francés personalizadas en Bogotá y online para adultos. Filóloga certificada DALF. Preparación DELF/DALF, negocios y viajes.',
    ogLocale: 'es_CO',
    ogImageAlt: 'OuiPaula | Profesora de Francés en Bogotá y Online',
    twitterImageAlt: 'OuiPaula | Profesora de Francés en Bogotá y Online',
  },
  en: {
    title: 'OuiPaula | French Teacher in Bogotá & Online',
    description:
      'Personalized French classes in Bogotá and online for adults. DALF-certified philologist. DELF/DALF prep, business French, and travel.',
    ogLocale: 'en_US',
    ogImageAlt: 'OuiPaula | French Teacher in Bogotá & Online',
    twitterImageAlt: 'OuiPaula | French Teacher in Bogotá & Online',
  },
  fr: {
    title: 'OuiPaula | Professeure de Français à Bogotá & en Ligne',
    description:
      'Cours de français personnalisés à Bogotá et en ligne pour adultes. Philologue certifiée DALF. Préparation DELF/DALF, français des affaires et voyages.',
    ogLocale: 'fr_FR',
    ogImageAlt: 'OuiPaula | Professeure de Français à Bogotá & en Ligne',
    twitterImageAlt: 'OuiPaula | Professeure de Français à Bogotá & en Ligne',
  },
} as const;

// ── Navbar ───────────────────────────────────────────────────────────────────
const nav = {
  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    courses: 'Cursos',
    methodology: 'Metodología',
    blog: 'Blog',
    contact: 'Contacto',
    cta: 'Agendar clase',
    logoAriaLabel: 'OuiPaula — Inicio',
    navAriaLabel: 'Navegación principal',
    mobileAriaLabel: 'Navegación móvil',
    menuAriaLabel: 'Menú de navegación',
    openMenu: 'Abrir menú',
    langSwitcher: 'Cambiar idioma',
  },
  en: {
    home: 'Home',
    about: 'About',
    courses: 'Courses',
    methodology: 'Methodology',
    blog: 'Blog',
    contact: 'Contact',
    cta: 'Book a class',
    logoAriaLabel: 'OuiPaula — Home',
    navAriaLabel: 'Main navigation',
    mobileAriaLabel: 'Mobile navigation',
    menuAriaLabel: 'Navigation menu',
    openMenu: 'Open menu',
    langSwitcher: 'Change language',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    courses: 'Cours',
    methodology: 'Méthode',
    blog: 'Blog',
    contact: 'Contact',
    cta: 'Réserver un cours',
    logoAriaLabel: 'OuiPaula — Accueil',
    navAriaLabel: 'Navigation principale',
    mobileAriaLabel: 'Navigation mobile',
    menuAriaLabel: 'Menu de navigation',
    openMenu: 'Ouvrir le menu',
    langSwitcher: 'Changer de langue',
  },
} as const;

// ── Hero ─────────────────────────────────────────────────────────────────────
const hero = {
  es: {
    eyebrow: 'Filóloga · Profesora certificada · Bogotá & Online',
    h1Line1: 'Parlez-vous',
    h1Line2: 'français\u00a0?',
    subtitle:
      'Clases de francés personalizadas para jóvenes y adultos — francés con objetivos académicos o migratorios. Preparación para certificación DELF/DALF y TCF Canadá. En línea para Bogotá y todo LATAM.',
    ctaPrimary: 'Ver cursos →',
    ctaSecondary: 'Agendar Clase',
    proofStars: '5 estrellas',
    proofText: 'Más de 200 estudiantes · 5 años de experiencia',
    blobAlt: 'Foto de la profesora de francés',
    badge1: 'DALF C1 Certifiée',
    badge1Aria: 'Certificación DALF C1',
    badge2: "5 ans d'expérience",
    badge2Aria: '5 años de experiencia',
  },
  en: {
    eyebrow: 'Philologist · Certified Teacher · Bogotá & Online',
    h1Line1: 'Parlez-vous',
    h1Line2: 'français\u00a0?',
    subtitle:
      'Personalized French classes for adults — travel, business, or DELF/DALF certification. In-person in Bogotá and online for all of LATAM.',
    ctaPrimary: 'See courses →',
    ctaSecondary: 'Book Class',
    proofStars: '5 stars',
    proofText: 'Over 200 students · 5 years of experience',
    blobAlt: 'Photo of the French teacher',
    badge1: 'DALF C1 Certifiée',
    badge1Aria: 'DALF C1 Certification',
    badge2: "5 ans d'expérience",
    badge2Aria: '5 years of experience',
  },
  fr: {
    eyebrow: 'Philologue · Professeure certifiée · Bogotá & En ligne',
    h1Line1: 'Parlez-vous',
    h1Line2: 'français\u00a0?',
    subtitle:
      "Cours de français personnalisés pour adultes — voyages, affaires ou certification DELF/DALF. En présentiel à Bogotá et en ligne pour toute l'Amérique latine.",
    ctaPrimary: 'Voir les cours →',
    ctaSecondary: 'Réserver un Cours',
    proofStars: '5 étoiles',
    proofText: "Plus de 200 étudiants · 5 ans d'expérience",
    blobAlt: 'Photo de la professeure de français',
    badge1: 'DALF C1 Certifiée',
    badge1Aria: 'Certification DALF C1',
    badge2: "5 ans d'expérience",
    badge2Aria: "5 ans d'expérience",
  },
} as const;

// ── About ────────────────────────────────────────────────────────────────────
const about = {
  es: {
    eyebrow: 'À propos de moi',
    title: 'Sobre mí',
    bio: 'Soy licenciada en Filología e Idiomas: Francés y cuento con más de 5 años de experiencia enseñando francés a adolescentes y adultos. Mi objetivo es acompañar a los estudiantes en su proceso de aprendizaje, el cual les permite acceder a oportunidades académicas y profesionales internacionales.',
    photoAlt: 'Foto de la profesora',
    badge1: 'Filóloga en Francés',
    badge2: 'DALF C1 Certificada',
    badge3: '+200 estudiantes',
    badge4: 'Bogotá · Online LATAM',
    quoteAriaLabel: 'Cita inspiracional',
    credentialsAriaLabel: 'Credenciales',
  },
  en: {
    eyebrow: 'About me',
    title: 'About me',
    bio: 'I am a French language philologist with over 5 years of experience teaching adults to communicate fluently, confidently, and authentically. For me, learning French is also discovering a different way of seeing the world.',
    photoAlt: 'Photo of the teacher',
    badge1: 'French Philologist',
    badge2: 'DALF C1 Certified',
    badge3: '+200 students',
    badge4: 'Bogotá · Online LATAM',
    quoteAriaLabel: 'Inspirational quote',
    credentialsAriaLabel: 'Credentials',
  },
  fr: {
    eyebrow: 'À propos de moi',
    title: 'À propos de moi',
    bio: "Je suis philologue en langue française et j'enseigne depuis plus de 5 ans à des adultes à communiquer avec fluidité, confiance et authenticité. Pour moi, apprendre le français, c'est aussi découvrir une façon différente de voir le monde.",
    photoAlt: 'Photo de la professeure',
    badge1: 'Philologue en Français',
    badge2: 'Certifiée DALF C1',
    badge3: '+200 étudiants',
    badge4: 'Bogotá · En ligne LATAM',
    quoteAriaLabel: 'Citation inspirante',
    credentialsAriaLabel: 'Diplômes',
  },
} as const;

// ── Services ─────────────────────────────────────────────────────────────────
const services = {
  es: {
    eyebrow: 'Mes services',
    title: '¿Cómo puedo ayudarte?',
    subtitle:
      'Cada clase está diseñada según tus objetivos reales, sin importar tu punto de partida.',
    chipsAriaLabel: 'Características',
    items: [
      {
        id: 'individual',
        titleFr: 'Cours particuliers',
        title: 'Clases Individuales',
        description:
          'Plan 100% personalizado según tu nivel, objetivos y disponibilidad. Avanza a tu propio ritmo con atención exclusiva.',
        chips: ['Nivel A1–C2', 'Online o presencial', 'Horario flexible'],
        cta: 'Conocer más',
      },
      {
        id: 'business',
        titleFr: 'Français des affaires',
        title: 'Francés de Negocios',
        description:
          'Comunicación profesional, presentaciones, emails y cultura empresarial del mundo francófono para ejecutivos.',
        chips: ['Ejecutivos', 'Reuniones', 'Presentaciones'],
        cta: 'Conocer más',
      },
      {
        id: 'delf',
        titleFr: 'Préparation officielle',
        title: 'Prep. DELF / DALF',
        description:
          'Prepárate con estrategia y material oficial para obtener tu certificación del Ministerio de Francia.',
        chips: ['Todos los niveles', 'Simulacros', 'Material oficial'],
        cta: 'Conocer más',
      },
      {
        id: 'travel',
        titleFr: 'Français du voyageur',
        title: 'Francés para Viajes',
        description:
          'Frases clave, vocabulario práctico y tips culturales para viajar con seguridad y confianza total.',
        chips: ['Desde cero', 'Supervivencia', 'Cultura viajera'],
        cta: 'Conocer más',
      },
    ],
  },
  en: {
    eyebrow: 'My services',
    title: 'How can I help you?',
    subtitle:
      'Every class is designed around your real goals, no matter where you start.',
    chipsAriaLabel: 'Features',
    items: [
      {
        id: 'individual',
        titleFr: 'Cours particuliers',
        title: 'Private Classes',
        description:
          '100% personalized plan based on your level, goals, and availability. Progress at your own pace with exclusive attention.',
        chips: ['Level A1–C2', 'Online or in-person', 'Flexible schedule'],
        cta: 'Learn more',
      },
      {
        id: 'business',
        titleFr: 'Français des affaires',
        title: 'Business French',
        description:
          'Professional communication, presentations, emails, and Francophone business culture for executives.',
        chips: ['Executives', 'Meetings', 'Presentations'],
        cta: 'Learn more',
      },
      {
        id: 'delf',
        titleFr: 'Préparation officielle',
        title: 'DELF / DALF Prep',
        description:
          'Prepare strategically with official materials to obtain your certification from the French Ministry.',
        chips: ['All levels', 'Mock exams', 'Official materials'],
        cta: 'Learn more',
      },
      {
        id: 'travel',
        titleFr: 'Français du voyageur',
        title: 'French for Travel',
        description:
          'Key phrases, practical vocabulary, and cultural tips to travel safely and with total confidence.',
        chips: ['From scratch', 'Survival French', 'Travel culture'],
        cta: 'Learn more',
      },
    ],
  },
  fr: {
    eyebrow: 'Mes services',
    title: 'Comment puis-je vous aider\u00a0?',
    subtitle:
      'Chaque cours est conçu selon vos objectifs réels, quel que soit votre point de départ.',
    chipsAriaLabel: 'Caractéristiques',
    items: [
      {
        id: 'individual',
        titleFr: 'Cours particuliers',
        title: 'Cours particuliers',
        description:
          'Plan 100% personnalisé selon votre niveau, vos objectifs et vos disponibilités. Progressez à votre rythme avec une attention exclusive.',
        chips: ['Niveau A1–C2', 'En ligne ou présentiel', 'Horaires flexibles'],
        cta: 'En savoir plus',
      },
      {
        id: 'business',
        titleFr: 'Français des affaires',
        title: 'Français des affaires',
        description:
          "Communication professionnelle, présentations, e-mails et culture d'entreprise du monde francophone pour cadres.",
        chips: ['Cadres', 'Réunions', 'Présentations'],
        cta: 'En savoir plus',
      },
      {
        id: 'delf',
        titleFr: 'Préparation officielle',
        title: 'Préparation DELF / DALF',
        description:
          'Préparez-vous avec stratégie et matériel officiel pour obtenir votre certification du Ministère français.',
        chips: ['Tous niveaux', 'Examens blancs', 'Matériel officiel'],
        cta: 'En savoir plus',
      },
      {
        id: 'travel',
        titleFr: 'Français du voyageur',
        title: 'Français pour voyageurs',
        description:
          'Phrases clés, vocabulaire pratique et conseils culturels pour voyager en toute sécurité et confiance.',
        chips: ['Débutants', 'Survie en français', 'Culture voyage'],
        cta: 'En savoir plus',
      },
    ],
  },
} as const;

// ── Methodology ──────────────────────────────────────────────────────────────
const methodology = {
  es: {
    eyebrow: 'Ma méthode',
    title: 'Mi metodología',
    subtitle:
      'Rigor académico, comunicación real y cultura francesa en cada clase.',
    stepAriaPrefix: 'Paso',
    pillars: [
      {
        step: 1,
        titleFr: 'Communicatif',
        titleEs: 'Comunicativo',
        description:
          'Hablamos desde el primer día. El error es parte del proceso, no un obstáculo. La fluidez nace de la práctica real.',
      },
      {
        step: 2,
        titleFr: 'Personnalisé',
        titleEs: 'Personalizado',
        description:
          'Tu plan de estudio es único. Adaptado a tu nivel, ritmo y metas concretas. Sin planes genéricos.',
      },
      {
        step: 3,
        titleFr: 'Culturel',
        titleEs: 'Cultural',
        description:
          'El idioma y la cultura son inseparables. Aprendemos el francés que se vive, no solo el que se estudia.',
      },
      {
        step: 4,
        titleFr: 'Progressif',
        titleEs: 'Progresivo',
        description:
          'Avance medible con retroalimentación constante y metas claras en cada etapa de tu aprendizaje.',
      },
    ],
  },
  en: {
    eyebrow: 'My method',
    title: 'My methodology',
    subtitle:
      'Academic rigor, real communication, and French culture in every class.',
    stepAriaPrefix: 'Step',
    pillars: [
      {
        step: 1,
        titleFr: 'Communicatif',
        titleEs: 'Communicative',
        description:
          'We speak from day one. Mistakes are part of the process, not an obstacle. Fluency comes from real practice.',
      },
      {
        step: 2,
        titleFr: 'Personnalisé',
        titleEs: 'Personalized',
        description:
          'Your study plan is unique. Adapted to your level, pace, and concrete goals. No generic plans.',
      },
      {
        step: 3,
        titleFr: 'Culturel',
        titleEs: 'Cultural',
        description:
          'Language and culture are inseparable. We learn the French that is lived, not just studied.',
      },
      {
        step: 4,
        titleFr: 'Progressif',
        titleEs: 'Progressive',
        description:
          'Measurable progress with constant feedback and clear goals at every stage of your learning.',
      },
    ],
  },
  fr: {
    eyebrow: 'Ma méthode',
    title: 'Ma méthodologie',
    subtitle:
      'Rigueur académique, communication réelle et culture française dans chaque cours.',
    stepAriaPrefix: 'Étape',
    pillars: [
      {
        step: 1,
        titleFr: 'Communicatif',
        titleEs: 'Communicatif',
        description:
          "Nous parlons dès le premier jour. L'erreur fait partie du processus, pas un obstacle. La fluidité naît de la pratique réelle.",
      },
      {
        step: 2,
        titleFr: 'Personnalisé',
        titleEs: 'Personnalisé',
        description:
          "Votre plan d'étude est unique. Adapté à votre niveau, votre rythme et vos objectifs concrets. Pas de plans génériques.",
      },
      {
        step: 3,
        titleFr: 'Culturel',
        titleEs: 'Culturel',
        description:
          "La langue et la culture sont inséparables. Nous apprenons le français qui se vit, pas seulement celui qui s'étudie.",
      },
      {
        step: 4,
        titleFr: 'Progressif',
        titleEs: 'Progressif',
        description:
          'Progrès mesurables avec des retours constants et des objectifs clairs à chaque étape de votre apprentissage.',
      },
    ],
  },
} as const;

// ── Contact ──────────────────────────────────────────────────────────────────
const contact = {
  es: {
    eyebrow: 'Prendre rendez-vous',
    title: '¿Lista para empezar?',
    titleStandalone: 'Agenda tu clase',
    subtitle:
      'Agenda tu primera clase de prueba completamente gratis. Sin compromiso.',
    formAriaLabel: 'Formulario para agendar clase',
    fieldName: 'Nombre completo',
    fieldNamePlaceholder: 'Tu nombre completo',
    fieldEmail: 'Correo electrónico',
    fieldEmailPlaceholder: 'tu@correo.com',
    fieldWhatsapp: 'WhatsApp',
    fieldWhatsappPlaceholder: '300 000 0000',
    fieldLevel: 'Nivel actual de francés',
    fieldLevelDefault: 'Selecciona tu nivel',
    fieldGoal: 'Objetivo principal',
    fieldGoalDefault: '¿Para qué quieres aprender?',
    fieldMessage: 'Mensaje (opcional)',
    fieldMessagePlaceholder: 'Cuéntame un poco más sobre ti y tus objetivos...',
    checkboxText: 'Acepto recibir información sobre cursos y novedades',
    submitBtn: 'Agendar mi clase→',
    successTitle: '¡Mensaje enviado!',
    successText: 'Te respondo en menos de 24 horas. ¡Bienvenida al francés!',
    reassuranceQuote: '«Respondo en menos de 24 horas.»',
    reassuranceSub:
      'Agenda tu primera sesión hoy.',
    contactInfoAriaLabel: 'Información de contacto',
    socialsAriaLabel: 'Redes sociales',
    levelOptions: [
      { value: 'ninguno', label: 'Ninguno / Desde cero' },
      { value: 'a1', label: 'A1 — Principiante' },
      { value: 'a2', label: 'A2 — Básico' },
      { value: 'b1', label: 'B1 — Intermedio' },
      { value: 'b2', label: 'B2 — Intermedio-alto' },
      { value: 'c1', label: 'C1 — Avanzado' },
      { value: 'no-se', label: 'No lo sé' },
    ],
    goalOptions: [
      { value: 'viajes', label: 'Viajes' },
      { value: 'negocios', label: 'Negocios' },
      { value: 'delf-dalf', label: 'DELF o DALF' },
      { value: 'conversacion', label: 'Conversación' },
      { value: 'otro', label: 'Otro' },
    ],
  },
  en: {
    eyebrow: 'Book a session',
    title: 'Ready to start?',
    titleStandalone: 'Book your class',
    subtitle: 'Schedule your first trial class.',
    formAriaLabel: 'Form to book a class',
    fieldName: 'Full name',
    fieldNamePlaceholder: 'Your full name',
    fieldEmail: 'Email address',
    fieldEmailPlaceholder: 'you@email.com',
    fieldWhatsapp: 'WhatsApp',
    fieldWhatsappPlaceholder: '300 000 0000',
    fieldLevel: 'Current French level',
    fieldLevelDefault: 'Select your level',
    fieldGoal: 'Main goal',
    fieldGoalDefault: 'Why do you want to learn?',
    fieldMessage: 'Message (optional)',
    fieldMessagePlaceholder: 'Tell me a bit more about yourself and your goals...',
    checkboxText: 'I agree to receive information about courses and updates',
    submitBtn: 'Book my class →',
    successTitle: 'Message sent!',
    successText: "I'll reply within 24 hours. Welcome to French!",
    reassuranceQuote: '"I reply within 24 hours."',
    reassuranceSub: 'Book your first session today.',
    contactInfoAriaLabel: 'Contact information',
    socialsAriaLabel: 'Social media',
    levelOptions: [
      { value: 'ninguno', label: 'None / From scratch' },
      { value: 'a1', label: 'A1 — Beginner' },
      { value: 'a2', label: 'A2 — Elementary' },
      { value: 'b1', label: 'B1 — Intermediate' },
      { value: 'b2', label: 'B2 — Upper-intermediate' },
      { value: 'c1', label: 'C1 — Advanced' },
      { value: 'no-se', label: "I don't know" },
    ],
    goalOptions: [
      { value: 'viajes', label: 'Travel' },
      { value: 'negocios', label: 'Business' },
      { value: 'delf-dalf', label: 'DELF or DALF' },
      { value: 'conversacion', label: 'Conversation' },
      { value: 'otro', label: 'Other' },
    ],
  },
  fr: {
    eyebrow: 'Prendre rendez-vous',
    title: 'Prêt(e) à commencer\u00a0?',
    titleStandalone: 'Réservez votre cours',
    subtitle:
      "Planifiez votre premier cours d'essai entièrement.",
    formAriaLabel: 'Formulaire pour réserver un cours',
    fieldName: 'Nom complet',
    fieldNamePlaceholder: 'Votre nom complet',
    fieldEmail: 'Adresse e-mail',
    fieldEmailPlaceholder: 'vous@email.com',
    fieldWhatsapp: 'WhatsApp',
    fieldWhatsappPlaceholder: '300 000 0000',
    fieldLevel: 'Niveau actuel en français',
    fieldLevelDefault: 'Sélectionnez votre niveau',
    fieldGoal: 'Objectif principal',
    fieldGoalDefault: 'Pourquoi voulez-vous apprendre\u00a0?',
    fieldMessage: 'Message (facultatif)',
    fieldMessagePlaceholder: 'Parlez-moi un peu de vous et de vos objectifs...',
    checkboxText: "J'accepte de recevoir des informations sur les cours et les nouveautés",
    submitBtn: 'Réserver mon cours→',
    successTitle: 'Message envoyé\u00a0!',
    successText: 'Je vous réponds en moins de 24 heures. Bienvenue dans le français\u00a0!',
    reassuranceQuote: '«\u00a0Je réponds en moins de 24 heures.\u00a0»',
    reassuranceSub:
      "Réservez votre première séance aujourd'hui.",
    contactInfoAriaLabel: 'Informations de contact',
    socialsAriaLabel: 'Réseaux sociaux',
    levelOptions: [
      { value: 'ninguno', label: 'Aucun / Débutant complet' },
      { value: 'a1', label: 'A1 — Débutant' },
      { value: 'a2', label: 'A2 — Élémentaire' },
      { value: 'b1', label: 'B1 — Intermédiaire' },
      { value: 'b2', label: 'B2 — Intermédiaire supérieur' },
      { value: 'c1', label: 'C1 — Avancé' },
      { value: 'no-se', label: 'Je ne sais pas' },
    ],
    goalOptions: [
      { value: 'viajes', label: 'Voyages' },
      { value: 'negocios', label: 'Affaires' },
      { value: 'delf-dalf', label: 'DELF ou DALF' },
      { value: 'conversacion', label: 'Conversation' },
      { value: 'otro', label: 'Autre' },
    ],
  },
} as const;

// ── Footer ───────────────────────────────────────────────────────────────────
const footer = {
  es: {
    tagline:
      'Clases de francés personalizadas en Bogotá y online para adultos de toda LATAM.',
    navHeading: 'Navegación',
    socialHeading: 'Sígueme',
    links: {
      home: 'Inicio',
      about: 'Sobre mí',
      courses: 'Cursos',
      methodology: 'Metodología',
      blog: 'Blog',
      book: 'Agendar clase',
    },
    copyright: '© {year} OuiPaula. Todos los derechos reservados.',
    madeWith: 'Hecho con',
    madeWithSuffix: 'en Bogotá',
    logoAriaLabel: 'OuiPaula — Inicio',
  },
  en: {
    tagline:
      'Personalized French classes in Bogotá and online for adults across LATAM.',
    navHeading: 'Navigation',
    socialHeading: 'Follow me',
    links: {
      home: 'Home',
      about: 'About',
      courses: 'Courses',
      methodology: 'Methodology',
      blog: 'Blog',
      book: 'Book a class',
    },
    copyright: '© {year} OuiPaula. All rights reserved.',
    madeWith: 'Made with',
    madeWithSuffix: 'in Bogotá',
    logoAriaLabel: 'OuiPaula — Home',
  },
  fr: {
    tagline:
      "Cours de français personnalisés à Bogotá et en ligne pour adultes de toute l'Amérique latine.",
    navHeading: 'Navigation',
    socialHeading: 'Suivez-moi',
    links: {
      home: 'Accueil',
      about: 'À propos',
      courses: 'Cours',
      methodology: 'Méthode',
      blog: 'Blog',
      book: 'Réserver un cours',
    },
    copyright: '© {year} OuiPaula. Tous droits réservés.',
    madeWith: 'Fait avec',
    madeWithSuffix: 'à Bogotá',
    logoAriaLabel: 'OuiPaula — Accueil',
  },
} as const;

// ── Master dictionary export ─────────────────────────────────────────────────
export const ui = { seo, nav, hero, about, services, methodology, contact, footer } as const;

export type UI = typeof ui;
