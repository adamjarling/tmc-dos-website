export type SocialLink = {
  name: string;
  url: string;
};

export const socials = {
  facebook:  'https://www.facebook.com/themidnightcallsofficial',
  instagram: 'https://www.instagram.com/themidnightcallsofficial/',
  spotify:   'https://open.spotify.com/artist/6rcObgTuaf4s9uaOEK68D9?si=GBA_A_1nSDS_BwJEzAUEeg',
  youtube:   'https://www.youtube.com/@themidnightcalls',
  bandcamp:  'https://themidnightcalls.bandcamp.com/',
  appleMusic: 'https://music.apple.com/de/artist/the-midnight-calls/1709903220',
} as const;

export const footerSocials: SocialLink[] = [
  { name: 'Facebook',  url: socials.facebook },
  { name: 'Instagram', url: socials.instagram },
  { name: 'Spotify',   url: socials.spotify },
  { name: 'YouTube',   url: socials.youtube },
  { name: 'Bandcamp',  url: socials.bandcamp },
];

export const streamLinks: SocialLink[] = [
  { name: 'Spotify',     url: socials.spotify },
  { name: 'Apple Music', url: socials.appleMusic },
  { name: 'YouTube',     url: socials.youtube },
];
