import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'konvergenz-zufall',
  title: `„Konvergente Evolution zeigt, wie mächtig Selektion ist."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'Climbing Mount Improbable (1996), Kap. „The Forty-fold Path to Enlightenment"' },
    { name: 'Jonathan B. Losos', role: 'Evolutionsbiologe, Washington University in St. Louis', work: 'Improbable Destinies: Fate, Chance, and the Future of Evolution (2017)' },
    { name: 'George R. McGhee', role: 'Paläobiologe, Rutgers University', work: 'Convergent Evolution: Limited Forms Most Beautiful (2011)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
  ],
  steelman: `Augen sind im Tierreich nach klassischer Schätzung 40- bis 65-mal unabhängig entstanden; Kameraaugen bei Wirbeltieren und Tintenfischen, Echoortung bei Fledermäusen und Zahnwalen, Beutelwolf und Wolf, stromlinienförmige Körper bei Haien, Ichthyosauriern und Delfinen. Bei Anolis-Eidechsen auf den Großen Antillen entstanden auf jeder Insel unabhängig dieselben „Ökotypen". Selbst auf molekularer Ebene finden Fledermäuse und Delfine im Hörprotein Prestin teilweise dieselben Aminosäureaustausche. Das zeigt: Natürliche Selektion ist kein blindes Würfeln, sondern ein mächtiger, fast deterministischer Optimierer, der in denselben Umwelten immer wieder dieselben guten Lösungen findet. Wer behauptet, komplexe Strukturen seien zu unwahrscheinlich für die Evolution, muss erklären, warum sie dann mehrfach entstanden sind.`,
  biblical: {
    summary: `Die Schrift beschreibt die Weisheit als „Werkmeisterin" bei der Erschaffung der Welt (Spr 8,30) und preist, dass Gott alle Werke „weislich geordnet" hat (Ps 104,24). Wiederkehrende Lösungen in der Natur passen gut zu einer Schöpfung, in der Ordnung und Gesetzmäßigkeit herrschen. Die Bibel sagt nicht, wie oft Augen entstanden sind; sie lehrt, dass die Welt eine Ordnung hat, die auf einen weisen Urheber verweist.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '104,24', translation: 'Luther 1912', status: 'verbatim', quote: `HERR, wie sind deine Werke so groß und viel! Du hast sie alle weislich geordnet, und die Erde ist voll deiner Güter.` },
      { kind: 'bibel', work: 'Sprüche', ref: '8,30', translation: 'Luther 1912', status: 'paraphrase', quote: `Die Weisheit spricht: Da war ich als Werkmeisterin bei ihm und hatte meine Lust täglich und spielte vor ihm allezeit.` },
      { kind: 'bibel', work: 'Römer', ref: '1,20', translation: 'Luther 1912', status: 'verbatim', quote: `Denn sein unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt; also daß sie keine Entschuldigung haben.` },
    ],
  },
  church: {
    summary: `Athanasius vergleicht den Logos mit einem Musiker, der die Saiten einer Leier so stimmt, dass aus vielen Tönen eine Harmonie entsteht. Eine Schöpfung, in der Gesetzmäßigkeit und Ordnung immer wieder zu denselben schönen und zweckmäßigen Formen führen, entspricht diesem Bild. Für die koptische Theologie ist Konvergenz daher kein Gegenargument gegen den Schöpfer, sondern ein Hinweis auf die vernünftige Struktur, die er der Welt gegeben hat.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '42', status: 'paraphrase', quote: `Wie ein Musiker die Leier stimmt und hohe und tiefe Töne zu einer Harmonie verbindet, so hält die Weisheit Gottes das All zusammen und bringt es zu einer schönen Ordnung.` },
    ],
  },
  opposingView: {
    summary: `Konvergenz – die unabhängige Entstehung ähnlicher Merkmale in verschiedenen Linien – ist in der Biologie weit verbreitet und gut dokumentiert. Die Standarderklärung lautet: Ähnliche Umweltanforderungen und physikalische Randbedingungen führen über Selektion zu ähnlichen Lösungen; die Zahl funktionstüchtiger Formen ist begrenzt (McGhee 2011). Auf molekularer Ebene sind einzelne Fälle paralleler Aminosäureaustausche gut belegt (Prestin: Liu et al. 2010; Li et al. 2010); die Behauptung genomweiter Konvergenz bei echoortenden Säugetieren (Parker et al. 2013) hielt späteren Analysen mit besseren Nullmodellen jedoch nicht stand. In der Evolutionsbiologie gibt es eine alte Debatte zwischen Stephen Jay Gould (Kontingenz: Das Band des Lebens würde bei Wiederholung anders ablaufen) und Simon Conway Morris (Konvergenz: Ähnliche Ergebnisse, einschließlich menschenähnlicher Intelligenz, seien nahezu unausweichlich).`,
    sources: [
      { kind: 'wissenschaft', author: 'Luitfried von Salvini-Plawen, Ernst Mayr', work: '„On the evolution of photoreceptors and eyes", Evolutionary Biology 10', ref: 'S. 207–263', year: '1977', status: 'paraphrase', quote: `Photorezeptoren und Augen seien in verschiedenen Tiergruppen 40- bis 65-mal unabhängig entstanden.`, note: 'Spätere Arbeiten zum gemeinsamen Steuergen Pax6 haben die Deutung „völlig unabhängig" teilweise relativiert.' },
      { kind: 'wissenschaft', author: 'Yang Liu u. a.', work: '„Convergent sequence evolution between echolocating bats and dolphins", Current Biology 20 (2)', ref: 'R53–R54', year: '2010', status: 'paraphrase', quote: `Im Hörprotein Prestin zeigen echoortende Fledermäuse und Zahnwale konvergente Aminosäureaustausche, die im Proteinstammbaum eine falsche Gruppierung erzeugen.` },
      { kind: 'wissenschaft', author: 'Jonathan B. Losos u. a.', work: '„Contingency and determinism in replicated adaptive radiations of island lizards", Science 279', ref: 'S. 2115–2118', year: '1998', status: 'paraphrase' },
      { kind: 'gegner', author: 'Stephen Jay Gould', work: 'Wonderful Life: The Burgess Shale and the Nature of History', year: '1989', status: 'paraphrase', quote: `Würde man das „Band des Lebens" zurückspulen und erneut abspielen, käme mit an Sicherheit grenzender Wahrscheinlichkeit nichts Menschenähnliches heraus.` },
    ],
  },
  quickAnswer: `Konvergenz ist ein zweischneidiges Schwert für den Materialismus. Wenn ein angeblich blinder Prozess immer wieder bei denselben hochkomplexen Lösungen ankommt – Kameraaugen, Echoortung, sogar dieselben Aminosäuren –, dann ist der Raum der Möglichkeiten offenbar stark vorstrukturiert. Der Paläontologe Simon Conway Morris folgert daraus eine tiefe Ordnung der Natur, die auf Sinn und Ziel hindeutet. Und jede unabhängige Entstehung eines komplexen Organs ist ein weiteres unwahrscheinliches Ereignis, das erklärt werden muss.`,
  keyPoints: [
    `**Konvergenz zeigt Struktur, nicht Zufall:** Wenn dieselben Lösungen immer wieder erreicht werden, ist der Möglichkeitsraum geordnet – genau das erwartet ein Schöpfungsglaube.`,
    `**Doppelte Unwahrscheinlichkeit:** Jede unabhängige Entstehung eines Kameraauges ist ein eigener Fall, den der Mechanismus erklären muss.`,
    `**Molekulare Konvergenz** (Prestin) deutet auf enge Funktionspfade hin – vereinbar mit der Seltenheit funktionaler Proteinvarianten.`,
    `**Innerer Streit der Evolutionsbiologie:** Gould (Kontingenz) gegen Conway Morris (Konvergenz) – beide können nicht zugleich recht haben, was das „blinde" Bild betrifft.`,
    `**Gesetze erklären sich nicht selbst:** Wenn Physik und Chemie Augen und Intelligenz nahezu unausweichlich machen, verschiebt sich die Design-Frage auf die Ebene der Naturgesetze (Feinabstimmung).`,
  ],
  voices: [
    {
      person: 'conway-morris',
      role: 'als Paläontologe und Experte für Konvergenz',
      text: `Conway Morris hat Hunderte Beispiele konvergenter Evolution zusammengetragen – vom Auge über die Echoortung bis zu Formen sozialer Intelligenz. Sein Schluss: Die Evolution ist kein ziellos mäanderndes Würfelspiel, wie Gould meinte, sondern bewegt sich in einem stark vorstrukturierten „Raum" möglicher Lösungen, sodass bestimmte Ergebnisse, bis hin zu menschenähnlicher Intelligenz, nahezu unausweichlich sind. Als Christ sieht er darin einen Hinweis auf eine tiefe Ordnung der Schöpfung. Er akzeptiert die Evolutionstheorie und lehnt Intelligent Design ab – seine Deutung ist eine Form theistischer Evolution.`,
      sources: [
        { kind: 'fachliteratur', author: 'Simon Conway Morris', work: "Life's Solution: Inevitable Humans in a Lonely Universe", year: '2003', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Simon Conway Morris', work: 'The Runes of Evolution: How the Universe Became Self-Aware', year: '2015', status: 'paraphrase' },
      ],
    },
    {
      person: 'bechly',
      role: 'als Paläontologe und Systematiker',
      text: `Bechly weist aus seiner Arbeit an fossilen Insekten darauf hin, wie häufig Merkmale, die man zunächst als Zeichen gemeinsamer Abstammung deutete, sich später als konvergent herausstellen. Je häufiger Konvergenz ist, desto schwieriger wird es, Stammbäume eindeutig zu rekonstruieren, und desto erklärungsbedürftiger wird die wiederholte Entstehung komplexer Strukturen durch einen ungerichteten Prozess. Für ihn ist Konvergenz eher ein Indiz für einen gemeinsamen Ideenvorrat – wie bei einem Ingenieur, der bewährte Lösungen wiederverwendet.`,
      sources: [
        { kind: 'fachliteratur', author: 'Günter Bechly', work: 'Beiträge zu Konvergenz und Homoplasie (evolutionnews.org; Vorträge)', status: 'unverified', note: 'Konkrete Fundstellen vor Zitierung heraussuchen.' },
      ],
    },
    {
      person: 'polkinghorne',
      role: 'als Physiker und Theologe',
      text: `Polkinghorne betont, dass die Fruchtbarkeit evolutionärer Prozesse von den Naturgesetzen abhängt, in denen sie ablaufen: Nur in einem Universum mit genau abgestimmten physikalischen und chemischen Eigenschaften kann Selektion überhaupt zu Augen, Gehirnen und Bewusstsein führen. Wenn Konvergenz zeigt, dass diese Ergebnisse in den Gesetzen gleichsam angelegt sind, dann verweist sie über die Biologie hinaus auf die Frage, warum die Gesetze so beschaffen sind.`,
      sources: [
        { kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Science and Religion in Quest of Truth', year: '2011', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe des ordnenden Logos',
      text: `Athanasius sieht in der Harmonie der Schöpfung das Werk des Logos, der wie ein Musiker die verschiedenen Elemente zu einem Wohlklang stimmt. Dass in verschiedenen Linien des Lebens immer wieder dieselben „Melodien" erklingen – dasselbe Auge, dieselbe Echoortung –, würde ihn nicht überraschen. Es zeigt eine Welt, in der Ordnung nicht zufällig ist, sondern auf Vernunft zurückgeht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '38–42', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'augen-vierzigmal',
      objection: `Augen sind über 40-mal unabhängig entstanden. Das zeigt, dass Selektion gute Lösungen immer wieder findet – komplexe Organe sind für die Evolution keineswegs unerreichbar.`,
      objectionBy: 'Richard Dawkins',
      answer: `Das ist ein interessantes Argument – aber es schneidet in beide Richtungen. Wenn ein angeblich blinder Prozess immer wieder bei denselben komplexen Lösungen ankommt, ist der Raum der Möglichkeiten offenbar stark vorstrukturiert. Genau das folgert Simon Conway Morris, der führende Experte für Konvergenz: Die Natur hat eine tiefe Ordnung. Und jede unabhängige Entstehung ist ein weiterer Einzelfall, dessen genetische Grundlage erklärt werden muss – nicht ein Beweis, dass es leicht war.`,
      followUps: [
        {
          id: 'nur-wenige-physikalische-loesungen',
          objection: `Konvergenz zeigt einfach, dass es nur wenige physikalisch gute Lösungen gibt. Das ist Physik, kein Gott.`,
          objectionBy: 'Jerry Coyne',
          answer: `Einverstanden, dass physikalische Randbedingungen die Lösungen begrenzen. Aber dann sind die Naturgesetze so beschaffen, dass sie Augen, Echoortung und schließlich Gehirne nahezu unausweichlich machen. Damit verschiebt sich die Frage nur eine Ebene tiefer: Warum sind die Gesetze so, dass sie zu sehenden, denkenden Wesen führen? Das ist die Frage der Feinabstimmung.`,
          followUps: [
            {
              id: 'gesetze-reichen-gott-ueberfluessig',
              objection: `Dann reichen eben die Naturgesetze. Gott ist überflüssig.`,
              objectionBy: 'Richard Dawkins',
              answer: `Naturgesetze beschreiben, wie Dinge sich verhalten; sie erklären nicht, warum es überhaupt Gesetze gibt und warum gerade solche, die Leben und Geist ermöglichen. Der christliche Glaube hat nie gesagt, Gott konkurriere mit den Naturgesetzen – er ist ihr Urheber. Je mehr Ordnung wir in der Natur finden, desto dringlicher wird die Frage nach ihrem Ursprung. Siehe die Claims zur Feinabstimmung und zu den Naturgesetzen.`,
            },
          ],
        },
        {
          id: 'meist-einfache-pigmentflecken',
          objection: `Die meisten dieser „40 Augen" sind einfache Pigmentflecken oder Grubenaugen. Echte Kameraaugen sind nur wenige Male entstanden.`,
          objectionBy: 'Nathan Lents',
          answer: `Richtig, und das macht die Sache nicht einfacher: Gerade die komplexen Kameraaugen von Wirbeltieren und Kopffüßern sind unabhängig entstanden – mit Linsenproteinen, die in beiden Gruppen aus ganz verschiedenen Ausgangsproteinen rekrutiert wurden. Zugleich werden beide Augentypen von verwandten Steuergenen (Pax6) angestoßen – ein gemeinsamer „Werkzeugkasten", dessen Ursprung selbst zu erklären ist.`,
          followUps: [
            {
              id: 'nilsson-pelger-auge',
              objection: `Und dass Augen schnell entstehen können, ist berechnet: Nilsson und Pelger zeigten 1994, dass aus einem flachen lichtempfindlichen Fleck in weniger als 400.000 Generationen ein Linsenauge werden kann – eine „pessimistische" Schätzung. In geologischen Zeiträumen ist das ein Wimpernschlag.`,
              objectionBy: 'Richard Dawkins',
              answer: `Das Modell ist geistreich, aber man muss lesen, was es voraussetzt: Es beginnt mit einem fertigen Fleck lichtempfindlicher Zellen – samt Opsinen, der ganzen Signalkaskade der Phototransduktion, Nervenverbindungen und einem Gehirn, das Signale verarbeitet. Dann berechnet es, wie sich die **Form** des Gewebes in Ein-Prozent-Schritten zu einem Becher und einer Linse verändern könnte, unter der Annahme, dass jeder Schritt vorteilhaft ist und die nötige Variation bereitsteht. Das ist eine Geometrie-Rechnung, kein genetisches Modell – die biochemisch schwierigen Teile stecken in der Ausgangsannahme.`,
              sources: [
                { kind: 'gegner', author: 'Dan-E. Nilsson, Susanne Pelger', work: '„A pessimistic estimate of the time required for an eye to evolve", Proceedings of the Royal Society B 256', year: '1994', status: 'paraphrase', quote: `Unter den Modellannahmen könnte sich aus einem flachen lichtempfindlichen Gewebefleck in weniger als 364.000 Generationen ein Linsenauge bilden.` },
              ],
              questionsBack: [
                `Woher kommen im Modell von Nilsson und Pelger die Opsine, die Phototransduktion und die Nervenverschaltung?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'prestin-molekular',
      objection: `Selbst auf molekularer Ebene findet Selektion dieselben Lösungen: Fledermäuse und Delfine haben im Hörprotein Prestin teilweise dieselben Aminosäureaustausche erworben.`,
      objectionBy: 'Jonathan Losos',
      answer: `Ein faszinierender Befund. Er zeigt aber auch, wie eng die Funktionspfade sind: Wenn für Ultraschallhören in zwei weit entfernten Linien dieselben Austausche nötig sind, gibt es offenbar nur wenige gangbare Wege – das passt zur Seltenheit funktionaler Proteinvarianten. Übrigens hat sich die Behauptung genomweiter Konvergenz bei echoortenden Säugetieren (Parker et al. 2013) in späteren Analysen nicht bestätigt; man sollte also nicht übertreiben – in beide Richtungen.`,
      sources: [
        { kind: 'wissenschaft', author: 'Joe Parker u. a.', work: '„Genome-wide signatures of convergent evolution in echolocating mammals", Nature 502', ref: 'S. 228–231', year: '2013', status: 'paraphrase', note: 'Spätere Analysen (u. a. Thomas & Hahn 2015; Zou & Zhang 2015) fanden mit angemessenen Nullmodellen keine überzufällige genomweite Konvergenz.' },
      ],
      followUps: [
        {
          id: 'genomweit-baum',
          objection: `Das ist ein winziger Teil des Genoms. Genomweit folgt alles dem Stammbaum – Konvergenz ist die Ausnahme.`,
          objectionBy: 'Dennis Venema',
          answer: `Das gestehe ich zu: Das genomweite Signal folgt überwiegend dem Baum. Mein Punkt ist ein anderer: Konvergenz bei komplexen Merkmalen ist häufig, und jede unabhängige Entstehung muss erklärt werden. Zudem müssen Systematiker morphologische Merkmale immer wieder als konvergent statt als homolog einstufen – Ähnlichkeit ist also kein so eindeutiger Wegweiser, wie oft dargestellt.`,
          followUps: [
            {
              id: 'konvergenz-widerlegt-abstammung-nicht',
              objection: `Konvergenz widerlegt die gemeinsame Abstammung nicht.`,
              objectionBy: 'Jerry Coyne',
              answer: `Einverstanden – darum geht es mir auch nicht. Es geht um die Frage, wie leicht komplexe Lösungen durch einen ungerichteten Prozess entstehen. Konvergenz zeigt, dass der Weg dorthin offenbar nicht beliebig, sondern stark kanalisiert ist. Das ist eine Beobachtung, die gut zu einer geordneten Schöpfung passt – ob man nun gemeinsame Abstammung annimmt oder nicht.`,
              followUps: [
                {
                  id: 'molekulare-konvergenz-ueberschaetzt',
                  objection: `Übrigens war die Behauptung massenhafter molekularer Konvergenz bei Fledermäusen und Delfinen übertrieben: Die genomweite Studie von Parker und Kollegen 2013 hielt den Nachprüfungen nicht stand – Thomas & Hahn und Zou & Zhang zeigten 2015, dass das Signal nicht über dem Zufallsrauschen liegt. Molekulare Konvergenz ist selten.`,
                  objectionBy: 'Dennis Venema',
                  answer: `Das stimmt, und ich nehme die Korrektur an: Die genomweiten Konvergenz-Behauptungen von 2013 waren überzogen; der Prestin-Befund selbst gilt weiterhin als belegt. Aber bedenke die Folge: Wenn molekulare Konvergenz selten ist, dann entstanden die konvergenten **Organe** – Echoortung, Kameraaugen, Flügel – meist auf genetisch verschiedenen Wegen. Jede dieser Neuerungen muss dann unabhängig erklärt werden. Seltene molekulare Konvergenz macht das Konvergenz-Argument nicht schwächer, sondern verdoppelt die Erklärungslast.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Joe Parker u. a.', work: '„Genome-wide signatures of convergent evolution in echolocating mammals", Nature 502', year: '2013', status: 'paraphrase' },
                    { kind: 'gegner', author: 'Gregg W. C. Thomas, Matthew W. Hahn', work: '„Determining the null model for detecting adaptive convergence from genomic data: a case study using echolocating mammals", Molecular Biology and Evolution 32', year: '2015', status: 'paraphrase' },
                    { kind: 'gegner', author: 'Zhengting Zou, Jianzhi Zhang', work: '„No genome-wide protein sequence convergence for echolocation", Molecular Biology and Evolution 32', year: '2015', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'band-des-lebens-gould',
      objection: `Gould hat gezeigt: Spult man das Band des Lebens zurück und spielt es neu ab, käme nie wieder der Mensch heraus. Evolution ist kontingent; wir sind ein glücklicher Zufall.`,
      objectionBy: 'Jerry Coyne',
      answer: `Interessant, dass du Gould anführst – denn Konvergenz ist das stärkste Argument gegen ihn. Conway Morris, der die Burgess-Fossilien selbst bearbeitet hat, widerspricht Gould: Weil die Evolution immer wieder zu denselben Lösungen findet, wären menschenähnliche Intelligenz und Bewusstsein auch bei einer Wiederholung zu erwarten. Du kannst nicht zugleich sagen, Selektion finde zuverlässig dieselben Lösungen, und wir seien ein reiner Zufall.`,
      followUps: [
        {
          id: 'beides-teilweise-wahr',
          objection: `Beides stimmt teilweise. Experimente zeigen Kontingenz und Wiederholbarkeit: Im Lenski-Experiment entwickelte nur eine von zwölf Populationen Cit+, aber alle wurden auf ähnliche Weise fitter.`,
          objectionBy: 'Jonathan Losos',
          answer: `Das ist eine faire und differenzierte Antwort. Sie zeigt aber, dass „Zufall" und „Selektion" keine Erklärung für alles sind: Wo Neuerungen selten und von glücklichen Vorbedingungen abhängig sind, ist die Frage nach ihrer Wahrscheinlichkeit legitim; wo Ergebnisse sich wiederholen, ist die Frage nach der zugrunde liegenden Ordnung legitim. Beide Fragen führen über die Biologie hinaus.`,
          followUps: [
            {
              id: 'anolis-ekomorphe',
              objection: `Ein Paradebeispiel für Wiederholbarkeit sind die Anolis-Eidechsen der Karibik: Auf Kuba, Hispaniola, Jamaika und Puerto Rico entstanden unabhängig voneinander dieselben „Ökomorphe" – Stammbewohner, Zweigbewohner, Kronenbewohner. Gleiche Umwelt, gleiche Selektion, gleiche Lösung. Dafür braucht man keinen Gott.`,
              objectionBy: 'Jonathan Losos',
              answer: `Die Anolis-Forschung ist großartig, und sie zeigt gut, was Selektion kann: Beinlänge, Haftlamellen, Körpergröße und Färbung innerhalb eines vorhandenen Bauplans an verschiedene Lebensräume anpassen. Das ist Konvergenz auf der Ebene vorhandener Variation – also genau der Bereich, den niemand bestreitet. Über die Frage, wie neue komplexe Organe und Baupläne entstehen, sagt sie wenig. Und um Gott ging es mir nicht als Lückenfüller, sondern als Grund dafür, dass die Welt so geordnet ist, dass Leben sich überhaupt so zuverlässig anpassen kann.`,
              sources: [
                { kind: 'gegner', author: 'Jonathan B. Losos', work: 'Improbable Destinies: Fate, Chance, and the Future of Evolution', year: '2017', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'design-sollte-module-mischen',
      objection: `Wenn ein Designer bewährte Lösungen wiederverwendet, warum baut er Flügel bei Vögeln, Fledermäusen und Flugsauriern dann auf ganz verschiedene Weise – Federn hier, Hautmembran dort, mal mit dem vierten, mal mit allen Fingern? Ein Ingenieur würde das beste Modul überall einsetzen. Stattdessen folgt jede Lösung dem Stammbaum der jeweiligen Gruppe. Genau das erwartet die Evolution – nicht Design.`,
      objectionBy: 'Nick Matzke',
      answer: `Ein kluger Einwand. Aber Design verlangt nicht, dass überall dasselbe Modul steckt: Auch menschliche Ingenieure lösen dasselbe Problem für verschiedene Plattformen unterschiedlich und passen Lösungen an die vorhandene Architektur an. Und Konvergenz zeigt ja gerade das Gegenteil eines reinen Baummusters: dieselbe Idee – Kameraauge, Echoortung, Flug – in nicht verwandten Gruppen. Dass sich die Ausführung an die jeweilige Gruppe anpasst, ist mit gemeinsamer Abstammung gut vereinbar, die viele Design-Befürworter wie Behe gar nicht bestreiten. Die Design-Frage betrifft den Ursprung der Funktion, nicht das Verwandtschaftsmuster.`,
      followUps: [
        {
          id: 'ewert-abhaengigkeitsgraph',
          objection: `Und Winston Ewerts „Abhängigkeitsgraph", nach dem Genfamilien wie Software-Bibliotheken über Arten verteilt seien, erschien in einem hauseigenen ID-Journal und wurde von Phylogenetikern kritisiert. Der Baum bleibt das bessere Modell.`,
          objectionBy: 'Joshua Swamidass',
          answer: `Ewerts Modell ist ein interessanter Versuch, Design-Wiederverwendung prüfbar zu machen, aber ich hänge mein Argument nicht daran – es ist umstritten und in BIO-Complexity erschienen, das sollte man offen sagen. Mein Punkt braucht kein alternatives Verwandtschaftsmodell: Selbst wenn der Baum das Muster am besten beschreibt, bleibt die Frage, wie die wiederholt auftretenden komplexen Lösungen entstanden. Konvergenz ist ein Befund über die **Erreichbarkeit** von Funktionen, nicht über die Form des Stammbaums.`,
          sources: [
            { kind: 'fachliteratur', author: 'Winston Ewert', work: '„The dependency graph of life", BIO-Complexity', year: '2018', status: 'paraphrase', note: 'ID-nahes Journal; das Modell ist in der Fachwelt umstritten.' },
          ],
        },
        {
          id: 'id-sagt-muster-nicht-voraus',
          objection: `Dann sagt Design über das Muster des Lebens überhaupt nichts voraus – alles passt. Das ist das Gegenteil einer wissenschaftlichen Theorie.`,
          objectionBy: 'Jerry Coyne',
          answer: `Design ist keine Theorie über Verwandtschaftsmuster, so wie die Archäologie keine Theorie über die Reihenfolge von Tonscherben ist. Sie trifft eine Aussage darüber, welche Art von Ursache bestimmte Wirkungen hervorbringen kann: hochspezifische, vielteilige Funktion und codierte Information. Diese Aussage ist prüfbar – etwa indem man zeigt, dass ungelenkte Prozesse solche Strukturen nachweislich erzeugen. Für das Muster der Verwandtschaft ist gemeinsame Abstammung zuständig; für den Ursprung der Information braucht es eine Ursache, die Information erzeugen kann.`,
          voices: [
            {
              person: 'conway-morris',
              role: 'als Paläontologe',
              text: `Conway Morris, selbst kein ID-Vertreter, hält gemeinsame Abstammung für gesichert und sieht in der Allgegenwart der Konvergenz einen Hinweis darauf, dass der Raum der biologischen Möglichkeiten tief strukturiert ist – als würde die Evolution auf vorgegebene „Inseln" der Funktion zusteuern. Für ihn passt das zu einer Schöpfung, deren Ordnung auf intelligente Wesen hin angelegt ist.`,
              sources: [
                { kind: 'fachliteratur', author: 'Simon Conway Morris', work: "Life's Solution: Inevitable Humans in a Lonely Universe", year: '2003', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Selektion immer wieder dieselben komplexen Lösungen findet – woher kommt die Struktur, die das möglich macht?`,
    `Ist jede unabhängige Entstehung eines Kameraauges nicht ein eigener erklärungsbedürftiger Fall?`,
    `Wie passt die Konvergenz zu Goulds These, der Mensch sei ein glücklicher Zufall?`,
    `Warum sind die Naturgesetze so beschaffen, dass sie Augen und Gehirne nahezu unausweichlich machen?`,
  ],
  avoid: [
    `„Konvergenz beweist, dass es keine gemeinsame Abstammung gibt." – Das folgt nicht.`,
    `„Ein Auge kann nicht 40-mal entstehen, also ist alles erfunden." – Die Konvergenz von Augen ist gut belegt; argumentiere mit ihrer Deutung.`,
    `Genomweite Konvergenzbehauptungen zitieren, die später widerlegt wurden (Parker et al. 2013).`,
  ],
  concessions: [
    `Konvergenz ist häufig und gut dokumentiert; Selektion kann in ähnlichen Umwelten zu ähnlichen Lösungen führen.`,
    `Das genomweite Signal folgt überwiegend dem Stammbaum; molekulare Konvergenz ist auf einzelne Gene beschränkt.`,
    `Conway Morris, der diese Deutung vertritt, akzeptiert die Evolutionstheorie und lehnt Intelligent Design ab.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Simon Conway Morris', work: "Life's Solution", year: '2003', status: 'paraphrase' },
    { kind: 'gegner', author: 'Jonathan B. Losos', work: 'Improbable Destinies', year: '2017', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'George R. McGhee', work: 'Convergent Evolution: Limited Forms Most Beautiful', year: '2011', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Konvergenz', 'Auge', 'Echoortung', 'Prestin', 'Conway Morris', 'Gould', 'Kontingenz'],
  related: [
    'feinabstimmung/feinabstimmung-illusion',
    'physik/naturgesetze-erklaeren-sich-selbst',
    'evolution/mutation-selektion-erklaeren-alles',
    'palaeontologie/uebergangsformen',
  ],
};

export default claim;
