import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'name-jehova',
  title: `„Gottes Name Jehova muss verwendet werden – die Kirchen haben ihn entfernt."`,
  proponents: [
    { name: 'Wachtturm-Gesellschaft', role: 'Lehrorgan der Zeugen Jehovas', work: 'Neue-Welt-Übersetzung (2013), Anhang A4/A5 „Der Gottesname in den Hebräischen/Christlichen Griechischen Schriften"; Broschüre „Der göttliche Name, der für immer bleiben wird" (1984)' },
    { name: 'George Howard', role: 'Religionswissenschaftler, University of Georgia (kein Zeuge Jehovas)', work: 'The Tetragram and the New Testament, Journal of Biblical Literature 96 (1977), 63–83' },
    { name: 'Joseph F. Rutherford', role: 'Zweiter Präsident der Wachtturm-Gesellschaft', work: 'Annahme des Namens „Jehovas Zeugen" (1931)' },
  ],
  steelman: `Gottes persönlicher Name, das Tetragramm JHWH, steht rund 6800-mal im hebräischen Alten Testament – häufiger als jedes andere Wort für Gott. Jesus lehrte beten: „Geheiligt werde dein Name" (Mt 6,9) und sagte: „Ich habe deinen Namen offenbart" (Joh 17,6.26). Aus abergläubischer Scheu ersetzten Juden den Namen durch „Adonai", und Christen übernahmen diesen Brauch – Bibeln schreiben bis heute „HERR" statt des Namens. Dabei zeigen vorchristliche Septuaginta-Handschriften (etwa Papyrus Fouad 266 und die Zwölfprophetenrolle aus Nahal Hever), dass griechische Bibeln JHWH in hebräischen Buchstaben enthielten. Der Gelehrte George Howard folgerte daraus, dass die neutestamentlichen Autoren den Namen in ihren Zitaten bewahrten und spätere Abschreiber ihn tilgten. „Jehova" ist die im Deutschen eingebürgerte Form – so wie „Jesus" nicht hebräisch „Jeschua" ausgesprochen wird. Wer Gottes Namen weglässt, behandelt ihn wie einen Namenlosen und verdunkelt den Unterschied zwischen Jehova und Jesus.`,
  biblical: {
    summary: `JHWH ist tatsächlich Gottes geoffenbarter Name (Ex 3,14–15), und die ursprüngliche Aussprache ist unsicher (die Forschung rekonstruiert meist „Jahwe"). „Jehova" ist eine **Mischform**: die Konsonanten JHWH mit den Vokalzeichen von *Adonai*, die die Masoreten als Leseanweisung einsetzten; christliche Gelehrte des Spätmittelalters (z. B. Petrus Galatinus 1518) lasen sie zusammen. Im Neuen Testament steht in **keiner** der über 5000 griechischen Handschriften das Tetragramm – auch nicht in den ältesten Papyri um 200. Die Apostel schreiben durchgängig *Kyrios* („Herr") – und genau dadurch wenden sie Jehova-Stellen auf Jesus an: „Wer den Namen des Herrn anrufen wird, soll selig werden" (Röm 10,13 = Joel 3,5) bezieht sich auf den Herrn Jesus aus Röm 10,9.`,
    detail: `**Das Neue Testament verbindet den Gottesnamen mit Jesus:**
- Phil 2,9–11: Gott gab Jesus „den Namen, der über alle Namen ist", damit sich jedes Knie beuge – ein Zitat aus Jes 45,23, wo Jehova sagt: „Mir sollen sich alle Knie beugen."
- 1 Petr 3,15 wendet Jes 8,13 („den HERRN Zebaoth, den heiliget") auf Christus an.
- Hebr 1,10–12 wendet Ps 102 (ein Gebet an Jehova) auf den Sohn an.
- „Jesus" (*Jehoschua*) bedeutet selbst „JHWH rettet".

**Die NWÜ setzt „Jehova" 237-mal ins Neue Testament** – gestützt auf hebräische Rückübersetzungen des NT (die sogenannten J-Quellen, meist ab dem Spätmittelalter, z. B. von Elias Hutter 1599 oder Franz Delitzsch 1877). Diese Übersetzungen sind keine Quellen, sondern spätere Übertragungen aus dem Griechischen oder Lateinischen. Die NWÜ übernimmt sie zudem selektiv: Wo Delitzsch für *Kyrios* mit Bezug auf Jesus JHWH schreibt, folgt sie ihm nicht.

**Jesus und der Name:** Wir haben keinen Bericht, dass Jesus das Tetragramm aussprach. Er redete Gott als „Vater" (aramäisch *Abba*) an und lehrte seine Jünger dasselbe. Vor dem Hohen Rat sprach er von der „Kraft" Gottes (Mk 14,62) – eine damals übliche ehrfürchtige Umschreibung. „Deinen Namen offenbaren" (Joh 17,6) heißt: Gottes Wesen als Vater kundtun (Mt 11,27) – die Jünger kannten JHWH als Juden längst.`,
    sources: [
      { kind: 'bibel', work: 'Exodus', ref: '3,14–15', quote: `Gott sprach zu Mose: Ich werde sein, der ich sein werde. … Der HERR, der Gott eurer Väter … hat mich zu euch gesandt. Das ist mein Name ewiglich.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Römer', ref: '10,9.13', quote: `Denn so du mit deinem Munde bekennst Jesus, daß er der HERR sei … wird selig. … Denn „wer den Namen des HERRN wird anrufen, soll selig werden".`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Philipper', ref: '2,9–11', quote: `Darum hat ihn auch Gott erhöht und hat ihm einen Namen gegeben, der über alle Namen ist, daß in dem Namen Jesu sich beugen sollen aller derer Kniee, die im Himmel und auf Erden und unter der Erde sind, und alle Zungen bekennen sollen, daß Jesus Christus der HERR sei, zur Ehre Gottes, des Vaters.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '45,23', quote: `Mir sollen sich alle Kniee beugen und alle Zungen schwören.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '4,12', quote: `Und ist in keinem andern Heil, ist auch kein andrer Name unter dem Himmel den Menschen gegeben, darin wir sollen selig werden.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat den Gottesnamen nie „entfernt", sondern die apostolische Praxis fortgesetzt: Schon die Septuaginta, die Bibel der ersten Christen, gab JHWH überwiegend mit *Kyrios* wieder, und die Apostel taten dasselbe. Die koptische Bibel schreibt für JHWH *Pchoeis* (ⲡϭⲟⲉⲓⲥ, „der Herr"), die Liturgie ruft „Kyrie eleison". Kirchenväter wie Origenes und Hieronymus kannten das Tetragramm genau, erörterten es und hielten es für „unaussprechlich" im Sinn höchster Ehrfurcht. Für die Kirche ist der „Name" Gottes in der Bibel nicht ein Lautwort, sondern seine geoffenbarte Gegenwart und sein Wesen (Ex 34,5–7) – und dieser Name ist uns in Jesus Christus endgültig geoffenbart.`,
    detail: `Hieronymus erwähnt in seinem Brief an Marcella die zehn hebräischen Gottesnamen und berichtet, dass manche griechischen Abschreiber das Tetragramm wegen der Ähnlichkeit der Buchstaben fälschlich als ΠΙΠΙ lasen – ein Zeichen, dass das Tetragramm in einigen griechischen AT-Handschriften stand, die Väter es aber kannten und nichts verbargen. Lutherbibel und Elberfelder kennzeichnen JHWH bis heute sichtbar: Luther mit „HERR" in Großbuchstaben, die Elberfelder Bibel von 1905 schreibt im Alten Testament sogar „Jehova".`,
    sources: [
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Brief 25 an Marcella', quote: `Hieronymus zählt die zehn hebräischen Gottesnamen auf und bespricht das „unaussprechliche" Tetragramm.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Prologus Galeatus', quote: `Manche griechischen Abschreiber lasen das hebräische Tetragramm wegen der Buchstabenähnlichkeit als ΠΙΠΙ.`, status: 'paraphrase' },
      { kind: 'koptisch', work: 'Koptische Bibelübersetzungen (sahidisch/bohairisch)', quote: `JHWH wird mit „der Herr" (ⲡϭⲟⲉⲓⲥ / ⲡϭⲟⲓⲥ) wiedergegeben.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Niemand hat Gottes Namen versteckt: Lutherbibeln schreiben „HERR" in Großbuchstaben, die Elberfelder Bibel von 1905 sogar „Jehova". Aber im Neuen Testament steht in keiner einzigen griechischen Handschrift JHWH – die Apostel schrieben „Herr" (*Kyrios*), und so konnten sie Jehova-Stellen direkt auf Jesus beziehen (Röm 10,13; Phil 2,10–11). Der Name, in dem wir gerettet werden, ist der Name Jesu (Apg 4,12).`,
  keyPoints: [
    `**Nichts verborgen:** Luther („HERR"), Elberfelder 1905 („Jehova") – JHWH ist im AT sichtbar markiert.`,
    `**„Jehova" ist eine Mischform** aus JHWH und den Vokalen von *Adonai*; die Wachtturm-Gesellschaft räumt selbst ein, dass es nicht die Originalaussprache ist.`,
    `**Null NT-Handschriften mit JHWH** – auch nicht die ältesten Papyri (P46, P66, P75).`,
    `**Kyrios verbindet Jesus mit Jehova:** Röm 10,9–13; Phil 2,9–11; 1 Petr 3,15; Hebr 1,10.`,
    `**Selektive J-Quellen:** Die 237 NWÜ-Einfügungen stützen sich auf späte hebräische Rückübersetzungen.`,
    `**Jesus lehrte „Vater"** – und das Heil ist an den Namen Jesu gebunden (Apg 4,12), nicht an eine Aussprache.`,
  ],
  voices: [
    {
      person: 'bauckham',
      role: 'als Neutestamentler (Jesus und der Gott Israels)',
      text: `Bauckham zeigt, dass die neutestamentlichen Autoren gerade die Stellen, in denen der Gottesname JHWH steht, auf Jesus übertragen. Phil 2,9–11 ist dafür das Musterbeispiel: Jesus erhält „den Namen über alle Namen" – im jüdischen Kontext den Namen Gottes selbst –, und ihm gilt die Huldigung, die Jes 45 allein Jehova vorbehält. Der *Kyrios*-Titel ist deshalb kein Ersatz, der den Namen versteckt, sondern das Mittel, mit dem die Apostel Jesus in die Identität des einen Gottes einschließen.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', quote: `Phil 2,9–11 überträgt Jes 45,23 und den göttlichen Namen auf Jesus.`, status: 'paraphrase' }],
    },
    {
      person: 'hurtado',
      role: 'als Handschriftenhistoriker (Nomina sacra)',
      text: `Hurtado hat die frühesten christlichen Handschriften untersucht. Schon im 2. und frühen 3. Jahrhundert kürzen christliche Schreiber bestimmte heilige Wörter besonders ab – die *nomina sacra*: *Kyrios* (ΚΣ), *Theos* (ΘΣ), *Iēsous* (ΙΣ), *Christos* (ΧΣ). Diese Schreibpraxis behandelt *Kyrios* und den Namen Jesu als gleichermaßen heilige Namen. Von einem verdrängten Tetragramm ist in diesen frühesten Zeugen nichts zu sehen.`,
      sources: [{ kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'The Earliest Christian Artifacts: Manuscripts and Christian Origins', year: '2006', ref: 'Kapitel zu den Nomina sacra', quote: `Die Nomina sacra sind eine sehr frühe christliche Schreibkonvention; Kyrios und Jesus werden gleichermaßen als heilige Namen behandelt.`, status: 'paraphrase' }],
    },
    {
      person: 'hieronymus',
      role: 'als Hebraist der Alten Kirche',
      text: `Hieronymus, der beste Hebräischkenner unter den lateinischen Vätern, erörterte die zehn Gottesnamen der hebräischen Bibel und das Tetragramm ausführlich. Er bezeugt, dass die Kirche den Namen kannte und studierte. Dass er ihn in der Vulgata mit *Dominus* wiedergab, folgt der Praxis der Septuaginta und der Apostel – nicht einem Wunsch, etwas zu verbergen.`,
      sources: [{ kind: 'kirchenvater', author: 'Hieronymus', work: 'Brief 25 an Marcella', quote: `Darstellung der zehn hebräischen Gottesnamen.`, status: 'paraphrase' }],
    },
    {
      person: 'metzger',
      role: 'als Textkritiker',
      text: `Metzgers Standardwerk zur neutestamentlichen Textkritik dokumentiert die Überlieferung in Tausenden Handschriften aus allen Regionen der antiken Kirche. Eine so umfassende, spurlose Tilgung eines Wortes in sämtlichen Handschriftenfamilien – ägyptisch, westlich, byzantinisch – wäre ohne Parallele. Textkritik zeigt, dass schon kleinere Eingriffe Spuren in Varianten hinterlassen; für das Tetragramm im NT gibt es keine einzige solche Variante.`,
      sources: [{ kind: 'fachliteratur', author: 'Bruce M. Metzger / Bart D. Ehrman', work: 'The Text of the New Testament', year: '4. Aufl. 2005', quote: `Überblick über die Handschriftenüberlieferung und die Methoden, Eingriffe in den Text zu erkennen.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'name-entfernt',
      objection: `Die Kirchen haben Gottes Namen fast 7000-mal aus der Bibel entfernt und durch „Herr" ersetzt. Das ist, als würde man den Namen eines Freundes aus seinen Briefen streichen.`,
      objectionBy: 'Zeugen Jehovas',
      answer: `Schlag eine Lutherbibel auf: Wo JHWH steht, schreibt sie „HERR" in Großbuchstaben – jeder kann es sehen. Die Elberfelder Bibel von 1905 schreibt sogar „Jehova". Die Übersetzer folgen damit der Septuaginta und den Aposteln selbst, die im Neuen Testament *Kyrios* schrieben. Gestrichen wurde nichts.`,
      followUps: [
        {
          id: 'geheiligt-werde-dein-name',
          objection: `Jesus lehrte: „Geheiligt werde dein Name." Wie soll man einen Namen heiligen, den man nicht benutzt?`,
          objectionBy: 'Zeugen Jehovas',
          answer: `Im selben Gebet redet Jesus Gott mit „Unser **Vater**" an – nicht mit JHWH. „Name" heißt in der Bibel die Person und ihr Ruf: Den Namen heiligen heißt, Gott so zu ehren und zu leben, dass er geehrt wird (Ez 36,23). Wir heiligen ihn, wenn wir ihm gehorchen, nicht durch eine bestimmte Aussprache.`,
          followUps: [
            {
              id: 'joh-17-name-offenbart',
              objection: `Aber Joh 17,6.26: „Ich habe deinen Namen offenbart." Welchen Namen denn, wenn nicht Jehova?`,
              objectionBy: 'Zeugen Jehovas',
              answer: `Die Jünger waren Juden – den Namen JHWH kannten sie längst. Neu war, dass Jesus ihnen Gott als **Vater** offenbarte: „Niemand kennt den Vater als nur der Sohn und wem es der Sohn offenbaren will" (Mt 11,27). Und in Joh 17,11 betet Jesus: „Erhalte sie in deinem Namen, **den du mir gegeben hast**" – der Name des Vaters ist dem Sohn gegeben.`,
              questionsBack: [`Wo im Johannesevangelium spricht Jesus das Wort „Jehova" aus?`],
            },
          ],
        },
      ],
    },
    {
      id: 'septuaginta-jhwh',
      objection: `Vorchristliche Septuaginta-Fragmente enthalten JHWH in hebräischer Schrift. Also haben auch die Apostel JHWH geschrieben, und spätere Abschreiber haben es getilgt – das hat George Howard gezeigt.`,
      objectionBy: 'Neue-Welt-Übersetzung, Anhang; George Howard',
      answer: `Die Fragmente gibt es tatsächlich – das gestehe ich zu. Aber von über 5000 griechischen NT-Handschriften enthält **keine einzige** das Tetragramm, auch nicht die Papyri um 200 aus Ägypten. Eine flächendeckende, spurlose Tilgung in Ägypten, Syrien, Kleinasien und Rom – ohne eine Textvariante, ohne einen Protest eines Kirchenvaters – ist historisch nicht vorstellbar. Howards Vorschlag war eine Hypothese, die sich in der Forschung nicht durchgesetzt hat.`,
      followUps: [
        {
          id: 'j-quellen',
          objection: `Die NWÜ stützt sich auf hebräische Übersetzungen des Neuen Testaments, die JHWH enthalten.`,
          objectionBy: 'Neue-Welt-Übersetzung, Anhang',
          answer: `Diese Übersetzungen sind Rückübertragungen aus dem Griechischen oder Lateinischen, entstanden viele Jahrhunderte nach den Aposteln. Sie zeigen, wie spätere Übersetzer *Kyrios* deuteten – nicht, was die Apostel schrieben. Und dieselben Übersetzer schreiben JHWH auch dort, wo *Kyrios* Jesus meint. Die NWÜ folgt ihnen nur, wo es zur eigenen Lehre passt.`,
          followUps: [
            {
              id: 'roem-10-13',
              objection: `In Röm 10,13 wird Joel 3,5 zitiert – da steht im Hebräischen JHWH. Also muss dort „Jehova" stehen.`,
              objectionBy: 'Zeugen Jehovas',
              answer: `Genau – und lies den Zusammenhang: „Wenn du mit deinem Mund bekennst, dass **Jesus der Herr** ist … wirst du gerettet" (10,9). Dann: „Wer den Namen des Herrn anruft, wird gerettet" (10,13). Paulus sagt: Der Herr, den Joel meint, ist Jesus. Wer in 10,13 „Jehova" einsetzt und in 10,9 „Herr" stehen lässt, zerschneidet die Gedankenlinie des Apostels. Schon in 1 Kor 1,2 nennt Paulus die Christen die, „die den Namen unseres Herrn Jesus Christus anrufen".`,
              questionsBack: [`Wen sollen Christen nach Röm 10,9–13 und 1 Kor 1,2 anrufen?`],
            },
          ],
        },
        {
          id: 'abschreiber-motiv',
          objection: `Trinitarische Abschreiber hatten ein Motiv: Ohne JHWH verschwimmt Jesus mit Jehova.`,
          objectionBy: 'Zeugen Jehovas',
          answer: `Die ältesten Papyri stammen aus der Zeit **vor** Nizäa, aus verschiedenen Gemeinden, und zeigen bereits die Kurzform ΚΣ für *Kyrios* als heiligen Namen. Wenn ein Motiv zum Verwischen existiert, dann bei den Aposteln selbst: Sie wollten zeigen, dass der Herr Jesus der Herr Israels ist. Das ist nicht Verfälschung, sondern ihre Botschaft.`,
        },
      ],
    },
    {
      id: 'aussprache-egal',
      objection: `Ob „Jehova" oder „Jahwe" – die Aussprache ist doch egal. Auch „Jesus" heißt auf Hebräisch nicht Jesus. Hauptsache, man benutzt den Namen.`,
      objectionBy: 'Zeugen Jehovas',
      answer: `Einverstanden: Gott hängt nicht an einer Lautform – darum ist „Herr" genauso wenig verboten. Wenn die Aussprache egal ist, fällt die Forderung, man **müsse** „Jehova" sagen. Entscheidend ist, wen wir anrufen. Und das Neue Testament verbindet das Heil mit dem Namen Jesu (Apg 4,12) – ein Name, der selbst bedeutet: „Jehova rettet".`,
      followUps: [
        {
          id: 'nur-wir-tragen-namen',
          objection: `Nur wir tragen Gottes Namen: „Ihr seid meine Zeugen, spricht Jehova" (Jes 43,10). Darum sind wir Gottes Volk.`,
          objectionBy: 'Zeugen Jehovas',
          answer: `Den Namen „Jehovas Zeugen" nahm die Organisation 1931 unter Rutherford an. Im Neuen Testament sagt Jesus: „Ihr werdet **meine** Zeugen sein" (Apg 1,8), und die Jünger wurden „Christen" genannt (Apg 11,26). Wer Jes 43,10 liest, findet im nächsten Vers: „Ich bin der HERR, und außer mir ist kein Heiland" (43,11) – und das NT nennt Jesus den Heiland.`,
          sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '1,8', quote: `… und werdet meine Zeugen sein zu Jerusalem und in ganz Judäa und Samarien und bis an das Ende der Erde.`, translation: 'Luther 1912', status: 'verbatim' }],
          questionsBack: [`Wessen Zeugen sollen die Jünger nach Apg 1,8 sein?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `In welcher griechischen Handschrift des Neuen Testaments steht das Tetragramm?`,
    `Wen sollen wir nach Röm 10,9–13 anrufen, um gerettet zu werden?`,
    `Wie redete Jesus Gott im Vaterunser an?`,
    `Wenn die Aussprache egal ist – warum ist „Herr" dann falsch?`,
  ],
  avoid: [
    `„Gott hat gar keinen Namen" oder „der Name ist unwichtig" – JHWH ist biblisch Gottes Name; gestehe das zu.`,
    `„‚Jehova' ist eine Erfindung der Zeugen Jehovas." – Falsch; die Form ist jahrhundertealt und stand sogar in christlichen Bibeln und Liedern.`,
    `„Es gibt keine Septuaginta-Handschriften mit JHWH." – Es gibt sie (z. B. P. Fouad 266); argumentiere mit dem Neuen Testament.`,
  ],
  concessions: [
    `JHWH ist Gottes geoffenbarter Name und steht etwa 6800-mal im Alten Testament.`,
    `Einige vorchristliche griechische Bibelhandschriften schrieben das Tetragramm in hebräischer Schrift.`,
    `Die Ersetzung durch „Herr" geht auf jüdische Ehrfurchtspraxis zurück; die genaue Aussprache ist verloren.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'The Earliest Christian Artifacts', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase' },
    { kind: 'gegner', author: 'George Howard', work: 'The Tetragram and the New Testament', ref: 'JBL 96 (1977), 63–83', status: 'paraphrase', note: 'Hypothese, auf die sich die Zeugen Jehovas stützen.' },
  ],
  difficulty: 2,
  tags: ['Zeugen Jehovas', 'Gottesname', 'Tetragramm', 'Kyrios', 'Neue-Welt-Übersetzung'],
  related: [
    'zeugen-jehovas/joh-1-1-ein-gott',
    'zeugen-jehovas/jesus-ist-michael-geschoepf',
    'islam-bibelverfaelschung/bibel-textvarianten',
    'neues-testament/nur-kopien-von-kopien',
  ],
};

export default claim;
