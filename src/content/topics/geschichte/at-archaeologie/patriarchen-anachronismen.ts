import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'patriarchen-anachronismen',
  title: `„Die Patriarchenerzählungen sind voller Anachronismen (Kamele, Philister)."`,
  proponents: [
    { name: 'Thomas L. Thompson', role: 'Alttestamentler, Kopenhagen', work: 'The Historicity of the Patriarchal Narratives (1974)' },
    { name: 'John Van Seters', role: 'Alttestamentler, University of North Carolina (emer.)', work: 'Abraham in History and Tradition (1975)' },
    { name: 'Israel Finkelstein', role: 'Archäologe, Universität Tel Aviv', work: 'The Bible Unearthed (2001), Kap. 2' },
    { name: 'Erez Ben-Yosef / Lidar Sapir-Hen', role: 'Archäologen, Universität Tel Aviv', work: 'The Introduction of Domestic Camels to the Southern Levant (Tel Aviv 40, 2013)' },
  ],
  steelman: `Die Erzählungen über Abraham, Isaak und Jakob verraten ihre späte Entstehung: Abraham besitzt Kamele (Gen 12,16; 24,10), doch domestizierte Kamele kamen nach Sapir-Hen und Ben-Yosef erst im späten 10. Jahrhundert v. Chr. in die südliche Levante. Isaak verhandelt mit Abimelech, dem „König der Philister" (Gen 26,1), obwohl die Philister erst um 1175 v. Chr. einwanderten. Abraham kommt aus „Ur der Chaldäer", aber die Chaldäer sind erst im 1. Jahrtausend belegt. Die vermeintlichen Parallelen zu Nuzi und Mari haben Thompson und Van Seters in den 1970ern zerlegt. Die Patriarchen sind Gestalten einer Volksliteratur des 1. Jahrtausends, kein Spiegel des 2. Jahrtausends.`,
  biblical: {
    summary: `Die Genesis erzählt Familiengeschichten, die über Jahrhunderte überliefert und von späteren Schreibern für ihre Leser verständlich gemacht wurden. Dass dabei Orts- und Völkernamen aktualisiert wurden, zeigt die Bibel selbst: Gen 14,14 nennt die Stadt „Dan", die nach Ri 18,29 erst viel später so hieß; Gen 36,31 spricht von Königen in Edom, „ehe die Kinder Israel Könige hatten". Solche **Aktualisierungen** sind keine Erfindungen, sondern redaktionelle Erklärungen – vergleichbar mit einem Historiker, der „in der Nähe des heutigen Istanbul" schreibt.`,
    detail: `- **Kamele:** In der Genesis sind Kamele selten und Zeichen besonderen Reichtums (Gen 12,16 als Gabe des Pharao; Gen 24,10: zehn Kamele für eine Brautwerbung). Hauptlasttier ist der Esel (Gen 22,3; 42,26).
- **Philister:** Die „Philister" von Gerar unterscheiden sich deutlich von den späteren Philistern der fünf Städte: Ihr König trägt einen semitischen Namen (Abimelech), schließt friedliche Verträge und wird nicht als „Fürst" (*seren*) bezeichnet.
- **Ur der Chaldäer:** „der Chaldäer" erklärt späteren Lesern, welches Ur gemeint ist.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '14,14', quote: `Abram jagte den Königen nach bis nach Dan.`, status: 'paraphrase', note: 'Die Stadt hieß ursprünglich Lajisch und wurde erst in der Richterzeit „Dan" genannt (Ri 18,29).' },
      { kind: 'bibel', work: 'Genesis', ref: '36,31', quote: `Die Könige, die im Lande Edom regiert haben, ehe denn die Kinder Israel Könige hatten.`, status: 'paraphrase', note: 'Redaktionelle Perspektive aus der Königszeit.' },
      { kind: 'bibel', work: 'Genesis', ref: '37,28', quote: `Und da die Midianiter, die Kaufleute, vorüberreisten, zogen sie ihn heraus aus der Grube und verkauften ihn den Ismaeliten um zwanzig Silberlinge;`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `In der kritischen Forschung gelten die Patriarchenerzählungen überwiegend als Literatur des 1. Jahrtausends mit unklarem historischem Kern; seit Thompson (1974) und Van Seters (1975) sind viele frühere Parallelen (Nuzi-Bräuche) relativiert. Konservative Forscher wie Kitchen und Hoffmeier halten dagegen, dass bestimmte Details (Sklavenpreise, Namenstypen, Vertragsformen) zum 2. Jahrtausend passen und dass einige „Anachronismen" Aktualisierungen von Namen sind. Die Kamelfrage ist differenzierter, als Schlagzeilen von 2014 suggerierten.`,
    detail: `**Kamele:** Sapir-Hen und Ben-Yosef (2013) zeigten anhand von Knochenfunden im Aravatal, dass domestizierte Kamele dort im letzten Drittel des 10. Jh. v. Chr. in großer Zahl auftauchen – im Zusammenhang mit der Kupferindustrie. Daraus wurde in Medien „Bibel durch Kamele widerlegt". Die Studie betrifft aber die regionale Einführung als Lasttier im großen Stil, nicht die Frage, ob einzelne wohlhabende Hirten oder Händler früher Kamele besaßen. Es gibt ältere Hinweise auf die Nutzung von Kamelen im Nahen Osten (u. a. ein syrisches Rollsiegel aus dem frühen 2. Jt. mit Kamelreitern); ihre Deutung ist umstritten.

**Sklavenpreise (Kitchen):** Gen 37,28 nennt 20 Schekel – der typische Preis im 18./17. Jh. v. Chr. (Codex Hammurabi, Mari). Später steigen die Preise: ca. 30 Schekel im 14./13. Jh. (vgl. Ex 21,32), 50 und mehr im 1. Jt. (vgl. 2 Kön 15,20). Ein Autor des 1. Jahrtausends hätte eher den Preis seiner eigenen Zeit genannt.

**Bundesformular:** Siehe Claim zur Dokumentenhypothese – Kitchen und Mendenhall sehen die Struktur von Ex–Dtn in den hethitischen Verträgen des 14./13. Jh.`,
    sources: [
      { kind: 'wissenschaft', author: 'Lidar Sapir-Hen, Erez Ben-Yosef', work: 'The Introduction of Domestic Camels to the Southern Levant: Evidence from the Aravah Valley. Tel Aviv 40', year: '2013', quote: `Domestizierte Kamele erscheinen im Aravatal im letzten Drittel des 10. Jh. v. Chr., wohl im Zusammenhang mit der Kupferindustrie.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'The Patriarchal Age: Myth or History? Biblical Archaeology Review 21/2 (März/April 1995)', year: '1995', quote: `Der Preis von 20 Schekel für Josef entspricht dem Sklavenpreis im 19./18. Jh. v. Chr.; die 30 Schekel in Ex 21,32 dem 14./13. Jh.; später stiegen die Preise weiter.`, status: 'paraphrase', url: 'https://library.biblicalarchaeology.org/sidebar/50-years-flashback-1995-kitchen-saves-the-patriarchs/', note: 'Fundstelle per Websuche bestätigt. BAR veröffentlichte dazu auch eine kritische Erwiderung („Dating the Patriarchal Age: Where Kitchen Erred"), die auf Lev 27,5 verweist – siehe Dialog.' },
      { kind: 'gegner', author: 'Thomas L. Thompson', work: 'The Historicity of the Patriarchal Narratives', year: '1974', quote: `Die angeblichen Parallelen aus Nuzi und Mari tragen keine Datierung der Patriarchen ins 2. Jahrtausend.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'John Van Seters', work: 'Abraham in History and Tradition', year: '1975', quote: `Die Abrahamerzählungen spiegeln das 1. Jahrtausend v. Chr.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Zwei Dinge muss man unterscheiden: Erfindung und Aktualisierung. Die Bibel aktualisiert selbst Ortsnamen – Gen 14,14 nennt „Dan", obwohl die Stadt damals Lajisch hieß. So kann auch „Philister" ein späterer Name für ägäische Siedler sein. Kamele sind in der Genesis selten und Luxus; die berühmte Studie von 2013 zeigt ihre Masseneinführung als Lasttier im Aravatal, nicht, dass vorher niemand ein Kamel besaß. Und manche Details passen auffällig ins frühe 2. Jahrtausend – etwa Josefs Preis von genau 20 Schekel.`,
  keyPoints: [
    `**Aktualisierung ≠ Erfindung:** Die Bibel modernisiert Namen offen (Dan, Gen 14,14; „ehe Israel Könige hatte", Gen 36,31).`,
    `**Kamele:** in der Genesis selten und Zeichen von Reichtum; Sapir-Hen/Ben-Yosef 2013 betrifft die großflächige Einführung im Aravatal, nicht vereinzelte frühere Nutzung.`,
    `**Philister von Gerar:** semitischer Königsname, friedliche Verträge, kein „seren" – anders als die späteren Philister. Möglich: frühe ägäische Händler oder ein späterer Name für eine ähnliche Gruppe.`,
    `**20 Schekel (Gen 37,28):** passt zum frühen 2. Jt.; spätere Preise lagen deutlich höher.`,
    `**Ehrlichkeit:** Für die Patriarchen selbst gibt es keine direkten außerbiblischen Belege; es geht um Plausibilität des Milieus.`,
  ],
  voices: [
    {
      person: 'kitchen',
      role: 'als Ägyptologe und Altorientalist',
      text: `Kitchen hat systematisch Daten zusammengetragen, die man nur schwer „rückprojizieren" konnte: die Entwicklung der Sklavenpreise über zwei Jahrtausende, die Form von Verträgen und Bündnissen, Personennamen vom amoritischen Typ (z. B. Jakob als Kurzform eines Namens wie Yaʿqub-El). Wo die Genesis Namen späterer Zeiten benutzt, deutet er dies als Aktualisierung durch Schreiber, die den Text für ihre Leser verständlich hielten. Ein Fälscher des 1. Jahrtausends hätte nach seiner Analyse die Verhältnisse seiner eigenen Zeit eingetragen – die Preise etwa liegen aber auf dem Niveau des frühen 2. Jahrtausends.`,
      sources: [
        { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', ref: 'Kap. 7', year: '2003', quote: `Sklavenpreise, Vertragsformen und Namen der Patriarchenzeit passen zum frühen 2. Jahrtausend.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'hoffmeier',
      role: 'als Ägyptologe',
      text: `Hoffmeier verweist darauf, dass die Josefsgeschichte zahlreiche ägyptische Elemente enthält – Titel, Namen und Bräuche –, deren Datierung zwar diskutiert wird, die aber zeigen, dass die Erzählung echte Kenntnis Ägyptens verarbeitet. Er warnt davor, aus einzelnen problematischen Wörtern auf die Fiktivität ganzer Erzählkränze zu schließen.`,
      sources: [
        { kind: 'fachliteratur', author: 'James K. Hoffmeier', work: 'Israel in Egypt', ref: 'Kap. 4 (Josefsgeschichte)', year: '1997', quote: `Ägyptische Elemente der Josefsgeschichte.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'hieronymus',
      role: 'als Philologe der Alten Kirche',
      text: `Hieronymus war sich bewusst, dass der Pentateuch Spuren späterer Bearbeitung trägt. Er konnte offenlassen, ob man Mose als Autor oder Esra als „Wiederhersteller" des Werkes bezeichnet. Für die Kirche war das kein Glaubensproblem: Die Inspiration haftet an dem Text, den die Kirche empfangen hat, nicht an der Annahme, dass jedes Wort in seiner heutigen Form aus der Zeit der Ereignisse stammt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Hieronymus', work: 'Gegen Helvidius über die immerwährende Jungfräulichkeit Mariens', ref: '7', year: 'ca. 383', quote: `Ob du Mose den Verfasser des Pentateuch nennen willst oder Esra den Wiederhersteller dieses Werkes, ich lehne es nicht ab.`, original: `sive Mosen dicere volueris auctorem Pentateuchi, sive Ezram eiusdem instauratorem operis, non recuso`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
  ],
  dialog: [
    {
      id: 'kamele-widerlegt',
      objection: `2014 ging es um die Welt: Kamele wurden erst im 10. Jahrhundert v. Chr. domestiziert. Abrahams Kamele sind ein Anachronismus – Punkt.`,
      objectionBy: 'Israel Finkelstein',
      answer: `Die Studie von Sapir-Hen und Ben-Yosef zeigt, wann Kamele im Aravatal massenhaft als Lasttiere auftauchen – im Zusammenhang mit der Kupferindustrie. Sie sagt nichts darüber, ob ein reicher Hirte oder ein Pharao Jahrhunderte vorher einzelne Kamele besaß. Genau so schildert die Genesis sie: selten, kostbar, ein Geschenk des Pharao.`,
      followUps: [
        {
          id: 'keine-fruehen-kamelknochen',
          objection: `Aber vor dem 10. Jahrhundert gibt es in Kanaan praktisch keine Kamelknochen. Woher willst du wissen, dass es sie gab?`,
          objectionBy: 'Erez Ben-Yosef',
          answer: `Ich weiß es nicht sicher – und behaupte es auch nicht als Beweis. Ich sage nur: Seltene Luxustiere hinterlassen wenige Knochen, und es gibt im weiteren Nahen Osten ältere Darstellungen von Kamelreitern, deren Deutung diskutiert wird. Und selbst wenn das Wort „Kamel" eine Aktualisierung wäre, würde das die Erzählung nicht als Ganzes zur Erfindung machen.`,
          followUps: [
            {
              id: 'aktualisierung-ausrede',
              objection: `„Aktualisierung" ist eine Immunisierungsstrategie. Jeder Fehler wird zur späteren Glosse erklärt.`,
              objectionBy: 'Dan McClellan',
              answer: `Es wäre eine Immunisierung, wenn es keinen unabhängigen Beleg für solche Aktualisierungen gäbe. Aber die Bibel selbst zeigt sie offen – „Dan" in Gen 14,14, die Königsnotiz in Gen 36,31. Wenn nachweislich aktualisiert wurde, ist die Annahme in weiteren Einzelfällen methodisch legitim. Sie erklärt allerdings nur einzelne Wörter, nicht ganze Erzählungen – das gestehe ich zu.`,
            },
          ],
        },
      ],
    },
    {
      id: 'philister-anachronismus',
      objection: `Die Philister kamen um 1175 v. Chr. mit den Seevölkern. Abraham und Isaak bei einem „König der Philister" – das ist ein klarer Anachronismus.`,
      objectionBy: 'John Van Seters',
      answer: `Die Philister der Genesis passen gerade nicht zu den späteren Philistern: Ihr König heißt semitisch Abimelech, lebt in Gerar statt in der Pentapolis, schließt Freundschaftsverträge und trägt nicht den Titel „seren". Entweder handelt es sich um frühere ägäische Gruppen – Kontakte zwischen Ägäis und Levante gab es seit der Bronzezeit – oder ein späterer Schreiber verwendete den bekannten Namen für die Bewohner jener Gegend.`,
      followUps: [
        {
          id: 'beides-zugleich',
          objection: `Du kannst dich nicht entscheiden: frühe Ägäer oder späterer Name? Das zeigt, dass du keine Antwort hast.`,
          objectionBy: 'Dan McClellan',
          answer: `Ich nenne zwei plausible Erklärungen, weil die Daten keine eindeutig bevorzugen – das ist ehrlich, nicht ausweichend. Wichtig ist: Beide erklären den Befund besser als die Annahme eines Autors, der die Philister seiner Zeit kannte und sie trotzdem völlig untypisch beschreibt.`,
          followUps: [
            {
              id: 'aegaeer-mittelbronzezeit',
              objection: `Für ägäische Gruppen in Kanaan während der Mittelbronzezeit gibt es keinen Beleg. Deine „frühen Ägäer" sind erfunden, um die Bibel zu retten.`,
              objectionBy: 'John Van Seters',
              answer: `Es gibt durchaus Belege für ägäische Kontakte in dieser Zeit: Im mittelbronzezeitlichen Palast von Tel Kabri in Galiläa fand man Wandmalereien im minoischen Stil, ebenso in Tell el-Dabʿa (Auaris) im ägyptischen Ostdelta. Das beweist keine „Philister" in Gerar – aber es zeigt, dass Menschen aus dem ägäischen Raum damals in der Levante und in Ägypten tätig waren. Die Bibel selbst verbindet die Philister mit „Kaphtor", also Kreta (Am 9,7).`,
              sources: [
                { kind: 'fachliteratur', author: 'Assaf Yasur-Landau, Eric H. Cline u. a.', work: 'Grabungsberichte Tel Kabri', year: 'seit 2005', quote: `Fragmente von Wand- und Bodenmalereien im ägäischen Stil im mittelbronzezeitlichen Palast.`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Amos', ref: '9,7', quote: `Habe ich nicht Israel aus Ägyptenland geführt und die Philister aus Kaphthor?`, translation: 'Luther 1912', status: 'paraphrase' },
              ],
              questionsBack: [`Warum sollte ein Autor des 7. Jahrhunderts die Philister, die er als Erzfeinde kannte, als freundliche Vertragspartner mit semitischem Königsnamen darstellen?`],
            },
          ],
        },
      ],
    },
    {
      id: 'nuzi-zerlegt',
      objection: `Die alten „Beweise" aus Nuzi – Adoption, Leihmutterschaft, Hausgötter – haben Thompson und Van Seters in den 1970ern zerlegt. Davon ist nichts übrig.`,
      objectionBy: 'Thomas L. Thompson',
      answer: `Richtig: Manche Nuzi-Parallelen wurden in der Albright-Ära überschätzt, das gebe ich zu. Aber nicht alles fiel: Leihmutterschaft wie bei Sara und Hagar ist zum Beispiel im Codex Hammurabi und in altassyrischen Eheverträgen des frühen 2. Jahrtausends belegt, und Kitchens Datenreihen zu Sklavenpreisen und Vertragsformen sind ein neues, unabhängiges Argument.`,
      followUps: [
        {
          id: 'leihmutterschaft-auch-spaet',
          objection: `Leihmutterschaft gibt es auch im 1. Jahrtausend. Das datiert gar nichts.`,
          objectionBy: 'John Van Seters',
          answer: `Einzelne Bräuche datieren tatsächlich wenig – darum argumentiere ich kumulativ. Der Sklavenpreis von 20 Schekel ist ein konkreter Zahlenwert, der sich über die Jahrhunderte nachweislich verändert hat. Zusammen mit Namen und Vertragsformen ergibt sich ein Bild, das zum frühen 2. Jahrtausend passt – und das ein Autor des 1. Jahrtausends kaum zufällig getroffen hätte.`,
          questionsBack: [`Woher sollte ein Autor des 7. Jahrhunderts den Sklavenpreis des 18. Jahrhunderts kennen?`],
          followUps: [
            {
              id: 'zwanzig-schekel-lev-27',
              objection: `Die 20 Schekel datieren gar nichts. Levitikus 27,5 setzt genau 20 Schekel als Wert für einen Jungen zwischen 5 und 20 Jahren fest – und Josef war 17. Ein Autor des 1. Jahrtausends brauchte nur das Gesetz seiner Zeit zu kennen.`,
              objectionBy: 'Kritiker Kitchens (BAR-Erwiderung „Where Kitchen Erred")',
              answer: `Das ist ein guter Einwand, und er schwächt Kitchens Argument tatsächlich. Ich nehme ihn ernst: Levitikus 27 nennt Schätzwerte für Gelübde, keine Marktpreise, aber die Übereinstimmung mit Josefs Alter ist auffällig. Ehrlich gesagt: Die 20 Schekel allein beweisen kein frühes Datum. Ich führe sie deshalb nicht mehr als Hauptargument an, sondern nur noch als einen Baustein unter mehreren.`,
              detail: `Hier zeigt sich, warum Ehrlichkeit stärker ist als Rechthaben: Wer den Einwand anerkennt, behält Glaubwürdigkeit für die stärkeren Argumente. Kitchens Datenreihe zu den Preisen bleibt interessant (Codex Hammurabi, Mari, Ex 21,32, 2 Kön 15,20), aber sie hat Ausnahmen und hängt von Alter und Geschlecht des Sklaven ab. Ihre Beweiskraft ist begrenzt.`,
              sources: [
                { kind: 'bibel', work: 'Levitikus', ref: '27,5', quote: `Von fünf Jahren bis auf zwanzig Jahre sollst du ihn schätzen auf zwanzig Silberlinge, wenn's ein Männlein ist.`, translation: 'Luther 1912', status: 'paraphrase' },
                { kind: 'gegner', work: 'Dating the Patriarchal Age: Where Kitchen Erred (Sidebar). Biblical Archaeology Review', year: '1995/96', quote: `Josefs Preis entspreche dem Wert für Jungen im 1. Jahrtausend nach Lev 27,5 und tauge nicht als Beleg für die Mittelbronzezeit.`, status: 'paraphrase', url: 'https://library.biblicalarchaeology.org/sidebar/dating-the-patriarchal-age-where-kitchen-erred/', note: 'Autor und genaues Heft nicht geprüft; Existenz der Erwiderung per Websuche bestätigt.' },
              ],
              followUps: [
                {
                  id: 'kumulativ-summe-von-nullen',
                  objection: `Dann bleibt von eurem „kumulativen Argument" nichts übrig. Eine Summe von Nullen ist null.`,
                  objectionBy: 'Thomas L. Thompson',
                  answer: `Es bleiben Daten, die ein späterer Autor gerade nicht hätte erfinden wollen: Abraham heiratet seine Halbschwester (Gen 20,12), Jakob zwei Schwestern (Gen 29) – beides verbietet das Gesetz (Lev 18,9.18). Abraham pflanzt einen heiligen Baum (Gen 21,33), Jakob richtet einen Malstein auf und salbt ihn (Gen 28,18) – Deuteronomium verbietet genau das (Dtn 16,21–22). Ein Autor aus der Zeit der deuteronomischen Reform hätte die verehrten Väter kaum als Gesetzesbrecher dargestellt. Das spricht für Überlieferung, die älter ist als das Gesetz, das sie überlagerte.`,
                  detail: `Dieses Argument stammt nicht von Apologeten allein: Auch R. W. L. Moberly (*The Old Testament of the Old Testament*, 1992) und Gordon Wenham haben die „vor-mosaische" Religion der Genesis herausgearbeitet – die Väter beten Gott als El Schaddai, El Eljon oder El Olam an, und Ex 6,3 sagt ausdrücklich, dass sie den Namen JHWH in seiner Bedeutung noch nicht kannten. Ein späterer Erzähler, der die Väter als Vorbilder des Gesetzes zeichnen wollte, hätte diese Spannungen geglättet.`,
                  sources: [
                    { kind: 'bibel', work: 'Deuteronomium', ref: '16,21–22', quote: `Du sollst keinen Hain von Bäumen pflanzen bei dem Altar des HERRN … Du sollst dir keine Säule aufrichten.`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'bibel', work: 'Genesis', ref: '28,18', quote: `Jakob nahm den Stein, den er zu seinen Häupten gelegt hatte, und richtete ihn auf zu einem Mal und goss Öl obendrauf.`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'R. W. L. Moberly', work: 'The Old Testament of the Old Testament. Patriarchal Narratives and Mosaic Yahwism', year: '1992', quote: `Die Religion der Patriarchen unterscheidet sich deutlich vom mosaischen Jahwismus und wird in der Genesis bewusst als vor-mosaisch dargestellt.`, status: 'paraphrase' },
                  ],
                  followUps: [
                    {
                      id: 'bewusst-archaisiert',
                      objection: `Antike Autoren konnten bewusst archaisieren. Gerade ein geschickter Schreiber lässt die Väter vor dem Gesetz leben, um Alter vorzutäuschen.`,
                      objectionBy: 'John Van Seters',
                      answer: `Möglich ist das – aber es ist eine teure Annahme. Ein Schreiber hätte damit seine eigenen Nationalväter Bräuche ausüben lassen, die seine Bewegung als Götzendienst bekämpfte, und ihnen Ehen zuschreiben müssen, die sein Gesetz als Schande verurteilt. Archaisierung kennt man aus der Antike, aber meist als Kolorit, nicht als Selbstbelastung. Die einfachere Erklärung ist, dass die Erzählungen Überlieferungen bewahren, die man aus Ehrfurcht nicht korrigierte.`,
                      questionsBack: [`Kennst du ein antikes Beispiel, in dem ein Autor seine verehrten Gründerväter absichtlich gegen sein eigenes Gesetz verstoßen ließ, nur um alt zu wirken?`],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ur-der-chaldaeer',
      objection: `„Ur der Chaldäer" verrät das Datum: Die Chaldäer sind erst ab dem 9. Jahrhundert v. Chr. belegt. Die Abrahamsgeschichte stammt aus der Zeit, als die Chaldäer Babylon beherrschten – also aus dem Exil.`,
      objectionBy: 'John Van Seters',
      answer: `Dass „der Chaldäer" eine spätere Erläuterung ist, gebe ich ohne Weiteres zu – genau wie „Dan" in Gen 14,14. Ein Schreiber erklärte seinen Lesern, welches Ur gemeint war. Das datiert den Zusatz, nicht die Überlieferung. Interessant ist eher, was nicht erläutert wird: Die Verwandtschaft Abrahams ist fest mit der Gegend um Harran in Obermesopotamien verbunden – mit Namen, die dort schon im 2. Jahrtausend vorkommen.`,
      followUps: [
        {
          id: 'harran-ortsnamen-spaet',
          objection: `Die Namen der Verwandten – Nahor, Serug, Terach – sind Ortsnamen um Harran, die in neuassyrischen Texten des 1. Jahrtausends auftauchen. Das zeigt den Horizont des Autors.`,
          objectionBy: 'Thomas L. Thompson',
          answer: `Einige davon sind aber viel älter: „Nahur" ist bereits in den Mari-Briefen des 18. Jahrhunderts v. Chr. als Ort in diesem Gebiet belegt. Dass die Orte auch später noch existierten, ist natürlich – Ortsnamen leben lange. Für die Frage nach dem Alter der Überlieferung ist entscheidend, dass sie im 2. Jahrtausend schon da waren. Damit ist das Argument neutral, nicht ein Beleg für Spätentstehung.`,
          sources: [
            { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', ref: 'Kap. 7', year: '2003', quote: `Nahur als Ortsname in den Mari-Texten; Personen- und Ortsnamen der Patriarchenfamilie im obermesopotamischen Raum.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'laban-aramaeer',
              objection: `Und Laban heißt „der Aramäer". Aramäer gibt es erst ab dem späten 2. Jahrtausend. Wieder ein Anachronismus.`,
              objectionBy: 'Israel Finkelstein',
              answer: `Auch hier kann der Volksname eine spätere Bezeichnung für die Bewohner der Region sein – das räume ich ein. Aber bemerkenswert ist etwas anderes: Israels eigenes Glaubensbekenntnis lautet „Ein umherirrender Aramäer war mein Vater" (Dtn 26,5). Ein Volk, das sich einen Ursprung erfindet, wählt kaum fremde, heimatlose Vorfahren und eine Sklavenzeit in Ägypten. Solche Selbstaussagen gegen das eigene Prestige sprechen für eine tief verwurzelte Erinnerung.`,
              sources: [
                { kind: 'bibel', work: 'Deuteronomium', ref: '26,5', quote: `Mein Vater war ein umherirrender Aramäer und zog hinab nach Ägypten.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'abraham-als-exilsmodell',
                  objection: `Gerade das passt ins Exil: Abraham zieht aus Babylonien nach Kanaan – genau wie die Rückkehrer nach 538. Die Abrahamsgeschichte ist ein Gründungsmythos für die Heimkehrer.`,
                  objectionBy: 'Thomas Römer',
                  answer: `Die Parallele ist reizvoll, aber das Profil passt schlecht: Abraham hat keinen Tempel, kennt kein Jerusalem als Zentrum, hält kein mosaisches Gesetz, lebt friedlich mit Kanaanäern und betet Gott unter dem Namen El an. Gerade die Themen, die die Rückkehrer bewegten – Tempelbau, Abgrenzung von den „Völkern des Landes", Tora – fehlen. Ein Exilsautor hätte seinen Urvater wohl kaum gegen alle Anliegen seiner eigenen Gemeinde gezeichnet.`,
                  detail: `Ehrlich: Dass die Genesis in ihrer Endgestalt auch in der Exilszeit gelesen und bearbeitet wurde, bestreitet niemand. Die Frage ist, ob die Erzählungen dort *entstanden*. Die vielen „unpassenden" Züge – vor-mosaische Religion, friedliches Miteinander mit Kanaanäern (Gen 23), Heirat mit Fremden – lassen sich besser als ältere Überlieferung erklären, die man aus Respekt bewahrte.`,
                  questionsBack: [`Wenn die Abrahamsgeschichte für Heimkehrer geschrieben wurde, warum kauft Abraham sein Grab in Frieden von den Hethitern, statt sich von den Völkern abzugrenzen wie in Esra und Nehemia?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Sagt die Kamelstudie von 2013 wirklich, dass es vor dem 10. Jahrhundert nirgendwo ein Kamel gab?`,
    `Wie erklärst du, dass die Philister der Genesis völlig untypisch für die späteren Philister beschrieben werden?`,
    `Wie gehst du mit Gen 14,14 um, wo die Bibel offensichtlich selbst einen Ortsnamen aktualisiert?`,
    `Warum nennt Gen 37,28 gerade 20 Schekel?`,
  ],
  avoid: [
    `Behaupten, die Patriarchen seien archäologisch „bewiesen" – es gibt keine direkte Erwähnung Abrahams außerhalb der Bibel.`,
    `Die Kamelstudie als „Fake News" abtun – sie ist solide; nur ihre populäre Deutung ist überzogen.`,
    `Josefs 20 Schekel als „Beweis" für die Mittelbronzezeit präsentieren – der Einwand mit Lev 27,5 ist bekannt.`,
  ],
  concessions: [
    `Einige Namen in der Genesis (z. B. „Chaldäer", „Dan") sind sicher spätere Aktualisierungen.`,
    `Manche früher gefeierten Parallelen aus Nuzi wurden überschätzt.`,
    `Das 20-Schekel-Argument ist angreifbar: Lev 27,5 nennt denselben Wert für Jungen von 5 bis 20 Jahren. Es taugt nur als Baustein, nicht als Beweis.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alan R. Millard, Donald J. Wiseman (Hg.)', work: 'Essays on the Patriarchal Narratives', year: '1980', status: 'paraphrase' },
    { kind: 'gegner', author: 'Thomas L. Thompson', work: 'The Historicity of the Patriarchal Narratives', year: '1974', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Patriarchen', 'Kamele', 'Philister', 'Abraham', 'Genesis'],
  related: ['at-archaeologie/dokumentenhypothese', 'at-archaeologie/exodus-nie-passiert', 'genesis/genesis-von-babylon-kopiert'],
};

export default claim;
