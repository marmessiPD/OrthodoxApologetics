import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'imputierte-gerechtigkeit',
  title: `„Rechtfertigung ist ein rein forensischer Akt – Christi Gerechtigkeit wird uns nur zugerechnet."`,
  proponents: [
    { name: 'Martin Luther', role: 'Reformator', work: 'Sermo de duplici iustitia (1519): die „fremde Gerechtigkeit" (iustitia aliena); „simul iustus et peccator" (Römerbriefvorlesung 1515/16)' },
    { name: 'Philipp Melanchthon', role: 'Reformator', work: 'Apologie der Confessio Augustana (1531), Art. IV: „rechtfertigen" heißt „gerecht sprechen"' },
    { name: 'Konkordienformel', role: 'Lutherische Bekenntnisschrift (1577)', work: 'Art. III: Rechtfertigung als Absolution und Zurechnung der Gerechtigkeit Christi' },
    { name: 'Johannes Calvin', role: 'Reformator in Genf', work: 'Institutio III,11,2: Rechtfertigung = Vergebung der Sünden und Zurechnung der Gerechtigkeit Christi' },
    { name: 'John Piper', role: 'Reformierter Prediger und Autor (USA)', work: 'Counted Righteous in Christ (2002); The Future of Justification (2007, gegen N. T. Wright)' },
  ],
  steelman: `Das griechische Verb *dikaioō* stammt aus der Gerichtssprache und heißt „gerecht sprechen", nicht „gerecht machen": Richter sollen „den Gerechten gerecht sprechen und den Schuldigen verdammen" (Dtn 25,1) – niemand meint, der Richter mache den Angeklagten innerlich gerecht. Paulus redet in genau diesen Kategorien: „Wer will die Auserwählten Gottes beschuldigen? Gott ist hier, der da gerecht macht. Wer will verdammen?" (Röm 8,33–34). In Röm 4 benutzt er elfmal das Buchhaltungswort *logizomai* – „zurechnen": Abraham wurde Gerechtigkeit zugerechnet, und selig ist der, „dem der Herr die Sünde nicht zurechnet" (Röm 4,8). Gott „macht die Gottlosen gerecht" (Röm 4,5) – die *Gottlosen*, nicht die schon Erneuerten. In 2 Kor 5,21 geschieht der „fröhliche Wechsel": Unsere Sünde wird Christus angerechnet, seine Gerechtigkeit uns. Wer dagegen die innere Erneuerung zur Grundlage der Rechtfertigung macht, lässt den Menschen auf seine eigene, immer unvollkommene Heiligung schauen statt auf Christus – und dann gibt es keine Heilsgewissheit, nur Angst. Der Christ ist zugleich gerecht und Sünder: gerecht durch die fremde Gerechtigkeit Christi, Sünder in sich selbst.`,
  biblical: {
    summary: `Die Schrift kennt das **gerichtliche Element** der Rechtfertigung: Gott spricht frei, vergibt, rechnet die Sünde nicht zu (Röm 4,7–8; 8,33). Aber sie bleibt dort nicht stehen. Gottes Urteil ist **schöpferisch** – wenn Gott spricht, geschieht es (Gen 1,3; Jes 55,11). Durch Adams Ungehorsam „sind viele Sünder geworden" – wirklich, nicht nur juristisch –, und ebenso „werden durch eines Gehorsam viele Gerechte" (Röm 5,19, griechisch *katastathēsontai*: „sie werden als Gerechte eingesetzt/gemacht"). Christus wurde für uns zur Sünde gemacht, „auf dass wir **würden** in ihm die Gerechtigkeit Gottes" (2 Kor 5,21). Paulus verbindet die Rechtfertigung mit Abwaschung und Geist: „Ihr seid abgewaschen, ihr seid geheiligt, ihr seid gerecht geworden durch den Namen des Herrn Jesus und durch den Geist unseres Gottes" (1 Kor 6,11). Und das Ziel ist, „teilhaftig zu werden der göttlichen Natur" (2 Petr 1,4).`,
    detail: `**Röm 6,7:** „Denn wer gestorben ist, der ist gerechtfertigt von der Sünde" (*dedikaiōtai*). Der Zusammenhang ist die Taufe (Röm 6,3–4): Wer mit Christus gestorben ist, ist nicht nur juristisch freigesprochen, sondern von der Herrschaft der Sünde befreit – das Wort „gerechtfertigt" hat hier offensichtlich eine verwandelnde Bedeutung.

**Röm 4 genau gelesen:** Was Abraham „zugerechnet" wird, ist sein **Glaube** („sein Glaube wird gerechnet zur Gerechtigkeit", Röm 4,5.9) – nicht die aktive Gesetzeserfüllung Christi, die auf sein Konto übertragen würde. Die Formel „die Gerechtigkeit Christi wird uns zugerechnet" steht so nicht im Neuen Testament; sie ist eine theologische Synthese der Reformationszeit.

**Phil 3,9–11:** Paulus will nicht „meine Gerechtigkeit aus dem Gesetz", sondern die Gerechtigkeit „von Gott" durch den Glauben – und fährt sofort fort: „zu erkennen ihn und die Kraft seiner Auferstehung und die Gemeinschaft seiner Leiden, dass ich seinem Tode ähnlich werde". Geschenkte Gerechtigkeit und verwandelnde Gemeinschaft gehören zusammen.

**Ehrlicher Hinweis:** Luther übersetzt in Phil 3,9 „die Gerechtigkeit, die von Gott dem Glauben zugerechnet wird" – das Wort „zugerechnet" steht dort im Griechischen nicht; es ist Luthers Deutung.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '5,19', quote: `Denn gleichwie durch eines Menschen Ungehorsam viel Sünder geworden sind, also auch durch eines Gehorsam werden viel Gerechte.`, original: `ὥσπερ γὰρ διὰ τῆς παρακοῆς τοῦ ἑνὸς ἀνθρώπου ἁμαρτωλοὶ κατεστάθησαν οἱ πολλοί, οὕτως καὶ διὰ τῆς ὑπακοῆς τοῦ ἑνὸς δίκαιοι κατασταθήσονται οἱ πολλοί`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '5,21', quote: `Denn er hat den, der von keiner Sünde wußte, für uns zur Sünde gemacht, auf daß wir würden in ihm die Gerechtigkeit, die vor Gott gilt.`, original: `ἵνα ἡμεῖς γενώμεθα δικαιοσύνη θεοῦ ἐν αὐτῷ`, translation: 'Luther 1912', status: 'verbatim', note: '„die vor Gott gilt" ist Luthers deutende Wiedergabe von „Gerechtigkeit Gottes".' },
      { kind: 'bibel', work: '1. Korinther', ref: '6,11', quote: `Und solche sind euer etliche gewesen; aber ihr seid abgewaschen, ihr seid geheiligt, ihr seid gerecht geworden durch den Namen des HERRN Jesu und durch den Geist unseres Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '6,7', quote: `Denn wer gestorben ist, der ist gerechtfertigt von der Sünde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Petrus', ref: '1,4', quote: `… durch welche uns die teuren und allergrößten Verheißungen geschenkt sind, nämlich, daß ihr dadurch teilhaftig werdet der göttlichen Natur, so ihr fliehet die vergängliche Lust der Welt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '4,5', quote: `Dem aber, der nicht mit Werken umgeht, glaubt aber an den, der die Gottlosen gerecht macht, dem wird sein Glaube gerechnet zur Gerechtigkeit.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche versteht das Heil als **Vereinigung mit Christus**: Vergebung der Sünden und Verwandlung des Menschen sind zwei Seiten desselben Geschenks. Gott spricht nicht nur gerecht, er **macht gerecht**, weil er uns in der Taufe mit Christus vereint, uns den Heiligen Geist schenkt und uns in den Sakramenten nährt. Die Kirche lehrt keine Selbsterlösung und keine Verdienste: Alles ist Gnade. Aber die Gnade bleibt nicht außerhalb des Menschen, sondern wohnt in ihm. Das Ziel ist die **Theosis** – die Teilhabe an Gottes Leben durch Gnade (2 Petr 1,4), nicht an seinem Wesen. „Er wurde Mensch, damit wir vergöttlicht würden" (Athanasius, De Inc. 54).`,
    detail: `**Die Väter:** Irenäus von Lyon: Christus „wurde, was wir sind, um uns zu vollenden, dass wir seien, was er ist" (Adv. Haer. V, Vorrede). Athanasius: Der Logos wurde Mensch, damit wir vergöttlicht würden. Kyrill von Alexandrien: Durch den Geist, der in uns wohnt, werden wir „Teilhaber der göttlichen Natur" und Christus gleichgestaltet. Chrysostomus zu 2 Kor 5,21: Paulus sagt nicht „Gerechte", sondern „Gerechtigkeit" – wir werden in Christus von Gottes eigener Gerechtigkeit durchdrungen.

**Papst Schenuda III.** hat in „Das Heil im orthodoxen Verständnis" und in seinen vergleichenden Schriften gegen die Engführung auf „allein durch den Glauben" Stellung bezogen: Das Heil wird empfangen durch Glauben, Taufe, Buße und ein Leben in der Gnade, in dem gute Werke Frucht und Mitwirkung sind.

**Eine überraschende Brücke:** Die finnische Lutherforschung um Tuomo Mannermaa hat gezeigt, dass Luther selbst stärker von der realen Gegenwart Christi im Glauben sprach („im Glauben selbst ist Christus gegenwärtig"), als es die spätere lutherische Orthodoxie mit ihrer rein forensischen Lehre tat. Schon im 16. Jahrhundert stritten Lutheraner darüber (Osiandrischer Streit).`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'V, Vorrede', year: 'um 180', quote: `… der um seiner unermesslichen Liebe willen wurde, was wir sind, um uns zu vollenden, dass wir seien, was er ist.`, original: `qui propter immensam suam dilectionem factus est quod sumus nos, uti nos perficeret esse quod est ipse`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '54,3', year: 'um 318', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, original: `αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis (Salvation in the Orthodox Concept)', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Tuomo Mannermaa', work: 'Der im Glauben gegenwärtige Christus. Rechtfertigung und Vergottung', year: '1989', status: 'paraphrase', note: 'Lutherischer Forscher; These einer realen Teilhabe an Christus bei Luther selbst.' },
    ],
  },
  quickAnswer: `Ja, Rechtfertigung hat eine gerichtliche Seite: Gott spricht frei und vergibt. Aber wenn Gott spricht, geschieht es – sein Wort ist schöpferisch. Paulus sagt, durch Christi Gehorsam „werden viele Gerechte" (Röm 5,19), wie wir durch Adam wirklich Sünder wurden, und Christus wurde zur Sünde gemacht, „damit wir würden in ihm die Gerechtigkeit Gottes" (2 Kor 5,21). Er verbindet Rechtfertigung mit Abwaschung und Geist (1 Kor 6,11; Tit 3,5–7). Gott deckt die Sünde nicht nur zu, er heilt uns von innen und schenkt uns Anteil an seinem Leben (2 Petr 1,4). Alles ist Gnade – aber Gnade, die verwandelt.`,
  keyPoints: [
    `**Zugeben:** Es gibt ein gerichtliches Element (Röm 4,7–8; 8,33) – aber nicht „rein" und nicht „nur".`,
    `**Gottes Urteil schafft, was es sagt:** Gen 1,3; Jes 55,11 – Gott erklärt niemanden für gerecht, ohne ihn gerecht zu machen.`,
    `**Röm 5,19 und 2 Kor 5,21:** „werden viele Gerechte", „damit wir würden" – real wie Adams Sünde real wirkte.`,
    `**Rechtfertigung und Erneuerung gehören zusammen:** 1 Kor 6,11; Röm 6,7; Tit 3,5–7.`,
    `**Röm 4:** Zugerechnet wird der *Glaube* Abrahams; die Formel „Christi Gerechtigkeit wird uns zugerechnet" steht so nicht im NT.`,
    `**Theosis:** Teilhabe an Gottes Leben aus Gnade (2 Petr 1,4; Irenäus, Athanasius, Kyrill) – nicht an seinem Wesen.`,
  ],
  argument: {
    name: 'Das Argument aus der Parallele Adam – Christus (Röm 5,19)',
    summary: 'Wie Adams Sünde uns wirklich verdarb, so macht Christi Gehorsam uns wirklich gerecht.',
    premises: [
      {
        text: 'P1: Paulus stellt die Wirkung Adams und die Wirkung Christi ausdrücklich parallel: „gleichwie … also auch" (Röm 5,19).',
        support: `Röm 5,12–21 ist durchgängig als Parallele und Überbietung gebaut („wie viel mehr").`,
      },
      {
        text: 'P2: Durch Adam wurden die Menschen nicht nur juristisch für Sünder erklärt, sondern gerieten wirklich unter die Macht von Sünde und Tod.',
        support: `Röm 5,12: „durch die Sünde der Tod, und ist also der Tod zu allen Menschen durchgedrungen"; Röm 7,14–24. Auch die Reformatoren lehren eine reale Verderbnis, nicht bloß eine angerechnete.`,
      },
      {
        text: 'P3: Also bewirkt Christi Gehorsam mindestens ebenso real, dass die Vielen gerecht werden – nicht nur, dass sie juristisch so betrachtet werden.',
        support: `Sonst wäre Christus schwächer als Adam; Paulus sagt aber, die Gnade sei „viel mächtiger" geworden (Röm 5,20).`,
      },
    ],
    conclusion: 'Also ist die Rechtfertigung nicht rein forensisch: Sie umfasst Freispruch und reale Erneuerung durch die Vereinigung mit Christus.',
  },
  voices: [
    {
      person: 'athanasius',
      role: 'als Lehrer der Menschwerdung',
      text: `Für Athanasius besteht das Problem des Menschen nicht nur in einer Schuld, die bezahlt werden muss, sondern im Verfall: Der Mensch, nach Gottes Bild geschaffen, zerfiel durch die Sünde in Tod und Verderben. Eine bloße Vergebung hätte die Schuld getilgt, aber nicht die Verderbnis geheilt. Deshalb wurde der Logos selbst Mensch, nahm unseren sterblichen Leib an, starb und erstand, um von innen her das Leben in die menschliche Natur zurückzubringen. Rechtfertigung ohne Erneuerung wäre für Athanasius eine halbe Erlösung.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '7; 44; 54', status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Theologe der Teilhabe im Geist',
      text: `Kyrill von Alexandrien betont in seinen Kommentaren zu Johannes und zu den Paulusbriefen, dass Christus uns nicht von außen gerecht spricht wie ein fremder Richter, sondern uns durch den Heiligen Geist mit sich vereint. Der Geist prägt uns das Bild des Sohnes ein, und so werden wir „Teilhaber der göttlichen Natur" (2 Petr 1,4). Die Eucharistie verbindet uns leiblich mit dem lebendigmachenden Fleisch des Logos. Gerechtigkeit ist für Kyrill nicht ein Kontostand, sondern Gemeinschaft mit dem, der die Gerechtigkeit selbst ist.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'bes. zu Joh 14–17', year: 'um 425', status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Ausleger von 2 Kor 5,21',
      text: `Chrysostomus staunt in seiner Auslegung von 2 Kor 5,21 über die Wortwahl des Paulus: Er sagt nicht, Gott habe den Sündlosen zum Sünder gemacht, sondern „zur Sünde"; und nicht, wir würden „Gerechte", sondern „Gerechtigkeit Gottes" – also etwas viel Größeres. Gottes Gerechtigkeit ist es, die uns ergreift und durchdringt, weil wir „in ihm" sind. Für Chrysostomus folgt daraus sofort die Mahnung, dieser Gnade würdig zu leben – nicht um sie zu verdienen, sondern weil man sie empfangen hat.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum 2. Korintherbrief', ref: 'Hom. 11', year: 'um 392', status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als Lehrer des orthodoxen Heilsverständnisses',
      text: `Papst Schenuda III. setzte sich in seinen Schriften zum Heil und in seinen vergleichenden Vorlesungen ausführlich mit der protestantischen Rechtfertigungslehre auseinander, die in Ägypten durch evangelische Missionen verbreitet wurde. Er betont, dass das Heil durch das Blut Christi geschenkt ist, aber in der Kirche empfangen und gelebt wird: durch Glauben, Taufe, Buße, Eucharistie und ein Leben in Heiligkeit. Gute Werke sind nicht Bezahlung, sondern Frucht des Glaubens und Mitwirkung mit der Gnade. Eine Rechtfertigung, die den Menschen innerlich unverändert lässt, entspricht für ihn nicht der Schrift.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis; Vergleichende Theologie', status: 'paraphrase' }],
    },
    {
      person: 'nt-wright',
      role: 'als anglikanischer Neutestamentler (für einen exegetischen Teilpunkt)',
      text: `N. T. Wright, kein Orthodoxer, sondern anglikanischer Bischof und Paulusforscher, kritisiert die klassische Vorstellung, die Gerechtigkeit Christi werde wie ein Gegenstand auf den Gläubigen übertragen. Im Bild des Gerichtssaals, so Wright, ergibt es keinen Sinn, dass der Richter seine eigene Gerechtigkeit an den Angeklagten weitergibt – Gerechtigkeit sei kein Stoff, der durch den Saal gereicht werden könne. Paulus spreche vielmehr davon, dass die Glaubenden „in Christus" sind und an seinem Tod und seiner Auferstehung Anteil haben. Wrights Gesamtentwurf (Rechtfertigung als Zugehörigkeit zum Bundesvolk) teilt die Orthodoxie nicht; sein Hinweis auf die Teilhabe „in Christus" deckt sich aber mit den Vätern.`,
      sources: [
        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'What Saint Paul Really Said', year: '1997', status: 'paraphrase', quote: `Im Gerichtssaal ergibt es keinen Sinn zu sagen, der Richter übertrage seine Gerechtigkeit auf Kläger oder Beklagten; Gerechtigkeit ist kein Gegenstand, keine Substanz und kein Gas, das man durch den Gerichtssaal reichen könnte.`, note: 'Vielzitierte Passage; hier sinngemäß wiedergegeben.' },
        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Justification. God’s Plan and Paul’s Vision', year: '2009', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'dikaioo-forensisch',
      objection: `„*Dikaioō* heißt im Griechischen ‚gerecht sprechen' – ein Gerichtsbegriff. Dtn 25,1: Der Richter spricht den Gerechten gerecht und verdammt den Schuldigen. Kein Richter macht jemanden innerlich gerecht."`,
      objectionBy: 'Reformierter Neutestamentler',
      answer: `Der Gerichtssinn ist in vielen Stellen da – das bestreiten wir nicht. Aber ein menschlicher Richter kann nur feststellen; Gottes Wort *schafft*, was es sagt: „Er sprach: Es werde Licht! Und es ward Licht" (Gen 1,3). Wenn Gott einen Gottlosen gerecht spricht, bleibt dieser nicht innerlich unverändert, als hätte Gott eine Fiktion ausgesprochen. Deshalb verbindet Paulus die Rechtfertigung mit Abwaschung und Geist (1 Kor 6,11) und mit dem Tod der Sünde in der Taufe (Röm 6,7).`,
      sources: [
        { kind: 'bibel', work: 'Jesaja', ref: '55,11', quote: `… also soll das Wort, so aus meinem Munde geht, auch sein. Es soll nicht wieder leer zu mir kommen, sondern tun, was mir gefällt, und soll ihm gelingen, dazu ich's sende.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'unterscheiden-nicht-trennen',
          objection: `„Du vermischst Rechtfertigung und Heiligung. Die Reformatoren haben beide nicht getrennt, aber klar unterschieden: Die Rechtfertigung ist Gottes Urteil, die Heiligung folgt daraus."`,
          objectionBy: 'Lutherischer Systematiker',
          answer: `Eine gedankliche Unterscheidung ist legitim. Aber die Schrift ordnet die Begriffe nicht so säuberlich: In 1 Kor 6,11 steht „geheiligt" sogar *vor* „gerecht geworden", und beides geschieht „durch den Geist unseres Gottes". In Tit 3,5–7 werden wir „durch das Bad der Wiedergeburt und Erneuerung des Heiligen Geistes" gerettet, „auf dass wir durch seine Gnade gerecht geworden" Erben seien. Die Bibel beschreibt ein einziges Geschehen der Vereinigung mit Christus – nicht zwei Stufen, von denen nur die erste rettet.`,
          followUps: [
            {
              id: 'taufe-nur-bild',
              objection: `„In 1 Kor 6,11 und Tit 3,5 ist die ‚Abwaschung' ein Bild für die innere Reinigung durch den Glauben, nicht die Wassertaufe."`,
              objectionBy: 'Baptistischer Theologe',
              answer: `Ananias sagt zu Paulus: „Steh auf und lass dich taufen und abwaschen deine Sünden" (Apg 22,16) – da ist die Wassertaufe gemeint. Petrus: „Lasse sich ein jeglicher taufen … zur Vergebung der Sünden" (Apg 2,38). Die ganze alte Kirche – und übrigens auch Luther im Kleinen Katechismus – hat diese Stellen auf die Taufe bezogen. Ein reines Bild würde Paulus nicht „Bad der Wiedergeburt" nennen.`,
              sources: [
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '22,16', quote: `Und nun, was verziehst du? Stehe auf und laß dich taufen und abwaschen deine Sünden und rufe an den Namen des HERRN!`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'taufe-als-werk',
                  objection: `„Wenn die Taufe zur Rechtfertigung gehört, wird sie zum menschlichen Werk, und die Gnade ist nicht mehr Gnade."`,
                  objectionBy: 'Baptistischer Theologe',
                  answer: `Die Taufe ist nicht unser Werk, sondern Gottes Werk an uns: Tit 3,5 sagt ausdrücklich „nicht um der Werke willen … sondern nach seiner Barmherzigkeit machte er uns selig durch das Bad der Wiedergeburt". Ein Säugling, der getauft wird, leistet nichts – er empfängt. Gerade die Taufe zeigt, dass das Heil Geschenk ist. Luther selbst lehrte, die Taufe „wirkt Vergebung der Sünden".`,
                  sources: [
                    { kind: 'gegner', author: 'Martin Luther', work: 'Kleiner Katechismus', ref: 'Viertes Hauptstück (Taufe)', year: '1529', status: 'paraphrase', quote: `Die Taufe wirkt Vergebung der Sünden, erlöst vom Tod und Teufel und gibt die ewige Seligkeit allen, die es glauben.` },
                  ],
                  questionsBack: [`Leistet ein Säugling bei der Taufe ein Werk – oder empfängt er nur?`],
                },
              ],
            },
          ],
        },
        {
          id: 'roemer-4-logizomai',
          objection: `„Röm 4 spricht elfmal von *logizomai* – zurechnen. Das ist Buchhaltungssprache. Abraham wurde Gerechtigkeit angerechnet, die er in sich nicht hatte."`,
          objectionBy: 'Reformierter Neutestamentler',
          answer: `Genau lesen: Angerechnet wird Abrahams **Glaube** – „sein Glaube wird gerechnet zur Gerechtigkeit" (Röm 4,5.9.22). Paulus sagt nicht, Christi Gesetzesgehorsam werde auf Abrahams Konto gebucht. Und dieser Glaube war lebendig: Abraham glaubte dem Gott, „der die Toten lebendig macht" (Röm 4,17), und bewährte ihn, als er Isaak opferte (Jak 2,21–23; Hebr 11,17). Gott rechnet einen lebendigen, vertrauenden Glauben, der ihn mit dem Gläubigen verbindet, als Gerechtigkeit – weil in diesem Glauben Gemeinschaft mit ihm beginnt.`,
        },
      ],
    },
    {
      id: 'froehlicher-wechsel',
      objection: `„2 Kor 5,21 ist der ‚fröhliche Wechsel': Unsere Sünde wurde Christus zugerechnet, seine Gerechtigkeit uns. Er wurde ja auch nicht wirklich zum Sünder – also werden wir auch nicht wirklich gerecht, sondern nur durch Zurechnung."`,
      objectionBy: 'Lutherischer Prediger',
      answer: `Der Text sagt: „damit wir *würden* (*genōmetha*) in ihm die Gerechtigkeit Gottes" – nicht „damit wir als gerecht betrachtet würden". Und Christus trug unsere Sünde wirklich: nicht, indem er sündigte, sondern indem er unsere Lage, unseren Fluch und unseren Tod auf sich nahm (Gal 3,13). Ebenso empfangen wir seine Gerechtigkeit wirklich: nicht aus uns, sondern „in ihm", durch die Vereinigung mit ihm. Der Tausch ist real – gerade das macht ihn so fröhlich.`,
      followUps: [
        {
          id: 'christus-suender',
          objection: `„Wenn der Tausch ‚real' ist – wurde Christus dann wirklich ein Sünder? Das ist absurd. Also muss es sich um Zurechnung handeln."`,
          objectionBy: 'Lutherischer Prediger',
          answer: `Nein, Christus „wusste von keiner Sünde". Viele Väter und Ausleger verstehen „zur Sünde gemacht" im Sinn des alttestamentlichen Sündopfers – im Hebräischen bedeutet *chatta't* sowohl „Sünde" als auch „Sündopfer". Christus wurde das Opfer für unsere Sünde und trug ihre Folgen bis in den Tod. Real ist nicht, dass er sündig wurde, sondern dass er unsere sterbliche, verfluchte Lage annahm. So ist auch bei uns real, dass wir in ihm neues Leben empfangen – nicht, dass wir aus uns selbst gerecht wären.`,
          followUps: [
            {
              id: 'wright-umstritten',
              objection: `„Du berufst dich auf N. T. Wright – aber Wright ist hoch umstritten, John Piper und viele andere haben ihn widerlegt."`,
              objectionBy: 'Reformierter Theologe',
              answer: `Ich folge Wright nicht in seinem Gesamtentwurf; die orthodoxe Kirche hat ihre eigene Lehre aus den Vätern. Ich nenne ihn nur für einen einzigen Punkt: dass die Formel „die Gerechtigkeit Christi wird uns zugerechnet" so nicht bei Paulus steht, sondern eine spätere Synthese ist. Das räumen auch Verteidiger der Zurechnungslehre ein, die sie aus mehreren Stellen zusammen ableiten. Und die Väter des 2. bis 5. Jahrhunderts haben Paulus durchgehend im Sinn der Teilhabe gelesen.`,
              questionsBack: [`Kannst du mir eine Stelle zeigen, an der Paulus wörtlich sagt, Christi Gerechtigkeit werde uns zugerechnet?`],
            },
          ],
        },
        {
          id: 'phil-3-fremde-gerechtigkeit',
          objection: `„Paulus sagt doch: ‚nicht meine Gerechtigkeit, die aus dem Gesetz, sondern die durch den Glauben an Christus' (Phil 3,9). Das ist die fremde Gerechtigkeit!"`,
          objectionBy: 'Lutherischer Prediger',
          answer: `Ja – die Gerechtigkeit kommt „von Gott", nicht aus eigener Gesetzesleistung. Darin sind wir uns einig. Aber Paulus fährt im nächsten Vers fort: „zu erkennen ihn und die Kraft seiner Auferstehung und die Gemeinschaft seiner Leiden, dass ich seinem Tode ähnlich werde" (Phil 3,10). Die geschenkte Gerechtigkeit führt in Gemeinschaft und Verwandlung. „Fremd" heißt: nicht aus mir – nicht: bleibt außerhalb von mir. Übrigens steht das Wort „zugerechnet" in Luthers Übersetzung von Phil 3,9 nicht im griechischen Text.`,
        },
      ],
    },
    {
      id: 'heilsgewissheit',
      objection: `„Wenn meine Rechtfertigung von meiner inneren Erneuerung abhängt, kann ich mir nie sicher sein. Ich muss dann auf mich schauen statt auf Christus – das führt zur Angst, die Luther im Kloster hatte."`,
      objectionBy: 'Lutherischer Seelsorger',
      answer: `Unsere Gewissheit ruht auf Christus, seinen Verheißungen und seinen Gaben – auf der Taufe, der Vergebung in der Beichte, der Eucharistie –, nicht auf einer Selbstprüfung unserer Fortschritte. Aber die Schrift kennt auch die Prüfung des Lebens: „Daran merken wir, dass wir ihn kennen, so wir seine Gebote halten" (1 Joh 2,3), und Petrus mahnt, „eure Berufung und Erwählung festzumachen" (2 Petr 1,10). Vertrauen und Demut gehören zusammen – das ist keine Angst, sondern Leben mit Gott.`,
      sources: [
        { kind: 'bibel', work: '1. Johannes', ref: '2,3', quote: `Und an dem merken wir, daß wir ihn kennen, so wir seine Gebote halten.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'simul-iustus',
          objection: `„Der Christ ist zugleich gerecht und Sünder – Paulus selbst klagt in Röm 7: ‚Ich elender Mensch!' Innerlich bleiben wir Sünder, gerecht sind wir nur in Christus."`,
          objectionBy: 'Lutherischer Systematiker',
          answer: `Dass wir bis zum Tod Sünder bleiben, die Gottes Erbarmen brauchen, bekennt die orthodoxe Kirche in jedem Gebet: „Herr Jesus Christus, erbarme dich meiner, des Sünders." Aber nicht, dass wir nur durch Erklärung gerecht wären. Viele Väter lesen Röm 7 als Beschreibung des Menschen unter dem Gesetz ohne den Geist – und Röm 8 als Antwort: „Das Gesetz des Geistes … hat mich frei gemacht" (Röm 8,2), damit „die Gerechtigkeit, vom Gesetz erfordert, in uns erfüllt würde" (Röm 8,4).`,
          followUps: [
            {
              id: 'roemer-8-4-fuer-uns',
              objection: `„Röm 8,4 meint: Christus hat das Gesetz *für* uns erfüllt. Nicht wir erfüllen es."`,
              objectionBy: 'Lutherischer Systematiker',
              answer: `Der Vers sagt ausdrücklich „*in* uns, die wir nun nicht nach dem Fleisch wandeln, sondern nach dem Geist". Paulus redet vom Wandel, also vom Leben der Christen. Natürlich ist es Christus, der durch den Geist in uns wirkt – aber er wirkt eben *in* uns. Genau das meint die Orthodoxie mit Synergie: Gottes Gnade wirkt alles, und wir wirken mit (Phil 2,12–13).`,
              sources: [
                { kind: 'bibel', work: 'Römer', ref: '8,4', quote: `… auf daß die Gerechtigkeit, vom Gesetz erfordert, in uns erfüllt würde, die wir nun nicht nach dem Fleisch wandeln, sondern nach dem Geist.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'theosis-pantheismus',
      objection: `„Eure ‚Theosis' – Vergöttlichung des Menschen – klingt nach heidnischer Mystik oder Pantheismus. Der Mensch wird nie Gott!"`,
      objectionBy: 'Evangelikaler Apologet',
      answer: `Richtig, der Mensch wird nie Gott dem Wesen nach – der Unterschied zwischen Schöpfer und Geschöpf bleibt ewig. Theosis heißt: durch Gnade Anteil an Gottes Leben, Heiligkeit und Unvergänglichkeit erhalten – genau was 2 Petr 1,4 „teilhaftig der göttlichen Natur" nennt und Jesus mit „ich in ihnen und du in mir" (Joh 17,23) beschreibt. Irenäus sagt: Christus wurde, was wir sind, damit wir werden, was er ist – durch Gnade, nicht durch Natur.`,
      followUps: [
        {
          id: 'theosis-ist-heiligung',
          objection: `„2 Petr 1,4 handelt von der Heiligung, nicht von der Rechtfertigung. Das gehört in ein anderes Kapitel der Dogmatik."`,
          objectionBy: 'Lutherischer Systematiker',
          answer: `Die Aufteilung in getrennte Dogmatik-Kapitel ist westlich und späteren Datums; die Schrift und die Väter sehen das Heil als ein Ganzes: Vereinigung mit Christus, die Vergebung, Erneuerung und Vollendung umfasst. Bemerkenswert ist, dass die finnische Lutherforschung (Mannermaa) gezeigt hat, dass Luther selbst sagte, im Glauben sei Christus wirklich gegenwärtig – eine Nähe zur Theosis, die die spätere lutherische Schultheologie verdrängte.`,
        },
      ],
    },
    {
      id: 'jakobus-vor-menschen',
      objection: `„Jak 2,24 meint die Rechtfertigung vor den Menschen, die den Glauben an den Werken erkennen – nicht die Rechtfertigung vor Gott."`,
      objectionBy: 'Reformierter Prediger',
      answer: `Jakobus sagt, Abraham sei „durch die Werke gerecht geworden, da er seinen Sohn Isaak auf dem Altar opferte" (Jak 2,21) – auf dem Berg Morija war kein menschlicher Zuschauer, nur Gott. Und er schließt: „So sehet ihr nun, dass der Mensch durch die Werke gerecht wird, nicht durch den Glauben allein" (Jak 2,24) – die einzige Stelle der Bibel, an der „Glaube allein" vorkommt, und sie wird verneint.`,
      sources: [
        { kind: 'bibel', work: 'Jakobus', ref: '2,24', quote: `So sehet ihr nun, daß der Mensch durch die Werke gerecht wird, nicht durch den Glauben allein.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'paulus-gegen-jakobus',
          objection: `„Dann widersprechen sich Paulus und Jakobus. Luther nannte den Jakobusbrief nicht umsonst eine ‚stroherne Epistel'."`,
          objectionBy: 'Lutherischer Theologe',
          answer: `Sie widersprechen sich nicht, wenn man beide ernst nimmt: Paulus verwirft „Werke des Gesetzes" als Weg, sich vor Gott Ansprüche zu erwerben (Röm 3,28); Jakobus verwirft einen toten Glauben ohne Liebe (Jak 2,17). Paulus selbst kennt nur den „Glauben, der durch die Liebe tätig ist" (Gal 5,6). Dass Luther den Jakobusbrief abwertete, weil er nicht zu seiner Lehre passte, zeigt eher ein Problem der Lehre als des Briefes.`,
          sources: [
            { kind: 'bibel', work: 'Galater', ref: '5,6', quote: `Denn in Christo Jesu gilt weder Beschneidung noch unbeschnitten sein etwas, sondern der Glaube, der durch die Liebe tätig ist.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'gegner', author: 'Martin Luther', work: 'Vorrede zum Neuen Testament', year: '1522', status: 'paraphrase', quote: `Darum ist Sankt Jakobs Epistel eine rechte stroherne Epistel gegen sie (die anderen Hauptbücher), denn sie doch keine evangelische Art an ihr hat.`, note: 'In späteren Ausgaben der Vorrede strich Luther diesen Satz.' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn wir durch Adam wirklich Sünder wurden – warum sollten wir durch Christus nur juristisch gerecht werden (Röm 5,19)?`,
    `Was bedeutet „damit wir würden in ihm die Gerechtigkeit Gottes" (2 Kor 5,21) – „würden" oder „betrachtet würden"?`,
    `Wo sagt Paulus wörtlich, dass die Gerechtigkeit Christi uns zugerechnet wird?`,
    `Warum steht in 1 Kor 6,11 „geheiligt" vor „gerecht geworden", und warum geschieht beides „durch den Geist"?`,
    `Spricht Gott je etwas aus, das nicht wirklich wird?`,
  ],
  avoid: [
    `Nicht behaupten, Protestanten lehrten, gute Werke seien egal – die Reformatoren betonten die Heiligung als notwendige Frucht.`,
    `Das gerichtliche Element nicht leugnen; Vergebung und Freispruch sind biblisch und orthodox.`,
    `Theosis nie so formulieren, dass der Mensch Gottes Wesen erhält oder „ein Gott" wird.`,
    `N. T. Wright nicht als orthodoxen Zeugen ausgeben; er ist nur für einzelne exegetische Beobachtungen hilfreich.`,
  ],
  concessions: [
    `*Dikaioō* hat in vielen Stellen einen gerichtlichen Sinn, und *logizomai* in Röm 4 ist echte Zurechnungssprache.`,
    `Die Reformatoren haben Rechtfertigung und Heiligung nicht getrennt, sondern unterschieden; sie lehrten, dass wahrer Glaube immer gute Werke hervorbringt.`,
    `Luther selbst war nach neuerer Forschung (Mannermaa) teilweise näher an einer Teilhabe-Theologie als die spätere lutherische Orthodoxie.`,
  ],
  furtherReading: [
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis (Salvation in the Orthodox Concept)', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos', year: 'um 318', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Tuomo Mannermaa', work: 'Der im Glauben gegenwärtige Christus', year: '1989', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Justification. God’s Plan and Paul’s Vision', year: '2009', status: 'paraphrase' },
    { kind: 'gegner', author: 'John Piper', work: 'The Future of Justification. A Response to N. T. Wright', year: '2007', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Rechtfertigung', 'Imputation', 'Theosis', 'Luther', 'Paulus', 'Römerbrief', '2 Kor 5,21'],
  related: ['sola-fide/allein-durch-glauben', 'sola-fide/werke-sind-werkgerechtigkeit', 'sakramente/taufe-nur-symbol-keine-kindertaufe', 'reformation/reformation-noetig', 'calvinismus/voellige-verdorbenheit'],
};

export default claim;
