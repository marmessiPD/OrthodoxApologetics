import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nur-christ-wegen-geburt',
  title: `„Du bist nur Christ, weil du in einer christlichen Familie geboren wurdest."`,
  proponents: [
    { name: 'John Hick', role: 'Religionsphilosoph (1922–2012)', work: 'An Interpretation of Religion (1989); Aufsätze zum Geburtsort-Argument' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (Der Gotteswahn, 2006), Kap. 9' },
    { name: 'John W. Loftus', role: 'Ehemaliger Prediger, atheistischer Autor', work: 'The Outsider Test for Faith (2013)' },
  ],
  steelman: `Die Religion eines Menschen hängt fast vollständig davon ab, wo er geboren wurde. Wer in Saudi-Arabien aufwächst, wird Muslim; in Thailand Buddhist; in Indien Hindu; in einer koptischen Familie in Oberägypten koptischer Christ. John Hick schätzte, dass dies in vielleicht 99 Prozent der Fälle so ist. Deine Überzeugung, ausgerechnet deine Religion sei die wahre, ist also nicht das Ergebnis unabhängiger Prüfung, sondern ein Produkt deiner Erziehung. Die Gründe, die du anführst, sind nachträgliche Rechtfertigungen. Ehrlich wäre es, den „Außenseitertest" zu machen: Prüfe deinen Glauben mit derselben Skepsis, mit der du die Religionen der anderen prüfst – dann bleibt nichts übrig.`,
  biblical: {
    summary: `Die Bibel selbst lehnt einen bloß ererbten Glauben ab. Johannes der Täufer warnt: „Denkt nur nicht, ihr könntet sagen: Wir haben Abraham zum Vater" (Mt 3,9). Kinder Gottes werden „nicht aus dem Geblüt … sondern von Gott geboren" (Joh 1,12–13); Jesus fordert eine Neugeburt (Joh 3,3). Josua stellt das ganze Volk vor die Wahl: „Erwählt euch heute, wem ihr dienen wollt" (Jos 24,15). Die Christen in Beröa prüften täglich die Schrift, „ob sich's also verhielte" (Apg 17,11), und Paulus fordert: „Prüfet aber alles" (1 Thess 5,21). Das Christentum entstand nicht durch Geburt, sondern durch Bekehrung von Juden und Heiden.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '3,9', quote: `Denket nur nicht, daß ihr bei euch wollt sagen: Wir haben Abraham zum Vater. Ich sage euch: Gott vermag dem Abraham aus diesen Steinen Kinder zu erwecken.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,12–13', quote: `Wie viele ihn aber aufnahmen, denen gab er Macht, Gottes Kinder zu werden, die an seinen Namen glauben; welche nicht von dem Geblüt noch von dem Willen des Fleisches noch von dem Willen eines Mannes, sondern von Gott geboren sind.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Josua', ref: '24,15', quote: `Gefällt es euch aber nicht, daß ihr dem HERRN dienet, so erwählt euch heute, welchem ihr dienen wollt … Ich aber und mein Haus wollen dem HERRN dienen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,11', quote: `…die nahmen das Wort auf ganz williglich und forschten täglich in der Schrift, ob sich's also verhielte.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die koptische Kirche ist ererbter Glaube nie bloße Gewohnheit gewesen. Seit dem 7. Jahrhundert hätte ein Übertritt zum Islam vielen Kopten steuerliche und gesellschaftliche Vorteile gebracht; Millionen blieben dennoch Christen – bis heute oft unter Benachteiligung und Gefahr. Viele Kopten tragen ein eintätowiertes Kreuz am Handgelenk als bewusstes, lebenslanges Bekenntnis. Die Kindertaufe ist für die Kirche der Anfang eines Weges, den jeder Gläubige in Katechese, Beichte, Eucharistie und persönlichem Gebet selbst gehen und bejahen muss. Die 21 Märtyrer von Libyen (2015) bekannten Christus persönlich, im Angesicht des Todes.`,
    sources: [
      { kind: 'koptisch', work: 'Koptische Tradition des Kreuz-Tattoos am Handgelenk', status: 'paraphrase', quote: `Viele koptische Christen lassen sich als Zeichen ihres bleibenden Bekenntnisses ein kleines Kreuz auf das Handgelenk tätowieren.` },
      { kind: 'koptisch', work: 'Synaxarium und Gedächtnis der Märtyrer von Libyen', year: '2015', status: 'paraphrase', quote: `Die 2015 in Libyen ermordeten Christen wurden von Papst Tawadros II. ins koptische Synaxarium aufgenommen; ihr Gedenktag ist der 8. Amschir (15. Februar).`, note: 'Geprüft 2026: Papst Tawadros II. nahm die 21 Märtyrer am 21. Februar 2015 ins Synaxarium auf; Gedenktag 8. Amschir = 15. Februar (zugleich Fest der Darstellung des Herrn). Der Heilige Synod erklärte 2017 den 15. Februar zum jährlichen Gedenktag aller Märtyrer der Gegenwart; seit 2023 steht ihr Gedächtnis auch im römischen Martyrologium.' },
    ],
  },
  quickAnswer: `Wahrscheinlich hätte ich anderswo andere Überzeugungen – aber das sagt, wie ich zu meinem Glauben kam, nicht, ob er wahr ist. Kinder von Mathematikern lernen früher rechnen; die Mathematik wird dadurch nicht falsch. Außerdem trifft das Argument auch dich: Wärst du im mittelalterlichen Frankreich oder in einem Dorf in Oberägypten geboren, wärst du vermutlich kein säkularer Pluralist. Die eigentliche Frage ist: Gibt es gute Gründe? Ich bin bereit, meinen Glauben mit derselben Sorgfalt zu prüfen wie jeden anderen – lass uns mit der Auferstehung anfangen.`,
  keyPoints: [
    `**Genetischer Fehlschluss:** Die Entstehung einer Überzeugung entscheidet nicht über ihre Wahrheit.`,
    `**Das Argument trifft alle:** Auch säkulare und pluralistische Überzeugungen hängen stark von Zeit und Ort ab (Plantinga). Wenn das Argument meinen Glauben entwertet, entwertet es auch den des Kritikers.`,
    `**Die Statistik ist nicht total:** Millionen Menschen konvertieren; das Christentum ist die kulturell vielfältigste Weltreligion und hat sich gerade durch Bekehrung ausgebreitet.`,
    `**Bekehrung gegen den eigenen Vorteil:** Frühe Christen unter Verfolgung, Kopten über 14 Jahrhunderte, Konvertiten wie Sundar Singh oder Paul Williams – soziale Erklärungen reichen nicht aus.`,
    `**Die Bibel verlangt persönlichen Glauben:** Mt 3,9; Joh 1,12–13; Jos 24,15 – ererbte Zugehörigkeit rettet nicht.`,
    `**Außenseitertest – gern, aber konsequent:** Das Christentum lädt zur Prüfung ein (Lk 1,1–4; 1 Kor 15,3–8) – derselbe Maßstab gilt dann aber auch für den Naturalismus.`,
  ],
  voices: [
    {
      person: 'plantinga',
      role: 'als Erkenntnistheoretiker',
      text: `Alvin Plantinga hat das Geburtsort-Argument auf seinen Urheber zurückgewendet: Es stimmt, dass ein in Marokko geborener Mensch vermutlich Muslim wäre. Aber dasselbe gilt für den Pluralisten: Wäre er in Madagaskar oder im mittelalterlichen Frankreich geboren, wäre er wahrscheinlich kein Pluralist. Wenn die Abhängigkeit vom Geburtsort eine Überzeugung unglaubwürdig macht, dann auch die des Kritikers. Das Argument beweist entweder zu viel oder nichts.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Pluralism: A Defense of Religious Exclusivism, in: T. D. Senor (Hg.), The Rationality of Belief and the Plurality of Faith', year: '1995', status: 'paraphrase', quote: `Wäre der Pluralist in Madagaskar oder im mittelalterlichen Frankreich geboren, wäre er wahrscheinlich kein Pluralist.` },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als ehemaliger Atheist',
      text: `C. S. Lewis wurde zwar in einer kirchlichen Familie in Belfast getauft, verlor aber als Jugendlicher den Glauben und war über Jahre überzeugter Atheist. Seine Rückkehr zum Glauben war kein Nachgeben gegenüber Erziehung, sondern das Ergebnis eines langen intellektuellen Ringens – gegen seinen eigenen Willen. Er beschreibt sich selbst als den „niedergeschlagensten und widerwilligsten Bekehrten in ganz England".`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Surprised by Joy (dt. Überrascht von Freude)', ref: 'Kap. 14', year: '1955', original: 'In the Trinity Term of 1929 I gave in, and admitted that God was God, and knelt and prayed: perhaps, that night, the most dejected and reluctant convert in all England.', quote: `Im Sommertrimester 1929 gab ich nach, gab zu, dass Gott Gott ist, kniete nieder und betete – vielleicht in jener Nacht der niedergeschlagenste und widerwilligste Bekehrte in ganz England.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'sundar-singh',
      role: 'als Konvertit aus einer Sikh-Familie',
      text: `Sundar Singh wurde nicht durch seine Herkunft Christ, sondern gegen sie: Er wuchs in einer angesehenen Sikh-Familie auf, verbrannte als Jugendlicher demonstrativ eine Bibel und wurde nach seiner Bekehrung von seiner Familie verstoßen. Sein Leben ist ein Gegenbeispiel zur These, Religion sei bloß Prägung durch das Elternhaus.`,
      sources: [
        { kind: 'fachliteratur', author: 'B. H. Streeter / A. J. Appasamy', work: 'The Sadhu', year: '1921', status: 'paraphrase' },
      ],
    },
    {
      person: 'paul-williams',
      role: 'als Wissenschaftler, der zweimal die Religion wechselte',
      text: `Paul Williams wuchs in England im christlichen Umfeld auf, wurde als junger Mann Buddhist, praktizierte und lehrte rund zwanzig Jahre tibetischen Buddhismus – und wurde dann aus philosophischen Gründen katholischer Christ. Sein Weg zeigt, dass Menschen ihre Überzeugungen aufgrund von Gründen ändern, und zwar in verschiedene Richtungen. Er legte seine Gründe offen dar, damit andere sie prüfen können.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul Williams', work: 'The Unexpected Way', year: '2002', status: 'paraphrase' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Konvertit wider Willen',
      text: `Paulus ist das Urbild des Konvertiten: Als frommer Pharisäer erzogen und eifriger Verfolger der Gemeinde, wurde er durch die Begegnung mit dem Auferstandenen zum Apostel (Gal 1,13–16; Phil 3,4–8). Seine Herkunft hätte ihn vom Christentum fernhalten müssen. Für ihn beruht der Glaube nicht auf Abstammung, sondern auf einem Ereignis, für das er Zeugen benennen kann (1 Kor 15,3–8).`,
      sources: [
        { kind: 'bibel', work: 'Galater', ref: '1,13', quote: `Denn ihr habt ja wohl gehört meinen Wandel weiland im Judentum, wie ich über die Maßen die Gemeinde Gottes verfolgte und sie verstörte …`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
  ],
  dialog: [
    {
      id: 'saudi-arabien-indien',
      objection: `Wärst du in Saudi-Arabien geboren, wärst du Muslim; in Indien Hindu. Du bist nur Christ, weil deine Eltern Christen sind.`,
      objectionBy: 'Richard Dawkins',
      answer: `Wahrscheinlich hätte ich anderswo andere Überzeugungen – zugegeben. Aber das erklärt, **wie** ich zu meinem Glauben kam, nicht **ob** er wahr ist. Kinder von Mathematikern lernen früher rechnen; die Mathematik wird dadurch nicht falsch. Die entscheidende Frage ist: Gibt es gute Gründe für den christlichen Glauben – unabhängig davon, wo ich ihn kennengelernt habe?`,
      followUps: [
        {
          id: 'gruende-rationalisierung',
          objection: `Aber das zeigt, dass deine Gründe nur nachträgliche Rationalisierungen sind.`,
          objectionBy: 'John W. Loftus',
          answer: `Das müsste man zeigen, nicht einfach annehmen. Und es trifft dich genauso: Wärst du im mittelalterlichen Frankreich oder in einem Dorf in Oberägypten geboren, wärst du vermutlich kein säkularer Skeptiker. Auch deine Sicht ist kulturell geprägt. Wenn das Argument meinen Glauben entwertet, entwertet es auch deinen Unglauben (Plantinga).`,
          followUps: [
            {
              id: 'skepsis-methodisch',
              objection: `Mein Skeptizismus ist aber methodisch. Ich folge der Evidenz, nicht meiner Erziehung.`,
              objectionBy: 'John W. Loftus',
              answer: `Gut – dann folgen wir der Evidenz gemeinsam: den historischen Belegen für Jesu Tod und Auferstehung, der Frage, warum es überhaupt etwas gibt, der Existenz von Bewusstsein und Moral. Ich bin bereit, meinen Glauben mit derselben Sorgfalt zu prüfen wie andere – die Bibel selbst verlangt das (1 Thess 5,21). Aber dann prüfen wir den Naturalismus mit demselben Maßstab.`,
              questionsBack: [`Hast du deinen eigenen Naturalismus schon einmal mit derselben Skepsis geprüft, die du auf Religionen anwendest?`],
              followUps: [
                {
                  id: 'aussergewoehnliche-belege',
                  objection: `Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege. Ein paar antike Berichte von Anhängern reichen für eine Totenauferweckung einfach nicht aus.`,
                  objectionBy: 'Sam Harris (sinngemäß)',
                  answer: `Der Satz klingt gut, ist aber unklar. Was eine Behauptung „außergewöhnlich" macht, hängt von deinem Hintergrundwissen ab: Wenn es keinen Gott gibt, ist eine Auferweckung extrem unwahrscheinlich; wenn es einen Gott gibt, der sich offenbaren will, ist sie genau das, was man erwarten könnte. Darum gehören die Gottesfrage und die historische Frage zusammen. Und die Belege sind nicht „ein paar Berichte von Anhängern": Darunter sind ein früherer Verfolger, ein skeptischer Bruder und ein Bekenntnis aus den ersten Jahren.`,
                  detail: `Richard Swinburne hat das Problem mit Wahrscheinlichkeitsrechnung durchdacht: Die Wahrscheinlichkeit der Auferstehung hängt einerseits von den historischen Belegen ab, andererseits von der Vorwahrscheinlichkeit, dass Gott existiert und Mensch wird. Wer diese Vorwahrscheinlichkeit nicht von vornherein auf null setzt, kommt bei den bekannten Fakten zu einer erstaunlich hohen Gesamtwahrscheinlichkeit.

Auch im Alltag akzeptieren wir einmalige, unwahrscheinliche Ereignisse auf gute Zeugnisse hin – einen Lottogewinn, eine extrem seltene Genesung. Seltenheit allein ist kein Gegenargument. Entscheidend ist, welche Erklärung die Gesamtheit der Fakten am besten erfasst.`,
                  voices: [
                    { person: 'swinburne', role: 'als Religionsphilosoph', text: `Swinburne argumentiert, dass die Hintergrundwahrscheinlichkeit für die Existenz Gottes und für eine Menschwerdung in die Bewertung der historischen Belege einfließen muss. Kombiniert mit den Zeugnissen über das leere Grab und die Erscheinungen ergibt sich für ihn eine hohe Wahrscheinlichkeit der Auferstehung.`, sources: [
                      { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Resurrection of God Incarnate', year: '2003', status: 'paraphrase', quote: `Die Auferstehung ist unter Berücksichtigung der Hintergrundwahrscheinlichkeit, dass Gott existiert und Mensch wird, hochwahrscheinlich.` },
                    ] },
                  ],
                  questionsBack: [`Wie hoch ist für dich die Wahrscheinlichkeit, dass es einen Gott gibt – und hast du sie vor oder nach der Prüfung der Belege festgelegt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'statistik-99-prozent',
      objection: `Die Statistik ist eindeutig: In vielleicht 99 Prozent der Fälle hängt die Religion vom Geburtsort ab.`,
      objectionBy: 'John Hick',
      answer: `Der Zusammenhang ist stark, aber nicht total. Millionen Menschen konvertieren; das Christentum ist heute die kulturell und geografisch vielfältigste Religion. In Afrika südlich der Sahara stieg der Anteil der Christen im 20. Jahrhundert von etwa einem Zehntel auf eine deutliche Mehrheit. Die frühe Kirche wuchs ausschließlich durch Bekehrung. Wenn der Geburtsort alles bestimmte, hätte sich das Christentum nie aus Palästina hinaus verbreitet.`,
      sources: [
        { kind: 'gegner', author: 'John Hick', work: '„Can There Be Only One True Religion?", in: Bahá\'í Studies Review', year: 'ca. 2001/2002', status: 'paraphrase', quote: `Die Religion, der ein Mensch anhängt und die ihm so offensichtlich wahr erscheint, hängt in vielleicht 99 % der Fälle davon ab, wo er zufällig geboren wurde.`, original: 'depends in perhaps 99% of cases on …', note: 'Geprüft 2026: Formulierung „in perhaps 99% of cases" in diesem (als Vortrag nachgedruckten) Beitrag bestätigt. Eine ähnliche Fassung („in some ninety-nine per cent of cases … depends upon the accidents of birth") wird aus Hicks Büchern zitiert; deren Seite ist nicht geprüft. Andere Wiedergaben nennen 95 % – im Gespräch daher „fast immer" sagen.' },
        { kind: 'fachliteratur', author: 'Pew Research Center', work: 'Global Christianity: A Report on the Size and Distribution of the World\'s Christian Population', year: '2011', status: 'paraphrase', quote: `Anteil der Christen in Afrika südlich der Sahara: um 1910 etwa 9 %, um 2010 etwa 63 %.` },
        { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase', quote: `Das frühe Christentum wuchs durch Bekehrung über persönliche Netzwerke um geschätzt rund 40 % pro Jahrzehnt.` },
      ],
      followUps: [
        {
          id: 'bekehrung-sozial',
          objection: `Auch Bekehrungen folgen sozialen Faktoren – Kolonialismus, Mission, materielle Vorteile.`,
          objectionBy: 'Richard Dawkins (sinngemäß)',
          answer: `Manche, ja. Aber viele Menschen haben gegen ihren eigenen Vorteil geglaubt: die frühen Christen unter Verfolgung; Konvertiten, die heute ihr Leben riskieren; Sundar Singh, den seine Familie verstieß. Und die Kopten blieben 14 Jahrhunderte lang Christen, obwohl ein Übertritt zum Islam steuerliche und gesellschaftliche Vorteile gebracht hätte. Soziale Erklärungen reichen nicht für alles.`,
          followUps: [
            {
              id: 'kopten-gruppenidentitaet',
              objection: `Auch die Kopten bleiben doch aus Familientradition und Gruppenidentität Christen.`,
              objectionBy: 'Richard Dawkins (sinngemäß)',
              answer: `Teilweise – Identität spielt eine Rolle. Aber die Entscheidung, unter Benachteiligung, Anschlägen und Lebensgefahr Christ zu bleiben, wird persönlich immer neu getroffen. Die Märtyrer von Libyen bekannten 2015 im Angesicht des Todes Christus. Ererbter Glaube kann zu eigenem Glauben werden. Und noch einmal: Das Motiv entscheidet nicht über die Wahrheit.`,
              followUps: [
                {
                  id: 'maertyrer-gibt-es-ueberall',
                  objection: `Märtyrer gibt es in jeder Religion. Auch Selbstmordattentäter sterben für ihren Glauben. Die Bereitschaft zu sterben beweist nur Überzeugung, nicht Wahrheit.`,
                  objectionBy: 'Sam Harris (sinngemäß)',
                  answer: `Da hast du recht: Sterben beweist nicht, dass der Glaube wahr ist. Aber zwei Unterschiede sind wichtig. Erstens: Ein christlicher Märtyrer tötet nicht, sondern stirbt und betet für seine Mörder – das ist das Gegenteil eines Attentäters. Zweitens: Die Apostel starben nicht für etwas, das sie von anderen gehört hatten, sondern für das, was sie nach eigenem Zeugnis selbst gesehen hatten. Menschen sterben für Lügen, die sie für wahr halten – aber kaum für eine Lüge, von der sie wissen, dass sie eine ist.`,
                  detail: `Für unser Thema – „Du bist nur Christ wegen deiner Geburt" – geht es um etwas anderes: Die Treue unter Druck zeigt, dass ererbter Glaube zu persönlich verantwortetem Glauben werden kann. Die 21 Männer, die 2015 in Libyen ermordet wurden, hätten durch Verleugnung ihr Leben retten können. Ihre Familien haben öffentlich vergeben. Das beweist nicht die Wahrheit des Christentums, aber es widerlegt die Unterstellung, ihr Glaube sei bloße Gewohnheit gewesen.

Was die Wahrheitsfrage betrifft, verweist das Christentum nicht auf die Opferbereitschaft, sondern auf die Auferstehung. Die Bereitschaft der ersten Zeugen zu leiden ist dabei ein Indiz für ihre Aufrichtigkeit – nicht mehr, aber auch nicht weniger.`,
                  sources: [
                    { kind: 'bibel', work: 'Apostelgeschichte', ref: '7,59–60', status: 'paraphrase', quote: `Stephanus betete, während sie ihn steinigten: Herr Jesus, nimm meinen Geist auf! Herr, behalte ihnen diese Sünde nicht!` },
                  ],
                  questionsBack: [`Siehst du einen Unterschied zwischen jemandem, der tötet, um für seinen Glauben zu sterben, und jemandem, der stirbt und für seine Mörder betet?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'aussenseitertest',
      objection: `Mach den Außenseitertest: Prüfe deinen Glauben mit derselben Skepsis, mit der du den Islam oder den Hinduismus prüfst.`,
      objectionBy: 'John W. Loftus',
      answer: `Sehr gern. Das Christentum lädt zur Prüfung ein: Lukas will genau erkunden, was geschehen ist (Lk 1,1–4), Paulus nennt Zeugen der Auferstehung, die man befragen konnte (1 Kor 15,3–8). Prüfen wir mit gleichen Maßstäben: historische Belege, innere Stimmigkeit, Erklärungskraft. Konsequenz heißt dann aber, auch den Naturalismus dem Außenseitertest zu unterziehen – etwa in den Fragen nach Bewusstsein, Moral und dem Ursprung des Universums.`,
      sources: [
        { kind: 'gegner', author: 'John W. Loftus', work: 'The Outsider Test for Faith: How to Know Which Religion Is True', year: '2013', status: 'paraphrase', quote: `Gläubige sollen ihren eigenen Glauben mit derselben Skepsis prüfen, die sie anderen Religionen entgegenbringen.` },
      ],
      followUps: [
        {
          id: 'jede-religion-besteht',
          objection: `Jede Religion glaubt doch, dass sie den Test besteht.`,
          objectionBy: 'John W. Loftus',
          answer: `Mag sein – dann lass uns den Test tatsächlich durchführen, statt ihn nur zu behaupten. Das Christentum hat dabei einen Vorteil: Es gründet auf öffentlichen, geschichtlichen Ereignissen, nicht nur auf privater Offenbarung. Gerade das macht es überprüfbar. Wenn Jesus nicht auferstanden ist, ist unser Glaube vergeblich (1 Kor 15,17) – das ist ein ehrliches Angebot zur Falsifikation.`,
          followUps: [
            {
              id: 'epistemische-paritaet',
              objection: `Gläubige anderer Religionen haben ebenso Gründe, Erfahrungen und kluge Denker wie du. Wenn gleich intelligente, gleich aufrichtige Menschen zu entgegengesetzten Ergebnissen kommen, ist die einzig redliche Haltung, sich des Urteils zu enthalten.`,
              objectionBy: 'John Hick (sinngemäß)',
              answer: `Wenn das gälte, müsstest du dich auch beim Pluralismus enthalten – denn gleich kluge Christen, Muslime und Buddhisten lehnen ihn ab. Uneinigkeit unter klugen Menschen gibt es in jeder großen Frage: in der Politik, in der Ethik, in der Philosophie. Daraus folgt nicht, dass niemand mehr urteilen darf, sondern dass man sorgfältig und demütig urteilen soll. Und man kann Gründe vergleichen: Ein öffentliches Ereignis mit Zeugen wiegt anders als eine private Erleuchtung.`,
              detail: `Alvin Plantinga hat gezeigt, dass das Wissen um Andersdenkende einen nicht zwingt, die eigene Überzeugung aufzugeben. Wer nach gründlicher Überlegung zu dem Schluss kommt, dass seine Gründe überzeugen, und die anderen Positionen ernsthaft geprüft hat, handelt nicht willkürlich, wenn er bei seiner Sicht bleibt. Der Pluralist tut übrigens genau dasselbe: Er kennt die Einwände der Exklusivisten und bleibt trotzdem Pluralist.

Die Urteilsenthaltung, die Hick empfiehlt, wäre außerdem selbst eine weitreichende Position – eine Art Agnostizismus, den die meisten Menschen der Welt nicht teilen.`,
              voices: [
                { person: 'plantinga', role: 'als Erkenntnistheoretiker', text: `Plantinga prüft den Vorwurf, Exklusivismus sei angesichts religiöser Vielfalt intellektuell unredlich. Er zeigt, dass der Vorwurf sich selbst trifft: Auch die Enthaltung oder der Pluralismus ist eine Position, die andere ablehnen. Es gibt keinen neutralen Ort außerhalb aller Überzeugungen.`, sources: [
                  { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'A Defense of Religious Exclusivism, in: T. Senor (Hg.), The Rationality of Belief and the Plurality of Faith', year: '1995', status: 'paraphrase', quote: `Exklusivismus ist nicht notwendig irrational oder arrogant; auch Pluralismus und Enthaltung sind Positionen mit Ausschlusscharakter.` },
                ] },
              ],
              questionsBack: [`Kluge Menschen widersprechen deinem Pluralismus – enthältst du dich deshalb auch in dieser Frage?`],
            },
          ],
        },
      ],
    },
    {
      id: 'kinder-indoktriniert',
      objection: `Kinder werden indoktriniert. Sie können gar nicht frei wählen.`,
      objectionBy: 'Richard Dawkins',
      answer: `Jedes Kind wächst mit einer Weltanschauung auf – auch ein säkular erzogenes. Kindern die eigenen Überzeugungen weiterzugeben, ist keine Indoktrination, solange Fragen erlaubt sind und Freiheit geachtet wird. Und die Bibel ruft jeden Menschen zur persönlichen Entscheidung: „Erwählt euch heute, wem ihr dienen wollt" (Jos 24,15); Abstammung von Abraham rettet niemanden (Mt 3,9).`,
      sources: [
        { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', ref: 'Kap. 9', year: '2006', status: 'paraphrase', quote: `Kritik daran, Kinder nach der Religion ihrer Eltern als „christliche" oder „muslimische" Kinder zu bezeichnen.` },
      ],
      followUps: [
        {
          id: 'kindertaufe-vorweggenommen',
          objection: `Die Kindertaufe zeigt doch, dass ihr die Entscheidung vorwegnehmt.`,
          objectionBy: 'Richard Dawkins (sinngemäß)',
          answer: `Die Taufe ist Gottes Geschenk und ein Anfang, kein Ende. Das Kind wächst im Glauben, lernt ihn kennen und eignet ihn sich an – in Katechese, Beichte, Eucharistie und eigenem Gebet. Eltern treffen auch sonst unzählige Entscheidungen für ihre Kinder: Sprache, Medizin, Bildung. Die Freiheit bleibt: Jeder kann gehen. In Ägypten hätten viele gute weltliche Gründe gehabt, es zu tun – und sind geblieben.`,
        },
      ],
    },
    {
      id: 'religion-kognitives-nebenprodukt',
      objection: `Die kognitive Religionswissenschaft erklärt längst, warum Menschen überall glauben: Unser Gehirn erkennt hyperaktiv Absichten hinter Ereignissen und sieht überall Planer. Religion ist ein Nebenprodukt dieser Mechanismen – darum glauben Kinder in jeder Kultur „von selbst".`,
      objectionBy: 'Sam Harris (nach Pascal Boyer)',
      answer: `Interessant: Einer der Begründer dieses Forschungsfelds, Justin Barrett, ist selbst Christ – und sagt, dass seine Forschung den Glauben nicht widerlegt. Wenn Gott Menschen so geschaffen hat, dass sie natürlicherweise nach ihm fragen, dann würde man genau diese Befunde erwarten. Paulus sagt, dass das Wissen um Gott allen Menschen ins Herz gelegt ist (Röm 1,19–20). Zu erklären, **wie** ein Glaube entsteht, entscheidet nicht, **ob** er wahr ist.`,
      detail: `Die kognitive Religionswissenschaft zeigt, dass Kinder früh dazu neigen, die Welt als geplant und zweckvoll zu sehen, und dass sie an unsichtbare handelnde Wesen glauben. Justin Barrett spricht von „geborenen Gläubigen". Für das Argument „du bist nur Christ wegen deiner Geburt" ist das ein zweischneidiges Schwert: Wenn der Glaube an Gott natürlich ist, dann ist eher der Atheismus erklärungsbedürftig, der gegen diese Neigung ankämpfen muss.

Der Mechanismus erklärt außerdem nur eine allgemeine Offenheit für Übernatürliches, nicht die konkreten Inhalte einer Religion – etwa, dass ein bestimmter Jude unter Pontius Pilatus gekreuzigt wurde und auferstand. Diese Inhalte muss man historisch prüfen.`,
      voices: [
        { person: 'justin-barrett', role: 'als kognitiver Religionswissenschaftler', text: `Barrett hat gezeigt, dass Kinder in verschiedenen Kulturen eine natürliche Neigung zu religiösen Vorstellungen haben. Er betont, dass diese Befunde nichts über die Wahrheit des Glaubens entscheiden: Auch unsere Fähigkeit zu rechnen oder andere Personen zu erkennen hat natürliche Grundlagen, ohne dass Mathematik oder Mitmenschen deshalb Illusionen wären.`, sources: [
          { kind: 'wissenschaft', author: 'Justin L. Barrett', work: 'Born Believers: The Science of Children\'s Religious Belief', year: '2012', status: 'paraphrase', quote: `Kinder sind von Natur aus für religiöse Vorstellungen offen; das widerlegt den Glauben nicht.` },
        ] },
      ],
      sources: [
        { kind: 'gegner', author: 'Pascal Boyer', work: 'Religion Explained: The Evolutionary Origins of Religious Thought', year: '2001', status: 'paraphrase', quote: `Religiöse Vorstellungen als Nebenprodukt allgemeiner kognitiver Mechanismen.` },
      ],
      followUps: [
        {
          id: 'mechanismus-falsch-positiv',
          objection: `Aber der Mechanismus erzeugt nachweislich systematisch falsche Treffer: Geister im Rascheln der Blätter, Götter hinter dem Donner. Ein so unzuverlässiger Detektor kann keinen Glauben rechtfertigen.`,
          objectionBy: 'Sam Harris (sinngemäß)',
          answer: `Ein Rauchmelder, der manchmal beim Toasten piept, ist nicht wertlos – er schlägt auch an, wenn es wirklich brennt. Dass ein Detektor Fehlalarme gibt, beweist nicht, dass es kein Feuer gibt. Außerdem gilt: Wenn alle unsere Denkfähigkeiten nur Produkte ungelenkter Evolution wären, die auf Überleben statt auf Wahrheit zielen, dann hätten wir auch keinen Grund, unserem Urteil „es gibt keinen Gott" zu trauen. Das Argument sägt am eigenen Ast.`,
          questionsBack: [`Wenn ein Detektor manchmal falsch anschlägt – folgt daraus, dass er nie richtig anschlägt?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn mein Glaube unglaubwürdig ist, weil er von meiner Herkunft abhängt – gilt das nicht auch für deine Überzeugungen?`,
    `Wie erklärst du Menschen, die gegen ihre Herkunft und ihren Vorteil Christen wurden?`,
    `Wollen wir den Außenseitertest gemeinsam machen – für meinen Glauben und für deinen Naturalismus?`,
    `Entscheidet die Entstehung einer Überzeugung über ihre Wahrheit?`,
  ],
  avoid: [
    `Bestreite nicht, dass Herkunft und Erziehung eine große Rolle spielen – das wäre unehrlich.`,
    `Behaupte nicht, du wärst „auch in Saudi-Arabien Christ geworden" – das weißt du nicht.`,
    `Verwende Konversionsstatistiken nicht triumphalistisch; Menschen verlassen auch das Christentum.`,
  ],
  concessions: [
    `Herkunft und Erziehung prägen die Religionszugehörigkeit tatsächlich sehr stark – auch bei Christen.`,
    `Viele Christen haben ihren Glauben nie persönlich geprüft; der Einwand ist eine berechtigte Herausforderung, den eigenen Glauben zu durchdenken.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Pluralism: A Defense of Religious Exclusivism', year: '1995', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Überrascht von Freude (Surprised by Joy)', year: '1955', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Geburtsort-Argument', 'genetischer Fehlschluss', 'Außenseitertest', 'Bekehrung', 'Plantinga'],
  related: [
    'kognitive-religionswissenschaft/kinder-indoktrination',
    'pluralismus/alle-religionen-gleich-wahr',
    'pluralismus/nie-von-jesus-gehoert',
    'auferstehung/halluzinationen',
    'atheismus/ein-gott-weiter',
  ],
};

export default claim;
