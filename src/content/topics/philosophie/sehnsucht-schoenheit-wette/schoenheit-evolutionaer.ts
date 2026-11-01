import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'schoenheit-evolutionaer',
  title: `„Schönheit ist nur ein evolutionäres Signal."`,
  proponents: [
    { name: 'Denis Dutton', role: 'Kunstphilosoph (1944–2010)', work: 'The Art Instinct: Beauty, Pleasure, and Human Evolution (2009)' },
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'How the Mind Works (1997) – Musik als „akustischer Käsekuchen"' },
    { name: 'Geoffrey Miller', role: 'Evolutionspsychologe, University of New Mexico', work: 'The Mating Mind (2000) – Kunst als sexuelles Werbesignal' },
    { name: 'Richard O. Prum', role: 'Ornithologe und Evolutionsbiologe, Yale', work: 'The Evolution of Beauty (2017)' },
    { name: 'Semir Zeki', role: 'Neurobiologe, University College London', work: 'Inner Vision (1999); Begründer der „Neuroästhetik"' },
  ],
  steelman: `Was wir „schön" nennen, ist das Ergebnis von Millionen Jahren Selektion. Symmetrische Gesichter gefallen uns, weil Symmetrie Gesundheit und gute Gene anzeigt; offene, grüne Landschaften mit Wasser und Baumgruppen, weil sie der afrikanischen Savanne gleichen, in der unsere Vorfahren überlebten (Orians, Dutton). Der Pfauenschwanz ist ein kostspieliges Werbesignal; menschliche Kunst und Musik könnten ebenso sexuelle Werbung sein (Geoffrey Miller) – oder ein Nebenprodukt, ein „akustischer Käsekuchen", der Vorlieben kitzelt, die für anderes entstanden sind (Pinker). Die Neuroästhetik zeigt, dass das Erleben von Schönheit mit Aktivität im medialen orbitofrontalen Kortex einhergeht – Schönheit ist ein Hirnzustand. Schon David Hume schrieb: Schönheit ist keine Eigenschaft der Dinge selbst, sie existiert nur im Geist, der sie betrachtet. Das „Argument aus der Schönheit" für Gott verwechselt also unsere evolvierten Vorlieben mit einer Botschaft aus dem Himmel. Und die Natur ist ja nicht nur schön: Darwin konnte nicht glauben, dass ein guter Gott Schlupfwespen geschaffen hat, deren Larven Raupen bei lebendigem Leib fressen.`,
  biblical: {
    summary: `Die Bibel sieht die Schönheit der Welt als Spiegel ihres Schöpfers. In der griechischen Bibel (Septuaginta), die die frühe Kirche las, heißt es nach jedem Schöpfungstag: Gott sah, dass es *kalon* war – gut *und* schön (Gen 1,31: *kala lian*, „sehr gut/schön"). „Die Himmel erzählen die Ehre Gottes" (Ps 19,2); Jesus verweist auf die Lilien, schöner gekleidet als Salomo in all seiner Pracht (Mt 6,28–29); das Buch der Weisheit sagt, dass man an der Größe und Schönheit der Geschöpfe ihren Urheber erkennt (Weish 13,5). Der Psalmist will „die schönen Gottesdienste des HERRN schauen" (Ps 27,4), und vom Messias heißt es: „Du bist der Schönste unter den Menschenkindern" (Ps 45,3).`,
    detail: `- **Gen 1 (LXX):** Das hebräische *tov* („gut") wird mit *kalos* übersetzt, das im Griechischen auch „schön" bedeutet. Die Väter lasen die Schöpfungsgeschichte darum auch als Geschichte der Schönheit.
- **Weish 13,1–5** (deuterokanonisch, in der koptischen Bibel kanonisch): Die Menschen hätten an der Schönheit der Geschöpfe den Schöpfer erkennen sollen – die Schönheit verweist über sich hinaus.
- **Röm 1,20:** Gottes unsichtbares Wesen wird an den Werken der Schöpfung „ersehen".
- **Röm 8,19–22:** Die Schöpfung „sehnt sich und ängstet sich" – die Bibel kennt auch die Gebrochenheit der Natur; sie behauptet nicht, alles sei schön.
- **Ps 45,3; Jes 53,2:** Der Messias ist der Schönste – und zugleich der, der „keine Gestalt noch Schöne" hatte am Kreuz. Christliche Schönheit schließt das Kreuz ein.`,
    sources: [
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '1,31', quote: `Und Gott sah an alles, was er gemacht hatte; und siehe da, es war sehr gut.`, original: 'καὶ εἶδεν ὁ θεὸς τὰ πάντα ὅσα ἐποίησεν καὶ ἰδοὺ καλὰ λίαν (LXX)', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '19,2', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '6,28–29', quote: `Schauet die Lilien auf dem Felde, wie sie wachsen: sie arbeiten nicht, auch spinnen sie nicht. Ich sage euch, daß auch Salomo in aller seiner Herrlichkeit nicht bekleidet gewesen ist als derselben eins.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Weisheit Salomos', ref: '13,5', quote: `Denn aus der Größe und Schönheit der Geschöpfe wird ihr Schöpfer durch Vergleich erkannt.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Psalmen', ref: '27,4', quote: `Eins bitte ich vom HERRN, das hätte ich gern: daß ich im Hause des HERRN bleiben möge mein Leben lang, zu schauen die schönen Gottesdienste des HERRN und seinen Tempel zu besuchen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '45,3', quote: `Du bist der Schönste unter den Menschenkindern, holdselig sind deine Lippen; darum segnet dich Gott ewiglich.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter sahen in der Schönheit einen Namen Gottes. Dionysius Areopagita deutet das griechische Wort für das Schöne (*kalon*) von „rufen" (*kalein*) her: Die Schönheit ruft alle Dinge zu sich. Augustinus nennt Gott die „Schönheit, so alt und so neu". Basilius der Große lädt in seinen Predigten über das Sechstagewerk ein, in der Schönheit der Schöpfung den Künstler zu erkennen. Die koptische Kirche betet in Schönheit – im uralten Gesang der Liturgie und der nächtlichen Tasbeha, in Ikonen und Kirchenräumen. Schönheit ist hier kein Zierrat, sondern ein Weg der Gotteserkenntnis.`,
    detail: `Thomas von Aquin nennt drei Merkmale des Schönen: Ganzheit (*integritas*), rechtes Maß (*proportio*) und Glanz (*claritas*) – und wendet sie auf den Sohn als das Bild des Vaters an (S.th. I q.39 a.8). In der christlichen Tradition gehört das Schöne mit dem Wahren und dem Guten zusammen: Wer Schönheit nur als Hirnzustand deutet, muss konsequenterweise auch das Gute und das Wahre neu deuten.`,
    sources: [
      { kind: 'kirchenvater', author: 'Dionysius Areopagita (Pseudo-Dionysius)', work: 'Über die göttlichen Namen', ref: 'IV,7', year: 'um 500', status: 'paraphrase', quote: 'Das Schöne (kalon) heißt so, weil es alles zu sich ruft (kalein); es ist Ursprung und Ziel aller Dinge.' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Predigten über das Sechstagewerk (Hexaemeron)', status: 'paraphrase', quote: 'Die Welt ist wie eine Schule und ein Kunstwerk, an dem man den weisen Künstler erkennt.' },
      { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I q.39 a.8', status: 'paraphrase', quote: 'Zur Schönheit gehören Ganzheit, rechtes Maß und Glanz.' },
    ],
  },
  quickAnswer: `Die Evolution erklärt manches an unserem Schönheitsempfinden – etwa, warum uns gesunde Gesichter oder grüne Landschaften gefallen. Aber sie erklärt schlecht, warum wir die Schönheit von Galaxien, mathematischen Beweisen, einer Bach-Fuge oder einer selbstlosen Tat erleben – Dinge, die für das Überleben in der Savanne keine Rolle spielten. Noch erstaunlicher: Physiker wie Paul Dirac haben sich von mathematischer Schönheit leiten lassen und damit tiefe Wahrheiten über das Universum entdeckt. Warum sollte ein Sinn, der für Partnerwahl und Lebensraum entstand, verlässlich zu den Gesetzen der Quantenwelt führen? Das passt gut zu einer Welt, die von einem vernünftigen, schöpferischen Geist stammt.`,
  keyPoints: [
    `**Zugeständnis:** Manche Vorlieben (Symmetrie, Landschaften) haben plausible evolutionäre Wurzeln.`,
    `**Überschuss an Schönheit:** Mathematik, Kosmos, Musik, Tragödie und moralische Schönheit gehen weit über Überlebensvorteile hinaus.`,
    `**Schönheit als Wegweiser zur Wahrheit:** Dirac, Einstein und viele Physiker fanden tiefe Naturgesetze, indem sie der mathematischen Schönheit folgten. Das ist unter Naturalismus ein auffälliger Zufall.`,
    `**Korrelation ist nicht Reduktion:** Dass beim Erleben von Schönheit bestimmte Hirnareale aktiv sind, zeigt so wenig, dass Schönheit nur im Gehirn ist, wie Aktivität im Sehzentrum zeigt, dass Bäume nur im Gehirn sind.`,
    `**Herkunft ist nicht Geltung:** Wie wir zur Wahrnehmung von Schönheit kamen, entscheidet nicht, ob sie etwas Wirkliches erfasst.`,
    `**Ehrlich zur Hässlichkeit:** Die Bibel nennt die Schöpfung gebrochen (Röm 8,22); das Argument aus der Schönheit ist ein Indiz, kein Beweis.`,
  ],
  voices: [
    {
      person: 'polkinghorne',
      role: 'als Teilchenphysiker und Theologe',
      text: `Polkinghorne, Professor für mathematische Physik in Cambridge, bevor er anglikanischer Priester wurde, betonte immer wieder ein Staunen, das jeder theoretische Physiker kennt: Die tiefsten Gesetze der Natur lassen sich in mathematisch schönen Gleichungen ausdrücken, und die Suche nach Schönheit hat sich in der Physik als erstaunlich erfolgreicher Wegweiser erwiesen. Warum sollte unser Geist, der sich im Alltag bewährt hat, in der abstrakten Mathematik einen Schlüssel zur Struktur des Universums finden? Für Polkinghorne ist die beste Erklärung, dass die Vernunft, die wir in uns erleben, und die Vernunft, die wir in der Welt entdecken, denselben Ursprung haben: den Geist des Schöpfers.`,
      sources: [
        { kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Belief in God in an Age of Science', year: '1998', status: 'paraphrase', quote: 'Die mathematische Schönheit und Verständlichkeit des Universums verweist auf einen vernünftigen Schöpfer.' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Liebender der Schönheit',
      text: `Augustinus beschreibt in den Bekenntnissen, wie er sich in die schönen Dinge verlor und dabei die Schönheit selbst übersah, die sie geschaffen hatte. Sein berühmter Ausruf „Spät habe ich dich geliebt, du Schönheit, so alt und so neu" zeigt: Die Schönheit der Welt ist kein Konkurrent Gottes, sondern sein Ruf. Wer sie für sich allein festhalten will, wird enttäuscht; wer ihr folgt, wird zu ihrem Ursprung geführt. Schon früher hatte Augustinus gefragt: Frag die Schönheit der Erde, des Meeres, des Himmels – alle antworten: „Sieh, wir sind schön." Wer hat sie gemacht, wenn nicht der unwandelbar Schöne?`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Bekenntnisse (Confessiones)', ref: 'X,27,38', year: 'um 400', quote: `Spät habe ich dich geliebt, du Schönheit, so alt und so neu, spät habe ich dich geliebt!`, original: 'Sero te amavi, pulchritudo tam antiqua et tam nova, sero te amavi!', translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Predigt 241', ref: '2', status: 'paraphrase', quote: 'Frag die Schönheit der Erde, des Meeres, der Luft, des Himmels … alle antworten: Sieh, wir sind schön. Wer hat sie gemacht, wenn nicht der unwandelbar Schöne?' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph',
      text: `Swinburne nimmt die Schönheit der Welt in sein kumulatives Argument für Gott auf. Ein guter Schöpfer hat Grund, eine schöne Welt zu erschaffen, denn Schönheit ist ein Gut; ohne Gott gibt es dagegen keinen besonderen Grund zu erwarten, dass das Universum geordnet und schön ist. Also macht die Schönheit der Welt die Existenz Gottes wahrscheinlicher, als sie es ohne diesen Befund wäre. Swinburne beschränkt das Argument ausdrücklich: Es gilt am stärksten für die unbelebte Natur und die Grundgesetze; wie Menschen die Welt gestalten, liegt in ihrer eigenen Verantwortung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', status: 'paraphrase', quote: 'Gott hat Grund, eine im Grundsatz schöne Welt zu erschaffen; die Schönheit der Welt ist unter dem Theismus wahrscheinlicher als ohne ihn.' },
      ],
    },
    {
      person: 'hart',
      role: 'als Theologe der Schönheit',
      text: `Hart entwickelt in „The Beauty of the Infinite" (2003) eine Theologie, in der Schönheit nicht ein nachträgliches Gefühl ist, sondern ein Grundzug der Wirklichkeit: Die Schöpfung ist eine freie, überfließende Gabe – „grundlos" im Sinne von unverdient und unnötig, und gerade darin schön. Wer Schönheit nur funktional erklärt, übersieht das Wesentliche: ihre Überflüssigkeit im besten Sinn, ihren Charakter als Geschenk. Die Schönheit der Welt entspricht der Freude Gottes an seiner Schöpfung und lädt zur Freude und zum Dank ein.`,
      sources: [
        { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Beauty of the Infinite: The Aesthetics of Christian Truth', year: '2003', status: 'paraphrase', quote: 'Schönheit als Ausdruck der freien, überfließenden Gabe der Schöpfung.', note: 'Hart vertritt in anderen Werken eine Allversöhnungslehre, die die koptische Kirche nicht teilt.' },
      ],
    },
    {
      person: 'thomas-aquin',
      role: 'als Metaphysiker des Schönen',
      text: `Thomas bestimmt das Schöne als das, was beim Anschauen gefällt (*quod visum placet*). Das Gefallen ist dabei kein bloßes Wohlbehagen des Körpers, sondern die Freude des erkennenden Geistes an Ganzheit, rechtem Maß und Glanz. Schönheit ist für Thomas eng mit Wahrheit und Güte verbunden: Sie ist das Gute, insofern es erkannt wird. Damit erklärt er, warum Schönheit uns über den Nutzen hinaus anspricht – sie richtet sich an den Geist, der nach Wahrheit hungert.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I q.5 a.4 ad 1', status: 'paraphrase', quote: 'Schön nennt man, was beim Anschauen gefällt; das Schöne bezieht sich auf das Erkenntnisvermögen.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'symmetrie-gesundheit',
      objection: `„Wir finden symmetrische Gesichter schön, weil sie Gesundheit signalisieren, und grüne Landschaften mit Wasser, weil sie der Savanne gleichen, in der unsere Vorfahren überlebten. Schönheit ist Fitnesssignal – mehr nicht."`,
      objectionBy: 'Denis Dutton (The Art Instinct, 2009)',
      answer: `Für manche Vorlieben ist das plausibel, und das gebe ich gern zu. Aber es erklärt schlecht, warum wir die Schönheit eines Spiralnebels, einer mathematischen Formel, einer Bach-Fuge oder einer selbstlosen Tat erleben – nichts davon half in der Savanne beim Überleben. Kant bemerkte, dass das Schöne „ohne Interesse" gefällt: Wir wollen es nicht essen oder besitzen, sondern anschauen. Und wie wir zu diesem Sinn kamen, entscheidet noch nicht, ob er etwas Wirkliches erfasst.`,
      sources: [
        { kind: 'gegner', author: 'Denis Dutton', work: 'The Art Instinct: Beauty, Pleasure, and Human Evolution', year: '2009', status: 'paraphrase', quote: 'Kunst und Schönheitssinn als Ergebnis natürlicher und sexueller Selektion; Landschaftsvorlieben spiegeln pleistozäne Lebensräume.' },
        { kind: 'fachliteratur', author: 'Immanuel Kant', work: 'Kritik der Urteilskraft', ref: '§ 2–5', year: '1790', status: 'paraphrase', quote: 'Das Wohlgefallen am Schönen ist „ohne alles Interesse".' },
      ],
      followUps: [
        {
          id: 'nebenprodukt-kaesekuchen',
          objection: `„Das sind eben Nebenprodukte. Musik ist ‚akustischer Käsekuchen' – sie kitzelt Fähigkeiten, die für Sprache und Gehör entstanden sind. Die Freude an Mathematik ist ein ähnlicher Zufallseffekt."`,
          objectionBy: 'Steven Pinker (How the Mind Works, 1997)',
          answer: `Dann ist es ein sehr merkwürdiger Zufall: Ein Nebenprodukt von Vorlieben aus der Savanne erweist sich als verlässlicher Wegweiser zu den tiefsten Gesetzen des Universums. Der Physiker Paul Dirac schrieb, es sei wichtiger, dass Gleichungen schön sind, als dass sie zum Experiment passen – und er fand so die Gleichung, die die Antimaterie vorhersagte. Eugene Wigner sprach von der „unvernünftigen Effektivität der Mathematik". Unter dem Theismus ist das zu erwarten; unter dem Naturalismus ist es ein Rätsel.`,
          sources: [
            { kind: 'gegner', author: 'Steven Pinker', work: 'How the Mind Works', year: '1997', ref: 'Kap. 8', status: 'paraphrase', quote: 'Musik als „auditory cheesecake" – ein Genuss, der evolvierte Fähigkeiten reizt, ohne selbst Anpassung zu sein.' },
            { kind: 'wissenschaft', author: 'Paul A. M. Dirac', work: '„The Evolution of the Physicist\'s Picture of Nature", Scientific American 208 (5)', year: '1963', quote: `Es ist wichtiger, Schönheit in den eigenen Gleichungen zu haben, als dass sie zum Experiment passen.`, original: 'it is more important to have beauty in one\'s equations than to have them fit experiment', translation: 'eigene Übersetzung', status: 'verbatim' },
            { kind: 'wissenschaft', author: 'Eugene P. Wigner', work: '„The Unreasonable Effectiveness of Mathematics in the Natural Sciences", Communications on Pure and Applied Mathematics 13', year: '1960', status: 'paraphrase', quote: 'Die Anwendbarkeit der Mathematik in der Physik ist ein Geschenk, das wir weder verstehen noch verdienen.' },
          ],
          followUps: [
            {
              id: 'schoenheit-fuehrt-irre',
              objection: `„Die Physikerin Sabine Hossenfelder hat gezeigt, dass die Suche nach Schönheit die Physik auch in die Irre führt – etwa bei der Supersymmetrie, die nie gefunden wurde. Schönheit ist kein verlässlicher Wegweiser."`,
              objectionBy: 'Sabine Hossenfelder (Lost in Math, 2018)',
              answer: `Ein fairer Punkt: Schönheit ist kein unfehlbares Kriterium, und manche schönen Theorien sind falsch. Aber Hossenfelders Kritik setzt gerade voraus, wie stark Schönheit die Physik leitet – und die großen Erfolge (Maxwells Gleichungen, die allgemeine Relativitätstheorie, die Dirac-Gleichung) sind unbestritten. Die eigentliche Frage bleibt: Warum gehorcht die Natur überhaupt so oft einfachen, eleganten mathematischen Gesetzen? Darauf hat der Naturalismus keine Antwort.`,
              followUps: [
                {
                  id: 'auswahleffekt',
                  objection: `„Das ist ein Auswahleffekt: Wir erinnern uns an die schönen Theorien, die funktioniert haben, und vergessen die vielen, die gescheitert sind."`,
                  objectionBy: 'Sabine Hossenfelder / Sean Carroll (sinngemäß)',
                  answer: `Für einzelne Theorien mag das teilweise stimmen. Aber die Grundtatsache, dass die Natur überhaupt einfachen, universellen, mathematisch formulierbaren Gesetzen folgt, ist kein Auswahleffekt – sie ist die Voraussetzung jeder Physik. Steven Weinberg, ein überzeugter Atheist, widmete in „Dreams of a Final Theory" ein ganzes Kapitel den „schönen Theorien" und gab zu, dass die Rolle der Schönheit in der Physik schwer zu erklären ist.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Steven Weinberg', work: 'Dreams of a Final Theory', year: '1992', ref: 'Kap. 6 „Beautiful Theories"', status: 'paraphrase', quote: 'Physiker lassen sich von ästhetischen Urteilen leiten, und das hat sich als erstaunlich erfolgreich erwiesen.', note: 'Weinberg war Atheist und Nobelpreisträger.' },
                  ],
                  questionsBack: [`Warum ist die Natur überhaupt so beschaffen, dass sie sich in eleganten Gleichungen beschreiben lässt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'neuroaesthetik',
      objection: `„Die Neuroästhetik zeigt: Wenn wir etwas schön finden, ist der mediale orbitofrontale Kortex aktiv – sogar bei Mathematikern, die schöne Formeln betrachten. Schönheit ist ein Hirnzustand."`,
      objectionBy: 'Semir Zeki (Neuroästhetik)',
      answer: `Dass beim Erleben von Schönheit bestimmte Hirnareale aktiv sind, ist zu erwarten – auch beim Sehen eines Baumes ist das Sehzentrum aktiv, und niemand folgert, der Baum existiere nur im Gehirn. Zekis eigene Studie zur mathematischen Schönheit zeigt sogar etwas Interessantes: Dasselbe Erleben wird durch etwas völlig Abstraktes ausgelöst, das mit Überleben nichts zu tun hat. Korrelation ist nicht Reduktion.`,
      sources: [
        { kind: 'wissenschaft', author: 'Semir Zeki, John Paul Romaya, Dionigi M. T. Benincasa & Michael F. Atiyah', work: '„The experience of mathematical beauty and its neural correlates", Frontiers in Human Neuroscience 8', year: '2014', status: 'paraphrase', quote: 'Das Erleben mathematischer Schönheit korreliert mit Aktivität im medialen orbitofrontalen Kortex, ähnlich wie visuelle oder musikalische Schönheit.' },
      ],
      followUps: [
        {
          id: 'hume-im-auge',
          objection: `„Schon Hume wusste: ‚Schönheit ist keine Eigenschaft der Dinge selbst; sie existiert nur im Geist, der sie betrachtet.' Es gibt keinen objektiven Maßstab."`,
          objectionBy: 'David Hume („Of the Standard of Taste", 1757)',
          answer: `Interessanterweise blieb Hume dabei nicht stehen: Im selben Essay sucht er nach einem „Maßstab des Geschmacks" und findet ihn im Urteil erfahrener, unvoreingenommener Kenner. Wir alle urteilen so: Wir halten Bach nicht für gleichwertig mit zufälligem Lärm und sagen, jemand habe einen „geschulten" Geschmack. Das setzt voraus, dass es etwas gibt, an dem sich Geschmack bilden kann.`,
          sources: [
            { kind: 'gegner', author: 'David Hume', work: '„Of the Standard of Taste"', year: '1757', quote: `Schönheit ist keine Eigenschaft der Dinge selbst: Sie existiert nur im Geist, der sie betrachtet.`, original: 'Beauty is no quality in things themselves: It exists merely in the mind which contemplates them', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Hume sucht im selben Essay dennoch einen allgemeinen Maßstab des Geschmacks.' },
          ],
          followUps: [
            {
              id: 'kulturen-verschieden',
              objection: `„Schönheitsideale unterscheiden sich doch enorm zwischen Kulturen und Epochen. Was im Barock schön war, gilt heute als kitschig."`,
              objectionBy: 'Kulturrelativismus (sinngemäß)',
              answer: `Es gibt Unterschiede – aber auch erstaunliche Übereinstimmungen: Sternenhimmel, Meer, Blumen, Musik, die Schönheit einer liebevollen Mutter oder einer mutigen, selbstlosen Tat werden überall bewundert. Und Unterschiede im Urteil beweisen nicht, dass es nichts zu beurteilen gibt: Auch in der Mathematik oder Moral urteilen Kulturen unterschiedlich, ohne dass es keine Wahrheit gäbe. Geschmack kann reifen – das setzt einen Maßstab voraus.`,
            },
          ],
        },
      ],
    },
    {
      id: 'prum-schoenheit-zufaellig',
      objection: `„Richard Prum hat gezeigt, dass Schönheit in der Natur oft gar kein ehrliches Fitnesssignal ist, sondern willkürlich: Weibchen bevorzugen bestimmte Merkmale einfach, weil sie sie schön finden – ‚beauty happens'. Schönheit ist Zufall."`,
      objectionBy: 'Richard O. Prum (The Evolution of Beauty, 2017)',
      answer: `Prum widerlegt damit eher die Behauptung „Schönheit ist *nur* ein Fitnesssignal": Er zeigt, dass Tiere Schönheit offenbar um ihrer selbst willen wählen – eine „ästhetische Freiheit" in der Natur. Das passt erstaunlich gut zur christlichen Sicht einer Schöpfung, die nicht nur zweckmäßig, sondern auch schön und verschwenderisch ist. Dass es eine Welt gibt, in der Schönheit entsteht und von Lebewesen wahrgenommen und gewählt wird, erklärt der Mechanismus nicht.`,
      sources: [
        { kind: 'gegner', author: 'Richard O. Prum', work: 'The Evolution of Beauty: How Darwin\'s Forgotten Theory of Mate Choice Shapes the Animal World – and Us', year: '2017', status: 'paraphrase', quote: 'Viele Schönheitsmerkmale entstehen durch ästhetische Koevolution und willkürliche Partnerwahl, nicht als ehrliche Qualitätssignale.' },
      ],
      followUps: [
        {
          id: 'darwin-pfau',
          objection: `„Darwin schrieb, der Anblick einer Pfauenfeder mache ihn krank – weil Schönheit ohne Nutzen seine Theorie bedrohte. Mit der sexuellen Selektion hat er das Problem gelöst. Für Gott bleibt nichts übrig."`,
          objectionBy: 'Charles Darwin (Brief an Asa Gray, 3. April 1860) / Richard Dawkins',
          answer: `Die sexuelle Selektion erklärt einen Mechanismus: wie sich Merkmale ausbreiten, die Partner bevorzugen. Sie erklärt nicht, warum es überhaupt Wesen gibt, die Schönheit wahrnehmen und lieben, und warum die Welt – vom Atomkern bis zu den Galaxien – schön und verständlich ist. Mechanismus und Sinn schließen sich nicht aus: Die Physik des Klaviers erklärt, wie ein Ton entsteht, nicht, warum Bach komponierte.`,
          sources: [
            { kind: 'gegner', author: 'Charles Darwin', work: 'Brief an Asa Gray', year: '3. April 1860', quote: `Der Anblick einer Feder im Schwanz eines Pfaus macht mich krank, wann immer ich sie ansehe!`, original: 'The sight of a feather in a peacock\'s tail, whenever I gaze at it, makes me sick!', translation: 'eigene Übersetzung', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'grausame-natur',
      objection: `„Die Natur ist nicht nur schön, sondern grausam. Darwin konnte nicht glauben, dass ein gütiger Gott Schlupfwespen erschaffen hat, deren Larven lebende Raupen von innen auffressen. Wer die Schönheit als Gottesbeweis nimmt, muss die Hässlichkeit als Gegenbeweis nehmen."`,
      objectionBy: 'Charles Darwin (Brief an Asa Gray, 22. Mai 1860)',
      answer: `Ein ernster Einwand, und die Bibel verschweigt ihn nicht: Die Schöpfung „sehnt sich und ängstet sich" (Röm 8,22), sie ist gebrochen. Das Argument aus der Schönheit behauptet nicht, alles sei schön, sondern dass es eine überwältigende Schönheit gibt, die erklärt werden muss. Das Leid der Natur ist eine eigene, schwere Frage, die die Theodizee behandelt. Bemerkenswert ist: Selbst in einer leidvollen Welt bleibt die Schönheit – warum, wenn alles nur blinder Zufall ist?`,
      sources: [
        { kind: 'gegner', author: 'Charles Darwin', work: 'Brief an Asa Gray', year: '22. Mai 1860', status: 'paraphrase', quote: 'Er könne sich nicht einreden, dass ein gütiger und allmächtiger Gott die Schlupfwespen absichtlich erschaffen habe, damit sie sich im lebenden Körper von Raupen ernähren.' },
      ],
      detail: `Siehe „Jahrmillionen Tierleid vor dem Menschen widerlegen einen guten Schöpfer".`,
      followUps: [
        {
          id: 'dawkins-gleichgueltigkeit',
          objection: `„Dawkins hat es auf den Punkt gebracht: Das Universum hat genau die Eigenschaften, die man erwarten würde, wenn dahinter kein Plan, kein Zweck, kein Gut und kein Böse steht – nur blinde, erbarmungslose Gleichgültigkeit."`,
          objectionBy: 'Richard Dawkins (River Out of Eden, 1995)',
          answer: `Würde man in einem blind gleichgültigen Universum erwarten, dass es fein abgestimmte, elegante Naturgesetze hat, dass es Wesen hervorbringt, die Schönheit, Wahrheit und Güte erkennen, und dass diese Wesen über das Böse empört sind? Gerade Dawkins' Wort „erbarmungslos" setzt einen Maßstab des Erbarmens voraus. Die Schönheit ist nicht der einzige, aber ein wichtiger Befund, den die „blinde Gleichgültigkeit" schlecht erklärt.`,
          sources: [
            { kind: 'gegner', author: 'Richard Dawkins', work: 'River Out of Eden', year: '1995', ref: 'Kap. 4', quote: `Das Universum, das wir beobachten, hat genau die Eigenschaften, die wir erwarten würden, wenn es im Grunde keinen Plan, keinen Zweck, kein Böses und kein Gutes gibt, nichts als blinde, erbarmungslose Gleichgültigkeit.`, original: 'The universe we observe has precisely the properties we should expect if there is, at bottom, no design, no purpose, no evil and no good, nothing but blind, pitiless indifference.', translation: 'eigene Übersetzung', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'irgendein-muster-schoen',
              objection: `„In jedem hinreichend komplexen Universum würden irgendwelche Beobachter irgendwelche Muster schön finden. Das ist unvermeidlich und beweist nichts."`,
              objectionBy: 'Sean Carroll (sinngemäß)',
              answer: `Es geht nicht darum, dass *irgendetwas* irgendwem gefällt, sondern um das Ausmaß: Schönheit auf allen Ebenen – von Symmetrien der Elementarteilchen über Kristalle und Lebewesen bis zu Galaxien – und Wesen, deren Geist auf diese Schönheit so abgestimmt ist, dass sie ihnen den Weg zur Wahrheit weist. Das beweist Gott nicht, aber es ist unter dem Theismus deutlich wahrscheinlicher als ohne ihn – genau das ist Swinburnes Punkt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'dostojewski-kitsch',
      objection: `„‚Schönheit wird die Welt retten' – das ist sentimentaler Kitsch. Schönheit rettet gar nichts. Die Nazis liebten Wagner und Beethoven."`,
      objectionBy: 'kulturkritischer Einwand',
      answer: `Zuerst: Der Satz stammt aus Dostojewskis Roman „Der Idiot" (Teil III, Kap. 5), wo die Figur Ippolit ihn spöttisch dem Fürsten Myschkin zuschreibt – er ist keine programmatische Aussage Dostojewskis. Dostojewski kannte die Zweideutigkeit der Schönheit genau: In den „Brüdern Karamasow" sagt Dmitri, in der Schönheit kämpften Gott und der Teufel, und das Schlachtfeld sei das Herz des Menschen. Recht hast du also: Schönheit allein rettet nicht. Christen glauben, dass *der* Schöne rettet – Christus, „der Schönste unter den Menschenkindern" (Ps 45,3), der am Kreuz „keine Gestalt noch Schöne" hatte (Jes 53,2).`,
      voices: [
        {
          person: 'dostojewski',
          role: 'als Romancier der Schönheit und ihrer Abgründe',
          text: `Dostojewski lässt in seinen Romanen die Schönheit nie unschuldig erscheinen. Dmitri Karamasow nennt sie „furchtbar und schrecklich", weil in ihr die Gegensätze zusammentreffen – das Ideal der Madonna und das Ideal Sodoms. Und doch bleibt Christus für Dostojewski das Bild vollkommener Schönheit; der Fürst Myschkin im „Idiot" ist sein Versuch, einen „vollkommen schönen Menschen" darzustellen. Schönheit kann verführen oder erlösen – je nachdem, ob sie zu Christus führt oder an seine Stelle tritt.`,
          sources: [
            { kind: 'fachliteratur', author: 'Fjodor M. Dostojewski', work: 'Der Idiot', ref: 'Teil III, Kap. 5', year: '1868/69', status: 'paraphrase', quote: 'Ippolit fragt spöttisch, ob es wahr sei, dass der Fürst gesagt habe, die Schönheit werde die Welt retten.', note: 'Der Satz wird Myschkin von anderen Figuren zugeschrieben; er sagt ihn im Roman nicht selbst.' },
            { kind: 'fachliteratur', author: 'Fjodor M. Dostojewski', work: 'Die Brüder Karamasow', ref: 'Buch III, Kap. 3', year: '1880', status: 'paraphrase', quote: 'Dmitri: Die Schönheit ist eine furchtbare und schreckliche Sache; hier kämpfen Gott und der Teufel, und das Schlachtfeld ist das Herz des Menschen.' },
          ],
        },
      ],
      followUps: [
        {
          id: 'schoenheit-ohne-gott-geniessen',
          objection: `„Ich kann Schönheit doch auch ohne Gott genießen. Atheisten lieben Bach genauso wie Christen."`,
          objectionBy: 'säkularer Humanismus (sinngemäß)',
          answer: `Selbstverständlich – und das ist nach christlichem Glauben ein Geschenk Gottes an alle Menschen. Die Frage ist nicht, ob man Schönheit genießen kann, sondern was sie ist und woher sie kommt. Bach selbst schrieb unter seine Partituren „S. D. G." – *Soli Deo Gloria*, „Gott allein die Ehre". Er verstand seine Musik als Antwort auf die Schönheit, die er empfangen hatte. Augustinus würde sagen: Die Schönheit ruft – die Frage ist nur, wohin sie ruft.`,
          questionsBack: [`Wenn dich eine Musik zu Tränen rührt – ist das nur ein Hirnzustand, oder erfasst du etwas, das wirklich da ist?`],
        },
      ],
    },
    {
      id: 'objektiv-aber-ohne-gott',
      objection: `„Selbst wenn Schönheit objektiv wäre – warum sollte das auf Gott verweisen? Vielleicht sind ästhetische Werte einfach notwendige, letzte Tatsachen, wie mathematische Wahrheiten."`,
      objectionBy: 'Erik Wielenberg (sinngemäß, nach seiner Position zu objektiven Werten)',
      answer: `Dann gibst du zu, dass es objektive, nicht-physische Werte gibt – das passt schlecht zu einem Naturalismus, nach dem nur Materie und Energie existieren. Und es bleibt die Frage, warum die materielle Welt so beschaffen ist, dass sie diese Werte in so reichem Maß verkörpert, und warum es Geister gibt, die sie erkennen. Der Theismus erklärt beides aus einer Quelle: Gott ist selbst die Schönheit, und die Welt ist sein Werk.`,
      followUps: [
        {
          id: 'gott-erklaert-schoenheit-nicht',
          objection: `„‚Gott hat die Welt schön gemacht' erklärt nichts. Dann frage ich: Warum ist Gott schön? Du verschiebst das Problem nur."`,
          objectionBy: 'Richard Dawkins (sinngemäß)',
          answer: `Jede Erklärung endet irgendwo. Die Frage ist, ob sie bei etwas endet, das selbst einer Erklärung bedarf, oder bei etwas, das notwendig und aus sich selbst ist. Die Väter sagen: Gott *hat* nicht Schönheit, er *ist* die Schönheit – Dionysius nennt ihn den Ursprung, von dem alles Schöne ausgeht und zu dem es ruft. Eine Erklärung, die bei der Quelle aller Schönheit endet, ist kein Verschieben, sondern ein Ankommen.`,
          detail: `Siehe „Wer hat dann Gott erschaffen?".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welchen Überlebensvorteil hatte es in der Savanne, die Schönheit einer mathematischen Formel zu erkennen?`,
    `Warum führt mathematische Schönheit Physiker so oft zu wahren Naturgesetzen?`,
    `Ist die Schönheit einer selbstlosen Tat auch nur ein Fitnesssignal?`,
    `Wenn eine Musik dich zutiefst bewegt – erlebst du dann nur einen Hirnzustand, oder erkennst du etwas?`,
  ],
  avoid: [
    `Evolutionäre Erklärungen pauschal leugnen. Manche Vorlieben haben plausible biologische Wurzeln – das gehört zugestanden.`,
    `„Schönheit wird die Welt retten" als wörtliches Dostojewski-Zitat ausgeben – es ist eine Romanfigur, die den Satz einer anderen zuschreibt.`,
    `Die Schönheit als zwingenden Gottesbeweis ausgeben. Sie ist ein Indiz in einem kumulativen Argument.`,
    `Die Hässlichkeit und Grausamkeit der Natur verschweigen.`,
  ],
  concessions: [
    `Evolutionäre Psychologie erklärt plausibel einige ästhetische Vorlieben, etwa für gesunde Gesichter oder bestimmte Landschaften.`,
    `Schönheit ist kein unfehlbarer Wegweiser zur Wahrheit; auch schöne Theorien können falsch sein.`,
    `Die Natur enthält viel Grausames; das Argument aus der Schönheit muss zusammen mit dem Problem des Leids bedacht werden.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Beauty of the Infinite', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Belief in God in an Age of Science', year: '1998', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Roger Scruton', work: 'Beauty', year: '2009', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Steven Weinberg', work: 'Dreams of a Final Theory', year: '1992', ref: 'Kap. 6', status: 'paraphrase' },
    { kind: 'gegner', author: 'Denis Dutton', work: 'The Art Instinct', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Schönheit', 'Ästhetik', 'Evolution', 'Mathematik', 'Dirac', 'Dostojewski'],
  related: [
    'mathematik/effektivitaet-der-mathematik-zufall',
    'feinabstimmung/feinabstimmung-illusion',
    'evolutionaere-psychologie/altruismus-evolutionaer',
    'theodizee/tierleid',
    'sehnsucht-schoenheit-wette/sehnsucht-beweist-nichts',
    'atheismus/wer-schuf-gott',
  ],
};

export default claim;
