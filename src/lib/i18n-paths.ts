// Locale-aware path helpers. Astro's getRelativeLocaleUrl works for the
// general case, but we want a small wrapper that reads the current locale
// and produces both the "for current locale" and "for other locale" forms.

import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '../i18n/ui';

export const LOCALES: Locale[] = ['en', 'es'];

export function localePath(locale: string | undefined, path: string): string {
  return getRelativeLocaleUrl(locale ?? 'en', path);
}

/** Nav routes — all sections are hash anchors on the homepage. */
export const NAV_ROUTES = [
  { key: 'about',   anchor: 'about' },
  { key: 'music',   anchor: 'music' },
  { key: 'tour',    anchor: 'tour' },
  { key: 'gallery', anchor: 'gallery' },
  { key: 'videos',  anchor: 'videos' },
  { key: 'merch',   anchor: 'merch' },
  { key: 'press',   anchor: 'press' },
  { key: 'contact', anchor: 'contact' },
] as const;

/**
 * Given the current pathname (e.g. "/es/music" or "/tour"), return the
 * equivalent pathname under a different locale.
 */
export function switchLocale(pathname: string, target: Locale): string {
  // Strip any leading locale segment.
  const stripped = pathname.replace(/^\/(en|es)(\/|$)/, '/');
  const cleaned = stripped === '' ? '/' : stripped;

  if (target === 'en') return cleaned;
  if (cleaned === '/') return '/es/';
  return `/es${cleaned}`;
}
