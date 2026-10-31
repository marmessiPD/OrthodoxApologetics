import type { Era, QuoteStatus, SourceKind, Tradition } from '@/content/schema';

export const sourceKindLabel: Record<SourceKind, string> = {
  bibel: 'Bibel',
  koran: 'Koran',
  hadith: 'Hadith & Tafsir',
  juedisch: 'Jüdische Quelle',
  oestlich: 'Östliche Schrift',
  kirchenvater: 'Kirchenvater',
  koptisch: 'Koptische Quelle',
  liturgie: 'Liturgie',
  konzil: 'Konzil & Bekenntnis',
  wissenschaft: 'Wissenschaft',
  fachliteratur: 'Fachliteratur',
  gegner: 'Gegenseite',
  sonstiges: 'Sonstiges',
};

export const statusLabel: Record<QuoteStatus, { short: string; long: string }> = {
  verbatim: { short: 'Wörtlich', long: 'Wörtliches Zitat – Wortlaut und Fundstelle gesichert' },
  paraphrase: { short: 'Sinngemäß', long: 'Sinngemäße Wiedergabe mit Fundstelle' },
  unverified: { short: 'Prüfen', long: 'Wortlaut oder Fundstelle vor Verwendung prüfen' },
};

export const eraLabel: Record<Era, string> = {
  biblisch: 'Biblische Zeit',
  patristisch: 'Kirchenväter',
  mittelalter: 'Mittelalter',
  neuzeit: 'Neuzeit',
  modern: 'Gegenwart',
};

export const eraOrder: Era[] = ['biblisch', 'patristisch', 'mittelalter', 'neuzeit', 'modern'];

export const traditionLabel: Record<Tradition, string> = {
  koptisch: 'Koptisch-orthodox',
  orientalisch: 'Orientalisch-orthodox',
  ungeteilt: 'Ungeteilte Kirche',
  orthodox: 'Östlich-orthodox',
  katholisch: 'Katholisch',
  evangelisch: 'Evangelisch',
  anglikanisch: 'Anglikanisch',
  messianisch: 'Messianisch-jüdisch',
  ostsyrisch: 'Kirche des Ostens',
  christlich: 'Christlich',
  theistisch: 'Theist',
};

export const difficultyLabel: Record<1 | 2 | 3, string> = {
  1: 'Einstieg',
  2: 'Fortgeschritten',
  3: 'Experten-Debatte',
};
