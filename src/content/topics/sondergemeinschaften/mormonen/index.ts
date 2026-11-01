import type { Topic } from '../../../schema.ts';
import grosserAbfall from './grosser-abfall.ts';
import buchMormonHistorisch from './buch-mormon-historisch.ts';
import gottWarMensch from './gott-war-mensch.ts';
import brennenImHerzen from './brennen-im-herzen.ts';
import buchAbraham from './buch-abraham.ts';

const topic: Topic = {
  id: 'mormonen',
  category: 'sondergemeinschaften',
  group: 'Mormonen',
  order: 1,
  title: `Mormonen`,
  subtitle: `Großer Abfall, Buch Mormon, Gottesbild, „Zeugnis im Herzen" und das Buch Abraham`,
  icon: 'mountain',
  overview: `Die Kirche Jesu Christi der Heiligen der Letzten Tage (HLT, umgangssprachlich „Mormonen") wurde 1830 von Joseph Smith in New York gegründet und hat heute nach eigenen Angaben über 17 Millionen Mitglieder; ihr Zentrum ist Salt Lake City (Utah). Ihre Grundlage sind neben der Bibel („soweit richtig übersetzt") das Buch Mormon, Lehre und Bündnisse sowie die Köstliche Perle. Mormonen sind bekannt für starke Familien, Gemeinschaftssinn, Hilfsbereitschaft und Missionseifer; junge Missionare sind auch in deutschen Städten unterwegs.

Die HLT-Theologie unterscheidet sich grundlegend vom historischen Christentum: Sie lehrt einen **großen Abfall** der Kirche nach den Aposteln und eine **Wiederherstellung** durch Joseph Smith; Gott Vater habe einen Körper aus Fleisch und Gebein und sei einst ein Mensch gewesen; Menschen könnten durch ewigen Fortschritt Götter werden; Vater, Sohn und Heiliger Geist seien drei getrennte Wesen. Die Wahrheit des Buches Mormon soll durch ein persönliches „Zeugnis" im Gebet erkannt werden (Moroni 10,4).

Seit 2013/14 hat die HLT-Kirche in ihren *Gospel Topics Essays* schwierige Fragen ihrer Geschichte bemerkenswert offen angesprochen – etwa zur DNA der amerikanischen Ureinwohner und zum Buch Abraham. Für koptische Christen ist das **Buch Abraham** besonders interessant: Es beruft sich auf ägyptische Papyri, und die Kenntnis der koptischen Sprache war der Schlüssel, mit dem Champollion die Hieroglyphen entzifferte. Wichtig ist auch die Abgrenzung zur orthodoxen **Theosis**, auf die sich HLT-Apologeten gern berufen.`,
  strategy: `**1. Freundlich und konkret.** HLT-Missionare sind meist junge, aufrichtige Menschen fern von zu Hause. Biete Gastfreundschaft an, höre zu und frage nach ihrem persönlichen Glauben.

**2. Begriffe klären.** Mormonen benutzen christliche Wörter (Gott, Jesus, Erlösung, Gnade) mit anderer Bedeutung. Frage nach: „Was meinst du mit ‚Gott'? War er immer Gott?"

**3. Reihenfolge:** (a) Gottesbild (Jes 43,10; 44,6.8; Ps 90,2; Joh 4,24) – hier liegt der tiefste Unterschied. (b) Abgrenzung zur Theosis – zeige, dass du die Väter kennst. (c) Das „Zeugnis im Herzen": Wie prüft man eine Offenbarung? (d) Prüfbare Ansprüche: Buch Abraham und Geschichtlichkeit des Buches Mormon. (e) Großer Abfall und apostolische Kontinuität – die koptische Kirche als lebendiges Gegenbeispiel.

**4. Das Buch Abraham als Schlüsselargument.** Es ist der klarste prüfbare Fall: Die Papyri sind erhalten, die HLT-Kirche hat Probleme selbst eingeräumt. Bleib sachlich und nutze die Aussagen der Kirche selbst.

**5. Fallen vermeiden:** Kein Spott über Unterwäsche, Kolob oder Polygamie; keine ungeprüften Internetzitate; die orthodoxe Theosis nicht leugnen; berechtigte Gegenargumente (Nahom, Gerste, Zeugen) fair anerkennen. Ziel ist nicht, eine Debatte zu gewinnen, sondern einen Menschen zum Christus der Schrift einzuladen.`,
  keyOpponents: [
    { name: 'Daniel C. Peterson', role: 'Islamwissenschaftler und HLT-Apologet, BYU', work: 'Interpreter: A Journal of Latter-day Saint Faith and Scholarship' },
    { name: 'John Gee', role: 'HLT-Ägyptologe, BYU', work: 'An Introduction to the Book of Abraham (2017)' },
    { name: 'Terryl L. Givens', role: 'HLT-Theologe und Literaturwissenschaftler', work: 'By the Hand of Mormon (2002); Wrestling the Angel (2015)' },
    { name: 'FAIR (FairLatterDaySaints)', role: 'HLT-Apologetik-Organisation', work: 'Antworten auf kritische Fragen zu HLT-Lehre und Geschichte' },
  ],
  claims: [grosserAbfall, buchMormonHistorisch, gottWarMensch, brennenImHerzen, buchAbraham],
};

export default topic;
