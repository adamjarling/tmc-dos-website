// Wrapper around the shows data source. When the external API comes online,
// this file is the only one that needs to change — call sites consume the
// helpers below.

import { shows, type Show } from '../data/shows';

const NOW = new Date();

function parseShowDate(s: Show): Date {
  return new Date(s.datetime);
}

export function getAllShows(): Show[] {
  return [...shows].sort(
    (a, b) => parseShowDate(a).getTime() - parseShowDate(b).getTime(),
  );
}

export function getUpcomingShows(): Show[] {
  return getAllShows().filter((s) => parseShowDate(s) >= NOW);
}

export function getPastShows(): Show[] {
  return getAllShows()
    .filter((s) => parseShowDate(s) < NOW)
    .reverse(); // newest past first
}

export function getSpain2026(): Show[] {
  return getUpcomingShows().filter((s) => {
    const d = parseShowDate(s);
    const country = s.venue.country.toLowerCase();
    return (
      d.getFullYear() === 2026 &&
      (country === 'spain' || country === 'portugal') &&
      d.getMonth() >= 4 && // May (0-indexed)
      d.getMonth() <= 5
    );
  });
}

export function getUpcomingUS(): Show[] {
  return getUpcomingShows().filter(
    (s) => s.venue.country.toLowerCase() === 'usa',
  );
}

export type { Show };
