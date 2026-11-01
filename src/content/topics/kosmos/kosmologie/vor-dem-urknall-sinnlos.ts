import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'vor-dem-urknall-sinnlos',
  title: `„Was vor dem Urknall war, ist eine sinnlose Frage."`,
  proponents: [
    { name: 'Stephen Hawking', role: 'Theoretischer Physiker', work: 'A Brief History of Time (1988); Vergleich mit dem „Norden des Nordpols" in späteren Interviews (u. a. StarTalk, 2018)' },
    { name: 'Adolf Grünbaum', role: 'Wissenschaftsphilosoph, University of Pittsburgh', work: '„The Pseudo-Problem of Creation in Physical Cosmology", Philosophy of Science 56 (1989)' },
    { name: 'Lawrence M. Krauss', role: 'Kosmologe', work: 'A Universe from Nothing (2012); öffentliche Debatten' },
  ],
  steelman: `Wenn Zeit selbst mit dem Urknall entstand, dann hat „vor dem Urknall" keine Bedeutung – so wenig wie die Frage, was nördlich des Nordpols liegt. Ursachen gehen ihren Wirkungen zeitlich voraus; ohne „vorher" gibt es keine Ursache. Der Wissenschaftsphilosoph Adolf Grünbaum hat argumentiert, dass die Frage nach einer Schöpfung ein Scheinproblem ist: Sie beruht auf der unbegründeten Annahme, das Nichts sei der „natürliche" Zustand und jede Existenz bedürfe einer Erklärung. Wer nach einem Schöpfer „davor" fragt, überträgt Alltagsintuitionen auf einen Bereich, in dem sie nicht gelten.`,
  biblical: {
    summary: `Die Bibel spricht selbst von einem „Anfang" (Gen 1,1) und von einem Sein Gottes „ehe die Welt war" (Joh 17,5). Das „vor" ist dabei nicht als frühere Zeitstrecke gemeint, sondern als **Vorrang im Sein**: Gott ist nicht in der Zeit, sondern Herr der Zeit (Ps 90,2). Der Ausdruck „vor den Zeiten der Welt" (2 Tim 1,9; griechisch *pro chronōn aiōniōn*) zeigt, dass die biblischen Autoren Gottes Ewigkeit als der geschaffenen Zeit vorgeordnet verstanden.`,
    detail: `Die christliche Theologie hat also nie behauptet, es habe vor der Schöpfung eine leere Zeit gegeben, in der Gott wartete. Sie behauptet, dass die Zeit selbst geschaffen ist. Damit ist Hawkings Nordpol-Vergleich für Christen keine Widerlegung, sondern fast eine Bestätigung – und zugleich bleibt die Frage, warum es die Erdkugel samt Nordpol überhaupt gibt.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '17,5', quote: `Und nun verkläre mich du, Vater, bei dir selbst mit der Klarheit, die ich bei dir hatte, ehe die Welt war.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '1,9', quote: `… nach seinem Vorsatz und der Gnade, die uns gegeben ist in Christo Jesu vor der Zeit der Welt.`, original: `πρὸ χρόνων αἰωνίων`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '90,2', quote: `Ehe denn die Berge wurden und die Erde und die Welt geschaffen wurden, bist du, Gott, von Ewigkeit zu Ewigkeit.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Augustinus hat die Frage schon um 400 n. Chr. beantwortet: Es gab kein „damals", als es keine Zeit gab; Gott schuf die Welt nicht *in* der Zeit, sondern *mit* der Zeit. Auf die spöttische Frage „Was tat Gott, bevor er Himmel und Erde schuf?" verweigerte er ausdrücklich die witzige Antwort, die man damals kursieren ließ, und gab eine philosophische: Die Frage setzt eine Zeit vor der Zeit voraus. Basilius sagt ähnlich, der Anfang der Zeit sei selbst noch nicht Zeit.`,
    detail: `- **Augustinus, Confessiones XI,12,14:** Er referiert die Scherzantwort („Er bereitete Höllen für die, die solche Fragen stellen") und lehnt sie ab; er wolle lieber ehrlich sagen „Ich weiß es nicht", als jemanden lächerlich zu machen.
- **Confessiones XI,13,15:** „Es gab kein Damals, wo keine Zeit war."
- **De civitate Dei XI,6:** Die Welt ist mit der Zeit geschaffen.
- **Basilius, Hexaemeron 1,6:** Wie der Anfang eines Weges noch nicht der Weg ist, so ist der Anfang der Zeit noch nicht Zeit.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Confessiones', ref: 'XI,13,15', year: 'ca. 400', quote: `Es gab kein Damals, wo keine Zeit war.`, original: `non erat tunc, ubi non erat tempus.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Confessiones', ref: 'XI,12,14', year: 'ca. 400', quote: `Augustinus lehnt die Scherzantwort ab, Gott habe vor der Schöpfung Höllen für Grübler bereitet, und zieht ein ehrliches „Ich weiß nicht" dem Spott vor.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 1,6', year: 'ca. 370', quote: `Der Anfang der Zeit ist noch nicht Zeit, so wie der Anfang des Weges noch nicht der Weg ist.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Physik ist keineswegs ausgemacht, dass die Frage nach einem „Davor" sinnlos ist. Zahlreiche Modelle (Penroses CCC, das zyklische Modell von Steinhardt und Turok, der Big Bounce der Schleifenquantenkosmologie, ewige Inflation) beschreiben ausdrücklich eine Phase vor unserem Urknall. Andere Ansätze (Wheeler-DeWitt-Gleichung, Hartle–Hawking) behandeln die Zeit als emergent. Ob es vor dem heißen Urknall etwas gab, ist also eine offene wissenschaftliche Frage – nicht eine sinnlose.`,
    detail: `Hawkings Nordpol-Bild gehört zu seinem eigenen No-Boundary-Modell, das umstritten ist. Physiker wie Carroll halten ein Davor sogar für wahrscheinlich. Grünbaums Argument richtet sich gegen eine bestimmte Fassung des kosmologischen Arguments (Leibniz' „Warum ist etwas und nicht nichts?"), wurde aber von Philosophen wie Richard Swinburne und William Lane Craig ausführlich beantwortet.`,
    sources: [
      { kind: 'gegner', author: 'Adolf Grünbaum', work: '„The Pseudo-Problem of Creation in Physical Cosmology", Philosophy of Science 56', year: '1989', quote: `Die Frage nach einer Ursache der Existenz des Universums ist ein Scheinproblem, weil die Annahme, Nichts sei der natürliche Zustand, unbegründet ist.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Stephen Hawking', work: 'A Brief History of Time', year: '1988', quote: `Ereignisse vor dem Urknall hätten keine beobachtbaren Folgen; man könne sie aus der Theorie herausschneiden und sagen, die Zeit habe mit dem Urknall begonnen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Christen sagen seit Augustinus, dass die Zeit mit der Welt begann – da sind wir uns einig: Es gab kein zeitliches „Vorher". Aber die Frage „Warum gibt es die Zeitreihe überhaupt?" fragt nicht nach einer früheren Zeit, sondern nach einem Grund. Ursachen müssen nicht früher sein, sie können dem Sein nach vorausgehen. Und die Physiker selbst halten die Frage nicht für sinnlos – Penrose, Steinhardt und Carroll forschen genau darüber.`,
  keyPoints: [
    `**Augustinus war zuerst da:** Die Zeit ist mit der Welt geschaffen (De civ. Dei XI,6). Kein Christ braucht eine leere Zeit „vor" dem Urknall.`,
    `**Grund statt Vorher:** Die Frage „Warum gibt es überhaupt Zeit und Welt?" ist keine Frage nach einem früheren Zeitpunkt.`,
    `**Ursachen können gleichzeitig sein:** Kants Beispiel – eine Kugel auf einem Kissen verursacht die Mulde gleichzeitig.`,
    `**Der Nordpol erklärt nicht die Erde:** Dass nördlich vom Nordpol nichts liegt, beantwortet nicht, warum es die Erdkugel gibt.`,
    `**Die Fachwelt widerspricht:** Viele Kosmologen erforschen ein mögliches „Davor" – für sie ist die Frage sinnvoll.`,
  ],
  voices: [
    {
      person: 'augustinus',
      role: 'als Philosoph der Zeit',
      text: `Augustinus hat in den *Bekenntnissen* (Buch XI) die vielleicht einflussreichste Analyse der Zeit in der abendländischen Philosophie vorgelegt. Seine Pointe: Zeit ist an Veränderung gebunden, und es gibt keine Veränderung ohne Geschöpfe. Darum schuf Gott die Welt nicht zu einem Zeitpunkt innerhalb einer schon laufenden Zeit, sondern die Zeit mit der Welt. Wer fragt, was Gott „vorher" tat, setzt eine Zeit vor der Zeit voraus. Damit nahm Augustinus 1500 Jahre vor der Relativitätstheorie die Einsicht vorweg, dass Zeit kein leerer Behälter ist, sondern zur geschaffenen Wirklichkeit gehört.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XI,6', year: 'ca. 417', quote: `… ohne Zweifel ist die Welt nicht in der Zeit, sondern mit der Zeit geschaffen.`, original: `procul dubio non est mundus factus in tempore, sed cum tempore.`, translation: 'eigene Übersetzung', status: 'verbatim' }],
    },
    {
      person: 'basilius',
      role: 'als Ausleger von „Im Anfang"',
      text: `Basilius deutet „Im Anfang" nicht als ersten Abschnitt einer schon vorhandenen Zeit, sondern als zeitlosen, unteilbaren Einsatzpunkt des göttlichen Willens. Der Anfang der Zeit ist selbst noch nicht Zeit – wie der Anfang eines Weges noch kein Stück Weg ist. Damit beantwortet er die Frage nach dem „Davor" mit einer Unterscheidung, die bis heute trägt.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 1,6', year: 'ca. 370', quote: `„Im Anfang" bezeichnet den zeitlosen, augenblicklichen Einsatz des Schöpferwillens.`, status: 'paraphrase' }],
    },
    {
      person: 'thomas-aquin',
      role: 'als Philosoph der Kausalität',
      text: `Thomas unterscheidet zwischen zeitlich geordneten Ursachenreihen (der Vater zeugt den Sohn, der später den Enkel zeugt) und wesentlich geordneten Ursachen, die gleichzeitig wirken (die Hand bewegt den Stab, der den Stein bewegt). Gottes Schöpfung gehört zur zweiten Art: Sie ist nicht ein früheres Ereignis, sondern die gegenwärtige Ursache des Seins. Darum ist die Frage nach einem zeitlichen „Davor" für die Schöpfungslehre gar nicht entscheidend.`,
      sources: [{ kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa Theologiae', ref: 'I, q. 46, a. 2, ad 7', year: 'ca. 1268', quote: `Bei wesentlich geordneten Ursachen ist ein unendlicher Regress unmöglich; bei zufällig (zeitlich) geordneten nicht ausgeschlossen.`, status: 'paraphrase' }],
    },
    {
      person: 'craig',
      role: 'als Zeitphilosoph',
      text: `Craig hat in *Time and Eternity* (2001) ein Modell vorgeschlagen, das die Debatte präzisiert: Gott ist ohne die Schöpfung zeitlos und mit der Schöpfung in der Zeit. Der erste Moment der Zeit ist zugleich der Moment des Schöpfungsaktes. Es gibt also kein Davor – und trotzdem eine Ursache, die der Wirkung dem Sein nach vorausgeht.`,
      sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: 'Time and Eternity: Exploring God’s Relationship to Time', year: '2001', quote: `Gott existiert ohne Schöpfung zeitlos und seit der Schöpfung in der Zeit; Schöpfungsakt und erster Zeitpunkt fallen zusammen.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'nordpol-vergleich',
      objection: `Nach dem, was vor dem Urknall war, zu fragen, ist wie die Frage, was nördlich vom Nordpol liegt. Da ist nichts – die Frage ergibt keinen Sinn.`,
      objectionBy: 'Stephen Hawking',
      answer: `Einverstanden: Es gab vielleicht keine frühere Zeit, und das sagen Christen seit Augustinus. Aber dein Bild hilft mir: Dass nördlich vom Nordpol nichts liegt, erklärt nicht, warum es die Erde gibt. Die Frage „Warum existiert die Zeitreihe überhaupt?" ist keine Frage nach einem früheren Ort auf der Kugel.`,
      questionsBack: [`Erklärt die Tatsache, dass die Erde keinen „Norden vom Nordpol" hat, warum es die Erde gibt?`],
      followUps: [
        {
          id: 'ursache-muss-vorher-sein',
          objection: `Ohne Zeit keine Ursache: Eine Ursache muss ihrer Wirkung vorausgehen.`,
          objectionBy: 'Adolf Grünbaum',
          answer: `Nicht unbedingt. Kant nannte das Beispiel einer Bleikugel auf einem Kissen: Sie verursacht die Mulde, und beides ist gleichzeitig. Auch das Gewicht eines Hauses und das Tragen der Fundamente sind gleichzeitig. Ursachen können ihren Wirkungen dem Sein nach vorausgehen, ohne zeitlich früher zu sein.`,
          sources: [{ kind: 'fachliteratur', author: 'Immanuel Kant', work: 'Kritik der reinen Vernunft', ref: 'B 248 (Zweite Analogie)', year: '1787', quote: `Beispiel der Kugel, die auf einem Kissen liegt und ein Grübchen macht: Ursache und Wirkung sind gleichzeitig.`, status: 'paraphrase' }],
          followUps: [
            {
              id: 'gleichzeitig-ist-auch-zeit',
              objection: `„Gleichzeitig" ist auch eine Zeitangabe. Ohne Zeit gibt es auch keine Gleichzeitigkeit.`,
              objectionBy: 'Graham Oppy',
              answer: `Gut – dann sprechen wir von zeitloser Abhängigkeit: Gott wirkt nicht in der Zeit, aber die Wirkung hat einen ersten Moment. Craigs Modell: Gott ist ohne Schöpfung zeitlos, und sein Schöpfungsakt fällt mit dem ersten Zeitpunkt zusammen. Abhängigkeit im Sein braucht keine zeitliche Reihenfolge.`,
              followUps: [
                {
                  id: 'zeitlos-handeln-unmoeglich',
                  objection: `Ein zeitloses Wesen kann nicht handeln. Handeln ist Veränderung, Veränderung braucht Zeit.`,
                  objectionBy: 'Victor Stenger / Graham Oppy',
                  answer: `Handeln heißt hier: frei wollen, dass etwas ist. Gottes Wille ist ewig; was sich verändert, ist die Schöpfung, nicht Gott. Thomas von Aquin formuliert es so: Die Veränderung liegt im Geschöpf, das zu existieren beginnt. Alternativ (Craig): Mit dem Schöpfungsakt tritt Gott in eine Beziehung zur Zeit ein. Beide Modelle sind widerspruchsfrei.`,
                },
              ],
            },
          ],
        },
        {
          id: 'gott-davor-auch-sinnlos',
          objection: `Dann ist auch „Gott vor dem Urknall" sinnlos. Du kannst nicht beides haben.`,
          objectionBy: 'Lawrence Krauss',
          answer: `Richtig, wenn „vor" zeitlich gemeint wäre – deshalb meint die Theologie es nicht so. „Gott ist vor allem" (Kol 1,17) heißt: Er ist Grund von allem, nicht der Erste in einer Zeitreihe. Augustinus hat genau diesen Einwand im 5. Jahrhundert schon beantwortet.`,
          followUps: [
            {
              id: 'was-tat-gott-vorher',
              objection: `Augustinus hat die Frage „Was tat Gott, bevor er Himmel und Erde schuf?" doch nur mit einem Witz abgewehrt: Er bereitete die Hölle für die, die solche Fragen stellen. Das ist keine Antwort, das ist Einschüchterung.`,
              objectionBy: 'Lawrence Krauss',
              answer: `Das ist ein verbreitetes Missverständnis. Augustinus zitiert diesen Witz in den *Bekenntnissen* gerade, um ihn ausdrücklich *abzulehnen* – er will so nicht antworten. Seine eigentliche Antwort ist philosophisch: Es gab kein „Vorher", denn die Zeit selbst ist ein Geschöpf. Die Welt wurde nicht *in* der Zeit, sondern *mit* der Zeit geschaffen. Das ist fast wörtlich, was Hawking 1500 Jahre später über den Urknall sagt.`,
              detail: `In *Confessiones* XI,12,14 schreibt Augustinus, er antworte nicht so, wie jemand scherzhaft geantwortet haben soll; lieber sage er „Ich weiß es nicht", als jemanden lächerlich zu machen, der Tiefes fragt. In XI,13,15 folgt die Lösung: Da Gott der Schöpfer aller Zeiten ist, gab es keine Zeit, bevor er die Zeit schuf, und damit kein „Damals", in dem er untätig gewesen wäre. In *De civitate Dei* XI,6 fasst er zusammen: Die Welt ist nicht in der Zeit, sondern mit der Zeit gemacht. Wer Augustinus als Einschüchterer zitiert, hat ihn nicht gelesen – und verpasst, dass die moderne Kosmologie seine Pointe bestätigt.`,
              voices: [
                { person: 'augustinus', role: 'als Philosoph der Zeit', text: `Augustinus versteht die Zeit als Eigenschaft der veränderlichen Schöpfung. Gott dagegen ist ewig im Sinne eines ganzheitlichen, unveränderlichen Gegenwärtigseins, nicht einer unendlich langen Dauer. Deshalb ist die Frage, was Gott „vorher" tat, ein Kategorienfehler: Sie überträgt die Zeitform des Geschöpfs auf den Schöpfer.` },
              ],
              sources: [
                { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Confessiones', ref: 'XI,12,14–13,15', year: 'ca. 397–401', quote: `Ich antworte nicht, wie einer gescherzt haben soll, um der Schwere der Frage auszuweichen … Es gab kein „Damals", wo es keine Zeit gab.`, status: 'paraphrase' },
                { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XI,6', year: 'ca. 417', quote: `Ohne Zweifel ist die Welt nicht in der Zeit, sondern mit der Zeit gemacht worden.`, original: `procul dubio non est mundus factus in tempore, sed cum tempore`, translation: 'eigene Übersetzung', status: 'verbatim' },
              ],
              questionsBack: [`Hast du die Stelle bei Augustinus selbst gelesen? Er lehnt den Witz ausdrücklich ab – und sagt dann, dass die Zeit mit der Welt beginnt.`],
            },
          ],
        },
      ],
    },
    {
      id: 'gruenbaum-pseudoproblem',
      objection: `Grünbaum hat gezeigt: Die Frage, warum überhaupt etwas existiert, ist ein Pseudoproblem. Sie setzt voraus, dass Nichts der natürliche Zustand ist – dafür gibt es keinen Grund.`,
      objectionBy: 'Adolf Grünbaum',
      answer: `Die Frage braucht diese Annahme nicht. Sie braucht nur, dass das Universum *kontingent* ist – dass es anders sein oder fehlen könnte. Und das legt die Physik selbst nahe: Andere Naturkonstanten, andere Gesetze, andere Anfangsbedingungen sind ohne Widerspruch denkbar. Was auch anders sein könnte, verlangt eine Erklärung, warum es so ist.`,
      followUps: [
        {
          id: 'universum-notwendig',
          objection: `Vielleicht existiert das Universum notwendig. Dann braucht es keine Erklärung außerhalb seiner selbst.`,
          objectionBy: 'Graham Oppy / Sean Carroll',
          answer: `Nichts in der Physik deutet darauf hin: Die Werte der Konstanten und die Anfangsbedingungen wirken gerade nicht notwendig. Der einzige ernsthafte Versuch, alles notwendig zu machen, ist Tegmarks „mathematisches Universum" – mit der Folge, dass alle denkbaren Strukturen existieren und man nicht mehr erklären kann, warum wir eine geordnete Welt erleben.`,
          detail: `Die ausführliche Debatte um Kontingenz und Notwendigkeit gehört zum Kontingenzargument (Leibniz).`,
          followUps: [
            {
              id: 'tegmark-alle-strukturen-existieren',
              objection: `Genau: Im Level-IV-Multiversum existiert jede mathematische Struktur physikalisch. Dann ist nichts kontingent – unser Universum existiert, weil alle existieren. Keine Auswahl, kein Schöpfer, keine offene Warum-Frage.`,
              objectionBy: 'Max Tegmark',
              answer: `Das ist kühn, hat aber drei Probleme. Erstens setzt es voraus, dass mathematische Existenz dasselbe ist wie physikalische Existenz – eine unbewiesene metaphysische Gleichsetzung. Zweitens ist es grundsätzlich nicht prüfbar. Drittens untergräbt es sich selbst: Unter allen Strukturen, die Beobachter enthalten, müssten chaotische, unordentliche Welten die überwältigende Mehrheit sein. Dass wir in einer Welt mit wenigen, eleganten, über Milliarden Jahre stabilen Gesetzen leben, wäre dann ein extremer Zufall – genau das Rätsel, das die Hypothese lösen sollte.`,
              detail: `Tegmark vertritt die „Hypothese des mathematischen Universums" (*Our Mathematical Universe*, 2014): Die äußere Realität *ist* eine mathematische Struktur. Kritiker – auch säkulare – verweisen auf das Maßproblem: Ohne ein Wahrscheinlichkeitsmaß über alle Strukturen sagt die Hypothese nichts vorher; mit einem Maß müsste man begründen, warum gerade dieses gilt. Außerdem ist unklar, wie eine abstrakte Struktur Bewusstsein, Zeiterleben und Kausalität „hat". Christlich gesehen ist die mathematische Ordnung der Welt kein Ersatz für den Logos, sondern sein Abdruck.`,
              sources: [{ kind: 'gegner', author: 'Max Tegmark', work: 'Our Mathematical Universe: My Quest for the Ultimate Nature of Reality', year: '2014', quote: `Unsere physikalische Wirklichkeit sei nicht nur durch Mathematik beschrieben, sondern sei eine mathematische Struktur; alle mathematischen Strukturen existierten auch physikalisch (Level-IV-Multiversum).`, status: 'paraphrase' }],
              questionsBack: [`Wenn alle Strukturen existieren – warum leben wir dann in einer so geordneten statt in einer der unzähligen chaotischen Welten mit Beobachtern?`],
            },
          ],
        },
      ],
    },
    {
      id: 'wissenschaft-schweigt',
      objection: `Die Wissenschaft kann darüber nichts sagen. Also sollten wir schweigen, statt über ein „Davor" zu spekulieren.`,
      objectionBy: 'Neil deGrasse Tyson (agnostische Haltung)',
      answer: `Die Naturwissenschaft kann es vielleicht nicht – aber die Vernunft endet nicht dort, wo das Labor endet. Der Satz „Nur die Naturwissenschaft liefert Erkenntnis" ist selbst keine naturwissenschaftliche Erkenntnis. Außerdem forschen Penrose, Steinhardt und Carroll intensiv über ein mögliches Davor – sie halten die Frage offenkundig nicht für sinnlos.`,
      followUps: [
        {
          id: 'theologie-auch-unbeweisbar',
          objection: `Dann sind eure theologischen Antworten aber genauso unbeweisbar.`,
          objectionBy: 'Neil deGrasse Tyson',
          answer: `Nicht im Labor beweisbar – aber begründbar. Wir arbeiten mit Schlüssen auf die beste Erklärung: Kontingenz der Welt, Feinabstimmung, Verstehbarkeit, das Moralgesetz und die historische Evidenz für die Auferstehung Christi. Das ist dieselbe Art von Begründung, die Historiker, Juristen und auch Kosmologen bei einmaligen Ereignissen verwenden.`,
          followUps: [
            {
              id: 'beste-erklaerung-beliebig',
              objection: `„Schluss auf die beste Erklärung" klingt gut, aber bei dir ist die beste Erklärung zufällig immer Gott. Wer legt fest, was „beste" heißt?`,
              objectionBy: 'Victor Stenger',
              answer: `Dieselben Kriterien, mit denen Kosmologen die Dunkle Materie erschließen, die niemand je gesehen hat: Erklärungsreichweite, Erklärungskraft, Einfachheit, möglichst wenig Ad-hoc-Annahmen, Stimmigkeit mit dem übrigen Wissen. Du kannst prüfen, ob der Theismus diese Kriterien besser erfüllt als der Naturalismus – Punkt für Punkt: Dasein der Welt, Anfang, Feinabstimmung, Verstehbarkeit, Bewusstsein, Moral. Wenn der Naturalismus besser abschneidet, sag mir, wo.`,
              detail: `Die Kriterien gehen auf die Wissenschaftstheorie zurück (Peirce, Lipton, *Inference to the Best Explanation*, 2. Aufl. 2004). Entscheidend: Ein einzelnes Phänomen beweist wenig; die Stärke liegt in der *Konvergenz* vieler unabhängiger Phänomene, die unter einer Hypothese erwartbar, unter der anderen überraschend sind. So arbeitet auch die Kosmologie, wenn sie aus Rotationskurven, Gravitationslinsen und dem Mikrowellenhintergrund auf Dunkle Materie schließt.`,
              questionsBack: [`Welche Kriterien verwendest du, wenn du zwischen kosmologischen Modellen entscheidest, die man nicht direkt beobachten kann?`],
            },
          ],
        },
      ],
    },
    {
      id: 'zeit-emergent',
      objection: `In der Quantengravitation ist die Zeit wahrscheinlich gar nicht fundamental. Die Wheeler-DeWitt-Gleichung für das Universum als Ganzes enthält keine Zeitvariable; Zeit „entsteht" erst als Näherung. Wenn Zeit emergent ist, dann gibt es keinen echten Anfang – und deine Frage nach dem Davor oder der Ursache des Anfangs löst sich auf.`,
      objectionBy: 'Sean Carroll / Carlo Rovelli',
      answer: `Wenn Zeit emergent ist, dann entsteht sie *aus etwas* – aus einer tieferen, zeitlosen Ebene mit einem bestimmten Zustand und bestimmten Gesetzen. Damit verschwindet die Frage nicht, sie wird nur reiner: Warum gibt es diese zeitlose Ebene, und warum ist sie so beschaffen? Und das ist genau die Frage, die Augustinus und Thomas gestellt haben – nicht „Was war vorher?", sondern „Wovon hängt alles ab?". Eine Welt, in der die Zeit selbst etwas Abgeleitetes ist, passt erstaunlich gut zum christlichen Satz, dass Gott die Zeit mit der Welt geschaffen hat.`,
      detail: `Das „Problem der Zeit" in der Quantengravitation ist real: In der kanonischen Quantisierung der Allgemeinen Relativitätstheorie taucht in der Grundgleichung keine äußere Zeit auf; Zeit wird über Korrelationen zwischen Teilsystemen rekonstruiert (Page–Wootters-Mechanismus). Rovelli vertritt in *Die Ordnung der Zeit* (2018) eine solche relationale Sicht. Für die Theologie ist das kein Problem, sondern eher eine Bestätigung: Die Väter lehrten nie, dass Gott in einer vorher bestehenden Zeit handelt, sondern dass Zeit, Raum und Materie gemeinsam aus seinem Schöpfungswillen hervorgehen.`,
      voices: [
        { person: 'thomas-aquin', role: 'als Philosoph der Seinsabhängigkeit', text: `Thomas unterscheidet zwischen der Frage, ob die Welt einen zeitlichen Anfang hat, und der Frage, ob sie geschaffen ist. Schöpfung bedeutet für ihn die bleibende Abhängigkeit des Seins von Gott; sie wäre auch dann wahr, wenn die Welt keinen zeitlichen Anfang hätte (De aeternitate mundi). Eine emergente Zeit berührt diese Abhängigkeit nicht – sie betrifft nur die Form, in der das Geschöpf existiert.` },
      ],
      sources: [
        { kind: 'gegner', author: 'Carlo Rovelli', work: 'Die Ordnung der Zeit (L’ordine del tempo)', year: '2018', quote: `Auf der fundamentalen Ebene gebe es keine Zeitvariable; Zeit sei ein Phänomen, das aus Beziehungen und aus unserer unscharfen Sicht der Welt hervorgehe.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Thomas von Aquin', work: 'De aeternitate mundi', year: 'ca. 1270', quote: `Dass etwas von Gott verursacht ist und dennoch immer existiert hätte, ist kein Widerspruch; Schöpfung bedeutet Abhängigkeit im Sein.`, status: 'paraphrase' },
      ],
      questionsBack: [`Woraus emergiert die Zeit – und warum existiert diese tiefere Ebene überhaupt?`],
      followUps: [
        {
          id: 'zeitlose-ebene-ist-grundlage',
          objection: `Dann ist eben die zeitlose Quantenebene das Fundament. Sie braucht keinen Grund – sie ist einfach die tiefste Schicht der Wirklichkeit.`,
          objectionBy: 'Sean Carroll',
          answer: `Diese tiefste Schicht ist aber kein formloses „Sein", sondern etwas sehr Bestimmtes: ein bestimmter Zustandsraum, eine bestimmte Gleichung, ein bestimmter Quantenzustand unter unendlich vielen möglichen. Alles, was so spezifisch ist, hätte auch anders sein können. Ein guter letzter Grund muss etwas sein, das nicht anders sein kann – und eine Gleichung mit beliebig wählbaren Größen ist das gerade nicht.`,
          detail: `Die Wheeler-DeWitt-Gleichung hat unendlich viele Lösungen; um eine auszuwählen, braucht man eine Randbedingung (Hartle–Hawking, Vilenkin, Linde – die Vorschläge widersprechen sich). Wer also „die" Wellenfunktion des Universums zum Fundament erklärt, hat bereits eine Auswahl getroffen, die nicht aus der Gleichung folgt. Genau die Frage „Warum diese und nicht eine andere?" ist die Frage nach dem Grund.`,
          questionsBack: [`Hätte die Wellenfunktion des Universums auch anders aussehen können? Wenn ja – warum ist sie so, wie sie ist?`],
          followUps: [
            {
              id: 'warum-frage-unwissenschaftlich',
              objection: `Die Physik muss nicht jede Warum-Frage beantworten. Vielleicht gibt es auf „Warum gerade diese Gesetze?" schlicht keine Antwort. Zu erwarten, dass alles eine Erklärung hat, ist ein ästhetisches Vorurteil – genau das, was die Physik in die Irre geführt hat.`,
              objectionBy: 'Sabine Hossenfelder',
              answer: `Das ist eine ehrliche Position – aber sie ist bescheidener als die Ausgangsbehauptung. „Die Physik kann das nicht beantworten" ist etwas völlig anderes als „Die Frage ist sinnlos". Das Erste ist Agnostizismus und lässt Raum für philosophische und theologische Antworten. Das Zweite wäre eine starke These, für die man ein Argument bräuchte – und das gibt es nicht. Wenn du sagst: „Vielleicht gibt es keine Antwort", sage ich: Vielleicht gibt es eine, und dann prüfen wir, welche Kandidaten am meisten erklären.`,
              detail: `Hossenfelder kritisiert in *Lost in Math* (2018) zu Recht, dass Physiker Schönheit, Natürlichkeit und Eleganz oft als Wahrheitskriterien missbraucht haben. Daraus folgt aber nicht, dass die Frage nach dem Grund der Gesetze sinnlos ist; es folgt nur, dass die Physik sie nicht mit ihren eigenen Mitteln beantworten kann. Für den Laien ist das der entscheidende Punkt im Gespräch: Aus „Die Physik schweigt" wird oft unbemerkt „Es gibt nichts zu sagen".`,
              sources: [{ kind: 'gegner', author: 'Sabine Hossenfelder', work: 'Lost in Math: How Beauty Leads Physics Astray', year: '2018', quote: `Ästhetische Kriterien wie Natürlichkeit und Schönheit hätten die Grundlagenphysik in die Irre geführt; nicht jede Zahl in den Gesetzen müsse eine tiefere Erklärung haben.`, status: 'paraphrase' }],
              questionsBack: [`Sagst du, dass die Frage sinnlos ist – oder nur, dass die Physik sie nicht beantworten kann? Das sind zwei sehr verschiedene Behauptungen.`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn es vor dem Urknall keine Zeit gab – erklärt das, warum es überhaupt Zeit und Welt gibt?`,
    `Müssen Ursachen immer zeitlich früher sein? Was ist mit der Kugel auf dem Kissen?`,
    `Warum erforschen dann Penrose, Steinhardt und Carroll ein mögliches „Davor"?`,
    `Ist der Satz „Nur Naturwissenschaft liefert Erkenntnis" naturwissenschaftlich begründet?`,
  ],
  avoid: [
    `Gott als jemanden darstellen, der „vor dem Urknall" lange gewartet hat. Das ist nicht die Lehre der Kirche (Augustinus!).`,
    `Die Frage nach dem Davor zur Hauptsache machen. Die stärkere Frage ist die nach dem Grund des Daseins.`,
  ],
  concessions: [
    `Wenn die Zeit tatsächlich mit dem Urknall begann, ist die Frage nach einem zeitlichen Davor in der Tat ohne Gegenstand – das ist auch christliche Lehre.`,
    `Ob es physikalisch ein „Davor" gab, ist eine offene Frage; Christen müssen sich da nicht festlegen.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Confessiones, Buch XI', year: 'ca. 400', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Time and Eternity', year: '2001', status: 'paraphrase' },
    { kind: 'gegner', author: 'Adolf Grünbaum', work: '„The Pseudo-Problem of Creation in Physical Cosmology", Philosophy of Science 56', year: '1989', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Zeit', 'Augustinus', 'Kausalität', 'Urknall', 'Nordpol-Vergleich'],
  related: [
    'kosmologie/universum-aus-dem-nichts',
    'kosmologie/hawking-keine-grenze',
    'gottesbeweise/kontingenz-trugschluss',
    'gottesbeweise/kalam-widerlegt',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
  ],
};

export default claim;
