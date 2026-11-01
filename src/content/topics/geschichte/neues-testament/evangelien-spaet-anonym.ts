import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'evangelien-spaet-anonym',
  title: `„Die Evangelien wurden spät und von anonymen Autoren geschrieben – nicht von Augenzeugen."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Jesus, Interrupted (2009); Forged (2011)' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler, Social Media', work: 'Videos zur Verfasserschaft der Evangelien' },
    { name: 'Kipp Davis', role: 'Qumran-Forscher, YouTube-Kommentator', work: 'Beiträge zur Datierung und Verfasserschaft' },
    { name: 'Richard I. Pervo', role: 'Neutestamentler', work: 'Dating Acts: Between the Evangelists and the Apologists (2006)' },
  ],
  steelman: `Die vier Evangelien entstanden Jahrzehnte nach Jesu Tod: Markus um 70, Matthäus und Lukas in den 80ern, Johannes um 90–100. Keines nennt im Text seinen Verfasser – sie sind anonym. Die Überschriften „nach Matthäus", „nach Markus" usw. wurden erst im 2. Jahrhundert hinzugefügt; Irenäus (um 180) ist der erste, der alle vier Namen nennt. Die Apostel Petrus und Johannes waren laut Apg 4,13 „ungelehrte Leute" – aramäischsprachige Fischer aus Galiläa, die kaum literarisches Griechisch schreiben konnten. Die Evangelien aber sind in gutem Griechisch verfasst, von gebildeten Christen in der Diaspora. Matthäus übernimmt rund 80 % des Markus – warum sollte ein Augenzeuge den Bericht eines Nicht-Augenzeugen abschreiben? Lukas sagt selbst, er sei kein Augenzeuge. Und Papias, der früheste Zeuge, beschreibt ein hebräisches „Logien"-Werk des Matthäus, nicht unser griechisches Evangelium. Die Zuschreibungen sind spätere Tradition, um anonymen Texten apostolische Autorität zu verleihen. – So etwa Bart Ehrman.`,
  biblical: {
    summary: `Die Evangelien beanspruchen, auf Augenzeugen zurückzugehen: Lukas beruft sich auf die, „die es von Anfang selbst gesehen" haben (Lk 1,2); das Johannesevangelium nennt den Lieblingsjünger als Zeugen und Schreiber (Joh 19,35; 21,24). Markus enthält auffällige Hinweise auf Petrus als Quelle (er ist der erste und letzte namentlich genannte Jünger, Mk 1,16; 16,7) und auf Personen, die die ersten Leser kannten („Vater des Alexander und des Rufus", Mk 15,21). Die „Wir"-Abschnitte der Apostelgeschichte (Apg 16,10–17; 20,5–21,18; 27,1–28,16) zeigen den Verfasser als Reisebegleiter des Paulus.`,
    detail: `**Innere Hinweise (vgl. Gathercole, Bauckham):**
- **Lukas** schreibt in der Ich-Form an Theophilus (Lk 1,3; Apg 1,1) – der Verfasser war dem Empfänger bekannt, also nicht anonym im modernen Sinn.
- **Johannes 21,24:** „Dies ist der Jünger, der von diesen Dingen zeugt und hat dies geschrieben; und wir wissen, daß sein Zeugnis wahr ist."
- **Markus 15,21:** Simon von Kyrene, „der Vater des Alexander und Rufus" – Namen, die nur Sinn ergeben, wenn die Leser diese Männer kannten (vgl. einen Rufus in Röm 16,13).
- **Matthäus 9,9:** Der Zöllner heißt hier „Matthäus" (bei Markus und Lukas „Levi"); in der Apostelliste heißt er „Matthäus, der Zöllner" (Mt 10,3) – ein auffälliges Detail, das auf eine besondere Verbindung des Evangeliums zu diesem Apostel weist.

**Ehrlich:** Kein Evangelium nennt im Text ausdrücklich „Ich, Matthäus, schreibe". Das war bei antiken Biografien nicht unüblich; der Name stand auf dem Titelschild bzw. am Rand der Rolle.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '21,24', quote: `Dies ist der Jünger, der von diesen Dingen zeugt und hat dies geschrieben; und wir wissen, daß sein Zeugnis wahr ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,1–3', quote: `Sintemal sich's viele unterwunden haben, Bericht zu geben von den Geschichten, so unter uns ergangen sind, wie uns das gegeben haben, die es von Anfang selbst gesehen und Diener des Worts gewesen sind: habe ich's auch für gut angesehen, nachdem ich's alles von Anbeginn erkundet habe, daß ich's dir, mein guter Theophilus, in Ordnung schriebe,`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '15,21', quote: `Und zwangen einen, der vorüberging, mit Namen Simon von Kyrene, der vom Felde kam (der ein Vater war des Alexander und Rufus), daß er ihm das Kreuz trüge.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '9,9', quote: `Und da Jesus von dannen ging, sah er einen Menschen am Zoll sitzen, der hieß Matthäus; und er sprach zu ihm: Folge mir! Und er stand auf und folgte ihm.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche führt ihren Ursprung auf den Evangelisten **Markus** zurück, der nach der Überlieferung das Evangelium nach Alexandrien brachte und dort die Kirche gründete (Eusebius, KG II,16); der koptische Papst trägt den Titel „Papst von Alexandrien und Patriarch des Stuhls des hl. Markus". Die Verfasserschaft der Evangelien ist für die Kirche nicht nur Gelehrtenfrage, sondern Teil ihrer lebendigen Erinnerung. Die Väter – Papias, Irenäus, Clemens von Alexandrien, Tertullian, Origenes – bezeugen einhellig die vier Verfasser.`,
    detail: `**Alexandrinische Zeugen:** Clemens von Alexandrien (um 200) berichtet, Markus habe auf Bitten der Hörer des Petrus in Rom dessen Predigt aufgeschrieben, und Johannes habe zuletzt ein „geistliches Evangelium" verfasst (bei Eusebius, KG VI,14,5–7). Origenes nennt die vier Evangelien als die einzigen unbestrittenen in der Kirche (KG VI,25,3–6). Bemerkenswert ist auch die **kritische Kompetenz** Alexandriens: Dionysius von Alexandrien verglich um 250 Stil und Wortschatz von Johannesevangelium und Offenbarung und kam zu dem Schluss, dass sie von verschiedenen Verfassern stammen – die Kirche hat Verfasserfragen also nicht naiv, sondern prüfend behandelt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'II,16,1', year: 'ca. 325', quote: `Man sagt, Markus sei als Erster nach Ägypten gesandt worden, habe dort das Evangelium, das er auch aufgeschrieben hatte, verkündet und als Erster in Alexandrien Gemeinden gegründet.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien (bei Eusebius)', work: 'Hypotyposen, zitiert in Kirchengeschichte', ref: 'VI,14,5–7', year: 'ca. 200', quote: `Als Petrus in Rom öffentlich das Wort verkündete, baten die Hörer Markus, der ihn lange begleitet hatte, das Gesagte aufzuschreiben; Johannes aber verfasste als Letzter ein geistliches Evangelium.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Dionysius von Alexandrien (bei Eusebius)', work: 'Über die Verheißungen, zitiert in Kirchengeschichte', ref: 'VII,25', year: 'ca. 250', quote: `Stilvergleich zwischen Johannesevangelium und Offenbarung mit dem Ergebnis, dass sie verschiedenen Verfassern zuzuschreiben seien.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `**Datierung (Mehrheitsmeinung):** Markus ca. 65–75, Matthäus und Lukas ca. 80–90, Johannes ca. 90–100; die Apostelgeschichte ca. 80–90 (Minderheit: um 110–120, so Pervo). **Frühdatierung (Minderheit):** Adolf von Harnack (1911) und John A. T. Robinson (1976) datierten Lukas/Apostelgeschichte vor 64 bzw. alle Evangelien vor 70; der säkulare Forscher James Crossley (2004) und der Agnostiker Maurice Casey setzten Markus sogar um 40 an. **Verfasserschaft:** Die Mehrheit der kritischen Forscher hält die Evangelien für ursprünglich anonym und die Zuschreibungen für spätere Tradition. Eine wachsende Minderheit (Martin Hengel, Richard Bauckham, Simon Gathercole, Brant Pitre, P. J. Williams) argumentiert, dass die Titel sehr früh sind und die Traditionen über Markus und Lukas besonders glaubwürdig.`,
    detail: `**Ehrlich zu den Schwachstellen:**
- Die Verfasserschaft des **Matthäus** ist auch unter konservativen Forschern umstritten (Papias' „hebräische Logien" vs. griechischer Text, der Markus verwendet).
- Beim **Johannesevangelium** zeigt Joh 21,24 eine Gemeinde, die das Zeugnis des Lieblingsjüngers bestätigt; ob der Lieblingsjünger Johannes, der Sohn des Zebedäus, ist (so die Tradition und die koptische Kirche) oder ein anderer Jünger namens Johannes (so Bauckham: „Johannes der Älteste"), wird diskutiert.
- **Markus** und **Lukas** gelten auch vielen Kritikern als plausible Zuschreibungen, gerade weil sie keine Apostel waren.

**Wichtig:** Selbst nach Mehrheitsdatierung entstanden die Evangelien innerhalb von 40–65 Jahren, also zu Lebzeiten von Augenzeugen – für antike Biografien außergewöhnlich früh. Die ersten erhaltenen Lebensbeschreibungen Alexanders des Großen (Arrian, Plutarch) entstanden rund 400 Jahre nach seinem Tod.`,
    sources: [
      { kind: 'fachliteratur', author: 'John A. T. Robinson', work: 'Redating the New Testament', year: '1976', quote: `Robinson, ein liberaler anglikanischer Bischof, datiert alle Schriften des NT vor 70, weil keine die Zerstörung Jerusalems als geschehen erwähnt.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Adolf von Harnack', work: 'Neue Untersuchungen zur Apostelgeschichte und zur Abfassungszeit der synoptischen Evangelien', year: '1911', quote: `Harnack revidierte seine frühere Spätdatierung und setzte die Apostelgeschichte in die frühen 60er Jahre.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'James G. Crossley', work: 'The Date of Mark’s Gospel: Insight from the Law in Earliest Christianity', year: '2004', quote: `Crossley datiert Markus aufgrund der Gesetzesfragen in die späten 30er bis Mitte der 40er Jahre.`, status: 'paraphrase', note: 'Crossley ist kein konservativer Christ – die Frühdatierung ist also nicht konfessionell motiviert.' },
      { kind: 'fachliteratur', author: 'Simon Gathercole', work: 'The Alleged Anonymity of the Canonical Gospels. Journal of Theological Studies 69', year: '2018', quote: `Gathercole zeigt, dass die Evangelien nicht im strengen Sinn anonym sind, sondern teils innere Verfasserhinweise enthalten und früh mit Namen überliefert wurden.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Richard I. Pervo', work: 'Dating Acts', year: '2006', quote: `Pervo datiert die Apostelgeschichte um 110–120.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Selbst nach der Datierung kritischer Forscher entstanden die Evangelien 40–65 Jahre nach Jesus – zu Lebzeiten der Augenzeugen, für antike Verhältnisse sehr früh. Und „anonym" heißt nicht „unbekannt": Es gibt keine einzige Handschrift mit einem anderen Verfassernamen, und die Titel „nach Markus", „nach Lukas" sind überall einheitlich. Würde man Namen erfinden, um Autorität zu gewinnen, hätte man nicht ausgerechnet Markus und Lukas gewählt, die gar keine Apostel waren. Schon Papias (um 110–130) berichtet von einem „Ältesten", Markus habe die Predigt des Petrus aufgeschrieben.`,
  keyPoints: [
    `**Früh nach antiken Maßstäben:** 40–65 Jahre (Mehrheitsdatierung) – Alexanders erste erhaltene Biografien entstanden rund 400 Jahre nach ihm.`,
    `**Frühere Datierung ist vertretbar:** Die Apostelgeschichte endet um 62 und schweigt über den Tod des Jakobus (62), Neros Verfolgung (64), Paulus' Tod und den Fall Jerusalems (70) – Harnack, Robinson, Crossley, Casey datierten früh.`,
    `**Einheitliche Titel, keine Konkurrenz:** Keine Handschrift mit anderem Namen; „Evangelium nach …" überall gleich (Hengel). Bei wirklich anonymen Texten (Hebräerbrief) gab es dagegen offene Debatten.`,
    `**Unwahrscheinliche Namen:** Markus und Lukas waren keine Apostel – wer Autorität erfinden will, wählt Petrus oder Thomas (wie die Apokryphen).`,
    `**Frühe Zeugen:** Papias (um 110–130) über Markus und Matthäus; Justin (um 155) über die „Erinnerungen der Apostel und ihrer Begleiter"; Irenäus (um 180) über alle vier.`,
    `**Hinweise auf Augenzeugen:** Namen wie Rufus und Alexander (Mk 15,21), Petrus als Rahmen bei Markus, „Wir"-Berichte bei Lukas, der Lieblingsjünger bei Johannes (Bauckham).`,
  ],
  argument: {
    name: 'Argument aus den einheitlichen Titeln (Hengel)',
    summary: 'Warum die Verfassernamen früh und nicht willkürlich sind.',
    premises: [
      {
        text: `P1: Die vier Evangelien zirkulierten spätestens ab dem frühen 2. Jahrhundert in verschiedenen Regionen des Reiches (Rom, Kleinasien, Syrien, Ägypten).`,
        support: `Zitate und Anspielungen bei Ignatius, Polykarp, Papias, Justin; Papyrusfunde in Ägypten (z. B. P52, P66, P75).`,
      },
      {
        text: `P2: Sobald eine Gemeinde mehr als ein Evangelium besaß, brauchte sie Titel, um sie zu unterscheiden.`,
        support: `Antike Bibliotheken kennzeichneten Rollen und Kodizes mit Titeln; im Gottesdienst musste man ansagen, woraus gelesen wird.`,
      },
      {
        text: `P3: Wären die Evangelien jahrzehntelang anonym gewesen, hätten unabhängige Gemeinden verschiedene Verfasser vermutet – wie beim Hebräerbrief (Paulus, Barnabas, Lukas, Clemens).`,
        support: `Origenes sagt über den Hebräerbrief offen: „Wer ihn geschrieben hat, weiß in Wahrheit Gott" (Eusebius, KG VI,25,14).`,
        sources: [{ kind: 'kirchenvater', author: 'Origenes (bei Eusebius)', work: 'Kirchengeschichte', ref: 'VI,25,14', year: 'ca. 245', quote: `Wer aber den Brief geschrieben hat, weiß in Wahrheit Gott.`, original: `τίς δὲ ὁ γράψας τὴν ἐπιστολήν, τὸ μὲν ἀληθὲς θεὸς οἶδεν`, status: 'verbatim' }],
      },
      {
        text: `P4: Für die Evangelien gibt es keine Spur konkurrierender Zuschreibungen; alle erhaltenen Titel sind einheitlich.`,
        support: `Die frühesten Handschriften mit erhaltenem Anfang oder Ende (z. B. P66, P75) tragen „Evangelium nach Johannes" bzw. „nach Lukas".`,
      },
    ],
    conclusion: `Also wurden die Namen sehr früh – wahrscheinlich von Anfang an mit der Verbreitung – mit den Evangelien verbunden und sind nicht spätere, willkürliche Zuschreibungen.`,
  },
  voices: [
    {
      person: 'papias',
      role: 'als frühester Zeuge der Evangelientradition',
      text: `Papias, Bischof von Hierapolis in Phrygien, sammelte im frühen 2. Jahrhundert Überlieferungen von Menschen, die die Apostel und ihre Schüler gekannt hatten; er bevorzugte „die lebendige und bleibende Stimme" gegenüber Büchern. Er gibt die Aussage eines „Ältesten" (Presbyters) Johannes weiter: Markus sei der Dolmetscher des Petrus gewesen und habe alles, woran er sich erinnerte, genau aufgeschrieben, wenn auch nicht der Reihe nach. Über Matthäus berichtet er, dieser habe die Worte (logia) in hebräischer Sprache zusammengestellt. Damit reicht die Tradition über Markus mindestens bis in das späte 1. Jahrhundert zurück.`,
      sources: [
        { kind: 'kirchenvater', author: 'Papias von Hierapolis (bei Eusebius)', work: 'Kirchengeschichte', ref: 'III,39,15', year: 'ca. 110–130', quote: `Markus, der Dolmetscher des Petrus geworden war, schrieb alles, woran er sich erinnerte, genau auf, jedoch nicht der Ordnung nach, was vom Herrn gesagt oder getan worden war.`, original: `Μάρκος μὲν ἑρμηνευτὴς Πέτρου γενόμενος, ὅσα ἐμνημόνευσεν, ἀκριβῶς ἔγραψεν, οὐ μέντοι τάξει …`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'kirchenvater', author: 'Papias von Hierapolis (bei Eusebius)', work: 'Kirchengeschichte', ref: 'III,39,16', year: 'ca. 110–130', quote: `Matthäus nun hat in hebräischer Sprache die Worte zusammengestellt; es übersetzte sie aber jeder, so gut er konnte.`, original: `Ματθαῖος μὲν οὖν Ἑβραΐδι διαλέκτῳ τὰ λόγια συνετάξατο, ἡρμήνευσεν δ᾽ αὐτὰ ὡς ἦν δυνατὸς ἕκαστος.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'irenaeus',
      role: 'als Schüler Polykarps und Zeuge um 180',
      text: `Irenäus wuchs in Kleinasien auf und hörte in seiner Jugend Polykarp von Smyrna, der seinerseits den Apostel Johannes gekannt hatte. Er bezeugt um 180 alle vier Evangelien mit ihren Verfassern und deren Umständen – nicht als neue These, sondern als in der ganzen Kirche bekannte Überlieferung. Seine Kette Johannes – Polykarp – Irenäus umfasst nur zwei Glieder zwischen Apostel und Zeugen.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,1,1', year: 'ca. 180', quote: `Matthäus verfasste bei den Hebräern in ihrer eigenen Sprache eine Schrift des Evangeliums, während Petrus und Paulus in Rom das Evangelium verkündeten und die Kirche gründeten. Nach deren Hingang hat Markus, der Schüler und Dolmetscher des Petrus, uns das von Petrus Verkündete schriftlich überliefert. Und Lukas, der Begleiter des Paulus, legte das von jenem verkündete Evangelium in einem Buch nieder. Danach gab Johannes, der Jünger des Herrn, der auch an seiner Brust gelegen hatte, ebenfalls das Evangelium heraus, als er in Ephesus in Asien weilte.`, translation: 'eigene Übersetzung (nach dem griechischen Text bei Eusebius, KG V,8)', status: 'verbatim' }],
    },
    {
      person: 'dionysius-alexandrien',
      role: 'als alexandrinischer Bischof und Textkritiker',
      text: `Dionysius, Schüler des Origenes und Papst von Alexandrien, verglich um 250 Sprache, Stil und Gedankenwelt des Johannesevangeliums und der Offenbarung. Er kam zu dem Schluss, dass die Offenbarung von einem anderen Johannes stamme als das Evangelium – ohne ihre Kanonizität zu bestreiten. Für die heutige Debatte zeigt das: Die frühe Kirche, gerade die alexandrinische, hat Verfasserfragen nicht blind übernommen, sondern mit philologischen Methoden geprüft. Dass dieselbe Kirche die Verfasser der vier Evangelien nicht anzweifelte, hat daher Gewicht.`,
      sources: [{ kind: 'kirchenvater', author: 'Dionysius von Alexandrien (bei Eusebius)', work: 'Kirchengeschichte', ref: 'VII,25,7–27', year: 'ca. 250', status: 'paraphrase', quote: `Stil- und Wortschatzanalyse von Johannesevangelium und Offenbarung.` }],
    },
    {
      person: 'martin-hengel',
      role: 'als Historiker der Evangelienüberlieferung',
      text: `Hengel argumentierte, dass die Evangelienüberschriften („euangelion kata Markon" usw.) nicht spät erfunden sein können. Sobald Gemeinden mehrere Evangelien besaßen, mussten sie diese unterscheiden; bei anonymer Verbreitung in verschiedenen Provinzen wären unterschiedliche Titel und Verfasserzuschreibungen entstanden. Davon gibt es keine Spur. Die einheitliche Form „nach …" setzt zudem voraus, dass man das eine Evangelium Jesu Christi in vier Fassungen kannte – eine sehr frühe theologische Vorstellung.`,
      sources: [{ kind: 'fachliteratur', author: 'Martin Hengel', work: 'The Four Gospels and the One Gospel of Jesus Christ', year: '2000', status: 'paraphrase', quote: `Die Evangelientitel sind früh, einheitlich und ohne konkurrierende Zuschreibungen überliefert.` }],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler',
      text: `Bauckham zeigt, dass die Häufigkeit der Personennamen in den Evangelien und der Apostelgeschichte auffällig genau der Namensverteilung im jüdischen Palästina vor 70 entspricht, wie sie aus Inschriften und Ossuarien bekannt ist (Tal Ilan, Lexicon of Jewish Names). Häufige Namen wie Simon oder Josef werden in den Evangelien durch Zusätze unterschieden (Simon Petrus, Simon der Zelot), wie es dort nötig war. Er sieht darin Spuren früher palästinischer Augenzeugentradition, nicht später Erfindung in der Diaspora.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses: The Gospels as Eyewitness Testimony', year: '2006 (2. Aufl. 2017)', status: 'paraphrase', quote: `Namensstatistik, Petrus-Inklusio bei Markus und der Lieblingsjünger als Indizien für Augenzeugenüberlieferung.` }],
    },
    {
      person: 'pj-williams',
      role: 'als Neutestamentler (Tyndale House, Cambridge)',
      text: `Williams prüft die Evangelien wie ein Ermittler: Kennen die Verfasser die Geographie Palästinas, die Namen, die Bräuche, die Sprache? Er zeigt, dass sie auch kleine, beiläufige Details korrekt wiedergeben – Ortslagen, aramäische Ausdrücke, die Namensverteilung –, die ein späterer Autor fern von Palästina kaum hätte rekonstruieren können. Dazu kommen „unbeabsichtigte Übereinstimmungen" zwischen den Evangelien, die auf unabhängigen Zugang zu denselben Ereignissen hindeuten.`,
      sources: [{ kind: 'fachliteratur', author: 'Peter J. Williams', work: 'Can We Trust the Gospels?', year: '2018', status: 'paraphrase', quote: `Geographische, onomastische und sprachliche Detailkenntnis der Evangelisten.` }],
    },
  ],
  dialog: [
    {
      id: 'evangelien-spaet',
      objection: `Markus schrieb um 70, Johannes um 95 – das sind 40 bis 65 Jahre nach Jesus. In dieser Zeit wurden Geschichten erzählt, verändert und ausgeschmückt. Das sind keine Augenzeugenberichte.`,
      objectionBy: 'Bart Ehrman',
      answer: `Selbst nach deiner Datierung lebten bei der Abfassung noch Augenzeugen – auch Gegner, die hätten widersprechen können. Für antike Biografien ist das außergewöhnlich früh: Unsere ersten erhaltenen Lebensbeschreibungen Alexanders entstanden rund 400 Jahre nach ihm, und doch halten Historiker sie für brauchbar. Außerdem sind die Überlieferungen älter als die Evangelien: Paulus' Briefe stammen aus den 50ern, und seine Credo-Formeln reichen in die 30er Jahre zurück.`,
      questionsBack: [
        `Welche antike Biografie entstand näher am Leben ihres Helden als die Evangelien?`,
        `Wie viel Zeit braucht nach deiner Meinung eine Legende, um die Erinnerung lebender Zeugen zu verdrängen?`,
      ],
      followUps: [
        {
          id: 'tempelprophetie',
          objection: `Die Datierung nach 70 ist nicht willkürlich: Mk 13 und besonders Lk 21,20 („Jerusalem von einem Heer belagert") setzen die Zerstörung Jerusalems voraus. Das ist eine Prophezeiung im Nachhinein.`,
          objectionBy: 'Dan McClellan / Bart Ehrman',
          answer: `Dieses Argument setzt voraus, dass echte Vorhersagen unmöglich sind – eine philosophische, keine historische Annahme. Aber selbst ohne Übernatürliches: Den Untergang des Tempels sagten auch andere voraus. Josephus berichtet von einem Jesus, Sohn des Ananias, der ab dem Jahr 62 jahrelang „Wehe über Jerusalem und den Tempel" rief. C. H. Dodd zeigte zudem, dass Lukas' Formulierungen aus den alttestamentlichen Schilderungen der Zerstörung von 586 v. Chr. stammen, nicht aus Details des Jahres 70. Typische Ereignisse von 70 – der Brand des Tempels, der Bürgerkrieg in der Stadt – fehlen.`,
          detail: `**Mt 24,20:** „Bittet aber, daß eure Flucht nicht geschehe im Winter oder am Sabbat" – eine Mahnung, die eher vor dem Ereignis Sinn ergibt.

**Prophetiefrage im Detail:** Siehe Themenblock Prophetie (z. B. „Daniel wurde erst um 165 v. Chr. geschrieben" – dieselbe methodische Frage).`,
          sources: [
            { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdischer Krieg', ref: '6,300–309', year: 'ca. 75', quote: `Vier Jahre vor dem Krieg begann ein Bauer, Jesus, Sohn des Ananias, beim Laubhüttenfest zu rufen: „Eine Stimme vom Osten … eine Stimme gegen Jerusalem und den Tempel …" – und tat es jahrelang bis zur Belagerung.`, status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'C. H. Dodd', work: `The Fall of Jerusalem and the „Abomination of Desolation". Journal of Roman Studies 37`, year: '1947', quote: `Die lukanischen Formulierungen sind aus der Septuaginta-Sprache über die Zerstörung von 586 v. Chr. gebildet, nicht aus Augenzeugenberichten des Jahres 70.`, status: 'paraphrase' },
            { kind: 'bibel', work: 'Matthäus', ref: '24,20', quote: `Bittet aber, daß eure Flucht nicht geschehe im Winter oder am Sabbat.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'apg-ende-literarisch',
              objection: `Das abrupte Ende der Apostelgeschichte (Paulus predigt „ungehindert" in Rom) ist ein literarischer Kunstgriff – Lukas wollte triumphal enden. Pervo datiert die Apostelgeschichte sogar um 115. Das Schweigen über Paulus' Tod beweist nichts.`,
              objectionBy: 'Richard Pervo / Bart Ehrman',
              answer: `Möglich – ein literarisches Motiv ist nicht ausgeschlossen. Aber das Schweigen betrifft nicht nur Paulus: Lukas erwähnt weder den Tod des Jakobus (62), den er als Leiter der Jerusalemer Gemeinde darstellt (Apg 15; 21), noch Neros Verfolgung (64), noch den Fall Jerusalems (70), der für seine Tempeltheologie zentral wäre. Er deutet Paulus' Tod an (Apg 20,25.38), erzählt ihn aber nicht. Deshalb hat schon Harnack 1911 seine Spätdatierung aufgegeben. Ich behaupte nicht, dass eine Frühdatierung bewiesen ist – nur, dass sie gut begründet ist. Und selbst die späteren Daten liegen in Reichweite lebender Erinnerung.`,
              sources: [
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '28,30–31', quote: `Paulus aber blieb zwei Jahre in seinem eigenen Gedinge und nahm auf alle, die zu ihm einkamen, predigte das Reich Gottes und lehrte von dem HERRN Jesus mit aller Freudigkeit unverboten.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'fruehdatierung-apologetisch',
                  objection: `Frühdatierungen sind doch reines Wunschdenken konservativer Apologeten.`,
                  objectionBy: 'Kipp Davis',
                  answer: `Nicht nur: John A. T. Robinson, der alle NT-Schriften vor 70 datierte, war ein liberaler Bischof, bekannt durch sein kirchenkritisches Buch „Honest to God" (1963). James Crossley, der Markus in die späten 30er bis 40er Jahre datiert, ist ein säkularer Forscher; der Agnostiker Maurice Casey setzte Markus um 40 an. Frühdatierungen werden aus Gründen vertreten, nicht aus Bekenntnis – und sie sollten mit Gründen widerlegt werden.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'anonym-titel-spaet',
      objection: `Kein Evangelium nennt seinen Verfasser. Die Titel „nach Matthäus" usw. wurden im 2. Jahrhundert hinzugefügt. Irenäus um 180 ist der erste, der alle vier Namen nennt. Davor waren es anonyme Texte.`,
      objectionBy: 'Bart Ehrman',
      answer: `Anonym im Text heißt nicht anonym in der Überlieferung. Es gibt keine einzige Handschrift, in der ein Evangelium einen anderen Verfassernamen trägt, und wo Anfang oder Ende erhalten sind, steht der übliche Titel – etwa „Evangelium nach Johannes" in P66 und P75 um 200. Und Irenäus ist nicht der Erste: Papias nennt um 110–130 Markus und Matthäus, und Justin spricht um 155 von den „Erinnerungen, die von seinen Aposteln und deren Begleitern verfasst wurden" – genau das Muster: zwei Apostel, zwei Begleiter.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '103,8', year: 'ca. 155–160', quote: `… in den Erinnerungen, die, wie ich sage, von seinen Aposteln und deren Nachfolgern verfasst wurden …`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Kannst du eine einzige Handschrift nennen, in der ein Evangelium einem anderen Verfasser zugeschrieben wird?`,
      ],
      followUps: [
        {
          id: 'titel-standardisiert',
          objection: `Die Einheitlichkeit erklärt sich ganz einfach: Als im 2. Jahrhundert die Vier-Evangelien-Sammlung entstand, wurden die Titel standardisiert. Einheitlichkeit beweist kein hohes Alter.`,
          objectionBy: 'Dan McClellan',
          answer: `Die Evangelien kursierten aber schon **vor** jeder Sammlung einzeln in verschiedenen Provinzen – Markus in Rom, Matthäus in Syrien, Johannes in Kleinasien, alle früh in Ägypten. Jede Gemeinde, die mehr als eines besaß, brauchte Titel. Wären die Texte jahrzehntelang namenlos gewesen, hätten verschiedene Gemeinden verschiedene Vermutungen angestellt. Beim Hebräerbrief sehen wir genau das: Paulus, Barnabas, Lukas, Clemens – und Origenes sagt offen: „Wer ihn geschrieben hat, weiß in Wahrheit Gott." Für die Evangelien gibt es nichts dergleichen.`,
          voices: [
            {
              person: 'origenes',
              role: 'als alexandrinischer Gelehrter',
              text: `Origenes zeigt an einem wirklich unsicheren Fall, wie die Kirche mit Verfasserfragen umging: Beim Hebräerbrief nennt er die Gedanken paulinisch, Stil und Sprache aber nicht; er referiert verschiedene Überlieferungen (Clemens von Rom, Lukas) und schließt mit dem Eingeständnis, dass Gott allein es weiß. Ein Kirchenlehrer, der so ehrlich mit Unsicherheit umgeht, hätte bei den Evangelien keine Einigkeit vorgetäuscht, wenn es keine gab.`,
            },
          ],
          followUps: [
            {
              id: 'hebraeer-anders',
              objection: `Der Hebräerbrief ist ein Sonderfall – ein Brief ohne Absender, bei dem man natürlich nach Paulus fragte. Evangelien sind eine andere Gattung; du vergleichst Äpfel mit Birnen.`,
              objectionBy: 'Kipp Davis',
              answer: `Der Vergleich zeigt etwas Grundsätzliches: Wo die Kirche den Verfasser nicht kannte, sagte sie es – Tertullian schrieb den Hebräerbrief Barnabas zu, Clemens von Alexandrien hielt ihn für eine Übersetzung des Lukas, Origenes ließ es offen. Die Kirche hat also nicht routinemäßig apostolische Namen verteilt. Das Gleiche gilt für Schriften wie den Barnabasbrief oder den Hirten des Hermas, deren Status offen diskutiert wurde. Bei den vier Evangelien findet sich keine einzige solche Debatte.`,
              followUps: [
                {
                  id: 'apokryphen-apostelnamen',
                  objection: `Auch die Apokryphen tragen Apostelnamen – Petrusevangelium, Thomasevangelium, Philippusevangelium. Man gab Texten Apostelnamen, um ihnen Autorität zu verleihen. Warum sollte das bei den kanonischen anders sein?`,
                  objectionBy: 'Dan McClellan / Bart Ehrman',
                  answer: `Genau das ist der Unterschied: Fälscher wählten die prominentesten Namen – Petrus, Thomas, Philippus, Maria, Judas. Zwei der vier kanonischen Evangelien tragen dagegen die Namen von **Nicht-Aposteln**: Markus und Lukas. Das ergibt keinen Sinn, wenn man Autorität erfinden wollte. Zudem prüfte die Kirche Apokryphen kritisch: Bischof Serapion von Antiochien las um 200 das Petrusevangelium, erkannte dessen Irrlehren und verwarf es mit der Bemerkung, Schriften, die fälschlich unter Apostelnamen laufen, nehme man nicht an.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Serapion von Antiochien (bei Eusebius)', work: 'Kirchengeschichte', ref: 'VI,12,3–6', year: 'ca. 200', quote: `Wir nehmen Petrus und die anderen Apostel an wie Christus; die Schriften aber, die fälschlich unter ihrem Namen laufen, weisen wir als Erfahrene zurück.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Wenn die Kirche Namen für Autorität erfand – warum dann Markus und Lukas statt Petrus und Paulus?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'papias-unzuverlaessig',
          objection: `Papias ist kein zuverlässiger Zeuge – er erzählt groteske Legenden über den aufgeblähten Judas. Und er sagt, Matthäus habe „Logien" auf Hebräisch zusammengestellt. Unser Matthäus ist aber griechisch und übernimmt fast den ganzen Markus. Papias spricht also von einem anderen Werk.`,
          objectionBy: 'Bart Ehrman',
          answer: `Papias hat sicher nicht alles kritisch geprüft – die Judas-Legende zeigt das. Aber seine Notiz über Markus gibt er ausdrücklich als Aussage eines „Ältesten" weiter, also aus der Generation, die die Apostel noch kannte; sie reicht damit ins 1. Jahrhundert. Bei Matthäus hast du einen ehrlichen Punkt: Die Notiz ist schwierig. Manche deuten „in hebräischer Sprache" als „in hebräischem Stil" (Kürzinger), andere denken an eine frühere aramäische Sammlung. Ich gebe zu: Die Verfasserschaft des Matthäus ist der am schwächsten belegte Teil der Tradition – aber die Kirche schrieb unser griechisches Evangelium einhellig ihm zu.`,
          sources: [
            { kind: 'fachliteratur', author: 'Josef Kürzinger', work: 'Das Papiaszeugnis und die Erstgestalt des Matthäusevangeliums. Biblische Zeitschrift NF 4', year: '1960', quote: `Kürzinger deutet „Hebraidi dialektō" als Hinweis auf eine hebräische (semitische) Darstellungsweise, nicht notwendig auf eine hebräische Sprache.`, status: 'paraphrase' },
          ],
        },
        {
          id: 'justin-nennt-keine-namen',
          objection: `Justin spricht nur von „Erinnerungen der Apostel" – ohne einen einzigen Namen. Das zeigt doch, dass die Namen Mitte des 2. Jahrhunderts noch gar nicht feststanden.`,
          objectionBy: 'Bart Ehrman (sinngemäß)',
          answer: `Justin schreibt seine Apologien an den heidnischen Kaiser und den Senat – Namen wie „Markus" hätten diesen Lesern nichts gesagt; er wählt einen Begriff, den Gebildete verstanden (wie Xenophons „Erinnerungen an Sokrates"). Im Dialog mit Tryphon wird er aber konkreter: Er erwähnt, dass Jesus den Söhnen des Zebedäus den Namen „Boanerges" gab, und sagt, das stehe in den „Erinnerungen des Petrus" (Dial. 106,3). Dieses Detail findet sich nur im Markusevangelium (Mk 3,17) – Justin kennt Markus also als Petrus-Erinnerung, genau wie Papias.`,
          sources: [
            { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '106,3', year: 'ca. 155–160', quote: `In seinen (des Petrus) Erinnerungen ist geschrieben, dass er auch die beiden Söhne des Zebedäus „Boanerges", das heißt „Donnersöhne", nannte.`, status: 'paraphrase' },
            { kind: 'bibel', work: 'Markus', ref: '3,17', quote: `und Jakobus, den Sohn des Zebedäus, und Johannes, den Bruder des Jakobus, und gab ihnen den Namen Bnehargem, das ist gesagt: Donnerskinder;`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'analphabeten',
      objection: `Petrus und Johannes waren nach Apg 4,13 „ungelehrte Leute" – aramäischsprachige Fischer aus Galiläa. Die Evangelien aber sind in literarischem Griechisch geschrieben. Galiläische Fischer konnten das nicht.`,
      objectionBy: 'Bart Ehrman (Forged, 2011)',
      answer: `Niemand behauptet, Petrus habe ein Evangelium geschrieben – die Tradition sagt, Markus habe seine Predigt aufgezeichnet. Markus stammte aus einer Jerusalemer Familie mit Haus und Dienerschaft (Apg 12,12–13), Lukas war ein gebildeter Arzt, Matthäus ein Zöllner – ein Beruf, der Lesen, Schreiben und Rechnen, oft auch Griechisch erforderte. Und „ungelehrt" (agrammatoi) heißt in Apg 4,13 „ohne Schriftgelehrtenausbildung" – dasselbe sagte man über Jesus: „Wie kennt dieser die Schrift, so er sie doch nicht gelernt hat?" (Joh 7,15). Jesus aber las in der Synagoge aus Jesaja vor (Lk 4,16–17).`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '4,13', quote: `Sie sahen aber an die Freudigkeit des Petrus und Johannes und verwunderten sich; denn sie waren gewiß, daß es ungelehrte Leute und Laien waren …`, original: `ἄνθρωποι ἀγράμματοί εἰσιν καὶ ἰδιῶται`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
        { kind: 'bibel', work: 'Johannes', ref: '7,15', quote: `Und die Juden verwunderten sich und sprachen: Wie kann dieser die Schrift, so er sie doch nicht gelernt hat?`, original: `πῶς οὗτος γράμματα οἶδεν μὴ μεμαθηκώς;`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'sekretaer-ausrede',
          objection: `Die Sekretär-These ist eine Ausrede. Wenn ein Schreiber ein ganzes Evangelium formuliert, ist er der eigentliche Autor – nicht der Apostel.`,
          objectionBy: 'Bart Ehrman',
          answer: `Nach antikem Verständnis war Autor, wessen Zeugnis und Autorität hinter einem Werk stand – auch wenn andere beim Formulieren halfen. Josephus, ein Jude aus Jerusalem, schreibt selbst, dass er für seinen „Jüdischen Krieg" Mitarbeiter für das Griechische heranzog – und doch gilt er zu Recht als Verfasser. Paulus diktierte seine Briefe (Röm 16,22: „Ich, Tertius, der ich diesen Brief geschrieben habe"), 1 Petr 5,12 nennt Silvanus als Mittler. Das ist keine Ausrede, sondern antike Praxis.`,
          sources: [
            { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Contra Apionem', ref: '1,50', year: 'ca. 95', quote: `Josephus berichtet, er habe für die griechische Sprache einige Mitarbeiter hinzugezogen.`, status: 'paraphrase' },
            { kind: 'bibel', work: 'Römer', ref: '16,22', quote: `Ich, Tertius, grüße euch, der ich diesen Brief geschrieben habe, in dem HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'lukas-matthaeus-abhaengig',
      objection: `Lukas gibt selbst zu, kein Augenzeuge zu sein. Und Matthäus übernimmt rund 80 % des Markus, oft wörtlich. Warum sollte ein Augenzeuge, ein Apostel, den Bericht eines Nicht-Augenzeugen abschreiben?`,
      objectionBy: 'Bart Ehrman',
      answer: `Lukas hat nie beansprucht, Augenzeuge zu sein – er beansprucht Zugang zu Augenzeugen und sorgfältige Recherche, und die „Wir"-Berichte zeigen ihn als Reisebegleiter des Paulus. Zu Matthäus: Wenn Markus die Predigt des Petrus wiedergibt, ist es durchaus verständlich, dass ein anderer Apostel diesen Bericht des führenden Apostels als Grundgerüst nutzt und ergänzt. Zudem ist das synoptische Verhältnis nicht endgültig geklärt; Augustinus etwa hielt Markus für eine Kurzfassung des Matthäus.`,
      followUps: [
        {
          id: 'bauckham-kritik',
          objection: `Bauckhams Namensstatistik beweist gar nichts. Auch ein späterer Autor konnte gängige jüdische Namen verwenden.`,
          objectionBy: 'Dan McClellan / Kipp Davis',
          answer: `Sie beweist nicht, dass jeder Satz von einem Augenzeugen stammt – das behaupte ich nicht. Sie zeigt aber, dass die Überlieferung im **Palästina vor 70** verwurzelt ist: Die relativen Häufigkeiten stimmen mit der dortigen Namensverteilung überein, nicht mit der in der Diaspora (z. B. Ägypten), und häufige Namen werden genau so unterschieden, wie es dort nötig war. Apokryphe Evangelien zeigen dieses Muster nicht. Ehrlich: Bauckhams weitergehende Augenzeugenthese ist in der Forschung umstritten – aber die Namensdaten selbst sind solide.`,
          sources: [
            { kind: 'fachliteratur', author: 'Tal Ilan', work: 'Lexicon of Jewish Names in Late Antiquity, Part I: Palestine 330 BCE – 200 CE', year: '2002', quote: `Datenbasis zur Häufigkeit jüdischer Namen in Palästina, auf die sich Bauckham stützt.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'johannes-gemeinde',
      objection: `Joh 21,24 verrät es doch selbst: „Wir wissen, dass sein Zeugnis wahr ist." Das Johannesevangelium wurde von einer Gemeinde verfasst, nicht vom Apostel.`,
      objectionBy: 'Kipp Davis / Dan McClellan',
      answer: `Der Vers sagt zweierlei: Der Lieblingsjünger „zeugt von diesen Dingen **und hat dies geschrieben**", und eine Gruppe („wir") bestätigt sein Zeugnis. Das passt zur alten Überlieferung, dass Johannes in Ephesus im Kreis seiner Schüler schrieb (Irenäus). Ein Evangelium, das sich ausdrücklich auf einen Augenzeugen als Quelle und Schreiber beruft, ist das Gegenteil eines anonymen Textes.`,
      followUps: [
        {
          id: 'lieblingsjuenger-wer',
          objection: `Selbst Bauckham meint, der Lieblingsjünger sei nicht Johannes, der Sohn des Zebedäus, sondern ein „Johannes der Älteste". Eure Tradition stimmt also nicht einmal nach euren eigenen Gelehrten.`,
          objectionBy: 'Kipp Davis',
          answer: `Richtig, Bauckham vertritt diese These; die koptische Kirche und die alte Tradition sehen im Lieblingsjünger Johannes, den Sohn des Zebedäus. Für unsere Frage ist entscheidend: Beide Positionen sehen hinter dem Evangelium einen **Augenzeugen** aus dem Jüngerkreis Jesu. Die Debatte geht darum, **welcher** Augenzeuge – nicht darum, ob es einer war.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Handschrift schreibt ein Evangelium einem anderen Verfasser zu?`,
    `Warum hätte man Evangelien Nicht-Aposteln wie Markus und Lukas zugeschrieben, wenn es um Autorität ging?`,
    `Warum gab es beim Hebräerbrief offene Debatten über den Verfasser, bei den Evangelien aber nicht?`,
    `Welche antike Biografie entstand näher am Leben ihres Helden als die Evangelien?`,
    `Warum schweigt die Apostelgeschichte über den Tod des Jakobus, Neros Verfolgung und den Fall Jerusalems?`,
  ],
  avoid: [
    `Behaupten, die Verfasserschaft aller vier Evangelien sei „bewiesen" – sprich von guten Gründen und starker Tradition.`,
    `Die Frühdatierung (vor 70) als Konsens ausgeben – sie ist eine begründete Minderheitsposition.`,
    `Papias' Matthäus-Notiz als eindeutigen Beleg für unser griechisches Matthäusevangelium präsentieren.`,
    `Den Gegner als „ungläubigen Gelehrten" abtun – Ehrman kennt das Material sehr gut; antworte mit Quellen.`,
  ],
  concessions: [
    `Die Evangelien nennen ihre Verfasser nicht im Text; die Namen stehen in den Titeln und in der Tradition.`,
    `Die Mehrheit der kritischen Forscher datiert die Evangelien zwischen 65 und 100 und hält sie für ursprünglich anonym.`,
    `Die Verfasserschaft des Matthäusevangeliums ist das schwächste Glied der Tradition; beim Johannesevangelium ist die Identität des Lieblingsjüngers diskutiert.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2. Aufl. 2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Martin Hengel', work: 'The Four Gospels and the One Gospel of Jesus Christ', year: '2000', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Brant Pitre', work: 'The Case for Jesus: The Biblical and Historical Evidence for Christ', year: '2016', status: 'paraphrase', note: 'Leicht lesbar, stark zur Titelfrage.' },
    { kind: 'fachliteratur', author: 'Peter J. Williams', work: 'Can We Trust the Gospels?', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John A. T. Robinson', work: 'Redating the New Testament', year: '1976', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Datierung', 'Verfasserschaft', 'Papias', 'Irenäus', 'Evangelientitel', 'Markus', 'Alexandrien'],
  related: [
    'islam-bibelverfaelschung/evangelien-menschenwort',
    'neues-testament/stille-post',
    'neues-testament/evangelien-widersprechen-sich',
    'prophetie/daniel-spaetdatierung',
    'auferstehung/legende-entwickelte-sich',
  ],
};

export default claim;
