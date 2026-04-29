export type Member = {
  name: string;
  role: { en: string; es: string };
};

export const members: Member[] = [
  { name: 'Taran de Pablos', role: { en: 'Vocals',              es: 'Voz' } },
  { name: 'Adam Arling',     role: { en: 'Guitars',             es: 'Guitarras' } },
  { name: 'Jake Pallisard',  role: { en: 'Guitars & Vocals',    es: 'Guitarras y Voz' } },
  { name: 'Sean Barnes',     role: { en: 'Bass',                es: 'Bajo' } },
  { name: 'Chuck Harling',   role: { en: 'Drums & Percussion',  es: 'Batería y Percusión' } },
];
