import type { Topic } from '../../../schema.ts';
import kiWirdBewusst from './ki-wird-bewusst.ts';
import transhumanismus from './transhumanismus.ts';
import simulationshypothese from './simulationshypothese.ts';

const topic: Topic = {
  id: 'informatik-ki',
  category: 'kosmos',
  group: 'Informatik & Künstliche Intelligenz',
  order: 1,
  title: `Informatik und Künstliche Intelligenz`,
  subtitle: `Bewusste Maschinen, digitale Unsterblichkeit und die Simulationshypothese`,
  icon: 'cpu',
  overview: `Die Fortschritte der Künstlichen Intelligenz haben alte Menschheitsfragen in neuer Form auf die Tagesordnung gesetzt: **Was ist der Mensch?** Ist er „nur ein Biocomputer", dessen Bewusstsein bald in Silizium nachgebaut wird? Kann Technik den Tod besiegen? Und ist unsere Welt vielleicht selbst nur ein Programm? KI-Pioniere wie Geoffrey Hinton, Futuristen wie Ray Kurzweil und Historiker wie Yuval Noah Harari stellen diese Fragen mit großer öffentlicher Wirkung.

Die Leistungen heutiger Systeme sind real: Sprachmodelle schreiben, programmieren und lösen Olympiade-Aufgaben. Ein Christ muss das nicht kleinreden. Die entscheidende Unterscheidung liegt woanders – zwischen **Leistung und Erleben**, **Syntax und Bedeutung**, **Kopie und Person**, **Programmierer und Schöpfer**. Hier zeigen sich die Grenzen der materialistischen Deutung, und hier stimmen auch viele nichtchristliche Denker (Searle, Nagel, Koch, Chalmers, Penrose) zu, dass die Gleichung „Geist = Programm" alles andere als bewiesen ist.

Die koptisch-orthodoxe Anthropologie gibt dafür einen klaren Rahmen: Der Mensch ist beseelter Leib, geschaffen nach Gottes Bild (Gen 1,27; 2,7). Die Väter verteidigten die vernunftbegabte Seele des Menschen, weil Christus den ganzen Menschen angenommen hat, um ihn zu heilen. Die Hoffnung der Kirche ist nicht das Upgrade, sondern die Theosis und die Auferstehung.`,
  strategy: `**Gesprächsführung:**
1. **Leistungen anerkennen.** Beginne mit echter Anerkennung dessen, was KI kann. Wer KI kleinredet, verliert gegen jeden Informatiker – und spätestens beim nächsten Durchbruch.
2. **Die richtige Frage stellen.** Nicht „Kann KI X?", sondern „Erlebt sie dabei etwas? Meint sie etwas?" Mach den Unterschied zwischen Verhalten und Bewusstsein an Beispielen klar (Schachprogramm, Papagei, ELIZA).
3. **Den Trainingseffekt erklären.** Ein Sprachmodell wurde darauf trainiert, menschliche Texte – auch über Gefühle – nachzuahmen. Deshalb ist seine Rede über Gefühle kein Beleg für Gefühle.
4. **Die Vorannahme benennen.** „Der Mensch ist ein Biocomputer" ist Funktionalismus – eine philosophische These, kein Messergebnis.
5. **Die Würdefrage stellen.** Wenn Bewusstsein = Rechenleistung, woran hängt dann die Würde eines Menschen mit Demenz oder eines Neugeborenen?
6. **Auf die Hoffnung lenken.** Transhumanismus und Simulation borgen christliche Motive (Unsterblichkeit, Schöpfer, neue Welt) – zeige das Original: Schöpfung, Menschwerdung, Auferstehung.

**Fallen:** Keine Prognosen „KI wird niemals …" über Fähigkeiten; keine Dämonisierung der Technik; keine Endzeit-Spekulationen; Searle und Gödel nicht als unwiderlegbar verkaufen.`,
  keyOpponents: [
    { name: 'Ray Kurzweil', role: 'Futurist, Google', work: 'The Singularity Is Near (2005); The Singularity Is Nearer (2024)' },
    { name: 'Yuval Noah Harari', role: 'Historiker', work: 'Homo Deus (2016)' },
    { name: 'Geoffrey Hinton', role: 'KI-Pionier, Nobelpreis für Physik 2024', work: 'Interviews zu Verstehen und Erleben von KI' },
    { name: 'Daniel C. Dennett', role: 'Philosoph des Geistes (gest. 2024)', work: 'Consciousness Explained (1991)' },
    { name: 'Nick Bostrom', role: 'Philosoph', work: 'Are You Living in a Computer Simulation? (2003); Superintelligence (2014)' },
    { name: 'David J. Chalmers', role: 'Philosoph, NYU', work: 'Reality+ (2022)' },
    { name: 'Max Tegmark', role: 'Physiker, MIT', work: 'Life 3.0 (2017)' },
  ],
  claims: [kiWirdBewusst, transhumanismus, simulationshypothese],
  newPeople: [
    {
      id: 'rosalind-picard',
      name: 'Rosalind W. Picard',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Professorin am MIT Media Lab, Begründerin des Forschungsfelds „Affective Computing"',
      fields: ['Künstliche Intelligenz', 'Affective Computing', 'Emotion & Maschine'],
      bio: 'Elektroingenieurin und Informatikerin am Massachusetts Institute of Technology, die mit ihrem Buch „Affective Computing" (1997) die Erforschung von Maschinen begründete, die menschliche Emotionen erkennen und darauf reagieren. Mitgründerin von Unternehmen für tragbare Sensorik (u. a. zur Erkennung epileptischer Anfälle). Hat öffentlich über ihren Weg vom Atheismus zum christlichen Glauben gesprochen.',
      keyWorks: ['Affective Computing (1997)'],
    },
  ],
};

export default topic;
