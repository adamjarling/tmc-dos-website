export type Track = {
  title: string;
  available: boolean;
  youtubeId?: string;
};

export const tracks: Track[] = [
  { title: "Prelude 2 / Take The Money",   available: false },
  { title: "When I'm Young",               available: false },
  { title: "Winter Song",                  available: false },
  { title: "Objectophilia",                available: true,  youtubeId: "LdWKxYnJZL4" },
  { title: "Talk To Me",                   available: false },
  { title: "Nothing But The Trouble",      available: false },
  { title: "Suit, Tie & A Silver Tongue",  available: false },
  { title: "The Neon Song",                available: false },
  { title: "To The Bottom",               available: false },
];
