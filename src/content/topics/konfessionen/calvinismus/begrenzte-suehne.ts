import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'begrenzte-suehne',
  title: `„Christus starb nur für die Erwählten."`,
  proponents: [
    { name: 'John Owen', role: 'Puritanischer Theologe (1616–1683)', work: 'The Death of Death in the Death of Christ (1647)' },
    { name: 'Synode von Dordrecht', role: 'Reformierte Generalsynode (1618/19)', work: 'Lehrregeln, 2. Hauptstück, Art. 8' },
    { name: 'John Piper', role: 'Reformierter Prediger', work: 'Mitherausgeber: From Heaven He Came and Sought Her (2013)' },
    { name: 'James White', role: 'Reformierter Apologet', work: `The Potter's Freedom (2000)` },
  ],
  steelman: `Wofür ist Christus gestorben? Entweder hat er für alle Sünden aller Menschen gesühnt, oder für alle Sünden einiger Menschen, oder für einige Sünden aller Menschen – so John Owens berühmtes Trilemma. Hat er für alle Sünden aller Menschen bezahlt, auch für die Sünde des Unglaubens, warum kommen dann Menschen in die Hölle? Dann würde Gott dieselbe Schuld zweimal einfordern – einmal von Christus und einmal vom Verdammten. Das wäre ungerecht. Also hat Christus für die Sünden der Erwählten gesühnt, und für sie wirklich und wirksam. Der gute Hirte gibt sein Leben „für die Schafe" (Joh 10,11), Christus liebte „die Gemeinde und hat sich selbst für sie gegeben" (Eph 5,25), er rettet „sein Volk von ihren Sünden" (Mt 1,21). Ein Kreuz, das alle nur „rettbar" macht, aber niemanden sicher rettet, ist ein ohnmächtiges Kreuz. Die begrenzte Sühne ist in Wahrheit eine **bestimmte**, wirksame Sühne.`,
  biblical: {
    summary: `Die Schrift sagt ausdrücklich, dass Christus „die Versöhnung … für die der **ganzen Welt**" ist (1 Joh 2,2), dass er sich „**für alle** zur Erlösung" gab (1 Tim 2,6), „für alle den Tod schmeckte" (Hebr 2,9), „der Welt Sünde trägt" (Joh 1,29) und sogar Irrlehrer „erkauft hat", die ihn verleugnen und verloren gehen (2 Petr 2,1). Dass er besonders „für die Schafe" und „für die Gemeinde" starb, widerspricht dem nicht: Wer sagt „Christus starb für mich", leugnet nicht, dass er auch für andere starb. Die Sühne ist **für alle** gültig und **wirksam** für die, die sie im Glauben und in den Sakramenten annehmen (1 Tim 4,10: „Heiland aller Menschen, sonderlich der Gläubigen").`,
    detail: `**Die Universalstellen sind zahlreich und unabhängig:** Joh 1,29; 3,16–17; 4,42 („der Welt Heiland"); 6,51 („für das Leben der Welt"); 2 Kor 5,14–15 („einer für alle gestorben"); 1 Tim 2,6; 4,10; Tit 2,11 („die heilsame Gnade Gottes allen Menschen erschienen"); Hebr 2,9; 1 Joh 2,2; 4,14.

**2 Petr 2,1** ist besonders schwer für die begrenzte Sühne: Die Irrlehrer verleugnen „den Herrn, der sie erkauft hat" (*agorasanta*, dasselbe Verb wie für die Erlösung in 1 Kor 6,20 und Offb 5,9) und ziehen sich „schnelle Verdammnis" zu.

**1 Tim 4,10** unterscheidet genau: Gott ist „der Heiland aller Menschen, **sonderlich** der Gläubigen". Das Heil ist für alle bereitet, wird aber nur von den Glaubenden empfangen.

**„Für die Schafe" (Joh 10,11):** Eine positive Aussage über eine Gruppe ist keine negative Aussage über alle anderen. Paulus sagt: „der Sohn Gottes, der mich geliebt hat und sich selbst für **mich** dargegeben" (Gal 2,20) – niemand schließt daraus, Christus sei nur für Paulus gestorben.`,
    sources: [
      { kind: 'bibel', work: '1. Johannes', ref: '2,2', quote: `Und derselbe ist die Versöhnung für unsre Sünden, nicht allein aber für die unsren, sondern auch für die der ganzen Welt.`, translation: 'Luther 1912', status: 'verbatim', original: `καὶ αὐτὸς ἱλασμός ἐστιν περὶ τῶν ἁμαρτιῶν ἡμῶν, οὐ περὶ τῶν ἡμετέρων δὲ μόνον ἀλλὰ καὶ περὶ ὅλου τοῦ κόσμου.` },
      { kind: 'bibel', work: '1. Timotheus', ref: '4,10', quote: `… daß wir auf den lebendigen Gott gehofft haben, welcher ist der Heiland aller Menschen, sonderlich der Gläubigen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '2,9', quote: `Den aber, der eine kleine Zeit niedriger gewesen ist als die Engel, Jesum, sehen wir durchs Leiden des Todes gekrönt mit Preis und Ehre, auf daß er von Gottes Gnaden für alle den Tod schmeckte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Petrus', ref: '2,1', quote: `… die werden nebeneinführen verderbliche Sekten und verleugnen den HERRN, der sie erkauft hat, und werden über sich selbst herbeiführen eine schnelle Verdammnis.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '5,14–15', quote: `Denn die Liebe Christi dringt uns also, sintemal wir halten, daß, so einer für alle gestorben ist, so sind sie alle gestorben. Und er ist darum für alle gestorben, auf daß die, so da leben, hinfort nicht sich selbst leben, sondern dem, der für sie gestorben und auferstanden ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,29', quote: `Siehe, das ist Gottes Lamm, welches der Welt Sünde trägt!`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die koptische Kirche ist das Kreuz nicht in erster Linie eine Rechnung, bei der eine bestimmte Menge Schuld bezahlt wird, sondern das Werk des menschgewordenen Logos, der **die menschliche Natur** angenommen hat, um sie als Ganze zu heilen, vom Tod zu befreien und zu erneuern. Weil er die Natur aller Menschen annahm, starb er für alle. Die Liturgie betet, dass Christus sich hingab „für das Leben der Welt". Das Heil ist allen angeboten; wer es in Glaube, Taufe und Buße annimmt, empfängt es wirklich.`,
    detail: `**Athanasius:** Der Logos nahm einen Leib an, der fähig war zu sterben, damit er „für alle" sterben und den Tod für alle aufheben konnte; der Tod aller wurde im Leib des Herrn erfüllt (De Inc. 8–9). Das ist kein Zahlungsgeschäft für eine begrenzte Liste, sondern der Sieg über den Tod in der gemeinsamen Natur.

**Kyrill von Alexandrien:** Christus ist der zweite Adam, in dem die ganze Natur neu beginnt; wie in Adam alle sterben, so werden in Christus alle lebendig gemacht (1 Kor 15,22).

**Liturgie:** In den Einsetzungsworten der koptischen Basilius-Liturgie wird der Leib Christi „für uns" und das Blut „für die Vergebung der Sünden" hingegeben; das Brot des Lebens ist nach Joh 6,51 „für das Leben der Welt". Die Kirche betet in jeder Liturgie für die ganze Welt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '8–9', quote: `Er nahm einen Leib an, der sterben konnte, damit er ihn anstelle aller dem Tod übergebe und so den Tod für alle aufhebe.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Johannes', ref: '6,51', quote: `Und das Brot, das ich geben werde, ist mein Fleisch, welches ich geben werde für das Leben der Welt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', status: 'paraphrase', note: 'Christus als zweiter Adam und Anfang der erneuerten Menschennatur – ein Grundmotiv in Kyrills Johanneskommentar.' },
    ],
  },
  quickAnswer: `Die Bibel sagt es ausdrücklich: Christus ist die Versöhnung „nicht allein für unsre Sünden, sondern auch für die der ganzen Welt" (1 Joh 2,2), er gab sich „für alle" (1 Tim 2,6) und hat sogar Irrlehrer „erkauft", die verloren gehen (2 Petr 2,1). Er nahm die Natur aller Menschen an, um alle zu retten. Die Rettung ist für alle bereitet und wird von denen empfangen, die glauben – Gott ist „der Heiland aller Menschen, sonderlich der Gläubigen" (1 Tim 4,10).`,
  keyPoints: [
    `**Ausdrückliche Universalstellen:** 1 Joh 2,2; 1 Tim 2,6; 4,10; Hebr 2,9; Joh 1,29; 2 Kor 5,14–15; Tit 2,11.`,
    `**2 Petr 2,1:** Christus hat sogar die „erkauft", die ihn verleugnen und verloren gehen – das widerlegt eine Sühne nur für die Erwählten.`,
    `**„Für die Schafe" schließt andere nicht aus** – so wenig wie „für mich" (Gal 2,20) andere ausschließt.`,
    `**Owens Trilemma beruht auf einem Handelsmodell** der Sühne. Die Väter sehen das Kreuz als Heilung der ganzen menschlichen Natur: Die Gabe ist für alle, die Annahme persönlich.`,
    `**Sogar viele Reformierte** (Amyraldisten, „Vier-Punkte-Calvinisten") lehnen die begrenzte Sühne ab; ob Calvin selbst sie lehrte, ist unter Forschern umstritten.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als Lehrer der Erlösung',
      text: `Für Athanasius ist der Tod Christi untrennbar von der Menschwerdung: Der Logos nahm einen sterblichen Leib „aus unserem Geschlecht" an, damit in ihm der Tod aller sterbe. Weil er unsere gemeinsame Natur trug, gilt sein Tod für alle Menschen, und durch seine Auferstehung ist der Same der Unvergänglichkeit in die ganze Menschheit gelegt. Eine Sühne nur für einen Teil der Menschen ist in diesem Denken schlicht nicht vorgesehen.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '8–10; 20', status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Ausleger des zweiten Adam',
      text: `Kyrill liest das Heil vom zweiten Adam her: So wie die ganze Natur in Adam fiel, so wird die ganze Natur in Christus neu geschaffen. Christus ist der „Erstling" der erneuerten Menschheit. Das Heil ist für alle, die an dieser Natur teilhaben – also für jeden Menschen – und wird dem Einzelnen in Glaube, Taufe und Eucharistie zu eigen.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium; Kommentar zum Römerbrief (Fragmente)', status: 'paraphrase' }],
    },
    {
      person: 'roger-olson',
      role: 'als evangelikaler Kritiker',
      text: `Olson weist darauf hin, dass die begrenzte Sühne selbst unter Reformierten der umstrittenste der „fünf Punkte" ist. Er argumentiert, dass sie die Evangelisation lähmt: Wer nicht weiß, ob Christus für sein Gegenüber gestorben ist, kann diesem nicht aufrichtig sagen, dass Gott ihn liebt und Christus für ihn starb.`,
      sources: [{ kind: 'fachliteratur', author: 'Roger E. Olson', work: 'Against Calvinism', year: '2011', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'owens-trilemma',
      objection: `„Owens Trilemma: Wenn Christus für alle Sünden aller Menschen bezahlt hat – auch für den Unglauben –, dann würde Gott dieselbe Schuld zweimal einfordern, wenn er Ungläubige bestraft. Das ist ungerecht."`,
      objectionBy: 'John Owen / James White',
      answer: `Das Trilemma setzt voraus, dass das Kreuz wie eine Geldzahlung funktioniert, die automatisch auf ein Konto gebucht wird. Die Schrift spricht aber vom Kreuz als einem **Angebot**, das empfangen werden muss: „auf dass alle, die an ihn glauben, nicht verloren werden" (Joh 3,16). Ein Arzt kann ein Heilmittel für alle bereitstellen, auch wenn manche es nicht nehmen – niemand würde sagen, das Mittel sei deshalb „nur für die Geheilten" hergestellt worden.`,
      detail: `Selbst unter Calvinisten wird die streng kommerzielle Logik kritisiert: Wenn die Sühne automatisch für die Erwählten gilt, wären die Erwählten schon vor ihrer Bekehrung gerechtfertigt – Paulus sagt aber, sie waren „Kinder des Zorns von Natur wie auch die andern" (Eph 2,3), bis sie glaubten. Also wird auch nach reformierter Lehre die Sühne erst durch den Glauben wirksam. Dann kann sie auch für alle bereitet sein und nur durch Glauben empfangen werden.`,
      sources: [
        { kind: 'gegner', author: 'John Owen', work: 'The Death of Death in the Death of Christ', year: '1647', status: 'paraphrase', quote: `Christus litt entweder für alle Sünden aller Menschen, oder für alle Sünden einiger Menschen, oder für einige Sünden aller Menschen.` },
        { kind: 'bibel', work: 'Epheser', ref: '2,3', quote: `… und waren auch Kinder des Zorns von Natur, gleichwie auch die andern.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [`Waren die Erwählten vor ihrer Bekehrung schon gerechtfertigt? Wenn nein – warum soll dann nicht auch für andere die Sühne erst durch Glauben wirksam werden?`],
      followUps: [
        {
          id: 'unglaube-ist-auch-suende',
          objection: `„Aber Unglaube ist auch eine Sünde. Wenn Christus für alle Sünden aller starb, dann auch für den Unglauben – also kann niemand wegen Unglaubens verloren gehen."`,
          objectionBy: 'John Owen',
          answer: `Unglaube ist mehr als eine einzelne Sünde – er ist die Weigerung, die Vergebung überhaupt anzunehmen. Ein Begnadigter, der die Begnadigung zerreißt, bleibt im Gefängnis, nicht weil die Begnadigung zu schwach war, sondern weil er sie ablehnt. Jesus sagt: „Das ist das Gericht, dass das Licht in die Welt gekommen ist, und die Menschen liebten die Finsternis mehr" (Joh 3,19).`,
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '3,18–19', quote: `Wer an ihn glaubt, der wird nicht gerichtet; wer aber nicht glaubt, der ist schon gerichtet; denn er glaubt nicht an den Namen des eingeborenen Sohnes Gottes. Das ist aber das Gericht, daß das Licht in die Welt gekommen ist, und die Menschen liebten die Finsternis mehr denn das Licht.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'ohnmaechtiges-kreuz',
              objection: `„Dann hat das Kreuz niemanden sicher gerettet, sondern alle nur ‚rettbar' gemacht. Euer Kreuz ist ohnmächtig."`,
              objectionBy: 'John Piper',
              answer: `Das Kreuz hat den Tod besiegt, den Teufel entmachtet (Hebr 2,14) und die menschliche Natur in Christus geheilt – das ist kein „Vielleicht". Dass Gott die Annahme dieses Sieges nicht erzwingt, ist keine Schwäche, sondern Liebe. Und wirksam ist das Kreuz für jeden, der glaubt, getauft wird und in Christus bleibt.`,
              sources: [
                { kind: 'bibel', work: 'Hebräer', ref: '2,14', quote: `… auf daß er durch den Tod die Macht nähme dem, der des Todes Gewalt hatte, das ist dem Teufel.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'welt-heisst-auserwaehlte',
      objection: `„‚Die ganze Welt' in 1 Joh 2,2 heißt: nicht nur Juden, sondern Erwählte aus allen Völkern. Johannes schreibt an jüdische Christen und erweitert den Horizont."`,
      objectionBy: 'Reformierter Exeget (vgl. Calvins Kommentar zu 1 Joh 2,2)',
      answer: `Johannes gebraucht „die ganze Welt" in demselben Brief noch einmal: „Die ganze Welt liegt im Argen" (1 Joh 5,19). Dort meint er gewiss nicht „die Erwählten aus allen Völkern". Und der Brief ist wahrscheinlich nicht an eine rein jüdische Gemeinde gerichtet. Die einfachste Lesart: Christus ist die Sühne für unsere Sünden – und für die aller Menschen.`,
      sources: [
        { kind: 'bibel', work: '1. Johannes', ref: '5,19', quote: `Wir wissen, daß wir von Gott sind, und die ganze Welt liegt im Argen.`, translation: 'Luther 1912', status: 'verbatim', original: `ὁ κόσμος ὅλος ἐν τῷ πονηρῷ κεῖται` },
      ],
      questionsBack: [`Bedeutet „die ganze Welt" in 1 Joh 5,19 „alle Erwählten aus allen Völkern"? Wenn nicht – warum dann in 2,2?`],
      followUps: [
        {
          id: 'hinreichend-aber-nicht-wirksam',
          objection: `„Wir sagen ja: Der Tod Christi ist *hinreichend* für alle, aber nur *wirksam* für die Erwählten (Dordrecht II,3 und II,8). Damit erklären wir 1 Joh 2,2."`,
          objectionBy: 'Reformierter Theologe',
          answer: `Die Unterscheidung „hinreichend für alle, wirksam für die Glaubenden" ist alt und gut – wir teilen sie. Aber Dordrecht macht daraus „wirksam nur für die, die Gott von Ewigkeit dazu bestimmt hat". Wenn Christus nach Gottes Absicht nur für die Erwählten starb, ist die „Hinlänglichkeit" für die anderen eine rein theoretische Größe – wie ein Rettungsboot mit genug Plätzen, das aber für bestimmte Menschen nie bestimmt war. 2 Petr 2,1 sagt mehr: Christus hat auch die Verlorenen *erkauft*.`,
          followUps: [
            {
              id: 'calvin-lehrte-es-nicht',
              objection: `„Interessant – du weißt aber, dass die begrenzte Sühne gar nicht von Calvin stammt? Viele Reformierte halten sie gar nicht."`,
              objectionBy: 'Gemäßigter Reformierter (Amyraldist)',
              answer: `Genau – und das ist ein gutes Zeichen. Ob Calvin selbst die begrenzte Sühne lehrte, ist unter Historikern umstritten (R. T. Kendall bestritt es 1979, Paul Helm widersprach). Moses Amyraut und viele „Vier-Punkte-Calvinisten" lehnten sie ab. Wenn schon innerhalb der reformierten Tradition diese Lehre so schwach verankert ist, sollten wir sie nicht zur Bedingung der Rechtgläubigkeit machen.`,
              sources: [
                { kind: 'fachliteratur', author: 'R. T. Kendall', work: 'Calvin and English Calvinism to 1649', year: '1979', status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'Paul Helm', work: 'Calvin and the Calvinists', year: '1982', status: 'paraphrase', note: 'Reformierte Gegenposition zu Kendall.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gute-hirte-fuer-die-schafe',
      objection: `„Der gute Hirte lässt sein Leben ‚für die Schafe' (Joh 10,11), und zu den Pharisäern sagt er: ‚Ihr seid von meinen Schafen nicht' (10,26). Also starb er nicht für sie."`,
      objectionBy: 'James White',
      answer: `Joh 10,26 sagt, warum die Pharisäer nicht glauben: Sie gehören (noch) nicht zur Herde. Es sagt nicht, dass Christus nicht für sie starb. Kaiphas, einer dieser Gegner, prophezeite sogar, Jesus solle „für das Volk" sterben – „und nicht für das Volk allein, sondern dass er die Kinder Gottes, die zerstreut waren, zusammenbrächte" (Joh 11,51–52). Und am Kreuz betete Jesus für seine Mörder: „Vater, vergib ihnen" (Lk 23,34).`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '23,34', quote: `Jesus aber sprach: Vater, vergib ihnen; denn sie wissen nicht, was sie tun!`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Galater', ref: '2,20', quote: `… der Sohn Gottes, der mich geliebt hat und sich selbst für mich dargegeben.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'evangelisation-trotzdem',
          objection: `„Wir evangelisieren trotzdem allen Menschen – wir wissen ja nicht, wer erwählt ist. Deine Kritik ist also praktisch irrelevant."`,
          objectionBy: 'Reformierter Evangelist',
          answer: `Ihr evangelisiert – und das ehrt euch. Aber was sagt ihr dem Einzelnen? „Christus ist vielleicht für dich gestorben"? Die Apostel predigten anders: „Euch ist das Wort dieses Heils gesandt" (Apg 13,26), „lasst euch versöhnen mit Gott" (2 Kor 5,20). Die Einladung ist aufrichtig, weil die Versöhnung für jeden Hörer bereitet ist.`,
          questionsBack: [`Darfst du einem fremden Menschen auf der Straße ohne Einschränkung sagen: „Jesus ist für dich gestorben"?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wen meint 2 Petr 2,1 mit den Irrlehrern, die „den Herrn verleugnen, der sie erkauft hat" – und wie können Erkaufte verloren gehen, wenn Christus nur für die Erwählten starb?`,
    `Bedeutet „die ganze Welt" in 1 Joh 5,19 dasselbe wie in 1 Joh 2,2?`,
    `Für wen betete Jesus am Kreuz, als er sagte: „Vater, vergib ihnen"?`,
    `Wenn Christus nicht für alle starb – mit welchem Recht macht Gott den Ungläubigen dafür verantwortlich, ein Opfer abgelehnt zu haben, das nie für ihn bestimmt war?`,
  ],
  avoid: [
    `Nicht behaupten, alle Calvinisten lehrten die begrenzte Sühne – viele Reformierte lehnen gerade diesen Punkt ab.`,
    `Nicht ins andere Extrem fallen und eine automatische Allerlösung (Universalismus) behaupten. Die Sühne ist für alle bereitet, aber nicht jeder nimmt sie an.`,
    `Nicht unterstellen, Calvinisten evangelisierten nicht – viele sind eifrige Missionare.`,
  ],
  concessions: [
    `Die Schrift spricht tatsächlich von einer besonderen Liebe Christi zu seiner Kirche (Eph 5,25) und von seinem Tod „für die Schafe". Die Calvinisten haben recht, dass das Kreuz nicht nur eine vage Möglichkeit, sondern eine wirksame Tat ist.`,
    `Die Unterscheidung „hinreichend für alle, wirksam für die Glaubenden" ist alt und wird auch von nicht-calvinistischen Theologen gebraucht.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione, Kap. 6–10', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David L. Allen', work: 'The Extent of the Atonement: A Historical and Critical Review', year: '2016', status: 'paraphrase', note: 'Umfassende historische Kritik der begrenzten Sühne von einem Baptisten.' },
    { kind: 'gegner', author: 'David Gibson / Jonathan Gibson (Hg.)', work: 'From Heaven He Came and Sought Her: Definite Atonement in Historical, Biblical, Theological, and Pastoral Perspective', year: '2013', status: 'paraphrase', note: 'Die stärkste wissenschaftliche Verteidigung der Gegenposition.' },
  ],
  difficulty: 2,
  tags: ['Calvinismus', 'Sühne', 'Kreuz', 'Erlösung', 'TULIP'],
  related: ['calvinismus/doppelte-praedestination', 'calvinismus/unwiderstehliche-gnade', 'islam-kreuzigung/niemand-traegt-last', 'sola-fide/allein-durch-glauben'],
};

export default claim;
