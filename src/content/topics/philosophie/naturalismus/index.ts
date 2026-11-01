import type { Topic } from '../../../schema.ts';
import nurMaterie from './nur-materie.ts';
import bewusstseinMateriellErklaerbar from './bewusstsein-materiell-erklaerbar.ts';
import vernunftDurchEvolution from './vernunft-durch-evolution.ts';
import lueckenbuesserGott from './lueckenbuesser-gott.ts';
import ockhamUnnoetigeHypothese from './ockham-unnoetige-hypothese.ts';

const topic: Topic = {
  id: 'naturalismus',
  category: 'philosophie',
  group: 'Naturalismus & Materialismus',
  order: 1,
  title: `Naturalismus & Materialismus`,
  subtitle: `Nur Materie? Bewusstsein, Vernunft, Lückenbüßer-Gott und Ockhams Rasiermesser`,
  icon: 'atom',
  overview: `Hinter fast jedem atheistischen Argument steht eine Weltanschauung: der **Naturalismus** – die Überzeugung, dass es nur die Natur gibt, keine Seele, keinen Gott, nichts jenseits von Raum, Zeit, Materie und Energie. In seiner strengen Form, dem Materialismus oder Physikalismus, behauptet er, dass alles, was existiert, letztlich durch die Physik beschrieben wird (Sean Carroll, Alex Rosenberg, Daniel Dennett). Er tritt meist nicht als Philosophie auf, sondern als selbstverständliches Ergebnis der Wissenschaft – und genau das ist der Punkt, an dem du ansetzen kannst.

Denn der Naturalismus hat drei große Schwachstellen, die auch von **atheistischen Philosophen** wie Thomas Nagel, David Chalmers und Galen Strawson gesehen werden: das **Bewusstsein** (warum fühlt sich überhaupt etwas irgendwie an?), die **Vernunft** (warum sollten wir einem Gehirn trauen, das nur auf Überleben ausgelegt ist?) und die **Existenz von Nicht-Materiellem** wie logischen und mathematischen Wahrheiten. Dazu kommen zwei rhetorische Standardzüge: der Vorwurf des „Lückenbüßer-Gottes" und die Berufung auf Ockhams Rasiermesser.

Die naturwissenschaftlichen Einzelfragen – Neurowissenschaft, Kosmologie, Ursprung des Lebens, künstliche Intelligenz – werden in eigenen Themenblöcken vertieft; hier geht es um die philosophische Grundlage. Die koptisch-orthodoxe Tradition bietet dafür eine ausgewogene Sicht: Die Materie ist gut, weil Gott sie geschaffen hat (gegen jede Leibfeindlichkeit), aber der Mensch ist mehr als Materie – eine Einheit aus Leib und vernunftbegabter Seele, die am göttlichen Logos teilhat (Athanasius, Gregor von Nyssa, Kyrill).`,
  strategy: `**1. Mach den Naturalismus sichtbar.** Viele halten ihn für „neutral" oder „wissenschaftlich". Frag: „Ist ‚Es gibt nur Materie' ein Messergebnis oder eine Philosophie?" Unterscheide methodischen Naturalismus (in Ordnung) von metaphysischem Naturalismus (eine Weltanschauung, die begründet werden muss).

**2. Beginne beim Bewusstsein – dem stärksten Punkt.** Jeder kennt sein eigenes Erleben. Frag: „Wenn du alles über die Neuronen weißt, weißt du dann, wie sich Schmerz anfühlt?" Bestreite nicht die Neurowissenschaft, sondern zeige den Unterschied zwischen Abhängigkeit und Identität.

**3. Dann die Vernunft.** Das Argument aus der Vernunft (C. S. Lewis, Plantinga) zeigt, dass der Naturalismus den Ast absägt, auf dem er sitzt. Betone: Es richtet sich nicht gegen die Evolution, sondern gegen den Naturalismus.

**4. Entschärfe die Standardzüge.** „Lückenbüßer-Gott": Gib zu, dass es diesen Fehler gab, und zeige, dass die guten Argumente auf Wissen beruhen, nicht auf Unwissen. „Ockham": Das Rasiermesser gilt nur zwischen gleich guten Erklärungen.

**5. Führe vom Geist zum Geist.** Wenn Bewusstsein und Vernunft nicht aus blinder Materie entstehen, liegt nahe, dass am Anfang ein Geist steht – der Logos, „das wahrhaftige Licht, welches alle Menschen erleuchtet" (Joh 1,9).

**Fallen:** Keine Quantenmystik. Keine Abwertung der Materie oder des Leibes. Atheistische Kritiker des Materialismus (Nagel, Chalmers, Strawson) nicht als Christen darstellen. Neurowissenschaftliche Befunde nicht bestreiten, sondern deuten.`,
  keyOpponents: [
    { name: 'Daniel Dennett', role: 'Philosoph (1942–2024)', work: 'Consciousness Explained (1991)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'The Big Picture (2016)' },
    { name: 'Patricia S. Churchland', role: 'Neurophilosophin, UC San Diego', work: 'Neurophilosophy (1986)' },
    { name: 'Alex Rosenberg', role: 'Wissenschaftsphilosoph, Duke University', work: 'The Atheist\'s Guide to Reality (2011)' },
    { name: 'Keith Frankish', role: 'Philosoph, University of Sheffield', work: 'Illusionism as a Theory of Consciousness (2016)' },
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker', work: '„The Perimeter of Ignorance" (2005)' },
  ],
  claims: [nurMaterie, bewusstseinMateriellErklaerbar, vernunftDurchEvolution, lueckenbuesserGott, ockhamUnnoetigeHypothese],
  newPeople: [
    {
      id: 'wilhelm-ockham',
      name: 'Wilhelm von Ockham',
      years: 'um 1287–1347',
      era: 'mittelalter',
      tradition: 'katholisch',
      title: 'Franziskaner, Philosoph und Theologe',
      fields: ['Logik', 'Sparsamkeitsprinzip', 'Erkenntnistheorie'],
      bio: 'Englischer Franziskaner, einer der einflussreichsten Logiker des Mittelalters und Hauptvertreter des Nominalismus. Nach ihm ist das „Rasiermesser" benannt – das Prinzip, keine Annahmen ohne Notwendigkeit zu machen –, das er in theologischen und logischen Schriften gebrauchte.',
      keyWorks: ['Ordinatio (Sentenzenkommentar)', 'Summa logicae'],
      caveat: 'Westlicher Scholastiker; geriet im Armutsstreit in Konflikt mit Papst Johannes XXII. und wurde exkommuniziert. Er wird hier nur als Logiker herangezogen, nicht als theologische Autorität.',
    },
  ],
};

export default topic;
