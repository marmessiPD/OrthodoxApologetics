import type { Topic } from '../../../schema.ts';
import naturreligionUrspruenglich from './naturreligion-urspruenglich.ts';
import spiritismusHarmlos from './spiritismus-harmlos.ts';

const topic: Topic = {
  id: 'okkultismus',
  category: 'sondergemeinschaften',
  group: 'Okkultismus & Neuheidentum',
  order: 1,
  title: `Okkultismus & Neuheidentum`,
  subtitle: `Wicca, Naturreligion, Spiritismus, Tarot und Pendel`,
  icon: 'moon',
  overview: `Neuheidnische Bewegungen – Wicca, keltisch oder germanisch inspiriertes Heidentum, Göttinnenspiritualität – verstehen sich als Rückkehr zu den „ursprünglichen", naturverbundenen Religionen Europas, die das Christentum verdrängt habe. Daneben sind okkulte Praktiken im Alltag weit verbreitet: Tarot, Pendeln, Gläserrücken und Ouija, Sitzungen bei Medien, die Kontakt mit Verstorbenen versprechen. Für viele junge Menschen ist das Neugier, Spiel oder Selbstfindung; für andere eine ernsthafte Spiritualität, die mit Ökologie, Feminismus und Kritik an der Kirchengeschichte verbunden ist.

Die historische Forschung hat das Bild einer ungebrochen überlieferten „alten Religion" gründlich korrigiert: Wicca wurde in den 1950er-Jahren von Gerald Gardner begründet, wie der dem Neuheidentum wohlgesinnte Historiker Ronald Hutton gezeigt hat. Zugleich muss die Kirche ehrlich bekennen, dass die Christianisierung teilweise mit Gewalt geschah und die Hexenverfolgungen der frühen Neuzeit ein schweres Unrecht waren – gerade in deutschen Gebieten.

Die koptische Kirche bringt eine besondere Erfahrung mit: Sie ist aus der Begegnung mit der altägyptischen Religion hervorgegangen. Der hl. Antonius rang in der Wüste mit den Mächten der Finsternis und lehrte die Unterscheidung der Geister; der hl. Athanasius schrieb „Gegen die Heiden"; der hl. Kyrill widerlegte Kaiser Julians Versuch, das Heidentum wiederzubeleben; der hl. Schenute stritt mit den Kulten Oberägyptens. Bei jeder Taufe sagt sich der Täufling nach Westen gewandt vom Satan los und bekennt sich nach Osten gewandt zu Christus.`,
  strategy: `**1. Mit Respekt beginnen.** Viele Neuheiden suchen ehrlich nach Ehrfurcht vor der Natur, nach Gemeinschaft und nach einer Spiritualität, die den Körper und die Jahreszeiten ernst nimmt. Würdige das – die Bibel und die koptische Liturgie sind voll davon.

**2. Geschichte ehrlich darstellen.** Nenne die Fakten (Hutton, realistische Opferzahlen der Hexenverfolgung), aber gestehe christliche Schuld offen ein (Verden 782, Zwangstaufen, Hexenprozesse) und verweise auf christliche Gegenstimmen (Alkuin, Friedrich Spee).

**3. Bei okkulten Praktiken zwei Ebenen unterscheiden:** Das meiste ist psychologisch erklärbar (kaltes Lesen, ideomotorischer Effekt – Faraday!). Trotzdem warnt die Schrift, weil echte geistige Täuschung möglich ist (Apg 16,16–18; 2 Kor 11,14). Halte die Mitte, die C. S. Lewis beschreibt: weder Spott noch Faszination.

**4. Gemeinschaft der Heiligen erklären.** Wenn der Einwand „Ihr sprecht doch auch mit Toten" kommt: Fürbitte zu Gott ist kein Herbeirufen und kein Befragen.

**5. Seelsorgerlich handeln.** Menschen mit Angst nach okkulten Erfahrungen brauchen Ruhe, Gebet, die Sakramente und gegebenenfalls ärztliche Hilfe – keine Panikmache. Christus hat die Mächte entwaffnet (Kol 2,15).`,
  keyOpponents: [
    { name: 'Gerald B. Gardner', role: 'Begründer der Wicca-Bewegung (1884–1964)', work: 'Witchcraft Today (1954)' },
    { name: 'Starhawk', role: 'Wicca-Autorin und Ökofeministin', work: 'The Spiral Dance (1979)' },
    { name: 'Allan Kardec', role: 'Begründer des Spiritismus (1804–1869)', work: 'Le Livre des Esprits (1857)' },
    { name: 'Scott Cunningham', role: 'Wicca-Autor (1956–1993)', work: 'Wicca: A Guide for the Solitary Practitioner (1988)' },
  ],
  claims: [naturreligionUrspruenglich, spiritismusHarmlos],
};

export default topic;
