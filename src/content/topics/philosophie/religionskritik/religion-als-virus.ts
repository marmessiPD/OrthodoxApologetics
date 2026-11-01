import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'religion-als-virus',
  title: `„Religion ist ein Virus des Geistes (Dawkins)."`,
  proponents: [
    {
      name: 'Richard Dawkins',
      role: 'Evolutionsbiologe, Oxford; prägte den Begriff „Mem"',
      work: 'The Selfish Gene (1976), Kap. 11; „Viruses of the Mind" (Vortrag 1991, gedruckt 1993); The God Delusion (2006), Kap. 5',
    },
    {
      name: 'Daniel C. Dennett',
      role: 'Philosoph, Tufts University (1942–2024)',
      work: 'Breaking the Spell: Religion as a Natural Phenomenon (2006)',
    },
    {
      name: 'Susan Blackmore',
      role: 'Psychologin',
      work: 'The Meme Machine (1999)',
    },
  ],
  steelman: `Gene sind nicht die einzigen Replikatoren. Ideen, Melodien, Moden und Glaubenssätze verbreiten sich durch Nachahmung von Gehirn zu Gehirn – Dawkins nannte sie 1976 „Meme". Meme werden nicht danach ausgelesen, ob sie wahr sind, sondern ob sie sich gut kopieren lassen. Religionen sind besonders erfolgreiche Mem-Komplexe, die sich wie Computerviren verhalten: Sie werden Kindern eingepflanzt, solange deren Geist noch unkritisch ist; sie enthalten eingebaute Schutzmechanismen – Glaube gilt als Tugend, Zweifel als Sünde, Abfall wird bestraft, Kritik ist Blasphemie; und sie befehlen ihren Trägern, sie weiterzuverbreiten (Mission). So erklärt sich, warum auch hochintelligente Menschen absurde Dinge glauben: Nicht weil es gute Gründe gibt, sondern weil ihr Geist infiziert wurde. Dawkins nennt den Glauben ein großes Ausweichen – die Entschuldigung, Belege nicht prüfen zu müssen.`,
  biblical: {
    summary: `Die Bibel fordert ausdrücklich zum Prüfen auf – das Gegenteil eines Immunsystems gegen Kritik. „Prüfet aber alles, und das Gute behaltet" (1 Thess 5,21). „Prüfet die Geister, ob sie von Gott sind" (1 Joh 4,1). Die Juden in Beröa werden gelobt, weil sie „täglich in der Schrift forschten, ob sich's also verhielte" (Apg 17,11). Christen sollen jederzeit bereit sein, Rechenschaft über den Grund ihrer Hoffnung zu geben (1 Petr 3,15). Lukas beginnt sein Evangelium mit einer methodischen Vorrede: Er habe alles „von Anfang an mit Fleiß erkundet", damit der Leser „den gewissen Grund der Lehre erfahre" (Lk 1,3–4). Und Paulus macht den Glauben von einer überprüfbaren Tatsache abhängig: der Auferstehung Jesu (1 Kor 15,14–17).`,
    detail: `- **Joh 20,29** („Selig sind, die nicht sehen und doch glauben") wird oft als Lob blinden Glaubens zitiert. Im Zusammenhang ist es anders: Thomas erhielt Belege, und die Seligpreisung gilt denen, die später dem *Zeugnis* der Augenzeugen vertrauen – so wie wir jedem historischen Bericht vertrauen. Direkt danach erklärt Johannes, er habe die Zeichen *aufgeschrieben, damit* die Leser glauben (Joh 20,30–31) – Glaube auf der Grundlage von Zeugnis.
- **Glaube (griechisch *pistis*)** bedeutet im Neuen Testament Vertrauen und Treue, nicht Annahme ohne Gründe. Siehe den Claim „Glaube heißt, etwas ohne Beweise zu glauben".`,
    sources: [
      { kind: 'bibel', work: '1. Thessalonicher', ref: '5,21', quote: `Prüfet aber alles, und das Gute behaltet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,11', quote: `Denn sie waren die edelsten unter denen zu Thessalonich; die nahmen das Wort auf ganz williglich und forschten täglich in der Schrift, ob sich's also verhielte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Petrus', ref: '3,15', quote: `Seid allezeit bereit zur Verantwortung jedermann, der Grund fordert der Hoffnung, die in euch ist, und das mit Sanftmütigkeit und Furcht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,3–4', quote: `… habe ich's auch für gut angesehen, nachdem ich's alles von Anbeginn mit Fleiß erkundet habe, daß ich's dir, mein guter Theophilus, in Ordnung schriebe, auf daß du gewissen Grund erfahrest der Lehre, in welcher du unterrichtet bist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '20,29–31', quote: `Selig sind, die nicht sehen und doch glauben! Auch viele andere Zeichen tat Jesus vor seinen Jüngern, die nicht geschrieben sind in diesem Buch. Diese aber sind geschrieben, daß ihr glaubet, Jesus sei Christus, der Sohn Gottes …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die alexandrinische Tradition hat Glauben und Vernunft nie als Gegensätze verstanden. Die Katechetenschule von Alexandrien – mit Pantänus, Clemens, Origenes und Didymus dem Blinden – lehrte Philosophie, Geometrie und Astronomie als Vorbereitung auf das Evangelium. Clemens nannte die Philosophie eine „Erzieherin" der Griechen zu Christus, wie das Gesetz für die Juden. Origenes antwortete auf die Kritik des Philosophen Kelsos Punkt für Punkt mit Argumenten (*Contra Celsum*), und Kyrill von Alexandrien widerlegte Kaiser Julians Christentumskritik in einem großen Werk. Eine Kirche, die ihre schärfsten Kritiker so gründlich liest und beantwortet, verhält sich nicht wie ein Virus, das sich gegen Prüfung abschottet.`,
    sources: [
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Teppiche (Stromateis)', ref: 'I,5,28', year: 'um 200', quote: `Die Philosophie war für die Griechen ein Erzieher zu Christus, wie das Gesetz für die Hebräer.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'Vorrede', year: 'um 248', quote: `Origenes beantwortet die Schrift des Philosophen Kelsos „Wahres Wort" Satz für Satz, weil der Glaube die Prüfung nicht fürchten muss.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die **Memetik** hat sich als Wissenschaft nicht etabliert. Das *Journal of Memetics – Evolutionary Models of Information Transmission*, 1997 gegründet, stellte 2005 sein Erscheinen ein; die letzte Ausgabe enthielt gleichsam „Nachrufe" auf die Memetik. Bruce Edmonds sprach von der „offenbar gewordenen Armut der Gen-Mem-Analogie": Es gibt keine klar abgrenzbaren Mem-Einheiten, keinen bekannten Replikationsmechanismus und kaum überprüfbare Vorhersagen. Die kulturelle Evolutionsforschung (Boyd, Richerson, Sperber) arbeitet heute mit differenzierteren Modellen, in denen Menschen Ideen nicht passiv „kopieren", sondern aktiv bewerten und umformen. Als Metapher ist „Mem" populär geblieben – als Erklärung religiösen Glaubens taugt sie wenig. Zudem widerspricht die Virus-Metapher (ein Virus schadet seinem Wirt) den Daten zu Religion und Gesundheit.`,
    sources: [
      { kind: 'gegner', author: 'Richard Dawkins', work: 'Viruses of the Mind', ref: 'in: B. Dahlbom (Hg.), Dennett and His Critics', year: '1993', quote: `Religiöse Überzeugungen verbreiten sich wie Computerviren: Sie infizieren Kinder, schützen sich durch eingebaute Abwehr gegen Kritik und veranlassen ihre Träger, sie weiterzugeben.`, status: 'paraphrase', note: 'Ursprünglich ein Vortrag von 1991.' },
      { kind: 'wissenschaft', author: 'Bruce Edmonds', work: 'The revealed poverty of the gene-meme analogy – why memetics per se has failed to produce substantive results', ref: 'Journal of Memetics 9', year: '2005', quote: `Die Memetik als eigenständiger Ansatz hat keine substanziellen Ergebnisse hervorgebracht; die Analogie zwischen Gen und Mem trägt nicht.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Alister E. McGrath', work: 'Dawkins\' God: Genes, Memes, and the Meaning of Life', year: '2004', quote: `Die Mem-Hypothese ist eine unbelegte Analogie; es gibt keine Beobachtung, die die Existenz von Memen als Replikatoren bestätigt.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `„Virus" ist eine Metapher, kein Argument. Die Memetik, auf der sie beruht, ist als Wissenschaft gescheitert – ihr Fachjournal wurde 2005 eingestellt. Und die Metapher widerlegt sich selbst: Wenn sich Ideen unabhängig von ihrer Wahrheit verbreiten, gilt das auch für den Atheismus und für die Mem-Theorie selbst. Wer sagt „wissenschaftliche Ideen verbreiten sich wegen guter Belege", gibt zu, dass es auf Belege ankommt – dann lass uns über die Belege reden. Die Bibel jedenfalls sagt: „Prüfet alles."`,
  keyPoints: [
    `**Die Memetik ist gescheitert:** Keine definierten Einheiten, kein Mechanismus, kaum Vorhersagen; das Journal of Memetics wurde 2005 eingestellt.`,
    `**Selbstanwendung:** Wenn Ideen sich unabhängig von ihrer Wahrheit verbreiten, gilt das auch für Atheismus und Memetik. Die Metapher entscheidet nichts über Wahrheit.`,
    `**Zurück zu den Belegen:** Sobald man sagt, gute Ideen verbreiten sich wegen Evidenz, ist der Virus-Vergleich überflüssig – es geht um Gründe.`,
    `**Ein Virus schadet seinem Wirt – Religion im Durchschnitt nicht:** Die Gesundheitsdaten sprechen eher für einen Nutzen.`,
    `**Das Christentum fordert Prüfung:** „Prüfet alles" (1 Thess 5,21); die Väter beantworteten ihre Kritiker mit Argumenten (Origenes gegen Kelsos).`,
    `**Erwachsene Bekehrungen durch Nachdenken:** Menschen wie C. S. Lewis oder Francis Collins kamen als Erwachsene durch Gründe zum Glauben – gegen ihre Prägung.`,
  ],
  voices: [
    {
      person: 'mcgrath',
      role: 'als Molekularbiophysiker, Theologe und früherer Atheist',
      text: `Alister McGrath hat in Oxford in Molekularbiophysik promoviert, bevor er Theologe wurde – er kennt die Biologie, auf die Dawkins sich beruft. In *Dawkins' God* (2004) und *The Dawkins Delusion?* (2007, mit Joanna Collicutt McGrath) zeigt er, dass die Mem-Hypothese eine unbelegte Analogie ist: Niemand hat je ein Mem beobachtet, abgegrenzt oder seinen Kopiermechanismus beschrieben. McGrath weist zudem darauf hin, dass Dawkins die Analogie selektiv verwendet: Religiöse Ideen sind „Viren", die eigenen Ideen dagegen nicht – ein Kriterium dafür liefert die Memetik selbst aber nicht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alister E. McGrath, Joanna Collicutt McGrath', work: 'The Dawkins Delusion? Atheist Fundamentalism and the Denial of the Divine', year: '2007', quote: `Die Bezeichnung des Glaubens als „Virus des Geistes" ist eine rhetorische Strategie, keine wissenschaftliche Erkenntnis.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Debattenpartner Dawkins\'',
      text: `John Lennox, emeritierter Mathematikprofessor in Oxford, hat Richard Dawkins mehrfach öffentlich debattiert (u. a. „The God Delusion Debate", Birmingham 2007). Er weist darauf hin, dass die Virus-These in sich zusammenfällt, wenn man sie konsequent anwendet: Wenn Glaubensüberzeugungen nur Produkte von Kopierprozessen sind, dann ist auch Dawkins' Überzeugung ein solches Produkt – und hat keinen Anspruch auf Wahrheit. Der Versuch, die eigene Weltanschauung von der Kritik auszunehmen, ist genau das, was man Religionen vorwirft. Lennox betont außerdem, dass Glaube im biblischen Sinn ein begründetes Vertrauen ist, wie in der Wissenschaft das Vertrauen in die Verständlichkeit der Natur.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', year: '2007', quote: `Glaube ist nicht Annahme ohne Belege, sondern ein Vertrauen, das auf Belegen beruht – in der Wissenschaft wie im christlichen Leben.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker, der als Erwachsener zum Glauben kam',
      text: `Francis Collins, Leiter des Humangenomprojekts und später Direktor der US National Institutes of Health, wuchs ohne religiöse Prägung auf und war als junger Wissenschaftler Atheist. Erst als Arzt, angesichts sterbender Patienten und ihres Glaubens, begann er, die Gründe zu prüfen – angestoßen durch C. S. Lewis' *Mere Christianity*. In *The Language of God* (2006) beschreibt er, wie er mit 27 Jahren durch Nachdenken zum Glauben kam. Solche Bekehrungen passen schlecht zum Bild einer kindlichen „Infektion": Hier hat ein kritischer Erwachsener gegen seine Prägung aus Gründen umgedacht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God: A Scientist Presents Evidence for Belief', year: '2006', quote: `Collins beschreibt, wie er als atheistischer junger Arzt die Argumente für den Glauben prüfte und mit 27 Jahren Christ wurde.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Apostel, der auf dem Markt diskutierte',
      text: `Paulus hat das Evangelium nicht durch Zwang oder bloße Wiederholung verbreitet, sondern in Synagogen und auf dem Marktplatz „disputiert" (Apg 17,17; 19,8–9), mit stoischen und epikureischen Philosophen auf dem Areopag (Apg 17,18–34) und in der Lehrhalle des Tyrannus in Ephesus täglich über zwei Jahre. Er beruft sich auf überprüfbare Zeugen der Auferstehung, „deren noch viele leben" (1 Kor 15,6). Die Ausbreitung des frühen Christentums war ein Prozess öffentlicher Argumentation unter Verfolgung – nicht die Ausbreitung eines Erregers.`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '15,6', quote: `Danach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal, deren noch viele leben, etliche aber sind entschlafen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
  ],
  dialog: [
    {
      id: 'meme-verbreiten-sich',
      objection: `Religionen verbreiten sich wie Viren. Eltern infizieren ihre Kinder, bevor diese kritisch denken können. Ob die Inhalte wahr sind, spielt keine Rolle – nur ob sie sich gut kopieren lassen.`,
      objectionBy: 'Richard Dawkins',
      answer: `Ideen verbreiten sich aus vielen Gründen – manchmal, weil sie eingängig sind, manchmal, weil sie wahr sind. Um zu wissen, welcher Fall vorliegt, muss man die Gründe prüfen. Das Wort „Virus" erspart einem diese Prüfung – es ist Rhetorik, kein Argument. Und die Wissenschaft, auf die es sich stützt, die Memetik, ist gescheitert: Ihr Fachjournal wurde 2005 eingestellt, weil sie keine überprüfbaren Ergebnisse lieferte.`,
      detail: `Das *Journal of Memetics* erschien von 1997 bis 2005. Kritiker wie Bruce Edmonds stellten fest, dass es keine klar definierten Mem-Einheiten, keinen nachgewiesenen Kopiermechanismus und kaum empirische Vorhersagen gab. Die heutige kulturelle Evolutionsforschung betont, dass Menschen Ideen aktiv bewerten und umformen, statt sie wie Viren passiv zu übernehmen.`,
      questionsBack: [
        `Woran erkennst du, ob sich eine Idee verbreitet, weil sie eingängig ist, oder weil sie wahr ist?`,
        `Kannst du mir eine überprüfbare Vorhersage der Memetik nennen, die bestätigt wurde?`,
      ],
      followUps: [
        {
          id: 'metapher-trotzdem-hilfreich',
          objection: `Auch wenn die Memetik keine strenge Wissenschaft ist: Die Metapher hilft zu verstehen, dass Ideen im Wettbewerb stehen und sich nach ihrer „Fitness" verbreiten.`,
          objectionBy: 'Daniel Dennett / Susan Blackmore',
          answer: `Dann gilt die Metapher für alle Ideen – auch für den Atheismus, die Evolutionstheorie und die Memetik selbst. Sie unterscheidet nicht zwischen wahren und falschen Ideen. Wenn sie alles erklärt, entscheidet sie nichts. Für die Frage, ob Gott existiert, brauchen wir also wieder Argumente.`,
          detail: `Dennett hat in *Breaking the Spell* (2006) Religion als natürliches Phänomen untersucht und dabei ehrlich eingeräumt, dass eine natürliche Erklärung der Religion nicht automatisch ihre Falschheit beweist. Das ist ein wichtiges Zugeständnis: Die Erklärungsfrage und die Wahrheitsfrage sind verschieden.`,
          followUps: [
            {
              id: 'wissenschaft-anders',
              objection: `Wissenschaftliche Ideen verbreiten sich anders: wegen Belegen, Experimenten, Überprüfbarkeit. Religiöse Ideen nicht. Das ist der Unterschied zwischen einem guten Mem und einem Virus.`,
              objectionBy: 'Richard Dawkins',
              answer: `Dann hast du den Virus-Vergleich selbst aufgegeben: Es kommt auf Belege an, nicht auf Kopiermechanismen. Gut – dann lass uns über Belege sprechen. Viele Christen glauben genau deshalb, weil sie die Gründe geprüft haben: die Entstehung des Universums, seine Feinabstimmung, die historische Frage nach Jesu Auferstehung. Und umgekehrt verbreiten sich auch in der Wissenschaft manche Ideen aus sozialen Gründen – das hat Thomas Kuhn gezeigt.`,
              detail: `Thomas Kuhn (*Die Struktur wissenschaftlicher Revolutionen*, 1962) beschrieb, wie wissenschaftliche Gemeinschaften an Paradigmen festhalten, auch aus sozialen und psychologischen Gründen. Das relativiert die Wissenschaft nicht, zeigt aber, dass die scharfe Trennung „Wissenschaft = Belege, Religion = Ansteckung" zu einfach ist.`,
              followUps: [
                {
                  id: 'glaube-verbietet-zweifel',
                  objection: `Religion hat ein eingebautes Immunsystem: Glaube wird gelobt, Zweifel verurteilt. Jesus sagt selbst: „Selig sind, die nicht sehen und doch glauben." Das ist die perfekte Virus-Strategie.`,
                  objectionBy: 'Richard Dawkins (The God Delusion)',
                  answer: `Lies den Zusammenhang: Thomas bekam Belege – Jesus zeigte ihm seine Wunden. Die Seligpreisung gilt denen, die später dem Zeugnis der Augenzeugen vertrauen, wie wir jedem historischen Bericht vertrauen. Gleich danach schreibt Johannes, er habe die Zeichen aufgeschrieben, *damit* wir glauben – Glaube aufgrund von Zeugnis. Und die Bibel befiehlt das Prüfen: „Prüfet alles" (1 Thess 5,21), „prüfet die Geister" (1 Joh 4,1). Die Beröer werden gelobt, weil sie nachforschten (Apg 17,11).`,
                  detail: `Biblischer Glaube (*pistis*) ist Vertrauen auf der Grundlage von Gründen und Zeugnis – so wie ein Patient einem bewährten Arzt vertraut. Siehe ausführlich den Claim „Glaube heißt, etwas ohne Beweise zu glauben" (Themenblock Erkenntnistheorie). Ehrlich bleibt: Manche christlichen Gemeinschaften unterdrücken Fragen. Das widerspricht der Schrift und den Vätern, die ihre Kritiker gründlich beantwortet haben.`,
                  sources: [
                    { kind: 'bibel', work: '1. Johannes', ref: '4,1', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kinder-infiziert',
      objection: `Kinder werden infiziert, bevor sie denken können. Von einem „christlichen Kind" zu sprechen ist so absurd wie von einem „marxistischen Kind". Religiöse Erziehung grenzt an Missbrauch.`,
      objectionBy: 'Richard Dawkins (The God Delusion, Kap. 9)',
      answer: `Alle Eltern geben ihren Kindern eine Weltsicht mit – auch säkulare Eltern, die ihren Kindern beibringen, dass es keinen Gott gibt oder dass nur Wissenschaft zählt. Die Frage ist nicht, *ob* Werte weitergegeben werden, sondern *ob sie wahr sind*. Und viele Menschen kommen als Erwachsene zum Glauben, gegen ihre Erziehung – C. S. Lewis, Francis Collins, Antony Flew am Ende seines Lebens zum Theismus. Das passt nicht zum Bild einer kindlichen Infektion.`,
      detail: `Siehe den Claim „Kinder glauben nur, weil sie indoktriniert werden" (Themenblock Kognitive Religionswissenschaft). Wichtig ist der Ton: Der Vorwurf, religiöse Erziehung sei Missbrauch, verletzt Millionen liebevoller Eltern. Man kann ihm ruhig begegnen: Ein Kind, das lernt, Gott und den Nächsten zu lieben, für Feinde zu beten und Arme zu versorgen, ist nicht „infiziert".`,
      followUps: [
        {
          id: 'geografie-entscheidet',
          objection: `Wärst du in Saudi-Arabien geboren, wärst du Muslim; in Indien Hindu. Deine Religion ist ein geografischer Zufall – wie ein regionales Virus.`,
          objectionBy: 'Richard Dawkins',
          answer: `Wäre ich 1950 in der Sowjetunion geboren, wäre ich wahrscheinlich Atheist und Marxist gewesen. Hätte ich im Mittelalter gelebt, hätte ich die Erde für den Mittelpunkt des Universums gehalten. Daraus folgt nicht, dass Atheismus oder Astronomie falsch sind. Die Herkunft einer Überzeugung entscheidet nicht über ihre Wahrheit – das ist der genetische Fehlschluss. Entscheidend ist, ob ich meine Überzeugung prüfe.`,
          detail: `Das Argument trifft außerdem eine Gruppe nicht: Konvertiten. In Ländern, in denen der Übertritt zum Christentum gefährlich ist, kommen Menschen dennoch zum Glauben – oft unter hohem persönlichen Preis. Und die Kopten in Ägypten halten seit Jahrhunderten unter sozialem Druck an ihrem Glauben fest, wo der Übertritt zur Mehrheitsreligion viele Vorteile brächte.`,
        },
      ],
    },
    {
      id: 'virus-schadet',
      objection: `Wie ein Virus schadet Religion ihren Wirten: Sie erzeugt Schuldgefühle, Gewalt, Wissenschaftsfeindlichkeit und Hass auf Andersdenkende.`,
      objectionBy: 'Richard Dawkins / Christopher Hitchens',
      answer: `Religion kann missbraucht werden – das will ich nicht beschönigen. Aber ein Virus schadet seinem Wirt per Definition. Die Daten zeigen bei gelebtem Glauben im Durchschnitt das Gegenteil: weniger Depression, weniger Suizid, mehr Lebenszufriedenheit, mehr Hilfsbereitschaft (Koenig, VanderWeele, Putnam). Die Krankenhäuser, Schulen und Armenhäuser der Kirchen sind auch nicht gerade Symptome einer Infektion.`,
      detail: `Siehe die Claims „Religion schadet der psychischen Gesundheit" und „Die Welt wäre ohne das Christentum besser dran". Ehrlich: Es gibt religiös motivierte Gewalt und ungesunde Religiosität. Aber die Virus-Metapher behauptet einen grundsätzlichen Schaden, den die Daten nicht stützen.`,
      followUps: [
        {
          id: 'nuetzlich-nicht-wahr',
          objection: `Gut, vielleicht ist Religion eher ein Symbiont als ein Parasit – sie nützt ihrem Wirt. Aber nützlich heißt nicht wahr.`,
          objectionBy: 'Daniel Dennett',
          answer: `Einverstanden: Nützlichkeit beweist keine Wahrheit. Aber dann ist die Virus-These – die ja behauptet, Religion sei schädlich – aufgegeben. Übrig bleibt die eigentliche Frage: Ist das, was Christen glauben, wahr? Und die lässt sich weder mit Viren noch mit Symbionten beantworten, sondern nur mit Gründen.`,
          detail: `An dieser Stelle hat das Gespräch sein Ziel erreicht: Die Metapher ist entkräftet, und die Debatte kann zur Sache kommen – Gottesbeweise, Auferstehung, Bewusstsein.`,
          followUps: [
            {
              id: 'atheismus-kein-mem',
              objection: `Atheismus ist kein Mem und kein Glaubenssystem. Er ist einfach das Fehlen eines Glaubens – wie Kahlheit keine Haarfarbe ist.`,
              objectionBy: 'Populärer Atheismus',
              answer: `Der „Neue Atheismus" hat Bestseller, Konferenzen, Slogans, Busplakate und Leitfiguren – er verbreitet sich durchaus wie ein Ideenpaket. Und wer behauptet, Religion sei ein Virus und es gebe nur Materie, vertritt eine positive Weltanschauung (Naturalismus), nicht nur ein Fehlen. Das ist nicht schlimm – aber dann gelten für ihn dieselben Maßstäbe der Begründung.`,
              detail: `Siehe den Claim „Die Beweislast liegt bei dir – Atheismus ist nur fehlender Glaube". Die Unterscheidung zwischen „Ich glaube nicht an Gott" (Agnostizismus/schwacher Atheismus) und „Es gibt keinen Gott, und Religion ist ein Virus" (starke Thesen) ist im Gespräch hilfreich.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Gilt deine Virus-Theorie auch für den Atheismus? Wenn nein – nach welchem Kriterium unterscheidest du?`,
    `Kannst du mir eine bestätigte Vorhersage der Memetik nennen?`,
    `Wie erklärst du Menschen, die als Erwachsene nach gründlicher Prüfung Christen wurden?`,
    `Wenn Religion ein Virus ist – warum sind religiös aktive Menschen im Durchschnitt gesünder?`,
  ],
  avoid: [
    `„Atheismus ist auch ein Virus!" – Damit übernimmst du die schwache Metapher, statt sie zu entkräften.`,
    `Dawkins als Person verspotten – seine Leistungen als Biologe und Wissenschaftsautor sind anzuerkennen.`,
    `Bestreiten, dass Religionen sich auch durch Erziehung und Kultur verbreiten – das stimmt; die Frage ist nur, ob das über ihre Wahrheit entscheidet.`,
  ],
  concessions: [
    `Religiöse Überzeugungen werden – wie alle Überzeugungen – auch durch Erziehung, Kultur und Gemeinschaft weitergegeben.`,
    `Es gibt christliche Milieus, die Fragen unterdrücken; das widerspricht der biblischen Aufforderung zum Prüfen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alister E. McGrath', work: 'Dawkins\' God: Genes, Memes, and the Meaning of Life', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alister E. McGrath, Joanna Collicutt McGrath', work: 'The Dawkins Delusion?', year: '2007', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', year: '2007', status: 'paraphrase' },
    { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', year: '2006', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Dawkins', 'Memetik', 'Virus des Geistes', 'Dennett', 'Glaube und Vernunft', 'Genetischer Fehlschluss'],
  related: [
    'erkenntnistheorie/glaube-ohne-beweise',
    'kognitive-religionswissenschaft/kinder-indoktrination',
    'kognitive-religionswissenschaft/religion-nebenprodukt',
    'psychologie/religion-schadet-psyche',
    'atheismus/beweislast-mangel-an-glauben',
    'religionskritik/freud-wunscherfuellung',
  ],
};

export default claim;
