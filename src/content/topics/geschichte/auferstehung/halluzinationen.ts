import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'halluzinationen',
  title: `„Die Jünger hatten Halluzinationen – sie sahen nicht den Auferstandenen, sondern Visionen."`,
  proponents: [
    { name: 'Gerd Lüdemann', role: 'Neutestamentler, Göttingen', work: 'Die Auferstehung Jesu. Historie, Erfahrung, Theologie (1994); What Really Happened to Jesus (1995)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'How Jesus Became God (2014), Kap. 4–5' },
    { name: 'Michael Goulder', role: 'Neutestamentler, Birmingham', work: `The Baseless Fabric of a Vision. In: G. D'Costa (Hg.), Resurrection Reconsidered (1996)` },
    { name: 'Kelsos (Celsus)', role: 'Platonischer Philosoph, 2. Jh.', work: 'Das wahre Wort (ca. 170–180), erhalten bei Origenes' },
  ],
  steelman: `Niemand bestreitet, dass die Jünger etwas erlebt haben – aber erlebt ist nicht gleich wirklich. Visionen Verstorbener sind gut dokumentiert: Ein großer Teil trauernder Menschen berichtet, den Verstorbenen gesehen, gehört oder gespürt zu haben, manchmal sogar mehrere zugleich. Die Jünger waren traumatisiert, voller Schuld (Petrus hatte Jesus verleugnet) und lebten in einer apokalyptischen Erwartung, in der „Auferstehung" ein naheliegendes Deutungsmuster war. Petrus hatte die erste Vision, die anderen ließen sich in einer Gruppe religiöser Erregung mitreißen; Paulus, innerlich zerrissen zwischen Gesetz und Anziehung zur neuen Bewegung, erlebte eine Bekehrungsvision. Paulus selbst setzt seine Erscheinung mit der der anderen gleich (1 Kor 15,8) – und seine war offensichtlich visionär. Erst später machten die Evangelien daraus handfeste Begegnungen mit Essen und Berühren. Schon Kelsos sagte im 2. Jahrhundert: eine aufgeregte Frau und einige Verblendete haben geträumt, was sie sich wünschten. – So etwa Gerd Lüdemann.`,
  biblical: {
    summary: `Die Berichte unterscheiden ausdrücklich zwischen einer Erscheinung des Auferstandenen und einer bloßen Vision oder einem „Geist". Die Jünger selbst dachten zuerst an einen Geist und wurden widerlegt (Lk 24,37–43). Die Erscheinungen erfolgen an verschiedene Personen und Gruppen, an verschiedenen Orten, über vierzig Tage (Apg 1,3), und sie enden – danach spricht Paulus nur noch von „Gesichten und Offenbarungen" (2 Kor 12,1), die er davon unterscheidet. Das älteste Zeugnis, das Credo in 1 Kor 15,3–8, nennt konkrete, befragbare Zeugen.`,
    detail: `**Das Credo (1 Kor 15,3–8):** gestorben – begraben – auferweckt am dritten Tag – erschienen dem Kephas, den Zwölf, mehr als fünfhundert Brüdern „auf einmal, deren noch viele leben", dem Jakobus, allen Aposteln, zuletzt Paulus. Paulus hat es „empfangen" – die Mehrheit der Forscher datiert diese Überlieferung in die ersten Jahre nach der Kreuzigung (siehe Claim „Legende").

**Wichtige Unterscheidungen im Text:**
- Lk 24,37: „meinten, sie sähen einen Geist" – die naheliegende jüdische Deutung einer Erscheinung eines Toten. Jesus widerlegt sie.
- Apg 12,15: Als Petrus vor der Tür steht, sagen die Jünger: „Es ist sein Engel" – so deutete man unerwartete Erscheinungen, nicht als „Auferstehung".
- Apg 10,41: Zeugen, „die wir mit ihm gegessen und getrunken haben, nachdem er auferstanden war".
- Mt 28,17: „etliche aber zweifelten" – die Berichte verschweigen nicht, dass die Jünger keine leichtgläubigen Visionäre waren.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,3–8', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsere Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift, und daß er gesehen worden ist von Kephas, darnach von den Zwölfen. Darnach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal, deren noch viele leben, etliche aber sind entschlafen. Darnach ist er gesehen worden von Jakobus, darnach von allen Aposteln. Am letzten nach allen ist er auch von mir, als einer unzeitigen Geburt, gesehen worden.`, original: `ὤφθη Κηφᾷ, εἶτα τοῖς δώδεκα … ἐξ ὧν οἱ πλείονες μένουσιν ἕως ἄρτι`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '24,37–39', quote: `Sie erschraken aber und fürchteten sich, meinten, sie sähen einen Geist. … Sehet meine Hände und meine Füße: ich bin's selber. Fühlet mich und sehet; denn ein Geist hat nicht Fleisch und Bein, wie ihr sehet, daß ich habe.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '10,40–41', quote: `Den hat Gott auferweckt am dritten Tage und ihn lassen offenbar werden, nicht allem Volk, sondern uns, den vorerwählten Zeugen von Gott, die wir mit ihm gegessen und getrunken haben, nachdem er auferstanden war von den Toten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '12,15', quote: `Sie aber sprachen zu ihr: Du bist unsinnig. Sie aber bestand darauf, es wäre also. Sie sprachen: Es ist sein Engel.`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche verkündet die leibliche Auferstehung Christi als Grund ihres ganzen Glaubens (1 Kor 15,14). Der Auferstandene ist derselbe, der gekreuzigt wurde, mit verklärtem, aber wirklichem Leib – die Wundmale bleiben (Joh 20,27). In der koptischen Osterliturgie wird das Grab des Herrn als leeres Grab gefeiert; der Ostergruß „Christos anesti – alēthōs anesti" („Christus ist auferstanden – er ist wahrhaft auferstanden") bekennt ein Ereignis, keine Vision. Der Halluzinationseinwand ist alt: Origenes von Alexandrien hat ihn schon im 3. Jahrhundert gegen Kelsos beantwortet.`,
    detail: `Der hl. Athanasius sieht den stärksten Beweis der Auferstehung in ihrer **Wirkung**: Ein Toter kann nicht Menschen verwandeln, Götzen stürzen und die Todesfurcht besiegen; wer sieht, wie Christen den Tod verachten, soll nicht zweifeln, dass Christus den Tod besiegt hat (De Incarnatione 27–30). Die Kirche liest die Erscheinungsberichte nicht als subjektive Erlebnisse, sondern mit Lukas als „mancherlei Erweisungen" (Apg 1,3).`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,14', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '27–30', year: 'ca. 318', quote: `Dass der Tod vernichtet ist und das Kreuz über ihn gesiegt hat, zeigt sich daran, dass alle Jünger Christi ihn verachten und ihm entgegengehen, statt ihn zu fürchten.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'II,55–67', year: 'ca. 248', quote: `Ausführliche Erwiderung auf Kelsos' Behauptung, die Erscheinungen seien Träume oder Wunschbilder gewesen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Fast alle kritischen Forscher gestehen zu, dass die Jünger kurz nach Jesu Tod Erlebnisse hatten, die sie als Erscheinungen des Auferstandenen verstanden. Gerd Lüdemann nennt dies „historisch sicher", E. P. Sanders „eine Tatsache", Bart Ehrman eine „historische Tatsache", dass sie es glaubten. Strittig ist die Deutung: subjektive Visionen (Lüdemann, Ehrman, Goulder) oder reale Begegnungen. Der ehrliche christliche Forscher Dale Allison hat das Material zu Visionen Verstorbener ausführlich gesichtet und betont, dass es manche Parallelen gibt – aber nicht alle Daten erklärt.`,
    detail: `**Die „Minimal Facts" (Gary Habermas):** Tatsachen, die von der großen Mehrheit kritischer Forscher anerkannt werden: (1) Jesus starb durch Kreuzigung. (2) Die Jünger hatten Erlebnisse, die sie für Erscheinungen des Auferstandenen hielten. (3) Die Jünger wurden verwandelt und verkündeten die Auferstehung trotz Verfolgung. (4) Die Verkündigung begann sehr früh. (5) Jakobus, der skeptische Bruder Jesu, wurde bekehrt. (6) Paulus, der Verfolger, wurde bekehrt. Oft wird ergänzt: (7) das leere Grab (weniger einhellig anerkannt).

**Ehrlich zu Habermas' Zahlen:** Habermas berichtet aus seiner Literaturdatenbank, dass rund 75 % der Fachautoren das leere Grab für historisch halten (Journal for the Study of the Historical Jesus, 2005). Diese Datenbank ist nicht vollständig veröffentlicht; Kritiker monieren die mangelnde Überprüfbarkeit. Das Argument hängt aber nicht an Prozentzahlen, sondern an den Zugeständnissen namhafter Kritiker selbst.

**Psychiatrische Einzelfragen** (Trauerhalluzinationen, Gruppenhalluzinationen) werden im Themenblock Psychiatrie vertieft.`,
    sources: [
      { kind: 'gegner', author: 'Gerd Lüdemann', work: 'What Really Happened to Jesus: A Historical Approach to the Resurrection', year: '1995', quote: `Es kann als historisch sicher gelten, dass Petrus und die Jünger nach Jesu Tod Erlebnisse hatten, in denen Jesus ihnen als der auferstandene Christus erschien.`, status: 'paraphrase', note: 'Lüdemann deutet diese Erlebnisse als Visionen.' },
      { kind: 'gegner', author: 'E. P. Sanders', work: 'The Historical Figure of Jesus', year: '1993', quote: `Dass Jesu Anhänger (und später Paulus) Auferstehungserfahrungen hatten, ist nach Sanders' Urteil eine Tatsache; welche Wirklichkeit ihnen zugrunde lag, wisse er nicht.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'The New Testament: A Historical Introduction to the Early Christian Writings', quote: `Es ist eine historische Tatsache, dass einige Anhänger Jesu kurz nach seiner Hinrichtung zu der Überzeugung kamen, er sei von den Toten auferweckt worden.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Gary R. Habermas', work: `Resurrection Research from 1975 to the Present: What Are Critical Scholars Saying? Journal for the Study of the Historical Jesus 3`, year: '2005', quote: `Überblick über rund 2000 Veröffentlichungen; Habermas berichtet, dass etwa drei Viertel der Autoren das leere Grab für historisch halten.`, status: 'paraphrase', note: 'Datenbasis nicht vollständig veröffentlicht – Prozentzahl nur mit dieser Einschränkung verwenden.' },
      { kind: 'fachliteratur', author: 'Dale C. Allison', work: 'The Resurrection of Jesus: Apologetics, Polemics, History', year: '2021', quote: `Allison sichtet umfangreiches Material zu Erscheinungen Verstorbener und kommt zu einem differenzierten Urteil, das weder apologetische noch skeptische Vereinfachungen stützt.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Halluzinationen erklären drei Dinge nicht: Erstens **das leere Grab** – eine Vision lässt keinen Leichnam verschwinden, und in Jerusalem hätte man ihn einfach vorzeigen können. Zweitens **die Gruppen und die Gegner**: Jesus erschien den Zwölf, über 500 Menschen gleichzeitig, seinem skeptischen Bruder Jakobus und seinem Verfolger Paulus. Drittens **die Deutung**: Juden, die einen Verstorbenen „sahen", hätten an einen Geist oder Engel gedacht – nie an eine leibliche Auferstehung eines Einzelnen mitten in der Geschichte. Das war in ihrer Vorstellungswelt nicht vorgesehen.`,
  keyPoints: [
    `**Das leere Grab bleibt unerklärt:** Halluzinationen bewegen keine Leichname; die jüdische Gegenpropaganda (Mt 28,13–15) setzt das leere Grab voraus.`,
    `**Vielfalt der Erscheinungen:** Einzelne und Gruppen, Männer und Frauen, drinnen und draußen, Jerusalem und Galiläa, über Wochen – ein Muster, das zu keiner bekannten Halluzinationsform passt.`,
    `**Skeptiker und Gegner:** Jakobus hielt Jesus für verrückt (Mk 3,21; Joh 7,5), Paulus verfolgte die Gemeinde – beide trauerten nicht und wünschten keine Vision.`,
    `**Jüdische Kategorien:** „Auferstehung" bedeutete leibliche Auferweckung aller Gerechten am Ende der Zeit – nicht eines Einzelnen vorher. Visionen hätten zu „Er ist bei Gott" oder „sein Engel" geführt (N. T. Wright).`,
    `**Die Zugeständnisse der Kritiker:** Lüdemann, Sanders, Ehrman und Fredriksen räumen ein, dass die Jünger wirklich etwas erlebten, das sie für Begegnungen hielten.`,
    `**Ein alter Einwand:** Schon Kelsos (2. Jh.) sprach von Wunschträumen; Origenes antwortete, dass Träume weder die vielen Zeugen noch die Verwandlung der Jünger erklären.`,
  ],
  argument: {
    name: 'Abduktion auf die beste Erklärung',
    summary: 'Welche Hypothese erklärt alle anerkannten Daten?',
    premises: [
      {
        text: `P1: Folgende Daten sind historisch gut begründet: (a) Jesus starb durch Kreuzigung und wurde begraben; (b) sein Grab wurde leer gefunden; (c) Einzelne und Gruppen erlebten Erscheinungen, die sie als leibliche Begegnungen verstanden; (d) der Skeptiker Jakobus und der Verfolger Paulus wurden dadurch bekehrt; (e) die Jünger verkündeten von Anfang an eine leibliche Auferstehung.`,
        support: `Belegt durch 1 Kor 15,3–8 (frühes Credo), Gal 1,18–19, die Evangelien und die Zugeständnisse kritischer Forscher (Lüdemann, Sanders, Ehrman, Fredriksen). (b) ist weniger einhellig, aber von der Mehrheit anerkannt.`,
      },
      {
        text: `P2: Die Halluzinationshypothese erklärt höchstens (c) teilweise – nicht (b), kaum (d) und nicht (e).`,
        support: `Visionen lassen kein Grab leer werden; Jakobus und Paulus fehlte die Trauer- und Wunschdisposition; und Visionen eines Toten wurden im Judentum nicht als „Auferstehung" gedeutet.`,
      },
      {
        text: `P3: Die Hypothese „Gott hat Jesus auferweckt" erklärt alle Daten (a)–(e) und passt zum religiösen Kontext, in dem Jesus beanspruchte, im Namen Gottes zu handeln.`,
        support: `Sie ist nur dann „unmöglich", wenn man Gottes Existenz oder Wirken von vornherein ausschließt – das ist eine philosophische, keine historische Vorentscheidung (siehe Claim „Wunder").`,
      },
    ],
    conclusion: `Also ist die Auferstehung die beste Erklärung der historischen Daten – sofern man Gottes Handeln nicht a priori ausschließt.`,
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Zeuge und Überlieferer des Credos',
      text: `Paulus gibt in 1 Kor 15 ein Bekenntnis weiter, das er „empfangen" hat, und nennt konkrete Zeugen mit Namen. Er fügt hinzu, die meisten der fünfhundert seien noch am Leben – eine kaum verhüllte Einladung, sie zu befragen. Seine eigene Begegnung zählt er ausdrücklich als die **letzte** („am letzten nach allen", „als einer unzeitigen Geburt"); spätere Visionen (2 Kor 12,1–4) unterscheidet er davon. Für Paulus hängt alles an der Realität des Ereignisses: Wäre Christus nicht auferstanden, wären die Apostel „falsche Zeugen Gottes" (1 Kor 15,15).`,
      sources: [{ kind: 'bibel', work: '1. Korinther', ref: '15,15', quote: `Wir würden aber auch erfunden als falsche Zeugen Gottes, daß wir wider Gott gezeuget hätten, er hätte Christum auferweckt, den er nicht auferweckt hätte …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' }],
    },
    {
      person: 'petrus',
      role: 'als erster Zeuge der Erscheinungen',
      text: `Petrus, dem der Auferstandene nach 1 Kor 15,5 und Lk 24,34 zuerst unter den Aposteln erschien, verkündet sieben Wochen später in Jerusalem öffentlich die Auferstehung – in der Stadt, in der Jesus hingerichtet und begraben wurde (Apg 2). Er beruft sich nicht auf innere Erlebnisse, sondern darauf, mit dem Auferstandenen „gegessen und getrunken" zu haben (Apg 10,41). Der Mann, der in der Passionsnacht vor einer Magd versagte, tritt nun vor dem Hohen Rat auf und sagt: „Wir können's ja nicht lassen, daß wir nicht reden sollten, was wir gesehen und gehört haben" (Apg 4,20).`,
      sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '4,20', quote: `Wir können's ja nicht lassen, daß wir nicht reden sollten, was wir gesehen und gehört haben.`, translation: 'Luther 1912', status: 'verbatim' }],
    },
    {
      person: 'origenes',
      role: 'als Apologet gegen Kelsos',
      text: `Kelsos behauptete um 170–180, die Auferstehung beruhe auf einer „halb rasenden Frau" und einigen anderen, die entweder geträumt oder sich aus Wunschdenken ein Trugbild geschaffen hätten (Contra Celsum II,55). Origenes antwortet, dass Traumgesichte und Wahnbilder bei Einzelnen und unter besonderen Umständen auftreten, nicht aber als wiederholte Begegnungen mit vielen Zeugen bei Tag; dass Kelsos die Bereitschaft der Jünger, für dieses Zeugnis zu leiden und zu sterben, nicht erklärt; und dass eine Einbildung keine so gründliche Wandlung von Menschen bewirkt. Bemerkenswert: Der Halluzinationseinwand ist also keine moderne Entdeckung, sondern rund 1800 Jahre alt – und wurde von einem Alexandriner beantwortet.`,
      sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'II,55', year: 'ca. 248', quote: `Kelsos: Wer hat dies gesehen? Eine halb rasende Frau, wie ihr sagt, und vielleicht noch einer aus derselben Gaukelei, der entweder nach einer bestimmten Gemütsverfassung geträumt oder nach seinem Wunsch in irrendem Wahn sich etwas vorgestellt hat.`, status: 'paraphrase' }],
    },
    {
      person: 'nt-wright',
      role: 'als Historiker der jüdischen Auferstehungshoffnung',
      text: `Wright hat in seinem Hauptwerk die Vorstellungen von Leben nach dem Tod in der heidnischen und jüdischen Welt untersucht. Ergebnis: „Auferstehung" (anastasis) bedeutete immer ein neues leibliches Leben **nach** einer Zeit des Totseins – nie ein Weiterleben der Seele. Die jüdische Hoffnung richtete sich auf die Auferstehung aller Gerechten am Ende der Zeit. Niemand erwartete, dass ein Einzelner – noch dazu der Messias – mitten in der Geschichte auferweckt würde. Wenn trauernde Jünger Visionen gehabt hätten, hätten sie gesagt: Er ist bei Gott, sein Geist lebt – nicht: Er ist auferstanden. Dass sie dennoch dieses Wort wählten, verlangt eine Erklärung: leeres Grab **und** Begegnungen zusammen.`,
      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase', quote: `Weder das leere Grab allein noch die Erscheinungen allein hätten den frühchristlichen Glauben erzeugt; zusammen sind sie hinreichend und – nach Wright – historisch notwendig.` }],
    },
    {
      person: 'habermas',
      role: 'als Historiker der Minimal-Facts-Methode',
      text: `Habermas arbeitet bewusst nur mit Tatsachen, die auch skeptische Forscher anerkennen. Gegen die Halluzinationshypothese bringt er vor allem die Vielzahl und Vielfalt der Erscheinungen vor (Einzelne, Gruppen, Skeptiker, Gegner), die Unvereinbarkeit mit dem leeren Grab und die Tatsache, dass selbst Vertreter der Visionshypothese meist mehrere Zusatzannahmen kombinieren müssen (Schuld, Ansteckung, Legende), um alle Daten abzudecken.`,
      sources: [{ kind: 'fachliteratur', author: 'Gary R. Habermas / Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase', quote: `Darstellung der Minimal-Facts-Methode und Prüfung der Halluzinationshypothese.` }],
    },
  ],
  dialog: [
    {
      id: 'trauervisionen-haeufig',
      objection: `Visionen Verstorbener sind nichts Außergewöhnliches. In Studien berichtet ein großer Teil der Hinterbliebenen, den Toten gesehen oder gehört zu haben, manchmal mit Gesprächen. Die Jünger waren in tiefer Trauer – genau das erwartet man.`,
      objectionBy: 'Dale Allison (als Darstellung des Materials) / Bart Ehrman',
      answer: `Trauererlebnisse sind real – aber sie führen nicht zu dem, was die Jünger behaupteten. Hinterbliebene, die einen Verstorbenen sehen, schließen daraus: „Er ist bei Gott", „sein Geist besucht mich" – nicht, dass sein Leib auferstanden und das Grab leer ist. Genau so reagierten die Jünger zuerst: „Sie meinten, sie sähen einen Geist" (Lk 24,37). Zudem trauerten Jakobus und Paulus nicht, und eine Vision erklärt das leere Grab nicht.`,
      detail: `**Was Trauervisionen typischerweise sind:** kurz, meist individuell, häufig ein Gefühl der Anwesenheit, oft im vertrauten Umfeld des Verstorbenen. Sie werden in der Regel als tröstlich erlebt und nicht als Beweis eines neuen Ereignisses in der Welt gedeutet.

**Was die Ostererscheinungen nach den Quellen waren:** wiederholt, an Gruppen, mit Auftrag und Belehrung, über Wochen, an unterschiedlichen Orten – und sie hörten auf.

Die psychiatrische Seite (Häufigkeit, Gruppenphänomene, Studienlage) wird im Claim „Die Auferstehungserscheinungen waren Trauerhalluzinationen" vertieft.`,
      sources: [
        { kind: 'wissenschaft', author: 'W. Dewi Rees', work: 'The Hallucinations of Widowhood. British Medical Journal 4', year: '1971', quote: `Knapp die Hälfte der befragten Verwitweten berichtete von Wahrnehmungen des verstorbenen Partners.`, status: 'paraphrase', note: 'Klassische Studie; Details im Themenblock Psychiatrie.' },
      ],
      questionsBack: [
        `Kennst du einen Fall, in dem Trauervisionen dazu führten, dass Menschen eine leibliche Auferstehung verkündeten – in der Stadt, in der das Grab lag?`,
        `Um wen trauerte Paulus, als er Christen verfolgte?`,
      ],
      followUps: [
        {
          id: 'auferstehung-als-deutung',
          objection: `Die Jünger waren apokalyptische Juden. Sie erwarteten die Auferstehung der Toten. Als sie Jesus in Visionen sahen, deuteten sie das natürlich so: Die Endzeit hat begonnen, die Auferstehung fängt mit ihm an.`,
          objectionBy: 'Bart Ehrman',
          answer: `Gerade das jüdische Muster spricht dagegen: Die Auferstehung sollte **alle** Gerechten **gemeinsam** am **Ende** betreffen – nicht einen Einzelnen, während die Welt weiterläuft. Für einen gerechten Märtyrer hatte das Judentum andere Kategorien bereit: Er ist bei Gott, seine Seele „in Gottes Hand" (Weish 3,1), er wird beim Endgericht auferstehen (2 Makk 7). So sprach man über die Makkabäer oder Johannes den Täufer. Dass die Jünger von einer bereits geschehenen, leiblichen Auferstehung eines Einzelnen sprachen, war eine Neuerung, die eine Ursache braucht.`,
          detail: `**Zum Vergleich:** Als Herodes Antipas von Jesus hörte, meinte er, Johannes der Täufer sei „von den Toten auferstanden" (Mk 6,14–16) – das zeigt zwar, dass man über Ähnliches spekulieren konnte; aber niemand verkündete daraufhin die Auferstehung des Täufers oder gründete eine Bewegung darauf. Messianische Bewegungen nach dem Tod ihres Anführers (Judas der Galiläer, Simon bar Giora) behaupteten nie seine Auferstehung.`,
          sources: [
            { kind: 'bibel', work: 'Weisheit', ref: '3,1–4', quote: `Aber der Gerechten Seelen sind in Gottes Hand, und keine Qual rühret sie an. … Ob sie wohl vor den Menschen viel leiden, so sind sie doch gewisser Hoffnung, daß sie nimmermehr sterben.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase', note: 'Deuterokanonisch – Teil des koptisch-orthodoxen Kanons.' },
            { kind: 'bibel', work: '2. Makkabäer', ref: '7,9', quote: `Der König der Welt wird uns, die wir um seiner Gesetze willen sterben, zu einem ewigen Leben auferwecken.`, status: 'paraphrase', note: 'Auferstehung als zukünftige, endzeitliche Hoffnung der Märtyrer.' },
          ],
          followUps: [
            {
              id: 'grab-nicht-noetig',
              objection: `Für „Auferstehung" brauchte man kein leeres Grab. Paulus spricht nie davon; er sagt, der Auferstehungsleib sei ein „geistlicher Leib" (1 Kor 15,44). Die ersten Christen glaubten an eine geistige Erhöhung, die Grabgeschichte kam später.`,
              objectionBy: 'Richard Carrier / Bart Ehrman',
              answer: `Paulus' Credo lautet: gestorben – **begraben** – auferweckt. Die Erwähnung des Begräbnisses zwischen Tod und Auferweckung ergibt nur Sinn, wenn das Begrabene auferweckt wurde. „Geistlicher Leib" (sōma pneumatikon) bedeutet bei Paulus einen vom Geist Gottes belebten Leib – im Gegensatz zum „seelischen", natürlichen Leib –, nicht einen Leib aus Geist. Und er betont: „Dies Verwesliche muss anziehen die Unverweslichkeit" (1 Kor 15,53) – **dies**. Für einen Juden des 1. Jahrhunderts war „auferweckt" mit einem besetzten Grab ein Widerspruch.`,
              detail: `**Zum Wort pneumatikos:** In 1 Kor 2,14–15 stellt Paulus den „natürlichen" (psychikos) Menschen dem „geistlichen" (pneumatikos) Menschen gegenüber – beide haben einen Körper; der Unterschied ist, wovon sie bestimmt sind. Ebenso in 1 Kor 15,44. Die ausführlichere Behandlung steht im Claim „Legende".

**Weitere Paulusstellen:** Röm 8,11 (Gott wird „eure sterblichen Leiber lebendig machen"); Phil 3,21 (Christus wird „unsern nichtigen Leib verklären, daß er ähnlich werde seinem verklärten Leibe").`,
              sources: [
                { kind: 'bibel', work: '1. Korinther', ref: '15,42–44', quote: `Es wird gesät verweslich und wird auferstehen unverweslich. … Es wird gesät ein natürlicher Leib, und wird auferstehen ein geistlicher Leib.`, original: `σπείρεται σῶμα ψυχικόν, ἐγείρεται σῶμα πνευματικόν`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                { kind: 'bibel', work: 'Philipper', ref: '3,21', quote: `welcher unsern nichtigen Leib verklären wird, daß er ähnlich werde seinem verklärten Leibe …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'neuer-leib-altes-grab',
                  objection: `Manche Juden glaubten, Gott werde einen ganz neuen Leib schaffen – der alte könne ruhig im Grab bleiben. Paulus spricht in 2 Kor 5 davon, dass das irdische „Zelt" abgebrochen und ein „Bau von Gott" gegeben wird.`,
                  objectionBy: 'Richard Carrier',
                  answer: `Paulus sagt in 2 Kor 5,4 ausdrücklich, er wolle nicht „entkleidet", sondern „überkleidet" werden, „auf daß das Sterbliche würde verschlungen von dem Leben" – also Verwandlung, nicht Austausch. Jüdische Texte wie die syrische Baruch-Apokalypse (2 Bar 50–51) schildern, dass die Toten zuerst in ihrer früheren Gestalt auferstehen und dann verwandelt werden. Und ganz praktisch: Hätte das Grab in Jerusalem den Leichnam enthalten, hätten die Gegner ihn vorgezeigt. Stattdessen behaupteten sie, die Jünger hätten ihn gestohlen (Mt 28,13) – das setzt ein leeres Grab voraus.`,
                  sources: [
                    { kind: 'bibel', work: '2. Korinther', ref: '5,4', quote: `… sintemal wir wollten lieber nicht entkleidet, sondern überkleidet werden, auf daß das Sterbliche würde verschlungen von dem Leben.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                    { kind: 'juedisch', work: 'Syrische Baruch-Apokalypse (2 Baruch)', ref: '50–51', year: 'um 100 n. Chr.', quote: `Die Erde gibt die Toten in der Gestalt zurück, in der sie sie empfangen hat; danach werden die Gerechten verwandelt.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Warum behauptete die jüdische Gegenseite einen Leichendiebstahl, wenn der Leichnam noch im Grab lag?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'zeitoun-massenvision',
          objection: `Massenvisionen gibt es sehr wohl. Denk an Zeitoun bei Kairo 1968: Zehntausende sahen angeblich die Jungfrau Maria über eurer eigenen koptischen Kirche. Wenn du das für echt hältst, wirst du zugeben, dass Gruppen gemeinsam „sehen" können – und wenn nicht, ist es eine Massenhalluzination.`,
          objectionBy: 'Skeptiker (u. a. in der Debatte um Gruppenvisionen)',
          answer: `Für die koptische Kirche war Zeitoun eine echte Erscheinung, keine Halluzination – du kannst das Beispiel also nur als Halluzination verwenden, wenn du schon voraussetzt, dass es keine übernatürlichen Erscheinungen gibt. Vor allem aber ist Zeitoun strukturell ganz anders: eine schweigende Lichtgestalt über einer Kuppel, aus der Ferne gesehen, über Monate. Niemand sprach mit ihr, aß mit ihr, berührte sie oder erhielt einen Auftrag – und niemand schloss daraus, ein Grab sei leer. Die Ostererscheinungen sind Begegnungen von Angesicht zu Angesicht.`,
          detail: `Das Beispiel hilft dem Skeptiker nicht: Entweder war Zeitoun eine reale übernatürliche Erscheinung – dann bestätigt es, dass Gott wirkt. Oder es war ein natürliches Phänomen (Kritiker vermuteten Lichteffekte) – dann war es ein **äußeres** Ereignis, das alle sahen, keine kollektive Halluzination. In beiden Fällen ist es kein Modell für eine reine Gruppenhalluzination. Siehe Claim „Die Marienerscheinungen von Zeitoun (1968) waren Massenhysterie".`,
          questionsBack: [
            `Hat in Zeitoun jemand mit der Erscheinung gegessen, gesprochen oder einen Auftrag erhalten?`,
            `Wenn Zeitoun ein äußeres Lichtphänomen war – ist das dann noch eine Halluzination?`,
          ],
        },
      ],
    },
    {
      id: 'luedemann-petrus-schuld',
      objection: `Petrus hatte Jesus dreimal verleugnet. Seine Schuld war unerträglich – psychologisch völlig plausibel, dass er eine Vision hatte, in der Jesus ihm vergab. Die anderen Jünger wurden in einer Kettenreaktion religiöser Begeisterung mitgerissen.`,
      objectionBy: 'Gerd Lüdemann',
      answer: `Das ist Psychoanalyse von Menschen, die seit 2000 Jahren tot sind, auf der Grundlage weniger Zeilen – Lüdemann muss für jede Erscheinung einen eigenen Mechanismus annehmen: Schuld bei Petrus, Ansteckung bei den Zwölf, Massenekstase bei den 500, irgendetwas bei Jakobus, einen verdrängten Konflikt bei Paulus. Jede Zusatzannahme macht die Theorie unwahrscheinlicher. Und keine davon erklärt das leere Grab.`,
      detail: `**Das Problem der Hilfshypothesen:** Eine gute Erklärung deckt alle Daten mit möglichst wenigen Annahmen ab. Die Halluzinationshypothese braucht mindestens: (1) Visionsbereitschaft bei Petrus, (2) Übertragung auf Gruppen, (3) eine Massenekstase, (4) eine Sonderursache bei Jakobus, (5) einen unbewussten Konflikt bei Paulus, (6) eine separate Erklärung des leeren Grabes (Diebstahl? falsches Grab? Legende?), (7) eine Erklärung, warum Visionen als leibliche Auferstehung gedeutet wurden.`,
      sources: [
        { kind: 'gegner', author: 'Gerd Lüdemann', work: 'Die Auferstehung Jesu. Historie, Erfahrung, Theologie', year: '1994', quote: `Lüdemann führt die Petrusvision auf Trauer und Schuldverarbeitung zurück und deutet die übrigen Erscheinungen als Folgevisionen und Massenerlebnisse.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wie viele separate psychologische Annahmen braucht deine Theorie, um alle Erscheinungen und das leere Grab zu erklären?`,
      ],
      followUps: [
        {
          id: 'paulus-innerer-konflikt',
          objection: `Paulus ist der klarste Fall. Seine Verfolgerwut war Abwehr gegen eine heimliche Anziehung zum Christentum; Röm 7 zeigt, wie er unter dem Gesetz litt („Ich elender Mensch!"). Die Vision vor Damaskus löste diesen Konflikt.`,
          objectionBy: 'Gerd Lüdemann',
          answer: `Paulus selbst beschreibt sein früheres Leben ganz anders: Er war „nach der Gerechtigkeit im Gesetz unsträflich" (Phil 3,6) und eiferte über alle Altersgenossen hinaus (Gal 1,14) – kein Zeichen innerer Zerrissenheit. Dass Röm 7 keine Autobiografie seines vorchristlichen Seelenlebens ist, hat die Forschung seit W. G. Kümmel (1929) weithin anerkannt; Krister Stendahl zeigte 1963, dass das Bild vom gequälten Gewissen des Paulus eine Rückprojektion westlicher Frömmigkeit ist.`,
          sources: [
            { kind: 'bibel', work: 'Philipper', ref: '3,5–6', quote: `… ein Hebräer aus den Hebräern, nach dem Gesetz ein Pharisäer, nach dem Eifer ein Verfolger der Gemeinde, nach der Gerechtigkeit im Gesetz gewesen unsträflich.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'Krister Stendahl', work: 'The Apostle Paul and the Introspective Conscience of the West. Harvard Theological Review 56', year: '1963', quote: `Das Bild eines von Gewissensqualen geplagten Paulus ist eine Rückprojektion westlicher Frömmigkeit seit Augustinus und Luther.`, status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'Werner Georg Kümmel', work: 'Römer 7 und die Bekehrung des Paulus', year: '1929', quote: `Röm 7 ist keine Beschreibung des vorchristlichen Erlebens des Paulus.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'paulus-nur-vision',
              objection: `Paulus sah offensichtlich nur ein Licht und hörte eine Stimme – eine Vision. Er sagt, Gott habe „seinen Sohn in mir offenbart" (Gal 1,16). Und in 1 Kor 15 stellt er seine Erscheinung auf eine Stufe mit denen der anderen. Also waren **alle** Erscheinungen visionär.`,
              objectionBy: 'Bart Ehrman / Richard Carrier',
              answer: `Paulus stellt seine Begegnung in die Reihe, weil sie für ihn **genauso real** war – das spricht für deren Objektivität, nicht gegen die der anderen. Zugleich markiert er sie als Ausnahme: „am letzten nach allen", „als einer unzeitigen Geburt". Spätere „Gesichte und Offenbarungen" (2 Kor 12,1–4) zählt er ausdrücklich **nicht** zu den Ostererscheinungen. Das Verb ōphthē („er wurde gesehen, erschien") wird auch für gewöhnliches, körperliches Sehen verwendet (z. B. Apg 7,26). Und nach Apg 9,7 nahmen die Begleiter etwas wahr – ein rein inneres Erlebnis war es nicht.`,
              detail: `**Gal 1,16 „in mir"** (en emoi) kann im Griechischen auch „an mir" oder „durch mich" bedeuten; im Zusammenhang geht es um Paulus' Berufung, den Sohn unter den Heiden zu verkündigen. Paulus fragt in 1 Kor 9,1 „Habe ich nicht unsern HERRN Jesus Christus gesehen?" – als Beglaubigung seines Apostelamts, die nur Sinn hat, wenn dieses Sehen etwas Besonderes war, das nicht jeder Visionär beanspruchen konnte.`,
              sources: [
                { kind: 'bibel', work: '1. Korinther', ref: '9,1', quote: `Bin ich nicht ein Apostel? Bin ich nicht frei? Habe ich nicht unsern HERRN Jesus Christus gesehen?`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: '2. Korinther', ref: '12,1', quote: `… so will ich doch kommen auf die Gesichte und Offenbarungen des HERRN.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'apostelgeschichte-widerspricht-sich',
                  objection: `Und Lukas kann nicht einmal seine eigene Geschichte konsistent erzählen: Nach Apg 9,7 hörten die Begleiter die Stimme, nach Apg 22,9 hörten sie sie nicht. Wie willst du darauf eine objektive Erscheinung bauen?`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Im Griechischen steht in 9,7 „hören" mit dem Genitiv (sie hörten den Laut), in 22,9 mit dem Akkusativ (sie verstanden die Stimme nicht) – eine klassische Erklärung, die allerdings unter Grammatikern nicht unumstritten ist. Doch selbst ohne diese Feinheit bleibt: Lukas erzählt beide Male, dass die Begleiter **etwas** wahrnahmen – Licht oder Laut. Ein Autor, der denselben Bericht zweimal in einem Buch bringt, hielt ihn offensichtlich nicht für widersprüchlich. Und für unsere Frage genügt: Das Ereignis hatte eine äußere Seite.`,
                  sources: [
                    { kind: 'bibel', work: 'Apostelgeschichte', ref: '9,7', quote: `Die Männer aber, die seine Gefährten waren, standen und waren erstarrt; denn sie hörten eine Stimme und sahen niemand.`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'bibel', work: 'Apostelgeschichte', ref: '22,9', quote: `Die aber mit mir waren, sahen das Licht und erschraken; die Stimme aber des, der mit mir redete, hörten sie nicht.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'fuenfhundert-pfingsten',
          objection: `Die Erscheinung vor über 500 Brüdern war eine Massenekstase – vermutlich dasselbe Ereignis, das Lukas später als Pfingsten erzählt. Religiöse Massenerlebnisse sind gut bekannt.`,
          objectionBy: 'Gerd Lüdemann',
          answer: `Paulus unterscheidet klar: Die 500 „sahen" den Auferstandenen – Pfingsten ist bei Lukas das Kommen des Geistes, keine Christuserscheinung. Massenerlebnisse ekstatischer Art erzeugen keine gemeinsame, inhaltlich identische Wahrnehmung einer bestimmten Person. Und Paulus fügt hinzu, dass die meisten noch leben – um 54 n. Chr. eine öffentliche Aufforderung: Fragt sie selbst. Wer eine Massenekstase für eine Erscheinung hielt, schreibt nicht ausgerechnet so.`,
        },
      ],
    },
    {
      id: 'jakobus-glaubte-schon',
      objection: `Die Bekehrung des Jakobus durch eine Erscheinung ist eine Konstruktion. Dass Jesu Brüder nicht an ihn glaubten, steht vor allem bei Johannes (7,5) – reine Polemik gegen die Familie. Vielleicht war Jakobus schon vorher Anhänger.`,
      objectionBy: 'Robert M. Price / Kipp Davis',
      answer: `Die Skepsis der Familie ist mehrfach und unabhängig bezeugt: Markus berichtet, sie hielten Jesus für „von Sinnen" (Mk 3,21), und Jesus sagt, ein Prophet gelte nichts „bei seinen Verwandten" (Mk 6,4). Johannes 7,5 bestätigt es. Wenige Jahre später leitet Jakobus die Jerusalemer Gemeinde (Gal 1,19; 2,9), und im Jahr 62 wird er gesteinigt (Josephus, Ant. 20,200). Das alte Credo nennt eine Erscheinung vor Jakobus (1 Kor 15,7). Etwas hat einen skeptischen Bruder in einen Märtyrer für den Glauben an seinen gekreuzigten Bruder verwandelt.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '7,5', quote: `Denn auch seine Brüder glaubten nicht an ihn.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Markus', ref: '6,4', quote: `Jesus aber sprach zu ihnen: Ein Prophet gilt nirgend weniger denn im Vaterland und daheim bei den Seinen.`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '20,200', year: 'ca. 93/94', quote: `Der Hohepriester Ananus ließ den Bruder Jesu, des sogenannten Christus, mit Namen Jakobus, und einige andere vor Gericht stellen und zur Steinigung übergeben.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'jakobus-dynastie',
          objection: `Jakobus übernahm die Führung aus dynastischen Gründen – als Bruder des Messias, nach dem Muster jüdischer Familien-Bewegungen. Dafür brauchte er keine Erscheinung.`,
          objectionBy: 'James Tabor (rezipiert)',
          answer: `Eine dynastische Rolle setzt voraus, dass Jakobus seinen Bruder **nach** dessen Kreuzigung für den Messias hielt. Ein Gekreuzigter galt aber als von Gott verflucht (Dtn 21,23; Gal 3,13). Familienloyalität erklärt nicht, warum ein frommer Jude ausgerechnet nach dieser Schande an die Messianität seines Bruders glaubte – und dafür starb. Das erklärt nur ein Ereignis, das die Kreuzigung umwertete.`,
          sources: [
            { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '21,23', quote: `… denn ein Gehenkter ist verflucht bei Gott …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'kelsos-halb-rasende-frau',
      objection: `Schon im 2. Jahrhundert hat Kelsos das Richtige gesagt: Wer hat ihn denn gesehen? Eine hysterische Frau und ein paar andere aus derselben Sekte, die träumten oder sich in ihrem Wunsch ein Trugbild schufen.`,
      objectionBy: 'Kelsos (bei Origenes)',
      answer: `Origenes hat darauf schon um 248 geantwortet: Träume und Wahnbilder treffen Einzelne in besonderer Verfassung – nicht viele Zeugen an verschiedenen Orten, bei Tag, über Wochen. Kelsos erklärt auch nicht, warum diese „Träumer" bereit waren, für ihr Zeugnis zu leiden und zu sterben, und wie aus verängstigten Flüchtlingen furchtlose Verkündiger wurden. Bemerkenswert ist außerdem, dass schon Kelsos das leere Grab nicht bestreitet – er erklärt nur die Erscheinungen weg.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'II,55–63', year: 'ca. 248', quote: `Origenes hält Kelsos entgegen, dass Wahnbilder weder die vielen Zeugen noch deren Bereitschaft zum Martyrium noch die tiefe Wandlung ihres Lebens erklären.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'frauen-unzuverlaessig',
          objection: `Kelsos hat einen Punkt: Die ersten Zeuginnen waren Frauen, in einem emotionalen Ausnahmezustand. Das ist nicht die zuverlässigste Grundlage.`,
          objectionBy: 'Kelsos / moderne Skeptiker',
          answer: `Gerade weil Frauen in der Antike als wenig glaubwürdige Zeugen galten – Josephus schreibt, ihr Zeugnis sei nicht zuzulassen, und Kelsos spottet genau darüber –, hätte niemand eine erfundene Geschichte mit Frauen als Hauptzeuginnen beginnen lassen. Dass alle vier Evangelien es dennoch tun, spricht für Treue zur Überlieferung. Und die Erscheinungen betrafen ebenso Männer: Petrus, die Zwölf, Jakobus, Paulus, die 500.`,
          sources: [
            { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '4,219', year: 'ca. 93/94', quote: `Das Zeugnis von Frauen soll nicht zugelassen werden wegen des Leichtsinns und der Kühnheit ihres Geschlechts.`, status: 'paraphrase', note: 'Josephus gibt hier seine Fassung des Zeugenrechts wieder.' },
          ],
        },
      ],
    },
    {
      id: 'minimal-facts-fragwuerdig',
      objection: `Habermas' „Minimal Facts" sind ein apologetisches Konstrukt. Seine berühmte Zahl – 75 % der Forscher akzeptieren das leere Grab – stammt aus einer unveröffentlichten Datenbank, die niemand prüfen kann.`,
      objectionBy: 'Kipp Davis / Bart Ehrman',
      answer: `Die Kritik an der unveröffentlichten Datenbasis ist berechtigt – deshalb stütze ich mich nicht auf Prozentzahlen. Ich stütze mich auf das, was namhafte Kritiker selbst schreiben: Lüdemann nennt die Erscheinungserlebnisse „historisch sicher", Sanders eine „Tatsache", Ehrman eine „historische Tatsache", dass die Jünger an die Auferstehung glaubten, und Paula Fredriksen sagt: „Sie müssen etwas gesehen haben." Die Frage ist nicht, wie viele Forscher dies sagen, sondern welche Erklärung die Daten am besten erklärt.`,
      sources: [
        { kind: 'gegner', author: 'Paula Fredriksen', work: 'Interview (wiedergegeben u. a. in Christianity Today, April 2020)', quote: `Fredriksen sagt sinngemäß: In ihren eigenen Worten sahen sie den auferweckten Jesus. Was sie sahen, wisse sie nicht – aber als Historikerin wisse sie, dass sie etwas gesehen haben müssen.`, original: `I don't know what they saw. But I do know as a historian that they must have seen something.`, status: 'paraphrase', note: 'Wortlaut nach Sekundärquellen; Originalinterview vor wörtlicher Zitierung prüfen.' },
      ],
      followUps: [
        {
          id: 'fakten-ja-deutung-nein',
          objection: `Gut, ich gebe zu: Die Jünger glaubten, Jesus gesehen zu haben. Aber „Jesus ist auferstanden" ist eine theologische Deutung, kein historisches Ergebnis. Als Historiker kann ich nur sagen, was sie glaubten.`,
          objectionBy: 'Bart Ehrman',
          answer: `Dann sind wir bei der eigentlichen Frage: Ist es eine historische oder eine philosophische Grenze, die dich daran hindert? Wenn natürliche Erklärungen – Halluzination, Diebstahl, falsches Grab, Scheintod – an den Daten scheitern, bleibt die Auferstehung die beste Erklärung. Sie abzulehnen, nur weil sie ein Wunder wäre, ist eine Vorentscheidung über Gott – keine Schlussfolgerung aus den Quellen. Darüber können wir gern sprechen, aber dann reden wir über Philosophie, nicht mehr über Geschichte.`,
          questionsBack: [
            `Welche natürliche Erklärung hältst du für die beste – und erklärt sie das leere Grab, Jakobus und Paulus?`,
            `Wäre die Auferstehung für dich historisch feststellbar, wenn es Gott gäbe?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie erklärt die Halluzinationshypothese das leere Grab?`,
    `Um wen trauerten Jakobus, der Skeptiker, und Paulus, der Verfolger?`,
    `Warum deuteten Juden Visionen eines Toten ausgerechnet als leibliche Auferstehung eines Einzelnen – etwas, das in ihrer Erwartung nicht vorkam?`,
    `Kennst du einen dokumentierten Fall, in dem über 500 Menschen gleichzeitig dieselbe Halluzination hatten?`,
    `Wie viele Zusatzannahmen braucht deine Erklärung – und wie viele die Auferstehung?`,
  ],
  avoid: [
    `„Halluzinationen kommen nie in Gruppen vor" als absolute Aussage – es gibt umstrittene Berichte über kollektive Wahrnehmungen. Sag lieber: Kein bekannter Fall entspricht dem Muster der Ostererscheinungen.`,
    `Habermas' Prozentzahlen als harte Statistik vortragen – kennzeichne sie als seine Literaturübersicht.`,
    `Behaupten, die Jünger hätten „keinerlei psychische Belastung" gehabt – natürlich waren sie erschüttert. Der Punkt ist, dass dies die Daten nicht erklärt.`,
  ],
  concessions: [
    `Erlebnisse, in denen Hinterbliebene Verstorbene wahrnehmen, sind real und häufig; sie sind kein Zeichen von Geisteskrankheit.`,
    `Die Evangelien wurden nach Paulus verfasst; die ausführlichen leiblichen Details (Essen, Berühren) stehen bei Lukas und Johannes.`,
    `Paulus' eigene Erscheinung hatte Licht- und Stimmenelemente, die anders sind als die Begegnungen der vierzig Tage.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael R. Licona', work: 'The Resurrection of Jesus: A New Historiographical Approach', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Dale C. Allison', work: 'The Resurrection of Jesus: Apologetics, Polemics, History', year: '2021', status: 'paraphrase', note: 'Fair gegenüber beiden Seiten.' },
    { kind: 'gegner', author: 'Gerd Lüdemann', work: 'Die Auferstehung Jesu. Historie, Erfahrung, Theologie', year: '1994', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Auferstehung', 'Halluzination', 'Minimal Facts', 'Lüdemann', 'Kelsos', 'Origenes', 'Jakobus', 'Paulus'],
  related: [
    'psychiatrie/auferstehung-trauerhalluzination',
    'medizin-wunder/zeitoun-erscheinungen',
    'auferstehung/leichnam-gestohlen-falsches-grab',
    'auferstehung/legende-entwickelte-sich',
    'auferstehung/wunder-historisch-unmoeglich',
  ],
};

export default claim;
