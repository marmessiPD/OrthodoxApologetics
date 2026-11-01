import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'tierleid',
  title: `„Jahrmillionen Tierleid vor dem Menschen widerlegen einen guten Schöpfer."`,
  proponents: [
    {
      name: 'Charles Darwin',
      role: 'Naturforscher (1809–1882)',
      work: 'Brief an Asa Gray vom 22. Mai 1860 (über die Schlupfwespen)',
    },
    {
      name: 'Richard Dawkins',
      role: 'Evolutionsbiologe, Oxford',
      work: 'River Out of Eden (1995), Kap. 4',
    },
    {
      name: 'Paul Draper',
      role: 'Religionsphilosoph, Purdue University',
      work: '„Darwin\'s Argument from Evil" (in: Scientific Approaches to the Philosophy of Religion, 2012)',
    },
  ],
  steelman: `Lange bevor es Menschen gab, haben Tiere Hunderte Millionen Jahre lang gelitten: gefressen, zerrissen, von Parasiten ausgehöhlt, verhungert, an Krankheiten gestorben. Über 99 Prozent aller Arten, die je lebten, sind ausgestorben. Darwin schrieb an den gläubigen Botaniker Asa Gray, er könne sich nicht überzeugen, dass ein gütiger und allmächtiger Gott die Schlupfwespen absichtlich so geschaffen habe, dass sie sich im lebenden Körper von Raupen ernähren. Dawkins: Die Gesamtmenge des Leids in der Natur übersteigt jede anständige Vorstellung; in jeder Minute werden Tausende Tiere bei lebendigem Leib gefressen. Hier helfen die üblichen Theodizeen nicht: Tiere haben keinen freien Willen, den sie missbrauchen könnten; sie reifen nicht moralisch am Leid; und der Sündenfall des Menschen kann nicht die Ursache sein, weil das Leid lange vor dem Menschen da war. Wenn Gott durch einen Prozess erschafft, der aus Tod, Verschwendung und Qual besteht, dann ist er kein liebender Gott.`,
  biblical: {
    summary: `Die Bibel verschweigt die Wildheit der Natur nicht – sie stellt sie in Gottes Fürsorge. „Die jungen Löwen, die da brüllen nach dem Raub und ihre Speise suchen von Gott" (Ps 104,21). In seiner Antwort an Hiob zeigt Gott die wilde, gefährliche Schöpfung – Löwin, Rabe, Adler, dessen Junge Blut saugen (Hiob 38,39–39,30) – nicht als Fehler, sondern als Werk, über das er wacht. Zugleich sagt die Schrift, dass Gott sich aller seiner Werke erbarmt (Ps 145,9), dass kein Sperling ohne den Vater fällt (Mt 10,29) und dass der Gerechte sich seines Viehs erbarmt (Spr 12,10). Und sie verheißt eine neue Schöpfung, in der der Wolf beim Lamm wohnt (Jes 11,6–9) und die ganze seufzende Kreatur befreit wird (Röm 8,19–22).`,
    detail: `- **Raub als Teil der Schöpfungsordnung?** Ps 104 preist Gott dafür, dass er den Löwen ihre Speise gibt (104,21) und allen Geschöpfen ihre Nahrung „zu seiner Zeit" (104,27). Hiob 38–39 schildert den Raub des Adlers ohne moralisches Urteil. Die Bibel ist hier realistischer als viele Theodizeen.
- **Die Hoffnung für die Tiere:** Jes 11,6–9 und 65,25 zeichnen ein Bild der Vollendung ohne Raub. Röm 8,21 spricht davon, dass „die Kreatur" – die ganze Schöpfung – frei wird.
- **Gott sorgt für Tiere:** Er schließt mit Noah einen Bund „mit allem lebendigen Getier" (Gen 9,9–10) und sorgt sich um die vielen Tiere in Ninive (Jona 4,11).
- **Keine Dogmatik über Tierleid vor dem Menschen:** Die koptische Kirche hat über das Alter der Erde kein Dogma; Christen deuten das Verhältnis von Tierleid und Sündenfall unterschiedlich.`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '104,21', quote: `Die jungen Löwen, die da brüllen nach dem Raub und ihre Speise suchen von Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '145,9', quote: `Der HERR ist allen gütig und erbarmt sich aller seiner Werke.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '11,6', quote: `Die Wölfe werden bei den Lämmern wohnen und die Pardel bei den Böcken liegen. Ein kleiner Knabe wird Kälber und junge Löwen und Mastvieh miteinander treiben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '12,10', quote: `Der Gerechte erbarmt sich seines Viehs; aber das Herz der Gottlosen ist unbarmherzig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hiob', ref: '38,39–41', quote: `Kannst du der Löwin ihren Raub zu jagen geben und die jungen Löwen sättigen …? Wer bereitet dem Raben die Speise, wenn seine Jungen zu Gott rufen und fliegen irre, weil sie nicht zu essen haben?`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut leicht gekürzt.' },
      { kind: 'bibel', work: 'Jona', ref: '4,11', quote: `Und mich sollte nicht jammern Ninives, solcher großen Stadt, in welcher sind mehr denn hundertundzwanzigtausend Menschen, die nicht wissen Unterschied, was rechts oder links ist, dazu auch viele Tiere?`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter haben die Tierwelt mit Staunen betrachtet – Basilius' *Hexaemeron* ist voller Bewunderung für die Weisheit Gottes in den Tieren – und sie haben Barmherzigkeit gegenüber Tieren als Zeichen der Heiligkeit gesehen. Isaak der Syrer, dessen Schriften auch in den koptischen Klöstern gelesen werden, beschreibt das „barmherzige Herz" als ein Herz, das für die ganze Schöpfung brennt – für Menschen, Vögel, Tiere, ja selbst für die Dämonen. Die ägyptischen Wüstenväter lebten in Frieden mit wilden Tieren; die Überlieferung erzählt von Löwen, die das Grab des Einsiedlers Paulus gruben, und von Abba Makarius, der einem blinden Hyänenjungen das Augenlicht wiedergab. Diese Erzählungen sind Bilder der wiederhergestellten Schöpfung von Jes 11 – Vorschein dessen, was Gott für die ganze Kreatur bereithält.`,
    detail: `- **Isaak der Syrer:** Das barmherzige Herz ist ein Herz, das für die ganze Schöpfung entbrennt; der Mensch mit einem solchen Herzen kann den kleinsten Schmerz eines Geschöpfes nicht sehen, ohne dass Tränen kommen.
- **Die Väter und das Tierleid vor dem Menschen:** Die alten Väter kannten die Frage in ihrer modernen Form nicht. Ihr Grundsatz bleibt jedoch tragfähig: Gott ist nicht Urheber des Bösen, die Schöpfung wartet auf Befreiung, und Christus ist Erlöser der ganzen Schöpfung (Kol 1,20).
- **Ehrlich:** Über das Schicksal der Tiere nach dem Tod hat die Kirche keine Lehre festgelegt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Isaak der Syrer', work: 'Asketische Homilien (Erster Teil)', ref: 'Homilie über das barmherzige Herz (Zählung je nach Ausgabe verschieden, oft Nr. 71/74)', year: '7. Jh.', quote: `Was ist ein barmherziges Herz? Ein Herz, das brennt für die ganze Schöpfung, für die Menschen, die Vögel, die Tiere, die Dämonen und für jedes Geschöpf.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilien zum Sechstagewerk (Hexaemeron)', ref: 'Hom. 7–9', year: 'um 370', quote: `In den Tieren zeigt sich eine Weisheit des Schöpfers, die den Menschen zum Staunen und zum Lob führen soll.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Dass Tiere – besonders Säugetiere und Vögel – Schmerz empfinden, ist wissenschaftlich gut belegt; die „Cambridge Declaration on Consciousness" (2012) hielt fest, dass auch nichtmenschliche Tiere über die neurologischen Grundlagen bewussten Erlebens verfügen. Wie Tiere Schmerz *erleben* – ob mit reflektiertem Leiden, Angst vor der Zukunft und dem Bewusstsein eigener Lage – ist dagegen umstritten und hängt stark von der Art ab; bei Insekten ist schon die Schmerzempfindung offen. Biologisch erfüllt Schmerz eine lebenswichtige Warnfunktion: Menschen mit angeborener Schmerzunempfindlichkeit sind schwer gefährdet und sterben oft früh. Das Problem des Tierleids gilt in der Religionsphilosophie als eine der schwierigsten Formen des Theodizeeproblems; Michael Murray hat in *Nature Red in Tooth and Claw* (2008) die theistischen Antwortversuche systematisch untersucht.`,
    detail: `- **Fair bleiben:** Christen sollten das Tierleid weder leugnen noch verharmlosen („Tiere spüren nichts" – Descartes' These gilt als widerlegt).
- **Das Paket Evolution/Schöpfung:** Unabhängig davon, wie man die biologischen Mechanismen beurteilt (die App kritisiert den ungelenkten Darwinismus), zeigt der Fossilbericht Tod und Raub lange vor dem Menschen. Christen, die eine junge Erde vertreten, bestreiten das; die koptische Kirche hat darüber kein Dogma.`,
    sources: [
      { kind: 'gegner', author: 'Charles Darwin', work: 'Brief an Asa Gray', year: '22. Mai 1860', quote: `Ich kann mich nicht davon überzeugen, dass ein gütiger und allmächtiger Gott die Schlupfwespen absichtlich mit der ausdrücklichen Absicht erschaffen hätte, dass sie sich im lebenden Körper von Raupen ernähren, oder dass eine Katze mit Mäusen spielen sollte.`, original: `I cannot persuade myself that a beneficent & omnipotent God would have designedly created the Ichneumonidae with the express intention of their feeding within the living bodies of caterpillars, or that a cat should play with mice.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'gegner', author: 'Richard Dawkins', work: 'River Out of Eden', ref: 'Kap. 4', year: '1995', quote: `Die Gesamtmenge des Leids pro Jahr in der natürlichen Welt übersteigt jede anständige Vorstellung.`, original: `The total amount of suffering per year in the natural world is beyond all decent contemplation.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'wissenschaft', author: 'Philip Low u. a.', work: 'The Cambridge Declaration on Consciousness', year: '2012', quote: `Nichtmenschliche Tiere, darunter alle Säugetiere und Vögel und viele andere, besitzen die neurologischen Grundlagen, die Bewusstsein hervorbringen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Michael J. Murray', work: 'Nature Red in Tooth and Claw: Theism and the Problem of Animal Suffering', year: '2008', quote: `Keine einzelne Erklärung löst das Problem des Tierleids, aber eine Kombination mehrerer Überlegungen kann zeigen, dass es mit einem guten Gott vereinbar ist.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Das ist für mich die schwerste Form der Frage, und ich will sie nicht kleinreden. Drei Dinge kann ich sagen: Schmerz ist für Tiere ein lebenswichtiges Warnsignal – ohne ihn würden sie schneller und qualvoller sterben. Wie Tiere Leid erleben, ist von Art zu Art sehr verschieden, und wir sollten unser menschliches Erleben nicht einfach übertragen. Und die Bibel beschönigt die Wildheit der Natur nicht, sie verheißt aber, dass die ganze Schöpfung – nicht nur der Mensch – befreit wird: Der Wolf wird beim Lamm wohnen. Gott, der jeden Sperling kennt, hat die Tiere nicht vergessen.`,
  keyPoints: [
    `**Ehrlichkeit zuerst:** Tierleid ist eine echte, schwere Frage; man sollte es weder leugnen noch verharmlosen.`,
    `**Schmerz hat eine Schutzfunktion:** Schmerzunempfindlichkeit ist lebensgefährlich – auch bei Tieren schützt Schmerz das Leben.`,
    `**Schmerz ist nicht gleich Leiden:** Die Fähigkeit zu reflektiertem Leiden ist bei Tieren sehr unterschiedlich ausgeprägt; bei Insekten ist schon die Schmerzempfindung unsicher. Wir sollten menschliches Erleben nicht einfach übertragen.`,
    `**Eine Welt mit verlässlichen Gesetzen hat Kehrseiten:** Leben, das wächst, frisst und sich fortpflanzt, schließt Raub und Tod ein – das gilt in jeder Welt mit stabilen Naturgesetzen.`,
    `**Die Bibel ist realistisch:** Ps 104 und Hiob 38–39 stellen auch die Raubtiere unter Gottes Fürsorge – ohne die Natur zu idealisieren.`,
    `**Die Hoffnung umfasst die ganze Schöpfung:** Jes 11, Röm 8,21, Kol 1,20 – Gottes Erlösung gilt nicht nur dem Menschen.`,
  ],
  voices: [
    {
      person: 'michael-murray',
      role: 'als Religionsphilosoph des Tierleids',
      text: `Michael Murray hat mit *Nature Red in Tooth and Claw* (2008) die gründlichste philosophische Untersuchung des Problems aus theistischer Sicht vorgelegt. Er prüft verschiedene Erklärungsversuche: dass viele Tiere zwar Schmerz registrieren, aber möglicherweise nicht in derselben bewussten, reflektierten Weise leiden wie Menschen; dass eine Welt mit gesetzmäßiger Natur Güter ermöglicht, die eine Welt ständiger Wunder nicht hätte; dass eine Schöpfung, die sich aus einfachen Anfängen zu Ordnung und Vielfalt entfaltet, ein eigenes Gut sein kann; und dass ein Fall der Schöpfung möglich ist. Murrays Ergebnis ist vorsichtig: Keine Erklärung genügt allein, aber zusammen können sie zeigen, dass das Tierleid nicht gegen einen guten Gott spricht.`,
    },
    {
      person: 'cs-lewis',
      role: 'als Apologet, der dem Tierleid ein eigenes Kapitel widmete',
      text: `C. S. Lewis widmet dem Tierleid in *The Problem of Pain* (1940) ein eigenes Kapitel und gibt zu, dass man hier mit großer Vorsicht spekulieren muss. Er unterscheidet zwischen Empfindung und bewusstem Erleben eines Selbst, das sich als leidend erfährt, und vermutet, dass viele Tiere zwar Schmerz empfinden, aber nicht im selben Sinn ein leidendes Ich haben. Er erwägt, dass gefallene geistige Mächte die Tierwelt schon vor dem Menschen verdorben haben könnten, und dass Tiere in ihrer Beziehung zum Menschen an der Erlösung Anteil haben könnten. Lewis sagt ausdrücklich, dass es sich um Vermutungen handelt – aber er zeigt, dass der christliche Glaube das Thema nicht verdrängen muss.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain', ref: 'Kap. 9 („Animal Pain")', year: '1940', quote: `Über das Tierleid können wir nur vorsichtig spekulieren; es ist möglich, dass die Tierwelt bereits vor dem Menschen durch eine gefallene Macht verdorben wurde.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'isaak-syrer',
      role: 'als Mystiker des barmherzigen Herzens',
      text: `Isaak der Syrer, ein Mönchsvater des 7. Jahrhunderts, dessen Schriften in der orthodoxen und auch in der koptischen Mönchstradition hoch geschätzt werden, beschreibt das Ziel des geistlichen Lebens als ein Herz, das vor Mitleid für die ganze Schöpfung brennt – Menschen, Vögel, Tiere, selbst die Dämonen. Ein solcher Mensch kann das Leid des geringsten Geschöpfes nicht sehen, ohne zu weinen, und betet unablässig auch für die Tiere. Damit gibt Isaak keine Theorie, aber er zeigt, wie Gottes Barmherzigkeit sich im Menschen spiegelt: Wenn ein Heiliger so für die Tiere fühlt, wie viel mehr ihr Schöpfer. Hinweis: Isaak gehörte zur Kirche des Ostens; seine Hoffnungen zur Eschatologie (siehe Themenblock Hölle) sind nicht Lehre der Kirche.`,
    },
    {
      person: 'paulus',
      role: 'als Apostel der Hoffnung für die ganze Schöpfung',
      text: `Paulus schreibt im Römerbrief nicht nur über die Erlösung des Menschen, sondern über die Befreiung der ganzen „Kreatur" von der Knechtschaft der Vergänglichkeit (Röm 8,19–22). Im Kolosserbrief sagt er, dass Gott durch Christus „alles versöhnte zu ihm selbst" (Kol 1,20). Die Hoffnung des Evangeliums ist also nicht auf den Menschen beschränkt. Das beantwortet nicht, warum Tiere jetzt leiden – aber es zeigt, dass ihr Leid nicht außerhalb von Gottes Heilsplan steht.`,
      sources: [
        { kind: 'bibel', work: 'Kolosser', ref: '1,20', quote: `… und alles durch ihn versöhnt würde zu ihm selbst, es sei auf Erden oder im Himmel, damit daß er Frieden machte durch das Blut an seinem Kreuz, durch sich selbst.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
  ],
  dialog: [
    {
      id: 'jahrmillionen-leid',
      objection: `Hunderte Millionen Jahre Fressen und Gefressenwerden, Parasiten, Seuchen, Aussterben – lange bevor es Menschen gab. Kein freier Wille, kein Sündenfall, keine Seelenbildung kann das erklären. Ein liebender Gott hätte das nicht geschaffen.`,
      objectionBy: 'Richard Dawkins / Paul Draper',
      answer: `Das ist für mich die schwerste Form der Frage. Ich habe keine Antwort, die alles erklärt, aber einige Überlegungen: Schmerz schützt Leben – ohne ihn würden Tiere schneller und qualvoller zugrunde gehen. Wie Tiere Schmerz erleben, ist sehr unterschiedlich und oft anders als bei uns. Eine Welt mit Leben, das wächst und sich fortpflanzt, schließt in jedem stabilen Naturgesetz Tod ein. Und die Bibel verheißt die Befreiung der ganzen Schöpfung.`,
      detail: `Michael Murray nennt solche Überlegungen „Causa-Dei-Erklärungen": Keine allein reicht aus, gemeinsam können sie zeigen, dass das Tierleid mit einem guten Gott vereinbar ist. Wichtig ist der Ton: Ein Christ, der das Tierleid achselzuckend abtut, verliert das Gespräch und widerspricht Spr 12,10 („Der Gerechte erbarmt sich seines Viehs").`,
      questionsBack: [
        `Wie müsste eine Welt mit biologischem Leben aussehen, in der kein Tier je Schmerz empfindet – und wäre sie für Tiere wirklich sicherer?`,
      ],
      followUps: [
        {
          id: 'schlupfwespe',
          objection: `Nimm Darwins Schlupfwespe: Sie legt ihre Eier in lebende Raupen, die Larven fressen die Raupe von innen auf. Welcher gute Schöpfer erfindet so etwas?`,
          objectionBy: 'Charles Darwin',
          answer: `Für uns ist das ein Albtraum – weil wir es mit unserem Nervensystem und unserer Vorstellungskraft erleben. Ob eine Raupe überhaupt Schmerz im bewussten Sinn erlebt, ist wissenschaftlich offen; ihr Nervensystem ist völlig anders gebaut als unseres. Wir sollten vorsichtig sein, menschliches Grauen auf Insekten zu übertragen. Das ist keine Ausflucht, sondern ehrliche Unsicherheit.`,
          detail: `Darwin selbst blieb in religiösen Fragen zurückhaltend; in seinem Brief an Gray schrieb er im selben Zusammenhang, er fühle, dass das ganze Thema zu tief für den menschlichen Verstand sei. Die Schlupfwespe ist ein starkes rhetorisches Bild; als Beleg für bewusstes Leiden ist sie schwächer, als sie wirkt.`,
          followUps: [
            {
              id: 'saeugetiere-leiden',
              objection: `Bei Insekten mag das offen sein. Aber Säugetiere und Vögel leiden ganz sicher – Angst, Schmerz, Trauer. Die Cambridge-Erklärung von 2012 hat das bestätigt.`,
              objectionBy: 'Tierethiker',
              answer: `Einverstanden – bei Säugetieren und Vögeln ist bewusstes Schmerzempfinden sehr wahrscheinlich, und das nehme ich ernst. Dann greifen die anderen Überlegungen: die Schutzfunktion des Schmerzes, die Gesetzmäßigkeit einer Welt mit biologischem Leben, die Hoffnung auf die Befreiung der Schöpfung. Und es folgt eine Aufgabe für Christen: Sie sollten bei Tierschutz und Barmherzigkeit gegenüber Tieren vorangehen, nicht hinterherhinken.`,
              detail: `Die orthodoxe Tradition kennt viele Heilige mit besonderer Nähe zu Tieren; Isaak der Syrer betete auch für die Tiere. Wer Tierleid als Argument gegen Gott vorbringt, hat oft ein tiefes moralisches Empfinden – das sollte man anerkennen und als Gemeinsamkeit nutzen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'evolution-grausam',
      objection: `Die Evolution ist die grausamste denkbare Schöpfungsmethode: Milliarden Opfer, Verschwendung, Aussterben. Wenn Gott so erschafft, ist er ein Monster; wenn er nicht so erschafft, woher dann das Leid vor dem Menschen?`,
      objectionBy: 'Jerry Coyne / Richard Dawkins',
      answer: `Unabhängig davon, wie man die biologischen Mechanismen beurteilt – und darüber gibt es unter Christen verschiedene Meinungen –, zeigt der Fossilbericht Tod und Raub lange vor dem Menschen. Die Bibel beschreibt den Kreislauf von Leben und Tod in der Natur aber nicht als Fehler: „Du nimmst weg ihren Odem, so vergehen sie … du lässest aus deinen Odem, so werden sie geschaffen" (Ps 104,29–30). Eine Welt, in der Leben entsteht, wächst und vergeht, ist nicht an sich böse; böse wäre sie ohne Ziel und ohne Hoffnung.`,
      detail: `Die App kritisiert den *ungelenkten, materialistischen* Darwinismus (siehe Themenblock Evolution); das Problem des Tierleids stellt sich aber für jedes Schöpfungsmodell, das eine alte Erde annimmt. Fair ist zu sagen: Christen, die eine junge Erde vertreten, haben dieses Problem in dieser Form nicht – sie haben dafür andere, naturwissenschaftliche Probleme. Die koptische Kirche hat über das Erdalter kein Dogma.`,
      followUps: [
        {
          id: 'warum-nicht-gleich-paradies',
          objection: `Warum hat Gott dann nicht gleich das Friedensreich geschaffen, in dem der Wolf beim Lamm liegt? Wenn er es am Ende kann, hätte er es auch am Anfang gekonnt.`,
          objectionBy: 'Philosophischer Kritiker',
          answer: `Die Väter – besonders Irenäus – verstehen die Schöpfung als einen Weg vom Anfang zur Vollendung, nicht als fertiges Produkt. Das Friedensreich von Jesaja 11 ist das Ziel einer Geschichte, nicht ihr Ausgangspunkt. Vielleicht setzt die neue Schöpfung eine verwandelte, auferstandene Materie voraus, die es erst nach Kreuz und Auferstehung gibt. Wir wissen nicht, ob eine solche Welt ohne die vorausgehende Geschichte möglich wäre.`,
          detail: `Das ist eine Überlegung, keine Gewissheit. Sie entspricht aber der biblischen Struktur: Die Vollendung kommt durch eine Geschichte – Schöpfung, Fall, Bund, Menschwerdung, Kreuz, Auferstehung, Wiederkunft. Das Neue entsteht nicht durch Überspringen, sondern durch Verwandlung.`,
          followUps: [
            {
              id: 'neue-schoepfung-jetzt',
              objection: `Das ist eine Ausrede. Wenn Gott eine leidfreie neue Schöpfung machen kann, dann kann er sie auch jetzt machen. Jeder Tag Aufschub ist ein Tag unnötiges Leid.`,
              objectionBy: 'Philosophischer Kritiker',
              answer: `Auch der Petrusbrief kennt diese Ungeduld: „Der HERR verzieht nicht die Verheißung, wie es etliche für einen Verzug achten; sondern er hat Geduld mit uns und will nicht, daß jemand verloren werde" (2 Petr 3,9). Gottes Aufschub hat einen Grund: Raum für Umkehr und Freiheit. Die neue Schöpfung ist die Vollendung einer Geschichte mit freien Geschöpfen; wer sie vorzieht, beendet diese Geschichte. Ich gebe zu: Das beantwortet nicht jedes Warum. Aber es zeigt, dass der Aufschub nicht Gleichgültigkeit sein muss.`,
              detail: `Dieselbe Struktur findet sich beim Einwand „Warum nicht gleich den Himmel?" (siehe den Claim zum logischen Problem des Übels): Die Vollendung setzt die Geschichte voraus, die zu ihr führt.`,
              sources: [
                { kind: 'bibel', work: '2. Petrus', ref: '3,9', quote: `Der HERR verzieht nicht die Verheißung, wie es etliche für einen Verzug achten; sondern er hat Geduld mit uns und will nicht, daß jemand verloren werde, sondern daß sich jedermann zur Buße kehre.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'suendenfall-erklaert-nicht',
      objection: `Euer Standardargument – „Der Tod kam durch den Sündenfall" – bricht hier zusammen. Die Tiere starben Millionen Jahre vor Adam. Also kann Adams Sünde nicht die Ursache sein.`,
      objectionBy: 'Theologisch informierter Kritiker',
      answer: `Wenn das Tierleid älter ist als der Mensch, kann Adams Sünde nicht seine zeitliche Ursache sein – das gebe ich zu. Röm 5,12 spricht vom Tod, der „zu allen Menschen" durchgedrungen ist; über die Tiere sagt der Vers nichts. Christen haben verschiedene Erklärungen erwogen: einen Fall geistiger Mächte vor dem Menschen, eine Rückwirkung des menschlichen Falls auf die ganze Schöpfungsgeschichte, oder mit Irenäus eine Schöpfung, die von Anfang an unvollendet auf ihre Verwandlung wartet. Keine davon ist Dogma.`,
      detail: `C. S. Lewis erwog den Fall einer geistigen Macht vor dem Menschen (*The Problem of Pain*, Kap. 9); William Dembski die „rückwirkende" Wirkung des Falls (*The End of Christianity*, 2009). Die koptische Kirche lehrt, dass Adam und Eva reale Personen sind und der Sündenfall real ist; über Mechanismen und Erdalter hat sie kein Dogma. Ehrlichkeit über offene Fragen ist hier glaubwürdiger als eine erzwungene Einheitslösung.`,
      followUps: [
        {
          id: 'satan-verdirbt-natur',
          objection: `Satan, der die Tierwelt verdorben hat? Das ist doch reine Mythologie, um ein Problem wegzuerklären.`,
          objectionBy: 'Säkularer Kritiker',
          answer: `Für die Frage, ob Tierleid und Gott *logisch* vereinbar sind, genügt eine Möglichkeit, und innerhalb des christlichen Weltbilds ist diese nicht absurd. Aber ich muss mich nicht darauf stützen: Die Schutzfunktion des Schmerzes, die Gesetzmäßigkeit der Natur und die Hoffnung auf Befreiung der Schöpfung tragen auch ohne diese Hypothese.`,
          detail: `Gute Apologetik setzt nicht alles auf eine einzige, angreifbare Hypothese. Mehrere unabhängige Überlegungen zusammen sind belastbarer.`,
        },
      ],
    },
    {
      id: 'tiere-kein-ausgleich',
      objection: `Euer Trost ist der Himmel. Aber für die Tiere gibt es keinen Himmel, keine Auferstehung, keinen Ausgleich. Ihr Leid bleibt sinnlos.`,
      objectionBy: 'Tierethiker',
      answer: `Woher weißt du das? Die Bibel spricht von der Befreiung der ganzen Schöpfung (Röm 8,21), von der Versöhnung „aller Dinge" (Kol 1,20) und von einem Friedensreich mit Wolf und Lamm (Jes 11). Die Kirche hat über das Schicksal der Tiere keine Lehre festgelegt – aber ein Gott, der jeden Sperling kennt (Mt 10,29), hat die Tiere nicht vergessen.`,
      detail: `C. S. Lewis hat vorsichtig erwogen, dass Tiere in Beziehung zum Menschen an der Erlösung teilhaben könnten. Das ist Spekulation, und man sollte es so kennzeichnen. Die Pointe ist bescheidener: Die Behauptung, Tiere hätten *sicher* keinen Anteil an Gottes Zukunft, ist ebenso wenig begründet.`,
      followUps: [
        {
          id: 'reine-spekulation',
          objection: `Das ist reine Spekulation. Du hast keinen Beleg dafür, dass Tiere irgendeinen Ausgleich bekommen.`,
          objectionBy: 'Skeptiker',
          answer: `Teilweise stimmt das – ich gebe zu, dass wir hier wenig wissen. Aber das gilt in beide Richtungen: Du weißt auch nicht, dass es keinen gibt. Ich halte mich an das, was offenbart ist: Gott erbarmt sich aller seiner Werke (Ps 145,9), und die ganze Schöpfung wartet auf Befreiung. Mehr behaupte ich nicht.`,
          detail: `Bescheidenheit ist hier die überzeugendste Haltung. Das Tierleid bleibt eine offene Wunde in jeder Weltanschauung – im Naturalismus hat es allerdings überhaupt keinen Sinn und keine Hoffnung.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wäre eine Welt, in der Tiere keinen Schmerz empfinden, für sie sicherer – oder gefährlicher?`,
    `Wie sicher können wir sein, dass Insekten und einfache Tiere Schmerz so erleben wie wir?`,
    `Wenn es keinen Gott gibt: Ist das Tierleid dann „böse" – oder einfach Natur?`,
    `Was hältst du von einer Hoffnung, die die ganze Schöpfung einschließt, nicht nur den Menschen?`,
  ],
  avoid: [
    `„Tiere spüren nichts" (Descartes) – wissenschaftlich überholt und herzlos.`,
    `„Tiere sind nur für den Menschen da" als Rechtfertigung ihres Leids – widerspricht Spr 12,10 und Ps 145,9.`,
    `So tun, als sei das Problem leicht gelöst – es gehört zu den schwersten Fragen der Theodizee.`,
    `Eine bestimmte Schöpfungschronologie als einzig christliche Antwort ausgeben – die koptische Kirche hat darüber kein Dogma.`,
  ],
  concessions: [
    `Das Tierleid ist eine der schwierigsten Formen des Theodizeeproblems; keine einzelne Antwort ist voll befriedigend.`,
    `Wenn Tod und Raub älter sind als der Mensch, kann der menschliche Sündenfall nicht ihre zeitliche Ursache sein.`,
    `Über das Schicksal der Tiere nach dem Tod wissen wir aus der Offenbarung wenig.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael J. Murray', work: 'Nature Red in Tooth and Claw: Theism and the Problem of Animal Suffering', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain, Kap. 9 („Animal Pain")', year: '1940', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Christopher Southgate', work: 'The Groaning of Creation: God, Evolution, and the Problem of Evil', year: '2008', status: 'paraphrase', note: 'Theologische Gesamtdarstellung; vertritt eine theistisch-evolutionäre Sicht.' },
    { kind: 'gegner', author: 'Charles Darwin', work: 'Brief an Asa Gray, 22. Mai 1860', year: '1860', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Tierleid', 'Theodizee', 'Darwin', 'Schlupfwespe', 'Schöpfung', 'Röm 8', 'Isaak der Syrer'],
  related: [
    'theodizee/natuerliche-uebel',
    'theodizee/evidentielles-problem',
    'theodizee/logisches-problem-des-uebels',
    'evolution/schlechtes-design',
    'erdalter/erde-alt-bibel-widerlegt',
    'genesis/vaeter-lasen-woertlich',
  ],
};

export default claim;
