import type { Topic } from '../../../schema.ts';
import steinParadox from './stein-paradox.ts';
import allwissenheitUnveraenderlichkeit from './allwissenheit-unveraenderlichkeit.ts';
import zeitloserGottHandeltNicht from './zeitloser-gott-handelt-nicht.ts';
import koerperloserGeistInkohaerent from './koerperloser-geist-inkohaerent.ts';
import warumSchoepfung from './warum-schoepfung.ts';

const topic: Topic = {
  id: 'gottes-eigenschaften',
  category: 'philosophie',
  group: 'Atheismus & Gottesbeweise',
  order: 3,
  title: `Gottes Eigenschaften`,
  subtitle: `Allmacht, Allwissenheit, Ewigkeit, Geistigkeit – und warum ein vollkommener Gott erschafft`,
  icon: 'crown',
  overview: `Neben den Argumenten *gegen die Begründung* des Glaubens („Es gibt keine Beweise") gibt es eine zweite, oft unterschätzte Gruppe atheistischer Argumente: die **Inkohärenz-Argumente**. Sie behaupten, der Gottesbegriff selbst sei widersprüchlich – wie ein „viereckiger Kreis". Dann müsste man über Belege gar nicht mehr reden. Klassisch sind das Stein-Paradox (J. L. Mackie), Norman Kretzmanns Argument gegen die Vereinbarkeit von Allwissenheit und Unveränderlichkeit (1966), die Frage, wie ein zeitloser Gott handeln kann (Richard Gale), die Kritik am Begriff eines körperlosen Geistes (Gilbert Ryle, Kai Nielsen) und Theodore Dranges Argument, ein vollkommenes Wesen habe keinen Grund zu erschaffen. Michael Martin und Ricki Monnier haben solche Argumente in „The Impossibility of God" (2003) gesammelt.

Die gute Nachricht: Diese Fragen sind keine neuen Angriffe, sondern **alte Themen der christlichen Philosophie**. Augustinus, Boethius, Anselm, Thomas – und in Alexandrien Athanasius, Kyrill und Johannes Philoponos – haben sie gründlich durchdacht. Die heutige analytische Religionsphilosophie (Swinburne, Plantinga, Stump, Craig, Leftow, Feser) hat die klassischen Antworten präzisiert. Bemerkenswert ist, dass Norman Kretzmann, Urheber eines der bekanntesten Inkohärenz-Argumente, 1981 zusammen mit Eleonore Stump selbst die klassische Lehre von Gottes Ewigkeit neu verteidigt hat.

Für die koptische Kirche haben diese Fragen einen besonderen Klang: Die Unveränderlichkeit Gottes ist untrennbar mit der Christologie des hl. Kyrill verbunden („ohne Verwandlung"), die Unkörperlichkeit Gottes wurde 399 in der ägyptischen Wüste im Anthropomorphiten-Streit ausdrücklich geklärt, und die Frage „Warum Schöpfung?" beantwortet die koptische Liturgie des hl. Gregorius mit einem Satz, der die ganze Debatte zusammenfasst: Gott hatte unseren Dienst nicht nötig – wir aber hatten seine Herrschaft nötig.`,
  strategy: `**1. Begriffe klären, bevor du antwortest.** Fast jedes Inkohärenz-Argument lebt von einem Zerrbild: Allmacht als „Unsinn tun können", Unveränderlichkeit als „Starre", Ewigkeit als „unendlich lange Zeit", Geist als „unsichtbares Gas". Frag zuerst: „Wie definierst du das Attribut, das du angreifst?" Oft löst sich das Problem schon dabei auf.

**2. Die Beweislast benennen.** Wer „inkohärent" sagt, behauptet einen *logischen Widerspruch*. „Ungewohnt", „schwer vorstellbar" oder „philosophisch umstritten" ist kein Widerspruch.

**3. Ehrlich zwei Modelle zeigen.** Beim Verhältnis Gottes zur Zeit gibt es unter Christen zwei ernsthafte Modelle (zeitlos: Augustinus, Boethius, Thomas, Stump; zeitlos ohne Schöpfung und zeitlich seit der Schöpfung: Craig). Das ist eine Stärke: Der Glaube hängt nicht an einem einzigen philosophischen System.

**4. Zur Dreieinigkeit und Menschwerdung führen.** Viele Fragen (Kann Gott lieben, ohne zu erschaffen? Kennt ein unveränderlicher Gott unser Leid?) finden ihre tiefste Antwort erst in der Dreieinigkeit und in der Menschwerdung des Logos. Hier hat die koptische Theologie (Athanasius, Kyrill) besonders viel zu sagen.

**5. Vom Begriff zur Existenz weitergehen.** Wenn klar ist, dass der Gottesbegriff kohärent ist, ist die Frage, *ob* Gott existiert, noch offen. Leite über zu den Gottesbeweisen und zur Auferstehung Jesu.

**Fallen:** „Gott kann alles, auch das Unmögliche" (macht jede Aussage beliebig); „Gott steht über der Logik" (beendet das Gespräch); „Gott hat uns erschaffen, weil er einsam war" (bestätigt den Einwand).`,
  keyOpponents: [
    { name: 'J. L. Mackie', role: 'Philosoph, Oxford (1917–1981)', work: '„Evil and Omnipotence" (1955); The Miracle of Theism (1982)' },
    { name: 'Anthony Kenny', role: 'Philosoph, Oxford; Agnostiker', work: 'The God of the Philosophers (1979)' },
    { name: 'Richard M. Gale', role: 'Religionsphilosoph, University of Pittsburgh', work: 'On the Nature and Existence of God (1991)' },
    { name: 'Theodore M. Drange', role: 'Religionsphilosoph, West Virginia University', work: '„Incompatible-Properties Arguments: A Survey" (1998)' },
    { name: 'Michael Martin', role: 'Religionsphilosoph, Boston University', work: 'Atheism: A Philosophical Justification (1990); The Impossibility of God (Hg., 2003)' },
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University', work: 'Describing Gods (2014); Arguing about Gods (2006)' },
  ],
  claims: [steinParadox, allwissenheitUnveraenderlichkeit, zeitloserGottHandeltNicht, koerperloserGeistInkohaerent, warumSchoepfung],
  newPeople: [
    {
      id: 'george-mavrodes',
      name: 'George I. Mavrodes',
      years: '1926–2019',
      era: 'modern',
      tradition: 'christlich',
      title: 'Religionsphilosoph, University of Michigan',
      fields: ['Allmacht', 'Religiöse Erkenntnistheorie', 'Offenbarung'],
      bio: 'Analytischer Religionsphilosoph, lange Jahre an der University of Michigan. Bekannt wurde er durch seinen kurzen Aufsatz über das Stein-Paradox (1963), der als klassische Lösung gilt. Er schrieb außerdem über die Beweisbarkeit Gottes und über Offenbarung.',
      keyWorks: ['„Some Puzzles Concerning Omnipotence" (1963)', 'Belief in God (1970)', 'Revelation in Religious Belief (1988)'],
    },
    {
      id: 'dionysius-areopagita',
      name: 'Dionysius Areopagita (Pseudo-Dionysius)',
      years: 'um 500',
      era: 'patristisch',
      tradition: 'christlich',
      title: 'Unbekannter Verfasser des „Corpus Dionysiacum" (syrischer Raum)',
      fields: ['Schöpfung und das Gute', 'Negative Theologie', 'Göttliche Namen'],
      bio: 'Unter dem Namen des in Apg 17,34 genannten Paulus-Schülers entstanden um 500 vier Abhandlungen und zehn Briefe über die göttlichen Namen, die Hierarchien und die mystische Theologie. Die Schriften prägten die östliche und westliche Theologie tief. Sie werden zuerst von Severus von Antiochien zitiert.',
      keyWorks: ['Über die göttlichen Namen (De divinis nominibus)', 'Über die mystische Theologie'],
      caveat: 'Der Verfasser ist nicht der Apostelschüler aus Apg 17,34, sondern ein Autor um 500, vermutlich aus Syrien. Er wird hier als Zeuge der Lehre von der überströmenden Güte Gottes herangezogen, nicht als apostolische Autorität. Seine Begrifflichkeit ist neuplatonisch gefärbt.',
    },
    {
      id: 'richard-st-viktor',
      name: 'Richard von St. Viktor',
      years: 'gest. 1173',
      era: 'mittelalter',
      tradition: 'katholisch',
      title: 'Augustiner-Chorherr und Theologe, Abtei St. Viktor (Paris)',
      fields: ['Dreieinigkeit', 'Theologie der Liebe', 'Mystik'],
      bio: 'Schottischer Theologe, Prior der Abtei St. Viktor in Paris. In seinem Werk über die Dreieinigkeit entwickelte er das Argument, dass vollkommene Liebe Gemeinschaft von Personen verlangt. Seine Gedanken werden bis heute in der Trinitätstheologie diskutiert.',
      keyWorks: ['Über die Dreieinigkeit (De Trinitate)', 'Benjamin minor', 'Benjamin maior'],
      caveat: 'Lateinischer Theologe; herangezogen für das Argument aus der vollkommenen Liebe, nicht als Autorität in Fragen, in denen westliche und koptische Lehre voneinander abweichen (z. B. Filioque).',
    },
  ],
};

export default topic;
