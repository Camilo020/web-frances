export interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    titleFr: string;
    description: string;
    chips: string[];
    cta: string;
}

export const services: ServiceItem[] = [
    {
        id: 'individual',
        icon: 'tabler:user',
        title: 'Clases Individuales',
        titleFr: 'Cours particuliers',
        description:
            'Plan 100% personalizado según tu nivel, objetivos y disponibilidad. Avanza a tu propio ritmo con atención exclusiva.',
        chips: ['Nivel A1–C2', 'Online o presencial', 'Horario flexible'],
        cta: 'Conocer más',
    },
    {
        id: 'business',
        icon: 'tabler:briefcase',
        title: 'Francés de Negocios',
        titleFr: 'Français des affaires',
        description:
            'Comunicación profesional, presentaciones, emails y cultura empresarial del mundo francófono para ejecutivos.',
        chips: ['Ejecutivos', 'Reuniones', 'Presentaciones'],
        cta: 'Conocer más',
    },
    {
        id: 'delf',
        icon: 'tabler:certificate',
        title: 'Prep. DELF / DALF',
        titleFr: 'Préparation officielle',
        description:
            'Prepárate con estrategia y material oficial para obtener tu certificación del Ministerio de Francia.',
        chips: ['Todos los niveles', 'Simulacros', 'Material oficial'],
        cta: 'Conocer más',
    },
    {
        id: 'travel',
        icon: 'tabler:plane',
        title: 'Francés para Viajes',
        titleFr: 'Français du voyageur',
        description:
            'Frases clave, vocabulario práctico y tips culturales para viajar con seguridad y confianza total.',
        chips: ['Desde cero', 'Supervivencia', 'Cultura viajera'],
        cta: 'Conocer más',
    },
];
