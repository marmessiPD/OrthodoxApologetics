import type { Topic } from '../../../schema.ts';
import erdeDurchschnittlich from './erde-durchschnittlich.ts';
import ausserirdischeWiderlegenBibel from './ausserirdische-widerlegen-bibel.ts';
import menschUnbedeutend from './mensch-unbedeutend.ts';

const topic: Topic = {
  id: 'astrobiologie',
  category: 'kosmos',
  group: 'Astrophysik & Astrobiologie',
  order: 1,
  title: `Erde, Außerirdische und unsere Stellung`,
  subtitle: `Kopernikanisches Prinzip, seltene Erde, außerirdisches Leben und der blasse blaue Punkt`,
  icon: 'earth',
  overview: `Seit Kopernikus erzählt die populäre Wissenschaftsgeschichte eine Geschichte der „Entthronung": Die Erde ist nicht im Zentrum, die Sonne ein Durchschnittsstern, die Milchstraße eine Galaxie unter Billionen – und der Mensch, so Carl Sagan, ein Bewohner eines „blassen blauen Punktes", dessen Wichtigkeit eine Einbildung ist. Dazu kommt die Erwartung, dass außerirdisches Leben bald entdeckt wird und die Bibel dann als provinzielles Erdenbuch entlarvt sei.

Die Debattenlage ist differenzierter, als diese Erzählung vermuten lässt. Historisch war das Zentrum im mittelalterlichen Weltbild der unterste, nicht der würdigste Ort (Danielson). Naturwissenschaftlich zeigt die Exoplanetenforschung zwar, dass Planeten häufig sind; ob erdähnliche Bedingungen für **komplexes** Leben häufig sind, ist aber umstritten – Ward und Brownlee, beide keine Theisten, halten es für sehr selten (*Rare Earth*, 2000). Gonzalez und Richards haben zudem auf die auffällige Korrelation zwischen Bewohnbarkeit und Beobachtbarkeit hingewiesen. Außerirdisches Leben ist bisher nicht nachgewiesen; das Fermi-Paradox ist ungelöst.

Theologisch hat die Kirche keine Lehre über Leben anderswo. Die Schrift kennt bereits nichtmenschliche Vernunftwesen (Engel), und christliche Denker von Athanasius über Nikolaus von Kues bis C. S. Lewis und der Vatikanischen Sternwarte haben die Frage ohne Angst durchdacht. Die Würde des Menschen gründet nicht auf Größe oder Lage, sondern auf der Gottebenbildlichkeit und auf der Menschwerdung des Logos.`,
  strategy: `**1. Das Klischee entlarven.** Beginne mit Danielson: Im alten Weltbild war die Mitte der niedrigste Ort. Damit fällt die Rahmenerzählung von der „Entthronung".

**2. Zwischen Planeten und Bewohnbarkeit unterscheiden.** „Habitable Zone" heißt nicht „bewohnbar" – Venus und Mars sind die besten Beispiele. Zähle dann die zusätzlichen Faktoren auf.

**3. Säkulare Zeugen nutzen, aber nicht vereinnahmen.** Ward und Brownlee als Zeugen für die Fakten, nicht für Design.

**4. Ehrlich bei umstrittenen Faktoren.** Jupiter-Schutzschild und Mond-Stabilisierung sind relativiert worden – sag das selbst, bevor es dein Gegenüber tut.

**5. Bei Außerirdischen gelassen bleiben.** Dein Glaube hängt nicht daran, ob wir allein sind. Zeige die theologischen Optionen (Lewis) und verweise auf die Engel.

**6. Bei „Bedeutungslosigkeit" auf den Wertmaßstab zielen.** Frage, ob Größe der Maßstab für Wert ist. Dann Pascal (denkendes Schilfrohr) und Ps 8.

**Fallen:** keine „UFOs sind Dämonen"-Spekulationen; keine Bibelverse als „wissenschaftliche Wunder"; nicht behaupten, die Bibel lehre ein geozentrisches Weltbild oder schließe Leben anderswo aus.`,
  keyOpponents: [
    { name: 'Carl Sagan (†1996)', role: 'Astronom, Cornell University', work: 'Cosmos (1980); Pale Blue Dot (1994)' },
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker, Hayden Planetarium', work: 'Cosmos: A Spacetime Odyssey (2014)' },
    { name: 'Paul Davies', role: 'Physiker und Astrobiologe, Arizona State University', work: 'Are We Alone? (1995); The Eerie Silence (2010)' },
    { name: 'Steven Weinberg (†2021)', role: 'Theoretischer Physiker, Nobelpreis 1979', work: 'The First Three Minutes (1977)' },
  ],
  claims: [erdeDurchschnittlich, ausserirdischeWiderlegenBibel, menschUnbedeutend],
  newPeople: [
    {
      id: 'jay-richards',
      name: 'Jay W. Richards',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Philosoph (PhD Princeton Theological Seminary), Mitautor von „The Privileged Planet"',
      fields: ['Privilegierter Planet', 'Wissenschaftsphilosophie', 'Design-Argument'],
      bio: 'Philosoph und Autor; Senior Fellow am Discovery Institute. Entwickelte zusammen mit dem Astronomen Guillermo Gonzalez die These, dass die Bedingungen für Leben auf der Erde auffällig mit den Bedingungen für wissenschaftliche Entdeckung zusammenfallen.',
      keyWorks: ['The Privileged Planet: How Our Place in the Cosmos Is Designed for Discovery (2004, mit Guillermo Gonzalez)'],
    },
    {
      id: 'guy-consolmagno',
      name: 'Guy Consolmagno SJ',
      years: 'geb. 1952',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Jesuitenbruder, Planetologe, Direktor der Vatikanischen Sternwarte (seit 2015)',
      fields: ['Planetologie', 'Meteoriten', 'Astrobiologie & Theologie'],
      bio: 'US-amerikanischer Planetenforscher (Studium am MIT, Promotion an der University of Arizona), Experte für Meteoriten und Kleinkörper des Sonnensystems. Erhielt 2014 die Carl-Sagan-Medaille der American Astronomical Society für Wissenschaftskommunikation. Schreibt und spricht viel über das Verhältnis von Astronomie und Glauben.',
      keyWorks: ['Brother Astronomer (2000)', 'Would You Baptize an Extraterrestrial? (2014, mit Paul Mueller)'],
      caveat: 'Katholischer Ordensmann; hier für Astronomie und die Frage nach außerirdischem Leben herangezogen, nicht für konfessionelle Sonderlehren.',
    },
  ],
};

export default topic;
