import type { Claim, Source } from '../../../schema.ts';

const meyerSignature: Source = {
  kind: 'fachliteratur',
  author: 'Stephen C. Meyer',
  work: 'Signature in the Cell: DNA and the Evidence for Intelligent Design',
  year: '2009',
  quote: `Meyer wendet die Methode der historischen Wissenschaften (Lyell, Darwin: Erklärung durch „gegenwärtig wirkende Ursachen") auf den Ursprung biologischer Information an und schließt auf Intelligenz als beste Erklärung, weil sie die einzige bekannte Ursache großer Mengen neuer funktionaler Information ist.`,
  status: 'paraphrase',
};

const lewontin1997: Source = {
  kind: 'gegner',
  author: 'Richard C. Lewontin',
  work: '„Billions and Billions of Demons" (Rezension von Carl Sagan, The Demon-Haunted World), The New York Review of Books',
  year: '9. Januar 1997',
  quote: `Der Materialismus sei absolut, denn man könne keinen göttlichen Fuß in der Tür zulassen.`,
  original: 'Moreover, that materialism is absolute, for we cannot allow a Divine Foot in the door.',
  status: 'verbatim',
  note: 'Lewontin beschreibt die materialistische Vorentscheidung als der Wissenschaft vorausliegend. Im Zusammenhang zitieren – er meint es als Bekenntnis, nicht als Kritik.',
};

const tourTimeOut: Source = {
  kind: 'wissenschaft',
  author: 'James M. Tour',
  work: '„Time Out", Inference: International Review of Science 4/4',
  year: '2019',
  quote: `Tour fordert die OOL-Gemeinschaft auf, eine Auszeit zu nehmen und zu bilanzieren, was erreicht wurde und was überhaupt erreichbar ist – und offen zuzugeben, was nicht erklärt ist: den Massentransfer der Ausgangsstoffe zu den Lebensmolekülen, den Ursprung des Codes, die kombinatorische Komplexität lebender Systeme.`,
  status: 'paraphrase',
  url: 'https://inference-review.com',
};

const tourNotId: Source = {
  kind: 'sonstiges',
  author: 'James M. Tour',
  work: 'Frühere persönliche Stellungnahme auf seiner Website (Abschnitt zu Evolution/Schöpfung)',
  year: 'vor ca. 2016 (später überarbeitet)',
  quote: `Tour erklärt, er werde oft als ID-Vertreter bezeichnet, sei es aber nicht; er wisse nicht, wie man mit Wissenschaft Design beweisen könne, auch wenn andere das vielleicht könnten, und finde manche Argumente der ID-Bewegung bedenkenswert. Sein Glaube gründe auf Christus, nicht auf wissenschaftlichen Lücken.`,
  original: 'I have been labeled as an Intelligent Design (ID) proponent. I am not. I do not know how to use science to prove intelligent design although some others might.',
  status: 'paraphrase',
  note: 'Der englische Kernsatz ist in der Fassung belegt, die S. Joshua Swamidass (Peaceful Science) aus der früheren Website zitiert; die Seite wurde später überarbeitet und der Abschnitt entfernt. Darum als frühere Stellungnahme und sinngemäß zitieren. Tour unterzeichnete zugleich die Erklärung „A Scientific Dissent from Darwinism".',
};

const orgel2008: Source = {
  kind: 'gegner',
  author: 'Leslie E. Orgel',
  work: '„The Implausibility of Metabolic Cycles on the Prebiotic Earth", PLoS Biology 6 (1), e18',
  year: '2008 (posthum)',
  quote: `Orgel kritisiert „Stoffwechsel-zuerst"-Szenarien scharf und warnt, Lösungen, die auf hypothetischer Chemie nach dem Motto „wenn Schweine fliegen könnten" beruhen, würden nicht weiterhelfen – egal ob für genetische oder metabolische Szenarien.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'ool-nur-wissensluecke',
  title: `„Die Origin-of-Life-Forschung hat nur eine Wissenslücke – wer hier Gott ins Spiel bringt, begeht den Gott-der-Lücken-Fehlschluss."`,
  proponents: [
    { name: 'Dave Farina', role: 'Wissenschafts-YouTuber („Professor Dave Explains")', work: 'Debatte mit James Tour, Rice University (Mai 2023)' },
    { name: 'Lee Cronin', role: 'Chemiker, University of Glasgow', work: 'Debatten mit Tour (Unbelievable? 2020; Harvard, November 2023)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'Der Gotteswahn (2006), Kap. 4' },
    { name: 'Eugenie C. Scott', role: 'Anthropologin, ehem. Direktorin des National Center for Science Education', work: 'Verteidigung des methodologischen Naturalismus' },
  ],
  steelman: `Die Geschichte der Wissenschaft ist eine Geschichte geschlossener Lücken: Blitze, Seuchen, Planetenbahnen, die Entstehung der Arten – überall wurde einst Gott als Erklärung bemüht, und überall fand man natürliche Ursachen. Wöhler synthetisierte 1828 Harnstoff und widerlegte den Vitalismus. Die Origin-of-Life-Forschung ist jung, kaum 70 Jahre alt, und macht echte Fortschritte. Ehrlich ist: „Wir wissen es noch nicht." Unehrlich ist, die Lücke mit „Gott hat es getan" zu füllen – das erklärt nichts, sagt nichts voraus und beendet die Forschung. Selbst James Tour, auf den sich Christen gern berufen, sagt nur „Wir haben keine Ahnung" und betont, dass er Design nicht wissenschaftlich beweisen kann. Wer aus Tours Kritik einen Gottesbeweis macht, missbraucht ihn.`,
  biblical: {
    summary: `Der Gott der Bibel ist kein Lückenbüßer, sondern Schöpfer und Erhalter des Ganzen – auch der Naturgesetze: „Es besteht alles in ihm" (Kol 1,17); Gott spricht von seinem „Bund mit Tag und Nacht" und der „Ordnung des Himmels und der Erde" (Jer 33,25). Die Schrift begründet Gotteserkenntnis nicht mit Unwissen, sondern mit dem, was man an den Werken *erkennt* (Röm 1,20; Ps 19,2). Ein Christ argumentiert deshalb nicht „Wir wissen es nicht, also Gott", sondern „Wir wissen, was Ordnung und Information hervorbringt".`,
    detail: `Hiob 38 lehrt zugleich Demut: „Wo warst du, da ich die Erde gründete?" Christen müssen nicht jede Frage beantworten und dürfen „Wir wissen es nicht" sagen. Paulus' Argument in Röm 1,20 ist ein Schluss aus dem Erkannten („wird ersehen"), kein Schluss aus Nichtwissen.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '1,20', quote: `Denn Gottes unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt; also daß sie keine Entschuldigung haben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,17', quote: `Und er ist vor allem, und es besteht alles in ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '33,25', quote: `So spricht der HERR: Halte ich meinen Bund nicht mit Tag und Nacht noch die Ordnung des Himmels und der Erde, …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hiob', ref: '38,4', quote: `Wo warst du, da ich die Erde gründete? Sage an, bist du so klug!`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter suchten Gott nicht in den Lücken, sondern in der Ordnung des Ganzen. Athanasius schließt aus der Harmonie des Kosmos auf den Logos. Augustinus lehrt, dass ein Wunder nicht gegen die Natur geschieht, sondern gegen die uns *bekannte* Natur – die Natur selbst ist Gottes Werk. Diese Sicht schützt vor beiden Fehlern: vor dem Lückenbüßer-Gott und vor dem Naturalismus, der die Natur zum Selbstläufer erklärt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '35–38', quote: `Die Ordnung und Harmonie der Schöpfung zeigen, dass ein einziger ordnender Logos sie lenkt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Civitate Dei', ref: 'XXI,8', quote: `Ein Wunderzeichen geschieht nicht gegen die Natur, sondern gegen die uns bekannte Natur.`, original: 'Portentum ergo fit non contra naturam, sed contra quam est nota natura.', translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `In der Wissenschaft gilt als Arbeitsregel der methodologische Naturalismus: Gesucht werden natürliche Ursachen. Viele OOL-Forscher sind überzeugt, dass eine naturalistische Lösung gefunden wird. Zugleich benennen führende Vertreter selbst tiefe Probleme: Koonin hielt ein Multiversum für nötig, Orgel kritisierte konkurrierende Szenarien als „wenn Schweine fliegen könnten"-Chemie, Benner spricht von Paradoxien, Shapiro hielt die RNA-Welt für unplausibel. Es gibt keinen Konsens über Ort, Reihenfolge oder Mechanismus des Lebensursprungs. Ob die Lücke eine vorläufige Wissenslücke oder ein grundsätzliches Problem ist, ist genau der Streitpunkt.`,
    sources: [orgel2008,
      { kind: 'gegner', author: 'Eugene V. Koonin', work: 'Biology Direct 2:15', year: '2007', status: 'paraphrase', quote: `Rückgriff auf ein unendliches Multiversum, um die zufällige Entstehung eines Replikations-Translations-Systems plausibel zu machen.` },
      { kind: 'wissenschaft', author: 'Steven A. Benner', work: '„Paradoxes in the Origin of Life", Origins of Life and Evolution of Biospheres 44', year: '2014', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ich sage nicht: „Wir wissen es nicht, also Gott." Ich sage zwei Dinge. Erstens ehrlich, wie James Tour: Niemand weiß, wie das Leben entstand – das ist der Stand der Forschung. Zweitens, und das ist ein Schluss aus Wissen, nicht aus Unwissen: Die Zelle ist voller Information, und die einzige Ursache, die wir kennen, die Information hervorbringt, ist Intelligenz. Das ist dieselbe Logik, mit der Archäologen ein Werkzeug von einem Stein unterscheiden.`,
  keyPoints: [
    `**Zwei Schritte trennen:** (1) Diagnose – der Forschungsstand (Tour: „Wir haben keine Ahnung"); (2) Schluss – Intelligenz als beste Erklärung (Meyer). Wer beides vermischt, macht sich angreifbar.`,
    `**Wissen statt Unwissen:** Der Designschluss beruht auf positivem Erfahrungswissen: Information entsteht, soweit wir es beobachten, aus Intelligenz (vera causa).`,
    `**Lücken, die wachsen:** Seit Darwins „einfachem Protoplasma" ist die bekannte Komplexität der Zelle nicht kleiner, sondern dramatisch größer geworden; Pasteur schloss eine Lücke gegen die materialistische Erwartung.`,
    `**Tour fair darstellen:** Tour beweist Gott nicht mit Chemie und sagt das selbst. Nutze ihn für die Diagnose, nicht als Kronzeugen eines Gottesbeweises.`,
    `**Methodologischer Naturalismus ist eine Regel, kein Befund:** Wer Intelligenz von vornherein ausschließt (Lewontin: „kein göttlicher Fuß in der Tür"), kann nicht mehr der Evidenz folgen.`,
    `**Glaube hängt nicht an der Lücke:** Fände man einen natürlichen Weg, bliebe Gott der Urheber der Naturordnung; der Glaube ruht auf Christus (1 Kor 15).`,
  ],
  argument: {
    name: 'Schluss auf die beste Erklärung für den Ursprung biologischer Information (nach Meyer)',
    summary: 'Ein abduktives Argument aus bekannten Ursachen – nicht aus Unwissen.',
    premises: [
      {
        text: `P1: Der Ursprung des Lebens erforderte die Entstehung großer Mengen funktionaler, sequenzspezifischer Information (DNA/RNA-Sequenzen, genetischer Code, Proteinsequenzen).`,
        support: `Unbestritten in der Molekularbiologie: Funktion hängt an der Sequenz; selbst Minimalzellen brauchen Hunderte Gene (JCVI-syn3.0: 473).`,
      },
      {
        text: `P2: Ungelenkte Prozesse – Zufall, chemische Notwendigkeit/Selbstorganisation, präbiotische Selektion – haben sich in Experiment und Theorie als unzureichend erwiesen, solche Information zu erzeugen.`,
        support: `Zufall scheitert an den Wahrscheinlichkeitsressourcen; chemische Affinitäten bestimmen die Sequenz nicht (Polanyi); Selektion setzt Replikation voraus. Laborerfolge beruhen auf Eingriffen der Forscher.`,
        sources: [orgel2008],
      },
      {
        text: `P3: Intelligente Akteure sind die einzige aus gleichförmiger Erfahrung bekannte Ursache, die große Mengen neuer funktionaler Information hervorbringt.`,
        support: `Software, Sprache, technische Baupläne – in jedem Fall, dessen Entstehung wir kennen, steht ein Geist am Anfang. Darwin und Lyell forderten „gegenwärtig wirkende Ursachen" für historische Erklärungen.`,
        sources: [meyerSignature],
      },
    ],
    inferences: [
      `Der Schluss ist vorläufig und revidierbar: Würde ein ungelenkter Mechanismus gezeigt, fiele P2.`,
      `Er bestimmt den Typ der Ursache (intelligent), nicht ihre Identität; die Frage, wer der Urheber ist, wird mit weiteren Argumenten (Kosmologie, Offenbarung) beantwortet.`,
    ],
    conclusion: `Intelligente Verursachung ist derzeit die beste verfügbare Erklärung für den Ursprung der Information, die Leben voraussetzt.`,
  },
  voices: [
    {
      person: 'james-tour',
      role: 'als synthetischer Chemiker (Diagnose)',
      text: `Tour ist die wichtigste Stimme für den **ersten Schritt**: die ehrliche Bestandsaufnahme. In Vorträgen, Debatten und Aufsätzen geht er die Originalliteratur durch und zeigt, dass für keine der großen Stufen – Bausteine in reiner Form, Händigkeit, Polymerisation, Sequenzinformation, Zusammenbau – ein ungelenkter Weg gezeigt ist. In „Time Out" (2019) bat er die Kollegen um eine Pause zur Bilanz.

Wichtig für die Strategie: Tour zieht daraus wissenschaftlich *nicht* den Schluss „also Gott". Er betont, dass sein Glaube an Christus nicht von Lücken abhängt, und lehnt das Etikett „ID-Vertreter" für sich ab. Gerade das macht seine Diagnose glaubwürdig: Er ist kein Apologet, der ein Ergebnis braucht, sondern ein Chemiker, der Übertreibungen korrigiert. Für dich heißt das: Zitiere Tour für den Stand der Forschung – und führe den Schluss auf Design selbst und getrennt davon.`,
      sources: [tourTimeOut, tourNotId],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph (Schluss)',
      text: `Meyer liefert den **zweiten Schritt**: Er argumentiert nicht aus dem, was wir nicht wissen, sondern aus dem, was wir über Ursachen wissen. Historische Wissenschaften erklären vergangene Ereignisse durch Ursachen, deren Wirksamkeit wir heute beobachten (Lyells und Darwins Prinzip). Für funktionale Information kennen wir genau eine solche Ursache: Intelligenz. Deshalb sei Design nicht ein Lückenfüller, sondern die beste Erklärung im Wettbewerb der Hypothesen – und revidierbar, falls ein ungelenkter Mechanismus nachgewiesen wird.`,
      sources: [meyerSignature],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Wissenschaftsphilosoph',
      text: `Lennox unterscheidet zwei Arten von Lücken: Lücken der Unwissenheit, die die Wissenschaft schließt, und Lücken, die die Wissenschaft selbst *öffnet*, indem sie zeigt, dass ein bestimmter Mechanismus etwas grundsätzlich nicht leisten kann. Zudem betont er, dass Gott nicht der Gott der Lücken sei, sondern „der Gott des ganzen Geschehens": Er ist Urheber der Naturgesetze, nicht ihr Konkurrent. Sein Bild: Wer den Verbrennungsmotor versteht, hat Henry Ford nicht widerlegt – Mechanismus und Urheber sind verschiedene Erklärungsebenen.`,
      sources: [{ kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', year: '2009', status: 'paraphrase' }],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker (christliche Gegenstimme mit Warnung)',
      text: `Collins vertritt eine andere christliche Position (theistische Evolution) und warnt in *The Language of God* ausdrücklich davor, den Glauben auf ungelöste Fragen wie den Ursprung des Lebens zu bauen: Schließe sich die Lücke, stehe der Glaube scheinbar beschämt da. Diese Warnung ist berechtigt und mit der hier vertretenen Strategie vereinbar: Der Glaube ruht nicht auf der Lücke, und der Designschluss ist ein revidierbares Argument – kein Glaubensfundament.`,
      sources: [{ kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God: A Scientist Presents Evidence for Belief', ref: 'Kap. 4', year: '2006', status: 'paraphrase' }],
    },
    {
      person: 'pasteur',
      role: 'als Mikrobiologe',
      text: `Pasteur ist ein historisches Gegenbeispiel zur These, die Wissenschaft schließe Lücken stets in Richtung Materialismus. Die Urzeugung war im 19. Jahrhundert die materialistische Annahme, die eine Lücke füllte; Pasteurs Experimente zeigten, dass Leben nur aus Leben kommt. Die Lücke wurde größer, nicht kleiner – und ist es bis heute.`,
      sources: [{ kind: 'wissenschaft', author: 'Louis Pasteur', work: 'Sorbonne-Vortrag', ref: '7. April 1864', status: 'paraphrase', quote: `Die Lehre von der Urzeugung werde sich von diesem Experiment nie erholen.` }],
    },
    {
      person: 'augustinus',
      role: 'als Philosoph',
      text: `Augustinus' Satz, ein Wunder geschehe nicht gegen die Natur, sondern gegen die uns bekannte Natur, bewahrt vor einem Missverständnis: Gottes Wirken ist nicht auf das Unerklärte beschränkt. Die ganze Natur mit ihren Gesetzen ist sein Werk. Wer Gott nur in den Lücken sucht, macht ihn klein; wer die Natur für selbstgenügsam hält, übersieht ihren Urheber.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Civitate Dei', ref: 'XXI,8', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'klassischer-lueckenschluss',
      objection: `Du sagst: Wir wissen nicht, wie Leben entstand, also war es Gott. Das ist der klassische Gott-der-Lücken-Fehlschluss.`,
      objectionBy: 'Dave Farina',
      answer: `Nein, ich mache zwei getrennte Schritte. Erstens: Wir wissen es nicht – das ist der ehrliche Forschungsstand, den auch Tour feststellt. Zweitens, unabhängig davon: Wir wissen, welche Ursache Information hervorbringt – Intelligenz. Das ist ein Schluss aus Wissen, nicht aus Unwissen.`,
      detail: `Das abduktive Argument (siehe oben) hat die Form, die jede historische Wissenschaft nutzt: Man vergleicht konkurrierende Erklärungen nach ihrer kausalen Angemessenheit. Ein Lückenschluss hätte die Form „X ist unerklärt, also Gott". Der Designschluss hat die Form „X hat die Eigenschaft E; E entsteht nach aller Erfahrung durch Intelligenz; die Alternativen sind unzureichend; also ist Intelligenz die beste Erklärung".`,
      questionsBack: [
        `Kennst du eine Ursache außer Intelligenz, die beobachtbar große Mengen neuer funktionaler Information hervorbringt?`,
        `Ist der Schluss eines Archäologen auf einen Werkzeugmacher auch ein „Werkzeugmacher-der-Lücken"-Fehlschluss?`,
      ],
      followUps: [
        {
          id: 'nur-menschliche-intelligenz',
          objection: `Wir kennen Intelligenz nur bei Menschen mit Gehirnen. Du extrapolierst unzulässig auf einen körperlosen Geist.`,
          objectionBy: 'Sean Carroll',
          targetsPremise: 3,
          answer: `Der Schluss auf die beste Erklärung bestimmt zunächst den *Typ* der Ursache – intelligent –, nicht ihre Identität. SETI würde aus einem Signal auf Intelligenz schließen, ohne zu wissen, ob die Absender Gehirne haben. Wer der Urheber ist, ist eine weitere Frage, die ich mit anderen Argumenten beantworte.`,
          followUps: [
            {
              id: 'id-wissenschaftlich-leer',
              objection: `Dann ist Intelligent Design wissenschaftlich leer: Du sagst nicht, wer, wann und wie.`,
              objectionBy: 'Nick Matzke',
              answer: `Ein Archäologe erkennt eine Pfeilspitze als Werkzeug, ohne Namen, Datum oder Technik des Herstellers zu kennen. Die Erkennung von Design geht der Kenntnis des Mechanismus voraus. Das macht den Schluss nicht leer, sondern bescheiden.`,
              followUps: [
                {
                  id: 'keine-unabhaengige-evidenz',
                  objection: `Archäologen kennen menschliche Werkzeugmacher unabhängig. Für einen Designer des Lebens fehlt jede unabhängige Evidenz.`,
                  objectionBy: 'Elliott Sober',
                  targetsPremise: 3,
                  answer: `Ein ernstzunehmender Einwand. Zwei Antworten: SETI würde auf Intelligenz schließen, ohne Außerirdische unabhängig zu kennen – der Schluss stützt sich auf die Art des Musters. Und es gibt unabhängige Gründe für einen transzendenten Geist: den Anfang des Universums, seine Feinabstimmung, die historische Evidenz für Christus. Es geht um ein Gesamtbild, nicht um ein isoliertes Argument.`,
                  questionsBack: [`Würdest du ein unzweideutiges Funksignal aus dem All als Hinweis auf Intelligenz deuten, obwohl du die Absender nicht kennst?`],
                },
              ],
            },
          ],
        },
        {
          id: 'luecken-schliessen-sich',
          objection: `Die Wissenschaft hat schon so viele Lücken geschlossen: Blitze, Krankheiten, Planetenbahnen. Auch diese wird sie schließen.`,
          objectionBy: 'Bill Nye',
          targetsPremise: 2,
          answer: `Vergangene Erfolge sind ein Grund für Optimismus, aber kein Beleg. Und manche Lücken sind mit dem Wissen gewachsen: Zu Darwins Zeit hielt man die Zelle für ein einfaches Klümpchen Protoplasma; heute kennen wir Codes, molekulare Maschinen und Fehlerkorrektur. Pasteur hat eine Lücke geschlossen – gegen die materialistische Erwartung der Urzeugung.`,
          followUps: [
            {
              id: 'woehler-vitalismus',
              objection: `Wöhler hat 1828 den Vitalismus widerlegt. Leben ist nur Chemie, ohne Lebenskraft.`,
              objectionBy: 'Dave Farina',
              answer: `Einverstanden – ich bin kein Vitalist. Leben gehorcht der Chemie. Aber ein Computer gehorcht auch der Physik, und trotzdem stammt seine Software von einem Programmierer. Die Frage ist nicht, ob es eine Lebenskraft gibt, sondern woher die Information und Organisation stammen.`,
              followUps: [
                {
                  id: 'information-metapher',
                  objection: `„Information" ist nur eine Metapher. In der Zelle gibt es nur Chemie.`,
                  objectionBy: 'Dave Farina',
                  answer: `Molekularbiologen sprechen seit Crick ganz wörtlich von Code, Transkription, Translation und Fehlerkorrektur; Jack Szostak hat „funktionale Information" sogar quantitativ definiert. Das ausführliche Argument findest du im Claim „DNA ist nur Chemie".`,
                },
              ],
            },
          ],
        },
        {
          id: 'tour-missbraucht',
          objection: `Selbst Tour sagt, er könne Design nicht wissenschaftlich beweisen. Du missbrauchst ihn.`,
          objectionBy: 'Dave Farina',
          answer: `Du hast recht, was Tour betrifft, und ich respektiere seine Position. Deshalb nutze ich Tour nur für die Diagnose – den Forschungsstand – und führe den Schluss auf Design selbst, gestützt auf Meyer und Dembski. Dass Tour kein Ergebnis „braucht", macht seine Diagnose sogar glaubwürdiger.`,
          sources: [tourNotId],
          followUps: [
            {
              id: 'nur-zweifel-saeen',
              objection: `Also säen Christen hier nur Zweifel, statt etwas Eigenes beizutragen.`,
              answer: `Übertreibungen zu korrigieren ist wissenschaftliche Tugend, keine Zweifelsaat. Und ich habe einen positiven Vorschlag: Intelligenz als bekannte Ursache von Information. Man kann ihn prüfen, kritisieren und widerlegen – indem man einen ungelenkten Mechanismus zeigt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'methodologischer-naturalismus',
      objection: `Wissenschaft darf nur natürliche Ursachen zulassen. Das ist methodologischer Naturalismus – sonst ist es keine Wissenschaft.`,
      objectionBy: 'Eugenie Scott',
      answer: `Als Arbeitsregel für wiederholbare Vorgänge ist das sinnvoll. Bei einmaligen historischen Ereignissen aber gilt: Wenn die Evidenz auf eine intelligente Ursache weist, darf man sie nicht per Definition ausschließen – sonst folgt man nicht mehr der Evidenz, sondern einer Vorentscheidung. Der Genetiker Richard Lewontin hat diese Vorentscheidung offen benannt: Man könne „keinen göttlichen Fuß in der Tür" zulassen.`,
      sources: [lewontin1997],
      followUps: [
        {
          id: 'lewontin-kontext',
          objection: `Das Lewontin-Zitat wird ständig aus dem Zusammenhang gerissen.`,
          answer: `Im Zusammenhang sagt Lewontin, die Bindung an den Materialismus gehe der wissenschaftlichen Methode voraus, nicht umgekehrt. Genau das ist mein Punkt: Es ist eine philosophische Vorentscheidung, kein Ergebnis der Forschung. Ich zitiere ihn als ehrlichen Zeugen dafür, nicht als Gegner.`,
          sources: [lewontin1997],
          followUps: [
            {
              id: 'jede-luecke-gott',
              objection: `Ohne methodologischen Naturalismus kann man jede Lücke mit Gott füllen. Die Wissenschaft wäre am Ende.`,
              answer: `Die Begründer der modernen Naturwissenschaft – Boyle, Newton, Maxwell, Pasteur – forschten gerade, *weil* sie an einen gesetzgebenden Schöpfer glaubten. Ein Designschluss ist nicht für jede offene Frage zulässig, sondern nur, wenn positive Kriterien erfüllt sind (spezifizierte Komplexität, Information). Und Christen forschen nicht weniger: Tour betreibt ein Labor mit Hunderten Publikationen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'natuerlicher-weg-gefunden',
      objection: `Und wenn morgen ein natürlicher Weg gefunden wird – stirbt dann dein Gott?`,
      objectionBy: 'Lee Cronin',
      answer: `Nein. Mein Glaube hängt nicht am Ursprung des Lebens. Fände man einen natürlichen Weg, stünde die Frage im Raum, warum Chemie und Naturgesetze so beschaffen sind, dass sie Leben ermöglichen – die Väter sahen schon in „Die Erde bringe hervor" Gottes Wirken durch die Natur. Mein Designargument wäre dann widerlegt, mein Glaube nicht.`,
      followUps: [
        {
          id: 'unwiderlegbar-irrelevant',
          objection: `Dann ist dein Glaube unwiderlegbar – und damit irrelevant.`,
          answer: `Mein Glaube ist an seiner Mitte widerlegbar: Paulus sagt, ohne die Auferstehung Christi sei er vergeblich (1 Kor 15,14). Der Ursprung des Lebens ist eine wissenschaftliche Frage, die ich ehrlich und offen diskutiere – mit revidierbaren Argumenten.`,
          sources: [{ kind: 'bibel', work: '1. Korinther', ref: '15,14', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich.`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'warum-dann-streiten',
              objection: `Warum streitest du dann überhaupt über den Ursprung des Lebens?`,
              answer: `Weil die Behauptung „Die Wissenschaft hat gezeigt, dass Leben von selbst entsteht" falsch ist und benutzt wird, um den Glauben als unvernünftig darzustellen. Die Richtigstellung ist Tours Motiv. Und weil die Befunde positiv zu einem Schöpfer passen – das darf man sagen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'agnostisch-bleiben',
      objection: `Ehrlich wäre: „Wir wissen es nicht" – Punkt. Warum bleibst du nicht einfach agnostisch?`,
      objectionBy: 'Eugene Koonin',
      answer: `Als wissenschaftlichen Stand teile ich das: Den Mechanismus kennen wir nicht. Aber Unkenntnis des Mechanismus verbietet nicht den Schluss auf die Art der Ursache – wer eine Botschaft im Sand findet, weiß, dass jemand sie schrieb, auch wenn er nicht weiß, womit.`,
      followUps: [
        {
          id: 'unbekannter-prozess-beste-erklaerung',
          objection: `Die beste Erklärung ist eben: ein noch unbekannter natürlicher Prozess.`,
          answer: `„Ein unbekannter Prozess" ist ein Schuldschein, keine Erklärung – er sagt nichts voraus und lässt sich nicht prüfen. Intelligenz dagegen ist eine bekannte Ursache mit beobachteter Fähigkeit, Information zu erzeugen. Im Vergleich der Erklärungen gewinnt die bekannte Ursache.`,
          questionsBack: [`Welche überprüfbare Vorhersage macht „ein unbekannter natürlicher Prozess"?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Ursache außer Intelligenz kennst du, die nachweislich große Mengen funktionaler Information erzeugt?`,
    `Ist es für dich grundsätzlich ausgeschlossen, dass die Evidenz auf Intelligenz weist? Wenn ja – ist das ein Ergebnis oder eine Vorentscheidung?`,
    `Welche Lücke in unserem Wissen über die Zelle ist seit 1953 kleiner geworden?`,
    `Was müsste die OOL-Forschung zeigen, damit du sagst: „Das ist ein grundsätzliches Problem"?`,
    `Warum hielt Eugene Koonin ein Multiversum für nötig?`,
  ],
  avoid: [
    `„Die Wissenschaft weiß es nicht, also gibt es Gott" – genau der Fehlschluss, den man dir vorwirft.`,
    `Tour als Vertreter von Intelligent Design oder als Gottesbeweisführer darstellen – er lehnt das ab.`,
    `Den Glauben vom Ausgang der OOL-Forschung abhängig machen („Wenn sie Leben erzeugen, ist das Christentum widerlegt").`,
  ],
  concessions: [
    `Es gab in der Geschichte tatsächlich „Lückenbüßer"-Argumente von Christen, die sich als falsch erwiesen.`,
    `Der methodologische Naturalismus ist als Arbeitsregel in vielen Bereichen sinnvoll und erfolgreich.`,
    `Der Designschluss ist kein strenger Beweis, sondern ein Schluss auf die beste Erklärung – prinzipiell revidierbar.`,
  ],
  furtherReading: [
    meyerSignature,
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', year: '2009', status: 'paraphrase' },
    tourTimeOut,
    { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', year: '2006', status: 'paraphrase', note: 'Zur Warnung vor Lückenbüßer-Argumenten aus christlicher Sicht.' },
  ],
  difficulty: 2,
  tags: ['Gott der Lücken', 'James Tour', 'Stephen Meyer', 'Methodologischer Naturalismus', 'Schluss auf die beste Erklärung'],
  related: ['naturalismus/lueckenbuesser-gott', 'chemie-biochemie/dna-ist-keine-information', 'ursprung-des-lebens/protozellen-im-labor', 'ursprung-des-lebens/rna-welt', 'evolution/id-keine-wissenschaft', 'erkenntnistheorie/nur-wissenschaft-liefert-wissen'],
};

export default claim;
