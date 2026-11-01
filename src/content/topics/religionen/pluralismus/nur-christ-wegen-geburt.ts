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
