import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'bibel-textvarianten',
  title: `„Die Bibel hat 400.000 Textvarianten – sie ist unzuverlässig."`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Toronto', work: 'Debatten über die Zuverlässigkeit der Bibel' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'Vorträge „Is the Bible God\'s Word?"' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, University of North Carolina (agnostisch)', work: 'Misquoting Jesus (2005)' },
  ],
  steelman: `„Es gibt mehr Textvarianten im Neuen Testament als Wörter im Neuen Testament – Schätzungen reichen von 300.000 bis über 500.000. Keine zwei der über 5.000 griechischen Handschriften stimmen überein. Wir besitzen kein einziges Original, nur Abschriften, die Jahrzehnte oder Jahrhunderte später entstanden. Und wir wissen, dass ganze Abschnitte später hinzugefügt wurden: der Schluss des Markusevangeliums (16,9–20), die Ehebrecherin (Joh 7,53–8,11), der trinitarische Zusatz in 1 Joh 5,7. Wenn so große Stücke nachträglich eingefügt wurden – wie willst du wissen, was sonst noch verändert wurde? Ein Buch mit Hunderttausenden Abweichungen kann nicht Gottes bewahrtes Wort sein."`,
  biblical: {
    summary: `Die Zahl der Varianten ist eine Folge des **Reichtums** an Handschriften: Jede Abweichung in jeder Handschrift wird gezählt – ein Rechtschreibunterschied in 1.000 Handschriften ergibt 1.000 Varianten. Die große Mehrheit sind Schreibweisen, Wortstellungen (im Griechischen bedeutungslos) und offensichtliche Versehen. Nach Daniel Wallace ist weniger als 1 % der Varianten sowohl sinnverändernd als auch ernsthaft ursprungsverdächtig – und **keine** davon berührt eine zentrale Lehre. Die bekannten Zusätze (Mk 16,9–20; Joh 7,53–8,11; 1 Joh 5,7) kennt man gerade *deshalb*, weil ältere Handschriften sie nicht haben; moderne Bibeln kennzeichnen sie.`,
    detail: `**Was die Bibel selbst erwartet:** Gott bewahrt sein Wort (Jes 40,8; Mt 24,35) – aber die Schrift behauptet nirgends, dass jeder Abschreiber unfehlbar sei.

**Typen von Varianten (nach Wallace):**
1. Rechtschreibung und Unsinnsfehler (die große Mehrheit) – etwa das „bewegliche Ny" oder Schreibvarianten von Namen.
2. Änderungen ohne Einfluss auf die Übersetzung – Synonyme, Artikel bei Eigennamen, Wortstellung („Christus Jesus"/„Jesus Christus").
3. Sinnvolle, aber nicht ernsthaft ursprungsverdächtige Lesarten – Varianten in einer einzigen späten Handschrift.
4. Sinnvolle und ernsthaft ursprungsverdächtige Lesarten – unter 1 %, z. B. Röm 5,1 („wir haben Frieden" / „lasst uns Frieden haben").

**Für Kopten wichtig:** Der trinitarische Zusatz in 1 Joh 5,7–8 (*Comma Johanneum*) stammt aus der lateinischen Überlieferung. Die griechischen, koptischen und syrischen Handschriften der Alten Kirche haben ihn nicht – und Athanasius und Kyrill haben die Dreieinigkeit ohne ihn aus vielen anderen Stellen begründet.`,
    sources: [
      { kind: 'fachliteratur', author: 'Daniel B. Wallace', work: 'Revisiting the Corruption of the New Testament (Hg.), Einleitung', year: '2011', quote: `Weniger als 1 % der Varianten sind zugleich sinnverändernd und ernsthaft ursprungsverdächtig; keine gefährdet eine Kernlehre.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Peter J. Gurry', work: 'The Number of Variants in the Greek New Testament: A Proposed Estimate, New Testament Studies 62', year: '2016', quote: `Schätzt die Zahl der Varianten (ohne reine Schreibvarianten) auf etwa eine halbe Million – als Folge der großen Zahl an Handschriften.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Jesaja', ref: '40,8', quote: `Das Gras verdorrt, die Blume verwelkt; aber das Wort unsres Gottes bleibt ewiglich.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat Textvarianten nie verschwiegen. Origenes klagte über die Unterschiede der Abschriften und arbeitete an der Hexapla; Hieronymus erstellte die Vulgata, weil die lateinischen Handschriften „fast so viele Textformen wie Exemplare" zeigten; al-As'ad ibn al-'Assal verglich im 13. Jahrhundert koptische, syrische und griechische Vorlagen. Die Kirche bewahrt das Wort nicht, indem sie abweichende Handschriften vernichtet, sondern indem sie sie vergleicht.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Matthäuskommentar', ref: 'XV,14', year: 'um 245', quote: `Die Unterschiede zwischen den Abschriften sind groß geworden, teils durch die Nachlässigkeit, teils durch die Verwegenheit von Schreibern.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Vorrede zu den Evangelien an Papst Damasus', year: '383', quote: `Über die altlateinischen Handschriften: fast so viele Textformen wie Exemplare.`, original: `tot sunt paene quot codices`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Fachwelt – gläubig wie skeptisch – ist sich einig: Das Neue Testament ist der mit Abstand am besten bezeugte Text der Antike (über 5.000 griechische Handschriften, dazu Tausende Übersetzungshandschriften und Väterzitate). Die Zahl der Varianten ist hoch, ihr Gewicht gering. Strittig ist unter Fachleuten vor allem, wie sicher man den „Ausgangstext" an einzelnen Stellen bestimmen kann, nicht, ob die Lehre des Neuen Testaments bewahrt ist. Selbst Bart Ehrman räumt ein, dass wesentliche Glaubensinhalte von den Varianten nicht berührt werden.`,
    sources: [
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Misquoting Jesus (Taschenbuchausgabe, Anhang mit Interview)', quote: `Wesentliche christliche Glaubensinhalte werden von den Textvarianten der neutestamentlichen Überlieferung nicht berührt (Zustimmung zu Metzger).`, original: `essential Christian beliefs are not affected by textual variants in the manuscript tradition of the New Testament`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Bruce M. Metzger / Bart D. Ehrman', work: 'The Text of the New Testament', year: '4. Aufl. 2005', quote: `Darstellung der Handschriftenlage, der Variantenarten und der textkritischen Methode.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die vielen Varianten sind ein Zeichen für die Fülle der Handschriften, nicht für Verfälschung: Jeder Rechtschreibunterschied in jeder Handschrift wird gezählt. Über 99 % sind bedeutungslos oder eindeutig als Fehler erkennbar, und keine einzige Variante ändert eine Lehre des Glaubens – das gibt selbst Bart Ehrman zu. Gerade weil wir so viele Handschriften haben, können wir jeden Fehler erkennen.`,
  keyPoints: [
    `**Viele Handschriften = viele Varianten:** Die Zahl wächst mit jeder neu gefundenen Handschrift – das ist ein Zeichen von Reichtum, nicht von Verfall.`,
    `**Die Art zählt, nicht die Zahl:** Mehrheitlich Rechtschreibung und Wortstellung; unter 1 % sinnvoll *und* ursprungsverdächtig.`,
    `**Keine Lehre hängt an einer Variante:** Kreuz, Auferstehung, Gottheit Christi und Dreieinigkeit sind an Dutzenden unbestrittenen Stellen bezeugt.`,
    `**Zusätze sind bekannt und gekennzeichnet:** Mk 16,9–20, Joh 7,53–8,11 und 1 Joh 5,7 werden in jeder wissenschaftlichen Ausgabe markiert.`,
    `**Frühe Kontrollpunkte:** Papyri des 2./3. Jahrhunderts (P46, P66, P75) zeigen denselben Text wie die großen Kodizes – P75 und Codex Vaticanus stimmen auffallend eng überein.`,
  ],
  voices: [
    {
      person: 'wallace',
      role: 'als Textkritiker und Gründer des Center for the Study of New Testament Manuscripts',
      text: `Wallace hat Tausende Handschriften fotografiert und die Varianten klassifiziert. Sein Fazit: Die meisten Varianten sind trivial; ein kleiner Bruchteil ist bedeutsam und plausibel, und keine einzige gefährdet eine Grundlehre. Er betont, dass die Zahl der Varianten nur wegen der Fülle der Handschriften so hoch ist – bei einem antiken Klassiker mit fünf Handschriften gäbe es wenige Varianten, aber auch kaum Kontrollmöglichkeiten.`,
      sources: [
        { kind: 'fachliteratur', author: 'Daniel B. Wallace', work: 'Debatten mit Bart Ehrman (u. a. 2008 und 2011) und Beiträge in „Revisiting the Corruption of the New Testament"', quote: `Klassifizierung der Varianten; weniger als 1 % sinnverändernd und ursprungsverdächtig.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'metzger',
      role: 'als Textkritiker',
      text: `Metzger, Lehrer Ehrmans, hat die Methoden der Textkritik ausgearbeitet: äußere Kriterien (Alter, Verbreitung und Qualität der Handschriften) und innere Kriterien (was ein Schreiber wahrscheinlich änderte, was der Autor wahrscheinlich schrieb). Mit diesen Methoden lassen sich die allermeisten Varianten eindeutig entscheiden. Sein Kommentar zum griechischen Neuen Testament legt jede bedeutende Entscheidung offen – Textkritik ist ein transparentes Verfahren, kein Geheimwissen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'A Textual Commentary on the Greek New Testament', year: '2. Aufl. 1994', quote: `Offenlegung und Begründung der textkritischen Entscheidungen des UBS-Textes.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'origenes',
      role: 'als erster großer Textkritiker der Kirche (Alexandrien)',
      text: `Origenes ist ein Beispiel für die Ehrlichkeit der alexandrinischen Tradition: Er kannte Abweichungen zwischen Handschriften, benannte sie und versuchte durch Vergleich den besseren Text zu finden. Die Kirche hat Varianten nicht vertuscht, sondern erforscht – lange bevor es moderne Textkritik gab.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Matthäuskommentar', ref: 'XV,14', year: 'um 245', quote: `Klage über die Unterschiede der Abschriften und Bemühen um Korrektur.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'pj-williams',
      role: 'als Neutestamentler (Tyndale House)',
      text: `Williams zeigt, dass die Evangelien schon im 2. Jahrhundert weit verbreitet und in verschiedenen Regionen kopiert wurden. Dadurch entstanden unabhängige Überlieferungsstränge, die sich gegenseitig kontrollieren: Ein Fehler in Ägypten wird durch die Überlieferung in Syrien oder Italien sichtbar. Ein so breit gestreuter Text lässt sich nicht unbemerkt umschreiben.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter J. Williams', work: 'Can We Trust the Gospels?', year: '2018', quote: `Die breite, frühe Streuung der Evangelienhandschriften ermöglicht die Kontrolle des Textes.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'mehr-varianten-als-woerter',
      objection: `Es gibt mehr Varianten als Wörter im Neuen Testament! Wie kann so ein Text zuverlässig sein?`,
      objectionBy: 'Shabir Ally',
      answer: `Weil die Zahl nichts über das Gewicht sagt. Wenn 1.000 Handschriften ein Wort anders schreiben, zählt das als 1.000 Varianten – obwohl sich der Sinn nicht ändert. Die meisten Varianten sind Rechtschreibung und Wortstellung; weniger als 1 % sind sinnvoll *und* ernsthaft ursprungsverdächtig. Und keine einzige ändert, was Christen glauben.`,
      questionsBack: [
        `Kannst du mir eine einzige Variante nennen, die eine christliche Lehre ändert – Kreuz, Auferstehung, Gottheit Christi?`,
      ],
      followUps: [
        {
          id: 'woher-weisst-du-ein-prozent',
          objection: `Woher willst du wissen, dass das eine Prozent nichts Wichtiges betrifft? Vielleicht stand dort ursprünglich etwas ganz anderes.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Weil wir diese Stellen kennen und offen diskutieren. Die bekanntesten sind etwa Röm 5,1 („wir haben Frieden" oder „lasst uns Frieden haben") oder Joh 1,18 („der eingeborene *Gott*" oder „der eingeborene *Sohn*"). Schau dir das letzte Beispiel an: Selbst die „theologisch interessante" Variante schwankt zwischen zwei Formulierungen, die beide die einzigartige göttliche Würde Jesu ausdrücken.`,
          detail: `Die Gottheit Christi steht nicht an einer einzigen Stelle, sondern an vielen textlich unbestrittenen: Joh 1,1; 20,28; Phil 2,6; Kol 2,9; Hebr 1,8; Tit 2,13. Eine Lehre, die an Dutzenden Stellen bezeugt ist, kann nicht durch eine Variante an einer Stelle entstanden sein.`,
          followUps: [
            {
              id: 'ehrman-beispiele-lehre',
              objection: `Ehrman nennt aber Stellen, an denen Schreiber den Text aus theologischen Gründen geändert haben – etwa Lk 22,43–44 oder Hebr 2,9. Das betrifft die Lehre!`,
              objectionBy: 'Bart D. Ehrman (aufgegriffen von Shabir Ally)',
              answer: `Diese Stellen betreffen die Deutung *einer* Passage – etwa ob Lukas Jesu Todesangst schildert –, nicht die Lehre der Kirche insgesamt. Und dass wir diese Änderungen erkennen, liegt gerade daran, dass andere Handschriften den älteren Text bewahren. Ehrman selbst sagt, wesentliche Glaubensinhalte seien nicht betroffen.`,
              detail: `Ausführlich: Claim „Sogar christliche Gelehrte wie Bart Ehrman sagen, die Bibel sei verfälscht".`,
            },
          ],
        },
      ],
    },
    {
      id: 'spaetere-zusaetze',
      objection: `Der Markusschluss, die Ehebrecherin, 1 Joh 5,7 – ganze Abschnitte wurden hinzugefügt. Wenn das passiert ist, woher weißt du, dass nicht noch mehr eingefügt wurde?`,
      objectionBy: 'Zakir Naik',
      answer: `Wir wissen von diesen Zusätzen, *weil* die älteren Handschriften sie nicht haben – das ist der Beweis, dass die Textkritik funktioniert. Jede wissenschaftliche Bibelausgabe kennzeichnet sie. Wäre noch mehr eingefügt worden, würde man es auf dieselbe Weise sehen. Und keiner dieser Abschnitte ist die einzige Grundlage einer Lehre: Die Auferstehungserscheinungen stehen in den anderen Evangelien, die Dreieinigkeit in Mt 28,19 und vielen anderen Stellen.`,
      followUps: [
        {
          id: 'comma-johanneum-trinitaet',
          objection: `Aber die Kirche hat 1 Joh 5,7 jahrhundertelang als Beweis für die Trinität benutzt – das zeigt, dass sie die Bibel für ihre Lehre manipuliert hat.`,
          objectionBy: 'Shabir Ally',
          answer: `Der Zusatz steht in späten lateinischen Handschriften. Die griechischen, koptischen und syrischen Kirchen hatten ihn nie. Athanasius, Kyrill von Alexandrien und die Kappadokier haben die Dreieinigkeit verteidigt, ohne diesen Vers zu kennen. Unsere koptische Kirche brauchte ihn nie – und es waren christliche Gelehrte, die den Zusatz als solchen erkannten.`,
          followUps: [
            {
              id: 'kirche-hat-gefaelscht',
              objection: `Also hat jemand in der Kirche bewusst gefälscht. Das gibst du zu.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Es ist wahrscheinlich, dass eine Randbemerkung eines lateinischen Auslegers in den Text geriet – ob bewusst oder unbewusst, ist offen. Aber das ist kein Beweis für eine kirchenweite Verfälschung, sondern das Gegenteil: Ein Zusatz in einem Zweig der Überlieferung ist durch die anderen Zweige sofort erkennbar. Eine Kirche, die ihre Bibel fälschen wollte, hätte ihn überall eingefügt. Das ist nicht geschehen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'keine-originale-varianten',
      objection: `Ihr habt kein einziges Original. Eure ältesten vollständigen Handschriften stammen aus dem 4. Jahrhundert – 300 Jahre nach Jesus.`,
      objectionBy: 'Shabir Ally',
      answer: `Für kein antikes Werk besitzen wir Originale. Bei Tacitus oder Caesar liegen zwischen Abfassung und ältesten Handschriften oft 800 bis 1.000 Jahre, und es gibt nur eine Handvoll Abschriften. Beim Neuen Testament haben wir Papyri aus dem 2. und 3. Jahrhundert und über 5.000 griechische Handschriften. Kein antiker Text ist besser bezeugt.`,
      followUps: [
        {
          id: 'stille-post',
          objection: `Kopien von Kopien von Kopien – das ist wie Stille Post. Am Ende kommt etwas ganz anderes heraus.`,
          objectionBy: 'verbreiteter Einwand',
          answer: `Stille Post hat eine einzige Kette, man flüstert, und niemand darf nachfragen. Die Bibelüberlieferung hat Tausende Ketten in vielen Ländern und Sprachen, und frühe Glieder dieser Ketten sind erhalten. Man kann also jederzeit zurückgehen und vergleichen. P75 aus dem späten 2. oder frühen 3. Jahrhundert und Codex Vaticanus aus dem 4. Jahrhundert stimmen so eng überein, dass dazwischen kaum Veränderung stattgefunden haben kann.`,
          detail: `Siehe auch Claim „Mündliche Überlieferung ist wie Stille Post" im Topic „Zuverlässigkeit des Neuen Testaments".`,
        },
      ],
    },
    {
      id: 'vereinheitlicht-im-4-jh',
      objection: `Im 4. Jahrhundert wurde der Text unter Konstantin vereinheitlicht. Eure großen Kodizes zeigen nur die „Staatsbibel".`,
      objectionBy: 'verbreiteter Einwand',
      answer: `Die Papyri von *vor* Konstantin – P46 mit den Paulusbriefen, P66 und P75 mit Johannes und Lukas – haben denselben Text wie die späteren Kodizes. Und die Kirchen außerhalb des Römischen Reiches, etwa in Persien, übernahmen keine „Staatsbibel". Eine Vereinheitlichung hätte sichtbare Spuren hinterlassen: einen Bruch zwischen vor- und nachkonstantinischen Handschriften. Den gibt es nicht.`,
      questionsBack: [
        `Welche Lehre stand in den Papyri vor Konstantin anders als in den Kodizes danach?`,
      ],
    },
  ],
  questionsToAsk: [
    `Welche Variante ändert deiner Meinung nach eine christliche Lehre?`,
    `Weißt du, wie Varianten gezählt werden?`,
    `Woher wissen wir, dass Mk 16,9–20 ein Zusatz ist – wenn nicht durch die Handschriften selbst?`,
    `Würdest du dieselben Maßstäbe an die Überlieferung des Korans anlegen?`,
  ],
  avoid: [
    `Nicht behaupten, die Bibel habe „keine Fehler in den Handschriften" oder der Text sei „zu 100 % identisch". Das stimmt nicht und ist sofort widerlegbar.`,
    `Nicht behaupten, „99,5 % des Textes sind sicher" ohne Quelle – solche Prozentzahlen werden unterschiedlich berechnet. Sprich lieber vom Gewicht der Varianten.`,
    `Nicht sofort mit „Der Koran hat auch Varianten" kontern. Das ist berechtigt, aber erst nachdem du die eigene Position sachlich verteidigt hast.`,
  ],
  concessions: [
    `Es gibt Hunderttausende Varianten, und einige Abschnitte (Mk 16,9–20; Joh 7,53–8,11; 1 Joh 5,7b–8a) gehörten nach heutigem Wissensstand nicht zum ursprünglichen Text.`,
    `An einigen Stellen bleibt der ursprüngliche Wortlaut unsicher – aber keine dieser Stellen trägt eine Lehre allein.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Bruce M. Metzger / Bart D. Ehrman', work: 'The Text of the New Testament', year: '4. Aufl. 2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Daniel B. Wallace (Hg.)', work: 'Revisiting the Corruption of the New Testament', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Elijah Hixson / Peter J. Gurry (Hg.)', work: 'Myths and Mistakes in New Testament Textual Criticism', year: '2019', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Bibel', 'Textkritik', 'Handschriften', 'Islam'],
  related: [
    'islam-dilemma/das-islamische-dilemma',
    'islam-bibelverfaelschung/ehrman-beweist-verfaelschung',
    'islam-koran/koran-perfekt-bewahrt',
    'neues-testament/nur-kopien-von-kopien',
    'neues-testament/stille-post',
  ],
};

export default claim;
