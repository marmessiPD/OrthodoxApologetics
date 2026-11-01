import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'koran-missversteht-trinitaet',
  title: `„Der Koran beschreibt die Trinität korrekt (5:73, 5:116, 6:101)."`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak', work: 'Debatten über Sure 5:116 und Marienverehrung' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'Vorträge zu Christentum und Koran' },
    { name: 'Mohammed Hijab', role: 'Islamischer Apologet, Speakers\' Corner', work: 'Debatten zu Koran und Trinität' },
    { name: 'Ibn Kathir', role: 'Koranexeget (gest. 1373)', work: 'Tafsīr al-Qurʾān al-ʿaẓīm, zu 5:73 und 5:116' },
  ],
  steelman: `Der Koran ist kein Lehrbuch der christlichen Dogmatik, sondern eine Rechtleitung, die das Wesentliche trifft: Christen machen aus Gott eine Dreiheit („Sagt nicht ‚drei'", 4:171; „Allah ist der Dritte von dreien", 5:73), sie vergöttlichen Jesus („Allah ist der Messias", 5:72) und sie erheben Maria in eine Stellung, die nur Gott zukommt (5:116) – wer die Gebete an die „Gottesgebärerin" und die Marienikonen der Kopten und Byzantiner kennt, sieht, dass der Koran die gelebte Praxis beschreibt, nicht die Spitzfindigkeiten der Konzilien. Zudem gab es in Arabien Gruppen wie die von Epiphanius erwähnten Kollyridianer, die Maria Opfer darbrachten. Allah spricht zu den Christen, wie sie tatsächlich glaubten und beteten – und überführt jede Form, in der man Gott Teilhaber gibt.`,
  biblical: {
    summary: `Die Bibel kennt die Dreiheit **Vater – Sohn – Heiliger Geist** (Mt 28,19; 2 Kor 13,13; Joh 14,16–17.26), nie Gott – Jesus – Maria. Maria ist in der Schrift die demütige „Magd des Herrn" (Lk 1,38), die sich über „Gott, meinen Heiland" freut (Lk 1,47) – also ein Geschöpf, das selbst Erlösung empfängt. Der Heilige Geist ist kein Engel, sondern „der Geist der Wahrheit, der vom Vater ausgeht" (Joh 15,26), und Lügen gegen ihn ist Lügen gegen Gott (Apg 5,3–4). Wo der Koran eine Dreiheit identifiziert, nennt er Allah, Jesus und Maria (5:116; vgl. 5:73–75) – eine Dreiheit, die in keiner christlichen Schrift und keinem Bekenntnis vorkommt.`,
    detail: `- **Lk 1,46–47:** „Meine Seele erhebt den Herrn, und mein Geist freuet sich Gottes, meines Heilandes." Maria braucht selbst einen Heiland – sie ist niemals „Gott".
- **Mt 28,19:** Der eine Name des Vaters, des Sohnes und des Heiligen Geistes.
- **Apg 5,3–4:** Den Heiligen Geist belügen heißt „Gott belügen" – der Geist ist göttlich, nicht ein geschaffener Engel.
- Der Koran nennt nirgends „Vater, Sohn, Heiliger Geist" als christliche Dreiheit. Der „Heilige Geist" (*rūḥ al-qudus*, 2:87; 16:102) wird in der islamischen Auslegung mit dem Engel Gabriel identifiziert.`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '1,46–47', quote: `Meine Seele erhebt den HERRN, und mein Geist freuet sich Gottes, meines Heilandes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '13,13', quote: `Die Gnade unsers HERRN Jesu Christi und die Liebe Gottes und die Gemeinschaft des heiligen Geistes sei mit euch allen!`, translation: 'Luther 1912', status: 'verbatim', note: 'In manchen Ausgaben 13,14.' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '5,3–4', quote: `Ananias, warum hat der Satan dein Herz erfüllt, daß du dem heiligen Geist lögest …? Du hast nicht Menschen, sondern Gott gelogen.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut leicht gekürzt.' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt die Dreieinigkeit von Vater, Sohn und Heiligem Geist (Nizäa 325, Konstantinopel 381) – 250 bis 300 Jahre vor dem Koran. Maria wird als **Theotokos** (Gottesgebärerin, Ephesus 431) hoch verehrt, aber sie ist ein Geschöpf: Die Kirche ehrt sie, sie betet sie nicht an. Der Titel „Gottesgebärerin" sagt etwas über ihren Sohn aus – dass das Kind, das sie gebar, der ewige Logos ist –, nicht über eine Göttlichkeit Marias.`,
    detail: `Die Unterscheidung zwischen **Anbetung** (*latreia*, nur Gott) und **Verehrung** (*timē*, *proskynēsis* der Ehre) ist in der Kirche alt und durchgängig. Die Kollyridianer, die Maria Brotopfer darbrachten, wurden von Epiphanius von Salamis (Panarion 79, um 375) gerade als **Häresie** verurteilt: „Maria soll geehrt werden, aber der Vater, der Sohn und der Heilige Geist sollen angebetet werden; Maria soll niemand anbeten." Das zeigt: Die Kirche selbst hat genau das verurteilt, was der Koran den Christen vorwirft.`,
    sources: [
      { kind: 'kirchenvater', author: 'Epiphanius von Salamis', work: 'Panarion (Arzneikasten gegen die Häresien)', ref: '79', year: 'ca. 375', quote: `Maria soll in Ehren sein; der Vater, der Sohn und der Heilige Geist aber sollen angebetet werden. Maria soll niemand anbeten.`, translation: 'eigene Übersetzung, sinngemäß', status: 'paraphrase', note: 'Epiphanius verurteilt die Kollyridianer, eine kleine Frauengruppe, die Maria Brotkuchen (kollyrides) opferte.' },
      { kind: 'konzil', work: 'Konzil von Ephesus', ref: '431', quote: `Maria ist Theotokos – Gottesgebärerin –, weil der aus ihr Geborene der menschgewordene Gott-Logos ist.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Islamwissenschaft gibt es drei Erklärungen für die koranischen Aussagen: (1) **Unkenntnis**: Muhammad kannte nur populäre oder häretische Formen des Christentums; (2) **Häresie-These**: Der Koran richtet sich gegen konkrete Gruppen (Kollyridianer, Tritheisten); (3) **Rhetorik-These**: Gabriel Said Reynolds und Sidney Griffith deuten die Aussagen als bewusste polemische Zuspitzung – der Koran wolle die Christen beschämen, indem er die Konsequenzen ihrer Verehrung überzeichnet. Alle drei Erklärungen haben gemeinsam: Keine behauptet, dass der Koran das kirchliche Trinitätsdogma zutreffend wiedergibt.`,
    detail: `Für das Gespräch ist das entscheidend. Der Muslim muss sich festlegen: Beschreibt der Koran die tatsächliche christliche Lehre (dann irrt er sachlich), oder beschreibt er eine Sekte bzw. eine Karikatur (dann hat er die christliche Trinität nie widerlegt)? Klassische Exegeten wie die Verfasser des *Tafsīr al-Ǧalālain* erklärten 5:73 ausdrücklich so, dass die „drei" Allah, Jesus und seine Mutter seien, und fügten hinzu, dies sei die Lehre einer christlichen Gruppe.`,
    sources: [
      { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', ref: 'zu 5:73 und 5:116', status: 'paraphrase', note: 'Reynolds deutet die Stellen als polemische Rhetorik, nicht als Lehrbericht.' },
      { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Bible in Arabic', year: '2013', status: 'paraphrase' },
      { kind: 'hadith', author: 'Jalal ad-Din al-Mahalli / Jalal ad-Din as-Suyuti', work: 'Tafsir al-Jalalain', ref: 'zu 5:73', quote: `„Der Dritte von dreien": d. h. einer von ihnen; die anderen beiden sind Jesus und seine Mutter – das sagt eine Gruppe der Christen.`, status: 'paraphrase', note: 'Sinngemäß nach der gängigen Ausgabe; Wortlaut vor Zitat prüfen.' },
    ],
  },
  quickAnswer: `Der Koran nennt als „Dreiheit" Allah, Jesus und Maria (5:116, 5:73–75) und begründet die Ablehnung eines Sohnes damit, dass Gott keine Gefährtin hat (6:101). Keine Kirche hat je gelehrt, Maria sei Gott oder Gott habe mit einer Frau einen Sohn gezeugt – das hat die Kirche selbst als Häresie verurteilt. Entweder beschreibt der Koran unsere Lehre falsch, oder er bekämpft eine Lehre, die wir auch ablehnen. In beiden Fällen hat er die christliche Trinität nicht widerlegt.`,
  keyPoints: [
    `**Die koranische Dreiheit ist Allah – Jesus – Maria** (5:116; vgl. 5:75 „beide aßen Speise" direkt nach 5:73), nie Vater – Sohn – Heiliger Geist.`,
    `**6:101 und 72:3** begründen die Ablehnung eines Sohnes mit dem Fehlen einer Gefährtin – ein körperliches Zeugungsverständnis, das kein Christ vertritt.`,
    `**Der Heilige Geist** ist im Koran (nach klassischer Auslegung) der Engel Gabriel – der Koran kennt die dritte Person der Trinität gar nicht.`,
    `**Nizäa (325) und Konstantinopel (381)** lagen Jahrhunderte vor Muhammad; alle Kirchen um Arabien (Kopten, Syrer, Byzantiner, Äthiopier, Kirche des Ostens) bekannten Vater, Sohn und Geist.`,
    `**Die Kirche selbst verurteilte die Marienanbetung** (Epiphanius gegen die Kollyridianer) – genau das, was der Koran den Christen zuschreibt.`,
    `**Das Dilemma:** Beschreibt der Koran die Trinität, irrt er sachlich; beschreibt er eine Sekte oder eine Karikatur, hat er die Trinität nie widerlegt.`,
  ],
  argument: {
    name: 'Das Trinitäts-Dilemma des Korans',
    summary: 'Ein allwissender Autor müsste die Lehre, die er verurteilt, korrekt beschreiben.',
    premises: [
      {
        text: `P1: Der Koran beansprucht, vom allwissenden Gott zu stammen, und nennt sich „klar" und „alles erklärend" (16:89; 12:111).`,
        support: `Das ist islamisches Selbstverständnis; kein Muslim bestreitet es.`,
        sources: [
          { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:89', quote: `Und Wir haben dir das Buch offenbart als Klarlegung für alles.`, original: `tibyānan li-kulli shayʾin`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/16/89' },
        ],
      },
      {
        text: `P2: Wer im Namen des allwissenden Gottes eine Lehre verurteilt, beschreibt sie zutreffend.`,
        support: `Sonst würde Gott einen Strohmann bekämpfen – das wäre seiner Wahrhaftigkeit und Allwissenheit unwürdig.`,
      },
      {
        text: `P3: Der Koran beschreibt die christliche Dreiheit als Allah, Jesus und Maria und setzt ein körperliches Zeugungsverständnis voraus.`,
        support: `5:116 („mich und meine Mutter als zwei Götter"), 5:73–75 („Dritter von dreien" … „beide aßen Speise"), 6:101 („wo Er keine Gefährtin hat"), 72:3.`,
        sources: [
          { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:116', quote: `Und wenn Allah sagen wird: „O Jesus, Sohn der Maria, hast du zu den Menschen gesagt: ‚Nehmt mich und meine Mutter als zwei Götter neben Allah'?"`, original: `a-anta qulta li-n-nāsi ttakhidhūnī wa-ummiya ilāhayni min dūni llāh`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/5/116' },
          { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:73', quote: `Ungläubig sind gewiss diejenigen, die sagen: „Allah ist der Dritte von dreien." Es gibt keinen Gott außer einem einzigen Gott.`, original: `laqad kafara lladhīna qālū inna llāha thālithu thalāthatin`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/5/73' },
          { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:75', quote: `Der Messias, Sohn der Maria, war nur ein Gesandter … und seine Mutter war eine Wahrhaftige. Beide pflegten Speise zu essen.`, original: `wa-ummuhū ṣiddīqatun kānā yaʾkulāni ṭ-ṭaʿām`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/5/75' },
          { kind: 'koran', work: 'Sure 72 (al-Jinn)', ref: '72:3', quote: `Erhaben ist die Majestät unseres Herrn; Er hat sich weder eine Gefährtin noch ein Kind genommen.`, original: `mā ttakhadha ṣāḥibatan wa-lā waladā`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/72/3' },
        ],
      },
      {
        text: `P4: Keine christliche Kirche hat je gelehrt, Maria sei Teil der Gottheit oder Gott habe durch eine Gefährtin einen Sohn.`,
        support: `Alle Bekenntnisse von Nizäa (325) bis zur koptischen Liturgie bekennen Vater, Sohn und Heiligen Geist. Marienanbetung wurde als Häresie verurteilt (Epiphanius, Panarion 79).`,
      },
    ],
    inferences: [
      `Aus P3 und P4: Die koranische Beschreibung stimmt nicht mit der christlichen Lehre überein.`,
      `Aus P1, P2 und diesem Zwischenergebnis: Entweder ist P1 falsch, oder der Koran beschreibt gar nicht die christliche Trinität.`,
    ],
    conclusion: `Der Koran widerlegt die christliche Trinität nicht. Er verurteilt (bestenfalls) eine Lehre, die die Kirche selbst verurteilt – oder er beschreibt die christliche Lehre falsch, was mit seinem Anspruch, vom allwissenden Gott zu stammen, nicht vereinbar ist.`,
    horns: [
      { label: 'Horn A: Der Koran meint die echte Trinität', text: `Dann irrt er sachlich: Maria war nie Teil der Trinität, und Christen lehren keine körperliche Zeugung. Ein allwissender Autor irrt nicht.` },
      { label: 'Horn B: Der Koran meint eine Sekte oder Karikatur', text: `Dann stimmen Christen ihm zu – und die Trinität von Vater, Sohn und Geist bleibt vom Koran unberührt. Der Muslim kann sich dann nicht mehr auf den Koran berufen, um die Trinität zu widerlegen.` },
    ],
  },
  voices: [
    {
      person: 'gabriel-reynolds',
      role: 'als Islamwissenschaftler und Korankommentator',
      text: `Gabriel Said Reynolds liest den Koran im Gespräch mit der Bibel und der spätantiken christlichen Literatur. Er hält es für unwahrscheinlich, dass der Koran schlicht „schlecht informiert" war, und deutet Stellen wie 5:116 eher als bewusste polemische Rhetorik: Der Koran zieht die Verehrung Marias und Jesu bis zu ihrer vermeintlichen Konsequenz – „zwei Götter neben Allah" –, um die Christen zu beschämen. Für die Apologetik ist das wichtig: Auch nach dieser wohlwollenden Lesart beschreibt der Koran nicht die tatsächliche Lehre der Kirche, sondern eine Zuspitzung.`,
      sources: [{ kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', status: 'paraphrase' }],
    },
    {
      person: 'sidney-griffith',
      role: 'als Historiker der arabischsprachigen Christenheit',
      text: `Sidney Griffith hat gezeigt, wie arabischsprachige Christen – Melkiten, Jakobiten (Syrisch-Orthodoxe) und Ostsyrer – unter islamischer Herrschaft die Dreieinigkeit erklärten. Sie verstanden die koranischen Aussagen als Kritik an etwas, das sie selbst nicht lehrten, und antworteten mit dem Bekenntnis zu Vater, Sohn und Geist als einem Gott. Schon Timotheus I. und Abu Qurra beteuerten gegenüber Muslimen, dass Christen weder drei Götter noch eine Göttlichkeit Marias lehren.`,
      sources: [{ kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Church in the Shadow of the Mosque', year: '2008', status: 'paraphrase' }],
    },
    {
      person: 'timotheus-i',
      role: 'als Katholikos im Gespräch mit dem Kalifen al-Mahdi (781)',
      text: `Im berühmten zweitägigen Religionsgespräch mit dem Kalifen al-Mahdi erklärt Timotheus I., dass Christen an einen Gott glauben, der von Ewigkeit her sein Wort und seinen Geist hat. Er vergleicht dies mit der Sonne, ihrem Licht und ihrer Wärme oder mit der Seele, ihrem Verstand und ihrer Rede – Bilder, die er ausdrücklich als unvollkommene Hilfen versteht. Maria kommt in seiner Trinitätserklärung nicht vor; sie ist die Mutter des menschgewordenen Wortes, nicht eine göttliche Person.`,
      sources: [{ kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase', note: 'Englische Übersetzung: A. Mingana, Woodbrooke Studies 2 (1928); arabisch-englische Ausgabe: S. K. Samir / W. Nasry, The Patriarch and the Caliph (2018).' }],
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim',
      text: `Nabeel Qureshi berichtet, wie ihn als jungen Muslim die Entdeckung erschütterte, dass er die Trinität aus dem Koran gelernt hatte – und dass die christliche Lehre etwas völlig anderes sagt. Er argumentiert: Wenn der Koran die zentrale Lehre der Christen, die er bekämpft, nicht korrekt darstellt, ist das ein ernster Hinweis darauf, dass er die christliche Botschaft aus zweiter Hand kannte. Für ihn war das ein Wendepunkt seiner Untersuchung.`,
      sources: [{ kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'No God but One: Allah or Jesus?', year: '2016', status: 'paraphrase' }],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester und Islam-Apologet',
      text: `Abuna Zakaria Botros stellt in seinen Sendungen die Frage nach der koranischen Dreiheit immer wieder offen: Wer sind die „drei" in 5:73? Er verweist darauf, dass die Kirche „Gottesgebärerin" sagt, um die Gottheit des Kindes zu bekennen, nicht die Gottheit der Mutter, und dass keine koptische Liturgie Maria anbetet. Wer die koptische Kirche kennt, so sein Argument, weiß, dass sie Maria liebt – und genau deshalb nie mit Gott verwechselt.`,
      sources: [{ kind: 'koptisch', author: 'Zakaria Botros', work: 'TV-Reihe „Fragen über den Glauben"', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'marienkult-nicht-trinitaet',
      objection: `5:116 sagt nicht, Maria sei Teil der Trinität. Es kritisiert eure Marienverehrung – und die gibt es bis heute: Gebete, Ikonen, Feste. Der Koran beschreibt eure Praxis völlig korrekt.`,
      objectionBy: 'Shabir Ally',
      targetsPremise: 3,
      answer: `5:116 spricht nicht von „übertriebener Verehrung", sondern von „zwei Göttern neben Allah" (*ilāhain*). Und direkt nach „Allah ist der Dritte von dreien" (5:73) argumentiert der Koran: „Der Messias … und seine Mutter … beide aßen Speise" (5:75). Der Koran selbst stellt also Jesus und Maria als das Paar neben Allah hin. Die Kirche ehrt Maria – aber sie betet sie nie als Gott an, und Marienanbetung hat sie als Häresie verurteilt.`,
      detail: `Der Zusammenhang 5:72–75 ist entscheidend: 5:72 („Allah ist der Messias"), 5:73 („Dritter von dreien"), 5:75 („beide aßen Speise"). Das Argument „sie aßen Speise" soll die Göttlichkeit widerlegen – und es wird auf Jesus **und** Maria angewandt. Wer nur Marienverehrung kritisieren wollte, müsste nicht beweisen, dass Maria kein Gott ist. Klassische Exegeten (z. B. Tafsir al-Ǧalālain) lasen 5:73 deshalb so, dass die „drei" Allah, Jesus und Maria sind.`,
      questionsBack: [
        `Wenn 5:116 nur Verehrung meint: Warum argumentiert 5:75, dass Maria Speise aß – also kein Gott sein kann?`,
        `Kannst du einen kirchlichen Text zeigen, der Maria als „Gott" bezeichnet?`,
      ],
      followUps: [
        {
          id: 'theotokos-macht-maria-goettlich',
          objection: `Ihr nennt sie „Mutter Gottes" und „Königin". Wer Gottes Mutter ist, steht über Gott. Das ist Vergöttlichung, egal wie ihr es nennt.`,
          objectionBy: 'Mohammed Hijab',
          answer: `„Gottesgebärerin" sagt etwas über ihren Sohn: dass das Kind, das sie geboren hat, der ewige Logos ist. Es sagt nicht, dass Maria die Gottheit hervorgebracht hätte – sie hat dem Wort sein Menschsein gegeben, nicht sein ewiges Sein. Maria nennt Gott selbst „meinen Heiland" (Lk 1,47); sie ist das erste erlöste Geschöpf, nicht ein Teil Gottes.`,
          detail: `Das Konzil von Ephesus (431) verteidigte den Titel gegen Nestorius, um die **Einheit Christi** zu schützen: Wer Maria nur „Christusgebärerin" nennt, trennt den Menschen Jesus vom Logos. Der Titel ist also christologisch, nicht mariologisch. Die koptische Kirche verehrt Maria hoch – im Monat Kiahk mit eigenen Lobgesängen –, aber alle Gebete enden bei Gott: Maria wird um Fürbitte gebeten, wie man einen lebenden Gläubigen um Gebet bittet.`,
          followUps: [
            {
              id: 'fuerbitte-ist-auch-anbetung',
              objection: `Ihr betet zu ihr um Fürbitte. Jedes Gebet an jemanden außer Allah ist Anbetung (du'a ist Ibada).`,
              objectionBy: 'Zakir Naik',
              answer: `Wenn ich dich bitte: „Bete für mich", bete ich dich nicht an. Die Bitte um Fürbitte setzt voraus, dass Maria **nicht** Gott ist – sonst würde man sie nicht bitten, für uns bei Gott einzutreten. Auch der Islam kennt die Fürsprache (*šafāʿa*) Muhammads am Jüngsten Tag. Man mag die Praxis kritisieren – aber sie ist das Gegenteil davon, Maria zu einem „Gott neben Allah" zu machen.`,
              followUps: [
                {
                  id: 'koran-meint-praxis-nicht-dogma',
                  objection: `Der Koran beurteilt, was Menschen tun, nicht was in euren Konzilsakten steht. Für Allah zählt die Praxis.`,
                  objectionBy: 'Yasir Qadhi',
                  answer: `Dann hat der Koran die christliche Lehre von Vater, Sohn und Geist nirgends beschrieben – geschweige denn widerlegt. Das ist Horn B: Du kannst dich dann nicht mehr auf den Koran berufen, um zu sagen, die Trinität sei falsch. Und ein allwissender Gott, der die Frage an Jesus richtet: „Hast **du** gesagt …?" (5:116), wüsste, dass weder Jesus noch die Kirche so etwas lehrten.`,
                  questionsBack: [`Wo im Koran findest du die Formel „Vater, Sohn und Heiliger Geist"?`],
                },
              ],
            },
          ],
        },
        {
          id: 'kollyridianer-gab-es',
          objection: `Epiphanius berichtet von den Kollyridianern in Arabien, die Maria als Göttin verehrten. Der Koran beschreibt also reale Christen in Arabien.`,
          objectionBy: 'Islamischer Apologet (Online-Debatte)',
          targetsPremise: 4,
          answer: `Epiphanius berichtet um 375 von einer kleinen Frauengruppe, die Maria Brotkuchen opferte – und er verurteilt sie als Häresie. Es gibt keinen Beleg, dass sie im 7. Jahrhundert noch existierte. Vor allem aber: Wenn der Koran eine von der Kirche verurteilte Splittergruppe meint, dann stimmen wir ihm zu – und die Trinität der Kirche bleibt unwiderlegt.`,
          sources: [
            { kind: 'kirchenvater', author: 'Epiphanius von Salamis', work: 'Panarion', ref: '79', year: 'ca. 375', status: 'paraphrase', note: 'Einzige Quelle über die Kollyridianer; spätere Belege fehlen.' },
          ],
          followUps: [
            {
              id: 'koran-spricht-zu-sekte',
              objection: `Dann spricht der Koran eben zu dieser Sekte – das widerspricht nicht seiner Allwissenheit.`,
              objectionBy: 'Shabir Ally',
              answer: `Einverstanden – aber dann hat der Koran nie die Lehre der großen Kirchen behandelt, denen Muhammad tatsächlich begegnete (Najran, Abessinien, Byzanz). Du kannst nicht gleichzeitig sagen: „Der Koran widerlegt die Trinität" und „Der Koran spricht nur zu einer Sekte, die keine Trinität lehrte".`,
              followUps: [
                {
                  id: 'sagt-nicht-drei-gilt-allen',
                  objection: `4:171 richtet sich an alle „Leute der Schrift": „Sagt nicht ‚drei'". Damit ist jede Dreiheit verurteilt, auch eure.`,
                  objectionBy: 'Ahmed Deedat',
                  answer: `Auch 4:171 erklärt, was es verwirft: „Allah ist nur ein einziger Gott; fern ist es von Ihm, dass Er ein Kind habe." Verworfen wird eine Dreiheit von Göttern, in der Gott ein Kind „hat" oder „nimmt" (vgl. 19:88–92). Wir sagen nicht „drei Götter", sondern „ein Gott". Und derselbe Vers nennt Jesus „Sein Wort" und „Geist von Ihm" – genau die Begriffe, mit denen die Kirche seit jeher die Trinität erklärt.`,
                  sources: [
                    { kind: 'koran', work: 'Sure 19 (Maryam)', ref: '19:88–92', quote: `Und sie sagen: „Der Allerbarmer hat sich ein Kind genommen." Ihr habt da etwas Ungeheuerliches begangen … Es ziemt dem Allerbarmer nicht, sich ein Kind zu nehmen.`, original: `wa-qālū ttakhadha r-raḥmānu waladā`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/19/88-92' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dritter-von-dreien-stimmt',
      objection: `„Allah ist der Dritte von dreien" (5:73) beschreibt genau, was ihr sagt: Gott ist eine von drei Personen. Manche klassischen Exegeten haben das auch auf Vater, Sohn und Geist bezogen.`,
      objectionBy: 'Mohammed Hijab',
      targetsPremise: 3,
      answer: `Christen sagen nicht, „Gott" sei der Dritte von dreien. Gott ist das eine Wesen; der Vater ist eine der drei Hypostasen, und der Vater ist nicht „der Dritte". Wo Exegeten 5:73 auf Vater, Sohn und Geist bezogen, brachten sie Wissen über Christen von außen in den Text ein. Der Koran selbst identifiziert seine „drei" im Zusammenhang mit Jesus und Maria (5:75; 5:116).`,
      detail: `In 5:73 ist „Allah" Subjekt: „Allah ist der Dritte von dreien" – als wäre Gott ein Mitglied einer Dreiergruppe neben zwei anderen. Christen sagen dagegen: Der eine Gott **ist** Vater, Sohn und Geist. Die nächste Begründung (5:75) zeigt, wer die anderen beiden sind. Ibn Ishaq berichtet übrigens, die Christen aus Najran hätten ihre Rede von „drei" mit dem göttlichen „Wir" der Schrift begründet – Maria spielte dabei keine Rolle.`,
      followUps: [
        {
          id: 'zusammenfassung-genuegt',
          objection: `Allah muss eure Theologie nicht im Detail darstellen. Eine zusammenfassende Verurteilung genügt.`,
          objectionBy: 'Yasir Qadhi',
          targetsPremise: 2,
          answer: `Eine Zusammenfassung darf kurz sein, aber sie muss stimmen. „Die Christen glauben an Vater, Sohn und Geist" ist kurz und richtig. „Die Christen machen Jesus und seine Mutter zu zwei Göttern neben Allah" ist kurz und falsch. Der Koran nennt sich „Klarlegung für alles" (16:89) – ein solcher Anspruch verträgt keine falsche Zusammenfassung.`,
          followUps: [
            {
              id: 'koran-ist-rechtleitung-kein-lexikon',
              objection: `„Klarlegung für alles" bezieht sich auf die Rechtleitung, nicht auf eine Enzyklopädie der Religionen.`,
              objectionBy: 'Shabir Ally',
              answer: `Gerade für die Rechtleitung ist es entscheidend: Wenn der Koran Christen vor ihrem „Unglauben" warnt (5:73 *kafara*), dann muss er sagen, worin dieser besteht. Ein Christ, der den Koran liest, erkennt seinen Glauben darin nicht wieder – die „Rechtleitung" verfehlt ihn also. Die Frage bleibt: Hätte Gott die Lehre, für die er Menschen verurteilt, nicht korrekt benennen können?`,
              followUps: [
                {
                  id: 'allah-kennt-herzen',
                  objection: `Allah kennt die Herzen der Christen besser als ihre Bekenntnisse. Er sah, dass sie Jesus und Maria wie Götter behandeln.`,
                  objectionBy: 'Islamischer Prediger',
                  answer: `Dann redest du nicht mehr über das, was Christen glauben, sondern über eine Herzensdiagnose, die niemand prüfen kann. Der Koran zitiert aber Aussagen („die sagen …", 5:73; „hast du gesagt …", 5:116). Aussagen kann man prüfen – und diese Aussagen finden sich in keinem christlichen Bekenntnis. Wer die Rede von Christen falsch wiedergibt, kann sich nicht auf ihre Herzen zurückziehen.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'heiliger-geist-im-koran',
      objection: `Der Koran kennt den Heiligen Geist sehr wohl (2:87). Er ist Gabriel, ein Diener Allahs. Euer Fehler war, ihn zu vergöttlichen.`,
      objectionBy: 'Zakir Naik',
      answer: `Danke – das bestätigt meinen Punkt. Im Koran ist der Heilige Geist ein geschaffener Engel und nirgends Teil der christlichen Dreiheit. Der Koran kritisiert also nie die Dreiheit von Vater, Sohn und Geist – er kennt sie nicht. Wenn er Christen eine Dreiheit vorwirft, nennt er Jesus und Maria, nicht den Geist.`,
      detail: `In der Bibel ist der Geist eindeutig göttlich: Er ist „Geist Gottes" (1 Kor 2,10–11 – er erforscht „die Tiefen der Gottheit"), Lügen gegen ihn ist Lügen gegen Gott (Apg 5,3–4), und er wird im einen Namen mit Vater und Sohn genannt (Mt 28,19). Das Nizäno-Konstantinopolitanum (381) nennt ihn „den Herrn und Lebendigmacher, der vom Vater ausgeht".`,
      followUps: [
        {
          id: 'geist-ist-nur-kraft',
          objection: `In der Bibel ist der Geist doch auch nur eine Kraft Gottes, keine Person.`,
          objectionBy: 'Shabir Ally',
          answer: `Der Geist lehrt und erinnert (Joh 14,26), bezeugt (Joh 15,26), spricht und sendet (Apg 13,2), kann betrübt werden (Eph 4,30) und teilt Gaben aus, „wie er will" (1 Kor 12,11). Eine bloße Kraft hat keinen Willen und kann nicht betrübt werden. Aber das ist eine eigene Debatte – hier geht es darum, dass der Koran diese christliche Lehre gar nicht beschreibt.`,
        },
      ],
    },
    {
      id: 'bewusste-rhetorik',
      objection: `Westliche Gelehrte wie Reynolds sagen selbst, der Koran betreibe hier bewusste Rhetorik. Gott darf polemisch zuspitzen – Jesaja macht sich auch über Götzenbilder lustig (Jes 44).`,
      objectionBy: 'Islamischer Apologet mit akademischem Hintergrund',
      targetsPremise: 2,
      answer: `Jesaja beschreibt die Götzenherstellung genau: Ein Mann fällt einen Baum, verbrennt die eine Hälfte und schnitzt aus der anderen einen Gott (Jes 44,14–17). Die Satire trifft, weil sie zutrifft. Wenn der Koran dagegen Christen eine Lehre zuschreibt, die sie nie hatten, ist das keine treffende Satire, sondern ein Strohmann. Und die Rhetorik-These gibt zu, dass der Koran nicht die christliche Lehre beschreibt.`,
      sources: [
        { kind: 'bibel', work: 'Jesaja', ref: '44,15–17', quote: `Das gibt dem Menschen Feuerwerk … Aber das übrige macht er zum Gott, daß es sein Götze sei, davor er kniet und niederfällt und betet und spricht: Errette mich; denn du bist mein Gott!`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
      ],
      followUps: [
        {
          id: 'christen-karikieren-islam-auch',
          objection: `Christen karikieren den Islam seit Jahrhunderten – Johannes von Damaskus nannte ihn eine Häresie. Warum soll der Koran nicht zurückschlagen dürfen?`,
          objectionBy: 'Mohammed Hijab',
          answer: `Christliche Polemiker sind fehlbare Menschen, und wo sie den Islam falsch dargestellt haben, war das Unrecht. Aber der Koran beansprucht, das Wort des allwissenden Gottes zu sein. Von Gott erwarten wir mehr als von Polemikern: dass er wahr redet, auch über seine Gegner. Genau das ist die Frage, die ich stelle.`,
          followUps: [
            {
              id: 'rhetorik-ist-nicht-luege',
              objection: `Rhetorische Zuspitzung ist keine Lüge. Sie zeigt die Konsequenz eures Handelns.`,
              objectionBy: 'Islamischer Apologet mit akademischem Hintergrund',
              answer: `Eine Konsequenz zu ziehen ist legitim – dann muss sie aber als Konsequenz kenntlich sein: „Eure Verehrung führt dazu, dass …". 5:116 lässt Gott Jesus fragen, ob **er** diese Lehre verkündet habe. Das ist keine Konsequenzbetrachtung, sondern die Frage nach einer Aussage. Und die Antwort der Geschichte ist: Weder Jesus noch die Kirche haben das gelehrt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'trinitaet-noch-unklar',
      objection: `Im 7. Jahrhundert gab es kein einheitliches Christentum. Die Christen in Arabien glaubten alles Mögliche; der Koran antwortet auf diese Vielfalt.`,
      objectionBy: 'Shabir Ally',
      answer: `Über Christologie stritten die Kirchen, ja. Aber über die Trinität von Vater, Sohn und Geist waren sich alle Kirchen rund um Arabien einig: Byzantiner, Kopten, Syrisch-Orthodoxe, Äthiopier und die Kirche des Ostens. Nizäa (325) und Konstantinopel (381) lagen 250 Jahre zurück. In keiner dieser Kirchen war Maria Teil der Gottheit.`,
      followUps: [
        {
          id: 'najran-christen',
          objection: `Muhammad diskutierte doch mit den Christen aus Najran (3:59–61). Er kannte ihre Lehre aus erster Hand.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Gerade das macht das Problem größer. Die Christen von Najran gehörten zur syrisch-orthodoxen, miaphysitischen Tradition – derselben Glaubensfamilie wie die Kopten – und bekannten das Nizänum. Ihre Lehre war Vater, Sohn und Geist. Wer ihnen begegnete und trotzdem von „Jesus und seiner Mutter als zwei Göttern" spricht, hat ihre Lehre nicht wiedergegeben.`,
          detail: `Die Christengemeinde von Najran war seit dem Martyrium unter dem jüdischen König Dhu Nuwas (523) in der ganzen Christenheit bekannt; die zeitgenössischen Berichte (Brief des Simeon von Beth Arscham) stammen aus dem miaphysitischen Milieu. Ibn Ishaq überliefert die Begegnung der Najran-Delegation mit Muhammad in Medina; der Koran antwortet in 3:59 („Jesus ist vor Allah wie Adam") auf die Gottessohnschaft, nicht auf Maria.`,
          followUps: [
            {
              id: 'adam-vergleich-3-59',
              objection: `Die Antwort in 3:59 ist vernichtend: Adam hatte weder Vater noch Mutter – und ist doch kein Gott. Die Jungfrauengeburt beweist nichts.`,
              objectionBy: 'Ahmed Deedat',
              answer: `Einverstanden: Die Jungfrauengeburt allein beweist keine Gottheit, und kein Konzil hat das behauptet. Die Kirche begründet die Gottheit Christi mit seiner ewigen Präexistenz als Wort (Joh 1,1), seinen göttlichen Ansprüchen und seiner Auferstehung. 3:59 trifft also ein Argument, das die Kirche nicht führt – wieder ein Beispiel dafür, dass der Koran die christliche Begründung nicht wiedergibt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'arbab-ist-metapher',
      objection: `In 9:31 heißt es, Christen hätten ihre Mönche „zu Herren" genommen – das ist offensichtlich metaphorisch gemeint (Gehorsam). Genauso ist 5:116 metaphorisch: übertriebener Gehorsam und Liebe, nicht Lehre.`,
      objectionBy: 'Yasir Qadhi',
      targetsPremise: 3,
      answer: `Für 9:31 gibt es tatsächlich eine Überlieferung, die es metaphorisch erklärt: ʿAdi ibn Hatim sagte, sie hätten ihre Mönche nicht angebetet, und Muhammad erklärte, sie hätten ihnen im Erlaubten und Verbotenen gehorcht. Für 5:116 gibt es nichts dergleichen – und der Kontext (5:72–75) ist ausdrücklich eine Debatte über Göttlichkeit. Und wenn alles metaphorisch ist, dann beschreibt der Koran nirgends die Trinität.`,
      sources: [
        { kind: 'koran', work: 'Sure 9 (at-Tauba)', ref: '9:31', quote: `Sie haben sich ihre Gelehrten und Mönche zu Herren genommen neben Allah, und den Messias, den Sohn der Maria.`, original: `ittakhadhū aḥbārahum wa-ruhbānahum arbāban min dūni llāhi wa-l-masīḥa bna maryam`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/9/31' },
        { kind: 'hadith', work: 'Jami\' at-Tirmidhi', ref: '3095 (Kitab at-Tafsir, zu Sure 9; Hadith des ʿAdi ibn Hatim)', quote: `ʿAdi ibn Hatim: „Sie haben sie nicht angebetet." Der Prophet: „Doch – wenn sie ihnen etwas erlaubten, hielten sie es für erlaubt, und wenn sie etwas verboten, hielten sie es für verboten."`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/tirmidhi:3095', note: 'Nummer nach sunnah.com-Zählung geprüft (2026). Bewertung umstritten: Tirmidhi selbst nennt ihn „ḥasan gharīb", al-Albani „ḥasan", die Darussalam-Ausgabe „daʿīf" (Ghutaif ibn Aʿyan gilt als schwach). Dieselbe Deutung von 9:31 ist aber auch von Ibn ʿAbbas und in den großen Tafsir-Werken überliefert.' },
      ],
      followUps: [
        {
          id: 'dann-gilt-horn-b',
          objection: `Ja, der Koran kritisiert die religiöse Haltung, nicht die Dogmatik. Das ist seine Stärke.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Dann sind wir bei Horn B angekommen: Der Koran enthält keine Beschreibung und keine Widerlegung der Trinität von Vater, Sohn und Geist. Wenn du die Trinität ablehnen willst, musst du das mit der Bibel oder der Vernunft tun – nicht mit dem Koran. Darüber können wir gerne sprechen, aber dann bitte mit der Lehre, die wir wirklich vertreten.`,
          questionsBack: [`Welcher Vers im Koran richtet sich nach deiner Ansicht gegen die Lehre „ein Gott in drei Hypostasen: Vater, Sohn, Heiliger Geist"?`],
        },
      ],
    },
    {
      id: 'egal-trinitaet-ist-falsch',
      objection: `Ob der Koran die Trinität genau beschreibt oder nicht – sie ist trotzdem falsch. Zeig mir die Trinität in der Bibel.`,
      objectionBy: 'Zakir Naik',
      answer: `Gern – aber halten wir fest, was wir gerade festgestellt haben: Der Koran ist kein verlässlicher Zeuge für das, was Christen glauben. Für die biblische Grundlage: ein Gott (Dtn 6,4; Mk 12,29); der Vater ist Gott (1 Kor 8,6); das Wort ist Gott (Joh 1,1); der Geist ist Gott (Apg 5,3–4); und die drei werden in einem Namen genannt (Mt 28,19).`,
    },
  ],
  questionsToAsk: [
    `Wer sind nach dem Koran die „drei" in 5:73? Und warum argumentiert 5:75, dass Jesus und seine Mutter Speise aßen?`,
    `Wo erwähnt der Koran die christliche Formel „Vater, Sohn und Heiliger Geist"?`,
    `Welche Kirche hat jemals gelehrt, Gott habe durch eine Gefährtin einen Sohn bekommen (6:101)?`,
    `Wenn der Koran nur eine Sekte meint – auf welchen Vers stützt du dann deine Ablehnung der kirchlichen Trinität?`,
    `Hätte der allwissende Gott die Lehre, für die er Menschen verurteilt, nicht zutreffend beschreiben können?`,
  ],
  avoid: [
    `Nicht behaupten, der Koran sage wörtlich „Maria ist Teil der Trinität" – er sagt „mich und meine Mutter als zwei Götter" (5:116). Zitiere genau, sonst verlierst du an diesem Punkt.`,
    `Nicht leugnen, dass Christen Maria hoch verehren; erkläre den Unterschied zwischen Verehrung und Anbetung.`,
    `Die Kollyridianer nicht verschweigen – sprich sie selbst an, bevor der Gegner es tut, und zeige, dass die Kirche sie verurteilte.`,
  ],
  concessions: [
    `Volksfrömmigkeit kann in der Marienverehrung Formen annehmen, die für Außenstehende wie Anbetung wirken; die Kirche hat solche Übertreibungen selbst immer wieder korrigiert.`,
    `Es gibt eine respektable akademische Deutung (Reynolds, Griffith), nach der der Koran bewusst polemisch zuspitzt und nicht „unwissend" ist – aber auch sie bestätigt, dass der Koran nicht die kirchliche Lehre wiedergibt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Bible in Arabic: The Scriptures of the „People of the Book" in the Language of Islam', year: '2013', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'No God but One: Allah or Jesus?', year: '2016', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi (engl. A. Mingana, Woodbrooke Studies 2, 1928)', year: '781/782', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Trinität', 'Koran', 'Maria', 'Sure 5', 'Dilemma'],
  related: [
    'islam-trinitaet/trinitaet-ist-schirk',
    'islam-dilemma/das-islamische-dilemma',
    'islam-koran/koran-quellen',
    'islam-koran/koran-klar-vollstaendig',
    'heilige-ikonen/marienverehrung-goetzendienst',
  ],
};

export default claim;
