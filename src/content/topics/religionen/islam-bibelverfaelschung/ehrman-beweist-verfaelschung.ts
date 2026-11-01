import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ehrman-beweist-verfaelschung',
  title: `„Sogar christliche Gelehrte wie Bart Ehrman sagen, die Bibel sei verfälscht."`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Toronto', work: 'Debatten, in denen er sich häufig auf Ehrman stützt' },
    { name: 'Mohammed Hijab', role: 'Islamischer Debattierer, London', work: 'Online-Debatten über die Bibel' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, University of North Carolina at Chapel Hill (agnostisch)', work: 'Misquoting Jesus (2005); Orthodox Corruption of Scripture (1993); Forged (2011)' },
  ],
  steelman: `„Bart Ehrman ist einer der führenden Neutestamentler der Welt, Schüler von Bruce Metzger, früher selbst evangelikaler Christ. Er zeigt, dass Schreiber den Text bewusst verändert haben, um ihn der späteren Rechtgläubigkeit anzupassen (*The Orthodox Corruption of Scripture*). Er sagt, wir hätten nicht einmal Kopien der Kopien der Originale. Er hält viele Briefe des Neuen Testaments für Fälschungen (*Forged*) und meint, Jesus habe sich nicht für Gott gehalten. Wenn ein christlich ausgebildeter Spitzenforscher das sagt, kann man nicht behaupten, nur Muslime würden die Zuverlässigkeit der Bibel bezweifeln. Ehrman bestätigt, was der Koran seit 1.400 Jahren sagt."`,
  biblical: {
    summary: `Ehrman ist kein Christ, sondern bezeichnet sich als Agnostiker. Seine Arbeit zeigt, dass es Textvarianten gibt und Schreiber manchmal theologisch motiviert änderten – aber auch, dass man diese Änderungen **erkennt**, weil andere Handschriften den älteren Text bewahren. Er räumt ausdrücklich ein, dass wesentliche christliche Glaubensinhalte von den Varianten nicht berührt werden. Und seine historischen Ergebnisse widersprechen dem Koran an mehr Stellen als der Bibel: Er hält die Kreuzigung Jesu für historisch gesichert.`,
    detail: `**Was Ehrman sagt – und was nicht:**
- Ja: Es gibt viele Varianten; einige sind theologisch motiviert; manche Bücher stammen seiner Ansicht nach nicht von den genannten Autoren.
- Ja: Wesentliche Glaubensinhalte sind von den Varianten nicht betroffen (Anhang der Taschenbuchausgabe von *Misquoting Jesus*).
- Ja: Jesus wurde unter Pontius Pilatus gekreuzigt – das zählt er zu den sichersten Daten über Jesus.
- Nein: Ehrman sagt nirgends, dass die Bibel ursprünglich eine islamische Botschaft enthielt.

**Methodischer Punkt:** Ehrmans Ansatz schließt Wunder als historische Erklärung aus. Damit fallen auch die Jungfrauengeburt, die Wunder Jesu und seine Erhöhung zu Gott – alles Lehren des Korans.`,
    sources: [
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Misquoting Jesus (Taschenbuchausgabe, Anhang mit Interview)', quote: `Ehrman erklärt, seine Position stehe nicht im Widerspruch zu Metzgers Auffassung, dass wesentliche christliche Glaubensinhalte von den Textvarianten nicht berührt werden.`, original: `essential Christian beliefs are not affected by textual variants in the manuscript tradition of the New Testament`, status: 'paraphrase', note: 'Vielzitiertes Zugeständnis; Seitenzahl je nach Ausgabe.' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Did Jesus Exist? The Historical Argument for Jesus of Nazareth', year: '2012', quote: `Die Kreuzigung Jesu auf Befehl des Pilatus gehört zu den sichersten Fakten über den historischen Jesus.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'How Jesus Became God', year: '2014', quote: `Die Verehrung Jesu als göttliches Wesen setzte sehr früh ein – schon die frühesten Christen nach seinem Tod sahen ihn als erhöht.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche hat keine Angst vor kritischer Forschung. Sie hat sie selbst begonnen – Origenes und Hieronymus waren Textforscher, die koptischen Awlad al-'Assal ebenso. Entscheidend ist, die Ergebnisse ehrlich zu unterscheiden: Was ist Befund (es gibt Varianten), und was ist Weltanschauung (Wunder können nicht geschehen)?`,
    sources: [
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Vorrede zu den Evangelien an Papst Damasus', year: '383', quote: `Hieronymus prüfte die lateinischen Handschriften an den griechischen Vorlagen, weil die Abweichungen groß waren.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Ehrman ist ein angesehener Textkritiker; seine Fachkollegen teilen viele seiner Befunde, aber nicht seine populären Zuspitzungen. Daniel Wallace, Peter Williams und andere haben in Debatten und Fachbeiträgen gezeigt, dass seine Beispiele den Glauben nicht gefährden. Ehrman selbst unterscheidet zwischen seinen wissenschaftlichen Publikationen und seinen Büchern für ein breites Publikum, die bewusst pointierter formuliert sind.`,
    sources: [
      { kind: 'fachliteratur', author: 'Daniel B. Wallace (Hg.)', work: 'Revisiting the Corruption of the New Testament', year: '2011', quote: `Auseinandersetzung mit Ehrmans These der „orthodoxen Verfälschung".`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ehrman ist Agnostiker, kein Christ – und er gibt zu, dass die Varianten keine wesentliche christliche Lehre berühren. Außerdem hält er die Kreuzigung Jesu für eine der sichersten Tatsachen der Geschichte. Wenn du Ehrman als Autorität nimmst, musst du ihn ganz nehmen: Dann widerlegt er 4:157 und auch die Jungfrauengeburt und die Wunder Jesu, die der Koran lehrt.`,
  keyPoints: [
    `**Ehrmans Zugeständnis:** Wesentliche christliche Glaubensinhalte werden von den Textvarianten nicht berührt.`,
    `**Ehrman bestätigt die Kreuzigung** als historisch gesichert – gegen 4:157.`,
    `**Ehrmans Methode schließt Wunder aus** – damit auch die Jungfrauengeburt, Jesu Wunder und die Offenbarung an Mohammed.`,
    `**Erkannte Änderungen beweisen intakte Überlieferung:** Man erkennt eine Änderung nur, weil andere Handschriften den älteren Text bewahren.`,
    `**Ehrmans Jesus ist nicht der Jesus des Korans:** Ein apokalyptischer Prophet, der am Kreuz starb – kein jungfräulich geborener Gesandter, der lebendig erhöht wurde.`,
  ],
  voices: [
    {
      person: 'wallace',
      role: 'als Textkritiker, der Ehrman mehrfach öffentlich gegenüberstand',
      text: `Wallace hat mit Ehrman öffentlich debattiert und ihn als ausgezeichneten Fachmann gewürdigt. Er zeigt jedoch, dass Ehrmans populäre Darstellung einen falschen Eindruck erzeugt: Die Leser glauben, der Text sei unsicher, obwohl Ehrman selbst einräumt, dass keine Kernlehre betroffen ist. Wallace nennt das eine Kluft zwischen dem, was Ehrman in Fachpublikationen zugesteht, und dem Eindruck, den seine Bestseller erwecken.`,
      sources: [
        { kind: 'fachliteratur', author: 'Daniel B. Wallace', work: 'The Gospel according to Bart: A Review Article of Misquoting Jesus, Journal of the Evangelical Theological Society 49', year: '2006', quote: `Kritische Würdigung von Misquoting Jesus: Fachliche Befunde ja, aber übertriebene Schlussfolgerungen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'metzger',
      role: 'als Ehrmans Lehrer',
      text: `Metzger hat sein Leben der Textkritik gewidmet und blieb überzeugter Christ. Gerade die Kenntnis aller Varianten hat ihn nicht am Glauben irre werden lassen, sondern ihm gezeigt, wie gut der Text bezeugt ist. Ehrman beruft sich selbst darauf, dass seine Position der Metzgers über die wesentlichen Glaubensinhalte nicht widerspreche.`,
      sources: [
        { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'The Text of the New Testament (frühere Auflagen ohne Ehrman)', year: '1964', quote: `Grundlegende Darstellung der Textkritik durch einen gläubigen Textforscher.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'james-white',
      role: 'als Apologet, der mit Ehrman debattierte',
      text: `White hat 2009 mit Ehrman über die Frage debattiert, ob die Bibel Jesus falsch zitiert. Er weist Muslime regelmäßig darauf hin, dass sie Ehrman nicht konsequent verwenden können: Ehrmans Skepsis trifft den Koran mindestens ebenso hart, denn derselbe Maßstab, an Fehlerlosigkeit und frühe Bezeugung angelegt, gilt auch für die Überlieferung des Korans und der Hadithe.`,
      sources: [
        { kind: 'fachliteratur', author: 'James R. White', work: 'Debatte mit Bart Ehrman „Did the Bible Misquote Jesus?"', year: '2009', quote: `Auseinandersetzung mit Ehrmans Thesen zur Textüberlieferung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'pj-williams',
      role: 'als Neutestamentler',
      text: `Williams hat Ehrmans populäre Bücher detailliert besprochen und gezeigt, dass seine Beispiele oft eine Unsicherheit suggerieren, die der Befund nicht trägt. Er betont, dass Historiker die Evangelien nach denselben Maßstäben prüfen sollten wie andere antike Quellen – und dass sie dabei außerordentlich gut abschneiden.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter J. Williams', work: 'Can We Trust the Gospels?', year: '2018', quote: `Die Evangelien halten einer historischen Prüfung nach antiken Maßstäben stand.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'ehrman-keine-kopien',
      objection: `Ehrman sagt, wir haben nicht einmal Kopien der Kopien der Originale. Wie kannst du dann behaupten, die Bibel sei zuverlässig?`,
      objectionBy: 'Shabir Ally',
      answer: `Er hat recht, dass wir keine Abschriften der ersten Generation besitzen – das gilt für jeden antiken Text, auch für den Koran. Aber derselbe Ehrman sagt, dass die wesentlichen Glaubensinhalte von den Varianten nicht berührt werden. Er bestreitet also nicht, dass wir wissen, was das Neue Testament lehrt.`,
      followUps: [
        {
          id: 'orthodoxe-verfaelschung',
          objection: `Ehrman zeigt in „The Orthodox Corruption of Scripture", dass Schreiber den Text bewusst geändert haben, um die Gottheit Jesu zu betonen.`,
          objectionBy: 'Shabir Ally',
          answer: `Ja, an einigen Stellen haben Schreiber verdeutlicht, was sie glaubten. Aber woher wissen wir das? Weil andere Handschriften den älteren Wortlaut bewahrt haben. Und die Schreiber verdeutlichten, was der Text ohnehin schon sagte: Joh 1,1 („das Wort war Gott") und Joh 20,28 („Mein Herr und mein Gott") haben keine solche Variante. Die Gottheit Jesu ist nicht das Produkt von Schreibern, sondern steht in unbestrittenen Texten.`,
          followUps: [
            {
              id: 'gottheit-durch-schreiber',
              objection: `Dann ist die Gottheit Jesu eben schon von den Evangelisten erfunden worden – Ehrman sagt ja, das sei eine Entwicklung.`,
              objectionBy: 'Shabir Ally',
              answer: `Das ist keine Frage der Textüberlieferung mehr, sondern der Geschichte – und auch da sagt Ehrman inzwischen, dass Christen Jesus sehr früh nach seinem Tod als göttlich verehrten (*How Jesus Became God*). Für dich als Muslim ist das ein Problem: Dann haben die frühesten Nachfolger Jesu genau das geglaubt, was der Islam ablehnt – siehe das zweite Dilemma (61:14).`,
              detail: `Siehe Claim „Die Jünger Jesu waren Muslime" und Claim „Die Gottheit Jesu wurde erst später erfunden" (Topic „Der historische Jesus").`,
            },
          ],
        },
      ],
    },
    {
      id: 'ehrman-ist-neutral',
      objection: `Ehrman ist neutral, kein Apologet. Deshalb ist er objektiver als christliche Gelehrte, die ihre Bibel verteidigen müssen.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Ehrman hat eine Weltanschauung wie jeder: Er ist Agnostiker und geht davon aus, dass Historiker Wunder nicht feststellen können. Mit dieser Methode fallen auch die Jungfrauengeburt, Jesu Wunder und seine Erhöhung – alles Lehren des Korans – und erst recht die Offenbarung an Mohammed durch einen Engel. Du kannst Ehrmans Methode nicht nur auf die Bibel anwenden und beim Koran aussetzen.`,
      questionsBack: [
        `Akzeptierst du Ehrmans Ergebnis, dass Jesus gekreuzigt wurde? Und dass Historiker keine Jungfrauengeburt feststellen können?`,
      ],
      followUps: [
        {
          id: 'nur-textkritik-nicht-wunder',
          objection: `Ich benutze Ehrman nur für die Textkritik, nicht für seine Ansichten über Wunder.`,
          objectionBy: 'Shabir Ally',
          answer: `Dann nimm auch sein textkritisches Ergebnis ganz: Keine Kernlehre wird von den Varianten berührt, und die Handschriften vor Mohammed lehren die Kreuzigung. Genau das ist der Ausgangspunkt des Islamischen Dilemmas. Der Textkritiker Ehrman bestätigt Prämisse 4 – die Bibel des 7. Jahrhunderts ist im Wesentlichen unsere Bibel.`,
        },
      ],
    },
    {
      id: 'ehrman-faelschungen',
      objection: `Ehrman zeigt in „Forged", dass viele Bücher des Neuen Testaments Fälschungen sind – die Pastoralbriefe, 2 Petrus, Epheser. Wie kann das Gottes Wort sein?`,
      objectionBy: 'verbreiteter Einwand',
      answer: `Die Verfasserschaft einiger Briefe wird in der Forschung diskutiert, und es gibt gute Argumente für die traditionelle Zuschreibung. Aber selbst wenn man nur die sieben Paulusbriefe nimmt, die auch Ehrman für echt hält: Sie enthalten Kreuzestod und Auferstehung (1 Kor 15), die Präexistenz und göttliche Würde Christi (Phil 2,6–11) und das Gebet zu Jesus (1 Kor 16,22). Das Christentum steht und fällt nicht mit den umstrittenen Briefen.`,
      followUps: [
        {
          id: 'koran-bestaetigt-injil-nicht-briefe',
          objection: `Der Koran bestätigt ohnehin nur das Injil, nicht die Briefe des Paulus.`,
          objectionBy: 'Ali Ataie',
          answer: `Einverstanden – dann bleiben wir bei den Evangelien. Alle vier berichten ausführlich von der Kreuzigung, dem Tod und der Auferstehung Jesu. Das ist das Injil, das die Christen zur Zeit Mohammeds lasen und auf das der Koran sie verpflichtete (5:47). Die Briefe brauche ich für das Dilemma gar nicht.`,
        },
      ],
    },
    {
      id: 'ehrman-jesus-wie-koran',
      objection: `Ehrmans Jesus ist ein Prophet, der sich nicht für Gott hielt – das ist doch genau der Jesus des Korans!`,
      objectionBy: 'Shabir Ally',
      answer: `Nein. Ehrmans Jesus ist ein apokalyptischer Prophet, der das baldige Weltende erwartete, am Kreuz starb und tot blieb. Der Jesus des Korans wurde von einer Jungfrau geboren, tat Wunder, wurde *nicht* gekreuzigt, sondern lebendig zu Gott erhöht und kommt wieder. Ehrman widerspricht dem Koran an mehr Stellen als dem Neuen Testament.`,
      questionsBack: [
        `Wenn du Ehrmans Jesus übernimmst: Glaubst du dann, dass Jesus am Kreuz gestorben ist?`,
      ],
    },
  ],
  questionsToAsk: [
    `Wusstest du, dass Ehrman sagt, die wesentlichen christlichen Lehren seien von den Varianten nicht betroffen?`,
    `Akzeptierst du Ehrmans Urteil, dass Jesus gekreuzigt wurde?`,
    `Würdest du Ehrmans Methode auch auf den Koran und die Hadithe anwenden?`,
    `Was hält Ehrman von der Jungfrauengeburt?`,
  ],
  avoid: [
    `Ehrman nicht als „bösartig" oder „unwissend" hinstellen. Er ist ein fähiger Wissenschaftler; argumentiere mit seinen eigenen Zugeständnissen.`,
    `Nicht behaupten, Ehrman sei „Christ" oder sei es nie gewesen – er war Evangelikaler und ist heute Agnostiker.`,
  ],
  concessions: [
    `Ehrman hat recht, dass es theologisch motivierte Schreiberänderungen gab – sie sind gut dokumentiert.`,
    `Die Verfasserschaft einiger neutestamentlicher Briefe ist in der Forschung umstritten.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Misquoting Jesus', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Daniel B. Wallace (Hg.)', work: 'Revisiting the Corruption of the New Testament', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael J. Kruger', work: 'The Question of Canon', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Ehrman', 'Textkritik', 'Islam', 'Bibel'],
  related: [
    'islam-bibelverfaelschung/bibel-textvarianten',
    'islam-dilemma/das-islamische-dilemma',
    'islam-dilemma/juenger-waren-muslime',
    'historischer-jesus/gottheit-jesu-spaet-erfunden',
  ],
};

export default claim;
