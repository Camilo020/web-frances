import type { Lang } from "../../i18n/utils";

const NAMES: Record<Lang, string> = {
    es: "Clases de Francés",
    en: "French Classes",
    fr: "Cours de Français",
};

export interface ServiceSchemaInput {
    description: string;
    lang: Lang;
    url?: string;
}

export interface ServiceSchema {
    "@context": "https://schema.org";
    "@type": "Service";
    name: string;
    description: string;
    provider: {
        "@type": "Person";
        name: string;
    };
    areaServed: {
        "@type": "Place";
        name: string;
    };
    availableChannel: {
        "@type": "ServiceChannel";
        serviceUrl: string;
    };
    inLanguage: Lang;
}

export const createServiceSchema = ({
    description,
    lang,
    url = "https://ouipaula.com",
}: ServiceSchemaInput): ServiceSchema => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: NAMES[lang],
    description,
    provider: {
        "@type": "Person",
        name: "OuiPaula",
    },
    areaServed: {
        "@type": "Place",
        name: "Worldwide",
    },
    availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: url,
    },
    inLanguage: lang,
});
