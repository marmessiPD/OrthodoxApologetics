import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'entmythologisierung',
  title: `„Die Wunder müssen entmythologisiert werden (Bultmann)."`,
  proponents: [
    { name: 'Rudolf Bultmann', role: 'Neutestamentler, Marburg (1884–1976)', work: 'Neues Testament und Mythologie (1941); Ist voraussetzungslose Exegese möglich? (1957)' },
    { name: 'David Friedrich Strauß', role: 'Theologe (1808–1874)', work: 'Das Leben Jesu, kritisch bearbeitet (1835/36)' },
    { name: 'John Shelby Spong', role: 'Episkopaler Bischof', work: 'Why Christianity Must Change or Die (1998)' },
    { name: 'Gerd Lüdemann', role: 'Neutestamentler, Göttingen (1946–2021)', work: 'Die Auferstehung Jesu (1994)' },
  ],
  steelman: `Das Neue Testament spricht in der Sprache eines antiken Weltbildes: ein dreistöckiges Universum mit Himmel oben, Erde in der Mitte und Unterwelt unten; Dämonen, die Krankheiten verursachen; ein Gottessohn, der vom Himmel herabsteigt und wieder auffährt. Dieses Weltbild ist für den modernen Menschen nicht mehr nachvollziehbar – nicht aus Bosheit, sondern weil wir anders leben und denken. Wer in Krankheit zum Arzt geht und das Licht einschaltet, rechnet nicht mehr mit Geistern und Wundern. Wenn die Kirche verlangt, dieses Weltbild mitzuglauben, legt sie dem Menschen ein unnötiges Opfer des Verstandes auf und verdeckt den eigentlichen Anstoß des Evangeliums. Die Entmythologisierung will den Mythos nicht streichen, sondern deuten: Was die Wundergeschichten und die Auferstehungsberichte sagen wollen, ist der Ruf Gottes in die Entscheidung, die Befreiung von der Angst und die Möglichkeit eines neuen, eigentlichen Lebens. Die historische Wissenschaft muss mit einem geschlossenen Zusammenhang von Ursache und Wirkung arbeiten; Wunder liegen außerhalb ihrer Reichweite. Glaube darf sich nicht von historischen Beweisen abhängig machen.`,
  biblical: {
    summary: `Das Neue Testament versteht die Wunder und die Auferstehung ausdrücklich **nicht als Mythen**, sondern als geschichtliche Ereignisse: „Wir haben nicht den klugen **Fabeln** (*mythois*) gefolgt …, sondern wir haben seine Herrlichkeit **selber gesehen**" (2 Petr 1,16). Paulus macht den Glauben an die leibliche Auferstehung zum Kern des Evangeliums und nennt Zeugen, die man befragen kann (1 Kor 15,3–8); wäre Christus nicht auferstanden, wäre der Glaube „vergeblich" (15,14.17). Lukas schreibt als sorgfältiger Historiker nach Augenzeugen (Lk 1,1–4). Johannes betont, was „wir gesehen haben mit unseren Augen … und unsere Hände betastet haben" (1 Joh 1,1). Die Zeitgenossen waren keineswegs leichtgläubig: Die Athener spotteten über die Auferstehung (Apg 17,32), und Josef wusste, wie Kinder entstehen (Mt 1,19).`,
    detail: `**2 Petr 1,16:** Das griechische Wort *mythos* wird hier ausdrücklich abgelehnt. Die frühen Christen kannten Mythen sehr gut – und grenzten ihre Botschaft bewusst davon ab.

**1 Kor 15,3–8:** Paulus überliefert eine Formel, die er selbst „empfangen" hat (wohl in den ersten Jahren nach der Kreuzigung): gestorben, begraben, auferweckt am dritten Tag, erschienen dem Kephas, den Zwölf, über 500 Brüdern, „von denen noch viele leben". Das ist die Einladung zur Überprüfung.

**1 Kor 15,14.17:** Paulus verbindet den Glauben unauflöslich mit dem Ereignis. Eine „Auferstehung ins Kerygma" ohne leeres Grab wäre für ihn kein Evangelium: „Ist Christus nicht auferstanden, so ist euer Glaube eitel, so seid ihr noch in euren Sünden."

**Antike Skepsis:** Die Behauptung, die Menschen der Antike hätten Wunder für selbstverständlich gehalten, ist falsch. Josef will Maria entlassen, weil er weiß, dass Jungfrauen keine Kinder bekommen (Mt 1,19); Thomas will Wundmale sehen (Joh 20,25); die Athener spotten (Apg 17,32). Wunder waren damals so unerwartet wie heute.`,
    sources: [
      { kind: 'bibel', work: '2. Petrus', ref: '1,16', quote: `Denn wir haben nicht den klugen Fabeln gefolgt, da wir euch kundgetan haben die Kraft und Zukunft unsers HERRN Jesu Christi; sondern wir haben seine Herrlichkeit selber gesehen.`, translation: 'Luther 1912', status: 'verbatim', original: `Οὐ γὰρ σεσοφισμένοις μύθοις ἐξακολουθήσαντες` },
      { kind: 'bibel', work: '1. Korinther', ref: '15,3–6', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift, und daß er gesehen worden ist von Kephas, darnach von den Zwölfen. Darnach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal, deren noch viele leben, etliche aber sind entschlafen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,14.17', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich. … Ist Christus aber nicht auferstanden, so ist euer Glaube eitel, so seid ihr noch in euren Sünden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '1,1', quote: `Das da von Anfang war, das wir gehört haben, das wir gesehen haben mit unsern Augen, das wir beschaut haben und unsre Hände betastet haben, vom Wort des Lebens.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,32', quote: `Da sie hörten die Auferstehung der Toten, da hatten's etliche ihren Spott.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt die Wunder Christi und seine leibliche Auferstehung als wirkliche Ereignisse. Zugleich liest sie die Schrift in der **alexandrinischen Tradition** wörtlich **und** geistlich: Die Brotvermehrung geschah wirklich und weist zugleich auf die Eucharistie; die Heilung des Blindgeborenen geschah wirklich und ist zugleich Bild der Erleuchtung in der Taufe. Die Kirche braucht keine Entmythologisierung, um die existentielle Bedeutung der Ereignisse zu entdecken – sie hat sie immer gesehen. Sie lehnt aber ab, die Bedeutung vom Ereignis zu lösen: Ohne das Ereignis bleibt nur eine fromme Idee.`,
    detail: `**Athanasius über die Auferstehung:** In *De Incarnatione* 27–32 argumentiert Athanasius, dass die Auferstehung Christi an ihren Wirkungen erkennbar ist: Christen verachten den Tod, Märtyrer gehen ihm freudig entgegen, Götzendienst und Magie weichen. Ein Toter wirkt nicht – also lebt Christus.

**Origenes und der geistliche Sinn:** Origenes, der die allegorische Auslegung am weitesten trieb, verteidigte gegen den Philosophen Kelsos ausdrücklich die Geschichtlichkeit der Wunder und der Auferstehung Jesu (Contra Celsum II,55–63). Er räumte ein, dass einige Erzählungen nicht wörtlich gemeint sein könnten (De principiis IV,3,1), hielt aber fest, dass weit mehr wörtlich wahr ist als nur geistlich. *(Origenes ist für die Kirche kein Lehrer, aber ein wichtiger Apologet.)*

**Kirche der Wunder:** Die koptische Kirche lebt in einer Tradition, die von den Wüstenvätern bis in die Gegenwart Wunder bezeugt. Für sie ist die Welt nicht ein „geschlossener Wirkungszusammenhang", sondern Schöpfung, in der der Schöpfer frei handeln kann.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '27–32', status: 'paraphrase', quote: `Wenn ein Toter nichts wirken kann, der Erlöser aber täglich so große Dinge wirkt – Menschen zur Frömmigkeit bewegt, sie zur Verachtung des Todes führt –, wer kann dann zweifeln, dass er lebt?` },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'II,55–63', year: 'um 248', status: 'paraphrase', note: 'Verteidigung der Geschichtlichkeit der Auferstehung gegen den heidnischen Philosophen Kelsos.' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'De principiis', ref: 'IV,3,1–4', status: 'paraphrase', note: 'Ehrlich: Origenes hielt einzelne Erzählzüge für nicht wörtlich gemeint, betonte aber, dass das meiste auch wörtlich wahr ist.' },
    ],
  },
  quickAnswer: `Bultmann sagte, man könne nicht elektrisches Licht benutzen und zugleich an Wunder glauben. Aber heute benutzen Hunderte Millionen Christen in Afrika, Asien und Lateinamerika Smartphones und berichten zugleich von Heilungen – und Ingenieure, Ärzte und Physiker glauben an die Auferstehung. Dass Wunder unmöglich sind, ist keine wissenschaftliche Entdeckung, sondern eine philosophische Vorentscheidung. Die Apostel sagten ausdrücklich: „Wir sind nicht klugen Mythen gefolgt, sondern haben seine Herrlichkeit gesehen" (2 Petr 1,16). Und Paulus: „Ist Christus nicht auferstanden, so ist euer Glaube vergeblich" (1 Kor 15,14).`,
  keyPoints: [
    `**Vorentscheidung, nicht Ergebnis:** Bultmann setzt einen „geschlossenen Wirkungszusammenhang" voraus; das ist Metaphysik (Naturalismus), keine Physik.`,
    `**Das Radio-Argument trägt nicht:** Technik sagt nichts darüber, ob Gott handeln kann; Millionen moderne Menschen glauben an Wunder (Keener).`,
    `**Die Antike war nicht leichtgläubig:** Josef, Thomas und die Athener zweifelten; Wunder waren auch damals unerwartet (C. S. Lewis).`,
    `**Das NT grenzt sich selbst vom Mythos ab** (2 Petr 1,16) und bindet den Glauben an das Ereignis (1 Kor 15,14–17).`,
    `**Die alexandrinische Tradition** liest wörtlich und geistlich – Bedeutung ohne Ereignis ist ihr fremd.`,
    `**Konsequenz:** Wer die Auferstehung entmythologisiert, behält eine Idee, aber keinen lebendigen Herrn.`,
  ],
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler und Laientheologe',
      text: `Lewis setzte sich in einem Vortrag vor Theologiestudenten in Cambridge (1959, später „Fern-seed and Elephants") mit der Bultmann-Schule auseinander. Als Literaturhistoriker, der sein Leben lang Mythen, Legenden und Romane gelesen hatte, urteilte er: Das Johannesevangelium ist entweder Bericht oder ein unbekannter Autor des 2. Jahrhunderts hätte plötzlich die Technik des modernen realistischen Romans vorweggenommen. Die Kritiker behaupteten, „zwischen den Zeilen" alter Texte zu lesen, und übersähen das Offensichtliche – sie sähen „Farnsamen", aber nicht den Elefanten am helllichten Tag. In „Wunder" (1947) zeigt er, dass die Ablehnung von Wundern auf einem Zirkelschluss beruht: Man hält sie für unmöglich, weil man vorher entschieden hat, dass es keine gibt.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Fern-seed and Elephants (ursprünglich: Modern Theology and Biblical Criticism, Vortrag in Westcott House, Cambridge)', year: '1959', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles (Wunder)', year: '1947', status: 'paraphrase' },
      ],
    },
    {
      person: 'keener',
      role: 'als Wunderforscher',
      text: `Keener widmet seinem zweibändigen Werk über Wunder ausdrücklich auch Bultmanns Behauptung. Er dokumentiert zahlreiche, teils medizinisch gut dokumentierte Heilungsberichte aus allen Kontinenten und verweist auf Umfragen, nach denen Hunderte Millionen Menschen weltweit angeben, göttliche Heilungen erlebt oder gesehen zu haben – viele von ihnen gebildete Menschen, die selbstverständlich Elektrizität und moderne Medizin nutzen. Bultmanns „moderner Mensch" sei in Wahrheit der westliche Akademiker seiner Zeit gewesen.`,
      sources: [{ kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts, 2 Bde.', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'nt-wright',
      role: 'als Historiker der Auferstehung',
      text: `Wright zeigt, dass die Antike sehr genau wusste, dass Tote tot bleiben – Heiden wie Juden. Die Behauptung der frühen Christen, Jesus sei leiblich auferstanden, war in ihrer Welt ebenso unerhört wie heute. Gerade deshalb verlangt die Entstehung des Osterglaubens eine historische Erklärung. Der Gedanke, die Aufklärung habe entdeckt, dass Tote nicht auferstehen, verkennt, dass dies schon Homer und Aischylos wussten.`,
      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' }],
    },
    {
      person: 'eta-linnemann',
      role: 'als ehemalige Schülerin Bultmanns',
      text: `Linnemann kannte die Bultmann-Schule von innen: Sie studierte bei ihm und lehrte jahrzehntelang historisch-kritisch. Nach ihrer Glaubenswende schrieb sie, dass die Methode keineswegs neutral sei, sondern von der weltanschaulichen Voraussetzung ausgehe, dass Gott nicht in die Geschichte eingreifen könne. Sie distanzierte sich öffentlich von ihren eigenen früheren Büchern. Ihr Zeugnis zeigt, dass die Entmythologisierung nicht aus den Texten folgt, sondern an sie herangetragen wird.`,
      sources: [{ kind: 'fachliteratur', author: 'Eta Linnemann', work: 'Wissenschaft oder Meinung? Anfragen und Alternativen', year: '1986', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Zeuge der lebendigen Wirkung des Auferstandenen',
      text: `Athanasius argumentiert nicht mit einem Weltbild, sondern mit Wirkungen: Ein Toter bewegt niemanden. Christus aber verwandelt täglich Menschen, macht Feiglinge zu Märtyrern und Sünder zu Heiligen. Wer die Auferstehung leugnet, soll erklären, woher diese Kraft kommt. Für Athanasius ist die Auferstehung kein Symbol, sondern der Sieg über den Tod im Leib des Herrn, der allen Menschen gilt.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '27–32', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'elektrisches-licht',
      objection: `„Man kann nicht elektrisches Licht und Radio benutzen, im Krankheitsfall moderne Medizin in Anspruch nehmen und gleichzeitig an die Geister- und Wunderwelt des Neuen Testaments glauben."`,
      objectionBy: 'Rudolf Bultmann',
      answer: `Warum nicht? Elektrisches Licht beweist, dass Naturgesetze verlässlich sind – das glauben Christen auch, denn ein verlässlicher Schöpfer schafft eine geordnete Welt. Ein Wunder hebt diese Ordnung nicht auf, sondern setzt sie voraus: Nur wer weiß, dass Wasser nicht zu Wein wird, staunt, wenn es geschieht. Heute benutzen Hunderte Millionen Christen weltweit Smartphones und glauben an Wunder. Bultmanns Satz ist eine soziologische Behauptung über seine Kollegen, kein Argument.`,
      sources: [
        { kind: 'gegner', author: 'Rudolf Bultmann', work: 'Neues Testament und Mythologie (1941), in: Kerygma und Mythos I', ref: 'S. 18', quote: `Man kann nicht elektrisches Licht und Radioapparat benutzen, in Krankheitsfällen moderne medizinische und klinische Mittel in Anspruch nehmen und gleichzeitig an die Geister- und Wunderwelt des Neuen Testaments glauben.`, status: 'verbatim', note: 'Fundstelle per Websuche bestätigt: WiBiLex (die-bibel.de) zitiert die Stelle als „Bultmann 1951, 18" (Kerygma und Mythos I, 2. Aufl.); Erstveröffentlichung 1941. In Zitaten schwankt die Schreibung „benutzen/benützen"; manche verkürzen zu „Radio".' },
      ],
      questionsBack: [`Ist es ein Ergebnis der Physik, dass Gott nicht handeln kann – oder eine philosophische Annahme?`, `Was folgt für dich aus der Tatsache, dass viele Physiker und Ärzte an Wunder glauben?`],
      followUps: [
        {
          id: 'geschlossener-wirkungszusammenhang',
          objection: `„Die historische Methode muss mit einem geschlossenen Wirkungszusammenhang arbeiten. Sonst ist keine Wissenschaft möglich – jedes Ereignis könnte ein Wunder sein."`,
          objectionBy: 'Rudolf Bultmann',
          answer: `Die Wissenschaft setzt voraus, dass die Welt **normalerweise** regelhaft abläuft – das bestreitet niemand. Aber dass sie **immer und ausnahmslos** so abläuft und Gott nie handelt, ist keine Methodenregel, sondern eine Weltanschauung. Wer sie voraussetzt, kann die Auferstehung nicht „wissenschaftlich widerlegen", weil er sie von vornherein ausgeschlossen hat. Das ist ein Zirkelschluss.`,
          sources: [
            { kind: 'gegner', author: 'Rudolf Bultmann', work: 'Ist voraussetzungslose Exegese möglich?', year: '1957', status: 'paraphrase', quote: `Die historische Methode schließt die Voraussetzung ein, dass die Geschichte eine Einheit im Sinne eines geschlossenen Wirkungszusammenhangs ist.` },
          ],
          followUps: [
            {
              id: 'hume-wunder-unwahrscheinlich',
              objection: `„Wunder sind per Definition die unwahrscheinlichste Erklärung. Jede natürliche Erklärung – Halluzination, Legende, Irrtum – ist wahrscheinlicher (Hume)."`,
              objectionBy: 'Bart Ehrman (in Anlehnung an David Hume)',
              answer: `Die Wahrscheinlichkeit eines Wunders hängt davon ab, ob es einen Gott gibt, der Gründe zum Handeln hat. Wenn es Gott gibt und er sich offenbaren will, ist eine Auferstehung nicht absurd, sondern genau das, was man erwarten könnte. Richard Swinburne hat gezeigt, dass man das mit Wahrscheinlichkeitsrechnung präzise fassen kann. Und die „natürlichen" Erklärungen der Auferstehung scheitern an den historischen Fakten (leeres Grab, Erscheinungen vor Gruppen, Bekehrung von Skeptikern wie Paulus und Jakobus).`,
              sources: [
                { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Resurrection of God Incarnate', year: '2003', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'antikes-weltbild',
      objection: `„Das NT setzt ein dreistöckiges Weltbild voraus: Himmel oben, Hölle unten. Die Himmelfahrt ist ein Aufstieg nach oben – das kann ein moderner Mensch nicht wörtlich nehmen."`,
      objectionBy: 'Rudolf Bultmann / John Shelby Spong',
      answer: `Auch wir sprechen vom „Sonnenaufgang", ohne an ein geozentrisches Weltbild zu glauben. Dass die Schrift in Bildern ihrer Zeit spricht, wussten schon die alexandrinischen Väter; Origenes spottete über die Vorstellung, Gott wohne räumlich „oben". Aber daraus folgt nicht, dass die Ereignisse nicht geschehen sind. Die Himmelfahrt bezeichnet den Übergang Christi in die Herrlichkeit Gottes – in Bildern beschrieben, aber nicht erfunden.`,
      followUps: [
        {
          id: 'kerygma-genuegt',
          objection: `„Für den Glauben ist ohnehin nicht wichtig, was historisch geschah. Jesus ist ‚ins Kerygma auferstanden' – in die Verkündigung, die uns heute zur Entscheidung ruft."`,
          objectionBy: 'Rudolf Bultmann (sinngemäß)',
          answer: `Paulus sieht das genau umgekehrt: Wenn Christus nicht auferstanden ist, ist die Verkündigung (das Kerygma) selbst „vergeblich" und wir sind falsche Zeugen Gottes (1 Kor 15,14–15). Eine Verkündigung, deren Inhalt nicht geschehen ist, ruft nicht zur Entscheidung, sondern zur Illusion. Die Kirche verkündet nicht eine Idee, sondern einen Lebendigen, dem man in der Eucharistie begegnet.`,
          sources: [
            { kind: 'bibel', work: '1. Korinther', ref: '15,15', quote: `Wir würden aber auch erfunden als falsche Zeugen Gottes, daß wir wider Gott gezeugt hätten, er hätte Christum auferweckt, den er nicht auferweckt hätte.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'bultmann-war-glaeubig',
              objection: `„Bultmann war ein tiefgläubiger Christ und Mitglied der Bekennenden Kirche. Du kannst ihm doch den Glauben nicht absprechen."`,
              objectionBy: 'Liberaler Pfarrer',
              answer: `Das tue ich nicht. Bultmann stand im Kirchenkampf auf der richtigen Seite, und seine Sorge um die Verständlichkeit des Evangeliums ehrt ihn. Aber wir prüfen nicht seine Person, sondern seine These. Die Frage ist, ob das Evangelium ohne die leibliche Auferstehung noch das Evangelium der Apostel ist – und die Apostel sagen eindeutig: nein.`,
            },
          ],
        },
      ],
    },
    {
      id: 'mythos-ist-tiefer',
      objection: `„Du verstehst ‚Mythos' falsch. Ein Mythos ist keine Lüge, sondern eine tiefere Wahrheit in Bildern. Entmythologisierung heißt, diese Wahrheit freizulegen."`,
      objectionBy: 'Liberaler Theologe',
      answer: `Einverstanden, dass Bilder tiefe Wahrheit tragen können – die alexandrinische Tradition liebt den geistlichen Sinn. Aber das Christentum behauptet etwas anderes als einen Mythos: dass die tiefste Wahrheit **in der Geschichte geschehen** ist, „unter Pontius Pilatus". C. S. Lewis nannte das Evangelium den Mythos, der Tatsache wurde. Wer das Ereignis entfernt, macht aus dem Evangelium wieder einen Mythos unter vielen.`,
      followUps: [
        {
          id: 'wunder-als-zeichen',
          objection: `„Aber auch Johannes nennt die Wunder ‚Zeichen'. Es geht also um die Bedeutung, nicht um das Mirakel."`,
          objectionBy: 'Liberaler Exeget',
          answer: `Ein Zeichen muss wirklich geschehen, um etwas zu zeigen. Johannes schreibt: „Diese aber sind geschrieben, dass ihr glaubt, Jesus sei der Christus" (Joh 20,31) – und betont, dass er bezeugt, was er gesehen hat (Joh 19,35; 21,24). Ein Zeichen, das nie geschah, zeigt nichts. Die Kirche liest die Wunder als Ereignis **und** Zeichen – beides zusammen.`,
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '20,30–31', quote: `Auch viele andere Zeichen tat Jesus vor seinen Jüngern, die nicht geschrieben sind in diesem Buch. Diese aber sind geschrieben, daß ihr glaubet, Jesus sei Christus, der Sohn Gottes, und daß ihr durch den Glauben das Leben habt in seinem Namen.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist die Unmöglichkeit von Wundern ein Ergebnis der Wissenschaft oder eine Voraussetzung, mit der du arbeitest?`,
    `Wenn es einen Schöpfergott gibt – warum sollte er nicht in seiner Schöpfung handeln können?`,
    `Wie verstehst du 1 Kor 15,14–17? Ist der Glaube nach Paulus ohne leibliche Auferstehung noch möglich?`,
    `Waren Josef (Mt 1,19), Thomas und die Athener leichtgläubige Menschen?`,
  ],
  avoid: [
    `Nicht behaupten, Wissenschaft sei der Feind des Glaubens. Viele Begründer der modernen Naturwissenschaft waren gläubige Christen.`,
    `Bultmann nicht als „Ungläubigen" diffamieren. Kritisiere die These, nicht die Person.`,
    `Nicht so tun, als enthalte die Bibel keinerlei Bildsprache. Die Väter wussten, dass Gott nicht räumlich „oben" wohnt.`,
  ],
  concessions: [
    `Die Schrift spricht in den Bildern ihrer Zeit; nicht jede Formulierung ist eine naturwissenschaftliche Aussage.`,
    `Bultmann wollte das Evangelium verständlich machen und den existentiellen Ernst der Entscheidung betonen – ein berechtigtes Anliegen.`,
    `Die historische Forschung kann ein Wunder nicht „beweisen" wie ein Laborexperiment; sie kann aber prüfen, welche Erklärung der Quellen am besten ist.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Wunder (Miracles)', year: '1947', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' },
    { kind: 'gegner', author: 'Rudolf Bultmann', work: 'Neues Testament und Mythologie', year: '1941', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Bultmann', 'Entmythologisierung', 'Wunder', 'Auferstehung', 'Naturalismus', 'liberale Theologie'],
  related: ['auferstehung/wunder-historisch-unmoeglich', 'auferstehung/legende-entwickelte-sich', 'liberale-theologie/bibel-nur-menschliche-erfahrung', 'naturalismus'],
};

export default claim;
