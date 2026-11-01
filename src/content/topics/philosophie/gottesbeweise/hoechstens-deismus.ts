import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'hoechstens-deismus',
  title: `„Gottesbeweise beweisen höchstens einen Deisten-Gott, nicht den christlichen."`,
  proponents: [
    { name: 'David Hume', role: 'Philosoph der schottischen Aufklärung', work: 'Dialogues Concerning Natural Religion (1779), Teil V' },
    { name: 'Christopher Hitchens', role: 'Publizist', work: 'Debatten (u. a. mit W. L. Craig 2009, mit Douglas Wilson 2008/09)' },
    { name: 'Alex O\'Connor', role: 'Philosoph und Podcaster', work: 'Within Reason; Debatten über den Schritt von der ersten Ursache zum christlichen Gott' },
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University', work: 'Arguing about Gods (2006)' },
  ],
  steelman: `Nehmen wir an, das Kalam-Argument zeigt eine Ursache des Universums, das Kontingenzargument ein notwendiges Wesen, die Feinabstimmung einen Planer. Was folgt daraus? Ein mächtiges Etwas am Anfang – mehr nicht. Hume hat das schonungslos gezeigt: Vielleicht ist die Welt das Werk vieler Götter, eines Komitees, eines unerfahrenen jungen Gottes, der sein erstes grobes Probestück abgeliefert hat, oder eines altersschwachen, der längst nicht mehr existiert. Keines dieser Argumente führt zu einem Gott, der dreieinig ist, Mensch wird, Gebete erhört, sich für Sexualmoral interessiert und Menschen ewig richtet. Zwischen „erste Ursache" und „Jesus von Nazareth ist Gott" klafft ein Abgrund. Selbst Antony Flew, der berühmteste Konvertit vom Atheismus, kam nur bis zum Deismus. Wer mit Gottesbeweisen das Christentum begründen will, schmuggelt den ganzen Inhalt seines Glaubens in die letzte Zeile.`,
  biblical: {
    summary: `Die Bibel selbst unterscheidet zwei Stufen der Gotteserkenntnis: Aus der Schöpfung sind Gottes „ewige Kraft und Gottheit" erkennbar (Röm 1,20) – nicht aber die Fülle seines Wesens, die er „am letzten in diesen Tagen" durch den Sohn offenbart hat (Hebr 1,1–2; Joh 1,18). Paulus geht auf dem Areopag genau diesen Weg: vom „unbekannten Gott", den die Athener ahnen, über den Schöpfer, der nichts bedarf, zum Auferstandenen, durch den Gott sich beglaubigt (Apg 17,23–31).`,
    detail: `- **Röm 1,20:** *aidios dynamis kai theiotēs* – „ewige Kraft und Gottheit": Paulus nennt genau das, was die natürliche Theologie erreichen kann, und nicht mehr.
- **Apg 17,23.30–31:** Der Altar „dem unbekannten Gott" ist für Paulus Anknüpfungspunkt, nicht Endpunkt. Die Auferstehung ist der Schritt von der allgemeinen zur besonderen Offenbarung.
- **Joh 1,18; 14,9:** „Niemand hat Gott je gesehen; der eingeborene Sohn … hat es uns verkündigt." – „Wer mich sieht, der sieht den Vater." Wer Gott ist, zeigt sich in Christus.`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '1,1–2', quote: `Nachdem vorzeiten Gott manchmal und mancherleiweise geredet hat zu den Vätern durch die Propheten, hat er am letzten in diesen Tagen zu uns geredet durch den Sohn, welchen er gesetzt hat zum Erben über alles, durch welchen er auch die Welt gemacht hat.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,18', quote: `Niemand hat Gott je gesehen; der eingeborene Sohn, der in des Vaters Schoß ist, der hat es uns verkündigt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,23', quote: `Ich bin herdurchgegangen und habe gesehen eure Gottesdienste und fand einen Altar, darauf war geschrieben: Dem unbekannten Gott. Nun verkündige ich euch denselben, dem ihr unwissend Gottesdienst tut.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '4,4', quote: `Da aber die Zeit erfüllet ward, sandte Gott seinen Sohn, geboren von einem Weibe und unter das Gesetz getan.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Der hl. Athanasius hat sein apologetisches Werk bewusst in zwei Teile gegliedert: „Gegen die Heiden" zeigt aus der Ordnung der Schöpfung, dass es einen Gott und einen lenkenden Logos gibt; „Über die Menschwerdung" zeigt, dass dieser Logos Mensch geworden ist, um den Menschen zu erneuern. Die Kirche lehrt: Dass Gott existiert und Schöpfer ist, kann die Vernunft erkennen; dass er dreieinig ist und Mensch wurde, wissen wir aus seiner Selbstoffenbarung in Christus, bezeugt von den Aposteln und bewahrt in der Kirche.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden / Über die Menschwerdung (Doppelwerk)', ref: 'CG 35–47; De Inc. 1', status: 'paraphrase', quote: 'Von der Erkenntnis des einen Gottes und Logos aus der Schöpfung zur Menschwerdung des Logos.' },
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Zweite theologische Rede (Oratio 28)', ref: '6', status: 'paraphrase', quote: 'Dass Gott ist und Ursache von allem, lehren uns das Auge und das Naturgesetz; was er ist, übersteigt uns.' },
    ],
  },
  quickAnswer: `Stimmt – und das ist so gewollt. Die Argumente sind die erste Stufe: Sie zeigen einen Schöpfer, der einer, ungeschaffen, zeitlos, immateriell, unvorstellbar mächtig, vernünftig und personal ist. Das allein widerlegt schon den Atheismus. Die zweite Stufe ist die Frage: Hat dieser Schöpfer sich offenbart? Hier wird es geschichtlich – bei Jesus von Nazareth und seiner Auferstehung. Und der Deismus hat selbst ein Problem: Warum sollte ein personaler Gott, der Personen erschafft, für immer schweigen?`,
  keyPoints: [
    `**Zwei Stufen:** Natürliche Theologie (es gibt einen Schöpfer) und Offenbarung (wer dieser Schöpfer ist und was er getan hat). Die Bibel selbst unterscheidet beides (Röm 1,20; Hebr 1,1–2).`,
    `**Mehr als ein vages „Etwas":** Aus den Argumenten folgen Einheit, Ewigkeit, Unveränderlichkeit, Immaterialität, Allmacht, Intelligenz und Personalität. Feser leitet diese Eigenschaften in „Five Proofs" ausführlich ab.`,
    `**Ein Gott, nicht viele:** Ein unbegrenztes, notwendiges Wesen kann es nur einmal geben – zwei müssten sich unterscheiden und wären damit begrenzt.`,
    `**Der Deismus ist instabil:** Wenn der Schöpfer personal ist und personale Wesen erschafft, ist Offenbarung nicht unwahrscheinlich, sondern zu erwarten.`,
    `**Die Auferstehung ist der Prüfstein:** Sie ist das Ereignis, das den Schöpfer mit Jesus verbindet (Apg 17,31). Sie lässt sich historisch prüfen.`,
  ],
  argument: {
    name: 'Vom Schöpfer zu Christus (zweistufiges Argument)',
    summary: 'Natürliche Theologie zeigt den Schöpfer; die Geschichte zeigt, dass er sich in Jesus offenbart hat.',
    premises: [
      {
        text: 'P1: Die Argumente der natürlichen Theologie zeigen, dass ein einziger, ungeschaffener, zeitloser, immaterieller, allmächtiger, intelligenter und personaler Schöpfer existiert.',
        support: `Kalam und Kontingenz führen zu einer notwendigen, zeitlosen, immateriellen Ursache; ihre Wirkung auf eine zeitliche Welt verlangt einen Willen; die Ordnung der Welt verlangt Intelligenz; ein unbegrenztes Wesen kann nur eines sein.`,
        sources: [
          { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', ref: 'Kap. 6', status: 'paraphrase', quote: 'Systematische Ableitung von Einheit, Einfachheit, Unveränderlichkeit, Ewigkeit, Allmacht, Allwissenheit und Güte aus den Beweisen.' },
        ],
      },
      {
        text: 'P2: Wenn ein solcher Schöpfer existiert, ist es nicht unwahrscheinlich, dass er sich den vernunftbegabten Wesen, die er geschaffen hat, offenbart.',
        support: `Ein personaler, guter Gott, der Personen mit Erkenntnis- und Beziehungsfähigkeit schafft, hätte Grund, sich ihnen mitzuteilen. Swinburne argumentiert, dass ein guter Gott mit einiger Wahrscheinlichkeit Mensch würde, um das Leid zu teilen, Versöhnung zu ermöglichen und uns zu zeigen, wie man lebt.`,
        sources: [
          { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Was Jesus God?', year: '2008', status: 'paraphrase', quote: 'Gründe, aus denen ein guter Gott Mensch werden würde, und Kriterien, an denen man eine solche Menschwerdung erkennen könnte.' },
        ],
      },
      {
        text: 'P3: Die historischen Belege zeigen, dass Jesus von Nazareth göttliche Vollmacht beanspruchte und von den Toten auferweckt wurde.',
        support: `Siehe die Claims zur Auferstehung (Minimal Facts: Tod durch Kreuzigung, leeres Grab, Erscheinungen, Bekehrung von Paulus und Jakobus, frühe Verkündigung).`,
      },
    ],
    conclusion: 'Also ist der Schöpfer, auf den die natürliche Theologie schließt, der Gott, der sich in Jesus Christus offenbart hat.',
  },
  voices: [
    {
      person: 'feser',
      role: 'als Metaphysiker der klassischen Tradition',
      text: `Feser widmet den göttlichen Eigenschaften in „Five Proofs" ein eigenes, ausführliches Kapitel und zeigt, dass die klassischen Beweise nicht bei einem vagen „ersten Anstoß" enden. Was reiner Akt ist, ohne jede unverwirklichte Möglichkeit, kann nicht mehrfach existieren, sich nicht verändern, keinen Anfang und kein Ende haben, nicht materiell sein. Da es Ursache aller Vollkommenheiten ist – auch von Intellekt und Wille in den Geschöpfen –, muss es diese Vollkommenheiten in sich haben. So führen die Beweise zu einem Gott, der eins, ewig, allmächtig, allwissend und vollkommen gut ist – weit über den Gott der Deisten hinaus, auch wenn die Dreieinigkeit erst durch Offenbarung bekannt ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', ref: 'Kap. 6', status: 'paraphrase', quote: 'Ableitung der göttlichen Eigenschaften aus der Natur der ersten Ursache.' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Prediger auf dem Areopag',
      text: `Paulus' Rede in Athen ist das biblische Modell für den zweistufigen Weg. Er knüpft an das Gottesahnen der Athener an (den Altar „dem unbekannten Gott"), entfaltet dann, was die Vernunft über den Schöpfer erkennen kann – er hat die Welt gemacht, bedarf nichts, gibt allen Leben, ist nicht fern –, und zitiert dafür sogar griechische Dichter. Dann aber führt er weiter: Gott hat einen Tag des Gerichts gesetzt und „jedermann den Glauben vorgehalten", indem er Jesus von den Toten auferweckte. Der Übergang von der allgemeinen Gotteserkenntnis zu Christus geschieht über ein geschichtliches Ereignis.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,22–31', status: 'paraphrase', quote: 'Vom unbekannten Gott über den Schöpfer zum Auferstandenen.' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Verfasser des apologetischen Doppelwerks',
      text: `Athanasius' Doppelwerk folgt demselben Aufbau. Im ersten Teil widerlegt er die Götterverehrung und zeigt, dass die Ordnung und Harmonie des Kosmos auf einen einzigen lenkenden Logos verweisen – viele Götter brächten Unordnung. Im zweiten Teil fragt er, warum dieser Logos Mensch wurde, und antwortet mit Gottes Güte: Der Schöpfer konnte nicht zulassen, dass seine vernunftbegabten Geschöpfe ins Nichts zurücksinken. Für Athanasius ist die Menschwerdung also nicht ein Zusatz zur natürlichen Gotteserkenntnis, sondern ihre Erfüllung: Der Gott, den die Schöpfung bezeugt, kommt selbst.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '38–39', status: 'paraphrase', quote: 'Die Einheit der Weltordnung verweist auf einen einzigen Gott und Logos.' },
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '6–10', status: 'paraphrase', quote: 'Gottes Güte ließ nicht zu, dass seine Geschöpfe verderben; darum wurde der Logos Mensch.' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph der Menschwerdung',
      text: `Swinburne argumentiert, dass der Schritt vom Schöpfer zur Menschwerdung kein Sprung ins Dunkle ist. Ein vollkommen guter Gott hätte Gründe, Mensch zu werden: um das Leid, das er zulässt, selbst zu teilen; um Sühne für menschliche Schuld zu ermöglichen; um zu zeigen, wie ein vollkommenes Leben aussieht. Daraus ergeben sich Erwartungen an eine echte Menschwerdung – ein vorbildliches Leben, eine Lehre über Gott, die Gründung einer Gemeinschaft und ein bestätigendes Zeichen wie die Auferstehung. Jesus von Nazareth erfüllt diese Kriterien, wie Swinburne meint, in einzigartiger Weise.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Resurrection of God Incarnate', year: '2003', status: 'paraphrase', quote: 'Apriorische Gründe für eine Menschwerdung und ihre Erfüllung in Jesus.' },
      ],
    },
    {
      person: 'flew',
      role: 'als ehemaliger Atheist, der Deist wurde',
      text: `Flew ist das bekannteste Beispiel dafür, dass die Argumente der natürlichen Theologie einen Menschen vom Atheismus zum Glauben an einen Schöpfer führen können – er selbst blieb beim Deismus stehen. Bemerkenswert ist aber, dass er im Gespräch mit Gary Habermas (2004) einräumte, das Christentum verdiene unter den Religionen am meisten Achtung, und die Belege für die Auferstehung seien eindrucksvoller als die für Wunder anderer Religionen. Flews Weg zeigt beides: Die erste Stufe trägt, und die zweite verlangt eine eigene Prüfung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Antony Flew & Gary Habermas', work: '„My Pilgrimage from Atheism to Theism", Philosophia Christi 6/2', year: '2004', status: 'paraphrase', quote: 'Flew hält das Christentum für die Religion, die am meisten Achtung verdient, und die Belege für die Auferstehung für besser als die für Wunder anderer Religionen.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'nicht-der-gott-der-bibel',
      objection: `„Selbst wenn es eine erste Ursache gibt – das ist noch lange nicht der Gott der Bibel, der Jesus auferweckt und sich für dein Sexualleben interessiert."`,
      objectionBy: 'Christopher Hitchens',
      answer: `Einverstanden – das ist der erste Schritt, nicht der letzte. Aber schon dieser erste Schritt ist gewaltig: ein Schöpfer, der einer, ewig, immateriell, allmächtig, intelligent und personal ist. Damit ist der Atheismus widerlegt. Ob dieser Schöpfer sich offenbart hat, ist die zweite Frage – und die beantworte ich mit der Geschichte Jesu, nicht mit der Kosmologie.`,
      followUps: [
        {
          id: 'viele-goetter-komitee',
          objection: `„Warum nur eine Ursache? Vielleicht waren es viele Götter, ein Komitee, wie Hume vorschlägt."`,
          objectionBy: 'David Hume (Dialogues V)',
          answer: `Erstens: Man soll Ursachen nicht ohne Not vervielfachen – eine Ursache genügt. Zweitens: Die Argumente führen zu einem unbegrenzten, notwendigen Wesen. Zwei solche Wesen müssten sich durch etwas unterscheiden, das das eine hat und das andere nicht – dann wäre aber eines von beiden begrenzt. Schon Athenagoras argumentierte im 2. Jahrhundert so. Und die Einheit der Naturgesetze im ganzen Kosmos spricht für einen einzigen Gesetzgeber.`,
          followUps: [
            {
              id: 'gott-tot-oder-desinteressiert',
              objection: `„Vielleicht ist der Schöpfer längst tot, altersschwach oder hat das Interesse verloren. Hume hat das schon vorgeschlagen."`,
              objectionBy: 'David Hume (Dialogues V)',
              answer: `Ein notwendiges, zeitloses Wesen kann nicht sterben, altern oder sich verändern – das liegt in seinem Begriff. Zudem zeigt das Kontingenzargument, dass die Welt nicht nur einmal angestoßen, sondern in jedem Augenblick im Sein gehalten wird: Der Schöpfer ist also nicht fern, sondern jetzt gegenwärtig. „Er ist nicht ferne von einem jeglichen unter uns" (Apg 17,27).`,
            },
          ],
        },
        {
          id: 'gott-der-philosophen',
          objection: `„Pascal selbst hat doch den ‚Gott der Philosophen' vom ‚Gott Abrahams' unterschieden. Dein Beweis-Gott ist ein abstraktes Prinzip, kein liebender Vater."`,
          objectionBy: 'Alex O\'Connor',
          answer: `Pascal unterscheidet zwei Weisen, Gott zu erkennen – nicht zwei Götter. Der Gott, auf den die Argumente führen, ist kein unpersönliches Prinzip: Er hat einen Willen, schafft frei und ist die Quelle aller Güte. Aber wie sehr er liebt, zeigt erst die Offenbarung – das Kreuz. Die Argumente zeigen, *dass* jemand da ist; Christus zeigt, *wer* er ist.`,
          sources: [
            { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Mémorial', year: '1654', quote: `Gott Abrahams, Gott Isaaks, Gott Jakobs, nicht der Philosophen und Gelehrten.`, original: 'Dieu d\'Abraham, Dieu d\'Isaac, Dieu de Jacob, non des philosophes et des savants.', translation: 'eigene Übersetzung', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'warum-christentum',
      objection: `„Und warum gerade das Christentum? Juden und Muslime glauben auch an einen Schöpfer – und lehnen Trinität und Menschwerdung ab."`,
      objectionBy: 'Alex O\'Connor',
      answer: `Bis zum Schöpfer gehen wir gemeinsam. Dann ist die Frage historisch: Wer war Jesus, und ist er auferstanden? Juden und Muslime erkennen Jesus als historische Gestalt an; die Frage ist, ob er der war, der er zu sein beanspruchte. Dazu kommt eine philosophische Beobachtung: Wenn Gott wesenhaft Liebe ist (1 Joh 4,8), braucht Liebe ein Gegenüber – schon vor der Schöpfung. Die Dreieinigkeit beantwortet das; ein einsamer Gott hätte vor der Schöpfung niemanden zu lieben.`,
      detail: `Siehe „Gott braucht keine Dreieinigkeit, um zu lieben oder zu sprechen" und die Themenblöcke zum Islam und Judentum.`,
      followUps: [
        {
          id: 'auferstehung-nicht-historisch',
          objection: `„Die Auferstehung lässt sich historisch nicht belegen."`,
          objectionBy: 'Bart Ehrman',
          answer: `Dass man Wunder historisch nicht belegen könne, ist eine methodische Vorentscheidung. Was Historiker feststellen können, sind die „Minimal Facts": Jesu Tod durch Kreuzigung, das leere Grab, die Überzeugung der Jünger, ihm begegnet zu sein, die Bekehrung des Verfolgers Paulus und des Skeptikers Jakobus. Die Frage ist, welche Erklärung diese Fakten am besten erklärt – und wenn es einen Schöpfer gibt, ist die Auferstehung ein ernsthafter Kandidat.`,
          detail: `Siehe „Historiker können grundsätzlich kein Wunder feststellen".`,
        },
      ],
    },
    {
      id: 'warum-im-winkel',
      objection: `„Wenn Gott sich offenbaren wollte – warum dann nur in einem winzigen Winkel des Römischen Reiches vor 2000 Jahren, statt allen Menschen zugleich?"`,
      objectionBy: 'Richard Dawkins / Alex O\'Connor',
      answer: `Paulus sagte vor König Agrippa: „Solches ist nicht im Winkel geschehen" (Apg 26,26). Die Zeit war bemerkenswert gewählt: Die Pax Romana, römische Straßen und das Griechische als Weltsprache ermöglichten eine schnelle Verbreitung – „da die Zeit erfüllet ward" (Gal 4,4). Von dort hat die Botschaft binnen Jahrhunderten alle Kontinente erreicht, auch Ägypten, wo der hl. Markus die Kirche gründete. Und Gott offenbart sich nicht nur einmal, sondern bleibt in seiner Kirche gegenwärtig.`,
      followUps: [
        {
          id: 'nie-davon-gehoert',
          objection: `„Und was ist mit den Milliarden, die nie davon gehört haben?"`,
          objectionBy: 'Alex O\'Connor',
          answer: `Die Bibel lehrt, dass Gott jeden nach dem Licht beurteilt, das er empfangen hat (Röm 2,14–16), und dass er „nicht ferne ist von einem jeglichen" (Apg 17,27). Die Kirche bindet Gottes Barmherzigkeit nicht an menschliche Grenzen. Für dich und mich aber gilt: Wir *haben* davon gehört – die Frage ist, was wir damit tun.`,
          detail: `Siehe „Was ist mit denen, die nie von Jesus gehört haben?".`,
        },
      ],
    },
    {
      id: 'flew-nur-deist',
      objection: `„Selbst Antony Flew wurde nur Deist, nicht Christ. Wenn sogar er den Schritt zum Christentum nicht überzeugend fand – warum sollte ich?"`,
      objectionBy: 'Graham Oppy (sinngemäß)',
      answer: `Das stimmt, und ich will Flew nicht vereinnahmen. Aber sein Weg zeigt zweierlei: Die erste Stufe – vom Atheismus zum Schöpfer – hat einen der scharfsinnigsten atheistischen Philosophen überzeugt. Und im Gespräch mit Gary Habermas räumte Flew ein, das Christentum verdiene unter den Religionen am meisten Achtung und die Belege für die Auferstehung seien eindrucksvoller als die für Wunder anderer Religionen. Den zweiten Schritt muss jeder selbst prüfen – ich lade dich ein, es zu tun.`,
    },
  ],
  questionsToAsk: [
    `Wenn die Argumente einen Schöpfer zeigen, der personal und mächtig ist – wäre das für dich schon eine wichtige Veränderung?`,
    `Warum sollte ein personaler Schöpfer, der Personen erschafft, für immer schweigen?`,
    `Hast du die historischen Belege für die Auferstehung schon einmal ernsthaft geprüft?`,
  ],
  avoid: [
    `Behaupten, das Kalam-Argument beweise die Dreieinigkeit – das überzieht den Anspruch.`,
    `Den Unterschied zwischen natürlicher Theologie und Offenbarung verwischen. Er ist biblisch (Röm 1,20; Hebr 1,1–2).`,
    `Flew als „bekehrten Christen" darstellen – er war Deist.`,
  ],
  concessions: [
    `Die Gottesargumente allein führen nicht zur Dreieinigkeit, zur Menschwerdung oder zu den Sakramenten; dafür braucht es Offenbarung.`,
    `Der Schritt von der natürlichen Theologie zum Christentum verlangt eine eigene, vor allem historische Begründung.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', ref: 'Kap. 6', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Was Jesus God?', year: '2008', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Deismus', 'Natürliche Theologie', 'Offenbarung', 'Göttliche Eigenschaften', 'Auferstehung'],
  related: [
    'gottesbeweise/kalam-widerlegt',
    'gottesbeweise/kontingenz-trugschluss',
    'atheismus/ein-gott-weiter',
    'auferstehung/wunder-historisch-unmoeglich',
    'auferstehung/halluzinationen',
    'islam-trinitaet/gott-braucht-keine-trinitaet-um-zu-lieben',
    'pluralismus/nie-von-jesus-gehoert',
  ],
};

export default claim;
