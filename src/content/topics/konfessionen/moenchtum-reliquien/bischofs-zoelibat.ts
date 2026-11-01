import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'bischofs-zoelibat',
  title: `„Der Zölibat der Bischöfe ist unbiblisch (1 Tim 3,2)."`,
  proponents: [
    { name: 'Martin Luther', role: 'Reformator', work: 'An den christlichen Adel deutscher Nation (1520) – gegen das Eheverbot für Geistliche' },
    { name: 'Philipp Melanchthon', role: 'Reformator', work: 'Confessio Augustana (1530), Art. 23 „Vom Ehestand der Priester"' },
    { name: 'Brüdergemeinden und manche Baptisten', role: 'Freikirchliche Gemeindeordnungen', work: 'Älteste müssen verheiratet sein und gläubige Kinder haben (nach 1 Tim 3,2–5; Tit 1,6)' },
    { name: 'Kritiker des katholischen Pflichtzölibats', role: 'Reformbewegungen und Publizisten', work: 'Zölibat als Ursache von Priestermangel und Missbrauch' },
  ],
  steelman: `Paulus nennt als Voraussetzung für das Bischofsamt ausdrücklich: „Es soll aber ein Bischof unsträflich sein, eines Weibes Mann" (1 Tim 3,2) – und er begründet es: Wer „seinem eigenen Hause nicht weiß vorzustehen, wie wird er die Gemeinde Gottes versorgen?" (1 Tim 3,5). Auch Titus soll Älteste einsetzen, die „gläubige Kinder" haben (Tit 1,6). Petrus, der erste der Apostel, war verheiratet (Mk 1,30), und Paulus sagt, die anderen Apostel und Kephas führten ihre Frauen mit sich (1 Kor 9,5). In der Alten Kirche gab es viele verheiratete Bischöfe. Im Neuen Testament sind „Bischof" und „Presbyter" sogar dasselbe Amt (Tit 1,5–7) – es gibt also keine biblische Grundlage, an Bischöfe andere Maßstäbe anzulegen als an Priester. Wer ein Kirchenamt an die Ehelosigkeit bindet, „verbietet ehelich zu werden" (1 Tim 4,3), schließt fähige Familienväter aus und erzeugt eine Hierarchie von Männern ohne Familienerfahrung, die über Ehe und Erziehung urteilen. Die Skandale um den Pflichtzölibat in der katholischen Kirche zeigen, wohin das führt.`,
  biblical: {
    summary: `Die Wendung *mias gynaikos andra* – „eines (einzigen) Weibes Mann" – legt den Ton auf **„einer"**, nicht auf „Frau". Sie verlangt nicht, dass der Bischof verheiratet sein *muss*, sondern dass er, wenn er verheiratet ist, nur **einmal** verheiratet war und seiner Frau treu ist. Das zeigt die Parallele 1 Tim 5,9: Eine eingeschriebene Witwe soll „eines Mannes Weib" gewesen sein – das kann nicht Vielmännerei ausschließen (die gab es nicht), sondern bedeutet: nur einmal verheiratet. Wäre die Ehe Pflicht, könnten weder Paulus, der ehelos lebte (1 Kor 7,7–8), noch Christus selbst, der „Hirte und Bischof eurer Seelen" (1 Petr 2,25), das Amt ausüben. Paulus empfiehlt die Ehelosigkeit gerade wegen des ungeteilten Dienstes (1 Kor 7,32–35).`,
    detail: `**Die koptische Kirche nimmt 1 Tim 3,2 wörtlich – für die Priester:** Koptische Gemeindepriester sind in der Regel verheiratet; ein Priester darf nach der Weihe nicht (erneut) heiraten, und ein verwitweter Priester bleibt unverheiratet. Genau das ist der Sinn von „eines Weibes Mann".

**Bischof und Presbyter:** In Tit 1,5–7 und Apg 20,17.28 werden *presbyteros* und *episkopos* noch weitgehend gleich gebraucht. Doch schon im NT gibt es Gestalten mit übergeordneter Leitungsvollmacht – Timotheus und Titus setzen Älteste ein und beurteilen sie (1 Tim 5,19–22; Tit 1,5), Jakobus leitet die Jerusalemer Gemeinde (Apg 15,13–19). Um 110 bezeugt Ignatius von Antiochien klar das dreifache Amt: Bischof, Presbyter, Diakone.

**1 Tim 3,4–5:** „Der seinem eigenen Hause wohl vorstehe" ist eine Bedingung *für den, der ein Haus hat* – wer Familie hat, muss sie gut führen. Es ist kein Gebot, eine Familie zu gründen. Der Kern ist die Fähigkeit, eine Gemeinschaft geistlich zu leiten.`,
    sources: [
      { kind: 'bibel', work: '1. Timotheus', ref: '3,2', quote: `Es soll aber ein Bischof unsträflich sein, eines Weibes Mann, nüchtern, mäßig, sittig, gastfrei, lehrhaft.`, original: `δεῖ οὖν τὸν ἐπίσκοπον ἀνεπίλημπτον εἶναι, μιᾶς γυναικὸς ἄνδρα`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Timotheus', ref: '5,9', quote: `Laß keine Witwe erwählt werden unter sechzig Jahren, und die da gewesen sei eines Mannes Weib.`, original: `ἑνὸς ἀνδρὸς γυνή`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Petrus', ref: '2,25', quote: `Denn ihr waret wie die irrenden Schafe; aber ihr seid nun bekehrt zu dem Hirten und Bischof eurer Seelen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '7,7–8', quote: `Ich wollte aber lieber, alle Menschen wären, wie ich bin; aber ein jeglicher hat seine eigene Gabe von Gott, einer so, der andere so. Ich sage zwar den Ledigen und Witwen: Es ist ihnen gut, wenn sie auch bleiben wie ich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '7,32–33', quote: `Wer ledig ist, der sorgt, was dem Herrn angehört, wie er dem Herrn gefalle; wer aber freit, der sorgt, was der Welt angehört, wie er dem Weibe gefalle.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche hat **verheiratete Priester** und wählt ihre **Bischöfe und Patriarchen aus dem Mönchsstand**. Diese Ordnung ist eine **kirchliche Disziplin, kein Dogma**: Die Kirche lehrt nicht, dass die Ehe mit dem Bischofsamt unvereinbar sei, sondern hat aus geistlichen und praktischen Gründen den Weg gewählt, dass der Bischof – als geistlicher Vater einer ganzen Diözese – ungeteilt und ohne eigene Familie und Erbschaft der Kirche gehört. Sie steht damit in der gemeinsamen Tradition des christlichen Ostens; die byzantinische Kirche hat dieselbe Ordnung auf dem Konzil in Trullo (691) festgeschrieben und dort zugleich die Ehe der Priester gegen die römische Praxis verteidigt.`,
    detail: `**Ehrlich zur Geschichte:** In den ersten Jahrhunderten gab es verheiratete Bischöfe – Gregor von Nazianz war Sohn eines Bischofs, und Synesius von Kyrene ließ sich um 410 von Theophilus von Alexandrien zum Bischof weihen, unter der Bedingung, seine Frau behalten zu dürfen. Nach dem Bericht des Kirchenhistorikers Sokrates widersprach der ägyptische Bekennerbischof Paphnutius in Nizäa dem Vorschlag, verheiratete Kleriker zur Enthaltsamkeit zu verpflichten (die Historizität der Episode ist umstritten).

**Allmähliche Entwicklung:** Kaiser Justinian verfügte 528, dass Bischöfe keine Kinder oder Enkel haben sollten – auch um zu verhindern, dass Kirchengut an Familien vererbt wird. Das Konzil in Trullo (691) bestimmte in Kanon 12, dass Bischöfe nach der Weihe nicht mehr mit ihren Frauen zusammenleben, und in Kanon 48, dass die Frau eines künftigen Bischofs nach gegenseitiger Zustimmung in ein Kloster eintritt und vom Bischof versorgt wird. In Kanon 13 verteidigt dasselbe Konzil ausdrücklich die Ehe der Priester und Diakone. Im Osten wurde es so zur festen Regel, Bischöfe aus den Mönchen zu wählen.

**Die koptische Praxis:** Die koptische Kirche erkennt das Trullanum als byzantinisches Konzil nicht an, folgt aber aus eigener Tradition derselben Ordnung. Papst Kyrillos VI. war Einsiedler, Papst Schenuda III. Mönch des Syrerklosters, Papst Tawadros II. Mönch des Bischoi-Klosters.`,
    sources: [
      { kind: 'konzil', work: 'Konzil in Trullo (Quinisextum)', ref: 'Kanon 12, 13 und 48', year: '691', status: 'paraphrase', quote: `Kanon 12: Bischöfe sollen nach der Weihe nicht mehr mit ihren Frauen zusammenleben. Kanon 13: Die Ehe von Priestern und Diakonen soll gegen die römische Praxis nicht aufgelöst werden. Kanon 48: Die Frau des zum Bischof Erwählten tritt nach gemeinsamer Übereinkunft in ein Kloster ein und wird vom Bischof versorgt.`, note: 'Byzantinisches Konzil, von der koptischen Kirche nicht rezipiert; hier als Parallele für die gemeinsame östliche Praxis.' },
      { kind: 'kirchenvater', author: 'Synesius von Kyrene', work: 'Brief 105', year: 'um 410', status: 'paraphrase', quote: `Synesius erklärt vor seiner Bischofsweihe, er werde sich von seiner Frau nicht trennen.` },
      { kind: 'kirchenvater', author: 'Sokrates Scholastikos', work: 'Kirchengeschichte', ref: 'I,11', year: 'um 440', status: 'paraphrase', quote: `Paphnutius riet in Nizäa davon ab, den verheirateten Klerikern die Enthaltsamkeit aufzuerlegen; die Ehe sei ehrbar.`, note: 'Die Historizität der Episode wird in der Forschung diskutiert.' },
      { kind: 'sonstiges', work: 'Codex Iustinianus', ref: '1,3,41', year: '528', status: 'paraphrase', quote: `Zum Bischof soll nur geweiht werden, wer weder Kinder noch Enkel hat.`, note: 'Begründung u. a. Schutz des Kirchenguts vor Vererbung.' },
    ],
  },
  quickAnswer: `„Eines Weibes Mann" heißt: nur einmal verheiratet und treu – nicht: Er muss verheiratet sein. Das zeigt 1 Tim 5,9, wo von der Witwe dasselbe verlangt wird („eines Mannes Weib"). Sonst hätten weder Paulus noch Christus, „der Hirte und Bischof eurer Seelen" (1 Petr 2,25), Bischof sein können. Unsere Kirche nimmt 1 Tim 3,2 wörtlich: Unsere Priester sind verheiratet und dürfen nicht wieder heiraten. Bischöfe wählen wir aus den Mönchen, damit sie wie Paulus ungeteilt der Kirche dienen (1 Kor 7,32–35). Das ist eine Ordnung der Kirche, kein Dogma – und niemand wird zur Ehelosigkeit gezwungen.`,
  keyPoints: [
    `**„Eines Weibes Mann" = nur einmal verheiratet:** Die Parallele 1 Tim 5,9 („eines Mannes Weib") macht das klar.`,
    `**Ehe ist keine Pflicht:** Sonst wären Paulus, Timotheus (soweit bekannt) und Christus, der „Bischof eurer Seelen", ausgeschlossen.`,
    `**Koptische Priester sind verheiratet** – die Kirche verbietet niemandem die Ehe (gegen 1 Tim 4,3 gewendet).`,
    `**Bischöfe aus dem Mönchsstand:** ungeteilter Dienst (1 Kor 7,32–35), keine Erbschaft von Kirchengut, geistliche Vaterschaft über die ganze Diözese.`,
    `**Disziplin, nicht Dogma:** Ehrlich zugeben, dass es früher verheiratete Bischöfe gab (Petrus, Synesius); die Ordnung hat sich im Osten entwickelt (Justinian 528, Trullanum 691).`,
    `**Nicht mit dem katholischen Pflichtzölibat verwechseln:** Die Orthodoxie hat ihn für Priester immer abgelehnt.`,
  ],
  voices: [
    {
      person: 'chrysostomus',
      role: 'als Ausleger der Pastoralbriefe',
      text: `Johannes Chrysostomus erklärt in seiner Homilie zu 1 Tim 3, Paulus mache die Ehe nicht zur Pflicht für den Bischof, sondern verhindere das Übermaß: Der Bischof soll nicht mehr als eine Frau gehabt haben. Im Hintergrund steht die Sorge, dass ein Mann, der nach dem Tod seiner Frau erneut heiratet, kein Vorbild der Enthaltsamkeit sei. Chrysostomus, selbst ehelos und früher Mönch, hält zugleich die Ehe hoch und nennt sie an anderer Stelle eine „kleine Kirche".`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum 1. Timotheusbrief', ref: 'Hom. 10', year: 'um 390', status: 'paraphrase', quote: `Er sagt dies nicht, als ob er vorschriebe, dass man eine Frau haben müsse, sondern um das Übermaß zu verhindern.` },
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Epheserbrief', ref: 'Hom. 20', status: 'paraphrase', note: 'Die christliche Familie als „kleine Kirche".' },
      ],
    },
    {
      person: 'paulus',
      role: 'als ehelos lebender Apostel und Verfasser von 1 Tim 3',
      text: `Paulus selbst ist das stärkste Argument gegen die Lesart, der Bischof müsse verheiratet sein. Er lebte ehelos, hätte nach 1 Kor 9,5 das Recht gehabt, eine Frau mitzuführen, verzichtete aber darauf, und wünschte sich, alle wären wie er (1 Kor 7,7). Er begründet das mit dem ungeteilten Dienst: Der Ledige sorgt sich um das, was des Herrn ist (1 Kor 7,32). Derselbe Paulus, der 1 Tim 3,2 schrieb, kann kein Amt an eine Bedingung geknüpft haben, die er selbst nicht erfüllte.`,
      sources: [{ kind: 'bibel', work: '1. Korinther', ref: '7,7.32–35; 9,5', status: 'paraphrase' }],
    },
    {
      person: 'kallistos-ware',
      role: 'als östlich-orthodoxer Theologe',
      text: `Kallistos Ware beschreibt in „The Orthodox Church" die gemeinsame Ordnung des christlichen Ostens: Gemeindepriester dürfen verheiratet sein, sofern sie vor der Weihe heiraten; Bischöfe werden seit dem 6./7. Jahrhundert aus dem unverheirateten, in der Regel monastischen Klerus gewählt. Er betont, dass das eine kanonische Regel ist, die sich historisch entwickelt hat – kein Glaubenssatz. Gerade deshalb, so Ware, kann die Orthodoxie gelassen auf das Thema blicken: Sie ehrt die Ehe des Priesters und die Ehelosigkeit des Bischofs gleichermaßen.`,
      sources: [{ kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, überarb. 1993', status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als Mönch, Papst und Lehrer über das Priestertum',
      text: `Papst Schenuda III. kam selbst aus der Sonntagsschulbewegung, wurde Mönch und lebte als Einsiedler, bevor er Bischof und Patriarch wurde. In seinen Schriften über das Priestertum betont er, dass die Kirche verheiratete Priester ehrt und dass das Bischofsamt eine geistliche Vaterschaft ist, die ein Leben der Hingabe und des Gebets voraussetzt. Die Wahl der Bischöfe aus den Mönchen verstand er nicht als Abwertung der Ehe, sondern als Wunsch, dass der Hirte der Diözese keine anderen Bindungen habe als die an Christus und seine Herde.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Priestertum (The Priesthood)', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'eines-weibes-mann',
      objection: `„Paulus sagt klar: Ein Bischof soll ‚eines Weibes Mann' sein (1 Tim 3,2). Ihr macht genau das Gegenteil – eure Bischöfe haben gar keine Frau."`,
      objectionBy: 'Baptistischer Pastor',
      answer: `Der Ton liegt auf „*eines*" (griechisch *mias*), nicht auf „Weib". Paulus will ausschließen, dass jemand mehrmals verheiratet war oder untreu ist – nicht vorschreiben, dass jeder Bischof heiraten muss. Sonst hätte er, der selbst ehelos war, sich selbst disqualifiziert, und Christus, „der Hirte und Bischof eurer Seelen" (1 Petr 2,25), ebenso. Übrigens nehmen wir den Vers sehr ernst: Unsere Priester sind verheiratet und dürfen nach der Weihe nicht wieder heiraten.`,
      followUps: [
        {
          id: 'text-setzt-ehe-voraus',
          objection: `„Aber der Text setzt doch voraus, dass der Bischof verheiratet ist. Paulus beschreibt einen Familienvater, keinen Mönch."`,
          objectionBy: 'Baptistischer Pastor',
          answer: `Er beschreibt den Normalfall seiner Zeit, in der die meisten Männer verheiratet waren – ohne den Ehelosen auszuschließen, den er in 1 Kor 7 sogar empfiehlt. Die Parallele 1 Tim 5,9 zeigt den Sinn: Die Witwe soll „eines Mannes Weib" gewesen sein. Das kann nur heißen „nur einmal verheiratet", denn Vielmännerei gab es nicht. Also bedeutet „eines Weibes Mann" ebenso: nur einmal verheiratet.`,
          followUps: [
            {
              id: 'witwe-anderer-kontext',
              objection: `„1 Tim 5 handelt von Witwen, das ist ein ganz anderer Kontext. Daraus kannst du nichts für das Bischofsamt ableiten."`,
              objectionBy: 'Evangelikaler Exeget',
              answer: `Es ist derselbe Brief, derselbe Verfasser und exakt dieselbe Formel in gespiegelter Form (*henos andros gynē* – *mias gynaikos anēr*). Wenn eine Formel im selben Brief zweimal vorkommt, ist es methodisch geboten, sie gleich zu verstehen. Auch viele protestantische Ausleger – schon Calvin, der sich auf Chrysostomus beruft – lehnen die Deutung ab, der Bischof müsse verheiratet sein.`,
              sources: [
                { kind: 'fachliteratur', author: 'Johannes Calvin', work: 'Kommentar zum 1. Timotheusbrief', ref: 'zu 3,2', year: '1548', status: 'paraphrase', note: 'Calvin versteht die Stelle als Ausschluss der Polygamie und folgt dabei ausdrücklich Chrysostomus; eine Ehepflicht liest er nicht heraus.' },
              ],
              followUps: [
                {
                  id: 'timotheus-verheiratet',
                  objection: `„Vielleicht war Timotheus ja verheiratet. Du kannst nicht beweisen, dass er es nicht war."`,
                  objectionBy: 'Evangelikaler Exeget',
                  answer: `Du kannst auch nicht beweisen, dass er es war – das NT erwähnt keine Frau des Timotheus. Aber das ist gar nicht der Punkt: Paulus selbst war sicher ehelos, und er übte die Aufsicht über alle Gemeinden aus („die Sorge für alle Gemeinden", 2 Kor 11,28). Wenn der Apostel, der Bischöfe einsetzte, unverheiratet war, kann Ehe keine biblische Bedingung für geistliche Leitung sein.`,
                  sources: [
                    { kind: 'bibel', work: '2. Korinther', ref: '11,28', quote: `… außer was sich sonst zuträgt, nämlich, daß ich täglich werde angelaufen und trage Sorge für alle Gemeinden.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Hätte deine Gemeinde den Apostel Paulus als Ältesten abgelehnt, weil er nicht verheiratet war?`],
                },
              ],
            },
          ],
        },
        {
          id: 'haus-vorstehen',
          objection: `„Paulus sagt: Wer seinem eigenen Haus nicht vorstehen kann, wie soll er die Gemeinde Gottes versorgen (1 Tim 3,5)? Ein Mönch hat gar kein Haus, an dem man das prüfen könnte."`,
          objectionBy: 'Freikirchlicher Gemeindeleiter',
          answer: `Die Bedingung gilt für den, der ein Haus hat – er muss es gut führen. Ein Mönch lebt aber nicht allein, sondern in einer Klostergemeinschaft mit Gehorsam, Arbeit und geistlicher Verantwortung; viele künftige Bischöfe waren Äbte, Beichtväter oder leiteten Dienste. Dort zeigt sich, ob jemand Menschen geistlich führen kann. Paulus fragt nach der Leitungsfähigkeit, nicht nach dem Trauschein.`,
        },
      ],
    },
    {
      id: 'petrus-verheiratet',
      objection: `„Petrus war verheiratet, die anderen Apostel auch (1 Kor 9,5), und in der Alten Kirche gab es viele verheiratete Bischöfe. Euer Mönchsbischof ist eine spätere Erfindung."`,
      objectionBy: 'Lutherischer Kirchenhistoriker',
      answer: `Das stimmt, und wir geben es offen zu: Petrus war verheiratet, und es gab in den ersten Jahrhunderten verheiratete Bischöfe. Darum sagen wir auch nicht, die Ehe sei mit dem Bischofsamt unvereinbar. Die Wahl der Bischöfe aus dem Mönchsstand ist eine Ordnung, die die Kirche aus guten Gründen entwickelt hat – so wie sie viele Ordnungen entwickelt hat, die du auch kennst, etwa Wahlverfahren oder Ausbildungsvoraussetzungen für Pastoren.`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '9,5', quote: `Haben wir nicht auch Macht, eine Schwester zum Weibe mit umherzuführen wie die andern Apostel und des HERRN Brüder und Kephas?`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'synesius-theophilus',
          objection: `„Sogar euer eigener Patriarch Theophilus von Alexandrien hat um 410 Synesius von Kyrene zum Bischof geweiht – einen Mann, der ausdrücklich bei seiner Frau bleiben wollte."`,
          objectionBy: 'Kirchenhistoriker',
          answer: `Richtig – und das zeigt ehrlich, dass sich die Ordnung allmählich entwickelt hat und auch in Alexandrien nicht von Anfang an fest war. Synesius selbst empfand seine Lage als Ausnahme, die er eigens begründen musste – ein Hinweis darauf, dass die Erwartung der Enthaltsamkeit für Bischöfe damals bereits verbreitet war. Spätestens im 6. und 7. Jahrhundert war die Regel im ganzen Osten fest.`,
          followUps: [
            {
              id: 'dann-aendert-es',
              objection: `„Wenn es kein Dogma ist, warum ändert ihr es dann nicht? Ihr schließt damit hervorragende verheiratete Priester vom Bischofsamt aus."`,
              objectionBy: 'Lutherischer Kirchenhistoriker',
              answer: `Weil die Gründe tragen: Der Bischof ist geistlicher Vater einer ganzen Diözese, oft mit Hunderttausenden Gläubigen, und soll nach 1 Kor 7,32–35 ungeteilt für sie da sein. Er soll ohne Erben leben, damit Kirchengut nie zum Familienbesitz wird – genau das wollte schon Justinian 528 verhindern. Und er soll aus einem Leben des Gebets kommen. Eine Kirche darf eine bewährte Ordnung beibehalten, auch wenn sie sie theoretisch ändern könnte.`,
              followUps: [
                {
                  id: 'erbschaft-heute-kein-problem',
                  objection: `„Das Problem der Erbschaft von Kirchengut ist heute durch Verwaltung und Recht gelöst. Das Argument ist veraltet."`,
                  objectionBy: 'Kirchenrechtler',
                  answer: `Nicht ganz: In vielen Ländern, gerade im Orient, sind kirchliche Strukturen bis heute stark personengebunden, und Familiendynastien in Kirchenämtern gab es in der Geschichte immer wieder – auch in protestantischen Pfarrhäusern. Aber selbst wenn dieses Argument wegfiele, bliebe das wichtigere: der ungeteilte Dienst und die geistliche Vaterschaft. Das ist ein Argument aus 1 Kor 7, und das veraltet nicht.`,
                  questionsBack: [`Wäre ein Bischof, der für eine Diözese mit Hunderttausenden Gläubigen verantwortlich ist, mit eigener Familie freier oder gebundener?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'eheverbot-doctrine-of-demons',
      objection: `„Paulus nennt es eine Lehre der Dämonen, wenn man ‚verbietet, ehelich zu werden' (1 Tim 4,3). Genau das tut ihr bei den Bischöfen."`,
      objectionBy: 'Reformierter Prediger',
      answer: `Niemand wird bei uns daran gehindert zu heiraten – die Priester heiraten sogar in der Regel. Wer Bischof wird, hat sich vorher frei für das Mönchtum entschieden. Paulus bekämpft Irrlehrer, die die Ehe als solche für böse hielten (1 Tim 4,4: „alle Kreatur Gottes ist gut"). Die Kirche hat diese Lehre ebenfalls verurteilt. Eine Bedingung für ein bestimmtes Amt ist kein Eheverbot – auch deine Gemeinde stellt Bedingungen für Älteste.`,
      followUps: [
        {
          id: 'zwang-durch-hintertuer',
          objection: `„Indirekt ist es doch ein Zwang: Wer Bischof werden will, muss auf die Ehe verzichten."`,
          objectionBy: 'Reformierter Prediger',
          answer: `Niemand hat ein Recht darauf, Bischof zu werden: „Niemand nimmt sich selbst die Ehre, sondern er wird berufen von Gott" (Hebr 5,4). Die Kirche wählt ihre Bischöfe aus denen, die sich bereits für die Ehelosigkeit entschieden haben – sie zwingt niemanden, Mönch zu werden, um Bischof zu werden. Wer das Bischofsamt *anstrebt*, um Karriere zu machen, ist ohnehin ungeeignet.`,
          sources: [
            { kind: 'bibel', work: 'Hebräer', ref: '5,4', quote: `Und niemand nimmt sich selbst die Ehre, sondern er wird berufen von Gott gleichwie Aaron.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'karriere-moenche',
              objection: `„Dann werden eben ehrgeizige Männer Mönche, um Bischof zu werden. Das korrumpiert das Kloster."`,
              objectionBy: 'Kritischer Beobachter',
              answer: `Diese Gefahr ist real, und die Väter kannten sie – viele Heilige flohen vor dem Bischofsamt. Deshalb prüft die Kirche Mönche über Jahre im Gehorsam und in der Demut, bevor sie überhaupt in Betracht kommen. Kein System schützt vollständig vor Ehrgeiz – auch Wahlen in Landeskirchen nicht. Aber ein Kandidat, der viele Jahre Gebet, Arbeit und Gehorsam im Kloster gelebt hat, ist besser geprüft als einer, der nur ein Studium vorweisen kann.`,
            },
          ],
        },
      ],
    },
    {
      id: 'zoelibat-missbrauch',
      objection: `„Die Missbrauchsskandale in der katholischen Kirche zeigen: Erzwungene Ehelosigkeit führt zu Doppelleben und Missbrauch."`,
      objectionBy: 'Kritiker des Pflichtzölibats',
      answer: `Die orthodoxe Kirche zwingt ihre Priester gerade nicht zur Ehelosigkeit – sie hat den Pflichtzölibat für Priester immer abgelehnt (vgl. Trullanum, Kanon 13). Bei uns ist die Ehelosigkeit an das freiwillige, jahrelang geprüfte Mönchsleben gebunden. Missbrauch geschieht leider in allen Kirchen, bei verheirateten Geistlichen, in Familien und Vereinen; seine Wurzel ist Machtmissbrauch und fehlende Aufsicht, nicht die freiwillige Ehelosigkeit.`,
      followUps: [
        {
          id: 'keine-familienerfahrung',
          objection: `„Ein Mönchsbischof ohne Frau und Kinder kann doch Familien gar nicht verstehen, über deren Ehe- und Erziehungsfragen er urteilt."`,
          objectionBy: 'Evangelischer Gemeindepfarrer',
          answer: `Mit diesem Argument könnte auch Paulus nicht über Ehe schreiben – und doch stammt Eph 5 von ihm. Christus selbst war unverheiratet. Mönche und Bischöfe hören in Beichte und Seelsorge täglich von den Nöten der Familien; die Gemeindepriester, die selbst verheiratet sind, beraten sie. Erfahrung entsteht nicht nur durch eigenes Erleben, sondern durch Zuhören, Gebet und Liebe.`,
        },
      ],
    },
    {
      id: 'bischof-gleich-presbyter',
      objection: `„Im Neuen Testament sind Bischof und Presbyter dasselbe (Tit 1,5–7). Unterschiedliche Regeln für Bischöfe und Priester sind daher unbiblisch."`,
      objectionBy: 'Freikirchlicher Theologe',
      answer: `Die Begriffe überschneiden sich im NT, das stimmt. Aber das Amt der übergeordneten Leitung ist schon da: Timotheus und Titus setzen Älteste ein, prüfen und tadeln sie (1 Tim 5,19–22; Tit 1,5). Und um 110 bezeugt Ignatius von Antiochien, ein Schüler der Apostelzeit, das dreifache Amt von Bischof, Presbytern und Diakonen in vielen Gemeinden. Wenn es verschiedene Ämter gibt, kann es auch verschiedene Ordnungen für sie geben.`,
      sources: [
        { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Smyrnäer', ref: '8,1', year: 'um 110', status: 'paraphrase', quote: `Folgt alle dem Bischof wie Jesus Christus dem Vater, und dem Presbyterium wie den Aposteln; die Diakone aber achtet wie Gottes Gebot.` },
      ],
      followUps: [
        {
          id: 'trullanum-byzantinisch',
          objection: `„Eure Praxis habt ihr doch nur vom byzantinischen Konzil in Trullo (691) übernommen – einem Konzil, das ihr selbst nicht einmal anerkennt."`,
          objectionBy: 'Östlich-orthodoxer Gesprächspartner',
          answer: `Das Trullanum ist eine Parallele, nicht unsere Quelle. Es zeigt, dass der ganze christliche Osten – chalcedonensisch wie nicht-chalcedonensisch – unabhängig voneinander zur selben Ordnung gekommen ist: verheiratete Priester, Bischöfe aus dem Mönchsstand. In Ägypten lag das besonders nahe, weil das Mönchtum hier entstanden ist und die Kirche ihre geistlichen Väter seit dem 4. Jahrhundert in den Klöstern fand. Gemeinsame Praxis ohne gemeinsames Konzil spricht eher für eine tiefe gemeinsame Tradition.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn „eines Weibes Mann" bedeutet, dass ein Bischof verheiratet sein muss – hätte Paulus dann selbst Bischof sein können?`,
    `Was bedeutet „eines Mannes Weib" in 1 Tim 5,9 bei den Witwen?`,
    `Ist Christus, der „Hirte und Bischof eurer Seelen" (1 Petr 2,25), ein Gegenbeispiel zu deiner Auslegung?`,
    `Ist eine Bedingung für ein Amt dasselbe wie ein Eheverbot?`,
  ],
  avoid: [
    `Nicht behaupten, die Ehe sei mit dem Bischofsamt grundsätzlich unvereinbar oder Bischöfe seien „heiliger" als verheiratete Priester.`,
    `Nicht leugnen, dass Petrus verheiratet war oder dass es in der Alten Kirche verheiratete Bischöfe gab.`,
    `Die koptische Ordnung nicht mit dem katholischen Pflichtzölibat für alle Priester gleichsetzen – und den katholischen Zölibat nicht polemisch angreifen.`,
  ],
  concessions: [
    `Das Neue Testament schreibt den Zölibat der Bischöfe nirgends vor; die östliche Ordnung hat sich allmählich entwickelt (Justinian 528, Trullanum 691).`,
    `Petrus und andere Apostel waren verheiratet, und noch um 410 wurde in Alexandrien mit Synesius ein verheirateter Mann Bischof.`,
    `Die Wahl der Bischöfe nur aus dem Mönchsstand verkleinert den Kreis möglicher Kandidaten und kann Ehrgeizige ins Kloster locken – eine Gefahr, die die Kirche wachsam halten muss.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum 1. Timotheusbrief', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, überarb. 1993', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Priestertum (The Priesthood)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Roger Gryson', work: 'Les origines du célibat ecclésiastique du premier au septième siècle', year: '1970', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Zölibat', 'Bischof', 'Priestertum', '1 Tim 3,2', 'Mönchtum', 'Kirchenordnung'],
  related: ['moenchtum-reliquien/moenchtum-weltflucht', 'sakramente/kein-besonderes-priestertum', 'evangelikale-sonderlehren/keine-hierarchie-noetig', 'katholizismus/papstprimat-unfehlbarkeit'],
};

export default claim;
