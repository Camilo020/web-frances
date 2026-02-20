export interface MethodologyPillar {
    step: number;
    icon: string;
    titleEs: string;
    titleFr: string;
    description: string;
}

export const methodologyPillars: MethodologyPillar[] = [
    {
        step: 1,
        icon: 'tabler:messages',
        titleEs: 'Comunicativo',
        titleFr: 'Communicatif',
        description:
            'Hablamos desde el primer día. El error es parte del proceso, no un obstáculo. La fluidez nace de la práctica real.',
    },
    {
        step: 2,
        icon: 'tabler:target',
        titleEs: 'Personalizado',
        titleFr: 'Personnalisé',
        description:
            'Tu plan de estudio es único. Adaptado a tu nivel, ritmo y metas concretas. Sin planes genéricos.',
    },
    {
        step: 3,
        icon: 'tabler:building-arch',
        titleEs: 'Cultural',
        titleFr: 'Culturel',
        description:
            'El idioma y la cultura son inseparables. Aprendemos el francés que se vive, no solo el que se estudia.',
    },
    {
        step: 4,
        icon: 'tabler:trending-up',
        titleEs: 'Progresivo',
        titleFr: 'Progressif',
        description:
            'Avance medible con retroalimentación constante y metas claras en cada etapa de tu aprendizaje.',
    },
];
