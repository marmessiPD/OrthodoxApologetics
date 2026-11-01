import type { Topic } from '../../../schema.ts';
import glaubeOhneBeweise from './glaube-ohne-beweise.ts';
import nurWissenschaftLiefertWissen from './nur-wissenschaft-liefert-wissen.ts';
import keineAbsoluteWahrheit from './keine-absolute-wahrheit.ts';
import religioeseErfahrungKeinBeleg from './religioese-erfahrung-kein-beleg.ts';
import agnostizismus from './agnostizismus.ts';

const topic: Topic = {
  id: 'erkenntnistheorie',
  category: 'philosophie',
  group: 'Erkenntnistheorie',
  order: 1,
  title: `Glaube, Vernunft und Wahrheit`,
  subtitle: `Was ist Glaube? Liefert nur die Wissenschaft Wissen? Gibt es Wahrheit? Zählt Erfahrung? Kann man es wissen?`,
  icon: 'lightbulb',
  overview: `Viele Gespräche über Gott scheitern, bevor sie beginnen – an unausgesprochenen Voraussetzungen darüber, was Wissen, Glaube und Wahrheit sind. Wer meint, Glaube sei „Fürwahrhalten ohne Belege" (Dawkins, Boghossian), nur die Naturwissenschaft liefere echtes Wissen (Rosenberg, Atkins, Hawking), es gebe ohnehin keine objektive Wahrheit (populärer Relativismus), persönliche Erfahrung zähle nicht, oder man könne es sowieso nicht wissen (Agnostizismus), für den sind alle Gottesargumente von vornherein entwertet.

Dieser Themenblock klärt die **erkenntnistheoretischen Grundlagen**. Er zeigt, dass das biblische Wort *pistis* begründetes Vertrauen meint, das sich auf Zeugnis und Belege stützt (Joh 20,31; Apg 1,3; Lk 1,1–4); dass Szientismus und Wahrheitsrelativismus sich selbst widerlegen; dass religiöse Erfahrung – wie Sinneswahrnehmung – prima facie Gewicht hat (Swinburne, Alston); und dass ein ehrlicher Agnostizismus keine Endstation, sondern eine Einladung zum Suchen ist.

Die koptisch-orthodoxe Tradition ist hier besonders reich: Die Katechetenschule von Alexandrien (Pantänus, Clemens, Origenes, Didymus) verband Glaube und Wissenschaft; Clemens lehrte die Wechselbeziehung von Glaube und Erkenntnis; Origenes antwortete Kelsos, der den Christen blinden Glauben vorwarf; und die Wüstenväter Ägyptens sind Meister der Gotteserfahrung *und* der nüchternen Unterscheidung der Geister. Zugleich bewahrt die Orthodoxie das Bewusstsein, dass Gottes Wesen unbegreiflich bleibt – Gotteserkenntnis ist Gemeinschaft, nicht Besitz.`,
  strategy: `**1. Kläre die Begriffe am Anfang.** Frag freundlich: „Was verstehst du unter Glauben?" Wenn die Antwort „Glauben ohne Belege" lautet, erkläre *pistis* als begründetes Vertrauen – mit Joh 20,31, Lk 1,1–4 und Apg 1,3. Damit nimmst du dem Gespräch viel Spannung.

**2. Zeige die Selbstwiderlegungen freundlich.** „Nur Wissenschaft liefert Wissen" und „Es gibt keine absolute Wahrheit" scheitern an sich selbst. Stelle die Rückfrage („Ist dieser Satz wissenschaftlich bewiesen?"), und gib dann Raum für die berechtigte Sorge dahinter (Angst vor Dogmatismus, Respekt vor der Wissenschaft).

**3. Würdige die Wissenschaft.** Christen sind keine Wissenschaftsgegner – Ps 111,2 stand über dem Cavendish-Laboratorium. Unterscheide zwischen Wissenschaft (großartig) und Szientismus (eine Philosophie).

**4. Nimm Erfahrung ernst, aber nüchtern.** Religiöse Erfahrung ist ein echter Beleg, aber nicht das einzige Fundament. Verankere sie in der öffentlichen Offenbarung in Christus und in der Prüfung durch die Kirche.

**5. Lade Agnostiker zum Suchen ein.** Unterscheide „Ich weiß es noch nicht" von „Man kann es nicht wissen". Biete konkrete Schritte an: ein Evangelium lesen, ehrlich beten, eine Liturgie besuchen (Mt 7,7; Jer 29,13).

**Fallen:** „Man muss einfach glauben" (bestätigt das Klischee); Wissenschaft abwerten; Relativismus mit triumphierender Logik „besiegen" wollen, statt zuzuhören; eigene Erfahrung als Zwangsbeweis für andere ausgeben.`,
  keyOpponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Selfish Gene (1976); The God Delusion (2006)' },
    { name: 'Peter Boghossian', role: 'Philosoph', work: 'A Manual for Creating Atheists (2013)' },
    { name: 'Alex Rosenberg', role: 'Wissenschaftsphilosoph, Duke University', work: 'The Atheist\'s Guide to Reality (2011)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'The End of Faith (2004)' },
    { name: 'Stephen Hawking & Leonard Mlodinow', role: 'Physiker', work: 'The Grand Design (2010)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, agnostisch', work: 'God\'s Problem (2008)' },
  ],
  claims: [glaubeOhneBeweise, nurWissenschaftLiefertWissen, keineAbsoluteWahrheit, religioeseErfahrungKeinBeleg, agnostizismus],
  newPeople: [
    {
      id: 'william-alston',
      name: 'William P. Alston',
      years: '1921–2009',
      era: 'modern',
      tradition: 'christlich',
      title: 'Philosoph, Syracuse University',
      fields: ['Erkenntnistheorie', 'Religiöse Erfahrung', 'Sprachphilosophie'],
      bio: 'Einer der bedeutendsten Erkenntnistheoretiker des 20. Jahrhunderts und Mitbegründer der Society of Christian Philosophers. Nach Jahren der Entfremdung kehrte er zum christlichen Glauben zurück. Sein Hauptwerk „Perceiving God" zeigt, dass die Wahrnehmung Gottes erkenntnistheoretisch ähnlich zu beurteilen ist wie die Sinneswahrnehmung.',
      keyWorks: ['Perceiving God: The Epistemology of Religious Experience (1991)', 'Epistemic Justification: Essays in the Theory of Knowledge (1989)'],
    },
  ],
};

export default topic;
