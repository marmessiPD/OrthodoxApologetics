import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'goedel-und-gott',
  title: `„Gödels Unvollständigkeitssätze haben nichts mit Gott oder dem Geist zu tun."`,
  proponents: [
    { name: 'Torkel Franzén', role: 'Logiker und Informatiker (Luleå)', work: 'Gödel\'s Theorem: An Incomplete Guide to Its Use and Abuse (2005)' },
    { name: 'Solomon Feferman', role: 'Logiker, Stanford, Herausgeber von Gödels Gesammelten Werken', work: '„Penrose\'s Gödelian Argument", Psyche 2 (1995)' },
    { name: 'Hilary Putnam', role: 'Philosoph, Harvard', work: 'Rezension zu Penroses „Shadows of the Mind" (1994/95)' },
    { name: 'Paul Benacerraf', role: 'Philosoph, Princeton', work: '„God, the Devil, and Gödel", The Monist 51 (1967)' },
    { name: 'Douglas Hofstadter', role: 'Kognitionswissenschaftler', work: 'Gödel, Escher, Bach (1979)' },
  ],
  steelman: `Gödels Sätze sind präzise mathematische Ergebnisse über formale Systeme: Jedes widerspruchsfreie, rekursiv axiomatisierbare System, das die Arithmetik enthält, ist unvollständig (es gibt wahre, aber unbeweisbare Sätze) und kann seine eigene Widerspruchsfreiheit nicht beweisen. Mehr sagen sie nicht. Sie gelten nicht für „das Universum", nicht für die Physik, nicht für Moral oder Theologie. Das berühmte Lucas-Penrose-Argument, der menschliche Geist übertreffe jede Maschine, wird von der großen Mehrheit der Logiker abgelehnt: Es setzt voraus, dass wir unsere eigene Widerspruchsfreiheit kennen – doch Menschen sind notorisch widersprüchlich, und wir wissen nicht, welches „Programm" wir sind. Apologeten, die behaupten, Gödel beweise eine Ursache außerhalb des Universums, missbrauchen die Mathematik. Franzén hat solche Fehlanwendungen gesammelt – sie sind Legion.`,
  biblical: {
    summary: `Die Schrift lehrt, dass menschliche Vernunft echt, aber begrenzt ist: „Wir erkennen stückweise" (1 Kor 13,9.12), und Gottes Gedanken übersteigen die unseren (Jes 55,8–9). Paulus staunt über die „Tiefe des Reichtums, beides, der Weisheit und Erkenntnis Gottes" (Röm 11,33). Gödel hat natürlich nichts über Gott bewiesen – aber sein Ergebnis, dass Wahrheit über jedes feste Regelwerk hinausreicht, passt zum biblischen Bild: Der Mensch ist kein geschlossenes System, das sich selbst vollständig begründen könnte.`,
    detail: `- **1 Kor 13,12** „Wir sehen jetzt durch einen Spiegel in einem dunkeln Wort" – Erkenntnis ist real, aber vorläufig.
- **Jes 55,8–9** – Gottes Wege und Gedanken sind „höher" als die menschlichen; nicht irrational, sondern überrational.
- **Röm 11,33** – Unerforschlichkeit als Grund zum Lobpreis, nicht zum Skeptizismus.
- **Vorsicht:** Diese Verse sind keine Vorwegnahme der Logik des 20. Jahrhunderts. Wer „Gödel steht in der Bibel" behauptet, begeht denselben Fehler wie die Koran-Wissenschaftswunder-Apologetik.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '13,12', quote: `Wir sehen jetzt durch einen Spiegel in einem dunkeln Wort; dann aber von Angesicht zu Angesichte. Jetzt erkenne ich's stückweise; dann aber werde ich erkennen, gleichwie ich erkannt bin.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '55,8–9', quote: `Denn meine Gedanken sind nicht eure Gedanken, und eure Wege sind nicht meine Wege, spricht der HERR; sondern soviel der Himmel höher ist denn die Erde, so sind auch meine Wege höher denn eure Wege und meine Gedanken denn eure Gedanken.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '11,33', quote: `O welch eine Tiefe des Reichtums, beides, der Weisheit und Erkenntnis Gottes! Wie gar unbegreiflich sind seine Gerichte und unerforschlich seine Wege!`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die östliche Tradition hat immer zwischen dem erkennbaren Wirken Gottes und seinem unerkennbaren Wesen unterschieden (Basilius gegen Eunomius) und betont, dass der Geist des Menschen auf das Unendliche hin offen ist (Gregor von Nyssa: unendlicher Fortschritt der Seele in Gott). Der Mensch ist nach dieser Sicht weder Maschine noch geschlossenes System, sondern vernunftbegabte Seele nach dem Bild Gottes. Das ist eine theologische Anthropologie, kein Ergebnis der Logik – doch sie macht verständlich, warum christliche Denker Gödels Ergebnis mit Interesse aufnehmen, ohne es zu überdehnen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Brief 234 (an Amphilochius); vgl. Adversus Eunomium', quote: `Wir erkennen Gott aus seinen Wirkweisen (Energien), sein Wesen aber bleibt unzugänglich.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,219–239', quote: `Gott wahrhaft sehen heißt, niemals im Verlangen nach ihm gesättigt zu werden – die Seele schreitet unendlich voran.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `**Was Gödel 1931 bewiesen hat:** (1) Jedes widerspruchsfreie, effektiv axiomatisierte formale System, das die elementare Arithmetik enthält, ist unvollständig. (2) Ein solches System kann seine eigene Widerspruchsfreiheit nicht beweisen. Damit scheiterte Hilberts Programm, die gesamte Mathematik in einem vollständigen, als widerspruchsfrei bewiesenen System zu begründen. **Was daraus für den Geist folgt, ist umstritten.** Gödel selbst formulierte 1951 in seiner Gibbs-Vorlesung eine vorsichtige Disjunktion: Entweder übertrifft der menschliche Geist unendlich jede endliche Maschine, oder es gibt absolut unlösbare zahlentheoretische (diophantische) Probleme – oder beides. Diese Disjunktion gilt unter Logikern als gut begründet; Gödel neigte zur ersten Alternative.`,
    detail: `- **Lucas (1961)** und **Penrose (1989, 1994)** argumentierten stärker: Der Geist sei nachweislich keine Turingmaschine. Die Mehrheit der Logiker (Benacerraf, Putnam, Feferman, Chalmers, Franzén) hält diese stärkere Fassung für nicht schlüssig, vor allem weil sie voraussetzt, dass wir unsere eigene Widerspruchsfreiheit erkennen können.
- **Feferman (2006)** und **Horsten & Welch (Hg., Gödel's Disjunction, 2016)** diskutieren Gödels schwächere Disjunktion als ernsthafte, offene Frage.
- **Stephen Hawking** spekulierte 2002 („Gödel and the End of Physics"), eine endgültige Theorie von allem könnte wegen Gödel unerreichbar sein – eine umstrittene Übertragung.
- **Ehrlicher Gesamtstand:** Gödel beweist weder Gott noch die Seele. Er widerlegt aber den Formalismus und macht die These „Der Geist ist nur ein Algorithmus" zu einer metaphysischen Vermutung mit Kosten, nicht zu einem gesicherten Ergebnis.`,
    sources: [
      { kind: 'wissenschaft', author: 'Kurt Gödel', work: 'Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I', ref: 'Monatshefte für Mathematik und Physik 38 (1931), 173–198', year: '1931', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Kurt Gödel', work: 'Some basic theorems on the foundations of mathematics and their implications (Gibbs Lecture)', ref: 'Collected Works III, S. 310', year: '1951', quote: `Entweder ist die Mathematik in dem Sinn unvervollständigbar, dass ihre evidenten Axiome nie in einer endlichen Regel erfasst werden können – das heißt, der menschliche Geist übertrifft (selbst im Bereich der reinen Mathematik) unendlich die Fähigkeiten jeder endlichen Maschine –, oder es gibt absolut unlösbare diophantische Probleme; wobei nicht ausgeschlossen ist, dass beide Glieder wahr sind.`, original: `Either mathematics is incompletable in this sense, that its evident axioms can never be comprised in a finite rule, that is to say, the human mind (even within the realm of pure mathematics) infinitely surpasses the powers of any finite machine, or else there exist absolutely unsolvable diophantine problems of the type specified …`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Per Websuche geprüft (2026): Wortlaut und Fundstelle (Gibbs Lecture vom 26.12.1951, Collected Works III, S. 304–323, hier S. 310) bestätigt. Gödel fügt in Klammern hinzu, dass auch beide Glieder wahr sein können; er selbst hielt das erste für wahrscheinlicher.' },
      { kind: 'gegner', author: 'Solomon Feferman', work: 'Penrose\'s Gödelian Argument', ref: 'Psyche 2 (1995)', status: 'paraphrase' },
      { kind: 'gegner', author: 'Torkel Franzén', work: 'Gödel\'s Theorem: An Incomplete Guide to Its Use and Abuse', year: '2005', quote: `Franzén dokumentiert zahlreiche Fehlanwendungen der Unvollständigkeitssätze in Theologie, Philosophie und Populärliteratur.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Leon Horsten & Philip Welch (Hg.)', work: 'Gödel\'s Disjunction: The Scope and Limits of Mathematical Knowledge', year: '2016', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'J. R. Lucas', work: 'Minds, Machines and Gödel', ref: 'Philosophy 36 (1961), 112–127', year: '1961', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Da hast du teilweise recht: Gödel beweist nicht Gott, und viele zitieren ihn falsch. Aber drei Dinge stehen fest: Erstens hat Gödel gezeigt, dass mathematische Wahrheit über jedes feste Regelwerk hinausgeht. Zweitens folgerte er selbst: Entweder übertrifft der menschliche Geist jede Maschine, oder es gibt absolut unlösbare mathematische Probleme – „Gödels Disjunktion" ist unter Logikern respektiert. Drittens war Gödel selbst Platonist und Theist. Er taugt nicht als Gottesbeweis, aber er entzieht dem Satz „Der Geist ist nur ein Algorithmus" den Status des Selbstverständlichen.`,
  keyPoints: [
    `**Ehrliches Zugeständnis zuerst:** Die Unvollständigkeitssätze gelten nur für formale Systeme mit Arithmetik – nicht für „das Universum".`,
    `**Wahrheit > Beweisbarkeit:** In jedem solchen widerspruchsfreien System gibt es wahre, aber unbeweisbare Sätze. Das widerlegt den Formalismus und jede Gleichsetzung von Wahrheit mit mechanischer Ableitung.`,
    `**Gödels Disjunktion (1951):** Entweder übertrifft der Geist jede endliche Maschine, oder es gibt absolut unlösbare Probleme. Beide Hörner haben Gewicht – keines ist bequem für einen selbstsicheren Materialismus.`,
    `**Lucas-Penrose ist umstritten** – sag das offen. Die stärkere Fassung wird von den meisten Logikern abgelehnt, die schwächere Disjunktion nicht.`,
    `**Gödel selbst** war mathematischer Realist, glaubte an Gott und an ein Leben nach dem Tod und formulierte einen modallogischen Gottesbeweis – kein Kirchgänger, aber gewiss kein Materialist.`,
  ],
  argument: {
    name: 'Gödels Disjunktion',
    summary: 'Aus den Unvollständigkeitssätzen folgt keine Seele, aber ein Dilemma für den Mechanismus.',
    premises: [
      {
        text: 'P1: Für jedes widerspruchsfreie, effektiv axiomatisierte System F, das die Arithmetik enthält, gibt es wahre arithmetische Sätze, die in F unbeweisbar sind; F kann seine Widerspruchsfreiheit nicht beweisen (Gödel 1931).',
        support: `Mathematisch bewiesenes, unstrittiges Ergebnis.`,
      },
      {
        text: 'P2: Wäre das mathematische Erkenntnisvermögen des Menschen einem solchen System (einer Turingmaschine) gleichwertig, gäbe es mathematische Wahrheiten, die Menschen grundsätzlich niemals erkennen könnten.',
        support: `Das folgt aus P1, angewandt auf das System, das unserem Denken entspräche. Gödel formulierte diese Konsequenz selbst 1951.`,
      },
      {
        text: 'P3: Entweder ist unser mathematisches Erkenntnisvermögen keinem solchen System gleichwertig, oder es gibt absolut unlösbare mathematische Probleme (oder beides).',
        support: `Disjunktive Folgerung aus P1 und P2 – unter Logikern weithin als gültig anerkannt (Feferman 2006; Horsten & Welch 2016).`,
      },
    ],
    conclusion: 'Die These „Der menschliche Geist ist nur ein Algorithmus" ist kein gesichertes Ergebnis, sondern eine metaphysische Annahme, die einen hohen Preis hat (absolute Erkenntnisgrenzen). Gödel selbst hielt die erste Alternative für die wahrscheinlichere.',
  },
  voices: [
    {
      person: 'goedel',
      role: 'als Urheber der Unvollständigkeitssätze',
      text: `Gödel deutete seine Sätze selbst philosophisch – vorsichtig, aber eindeutig antimaterialistisch. In der Gibbs-Vorlesung 1951 formulierte er die Disjunktion zwischen einem Geist, der jede Maschine übersteigt, und absolut unlösbaren Problemen, und er hielt die zweite Möglichkeit für unvereinbar mit seinem Rationalismus. Gegenüber Hao Wang äußerte er die Überzeugung, der Geist sei nicht auf das Gehirn reduzierbar; in Briefen an seine Mutter begründete er seinen Glauben an ein Fortleben nach dem Tod philosophisch.`,
      sources: [
        { kind: 'fachliteratur', author: 'Hao Wang', work: 'A Logical Journey: From Gödel to Philosophy', year: '1996', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Hao Wang', work: 'Reflections on Kurt Gödel', year: '1987', status: 'paraphrase' },
      ],
    },
    {
      person: 'john-lucas',
      role: 'als Oxforder Philosoph',
      text: `Lucas argumentierte 1961, dass für jede Maschine, die als Modell des menschlichen Geistes vorgeschlagen wird, ein Gödelsatz konstruiert werden kann, den die Maschine nicht beweisen, der Mensch aber als wahr erkennen kann – also sei der Geist keine Maschine. In späteren Arbeiten verteidigte er das Argument gegen zahlreiche Einwände, räumte aber ein, dass es ein dialektisches Argument ist: Es zwingt den Mechanisten, seine Maschine konkret zu benennen.`,
      sources: [
        { kind: 'wissenschaft', author: 'J. R. Lucas', work: 'Minds, Machines and Gödel', ref: 'Philosophy 36 (1961), 112–127', status: 'paraphrase', note: 'Die stärkere Lucas-These ist unter Logikern Minderheitsposition.' },
      ],
    },
    {
      person: 'stanley-jaki',
      role: 'als Physiker und Wissenschaftshistoriker',
      text: `Jaki gehörte zu den Ersten, die (1966) auf die Bedeutung Gödels für die Physik hinwiesen: Eine mathematisch formulierte „Theorie von allem" kann nicht zugleich ihre eigene Notwendigkeit und Widerspruchsfreiheit beweisen. Kein physikalisches System kann sich also selbst letztbegründen. Für Jaki verweist diese Unabschließbarkeit darauf, dass das Universum kontingent ist und seinen Grund nicht in sich selbst trägt – eine philosophische, keine mathematische Folgerung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stanley L. Jaki', work: 'The Relevance of Physics', year: '1966', status: 'paraphrase' },
      ],
    },
    {
      person: 'robert-marks',
      role: 'als Informatiker',
      text: `Marks verbindet Gödel mit Turings Halteproblem (1936): Es gibt wohldefinierte Fragen, die kein Algorithmus allgemein entscheiden kann. Für ihn folgt daraus nicht automatisch eine Seele, aber es zeigt, dass „berechenbar" nicht „alles" ist. Er argumentiert, dass menschliche Kreativität, Verstehen und Erleben (Qualia) zu den Dingen gehören, die sich nicht algorithmisch erzeugen lassen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Robert J. Marks II', work: 'Non-Computable You: What You Do That Artificial Intelligence Never Will', year: '2022', status: 'paraphrase' },
      ],
    },
    {
      person: 'feser',
      role: 'als Philosoph des Geistes',
      text: `Feser hält das Argument von James Ross für stärker als Lucas-Penrose: Formale Denkakte (etwa „addieren" im Unterschied zu „quaddieren") sind bestimmt; kein physikalischer Vorgang ist aber in diesem Sinn bestimmt, denn jedes endliche physikalische Verhalten ist mit unendlich vielen verschiedenen Funktionen vereinbar (vgl. Kripkes Wittgenstein-Deutung). Also ist das Denken nicht vollständig physikalisch. Dieses Argument braucht Gödel nicht – es zeigt, dass Christen nicht von einem einzigen umstrittenen Argument abhängen.`,
      sources: [
        { kind: 'fachliteratur', author: 'James F. Ross', work: 'Immaterial Aspects of Thought', ref: 'Journal of Philosophy 89 (1992), 136–150', year: '1992', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Edward Feser', work: 'Kripke, Ross, and the Immaterial Aspects of Thought', ref: 'American Catholic Philosophical Quarterly 87 (2013)', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'nur-formale-systeme',
      objection: `Gödels Sätze gelten nur für formale Systeme mit Arithmetik – nicht für das Universum, nicht für die Physik und schon gar nicht für Gott.`,
      objectionBy: 'Torkel Franzén',
      answer: `Einverstanden. Ich behaupte nicht, dass Gödel etwas über das Universum als Ganzes beweist. Mein Punkt ist enger: Gödel zeigt, dass mathematische Wahrheit über jede mechanische Ableitung hinausgeht, und er selbst folgerte daraus ein ernstes Dilemma für die These, der Geist sei eine Maschine.`,
      followUps: [
        {
          id: 'apologeten-missbrauch',
          objection: `Aber christliche Apologeten behaupten ständig, Gödel beweise, dass das Universum eine Ursache außerhalb seiner selbst braucht.`,
          objectionBy: 'Torkel Franzén',
          answer: `Das ist ein Missbrauch, und ich distanziere mich davon. Das Universum ist kein formales System mit Axiomen. Wer so argumentiert, schadet dem Glauben. Für den Anfang des Universums gibt es eigene, bessere Argumente.`,
          followUps: [
            {
              id: 'warum-dann-goedel',
              objection: `Warum erwähnst du Gödel dann überhaupt?`,
              answer: `Aus drei Gründen: Er hat den Formalismus widerlegt (Wahrheit ist nicht dasselbe wie Ableitbarkeit); seine Disjunktion betrifft direkt die Frage, ob der Geist ein Algorithmus ist; und er widerlegt das Klischee, die größten Logiker seien selbstverständlich Materialisten.`,
              questionsBack: [
                `Wenn ein Satz wahr, aber in keinem festen System beweisbar ist – was macht ihn dann wahr?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'lucas-penrose-widerlegt',
      objection: `Das Lucas-Penrose-Argument ist längst widerlegt (Benacerraf, Putnam, Feferman): Menschen können ihre eigene Widerspruchsfreiheit gar nicht erkennen.`,
      objectionBy: 'Solomon Feferman / Hilary Putnam',
      targetsPremise: 2,
      answer: `Das ist ein ernster Einwand, und ich gebe zu: Die starke Lucas-Penrose-These ist unter Logikern eine Minderheitsmeinung. Aber Gödels eigene, schwächere Disjunktion wird davon nicht berührt – selbst Feferman behandelt sie als ernste offene Frage. Der Mechanist muss sich entscheiden: Geist jenseits jeder Maschine – oder absolute Erkenntnisgrenzen.`,
      followUps: [
        {
          id: 'zweites-horn',
          objection: `Dann nehme ich eben das zweite Horn: Es gibt absolut unlösbare Probleme. Kein Problem für den Materialismus.`,
          objectionBy: 'Hilary Putnam',
          targetsPremise: 3,
          answer: `Das ist eine legitime Wahl – aber sie hat einen Preis: Es gäbe einfache zahlentheoretische Wahrheiten, die kein Mensch je erkennen kann, nicht aus Zeitmangel, sondern grundsätzlich. Und als Maschine könnten wir nie wissen, welche Maschine wir sind. Der Mechanismus wird damit zu einer unbeweisbaren Annahme über uns selbst.`,
          followUps: [
            {
              id: 'kosten-akzeptabel',
              objection: `Diesen Preis zahle ich gern. Erkenntnisbescheidenheit ist eine Tugend.`,
              answer: `Dann sind wir uns einig, dass „Der Geist ist ein Algorithmus" eine Vermutung ist, keine Wissenschaft. Mehr wollte ich mit Gödel nicht zeigen. Die positiven Argumente für die Nichtreduzierbarkeit des Geistes – Bewusstsein, Intentionalität, Bestimmtheit des Denkens (Ross, Feser) – stehen ohnehin auf eigenen Füßen.`,
              questionsBack: [
                `Wenn du nicht weißt, welche Maschine du bist – woher weißt du dann, dass du eine bist?`,
              ],
              followUps: [
                {
                  id: 'seltsame-schleife',
                  objection: `Gödel zeigt sogar, wie Bewusstsein aus Mechanik entsteht: Ein formales System kann sich über Codierung auf sich selbst beziehen. Das Ich ist genau so eine „seltsame Schleife" – ein selbstreferentielles Muster im Gehirn, kein Geist von außen.`,
                  objectionBy: 'Douglas Hofstadter (Gödel, Escher, Bach, 1979; I Am a Strange Loop, 2007)',
                  answer: `Ein schönes Bild – aber eine Analogie, kein Mechanismus. Ein Gödelsatz „spricht über sich selbst" nur **unter einer Deutung**, die ein Mathematiker vornimmt: Für die Maschine ist er eine Zeichenkette wie jede andere. Selbstbezug in einem Code setzt also schon einen Geist voraus, der Bedeutung zuschreibt. Und warum sich eine Rückkopplungsschleife **anfühlen** sollte wie etwas, erklärt das Bild nicht: Thermostate haben auch Rückkopplung.`,
                  detail: `Hofstadter ist einer der brillantesten Vermittler Gödels; man sollte ihn mit Respekt behandeln. Aber sein Programm verschiebt das Problem: Die Gödelisierung funktioniert, weil **wir** Zahlen als Codes für Sätze lesen. Die Bedeutung („Dieser Satz ist unbeweisbar") existiert nicht in den Zahlen selbst, sondern in der Interpretation. Hier setzt John Lucas an: Der Mathematiker kann sich gleichsam „über" jedes System stellen, das ihn darstellen soll, und dessen Gödelsatz als wahr erkennen.

Für deine Debatte genügt: Selbstbezug ist eine notwendige, aber offenkundig keine hinreichende Bedingung für ein Ich.`,
                  voices: [
                    {
                      person: 'john-lucas',
                      role: 'als Philosoph (Oxford), Urheber des Gödel-Arguments gegen den Mechanismus',
                      text: `Lucas argumentierte in „Minds, Machines and Gödel" (1961): Für jede Maschine, die als Modell des menschlichen Geistes vorgeschlagen wird, kann der Mensch einen Satz angeben, den die Maschine nicht beweisen kann, den er selbst aber als wahr erkennt. Lucas räumte ein, dass das Argument voraussetzt, dass der Geist widerspruchsfrei ist, und verteidigte es über Jahrzehnte gegen Einwände – als „dialektisches" Argument, das den Mechanisten herausfordert, sein Modell zu benennen.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'J. R. Lucas', work: '„Minds, Machines and Gödel", Philosophy 36', year: '1961', status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'gegner', author: 'Douglas R. Hofstadter', work: 'I Am a Strange Loop', year: '2007', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Wer liest die Gödelnummer als Satz über sich selbst – die Maschine oder der Mathematiker?`,
                    `Hat ein Thermostat mit Rückkopplung schon ein bisschen Ich?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'menschen-inkonsistent',
          objection: `Menschen glauben ständig Widersprüchliches. Also gelten Gödels Voraussetzungen für sie gar nicht.`,
          objectionBy: 'Paul Benacerraf',
          answer: `Unsere Meinungen sind oft widersprüchlich – aber Mathematiker können Fehler erkennen und korrigieren. Und für jedes konkret genannte widerspruchsfreie System, etwa die Peano-Arithmetik, erkennen wir den Gödelsatz als wahr, weil wir wissen, warum das System widerspruchsfrei ist (wir kennen sein Standardmodell). Die Frage ist, ob dieses Erkennen selbst mechanisch ist – das bleibt offen.`,
          followUps: [
            {
              id: 'physik-ist-berechenbar',
              objection: `Das Gehirn ist ein physikalisches System, und die Physik ist berechenbar (Church-Turing-Deutsch-Prinzip). Also ist alles, was das Gehirn tut, prinzipiell von einem Computer simulierbar. Fertig.`,
              objectionBy: 'Max Tegmark / Ray Kurzweil',
              answer: `Das ist ein Zirkel: Dass **alles** am menschlichen Denken physikalisch und berechenbar ist, ist genau die strittige These – du setzt sie als Prämisse ein. Dass die bekannte Physik berechenbar ist, ist zudem eine Vermutung (Deutsch formuliert es als Prinzip, nicht als Beweis). Und selbst eine perfekte Simulation des Gehirns wäre so wenig ein Geist, wie die Simulation eines Gewitters nass ist.`,
              detail: `Hier hilft die Unterscheidung zwischen **Verhalten** und **Erleben**: Eine Simulation kann Ausgaben reproduzieren; ob sie dabei etwas versteht oder erlebt, folgt daraus nicht (Searles chinesisches Zimmer). Gödels Disjunktion zeigt zusätzlich: Wenn der Geist eine Maschine ist, dann eine, die ihre eigene Beschreibung nie mit Gewissheit kennen kann. Die Behauptung „Der Geist ist berechenbar" ist also bestenfalls eine Hoffnung, kein Ergebnis.`,
              questionsBack: [
                `Ist die Aussage „Alles Denken ist berechenbar" selbst ein Ergebnis der Physik – oder eine philosophische Voraussetzung?`,
              ],
              followUps: [
                {
                  id: 'orch-or-widerlegt',
                  objection: `Penroses Ausweg – nichtberechenbare Quantenprozesse in den Mikrotubuli (Orch-OR, mit Hameroff) – ist doch widerlegt. Ich habe 2000 selbst gezeigt, dass die Dekohärenz im warmen Gehirn viel zu schnell ist.`,
                  objectionBy: 'Max Tegmark',
                  answer: `Ich verteidige Orch-OR nicht; es ist eine spekulative Hypothese, und Tegmarks Dekohärenz-Rechnung ist ein ernster Einwand (Hameroffs Gruppe bestreitet die Annahmen). Aber mein Argument hängt daran nicht: Ob das Denken mechanisch ist, entscheidet sich an Bewusstsein, Bedeutung und mathematischer Einsicht – nicht an einer bestimmten Theorie über Quanteneffekte im Gehirn. Penroses Physik kann falsch sein, während seine Frage richtig bleibt.`,
                  detail: `Wichtig für dich: Verknüpfe den Glauben nie mit einer bestimmten neurowissenschaftlichen Hypothese. Die christliche Sicht vom Menschen als Einheit von Leib und vernunftbegabter Seele hängt nicht davon ab, wo im Gehirn sich der Geist „zeigt". Die Väter betonten die Einheit des Menschen; die Seele ist kein Bauteil, das man unter dem Mikroskop findet, sondern das Prinzip, das den Leib zu einem lebendigen, erkennenden Menschen macht.`,
                  sources: [
                    { kind: 'gegner', author: 'Max Tegmark', work: '„Importance of quantum decoherence in brain processes", Physical Review E 61', year: '2000', status: 'paraphrase' },
                    { kind: 'wissenschaft', author: 'Roger Penrose', work: 'Shadows of the Mind', year: '1994', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ki-loest-mathematik',
      objection: `KI-Systeme lösen inzwischen Aufgaben der Mathematik-Olympiade auf Goldmedaillen-Niveau (2025). Der menschliche Geist hat keinen Sonderstatus.`,
      objectionBy: 'KI-Forscher',
      answer: `Das ist beeindruckend, und ich gebe es ohne Zögern zu. Aber es widerspricht Gödel nicht: Maschinen können innerhalb formaler Rahmen enorm leistungsfähig sein. Gödel betrifft die Grenzen jedes festen Systems – und KI-Systeme sind solche Systeme. Ob eine Maschine eine Lösung **versteht** oder dabei **etwas erlebt**, ist eine ganz andere Frage.`,
      followUps: [
        {
          id: 'dann-auch-menschen',
          objection: `Wenn Maschinen Gödel-Grenzen haben und Menschen vielleicht auch, gibt es keinen Unterschied.`,
          answer: `Vielleicht nicht in der reinen Beweiskraft – das ist die offene Disjunktion. Der Unterschied, auf den es mir ankommt, liegt woanders: Bewusstsein, Bedeutung und Verstehen. Dazu siehe die Debatte über KI und Bewusstsein. Gödel ist dafür nur ein Baustein, nicht das Fundament.`,
          detail: `Siehe Themenblock „Informatik und Künstliche Intelligenz", Claim „KI wird Bewusstsein entwickeln".`,
          followUps: [
            {
              id: 'ki-entdeckt-neue-mathematik',
              objection: `Warte ein paar Jahre: KI wird neue Sätze beweisen, die kein Mensch versteht. Dann ist der Mythos vom besonderen mathematischen Geist erledigt.`,
              objectionBy: 'Ray Kurzweil',
              answer: `Gut möglich, dass KI neue Sätze findet – und ich würde mich darüber freuen. Aber bedenke, was das hieße: Es gäbe mathematische Wahrheiten, die schon **vor** ihrer Entdeckung wahr waren und die eine Maschine „findet". Das stützt den Realismus über Mathematik, nicht den Materialismus. Ob die Maschine dabei etwas **versteht**, bleibt offen – und einen Beweis, den niemand versteht, müssen am Ende Menschen prüfen und deuten.`,
              detail: `Schon heute werden computergestützte Beweise (Vierfarbensatz 1976, Keplersche Vermutung, Hales 1998/2014) eingesetzt; formale Beweisprüfer wie Lean bestätigen Beweise maschinell. Das ist ein Triumph menschlicher Werkzeugbaukunst – so wie das Teleskop ein Triumph der Astronomie ist. Gödel bleibt davon unberührt: Jede KI arbeitet als festes System (oder als Folge fester Systeme) und unterliegt dessen Grenzen. Die Frage nach Bewusstsein und Bedeutung ist eine andere als die nach Rechenleistung.`,
              questionsBack: [
                `Wenn eine KI einen Satz entdeckt – war er vorher schon wahr? Und wer hat ihn wahr gemacht?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'goedel-exzentriker',
      objection: `Gödel war paranoid und ist am Ende verhungert. Seine religiösen Ansichten sind die Privatsache eines Exzentrikers.`,
      answer: `Gödels Leiden sind tragisch, aber sie widerlegen keine Argumente – das wäre ein Angriff auf die Person. Seine mathematische Weltsicht teilten viele große Mathematiker (Hardy, Penrose, Connes). Ehrlich bleibt: Gödel war kein Kirchgänger, und man sollte ihn nicht als christlichen Kronzeugen vereinnahmen.`,
      followUps: [
        {
          id: 'ontologischer-beweis-modal',
          objection: `Und sein ontologischer Gottesbeweis ist Modallogik-Spielerei. Computerprüfungen haben sogar Probleme darin gefunden.`,
          objectionBy: 'Kritiker des ontologischen Arguments',
          answer: `Benzmüller und Woltzenlogel Paleo haben Gödels Beweis 2014 mit automatischen Beweisern geprüft: Die Logik ist gültig relativ zu den Axiomen; zugleich zeigte sich, dass Gödels ursprüngliche Fassung ein Problem hatte und die verbesserte Fassung (Dana Scott) einen „Modalkollaps" nach sich zieht. Ehrlich gesagt: Der Beweis ist logisch gültig, aber seine Prämissen sind umstritten – wie bei jedem ontologischen Argument.`,
          sources: [
            { kind: 'wissenschaft', author: 'Christoph Benzmüller & Bruno Woltzenlogel Paleo', work: 'Automating Gödel\'s Ontological Proof of God\'s Existence with Higher-order Automated Theorem Provers', ref: 'ECAI 2014', year: '2014', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'ontologische-parodie',
              objection: `Mit derselben Logik kann man alles beweisen: Ersetze „positive Eigenschaften" durch andere Axiome, und du bekommst ein maximal böses Wesen. Ein Beweis, der sich so parodieren lässt, beweist nichts.`,
              objectionBy: 'Graham Oppy',
              answer: `Parodien zeigen, dass die Last auf den **Prämissen** liegt – das gebe ich offen zu. Aber sie sind nicht symmetrisch: Gödels Axiome definieren „positiv" so, dass positive Eigenschaften keine Privationen sind und miteinander verträglich bleiben; „maximal böse" ist dagegen ein Bündel von Mängeln, das sich selbst untergräbt (Macht ohne Güte ist bei den Vätern eine Verarmung des Seins). Darum spreche ich mit Gödels Beweis nur von einem logisch interessanten Argument, nicht von einem Knockout.`,
              detail: `Die Väter – etwa Athanasius und Basilius – verstehen das Böse als Mangel an Gutem, nicht als eigenständige Substanz. Das ist ein Grund, warum die „Parodie" des maximal bösen Wesens nicht spiegelbildlich funktioniert. Trotzdem: Ontologische Argumente überzeugen fast nur Menschen, die die Prämissen schon für plausibel halten. In einer Debatte mit einem Mathematiker sind Gödels Disjunktion und die Frage nach der Natur mathematischer Wahrheit die stärkeren Themen.`,
              voices: [
                {
                  person: 'athanasius',
                  role: 'als Kirchenvater',
                  text: `Athanasius lehrt in *Contra Gentes*, dass das Böse kein eigenes Sein hat: Es ist das, was nicht ist – die Abwendung der Seele vom Guten. Gott allein ist der wahrhaft Seiende und Gute. Darum ist ein „vollkommen böses Wesen" kein Gegenstück zu Gott, sondern ein Widerspruch in sich.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '4–7', year: 'um 335', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Wahrheit über Beweisbarkeit hinausgeht – was macht einen unbeweisbaren Satz wahr?`,
    `Welches Horn von Gödels Disjunktion wählst du – und welchen Preis zahlst du dafür?`,
    `Ist „Der Geist ist ein Algorithmus" für dich ein wissenschaftliches Ergebnis oder eine metaphysische Annahme?`,
  ],
  avoid: [
    `„Gödel hat bewiesen, dass es Gott gibt." – Falsch. Die Unvollständigkeitssätze sagen nichts über Gott.`,
    `„Gödel zeigt, dass das Universum eine äußere Ursache braucht." – Klassische Fehlanwendung; das Universum ist kein formales Axiomensystem.`,
    `Lucas-Penrose als „unwiderlegt" darstellen – die Mehrheit der Logiker lehnt die starke Fassung ab.`,
    `Gödel als Christen vereinnahmen – er war Theist, aber kein praktizierender Kirchgänger.`,
  ],
  concessions: [
    `Die Unvollständigkeitssätze sind enger, als Populärliteratur und manche Apologeten behaupten.`,
    `Das Lucas-Penrose-Argument in seiner starken Form wird von den meisten Logikern abgelehnt.`,
    `Gödels ontologischer Beweis ist logisch gültig, aber seine Prämissen sind keineswegs allgemein akzeptiert.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Torkel Franzén', work: 'Gödel\'s Theorem: An Incomplete Guide to Its Use and Abuse', year: '2005', status: 'paraphrase', note: 'Pflichtlektüre, um Fehlanwendungen zu vermeiden.' },
    { kind: 'fachliteratur', author: 'Leon Horsten & Philip Welch (Hg.)', work: 'Gödel\'s Disjunction', year: '2016', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Roger Penrose', work: 'Shadows of the Mind', year: '1994', status: 'paraphrase', note: 'Penrose ist kein Christ; sein Argument zeigt, dass Zweifel am Mechanismus nicht religiös motiviert sein müssen.' },
    { kind: 'fachliteratur', author: 'Hao Wang', work: 'A Logical Journey: From Gödel to Philosophy', year: '1996', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Gödel', 'Unvollständigkeit', 'Lucas-Penrose', 'Mechanismus', 'Logik'],
  related: [
    'mathematik/mathematik-menschliche-erfindung',
    'informatik-ki/ki-wird-bewusst',
    'naturalismus/bewusstsein-materiell-erklaerbar',
    'gottesbeweise/ontologisch-wortspiel',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
  ],
};

export default claim;
