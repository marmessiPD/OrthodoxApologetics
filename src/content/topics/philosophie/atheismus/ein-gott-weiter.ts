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
    {
      id: 'jahwe-entwicklung-goetterwelt',
      objection: `„Die Religionsgeschichte zeigt doch, woher dein Gott kommt: Jahwe war ursprünglich ein Gott unter vielen im kanaanäischen Pantheon, neben El, Baal und Aschera. Der strenge Monotheismus entstand erst spät, etwa im Exil. Dein Gott ist schlicht der Sieger eines Ausscheidungsturniers der Götter."`,
      objectionBy: "Alex O'Connor (unter Berufung auf Mark S. Smith / Thomas Römer)",
      answer: `Dass sich das *Verständnis* Gottes in Israel entwickelt hat, bestreite ich nicht – die Bibel verschweigt den Götzendienst im Volk nicht, sie bekämpft ihn durch die Propheten. Aber wie eine Erkenntnis entstanden ist, entscheidet nicht, ob sie wahr ist: Auch die Astronomie hat sich aus der Sterndeutung entwickelt. Und mein Argument für Gott stützt sich nicht auf die Religionsgeschichte Kanaans, sondern auf Gründe, die du selbst prüfen kannst: die Existenz der Welt, ihre Ordnung und die Auferstehung Jesu.`,
      detail: `Die Forschung (u. a. Mark S. Smith, *The Early History of God*; Thomas Römer, *L'invention de Dieu*) rekonstruiert eine Entwicklung von der Verehrung Jahwes neben anderen Gottheiten zum ausdrücklichen Monotheismus. Datierungen und Details sind stark umstritten. Für das Gespräch entscheidend:
- **Genetischer Fehlschluss:** Die Herkunft einer Idee widerlegt sie nicht.
- **Die Bibel als Zeugin gegen den Synkretismus:** Die Texte, aus denen man die frühe Vielgötterei erschließt, sind gerade die prophetischen *Anklagen* dagegen.
- **Christlicher Ansatz:** Die Kirche versteht Offenbarung als schrittweise Erziehung (Hebr 1,1: „vielfältig und auf vielerlei Weise"), die in Christus ihr Ziel findet.`,
      sources: [
        { kind: 'fachliteratur', author: 'Mark S. Smith', work: 'The Early History of God: Yahweh and the Other Deities in Ancient Israel', year: '2. Aufl. 2002', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Thomas Römer', work: 'L\'invention de Dieu (dt. Die Erfindung Gottes, 2018)', year: '2014', status: 'paraphrase' },
        { kind: 'bibel', work: 'Hebräer', ref: '1,1–2', status: 'paraphrase', quote: 'Nachdem Gott vorzeiten vielfach und auf vielerlei Weise zu den Vätern geredet hat durch die Propheten, hat er am letzten in diesen Tagen zu uns geredet durch den Sohn.' },
      ],
      questionsBack: [`Wird die Astronomie dadurch falsch, dass sie aus der Astrologie hervorgegangen ist?`],
      followUps: [
        {
          id: 'philosophengott-griechischer-import',
          objection: `„Dann ist dein ‚zeitloser Grund allen Seins' eben ein späterer Import aus der griechischen Philosophie. Athen wurde auf Jerusalem gepfropft. Der Gott der Bibel ist ein Stammesgott, kein metaphysisches Prinzip."`,
          objectionBy: "Alex O'Connor",
          answer: `Die Kernaussagen stehen in der hebräischen Bibel selbst, lange vor jedem griechischen Einfluss auf Israel: Gott schafft Himmel und Erde durch sein Wort (Gen 1), er ist „von Ewigkeit zu Ewigkeit" (Ps 90,2), er spannt den Himmel „allein" aus (Jes 44,24), außer ihm ist kein Gott (Jes 45,5). Die Väter haben griechische Begriffe benutzt, um diesen Glauben präzise zu sagen – nicht, um ihn zu erfinden.`,
          detail: `Clemens von Alexandrien sah die griechische Philosophie als „Erzieher" der Griechen auf Christus hin, so wie das Gesetz für die Hebräer – also als Vorbereitung, nicht als Quelle. Die alexandrinische Schule wusste genau zu unterscheiden, wo Platon recht hatte (ein einziger, unkörperlicher Urgrund) und wo nicht (ewige Materie, Seelenwanderung). Dass ein Gedanke in zwei Kulturen vorkommt, spricht eher für ihn als gegen ihn.`,
          voices: [
            {
              person: 'clemens-alexandrien',
              role: 'als Lehrer der Katechetenschule von Alexandrien',
              text: `Clemens deutet die Philosophie der Griechen als Gabe der Vorsehung, die – wie das Gesetz bei den Juden – auf Christus hinführen sollte. Sie hat Wahres über den einen, unkörperlichen Gott erkannt, aber nur bruchstückhaft; die volle Wahrheit kommt durch den Logos, der in Christus Mensch wurde.`,
              sources: [{ kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Teppiche (Stromateis)', ref: 'I,5,28', year: 'um 200', status: 'paraphrase', quote: 'Die Philosophie war für die Griechen ein Erzieher auf Christus hin, wie das Gesetz für die Hebräer.' }],
            },
          ],
          sources: [
            { kind: 'bibel', work: 'Psalm', ref: '90,2', status: 'paraphrase', quote: 'Ehe denn die Berge wurden und die Erde und die Welt geschaffen wurden, bist du, Gott, von Ewigkeit zu Ewigkeit.' },
            { kind: 'bibel', work: 'Jesaja', ref: '44,24', status: 'paraphrase', quote: 'Ich bin der HERR, der alles tut, der den Himmel ausbreitet allein und die Erde weit macht ohne Gehilfen.' },
          ],
          followUps: [
            {
              id: 'eifersuechtiger-stammesgott',
              objection: `„Aber schau dir an, wie dieser Gott im Alten Testament auftritt: eifersüchtig, zornig, parteiisch für ein Volk. ‚Ich bin ein eifersüchtiger Gott.' Das ist Zeus mit besserem Marketing."`,
              objectionBy: 'Richard Dawkins (The God Delusion, Kap. 2)',
              answer: `Die „Eifersucht" Gottes ist Bundessprache aus dem Bild der Ehe – Hosea und Jeremia verwenden es ausdrücklich: Gott liebt sein Volk wie ein Bräutigam und will es nicht mit Götzen teilen. Das ist nicht die Laune eines Olympiers, der auf andere Götter neidisch ist, sondern der Anspruch, dass der Mensch nicht Geschöpfe anbetet. Und die Erwählung Israels war von Anfang an auf alle Völker gerichtet: „In dir sollen gesegnet werden alle Geschlechter auf Erden" (Gen 12,3).`,
              detail: `Für die schweren Texte des Alten Testaments (Landnahme, Gerichtsworte) siehe „Der Gott des Alten Testaments ist ein eifersüchtiges, rachsüchtiges Monster". Hier genügt: Der Vergleich mit Zeus trifft nur, wenn man die menschlichen Bilder (Zorn, Eifersucht, Reue) wörtlich als Gefühlsschwankungen eines endlichen Wesens liest. Genau das hat die Kirche nie getan.`,
              followUps: [
                {
                  id: 'metapher-nach-belieben',
                  objection: `„Praktisch: Immer wenn ein Text peinlich ist, wird er zur Metapher. So kannst du jede Stelle umdeuten – eine Hermeneutik, die sich nie irren kann."`,
                  objectionBy: "Alex O'Connor",
                  answer: `Die Bibel liefert das Kriterium selbst: „Gott ist nicht ein Mensch, dass er lüge, noch ein Menschenkind, dass ihn etwas gereue" (Num 23,19), und: „Ich bin Gott und nicht ein Mensch" (Hos 11,9). Wenn derselbe Text Gott „Reue" zuschreibt und zugleich sagt, dass er nicht bereut wie ein Mensch, zwingt er selbst zur Unterscheidung von Bild und Sache. Das ist keine nachträgliche Ausrede, sondern alte, geregelte Auslegung: Schon Origenes legte Regeln dafür fest, wann ein Text wörtlich und wann geistlich zu lesen ist.`,
                  detail: `Die alexandrinische Exegese liest die Schrift wörtlich **und** geistlich (vgl. Origenes, *De principiis* IV). Bildhafte Rede über Gott (Hand, Auge, Zorn) wird nicht willkürlich umgedeutet, sondern an dem gemessen, was die Schrift ausdrücklich über Gottes Wesen sagt: dass er Geist ist (Joh 4,24), unveränderlich (Mal 3,6; Jak 1,17) und Liebe (1 Joh 4,8). Zugeständnis: Nicht jede Auslegungsfrage ist damit gelöst; aber der Vorwurf der Beliebigkeit trifft eine Methode, die feste Kriterien hat, nicht.`,
                  voices: [
                    {
                      person: 'origenes',
                      role: 'als alexandrinischer Exeget (mit Vorbehalt)',
                      text: `Origenes zeigt, dass schon in der Schrift selbst Hinweise liegen, wann ein Text nicht wörtlich zu verstehen ist – etwa wenn eine wörtliche Lesart Gott menschliche Schwächen zuschriebe, die die Schrift an anderer Stelle ausschließt. Für ihn ist die Unterscheidung von Buchstabe und Geist kein Ausweichen, sondern Treue zum Ganzen der Offenbarung.`,
                      sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'Über die Grundlehren (De principiis)', ref: 'IV,2–3', year: 'um 220–230', status: 'paraphrase' }],
                    },
                  ],
                  sources: [
                    { kind: 'bibel', work: '4. Mose', ref: '23,19', status: 'paraphrase', quote: 'Gott ist nicht ein Mensch, dass er lüge, noch ein Menschenkind, dass ihn etwas gereue.' },
                    { kind: 'bibel', work: 'Hosea', ref: '11,9', status: 'paraphrase', quote: 'Denn ich bin Gott und nicht ein Mensch.' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'hadd-goetter-ueberall',
          objection: `„Die Kognitionswissenschaft erklärt, warum Menschen überall Götter sehen: Wir haben einen überempfindlichen Agenten-Detektor. Lieber einmal zu oft ‚Da ist jemand!' rufen als vom Löwen gefressen werden. Zeus und Jahwe haben dieselbe Quelle – ein Fehlalarm des Gehirns."`,
          objectionBy: 'Daniel Dennett / Richard Dawkins',
          answer: `Die Kognitionswissenschaft erklärt, warum der Glaube an Gott Menschen *leichtfällt* – nicht, ob er wahr ist. Einer ihrer führenden Forscher, Justin Barrett, ist selbst Christ und sieht darin keinen Widerspruch: Wenn es einen Schöpfer gibt, wäre es nicht überraschend, dass er uns empfänglich für ihn gemacht hat. Paulus sagt genau das: Gott ist den Menschen „offenbar" durch seine Werke (Röm 1,19–20).`,
          detail: `Die Kognitive Religionswissenschaft (Pascal Boyer, Justin Barrett u. a.) beschreibt natürliche Neigungen: Agenten wahrnehmen, Zwecke vermuten, an ein Weiterleben glauben. Daraus folgt aber kein Urteil über die Wahrheit – genauso wenig, wie die Evolution unseres Zahlensinns die Mathematik widerlegt. Tertullian sprach vom „Zeugnis der von Natur aus christlichen Seele": Menschen rufen in der Not spontan „Gott!".`,
          voices: [
            {
              person: 'justin-barrett',
              role: 'als Kognitionswissenschaftler der Religion',
              text: `Barrett hat gezeigt, dass schon Kinder intuitiv dazu neigen, die Welt als gemacht und zweckvoll zu deuten. Er betont, dass eine natürliche Erklärung dieser Neigung die Frage nach der Wahrheit des Glaubens offenlässt; eine von Gott gewollte Empfänglichkeit für ihn ist mit den Befunden ebenso vereinbar.`,
              sources: [{ kind: 'fachliteratur', author: 'Justin L. Barrett', work: 'Why Would Anyone Believe in God?', year: '2004', status: 'paraphrase' }],
            },
          ],
          sources: [
            { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '17,6', year: '197', status: 'paraphrase', quote: 'O Zeugnis der von Natur aus christlichen Seele!', original: 'O testimonium animae naturaliter christianae!' },
          ],
          followUps: [
            {
              id: 'fehlalarm-unzuverlaessig',
              objection: `„Aber ein Mechanismus, der ständig Fehlalarme produziert, ist gerade *nicht* zuverlässig. Wenn dein Gottesglaube aus diesem Mechanismus stammt, hast du keinen Grund, ihm zu trauen."`,
              objectionBy: 'Daniel Dennett',
              answer: `Der Agenten-Detektor liefert schnelle Vermutungen über Wesen in der Umgebung – das Rascheln im Gebüsch. Der Glaube an einen zeitlosen Schöpfer des Universums entsteht nicht durch Rascheln, sondern durch Nachdenken, Argumente und geschichtliche Zeugnisse. Außerdem verwerfen wir unsere Wahrnehmung von Personen nicht, nur weil sie manchmal irrt. Und wer evolutionäre Herkunft als Grund des Misstrauens nimmt, muss erklären, warum dann seine eigene Vernunft – ebenfalls Produkt der Evolution – vertrauenswürdig sein soll.`,
              detail: `Hier berührt das Gespräch Plantingas evolutionäres Argument gegen den Naturalismus: Wenn unsere kognitiven Fähigkeiten nur auf Überleben, nicht auf Wahrheit selektiert wären, hätte der Naturalist ein Problem mit allen seinen Überzeugungen – auch mit dem Naturalismus. Siehe „Die Evolution hat uns verlässliche Vernunft gegeben".`,
              questionsBack: [`Wenn evolutionäre Herkunft eine Überzeugung entwertet: Warum gilt das nicht für deine eigene Vernunft?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum lehnst du Zeus ab – und treffen diese Gründe wirklich auch auf den Schöpfer des Universums zu?`,
    `Ist ein Gott, der Eltern hat und in einem Palast auf dem Olymp wohnt, dieselbe Art von Wesen wie der Grund aller Existenz?`,
    `Was bleibt übrig, wenn man alle mythischen Götter streicht: nichts – oder die Frage nach dem Grund von allem?`,
    `Wenn die Herkunft einer Überzeugung über ihre Wahrheit entscheidet – was folgt dann für eine Vernunft, die selbst aus der Evolution stammt?`,
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
