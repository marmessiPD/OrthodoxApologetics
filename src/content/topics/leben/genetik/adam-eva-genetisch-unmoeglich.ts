import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'adam-eva-genetisch-unmoeglich',
  title: `„Die Populationsgenetik schließt Adam und Eva aus."`,
  proponents: [
    { name: 'Dennis Venema', role: 'Biologe, Trinity Western University; evangelikaler Christ (theistische Evolution)', work: 'Venema & McKnight, Adam and the Genome: Reading Scripture after Genetic Science (2017)' },
    { name: 'Francisco J. Ayala', role: 'Evolutionsgenetiker, UC Irvine (1934–2023)', work: '„The myth of Eve: molecular biology and human origins", Science 270 (1995)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009); Blogbeiträge zu Adam und Eva' },
    { name: 'Peter Enns', role: 'Alttestamentler, Eastern University', work: 'The Evolution of Adam (2012)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Ancestor\'s Tale (2004)' },
  ],
  steelman: `Die genetische Vielfalt der heutigen Menschheit lässt sich mit mehreren unabhängigen Methoden auf ihre Vorgeschichte zurückrechnen: über die Heterozygotie, über das Kopplungsungleichgewicht benachbarter Genvarianten, über das Häufigkeitsspektrum seltener Varianten und über Koaleszenzmodelle wie PSMC (Li & Durbin 2011). Alle kommen zum selben Ergebnis: Die effektive Populationsgröße unserer Vorfahren lag über Hunderttausende Jahre bei rund zehntausend Individuen und fiel nie auf zwei. Ein einzelnes Paar trägt höchstens vier Varianten jedes Gens – an vielen Genorten, etwa im Immunsystem (HLA), gibt es aber Dutzende uralte Allellinien, die teils älter sind als die Trennung von Mensch und Schimpanse. Diese Vielfalt kann in einigen tausend Jahren nicht durch neue Mutationen entstanden sein. Ein Adam und eine Eva vor 6.000 bis 10.000 Jahren als einzige Stammeltern aller Menschen sind genetisch ausgeschlossen. Selbst der Christ Dennis Venema sagt: Die Bevölkerung sank nie unter mehrere tausend.`,
  biblical: {
    summary: `Die Schrift stellt Adam als realen Stammvater dar: Lukas führt die Genealogie Jesu bis zu „Adam, der war Gottes" (Lk 3,38); Paulus baut seine Lehre von Sünde und Erlösung auf der Parallele zwischen dem einen Menschen Adam und dem einen Menschen Christus auf (Röm 5,12–21; 1 Kor 15,21–22.45); Christus selbst verweist auf die Erschaffung von Mann und Frau „im Anfang" (Mt 19,4). Zugleich ist der Text in Gen 4 auffällig offen: Kain fürchtet, „wer mich findet", werde ihn töten (Gen 4,14), findet eine Frau und baut eine Stadt (Gen 4,17). Manche Ausleger sehen darin einen Hinweis auf weitere Menschen außerhalb der unmittelbaren Erzählung – ein Ansatzpunkt genealogischer Modelle.`,
    detail: `Was der Text verbindlich festhält: (1) Adam und Eva sind reale Personen; (2) alle Menschen stammen von ihnen ab (Apg 17,26; Gen 3,20 „Mutter aller Lebendigen"); (3) durch Adam kamen Sünde und Tod in die Welt, durch Christus die Auferstehung. Was der Text nicht festlegt: das genaue Datum, die Frage, ob „abstammen" genetisch ausschließlich oder genealogisch zu verstehen ist, und die biologische Vorgeschichte des Leibes.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '5,12', translation: 'Luther 1912', status: 'verbatim', quote: `Derhalben, wie durch einen Menschen die Sünde ist gekommen in die Welt und der Tod durch die Sünde, und ist also der Tod zu allen Menschen durchgedrungen, dieweil sie alle gesündigt haben;` },
      { kind: 'bibel', work: '1. Korinther', ref: '15,21–22', translation: 'Luther 1912', status: 'verbatim', quote: `Sintemal durch einen Menschen der Tod und durch einen Menschen die Auferstehung der Toten kommt. Denn gleichwie sie in Adam alle sterben, also werden sie in Christus alle lebendig gemacht werden.` },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,26', translation: 'Luther 1912', status: 'verbatim', quote: `und hat gemacht, daß von einem Blut aller Menschen Geschlechter auf dem ganzen Erdboden wohnen …` },
      { kind: 'bibel', work: 'Lukas', ref: '3,38', translation: 'Luther 1912', status: 'verbatim', quote: `der war ein Sohn des Enos, der war ein Sohn Seths, der war ein Sohn Adams, der war Gottes.` },
      { kind: 'bibel', work: 'Genesis', ref: '3,20', translation: 'Luther 1912', status: 'verbatim', quote: `Und Adam hieß sein Weib Eva, darum daß sie eine Mutter ist aller Lebendigen.` },
      { kind: 'bibel', work: 'Genesis', ref: '4,14–17', translation: 'Luther 1912', status: 'paraphrase', quote: `Kain fürchtet, jeder, der ihn finde, werde ihn töten; er erkennt seine Frau und baut eine Stadt.` },
    ],
  },
  church: {
    summary: `Für die koptisch-orthodoxe Kirche ist verbindlich: **Adam und Eva sind reale Personen, der Sündenfall ist real**, und alle Menschen tragen die Folgen der Sünde Adams (Sterblichkeit, Verderbnis, Neigung zur Sünde) – weshalb auch Kinder getauft werden. Die Kirche betont dabei weniger eine vererbte juristische Schuld (augustinischer Akzent) als die Teilhabe an der gefallenen, sterblichen Natur. Christus ist der neue Adam, in dem die Menschennatur erneuert wird. Über **Datum und biologische Einzelheiten** hat die Kirche kein Dogma formuliert.`,
    detail: `- **Irenäus** deutet die Genealogie bei Lukas, die von Christus bis zu Adam zurückführt, als Zeichen der „Rekapitulation": Christus fasst die ganze Menschheit von Adam an in sich zusammen und heilt sie.
- **Athanasius** beschreibt, wie der Mensch durch die Übertretung der Verderbnis anheimfiel und der Logos Mensch wurde, um sie zu überwinden (De Incarnatione 3–10).
- **Liturgie:** In der koptischen Psalmodie ist eine ganze Melodiefamilie nach Adam benannt – die „Adam"-Weise, nach dem Beginn eines Theotokions, das besingt, wie Gott den betrübten Adam in seine ursprüngliche Würde zurückführt. Adam ist in der gelebten Frömmigkeit eine konkrete Gestalt der Heilsgeschichte.
- Parallele aus dem Westen (keine Autorität für Kopten, aber aufschlussreich): Die römisch-katholische Enzyklika *Humani generis* (1950) lehnte den Polygenismus ab, ließ die Frage der Entstehung des Leibes aber offen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'III,22,3', status: 'paraphrase', quote: `Lukas führt die Genealogie vom Herrn bis zu Adam zurück, um zu zeigen, dass der Herr alle Völker, die seit Adam zerstreut waren, in sich zusammenfasst.` },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'III,21,10', status: 'paraphrase', quote: `Wie Adam aus jungfräulicher Erde gebildet wurde, so nahm der Herr aus der Jungfrau Maria Fleisch an, um Adam in sich zu erneuern.` },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '3–5', status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Psalmodie (Tasbeha), Theotokion des Montags; „Adam"-Weise', status: 'paraphrase', quote: `Adam, als sein Herz betrübt war, gefiel es dem Herrn, ihn in seine Herrschaft zurückzuführen.`, note: 'Sinngemäße Wiedergabe des Anfangs; nach diesem Text ist die Melodiefamilie „Adam" (für Sonntag bis Dienstag) benannt.' },
    ],
  },
  opposingView: {
    summary: `In der Populationsgenetik besteht breiter Konsens, dass die Vorfahren des heutigen Menschen in den letzten mehreren Hunderttausend Jahren nicht auf ein einzelnes Paar als **ausschließliche genetische** Stammeltern zurückgehen; Schätzungen der effektiven Populationsgröße liegen meist bei grob zehntausend. Dieser Konsens betrifft jedoch ein bestimmtes Modell. Neuere Arbeiten zeigen: (1) Ein Engpass von zwei Individuen **weiter zurück** – nach Swamidass' Analyse vor etwa 500.000 Jahren oder früher – lässt sich mit den heutigen Daten nicht sicher ausschließen. (2) Modelle mit ursprünglich vielfältig angelegten Genomen (Hössjer & Gauger 2019) kommen zu dem Ergebnis, dass ein einzelnes Paar vereinbar sein kann. (3) Genealogisch kann ein Paar, das vor wenigen tausend Jahren lebte, Vorfahr **aller** heute lebenden Menschen sein (Rohde, Olson & Chang 2004; Swamidass 2019).`,
    detail: `Ehrlich festhalten:
- Die Modelle (2) und (3) sind in der Fachwelt Minderheitenpositionen bzw. neu; Modell (2) wurde in einem ID-nahen Journal veröffentlicht.
- Die Vielfalt der HLA-Gene mit Allellinien, die älter sind als die Trennung von Mensch und Schimpanse, gilt als eines der stärksten Argumente gegen einen kurzen Engpass.
- „Mitochondriale Eva" und „Y-chromosomaler Adam" sind Koaleszenzpunkte einzelner DNA-Abschnitte, keine ersten Menschen; Christen sollten sie nicht als Beleg missbrauchen.
- Die genetischen Methoden beruhen auf Annahmen (konstante Mutationsraten, Panmixie, keine anfänglich „geschaffene" Vielfalt). Diese Annahmen sind für naturalistische Modelle vernünftig, aber genau sie stehen bei einem Schöpfungsmodell zur Diskussion.`,
    sources: [
      { kind: 'gegner', author: 'Dennis R. Venema, Scot McKnight', work: 'Adam and the Genome', year: '2017', status: 'paraphrase', quote: `Die genetischen Daten zeigen eine Population, die nie unter etwa zehntausend Individuen fiel; Adam und Eva seien nicht als alleinige Stammeltern zu verstehen.` },
      { kind: 'gegner', author: 'Francisco J. Ayala', work: '„The myth of Eve: molecular biology and human origins", Science 270', ref: 'S. 1930–1936', year: '1995', status: 'paraphrase', quote: `Die Vielfalt der HLA-Gene schließe einen Engpass auf sehr wenige Individuen in der menschlichen Vorgeschichte aus.` },
      { kind: 'wissenschaft', author: 'Heng Li, Richard Durbin', work: '„Inference of human population history from individual whole-genome sequences", Nature 475', ref: 'S. 493–496', year: '2011', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Ola Hössjer, Ann Gauger', work: '„A single-couple human origin is possible", BIO-Complexity 2019 (1)', year: '2019', status: 'paraphrase', quote: `Ein Modell mit einem einzelnen Ursprungspaar vor etwa 500.000 Jahren und ursprünglich vielfältig angelegten Genomen kann wesentliche Merkmale der heutigen genetischen Vielfalt reproduzieren.`, note: 'Ola Hössjer ist Professor für mathematische Statistik an der Universität Stockholm. BIO-Complexity ist ein ID-nahes Journal.' },
      { kind: 'wissenschaft', author: 'Douglas L. T. Rohde, Steve Olson, Joseph T. Chang', work: '„Modelling the recent common ancestry of all living humans", Nature 431', ref: 'S. 562–566', year: '2004', status: 'paraphrase', quote: `Der jüngste gemeinsame genealogische Vorfahr aller heute lebenden Menschen könnte vor wenigen Jahrtausenden gelebt haben.` },
    ],
  },
  quickAnswer: `Die Genetik schließt nur ein bestimmtes Modell aus: ein Paar vor wenigen tausend Jahren als **einzige genetische** Quelle der Menschheit, ohne ursprünglich angelegte Vielfalt. Sie schließt nicht aus, dass ein Paar viel früher lebte (Swamidass, Hössjer & Gauger), dass Gott Adam und Eva mit genetischer Vielfalt schuf, oder dass ein reales Paar der **genealogische** Vorfahr aller heutigen Menschen ist. Selbst der Christ und Genetiker Joshua Swamidass, der die gemeinsame Abstammung akzeptiert, zeigt: Ein realer Adam ist mit den Daten vereinbar. Für die Kirche ist das Datum keine Dogmenfrage – die Realität Adams schon.`,
  keyPoints: [
    `**Ausgeschlossen ist nur ein Modell:** ein junges Paar als ausschließliche genetische Stammeltern ohne angelegte Vielfalt.`,
    `**Genealogie ist nicht Genetik:** Ein Paar vor wenigen Jahrtausenden kann Vorfahr aller heutigen Menschen sein (Rohde et al. 2004; Swamidass 2019).`,
    `**Tiefe Engpässe sind offen:** Ein Paar vor rund 500.000 Jahren oder früher ist nach aktuellen Analysen nicht sicher ausgeschlossen (Swamidass; Hössjer & Gauger 2019; vgl. Craig 2021).`,
    `**Annahmen prüfen:** Rückrechnungen setzen voraus, dass am Anfang keine geschaffene Vielfalt stand – genau das steht zur Debatte.`,
    `**Mitochondriale Eva und Y-Adam sind keine Belege** – weder für noch gegen; sie sind Koaleszenzpunkte.`,
    `**Theologisch verbindlich:** Adam und Eva sind reale Personen; der Fall ist real; Christus ist der neue Adam. Datum und Biologie sind offene Fragen.`,
  ],
  argument: {
    name: 'Was die Populationsgenetik ausschließt – und was nicht',
    summary: 'Die Behauptung „Genetik schließt Adam aus" verwechselt ein bestimmtes Modell mit der Glaubensaussage.',
    premises: [
      { text: `P1: Der koptische Glaube verlangt, dass Adam und Eva reale Personen sind, von denen alle Menschen abstammen, und dass der Fall real ist.`, support: `Röm 5,12–21; 1 Kor 15,21–22; Apg 17,26; Lk 3,38; kirchliche Lehre und Liturgie.` },
      { text: `P2: Die Populationsgenetik schließt (unter Standardannahmen) aus, dass ein Paar in den letzten mehreren Hunderttausend Jahren die einzige genetische Quelle aller Menschen war.`, support: `Venema & McKnight 2017; Li & Durbin 2011; Ayala 1995. Dieser Punkt wird zugestanden.` },
      { text: `P3: Die Populationsgenetik schließt nicht aus: (a) ein genealogisches Stammelternpaar, (b) einen tiefen Engpass von zwei Individuen, (c) ein Paar mit ursprünglich geschaffener genetischer Vielfalt.`, support: `Rohde et al. 2004; Swamidass 2019; Hössjer & Gauger 2019; Craig 2021.` },
      { text: `P4: P1 ist mit mindestens einer der Optionen (a)–(c) vereinbar; die Kirche hat das Datum und die biologischen Einzelheiten nicht dogmatisch festgelegt.`, support: `Koptische Lehre: kein Dogma über Erdalter und biologische Mechanismen.` },
    ],
    conclusion: `Die Aussage „Die Populationsgenetik schließt Adam und Eva aus" ist in dieser Allgemeinheit falsch. Ausgeschlossen ist nur ein bestimmtes Modell, nicht der Glaube an Adam und Eva als reale Personen.`,
    horns: [
      { label: 'Modell A: Genealogischer Adam (Swamidass)', text: `Adam und Eva lebten vor wenigen Jahrtausenden, von Gott besonders erschaffen; durch Nachkommen, die sich mit Menschen außerhalb des Gartens verbanden, wurden sie genealogische Vorfahren aller heute Lebenden. Stärke: wahrt ein junges Datum und den Kulturkontext von Gen 2–4. Offene Frage: der theologische Status der Menschen außerhalb des Gartens.` },
      { label: 'Modell B: Tiefer Engpass (Hössjer & Gauger; ähnlich Craig)', text: `Ein einzelnes Paar vor rund 500.000 bis über 750.000 Jahren als Stammeltern aller späteren Menschen (bei Craig: als Vorfahren von Homo heidelbergensis, Neandertalern und Homo sapiens). Stärke: Adam und Eva als alleinige Stammeltern. Offene Frage: Verhältnis zum Kulturkontext der Genesis (Ackerbau, Städte).` },
      { label: 'Modell C: Ursprünglich geschaffene Vielfalt', text: `Gott schuf Adam und Eva mit genetischer Vielfalt, sodass heutige Variation nicht vollständig aus neuen Mutationen stammen muss. Stärke: wahrt eine besondere Erschaffung. Offene Frage: Wie lässt sich das Modell quantitativ mit allen Daten (z. B. Kopplungsungleichgewicht) prüfen?` },
    ],
  },
  voices: [
    {
      person: 'ann-gauger',
      role: 'als Biologin, Mitautorin mit dem Statistiker Ola Hössjer',
      text: `Gauger hat zusammen mit dem Stockholmer Statistiker Ola Hössjer untersucht, ob ein einzelnes Ursprungspaar mit den Daten zur menschlichen Vielfalt vereinbar ist. Ihr Ansatz: Statt vorauszusetzen, dass alle Vielfalt aus Mutationen in einer großen Population stammt, testeten sie Modelle, in denen das erste Paar bereits genetisch vielfältig angelegt war. Ergebnis ihrer Simulationen: Ein Paar vor etwa 500.000 Jahren kann wesentliche Merkmale der heutigen Variation erklären. Gauger betont, dass dies kein Beweis für Adam und Eva ist, wohl aber ein Beleg, dass die Genetik sie nicht ausschließt.`,
      sources: [
        { kind: 'wissenschaft', author: 'Ola Hössjer, Ann Gauger', work: 'BIO-Complexity 2019 (1)', year: '2019', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Ann Gauger, Douglas Axe, Casey Luskin', work: 'Science and Human Origins', year: '2012', status: 'paraphrase' },
      ],
    },
    {
      person: 'joshua-swamidass',
      role: 'als Computerbiologe (akzeptiert gemeinsame Abstammung)',
      text: `Swamidass unterscheidet scharf zwischen genetischer und genealogischer Abstammung. Genetisch stammen wir von vielen Vorfahren ab; genealogisch kann aber ein einzelnes Paar Vorfahr aller heute Lebenden sein, wenn es nur einige tausend Jahre zurückliegt. Er argumentiert, dass ein Adam und eine Eva, die von Gott besonders erschaffen wurden und vor etwa 6.000 bis 10.000 Jahren im Nahen Osten lebten, bis zur Zeit Jesu die genealogischen Vorfahren aller Menschen geworden sein könnten. Zudem zeigte er, dass ein Engpass von zwei Individuen weiter zurück – vor etwa 500.000 Jahren oder früher – mit den gängigen Daten nicht sicher widerlegt ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'S. Joshua Swamidass', work: 'The Genealogical Adam and Eve: The Surprising Science of Universal Ancestry', year: '2019', status: 'paraphrase' },
      ],
    },
    {
      person: 'craig',
      role: 'als Philosoph und Exeget',
      text: `William Lane Craig hat in einer umfassenden Studie die Gattung von Genesis 1–11 als „Mytho-Historie" bestimmt: Texte, die historische Personen und Ereignisse in einer Erzählform mit symbolischen Zügen darstellen. Auf dieser Grundlage und nach Sichtung der Paläoanthropologie schlägt er vor, Adam und Eva als reale Stammeltern aller Menschen in der Frühzeit von Homo heidelbergensis anzusiedeln, vor etwa 750.000 Jahren oder früher – damit wären auch Neandertaler und Denisovaner ihre Nachkommen. Craigs Gattungsbestimmung ist nicht die Sicht der koptischen Kirche; sein Werk zeigt aber, wie ernsthaft die Frage diskutiert wird.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'In Quest of the Historical Adam: A Biblical and Scientific Exploration', year: '2021', status: 'paraphrase' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Apostel und Theologe von Adam und Christus',
      text: `Paulus stellt in Röm 5 und 1 Kor 15 den einen Menschen Adam und den einen Menschen Christus gegenüber: Durch den einen kamen Sünde und Tod, durch den anderen Gerechtigkeit und Leben. Die Logik seines Arguments setzt voraus, dass Adam ebenso real ist wie Christus – ein Symbol hätte keine Tat begehen können, deren Folgen die ganze Menschheit betreffen. Deshalb ist die Realität Adams für die Kirche keine Randfrage, sondern mit dem Evangelium verbunden.`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '5,12–21', status: 'paraphrase' },
        { kind: 'bibel', work: '1. Korinther', ref: '15,45', translation: 'Luther 1912', status: 'paraphrase', quote: `Der erste Mensch, Adam, wurde zu einer lebendigen Seele, und der letzte Adam zum Geist, der lebendig macht.` },
      ],
    },
    {
      person: 'irenaeus',
      role: 'als Theologe der Rekapitulation',
      text: `Irenäus liest die Heilsgeschichte als Bogen von Adam zu Christus: Was in Adam verloren ging, wird in Christus wiedergewonnen. Die Genealogie bei Lukas, die von Christus bis zu Adam zurückführt, zeigt für ihn, dass Christus die ganze Menschheit seit Adam in sich zusammenfasst. Diese Sicht ist in der orthodoxen Tradition tief verwurzelt und macht verständlich, warum die Kirche an Adam als realer Person festhält.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'III,22,3; V,21,1', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Kirchenvater der Menschwerdung',
      text: `Athanasius erzählt die Geschichte des Menschen als Drama: Gott schuf ihn nach seinem Bild, der Mensch wandte sich ab und verfiel der Verderbnis, und der Logos wurde Mensch, um den Tod von innen zu besiegen. Der Fall ist für ihn ein reales Geschehen, ohne das die Menschwerdung ihren Sinn verlöre. Zugleich interessiert ihn nicht die Biologie, sondern die Beziehung des Menschen zu Gott.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '3–10', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'ne-nie-unter-zehntausend',
      objection: `Die effektive Populationsgröße unserer Vorfahren lag nie unter etwa zehntausend. Ein einzelnes Paar kann die heutige genetische Vielfalt nicht erklären. Das ist durch mehrere unabhängige Methoden bestätigt.`,
      objectionBy: 'Dennis Venema',
      targetsPremise: 2,
      answer: `Für ein bestimmtes Modell stimmt das: ein Paar vor wenigen tausend Jahren als einzige genetische Quelle, ohne ursprünglich angelegte Vielfalt. Das gestehe ich zu. Aber es gibt mindestens drei andere Modelle, die die Genetik nicht ausschließt: ein genealogischer Adam, ein tiefer Engpass vor rund 500.000 Jahren oder früher und ein Paar mit geschaffener Vielfalt. Die Kirche hat über das Datum kein Dogma.`,
      followUps: [
        {
          id: 'unabhaengige-methoden',
          objection: `Heterozygotie, Kopplungsungleichgewicht, Häufigkeitsspektrum, PSMC – all diese Methoden konvergieren. Das ist kein Modell, das ist die Datenlage.`,
          objectionBy: 'Dennis Venema',
          targetsPremise: 3,
          answer: `Die Methoden sind beeindruckend und stimmen überein – unter gemeinsamen Annahmen: keine anfänglich angelegte Vielfalt, bekannte Mutationsraten, große, durchmischte Population. Hössjer & Gauger haben gezeigt, dass Modelle mit einem vielfältig angelegten ersten Paar vor rund 500.000 Jahren wesentliche Merkmale der Daten reproduzieren können. Man kann diese Arbeit kritisieren – aber „ausgeschlossen" ist ein zu starkes Wort.`,
          followUps: [
            {
              id: 'swamidass-500000-kontext',
              objection: `Ich stimme dir zu, dass ein Paar vor rund 500.000 Jahren nicht sicher ausgeschlossen ist. Aber dann ist Adam kein Homo sapiens im heutigen Sinn und lebte lange vor dem Kulturkontext der Genesis mit Ackerbau, Metall und Städten.`,
              objectionBy: 'Joshua Swamidass',
              answer: `Diese Spannung ist real, und ich verschweige sie nicht. Es gibt verschiedene Wege: Craig nimmt ein sehr frühes Datum an und deutet Gen 1–11 als „Mytho-Historie" mit realen Personen; dein genealogisches Modell hält Adam jung und erklärt die universale Abstammung genealogisch. Die koptische Kirche hat keines dieser Modelle zur Lehre gemacht. Verbindlich ist die Realität Adams, nicht ein bestimmtes Datum.`,
              followUps: [
                {
                  id: 'genesis-keine-geschichte-mehr',
                  objection: `Dann ist die Genesis keine Geschichte mehr: Kain als Ackerbauer 750.000 Jahre vor der Erfindung des Ackerbaus? Ihr biegt euch die Bibel zurecht, bis sie zu jeder Datenlage passt.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Die Alexandriner haben die Genesis immer wörtlich **und** geistlich gelesen – lange bevor es Genetik gab. Origenes und Augustinus etwa diskutierten, wie die Schöpfungstage zu verstehen sind. Wer zwischen der Aussageabsicht eines Textes und seiner Erzählform unterscheidet, biegt nicht, sondern liest sorgfältig. Und wer das Genealogie-Modell bevorzugt, hält Kain sehr wohl im Kontext früher Landwirtschaft. Was bleibt: Adam ist eine reale Person – das ist der Kern.`,
                  questionsBack: [
                    `Ist für dich jeder Text, der historische Personen in symbolischer Form darstellt, automatisch unhistorisch?`,
                    `Welches Modell schließt die Genetik denn konkret aus – und welches nicht?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'hla-trans-spezies',
          objection: `Die HLA-Gene des Immunsystems haben Dutzende Allellinien, die älter sind als die Trennung von Mensch und Schimpanse. Zwei Menschen können höchstens vier Varianten tragen. Damit ist ein Engpass auf zwei erledigt.`,
          objectionBy: 'Francisco Ayala',
          targetsPremise: 2,
          answer: `Das ist eines der stärksten Argumente gegen einen kurzen, jungen Engpass, und ich nehme es ernst. Modelle mit geschaffener Vielfalt, mit Rekombination innerhalb dieser Gene und mit einem tiefen Engpass verringern das Problem, lösen es aber nicht in jedem Detail – das ist eine offene Forschungsfrage. Das genealogische Modell umgeht es vollständig, weil es keinen genetischen Engpass verlangt.`,
          followUps: [
            {
              id: 'genkonversion-reicht-nicht',
              objection: `Genkonversion und neue Mutationen reichen niemals, um diese Vielfalt in der verfügbaren Zeit zu erzeugen.`,
              objectionBy: 'Dennis Venema',
              answer: `Das mag sein, und ich behaupte nicht, die HLA-Frage gelöst zu haben. Gerade deshalb ist mir wichtig, dass der Glaube nicht an einem einzigen Modell hängt. Wenn ein junger genetischer Engpass scheitert, bleiben der genealogische Adam und der tiefe Engpass. Die Behauptung „Die Genetik schließt Adam und Eva aus" ist auch dann falsch.`,
            },
          ],
        },
      ],
    },
    {
      id: 'genealogischer-adam-taschenspielertrick',
      objection: `Der genealogische Adam ist ein Taschenspielertrick. Dann gab es Menschen außerhalb des Gartens. Wer waren die? Hatten sie Seelen? Waren sie Gottes Ebenbild?`,
      objectionBy: 'Jerry Coyne',
      targetsPremise: 3,
      answer: `Das sind berechtigte theologische Fragen – keine genetischen. Swamidass' Modell zeigt, dass die Genetik einen realen Adam als Vorfahren aller heute Lebenden nicht ausschließt. Über den Status anderer Hominiden gibt es unter Christen verschiedene Vorschläge, und die koptische Kirche hat dieses Modell nicht übernommen. Ich halte es für eine ernsthafte Option, nicht für das letzte Wort.`,
      followUps: [
        {
          id: 'paarung-mit-seelenlosen',
          objection: `Dann hätten sich Adams Nachkommen mit seelenlosen Wesen gepaart. Das ist absurd – und moralisch bedenklich.`,
          objectionBy: 'Richard Dawkins',
          answer: `Genau deshalb bevorzugen viele Christen andere Modelle: entweder ein Paar als alleinige Stammeltern in tiefer Vergangenheit (Hössjer & Gauger, Craig) oder Modelle, in denen Gott die Gottesebenbildlichkeit einer ganzen Gruppe von Zeitgenossen mitteilt, die dann genealogisch zu Adam gehören (der Thomist Kenneth Kemp hat so etwas vorgeschlagen). Das sind schwierige Fragen – aber Schwierigkeit ist kein Widerspruch.`,
          sources: [
            { kind: 'fachliteratur', author: 'Kenneth W. Kemp', work: '„Science, Theology, and Monogenesis", American Catholic Philosophical Quarterly 85 (2)', ref: 'S. 217–236', year: '2011', status: 'paraphrase', note: 'Katholischer Philosoph; hier nur als Beispiel für ein Modell, nicht als Autorität für die koptische Kirche.' },
          ],
          followUps: [
            {
              id: 'einfacher-symbolisch',
              objection: `Siehst du: Jedes Modell hat Probleme. Einfacher und ehrlicher ist, Adam als Symbol zu lesen – wie es auch viele Theologen tun.`,
              objectionBy: 'Peter Enns',
              answer: `Für einen orthodoxen Christen ist das kein gangbarer Weg. Paulus' Parallele zwischen Adam und Christus (Röm 5; 1 Kor 15) setzt einen realen Adam voraus, ebenso die Genealogie bei Lukas und die Lehre der Väter von Irenäus bis Athanasius. Dass Modelle offene Fragen haben, ist normal; die Wissenschaft zwingt uns nicht, Adam aufzugeben – sie schließt ihn nicht aus.`,
            },
          ],
        },
        {
          id: 'swamidass-mit-daten-vereinbar',
          objection: `Ich will nur betonen: Mein Modell verbiegt keine Wissenschaft. Es ist mit allen Daten vereinbar, auch mit der gemeinsamen Abstammung.`,
          objectionBy: 'Joshua Swamidass',
          answer: `Das ist für die Debatte der entscheidende Punkt, und ich danke dir dafür: Ein Genetiker, der die gemeinsame Abstammung akzeptiert, zeigt, dass ein realer Adam mit den Daten vereinbar ist. Ob man dein Modell theologisch übernimmt, ist eine eigene Frage. Aber die Behauptung, die Genetik habe Adam widerlegt, ist damit vom Tisch.`,
        },
      ],
    },
    {
      id: 'kein-erster-mensch',
      objection: `Es gab nie einen „ersten Menschen". Arten verändern sich graduell wie ein Farbverlauf – es gibt keinen Punkt, an dem ein Affe einen Menschen zur Welt bringt.`,
      objectionBy: 'Richard Dawkins',
      answer: `Biologisch mögen Übergänge fließend sein. Aber „Mensch" im theologischen Sinn ist nicht eine Schädelform, sondern ein Wesen mit vernunftbegabter Seele nach Gottes Bild, das Gott anspricht und zur Gemeinschaft beruft. Diese Schwelle ist nicht graduell – man ist Person oder nicht. Dass man sie im Fossilbericht nicht direkt sieht, ist kein Einwand: Die Seele hinterlässt keine Knochen.`,
      followUps: [
        {
          id: 'geistige-seele-mythos',
          objection: `Eine „geistige Seele" ist ein Mythos. Auch symbolisches Verhalten entwickelte sich graduell über Hunderttausende Jahre – es gibt keinen Schnitt.`,
          objectionBy: 'Jerry Coyne',
          answer: `Ob symbolisches Verhalten graduell oder eher sprunghaft auftrat, wird in der Archäologie selbst diskutiert (McBrearty & Brooks argumentierten 2000 für ein allmähliches Auftreten in Afrika). Aber die Fähigkeit und ihr kultureller Ausdruck sind zwei Dinge: Eine Fähigkeit kann plötzlich da sein und sich doch langsam kulturell entfalten. Und ob Geist auf Materie reduzierbar ist, entscheidet keine Ausgrabung. Siehe die Claims zu Bewusstsein und Mensch und Tier.`,
          sources: [
            { kind: 'wissenschaft', author: 'Sally McBrearty, Alison S. Brooks', work: '„The revolution that wasn\'t: a new interpretation of the origin of modern human behavior", Journal of Human Evolution 39 (5)', ref: 'S. 453–563', year: '2000', status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'mt-eva-y-adam',
      objection: `Übrigens: Die „mitochondriale Eva" und der „Y-chromosomale Adam" waren nicht die einzigen Menschen ihrer Zeit, und nach älteren Schätzungen lebten sie nicht einmal zur selben Zeit. Eure Bibel-Website-Argumente damit sind Unsinn.`,
      objectionBy: 'Larry Moran',
      answer: `Völlig richtig, und Christen sollten diese Begriffe nicht als Beleg missbrauchen. Es sind Koaleszenzpunkte: die jüngsten gemeinsamen Vorfahren in rein mütterlicher bzw. väterlicher Linie. Sie sagen nichts über erste Menschen. Neuere Schätzungen rücken ihre Datierungen teilweise näher zusammen, aber das ändert an ihrer Bedeutung nichts – sie sind mit jedem Modell vereinbar.`,
      followUps: [
        {
          id: 'keine-genetischen-belege',
          objection: `Gut. Dann gibst du zu, dass es keinerlei genetische Belege für Adam und Eva gibt.`,
          objectionBy: 'Nathan Lents',
          answer: `Ja – die Genetik beweist Adam und Eva nicht, und sie widerlegt sie nicht. Der Glaube an Adam beruht auf der Offenbarung und auf der inneren Logik des Evangeliums: Christus als neuer Adam. Die Rolle der Wissenschaft in dieser Frage ist begrenzt: Sie kann bestimmte Modelle ausschließen, aber nicht die Realität einer Person, die vor Hunderttausenden oder einigen Tausend Jahren lebte.`,
          followUps: [
            {
              id: 'dann-unwissenschaftlich',
              objection: `Dann ist der Glaube an Adam eben unwissenschaftlich.`,
              objectionBy: 'Jerry Coyne',
              answer: `Nicht unwissenschaftlich, sondern nicht-naturwissenschaftlich – wie die meisten Aussagen über einzelne Personen der Vergangenheit. Die Genetik kann auch nicht beweisen, dass ein bestimmter Pharao gelebt hat. Entscheidend ist, dass der Glaube nicht im Widerspruch zu den Daten steht. Und das ist der Fall.`,
            },
          ],
        },
      ],
    },
    {
      id: 'erbsuende-ohne-adam',
      objection: `Als orthodoxer Christ brauchst du doch gar keinen biologischen Adam. Ihr seht die Erbsünde ohnehin anders als Augustinus – nicht als vererbte Schuld. Dann kann Adam auch für jeden Menschen stehen.`,
      objectionBy: 'Dennis Venema',
      answer: `Es stimmt, dass die koptische Tradition den Akzent auf die vererbte Sterblichkeit und Verderbnis legt, nicht auf eine juristisch verstandene Erbschuld. Aber auch diese Sicht setzt einen realen Anfang voraus: Durch einen Menschen kam der Tod in die Welt (Röm 5,12). Athanasius erzählt den Fall als reales Ereignis, auf das die Menschwerdung antwortet. Christus als neuer Adam ergibt nur Sinn, wenn es einen ersten Adam gab.`,
      followUps: [
        {
          id: 'paulus-kind-seiner-zeit',
          objection: `Paulus war ein Mensch seiner Zeit. Er glaubte an einen historischen Adam, so wie er an ein dreistöckiges Weltbild glaubte. Das ist nicht verbindlich.`,
          objectionBy: 'Peter Enns',
          answer: `Paulus verwendet Adam nicht beiläufig als Kulisse, sondern als tragenden Teil seiner Argumentation über Sünde und Erlösung. Auch Christus selbst verweist auf die Erschaffung von Mann und Frau „im Anfang" (Mt 19,4), und die Kirche hat Adam in Schriftauslegung, Liturgie und Lehre immer als reale Person verstanden. Eine Lesart, die diesen Kern streicht, steht nicht mehr in der Tradition der Kirche.`,
          sources: [
            { kind: 'bibel', work: 'Matthäus', ref: '19,4', translation: 'Luther 1912', status: 'paraphrase', quote: `Habt ihr nicht gelesen, dass der Schöpfer sie im Anfang als Mann und Frau geschaffen hat?` },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches Modell genau schließt die Genetik aus – und schließt sie auch einen genealogischen Adam aus?`,
    `Auf welchen Annahmen beruhen die Rückrechnungen der Populationsgröße, und gelten sie für ein Schöpfungsmodell?`,
    `Warum hält der Genetiker Joshua Swamidass, der die gemeinsame Abstammung akzeptiert, einen realen Adam für vereinbar mit den Daten?`,
    `Kann die Genetik überhaupt die Existenz einer einzelnen Person vor 500.000 Jahren widerlegen?`,
  ],
  avoid: [
    `„Die mitochondriale Eva beweist die biblische Eva." – Falsch; Koaleszenzpunkte sind keine ersten Menschen.`,
    `„Die Genetiker fälschen die Daten." – Unwahr und unfair. Diskutiere die Annahmen, nicht die Ehrlichkeit der Forscher.`,
    `Ein bestimmtes Datum (z. B. 4004 v. Chr.) als Glaubenslehre ausgeben. Die koptische Kirche hat dazu kein Dogma.`,
    `Adam als bloßes Symbol aufgeben, um der Debatte auszuweichen – das widerspricht der kirchlichen Lehre.`,
  ],
  concessions: [
    `Ein junges Paar als ausschließliche genetische Stammeltern aller Menschen ohne geschaffene Vielfalt ist mit den Standardmodellen der Populationsgenetik nicht vereinbar.`,
    `Die Vielfalt der HLA-Gene ist ein ernstes, nicht vollständig gelöstes Problem für Engpass-Modelle.`,
    `Die alternativen Modelle (Swamidass, Hössjer & Gauger, Craig) sind neu, teils Minderheitenpositionen, und werfen eigene theologische Fragen auf.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'S. Joshua Swamidass', work: 'The Genealogical Adam and Eve', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig', work: 'In Quest of the Historical Adam', year: '2021', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Ola Hössjer, Ann Gauger', work: '„A single-couple human origin is possible", BIO-Complexity 2019 (1)', year: '2019', status: 'paraphrase' },
    { kind: 'gegner', author: 'Dennis R. Venema, Scot McKnight', work: 'Adam and the Genome', year: '2017', status: 'paraphrase', note: 'Christliche Gegenposition.' },
  ],
  difficulty: 3,
  tags: ['Adam und Eva', 'Populationsgenetik', 'Genealogischer Adam', 'Erbsünde', 'Engpass', 'HLA'],
  related: [
    'genetik/pseudogene-ervs',
    'genetik/chromosom-2-fusion',
    'palaeontologie/menschliche-evolution-belegt',
    'genesis/vaeter-lasen-woertlich',
    'evolutionaere-psychologie/mensch-nur-tier',
  ],
};

export default claim;
