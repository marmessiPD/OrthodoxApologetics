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
    {
      id: 'hohepriester-fuerbitte',
      objection: `„Opfer und Fürbitte des Hohepriesters gehören zusammen. Christus sagt in Joh 17,9: ‚Ich bitte nicht für die Welt, sondern für die, die du mir gegeben hast.' Für wen er nicht betet, für den ist er auch nicht gestorben."`,
      objectionBy: 'John Owen / James White',
      answer: `Joh 17,9 handelt von den Jüngern in dieser Stunde – und schon in Vers 20–21 weitet Jesus die Bitte aus, „damit die Welt glaube". Am Kreuz betet er für seine Henker: „Vater, vergib ihnen" (Lk 23,34). Und Paulus verknüpft Fürbitte und Sühne genau umgekehrt: Wir sollen „für alle Menschen" beten, weil Christus sich selbst gegeben hat „für alle zur Erlösung" (1 Tim 2,1–6).`,
      detail: `Das Argument aus der Einheit von Opfer und Fürbitte ist eine Schlussfolgerung, kein Bibelwort. Der Hohepriester Israels opferte am Versöhnungstag für das ganze Volk – auch für die, die später abfielen. Und die neutestamentliche Fürbitte Christi ist nicht auf die Erwählten beschränkt: Er bittet für die, die ihn kreuzigen, und lehrt die Kirche, für Feinde und Herrscher zu beten. In der koptischen Liturgie betet die Kirche ausdrücklich für die ganze Welt, die Kranken, die Reisenden, die Herrscher – weil Christus „das Leben der Welt" ist (Joh 6,51).`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '23,34', quote: `Vater, vergib ihnen; denn sie wissen nicht, was sie tun!`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: '1. Timotheus', ref: '2,1–6', quote: `So ermahne ich nun, dass man vor allen Dingen zuerst tue Bitte, Gebet, Fürbitte und Danksagung für alle Menschen … der sich selbst gegeben hat für alle zur Erlösung.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
      questionsBack: [`Hat Jesus am Kreuz für Menschen gebetet, für die er nach deiner Lehre nicht gestorben ist?`],
      followUps: [
        {
          id: 'fuer-viele-nicht-fuer-alle',
          objection: `„Jesus selbst sagt: ‚Sein Leben zu geben zur Erlösung für viele' (Mk 10,45) und ‚mein Blut, vergossen für viele' (Mt 26,28). Er sagt ‚viele', nicht ‚alle'."`,
          objectionBy: 'James White',
          answer: `„Viele" (hebräisch *rabbim*) stammt aus Jes 53,11–12 und ist im semitischen Sprachgebrauch inklusiv: die große Menge, der Eine gegenübersteht. Paulus übersetzt Mk 10,45 selbst: Christus gab sich „als Lösegeld für **alle**" (1 Tim 2,6, *antilytron hyper pantōn*). Und in Röm 5,15–19 wechselt er zwischen „die vielen" und „alle Menschen" für dieselbe Gruppe.`,
          detail: `Der lutherische Neutestamentler Joachim Jeremias hat gezeigt, dass „viele" in den Abendmahlsworten und in Mk 10,45 kein ausschließendes „nicht alle" meint, sondern die unzählbare Gesamtheit im Gegensatz zu dem Einen, der sich hingibt. Röm 5 zeigt das sprachlich eindeutig: „durch eines Ungehorsam sind viele Sünder geworden" (5,19) – das heißt alle (5,12.18).`,
          voices: [
            {
              person: 'joachim-jeremias',
              role: 'als Erforscher des semitischen Hintergrunds der Jesusworte',
              text: `Jeremias weist nach, dass das hebräische und aramäische „die Vielen" einen inklusiven Sinn hat – die Gesamtheit, die dem Einzelnen gegenübersteht – und dass die Jesusworte über das Lösegeld und das Blut „für viele" auf Jes 53 zurückgreifen. Die Übersetzung „für alle" in 1 Tim 2,6 ist für ihn die sachgemäße Wiedergabe.`,
              sources: [{ kind: 'fachliteratur', author: 'Joachim Jeremias', work: 'Die Abendmahlsworte Jesu', year: '1935, 4. Aufl. 1967', status: 'paraphrase' }],
            },
          ],
          sources: [
            { kind: 'bibel', work: 'Römer', ref: '5,18–19', quote: `Wie nun durch eines Sünde die Verdammnis über alle Menschen gekommen ist, so ist auch durch eines Gerechtigkeit die Rechtfertigung des Lebens über alle Menschen gekommen … durch eines Ungehorsam sind viele Sünder geworden.`, translation: 'Luther 1912', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'alle-arten-von-menschen',
              objection: `„In 1 Tim 2 bedeutet ‚alle' doch ‚alle Arten von Menschen' – Paulus nennt im selben Atemzug Könige und Obrigkeit. Gemeint ist: nicht nur einfache Leute, sondern Menschen aus allen Ständen."`,
              objectionBy: 'John Piper',
              answer: `Paulus sagt zuerst „für **alle Menschen**" und nennt die Könige dann als Beispiel innerhalb dieser Gesamtheit. Die Begründung reicht noch weiter: „Denn es ist **ein** Gott und **ein** Mittler zwischen Gott und den Menschen" (2,5). So universal wie der eine Gott ist, so universal ist der eine Mittler. Und Athanasius sagt schlicht: Der Logos hat seinen Leib „für alle" in den Tod gegeben, damit der Tod für alle aufgehoben werde.`,
              sources: [
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '8–9', year: 'ca. 318', status: 'paraphrase', quote: `Er nahm einen Leib an, der sterben konnte, und gab ihn für alle in den Tod, damit durch seinen Tod alle vom Verderben befreit würden.` },
              ],
              followUps: [
                {
                  id: 'zwei-willen-in-gott',
                  objection: `„Gott hat zwei Willen: einen Willen des Wohlgefallens, der alle Menschen gerettet sehen möchte, und einen Willen des Ratschlusses, der nur die Erwählten rettet. 1 Tim 2,4 beschreibt den ersten, die begrenzte Sühne folgt aus dem zweiten."`,
                  objectionBy: 'John Piper („Are There Two Wills in God?")',
                  answer: `Auch die Väter unterscheiden zwei Willen – aber anders: Johannes von Damaskus nennt Gottes **vorausgehenden** Willen, dass alle gerettet werden, und seinen **nachfolgenden** Willen, der auf die freie Weigerung des Menschen antwortet. Bei Piper dagegen wünscht Gott das Heil eines Menschen, beschließt aber selbst, ihm das Mittel dazu – den Tod Christi – vorzuenthalten. Dann wäre der Wunsch in 1 Tim 2,4 nicht aufrichtig.`,
                  detail: `Die Unterscheidung des Damaszeners hält beide Seiten zusammen: Gott will ernsthaft das Heil aller und tut alles dafür; dass manche verloren gehen, liegt nicht an einem verborgenen Gegenbeschluss, sondern an der Ablehnung des Menschen. Die calvinistische Lösung verlegt den Widerspruch in Gott selbst. Frag ruhig: Was ist ein „Wunsch", den Gott jederzeit erfüllen könnte, aber von Ewigkeit her selbst durchkreuzt?`,
                  voices: [
                    {
                      person: 'johannes-damaskus',
                      role: 'als Systematiker der östlichen Väter',
                      text: `Johannes von Damaskus unterscheidet in seiner Lehre von der Vorsehung den vorausgehenden Willen Gottes – sein Wohlgefallen, aus dem er alle retten und zum Guten führen will – vom nachfolgenden Willen, der Zulassung und gerechtes Gericht umfasst und durch die Schuld des Menschen veranlasst ist. Gott ist Ursache alles Guten, nicht aber des Bösen und des Verderbens.`,
                      sources: [{ kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Darlegung des orthodoxen Glaubens (Expositio fidei)', ref: 'II,29', year: '8. Jh.', status: 'paraphrase' }],
                    },
                  ],
                  questionsBack: [`Wenn Gott das Heil eines Menschen wünscht, warum hat er dann beschlossen, für diesen Menschen kein Opfer bereitzustellen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '2-petr-2-1-erkauft',
      objection: `„Du führst 2 Petr 2,1 an – die Irrlehrer ‚verleugnen den Herrn, der sie erkauft hat'. Aber dort steht *despotēs*, nicht Erlöser: Es geht um Gottes Besitzrecht als Schöpfer, nicht um die Sühne. Oder Petrus gibt nur den Anspruch der Irrlehrer wieder."`,
      objectionBy: 'James White / reformierte Exegeten',
      answer: `Das Verb „erkaufen" (*agorazō*) ist im Neuen Testament das Wort für die Erlösung durch Christi Blut: „Ihr seid teuer erkauft" (1 Kor 6,20; 7,23), „du hast uns Gott erkauft mit deinem Blut" (Offb 5,9). Petrus sagt also: Diese Menschen wurden von Christus erkauft – und gehen dennoch verloren, weil sie ihn verleugnen. Genau das schließt die begrenzte Sühne aus.`,
      detail: `Petrus greift wohl Dtn 32,6 auf („Ist er nicht dein Vater und dein Herr?") – aber im Licht des Kreuzes. Die Deutung als bloßer Anspruch der Irrlehrer steht nicht im Text: Petrus spricht in eigener Stimme. Auch Hebr 10,29 spricht von einem, der „das Blut des Testaments unrein achtet, durch welches er geheiligt ist". Die Schrift rechnet mit Menschen, für die Christus starb und die diese Gabe verwerfen.`,
      sources: [
        { kind: 'bibel', work: '2. Petrus', ref: '2,1', quote: `… die da verleugnen den Herrn, der sie erkauft hat, und werden über sich selbst herbeiführen eine schnelle Verdammnis.`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'bibel', work: 'Offenbarung', ref: '5,9', quote: `Du bist erwürgt und hast uns Gott erkauft mit deinem Blut.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'verschwendetes-blut',
          objection: `„Dann wäre Christi Blut für Millionen umsonst vergossen worden. Gott verschwendet das Blut seines Sohnes nicht."`,
          objectionBy: 'Reformierter Prediger',
          answer: `Ist die Liebe Gottes „verschwendet", wenn ein Mensch sie zurückweist? Der Vater im Gleichnis läuft dem Sohn entgegen, und der ältere Bruder bleibt draußen – doch die Einladung war echt (Lk 15,28–32). Christi Tod ist nie umsonst: Er offenbart Gottes Liebe zu allen, besiegt den Tod für die ganze menschliche Natur und macht jeden Menschen ohne Ausrede (Joh 3,18–19). „Verschwendung" ist eine Kategorie der Buchhaltung, nicht der Liebe.`,
          detail: `Die koptische Kirche sieht im Kreuz nicht in erster Linie eine genau abgezählte Zahlung, sondern den Sieg über Tod und Teufel und die Heilung der Natur, die der Logos angenommen hat (Hebr 2,14–15). Weil der Logos die menschliche Natur angenommen hat, die allen gemeinsam ist, betrifft sein Tod und seine Auferstehung grundsätzlich alle: Alle werden auferstehen (1 Kor 15,22). Ob ein Mensch das Leben empfängt, entscheidet sich in der Annahme durch Glauben und Taufe.`,
          followUps: [
            {
              id: 'dann-allversoehnung',
              objection: `„Wenn Christus wirklich für alle gestorben ist und Gott alle retten will, landest du zwangsläufig bei der Allversöhnung des Origenes – die deine eigene Kirche verworfen hat."`,
              objectionBy: 'James White',
              answer: `Nein. Zwischen „nur für einige gestorben" und „alle werden automatisch gerettet" liegt die biblische Lehre: Christus starb für alle, das Heil wird in Freiheit angenommen. Die Allversöhnung leugnet die Freiheit des Menschen zum Nein, die begrenzte Sühne leugnet die Liebe Gottes zu allen – beide Systeme lösen eine Spannung auf, die die Schrift stehen lässt. Die koptische Kirche hält beides: allgemeine Erlösungstat, persönliche Annahme.`,
              detail: `Die Logik „universal gemeint, also universal wirksam" teilen Calvinisten und Universalisten: Beide setzen voraus, dass Gottes Wille immer unwiderstehlich zum Ziel kommt. Der Calvinist begrenzt deshalb den Willen, der Universalist erweitert das Ergebnis. Die orthodoxe Lehre bestreitet die gemeinsame Voraussetzung: Gott hat sich in der Liebe selbst gebunden, die Freiheit des Geschöpfs zu achten.`,
              followUps: [
                {
                  id: 'gottschalk-augustinus',
                  objection: `„Die begrenzte Sühne ist nicht neu: Augustinus deutet 1 Tim 2,4 im Enchiridion einschränkend, und im 9. Jahrhundert lehrte Gottschalk von Orbais die doppelte Prädestination und eine Erlösung nur der Erwählten."`,
                  objectionBy: 'Reformierter Kirchenhistoriker',
                  answer: `Das stimmt – und lehrreich ist, wie die Kirche reagierte: Gottschalk wurde auf den Synoden von Mainz (848) und Quierzy (849) verurteilt, und Quierzy erklärte 853: Wie es keinen Menschen gibt, dessen Natur Christus nicht angenommen hat, so gibt es keinen Menschen, für den er nicht gelitten hat. Augustinus' einschränkende Deutungen blieben im Westen eine Einzelmeinung, im Osten wurden sie nie übernommen.`,
                  detail: `Augustinus bietet im Enchiridion (Kap. 103) mehrere Auslegungen von 1 Tim 2,4 an, darunter „alle Arten von Menschen". Für die koptische Kirche ist Augustinus ein geachteter Lehrer mit Vorbehalt; in der Gnadenlehre folgt sie den östlichen Vätern. Bemerkenswert ist, dass selbst die lateinische Kirche des Mittelalters, die Augustinus hoch verehrte, die Konsequenz einer begrenzten Sühne bei Gottschalk zurückwies.`,
                  sources: [
                    { kind: 'konzil', work: 'Synode von Quierzy, Kapitel 4', year: '853', status: 'paraphrase', quote: `Wie es keinen Menschen gibt, gab oder geben wird, dessen Natur in ihm nicht angenommen war, so gibt es keinen Menschen, gab oder wird geben, für den er nicht gelitten hat.` },
                    { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Enchiridion ad Laurentium', ref: '103', year: 'um 421', status: 'paraphrase', note: 'Augustinus deutet „alle" hier u. a. als „alle Arten von Menschen" – eine im Osten nicht übernommene Auslegung.' },
                  ],
                },
              ],
            },
          ],
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
