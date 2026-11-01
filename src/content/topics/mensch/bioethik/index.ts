import type { Topic } from '../../../schema.ts';
import embryoZellhaufen from './embryo-zellhaufen.ts';
import sterbehilfeBarmherzig from './sterbehilfe-barmherzig.ts';
import kircheGegenForschung from './kirche-gegen-forschung.ts';

const topic: Topic = {
  id: 'bioethik',
  category: 'mensch',
  group: 'Bioethik',
  order: 1,
  title: `Bioethik`,
  subtitle: `Lebensbeginn, Lebensende und die Grenzen der Forschung – klar für das Leben, voller Mitgefühl für die Leidenden`,
  icon: 'baby',
  overview: `In der Bioethik geht es nicht um abstrakte Theorie, sondern um Menschen in Grenzsituationen: um eine junge Frau, die ungewollt schwanger ist und Angst hat; um einen alten Mann, der seiner Familie nicht zur Last fallen will; um ein Paar, das sich seit Jahren vergeblich ein Kind wünscht. Wer hier mit Argumenten auftritt, ohne zuerst Mitgefühl zu zeigen, hat schon verloren – und hat Christus nicht verstanden.

Zugleich steht viel auf dem Spiel. Die Gegenseite ist stark besetzt: Philosophinnen wie Judith Jarvis Thomson, Bioethiker wie Peter Singer und Julian Savulescu, Psychologen wie Steven Pinker. Ihre Argumente – Personsein durch Fähigkeiten, körperliche Selbstbestimmung, Barmherzigkeit durch Sterbehilfe, Fortschritt durch Embryonenforschung – sind ernst zu nehmen. Die christliche Antwort beruht auf einem klaren Befund der Embryologie (mit der Befruchtung beginnt ein neuer menschlicher Organismus), auf einem moralischen Grundsatz (Unschuldige dürfen nicht getötet werden, auch nicht für gute Zwecke) und auf der Überzeugung, dass Würde nicht an Leistung hängt, sondern am Menschsein nach Gottes Bild.

Die Kirche hat diese Haltung von Anfang an gelebt – in einer Kultur, in der Abtreibung und Aussetzung verbreitet waren (Didache, Diognetbrief, Basilius). Sie hat aber auch die Krankenhäuser und die moderne Hospizbewegung hervorgebracht (Cicely Saunders) und begleitet bis heute Menschen in Not, mit Vergebung für die, die gefallen sind. Klar in der Sache, barmherzig im Ton: Das ist der Weg dieses Themenblocks.`,
  strategy: `**Grundhaltung:** Erst zuhören, dann fragen, dann argumentieren. Rechne damit, dass dein Gegenüber persönlich betroffen sein kann – eine Abtreibung, ein sterbender Angehöriger, ein unerfüllter Kinderwunsch.

**Reihenfolge:**
1. **Mitgefühl zeigen.** Sag ausdrücklich, dass du die Not von Frauen, Kranken und Kinderlosen ernst nimmst – und meine es.
2. **Die eine Frage klären:** „Was ist der Embryo?" Wenn er ein Mensch ist, ändert das alles; wenn nicht, braucht man keine Rechtfertigung. Bleib bei dieser Frage (SLED-Argument), bevor du über Gesetze sprichst.
3. **Unterscheidungen einführen:** Töten vs. Sterbenlassen vs. Lindern; somatische Therapie vs. Keimbahneingriff; IVF vs. Embryonenvernichtung.
4. **Säkulare Bundesgenossen nennen:** Embryologie-Lehrbücher, Don Marquis, Habermas, der Weltärztebund, Behindertenrechtsbewegung, der hippokratische Eid.
5. **Ethische Alternativen zeigen:** Hilfe für Schwangere, Adoption, Palliativmedizin und Hospiz, iPS- und adulte Stammzellen.
6. **Mit Barmherzigkeit schließen:** Vergebung in Christus für jeden, der schuldig geworden ist.

**Fallen:** Keine Verurteilung von Frauen („Mörderin"), keine Schockbilder, keine falsch zugeschriebenen Zitate, keine Behauptung, man müsse Leben um jeden Preis künstlich verlängern, keine pauschale Ablehnung jeder künstlichen Befruchtung.`,
  keyOpponents: [
    { name: 'Judith Jarvis Thomson', role: 'Philosophin, MIT (gest. 2020)', work: 'A Defense of Abortion (1971)' },
    { name: 'Peter Singer', role: 'Bioethiker, Princeton', work: 'Practical Ethics (1979/2011); Rethinking Life and Death (1994)' },
    { name: 'David Boonin', role: 'Philosoph, University of Colorado', work: 'A Defense of Abortion (2003)' },
    { name: 'Julian Savulescu', role: 'Bioethiker', work: 'Procreative Beneficence (2001)' },
    { name: 'Udo Schüklenk', role: 'Bioethiker, Queen\'s University', work: 'Expertenbericht der Royal Society of Canada zur Sterbehilfe (2011)' },
    { name: 'Steven Pinker', role: 'Psychologe, Harvard', work: 'The Moral Imperative for Bioethics (2015)' },
  ],
  claims: [embryoZellhaufen, sterbehilfeBarmherzig, kircheGegenForschung],
  newPeople: [
    {
      id: 'cicely-saunders',
      name: 'Dame Cicely Saunders',
      years: '1918–2005',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Ärztin, Krankenschwester und Sozialarbeiterin, Begründerin der modernen Hospizbewegung',
      fields: ['Palliativmedizin', 'Hospiz', 'Sterbebegleitung'],
      bio: 'Ausgebildet als Krankenschwester und medizinische Sozialarbeiterin, später als Ärztin. Gründete 1967 das St Christopher\'s Hospice in London, das zum Vorbild der weltweiten Hospiz- und Palliativbewegung wurde. Entwickelte das Konzept des „totalen Schmerzes" (körperlich, seelisch, sozial, spirituell). Ihr christlicher Glaube war die Triebfeder ihrer Arbeit.',
      keyWorks: ['Selected Writings 1958–2004 (2006)', 'Watch with Me (Sammlung von Vorträgen)'],
    },
    {
      id: 'francis-beckwith',
      name: 'Francis J. Beckwith',
      years: 'geb. 1960',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Professor für Philosophie, Baylor University',
      fields: ['Bioethik', 'Lebensschutz', 'Rechtsphilosophie'],
      bio: 'Philosoph und Rechtswissenschaftler, der die philosophische Debatte um Abtreibung maßgeblich geprägt hat. Verteidigt die „Substanzsicht" des Menschen, nach der der Embryo von Anfang an ein menschliches Wesen mit Würde ist.',
      keyWorks: ['Defending Life: A Moral and Legal Case Against Abortion Choice (2007)'],
    },
    {
      id: 'john-wyatt',
      name: 'John Wyatt',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Emeritierter Professor für Neonatologie und Ethik, University College London',
      fields: ['Neonatologie', 'Medizinethik', 'Sterbebegleitung', 'Technikethik'],
      bio: 'Kinderarzt, der jahrzehntelang extrem früh geborene Kinder behandelte, und Ethiker. Schreibt aus christlicher Sicht über Lebensbeginn, Lebensende, Fortpflanzungsmedizin und Künstliche Intelligenz.',
      keyWorks: ['Matters of Life and Death (1998; 2. Aufl. 2009)', 'Dying Well (2018)'],
    },
  ],
};

export default topic;
