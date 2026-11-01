import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ein-gott-weiter',
  title: `„Wir sind alle Atheisten bezüglich Zeus – ich gehe nur einen Gott weiter."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 2' },
    { name: 'Stephen F. Roberts', role: 'Softwareentwickler, Urheber des Usenet-Zitats', work: 'Signatur in alt.atheism (um 1995): „I contend that we are both atheists. I just believe in one fewer god than you do."' },
    { name: 'Ricky Gervais', role: 'Komiker und Autor', work: 'Interviews und Fernsehauftritte (u. a. bei Stephen Colbert, 2017)' },
  ],
  steelman: `Die Menschheit hat Tausende von Göttern verehrt: Zeus, Odin, Ra, Baal, Quetzalcoatl. Du als Christ lehnst sie alle ab – zu Recht, denn es gibt keine Belege für sie, und man sieht leicht, wie sie aus den Kulturen ihrer Zeit entstanden sind. Ich wende denselben Maßstab nur konsequent an und lehne einen weiteren Gott ab. Wie Stephen Roberts formuliert: Wenn du verstehst, warum du all die anderen möglichen Götter verwirfst, verstehst du, warum ich deinen verwerfe. Zwischen dir und mir liegt also nur ein einziger Gott Unterschied – und die Last liegt bei dir, zu erklären, warum gerade deiner die Ausnahme sein soll.`,
  biblical: {
    summary: `Die Bibel selbst ist „atheistisch" gegenüber den Göttern der Völker: „Alle Götter der Völker sind Götzen; aber der HERR hat den Himmel gemacht" (Ps 96,5). Bezeichnend ist die Begründung: Die Götter sind Teil der Welt oder Werk von Menschenhänden – der HERR ist ihr Schöpfer. Der Unterschied ist also nicht einer der Zahl, sondern der Art: Schöpfer gegen Geschöpf.`,
    detail: `- **Ps 96,5:** Das hebräische Wortspiel stellt die *'elohim* der Völker als *'elilim* („Nichtse") dem Gott gegenüber, der „den Himmel gemacht hat".
- **Jer 10,10–11:** Der einzige aramäische Vers in Jeremia, offenbar als Merksatz für die Exilierten: Götter, die Himmel und Erde nicht gemacht haben, werden vergehen.
- **1 Kor 8,4–6:** Paulus räumt ein, dass es „viele Götter und viele Herren" *genannt* gibt, aber „für uns" nur einen Gott, „von welchem alle Dinge sind".
- **Apg 14,15:** In Lystra, wo man Paulus und Barnabas als Zeus und Hermes verehren will, rufen sie: „Bekehrt euch von diesen falschen zu dem lebendigen Gott, welcher gemacht hat Himmel und Erde."`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '96,5', quote: `Denn alle Götter der Völker sind Götzen; aber der HERR hat den Himmel gemacht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '10,10–11', quote: `Aber der HERR ist ein rechter Gott, ein lebendiger Gott, ein ewiger König. […] So sprechet nun zu ihnen also: Die Götter, so den Himmel und die Erde nicht gemacht haben, müssen vertilgt werden von der Erde und unter dem Himmel.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '8,5–6', quote: `Und wiewohl es sind, die Götter genannt werden, es sei im Himmel oder auf Erden (sintemal es sind viele Götter und viele Herren), so haben wir doch nur einen Gott, den Vater, von welchem alle Dinge sind und wir zu ihm; und einen Herrn, Jesus Christus, durch welchen alle Dinge sind und wir durch ihn.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '14,15', status: 'paraphrase', quote: 'Paulus und Barnabas wehren in Lystra die Verehrung als Zeus und Hermes ab und rufen zur Umkehr zum lebendigen Gott, der Himmel und Erde gemacht hat.' },
    ],
  },
  church: {
    summary: `Die ersten Christen wurden von den Römern wörtlich als „Atheisten" (*atheoi*) angeklagt, weil sie die Götter verweigerten. Justin der Märtyrer antwortete: Gegenüber *solchen* Göttern bekennen wir uns als Atheisten – nicht aber gegenüber dem wahrhaftigsten Gott. Athenagoras von Athen wies den Vorwurf ebenfalls zurück, weil die Christen den einen, ungeschaffenen, ewigen Gott verehren, der von der Materie unterschieden ist. Ihr „Atheismus" gegenüber den Göttern war die Frucht eines positiven Glaubens.`,
    detail: `Im Martyrium des Polykarp (um 155/160) fordert der Statthalter den greisen Bischof auf, zu rufen: „Weg mit den Atheisten!" – gemeint waren die Christen. Polykarp blickt auf die heidnische Menge im Stadion, deutet auf sie und ruft: „Weg mit den Atheisten!" Die Szene zeigt, dass die Christen die Ablehnung der Götter nicht als Mangel an Glauben, sondern als Treue zum wahren Gott verstanden.`,
    sources: [
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '6', quote: `Wir bekennen, dass wir in Bezug auf solche vermeintlichen Götter Atheisten sind, nicht aber in Bezug auf den wahrhaftigsten Gott, den Vater der Gerechtigkeit.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athenagoras von Athen', work: 'Bittschrift für die Christen (Legatio pro Christianis)', ref: '4', status: 'paraphrase', quote: 'Wir sind keine Atheisten, da wir einen Gott anerkennen, der ungeschaffen, ewig und unsichtbar ist und von der Materie unterschieden.' },
      { kind: 'kirchenvater', work: 'Martyrium des Polykarp', ref: '9,2', status: 'paraphrase', quote: 'Polykarp deutet auf die heidnische Menge und ruft: „Weg mit den Atheisten!"' },
    ],
  },
  quickAnswer: `Der Unterschied ist keine Frage des Zählens, sondern der Kategorie. Zeus und Thor waren Wesen *innerhalb* der Welt: geboren, mit Eltern, Streitigkeiten und begrenzter Macht. Der Gott der Bibel ist der ungeschaffene Grund, warum es überhaupt eine Welt gibt. Zeus abzulehnen ist, wie zu bestreiten, dass in meinem Garten ein Kobold wohnt; Gott abzulehnen heißt, zu bestreiten, dass die Wirklichkeit überhaupt einen letzten Grund hat. Und die Gründe, aus denen ich Zeus ablehne, führen gerade zum einen Schöpfer – nicht von ihm weg.`,
  keyPoints: [
    `**Kategorienunterschied:** Die Götter der Mythen sind Teile des Kosmos; der Gott des Monotheismus ist sein Schöpfer. Es ist der Unterschied zwischen einem Bewohner des Hauses und dem Grund, warum es das Haus gibt.`,
    `**Schon die Griechen sahen das:** Xenophanes kritisierte die menschenähnlichen Götter, Platon und Aristoteles suchten einen höchsten, unveränderlichen Grund. Paulus knüpft auf dem Areopag daran an (Apg 17,28).`,
    `**Gleiche Gründe, anderes Ergebnis:** Ich lehne Zeus ab, weil die philosophischen Argumente auf einen ungeschaffenen, unbegrenzten Grund führen, den ein endlicher Gott nicht erfüllt – und weil es keine historische Spur seiner Taten gibt. Für Jesus gibt es sie.`,
    `**Der Schritt zum Atheismus ist kein „einer weiter",** sondern ein Sprung anderer Art: von „dieses Wesen existiert nicht" zu „es gibt überhaupt keinen transzendenten Grund".`,
    `**Die ersten Christen waren „Atheisten" gegenüber den Göttern** – aber aus Treue zum wahren Gott (Justin, Polykarp), nicht aus Mangel an Glauben.`,
  ],
  voices: [
    {
      person: 'hart',
      role: 'als Religionsphilosoph und Patristiker',
      text: `Hart hält den „Ein-Gott-weiter"-Slogan für einen typischen Kategorienfehler: Die Götter des Polytheismus seien Wesen innerhalb des Kosmos, mächtiger als Menschen, aber wie diese abhängig, entstanden und begrenzt. Der Gott der klassischen Theismen dagegen sei nicht ein weiteres Seiendes neben anderen, sondern das unendliche Sein selbst, aus dem alles Endliche hervorgeht. Paradoxerweise teilen Polytheismus und Atheismus eine Grundannahme: dass die Welt das Letzte ist – der eine bevölkert sie mit Göttern, der andere nicht. Der Monotheismus dagegen behauptet, dass die Welt als Ganze einen Grund jenseits ihrer selbst hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Experience of God: Being, Consciousness, Bliss', year: '2013', ref: 'Einleitung, Kap. 1', status: 'paraphrase', quote: 'Die Götter sind Wesen innerhalb des Kosmos; Gott ist der transzendente Grund des Seins.' },
      ],
    },
    {
      person: 'justin',
      role: 'als Philosoph und Märtyrer, angeklagt als „Atheist"',
      text: `Justin, ein platonischer Philosoph, der im Christentum die „einzig sichere Philosophie" fand, nahm den Vorwurf des Atheismus offen auf: Ja, gegenüber den Dämonen und den Göttern der Mythen seien die Christen Atheisten. Doch das sei nichts Neues: Schon Sokrates sei als Atheist verurteilt worden, weil er die Mythen mit Vernunft prüfte. Für Justin hat der Logos, der in Christus Fleisch wurde, schon in den Philosophen keimhaft gewirkt – und deshalb ist die Kritik an den Göttern ein Werk der Vernunft, das zum wahren Gott führt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '5–6; 46', status: 'paraphrase', quote: 'Sokrates wurde als Atheist verurteilt, weil er die Dämonen entlarvte; Christen sind Atheisten gegenüber den falschen Göttern, nicht gegenüber dem wahren Gott; wer mit dem Logos lebte, war Christ, auch wenn man ihn für gottlos hielt.' },
      ],
    },
    {
      person: 'athenagoras',
      role: 'als athenischer Philosoph und Apologet',
      text: `Athenagoras richtete um 177 eine Bittschrift an Kaiser Mark Aurel und dessen Sohn Commodus. Den Vorwurf des Atheismus entkräftet er durch eine philosophische Argumentation: Christen unterscheiden Gott von der Materie, das Ungeschaffene vom Geschaffenen. Er zeigt zudem mit einem Vernunftargument, dass es nur einen Schöpfergott geben kann: Mehrere Götter müssten sich voneinander unterscheiden, also begrenzt sein – ein begrenzter Gott aber wäre nicht der Urheber von allem.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athenagoras von Athen', work: 'Bittschrift für die Christen (Legatio pro Christianis)', ref: '4–8', status: 'paraphrase', quote: 'Christen sind keine Atheisten; sie unterscheiden Gott von der Materie; mehrere Götter wären begrenzt und könnten nicht Schöpfer des Alls sein.' },
      ],
    },
    {
      person: 'chesterton',
      role: 'als Kulturhistoriker der Religionen',
      text: `In „Der unsterbliche Mensch" unterscheidet Chesterton zwischen den Mythologien, die er als Werk der Fantasie und Sehnsucht der Völker ernst nimmt, und der Philosophie, die nach dem letzten Grund fragt. Die Mythen hätten nie beansprucht, Philosophie zu sein; sie waren Geschichten über Götter, nicht Aussagen über den Grund des Seins. Im Christentum, so Chesterton, kommen beide Linien zusammen: Die Sehnsucht der Mythen wird geschichtliche Wirklichkeit, und der Gott der Philosophen wird Mensch.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Der unsterbliche Mensch (The Everlasting Man)', year: '1925', ref: 'Teil I, Kap. 5–6', status: 'paraphrase', quote: 'Mythologie und Philosophie als getrennte Strömungen der Menschheit, die im Christentum zusammenfinden.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'nur-ein-gott-mehr',
      objection: `„Du lehnst Zeus, Thor, Ra und Tausende andere ab. Ich lehne nur einen einzigen Gott mehr ab als du. So groß ist der Unterschied zwischen uns gar nicht."`,
      objectionBy: 'Richard Dawkins / Ricky Gervais',
      answer: `Der Unterschied ist nicht einer der Zahl, sondern der Art. Zeus war ein Wesen in der Welt – geboren, mit Eltern, begrenzt, Teil des Kosmos. Der Gott, an den ich glaube, ist der Grund, warum es überhaupt einen Kosmos gibt. Zwischen „Es gibt keinen Zeus" und „Es gibt überhaupt keinen letzten Grund der Wirklichkeit" liegt nicht ein Schritt, sondern ein Sprung in eine völlig andere Kategorie.`,
      sources: [
        { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', year: '2006', ref: 'Kap. 2', quote: `We are all atheists about most of the gods that humanity has ever believed in. Some of us just go one god further.`, status: 'verbatim' },
      ],
      questionsBack: [`Wenn du Zeus ablehnst: Lehnst du damit auch die Frage ab, warum es das Universum überhaupt gibt?`],
      followUps: [
        {
          id: 'zeus-fuer-griechen-real',
          objection: `„Das ist eine bequeme Ausrede. Für die Griechen war Zeus genauso real und erhaben wie für dich dein Gott."`,
          objectionBy: 'Alex O\'Connor',
          answer: `Gerade die griechischen Denker haben den Unterschied gesehen: Xenophanes spottete, wenn Rinder malen könnten, malten sie Götter wie Rinder; Platon kritisierte die unmoralischen Mythen; Aristoteles suchte einen unbewegten Beweger. Die Philosophen unterschieden die Götter der Dichter vom höchsten Grund. Paulus knüpft auf dem Areopag genau daran an und zitiert griechische Dichter: „In ihm leben, weben und sind wir."`,
          followUps: [
            {
              id: 'gott-abstraktum',
              objection: `„Dann ist dein Gott eben ein philosophisches Abstraktum – nicht der eifersüchtige, zornige Jahwe der Bibel, der Opfer verlangt."`,
              objectionBy: 'Richard Dawkins',
              answer: `Der Gott der Bibel ist beides zugleich: der Schöpfer, der „Himmel und Erde" gemacht hat (Gen 1,1), und der Personale, der spricht, liebt und richtet. Die menschenähnliche Sprache der Bibel – Zorn, Reue, Arm Gottes – ist, wie die Väter von Alexandrien lehrten, bildhafte Rede für den, der unser Begreifen übersteigt. Der Gott der Philosophen und der Gott Abrahams sind nicht zwei Götter, sondern der eine Gott, einmal mit der Vernunft und einmal in der Offenbarung erkannt.`,
              detail: `Zur Frage des alttestamentlichen Gottesbildes siehe „Der Gott des Alten Testaments ist ein eifersüchtiges, rachsüchtiges Monster".`,
            },
          ],
        },
        {
          id: 'gleiche-gruende',
          objection: `„Die Gründe, aus denen du Zeus ablehnst – keine Belege, kulturelle Herkunft –, sind genau die Gründe, aus denen ich deinen Gott ablehne."`,
          objectionBy: 'Stephen F. Roberts (sinngemäß)',
          answer: `Nein, meine Gründe sind andere. Ich lehne Zeus ab, weil die Argumente für eine erste Ursache auf einen ungeschaffenen, unbegrenzten, zeitlosen Grund führen – ein geborener, begrenzter Gott erfüllt das nicht. Und weil es keine historische Spur von Zeus' Taten gibt. Für Jesus von Nazareth gibt es dagegen Quellen, Zeugen und eine Bewegung, die aus seiner Auferstehung entstand. Konsequent angewandt führen meine Gründe also zum einen Schöpfer, nicht zum Atheismus.`,
          followUps: [
            {
              id: 'muslime-juden-dasselbe',
              objection: `„Juden und Muslime sagen dasselbe über ihren Gott. Warum ausgerechnet der christliche?"`,
              objectionBy: 'Alex O\'Connor',
              answer: `Gut beobachtet – bis zu diesem Punkt gehen Juden, Christen und Muslime gemeinsam: Es gibt einen Schöpfer. Damit ist der Atheismus schon verlassen. Welche Offenbarung wahr ist, ist dann eine geschichtliche Frage: Wer war Jesus, und ist er auferstanden? Das lässt sich prüfen – und darüber spreche ich gern als Nächstes.`,
              detail: `Siehe „Alle Religionen sind gleich wahr" und die Topics zur Auferstehung.`,
            },
          ],
        },
      ],
    },
    {
      id: 'nur-wegen-geburt',
      objection: `„Wärst du in Indien geboren, wärst du Hindu; in Saudi-Arabien Muslim. Welchen Gott du *nicht* ablehnst, ist reiner Zufall der Geburt."`,
      objectionBy: 'Richard Dawkins',
      answer: `Wie jemand zu einer Überzeugung kommt, entscheidet nicht darüber, ob sie wahr ist – das wäre ein genetischer Fehlschluss. Das gilt auch umgekehrt: Wer in einem säkularen Elternhaus in Westeuropa aufwächst, wird mit hoher Wahrscheinlichkeit säkular. Die Frage ist nicht, woher ein Glaube kommt, sondern ob er begründet ist. Und Millionen von Christen sind übrigens Konvertiten – in Asien, Afrika und unter früheren Muslimen.`,
      followUps: [
        {
          id: 'zweifel-an-gewissheit',
          objection: `„Aber das sollte dich doch zumindest an deiner Gewissheit zweifeln lassen."`,
          objectionBy: 'Alex O\'Connor',
          answer: `Es sollte mich demütig machen und dazu bringen, meinen Glauben zu prüfen – ja. Genau das tue ich ja gerade mit dir. Aber Prüfen heißt nicht automatisch Aufgeben; es heißt, den Gründen zu folgen. Und die gleiche Demut gilt für den Atheismus: Auch er ist in vielen Milieus die „vererbte" Selbstverständlichkeit.`,
          detail: `Siehe „Du bist nur Christ, weil du in einer christlichen Familie geboren wurdest".`,
        },
      ],
    },
    {
      id: 'christen-waren-atheisten',
      objection: `„Die frühen Christen wurden doch selbst Atheisten genannt. Atheismus ist einfach konsequent zu Ende gedachtes Christentum."`,
      objectionBy: 'Häufiger Einwand (u. a. in Anlehnung an Dawkins)',
      answer: `Die frühen Christen lehnten die Götter ab, *weil* sie den einen Schöpfer anbeteten. Justin sagte ausdrücklich: Atheisten gegenüber den falschen Göttern, nicht gegenüber dem wahren. Als man vom greisen Polykarp verlangte, „Weg mit den Atheisten!" zu rufen, deutete er auf die heidnische Menge. Ihr „Atheismus" war die Frucht eines Glaubens, nicht sein Fehlen.`,
      followUps: [
        {
          id: 'monotheismus-halbweg',
          objection: `„Trotzdem: Der Monotheismus ist auf halbem Weg zum Atheismus. Von vielen Göttern zu einem, von einem zu keinem."`,
          objectionBy: 'Häufiger Einwand',
          answer: `Das klingt elegant, verfehlt aber den entscheidenden Punkt. Polytheismus und Atheismus haben etwas gemeinsam, das dem Monotheismus fehlt: Für beide ist die Welt das Letzte – der eine bevölkert sie mit Göttern, der andere nicht. Der Monotheismus behauptet dagegen, dass die Welt als Ganze einen Grund jenseits ihrer selbst hat. Zwischen „ein Schöpfer" und „kein Schöpfer" liegt die eigentliche Grenze, nicht zwischen „eins" und „null".`,
          questionsBack: [`Ist für dich die Welt selbst das Letzte, das keine Erklärung braucht?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum lehnst du Zeus ab – und treffen diese Gründe wirklich auch auf den Schöpfer des Universums zu?`,
    `Ist ein Gott, der Eltern hat und in einem Palast auf dem Olymp wohnt, dieselbe Art von Wesen wie der Grund aller Existenz?`,
    `Was bleibt übrig, wenn man alle mythischen Götter streicht: nichts – oder die Frage nach dem Grund von allem?`,
  ],
  avoid: [
    `„Zeus ist erfunden, mein Gott ist echt" – ohne Begründung klingt das wie Sonderbehandlung. Erkläre den Kategorienunterschied.`,
    `Andere Religionen verächtlich machen. Die Mythen der Völker drücken echte Sehnsucht aus (Apg 17,23.27).`,
    `Sich auf eine Zahlendiskussion einlassen („Es sind doch nur 2.999 Götter …"). Der Punkt ist die Art, nicht die Zahl.`,
  ],
  concessions: [
    `Der Slogan hat einen berechtigten Kern: Christen sollten erklären können, warum sie andere Götter ablehnen – und dieselben Maßstäbe an den eigenen Glauben anlegen.`,
    `Auch christliche Gottesvorstellungen sind im Volksglauben oft allzu menschlich („der alte Mann mit Bart"); hier trifft die Kritik etwas Reales.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Experience of God', year: '2013', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Der unsterbliche Mensch', year: '1925', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Polytheismus', 'Monotheismus', 'Kategorienfehler', 'Frühe Kirche', 'Atheismusvorwurf'],
  related: [
    'atheismus/teekanne-spaghettimonster',
    'atheismus/wer-schuf-gott',
    'pluralismus/nur-christ-wegen-geburt',
    'pluralismus/alle-religionen-gleich-wahr',
    'weitere-religionen/religion-aus-animismus',
    'at-ethik/at-gott-monster',
  ],
};

export default claim;
