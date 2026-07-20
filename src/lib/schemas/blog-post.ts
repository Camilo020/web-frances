import type { CollectionEntry } from "astro:content";
import { getCanonicalUrl } from "../seo";

export interface BlogPostSchemaInput {
    post: CollectionEntry<"blog">;
    slug: string;
    lang: "es" | "en" | "fr";
}

export interface BreadcrumbItem {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
}

export interface BlogPostingSchema {
    "@context": "https://schema.org";
    "@type": "BlogPosting";
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    inLanguage: string;
    author: {
        "@type": "Person";
        name: string;
    };
    publisher: {
        "@type": "Organization";
        name: string;
        logo: {
            "@type": "ImageObject";
            url: string;
        };
    };
    mainEntityOfPage: string;
    image?: string;
}

export interface BreadcrumbListSchema {
    "@context": "https://schema.org";
    "@type": "BreadcrumbList";
    itemListElement: BreadcrumbItem[];
}

export const createBlogPostingSchema = ({ post, slug, lang }: BlogPostSchemaInput): BlogPostingSchema => {
    const canonicalPath = lang === "es" ? `/blog/${slug}/` : `/${lang}/blog/${slug}/`;

    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.data.title,
        description: post.data.description,
        datePublished: post.data.pubDate.toISOString(),
        dateModified: (post.data.updatedDate ?? post.data.pubDate).toISOString(),
        inLanguage: post.data.lang,
        author: {
            "@type": "Person",
            name: "OuiPaula",
        },
        publisher: {
            "@type": "Organization",
            name: "OuiPaula",
            logo: {
                "@type": "ImageObject",
                url: getCanonicalUrl("/favicon.svg"),
            },
        },
        mainEntityOfPage: getCanonicalUrl(canonicalPath),
        image: post.data.cover ? getCanonicalUrl(post.data.cover) : undefined,
    };
};

export const createBreadcrumbListSchema = ({ slug, lang }: Pick<BlogPostSchemaInput, "slug" | "lang">): BreadcrumbListSchema => {
    const blogPath = lang === "es" ? "/blog/" : `/${lang}/blog/`;
    const postPath = lang === "es" ? `/blog/${slug}/` : `/${lang}/blog/${slug}/`;

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: getCanonicalUrl("/"),
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: getCanonicalUrl(blogPath),
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Artículo",
                item: getCanonicalUrl(postPath),
            },
        ],
    };
};
