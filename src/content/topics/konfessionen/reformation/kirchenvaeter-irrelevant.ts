import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kirchenvaeter-irrelevant',
  title: `„Die Kirchenväter sind nur Menschen – ihre Meinung ist für uns nicht verbindlich."`,
  proponents: [
    { name: 'Martin Luther', role: 'Reformator', work: 'Leipziger Disputation (1519) und Reichstag zu Worms (1521): Päpste und Konzilien können irren' },
    { name: 'Westminster Confession of Faith', role: 'Reformiertes Bekenntnis (1646)', work: 'Kap. 1,10: Konzilsbeschlüsse und Meinungen alter Schriftsteller sind an der Schrift zu prüfen' },
    { name: 'Restorationsbewegung und Brüdergemeinden', role: 'Freikirchliche Biblizisten', work: '„Kein Bekenntnis außer der Bibel" („No creed but the Bible")' },
    { name: 'Adolf von Harnack', role: 'Liberaler Dogmenhistoriker', work: 'Lehrbuch der Dogmengeschichte (1886–1890): Dogma als „Werk des griechischen Geistes auf dem Boden des Evangeliums"' },
  ],
  steelman: `Nur die Heilige Schrift ist von Gott eingegeben (2 Tim 3,16). Die Kirchenväter waren fromme, aber fehlbare Menschen – und sie widersprechen sich ständig: Papias und Irenäus erwarteten ein tausendjähriges irdisches Reich, Cyprian bestand gegen den Bischof von Rom auf der Wiedertaufe von Ketzern, Origenes lehrte die Präexistenz der Seelen, Tertullian wurde Montanist, Augustinus ließ ungetaufte Kinder in die Verdammnis gehen. Welche Väter gelten, und wer entscheidet das? Jesus selbst sagt: „Ihr sollt niemand Vater heißen auf Erden" (Mt 23,9) und warnt vor Menschensatzungen (Mk 7,8). Paulus warnt vor Philosophie und „der Menschen Lehre" (Kol 2,8) – und tatsächlich haben die Väter das schlichte Evangelium mit griechischer Philosophie vermischt, wie Harnack gezeigt hat. Die Beröer prüften sogar die Predigt des Paulus an der Schrift (Apg 17,11); um wie viel mehr müssen wir die Väter prüfen. Wo sie mit der Bibel übereinstimmen, sind sie überflüssig; wo sie ihr widersprechen, sind sie falsch. Also sind sie für den Glauben nicht verbindlich.`,
  biblical: {
    summary: `Die Schrift selbst gebietet, auf die zu achten, die uns den Glauben überliefert haben: „Gedenket an eure Lehrer, die euch das Wort Gottes gesagt haben; ihr Ende schauet an und folget ihrem Glauben nach" (Hebr 13,7). Paulus beschreibt eine Kette der Überlieferung: „Was du von mir gehört hast durch viele Zeugen, das befiehl treuen Menschen, die da tüchtig sind, auch andere zu lehren" (2 Tim 2,2), und gebietet, an den Überlieferungen festzuhalten, „es sei durch unser Wort oder Brief" (2 Thess 2,15). Die Kirche ist „Pfeiler und Grundfeste der Wahrheit" (1 Tim 3,15), und Christus verheißt ihr den Geist, der „in alle Wahrheit leiten" wird (Joh 16,13). Die Väter sind diejenigen, die diese Überlieferung empfangen, bewahrt und gegen Irrlehren verteidigt haben.`,
    detail: `**Mt 23,9 im Kontext:** Jesus verbietet im selben Atemzug, sich „Meister" bzw. „Lehrer" nennen zu lassen (Mt 23,8.10). Gemeint ist der Hochmut, der Menschen an die Stelle Gottes setzt – nicht jede Anrede. Paulus nennt sich selbst Vater: „Ich habe euch gezeugt in Christo Jesu durchs Evangelium" (1 Kor 4,15); Johannes schreibt „euch Vätern" (1 Joh 2,13); Stephanus redet den Hohen Rat mit „liebe Brüder und Väter" an (Apg 7,2).

**Apg 17,11:** Die Beröer prüften die mündliche Predigt des Paulus am Alten Testament – und nahmen sie an. Sie lehnten mündliche apostolische Lehre nicht ab, weil sie nicht „Schrift" war. Genau das tut die orthodoxe Kirche mit den Vätern: Sie prüft sie an der Schrift und findet in ihrem gemeinsamen Zeugnis die apostolische Lehre.

**Kol 2,8** warnt vor Philosophie „nach der Menschen Lehre und nach der Welt Satzungen, und nicht nach Christo". Die Väter benutzten philosophische Begriffe, um Christus gegen Irrlehrer zu bekennen – das ist das Gegenteil von Philosophie „nicht nach Christus".`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '13,7', quote: `Gedenket an eure Lehrer, die euch das Wort Gottes gesagt haben; ihr Ende schauet an und folget ihrem Glauben nach.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '2,2', quote: `Und was du von mir gehört hast durch viele Zeugen, das befiehl treuen Menschen, die da tüchtig sind, auch andere zu lehren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Thessalonicher', ref: '2,15', quote: `So stehet nun, liebe Brüder, und haltet an den Satzungen, darin ihr gelehrt seid, es sei durch unser Wort oder Brief.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '4,15', quote: `Denn ob ihr gleich zehntausend Zuchtmeister hättet in Christo, so habt ihr doch nicht viele Väter; denn ich habe euch gezeuget in Christo Jesu durchs Evangelium.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Judas', ref: '3', quote: `… daß ihr für den Glauben kämpfet, der einmal den Heiligen übergeben ist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt: Kein einzelner Vater ist unfehlbar, und keiner steht über der Schrift. Verbindlich ist nicht die Privatmeinung eines Vaters, sondern der **Konsens der Väter** (*consensus patrum*) – das, was die Kirche „überall, immer und von allen" geglaubt hat (Vinzenz von Lérins, 434). Die Väter sind keine zusätzliche Offenbarung, sondern **Zeugen und Ausleger** der einen apostolischen Überlieferung, aus der auch die Schrift kommt. Ihnen verdanken wir den Kanon des Neuen Testaments (der hl. Athanasius nannte 367 als Erster genau die 27 Bücher), die Begriffe der Dreieinigkeit (Nizäa 325, Athanasius, die Kappadokier) und das Bekenntnis zu Christus (Ephesus 431, Kyrill). Wer die Väter für irrelevant erklärt, sägt an dem Ast, auf dem er sitzt.`,
    detail: `**Vinzenz von Lérins** unterscheidet im Commonitorium zwischen der persönlichen Meinung einzelner Lehrer – selbst großer und heiliger Männer –, die irren können, und dem, was die Kirche überall, immer und von allen geglaubt hat. Er nennt ausdrücklich Beispiele großer Lehrer, die in einzelnen Punkten irrten. Gerade die Väter selbst lehren also Unterscheidung.

**Irenäus von Lyon** (um 180) verweist gegen die Gnostiker auf die Kette der Bischöfe, die die apostolische Lehre öffentlich weitergaben, und auf Polykarp, der von den Aposteln gelernt hatte. Selbst wenn die Apostel keine Schriften hinterlassen hätten, so Irenäus, müsste man der Überlieferung folgen, die sie den Kirchen anvertrauten.

**Die koptische Praxis:** Vater Tadros Malaty hat einen patristischen Kommentar zur ganzen Bibel verfasst – Vers für Vers mit den Auslegungen der Väter. Das ist der koptische Weg: die Schrift nicht allein, aber immer zuerst, gelesen mit denen, die sie vor uns gelebt haben. Die Kirche verehrt Athanasius, Kyrill, Basilius, Gregor und Chrysostomus als Heilige; Origenes und Tertullian zitiert sie für die Apologetik, nicht als Lehrautorität.`,
    sources: [
      { kind: 'kirchenvater', author: 'Vinzenz von Lérins', work: 'Commonitorium', ref: '2,5–6', year: '434', quote: `In der katholischen Kirche selbst ist größte Sorgfalt darauf zu verwenden, dass wir festhalten, was überall, was immer, was von allen geglaubt worden ist.`, original: `quod ubique, quod semper, quod ab omnibus creditum est`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Die lateinische Kernformel ist wörtlich; die Abschnittszählung variiert je nach Ausgabe (2,3 bzw. 2,6).' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'III,3,1–4; III,4,1', year: 'um 180', status: 'paraphrase', quote: `Auch wenn die Apostel uns keine Schriften hinterlassen hätten, müssten wir der Ordnung der Überlieferung folgen, die sie denen übergaben, denen sie die Kirchen anvertrauten.` },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Athanasius zählt die 27 Bücher des Neuen Testaments auf, nennt sie „Quellen des Heils" und mahnt, niemand solle ihnen etwas hinzufügen oder wegnehmen.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Tadros Yacoub Malaty', work: 'Patristischer Kommentar zur Heiligen Schrift', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Einverstanden: Kein Kirchenvater ist unfehlbar, und keiner steht über der Bibel. Aber die Bibel selbst sagt: „Gedenket an eure Lehrer … und folget ihrem Glauben nach" (Hebr 13,7). Verbindlich ist nicht die Einzelmeinung, sondern das, was die Kirche „überall, immer und von allen" geglaubt hat. Und du verlässt dich selbst auf die Väter: Den Kanon des Neuen Testaments hat zuerst der koptische Papst Athanasius 367 mit genau 27 Büchern aufgelistet, und die Lehre von der Dreieinigkeit, die du bekennst, haben die Väter gegen Arius formuliert – der sich ebenfalls nur auf die Bibel berief.`,
  keyPoints: [
    `**Zugeben:** Einzelne Väter irrten; keiner ist inspiriert wie die Schrift.`,
    `**Verbindlich ist der Konsens:** „quod ubique, quod semper, quod ab omnibus" (Vinzenz von Lérins).`,
    `**Biblischer Auftrag:** Hebr 13,7; 2 Tim 2,2; 2 Thess 2,15; Jud 3 – die Überlieferung ehren und bewahren.`,
    `**Unbewusste Abhängigkeit:** Kanon (Athanasius 367), Dreieinigkeit (Nizäa 325), Christologie (Ephesus 431) – Protestanten übernehmen das Urteil der Väter.`,
    `**Auch die Reformatoren beriefen sich auf die Väter:** Das Augsburger Bekenntnis beansprucht Übereinstimmung mit der alten Kirche; die Konkordienformel enthält einen Katalog von Väterzeugnissen.`,
    `**Mt 23,9 verbietet Hochmut, nicht Väter:** Paulus nennt sich selbst „Vater" (1 Kor 4,15).`,
  ],
  argument: {
    name: 'Das Argument aus dem Kanon und dem Trinitätsdogma',
    summary: 'Wer den Kanon und das Trinitätsdogma annimmt, nimmt das Urteil der Väter an – und kann es nicht grundsätzlich für unverbindlich erklären.',
    premises: [
      {
        text: 'P1: Der Umfang des neutestamentlichen Kanons steht nicht in der Bibel selbst; es gibt kein inspiriertes Inhaltsverzeichnis.',
        support: `Kein biblisches Buch zählt die 27 Bücher auf. Über Hebräer, Jakobus, 2 Petrus, 2–3 Johannes, Judas und Offenbarung wurde in der Alten Kirche diskutiert; Luther selbst zweifelte noch an Jakobus, Hebräer, Judas und Offenbarung.`,
      },
      {
        text: 'P2: Die Kirche der Väter hat diesen Kanon erkannt und festgehalten (Athanasius 367, Synoden des 4. Jh.); ebenso hat sie die Lehre von der Dreieinigkeit gegen Arius formuliert, der sich auf die Schrift berief.',
        support: `39. Osterfestbrief des Athanasius; Nizäa 325; Konstantinopel 381. Arius stützte sich auf Spr 8,22 und Joh 14,28.`,
      },
      {
        text: 'P3: Protestanten nehmen diesen Kanon und diese Trinitätslehre als verbindlich an.',
        support: `Alle großen protestantischen Bekenntnisse bekennen das Nizänum und den 27-Bücher-Kanon.`,
      },
    ],
    conclusion: 'Also ist das Urteil der Väter für Protestanten faktisch verbindlich – und die Frage ist nicht ob, sondern wie konsequent man ihm folgt.',
  },
  voices: [
    {
      person: 'vinzenz-lerin',
      role: 'als Theologe der Unterscheidung',
      text: `Vinzenz stellte 434 genau die Frage, die heute gestellt wird: Wenn alle Häretiker sich auf die Schrift berufen – wie erkennt man den wahren Glauben? Seine Antwort: Die Schrift ist vollkommen und genügt, aber weil sie verschieden ausgelegt wird, muss man sie nach dem Verständnis der Kirche lesen – nach dem, was überall, immer und von allen geglaubt wurde. Zugleich warnt er, auch große Lehrer könnten in Einzelfragen irren; dann gilt nicht ihre Meinung, sondern der Konsens. Und er unterscheidet echten Fortschritt (Wachstum im Verständnis, wie ein Kind zum Mann wird) von Veränderung des Glaubens.`,
      sources: [{ kind: 'kirchenvater', author: 'Vinzenz von Lérins', work: 'Commonitorium', ref: '2; 23', year: '434', status: 'paraphrase' }],
    },
    {
      person: 'irenaeus',
      role: 'als Schüler Polykarps und Verteidiger gegen die Gnosis',
      text: `Irenäus hörte als junger Mann Polykarp, der von Johannes und anderen Augenzeugen gelernt hatte. Gegen die Gnostiker, die ihre eigenen Auslegungen und Geheimlehren hatten, verwies er auf die öffentliche Überlieferung der Kirchen: In Rom, Smyrna, Ephesus und überall lehren die Nachfolger der Apostel denselben Glauben. Die Schrift, so Irenäus, gehört der Kirche; außerhalb ihrer Überlieferung wird sie zu einem Mosaik, das man beliebig neu zusammensetzen kann – aus einem Königsbild wird dann ein Fuchs.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'I,8,1 (Mosaik-Gleichnis); III,3–4', year: 'um 180', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als koptischer Papst, der den Kanon bezeugte',
      text: `Athanasius ist für Protestanten ein unbequemer Zeuge: Derselbe Mann, der 367 als Erster genau die 27 Bücher des Neuen Testaments als kanonisch aufzählte, verteidigte die Gottheit Christi gegen Arius, lebte mit den Mönchen der Wüste, schrieb die Vita des Antonius, verehrte die Märtyrer und feierte die Liturgie der alexandrinischen Kirche. Wer seinem Urteil über den Kanon vertraut, kann ihn nicht in allem anderen für einen fehlbaren Privatmann erklären, dessen Glaube nichts zählt.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief; Reden gegen die Arianer', year: '356–367', status: 'paraphrase' }],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Patristiker',
      text: `Vater Tadros Malaty hat mit seinem vielbändigen patristischen Kommentar zur ganzen Bibel gezeigt, wie die koptische Kirche die Schrift liest: Vers für Vers, in Gemeinschaft mit Athanasius, Kyrill, Chrysostomus, Augustinus, Ephräm und vielen anderen. Die Väter stehen dabei nicht über der Schrift, sondern unter ihr – als die ersten und treuesten Hörer. Wer mit ihnen liest, liest nicht weniger biblisch, sondern biblischer, weil er vor den Kurzschlüssen des eigenen Zeitgeistes bewahrt wird.`,
      sources: [{ kind: 'koptisch', author: 'Tadros Yacoub Malaty', work: 'Patristischer Kommentar zur Heiligen Schrift', status: 'paraphrase' }],
    },
    {
      person: 'florovsky',
      role: 'als Theologe der „neopatristischen Synthese"',
      text: `Georges Florovsky betonte, dass die Väter nicht als Sammlung alter Zitate, sondern als lebendige Gemeinschaft des Glaubens zu verstehen sind. Es gehe darum, den „Sinn der Väter" zu erwerben – ihre Weise, die Schrift zu lesen, zu beten und Christus zu bekennen. Tradition ist für ihn kein zweiter Offenbarungsstrom neben der Schrift, sondern die im Heiligen Geist richtig verstandene Schrift. Wer die Väter verwirft, verliert nicht „Menschenmeinungen", sondern den Zusammenhang, in dem die Schrift entstanden ist und gelesen wurde.`,
      sources: [{ kind: 'fachliteratur', author: 'Georges Florovsky', work: 'Bible, Church, Tradition. An Eastern Orthodox View', year: '1972', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'nur-menschen',
      objection: `„Die Väter waren fehlbare Menschen. Nur die Bibel ist von Gott eingegeben (2 Tim 3,16). Warum sollten ihre Meinungen für mich verbindlich sein?"`,
      objectionBy: 'Evangelikaler Bibellehrer',
      answer: `Einverstanden: Kein einzelner Vater ist unfehlbar, und keiner steht über der Schrift. Verbindlich ist nicht die Meinung eines Einzelnen, sondern das gemeinsame Zeugnis der Kirche – was „überall, immer und von allen" geglaubt wurde. Die Bibel selbst sagt: „Gedenket an eure Lehrer … folget ihrem Glauben nach" (Hebr 13,7). Und 2 Tim 3,16 sagt, die Schrift sei „nütze zur Lehre" – nicht, dass sie die einzige Quelle sei, ohne Kirche, die sie bewahrt und auslegt.`,
      followUps: [
        {
          id: 'vaeter-widersprechen-sich',
          objection: `„Die Väter widersprechen sich doch ständig: tausendjähriges Reich bei Irenäus, Wiedertaufe bei Cyprian, Präexistenz bei Origenes. Welcher Konsens?"`,
          objectionBy: 'Reformierter Kirchenhistoriker',
          answer: `Genau deshalb sprechen wir vom Konsens und nicht von Einzelmeinungen. In Randfragen gab es Meinungsunterschiede (*theologoumena*); in den Grundfragen aber – Dreieinigkeit, Gottheit und Menschheit Christi, Taufe zur Wiedergeburt, Eucharistie als Leib und Blut Christi, bischöfliches Amt, Gebet für die Toten – stimmen sie über Zeiten und Regionen hinweg überein. Cyprians Wiedertaufe und Origenes’ Spekulationen hat die Kirche gerade nicht übernommen. Das zeigt: Die Kirche prüft die Väter.`,
          followUps: [
            {
              id: 'wer-bestimmt-konsens',
              objection: `„Und wer bestimmt, was der ‚Konsens' ist? Das ist doch zirkulär: Die Kirche wählt die Väter aus, die ihr passen."`,
              objectionBy: 'Reformierter Kirchenhistoriker',
              answer: `Es ist dieselbe Frage wie beim Kanon: Wer hat bestimmt, welche Bücher zur Bibel gehören? Die Kirche hat sie im Lauf der Zeit erkannt und empfangen – durch Gebrauch im Gottesdienst, durch Synoden und den Konsens der Gemeinden. Ebenso erkennt sie ihre Lehrer: durch Konzilien, deren Beschlüsse von der ganzen Kirche angenommen wurden, und durch die Liturgie, die den Glauben aller betet. Wenn du dieser Kirche beim Kanon vertraust, ist das Verfahren nicht plötzlich zirkulär, wenn es um die Lehre geht.`,
              followUps: [
                {
                  id: 'kanon-selbstbeglaubigend',
                  objection: `„Der Kanon beglaubigt sich selbst – der Heilige Geist bezeugt jedem Gläubigen, welche Bücher Gottes Wort sind (Calvin)."`,
                  objectionBy: 'Reformierter Theologe',
                  answer: `Wenn das so wäre, hätten alle Gläubigen dasselbe erkannt. Aber Luther hielt Jakobus, Hebräer, Judas und die Offenbarung für zweitrangig und stellte sie ans Ende seiner Bibel; über das Alte Testament sind Protestanten, Katholiken und Orthodoxe bis heute uneins. Das „innere Zeugnis" hat also keine Einheit gestiftet. Die 27 Bücher, die du heute hast, sind die Bücher, die die Kirche der Väter überliefert hat – in Alexandrien zuerst 367 durch Athanasius aufgelistet.`,
                  questionsBack: [`Wenn der Kanon sich jedem Gläubigen selbst beglaubigt – warum zweifelte Luther an vier Büchern des Neuen Testaments?`],
                },
              ],
            },
          ],
        },
        {
          id: 'origenes-tertullian',
          objection: `„Unter euren ‚Vätern' sind sogar Häretiker wie Origenes und Tertullian. Wie kann man sich auf solche Leute berufen?"`,
          objectionBy: 'Evangelikaler Apologet',
          answer: `Gerade das zeigt, dass die Kirche nicht blind jedem alten Autor folgt. Origenes und Tertullian sind für die koptische Kirche keine Lehrautoritäten; sie werden für ihre apologetischen Leistungen geschätzt, nicht für ihre Sonderlehren. Die Kirche hat ihre Irrtümer erkannt und zurückgewiesen. Das ist kein Argument gegen die Väter, sondern ein Beleg für die Unterscheidungskraft der Kirche.`,
        },
      ],
    },
    {
      id: 'niemand-vater-heissen',
      objection: `„Jesus sagt ausdrücklich: ‚Ihr sollt niemand Vater heißen auf Erden' (Mt 23,9). Schon der Begriff ‚Kirchenväter' ist unbiblisch."`,
      objectionBy: 'Freikirchlicher Prediger',
      answer: `Im selben Abschnitt verbietet Jesus auch, sich „Lehrer" nennen zu lassen (Mt 23,8.10) – und doch hat deine Gemeinde Lehrer und Bibelschulen. Jesus verurteilt den Hochmut, Menschen an Gottes Stelle zu setzen. Paulus schreibt: „Ich habe euch gezeugt in Christus Jesus durchs Evangelium" (1 Kor 4,15); Johannes schreibt „euch Vätern" (1 Joh 2,13); Stephanus sagt „liebe Brüder und Väter" (Apg 7,2). Geistliche Vaterschaft ist biblisch.`,
      followUps: [
        {
          id: 'keine-menschliche-autoritaet',
          objection: `„Gut, es geht nicht um den Titel. Aber ich folge keiner menschlichen Autorität, sondern nur Gottes Wort."`,
          objectionBy: 'Freikirchlicher Prediger',
          answer: `Das glaubt jeder von sich – aber jeder liest die Bibel mit Lehrern: mit dem Pastor, mit Kommentaren, Studienbibeln, Liedern und der Tradition seiner Gemeinde. Die Frage ist nicht, *ob* du menschlichen Auslegern folgst, sondern *welchen*: Auslegern des 19. und 20. Jahrhunderts oder denen, die den Aposteln am nächsten standen und für ihren Glauben starben. Ignatius kannte die Apostel; dein Studienbibel-Autor nicht.`,
          questionsBack: [`Welche Kommentare und Prediger prägen deine Auslegung – und warum vertraust du ihnen mehr als Irenäus, der Polykarp hörte?`],
        },
      ],
    },
    {
      id: 'beroeer-pruefen',
      objection: `„Die Beröer prüften sogar Paulus an der Schrift (Apg 17,11). Also müssen wir auch die Väter an der Schrift prüfen – und dürfen sie verwerfen."`,
      objectionBy: 'Baptistischer Pastor',
      answer: `Prüfen ja – das tut die orthodoxe Kirche. Aber beachte: Die Beröer prüften die *mündliche* Predigt des Paulus am Alten Testament und nahmen sie *an*. Sie verwarfen apostolische Lehre nicht, weil sie noch nicht aufgeschrieben war. Wer die Väter an der Schrift prüft, findet in ihrem gemeinsamen Zeugnis eine Auslegung, die tiefer in der Schrift verwurzelt ist als die meisten modernen Entwürfe.`,
      followUps: [
        {
          id: 'hellenisierung',
          objection: `„Die Väter haben das einfache Evangelium mit griechischer Philosophie überfremdet – Harnack nannte das Dogma ein Werk des griechischen Geistes. Paulus warnt vor Philosophie (Kol 2,8)."`,
          objectionBy: 'Liberaler Dogmenhistoriker (in der Linie Harnacks)',
          answer: `Die Väter benutzten griechische Begriffe, um das biblische Bekenntnis gegen philosophische Verzerrungen zu schützen. Arius war der eigentliche „Philosoph": Für ihn konnte der unveränderliche Gott nicht Mensch werden. Nizäa bekannte dagegen mit *homoousios*, was Joh 1,1 sagt. Jaroslav Pelikan hat deshalb gezeigt, dass die Dogmenbildung in wichtigen Punkten eher eine *Ent*hellenisierung war – etwa wenn die Väter gegen griechisches Denken bekannten, dass Gott im Fleisch gelitten hat.`,
          sources: [
            { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Christian Tradition, Bd. 1: The Emergence of the Catholic Tradition (100–600)', year: '1971', status: 'paraphrase', note: 'Kritik an Harnacks Hellenisierungsthese.' },
          ],
          followUps: [
            {
              id: 'trinitaet-direkt-aus-bibel',
              objection: `„Die Dreieinigkeit habe ich direkt aus der Bibel, nicht von den Vätern."`,
              objectionBy: 'Evangelikaler Bibellehrer',
              answer: `Die Zeugen Jehovas lesen dieselbe Bibel und leugnen die Dreieinigkeit; Arius zitierte Spr 8,22 und Joh 14,28. Die Bibel enthält alle Bausteine, aber die Formulierung – ein Wesen, drei Hypostasen, der Sohn „wesensgleich" mit dem Vater – haben Athanasius, die Kappadokier und die Konzilien von 325 und 381 erarbeitet. Wenn du das Nizänum bekennst, liest du die Bibel mit den Vätern, ob du es merkst oder nicht.`,
              followUps: [
                {
                  id: 'nizaea-weil-biblisch',
                  objection: `„Ich nehme Nizäa nur an, weil es biblisch ist – nicht weil die Väter es sagen."`,
                  objectionBy: 'Evangelikaler Bibellehrer',
                  answer: `Dann frage ich: Wenn die Väter in der schwierigsten Frage überhaupt – wie Gott einer und dreifaltig ist – die Schrift richtig verstanden haben, warum sollten dieselben Väter ausgerechnet dort irren, wo sie einmütig lehren, dass die Taufe wiedergebiert, dass die Eucharistie der Leib Christi ist und dass Bischöfe die Kirche leiten? Wer ihnen beim Schwersten traut, sollte sein Misstrauen beim Leichteren gut begründen.`,
                  questionsBack: [`Nach welchem Kriterium vertraust du den Vätern bei der Dreieinigkeit, aber nicht bei der Eucharistie?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'reformatoren-ohne-vaeter',
      objection: `„Die Reformatoren haben die Autorität der Väter zu Recht gebrochen. Sola Scriptura heißt: Die Schrift allein, nicht Schrift und Väter."`,
      objectionBy: 'Lutherischer Theologe',
      answer: `Die Reformatoren haben die Väter gerade nicht beiseitegelegt. Das Augsburger Bekenntnis erklärt, seine Lehre weiche weder von der Schrift noch von der allgemeinen Kirche ab, soweit diese aus ihren Schriftstellern bekannt sei. Calvin zitiert Augustinus auf fast jeder Seite. Der lutherischen Konkordienformel ist ein „Katalog der Zeugnisse" der Väter beigefügt. Die Reformatoren wollten beweisen, dass *sie* mit den Vätern übereinstimmten – und nicht Rom.`,
      sources: [
        { kind: 'konzil', work: 'Confessio Augustana', ref: 'Schluss des ersten Teils (nach Art. 21)', year: '1530', status: 'paraphrase', quote: `Dies ist fast die Summe der Lehre bei uns, in der man sehen kann, dass nichts darin ist, was von der Schrift oder von der katholischen Kirche oder von der römischen Kirche, soweit sie aus ihren Schriftstellern bekannt ist, abweicht.` },
        { kind: 'konzil', work: 'Konkordienbuch, Catalogus testimoniorum', year: '1580', status: 'paraphrase', note: 'Sammlung von Väterzeugnissen zur Christologie im Anhang der Konkordienformel.' },
      ],
      followUps: [
        {
          id: 'nur-als-zeugen',
          objection: `„Sie zitierten die Väter als Zeugen und Illustration, nicht als verbindliche Autorität."`,
          objectionBy: 'Lutherischer Theologe',
          answer: `Gut, nennen wir sie Zeugen. Dann ist die Frage: Was tut ein Gericht, wenn Dutzende unabhängige Zeugen aus verschiedenen Ländern und Jahrhunderten übereinstimmend dasselbe aussagen – etwa dass die Kirche die Eucharistie als Leib und Blut Christi empfing oder Kinder taufte? Man kann einzelne Zeugen ablehnen, aber nicht ein einmütiges Zeugnis ohne Gegenzeugen einfach übergehen.`,
          followUps: [
            {
              id: 'alle-irrten-geozentrisch',
              objection: `„Auch einmütige Zeugen können irren. Vor Kopernikus glaubten alle, die Sonne kreise um die Erde."`,
              objectionBy: 'Skeptischer Gesprächspartner',
              answer: `Die Väter bezeugen nicht ihre Naturkunde, sondern das, was ihnen überliefert wurde: wie die Apostel tauften, das Brot brachen und Christus bekannten. Darin sind sie Zeugen einer Tatsache, nicht Theoretiker einer Hypothese. Und für diese Überlieferung gilt die Verheißung Christi an seine Kirche: Der Geist „wird euch in alle Wahrheit leiten" (Joh 16,13). Eine Kirche, die über Jahrhunderte in allen Grundfragen irrte, wäre eine Kirche ohne den verheißenen Geist.`,
            },
          ],
        },
      ],
    },
    {
      id: 'vaeter-zu-spaet',
      objection: `„Die Väter kamen erst nach den Aposteln. In der Zwischenzeit hat sich viel Falsches eingeschlichen – schon im 2. Jahrhundert."`,
      objectionBy: 'Freikirchlicher Kirchenkritiker',
      answer: `Klemens von Rom schrieb um 96, also zu Lebzeiten des Apostels Johannes; Ignatius um 110; Polykarp war Schüler des Johannes. Es gibt keine Lücke, in der sich unbemerkt eine neue Kirche hätte bilden können. Wer einen frühen Abfall behauptet, müsste zeigen, wann, wo und durch wen – und erklären, warum niemand protestierte. Die Väter bezeugen die Kirche der Apostel, nicht eine spätere.`,
      followUps: [
        {
          id: 'nur-bischoefe-belegt',
          objection: `„Klemens und Ignatius belegen höchstens Bischöfe – nicht eure ganze orthodoxe Frömmigkeit."`,
          objectionBy: 'Freikirchlicher Kirchenkritiker',
          answer: `Sie belegen viel mehr: Ignatius nennt die Eucharistie „das Fleisch unseres Heilands Jesus Christus" (an die Smyrnäer 7,1) und warnt vor denen, die das leugnen. Die Didache (um 100) kennt die Taufe im Namen der Dreieinigkeit, das dreimalige tägliche Vaterunser und das Fasten am **Mittwoch und Freitag** (Didache 8,1) – genau die Fasttage, die Kopten bis heute halten. Das ist nicht spätere Entartung, sondern Kirche der ersten Generation.`,
          sources: [
            { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Smyrnäer', ref: '7,1', year: 'um 110', status: 'paraphrase', quote: `Sie halten sich von Eucharistie und Gebet fern, weil sie nicht bekennen, dass die Eucharistie das Fleisch unseres Heilands Jesus Christus ist, das für unsere Sünden gelitten hat.` },
            { kind: 'kirchenvater', work: 'Didache', ref: '8,1', year: 'um 100', status: 'paraphrase', quote: `Eure Fasten sollen nicht mit den Heuchlern sein; denn sie fasten am Montag und Donnerstag. Ihr aber sollt am Mittwoch und Freitag fasten.` },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher weißt du, welche 27 Bücher zum Neuen Testament gehören – und wer hat sie zuerst so aufgelistet?`,
    `Wie widerlegst du einen Zeugen Jehovas, der sich ebenfalls „nur auf die Bibel" beruft, ohne das Nizänum der Väter?`,
    `Was bedeutet Hebr 13,7 – „Gedenket an eure Lehrer … folget ihrem Glauben nach"?`,
    `Wenn du den Vätern bei der Dreieinigkeit vertraust, warum nicht bei Taufe und Eucharistie, wo sie ebenso einmütig sind?`,
    `Welche menschlichen Ausleger prägen dein Bibelverständnis – und sind sie den Aposteln näher als Ignatius und Irenäus?`,
  ],
  avoid: [
    `Nicht behaupten, die Väter seien unfehlbar oder stimmten in allem überein.`,
    `Nicht einzelne Väterzitate aus dem Zusammenhang reißen; ein Laie verliert, wenn er ein Zitat nicht belegen kann.`,
    `Origenes und Tertullian nicht als Autoritäten der Kirche anführen.`,
  ],
  concessions: [
    `Einzelne Väter irrten in wichtigen Fragen (Chiliasmus, Wiedertaufe, Spekulationen des Origenes).`,
    `Die Väter benutzten philosophische Begriffe ihrer Zeit; die Abgrenzung zwischen Ausdruck und Inhalt erfordert sorgfältige Arbeit.`,
    `Die Bestimmung des „Konsenses" ist nicht mechanisch, sondern verlangt das Urteil der Kirche.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Vinzenz von Lérins', work: 'Commonitorium', year: '434', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien, Buch III', year: 'um 180', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Georges Florovsky', work: 'Bible, Church, Tradition. An Eastern Orthodox View', year: '1972', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'D. H. Williams', work: 'Retrieving the Tradition and Renewing Evangelicalism', year: '1999', status: 'paraphrase', note: 'Ein evangelikaler Patristiker über die Bedeutung der Väter für Protestanten.' },
  ],
  difficulty: 2,
  tags: ['Kirchenväter', 'Tradition', 'Konsens', 'Vinzenz von Lérins', 'Kanon', 'Sola Scriptura'],
  related: ['sola-scriptura/nur-die-bibel', 'sola-scriptura/tradition-menschenlehre', 'sola-scriptura/jeder-legt-selbst-aus', 'sola-scriptura/kirche-war-verdorben', 'reformation/reformation-noetig', 'orthodoxie-oekumene/sieben-konzilien-verbindlich'],
};

export default claim;
