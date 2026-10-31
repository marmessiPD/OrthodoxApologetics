import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'mathematik-menschliche-erfindung',
  title: `„Mathematik ist eine menschliche Erfindung."`,
  proponents: [
    { name: 'Reuben Hersh', role: 'Mathematiker (University of New Mexico), Vertreter eines sozial-konstruktivistischen Mathematikverständnisses', work: 'What Is Mathematics, Really? (1997)' },
    { name: 'George Lakoff & Rafael Núñez', role: 'Kognitionslinguist bzw. Kognitionswissenschaftler', work: 'Where Mathematics Comes From (2000)' },
    { name: 'Stanislas Dehaene', role: 'Kognitiver Neurowissenschaftler, Collège de France', work: 'The Number Sense (1997)' },
    { name: 'Hartry Field', role: 'Philosoph (NYU), Begründer des mathematischen Fiktionalismus', work: 'Science Without Numbers (1980)' },
    { name: 'Jean-Pierre Changeux', role: 'Neurobiologe, Institut Pasteur', work: 'Gespräch mit Alain Connes: Conversations on Mind, Matter, and Mathematics (1995)' },
  ],
  steelman: `Mathematik ist ein Produkt des menschlichen Gehirns. Schon Säuglinge und Tiere besitzen einen angeborenen „Zahlensinn" für kleine Mengen (Dehaene); alles Weitere sind kulturelle Erweiterungen: Symbole, Axiome und Regeln, die Menschen erfunden haben, weil sie nützlich waren. Lakoff und Núñez zeigen, wie selbst abstrakte Begriffe auf körperlichen Metaphern aufbauen („Zahlen sind Punkte auf einer Linie"). Dass Mathematiker ihre Axiome wählen können – euklidische oder nichteuklidische Geometrie, Mengenlehre mit oder ohne Kontinuumshypothese –, zeigt, dass Mathematik ein Regelspiel ist, kein Fenster in eine überirdische Welt. Der Platonismus dagegen postuliert ein Reich ewiger, unsichtbarer, kausal wirkungsloser Objekte und kann nicht erklären, wie unser Gehirn mit ihnen in Kontakt kommen soll (Benacerrafs Zugangsproblem, 1973). Wer daraus auch noch einen Gott ableitet, stapelt ein Mysterium auf das andere. Ockhams Rasiermesser schneidet beides weg.`,
  biblical: {
    summary: `Die Bibel ist kein Mathematiklehrbuch, aber sie begründet, warum die Welt geordnet und erkennbar ist: Gott hat „alles geordnet mit Maß, Zahl und Gewicht" (Weish 11,20 – ein deuterokanonisches Buch, das zum koptischen Kanon gehört). Alles ist durch den Logos – das göttliche Wort und die göttliche Vernunft – geschaffen (Joh 1,1–3), und der Mensch ist nach Gottes Bild geschaffen (Gen 1,27), also fähig, diese Ordnung nachzudenken. Daraus folgt: Mathematische Wahrheiten sind weder bloße menschliche Konventionen noch rätselhafte Objekte in einem gottlosen Ideenhimmel, sondern gründen im Geist des Schöpfers.`,
    detail: `- **Weish 11,20** steht im Zusammenhang mit Gottes maßvollem Handeln: Seine Macht ist nicht willkürlich, sondern geordnet. Die Kirchenväter (bes. Augustinus) lasen den Vers als Grundtext für die mathematische Ordnung der Schöpfung.
- **Joh 1,1–3**: Griechisch *logos* bedeutet Wort, Vernunft, Verhältnis. Für die alexandrinische Tradition (Clemens, Athanasius) ist die Rationalität der Welt Abglanz des Logos.
- **Ps 147,4–5**: Gott „zählt die Sterne" – Zahl und Erkenntnis gehören zu Gottes Wesen, sein Verstand ist „unbegreiflich", d. h. unendlich.
- **Missverständnis vermeiden:** Die Bibel entscheidet nicht die Fachfrage zwischen Platonismus, Nominalismus oder Strukturalismus. Sie schließt aber aus, dass die Ordnung der Welt sinnloser Zufall ist und dass Wahrheit bloß menschliche Setzung wäre.`,
    sources: [
      { kind: 'bibel', work: 'Weisheit', ref: '11,20', quote: `Aber du hast alles geordnet mit Maß, Zahl und Gewicht.`, translation: 'Luther 1912 (dort 11,21)', status: 'verbatim', note: 'Verszählung je nach Ausgabe 11,20 oder 11,21. Deuterokanonisch – Teil des koptisch-orthodoxen Kanons.' },
      { kind: 'bibel', work: 'Johannes', ref: '1,1–3', quote: `Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort. Dasselbe war im Anfang bei Gott. Alle Dinge sind durch dasselbe gemacht, und ohne dasselbe ist nichts gemacht, was gemacht ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '147,4–5', quote: `Er zählt die Sterne und nennt sie alle mit Namen. Unser Herr ist groß und von großer Kraft; und ist unbegreiflich, wie er regiert.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Genesis', ref: '1,27', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die alexandrinische Tradition sah in der Mathematik eine Vorschule der Wahrheit: Clemens von Alexandrien empfahl Arithmetik, Geometrie, Musik und Astronomie als Übung des Geistes, die zur Erkenntnis Gottes hinführt. Athanasius begründet die Ordnung des Kosmos im einen Logos. Augustinus (mit den für westliche Väter üblichen Vorbehalten) argumentiert, dass „sieben und drei ist zehn" für jeden Verstand unwandelbar wahr ist – eine Wahrheit über dem menschlichen Geist, die auf den ewigen Gott verweist. Die Kirche hat kein Dogma über die Philosophie der Mathematik; ihr Glaube an den Schöpfer-Logos gibt aber einen Rahmen, in dem Objektivität und Anwendbarkeit der Mathematik verständlich werden.`,
    detail: `Christliche Philosophen sind heute unterschiedlicher Meinung, **wie** mathematische Gegenstände existieren: Alvin Plantinga und andere vertreten, dass sie Gedanken bzw. Ideen im göttlichen Geist sind („theistischer Konzeptualismus" – in der Linie Augustins); William Lane Craig vertritt einen Anti-Realismus (es gibt keine eigenständigen abstrakten Objekte, Gott allein ist ungeschaffen). Gemeinsam ist allen christlichen Positionen: Mathematik ist **nicht willkürlich** und ihr Zusammenspiel mit der Welt ist **kein Zufall**, sondern gründet im Schöpfer. Das ist keine Verlegenheitsantwort, sondern eine präzise Erklärung zweier Rätsel, an denen säkulare Positionen arbeiten: Wie erkennen wir mathematische Wahrheit, und warum passt sie auf die Welt?`,
    sources: [
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Stromateis (Teppiche)', ref: 'I,5; VI,10', year: 'um 200', quote: `Clemens versteht die enzyklischen Wissenschaften – Arithmetik, Geometrie, Musik, Astronomie – als Vorbereitung und Übung des Geistes, die der Erkenntnis der Wahrheit dient.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De libero arbitrio (Über den freien Willen)', ref: 'II,8', year: 'um 388–395', quote: `Dass sieben und drei zehn sind, ist nicht nur jetzt, sondern immer wahr; es ist allen Vernünftigen gemeinsam und keinem Einzelnen untertan – eine Wahrheit, die über unserem Geist steht.`, status: 'paraphrase', note: 'Westlicher Vater – hier für Philosophie, nicht als Lehrautorität in strittigen Fragen.' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De diversis quaestionibus 83', ref: 'q. 46 (De ideis)', quote: `Die Urbilder (Ideen) aller Dinge sind im göttlichen Geist enthalten; nach ihnen ist alles gebildet.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes (Gegen die Heiden)', ref: '35–44', year: 'um 335', quote: `Die geordnete Harmonie des Kosmos weist auf den einen Logos Gottes, der alles lenkt und zusammenhält.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Philosophie der Mathematik gibt es keinen Konsens. Die Hauptpositionen: **Platonismus** (mathematische Objekte existieren unabhängig vom Menschen; Gödel, Hardy, Penrose, Connes), **Nominalismus/Fiktionalismus** (es gibt keine mathematischen Objekte; Field), **Formalismus** (Mathematik als Zeichenspiel; durch Gödels Sätze stark geschwächt), **Intuitionismus** (Mathematik als geistige Konstruktion; Brouwer), **Strukturalismus** und **aristotelischer Realismus** (Mathematik als Wissenschaft von realen Strukturen und Quantitäten). Die Kognitionswissenschaft beschreibt, **wie** Menschen Mathematik lernen – über die Frage, **was** mathematische Wahrheit ist, entscheidet sie nicht.`,
    detail: `- Unter arbeitenden Mathematikern ist eine platonistische Grundhaltung verbreitet; Philip Davis und Reuben Hersh spotteten, der typische Mathematiker sei „werktags Platonist und sonntags Formalist" (*The Mathematical Experience*, 1981).
- Das stärkste Argument für eine Form des Realismus ist das **Unentbehrlichkeitsargument** von Quine und Putnam (beide keine Theisten): Wenn unsere besten physikalischen Theorien unverzichtbar von Zahlen, Funktionen und Räumen sprechen, sind wir auf deren Existenz ebenso festgelegt wie auf Elektronen.
- Das stärkste Argument gegen den säkularen Platonismus ist **Benacerrafs Zugangsproblem** (1973): Wie können kausal wirkungslose Objekte von Gehirnen erkannt werden?
- **Unabhängigkeitsresultate:** Die Kontinuumshypothese ist in der Standard-Mengenlehre (ZFC) weder beweis- noch widerlegbar (Gödel 1940, Cohen 1963). Ob sie dennoch einen Wahrheitswert hat, ist umstritten (Woodin vs. Hamkins' „Multiversum"-Sicht). Für die Arithmetik der natürlichen Zahlen sind die meisten Logiker dagegen überzeugt, dass jeder Satz einen bestimmten Wahrheitswert hat.`,
    sources: [
      { kind: 'gegner', author: 'Reuben Hersh', work: 'What Is Mathematics, Really?', year: '1997', quote: `Mathematik ist eine soziale, kulturelle und historische Tätigkeit des Menschen – weder physisch noch übersinnlich-platonisch.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'George Lakoff & Rafael Núñez', work: 'Where Mathematics Comes From: How the Embodied Mind Brings Mathematics into Being', year: '2000', quote: `Mathematik entsteht aus verkörperter Kognition und begrifflichen Metaphern; sie ist kein Teil einer geist-unabhängigen Wirklichkeit.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Paul Benacerraf', work: 'Mathematical Truth', ref: 'Journal of Philosophy 70 (1973), 661–679', year: '1973', quote: `Eine befriedigende Philosophie der Mathematik muss sowohl erklären, was mathematische Wahrheit ist, als auch, wie wir sie erkennen – und der Platonismus scheint das Zweite nicht leisten zu können.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Philip J. Davis & Reuben Hersh', work: 'The Mathematical Experience', year: '1981', quote: `Der typische arbeitende Mathematiker ist werktags Platonist und sonntags Formalist.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Øystein Linnebo', work: 'Philosophy of Mathematics', year: '2017', quote: `Neutrale Einführung in Platonismus, Nominalismus, Formalismus, Intuitionismus und Strukturalismus.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die **Zeichen** der Mathematik sind erfunden – die **Wahrheiten** werden entdeckt. Dass es unendlich viele Primzahlen gibt, war wahr, bevor es Menschen gab, und Babylonier, Chinesen und Griechen fanden unabhängig dieselben Zusammenhänge. Noch rätselhafter: Mathematik, die rein aus Neugier „erfunden" wurde, beschreibt Jahrzehnte später die Physik präzise. Wenn Welt und Verstand vom selben göttlichen Logos stammen, ist das zu erwarten – wenn Mathematik nur ein Menschenspiel wäre, wäre es ein Wunder.`,
  keyPoints: [
    `**Notation vs. Inhalt:** Ziffern, Symbole und Namen sind kulturell; der Satz „Es gibt unendlich viele Primzahlen" gilt in jeder Schrift und jeder Kultur.`,
    `**Herkunft ist nicht Geltung:** Dass unser Gehirn Mathematik lernt, sagt so wenig über ihre Wahrheit wie die Tatsache, dass wir Astronomie mit dem Gehirn betreiben, über die Existenz der Sterne (genetischer Fehlschluss).`,
    `**Konsequenzen sind nicht wählbar:** Axiome mag man wählen – aber niemand entscheidet, ob daraus der Satz von Fermat folgt. Mathematiker erleben ihre Arbeit als Entdecken, nicht als Erfinden (Hardy, Gödel, Connes).`,
    `**Der säkulare Platonismus hat ein Zugangsproblem (Benacerraf), der Nominalismus ein Anwendungsproblem.** Der christliche Rahmen löst beides: Mathematische Wahrheit gründet im Geist Gottes, und unser Geist ist nach seinem Bild geschaffen.`,
    `**Ehrlich bleiben:** Christen sind sich über die genaue Metaphysik abstrakter Objekte nicht einig (Plantinga vs. Craig). Einig sind sie darin, dass Mathematik weder Willkür noch Zufall ist.`,
  ],
  argument: {
    name: 'Argument aus der Objektivität und Erkennbarkeit der Mathematik',
    summary: 'Schluss auf die beste Erklärung: Objektive, notwendige mathematische Wahrheiten, die wir erkennen können, passen am besten zu einem ewigen, vernünftigen Geist.',
    premises: [
      {
        text: 'P1: Es gibt objektive, notwendige mathematische Wahrheiten, die nicht vom menschlichen Denken abhängen (z. B. „Es gibt unendlich viele Primzahlen").',
        support: `Sie gelten unabhängig von Kultur und Zeit, wurden mehrfach unabhängig entdeckt und lassen sich nicht durch Abstimmung ändern. Selbst Nominalisten bestreiten nicht, dass aus den Peano-Axiomen objektiv bestimmte Folgerungen folgen.`,
      },
      {
        text: 'P2: Wir Menschen können diese Wahrheiten erkennen – weit über jeden Überlebensnutzen hinaus.',
        support: `Menschen beweisen Sätze über unendliche Mengen und hochdimensionale Räume, die für das Überleben in der Savanne irrelevant sind und dennoch später in der Physik zutreffen.`,
      },
      {
        text: 'P3: Ein kausal wirkungsloses, gottloses Ideenreich erklärt P2 nicht (Benacerraf); ein reiner Nominalismus erklärt P1 und die Anwendbarkeit nicht.',
        support: `Benacerrafs Problem gilt als eine der größten Schwierigkeiten des säkularen Platonismus. Der Fiktionalismus muss erklären, warum eine „Fiktion" neue physikalische Entdeckungen (Positron, Gravitationswellen) vorhersagt.`,
      },
      {
        text: 'P4: Wenn mathematische Wahrheiten im Geist eines ewigen Schöpfers gründen, der die Welt rational geschaffen und den Menschen nach seinem Bild gemacht hat, sind P1 und P2 zu erwarten.',
        support: `Der Schöpfer ist zugleich Quelle der Wahrheiten, der Weltordnung und unseres Erkenntnisvermögens – das schließt die Lücke zwischen Geist, Mathematik und Welt.`,
      },
    ],
    conclusion: 'Die Objektivität und Erkennbarkeit der Mathematik sind ein starkes Indiz für einen ewigen, vernünftigen Geist – den Logos, durch den alles geschaffen ist. (Ein Indizienargument, kein mathematischer Beweis.)',
  },
  voices: [
    {
      person: 'augustinus',
      role: 'als Philosoph der unwandelbaren Wahrheit',
      text: `Augustinus argumentiert in *De libero arbitrio*, dass Zahlenwahrheiten drei Eigenschaften haben: Sie sind unwandelbar, sie sind allen vernünftigen Wesen gemeinsam, und sie stehen über dem einzelnen Geist, der sie nicht ändern, sondern nur anerkennen kann. Eine Wahrheit, die höher ist als unser Geist und doch geistiger Natur, verweist für ihn auf Gott, die Wahrheit selbst. In *De diversis quaestionibus* 83 (Frage 46) verortet er die Urbilder aller Dinge im göttlichen Geist – die Grundidee des heutigen theistischen Konzeptualismus.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De libero arbitrio', ref: 'II,8–15', status: 'paraphrase' },
      ],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Lehrer der Katechetenschule von Alexandrien',
      text: `Clemens verteidigte gegen christliche Bildungsverächter den Wert der „enzyklischen" Wissenschaften: Geometrie gewöhne den Geist daran, Unsichtbares und Unveränderliches zu denken, und bereite so auf die Erkenntnis Gottes vor. Für die alexandrinische Schule war Mathematik kein Konkurrent des Glaubens, sondern eine Dienerin, weil dieselbe göttliche Vernunft die Welt geordnet hat, die auch im Menschen wohnt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Stromateis', ref: 'VI,10–11', status: 'paraphrase' },
      ],
    },
    {
      person: 'kepler',
      role: 'als Astronom, der mathematische Gesetze entdeckte',
      text: `Kepler fand die Ellipsenbahnen der Planeten, indem er voraussetzte, dass die Welt mathematisch geordnet ist. In der *Harmonice Mundi* nennt er die Geometrie gleich ewig mit dem göttlichen Geist; sie habe Gott die Urbilder für die Schöpfung geliefert und sei mit dem Bild Gottes auf den Menschen übergegangen. In einem Brief an Herwart von Hohenburg (1599) schreibt er sinngemäß, Gott habe die Naturgesetze für den menschlichen Geist erkennbar gemacht, indem er uns nach seinem Bild schuf, damit wir an seinen Gedanken teilhaben. Die verbreitete Kurzformel „Gottes Gedanken nachdenken" ist eine spätere Verdichtung dieser Aussagen.`,
      sources: [
        { kind: 'wissenschaft', author: 'Johannes Kepler', work: 'Harmonice Mundi', ref: 'Buch IV, Kap. 1', year: '1619', quote: `Die Geometrie, vor der Entstehung der Dinge dem göttlichen Geist gleich ewig, hat Gott die Vorbilder für die Erschaffung der Welt geliefert und ist mit dem Bild Gottes in den Menschen übergegangen.`, status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Johannes Kepler', work: 'Brief an Herwart von Hohenburg', ref: '9./10. April 1599', status: 'unverified', note: 'Häufig als Ursprung von „Gottes Gedanken nachdenken" genannt; die geläufige Kurzform ist in Keplers Werken so nicht belegt. Nicht als wörtliches Zitat verwenden.' },
      ],
    },
    {
      person: 'goedel',
      role: 'als Logiker und mathematischer Realist',
      text: `Gödel war überzeugter Platonist. In seinem Aufsatz über Cantors Kontinuumsproblem schreibt er sinngemäß, wir hätten trotz ihrer Entfernung von der Sinneserfahrung so etwas wie eine Wahrnehmung der Gegenstände der Mengenlehre – die Axiome „zwingen sich uns als wahr auf". Seine Unvollständigkeitssätze verstand er als Beleg, dass mathematische Wahrheit über jedes formale Regelwerk hinausgeht – also nicht einfach menschliche Setzung ist.`,
      sources: [
        { kind: 'wissenschaft', author: 'Kurt Gödel', work: 'What is Cantor\'s Continuum Problem?', ref: 'Supplement zur 2. Fassung', year: '1964', status: 'paraphrase', note: 'Gödel war Theist, aber kein Kirchgänger; hier für Logik und Mathematik.' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als Religionsphilosoph',
      text: `Plantinga zählt in seinen „Two Dozen (or so) Theistic Arguments" ein Argument aus Zahlen und Mengen auf: Mengen und Zahlen scheinen von einem Geist „gesammelt" bzw. gedacht zu sein; die unendliche Fülle mathematischer Gegenstände passt am besten zu einem unendlichen Geist. Er schlägt vor, abstrakte Objekte als Gottes Gedanken zu verstehen – so werden sie objektiv und ewig, ohne ein gottloses Paralleluniversum zu sein.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Two Dozen (or so) Theistic Arguments', ref: 'Vorlesungsnotizen, Argument aus Zahlen/Mengen', year: '1986', status: 'paraphrase' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Oxford-Mathematiker',
      text: `Lennox betont, dass Mathematiker nicht den Eindruck haben, ihre Ergebnisse zu erfinden – sie stoßen auf Widerstand: Ein vermuteter Satz ist entweder beweisbar oder nicht, und das entscheidet nicht der Mathematiker. Für ihn ist die Erfahrung, dass menschliche Mathematik das Universum erschließt, ein starker Hinweis darauf, dass beide derselben Quelle entstammen: dem rationalen Schöpfer, auf den auch der Prolog des Johannesevangeliums verweist.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', ref: 'Kap. 2 (Science and Theism)', year: '2007/2009', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'kultur-und-gehirn',
      objection: `Mathematik hängt nachweislich von unserem Gehirn ab: Babys und Tiere haben einen angeborenen Zahlensinn, Kulturen entwickeln verschiedene Zahlsysteme, und Lakoff/Núñez zeigen, dass selbst höhere Mathematik auf körperlichen Metaphern beruht.`,
      objectionBy: 'Stanislas Dehaene / George Lakoff',
      answer: `Das beschreibt, **wie** wir Mathematik lernen, nicht, **ob** sie wahr ist. Wir betreiben auch Astronomie mit dem Gehirn – die Sterne werden dadurch nicht zu Hirnprodukten. Und Kulturen, die nichts voneinander wussten, entdeckten dieselben Zusammenhänge: Die babylonische Tafel Plimpton 322 enthält pythagoreische Zahlentripel, lange vor Pythagoras.`,
      detail: `Das ist der **genetische Fehlschluss**: Aus der Entstehungsgeschichte einer Überzeugung folgt nichts über ihre Wahrheit. Unterschiedliche Zahlsysteme (Basis 10, 20, 60) sind verschiedene **Schreibweisen** desselben Inhalts. Dass 7 eine Primzahl ist, hängt nicht davon ab, ob man „7", „VII" oder „111" (binär) schreibt.`,
      questionsBack: [
        `Wenn Mathematik kulturell wäre – warum kommen unabhängige Kulturen zu denselben Ergebnissen?`,
        `War der Satz „Es gibt unendlich viele Primzahlen" falsch, bevor Euklid ihn bewies?`,
      ],
      followUps: [
        {
          id: 'evolution-selektiert-nuetzliches',
          objection: `Die Evolution hat uns Rechenfähigkeiten gegeben, weil sie nützlich waren. Mehr steckt nicht dahinter.`,
          objectionBy: 'Evolutionäre Erkenntnistheorie',
          answer: `Die Evolution erklärt, warum wir Mengen bis etwa vier sofort erfassen und Beutetiere zählen können. Sie erklärt nicht, warum wir über transfinite Kardinalzahlen, die Riemannsche Vermutung oder 11-dimensionale Räume nachdenken können – und warum ausgerechnet diese überlebensirrelevante Mathematik später die Physik beschreibt.`,
          detail: `Für das Überleben ist es gleichgültig, ob unsere abstrakten Überzeugungen **wahr** sind, solange das Verhalten passt (vgl. Plantingas evolutionäres Argument gegen den Naturalismus). Gerade die Mathematik ist aber das Gebiet, auf dem unsere Erkenntnis am weitesten über jeden biologischen Nutzen hinausreicht und dennoch zuverlässig ist.`,
          followUps: [
            {
              id: 'nuetzlichkeit-reicht',
              objection: `Nützliche Überzeugungen sind meistens auch wahre. Wer falsch rechnet, stirbt früher.`,
              answer: `Für Alltagsrechnen mag das gelten. Aber kein Vorfahr starb, weil er den Satz von Fermat nicht kannte, und doch beweisen wir ihn – und er stimmt. Die Lücke zwischen biologischem Bedarf und tatsächlicher mathematischer Reichweite ist das, was erklärt werden muss.`,
              questionsBack: [
                `Welcher Selektionsdruck hat unsere Fähigkeit hervorgebracht, über unendliche Mengen zu beweisen?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'axiome-frei-gewaehlt',
      objection: `Mathematiker wählen ihre Axiome frei: euklidische oder nichteuklidische Geometrie, Mengenlehre mit oder ohne Kontinuumshypothese. Mathematik ist ein Spiel nach selbstgemachten Regeln.`,
      objectionBy: 'Formalistische Position',
      answer: `Axiome kann man wählen – die **Folgerungen** nicht. Niemand konnte entscheiden, ob der Satz von Fermat aus den Axiomen der Zahlentheorie folgt; man musste es 350 Jahre lang herausfinden. Und die nichteuklidischen Geometrien sind keine Willkür, sondern widerspruchsfreie Strukturen – eine davon beschreibt, wie Einstein zeigte, unser Universum.`,
      detail: `Georg Cantor sprach von der „Freiheit" der Mathematik (1883) – gemeint ist die Freiheit, widerspruchsfreie Begriffe zu bilden, nicht die Freiheit, Ergebnisse festzulegen. Der reine Formalismus (Mathematik = Zeichenmanipulation ohne Inhalt) gilt seit Gödels Unvollständigkeitssätzen (1931) als schwer haltbar: In jedem hinreichend starken widerspruchsfreien System gibt es wahre, aber unbeweisbare Sätze – „wahr" muss also mehr bedeuten als „ableitbar".`,
      sources: [
        { kind: 'wissenschaft', author: 'Georg Cantor', work: 'Grundlagen einer allgemeinen Mannichfaltigkeitslehre', ref: '§ 8', year: '1883', quote: `Das Wesen der Mathematik liegt in ihrer Freiheit.`, status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'goedel-beweist-keinen-platonismus',
          objection: `Gödel zeigt nur, dass formale Systeme unvollständig sind. Daraus folgt kein Platonismus.`,
          objectionBy: 'Torkel Franzén',
          answer: `Richtig, Gödel **beweist** den Platonismus nicht. Aber er zerstört die bequemste Alternative: Wenn ein Satz wahr, aber im System unbeweisbar ist, dann ist mathematische Wahrheit keine bloße Regelanwendung. Gödel selbst zog daraus den Schluss, dass es eine objektive mathematische Wirklichkeit gibt.`,
          detail: `Formalisten haben Antworten (z. B. „wahr" bedeute nur „wahr im Standardmodell", was wiederum nach einer objektiven Struktur klingt). Ehrlich gesagt: Die Frage bleibt philosophisch offen – aber die Beweislast verschiebt sich. Wer sagt, Mathematik sei nur ein Spiel, muss erklären, was es heißt, dass ein unbeweisbarer Satz „wahr" ist.`,
          questionsBack: [
            `Ist der Gödelsatz für die Peano-Arithmetik wahr? Wenn ja – wahr in Bezug auf was?`,
          ],
        },
        {
          id: 'kontinuumshypothese',
          objection: `Die Kontinuumshypothese ist in ZFC weder beweisbar noch widerlegbar. Wenn sie weder wahr noch falsch ist, gibt es eben keine mathematische Wirklichkeit.`,
          objectionBy: 'Mengentheoretischer Pluralismus (Joel David Hamkins)',
          answer: `Ob die Kontinuumshypothese einen Wahrheitswert hat, ist unter Mengentheoretikern umstritten – Gödel und heute Hugh Woodin meinen ja. Aber selbst wenn die höchsten Stockwerke der Mengenlehre mehrdeutig wären: Dass 2 + 2 = 4 ist und es unendlich viele Primzahlen gibt, wird dadurch nicht zur Geschmacksfrage.`,
          detail: `Für den christlichen Standpunkt ist keine Entscheidung dieser Fachfrage nötig. Der Glaube behauptet nicht, dass Menschen jede mathematische Frage beantworten können, sondern dass Wahrheit nicht von Menschen gemacht wird.`,
        },
      ],
    },
    {
      id: 'benacerraf-zugangsproblem',
      objection: `Platonismus ist Mystik: Abstrakte Objekte stehen außerhalb von Raum und Zeit und wirken nicht kausal. Wie soll ein Gehirn sie erkennen? (Benacerraf 1973)`,
      objectionBy: 'Paul Benacerraf / Hartry Field',
      answer: `Genau das ist das Problem des **gottlosen** Platonismus – und genau hier hilft der Theismus. Wenn mathematische Wahrheiten Gedanken eines ewigen Geistes sind und dieser Geist sowohl die Welt als auch unseren Verstand geschaffen hat, ist der Zugang nicht mehr rätselhaft. Dein Einwand ist eigentlich ein Argument für meine Sicht.`,
      detail: `Augustinus und in seiner Nachfolge Plantinga, Greg Welty und Paul Gould verstehen abstrakte Gegenstände als göttliche Ideen. Das erklärt (1) ihre Notwendigkeit und Ewigkeit (Gottes Denken ist ewig), (2) ihre geistartige Natur (Sätze und Mengen sind „gedacht"), (3) unseren Zugang (Gott schuf uns nach seinem Bild) und (4) ihre Anwendbarkeit (Gott schuf die Welt nach seinen Gedanken).`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul M. Gould (Hg.)', work: 'Beyond the Control of God? Six Views on the Problem of God and Abstract Objects', year: '2014', status: 'paraphrase', note: 'Zeigt die Bandbreite christlicher Positionen (Platonismus, Konzeptualismus, Nominalismus).' },
      ],
      questionsBack: [
        `Wenn du den Platonismus ablehnst – wie erklärst du dann, dass „Fiktionen" wie komplexe Zahlen Experimente vorhersagen?`,
      ],
      followUps: [
        {
          id: 'nominalismus-ohne-gott',
          objection: `Dann nehme ich eben den Nominalismus: Es gibt gar keine abstrakten Objekte. Hartry Field hat gezeigt, wie man Physik ohne Zahlen formulieren kann.`,
          objectionBy: 'Hartry Field',
          answer: `Fields Programm gelang für die Newtonsche Gravitation, für die Quantenmechanik und moderne Feldtheorien gilt es als nicht durchgeführt. Und das Unentbehrlichkeitsargument von Quine und Putnam – beide keine Christen – sagt: Wer unseren besten Theorien glaubt, ist auf Mathematik ebenso festgelegt wie auf Elektronen.`,
          followUps: [
            {
              id: 'fiktion-nuetzlich',
              objection: `Fiktionen können sehr nützlich sein – wie eine Landkarte. Mathematik ist eine nützliche Fiktion.`,
              answer: `Eine Landkarte ist nützlich, **weil** sie einem realen Gelände entspricht. Eine Fiktion, die neue, noch unbekannte Teile des Geländes vorhersagt – Diracs Gleichung sagte 1928 das Positron voraus, entdeckt 1932 –, ist keine bloße Fiktion mehr. Genau diese Passung verlangt nach Erklärung.`,
              questionsBack: [
                `Kennst du eine Romanfigur, deren Eigenschaften man Jahrzehnte später im Labor nachgemessen hat?`,
              ],
            },
          ],
        },
        {
          id: 'christen-uneinig',
          objection: `Christen sind sich selbst uneinig: Craig ist Nominalist, Plantinga Platonist. Ihr habt keine einheitliche Antwort.`,
          objectionBy: 'Graham Oppy',
          answer: `Das stimmt – die genaue Metaphysik abstrakter Objekte ist kein Dogma. Aber alle christlichen Positionen erklären, was du erklären musst: Warum Mathematik objektiv ist und warum sie auf die Welt passt. Bei Craig gründet beides in Gottes Schöpfung einer mathematisch strukturierten Welt und eines entsprechenden Verstandes, bei Plantinga in Gottes Gedanken.`,
          detail: `Innerchristliche Vielfalt in einer Detailfrage ist kein Mangel, sondern Zeichen ehrlicher Forschung – Physiker sind sich auch über die Deutung der Quantenmechanik uneinig, ohne dass die Physik dadurch widerlegt wäre.`,
        },
      ],
    },
    {
      id: 'tegmark-alles-mathematik',
      objection: `Max Tegmark sagt umgekehrt: Das Universum **ist** eine mathematische Struktur. Dann brauchst du keinen Gott – die Mathematik existiert einfach, und wir sind ein Teil davon.`,
      objectionBy: 'Max Tegmark (Our Mathematical Universe, 2014)',
      answer: `Tegmark bestätigt immerhin, dass Mathematik objektiv und nicht erfunden ist – damit ist der Ausgangseinwand vom Tisch. Aber Gleichungen tun nichts: Hawking fragte zu Recht, was den Gleichungen „Feuer einhaucht", sodass es ein Universum gibt, das sie beschreiben. Eine abstrakte Struktur ist keine Ursache.`,
      detail: `Tegmarks „Hypothese des mathematischen Universums" impliziert zudem, dass **alle** mathematischen Strukturen physikalisch existieren. Daraus folgen Messprobleme: In den allermeisten Strukturen gäbe es chaotische oder trügerische Beobachter – warum erleben wir dann eine so einfache, regelmäßige Welt? Die Hypothese ist unter Physikern eine Außenseiterposition.`,
      sources: [
        { kind: 'gegner', author: 'Stephen Hawking', work: 'A Brief History of Time', ref: 'Schlusskapitel (Conclusion)', year: '1988', quote: `Selbst wenn es nur eine mögliche vereinheitlichte Theorie gibt, ist sie nur ein Satz von Regeln und Gleichungen. Was ist es, das den Gleichungen Feuer einhaucht und ein Universum erschafft, das sie beschreiben können?`, original: `Even if there is only one possible unified theory, it is just a set of rules and equations. What is it that breathes fire into the equations and makes a universe for them to describe?`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      questionsBack: [
        `Wenn alle mathematischen Strukturen existieren – warum leben wir in einer so geordneten?`,
      ],
    },
  ],
  questionsToAsk: [
    `War es wahr, dass es unendlich viele Primzahlen gibt, bevor es Menschen gab?`,
    `Wenn Mathematik erfunden ist – warum können wir das Ergebnis eines Beweises nicht einfach festlegen?`,
    `Wie erklärst du, dass rein abstrakte Mathematik (Riemann 1854) Jahrzehnte später die Gravitation beschreibt (Einstein 1915)?`,
    `Wie erkennt ein durch Evolution geformtes Gehirn Wahrheiten über unendliche Mengen?`,
  ],
  avoid: [
    `„Die Mathematik beweist Gott." – Sie liefert ein Indizienargument, keinen Beweis. Übertreibung kostet Glaubwürdigkeit.`,
    `Die Euler-Diderot-Anekdote („(a+bⁿ)/n = x, also existiert Gott") – sie ist eine Legende (bei Augustus De Morgan überliefert) und wird von Mathematikhistorikern als unhistorisch angesehen.`,
    `Zahlenmystik, „Bibelcodes" oder Pi-Spekulationen – sie haben mit dem philosophischen Argument nichts zu tun und machen es lächerlich.`,
    `So tun, als gäbe es unter Philosophen Einigkeit für den Platonismus – es gibt sie nicht.`,
  ],
  concessions: [
    `Notationen, Zahlsysteme und die Auswahl von Axiomen sind tatsächlich menschliche Leistungen; die Kognitionswissenschaft zeigt zu Recht, wie unser Gehirn Mathematik lernt.`,
    `Die Philosophie der Mathematik ist eine offene Debatte; auch Christen vertreten unterschiedliche Positionen über die Existenzweise abstrakter Objekte.`,
    `Das Argument ist ein Schluss auf die beste Erklärung – ein kluger Nominalist kann ihm ausweichen, zahlt aber einen Preis bei der Erklärung der Anwendbarkeit.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Mark Steiner', work: 'The Applicability of Mathematics as a Philosophical Problem', year: '1998', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul M. Gould (Hg.)', work: 'Beyond the Control of God? Six Views on the Problem of God and Abstract Objects', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Øystein Linnebo', work: 'Philosophy of Mathematics', year: '2017', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Mathematik', 'Platonismus', 'Logos', 'Philosophie der Mathematik'],
  related: [
    'mathematik/effektivitaet-der-mathematik-zufall',
    'mathematik/goedel-und-gott',
    'naturalismus/vernunft-durch-evolution',
    'naturalismus/nur-materie',
    'physik/naturgesetze-erklaeren-sich-selbst',
  ],
};

export default claim;
