import type { Topic } from '../../../schema.ts';
import freierWilleIllusion from './freier-wille-illusion.ts';
import vorherwissenSchliesstFreiheitAus from './vorherwissen-schliesst-freiheit-aus.ts';

const topic: Topic = {
  id: 'willensfreiheit',
  category: 'philosophie',
  group: 'Willensfreiheit',
  order: 1,
  title: `Willensfreiheit`,
  subtitle: `Sind wir Urheber unserer Entscheidungen – oder Zuschauer unserer Neuronen?`,
  icon: 'route',
  overview: `Die Frage nach der Willensfreiheit ist eine der ältesten der Philosophie und heute eine der lautesten. Neurobiologen wie **Robert Sapolsky** (*Determined*, 2023) und Autoren wie **Sam Harris** (*Free Will*, 2012) erklären den freien Willen für eine Illusion: Jede Entscheidung sei das Produkt von Genen, Hormonen und Umwelt, die wir uns nicht ausgesucht haben. In Deutschland haben Hirnforscher wie **Wolf Singer** und **Gerhard Roth** seit den 2000er-Jahren ähnlich argumentiert. Der populäre Eindruck lautet: „Die Wissenschaft hat bewiesen, dass wir nicht frei sind."

Tatsächlich ist die Lage anders. Die Frage ist **philosophisch offen**, und unter Fachphilosophen ist der Illusionismus eine Minderheitsposition; die meisten vertreten den Kompatibilismus (Dennett), eine starke Minderheit den Libertarismus (van Inwagen, Kane, Swinburne). Die neurowissenschaftlichen Experimente (Libet) sind weit weniger aussagekräftig, als oft behauptet wird – sie werden im Themenblock Neurowissenschaften behandelt. Der Determinismus ist keine Messung, sondern eine Weltanschauung, und er hat ein inneres Problem: Wer ihn mit Argumenten verteidigt, setzt die Fähigkeit voraus, Gründe zu prüfen – genau das, was er bestreitet.

Die zweite Front ist theologisch: **Schließt Gottes Vorherwissen unsere Freiheit aus?** Diese Frage stellten schon Cicero und der Christentumskritiker Kelsos. Die Kirchenväter – Origenes, Augustinus, Boethius, Johannes von Damaskus – haben darauf Antworten gegeben, die in der modernen Religionsphilosophie (Plantinga, Stump, Craig) weiterentwickelt wurden. Die koptisch-orthodoxe Kirche lehrt die **Synergie**: Gottes Gnade und der freie Wille des Menschen wirken zusammen. Sie lehnt damit sowohl den naturalistischen als auch den theologischen Determinismus (doppelte Prädestination) ab.`,
  strategy: `**1. Zugestehen, dann unterscheiden.** Beginne mit dem, was stimmt: Unser Wille ist stark beeinflusst – Gene, Hormone, Prägung, Sucht. Das wusste die Kirche immer (abgestufte Verantwortung, Barmherzigkeit). Dann die entscheidende Unterscheidung: *beeinflusst* ist nicht *vollständig festgelegt*.

**2. Die Beweislast klären.** Frage: „Welche Messung hat gezeigt, dass eine komplexe moralische Entscheidung vollständig aus vorausgehenden Hirnzuständen folgte?" Die Antwort ist: keine. Der Determinismus ist eine Voraussetzung, kein Befund.

**3. Das Selbstaufhebungs-Argument ruhig und präzise einsetzen.** Nicht als „Gotcha", sondern als echte Frage: „Wenn dein Gedanke ‚der Determinismus ist wahr' nur ein Molekülereignis ist – warum sollte ich ihm mehr trauen als meinem?" Rechne mit dem Taschenrechner-Einwand (siehe Dialog) und habe die Antwort bereit: Der Taschenrechner rechnet richtig, *weil* ein Geist ihn gebaut hat.

**4. Das falsche Dilemma aufdecken.** „Festgelegt oder zufällig" setzt voraus, dass es nur Ereignis-Ursachen gibt. Die Person als Ursache (Akteurskausalität) ist die dritte Möglichkeit.

**5. Die praktische Seite zeigen.** Ohne Verantwortung gibt es auch keine Vergebung und keine Würde – nur Verwaltung. Hier wirkt C. S. Lewis' Kritik der „humanitären" Strafe stark.

**Fallen:** Nicht mit Quantenphysik „beweisen" wollen; Libet nicht überziehen; nicht Calvin verteidigen, wenn der Gegner „Christen sind doch selbst Deterministen" sagt – die koptische Kirche lehrt Synergie. Beim Vorherwissen: zuerst den modalen Fehlschluss erklären (Wissen verursacht nicht), dann Boethius' Ewigkeit.`,
  keyOpponents: [
    { name: 'Robert M. Sapolsky', role: 'Neuroendokrinologe, Stanford University', work: 'Determined (2023)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler, Autor', work: 'Free Will (2012)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago (em.)', work: 'Faith versus Fact (2015)' },
    { name: 'Wolf Singer', role: 'Hirnforscher, MPI für Hirnforschung, Frankfurt', work: 'Beiträge in: Hirnforschung und Willensfreiheit (2004)' },
    { name: 'Galen Strawson', role: 'Philosoph', work: '„The Impossibility of Moral Responsibility" (1994)' },
    { name: 'Nelson Pike', role: 'Religionsphilosoph (1930–2010)', work: '„Divine Omniscience and Voluntary Action" (1965)' },
  ],
  claims: [freierWilleIllusion, vorherwissenSchliesstFreiheitAus],
  newPeople: [
    {
      id: 'boethius',
      name: 'Anicius Manlius Severinus Boethius',
      years: 'ca. 480–524',
      era: 'patristisch',
      tradition: 'christlich',
      title: 'Römischer Philosoph und Staatsmann',
      fields: ['Ewigkeit Gottes', 'Vorherwissen und Freiheit', 'Logik', 'Trost im Leid'],
      bio: 'Römischer Senator unter dem Ostgotenkönig Theoderich, Übersetzer und Kommentator des Aristoteles. Wegen angeblichen Hochverrats inhaftiert, schrieb er im Kerker „Der Trost der Philosophie" und wurde hingerichtet. Seine Definition der Ewigkeit prägte die gesamte spätere Theologie und Philosophie.',
      keyWorks: ['Der Trost der Philosophie (De consolatione philosophiae)', 'Opuscula sacra (theologische Traktate)'],
      caveat: 'Lateinischer, chalcedonensischer Christ des Westens; wird hier als Philosoph der Ewigkeit Gottes und des Vorherwissens herangezogen, nicht als Lehrautorität der koptischen Kirche.',
    },
    {
      id: 'van-inwagen',
      name: 'Peter van Inwagen',
      years: 'geb. 1942',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Philosoph, University of Notre Dame (em.)',
      fields: ['Willensfreiheit', 'Metaphysik', 'Problem des Übels'],
      bio: 'Einer der einflussreichsten analytischen Metaphysiker der Gegenwart. Formulierte das „Konsequenz-Argument" gegen die Vereinbarkeit von Determinismus und Freiheit. Hielt die Gifford Lectures über das Problem des Übels (veröffentlicht 2006). Bekennender Christ in der Episkopalkirche.',
      keyWorks: ['An Essay on Free Will (1983)', 'The Problem of Evil (2006)', 'Metaphysics'],
    },
  ],
};

export default topic;
