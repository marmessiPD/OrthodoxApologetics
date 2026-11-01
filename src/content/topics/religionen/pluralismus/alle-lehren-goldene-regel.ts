import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'alle-lehren-goldene-regel',
  title: `„Alle Religionen lehren im Kern dieselbe Ethik."`,
  proponents: [
    { name: 'Karen Armstrong', role: 'Religionshistorikerin, Initiatorin der „Charter for Compassion" (2009)', work: 'Twelve Steps to a Compassionate Life (2010)' },
    { name: 'Hans Küng', role: 'Katholischer Theologe, Initiator des „Projekts Weltethos" (1928–2021)', work: 'Projekt Weltethos (1990); Erklärung zum Weltethos (1993)' },
    { name: 'Tenzin Gyatso, der 14. Dalai Lama', role: 'Oberhaupt des tibetischen Buddhismus', work: 'Ethik für das neue Jahrtausend (1999); Beyond Religion (2011)' },
  ],
  steelman: `Die Goldene Regel findet sich in allen großen Traditionen: „Was du selbst nicht wünschst, das tu auch anderen nicht an" (Konfuzius); „Was dir verhasst ist, das tu deinem Nächsten nicht – das ist die ganze Tora" (Hillel); „Keiner von euch ist gläubig, bis er für seinen Bruder liebt, was er für sich selbst liebt" (Hadith); ähnlich im Mahabharata und in buddhistischen Texten – und bei Jesus (Mt 7,12). Das Parlament der Weltreligionen hat sich 1993 in der „Erklärung zum Weltethos" auf diese gemeinsame Grundlage verständigt. Der Kern aller Religionen ist also das Mitgefühl. Die Dogmen über Götter, Erlösung und Jenseits sind kulturelle Hüllen, die nur trennen. Wer gut lebt, hat das Wesentliche verstanden – gleich, welcher Religion er angehört.`,
  biblical: {
    summary: `Die Bibel erwartet, dass alle Menschen das Sittengesetz kennen, denn Gott hat es ihnen „ins Herz geschrieben" (Röm 2,14–15). Die Goldene Regel steht in negativer Form sogar im koptischen Kanon (Tob 4,15), in positiver Form bei Jesus (Mt 7,12). Aber Jesus geht über die Gegenseitigkeit hinaus: „Liebet eure Feinde" (Mt 5,44); „Wenn ihr liebt, die euch lieben, was für Dank habt ihr davon?" (Lk 6,32). Sein neues Gebot lautet: „wie ich euch geliebt habe" (Joh 13,34) – und diese Liebe hat er am Kreuz gezeigt, „da wir noch Sünder waren" (Röm 5,8). Zugleich sagt die Bibel: Das Problem des Menschen ist nicht, das Gute nicht zu kennen, sondern es nicht zu tun (Röm 7,19). Ethik allein rettet nicht.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '7,12', quote: `Alles nun, was ihr wollt, daß euch die Leute tun sollen, das tut ihr ihnen; das ist das Gesetz und die Propheten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Tobit', ref: '4,15 (Lutherbibel: Tobias 4,16)', quote: `Was du hassest, das tu niemandem an.`, status: 'paraphrase', note: 'Negative Fassung der Goldenen Regel in einem deuterokanonischen Buch, das die koptische Kirche zur Schrift zählt.' },
      { kind: 'bibel', work: 'Matthäus', ref: '5,44', quote: `Ich aber sage euch: Liebet eure Feinde; segnet, die euch fluchen; tut wohl denen, die euch hassen; bittet für die, so euch beleidigen und verfolgen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '13,34', quote: `Ein neu Gebot gebe ich euch, daß ihr euch untereinander liebet, wie ich euch geliebt habe, auf daß auch ihr einander liebhabet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '5,8', quote: `Darum preiset Gott seine Liebe gegen uns, daß Christus für uns gestorben ist, da wir noch Sünder waren.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat die Goldene Regel nie für ein christliches Monopol gehalten: Schon die Didache, eine der ältesten christlichen Schriften, gibt sie in negativer Form wieder. Die Väter sahen darin das natürliche Sittengesetz, das Gott allen Menschen eingeprägt hat (Röm 2,14–15), und – mit Justin – „Samen des Logos" bei den Völkern. Zugleich bezeugten sie, dass in Christus etwas Neues geschieht: Menschen, die sich hassten, beten nun für ihre Feinde (Justin), und der hl. Basilius baute in Caesarea eine ganze Stadt der Barmherzigkeit für Kranke und Arme. Die koptische Kirche hat diese Feindesliebe in ihrer langen Leidensgeschichte immer wieder vorgelebt.`,
    sources: [
      { kind: 'kirchenvater', work: 'Didache (Lehre der zwölf Apostel)', ref: '1,2', year: 'ca. 100', quote: `Alles aber, was du nicht willst, dass es dir geschehe, das tu auch du keinem anderen.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '14–16', status: 'paraphrase', quote: `Christen beten für ihre Feinde und suchen die zu überzeugen, die sie ungerecht hassen – nach dem Gebot Christi.` },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Predigt über Lk 12,18 („Ich will meine Scheunen abbrechen")', year: 'ca. 368', quote: `Das Brot, das du zurückhältst, gehört dem Hungernden; das Gewand, das du im Schrank verwahrst, dem Nackten.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Goldene Regel ist tatsächlich weit verbreitet. Konfuzius formuliert sie negativ (Gespräche 15,24), kennt aber auch eine positive Form (6,30); Hillel gibt sie negativ wieder (Talmud, Schabbat 31a); im Hadith steht das Gebot, dem Bruder zu wünschen, was man sich selbst wünscht (Sahih al-Bukhari 13); im Mahabharata und in buddhistischen Texten finden sich ähnliche Sätze. Die „Erklärung zum Weltethos" des Parlaments der Weltreligionen (Chicago 1993), maßgeblich von Hans Küng entworfen, stellt die Goldene Regel ins Zentrum – verstanden als Minimalkonsens, der die Lehren der Religionen nicht ersetzen soll.`,
    detail: `**Unterschiede im Detail:** Auf die Frage, ob man Unrecht mit Güte vergelten solle, antwortet Konfuzius: „Womit willst du dann Güte vergelten? Vergilt Unrecht mit Geradheit und Güte mit Güte" (Gespräche 14,34). Das Daodejing dagegen sagt: „Vergilt Groll mit Güte" (Kap. 63), und der Buddha: „Feindschaft wird durch Feindschaft niemals gestillt" (Dhammapada 5). Die Traditionen stimmen also in vielem überein, aber nicht in allem – und sie begründen ihre Ethik völlig verschieden.`,
    sources: [
      { kind: 'oestlich', author: 'Konfuzius', work: 'Gespräche (Lunyu)', ref: '15,24 (Legge: 15,23)', original: '子貢問曰：「有一言而可以終身行之者乎？」子曰：「其恕乎！己所不欲，勿施於人。」', quote: `Zigong fragte: „Gibt es ein Wort, nach dem man sein ganzes Leben handeln kann?" Der Meister sagte: „Das ist wohl die Gegenseitigkeit: Was du selbst nicht wünschst, das tu auch anderen nicht an."`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', author: 'Konfuzius', work: 'Gespräche (Lunyu)', ref: '6,30 (Legge: 6,28)', original: '夫仁者，己欲立而立人，己欲達而達人。', quote: `Der Menschliche hilft anderen feststehen, weil er selbst feststehen will, und hilft anderen voran, weil er selbst vorankommen will.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Schabbat', ref: '31a', quote: `Was dir verhasst ist, das tu deinem Nächsten nicht. Das ist die ganze Tora; das Übrige ist Erläuterung – geh und lerne.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '13', quote: `Keiner von euch ist (wahrhaft) gläubig, bis er für seinen Bruder liebt, was er für sich selbst liebt.`, status: 'verbatim', translation: 'eigene Übersetzung', url: 'https://sunnah.com/bukhari:13' },
      { kind: 'oestlich', author: 'Konfuzius', work: 'Gespräche (Lunyu)', ref: '14,34 (Legge: 14,36)', original: '或曰：「以德報怨，何如？」子曰：「何以報德？以直報怨，以德報德。」', quote: `Jemand fragte: „Unrecht mit Güte vergelten – wie ist das?" Der Meister sagte: „Womit willst du dann Güte vergelten? Vergilt Unrecht mit Geradheit und Güte mit Güte."`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'gegner', author: 'Parlament der Weltreligionen (Entwurf: Hans Küng)', work: 'Erklärung zum Weltethos', year: '1993', status: 'paraphrase', quote: `Die Goldene Regel als Grundprinzip; Verpflichtung auf eine Kultur der Gewaltlosigkeit, der Solidarität, der Toleranz und der Gleichberechtigung – als Minimalkonsens, nicht als Ersatz für die Lehren der Religionen.` },
    ],
  },
  quickAnswer: `Ja, die Goldene Regel findet sich in vielen Religionen – und das überrascht Christen nicht, denn die Bibel sagt, Gott habe sein Gesetz allen ins Herz geschrieben (Röm 2,15). Sie steht sogar in negativer Form in unserer eigenen Bibel (Tobit 4,15). Aber gleiche Regeln heißen nicht gleiche Wahrheit. Und das Problem der Menschheit ist nicht, dass sie die Goldene Regel nicht kennt, sondern dass sie sie nicht hält. Jesus bringt nicht nur einen Ratschlag, sondern die Vergebung für alle, die daran scheitern – und die Kraft, sogar Feinde zu lieben.`,
  keyPoints: [
    `**Gemeinsame Ethik – erwartet:** Das natürliche Sittengesetz ist allen ins Herz geschrieben (Röm 2,14–15; C. S. Lewis' „Tao"). Christen freuen sich über diese Übereinstimmung.`,
    `**Ehrlich vergleichen:** Die negative Form steht auch bei Tobit und in der Didache; Konfuzius kennt auch eine positive Form. Jesu Fassung ist im Akzent besonders, nicht in der Idee einzigartig.`,
    `**Jesus geht weiter:** Feindesliebe (Mt 5,44) und „wie ich euch geliebt habe" (Joh 13,34) – gegründet in Gottes Liebe zu seinen Feinden am Kreuz (Röm 5,8). Konfuzius lehnte es dagegen ausdrücklich ab, Unrecht mit Güte zu vergelten (Gespräche 14,34).`,
    `**Gleiche Ethik ist nicht gleiche Wahrheit:** Die Religionen widersprechen sich über Gott, den Menschen, Erlösung und Jesus – und begründen ihre Ethik völlig verschieden.`,
    `**Ethik ist nicht Erlösung:** Wer hat die Goldene Regel immer gehalten? Niemand (Röm 3,23). Das Evangelium ist nicht guter Rat, sondern gute Nachricht: Vergebung und ein neues Herz.`,
    `**Das Warum prägt das Was:** Wer ist mein Nächster? Ist der andere letztlich eine Person? Der Glaube an die Gottebenbildlichkeit jedes Menschen hat Krankenhäuser und Armenfürsorge hervorgebracht (Basilius).`,
  ],
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler, der die Moral der Kulturen verglich',
      text: `C. S. Lewis stellte im Anhang zu *Die Abschaffung des Menschen* Belege aus dem alten Ägypten, Babylon, Indien, China, dem Judentum, der griechischen Philosophie und dem Christentum zusammen, um zu zeigen: Die großen Kulturen teilen ein gemeinsames Sittengesetz, das er „das Tao" nannte. Für Lewis ist diese Übereinstimmung kein Argument gegen das Christentum, sondern ein Hinweis auf einen Gesetzgeber hinter dem Gesetz – und der Ausgangspunkt der christlichen Botschaft: Wir alle kennen das Gesetz, und wir alle brechen es (Pardon, ich bin Christ, Buch I).`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Abolition of Man, Anhang „Illustrations of the Tao"', year: '1943', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch I, Kap. 1–2', year: '1952', status: 'paraphrase', quote: `Alle Menschen kennen ein Gesetz des richtigen Verhaltens – und alle brechen es.` },
      ],
    },
    {
      person: 'paulus',
      role: 'als Apostel, der Gesetz und Gnade unterschied',
      text: `Paulus erkennt an, dass die Heiden das Werk des Gesetzes in ihr Herz geschrieben haben (Röm 2,14–15). Gerade deshalb weiß er: Das Wissen um das Gute rettet niemanden, weil alle hinter ihm zurückbleiben (Röm 3,23). Die gute Nachricht ist nicht eine bessere Regel, sondern dass Gott seine Liebe gegen uns erwiesen hat, „da wir noch Sünder waren" (Röm 5,8), und dass die Liebe Gottes durch den Heiligen Geist in unser Herz ausgegossen ist (Röm 5,5) – die Kraft, das Gute zu tun.`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '5,5', quote: `…denn die Liebe Gottes ist ausgegossen in unser Herz durch den heiligen Geist, welcher uns gegeben ist.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Bischof und Gründer der Basilias',
      text: `Der hl. Basilius ließ um 370 vor den Toren Caesareas eine Anlage mit Krankenhaus, Herberge und Armenhaus errichten, die man die „Basilias" nannte. Seine Predigten gegen Habgier gehören zu den schärfsten sozialen Texten der Antike. Für Basilius folgt die Pflicht zur Barmherzigkeit nicht aus einem allgemeinen Gegenseitigkeitsprinzip, sondern daraus, dass jeder Arme Christi Bruder ist und dass alle Güter Gott gehören. Das zeigt, wie die christliche Begründung der Ethik deren Reichweite verändert.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Predigt über Lk 12,18', status: 'paraphrase' },
      ],
    },
    {
      person: 'justin',
      role: 'als Apologet, der die Verwandlung der Christen bezeugte',
      text: `Justin erkannte in den Weisen der Völker Teilwahrheiten des Logos an. Zugleich bezeugte er dem Kaiser das Neue: Menschen, die vorher einander hassten, Geld und Besitz über alles stellten und mit Fremden nicht zusammenleben wollten, teilen nun ihr Eigentum, leben mit Menschen anderer Völker zusammen und beten für ihre Feinde. Die Ethik der Bergpredigt ist für Justin keine allgemeine Regel, sondern Frucht der Begegnung mit Christus.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '14–16', status: 'paraphrase' },
      ],
    },
    {
      person: 'tim-keller',
      role: 'als Pastor, der Evangelium und Moralismus unterschied',
      text: `Timothy Keller unterscheidet zwischen Religion als Moralsystem – „Ich gehorche, also werde ich angenommen" – und dem Evangelium – „Ich bin angenommen, darum will ich gehorchen". Die Goldene Regel ist ein wunderbarer Maßstab, aber sie kann einen Menschen, der an ihr scheitert, nur verurteilen. Das Evangelium sagt dem Gescheiterten: Christus hat die Regel für dich erfüllt und die Strafe für dein Versagen getragen. Erst aus dieser Annahme wächst eine Liebe, die nicht mehr rechnet.`,
      sources: [
        { kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God', year: '2008', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'goldene-regel-ueberall',
      objection: `Alle Religionen lehren die Goldene Regel – Konfuzius, Hillel, der Buddha, Jesus, Mohammed. Das ist der Kern. Der Rest sind Dogmen, die nur trennen.`,
      objectionBy: 'Karen Armstrong',
      answer: `Ich stimme gerne zu, dass es eine breite moralische Übereinstimmung gibt – die Bibel erwartet das sogar, denn Gott hat sein Gesetz allen ins Herz geschrieben (Röm 2,14–15). Aber gleiche Regeln heißen nicht gleiche Wahrheit. Die Religionen widersprechen sich darin, wer Gott ist, was der Mensch ist und wie Erlösung geschieht. Und Jesus geht über die Gegenseitigkeit hinaus: „Liebet eure Feinde."`,
      followUps: [
        {
          id: 'begruendung-egal',
          objection: `Die Begründung ist doch egal. Hauptsache, die Menschen handeln gut.`,
          objectionBy: 'Dalai Lama (sinngemäß)',
          answer: `Das Warum prägt das Was und das Wie-lange. Wer ist mein Nächster – nur mein Volk, meine Kaste, meine Familie? Jesus erzählt vom barmherzigen Samariter (Lk 10,29–37). Ist der andere letztlich eine Person oder eine Illusion? Warum helfen, wenn es niemand sieht und es mir schadet? Der Glaube, dass jeder Mensch Gottes Ebenbild ist, hat in der Geschichte Krankenhäuser und Armenfürsorge hervorgebracht – Basilius baute schon im 4. Jahrhundert eine ganze Stadt der Barmherzigkeit.`,
          followUps: [
            {
              id: 'humanisten-auch-gut',
              objection: `Säkulare Humanisten sind auch ohne Gott gute Menschen.`,
              objectionBy: 'Karen Armstrong (sinngemäß)',
              answer: `Natürlich – das bestreite ich nicht. Die Bibel sagt selbst, dass das Sittengesetz allen ins Herz geschrieben ist. Die Frage ist nicht, ob Atheisten gut handeln können, sondern worauf Gut und Böse letztlich gründen. Siehe dazu den Claim „Man kann auch ohne Gott ein guter Mensch sein".`,
            },
          ],
        },
      ],
    },
    {
      id: 'konfuzius-vor-jesus',
      objection: `Konfuzius kannte die Goldene Regel 500 Jahre vor Jesus. Jesus hat also nichts Neues gebracht.`,
      objectionBy: 'Karen Armstrong (sinngemäß)',
      answer: `Konfuzius' Satz „Was du selbst nicht wünschst, das tu auch anderen nicht an" (15,24) ist eine große Einsicht – und Christen fühlen sich davon nicht bedroht: Dieselbe Regel steht in negativer Form in unserer eigenen Bibel (Tob 4,15). Jesus hat sie positiv formuliert (Mt 7,12), wobei auch Konfuzius eine positive Form kannte (6,30). Das wirklich Neue liegt woanders: in der Feindesliebe – und vor allem darin, wer Jesus ist. Er ist nicht nur Lehrer einer Regel, sondern der, der sie erfüllt und für die stirbt, die sie brechen.`,
      followUps: [
        {
          id: 'feindesliebe-anderswo',
          objection: `Auch Feindesliebe gibt es anderswo: Laozi sagt „Vergilt Groll mit Güte" (Daodejing 63), der Buddha „Feindschaft wird durch Feindschaft niemals gestillt" (Dhammapada 5).`,
          objectionBy: 'Karen Armstrong (sinngemäß)',
          answer: `Das stimmt, und es ist schön – Christen erkennen darin mit Justin „Samen des Logos". Bemerkenswert ist übrigens, dass Konfuzius selbst die Maxime, Unrecht mit Güte zu vergelten, ausdrücklich ablehnte (Gespräche 14,34). Das Besondere des Christentums ist aber nicht ein Satz, sondern ein Ereignis: Gott hat seine Feinde am Kreuz konkret geliebt (Röm 5,8–10), und er schenkt durch den Heiligen Geist die Kraft, selbst zu lieben (Röm 5,5).`,
          sources: [
            { kind: 'oestlich', work: 'Daodejing', ref: 'Kap. 63', original: '報怨以德', quote: `Vergilt Groll mit Güte.`, translation: 'eigene Übersetzung', status: 'verbatim' },
            { kind: 'oestlich', work: 'Dhammapada', ref: '5', original: 'na hi verena verāni sammantīdha kudācanaṃ; averena ca sammanti, esa dhammo sanantano', quote: `Denn Feindschaft wird durch Feindschaft hier niemals gestillt; durch Nicht-Feindschaft wird sie gestillt – das ist ein ewiges Gesetz.`, translation: 'eigene Übersetzung', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'nur-variante',
              objection: `Dann ist das Christentum am Ende doch nur eine Variante unter vielen.`,
              objectionBy: 'Karen Armstrong (sinngemäß)',
              answer: `In der Ethik gibt es viele Überschneidungen. Im Kern – dass Gott Mensch wurde, für seine Feinde starb, auferstand und Sünden vergibt – gibt es keine Parallele. Das Christentum ist nicht in erster Linie ein guter Rat, sondern eine gute Nachricht. Ratschläge gibt es in vielen Religionen; eine Rettung für die, die an allen Ratschlägen scheitern, ist das Evangelium.`,
            },
          ],
        },
      ],
    },
    {
      id: 'alle-guten-in-himmel',
      objection: `Wenn alle Religionen dieselbe Ethik lehren, dann kommen auch alle guten Menschen in den Himmel. Auf die Religion kommt es nicht an.`,
      objectionBy: 'Dalai Lama (sinngemäß)',
      answer: `Das Problem ist nicht, die Goldene Regel zu kennen, sondern sie zu halten. Wer hat andere immer so behandelt, wie er selbst behandelt werden möchte? Niemand (Röm 3,23). Wenn das Heil davon abhinge, die Goldene Regel zu erfüllen, würde niemand gerettet. Das Christentum bietet, was keine Ethik bieten kann: Vergebung für das Versagen und ein neues Herz (Ez 36,26).`,
      followUps: [
        {
          id: 'bemuehen-zaehlt',
          objection: `Gott bewertet doch das ehrliche Bemühen, nicht die Perfektion.`,
          objectionBy: 'Hans Küng (sinngemäß)',
          answer: `Dann wird der Maßstab gesenkt – aber das Unrecht, das wir anderen angetan haben, bleibt wirklich und verlangt nach Gerechtigkeit für die Opfer. Gnade nimmt beides ernst: Gott vergibt umsonst und verwandelt den Menschen; unser Bemühen ist dann Antwort und Mitwirkung, nicht Bezahlung. Und wie Gott jeden Einzelnen richtet, überlassen wir ihm (siehe „Was ist mit denen, die nie von Jesus gehört haben?").`,
        },
      ],
    },
    {
      id: 'weltethos-konsens',
      objection: `Das Weltethos des Parlaments der Weltreligionen von 1993 zeigt: Die Religionen können sich auf gemeinsame Werte einigen. Das ist der Weg in die Zukunft.`,
      objectionBy: 'Hans Küng',
      answer: `Das ist ein wertvolles Projekt für den Frieden, und Christen können sich daran beteiligen. Aber die Erklärung versteht sich ausdrücklich als Minimalkonsens, nicht als Behauptung, die Religionen seien gleich, und sie will deren Lehren nicht ersetzen. Zusammenarbeit in der Ethik verlangt nicht, so zu tun, als stimmten die Glaubenslehren überein.`,
      followUps: [
        {
          id: 'dogmen-aufgeben',
          objection: `Wäre es nicht friedlicher, die Dogmen ganz aufzugeben und nur noch die gemeinsame Ethik zu leben?`,
          objectionBy: 'Karen Armstrong (sinngemäß)',
          answer: `Dogmen sind nicht die Feinde des Friedens. Das christliche Dogma, dass jeder Mensch Gottes Ebenbild ist und dass Christus für seine Feinde starb, ist die stärkste Grundlage für Frieden, die ich kenne. Ohne Wahrheitsgrund hängt die Ethik in der Luft. Die koptischen Familien, die 2015 den Mördern ihrer Söhne vergaben, taten das nicht trotz ihres Glaubens, sondern wegen ihres Glaubens an den gekreuzigten und auferstandenen Christus.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hast du selbst die Goldene Regel immer gehalten? Was machst du mit den Momenten, in denen du es nicht getan hast?`,
    `Wer ist für dich „der Nächste" – und woher weißt du das?`,
    `Lehren wirklich alle Religionen, Unrecht mit Güte zu vergelten? Was sagt Konfuzius in Gespräche 14,34?`,
    `Wenn die Ethik gleich ist – widersprechen sich die Religionen deshalb nicht mehr über Gott und Jesus?`,
  ],
  avoid: [
    `Behaupte nicht, nur Jesus habe die Goldene Regel gelehrt oder nur er habe sie positiv formuliert – Konfuzius kannte auch eine positive Form (6,30), und Tobit steht in deiner eigenen Bibel.`,
    `Rede andere Ethiken nicht schlecht; die Übereinstimmungen sind echt und ein Zeichen des natürlichen Sittengesetzes.`,
    `Mach das Christentum nicht zu einer bloßen Moral – sein Kern ist die gute Nachricht von Christus, nicht ein besserer Verhaltenskodex.`,
  ],
  concessions: [
    `Die Goldene Regel ist in vielen Religionen und Kulturen verbreitet; das Christentum hat sie nicht erfunden.`,
    `Viele Andersgläubige halten die Goldene Regel treuer als manche Christen.`,
    `Zusammenarbeit der Religionen für Frieden und Gerechtigkeit (z. B. Weltethos) ist wertvoll und mit dem Evangelium vereinbar.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Die Abschaffung des Menschen (The Abolition of Man)', year: '1943', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Pardon, ich bin Christ (Mere Christianity), Buch I', year: '1952', status: 'paraphrase' },
    { kind: 'gegner', author: 'Hans Küng', work: 'Projekt Weltethos', year: '1990', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'Warum Gott? (The Reason for God)', year: '2008', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Goldene Regel', 'Ethik', 'Weltethos', 'Feindesliebe', 'Konfuzius', 'Gesetz und Gnade'],
  related: [
    'moral-und-gott/gut-ohne-gott',
    'moral-und-gott/moral-kulturell-relativ',
    'pluralismus/alle-religionen-gleich-wahr',
    'weitere-religionen/dao-statt-person',
    'liberale-theologie/jesus-nur-morallehrer',
  ],
};

export default claim;
