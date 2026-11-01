import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'mensch-unbedeutend',
  title: `„Wir sind unbedeutend im riesigen Universum (Sagans blasser blauer Punkt)."`,
  proponents: [
    { name: 'Carl Sagan (†1996)', role: 'Astronom, Cornell University', work: 'Pale Blue Dot: A Vision of the Human Future in Space (1994); „Kosmischer Kalender" in The Dragons of Eden (1977)' },
    { name: 'Steven Weinberg (†2021)', role: 'Theoretischer Physiker, Nobelpreis 1979', work: 'The First Three Minutes (1977)' },
    { name: 'Bertrand Russell (†1970)', role: 'Philosoph', work: '„A Free Man’s Worship" (1903)' },
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker', work: 'Astrophysics for People in a Hurry (2017)' },
  ],
  steelman: `Am 14. Februar 1990 drehte sich die Raumsonde Voyager 1 aus etwa sechs Milliarden Kilometern Entfernung um und fotografierte die Erde: ein winziger, blassblauer Lichtpunkt in einem Sonnenstrahl. Carl Sagan schrieb dazu, dass alles, was Menschen je geliebt, gefürchtet und bekämpft haben, auf diesem Staubkorn stattfand, und dass unsere eingebildete Wichtigkeit und der Wahn, eine privilegierte Stellung im Universum zu haben, von diesem Lichtpunkt infrage gestellt werden. Die Erde ist ein Planet unter Hunderten Milliarden in einer Galaxie unter Hunderten Milliarden. Im „kosmischen Kalender", in dem die Geschichte des Universums auf ein Jahr gestaucht ist, erscheint der Mensch in den letzten Minuten des 31. Dezember. Wie kann man da glauben, das Ganze sei um unseretwillen da? Steven Weinberg zog die Bilanz: Je verständlicher das Universum erscheint, desto sinnloser erscheint es auch.`,
  biblical: {
    summary: `Das Gefühl der eigenen Kleinheit vor dem Sternenhimmel ist nicht modern, sondern biblisch. Psalm 8 beginnt genau dort, wo Sagan endet: „Wenn ich sehe die Himmel, deiner Finger Werk … was ist der Mensch, dass du seiner gedenkst?" Die Antwort der Schrift ist aber nicht Verzweiflung, sondern Staunen über Gottes Zuwendung: Er hat den Menschen „mit Ehre und Schmuck gekrönt" (Ps 8,6). Der Wert des Menschen beruht nicht auf seiner Größe oder seinem Ort, sondern darauf, dass er nach Gottes Bild geschaffen ist (Gen 1,27) und dass Gott selbst Mensch wurde (Joh 1,14; 3,16).`,
    detail: `- **Ps 8,4–7:** Kleinheit und Würde zugleich.
- **Ps 144,3–4:** „HERR, was ist der Mensch, dass du dich seiner so annimmst … Ist doch der Mensch gleich wie nichts."
- **Gen 1,26–27:** Gottebenbildlichkeit – Würde durch Beziehung, nicht durch Masse.
- **Mt 10,29–31:** Kein Sperling fällt ohne den Vater; „ihr seid besser denn viele Sperlinge".
- **Joh 3,16:** Gottes Liebe zur Welt ist der Maßstab, nicht ihre Ausdehnung.`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '8,4–6', quote: `Wenn ich sehe die Himmel, deiner Finger Werk, den Mond und die Sterne, die du bereitet hast: was ist der Mensch, daß du seiner gedenkst, und des Menschen Kind, daß du dich seiner annimmst? Du hast ihn wenig niedriger gemacht denn Gott, und mit Ehre und Schmuck hast du ihn gekrönt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '1,27', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,29–31', quote: `Kauft man nicht zwei Sperlinge um einen Pfennig? Noch fällt derselben keiner auf die Erde ohne euren Vater. Nun aber sind auch eure Haare auf dem Haupt alle gezählt. Darum fürchtet euch nicht; ihr seid besser denn viele Sperlinge.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut nach Luther 1912 aus dem Gedächtnis wiedergegeben; vor wörtlicher Verwendung prüfen.' },
      { kind: 'bibel', work: 'Johannes', ref: '3,16', quote: `Also hat Gott die Welt geliebt, daß er seinen eingeborenen Sohn gab, auf daß alle, die an ihn glauben, nicht verloren werden, sondern das ewige Leben haben.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter wussten um die Winzigkeit der Erde und gründeten die Würde des Menschen gerade nicht auf Größe. Der hl. Gregor von Nyssa spottet über die Philosophen, die den Menschen groß nannten, weil er ein „Mikrokosmos" sei – damit gäben sie ihm nur die Eigenschaften von Mücken und Mäusen. Die wahre Größe des Menschen liege darin, dass er nach dem Bild Gottes geschaffen ist. In der koptischen Liturgie des hl. Gregorius dankt die Kirche Gott dafür, dass er um des Menschen willen den Himmel wie ein Dach ausgespannt und die Erde fest gegründet hat.`,
    detail: `- **Gregor von Nyssa, De hominis opificio 16:** Die Würde des Menschen liegt nicht in seiner Ähnlichkeit mit dem Kosmos, sondern in der Gottebenbildlichkeit.
- **Athanasius, De Incarnatione 8:** Der Logos, der dem Universum nie fern ist, kam in unsere Welt aus Liebe zum Menschen.
- **Koptische Gregorius-Liturgie:** Lobpreis Gottes für die Erschaffung des Menschen und für die Einrichtung der Welt zu seinem Wohnort.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'De hominis opificio (Über die Erschaffung des Menschen)', ref: '16', year: 'ca. 379', quote: `Wie klein und unwürdig ist die Vorstellung, den Menschen dadurch zu ehren, dass man ihn einen Kosmos im Kleinen nennt; seine Größe liegt nicht in der Ähnlichkeit mit der Welt, sondern darin, dass er nach dem Bild des Schöpfers geschaffen ist.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Liturgie des hl. Gregorius (Anaphora)', quote: `Du hast für mich den Himmel als Dach aufgerichtet und die Erde gegründet, damit ich auf ihr wandle.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '8', year: 'ca. 318', quote: `Der Logos, der keinem Teil der Schöpfung fern ist, kam in unsere Welt, weil er sich in seiner Menschenliebe zu uns herabneigte.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Zahlen stimmen: Das beobachtbare Universum enthält nach heutigen Schätzungen Hunderte Milliarden bis etwa zwei Billionen Galaxien; die Erde ist darin verschwindend klein, und der Mensch erscheint spät. Strittig ist nicht die Astronomie, sondern der philosophische Schluss von Größe auf Bedeutung. Interessant: Sagan selbst formulierte in *Cosmos* (1980), wir seien „eine Möglichkeit für den Kosmos, sich selbst zu erkennen" – eine Aussage, die dem Menschen eine besondere Stellung zuschreibt. Und Weinberg fügte direkt an seinen berühmten Satz an, dass das Bemühen, das Universum zu verstehen, das menschliche Leben über die Farce erhebt.`,
    detail: `Die Fotografie „Pale Blue Dot" entstand am 14. Februar 1990 auf Anregung Sagans; Voyager 1 war damals rund sechs Milliarden Kilometer entfernt. Krauss und Scherrer (2007) haben gezeigt, dass wir in einer kosmologisch privilegierten Epoche leben: Beobachter in ferner Zukunft könnten den Urknall nicht mehr nachweisen. Auch die Bewohnbarkeit der Erde ist zeitlich begrenzt – wir leben in einem schmalen Fenster.`,
    sources: [
      { kind: 'gegner', author: 'Carl Sagan', work: 'Pale Blue Dot', year: '1994', quote: `Unser Gehabe, unsere eingebildete Wichtigkeit, der Wahn, wir hätten eine privilegierte Stellung im Universum, werden von diesem blassen Lichtpunkt infrage gestellt.`, original: `Our posturings, our imagined self-importance, the delusion that we have some privileged position in the Universe, are challenged by this point of pale light.`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://www.planetary.org/worlds/pale-blue-dot' },
      { kind: 'gegner', author: 'Steven Weinberg', work: 'The First Three Minutes', ref: 'Epilog', year: '1977', quote: `Je verständlicher das Universum erscheint, desto sinnloser erscheint es auch.`, original: `The more the universe seems comprehensible, the more it also seems pointless.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'gegner', author: 'Steven Weinberg', work: 'The First Three Minutes', ref: 'Epilog', year: '1977', quote: `Das Bemühen, das Universum zu verstehen, ist eines der ganz wenigen Dinge, die das menschliche Leben ein wenig über die Ebene der Farce erheben und ihm etwas von der Würde der Tragödie verleihen.`, original: `The effort to understand the universe is one of the very few things that lifts human life a little above the level of farce, and gives it some of the grace of tragedy.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'gegner', author: 'Carl Sagan', work: 'Cosmos', year: '1980', quote: `Wir sind eine Möglichkeit für den Kosmos, sich selbst zu erkennen.`, status: 'paraphrase', note: 'Sagan selbst schreibt dem Menschen damit eine besondere kosmische Rolle zu.' },
    ],
  },
  quickAnswer: `Größe ist kein Maß für Wert – sonst wäre ein Wal mehr wert als ein Kind und ein toter Stern mehr als Einstein. Pascal hat es auf den Punkt gebracht: Das Universum kann den Menschen zermalmen, aber der Mensch weiß das, das Universum weiß nichts – er ist ein „denkendes Schilfrohr". Und die Bibel hat Sagans Frage schon vor 3000 Jahren gestellt: „Was ist der Mensch, dass du seiner gedenkst?" Ihre Antwort: Gott gedenkt seiner – und ist selbst Mensch geworden.`,
  keyPoints: [
    `**Größe ≠ Wert:** Niemand misst den Wert eines Menschen in Kilogramm oder Lichtjahren.`,
    `**Das denkende Schilfrohr:** Der Mensch begreift das Universum; das Universum begreift nichts (Pascal).`,
    `**Ps 8 kannte das Gefühl:** Kleinheit und Würde stehen in der Bibel nebeneinander.`,
    `**Sagans Foto widerlegt Sagans Schluss:** Das Bemerkenswerteste am Bild ist der, der es geplant und gedeutet hat.`,
    `**Wert ohne Gott?** Wenn wir „objektiv" nur Atome auf einem Staubkorn sind, gibt es auch keine objektive Pflicht, den blauen Punkt zu schützen – wozu Sagan aufruft.`,
  ],
  voices: [
    {
      person: 'pascal',
      role: 'als Mathematiker, Physiker und Philosoph',
      text: `Pascal, der selbst bahnbrechende Arbeiten zu Vakuum und Luftdruck verfasste, kannte das Erschrecken vor den unendlichen Räumen. Gerade deshalb ist seine Antwort so stark: Der Mensch ist nur ein Schilfrohr, das schwächste der Natur – aber ein denkendes. Das Universum braucht sich nicht zu bewaffnen, um ihn zu zerstören; ein Tropfen Wasser genügt. Doch selbst wenn das Universum ihn zermalmte, wäre der Mensch edler als das, was ihn tötet, weil er weiß, dass er stirbt, und das Universum nichts davon weiß. Durch den Raum umfasst mich das Universum wie einen Punkt; durch das Denken umfasse ich es.`,
      sources: [
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées', ref: 'Fragment 200 (Lafuma) / 347 (Brunschvicg)', year: 'postum 1670', quote: `Der Mensch ist nur ein Schilfrohr, das schwächste der Natur; aber er ist ein denkendes Schilfrohr.`, original: `L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées', ref: 'Fragment 113 (Lafuma) / 348 (Brunschvicg)', year: 'postum 1670', quote: `Durch den Raum umfasst und verschlingt mich das Universum wie einen Punkt; durch das Denken umfasse ich es.`, original: `Par l'espace, l'univers me comprend et m'engloutit comme un point ; par la pensée, je le comprends.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Theologe der Gottebenbildlichkeit',
      text: `Gregor von Nyssa lehnte schon im 4. Jahrhundert ab, die Würde des Menschen aus seiner Stellung im Kosmos abzuleiten. Die heidnischen Philosophen nannten den Menschen einen „Mikrokosmos", weil er aus denselben Elementen bestehe wie die Welt. Gregor hält das für eine armselige Ehrung: Dann hätten auch Mücken und Mäuse dieselbe Würde. Die wahre Größe des Menschen liegt darin, dass er nach dem Bild Gottes geschaffen ist – fähig zu Vernunft, Freiheit und Liebe. Damit ist die Würde des Menschen von jeder Größenordnung unabhängig.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'De hominis opificio', ref: '16', year: 'ca. 379', quote: `Die Größe des Menschen liegt nicht in seiner Ähnlichkeit mit der Welt, sondern in seiner Ähnlichkeit mit dem Schöpfer.`, status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Menschwerdung',
      text: `Athanasius stellt die Frage nach der Bedeutung des Menschen vom Kreuz und von der Krippe her. Der Logos, der das ganze Universum trägt und keinem Teil der Schöpfung fern ist, hat sich aus Menschenliebe zu uns herabgeneigt und unser Fleisch angenommen. Wer sagt, der Mensch sei unbedeutend, muss erklären, warum der Schöpfer des Kosmos ausgerechnet für ihn Mensch wurde. Die Würde des Menschen ist für Athanasius ein Geschenk – sie hängt an der Liebe Gottes, nicht an der Größe der Erde.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '8; 43', year: 'ca. 318', quote: `Aus Liebe zu den Menschen nahm der Logos einen Leib an und kam in unsere Welt, obwohl er dem All nie fern war.`, status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler und Apologet',
      text: `Lewis hat im Kapitel „A Chapter of Red Herrings" seines Buches *Miracles* (1947) und im Essay „Dogma and the Universe" das Argument aus der Größe zerlegt. Erstens ist es alt: Schon Ptolemäus wusste, dass die Erde im Vergleich zum Himmel ein Punkt ist. Zweitens beweist es nichts: Wir messen Wert nicht in räumlicher Ausdehnung – niemand hält einen Menschen für weniger wert als einen Berg. Drittens wäre bei einem kleinen Universum der Vorwurf genau umgekehrt: Christen hätten sich ein enges, gemütliches Weltbild gebaut. Ein Argument, das in jede Richtung passt, trägt nicht.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles', ref: 'Kap. 7', year: '1947', quote: `Das Argument aus der Größe des Universums ist alt, und es setzt einen Maßstab voraus – räumliche Größe als Maß des Wertes –, den niemand sonst anwendet.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'blasser-blauer-punkt',
      objection: `Auf diesem blassen blauen Punkt ist alles, was je war. Unsere eingebildete Wichtigkeit, der Wahn, eine privilegierte Stellung im Universum zu haben – das ist eine Täuschung.`,
      objectionBy: 'Carl Sagan',
      answer: `Das Foto ist großartig – aber denk daran, wer es gemacht hat: Wesen auf diesem Punkt, die eine Sonde bauten, sie sechs Milliarden Kilometer weit schickten, sie umdrehten und das Bild verstanden. Das Bemerkenswerteste an dem Bild ist der Fotograf. Größe ist kein Maß für Wert.`,
      sources: [{ kind: 'gegner', author: 'Carl Sagan', work: 'Pale Blue Dot', year: '1994', quote: `Our planet is a lonely speck in the great enveloping cosmic dark.`, status: 'verbatim', url: 'https://www.planetary.org/worlds/pale-blue-dot' }],
      questionsBack: [`Misst du den Wert eines Menschen an seiner Größe oder an seiner Fähigkeit, zu verstehen und zu lieben?`],
      followUps: [
        {
          id: 'objektiv-atome',
          objection: `Das ist Rhetorik. Objektiv bist du ein Haufen Atome auf einem Staubkorn.`,
          objectionBy: 'Neil deGrasse Tyson',
          answer: `„Objektiv" – von welchem Standpunkt aus? Wenn der Naturalismus stimmt, gibt es überhaupt keinen objektiven Wert, auch nicht den, den Sagan dem blauen Punkt zuschreibt, wenn er uns aufruft, ihn zu bewahren und freundlich miteinander umzugehen. Wer zur Fürsorge aufruft, setzt voraus, dass Menschen wertvoll sind.`,
          followUps: [
            {
              id: 'werte-menschgemacht',
              objection: `Werte sind eben menschengemacht. Das reicht völlig.`,
              objectionBy: 'Gesprächspartner',
              answer: `Dann ist auch „unbedeutend" nur eine menschliche Bewertung – und sie kann die christliche Bewertung nicht widerlegen. Du kannst nicht zugleich sagen „Werte sind menschengemacht" und „objektiv sind wir unbedeutend". Und wenn Werte nur gemacht sind, warum sollte die Würde eines Menschen gelten, dem die Mehrheit sie abspricht?`,
              detail: `Ausführlich im Themenblock „Moral ohne Gott?".`,
              followUps: [
                {
                  id: 'kosmische-demut-vs-arroganz',
                  objection: `Die kosmische Perspektive lehrt Demut. Und ihr Christen glaubt, der Schöpfer von zwei Billionen Galaxien kümmere sich persönlich um euer Gebet. Arroganter geht es kaum.`,
                  objectionBy: 'Neil deGrasse Tyson',
                  answer: `Das Christentum lehrt beides zugleich: Demut und Würde. „Du bist Staub" (1 Mo 3,19) – und: „Was ist der Mensch, dass du seiner gedenkst?" (Ps 8,5). Dieser Psalm stellt genau deine Frage, unter dem Sternenhimmel, vor 3000 Jahren – und beantwortet sie nicht mit Stolz, sondern mit Staunen über Gottes Zuwendung. Arrogant wäre es, sich selbst Bedeutung zuzuschreiben. Demütig ist es, Bedeutung als Geschenk zu empfangen.`,
                  detail: `Pascal hat die Spannung unübertroffen formuliert: Der Mensch ist nur ein Schilfrohr, das schwächste der Natur – aber ein denkendes Schilfrohr. Ein Dunsthauch, ein Wassertropfen genügt, ihn zu töten; doch wenn das Universum ihn zermalmte, wäre der Mensch noch edler als das, was ihn tötet, denn er weiß, dass er stirbt, und das Universum weiß nichts davon. Größe im Raum und Größe im Geist sind verschiedene Ordnungen. In der koptischen Frömmigkeit gehören Demut (jede Hore der Agpeya mündet in das vielfach wiederholte Kyrie eleison) und das Bewusstsein, geliebtes Kind Gottes zu sein, untrennbar zusammen.`,
                  voices: [
                    { person: 'pascal', role: 'als Mathematiker und Denker', text: `Pascal unterscheidet drei Ordnungen: die der Körper, die des Geistes und die der Liebe. Alle Körper zusammen, das Firmament, die Sterne, die Erde, wiegen nicht den geringsten Geist auf, denn der Geist erkennt das alles, die Körper erkennen nichts. Die räumliche Kleinheit des Menschen ist deshalb kein Argument gegen seine Würde – sie verwechselt die Ordnungen.` },
                  ],
                  sources: [{ kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées', ref: 'Fragment 347 (Brunschvicg) / 200 (Lafuma)', year: '1670 (postum)', quote: `Der Mensch ist nur ein Schilfrohr, das schwächste der Natur; aber er ist ein denkendes Schilfrohr.`, original: `L'homme n'est qu'un roseau, le plus faible de la nature; mais c'est un roseau pensant.`, translation: 'eigene Übersetzung', status: 'verbatim' }],
                  questionsBack: [`Ist es arrogant, Bedeutung als Geschenk zu empfangen – oder eher, sie sich selbst zuzuschreiben?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kosmischer-kalender',
      objection: `Im kosmischen Kalender erscheint der Mensch erst in den letzten Minuten vor Mitternacht am 31. Dezember. Wie kann er der Zweck des Ganzen sein?`,
      objectionBy: 'Carl Sagan',
      answer: `In vielen Geschichten tritt die Hauptperson spät auf, und ein Haus wird gebaut, bevor jemand einzieht. Physikalisch ist die lange Vorgeschichte sogar notwendig: Kohlenstoff braucht Milliarden Jahre Sternentwicklung (Dicke 1961). Und die Bibel sagt nicht, der Mensch sei der einzige Zweck – die Schöpfung ist „sehr gut", schon bevor der Mensch erscheint.`,
      followUps: [
        {
          id: 'geschichte-ohne-menschen-sinnlos',
          objection: `Dann war der Großteil der kosmischen Geschichte ohne Menschen sinnlos.`,
          objectionBy: 'Gesprächspartner',
          answer: `Nur, wenn Sinn ausschließlich in Bezug auf Menschen existiert. In Gottes Rede an Hiob freut sich Gott an Wildnis, Meer und Tieren, die kein Mensch je sieht (Hiob 38–41). Die Schöpfung hat Sinn, weil Gott sich an ihr freut – vor uns, neben uns und über uns hinaus.`,
          followUps: [
            {
              id: 'band-zurueckspulen',
              objection: `Spul das Band des Lebens zurück und lass es noch einmal laufen – es käme mit Sicherheit kein Mensch heraus. Die Geschichte des Lebens ist eine Kette unwahrscheinlicher Zufälle: ein Asteroid hier, ein Massenaussterben dort. Wir sind ein kosmischer Unfall, kein Ziel.`,
              objectionBy: 'Stephen Jay Gould',
              answer: `Goulds These ist unter Biologen umstritten. Simon Conway Morris hat ihr mit einer Fülle von Beispielen widersprochen: Linsenaugen, Echoortung, Intelligenz und vieles mehr sind mehrfach unabhängig entstanden – die Evolution findet immer wieder dieselben Lösungen. Und selbst wenn der Weg voller Zufälle war: Für den Glauben ist Zufall kein Gegenspieler Gottes. Was für uns unvorhersagbar ist, ist für den Schöpfer nicht unbeabsichtigt.`,
              detail: `Gould entwickelte das Bild vom „Zurückspulen des Bandes" in *Wonderful Life* (1989) anhand der Fauna des Burgess-Schiefers. Conway Morris, selbst Burgess-Schiefer-Spezialist, kam in *The Crucible of Creation* (1998) und *Life’s Solution* (2003) zum entgegengesetzten Schluss: Konvergenz zeige, dass der Raum möglicher Lebensformen eng begrenzt sei. Die Debatte ist offen; der Christ muss sie nicht entscheiden, um die Würde des Menschen zu begründen – sie hängt an Gottes Willen, nicht an einem biologischen Determinismus.`,
              voices: [
                { person: 'conway-morris', role: 'als Paläontologe', text: `Conway Morris argumentiert, dass die Evolution nicht beliebig ist, sondern immer wieder auf ähnliche Lösungen zuläuft, weil die Möglichkeiten durch Physik, Chemie und Funktion stark eingeschränkt sind. Wenn man das Band zurückspult, entstünde wahrscheinlich etwas sehr Ähnliches – einschließlich intelligenter, werkzeuggebrauchender Wesen.` },
              ],
              sources: [
                { kind: 'gegner', author: 'Stephen Jay Gould', work: 'Wonderful Life: The Burgess Shale and the Nature of History', year: '1989', quote: `Würde man das Band des Lebens zurückspulen und neu abspielen, wäre es äußerst unwahrscheinlich, dass wieder Menschen entstünden.`, status: 'paraphrase' },
                { kind: 'wissenschaft', author: 'Simon Conway Morris', work: 'Life’s Solution: Inevitable Humans in a Lonely Universe', year: '2003', quote: `Konvergenz zeige, dass die Evolution in hohem Maß vorhersagbar sei; menschenähnliche Intelligenz sei eher zu erwarten als ein Zufall.`, status: 'paraphrase' },
              ],
              questionsBack: [`Wie erklärst du, dass die Evolution Augen, Echoortung und Intelligenz mehrfach unabhängig hervorgebracht hat, wenn alles reiner Zufall ist?`],
              followUps: [
                {
                  id: 'gelenkter-zufall-widerspruch',
                  objection: `„Gelenkter Zufall" ist ein Widerspruch in sich. Entweder ist etwas zufällig, oder es ist geplant. Du willst beides haben.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `„Zufall" bedeutet in der Wissenschaft: nicht aus den Gesetzen vorhersagbar, nicht auf das Ergebnis hin ausgerichtet *durch die physikalischen Ursachen selbst*. Es bedeutet nicht: ohne jeden Grund. Ein Würfelwurf ist zufällig im Hinblick auf die Physik des Würfels – und kann trotzdem Teil eines Spiels sein, das jemand bewusst gestaltet hat. Die Bibel sagt das schon vor fast dreitausend Jahren: Das Los wird geworfen, aber es fällt, wie der Herr will (Spr 16,33).`,
                  detail: `Die Unterscheidung zwischen *Erstursache* (Gott, der allem das Sein gibt) und *Zweitursachen* (den Geschöpfen mit ihrer eigenen Wirksamkeit, einschließlich echter Zufallsprozesse) ist klassisch und geht auf Thomas von Aquin zurück. Sie bedeutet nicht, dass Gott hinter jedem Würfelwurf „eingreift", sondern dass die ganze Ordnung – mit ihren gesetzmäßigen und zufälligen Anteilen – von ihm gewollt und getragen ist. Man muss dieser Sicht nicht zustimmen, aber sie ist widerspruchsfrei.`,
                  sources: [{ kind: 'bibel', work: 'Sprüche', ref: '16,33', quote: `Das Los wird geworfen in den Schoß; aber es fällt, wie der Herr will.`, status: 'paraphrase' }],
                  questionsBack: [`Ist ein Würfelwurf in einem bewusst gestalteten Spiel „ungeplant", nur weil sein Ergebnis physikalisch zufällig ist?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'weinberg-sinnlos',
      objection: `Weinberg hat es gesagt: Je verständlicher das Universum erscheint, desto sinnloser erscheint es auch.`,
      objectionBy: 'Steven Weinberg',
      answer: `Weinberg schrieb im selben Absatz, dass das Bemühen, das Universum zu verstehen, das menschliche Leben über die Farce erhebt. Und dass das Universum überhaupt verständlich ist, ist das eigentliche Rätsel: Warum sollte ein sinnloses Universum mathematisch verständlich sein und Wesen hervorbringen, die es verstehen? Das passt viel besser zu einem rationalen Schöpfer.`,
      sources: [{ kind: 'gegner', author: 'Steven Weinberg', work: 'The First Three Minutes', ref: 'Epilog', year: '1977', quote: `The effort to understand the universe is one of the very few things that lifts human life a little above the level of farce, and gives it some of the grace of tragedy.`, status: 'verbatim' }],
      followUps: [
        {
          id: 'verstehbarkeit-evolutionaer',
          objection: `Dass wir die Welt verstehen, ist evolutionär erklärbar. Wer seine Umwelt versteht, überlebt.`,
          objectionBy: 'Gesprächspartner',
          answer: `Für das Überleben musste man Beeren, Raubtiere und Wetter verstehen – nicht gekrümmte Raumzeit, Quantenfelder und 13,8 Milliarden Jahre kosmische Geschichte. Dass unser Verstand weit über die Überlebensbedürfnisse hinaus die Tiefenstruktur der Welt erfasst, ist erklärungsbedürftig.`,
          detail: `Siehe den Claim „Die Evolution hat uns verlässliche Vernunft gegeben" und den Themenblock Mathematik (Wigner).`,
          followUps: [
            {
              id: 'abstraktes-denken-nebenprodukt',
              objection: `Abstraktes Denken ist eben ein Nebenprodukt: Wer allgemeine Problemlösefähigkeit für Jagd und soziale Beziehungen entwickelt, bekommt Mathematik und Physik gratis dazu – wie das Lesen, für das das Gehirn auch nicht gemacht wurde.`,
              objectionBy: 'Sean Carroll (nach Steven Pinker)',
              answer: `Dann hast du zwei glückliche Zufälle statt einem: Erstens, dass die tiefsten Gesetze des Universums überhaupt in eleganter Mathematik ausdrückbar sind; zweitens, dass ein für die Savanne entstandenes „Nebenprodukt" ausgerechnet diese Mathematik erfassen kann – bis hin zu Strukturen, die erst Jahrzehnte später in der Natur entdeckt wurden. Einstein nannte es das ewig Unbegreifliche an der Welt, dass sie begreiflich ist. Unter der Annahme, dass Welt und Verstand aus demselben Logos stammen, ist diese Passung erwartbar; als doppelter Zufall ist sie erstaunlich.`,
              detail: `Beispiele für „vorauseilende" Mathematik: Riemanns Geometrie gekrümmter Räume (1854) wurde zur Sprache der Allgemeinen Relativitätstheorie (1915); die komplexen Zahlen, lange als Kuriosität betrachtet, sind unverzichtbar für die Quantenmechanik; Gruppentheorie sagte Teilchen voraus, die man später fand. Wigner sprach 1960 von der „unvernünftigen Wirksamkeit der Mathematik". Christlich gesprochen: Der Mensch ist nach dem Bild des Logos geschaffen (Joh 1,1–3.9), und die Welt ist durch den Logos geordnet – deshalb passen sie zueinander.`,
              sources: [{ kind: 'wissenschaft', author: 'Albert Einstein', work: '„Physik und Realität", Journal of the Franklin Institute 221', year: '1936', quote: `Das ewig Unbegreifliche an der Welt ist ihre Begreiflichkeit.`, status: 'verbatim', note: 'Einstein war kein Christ und glaubte nicht an einen persönlichen Gott; sein Staunen über die Verstehbarkeit der Welt ist dennoch bezeichnend.' }],
              questionsBack: [`Warum sollte ein Gehirn, das für Jagd und Sammeln geformt wurde, die Mathematik gekrümmter Raumzeit verstehen können – und warum ist die Welt überhaupt so mathematisch?`],
              followUps: [
                {
                  id: 'wahre-ueberzeugungen-ueberleben',
                  objection: `Aber wahre Überzeugungen helfen beim Überleben. Wer glaubt, dass der Löwe ungefährlich ist, stirbt. Also selektiert die Evolution für verlässliches Denken – und damit ist die Vernunft naturalistisch erklärt.`,
                  objectionBy: 'Sean Carroll',
                  answer: `Für Überzeugungen über Löwen und Beeren mag das gelten. Aber die Selektion belohnt nützliches *Verhalten*, nicht wahre Überzeugungen als solche – und für viele Verhaltensweisen gibt es falsche Überzeugungen, die genauso gut funktionieren. Plantinga argumentiert: Unter reinem Naturalismus ist die Wahrscheinlichkeit, dass unsere Denkvermögen auch bei abstrakten, überlebensirrelevanten Fragen verlässlich sind, niedrig oder unbestimmbar. Dann aber untergräbt der Naturalismus das Vertrauen in die Vernunft, mit der er begründet wird – auch in die Überzeugung, dass der Naturalismus wahr ist.`,
                  detail: `Das „evolutionäre Argument gegen den Naturalismus" (Plantinga, *Warrant and Proper Function*, 1993; *Where the Conflict Really Lies*, 2011) richtet sich nicht gegen die Evolution, sondern gegen die Verbindung von Evolution und Naturalismus. Mit Theismus verbunden, ist Evolution unproblematisch: Gott kann den Prozess so gestalten, dass verlässliche Vernunft entsteht. Das Argument ist philosophisch umstritten, aber ernst zu nehmen – auch der Atheist Thomas Nagel hält es für bedenkenswert.`,
                  voices: [
                    { person: 'plantinga', role: 'als Erkenntnistheoretiker', text: `Plantinga argumentiert, dass die Evolution Verhalten selektiert, das dem Überleben dient, während der Wahrheitsgehalt der zugrunde liegenden Überzeugungen für die Selektion unsichtbar bleiben kann. Wer zugleich Naturalist und Evolutionist ist, hat daher einen Grund, an der Verlässlichkeit seiner eigenen Denkvermögen zu zweifeln – und damit auch an seinem Naturalismus. Der Konflikt bestehe nicht zwischen Wissenschaft und Glaube, sondern zwischen Wissenschaft und Naturalismus.` },
                  ],
                  sources: [{ kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', year: '2011', quote: `Der eigentliche Konflikt bestehe zwischen Wissenschaft und Naturalismus, nicht zwischen Wissenschaft und theistischem Glauben.`, status: 'paraphrase' }],
                  questionsBack: [`Welchen Überlebensvorteil hatte es für unsere Vorfahren, die Quantenmechanik richtig zu verstehen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sinn-selbst-erschaffen',
      objection: `Das Universum ist gleichgültig – und das ist gut so. Wir müssen keinen Sinn von außen empfangen; wir erschaffen ihn selbst, in Liebe, Wissenschaft und Kunst. Das ist erwachsener als die Vorstellung, ein kosmischer Vater habe einen Plan für uns.`,
      objectionBy: 'Sean Carroll (Poetischer Naturalismus)',
      answer: `Der selbst geschaffene Sinn ist schön – aber er hat zwei Schwächen. Was ich selbst erschaffe, kann ich auch wieder abschaffen; er bindet niemanden, nicht einmal mich. Und er kann niemandem sagen, dass er Unrecht tut, wenn er einen anderen Sinn wählt – etwa den eines Tyrannen. Der christliche Glaube nimmt menschliche Kreativität dagegen ernster: Wir gestalten Sinn, weil wir nach dem Bild eines Schöpfers geschaffen sind – als Mitgestalter eines Sinns, der größer ist als wir.`,
      detail: `Carroll vertritt in *The Big Picture* (2016) einen „poetischen Naturalismus": Auf der fundamentalen Ebene gibt es nur Quantenfelder; Begriffe wie Sinn, Wert und Zweck sind nützliche Beschreibungsweisen auf höherer Ebene, die wir wählen. Das ist ehrlicher als viele populäre Versionen, denn Carroll gesteht zu, dass es keinen kosmischen Zweck gibt. Gerade deshalb lohnt die Rückfrage: Wenn Sinn gewählt ist, auf welcher Grundlage kann man eine Wahl als falsch bezeichnen? Tolkien beschrieb den Menschen als „Untergestalter" (sub-creator), der schafft, weil er nach dem Bild des Schöpfers gemacht ist.`,
      sources: [{ kind: 'gegner', author: 'Sean Carroll', work: 'The Big Picture: On the Origins of Life, Meaning, and the Universe Itself', year: '2016', quote: `Es gebe keinen von außen vorgegebenen Sinn des Universums; Sinn und Wert würden von Menschen geschaffen – als legitime Redeweisen auf einer höheren Beschreibungsebene.`, status: 'paraphrase' }],
      questionsBack: [`Wenn jeder seinen Sinn selbst erschafft – mit welchem Recht nennst du den selbst gewählten Sinn eines Tyrannen falsch?`],
      followUps: [
        {
          id: 'vorgegebener-sinn-entmuendigt',
          objection: `Ein von Gott vorgegebener Sinn entmündigt. Dann bin ich nur ein Werkzeug in einem fremden Plan, eine Figur in einem Stück, das ein anderer geschrieben hat.`,
          objectionBy: 'Sean Carroll',
          answer: `Werkzeuge werden benutzt; Kinder werden geliebt. Der Sinn, den der christliche Glaube verkündet, ist kein fremder Zweck, dem ich geopfert werde, sondern die Einladung, ganz ich selbst zu werden – in Gemeinschaft mit Gott. Irenäus sagte: Die Ehre Gottes ist der lebendige Mensch. Gott will nicht weniger Mensch, sondern mehr Mensch. Freiheit ist nicht die Abwesenheit jedes Ziels, sondern die Fähigkeit, das Gute zu wählen, für das man geschaffen ist.`,
          detail: `Die orthodoxe Tradition beschreibt das Ziel des Menschen als Teilhabe am Leben Gottes (2 Petr 1,4) – Athanasius: „Er wurde Mensch, damit wir vergöttlicht würden" (De Incarnatione 54). Das ist das Gegenteil von Entmündigung: Der Mensch wird nicht zum Werkzeug herabgesetzt, sondern zur Gemeinschaft mit Gott erhoben. Die Synergie von Gnade und freiem Willen gehört zum Kern der koptisch-orthodoxen Heilslehre: Gott zwingt niemanden; er lädt ein.`,
          voices: [
            { person: 'athanasius', role: 'als Lehrer der Menschwerdung', text: `Für Athanasius ist die Würde des Menschen nicht in seiner Größe begründet, sondern darin, dass der Logos selbst Mensch geworden ist, um den Menschen aus der Vergänglichkeit zu befreien und ihn zur Teilhabe am göttlichen Leben zu führen (De Incarnatione 54). Ein Gott, der sich so tief herablässt, behandelt den Menschen nicht als Werkzeug, sondern als geliebtes Gegenüber.` },
          ],
          sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'IV,20,7', year: 'um 180', quote: `Die Ehre Gottes ist der lebendige Mensch; das Leben des Menschen aber ist die Schau Gottes.`, original: `Gloria enim Dei vivens homo, vita autem hominis visio Dei.`, translation: 'eigene Übersetzung', status: 'verbatim' }],
          questionsBack: [`Ist ein Kind, das von seinen Eltern geliebt und zu einem guten Leben eingeladen wird, ein Werkzeug in einem fremden Plan?`],
          followUps: [
            {
              id: 'vergoettlichung-groessenwahn',
              objection: `„Vergöttlichung"? Das ist ja der ultimative Größenwahn – schlimmer als jeder Geozentrismus. Erst der Mensch im Mittelpunkt des Kosmos, jetzt der Mensch als Gott.`,
              objectionBy: 'Neil deGrasse Tyson',
              answer: `Gemeint ist nicht, dass der Mensch Gott wird, wie Gott Gott ist. Die koptische Kirche betont mit Nachdruck – besonders Papst Schenuda III. –, dass kein Geschöpf je am Wesen Gottes teilhat. Teilhabe heißt: aus Gnade Gemeinschaft mit Gottes Leben, Heiligkeit und Liebe, nicht Verwandlung in die Gottheit. Und der Weg dorthin ist das Gegenteil von Größenwahn: Demut, Buße, Fasten, Nächstenliebe – der Weg des Kreuzes. Gott wurde klein, damit der Mensch groß werden kann; nicht der Mensch macht sich groß.`,
              detail: `In der koptischen Tradition wird der Begriff „Vergöttlichung" vorsichtig verwendet, um Missverständnisse zu vermeiden: Der Mensch bleibt Geschöpf, die Unterscheidung zwischen Schöpfer und Geschöpf wird nie aufgehoben. Was der Mensch empfängt, sind Gaben der Gnade – die Einwohnung des Heiligen Geistes, die Gotteskindschaft, die Teilhabe an der Heiligkeit Gottes. Für das Gespräch ist wichtig: Die christliche Würde des Menschen ist geschenkt, nicht erobert – und sie geht mit tiefster Demut einher.`,
              sources: [{ kind: 'bibel', work: '2. Petrus', ref: '1,4', quote: `… damit ihr durch sie Teilhaber der göttlichen Natur werdet, nachdem ihr dem Verderben entflohen seid, das durch die Begierde in der Welt ist.`, status: 'paraphrase', note: 'In koptisch-orthodoxer Auslegung: Teilhabe aus Gnade, nicht am Wesen Gottes.' }],
              questionsBack: [`Ist eine Würde, die man nur als Geschenk empfangen und auf dem Weg der Demut leben kann, Größenwahn?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Misst du den Wert eines Menschen an seiner Größe?`,
    `Wenn wir objektiv bedeutungslos sind – woher kommt Sagans Aufruf, den blauen Punkt zu bewahren?`,
    `Warum ist ein „sinnloses" Universum so gut verständlich?`,
    `Wer ist bedeutender: der Stern, der nichts von sich weiß, oder der Mensch, der ihn erforscht?`,
  ],
  avoid: [
    `Die Größe des Universums kleinreden oder bestreiten. Sie ist überwältigend – und das darf man zugeben.`,
    `Behaupten, die Erde sei geometrisch im Zentrum. Darum geht es nicht.`,
  ],
  concessions: [
    `Die Erde ist im Verhältnis zum Universum verschwindend klein, und der Mensch erscheint sehr spät in der kosmischen Geschichte.`,
    `Das Gefühl der eigenen Kleinheit vor dem Sternenhimmel ist berechtigt – die Bibel selbst kennt es (Ps 8).`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées', year: '1670', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles', year: '1947', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'De hominis opificio', year: 'ca. 379', status: 'paraphrase' },
    { kind: 'gegner', author: 'Carl Sagan', work: 'Pale Blue Dot', year: '1994', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Pale Blue Dot', 'Sagan', 'Pascal', 'Menschenwürde', 'Gottebenbildlichkeit', 'Größe des Universums'],
  related: [
    'astrobiologie/erde-durchschnittlich',
    'astrobiologie/ausserirdische-widerlegen-bibel',
    'feinabstimmung/universum-lebensfeindlich',
    'sinn-existenz/kein-objektiver-sinn',
    'moral-und-gott/gut-ohne-gott',
    'naturalismus/vernunft-durch-evolution',
  ],
};

export default claim;
