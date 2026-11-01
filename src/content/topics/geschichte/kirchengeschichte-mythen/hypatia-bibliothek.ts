import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'hypatia-bibliothek',
  title: `„Christen zerstörten die Bibliothek von Alexandrien und ermordeten Hypatia."`,
  proponents: [
    { name: 'Carl Sagan', role: 'Astronom, Moderator von „Cosmos" (1980)', work: 'Cosmos (Fernsehserie und Buch, 1980), Kap./Folge 13' },
    { name: 'Edward Gibbon', role: 'Historiker (†1794)', work: 'The History of the Decline and Fall of the Roman Empire, Kap. 28 und 47' },
    { name: 'Alejandro Amenábar', role: 'Regisseur', work: 'Agora (Film, 2009)' },
    { name: 'Damaskios', role: 'Neuplatonischer Philosoph (6. Jh.)', work: 'Leben des Isidoros (Fragmente in der Suda)' },
  ],
  steelman: `Alexandrien war das Zentrum antiker Wissenschaft: Hier arbeiteten Euklid, Eratosthenes und Ptolemäus, hier stand die größte Bibliothek der Antike mit Hunderttausenden Schriftrollen. Als das Christentum Staatsreligion wurde, ließ Patriarch Theophilus – ein Papst der koptischen Kirche – 391 das Serapeum zerstören, in dem die Tochterbibliothek untergebracht war. 415 zerrte ein christlicher Mob die Philosophin und Mathematikerin Hypatia aus ihrem Wagen, schleppte sie in eine Kirche, riss ihr die Kleider vom Leib und erschlug sie mit Scherben; ihre Leiche wurde zerstückelt und verbrannt. Hinter dem Mob stand das Umfeld des Patriarchen Kyrill, den die koptische Kirche als Heiligen verehrt. Carl Sagan sah darin das Ende der antiken Wissenschaft und den Beginn des „finsteren Zeitalters".`,
  biblical: {
    summary: `Das Evangelium verurteilt die Tat ohne Wenn und Aber: „Du sollst nicht töten" (Ex 20,13). Jesus gebietet Feindesliebe (Mt 5,44), weist das Schwert zurück (Mt 26,52) und lehrt, dass der Zorn gegen den Bruder schon vor Gericht stellt (Mt 5,22). Paulus verbietet, Böses mit Bösem zu vergelten, und überlässt die Rache Gott (Röm 12,17–21). Wer im Namen Christi eine wehrlose Frau ermordet, handelt gegen Christus. Die Bibel kennt auch Gestalten, die Großes für Gott taten und zugleich schwer sündigten (David, Petrus) – Heiligkeit bedeutet nicht Fehlerlosigkeit.`,
    sources: [
      { kind: 'bibel', work: 'Exodus', ref: '20,13', quote: `Du sollst nicht töten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '5,44', quote: `Ich aber sage euch: Liebet eure Feinde; segnet, die euch fluchen; tut wohl denen, die euch hassen; bittet für die, so euch beleidigen und verfolgen,`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '12,17–21', quote: `Vergeltet niemand Böses mit Bösem … rächet euch selber nicht … Laß dich nicht das Böse überwinden, sondern überwinde das Böse mit Gutem.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche verehrt den hl. Kyrill als „Säule des Glaubens" – wegen seiner Lehre über Christus und die Theotokos, die das Konzil von Ephesus (431) bestätigte. Diese Verehrung bedeutet nicht, dass jede Handlung Kyrills oder seines Umfelds gerecht war; Heilige werden durch Gnade und Buße geheiligt, nicht durch Fehlerlosigkeit. Die Ermordung Hypatias war ein Verbrechen, begangen von Christen in Alexandrien, und muss als Sünde benannt werden. Schon der christliche Kirchenhistoriker Sokrates urteilte, nichts sei dem Geist des Christentums fremder als solche Gewalttaten. Für eine Kirche, die selbst über Jahrhunderte Gewalt durch Mobs erlitten hat, ist dieses ehrliche Urteil besonders glaubwürdig.`,
    sources: [
      { kind: 'kirchenvater', author: 'Sokrates Scholastikos', work: 'Kirchengeschichte', ref: 'VII,15', year: 'ca. 439', quote: `Diese Tat brachte nicht geringe Schmach nicht nur über Kyrill, sondern über die ganze Kirche von Alexandrien. Und gewiss kann nichts dem Geist des Christentums fremder sein als die Duldung von Morden, Kämpfen und Handlungen dieser Art.`, original: `This affair brought not the least opprobrium, not only upon Cyril, but also upon the whole Alexandrian church. And surely nothing can be farther from the spirit of Christianity than the allowance of massacres, fights, and transactions of that sort.`, translation: 'NPNF (A. C. Zenos), dt. eigene Übersetzung', status: 'verbatim', note: 'Urteil eines christlichen Historikers, wenige Jahrzehnte nach der Tat.' },
    ],
  },
  opposingView: {
    summary: `Der Forschungsstand (Maria Dzielska 1995, Edward Watts 2017, Roger Bagnall 2002): **Hypatia** wurde im März 415 von einem christlichen Mob unter Führung eines Lektors namens Petrus ermordet. Die Tat stand im Zusammenhang eines politischen Machtkampfs zwischen dem kaiserlichen Präfekten Orestes und Bischof Kyrill; Hypatia galt als Beraterin des Orestes und wurde verdächtigt, eine Versöhnung zu verhindern. Eine direkte Anordnung durch Kyrill ist nicht belegt; seine Verantwortung für ein Klima der Gewalt wird von vielen Historikern gesehen. **Die große Bibliothek** war im 4. Jahrhundert längst untergegangen – nach Bränden (Caesar 48 v. Chr.), Verlust der königlichen Förderung und der Zerstörung des Palastviertels Bruchion unter Aurelian (um 272). Bei der Zerstörung des **Serapeums** (391) erwähnt keine der antiken Quellen die Vernichtung von Büchern; ob dort noch Bestände waren, ist umstritten. Die Geschichte vom Kalifen Umar, der die Bibliothek verbrennen ließ, ist eine späte Legende (13. Jh.).`,
    detail: `**Hypatia (nach Sokrates, KG VII,13–15):**
- Tochter des Mathematikers Theon; lehrte Mathematik, Astronomie und neuplatonische Philosophie; Kommentare zu Diophant und Apollonios werden ihr zugeschrieben. Unter ihren Schülern waren Christen, darunter Synesios von Kyrene, später Bischof von Ptolemais, der ihr verehrungsvolle Briefe schrieb.
- Vorgeschichte: Streit zwischen Kyrill und Orestes; ein nächtliches Massaker von Juden an Christen und darauf die von Kyrill angeführte Vertreibung der Juden aus der Stadt; ein Angriff von etwa 500 Mönchen aus der nitrischen Wüste auf Orestes, bei dem der Mönch Ammonios den Präfekten mit einem Stein verletzte und danach zu Tode gefoltert wurde – Kyrill wollte ihn als Märtyrer ehren, doch besonnene Christen widersprachen, und Kyrill ließ die Sache fallen.
- Die Tat: Im März 415, in der Fastenzeit, im vierten Jahr Kyrills, zerrte eine Menge unter dem Lektor Petrus Hypatia aus ihrem Wagen, schleppte sie in die Kirche Kaisareion, entkleidete sie und tötete sie mit Scherben (ostraka); ihr Leichnam wurde zerstückelt und verbrannt.
- **Kaiserliche Reaktion:** Ein Gesetz von 416 (Codex Theodosianus 16,2,42) beschränkte die Zahl der Parabalani – eines kirchlichen Krankenpflegerdienstes, der als Schlägertrupp galt – und stellte sie unter Aufsicht des Präfekten.

**Spätere Quellen:** Damaskios (frühes 6. Jh., heidnisch, feindlich gegen Kyrill) behauptet, Kyrill habe aus Neid gehandelt. Johannes von Nikiu (koptischer Bischof, Ende 7. Jh.) stellt Hypatia als Zauberin dar und billigt die Tat – ein beschämender Text, den man nicht verschweigen darf.

**Bibliothek:** Plutarch (Caesar 49), Seneca (De tranquillitate animi 9,5) und Cassius Dio (42,38) berichten von Bränden im Alexandrinischen Krieg 48 v. Chr. Ammianus Marcellinus (um 390) spricht von den Bibliotheken des Serapeums in der Vergangenheitsform. Rufinus (Augenzeuge), Sokrates, Sozomenos, Theodoret und der heidnische Eunapios beschreiben die Zerstörung des Serapeums 391 – keiner erwähnt Bücher. Orosius (um 417) sah leere Bücherschränke in Tempeln, die „von unseren Leuten zu unserer Zeit" geleert worden seien.`,
    sources: [
      { kind: 'fachliteratur', author: 'Maria Dzielska', work: 'Hypatia of Alexandria', year: '1995', quote: `Hypatia war eine angesehene Lehrerin der städtischen Elite, die in einem politischen Konflikt zwischen Präfekt und Bischof zum Opfer wurde; das Bild der jungen Märtyrerin der Wissenschaft ist eine moderne Legende.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Edward J. Watts', work: 'Hypatia. The Life and Legend of an Ancient Philosopher', year: '2017', quote: `Hypatias Tod als Folge politischer Gewalt in Alexandrien; die Legende ihres Lebens wurde seit der Aufklärung ideologisch geformt.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Roger S. Bagnall', work: 'Alexandria: Library of Dreams. Proceedings of the American Philosophical Society 146', year: '2002', quote: `Die überlieferten Bestandszahlen der Bibliothek sind kaum glaubwürdig; ihr Untergang war ein langer Prozess.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Ammianus Marcellinus', work: 'Römische Geschichte', ref: '22,16,13', year: 'ca. 390', quote: `Im Serapeum seien unschätzbare Bibliotheken gewesen (Perfekt: fuerunt); 700.000 Bände seien im Alexandrinischen Krieg unter dem Diktator Caesar verbrannt.`, status: 'paraphrase', note: 'Die Vergangenheitsform wird häufig so gedeutet, dass zu Ammians Zeit dort keine große Bibliothek mehr bestand; die Deutung ist nicht unumstritten.' },
      { kind: 'kirchenvater', author: 'Orosius', work: 'Geschichte gegen die Heiden', ref: '6,15,32', year: 'ca. 417', quote: `Bis heute gebe es in Tempeln Bücherschränke, die er selbst gesehen habe; sie seien, wie man berichte, von unseren Leuten zu unserer Zeit geplündert und geleert worden.`, status: 'paraphrase', note: 'Ehrlich nennen: möglicher Hinweis auf christliche Plünderung von Tempelbibliotheken; Bezug und Umfang unklar.' },
      { kind: 'gegner', author: 'Carl Sagan', work: 'Cosmos', ref: 'Kap. 13', year: '1980', quote: `Sagan verbindet den Mord an Hypatia mit dem Ende der Bibliothek und dem Niedergang der antiken Wissenschaft; die letzten Reste der Bibliothek seien bald nach ihrem Tod zerstört worden.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Zuerst ehrlich: Ja, Hypatia wurde 415 von einem christlichen Mob ermordet – ein Verbrechen, das schon der christliche Historiker Sokrates als Schande für Kyrill und die Kirche verurteilte. Aber sie starb nicht „für die Wissenschaft", sondern in einem politischen Machtkampf zwischen Präfekt und Bischof; sie hatte selbst christliche Schüler, darunter einen späteren Bischof. Und die große Bibliothek war zu ihrer Zeit längst verschwunden – nach Caesars Brand und Aurelians Zerstörung des Palastviertels. Bei der Zerstörung des Serapeums 391 erwähnt keine antike Quelle verbrannte Bücher.`,
  keyPoints: [
    `**Zugeständnis ohne Ausflüchte:** Hypatia wurde von Christen ermordet. Das war Sünde und Verbrechen – so urteilte schon der Christ Sokrates (KG VII,15).`,
    `**Politik, nicht Wissenschaft:** Machtkampf zwischen Präfekt Orestes und Bischof Kyrill; Hypatia galt als Hindernis einer Versöhnung. Sie hatte christliche Schüler (Synesios, später Bischof).`,
    `**Kyrills Rolle:** Eine Anordnung ist nicht belegt; Verantwortung für ein Klima der Gewalt ist ernsthaft zu diskutieren. Die koptische Kirche verehrt ihn für seine Christologie, nicht für jede Tat seines Umfelds.`,
    `**Die große Bibliothek war längst untergegangen:** Brand unter Caesar (48 v. Chr.), Ende der Förderung, Zerstörung des Bruchion unter Aurelian (um 272).`,
    `**Serapeum 391:** Zerstörung des Tempels nach heidnischer Gewalt gegen Christen; keine der fünf antiken Quellen nennt Bücher. Ehrlich: Orosius erwähnt leere Bücherschränke in Tempeln.`,
    `**Weitere Mythen:** „Agora" (2009) ist Fiktion; die Umar-Legende stammt aus dem 13. Jh.; die Wissenschaft in Alexandrien ging nach 415 weiter (Johannes Philoponos).`,
  ],
  argument: {
    name: 'Trennung von Tatsache und Mythos',
    premises: [
      { text: `P1: Hypatia wurde 415 von einem christlichen Mob ermordet.`, support: `Sokrates Scholastikos, KG VII,15 – ein christlicher Zeitgenosse. Diese Tatsache wird ohne Einschränkung zugestanden.` },
      { text: `P2: Ihr Tod hatte politische Ursachen und beendete weder die Bibliothek noch die alexandrinische Wissenschaft.`, support: `Sokrates nennt den Konflikt Orestes–Kyrill als Ursache; die Bibliothek war längst untergegangen; Philosophie und Wissenschaft in Alexandrien blühten bis ins 6./7. Jh. (Ammonios Hermeiou, Johannes Philoponos, Olympiodoros).` },
      { text: `P3: Für eine Vernichtung der Bibliothek durch Christen 391 gibt es keine antike Quelle.`, support: `Rufinus, Sokrates, Sozomenos, Theodoret und Eunapios schweigen über Bücher; Ammianus spricht in der Vergangenheit.` },
    ],
    conclusion: `Der Mord an Hypatia ist ein reales christliches Versagen; die Erzählung „Christen vernichteten die antike Wissenschaft und die Bibliothek" ist dagegen ein moderner Mythos.`,
  },
  voices: [
    {
      person: 'sokrates-scholastikos',
      role: 'als christlicher Kirchenhistoriker und Zeitzeuge der Epoche',
      text: `Sokrates, ein Laie aus Konstantinopel, schrieb seine Kirchengeschichte nur gut zwei Jahrzehnte nach der Tat. Er schildert Hypatia mit großer Hochachtung: Sie habe alle Philosophen ihrer Zeit übertroffen, sei von Besuchern aus allen Richtungen aufgesucht worden und habe mit Würde und Selbstbeherrschung auch in der Gegenwart von Amtsträgern gesprochen. Den Mord führt er auf Eifersucht und politische Verleumdung zurück und benennt die Täter: eine Menge unter dem Lektor Petrus. Sein Urteil ist unmissverständlich: Die Tat brachte Schmach über Kyrill und die ganze alexandrinische Kirche, und nichts sei dem Geist des Christentums fremder. Für die Apologetik ist Sokrates ein Schlüsselzeuge – nicht, um zu entlasten, sondern weil er zeigt, dass Christen selbst die Tat als Verrat am Evangelium erkannten.`,
      sources: [
        { kind: 'kirchenvater', author: 'Sokrates Scholastikos', work: 'Kirchengeschichte', ref: 'VII,15', year: 'ca. 439', quote: `Hochachtung für Hypatias Gelehrsamkeit und Würde; Bericht über die Ermordung durch eine Menge unter dem Lektor Petrus; Verurteilung der Tat.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'hart',
      role: 'als Kritiker populärer Geschichtsmythen',
      text: `Hart untersucht in „Atheist Delusions" ausführlich die Legenden um das Serapeum und Hypatia. Er bestreitet nicht, dass Christen Gewalt verübten, besteht aber darauf, dass die Quellen gelesen werden, wie sie sind: Im Serapeum gibt es keinen Beleg für eine große Bibliothek im Jahr 391; Hypatia war Opfer eines städtischen Machtkampfes, in dem auch heidnische und jüdische Gruppen Gewalt übten; und die antike Wissenschaft wurde nicht von Christen beendet, sondern von christlichen Gelehrten in Alexandrien, Konstantinopel und den Klöstern weitergetragen. Die Sagan-Erzählung sei weniger Geschichtsschreibung als Mythenbildung.`,
      sources: [
        { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'Atheist Delusions', year: '2009', quote: `Kritik der Legenden über die Zerstörung der Bibliothek und den Tod Hypatias als Symbole eines angeblichen christlichen Kriegs gegen die Vernunft.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'james-hannam',
      role: 'als Wissenschaftshistoriker',
      text: `Hannam hat die Quellen zum Schicksal der Bibliothek von Alexandrien zusammengestellt und kommt zu einem nüchternen Ergebnis: Die große Bibliothek verfiel über Jahrhunderte – durch Brände, Kriege, das Ende königlicher Förderung und die begrenzte Haltbarkeit von Papyrus, der regelmäßig neu abgeschrieben werden musste. Für ein dramatisches „Ende" durch Christen 391 oder durch Araber 642 fehlen zeitgenössische Belege. Gerade weil die Geschichte so oft als Waffe benutzt wird, plädiert er für Genauigkeit.`,
      sources: [
        { kind: 'fachliteratur', author: 'James Hannam', work: 'The Mysterious Fate of the Great Library of Alexandria (Essay, Bede\'s Library)', quote: `Der Untergang der Bibliothek war ein langsamer Prozess; dramatische Zerstörungserzählungen sind spät oder unbelegt.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'hypatia-fuer-wissenschaft',
      objection: `Christen haben Hypatia ermordet, die letzte große Wissenschaftlerin Alexandriens – weil sie für Wissenschaft, Vernunft und freies Denken stand. Kyrill steckte dahinter.`,
      objectionBy: 'Carl Sagan',
      answer: `Ja, Christen haben Hypatia ermordet – das war ein Verbrechen, und ich beschönige nichts. Schon der christliche Historiker Sokrates verurteilte die Tat als Schande für Kyrill und die ganze Kirche. Aber sie starb nicht, weil sie Wissenschaft betrieb, sondern weil man sie in einem politischen Streit zwischen Präfekt Orestes und Bischof Kyrill für das Hindernis einer Versöhnung hielt. Sie hatte christliche Schüler, darunter Synesios, der später Bischof wurde.`,
      followUps: [
        {
          id: 'kyrill-schuldig',
          objection: `Damaskios berichtet, dass Kyrill vor Neid platzte, als er die Menschenmenge vor Hypatias Haus sah, und ihren Tod plante. Kyrill ist der Mörder.`,
          objectionBy: 'Edward Gibbon',
          answer: `Damaskios schrieb rund hundert Jahre später als heidnischer Philosoph mit erklärter Feindschaft gegen die Christen; Sokrates, näher an den Ereignissen und selbst Christ, nennt keinen Befehl Kyrills, aber er sagt, die Tat habe Schmach über ihn gebracht. Ehrlich ist: Kyrill trägt Verantwortung für das Klima. Er hatte schon die Vertreibung der Juden angeführt und wollte den Mönch Ammonios, der den Präfekten verletzt hatte, als Märtyrer ehren. Eine direkte Anordnung ist nicht belegt – eine moralische Mitverantwortung lässt sich nicht wegreden.`,
          sources: [
            { kind: 'sonstiges', author: 'Damaskios', work: 'Leben des Isidoros (Fragment in der Suda, Art. „Hypatia")', year: 'frühes 6. Jh.', quote: `Kyrill sei beim Anblick der vielen Menschen vor Hypatias Haus von Neid ergriffen worden und habe ihren Tod betrieben.`, status: 'paraphrase', note: 'Späte, heidnische und gegen Kyrill feindliche Quelle.' },
          ],
          followUps: [
            {
              id: 'kyrill-heiliger',
              objection: `Und diesen Mann verehrt ihr Kopten als Heiligen und „Säule des Glaubens"!`,
              objectionBy: 'Edward Gibbon',
              answer: `Die Kirche verehrt Kyrill wegen seiner Lehre über Christus und die Gottesgebärerin, die das Konzil von Ephesus bestätigte – nicht für die Gewalt in seiner Stadt. Heilige sind keine Fehlerlosen: Petrus verleugnete Christus, Paulus verfolgte die Kirche, David war Ehebrecher und Mörder. Die Kirche hat den Mord an Hypatia nie gutgeheißen. Ich sage klar: Soweit Kyrills Umfeld Gewalt förderte oder duldete, war das Sünde.`,
              followUps: [
                {
                  id: 'johannes-nikiu-feiert',
                  objection: `Euer eigener koptischer Bischof Johannes von Nikiu nennt Hypatia eine Zauberin, feiert ihren Tod und lobt Kyrill als „neuen Theophilus". Das ist die echte koptische Haltung.`,
                  objectionBy: 'Kritiker in der Debatte',
                  answer: `Das stimmt, und dieser Text ist beschämend – ich verschweige ihn nicht. Aber Johannes schrieb über 250 Jahre nach der Tat, als parteiischer Chronist; er ist keine Lehrautorität der Kirche. Der frühere christliche Zeuge Sokrates urteilte genau umgekehrt. Maßstab der Kirche ist das Evangelium, nicht jede Meinung eines Chronisten – und nach dem Evangelium ist Mord Sünde (Ex 20,13), auch wenn ein Bischof ihn später rechtfertigte.`,
                  sources: [
                    { kind: 'koptisch', author: 'Johannes von Nikiu', work: 'Chronik', ref: '84,87–88', year: 'Ende 7. Jh.', quote: `In jenen Tagen erschien in Alexandrien eine Philosophin, eine Heidin namens Hypatia; sie widmete sich allezeit der Magie, den Astrolabien und Musikinstrumenten und verführte viele Menschen durch satanische Listen.`, original: `And in those days there appeared in Alexandria a female philosopher, a pagan named Hypatia, and she was devoted at all times to magic, astrolabes and instruments of music, and she beguiled many people through (her) Satanic wiles.`, translation: 'R. H. Charles (1916, aus dem Äthiopischen), dt. eigene Übersetzung', status: 'verbatim', note: 'Feindliche, späte Darstellung; erhalten nur in äthiopischer Übersetzung (1602) einer arabischen Fassung.' },
                  ],
                },
              ],
            },
            {
              id: 'parabalani',
              objection: `Die Mörder waren Kyrills Schlägertruppe, die Parabalani.`,
              objectionBy: 'Carl Sagan',
              answer: `Sokrates nennt als Anführer einen Lektor namens Petrus und spricht von einer Menge; die Parabalani erwähnt er an dieser Stelle nicht ausdrücklich. Ehrlich ist aber: Ein kaiserliches Gesetz von 416 beschränkte ihre Zahl und stellte sie unter die Aufsicht des Präfekten – die Behörden sahen also kirchliche Gruppen als Teil des Gewaltproblems. Das bestätigt, dass die Kirche Alexandriens damals eine Mitverantwortung für die Gewalt in der Stadt trug.`,
              sources: [
                { kind: 'sonstiges', work: 'Codex Theodosianus', ref: '16,2,42', year: '416', quote: `Beschränkung der Parabalani in Alexandrien auf 500 und Unterstellung unter den Präfekten; Verbot, öffentliche Schauspiele und Gerichtssitzungen zu besuchen.`, status: 'paraphrase' },
              ],
            },
          ],
        },
        {
          id: 'christen-gegen-philosophie',
          objection: `Der Mord zeigt den Hass des Christentums auf Philosophie und Wissenschaft. Mit Hypatia starb die antike Wissenschaft.`,
          objectionBy: 'Carl Sagan',
          answer: `Die Fakten widersprechen: Alexandrien blieb noch zwei Jahrhunderte ein Zentrum der Philosophie und Wissenschaft – unter christlicher Herrschaft lehrten dort Ammonios Hermeiou und Olympiodoros, und der Christ Johannes Philoponos kritisierte im 6. Jahrhundert die Physik des Aristoteles mit Ideen, die man als Vorläufer der Impetustheorie betrachtet. Die alexandrinische Kirche selbst hatte mit Clemens, Origenes und Didymus eine große Gelehrtentradition.`,
          followUps: [
            {
              id: 'philoponos-ausnahme',
              objection: `Philoponos ist eine Ausnahme, und er wurde später selbst als Ketzer verurteilt.`,
              objectionBy: 'Richard Carrier',
              answer: `Er wurde wegen theologischer Lehren (über die Dreieinigkeit) verurteilt, nicht wegen seiner Physik – seine Kritik an Aristoteles wurde gelesen, ins Arabische übersetzt und in der Renaissance wieder aufgegriffen. Und er ist nicht allein: Die Überlieferung fast der gesamten antiken Wissenschaft – Euklid, Ptolemäus, Aristoteles – verdanken wir christlichen Abschreibern in Byzanz und in Klöstern sowie arabischen Übersetzern, oft Christen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'bibliothek-391',
      objection: `391 ließ Patriarch Theophilus das Serapeum zerstören – und damit die Bibliothek von Alexandrien, den größten Wissensschatz der Antike.`,
      objectionBy: 'Carl Sagan',
      answer: `Die große Bibliothek war da längst Geschichte: Plutarch, Seneca und Cassius Dio berichten von Bränden unter Caesar 48 v. Chr.; die königliche Förderung endete mit den Ptolemäern; das Palastviertel Bruchion wurde um 272 unter Aurelian verwüstet. Die Zerstörung des Serapeums 391 beschreiben fünf antike Quellen – darunter der Augenzeuge Rufinus und der heidnische Eunapios. Keine erwähnt Bücher. Ammianus, der kurz vorher schrieb, spricht von den Bibliotheken des Serapeums in der Vergangenheitsform.`,
      sources: [
        { kind: 'kirchenvater', author: 'Rufinus von Aquileia', work: 'Kirchengeschichte', ref: 'XI,22–30', year: 'ca. 402', quote: `Augenzeugenbericht: Heiden unter dem Philosophen Olympios verschanzten sich im Serapeum, nahmen Christen als Geiseln und töteten einige; nach dem kaiserlichen Bescheid wurde der Tempel samt Serapisstatue zerstört.`, status: 'paraphrase' },
        { kind: 'sonstiges', author: 'Plutarch', work: 'Caesar', ref: '49', year: 'ca. 100 n. Chr.', quote: `Im Alexandrinischen Krieg griff ein Feuer von den Werften über und zerstörte die große Bibliothek.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'tochterbibliothek',
          objection: `Im Serapeum war aber nachweislich die Tochterbibliothek. Wer das Gebäude zerstört, zerstört auch die Bücher.`,
          objectionBy: 'Tim O\'Neill (als Diskussionspunkt)',
          answer: `In ptolemäischer Zeit gab es dort eine Tochterbibliothek, das ist richtig. Ob 391 noch nennenswerte Bestände vorhanden waren, wissen wir nicht – Ammianus' Vergangenheitsform deutet eher auf nein. Möglich ist ein Verlust; belegt ist er nicht. Ehrlich gestehe ich zu: Die Zerstörung eines der prächtigsten Tempel der Antike war ein kultureller Verlust, und sie geschah in einem Klima der Gewalt – auch wenn die Heiden zuvor christliche Geiseln getötet hatten.`,
          followUps: [
            {
              id: 'orosius-belastet',
              objection: `Orosius sah um 417 leere Bücherschränke in Tempeln, die „von unseren Leuten zu unserer Zeit" geleert worden seien. Das ist ein christliches Geständnis!`,
              objectionBy: 'Tim O\'Neill (als Diskussionspunkt)',
              answer: `Das ist der stärkste Hinweis der Gegenseite, und ich nenne ihn fair. „Unsere Leute" kann Christen oder einfach Zeitgenossen meinen, und Orosius spricht allgemein von Tempeln. Selbst in der ungünstigsten Lesart belegt er geplünderte Tempelbücherschränke – nicht die Vernichtung der „großen Bibliothek" mit Hunderttausenden Rollen, von der Sagan erzählt. Genauigkeit ist hier keine Ausrede, sondern Redlichkeit.`,
              followUps: [
                {
                  id: 'trotzdem-zerstoerung',
                  objection: `Trotzdem: Christen haben mit kaiserlicher Rückendeckung Tempel zerstört und heidnisches Kulturgut vernichtet.`,
                  objectionBy: 'Richard Carrier',
                  answer: `Ja, das ist wahr, und es gehört zur ehrlichen Kirchengeschichte: Im späten 4. Jahrhundert wurden Tempel zerstört, manchmal gewaltsam, und Kunstwerke gingen verloren. Zugleich ist es eine Tatsache, dass fast alle antiken Texte, die wir heute lesen – Homer, Platon, Aristoteles, Euklid, Ptolemäus –, nur deshalb erhalten sind, weil Christen sie über tausend Jahre abschrieben. Beides gehört zum vollständigen Bild.`,
                },
              ],
            },
          ],
        },
        {
          id: 'theophilus-koptischer-papst',
          objection: `Theophilus war doch euer koptischer Papst! Da könnt ihr euch nicht herausreden.`,
          objectionBy: 'Edward Gibbon',
          answer: `Ja, Theophilus war der 23. Papst von Alexandrien, und ich rede mich nicht heraus. Er war ein machtbewusster Kirchenführer; Historiker beurteilen ihn kritisch, auch wegen seiner Rolle bei der Absetzung des Johannes Chrysostomus. Beim Serapeum handelte er mit kaiserlicher Zustimmung nach heidnischer Gewalt gegen Christen – ein Beleg für eine Bücherverbrennung fehlt. Nicht jede Handlung eines Patriarchen ist heilig; die Kirche misst ihre Hirten am Evangelium.`,
        },
      ],
    },
    {
      id: 'kalif-umar',
      objection: `Dann waren es eben die Araber: Kalif Umar ließ 642 die Bücher verbrennen – sechs Monate lang heizten sie damit die Bäder.`,
      objectionBy: 'Populäre Darstellung',
      answer: `Auch das ist eine Legende: Sie taucht erst rund 550 Jahre später bei Autoren des 13. Jahrhunderts auf (Abd al-Latif al-Baghdadi, Ibn al-Qifti) und lässt den Philosophen Johannes Philoponos auftreten, der Jahrzehnte vorher gestorben war. Der koptische Chronist Johannes von Nikiu, der die arabische Eroberung ausführlich beschreibt, erwähnt nichts dergleichen. Als Christen sollten wir diesen Mythos so wenig gegen Muslime verwenden, wie wir die Sagan-Version gegen uns gelten lassen.`,
      followUps: [
        {
          id: 'wer-dann',
          objection: `Wenn es weder Christen noch Araber waren – wer hat die Bibliothek dann zerstört?`,
          objectionBy: 'Populäre Darstellung',
          answer: `Niemand auf einen Schlag. Sie starb langsam: Brände in Kriegen, das Ende königlicher Förderung, politische Krisen – und Papyrus, der nur einige Jahrzehnte hält und ständig neu abgeschrieben werden musste. Was nicht kopiert wurde, zerfiel. Der Historiker Roger Bagnall spricht deshalb von einer „Bibliothek der Träume": Das Bild eines einzigen großen Brandes ist eine Legende.`,
        },
      ],
    },
    {
      id: 'agora-film',
      objection: `Der Film „Agora" zeigt doch, wie fanatische Christen die Bibliothek stürmen und Hypatia, die kurz davor war, die elliptischen Planetenbahnen zu entdecken, ermorden.`,
      objectionBy: 'Alejandro Amenábar',
      answer: `„Agora" ist ein Spielfilm. Für Hypatias Arbeit an einem heliozentrischen Modell oder an Ellipsen gibt es keine Quelle – die Ellipsen fand Kepler 1609. Der Film zieht die Ereignisse von 391 und 415 zusammen und stellt die Zerstörung von Schriftrollen dar, die keine antike Quelle berichtet. Sogar der atheistische Historiker Tim O'Neill hat den Film als historisch irreführend kritisiert.`,
      sources: [
        { kind: 'fachliteratur', author: 'Tim O\'Neill', work: 'History for Atheists (Blog): Beiträge zu Hypatia, der Bibliothek von Alexandrien und dem Film „Agora"', status: 'paraphrase', url: 'https://historyforatheists.com', note: 'Atheistischer Historiker, der populäre antichristliche Geschichtsmythen widerlegt.' },
      ],
      followUps: [
        {
          id: 'kern-stimmt',
          objection: `Es ist ein Film, aber der Kern stimmt: Fanatiker töteten eine Denkerin.`,
          objectionBy: 'Alejandro Amenábar',
          answer: `Dieser Kern stimmt, und ich bestreite ihn nicht: Fanatische Christen haben eine Frau ermordet. Was nicht stimmt, ist die Rahmung „Christentum gegen Wissenschaft" – und genau diese Rahmung prägt das Bild vieler Zuschauer. Die Wahrheit ist unbequemer für beide Seiten: ein Verbrechen von Christen in einem politischen Konflikt, verurteilt von einem christlichen Historiker, ohne dass die antike Wissenschaft damit endete.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche antike Quelle berichtet, dass 391 im Serapeum Bücher verbrannt wurden?`,
    `Wusstest du, dass der erste Bericht über Hypatias Tod von einem Christen stammt, der die Tat scharf verurteilt?`,
    `Wie passt es zur These vom Hass auf Philosophie, dass Hypatia christliche Schüler hatte und einer davon Bischof wurde?`,
    `Was geschah mit der Bibliothek nach Caesars Brand und Aurelians Zerstörung des Bruchion?`,
    `Warum lehrten in Alexandrien noch 200 Jahre nach Hypatia Philosophen und Wissenschaftler?`,
  ],
  avoid: [
    `Den Mord relativieren („Hypatia war politisch verwickelt") – das erklärt, entschuldigt aber nichts.`,
    `Kyrill pauschal reinwaschen oder Sokrates' Urteil verschweigen.`,
    `Die Umar-Legende gegen Muslime verwenden – sie ist genauso unbelegt.`,
    `Behaupten, Christen hätten nie Tempel zerstört.`,
  ],
  concessions: [
    `Hypatia wurde 415 von einem christlichen Mob ermordet; das war ein Verbrechen.`,
    `Kyrill trägt nach Ansicht vieler Historiker Mitverantwortung für das Klima der Gewalt in Alexandrien; der koptische Chronist Johannes von Nikiu billigte die Tat.`,
    `Christen zerstörten 391 mit kaiserlicher Zustimmung das Serapeum; Orosius bezeugt geleerte Bücherschränke in Tempeln.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Maria Dzielska', work: 'Hypatia of Alexandria', year: '1995', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Edward J. Watts', work: 'Hypatia. The Life and Legend of an Ancient Philosopher', year: '2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Roger S. Bagnall', work: 'Alexandria: Library of Dreams', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'Atheist Delusions', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Hypatia', 'Bibliothek von Alexandrien', 'Kyrill', 'Theophilus', 'Serapeum', 'Agora'],
  related: ['kirchengeschichte-mythen/finsteres-mittelalter-flache-erde', 'kirchengeschichte-mythen/galilei', 'religion-gewalt/religion-verursacht-kriege', 'christentum-gesellschaft/christentum-ohne-nutzen'],
};

export default claim;
