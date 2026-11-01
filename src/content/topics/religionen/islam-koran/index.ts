import type { Topic } from '../../../schema.ts';
import koranPerfektBewahrt from './koran-perfekt-bewahrt.ts';
import koranHerausforderung from './koran-herausforderung.ts';
import koranWissenschaftswunder from './koran-wissenschaftswunder.ts';
import koranQuellen from './koran-quellen.ts';
import koranWiderspruchsfrei from './koran-widerspruchsfrei.ts';
import koranKlarVollstaendig from './koran-klar-vollstaendig.ts';

const topic: Topic = {
  id: 'islam-koran',
  category: 'religionen',
  group: 'Islam',
  order: 3,
  title: `Der Koran auf dem Prüfstand`,
  subtitle: `Bewahrung, Unnachahmlichkeit, Wissenschaft, Quellen, Widersprüche und Klarheit`,
  icon: 'book-open',
  overview: `Muslime glauben, dass der Koran das wörtliche, ungeschaffene Wort Gottes ist, durch den Engel Gabriel an Mohammed herabgesandt. Für seine göttliche Herkunft werden vor allem sechs Argumente angeführt: Er sei **Buchstabe für Buchstabe bewahrt**, **sprachlich unnachahmlich** (2:23), enthalte **wissenschaftliche Wunder**, könne **nicht aus menschlichen Quellen** stammen, sei **widerspruchsfrei** (4:82) und **klar und vollständig erklärt**.

Diese Argumente verdienen eine respektvolle, gründliche Prüfung. Manches muss man ehrlich anerkennen: Der uthmanische Text wurde sehr früh festgelegt und ist seither bemerkenswert stabil überliefert, und der Koran ist ein sprachlich außergewöhnlicher Text. Zugleich berichten die islamischen Quellen selbst von einer Textgeschichte mit verbrannten Kodizes, fehlenden Versen und unterschiedlichen Lesarten; die „Wunder"-Argumente beruhen weitgehend auf nachträglicher Deutung; und viele Erzählungen haben enge Parallelen in jüdischen und christlichen Legenden der Spätantike.

Für Christen ist dieser Themenblock vor allem eine Frage **gleicher Maßstäbe**: Muslimische Apologeten verwerfen die Bibel wegen Textvarianten, Widersprüchen und menschlicher Verfasser. Wer dieselben Maßstäbe an den Koran anlegt, stellt fest, dass sie ihn ebenso treffen – und dass die Frage nach der Wahrheit nicht über die Perfektion eines Textes entschieden wird, sondern über die Person Jesu Christi.`,
  strategy: `**Ziel:** Nicht den Koran herabsetzen, sondern zeigen, dass die Argumente für seine Einzigartigkeit nicht tragen – und dass Muslime die Bibel nach Maßstäben verwerfen, die sie beim Koran nicht anwenden.

**Reihenfolge:**
1. **Zuhören und würdigen.** Frage, was deinem Gegenüber am Koran wichtig ist. Erkenne an, was anzuerkennen ist (frühe Textfestlegung, sprachliche Schönheit).
2. **Die eigenen Quellen sprechen lassen.** Arbeite mit Bukhari und Muslim (4986–4988, 4977, 6829, Muslim 1452), nicht mit westlichen Extremthesen.
3. **Nach Kriterien fragen.** Bei Herausforderung (2:23), Wissenschaftswundern und Widerspruchsfreiheit (4:82): „Woran würdest du erkennen, dass das Argument scheitert?"
4. **Gleiche Maßstäbe einfordern** – ruhig, ohne Triumph: „Wenn kleine Varianten den Koran nicht entwerten, dann auch die Bibel nicht."
5. **Zu Christus führen.** Die eigentliche Frage ist nicht, welches Buch perfekter ist, sondern wer Jesus ist. Lade zum Lesen des Evangeliums ein, auf das der Koran selbst verweist (5:47).

**Fallen:**
- Keine revisionistischen Extremthesen (Mohammed habe nie gelebt; der Koran sei erst im 9. Jh. entstanden).
- Hadithnummern nur verwenden, wenn du sie geprüft hast; Zählungen unterscheiden sich.
- Nie spotten – weder über den Koran noch über die Rezitation. Der Ton entscheidet über das Gespräch.
- Keine „Bibel-Wissenschaftswunder" als Gegenargument: Christen beanspruchen so etwas nicht.`,
  keyOpponents: [
    { name: 'Muhammad Mustafa al-Azami', role: 'Koran- und Hadithwissenschaftler (1930–2017)', work: 'The History of the Qur\'anic Text from Revelation to Compilation (2003)' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'An Introduction to the Sciences of the Qur\'aan (1999)' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'The Qur\'an and Modern Science' },
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Autor', work: 'The Divine Reality (2016)' },
    { name: 'Mohammed Hijab', role: 'Islamischer Debattierer, London', work: 'Debatten mit Jay Smith u. a.' },
    { name: 'Maurice Bucaille', role: 'Französischer Arzt (1920–1998)', work: 'La Bible, le Coran et la Science (1976)' },
  ],
  claims: [koranPerfektBewahrt, koranHerausforderung, koranWissenschaftswunder, koranQuellen, koranWiderspruchsfrei, koranKlarVollstaendig],
  newPeople: [
    {
      id: 'daniel-brubaker',
      name: 'Daniel Alan Brubaker',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Koranhandschriften-Forscher',
      fields: ['Koranhandschriften', 'Textgeschichte des Korans'],
      bio: 'Untersucht Korrekturen, Rasuren und Einfügungen in frühen Koranhandschriften. Sein Buch über zwanzig Beispiele solcher Korrekturen löste eine muslimische Gegenschrift von Tayyar Altıkulaç (IRCICA) aus.',
      keyWorks: ['Corrections in Early Qur\'an Manuscripts: Twenty Examples (2019)'],
    },
  ],
};

export default topic;
