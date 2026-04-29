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
