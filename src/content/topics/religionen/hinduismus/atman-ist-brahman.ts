import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'atman-ist-brahman',
  title: `„Alles ist Brahman – dein wahres Selbst ist Gott (Advaita Vedanta)."`,
  proponents: [
    { name: 'Adi Shankara', role: 'Begründer der klassischen Advaita-Schule (ca. 8. Jh.)', work: 'Kommentar zum Brahma-Sutra (Brahmasutrabhashya); Upanishaden-Kommentare' },
    { name: 'Swami Vivekananda', role: 'Hindu-Mönch, Verkünder des „praktischen Vedanta" im Westen (1863–1902)', work: 'Jnana-Yoga; Rede „Paper on Hinduism", Chicago 1893' },
    { name: 'Swami Sarvapriyananda', role: 'Mönch des Ramakrishna-Ordens, Leiter der Vedanta Society of New York', work: 'Vorträge zur Mandukya-Upanishad und zur Frage „Wer bin ich?"' },
    { name: 'Ramana Maharshi', role: 'Südindischer Weiser (1879–1950)', work: 'Nan Yar? (Wer bin ich?)' },
    { name: 'Deepak Chopra', role: 'Arzt und Autor', work: 'How to Know God (2000)' },
  ],
  steelman: `Die tiefste Einsicht der Upanishaden lautet: *tat tvam asi* – „Das bist du" (Chandogya-Upanishad 6,8,7). Alles, was du beobachten kannst – Körper, Gedanken, Gefühle, sogar dein Ich-Gefühl –, kommt und geht. Was bleibt, ist das Bewusstsein, das all das bezeugt. Dieses reine Bewusstsein hat keine Grenzen, keinen Anfang und kein Ende; es ist identisch mit Brahman, dem einen, unteilbaren Sein-Bewusstsein-Glückseligkeit (*sat-chit-ananda*). Die Vielheit der Welt und die Vorstellung, ein getrenntes, sündiges Ich zu sein, beruhen auf Unwissenheit (*avidya*, *maya*). Ein persönlicher Schöpfergott, der getrennt von dir im Himmel thront, ist eine Vorstufe für den Anfänger. Die höchste Wahrheit ist nicht Beziehung zu Gott, sondern die Erkenntnis: Ich bin Brahman (*aham brahmasmi*). Darauf gründet auch die Ethik: Wer im anderen sein eigenes Selbst sieht, kann ihm nicht schaden.`,
  biblical: {
    summary: `Die Bibel lehrt Gottes **innige Nähe** – „in ihm leben, weben und sind wir" (Apg 17,28) –, aber zugleich den bleibenden **Unterschied zwischen Schöpfer und Geschöpf**. Der Mensch ist nach Gottes **Bild** geschaffen (Gen 1,27), nicht Gottes Wesen. Die ursprüngliche Versuchung lautete gerade: „Ihr werdet sein wie Gott" (Gen 3,5). Die Vollendung ist Gemeinschaft „von Angesicht zu Angesicht" (1 Kor 13,12) und Einheit in der Liebe (Joh 17,21–23) – nicht Auflösung in Identität. Weil Gott in sich dreieinig ist, ist Liebe nicht eine Vorstufe, sondern das Wesen der höchsten Wirklichkeit (1 Joh 4,8).`,
    detail: `- **Schöpfung aus dem Nichts:** Gen 1,1; Hebr 11,3; Röm 4,17 („ruft dem, das nicht ist, dass es sei"). Die Welt ist weder Gott noch Täuschung, sondern gute, wirkliche Schöpfung (Gen 1,31).
- **Nähe ohne Verschmelzung:** Apg 17,24–28 (Paulus zitiert den griechischen Dichter Aratos: „Wir sind seines Geschlechts" – aber im Rahmen eines Schöpfers, der „Himmel und Erde gemacht hat"). Ps 139: Gott ist überall gegenwärtig – und doch spricht der Beter ihn als Du an.
- **Gott ist nicht der Mensch:** Hos 11,9; Num 23,19; Jes 55,8–9.
- **Einheit in Liebe:** Joh 17,21–23 – die Gläubigen sollen eins sein „wie du, Vater, in mir und ich in dir". Das Modell der Einheit ist die Trinität: vollkommene Einheit **mit** bleibender Unterscheidung der Personen.
- **Teilhabe:** 2 Petr 1,4 spricht von Teilhabe an der göttlichen Natur – durch Verheißung und Gnade, nicht durch Wesensidentität.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,27', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '3,5', quote: `…sondern Gott weiß, daß, welches Tages ihr davon esset, so werden eure Augen aufgetan, und werdet sein wie Gott und wissen, was gut und böse ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,28', quote: `Denn in ihm leben, weben und sind wir; wie auch etliche Poeten bei euch gesagt haben: Wir sind seines Geschlechts.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hosea', ref: '11,9', quote: `…denn ich bin Gott und nicht ein Mensch und bin der Heilige unter dir …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,8', quote: `Wer nicht liebhat, der kennt Gott nicht; denn Gott ist die Liebe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '13,12', quote: `Wir sehen jetzt durch einen Spiegel in einem dunkeln Wort; dann aber von Angesicht zu Angesicht.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die alexandrinische Theologie kennt die Sehnsucht nach Vereinigung mit Gott sehr gut: „Er wurde Mensch, damit wir vergöttlicht würden" (Athanasius, De Inc. 54,3). Doch Vergöttlichung (Theosis) bedeutet **Teilhabe am Leben Gottes durch Gnade**, niemals Identität mit Gottes Wesen. Der Mensch bleibt Geschöpf, wie Eisen im Feuer glüht und doch Eisen bleibt. Sogar in Christus selbst sind Gottheit und Menschheit „ohne Vermischung, ohne Verwandlung, ohne Vermengung und ohne Trennung" geeint – umso weniger verschmilzt der Gläubige mit Gott. Papst Schenuda III. hat mit großem Nachdruck davor gewarnt, Theosis als Wesensvergöttlichung misszuverstehen.`,
    detail: `Innerhalb der koptischen Kirche wurde im 20. Jahrhundert lebhaft um die angemessene Sprache gerungen (Matta el-Meskeen betonte die Teilhabe am göttlichen Leben im Heiligen Geist; Papst Schenuda III. die Unüberschreitbarkeit des Wesensunterschieds). Gemeinsam ist beiden: Der Mensch wird **nie** zu Gott dem Wesen nach, und die Vereinigung geschieht durch Christus und den Heiligen Geist in der Kirche, nicht durch Selbsterkenntnis allein. Das ist der Kernunterschied zu Advaita.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '54,3', original: 'Αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν', quote: `Denn er wurde Mensch, damit wir vergöttlicht würden.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      { kind: 'liturgie', work: 'Bekenntnis am Ende der koptischen Liturgie', quote: `…er hat sie mit seiner Gottheit geeint ohne Vermischung, ohne Verwandlung, ohne Vermengung und ohne Trennung.`, status: 'paraphrase', note: 'Sinngemäß nach der Bekenntnisformel vor der Kommunion.' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vorträge und Schriften zur Abgrenzung gegen eine „Vergöttlichung des Menschen" (Theosis-Debatte)', year: '1990er–2000er', status: 'paraphrase', quote: `Der Mensch kann niemals an Gottes Wesen teilhaben oder Gott werden; er empfängt Gnade und Gaben des Geistes, bleibt aber Geschöpf.` },
    ],
  },
  opposingView: {
    summary: `Advaita Vedanta (Shankara, ca. 8. Jh.) liest die großen Upanishaden-Sätze (*mahavakyas*) als Aussagen strikter Identität: „Das bist du" (Chandogya 6,8,7), „Ich bin Brahman" (Brihadaranyaka 1,4,10), „Dieses Selbst ist Brahman" (Mandukya 2). Die Welt der Vielheit ist nicht schlechthin nichts, aber auch nicht letztlich wirklich, sondern durch Unwissenheit „überlagert" (*adhyasa*) – wie wenn man im Halbdunkel ein Seil für eine Schlange hält. Wichtig: Diese Auslegung war in Indien **nie** unbestritten. Ramanuja (Vishishtadvaita) und Madhva (Dvaita) haben sie mit großer Schärfe kritisiert.`,
    detail: `- **Ramanuja** (trad. 1017–1137) versteht die Welt und die Seelen als wirklichen „Leib" Gottes: Gott ist ihr innerer Lenker, aber von ihnen unterschieden. Er formulierte eine Reihe berühmter Einwände gegen die Lehre von der Unwissenheit (*avidya*) – allen voran die Frage nach ihrem Träger: Brahman kann nicht unwissend sein, und die Einzelseele entsteht erst durch die Unwissenheit.
- **Madhva** (13. Jh.) lehrt fünf ewige Unterschiede (Gott–Seele, Gott–Materie, Seele–Seele, Seele–Materie, Materie–Materie) und deutet „tat tvam asi" so, dass gerade keine Wesensidentität ausgesagt wird.
- Innerhalb des Advaita selbst stritten die Bhamati-Schule (Träger der Unwissenheit ist die Einzelseele) und die Vivarana-Schule (Träger ist Brahman) – ein Zeichen, dass das Problem nie gelöst wurde.`,
    sources: [
      { kind: 'oestlich', work: 'Chandogya-Upanishad', ref: '6,8,7', original: 'sa ya eṣo \'ṇimaitad ātmyam idaṃ sarvam, tat satyam, sa ātmā, tat tvam asi śvetaketo', quote: `Dieses Feinste – die ganze Welt hat es zum Selbst. Das ist das Wahre, das ist das Selbst. Das bist du, Shvetaketu.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Der Satz wird in Kap. 6,8–6,16 neunmal wiederholt.' },
      { kind: 'oestlich', work: 'Brihadaranyaka-Upanishad', ref: '1,4,10', original: 'ahaṃ brahmāsmi', quote: `Ich bin Brahman.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      { kind: 'oestlich', author: 'Ramanuja', work: 'Shri-Bhashya (Kommentar zum Brahma-Sutra)', ref: 'zu 1,1,1 („Große Frage")', status: 'paraphrase', quote: `Die Unwissenheit kann weder Brahman (das reines Wissen ist) noch der Einzelseele (die erst durch die Unwissenheit entsteht) als Träger zugeschrieben werden; die Lehre von der unbeschreiblichen Unwissenheit ist daher unhaltbar.`, note: 'Klassische Zusammenfassung von Ramanujas Einwänden gegen Advaita.' },
      { kind: 'oestlich', author: 'Madhva', work: 'Kommentare zu den Upanishaden und zum Brahma-Sutra', status: 'paraphrase', quote: `Zwischen Gott und Seele besteht ein ewiger, wirklicher Unterschied; die großen Sätze der Upanishaden lehren Abhängigkeit und Ähnlichkeit, nicht Identität.` },
    ],
  },
  quickAnswer: `Ich teile deine Überzeugung, dass ich mehr bin als mein Körper und meine Gedanken. Aber daraus folgt nicht, dass ich Gott bin: Mein Bewusstsein schläft, vergisst, irrt und lernt – Brahman tut all das per Definition nicht. Und wenn alles Täuschung ist, wer ist dann getäuscht? Das fragten schon die großen Hindu-Lehrer Ramanuja und Madhva. Der christliche Glaube sagt: Du bist nicht Gott, aber du bist von Gott geliebt – und zur ewigen Gemeinschaft mit ihm berufen. Liebe braucht ein Gegenüber.`,
  keyPoints: [
    `**Wer ist getäuscht?** Wenn nur Brahman wirklich ist und Brahman reines Wissen ist, kann die Unwissenheit weder in Brahman noch in einer Einzelseele wohnen, die es ohne Unwissenheit gar nicht gäbe (Ramanujas Einwand).`,
    `**Erfahrung ist nicht Identität:** Dass ich Zeuge meiner Gedanken bin, zeigt eine geistige Seele – nicht, dass diese Seele allwissend, unbegrenzt und göttlich ist.`,
    `**Liebe braucht ein Gegenüber:** Im Advaita sind Beziehung und Liebe letztlich Teil der Maya. Im dreieinigen Gott ist Liebe die höchste Wirklichkeit (1 Joh 4,8; Joh 17,24).`,
    `**Ethik ohne Unterschied?** Wenn alle Unterschiede letztlich unwirklich sind, auch der zwischen Opfer und Täter, Gut und Böse. Christen lieben den Nächsten **wie** sich selbst – nicht, weil er sie selbst **ist**.`,
    `**Indien selbst ist uneins:** Ramanuja und Madhva, zwei der einflussreichsten Theologen Indiens, lesen die Upanishaden gegen die strikte Identität.`,
    `**Theosis ist nicht Advaita:** „Gott wurde Mensch, damit wir vergöttlicht würden" (Athanasius) meint Teilhabe durch Gnade, nie Wesensidentität – wie Eisen im Feuer glüht und Eisen bleibt.`,
  ],
  argument: {
    name: 'Das Argument „Wer ist getäuscht?" (nach Ramanuja)',
    summary: 'Die Advaita-Lehre kann den Träger der Unwissenheit nicht widerspruchsfrei angeben.',
    premises: [
      {
        text: 'P1: Nach Advaita ist allein Brahman letztlich wirklich, und Brahman ist reines, unveränderliches, ungeteiltes Bewusstsein (Wissen).',
        support: 'So die klassische Lehre Shankaras; Brahman ist *sat-chit-ananda*, ohne innere Unterschiede (*nirguna*).',
      },
      {
        text: 'P2: Die Erfahrung der Vielheit und eines begrenzten Ichs beruht nach Advaita auf Unwissenheit (avidya), die durch Erkenntnis aufgehoben werden muss.',
        support: 'Darauf beruht der ganze Heilsweg (*jnana-yoga*): Befreiung ist das Ende der Unwissenheit.',
      },
      {
        text: 'P3: Unwissenheit braucht einen Träger – Unwissenheit ist immer Unwissenheit von jemandem.',
        support: 'Ein Irrtum, den niemand begeht, ist kein Irrtum. Wer etwas „aufheben" will, setzt voraus, dass es jemanden betrifft.',
      },
      {
        text: 'P4: Weder Brahman noch die Einzelseele (jiva) kann widerspruchsfrei Träger der Unwissenheit sein.',
        support: 'Brahman nicht, denn reines, unveränderliches Wissen kann nicht unwissend sein. Die Einzelseele nicht, denn sie existiert als Einzelseele erst durch die Unwissenheit – das wäre ein Zirkel. Genau das ist Ramanujas Einwand; auch die Advaita-Schulen selbst waren hierüber uneins.',
      },
    ],
    inferences: [
      'Also kann Advaita den Ursprung der Täuschung nicht kohärent erklären.',
      'Die nächstliegende Deutung unserer Erfahrung – es gibt wirklich viele Personen, die nicht Gott sind, aber von ihm abhängen – ist genau die biblische Schöpfungslehre.',
    ],
    conclusion: 'Advaita steht vor einem ungelösten Grundproblem. Die christliche Sicht – ein persönlicher, dreieiniger Gott, der wirkliche Personen aus Liebe erschafft und zur Gemeinschaft beruft – erklärt unsere Erfahrung von Ich, Du, Liebe und Moral besser.',
  },
  voices: [
    {
      person: 'athanasius',
      role: 'als Lehrer der Schöpfung und der Vergöttlichung',
      text: `Athanasius beginnt seine Schrift über die Menschwerdung mit der Schöpfung: Gott hat die Welt nicht aus einem vorhandenen Stoff und nicht aus sich selbst, sondern aus dem Nichts durch seinen Logos geschaffen. Darum ist die Welt wirklich und gut – und zugleich ganz abhängig. Wenn Athanasius dann sagt, der Logos sei Mensch geworden, „damit wir vergöttlicht würden", meint er die Gnade der Teilhabe an Gottes Leben, die uns der menschgewordene Sohn schenkt. Was Gott von Natur ist, werden wir durch Gnade – der Unterschied der Natur bleibt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '3', status: 'paraphrase', quote: `Gott hat das All aus dem Nichtsein ins Sein gerufen – weder aus vorhandener Materie noch durch einen anderen Schöpfer.` },
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '54,3', original: 'Αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν', quote: `Denn er wurde Mensch, damit wir vergöttlicht würden.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Denker der Innerlichkeit',
      text: `Augustinus suchte Gott lange außerhalb seiner selbst und fand ihn im Innersten – darin ist er den Upanishaden näher als mancher moderne Christ. Doch seine berühmte Formel hält beides zusammen: Gott ist „innerlicher als mein Innerstes und höher als mein Höchstes". Die Tiefe der Seele führt zu Gott, aber die Seele ist nicht Gott; sie entdeckt in sich den, der größer ist als sie. Augustinus wird hier als Philosoph der Innerlichkeit herangezogen, nicht als Lehrautorität für die koptische Kirche.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Bekenntnisse (Confessiones)', ref: 'III,6,11', original: 'tu autem eras interior intimo meo et superior summo meo', quote: `Du aber warst innerlicher als mein Innerstes und höher als mein Höchstes.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'chesterton',
      role: 'als Essayist, der Christentum und östliche Mystik verglich',
      text: `Chesterton sah den Kernunterschied in der Liebe: Wer liebt, will, dass der Geliebte ein anderer bleibt. Das östliche Ideal der Verschmelzung will die Getrenntheit aufheben; das Christentum freut sich darüber, dass Gott die Welt in lebendige, eigenständige Wesen „zerbrochen" hat, damit sie einander und ihn lieben können. Das Bild Chestertons: Die Liebe will nicht, dass man sich selbst die Hand schüttelt, sondern einem anderen.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxy', ref: 'Kap. 8 („The Romance of Orthodoxy")', year: '1908', original: 'Love desires personality; therefore love desires division.', quote: `Die Liebe begehrt Persönlichkeit; darum begehrt die Liebe Unterscheidung.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Denker über Pantheismus und Moral',
      text: `C. S. Lewis unterscheidet in *Pardon, ich bin Christ* zwei Grundansichten: den Pantheismus, für den Gott jenseits von Gut und Böse und die Welt ein Teil von ihm ist, und den biblischen Glauben an einen Gott, der die Welt geschaffen hat und eindeutig auf der Seite des Guten steht. Lewis weist darauf hin, dass man nur dann alles für einen Teil Gottes halten kann, wenn man den Unterschied zwischen Gut und Böse nicht wirklich ernst nimmt. Wer Krebs, Grausamkeit und Ungerechtigkeit als Übel ansieht, kann nicht sagen, sie seien „auch Gott".`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (dt. Pardon, ich bin Christ)', ref: 'Buch II, Kap. 1', year: '1952', original: 'If you do not take the distinction between good and bad very seriously, then it is easy to say that anything you find in this world is a part of God.', quote: `Wenn man den Unterschied zwischen Gut und Böse nicht sehr ernst nimmt, dann fällt es leicht zu sagen, dass alles, was man in dieser Welt findet, ein Teil Gottes ist.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'hart',
      role: 'als Religionsphilosoph, der die Vedanta-Begriffe ernst nimmt',
      text: `David Bentley Hart greift in *The Experience of God* bewusst die vedantische Dreiheit Sein–Bewusstsein–Glückseligkeit auf und zeigt, dass der klassische christliche Gottesbegriff hier mit den großen Traditionen Indiens eine gemeinsame Grammatik teilt: Gott ist nicht ein Ding unter Dingen, sondern der unendliche Grund allen Seins und Erkennens. Gerade deshalb wird der Unterschied klar: Nach christlicher Lehre ist die Welt nicht Gott und nicht Täuschung, sondern frei geschenktes, abhängiges, wirkliches Sein. Gott ist der Grund meines Bewusstseins – aber mein Bewusstsein ist nicht der unendliche Grund.`,
      sources: [
        { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Experience of God: Being, Consciousness, Bliss', year: '2013', status: 'paraphrase', quote: `Der klassische Theismus versteht Gott als unendliches Sein, Bewusstsein und Seligkeit, aus dem alles endliche Sein als Geschenk hervorgeht.` },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Patriarch und Lehrer der koptischen Kirche',
      text: `Papst Schenuda III. betonte immer wieder, dass der Mensch Gaben des Heiligen Geistes empfängt, in der Heiligkeit wächst und zur Gemeinschaft mit Gott berufen ist – aber niemals Gottes Wesen teilt oder „Gott wird". Diese Grenze ist für ihn kein Hindernis der Liebe, sondern ihre Voraussetzung: Nur wer Geschöpf bleibt, kann anbeten, danken und lieben. Damit steht die koptische Lehre dem Satz „Ich bin Brahman" diametral gegenüber.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Schriften und Vorträge zur Theosis-Frage', status: 'paraphrase', quote: `Gnade und Teilhabe an den Gaben Gottes ja – Teilhabe am göttlichen Wesen nein.` },
      ],
    },
  ],
  dialog: [
    {
      id: 'frage-steht-in-maya',
      objection: `Du fragst, wer getäuscht ist? Diese Frage steht selbst innerhalb der Maya. Vom Standpunkt der höchsten Wirklichkeit hat es nie Unwissenheit gegeben – es gibt nur Brahman.`,
      objectionBy: 'Swami Sarvapriyananda',
      targetsPremise: 3,
      answer: `Wenn es nie Unwissenheit gegeben hat, dann gibt es auch nichts zu befreien, keinen Weg und keinen Lehrer – aber du lehrst mich gerade. Entweder ist die Unwissenheit irgendwie wirklich, dann muss jemand unwissend sein; oder sie ist es nicht, dann ist der ganze Heilsweg überflüssig. „Vom höchsten Standpunkt gab es sie nie" beantwortet nicht, wer jetzt in ihr gefangen ist.`,
      detail: `Advaita unterscheidet zwei Ebenen: die konventionelle (*vyavaharika*) und die höchste (*paramarthika*). Das Problem wird dadurch nicht gelöst, sondern nur auf die Frage verlagert, warum es überhaupt eine konventionelle Ebene gibt und für wen. Ramanuja hat genau hier angesetzt.`,
      questionsBack: [
        `Wer genau soll durch deinen Vortrag von der Unwissenheit befreit werden, wenn es nie Unwissenheit gab?`,
        `Ist mein Irrtum, wenn ich mich für ein begrenztes Ich halte, ein Irrtum Brahmans?`,
      ],
      followUps: [
        {
          id: 'anirvacaniya',
          objection: `Die Unwissenheit ist eben *anirvacaniya* – weder seiend noch nichtseiend, unbeschreibbar. Das ist kein Widerspruch, sondern ihr eigentümlicher Status.`,
          objectionBy: 'Swami Sarvapriyananda (nach Shankara)',
          targetsPremise: 4,
          answer: `„Unbeschreibbar" benennt das Problem, löst es aber nicht. Etwas, das weder ist noch nicht ist, verletzt den Satz vom ausgeschlossenen Dritten – den Advaita in seinen eigenen Argumenten ständig benutzt. Genau diesen Ausweg hat Ramanuja schon im 11. Jahrhundert als unhaltbar zurückgewiesen.`,
          followUps: [
            {
              id: 'jenseits-der-logik',
              objection: `Logik gilt nur innerhalb der Maya. Brahman ist jenseits der Logik, jenseits aller Begriffe – *neti neti*, nicht dies, nicht das.`,
              objectionBy: 'Swami Sarvapriyananda',
              answer: `Dann ist dein Satz „Brahman ist jenseits der Logik" entweder eine logische Aussage – dann gilt die Logik – oder er sagt gar nichts. Du benutzt Argumente, um mich zu überzeugen; du kannst nicht den Ast absägen, auf dem du sitzt. Auch Christen sagen, dass Gott unser Begreifen übersteigt – aber übersteigen heißt nicht widersprechen.`,
              detail: `Die christliche (apophatische) Theologie sagt: Unsere Begriffe erfassen Gottes Wesen nicht. Sie sagt nicht, dass Widersprüche über Gott wahr seien. „Gott ist größer als unser Verstand" ist etwas anderes als „Gott ist A und Nicht-A zugleich".`,
              followUps: [
                {
                  id: 'vaeter-auch-apophatisch',
                  objection: `Eure Kirchenväter sagen doch auch, Gott sei unbegreiflich – Gregor von Nyssa, Dionysius. Das ist dasselbe wie *neti neti*!`,
                  objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
                  answer: `Die Sprache klingt ähnlich, die Aussage ist gegensätzlich. Die Väter sagen: Gott ist in seinem Wesen unbegreiflich – **und** das Geschöpf ist nicht Gott. Die negative Theologie schützt gerade den Unterschied zwischen Schöpfer und Geschöpf. *Neti neti* im Advaita dagegen führt zu dem Schluss, dass das Selbst Brahman ist – es hebt den Unterschied auf.`,
                  voices: [
                    {
                      person: 'gregor-nyssa',
                      role: 'als Theologe der Unbegreiflichkeit Gottes',
                      text: `Gregor von Nyssa argumentiert, dass der menschliche Geist sich selbst nicht vollständig begreifen kann – gerade weil er **Bild** des unbegreiflichen Gottes ist. Die Tiefe der Seele verweist auf Gott wie ein Spiegel auf das Urbild; aber ein Bild ist nicht das Urbild. Die Unbegreiflichkeit der Seele ist bei Gregor ein Zeichen ihrer Gottebenbildlichkeit, nicht ihrer Gottgleichheit.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '11', year: 'ca. 379', status: 'paraphrase', quote: `Weil der Geist Bild des unbegreiflichen Gottes ist, bleibt auch seine eigene Natur unbegreiflich.` },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 'bhamati-same-sproessling',
              objection: `Vachaspati Mishra hat es gelöst: Die Einzelseele ist Träger der Unwissenheit, und beide sind anfangslos voneinander abhängig – wie Same und Sprössling.`,
              objectionBy: 'Swami Sarvapriyananda (nach der Bhamati-Schule)',
              targetsPremise: 4,
              answer: `Same und Sprössling sind eine Abfolge verschiedener Dinge in der Zeit. Hier aber existiert die Einzelseele nur durch die Unwissenheit, und die Unwissenheit nur in der Einzelseele – ein Kreis, der nirgends Halt hat. Und die Vivarana-Schule im Advaita selbst hat diese Lösung abgelehnt und Brahman zum Träger gemacht. Wenn sich die Erben Shankaras jahrhundertelang nicht einigen konnten, ist das ein Zeichen für ein ungelöstes Problem.`,
              questionsBack: [`Wenn Brahman der Träger der Unwissenheit ist (Vivarana), ist Brahman dann nicht unvollkommen?`],
            },
          ],
        },
        {
          id: 'traum-gleichnis',
          objection: `Es ist wie ein Traum: Im Traum gibt es viele Personen, Freude und Leid. Beim Erwachen gibt es nur den einen Träumer. So ist es mit Brahman und der Welt.`,
          objectionBy: 'Ramana Maharshi (Linie)',
          answer: `Im Traum gibt es einen wirklichen Träumer, der begrenzt ist, schläft und sich täuscht. Wenn Brahman der Träumer ist, dann schläft und irrt Brahman – dann ist es nicht vollkommen. Wenn nicht, wer träumt dann? Das Gleichnis setzt gerade ein endliches, wirkliches Subjekt voraus – also das, was Advaita bestreitet.`,
        },
      ],
    },
    {
      id: 'zeuge-bewusstsein',
      objection: `Mach selbst das Experiment: Alles, was du beobachten kannst – Körper, Gedanken, Gefühle –, bist nicht du. Du bist das Bewusstsein, das sie bezeugt. Und dieses Bewusstsein hat keine Grenzen. Das ist keine Theorie, sondern direkte Erfahrung.`,
      objectionBy: 'Swami Sarvapriyananda',
      targetsPremise: 1,
      answer: `Den ersten Teil unterschreibe ich: Ich bin mehr als mein Körper und meine Gedanken – Christen glauben an eine geistige Seele. Aber aus „Ich bin der Zeuge meiner Gedanken" folgt nicht „Ich bin das unendliche, allwissende Brahman". Mein Bewusstsein schläft, vergisst, lernt und irrt. Das unendliche Brahman tut all das nicht. Die Erfahrung zeigt ein wirkliches Selbst – kein göttliches.`,
      questionsBack: [
        `Wenn dein Bewusstsein unendlich ist – warum weißt du nicht, was ich gerade denke?`,
        `Kann ein unveränderliches, vollkommenes Bewusstsein etwas Neues lernen, so wie du heute etwas lernst?`,
      ],
      followUps: [
        {
          id: 'samadhi-grenzenlos',
          objection: `Im Tiefschlaf und in tiefer Meditation (Samadhi) erfährt man reines Bewusstsein ohne Inhalt. Da gibt es keine Grenze, kein Ich, nur grenzenlose Weite.`,
          objectionBy: 'Swami Sarvapriyananda',
          answer: `Eine Erfahrung ohne Inhalt zeigt die Abwesenheit von Gegenständen, nicht die Abwesenheit von Grenzen. Sich grenzenlos zu fühlen heißt nicht, allmächtig und allwissend zu sein – nach dem Samadhi muss der Meditierende wieder essen und weiß nicht, was morgen geschieht. Auch christliche Mystiker kennen Erfahrungen tiefer Einung – und deuten sie als Vereinigung in Liebe mit Gott, nicht als Identität.`,
          followUps: [
            {
              id: 'erfahrung-eindeutig',
              objection: `Das sind nur westliche Begriffe. Die Erfahrung selbst ist eindeutig nondual. Wer sie hat, zweifelt nicht.`,
              objectionBy: 'Deepak Chopra (sinngemäß)',
              answer: `Keine Erfahrung deutet sich selbst – sie wird immer im Licht einer Tradition gedeutet. Ein buddhistischer Meditierender „sieht" in derselben Versenkung, dass es **kein** Selbst gibt (Anatta); der Vedantin „sieht" das **eine** Selbst (Atman). Dieselbe Praxis, entgegengesetzte Deutung. Also kann die Erfahrung allein die Frage nicht entscheiden – wir brauchen Gründe.`,
              sources: [
                { kind: 'fachliteratur', author: 'Steven T. Katz', work: 'Language, Epistemology, and Mysticism, in: S. T. Katz (Hg.), Mysticism and Philosophical Analysis', year: '1978', status: 'paraphrase', quote: `Es gibt keine reinen, unvermittelten Erfahrungen; mystische Erfahrung wird durch die Begriffe und Erwartungen der jeweiligen Tradition geformt.`, note: 'Einflussreiche These; nicht unumstritten (Gegenposition u. a. Robert Forman).' },
              ],
              followUps: [
                {
                  id: 'muss-selbst-erleben',
                  objection: `Dann bleibt es eben eine Frage der eigenen Erfahrung. Diskutieren bringt nichts – du musst es selbst erleben.`,
                  objectionBy: 'Ramana Maharshi (Linie)',
                  answer: `Dann kann aber niemand behaupten, „Ich bin Brahman" sei die Wahrheit für alle – es wäre nur eine private Erfahrung. Advaita beansprucht jedoch, die letzte Wahrheit über die Wirklichkeit zu sein. Wer das beansprucht, muss sich Gründen stellen. Und die Gründe – das Problem der Unwissenheit, die Wirklichkeit der Liebe, der moralische Unterschied zwischen Opfer und Täter – sprechen gegen die Identität.`,
                  questionsBack: [`Wenn es nur um persönliche Erfahrung geht – warum sollte ich deine Erfahrung höher stellen als die eines Christen, der Gott als liebendes Du erfährt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'persoenlicher-gott-vorstufe',
      objection: `Ein persönlicher Gott ist eine niedrigere Stufe – *Saguna Brahman*, Ishvara. Für Anfänger gut, für die Bhakti hilfreich. Aber die höchste Wahrheit ist überpersönlich, jenseits aller Beziehung.`,
      objectionBy: 'Swami Vivekananda',
      answer: `Dann sind Liebe, Beziehung und Personsein letztlich nicht wirklich – auf der höchsten Ebene gibt es niemanden, der liebt, und niemanden, der geliebt wird. Aber Liebe ist das Höchste, was wir kennen. Das Christentum sagt: Gott **ist** Liebe (1 Joh 4,8) – von Ewigkeit her, weil der eine Gott als Vater, Sohn und Heiliger Geist existiert. Personsein ist keine Vorstufe, sondern die tiefste Wirklichkeit.`,
      followUps: [
        {
          id: 'liebe-ist-begrenzung',
          objection: `Liebe setzt Zweiheit voraus – und Zweiheit ist Begrenzung. Das Absolute ist jenseits davon: reine Glückseligkeit, Ananda.`,
          objectionBy: 'Swami Sarvapriyananda',
          answer: `Eine Glückseligkeit, die niemanden hat, mit dem sie sich teilt, ist die Seligkeit der Einsamkeit. Die christliche Offenbarung sagt: Das Absolute ist nicht einsam – der Vater liebt den Sohn „ehe die Welt gegründet ward" (Joh 17,24). Unterscheidung ohne Trennung: genau das sagt die Trinität. Bemerkenswert ist, dass sogar Ramakrishna, Vivekanandas Lehrer, das Bild gebrauchte: Er wolle nicht Zucker werden, sondern Zucker schmecken.`,
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '17,24', quote: `…denn du hast mich geliebt, ehe denn die Welt gegründet ward.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'oestlich', work: 'The Gospel of Sri Ramakrishna (Mahendranath Gupta, engl. Swami Nikhilananda)', year: '1942', status: 'paraphrase', quote: `Ich will nicht Zucker werden, ich liebe es, Zucker zu essen.`, note: 'Bekanntes Bhakti-Bild Ramakrishnas (nach dem Dichter Ramprasad); genaue Stelle nicht verifiziert.' },
          ],
          followUps: [
            {
              id: 'trinitaet-auch-maya',
              objection: `Die Trinität ist auch nur eine Form von Maya – oder ein verkappter Polytheismus.`,
              objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
              answer: `Nein: ein Gott, ein Wesen, drei Hypostasen – nicht drei Götter. Gerade die Trinität ist die einzige Gottesvorstellung, in der das Absolute zugleich vollkommen eins und in sich selbst liebend ist, ohne die Welt zu brauchen. Im Advaita braucht Ishvara die Maya, um persönlich zu sein; der dreieinige Gott braucht nichts außer sich, um Liebe zu sein – darum ist die Schöpfung freies Geschenk.`,
              detail: `Siehe ausführlicher die Claims „1+1+1=3 – die Trinität ist unlogisch" und „Gott braucht keine Dreieinigkeit, um zu lieben" im Islam-Block. Die Logik ist dieselbe: Ein unipersonaler oder überpersönlicher Gott ist entweder vor der Schöpfung ohne Liebe oder braucht die Schöpfung als Gegenüber.`,
            },
          ],
        },
        {
          id: 'theosis-ist-advaita',
          objection: `Auch bei euch heißt es: „Gott wurde Mensch, damit wir Gott werden" (Athanasius). Das ist doch Advaita in christlicher Sprache!`,
          objectionBy: 'Deepak Chopra (sinngemäß)',
          answer: `Ähnlicher Wortlaut, entgegengesetzter Sinn. Theosis bedeutet Teilhabe an Gottes Leben durch Gnade – wie Eisen im Feuer glüht und doch Eisen bleibt. Niemals Wesensidentität: Der Schöpfer bleibt Schöpfer, das Geschöpf bleibt Geschöpf. Advaita sagt: Du **bist** schon Brahman und musst es nur erkennen. Theosis sagt: Du bist ein Geschöpf, das zur Gemeinschaft berufen ist – und dazu brauchst du Christus.`,
          voices: [
            {
              person: 'kyrill-alexandrien',
              role: 'als Lehrer der Einung ohne Vermischung',
              text: `Für Kyrill ist die tiefste Einung, die es gibt, die von Gottheit und Menschheit in Christus – und selbst dort werden die Naturen nicht vermischt oder verwandelt. Wenn also sogar in der einen fleischgewordenen Natur des Gott-Logos die Menschheit nicht in der Gottheit aufgeht, dann ist es umso klarer, dass die Gläubigen durch Teilhabe an Christus geheiligt, aber nicht in Gottes Wesen aufgelöst werden.`,
              sources: [
                { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Dritter Brief an Nestorius mit den zwölf Anathematismen', year: '430', status: 'paraphrase', quote: `Der Logos hat sich das Fleisch wahrhaft geeint, ohne dass die Naturen vermischt oder verwandelt wurden.` },
              ],
            },
          ],
          followUps: [
            {
              id: 'praktisch-kein-unterschied',
              objection: `Wo ist der praktische Unterschied? Beide suchen doch die Einheit mit dem Göttlichen.`,
              objectionBy: 'Deepak Chopra (sinngemäß)',
              answer: `Der Unterschied ist Liebe statt Auflösung und Gnade statt Selbsterkenntnis. Im Christentum wird das Ich nicht ausgelöscht, sondern vollendet; der Geliebte bleibt ein Gegenüber, um ewig zu lieben – „von Angesicht zu Angesicht" (1 Kor 13,12). Und der Weg ist nicht eine Technik der Einsicht, sondern Christus: Umkehr, Taufe, Eucharistie, Gebet – Begegnung mit einer Person.`,
            },
          ],
        },
      ],
    },
    {
      id: 'praktischer-vedanta-ethik',
      objection: `Advaita begründet die Ethik am tiefsten: Wenn der andere dein eigenes Selbst ist, kannst du ihm nicht schaden wollen. Das ist praktischer Vedanta.`,
      objectionBy: 'Swami Vivekananda',
      answer: `Ein schöner Gedanke – aber logisch gilt: Wenn alle Unterschiede letztlich unwirklich sind, dann auch der Unterschied zwischen Opfer und Täter, zwischen Gut und Böse. Die Ethik gehört dann zur Welt der Täuschung. Christen begründen die Ethik in der wirklichen Würde eines anderen: Liebe deinen Nächsten **wie** dich selbst (Lev 19,18) – nicht, weil er du **bist**, sondern weil Gott ihn als einzigartiges Du geschaffen hat.`,
      followUps: [
        {
          id: 'vyavaharika-ethik',
          objection: `Auf der relativen Ebene gilt die Ethik voll. Sie ist der Weg der Reinigung, der zur Erkenntnis führt.`,
          objectionBy: 'Swami Sarvapriyananda',
          answer: `Dann ist die Ethik eine Leiter, die man wegwirft, sobald man oben ist. Auf der höchsten Ebene ist das Mitleid mit dem Leidenden nicht mehr wirklich – denn es gibt niemanden, der leidet. Das Christentum sagt das Gegenteil: Auf der höchsten Ebene ist die Liebe am wirklichsten. „Die Liebe hört nimmer auf" (1 Kor 13,8).`,
          followUps: [
            {
              id: 'moenche-leben-vorbildlich',
              objection: `Die Mönche des Ramakrishna-Ordens leisten seit über hundert Jahren vorbildliche Hilfe für Arme und Katastrophenopfer. Deine Argumente sind nur Theorie.`,
              objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
              answer: `Das erkenne ich gerne und ehrlich an – ihr Dienst ist bewundernswert. Mein Punkt betrifft nicht ihren Charakter, sondern die Frage, ob die Philosophie das begründet, was sie so gut tun. Oft leben Menschen besser, als ihr System es verlangt. Ich glaube, dass ihr Mitgefühl tiefer wahr ist, als Advaita zugeben kann: Der Leidende ist wirklich ein anderer, und seine Not ist wirklich.`,
            },
          ],
        },
      ],
    },
    {
      id: 'upanishaden-sagen-es-klar',
      objection: `Die Upanishaden sagen es klar: „Das bist du" (Chandogya 6,8,7), „Ich bin Brahman" (Brihadaranyaka 1,4,10). Die Weisen Indiens haben es erkannt.`,
      objectionBy: 'Adi Shankara (Linie)',
      answer: `Auch in Indien war diese Deutung nie unbestritten. Ramanuja liest „Das bist du" als Einheit Gottes als inneren Lenker mit der Seele, die wie sein „Leib" ist – bei bleibendem Unterschied. Madhva lehrt sogar fünf ewige Unterschiede und bestreitet die Wesensidentität. Die großen Hindu-Traditionen sind sich also gerade nicht einig, dass die Upanishaden reine Identität lehren.`,
      followUps: [
        {
          id: 'shankara-authentisch',
          objection: `Ramanuja und Madhva sind spätere Sektierer. Shankara ist der authentische Ausleger der Upanishaden.`,
          objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
          answer: `Ramanuja und Madhva gehören zu den einflussreichsten Theologen Indiens, mit Millionen Anhängern bis heute – sie als „Sektierer" abzutun, wäre so, als würde ich Shankara einen Außenseiter nennen. Und der Text selbst ist offen: Uddalaka erklärt seinem Sohn das „Feinste" mit dem Salz, das sich im Wasser auflöst, und dem Kern der Feige – Bilder einer alles durchdringenden Gegenwart, die Ramanuja als Innewohnen versteht. Die Behauptung, „die Weisen" seien sich einig, stimmt jedenfalls nicht.`,
          questionsBack: [`Nach welchem Kriterium entscheidest du, dass Shankaras Auslegung die richtige ist und nicht die Ramanujas?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn alles Brahman ist und Brahman reines Wissen ist – wer ist dann unwissend?`,
    `Wenn dein Bewusstsein unendlich ist, warum musst du dann noch etwas lernen?`,
    `Ist Liebe in deiner Sicht letztlich wirklich – oder gehört sie zur Maya?`,
    `Ist der Unterschied zwischen einem Folterer und seinem Opfer auf der höchsten Ebene wirklich oder unwirklich?`,
    `Warum sollte ich Shankara folgen und nicht Ramanuja oder Madhva?`,
  ],
  avoid: [
    `Nenne Advaita nicht „satanisch" oder „Selbstvergötterung aus Stolz" – damit beleidigst du aufrichtige Sucher und verlierst das Gespräch. Argumentiere mit der Sache.`,
    `Behaupte nicht, „Hindus glauben an Millionen Götter, also sind sie Polytheisten" – gerade Advaitins sind radikale Monisten. Kenne die Position, die du kritisierst.`,
    `Stelle christliche Mystik (Theosis, Wüstenväter) nicht als irrelevant hin – sie ist deine stärkste Brücke. Zeige den Unterschied, statt die Gemeinsamkeit zu leugnen.`,
    `Zitiere den Satz „brahma satyam jagan mithya" nicht als sicheres Shankara-Zitat; er wird ihm traditionell zugeschrieben, die Verfasserschaft der Quelle ist umstritten.`,
  ],
  concessions: [
    `Advaita ist eine der tiefsten und konsequentesten Philosophien der Menschheit; Shankara war ein Denker von höchstem Rang.`,
    `Christen haben Gottes Innewohnen (Apg 17,28; Gal 2,20) oft vernachlässigt und Gott wie einen fernen Herrscher dargestellt. Das Advaita erinnert an etwas Wahres: Gott ist uns näher als wir uns selbst.`,
    `Die Theosis-Sprache der Väter kann missverstanden werden; auch innerhalb der koptischen Kirche wurde um die richtige Formulierung gerungen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Experience of God: Being, Consciousness, Bliss', year: '2013', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxie (Orthodoxy), Kap. 8', year: '1908', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths, Kapitel zum Hinduismus', year: '2. Aufl. 2012', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos', year: 'ca. 318', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Vishal Mangalwadi', work: 'The World of Gurus', year: '1977', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Advaita', 'Vedanta', 'Shankara', 'Ramanuja', 'Madhva', 'Theosis', 'Bewusstsein'],
  related: [
    'buddhismus/kein-selbst-anatta',
    'esoterik-new-age/christusbewusstsein',
    'esoterik-new-age/alles-ist-energie-gott',
    'islam-trinitaet/gott-braucht-keine-trinitaet-um-zu-lieben',
    'islam-trinitaet/trinitaet-unlogisch',
    'erkenntnistheorie/religioese-erfahrung-kein-beleg',
    'moral-und-gott/gut-ohne-gott',
  ],
};

export default claim;
