/**
 * SEO utilities for canonical URLs, OG images, hreflang, and localization.
 * Consumes ROUTES from src/i18n/routes.ts (single source of truth).
 * Used by BaseHead.astro and page-specific layouts.
 */

import { ROUTES, type Lang, type RouteKey, resolveRouteKey } from '../i18n/routes';
export { getXDefaultUrl } from '../i18n/routes';
export { resolveRouteKey } from '../i18n/routes';

const SITE_URL = 'https://ouipaula.com';

const LOCALE_MAP: Record<Lang, string> = {
    es: 'es-CO',
    en: 'en-US',
    fr: 'fr-FR',
};

/** Static routes that have a 1:1 mapping in ROUTES. */
const STATIC_ROUTE_KEYS: ReadonlyArray<RouteKey> = ['home', 'agendar', 'blog'];

/**
 * Returns the canonical URL for the given path.
 * Always uses pathname only (no query strings).
 */
export function getCanonicalUrl(path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${SITE_URL}${cleanPath}`;
}

/**
 * Returns an absolute OG image URL.
 * Fallback to /og-default.png if no image provided.
 */
export function getOgImageUrl(image?: string): string {
    const imagePath = image || '/og-default.png';
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${SITE_URL}${cleanPath}`;
}

/**
 * Determines if a pathname corresponds to a localizable route.
 * Delegates to `resolveRouteKey` from routes.ts — no pathnames hardcodeados.
 */
export function isLocalizableRoute(pathname: string): boolean {
    return resolveRouteKey(pathname) !== null;
}

/**
 * Returns hreflang alternate URLs for the current pathname.
 * Returns null if the route is not localizable.
 *
 * For blog posts: the slug is the same across languages, but the
 * path structure varies (ES: /blog/slug/, EN: /en/blog/slug/, FR: /fr/blog/slug/).
 */
export function getHreflangUrls(
    pathname: string,
): Array<{ hreflang: string; href: string }> | null {
    const routeKey = resolveRouteKey(pathname);

    if (routeKey === null) {
        return null;
    }

    // Extract slug for blog posts
    let slug = '';
    if (routeKey === 'blogPost') {
        const match = pathname.match(/\/blog\/([^/]+)\//);
        if (match) {
            slug = match[1];
        }
    }

    const langs: Lang[] = ['es', 'en', 'fr'];

    return langs.map((lang) => {
        let routePath: string;

        if (routeKey === 'blogPost') {
            routePath = `${ROUTES.blogPost[lang]}${slug}/`;
        } else if (STATIC_ROUTE_KEYS.includes(routeKey)) {
            routePath = ROUTES[routeKey][lang];
        } else {
            // Should never happen — fallback to same path
            routePath = pathname;
        }

        return {
            hreflang: LOCALE_MAP[lang],
            href: getCanonicalUrl(routePath),
        };
    });
}

/**
 * Returns the language code from the current pathname.
 * Examples:
 *   / → es
 *   /en/ → en
 *   /fr/blog/post/ → fr
 */
export function getLocaleFromPathname(pathname: string): Lang {
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];

    if (firstSegment === 'en' || firstSegment === 'fr') {
        return firstSegment as Lang;
    }

    return 'es';
}