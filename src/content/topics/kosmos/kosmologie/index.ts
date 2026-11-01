import type { Topic } from '../../../schema.ts';
import universumAusDemNichts from './universum-aus-dem-nichts.ts';
import universumEwigZyklisch from './universum-ewig-zyklisch.ts';
import hawkingKeineGrenze from './hawking-keine-grenze.ts';
import vorDemUrknallSinnlos from './vor-dem-urknall-sinnlos.ts';
import genesisVsUrknall from './genesis-vs-urknall.ts';

const topic: Topic = {
  id: 'kosmologie',
  category: 'kosmos',
  group: 'Kosmologie',
  order: 1,
  title: `Kosmologie und Anfang`,
  subtitle: `Universum aus dem Nichts, ewige Zyklen, Hawkings No-Boundary-Modell und die Genesis`,
  icon: 'sparkle',
  overview: `Kaum ein Feld hat die Gottesfrage im 20. Jahrhundert so verändert wie die Kosmologie. Bis in die 1960er-Jahre galt vielen Naturwissenschaftlern ein ewiges, unveränderliches Universum als selbstverständlich; Eddington fand den Gedanken eines Anfangs „abstoßend", Hoyle verteidigte das Steady-State-Modell. Dann setzte sich – nach Lemaîtres Uratom (1931), der Entdeckung der kosmischen Hintergrundstrahlung (1965) und den Singularitätstheoremen von Penrose und Hawking – das Urknallmodell durch. Der Agnostiker Robert Jastrow beschrieb das Ergebnis mit dem Bild des Bergsteigers, der auf dem Gipfel von Theologen begrüßt wird.

Die Gegenseite hat darauf mit zwei Strategien reagiert. Die erste: **Der Anfang braucht keinen Schöpfer**, denn die Quantenphysik lasse ein Universum „aus dem Nichts" entstehen (Krauss, Hawking & Mlodinow, Vilenkin) oder runde den Anfang ab (Hartle–Hawking). Die zweite: **Es gab gar keinen Anfang** – das Universum sei ewig oder zyklisch (Penrose, Steinhardt–Turok, Big Bounce, Carroll). Dazu kommt der Einwand, die Frage nach einem „Davor" sei sinnlos, und der Vorwurf, die Genesis widerspreche dem Urknall.

Die christliche Antwort ist zweistufig. Physikalisch: Das „Nichts" der Physiker ist ein Quantenvakuum oder ein gesetzmäßiger Zustand – also etwas; ewige Modelle kämpfen mit dem Borde-Guth-Vilenkin-Theorem, dem zweiten Hauptsatz und fehlenden Belegen. Metaphysisch: Schöpfung bedeutet nicht nur einen ersten Moment, sondern die Abhängigkeit allen Seins von Gott – Gesetze, Felder und Zeit eingeschlossen. Darum hängt der Glaube nicht an einer Singularität. Die philosophische Kalam-Debatte im engeren Sinn behandelt der Themenblock „Gottesbeweise unter Beschuss"; die Auslegung der Schöpfungstage der Themenblock „Schöpfung und Genesis".`,
  strategy: `**1. Begriffe klären, bevor du argumentierst.** Frage zuerst: „Was genau meinst du mit ‚Nichts'?" In neun von zehn Gesprächen löst sich der Einwand „aus dem Nichts" damit auf, dass das Gegenüber ein Quantenvakuum oder Naturgesetze meint.

**2. Die Physik respektieren, die Philosophie prüfen.** Bestreite nie die Mathematik von Hawking, Krauss oder Penrose. Zeige, dass ihre Schlussfolgerungen über Gott keine physikalischen, sondern philosophische Behauptungen sind.

**3. Das Dilemma der Gesetze stellen.** Entweder sind Naturgesetze real – dann sind sie etwas und brauchen eine Erklärung. Oder sie sind bloße Beschreibungen – dann erschaffen sie nichts. Diese Gabel trägt fast jede Kosmologie-Debatte.

**4. Den Anfang mit Wahrscheinlichkeiten vertreten, nicht als Dogma.** Sag: „Nach heutigem Wissen spricht mehr für einen Anfang (BGV, Entropie, Scheitern ewiger Modelle)" – nicht: „Die Wissenschaft hat bewiesen …". Das macht dich unangreifbar.

**5. Den Rückzugsraum sichern.** Mache früh klar: Selbst ein ewiges Universum bliebe kontingent und erklärungsbedürftig. Dann kann dich kein neues Modell aus dem Gespräch werfen.

**6. Genesis entlasten.** Kein Dogma zum Erdalter; Vielfalt seit Origenes und Augustinus; keine überzogenen „Wissenschaftswunder" in der Bibel behaupten.

**Fallen:** „Der Urknall beweist Gott", „NASA fand einen fehlenden Tag", „Hawking hat sich bekehrt" – alles vermeiden. Und: Nie über die Personen spotten. Krauss, Hawking und Penrose sind brillante Physiker; dein Gegenüber merkt sofort, ob du fair bist.`,
  keyOpponents: [
    { name: 'Lawrence M. Krauss', role: 'Theoretischer Physiker und Kosmologe', work: 'A Universe from Nothing (2012)' },
    { name: 'Stephen Hawking (†2018)', role: 'Theoretischer Physiker, Cambridge', work: 'A Brief History of Time (1988); The Grand Design (2010, mit L. Mlodinow)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker (Johns Hopkins)', work: 'The Big Picture (2016); Debatte mit W. L. Craig (2014)' },
    { name: 'Roger Penrose', role: 'Mathematischer Physiker, Oxford, Nobelpreis 2020', work: 'Cycles of Time (2010)' },
    { name: 'Alexander Vilenkin', role: 'Kosmologe, Tufts University', work: 'Many Worlds in One (2006)' },
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker, Hayden Planetarium', work: '„The Perimeter of Ignorance" (2005); Cosmos (2014)' },
  ],
  claims: [universumAusDemNichts, universumEwigZyklisch, hawkingKeineGrenze, vorDemUrknallSinnlos, genesisVsUrknall],
  newPeople: [
    {
      id: 'hugh-ross',
      name: 'Hugh Ross',
      years: 'geb. 1945',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Astrophysiker, Gründer von Reasons to Believe',
      fields: ['Kosmologie', 'Feinabstimmung', 'Schöpfung & Wissenschaft'],
      bio: 'Kanadischer Astronom (Promotion in Astronomie an der University of Toronto, anschließend Forschung am Caltech). Gründete 1986 die Organisation Reasons to Believe, die naturwissenschaftliche Befunde und biblischen Glauben ins Gespräch bringt. Schrieb zahlreiche Bücher zur Urknallkosmologie, Feinabstimmung und Bewohnbarkeit der Erde.',
      keyWorks: ['The Creator and the Cosmos (1993)', 'Improbable Planet (2016)'],
      caveat: 'Ross vertritt eine Alterde-Position mit „Tag-Zeitalter"-Deutung der Schöpfungstage – eine von mehreren christlichen Optionen, kein kirchliches Dogma.',
    },
  ],
};

export default topic;
