import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'koerperloser-geist-inkohaerent',
  title: `„Ein körperloser Geist ist ein inkohärenter Begriff."`,
  proponents: [
    { name: 'Gilbert Ryle', role: 'Philosoph, Oxford (1900–1976)', work: 'The Concept of Mind (1949) – das „Gespenst in der Maschine"' },
    { name: 'Kai Nielsen', role: 'Religionsphilosoph, University of Calgary (1926–2021)', work: 'Contemporary Critiques of Religion (1971)' },
    { name: 'Antony Flew (früh)', role: 'Philosoph, damals Atheist', work: 'God and Philosophy (1966)' },
    { name: 'Michael Martin', role: 'Religionsphilosoph, Boston University (1932–2015)', work: 'Atheism: A Philosophical Justification (1990)' },
    { name: 'Daniel Dennett', role: 'Philosoph und Kognitionswissenschaftler, Tufts University (1942–2024)', work: 'Consciousness Explained (1991)' },
  ],
  steelman: `Jeder Geist, den wir kennen, ist ein verkörperter Geist: Er sieht mit Augen, hört mit Ohren, handelt mit Händen und denkt mit einem Gehirn. Wittgenstein schrieb: „Der menschliche Körper ist das beste Bild der menschlichen Seele." Was soll es heißen, ohne Augen zu „sehen", ohne Hände zu „handeln", ohne Gehirn zu „denken"? Gilbert Ryle nannte die Vorstellung einer unkörperlichen Seele das „Gespenst in der Maschine" – ein Kategorienfehler. Dazu kommen harte Probleme: Wie soll etwas Nicht-Räumliches einen Körper bewegen, ohne den Energieerhaltungssatz zu verletzen? Was unterscheidet zwei körperlose Geister voneinander? Was heißt „überall gegenwärtig, aber an keinem Ort"? Und die Neurowissenschaft zeigt, dass jedes Denken und Fühlen an Hirnprozesse gebunden ist. Ein „körperloser Geist" ist daher keine kühne Hypothese, sondern eine Wortverbindung ohne klaren Inhalt – wie ein Lächeln ohne Katze.`,
  biblical: {
    summary: `Jesus sagt: „Gott ist Geist" (Joh 4,24). Die Schrift nennt Gott den „Unsichtbaren" (1 Tim 1,17; Kol 1,15) und betont, dass ein Geist „nicht Fleisch und Bein" hat (Lk 24,39). Zugleich spricht sie in kühnen Bildern von Gottes Augen, Ohren und Armen – und gibt selbst den Schlüssel: „Der das Ohr gepflanzt hat, sollte der nicht hören? Der das Auge gemacht hat, sollte der nicht sehen?" (Ps 94,9). Gott hört und sieht – nicht mit Organen, sondern als deren Schöpfer.`,
    detail: `- **Joh 4,24:** *pneuma ho theos* – Jesus begründet damit, dass Gott nicht an einen Ort (Garizim oder Jerusalem) gebunden ist. Geistigkeit und Allgegenwart gehören zusammen.
- **1 Kön 8,27:** Salomo bekennt, dass „aller Himmel Himmel" Gott nicht fassen können – geschweige denn ein Tempel.
- **Ps 139,7–10:** „Wohin soll ich gehen vor deinem Geist?" – Gottes Gegenwart ist nicht räumlich begrenzt.
- **Bilder:** Die Arme, Flügel und Augen Gottes sind poetische Rede (Gott hat ja auch „Flügel", Ps 91,4). Die Bibel selbst unterscheidet zwischen Bild und Sache.
- **Christus:** Der unsichtbare Gott wird in Christus sichtbar (Kol 1,15; Joh 1,18). Die Menschwerdung setzt voraus, dass Gott an sich nicht körperlich ist – sonst wäre sie keine Herablassung.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '4,24', quote: `Gott ist Geist, und die ihn anbeten, die müssen ihn im Geist und in der Wahrheit anbeten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '24,39', quote: `… denn ein Geist hat nicht Fleisch und Bein, wie ihr seht, daß ich habe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '94,9', quote: `Der das Ohr gepflanzt hat, sollte der nicht hören? Der das Auge gemacht hat, sollte der nicht sehen?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Timotheus', ref: '1,17', quote: `Aber Gott, dem ewigen Könige, dem Unvergänglichen und Unsichtbaren und allein Weisen, sei Ehre und Preis in Ewigkeit!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Könige', ref: '8,27', quote: `Siehe, der Himmel und aller Himmel Himmel mögen dich nicht versorgen; wie sollte es denn dies Haus tun, das ich gebaut habe?`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Gerade in Ägypten wurde diese Frage schon um 399 heftig diskutiert: Einfache Mönche der sketischen Wüste stellten sich Gott menschengestaltig vor (die „Anthropomorphiten"). Papst Theophilus von Alexandrien wies dies in seinem Osterfestbrief zurück und lehrte mit der ganzen Kirche, dass Gott unkörperlich ist. Johannes Cassian überliefert die ergreifende Geschichte des greisen Abba Serapion, der die Wahrheit annahm und weinend rief, man habe ihm seinen Gott genommen – weil er sein inneres Bild loslassen musste, um den wahren, unsichtbaren Gott anzubeten. Die Kirche hat also nicht aus Unkenntnis, sondern nach bewusster Prüfung bekannt: Gott ist Geist.`,
    detail: `Dass einzelne frühe Schriftsteller wie Tertullian unter stoischem Einfluss Gott ein „eigentümliches" Körpersein zuschrieben, zeigt, dass die Frage ernsthaft durchdacht wurde. Die Kirche folgte darin nicht Tertullian, sondern Athanasius, den Kappadokiern und Kyrill: Gott ist einfach, unkörperlich, unumschreibbar – und gerade deshalb allem nahe.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern (Collationes)', ref: 'X,2–3', year: 'um 425', status: 'paraphrase', quote: 'Abba Serapion rief weinend: „Sie haben mir meinen Gott weggenommen, und ich habe nun keinen, den ich festhalten kann."', note: 'Bericht über die Anthropomorphiten-Kontroverse in Ägypten nach dem Osterfestbrief des Theophilus (399).' },
      { kind: 'koptisch', author: 'Theophilus von Alexandrien', work: 'Osterfestbrief des Jahres 399', status: 'paraphrase', quote: 'Zurückweisung der Vorstellung, Gott habe eine menschliche Gestalt.', note: 'Der Brief ist nur indirekt (u. a. bei Cassian) überliefert.' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Gegen Praxeas (Adversus Praxean)', ref: '7', status: 'paraphrase', quote: 'Wer wird leugnen, dass Gott ein Körper ist, wenn auch Gott Geist ist? Der Geist ist ein Körper eigener Art.', note: 'Tertullian ist keine Lehrautorität; seine stoisch gefärbte Sicht hat sich nicht durchgesetzt.' },
    ],
  },
  quickAnswer: `Dass alle Geister, die wir *kennen*, verkörpert sind, beweist nicht, dass ein Geist einen Körper braucht – alle Schwäne, die die Europäer kannten, waren weiß. Entscheidend ist: Bewusstsein selbst – Erleben, Denken, Wollen – ist nach vielen Philosophen nicht dasselbe wie Materie. Wir erkennen Mathematik und unsere eigenen Gedanken ohne Sinnesorgane, und unser Wollen bewegt den Arm „direkt". Ein Geist, dessen Erkennen und Wirken nicht an Organe gebunden ist, ist ungewohnt, aber nicht widersprüchlich. Richard Swinburne zeigt das mit einem einfachen Gedankenexperiment: Stell dir vor, du verlierst nach und nach deinen Körper, bleibst aber bei Bewusstsein.`,
  keyPoints: [
    `**Erfahrungsschluss ist kein Logikbeweis:** „Alle bekannten Geister sind verkörpert" zeigt nicht, dass Geist ohne Körper unmöglich ist.`,
    `**Bewusstsein ist nicht-physisch:** Qualia, Intentionalität und die Einheit des Ich sind mit rein physikalischen Begriffen nicht erfasst (Swinburne, Moreland, Plantinga). Wenn schon unser Geist nicht bloß Materie ist, ist ein rein geistiges Wesen nicht absurd.`,
    `**Erkennen ohne Sinne:** Wir wissen, dass 2 + 2 = 4 und was wir denken, ohne Augen und Ohren. Gott „sieht" nicht mit Organen, sondern als Schöpfer und Erhalter aller Dinge (Ps 94,9).`,
    `**Handeln ohne Hände:** Auch unser Handeln beginnt mit einem Wollen. Gottes Wollen wirkt unmittelbar – er ist der Grund des Daseins der Dinge.`,
    `**Allgegenwart ist Gegenwart als Ursache**, nicht Ausdehnung im Raum (Thomas, S.th. I q.8).`,
    `**Die koptische Kirche hat die Frage selbst durchgekämpft** (Anthropomorphiten-Streit 399) und bewusst bekannt: Gott ist Geist.`,
  ],
  argument: {
    name: 'Die Kohärenz eines körperlosen Geistes (nach Swinburne)',
    summary: 'Wenn wir uns widerspruchsfrei vorstellen können, ohne Körper bewusst zu sein, ist ein körperloser Geist zumindest möglich.',
    premises: [
      {
        text: 'P1: Ich kann mir widerspruchsfrei vorstellen, dass ich meinen Körper nach und nach verliere und dennoch weiter denke, erlebe, erkenne und wirke.',
        support: `Swinburnes Gedankenexperiment: Ich bemerke, dass ich mich nicht mehr im Spiegel sehe, aber weiterhin weiß, was um mich geschieht, und Dinge durch bloßes Wollen bewege. Keiner dieser Schritte enthält einen logischen Widerspruch.`,
        sources: [
          { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Coherence of Theism', year: '1977, 2. Aufl. 2016', ref: 'Kap. 7', status: 'paraphrase', quote: 'Gedankenexperiment eines allmählich körperlos werdenden Bewusstseins als Beleg für die Kohärenz eines allgegenwärtigen Geistes.' },
        ],
      },
      {
        text: 'P2: Was widerspruchsfrei vorstellbar ist, ist – solange kein verborgener Widerspruch nachgewiesen wird – vermutlich möglich.',
        support: `Vorstellbarkeit ist ein anfechtbares, aber in der Philosophie allgemein verwendetes Indiz für Möglichkeit. Wer Inkohärenz behauptet, muss den Widerspruch zeigen – nicht nur Ungewohntheit.`,
      },
    ],
    conclusion: 'Also ist ein körperloser Geist kein inkohärenter Begriff; die Beweislast für einen verborgenen Widerspruch liegt beim Kritiker.',
  },
  voices: [
    {
      person: 'swinburne',
      role: 'als analytischer Religionsphilosoph',
      text: `Swinburne hat in „The Coherence of Theism" (1977, überarbeitet 2016) systematisch geprüft, ob der Begriff eines allgegenwärtigen, körperlosen Geistes widersprüchlich ist. Sein Ergebnis: Eine Person ist ein Wesen mit Bewusstsein, Absichten und der Fähigkeit zu handeln. Nichts davon verlangt begrifflich einen Körper. Ein körperloser Geist würde Wissen über die Welt nicht über Sinnesorgane, sondern unmittelbar haben, und er würde nicht mit Gliedmaßen, sondern durch „Basishandlungen" überall unmittelbar wirken. Swinburne verteidigt zudem den Substanzdualismus: Auch der Mensch ist mehr als sein Körper.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Coherence of Theism', year: '1977, 2. Aufl. 2016', status: 'paraphrase', quote: 'Ein allgegenwärtiger, körperloser Geist ist ein kohärenter Begriff.' },
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Are We Bodies or Souls?', year: '2019', status: 'paraphrase', quote: 'Verteidigung des Substanzdualismus für den Menschen.' },
      ],
    },
    {
      person: 'moreland',
      role: 'als Philosoph des Geistes',
      text: `Moreland argumentiert, dass Bewusstsein in einer rein physikalischen Welt ein Fremdkörper ist: Physikalische Zustände sind durch Masse, Ladung und Lage bestimmt; Bewusstseinszustände dagegen durch Erleben, Bedeutung und Perspektive. Wenn es endliche Geister gibt, deren Bewusstsein sich nicht auf Materie zurückführen lässt, ist das ein Hinweis auf einen ursprünglichen Geist, nicht auf ursprüngliche Materie. Ein körperloser Gott ist für Moreland nicht eine merkwürdige Ausnahme, sondern die einfachste Erklärung dafür, dass es überhaupt Geist gibt.`,
      sources: [
        { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'Consciousness and the Existence of God', year: '2008', status: 'paraphrase', quote: 'Das Argument aus dem Bewusstsein: Geist in der Welt verweist auf einen ursprünglichen Geist.' },
        { kind: 'fachliteratur', author: 'J. P. Moreland & Scott B. Rae', work: 'Body & Soul: Human Nature and the Crisis in Ethics', year: '2000', status: 'paraphrase', quote: 'Verteidigung des Substanzdualismus.' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als Kritiker des Materialismus',
      text: `In „Against Materialism" (2006) argumentiert Plantinga, dass der Materialismus über den menschlichen Geist nicht haltbar ist. Eines seiner Argumente: Es ist möglich, dass ich weiter existiere, während mein Körper Teil für Teil in Sekundenbruchteilen ersetzt wird; es ist aber nicht möglich, dass mein Körper das überlebt. Also bin ich nicht mein Körper. Ein weiteres Argument zielt auf den Inhalt von Gedanken: Neuronale Ereignisse haben elektrische und chemische Eigenschaften, aber keinen propositionalen Gehalt – sie „handeln von" nichts. Wenn schon menschliche Personen nicht bloß Materie sind, fällt der Einwand gegen einen körperlosen Gott in sich zusammen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: '„Against Materialism", Faith and Philosophy 23', year: '2006', status: 'paraphrase', quote: 'Ersetzungsargument und Argument aus dem Gedankeninhalt gegen den Materialismus.' },
      ],
    },
    {
      person: 'thomas-aquin',
      role: 'als Metaphysiker der Allgegenwart',
      text: `Thomas erklärt, wie ein unkörperlicher Gott „überall" sein kann: nicht wie ein Körper, der einen Raum ausfüllt, sondern wie eine Ursache, die ihrer Wirkung gegenwärtig ist. Gott ist in allen Dingen durch seine Macht (alles untersteht ihr), durch seine Gegenwart (alles liegt offen vor ihm) und durch sein Wesen (er ist der Grund ihres Daseins). So wie die Seele ganz im ganzen Leib ist, ohne sich auszudehnen, ist Gott ganz in allem, ohne ein Teil davon zu sein.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I q.8 a.1–3', status: 'paraphrase', quote: 'Gott ist in allen Dingen durch Macht, Gegenwart und Wesen – als Ursache ihres Seins, nicht als Teil.' },
      ],
    },
    {
      person: 'johannes-cassian',
      role: 'als Zeuge des ägyptischen Mönchtums',
      text: `Cassian, der lange unter den Wüstenvätern Ägyptens lebte, berichtet vom Streit um die Körperlichkeit Gottes nach dem Osterfestbrief des Theophilus (399). Viele schlichte Mönche lehnten den Brief zunächst ab, weil sie meinten, der Mensch sei nach Gottes Bild geschaffen, also habe Gott eine Menschengestalt. Abba Paphnutius und ein gelehrter Gast aus Kappadokien überzeugten den ehrwürdigen Serapion vom Gegenteil. Sein Ausruf – man habe ihm seinen Gott genommen – zeigt, wie schmerzhaft, aber notwendig es ist, Gott nicht nach unseren Vorstellungen zu formen, sondern ihn „im Geist und in der Wahrheit" anzubeten.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes', ref: 'X,2–3', status: 'paraphrase', quote: 'Bericht über Serapion und den Anthropomorphiten-Streit.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'alle-geister-verkoerpert',
      objection: `„Jeder Geist, den wir kennen, hat einen Körper und ein Gehirn. Ein Geist ohne Körper ist wie ein Lächeln ohne Katze – eine Grinsekatze aus Alice im Wunderland."`,
      objectionBy: 'Gilbert Ryle / Kai Nielsen (sinngemäß)',
      answer: `Dass alle Geister, die wir kennen, verkörpert sind, ist eine Erfahrungsverallgemeinerung, kein Beweis der Unmöglichkeit – alle Schwäne, die die Europäer kannten, waren weiß, bis sie nach Australien kamen. Ein Lächeln *ist* eine Form des Gesichts; ob Bewusstsein ebenso eine bloße Form des Körpers ist, ist ja gerade die Frage. Und es gibt starke Gründe, dass Erleben, Denken und Wollen etwas anderes sind als physikalische Vorgänge.`,
      followUps: [
        {
          id: 'vorstellbar-heisst-nicht-moeglich',
          objection: `„Swinburnes Gedankenexperiment beweist nichts. Man konnte sich auch vorstellen, dass Wasser nicht H₂O ist – trotzdem ist es notwendig H₂O. Vorstellbarkeit ist kein Beweis für Möglichkeit."`,
          objectionBy: 'Daniel Dennett / Paul Churchland (sinngemäß)',
          answer: `Richtig: Vorstellbarkeit ist ein anfechtbares Indiz, kein Beweis. Aber sie ist das übliche Indiz, und wer „inkohärent" sagt, muss einen Widerspruch zeigen. Interessant ist: Saul Kripke, der das Wasser-Beispiel berühmt gemacht hat, benutzte die Modallogik gerade, um *gegen* die Gleichsetzung von Geist und Gehirn zu argumentieren. Beim Wasser können wir erklären, warum es uns nur so schien; beim Schmerz gibt es keinen Unterschied zwischen dem Erscheinen und dem Sein.`,
          sources: [
            { kind: 'fachliteratur', author: 'Saul Kripke', work: 'Naming and Necessity', year: '1980', ref: 'Vorlesung III', status: 'paraphrase', quote: 'Modales Argument gegen die Identität von mentalen und Hirnzuständen: Beim Schmerz fallen Erscheinung und Wirklichkeit zusammen.' },
          ],
          followUps: [
            {
              id: 'gehirn-abhaengigkeit',
              objection: `„Die Neurowissenschaft zeigt: Jeder Gedanke, jedes Gefühl hängt von Hirnprozessen ab. Ein Schlag auf den Kopf, und die Persönlichkeit ändert sich. Wo soll da Platz für einen Geist ohne Gehirn sein?"`,
              objectionBy: 'Patricia Churchland / Sam Harris (sinngemäß)',
              answer: `Dass *unser* Geist im irdischen Leben eng mit dem Gehirn verbunden ist, bestreitet niemand. Aber Abhängigkeit ist nicht Identität: Ein Pianist hängt von seinem Flügel ab – ein verstimmter Flügel verändert sein Spiel –, und doch ist er nicht der Flügel. Neurowissenschaftler wie der Nobelpreisträger John Eccles oder Wilder Penfield waren Dualisten. Und vor allem: Gott ist kein Mensch, dem man das Gehirn weggenommen hat, sondern der Schöpfer, ohne den es keine Gehirne gäbe.`,
              voices: [
                {
                  person: 'eccles',
                  role: 'als Neurophysiologe (Nobelpreis 1963)',
                  text: `Eccles, der für seine Forschungen zur Synapse den Nobelpreis erhielt, verteidigte zusammen mit Karl Popper in „The Self and Its Brain" (1977) einen interaktionistischen Dualismus: Das selbstbewusste Ich ist nicht identisch mit dem Gehirn, sondern wirkt mit ihm zusammen. Für Eccles zeigte gerade die Detailkenntnis des Gehirns, dass das Ich nicht darin aufgeht.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Karl R. Popper & John C. Eccles', work: 'The Self and Its Brain', year: '1977', status: 'paraphrase', quote: 'Interaktionistischer Dualismus: Das selbstbewusste Ich wirkt mit dem Gehirn zusammen, ist aber nicht mit ihm identisch.' },
                  ],
                },
              ],
              detail: `Siehe „Hirnschäden verändern die Persönlichkeit – also ist der Geist nur das Gehirn".`,
              followUps: [
                {
                  id: 'bewusstsein-bald-erklaert',
                  objection: `„Die Neurowissenschaft ist jung. In ein paar Jahrzehnten werden wir Bewusstsein vollständig erklären – dann bleibt vom ‚Geist' nichts übrig."`,
                  objectionBy: 'Daniel Dennett (Consciousness Explained, 1991)',
                  answer: `Das ist ein Versprechen, keine Erkenntnis – Karl Popper nannte es „Schuldschein-Materialismus" (*promissory materialism*). Das „schwere Problem des Bewusstseins" (David Chalmers) ist nicht, welche Hirnregion bei welchem Gefühl aktiv ist, sondern warum es sich überhaupt *irgendwie anfühlt*. Daran hat auch die beste Hirnforschung nichts geändert. Auf ein künftiges Wunder der Wissenschaft zu setzen, ist kein Argument gegen die Kohärenz eines Geistes heute.`,
                  detail: `Siehe „Bewusstsein lässt sich materialistisch erklären".`,
                  questionsBack: [`Welcher physikalische Vorgang erklärt, warum sich Rot *rot anfühlt* – nicht nur, welche Wellenlänge es hat?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sehen-ohne-augen',
      objection: `„Was soll es heißen, dass Gott ‚sieht', ‚hört' oder ‚handelt'? Sehen ohne Augen, Handeln ohne Hände – diese Wörter verlieren ohne Körper jeden Sinn."`,
      objectionBy: 'Kai Nielsen / Antony Flew (God and Philosophy, 1966)',
      answer: `Erkennen ist mehr als Sinneswahrnehmung: Du weißt, dass 7 + 5 = 12 ist und was du gerade denkst, ohne dafür Augen zu brauchen. „Gott sieht" heißt: Ihm ist alles unmittelbar bekannt. Und auch dein Handeln beginnt nicht mit dem Muskel, sondern mit dem Wollen. Gottes Wollen braucht keine Zwischenglieder – er wirkt als der Grund des Daseins aller Dinge. Schon Ps 94,9 fragt: „Der das Auge gemacht hat, sollte der nicht sehen?"`,
      followUps: [
        {
          id: 'basishandlung-braucht-nerven',
          objection: `„Dein ‚Wollen' bewegt den Arm aber über Nerven und Muskeln. Ohne Nervensystem bewegt dein Wille gar nichts."`,
          objectionBy: 'Michael Martin (sinngemäß)',
          answer: `Beim Menschen gibt es diese Kette – aber das Wollen selbst ist kein Muskelzucken. Die Frage ist nur, ob es begrifflich unmöglich ist, dass ein Wille unmittelbar wirkt. Das ist nicht gezeigt. Swinburne nennt das eine „Basishandlung": etwas tun, ohne es durch etwas anderes zu tun. Bei uns ist der Bereich der Basishandlungen klein (etwa das Bewegen eines Fingers); bei Gott umfasst er alles.`,
          followUps: [
            {
              id: 'bibel-gott-hat-koerper',
              objection: `„Die Bibel selbst stellt Gott körperlich vor: Er geht im Garten Eden spazieren, Mose sieht seinen Rücken, er hat Arme, Hände und ein Gesicht. Der unkörperliche Gott ist eine spätere Erfindung griechischer Philosophen."`,
              objectionBy: 'Francesca Stavrakopoulou (God: An Anatomy, 2021)',
              answer: `Die Bibel spricht in starken Bildern – sie gibt Gott auch Flügel (Ps 91,4), und niemand hält ihn deshalb für einen Vogel. Dieselbe hebräische Bibel betont aber, dass Israel am Sinai „keine Gestalt" sah (Dtn 4,15) und dass „aller Himmel Himmel" Gott nicht fassen (1 Kön 8,27). Jesus sagt ausdrücklich: „Gott ist Geist" (Joh 4,24). Dass die Bilder ernst gemeint, aber nicht wörtlich zu nehmen sind, liegt im Text selbst, nicht erst bei den Griechen.`,
              sources: [
                { kind: 'gegner', author: 'Francesca Stavrakopoulou', work: 'God: An Anatomy', year: '2021', status: 'paraphrase', quote: 'Der Gott der Bibel sei ursprünglich als körperliches Wesen vorgestellt worden.' },
                { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '4,15', quote: `So bewahret nun eure Seelen wohl; denn ihr habt keine Gestalt gesehen des Tages, da der HERR mit euch redete aus dem Feuer auf dem Berge Horeb.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'anthropomorphiten-eigene-tradition',
                  objection: `„Sogar eure eigenen ägyptischen Mönche glaubten, Gott habe eine Menschengestalt. Die Unkörperlichkeit wurde ihnen von oben aufgezwungen."`,
                  objectionBy: 'Historisch-kritischer Einwand',
                  answer: `Das stimmt teilweise und ist ein schönes Beispiel für Ehrlichkeit in der Kirchengeschichte: Um 399 gab es unter einfachen Mönchen in der Sketis die „Anthropomorphiten". Aber die Kirche hat die Frage geprüft, und selbst die betroffenen Mönche wie Abba Serapion wurden durch Argumente aus Schrift und Vernunft überzeugt – nicht durch Gewalt. Das Ergebnis war kein Zwang, sondern eine Läuterung: Gott ist größer als unsere Bilder.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes', ref: 'X,3', status: 'paraphrase', quote: 'Serapion wird durch die Auslegung von Gen 1,26 überzeugt, dass Gott keine menschliche Gestalt hat.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'wechselwirkungsproblem',
      objection: `„Wie soll etwas Nicht-Räumliches und Nicht-Physisches einen Körper bewegen? Schon Elisabeth von der Pfalz hat Descartes das gefragt – und er hatte keine Antwort."`,
      objectionBy: 'Elisabeth von Böhmen (Brief an Descartes, 1643) / Daniel Dennett',
      answer: `Dass wir das *Wie* nicht mechanisch erklären können, zeigt keine Unmöglichkeit. Seit David Hume wissen wir, dass wir auch bei physikalischer Verursachung letztlich nur Regelmäßigkeiten beobachten, nicht das „innere Band". Verursachung braucht keinen Kontakt – auch Felder wirken über Abstände. Und bei Gott geht es nicht um ein Schubsen von außen, sondern darum, dass er die Dinge überhaupt im Dasein hält.`,
      followUps: [
        {
          id: 'energieerhaltung-verletzt',
          objection: `„Wenn ein Geist Materie bewegt, verletzt er den Energieerhaltungssatz. Die Physik ist kausal geschlossen – da ist kein Platz für Geister."`,
          objectionBy: 'Daniel Dennett / Sean Carroll',
          answer: `Der Energieerhaltungssatz gilt für abgeschlossene Systeme. Ob das physikalische Universum in diesem Sinn kausal abgeschlossen ist, ist genau die Frage – das kann man nicht einfach voraussetzen. Der Physiker und Philosoph Robin Collins hat zudem gezeigt, dass Energieerhaltung in der allgemeinen Relativitätstheorie gar nicht global gilt und dass es physikalische Wechselwirkungen ohne Energieübertrag gibt. Die „kausale Geschlossenheit" ist eine metaphysische Annahme, kein Messergebnis.`,
          voices: [
            {
              person: 'robin-collins',
              role: 'als Physiker und Philosoph',
              text: `Collins argumentiert in seinem Beitrag „The Energy of the Soul", dass das Energieargument gegen den Dualismus auf einer zu einfachen Vorstellung von Erhaltungssätzen beruht. In der allgemeinen Relativitätstheorie gibt es keinen allgemein gültigen globalen Energieerhaltungssatz, und Erhaltungssätze folgen aus Symmetrien, die nur für abgeschlossene Systeme gelten. Eine Wechselwirkung zwischen Geist und Materie ist daher physikalisch nicht ausgeschlossen.`,
              sources: [
                { kind: 'fachliteratur', author: 'Robin Collins', work: '„The Energy of the Soul", in: M. Baker & S. Goetz (Hg.), The Soul Hypothesis', year: '2011', status: 'paraphrase', quote: 'Der Energieerhaltungssatz schließt eine Wechselwirkung von Geist und Materie nicht aus.' },
              ],
            },
          ],
          detail: `Siehe „Die Physik ist kausal geschlossen – für Gott oder Seele ist kein Platz".`,
          questionsBack: [`Mit welchem Experiment wurde gezeigt, dass das Universum als Ganzes ein kausal abgeschlossenes System ist?`],
        },
      ],
    },
    {
      id: 'allgegenwart-ohne-ort',
      objection: `„Gott ist ‚überall', aber an keinem Ort – das ist ein Widerspruch. Wo genau ist er denn? Etwas, das nirgends ist, existiert nicht."`,
      objectionBy: 'Michael Martin / populärer Einwand',
      answer: `Allgegenwart heißt nicht, dass Gott wie ein riesiges Gas den Raum füllt. Thomas erklärt: Gott ist in allen Dingen als ihre Ursache – durch seine Macht, seine Gegenwart und sein Wesen. So wie ein Autor in jedem Satz seines Romans „gegenwärtig" ist, ohne ein Teil des Papiers zu sein. Auch die Gesetze der Logik sind „überall" gültig, ohne einen Ort zu haben.`,
      followUps: [
        {
          id: 'dann-pantheismus',
          objection: `„Wenn Gott in allem ist, ist er dann nicht einfach das Universum selbst – Pantheismus? Oder er ist nirgends. Ein Drittes gibt es nicht."`,
          objectionBy: 'Baruch Spinoza (Ethik, 1677, sinngemäß)',
          answer: `Es gibt ein Drittes: Gegenwart als Ursache, nicht als Bestandteil. Das Licht ist im ganzen Raum, ohne der Raum zu sein. Athanasius sagt, der Logos sei in allem und doch außerhalb von allem, „nicht umschlossen". Die Welt ist nicht ein Teil Gottes, sondern sein Werk; sie hängt von ihm ab, er nicht von ihr. Das ist der Unterschied zwischen Schöpfer und Geschöpf.`,
          sources: [
            { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '17', status: 'paraphrase', quote: 'Der Logos ist in allem gegenwärtig und doch außerhalb von allem; er umfasst alles und wird von nichts umfasst.' },
          ],
        },
      ],
    },
    {
      id: 'individuation-geister',
      objection: `„Was unterscheidet zwei körperlose Geister? Bei Menschen haben wir den Körper als Kriterium der Identität. Ohne Körper gibt es kein Kriterium – also keine Identität und keine Person."`,
      objectionBy: 'Terence Penelhum (Survival and Disembodied Existence, 1970) / P. F. Strawson',
      answer: `Bei Gott stellt sich das Problem nicht: Es gibt nur einen Gott, den man von nichts Gleichartigem unterscheiden muss. Und auch bei geschaffenen Geistern verwechselt der Einwand Erkenntniskriterien mit dem Sein: Dass *wir* Personen meist an ihren Körpern erkennen, heißt nicht, dass sie *durch* ihren Körper sie selbst sind. Du weißt von innen, dass du du bist – ohne in den Spiegel zu schauen.`,
      followUps: [
        {
          id: 'unendlicher-geist-gleich-nichts',
          objection: `„Ein unendlicher Geist ohne Grenzen, ohne Form und ohne Körper ist von ‚nichts' nicht mehr zu unterscheiden. Du beschreibst eigentlich das Nichts."`,
          objectionBy: 'Ludwig Feuerbach / Kai Nielsen (sinngemäß)',
          answer: `Das Nichts hat keine Eigenschaften. Gott wird dagegen das Reichste zugeschrieben, was wir kennen: Erkenntnis, Wille, Macht, Güte, Liebe. „Unendlich" heißt nicht „ohne Inhalt", sondern „ohne Mangel". Dass Gott keine *räumlichen* Grenzen hat, macht ihn so wenig zu nichts, wie eine Wahrheit „nichts" ist, nur weil sie keine Farbe und kein Gewicht hat.`,
          questionsBack: [`Hat das Nichts Wissen, Willen und Macht?`],
        },
      ],
    },
    {
      id: 'geist-braucht-komplexitaet',
      objection: `„Ein Geist, der ein Universum entwerfen kann, müsste unvorstellbar komplex sein – noch komplexer als das Universum. Und Komplexität ist genau das, was erklärt werden muss. Ein körperloser Supergeist macht alles nur schlimmer."`,
      objectionBy: 'Richard Dawkins (The God Delusion, Kap. 4)',
      answer: `Dawkins stellt sich Gott wie eine Maschine aus vielen Teilen vor. Ein Geist ist aber nicht aus Teilen zusammengesetzt wie ein Computer – darum ist ein körperloser Geist ja gerade *einfach*. Die Fülle seiner Gedanken ist etwas anderes als eine Komplexität von Bauteilen. Alvin Plantinga hat in seiner Rezension („The Dawkins Confusion") darauf hingewiesen, dass nach klassischer Lehre Gott keine Teile hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: '„The Dawkins Confusion: Naturalism ad absurdum", Books & Culture', year: '2007', status: 'paraphrase', quote: 'Nach klassischem Theismus ist Gott einfach, ohne Teile; Dawkins\' Komplexitätsargument trifft diesen Gott nicht.' },
      ],
      followUps: [
        {
          id: 'einfach-und-allwissend',
          objection: `„Einfach und zugleich allwissend? Das ist ein Widerspruch. Wer unendlich viel weiß, muss unendlich viel ‚speichern'."`,
          objectionBy: 'Richard Dawkins / Graham Oppy (sinngemäß)',
          answer: `„Speichern" ist ein Bild aus der Computertechnik. Auch dein Bewusstsein ist eine Einheit: Du erlebst ein Konzert nicht als Million getrennter Datenpunkte, sondern als ein Ganzes. Die klassische Lehre sagt: Gott erkennt alles, indem er sich selbst als Ursache von allem erkennt – in einem einzigen Akt. Einfachheit heißt „ohne Teile", nicht „arm an Inhalt".`,
          detail: `Edward Feser entfaltet in „Five Proofs of the Existence of God" (2017), Kap. 6, wie die göttliche Einfachheit mit Allwissenheit und Allmacht zusammengeht.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher logische Widerspruch steckt im Begriff „Geist ohne Körper" – nicht nur, was ist daran ungewohnt?`,
    `Brauchst du Augen, um zu wissen, dass 7 + 5 = 12 ist?`,
    `Ist ein Gefühl von Schmerz dasselbe wie das Feuern bestimmter Neuronen – oder etwas, das damit einhergeht?`,
    `Wenn schon dein eigenes Bewusstsein nicht vollständig physikalisch erklärbar ist – warum sollte ein rein geistiges Wesen absurd sein?`,
  ],
  avoid: [
    `Gott als „Energie" oder „Kraftfeld" beschreiben – das ist physikalisch und damit gerade körperlich gedacht.`,
    `Nahtoderfahrungen als „Beweis" für körperlose Geister anführen. Sie sind höchstens ein Indiz und hier nicht nötig.`,
    `„Gott hat einen geistigen Körper" sagen, um den Einwand zu umgehen – das vermischt die Lehre von der Auferstehung des Menschen mit der Gotteslehre.`,
  ],
  concessions: [
    `Wir haben keine Erfahrung eines körperlosen Geistes; die Kohärenz des Begriffs wird durch Gedankenexperimente und philosophische Analyse gestützt, nicht durch Beobachtung.`,
    `Das Wechselwirkungsproblem des Dualismus ist ernst; es gibt Antworten, aber kein allgemein akzeptiertes Modell.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Coherence of Theism', year: '2. Aufl. 2016', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Charles Taliaferro', work: 'Consciousness and the Mind of God', year: '1994', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'Consciousness and the Existence of God', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Mark C. Baker & Stewart Goetz (Hg.)', work: 'The Soul Hypothesis', year: '2011', status: 'paraphrase' },
    { kind: 'gegner', author: 'Gilbert Ryle', work: 'The Concept of Mind', year: '1949', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Geist', 'Dualismus', 'Allgegenwart', 'Swinburne', 'Bewusstsein', 'Anthropomorphiten'],
  related: [
    'naturalismus/bewusstsein-materiell-erklaerbar',
    'naturalismus/nur-materie',
    'neurowissenschaften/geist-gleich-gehirn',
    'physik/physik-kausal-geschlossen',
    'tod-seele-auferstehung/nach-dem-tod-nichts',
    'atheismus/wer-schuf-gott',
  ],
};

export default claim;
