import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'reinkarnation-in-der-bibel',
  title: `„Die Bibel lehrte ursprünglich Reinkarnation."`,
  proponents: [
    { name: 'Shirley MacLaine', role: 'Schauspielerin und New-Age-Autorin', work: 'Out on a Limb (1983)' },
    { name: 'Edgar Cayce', role: 'Amerikanisches Medium (1877–1945)', work: 'Trance-„Readings" über frühere Leben' },
    { name: 'Rudolf Steiner', role: 'Begründer der Anthroposophie', work: 'Reinkarnation und Karma (Vorträge, ab 1903)' },
    { name: 'Ian Stevenson', role: 'Psychiater, University of Virginia (1918–2007)', work: 'Twenty Cases Suggestive of Reincarnation (1966)' },
    { name: 'Allan Kardec', role: 'Begründer des Spiritismus (1804–1869)', work: 'Le Livre des Esprits (1857)' },
  ],
  steelman: `Jesus sagt über Johannes den Täufer: „Er ist Elia, der da kommen soll" (Mt 11,14), und nach der Verklärung: „Elia ist schon gekommen" – und die Jünger verstanden, dass er von Johannes sprach (Mt 17,12–13). Die Leute hielten Jesus für den wiedergekommenen Elia, Jeremia oder einen der Propheten (Mt 16,14). Die Jünger fragten bei einem Blindgeborenen: „Wer hat gesündigt, dieser oder seine Eltern?" (Joh 9,2) – wie könnte er vor seiner Geburt gesündigt haben, wenn nicht in einem früheren Leben? Gott sagt zu Jeremia: „Ich kannte dich, ehe ich dich im Mutterleib bereitete" (Jer 1,5). Der jüdische Historiker Josephus berichtet, die Pharisäer glaubten, die Seelen der Guten gingen in andere Leiber über. Die jüdische Kabbala kennt die Seelenwanderung (*Gilgul*), und Origenes lehrte die Präexistenz der Seelen. Erst das Konzil von Konstantinopel 553 verurteilte diese Lehren, und seitdem wurde die Reinkarnation aus dem Christentum verdrängt. Reinkarnation ist auch gerechter: Sie erklärt, warum manche Kinder krank oder arm geboren werden. Der Psychiater Ian Stevenson hat Hunderte Fälle von Kindern dokumentiert, die sich an frühere Leben zu erinnern schienen.`,
  biblical: {
    summary: `Johannes der Täufer wurde gefragt: „Bist du Elia?" – und er antwortete: „Ich bin's nicht" (Joh 1,21). Der Engel hatte angekündigt, er werde gehen „im **Geist und Kraft** Elias" (Lk 1,17) – das ist die Erfüllung von Mal 3,23 im Sinn einer Sendung, nicht einer Seelenwanderung. Dieselbe Sprache gebraucht das Alte Testament für Elisa: „Der Geist Elias ruht auf Elisa" (2 Kön 2,15) – während Elia lebte bzw. gerade entrückt worden war. Elia ist zudem **nicht gestorben** (2 Kön 2,11), konnte also nicht wiedergeboren werden, und bei der Verklärung – nach dem Tod des Täufers – erscheint Elia als Elia (Mt 17,3). Jesus weist bei dem Blindgeborenen beide Annahmen der Jünger zurück (Joh 9,3). Die Schrift sagt klar: „Wie den Menschen gesetzt ist, **einmal** zu sterben, darnach aber das Gericht" (Hebr 9,27).`,
    detail: `**Mt 11,14:** Jesus sagt: „Und (so ihr's wollt annehmen) er ist Elia" – der Zusatz zeigt, dass es um eine geistliche Deutung geht. Johannes erfüllt die Rolle des verheißenen Vorläufers.

**Joh 9,2:** Im Judentum wurde diskutiert, ob ein Kind schon im Mutterleib sündigen könne (vgl. das Ringen von Jakob und Esau, Gen 25,22). Die Frage der Jünger setzt also keine Reinkarnation voraus – und Jesus verneint ohnehin beide Möglichkeiten.

**Jer 1,5:** Gott „kannte" Jeremia – das ist Gottes Vorherwissen und Erwählung, nicht ein früheres Leben Jeremias.

**Ein Leib, ein Leben, ein Gericht:** Jeder empfängt, „nachdem er gehandelt hat bei Leibesleben" (2 Kor 5,10) – im Singular. Der reiche Mann und Lazarus kommen nach dem Tod nicht in neue Leiber, sondern an einen Ort, zwischen dem „eine große Kluft befestigt" ist (Lk 16,26). Christus verheißt die **Auferstehung** desselben Menschen (Joh 5,28–29; 1 Kor 15), nicht eine Kette neuer Körper.

**Gnade statt Karma:** „Aus Gnade seid ihr selig geworden durch den Glauben" (Eph 2,8). Das Kreuz bricht den Kreislauf von Tat und Vergeltung, statt ihn über unzählige Leben zu verlängern.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,21', quote: `Und sie fragten ihn: Was denn? Bist du Elia? Er sprach: Ich bin's nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,17', quote: `Und er wird vor ihm her gehen im Geist und Kraft des Elia.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Matthäus', ref: '11,14', quote: `Und (so ihr's wollt annehmen) er ist Elia, der da soll zukünftig sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Könige', ref: '2,15', quote: `Und da ihn sahen der Propheten Kinder, die gegenüber zu Jericho waren, sprachen sie: Der Geist Elias ruht auf Elisa.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '9,2–3', quote: `Und seine Jünger fragten ihn und sprachen: Meister, wer hat gesündigt, dieser oder seine Eltern, daß er ist blind geboren? Jesus antwortete: Es hat weder dieser gesündigt noch seine Eltern; sondern daß die Werke Gottes offenbar würden an ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '9,27', quote: `Und wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '5,10', quote: `Denn wir müssen alle offenbar werden vor dem Richterstuhl Christi, auf daß ein jeglicher empfange, nach dem er gehandelt hat bei Leibesleben, es sei gut oder böse.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirchenväter haben die Seelenwanderung, die sie aus Platon und den Pythagoreern kannten, ausdrücklich zurückgewiesen: Irenäus um 180, Tertullian in seiner Schrift *Über die Seele*, Gregor von Nyssa – und selbst **Origenes**, der in Fragen der Präexistenz spekulierte, lehnte die Wanderung der Seele in andere Leiber ab, auch gerade bei der Frage nach Elia und Johannes. Das Konzil von Konstantinopel 553 verurteilte origenistische Spekulationen über die Präexistenz der Seelen, nicht eine angebliche biblische Reinkarnationslehre. Bezeichnend: Die **koptische Kirche erkennt dieses Konzil gar nicht an** – und kannte dennoch nie eine Reinkarnationslehre. Ihr Bekenntnis lautet: „Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt."`,
    detail: `Schon Papst Theophilus von Alexandrien wandte sich um 400 gegen origenistische Spekulationen unter den ägyptischen Mönchen – lange vor 553. Und die biblischen Texte selbst lagen vor 553 längst in Handschriften vor (Papyri des 2./3. Jahrhunderts, Codex Sinaiticus und Vaticanus aus dem 4. Jahrhundert): An den einschlägigen Stellen (Mt 11; 17; Joh 1; 9; Hebr 9) stimmen sie mit unseren Bibeln überein. Es gibt nichts, was 553 „gestrichen" worden wäre.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'II,33,1–5', quote: `Widerlegung der Seelenwanderung: Die Seelen erinnern sich an keine früheren Leben; jeder Mensch empfängt seinen eigenen Leib und seine eigene Seele.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Über die Seele (De anima)', ref: '28–35', quote: `Ausführliche Widerlegung der Metempsychose.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Matthäuskommentar', ref: 'XIII,1–2', quote: `Johannes war nicht die Seele des Elia, sondern kam in dessen Geist und Kraft; die Lehre von der Seelenwanderung widerspricht der Kirche.`, status: 'paraphrase', note: 'Origenes wird von der koptischen Kirche nicht als Lehrautorität anerkannt; hier ist er Zeuge gegen die Behauptung, er habe Reinkarnation gelehrt.' },
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '381', quote: `Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt.`, translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  quickAnswer: `Johannes der Täufer wurde gefragt, ob er Elia sei, und sagte: „Ich bin's nicht" (Joh 1,21). Er kam „im Geist und in der Kraft Elias" (Lk 1,17) – so wie es schon von Elisa hieß, dass Elias Geist auf ihm ruht. Elia war gar nicht gestorben, und bei der Verklärung erscheint er als Elia. Die Bibel sagt: Der Mensch stirbt **einmal**, danach kommt das Gericht (Hebr 9,27) – und die Auferstehung desselben Menschen, nicht eine Kette neuer Leben.`,
  keyPoints: [
    `**Johannes verneint:** „Bist du Elia? – Ich bin's nicht" (Joh 1,21).`,
    `**„Im Geist und Kraft Elias"** (Lk 1,17) – wie bei Elisa (2 Kön 2,15): Sendung, nicht Seelenwanderung.`,
    `**Elia starb nicht** (2 Kön 2,11) und erscheint bei der Verklärung als er selbst (Mt 17,3).`,
    `**Einmal sterben, dann Gericht** (Hebr 9,27; 2 Kor 5,10; Lk 16,26).`,
    `**553 strich nichts:** Die Handschriften sind älter; die koptische Kirche erkennt 553 nicht an und lehrte trotzdem nie Reinkarnation.`,
    `**Auch Origenes lehnte die Seelenwanderung ab.**`,
  ],
  voices: [
    {
      person: 'irenaeus',
      role: 'als früher Widerleger der Seelenwanderung',
      text: `Irenäus prüft die Lehre der Seelenwanderung, die Platoniker und einige Gnostiker vertraten. Er wendet ein: Wenn die Seelen schon früher gelebt hätten, müssten sie sich daran erinnern; und Gott gibt jedem Menschen seinen eigenen Leib und seine eigene Seele, die gemeinsam auferstehen. Die Auferstehung desselben Menschen ist für Irenäus der Kern der christlichen Hoffnung – ein endloser Wechsel der Leiber würde sie aufheben.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'II,33', quote: `Gegen die Seelenwanderung.`, status: 'paraphrase' }],
    },
    {
      person: 'origenes',
      role: 'als Zeuge gegen die Behauptung, er habe Reinkarnation gelehrt',
      text: `Origenes wird oft als „Kronzeuge" der Reinkarnation genannt. Tatsächlich spekulierte er über eine Präexistenz der Seelen vor dieser Welt – was die Kirche später verwarf. Aber die Wanderung einer Seele durch immer neue irdische Leiber lehnte er ausdrücklich ab. In seinem Matthäuskommentar erklärt er gerade zur Frage nach Elia und Johannes, dass nicht die Seele Elias in Johannes kam, sondern sein Geist und seine Kraft – und dass die Lehre von der Seelenwanderung der Lehre der Kirche fremd sei.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Matthäuskommentar', ref: 'XIII,1–2', quote: `Ablehnung der Seelenwanderung bei der Auslegung von Mt 17,10–13.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'III,75; V,29', quote: `Origenes stellt der Lehre von der Seelenwanderung (*metensōmatōsis*) die christliche Auferstehungshoffnung entgegen und weist sie zurück.`, status: 'paraphrase', note: 'Stellenangabe nach der Fachliteratur (u. a. J. Young, Oxford, zu Origenes und der Metensomatose); die Forschung diskutiert, wie weit Origenes Bilder dieser Lehre umdeutet. Die deutlichste Ablehnung steht im Matthäuskommentar XIII,1.' },
      ],
    },
    {
      person: 'tertullian',
      role: 'als Verfasser von „Über die Seele"',
      text: `Tertullian widmet in seiner Schrift über die Seele mehrere Kapitel der Widerlegung der Metempsychose. Er zeigt unter anderem, dass die Lehre logisch nicht aufgeht: Die Zahl der Menschen wächst, also können die Lebenden nicht einfach die wiedergeborenen Toten sein. Und er verweist darauf, dass die Schrift Johannes ausdrücklich nicht als wiedergekommenen Elia bezeichnet, sondern als einen, der in Elias Geist kam.`,
      sources: [{ kind: 'kirchenvater', author: 'Tertullian', work: 'De anima', ref: '28–35', quote: `Widerlegung der Metempsychose, u. a. am Beispiel Elia–Johannes.`, status: 'paraphrase', note: 'Tertullian wird für Apologetik zitiert, nicht als Lehrautorität.' }],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Theologe der menschlichen Natur',
      text: `Gregor von Nyssa lehrt, dass Leib und Seele des Menschen zugleich ins Dasein treten und zusammengehören. Er weist sowohl die Vorstellung einer langen Präexistenz der Seele als auch die Wanderung in andere Leiber, gar in Tiere oder Pflanzen, zurück. Für ihn würde die Seelenwanderung die Würde des Menschen als Ebenbild Gottes zerstören und die Auferstehung sinnlos machen.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '28', quote: `Leib und Seele entstehen zugleich; Ablehnung von Präexistenz und Seelenwanderung.`, status: 'paraphrase' }],
    },
    {
      person: 'metzger',
      role: 'als Textkritiker',
      text: `Metzger hat die Überlieferung des neutestamentlichen Textes dokumentiert: Papyri aus dem 2. und 3. Jahrhundert und die großen Pergamenthandschriften des 4. Jahrhunderts sind Jahrhunderte älter als das Konzil von 553. Eine nachträgliche Tilgung von Reinkarnationsstellen müsste in diesen frühen Zeugen sichtbar sein – sie ist es nicht.`,
      sources: [{ kind: 'fachliteratur', author: 'Bruce M. Metzger / Bart D. Ehrman', work: 'The Text of the New Testament', year: '4. Aufl. 2005', quote: `Darstellung der frühen Handschriftenüberlieferung.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'johannes-ist-elia',
      objection: `Jesus sagt in Mt 11,14 ganz klar: Johannes der Täufer **ist** Elia. Das ist Reinkarnation.`,
      objectionBy: 'Shirley MacLaine / Esoterik-Literatur',
      answer: `Jesus sagt: „**So ihr's wollt annehmen**, er ist Elia" – das signalisiert eine geistliche Deutung. Der Engel hatte erklärt, wie es gemeint ist: Johannes kommt „im Geist und in der Kraft Elias" (Lk 1,17). Und Johannes selbst antwortete auf die Frage „Bist du Elia?": „Ich bin's nicht" (Joh 1,21).`,
      followUps: [
        {
          id: 'johannes-wusste-nicht',
          objection: `Johannes wusste eben nicht, dass er Elia war – Jesus wusste es.`,
          objectionBy: 'Esoterische Autoren',
          answer: `Dann widerspricht Jesus dem Engel, der „Geist und Kraft" sagte, und dem Täufer. Die Formel „Geist Elias" kennt die Bibel schon von Elisa: „Der Geist Elias ruht auf Elisa" (2 Kön 2,15) – niemand meint, Elisa sei Elias Reinkarnation. Außerdem starb Elia nicht, sondern wurde entrückt (2 Kön 2,11) – Wiedergeburt setzt den Tod voraus.`,
          followUps: [
            {
              id: 'verklaerung',
              objection: `Bei der Verklärung erschien Elia eben als Geistwesen – das widerlegt nichts.`,
              objectionBy: 'Esoterische Autoren',
              answer: `Doch: Johannes war zu diesem Zeitpunkt schon enthauptet (Mt 14,10). Wäre er Elias Reinkarnation, wer erschien dann auf dem Berg – Johannes oder Elia? Es erschien Elia, mit seinem Namen und seiner Identität, neben Mose (Mt 17,3). Elia und Johannes sind zwei Personen.`,
              questionsBack: [`Wenn Johannes Elias Reinkarnation war – warum erschien bei der Verklärung Elia und nicht Johannes?`],
            },
          ],
        },
      ],
    },
    {
      id: 'blindgeborener',
      objection: `Die Jünger fragten: Hat dieser Mann gesündigt, dass er blind geboren wurde (Joh 9,2)? Das setzt ein früheres Leben voraus – und Jesus widerspricht dem Gedanken nicht.`,
      objectionBy: 'Edgar Cayce / Esoterik-Literatur',
      answer: `Jesus widerspricht ausdrücklich: „Es hat weder dieser gesündigt noch seine Eltern" (9,3). Und die Frage setzt kein früheres Leben voraus: Im Judentum wurde diskutiert, ob ein Ungeborenes schon im Mutterleib sündigen könne – man verwies etwa auf Jakob und Esau, die im Leib ihrer Mutter miteinander rangen (Gen 25,22).`,
      followUps: [
        {
          id: 'josephus-pharisaeer',
          objection: `Josephus berichtet, dass die Pharisäer glaubten, die Seelen der Guten gingen in andere Leiber über.`,
          objectionBy: 'Reinkarnationsautoren',
          answer: `Josephus schrieb für ein griechisch-römisches Publikum und beschrieb jüdische Vorstellungen in griechischen Begriffen. Die meisten Ausleger verstehen seine Formulierung als Umschreibung der **Auferstehung** in einem neuen Leib – das ist die bekannte Lehre der Pharisäer (Apg 23,8). Und selbst wenn manche Juden anderes glaubten: Entscheidend ist, was Jesus und die Apostel lehrten.`,
          sources: [{ kind: 'juedisch', author: 'Flavius Josephus', work: 'Der Jüdische Krieg (Bellum Judaicum)', ref: 'II,163', quote: `Die Pharisäer lehren, jede Seele sei unvergänglich; nur die der Guten gehe in einen anderen Leib über, die der Bösen werde ewig bestraft.`, status: 'paraphrase' }],
          followUps: [
            {
              id: 'konzil-553',
              objection: `Die Kirche hat 553 auf dem Konzil von Konstantinopel die Reinkarnation aus der Bibel gestrichen.`,
              objectionBy: 'Shirley MacLaine / populäre Esoterik',
              answer: `Unsere Bibelhandschriften sind älter als 553 – Papyri aus dem 2. und 3. Jahrhundert, Codex Sinaiticus und Vaticanus aus dem 4. – und sie haben an diesen Stellen denselben Text. Das Konzil verurteilte origenistische Spekulationen über eine Präexistenz der Seelen, nicht eine biblische Reinkarnationslehre. Und die koptische Kirche erkennt dieses Konzil gar nicht an – trotzdem hat sie nie Reinkarnation gelehrt.`,
              followUps: [
                {
                  id: 'origenes-praeexistenz',
                  objection: `Aber Origenes lehrte die Präexistenz der Seelen. Das ist doch der Anfang der Reinkarnation.`,
                  objectionBy: 'Reinkarnationsautoren',
                  answer: `Präexistenz ist nicht Reinkarnation: Origenes spekulierte über ein Dasein der Geister vor dieser Welt, lehnte aber die Wanderung der Seele durch immer neue irdische Leiber ausdrücklich ab – gerade bei der Frage nach Elia und Johannes. Und schon um 400 wies Papst Theophilus von Alexandrien origenistische Spekulationen zurück. Die koptische Kirche ehrt Origenes nicht als Lehrer.`,
                  questionsBack: [`Kannst du eine Stelle bei Origenes nennen, in der er die Wiedergeburt in neuen irdischen Leibern lehrt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'karma-gerechter',
      objection: `Nur Reinkarnation erklärt, warum manche Kinder krank, arm oder behindert geboren werden. Karma ist gerecht – Gott würde sonst willkürlich handeln.`,
      objectionBy: 'Esoterik / Hindu-inspirierte Spiritualität',
      answer: `Karma erklärt das Leid eines Kindes damit, dass es in einem früheren Leben selbst schuld war – das ist keine Gerechtigkeit, sondern eine Anklage gegen das Opfer, an die sich niemand erinnert. Jesus weist genau diese Logik zurück (Joh 9,3). Das Evangelium antwortet auf Leid nicht mit Schuldzuweisung, sondern mit einem Gott, der selbst leidet, heilt und am Ende alle Tränen abwischt.`,
      followUps: [
        {
          id: 'gal-6-7-saat-ernte',
          objection: `Paulus lehrt doch selbst das Karma-Gesetz: „Was der Mensch sät, das wird er ernten" (Gal 6,7). Das ist dasselbe Prinzip wie im Osten.`,
          objectionBy: 'Esoterische Autoren',
          answer: `Lies den nächsten Vers: „Wer auf sein Fleisch sät, der wird vom Fleisch das Verderben ernten; wer aber auf den Geist sät, der wird von dem Geist das ewige Leben ernten" (6,8). Paulus spricht von Folgen in diesem Leben und vom Gericht Gottes, nicht von einem unpersönlichen Gesetz, das durch viele Leben wirkt. Und derselbe Paulus verkündet, was es im Karma nicht gibt: Gnade, die die Schuld vergibt, statt sie abzutragen – „aus Gnade seid ihr selig geworden" (Eph 2,8).`,
          detail: `Das Prinzip von Saat und Ernte kennt die ganze Bibel als Weisheit (Spr 22,8; Hos 8,7). Aber es steht unter dem persönlichen Gott, der richtet und begnadigt. Der Unterschied ist entscheidend: Karma ist ein unpersönliches Gesetz, dem auch die Götter unterworfen sind, und es kennt keine Vergebung, nur Abtragen. Im Evangelium nimmt Christus selbst die Last auf sich – darum kann der Schächer am Kreuz „heute" im Paradies sein (Lk 23,43), ohne ein einziges weiteres Leben zur Abtragung seiner Taten.`,
          sources: [{ kind: 'bibel', work: 'Galater', ref: '6,7–8', quote: `Irret euch nicht! Gott läßt sich nicht spotten. Denn was der Mensch sät, das wird er ernten. Wer auf sein Fleisch sät, der wird von dem Fleisch das Verderben ernten; wer aber auf den Geist sät, der wird von dem Geist das ewige Leben ernten.`, translation: 'Luther 1912', status: 'verbatim' }],
          questionsBack: [`Wie viele Leben hätte der Schächer am Kreuz nach dem Karma-Gesetz noch gebraucht – und was sagt Jesus ihm stattdessen?`],
        },
        {
          id: 'stevenson-faelle',
          objection: `Ian Stevenson von der University of Virginia hat Hunderte Fälle von Kindern dokumentiert, die sich an frühere Leben erinnerten – mit überprüfbaren Details.`,
          objectionBy: 'Ian Stevenson / Jim B. Tucker',
          answer: `Stevenson war ein ernsthafter Forscher – das gestehe ich zu. Kritiker wie der Philosoph Paul Edwards haben aber gezeigt, dass die meisten Fälle aus Kulturen stammen, die an Reinkarnation glauben, dass die Befragungen oft Jahre später stattfanden und die Familien bereits Kontakt hatten. Selbst wenn manche Fälle unerklärt bleiben, gibt es andere Deutungen – und für Christen auch die Möglichkeit geistlicher Täuschung.`,
          sources: [{ kind: 'fachliteratur', author: 'Paul Edwards', work: 'Reincarnation: A Critical Examination', year: '1996', quote: `Methodische Kritik an Stevensons Fallsammlungen.`, status: 'paraphrase' }],
          followUps: [
            {
              id: 'rueckfuehrung-hypnose',
              objection: `In Rückführungen unter Hypnose erinnern sich Menschen an frühere Leben – mit vielen Details.`,
              objectionBy: 'Rückführungstherapeuten',
              answer: `Hypnose erhöht nachweislich die Anfälligkeit für Suggestion und falsche Erinnerungen; die Gedächtnisforscherin Elizabeth Loftus hat gezeigt, wie leicht sich Erinnerungen erzeugen lassen. Im berühmten Fall „Bridey Murphy" (1950er-Jahre) ließen sich die „irischen" Details auf die Kindheit der Frau in Amerika zurückführen. Lebendige Bilder sind kein Beleg für ein früheres Leben.`,
              sources: [{ kind: 'wissenschaft', author: 'Elizabeth F. Loftus', work: 'The Reality of Repressed Memories', ref: 'American Psychologist 48 (1993), 518–537', year: '1993', quote: `Falsche Erinnerungen lassen sich durch Suggestion erzeugen.`, status: 'paraphrase' }],
            },
          ],
        },
      ],
    },
    {
      id: 'wiedergeburt-joh-3',
      objection: `Jesus lehrte ausdrücklich die Wiedergeburt: „Es sei denn, dass jemand von neuem geboren werde, so kann er das Reich Gottes nicht sehen" (Joh 3,3). Die Kirche hat das später nur geistlich umgedeutet.`,
      objectionBy: 'Edgar Cayce / Esoterik-Literatur',
      answer: `Das griechische *anōthen* heißt „von oben" und „von neuem". Nikodemus versteht es genau so wörtlich-leiblich, wie du – „Kann er auch wiederum in seiner Mutter Leib gehen und geboren werden?" (3,4) –, und Jesus korrigiert ihn: „aus Wasser und Geist" geboren werden (3,5), „was vom Geist geboren wird, das ist Geist" (3,6). Gemeint ist eine neue Geburt durch Gott in **diesem** Leben – in der Taufe –, nicht ein neuer Körper nach dem Tod.`,
      detail: `Die koptische Kirche liest Joh 3,5 seit jeher als Wort über die Taufe: Der Täufling wird dreimal untergetaucht und als neuer Mensch aus dem Wasser gehoben, dann mit dem heiligen Myron gesalbt. Kyrill von Alexandrien erklärt in seinem Johanneskommentar, dass der Geist den Menschen im Wasser neu gestaltet und zum Kind Gottes macht. Das Johannesevangelium selbst hat die Wendung schon im Prolog vorbereitet: Kinder Gottes sind die, „welche nicht von dem Geblüt noch von dem Willen des Fleisches … sondern von Gott geboren sind" (1,13).`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '3,4–6', quote: `Nikodemus spricht zu ihm: Wie kann ein Mensch geboren werden, wenn er alt ist? Kann er auch wiederum in seiner Mutter Leib gehen und geboren werden? Jesus antwortete: … Es sei denn, daß jemand geboren werde aus Wasser und Geist, so kann er nicht in das Reich Gottes kommen. Was vom Fleisch geboren wird, das ist Fleisch; und was vom Geist geboren wird, das ist Geist.`, original: `ἐὰν μή τις γεννηθῇ ἄνωθεν`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'zu Joh 3,5', quote: `Der Geist gestaltet den Menschen im Wasser der Taufe neu und macht ihn zum Kind Gottes.`, status: 'paraphrase' },
      ],
      questionsBack: [`Wenn Jesus eine leibliche Wiedergeburt meinte – warum korrigiert er dann gerade Nikodemus, der genau das verstanden hatte?`],
      followUps: [
        {
          id: 'gnostiker-glaubten-reinkarnation',
          objection: `Aber viele frühe Christen glaubten an Reinkarnation – die Pistis Sophia lehrt sie ausdrücklich, und die Karpokratianer auch. Die Kirche hat diese Strömung später unterdrückt.`,
          objectionBy: 'Reinkarnationsautoren / Theosophie',
          answer: `Es stimmt: Einige gnostische Gruppen lehrten Seelenwanderung – Irenäus berichtet das von den Karpokratianern, und die Pistis Sophia (3. Jh.) kennt sie ebenfalls. Aber genau das zeigt das Gegenteil dessen, was du schließt: Die Kirche kannte die Lehre und lehnte sie ab, weil sie zum gnostischen System gehörte, nicht zum apostolischen Glauben. Irenäus, Tertullian, Origenes und Gregor von Nyssa haben sie ausdrücklich widerlegt – und zwar Jahrhunderte vor 553.`,
          detail: `Irenäus beschreibt in Gegen die Häresien I,25,4, dass die Karpokratianer lehrten, die Seele müsse durch immer neue Leiber wandern, bis sie alles erfahren habe. Das ist ein Zeugnis aus dem 2. Jahrhundert für die Lehre – und für ihre Ablehnung. Der Glaube der Kirche war von Anfang an Auferstehungsglaube: „ich glaube an die Auferstehung des Fleisches" steht bereits in den frühesten Taufbekenntnissen.`,
          sources: [
            { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'I,25,4; II,33', quote: `Die Karpokratianer lehren eine Wanderung der Seelen durch Leiber; Irenäus widerlegt die Seelenwanderung.`, status: 'paraphrase' },
            { kind: 'gegner', work: 'Pistis Sophia', year: '3. Jh.', quote: `Gnostische Schrift, die eine Rückkehr von Seelen in neue Leiber kennt.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'mehr-chancen-gnaedig',
              objection: `Reinkarnation ist doch gnädiger als euer Modell: Statt einer einzigen Chance und dann ewiger Hölle bekommt jeder so viele Leben, wie er braucht, um zu lernen.`,
              objectionBy: 'Westliche Esoterik / Shirley MacLaine',
              answer: `Im Hinduismus und Buddhismus gilt der Kreislauf der Wiedergeburten (*samsara*) gerade nicht als Geschenk, sondern als Leiden, aus dem man befreit werden will. Und Gnade ist etwas anderes als viele Versuche: Gnade heißt, dass mir geschenkt wird, was ich nicht verdienen kann. Gott ist geduldig – „er will nicht, dass jemand verloren werde, sondern dass sich jedermann zur Buße kehre" (2 Petr 3,9) –, aber er rettet nicht dadurch, dass er uns endlos weiterüben lässt, sondern dadurch, dass er selbst in Christus kommt.`,
              detail: `Die koptische Kirche betet in jeder Liturgie für die Entschlafenen und vertraut sie der Barmherzigkeit Gottes an – sie maßt sich kein Urteil über das ewige Schicksal Einzelner an. Hebr 9,27 bleibt der Rahmen: „Dem Menschen ist gesetzt, einmal zu sterben, danach aber das Gericht." Dieses „einmal" macht jedes Leben unendlich kostbar: Es ist nicht Durchgangsstation, sondern der Ort, an dem Gott mir begegnet.`,
              sources: [
                { kind: 'bibel', work: '2. Petrus', ref: '3,9', quote: `Der HERR verzieht nicht die Verheißung, wie es etliche für einen Verzug achten; sondern er hat Geduld mit uns und will nicht, daß jemand verloren werde, sondern daß sich jedermann zur Buße kehre.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Hebräer', ref: '9,27', quote: `Und wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'westliche-reinkarnation-wachstum',
                  objection: `Die westliche Reinkarnationslehre ist eben anders als die östliche: Es geht nicht um Strafe, sondern um Seelenwachstum. Jedes Leben ist eine Schule, und die Seele entwickelt sich weiter.`,
                  objectionBy: 'Theosophie / Rudolf Steiner / New Age',
                  answer: `Dann frage ich: Wer wächst da eigentlich? Wenn ich mich an kein früheres Leben erinnere, keinen Leib, keine Beziehungen und keine Geschichte mit ihm teile – in welchem Sinn war das **ich**? Leibniz fragte schon: Was nützte es jemandem, König von China zu werden, wenn er dabei vergessen müsste, wer er war? Das wäre, als würde er vernichtet und ein anderer an seiner Stelle geschaffen. Die Auferstehung dagegen verspricht, dass **ich** – derselbe Mensch mit meiner Geschichte und meinen Lieben – verwandelt werde.`,
                  detail: `Die westliche Fortschrittsversion der Reinkarnation ist eine Erfindung des 19. Jahrhunderts: Sie verbindet indische Begriffe mit dem europäischen Glauben an ständige Höherentwicklung. In der Bhagavad Gita oder bei Buddha findet sich diese optimistische „Schule der Seele" so nicht. Und sie bleibt ein Weg der Selbsterlösung: Am Ende muss ich mich durch unzählige Leben selbst vervollkommnen. Das Evangelium verkündet, dass Gott uns in Christus vollendet – als Personen, die er bei ihrem Namen kennt (Jes 43,1).`,
                  voices: [
                    {
                      person: 'leibniz',
                      role: 'als Philosoph der personalen Identität',
                      text: `Leibniz argumentiert in seiner „Metaphysischen Abhandlung", dass Unsterblichkeit ohne Erinnerung wertlos wäre: Wer König von China würde, unter der Bedingung, zu vergessen, wer er gewesen ist, hätte davon nichts – es wäre dasselbe, als würde er vernichtet und zugleich ein König in China geschaffen. Für eine echte Fortdauer der Person brauche es Erinnerung und Selbstbewusstsein, die die moralische Identität tragen.`,
                      sources: [{ kind: 'fachliteratur', author: 'Gottfried Wilhelm Leibniz', work: 'Metaphysische Abhandlung (Discours de métaphysique)', ref: '§ 34', year: '1686', quote: `Das Beispiel vom König von China: Fortdauer ohne Erinnerung käme einer Vernichtung gleich.`, status: 'paraphrase' }],
                    },
                  ],
                  questionsBack: [`Wenn du dich an keines deiner früheren Leben erinnerst – in welchem Sinn warst du das?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was antwortete Johannes der Täufer auf die Frage „Bist du Elia?"`,
    `Wie kann Elia wiedergeboren werden, wenn er nicht gestorben ist?`,
    `Welche Handschrift vor 553 enthält einen Reinkarnationsvers, der später gestrichen wurde?`,
    `Ist es gerecht, ein Kind für die Taten eines früheren Lebens leiden zu lassen, an das es sich nicht erinnert?`,
  ],
  avoid: [
    `„Das Konzil von 553 hat nie über Origenes geurteilt." – Es hat origenistische Lehren verurteilt (Präexistenz); sag genau, was verurteilt wurde.`,
    `Ian Stevenson als Scharlatan darstellen – er war ein seriöser Psychiater; kritisiere die Methode, nicht die Person.`,
    `Josephus' Aussage leugnen – sie existiert; erkläre sie.`,
  ],
  concessions: [
    `Josephus beschreibt die pharisäische Hoffnung mit Worten, die nach Seelenwanderung klingen können.`,
    `Origenes spekulierte über eine Präexistenz der Seelen, was die Kirche später verwarf.`,
    `Einige von Stevensons Fällen gelten auch Kritikern als schwer erklärbar.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien, Buch II', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Tertullian', work: 'Über die Seele (De anima)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul Edwards', work: 'Reincarnation: A Critical Examination', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Mark Albrecht', work: 'Reincarnation: A Christian Appraisal', year: '1982', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Reinkarnation', 'Elia', 'Johannes der Täufer', 'Konzil 553', 'Origenes', 'Auferstehung'],
  related: [
    'kirchengeschichte-mythen/reinkarnation-553-gestrichen',
    'hinduismus/reinkarnation-erklaert-leid',
    'hinduismus/karma-gerechter-als-gnade',
    'zeugen-jehovas/pfahl-seele-hoelle',
    'neurowissenschaften/nahtoderfahrungen-halluzination',
  ],
};

export default claim;
