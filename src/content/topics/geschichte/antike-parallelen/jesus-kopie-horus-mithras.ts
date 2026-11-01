import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jesus-kopie-horus-mithras',
  title: `„Jesus ist eine Kopie von Horus, Mithras und Dionysos."`,
  proponents: [
    { name: 'Peter Joseph (Merola)', role: 'Filmemacher', work: 'Zeitgeist (Film, 2007), Teil I' },
    { name: 'Acharya S (Dorothy M. Murdock)', role: 'Autorin (†2015)', work: 'The Christ Conspiracy (1999); Christ in Egypt (2009)' },
    { name: 'Gerald Massey / Kersey Graves', role: 'Autoren des 19. Jh.', work: 'Ancient Egypt: The Light of the World (1907); The World\'s Sixteen Crucified Saviors (1875)' },
    { name: 'Timothy Freke, Peter Gandy', role: 'Autoren', work: 'The Jesus Mysteries (1999)' },
    { name: 'Richard Carrier', role: 'Althistoriker, Mythizist', work: 'On the Historicity of Jesus (2014)' },
  ],
  steelman: `Die Geschichte Jesu ist nicht einzigartig. Lange vor ihm wurde Horus in Ägypten von der Jungfrau Isis am 25. Dezember geboren, ein Stern im Osten kündigte ihn an, er hatte zwölf Jünger, wurde gekreuzigt, begraben und stand nach drei Tagen auf. Mithras wurde ebenfalls am 25. Dezember von einer Jungfrau geboren, hatte zwölf Gefährten, feierte ein heiliges Mahl und wurde „der Weg, die Wahrheit und das Licht" genannt. Dionysos verwandelte Wasser in Wein. Sogar der Kirchenvater Justin gab zu, dass die Christen „nichts anderes" glaubten als die Heiden über die Söhne des Zeus. Die vorsichtigere, akademische Fassung (Richard Carrier) lautet: Jesus wurde nach dem Muster der sterbenden und auferstehenden Erlösergötter der Mysterienkulte geformt, deren Grundmotiv – ein Gott stirbt und ersteht für seine Anhänger – älter ist als das Christentum.`,
  biblical: {
    summary: `Die Evangelien erzählen von einem jüdischen Wanderprediger aus Nazareth, der unter Pontius Pilatus gekreuzigt wurde – mit Orts- und Personennamen, die sich prüfen lassen (Lk 3,1–2). Die frühesten Zeugen sind toratreue Juden, die heidnische Kulte als Götzendienst verabscheuten. Das älteste Bekenntnis (1 Kor 15,3–5) begründet Tod und Auferstehung „nach der Schrift" – also aus den jüdischen Heiligen Schriften, nicht aus ägyptischen oder persischen Mythen. Lukas betont ausdrücklich, dass er Augenzeugenberichte sorgfältig geprüft hat (Lk 1,1–4); der 2. Petrusbrief grenzt sich bewusst von „klug ersonnenen Mythen" (*sesophismenois mythois*) ab (2 Petr 1,16).`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,3–4', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift,`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '3,1–2', quote: `Im fünfzehnten Jahr der Herrschaft des Kaisers Tiberius, als Pontius Pilatus Statthalter in Judäa war … geschah das Wort Gottes zu Johannes.`, status: 'paraphrase', note: 'Datierung durch reale, außerbiblisch belegte Amtsträger – das Gegenteil eines zeitlosen Mythos.' },
      { kind: 'bibel', work: '2. Petrus', ref: '1,16', quote: `Denn wir sind nicht den klugen Fabeln gefolgt, da wir euch kundgetan haben die Kraft und Zukunft unsers HERRN Jesu Christi; sondern wir haben seine Herrlichkeit selber gesehen,`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche Alexandriens kannte die ägyptische Religion aus nächster Nähe. Clemens von Alexandrien beschrieb in seiner „Mahnrede an die Heiden" die Mysterien des Dionysos, der Isis und des Osiris und stellte ihnen das Evangelium als die wahre, nicht mythische Offenbarung gegenüber. Athanasius schrieb „Gegen die Heiden" auch gegen die ägyptische Tier- und Götterverehrung. Die koptische Kirche zählt ihre Jahre seit der „Ära der Märtyrer" (ab 284, Diokletian): Tausende ägyptische Christen starben, weil sie sich weigerten, den alten Göttern zu opfern. Eine Kirche, die aus einer umbenannten Isis- und Horus-Religion entstanden wäre, hätte keine Märtyrer gegen eben diese Götter hervorgebracht.`,
    sources: [
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Mahnrede an die Heiden (Protreptikos)', ref: '2', year: 'ca. 195', quote: `Kritische Darstellung der Mysterien des Dionysos, der Demeter und anderer Kulte als menschlich ersonnene, unwürdige Mythen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '9; 23–24', year: 'ca. 318', quote: `Kritik der Vergöttlichung von Menschen, Tieren und Naturkräften, auch in Ägypten.`, status: 'paraphrase' },
      { kind: 'koptisch', work: 'Koptischer Kalender: Anno Martyrum (Ära der Märtyrer)', year: 'Zählung ab 284 n. Chr.', quote: `Die koptische Kirche zählt ihre Jahre seit dem Regierungsantritt Diokletians in Erinnerung an die Märtyrer.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Fachwissenschaft – Ägyptologie, Religionswissenschaft, Altphilologie – weist die populären Parallelenlisten fast einhellig zurück. Für die Horus-Behauptungen von „Zeitgeist" (Jungfrauengeburt am 25. Dezember, zwölf Jünger, Kreuzigung, Taufe durch „Anup") gibt es keine ägyptischen Quellen; viele gehen auf Gerald Massey zurück. Der römische Mithraskult ist erst ab dem späten 1. Jh. n. Chr. belegt; Mithras wird aus einem Felsen geboren und tötet einen Stier – er stirbt nicht und steht nicht auf. Auch der Agnostiker Bart Ehrman hält die Mythizisten-Parallelen für unbelegt. Ernsthaft diskutiert werden nur allgemeine Motive (Kultmahl, göttliche Abkunft, Heilung) und mögliche Bezugnahmen im Sinne der Abgrenzung (z. B. Kana und Dionysos).`,
    detail: `**Horus:** Isis empfing Horus nach dem Mythos vom toten Osiris, dessen Körper sie wieder zusammenfügte (Hymnus auf der Stele des Amenmose, 18. Dynastie; bei Plutarch, De Iside et Osiride 18, ersetzt sie das verlorene Glied durch eine Nachbildung). Das ist eine Zeugung, keine Jungfrauengeburt. Horus kämpft mit Seth, verliert ein Auge, wird König – keine Jünger, keine Kreuzigung. Auf der Metternich-Stele (4. Jh. v. Chr.) wird das Horuskind von einem Skorpion gestochen und durch göttliches Eingreifen geheilt – ein Heilzauber gegen Skorpionstiche.

**Mithras:** Der indo-iranische Gott Mitra/Mithra ist alt (Vertrag der Mitanni, 14. Jh. v. Chr.). Der römische Mysterienkult mit Felsgeburt, Stiertötung (Tauroktonie) und sieben Weihegraden ist nach Manfred Clauss, Roger Beck und Richard Gordon im Kern eine Neuschöpfung des römischen Reiches; Franz Cumonts These einer direkten persischen Kontinuität gilt als überholt. Früheste Belege: Statius (um 80 n. Chr.), erste Mithräen um 100 n. Chr.

**Dionysos:** Sohn des Zeus und der Semele (sexuelle Verbindung); Weinwunder bei Festen in Elis und Andros (Pausanias 6,26; Plinius), aber keine Verwandlung von Wasser bei einer Hochzeit.`,
    sources: [
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Did Jesus Exist? The Historical Argument for Jesus of Nazareth', year: '2012', quote: `Die Parallelen der Mythizisten zu Horus, Mithras und anderen Göttern sind größtenteils unbelegt oder stark verzerrt.`, status: 'paraphrase', note: 'Ehrman ist Agnostiker.' },
      { kind: 'fachliteratur', author: 'Manfred Clauss', work: 'The Roman Cult of Mithras. The God and His Mysteries (dt. Mithras. Kult und Mysterien, 1990)', year: '2000', quote: `Der römische Mithraskult ist im Wesentlichen eine Neuschöpfung der Kaiserzeit, keine bloße Fortsetzung der persischen Religion.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Roger Beck', work: 'The Religion of the Mithras Cult in the Roman Empire', year: '2006', quote: `Der Mithraskult als eigenständige Mysterienreligion des Römischen Reiches mit astraler Symbolik.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Plutarch', work: 'Über Isis und Osiris (De Iside et Osiride)', ref: '18', year: 'ca. 100 n. Chr.', quote: `Isis findet alle Teile des Osiris außer dem Glied, das Fische gefressen hatten, und fertigt eine Nachbildung an.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Samuel Sandmel', work: 'Parallelomania. Journal of Biblical Literature 81', year: '1962', quote: `Warnung vor der Übertreibung oberflächlicher Ähnlichkeiten und vor vorschnellen Abhängigkeitsthesen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Frag nach der Quelle – einer ägyptischen Inschrift oder einem antiken Text. Du wirst keine bekommen. In den ägyptischen Texten wird Horus nicht von einer Jungfrau geboren, sondern Isis empfängt ihn vom toten Osiris; er hat keine zwölf Jünger und wird nicht gekreuzigt. Mithras wird aus einem Felsen geboren, tötet einen Stier und stirbt nie – und sein römischer Kult ist jünger als die Briefe des Paulus. Diese Listen stammen aus Büchern des 19. Jahrhunderts und aus einem Internetfilm, nicht aus der Ägyptologie. Und gerade die Kopten – die Nachfahren der alten Ägypter – starben lieber, als diesen Göttern zu opfern.`,
  keyPoints: [
    `**Quellenfrage stellen:** Die Listen („25. Dezember, Jungfrau, zwölf Jünger, Kreuzigung") gehen auf Massey (1907), Graves (1875) und „Zeitgeist" (2007) zurück – nicht auf antike Texte.`,
    `**Horus:** Isis empfängt vom toten Osiris – keine Jungfrauengeburt; keine zwölf Jünger, keine Kreuzigung, kein „Anup der Täufer".`,
    `**Mithras:** Felsgeburt als Erwachsener, Stiertötung, kein Tod und keine Auferstehung; römischer Kult erst ab Ende des 1. Jh. – jünger als die Paulusbriefe.`,
    `**Dionysos:** Sohn aus einer sexuellen Verbindung mit Zeus; Weinwunder bei Festen, keine Hochzeit von Kana.`,
    `**Das jüdische Milieu:** Die ersten Christen waren toratreue Juden, die heidnische Kulte verabscheuten; ihr ältestes Bekenntnis argumentiert „nach der Schrift".`,
    `**Ehrlich:** Die Antike selbst sah Ähnlichkeiten (Justin, Tertullian, Kelsos). Allgemeine Motive (Kultmahl, göttliche Abkunft) gibt es – aber Ähnlichkeit ist nicht Abhängigkeit.`,
    `**Koptisches Zeugnis:** Die ägyptische Kirche zählt ihre Jahre seit der Ära der Märtyrer – Christen, die sich weigerten, den alten Göttern zu opfern.`,
  ],
  argument: {
    name: 'Kriterien für echte Abhängigkeit',
    summary: 'Wann darf man von einer Kopie sprechen?',
    premises: [
      { text: `P1: Eine Abhängigkeitsthese braucht (a) eine echte, spezifische Parallele, (b) zeitliche Priorität und (c) einen plausiblen Übertragungsweg.`, support: `Methodischer Standard der Religionsgeschichte (vgl. Sandmel, „Parallelomania").` },
      { text: `P2: Die behaupteten Horus- und Mithras-Parallelen sind in den Quellen entweder nicht vorhanden oder nur allgemein.`, support: `Keine ägyptische Quelle für Jungfrauengeburt, zwölf Jünger oder Kreuzigung des Horus; Mithras stirbt nicht.` },
      { text: `P3: Wo es spezifischere Ähnlichkeiten gibt (z. B. Mahl im Mithraskult), fehlt die zeitliche Priorität oder sie ist umgekehrt.`, support: `Römischer Mithraskult ab Ende 1. Jh.; Abendmahlstradition bei Paulus um 55 n. Chr. und älter (1 Kor 11,23).` },
      { text: `P4: Ein Übertragungsweg ist unplausibel: Die Urgemeinde bestand aus toratreuen Juden in Jerusalem.`, support: `Gal 1–2; Apg 1–15; die jüdische Abscheu vor Götzendienst (vgl. 1 Kor 10,20–21).` },
    ],
    conclusion: `Die These „Jesus ist eine Kopie von Horus, Mithras und Dionysos" erfüllt keines der drei Kriterien.`,
  },
  voices: [
    {
      person: 'justin',
      role: 'als Apologet, der die Parallelen selbst diskutierte',
      text: `Justin ist der erste Christ, der die Ähnlichkeiten zwischen heidnischen Mythen und dem Evangelium ausführlich anspricht – er verschweigt sie nicht. In seiner Apologie an den Kaiser argumentiert er zunächst ad hominem: Wenn ihr glaubt, dass Söhne des Zeus geboren wurden, litten und in den Himmel aufstiegen, warum haltet ihr unseren Glauben für absurd? Dann aber betont er die Unterschiede: Die Mythen erzählen von Zeugung aus Begierde, Christus wurde ohne Geschlechtsverkehr aus der Jungfrau geboren; die Göttersöhne sind sittlich verwerflich, Christus ist heilig. Und er erklärt die Ähnlichkeiten aus seiner Sicht als dämonische Nachahmung der älteren Prophetie.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '21', year: 'ca. 155', quote: `Und wenn wir sagen, dass der Logos, der Erstgeborene Gottes, ohne geschlechtliche Vereinigung gezeugt wurde, und dass er, Jesus Christus, unser Lehrer, gekreuzigt wurde, starb, auferstand und in den Himmel aufstieg, so bringen wir nichts anderes vor als das, was ihr über die von euch so genannten Söhne des Zeus glaubt.`, original: `And when we say also that the Word, who is the first-birth of God, was produced without sexual union, and that He, Jesus Christ, our Teacher, was crucified and died, and rose again, and ascended into heaven, we propound nothing different from what you believe regarding those whom you esteem sons of Jupiter.`, translation: 'Ante-Nicene Fathers (engl.), dt. eigene Übersetzung', status: 'verbatim', note: 'Rhetorisches Argument ad hominem; in Kap. 22–23 und 33 betont Justin die Unterschiede.' },
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '33', year: 'ca. 155', quote: `Die Kraft Gottes kam über die Jungfrau und ließ sie als Jungfrau empfangen – nicht wie die Dichter von Zeus erzählen, der aus Begierde zu Frauen kam.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'origenes',
      role: 'als Apologet gegen Kelsos',
      text: `Der heidnische Philosoph Kelsos hatte um 178 den Christen vorgeworfen, ihre Geschichten seien nur Varianten griechischer Mythen. Origenes antwortet Punkt für Punkt: Die Mythen über Danaë oder über göttliche Väter berühmter Männer stehen ohne historische Zeugen da und werden von den Heiden selbst nicht ernst genommen; die Erzählungen über Jesus dagegen beruhen auf Zeugen, die für sie ihr Leben einsetzten, und auf einer Wirkung, die die Welt verändert hat. Er dreht das Argument um: Wenn die Griechen solche Geschichten über Plato oder Perseus glauben, können sie den Christen nicht vorwerfen, an eine wunderbare Geburt zu glauben – und doch ist der Unterschied in Zeugnis und Inhalt offensichtlich.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'I,37; II,55–58', year: 'ca. 248', quote: `Auseinandersetzung mit dem Vorwurf, christliche Erzählungen glichen griechischen Mythen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Bischof Ägyptens gegen das Heidentum',
      text: `Athanasius lebte in einem Ägypten, in dem die alten Kulte noch bestanden. In „Gegen die Heiden" und „Über die Menschwerdung" argumentiert er, dass die Götter Ägyptens und Griechenlands Menschen, Tiere oder Naturkräfte seien, die vergöttlicht wurden – während in Christus der wahre Gott selbst Mensch geworden ist. Das stärkste Indiz für ihn: Seit Christus verstummen die Orakel und verlassen die Menschen die Götzen. Für ihn ist Christus nicht eine Spielart der alten Götter, sondern ihr Ende.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '46–47', year: 'ca. 318', quote: `Seit der Ankunft Christi hören Götzendienst und Orakel auf; die Menschen wenden sich vom Mythos ab.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Kenner der griechischen Mysterien',
      text: `Clemens kannte die Mysterien von innen – er beschreibt Riten und Symbole des Dionysos- und Demeterkultes so genau, dass Religionshistoriker ihn heute als Quelle benutzen. Sein Urteil ist eindeutig: Die Mysterien sind Mythen über die Leidenschaften der Götter; das Evangelium ist die Ankunft des Logos selbst in der Geschichte. Er gebraucht zwar die Sprache der Mysterien (Einweihung, Licht), aber um zu zeigen, dass Christus das erfüllt, wonach die Mysterien vergeblich suchten.`,
      sources: [
        { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Protreptikos', ref: '2; 12', year: 'ca. 195', quote: `Die Mysterien als Mythen; Christus als der wahre Logos, der wirklich gekommen ist.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'ronald-nash',
      role: 'als Philosoph und Kenner der hellenistischen Religionen',
      text: `Nash hat die Behauptung, das Neue Testament habe von den Mysterienreligionen geborgt, systematisch geprüft. Seine Ergebnisse: Die meisten Quellen für die Mysterienkulte stammen aus dem 2. bis 4. Jahrhundert n. Chr., also nach dem NT; die Parallelen werden oft in christlicher Sprache beschrieben, bevor man sie vergleicht („Taufe", „Erlöser", „Auferstehung"); und der Tod Jesu ist einmalig, freiwillig, stellvertretend und geschichtlich, während die Mythen zyklisch und an Naturvorgänge gebunden sind. Wenn überhaupt Einfluss bestand, so oft in umgekehrter Richtung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Ronald H. Nash', work: 'The Gospel and the Greeks. Did the New Testament Borrow from Pagan Thought?', year: '1992 (2. Aufl. 2003)', quote: `Die Quellen der Mysterienkulte sind meist nachchristlich; die angeblichen Parallelen beruhen oft auf christlicher Terminologie und Ungenauigkeit.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'horus-liste',
      objection: `Horus wurde am 25. Dezember von der Jungfrau Isis-Meri geboren, ein Stern im Osten kündigte ihn an, drei Könige folgten ihm, er hatte zwölf Jünger, wurde von Anup getauft, gekreuzigt, drei Tage begraben und stand auf. Das ist Jesus – nur 3000 Jahre früher.`,
      objectionBy: 'Zeitgeist (Peter Joseph)',
      answer: `Nenne mir bitte eine einzige ägyptische Quelle dafür – eine Inschrift, einen Papyrus, einen Tempeltext. Es gibt keine. In den ägyptischen Texten empfängt Isis Horus vom toten Osiris, dessen Körper sie zusammengefügt hat – eine Zeugung, keine Jungfrauengeburt. Zwölf Jünger, Kreuzigung, Taufe durch „Anup" kommen in der Ägyptologie nicht vor; sie stammen aus Büchern des 19. Jahrhunderts, vor allem von Gerald Massey.`,
      detail: `Der 25. Dezember ist ein Datum des römischen julianischen Kalenders; der ägyptische Kalender hatte ganz andere Monate. Auch das macht die Behauptung unmöglich, Ägypter hätten Horus' Geburt „am 25. Dezember" gefeiert. Für Kopten ist das besonders greifbar: Die koptische Kirche feiert Weihnachten nach dem alten ägyptischen Kalender am 29. Koiak – sie weiß, wie ägyptische Datierung funktioniert.`,
      questionsBack: [`Aus welchem ägyptischen Text stammt die Kreuzigung des Horus?`, `Hast du die Liste aus einer ägyptologischen Fachpublikation oder aus dem Film?`],
      followUps: [
        {
          id: 'meri-maria',
          objection: `Isis wurde „Meri" genannt – das ist doch offensichtlich Maria!`,
          objectionBy: 'Acharya S',
          answer: `„Meri" (mrj, „geliebt") ist ein ägyptisches Beiwort, das für viele Götter und Menschen verwendet wurde. Jesu Mutter hieß Mirjam – wie die Schwester des Mose, ein uralter hebräischer Name, den jüdische Mädchen zu Ehren dieser Prophetin trugen. Klangähnlichkeit ist kein Beweis für Abhängigkeit – sonst müssten wir auch jeden „Max" mit Maximilian I. verwechseln.`,
          followUps: [
            {
              id: 'horus-stirbt-metternich',
              objection: `Immerhin: Auf der Metternich-Stele stirbt das Horuskind durch einen Skorpionstich und wird wieder lebendig. Da hast du Tod und Auferstehung.`,
              objectionBy: 'Richard Carrier',
              answer: `Das ist ein echter Text, danke für den Hinweis. Die Metternich-Stele ist aber ein Heilzauber gegen Skorpionstiche: Das vergiftete Kind wird durch göttliches Eingreifen geheilt, damit Menschen in derselben Not geheilt werden. Das ist eine Heilung aus Todesnähe, keine öffentliche Hinrichtung unter einem namentlich bekannten Statthalter, kein leeres Grab und keine Erscheinungen vor Zeugen. Auf dieser Abstraktionsebene sind „Leben nach Todesnähe"-Motive in fast jeder Kultur zu finden.`,
              followUps: [
                {
                  id: 'motive-wandern',
                  objection: `Genau so entwickeln sich Mythen: Allgemeine Motive wandern und verdichten sich. Die ersten Christen übernahmen das Muster des sterbenden und auferstehenden Retters.`,
                  objectionBy: 'Richard Carrier',
                  answer: `Dann muss man den Übertragungsweg zeigen. Die ersten Christen waren toratreue Juden in Jerusalem – die Gruppe, die ägyptische Götter am entschiedensten als Götzen ablehnte. Ihr ältestes Bekenntnis (1 Kor 15,3–5), wenige Jahre nach Jesu Tod formuliert, beruft sich „auf die Schrift", nicht auf Ägypten. Selbst Tryggve Mettinger, der die Kategorie der sterbenden und auferstehenden Götter verteidigt, sieht keinen Anhaltspunkt, dass Jesu Tod und Auferstehung aus diesen Mythen konstruiert wurde.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Tryggve N. D. Mettinger', work: 'The Riddle of Resurrection. „Dying and Rising Gods" in the Ancient Near East', year: '2001', quote: `Soweit mir bekannt, gibt es keinen Prima-facie-Beleg dafür, dass Tod und Auferstehung Jesu ein mythologisches Konstrukt sind, das auf die Mythen und Riten der sterbenden und auferstehenden Götter der Umwelt zurückgreift.`, original: `There is, as far as I am aware, no prima facie evidence that the death and resurrection of Jesus is a mythological construct, drawing on the myths and rites of the dying and rising gods of the surrounding world.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Mettinger verteidigt die Kategorie „sterbende und auferstehende Götter" – sein Urteil über Jesus wiegt deshalb schwer.' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'massey-graves-gelehrte',
          objection: `Gerald Massey und Kersey Graves haben jahrelang geforscht. Du kannst sie nicht einfach abtun.`,
          objectionBy: 'Acharya S',
          answer: `Massey war ein Dichter und Autodidakt, Graves ein Freidenker, der für seine „sechzehn gekreuzigten Erlöser" kaum überprüfbare Quellen angab. Beide schrieben, bevor die Ägyptologie viele Texte zuverlässig übersetzt hatte. Selbst Richard Carrier, selbst Mythizist, hat Graves' Buch als unzuverlässig kritisiert. Wer heute so argumentiert, muss sich auf heutige Ägyptologen berufen können – und die bestätigen diese Listen nicht.`,
          followUps: [
            {
              id: 'ehrman-voreingenommen',
              objection: `Die akademische Welt ist christlich voreingenommen. Natürlich lehnen sie das ab.`,
              objectionBy: 'Acharya S',
              answer: `Bart Ehrman ist Agnostiker und einer der bekanntesten Kritiker des Christentums – und er hat 2012 in „Did Jesus Exist?" ausdrücklich gezeigt, dass diese Parallelen nicht belegt sind. Auch die säkulare Ägyptologie an staatlichen Universitäten hat kein Interesse, das Christentum zu schützen. Wenn Gegner und Neutrale übereinstimmen, ist das kein Komplott, sondern Befund.`,
            },
          ],
        },
      ],
    },
    {
      id: 'mithras-liste',
      objection: `Mithras wurde am 25. Dezember von einer Jungfrau geboren, hatte zwölf Jünger, starb, wurde begraben und stand nach drei Tagen auf. Er wurde „der Weg, die Wahrheit und das Licht" genannt, und seine Anhänger feierten am Sonntag ein heiliges Mahl.`,
      objectionBy: 'Zeitgeist (Peter Joseph)',
      answer: `Der römische Mithras wird nach den Bildquellen aus einem Felsen geboren – als junger Mann mit Dolch und Fackel, ohne Mutter. Sein zentraler Mythos ist die Tötung eines Stiers; er stirbt nie und steht folglich auch nicht auf. Zwölf Jünger gibt es nicht (allenfalls Tierkreiszeichen auf manchen Reliefs). Und der römische Mithraskult ist erst ab dem späten 1. Jahrhundert belegt – nach den Briefen des Paulus.`,
      sources: [
        { kind: 'sonstiges', author: 'Statius', work: 'Thebais', ref: '1,719–720', year: 'ca. 80–90 n. Chr.', quote: `Erwähnung des Mithras, der unter den Felsen einer persischen Höhle die Hörner des Stieres packt – frühester literarischer Beleg des Stiertötungsmotivs.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'mithras-mahl-justin',
          objection: `Justin selbst gibt zu, dass in den Mithrasmysterien Brot und ein Becher gereicht werden – wie bei der Eucharistie (1 Apol 66). Tertullian sagt sogar, Mithras habe ein „Bild der Auferstehung".`,
          objectionBy: 'Richard Carrier',
          answer: `Das stimmt, und ich verschweige es nicht: Justin und Tertullian sahen im 2. Jahrhundert Ähnlichkeiten und erklärten sie als dämonische Nachahmung. Aber Kultmahle waren in der Antike allgegenwärtig. Die Eucharistie wurzelt im Passamahl und im letzten Mahl Jesu, das Paulus um 55 n. Chr. als ältere Überlieferung zitiert (1 Kor 11,23–26). Belegte Mithrasmahle sind jünger. Wenn es Einfluss gab, spricht die Chronologie eher für die umgekehrte Richtung oder für Unabhängigkeit.`,
          sources: [
            { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '66', year: 'ca. 155', quote: `In den Mysterien des Mithras würden Brot und ein Becher Wasser mit bestimmten Sprüchen vorgesetzt – eine Nachahmung durch die Dämonen.`, status: 'paraphrase' },
            { kind: 'kirchenvater', author: 'Tertullian', work: 'Die Prozesseinrede gegen die Häretiker (De praescriptione haereticorum)', ref: '40', year: 'ca. 200', quote: `Mithras zeichne seine Soldaten auf der Stirn, feiere eine Darbringung von Brot und führe ein Bild der Auferstehung ein – der Teufel ahme die göttlichen Sakramente nach.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'persischer-mithra-aelter',
              objection: `Mithra ist uralt – er steht schon im Rigveda und im Vertrag der Mitanni im 14. Jahrhundert v. Chr. Er ist also viel älter als Jesus.`,
              objectionBy: 'Acharya S',
              answer: `Der indo-iranische Mitra/Mithra ist tatsächlich alt – ein Gott des Vertrags und des Lichts. Aber keines der behaupteten Jesus-Merkmale gehört zu diesem alten Gott, und die typischen Elemente des römischen Kultes – Felsgeburt, Stiertötung, Weihegrade – sind im Iran nicht belegt. Manfred Clauss und Roger Beck sehen im römischen Mithraskult daher weitgehend eine Neuschöpfung. Ein alter Name macht keinen alten Mythos.`,
              followUps: [
                {
                  id: 'hoehle-felsen',
                  objection: `Jesus wurde nach Justin in einer Höhle geboren, Mithras im Felsen bzw. in einer Höhle verehrt – und Justin bringt beides selbst in Verbindung (Dialog 70)!`,
                  objectionBy: 'Richard Carrier',
                  answer: `Justin verbindet die Höhle der Mithraseinweihung mit Jes 33,16 und sieht darin eine Nachahmung der Prophetie – das ist seine Deutung. Historisch ist eine Geburt in einer Höhle in Bethlehem banal: Viele Häuser waren an Felshöhlen gebaut, in denen das Vieh stand. Eine Frau gebiert ein Kind in einem Stall – das ist etwas völlig anderes als ein erwachsener Gott, der ohne Mutter aus dem Fels hervorbricht.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dionysos-wein',
      objection: `Dionysos wurde von einer Jungfrau geboren, verwandelte Wasser in Wein und wurde getötet und wiedergeboren. Die Hochzeit von Kana ist ein Dionysos-Wunder.`,
      objectionBy: 'Timothy Freke',
      answer: `Dionysos ist der Sohn des Zeus und der Sterblichen Semele – Zeus kommt zu ihr, eine sexuelle Verbindung; als Semele ihn in seiner Herrlichkeit sieht, verbrennt sie, und Zeus trägt das Kind in seinem Schenkel aus. Die Weinwunder bei Dionysosfesten (in Elis füllten sich leere Kessel über Nacht mit Wein) sind Festlegenden, keine Verwandlung von Wasser bei einer Hochzeit. Und die Zerreißung des Dionysos-Zagreus findet sich in späten orphischen Quellen.`,
      sources: [
        { kind: 'sonstiges', author: 'Pausanias', work: 'Beschreibung Griechenlands', ref: '6,26,1–2', year: 'ca. 160–180 n. Chr.', quote: `In Elis stellten Priester beim Dionysosfest drei leere Kessel auf, die sich über Nacht mit Wein füllten.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'hengel-kana',
          objection: `Selbst der konservative Theologe Martin Hengel meint, Johannes spiele in Kana auf Dionysos an. Also gibt es doch Einfluss.`,
          objectionBy: 'Dan McClellan',
          answer: `Hengel hält es für möglich, dass Johannes Jesus vor griechischen Lesern bewusst als den wahren Geber der Freude dem Weingott gegenüberstellt. Das ist literarische Auseinandersetzung, nicht Übernahme. Johannes verankert die Szene zudem fest im Judentum: in den steinernen Krügen „für die Reinigung der Juden" (Joh 2,6). Abgrenzung setzt den Kontakt voraus, aber sie zeigt gerade, dass etwas anderes behauptet wird.`,
          sources: [
            { kind: 'fachliteratur', author: 'Martin Hengel', work: 'The Interpretation of the Wine Miracle at Cana: John 2:1–11. In: L. D. Hurst, N. T. Wright (Hg.), The Glory of Christ in the New Testament', year: '1987', quote: `Johannes könnte Jesus bewusst dem Weingott Dionysos gegenüberstellen.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'justin-gibt-zu',
      objection: `Selbst der Kirchenvater Justin gibt zu: „Wir bringen nichts anderes vor als das, was ihr über die Söhne des Zeus glaubt." Die Christen wussten, dass ihre Geschichten nicht neu waren.`,
      objectionBy: 'Richard Carrier',
      answer: `Lies den ganzen Abschnitt: Justin argumentiert ad hominem gegenüber dem Kaiser – wenn ihr selbst solche Geschichten glaubt, könnt ihr uns nicht für verrückt erklären. Unmittelbar danach betont er die Unterschiede: Christus wurde nicht aus Begierde gezeugt, sondern durch die Kraft Gottes aus der Jungfrau (1 Apol 33), und er ist heilig, nicht wie die zügellosen Göttersöhne. Ehrlich ist: Die Antike sah Ähnlichkeiten. Aber Justin bestätigt nicht die Zeitgeist-Liste – er kennt keinen gekreuzigten Horus.`,
      followUps: [
        {
          id: 'daemonen-ausrede',
          objection: `Die Erklärung „dämonische Nachahmung" zeigt nur, dass die Christen wussten, dass die Mythen älter waren und sie eine Ausrede brauchten.`,
          objectionBy: 'Richard Carrier',
          answer: `Justin hielt Mose für älter als alle griechischen Dichter – die Dämonentheorie ist seine theologische Deutung, die heute niemand als Historiker übernehmen muss. Die historische Frage bleibt unabhängig davon: Welche konkreten Merkmale sind nachweislich vorchristlich? Die Stiertötung des Mithras ist es nicht, die Auferstehung des Attis oder Adonis nur in nachchristlichen Quellen, und die Zeitgeist-Merkmale fehlen ganz. Das Problem ist nicht die Priorität der Mythen, sondern das Fehlen echter Parallelen.`,
        },
      ],
    },
    {
      id: 'koptische-isis',
      objection: `Gerade Ägypten zeigt die Kontinuität: Die stillende Gottesmutter der koptischen Kunst ist Isis mit dem Horusknaben, und Kirchen wurden in alten Tempeln eingerichtet. Das Christentum hat die Isisreligion nur umbenannt.`,
      objectionBy: 'Acharya S',
      answer: `Hier ist ein ehrliches Zugeständnis angebracht: Manche Kunsthistoriker vermuten, dass das Bild der stillenden Isis die Darstellung der stillenden Gottesmutter beeinflusst hat; andere bestreiten das. Und ja, Tempel wurden später als Kirchen genutzt. Aber Bildformen und Gebäude sind keine Lehre. Das Evangelium kam als Predigt vom gekreuzigten jüdischen Messias nach Ägypten – und die ägyptischen Christen starben lieber, als den alten Göttern zu opfern. Deshalb zählt die koptische Kirche ihre Jahre seit der Ära der Märtyrer.`,
      followUps: [
        {
          id: 'marienverehrung-isiskult',
          objection: `Die Marienverehrung ist trotzdem der fortgesetzte Isiskult – eine Muttergöttin mit neuem Namen.`,
          objectionBy: 'Acharya S',
          answer: `Isis ist eine Göttin, die ihr Kind aus einer Verbindung mit Osiris empfängt und angebetet wird. Maria ist ein Mensch, eine Jungfrau, und wird in der koptischen Kirche verehrt, nicht angebetet; sie heißt Gottesgebärerin (Theotokos, Ephesus 431), weil ihr Sohn Gott ist – der Titel sagt etwas über Christus, nicht über eine Göttlichkeit Marias. Dass Menschen aller Kulturen eine stillende Mutter darstellen, ist kein Beweis für eine gemeinsame Religion.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Aus welchem ägyptischen Text stammt die Kreuzigung des Horus oder seine zwölf Jünger?`,
    `Wie sollte Horus „am 25. Dezember" geboren sein, wenn Ägypten einen ganz anderen Kalender hatte?`,
    `Wann ist der römische Mithraskult erstmals belegt – vor oder nach den Briefen des Paulus?`,
    `Wie hätten toratreue Juden in Jerusalem, die Götzendienst verabscheuten, ägyptische Mythen übernehmen sollen?`,
    `Kennst du einen heutigen Ägyptologen, der die Zeitgeist-Liste bestätigt?`,
  ],
  avoid: [
    `Behaupten, es gebe überhaupt keine Ähnlichkeiten – die Antike selbst (Justin, Tertullian, Kelsos) sah welche.`,
    `Mit Spott über „Internetatheisten" reagieren – sachlich nach Quellen fragen wirkt stärker.`,
    `Die Kunstgeschichte leugnen (stillende Isis, Tempelumnutzung) – lieber zwischen Form und Inhalt unterscheiden.`,
  ],
  concessions: [
    `Die Antike nahm Ähnlichkeiten zwischen Christentum und Mysterienkulten wahr (Justin, Tertullian, Kelsos).`,
    `Allgemeine Motive (Kultmahl, göttliche Abkunft, Heilung aus Todesnähe) finden sich in vielen Religionen.`,
    `In der christlichen Kunst Ägyptens wurden möglicherweise Bildformen der Isis-Ikonographie aufgegriffen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Ronald H. Nash', work: 'The Gospel and the Greeks', year: '2003', status: 'paraphrase' },
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Did Jesus Exist?', year: '2012', status: 'paraphrase', note: 'Agnostische Widerlegung der Mythizisten.' },
    { kind: 'fachliteratur', author: 'Manfred Clauss', work: 'Mithras. Kult und Mysterien', year: '1990', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Tryggve N. D. Mettinger', work: 'The Riddle of Resurrection', year: '2001', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Horus', 'Mithras', 'Dionysos', 'Zeitgeist', 'Mythizismus', 'Ägypten'],
  related: ['antike-parallelen/jungfrauengeburt-heidnisch', 'antike-parallelen/sterbende-auferstehende-goetter', 'antike-parallelen/christliche-feste-heidnisch', 'historischer-jesus/jesus-hat-nie-existiert'],
};

export default claim;
