// Live photo gallery. Filenames map to src/assets/photos/.
// Captions are bilingual where they describe the subject.

export type LivePhoto = {
  file: string;
  alt: { en: string; es: string };
};

export const livePhotos: LivePhoto[] = [
  { file: '_U7A2964.jpg',                                           alt: { en: 'Sean Barnes — bass',         es: 'Sean Barnes — bajo' } },
  { file: '505318457_775036008193220_1042307814692525926_n.jpg',    alt: { en: 'Taran de Pablos — live',     es: 'Taran de Pablos — en directo' } },
  { file: '_U7A3096.jpg',                                           alt: { en: 'Chuck Harling — drums',      es: 'Chuck Harling — batería' } },
  { file: 'IMG_7642.jpg',                                           alt: { en: 'Full band with crowd',       es: 'La banda completa con el público' } },
  { file: '505117059_775036738193147_3844990692697810430_n.jpg',    alt: { en: 'Jake Pallisard — guitar',    es: 'Jake Pallisard — guitarra' } },
  { file: '505408571_775036441526510_3827544340527663400_n.jpg',    alt: { en: 'Chuck Harling — live',       es: 'Chuck Harling — en directo' } },
  { file: '20250608_005042.jpg',                                    alt: { en: 'The band live in Spain',     es: 'La banda en directo en España' } },
  { file: '505295310_775035121526642_7680780177072026998_n.jpg',    alt: { en: 'Taran de Pablos — crowd',    es: 'Taran de Pablos — público' } },
  { file: '505443704_775035508193270_2202194173097249010_n.jpg',    alt: { en: 'Live performance',           es: 'Actuación en directo' } },
  { file: '505590872_775036394859848_3960217479809390153_n.jpg',    alt: { en: 'Live performance',           es: 'Actuación en directo' } },
  { file: '_U7A3353.jpg',                                           alt: { en: 'Live performance',           es: 'Actuación en directo' } },
  { file: '540479843_758329336943658_7874683605367703828_n.jpg',    alt: { en: 'Live performance',           es: 'Actuación en directo' } },
];
