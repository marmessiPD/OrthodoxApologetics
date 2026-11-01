import type { Topic } from '../../../schema.ts';
import isnadWissenschaftlichGesichert from './isnad-wissenschaftlich-gesichert.ts';
import quranistenNurKoran from './quranisten-nur-koran.ts';
import siraVorbildlicherCharakter from './sira-vorbildlicher-charakter.ts';
import orientalistenVorurteil from './orientalisten-vorurteil.ts';

const topic: Topic = {
  id: 'islam-hadith-sira',
  category: 'religionen',
  group: 'Islam',
  order: 8,
  title: `Hadith und Sira`,
  subtitle: `Wie zuverlässig sind die Überlieferungen über Mohammed – und was folgt daraus?`,
  icon: 'scroll-text',
  overview: `Fast alles, was Muslime über das Leben Mohammeds, die Gebetsordnung, das Recht und sogar die Sammlung des Korans wissen, stammt nicht aus dem Koran, sondern aus zwei weiteren Quellengruppen: den **Hadithen** (Berichte über Worte und Taten des Propheten, jeweils mit einer Überliefererkette, dem *isnād*) und der **Sira** (Prophetenbiografie). Die maßgeblichen Sammlungen – al-Bukhari (gest. 870), Muslim (gest. 875), Abu Dawud, at-Tirmidhi, an-Nasaʾi, Ibn Maja – entstanden rund 200–250 Jahre nach Mohammeds Tod (632). Die älteste Biografie, die des Ibn Ishaq (gest. ca. 767), ist nur in der Bearbeitung des Ibn Hisham (gest. 833) erhalten.

Muslimische Gelehrte entwickelten eine eindrucksvolle Überlieferungskritik, um Echtes von Gefälschtem zu trennen – und bezeugten dabei selbst, wie verbreitet Fälschungen waren. Die westliche Forschung bewertet die Zuverlässigkeit sehr unterschiedlich: von großer Skepsis (Goldziher 1890, Schacht 1950) über vermittelnde Positionen (Juynboll, Motzki) bis zur Verteidigung der klassischen Methode (Jonathan Brown). Innerhalb des Islam gibt es zudem die **Quranisten**, die die Hadithe ganz verwerfen.

Für das Gespräch ist entscheidend: Die Hadith-Frage ist kein Randthema, sondern das Fundament der gelebten Religion. Daraus ergibt sich das **Hadith-Dilemma**: Sind die Sammlungen zuverlässig, dann gehören auch Todesstrafe für Apostasie, Steinigung und die Ehe mit der neunjährigen Aischa zum authentischen Vorbild „für alle Zeiten" (33:21). Sind sie unzuverlässig, verliert der Islam seine Praxis, seine Prophetenbiografie und die Bezeugung seiner eigenen Koransammlung.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Anerkennung zuerst:** Würdige die Isnad-Wissenschaft als echte Leistung. Wer sie verspottet, hat verloren.
2. **Zeitabstand klären** (★ „isnad-wissenschaftlich-gesichert"): Frage, wann die Sammlungen entstanden und wann die Kettenprüfung einsetzte. Lass dein Gegenüber die Zahlen selbst nennen.
3. **Das Dilemma stellen:** Nicht „Die Hadithe sind gefälscht!", sondern: „Hältst du Bukhari für zuverlässig? Dann gilt auch Bukhari 6922. Wenn nicht – woher weißt du, wie man betet?"
4. **Vorbild-Frage** („sira-vorbildlicher-charakter"): „Gibt es eine Handlung Mohammeds, die nicht Vorbild für heute ist?" – und dann sanft das Gegenbild Christi zeigen (1 Petr 2,21–23).
5. **Quranisten** („quranisten-nur-koran") anders angehen: Mit dem Koran selbst argumentieren (Gebet, 4:59, 59:7) und auf 5:47 und 10:94 verweisen – „Nur der Koran" führt zur Bibel.
6. **Orientalismus-Vorwurf** („orientalisten-vorurteil") entschärfen: Argumente statt Motive, und die muslimischen Zeugen (Muslim, Ibn al-Jawzi, Fazlur Rahman) nennen.

**Ton und Fallen:**
- Keine Beleidigungen Mohammeds, keine Spottbilder. Die stärksten Argumente stammen aus den islamischen Quellen selbst – sachlich vorgetragen.
- Nicht behaupten, „alle Hadithe sind gefälscht", und keine aufgegebenen Thesen (*Hagarism*) verwenden.
- Schwach belegte Episoden (Asma bint Marwan) nicht als Hauptargument benutzen.
- Bereit sein, die eigenen Quellen (Evangelien) derselben Prüfung zu unterziehen – und zu zeigen, dass sie besser bestehen.`,
  keyOpponents: [
    { name: 'Jonathan A. C. Brown', role: 'Islamwissenschaftler, Georgetown University; „Hadith" (2009), „Misquoting Muhammad" (2014)' },
    { name: 'Muhammad Mustafa al-Azami', role: 'Hadith-Gelehrter (1930–2017); „On Schacht\'s Origins of Muhammadan Jurisprudence" (1985)' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas; Sira-Vortragsreihe' },
    { name: 'Mohammed Hijab', role: 'Islamischer Apologet, London' },
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak' },
    { name: 'Edip Yüksel', role: 'Quranistischer Autor, „Quran: A Reformist Translation"' },
  ],
  claims: [isnadWissenschaftlichGesichert, quranistenNurKoran, siraVorbildlicherCharakter, orientalistenVorurteil],
};

export default topic;
