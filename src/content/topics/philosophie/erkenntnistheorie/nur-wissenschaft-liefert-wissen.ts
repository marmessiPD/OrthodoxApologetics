import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nur-wissenschaft-liefert-wissen',
  title: `„Nur die Naturwissenschaft liefert echtes Wissen (Szientismus)."`,
  proponents: [
    { name: 'Alex Rosenberg', role: 'Wissenschaftsphilosoph, Duke University', work: 'The Atheist\'s Guide to Reality (2011) – bekennt sich ausdrücklich zum „Szientismus"' },
    { name: 'Peter Atkins', role: 'Physikochemiker, Oxford', work: 'Debatte mit W. L. Craig (1998); On Being (2011)' },
    { name: 'Stephen Hawking & Leonard Mlodinow', role: 'Physiker', work: 'The Grand Design (2010), Kap. 1: „Philosophy is dead"' },
    { name: 'Lawrence Krauss', role: 'Kosmologe', work: 'Interviews und Debatten (u. a. The Atlantic, 2012)' },
  ],
  steelman: `Die Naturwissenschaft ist die einzige Erkenntnismethode, die sich selbst korrigiert, weltweit Konsens erzeugt und messbare Erfolge vorweisen kann: Impfstoffe, Raumfahrt, Computer, die Entschlüsselung des Genoms. Philosophie und Theologie streiten dagegen seit 2500 Jahren über dieselben Fragen, ohne je eine zu entscheiden. Hawking und Mlodinow erklären deshalb: „Die Philosophie ist tot"; die Wissenschaftler trügen heute die Fackel der Entdeckung. Alex Rosenberg nennt seine Position offen „Szientismus": die Überzeugung, dass die Methoden der Wissenschaft der einzige verlässliche Weg zu Wissen über irgendetwas sind. Was sich nicht wissenschaftlich prüfen lässt – Gott, Seele, objektive Werte –, ist bestenfalls Meinung, schlimmstenfalls Unsinn.`,
  biblical: {
    summary: `Die Bibel schätzt die Erforschung der Natur – „Groß sind die Werke des HERRN; wer ihrer achtet, der hat eitel Lust daran" (Ps 111,2) – kennt aber viele Arten von Erkenntnis: historische (Lk 1,1–4), moralische (Röm 2,14–15), weisheitliche (Spr 1,7) und vor allem die personale Erkenntnis Gottes: „Das ist das ewige Leben, daß sie dich … erkennen" (Joh 17,3). Erkenntnis ist in der Schrift nicht auf Messbares beschränkt.`,
    detail: `- **Ps 111,2:** James Clerk Maxwell ließ diesen Vers (lateinisch *Magna opera Domini*) über dem Eingang des alten Cavendish-Laboratoriums in Cambridge anbringen – ein Sinnbild dafür, dass Naturforschung und Glaube zusammengehören.
- **Joh 17,3:** Das griechische *ginōskein* bezeichnet ein personales Erkennen, wie man einen Menschen kennt – eine Erkenntnisform, die kein Experiment ersetzt.
- **Röm 2,14–15:** Das Gesetz ist den Heiden „in ihr Herz geschrieben" – moralisches Wissen, das nicht aus Messungen stammt.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '111,2', quote: `Groß sind die Werke des HERRN; wer ihrer achtet, der hat eitel Lust daran.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '17,3', quote: `Das ist aber das ewige Leben, daß sie dich, der du allein wahrer Gott bist, und den du gesandt hast, Jesum Christum, erkennen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '2,14–15', status: 'paraphrase', quote: 'Die Heiden, die das Gesetz nicht haben, zeigen, dass des Gesetzes Werk in ihr Herz geschrieben ist; ihr Gewissen bezeugt es.' },
    ],
  },
  church: {
    summary: `Die Kirche von Alexandrien hat die Wissenschaften ihrer Zeit nicht gefürchtet, sondern gepflegt. Origenes ließ seine Schüler Geometrie, Astronomie und Naturkunde studieren, bevor sie zur Theologie kamen, und verglich die Nutzung griechischer Gelehrsamkeit mit den Israeliten, die beim Auszug aus Ägypten das Gold der Ägypter mitnahmen, um daraus Geräte für das Heiligtum zu machen. Der hl. Basilius verarbeitete in seinen Predigten über das Sechstagewerk die Naturkunde seiner Zeit. Zugleich wussten die Väter, dass die höchste Erkenntnis – die Gotteserkenntnis – nicht durch Messung, sondern durch Reinheit des Herzens, Gebet und Offenbarung geschenkt wird (Mt 5,8).`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Brief an Gregor (den Wundertäter)', status: 'paraphrase', quote: 'Die Wissenschaften und die Philosophie der Griechen sollen wie das Gold der Ägypter im Dienst der Gotteserkenntnis gebraucht werden.' },
      { kind: 'kirchenvater', author: 'Gregor der Wundertäter', work: 'Dankrede an Origenes', ref: '8', status: 'paraphrase', quote: 'Origenes führte seine Schüler durch Logik, Naturkunde, Geometrie und Astronomie zur Ethik und Theologie.' },
    ],
  },
  opposingView: {
    summary: `„Szientismus" bezeichnet die These, dass nur die Naturwissenschaften (oder ihre Methoden) echtes Wissen liefern. Die meisten Wissenschaftsphilosophen lehnen die starke Fassung ab. Ihr historischer Vorläufer, der logische Positivismus des Wiener Kreises und A. J. Ayers („Language, Truth and Logic", 1936), wonach nur empirisch verifizierbare Sätze sinnvoll sind, gilt seit den 1960er-Jahren als gescheitert – vor allem, weil das Verifikationsprinzip sich selbst nicht verifizieren lässt. Ayer räumte später selbst ein, dass „fast alles daran falsch" gewesen sei. Auch der agnostische Nobelpreisträger Peter Medawar betonte die „Grenzen der Wissenschaft": Fragen nach Ursprung, Sinn und Ziel könne sie nicht beantworten.`,
    sources: [
      { kind: 'gegner', author: 'Alex Rosenberg', work: 'The Atheist\'s Guide to Reality', year: '2011', ref: 'Kap. 1', status: 'paraphrase', quote: 'Szientismus ist die Überzeugung, dass die Methoden der Wissenschaft die einzig verlässlichen Wege zu Wissen über irgendetwas sind.' },
      { kind: 'gegner', author: 'Stephen Hawking & Leonard Mlodinow', work: 'The Grand Design', year: '2010', ref: 'Kap. 1', quote: `Traditionally these are questions for philosophy, but philosophy is dead. Philosophy has not kept up with modern developments in science, particularly physics.`, status: 'verbatim' },
      { kind: 'fachliteratur', author: 'A. J. Ayer', work: 'Gespräch mit Bryan Magee über den logischen Positivismus, in: Bryan Magee, Men of Ideas (BBC-Fernsehreihe und Buch, London)', year: '1978', ref: 'S. 131', status: 'paraphrase', quote: 'Auf die Frage nach den Hauptmängeln des logischen Positivismus antwortete Ayer, der wichtigste Mangel sei wohl gewesen, dass „fast alles daran falsch" war.', original: '„… nearly all of it was false."', note: 'Quellenprüfung Nov. 2026: Fundstelle (Magee, Men of Ideas, 1978, S. 131) und die Kernwendung „nearly all of it was false" sind in der Fachliteratur belegt (u. a. Royal Institute of Philosophy Supplement zu Ayers Language, Truth and Logic, Cambridge University Press). Den vollständigen Satz nicht als wörtlich ausgeben; Ayer fügte hinzu, er halte am allgemeinen Ansatz weiterhin fest.' },
      { kind: 'fachliteratur', author: 'Peter B. Medawar', work: 'The Limits of Science', year: '1984', status: 'paraphrase', quote: 'Es gibt Fragen – nach dem Ursprung, dem Sinn und dem Ziel aller Dinge –, die die Wissenschaft nicht beantworten kann.', note: 'Medawar war Nobelpreisträger (1960) und kein Christ.' },
    ],
  },
  quickAnswer: `Der Satz „Nur die Naturwissenschaft liefert Wissen" ist selbst kein Ergebnis der Naturwissenschaft – kein Experiment kann ihn beweisen. Nach seinem eigenen Maßstab wäre er also kein Wissen; er widerlegt sich selbst. Zudem setzt die Wissenschaft vieles voraus, was sie nicht beweisen kann: Logik, Mathematik, die Verlässlichkeit unserer Sinne, die Gleichförmigkeit der Natur und die Ehrlichkeit der Forscher. Und wir wissen vieles ohne Labor: dass Caesar ermordet wurde, dass andere Menschen Gefühle haben, dass es falsch ist, ein Kind zum Spaß zu quälen. Die Wissenschaft ist großartig – aber sie ist nicht die einzige Tür zur Wirklichkeit.`,
  keyPoints: [
    `**Selbstwiderlegung:** „Nur wissenschaftlich prüfbare Aussagen sind Wissen" ist selbst nicht wissenschaftlich prüfbar.`,
    `**Voraussetzungen der Wissenschaft:** Logik, Mathematik, Verlässlichkeit der Sinne und der Vernunft, Gleichförmigkeit der Natur, Ethik der Forschung – alles vorausgesetzt, nicht bewiesen.`,
    `**Andere Wissensformen:** Geschichte, Logik, Mathematik, Moral, Ästhetik, das Wissen um das eigene Erleben und um andere Personen.`,
    `**Der logische Positivismus ist gescheitert** – an genau diesem Problem. Selbst A. J. Ayer räumte später ein, fast alles daran sei falsch gewesen.`,
    `**„Die Philosophie ist tot" ist Philosophie:** Hawkings Satz ist eine philosophische These über die Erkenntnis – und sein Buch vertritt eine eigene Philosophie („modellabhängiger Realismus").`,
    `**Christen lieben die Wissenschaft:** Von der Katechetenschule Alexandriens bis zu Maxwell und Lemaître – Ps 111,2 stand über dem Cavendish-Laboratorium.`,
  ],
  argument: {
    name: 'Die Selbstwiderlegung des Szientismus',
    summary: 'Szientismus kann nach seinem eigenen Maßstab nicht gewusst werden.',
    premises: [
      {
        text: 'P1: Wenn der Szientismus wahr ist, dann ist nur das Wissen, was durch die Methoden der Naturwissenschaft gestützt wird.',
        support: `Das ist die Definition, wie sie Rosenberg oder Atkins vertreten.`,
      },
      {
        text: 'P2: Der Satz „Nur das ist Wissen, was durch die Methoden der Naturwissenschaft gestützt wird" wird selbst nicht durch die Methoden der Naturwissenschaft gestützt.',
        support: `Es gibt kein Experiment, keine Messung und keine Beobachtung, die zeigen könnte, dass es keine anderen Wissensquellen gibt. Der Satz ist eine philosophische These über Erkenntnis.`,
        sources: [
          { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'Scientism and Secularism: Learning to Respond to a Dangerous Ideology', year: '2018', status: 'paraphrase', quote: 'Starker Szientismus ist selbstwiderlegend, weil er selbst keine wissenschaftliche Aussage ist.' },
        ],
      },
      {
        text: 'P3: Die Naturwissenschaft setzt ihrerseits Wissen voraus, das sie nicht selbst begründen kann (Logik, Mathematik, Verlässlichkeit der Sinne, Gleichförmigkeit der Natur, Ehrlichkeit).',
        support: `Ohne diese Voraussetzungen könnte kein Experiment ausgewertet werden. Wer sie leugnet, zerstört die Wissenschaft; wer sie anerkennt, gibt zu, dass es nichtwissenschaftliches Wissen gibt.`,
      },
    ],
    conclusion: 'Also ist der Szientismus selbstwiderlegend; es gibt echtes Wissen jenseits der Naturwissenschaft – und damit ist die Gottesfrage nicht schon dadurch entschieden, dass Gott kein Laborobjekt ist.',
  },
  voices: [
    {
      person: 'hutchinson',
      role: 'als Kernphysiker am MIT',
      text: `Hutchinson, selbst führender Fusionsforscher, unterscheidet zwischen der Wissenschaft, die er liebt, und dem Szientismus, den er für einen Irrtum hält. Die Wissenschaft sei so erfolgreich, gerade *weil* sie sich auf einen eng begrenzten Bereich beschränke: reproduzierbare, messbare Phänomene, die sich klar beschreiben lassen. Wer daraus schließe, alles andere sei kein Wissen, verwechsle die Stärke einer Methode mit ihrer Reichweite. Geschichte, Ethik, Recht und Glaube stützen sich auf andere, ebenso rationale Weisen, Wissen zu gewinnen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Ian H. Hutchinson', work: 'Monopolizing Knowledge: A Scientist Refutes Religion-Denying, Reason-Destroying Scientism', year: '2011', status: 'paraphrase', quote: 'Die Wissenschaft verdankt ihren Erfolg ihrer Begrenzung auf reproduzierbare, klar beschreibbare Phänomene; der Szientismus verwechselt Stärke und Reichweite.' },
      ],
    },
    {
      person: 'moreland',
      role: 'als Philosoph und Kritiker des Szientismus',
      text: `Moreland unterscheidet starken Szientismus (nur Wissenschaft liefert Wissen) und schwachen Szientismus (Wissenschaft ist die bei Weitem beste Wissensquelle). Den starken hält er für selbstwiderlegend; den schwachen für unbegründet, weil schon die Frage, welche Erkenntnisquelle die beste ist, eine philosophische Frage sei. Zudem zeigt er, dass der Szientismus nicht neutral ist: Er drängt Glaube, Moral und Sinnfragen aus dem öffentlichen Raum in das bloß Private – mit erheblichen Folgen für Bildung und Kultur.`,
      sources: [
        { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'Scientism and Secularism', year: '2018', status: 'paraphrase', quote: 'Starker und schwacher Szientismus; beide scheitern.' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker',
      text: `Lennox illustriert die Grenzen der Wissenschaft gern mit dem Bild eines Kuchens: Physiker, Chemiker und Biologen können seine Zusammensetzung bis ins Letzte analysieren – aber *warum* Tante Mathilde ihn gebacken hat, können sie nicht sagen; das muss sie selbst offenbaren. Ebenso könne die Wissenschaft beschreiben, wie das Universum funktioniert, aber nicht, warum es existiert und wozu. Lennox verweist zudem auf Peter Medawar, der vor der Verwechslung von wissenschaftlichem und allgemeinem Wissen warnte.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'Can Science Explain Everything?', year: '2019', status: 'paraphrase', quote: 'Die Grenzen der Wissenschaft: Sie erklärt das Wie, nicht das Warum und Wozu; Gleichnis vom Kuchen.' },
      ],
    },
    {
      person: 'origenes',
      role: 'als Lehrer an der Katechetenschule von Alexandrien',
      text: `Origenes baute in Alexandrien und später in Caesarea einen Lehrplan auf, der mit Logik, Naturkunde, Geometrie und Astronomie begann und über die Ethik zur Theologie führte – so berichtet sein Schüler Gregor der Wundertäter. Die Wissenschaften galten ihm als wertvolle Vorbereitung und Dienerinnen, nicht als Gegnerinnen des Glaubens. Zugleich war für ihn klar, dass sie nicht die letzte Erkenntnis liefern: Die Erkenntnis Gottes übersteigt das Messbare und wird dem geschenkt, der mit reinem Herzen sucht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor der Wundertäter', work: 'Dankrede an Origenes', ref: '7–15', status: 'paraphrase', quote: 'Origenes\' Lehrgang von den Wissenschaften über die Ethik zur Theologie.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'nur-wissenschaft-verlaesslich',
      objection: `„Nur die Wissenschaft liefert verlässliches Wissen. Alles andere – Philosophie, Theologie, Ethik – ist Meinung."`,
      objectionBy: 'Alex Rosenberg / Peter Atkins',
      targetsPremise: 2,
      answer: `Ist dieser Satz selbst ein Ergebnis der Wissenschaft? Welches Experiment hat gezeigt, dass nur Experimente Wissen liefern? Keines – der Satz ist eine philosophische Behauptung, und nach seinem eigenen Maßstab wäre er bloße Meinung. Zudem setzt jede Wissenschaft Logik, Mathematik, die Verlässlichkeit der Sinne und die Ehrlichkeit der Forscher voraus – nichts davon kann sie selbst beweisen.`,
      sources: [
        { kind: 'gegner', author: 'Peter Atkins', work: 'Debatte mit William Lane Craig („What is the Evidence for/against the Existence of God?")', year: '1998', status: 'paraphrase', quote: 'Atkins vertritt, die Wissenschaft sei allzuständig; Craig nennt Logik, Mathematik, Metaphysik, Ethik, Ästhetik und die Voraussetzungen der Wissenschaft selbst als Beispiele für nicht naturwissenschaftlich beweisbares Wissen.' },
      ],
      questionsBack: [`Mit welcher wissenschaftlichen Methode hast du festgestellt, dass nur wissenschaftliche Methoden Wissen liefern?`],
      followUps: [
        {
          id: 'pragmatische-empfehlung',
          objection: `„Das ist keine wissenschaftliche Aussage, sondern eine pragmatische Folgerung aus dem Erfolg der Wissenschaft. Sie funktioniert, alles andere nicht."`,
          objectionBy: 'Lawrence Krauss',
          targetsPremise: 2,
          answer: `Dann argumentierst du philosophisch – mit einem induktiven Schluss aus dem bisherigen Erfolg. Damit hast du den Szientismus schon verlassen: Du benutzt eine nichtwissenschaftliche Begründung, um die Wissenschaft zur einzigen Quelle zu erklären. Und aus dem Erfolg einer Methode in ihrem Bereich folgt nicht, dass es keine anderen Bereiche gibt – ein Metalldetektor ist sehr erfolgreich, beweist aber nicht, dass es nur Metall gibt.`,
          followUps: [
            {
              id: 'schwacher-szientismus',
              objection: `„Dann eben die schwache Fassung: Die Wissenschaft ist die mit Abstand *beste* Erkenntnisquelle."`,
              objectionBy: 'Alex Rosenberg',
              answer: `Beste für was? Für messbare Regelmäßigkeiten der Natur – ja, unbedingt. Für die Frage, ob ein logischer Schluss gültig ist, ob Caesar ermordet wurde, ob Sklaverei Unrecht ist oder ob mein Freund mir die Wahrheit sagt – nein, dafür gibt es andere, angemessene Methoden. Und schon die Frage, welche Quelle die „beste" ist, kann keine Wissenschaft entscheiden – das ist wieder Philosophie.`,
            },
          ],
        },
      ],
    },
    {
      id: 'philosophie-ist-tot',
      objection: `„Hawking hat es gesagt: Die Philosophie ist tot. Die Wissenschaftler tragen heute die Fackel der Erkenntnis."`,
      objectionBy: 'Stephen Hawking & Leonard Mlodinow',
      answer: `Der Satz „Die Philosophie ist tot" ist selbst eine philosophische These über Erkenntnis – keine Messung. Und Hawkings Buch ist voller Philosophie: Es vertritt einen „modellabhängigen Realismus", argumentiert über den freien Willen und über Gott. Wer die Philosophie für tot erklärt, philosophiert meistens nur schlecht. Selbst die Grundlagen der Wissenschaft – was eine gute Erklärung ist, was Kausalität bedeutet – sind philosophische Fragen.`,
      followUps: [
        {
          id: 'philosophie-nichts-geklaert',
          objection: `„Die Philosophie hat in 2500 Jahren keine einzige Frage endgültig geklärt."`,
          objectionBy: 'Lawrence Krauss',
          answer: `Aus der Philosophie sind ganze Wissenschaften hervorgegangen: Physik, Logik, Psychologie, Ökonomie – und die moderne Informatik beruht auf der formalen Logik von Frege, Gödel und Turing. Die Philosophie hat auch Irrwege geklärt, etwa das Scheitern des logischen Positivismus. Dass ihre Grundfragen schwer sind, zeigt nur, dass sie tief sind – und die Wissenschaft kann ihre eigenen Grundlagen ebenso wenig experimentell begründen.`,
        },
      ],
    },
    {
      id: 'moral-geschichte-kein-wissen',
      objection: `„Moralische Aussagen sind keine Wissensaussagen – man kann sie nicht messen. Und Geschichte ist auch nur ‚weiche' Wissenschaft voller Unsicherheit."`,
      objectionBy: 'Alex Rosenberg',
      answer: `Ich weiß sicherer, dass es falsch ist, ein Kind zum Vergnügen zu quälen, als ich viele wissenschaftliche Hypothesen weiß. Und ich weiß, dass Caesar ermordet wurde, auch wenn es kein Experiment dazu gibt. Im Deutschen heißen nicht ohne Grund auch Geschichte, Philologie und Recht „Wissenschaften". Wissen ist begründete, wahre Überzeugung – die Begründung kann auf verschiedenen Wegen erfolgen.`,
      followUps: [
        {
          id: 'harris-wissenschaft-moral',
          objection: `„Sam Harris zeigt doch, dass die Wissenschaft Moral begründen kann: Gut ist, was das Wohlergehen bewusster Wesen fördert – und das kann man messen."`,
          objectionBy: 'Sam Harris (The Moral Landscape, 2010)',
          answer: `Harris setzt voraus, dass das Wohlergehen bewusster Wesen gut ist und gefördert werden *soll* – das ist eine moralische Grundentscheidung, kein Messergebnis. Die Wissenschaft kann feststellen, was Wohlergehen fördert; sie kann nicht feststellen, dass wir es fördern sollen. Harris begründet die Moral also nicht wissenschaftlich, sondern setzt sie voraus.`,
          detail: `Siehe „Die Wissenschaft kann Moral begründen (Sam Harris)".`,
        },
      ],
    },
    {
      id: 'logischer-positivismus',
      objection: `„Der logische Positivismus hat gezeigt: Metaphysische und religiöse Aussagen sind sinnlos, weil sie nicht empirisch verifizierbar sind."`,
      objectionBy: 'A. J. Ayer (Language, Truth and Logic, 1936)',
      targetsPremise: 1,
      answer: `Das Verifikationsprinzip – nur empirisch verifizierbare Sätze sind sinnvoll – ist selbst nicht empirisch verifizierbar und damit nach seinem eigenen Maßstab sinnlos. Daran ist der logische Positivismus gescheitert; heute vertritt ihn kaum ein Philosoph. Ayer selbst sagte 1978 im Gespräch mit Bryan Magee auf die Frage nach den Mängeln der Bewegung, der wichtigste sei wohl gewesen, dass „fast alles daran falsch" war.`,
      followUps: [
        {
          id: 'popper-falsifizierbarkeit',
          objection: `„Aber Popper hat gezeigt: Nur falsifizierbare Aussagen sind wissenschaftlich. Gott ist nicht falsifizierbar, also unwissenschaftlich."`,
          objectionBy: 'Matt Dillahunty',
          answer: `Popper wollte Wissenschaft von Nicht-Wissenschaft abgrenzen – nicht Sinn von Unsinn oder Wissen von Meinung. Er betonte selbst, dass metaphysische Aussagen sinnvoll sind und rational diskutiert werden können. Dass die Existenz Gottes keine naturwissenschaftliche Hypothese ist, heißt also nicht, dass sie unbegründbar wäre. Und das Christentum hat sogar einen historischen Prüfstein: die Auferstehung (1 Kor 15,14).`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist der Satz „Nur die Wissenschaft liefert Wissen" selbst wissenschaftlich bewiesen?`,
    `Wie hat die Wissenschaft bewiesen, dass Logik gilt, dass die Natur gleichförmig ist und dass Forscher ehrlich sein sollen?`,
    `Weißt du, dass Caesar ermordet wurde? Durch welches Experiment?`,
    `Weißt du, dass es falsch ist, ein Kind zum Spaß zu quälen? Wie hast du das gemessen?`,
  ],
  avoid: [
    `Die Wissenschaft abwerten („Wissenschaftler irren sich ständig"). Christen sollten Wissenschaft lieben (Ps 111,2).`,
    `„Die Wissenschaft ist auch nur ein Glaube." – Das verwischt wichtige Unterschiede und klingt relativistisch.`,
    `Das Ayer-Zitat über die belegte Kernwendung („nearly all of it was false", Magee, Men of Ideas, 1978, S. 131) hinaus als wörtlich ausgeben – und verschweigen, dass Ayer am allgemeinen empiristischen Ansatz festhielt.`,
  ],
  concessions: [
    `Die Naturwissenschaft ist die zuverlässigste Methode zur Erkenntnis messbarer Naturvorgänge; ihre Erfolge sind gewaltig.`,
    `Philosophie und Theologie erzeugen weniger Konsens als die Naturwissenschaft – weil ihre Fragen grundlegender und schwerer zu prüfen sind.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Ian H. Hutchinson', work: 'Monopolizing Knowledge', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'Scientism and Secularism', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'Can Science Explain Everything?', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter B. Medawar', work: 'The Limits of Science', year: '1984', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Szientismus', 'Wissenschaftstheorie', 'Logischer Positivismus', 'Selbstwiderlegung', 'Hawking'],
  related: [
    'erkenntnistheorie/glaube-ohne-beweise',
    'erkenntnistheorie/keine-absolute-wahrheit',
    'atheismus/keine-beweise-fuer-gott',
    'naturalismus/nur-materie',
    'naturalismus/vernunft-durch-evolution',
    'moral-und-gott/wissenschaft-begruendet-moral',
    'kirchengeschichte-mythen/galilei',
  ],
};

export default claim;
