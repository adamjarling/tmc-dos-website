// Placeholder press quotes — replace with real pulls.

export type PressQuote = {
  text: { en: string; es: string };
  source: string;
};

export const pressQuotes: PressQuote[] = [
  {
    text: {
      en: 'Blues-soaked rock and roll at its finest — the kind Chicago was built on.',
      es: 'Rocanrol con sabor a blues en su máxima expresión — del que se construye Chicago.',
    },
    source: 'Chicago Tribune',
  },
  {
    text: {
      en: 'Guitars turned up to 11. Catchy, elegant, and expertly crafted.',
      es: 'Guitarras al 11. Pegadizos, elegantes y trabajados con maestría.',
    },
    source: 'Chicago Reader',
  },
];
