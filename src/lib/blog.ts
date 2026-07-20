import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/routes';

export type BlogPost = CollectionEntry<'blog'>;

/**
 * Returns non-draft posts for a given language, newest first.
 */
export async function getPostsByLang(lang: Lang): Promise<BlogPost[]> {
    const posts = await getCollection('blog', ({ data }) => {
        return data.lang === lang && !data.draft;
    });

    return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/**
 * Returns translated variants for the same translationKey.
 * Includes draft entries so editors can link available locales intentionally.
 */
export async function getTranslations(post: BlogPost): Promise<Partial<Record<Lang, BlogPost>>> {
    const siblings = await getCollection('blog', ({ data }) => {
        return data.translationKey === post.data.translationKey;
    });

    const byLang: Partial<Record<Lang, BlogPost>> = {};

    for (const entry of siblings) {
        byLang[entry.data.lang] = entry;
    }

    return byLang;
}
