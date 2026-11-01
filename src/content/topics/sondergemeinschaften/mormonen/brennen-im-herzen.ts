import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'brennen-im-herzen',
  title: `„Ich habe ein Zeugnis im Herzen (Moroni 10,4)."`,
  proponents: [
    { name: 'Buch Mormon', role: 'HLT-Schrift', work: 'Moroni 10,4–5 – die „Verheißung Moronis"' },
    { name: 'Kirche Jesu Christi der HLT', role: 'Missionarslehre', work: '„Verkündet mein Evangelium" – Einladung, über das Buch Mormon zu beten; LuB 9,8 („Brennen im Busen")' },
    { name: 'Terryl L. Givens', role: 'HLT-Literaturwissenschaftler und Theologe', work: 'By the Hand of Mormon (2002); The Crucible of Doubt (2014, mit Fiona Givens)' },
  ],
  steelman: `Das Buch Mormon schließt mit einer Einladung: „Wenn ihr dies empfangt, möchte ich euch ermahnen, Gott, den ewigen Vater, im Namen Christi zu fragen, ob es nicht wahr ist; und wenn ihr mit aufrichtigem Herzen, mit wirklichem Vorsatz fragt und Glauben an Christus habt, wird er euch durch die Macht des Heiligen Geistes kundtun, dass es wahr ist" (Moroni 10,4). Das ist biblisch: „Wenn jemandem unter euch Weisheit mangelt, der bitte Gott" (Jak 1,5) – genau dieser Vers bewegte den jungen Joseph Smith zum Gebet. Die Emmausjünger sagten: „Brannte nicht unser Herz in uns?" (Lk 24,32). „Der Geist gibt Zeugnis unserem Geist, dass wir Gottes Kinder sind" (Röm 8,16). Göttliche Wahrheit lässt sich nicht im Labor beweisen; „der natürliche Mensch vernimmt nichts vom Geist Gottes" (1 Kor 2,14). Auch orthodoxe Christen glauben letztlich, weil Gott es ihnen innerlich bezeugt. Wer aufrichtig betet, bekommt eine Antwort – Millionen Menschen haben dieses Zeugnis empfangen.`,
  biblical: {
    summary: `Die Bibel lehrt, Geister und Botschaften zu **prüfen** – an der bereits gegebenen Offenbarung, nicht am Gefühl: „Glaubet nicht einem jeglichen Geist, sondern prüfet die Geister" (1 Joh 4,1); „Wenn auch wir oder ein Engel vom Himmel euch ein anderes Evangelium predigte …, der sei verflucht" (Gal 1,8). Die Beröer prüften die Predigt des Paulus „täglich in der Schrift" (Apg 17,11). Gleichzeitig warnt die Schrift vor dem Herzen als Maßstab: „Es ist das Herz ein trotzig und verzagt Ding; wer kann es ergründen?" (Jer 17,9). Sogar Zeichen und Wunder sind kein Beweis, wenn sie zu einem anderen Gott führen (Dtn 13,2–4). Ein Gefühl kann eine Wahrheit bestätigen, aber es kann nicht beweisen, dass ein neues Buch Gottes Wort ist.`,
    detail: `**Lk 24,32 im Zusammenhang:** Das Herz der Emmausjünger brannte, „als er uns die Schrift öffnete" (24,32) – Jesus legte ihnen Mose und die Propheten aus (24,27). Das Brennen folgte der Wahrheit der Schrift, und danach sahen sie den Auferstandenen leibhaftig. Es war nicht der Test, ob ein neues Buch wahr ist.

**Jak 1,5:** Es geht um Weisheit in Anfechtungen (1,2–4) – nicht um ein Verfahren, um die Echtheit von Offenbarungen zu prüfen. Zur Weisheit gehört gerade, Behauptungen zu prüfen (Spr 14,15: „Ein Unverständiger glaubt alles").

**Röm 8,16:** Der Geist bezeugt uns, **dass wir Gottes Kinder sind** – eine Gewissheit innerhalb des Evangeliums, das Paulus in Röm 1–8 entfaltet, keine Bestätigung beliebiger Inhalte. Der Geist verherrlicht Christus und redet nicht aus sich selbst (Joh 16,13–14); er widerspricht nicht dem, was er durch die Apostel schon gesagt hat.

**Das Problem des Tests:** Moroni 10,4 kann nicht scheitern: Wer keine Bestätigung erhält, hat angeblich nicht „aufrichtig" oder „mit wirklichem Vorsatz" gefragt. Ein Test, bei dem jedes Ergebnis die Behauptung bestätigt, ist kein Test.`,
    sources: [
      { kind: 'bibel', work: '1. Johannes', ref: '4,1', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind; denn es sind viel falsche Propheten ausgegangen in die Welt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '1,8', quote: `Aber so auch wir oder ein Engel vom Himmel euch würde Evangelium predigen anders, denn das wir euch gepredigt haben, der sei verflucht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '17,9', quote: `Es ist das Herz ein trotzig und verzagt Ding; wer kann es ergründen?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,11', quote: `… die nahmen das Wort auf ganz williglich und forschten täglich in der Schrift, ob sich's also verhielte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '24,32', quote: `Und sie sprachen untereinander: Brannte nicht unser Herz in uns, da er mit uns redete auf dem Wege, als er uns die Schrift öffnete?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'gegner', work: 'Buch Mormon', ref: 'Moroni 10,4', quote: `Und wenn ihr dies empfangt, so möchte ich euch ermahnen, Gott, den ewigen Vater, im Namen Christi zu fragen, ob es nicht wahr ist; und wenn ihr mit aufrichtigem Herzen, mit wirklichem Vorsatz fragt und Glauben an Christus habt, wird er euch durch die Macht des Heiligen Geistes kundtun, dass es wahr ist.`, original: `… if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost.`, translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Wüstenväter Ägyptens haben die **Unterscheidung der Geister** (*diakrisis*) zur Kunst entwickelt. Der hl. Antonius lehrte nach seiner Vita: Gute Erscheinungen bringen Ruhe, Freude und Demut, böse Verwirrung und Furcht – aber selbst angenehme Erfahrungen müssen am Glauben der Kirche gemessen werden, denn „der Satan verstellt sich zum Engel des Lichts" (2 Kor 11,14). Johannes Cassian überliefert die Lehre des ägyptischen Abbas Moses, dass die Unterscheidung (*discretio*) die Mutter aller Tugenden ist, und erzählt warnend vom asketischen Mönch Hero, der einem „Engel" glaubte und sich in einen Brunnen stürzte. In der koptischen Kirche wird persönliche Erfahrung deshalb immer an Schrift, Überlieferung und dem Rat eines geistlichen Vaters geprüft.`,
    detail: `Die koptische Frömmigkeit kennt tiefe geistliche Erfahrung – Gebet, Tränen, innere Wärme. Aber kein Kirchenvater hätte gesagt: „Wenn du beim Lesen eines Buches Frieden empfindest, ist es Gottes Wort." Der Kanon der Schrift wurde nicht nach Gefühl bestimmt, sondern nach apostolischem Ursprung, Übereinstimmung mit der Glaubensregel und dem Gebrauch in allen Kirchen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '35–37', quote: `Erscheinungen der Heiligen bringen Ruhe und Freude, die der Dämonen Verwirrung und Furcht; man prüfe die Geister.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern (Collationes)', ref: 'II,2–5', quote: `Abbas Moses: Die Unterscheidung ist die Mutter aller Tugenden. – Warnendes Beispiel des Mönchs Hero, der von einem Trugbild in Engelsgestalt getäuscht wurde.`, status: 'paraphrase' },
      { kind: 'bibel', work: '2. Korinther', ref: '11,14', quote: `Und das ist auch kein Wunder; denn er selbst, der Satan, verstellt sich zum Engel des Lichts.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  quickAnswer: `Ich bete auch, und ich glaube, dass Gott Gebete erhört. Aber die Bibel sagt mir, wie ich eine neue Botschaft prüfen soll: an der Schrift (Apg 17,11; Gal 1,8), nicht an meinem Herzen, das „trotzig und verzagt" ist (Jer 17,9). Muslime, Hindus und Zeugen Jehovas berichten dieselbe innere Gewissheit für widersprüchliche Lehren – ein Gefühl kann also nicht entscheiden, welche wahr ist.`,
  keyPoints: [
    `**Biblischer Prüfmaßstab:** Schrift und apostolisches Evangelium (Gal 1,8; 1 Joh 4,1; Apg 17,11), nicht das Gefühl.`,
    `**Das Herz ist unzuverlässig:** Jer 17,9; Spr 28,26.`,
    `**Widersprüchliche Gewissheiten:** Anhänger gegensätzlicher Religionen berichten dieselbe Erfahrung.`,
    `**Unwiderlegbarer Test:** Wer keine Antwort bekommt, war angeblich nicht „aufrichtig" – das ist kein echter Test.`,
    `**Lk 24,32 richtig gelesen:** Das Herz brannte bei der Auslegung der Schrift; danach folgte die leibliche Begegnung.`,
    `**Koptische Unterscheidung der Geister:** Antonius und Cassian – auch Licht und Frieden können täuschen.`,
  ],
  voices: [
    {
      person: 'johannes-cassian',
      role: 'als Überlieferer der ägyptischen Wüstenväter',
      text: `Cassian, der die Mönchsväter Ägyptens besuchte, berichtet in seinen *Unterredungen* von Abbas Moses, für den die Gabe der Unterscheidung wichtiger ist als Fasten und Nachtwachen. Er erzählt vom Mönch Hero, der jahrzehntelang streng asketisch lebte, einem Licht in Engelsgestalt vertraute und sich in einen Brunnen stürzte, weil der „Engel" ihm Bewahrung verhieß. Die Lehre der Väter: Aufrichtigkeit und Frömmigkeit schützen nicht vor Täuschung – nur Demut, Prüfung und der Rat der Väter tun es.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes', ref: 'II,5', quote: `Der Fall des Mönchs Hero.`, status: 'paraphrase' }],
    },
    {
      person: 'antonius',
      role: 'als Vater der Unterscheidung der Geister',
      text: `Antonius lehrte seine Mönche, dass die Dämonen sich auch als Lichtgestalten, Engel oder fromme Stimmen zeigen können, um zu täuschen. Er riet, jede Erscheinung zu fragen: „Wer bist du, und woher kommst du?" und sie am Glauben an Christus zu messen. Für ihn war entscheidend, ob eine Erfahrung zu Demut, zur Liebe zu Christus und zur Treue gegenüber der Lehre der Kirche führt.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '35–43', quote: `Rede des Antonius über die Unterscheidung der Geister.`, status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Denker über Glaube und Gefühl',
      text: `Lewis definiert Glauben als die Kunst, an dem festzuhalten, was die Vernunft einmal angenommen hat, auch wenn die Stimmungen wechseln. Gefühle kommen und gehen: An manchen Tagen erscheint uns das Christentum überwältigend wahr, an anderen unwahrscheinlich. Wer Wahrheit an Gefühlen misst, wird von jeder Stimmung hin- und hergeworfen. Glaube stützt sich auf Gründe und hält an ihnen fest, gerade wenn die Gefühle schweigen.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (dt. Pardon, ich bin Christ)', ref: 'Buch III, Kap. 11 „Faith"', year: '1952', quote: `Glaube ist die Kunst, an Dingen festzuhalten, die die Vernunft einmal angenommen hat, trotz wechselnder Stimmungen.`, status: 'paraphrase' }],
    },
    {
      person: 'plantinga',
      role: 'als Erkenntnistheoretiker (reformierte Epistemologie)',
      text: `Plantinga hat gezeigt, dass Glaube an Gott auch ohne Beweiskette „basal" gerechtfertigt sein kann, etwa durch das innere Zeugnis des Geistes. Ein Mormone kann dieses Modell übernehmen – aber Plantinga betont zugleich, dass basale Überzeugungen durch **Widerlegungsgründe** (*defeaters*) erschüttert werden können. Wenn starke Gegenbelege vorliegen, muss die Überzeugung entweder diese widerlegen oder aufgegeben werden. Für das Buch Mormon liegen solche Widerlegungsgründe vor: Archäologie, Genetik, das Buch Abraham.`,
      sources: [{ kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Warranted Christian Belief', year: '2000', quote: `Basale Überzeugungen und das Problem der Widerlegungsgründe (defeaters).`, status: 'paraphrase' }],
    },
    {
      person: 'james-white',
      role: 'als Apologet im Gespräch mit Mormonen',
      text: `White hat in seinen Büchern und Gesprächen mit HLT-Missionaren immer wieder darauf hingewiesen, dass die Bibel selbst den Maßstab zur Prüfung neuer Offenbarungen liefert. Er empfiehlt, die Einladung zum Gebet nicht abzulehnen, sondern zu fragen: Würde Gott mir durch ein Gefühl etwas bestätigen, was seinem bereits geoffenbarten Wort widerspricht?`,
      sources: [{ kind: 'fachliteratur', author: 'James R. White', work: 'Letters to a Mormon Elder', year: '1993', quote: `Prüfung des HLT-Zeugnisses an der Schrift.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'bete-einfach',
      objection: `Du musst nicht diskutieren. Lies das Buch Mormon und bete aufrichtig darüber – dann wird Gott dir durch den Heiligen Geist zeigen, dass es wahr ist.`,
      objectionBy: 'HLT-Missionare',
      answer: `Ich bete gern – aber Gott hat mir schon gesagt, wie ich eine neue Botschaft prüfen soll: an seinem Wort (Apg 17,11; Gal 1,8; 1 Joh 4,1). Wenn das Buch Mormon etwas lehrt, was der Bibel widerspricht – etwa dass Gott einst ein Mensch war –, dann weiß ich die Antwort schon, bevor ich bete. Gott widerspricht sich nicht.`,
      followUps: [
        {
          id: 'emmaus-brennen',
          objection: `Die Emmausjünger hatten auch ein „brennendes Herz" (Lk 24,32). Das ist biblisch!`,
          objectionBy: 'HLT-Missionare',
          answer: `Lies, wann ihr Herz brannte: „als er uns die Schrift öffnete" (24,32) – Jesus legte ihnen Mose und die Propheten aus. Das Gefühl war die Antwort auf die **Schrift**, nicht ihr Ersatz. Und danach sahen sie den Auferstandenen leibhaftig. Bei Emmaus bestätigt das Herz die Bibel; bei Moroni soll es ein Buch bestätigen, das über die Bibel hinausgeht.`,
          followUps: [
            {
              id: 'roem-8-16',
              objection: `„Der Geist gibt Zeugnis unserem Geist" (Röm 8,16). Genau das habe ich erlebt.`,
              objectionBy: 'HLT-Mitglieder',
              answer: `Röm 8,16 sagt, **was** der Geist bezeugt: dass wir Gottes Kinder sind – im Rahmen des Evangeliums, das Paulus in Röm 1–8 entfaltet. Der Geist redet nicht aus sich selbst, sondern verherrlicht Christus und erinnert an das, was Jesus gesagt hat (Joh 14,26; 16,13–14). Er bestätigt nichts, was dem Wort der Apostel widerspricht (Gal 1,8).`,
              followUps: [
                {
                  id: 'dein-glaube-auch-gefuehl',
                  objection: `Dein Glaube beruht doch letztlich auch nur auf Gefühlen.`,
                  objectionBy: 'HLT-Mitglieder',
                  answer: `Nein – mein Glaube ruht auf öffentlichen Tatsachen: dem leeren Grab, den Erscheinungen vor vielen Zeugen (1 Kor 15,3–8), der überprüfbaren Geschichte der Bibel und der ununterbrochenen Kirche. Das innere Zeugnis des Geistes kommt hinzu und macht mir diese Wahrheit persönlich. Erfahrung bestätigt, was öffentlich begründet ist; sie ersetzt die Begründung nicht.`,
                  questionsBack: [`Wenn dir jemand sagt, er habe beim Lesen des Korans dasselbe Brennen gespürt – wie entscheidest du, wer recht hat?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ich-habe-es-gespuert',
      objection: `Ich habe es gespürt. Ich weiß, dass das Buch Mormon wahr ist. Das kannst du mir nicht nehmen.`,
      objectionBy: 'HLT-Mitglieder',
      answer: `Ich will dir deine Erfahrung nicht absprechen – sie war real. Die Frage ist, wie man sie deutet. Muslime berichten dieselbe Gewissheit beim Koran, Hindus bei der Gita, Zeugen Jehovas beim Wachtturm. Ihre Lehren widersprechen sich. Also kann das Gefühl allein nicht entscheiden, was wahr ist – es braucht einen Maßstab außerhalb von uns.`,
      followUps: [
        {
          id: 'nicht-aufrichtig',
          objection: `Wer keine Antwort bekommt, hat nicht mit „wirklichem Vorsatz" gefragt.`,
          objectionBy: 'HLT-Missionare',
          answer: `Dann kann der Test nie scheitern: Jede Antwort, die nicht passt, wird dem Fragenden angelastet. Es gibt viele ehemalige Mitglieder, die jahrelang aufrichtig gebetet haben und keine Bestätigung erhielten. Ein Test, der nur ein Ergebnis zulässt, prüft nichts – er setzt das Ergebnis voraus.`,
          followUps: [
            {
              id: 'jakobus-1-5',
              objection: `Jak 1,5 verspricht doch: Wer Weisheit braucht, bitte Gott – und er gibt sie.`,
              objectionBy: 'HLT-Missionare',
              answer: `Ja, und ich bitte um Weisheit. Jakobus spricht von Weisheit in Anfechtungen (1,2–4). Zur göttlichen Weisheit gehört, Behauptungen sorgfältig zu prüfen: „Ein Unverständiger glaubt alles; aber ein Kluger merkt auf seinen Gang" (Spr 14,15). Weisheit führt mich zur Schrift und zu den Fakten – nicht weg von ihnen.`,
              sources: [{ kind: 'bibel', work: 'Sprüche', ref: '14,15', quote: `Ein Unverständiger glaubt alles; aber ein Kluger merkt auf seinen Gang.`, translation: 'Luther 1912', status: 'verbatim' }],
            },
          ],
        },
      ],
    },
    {
      id: 'plantinga-basal',
      objection: `Auch christliche Philosophen wie Alvin Plantinga sagen, dass Glaube durch das Zeugnis des Geistes „basal" gerechtfertigt sein kann – ohne Beweise. Dasselbe gilt für mein Zeugnis.`,
      objectionBy: 'HLT-Philosophen (z. B. im Umfeld der BYU)',
      answer: `Ein guter Punkt – Plantingas Modell lässt das grundsätzlich zu. Aber Plantinga sagt auch: Basale Überzeugungen können durch starke Gegengründe (*defeaters*) erschüttert werden, und dann muss man diese entkräften. Beim Buch Mormon liegen solche Gegengründe vor: keine archäologische Spur, die Genetik, das Buch Abraham. Ein inneres Zeugnis, das gegen starke öffentliche Belege steht, ist nicht mehr gerechtfertigt.`,
      followUps: [
        {
          id: 'eure-belege-auch-schwach',
          objection: `Eure historischen Belege für die Auferstehung sind auch nicht zwingend. Auch ihr glaubt gegen Einwände.`,
          objectionBy: 'HLT-Apologeten',
          answer: `Kein historisches Argument ist ein mathematischer Beweis. Aber es gibt einen Unterschied zwischen Belegen, die **für** eine Sache sprechen, und Belegen, die **gegen** sie sprechen. Für die Auferstehung sprechen frühe, unabhängige Quellen und Fakten, die selbst skeptische Historiker anerkennen. Gegen die Geschichtlichkeit des Buches Mormon sprechen Archäologie und Genetik, und selbst die HLT-Kirche räumt die asiatische Herkunft der Ureinwohner ein. Diese Asymmetrie ist entscheidend.`,
        },
      ],
    },
    {
      id: 'frieden-kann-nicht-boese-sein',
      objection: `Ein Gefühl von Frieden und Wärme kann doch nicht vom Bösen kommen.`,
      objectionBy: 'HLT-Mitglieder',
      answer: `Paulus sagt: „Der Satan verstellt sich zum Engel des Lichts" (2 Kor 11,14). Die ägyptischen Wüstenväter haben das erfahren: Cassian erzählt von einem frommen Mönch, der einem leuchtenden „Engel" vertraute und daran zugrunde ging. Frieden ist eine Frucht des Geistes – aber nicht jedes Friedensgefühl ist der Geist. Darum prüfen wir am Wort Gottes, nicht am Gefühl.`,
      questionsBack: [`Wie würdest du einen falschen Frieden von einem echten unterscheiden, wenn nicht an der Schrift?`],
    },
  ],
  questionsToAsk: [
    `Wie entscheidest du zwischen deinem Zeugnis und dem gleich starken Zeugnis eines Muslims für den Koran?`,
    `Was würde passieren, wenn du aufrichtig betest und die Antwort „nein" ist?`,
    `Würde Gott dir durch ein Gefühl etwas bestätigen, was seinem Wort in der Bibel widerspricht?`,
    `Bei welcher Gelegenheit brannte das Herz der Emmausjünger (Lk 24,32)?`,
  ],
  avoid: [
    `Die Erfahrung des anderen lächerlich machen oder als „Einbildung" abtun – sie ist für ihn real und wertvoll.`,
    `„Gebet ist sinnlos" – du betest selbst. Betone, dass du gern betest, aber prüfst.`,
    `Pauschal behaupten, das Gefühl komme „vom Teufel" – das kränkt und lässt sich nicht belegen. Zeige lieber, dass Gefühle allein nicht entscheiden können.`,
  ],
  concessions: [
    `Auch Christen gründen ihre Glaubensgewissheit teilweise auf das innere Zeugnis des Heiligen Geistes (Röm 8,16).`,
    `Christliche Erkenntnistheorie (z. B. Plantinga) hält basale Überzeugungen ohne Beweiskette grundsätzlich für möglich.`,
    `Die Erfahrungen vieler Mormonen sind aufrichtig und prägen ein vorbildliches Leben.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern, Unterredung II (Über die Unterscheidung)', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James R. White', work: 'Letters to a Mormon Elder', year: '1993', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Warranted Christian Belief', year: '2000', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Mormonen', 'Zeugnis', 'Erfahrung', 'Unterscheidung der Geister', 'Erkenntnistheorie'],
  related: [
    'erkenntnistheorie/religioese-erfahrung-kein-beleg',
    'erkenntnistheorie/glaube-ohne-beweise',
    'mormonen/buch-mormon-historisch',
    'okkultismus/spiritismus-harmlos',
  ],
};

export default claim;
