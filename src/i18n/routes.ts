/**
 * Centralized route map for all localized pages.
 * Single source of truth for canonical URLs, hreflang, and internal links.
 * Used by BaseHead.astro, Navbar.astro, Footer.astro, and all page components.
 */

export type RouteKey = 'home' | 'agendar' | 'blog' | 'blogPost';
export type Lang = 'es' | 'en' | 'fr';

export const ROUTES: Record<RouteKey, Record<Lang, string>> = {
    home: {
        es: '/',
        en: '/en/',
        fr: '/fr/',
    },
    agendar: {
        es: '/agendar/',
        en: '/en/agendar/',
        fr: '/fr/agendar/',
    },
    blog: {
        es: '/blog/',
        en: '/en/blog/',
        fr: '/fr/blog/',
    },
    blogPost: {
        es: '/blog/',
        en: '/en/blog/',
        fr: '/fr/blog/',
    },
};

/**
 * Resolves a RouteKey from an absolute pathname.
 * Returns `null` if the pathname does not match any known route.
 */
export function resolveRouteKey(pathname: string): RouteKey | null {
    const normalized = pathname.replace(/\/$/, '') || '/';

    for (const [key, variants] of Object.entries(ROUTES) as [RouteKey, Record<Lang, string>][]) {
        for (const path of Object.values(variants)) {
            const routeBase = path.replace(/\/$/, '') || '/';
            if (normalized === routeBase) {
                return key;
            }
        }
    }

    // Dynamic blog post: /blog/slug/ or /en/blog/slug/ or /fr/blog/slug/
    if (/^\/(?:en\/|fr\/)?blog\/[^/]+\/?$/.test(pathname)) {
        return 'blogPost';
    }

    return null;
}

/**
 * Checks whether a pathname belongs to a localizable route.
 * Delegates to `resolveRouteKey` — single source of truth.
 */
export function isKnownRoute(pathname: string): boolean {
    return resolveRouteKey(pathname) !== null;
}

/**
 * Returns the x-default URL (policy: always /en/).
 */
export function getXDefaultUrl(): string {
    return ROUTES.home.en;
}
