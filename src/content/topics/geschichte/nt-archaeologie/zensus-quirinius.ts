import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'zensus-quirinius',
  title: `„Der Zensus des Quirinius (Lk 2) ist ein historischer Fehler."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, University of North Carolina', work: 'Jesus, Interrupted (2009); The New Testament. A Historical Introduction' },
    { name: 'Raymond E. Brown', role: 'Katholischer Neutestamentler (†1998)', work: 'The Birth of the Messiah (1977, erw. 1993), Anhang VII' },
    { name: 'Emil Schürer', role: 'Historiker des antiken Judentums (†1910)', work: 'Geschichte des jüdischen Volkes im Zeitalter Jesu Christi; engl. Neubearbeitung von G. Vermes/F. Millar (1973), Bd. 1, Exkurs zum Zensus' },
    { name: 'Géza Vermes', role: 'Jüdischer Religionshistoriker, Oxford (†2013)', work: 'The Nativity. History and Legend (2006)' },
  ],
  steelman: `Lukas schreibt, Jesus sei geboren worden, als Kaiser Augustus befahl, „alle Welt" zu erfassen, und zwar bei der ersten Erfassung, als Quirinius Statthalter von Syrien war (Lk 2,1–2). Doch Josephus berichtet präzise, dass Publius Sulpicius Quirinius erst im Jahr 6 n. Chr. Legat von Syrien wurde und – nach der Absetzung des Archelaos – in Judäa einen Zensus durchführte, der den Aufstand des Judas Galiläus auslöste. Herodes der Große aber war schon 4 v. Chr. gestorben, und Matthäus wie Lukas selbst (Lk 1,5) datieren die Geburt Jesu in seine Regierungszeit. Hinzu kommen weitere Probleme, die schon Emil Schürer auflistete: Ein reichsweiter Zensus unter Augustus ist nicht bezeugt; in einem Klientelkönigreich wie dem des Herodes hätten die Römer keinen eigenen Zensus durchgeführt; und dass jeder in die Stadt seiner Vorfahren reisen musste, widerspricht der römischen Praxis, nach Wohnort und Grundbesitz zu erfassen. Die naheliegende Erklärung: Lukas brauchte einen Grund, warum der Nazarener in Betlehem geboren wurde, und griff auf eine berühmte, aber zehn Jahre spätere Volkszählung zurück.`,
  biblical: {
    summary: `Lukas datiert sorgfältig und mehrfach: die Geburt des Johannes „zur Zeit des Herodes" (Lk 1,5), die Geburt Jesu bei der „ersten" Erfassung unter Quirinius (Lk 2,2), das Auftreten des Täufers im 15. Jahr des Tiberius (Lk 3,1) und Jesus „etwa dreißig Jahre" alt (Lk 3,23). In der Apostelgeschichte kennt er ausdrücklich den späteren, berühmten Zensus, bei dem Judas der Galiläer aufstand (Apg 5,37). Wer den Zensus von 6 n. Chr. kennt und den von Lk 2 ausdrücklich „den ersten" nennt, unterscheidet offenbar zwei Vorgänge. Das griechische *prōtē* kann zudem mit Genitiv „vor" bedeuten (vgl. Joh 1,15; 15,18) – eine mögliche, aber umstrittene Übersetzung.`,
    detail: `**Griechischer Text Lk 2,2:** *hautē apographē prōtē egeneto hēgemoneuontos tēs Syrias Kyrēniou* – wörtlich etwa „Diese Erfassung geschah als erste, als Quirinius Syrien leitete" oder – nach anderer Deutung – „Diese Erfassung geschah vor der (Erfassung), als Quirinius Syrien leitete".

**Parallelen für *prōtos* + Genitiv = „früher als":** Joh 1,15.30 (*prōtos mou ēn* – „er war vor mir"), Joh 15,18 (*eme prōton hymōn* – „mich vor euch"). Kritiker wenden ein, dass in Lk 2,2 ein Genitivus absolutus folgt, was diese Deutung grammatisch schwerfällig macht.

**Das Verb *hēgemoneuō*** bedeutet allgemein „leiten, führen", nicht zwingend das Amt des Legaten; Lukas nennt auch Pilatus „Hegemon".`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '2,1–2', quote: `Es begab sich aber zu der Zeit, daß ein Gebot von dem Kaiser Augustus ausging, daß alle Welt geschätzt würde. Und diese Schätzung war die allererste und geschah zur Zeit, da Cyrenius Landpfleger in Syrien war.`, original: `αὕτη ἀπογραφὴ πρώτη ἐγένετο ἡγεμονεύοντος τῆς Συρίας Κυρηνίου`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '5,37', quote: `Darnach stand auf Judas aus Galiläa in den Tagen der Schätzung und machte viel Volks abfällig ihm nach.`, translation: 'Luther 1912', status: 'verbatim', note: 'Lukas kennt den berühmten Zensus von 6 n. Chr.' },
      { kind: 'bibel', work: 'Lukas', ref: '1,5; 3,1; 3,23', quote: `Johannes' Geburt zur Zeit des Herodes; Auftreten des Täufers im 15. Jahr des Tiberius; Jesus etwa dreißig Jahre alt.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Johannes', ref: '1,15', quote: `Nach mir wird kommen, der vor mir gewesen ist; denn er war eher denn ich.`, original: `ὅτι πρῶτός μου ἦν`, translation: 'Luther 1912', status: 'verbatim', note: 'prōtos mit Genitiv im Sinn von „früher als".' },
    ],
  },
  opposingView: {
    summary: `Die Mehrheit der historisch-kritischen Forschung (Schürer, Brown, Vermes, Ehrman, Fitzmyer) hält Lk 2,2 für einen chronologischen Irrtum: Lukas habe die Geburt Jesu mit dem bekannten Zensus von 6 n. Chr. verbunden. Eine Minderheit – darunter Stanley Porter, John Rhoads, Wayne Brindle und ältere Forscher wie William Ramsay – hält Harmonisierungen für möglich: eine frühere Erfassung unter Herodes (etwa im Zusammenhang mit dem Treueid auf Augustus), die Übersetzung „vor", eine frühere Funktion des Quirinius im Osten oder einen Irrtum des Josephus. Ehrlich ist: Keine dieser Lösungen ist bewiesen; das Problem ist echt und offen.`,
    detail: `**Gesicherte Daten:**
- Quirinius war Konsul 12 v. Chr., führte vor der Zeitenwende Krieg gegen die Homonadenser in Kleinasien (Tacitus, Annalen 3,48) und wurde 6 n. Chr. Legat von Syrien. Statthalter von Syrien waren 9–6 v. Chr. Sentius Saturninus und 6–4 v. Chr. Quinctilius Varus.
- Josephus (Ant. 17,355; 18,1–2.26) verbindet den Zensus des Quirinius mit der Absetzung des Archelaos 6 n. Chr.
- Eine Inschrift des Q. Aemilius Secundus bezeugt einen Zensus der Stadt Apamea in Syrien auf Befehl des Quirinius.
- Der *Lapis Tiburtinus* (CIL XIV 3613) nennt einen namenlosen Beamten, der „zum zweiten Mal" (*iterum*) Syrien verwaltete; ob es Quirinius ist und worauf sich *iterum* bezieht, ist umstritten.
- Tertullian (Adversus Marcionem IV,19) verbindet den Zensus bei Jesu Geburt mit Sentius Saturninus (9–6 v. Chr.).
- Justin der Märtyrer (1. Apologie 34) verweist die Römer auf die Steuerlisten unter Quirinius.

**Provinzzensus und Rückkehrpflicht:** Ein ägyptisches Edikt des Präfekten Gaius Vibius Maximus von 104 n. Chr. (P. Lond. 904) verlangt, dass alle, die sich außerhalb ihres Bezirks aufhalten, für die Erfassung in ihre Heimat zurückkehren. Für Syrien bezeugt der Jurist Ulpian (Digesten 50,15,3), dass Frauen ab zwölf Jahren kopfsteuerpflichtig waren.

**Klientelkönigreiche:** Tacitus (Annalen 6,41) berichtet für das Jahr 36 n. Chr., dass das Volk der Kieten im Reich des Klientelkönigs Archelaos von Kappadokien gezwungen wurde, Vermögensangaben „nach unserer Art" zu machen – ein römisch geprägter Zensus in einem Klientelstaat.`,
    sources: [
      { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '18,1–2; 17,355', year: 'ca. 93/94', quote: `Quirinius, ein Mann senatorischen Ranges, kam nach Syrien, um Recht zu sprechen und die Vermögen zu schätzen; nach der Absetzung des Archelaos wurde Judäa der Provinz Syrien angegliedert.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Tacitus', work: 'Annalen', ref: '6,41', year: 'frühes 2. Jh.', quote: `Das Volk der Kieten, dem Kappadokier Archelaos untertan, wurde gezwungen, nach unserer Weise Vermögensangaben zu machen und Abgaben zu leisten, und zog sich deshalb in die Höhen des Taurus zurück.`, original: `Cietarum natio Cappadoci Archelao subiecta, quia nostrum in modum deferre census, pati tributa adigebatur, in iuga Tauri montis abscessit`, status: 'paraphrase', note: 'Römisch geprägter Zensus in einem Klientelkönigreich.' },
      { kind: 'sonstiges', work: 'Papyrus London 904 (Edikt des Präfekten Gaius Vibius Maximus)', year: '104 n. Chr.', quote: `Wegen der bevorstehenden Haushaltserfassung sollen alle, die sich aus irgendeinem Grund außerhalb ihrer Bezirke aufhalten, in ihre Heimat zurückkehren.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Raymond E. Brown', work: 'The Birth of the Messiah', ref: 'Anhang VII', year: '1977/1993', quote: `Die lukanische Angabe sei historisch nicht haltbar; Lukas habe die Geburt Jesu mit dem Zensus von 6 n. Chr. verknüpft.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'John H. Rhoads', work: 'Josephus Misdated the Census of Quirinius. Journal of the Evangelical Theological Society 54/1', ref: 'S. 65–87', year: '2011', quote: `Josephus' Bericht über Judas den Galiläer und den Zensus sei eine fehlerhafte Dublette früherer Ereignisse; nicht Lukas, sondern Josephus habe falsch datiert.`, status: 'paraphrase', url: 'https://www.galaxie.com/article/jets54-1-06', note: 'Minderheitsposition.' },
      { kind: 'fachliteratur', author: 'Wayne A. Brindle', work: 'The Census and Quirinius: Luke 2:2. Journal of the Evangelical Theological Society 27/1', year: '1984', quote: `Eine frühere Funktion des Quirinius sei möglich, die bessere Lösung sei aber die Übersetzung von prōtē als „vor".`, status: 'paraphrase', url: 'https://www.galaxie.com/article/jets27-1-04' },
    ],
  },
  quickAnswer: `Das ist ein echtes, schwieriges Problem – ich mache es nicht kleiner. Aber zwei Dinge muss man wissen: Lukas kennt den berühmten Zensus von 6 n. Chr. selbst (Apg 5,37) und nennt den bei Jesu Geburt ausdrücklich „den ersten" – er unterscheidet also. Und es gibt mehrere ernsthafte Lösungsvorschläge: eine Erfassung unter Herodes im Zusammenhang mit dem Treueid auf Augustus, die mögliche Übersetzung „vor der Zeit des Quirinius" oder ein Irrtum des Josephus. Ein einzelnes offenes Datierungsproblem macht einen Historiker nicht unglaubwürdig, der an Dutzenden anderen Stellen nachweislich genau ist.`,
  keyPoints: [
    `**Ehrlich anerkennen:** Quirinius wurde laut Josephus 6 n. Chr. Legat von Syrien; Herodes starb 4 v. Chr. Die Mehrheit der kritischen Forschung sieht einen Fehler.`,
    `**Lukas unterscheidet selbst:** Er kennt den Zensus von 6 n. Chr. (Apg 5,37) und nennt den von Lk 2 „den ersten" – ein bewusst abgrenzender Ausdruck.`,
    `**Lukas ist in sich stimmig:** Johannes geboren unter Herodes (Lk 1,5), Jesus ca. 30 Jahre im 15. Jahr des Tiberius (Lk 3,1.23) – das führt auf eine Geburt um 6–4 v. Chr.`,
    `**Mögliche Lösungen:** „vor" statt „erste" (Joh 1,15; 15,18); eine frühere Erfassung unter Herodes (Treueid auf Augustus, Ant. 17,42); eine frühere Funktion des Quirinius; ein Irrtum des Josephus (Rhoads 2011).`,
    `**Die Einzelvorwürfe sind schwächer als behauptet:** römisch geprägter Zensus im Klientelreich (Tacitus, Ann. 6,41), Rückkehrpflicht zur Erfassung (P. Lond. 904), Kopfsteuer für Frauen in Syrien (Ulpian).`,
    `**Lukas' Gesamtbilanz:** Lysanias (Lk 3,1), Politarchen in Thessalonich, Gallio in Achaia, Sergius Paulus auf Zypern – zahlreiche Details sind inschriftlich bestätigt.`,
  ],
  argument: {
    name: 'Abwägung: Fehler oder ungelöstes Problem?',
    summary: `Ein historisch ehrliches Urteil über Lk 2,2`,
    premises: [
      { text: `P1: Lukas kennt den Zensus von 6 n. Chr. und datiert die Geburt Jesu zugleich in die Zeit des Herodes.`, support: `Apg 5,37; Lk 1,5; 3,1.23. Ein Autor, der beides weiß, wird den Widerspruch kaum übersehen haben – er meint wahrscheinlich ein früheres Ereignis.` },
      { text: `P2: Für eine frühere Erfassung gibt es plausible, wenn auch nicht bewiesene Rahmenbedingungen.`, support: `Provinzzensus unter Augustus; Herodes' geschwächte Stellung ab ca. 8 v. Chr. (Ant. 16,290); Treueid auf den Kaiser (Ant. 17,42); römisch geprägter Zensus im Klientelreich (Tacitus, Ann. 6,41); Tertullians Notiz über Saturninus.` },
      { text: `P3: Lukas ist an zahlreichen überprüfbaren Stellen präzise.`, support: `Inschriftlich bestätigte Titel und Personen (Politarchen, Gallio, Sergius Paulus, Lysanias).` },
    ],
    conclusion: `Lk 2,2 ist ein offenes Problem mit mehreren möglichen Lösungen, aber kein Beweis dafür, dass Lukas unzuverlässig ist oder die Geburtsgeschichte erfunden hat.`,
  },
  voices: [
    {
      person: 'lukas',
      role: 'als Historiker, der seine Daten synchronisiert',
      text: `Lukas ist der einzige Evangelist, der die Heilsgeschichte ausdrücklich mit der Weltgeschichte verknüpft: Augustus, Quirinius, Tiberius, Pilatus, Herodes Antipas, Philippus, Lysanias, Hannas und Kajaphas (Lk 2,1–2; 3,1–2). Wer so viele überprüfbare Namen nennt, setzt sich bewusst der Kontrolle seiner Leser aus. Dass er den berühmten Zensus von 6 n. Chr. kennt (Apg 5,37) und den bei Jesu Geburt eigens als „ersten" kennzeichnet, spricht dafür, dass er zwei Vorgänge unterscheiden wollte.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '3,1–2', quote: `Im fünfzehnten Jahr des Kaisertums des Kaisers Tiberius, da Pontius Pilatus Landpfleger in Judäa war …`, status: 'paraphrase' },
      ],
    },
    {
      person: 'stanley-porter',
      role: 'als Neutestamentler und Spezialist für griechische Sprache und Papyri',
      text: `Porter hat die Gründe für den lukanischen Zensus im Licht der antiken Verwaltungspraxis untersucht. Er argumentiert, dass Lukas' Angaben zu bekannten Formen römischer Erfassung passen können: Haushaltserfassungen in den Provinzen, die Pflicht, sich am Ort von Herkunft oder Besitz registrieren zu lassen, und die Einbindung von Klientelherrschern in römische Steuerpolitik. Er hält es für methodisch unzulässig, Lukas allein deshalb einen Fehler zu unterstellen, weil uns eine zweite Quelle fehlt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stanley E. Porter', work: 'The Reasons for the Lukan Census, in: A. Christophersen u. a. (Hg.), Paul, Luke and the Graeco-Roman World', year: '2002', quote: `Die lukanische Darstellung lasse sich mit bekannten römischen Verwaltungspraktiken vereinbaren.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'raymond-brown',
      role: 'als kritischer, gläubiger Exeget (Gegenstimme mit Gewicht)',
      text: `Brown, katholischer Priester und einer der bedeutendsten Exegeten des 20. Jahrhunderts, hielt die Harmonisierungsversuche für nicht überzeugend und nahm einen Irrtum des Lukas an. Für ihn hing der Glaube an die Menschwerdung nicht an der Lösung dieser chronologischen Frage. Seine Stimme ist hier wichtig, weil sie zeigt: Man kann das Problem ernst nehmen und trotzdem gläubiger Christ bleiben – und umgekehrt muss niemand, der eine Harmonisierung für möglich hält, sich als unwissenschaftlich beschimpfen lassen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Birth of the Messiah', ref: 'Anhang VII', year: '1993', quote: `Ausführliche Prüfung aller Lösungsvorschläge mit dem Ergebnis, dass keiner überzeuge.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'blomberg',
      role: 'als Historiker der Evangelien',
      text: `Blomberg rät zu einem ehrlichen Mittelweg: Das Quirinius-Problem gehört zu den schwierigsten historischen Fragen der Evangelien, aber es gibt plausible Lösungswege, und die Gesamtzuverlässigkeit des Lukas ist durch viele bestätigte Details gut begründet. Historiker behandeln Josephus, Tacitus oder Sueton mit derselben wohlwollenden Vorsicht, wenn ihre Angaben schwer zu harmonisieren sind.`,
      sources: [
        { kind: 'fachliteratur', author: 'Craig L. Blomberg', work: 'The Historical Reliability of the Gospels', year: '2. Aufl. 2007', quote: `Das Quirinius-Problem sei ernst, aber lösbar denkbar; es erschüttere die Gesamtzuverlässigkeit des Lukas nicht.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'quirinius-6-n-chr',
      objection: `Josephus sagt klar: Quirinius wurde 6 n. Chr. Statthalter von Syrien. Herodes starb 4 v. Chr. Lukas irrt um zehn Jahre – Punkt.`,
      objectionBy: 'Bart Ehrman',
      answer: `Das ist ein echtes Problem, und ich behaupte nicht, es sei endgültig gelöst. Aber Lukas kennt den Zensus von 6 n. Chr. selbst (Apg 5,37) und datiert die Geburt Jesu ausdrücklich in die Zeit des Herodes (Lk 1,5). Ein Autor, der beides weiß, nennt die Erfassung bei Jesu Geburt nicht zufällig „die erste". Es gibt mehrere ernsthafte Lösungsvorschläge – das ist ein offenes Problem, kein bewiesener Fehler.`,
      followUps: [
        {
          id: 'prote-vor-gezwungen',
          objection: `Die Übersetzung „vor Quirinius" ist ein verzweifelter Trick von Apologeten. Kein normaler Grieche hätte das so verstanden.`,
          objectionBy: 'Raymond E. Brown',
          answer: `Verzweifelt ist sie nicht: *Prōtos* mit Genitiv heißt im Neuen Testament mehrfach „früher als" – „er war vor mir" (Joh 1,15), „mich vor euch" (Joh 15,18). Ehrlich ist aber auch: In Lk 2,2 folgt ein Genitivus absolutus, was diese Deutung schwerfälliger macht, und viele Philologen lehnen sie ab. Ich nenne sie als mögliche Lesart, nicht als Beweis.`,
          followUps: [
            {
              id: 'warum-quirinius-nennen',
              objection: `Und warum sollte Lukas eine Volkszählung ausgerechnet über einen Mann datieren, der damals noch gar nicht Statthalter war?`,
              objectionBy: 'Raymond E. Brown',
              answer: `Weil jeder seiner Leser den Zensus des Quirinius kannte – er hatte den Aufstand des Judas ausgelöst und war ein Einschnitt in der jüdischen Geschichte. Wer sagt „das war die erste Erfassung, noch vor der (berühmten) unter Quirinius", grenzt ab, so wie wir sagen „das war noch vor der Wende". Ob Lukas das gemeint hat, bleibt offen – aber es ist eine sinnvolle Lesart.`,
              followUps: [
                {
                  id: 'theudas-fehler',
                  objection: `Lukas verwechselt doch auch in Apg 5,36–37 die Reihenfolge: Er lässt Gamaliel um 35 n. Chr. Theudas erwähnen, den Josephus erst um 45 n. Chr. ansetzt. Lukas hat Josephus einfach schlecht gelesen.`,
                  objectionBy: 'Steve Mason / Richard Carrier',
                  answer: `Das Theudas-Problem ist real, aber es gibt zwei Möglichkeiten: Theudas war ein häufiger Name, und Josephus berichtet von zahlreichen Aufrührern nach Herodes' Tod, die er nicht alle namentlich nennt – Gamaliel könnte einen früheren Theudas meinen. Oder Lukas irrt hier. Dass Lukas Josephus benutzt hat, ist eine Minderheitsthese; die Unterschiede sprechen eher dagegen, denn wer Josephus abschreibt, übernimmt seine Reihenfolge.`,
                  followUps: [
                    {
                      id: 'zwei-fehler-muster',
                      objection: `Zwei Probleme bei Lukas, beide mit Josephus – das ist ein Muster. Lukas ist als Historiker eben unzuverlässig.`,
                      objectionBy: 'Richard Carrier',
                      answer: `Zwei schwierige Stellen machen noch kein Muster, wenn ihnen Dutzende bestätigter Details gegenüberstehen: der Titel „Politarchen" in Thessalonich, Gallio als Prokonsul von Achaia (Delphi-Inschrift), Sergius Paulus auf Zypern, Lysanias als Tetrarch von Abilene. Auch Josephus widerspricht sich an mehreren Stellen selbst, und niemand nennt ihn deshalb wertlos. Für jeden antiken Historiker gilt: Gesamtbilanz statt Einzelstelle.`,
                      questionsBack: [`Würdest du Josephus nach denselben Maßstäben als unzuverlässig verwerfen, wo er sich selbst widerspricht?`],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'lapis-tiburtinus',
          objection: `Der Lapis Tiburtinus beweist gar nichts – der Name fehlt, und „iterum" kann alles Mögliche bedeuten.`,
          objectionBy: 'Raymond E. Brown',
          answer: `Einverstanden – er beweist nichts, und ich stütze mich nicht darauf. Sicher ist nur, dass Quirinius vor der Zeitenwende im Osten tätig war: Er führte Krieg gegen die Homonadenser in Kleinasien (Tacitus, Annalen 3,48). Eine frühere Sonderfunktion in der Region ist möglich, aber nicht belegt. Ich nenne das eine Möglichkeit, keine Lösung.`,
          followUps: [
            {
              id: 'tertullian-saturninus',
              objection: `Sogar der Kirchenvater Tertullian sagt, der Zensus bei Jesu Geburt sei unter Sentius Saturninus gewesen. Damit widerspricht ein Christ dem Lukas!`,
              objectionBy: 'Kritiker in der Debatte',
              answer: `Interessanterweise stützt Tertullian eher die Frühdatierung: Er setzt die Erfassung in die Amtszeit des Saturninus (9–6 v. Chr.), also in die Zeit des Herodes – und behauptet, die Unterlagen lägen in römischen Archiven. Manche vermuten, dass die Erfassung unter Saturninus begann und mit Quirinius in Verbindung stand. Das ist spekulativ; aber ein Beleg für Lukas' „Erfindung" ist Tertullian gewiss nicht.`,
              sources: [
                { kind: 'kirchenvater', author: 'Tertullian', work: 'Adversus Marcionem', ref: 'IV,19', year: 'ca. 207/208', quote: `Es stehe fest, dass unter Augustus in Judäa durch Sentius Saturninus Erfassungen durchgeführt wurden, bei denen man seine Abstammung hätte erfragen können.`, status: 'paraphrase', note: 'Tertullian ist Apologet, keine Lehrautorität der koptischen Kirche.' },
              ],
            },
          ],
        },
        {
          id: 'rhoads-verzweifelt',
          objection: `Die These, Josephus habe sich geirrt und nicht Lukas, ist reine Apologetik. Josephus ist der Fachhistoriker.`,
          objectionBy: 'Bart Ehrman',
          answer: `Es ist eine Minderheitsthese, ja. Aber Josephus ist nicht unfehlbar: Er gibt für dieselben Ereignisse teils unterschiedliche Zahlen und Abfolgen und schrieb rund 90 Jahre nach Herodes. John Rhoads hat in einer Fachzeitschrift argumentiert, dass Josephus Ereignisse aus Herodes' Zeit doppelt erzählt. Man muss dem nicht folgen – aber man darf nicht so tun, als sei Josephus automatisch im Recht, sobald er von Lukas abweicht.`,
        },
      ],
    },
    {
      id: 'kein-reichszensus',
      objection: `Einen reichsweiten Zensus unter Augustus, bei dem „alle Welt" erfasst wurde, hat es nie gegeben. Davon wüssten wir.`,
      objectionBy: 'Emil Schürer',
      answer: `Lukas muss keine gleichzeitige Zählung im ganzen Reich meinen, sondern kann die Politik des Augustus zusammenfassen: Dieser ordnete in vielen Provinzen Erfassungen an – in Gallien, Ägypten, Syrien (Apamea, auf Befehl des Quirinius). „Alle Welt" ist eine bei Lukas auch sonst übliche zusammenfassende Redeweise (vgl. Apg 11,28). Gemeint ist ein Programm, kein einzelner Stichtag.`,
      followUps: [
        {
          id: 'res-gestae-buerger',
          objection: `Die Zensus, die Augustus in seinem Tatenbericht nennt, betrafen nur römische Bürger – Joseph war keiner.`,
          objectionBy: 'Raymond E. Brown',
          answer: `Richtig, die drei Bürgerzensus im Tatenbericht (28 und 8 v. Chr., 14 n. Chr.) betrafen römische Bürger. Daneben gab es aber Provinzerfassungen für die Steuer, die nichts mit dem Bürgerrecht zu tun hatten – in Ägypten regelmäßig, in Gallien und Syrien nachweislich. Lukas spricht von einer solchen Erfassung (*apographē*), nicht vom Bürgerzensus.`,
        },
        {
          id: 'klientelreich',
          objection: `Herodes war ein verbündeter König. In seinem Reich hätten die Römer keinen Zensus durchgeführt.`,
          objectionBy: 'Emil Schürer',
          answer: `Das ist nicht so sicher, wie es klingt. Tacitus berichtet, dass im Reich des Klientelkönigs Archelaos von Kappadokien Vermögensangaben „nach unserer Art" erzwungen wurden (Annalen 6,41). Herodes' Stellung war nach einem Konflikt mit Augustus ab etwa 8 v. Chr. geschwächt – Augustus ließ ihn wissen, er werde ihn künftig als Untertan behandeln (Ant. 16,290). Und Josephus berichtet von einem Treueid des ganzen Volkes auf den Kaiser und den König (Ant. 17,42).`,
          followUps: [
            {
              id: 'josephus-haette-berichtet',
              objection: `Josephus berichtet ausführlich über Herodes. Eine römische Erfassung unter ihm hätte er erwähnt.`,
              objectionBy: 'Bart Ehrman',
              answer: `Josephus berichtet vom Treueid, den rund 6000 Pharisäer verweigerten (Ant. 17,42) – ein Vorgang, bei dem das Volk namentlich erfasst werden musste. Ob dieser Eid mit einer Erfassung verbunden war, ist eine erwägenswerte Vermutung, kein Beweis. Und Josephus ist selektiv: Er schweigt über vieles, was wir aus anderen Quellen kennen. Aus seinem Schweigen allein lässt sich kein Fehler des Lukas ableiten.`,
              followUps: [
                {
                  id: 'orosius-spaet',
                  objection: `Die Verbindung von Eid und Zensus findet man doch nur bei Orosius im 5. Jahrhundert. Das ist viel zu spät.`,
                  objectionBy: 'Kritiker in der Debatte',
                  answer: `Einverstanden, Orosius ist spät, und ich baue nicht auf ihn. Das Argument ruht auf den frühen Quellen: Josephus bezeugt den Eid, Tacitus den römischen Zensus im Klientelreich, Tertullian eine Erfassung unter Saturninus. Daraus ergibt sich ein plausibler Rahmen – nicht mehr, aber auch nicht weniger.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'heimatort-absurd',
      objection: `Dass jeder in die Stadt seiner Vorfahren reisen musste, ist absurd. Die Römer erfassten Menschen dort, wo sie wohnten und Land besaßen. Das ganze Reich wäre auf Wanderschaft gewesen!`,
      objectionBy: 'Bart Ehrman',
      answer: `Lukas sagt nicht, dass das ganze Reich wanderte, sondern dass Joseph „in seine Stadt" ging, weil er aus dem Haus Davids war (Lk 2,3–4). Ein ägyptisches Edikt von 104 n. Chr. verlangt ausdrücklich, dass Menschen, die sich außerhalb ihres Bezirks aufhalten, zur Erfassung in ihre Heimat zurückkehren. Hatte Joseph in Betlehem Familienbesitz oder Herkunftsrechte, war seine Reise durchaus plausibel.`,
      followUps: [
        {
          id: 'maria-mitreisen',
          objection: `Und warum musste die hochschwangere Maria mit? Frauen mussten sich nicht registrieren lassen.`,
          objectionBy: 'Raymond E. Brown',
          answer: `Für Syrien bezeugt der Jurist Ulpian, dass auch Frauen ab zwölf Jahren kopfsteuerpflichtig waren (Digesten 50,15,3); in ägyptischen Erfassungen erscheinen Frauen ebenfalls. Dazu kommen persönliche Gründe: Eine Verlobte, deren Schwangerschaft im Dorf Gerede auslöste, ließ man nicht allein zurück. Lukas muss nicht jeden Grund nennen.`,
          followUps: [
            {
              id: 'betlehem-erfunden',
              objection: `Die Reise ist eine literarische Konstruktion: Lukas brauchte Betlehem wegen Micha 5, und Jesus kam bekanntlich aus Nazareth.`,
              objectionBy: 'Géza Vermes',
              answer: `Dann muss man erklären, warum Matthäus unabhängig von Lukas zum selben Ergebnis kommt – Geburt in Betlehem, Aufwachsen in Nazareth –, aber auf einem ganz anderen Weg: Bei ihm lebt die Familie zuerst in Betlehem und zieht erst später nach Nazareth. Zwei unabhängige Traditionen mit verschiedenen Erzählwegen stimmen im Kern überein. Hätte Lukas frei erfunden, wäre ein kompliziertes Zensusmotiv das ungeschickteste Mittel gewesen.`,
              followUps: [
                {
                  id: 'mt-lk-widerspruch',
                  objection: `Matthäus und Lukas widersprechen sich doch völlig: Bei Matthäus Flucht nach Ägypten, bei Lukas Tempelbesuch und ruhige Rückkehr nach Nazareth.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Sie wählen verschieden aus, aber sie schließen sich nicht aus. Lukas rafft: „als sie alles vollendet hatten" (Lk 2,39) – er erzählt die Darstellung im Tempel nach 40 Tagen und springt dann nach Nazareth. Der Besuch der Weisen und die Flucht nach Ägypten können dazwischen oder danach liegen. Die koptische Kirche ehrt die Flucht der Heiligen Familie nach Ägypten besonders – sie steht bei Matthäus, und Lukas widerspricht ihr nicht.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'lukas-generell-unzuverlaessig',
      objection: `Dieser Fehler zeigt, dass Lukas kein ernstzunehmender Historiker ist. Warum sollte ich ihm sonst irgendetwas glauben?`,
      objectionBy: 'Richard Carrier',
      answer: `Weil man Historiker nach ihrer Gesamtbilanz beurteilt. Lukas nennt Lysanias als Tetrarch von Abilene (Lk 3,1) – lange als Fehler verspottet, bis eine Inschrift einen Tetrarchen Lysanias zur Zeit des Tiberius bestätigte. Er kennt den seltenen Titel „Politarchen" in Thessalonich, Gallio als Prokonsul von Achaia und Sergius Paulus auf Zypern. Und selbst wenn er bei Quirinius irrte: Die Geburt unter Herodes bezeugt auch Matthäus unabhängig.`,
      followUps: [
        {
          id: 'hemer-apologet',
          objection: `Diese Listen stammen von Apologeten wie Ramsay und Hemer. Titel richtig zu nennen ist keine Kunst.`,
          objectionBy: 'Richard Carrier',
          answer: `Titel richtig zu nennen war in der Antike gerade schwer: Sie wechselten mit dem Status der Provinzen und waren lokal verschieden. „Politarch" war vor den Inschriftenfunden literarisch kaum bekannt. William Ramsay begann übrigens als Skeptiker der Tübinger Schule und änderte seine Meinung über Lukas durch eigene Feldforschung in Kleinasien. Die Daten sind an Inschriften überprüfbar – unabhängig davon, wer sie gesammelt hat.`,
        },
      ],
    },
    {
      id: 'inspiration-faellt',
      objection: `Wenn die Bibel von Gott inspiriert ist, darf sie keinen einzigen Fehler enthalten. Ein Fehler – und das ganze Gebäude stürzt ein.`,
      objectionBy: 'Bart Ehrman',
      answer: `Die orthodoxe Kirche glaubt, dass die Schrift von Gott eingegeben ist und in der Kirche gelesen wird. Das bedeutet nicht, dass wir jede historische Einzelfrage heute lösen können – und wir halten offene Fragen aus, statt sie zu leugnen. Unser Glaube steht nicht auf der Lösung des Quirinius-Problems, sondern auf Christus, dem Gekreuzigten und Auferstandenen (1 Kor 15,14). Das „Alles-oder-nichts" ist eine Denkweise des Fundamentalismus – Ehrman hat sie nur mit umgekehrtem Vorzeichen behalten.`,
      followUps: [
        {
          id: 'immunisierung',
          objection: `Das ist Immunisierung: Ihr erklärt jedes Problem für „offen", damit euer Glaube nie widerlegt werden kann.`,
          objectionBy: 'Bart Ehrman',
          answer: `Nein – ich nenne dir, was den Glauben widerlegen würde: Wenn Christus nicht auferstanden ist, ist unser Glaube vergeblich, sagt Paulus selbst. Eine chronologische Einzelangabe, für die es mehrere plausible Lösungen gibt, ist dagegen etwas anderes als eine zentrale Tatsache. Genau so behandeln Historiker auch Josephus oder Tacitus: Schwierige Stellen werden offen diskutiert, ohne das ganze Werk zu verwerfen.`,
          sources: [
            { kind: 'bibel', work: '1. Korinther', ref: '15,14', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Lukas den Zensus von 6 n. Chr. kannte (Apg 5,37) und die Geburt unter Herodes ansetzt (Lk 1,5) – warum sollte er beides nicht auseinanderhalten?`,
    `Warum nennt er die Erfassung bei Jesu Geburt ausdrücklich „die erste"?`,
    `Wie erklärst du, dass Matthäus unabhängig zum selben Ergebnis kommt: Geburt in Betlehem unter Herodes, Aufwachsen in Nazareth?`,
    `Würdest du einen antiken Historiker mit Dutzenden bestätigten Details wegen einer schwierigen Stelle verwerfen?`,
  ],
  avoid: [
    `Behaupten, das Problem sei „längst gelöst" – das stimmt nicht und kostet Glaubwürdigkeit.`,
    `Sich auf den Lapis Tiburtinus als „Beweis" für eine frühere Statthalterschaft des Quirinius stützen.`,
    `Die Übersetzung „vor" als einzig richtige ausgeben – sie ist möglich, aber umstritten.`,
    `Die Frage zur Glaubensfrage machen: Der Glaube an Christus steht und fällt nicht mit Quirinius.`,
  ],
  concessions: [
    `Nach Josephus wurde Quirinius erst 6 n. Chr. Legat von Syrien; eine frühere Statthalterschaft ist nicht belegt.`,
    `Die Mehrheit der historisch-kritischen Forschung sieht in Lk 2,2 einen Irrtum; alle Harmonisierungen sind Hypothesen.`,
    `Ein reichsweit gleichzeitiger Zensus unter Augustus ist nicht bezeugt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Birth of the Messiah (Anhang VII)', year: '1993', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John H. Rhoads', work: 'Josephus Misdated the Census of Quirinius (JETS 54/1)', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Stanley E. Porter', work: 'The Reasons for the Lukan Census', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Colin J. Hemer', work: 'The Book of Acts in the Setting of Hellenistic History', year: '1989', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Quirinius', 'Zensus', 'Lukas', 'Josephus', 'Herodes', 'Weihnachtsgeschichte'],
  related: ['neues-testament/evangelien-widersprechen-sich', 'nt-archaeologie/kindermord-erfunden', 'neues-testament/evangelien-spaet-anonym', 'historischer-jesus/jesus-hat-nie-existiert'],
};

export default claim;
