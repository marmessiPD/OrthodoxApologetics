import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'legende-entwickelte-sich',
  title: `„Die Auferstehung ist eine Legende, die sich über Jahrzehnte entwickelte."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Jesus, Interrupted (2009); How Jesus Became God (2014)' },
    { name: 'Robert M. Price', role: 'Neutestamentler', work: `Apocryphal Apparitions: 1 Corinthians 15:3–11 as a Post-Pauline Interpolation. In: R. M. Price / J. J. Lowder (Hg.), The Empty Tomb (2005)` },
    { name: 'Richard Carrier', role: 'Althistoriker', work: `The Spiritual Body of Christ and the Legend of the Empty Tomb. In: The Empty Tomb (2005)` },
    { name: 'John Shelby Spong', role: 'Ehem. episkopalischer Bischof', work: 'Resurrection: Myth or Reality? (1994)' },
  ],
  steelman: `Man kann die Legende förmlich wachsen sehen. Paulus (50er Jahre) spricht nur davon, dass Christus „gesehen wurde" – dasselbe Wort, mit dem er seine eigene Vision beschreibt –, und er nennt den Auferstehungsleib „geistlich". Markus (um 70) hat ein leeres Grab, aber keine einzige Erscheinung; sein Evangelium endet mit verängstigtem Schweigen (16,8). Matthäus (80er) fügt Wächter, ein Erdbeben und eine Erscheinung in Galiläa hinzu. Lukas (80er/90er) lässt Jesus Fisch essen und vor Zeugen in den Himmel fahren. Johannes (90er) lässt Thomas die Finger in die Wunden legen. Je später der Text, desto handfester die Erscheinung – das ist das klassische Muster von Legendenbildung. Und Legenden entstehen schnell: Wundergeschichten um charismatische Führer bilden sich oft schon zu deren Lebzeiten. Vierzig bis siebzig Jahre mündlicher Weitergabe in einer begeisterten Gemeinde sind mehr als genug. – So etwa Bart Ehrman und Richard Carrier.`,
  biblical: {
    summary: `Der Kern der Auferstehungsbotschaft liegt nicht am Ende, sondern am **Anfang** der Überlieferung: im Credo, das Paulus „empfangen" hat (1 Kor 15,3–7) und das die Forschung in die ersten Jahre nach der Kreuzigung datiert. Paulus besuchte drei Jahre nach seiner Bekehrung Petrus, um ihn „kennenzulernen" bzw. „zu befragen" (historēsai, Gal 1,18), traf Jakobus und versicherte, dass die Jerusalemer Apostel dasselbe verkündigten (1 Kor 15,11). Er lädt dazu ein, die noch lebenden Zeugen zu befragen (1 Kor 15,6). Lukas betont, dass er den Berichten der Augenzeugen „von Anfang an" sorgfältig nachgegangen ist (Lk 1,1–4).`,
    detail: `**Merkmale früher Überlieferung im Credo (1 Kor 15,3–7):**
- Technische Überlieferungssprache: „empfangen" – „übergeben" (parelabon – paredōka), entsprechend hebräisch qibbel – masar.
- Semitische Namensform „Kephas" (aramäisch für Petrus), „die Zwölf" als feste Gruppenbezeichnung, parallel gebaute Satzglieder („und dass … und dass …").
- Nicht-paulinische Wendungen („für unsere Sünden", „nach der Schrift", „am dritten Tag").

**Wann empfing Paulus das Credo?** Spätestens vor seiner Gründung der Gemeinde in Korinth (ca. 50/51) – sehr wahrscheinlich aber schon bei seiner Bekehrung in Damaskus (ca. 32–34) oder bei seinem Besuch bei Petrus in Jerusalem (ca. 35–37). Die genannten Zeugen Kephas und Jakobus sind genau die beiden, die Paulus damals traf.

**Gal 1,18 historēsai:** Das Verb bedeutet „erkunden, kennenlernen, als Augenzeugen befragen" (vgl. „Historie"). C. H. Dodd bemerkte trocken, man dürfe annehmen, dass die beiden in den fünfzehn Tagen nicht nur über das Wetter sprachen.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,3', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe:`, original: `παρέδωκα γὰρ ὑμῖν ἐν πρώτοις, ὃ καὶ παρέλαβον`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,6', quote: `Darnach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal, deren noch viele leben, etliche aber sind entschlafen.`, original: `ἐξ ὧν οἱ πλείονες μένουσιν ἕως ἄρτι („von denen die meisten bis jetzt leben")`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '1,18', quote: `Darnach über drei Jahre kam ich gen Jerusalem, Petrus zu schauen, und blieb fünfzehn Tage bei ihm.`, original: `ἀνῆλθον εἰς Ἱεροσόλυμα ἱστορῆσαι Κηφᾶν`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,1–4', quote: `Sintemal sich's viele unterwunden haben, Bericht zu geben von den Geschichten, so unter uns ergangen sind, wie uns das gegeben haben, die es von Anfang selbst gesehen und Diener des Worts gewesen sind: habe ich's auch für gut angesehen, nachdem ich's alles von Anbeginn erkundet habe, daß ich's dir, mein guter Theophilus, in Ordnung schriebe, auf daß du gewissen Grund erfahrest der Lehre, in welcher du unterrichtet bist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche versteht sich als Gemeinschaft, die das empfangene Zeugnis treu weitergibt (paradosis) – „Haltet an den Satzungen, darin ihr gelehrt seid, es sei durch unser Wort oder Brief" (2 Thess 2,15). Das Credo von 1 Kor 15 ist der Keim aller späteren Glaubensbekenntnisse; das Nizänum wiederholt seine Struktur: gekreuzigt, begraben, auferstanden am dritten Tag nach der Schrift. Für die koptische Kirche, die ihren Ursprung auf den Evangelisten Markus zurückführt, ist die Kette Augenzeuge – Apostel – Kirche kein Ideal, sondern gelebte Geschichte.`,
    sources: [
      { kind: 'bibel', work: '2. Thessalonicher', ref: '2,15', quote: `So stehet nun, liebe Brüder, und haltet an den Satzungen, darin ihr gelehrt seid, es sei durch unser Wort oder Brief.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', year: '381', quote: `… gekreuzigt für uns unter Pontius Pilatus, hat gelitten und ist begraben worden, ist am dritten Tag auferstanden nach der Schrift …`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Forschung besteht breiter Konsens, dass das Credo in 1 Kor 15,3–7 eine **vorpaulinische, sehr frühe** Überlieferung ist. Selbst Gerd Lüdemann datierte die Elemente in die ersten zwei Jahre nach der Kreuzigung; James D. G. Dunn meinte, die Überlieferung sei schon wenige Monate nach Jesu Tod formuliert worden. Dass die **Erzählungen** in den Evangelien sich unterscheiden und teils ausgestaltet wurden, ist ebenfalls anerkannt. Strittig ist, ob die frühesten Erscheinungen leiblich verstanden wurden. Robert M. Prices These, 1 Kor 15,3–11 sei eine spätere Einfügung, hat in der Fachwelt kaum Zustimmung gefunden.`,
    detail: `**A. N. Sherwin-White (1963):** Der Oxforder Althistoriker, Spezialist für römisches Recht, untersuchte die Evangelien und die Apostelgeschichte aus der Sicht eines Klassikers. Am Beispiel Herodots argumentierte er, dass selbst zwei Generationen zu kurz seien, um den harten historischen Kern einer mündlichen Überlieferung durch mythische Tendenzen zu verdrängen. **Ehrlich:** Seine „Regel" wurde kritisiert (u. a. von P. A. Brunt und Richard Carrier); sie behauptet nicht, dass alle Details historisch sind, sondern dass der Kern nicht so schnell verloren geht. Man sollte sie als Einschätzung eines erfahrenen Althistorikers anführen, nicht als Naturgesetz.`,
    sources: [
      { kind: 'gegner', author: 'Gerd Lüdemann', work: 'The Resurrection of Jesus: History, Experience, Theology', year: '1994', ref: 'S. 171–172 (engl. Ausgabe, Fortress Press)', quote: `Die Elemente der Überlieferung sind in die ersten zwei Jahre nach der Kreuzigung Jesu zu datieren, nicht später als drei Jahre.`, status: 'paraphrase', note: 'Datierung und Seitenangabe in der Sekundärliteratur übereinstimmend belegt; W. L. Craig bestätigt in seiner Lüdemann-Kritik, dass Lüdemann die Formel auf etwa zwei Jahre nach der Kreuzigung datiert (WebSearch-Prüfung 2026). Wortlaut im Buch nicht eingesehen – daher sinngemäß.' },
      { kind: 'fachliteratur', author: 'James D. G. Dunn', work: 'Jesus Remembered', year: '2003', quote: `Dunn hält es für sicher, dass die Überlieferung von 1 Kor 15,3–7 schon wenige Monate nach Jesu Tod als Tradition formuliert war.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'A. N. Sherwin-White', work: 'Roman Society and Roman Law in the New Testament', year: '1963', ref: 'Kap. „The Historicity of the Gospels and Graeco-Roman Historiography" (meist zitiert: S. 190)', quote: `Herodot erlaubt es uns, das Tempo der Mythenbildung zu prüfen, und die Prüfungen legen nahe, dass selbst zwei Generationen eine zu kurze Zeitspanne sind, als dass die mythische Tendenz über den harten historischen Kern der mündlichen Überlieferung siegen könnte.`, original: `Herodotus enables us to test the tempo of myth-making, and the tests suggest that even two generations are too short a span to allow the mythical tendency to prevail over the hard historic core of the oral tradition.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Wortlaut in mehreren unabhängigen Sekundärquellen identisch belegt (WebSearch-Prüfung 2026); die Seitenzahl 190 stammt aus der Sekundärliteratur. Klassiker der Sarum Lectures 1960–61; die „Zwei-Generationen-Regel" ist in der Forschung umstritten (Kritik u. a. von P. A. Brunt, dem Sherwin-White in einer Anmerkung am Buchende antwortet).' },
      { kind: 'gegner', author: 'Robert M. Price', work: 'Apocryphal Apparitions: 1 Corinthians 15:3–11 as a Post-Pauline Interpolation', year: '2005', quote: `Price hält 1 Kor 15,3–11 für eine nachpaulinische Einfügung.`, status: 'paraphrase', note: 'Ohne Handschriftenbeleg; kaum Zustimmung in der Fachwelt.' },
    ],
  },
  quickAnswer: `Das Problem für die Legendenthese ist die Zeit: Das Bekenntnis „gestorben, begraben, auferweckt, erschienen dem Petrus, den Zwölf, über 500 Brüdern, dem Jakobus" stammt nach Ansicht auch skeptischer Forscher aus den ersten Jahren nach der Kreuzigung – Gerd Lüdemann sprach von höchstens drei Jahren. Paulus hat es von Petrus und Jakobus selbst, die er in Jerusalem befragte, und er schreibt, die meisten der 500 Zeugen lebten noch. Eine Legende braucht Zeit und das Fehlen von Zeugen – hier gab es weder das eine noch das andere.`,
  keyPoints: [
    `**Das Credo ist uralt:** 1 Kor 15,3–7 wird von der Forschung breit in die 30er Jahre datiert – Jahre, nicht Jahrzehnte nach der Kreuzigung.`,
    `**Paulus hat recherchiert:** Gal 1,18 historēsai – 15 Tage bei Petrus, Begegnung mit Jakobus; 14 Jahre später Prüfung seines Evangeliums durch die „Säulen" (Gal 2,1–10).`,
    `**Lebende Zeugen:** „deren die meisten noch leben" (1 Kor 15,6) – eine offene Einladung zur Überprüfung.`,
    `**Kern zuerst, Ausgestaltung später:** Die Evangelien erzählen den Kern unterschiedlich aus – das ist normale Geschichtsschreibung, keine Erfindung des Kerns.`,
    `**Wie echte Legenden aussehen:** Das Petrusevangelium (2. Jh.) zeigt riesige Gestalten und ein sprechendes Kreuz – die kanonischen Evangelien beschreiben die Auferstehung selbst gar nicht.`,
    `**„Leiblicher werdend" ist zu einfach:** Schon Matthäus lässt die Frauen Jesu Füße umfassen (Mt 28,9); Lukas zeigt neben dem Essen auch plötzliches Erscheinen und Verschwinden.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Überlieferer und Rechercheur',
      text: `Paulus legt Wert darauf, dass er nicht nur aus Offenbarung, sondern aus Überlieferung schöpft, die er überprüft hat. Er reiste zu Petrus, um ihn zu befragen, traf Jakobus und legte Jahre später sein Evangelium den Jerusalemer Säulen vor, „auf daß ich nicht vergeblich liefe oder gelaufen wäre" (Gal 2,2). Am Ende der Zeugenliste stellt er fest: „Es sei nun ich oder jene: also predigen wir" (1 Kor 15,11). Eine einheitliche Botschaft der Augenzeugen von Jerusalem bis Korinth – das ist das Gegenteil einer langsam wuchernden Legende.`,
      sources: [{ kind: 'bibel', work: 'Galater', ref: '2,2', quote: `Ich zog aber hinauf aus einer Offenbarung und besprach mich mit ihnen über das Evangelium, das ich predige unter den Heiden, besonders aber mit denen, die das Ansehen hatten, auf daß ich nicht vergeblich liefe oder gelaufen wäre.`, translation: 'Luther 1912', status: 'verbatim' }],
    },
    {
      person: 'lukas',
      role: 'als Historiker',
      text: `Lukas beginnt sein Werk mit einem Vorwort im Stil griechischer Historiker: Er kennt frühere Berichte, stützt sich auf „Augenzeugen und Diener des Wortes" und ist „allem von Anfang an sorgfältig nachgegangen". Er schreibt für einen Leser, der „Gewissheit" (asphaleia) über das Gelernte erhalten soll. Viele seiner Angaben zu Orten, Amtstiteln und Personen in der Apostelgeschichte sind archäologisch und epigraphisch bestätigt – ein Autor, der so arbeitet, zeichnet nicht unbesehen Legenden auf.`,
      sources: [{ kind: 'bibel', work: 'Lukas', ref: '1,2–3', quote: `… wie uns das gegeben haben, die es von Anfang selbst gesehen und Diener des Worts gewesen sind: habe ich's auch für gut angesehen, nachdem ich's alles von Anbeginn erkundet habe …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' }],
    },
    {
      person: 'habermas',
      role: 'als Historiker der frühen Credo-Überlieferung',
      text: `Habermas hat die Datierungsfrage zum Herzstück seiner Methode gemacht. Er zeigt, dass die Mehrheit der kritischen Forscher das Credo von 1 Kor 15 in die 30er Jahre datiert und dass Paulus es mit großer Wahrscheinlichkeit bei seinem Jerusalembesuch von Petrus und Jakobus erhielt. Daraus folgt: Der Glaube an die Erscheinungen des Auferstandenen bestand von Anfang an und ist nicht das Ergebnis einer jahrzehntelangen Entwicklung.`,
      sources: [{ kind: 'fachliteratur', author: 'Gary R. Habermas', work: 'The Risen Jesus and Future Hope', year: '2003', status: 'paraphrase', quote: `Darstellung der Frühdatierung des Credos in 1 Kor 15.` }],
    },
    {
      person: 'craig',
      role: 'als Philosoph und Historiker',
      text: `Craig verweist auf Sherwin-Whites Beobachtung, dass selbst bei Herodot zwei Generationen nicht genügten, um den historischen Kern einer Überlieferung auszulöschen. Bei der Auferstehung liegen zwischen Ereignis und Credo nur wenige Jahre, zwischen Ereignis und Evangelien wenige Jahrzehnte – zu Lebzeiten der Augenzeugen. Für eine Legende, die den Kern erst erzeugt, fehlt schlicht die Zeit.`,
      sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', year: '3. Aufl. 2008', status: 'paraphrase', quote: `Argumentation mit Sherwin-White gegen die Legendenhypothese.` }],
    },
  ],
  dialog: [
    {
      id: 'evangelien-wachsen',
      objection: `Leg die Berichte chronologisch nebeneinander: Paulus – nur „er wurde gesehen". Markus – leeres Grab, keine Erscheinung. Matthäus – Erscheinung in Galiläa. Lukas – Jesus isst Fisch. Johannes – Thomas berührt die Wunden. Das ist Legendenwachstum wie aus dem Lehrbuch.`,
      objectionBy: 'Bart Ehrman',
      answer: `Der Kern steht am Anfang, nicht am Ende: Das älteste Dokument, das Credo, nennt schon Begräbnis, Auferweckung und Erscheinungen vor namentlich genannten Personen und Gruppen. Markus kennt die Erscheinungen: Jesus kündigt an, „nach meiner Auferstehung will ich vor euch hingehen nach Galiläa" (14,28), und der Engel wiederholt es (16,7). Und die Linie „immer leiblicher" stimmt nicht: Schon Matthäus lässt die Frauen Jesu Füße umfassen (28,9), während Lukas neben dem Fischessen auch plötzliches Verschwinden erzählt (24,31). Unterschiedliche Erzähler gestalten aus – den Kern erfinden sie nicht.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '14,28', quote: `Aber nachdem ich auferstehe, will ich vor euch hingehen nach Galiläa.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Matthäus', ref: '28,9', quote: `Und da sie gingen, seinen Jüngern zu verkündigen, siehe, da begegnete ihnen Jesus und sprach: Seid gegrüßt! Und sie traten zu ihm und griffen an seine Füße und fielen vor ihm nieder.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [
        `Wenn sich die Auferstehung erst über Jahrzehnte entwickelte – wie erklärst du, dass das älteste Dokument bereits Begräbnis, Auferweckung und konkrete Zeugen nennt?`,
      ],
      followUps: [
        {
          id: 'ophthe-vision',
          objection: `Paulus benutzt für alle Erscheinungen dasselbe Wort ōphthē, „er wurde gesehen/erschien" – auch für seine eigene. Ursprünglich ging es also um Visionen; die handfesten Berührungen sind spätere Ausschmückung.`,
          objectionBy: 'Richard Carrier',
          answer: `Ōphthē ist kein Fachwort für Visionen; es wird auch für gewöhnliches Sehen von Personen verwendet (z. B. Apg 7,26: Mose „erschien" streitenden Israeliten). Paulus' ganzes Kapitel 15 verteidigt gegen Korinther, die eine leibliche Auferstehung bezweifelten, genau diese: „Wie werden die Toten auferstehen, und mit welchem Leibe werden sie kommen?" (15,35). Und das Credo setzt die Folge begraben – auferweckt: Was begraben wurde, wurde auferweckt.`,
          followUps: [
            {
              id: 'soma-pneumatikon',
              objection: `Paulus sagt doch ausdrücklich: Es wird gesät ein „natürlicher" Leib und auferweckt ein „geistlicher" Leib (1 Kor 15,44), und „Fleisch und Blut können das Reich Gottes nicht ererben" (15,50). Das ist ein Leib aus Geist, kein leibliches Wiederkommen.`,
              objectionBy: 'Richard Carrier',
              answer: `Paulus stellt sōma psychikon („seelischer/natürlicher Leib") und sōma pneumatikon („geistlicher Leib") gegenüber. Dieselben Adjektive verwendet er in 1 Kor 2,14–15 für den „natürlichen" und den „geistlichen" Menschen – beide haben Körper; der Unterschied ist, wovon sie belebt und bestimmt werden. Ein „geistlicher Leib" ist also ein vom Geist Gottes ganz durchdrungener Leib, kein Leib aus Geist. „Fleisch und Blut" ist eine jüdische Wendung für den sterblichen, vergänglichen Menschen – der Folgesatz erklärt: „das Verwesliche wird nicht erben das Unverwesliche". Deshalb muss „dies Verwesliche anziehen die Unverweslichkeit" (15,53).`,
              detail: `**Die Saat-Analogie (15,36–38.42–44):** Das Samenkorn wird gesät und „lebendig gemacht" – es ist derselbe Same, verwandelt. „Es wird gesät … es wird auferweckt" hat durchgehend dasselbe Subjekt. Das ist Verwandlung, nicht Ersatz.

**Phil 3,21:** Christus wird „unseren nichtigen Leib verklären, dass er ähnlich werde seinem verklärten Leibe" – auch hier: derselbe Leib, verwandelt.`,
              sources: [
                { kind: 'bibel', work: '1. Korinther', ref: '2,14–15', quote: `Der natürliche Mensch aber vernimmt nichts vom Geist Gottes … Der geistliche aber richtet alles …`, original: `ψυχικὸς … ἄνθρωπος … ὁ δὲ πνευματικὸς`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                { kind: 'bibel', work: '1. Korinther', ref: '15,50.53', quote: `Davon sage ich aber, liebe Brüder, daß Fleisch und Blut nicht können das Reich Gottes ererben; auch wird das Verwesliche nicht erben das Unverwesliche. … Denn dies Verwesliche muß anziehen das Unverwesliche, und dies Sterbliche muß anziehen die Unsterblichkeit.`, translation: 'Luther 1912', status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', quote: `Wright zeigt an der Semantik von psychikos und pneumatikos, dass Paulus keinen „Leib aus Geist", sondern einen vom Geist belebten Leib meint.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'paulus-vision-gleichgesetzt',
                  objection: `Paulus stellt seine eigene Erfahrung ausdrücklich in eine Reihe mit denen von Petrus und den anderen. Und seine war eine Vision: ein Licht vom Himmel, eine Stimme; seine Begleiter sahen niemanden (Apg 9,7). Also waren auch die anderen „Erscheinungen" Visionen – der greifbare Jesus kam erst später dazu.`,
                  objectionBy: 'Bart Ehrman / Gerd Lüdemann',
                  answer: `Paulus setzt seine Begegnung gleich, was die **Wirklichkeit des Gesehenen** angeht – nicht unbedingt die Form. Er nennt sie ausdrücklich „zuletzt von allen" und die einer „Fehlgeburt" (1 Kor 15,8): eine außergewöhnliche, nachträgliche Begegnung, die die Reihe abschließt. Visionen im üblichen Sinn kennt Paulus auch – „Gesichte und Offenbarungen" (2 Kor 12,1) –, aber diese zählt er nie als Grundlage seines Apostelamts. Dafür beruft er sich allein darauf, „Jesus, unseren Herrn, gesehen" zu haben (1 Kor 9,1). Und selbst Lukas, der die Damaskusszene erzählt, unterscheidet sie klar von den Begegnungen der vierzig Tage.`,
                  detail: `**Paulus unterscheidet zwei Kategorien:**
- Die **eine** Christusbegegnung, die ihn zum Apostel macht, zeitlich abgeschlossen („zuletzt von allen", 1 Kor 15,8; vgl. 1 Kor 9,1; Gal 1,15–16).
- **Wiederholte** Visionen und Offenbarungen (2 Kor 12,1–7; Apg 16,9; 18,9), über die er zurückhaltend spricht und die er nicht als Auferstehungszeugnis anführt.

**Die Begleiter:** Nach Apg 9,7 hören sie die Stimme, nach Apg 22,9 sehen sie das Licht – ein Geschehen mit äußeren Begleiterscheinungen, kein rein inneres Erleben. Man muss die Szene nicht als „leiblich" im Sinn von Lk 24 deuten, um zu sehen, dass sie nicht in das Muster einer privaten Halluzination passt.

**Die Logik des Arguments:** Selbst wenn Paulus' Begegnung visionär war, folgt daraus nicht, dass die älteren Erscheinungen es auch waren. Paulus war Verfolger und begegnete dem Erhöhten **nach** der Himmelfahrt; die Jünger begegneten ihm vorher. Das Credo selbst verankert die Erscheinungen in der Folge „begraben – auferweckt".`,
                  voices: [
                    {
                      person: 'nt-wright',
                      role: 'als Paulusforscher',
                      text: `Wright betont, dass Paulus die Damaskusbegegnung als Teil der Ostererscheinungen versteht, aber als ungewöhnlichen Nachzügler. Für Paulus war der Auferstandene nicht eine himmlische Lichtgestalt unter anderen, sondern der Gekreuzigte in einem verwandelten, unvergänglichen Leib – das Modell für die künftige Auferstehung aller (Phil 3,21). Wer Paulus eine reine Visionstheologie zuschreibt, kann sein ganzes Argument in 1 Kor 15 nicht erklären.`,
                      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', ref: 'Teil II, Kap. 7–8', year: '2003', status: 'paraphrase', quote: `Paulus versteht den Auferstehungsleib als verwandelten, nicht als nichtleiblichen Leib.` }],
                    },
                  ],
                  sources: [
                    { kind: 'bibel', work: '1. Korinther', ref: '15,8', quote: `Am letzten nach allen ist er auch von mir, als einer unzeitigen Geburt, gesehen worden.`, original: `ἔσχατον δὲ πάντων ὡσπερεὶ τῷ ἐκτρώματι ὤφθη κἀμοί`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Korinther', ref: '9,1', quote: `Bin ich nicht ein Apostel? … Habe ich nicht unsern Herrn Jesus Christus gesehen?`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                    { kind: 'bibel', work: '2. Korinther', ref: '12,1', quote: `… so will ich doch kommen auf die Gesichte und Offenbarungen des Herrn.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Wenn Paulus' Begegnung eine Vision wie seine späteren war – warum nennt er sie „zuletzt von allen" und stützt sein Apostelamt nur auf sie?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'credo-interpoliert',
      objection: `1 Kor 15,3–11 ist wahrscheinlich gar nicht von Paulus, sondern eine spätere Einfügung – die Liste passt nicht zu Paulus' Betonung, sein Evangelium von niemandem empfangen zu haben (Gal 1,12).`,
      objectionBy: 'Robert M. Price',
      answer: `Es gibt keine einzige Handschrift ohne diese Verse – auch der Papyrus P46 (um 200), die älteste Handschrift der Paulusbriefe, enthält sie. Paulus' Argument im restlichen Kapitel (15,12–19: „Wenn aber Christus gepredigt wird, daß er sei von den Toten auferstanden …") baut unmittelbar auf den Versen 3–11 auf. Und es gibt keinen Widerspruch zu Gal 1: Dort betont Paulus, dass seine **Berufung** und sein Evangelium für die Heiden nicht von Menschen stammen; die Fakten über Jesus erhielt er sehr wohl auch durch Überlieferung – das sagt er in 1 Kor 11,23 und 15,3 selbst.`,
      followUps: [
        {
          id: 'datierung-credo',
          objection: `Schön, das Credo ist echt und vorpaulinisch. Aber woher willst du wissen, dass es aus den 30er Jahren stammt? Es könnte genauso gut aus den 40ern sein – genug Zeit für Legenden.`,
          objectionBy: 'Bart Ehrman / Richard Carrier',
          answer: `Selbst im ungünstigsten Fall hat Paulus es vor seiner Gemeindegründung in Korinth (ca. 50) empfangen – also höchstens 20 Jahre nach den Ereignissen, zu Lebzeiten aller Genannten. Wahrscheinlicher ist der Besuch bei Petrus in Jerusalem (ca. 35–37): Genau die beiden namentlich genannten Zeugen, Kephas und Jakobus, traf Paulus dort. Deshalb datieren auch Skeptiker wie Lüdemann die Elemente in die allerersten Jahre. Und selbst wenn es aus den 40ern stammte: Petrus und Jakobus lebten noch und standen für die Botschaft ein.`,
          questionsBack: [
            `Welche Legende entsteht, während die Hauptzeugen – Petrus und Jakobus – noch die Gemeinde in Jerusalem leiten und jederzeit befragt werden können?`,
          ],
          followUps: [
            {
              id: 'credo-ohne-grab',
              objection: `Das Credo sagt kein Wort von einem leeren Grab, von Frauen oder von einem berührbaren Körper. „Begraben" gehört einfach zur Todesformel: Er ist wirklich tot. Das ganze Grab-Narrativ ist später dazugekommen.`,
              objectionBy: 'Richard Carrier / Robert M. Price',
              answer: `Für einen Juden des 1. Jahrhunderts war die Folge „gestorben – begraben – auferweckt" selbst eine Aussage über das Grab: Auferweckt wird, was begraben wurde. Niemand hätte von „Auferstehung" gesprochen, wenn der Leichnam noch im Grab lag – dafür gab es andere Kategorien (Seele bei Gott, Erhöhung, Erscheinung eines Toten). Dass ein knappes Bekenntnis keine Erzählung enthält, liegt an seiner Gattung; auch das Nizänum erzählt keine Grabgeschichte und setzt das Grab doch voraus.`,
              detail: `**Jüdische Anthropologie:** „Auferstehung" (anastasis, tĕḥiyyat ha-metim) bedeutete im Judentum der Zeit nie bloß Weiterleben, sondern ein neues leibliches Leben (Dan 12,2; 2 Makk 7). Ein Pharisäer wie Paulus hätte „er wurde begraben … er wurde auferweckt" nicht ohne Grab verstehen können.

**Warum die Frauen fehlen:** Bekenntnisse und offizielle Zeugenlisten nannten in der jüdischen Umwelt bevorzugt Männer; Frauen galten als problematische Zeugen. Dass die Evangelien trotzdem Frauen als erste Zeuginnen nennen, spricht gerade für deren Historizität.

**Ehrlich:** Dass Paulus keine Grabgeschichte erzählt, ist ein echter Befund – das Grab ist bei ihm impliziert, nicht ausgeführt. Selbst der vorsichtige Dale Allison hält es für wahrscheinlich, dass Paulus ein leeres Grab voraussetzte.`,
              sources: [
                { kind: 'bibel', work: 'Daniel', ref: '12,2', quote: `Und viele, so unter der Erde schlafen liegen, werden aufwachen, etliche zum ewigen Leben, etliche zu ewiger Schmach und Schande.`, translation: 'Luther 1912', status: 'paraphrase' },
                { kind: 'gegner', author: 'Dale C. Allison', work: 'Resurrecting Jesus', year: '2005', quote: `Allison hält es für wahrscheinlich, dass Paulus ein leeres Grab voraussetzte, auch wenn er es nicht erzählt.`, status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', quote: `„Auferstehung" bezeichnete im Judentum der Zeit stets ein neues leibliches Leben nach dem Tod.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Welcher Jude des 1. Jahrhunderts hätte „auferweckt" gesagt, wenn er glaubte, der Leichnam liege noch im Grab?`,
              ],
              followUps: [
                {
                  id: 'fuenfhundert-unpruefbar',
                  objection: `Und die „500 Brüder"? Kein anderer Text erwähnt sie, Paulus nennt keinen Namen und keinen Ort. Wie hätte ein Korinther das nachprüfen sollen – nach Judäa reisen und herumfragen? Das ist rhetorischer Schmuck, keine Einladung zur Überprüfung.`,
                  objectionBy: 'Bart Ehrman / Richard Carrier',
                  answer: `Die Korinther hatten engen Kontakt zu Jerusalem und zu Petrus: Es gab dort eine „Kephas-Partei" (1 Kor 1,12), Reisende pendelten zwischen den Gemeinden, und Paulus organisierte eine Kollekte für Jerusalem (1 Kor 16,1–4). Er schreibt an eine Gemeinde, in der er Gegner hat – eine erfundene Zeugenschar hätte sie ihm genüsslich vorgehalten. Die Bemerkung „einige sind entschlafen" ist zudem das Gegenteil von Rhetorik: Sie zeigt, dass Paulus die Gruppe über die Jahre im Blick behielt. Einzelbezeugung ist kein Beweis für Erfindung – viele antike Ereignisse kennen wir nur aus einer Quelle.`,
                  detail: `**Ehrlich:** Die Erscheinung vor den 500 ist nur in 1 Kor 15,6 bezeugt. Manche Forscher verbinden sie vorsichtig mit der Erscheinung auf dem Berg in Galiläa (Mt 28,16–17) – das ist eine Hypothese. Für das Argument genügt, dass Paulus in einem Brief, den seine Gegner lesen konnten, eine große, zum Teil noch lebende Gruppe als Zeugen benennt.

**Wie man es sagen sollte:** Nicht „Paulus forderte die Korinther auf, die 500 zu befragen", sondern: „Paulus verweist auf lebende Zeugen, deren Existenz in der Gemeinde bekannt war oder leicht zu erfragen gewesen wäre – eine riskante Angabe, wenn sie erfunden war."`,
                  sources: [
                    { kind: 'bibel', work: '1. Korinther', ref: '1,12', quote: `Ich sage aber davon, daß unter euch einer spricht: Ich bin paulisch, der andere: Ich bin apollisch, der dritte: Ich bin kephisch, der vierte: Ich bin christisch.`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Korinther', ref: '16,1–3', quote: `Von der Steuer aber, die den Heiligen geschieht … so will ich die senden, daß sie hinbringen eure Wohltat gen Jerusalem.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Warum sollte Paulus ausgerechnet gegenüber einer Gemeinde mit einer Petrus-Partei eine Zeugenschar erfinden, die man über Petrus leicht hätte überprüfen können?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sherwin-white-ueberholt',
      objection: `Sherwin-Whites „Zwei-Generationen-Regel" ist längst widerlegt. Legenden und Wundergeschichten entstehen in Tagen – schau dir an, wie schnell sich heute Falschmeldungen verbreiten oder wie man über charismatische Führer schon zu Lebzeiten Wunder erzählt.`,
      objectionBy: 'Richard Carrier',
      answer: `Gerüchte entstehen schnell, keine Frage. Sherwin-Whites Punkt war ein anderer: Ausschmückungen löschen in so kurzer Zeit nicht den **harten Kern** einer Überlieferung aus. Hier geht es nicht um ein anonymes Gerücht, sondern um eine Botschaft, deren namentlich bekannte Hauptzeugen – Petrus, Jakobus, Johannes – selbst die Gemeinde leiteten. Eine Legende hätte gegen sie entstehen müssen, nicht durch sie.`,
      followUps: [
        {
          id: 'schneerson-sabbatai',
          objection: `Moderne Beispiele zeigen, wie schnell so etwas geht: Manche Anhänger des Lubawitscher Rebbe Menachem Schneerson († 1994) halten ihn bis heute für den Messias, einige sagen sogar, er sei nicht wirklich gestorben. Und Sabbatai Zwi behielt nach seinem Übertritt zum Islam 1666 eine Anhängerschaft.`,
          objectionBy: 'Bart Ehrman (sinngemäß) / Skeptiker-Literatur',
          answer: `Diese Beispiele zeigen gerade den Unterschied. Die Anhänger Schneersons verkünden keine leibliche Auferstehung mit leerem Grab – sein Grab in New York ist ein Pilgerort, und alle wissen, dass sein Leib dort liegt. Sabbatai Zwis Anhänger deuteten seinen Übertritt mystisch um – klassische Umdeutung, kein neues Ereignis. Bei Jesus dagegen behaupteten die Zeugen ein leeres Grab in der Stadt seiner Hinrichtung und Begegnungen, die auch Skeptiker und Gegner überzeugten. Messianische Hoffnungen überleben manchmal den Tod ihres Trägers – Auferstehungsbehauptungen mit leerem Grab erzeugen sie nicht.`,
          questionsBack: [
            `Behaupten die Anhänger des Rebbe, sein Grab sei leer und er sei Skeptikern leiblich erschienen?`,
          ],
        },
      ],
    },
    {
      id: 'alexander-vergleich',
      objection: `Apologeten vergleichen gern mit Alexander dem Großen, dessen erste erhaltene Biografien 400 Jahre später entstanden. Aber bei Alexander haben wir Münzen, Inschriften und Städtegründungen – und auch um ihn wucherten Legenden, siehe den Alexanderroman.`,
      objectionBy: 'Kipp Davis / Richard Carrier',
      answer: `Richtig – und genau der Alexanderroman zeigt, wie Legendenbildung aussieht: Er entstand Jahrhunderte nach Alexander und lief **neben** den nüchternen Quellen her, ohne deren Kern zu verdrängen. Dasselbe sehen wir beim Christentum: Die apokryphen Evangelien des 2. Jahrhunderts, etwa das Petrusevangelium, erzählen von riesenhaften Gestalten, die aus dem Grab steigen, und einem sprechenden Kreuz. Die kanonischen Evangelien dagegen beschreiben den Moment der Auferstehung überhaupt nicht – sie berichten nur, was Zeugen sahen: ein leeres Grab und Begegnungen.`,
      sources: [
        { kind: 'sonstiges', work: 'Petrusevangelium (apokryph)', ref: '35–42', year: '2. Jh.', quote: `Zwei Männer steigen vom Himmel herab, führen einen dritten aus dem Grab; ihre Häupter reichen bis zum Himmel, das des Geführten überragt die Himmel; ein Kreuz folgt ihnen und antwortet auf die Frage, ob es den Entschlafenen gepredigt habe: „Ja."`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'petrusevangelium-frueh',
          objection: `John Dominic Crossan hält einen Kern des Petrusevangeliums – das „Kreuzevangelium" – für die älteste Passionsquelle, älter als Markus. Also ist die legendarische Fassung gerade die früheste!`,
          objectionBy: 'John Dominic Crossan',
          answer: `Crossans „Kreuzevangelium"-These hat in der Fachwelt wenig Zustimmung gefunden. Raymond Brown und andere haben gezeigt, dass das Petrusevangelium die kanonischen Evangelien voraussetzt und mischt, nicht umgekehrt. Es enthält zudem Anachronismen und eine antijüdische Tendenz, die eher ins 2. Jahrhundert passt. Wer die legendärste Fassung zur ältesten erklärt, stellt die Quellenkritik auf den Kopf.`,
          sources: [
            { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Death of the Messiah, Bd. 2 (Anhang zum Petrusevangelium)', year: '1994', quote: `Brown hält das Petrusevangelium für abhängig von den kanonischen Evangelien (teils aus der Erinnerung an deren Lektüre und Vortrag).`, status: 'paraphrase' },
            { kind: 'gegner', author: 'John Dominic Crossan', work: 'The Cross That Spoke: The Origins of the Passion Narrative', year: '1988', quote: `Crossan rekonstruiert ein „Kreuzevangelium" als älteste Passionsquelle.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'jakobus-bekehrung-legende',
      objection: `Die angebliche „Bekehrung" des skeptischen Jakobus ist selbst ein Produkt der Legende. 1 Kor 15,7 sagt nur, Jesus sei Jakobus erschienen – nicht, dass Jakobus vorher ungläubig war. Die Geschichten von der ablehnenden Familie bei Markus und Johannes sind Polemik gegen die Jerusalemer Verwandten-Partei.`,
      objectionBy: 'Robert M. Price / Robert Eisenman',
      answer: `Das Gegenteil ist plausibler: Dass Jesu eigene Familie ihn für „von Sinnen" hielt (Mk 3,21) und seine Brüder nicht an ihn glaubten (Joh 7,5), ist eine peinliche Überlieferung – ausgerechnet über Jakobus, der später die Jerusalemer Gemeinde leitete. So etwas erfindet man nicht über den angesehensten Mann der Urgemeinde. Paulus kennt Jakobus persönlich und nennt ihn als Empfänger einer eigenen Erscheinung. Und Josephus bezeugt, dass Jakobus, „der Bruder Jesu, der Christus genannt wird", 62 n. Chr. als Anhänger hingerichtet wurde.`,
      detail: `**Die Bausteine:**
- **Vor Ostern:** Mk 3,21.31–35 (die Familie will ihn „festhalten"); Joh 7,5 („auch seine Brüder glaubten nicht an ihn"); am Kreuz vertraut Jesus seine Mutter dem Lieblingsjünger an, nicht seinen Brüdern (Joh 19,26–27).
- **Nach Ostern:** Die Brüder sind in der Gemeinde (Apg 1,14); Jakobus empfängt eine eigene Erscheinung (1 Kor 15,7), wird „Säule" (Gal 2,9) und Leiter in Jerusalem (Apg 15; 21,18).
- **Sein Ende:** Josephus (Ant. 20,200) berichtet die Steinigung des Jakobus unter dem Hohepriester Hannas dem Jüngeren; Hegesipp (bei Eusebius, KG II,23) erzählt sein Martyrium ausführlicher.

**Warum die Polemik-These schwach ist:** Markus und Johannes schreiben, als die Familie Jesu in der Kirche hoch angesehen war (vgl. die Verwandten Jesu bei Hegesipp). Eine Herabsetzung der Familie hätte keinen erkennbaren Nutzen, wohl aber Kosten. Am einfachsten erklärt sich der Befund so: Die Familie zweifelte – bis Ostern.`,
      voices: [
        {
          person: 'habermas',
          role: 'als Historiker der Minimal Facts',
          text: `Habermas führt die Bekehrung des Skeptikers Jakobus als eine der gut belegten Tatsachen an, die viele kritische Forscher akzeptieren. Er verbindet drei Linien: das Kriterium der Peinlichkeit für die vorösterliche Ablehnung, die frühe Erscheinungsnotiz im Credo und die außerbiblisch bezeugte spätere Leitungsrolle und Hinrichtung des Jakobus.`,
          sources: [{ kind: 'fachliteratur', author: 'Gary R. Habermas / Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase', quote: `Die Bekehrung des Jakobus als Indiz für eine reale Erscheinung.` }],
        },
        {
          person: 'eusebius',
          role: 'als Bewahrer älterer Quellen',
          text: `Eusebius überliefert den Bericht des Hegesipp aus dem 2. Jahrhundert über Jakobus, den „Gerechten", der wegen seines Christuszeugnisses getötet wurde. Auch wenn Hegesipps Erzählung legendarische Züge trägt, bestätigt sie zusammen mit Josephus den Kern: Der Bruder Jesu starb als Bekenner des Auferstandenen.`,
          sources: [{ kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'II,23', year: 'ca. 325', status: 'paraphrase', quote: `Bericht über das Martyrium des Herrenbruders Jakobus nach Hegesipp und Josephus.` }],
        },
      ],
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '3,21', quote: `Und da es höreten, die um ihn waren, gingen sie hinaus und wollten ihn halten; denn sie sprachen: Er ist von Sinnen.`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'bibel', work: 'Johannes', ref: '7,5', quote: `Denn auch seine Brüder glaubten nicht an ihn.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '20,200', year: 'ca. 93', quote: `Hannas versammelte den Hohen Rat und stellte den Bruder Jesu, der Christus genannt wird, mit Namen Jakobus, und einige andere vor Gericht und ließ sie steinigen.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Warum sollte die Urkirche ausgerechnet über ihren Leiter Jakobus erzählen, er habe seinen Bruder für verrückt gehalten?`,
        `Was hat einen frommen Juden, der seinen Bruder für einen Irregeleiteten hielt, dazu gebracht, für dessen Messianität zu sterben?`,
      ],
      followUps: [
        {
          id: 'jakobus-familienloyalitaet',
          objection: `Familienloyalität erklärt genug: Nach Jesu Tod übernahm der Bruder die Bewegung, wie es bei dynastischen Bewegungen üblich ist – die Makkabäer, die Söhne des Judas Galiläus. Dafür braucht es keine Erscheinung.`,
          objectionBy: 'Robert Eisenman / James Tabor',
          answer: `Dynastische Nachfolge erklärt, warum ein Verwandter eine **bestehende** Bewegung übernimmt – nicht, warum ein Zweifler sich überhaupt einer Bewegung anschließt, deren Anführer gerade schmachvoll als Verfluchter gestorben war. Die Söhne des Judas Galiläus führten dessen Sache weiter, ohne zu behaupten, er sei auferweckt worden. Bei Jakobus aber steht im Zentrum genau diese Behauptung – und er starb für sie, nicht für Familienehre.`,
          detail: `**Ehrlich:** Die Rolle der Familie Jesu in der Urgemeinde ist real, und Forscher wie James Tabor betonen sie zu Recht („Jesus-Dynastie"). Das ist mit dem christlichen Befund gut vereinbar. Strittig ist nur die Ursache des Umschwungs: Familienloyalität hätte eher zu einer Bewegung des **Gedenkens** an einen Märtyrer geführt, nicht zur Verkündigung, Gott habe ihn auferweckt und zum Herrn gemacht.`,
          sources: [
            { kind: 'gegner', author: 'James D. Tabor', work: 'The Jesus Dynasty', year: '2006', quote: `Tabor betont die führende Rolle der Familie Jesu, besonders des Jakobus, in der frühen Bewegung.`, status: 'paraphrase' },
          ],
          questionsBack: [
            `Kennst du eine dynastische jüdische Bewegung, in der der Bruder behauptete, der hingerichtete Anführer sei leiblich auferweckt worden?`,
          ],
        },
      ],
    },
    {
      id: 'gedaechtnis-verzerrt',
      objection: `Die Gedächtnisforschung zeigt: Selbst Augenzeugen erinnern sich falsch, und zwar schnell. Erinnerungen werden bei jedem Erzählen neu konstruiert, an Gruppenerwartungen angepasst und mit Details angereichert. Die Augenzeugen selbst sind also schon eine Legendenquelle.`,
      objectionBy: 'Bart Ehrman',
      answer: `Die Gedächtnisforschung zeigt vor allem zweierlei: Details verzerren sich, der **Kern** – das „Was ist im Wesentlichen geschehen?" – bleibt bei einschneidenden Erlebnissen erstaunlich stabil. Dass jemand Jesus gekreuzigt sah und ihn danach lebend zu sehen meinte, ist kein Detail, sondern der Kern. Unterschiede bei Zahl der Engel oder Uhrzeit passen genau zu dem, was die Forschung erwarten lässt; eine erfundene Auferstehung passt dazu nicht. Außerdem erinnerten sich nicht Einzelne isoliert, sondern eine Gemeinschaft, die ihre Erinnerung gemeinsam pflegte und korrigierte.`,
      detail: `**Was die Forschung sagt:** Robert McIver hat die Ergebnisse der Gedächtnispsychologie auf die Evangelien angewendet: Augenzeugenerinnerung ist bei Details fehleranfällig, beim Kern („gist") und bei persönlich bedeutsamen, emotionalen Ereignissen aber deutlich verlässlicher. Ehrman selbst gesteht in „Jesus Before the Gospels" zu, dass Erinnerungen den Kern oft bewahren, betont aber stärker die Verzerrungen.

**Kollektives Gedächtnis:** Richard Bauckham und James Dunn betonen, dass die Jesusüberlieferung nicht wie ein Stille-Post-Spiel ablief, sondern in Gemeinden, in denen Augenzeugen lebten und die Überlieferung gemeinsam weitergaben (siehe „Stille Post").

**Die Pointe:** Ehrmans Argument erklärt gut, warum die Evangelien sich in Nebensachen unterscheiden. Es erklärt nicht, wie aus einer Kreuzigung ohne Folgen die gemeinsame Überzeugung von Petrus, Jakobus, den Zwölf und Paulus wird, den Auferstandenen gesehen zu haben – innerhalb weniger Jahre.`,
      voices: [
        {
          person: 'bauckham',
          role: 'als Erforscher der Augenzeugenüberlieferung',
          text: `Bauckham argumentiert, dass die Evangelien auf benannte Augenzeugen zurückgehen, die in den Gemeinden als Garanten der Überlieferung bekannt waren. Er setzt sich ausdrücklich mit der Gedächtnisforschung auseinander und kommt zu dem Schluss, dass einschneidende, wiederholt erzählte und persönlich bedeutsame Ereignisse im Kern zuverlässig erinnert werden.`,
          sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2006; 2. Aufl. 2017', status: 'paraphrase', quote: `Auseinandersetzung mit der Gedächtnispsychologie und Augenzeugenerinnerung.` }],
        },
      ],
      sources: [
        { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Jesus Before the Gospels: How the Earliest Christians Remembered, Changed, and Invented Their Stories of the Savior', year: '2016', quote: `Ehrman wendet Gedächtnisforschung auf die Jesusüberlieferung an und betont, wie stark Erinnerungen verändert und erfunden werden können.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Robert K. McIver', work: 'Memory, Jesus, and the Synoptic Gospels', year: '2011', quote: `McIver zeigt, dass Augenzeugenerinnerung bei Details fehleranfällig, beim Kern bedeutsamer Ereignisse aber vergleichsweise zuverlässig ist.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Welche Studie zeigt, dass Gedächtnisverzerrung aus einem Begräbnis ohne Folgen die gemeinsame Erinnerung mehrerer Gruppen an Begegnungen mit dem Verstorbenen erzeugt?`,
        `Wenn Details bei Augenzeugen variieren – ist das nicht genau das, was wir in den Evangelien sehen, während der Kern übereinstimmt?`,
      ],
    },
  ],
  questionsToAsk: [
    `Wie viele Jahre braucht eine Legende, um den Kern einer Überlieferung zu ersetzen, während deren Hauptzeugen noch leben und leiten?`,
    `Wie erklärst du, dass das älteste Dokument – das Credo – bereits Begräbnis, Auferstehung und konkrete Zeugen nennt?`,
    `Warum beschreiben die kanonischen Evangelien den Moment der Auferstehung gar nicht, wenn sie Legenden sind?`,
    `Warum fordert Paulus seine Leser indirekt auf, die noch lebenden Zeugen zu fragen?`,
  ],
  avoid: [
    `Sherwin-Whites Beobachtung als „wissenschaftliches Gesetz" darstellen – sie ist eine fachkundige Einschätzung, keine Regel.`,
    `Behaupten, alle Details der Auferstehungsberichte stammten aus dem Jahr 30 – es geht um den Kern.`,
    `Das Petrusevangelium als „gnostisch" bezeichnen – es ist doketisch geprägt, aber nicht im engeren Sinn gnostisch.`,
  ],
  concessions: [
    `Die Evangelien erzählen die Ostergeschichten unterschiedlich und gestalten sie theologisch aus.`,
    `Der kanonische Markus endet in den ältesten Handschriften mit 16,8 ohne Erscheinungsbericht.`,
    `Gerüchte und Wundergeschichten können sehr schnell entstehen – das Argument beruht auf dem Kern, nicht auf Details.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'A. N. Sherwin-White', work: 'Roman Society and Roman Law in the New Testament', year: '1963', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael R. Licona', work: 'The Resurrection of Jesus: A New Historiographical Approach', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James D. G. Dunn', work: 'Jesus Remembered', year: '2003', status: 'paraphrase' },
    { kind: 'gegner', author: 'Robert M. Price / Jeffery Jay Lowder (Hg.)', work: 'The Empty Tomb: Jesus Beyond the Grave', year: '2005', status: 'paraphrase', note: 'Sammelband der skeptischen Gegenseite.' },
  ],
  difficulty: 2,
  tags: ['Legende', '1 Kor 15', 'Credo', 'Sherwin-White', 'Datierung', 'geistlicher Leib'],
  related: [
    'auferstehung/halluzinationen',
    'neues-testament/stille-post',
    'neues-testament/evangelien-spaet-anonym',
    'neues-testament/evangelien-widersprechen-sich',
    'antike-parallelen/sterbende-auferstehende-goetter',
  ],
};

export default claim;
