import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nur-kopien-von-kopien',
  title: `„Wir haben nur Kopien von Kopien von Kopien – der Originaltext des Neuen Testaments ist verloren."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler und Textkritiker, UNC', work: 'Misquoting Jesus (2005); The Orthodox Corruption of Scripture (1993)' },
    { name: 'Ahmed Deedat', role: 'Muslimischer Apologet', work: 'Is the Bible God’s Word? (1980)' },
    { name: 'Shabir Ally', role: 'Muslimischer Apologet', work: 'Debatten zur Textüberlieferung der Bibel' },
    { name: 'Kipp Davis', role: 'Handschriftenforscher (Qumran)', work: 'Kritik an apologetischen Handschriftenargumenten' },
  ],
  steelman: `Wir besitzen kein einziges Original eines neutestamentlichen Buches – nicht einmal Kopien der Originale, sondern Kopien von Kopien, meist Jahrhunderte später entstanden. Diese Abschriften unterscheiden sich an Hunderttausenden Stellen; es gibt mehr Textvarianten als Wörter im Neuen Testament. Schreiber machten nicht nur Fehler, sie veränderten den Text auch absichtlich, um theologische Gegner zu widerlegen. Ganze Abschnitte wurden hinzugefügt: der Schluss des Markusevangeliums (16,9–20), die Geschichte von der Ehebrecherin (Joh 7,53–8,11), der trinitarische Zusatz in 1 Joh 5,7. Aus den ersten hundert Jahren, in denen die meisten Änderungen geschehen konnten, haben wir kaum etwas. Wie kann man behaupten, Gottes Wort sei inspiriert, wenn man nicht einmal weiß, was ursprünglich darin stand? – So etwa Bart Ehrman in „Misquoting Jesus".`,
  biblical: {
    summary: `Die Bibel selbst rechnet mit Abschriften: Schon im AT werden Bücher kopiert (Dtn 17,18; Spr 25,1), und die Gemeinden tauschten die Paulusbriefe aus (Kol 4,16). Jesus verheißt nicht die Erhaltung von Originalhandschriften, sondern seiner Worte: „Himmel und Erde werden vergehen; aber meine Worte werden nicht vergehen" (Mk 13,31). Die Kirche hat diesen Auftrag durch sorgfältige Überlieferung in vielen Sprachen erfüllt – griechisch, lateinisch, syrisch, koptisch, armenisch, äthiopisch.`,
    detail: `**Textkritik ist keine moderne Bedrohung, sondern eine alte kirchliche Tätigkeit.** Origenes verglich in Alexandrien und Caesarea Handschriften und vermerkte Abweichungen; Hieronymus revidierte die lateinische Bibel nach griechischen Handschriften. Moderne Bibelausgaben machen Varianten transparent – die großen kritischen Ausgaben (Nestle-Aland, UBS, Tyndale House Greek New Testament) verzeichnen sie offen in Fußnoten.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '13,31', quote: `Himmel und Erde werden vergehen; meine Worte aber werden nicht vergehen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '4,16', quote: `Und wenn der Brief bei euch gelesen ist, so schaffet, daß er auch in der Gemeinde zu Laodizea gelesen werde, und daß ihr den von Laodizea lest.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die koptisch-orthodoxe Kirche ist die Überlieferung der Schrift ein Werk der ganzen Kirche unter der Führung des Heiligen Geistes. Ägypten spielt dabei eine herausragende Rolle: Die meisten frühen Papyri des NT stammen aus Ägypten; Alexandrien war ein Zentrum sorgfältiger Textpflege; und die **koptischen Übersetzungen** – zuerst sahidisch (ab etwa dem 3. Jh.), dann bohairisch (das spätere Liturgiekoptisch) und weitere Dialekte – gehören zu den ältesten Zeugen des NT-Textes überhaupt. Codex Alexandrinus (5. Jh.) kam über den alexandrinischen Patriarchen Kyrillos Loukaris nach England.`,
    detail: `**Koptische Zeugen:** Papyrus Bodmer III (bohairisches Johannesevangelium, 4. Jh.) zeigt, dass schon früh Übersetzungen in die Sprache des Volkes angefertigt wurden. Die sahidische Überlieferung ist textlich eng mit der alexandrinischen Texttradition verwandt. Für die Textkritik sind koptische Handschriften unabhängige Zeugen: Sie wurden nicht aus späten griechischen Handschriften übersetzt, sondern bezeugen den Text, wie er im 3./4. Jahrhundert in Ägypten gelesen wurde.

**Kirchliche Haltung:** Die Kirche glaubt nicht, dass Gott jedes Abschreiberversehen verhindert hat, sondern dass er sein Wort in der Kirche bewahrt hat – sodass der Glaube, wie er überliefert wurde, im Text der Schrift erkennbar bleibt.`,
    sources: [
      { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'The Early Versions of the New Testament: Their Origin, Transmission, and Limitations', year: '1977', quote: `Metzger beschreibt die koptischen Übersetzungen (sahidisch, bohairisch, achmimisch, mittelägyptisch u. a.) als wichtige frühe Textzeugen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Matthäuskommentar', ref: '15,14', year: 'ca. 245', quote: `Origenes beklagt große Unterschiede zwischen den Abschriften, teils durch Nachlässigkeit der Schreiber, teils durch eigenmächtige Korrekturen, und vergleicht deshalb Handschriften.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Fachlich ist unbestritten: Die Originale (Autographen) sind verloren; die Handschriften weichen voneinander ab. Zugleich ist das NT der mit Abstand am besten bezeugte Text der Antike. Die Liste des Instituts für Neutestamentliche Textforschung (Münster) verzeichnete 2019 rund 5.900 griechische Handschriftennummern (Papyri, Majuskeln, Minuskeln, Lektionare), seither kommen weitere hinzu; dazu über 10.000 lateinische Handschriften und zahlreiche syrische, koptische, armenische und äthiopische. Peter Gurry schätzte 2016 die Zahl der Varianten (ohne bloße Schreibvarianten) auf rund 500.000 – bei etwa 138.000 Wörtern im griechischen NT.`,
    detail: `**Was die Zahlen bedeuten:** Jede Abweichung in jeder Handschrift zählt als Variante; je mehr Handschriften, desto mehr Varianten – ein Zeichen reicher Überlieferung, nicht von Unzuverlässigkeit. Daniel Wallace teilt die Varianten ein in: (1) Rechtschreibung und Unsinnslesarten – die große Mehrheit; (2) Wortfolge, Synonyme, Artikel – ohne Bedeutungsänderung; (3) bedeutungsrelevant, aber nicht plausibel (nur in einer späten Handschrift); (4) bedeutungsrelevant **und** plausibel – ein sehr kleiner Bruchteil (deutlich unter 1 %). Keine dieser Varianten berührt eine zentrale christliche Lehre.

**Ehrmans eigenes Zugeständnis:** Im Interview im Anhang der Taschenbuchausgabe von „Misquoting Jesus" sagt Ehrman, die Position, die er in dem Buch vertrete, stehe nicht im Gegensatz zu Metzgers Position, dass die wesentlichen christlichen Glaubensüberzeugungen von den Textvarianten der neutestamentlichen Handschriftenüberlieferung nicht berührt werden (englischer Wortlaut in den Quellen).

**Ehrlich zu den frühesten Handschriften:** P52 (John Rylands Papyrus, Joh 18) wurde früher meist auf um 125 datiert; Brent Nongbri (2005) zeigte, dass paläographische Datierungen breiter streuen (bis ins späte 2./frühe 3. Jh.). Ähnliches gilt für andere frühe Papyri. Man sollte deshalb Datierungsspannen nennen, nicht Einzeljahre.`,
    sources: [
      { kind: 'fachliteratur', author: 'Peter J. Gurry', work: 'The Number of Variants in the Greek New Testament: A Proposed Estimate. New Testament Studies 62', year: '2016', quote: `Gurry schätzt die Zahl der Varianten ohne Schreibvarianten auf etwa 500.000.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Institut für Neutestamentliche Textforschung (Münster)', work: 'Kurzgefasste Liste der griechischen Handschriften des Neuen Testaments (online fortgeführt)', year: 'Stand 2019 ff.', quote: `Rund 5.900 registrierte griechische Handschriftennummern (Papyri, Majuskeln, Minuskeln, Lektionare); die Zahl wächst durch Neufunde.`, status: 'paraphrase', note: 'Die Liste enthält auch zusammengelegte und verlorene Nummern; genaue Zahl beim INTF prüfen.' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Misquoting Jesus (Taschenbuchausgabe, HarperSanFrancisco, Interview im Anhang)', ref: 'S. 252–253', year: '2005 (Taschenbuch mit Interview)', quote: `Die Position, die ich in „Misquoting Jesus" vertrete, steht eigentlich nicht im Gegensatz zu Prof. Metzgers Position, dass die wesentlichen christlichen Glaubensüberzeugungen von Textvarianten in der Handschriftenüberlieferung des Neuen Testaments nicht berührt werden.`, original: `The position I argue for in Misquoting Jesus does not actually stand at odds with Prof. Metzger's position that the essential Christian beliefs are not affected by textual variants in the manuscript tradition of the New Testament.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Wortlaut in zahlreichen Rezensionen und Nachschlagewerken identisch zitiert; Seitenangabe nach Sekundärquellen (WebSearch-Prüfung 2026). Ehrman betont zugleich, dass einzelne Varianten für die Auslegung bedeutsam sind.' },
      { kind: 'fachliteratur', author: 'Brent Nongbri', work: 'The Use and Abuse of P52: Papyrological Pitfalls in the Dating of the Fourth Gospel. Harvard Theological Review 98', year: '2005', quote: `Nongbri zeigt, dass P52 paläographisch nicht auf ein enges Datum um 125 festgelegt werden kann.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Elijah Hixson / Peter J. Gurry (Hg.)', work: 'Myths and Mistakes in New Testament Textual Criticism', year: '2019', quote: `Evangelikale Textkritiker korrigieren überzogene apologetische Behauptungen über Handschriftenzahlen, Datierungen und Väterzitate.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ja, die Originale sind verloren – wie bei jedem antiken Buch. Aber vom Neuen Testament haben wir rund 5.900 griechische Handschriften, dazu Tausende Übersetzungen (auch frühe koptische) und Väterzitate. Aus dieser Fülle lässt sich der ursprüngliche Text mit hoher Sicherheit rekonstruieren. Die allermeisten Varianten sind Schreibfehler und Wortstellungen; selbst Bart Ehrman stimmt seinem Lehrer Metzger zu, dass keine zentrale christliche Lehre von ihnen abhängt. Und die bekannten Zusätze (Markusschluss, Ehebrecherin, 1 Joh 5,7) kennen wir gerade deshalb, weil die Handschriften so zahlreich sind.`,
  keyPoints: [
    `**Unvergleichliche Bezeugung:** ca. 5.900 griechische Handschriften, über 10.000 lateinische, dazu koptische, syrische, armenische u. a. – kein anderer antiker Text kommt annähernd heran.`,
    `**Frühe Zeugen:** Papyri aus dem 2./3. Jahrhundert (P52, P46, P66, P75), große Kodizes des 4. Jahrhunderts (Sinaiticus, Vaticanus) – der Abstand zu den Originalen ist für antike Verhältnisse kurz.`,
    `**Varianten richtig verstehen:** Viele Handschriften = viele Varianten; die meisten sind Rechtschreibung und Wortstellung; nur ein winziger Bruchteil ist sinnrelevant und plausibel.`,
    `**Ehrmans Zugeständnis:** Keine zentrale christliche Lehre hängt an einer Textvariante (Ehrman mit Metzger).`,
    `**Transparenz:** Die großen Zusätze sind bekannt, in jeder Studienbibel gekennzeichnet – das zeigt die Zuverlässigkeit der Methode, nicht ihr Versagen.`,
    `**Koptischer Beitrag:** Ägyptische Papyri und koptische Übersetzungen gehören zu den wichtigsten Zeugen des frühen Textes.`,
  ],
  voices: [
    {
      person: 'metzger',
      role: 'als Textkritiker (Princeton)',
      text: `Bruce Metzger, Ehrmans Lehrer und Mitherausgeber der wichtigsten griechischen NT-Ausgaben, betonte, dass die Fülle der Handschriften dem NT eine Sonderstellung unter den antiken Texten gibt. Die Textkritik vergleicht Handschriften, Übersetzungen und Väterzitate, gewichtet sie nach Alter, Verbreitung und innerer Wahrscheinlichkeit und kommt so in den allermeisten Fällen zu einem gesicherten Text. Wo Unsicherheit bleibt, wird sie offen ausgewiesen – in seinem Textkommentar mit Sicherheitsgraden von A bis D.`,
      sources: [{ kind: 'fachliteratur', author: 'Bruce M. Metzger / Bart D. Ehrman', work: 'The Text of the New Testament: Its Transmission, Corruption, and Restoration', year: '4. Aufl. 2005', status: 'paraphrase', quote: `Standardlehrbuch der Textkritik, von Lehrer und Schüler gemeinsam verfasst.` }],
    },
    {
      person: 'wallace',
      role: 'als Textkritiker und Gründer des CSNTM',
      text: `Daniel Wallace gründete das Center for the Study of New Testament Manuscripts (CSNTM), das weltweit Handschriften digitalisiert. In Debatten mit Ehrman betont er: Die Zahl der Varianten klingt dramatisch, aber die Frage ist, welche bedeutungsrelevant und zugleich plausibel sind – und das ist ein sehr kleiner Teil. Er hält Ehrmans populäre Darstellung für irreführend, weil sie die Laien beunruhigt, ohne zu sagen, dass Ehrman selbst die meisten dieser Varianten für theologisch belanglos hält.`,
      sources: [{ kind: 'fachliteratur', author: 'J. Ed Komoszewski / M. James Sawyer / Daniel B. Wallace', work: 'Reinventing Jesus', year: '2006', status: 'paraphrase', quote: `Einteilung der Varianten in vier Klassen; nur ein kleiner Bruchteil ist sinnrelevant und plausibel.` }],
    },
    {
      person: 'origenes',
      role: 'als alexandrinischer Textgelehrter',
      text: `Origenes ist einer der ersten christlichen Textkritiker. Für das Alte Testament schuf er die Hexapla, eine Synopse von sechs Textfassungen; für das Neue Testament vermerkte er abweichende Lesarten und klagte über nachlässige und eigenmächtige Schreiber. Die Kirche hat also nie behauptet, alle Abschriften seien fehlerlos – sie hat früh begonnen, Fehler durch Vergleich zu korrigieren. Das ist dieselbe Methode, die die moderne Textkritik verfeinert hat.`,
      sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'Matthäuskommentar', ref: '15,14', year: 'ca. 245', status: 'paraphrase', quote: `Klage über Unterschiede der Abschriften und Notwendigkeit des Vergleichs.` }],
    },
    {
      person: 'pj-williams',
      role: 'als Mitherausgeber des Tyndale House Greek New Testament',
      text: `Williams hat an einer neuen kritischen Ausgabe des griechischen NT mitgearbeitet, die sich auf die ältesten Handschriften stützt. Er weist darauf hin, dass die Schreiber in der Regel bemerkenswert sorgfältig arbeiteten und dass viele Varianten so geringfügig sind, dass sie sich in einer Übersetzung gar nicht abbilden lassen. Die Arbeit an den Handschriften stärkt nach seiner Erfahrung das Vertrauen in den Text, statt es zu untergraben.`,
      sources: [{ kind: 'fachliteratur', author: 'Dirk Jongkind / Peter J. Williams u. a. (Hg.)', work: 'The Greek New Testament, Produced at Tyndale House, Cambridge', year: '2017', status: 'paraphrase', quote: `Kritische Ausgabe auf Grundlage der ältesten Handschriften.` }],
    },
  ],
  dialog: [
    {
      id: 'originale-verloren',
      objection: `Wir haben kein einziges Original. Wir haben nur Kopien von Kopien von Kopien, die meisten Jahrhunderte später, und keine zwei sind identisch. Woher willst du wissen, was die Evangelisten ursprünglich geschrieben haben?`,
      objectionBy: 'Bart Ehrman',
      answer: `Das gilt für jedes antike Buch – von Platon bis Tacitus haben wir keine Originale. Der Unterschied: Beim NT haben wir rund 5.900 griechische Handschriften, dazu frühe Übersetzungen ins Lateinische, Syrische und Koptische sowie Tausende Zitate bei den Kirchenvätern. Durch den Vergleich dieser unabhängigen Überlieferungsstränge lässt sich erkennen, wo ein Schreiber abwich. Je mehr Zeugen, desto sicherer die Rekonstruktion – wie bei einem Text, den hundert Schüler unabhängig abgeschrieben haben.`,
      detail: `**Ein Beispiel für sorgfältige Überlieferung:** Papyrus 75 (Lukas und Johannes, meist um 200 datiert, nach Nongbri möglicherweise später) und der Codex Vaticanus (4. Jh.) stimmen in einem erstaunlich hohen Maß überein, obwohl zwischen ihnen mehrere Generationen von Abschriften liegen. Das zeigt, dass Schreiber in Ägypten über lange Zeit sehr genau arbeiteten.

**Unabhängige Stränge:** Die koptische, syrische und lateinische Überlieferung entwickelte sich in verschiedenen Sprachen und Regionen. Wo sie übereinstimmen, ist der Text sehr sicher.`,
      questionsBack: [
        `Von welchem anderen antiken Buch haben wir mehr und frühere Handschriften?`,
        `Wenn wir den Text nicht rekonstruieren können – woher weißt du dann, welche Stellen später hinzugefügt wurden?`,
      ],
      followUps: [
        {
          id: 'varianten-zahl',
          objection: `Es gibt mehr Textvarianten als Wörter im Neuen Testament – Hunderttausende! Das ist doch kein stabiler Text.`,
          objectionBy: 'Bart Ehrman / Shabir Ally',
          answer: `Die Zahl ist richtig – Peter Gurry schätzt rund 500.000 Varianten bei etwa 138.000 Wörtern. Aber sie entsteht, weil jede Abweichung in jeder der Tausenden Handschriften einzeln gezählt wird: Wenn hundert Handschriften dasselbe Wort falsch schreiben, sind das hundert Varianten. Die große Mehrheit sind Rechtschreibung, Wortstellung oder offensichtliche Versehen. Sinnrelevant und zugleich plausibel ist nur ein winziger Bruchteil – und selbst Ehrman räumt ein, dass keine zentrale christliche Lehre davon abhängt.`,
          detail: `**Beispiel für eine „Variante":** Im Griechischen kann „Jesus Christus" oder „Christus Jesus" stehen, mit oder ohne Artikel, mit oder ohne das bewegliche „n" am Wortende – jede dieser Formen zählt als eigene Variante, ohne dass sich der Sinn ändert. Im Deutschen ist der Unterschied oft gar nicht übersetzbar.`,
          followUps: [
            {
              id: 'orthodoxe-faelschung',
              objection: `Es geht nicht nur um Schreibfehler. Schreiber haben den Text absichtlich verändert, um Irrlehrer zu widerlegen – zum Beispiel in 1 Tim 3,16, wo spätere Handschriften „Gott ist offenbart im Fleisch" schreiben statt „der offenbart ist". So wurde die Christologie nachträglich verstärkt.`,
              objectionBy: 'Bart Ehrman (The Orthodox Corruption of Scripture)',
              answer: `Es gab solche bewussten Änderungen, das ist wahr. Aber wir kennen sie genau deshalb, weil wir so viele Handschriften haben – und die kritischen Ausgaben drucken in 1 Tim 3,16 die ältere Lesart „der" (hos). Die Gottheit Christi hängt nicht an dieser Stelle; sie steht in Texten, die textkritisch unbestritten sind (Joh 1,1; 20,28; Phil 2,6; Hebr 1,8). Die Textkritik zeigt also nicht, dass die Lehre erfunden wurde, sondern dass sie unabhängig von den späteren Verstärkungen im Text steht.`,
              sources: [
                { kind: 'gegner', author: 'Bart D. Ehrman', work: 'The Orthodox Corruption of Scripture', year: '1993', quote: `Ehrman untersucht, wie Schreiber Texte im Interesse der Rechtgläubigkeit veränderten.`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Johannes', ref: '20,28', quote: `Thomas antwortete und sprach zu ihm: Mein HERR und mein Gott!`, translation: 'Luther 1912', status: 'verbatim', note: 'Textkritisch unbestritten.' },
              ],
              followUps: [
                {
                  id: 'erste-hundert-jahre',
                  objection: `Die entscheidenden Änderungen könnten in den ersten hundert Jahren passiert sein, aus denen wir fast keine Handschriften haben. Was dort geschah, wissen wir schlicht nicht.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Das ist ein Argument aus dem Schweigen: Es behauptet Änderungen, für die es keine Spur gibt. Die frühesten Handschriften, die wir haben, zeigen keinen „anderen" Urtext, sondern denselben Text mit den üblichen kleinen Abweichungen. Die Zitate der frühesten Väter – Clemens von Rom, Ignatius, Polykarp, Justin, Irenäus – passen zu diesem Text. Und die unabhängigen Übersetzungsstränge (koptisch, syrisch, lateinisch) weisen auf einen gemeinsamen Ausgangstext zurück. Wer große Änderungen in einer „dunklen Zeit" annimmt, muss erklären, warum sie in allen Strängen spurlos gleich ausfielen.`,
                  questionsBack: [
                    `Welche Lehre des NT ist deiner Meinung nach in den ersten hundert Jahren eingefügt worden – und welcher Beleg zeigt das?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'markusschluss-ehebrecherin',
      objection: `Ganze Abschnitte wurden später hinzugefügt: Mk 16,9–20 fehlt in den ältesten Handschriften, ebenso die Geschichte von der Ehebrecherin (Joh 7,53–8,11). Trotzdem stehen sie in euren Bibeln und werden in euren Gottesdiensten gelesen.`,
      objectionBy: 'Bart Ehrman',
      answer: `Richtig: Beide Abschnitte fehlen im Codex Sinaiticus und im Codex Vaticanus, die Ehebrecherin auch in P66 und P75. Moderne Bibeln kennzeichnen das offen. Gerade dass wir das wissen, zeigt, wie gut die Überlieferung ist. Der lange Markusschluss ist aber sehr alt: Irenäus zitiert um 180 Mk 16,19 ausdrücklich als Schluss des Markusevangeliums, und die koptisch-bohairische Überlieferung enthält ihn. Die Kirche hat ihn als kanonische Schrift empfangen; inhaltlich fasst er Erscheinungen zusammen, die auch in den anderen Evangelien stehen.`,
      detail: `**Mk 16,9–20 – die Fakten:**
- Fehlt in Sinaiticus und Vaticanus (4. Jh.); Eusebius und Hieronymus bemerken, dass er in vielen genauen Handschriften fehle.
- Bezeugt bei Irenäus (Adv. Haer. III,10,5/6), im Diatessaron Tatians und in der großen Mehrheit späterer Handschriften.
- In der koptischen Überlieferung: Die bohairische Fassung bietet den langen Schluss; Teile der sahidischen Überlieferung enden mit 16,8 oder bieten den kurzen Schluss.
- Liturgischer Gebrauch in der koptischen Kirche: Der Abschnitt gehört zum kirchlich rezipierten Text; am Fest der Himmelfahrt wird Mk 16,12–20 als Evangelium des Morgen-Weihrauchopfers (Matins) gelesen.

**Joh 7,53–8,11:** Fehlt in den frühesten griechischen Handschriften und in der sahidischen Überlieferung. Papias kannte möglicherweise eine ähnliche Erzählung von einer Frau, die vieler Sünden beschuldigt wurde (Eusebius, KG III,39,17). Viele Forscher halten die Geschichte für eine alte, wahrscheinlich authentische Jesus-Überlieferung, die später in das Johannesevangelium eingefügt wurde.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,10,5 (bzw. 6)', year: 'ca. 180', quote: `Am Ende seines Evangeliums sagt Markus: „Und der Herr Jesus, nachdem er mit ihnen geredet hatte, wurde in den Himmel aufgenommen und sitzt zur Rechten Gottes."`, original: `In fine autem evangelii ait Marcus: Et quidem Dominus Iesus, postquam locutus est eis, receptus est in caelos, et sedet ad dexteram Dei.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'A Textual Commentary on the Greek New Testament', ref: 'zu Mk 16,9–20 und Joh 7,53–8,11', year: '2. Aufl. 1994', quote: `Darstellung der Handschriftenlage einschließlich koptischer Zeugen.`, status: 'paraphrase' },
        { kind: 'liturgie', work: 'Koptischer Katameros (Lektionar), Fest der Himmelfahrt (Donnerstag der 6. Woche der Pfingstzeit)', ref: 'Matins-Evangelium: Mk 16,12–20', quote: `Am Fest der Himmelfahrt wird im Morgen-Weihrauchopfer Mk 16,12–20 gelesen.`, status: 'paraphrase', url: 'https://copticchurch.net/readings', note: 'Nach dem koptischen Lektionar auf copticchurch.net (Lesungen zum Fest der Himmelfahrt; WebSearch-Prüfung 2026). Die Lesung der Eucharistiefeier selbst wurde nicht geprüft.' },
      ],
      followUps: [
        {
          id: 'dann-auch-anderes',
          objection: `Wenn ganze Abschnitte hinzugefügt werden konnten, ohne dass es jemand verhinderte – dann kann auch alles andere hinzugefügt worden sein.`,
          objectionBy: 'Shabir Ally',
          answer: `Nein – wir erkennen diese Zusätze ja gerade an der Handschriftenlage: Sie fehlen in alten Zeugen. Dieselbe Methode zeigt, dass es keine weiteren Abschnitte dieser Größe gibt, denen frühe Bezeugung fehlt. Hätte jemand den Glauben grundlegend verändert, müssten wir Spuren davon in den ältesten Papyri, den koptischen und syrischen Übersetzungen und den Väterzitaten finden. Die beiden bekannten Abschnitte enthalten zudem keine neue Lehre.`,
          followUps: [
            {
              id: 'markusschluss-trotzdem-kanon',
              objection: `Dann erklär mir, warum deine Kirche Mk 16,9–20 weiterhin als Heilige Schrift liest, obwohl ihr wisst, dass Markus es nicht geschrieben hat. Da steht sogar, Gläubige würden Schlangen aufheben und Gift trinken (16,18) – in den USA sterben Leute daran.`,
              objectionBy: 'Dan McClellan / Bart Ehrman',
              answer: `Für die orthodoxe Kirche entscheidet nicht die Frage „Welche Hand schrieb den letzten Satz?", sondern ob ein Text als apostolische Überlieferung von der Kirche empfangen wurde. Der lange Schluss ist uralt – Irenäus zitiert ihn um 180 –, und er fasst zusammen, was die anderen Evangelien und die Apostelgeschichte berichten. Wir sagen ehrlich, dass er nicht zum ursprünglichen Markustext gehört, und lesen ihn trotzdem als Zeugnis der apostolischen Kirche. Und Mk 16,18 ist eine Verheißung des Schutzes, keine Aufforderung, Gott zu versuchen – das verbietet Jesus selbst (Mt 4,7).`,
              detail: `**Zwei Fragen auseinanderhalten:**
- **Textkritisch:** Gehört Mk 16,9–20 zum ursprünglichen Markusevangelium? Nach dem Befund der ältesten Handschriften wohl nicht.
- **Kanonisch:** Gehört der Abschnitt zur Schrift, die die Kirche empfangen hat? Ja – er ist seit dem 2. Jahrhundert in Gebrauch, wird von Irenäus als Markus zitiert und in der koptischen Kirche am Fest der Himmelfahrt gelesen.

Die Kirche hat die Bibel nie als Sammlung von Autographen verstanden, sondern als ihr anvertrautes, in der Liturgie gelesenes Zeugnis.

**Zu den Schlangen:** Die Apostelgeschichte erzählt, wie Paulus von einer Viper gebissen wird und unversehrt bleibt (Apg 28,3–6) – ein Bewahrungs-, kein Mutprobenwunder. Papias berichtet nach Eusebius von Justus Barsabbas, der Gift trank und durch Gottes Gnade unversehrt blieb. Das Schlangenhantieren einiger amerikanischer Gruppen seit dem 20. Jahrhundert ist der Kirche der Väter völlig fremd.`,
              sources: [
                { kind: 'bibel', work: 'Matthäus', ref: '4,7', quote: `Da sprach Jesus zu ihm: Wiederum steht auch geschrieben: Du sollst Gott, deinen HERRN, nicht versuchen.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '28,3–6', quote: `… kam eine Otter von der Hitze hervor und fuhr Paulus an seine Hand. … Er aber schlenkerte das Tier ins Feuer, und ihm widerfuhr nichts Übles.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                { kind: 'kirchenvater', author: 'Eusebius von Caesarea (nach Papias)', work: 'Kirchengeschichte', ref: 'III,39,9', year: 'ca. 325', quote: `Papias berichtet, Justus mit dem Beinamen Barsabbas habe ein tödliches Gift getrunken und sei durch die Gnade des Herrn unversehrt geblieben.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Ist für dich ein Text nur dann wertvoll, wenn wir die Hand seines Verfassers kennen – auch bei antiken Gesetzestexten oder Hymnen?`,
              ],
              followUps: [
                {
                  id: 'markus-endet-ohne-erscheinung',
                  objection: `Dann gib zu: Das älteste Evangelium endete mit verängstigten Frauen, die niemandem etwas sagten (16,8). Keine einzige Erscheinung des Auferstandenen! Die späteren Evangelisten und Schreiber haben das als Mangel empfunden und nachgebessert.`,
                  objectionBy: 'Kipp Davis / Bart Ehrman',
                  answer: `Dass Markus mit 16,8 endet, ist gut möglich – manche Forscher (darunter Metzger) hielten auch einen verlorenen Schluss für denkbar. Aber selbst der kurze Markus kennt die Erscheinungen: Jesus kündigt an, nach seiner Auferstehung den Jüngern nach Galiläa vorauszugehen (14,28), und der Engel bestätigt: „Dort werdet ihr ihn sehen" (16,7). Markus schreibt für Gemeinden, die das Credo von 1 Kor 15 mit seiner Liste von Erscheinungen längst kannten. Ein offener Schluss setzt die Erscheinungen voraus – er erfindet sie nicht weg.`,
                  detail: `**Drei Deutungen von Mk 16,8:**
1. **Beabsichtigter offener Schluss:** Der Leser soll selbst vor die Entscheidung gestellt werden; die Erfüllung der Verheißung von 16,7 ist bekannt.
2. **Verlorener Schluss:** Das Ende einer Rolle oder eines Kodex war besonders verletzlich; Metzger hielt diese Möglichkeit für ernsthaft.
3. **Unvollendetes Werk:** Markus konnte sein Evangelium nicht abschließen.

**Wichtig:** Keine dieser Deutungen zeigt, dass die Erscheinungen später „erfunden" wurden. Paulus listet sie schon um 55 als ältere Überlieferung auf (1 Kor 15,5–8) – rund 15 Jahre vor Markus.`,
                  sources: [
                    { kind: 'bibel', work: 'Markus', ref: '16,7', quote: `Gehet aber hin und sagt's seinen Jüngern und Petrus, daß er vor euch hingehen wird nach Galiläa; da werdet ihr ihn sehen, wie er euch gesagt hat.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'A Textual Commentary on the Greek New Testament', ref: 'zu Mk 16,9–20', year: '2. Aufl. 1994', quote: `Metzger hält es für möglich, dass das ursprüngliche Ende des Markusevangeliums verloren ging.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Wenn Markus keine Erscheinungen kannte – warum lässt er Jesus und den Engel ausdrücklich ein Wiedersehen in Galiläa ankündigen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'comma-johanneum',
      objection: `Der einzige Vers, der die Trinität ausdrücklich lehrt – 1 Joh 5,7 („drei sind, die da zeugen im Himmel: der Vater, das Wort und der Heilige Geist") –, ist eine nachträgliche Fälschung. Die Trinität wurde in die Bibel hineingeschrieben!`,
      objectionBy: 'Ahmed Deedat / Shabir Ally',
      answer: `Richtig: Dieser Zusatz, das „Comma Johanneum", ist eine späte lateinische Ergänzung; im Griechischen erscheint er erst in sehr späten Handschriften und kam über Erasmus' dritte Ausgabe (1522) in manche Bibeln. Er fehlt in allen alten östlichen Übersetzungen, auch in den koptischen, und moderne Ausgaben lassen ihn weg. Aber die Trinitätslehre hängt nicht an ihm: Die Kirche bekannte sie in Nizäa 325 und Konstantinopel 381, ohne ihn zu benutzen; Athanasius und die Kappadokier verteidigten sie mit Texten wie Mt 28,19, Joh 1,1 und 2 Kor 13,13.`,
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '28,19', quote: `Darum gehet hin und lehret alle Völker und taufet sie im Namen des Vaters und des Sohnes und des heiligen Geistes`, translation: 'Luther 1912', status: 'verbatim', note: 'Textkritisch unbestritten.' },
      ],
      followUps: [
        {
          id: 'bestaetigt-koran',
          objection: `Das bestätigt genau, was der Koran sagt: Die Schriftbesitzer haben ihre Schrift verändert (taḥrīf).`,
          objectionBy: 'Shabir Ally',
          answer: `Eine bekannte, offen ausgewiesene Schreibervariante ist etwas anderes als eine Verfälschung der Offenbarung. Und gerade die Handschriften widerlegen den Vorwurf: Codex Sinaiticus, Codex Vaticanus und die frühen koptischen Übersetzungen entstanden Jahrhunderte vor Mohammed – und sie enthalten dasselbe Evangelium mit Kreuzigung, Auferstehung und Gottessohnschaft, das Christen heute lesen. Wenn der Koran die Schrift der Christen seiner Zeit bestätigt (5:47), bestätigt er diesen Text. Mehr dazu im „Islamischen Dilemma".`,
          sources: [
            { kind: 'koran', work: `Sure 5 (al-Ma'ida)`, ref: '5:47', quote: `Und die Leute des Evangeliums sollen nach dem urteilen, was Allah darin herabgesandt hat.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/5/47' },
          ],
          followUps: [
            {
              id: 'koran-wortgetreu-bewahrt',
              objection: `Der Unterschied ist: Der Koran ist bis auf den Buchstaben bewahrt. Es gibt keine Hunderttausende Varianten, keine hinzugefügten Abschnitte. Das zeigt, welches Buch Gott wirklich geschützt hat.`,
              objectionBy: 'Shabir Ally / Mohammed Hijab',
              answer: `Auch der Koran hat eine Textgeschichte: Nach der islamischen Überlieferung selbst ließ der Kalif Uthman eine Standardfassung herstellen und andere Koranabschriften verbrennen (Sahih al-Bukhari 4987). Es gibt bis heute mehrere anerkannte Lesarten (qirāʾāt), und der untere Text des Palimpsests von Sanaa weicht an zahlreichen Stellen vom heutigen Standardtext ab. Das neutestamentliche Christentum hat seine Varianten nie vernichtet, sondern bewahrt – deshalb können wir sie heute zählen. Weniger sichtbare Varianten bedeuten nicht automatisch bessere Bewahrung, sondern oft eine frühere Vereinheitlichung.`,
              detail: `**Fairer Vergleich:** Muslime betonen zu Recht, dass der Koran früh auswendig gelernt und standardisiert wurde. Die islamische Überlieferung berichtet aber selbst, dass es vor Uthman abweichende Abschriften gab (z. B. die Kodizes von Ibn Masʿūd und Ubayy ibn Kaʿb) und dass Uthman diese vernichten ließ.

**Sanaa-Palimpsest (Ṣanʿāʾ 1):** Behnam Sadeghi und Mohsen Goudarzi haben den unteren, abgeschabten Text untersucht; er zeigt eine vom uthmanischen Standard abweichende Textform mit Varianten in Wortlaut und Reihenfolge.

**Für das Gespräch:** Nicht polemisch werden. Es geht nicht darum, den Koran schlechtzumachen, sondern darum, denselben Maßstab anzulegen: Beide Schriften haben eine Überlieferungsgeschichte; beim NT liegt sie offen, mit allen Varianten, in Tausenden Handschriften.`,
              sources: [
                { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4987', quote: `Uthman ließ Abschriften der von Hafsa verwahrten Blätter herstellen, sandte sie in die Provinzen und befahl, alle anderen Koranmaterialien zu verbrennen.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4987' },
                { kind: 'wissenschaft', author: 'Behnam Sadeghi / Mohsen Goudarzi', work: `Ṣan'ā' 1 and the Origins of the Qur'ān`, ref: 'Der Islam 87', year: '2012', quote: `Untersuchung des unteren Textes des Sanaa-Palimpsests mit einer vom uthmanischen Standard abweichenden Textform.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Warum musste Uthman andere Koranabschriften verbrennen lassen, wenn es keine Unterschiede gab?`,
                `Welche Überlieferung ist transparenter: eine, die ihre Varianten bewahrt, oder eine, die sie vernichtet hat?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'p52-ueberbewertet',
      objection: `Apologeten prahlen mit P52 „aus dem Jahr 125". Aber Brent Nongbri hat gezeigt, dass das Fragment genauso gut aus dem späten 2. oder frühen 3. Jahrhundert stammen kann. Eure frühen Daten sind Wunschdenken.`,
      objectionBy: 'Kipp Davis',
      answer: `Nongbri hat recht, dass paläographische Datierungen breite Spannen haben – man sollte P52 nicht auf ein Jahr festnageln. Mein Argument hängt aber nicht an P52. Selbst mit vorsichtigen Datierungen haben wir zahlreiche Papyri aus dem 2. bis 4. Jahrhundert – P45, P46, P66, P75 – und vollständige Bibeln aus dem 4. Jahrhundert. Das ist ein Abstand zu den Originalen, von dem Altphilologen bei fast allen anderen antiken Werken nur träumen können.`,
      followUps: [
        {
          id: 'klassiker-vergleich',
          objection: `Und die beliebten Vergleiche mit Homer, Platon oder Caesar arbeiten mit veralteten, oft falschen Zahlen. Selbst evangelikale Textkritiker haben das kritisiert.`,
          objectionBy: 'Kipp Davis',
          answer: `Stimmt – das Buch „Myths and Mistakes in New Testament Textual Criticism" (2019) von evangelikalen Fachleuten korrigiert solche überzogenen Zahlen, und ich verwende sie deshalb nicht. Der Grundbefund bleibt aber unbestritten: Die Annalen des Tacitus, Bücher 1–6, beruhen auf einer einzigen Handschrift aus dem 9. Jahrhundert; trotzdem zitieren Historiker sie selbstverständlich. Kein antikes Werk ist so früh, so zahlreich und in so vielen Sprachen bezeugt wie das Neue Testament.`,
        },
      ],
    },
    {
      id: 'urtext-aufgegeben',
      objection: `Selbst die Textkritiker haben das Ziel des „Originaltextes" aufgegeben. Eldon Epp und David Parker sagen, es gebe keinen erreichbaren Urtext; das Münsteraner Institut spricht nur noch vom „Ausgangstext". Deine eigenen Fachleute geben also zu, dass wir das Original nicht kennen.`,
      objectionBy: 'Bart Ehrman / Dan McClellan',
      answer: `Die Debatte um den „Ausgangstext" ist eine Frage der Definition, nicht der Kapitulation. Der Ausgangstext ist die rekonstruierte Form, von der alle erhaltenen Handschriften abstammen – und der Abstand zwischen ihm und dem, was die Verfasser schrieben, ist nach dem Urteil der meisten Textkritiker gering. Die neue Methode des Instituts, die kohärenzbasierte genealogische Methode, hat den Text sogar noch präziser gemacht: In den Katholischen Briefen änderte sie den Text der Standardausgabe nur an wenigen Dutzend Stellen, fast alle ohne Bedeutungsunterschied.`,
      detail: `**Was „Ausgangstext" heißt:** Wenn ein Autor seinen Text mehrfach überarbeitet oder ein Sekretär Abschriften anfertigt, ist „das Original" nicht eindeutig ein einziges Blatt. Deshalb sprechen Textkritiker vorsichtig vom Ausgangstext der Überlieferung. Michael Holmes und andere betonen, dass dieser Ausgangstext dem Autorentext sehr nahe kommt.

**CBGM und Editio Critica Maior:** Die kohärenzbasierte genealogische Methode (Gerd Mink, INTF) wertet alle Handschriften computergestützt aus. Für die 28. Auflage des Nestle-Aland wurde der Text der Katholischen Briefe auf dieser Grundlage überarbeitet – mit einer überschaubaren Zahl von Änderungen gegenüber der 27. Auflage. Das zeigt die Stabilität des Textes.

**Ehrlich:** David Parker vertritt tatsächlich eine Sicht des Textes als „lebendig" und skeptisch gegenüber einem fixierbaren Original. Das ist eine respektierte Position, aber nicht die einzige; Textkritiker wie Holmes, Wallace oder Gurry halten den Autorentext für in hohem Maß erreichbar.`,
      voices: [
        {
          person: 'pj-williams',
          role: 'als Textkritiker (Tyndale House)',
          text: `Williams und seine Mitherausgeber haben mit der Tyndale-Ausgabe bewusst an der Frage nach dem Autorentext festgehalten und sich dabei auf die ältesten Handschriften gestützt, einschließlich ihrer Schreibweisen. Ihre Arbeit zeigt, dass zwei unabhängig erarbeitete kritische Ausgaben in der überwältigenden Mehrheit des Textes übereinstimmen.`,
          sources: [{ kind: 'fachliteratur', author: 'Dirk Jongkind / Peter J. Williams u. a. (Hg.)', work: 'The Greek New Testament, Produced at Tyndale House, Cambridge', year: '2017', status: 'paraphrase', quote: `Kritische Ausgabe, die am Ziel des Autorentextes festhält.` }],
        },
      ],
      sources: [
        { kind: 'fachliteratur', author: 'Eldon J. Epp', work: `The Multivalence of the Term „Original Text" in New Testament Textual Criticism. Harvard Theological Review 92`, year: '1999', quote: `Epp zeigt, dass „Originaltext" mehrere Bedeutungen haben kann, und plädiert für begriffliche Klarheit.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Michael W. Holmes', work: 'From „Original Text" to „Initial Text": The Traditional Goal of New Testament Textual Criticism in Contemporary Discussion. In: B. D. Ehrman / M. W. Holmes (Hg.), The Text of the New Testament in Contemporary Research, 2. Aufl.', year: '2013', quote: `Holmes erläutert den Übergang vom „Originaltext" zum „Ausgangstext" und dessen Verhältnis zum Autorentext.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wie groß schätzt du den Abstand zwischen dem Ausgangstext und dem Autorentext – und auf welcher Grundlage?`,
        `Wenn zwei unabhängige kritische Ausgaben fast überall übereinstimmen – was sagt das über die Stabilität des Textes?`,
      ],
      followUps: [
        {
          id: 'westlicher-text-apg',
          objection: `Der frühe Text war viel flüssiger, als du zugibst. Der sogenannte westliche Text der Apostelgeschichte, etwa im Codex Bezae, ist deutlich länger als der übliche Text. Wenn ein ganzes Buch in zwei so unterschiedlichen Fassungen umlief, kannst du nicht von einem stabilen Text sprechen.`,
          objectionBy: 'Kipp Davis / David Parker (rezipiert)',
          answer: `Der westliche Text der Apostelgeschichte ist tatsächlich spürbar länger – das ist der deutlichste Fall von Textfluss im NT, und ich gestehe ihn offen zu. Aber schau dir an, was die Zusätze sind: erklärende Ergänzungen, Ausschmückungen, Glättungen. Der Gang der Erzählung, die Personen und die Lehre bleiben dieselben. Und wir können beide Fassungen nebeneinanderlegen, weil wir genug Handschriften haben. Ein Text, dessen Varianten wir so genau kennen, ist kein unbekannter Text.`,
          detail: `**Der Befund:** Der westliche Text der Apostelgeschichte (Codex Bezae, 5. Jh., einige Papyri, altlateinische und syrische Zeugen) ist um einige Prozent länger als der alexandrinische Text. Die meisten Forscher halten den alexandrinischen Text für ursprünglicher und den westlichen für eine frühe, freiere Bearbeitung.

**Was er zeigt:** Im 2. Jahrhundert gingen manche Schreiber freier mit dem Text um als später. Das ist ein echter Befund. Er betrifft aber vor allem erzählerische Details. Zugleich zeigt der alexandrinische Strang (P75 – Vaticanus) eine bemerkenswert sorgfältige Überlieferung in derselben Zeit.

**Für das Gespräch:** Nicht behaupten, alle Handschriften seien praktisch gleich. Sagen: Wir kennen die Varianten, wir können sie gewichten, und keine von ihnen ändert die Botschaft.`,
          sources: [
            { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'A Textual Commentary on the Greek New Testament', ref: 'Einleitung zur Apostelgeschichte', year: '2. Aufl. 1994', quote: `Ausführliche Darstellung des westlichen Textes der Apostelgeschichte und seiner Eigenheiten.`, status: 'paraphrase' },
            { kind: 'fachliteratur', author: 'David C. Parker', work: 'Codex Bezae: An Early Christian Manuscript and its Text', year: '1992', quote: `Monografie zu Codex Bezae und seinem eigenwilligen Text.`, status: 'paraphrase' },
          ],
          questionsBack: [
            `Nenne eine Lehre, die sich zwischen westlichem und alexandrinischem Text der Apostelgeschichte unterscheidet.`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher antike Text ist besser bezeugt als das Neue Testament?`,
    `Welche zentrale christliche Lehre hängt an einer unsicheren Textvariante?`,
    `Wie können wir wissen, dass Mk 16,9–20 später ist, wenn der ursprüngliche Text nicht rekonstruierbar sein soll?`,
    `Stimmst du Ehrman zu, wenn er mit Metzger sagt, dass die wesentlichen Glaubensinhalte von den Varianten nicht berührt werden?`,
  ],
  avoid: [
    `„Wir haben 99,5 % des Originaltextes" als exakte Zahl verkünden – solche Prozentangaben sind unscharf und werden von Fachleuten kritisiert.`,
    `Behaupten, man könne das ganze NT allein aus Väterzitaten rekonstruieren – das ist eine verbreitete Übertreibung (vgl. Myths and Mistakes, 2019).`,
    `P52 auf „125 n. Chr." festlegen – nenne eine Spanne.`,
    `Das Comma Johanneum (1 Joh 5,7) als Beleg der Trinität verwenden.`,
  ],
  concessions: [
    `Die Originale sind verloren; die Handschriften weichen an sehr vielen Stellen voneinander ab.`,
    `Es gab bewusste Änderungen durch Schreiber, auch aus theologischen Motiven.`,
    `Mk 16,9–20, Joh 7,53–8,11 und 1 Joh 5,7b gehören nach dem Befund der ältesten Handschriften nicht zum ursprünglichen Text der jeweiligen Schrift.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Bruce M. Metzger / Bart D. Ehrman', work: 'The Text of the New Testament', year: '4. Aufl. 2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Elijah Hixson / Peter J. Gurry (Hg.)', work: 'Myths and Mistakes in New Testament Textual Criticism', year: '2019', status: 'paraphrase', note: 'Ehrlich auch gegenüber apologetischen Übertreibungen.' },
    { kind: 'fachliteratur', author: 'J. Ed Komoszewski / M. James Sawyer / Daniel B. Wallace', work: 'Reinventing Jesus', year: '2006', status: 'paraphrase' },
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Misquoting Jesus', year: '2005', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Textkritik', 'Handschriften', 'Varianten', 'koptische Übersetzungen', 'Markusschluss', 'Comma Johanneum', 'P52'],
  related: [
    'islam-bibelverfaelschung/bibel-textvarianten',
    'islam-bibelverfaelschung/ehrman-beweist-verfaelschung',
    'islam-dilemma/das-islamische-dilemma',
    'neues-testament/kanon-von-konstantin',
  ],
};

export default claim;
