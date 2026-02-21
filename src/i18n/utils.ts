/**
 * i18n Utility Helpers
 * Provides runtime helpers for language detection and translation access.
 * Used by all UI components — keeps them locale-agnostic.
 */

import { ui, languages } from './ui';
import type { Lang, UI } from './ui';

export { languages };
export type { Lang };

/** Supported locales tuple for type-safe checks */
export const LOCALES = ['es', 'en', 'fr'] as const;
export const DEFAULT_LOCALE: Lang = 'es';

/**
 * Detect the current language from the URL pathname.
 * - /          → 'es'  (default, no prefix)
 * - /en/...    → 'en'
 * - /fr/...    → 'fr'
 */
export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment === 'en' || firstSegment === 'fr') {
    return firstSegment as Lang;
  }
  return DEFAULT_LOCALE;
}

/**
 * Returns a typed translation accessor for the given locale.
 * Usage inside .astro frontmatter:
 *   const t = useTranslations(lang);
 *   t('nav')  → nav dictionary for that locale
 *   t('hero') → hero dictionary for that locale
 */
export function useTranslations(lang: Lang) {
  return function t<K extends keyof UI>(section: K): UI[K][Lang] {
    return ui[section][lang] as UI[K][Lang];
  };
}

/**
 * Given the current URL, returns the equivalent path for a target locale.
 * Handles the default locale (no prefix) vs. prefixed locales.
 *
 * Examples:
 *   /           + 'en' → /en/
 *   /en/        + 'es' → /
 *   /fr/        + 'en' → /en/
 *   /en/#cursos + 'fr' → /fr/#cursos
 */
export function getRouteFromUrl(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);

  // Strip the current lang prefix to get the "bare" path
  let barePath = url.pathname;
  if (currentLang !== DEFAULT_LOCALE) {
    // Remove /en or /fr prefix
    barePath = barePath.replace(`/${currentLang}`, '') || '/';
  }

  // Ensure barePath starts with /
  if (!barePath.startsWith('/')) barePath = '/' + barePath;

  // Build the target URL
  const targetPath =
    targetLang === DEFAULT_LOCALE
      ? barePath
      : `/${targetLang}${barePath === '/' ? '/' : barePath}`;

  // Preserve hash (anchor) if present
  return targetPath + url.hash;
}

/**
 * Returns the canonical URL for a given locale and base URL.
 * Used in BaseLayout for hreflang injection.
 */
export function getCanonicalForLang(siteUrl: string, url: URL, lang: Lang): string {
  const currentLang = getLangFromUrl(url);

  let barePath = url.pathname;
  if (currentLang !== DEFAULT_LOCALE) {
    barePath = barePath.replace(`/${currentLang}`, '') || '/';
  }
  if (!barePath.startsWith('/')) barePath = '/' + barePath;

  const prefix = lang === DEFAULT_LOCALE ? '' : `/${lang}`;
  const fullPath = prefix + (barePath === '/' ? '/' : barePath);

  return `${siteUrl}${fullPath}`;
}
