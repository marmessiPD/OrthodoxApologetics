import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'schoepfergott-unnoetig',
  title: `„Ein Schöpfergott ist unnötig und widersprüchlich."`,
  proponents: [
    { name: 'Dharmakirti', role: 'Buddhistischer Logiker (7. Jh.)', work: 'Pramanavarttika – Kritik am Schöpfergott (Ishvara)' },
    { name: 'Vasubandhu', role: 'Buddhistischer Philosoph (4./5. Jh.)', work: 'Abhidharmakosha-Bhashya, Kap. 2' },
    { name: 'Tenzin Gyatso, der 14. Dalai Lama', role: 'Oberhaupt des tibetischen Buddhismus', work: 'The Universe in a Single Atom (2005); Toward a True Kinship of Faiths (2010)' },
    { name: 'Stephen Batchelor', role: 'Säkularer buddhistischer Lehrer', work: 'Confession of a Buddhist Atheist (2010)' },
  ],
  steelman: `Das bedingte Entstehen (*paticcasamuppada*) erklärt die Welt vollständig: „Ist dies, so ist jenes; entsteht dies, so entsteht jenes." Jedes Ding entsteht aus Bedingungen, der Kreislauf ist anfangslos. Ein Schöpfergott fügt nichts hinzu, schafft aber Widersprüche. Die großen buddhistischen Logiker haben sie präzise benannt: Ein ewiger, unveränderlicher Gott kann keine wechselnden Wirkungen zu verschiedenen Zeiten hervorbringen – wirkt er, verändert er sich; verändert er sich, ist er nicht ewig (Dharmakirti). Wäre Gott die einzige Ursache, müsste alles auf einmal entstehen; tatsächlich entstehen die Dinge nacheinander aus vielen Ursachen (Vasubandhu). Und wenn ein allmächtiger Herr über Glück und Leid aller Wesen verfügt, ist er an allem Bösen schuldig (Bhuridatta-Jataka). Der Buddha hat die Frage nach einem ersten Anfang deshalb als unnütz beiseitegelegt. Der Kanon erzählt sogar, wie der Gott Brahma sich irrtümlich für den Schöpfer hält.`,
  biblical: {
    summary: `Die Bibel beginnt mit dem Schöpfer: „Im Anfang schuf Gott Himmel und Erde" (Gen 1,1). Gott ist nicht ein Wesen innerhalb der Welt, sondern ihr transzendenter Grund, „von Ewigkeit zu Ewigkeit" (Ps 90,2), der „nicht von Menschenhänden gepflegt wird, als der jemandes bedürfe" (Apg 17,25). Er erhält alle Dinge durch sein Wort (Hebr 1,3; Kol 1,17). Die Schöpfung verweist auf ihn: „Gottes unsichtbares Wesen … wird ersehen, so man des wahrnimmt, an den Werken" (Röm 1,20). Gott schafft frei, geordnet, in Zeit und durch Mittelursachen (Gen 1: „Die Erde lasse aufgehen …").`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,1', quote: `Am Anfang schuf Gott Himmel und Erde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '90,2', quote: `Ehe denn die Berge wurden und die Erde und die Welt geschaffen wurden, bist du, Gott, von Ewigkeit zu Ewigkeit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '1,20', quote: `Damit daß Gottes unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,24–25', quote: `Gott, der die Welt gemacht hat und alles, was darinnen ist … sein wird auch nicht von Menschenhänden gepflegt, als der jemandes bedürfe, so er selber jedermann Leben und Odem allenthalben gibt.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt Gott als Schöpfer aller sichtbaren und unsichtbaren Dinge, der alles aus dem Nichts gerufen hat. Der hl. Athanasius setzt sich bereits mit drei Alternativen auseinander: dem Zufall der Epikureer, dem ewigen Stoff der Platoniker und dem fremden Schöpfer der Gnostiker. Gegen alle drei zeigt er, dass die Ordnung und Einheit der Welt auf einen einzigen, guten, durch seinen Logos wirkenden Schöpfer verweist. Gott ist dabei kein „höchstes Wesen" innerhalb des Kosmos – wie der Brahma der buddhistischen Texte –, sondern der Unerschaffene, der allem das Sein schenkt.`,
    sources: [
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', year: '381', quote: `Wir glauben an den einen Gott, den Vater, den Allmächtigen, den Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren.`, status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '2–3', status: 'paraphrase', quote: `Widerlegung der Lehren, die Welt sei von selbst entstanden, aus ewiger Materie gebildet oder von einem anderen Schöpfer als dem Vater Christi gemacht.` },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '35–39', status: 'paraphrase', quote: `Die harmonische Ordnung der gegensätzlichen Elemente zeigt einen einzigen Lenker und Schöpfer, den Logos des Vaters.` },
    ],
  },
  opposingView: {
    summary: `Die buddhistische Kritik am Schöpfergott ist philosophisch ernst zu nehmen. Vasubandhu argumentiert, ein allein wirkender Gott müsste alles gleichzeitig hervorbringen; Dharmakirti, ein unveränderlicher Gott könne nicht Ursache wechselnder Wirkungen sein. Der Pali-Kanon erzählt im Brahmajala-Sutta (DN 1), wie der Gott Mahabrahma als erster in einem neu entstehenden Weltzeitalter erscheint und sich irrtümlich für den Schöpfer der später erscheinenden Wesen hält; im Kevaddha-Sutta (DN 11) muss Brahma eingestehen, dass er eine Frage nicht beantworten kann, und verweist an den Buddha. Der heutige Dalai Lama vertritt respektvoll, aber klar, dass der Buddhismus keinen Schöpfergott annimmt.`,
    detail: `**Wichtig für das Gespräch:** Diese Kritik richtet sich gegen einen **endlichen** Gott innerhalb des Kosmos, der zu einem bestimmten Zeitpunkt auftaucht und sich irren kann. Einen solchen Gott lehnen Christen ebenfalls ab. Der klassische Gottesbegriff (Athanasius, Augustinus, Thomas) meint nicht das größte Wesen in der Welt, sondern den unbedingten Grund allen Seins. Bemerkenswert ist außerdem, dass der Buddha selbst nicht alles Erleben auf früheres Karma zurückführt (Samyutta-Nikaya 36,21).`,
    sources: [
      { kind: 'oestlich', work: 'Digha-Nikaya 1 (Brahmajala-Sutta)', ref: '2,2–2,6', status: 'paraphrase', quote: `Mahabrahma erscheint als erster und denkt, als andere Wesen erscheinen: „Ich bin der Schöpfer, sie sind von mir geschaffen" – ein Irrtum, weil er nur früher erschien.` },
      { kind: 'oestlich', work: 'Jataka 543 (Bhuridatta-Jataka)', status: 'paraphrase', quote: `Gäbe es einen allmächtigen Herrn, der jedem Wesen Glück oder Leid, gute oder böse Tat zuteilt, so wäre dieser Herr mit Schuld befleckt.` },
      { kind: 'oestlich', author: 'Vasubandhu', work: 'Abhidharmakosha-Bhashya', ref: 'Kap. 2', status: 'paraphrase', quote: `Wäre Gott die einzige Ursache der Welt, so entstünde alles auf einmal; die Dinge entstehen aber nacheinander aus vielen Ursachen.` },
      { kind: 'oestlich', author: 'Dharmakirti', work: 'Pramanavarttika (Pramanasiddhi-Kapitel)', status: 'paraphrase', quote: `Ein beständiger, unveränderlicher Gott kann nicht Ursache von Wirkungen sein, die zu verschiedenen Zeiten auftreten.` },
      { kind: 'gegner', author: 'Dalai Lama', work: 'Toward a True Kinship of Faiths', year: '2010', status: 'paraphrase', quote: `Der Buddhismus nimmt keinen Schöpfergott an; die Vorstellungen von Schöpfung und anfangslosem bedingtem Entstehen sind verschieden und sollten nicht vermischt werden – gegenseitiger Respekt ist dennoch möglich.` },
    ],
  },
  quickAnswer: `Das bedingte Entstehen erklärt, wie die Dinge voneinander abhängen – aber nicht, warum es überhaupt etwas gibt. Auch eine endlose Kette abhängiger Dinge ist als Ganze abhängig. Genau diese Frage – „Warum gibt es überhaupt etwas?" – hat den Buddhologen Paul Williams nach zwanzig Jahren buddhistischer Praxis zum christlichen Glauben geführt. Und der Buddha selbst sprach von einem „Ungeborenen, Unbedingten" (Udana 8,3). Der Gott der Bibel ist nicht der irrende Brahma, sondern dieser unbedingte Grund – und er hat sich als Liebe gezeigt.`,
  keyPoints: [
    `**Kontingenz:** Alles Bedingte hängt von anderem ab – das lehrt der Buddhismus selbst. Auch eine anfangslose Kette bedingter Dinge ist als Ganze bedingt und verlangt einen unbedingten Grund.`,
    `**Udana 8,3:** „Es gibt ein Ungeborenes, Ungewordenes, Ungeschaffenes, Unbedingtes" – der Buddhismus selbst kennt eine unbedingte Wirklichkeit.`,
    `**Der falsche Gegner:** Die buddhistische Kritik trifft einen endlichen Gott innerhalb des Kosmos (Brahma). Den lehnen Christen auch ab; der biblische Gott ist der Grund des Seins, nicht ein Wesen darin.`,
    `**Dharmakirtis Einwand verkennt die Ewigkeit:** Gottes ewiger Wille kann eine zeitliche Welt wollen, ohne dass Gott sich ändert – die Veränderung liegt in den Geschöpfen.`,
    `**Freiheit statt Emanation:** Weil Gott frei und durch Mittelursachen schafft, muss nicht alles „auf einmal" entstehen (gegen Vasubandhu).`,
    `**Moderne Kosmologie:** Die Annahme eines anfangslosen Weltprozesses steht in Spannung zu den Hinweisen auf einen Anfang des Universums.`,
  ],
  argument: {
    name: 'Das Kontingenzargument im Gespräch mit dem bedingten Entstehen',
    summary: 'Aus der buddhistischen Lehre der Bedingtheit selbst folgt die Frage nach einem unbedingten Grund.',
    premises: [
      { text: 'P1: Jedes bedingte (kontingente) Ding hängt in seinem Dasein von etwas anderem ab.', support: 'Das ist der Kern des bedingten Entstehens: „Ist dies, so ist jenes" (u. a. Samyutta-Nikaya 12,21). Hier sind Buddhist und Christ sich einig.' },
      { text: 'P2: Die Gesamtheit aller bedingten Dinge – auch wenn sie anfangslos wäre – ist selbst bedingt und erklärt nicht, warum es sie überhaupt gibt.', support: 'Eine endlose Reihe von Spiegeln erklärt nicht, woher das Licht kommt. Eine Summe abhängiger Glieder wird nicht dadurch unabhängig, dass man unendlich viele davon annimmt.' },
      { text: 'P3: Also gibt es etwas Unbedingtes, das nicht von anderem abhängt und Grund des Bedingten ist.', support: 'Auch Udana 8,3 nennt ein Unbedingtes (asaṅkhata), ohne das es kein Entrinnen aus dem Bedingten gäbe.' },
    ],
    conclusion: 'Ein unbedingter Grund des Seins existiert. Ob er nur „Ausgang" aus der Welt (Nirvana) oder auch ihr Ursprung ist, ist die eigentliche Streitfrage – und die geordnete, von Bewusstsein und Moral geprägte Welt spricht dafür, dass er personal ist.',
  },
  voices: [
    {
      person: 'paul-williams',
      role: 'als Buddhologe, der nach zwanzig Jahren buddhistischer Praxis Christ wurde',
      text: `Paul Williams berichtet, dass ihn vor allem eine Frage vom Buddhismus wegführte: Warum gibt es überhaupt etwas und nicht nichts? Das bedingte Entstehen beschreibt, wie Dinge auseinander hervorgehen, aber es beantwortet nicht, warum es diese ganze Kette gibt. Diese Frage wurde für ihn, wie er schreibt, zu einer Art Koan, dem er nicht mehr ausweichen konnte. Die Antwort, die er schließlich für die vernünftigste hielt, ist der Gott, der aus Liebe frei erschafft.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul Williams', work: 'The Unexpected Way: On Converting from Buddhism to Catholicism', year: '2002', status: 'paraphrase', quote: `Die Frage „Warum gibt es etwas und nicht vielmehr nichts?" wurde mir zu etwas wie einem Zen-Koan.` },
      ],
    },
    {
      person: 'hart',
      role: 'als Religionsphilosoph des klassischen Theismus',
      text: `David Bentley Hart weist darauf hin, dass viele Einwände gegen „Gott" in Wahrheit einen Demiurgen treffen: ein mächtiges Wesen innerhalb der Welt, das irgendwann etwas herstellt. Der Gott der großen Traditionen ist dagegen nicht ein Seiendes neben anderen, sondern das Sein selbst, der Grund, warum überhaupt etwas ist. Hart würde sagen: Der buddhistische Brahma, der sich irrtümlich für den Schöpfer hält, ist gerade das, was der klassische Theismus nicht meint.`,
      sources: [
        { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Experience of God: Being, Consciousness, Bliss', year: '2013', status: 'paraphrase', quote: `Gott ist nicht ein Wesen unter anderen, auch nicht das größte, sondern die unendliche Quelle allen Seins.` },
      ],
    },
    {
      person: 'feser',
      role: 'als Philosoph der klassischen Gottesbeweise',
      text: `Edward Feser verteidigt die klassischen Argumente aus Aristotelischer und Thomistischer Tradition: Alles, was aus Möglichkeit in Wirklichkeit übergeht, und alles, was zusammengesetzt ist, hängt in jedem Augenblick von einer Ursache ab, die selbst reine Wirklichkeit und schlechthin einfach ist. Diese erste Ursache ist kein Glied am Anfang einer Zeitreihe, sondern der jetzt tragende Grund. Damit wird auch Dharmakirtis Einwand entschärft: Die Veränderung liegt in den Wirkungen, nicht in der reinen Wirklichkeit, die sie trägt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der Schöpfung',
      text: `Athanasius kannte die philosophischen Alternativen zum Schöpferglauben seiner Zeit: Zufall, ewige Materie, ein zweitrangiger Weltbaumeister. Er antwortet mit der Beobachtung, dass gegensätzliche Elemente – Feuer und Wasser, Warmes und Kaltes – in einer Ordnung zusammenwirken, die nicht aus ihnen selbst stammt, sondern auf einen einzigen Lenker verweist: den Logos des Vaters, durch den alles geschaffen ist und besteht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '35–39', status: 'paraphrase' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph der besten Erklärung',
      text: `Richard Swinburne argumentiert, dass die Existenz eines geordneten, gesetzmäßigen Universums mit bewussten Wesen ohne Gott unerklärt bleibt, während die Hypothese eines einzigen, allmächtigen, allwissenden, vollkommen freien Gottes die einfachste Erklärung ist. Ein bloßes „Es ist halt so, anfangslos" ist keine Erklärung, sondern der Verzicht darauf.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'bedingtes-entstehen-reicht',
      objection: `Das bedingte Entstehen erklärt alles: Jedes Ding entsteht aus Bedingungen, und diese wieder aus Bedingungen. Einen Schöpfer braucht es nicht.`,
      objectionBy: 'Dalai Lama (sinngemäß)',
      targetsPremise: 2,
      answer: `Das bedingte Entstehen erklärt, **wie** die Dinge voneinander abhängen – nicht, **warum es überhaupt etwas gibt**. Auch eine endlose Kette abhängiger Glieder ist als Ganze abhängig: Eine unendliche Reihe von Spiegeln erklärt nicht, woher das Licht kommt. Genau diese Frage hat den Buddhologen Paul Williams nach zwanzig Jahren buddhistischer Praxis zum christlichen Glauben geführt.`,
      followUps: [
        {
          id: 'ganzes-einfach-da',
          objection: `Das Ganze braucht keine Erklärung – es ist einfach da. Die Frage „Warum gibt es überhaupt etwas?" ist sinnlos.`,
          objectionBy: 'Stephen Batchelor (sinngemäß)',
          targetsPremise: 2,
          answer: `Der Buddhismus lebt gerade von der Frage nach Bedingungen: „Entsteht dies, so entsteht jenes." Wenn du beim Ganzen aufhörst zu fragen, nimmst du willkürlich das größte bedingte Ding von deinem eigenen Prinzip aus. Und der Buddha selbst sagt in Udana 8,3, dass es ohne das Unbedingte kein Entrinnen aus dem Bedingten gäbe – das Bedingte genügt sich also nicht selbst.`,
          sources: [
            { kind: 'oestlich', work: 'Udana 8,3 (Nibbana-Sutta)', original: 'atthi, bhikkhave, ajātaṃ abhūtaṃ akataṃ asaṅkhataṃ. no cetaṃ, bhikkhave, abhavissa ajātaṃ abhūtaṃ akataṃ asaṅkhataṃ, nayidha jātassa bhūtassa katassa saṅkhatassa nissaraṇaṃ paññāyetha.', quote: `Es gibt, ihr Mönche, ein Ungeborenes, Ungewordenes, Ungeschaffenes, Unbedingtes. Gäbe es dieses Ungeborene, Ungewordene, Ungeschaffene, Unbedingte nicht, so wäre hier kein Entrinnen aus dem Geborenen, Gewordenen, Geschaffenen, Bedingten erkennbar.`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://www.accesstoinsight.org/tipitaka/kn/ud/ud.8.03.than.html' },
          ],
          followUps: [
            {
              id: 'unbedingtes-ist-nirvana',
              objection: `Das Unbedingte in Udana 8,3 ist das Nirvana – ein Zustand der Befreiung, kein Schöpfer.`,
              objectionBy: 'Walpola Rahula (sinngemäß)',
              answer: `Einverstanden: Die buddhistische Tradition deutet es als Nirvana. Aber damit räumt der Buddhismus zweierlei ein: Es gibt eine unbedingte, ungeschaffene Wirklichkeit, und sie ist die notwendige Bedingung der Befreiung. Der Christ fragt weiter: Wäre es nicht merkwürdig, wenn das Unbedingte zur Welt nur als Ausgang in Beziehung stünde und nicht auch als ihr Ursprung? Beide Seiten anerkennen etwas Unverursachtes – die Frage ist, ob es personal ist.`,
              followUps: [
                {
                  id: 'warum-persoenlich',
                  objection: `Und warum sollte dieses Unbedingte persönlich sein? Das ist eure Projektion.`,
                  objectionBy: 'Stephen Batchelor',
                  answer: `Weil aus ihm eine Welt hervorgeht, die geordnet ist, in der es Vernunft, Bewusstsein und ein moralisches Gesetz gibt. Dass aus einem unpersönlichen Grund Personen mit Absichten und Vernunft hervorgehen, ist schwerer zu erklären als das Umgekehrte. Und Christen berufen sich nicht nur auf Schlüsse, sondern auf Offenbarung: Der Grund des Seins hat sich in Jesus Christus als Liebe gezeigt.`,
                  questionsBack: [`Kann ein unpersönlicher Grund erklären, warum es in der Welt Wesen gibt, die nach Wahrheit fragen und lieben?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dharmakirti-unveraenderlich',
      objection: `Ein ewiger, unveränderlicher Gott kann nichts Veränderliches bewirken. Wirkt er heute anders als gestern, verändert er sich; verändert er sich, ist er nicht ewig.`,
      objectionBy: 'Dharmakirti',
      answer: `Der Einwand setzt voraus, dass Gott wie eine Ursache in der Zeit handelt. Nach klassischer Lehre ist Gottes Wille ewig; was er ewig will, ist eine Welt mit zeitlichem Verlauf. Die Veränderung liegt in den Geschöpfen, nicht in Gott. Ein zeitloser Entschluss „Es werde eine Welt, die mit der Zeit beginnt" verlangt keine Veränderung in Gott. Übrigens steht das unbedingte Nirvana ebenfalls in Beziehung zu Wesen, die es zu verschiedenen Zeiten erlangen – dieselbe Strukturfrage.`,
      followUps: [
        {
          id: 'mysterium-ausrede',
          objection: `Dann ist Gottes Handeln unverständlich. „Ewiger Wille" ist ein Mysterium als Ausrede.`,
          objectionBy: 'Stephen Batchelor (sinngemäß)',
          answer: `Es ist keine Ausrede, sondern eine präzise Unterscheidung. Eine mathematische Wahrheit verändert sich nicht und begründet doch unzählige zeitliche Rechenvorgänge. Gottes Ewigkeit ist zudem keine erstarrte Zeit, sondern Fülle des Lebens – Boethius definierte sie als „vollkommenen, ganzen und gleichzeitigen Besitz unbegrenzten Lebens".`,
          sources: [
            { kind: 'fachliteratur', author: 'Boethius', work: 'Der Trost der Philosophie (De consolatione philosophiae)', ref: 'V, Prosa 6', year: 'ca. 524', original: 'Aeternitas igitur est interminabilis vitae tota simul et perfecta possessio.', quote: `Die Ewigkeit ist also der ganze, gleichzeitige und vollkommene Besitz unbegrenzbaren Lebens.`, status: 'verbatim', translation: 'eigene Übersetzung' },
          ],
        },
      ],
    },
    {
      id: 'vasubandhu-alles-auf-einmal',
      objection: `Wäre Gott die einzige Ursache, müsste alles auf einmal entstehen. Dass die Dinge nacheinander aus vielen Ursachen entstehen, zeigt: Es gibt keinen Schöpfergott.`,
      objectionBy: 'Vasubandhu',
      answer: `Das gilt nur für eine blinde, notwendig ausströmende Ursache. Der biblische Gott schafft frei, durch sein Wort, in geordneten Schritten („und es ward Abend und Morgen") und gibt den Geschöpfen eigene Wirkkraft („Die Erde lasse aufgehen …", Gen 1,11). Wie ein Autor eine Geschichte Kapitel für Kapitel schreibt, ohne dass er deshalb nicht der einzige Autor wäre.`,
      followUps: [
        {
          id: 'mittelursachen-reichen',
          objection: `Wenn Gott durch Mittelursachen wirkt, ist er überflüssig. Die Ursachen reichen doch.`,
          objectionBy: 'Dalai Lama (sinngemäß)',
          answer: `Mittelursachen erklären, wie ein Ding aus einem anderen hervorgeht – nicht, warum es überhaupt Ursachen mit dieser Wirkkraft gibt. Die Figuren eines Romans handeln wirklich innerhalb der Geschichte, und doch existiert die ganze Geschichte nur, weil der Autor sie schreibt. Gott ist nicht eine Ursache neben anderen, sondern der Grund, dass es Ursachen überhaupt gibt.`,
        },
      ],
    },
    {
      id: 'bhuridatta-boeses',
      objection: `Wenn ein allmächtiger Herr über Glück und Leid aller Wesen verfügt, dann ist er schuldig an allem Bösen – so sagt schon das Bhuridatta-Jataka.`,
      objectionBy: 'Stephen Batchelor (nach dem Bhuridatta-Jataka)',
      answer: `Das ist ein ernster Einwand, den auch Christen kennen (siehe das Topic „Das Problem des Leids"). Die Bibel sagt: Gott schuf eine gute Welt mit freien Geschöpfen; das Böse ist Missbrauch dieser Freiheit, und Gott tritt in Christus selbst ins Leid ein, um es zu überwinden. Der Buddhismus löst die Frage aber auch nicht: Er erklärt das bedingte Dasein insgesamt zu Leid (*dukkha*) und bietet den Ausstieg – das Christentum verheißt die Heilung der Schöpfung selbst (Röm 8,21).`,
      followUps: [
        {
          id: 'karma-statt-gott',
          objection: `Karma erklärt das Leid – ohne einen Gott, der dafür verantwortlich wäre.`,
          objectionBy: 'Walpola Rahula (sinngemäß)',
          answer: `Karma „erklärt" das Leid, indem es dem Leidenden die Schuld gibt – siehe den Claim zum Hinduismus. Interessant ist: Der Buddha selbst lehnte die Auffassung ab, dass alles, was ein Mensch erlebt, auf früheres Karma zurückgeht. Er nannte daneben körperliche Ursachen, Wetter, Unachtsamkeit und Gewalt anderer (Samyutta-Nikaya 36,21). Auch im Buddhismus bleibt also viel Leid ohne „gerechte" Erklärung.`,
          sources: [
            { kind: 'oestlich', work: 'Samyutta-Nikaya 36,21 (Sivaka-Sutta)', status: 'paraphrase', quote: `Manche Gefühle entstehen durch Galle, Schleim, Wind, deren Zusammenwirken, Jahreszeitenwechsel, unachtsames Verhalten, Angriffe anderer – und manche durch Karma. Wer behauptet, alles Erlebte sei Folge früheren Karmas, geht über das Erkennbare hinaus.` },
          ],
        },
      ],
    },
    {
      id: 'buddha-schwieg-pfeil',
      objection: `Der Buddha schwieg zu den Fragen nach dem ersten Anfang – sie dienen nicht der Befreiung. Wer einen Giftpfeil im Leib hat, fragt nicht, wer ihn abgeschossen hat (MN 63).`,
      objectionBy: 'Stephen Batchelor',
      answer: `Das Gleichnis hat recht, was die Dringlichkeit angeht. Aber wenn der Pfeil vergiftet ist, ist es für die Heilung sehr wichtig zu wissen, welches Gift es ist – und wenn ein Arzt gekommen ist, um zu heilen, ist es wichtig, ihn zu kennen. Zudem schweigen Buddhisten heute nicht: Sie lehnen einen Schöpfer ausdrücklich ab. Das ist keine Enthaltung mehr, sondern eine metaphysische Position, die Gründe braucht.`,
      sources: [
        { kind: 'oestlich', work: 'Majjhima-Nikaya 63 (Cula-Malunkyovada-Sutta)', status: 'paraphrase', quote: `Gleichnis vom Mann, der von einem Giftpfeil getroffen wurde und den Arzt erst behandeln lassen will, wenn er weiß, wer den Pfeil geschossen hat; die unbeantworteten Fragen (Ewigkeit der Welt usw.) führen nicht zur Befreiung.` },
      ],
      followUps: [
        {
          id: 'nur-theisten-gott-unnoetig',
          objection: `Wir lehnen nur den Schöpfer der Theisten ab, weil er unnötig ist – wie Brahma, der sich irrtümlich für den Schöpfer hielt.`,
          objectionBy: 'Dalai Lama (sinngemäß)',
          answer: `Die Brahma-Erzählungen (DN 1; DN 11) treffen einen endlichen Gott, der innerhalb eines Weltzeitalters auftaucht und sich irren kann. Einen solchen Gott lehnen Christen ebenfalls ab! Der biblische Schöpfer ist nicht das höchste Wesen im Kosmos, sondern der unbedingte Grund allen Seins – also gerade das, worauf Udana 8,3 hinweist. Die buddhistische Kritik trifft den Gott der Bibel nicht.`,
          questionsBack: [`Trifft die Kritik an Brahma, der in einem Weltzeitalter entsteht, auch einen Gott, der überhaupt nicht entsteht, sondern Grund allen Entstehens ist?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Erklärt das bedingte Entstehen, warum es überhaupt etwas gibt – oder nur, wie die Dinge zusammenhängen?`,
    `Was ist das „Ungeborene, Unbedingte" in Udana 8,3 – und wie steht es zur Welt?`,
    `Trifft die Kritik an Brahma einen Gott, der nicht innerhalb der Welt entsteht?`,
    `Wenn das bedingte Dasein insgesamt Leid ist – gibt es dann Hoffnung für die Welt selbst oder nur einen Ausgang?`,
  ],
  avoid: [
    `Unterschätze die buddhistische Philosophie nicht – Vasubandhu und Dharmakirti gehören zu den schärfsten Denkern der Menschheit.`,
    `Behaupte nicht, „Buddhisten sind Atheisten wie Dawkins" – sie glauben an Wiedergeburt, Karma, Götter (Devas) und ein Unbedingtes.`,
    `Verwende nicht „Wer hat dann Gott erschaffen?" als Gegenfrage-Spiel; erkläre, warum nur Bedingtes eine Ursache braucht – das gilt auch für das buddhistische Unbedingte.`,
  ],
  concessions: [
    `Die buddhistische Kritik an einem endlichen, irrenden Schöpfergott ist berechtigt – sie trifft manche populäre Gottesvorstellung auch unter Christen.`,
    `Die Frage, wie ein ewiger Gott in der Zeit wirkt, ist philosophisch anspruchsvoll; die klassische Antwort ist kohärent, aber nicht trivial.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Paul Williams', work: 'The Unexpected Way', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Keith Yandell / Harold Netland', work: 'Buddhism: A Christian Exploration and Appraisal', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Experience of God', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Schöpfung', 'Kontingenz', 'bedingtes Entstehen', 'Dharmakirti', 'Vasubandhu', 'Udana 8,3'],
  related: [
    'gottesbeweise/kontingenz-trugschluss',
    'gottesbeweise/kalam-widerlegt',
    'atheismus/wer-schuf-gott',
    'theodizee/logisches-problem-des-uebels',
    'buddhismus/kein-selbst-anatta',
    'kosmologie/universum-ewig-zyklisch',
  ],
};

export default claim;
