import en from './en.json';
import es from './es.json';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en' satisfies Locale;

export type Locale = 'en' | 'es';

const dictionaries = { en, es } as const;

/**
 * Build a `t()` function bound to a locale. Resolves dot-paths against the
 * locale's JSON dictionary, falls back to English, then to the key itself.
 * Supports {{var}} interpolation.
 */
export function useTranslations(locale: Locale | string | undefined) {
  const lang = (locale && locale in dictionaries ? locale : defaultLang) as Locale;
  return function t(key: string, vars?: Record<string, string | number>): string {
    const value = resolve(dictionaries[lang], key) ?? resolve(dictionaries.en, key) ?? key;
    if (typeof value !== 'string') return key;
    if (!vars) return value;
    return value.replace(/\{\{(\w+)\}\}/g, (_, k) => String(vars[k] ?? ''));
  };
}

function resolve(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

/**
 * Pick a value from an object keyed by locale, with English fallback.
 * Useful for content like bio paragraphs or video descriptions where
 * the data lives next to the entity rather than in the i18n dictionary.
 */
export function pickLocale<T>(
  values: Partial<Record<Locale, T>>,
  locale: Locale | string | undefined,
): T | undefined {
  const lang = (locale && locale in values ? locale : defaultLang) as Locale;
  return values[lang] ?? values.en;
}
