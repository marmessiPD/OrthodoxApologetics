import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kindermord-erfunden',
  title: `„Der Kindermord von Betlehem ist erfunden."`,
  proponents: [
    { name: 'Géza Vermes', role: 'Jüdischer Religionshistoriker, Oxford (†2013)', work: 'The Nativity. History and Legend (2006)' },
    { name: 'Raymond E. Brown', role: 'Katholischer Neutestamentler (†1998)', work: 'The Birth of the Messiah (1977/1993)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Jesus, Interrupted (2009)' },
    { name: 'Richard Carrier', role: 'Althistoriker, Mythizist', work: 'Vorträge und Aufsätze zur Weihnachtsgeschichte' },
  ],
  steelman: `Flavius Josephus widmet Herodes dem Großen ganze Bücher und zählt seine Grausamkeiten genüsslich auf: die Hinrichtung seiner Frau Mariamne, die Ermordung seiner Söhne, den Befehl, bei seinem Tod die Vornehmen des Landes im Hippodrom zu töten. Einen Massenmord an Kindern in Betlehem erwähnt er nicht – und auch sonst keine einzige Quelle außer Matthäus. Lukas, der die Kindheitsgeschichte ausführlich erzählt, weiß nichts von einer Flucht nach Ägypten. Die Erzählung folgt dagegen auffällig dem Muster der Mose-Geschichte: ein böser König, der die Knaben töten lässt, ein Kind, das wunderbar gerettet wird, ein Aufenthalt in Ägypten und eine Rückkehr. Josephus kennt sogar eine jüdische Legende, nach der der Pharao durch eine Weissagung vor der Geburt des Retters gewarnt wurde. Matthäus hat also kein Ereignis berichtet, sondern einen theologischen Midrasch geschrieben: Jesus als neuer Mose.`,
  biblical: {
    summary: `Matthäus erzählt, Herodes habe, von den Weisen getäuscht, alle Knaben in Betlehem und Umgebung bis zum Alter von zwei Jahren töten lassen (Mt 2,16), und deutet das Ereignis mit Jeremias Klage über Rahel (Jer 31,15). Die Mose-Anklänge sind gewollt – Matthäus zeigt Jesus als den, der Israels Geschichte erfüllt („Aus Ägypten habe ich meinen Sohn gerufen", Hos 11,1). Typologie ist aber eine Deutung von Ereignissen, nicht der Beweis ihrer Erfindung. Bemerkenswert ist, wie wenig glatt die Schriftzitate passen: Ein Autor, der frei erfindet, hätte bessere Belegstellen gewählt.`,
    detail: `**Die Zitate bei Matthäus 2:** Mi 5,1 (Betlehem), Hos 11,1 (Ägypten), Jer 31,15 (Rahel in Rama), „Er soll Nazarenus heißen" (Mt 2,23 – kein wörtliches Zitat). Gerade Hos 11,1 spricht im Original von Israels Auszug, und Jer 31,15 von der Verschleppung ins Exil. Matthäus liest Ereignisse im Licht der Schrift – er konstruiert keine Ereignisse aus der Schrift, sonst hätte er passendere Texte gesucht.

**Die Flucht nach Ägypten** (Mt 2,13–15) ist für die koptische Kirche von besonderer Bedeutung: Sie sieht darin die Erfüllung von Jes 19,1 („der HERR … wird nach Ägypten kommen") und den Segen über Ägypten (Jes 19,25). Die genauen Stationen der Heiligen Familie in Ägypten beruhen auf späterer kirchlicher Überlieferung, nicht auf dem Evangelium.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '2,16', quote: `Da Herodes nun sah, daß er von den Weisen betrogen war, ward er sehr zornig und schickte aus und ließ alle Kinder zu Bethlehem töten und an seinen ganzen Grenzen, die da zweijährig und darunter waren, nach der Zeit, die er mit Fleiß von den Weisen erlernt hatte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '2,18 (Jer 31,15)', quote: `Zu Rama hat man ein Geschrei gehört, viel Klagens, Weinens und Heulens; Rahel beweinte ihre Kinder und wollte sich nicht trösten lassen, denn es war aus mit ihnen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '19,25', quote: `Gesegnet bist du, Ägypten, mein Volk, und du, Assur, meiner Hände Werk, und du, Israel, mein Erbe!`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche gedenkt der unschuldigen Kinder von Betlehem als der ersten, die um Christi willen starben, und feiert die Flucht der Heiligen Familie nach Ägypten als Segen für ihr Land. Die liturgische Überlieferung mancher Kirchen nennt sehr hohe Zahlen getöteter Kinder (etwa 14.000 in der byzantinischen Tradition) – solche Zahlen sind symbolisch bzw. legendarisch und nicht historisch. Der Glaube verlangt nicht, legendarische Ausschmückungen zu verteidigen, wohl aber, das Zeugnis des Evangeliums ernst zu nehmen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I,58–61', year: 'ca. 248', quote: `Origenes verteidigt gegen Kelsos den Bericht über die Weisen und den Mordversuch des Herodes: Herodes habe gehandelt, weil er einen künftigen König der Juden fürchtete.`, status: 'paraphrase', note: 'Origenes ist Apologet, nicht Lehrautorität; Kelsos (2. Jh.) kannte und bestritt die Erzählung bereits.' },
    ],
  },
  opposingView: {
    summary: `Die meisten kritischen Exegeten halten die Erzählung für historisch unsicher oder legendarisch (Brown, Vermes, Ehrman), vor allem wegen fehlender Parallelquellen und der Mose-Typologie. Andere Historiker halten sie für plausibel (R. T. France, Paul L. Maier): Betlehem war ein Dorf mit vielleicht einigen hundert Einwohnern; die Zahl der getöteten Knaben unter zwei Jahren läge nach gängigen Schätzungen etwa zwischen einem halben und zwei Dutzend – ein Ereignis, das unter Herodes' zahlreichen Verbrechen leicht unerwähnt bleiben konnte. Der Charakter des Herodes, wie ihn der jüdische Historiker Josephus zeichnet, passt genau zu einer solchen Tat. Ein spätantiker Beleg bei Macrobius (um 400) ist zu spät und wohl christlich beeinflusst.`,
    detail: `**Herodes bei Josephus:** Er ließ seinen Schwager, den Hohenpriester Aristobulos III., in Jericho ertränken (Ant. 15,53–56), seine Frau Mariamne hinrichten (Ant. 15,229–236), seine Söhne Alexander und Aristobulos erdrosseln (Ant. 16,394) und seinen Sohn Antipater wenige Tage vor seinem eigenen Tod töten (Ant. 17,187). Sterbend befahl er, die in Jericho im Hippodrom eingeschlossenen Vornehmen hinrichten zu lassen, damit bei seinem Tod Trauer herrsche (Ant. 17,174–179). Sein Motiv war stets dasselbe: Furcht um seinen Thron.

**Macrobius, Saturnalien 2,4,11 (um 400):** Augustus habe auf die Nachricht, unter den Knaben unter zwei Jahren, die Herodes „in Syrien" töten ließ, sei auch dessen eigener Sohn gewesen, gesagt: „Es ist besser, das Schwein des Herodes zu sein als sein Sohn." Das Wortspiel (griech. *hys* – *hyios*) passt zu den Hinrichtungen der Herodessöhne; die Verbindung mit dem Kindermord dürfte aus christlicher Überlieferung stammen.`,
    sources: [
      { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '17,174–179', year: 'ca. 93/94', quote: `Der sterbende Herodes ließ die Vornehmen aus ganz Judäa im Hippodrom von Jericho einschließen und befahl, sie bei seinem Tod töten zu lassen, damit das ganze Land trauere.`, status: 'paraphrase', note: 'Der Befehl wurde nach Josephus nicht ausgeführt.' },
      { kind: 'sonstiges', author: 'Macrobius', work: 'Saturnalia', ref: '2,4,11', year: 'um 400', quote: `Als Augustus hörte, dass unter den Knaben unter zwei Jahren, die Herodes, der König der Juden, in Syrien töten ließ, auch dessen eigener Sohn getötet worden sei, sagte er: Es ist besser, das Schwein des Herodes zu sein als sein Sohn.`, original: `Cum audisset inter pueros, quos in Syria Herodes rex Iudaeorum intra bimatum iussit interfici, filium quoque eius occisum, ait: melius est Herodis porcum esse quam filium.`, status: 'verbatim', note: 'Spät (um 400) und wohl christlich beeinflusst – kein unabhängiger Beleg.' },
      { kind: 'fachliteratur', author: 'R. T. France', work: 'Herod and the Children of Bethlehem. Novum Testamentum 21', year: '1979', quote: `Die Erzählung passe zum Charakter des Herodes und zu den Größenverhältnissen Betlehems; das Schweigen des Josephus sei nicht aussagekräftig.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Géza Vermes', work: 'The Nativity. History and Legend', year: '2006', quote: `Die Kindheitsgeschichten seien theologische Erzählungen nach dem Muster jüdischer Mose-Überlieferungen, keine Geschichtsschreibung.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Dass nur Matthäus davon berichtet, stimmt – aber Betlehem war ein Dorf. Bei einigen hundert Einwohnern geht es um vielleicht sechs bis zwanzig kleine Jungen. Für Josephus, der über Herodes' Morde an seiner Frau, seinen Söhnen und dem Hohenpriester berichtet, war das eine Randnotiz neben vielen größeren Verbrechen. Die Tat passt genau zum Charakter, den der jüdische Historiker Josephus zeichnet: ein todkranker, paranoider König, der jeden möglichen Rivalen beseitigte. Beweisen kann man das Ereignis nicht; dass es erfunden sei, auch nicht.`,
  keyPoints: [
    `**Größenordnung:** Betlehem hatte wohl einige hundert Einwohner – die übliche Schätzung liegt bei etwa 6 bis 20 getöteten Knaben, nicht bei Tausenden.`,
    `**Charakter des Herodes:** Josephus berichtet, dass er Frau, Söhne und Schwager ermorden ließ und sterbend die Hinrichtung der Vornehmen anordnete – immer aus Angst um den Thron.`,
    `**Schweigen des Josephus:** Er schreibt 90 Jahre später, über Palastpolitik und Krieg; ein Verbrechen in einem Dorf fällt durch sein Raster.`,
    `**Typologie ist keine Erfindung:** Matthäus deutet Geschehenes im Licht der Schrift; seine Zitate passen so wenig glatt, dass sie eher auf vorgegebene Ereignisse deuten.`,
    `**Ehrlich bleiben:** Es gibt keinen unabhängigen Beleg; Macrobius ist spät und christlich beeinflusst.`,
    `**Koptischer Bezug:** Die Flucht nach Ägypten (Mt 2,13–15) ist biblisch; die Stationen in Ägypten sind fromme Überlieferung, kein Dogma.`,
  ],
  voices: [
    {
      person: 'rt-france',
      role: 'als Neutestamentler und Matthäus-Kommentator',
      text: `France hat die Kindermord-Erzählung im Licht der Quellen über Herodes untersucht. Er kommt zu dem Ergebnis, dass die Tat zur Persönlichkeit und Lage des alternden Königs passt und dass das Schweigen des Josephus angesichts der geringen Zahl der Opfer nicht überrascht. Matthäus' Typologie sei Deutung, keine Erfindung; die Vorstellung, Matthäus habe aus Jer 31,15 eine Erzählung „herausgesponnen", unterschätze, wie unbequem dieses Zitat für ihn eigentlich ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'R. T. France', work: 'The Gospel of Matthew (NICNT)', year: '2007', quote: `Die Erzählung sei historisch plausibel; Matthäus deute Ereignisse typologisch.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'paul-maier',
      role: 'als Althistoriker',
      text: `Maier, Althistoriker an der Western Michigan University, hat die Frage aus der Perspektive der römischen Geschichte untersucht. Er betont, dass Josephus' Bericht über Herodes' letzte Monate von Paranoia und Gewalt geprägt ist und dass eine Strafaktion in einem kleinen Dorf in diesen Rahmen gut passt. Er hält die Erzählung deshalb für glaubwürdig, gesteht aber zu, dass ein Beweis im strengen Sinn fehlt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul L. Maier', work: 'Herod and the Infants of Bethlehem, in: J. Vardaman / E. M. Yamauchi (Hg.), Chronos, Kairos, Christos II', year: '1998', quote: `Der Kindermord sei historisch plausibel und passe zum Bild des Herodes bei Josephus.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'origenes',
      role: 'als Apologet gegen Kelsos',
      text: `Schon im 2. Jahrhundert verspottete der heidnische Philosoph Kelsos die Erzählung von den Weisen und Herodes. Origenes antwortet, Herodes habe gehandelt, weil er durch die Nachricht von einem „König der Juden" um seine Dynastie fürchtete – ein Motiv, das die Geschichte des Herodes bestätigt. Bemerkenswert ist: Die Debatte um die Geschichtlichkeit dieser Erzählung ist fast so alt wie das Evangelium selbst, und die frühen Christen gaben sie nicht auf.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I,58–61', year: 'ca. 248', quote: `Verteidigung des Berichts über die Weisen und Herodes gegen Kelsos.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'blomberg',
      role: 'als Historiker der Evangelien',
      text: `Blomberg unterscheidet zwischen literarischer Gestaltung und Geschichtlichkeit: Dass Matthäus Mose-Motive verwendet, sagt etwas über seine Theologie, nicht darüber, ob das Ereignis stattfand. Zugleich empfiehlt er Bescheidenheit: Bei einem nur einfach bezeugten Ereignis kann der Historiker Plausibilität, aber keine Gewissheit erreichen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Craig L. Blomberg', work: 'Matthew (New American Commentary)', year: '1992', quote: `Typologische Gestaltung schließt Geschichtlichkeit nicht aus.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'josephus-schweigt',
      objection: `Josephus beschreibt Herodes' Grausamkeiten bis ins Detail. Einen Massenmord an Kindern erwähnt er nicht. Also hat er nicht stattgefunden.`,
      objectionBy: 'Géza Vermes',
      answer: `„Massenmord" ist das Bild späterer Kunst und Legende. Betlehem war ein Dorf; nach üblichen Schätzungen ging es um etwa sechs bis zwanzig Knaben. Josephus schrieb neunzig Jahre später vor allem über Palast, Dynastie und Krieg. Neben dem Mord an Frau, Söhnen und Hohepriester ist ein Verbrechen in einem Dorf für ihn keine Nachricht.`,
      followUps: [
        {
          id: 'josephus-listet-alles',
          objection: `Josephus hasste Herodes und hätte jede Gelegenheit genutzt, ihn bloßzustellen. Gerade ein Kindermord wäre ihm willkommen gewesen.`,
          objectionBy: 'Bart Ehrman',
          answer: `Josephus stützte sich für Herodes stark auf Nikolaos von Damaskus, den Hofhistoriker und Freund des Königs – der hatte kein Interesse, Untaten in Dörfern festzuhalten. Und Josephus erzählt, was ihm seine Quellen bieten, nicht jede Tat. Auch er hat Lücken: Er übergeht vieles, was wir aus anderen Quellen kennen.`,
          followUps: [
            {
              id: 'nikolaos-ad-hoc',
              objection: `Das mit Nikolaos ist ad hoc. Josephus berichtet doch die schlimmsten Dinge über Herodes trotz Nikolaos.`,
              objectionBy: 'Bart Ehrman',
              answer: `Das ist ein fairer Punkt, deshalb ruht mein Argument nicht darauf. Das Hauptargument ist die Größenordnung: Josephus berichtet Dinge, die Hof und Dynastie betrafen. Eine Polizeiaktion in einem Dorf, deren Anlass – Gerüchte über ein Kind – am Hof kaum bekannt wurde, gehört nicht in diese Kategorie.`,
              followUps: [
                {
                  id: 'also-kein-beleg',
                  objection: `Also gibst du zu: Es gibt keinen einzigen unabhängigen Beleg.`,
                  objectionBy: 'Richard Carrier',
                  answer: `Ja, das gebe ich zu: Wir haben nur Matthäus. Aber „nur eine Quelle" heißt nicht „erfunden" – viele Ereignisse der Antike sind nur einmal bezeugt. Die Frage ist, ob die Quelle plausibel ist. Und hier passt alles: der Ort, die Größenordnung, der Täter, sein bekanntes Motiv. Gewissheit kann ich nicht bieten, Plausibilität schon.`,
                  questionsBack: [`Wie viele Ereignisse aus dem antiken Palästina sind uns von mehr als einer Quelle bezeugt?`],
                },
              ],
            },
          ],
        },
        {
          id: 'warum-dann-erwaehnen',
          objection: `Wenn es nur ein Dutzend Kinder waren – warum macht Matthäus dann so ein Aufheben davon?`,
          objectionBy: 'Skeptischer Kritiker',
          answer: `Für die Familien in Betlehem war es eine Katastrophe – das drückt das Rahel-Zitat aus. Für Matthäus zeigt das Ereignis, dass Jesus von Anfang an als Bedrohung der Mächtigen galt und dass sich in ihm die Geschichte Israels wiederholt und erfüllt. Theologische Bedeutung entsteht nicht durch hohe Opferzahlen.`,
        },
      ],
    },
    {
      id: 'mose-typologie',
      objection: `Die Erzählung kopiert die Mose-Geschichte: böser König, getötete Knaben, gerettetes Kind, Ägypten. Das ist Literatur, nicht Geschichte.`,
      objectionBy: 'Raymond E. Brown',
      answer: `Die Mose-Anklänge sind gewollt – Matthäus zeigt Jesus als den neuen Mose. Aber Typologie deutet Ereignisse, sie beweist nicht ihre Erfindung. Die Parallele ist zudem unvollkommen: Bei Mose flieht das Kind nicht nach Ägypten, sondern wird dort gerettet; bei Jesus ist Ägypten der Zufluchtsort. Wer frei erfindet, kopiert genauer.`,
      followUps: [
        {
          id: 'josephus-mose-legende',
          objection: `Josephus kennt eine jüdische Legende, nach der ein Schriftgelehrter dem Pharao die Geburt des Retters ankündigte. Matthäus hat dieses Motiv übernommen.`,
          objectionBy: 'Géza Vermes',
          answer: `Dass Matthäus' Leser solche Mose-Überlieferungen kannten, ist gut möglich, und er spielt bewusst darauf an. Aber Anspielung ist nicht Erfindung: Auch moderne Historiker beschreiben Ereignisse mit Bildern aus früheren Ereignissen. Entscheidend bleibt, ob die Tat zu Herodes passt – und das tut sie.`,
          sources: [
            { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '2,205', year: 'ca. 93/94', quote: `Ein heiliger Schriftgelehrter habe dem König geweissagt, es werde ein Kind geboren, das die Herrschaft der Ägypter erniedrigen werde.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'midrasch-gattung',
              objection: `Matthäus 1–2 ist Midrasch. Seine jüdischen Leser wussten, dass das keine Geschichtsschreibung war.`,
              objectionBy: 'Géza Vermes',
              answer: `Matthäus erzählt mit konkreten Namen, Orten und Herrschern – Herodes, Archelaos, Betlehem, Nazareth –, also im Modus eines Berichts. Die frühen Leser, auch Gegner wie Kelsos, verstanden ihn so. Der Begriff „Midrasch" wird in dieser Debatte zudem sehr unscharf gebraucht; rabbinischer Midrasch kommentiert Bibeltexte, er erfindet keine Ereignisse aus der jüngsten Zeitgeschichte.`,
            },
          ],
        },
      ],
    },
    {
      id: 'macrobius-spaet',
      objection: `Christen zitieren gern Macrobius als heidnischen Beleg. Aber der schrieb um 400, und das Wortspiel betrifft Herodes' Söhne, nicht Babys.`,
      objectionBy: 'Richard Carrier',
      answer: `Da hast du recht, und ich verwende Macrobius nicht als Beweis. Er ist spät, und die Verbindung mit dem Kindermord stammt wahrscheinlich aus christlicher Überlieferung; das Wortspiel passt zur Hinrichtung der Herodessöhne. Mein Argument ruht auf Josephus' Bild des Herodes und auf der Größenordnung, nicht auf Macrobius.`,
      followUps: [
        {
          id: 'christen-uebertreiben',
          objection: `Christen haben die Zahl ja auch maßlos übertrieben – 14.000 Kinder in der byzantinischen Liturgie!`,
          objectionBy: 'Richard Carrier',
          answer: `Ja, solche Zahlen sind legendarisch, und ich verteidige sie nicht. Matthäus selbst nennt keine Zahl. Eine spätere Ausschmückung macht den ursprünglichen Bericht aber nicht unglaubwürdig – sie zeigt nur, dass man zwischen Evangelium und Legende unterscheiden muss, wie es auch die Kirche tun sollte.`,
        },
      ],
    },
    {
      id: 'herodes-kein-monster',
      objection: `Herodes war ein fähiger Herrscher: Er baute den Tempel, Caesarea, Masada. Das Bild vom kindermordenden Monster ist christliche Propaganda.`,
      objectionBy: 'Peter Richardson (als Diskussionspunkt)',
      answer: `Seine Bauleistungen sind real und beeindruckend. Aber das Bild seiner Grausamkeit stammt nicht von Christen, sondern vom jüdischen Historiker Josephus: Mord am Hohenpriester Aristobulos, an seiner Frau Mariamne, an drei Söhnen, der Befehl zum Massenmord im Hippodrom. Ein großer Baumeister kann zugleich ein paranoider Tyrann sein – die Geschichte kennt viele solche Herrscher.`,
      followUps: [
        {
          id: 'palast-ist-nicht-dorf',
          objection: `Palastmorde sind etwas anderes, als Babys in einem fernen Dorf umzubringen.`,
          objectionBy: 'Bart Ehrman',
          answer: `Das Motiv ist dasselbe: Herodes beseitigte jeden möglichen Rivalen um den Thron, selbst die eigenen Söhne. Nach Matthäus hörte er von einem neugeborenen „König der Juden" (Mt 2,2) – für einen Mann, der seine Söhne aus Angst vor Thronansprüchen tötete, war das ein klassischer Anlass. Und Betlehem lag nur etwa acht Kilometer von Jerusalem entfernt, nicht „fern".`,
        },
      ],
    },
    {
      id: 'lukas-schweigt',
      objection: `Lukas erzählt die Kindheit Jesu ausführlich und weiß nichts von Kindermord oder Flucht. Bei ihm geht die Familie nach dem Tempelbesuch friedlich nach Nazareth.`,
      objectionBy: 'Bart Ehrman',
      answer: `Lukas erzählt anders, aber er widerspricht nicht: Er rafft nach der Darstellung im Tempel mit dem Satz „als sie alles vollendet hatten" (Lk 2,39). Er erzählt auch die Weisen nicht. Beide Evangelisten wählen aus ihrem Material aus; Schweigen ist kein Widerspruch.`,
      followUps: [
        {
          id: 'koptische-legende-flucht',
          objection: `Und eure koptischen Stationen der Heiligen Familie in Ägypten – vom Wadi Natrun bis Asyut – sind reine Legende.`,
          objectionBy: 'Kritischer Historiker',
          answer: `Die einzelnen Stationen beruhen auf späterer kirchlicher Überlieferung und lassen sich historisch nicht belegen – das gebe ich offen zu. Die Flucht selbst steht im Evangelium (Mt 2,13–15); die Ortstradition ist fromme Erinnerung, kein Dogma. Ein Kopte kann die Pilgerstätten ehren und zugleich ehrlich sagen, was Evangelium und was Überlieferung ist.`,
        },
      ],
    },
    {
      id: 'stern-und-weise',
      objection: `Ein Stern, der vor Weisen herzieht und über einem Haus stehen bleibt? Die ganze Geschichte ist offensichtlich Legende.`,
      objectionBy: 'Richard Carrier',
      answer: `Das ist eine andere Frage – die nach Wundern und nach der Deutung des Sterns. Ich würde den Kindermord nicht davon abhängig machen: Selbst wer den Stern für eine erzählerische Deutung hält, muss noch zeigen, warum Herodes' Reaktion auf ein Gerücht über einen neuen König unhistorisch sein soll. Astronomische „Erklärungen" des Sterns würde ich übrigens nicht als Beweis anführen.`,
      followUps: [
        {
          id: 'wunder-ausgeschlossen',
          objection: `Weil Wunder unmöglich sind, ist alles, was damit verbunden ist, verdächtig.`,
          objectionBy: 'Richard Carrier',
          answer: `Dann entscheidet nicht die Quellenlage, sondern eine philosophische Vorannahme über das Ergebnis. Ob Wunder möglich sind, ist eine eigene Debatte. Für die Frage, ob Herodes in Betlehem Kinder töten ließ, braucht man kein Wunder – nur einen grausamen König.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie viele Knaben unter zwei Jahren lebten realistischerweise in einem Dorf von einigen hundert Einwohnern?`,
    `Passt die Tat zum Herodes, den der jüdische Historiker Josephus beschreibt – oder nicht?`,
    `Wenn Matthäus erfunden hätte, warum wählte er Schriftzitate, die so schlecht passen?`,
    `Ab wann ist für dich ein nur einmal bezeugtes Ereignis der Antike „erfunden"?`,
  ],
  avoid: [
    `Von „Tausenden" getöteten Kindern sprechen – das ist Legende.`,
    `Macrobius als unabhängigen heidnischen Beweis ausgeben.`,
    `Den Stern von Betlehem mit einer bestimmten Planetenkonjunktion „beweisen" wollen.`,
  ],
  concessions: [
    `Außer Matthäus berichtet keine Quelle des 1. Jahrhunderts vom Kindermord.`,
    `Matthäus gestaltet die Erzählung bewusst nach Mose-Motiven.`,
    `Die Stationen der Heiligen Familie in Ägypten beruhen auf späterer Überlieferung.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'R. T. France', work: 'Herod and the Children of Bethlehem (Novum Testamentum 21)', year: '1979', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul L. Maier', work: 'Herod and the Infants of Bethlehem', year: '1998', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Birth of the Messiah', year: '1993', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Kindermord', 'Herodes', 'Betlehem', 'Josephus', 'Flucht nach Ägypten'],
  related: ['nt-archaeologie/zensus-quirinius', 'neues-testament/evangelien-widersprechen-sich', 'prophetie/jesus-inszenierte-erfuellung', 'auferstehung/wunder-historisch-unmoeglich'],
};

export default claim;
