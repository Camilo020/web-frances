/**
 * Pure utility functions — no side effects, no mutations.
 */

/**
 * Format a date to "Ene 2025" style (Spanish locale short month).
 */
export function formatDate(date: Date): string {
    return date.toLocaleDateString('es-CO', {
        month: 'short',
        year: 'numeric',
    });
}

/**
 * Convert a human-readable string to a URL-safe slug.
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

/**
 * Truncate a string to a maximum number of characters, appending "…".
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Estimate reading time in minutes from a raw string body.
 * Uses a 200 words-per-minute reading speed.
 */
export function getReadingTime(body: string): number {
    const words = body.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}

/**
 * Return a string like "5 min · Ene 2025" for article metadata.
 */
export function getArticleMeta(date: Date, readingTime: number): string {
    return `${readingTime} min · ${formatDate(date)}`;
}
