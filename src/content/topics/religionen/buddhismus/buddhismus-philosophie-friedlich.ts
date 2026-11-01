import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'buddhismus-philosophie-friedlich',
  title: `„Buddhismus ist keine Religion, sondern eine friedliche Philosophie."`,
  proponents: [
    { name: 'Stephen Batchelor', role: 'Säkularer buddhistischer Lehrer', work: 'Buddhism Without Beliefs (1997)' },
    { name: 'Tenzin Gyatso, der 14. Dalai Lama', role: 'Oberhaupt des tibetischen Buddhismus, Friedensnobelpreis 1989', work: 'The Universe in a Single Atom (2005)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Essay „Killing the Buddha" (Shambhala Sun, 2006)' },
    { name: 'Thich Nhat Hanh', role: 'Zen-Mönch, Begründer des „engagierten Buddhismus"', work: 'Being Peace (1987)' },
  ],
  steelman: `Der Buddhismus kennt keinen Schöpfergott, keine Offenbarung, kein Dogma, das man blind glauben muss. Der Buddha selbst sagte den Kalamern: Glaubt nichts, nur weil es überliefert oder in Schriften steht – prüft selbst, was heilsam ist (AN 3,65). Er lehrte eine praktische Psychologie des Geistes: wie Leid entsteht und wie es endet. Die erste Übungsregel verbietet das Töten; Gewaltlosigkeit und Mitgefühl mit allen Wesen stehen im Zentrum. Der Buddhismus hat sich friedlich über Asien ausgebreitet, ohne Kreuzzüge und Inquisition. Sein bekanntestes Gesicht, der Dalai Lama, erhielt den Friedensnobelpreis und sagt, der Buddhismus werde jede Lehre aufgeben, die die Wissenschaft widerlegt. Das ist eher eine Philosophie der Vernunft als eine Religion.`,
  biblical: {
    summary: `Die Frage, ob eine Lehre „Religion" oder „Philosophie" heißt, entscheidet nicht über ihre Wahrheit. Auch das Christentum ruft zu Frieden und Feindesliebe (Mt 5,9.44; Röm 12,18) und zu kritischer Prüfung („Prüfet aber alles, und das Gute behaltet", 1 Thess 5,21). Jesus verbot seinen Jüngern die Gewalt in seinem Namen (Mt 26,52). Die Bibel misst eine Bewegung nicht an ihrem Selbstbild, sondern an ihren Früchten (Mt 7,16) – und vor allem an der Wahrheit über Gott und den Menschen (Joh 8,32).`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '5,9', quote: `Selig sind die Friedfertigen; denn sie werden Gottes Kinder heißen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '26,52', quote: `Da sprach Jesus zu ihm: Stecke dein Schwert an seinen Ort! denn wer das Schwert nimmt, der soll durchs Schwert umkommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '5,21', quote: `Prüfet aber alles, und das Gute behaltet.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche versteht sich als Kirche der Märtyrer: Ihr Kalender zählt die Jahre seit 284 n. Chr., dem Beginn der Diokletianischen Verfolgung („Ära der Märtyrer"). Ihr Zeugnis war nicht das Schwert, sondern das Blut der Bekenner und das Gebet für die Verfolger. Schon Justin der Märtyrer schrieb um 155, dass Menschen, die einander früher hassten, durch Christus nun zusammenleben und für ihre Feinde beten. Friedfertigkeit ist für Christen kein Alleinstellungsmerkmal einer Religion, sondern Frucht der Nachfolge Christi.`,
    sources: [
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '14', year: 'ca. 155', quote: `Wir, die wir einander hassten und töteten und mit Menschen anderen Stammes wegen ihrer Sitten nicht zusammenleben wollten, leben jetzt seit dem Erscheinen Christi mit ihnen zusammen und beten für unsere Feinde.`, status: 'paraphrase' },
      { kind: 'koptisch', work: 'Koptischer Kalender (Anno Martyrum)', quote: `Die koptische Jahreszählung beginnt mit dem Jahr 284 n. Chr., dem Regierungsantritt Diokletians, zur Erinnerung an die Märtyrer.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Für rund eine halbe Milliarde Menschen in Asien ist der Buddhismus eine Religion im vollen Sinn: mit Wiedergeburt und Karma, Himmeln und Höllen, Göttern (Devas), Reliquienverehrung, Opfergaben, Gebeten zu Bodhisattvas wie Avalokiteshvara (Guanyin), dem Vertrauen auf Amida im Reinen Land und Mönchsgelübden. Die Erleuchtungserzählung selbst enthält übernatürliche Erkenntnisse (Erinnerung an frühere Leben, Schau der Wiedergeburt der Wesen; MN 36). Das westliche Bild eines rein rationalen, säkularen Buddhismus ist nach Buddhologen wie Donald Lopez und David McMahan eine moderne Konstruktion. Auch Gewalt im Namen des Buddhismus ist historisch belegt.`,
    detail: `- **Japan:** Der Zen-Priester und Forscher Brian Victoria dokumentierte in *Zen at War* (1997), wie führende Zen-Meister den japanischen Militarismus bis 1945 religiös unterstützten.
- **Myanmar:** Der Mönch Ashin Wirathu (969-Bewegung) hetzte gegen Muslime; das Time Magazine titelte 2013 „The Face of Buddhist Terror". Nach der Gewalt gegen die Rohingya ab August 2017 flohen über 700.000 Menschen nach Bangladesch.
- **Sri Lanka:** Die buddhistische Chronik *Mahavamsa* erzählt, wie Arahants den König Dutthagamani nach seinem Krieg gegen die Tamilen trösteten: Er habe nur „anderthalb Menschen" getötet, die übrigen seien wie Tiere zu achten. Nationalistische Mönchsgruppen (Bodu Bala Sena) waren an antimuslimischen Ausschreitungen beteiligt (z. B. Aluthgama 2014).
- **Fairness:** Diese Gewalt widerspricht der Lehre des Buddha – wie die Kreuzzüge der Lehre Christi widersprechen. Gerade deshalb taugt „Friedlichkeit" nicht als Unterscheidungsmerkmal.`,
    sources: [
      { kind: 'fachliteratur', author: 'Brian Daizen Victoria', work: 'Zen at War', year: '1997; 2. Aufl. 2006', status: 'paraphrase', quote: `Dokumentation der Unterstützung des japanischen Militarismus durch führende Zen-Meister.`, note: 'Victoria ist selbst ordinierter Zen-Priester.' },
      { kind: 'oestlich', work: 'Mahavamsa (Große Chronik Sri Lankas)', ref: 'XXV,108–111', year: 'ca. 5./6. Jh.', quote: `Die Arahants trösten König Dutthagamani nach der Schlacht: Nur anderthalb Menschen seien getötet worden – einer, der Zuflucht genommen, und einer, der die Gebote angenommen hatte; die übrigen seien Ungläubige und nicht mehr wert als Tiere.`, status: 'paraphrase', note: 'Nicht kanonisch, aber für den singhalesischen Nationalbuddhismus prägend.' },
      { kind: 'oestlich', work: 'Majjhima-Nikaya 36 (Mahasaccaka-Sutta)', status: 'paraphrase', quote: `In der Nacht der Erleuchtung erinnert sich der Buddha an zahllose frühere Leben und schaut, wie die Wesen ihrem Karma gemäß wiedergeboren werden.` },
      { kind: 'fachliteratur', author: 'David L. McMahan', work: 'The Making of Buddhist Modernism', year: '2008', status: 'paraphrase', quote: `Der westliche, rationale „Buddhismus" als Ergebnis moderner Umdeutungen.` },
    ],
  },
  quickAnswer: `Für eine halbe Milliarde Menschen in Asien ist der Buddhismus Religion: mit Wiedergeburt, Göttern, Höllen, Reliquien, Gebeten und Gelübden. Der „rein philosophische" Buddhismus ist eine westliche Auswahl. Und leider war auch der Buddhismus nicht immer friedlich – denk an Myanmar oder an das Japan des Zweiten Weltkriegs. Das spricht nicht gegen die friedliche Lehre des Buddha, so wie die Kreuzzüge nicht gegen Jesu Lehre sprechen. Aber es zeigt: Friedlichkeit entscheidet nicht über Wahrheit. Die eigentliche Frage bleibt: Gibt es Gott, gibt es ein Selbst – und wer ist Jesus?`,
  keyPoints: [
    `**Gelebter Buddhismus ist Religion:** Wiedergeburt, Karma, Devas, Himmel und Höllen, Rituale, Reliquien, Bodhisattva-Verehrung, Reines-Land-Glaube.`,
    `**Nicht-theistisch heißt nicht nicht-religiös:** Auch ohne Schöpfergott kennt der Buddhismus Transzendenz (das Unbedingte, Nirvana).`,
    `**„Keine Dogmen" stimmt nicht:** Vier Edle Wahrheiten, Karma, Wiedergeburt und Anatta sind Lehren; das Kalama-Sutta ist ethischer Rat, keine Wissenschaftstheorie.`,
    `**Gewalt gibt es auch hier:** Zen im japanischen Militarismus, Myanmar, Sri Lanka – als Verrat an der Lehre, aber real.`,
    `**Gleicher Maßstab für alle:** Wer Christen an Christus misst, muss Buddhisten am Buddha messen – und umgekehrt.`,
    `**Wahrheit vor Etikett:** Ob „Religion" oder „Philosophie" – beide machen Aussagen über die Wirklichkeit, die wahr oder falsch sind.`,
  ],
  voices: [
    {
      person: 'paul-williams',
      role: 'als Buddhologe mit langer buddhistischer Praxis',
      text: `Paul Williams, der den Mahayana-Buddhismus jahrzehntelang erforscht und praktiziert hat, betont, dass der traditionelle Buddhismus eine Religion mit weitreichenden metaphysischen Aussagen ist: über Wiedergeburt, die Natur des Geistes, die Vielzahl von Welten und Buddhas. Wer den Buddhismus auf eine Entspannungstechnik oder eine säkulare Ethik reduziert, wird ihm nicht gerecht – und nimmt ihm gerade das, was Buddhisten selbst für das Wichtigste halten.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul Williams', work: 'Mahayana Buddhism: The Doctrinal Foundations', year: '2. Aufl. 2009', status: 'paraphrase' },
      ],
    },
    {
      person: 'netland',
      role: 'als Religionsphilosoph mit Schwerpunkt Buddhismus und Japan',
      text: `Harold Netland zeigt gemeinsam mit Keith Yandell, dass der Buddhismus Wahrheitsansprüche über die Wirklichkeit erhebt – über Vergänglichkeit, Nicht-Selbst, Karma und Nirvana –, die man philosophisch prüfen kann und muss. Ihn als bloße „Methode" ohne Lehrgehalt darzustellen, ist eine moderne Verkürzung. Gerade weil der Buddhismus ernst zu nehmende Behauptungen aufstellt, verdient er eine ernsthafte, respektvolle Auseinandersetzung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Keith Yandell / Harold Netland', work: 'Buddhism: A Christian Exploration and Appraisal', year: '2009', status: 'paraphrase' },
      ],
    },
    {
      person: 'corduan',
      role: 'als Religionswissenschaftler',
      text: `Winfried Corduan beschreibt in seiner Einführung in die Weltreligionen den Buddhismus, wie er tatsächlich gelebt wird: Tempelbesuche, Opfergaben, Verdienstübertragung an Verstorbene, Verehrung von Reliquien und Buddha-Statuen, Gebete um Schutz. Er rät Christen, den Buddhismus nicht nach westlichen Büchern, sondern nach der Praxis der Gläubigen zu beurteilen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', ref: 'Kapitel zum Buddhismus', status: 'paraphrase' },
      ],
    },
    {
      person: 'tim-keller',
      role: 'als Pastor und Apologet zu Religion und Gewalt',
      text: `Timothy Keller argumentiert, dass Gewalt und Unterdrückung nicht an „Religion" als solcher hängen, sondern an der menschlichen Neigung, jede Überzeugung – religiös oder säkular – zur Abgrenzung und Machtausübung zu missbrauchen. Die Frage ist darum, welche Überzeugung von innen her Gewalt am stärksten verurteilt. Für Keller ist das das Evangelium vom gekreuzigten Christus, der für seine Feinde starb.`,
      sources: [
        { kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God', year: '2008', ref: 'Kap. 4', status: 'paraphrase' },
      ],
    },
    {
      person: 'justin',
      role: 'als Märtyrer und Apologet',
      text: `Justin beschreibt dem Kaiser die Verwandlung, die Christus in den Christen bewirkt hat: Menschen, die einander früher hassten und töteten, leben nun zusammen und beten für ihre Feinde. Er starb selbst um 165 als Märtyrer, ohne Gewalt anzuwenden. Friedfertigkeit ist für ihn kein Etikett, sondern Frucht einer Wahrheit – der Begegnung mit dem Logos in Person.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '14', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'keine-religion',
      objection: `Buddhismus ist keine Religion: kein Gott, keine Dogmen, kein Glaube. Er ist eine Philosophie oder Psychologie des Geistes.`,
      objectionBy: 'Stephen Batchelor',
      answer: `In Asien wird der Buddhismus von rund einer halben Milliarde Menschen als Religion gelebt: mit Wiedergeburt, Karma, Himmeln und Höllen, Göttern, Reliquien, Opfergaben, Gebeten zu Bodhisattvas und Mönchsgelübden. Nicht-theistisch heißt nicht nicht-religiös. Die „reine Philosophie" ist eine westliche Auswahl – sogar dein Buchtitel „Buddhismus ohne Glaubenssätze" setzt voraus, dass der traditionelle Buddhismus Glaubenssätze hat.`,
      followUps: [
        {
          id: 'kalama-sutta',
          objection: `Der Buddha sagte im Kalama-Sutta: Glaubt nichts, nur weil es überliefert ist – prüft selbst. Das ist doch wissenschaftliches Denken!`,
          objectionBy: 'Dalai Lama (sinngemäß)',
          answer: `Das Kalama-Sutta warnt vor blinder Übernahme und rät, Lehren daran zu prüfen, ob sie zu Leid oder Wohl führen und „von den Weisen gelobt" werden. Das ist ein kluger ethischer Rat – aber keine empirische Methode, und anschließend lehrt der Buddha seine eigene Lehre. Christen sagen übrigens dasselbe: „Prüfet aber alles, und das Gute behaltet" (1 Thess 5,21). Ein Alleinstellungsmerkmal ist das nicht.`,
          sources: [
            { kind: 'oestlich', work: 'Anguttara-Nikaya 3,65 (Kalama-Sutta)', original: 'mā anussavena, mā paramparāya, mā itikirāya, mā piṭakasampadānena …', quote: `Geht nicht nach Hörensagen, nicht nach Überlieferung, nicht nach Gerüchten, nicht nach Schriftautorität … Wenn ihr selbst erkennt: Diese Dinge sind unheilsam, tadelnswert, von den Weisen getadelt und führen zu Schaden und Leid – dann gebt sie auf.`, translation: 'eigene Übersetzung', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'wiedergeburt-weglassen',
              objection: `Buddhisten müssen an nichts Übernatürliches glauben. Die Wiedergeburt kann man einfach weglassen.`,
              objectionBy: 'Stephen Batchelor',
              answer: `Dann hast du eine andere Religion als die des Buddha. In der Erzählung seiner Erleuchtung erinnert er sich an zahllose frühere Leben und schaut, wie die Wesen ihrem Karma gemäß wiedergeboren werden (MN 36). Der Dalai Lama, die Theravada-Mönche und die große Mehrheit der Buddhisten würden dir widersprechen. Du darfst so denken – aber dann ist „der Buddhismus ist keine Religion" eine Aussage über deinen Buddhismus, nicht über den Buddhismus.`,
              questionsBack: [`Wenn man Wiedergeburt weglässt – wovon soll das Nirvana dann eigentlich befreien?`],
            },
          ],
        },
      ],
    },
    {
      id: 'nie-krieg-im-namen-buddhas',
      objection: `Im Namen des Buddhismus wurde nie ein Krieg geführt – ganz anders als im Namen Christi.`,
      objectionBy: 'Sam Harris (sinngemäß)',
      answer: `Leider stimmt das nicht. Führende Zen-Meister unterstützten den japanischen Militarismus (Brian Victoria, *Zen at War*). In Myanmar hetzte der Mönch Ashin Wirathu gegen Muslime; nach der Gewalt von 2017 flohen über 700.000 Rohingya. In Sri Lanka legitimiert die Chronik *Mahavamsa* einen Krieg, und nationalistische Mönche waren an Ausschreitungen beteiligt. Das spricht nicht gegen die Lehre des Buddha – es verrät sie, wie die Kreuzzüge Christus verraten. Aber keine Religion ist immun.`,
      followUps: [
        {
          id: 'ausnahmen-bibel-gewalt',
          objection: `Das sind Ausnahmen, die der Lehre widersprechen. Beim Christentum steht die Gewalt dagegen in der Bibel selbst – denk an das Alte Testament.`,
          objectionBy: 'Sam Harris',
          answer: `Dann gilt derselbe Maßstab für beide: Christliche Gewalt widerspricht der Lehre Christi (Mt 5,44; 26,52). Die Kriegstexte des Alten Testaments sind konkrete, geschichtlich begrenzte Ereignisse, kein Auftrag an Christen (siehe den Claim zu den Kanaanitern). Und auch buddhistische Texte wie das *Mahavamsa* haben Gewalt gerechtfertigt – mit Arahants, die den König nach der Schlacht trösten.`,
          followUps: [
            {
              id: 'mahavamsa-nicht-kanonisch',
              objection: `Das Mahavamsa ist keine kanonische Schrift.`,
              objectionBy: 'Sam Harris (sinngemäß)',
              answer: `Richtig – aber Kreuzzugspredigten sind auch keine Heilige Schrift. Fair ist es, jede Tradition an ihrem Gründer und ihrer Kernlehre zu messen. Dann vergleichen wir den gewaltlosen Buddha mit dem gekreuzigten Christus. Jesus hat Gewaltlosigkeit nicht nur gelehrt, sondern Gewalt am eigenen Leib erlitten, für seine Henker gebetet (Lk 23,34) und sie durch die Auferstehung überwunden. Darin gründet christliche Vergebung.`,
            },
          ],
        },
      ],
    },
    {
      id: 'dalai-lama-friedensgesicht',
      objection: `Der Dalai Lama ist das Gesicht des Friedens – Friedensnobelpreis 1989. Was hat das Christentum dem entgegenzusetzen?`,
      objectionBy: 'Thich Nhat Hanh (Linie)',
      answer: `Ich achte den gewaltlosen Einsatz des Dalai Lama sehr. Das Christentum hat unzählige Zeugen des Friedens – etwa die koptische Kirche, deren Kalender mit der „Ära der Märtyrer" beginnt, oder die Familien der 21 in Libyen 2015 ermordeten Christen, die den Mördern öffentlich vergaben. Aber Friedenszeugen entscheiden nicht über Wahrheit. Die Frage bleibt: Wer ist Jesus?`,
      followUps: [
        {
          id: 'wahrheit-egal-hauptsache-frieden',
          objection: `Am Ende ist es doch egal, was wahr ist – Hauptsache, die Menschen leben friedlich.`,
          objectionBy: 'Dalai Lama (sinngemäß)',
          answer: `Gerade für den Frieden ist Wahrheit wichtig. Wenn Personen letztlich Illusionen sind, warum sollte ich sie achten? Wenn alle Unterschiede sich auflösen, worauf gründet Gerechtigkeit? Das Christentum gründet den Frieden auf den unendlichen Wert jedes Menschen, den Gott geschaffen und in Christus erlöst hat. Frieden ohne Wahrheit ist zerbrechlich.`,
        },
      ],
    },
    {
      id: 'buddhismus-wissenschaftsoffen',
      objection: `Der Buddhismus ist mit der Wissenschaft vereinbar: Der Dalai Lama sagt, wenn die Wissenschaft eine buddhistische Lehre widerlegt, wird sie aufgegeben.`,
      objectionBy: 'Dalai Lama',
      answer: `Diese Offenheit ist bewundernswert. Aber beachte: Die traditionelle buddhistische Kosmologie mit dem Weltberg Meru wurde stillschweigend aufgegeben, während die Wiedergeburt von der Wissenschaft nicht bestätigt ist. Und das Christentum bejaht die Einheit von Glaube und Vernunft ebenso – die moderne Naturwissenschaft wurde maßgeblich von gläubigen Christen wie Kepler, Boyle, Newton, Faraday und Lemaître geprägt.`,
      sources: [
        { kind: 'gegner', author: 'Dalai Lama', work: 'The Universe in a Single Atom', year: '2005', status: 'paraphrase', quote: `Wenn die wissenschaftliche Untersuchung bestimmte buddhistische Aussagen schlüssig als falsch erweist, müssen wir die Ergebnisse der Wissenschaft annehmen und diese Aussagen aufgeben.` },
      ],
      followUps: [
        {
          id: 'kirche-galilei',
          objection: `Das Christentum hat dagegen Galilei verfolgt.`,
          objectionBy: 'Sam Harris (sinngemäß)',
          answer: `Der Fall Galilei ist komplizierter als die Legende – es ging um Kirchenpolitik, Persönlichkeiten und eine damals noch nicht bewiesene Theorie; Galilei selbst blieb gläubiger Katholik. Siehe dazu den Claim „Der Fall Galilei". Und für die koptische Kirche gilt: Sie hat nie ein naturwissenschaftliches Dogma über Erdalter oder Planetenbahnen aufgestellt.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie leben Buddhisten in Thailand, Sri Lanka oder Tibet ihren Glauben – als Philosophie oder als Religion?`,
    `Wenn man Wiedergeburt weglässt – wovon soll das Nirvana dann befreien?`,
    `Wie erklärst du die Gewalt gegen die Rohingya, an der auch Mönche beteiligt waren?`,
    `Entscheidet die Friedlichkeit einer Bewegung darüber, ob ihre Lehre wahr ist?`,
  ],
  avoid: [
    `Stelle den Buddhismus nicht als gewalttätige Religion dar – die Gewalt in Myanmar oder Sri Lanka widerspricht seiner Lehre. Nenne sie nur, um die Idealisierung zu korrigieren.`,
    `Verwende nicht das angebliche Einstein-Zitat über den Buddhismus als „kosmische Religion der Zukunft" – es ist nach den Einstein-Archiven nicht belegt. Auch nicht umgekehrt gegen Buddhisten.`,
    `Verteidige nicht die Kreuzzüge, um den Buddhismus schlechtzumachen – gib christliches Versagen ehrlich zu.`,
  ],
  concessions: [
    `Die Lehre des Buddha betont Gewaltlosigkeit und Mitgefühl, und viele Buddhisten leben sie vorbildlich.`,
    `Auch Christen haben im Namen Christi Gewalt verübt – Kreuzzüge, Religionskriege. Das widerspricht seiner Lehre und muss ehrlich benannt werden.`,
    `Der Dalai Lama ist ein beeindruckender Zeuge der Gewaltlosigkeit.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Brian Daizen Victoria', work: 'Zen at War', year: '2. Aufl. 2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Donald S. Lopez Jr.', work: 'The Scientific Buddha', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Keith Yandell / Harold Netland', work: 'Buddhism: A Christian Exploration and Appraisal', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Buddhismus', 'Religion oder Philosophie', 'Gewalt', 'Myanmar', 'Zen at War', 'Dalai Lama'],
  related: [
    'religion-gewalt/religion-verursacht-kriege',
    'religion-gewalt/kreuzzuege',
    'buddhismus/meditation-wissenschaftlich',
    'kirchengeschichte-mythen/galilei',
    'at-ethik/kanaaniter-voelkermord',
  ],
};

export default claim;
