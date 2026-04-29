// Locale-aware path helpers. Astro's getRelativeLocaleUrl works for the
// general case, but we want a small wrapper that reads the current locale
// and produces both the "for current locale" and "for other locale" forms.

import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '../i18n/ui';

export const LOCALES: Locale[] = ['en', 'es'];

export function localePath(locale: string | undefined, path: string): string {
  return getRelativeLocaleUrl(locale ?? 'en', path);
}

/** All routes the nav links to, in display order. */
export const NAV_ROUTES = [
  { key: 'about',   path: 'about' },
  { key: 'music',   path: 'music' },
  { key: 'tour',    path: 'tour' },
  { key: 'gallery', path: 'gallery' },
  { key: 'videos',  path: 'videos' },
  { key: 'merch',   path: 'merch' },
  { key: 'press',   path: 'press' },
  { key: 'contact', path: 'contact' },
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
