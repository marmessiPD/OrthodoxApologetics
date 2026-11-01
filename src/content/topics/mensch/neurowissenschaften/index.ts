import type { Topic } from '../../../schema.ts';
import geistGleichGehirn from './geist-gleich-gehirn.ts';
import libetExperimente from './libet-experimente.ts';
import gotteserfahrungHirnaktivitaet from './gotteserfahrung-hirnaktivitaet.ts';
import nahtoderfahrungenHalluzination from './nahtoderfahrungen-halluzination.ts';
import splitBrain from './split-brain.ts';

const topic: Topic = {
  id: 'neurowissenschaften',
  category: 'mensch',
  group: 'Neurowissenschaften',
  order: 1,
  title: `Geist und Gehirn`,
  subtitle: `Ist der Mensch nur sein Gehirn? Hirnschäden, Libet, Neurotheologie, Nahtoderfahrungen und Split-Brain`,
  icon: 'brain',
  overview: `Die Neurowissenschaft ist heute das wichtigste Schlachtfeld der Debatte um die Seele. Ihre Befunde sind eindrucksvoll: Hirnverletzungen verändern Charakter und Moral, elektrische Reizung löst Empfindungen und Bewegungsdrang aus, im Scanner „leuchtet" das Gebet, und Entscheidungen lassen sich teilweise vorhersagen, bevor wir sie bewusst treffen. Populäre Autoren wie Sam Harris, Robert Sapolsky und Patricia Churchland folgern daraus: Der Geist ist nichts als das Gehirn, der freie Wille eine Illusion, Gotteserfahrung ein neurochemisches Ereignis.

Der empirische Befund ist unstrittig – strittig ist der **Schluss** daraus. Fast alle Argumente dieses Themenblocks haben dieselbe Struktur: Sie schließen von **Abhängigkeit** (der Geist braucht das Gehirn) auf **Identität** (der Geist ist das Gehirn) oder von **Korrelation** (Gebet hat ein Hirnkorrelat) auf **Wegerklärung** (also gibt es keinen Gott). Beide Schlüsse sind logisch ungültig. Das christliche, insbesondere das patristische Menschenbild erwartet sogar eine enge Abhängigkeit: Schon Gregor von Nyssa erklärte im 4. Jahrhundert, warum Verletzungen des Gehirns das Denken stören, ohne dass der Geist das Gehirn ist.

Zugleich ist Ehrlichkeit gefragt: Die Mehrheit der Neurowissenschaftler arbeitet physikalistisch, und manche christliche Lieblingsargumente (Menschen „ohne Gehirn", Nahtoderfahrungen als „Beweis des Himmels") halten der Prüfung nicht stand. Stark sind dagegen: die Unterbestimmtheit der Daten, die belegte Wirksamkeit von Bedeutung auf das Gehirn (Psychotherapie, Placebo), die überholte Deutung der Libet-Experimente, der gescheiterte „God Helmet" und die offenen Fragen um bewusstes Erleben bei Herzstillstand.

Die philosophische Grundfrage – Qualia, Intentionalität, das „schwere Problem" des Bewusstseins – behandelt der Themenblock ‚naturalismus' (A8, ‚bewusstsein-materiell-erklaerbar'); die Determinismus-Debatte A9 (‚willensfreiheit'). Hier liegt der Schwerpunkt auf den **empirischen** Befunden und ihrer Deutung.`,
  strategy: `**1. Zuerst zugestehen.** Beginne nie mit Widerspruch gegen die Daten. Sag: „Ja, Hirnschäden verändern die Persönlichkeit – das lehrt auch die Kirche: Der Mensch ist eine Einheit aus Leib und Seele." Damit nimmst du dem Gegenüber den Wind aus den Segeln und zeigst, dass du die Wissenschaft ernst nimmst.

**2. Den Fehlschluss benennen.** „Abhängigkeit ist nicht Identität." Verwende ein Bild: Klavier und Pianist, Radio und Sender, Brille und Auge. Frage dann: „Welches Experiment könnte zwischen ‚das Gehirn erzeugt den Geist' und ‚das Gehirn ist das Instrument des Geistes' unterscheiden?"

**3. Die Beweislast umdrehen.** Physikalismus ist eine philosophische Annahme, kein Messergebnis. Wer sagt „Der Geist ist nur das Gehirn", muss erklären, wie aus Neuronenfeuer Erleben, Bedeutung und gültiges Denken werden – das kann bisher niemand.

**4. Mit Daten antworten, nicht mit Behauptungen.** Kenne drei Befunde auswendig: (a) Psychotherapie verändert Hirnstoffwechsel (Schwartz 1996); (b) das Bereitschaftspotential ist Rauschen und fehlt bei überlegten Entscheidungen (Schurger 2012, Maoz 2019); (c) der God Helmet scheiterte doppelblind (Granqvist 2005).

**5. Selbstwiderlegung aufzeigen – freundlich.** „Wenn deine Überzeugung nur Neurochemie ist, warum sollte ich sie für wahr statt für verursacht halten?"

**Fallen:**
- Behaupte nie, NTE oder Hydrozephalus-Fälle „bewiesen" die Seele.
- Verteidige keinen kartesischen „Geist in der Maschine" – das patristische Menschenbild ist ganzheitlich.
- Verwechsle nicht die philosophische Frage mit der empirischen: Wenn das Gegenüber in die Philosophie wechselt, sag es offen – dann tragen die Hirnscans das Argument nicht mehr.
- Bei Demenz oder Hirnverletzung im persönlichen Umfeld deines Gegenübers: zuerst Mitgefühl, dann Argument.`,
  keyOpponents: [
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Free Will (2012); Waking Up (2014)' },
    { name: 'Robert Sapolsky', role: 'Neuroendokrinologe, Stanford University', work: 'Behave (2017); Determined (2023)' },
    { name: 'Patricia Churchland', role: 'Neurophilosophin, UC San Diego', work: 'Neurophilosophy (1986); Touching a Nerve (2013)' },
    { name: 'Susan Blackmore', role: 'Psychologin, Bewusstseins- und NTE-Forscherin', work: 'Dying to Live (1993); Consciousness: An Introduction' },
    { name: 'Michael Shermer', role: 'Herausgeber des „Skeptic"', work: 'The Believing Brain (2011)' },
    { name: 'Daniel Dennett', role: 'Philosoph, Tufts University (gest. 2024)', work: 'Consciousness Explained (1991)' },
    { name: 'Michael Gazzaniga', role: 'Neurowissenschaftler, UC Santa Barbara', work: 'Who\'s in Charge? (2011)' },
  ],
  claims: [geistGleichGehirn, libetExperimente, gotteserfahrungHirnaktivitaet, nahtoderfahrungenHalluzination, splitBrain],
};

export default topic;
