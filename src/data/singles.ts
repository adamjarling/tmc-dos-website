// Single releases — ordered newest first.
// Cover images live in src/assets/covers/ and are referenced by basename
// so the consumer can resolve them with import.meta.glob() at build time.

export type Single = {
  title: string;
  year: string;
  cover?: string;
  youtubeId?: string;
  links?: {
    spotify?: string;
    apple?: string;
    youtube?: string;
    bandcamp?: string;
  };
};

export const singles: Single[] = [
  {
    title: 'Take the Money',
    year: '2026',
    cover: 'midnight-calls_take-the-money.png',
    links: {
      spotify: 'https://open.spotify.com/track/1EySp44uzf6U8mHNT2nyc8',
      apple: 'https://music.apple.com/de/album/take-the-money-single/6778024713',
      bandcamp: 'https://themidnightcalls.bandcamp.com/album/dos',
    },
  },
  {
    title: "When I'm Young",
    year: '2026',
    cover: 'midnight-calls_when-im-young.png',
    links: {
      spotify: 'https://open.spotify.com/track/7gbT5CjTj4Hcxv5aNchC4g',
      apple: 'https://music.apple.com/de/song/when-im-young/6769861328',
      bandcamp: 'https://themidnightcalls.bandcamp.com/album/dos',
    },
  },
  {
    title: 'Objectophilia',
    year: '2025',
    cover: 'objectophilia-cover-fade_the-midnight-calls.jpg',
    youtubeId: 'LdWKxYnJZL4',
  },
  {
    title: "Since I've Been Thinking",
    year: '2024',
    cover: 'since_single_cover-final.jpeg',
    youtubeId: 'tpHGded-Ung',
  },
  {
    title: 'So Cold',
    year: '2024',
    cover: 'so-cold_single-cover.png',
    youtubeId: '0EN_QF5trtU',
  },
  {
    title: 'Coming Up Roses',
    year: '2023',
    cover: 'roses-single-cover-v4-3.jpg',
    youtubeId: 'ba9kWpoC9_U',
  },
  {
    title: 'Whaddya',
    year: '2023',
    cover: 'whaddya_single-cover.jpg',
    youtubeId: '8p8w0IqR1kg',
  },
];
