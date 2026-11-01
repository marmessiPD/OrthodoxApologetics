import type { Topic } from '../../../schema.ts';
import feinabstimmungIllusion from './feinabstimmung-illusion.ts';
import multiversum from './multiversum.ts';
import anthropischesPrinzip from './anthropisches-prinzip.ts';
import lebenHaetteSichAngepasst from './leben-haette-sich-angepasst.ts';
import universumLebensfeindlich from './universum-lebensfeindlich.ts';

const topic: Topic = {
  id: 'feinabstimmung',
  category: 'kosmos',
  group: 'Kosmologie',
  order: 2,
  title: `Die Feinabstimmung des Universums`,
  subtitle: `Naturkonstanten, Multiversum, anthropisches Prinzip und die Frage nach dem Design`,
  icon: 'sliders-horizontal',
  overview: `Seit den 1970er-Jahren ist in der Physik eine Beobachtung immer deutlicher geworden: Viele Naturkonstanten und Anfangsbedingungen liegen in auffallend engen Bereichen, außerhalb derer es keine stabilen Atome, keine Sterne, keine Chemie und damit kein Leben gäbe. Die Paradebeispiele sind die kosmologische Konstante (je nach Annahme um 50 bis 120 Größenordnungen kleiner als naiv erwartet), die extrem geordnete Anfangsentropie (Penrose: 1 zu 10^(10^123)) und die Empfindlichkeit der Kohlenstoff- und Sauerstoffproduktion in Sternen. Der Astrophysiker Fred Hoyle, kein Christ, sprach 1981 davon, eine „Superintelligenz" habe „an der Physik herumgebastelt".

Bemerkenswert: Die Tatsache der Feinabstimmung wird gerade von Nichttheisten wie Martin Rees, Leonard Susskind und Steven Weinberg anerkannt – deshalb greifen sie zum **Multiversum**. Die Gegenseite verfolgt im Wesentlichen vier Strategien: (1) Die Feinabstimmung sei eine Illusion (Stenger, teilweise Adams, Hossenfelder mit dem Wahrscheinlichkeitseinwand); (2) ein Multiversum mache sie zu einem Auswahleffekt; (3) das anthropische Prinzip mache jede Erklärung überflüssig; (4) Leben hätte sich anderen Bedingungen angepasst. Dazu kommt der Gegenangriff, das Universum sei weitgehend lebensfeindlich und darum schlecht entworfen.

Die christliche Antwort: Die Feinabstimmung ist robust (Barnes 2012), auch wenn einzelne ältere Beispiele überzogen waren. Das Multiversum ist spekulativ, braucht einen selbst fein abgestimmten Generator und führt zu Boltzmann-Gehirnen. Das anthropische Prinzip ist wahr, erklärt aber nichts. Und Größe und Alter des Universums sind physikalische Voraussetzungen für Leben (Dicke 1961). Die Feinabstimmung passt zu dem Schöpfer, der „alles geordnet hat mit Maß, Zahl und Gewicht" (Weish 11,20).`,
  strategy: `**1. Mit den Gegnern beginnen.** Zitiere zuerst Rees, Susskind, Weinberg oder Hoyle – Nichttheisten, die die Feinabstimmung anerkennen. Dann ist die Frage nicht mehr „ob", sondern „wie erklären".

**2. Drei robuste Beispiele lernen.** Kosmologische Konstante, Anfangsentropie, Kohlenstoff/Sauerstoff in Sternen. Lieber drei Beispiele sicher als zwanzig unsicher.

**3. Die Erklärungsmöglichkeiten sortieren.** Notwendigkeit, Zufall oder Design. Notwendigkeit: kein Beleg, und eine „Theorie von allem" wäre selbst fein abgestimmt. Zufall: braucht ein Multiversum. Design: einfach und erklärungsstark.

**4. Beim Multiversum drei Fragen stellen.** Wo ist der Beleg? Wer stimmt den Generator ab? Wie vermeidest du Boltzmann-Gehirne? Danach ist das Gespräch meist philosophisch – und dort bist du gut gerüstet.

**5. Das anthropische Prinzip mit einem Bild entschärfen.** Das Erschießungskommando (Leslie) ist in 30 Sekunden erzählt und bleibt hängen.

**6. Ehrlich zugeben, was schwächer geworden ist.** Hoyles „anthropische Vorhersage" ist eine spätere Legende (Kragh), das Diproton-Beispiel überzogen. Wer das von sich aus sagt, gewinnt Vertrauen.

**Fallen:** Keine erfundenen oder ungesicherten Zahlen; die Feinabstimmung nicht als Beweis für den *christlichen* Gott ausgeben (dafür braucht es weitere Argumente); das Multiversum nicht als „unbiblisch" abtun – das ist es nicht.`,
  keyOpponents: [
    { name: 'Victor J. Stenger (†2014)', role: 'Teilchenphysiker', work: 'The Fallacy of Fine-Tuning (2011)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'Debatte mit W. L. Craig (2014); The Big Picture (2016)' },
    { name: 'Max Tegmark', role: 'Kosmologe, MIT', work: 'Our Mathematical Universe (2014)' },
    { name: 'Leonard Susskind', role: 'Theoretischer Physiker, Stanford', work: 'The Cosmic Landscape (2005)' },
    { name: 'Sabine Hossenfelder', role: 'Theoretische Physikerin', work: 'Lost in Math (2018)' },
    { name: 'Brian Greene', role: 'Theoretischer Physiker, Columbia', work: 'The Hidden Reality (2011)' },
  ],
  claims: [feinabstimmungIllusion, multiversum, anthropischesPrinzip, lebenHaetteSichAngepasst, universumLebensfeindlich],
  newPeople: [
    {
      id: 'bruce-gordon',
      name: 'Bruce L. Gordon',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Wissenschaftsphilosoph (Philosophie der Physik), Houston Christian University',
      fields: ['Philosophie der Physik', 'Quantenmechanik', 'Multiversum'],
      bio: 'Philosoph mit Schwerpunkt auf den Grundlagen der Quantenphysik und der Kosmologie; Senior Fellow am Center for Science and Culture. Hat sich kritisch mit Multiversum-Kosmologien und naturalistischen Deutungen der Quantenmechanik auseinandergesetzt.',
      keyWorks: ['The Nature of Nature: Examining the Role of Naturalism in Science (2011, Hg. mit William A. Dembski)'],
    },
  ],
};

export default topic;
