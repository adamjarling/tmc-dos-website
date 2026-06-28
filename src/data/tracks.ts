export type Track = {
  title: string;
  available: boolean;
  youtubeId?: string;
  spotify?: string;
};

export const tracks: Track[] = [
  { title: "Prelude 2 / Take The Money",   available: true,  spotify: "https://open.spotify.com/track/1EySp44uzf6U8mHNT2nyc8" },
  { title: "When I'm Young",               available: true,  spotify: "https://open.spotify.com/track/7gbT5CjTj4Hcxv5aNchC4g" },
  { title: "Winter Song",                  available: false },
  { title: "Objectophilia",                available: true,  youtubeId: "LdWKxYnJZL4" },
  { title: "Talk To Me",                   available: false },
  { title: "Nothing But The Trouble",      available: false },
  { title: "Suit, Tie & A Silver Tongue",  available: false },
  { title: "The Neon Song",                available: false },
  { title: "To The Bottom",               available: false },
];
