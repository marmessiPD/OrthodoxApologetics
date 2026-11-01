import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'aussergewoehnliche-belege',
  title: `„Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege."`,
  proponents: [
    { name: 'Carl Sagan', role: 'Astronom und Wissenschaftspublizist, Cornell University', work: 'Broca\'s Brain (1979); Fernsehserie Cosmos (1980)' },
    { name: 'Marcello Truzzi', role: 'Soziologe, Mitbegründer von CSICOP', work: '„On the Extraordinary: An Attempt at Clarification", Zetetic Scholar 1/1 (1978)' },
    { name: 'David Hume', role: 'Philosoph der schottischen Aufklärung', work: 'An Enquiry Concerning Human Understanding (1748), Abschnitt X „Of Miracles"' },
    { name: 'Michael Shermer', role: 'Wissenschaftshistoriker, Herausgeber des Skeptic Magazine', work: 'Why People Believe Weird Things (1997)' },
    { name: 'Richard Carrier', role: 'Althistoriker, Bayes-Theoretiker', work: 'Proving History (2012)' },
  ],
  steelman: `Wie stark ein Beleg sein muss, hängt davon ab, wie unwahrscheinlich die Behauptung im Licht unseres Hintergrundwissens ist. Wenn mir jemand erzählt, er habe einen Hund, genügt sein Wort; behauptet er, er habe einen Drachen in der Garage, genügt es nicht. Hume hat das präzise gemacht: Ein weiser Mensch richtet seinen Glauben nach der Beweislage. Dass Tote tot bleiben, ist durch die einheitliche Erfahrung von Milliarden Menschen bestätigt; dass Zeugen sich irren, übertreiben, lügen oder Legenden ausschmücken, ist ebenso tausendfach belegt. Also ist es immer wahrscheinlicher, dass ein Wunderbericht falsch ist, als dass das Wunder geschah. In Bayes'scher Sprache: Die Vorwahrscheinlichkeit einer Auferstehung ist so verschwindend klein, dass ein paar Berichte aus dem 1. Jahrhundert sie niemals aufwiegen können. Die Behauptung „Jesus ist von den Toten auferstanden" ist die außergewöhnlichste, die es gibt – und die Belege dafür sind antike, religiös motivierte Texte.`,
  biblical: {
    summary: `Das Neue Testament weiß selbst, wie außergewöhnlich seine Botschaft ist: Die Jünger hielten die Berichte der Frauen zunächst für „Märlein" (Lk 24,11), Thomas verlangte handfeste Prüfung (Joh 20,25). Die Antwort waren keine Appelle an Gefühle, sondern Begegnungen, Berührung, gemeinsames Essen und „mancherlei Erweisungen" über vierzig Tage (Lk 24,39–43; Apg 1,3). Lukas schreibt ausdrücklich als Historiker, damit Theophilus „gewissen Grund" erfahre (Lk 1,1–4).`,
    detail: `- **Lk 24,11:** Die Skepsis der Jünger wird nicht verschwiegen – ein Zug, der in einer erfundenen Heldengeschichte kaum zu erwarten wäre.
- **Apg 1,3:** Das griechische *tekmērion* ist ein Fachbegriff der antiken Rhetorik und Geschichtsschreibung für einen zwingenden Beweis, ein sicheres Kennzeichen (Aristoteles verwendet es so).
- **Lk 1,1–4:** Lukas nennt Augenzeugen (*autoptai*), sorgfältige Nachforschung „von Anbeginn" und das Ziel der *asphaleia* – Zuverlässigkeit, Gewissheit.
- **1 Kor 15,6:** „deren noch viele leben" – Paulus lädt um 55 n. Chr. faktisch dazu ein, die Zeugen zu befragen.`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '24,11', quote: `Und es deuchten sie ihre Worte eben, als wären's Märlein, und sie glaubten ihnen nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '24,39', quote: `Sehet meine Hände und meine Füße: ich bin's selber. Fühlet mich und sehet; denn ein Geist hat nicht Fleisch und Bein, wie ihr sehet, daß ich habe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,3', quote: `welchen er sich nach seinem Leiden lebendig erzeigt hatte durch mancherlei Erweisungen, und ließ sich sehen unter ihnen vierzig Tage lang und redete mit ihnen vom Reich Gottes.`, original: 'οἷς καὶ παρέστησεν ἑαυτὸν ζῶντα μετὰ τὸ παθεῖν αὐτὸν ἐν πολλοῖς τεκμηρίοις', translation: 'Luther 1912', status: 'verbatim', note: 'tekmērion: in der antiken Rhetorik ein sicheres, zwingendes Beweiszeichen.' },
      { kind: 'bibel', work: 'Lukas', ref: '1,1–4', quote: `Sintemal sich's viele unterwunden haben, Bericht zu geben von den Geschichten, so unter uns ergangen sind, wie uns das gegeben haben, die es von Anfang selbst gesehen und Diener des Worts gewesen sind: habe ich's auch für gut angesehen, nachdem ich's alles von Anbeginn erkundet habe, daß ich's dir, mein guter Theophilus, in Ordnung schriebe, auf daß du gewissen Grund erfahrest der Lehre, in welcher du unterrichtet bist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Schon im 2. Jahrhundert brachte der Philosoph Kelsos die Einwände vor, die heute unter dem Schlagwort ECREE laufen: Die Auferstehungsberichte stammten von einer „halb wahnsinnigen Frau" und leichtgläubigen Anhängern, die träumten oder sich etwas einbildeten. Origenes antwortet ausführlich: Halluzinationen hätten nicht viele Menschen zugleich ergriffen; die Jünger hätten sich für eine Einbildung nicht in Lebensgefahr begeben; und die verwandelnde Wirkung der Botschaft in der ganzen Welt sei selbst ein Zeugnis. Athanasius argumentiert ähnlich: Dass der Tod in den Christen seine Macht verloren hat, zeigt, dass Christus lebt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'II,55–63', status: 'paraphrase', quote: 'Antwort auf Kelsos\' These, die Auferstehung beruhe auf der Einbildung einer erregten Frau und leichtgläubiger Jünger: Die Jünger setzten ihr Leben für ihr Zeugnis ein, was bei einer Erfindung unverständlich wäre.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '27–30', status: 'paraphrase', quote: 'Dass Christen den Tod nicht mehr fürchten, zeigt die Wirklichkeit der Auferstehung.' },
    ],
  },
  opposingView: {
    summary: `Der Gedanke geht auf Humes Wunderkritik (1748) und Laplace zurück („Je außergewöhnlicher eine Tatsache ist, desto stärkerer Beweise bedarf sie"). Marcello Truzzi formulierte 1978 „An extraordinary claim requires extraordinary proof"; Carl Sagan machte die Fassung mit „evidence" populär. In der Wahrscheinlichkeitstheorie hat der Satz einen wahren Kern (die Vorwahrscheinlichkeit zählt), ist aber als Schlagwort unscharf: Sagan hat nie definiert, was „außergewöhnlich" heißt. Der Wissenschaftsphilosoph John Earman, kein Apologet, hat Humes Wunderargument als probabilistisch unhaltbar kritisiert.`,
    detail: `Earman zeigt in „Hume's Abject Failure" (2000), dass Humes Argument die Bayes'sche Struktur verfehlt: Mehrere voneinander unabhängige Zeugen können auch eine sehr geringe Vorwahrscheinlichkeit aufwiegen, weil sich die Beweiskraft unabhängiger Zeugnisse multipliziert. Damit ist nicht gesagt, dass ein bestimmtes Wunder geschehen ist – wohl aber, dass Wunder nicht *grundsätzlich* unbelegbar sind. Die eigentliche Streitfrage verlagert sich auf die Vorwahrscheinlichkeit, und die hängt davon ab, ob es Gott gibt.`,
    sources: [
      { kind: 'gegner', author: 'David Hume', work: 'An Enquiry Concerning Human Understanding', year: '1748', ref: 'Abschnitt X, Teil I', quote: `A wise man, therefore, proportions his belief to the evidence.`, status: 'verbatim' },
      { kind: 'gegner', author: 'Pierre-Simon Laplace', work: 'Essai philosophique sur les probabilités', year: '1814', quote: `Je außergewöhnlicher eine Tatsache ist, desto mehr bedarf sie starker Beweise.`, original: `plus un fait est extraordinaire, plus il a besoin d'être appuyé de fortes preuves`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Marcello Truzzi', work: '„On the Extraordinary: An Attempt at Clarification", Zetetic Scholar 1/1', year: '1978', ref: 'S. 11', quote: `An extraordinary claim requires extraordinary proof.`, status: 'paraphrase', note: 'Sagan übernahm die Formel mit „evidence" (Broca\'s Brain 1979; Cosmos 1980).' },
      { kind: 'fachliteratur', author: 'John Earman', work: 'Hume\'s Abject Failure: The Argument Against Miracles', year: '2000', status: 'paraphrase', quote: 'Humes Argument scheitert probabilistisch; mehrere unabhängige Zeugnisse können eine geringe Vorwahrscheinlichkeit aufwiegen.', note: 'Earman ist Wissenschaftsphilosoph (Pittsburgh) und kein christlicher Apologet.' },
    ],
  },
  quickAnswer: `Im Kern stimmt das: Je unwahrscheinlicher etwas ist, desto bessere Belege braucht es. Aber „außergewöhnlich" ist hier zweideutig. Dass ein Toter *von selbst* aufersteht, ist extrem unwahrscheinlich – das behauptet aber niemand. Die Behauptung lautet: *Gott* hat Jesus auferweckt. Wie wahrscheinlich das ist, hängt davon ab, ob es Gott gibt. Außerdem belegen wir sehr unwahrscheinliche Ereignisse ständig mit gewöhnlichen Belegen – etwa die Lottozahlen von gestern. Und die Belege für die Auferstehung sind tatsächlich bemerkenswert: früh, vielfach bezeugt, von bekehrten Gegnern getragen.`,
  keyPoints: [
    `**Zweideutiges Schlagwort:** „Außergewöhnlich" kann heißen „selten", „naturgesetzlich unmöglich" oder „im Licht aller Belege unwahrscheinlich". Nur im letzten Sinn ist der Satz ein gültiges Prinzip – und dann hängt alles vom Hintergrundwissen ab.`,
    `**Die Vorwahrscheinlichkeit hängt an Gott:** Gibt es Gott, und hatte er Grund, Jesus zu bestätigen, ist die Auferstehung nicht absurd. Darum gehört sie in den Gesamtfall für Gott.`,
    `**Unwahrscheinliches wird gewöhnlich belegt:** Eine bestimmte Lottoziehung ist extrem unwahrscheinlich, doch eine Zeitungsmeldung genügt. Entscheidend ist, wie unwahrscheinlich die *Belege* wären, wenn die Behauptung falsch wäre.`,
    `**Unabhängige Zeugen multiplizieren Beweiskraft:** Selbst der Wissenschaftsphilosoph John Earman, kein Apologet, nennt Humes Argument ein „abject failure".`,
    `**Die Belege sind bemerkenswert:** Das Bekenntnis 1 Kor 15,3–7 stammt aus den ersten Jahren; Gegner wie Paulus und Jakobus wurden zu Zeugen; das leere Grab wurde von den Gegnern nicht bestritten; die Jünger litten für ihre Aussage.`,
    `**Torpfosten:** Wer kein Beleg je als „außergewöhnlich genug" gelten lässt, hat die Frage durch Definition entschieden, nicht durch Prüfung.`,
  ],
  argument: {
    name: 'Bayes\'sche Struktur der Auferstehungsfrage',
    summary: 'Ob ein Beleg „ausreicht", hängt vom Verhältnis zweier Wahrscheinlichkeiten ab – nicht von einem Schlagwort.',
    premises: [
      {
        text: 'P1: Die Vorwahrscheinlichkeit, dass Gott Jesus auferweckte, ist nicht verschwindend gering, wenn es Gott gibt und Jesus göttliche Vollmacht beanspruchte.',
        support: `Die relevante Vergleichsklasse ist nicht „ein beliebiger Mensch", sondern „ein Mensch, der beanspruchte, im Namen Gottes zu handeln, seinen Tod und seine Rechtfertigung ankündigte, und den ein existierender Gott bestätigen wollte". Die anderen Gottesargumente stützen, dass es Gott gibt.`,
      },
      {
        text: 'P2: Die bekannten Befunde (leeres Grab, Erscheinungen vor Einzelnen und Gruppen, Bekehrung von Skeptikern, plötzliche Entstehung des Auferstehungsglaubens unter Juden) wären äußerst unwahrscheinlich, wenn Jesus nicht auferstanden wäre.',
        support: `Keine natürliche Erklärung – Halluzination, Diebstahl, falsches Grab, Scheintod, Legende – erklärt alle Befunde zugleich; jede muss Zusatzannahmen einführen. Siehe die Claims im Topic „Auferstehung".`,
      },
      {
        text: 'P3: Nach dem Satz von Bayes kann eine Hypothese mit mäßiger Vorwahrscheinlichkeit sehr wahrscheinlich werden, wenn die Belege unter ihrer Verneinung sehr unwahrscheinlich sind.',
        support: `Das ist mathematisch unstrittig. Earman hat gezeigt, dass Hume diese Struktur verfehlt.`,
        sources: [
          { kind: 'fachliteratur', author: 'John Earman', work: 'Hume\'s Abject Failure', year: '2000', status: 'paraphrase', quote: 'Humes Argument berücksichtigt nicht, dass unabhängige Zeugnisse sich in ihrer Beweiskraft verstärken.' },
        ],
      },
    ],
    conclusion: 'Also ist die Auferstehung nicht grundsätzlich unbelegbar; ob sie wahrscheinlich ist, entscheidet sich an der Gesamtevidenz für Gott und an den konkreten historischen Befunden.',
  },
  voices: [
    {
      person: 'lukas',
      role: 'als antiker Historiker',
      text: `Lukas stellt sich bewusst in die Tradition der antiken Geschichtsschreibung: Er beruft sich auf Augenzeugen, hat „alles von Anbeginn erkundet" und schreibt, damit sein Leser Gewissheit über das Gelehrte erhält. Für die Auferstehung verwendet er das Wort *tekmēria* – in der antiken Rhetorik der Begriff für zwingende Beweiszeichen. Er verschweigt die anfängliche Skepsis der Jünger nicht und berichtet, wie der Auferstandene sie aufforderte, ihn zu berühren, und vor ihren Augen aß. Lukas weiß also, dass seine Behauptung außergewöhnlich ist – und antwortet mit außergewöhnlich konkreten Belegen.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '1,1–4; 24,36–43', status: 'paraphrase', quote: 'Historisches Proömium; Berührung und Mahlzeit des Auferstandenen.' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Wahrscheinlichkeitstheoretiker der Religion',
      text: `Swinburne hat in „The Resurrection of God Incarnate" (2003) die Auferstehungsfrage ausdrücklich im Rahmen des Satzes von Bayes behandelt. Seine Pointe: Die Vorwahrscheinlichkeit hängt vom Hintergrundwissen ab. Wenn es Gott gibt – wofür die natürliche Theologie spricht – und wenn Gott Grund hat, Mensch zu werden, das Leid zu teilen und sein Leben durch ein Zeichen zu bestätigen, dann ist eine Auferstehung genau das, was zu erwarten wäre. Zusammen mit den historischen Befunden ergibt sich nach seiner Rechnung eine hohe Wahrscheinlichkeit der Auferstehung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Resurrection of God Incarnate', year: '2003', status: 'paraphrase', quote: 'Bayes\'sche Abwägung: Mit dem Hintergrund der natürlichen Theologie und den historischen Befunden ist die Auferstehung hoch wahrscheinlich.' },
      ],
    },
    {
      person: 'habermas',
      role: 'als Historiker der Auferstehungsforschung',
      text: `Habermas hat die Fachliteratur über die Auferstehung seit 1975 systematisch ausgewertet und daraus die „Minimal Facts" gewonnen: Tatsachen, die von der großen Mehrheit kritischer Forscher – auch skeptischer – anerkannt werden. Dazu gehören Jesu Tod durch Kreuzigung, die Überzeugung der Jünger, ihm begegnet zu sein, die Bekehrung des Verfolgers Paulus und des skeptischen Herrenbruders Jakobus sowie die sehr frühe Verkündigung der Auferstehung. Diese Fakten sind nicht „außergewöhnlich" belegt, sondern so gut wie viele andere anerkannte Tatsachen der Antike – und sie verlangen nach einer Erklärung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gary R. Habermas & Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase', quote: 'Minimal-Facts-Methode: Fakten, die auch von skeptischen Forschern weithin anerkannt werden.' },
      ],
    },
    {
      person: 'origenes',
      role: 'als Antwortgeber auf Kelsos',
      text: `Kelsos warf den Christen vor, ihre Auferstehung beruhe auf der Aussage einer hysterischen Frau und auf Träumen leichtgläubiger Anhänger. Origenes nimmt den Einwand ernst und antwortet mit einer Prüfung der Plausibilität: Eine Einbildung ergreife nicht viele Menschen zugleich und mehrfach; Menschen gingen für eine selbst erdachte Geschichte nicht in Verfolgung und Tod; und die Lehre der Jünger habe in kurzer Zeit die Welt verändert. Origenes behandelt die Auferstehung also nicht als Gefühlssache, sondern als Frage nach der besten Erklärung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'II,55–67', status: 'paraphrase', quote: 'Prüfung von Kelsos\' Halluzinations- und Betrugsthese.' },
      ],
    },
    {
      person: 'craig',
      role: 'als Philosoph und Historiker der Auferstehungsdebatte',
      text: `Craig hält Humes Argument in seiner klassischen Form für gescheitert, weil es die Wahrscheinlichkeit des Wunders mit der Wahrscheinlichkeit verwechsle, dass die Belege vorlägen, wenn das Wunder nicht geschehen wäre. In seinen Debatten (u. a. mit Bart Ehrman 2006) betont er, dass die Hypothese „Gott hat Jesus auferweckt" nicht unwahrscheinlich gegenüber den Naturgesetzen ist, sondern nur gegenüber der Annahme, dass es keinen Gott gibt. Wer die Auferstehung ausschließt, weil Gott nicht existiert, begründe die Gottesfrage nicht historisch, sondern setze sie voraus.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', year: '3. Aufl. 2008', ref: 'Kap. 8 (Wunder) und 9 (Auferstehung)', status: 'paraphrase', quote: 'Kritik an Humes Wunderargument; die Auferstehungshypothese ist nur relativ zum Atheismus unwahrscheinlich.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'auferstehung-ausergewoehnlichste',
      objection: `„Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege. Eine Auferstehung von den Toten ist die außergewöhnlichste Behauptung überhaupt – ein paar antike Texte reichen dafür niemals."`,
      objectionBy: 'Matt Dillahunty / Michael Shermer',
      answer: `Im Kern stimme ich zu: Unwahrscheinliches braucht gute Belege. Aber dass ein Toter *von selbst* aufsteht, behauptet niemand – die Behauptung ist, dass Gott Jesus auferweckt hat. Wie wahrscheinlich das ist, hängt davon ab, ob es Gott gibt. Und entscheidend ist nicht, wie selten ein Ereignis ist, sondern wie unwahrscheinlich die Belege wären, wenn es *nicht* geschehen wäre. Die Lottozahlen von gestern sind extrem unwahrscheinlich – trotzdem glaubst du der Zeitung.`,
      questionsBack: [`Welchen konkreten Beleg würdest du als „außergewöhnlich genug" akzeptieren – und gibt es ihn für irgendein Ereignis der Antike?`],
      followUps: [
        {
          id: 'hume-einheitliche-erfahrung',
          objection: `„Hume hat recht: Die einheitliche Erfahrung der Menschheit zeigt, dass Tote tot bleiben. Das ist der stärkste denkbare Beleg gegen jedes Wunder."`,
          objectionBy: 'David Hume (Enquiry X), vertreten von Graham Oppy',
          answer: `Die Erfahrung ist nur dann „einheitlich", wenn alle Wunderberichte falsch sind – genau das ist aber die Frage. Hume setzt also voraus, was er beweisen will. Christen bestreiten auch nicht, dass Tote natürlicherweise tot bleiben – gerade deshalb ist die Auferstehung ein Zeichen. Selbst der Wissenschaftsphilosoph John Earman, kein Christ, nennt Humes Argument ein „abject failure", weil mehrere unabhängige Zeugen auch eine geringe Vorwahrscheinlichkeit aufwiegen können.`,
          followUps: [
            {
              id: 'zeugen-irren-eher',
              objection: `„Es ist immer wahrscheinlicher, dass Zeugen sich irren oder lügen, als dass ein Naturgesetz durchbrochen wird."`,
              objectionBy: 'Richard Carrier',
              answer: `„Immer" ist hier ein Glaubenssatz. Im konkreten Fall muss eine Irrtums- oder Lügenhypothese *alle* Befunde erklären: das leere Grab, die Erscheinungen vor Einzelnen und Gruppen, die Bekehrung von Skeptikern, die Bereitschaft zu leiden. Jede natürliche Erklärung scheitert an einem dieser Punkte. Außerdem „durchbricht" ein Wunder kein Naturgesetz: Naturgesetze beschreiben, was geschieht, wenn nichts von außen eingreift – sie verbieten nicht, dass Gott handelt.`,
              detail: `Siehe „Wunder verletzen die Naturgesetze" und „Die Jünger hatten Halluzinationen".`,
              followUps: [
                {
                  id: 'lieber-ich-weiss-es-nicht',
                  objection: `„Selbst wenn ich keine natürliche Erklärung finde: ‚Ich weiß es nicht' ist ehrlicher als ‚Gott hat es getan'."`,
                  objectionBy: 'Matt Dillahunty',
                  answer: `„Ich weiß es nicht" ist als vorläufige Haltung völlig in Ordnung. Aber wenn alle natürlichen Erklärungen seit zweihundert Jahren scheitern und das Ereignis genau in einen religiösen Zusammenhang passt – Jesus kündigte es an und beanspruchte göttliche Vollmacht –, dann ist die dauerhafte Weigerung, die naheliegende Erklärung auch nur zu erwägen, keine Ehrlichkeit mehr, sondern eine weltanschauliche Vorentscheidung.`,
                  questionsBack: [`Gibt es irgendeine Beweislage, bei der du „Gott hat es getan" als Erklärung zulassen würdest?`],
                },
              ],
            },
          ],
        },
        {
          id: 'video-beweis',
          objection: `„Gib mir eine Videoaufnahme oder eine Untersuchung durch Ärzte, dann glaube ich es."`,
          objectionBy: 'Häufiger Einwand',
          answer: `Für kein Ereignis der Antike haben wir Videos – nicht für Caesars Ermordung, nicht für Alexanders Feldzüge. Videos ließen sich übrigens heute leicht fälschen. Der Maßstab, den du verlangst, würde die gesamte Alte Geschichte auslöschen. Historiker arbeiten mit Quellen, deren Alter, Unabhängigkeit und Glaubwürdigkeit sie prüfen – und nach diesen Maßstäben sind die Quellen über Jesus ungewöhnlich gut.`,
          followUps: [
            {
              id: 'bei-caesar-kein-wunder',
              objection: `„Bei Caesar behauptet aber auch niemand ein Wunder. Deshalb genügen dort normale Quellen."`,
              objectionBy: 'Bart Ehrman (sinngemäß)',
              answer: `Genau – damit gibst du zu, dass das Problem nicht die Qualität der Quellen ist, sondern die Vorwahrscheinlichkeit. Und die hängt an der Frage, ob es Gott gibt. Darum kann man die Auferstehung nicht isoliert betrachten: Wenn das Universum einen Schöpfer hat, ist ein Handeln dieses Schöpfers in der Geschichte nicht absurd. Der historische und der philosophische Fall gehören zusammen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'wunderberichte-ueberall-sai-baba',
      objection: `„Wunderberichte gibt es überall: Sai Baba, Marienerscheinungen, die Zeugen des Buches Mormon. Wenn du die Auferstehung akzeptierst, musst du all das auch akzeptieren."`,
      objectionBy: 'Richard Carrier / Alex O\'Connor',
      answer: `Nein – jeder Bericht verdient eine eigene Prüfung nach denselben Maßstäben: Wie früh sind die Quellen? Wie viele unabhängige Zeugen gibt es? Gibt es feindliche Bestätigungen? Gab es Motive für Täuschung? Bei Sai Baba gibt es dokumentierte Taschenspielertricks; bei Joseph Smith ist die Geschichte der Zeugen problematisch. Christen müssen übrigens nicht alle anderen außergewöhnlichen Ereignisse für Lüge halten – sie müssen nur zeigen, dass die Auferstehung besonders gut belegt ist.`,
      detail: `Zum Buch Mormon siehe „Das Buch Mormon ist ein historisch wahres Zeugnis". Die koptische Kirche kennt selbst gut bezeugte außergewöhnliche Ereignisse (z. B. Zeitoun 1968), behandelt sie aber nicht als Grundlage des Glaubens; siehe „Die Marienerscheinungen von Zeitoun (1968) waren Massenhysterie".`,
      followUps: [
        {
          id: 'evangelien-nicht-frueh',
          objection: `„Die Evangelien sind aber weder früh noch unabhängig – sie entstanden Jahrzehnte später und schreiben voneinander ab."`,
          objectionBy: 'Bart Ehrman',
          answer: `Die älteste Quelle ist nicht ein Evangelium, sondern das Bekenntnis in 1 Kor 15,3–7, das Paulus nach eigenen Worten „empfangen" hat. Die Mehrheit der Forscher, auch skeptische wie Gerd Lüdemann, datiert es in die ersten Jahre nach der Kreuzigung. Paulus selbst traf Petrus und Jakobus in Jerusalem (Gal 1,18–19). Für antike Verhältnisse ist das außergewöhnlich früh – viel früher als die Hauptquellen über Alexander den Großen.`,
          detail: `Siehe „Die Evangelien wurden spät und von anonymen Autoren geschrieben".`,
        },
      ],
    },
    {
      id: 'bayes-prior-winzig',
      objection: `„Rechne es mit Bayes: Von über hundert Milliarden Menschen, die je gelebt haben, ist keiner nachweislich auferstanden. Die Vorwahrscheinlichkeit ist so winzig, dass keine antike Evidenz sie aufwiegen kann."`,
      objectionBy: 'Richard Carrier / Jeffery Jay Lowder',
      answer: `Die Wahl der Vergleichsklasse entscheidet hier alles. Jesus ist kein beliebiger Mensch, sondern einer, der göttliche Vollmacht beanspruchte, seinen Tod und seine Rechtfertigung ankündigte und dessen Wirkung die Geschichte veränderte. Die relevante Frage ist: Wie wahrscheinlich ist es, dass ein existierender Gott *diesen* Menschen bestätigt? Und Bayes hat zwei Seiten: Wenn die Befunde unter der Annahme „keine Auferstehung" äußerst unwahrscheinlich sind, kann auch eine niedrige Vorwahrscheinlichkeit überwunden werden.`,
      followUps: [
        {
          id: 'zeugen-nicht-unabhaengig',
          objection: `„Aber deine Zeugen sind nicht unabhängig – sie waren alle Christen."`,
          objectionBy: 'Richard Carrier',
          answer: `Sie wurden Christen *wegen* dessen, was sie erlebten – das gilt besonders für Paulus, den Verfolger, und für Jakobus, den skeptischen Bruder Jesu. Ihre Bekehrung ist Teil des Belegs, nicht ein Grund, ihn abzuwerten. Zeugen zu verlangen, die den Auferstandenen gesehen haben und trotzdem Ungläubige blieben, ist ein unerfüllbarer Maßstab: Wer ihn wirklich gesehen hätte, wäre eben kein Ungläubiger geblieben.`,
          questionsBack: [`Was hätte Paulus erleben müssen, damit du sein Zeugnis als unabhängig gelten lässt?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was genau meinst du mit „außergewöhnlich" – selten, naturgesetzlich unmöglich oder unwahrscheinlich im Licht aller Belege?`,
    `Welcher konkrete Beleg wäre für dich außergewöhnlich genug – und gibt es ihn für irgendein antikes Ereignis?`,
    `Wenn es Gott gäbe: Wäre es dann noch so unwahrscheinlich, dass er Jesus auferweckt?`,
    `Welche natürliche Erklärung erklärt *alle* Befunde zur Auferstehung zugleich?`,
  ],
  avoid: [
    `„Der Satz ist Unsinn." – Er hat einen wahren Kern. Erkenne ihn an und zeige dann die Zweideutigkeit.`,
    `Unbelegte Wunderberichte (Internetvideos, Kettenbriefe) als Beweise anführen – das schadet der Glaubwürdigkeit.`,
    `„Der Glaube braucht keine Belege." – Damit gibst du dem Gegenüber recht, dass Christen ohne Gründe glauben.`,
  ],
  concessions: [
    `Unwahrscheinliche Behauptungen brauchen bessere Belege als alltägliche – das ist ein vernünftiger Grundsatz.`,
    `Menschen irren sich, übertreiben und schmücken aus; viele Wunderberichte – auch christliche – halten einer Prüfung nicht stand.`,
    `Die Quellen zur Auferstehung sind religiöse Texte; das ist für die historische Bewertung zu berücksichtigen, macht sie aber nicht automatisch unglaubwürdig.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John Earman', work: 'Hume\'s Abject Failure: The Argument Against Miracles', year: '2000', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Resurrection of God Incarnate', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gary R. Habermas & Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['ECREE', 'Hume', 'Wunder', 'Bayes', 'Auferstehung', 'Sagan'],
  related: [
    'atheismus/keine-beweise-fuer-gott',
    'auferstehung/wunder-historisch-unmoeglich',
    'auferstehung/halluzinationen',
    'auferstehung/legende-entwickelte-sich',
    'physik/wunder-verletzen-naturgesetze',
    'medizin-wunder/keine-belegten-wunder',
    'mormonen/buch-mormon-historisch',
    'neues-testament/evangelien-spaet-anonym',
  ],
};

export default claim;
