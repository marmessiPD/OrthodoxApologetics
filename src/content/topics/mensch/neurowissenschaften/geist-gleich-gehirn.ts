import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'geist-gleich-gehirn',
  title: `„Hirnschäden verändern die Persönlichkeit – also ist der Geist nur das Gehirn."`,
  proponents: [
    { name: 'Francis Crick', role: 'Molekularbiologe, Nobelpreis 1962, später Neurowissenschaftler am Salk Institute', work: 'The Astonishing Hypothesis (1994)' },
    { name: 'Patricia Churchland', role: 'Neurophilosophin, University of California San Diego', work: 'Touching a Nerve: The Self as Brain (2013)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler (PhD UCLA) und Autor', work: 'Free Will (2012); Waking Up (2014)' },
    { name: 'Robert Sapolsky', role: 'Neuroendokrinologe, Stanford University', work: 'Behave (2017); Determined (2023)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'The Big Picture (2016)' },
  ],
  steelman: `Seit 1848, als eine Eisenstange Phineas Gage durch den linken Stirnlappen fuhr und seine Freunde sagten, „Gage ist nicht mehr Gage", häufen sich die Belege: Ein Tumor im orbitofrontalen Kortex machte einen unauffälligen Lehrer pädophil – nach der Operation verschwand die Neigung, mit dem Rezidiv kehrte sie zurück (Burns & Swerdlow 2003). Alzheimer löscht Erinnerungen, Charakter und am Ende das Wiedererkennen der eigenen Kinder. Propofol schaltet das Ich in Sekunden ab, Alkohol enthemmt, Antidepressiva heben die Stimmung, Tiefe Hirnstimulation verändert Antrieb und Gefühle auf Knopfdruck. Für jede geistige Funktion – Sprache, Gedächtnis, Moral, Glaube – kennen wir neuronale Korrelate, und kein einziges Experiment hat je Geist ohne Gehirn gezeigt. Wenn es eine unabhängige Seele gäbe, warum ist sie dann so völlig wehrlos gegen ein paar Gramm Gewebeschaden? Die einfachste Erklärung, die Ockhams Rasiermesser verlangt, lautet: Der Geist ist das, was das Gehirn tut. Crick hat es auf den Punkt gebracht – „Du" bist „nichts weiter als das Verhalten einer riesigen Ansammlung von Nervenzellen".`,
  biblical: {
    summary: `Die Bibel vertritt kein platonisches „Seele gut, Körper Gefängnis". Der Mensch ist eine leib-seelische Einheit: Gott formt ihn aus Erde und haucht ihm den Lebensatem ein, „und also ward der Mensch eine lebendige Seele" (Gen 2,7). Zugleich lehrt die Schrift, dass die Person den Tod des Leibes überdauert (Mt 10,28; Lk 23,43; Phil 1,23) und am Ende leiblich auferweckt wird (1 Kor 15). Daraus folgt: Christen **erwarten**, dass Geist und Körper in diesem Leben eng verflochten sind. Dass ein geschädigter Leib das Wirken der Seele behindert, widerlegt nicht die Bibel, sondern bestätigt ihr Menschenbild.`,
    detail: `- **Nefesch** (hebr.) bezeichnet oft das lebendige Ganze des Menschen, nicht einen „Geist im Gehäuse". Das biblische Menschenbild ist ganzheitlich.
- **Fortdauer nach dem Tod:** Jesus unterscheidet ausdrücklich, dass Menschen „den Leib töten", aber „die Seele nicht" töten können (Mt 10,28). Paulus will „abscheiden und bei Christo sein" (Phil 1,23).
- **Der Tod ist ein Feind** (1 Kor 15,26), keine Befreiung. Die Trennung von Seele und Leib ist widernatürlich und vorläufig; das Ziel ist die Auferstehung des ganzen Menschen.
- **Kohelet 12,7:** „Der Staub muss wieder zu der Erde kommen, wie er gewesen ist, und der Geist wieder zu Gott, der ihn gegeben hat" – Abhängigkeit vom Staub in diesem Leben, aber keine Identität mit ihm.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '2,7', quote: `Und Gott der HERR machte den Menschen aus einem Erdenkloß, und er blies ihm ein den lebendigen Odem in seine Nase. Und also ward der Mensch eine lebendige Seele.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,28', quote: `Und fürchtet euch nicht vor denen, die den Leib töten, und die Seele nicht mögen töten; fürchtet euch aber vielmehr vor dem, der Leib und Seele verderben mag in die Hölle.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Prediger (Kohelet)', ref: '12,7', quote: `Denn der Staub muß wieder zu der Erde kommen, wie er gewesen ist, und der Geist wieder zu Gott, der ihn gegeben hat.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '1,23', quote: `Ich habe Lust abzuscheiden und bei Christo zu sein.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Teilzitat; Paulus erwartet persönliche Gemeinschaft mit Christus unmittelbar nach dem Tod.' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt mit den Vätern: Der Mensch besteht aus einer vernunftbegabten (logischen), von Gott geschaffenen Seele und einem Leib, die gemeinsam ins Dasein treten (keine Präexistenz der Seele). Die Seele belebt den Leib und wirkt durch seine Organe wie ein Künstler durch sein Instrument. Schon im 4. Jahrhundert kannten die Väter das Argument aus Hirnverletzungen – und beantworteten es genau so: Ein beschädigtes Werkzeug behindert die Tätigkeit des Geistes, ohne dass der Geist das Werkzeug wäre.`,
    detail: `- **Athanasius** (Contra Gentes 30–33) begründet, dass die Seele vernunftbegabt und vom Leib verschieden ist: Sie denkt über Dinge nach, die jenseits der Sinne liegen, urteilt über die Sinneseindrücke und lenkt den Leib wie ein Steuermann oder Musiker.
- **Gregor von Nyssa** (Über die Erschaffung des Menschen, Kap. 12–15) setzt sich ausdrücklich mit Ärzten auseinander, die den Sitz des Geistes im Gehirn sehen, weil Verletzungen der Hirnhäute das Denken stören. Seine Antwort: Der Geist ist nicht an einem Ort eingeschlossen, sondern wirkt durch den ganzen Organismus; ist das Organ beschädigt, kann er sich nicht recht äußern – wie ein Musiker auf einem verstimmten Instrument.
- **Augustinus** (De Genesi ad litteram VII) kennt die damalige Lehre von den Hirnkammern (Wahrnehmung, Gedächtnis, Bewegung) und deutet sie als Werkzeuge der Seele, nicht als die Seele selbst.
- Das Ziel christlicher Hoffnung ist nicht eine körperlose Seele, sondern die **Auferstehung des Leibes** – das Glaubensbekenntnis bekennt „die Auferstehung der Toten und das Leben der kommenden Welt".`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '30–33', status: 'paraphrase', quote: `Die Seele ist vernunftbegabt und vom Leib verschieden; sie urteilt über die Sinne, bedenkt Unsichtbares und bewegt den Leib wie ein Lenker sein Werkzeug.` },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: 'Kap. 12–15', status: 'paraphrase', quote: `Wenn die Hirnhäute verletzt werden, wird das Denken gestört – nicht weil der Geist im Gehirn eingeschlossen wäre, sondern weil sein Werkzeug beschädigt ist, so wie ein Künstler auf einem verdorbenen Instrument seine Kunst nicht zeigen kann.`, note: 'Abschnittszählung je nach Ausgabe verschieden; vor Zitierung des Wortlauts in einer Übersetzung prüfen.' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über den Wortlaut der Genesis (De Genesi ad litteram)', ref: 'Buch VII', status: 'paraphrase', quote: `Die Hirnkammern dienen der Wahrnehmung, dem Gedächtnis und der Bewegung als Werkzeuge der Seele; die Seele selbst ist nicht körperlich.` },
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', ref: 'Schlussartikel', year: '381', status: 'paraphrase', quote: `Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt.` },
    ],
  },
  opposingView: {
    summary: `Die Neurowissenschaft zeigt eine enge, gut belegte Abhängigkeit geistiger Leistungen von Hirnfunktionen; die große Mehrheit der Neurowissenschaftler arbeitet mit einer physikalistischen Grundannahme. Diese Annahme ist aber eine **philosophische Rahmenentscheidung**, kein Messergebnis: Kein Experiment kann zwischen „das Gehirn erzeugt den Geist" und „das Gehirn ist das Instrument des Geistes" unterscheiden, solange es nur Korrelationen misst. Das Leib-Seele-Problem gilt in der Philosophie des Geistes als ungelöst.`,
    detail: `**Was gesichert ist:** Läsionen, Stimulation, Pharmaka und Bildgebung zeigen, dass Wahrnehmung, Gedächtnis, Emotion, Antrieb und auch moralisches Verhalten in diesem Leben von intakten Hirnfunktionen abhängen (Gage; Burns & Swerdlow 2003; Demenzforschung).

**Was offen ist:**
- Wie aus neuronaler Aktivität subjektives Erleben, Bedeutung (Intentionalität) und logisches Schließen hervorgehen – das „schwere Problem" (siehe A8, ‚naturalismus/bewusstsein-materiell-erklaerbar').
- **Mentale Verursachung:** Psychotherapie verändert nachweislich den Hirnstoffwechsel (Schwartz u. a. 1996 bei Zwangsstörung); Placebo und bewusste Emotionsregulation verändern Hirnaktivität (Beauregard 2007). Hier wirkt Bedeutung „von oben nach unten".
- **Verdecktes Bewusstsein:** Patienten, die als „vegetativ" galten, konnten auf Aufforderung mentale Aufgaben ausführen, die im fMRT sichtbar wurden (Owen u. a. 2006; Monti u. a. 2010) – Bewusstsein kann vorhanden sein, wo es nach außen fehlt.
- **Paradoxe/terminale Luzidität:** Berichte über kurze klare Phasen bei schwerer Demenz kurz vor dem Tod (Nahm u. a. 2012) werden inzwischen systematisch erforscht (Mashour u. a. 2019); die Datenlage ist noch überwiegend kasuistisch.

**Ehrlich:** Auch manche Christen vertreten einen „nicht-reduktiven Physikalismus" (z. B. Nancey Murphy). Die koptische Kirche lehrt jedoch eine geistige Seele, die den Tod überdauert.`,
    sources: [
      { kind: 'gegner', author: 'Francis Crick', work: 'The Astonishing Hypothesis: The Scientific Search for the Soul', year: '1994', ref: 'Kap. 1', status: 'verbatim', quote: `„Du", deine Freuden und Leiden, deine Erinnerungen und Ambitionen, dein Gefühl persönlicher Identität und freien Willens sind in Wirklichkeit nichts weiter als das Verhalten einer riesigen Ansammlung von Nervenzellen und der zugehörigen Moleküle.`, original: `"You," your joys and your sorrows, your memories and your ambitions, your sense of personal identity and free will, are in fact no more than the behavior of a vast assembly of nerve cells and their associated molecules.`, translation: 'eigene Übersetzung' },
      { kind: 'wissenschaft', author: 'J. M. Burns, R. H. Swerdlow', work: 'Right orbitofrontal tumor with pedophilia symptom and constructional apraxia sign', ref: 'Archives of Neurology 60 (2003), 437–440', year: '2003', status: 'paraphrase', quote: `Fallbericht: Ein Tumor im rechten orbitofrontalen Kortex ging mit neu aufgetretenen pädophilen Impulsen einher, die nach der Resektion verschwanden und mit dem Rezidiv wiederkehrten.` },
      { kind: 'wissenschaft', author: 'M. Macmillan, M. L. Lena', work: 'Rehabilitating Phineas Gage', ref: 'Neuropsychological Rehabilitation 20 (2010), 641–658', year: '2010', status: 'paraphrase', quote: `Die verbreitete Legende vom dauerhaft „ruinierten" Gage ist übertrieben: Er arbeitete später jahrelang als Postkutschenfahrer in Chile, was auf eine erhebliche soziale Erholung hindeutet.` },
      { kind: 'wissenschaft', author: 'J. M. Schwartz, P. W. Stoessel, L. R. Baxter u. a.', work: 'Systematic changes in cerebral glucose metabolic rate after successful behavior modification treatment of obsessive-compulsive disorder', ref: 'Archives of General Psychiatry 53 (1996), 109–113', year: '1996', status: 'paraphrase', quote: `Erfolgreiche Verhaltenstherapie (ohne Medikamente) ging mit messbaren Veränderungen des Glukosestoffwechsels im Nucleus caudatus einher.` },
      { kind: 'wissenschaft', author: 'Mario Beauregard', work: 'Mind does really matter: Evidence from neuroimaging studies of emotional self-regulation, psychotherapy, and placebo effect', ref: 'Progress in Neurobiology 81 (2007), 218–236', year: '2007', status: 'paraphrase', quote: `Übersichtsarbeit: Bewusste Emotionsregulation, Psychotherapie und Placebo verändern Hirnaktivität messbar – ein Hinweis auf kausale Wirksamkeit mentaler Inhalte.` },
      { kind: 'wissenschaft', author: 'A. M. Owen, M. R. Coleman, M. Boly u. a.', work: 'Detecting awareness in the vegetative state', ref: 'Science 313 (2006), 1402', year: '2006', status: 'paraphrase', quote: `Eine als vegetativ diagnostizierte Patientin aktivierte auf Aufforderung („Stellen Sie sich vor, Tennis zu spielen") dieselben Hirnareale wie Gesunde.` },
      { kind: 'wissenschaft', author: 'M. Nahm, B. Greyson, E. W. Kelly, E. Haraldsson', work: 'Terminal lucidity: A review and a case collection', ref: 'Archives of Gerontology and Geriatrics 55 (2012), 138–142', year: '2012', status: 'paraphrase', quote: `Sammlung von Fallberichten über unerwartete Klarheit kurz vor dem Tod bei Patienten mit schwerer Demenz oder anderen Hirnerkrankungen; Forschungsbedarf wird betont.` },
    ],
  },
  quickAnswer: `Dass Hirnschäden den Geist beeinträchtigen, beweist **Abhängigkeit, nicht Identität**. Wenn man die Saiten eines Klaviers beschädigt, klingt die Musik schlechter – daraus folgt nicht, dass der Pianist aus Saiten besteht. Das Christentum lehrt ohnehin, dass Seele und Leib eine Einheit bilden; schon Gregor von Nyssa erklärte im 4. Jahrhundert, warum Hirnverletzungen das Denken stören. Die eigentliche Frage – wie aus Neuronenfeuer Erleben, Bedeutung und ein „Ich" werden – beantworten Korrelationen nicht.`,
  keyPoints: [
    `**Abhängigkeit ≠ Identität:** Dass A von B abhängt, beweist nicht, dass A nichts als B ist. Ein Radio, eine Geige, ein Computer-Bildschirm – alle zeigen Abhängigkeit ohne Identität.`,
    `**Beide Modelle sagen dieselben Daten voraus:** Die Produktionsthese und die Instrument- bzw. Übertragungsthese (William James 1898) erwarten gleichermaßen, dass Hirnschäden den Geist beeinträchtigen. Läsionsdaten entscheiden deshalb nicht zwischen ihnen.`,
    `**Das christliche Menschenbild erwartet Abhängigkeit:** Leib-seelische Einheit (Gen 2,7), Fortdauer der Person (Mt 10,28), Auferstehung des Leibes. Die Väter kannten das Argument aus Hirnverletzungen bereits.`,
    `**Mentale Verursachung ist belegt:** Psychotherapie, Placebo und bewusste Emotionsregulation verändern Hirnstoffwechsel und -aktivität – Bedeutung wirkt auf Materie.`,
    `**Physikalismus ist ein Versprechen, kein Befund:** Kein Neurowissenschaftler kann bis heute erklären, wie aus Neuronen subjektives Erleben und logisches Denken werden. „Das wird die Wissenschaft schon klären" ist ein Wechsel auf die Zukunft.`,
    `**Selbstwiderlegungsgefahr:** Wenn alle Überzeugungen nur Produkte blinder Neurochemie sind, gilt das auch für die Überzeugung des Physikalisten – warum sollte sie dann wahr statt nur verursacht sein?`,
  ],
  argument: {
    name: 'Das Unterbestimmtheits-Argument',
    summary: 'Hirnschäden-Daten können zwischen „Gehirn erzeugt Geist" und „Gehirn ist Instrument des Geistes" nicht unterscheiden.',
    premises: [
      {
        text: `P1: Die neurowissenschaftlichen Daten (Läsionen, Stimulation, Pharmaka, Bildgebung) zeigen, dass geistige Vorgänge in diesem Leben vom Gehirn abhängen.`,
        support: `Das ist unstrittig und wird von Christen nicht bestritten, sondern zugestanden. Gage, Tumorfälle, Demenz und Narkose belegen es eindrücklich.`,
      },
      {
        text: `P2: Sowohl die Identitätsthese (das Gehirn erzeugt den Geist) als auch die Instrument- bzw. Interaktionsthese (der Geist wirkt durch das Gehirn) sagen genau diese Abhängigkeit voraus.`,
        support: `Wenn ein Instrument beschädigt ist, ist die Äußerung des Künstlers beeinträchtigt. William James hat 1898 gezeigt, dass „Funktion des Gehirns" produktiv, aber auch ermöglichend oder übertragend verstanden werden kann. Gregor von Nyssa argumentierte bereits im 4. Jahrhundert so.`,
        sources: [
          { kind: 'fachliteratur', author: 'William James', work: 'Human Immortality: Two Supposed Objections to the Doctrine (Ingersoll-Vorlesung)', year: '1898', status: 'paraphrase', quote: `Wenn wir sagen, das Denken sei eine Funktion des Gehirns, müssen wir nicht nur an eine erzeugende Funktion denken; wir dürfen ebenso eine ermöglichende oder übertragende Funktion in Betracht ziehen – wie farbiges Glas, das Licht durchlässt und färbt, es aber nicht erzeugt.` },
        ],
      },
      {
        text: `P3: Daten, die zwei Hypothesen gleichermaßen vorhersagen, können nicht zwischen ihnen entscheiden.`,
        support: `Ein elementarer Grundsatz der Wissenschaftstheorie: Bestätigung erfordert, dass die Daten unter der einen Hypothese wahrscheinlicher sind als unter der anderen.`,
      },
    ],
    inferences: [
      `Läsions- und Korrelationsdaten allein beweisen nicht, dass der Geist nur das Gehirn ist.`,
      `Die Entscheidung fällt auf anderer Ebene: Erste-Person-Erleben, Intentionalität, rationales Schließen, mentale Verursachung und Befunde, bei denen Bewusstsein trotz schwer beeinträchtigter Hirnfunktion berichtet wird.`,
    ],
    conclusion: `Das Argument „Hirnschäden verändern die Persönlichkeit, also ist der Geist nur das Gehirn" ist ein Fehlschluss von Abhängigkeit auf Identität. Es lässt das christliche Menschenbild unberührt.`,
  },
  voices: [
    {
      person: 'gregor-nyssa',
      role: 'als Kirchenvater, der das Argument aus Hirnverletzungen schon kannte',
      text: `Gregor von Nyssa diskutiert in seiner Schrift über die Erschaffung des Menschen ausdrücklich die Ärzte seiner Zeit, die den Sitz des Geistes im Gehirn vermuten, weil Verletzungen der Hirnhäute Verwirrung und Bewusstseinsstörungen verursachen. Er bestreitet die Beobachtung nicht. Er bestreitet die Schlussfolgerung: Der Geist ist nach seiner Darstellung nicht in einem Organ eingeschlossen, sondern durchwaltet den ganzen Menschen und gebraucht die Organe als Werkzeuge. Wird das Werkzeug beschädigt, kann der Geist nicht mehr angemessen wirken – wie ein geübter Musiker, dessen Instrument verstimmt oder zerbrochen ist. Bemerkenswert ist, dass damit 1600 Jahre vor der modernen Neurologie das Grundmuster der heutigen Debatte vorliegt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: 'Kap. 12', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Apologet gegen den Materialismus der Antike',
      text: `Für Athanasius ist die Vernunftseele das, was den Menschen vom Tier unterscheidet und ihn für die Erkenntnis Gottes öffnet. In Contra Gentes argumentiert er, dass die Seele über die Sinneseindrücke urteilt, ihnen sogar widersprechen kann, an Abwesendes und Zukünftiges denkt und im Schlaf, wenn der Leib ruht, dennoch tätig ist. Ein bloßes Organ könne sich nicht selbst beurteilen. Der Leib ist für Athanasius kein Gefängnis, sondern das Instrument, das die Seele lenkt – ein Bild, das die enge Abhängigkeit erklärt, ohne den Menschen auf sein Gewebe zu reduzieren.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '30–33', status: 'paraphrase' },
      ],
    },
    {
      person: 'penfield',
      role: 'als Neurochirurg, der die Hirnrinde bei Wachpatienten kartierte',
      text: `Wilder Penfield reizte bei Hunderten wacher Epilepsie-Patienten die Hirnrinde elektrisch. Er konnte Bewegungen, Empfindungen, Farben, sogar lebhafte Erinnerungen auslösen – aber nach eigenem Bericht nie einen Willensentschluss, eine abstrakte Überzeugung oder das Ich selbst. Patienten, deren Arm durch Stimulation zuckte, erlebten das als fremd: Nicht sie, sondern der Chirurg habe das getan. Penfield, der als Materialist begonnen hatte, kam in „The Mystery of the Mind" (1975) zu dem Schluss, dass sich der Mensch leichter aus zwei Grundelementen – Geist und Gehirn – verstehen lasse als aus einem.`,
      sources: [
        { kind: 'wissenschaft', author: 'Wilder Penfield', work: 'The Mystery of the Mind: A Critical Study of Consciousness and the Human Brain', year: '1975', status: 'paraphrase', quote: `Es gibt keine Stelle in der Hirnrinde, deren elektrische Reizung einen Patienten dazu bringt, etwas zu glauben oder sich zu entscheiden.`, note: 'Vielzitierte Aussage aus dem Buch; Wortlaut vor wörtlicher Verwendung am Original prüfen.' },
      ],
    },
    {
      person: 'egnor',
      role: 'als Neurochirurg mit jahrzehntelanger klinischer Erfahrung',
      text: `Michael Egnor betont, dass gerade die Neurochirurgie überraschende Grenzen der Gleichung „Geist = Gehirn" zeigt: Epileptische Anfälle können Bewegungen, Gefühle und Wahrnehmungen auslösen, aber keine abstrakten Gedankengänge wie das Lösen einer Rechenaufgabe; Kinder, denen eine ganze Hirnhälfte entfernt wurde, bleiben eine einzige Person, oft mit erstaunlich erhaltener Persönlichkeit. Egnor folgert, dass die höheren Vernunftleistungen – Begriffe, Urteile, Schlüsse – nicht wie Sinneswahrnehmungen an bestimmte Areale gebunden sind. Er versteht sich dabei in der aristotelisch-thomistischen Tradition, nach der die Seele die Form des Leibes ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael Egnor, Denyse O\'Leary', work: 'The Immortal Mind: A Neurosurgeon\'s Case for the Existence of the Soul', year: '2025', status: 'paraphrase' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph (Oxford)',
      text: `Richard Swinburne unterscheidet streng zwischen Ereignissen, die man von außen beobachten kann (Neuronenfeuer), und mentalen Ereignissen, zu denen der Betroffene einen privilegierten Zugang hat (Schmerz, Absicht, Gedanke). Eine vollständige Beschreibung aller Hirnvorgänge würde nach Swinburne nicht einschließen, ob und was jemand erlebt. Zudem lasse sich widerspruchsfrei denken, dass dieselbe Person mit einem anderen Gehirn weiterlebt – Identität der Person ist also etwas anderes als Identität des Gehirns. Daraus folgt sein „substanzdualistischer" Schluss: Die Seele ist der wesentliche Teil des Menschen, der normalerweise durch das Gehirn wirkt und von ihm abhängt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Mind, Brain, and Free Will', year: '2013', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Are We Bodies or Souls?', year: '2019', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'gage-und-tumor',
      objection: `Phineas Gage verlor seine Selbstbeherrschung, ein Tumor machte einen Familienvater pädophil, und als er entfernt wurde, verschwand die Neigung. Moral und Persönlichkeit hängen am Gewebe. Wo bitte bleibt da die Seele?`,
      objectionBy: 'Robert Sapolsky',
      targetsPremise: 1,
      answer: `Ich bestreite keine dieser Beobachtungen – sie zeigen, dass die Seele in diesem Leben durch das Gehirn wirkt und von ihm abhängt. Das ist christliche Lehre: Der Mensch ist eine leib-seelische Einheit. Ein Pianist auf einem beschädigten Flügel spielt falsch; daraus folgt nicht, dass er aus Saiten besteht. Und übrigens: Auch die Kirche sagt, dass Krankheit die Schuldfähigkeit mindern kann – das passt genau dazu.`,
      detail: `**Gage:** Die Legende vom völlig „zerstörten" Gage ist übertrieben. Macmillan hat gezeigt, dass Gage später jahrelang als Postkutschenfahrer in Chile arbeitete – eine anspruchsvolle Tätigkeit. Trotzdem: Die anfängliche Veränderung war real.

**Tumor-Fall (Burns & Swerdlow 2003):** Ein beeindruckender Beleg für Abhängigkeit. Bemerkenswert ist, dass der Patient seine Impulse als falsch erkannte – er wusste um die Norm, konnte sich aber nicht beherrschen. Gerade das Wissen um Richtig und Falsch blieb erhalten.

**Christliche Moraltheologie** kannte immer verminderte Verantwortung durch Krankheit („mildernde Umstände"). Lk 12,47–48 unterscheidet, ob jemand wissentlich oder unwissentlich handelt. Die Abhängigkeit des Willens von leiblichen Bedingungen ist also kein neuer Einwand gegen den Glauben, sondern Teil seiner Seelsorgepraxis.`,
      sources: [
        { kind: 'wissenschaft', author: 'J. M. Harlow', work: 'Recovery from the passage of an iron bar through the head', ref: 'Publications of the Massachusetts Medical Society 2 (1868), 327–347', year: '1868', status: 'paraphrase', quote: `Seine Freunde sagten, er sei „nicht mehr Gage".` },
        { kind: 'bibel', work: 'Lukas', ref: '12,47–48', status: 'paraphrase', quote: `Der Knecht, der den Willen seines Herrn kennt und nicht tut, wird viel Streiche leiden müssen; wer ihn aber nicht kennt, wenig.` },
      ],
      questionsBack: [
        `Wenn mein Klavier verstimmt ist und falsch klingt – beweist das, dass die Musik im Holz entsteht?`,
        `Welche Beobachtung würdest du anders erwarten, wenn das Gehirn das Instrument des Geistes wäre?`,
      ],
      followUps: [
        {
          id: 'instrument-ad-hoc',
          objection: `Deine Instrument-Analogie ist unfalsifizierbar und ad hoc. Mit ihr kannst du jede Beobachtung wegerklären. Das ist keine Wissenschaft, das ist Immunisierung.`,
          objectionBy: 'Patricia Churchland',
          targetsPremise: 2,
          answer: `Die Analogie ist nicht ad hoc – sie stammt aus dem 4. Jahrhundert (Gregor von Nyssa) und wurde 1898 von William James präzisiert, lange vor den heutigen Daten. Und sie macht Vorhersagen, die der reine Physikalismus nicht macht: dass Bedeutungen kausal wirksam sind, dass Vernunft nicht auf Areale reduzierbar ist, und dass es Fälle geben könnte, in denen Bewusstsein trotz schwer gestörter Hirnfunktion fortbesteht. Umgekehrt „erklärt" auch die Identitätsthese jeden Befund nachträglich.`,
          detail: `Wer der Instrument-These Unfalsifizierbarkeit vorwirft, muss zugeben, dass auch die Identitätsthese durch Korrelationsdaten nicht prüfbar ist – jede Korrelation passt zu beiden. Wirklich unterscheidende Testfelder sind:

1. **Mentale Verursachung** (Psychotherapie, Placebo, Aufmerksamkeitslenkung): Der Physikalist muss sagen, nicht die Bedeutung, sondern nur ihr neuronales Korrelat wirke.
2. **Nicht-lokalisierbare Vernunftleistungen** (Penfield, Egnor).
3. **Bewusstsein unter extremen Bedingungen** (verdecktes Bewusstsein bei „vegetativen" Patienten; Nahtoderfahrungen mit überprüfbaren Wahrnehmungen – siehe den eigenen Claim dazu).

Das sind empirisch zugängliche Felder. Ein Christ kann ehrlich sagen: „Wenn sich zeigen ließe, dass Bedeutung kausal völlig irrelevant ist und jede Vernunftleistung vollständig auf Areale abbildbar ist, wäre meine Position geschwächt."`,
          questionsBack: [`Welches Experiment könnte überhaupt zwischen „das Gehirn erzeugt" und „das Gehirn ermöglicht" unterscheiden – und wurde es je durchgeführt?`],
          followUps: [
            {
              id: 'ockham',
              objection: `Ockhams Rasiermesser: Mit dem Gehirn allein kommen wir aus. Warum noch eine unsichtbare Seele dazuerfinden?`,
              objectionBy: 'Sean Carroll',
              answer: `Ockham sagt: Nimm nicht mehr Entitäten an als **nötig**. Er sagt nicht: Nimm die einfachere Theorie, auch wenn sie das Wesentliche nicht erklärt. Der Physikalismus erklärt bis heute nicht, wie aus Neuronenfeuer subjektives Erleben, Bedeutung und gültiges logisches Schließen entstehen. Eine Theorie, die das Explanandum nicht erklärt, ist nicht einfacher, sondern unvollständig.`,
              detail: `Ockhams Prinzip ist ein Tie-Breaker zwischen **gleich erklärungsstarken** Theorien. Hier ist die Erklärungskraft gerade strittig. Selbst nicht-religiöse Philosophen wie Thomas Nagel (Mind and Cosmos, 2012) oder David Chalmers halten den reduktiven Physikalismus für unzureichend. Ausführlich: A8, ‚naturalismus/ockham-unnoetige-hypothese' und ‚naturalismus/bewusstsein-materiell-erklaerbar'.`,
              sources: [
                { kind: 'fachliteratur', author: 'Thomas Nagel', work: 'Mind and Cosmos: Why the Materialist Neo-Darwinian Conception of Nature Is Almost Certainly False', year: '2012', status: 'paraphrase', note: 'Nagel ist Atheist – seine Kritik am Materialismus ist daher nicht religiös motiviert.' },
              ],
              followUps: [
                {
                  id: 'wissenschaft-wird-loesen',
                  objection: `Gib der Neurowissenschaft Zeit. Vor 150 Jahren hielt man das Leben für unerklärlich – heute kennen wir die DNA. Du betreibst „Seele der Lücken".`,
                  objectionBy: 'Patricia Churchland',
                  answer: `Das Leben war nie ein Problem anderer Art: Es ging um Mechanismen, und die fand man. Beim Bewusstsein ist das Problem begrifflich: Jede weitere Messung liefert weitere Daten in der dritten Person – das Erleben ist aber ein Datum der ersten Person. Und mein Argument beruht nicht auf einer Lücke, sondern auf etwas, das wir positiv wissen: dass wir denken, verstehen und Gründe abwägen. Eccles nannte die Erwartung, die Neurowissenschaft werde das einmal erklären, einen „Schuldschein-Materialismus".`,
                  detail: `**Analogie-Problem:** Der Vitalismus scheiterte, weil sich „Leben" als Bündel von Funktionen (Stoffwechsel, Fortpflanzung) herausstellte. Funktionen lassen sich mechanisch erklären. Subjektives Erleben ist aber keine Funktion, sondern das, was es *ist*, eine Funktion zu erleben. Ein vollständiges Schaltbild erklärt nicht, warum es sich irgendwie *anfühlt*.

**Kein Lückenbüßer:** Ein Lückenargument lautet „Wir wissen nicht, wie X geht, also Gott". Das Argument hier lautet: „Wir kennen das Wesen des Denkens aus erster Hand (Bedeutung, Wahrheitsbezug, Einheit), und genau diese Eigenschaften fehlen allen physikalischen Beschreibungen prinzipiell." Siehe A8, ‚naturalismus/lueckenbuesser-gott'.`,
                  voices: [
                    {
                      person: 'eccles',
                      role: 'als Nobelpreisträger für Neurophysiologie',
                      text: `John Eccles, der für die Aufklärung der synaptischen Übertragung den Nobelpreis erhielt, kritisierte die Haltung vieler Kollegen, alle offenen Fragen würden sich durch künftige Hirnforschung von selbst materialistisch beantworten. Er nannte das einen „promissory materialism", einen ungedeckten Wechsel auf die Zukunft, und hielt ihn für einen Glaubenssatz ohne wissenschaftliche Grundlage. Er selbst vertrat zusammen mit Karl Popper einen interaktionistischen Dualismus.`,
                      sources: [
                        { kind: 'wissenschaft', author: 'Karl R. Popper, John C. Eccles', work: 'The Self and Its Brain', year: '1977', status: 'paraphrase' },
                        { kind: 'wissenschaft', author: 'John C. Eccles', work: 'Evolution of the Brain: Creation of the Self', year: '1989', status: 'paraphrase' },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 'kausal-geschlossen',
              objection: `Eine immaterielle Seele müsste Neuronen anstoßen – also Energie zuführen. Das verletzt die Energieerhaltung. Die Physik des Alltags ist vollständig bekannt; da ist kein Platz für Geister.`,
              objectionBy: 'Sean Carroll',
              answer: `Energieerhaltung gilt für **geschlossene** Systeme – ob das Gehirn kausal geschlossen ist, ist aber genau die strittige Frage, und sie wird hier vorausgesetzt. Außerdem muss Einwirkung nicht Energie zuführen: Sie kann festlegen, welche von mehreren physikalisch offenen Möglichkeiten eintritt. Und nicht jeder christliche Denker versteht die Seele als „Anstoßkraft": In der aristotelisch-thomistischen Tradition ist sie die Form des Leibes, nicht ein zweiter Motor.`,
              detail: `- **Zirkelverdacht:** „Die Physik ist geschlossen, also gibt es keine Seele" setzt voraus, was bewiesen werden soll.
- **Information statt Energie:** Auch in der Physik gibt es Randbedingungen, die nicht durch die Gesetze selbst festgelegt sind. Ob Quantenunbestimmtheit dafür relevant ist, ist umstritten – man sollte damit vorsichtig argumentieren.
- **Der Physikalist hat sein eigenes Problem:** Wenn nur Physik wirkt, sind Gedanken als Gedanken (mit ihrer Bedeutung) kausal wirkungslos – das ist der Epiphänomenalismus, den kaum jemand akzeptieren will.

Ausführlich: A11, ‚physik/physik-kausal-geschlossen'.`,
              followUps: [
                {
                  id: 'keine-abweichung-gemessen',
                  objection: `Wenn eine Seele ins Gehirn eingreift, müssten wir Abweichungen von den bekannten Gleichungen messen. Niemand hat je so etwas gesehen.`,
                  objectionBy: 'Sean Carroll',
                  answer: `Niemand hat je die vollständige Dynamik eines lebenden menschlichen Gehirns auf der Ebene einzelner Ionenkanäle und Synapsen gemessen – das ist mit heutigen Mitteln unmöglich. Die Behauptung „keine Abweichung" ist eine Hochrechnung aus einfachen Systemen, keine Beobachtung. Und im hylemorphistischen Modell wäre ohnehin keine „Abweichung" zu erwarten, weil die Seele nicht als zusätzliche Kraft neben den physikalischen Kräften wirkt.`,
                  detail: `Hier ist Ehrlichkeit wichtig: Christen sollten nicht behaupten, man habe Seeleneinwirkung gemessen. Die richtige Aussage ist bescheidener: Die behauptete vollständige physikalische Erklärung des Gehirns liegt **nicht** vor; sie ist ein Programm. Ob der Geist eine eigene Ursache, eine Form oder ein Informationsprinzip ist, ist innerhalb der christlichen Philosophie offen (Swinburne: Substanzdualismus; Feser/Egnor: Hylemorphismus).`,
                  voices: [
                    {
                      person: 'feser',
                      role: 'als thomistischer Philosoph',
                      text: `Edward Feser weist darauf hin, dass die Einwände gegen „Geister in der Maschine" einen kartesischen Dualismus angreifen, den die aristotelisch-thomistische Tradition nie vertrat. Für sie ist die Seele die substantielle Form des lebenden Leibes – das, was diese Materie zu einem lebendigen, denkenden Menschen macht. Die Vernunft sei dabei eine Fähigkeit, die zwar auf Sinnesdaten und Gehirn angewiesen ist, deren Akte (abstrakte Begriffe, die Allgemeines erfassen) aber nicht selbst körperlich sein können.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Edward Feser', work: 'Philosophy of Mind: A Beginner\'s Guide', year: '2006', status: 'paraphrase' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'demenz-wo-ist-seele',
          objection: `Bei Alzheimer verschwindet ein Mensch Stück für Stück – Erinnerungen, Persönlichkeit, am Ende erkennt er seine Kinder nicht mehr. Wenn es eine unabhängige Seele gibt, warum ist sie dann nicht unversehrt da?`,
          objectionBy: 'Sam Harris',
          answer: `Weil die Seele in diesem Leben durch das Gehirn wirkt und sich ohne funktionierendes Instrument nicht äußern kann – verborgen ist nicht dasselbe wie vernichtet. Christen hoffen nicht auf eine „reparierte Seele" in diesem Leben, sondern auf die Auferstehung des ganzen Menschen. Und ethisch ist das entscheidend: Die Würde eines Demenzkranken hängt nicht an seinen kognitiven Leistungen – er bleibt Ebenbild Gottes.`,
          detail: `**Pastoral:** Wer diesen Einwand bringt, hat oft einen Angehörigen mit Demenz erlebt. Zuerst Mitgefühl, dann Argument.

**Logisch:** Der Einwand zeigt Abhängigkeit der *Äußerung*, nicht Nicht-Existenz des Subjekts. Dass jemand nicht mehr sprechen kann, beweist nicht, dass niemand mehr da ist. Die Entdeckung verdeckten Bewusstseins bei Patienten, die als „vegetativ" galten (Owen u. a. 2006), mahnt zur Vorsicht beim Schluss von fehlender Äußerung auf fehlendes Subjekt.

**Ethisch:** Ein rein funktionales Personverständnis („Person ist, wer Bewusstsein und Erinnerung hat") führt bei Demenz zu gefährlichen Folgerungen. Das christliche Menschenbild schützt den Schwächsten.`,
          followUps: [
            {
              id: 'luziditaet-anekdoten',
              objection: `Ich vermute, du kommst jetzt mit „terminaler Luzidität" – Geschichten von Pflegekräften über plötzlich klare Sterbende. Das sind Anekdoten, keine Wissenschaft.`,
              objectionBy: 'Michael Shermer',
              answer: `Einverstanden: Die Datenlage besteht überwiegend aus Fallberichten, und ich baue mein Argument nicht darauf. Bemerkenswert ist nur, dass die Berichte zahlreich genug sind, um inzwischen systematisch erforscht zu werden – eine Arbeitsgruppe um den Anästhesisten George Mashour sprach 2019 von einem möglichen „Paradigmenwechsel" für das Verständnis schwerer Demenz. Wenn sich solche Phasen bei massiv geschädigtem Gewebe bestätigen, wäre das für die Produktionsthese schwer zu deuten.`,
              sources: [
                { kind: 'wissenschaft', author: 'G. A. Mashour, L. Frank, A. Batthyany u. a.', work: 'Paradoxical lucidity: A potential paradigm shift for the neurobiology and treatment of severe dementias', ref: 'Alzheimer\'s & Dementia 15 (2019), 1107–1114', year: '2019', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'keine-evidenz-fuer-seele',
                  objection: `Dann gib doch zu: Du hast keine Evidenz für eine Seele. Alles, was du hast, ist „man kann es nicht ausschließen".`,
                  objectionBy: 'Michael Shermer',
                  answer: `Nein. Die wichtigste Evidenz ist der Geist selbst: Ich erlebe, ich verstehe Bedeutungen, ich erfasse, dass aus „alle Menschen sind sterblich" und „Sokrates ist ein Mensch" etwas *folgt*. Diese Eigenschaften – Subjektivität, Intentionalität, rationale Einsicht, Einheit des Bewusstseins – kommen in keiner physikalischen Beschreibung vor. Dazu kommt die belegte Wirksamkeit von Bedeutungen auf das Gehirn. Das ist keine Lücke, sondern positive Evidenz aus dem, was wir am sichersten wissen.`,
                  detail: `Hier lohnt es sich, das Gespräch auf die philosophische Ebene zu führen (A8, ‚naturalismus/bewusstsein-materiell-erklaerbar'). Kurz: Wer die Existenz von Gedanken mit Bedeutung bestreitet, bestreitet die Voraussetzung jedes Arguments – auch seines eigenen.`,
                  questionsBack: [`Was genau ist der Gedanke „2 + 2 = 4" – welche Masse, Ladung oder Position hat er?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kein-geist-ohne-gehirn',
      objection: `Es gibt keinen einzigen Nachweis, dass ein Geist ohne Gehirn existiert. Jedes Bewusstsein, das wir je beobachtet haben, steckt in einem Nervensystem. Warum sollte ich an etwas glauben, für das es null Beispiele gibt?`,
      objectionBy: 'Sean Carroll',
      targetsPremise: 2,
      answer: `In diesem Leben beobachten wir Geist nur verkörpert – genau das lehrt auch das Christentum, bis zum Tod. Dass wir im Labor keine körperlose Seele vorführen können, ist also zu erwarten und kein Gegenargument. Die Frage ist, ob die Eigenschaften des Geistes sich auf die des Gehirns reduzieren lassen; das ist eine Frage der Analyse, nicht der Vorführung. Und es gibt durchaus Befunde, die über die reine Korrelation hinausweisen, etwa Nahtoderfahrungen mit überprüfbaren Wahrnehmungen – wenn auch umstritten.`,
      detail: `Das Argument hat die Form: „Alle beobachteten A sind B, also ist A nichts als B." Auch alle beobachteten Sinfonien wurden auf Instrumenten gespielt – die Sinfonie ist trotzdem nicht das Instrument. Christen behaupten nicht, man könne Seelen messen; sie behaupten, dass die Person mehr ist als ihr Gewebe und den Tod überdauert, weil Gott sie erhält.`,
      followUps: [
        {
          id: 'nte-schon-erklaert',
          objection: `Nahtoderfahrungen? Längst erklärt: Sauerstoffmangel, REM-Intrusion, ein Gamma-Ausbruch im sterbenden Gehirn.`,
          objectionBy: 'Susan Blackmore',
          answer: `Es gibt mehrere Hypothesen – keine davon erklärt alle Daten, und die Forschung ist offen. Eine prospektive Studie im Lancet (van Lommel u. a. 2001) fand, dass Nahtoderfahrungen nicht mit Medikamenten, Dauer des Herzstillstands oder Sauerstoffmangel zusammenhingen: Alle Patienten hatten einen Herzstillstand, nur eine Minderheit eine NTE. Ich stütze aber meine Position nicht darauf; Details im eigenen Claim zu Nahtoderfahrungen.`,
          followUps: [
            {
              id: 'verifizierte-faelle-anekdoten',
              objection: `Und die angeblich verifizierten Wahrnehmungen sind nachträglich ausgeschmückte Anekdoten.`,
              objectionBy: 'Susan Blackmore',
              answer: `Viele ja – das gebe ich zu, und ich würde zum Beispiel den Fall Pam Reynolds nicht als Beweis anführen. Aber in der prospektiven AWARE-Studie (Parnia u. a. 2014) wurde bei einem Patienten eine Wahrnehmung von Geräuschen dokumentiert, die sich zeitlich auf etwa drei Minuten in den Herzstillstand hinein zuordnen ließ. Ein Fall beweist nichts Endgültiges – aber er zeigt, dass die Frage empirisch offen ist.`,
            },
          ],
        },
        {
          id: 'narkose',
          objection: `Das ehrlichste Experiment ist die Narkose: Propofol rein, und das Ich ist weg. Kein Licht, kein Tunnel, nichts. Wo ist da die Seele?`,
          objectionBy: 'Sam Harris',
          answer: `Narkose zeigt, dass bestimmte Hirnzustände für das verkörperte, erinnerbare Bewusstsein in diesem Leben nötig sind – das bestreite ich nicht. Aber „ich erinnere mich an nichts" ist nicht dasselbe wie „es war niemand da": Narkosemittel unterdrücken auch die Gedächtnisbildung. Wie Narkose Bewusstsein genau ausschaltet, ist zudem bis heute nicht vollständig verstanden. Und die Entdeckung verdeckten Bewusstseins bei „vegetativen" Patienten zeigt, wie riskant der Schluss von fehlender Äußerung auf fehlendes Subjekt ist.`,
          followUps: [
            {
              id: 'owen-zeigt-hirnaktivitaet',
              objection: `Owen beweist doch gerade meine These: Bewusstsein ist Hirnaktivität – man sieht es im Scanner leuchten!`,
              objectionBy: 'Patricia Churchland',
              targetsPremise: 3,
              answer: `Owen zeigt zweierlei: dass bewusstes Wollen mit Hirnaktivität korreliert – geschenkt – und dass ein Mensch innerlich anwesend sein kann, obwohl alle äußeren Zeichen fehlen. Der Scanner zeigt die Aktivität des Instruments, wenn die Person es benutzt. Ob die Aktivität das Bewusstsein *ist* oder sein *Werkzeug*, entscheidet die Messung nicht – das ist genau die Unterbestimmtheit, von der ich spreche.`,
            },
          ],
        },
      ],
    },
    {
      id: 'keine-mentale-verursachung',
      objection: `Was du „Entscheidung" oder „Gedanke" nennst, ist Neurochemie – vorbestimmt durch Gene, Hormone, Kindheit und das, was vor fünf Minuten in deinem Gehirn passiert ist. Mentale Verursachung ist eine Illusion.`,
      objectionBy: 'Robert Sapolsky',
      answer: `Dann erklär mir die Daten zur Psychotherapie: Wenn ein Zwangspatient in der Verhaltenstherapie lernt, seine Gedanken anders zu bewerten, verändert sich messbar der Stoffwechsel im Nucleus caudatus (Schwartz u. a. 1996). Placebo, Aufmerksamkeitslenkung und bewusste Emotionsregulation verändern Hirnaktivität. Hier wirkt eine *Bedeutung* auf das Gehirn. Wenn mentale Inhalte kausal nichts tun, ist das ein Rätsel; wenn der Geist durch das Gehirn wirkt, ist es zu erwarten.`,
      detail: `Die philosophische Seite (Determinismus) behandelt A9, ‚willensfreiheit/freier-wille-illusion'. Hier geht es um den empirischen Punkt: Die Neurowissenschaft selbst kennt „Top-down"-Effekte. Jeffrey Schwartz spricht von „selbstgesteuerter Neuroplastizität" – das Gehirn wird durch die Art verändert, wie der Patient seine Aufmerksamkeit richtet.`,
      sources: [
        { kind: 'fachliteratur', author: 'Jeffrey M. Schwartz, Sharon Begley', work: 'The Mind and the Brain: Neuroplasticity and the Power of Mental Force', year: '2002', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'worte-sind-schallwellen',
          objection: `Psychotherapie ist auch nur Gehirn, das auf Gehirn wirkt. Worte sind Schallwellen, die Neuronen verändern. Da braucht es keine „Bedeutung" als Ursache.`,
          objectionBy: 'Robert Sapolsky',
          answer: `Dann wirken Worte nur als Schallwellen – aber warum hilft dann nur die Therapie, die der Patient *versteht*, und nicht dieselben Schallwellen in einer fremden Sprache? Die Wirkung hängt am Inhalt, nicht an der Physik der Laute. Genau diese semantische Wirksamkeit muss der Physikalismus erklären, und das ist ihm bisher nicht gelungen.`,
          followUps: [
            {
              id: 'buch-als-reiz',
              objection: `Kein Widerspruch: Mein Buch „Determined" ist ein Reiz, der Gehirne deterministisch umprogrammiert. Ich muss nicht frei sein, um dich zu überzeugen.`,
              objectionBy: 'Robert Sapolsky',
              answer: `Dann ist dein Buch wirksam – aber warum sollte ich es für *wahr* halten? Wenn jede Überzeugung, deine eingeschlossen, vollständig durch nicht-rationale Ursachen festgelegt ist, gibt es keinen Unterschied mehr zwischen „überzeugt, weil gut begründet" und „überzeugt, weil so verdrahtet". C. S. Lewis hat das das Argument aus der Vernunft genannt: Eine Theorie, die alle Gedanken auf vernunftlose Ursachen zurückführt, untergräbt die Gründe, aus denen man sie glauben soll.`,
              detail: `Das Argument verlangt nicht, dass jede Überzeugung frei gewählt ist. Es verlangt, dass es einen Unterschied gibt zwischen Ursachen und Gründen – dass mein Glaube an eine Schlussfolgerung *durch* die Einsicht in die Gültigkeit des Schlusses zustande kommt. Ausführlich: A8, ‚naturalismus/vernunft-durch-evolution' (Lewis, Plantinga).`,
              voices: [
                {
                  person: 'cs-lewis',
                  role: 'als Begründer des „Arguments aus der Vernunft"',
                  text: `Lewis argumentiert in „Wunder" (Kap. 3), dass jede Theorie, nach der unser Denken vollständig das Ergebnis vernunftloser Ursachen ist, sich selbst die Grundlage entzieht: Wir hätten dann keinen Grund mehr, ihr zu vertrauen, denn auch sie wäre nur ein Produkt solcher Ursachen. Vernünftiges Schließen setzt voraus, dass Einsicht in logische Zusammenhänge unser Urteil bestimmen kann.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles (Wunder)', ref: 'Kap. 3 (überarbeitete Fassung 1960)', year: '1947/1960', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dualismus-veraltet',
      objection: `Dualismus ist Descartes' Fehler – Ryles „Gespenst in der Maschine". Kein ernsthafter Neurowissenschaftler glaubt heute noch an eine Seele.`,
      objectionBy: 'Daniel Dennett',
      answer: `Erstens ist das biblisch-patristische Menschenbild nicht kartesisch: Die Väter lehrten eine Einheit von Seele und Leib, keine Maschine mit Gespenst. Zweitens stimmt „kein ernsthafter Forscher" nicht: Der Nobelpreisträger John Eccles vertrat einen Dualismus, Wilder Penfield kam am Ende seiner Laufbahn dazu, und der Nobelpreisträger Roger Sperry lehnte den reduktiven Materialismus ausdrücklich ab. Drittens entscheidet keine Mehrheit über Wahrheit.`,
      detail: `- **Ryles Spott** trifft eine Karikatur. Die christliche Tradition kennt verschiedene Modelle: Substanzdualismus (Swinburne), ganzheitlicher Dualismus (Moreland, John Cooper), Hylemorphismus (Thomas von Aquin, Feser, Egnor).
- **Sperry** (Nobelpreis 1981 für die Split-Brain-Forschung) beschrieb Bewusstsein als emergente Eigenschaft mit kausaler Wirksamkeit von oben nach unten – „Mentalismus ja, Dualismus nein". Er ist also kein Dualist, aber auch kein Reduktionist.
- In der Philosophie des Geistes vertreten auch nicht-religiöse Denker (Chalmers, Nagel) anti-reduktionistische Positionen.`,
      sources: [
        { kind: 'wissenschaft', author: 'Roger W. Sperry', work: 'Mind-brain interaction: Mentalism, yes; dualism, no', ref: 'Neuroscience 5 (1980), 195–206', year: '1980', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'penfield-veraltet',
          objection: `Penfield und Eccles – das sind die 1970er. Die moderne Neurowissenschaft hat sie längst überholt.`,
          objectionBy: 'Daniel Dennett',
          answer: `Ihr Kernbefund ist nicht widerlegt: Elektrische Reizung erzeugt Empfindungen, Bewegungen und Erinnerungsfragmente, aber keine begründeten Urteile oder abstrakten Gedankengänge. Neuere Studien haben das Bild verfeinert – es lassen sich auch Bewegungsdrang und Absichtsgefühle auslösen –, aber ein Argument, eine Überzeugung aus Gründen oder das Ich selbst hat noch niemand per Elektrode erzeugt.`,
          followUps: [
            {
              id: 'desmurget-wille',
              objection: `Falsch: Desmurget und Kollegen haben 2009 in „Science" gezeigt, dass Stimulation des Parietallappens den bewussten Willen erzeugt, sich zu bewegen – manche Patienten glaubten sogar, sie hätten sich bewegt. Penfield ist widerlegt.`,
              objectionBy: 'Patricia Churchland',
              answer: `Das ist ein guter Punkt, und ich räume ihn ein: Ein *Drang*, eine Absichtsempfindung, lässt sich auslösen – so wie man Hunger oder Juckreiz auslösen kann. Die christliche Tradition kennt solche leiblich verursachten Regungen (die Väter sprechen von „Leidenschaften"). Aber ein Drang ist kein Urteil: Kein Stimulationsexperiment hat jemanden dazu gebracht, aus Gründen etwas zu glauben, einen Beweis zu verstehen oder eine Lebensentscheidung zu treffen. Penfields Kernbeobachtung über Vernunft und Wille im vollen Sinn bleibt bestehen.`,
              sources: [
                { kind: 'wissenschaft', author: 'M. Desmurget, K. T. Reilly, N. Richard u. a.', work: 'Movement intention after parietal cortex stimulation in humans', ref: 'Science 324 (2009), 811–813', year: '2009', status: 'paraphrase', quote: `Stimulation des rechten inferioren Parietallappens löste bei wachen Patienten ein bewusstes Bedürfnis aus, eine Bewegung auszuführen; bei stärkerer Reizung glaubten sie, sich bewegt zu haben, obwohl keine Bewegung auftrat.` },
              ],
              followUps: [
                {
                  id: 'nur-frage-der-praezision',
                  objection: `Das ist nur eine Frage der Elektrodenpräzision. In zwanzig Jahren erzeugen wir auch Überzeugungen.`,
                  objectionBy: 'Patricia Churchland',
                  answer: `Wieder ein Wechsel auf die Zukunft. Aber angenommen, es gelänge: Eine per Elektrode erzeugte Überzeugung wäre gerade *keine* Überzeugung aus Gründen – sie wäre verursacht, nicht begründet. Damit würde das Experiment den Unterschied zwischen Ursachen und Gründen nicht beseitigen, sondern sichtbar machen. Und dass man ein Instrument von außen manipulieren kann, beweist nicht, dass es keinen Spieler gibt.`,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches Experiment könnte zwischen „das Gehirn erzeugt den Geist" und „das Gehirn ist das Instrument des Geistes" unterscheiden – und wurde es durchgeführt?`,
    `Wenn ein Radio kaputt ist und rauscht – beweist das, dass die Musik im Radio entsteht?`,
    `Wenn deine Überzeugung, dass der Geist nur das Gehirn ist, vollständig neurochemisch verursacht ist – warum sollte ich sie für wahr statt nur für verursacht halten?`,
    `Warum hilft Psychotherapie nur, wenn der Patient den Inhalt versteht – wenn doch nur Schallwellen wirken?`,
    `Hängt die Würde eines Demenzkranken an seinem Gehirnzustand?`,
  ],
  avoid: [
    `„Es gibt Menschen, die ganz ohne Gehirn normal leben." – Die berühmten Hydrozephalus-Fälle (z. B. Feuillet u. a., Lancet 2007) hatten stark zusammengedrücktes, aber vorhandenes Hirngewebe. Wer „ohne Gehirn" sagt, verliert sofort.`,
    `„Wir nutzen nur 10 % unseres Gehirns." – Ein Mythos, den jeder Neurowissenschaftler widerlegt.`,
    `„Die Seele wiegt 21 Gramm." – Die Messungen von Duncan MacDougall (1907) an sechs Sterbenden sind wissenschaftlich wertlos.`,
    `Nahtoderfahrungen oder Bestseller wie „Blick in die Ewigkeit" (Eben Alexander) als Hauptbeweis für die Seele anführen – die Datenlage ist umstritten.`,
  ],
  concessions: [
    `Hirnschäden, Tumore und Demenz können Persönlichkeit, Moral und Gedächtnis tiefgreifend verändern. Der Geist ist in diesem Leben auf ein funktionierendes Gehirn angewiesen.`,
    `Die Mehrheit der Neurowissenschaftler arbeitet mit einer physikalistischen Grundannahme; Dualismus ist in der Fachwelt eine Minderheitenposition.`,
    `Wie genau Seele und Leib zusammenwirken, ist auch für christliche Philosophen ein offenes Problem; es gibt verschiedene Modelle, kein Dogma über den Mechanismus.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Sharon Dirckx', work: 'Am I Just My Brain?', year: '2019', status: 'paraphrase', note: 'Allgemeinverständlich, von einer promovierten Hirnforscherin (Bildgebung).' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Are We Bodies or Souls?', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'The Soul: How We Know It\'s Real and Why It Matters', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael Egnor, Denyse O\'Leary', work: 'The Immortal Mind', year: '2025', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Raymond Tallis', work: 'Aping Mankind: Neuromania, Darwinitis and the Misrepresentation of Humanity', year: '2011', status: 'paraphrase', note: 'Tallis ist Atheist und Neurologe – seine Kritik an der „Neuromanie" ist daher besonders wertvoll.' },
  ],
  difficulty: 2,
  tags: ['Neurowissenschaft', 'Leib-Seele-Problem', 'Phineas Gage', 'Demenz', 'Penfield', 'Dualismus'],
  related: [
    'naturalismus/bewusstsein-materiell-erklaerbar',
    'naturalismus/nur-materie',
    'naturalismus/vernunft-durch-evolution',
    'naturalismus/ockham-unnoetige-hypothese',
    'physik/physik-kausal-geschlossen',
    'willensfreiheit/freier-wille-illusion',
    'neurowissenschaften/nahtoderfahrungen-halluzination',
    'neurowissenschaften/split-brain',
    'informatik-ki/ki-wird-bewusst',
  ],
};

export default claim;
