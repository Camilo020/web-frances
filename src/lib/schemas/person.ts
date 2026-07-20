import type { Lang } from "../../i18n/utils";

const JOB_TITLES: Record<Lang, string> = {
    es: "Profesora de Francés",
    en: "French Language Teacher",
    fr: "Professeure de Français",
};

export interface PersonSchemaInput {
    description: string;
    lang: Lang;
    url?: string;
}

export interface PersonSchema {
    "@context": "https://schema.org";
    "@type": "Person";
    name: string;
    jobTitle: string;
    description: string;
    knowsLanguage: string[];
    address: {
        "@type": "PostalAddress";
        addressLocality: string;
        addressCountry: string;
    };
    url: string;
    sameAs: string[];
}

export const createPersonSchema = ({
    description,
    lang,
    url = "https://ouipaula.com",
}: PersonSchemaInput): PersonSchema => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "OuiPaula",
    jobTitle: JOB_TITLES[lang],
    description,
    knowsLanguage: ["es", "en", "fr"],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Bogotá",
        addressCountry: "CO",
    },
    url,
    sameAs: [
        "https://linkedin.com",
        "https://instagram.com",
        "https://youtube.com",
    ],
});
