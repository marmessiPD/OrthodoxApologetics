import type { Topic } from '../../../schema.ts';
import exodusNiePassiert from './exodus-nie-passiert.ts';
import davidSalomoLegenden from './david-salomo-legenden.ts';
import eroberungKanaans from './eroberung-kanaans.ts';
import patriarchenAnachronismen from './patriarchen-anachronismen.ts';
import dokumentenhypothese from './dokumentenhypothese.ts';

const topic: Topic = {
  id: 'at-archaeologie',
  category: 'geschichte',
  group: 'Altes Testament & Archäologie',
  order: 1,
  title: `Altes Testament und Archäologie`,
  subtitle: `Exodus, David und Salomo, Landnahme, Patriarchen, Mose als Autor`,
  icon: 'pickaxe',
  overview: `Seit dem 19. Jahrhundert wird das Alte Testament mit Spaten und Inschriften geprüft. Die Debatte verläuft zwischen **Maximalisten**, die biblische Berichte als weitgehend zuverlässige Geschichtsquelle lesen (Kenneth Kitchen, James Hoffmeier), und **Minimalisten**, für die die Bibel ein spätes Werk mit wenig historischem Gehalt ist (Kopenhagener Schule: Thomas L. Thompson, Niels Peter Lemche). Die Mehrheit bewegt sich dazwischen: Israel Finkelstein und William Dever halten die Königszeit ab dem 9. Jh. für historisch greifbar, die frühere Geschichte (Patriarchen, Exodus, Landnahme) für weitgehend unhistorisch oder stark stilisiert.

Für die Apologetik bedeutet das: Es gibt **echte Erfolge** – die Tel-Dan-Stele mit dem „Haus Davids" (1993) hat den Minimalismus empfindlich getroffen; die Merneptah-Stele bezeugt Israel um 1208 v. Chr.; viele Details passen ins Milieu ihrer Zeit. Es gibt aber auch **echte Probleme**: kein direkter Beleg für den Exodus, Datierungsfragen bei Jericho und Ai, Debatten über Kamele und Philister. Ein Laie, der ehrlich zwischen „bewiesen", „plausibel" und „offen" unterscheidet, ist in diesem Feld weit überzeugender als jemand, der jeden Fund als „Beweis" verkauft.

Mit dem Exodus berührt dieses Thema die **ägyptische Heimat der koptischen Kirche**. Ägyptische Quellen – Papyri, Stelen, Ortsnamen – sind hier die wichtigsten Zeugen; zugleich ist Ägypten in der Bibel nicht nur Land der Knechtschaft, sondern auch Zufluchtsort der Heiligen Familie und Empfänger der Verheißung „Gesegnet bist du, Ägypten, mein Volk" (Jes 19,25).`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Begriffe klären:** Was genau wird bestritten – das Ereignis, seine Größe, seine Datierung oder die Zuverlässigkeit der Quelle? Viele Debatten lösen sich auf, wenn man das trennt.
2. **Zugeständnisse zuerst:** Sage offen, was die Archäologie nicht zeigt (z. B. kein direkter Exodus-Beleg). Das nimmt dem Gegenüber den Wind aus den Segeln.
3. **Methodenfrage stellen:** Ein Argument aus dem Schweigen gilt nur, wenn Spuren zu erwarten wären. Zeltlager, das feuchte Nildelta, das überbaute Jerusalem und ägyptische Siegespropaganda sind schlechte Bedingungen für Funde.
4. **Positive Belege nennen:** Tel-Dan-Stele, Merneptah-Stele, ägyptisches Kolorit, Hazor, Sklavenpreise – immer mit genauer Einordnung.
5. **Den Text genau lesen:** Josua beschreibt keinen Blitzkrieg; die Tradition hat nie behauptet, Mose habe seinen eigenen Tod beschrieben. Viele Einwände treffen eine Karikatur der Bibel.

**Fallen:** Keine Pseudofunde (Wagenräder im Roten Meer, Noahs Arche, „Beweise" aus Sensationsmeldungen). Keine pauschale Abwertung von Archäologen. Nicht behaupten, „die Archäologie bestätigt die Bibel" – sagen: „Sie passt in vielen Punkten, in manchen ist sie offen, und nirgends hat sie den Glauben widerlegt."`,
  keyOpponents: [
    { name: 'Israel Finkelstein', role: 'Archäologe, Universität Tel Aviv', work: 'The Bible Unearthed (2001)' },
    { name: 'William G. Dever', role: 'Archäologe, University of Arizona (emer.)', work: 'What Did the Biblical Writers Know and When Did They Know It? (2001)' },
    { name: 'Thomas L. Thompson', role: 'Alttestamentler, Kopenhagener Schule', work: 'The Mythic Past (1999)' },
    { name: 'Thomas Römer', role: 'Alttestamentler, Collège de France', work: 'L\'invention de Dieu (2014)' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler, Wissenschaftskommunikator', work: 'Data Over Dogma' },
  ],
  claims: [exodusNiePassiert, davidSalomoLegenden, eroberungKanaans, patriarchenAnachronismen, dokumentenhypothese],
  newPeople: [
    {
      id: 'bryant-wood',
      name: 'Bryant G. Wood',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Archäologe, Associates for Biblical Research',
      fields: ['Archäologie', 'Spätbronzezeit', 'Jericho', 'Keramik'],
      bio: 'Promovierte an der University of Toronto über die Keramik der Spätbronzezeit in Palästina. Bekannt durch seine Neubewertung der Ausgrabungen in Jericho (1990), mit der er Kathleen Kenyons Datierung anfocht, und durch Grabungen in Khirbet el-Maqatir.',
      keyWorks: ['Did the Israelites Conquer Jericho? (Biblical Archaeology Review, 1990)'],
      caveat: 'Seine Datierung Jerichos ist eine Minderheitsposition und wurde von Fachkollegen kritisiert.',
    },
    {
      id: 'edwin-yamauchi',
      name: 'Edwin M. Yamauchi',
      years: 'geb. 1937',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Althistoriker, Miami University (Ohio)',
      fields: ['Alte Geschichte', 'Persien und Bibel', 'Griechenland und Babylon', 'Religionsgeschichte'],
      bio: 'Langjähriger Professor für Alte Geschichte, Spezialist für die Beziehungen zwischen Bibel, Persien, Griechenland und Mesopotamien. Schrieb über die griechischen Wörter im Buch Daniel, über Tammuz und den sogenannten vorchristlichen Gnostizismus.',
      keyWorks: ['Greece and Babylon (1967)', 'The Stones and the Scriptures (1972)', 'Persia and the Bible (1990)'],
    },
  ],
};

export default topic;
