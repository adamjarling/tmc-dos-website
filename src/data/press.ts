export type PressQuote = {
  text: { en: string; es: string };
  source: string;
};

export const pressQuotes: PressQuote[] = [
  {
    text: {
      en: 'Warm, swaggering 70s hard rock, spiced with bluesy slide guitar for a southern-tinged finish... Tasty.',
      es: 'Hard rock de los 70 cálido y arrogante, sazonado con slide blues para un acabado sureño... Apetitoso.',
    },
    source: 'Classic Rock Magazine (UK)',
  },
  {
    text: {
      en: 'They are one of those bands that, after seeing and hearing them, makes you think in that moment they are the best in the world.',
      es: 'Son de esas bandas que, después de verles y escucharles, te hacen pensar en ese momento que son los mejores del mundo.',
    },
    source: 'Popular 1 (Spain) · Fernando Tanxencias · 8/10',
  },
  {
    text: {
      en: 'Recognizable flavors of American Blues Rock served with the elegance and expertise of seasoned musicians.',
      es: 'Sabores reconocibles del Blues Rock americano servidos con la elegancia y el buen hacer de músicos curtidos en mil batallas.',
    },
    source: 'The Midnight Calls',
  },
];
