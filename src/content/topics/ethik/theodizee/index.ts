import type { Topic } from '../../../schema.ts';
import logischesProblemDesUebels from './logisches-problem-des-uebels.ts';
import evidentiellesProblem from './evidentielles-problem.ts';
import natuerlicheUebel from './natuerliche-uebel.ts';
import tierleid from './tierleid.ts';
import kinderleidKaramasow from './kinderleid-karamasow.ts';
import unerhoerteGebete from './unerhoerte-gebete.ts';

const topic: Topic = {
  id: 'theodizee',
  category: 'ethik',
  group: 'Theodizee',
  order: 1,
  title: `Das Problem des Leids`,
  subtitle: `Wie kann ein guter, allmächtiger Gott das Übel zulassen?`,
  icon: 'cloud-lightning',
  overview: `Das Problem des Leids ist der ehrlichste und für viele Menschen der stärkste Grund, nicht an Gott zu glauben. Es hat mehrere Gestalten. Das **logische Problem** – überliefert als „Trilemma Epikurs" bei Laktanz, wiederholt von Hume und präzisiert von **J. L. Mackie** (1955) – behauptet, Gott und das Übel seien logisch unvereinbar. Es gilt seit **Alvin Plantingas** *Free Will Defense* (1974) in der Fachphilosophie weitgehend als entschärft; selbst Mackie räumte 1982 ein, dass eine logische Unvereinbarkeit nicht gezeigt ist. Das **evidentielle Problem** – klassisch formuliert von **William Rowe** (1979) mit dem Rehkitz im Waldbrand – fragt, ob das Ausmaß scheinbar sinnlosen Leids Gott unwahrscheinlich macht; hier ist die Debatte offen, und der skeptische Theismus (Wykstra) ist die wichtigste Antwort.

Dazu kommen die besonders schweren Einzelfragen: **natürliche Übel** (Lissabon 1755, der Tsunami 2004, Krebs bei Kindern), das **Tierleid** über Jahrmillionen vor dem Menschen, das Leid **unschuldiger Kinder**, wie es Iwan Karamasow bei Dostojewski zur Anklage formuliert, und die Erfahrung **unerhörter Gebete**. In diesen Fragen geht es nicht nur um Logik, sondern um Wunden.

Die koptisch-orthodoxe Antwort hat drei Schichten. **Philosophisch:** Das Böse ist kein Geschöpf Gottes, sondern Mangel und Abwendung (Athanasius, Basilius); Freiheit und eine verlässliche Natur sind Güter, die Übel möglich machen. **Erkenntnistheoretisch:** Dass wir Gottes Gründe nicht immer sehen, ist zu erwarten (Hiob). **Existenziell und christologisch – das Herz:** Gott hat sich das Leid nicht vom Leib gehalten. Der Logos hat im Fleisch gelitten, ist im Fleisch gekreuzigt worden und hat im Fleisch den Tod gekostet (Kyrill, 12. Anathematismus). Die Antwort auf das Leid ist zuletzt nicht eine Erklärung, sondern ein Gekreuzigter, der auferstanden ist und jede Träne abwischen wird.`,
  strategy: `**0. Zuerst Mitgefühl – immer.** Wer leidet, braucht zuerst nicht Argumente, sondern Nähe. Hiobs Freunde taten das Richtige, solange sie schwiegen (Hiob 2,13), und das Falsche, als sie Gott mit Theorien verteidigten (Hiob 42,7). Frage dich vor jedem Gespräch: Ist das eine philosophische Debatte oder spricht ein verletzter Mensch? Im zweiten Fall: zuhören, mitweinen (Röm 12,15), beten, praktisch helfen.

**1. Die Formen unterscheiden.** Kläre, ob es um das logische, das evidentielle oder das existenzielle Problem geht. Gegen den logischen Vorwurf genügt die Free Will Defense; beim evidentiellen geht es um Wahrscheinlichkeit und Gesamtevidenz; beim existenziellen um das Kreuz.

**2. Präzise zitieren.** Das „Epikur-Trilemma" ist nur bei Laktanz überliefert; Mackie hat nur die logische Unvereinbarkeit fallen gelassen, nicht das Problem insgesamt. Wer übertreibt, verliert gegen gut informierte Gegner.

**3. Ehrlich zugestehen.** Wir kennen Gottes Gründe im Einzelfall nicht. Tierleid und Kinderleid sind die schwersten Fragen. Gebetsstudien zeigen keinen messbaren Effekt.

**4. Die Moral der Empörung ansprechen – behutsam.** Unsere Empörung über das Böse setzt voraus, dass es wirklich böse ist. Woher kommt dieser Maßstab ohne Gott? (Nicht als Trick gegen Leidende verwenden.)

**5. Zum Kreuz führen.** Die koptische Antwort ist christologisch: Gott ist nicht Zuschauer, sondern Mitleidender und Sieger über den Tod (Kyrill, Hebr 2,14–15, Offb 21,4).

**Fallen:** Niemals Leid als Strafe für Sünden deuten (Lk 13,4–5; Joh 9,3). Niemals „Du hast nicht genug geglaubt". Keine Floskeln („Gott brauchte noch einen Engel"). Elie Wiesel nicht christlich vereinnahmen. Bei natürlichen Übeln und Tierleid keine Naturwissenschaft leugnen – die koptische Kirche hat über Erdalter und Mechanismen kein Dogma.`,
  keyOpponents: [
    { name: 'J. L. Mackie', role: 'Philosoph, Oxford (1917–1981)', work: '„Evil and Omnipotence" (1955); The Miracle of Theism (1982)' },
    { name: 'William L. Rowe', role: 'Religionsphilosoph, Purdue (1931–2015)', work: '„The Problem of Evil and Some Varieties of Atheism" (1979)' },
    { name: 'Paul Draper', role: 'Religionsphilosoph, Purdue', work: '„Pain and Pleasure" (1989)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'God\'s Problem (2008)' },
    { name: 'Stephen Fry', role: 'Schauspieler und Humanist', work: 'RTÉ-Interview (2015)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'River Out of Eden (1995); The God Delusion (2006)' },
  ],
  claims: [logischesProblemDesUebels, evidentiellesProblem, natuerlicheUebel, tierleid, kinderleidKaramasow, unerhoerteGebete],
  newPeople: [
    {
      id: 'wykstra',
      name: 'Stephen J. Wykstra',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Philosoph, Calvin College / Calvin University (em.)',
      fields: ['Theodizee', 'Skeptischer Theismus', 'Wissenschaftsphilosophie'],
      bio: 'Amerikanischer Religions- und Wissenschaftsphilosoph in der reformierten Tradition. Formulierte 1984 das CORNEA-Prinzip („Condition of Reasonable Epistemic Access") gegen William Rowes evidentielles Argument aus dem Übel und begründete damit den „skeptischen Theismus".',
      keyWorks: ['„The Humean Obstacle to Evidential Arguments from Suffering" (International Journal for Philosophy of Religion, 1984)'],
    },
    {
      id: 'michael-murray',
      name: 'Michael J. Murray',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Religionsphilosoph, Franklin & Marshall College',
      fields: ['Tierleid', 'Theodizee', 'Religionsphilosophie'],
      bio: 'Amerikanischer Religionsphilosoph, lange Professor am Franklin & Marshall College in Pennsylvania und später in leitender Funktion bei der John Templeton Foundation tätig. Sein Buch „Nature Red in Tooth and Claw" gilt als gründlichste philosophische Untersuchung des Tierleids aus theistischer Sicht.',
      keyWorks: ['Nature Red in Tooth and Claw: Theism and the Problem of Animal Suffering (2008)'],
    },
    {
      id: 'marilyn-adams',
      name: 'Marilyn McCord Adams',
      years: '1943–2017',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Philosophin und Priesterin der Episkopalkirche; Regius Professor of Divinity, Oxford',
      fields: ['Schreckliche Übel', 'Theodizee', 'Mittelalterliche Philosophie'],
      bio: 'Amerikanische Philosophin (UCLA, Yale) und als erste Frau Regius Professor of Divinity in Oxford (2004–2009). Prägte die Debatte über „schreckliche Übel" (horrendous evils) und betonte, dass Gott solche Übel im Leben jedes einzelnen Betroffenen überwinden muss.',
      keyWorks: ['Horrendous Evils and the Goodness of God (1999)', 'Christ and Horrors (2006)'],
      caveat: 'Vertrat einen Universalismus (Allversöhnung), den die koptische Kirche nicht teilt; wird für die Philosophie des Leids herangezogen, nicht für die Eschatologie.',
    },
    {
      id: 'isaak-syrer',
      name: 'Isaak der Syrer (Isaak von Ninive)',
      years: '7. Jh.',
      era: 'patristisch',
      tradition: 'ostsyrisch',
      title: 'Bischof von Ninive, Mönch und geistlicher Schriftsteller',
      fields: ['Geistliches Leben', 'Barmherzigkeit', 'Gebet', 'Eschatologie'],
      bio: 'Mönch aus Beth Qatraye am Persischen Golf, kurzzeitig Bischof von Ninive, danach Einsiedler. Seine „Asketischen Homilien" wurden früh ins Griechische und Arabische übersetzt und in der orthodoxen wie in der koptischen Mönchstradition hoch geschätzt; Vater Matta el-Meskeen griff vielfach auf ihn zurück. Berühmt sind seine Worte über das „barmherzige Herz" und über die Liebe Gottes, die selbst in der Gehenna wirkt.',
      keyWorks: ['Asketische Homilien (Erster Teil)', 'Zweiter Teil (1983 von Sebastian Brock wiederentdeckt)'],
      caveat: 'Gehörte zur Kirche des Ostens. Im „Zweiten Teil" seiner Schriften äußert er die Hoffnung auf ein Ende der Gehenna für alle; diese Hoffnung ist nicht Lehre der koptischen Kirche.',
    },
  ],
};

export default topic;
