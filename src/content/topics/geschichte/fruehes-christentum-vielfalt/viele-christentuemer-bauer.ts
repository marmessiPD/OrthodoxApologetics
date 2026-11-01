import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'viele-christentuemer-bauer',
  title: `„Es gab viele gleichberechtigte Christentümer – die Orthodoxie war nur der Sieger (Bauer, Ehrman)."`,
  proponents: [
    { name: 'Walter Bauer', role: 'Neutestamentler und Lexikograph, Göttingen (†1960)', work: 'Rechtgläubigkeit und Ketzerei im ältesten Christentum (1934; 2. Aufl. 1964; engl. 1971)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Lost Christianities (2003); Lost Scriptures (2003); The Orthodox Corruption of Scripture (1993)' },
    { name: 'Elaine Pagels', role: 'Religionshistorikerin, Princeton', work: 'The Gnostic Gospels (1979); Beyond Belief (2003)' },
    { name: 'Helmut Koester', role: 'Neutestamentler, Harvard (†2016)', work: 'Trajectories through Early Christianity (mit J. M. Robinson, 1971)' },
  ],
  steelman: `Walter Bauer zeigte 1934, dass das Bild einer ursprünglich einheitlichen, rechtgläubigen Kirche, von der sich später Ketzer abspalteten, eine Konstruktion des Siegers ist – vor allem des Eusebius. In vielen Regionen waren die später als Häresie verworfenen Formen älter oder in der Mehrheit: In Edessa begann das Christentum mit Marcioniten und Bardesaniten, in Ägypten mit Gnostikern wie Basilides, Valentinus und Karpokrates; von einer „orthodoxen" Kirche in Alexandria hören wir erst um 190 mit Bischof Demetrius. Die römische Gemeinde, reich und gut vernetzt, setzte ihre Form des Glaubens nach und nach durch. Bart Ehrman hat diese These popularisiert: Im 2. Jahrhundert gab es Ebioniten, die Jesus für einen bloßen Menschen hielten, Marcioniten mit zwei Göttern, Gnostiker mit geheimem Wissen und „Proto-Orthodoxe". Die Sieger schrieben die Geschichte um, bestimmten den Kanon, veränderten sogar Bibeltexte und vernichteten die Schriften der Verlierer. Was heute „Orthodoxie" heißt, ist nicht der ursprüngliche Glaube Jesu, sondern die Partei, die gewann.`,
  biblical: {
    summary: `Das Neue Testament selbst zeigt beides: Es gab von Anfang an Streit und abweichende Lehren – und von Anfang an das Bewusstsein, dass es ein überliefertes Evangelium gibt, an dem Lehren gemessen werden. Paulus gibt in 1 Kor 15,3–5 eine Glaubensformel weiter, die er selbst „empfangen" hat – Forscher datieren sie in die ersten Jahre nach der Kreuzigung. Er verflucht ein „anderes Evangelium" (Gal 1,8–9) und betont, dass er mit Petrus, Jakobus und Johannes übereinstimmt (Gal 2,9; 1 Kor 15,11). Der Judasbrief mahnt, für den Glauben zu kämpfen, „der ein für alle Mal den Heiligen überliefert ist" (Jud 3). Der Maßstab der Rechtgläubigkeit ist also nicht ein späterer Sieg, sondern das apostolische Zeugnis von Kreuz und Auferstehung.`,
    detail: `**Frühe Bekenntnisformeln im Neuen Testament:**
- 1 Kor 15,3–5: Tod für unsere Sünden, Begräbnis, Auferweckung am dritten Tag, Erscheinungen.
- Phil 2,6–11: der präexistente Christus, der sich erniedrigt und dem der Gottesname „Herr" gegeben wird.
- 1 Kor 8,6: ein Gott, der Vater, und ein Herr, Jesus Christus – eine christliche Umformung des Schma Israel.
- 1 Joh 4,2–3: Prüfstein gegen frühe Doketisten: Wer bekennt, dass Jesus Christus im Fleisch gekommen ist, ist aus Gott.

Diese Texte stammen aus den 50er- bis 90er-Jahren des 1. Jahrhunderts – vor allen gnostischen Systemen und vor Marcion (um 140).`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,3', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift,`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '1,8', quote: `Aber so auch wir oder ein Engel vom Himmel euch würde Evangelium predigen anders, denn das wir euch gepredigt haben, der sei verflucht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Judas', ref: '3', quote: `… daß ihr für den Glauben kämpfet, der einmal den Heiligen übergeben ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '18,24–25', quote: `Apollos, ein Jude aus Alexandrien, beredt und mächtig in der Schrift, unterwiesen im Weg des Herrn.`, status: 'paraphrase', note: 'Der Codex Bezae ergänzt, er sei „in seiner Heimat" im Wort unterrichtet worden – ein früher Hinweis auf Christen in Alexandrien.' },
    ],
  },
  church: {
    summary: `Für die koptische Kirche ist die Bauer-These besonders brisant, denn Ägypten war Bauers Hauptbeispiel. Die Kirche bekennt sich zur Gründung durch den Evangelisten Markus und zu einer ununterbrochenen Reihe von Bischöfen – heute im 118. Papst. Sie verweist auf die frühe Katechetenschule (Pantänus, Clemens, später Origenes und Didymus), auf Irenäus, der um 180 die Kirchen „in Ägypten und in Libyen" als Träger desselben Glaubens nennt, und auf die ältesten neutestamentlichen Papyri, die fast alle aus Ägypten stammen. Ehrlich bleibt: Die Liste der frühesten alexandrinischen Bischöfe ist dünn bezeugt, und auch gnostische Lehrer wirkten in Alexandria. Rechtgläubigkeit ist für die Kirche nicht Siegermacht, sondern Treue zur apostolischen Überlieferung, wie sie die Väter – Irenäus, Athanasius, Kyrill – bezeugen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'I,10,2', year: 'ca. 180', quote: `Denn weder die Kirchen in Germanien glauben anders oder überliefern anders, noch die in Spanien, noch die bei den Kelten, noch die im Osten, noch die in Ägypten, noch die in Libyen, noch die in der Mitte der Welt gegründeten.`, original: `For the churches which have been planted in Germany do not believe or hand down anything different, nor do those in Spain, nor those in Gaul, nor those in the East, nor those in Egypt, nor those in Libya, nor those which have been established in the central regions of the world.`, translation: 'ANF (Roberts/Rambaut), dt. eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'II,16; V,10', year: 'frühes 4. Jh.', quote: `Markus sei als Erster nach Ägypten gesandt worden, habe dort das Evangelium verkündet und Gemeinden in Alexandrien gegründet; zur Zeit des Commodus habe Pantänus die Schule der Gläubigen in Alexandrien geleitet.`, status: 'paraphrase', note: 'Eusebius leitet die Markus-Nachricht mit „man sagt" ein – ehrlich nennen.' },
    ],
  },
  opposingView: {
    summary: `Bauers These hat die Forschung stark geprägt, ist aber in ihren konkreten regionalen Rekonstruktionen weitgehend gescheitert. Schon H. E. W. Turner (The Pattern of Christian Truth, 1954) zeigte, dass das frühe Christentum feste Elemente (Gottesbild, Christus als Herr, Taufe, Schrift des Alten Testaments) und bewegliche Ausdrucksformen hatte und dass Häresien meist von einem bereits bestehenden Kern abwichen. Thomas Robinson (The Bauer Thesis Examined, 1988) prüfte Kleinasien und fand Bauers Bild nicht bestätigt; Andreas Köstenberger und Michael Kruger (The Heresy of Orthodoxy, 2010) fassten die Kritik zusammen. Für Ägypten haben Colin H. Roberts (1979) und Birger Pearson die Papyrus- und Quellenlage neu ausgewertet: Die frühesten christlichen Papyri sind überwiegend biblisch, nicht gnostisch, und die Lücke in der frühen alexandrinischen Überlieferung erklärt sich eher durch die Vernichtung der jüdischen Gemeinde Alexandrias im Aufstand 115–117. Unbestritten bleibt: Das Christentum des 2. Jahrhunderts war vielfältig, und die Begriffe „Orthodoxie" und „Häresie" wurden im Lauf der Zeit präziser gefasst. Ehrman selbst räumt ein, dass Bauers Einzelanalysen problematisch sind, hält aber an der Grundthese fest.`,
    detail: `**Ägypten im Detail:**
- **Argument aus dem Schweigen:** Bauer folgert aus dem Fehlen von Nachrichten über die alexandrinische Kirche vor 180/190, sie sei gnostisch gewesen. Doch Schweigen ist kein Beleg für Häresie.
- **Der jüdische Aufstand 115–117** unter Trajan vernichtete die große jüdische Gemeinde Alexandrias weitgehend – wenn das früheste Christentum dort judenchristlich war (Pearson), erklärt das die Überlieferungslücke.
- **Papyri:** P52 (Johannes 18), P66 und P75 (Johannes- und Lukastexte) stammen aus Ägypten. Ihre Datierung ist in jüngerer Zeit diskutiert worden (Brent Nongbri plädiert für spätere, breitere Spannen); das Gesamtbild – biblische Texte überwiegen unter den frühen christlichen Papyri – bleibt aber bestehen.
- **Nomina sacra** (die abgekürzten heiligen Namen wie ΘΣ, ΙΣ, ΚΣ) finden sich übergreifend in frühen christlichen Handschriften und zeigen eine gemeinsame Schreiberpraxis (Roberts, Hurtado).
- **Proto-orthodoxe Lehrer vor Demetrius:** Pantänus (um 180) und Clemens von Alexandrien, der vom „kirchlichen Kanon" spricht und gegen Basilides und die Valentinianer schreibt.
- **Gnostische Texte in Ägypten:** Die Nag-Hammadi-Codices (4. Jh.) sind koptische Übersetzungen griechischer Schriften des 2./3. Jahrhunderts; sie belegen gnostische Leserkreise, aber nicht deren Priorität.`,
    sources: [
      { kind: 'gegner', author: 'Walter Bauer', work: 'Rechtgläubigkeit und Ketzerei im ältesten Christentum', year: '1934', quote: `In zahlreichen Regionen sei das, was später als Ketzerei galt, die ursprüngliche oder vorherrschende Form des Christentums gewesen; die Rechtgläubigkeit habe sich erst nach und nach, wesentlich von Rom aus, durchgesetzt.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Lost Christianities. The Battles for Scripture and the Faiths We Never Knew', year: '2003', quote: `Im 2. und 3. Jahrhundert habe es eine Vielzahl christlicher Gruppen gegeben; die proto-orthodoxe Partei habe gesiegt und anschließend die Geschichte des Konflikts neu geschrieben.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'H. E. W. Turner', work: 'The Pattern of Christian Truth. A Study in the Relations between Orthodoxy and Heresy in the Early Church (Bampton Lectures 1954)', year: '1954', quote: `Das frühe Christentum habe feste und bewegliche Elemente gehabt; Häresie sei eine Abweichung von einem bereits gelebten Kern, nicht dessen Vorstufe.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Andreas J. Köstenberger / Michael J. Kruger', work: 'The Heresy of Orthodoxy', year: '2010', quote: `Die Bauer-Ehrman-These scheitere an den neutestamentlichen Belegen für eine frühe Kernüberlieferung und an der Quellenlage der einzelnen Regionen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Colin H. Roberts', work: 'Manuscript, Society and Belief in Early Christian Egypt (Schweich Lectures 1977)', year: '1979', quote: `Die christlichen Papyri aus Ägypten bestätigten nicht die Annahme einer gnostischen Vorherrschaft in den ersten Jahrhunderten; der Einfluss des Judentums auf die frühe Kirche sei deutlich.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Birger A. Pearson', work: 'Gnosticism and Christianity in Roman and Coptic Egypt', year: '2004', quote: `Das früheste alexandrinische Christentum sei judenchristlich geprägt gewesen und habe wohl Verbindungen nach Jerusalem gehabt; der jüdische Aufstand von 115–117 erkläre die Überlieferungslücke.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Dass es im 2. Jahrhundert verschiedene Gruppen gab, bestreitet niemand – Irenäus schrieb fünf Bücher gegen sie. Die Frage ist, ob sie gleich alt und gleich ursprünglich waren. Und da zeigt sich: Der Kern des orthodoxen Glaubens – Christus gestorben, auferstanden, als Herr angebetet – steht schon in Bekenntnisformeln aus den 30er- bis 50er-Jahren (1 Kor 15; Phil 2), Jahrzehnte vor allen gnostischen Systemen. Bauers Paradebeispiel Ägypten hält nicht: Die frühesten Papyri von dort sind biblische Texte, nicht gnostische, und um 180 nennt Irenäus die Kirchen Ägyptens als Träger desselben Glaubens.`,
  keyPoints: [
    `**Vielfalt ja, Gleichursprünglichkeit nein:** Die Bekenntnisformeln 1 Kor 15,3–5 und Phil 2,6–11 sind älter als Gnosis (2. Jh.) und Marcion (um 140).`,
    `**Normbewusstsein von Anfang an:** Gal 1,8–9; 1 Joh 4,2–3; Jud 3 – die Unterscheidung von wahrem und falschem Evangelium ist apostolisch, nicht nachträglich.`,
    `**Ägypten widerlegt Bauer:** frühe Papyri überwiegend biblisch (Roberts 1979); Überlieferungslücke durch den jüdischen Aufstand 115–117 (Pearson); Irenäus (um 180) nennt die Kirchen Ägyptens und Libyens.`,
    `**Forschungsstand:** Turner (1954), Robinson (1988), Köstenberger/Kruger (2010) – Bauers regionale Rekonstruktionen gelten weitgehend als gescheitert; auch Ehrman räumt Schwächen ein.`,
    `**Die „Verlierer" sind gut überliefert:** Nag Hammadi, Codex Tchacos, Oxyrhynchus-Fragmente – und trotzdem bleibt das Bild: Ihre Texte sind jünger.`,
    `**Sieg ohne Staatsmacht:** Bis 313 hatten die Proto-Orthodoxen keine Polizei; sie wurden selbst verfolgt.`,
    `**Ehrlich:** Begriffe wurden präzisiert, Bischofslisten sind früh dünn bezeugt, und im 4. Jahrhundert wurden Häretiker teils mit Staatsgewalt unterdrückt.`,
  ],
  argument: {
    name: 'Chronologie des Kerns',
    summary: `Was zuerst da war, kann nicht bloß „der Sieger" sein.`,
    premises: [
      { text: `P1: Die zentralen Inhalte des orthodoxen Glaubens sind in den frühesten christlichen Texten bezeugt.`, support: `1 Kor 15,3–5; 1 Kor 8,6; Phil 2,6–11; Röm 1,3–4 – Formeln aus den 30er- bis 50er-Jahren, von Paulus als empfangene Überlieferung weitergegeben.` },
      { text: `P2: Die wichtigsten konkurrierenden Systeme (gnostische Systeme, Marcion) sind erst im 2. Jahrhundert bezeugt.`, support: `Basilides und Valentinus wirken um 120–160, Marcion um 140; die Nag-Hammadi-Schriften sind Übersetzungen von Texten des 2./3. Jahrhunderts.` },
      { text: `P3: Schon das Neue Testament unterscheidet ausdrücklich zwischen überliefertem Evangelium und Abweichung.`, support: `Gal 1,8–9; 1 Joh 4,2–3; 2 Joh 7; Jud 3.` },
    ],
    conclusion: `Die Orthodoxie ist nicht eine von vielen gleichursprünglichen Parteien, die zufällig siegte, sondern die Fortsetzung des ältesten bezeugten apostolischen Kerns; Häresien sind spätere Abweichungen – auch wenn es früh Vielfalt und Streit gab.`,
  },
  voices: [
    {
      person: 'irenaeus',
      role: 'als Zeuge der apostolischen Überlieferung im 2. Jahrhundert',
      text: `Irenäus, der in seiner Jugend Polykarp gehört hatte – einen Schüler des Apostels Johannes –, beschreibt um 180 die Lehren der Valentinianer, Basilidianer und anderer Gruppen ausführlich und stellt ihnen die eine Glaubensregel gegenüber, die von den Aposteln über die Bischöfe der Gemeinden weitergegeben wurde. Sein Argument ist historisch: Die Apostel hätten keine Geheimlehre an Eingeweihte gegeben, sondern ihre Lehre öffentlich den Gemeinden anvertraut, deren Bischofsreihen man nachprüfen könne. Dass seine Beschreibungen der Gnostiker durch die Nag-Hammadi-Funde in vielem bestätigt wurden, spricht für seine Zuverlässigkeit als Berichterstatter.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3,1–4', year: 'ca. 180', quote: `Die Überlieferung der Apostel sei in der ganzen Welt in jeder Kirche für alle sichtbar, die die Wahrheit sehen wollen; die Apostel hätten keine Geheimlehren weitergegeben.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als alexandrinischer Lehrer vor Demetrius',
      text: `Clemens lehrte in Alexandrien im späten 2. Jahrhundert, also gerade in der Zeit, in der nach Bauer die Orthodoxie dort angeblich erst ankam. Er spricht vom „kirchlichen Kanon" als Maßstab, setzt sich ausführlich mit Basilides und den Valentinianern auseinander und nennt den „wahren Gnostiker" den, der in der Überlieferung der Kirche lebt. Er steht für eine gebildete, philosophisch offene, aber klar kirchliche Theologie – lange vor Bischof Demetrius' Amtszeit und offensichtlich in einer bereits bestehenden Tradition.`,
      sources: [
        { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Stromateis', ref: 'VI–VII', year: 'ca. 200', quote: `Der wahre Gnostiker lebe nach dem kirchlichen Kanon; die Häresien seien jünger als die Kirche.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'hurtado',
      role: 'als Spezialist für frühe christliche Handschriften und Christusverehrung',
      text: `Hurtado hat gezeigt, dass die Verehrung Jesu als Herr zusammen mit Gott bereits in den frühesten Jahren des Christentums auftaucht – nicht als spätes Produkt. In seiner Arbeit über die frühesten christlichen Artefakte weist er auf übergreifende Schreiberpraktiken hin: die Vorliebe für den Kodex und die Nomina sacra. Solche gemeinsamen Praktiken in Handschriften aus verschiedenen Orten sprechen für ein vernetztes, nicht völlig zersplittertes frühes Christentum.`,
      sources: [
        { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'The Earliest Christian Artifacts. Manuscripts and Christian Origins', year: '2006', quote: `Kodex und Nomina sacra als übergreifende frühe christliche Praktiken.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ. Devotion to Jesus in Earliest Christianity', year: '2003', quote: `Die kultische Verehrung Jesu sei ein frühes und weit verbreitetes Phänomen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'michael-kruger',
      role: 'als Spezialist für Kanon und frühe Christentumsgeschichte',
      text: `Kruger hat zusammen mit Andreas Köstenberger die Bauer-Ehrman-These geprüft und argumentiert, dass sie an drei Stellen scheitert: an Bauers regionalen Rekonstruktionen, an den neutestamentlichen Belegen für einen frühen Lehrkern und an der Kanongeschichte, in der die vier Evangelien und die Paulusbriefe schon im 2. Jahrhundert weithin anerkannt waren. Vielfalt habe es gegeben, aber nicht als Gleichursprünglichkeit.`,
      sources: [
        { kind: 'fachliteratur', author: 'Andreas J. Köstenberger / Michael J. Kruger', work: 'The Heresy of Orthodoxy', year: '2010', quote: `Kritik an der Bauer-These auf regionaler, neutestamentlicher und kanongeschichtlicher Ebene.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Patristiker der Schule von Alexandrien',
      text: `Malaty beschreibt die Katechetenschule von Alexandrien als Herzstück der frühen ägyptischen Kirche: Unter Pantänus, Clemens, Origenes, Heraklas, Dionysius und Didymus verband sie Bibelstudium, Philosophie und Gebet. Für ihn zeigt diese Schule, dass die Kirche Ägyptens schon im 2. Jahrhundert eine eigenständige, gelehrte und zugleich kirchlich gebundene Theologie hatte – das Gegenteil eines Christentums, das erst spät von außen „orthodox" gemacht werden musste.`,
      sources: [
        { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'The School of Alexandria', quote: `Die Katechetenschule als Zentrum biblischer und theologischer Bildung der frühen alexandrinischen Kirche.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'aegypten-gnostisch',
      objection: `In Ägypten waren die ersten Christen Gnostiker – Basilides, Valentinus, Karpokrates. Von einer orthodoxen Kirche in Alexandria hören wir erst um 190 mit Demetrius.`,
      objectionBy: 'Walter Bauer',
      answer: `Dass wir vor 180 wenig hören, ist ein Argument aus dem Schweigen – und das Schweigen hat eine bessere Erklärung: Die jüdische Gemeinde Alexandrias, aus der die ersten Christen wohl kamen, wurde im Aufstand von 115–117 weitgehend vernichtet. Die frühesten christlichen Papyri aus Ägypten sind überwiegend biblische Texte, nicht gnostische. Und um 180 nennt Irenäus die Kirchen in Ägypten und Libyen ausdrücklich als Träger desselben Glaubens.`,
      followUps: [
        {
          id: 'papyri-datierung',
          objection: `Die Datierung der Papyri ist unsicher. Brent Nongbri hat gezeigt, dass P52 auch ins 3. Jahrhundert gehören kann. Dein „frühester Beleg" schwimmt.`,
          objectionBy: 'Bart Ehrman',
          answer: `Das stimmt, paläographische Datierungen haben Spannen, und manche sind zu früh angesetzt worden. Mein Argument hängt aber nicht an einem einzelnen Papyrus, sondern am Gesamtbild: Unter den frühen christlichen Papyri aus Ägypten überwiegen biblische und kirchliche Texte deutlich. Auch bei späteren Datierungen ändert sich dieses Verhältnis nicht.`,
          followUps: [
            {
              id: 'fundzufall',
              objection: `Das ist Fundzufall: Oxyrhynchus ist eine Müllhalde einer Stadt. Daraus kann man keine Mehrheitsverhältnisse ablesen.`,
              objectionBy: 'Bart Ehrman',
              answer: `Gerade die Müllhalde von Oxyrhynchus ist aufschlussreich, denn sie hat auch heterodoxe Texte bewahrt – Fragmente des Thomasevangeliums und des Evangeliums der Maria. Der Zufall hat also nicht nur Orthodoxes erhalten. Und trotzdem sind die biblischen Texte in der Überzahl. Wenn die Gnostiker die Mehrheit gewesen wären, müsste man das Gegenteil erwarten.`,
              followUps: [
                {
                  id: 'nag-hammadi',
                  objection: `Und Nag Hammadi? Dort lasen ägyptische Mönche im 4. Jahrhundert gnostische Texte. Die „Ketzerei" war mitten in der Kirche.`,
                  objectionBy: 'Elaine Pagels',
                  answer: `Wer die Codices besaß, ist unbekannt; dass es Pachomius-Mönche waren, ist eine Hypothese. Selbst wenn: Die Texte sind koptische Übersetzungen von Schriften des 2. und 3. Jahrhunderts – sie zeigen, dass gnostische Literatur gelesen wurde, nicht dass sie die ursprüngliche Form des ägyptischen Christentums war. Die Frage ist die nach dem Ursprung, nicht nach späteren Lesern.`,
                  followUps: [
                    {
                      id: 'athanasius-zensur',
                      objection: `Genau: 367 befahl Athanasius in seinem Osterbrief, die Apokryphen zu meiden – und die Mönche mussten die Bücher vergraben. So siegte die Orthodoxie: durch Zensur.`,
                      objectionBy: 'Elaine Pagels',
                      answer: `Dass der 39. Osterbrief des Athanasius mit dem Vergraben der Codices zusammenhängt, ist eine verbreitete, aber unbewiesene Vermutung. Richtig ist: Im 4. Jahrhundert setzten Bischöfe ihre Autorität ein, und Athanasius legte den Kanon der 27 neutestamentlichen Bücher fest – der älteste Beleg genau unseres Kanons. Aber 367 ist 300 Jahre nach Paulus. Die Frage, ob der orthodoxe Glaube ursprünglich war, entscheidet sich an den Texten des 1. Jahrhunderts, nicht an Maßnahmen des 4.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Liste der kanonischen Bücher des Alten und der 27 Bücher des Neuen Testaments; Warnung vor den Apokryphen, die Häretiker unter dem Namen der Heiligen verbreiten.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'demetrius-liste',
          objection: `Die alexandrinische Bischofsliste vor Demetrius ist erfunden – zehn Namen ohne Inhalt. Die Markus-Tradition ist Legende.`,
          objectionBy: 'Walter Bauer',
          answer: `Dass die frühen Namen der Liste kaum mehr sind als Namen, gebe ich zu; auch Eusebius leitet die Markus-Nachricht mit „man sagt" ein. Aber zwischen „wenig bekannt" und „gnostisch" liegt ein großer Unterschied. Mit Pantänus und Clemens haben wir um 180 proto-orthodoxe Lehrer in Alexandria, die vor Demetrius wirkten und in einer bestehenden Tradition standen.`,
          followUps: [
            {
              id: 'markus-legende',
              objection: `Markus in Alexandria ist eine späte Gründungslegende, wie sie jede große Stadt brauchte.`,
              objectionBy: 'Helmut Koester',
              answer: `Beweisen lässt sich die Markus-Gründung nicht, das gestehe ich zu. Sie ist aber alt, unwidersprochen und plausibel: Markus war nach dem Neuen Testament mit Petrus und Paulus verbunden, Alexandria hatte die größte jüdische Diaspora und war per Schiff gut erreichbar, und ein Alexandriner wie Apollos war schon um 50 Christ (Apg 18,24). Die koptische Kirche hält die Überlieferung fest; der Kern meines Arguments hängt aber nicht an ihr.`,
            },
          ],
        },
      ],
    },
    {
      id: 'viele-christentuemer',
      objection: `Ebioniten, Marcioniten, Gnostiker, Proto-Orthodoxe – es gab viele Christentümer. Die Sieger haben die Geschichte umgeschrieben.`,
      objectionBy: 'Bart Ehrman',
      answer: `Vielfalt gab es, das bestreite ich nicht – Irenäus hat fünf Bücher gegen solche Gruppen geschrieben. Aber sie waren nicht gleich alt. Der Kern des orthodoxen Glaubens steht in Bekenntnisformeln aus den 30er- bis 50er-Jahren (1 Kor 15,3–5; Phil 2,6–11). Gnostische Systeme sind erst im 2. Jahrhundert bezeugt, Marcion um 140. Wer zuerst da war, ist nicht bloß der Sieger, sondern der Ursprung.`,
      followUps: [
        {
          id: 'paulus-gegen-petrus',
          objection: `Schon im Neuen Testament streitet Paulus mit Petrus und Jakobus. Die „Orthodoxie" ist einfach die Partei des Paulus, die gewonnen hat.`,
          objectionBy: 'Bart Ehrman',
          answer: `Paulus berichtet von einem Streit über das Verhalten bei Tischgemeinschaften (Gal 2,11–14), aber zugleich vom Handschlag der Gemeinschaft mit Jakobus, Petrus und Johannes (Gal 2,9). Über den Kern sagt er ausdrücklich: „Es sei nun ich oder jene, so predigen wir, und so habt ihr geglaubt" (1 Kor 15,11). Streit über Praxis ist nicht dasselbe wie verschiedene Evangelien.`,
          followUps: [
            {
              id: 'kanon-sieger',
              objection: `Und den Kanon haben die Sieger erst im 4. Jahrhundert festgelegt – sie haben ausgewählt, was ihnen passte.`,
              objectionBy: 'Bart Ehrman',
              answer: `Der Kern des Kanons – vier Evangelien und die Paulusbriefe – war schon im späten 2. Jahrhundert weithin anerkannt (Irenäus, Muratorisches Fragment, Clemens von Alexandrien). Athanasius' Liste von 367 hat bestätigt, was in den Kirchen längst gelesen wurde. Die gnostischen Evangelien wurden nicht aus einem gleichberechtigten Pool abgewählt; sie sind jünger und waren nie allgemein in Gebrauch.`,
              followUps: [
                {
                  id: 'irenaeus-polemiker',
                  objection: `Irenäus ist ein Polemiker. Seine Beschreibung der Gnostiker ist Propaganda.`,
                  objectionBy: 'Elaine Pagels',
                  answer: `Polemisch ist er, ja. Aber als Nag Hammadi entdeckt wurde, zeigte sich, dass seine Darstellung vieler gnostischer Systeme in den Grundzügen zutraf – das Apokryphon des Johannes etwa entspricht weitgehend seinem Bericht über eine gnostische Gruppe. Ein Polemiker kann richtig berichten, auch wenn er die Gegner ablehnt.`,
                },
              ],
            },
          ],
        },
        {
          id: 'thomas-frueh',
          objection: `Das Thomasevangelium ist mindestens so alt wie die kanonischen Evangelien. Es zeigt ein Christentum ohne Kreuz und Auferstehung.`,
          objectionBy: 'Helmut Koester',
          answer: `Die Mehrheit der Forschung datiert das Thomasevangelium ins 2. Jahrhundert. Simon Gathercole hat gezeigt, dass es an mehreren Stellen von den synoptischen Evangelien, besonders von Lukas, abhängig ist. Ein Text, der die kanonischen Evangelien voraussetzt, kann nicht deren gleichaltrige Alternative sein.`,
        },
        {
          id: 'ebioniten-original',
          objection: `Die Ebioniten waren die Erben der Jerusalemer Urgemeinde unter Jakobus. Sie hielten Jesus für einen Menschen – das war das ursprüngliche Christentum.`,
          objectionBy: 'James Tabor',
          answer: `Die Jerusalemer Urgemeinde unter Jakobus bezeugte die Auferstehung – Paulus nennt Jakobus ausdrücklich unter den Zeugen (1 Kor 15,7) und stimmte mit ihm im Evangelium überein. Die Ebioniten des 2. Jahrhunderts sind eine spätere Entwicklung, über die wir vor allem aus Kirchenvätern wissen. Dass es judenchristliche Gemeinden mit Gesetzestreue gab, ist richtig; dass die Urgemeinde Jesus nicht als Herrn verehrte, zeigt kein Text – das aramäische „Maranatha" (1 Kor 16,22) stammt gerade aus dieser Gemeinde.`,
        },
      ],
    },
    {
      id: 'turner-veraltet',
      objection: `Turner schrieb 1954 – das ist hoffnungslos veraltet. Die Forschung ist weiter.`,
      objectionBy: 'Helmut Koester',
      answer: `Bauer schrieb 1934 – also noch früher. Und die Kritik ist weitergegangen: Thomas Robinson prüfte 1988 Kleinasien, Köstenberger und Kruger 2010 die Gesamtthese, Roberts und Pearson die Lage in Ägypten. Selbst Ehrman räumt ein, dass Bauers regionale Rekonstruktionen problematisch sind.`,
      followUps: [
        {
          id: 'grundthese-bleibt',
          objection: `Die Details mögen falsch sein, aber die Grundthese bleibt: Das frühe Christentum war vielfältig.`,
          objectionBy: 'Bart Ehrman',
          answer: `Diese „Grundthese" hat niemand bestritten – nicht einmal die Kirchenväter. Bauers eigentliche These war viel stärker: Die Orthodoxie sei vielerorts spät und in der Minderheit gewesen. Genau diese These ist gescheitert. Wer sich auf „es gab Vielfalt" zurückzieht, hat den strittigen Punkt aufgegeben.`,
          questionsBack: [`Welche Region kannst du nennen, in der nach heutigem Forschungsstand eine gnostische oder marcionitische Gruppe nachweislich älter ist als eine Gemeinde mit apostolischem Bekenntnis?`],
        },
        {
          id: 'sieger-quellen',
          objection: `Wir haben eben nur die Quellen der Sieger. Natürlich sieht es dann so aus, als hätten sie recht.`,
          objectionBy: 'Bart Ehrman',
          answer: `Das stimmt nicht mehr: Wir haben die Nag-Hammadi-Bibliothek, den Codex Tchacos mit dem Judasevangelium, den Berliner Codex mit dem Evangelium der Maria und Fragmente aus Oxyrhynchus. Die Verlierer sprechen also selbst zu uns – und ihre Texte sind jünger und setzen oft die kanonischen voraus.`,
        },
      ],
    },
    {
      id: 'sieg-durch-macht',
      objection: `Die Orthodoxie hat mit Konstantins Macht gesiegt. Ohne Staat wäre das Ergebnis ein anderes gewesen.`,
      objectionBy: 'Elaine Pagels',
      answer: `Bis 313 hatten die Proto-Orthodoxen keinerlei Staatsmacht; sie wurden selbst verfolgt – unter Decius und Diokletian starben gerade ihre Bischöfe, auch in Alexandria. Dennoch waren sie um 300 im ganzen Reich die große Mehrheit der Christen. Konstantin hat eine bereits bestehende Mehrheitskirche vorgefunden, nicht erschaffen.`,
      followUps: [
        {
          id: 'rom-netzwerk',
          objection: `Rom mit seinem Geld und seinen Verbindungen hat die anderen Gemeinden auf Linie gebracht.`,
          objectionBy: 'Walter Bauer',
          answer: `Rom war einflussreich, aber Alexandria, Antiochia und Kleinasien standen ihm oft selbstbewusst gegenüber – im Osterfeststreit etwa widersprachen die Kleinasiaten Rom offen. Irenäus' Glaubensregel führt nicht nach Rom, sondern über Polykarp zu Johannes in Kleinasien. Und Alexandria hat seine Theologie gerade nicht aus Rom bezogen.`,
        },
        {
          id: 'haeretiker-verfolgt',
          objection: `Später wurden Häretiker verbannt und ihre Bücher verbrannt. Das ist die Methode der Orthodoxie.`,
          objectionBy: 'Bart Ehrman',
          answer: `Ja, im 4. und 5. Jahrhundert wurden Häretiker mit kaiserlicher Gewalt verfolgt und Bücher vernichtet – das widerspricht dem Evangelium, und ich beschönige es nicht. Übrigens traf diese Staatsgewalt nach 451 auch die koptische Kirche selbst. Aber diese Gewalt kam lange nachdem die Orthodoxie zur Mehrheit geworden war; sie erklärt nicht, warum der orthodoxe Glaube der älteste ist.`,
        },
      ],
    },
    {
      id: 'warum-orthodoxie-wichtig',
      objection: `Warum besteht ihr überhaupt auf „Rechtgläubigkeit"? Vielfalt ist doch ein Wert. Jeder soll Jesus verstehen, wie er will.`,
      objectionBy: 'Elaine Pagels',
      answer: `Vielfalt in Sprache, Liturgie und Kultur ist ein Wert – die koptische, syrische, armenische und griechische Liturgie sind verschieden und doch ein Glaube. Aber wenn eine Gruppe lehrt, dass der Schöpfer ein böser Demiurg ist oder dass Christus nicht wirklich gelitten hat, geht es nicht um Stil, sondern um Wahrheit. Die Frage ist nicht, ob Vielfalt schön ist, sondern ob Christus wirklich Mensch wurde, starb und auferstand.`,
      followUps: [
        {
          id: 'kirchen-heute-gespalten',
          objection: `Wenn es die eine wahre Lehre gibt, warum sind die Kirchen heute dann so gespalten?`,
          objectionBy: 'Skeptischer Kritiker',
          answer: `Die Spaltungen sind real und schmerzlich, und Christen tragen Schuld daran. Aber die großen alten Kirchen teilen das Bekenntnis von Nizäa, die Dreieinigkeit, die Menschwerdung und die Auferstehung. Die koptische und die byzantinisch-orthodoxe Kirche haben 1989/1990 festgestellt, dass sie trotz 1500 Jahren Trennung denselben christologischen Glauben haben. Das spricht eher für einen gemeinsamen Ursprung als für ein Sammelsurium von Christentümern.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche gnostische Schrift ist nachweislich älter als 1 Kor 15,3–5 oder Phil 2,6–11?`,
    `Wie erklärst du, dass die frühesten christlichen Papyri aus Ägypten überwiegend biblische Texte sind?`,
    `Warum nennt Irenäus um 180 die Kirchen in Ägypten und Libyen als Träger desselben Glaubens, wenn Ägypten gnostisch war?`,
    `Mit welcher Staatsmacht hat sich die Orthodoxie vor 313 durchgesetzt?`,
    `Was genau bleibt von Bauers These, wenn man nur „es gab Vielfalt" behauptet?`,
  ],
  avoid: [
    `Bestreiten, dass es im frühen Christentum Vielfalt und Streit gab.`,
    `Die Markus-Gründung Alexandriens als historisch bewiesen ausgeben.`,
    `P52 als „sicher um 125 datiert" bezeichnen – die Datierung ist umstritten.`,
    `Die spätere staatliche Gewalt gegen Häretiker verschweigen.`,
  ],
  concessions: [
    `Das Christentum des 2. Jahrhunderts war vielfältig; die Begriffe „Orthodoxie" und „Häresie" wurden im Laufe der Zeit präziser gefasst.`,
    `Die frühen alexandrinischen Bischofslisten sind dünn bezeugt; gnostische Lehrer wie Basilides und Valentinus wirkten in Alexandria.`,
    `Im 4. und 5. Jahrhundert setzten Bischöfe und Kaiser Zwang gegen Häretiker ein und vernichteten Bücher.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'H. E. W. Turner', work: 'The Pattern of Christian Truth', year: '1954', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Andreas J. Köstenberger / Michael J. Kruger', work: 'The Heresy of Orthodoxy', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Colin H. Roberts', work: 'Manuscript, Society and Belief in Early Christian Egypt', year: '1979', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Thomas A. Robinson', work: 'The Bauer Thesis Examined', year: '1988', status: 'paraphrase' },
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Lost Christianities', year: '2003', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Walter Bauer', 'Orthodoxie und Häresie', 'Gnosis', 'Ägypten', 'Alexandria', 'Ehrman'],
  related: ['gnosis/gnostische-evangelien-wahres-christentum', 'neues-testament/kanon-von-konstantin', 'neues-testament/paulus-erfand-christentum', 'historischer-jesus/gottheit-jesu-spaet-erfunden', 'koptische-kirche/koptische-kirche-sekte'],
};

export default claim;
