import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'guter-atheist-hoelle',
  title: `„Ein guter Atheist kommt in die Hölle, ein bekehrter Verbrecher in den Himmel – das ist absurd."`,
  proponents: [
    { name: 'Bertrand Russell', role: 'Philosoph und Logiker', work: 'Why I Am Not a Christian (1927)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Letter to a Christian Nation (2006)' },
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'Heaven and Hell: A History of the Afterlife (2020)' },
  ],
  steelman: `Nimm zwei Menschen: Die eine ist Ärztin ohne Grenzen, Atheistin, hat Tausende Leben gerettet, nie gelogen, nie betrogen. Der andere hat sein Leben lang Menschen ausgeraubt und misshandelt, findet kurz vor dem Tod zu Jesus und lässt sich taufen. Nach verbreiteter christlicher Lehre kommt er in den Himmel, sie aber in die Hölle – nur weil sie eine Meinung über die Existenz Gottes nicht teilte. Jedes menschliche Gerechtigkeitsempfinden rebelliert dagegen. Glaube ist keine moralische Leistung, sondern eine Überzeugung, die man nicht einfach wählen kann; wer ehrlich prüft und keine überzeugenden Gründe findet, kann nicht dafür bestraft werden, schon gar nicht ewig. Ein Gott, der Loyalität statt Güte belohnt, gleicht einem Tyrannen, der seine Kritiker foltert und seine Schmeichler befördert. Wenn Gandhi in der Hölle und Jeffrey Dahmer, der sich im Gefängnis taufen ließ, im Himmel sein soll, dann hat diese Religion den Begriff „Gerechtigkeit" auf den Kopf gestellt.`,
  biblical: {
    summary: `Der Einwand setzt voraus, dass der Himmel eine **Belohnung für gutes Verhalten** sei und die Bibel sage, wer konkret verloren ist. Beides stimmt nicht. Nach der Schrift ist **niemand gut genug** im Vergleich zum Maßstab Gottes – „Niemand ist gut denn der einige Gott" (Mk 10,18; Röm 3,23); das Heil ist **Gnade**, nicht Lohn (Eph 2,8–9). Zugleich richtet Gott **gerecht nach dem Licht, das jemand hatte**: Wer das Gesetz nicht kannte, wird nicht nach ihm gerichtet (Röm 2,12–16), und wer wenig wusste, empfängt wenig Strafe (Lk 12,47–48). Das Gericht entscheidet sich daran, ob jemand das Licht liebt oder die Finsternis (Joh 3,19). **Kein Mensch** darf über das ewige Schicksal eines Einzelnen urteilen (1 Kor 4,5).`,
    detail: `**Der Maßstab ist nicht „besser als ein Mörder".** Jesus fasst das Gesetz in zwei Geboten zusammen: Gott lieben von ganzem Herzen und den Nächsten wie sich selbst (Mt 22,37–40). Gemessen daran ist auch die beste Ärztin nicht „gut genug" – und der Christ ebenso wenig. Das Heil ist darum für niemanden ein verdienter Lohn.

**Gott sieht keine Person an.** Petrus erkennt im Haus des römischen Hauptmanns Kornelius: „In allerlei Volk, wer ihn fürchtet und recht tut, der ist ihm angenehm" (Apg 10,34–35). Im Gleichnis vom Weltgericht dienen die „Gerechten" Christus, ohne es zu wissen (Mt 25,37–40).

**Der Schächer am Kreuz.** Er wird nicht wegen eines „Zauberworts" gerettet, sondern weil er ehrlich bekennt: „Wir empfangen, was unsre Taten wert sind" (Lk 23,41) und sich ganz Christus anvertraut. Jesus warnt die Selbstgerechten: „Die Zöllner und Huren mögen wohl eher ins Himmelreich kommen denn ihr" (Mt 21,31).`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '10,18', quote: `Was heißest du mich gut? Niemand ist gut denn der einige Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '2,14–15', quote: `Denn so die Heiden, die das Gesetz nicht haben, doch von Natur tun des Gesetzes Werk, sind dieselben, dieweil sie das Gesetz nicht haben, sich selbst ein Gesetz, als die da beweisen, des Gesetzes Werk sei geschrieben in ihren Herzen, sintemal ihr Gewissen sie bezeugt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '12,47–48', quote: `Der Knecht, der den Willen seines Herrn kannte und nicht danach handelte, wird viele Schläge erleiden; wer ihn nicht kannte, aber Strafwürdiges tat, wenige. Wem viel gegeben ist, bei dem wird man viel suchen.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Johannes', ref: '3,19', quote: `Das ist aber das Gericht, daß das Licht in die Welt gekommen ist, und die Menschen liebten die Finsternis mehr denn das Licht; denn ihre Werke waren böse.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '10,34–35', quote: `Nun erfahre ich mit der Wahrheit, daß Gott die Person nicht ansieht; sondern in allerlei Volk, wer ihn fürchtet und recht tut, der ist ihm angenehm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '2,8–9', quote: `Denn aus Gnade seid ihr selig geworden durch den Glauben, und das nicht aus euch, Gottes Gabe ist es; nicht aus den Werken, auf daß sich nicht jemand rühme.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt, dass das Heil allein durch Christus kommt und in der Kirche empfangen wird – durch Glauben, Taufe, Buße und das sakramentale Leben, in Synergie von Gnade und freiem Willen (Papst Schenuda III., *Das Heil im orthodoxen Verständnis*). Heil ist dabei nicht ein Zeugnis guten Betragens, sondern Heilung und Vereinigung mit Gott (*theosis*). Die Kirche weiß, **wo** das Heil geschenkt wird; sie spricht aber **kein Urteil** über das ewige Schicksal einzelner Menschen außerhalb ihrer sichtbaren Grenzen, sondern überlässt es dem gerechten und barmherzigen Gott. In der orthodoxen Welt fasst man das oft so: Wir wissen, wo die Kirche ist; wir können nicht mit Sicherheit sagen, wo sie nicht ist (Kallistos Ware). Die Väter würdigten zudem, dass der Logos in allen Menschen „Samen" der Wahrheit gesät hat (Justin).`,
    sources: [
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis (Salvation in the Orthodox Concept)', quote: `Das Heil gründet im Erlösungswerk Christi und wird durch Glauben, Taufe, Buße, die Sakramente und ein Leben in guten Werken empfangen; weder Glaube allein noch Werke allein.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, überarb. 1993', quote: `Wir wissen, wo die Kirche ist, aber wir können nicht sicher sein, wo sie nicht ist.`, status: 'paraphrase', note: 'Vielzitierte Formulierung aus dem Kapitel über die Kirche; östlich-orthodoxer Autor, in dieser Frage mit koptischer Zurückhaltung im Einklang.' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '2. Apologie', ref: '10; 13', year: 'um 155', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Der Satz setzt voraus, dass der Himmel ein Preis für gutes Benehmen ist – das lehrt die Bibel nicht. Niemand ist gut genug, gemessen an Gottes Maßstab der vollkommenen Liebe, auch ich nicht (Mk 10,18). Heil ist Gnade, Heilung und Gemeinschaft mit Gott – kein Lohn. Und ich weiß nicht, wo dein atheistischer Freund oder ein bekehrter Verbrecher einmal sein werden: Gott richtet jeden gerecht nach dem Licht, das er hatte (Röm 2,12–16), und verbietet uns, über Einzelne zu urteilen.`,
  keyPoints: [
    `**Falsche Voraussetzung:** Der Himmel ist keine Belohnung für die Besten, sondern Gnade für alle, die sich von Gott heilen lassen (Eph 2,8–9).`,
    `**Niemand ist gut genug:** Der Maßstab ist die vollkommene Liebe zu Gott und Nächstem (Mt 22,37–40) – daran scheitert jeder, auch der Christ (Röm 3,23).`,
    `**Gott richtet nach dem Licht:** Wer wenig wusste, wird anders gerichtet als wer viel wusste (Lk 12,47–48; Röm 2,12–16).`,
    `**Kein Urteil über Einzelne:** Christen wissen nicht, wer verloren ist; das Urteil gehört Gott allein (1 Kor 4,5).`,
    `**Der bekehrte Verbrecher ist der ehrlichste Zeuge:** Er weiß, dass er nichts verdient hat (Lk 23,41); seine Rettung zeigt Gottes Güte, nicht Ungerechtigkeit (Mt 20,15).`,
    `**Glaube ist keine Meinungsprüfung:** Es geht um das Verhältnis zum Licht – ob man die Wahrheit liebt oder die Finsternis (Joh 3,19).`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel der Völker',
      text: `Paulus schreibt den Römerbrief an eine Gemeinde aus Juden und Heiden und stellt zuerst klar: Alle haben gesündigt (Röm 3,23), Juden wie Griechen. Zugleich betont er, dass Gott „einem jeglichen nach seinen Werken" vergilt (Röm 2,6) und dass Heiden, die das Gesetz nicht kennen, nach dem Gesetz in ihrem Herzen gerichtet werden (Röm 2,14–16). Für Paulus ist beides wahr: Niemand verdient das Heil, und Gott richtet jeden mit vollkommener Gerechtigkeit nach dem, was er wusste.`,
      sources: [{ kind: 'bibel', work: 'Römer', ref: '2,6–16; 3,23–24', status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als ehemaliger Atheist',
      text: `Lewis unterscheidet in *Mere Christianity* zwischen „netten Menschen" und „neuen Menschen": Christus will nicht nette Menschen ein wenig verbessern, sondern Menschen von innen neu machen. Ein Mensch mit gutem Temperament und günstiger Erziehung kann „netter" sein als ein bekehrter Mensch mit schwerem Erbe – und trotzdem Gott nicht brauchen wollen. Zugleich schreibt Lewis: Wir wissen, dass niemand gerettet werden kann außer durch Christus; wir wissen nicht, dass nur diejenigen, die ihn kennen, durch ihn gerettet werden können. In *Die große Scheidung* zeigt er: Am Ende gibt es nur zwei Arten von Menschen – die zu Gott sagen „Dein Wille geschehe", und die, zu denen Gott schließlich sagt: „Dein Wille geschehe."`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch II, Kap. 5; Buch IV, Kap. 10 („Nice People or New Men")', year: '1952', quote: `Wir wissen, dass niemand gerettet werden kann außer durch Christus; wir wissen nicht, dass nur die, die ihn kennen, durch ihn gerettet werden können.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Great Divorce (Die große Scheidung)', ref: 'Kap. 9', year: '1945', quote: `Am Ende gibt es nur zwei Arten von Menschen: die, die zu Gott sagen „Dein Wille geschehe", und die, zu denen Gott am Ende sagt: „Dein Wille geschehe."`, status: 'paraphrase' },
      ],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger über den Schächer',
      text: `Johannes Chrysostomus hielt Predigten über das Kreuz und den Schächer (*De cruce et latrone*). Er staunt darüber, dass ein Räuber vor den Aposteln ins Paradies einging – nicht weil Gott das Verbrechen gering achtete, sondern weil der Schächer in der Stunde, als selbst die Jünger flohen, den Gekreuzigten als König bekannte. Für Chrysostomus ist der Schächer eine Mahnung an alle Selbstsicheren und ein Trost für alle Verzweifelten.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'De cruce et latrone (Homilien über das Kreuz und den Schächer)', year: 'um 392', status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als koptischer Lehrer über das Heil',
      text: `Papst Schenuda III. hat in seinen Schriften über das Heil gegen zwei Vereinfachungen gekämpft: gegen ein „Heil allein durch Glauben", das Buße und Werke für überflüssig hält, und gegen ein Heil aus eigener Leistung. Das Heil ist Gottes Werk in Christus, das der Mensch in Freiheit annimmt und in einem Leben der Umkehr, der Sakramente und der Liebe bewahrt. Diese Sicht schließt die Karikatur aus, ein einmaliges Gebet „sichere" den Himmel unabhängig vom Leben.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis', status: 'paraphrase' }],
    },
    {
      person: 'tim-keller',
      role: 'als Pastor im säkularen New York',
      text: `Keller begegnete dem Einwand in Manhattan ständig. Er antwortet in *The Reason for God* (2008): Die Hölle ist zuerst die freiwillige Wahl einer Identität ohne Gott, die sich über die Ewigkeit verfestigt; niemand landet dort, der es nicht im tiefsten will. Und der Himmel ist keine Auszeichnung für moralische Menschen – sonst würde er von selbstgerechten Menschen bevölkert, die auf andere herabsehen. Das Evangelium sei weder Religion (sich den Himmel verdienen) noch Irreligion, sondern Gnade.`,
      sources: [{ kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God', ref: 'Kap. 5', year: '2008', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'lohn-nach-taten',
      objection: `Gerechtigkeit heißt: jedem nach seinen Taten. Die atheistische Ärztin hat unendlich mehr Gutes getan als der bekehrte Verbrecher. Also verdient sie den Himmel mehr.`,
      objectionBy: 'Sam Harris',
      answer: `Wenn der Himmel ein Lohn für gute Taten wäre, hättest du recht. Aber dann käme niemand hinein – auch die Ärztin nicht, und ich schon gar nicht. Der Maßstab Gottes ist nicht „besser als ein Verbrecher", sondern vollkommene Liebe zu Gott und zum Nächsten. Das Heil ist darum für jeden ein Geschenk. Und Gott richtet trotzdem gerecht: Er vergilt „einem jeglichen nach seinen Werken" (Röm 2,6) – die Ärztin und der Verbrecher stehen nicht gleich vor ihm.`,
      followUps: [
        {
          id: 'beleidigung-anstaendige',
          objection: `„Niemand ist gut genug" ist eine Beleidigung für anständige Menschen. Ich habe nie jemanden umgebracht, betrogen oder misshandelt.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Ich meine es nicht als Beleidigung – ich sage es zuerst über mich selbst. Aber prüfe ehrlich: Hast du je gelogen, um dich zu schützen? Jemanden verachtet? Den Nächsten so geliebt wie dich selbst? Alexander Solschenizyn, der im Gulag saß, schrieb, die Linie zwischen Gut und Böse verlaufe nicht zwischen Staaten oder Parteien, sondern mitten durch jedes menschliche Herz. Die Bibel teilt die Menschheit nicht in Gute und Böse, sondern in Sünder, die das zugeben, und Sünder, die es nicht zugeben.`,
          voices: [
            {
              person: 'solschenizyn',
              role: 'als Häftling des Gulag',
              text: `Solschenizyn erzählt im *Archipel Gulag*, wie er im Lager erkannte, dass er als junger Offizier selbst zum Henker hätte werden können. Die Linie, die Gut und Böse trennt, verläuft für ihn nicht zwischen Klassen oder Parteien, sondern durch jedes Herz – auch durch das beste. Diese Einsicht ist der Ausgangspunkt der christlichen Rede von Gnade.`,
              sources: [{ kind: 'fachliteratur', author: 'Alexander Solschenizyn', work: 'Der Archipel Gulag', ref: 'Teil IV, Kap. 1', year: '1973–1975', quote: `Die Linie, die Gut und Böse trennt, verläuft nicht zwischen Staaten, nicht zwischen Klassen, nicht zwischen Parteien, sondern quer durch jedes Menschenherz.`, status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'unendliche-strafe',
              objection: `Selbst wenn ich nicht perfekt bin: Unendliche Strafe für endliche Fehler ist völlig unverhältnismäßig.`,
              objectionBy: 'Bertrand Russell',
              answer: `Die Bibel lehrt keine gleiche Strafe für alle: Wer wenig wusste, empfängt wenig Strafe (Lk 12,47–48). Und die Hölle ist nicht Folter für kleine Fehler, sondern die endgültige Bestätigung eines Lebens, das Gott nicht will. Lewis sagt, die Tore der Hölle seien von innen verschlossen. Gott zwingt niemanden in seine Gegenwart, die für den, der sie hasst, keine Seligkeit wäre. Die Frage der Ewigkeit wird in einem eigenen Claim ausführlich behandelt.`,
              followUps: [
                {
                  id: 'dann-vernichtung',
                  objection: `Dann soll Gott solche Menschen wenigstens auslöschen, statt sie ewig leiden zu lassen.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Die koptische Kirche lehrt die ewige Strafe, aber die Bibel beschreibt sie in Bildern (Feuer, Finsternis, Wurm), deren genaue Wirklichkeit wir nicht kennen. Isaak der Syrer deutete die Pein der Hölle als die Erfahrung der Liebe Gottes durch jene, die sie zurückweisen – dieselbe Liebe, die für die einen Seligkeit ist, wird für die anderen Qual. Entscheidend ist: Gott ist kein Folterknecht, und er ehrt die Freiheit des Menschen über den Tod hinaus.`,
                  voices: [
                    {
                      person: 'isaak-syrer',
                      role: 'als Mystiker der Wüste',
                      text: `Isaak von Ninive schreibt in seinen asketischen Homilien, dass die in der Gehenna Gestraften „von der Geißel der Liebe" geschlagen werden: Wer sich gegen die Liebe versündigt hat, erleidet die Reue darüber als bitterste Qual. Diese Deutung wird in der koptischen Mönchsspiritualität viel gelesen. Isaak gehörte der Kirche des Ostens an; seine Schriften sind in allen orientalischen Kirchen verbreitet, aber er ist keine Lehrautorität der koptischen Kirche.`,
                      sources: [{ kind: 'kirchenvater', author: 'Isaak der Syrer', work: 'Asketische Homilien', ref: 'Hom. 28 (Zählung der Holy-Transfiguration-Ausgabe)', year: '7. Jh.', status: 'paraphrase', note: 'Homilienzählung je nach Ausgabe verschieden.' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'strafe-fuer-meinung',
      objection: `Gott bestraft den Atheisten also dafür, dass er die falsche Meinung über eine Tatsachenfrage hatte. Glaube ist keine moralische Leistung – man kann ihn nicht einfach wählen.`,
      objectionBy: 'Bertrand Russell',
      answer: `Die Bibel sagt nicht, dass Menschen wegen eines Rechenfehlers verloren gehen. Sie sagt: „Das ist das Gericht, daß das Licht in die Welt gekommen ist, und die Menschen liebten die Finsternis mehr denn das Licht" (Joh 3,19). Es geht um die Haltung des Herzens zur Wahrheit und zum Guten, die Gott allein beurteilen kann. Wer das Licht, das er hat, liebt und ihm folgt, wird von Gott nicht nach einem Licht gerichtet, das er nie hatte (Röm 2,12–16).`,
      followUps: [
        {
          id: 'ehrlich-gesucht',
          objection: `Ich habe ehrlich gesucht, die Argumente geprüft und nichts Überzeugendes gefunden. Bin ich dafür verantwortlich?`,
          objectionBy: 'J. L. Schellenberg',
          answer: `Ich kann und will dein Herz nicht beurteilen – das kann nur Gott. Wenn du wirklich ehrlich suchst, nimmst du an der Verheißung teil: „So ihr mich von ganzem Herzen suchen werdet, so will ich mich von euch finden lassen" (Jer 29,13). Ich möchte dich nur fragen: Ist deine Suche abgeschlossen, oder bist du noch offen? Hast du auch das Leben Jesu und die Belege für seine Auferstehung geprüft, nicht nur die Gottesbeweise?`,
          sources: [{ kind: 'bibel', work: 'Jeremia', ref: '29,13', status: 'paraphrase' }],
          followUps: [
            {
              id: 'gott-koennte-sich-zeigen',
              objection: `Wenn Gott wollte, dass ich glaube, könnte er sich einfach unmissverständlich zeigen. Seine Verborgenheit ist sein Problem, nicht meins.`,
              objectionBy: 'J. L. Schellenberg',
              answer: `Pascal sah das so: Gott gibt genug Licht für die, die ihn sehen wollen, und genug Dunkel für die, die es nicht wollen. Gott will nicht nur, dass wir seine Existenz zur Kenntnis nehmen – auch die Dämonen „glauben und zittern" (Jak 2,19) –, sondern dass wir ihn lieben. Liebe lässt sich nicht durch überwältigende Machtdemonstration erzwingen. Und er hat sich gezeigt: in Jesus von Nazareth, dessen Leben und Auferstehung jeder historisch prüfen kann.`,
              sources: [{ kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées', ref: 'Fragment 149 (Zählung Lafuma)', year: '1670', quote: `Es gibt genug Licht für die, die nur sehen wollen, und genug Dunkelheit für die, die eine gegenteilige Neigung haben.`, status: 'paraphrase' }],
              followUps: [
                {
                  id: 'schrift-am-himmel',
                  objection: `Ein einziger Satz in Sternenschrift am Himmel – „Ich bin Gott" – und alle würden glauben.`,
                  objectionBy: 'Lawrence Krauss',
                  answer: `Würden sie lieben – oder nur kapitulieren? Jesus sagt im Gleichnis vom reichen Mann: „Hören sie Mose und die Propheten nicht, so werden sie auch nicht glauben, ob jemand von den Toten aufstünde" (Lk 16,31). Viele, die Wunder Jesu sahen, wurden nicht gläubig. Ein Zeichen am Himmel würde wahrscheinlich als Halluzination, Technik oder Täuschung erklärt. Gott sucht nicht Unterwerfung, sondern Vertrauen.`,
                  questionsBack: [`Wenn morgen ein solches Zeichen erschiene – was wäre deine erste Erklärung?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gandhi-dahmer',
      objection: `Also ist Gandhi in der Hölle und Jeffrey Dahmer im Himmel?`,
      objectionBy: 'Christopher Hitchens',
      answer: `Ich weiß es nicht – und kein Christ weiß es. Die Kirche hat nie ein Verzeichnis der Verdammten veröffentlicht. Gandhi bewunderte die Bergpredigt; was in seinem Herzen vor Gott war, weiß Gott allein. Dahmer ließ sich im Gefängnis taufen; ob seine Umkehr echt war, weiß Gott allein. Jesus sagte: „Viele werden kommen vom Morgen und vom Abend … und die Letzten werden die Ersten sein" (Lk 13,29–30). Wir werden im Himmel wohl manche Überraschung erleben.`,
      followUps: [
        {
          id: 'ausserhalb-kein-heil',
          objection: `Aber eure Kirche lehrt doch: Außerhalb der Kirche gibt es kein Heil (Cyprian). Also sind alle Nichtchristen verloren.`,
          answer: `Der Satz Cyprians sagt, wo Gott das Heil schenkt: in Christus und seiner Kirche. Er war ursprünglich gegen Christen gerichtet, die die Kirche durch Spaltung verließen – nicht ein Urteil über Menschen, die nie von Christus hörten. Die orthodoxe Tradition, auch die koptische, ist zurückhaltend: Sie bezeugt den Weg des Heils, aber sie bindet Gottes Barmherzigkeit nicht. Ehrlich gesagt: Orthodoxe Theologen beurteilen die Hoffnung für Nichtchristen unterschiedlich weit – einig sind sie darin, dass das Urteil Gott gehört.`,
          sources: [{ kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'Brief 73', ref: '21', year: 'um 256', quote: `Außerhalb der Kirche gibt es kein Heil (salus extra ecclesiam non est).`, original: 'salus extra ecclesiam non est', status: 'verbatim', note: 'Kontext: Streit um die Ketzertaufe.' }],
          followUps: [
            {
              id: 'wozu-mission',
              objection: `Wenn Gott die Nichtchristen sowieso gerecht richtet, wozu dann Mission und Kirche? Dann ist es doch egal, was man glaubt.`,
              answer: `Mission ist nicht nur eine Rettungsaktion vor der Hölle, sondern die Einladung in das volle Leben mit Gott – jetzt schon: Vergebung, Heilung, Gemeinschaft, die Sakramente, die Wahrheit über Gott. Das Licht, das ein Mensch ohne Christus hat, genügt, um gerecht gerichtet zu werden; es genügt nicht, um die Freude zu kennen, für die er geschaffen ist. Und Christus hat es befohlen (Mt 28,19) – wer liebt, will die beste Nachricht der Welt teilen.`,
              followUps: [
                {
                  id: 'nie-von-jesus-gehoert',
                  objection: `Und was ist mit den Millionen, die nie von Jesus gehört haben? Ein Kind im Amazonas hatte keine Chance.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Die Bibel sagt, dass Gott jedem Menschen nahe ist, „daß sie den Herrn suchen sollten, ob sie doch ihn fühlen und finden möchten" (Apg 17,27), und dass er jeden nach dem Licht richtet, das er hatte (Röm 2,14–16). Gott ist nicht weniger gerecht als du – er kennt die Umstände jedes Menschen vollkommen. Manche Philosophen wie William Lane Craig haben überlegt, ob Gott die Welt so geordnet haben könnte, dass niemand verloren geht, nur weil ihn die Botschaft nicht erreichte – das ist eine Hypothese, kein Dogma. Sicher ist: Niemand wird ungerecht behandelt werden.`,
                  sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: '„No Other Name": A Middle Knowledge Perspective on the Exclusivity of Salvation through Christ', ref: 'Faith and Philosophy 6', year: '1989', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'schaecher-absurd',
      objection: `Der Schächer am Kreuz: ein Leben lang Verbrecher, ein einziger Satz – und das Paradies. Das ist moralisch absurd.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Schau genau hin: Der Schächer leugnet nichts. Er sagt: „Wir empfangen, was unsre Taten wert sind" (Lk 23,41) – er akzeptiert seine gerechte Strafe, verteidigt den Unschuldigen gegen den Spott und vertraut sich Christus an, als selbst die Jünger geflohen waren. Er bleibt am Kreuz; die irdische Strafe wird ihm nicht erlassen. Was er empfängt, ist nicht ein Freispruch für sein Verbrechen, sondern ein neues Herz und die Gemeinschaft mit Christus.`,
      followUps: [
        {
          id: 'arbeiter-im-weinberg',
          objection: `Das Gleichnis von den Arbeitern im Weinberg zeigt es doch: Wer eine Stunde gearbeitet hat, bekommt gleich viel wie der, der den ganzen Tag schuftete. Euer Gott ist willkürlich.`,
          objectionBy: 'Bertrand Russell',
          answer: `Niemand im Gleichnis wird betrogen – die Ersten bekommen genau, was vereinbart war. Der Herr fragt: „Siehst du darum scheel, daß ich so gütig bin?" (Mt 20,15). Das Problem ist nicht Ungerechtigkeit, sondern Neid über fremde Güte. Das Gleichnis spricht nicht über Lohn für Leistung, sondern darüber, dass Gottes Reich ein Geschenk ist. Wer sich über die Gnade für andere ärgert, ähnelt dem älteren Bruder im Gleichnis vom verlorenen Sohn (Lk 15,28–30).`,
          sources: [{ kind: 'bibel', work: 'Matthäus', ref: '20,15', quote: `Oder habe ich nicht Macht, zu tun, was ich will, mit dem Meinen? Siehst du darum scheel, daß ich so gütig bin?`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'gnade-entwertet-moral',
              objection: `Wenn am Ende alles Gnade ist, wird moralisches Bemühen sinnlos. Dann kann ich auch leben, wie ich will.`,
              answer: `Nach koptisch-orthodoxem Verständnis ist Gnade keine Erlaubnis zum Nichtstun, sondern eine Kraft, die heilt und befähigt. Der Mensch wirkt mit (Synergie): Glaube, Buße und gute Werke sind die Antwort und das Wachstum in der Gemeinschaft mit Gott. Darum richtet Christus nach den Werken (Mt 25,31–46), und jeder wird empfangen, „nach dem er gehandelt hat bei Leibesleben" (2 Kor 5,10). Gnade nimmt dem Bemühen nicht den Sinn – sie gibt ihm erst ein Ziel.`,
              followUps: [
                {
                  id: 'himmel-als-motiv-egoistisch',
                  objection: `Wenn ihr Gutes tut, um in den Himmel zu kommen, ist eure Moral egoistisch.`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Das wäre so, wenn der Himmel ein äußerer Preis wäre – wie Geld für eine Liebeserklärung. Aber der Himmel ist Gott selbst, die vollendete Liebe. Lewis vergleicht das mit der Ehe: Wer eine Frau heiratet, weil er sie liebt, ist kein Söldner, obwohl die Ehe der „Lohn" seiner Liebe ist. Der Lohn der Liebe ist mehr Liebe. Und die Väter lehrten: Man beginnt vielleicht aus Furcht, wächst dann zur Hoffnung und am Ende zur Liebe, die Gutes um seiner selbst willen tut.`,
                  sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Weight of Glory', year: '1941', quote: `Es gibt Belohnungen, die die Motive nicht beschmutzen, weil sie die natürliche Vollendung der Tätigkeit selbst sind – wie die Ehe für den Liebenden.`, status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'christen-nicht-besser',
      objection: `Viele Christen sind nicht besser als Atheisten – oft schlechter. Warum sollen ausgerechnet sie belohnt werden?`,
      objectionBy: 'Sam Harris',
      answer: `Völlig richtig – viele Christen sind schlechter als viele Atheisten, und das beschämt uns. Aber das Evangelium hat nie behauptet, dass Christen bessere Menschen sind, sondern dass sie Menschen sind, die wissen, dass sie Gnade brauchen. Die Kirche ist ein Krankenhaus für Sünder, kein Museum für Heilige. Lewis sagt: Wenn ein von Natur aus schwieriger Mensch durch Christus ein wenig freundlicher wird, ist das vor Gott vielleicht mehr als die angeborene Freundlichkeit eines anderen.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch IV, Kap. 10', year: '1952', status: 'paraphrase' }],
    },
  ],
  questionsToAsk: [
    `Wenn der Himmel ein Lohn für Gutsein wäre – wie gut müsste man sein, und wer legt die Grenze fest?`,
    `Liebst du deinen Nächsten wirklich wie dich selbst – jeden Tag?`,
    `Woher weißt du, dass Gott einen ehrlich suchenden Atheisten verwirft? Hat das ein Christ dir gesagt oder die Bibel?`,
    `Wäre es dir lieber, ein Verbrecher, der sich wirklich ändert, hätte keine Chance?`,
    `Bist du noch auf der Suche – oder hast du die Frage nach Gott abgeschlossen?`,
  ],
  avoid: [
    `Konkrete Menschen (Gandhi, Einstein, den verstorbenen Vater des Gesprächspartners) für verdammt erklären – das steht keinem Menschen zu.`,
    `„Ein Gebet genügt, egal wie du lebst" – das ist nicht die orthodoxe Heilslehre und bestätigt den Einwand.`,
    `Behaupten, Atheisten seien insgeheim alle unmoralisch oder unehrlich.`,
    `Die Hölle als Drohkulisse benutzen, um das Gespräch zu gewinnen – das erzeugt Angst, nicht Glauben.`,
  ],
  concessions: [
    `Christen haben oft so gepredigt, als sei die Hölle die Strafe für falsche Meinungen – das hat den Einwand provoziert.`,
    `Wie Gott Menschen richtet, die Christus nie wirklich kennenlernten, hat er nicht im Detail offenbart; hier gibt es unter orthodoxen Theologen unterschiedliche Akzente.`,
    `Viele Atheisten leben moralisch vorbildlicher als viele Christen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Great Divorce (Die große Scheidung)', year: '1945', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God', ref: 'Kap. 5', year: '2008', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1993', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Heil', 'Gnade', 'Gericht', 'Atheismus', 'Schächer', 'Röm 2'],
  related: [
    'hoelle/ewige-strafe-ungerecht',
    'hoelle/liebender-gott-keine-hoelle',
    'pluralismus/nie-von-jesus-gehoert',
    'pluralismus/arrogant-nur-jesus',
    'moral-und-gott/gut-ohne-gott',
    'gottesbeweise/goettliche-verborgenheit',
    'vergebung-gerechtigkeit/vergebung-ungerecht',
  ],
};

export default claim;
